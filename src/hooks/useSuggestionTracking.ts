import { getClientSystemInfo } from '../lib/browserInfo';
import { ScrollTracker } from '../lib/scrollTracker';
import { getAnonymousId, getSessionId } from '../lib/session';

export interface SuggestionMetadata {
  page_url: string;
  page_title: string;
  route: string;
  tool_slug: string | null;
  tool_category: string | null;
  created_at: string;
  user_agent: string;
  browser: string;
  browser_version: string;
  os: string;
  device_type: string;
  language: string;
  timezone: string;
  screen_width: number;
  screen_height: number;
  theme: string;
  referrer: string;
  time_on_page: number;
  scroll_percent: number;
  anonymous_id: string;
  session_id: string;
}

export class SuggestionTracker {
  private startTime: number;
  private scrollTracker: ScrollTracker;

  constructor() {
    this.startTime = Date.now();
    this.scrollTracker = new ScrollTracker();
  }

  public start(): void {
    this.scrollTracker.start();
  }

  public destroy(): void {
    this.scrollTracker.stop();
  }

  public collectMetadata(): SuggestionMetadata {
    const sysInfo = getClientSystemInfo();
    const endTime = Date.now();
    const timeOnPageSeconds = Math.round((endTime - this.startTime) / 1000);

    // Extract tool details from body data-attributes if available
    let toolSlug: string | null = null;
    let toolCategory: string | null = null;
    if (typeof document !== 'undefined') {
      toolSlug = document.body.getAttribute('data-tool-slug') || null;
      toolCategory = document.body.getAttribute('data-tool-category') || null;
    }

    const theme = (typeof document !== 'undefined' && document.documentElement.getAttribute('data-theme')) || 'dark';

    return {
      page_url: typeof window !== 'undefined' ? window.location.href : '',
      page_title: typeof document !== 'undefined' ? document.title : '',
      route: typeof window !== 'undefined' ? window.location.pathname : '',
      tool_slug: toolSlug,
      tool_category: toolCategory,
      created_at: new Date().toISOString(),
      user_agent: sysInfo.userAgent,
      browser: sysInfo.browser,
      browser_version: sysInfo.browserVersion,
      os: sysInfo.os,
      device_type: sysInfo.deviceType,
      language: sysInfo.language,
      timezone: sysInfo.timezone,
      screen_width: sysInfo.screenWidth,
      screen_height: sysInfo.screenHeight,
      theme,
      referrer: typeof document !== 'undefined' ? document.referrer : '',
      time_on_page: timeOnPageSeconds,
      scroll_percent: this.scrollTracker.getMaxScrollPercent(),
      anonymous_id: getAnonymousId(),
      session_id: getSessionId(),
    };
  }
}
