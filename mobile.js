/* Edição Mobile • Interface para uso com o dedo.
   Mantém o estado/calculadora da versão original, sem duplicar dados. */
(() => {
  'use strict';
  const $ = (sel, root=document) => root.querySelector(sel);
  const sections = {
    ops:  {label:'Operações',subtitle:'Histórico de sessões',icon:'📝'},
    geral:{label:'Geral',subtitle:'Resumo da banca',icon:'🏠'},
    stats:{label:'Estatísticas',subtitle:'Desempenho e resultados',icon:'📈'},
    goals:{label:'Metas',subtitle:'Objetivos e disciplina',icon:'🏆'},
    ins:  {label:'Insights',subtitle:'Descobertas automáticas',icon:'🔎'},
    cal:  {label:'Calendário',subtitle:'Visão por data',icon:'📅'},
    calc: {label:'Calculadoras',subtitle:'Cenários e simulações',icon:'🧮'},
    flow: {label:'Fluxo de Caixa',subtitle:'Movimentações e saldo',icon:'💰'},
    risk: {label:'Auditoria de risco',subtitle:'Limites e exposição',icon:'🛡️'},
    diary:{label:'Diário',subtitle:'Notas das sessões',icon:'📓'},
    cfg:  {label:'Personalizar',subtitle:'Visual e animações',icon:'⚙️'}
  };
  const icons = {
    ops:'<rect x="4" y="3" width="16" height="18" rx="3"/><path d="M8 8h8M8 12h8M8 16h5"/>',
    geral:'<path d="m3 11 9-8 9 8v9a1 1 0 0 1-1 1h-5v-7H9v7H4a1 1 0 0 1-1-1z"/>',
    stats:'<path d="M4 20V12m5 8V7m5 13v-5m5 5V4"/><path d="M3 20h18"/>',
    goals:'<circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="5"/><circle cx="12" cy="12" r="1"/>',
    more:'<circle cx="5" cy="12" r="1.5"/><circle cx="12" cy="12" r="1.5"/><circle cx="19" cy="12" r="1.5"/>'
  };
  const svg = id => `<svg viewBox="0 0 24 24" aria-hidden="true">${icons[id]}</svg>`;
  const mainTabs = ['ops','geral','stats','goals'];
  const navLabels = {ops:'Operações',geral:'Geral',stats:'Estat.',goals:'Metas'};
  const masthead = `
    <header class="mobile-masthead" aria-label="Painel mobile">
      <div class="mobile-brandbar">
        <div class="mobile-brand">
          <span class="mobile-mark" aria-hidden="true"><svg viewBox="0 0 28 28" fill="none"><rect x="3" y="3" width="22" height="22" rx="7" stroke="currentColor" opacity=".45"/><path d="M8 18V13M13.5 18V9M19 18v-6" stroke="var(--ok)" stroke-linecap="round" stroke-width="2.6"/><path d="M7.5 21h12" stroke="var(--tx)" opacity=".55" stroke-linecap="round" stroke-width="1.3"/></svg></span>
          <span><span class="mobile-brand-name">Controle de Banca</span><span class="mobile-brand-sub">EDIÇÃO MOBILE</span></span>
        </div>
        <button id="mobileSettings" class="mobile-icon-btn" type="button" aria-label="Abrir personalização" title="Personalizar">⚙</button>
      </div>
      <div class="mobile-balance-panel">
        <div class="mobile-balance-eyebrow"><i class="mobile-live-dot" aria-hidden="true"></i> SALDO DA BANCA</div>
        <div class="mobile-balance-number" id="mobileBalance">R$ 0,00</div>
        <div class="mobile-balance-footer">
          <div><div class="mobile-profit-label">RESULTADO ACUMULADO</div><div class="mobile-profit-value" id="mobileProfit">R$ 0,00</div></div>
          <button id="mobileNewOperation" type="button" class="mobile-new-btn"><span aria-hidden="true">＋</span> Nova operação</button>
        </div>
      </div>
      <div class="mobile-game-label"><i aria-hidden="true"></i><span>Visualizando</span> <strong id="mobileCurrentGame">Todos os jogos</strong></div>
    </header>`;
  const nav = `
    <nav class="mobile-bottom-nav" aria-label="Navegação mobile">
      <div class="mobile-bottom-inner">
        ${mainTabs.map(id=>`<button type="button" class="mobile-nav-btn" data-mobile-tab="${id}" aria-label="${sections[id].label}">${svg(id)}<span class="mobile-nav-label">${navLabels[id]}</span></button>`).join('')}
        <button type="button" class="mobile-nav-btn" id="mobileMore" aria-label="Abrir todas as áreas" aria-haspopup="dialog" aria-controls="mobileMoreDialog">${svg('more')}<span class="mobile-nav-label">Mais</span></button>
      </div>
    </nav>`;
  const extra = ['ins','cal','calc','flow','risk','diary','cfg'];
  const sheet = `
    <dialog class="mobile-more-dialog" id="mobileMoreDialog" aria-label="Todas as áreas do aplicativo">
      <div class="mobile-more-sheet">
        <div class="mobile-sheet-handle" aria-hidden="true"></div>
        <div class="mobile-sheet-heading"><div><h2>Explorar áreas</h2><small>Todos os recursos da sua banca</small></div><button type="button" class="mobile-sheet-close" id="mobileCloseMore" aria-label="Fechar menu">×</button></div>
        <div class="mobile-more-grid">
          ${extra.map(id=>`<button type="button" class="mobile-more-entry" data-mobile-target="${id}"><span class="mobile-entry-icon" aria-hidden="true">${sections[id].icon}</span><span><strong>${sections[id].label}</strong><small>${sections[id].subtitle}</small></span></button>`).join('')}
        </div>
      </div>
    </dialog>`;
  document.body.insertAdjacentHTML('afterbegin',masthead);
  document.body.insertAdjacentHTML('beforeend',nav+sheet);
  const appTop = $('.content .top');
  if(appTop){appTop.insertAdjacentHTML('afterend','<div class="mobile-section-label"><div><strong id="mobileSectionTitle">Operações</strong><small id="mobileSectionSubtitle">Histórico de sessões</small></div><span class="mobile-section-pill">PAINEL MOBILE</span></div>')}
  const moreDialog = $('#mobileMoreDialog');
  const originalTabs = $('#tabs');
  const currentTab = () => originalTabs?.querySelector('button.on[data-t]')?.dataset.t || 'ops';
  function syncNavigation(){
    const active = currentTab(),moreActive = !mainTabs.includes(active);
    document.querySelectorAll('[data-mobile-tab]').forEach(btn=>{
      const on=btn.dataset.mobileTab===active;
      btn.classList.toggle('is-active',on);
      if(on)btn.setAttribute('aria-current','page');else btn.removeAttribute('aria-current');
    });
    const more=$('#mobileMore');
    more?.classList.toggle('is-active',moreActive);
    if(moreActive)more?.setAttribute('aria-current','page');else more?.removeAttribute('aria-current');
    document.querySelectorAll('[data-mobile-target]').forEach(btn=>btn.classList.toggle('is-active',btn.dataset.mobileTarget===active));
    const s=sections[active]||sections.ops;
    if($('#mobileSectionTitle'))$('#mobileSectionTitle').textContent=s.label;
    if($('#mobileSectionSubtitle'))$('#mobileSectionSubtitle').textContent=s.subtitle;
    updateBalance();
  }
  function chooseTab(id){
    if(!sections[id])return;
    if(moreDialog?.open)moreDialog.close();
    const original=originalTabs?.querySelector(`button[data-t="${id}"]`);
    if(original&&original.dataset.t!==currentTab())original.click();
    syncNavigation();
  }
  function updateBalance(){
    try{
      if(typeof S==='undefined'||typeof bankOf!=='function'||typeof G!=='function')return;
      const amount=bankOf(G());
      const result=typeof ST==='function'&&typeof ACT==='function'?ST(ACT()).tot:0;
      const format=typeof money==='function'?money:n=>String(n);
      if($('#mobileBalance'))$('#mobileBalance').textContent=format(amount);
      const profit=$('#mobileProfit');
      if(profit){profit.textContent=format(result);profit.classList.toggle('positive',result>0);profit.classList.toggle('negative',result<0)}
      const game=S.set.gm==='all'?'Todos os jogos':S.games.find(g=>g.id===S.set.gm)?.name||'Jogo selecionado';
      if($('#mobileCurrentGame'))$('#mobileCurrentGame').textContent=game;
    }catch(err){/* O painel mobile não interfere no motor original. */}
  }
  function newOperation(){
    if(moreDialog?.open)moreDialog.close();
    chooseTab('ops');
    requestAnimationFrame(()=>{
      $('#add')?.click();
      requestAnimationFrame(()=>{
        try{
          const last=S?.ops?.[S.ops.length-1];
          const found=last&&[...document.querySelectorAll('#ops .op[data-id]')].find(el=>el.dataset.id===last.id);
          if(found&&found.getBoundingClientRect().height>0)found.scrollIntoView({block:'center',behavior:'smooth'});
        }catch(err){}
        updateBalance();
      });
    });
  }
  document.querySelectorAll('[data-mobile-tab]').forEach(btn=>btn.addEventListener('click',()=>chooseTab(btn.dataset.mobileTab)));
  document.querySelectorAll('[data-mobile-target]').forEach(btn=>btn.addEventListener('click',()=>chooseTab(btn.dataset.mobileTarget)));
  $('#mobileSettings')?.addEventListener('click',()=>chooseTab('cfg'));
  $('#mobileNewOperation')?.addEventListener('click',newOperation);
  $('#mobileMore')?.addEventListener('click',()=>{
    if(moreDialog&&!moreDialog.open){moreDialog.showModal();syncNavigation()}
  });
  $('#mobileCloseMore')?.addEventListener('click',()=>moreDialog?.close());
  moreDialog?.addEventListener('click',event=>{if(event.target===moreDialog)moreDialog.close()});
  if(originalTabs){
    new MutationObserver(records=>{
      if(records.some(r=>r.attributeName==='class'))syncNavigation();
    }).observe(originalTabs,{subtree:true,attributes:true,attributeFilter:['class']});
  }
  const sum=$('#opSum');
  if(sum)new MutationObserver(updateBalance).observe(sum,{childList:true,subtree:true,characterData:true});
  const gameList=$('#games');
  if(gameList)new MutationObserver(updateBalance).observe(gameList,{childList:true,subtree:true,characterData:true});
  // Only actual typing controls temporarily hide the bottom dock; range sliders,
  // colors, dates and selects must NOT hide navigation when focused.
  const isTypingControl=el=>el instanceof HTMLElement && !el.hasAttribute('readonly') &&
    el.matches('textarea,[contenteditable="true"],input:not([type]),input:is([type="text"],[type="number"],[type="search"],[type="email"],[type="password"],[type="tel"],[type="url"])');
  document.addEventListener('focusin',e=>{
    if(isTypingControl(e.target))document.documentElement.classList.add('mobile-typing');
  });
  document.addEventListener('focusout',()=>requestAnimationFrame(()=>{
    if(!isTypingControl(document.activeElement))document.documentElement.classList.remove('mobile-typing');
  }));
  window.addEventListener('pageshow',updateBalance);
  syncNavigation();
  // PWA somente quando o projeto for publicado em HTTPS/localhost. O HTML único
  // funciona como arquivo local, sem depender de service worker.
  if('serviceWorker' in navigator && (location.protocol==='https:' || location.hostname==='localhost'||location.hostname==='127.0.0.1')) {
    window.addEventListener('load',()=>navigator.serviceWorker.register('./sw.js').catch(()=>{}),{once:true});
  }
})();
