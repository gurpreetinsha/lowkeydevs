export class ScrollTracker {
  private maxScrollPercent = 0;
  private onScrollHandler: () => void;

  constructor() {
    this.onScrollHandler = this.trackScroll.bind(this);
  }

  public start(): void {
    if (typeof window === 'undefined') return;
    this.trackScroll(); // Record initial scroll percentage
    window.addEventListener('scroll', this.onScrollHandler, { passive: true });
  }

  public stop(): void {
    if (typeof window === 'undefined') return;
    window.removeEventListener('scroll', this.onScrollHandler);
  }

  public getMaxScrollPercent(): number {
    return this.maxScrollPercent;
  }

  private trackScroll(): void {
    const scrollTop = window.scrollY || document.documentElement.scrollTop;
    const docHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    
    if (docHeight <= 0) {
      this.maxScrollPercent = 100;
      return;
    }

    const scrollPercent = Math.min(100, Math.max(0, Math.round((scrollTop / docHeight) * 100)));
    if (scrollPercent > this.maxScrollPercent) {
      this.maxScrollPercent = scrollPercent;
    }
  }
}
