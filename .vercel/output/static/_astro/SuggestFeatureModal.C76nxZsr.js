var e=null,t=null,n=null;function r(){let e=`suggest-modal-styles`;if(document.getElementById(e))return;let t=document.createElement(`style`);t.id=e,t.textContent=`
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
`,document.head.appendChild(t)}function i(i){if(t=i,r(),e){a();return}n=document.activeElement;let o=document.createElement(`div`);o.className=`suggest-modal-overlay`,o.id=`suggest-modal-overlay`,o.setAttribute(`role`,`dialog`),o.setAttribute(`aria-modal`,`true`),o.setAttribute(`aria-labelledby`,`suggest-modal-title`),o.setAttribute(`aria-describedby`,`suggest-modal-desc`),o.innerHTML=`
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
  `,document.body.appendChild(o),e=o,c(o),a()}function a(){if(!e)return;n=document.activeElement,e.style.display=`flex`,e.offsetHeight,e.classList.add(`active`);let t=e.querySelector(`#suggest-text`);t&&t.focus(),document.addEventListener(`keydown`,s)}function o(){e&&(e.classList.remove(`active`),document.removeEventListener(`keydown`,s),setTimeout(()=>{if(e){e.style.display=`none`;let t=e.querySelector(`#suggest-feature-form`);t&&(t.reset(),l())}n&&n.focus()},180))}function s(t){if(e){if(t.key===`Escape`){o();return}if(t.key===`Tab`){let n=e.querySelectorAll(`textarea, input:not([tabindex="-1"]), button`),r=n[0],i=n[n.length-1];t.shiftKey?document.activeElement===r&&(i.focus(),t.preventDefault()):document.activeElement===i&&(r.focus(),t.preventDefault())}}}function c(e){let n=e.querySelector(`#suggest-feature-form`),r=e.querySelector(`#suggest-text`),i=e.querySelector(`#suggest-email`),a=e.querySelector(`#suggest-cancel-btn`);e.querySelector(`#suggest-submit-btn`),r.addEventListener(`input`,()=>{l()}),i.addEventListener(`input`,()=>{l()}),a.addEventListener(`click`,o),e.addEventListener(`click`,t=>{t.target===e&&o()}),n.addEventListener(`submit`,async n=>{if(n.preventDefault(),l()){if(e.querySelector(`#suggest-honeypot`).value){o();return}u(!0);try{let e=t?t.collectMetadata():{},n={suggestion:r.value.trim(),email:i.value.trim()||null,...e},a=await fetch(`/api/suggestions`,{method:`POST`,headers:{"Content-Type":`application/json`},body:JSON.stringify(n)});if(!a.ok){let e=await a.json().catch(()=>({}));throw Error(e.message||`Server error: ${a.status}`)}d(`Thanks for your suggestion! Every idea is reviewed, and many of our tools start as user requests.`,`success`),o()}catch(e){console.error(`Failed to submit suggestion:`,e),d(e.message||`Submission failed. Please check your connection and try again.`,`error`)}finally{u(!1)}}})}function l(){if(!e)return!1;let t=e.querySelector(`#suggest-text`),n=e.querySelector(`#suggest-email`),r=e.querySelector(`#suggest-text-error`),i=e.querySelector(`#suggest-email-error`),a=e.querySelector(`#suggest-char-counter`),o=e.querySelector(`#suggest-submit-btn`),s=t.value,c=n.value.trim(),l=!1,u=!0;a.textContent=`${s.length} / 1000`,s.length===0?r.textContent=``:s.length<20?(r.textContent=`Suggestion must be at least 20 characters.`,a.style.color=`var(--error)`):s.length>1e3?(r.textContent=`Suggestion cannot exceed 1000 characters.`,a.style.color=`var(--error)`):(r.textContent=``,a.style.color=`var(--text-tertiary)`,l=!0),c.length>0?/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(c)?i.textContent=``:(i.textContent=`Please enter a valid email address.`,u=!1):i.textContent=``;let d=l&&u;return o.disabled=!d,d}function u(t){if(!e)return;let n=e.querySelector(`#suggest-submit-btn`),r=e.querySelector(`#suggest-cancel-btn`),i=e.querySelector(`#suggest-text`),a=e.querySelector(`#suggest-email`);t?(n.innerHTML=`<span class="submit-spinner">Sending...</span>`,n.disabled=!0,r.disabled=!0,i.disabled=!0,a.disabled=!0):(n.innerHTML=`Send suggestion`,i.disabled=!1,a.disabled=!1,r.disabled=!1,l())}function d(e,t){let n=document.querySelector(`.suggest-toast`);n&&n.remove();let r=document.createElement(`div`);r.className=`suggest-toast ${t}`,r.innerHTML=`
    <div class="suggest-toast-content">${e}</div>
  `,document.body.appendChild(r),r.offsetHeight,r.classList.add(`active`),setTimeout(()=>{r.classList.remove(`active`),setTimeout(()=>{r.remove()},300)},5e3)}export{i as initSuggestFeatureModal};