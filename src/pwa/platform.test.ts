import { afterEach, describe, expect, it, vi } from 'vitest';
import { getInstallStrategy } from './platform';

function setNavigator(userAgent: string, platform = '', maxTouchPoints = 0) {
  vi.stubGlobal('navigator', {
    userAgent,
    platform,
    maxTouchPoints,
  });
}

function setStandalone(isStandalone: boolean) {
  vi.stubGlobal('window', {
    matchMedia: vi.fn().mockReturnValue({ matches: isStandalone }),
  });
}

afterEach(() => {
  vi.unstubAllGlobals();
});

describe('getInstallStrategy', () => {
  it.each([
    [
      'Chrome Android',
      'Mozilla/5.0 (Linux; Android 14) AppleWebKit/537.36 Chrome/120.0.0.0 Mobile Safari/537.36',
      'Linux armv8l',
      0,
      false,
      'native-prompt',
    ],
    [
      'Chrome desktop',
      'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 Chrome/120.0.0.0 Safari/537.36',
      'Win32',
      0,
      false,
      'native-prompt',
    ],
    [
      'Edge',
      'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 Chrome/120.0.0.0 Safari/537.36 Edg/120.0.0.0',
      'Win32',
      0,
      false,
      'native-prompt',
    ],
    [
      'Safari iOS',
      'Mozilla/5.0 (iPhone; CPU iPhone OS 17_0 like Mac OS X) AppleWebKit/605.1.15 Version/17.0 Mobile/15E148 Safari/604.1',
      'iPhone',
      0,
      false,
      'ios-manual',
    ],
    [
      'Chrome on iOS',
      'Mozilla/5.0 (iPhone; CPU iPhone OS 17_0 like Mac OS X) AppleWebKit/605.1.15 CriOS/120.0.0.0 Mobile/15E148 Safari/604.1',
      'iPhone',
      0,
      false,
      'ios-manual',
    ],
    [
      'iPadOS with Mac user agent',
      'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15) AppleWebKit/605.1.15 Version/17.0 Safari/605.1.15',
      'MacIntel',
      5,
      false,
      'ios-manual',
    ],
    [
      'Safari macOS',
      'Mozilla/5.0 (Macintosh; Intel Mac OS X 14_0) AppleWebKit/605.1.15 Version/17.0 Safari/605.1.15',
      'MacIntel',
      0,
      false,
      'safari-desktop-manual',
    ],
    [
      'Firefox desktop',
      'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:120.0) Gecko/20100101 Firefox/120.0',
      'Win32',
      0,
      false,
      'firefox-manual',
    ],
    [
      'Firefox Android',
      'Mozilla/5.0 (Android 14; Mobile; rv:120.0) Gecko/120.0 Firefox/120.0',
      'Linux armv8l',
      0,
      false,
      'firefox-manual',
    ],
    [
      'Instagram in-app browser',
      'Mozilla/5.0 (iPhone; CPU iPhone OS 17_0 like Mac OS X) AppleWebKit/605.1.15 Mobile/15E148 Instagram 300.0.0.0.0',
      'iPhone',
      0,
      false,
      'in-app-browser',
    ],
    [
      'standalone mode',
      'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 Chrome/120.0.0.0 Safari/537.36',
      'Win32',
      0,
      true,
      'installed',
    ],
  ] as const)(
    'returns %s strategy',
    (_name, userAgent, platform, maxTouchPoints, standalone, expected) => {
      setNavigator(userAgent, platform, maxTouchPoints);
      setStandalone(standalone);

      expect(getInstallStrategy()).toBe(expected);
    },
  );
});
