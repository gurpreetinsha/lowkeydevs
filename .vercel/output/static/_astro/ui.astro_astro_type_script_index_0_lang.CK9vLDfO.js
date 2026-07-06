import{i as e,n as t,r as n,t as r}from"./unicode.DiooRdWd.js";function i(i){return i?[{name:`Mathematical Bold Serif`,text:e(i,r.boldSerif)},{name:`Mathematical Bold Sans`,text:e(i,r.boldSans)},{name:`Mathematical Italic Serif`,text:e(i,r.italicSerif)},{name:`Mathematical Italic Sans`,text:e(i,r.italicSans)},{name:`Mathematical Bold Italic Serif`,text:e(i,r.boldItalicSerif)},{name:`Mathematical Bold Italic Sans`,text:e(i,r.boldItalicSans)},{name:`Cursive / Script Normal`,text:e(i,r.scriptNormal)},{name:`Cursive / Script Bold`,text:e(i,r.scriptBold)},{name:`Gothic / Blackletter Normal`,text:e(i,r.gothicNormal)},{name:`Gothic / Blackletter Bold`,text:e(i,r.gothicBold)},{name:`Double-Struck (Blackboard)`,text:e(i,r.doubleStruck)},{name:`Circled White (Bubble)`,text:e(i,r.circledWhite)},{name:`Circled Black`,text:e(i,r.circledBlack)},{name:`Squared White`,text:e(i,r.squaredWhite)},{name:`Squared Black`,text:e(i,r.squaredBlack)},{name:`Small Caps`,text:e(i.toLowerCase(),r.smallCaps)},{name:`Superscript`,text:e(i,r.superscript)},{name:`Subscript`,text:e(i,r.subscript)},{name:`Underline Single`,text:n(i,t.single)},{name:`Underline Double`,text:n(i,t.double)},{name:`Strikethrough`,text:n(i,t.strike)},{name:`Slash Overlay`,text:n(i,`̷`)}]:[]}var a=class extends HTMLElement{inputEl;searchEl;resultsEl;connectedCallback(){this.inputEl=this.querySelector(`#unicode-input`),this.searchEl=this.querySelector(`#style-search`),this.resultsEl=this.querySelector(`#unicode-results`),this.inputEl.addEventListener(`input`,()=>this.handleUpdate()),this.searchEl.addEventListener(`input`,()=>this.handleUpdate()),this.addEventListener(`click`,e=>{let t=e.target.closest(`button`);if(!t)return;let n=t.getAttribute(`data-action`);if(n===`clear`&&this.handleClear(),n===`load-sample`&&this.handleLoadSample(),t.classList.contains(`btn-copy`)){let e=parseInt(t.getAttribute(`data-index`)||`0`);this.handleCopy(t,e)}}),this.handleLoadSample()}handleUpdate(){let e=this.inputEl.value,t=this.searchEl.value.toLowerCase().trim();if(!e){this.resultsEl.innerHTML=`
          <div class="empty-state">
            Type some text above to see converted unicode styles...
          </div>
        `;return}let n=i(e);if(t&&(n=n.filter(e=>e.name.toLowerCase().includes(t))),n.length===0){this.resultsEl.innerHTML=`
          <div class="empty-state">
            No matching styles found for "${t}".
          </div>
        `;return}this.resultsEl.innerHTML=n.map((e,t)=>`
        <div class="result-card">
          <div class="result-info">
            <span class="result-label">${e.name}</span>
            <div class="result-text" id="unicode-text-${t}">${this.escapeHtml(e.text)}</div>
          </div>
          <button class="btn btn-secondary btn-sm btn-copy" data-index="${t}" aria-label="Copy ${e.name}">
            Copy
          </button>
        </div>
      `).join(``)}handleClear(){this.inputEl.value=``,this.handleUpdate(),this.inputEl.focus()}handleLoadSample(){this.inputEl.value=`Unicode Math`,this.handleUpdate()}async handleCopy(e,t){let n=this.querySelector(`#unicode-text-${t}`);if(!n)return;let r=n.textContent||``;try{await navigator.clipboard.writeText(r);let t=e.textContent;e.textContent=`Copied!`,e.classList.add(`copied-btn`),setTimeout(()=>{e.textContent=t,e.classList.remove(`copied-btn`)},1500)}catch(e){console.error(`Failed to copy`,e)}}escapeHtml(e){return e.replace(/&/g,`&amp;`).replace(/</g,`&lt;`).replace(/>/g,`&gt;`).replace(/"/g,`&quot;`).replace(/'/g,`&#039;`)}};customElements.get(`unicode-converter-tool`)||customElements.define(`unicode-converter-tool`,a);