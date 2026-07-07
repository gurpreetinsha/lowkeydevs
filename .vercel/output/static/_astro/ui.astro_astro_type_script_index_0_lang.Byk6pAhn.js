import{i as e,t}from"./unicode.DiooRdWd.js";function n(n){return n?[{name:`Serif Bold`,text:e(n,t.boldSerif)},{name:`Sans-Serif Bold`,text:e(n,t.boldSans)},{name:`Serif Bold Italic`,text:e(n,t.boldItalicSerif)},{name:`Sans-Serif Bold Italic`,text:e(n,t.boldItalicSans)},{name:`Script/Cursive Bold`,text:e(n,t.scriptBold)},{name:`Gothic Bold`,text:e(n,t.gothicBold)}]:[]}var r=class extends HTMLElement{inputEl;resultsEl;connectedCallback(){this.inputEl=this.querySelector(`#bold-input`),this.resultsEl=this.querySelector(`#bold-results`),this.inputEl.addEventListener(`input`,()=>this.handleUpdate()),this.addEventListener(`click`,e=>{let t=e.target.closest(`button`);if(!t)return;let n=t.getAttribute(`data-action`);if(n===`clear`&&this.handleClear(),n===`load-sample`&&this.handleLoadSample(),t.classList.contains(`btn-copy`)){let e=parseInt(t.getAttribute(`data-index`)||`0`);this.handleCopy(t,e)}})}handleUpdate(){let e=this.inputEl.value;if(!e){this.resultsEl.innerHTML=`
          <div class="empty-state">
            Type some text on the left to see bold styles here...
          </div>
        `;return}let t=n(e);this.resultsEl.innerHTML=t.map((e,t)=>`
        <div class="result-card">
          <div class="result-info">
            <span class="result-label">${e.name}</span>
            <div class="result-text" id="text-${t}">${this.escapeHtml(e.text)}</div>
          </div>
          <button class="btn btn-secondary btn-sm btn-copy" data-index="${t}" aria-label="Copy ${e.name}">
            Copy
          </button>
        </div>
      `).join(``)}handleClear(){this.inputEl.value=``,this.handleUpdate(),this.inputEl.focus()}handleLoadSample(){this.inputEl.value=`Bold Text Generator`,this.handleUpdate()}async handleCopy(e,t){let n=this.querySelector(`#text-${t}`);if(!n)return;let r=n.textContent||``;try{await navigator.clipboard.writeText(r);let t=e.textContent;e.textContent=`Copied!`,e.classList.add(`copied-btn`),setTimeout(()=>{e.textContent=t,e.classList.remove(`copied-btn`)},1500)}catch(e){console.error(`Failed to copy`,e)}}escapeHtml(e){return e.replace(/&/g,`&amp;`).replace(/</g,`&lt;`).replace(/>/g,`&gt;`).replace(/"/g,`&quot;`).replace(/'/g,`&#039;`)}};customElements.get(`bold-text-tool`)||customElements.define(`bold-text-tool`,r);