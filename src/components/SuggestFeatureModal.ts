import type { SuggestionTracker } from '../hooks/useSuggestionTracking';

let modalInstance: HTMLDivElement | null = null;
let activeTracker: SuggestionTracker | null = null;
let lastActiveElement: HTMLElement | null = null;

// CSS styles to be injected dynamically when the modal is first opened
const modalStyles = `
  .suggest-modal-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.75);
    backdrop-filter: blur(4px);
    z-index: 400; /* var(--z-modal) */
    display: flex;
    align-items: center;
    justify-content: center;
    padding: var(--space-4);
    opacity: 0;
    transition: opacity var(--duration-normal) var(--ease-out);
  }

  .suggest-modal-overlay.active {
    opacity: 1;
  }

  .suggest-modal-card {
    background-color: var(--surface-elevated);
    border: 1px solid var(--border);
    border-radius: var(--radius-lg);
    width: 100%;
    max-width: 520px;
    padding: var(--space-6);
    box-shadow: var(--shadow-xl);
    transform: translateY(10px) scale(0.98);
    transition: transform var(--duration-normal) var(--ease-out);
    display: flex;
    flex-direction: column;
    gap: var(--space-4);
  }

  .suggest-modal-overlay.active .suggest-modal-card {
    transform: translateY(0) scale(1);
  }

  .suggest-modal-card h2 {
    font-family: var(--font-heading);
    font-size: var(--fs-h4);
    color: var(--text-primary);
    line-height: var(--lh-h4);
    margin-bottom: 2px;
  }

  .suggest-modal-card p.suggest-desc {
    color: var(--text-secondary);
    font-size: 14px;
    line-height: var(--lh-body);
  }

  .suggest-counter-container {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    gap: var(--space-2);
    margin-top: 4px;
  }

  .suggest-char-counter {
    font-size: 12px;
    color: var(--text-tertiary);
    font-family: var(--font-mono);
    white-space: nowrap;
  }

  .suggest-help-text {
    font-size: 12px;
    color: var(--text-secondary);
    margin-top: 4px;
    line-height: 1.3;
  }

  .suggest-error-msg {
    font-size: 12px;
    color: var(--error);
    line-height: 1.3;
  }

  .suggest-modal-actions {
    display: flex;
    justify-content: flex-end;
    gap: var(--space-3);
    margin-top: var(--space-4);
  }

  .optional-label {
    color: var(--text-tertiary);
    font-size: 12px;
    font-weight: normal;
  }

  .submit-spinner {
    display: inline-flex;
    align-items: center;
    gap: 8px;
  }

  .submit-spinner::before {
    content: "";
    width: 14px;
    height: 14px;
    border: 2px solid currentColor;
    border-right-color: transparent;
    border-radius: 50%;
    animation: suggest-spin 0.75s linear infinite;
  }

  @keyframes suggest-spin {
    to { transform: rotate(360deg); }
  }

  /* Toast Notification */
  .suggest-toast {
    position: fixed;
    bottom: var(--space-6);
    right: var(--space-6);
    z-index: 500;
    background-color: var(--surface-elevated);
    border: 1px solid var(--border);
    border-radius: var(--radius-md);
    padding: var(--space-4);
    max-width: 380px;
    box-shadow: var(--shadow-xl);
    transform: translateY(20px);
    opacity: 0;
    transition: transform var(--duration-normal) var(--ease-out),
                opacity var(--duration-normal) var(--ease-out);
    pointer-events: none;
  }

  .suggest-toast.active {
    transform: translateY(0);
    opacity: 1;
    pointer-events: auto;
  }

  .suggest-toast.success {
    border-left: 4px solid var(--success);
  }

  .suggest-toast.error {
    border-left: 4px solid var(--error);
  }

  .suggest-toast-content {
    font-family: var(--font-sans);
    font-size: 14px;
    color: var(--text-primary);
    line-height: 1.4;
  }
`;

function injectStyles() {
  const id = 'suggest-modal-styles';
  if (document.getElementById(id)) return;
  const style = document.createElement('style');
  style.id = id;
  style.textContent = modalStyles;
  document.head.appendChild(style);
}

export function initSuggestFeatureModal(tracker: SuggestionTracker) {
  activeTracker = tracker;
  injectStyles();

  if (modalInstance) {
    openModal();
    return;
  }

  // Save the trigger element for accessibility focus restore
  lastActiveElement = document.activeElement as HTMLElement;

  // Create Modal Structure
  const modal = document.createElement('div');
  modal.className = 'suggest-modal-overlay';
  modal.id = 'suggest-modal-overlay';
  modal.setAttribute('role', 'dialog');
  modal.setAttribute('aria-modal', 'true');
  modal.setAttribute('aria-labelledby', 'suggest-modal-title');
  modal.setAttribute('aria-describedby', 'suggest-modal-desc');

  modal.innerHTML = `
    <div class="suggest-modal-card" tabIndex="-1">
      <h2 id="suggest-modal-title">Have an idea?</h2>
      <p class="suggest-desc" id="suggest-modal-desc">Tell us about a tool, feature, or improvement that would save your time. We read every suggestion.</p>
      
      <form id="suggest-feature-form" novalidate>
        <!-- Anti-Spam Honeypot Field -->
        <div style="display: none;" aria-hidden="true">
          <input type="text" id="suggest-honeypot" name="website_url" tabIndex="-1" autocomplete="off" />
        </div>

        <div class="form-group">
          <label for="suggest-text" class="label">Your suggestion *</label>
          <textarea id="suggest-text" name="suggestion" required minlength="20" maxlength="1000" placeholder="What should we build or improve? Explain the problem you're trying to solve, how you'd expect it to work, and why it would be useful."></textarea>
          <div class="suggest-counter-container">
            <span class="suggest-error-msg" id="suggest-text-error" aria-live="polite"></span>
            <span class="suggest-char-counter" id="suggest-char-counter" aria-live="polite">0 / 1000</span>
          </div>
        </div>

        <div class="form-group" style="margin-top: var(--space-4);">
          <label for="suggest-email" class="label">Email <span class="optional-label">(optional)</span></label>
          <input type="email" id="suggest-email" name="email" placeholder="name@example.com" autocomplete="email" />
          <div class="suggest-help-text">Leave your email if you'd like us to contact you about your suggestion.</div>
          <div class="suggest-error-msg" id="suggest-email-error" aria-live="polite" style="margin-top: 4px;"></div>
        </div>

        <div class="suggest-modal-actions">
          <button type="button" class="btn btn-secondary" id="suggest-cancel-btn">Cancel</button>
          <button type="submit" class="btn btn-primary" id="suggest-submit-btn" disabled>Send suggestion</button>
        </div>
      </form>
    </div>
  `;

  document.body.appendChild(modal);
  modalInstance = modal;

  // Setup Event Listeners
  setupModalEvents(modal);

  openModal();
}

function openModal() {
  if (!modalInstance) return;
  lastActiveElement = document.activeElement as HTMLElement;

  modalInstance.style.display = 'flex';
  // Trigger transition reflow
  modalInstance.offsetHeight; 
  modalInstance.classList.add('active');

  // Focus the main textarea
  const textarea = modalInstance.querySelector('#suggest-text') as HTMLTextAreaElement;
  if (textarea) {
    textarea.focus();
  }

  // Bind Keyboard Focus Trap
  document.addEventListener('keydown', handleGlobalKeydown);
}

function closeModal() {
  if (!modalInstance) return;
  modalInstance.classList.remove('active');
  document.removeEventListener('keydown', handleGlobalKeydown);

  // Wait for transition to end before hiding
  setTimeout(() => {
    if (modalInstance) {
      modalInstance.style.display = 'none';
      // Reset form fields
      const form = modalInstance.querySelector('#suggest-feature-form') as HTMLFormElement;
      if (form) {
        form.reset();
        validateForm();
      }
    }
    // Restore focus
    if (lastActiveElement) {
      lastActiveElement.focus();
    }
  }, 180); // match normal transition duration (180ms)
}

function handleGlobalKeydown(e: KeyboardEvent) {
  if (!modalInstance) return;

  // Escape key closes modal
  if (e.key === 'Escape') {
    closeModal();
    return;
  }

  // Focus trap
  if (e.key === 'Tab') {
    const focusableElements = modalInstance.querySelectorAll(
      'textarea, input:not([tabindex="-1"]), button'
    );
    const firstElement = focusableElements[0] as HTMLElement;
    const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

    if (e.shiftKey) {
      if (document.activeElement === firstElement) {
        lastElement.focus();
        e.preventDefault();
      }
    } else {
      if (document.activeElement === lastElement) {
        firstElement.focus();
        e.preventDefault();
      }
    }
  }
}

function setupModalEvents(modal: HTMLDivElement) {
  const form = modal.querySelector('#suggest-feature-form') as HTMLFormElement;
  const textarea = modal.querySelector('#suggest-text') as HTMLTextAreaElement;
  const emailInput = modal.querySelector('#suggest-email') as HTMLInputElement;
  const cancelBtn = modal.querySelector('#suggest-cancel-btn') as HTMLButtonElement;
  const submitBtn = modal.querySelector('#suggest-submit-btn') as HTMLButtonElement;

  // Input Listeners
  textarea.addEventListener('input', () => {
    validateForm();
  });

  emailInput.addEventListener('input', () => {
    validateForm();
  });

  // Cancel Event
  cancelBtn.addEventListener('click', closeModal);

  // Overlay Click closes modal
  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      closeModal();
    }
  });

  // Form Submit Event
  form.addEventListener('submit', async (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    // Check Honeypot
    const honeypot = modal.querySelector('#suggest-honeypot') as HTMLInputElement;
    if (honeypot.value) {
      // Quietly fail for bots
      closeModal();
      return;
    }

    // Set Loading State
    setLoadingState(true);

    try {
      // Gather dynamic metadata
      const metadata = activeTracker ? activeTracker.collectMetadata() : {};
      
      const payload = {
        suggestion: textarea.value.trim(),
        email: emailInput.value.trim() || null,
        ...metadata,
      };

      const response = await fetch('/api/suggestions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        const errData = await response.json().catch(() => ({}));
        throw new Error(errData.message || `Server error: ${response.status}`);
      }

      // Success Flows
      showToast('Thanks for your suggestion! Every idea is reviewed, and many of our tools start as user requests.', 'success');
      closeModal();

    } catch (err: any) {
      console.error('Failed to submit suggestion:', err);
      showToast(err.message || 'Submission failed. Please check your connection and try again.', 'error');
    } finally {
      setLoadingState(false);
    }
  });
}

function validateForm(): boolean {
  if (!modalInstance) return false;

  const textarea = modalInstance.querySelector('#suggest-text') as HTMLTextAreaElement;
  const emailInput = modalInstance.querySelector('#suggest-email') as HTMLInputElement;
  const textError = modalInstance.querySelector('#suggest-text-error') as HTMLElement;
  const emailError = modalInstance.querySelector('#suggest-email-error') as HTMLElement;
  const charCounter = modalInstance.querySelector('#suggest-char-counter') as HTMLElement;
  const submitBtn = modalInstance.querySelector('#suggest-submit-btn') as HTMLButtonElement;

  const suggestionVal = textarea.value;
  const emailVal = emailInput.value.trim();

  let isTextValid = false;
  let isEmailValid = true;

  // Character Counter Update
  charCounter.textContent = `${suggestionVal.length} / 1000`;

  // Validate Suggestion Length
  if (suggestionVal.length === 0) {
    textError.textContent = '';
  } else if (suggestionVal.length < 20) {
    textError.textContent = 'Suggestion must be at least 20 characters.';
    charCounter.style.color = 'var(--error)';
  } else if (suggestionVal.length > 1000) {
    textError.textContent = 'Suggestion cannot exceed 1000 characters.';
    charCounter.style.color = 'var(--error)';
  } else {
    textError.textContent = '';
    charCounter.style.color = 'var(--text-tertiary)';
    isTextValid = true;
  }

  // Validate Email
  if (emailVal.length > 0) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(emailVal)) {
      emailError.textContent = 'Please enter a valid email address.';
      isEmailValid = false;
    } else {
      emailError.textContent = '';
    }
  } else {
    emailError.textContent = '';
  }

  const isValid = isTextValid && isEmailValid;
  submitBtn.disabled = !isValid;

  return isValid;
}

function setLoadingState(isLoading: boolean) {
  if (!modalInstance) return;

  const submitBtn = modalInstance.querySelector('#suggest-submit-btn') as HTMLButtonElement;
  const cancelBtn = modalInstance.querySelector('#suggest-cancel-btn') as HTMLButtonElement;
  const textarea = modalInstance.querySelector('#suggest-text') as HTMLTextAreaElement;
  const emailInput = modalInstance.querySelector('#suggest-email') as HTMLInputElement;

  if (isLoading) {
    submitBtn.innerHTML = '<span class="submit-spinner">Sending...</span>';
    submitBtn.disabled = true;
    cancelBtn.disabled = true;
    textarea.disabled = true;
    emailInput.disabled = true;
  } else {
    submitBtn.innerHTML = 'Send suggestion';
    textarea.disabled = false;
    emailInput.disabled = false;
    cancelBtn.disabled = false;
    validateForm();
  }
}

function showToast(message: string, type: 'success' | 'error') {
  // Remove any existing toast
  const existingToast = document.querySelector('.suggest-toast');
  if (existingToast) {
    existingToast.remove();
  }

  const toast = document.createElement('div');
  toast.className = `suggest-toast ${type}`;
  toast.innerHTML = `
    <div class="suggest-toast-content">${message}</div>
  `;

  document.body.appendChild(toast);

  // Trigger reflow
  toast.offsetHeight;
  toast.classList.add('active');

  // Dismiss after 5 seconds
  setTimeout(() => {
    toast.classList.remove('active');
    setTimeout(() => {
      toast.remove();
    }, 300);
  }, 5000);
}
