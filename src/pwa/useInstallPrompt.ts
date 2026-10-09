import { useCallback, useEffect, useRef, useState } from 'react';
import { getInstallStrategy, type InstallStrategy } from './platform';

const DISMISSAL_KEY = 'pwa-install-dismissed-at';
const DISMISSAL_COOLDOWN_MS = 7 * 24 * 60 * 60 * 1000;

export interface BeforeInstallPromptEvent extends Event {
  readonly platforms: string[];
  readonly userChoice: Promise<{
    outcome: 'accepted' | 'dismissed';
    platform: string;
  }>;
  prompt(): Promise<void>;
}

declare global {
  interface WindowEventMap {
    beforeinstallprompt: BeforeInstallPromptEvent;
  }
}

function readDismissedUntil(): number {
  if (typeof window === 'undefined') return 0;

  try {
    const dismissedAt = Number(window.localStorage.getItem(DISMISSAL_KEY));
    const now = Date.now();
    return Number.isFinite(dismissedAt) &&
      dismissedAt > 0 &&
      dismissedAt <= now &&
      now - dismissedAt < DISMISSAL_COOLDOWN_MS
      ? dismissedAt + DISMISSAL_COOLDOWN_MS
      : 0;
  } catch {
    return 0;
  }
}

export function useInstallPrompt() {
  const deferredPrompt = useRef<BeforeInstallPromptEvent | null>(null);
  const [canInstallNatively, setCanInstallNatively] = useState(false);
  const [isInstalled, setIsInstalled] = useState(
    () => getInstallStrategy() === 'installed',
  );
  const [dismissedUntil, setDismissedUntil] = useState(readDismissedUntil);
  const strategy: InstallStrategy = isInstalled
    ? 'installed'
    : getInstallStrategy();

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const handleBeforeInstallPrompt = (event: BeforeInstallPromptEvent) => {
      event.preventDefault();
      deferredPrompt.current = event;
      setCanInstallNatively(true);
    };

    const handleAppInstalled = () => {
      deferredPrompt.current = null;
      setCanInstallNatively(false);
      setIsInstalled(true);
    };

    window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
    window.addEventListener('appinstalled', handleAppInstalled);

    return () => {
      window.removeEventListener(
        'beforeinstallprompt',
        handleBeforeInstallPrompt,
      );
      window.removeEventListener('appinstalled', handleAppInstalled);
    };
  }, []);

  useEffect(() => {
    if (typeof window === 'undefined' || dismissedUntil <= Date.now()) return;

    const timeout = window.setTimeout(
      () => setDismissedUntil(0),
      dismissedUntil - Date.now(),
    );
    return () => window.clearTimeout(timeout);
  }, [dismissedUntil]);

  const install = useCallback(async () => {
    const prompt = deferredPrompt.current;
    if (!prompt) return;

    deferredPrompt.current = null;
    setCanInstallNatively(false);

    try {
      await prompt.prompt();
      await prompt.userChoice;
    } finally {
      deferredPrompt.current = null;
      setCanInstallNatively(false);
    }
  }, []);

  const dismiss = useCallback(() => {
    const dismissedAt = Date.now();
    setDismissedUntil(dismissedAt + DISMISSAL_COOLDOWN_MS);

    if (typeof window === 'undefined') return;
    try {
      window.localStorage.setItem(DISMISSAL_KEY, String(dismissedAt));
    } catch {
      // Keep the dismissal for this page session if storage is unavailable.
    }
  }, []);

  return {
    strategy,
    canInstallNatively,
    install,
    isInstalled,
    isDismissed: dismissedUntil > Date.now(),
    dismiss,
  };
}
