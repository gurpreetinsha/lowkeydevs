export interface SystemInfo {
  browser: string;
  browserVersion: string;
  os: string;
  deviceType: string;
}

export function parseUserAgent(userAgent: string): SystemInfo {
  let browser = 'Unknown';
  let browserVersion = 'Unknown';
  let os = 'Unknown';
  let deviceType = 'Desktop';

  const ua = userAgent.toLowerCase();

  // Detect Device Type
  const isMobile = /mobile|iphone|ipod|android|blackberry|opera mini|iemobile|webos/i.test(userAgent);
  const isTablet = /tablet|ipad|playbook|silk/i.test(userAgent) || 
                   (typeof navigator !== 'undefined' && navigator.maxTouchPoints > 1 && /macintosh/i.test(userAgent));
  
  if (isTablet) {
    deviceType = 'Tablet';
  } else if (isMobile) {
    deviceType = 'Mobile';
  } else {
    deviceType = 'Desktop';
  }

  // Detect OS
  if (/iphone|ipad|ipod/i.test(userAgent)) {
    os = 'iOS';
  } else if (/windows/i.test(userAgent)) {
    os = 'Windows';
  } else if (/macintosh|mac os x/i.test(userAgent)) {
    // Check if it's actually an iPad pretending to be Mac
    if (typeof navigator !== 'undefined' && navigator.maxTouchPoints > 1) {
      os = 'iOS';
      deviceType = 'Tablet';
    } else {
      os = 'macOS';
    }
  } else if (/android/i.test(userAgent)) {
    os = 'Android';
  } else if (/linux/i.test(userAgent)) {
    os = 'Linux';
  } else if (/cros/i.test(userAgent)) {
    os = 'Chrome OS';
  }

  // Detect Browser & Version
  const browserRules = [
    { name: 'Edge', regex: /edg\/([0-9._]+)/i },
    { name: 'Opera', regex: /(?:opera|opr)\/([0-9._]+)/i },
    { name: 'Chrome', regex: /chrome\/([0-9._]+)/i },
    { name: 'Safari', regex: /version\/([0-9._]+).*safari/i },
    { name: 'Firefox', regex: /firefox\/([0-9._]+)/i },
    { name: 'MSIE', regex: /(?:msie\s|trident.*rv:)([0-9._]+)/i }
  ];

  for (const rule of browserRules) {
    const match = userAgent.match(rule.regex);
    if (match) {
      browser = rule.name;
      browserVersion = match[1];
      break;
    }
  }

  return { browser, browserVersion, os, deviceType };
}

export function getClientSystemInfo(): SystemInfo & { 
  language: string; 
  timezone: string; 
  screenWidth: number; 
  screenHeight: number; 
  userAgent: string; 
} {
  if (typeof window === 'undefined') {
    return {
      browser: 'Unknown',
      browserVersion: 'Unknown',
      os: 'Unknown',
      deviceType: 'Unknown',
      language: 'Unknown',
      timezone: 'Unknown',
      screenWidth: 0,
      screenHeight: 0,
      userAgent: 'Unknown'
    };
  }

  const userAgent = navigator.userAgent;
  const parsed = parseUserAgent(userAgent);

  let timezone = 'Unknown';
  try {
    timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
  } catch (e) {
    // Ignore error
  }

  return {
    ...parsed,
    language: navigator.language || 'Unknown',
    timezone,
    screenWidth: window.screen ? window.screen.width : window.innerWidth,
    screenHeight: window.screen ? window.screen.height : window.innerHeight,
    userAgent
  };
}
