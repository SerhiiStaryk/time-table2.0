type NavigatorWithStandalone = Navigator & {
  standalone?: boolean;
};

export type InstallStrategy =
  | 'native-prompt'
  | 'ios-manual'
  | 'safari-desktop-manual'
  | 'firefox-manual'
  | 'in-app-browser'
  | 'installed'
  | 'unsupported';

function getUserAgent(): string {
  return typeof navigator === 'undefined' ? '' : navigator.userAgent;
}

function getPlatform(): string {
  return typeof navigator === 'undefined' ? '' : navigator.platform;
}

export function isStandalone(): boolean {
  if (
    typeof window !== 'undefined' &&
    typeof window.matchMedia === 'function' &&
    window.matchMedia('(display-mode: standalone)').matches
  ) {
    return true;
  }

  if (typeof navigator === 'undefined') return false;
  return (navigator as NavigatorWithStandalone).standalone === true;
}

export function isIOS(): boolean {
  if (typeof navigator === 'undefined') return false;

  const userAgent = getUserAgent();
  const platform = getPlatform();
  return (
    /iPhone|iPad|iPod/i.test(userAgent) ||
    (/Mac/i.test(platform) && navigator.maxTouchPoints > 1)
  );
}

export function isSafariDesktop(): boolean {
  const userAgent = getUserAgent();
  const platform = getPlatform();
  const isMac = /Mac/i.test(platform) || /Macintosh|Mac OS X/i.test(userAgent);
  const isSafari = /Safari\//i.test(userAgent);
  const isAnotherBrowser =
    /Chrome|Chromium|CriOS|Edg|OPR|Firefox|FxiOS|SamsungBrowser|DuckDuckGo/i.test(
      userAgent,
    );

  return isMac && isSafari && !isAnotherBrowser;
}

export function isFirefox(): boolean {
  return /Firefox|FxiOS/i.test(getUserAgent());
}

export function isAndroid(): boolean {
  return /Android/i.test(getUserAgent());
}

export function isInAppBrowser(): boolean {
  const userAgent = getUserAgent();

  if (
    /Instagram|FBAN|FBAV|TikTok|musical_ly|Line\/|MicroMessenger|Snapchat|Pinterest|LinkedInApp|Twitter|GSA\//i.test(
      userAgent,
    ) ||
    /;\s*wv\)|\bWebView\b/i.test(userAgent)
  ) {
    return true;
  }

  const isIosWebView =
    isIOS() &&
    /AppleWebKit/i.test(userAgent) &&
    !/Safari\/|CriOS|FxiOS|EdgiOS|OPiOS/i.test(userAgent);

  return isIosWebView;
}

function supportsSafariDockInstall(): boolean {
  const version = getUserAgent().match(/Version\/(\d+)/i);
  return version !== null && Number(version[1]) >= 17;
}

function supportsNativeInstallPrompt(): boolean {
  const userAgent = getUserAgent();
  const supportedBrowser =
    /Chrome\/|Chromium\/|Edg(?:e|A|iOS)?\/|OPR\/|SamsungBrowser\//i.test(
      userAgent,
    );

  return supportedBrowser && !isIOS();
}

export function getInstallStrategy(): InstallStrategy {
  if (isStandalone()) return 'installed';
  if (isInAppBrowser()) return 'in-app-browser';
  if (isIOS()) return 'ios-manual';
  if (isSafariDesktop()) {
    return supportsSafariDockInstall()
      ? 'safari-desktop-manual'
      : 'unsupported';
  }
  if (isFirefox()) return 'firefox-manual';
  if (supportsNativeInstallPrompt()) return 'native-prompt';

  return 'unsupported';
}
