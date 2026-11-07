


/* Se o Chart.js não carregar (sem internet), o app continua funcionando sem os gráficos */
if(typeof Chart==='undefined'){window.Chart=class{constructor(){this.data={labels:[],datasets:[]}}update(){}resize(){}reset(){}destroy(){}};Chart.defaults={};
document.body.insertAdjacentHTML('afterbegin','<div class="alert l" style="margin:8px 18px">Os gráficos não carregaram (sem internet?). O restante do site funciona normalmente.</div>')}
const $=s=>document.querySelector(s),$$=s=>[...document.querySelectorAll(s)],KEY='banca3',PAL=['#00bcd4','#ff9800','#ab47bc','#66bb6a','#ef5350','#42a5f5'];
const uid=()=>Math.random().toString(36).slice(2,9),sum=a=>a.reduce((x,y)=>x+y,0);
const esc=s=>String(s).replace(/[&<>"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));
const today=()=>new Date(Date.now()-new Date().getTimezoneOffset()*6e4).toISOString().slice(0,10);
const fd=d=>d.slice(8)+'/'+d.slice(5,7);
const numberFmt=new Map(), currencyFmt=new Map();
const nf=(n,d=2)=>{let fmt=numberFmt.get(d);if(!fmt){fmt=new Intl.NumberFormat('pt-BR',{minimumFractionDigits:d,maximumFractionDigits:d});numberFmt.set(d,fmt)}return fmt.format(Number(n)||0)};
const money=n=>{const cy=S.set.cy;let fmt=currencyFmt.get(cy);if(!fmt){fmt=new Intl.NumberFormat('pt-BR',{style:'currency',currency:cy});currencyFmt.set(cy,fmt)}return fmt.format(Number(n)||0)},pct=n=>nf(n)+'%',cls=n=>n>0?'pos':n<0?'neg':'';
const card=(l,v,c='',s='')=>`<div class="card"><span>${l}</span><b class="${c}">${v}</b>${s?`<small>${s}</small>`:''}</div>`;
const op=(d,f,w=10,l=20,b='')=>({id:uid(),d,g:'bacbo',b,w:{m:'%',v:w},l:{m:'%',v:l},f});
const WG0=()=>({ins:[{id:uid(),k:'chart',c:{metric:'hour',type:'bar'}},{id:uid(),k:'chart',c:{metric:'dur',type:'bar'}},{id:uid(),k:'chart',c:{metric:'dow',type:'bar'}}],calc:[{id:uid(),k:'risk',c:{}},{id:uid(),k:'scen',c:{}}],geral:[],flow:[{id:uid(),k:'chart',c:{metric:'fm',type:'bar',col:'#ff7043',col2:'#2ecc71'}},{id:uid(),k:'chart',c:{metric:'fb',type:'line',col:'#7e57c2'}},{id:uid(),k:'chart',c:{metric:'fz',type:'pie'}}]});
const MONTH_COLOR_DEFAULTS=['#ff6b6b','#ff8f3d','#ffb020','#ffd54a','#9ccc65','#2ecc71','#00c2a8','#00acc1','#42a5f5','#7e57c2','#ab47bc','#ec407a'];
function normalizeMonthColors(list){return MONTH_COLOR_DEFAULTS.map((d,i)=>/^#[0-9a-f]{6}$/i.test((list||[])[i]||'')?(list||[])[i]:d)}
function ensureMonthColors(){S.set.monthColors=normalizeMonthColors(S.set.monthColors);return S.set.monthColors}
function monthColor(input){const arr=ensureMonthColors();let idx=0;if(typeof input==='string'){if(/^\d{4}-\d{2}$/.test(input))idx=+input.slice(5,7)-1;else if(/^\d{4}-\d{2}-\d{2}$/.test(input))idx=+input.slice(5,7)-1;else idx=Math.max(0,(+input||1)-1)}else idx=+input||0;idx=Math.max(0,Math.min(11,idx));return arr[idx]||MONTH_COLOR_DEFAULTS[idx]}

// v3.5.23 — Perfil padrão do site. Só configurações: nenhum histórico pessoal embutido.
const DEFAULT_PROFILE_THEME = {"id":"2bcpawh","name":"Tema 1","base":{"bg":"#0c1118","pn":"#1a222e","ln":"#334254","tx":"#eff5fb","mut":"#99aabb"},"scheme":"dark","colors":{"date":"#ffaf62","bank":"#617ad4","win":"#4cb2d1","loss":"#d95c66","ok":"#51c6a2"},"fc":{"dep":"#e64a19","wd":"#2e7d32"},"monthColors":["#ff6b6b","#ff8f3d","#ffb020","#ffd54a","#9ccc65","#2ecc71","#00c2a8","#00acc1","#42a5f5","#7e57c2","#ab47bc","#ec407a"],"glow":"#ccc62e","cols":["#2ecc71","#00acc1","#7e57c2"]};
const DEFAULT_PROFILE_SETTINGS = {"theme":"user:2bcpawh","cy":"BRL","dens":"normal","gm":"all","ord":"desc","anim":"on","fs":"m","maxL":3,"dx":0,"old":1,"lay":"side","sideSkin":"soft","navBar":"transparent","navButtons":"pill","navLabels":"full","navSize":105,"navAutoHide":0,"navPrefsV":1,"siteView":"dashboard","tr":"zoom","heat":"cum","infoOn":1,"perf":"smooth","fps":0,"fc":{"dep":"#e64a19","wd":"#2e7d32"},"fx":{"on":1,"type":"const","pw":10,"sp":7,"sz":8,"fxRev":3,"cols":["#2ecc71","#00acc1","#7e57c2"],"glow":"#ccc62e","e":{"ent":1,"float":1,"sweep":1,"shim":1,"pulse":1,"flash":1,"cnt":1,"rip":1,"hov":1,"spot":0,"conf":1,"shake":1,"tilt":0},"cards":1},"c":{"date":"#ffaf62","bank":"#617ad4","win":"#4cb2d1","loss":"#d95c66","ok":"#51c6a2"},"monthColors":["#ff6b6b","#ff8f3d","#ffb020","#ffd54a","#9ccc65","#2ecc71","#00c2a8","#00acc1","#42a5f5","#7e57c2","#ab47bc","#ec407a"],"w":{"m":"%","v":5},"l":{"m":"%","v":15},"sb":0,"navWidthSide":200,"navWidthIcons":76,"navWidthHorizontal":880};
const DEFAULT_PROFILE_ON = new Set(["spot","tilt","ent","exit","calpop","tiles","pulse","bar","shim","conf","shake","hov","float","bpulse","neon","cnt","flash","press","cursorDust","cursorBeam","btnGrow","btnFloat","btnWiggle","btnShadow","cardZoom","boxFloat","boxHoverGlow","tabGlow","tabUnderline","tabNudge","numberGlow","flowHover","sumScale","sumHalo","sidei","h1","phic","drift","chart"]);
const DEFAULT_PROFILE_FX_CHANGES = {"spot":{"pw":1,"sz":3},"tilt":{"pw":2,"ty":"out"},"ent":{"pw":1,"sz":2,"sp":1,"ty":"fold","dir":"bottom"},"exit":{"pw":1,"sz":1,"sp":4,"ty":"fold","dir":"bottom","particles":"spark","pSpeed":5,"pSize":5,"pRange":5},"float":{"pw":6},"neon":{"pw":3},"cursorDust":{"pw":10,"sz":2,"sp":10},"btnWiggle":{"pw":1,"sz":1,"sp":8},"cardEdge":{"pw":10,"sz":10},"sumHalo":{"pw":3,"sz":2},"sumTilt":{"ty":"in"}};
const DEFAULT_PROFILE_WIDGETS = {"ins":[{"k":"chart","c":{"metric":"hour","type":"bar","per":"all","from":"","to":"","gm":"all","grp":"d","col":"#2ecc71","col2":"#ef5350"}},{"k":"chart","c":{"metric":"dur","type":"bar","per":"all","from":"","to":"","gm":"all","grp":"d","col":"#2ecc71","col2":"#ef5350"}},{"k":"chart","c":{"metric":"dow","type":"bar","per":"all","from":"","to":"","gm":"all","grp":"d","col":"#2ecc71","col2":"#ef5350"}}],"calc":[{"k":"risk","c":{"b":"","r":2,"sl":20,"sw":10}},{"k":"scen","c":{"b":"","n":30,"al":"","ps":5,"po":3,"pm":1.5,"pp":-0.5,"fx":20,"sps":true,"spo":true,"spm":true,"spp":true,"sfx":true}},{"k":"chart","c":{"metric":"bank","type":"line","per":"all","from":"","to":"","gm":"all","grp":"d","col":"#2ecc71","col2":"#ef5350"}}],"geral":[],"flow":[{"k":"chart","c":{"metric":"fm","type":"bar","per":"all","from":"","to":"","gm":"all","grp":"d","col":"#ff7043","col2":"#2ecc71"}},{"k":"chart","c":{"metric":"fb","type":"line","per":"all","from":"","to":"","gm":"all","grp":"d","col":"#7e57c2","col2":"#ef5350"}},{"k":"chart","c":{"metric":"fz","type":"pie","per":"all","from":"","to":"","gm":"all","grp":"d","col":"#2ecc71","col2":"#ef5350"}}]};
function defaultProfileEffects(){
 const fx=EF0();
 for(const name of Object.keys(fx)){
  fx[name].on=DEFAULT_PROFILE_ON.has(name)?1:0;
  if(DEFAULT_PROFILE_FX_CHANGES[name])Object.assign(fx[name],DEFAULT_PROFILE_FX_CHANGES[name]);
 }
 return fx;
}
function defaultProfileWidgets(){
 const widgets=structuredClone(DEFAULT_PROFILE_WIDGETS);
 for(const category of Object.keys(widgets))for(const item of widgets[category])item.id=uid();
 return widgets;
}
function applyDefaultProfileToState(state,{keepRecords=true}={}){
 const baseSettings=structuredClone(DEFAULT_PROFILE_SETTINGS);
 baseSettings.fx.ef=defaultProfileEffects();
 state.set={...state.set,...baseSettings};
 // Evita duplicatas no seletor de temas e restaura o Tema 1 sempre que preciso.
 state.themes=[...(state.themes||[]).filter(t=>t.id!==DEFAULT_PROFILE_THEME.id),structuredClone(DEFAULT_PROFILE_THEME)];
 state.wg=defaultProfileWidgets();
 state.fl={sort:'date-desc',from:'',to:'',type:'all',intensity:6};
 state.rng={p:'all',from:'',to:''};
 state.risk={pct:3,n:5};
 if(!keepRecords){
  state.games=[{id:'bacbo',name:'Meu jogo',init:0}];
  state.ops=[];state.dep=[];state.wd=[];state.diary=[];
  state.goals={};state.periodGoals=[];state.layouts=[];state.layoutActive='';
  state.gl={wk:0,mo:0,dd:0};
 }
 return state;
}

const baseSeed=()=>({set:{theme:'dark',cy:'BRL',dens:'normal',gm:'all',ord:'desc',anim:'on',fs:'m',maxL:3,dx:0,old:1,lay:'side',sideSkin:'soft',navBar:'solid',navButtons:'soft',navLabels:'full',navSize:100,navAutoHide:0,navPrefsV:0,siteView:'classic',tr:'none',heat:'val',infoOn:1,perf:'smooth',fps:0,fc:{dep:'#d94d59',wd:'#2ecc71'},
fx:{on:matchMedia('(prefers-reduced-motion:reduce)').matches?0:1,type:'part',pw:5,sp:5,sz:5,fxRev:4,cols:['#2ecc71','#00acc1','#7e57c2'],glow:'#2ecc71',ef:EF0()},
c:{date:'#ff9800',bank:'#7e57c2',win:'#00acc1',loss:'#c62828',ok:'#2ecc71'},monthColors:[...MONTH_COLOR_DEFAULTS],w:{m:'%',v:10},l:{m:'%',v:20}},games:[{id:'bacbo',name:'Meu jogo',init:0}],goals:{},rng:{p:'all',from:'',to:''},fl:{sort:'date-desc',from:'',to:'',type:'all',intensity:6},periodGoals:[],layouts:[],layoutActive:'',diary:[],risk:{pct:3,n:5},themes:[],gl:{wk:0,mo:0,dd:0},wg:WG0(),
ops:[op('2026-10-31',750),op('2026-11-02',955),op('2026-11-03',1107),op('2026-11-04',1242),op('2026-11-05',0),op('2026-11-06','',5,20,5000)],
dep:[{id:uid(),d:'2026-11-01',t:'',v:340},{id:uid(),d:'2026-11-05',t:'',v:5000}],wd:[]});
const seed=()=>applyDefaultProfileToState(baseSeed(),{keepRecords:false});
const addD=n=>new Date(Date.now()-new Date().getTimezoneOffset()*6e4+n*864e5).toISOString().slice(0,10);
const exData=()=>({games:[{id:'bacbo',name:'Meu jogo',init:1000}],ops:[{...op(addD(-3),1100),h1:'14:00',h2:'14:40'},{...op(addD(-2),1150),h1:'15:00',h2:'15:30'},{...op(addD(-1),920),h1:'16:00',h2:'17:10'},{...op(addD(0),''),h1:hm()}],dep:[{id:uid(),d:addD(-3),t:'13:30',v:1000}]});
let S,R=[],CH={};
function norm(p){const d=seed(),ps=p.set||{},pf=ps.fx||{},hv=ps.heat;return{...d,...p,set:{...d.set,...ps,heat:hv===undefined||hv===1||hv==='1'?'val':hv===0||hv==='0'?'0':hv,c:{...d.set.c,...ps.c},fc:{...d.set.fc,...ps.fc},monthColors:normalizeMonthColors(ps.monthColors||d.set.monthColors),fx:{...d.set.fx,...pf,cols:pf.cols||d.set.fx.cols,ef:Object.fromEntries(Object.keys(d.set.fx.ef).map(k=>[k,{...d.set.fx.ef[k],...((pf.ef||{})[k]||{})}]))}},fl:{...d.fl,...p.fl},gl:{...d.gl,...p.gl},wg:{...d.wg,...p.wg},diary:Array.isArray(p.diary)?p.diary:[],risk:{...d.risk,...p.risk},themes:Array.isArray(p.themes)?p.themes:[],periodGoals:Array.isArray(p.periodGoals)?p.periodGoals:[],layouts:Array.isArray(p.layouts)?p.layouts:[],layoutActive:p.layoutActive||''}}
function renameDefaultGame(state){if(!state||!Array.isArray(state.games))return;for(const g of state.games)if(g.id==='bacbo'&&/^bac\s*bo$/i.test((g.name||'').trim()))g.name='Meu jogo';}
function load(){try{const p=JSON.parse(localStorage.getItem(KEY));S=p&&p.ops?norm(p):seed();renameDefaultGame(S);S.set.siteView=['classic','ops-compact','focus','dashboard'].includes(S.set.siteView)?S.set.siteView:'classic';if(p&&p.ops&&(+S.set.fx.fxRev||0)<4&&S.set.fc.dep==='#21a66a'&&S.set.fc.wd==='#da5353'){S.set.fc={dep:'#d94d59',wd:'#2ecc71'};S.set.fx.fxRev=4}if(p&&p.ops&&(+S.set.fx.fxRev||0)<3){S.set.fx.ef.spot.pw=1;S.set.fx.ef.spot.sz=3;S.set.fx.fxRev=3;if(S.set.tr==='slide')S.set.tr='none'}}catch(e){S=seed()}}
let SAVE_TIMER=0,SAVE_QUEUED=false;
function flushSave(){if(SAVE_TIMER){clearTimeout(SAVE_TIMER);SAVE_TIMER=0}if(!SAVE_QUEUED)return;SAVE_QUEUED=false;try{localStorage.setItem(KEY,JSON.stringify(S))}catch(e){}}
function save(){SAVE_QUEUED=true;if(!SAVE_TIMER)SAVE_TIMER=setTimeout(flushSave,200)}
addEventListener('pagehide',flushSave);
addEventListener('visibilitychange',()=>{if(document.hidden)flushSave()});
const V=()=>S.set.gm==='all'?R:R.filter(r=>r.g.id===S.set.gm),G=()=>S.set.gm==='all'?S.games:S.games.filter(g=>g.id===S.set.gm),ACT=rows=>(rows||V()).filter(r=>r.closed||r.pl!==0),inR=rows=>rows.filter(r=>(!S.rng.from||r.o.d>=S.rng.from)&&(!S.rng.to||r.o.d<=S.rng.to)),ACTR=rows=>ACT(inR(rows||V()));
// Ordenação cronológica estável: data, início (ou fim se não houver início),
// e ordem de criação para operações feitas no mesmo minuto.
function operationClock(o){return o.h1||o.ps||o.h2||''}
function operationCompare(a,b,index){return a.d.localeCompare(b.d)||operationClock(a).localeCompare(operationClock(b))||((index.get(a.id)??0)-(index.get(b.id)??0))}
function calc(){const out=[],idx=new Map(S.ops.map((o,i)=>[o.id,i]));S.games.forEach(g=>{let prev=null;S.ops.filter(o=>o.g===g.id).sort((a,b)=>operationCompare(a,b,idx)).forEach(o=>{
const auto=prev?prev.next:+g.init,bank=o.manualBank!==undefined&&o.manualBank!==null?+o.manualBank:(o.b===''?auto:+o.b),ml=o.w.m==='%'?bank*o.w.v/100:+o.w.v,mp=o.l.m==='%'?bank*o.l.v/100:+o.l.v,closed=o.f!=='',cur=closed?+o.f:bank,pl=closed?cur-(o.pnlBasis!==undefined?+o.pnlBasis:bank):0;
const r={o,g,auto,bank,ml,mp,alvo:bank+ml,lim:bank-mp,closed,cur,pl,next:o.summaryCarry!==undefined&&o.summaryCarry!==null?+o.summaryCarry:(closed&&o.balanceAfterFinal?bank:cur)};
r.st=o.statusLock&&closed?o.statusLock:!closed&&!pl?'open':ml>0&&pl>=ml?'win':mp>0&&pl<=-mp?'loss':pl>0?'plus':pl<0?'minus':'even';
r.dist=bank>0?(r.st==='win'?(cur-r.alvo)/bank*100:r.st==='loss'?(cur-r.lim)/bank*100:null):null;prev=r;out.push(r)})});
R=out.sort((a,b)=>operationCompare(a.o,b.o,idx))}
function ST(a){const p=a.map(r=>r.pl),n=p.length,w=p.filter(x=>x>0),l=p.filter(x=>x<0),gw=sum(w),gl=-sum(l);let cw=0,cl=0,mw=0,ml=0,cum=0,pk=0,dd=0;
p.forEach(x=>{if(x>0){cw++;cl=0}else if(x<0){cl++;cw=0}else cw=cl=0;mw=Math.max(mw,cw);ml=Math.max(ml,cl);cum+=x;pk=Math.max(pk,cum);dd=Math.max(dd,pk-cum)});
return{n,tot:sum(p),avg:n?sum(p)/n:0,nw:w.length,nl:l.length,hit:n?w.length/n*100:0,best:Math.max(0,...p),worst:Math.min(0,...p),mw,ml,cur:cw||-cl,dd,gw,gl,pf:gl?gw/gl:gw?Infinity:0,payoff:w.length&&l.length?(gw/w.length)/(gl/l.length):0,sw:a.filter(r=>r.st==='win').length,sl:a.filter(r=>r.st==='loss').length,ret:n?sum(a.map(r=>r.bank?r.pl/r.bank:0))/n*100:0}}
const bankOf=(gs,rs=R)=>sum(gs.map(g=>{const l=rs.filter(r=>r.g.id===g.id).pop();return l?l.next:+g.init})),endB=gs=>bankOf(gs,S.rng.to?R.filter(r=>r.o.d<=S.rng.to):R),startB=gs=>sum(gs.map(g=>{const f=R.find(r=>r.g.id===g.id&&(!S.rng.from||r.o.d>=S.rng.from));return f?f.bank:bankOf([g])}));
const LBL={win:'🚀 PASSOU DO WIN',loss:'☠️ PASSOU DO LOSS',plus:'📈 Lucro abaixo da meta',minus:'📉 Prejuízo dentro do limite',even:'➖ Zerado',open:'⏳ Em andamento'};
let RI=new Set(),OPEN=new Set(),COL=new Set(),SEEN=new Set(),CM=today().slice(0,7),PREV={},progressDepth=0;
const DOW=['dom','seg','ter','qua','qui','sex','sáb'],SM={sOrd:'ord',sDx:'dx',sAnim:'anim',sFs:'fs',sMaxL:'maxL',sOld:'old',sHeat:'heat',sLay:'lay',sTr:'tr',sNavBar:'navBar',sNavButtons:'navButtons',sNavLabels:'navLabels',sNavSize:'navSize',sNavAutoHide:'navAutoHide',sSiteView:'siteView'};
const hm=(t=new Date())=>String(t.getHours()).padStart(2,'0')+':'+String(t.getMinutes()).padStart(2,'0'),mins=s=>{const [h,m]=s.split(':').map(Number);return h*60+m};
const dur=o=>o.run?Math.floor((Date.now()-o.run)/1000)+(o.el||0):o.h1&&o.h2?((mins(o.h2)-mins(o.h1)+1440)%1440)*60:o.el||0;
const clk=s=>{const h=Math.floor(s/3600);return(h?h+':':'')+String(Math.floor(s%3600/60)).padStart(2,'0')+':'+String(s%60).padStart(2,'0')},fdur=s=>s>=3600?Math.floor(s/3600)+'h'+String(Math.floor(s%3600/60)).padStart(2,'0'):s>=60?Math.floor(s/60)+'min':s+'s';
const tile=(c,l,x,k='')=>`<div class="t"${k?` data-kpi="${k}"`:''} style="--tc:var(--${c})"><span>${l}</span>${x}</div>`;
const mc=(k,o)=>`<div class="mc"><input type="number" step="any" data-f="${k}" value="${o[k].v}"><button class="mb mb-${k}" data-m="${k}" title="Alternar % / R$">${o[k].m==='%'?'%':'R$'}</button></div>`;
const out=(k,a='')=>`<b data-k="${k}"${a?` data-v="${a}"`:""}></b>`;
const row=(r,i,n)=>{const o=r.o;return`<article class="op${RI.has(o.id)?'':' new'}${OPEN.has(o.id)?' open':''}" data-id="${o.id}" style="--i:${Math.min(i,10)}"><div class="sm" data-tg><span class="dt"><span class="time-start">${esc(o.h1||'--:--')}</span> <span class="time-arrow">→</span> <span class="time-end">${esc(o.h2||(o.run?hm():'--:--'))}</span><small>op ${i+1}/${n}</small></span><span class="gn">${esc(r.g.name)}<em data-k="du"></em></span><span class="fw" data-k="fw"></span><b data-k="spl"></b><span class="badge" data-k="st"></span><i class="chev">▾</i></div><div class="pg lw"><i data-k="bar"></i></div><div class="body"><div class="bw"><div class="bi"><div class="oh"><input type="date" data-f="d" value="${o.d}"><select data-f="g">${S.games.map(g=>`<option value="${g.id}"${g.id===o.g?' selected':''}>${esc(g.name)}</option>`).join('')}</select><input class="note" data-f="n" readonly title="Clique para abrir a anotação completa" placeholder="Anotação (clique para expandir)" value="${esc(o.n||'')}">${!o.splitOf?`<button class="x action-split" data-sp title="${o.splitSource?'Esta operação já foi dividida':'Dividir esta operação em sessões independentes'}" ${o.splitSource?'disabled':''}>✂️ ${o.splitSource?'Já dividida':'Dividir operação'}</button>`:''}<button class="x action-timer" data-tmt title="Cronômetro e horários de início e término">⏱</button><button class="x del" data-x title="Excluir operação">🗑 Excluir</button></div><div class="tm"${o.run||TMO.has(o.id)?'':' hidden'}><button data-tm>▶ Iniciar</button><b data-k="tmv">00:00</b><label>Início <input type="time" data-f="h1" value="${o.h1||''}"></label><label>Fim <input type="time" data-f="h2" value="${o.h2||''}"></label><span class="mut">Use o timer ou só preencha os horários.</span></div><div class="split" hidden><label>Dividir em <input type="number" class="spn" value="3" min="2" max="12"> operações</label><button data-spa>Aplicar divisão</button><span class="mut">As sessões adicionais começam sem horários. Preencha início e fim de cada uma quando quiser. As metas serão copiadas.</span></div><div class="tiles">${tile('bank','Banca Atual',`<div class="bank-edit-wrap"><input type="text" data-f="b" value="${esc(money(r.bank))}" readonly title="Use o lápis para ajustar a banca sem contar como lucro ou perda"><button class="bank-pencil" data-bank-edit type="button" title="Habilitar ajuste manual da banca sem mexer no resultado">✎</button></div><small class="bank-hint">${o.manualBank!==undefined?'Saldo ajustado manualmente':'Saldo calculado automaticamente'}</small>`, 'bank')}${tile('win','Stop Win',mc('w',o))}${tile('win','Meta de Lucro',out('ml'))}${tile('win','Meta Alvo',out('alvo'))}${tile('bank','Banca Final',`<input type="number" step="any" data-f="f" value="${o.f}" placeholder="a preencher">`, 'final')}${tile('ok','Lucro/Prejuízo',out('pl','pl'),'pl')}${tile('loss','Stop Loss',mc('l',o))}${tile('loss','Meta de Loss',out('mp'))}${tile('loss','Limite de Perda',out('lim'))}${tile('ok','Distância Meta/Loss',out('dist','dist'),'dist')}</div></div></div></div></article>`};
function paintOperationTime(el,o){
 const start=el.querySelector('.dt .time-start'),end=el.querySelector('.dt .time-end');
 if(start)start.textContent=o.h1||'--:--';
 // Enquanto o cronômetro está ativo, a seta mostra a hora corrente,
 // sem reconstituir o card inteiro a cada segundo.
 if(end)end.textContent=o.h2||(o.run?hm():'--:--');
}
// Reordena os elementos existentes sem redesenhar os formulários.
function previewOperationOrder(){
 // During time-picker interaction use CSS grid order, so the input retains focus.
 const rank=new Map(R.map((r,i)=>[r.o.id,i]));
 const factor=S.set.ord==='asc'?1:-1;
 $$('#ops .mg.lv3 > .mc2 > .mcw > .op').forEach(el=>{
  el.style.order=String(factor*(rank.get(el.dataset.id)??0));
 });
}
function resortVisibleOperations(){
 const rank=new Map(R.map((r,i)=>[r.o.id,i]));
 const factor=S.set.ord==='asc'?1:-1;
 $$('#ops .mg.lv3 > .mc2 > .mcw').forEach(wrapper=>{
  const items=[...wrapper.children].filter(el=>el.classList?.contains('op'));
  if(items.length<2)return;
  const ordered=[...items].sort((a,b)=>factor*((rank.get(a.dataset.id)??0)-(rank.get(b.dataset.id)??0)));
  if(!ordered.every((el,i)=>el===items[i])){
   const focused=document.activeElement,refocus=focused&&items.some(el=>el.contains(focused));
   ordered.forEach((el,i)=>{if(wrapper.children[i]!==el)wrapper.insertBefore(el,wrapper.children[i]||null)});
   if(refocus&&focused.isConnected)focused.focus({preventScroll:true});
  }
  ordered.forEach((el,i)=>{el.style.removeProperty('order');const label=el.querySelector('.dt small');if(label)label.textContent=`op ${i+1}/${ordered.length}`});
 });
}
const TMO=new Set();

/* v3.5.16 — entrada suave APENAS para elementos novos (não para rerenderizações).
   WAAPI compõe movimento e opacidade sem atrasar a navegação nem reiniciar o float. */
/* v3.5.20 — entradas e saídas WAAPI independentes, inclusive com perspectiva 3D.
   Não reiniciar animações de elementos antigos nem animar elementos invisíveis. */
const EVENT_DIRECTIONS=['left','right','top','bottom'];
const eventClamp=(n,min=1,max=10)=>Math.max(min,Math.min(max,Number(n)||min));
const eventDir=x=>EVENT_DIRECTIONS.includes(x)?x:'left';
function eventVector(dir,distance){return ({left:[-distance,0],right:[distance,0],top:[0,-distance],bottom:[0,distance]})[eventDir(dir)]}
function eventTilt(dir,deg){return dir==='left'?`rotateY(${-deg}deg)`:dir==='right'?`rotateY(${deg}deg)`:dir==='top'?`rotateX(${deg}deg)`:`rotateX(${-deg}deg)`}
function eventOrigin(dir){return ({left:'left center',right:'right center',top:'center top',bottom:'center bottom'})[eventDir(dir)]}
function animateJustCreated(el,delay=0,compact=false){
 if(!el||!el.isConnected||!el.animate||!EF('ent')||window.matchMedia('(prefers-reduced-motion: reduce)').matches||el.closest('[hidden]'))return;
 const opt=S.set.fx.ef.ent||{},speed=eventClamp(opt.sp),power=eventClamp(opt.pw),depth=eventClamp(opt.sz),dir=eventDir(opt.dir);
 const time=Math.max(200,Math.min(1050,Math.round(420*Math.sqrt(5/speed)*(1+(depth-5)*.035))));
 const distance=((compact?10:18)+power*2.8)*(compact?.65:1), z=20+depth*22+power*3;
 const perspective=Math.max(280,1300-depth*80), d=Math.min(178,38+power*8+depth*5);
 const [dx,dy]=eventVector(dir,distance*1.45),axis=dir==='top'||dir==='bottom'?'X':'Y';
 const rotate=eventTilt(dir,d), spin=eventTilt(dir,180-(11-power*.6));
 const ease='cubic-bezier(.17,.85,.25,1)';
 const style=opt.ty||'rise';
 const frames={
  rise:[{opacity:0,transform:`translate3d(0,${distance}px,0) scale(.985)`},{opacity:1,transform:'translate3d(0,0,0) scale(1)'}],
  fade:[{opacity:0,transform:'none'},{opacity:1,transform:'none'}],
  left:[{opacity:0,transform:`translate3d(${-distance*1.6}px,0,0)`},{opacity:1,transform:'none'}],
  right:[{opacity:0,transform:`translate3d(${distance*1.6}px,0,0)`},{opacity:1,transform:'none'}],
  zoom:[{opacity:0,transform:`scale(${Math.max(.62,1-power*.034)})`},{opacity:1,transform:'scale(1.045)',offset:.72},{opacity:1,transform:'scale(1)'}],
  flip:[{opacity:0,transform:`perspective(${perspective}px) rotateX(${8+power*2}deg) translate3d(0,${distance*.55}px,0)`},{opacity:1,transform:'none'}],
  cube:[{opacity:0,transform:`perspective(${perspective}px) ${rotate} translate3d(${dx*.6}px,${dy*.6}px,${-z}px) scale(.84)`},{opacity:1,transform:`perspective(${perspective}px) ${eventTilt(dir,-5)} translateZ(10px)`,offset:.8},{opacity:1,transform:'none'}],
  door:[{opacity:0,transform:`perspective(${perspective}px) ${eventTilt(dir,Math.min(86,d))} translateZ(${-z*.6}px)`},{opacity:1,transform:`perspective(${perspective}px) ${eventTilt(dir,-3)}`,offset:.84},{opacity:1,transform:'none'}],
  fold:[{opacity:0,transform:`perspective(${perspective}px) ${eventTilt(dir,Math.min(88,60+power*2))} scale(.86)`},{opacity:1,transform:'none'}],
  portal:[{opacity:0,transform:`perspective(${perspective}px) translate3d(${dx*.4}px,${dy*.4}px,${-z*2.6}px) scale(.45) rotateZ(${dir==='left'||dir==='top'?-1:1}deg)`},{opacity:1,transform:`perspective(${perspective}px) translateZ(24px) scale(1.035)`,offset:.78},{opacity:1,transform:'none'}],
  spiral:[{opacity:0,transform:`perspective(${perspective}px) ${eventTilt(dir,Math.min(98,d))} rotateZ(${dir==='left'||dir==='top'?-1:1}deg) translateZ(${-z*1.6}px) scale(.6)`},{opacity:1,transform:`perspective(${perspective}px) rotateZ(3deg) scale(1.03)`,offset:.8},{opacity:1,transform:'none'}],
  flip3d:[{opacity:0,transform:`perspective(${perspective}px) ${spin} translateZ(${-z}px) scale(.85)`},{opacity:1,transform:`perspective(${perspective}px) ${eventTilt(dir,-7)} scale(1.03)`,offset:.82},{opacity:1,transform:'none'}],
  pop3d:[{opacity:0,transform:`perspective(${perspective}px) translate3d(${dx}px,${dy}px,${-z*2}px) scale(.64)`},{opacity:1,transform:`perspective(${perspective}px) translateZ(${Math.min(80,z*.6)}px) scale(1.04)`,offset:.69},{opacity:1,transform:'none'}],
  slide3d:[{opacity:0,transform:`perspective(${perspective}px) translate3d(${dx*1.7}px,${dy*1.7}px,${-z}px) ${eventTilt(dir,Math.min(68,d*.65))}`},{opacity:1,transform:`perspective(${perspective}px) translateZ(10px)`,offset:.85},{opacity:1,transform:'none'}]
 };
 // A animação WAAPI protege o estado original e é cancelada ao terminar.
 let a;try{a=el.animate(frames[style]||frames.rise,{duration:time,delay:Math.min(350,delay),easing:ease,fill:'both',composite:'replace'});}
 catch(_){return}
 a.finished.then(()=>a.cancel(),()=>{});return a;
}

/* Partículas são desenhadas em um plano FIXO ao viewport, sem overflow:hidden
   dos meses, dias ou caixas. Não alteram a banca, gráficos ou scroll. */
function burstExitParticles(el,style='spark',power=5,depth=5,dir='left',exitTime=400,particleOpts={}){
 if(style==='none'||!el?.isConnected||window.matchMedia('(prefers-reduced-motion: reduce)').matches)return;
 const r=el.getBoundingClientRect();if(r.width<=0||r.height<=0)return;
 // Pontos nascem em TODA a caixa visível, inclusive perto das bordas.
 const left=Math.max(0,r.left),top=Math.max(0,r.top);
 const right=Math.min(innerWidth,r.right),bottom=Math.min(innerHeight,r.bottom);
 const width=right-left,height=bottom-top;
 if(width<=0||height<=0)return;
 const n=Math.min(130,Math.max(18,Math.round(12+power*2.2+(width*height/10000)*(.8+power*.12))));
 const cols=Math.max(1,Math.ceil(Math.sqrt(n*width/height)));
 const rows=Math.max(1,Math.ceil(n/cols));
 const cells=Array.from({length:cols*rows},(_,i)=>i);
 for(let i=cells.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[cells[i],cells[j]]=[cells[j],cells[i]]}
 // Controles exclusivos das partículas. Não alteram velocidade, profundidade ou força da caixa.
 // Mesmo em backups antigos, valores ausentes usam 5 sem modificar os registros.
 const particleSpeed=eventClamp(particleOpts.pSpeed??5),particleSize=eventClamp(particleOpts.pSize??5),particleRange=eventClamp(particleOpts.pRange??5);
 // Velocidade 1 = lenta, 10 = rápida. Duração não depende do tempo de remoção da caixa.
 const dur=Math.round(800*Math.sqrt(5/particleSpeed));
 const maxDelay=Math.min(105,dur*.10);
 const spread=22+particleRange*16;
 const scale=.45+particleSize*.125;
 const [vx,vy]=eventVector(dir,spread*.36);
 const cs=getComputedStyle(document.documentElement);
 const colors=['--ok','--bank','--win','--date','--loss'].map(v=>cs.getPropertyValue(v).trim()).filter(Boolean);
 const layer=document.createElement('div');layer.className='exit-particle-layer';layer.setAttribute('aria-hidden','true');document.body.append(layer);
 const cx=left+width/2,cy=top+height/2;
 let latestFinish=0;
 const animations=[];
 for(let i=0;i<n;i++){
  const cell=cells[i],col=cell%cols,row=Math.floor(cell/cols);
  const px=left+(col+.12+Math.random()*.76)*width/cols;
  const py=top+(row+.12+Math.random()*.76)*height/rows;
  const rx=(px-cx)/Math.max(1,width/2),ry=(py-cy)/Math.max(1,height/2);
  const angle=Math.atan2(ry,rx)+(Math.random()-.5)*1.15;
  const mag=spread*(.35+Math.random()*.9);
  const x=Math.cos(angle)*mag+vx,y=Math.sin(angle)*mag+vy;
  const size=((style==='dust'?2:style==='stars'?5:3)+Math.random()*3.2)*scale;
  const p=document.createElement('i');p.className='exit-particle '+style;
  p.style.cssText=`left:${px}px;top:${py}px;width:${size}px;height:${size}px;--particle-color:${colors[i%colors.length]||'#2ecc71'}`;
  layer.append(p);
  const duration=Math.round(dur*(.96+Math.random()*.08)),delay=Math.round(Math.random()*maxDelay);
  latestFinish=Math.max(latestFinish,duration+delay);
  try{
   const a=p.animate([
    {opacity:0,transform:'translate3d(0,0,0) scale(.3)'},
    {opacity:.96,offset:.15,transform:'translate3d(0,0,0) scale(1)'},
    {opacity:0,transform:`translate3d(${x}px,${y}px,0) rotate(${(i%2?1:-1)*100}deg) scale(.15)`}
   ],{duration,delay,easing:'cubic-bezier(.18,.7,.2,1)',fill:'both'});
   animations.push(a);
  }catch(_){}
 }
 // Camada fica até a última partícula terminar, mesmo que a caixa já tenha sumido.
 setTimeout(()=>{animations.forEach(a=>a.cancel());layer.remove()},Math.ceil(latestFinish||dur)+55);
}
function animateRemoval(el,commit){
 if(typeof commit!=='function')return;
 if(!el||!el.isConnected||el.dataset.exiting==='1'||!EF('exit')||!el.animate||el.closest('[hidden]')||window.matchMedia('(prefers-reduced-motion: reduce)').matches){if(el?.dataset.exiting==='1')return;commit();return;}
 const opt=S.set.fx.ef.exit||{},style=opt.ty||'implode',power=eventClamp(opt.pw),depth=eventClamp(opt.sz),speed=eventClamp(opt.sp),dir=eventDir(opt.dir);
 const r=el.getBoundingClientRect();if(!r.width||!r.height){commit();return}
 el.dataset.exiting='1';el.querySelectorAll('button').forEach(b=>b.disabled=true);
 const perspective=Math.max(280,1250-depth*82),z=25+depth*23+power*6,dist=15+power*8+depth*3;
 const [dx,dy]=eventVector(dir,dist),pivot=eventOrigin(dir);
 const time=Math.max(175,Math.min(920,Math.round(400*Math.sqrt(5/speed))));
 const common={opacity:1,transform:'none',filter:'none'};
 const frames={
  implode:[common,{opacity:.9,offset:.25,transform:`perspective(${perspective}px) translateZ(${-z}px) scale(.82)`},{opacity:0,transform:`perspective(${perspective}px) translateZ(${-z*2.6}px) scale(${Math.max(.08,.25-power*.018)}) ${eventTilt(dir,Math.min(65,power*4+depth*2))}`}],
  dust:[common,{opacity:.72,offset:.35,transform:`scale(.92)`},{opacity:0,transform:`perspective(${perspective}px) translateZ(${-z}px) scale(.55)`}],
  shrink:[common,{opacity:0,transform:`scale(${Math.max(.03,.18-power*.012)})`}],
  fold:[common,{opacity:0,transform:`perspective(${perspective}px) ${eventTilt(dir,Math.min(89,55+power*3))} translateZ(${-z}px) scale(.87)`}],
  slide:[common,{opacity:0,transform:`perspective(${perspective}px) translate3d(${dx*2.3}px,${dy*2.3}px,${-z*.5}px) ${eventTilt(dir,Math.min(38,power*2+depth))}`}],
  vortex:[common,{opacity:.8,offset:.22,transform:`perspective(${perspective}px) translateZ(${-z*.6}px) rotateZ(${dir==='left'||dir==='top'?-14:14}deg) scale(.84)`},{opacity:0,transform:`perspective(${perspective}px) translateZ(${-z*2}px) ${eventTilt(dir,Math.min(100,40+power*5))} rotateZ(${dir==='left'||dir==='top'?-70:70}deg) scale(.14)`}],
  fade:[common,{opacity:0,transform:'none'}]
 };
 burstExitParticles(el,opt.particles||'spark',power,depth,dir,time,opt);
 el.style.transformOrigin=pivot;el.style.pointerEvents='none';
 let finished=false;
 const done=()=>{if(finished)return;finished=true;commit()};
 try{
  const a=el.animate(frames[style]||frames.implode,{duration:time,easing:'cubic-bezier(.55,.1,.35,1)',fill:'forwards'});
  a.finished.then(()=>{
   if(!el.isConnected){done();return}
   // A altura desaba antes do DOM ser removido: a lista não salta abruptamente.
   const h=el.getBoundingClientRect().height;
   el.style.overflow='hidden';
   const b=el.animate([{height:h+'px',marginBlockEnd:getComputedStyle(el).marginBottom,opacity:0},{height:'0px',marginBlockEnd:'0px',opacity:0,paddingBlock:0,borderWidth:0}],{duration:Math.min(225,Math.max(105,time*.38)),easing:'ease-in',fill:'forwards'});
   b.finished.then(done,done);
  },done);
  setTimeout(done,time+450); // segurança se o browser suspender a animação
 }catch(_){done()}
}
function previewMotion(mode){
 const slot=document.getElementById(mode==='create'?'previewCreateSlot':'previewDeleteSlot');if(!slot)return;
 // Prévia local: não cria registros e não altera os dados salvos.
 slot.querySelectorAll('.motion-preview-card').forEach(el=>{el.getAnimations().forEach(a=>a.cancel());el.remove()});
 const el=document.createElement('div');el.className='motion-preview-card';el.innerHTML='<strong>Exemplo de operação</strong><span> R$ 150,00 · movimento visual</span>';
 slot.append(el);
 if(mode==='create')animateJustCreated(el);
 else animateRemoval(el,()=>el.remove());
}
function animateNewOpBatch(ids,oldGroupKeys=new Set()){
 if(!ids?.length)return;
 // Ano/mês/dia novos recebem uma entrada discreta, separada da operação.
 const newHeads=[...document.querySelectorAll('#ops .mh[data-mo]')]
    .filter(h=>!oldGroupKeys.has(h.dataset.mo));
 newHeads.forEach((h,i)=>animateJustCreated(h,Math.min(i*45,180),true));
 const nodes=[...document.querySelectorAll('#ops .op[data-id]')];
 ids.forEach((id,i)=>animateJustCreated(nodes.find(e=>e.dataset.id===id),
                    Math.min(90+i*65,300)));
}
function opsGroupKeys(){return new Set([...document.querySelectorAll('#ops .mh[data-mo]')].map(h=>h.dataset.mo))}
function animateNewGame(id){
 const chip=[...document.querySelectorAll('#games button[data-gm]')].find(b=>b.dataset.gm===id);
 const row=[...document.querySelectorAll('#gl .grow[data-id]')].find(e=>e.dataset.id===id);
 animateJustCreated(chip,0,true);animateJustCreated(row,35,true);
}

const sec=(key,lv,label,inner,date)=>{const accent=lv===1?'var(--bank)':lv===2?'var(--month-'+key.slice(6,8)+')':lv===3?'var(--win)':'var(--ok)';return `<section class="mg lv${lv}${COL.has(key)?' col':''}" style="--head-accent:${accent};--op-accent:${accent}"><div class="mh lv${lv}" data-mo="${key}">${label}<span class="dots"></span><span class="mst"></span>${lv===3?`<button class="mini" data-ad="${date}">+ operação</button>`:''}<i class="chev">▾</i></div><div class="mc2"><div class="mcw">${inner}</div></div></section>`};
function build(){const f=$('#fs').value,tt=today();R.forEach(r=>{if(!SEEN.has(r.o.id)){SEEN.add(r.o.id);(!r.closed||S.set.dx)&&OPEN.add(r.o.id)}});
let rows=V().filter(r=>!f||(f==='open'?!r.closed:r.st===f));if(S.set.ord!=='asc')rows=[...rows].reverse();
const T=[];rows.forEach(r=>{const d=r.o.d,y=d.slice(0,4),m=d.slice(0,7);let Y=T.find(x=>x.k===y);if(!Y)T.push(Y={k:y,ms:[]});let M=Y.ms.find(x=>x.k===m);if(!M)Y.ms.push(M={k:m,ds:[]});let D=M.ds.find(x=>x.k===d);if(!D)M.ds.push(D={k:d,rs:[]});D.rs.push(r)});
const dflt=(key,past,live)=>{if(!SEEN.has(key)){SEEN.add(key);if(S.set.old&&past&&!live)COL.add(key)}};
let h='';T.forEach(Y=>{dflt('y'+Y.k,Y.k<tt.slice(0,4),Y.ms.some(M=>M.ds.some(D=>D.rs.some(r=>!r.closed))));
h+=sec('y'+Y.k,1,`<b>${Y.k}</b>`,Y.ms.map(M=>{dflt('m'+M.k,M.k<tt.slice(0,7),M.ds.some(D=>D.rs.some(r=>!r.closed)));
return sec('m'+M.k,2,`<b>${new Date(M.k+'-01T12:00').toLocaleDateString('pt-BR',{month:'long'})}</b>`,M.ds.map(D=>{dflt('d'+D.k,D.k<tt,D.rs.some(r=>!r.closed));
return sec('d'+D.k,3,`<b>${D.k.slice(8)}</b><small>${DOW[new Date(D.k+'T12:00').getDay()]} · ${D.k.slice(5,7)}/${D.k.slice(0,4)}</small>`,D.rs.map((r,i)=>row(r,i,D.rs.length)).join(''),D.k)}).join(''))}).join(''))});
$('#ops').innerHTML=h||'<p class="mut">Nenhuma operação encontrada. Clique em “+ Nova operação”.</p>';$('#od').textContent=S.set.ord==='asc'?'↑ Mais antigas primeiro':'↓ Mais recentes primeiro';RI=new Set(rows.map(r=>r.o.id));updRows();$$('.op.new').forEach(e=>e.classList.remove('new'));if(typeof extrasUpdate==='function'&&!layoutEditing)requestAnimationFrame(()=>extrasUpdate())}
function updMonths(){
 // Agrega os resultados por ano/mês/dia em um só percurso.
 // Antes cada cabeçalho percorria TODAS as operações de novo.
 const groups=new Map();
 for(const r of V()){
  const date=r.o.d,keys=['y'+date.slice(0,4),'m'+date.slice(0,7),'d'+date];
  for(const key of keys){let a=groups.get(key);if(!a){a=[];groups.set(key,a)}a.push(r)}
 }
 $$('.mh').forEach(h=>{
  const key=h.dataset.mo,rows=groups.get(key)||[],s=ST(ACT(rows));
  const info=`<span>${rows.length} op.</span><span class="${cls(s.tot)}">${money(s.tot)}</span>`+(key[0]==='d'?'':`<span>${pct(s.hit)} de acerto</span>`);
  const status=h.querySelector('.mst');if(status&&status.innerHTML!==info)status.innerHTML=info;
  const dots=key[0]==='y'?'':rows.map(r=>`<i class="dot ${r.st}" title="${fd(r.o.d)} ${r.o.h1||''}: ${money(r.pl)}"></i>`).join('');
  const dotBox=h.querySelector('.dots');if(dotBox&&dotBox.innerHTML!==dots)dotBox.innerHTML=dots;
 });
}
function mixHex(a,b,t){const pa=(a||'#2ecc71').replace('#',''),pb=(b||'#e53935').replace('#','');const A=[0,2,4].map(i=>parseInt(pa.slice(i,i+2),16)),B=[0,2,4].map(i=>parseInt(pb.slice(i,i+2),16));return '#'+A.map((v,i)=>Math.round(v+(B[i]-v)*t).toString(16).padStart(2,'0')).join('')}
function stateTone(v,base=1){const p=Math.max(0,Math.min(1,Math.abs(v)/(base||1)));const pos='#2ecc71',neg='#e53935';return {solid:v>=0?mixHex('#244a31',pos,p):mixHex('#402326',neg,p),line:v>=0?mixHex('#60c58e',pos,p):mixHex('#f08f89',neg,p),bg:v===0?'':`linear-gradient(180deg, ${v>=0?`rgba(46,204,113,${(.12+.26*p).toFixed(3)})`:`rgba(229,57,53,${(.12+.26*p).toFixed(3)})`} 0%, transparent 82%)`}}
function paintTileState(tile,val,base){if(!tile)return;const t=stateTone(val,base);tile.style.setProperty('--tc',t.line);tile.style.background=t.bg||'';tile.style.borderColor=t.line;tile.style.boxShadow=val?`0 0 0 1px ${t.line}22 inset`:''} 
function paintOpState(el,r){const key=[r.pl,r.bank,r.dist,r.st].join('|');if(el.dataset.paintKey===key)return;el.dataset.paintKey=key;const base=Math.max(1,Math.abs(r.bank||0)*.28);const plTile=el.querySelector('.t[data-kpi="pl"]'),distTile=el.querySelector('.t[data-kpi="dist"]');paintTileState(plTile,r.pl,base);const distVal=r.st==='loss'?-Math.max(1,Math.abs(r.dist||0)):r.st==='win'?Math.max(1,Math.abs(r.dist||0)):r.pl;paintTileState(distTile,distVal,Math.max(1,Math.abs(r.bank||0)*.18));const head=el.querySelector('[data-k="spl"]');if(head){const t=stateTone(r.pl,base);head.style.color=r.pl>0?t.line:r.pl<0?t.line:'';head.style.textShadow=r.pl?`0 0 10px ${t.line}33`:''}const band=el.querySelector('.pg i');if(band){const t=stateTone(r.pl,base);band.style.background=r.pl>0?`linear-gradient(90deg, ${t.line}, #2ecc71)`:(r.pl<0?`linear-gradient(90deg, ${t.line}, #ff6b6b)`:'');}}

function updRows(){const M=new Map(R.map(r=>[r.o.id,r]));$$('#ops .op').forEach(el=>{const r=M.get(el.dataset.id);if(!r)return;const o=r.o,id=o.id,s=(k,t,c='')=>{const e=el.querySelector(`[data-k=${k}]`);if(!e)return;if(e.textContent!==t)e.textContent=t;if(e.className!==c)e.className=c};
s('ml',money(r.ml),'pos');s('alvo',money(r.alvo));s('mp',money(-r.mp),'neg');s('lim',money(r.lim));
s('pl',money(r.pl),r.st==='win'?'s-win':r.st==='loss'?'s-loss':cls(r.pl));s('spl',money(r.pl),cls(r.pl));s('fw',money(r.bank)+' → '+money(r.cur),'fw');
s('st',LBL[r.st]+(!r.closed&&r.st!=='open'?' (ao vivo)':''),'badge s-'+r.st);
s('dist',r.st==='win'?'+'+pct(r.dist)+' extra':r.st==='loss'?pct(r.dist)+' além do loss':r.st==='open'?'—':r.pl>=0?'faltam '+money(r.alvo-r.cur)+' p/ win':money(r.cur-r.lim)+' até o loss',r.st==='win'?'pos':r.st==='loss'?'neg':'');
paintOpState(el,r);
const d=dur(o);paintOperationTime(el,o);
s('du',(d?' · '+(o.run?clk(d):fdur(d)):'')+(o.pd?' · plano '+o.pd+'min':''));s('tmv',d?clk(d):'00:00');el.querySelector('[data-tm]').textContent=o.run?'⏸ Parar':'▶ Iniciar';
if(el.dataset.st!==r.st)el.dataset.st=r.st;const live=!r.closed&&r.st!=='open'?'1':'0';if(el.dataset.live!==live)el.dataset.live=live;
const bar=el.querySelector('[data-k=bar]'),barWidth=(r.alvo>r.lim?Math.max(0,Math.min(100,(r.cur-r.lim)/(r.alvo-r.lim)*100)):0)+'%';if(bar.style.width!==barWidth)bar.style.width=barWidth;
const bankField=el.querySelector('[data-f=b]');if(bankField?.readOnly){const value=money(r.bank);if(bankField.value!==value)bankField.value=value;if(bankField.type!=='text')bankField.type='text';bankField.removeAttribute('placeholder');}
});updMonths()}
function addOp(d){const oldGroups=opsGroupKeys(),g=S.set.gm,last=[...R].reverse().find(r=>r.o.d===d&&(g==='all'||r.g.id===g))||[...R].reverse().find(r=>g==='all'||r.g.id===g);const id=uid();S.ops.push({id,d,g:g==='all'?(last?last.g.id:S.games[0].id):g,b:'',w:{...(last?last.o.w:S.set.w)},l:{...(last?last.o.l:S.set.l)},f:'',h1:hm()});toast('Operação adicionada');upd();build();animateNewOpBatch([id],oldGroups)}
function rGeral(){const a=ACTR(),s=ST(a),gs=G(),ini=startB(gs),bank=endB(gs),lb=S.rng.to?'Banca no fim':'Banca atual';
const sa=ST(ACT()),b0=bankOf(G()),i0=sum(G().map(g=>+g.init));
const current=V().at(-1),adjusted=!!(current&&(current.o.summaryCarry!==undefined||current.o.manualBank!==undefined));
const summaryBank=`<div class="card summary-bank-card"><div class="summary-bank-head"><span>Banca atual</span><button type="button" class="summary-bank-pencil" data-summary-bank-edit title="Editar o saldo atual sem contabilizar ganho ou perda" aria-label="Editar banca atual">✎</button></div><b id="summaryBankAmount" class="${cls(b0-i0)}">${money(b0)}</b><div class="summary-bank-editor" id="summaryBankEditor" hidden><input id="summaryBankInput" type="number" step="any" min="0" inputmode="decimal" aria-label="Novo saldo da banca atual"><button data-summary-bank-save type="button" title="Salvar ajuste do saldo" aria-label="Salvar novo saldo">✓</button><button data-summary-bank-cancel type="button" title="Cancelar edição" aria-label="Cancelar edição">×</button></div>${adjusted?'<small class="summary-bank-note">Saldo ajustado manualmente</small>':''}</div>`;
const opSum=$('#opSum'),sumSig=JSON.stringify([S.set.gm,S.set.cy,b0,i0,sa.tot,sa.n,sa.hit,adjusted]);
if(opSum._renderSig!==sumSig){opSum._renderSig=sumSig;opSum.innerHTML=summaryBank+card('Lucro/Prejuízo',money(sa.tot),cls(sa.tot))+card('Dias operados',sa.n)+card('Taxa de acerto',pct(sa.hit))}
const kpi=$('#kpi'),kpiSig=JSON.stringify([S.set.cy,S.set.gm,S.rng.from,S.rng.to,ini,bank,s.tot,s.n,s.nw,s.nl,s.hit,s.best,s.worst,s.sw,s.sl]);
if(kpi._renderSig!==kpiSig){kpi._renderSig=kpiSig;kpi.innerHTML=card(lb,money(bank),cls(bank-ini),'início '+money(ini))+card('Lucro/Prejuízo',money(s.tot),cls(s.tot))+card('Retorno s/ banca inicial',pct(ini?(bank-ini)/ini*100:0),cls(bank-ini))+card('Dias operados',s.n,'',`${s.nw} win · ${s.nl} loss`)+card('Taxa de acerto',pct(s.hit))+card('Maior lucro',money(s.best),'pos')+card('Maior prejuízo',money(s.worst),'neg')+card('Stop Win / Stop Loss',`${s.sw} / ${s.sl}`)}}
function rStats(){const v=V(),a=ACTR(),s=ST(a),gs=G(),ini=sum(gs.map(g=>+g.init)),bank=bankOf(gs),x=[...v].reverse().find(r=>!r.closed)||v[v.length-1];
let h='<p class="mut">Sem operações neste filtro.</p>';
if(x){const p=x.alvo>x.lim?Math.max(0,Math.min(100,(x.cur-x.lim)/(x.alvo-x.lim)*100)):0;
h=`<p><b>${esc(x.g.name)}</b>, ${fd(x.o.d)}: ${x.closed?'encerrada':'em andamento'}. Preencha a Banca Final na aba Operações para acompanhar ao vivo.</p><div class="cards">${card('Banca na operação',money(x.cur),cls(x.pl),'início '+money(x.bank))}${card('Meta alvo',money(x.alvo),'pos','lucro de '+money(x.ml))}${card('Falta p/ Stop Win',money(Math.max(0,x.alvo-x.cur)))}${card('Margem até Stop Loss',money(x.cur-x.lim),x.cur<=x.lim?'neg':'','limite '+money(x.lim))}</div><div class="pg lw"><i style="width:${p}%"></i></div>`+(x.st==='win'?'<div class="alert w">🚀 Stop Win atingido: considere encerrar o dia e garantir o lucro.</div>':x.st==='loss'?'<div class="alert l">🛑 Stop Loss atingido: pare por hoje.</div>':'')}
$('#opAct').innerHTML=h;
const gl=+S.goals[S.set.gm]||0,fal=gl-bank,pr=gl>ini?Math.max(0,Math.min(100,(bank-ini)/(gl-ini)*100)):0;let g='<p class="mut">Defina uma meta para ver o progresso.</p>';
if(gl){const r=s.ret/100,dS=s.avg>0&&fal>0?Math.ceil(fal/s.avg):0,dC=r>0&&fal>0&&bank>0?Math.ceil(Math.log(gl/bank)/Math.log(1+r)):0;
g=`<div class="pg"><i style="width:${pr}%"></i></div><p>${nf(pr,1)}% do caminho: ${fal>0?`faltam <b>${money(fal)}</b>`:'<b class="pos">meta atingida 🎉</b>'}</p>`+(fal>0?`<p class="mut">Ritmo atual: ${dS?`cerca de ${dS} dias pela média simples (${money(s.avg)}/dia)`:'ainda sem lucro médio positivo'}${dC?`; cerca de ${dC} dias com juros compostos (${pct(s.ret)}/dia)`:''}.</p>`:'')}
$('#goalOut').innerHTML=g;
$('#perf').innerHTML=card('Lucro médio/dia',money(s.avg),cls(s.avg))+card('Retorno médio/dia',pct(s.ret),cls(s.ret))+card('Melhor dia',money(s.best),'pos')+card('Pior dia',money(s.worst),'neg')+card('Fator de lucro',s.pf===Infinity?'∞':nf(s.pf),'','ganhos ÷ perdas')+card('Payoff médio',nf(s.payoff),'','ganho médio ÷ perda média')+card('Maior sequência de wins',s.mw)+card('Maior sequência de losses',s.ml)+card('Sequência atual',s.cur>0?s.cur+' win(s)':s.cur<0?-s.cur+' loss(es)':'—')+card('Drawdown máximo',money(s.dd),'neg')+card('Stop Wins atingidos',s.sw)+card('Stop Loss atingidos',s.sl);
$('#byGame').innerHTML='<tr><th>Jogo</th><th>Dias</th><th>Acerto</th><th>Lucro</th><th>Banca atual</th><th>Retorno</th></tr>'+S.games.map(g=>{const t=ST(ACTR(R.filter(r=>r.g.id===g.id))),b=endB([g]),b0=startB([g]);return`<tr><td>${esc(g.name)}</td><td>${t.n}</td><td>${pct(t.hit)}</td><td class="${cls(t.tot)}">${money(t.tot)}</td><td>${money(b)}</td><td class="${cls(b-b0)}">${pct(b0?(b-b0)/b0*100:0)}</td></tr>`}).join('')}
const FD=x=>x.d+'T'+(x.t||'00:00'),inF=x=>(!S.fl.from||x.d>=S.fl.from)&&(!S.fl.to||x.d<=S.fl.to),flowSet=k=>S[k].filter(inF);
const flowSort=a=>{const [f,d]=S.fl.sort.split('-');return [...a].sort((x,y)=>(d==='desc'?-1:1)*(f==='val'?(+x.v||0)-(+y.v||0):FD(x).localeCompare(FD(y))))};
function ledgerData(){
 const ev=[...S.dep.map(x=>({id:x.id,d:x.d,t:x.t||'00:00',v:+x.v||0,k:'dep',desc:'Depósito'})),
 ...S.wd.map(x=>({id:x.id,d:x.d,t:x.t||'00:00',v:-(+x.v||0),k:'wd',desc:'Saque'})),
 ...ACT(R).map(r=>({id:r.o.id,d:r.o.d,t:r.o.h2||r.o.h1||'12:00',v:r.pl,k:'pl',desc:'Resultado · '+r.g.name}))];
 // Ordem estável mesmo em horários iguais.
 ev.sort((a,b)=>FD(a).localeCompare(FD(b))||({dep:0,pl:1,wd:2}[a.k]-{dep:0,pl:1,wd:2}[b.k]));
 let total=0;return ev.map(e=>({...e,total:total+=e.v}));
}
function ledgerVisible(){const mode=S.fl.type||'all';return ledgerData().filter(e=>inF(e)&&(mode==='all'||mode===e.k))}
function heatSty(v,score,kind){
 if(S.set.heat==='0')return '';
 const intensity=Math.max(1,Math.min(10,+S.fl.intensity||6));
 const clr=kind==='dep'?S.set.fc.dep:kind==='wd'?S.set.fc.wd:(v>=0?S.set.c.ok:S.set.c.loss);
 const a=Math.round((7+Math.max(0,Math.min(1,score))*77)*(intensity/10));
 return `background:color-mix(in srgb,${clr} ${a}%,var(--pn));border-color:color-mix(in srgb,${clr} ${Math.max(18,a)}%,var(--ln));`;
}
// A escala cumulativa é independente por tipo: depósitos e saques nunca se misturam.
function heatMetrics(items){
 const chrono=[...items].sort((a,b)=>FD(a).localeCompare(FD(b))||String(a.id).localeCompare(String(b.id)));
 const maxKind={dep:0,wd:0,pl:0},totals={dep:0,wd:0,pl:0},cumulative=new Map();
 chrono.forEach(e=>{totals[e.k]+=Math.abs(e.v);cumulative.set(e.id,totals[e.k]);maxKind[e.k]=Math.max(maxKind[e.k],Math.abs(e.v))});
 return {totals,maxKind,cumulative};
}
function heatScore(e,metrics){
 const m=S.set.heat;
 let x=m==='cum'?((metrics.cumulative.get(e.id)||0)/Math.max(1,metrics.totals[e.k])):Math.abs(e.v)/Math.max(1,metrics.maxKind[e.k]);
 return m==='band'?(x<.25?.25:x<.5?.52:x<.75?.75:1):x;
}
function rFlow(){
 const rows=ledgerVisible(),all=ledgerData(),dp=flowSet('dep'),wd=flowSet('wd');
 const D=sum(dp.map(x=>+x.v||0)),W=sum(wd.map(x=>+x.v||0)),pls=ACT(R.filter(r=>inF({d:r.o.d}))).map(r=>r.pl),L=sum(pls);
 const net=D-W+L,draw=rows.reduce((acc,e)=>acc+(e.v<0?e.v:0),0),peak=Math.max(0,...rows.map(e=>e.v)),floor=Math.min(0,...rows.map(e=>e.v));
 $('#fcards').innerHTML=card('Saldo movimentado no período',money(net),cls(net),'depósitos − saques + resultados')+card('Entradas',money(D),'cash-dep',dp.length+' depósito(s)')+card('Retiradas',money(W),'cash-wd',wd.length+' saque(s)')+card('Resultado das operações',money(L),cls(L),pls.length+' operação(ões)')+card('Movimentos no extrato',rows.length)+card('Maior entrada',money(peak),'pos')+card('Maior saída',money(floor),'neg')+card('Saques / depósitos',pct(D?W/D*100:0));
 $('#fquick').innerHTML=`<div><small>Entradas registradas</small><b class="cash-dep">+ ${money(D)}</b></div><div><small>Saídas registradas</small><b class="cash-wd">− ${money(W)}</b></div><div><small>Lucro/Prejuízo</small><b class="${cls(L)}">${money(L)}</b></div><div><small>Movimento líquido</small><b class="${cls(net)}">${money(net)}</b></div>`;
 $('#tdep').textContent='· '+dp.length+' · '+money(D);$('#twd').textContent='· '+wd.length+' · '+money(W);
 const metrics=heatMetrics(all);
 const sorted=flowSort(rows);
 $('#fledger').innerHTML='<thead><tr><th>Data e hora</th><th>Movimento</th><th>Valor</th><th>Saldo acumulado</th></tr></thead><tbody>'+(
 sorted.map(e=>{const val=e.v;return`<tr class="ledger-row" style="${heatSty(val,heatScore(e,metrics),e.k)}"><td>${fd(e.d)} · ${esc(e.t)}</td><td><span class="ledger-tag ${e.k}">${e.k==='dep'?'↗':e.k==='wd'?'↘':'◈'}</span> ${esc(e.desc)}</td><td class="${e.k==='dep'?'cash-dep':e.k==='wd'?'cash-wd':cls(e.v)}">${e.v>=0?'+ ':''}${money(e.v)}</td><td class="${cls(e.total)}">${money(e.total)}</td></tr>`}).join('')||'<tr><td colspan="4" class="mut">Nenhum lançamento no filtro escolhido.</td></tr>')+'</tbody>';
 $('#ftl').innerHTML=[...rows].reverse().slice(0,70).map(e=>`<div class="tl ${e.k==='wd'?'wd':'dp'}" style="${heatSty(e.v,heatScore(e,metrics),e.k)}"><span>${fd(e.d)} · ${esc(e.desc)}</span><b class="${e.k==='dep'?'cash-dep':e.k==='wd'?'cash-wd':cls(e.v)}">${e.v>=0?'+':''}${money(e.v)}</b><em>Σ ${money(e.total)}</em></div>`).join('')||'<p class="mut">Sem movimentações.</p>';
 const chart=CH.cFlowNet;if(chart){chart.data.labels=rows.map(e=>fd(e.d));chart.data.datasets=[{label:'Saldo de movimentações',data:rows.map(e=>e.total),borderColor:S.set.c.bank,backgroundColor:S.set.c.bank+'22',fill:true,tension:.24,pointBackgroundColor:rows.map(e=>e.total<0?S.set.c.loss:S.set.c.ok),pointRadius:rows.length>60?0:3}];chart.update('none')}
 flowHeat();
}
function flowHeat(){
 document.documentElement.style.setProperty('--cash-dep',S.set.fc.dep);
 document.documentElement.style.setProperty('--cash-wd',S.set.fc.wd);
 const all=ledgerData(),metrics=heatMetrics(all);
 ['dep','wd'].forEach(k=>{
  const map=new Map(all.filter(x=>x.k===k).map(e=>[e.id,e]));
  $$(`#l-${k} .fr`).forEach(el=>{
   const e=map.get(el.dataset.id);if(!e)return;
   const input=el.querySelector('[data-f=v]');
   input.style.cssText=heatSty(e.v,heatScore(e,metrics),k)+'color:var(--tx);';
   el.querySelector('.cum').textContent=S.set.heat==='cum'?'Σ '+money(metrics.cumulative.get(e.id)||0):'';
  });
 });
}
function flowLists({scrollToKind='',scrollToId=''}={}){
 // Não perder a posição ao reordenar, editar a data ou alterar os filtros.
 const sc={};['dep','wd'].forEach(k=>{const el=$('#l-'+k);sc[k]=el?el.scrollTop:0});
 ['dep','wd'].forEach(k=>{const el=$('#l-'+k);if(!el)return;
  el.innerHTML=flowSort(flowSet(k)).map(x=>`<div class="fr" data-id="${x.id}"><input type="date" data-l="${k}" data-f="d" value="${x.d}"><input type="time" data-l="${k}" data-f="t" value="${x.t||''}"><input type="number" step="any" data-l="${k}" data-f="v" value="${x.v}"><span class="cum"></span><button class="x" data-lx="${k}" title="Remover lançamento">✕</button></div>`).join('')||'<p class="mut">Nada registrado neste período.</p>';
  if(scrollToKind===k&&scrollToId){
   const row=Array.from(el.querySelectorAll('.fr')).find(x=>x.dataset.id===scrollToId);
   el.scrollTop=row?row.getBoundingClientRect().top-el.getBoundingClientRect().top+el.scrollTop-6:sc[k];
  } else el.scrollTop=sc[k];
 });flowHeat();
 if(scrollToKind&&scrollToId){const item=[...document.querySelectorAll('#l-'+scrollToKind+' .fr[data-id]')].find(e=>e.dataset.id===scrollToId);animateJustCreated(item,0,true)}
}
/* Atualizar somente o que mudou: recriar botões via innerHTML reiniciava
   animações de flutuação, hover e clique a cada seleção/novo jogo. */
function chips(){
 const host=$('#games'),items=[{id:'all',name:'Todos os jogos'},...S.games],keep=new Set();
 for(let i=0;i<items.length;i++){
  const g=items[i],key=String(g.id);
  let btn=[...host.querySelectorAll(':scope > button[data-gm]')].find(b=>b.dataset.gm===key);
  if(!btn){btn=document.createElement('button');btn.dataset.gm=key;}
  if(btn.textContent!==g.name)btn.textContent=g.name;
  btn.classList.toggle('on',S.set.gm===g.id);
  if(host.children[i]!==btn)host.insertBefore(btn,host.children[i]||null);
  keep.add(btn);
 }
 let add=host.querySelector('#gnew');
 if(!add){add=document.createElement('button');add.id='gnew';add.textContent='+ Jogo';}
 if(host.children[items.length]!==add)host.insertBefore(add,host.children[items.length]||null);
 keep.add(add);
 if(S.set.gm!=='all'){
  let del=host.querySelector('#gdel');
  if(!del){del=document.createElement('button');del.id='gdel';del.textContent='🗑 Excluir jogo';del.title='Apaga o jogo e as operações dele';}
  if(host.children[items.length+1]!==del)host.insertBefore(del,host.children[items.length+1]||null);
  keep.add(del);
 }
 for(const b of [...host.children])if(!keep.has(b))b.remove();
}
function gameList(){
 const host=$('#gl'),keep=new Set();
 for(let i=0;i<S.games.length;i++){
  const g=S.games[i];let row=[...host.children].find(e=>e.dataset.id===g.id);
  if(!row){row=document.createElement('div');row.className='grow';row.dataset.id=g.id;
   row.innerHTML='<input data-gn><input data-gi type="number" step="any" style="width:110px"><button class="x" data-gx>✕</button>';}
  const name=row.querySelector('[data-gn]'),bank=row.querySelector('[data-gi]');
  if(document.activeElement!==name&&name.value!==g.name)name.value=g.name;
  if(document.activeElement!==bank&&bank.value!==String(g.init))bank.value=g.init;
  if(host.children[i]!==row)host.insertBefore(row,host.children[i]||null);
  keep.add(row);
 }
 for(const el of [...host.children])if(!keep.has(el))el.remove();
}
function mkCharts(){Object.values(CH).forEach(c=>c.destroy());const cs=getComputedStyle(document.documentElement);Chart.defaults.color=cs.getPropertyValue('--mut').trim();Chart.defaults.borderColor=cs.getPropertyValue('--ln').trim();
const mk=(id,type,x={})=>CH[id]=new Chart($('#'+id),{type,data:{labels:[],datasets:[]},options:{responsive:true,maintainAspectRatio:false,animation:CHA(),plugins:{legend:{position:'bottom'}},...x}});
mk('cBank','line',{spanGaps:true});mk('cPL','line');mk('cP1','pie');mk('cP2','doughnut');mk('cFlowNet','line',{elements:{point:{radius:3}}});mk('cCum','line');mk('cGL','doughnut');mk('cDow','bar',{plugins:{legend:{display:false}}})}
function charts(){const a=ACTR(),lb=a.map(r=>fd(r.o.d)),c=S.set.c,s=ST(a);let ch=CH.cBank;
ch.data.labels=lb;ch.data.datasets=G().map((g,i)=>({label:g.name,borderColor:PAL[i%6],backgroundColor:PAL[i%6],tension:.25,data:a.map(r=>r.g.id===g.id?r.cur:null)}));ch.update();
ch=CH.cPL;ch.data.labels=lb;ch.data.datasets=[{label:'Lucro/Prejuízo',data:a.map(r=>r.pl),borderColor:c.bank,backgroundColor:c.bank,tension:.2},{label:'Meta de lucro',data:a.map(r=>r.ml),borderColor:c.win,borderDash:[5,4],pointRadius:0},{label:'Limite de perda',data:a.map(r=>-r.mp),borderColor:c.loss,borderDash:[5,4],pointRadius:0}];ch.update();
const K=['win','plus','even','minus','loss'],KL=['Stop Win','Lucro abaixo da meta','Zerado','Prejuízo no limite','Stop Loss'],KC=[c.ok,'#8bc34a','#9e9e9e','#ff9800',c.loss],cn=K.map(k=>a.filter(r=>r.st===k).length);
ch=CH.cP1;ch.data.labels=KL.filter((_,i)=>cn[i]);ch.data.datasets=[{data:cn.filter(n=>n),backgroundColor:KC.filter((_,i)=>cn[i])}];ch.update();
ch=CH.cP2;ch.data.labels=S.games.map(g=>g.name);ch.data.datasets=[{data:S.games.map(g=>a.filter(r=>r.g.id===g.id).length),backgroundColor:PAL}];ch.update();
let cu=0;ch=CH.cCum;ch.data.labels=lb;ch.data.datasets=[{label:'Lucro acumulado',data:a.map(r=>cu+=r.pl),borderColor:c.ok,backgroundColor:c.ok+'33',fill:true,tension:.25}];ch.update();
ch=CH.cGL;ch.data.labels=['Ganhos','Perdas'];ch.data.datasets=[{data:[s.gw,s.gl],backgroundColor:[c.ok,c.loss]}];ch.update();const dw=[0,0,0,0,0,0,0];a.forEach(r=>dw[new Date(r.o.d+'T12:00').getDay()]+=r.pl);ch=CH.cDow;ch.data.labels=['Dom','Seg','Ter','Qua','Qui','Sex','Sáb'];ch.data.datasets=[{data:dw,backgroundColor:dw.map(x=>x>=0?c.ok:c.loss),borderRadius:6}];ch.update()}

const THEME_PRESETS={
 dark:{name:'Original escuro',base:null,colors:{date:'#ff9800',bank:'#7e57c2',win:'#00acc1',loss:'#c62828',ok:'#2ecc71'}},
 preto:{name:'Preto absoluto',base:null,colors:{date:'#ff9800',bank:'#7e57c2',win:'#00acc1',loss:'#c62828',ok:'#2ecc71'}},
 claro:{name:'Claro clássico',base:null,colors:{date:'#d88624',bank:'#6b49b1',win:'#008fa4',loss:'#c62828',ok:'#128650'}},
 emerald:{name:'Esmeralda',base:{bg:'#091a16',pn:'#112620',ln:'#28473b',tx:'#e6f7eb',mut:'#9cb5a9'},colors:{date:'#eab859',bank:'#3fa9aa',win:'#16a58b',loss:'#ee5963',ok:'#45d88c'}},
 cyber:{name:'Cyber roxo',base:{bg:'#100b21',pn:'#201734',ln:'#3e3058',tx:'#f1e9ff',mut:'#aa9bc2'},colors:{date:'#ffb84f',bank:'#9b72fd',win:'#48cfe2',loss:'#fb6788',ok:'#9d7cfb'}},
 ocean:{name:'Oceano profundo',base:{bg:'#071927',pn:'#11293a',ln:'#2a4356',tx:'#e8f8ff',mut:'#a1b6c7'},colors:{date:'#eead69',bank:'#558ef0',win:'#35b6db',loss:'#ed6f7b',ok:'#34d5ac'}},
 crimson:{name:'Bordô elegante',base:{bg:'#190e14',pn:'#291820',ln:'#47313c',tx:'#ffeef4',mut:'#bb9ea9'},colors:{date:'#f9bc71',bank:'#a86dc4',win:'#e28b96',loss:'#e45462',ok:'#f197b2'}},
 amber:{name:'Âmbar',base:{bg:'#191409',pn:'#2c2211',ln:'#4c3b22',tx:'#fff4df',mut:'#c4b296'},colors:{date:'#f6b744',bank:'#bb8255',win:'#eaba54',loss:'#ea6661',ok:'#e4c875'}},
 frost:{name:'Gelo claro',base:{bg:'#e9f2f8',pn:'#ffffff',ln:'#cfdae5',tx:'#142d40',mut:'#607c90'},colors:{date:'#e19a48',bank:'#6476be',win:'#3795bb',loss:'#c44359',ok:'#008a92'}},
 graphite:{name:'Grafite azul',base:{bg:'#0c1118',pn:'#1a222e',ln:'#334254',tx:'#eff5fb',mut:'#99aabb'},colors:{date:'#ffaf62',bank:'#617ad4',win:'#4cb2d1',loss:'#d95c66',ok:'#51c6a2'}}
};
function themeRefresh(){
 const sel=$('#sTheme');if(!sel)return;
 const current=S.set.theme;
 sel.innerHTML=Object.entries(THEME_PRESETS).map(([k,v])=>`<option value="${k}">${v.name}</option>`).join('')+
  (S.themes||[]).map(x=>`<option value="user:${esc(x.id)}">★ ${esc(x.name)}</option>`).join('');
 if(S.set.customBase)sel.insertAdjacentHTML('beforeend','<option value="draft">✎ Em edição (não salvo)</option>');
 sel.value=current in THEME_PRESETS||current==='draft'||current.startsWith('user:')?current:'dark';
 $('#themeRemove').disabled=!current.startsWith('user:');
}
function themeApplyChoice(id){
 const p=id==='draft'?{base:S.set.customBase}:THEME_PRESETS[id]||(S.themes||[]).find(x=>'user:'+x.id===id);
 if(!p)return;
 S.set.theme=id;
 if(p.colors)S.set.c={...S.set.c,...p.colors};
 if(p.fc)S.set.fc={...p.fc};
 if(p.monthColors)S.set.monthColors=normalizeMonthColors(p.monthColors);
 if(p.glow)S.set.fx.glow=p.glow;
 if(p.cols)S.set.fx.cols=[...p.cols];
 themeRefresh();ctl();look();flowLists();themeSwatches();save();
}
function themeBase(){
 const id=S.set.theme,sel=id==='draft'?{base:S.set.customBase,scheme:S.set.customScheme}:THEME_PRESETS[id]||(S.themes||[]).find(x=>'user:'+x.id===id);
 const root=document.documentElement;
 ['bg','pn','ln','tx','mut'].forEach(k=>root.style.removeProperty('--'+k));root.style.removeProperty('color-scheme');
 if(sel?.base){Object.entries(sel.base).forEach(([k,v])=>root.style.setProperty('--'+k,v));root.style.setProperty('color-scheme',id==='frost'?'light':'dark')}
 else if(id.startsWith('user:')||id==='draft')root.style.setProperty('color-scheme',sel?.scheme||'dark');
}
function themeSwatches(){
 const cs=getComputedStyle(document.documentElement);
 ['bg','pn','ln','tx','mut'].forEach(k=>{const el=$('#theme-'+k);if(el){const s=cs.getPropertyValue('--'+k).trim();if(/^#[a-f\d]{6}$/i.test(s))el.value=s}});
 ensureMonthColors().forEach((c,i)=>{const el=document.querySelector('[data-month-color="'+i+'"]');if(el)el.value=c});
}
function editThemeBase(k,hex){
 const cs=getComputedStyle(document.documentElement),base={};
 ['bg','pn','ln','tx','mut'].forEach(name=>base[name]=cs.getPropertyValue('--'+name).trim());
 base[k]=hex;S.set.customBase=base;S.set.customScheme=cs.colorScheme==='light'?'light':'dark';S.set.theme='draft';
 themeRefresh();look();save();
}

function restoreDefaultProfilePreservingRecords(){
 // Reaplicar preferências nunca apaga operações, depósitos, saques ou diário.
 if(typeof layoutEditing!=='undefined'&&layoutEditing)layoutEnd(true);
 applyDefaultProfileToState(S,{keepRecords:true});
 S.layoutActive='';
 document.documentElement.dataset.anim=S.set.anim;
 COL.clear();OPEN.clear();SEEN.clear();
 all();save();
 toast('Visual padrão aplicado! Suas operações e registros foram mantidos.');
}
function themeSave(){
 const name=$('#themeName').value.trim().slice(0,44);
 if(!name){toast('Digite um nome para salvar o tema.');$('#themeName').focus();return}
 const computed=getComputedStyle(document.documentElement),base={};
 ['bg','pn','ln','tx','mut'].forEach(k=>base[k]=computed.getPropertyValue('--'+k).trim());
 const id=uid(),scheme=getComputedStyle(document.documentElement).colorScheme==='light'?'light':'dark';
 S.themes.push({id,name,base,scheme,colors:{...S.set.c},fc:{...S.set.fc},monthColors:[...ensureMonthColors()],glow:S.set.fx.glow,cols:[...S.set.fx.cols]});
 S.set.theme='user:'+id;$('#themeName').value='';themeRefresh();look();themeSwatches();save();toast('Tema personalizado salvo');
}
function look(){if(!['classic','ops-compact','focus','dashboard'].includes(S.set.siteView))S.set.siteView='classic';const r=document.documentElement;r.dataset.theme=S.set.theme;themeBase();document.body.dataset.d=S.set.dens;if(S.set.sb===undefined)S.set.sb=innerWidth<760?1:0;$('#side').classList.toggle('c',!!S.set.sb);r.dataset.fs=S.set.fs;r.dataset.anim=S.set.anim;r.dataset.sideSkin=S.set.sideSkin||'soft';r.dataset.siteView=S.set.siteView||'classic';r.setAttribute('data-siteview',S.set.siteView||'classic');r.dataset.perf=S.set.perf||'smooth';applyFx();navApplyLook();Object.entries(S.set.c).forEach(([k,v])=>r.style.setProperty('--'+k,v));ensureMonthColors().forEach((v,i)=>r.style.setProperty('--month-'+String(i+1).padStart(2,'0'),v));const cs=getComputedStyle(r);Chart.defaults.color=cs.getPropertyValue('--mut').trim();Chart.defaults.borderColor=cs.getPropertyValue('--ln').trim();upd()}
function activeTab(){return $('#tabs button.on')?.dataset.t||'ops'}
/* Cada página mantém o ponto vertical onde o usuário estava. Não gravamos
   eventos de scroll causados pelo próprio navegador ao ocultar outra aba. */
const TAB_SCROLL_POS=Object.create(null);
function rememberTabScroll(id){if(!id)return;const doc=document.scrollingElement||document.documentElement;TAB_SCROLL_POS[id]=doc.scrollTop;}
function restoreTabScroll(id){
 if(activeTab()!==id)return;
 const doc=document.scrollingElement||document.documentElement;
 const target=TAB_SCROLL_POS[id]??0;
 doc.scrollTop=Math.min(target,Math.max(0,doc.scrollHeight-doc.clientHeight));
 updatePageScroll();
}
// Somente mudanças reais dos dados invalidam as visualizações secundárias.
let VISUAL_REV=0;
const PAGE_RENDER_REV=Object.create(null);
function refreshVisible(){
 const tab=activeTab();
 if(PAGE_RENDER_REV[tab]===VISUAL_REV)return;
 if(tab==='ops')updRows();
 if(tab==='geral'||tab==='stats'){if(tab==='stats')rStats();charts()}
 if(tab==='flow'){rFlow();flowLists()}
 if(tab==='risk')rRisk();
 if(tab==='diary')rDiary();
 if(tab==='cal')rCal();
 if(tab==='goals')rGoals();
 if(tab==='ins')rIns();
 if(['calc','geral','ins','flow'].includes(tab))wVisible(tab);
 if(tab==='stats')rRng();
 if(tab==='cfg')efSyncControls();
 PAGE_RENDER_REV[tab]=VISUAL_REV;
}
function wVisible(tab){(S.wg[tab]||[]).forEach(wUpd)}
function efSyncControls(){if(document.activeElement?.closest?.('#efl'))return;/* O painel já preserva os valores dos controles. */}
function upd(){
 VISUAL_REV++;
 calc();rGeral();rRng();rAlert();
 const tab=activeTab();
 if(tab==='ops')updRows();
 if(tab==='geral'||tab==='stats'){if(tab==='stats')rStats();charts()}
 if(tab==='flow')rFlow();
 if(tab==='risk')rRisk();
 if(tab==='diary')rDiary();
 if(tab==='cal')rCal();
 if(tab==='goals')rGoals();
 if(tab==='ins')rIns();
 if(['calc','geral','ins','flow'].includes(tab))wVisible(tab);
 if($('#opsDashDialog')?.open)renderOpsDash();
 PAGE_RENDER_REV[tab]=VISUAL_REV;
 save();
}
// Padrões compatíveis com backups anteriores; inputs e controles individuais sincronizados.
function eventSettingsSync(){
 const ef=S?.set?.fx?.ef;if(!ef)return;
 const pairs=[['sCreateStyle','ent','ty'],['sCreateDir','ent','dir'],['sCreatePower','ent','pw'],['sCreateDepth','ent','sz'],['sCreateSpeed','ent','sp'],['sDeleteStyle','exit','ty'],['sDeleteDir','exit','dir'],['sDeleteParticles','exit','particles'],['sDeletePower','exit','pw'],['sDeleteDepth','exit','sz'],['sDeleteSpeed','exit','sp'],['sParticleSpeed','exit','pSpeed'],['sParticleSize','exit','pSize'],['sParticleRange','exit','pRange']];
 for(const [id,k,q] of pairs){const el=document.getElementById(id);if(!el||document.activeElement===el)continue;const v=ef[k]?.[q];if(v!=null)el.value=String(v)}
 for(const key of ['Create','Delete','Particle'])for(const prop of (key==='Particle'?['Speed','Size','Range']:['Power','Depth','Speed'])){const b=document.getElementById('s'+key+prop+'V'),i=document.getElementById('s'+key+prop);if(b&&i)b.textContent=i.value}
}
function eventSettingsInput(t){
 const lookup={sCreateStyle:['ent','ty'],sCreateDir:['ent','dir'],sCreatePower:['ent','pw'],sCreateDepth:['ent','sz'],sCreateSpeed:['ent','sp'],sDeleteStyle:['exit','ty'],sDeleteDir:['exit','dir'],sDeleteParticles:['exit','particles'],sDeletePower:['exit','pw'],sDeleteDepth:['exit','sz'],sDeleteSpeed:['exit','sp'],sParticleSpeed:['exit','pSpeed'],sParticleSize:['exit','pSize'],sParticleRange:['exit','pRange']};
 const info=lookup[t.id];if(!info)return false;
 const [k,q]=info;let v=['pw','sz','sp','pSpeed','pSize','pRange'].includes(q)?eventClamp(t.value):t.value;
 if(q==='dir')v=eventDir(v);
 if(q==='ty'&&!TY[k].some(([id])=>id===v))v=k==='ent'?'rise':'implode';
 if(q==='particles'&&!['spark','dust','shards','stars','none'].includes(v))v='spark';
 S.set.fx.ef[k][q]=v;
 const control=document.querySelector(`[data-ep="${k}:${q}"]`);
 if(control&&document.activeElement!==control)control.value=String(v);
 if(['pw','sz','sp','pSpeed','pSize','pRange'].includes(q)&&control){const b=control.nextElementSibling;if(b)b.textContent=String(v)}
 eventSettingsSync();save();return true;
}

function ctl(){eventSettingsSync();themeRefresh();$('#sTheme').value=S.set.theme;$('#sCy').value=S.set.cy;$('#sDens').value=S.set.dens;ensureMonthColors();$$('[data-c]').forEach(i=>i.value=S.set.c[i.dataset.c]);$$('[data-month-color]').forEach(i=>i.value=ensureMonthColors()[+i.dataset.monthColor]);$('#dwm').value=S.set.w.m;$('#dwv').value=S.set.w.v;$('#dlm').value=S.set.l.m;$('#dlv').value=S.set.l.v;$('#goal').value=S.goals[S.set.gm]||'';$('#fxOn').value=S.set.fx.on;$('#fxT').value=S.set.fx.type;$('#fxP').value=S.set.fx.pw;$('#fxPv').textContent=S.set.fx.pw;$('#fxS').value=S.set.fx.sp;$('#fxSv').textContent=S.set.fx.sp;$('#fxG').value=S.set.fx.glow;S.set.fx.cols.forEach((c,i)=>$('#fxc'+i).value=c);$('#sLay').value=S.set.lay;$('#sNavBar').value=S.set.navBar||'solid';$('#sNavButtons').value=S.set.navButtons||'soft';$('#sNavLabels').value=S.set.navLabels||'full';$('#sNavSize').value=S.set.navSize||100;$('#sNavSizeValue').textContent=(S.set.navSize||100)+'%';$('#sNavAutoHide').value=String(S.set.navAutoHide??1);navWidthSync();$('#sSiteView').value=S.set.siteView||'classic';$('#sTr').value=S.set.tr;$('#sPerf').value=S.set.perf||'smooth';$('#sFps').value=S.set.fps?'1':'0';perfSync();$('#sOld').value=S.set.old;$('#fcDep').value=S.set.fc.dep;$('#fcWd').value=S.set.fc.wd;$('#ff').value=S.fl.from;$('#ft').value=S.fl.to;$('#fSort').value=S.fl.sort;$('#fHeat').value=S.set.heat;$('#fType').value=S.fl.type||'all';$('#fIntensity').value=S.fl.intensity||6;$('#fIntensityV').textContent=S.fl.intensity||6;$('#riskPct').value=S.risk.pct;$('#riskN').value=S.risk.n;$('#fxZ').value=S.set.fx.sz;$('#fxZv').textContent=S.set.fx.sz;$('#gWk').value=S.gl.wk||'';$('#gMo').value=S.gl.mo||'';$('#gDd').value=S.gl.dd||'';efList();$('#sOrd').value=S.set.ord;$('#sDx').value=S.set.dx;$('#sAnim').value=S.set.anim;$('#sFs').value=S.set.fs;$('#sMaxL').value=S.set.maxL;$('#rf').value=S.rng.from;$('#rt').value=S.rng.to;themeSwatches()}
function all(){VISUAL_REV++;for(const k in PAGE_RENDER_REV)delete PAGE_RENDER_REV[k];EXTRAS_TAB='';calc();ctl();chips();gameList();if(!CH.cBank)mkCharts();renderWG();flowLists();build();look();syncFloatClocks($('#t-'+activeTab()));extrasUpdate();}
function arm(b,fn){if(b.dataset.a)return fn();b.dataset.a=1;const t=b.textContent;b.textContent='Certeza?';setTimeout(()=>{delete b.dataset.a;b.textContent=t},3000)}
let updPending=0;function scheduleUpd(){if(updPending)return;updPending=requestAnimationFrame(()=>{updPending=0;upd()})}
document.addEventListener('input',e=>{const t=e.target;if(t.dataset.di)return;const tr=t.closest('.op'),fr=t.closest('.fr'),gr=t.closest('.grow'),id=t.id;
if(tr&&t.dataset.f){const o=S.ops.find(x=>x.id===tr.dataset.id),f=t.dataset.f;
 if(f==='f'){t.dataset.draft=t.value===String(o.f)?'0':'1';t.setAttribute('aria-label','Banca Final: pressione Enter para confirmar');return;}
if(f==='w'||f==='l')o[f].v=+t.value||0;else if(f==='b'){if(t.readOnly)return;/* Ajuste manual é confirmado somente no Enter ou no lápis, sem alterar os resultados históricos. */return}else if(f==='f')o[f]=t.value===''?'':+t.value;else o[f]=t.value;scheduleUpd();if(f==='h1'||f==='h2')previewOperationOrder()}
else if(fr&&t.dataset.l){const x=S[t.dataset.l].find(y=>y.id===fr.dataset.id);x[t.dataset.f]=t.dataset.f==='v'?+t.value||0:t.value;upd()}
else if(gr){const g=S.games.find(y=>y.id===gr.dataset.id);if(t.dataset.gn!==undefined){g.name=t.value;chips();build()}else g.init=+t.value||0;upd()}
else if(t.dataset.c){S.set.c[t.dataset.c]=t.value;look()}
else if(t.dataset.monthColor!==undefined){ensureMonthColors();S.set.monthColors[+t.dataset.monthColor]=t.value;look();save()}
else if(t.dataset.themeBase){editThemeBase(t.dataset.themeBase,t.value)}
else if(id==='sTheme'){themeApplyChoice(t.value)}
else if(id==='sDens'){S.set.dens=t.value;look()}
else if(id==='sPerf'){S.set.perf=t.value;perfCanvasSize();fxStart();perfSync();save()}
else if(id==='sFps'){S.set.fps=+(t.value==='1');perfSync();save()}
else if(id==='sCy'){S.set.cy=t.value;build();upd()}
else if(eventSettingsInput(t)){return}
else if(id.startsWith('fx')){const f=S.set.fx;f.on=+$('#fxOn').value;f.type=$('#fxT').value;f.pw=+$('#fxP').value;f.sp=+$('#fxS').value;f.sz=+$('#fxZ').value;f.glow=$('#fxG').value;f.cols=[0,1,2].map(i=>$('#fxc'+i).value);$('#fxPv').textContent=f.pw;$('#fxSv').textContent=f.sp;$('#fxZv').textContent=f.sz;applyFx();save()}
else if(t.dataset.e){S.set.fx.ef[t.dataset.e].on=t.checked?1:0;applyFx();save()}
else if(t.dataset.ep){const [k,q]=t.dataset.ep.split(':');S.set.fx.ef[k][q]=['ty','dir','particles'].includes(q)?t.value:+t.value;if(['ent','exit'].includes(k))eventSettingsSync();if(q!=='ty'){t.nextElementSibling.textContent=t.value;document.documentElement.style.setProperty(`--${k}-${q}`,t.value)}if(q==='sp'&&['float','boxFloat','btnFloat'].includes(k))syncFloatClocks($('#t-'+activeTab()));save()}
else if(id==='gWk'||id==='gMo'||id==='gDd'){S.gl={wk:+$('#gWk').value||0,mo:+$('#gMo').value||0,dd:+$('#gDd').value||0};upd()}
else if(id==='fcDep'||id==='fcWd'){S.set.fc[id==='fcDep'?'dep':'wd']=t.value;rFlow();save()}
else if(id==='fHeat'){S.set.heat=t.value;rFlow();save()}
else if(id==='fType'){S.fl.type=t.value;rFlow();save()}
else if(id==='fIntensity'){S.fl.intensity=+t.value;$('#fIntensityV').textContent=t.value;rFlow();save()}
else if(id==='riskPct'||id==='riskN'){S.risk[id==='riskPct'?'pct':'n']=+t.value;rRisk();save()}
else if(id==='diFilter'){rDiary()}
else if(id==='ff'||id==='ft'||id==='fSort'){S.fl.from=$('#ff').value;S.fl.to=$('#ft').value;S.fl.sort=$('#fSort').value;flowLists();upd()}
else if(t.dataset.p&&t.closest('[data-w]')){wIn(t)}
else if(id==='sNavWidth'){navSetWidthFromControl();navApplyLook();navUpdate(false);save();}
else if(SM[id]){
 const navSetting=['sLay','sNavBar','sNavButtons','sNavLabels','sNavSize','sNavAutoHide'].includes(id);
 S.set[SM[id]] = ['sDx','sMaxL','sOld','sHeat','sNavSize','sNavAutoHide'].includes(id)? +t.value||0 : t.value;
 if(id==='sNavSize'){
   $('#sNavSizeValue').textContent=S.set.navSize+'%';navApplyLook();navUpdate(false);save();
 }else if(navSetting){
   if(id==='sLay') {S.set.sb=0;resetPointerLayer();}
   navApplyLook();navWidthSync();navUpdate(true);save();
 }else if(id==='sSiteView'){resetPointerLayer();look();navUpdate(true);save()}
 else if(id==='sDx'){OPEN=new Set(S.set.dx?R.map(r=>r.o.id):R.filter(r=>!r.closed).map(r=>r.o.id));save()}
 else if(['sAnim','sTr'].includes(id)){document.documentElement.dataset.anim=S.set.anim;applyFx();syncFloatClocks($('#t-'+activeTab()));save()}
 else if(['sOrd','sOld'].includes(id)){build();save()}
 else save();
}
else if(id==='rf'||id==='rt'){S.rng={p:'c',from:$('#rf').value,to:$('#rt').value};upd()}
else if(id==='goal'){S.goals[S.set.gm]=+t.value||0;upd()}
else if(/^d[wl][mv]$/.test(id)){const k=id[1],f=id[2];S.set[k][f]=f==='v'?+t.value||0:t.value;save()}});
document.addEventListener('change',e=>{const t=e.target;if(t.dataset.di){const item=S.diary.find(x=>x.id===t.closest('[data-di-id]').dataset.diId);if(item){item[t.dataset.di]=t.value;save();rDiary()}return}const f=e.target.dataset.f;if(e.target.id==='fs')build();if(e.target.closest('.fr'))flowLists();if((f==='d'||f==='g')&&e.target.closest('#ops'))build();
if((f==='h1'||f==='h2')&&e.target.closest('#ops')){calc();resortVisibleOperations();updRows();save()}});
document.addEventListener('click',e=>{const b=e.target.closest('button');if(!b)return;const D=b.dataset,i=b.id;
if(i==='applyDefaultProfile'){restoreDefaultProfilePreservingRecords();return}
if(i==='themeSave'){themeSave();return}
if(i==='themeRemove'){if(!S.set.theme.startsWith('user:'))return;const id=S.set.theme.slice(5);S.themes=S.themes.filter(x=>x.id!==id);themeApplyChoice('dark');toast('Tema personalizado excluído');return}
if(i==='diAdd'){const t=$('#diNote').value.trim(),id=uid();S.diary.unshift({id,d:$('#diDate').value||today(),g:$('#diGame').value,mood:$('#diMood').value,rule:$('#diRule').value,n:t});$('#diNote').value='';rDiary();const el=[...document.querySelectorAll('#diaryHistory .diary-entry')].find(e=>e.dataset.diId===id);animateJustCreated(el);save();toast('Registro salvo no diário');return}
if(i==='diClear'){$('#diFilter').value='all';rDiary();return}
if('diDel' in D){return arm(b,()=>{const el=b.closest('[data-di-id]'),id=el?.dataset.diId;animateRemoval(el,()=>{S.diary=S.diary.filter(x=>x.id!==id);rDiary();save()})})}
if(i==='sbt'){
 if(navCanAutoHide()){
  navHide(true);  // closes by the SAME transform used by hover auto-hide
 } else if(['side','right'].includes(S.set.lay)){
  S.set.sb=S.set.sb?0:1;
  $('#side').classList.toggle('c',!!S.set.sb);
  $('#sbt').setAttribute('aria-expanded',String(!S.set.sb));
  save();
  setTimeout(()=>{Object.values(CH).forEach(c=>c.resize());navUpdate(true)},350);
 } else {
  navHide(true);
 }
 return;
}
if(i==='ex'||i==='co'){progressDepth=Math.max(0,Math.min(4,progressDepth+(i==='ex'?1:-1)));applyTreeDepth();return}
if(i==='od'){S.set.ord=S.set.ord==='asc'?'desc':'asc';build();save();return}
if(i==='cprev'||i==='cnext'){shiftM(i==='cnext'?1:-1);return}
if(i==='ctoday'){CM=today().slice(0,7);rCal();return}
if('efx' in D){e.preventDefault();const panel=b.parentElement.nextElementSibling;panel.hidden=!panel.hidden;b.setAttribute('aria-expanded',String(!panel.hidden));return}
if(D.efa!==undefined){Object.values(S.set.fx.ef).forEach(e=>e.on=+D.efa);efList();applyFx();save();return}
if('efr' in D){S.set.fx.ef=EF0();efList();eventSettingsSync();applyFx();save();return}
if(D.fp){const q=prange(D.fp,{});S.fl.from=q.from;S.fl.to=q.to;ctl();flowLists();upd();return}
if(i==='previewCreate'||i==='previewDelete'){previewMotion(i==='previewCreate'?'create':'delete');return}
if(i==='repc'){const e=$('#rep');e.select();let ok=false;try{ok=document.execCommand('copy')}catch(x){}$('#repm').textContent=ok?'Copiado!':'Selecione o texto e copie (Ctrl+C).';return}
if(D.ad){addOp(D.ad);return}
if('tmt' in D){const el=b.closest('.op'),tm=el.querySelector('.tm'),id=el.dataset.id;tm.hidden=!tm.hidden;tm.hidden?TMO.delete(id):TMO.add(id);return}
if('tm' in D){const el=b.closest('.op'),o=S.ops.find(x=>x.id===el.dataset.id);if(o.run){o.el=dur(o);o.run=0;o.h2=hm()}else{o.el=dur(o)||0;o.h1=o.h1||hm();o.h2='';o.run=Date.now()}el.querySelector('[data-f=h1]').value=o.h1;el.querySelector('[data-f=h2]').value=o.h2;upd();resortVisibleOperations();return}
if('sp' in D){const e=b.closest('.op').querySelector('.split');e.hidden=!e.hidden;return}
if('spa' in D){
 const el=b.closest('.op'),o=S.ops.find(x=>x.id===el.dataset.id);
 if(!o||o.splitOf||o.splitSource)return;
 const N=Math.max(2,Math.min(12,Math.floor(+el.querySelector('.spn').value)||3));
 const oldGroups=opsGroupKeys();
 const i=S.ops.indexOf(o);
 ['w','l'].forEach(k=>o[k].v=+(o[k].v/N).toFixed(2)); // Mantém as metas proporcionais da divisão original.
 o.splitSource=true; // Evita divisões duplicadas acidentais.
 const children=Array.from({length:N-1},(_,k)=>({
  ...structuredClone(o),id:uid(),splitOf:o.id,splitIndex:k+1,splitSource:false,
  b:'',f:'',n:'',h1:'',h2:'',ps:'',pd:0,run:0,el:0
 }));
 S.ops.splice(i+1,0,...children);
 // A primeira mantém seu horário; as demais ficam totalmente livres.
 OPEN.add(o.id);children.forEach(x=>OPEN.add(x.id));
 toast(`${N} sessões criadas. Defina os horários das próximas sessões.`);
 upd();build();animateNewOpBatch(children.map(x=>x.id),oldGroups);return;
} 
if(D.wadd){const ct=D.wadd,k=$('#wk-'+ct).value,w={id:uid(),k,c:{...WK[k].d}};S.wg[ct].push(w);const host=$('#wg-'+ct);if(host){if(!host.querySelector('[data-w]'))host.innerHTML='';host.insertAdjacentHTML('beforeend',wHTML(w));wUpd(w);animateJustCreated(host.lastElementChild);if(typeof extrasUpdate==='function'&&!layoutEditing)requestAnimationFrame(()=>extrasUpdate())}else renderWG();toast('Quadro adicionado');save();return}
if('wx' in D)return arm(b,()=>{const el=b.closest('[data-w]'),id=el.dataset.w;animateRemoval(el,()=>{for(const ct in S.wg)S.wg[ct]=S.wg[ct].filter(x=>x.id!==id);if(WCH[id]){WCH[id].destroy();delete WCH[id]}el.remove();save()})});
if('wcfg' in D){b.closest('[data-w]').classList.toggle('hc');return}
if(D.t){
 const sc=$('#t-'+D.t);if(!sc)return;
 if(e.detail>0)b.blur();
 if(!sc.hidden)return;
 const previousTab=activeTab();
 rememberTabScroll(previousTab);
 if(layoutEditing)layoutEnd(true);
 // Manter a fase global das flutuações, evitando reinício no frame zero.
 syncFloatClocks(sc);
 $$('main>section').forEach(x=>{x.hidden=x!==sc;x.classList.remove('enter')});
 $$('#tabs button').forEach(x=>x.classList.toggle('on',x===b));
 $('#rng').hidden=!['geral','stats','ins'].includes(D.t);
 navUpdate(true);
 // Restaurar logo após a mudança do DOM, sem animação de scroll nem salto
 // para o topo. Uma segunda correção ocorre após renderizações pendentes.
 restoreTabScroll(D.t);
 // Renderizar as views desatualizadas UMA vez, no próximo frame. A aba e suas
 // animações contínuas ficam visíveis imediatamente, sem renderizações em série.
 if(PAGE_RENDER_REV[D.t]!==VISUAL_REV){
  if(window._pendingTabPaint)cancelAnimationFrame(window._pendingTabPaint);
  window._pendingTabPaint=requestAnimationFrame(()=>{
   window._pendingTabPaint=0;
   if(activeTab()!==D.t)return;
   refreshVisible();extrasUpdate();
   restoreTabScroll(D.t);
  });
 }else extrasUpdate();
 requestAnimationFrame(()=>restoreTabScroll(D.t));
 // Canvas local já conserva o desenho; só redimensionar se ainda não inicializado.
 sc.querySelectorAll('canvas').forEach(cv=>{
  const c=Chart.getChart?.(cv),container=cv.parentElement;
  // Dimensões lógicas estáveis: redesenhar somente quando a largura/altura
  // útil mudou desde a última renderização, sem refazer toda a página.
  if(c&&container&&container.clientWidth>0&&container.clientHeight>0&&
     (c.w!==Math.floor(container.clientWidth)||c.h!==Math.floor(container.clientHeight)))c.update();
 });
 return;
}
if(D.p)return setP(D.p);
if(D.gm!==undefined){S.set.gm=D.gm;chips();$('#goal').value=S.goals[D.gm]||'';upd();build();return}
if(D.m){const o=S.ops.find(x=>x.id===b.closest('.op').dataset.id),r=R.find(x=>x.o===o),x=o[D.m];x.v=x.m==='%'?+(r.bank*x.v/100).toFixed(2):r.bank?+(x.v/r.bank*100).toFixed(2):0;x.m=x.m==='%'?'R$':'%';b.textContent=x.m==='%'?'%':'R$';b.closest('.mc').querySelector('input').value=x.v;upd();return}
if('x' in D)return arm(b,()=>{const el=b.closest('.op'),id=el.dataset.id;animateRemoval(el,()=>{S.ops=S.ops.filter(o=>o.id!==id);OPEN.delete(id);upd();build();toast('Operação excluída')})});
if(i==='add')addOp(today());else if(i==='fclr'){S.fl.from=S.fl.to='';ctl();flowLists();upd()}
else if(i==='adep'||i==='awd'){const kind=i==='adep'?'dep':'wd',id=uid();S[kind].push({id,d:today(),t:hm(),v:0});flowLists({scrollToKind:kind,scrollToId:id});upd()}
else if(D.lx)arm(b,()=>{const el=b.closest('.fr'),id=el?.dataset.id,kind=D.lx;animateRemoval(el,()=>{S[kind]=S[kind].filter(x=>x.id!==id);flowLists();upd()})});
else if(i==='gnew'){const f=$('#gform');f.hidden=!f.hidden;$('#gname').focus()}
else if(i==='gno')$('#gform').hidden=true;
else if(i==='gok'){const id=uid();S.games.push({id,name:$('#gname').value.trim()||'Novo jogo',init:+$('#gbank').value||0});S.set.gm=id;toast('Jogo adicionado');$('#gname').value=$('#gbank').value='';$('#gform').hidden=true;all();animateNewGame(id)}
else if(i==='gdel'){if(S.games.length<2){b.textContent='Precisa de ao menos 1 jogo';return}arm(b,()=>{const id=S.set.gm,el=[...document.querySelectorAll('#games [data-gm]')].find(x=>x.dataset.gm===id)||b;animateRemoval(el,()=>{S.games=S.games.filter(g=>g.id!==id);S.ops=S.ops.filter(o=>o.g!==id);S.set.gm='all';all();toast('Jogo excluído')})})}
else if(i==='addg'){const id=uid();S.games.push({id,name:'Novo jogo',init:0});gameList();chips();upd();build();animateNewGame(id)}
else if('gx' in D){if(S.games.length<2){$('#msg').textContent='Mantenha ao menos um jogo.';return}arm(b,()=>{const el=b.closest('.grow'),id=el.dataset.id;animateRemoval(el,()=>{S.games=S.games.filter(g=>g.id!==id);S.ops=S.ops.filter(o=>o.g!==id);if(S.set.gm===id)S.set.gm='all';all()})})}
else if(i==='bkg')$('#bk').value=JSON.stringify(S);
else if(i==='bki'){try{const p=JSON.parse($('#bk').value);if(!p.ops||!p.games)throw 0;S=norm(p);renameDefaultGame(S);all();$('#msg').textContent='Backup importado.'}catch(x){$('#msg').textContent='Backup inválido.'}}
else if(i==='rst')arm(b,()=>{S=seed();all()})
else if(i==='rstEx')arm(b,()=>{const e=exData();S={...S,games:e.games,ops:e.ops,dep:e.dep,wd:[],goals:{}};S.set.gm='all';SEEN.clear();all();toast('Exemplo carregado')})
else if(i==='rstZ')arm(b,()=>{S={...S,games:[{id:'jogo1',name:'Meu jogo',init:0}],ops:[],dep:[],wd:[],goals:{}};S.set.gm='all';SEEN.clear();all();toast('Tudo zerado')})});
window.addEventListener('storage',e=>{if(e.key===KEY){load();all()}});
function toast(m){const e=document.createElement('div');e.className='toast';e.textContent=m;$('#toasts').append(e);setTimeout(()=>e.remove(),2400)}
function setP(p){const q=prange(p,{});S.rng={p,from:q.from,to:q.to};ctl();upd()}
function rRng(){$$('#rp button').forEach(b=>b.classList.toggle('on',b.dataset.p===S.rng.p));$('#rinfo').textContent=ACTR().length+' dia(s) no período'}
function shiftM(n){const [y,m]=CM.split('-').map(Number);CM=new Date(Date.UTC(y,m-1+n,1)).toISOString().slice(0,7);rCal()}
function calGoalBadge(date){const goals=(S.periodGoals||[]).filter(g=>{const v=S.set.gm==='all'||g.game==='all'||g.game===S.set.gm;if(!v)return false;const pr=periodRange(g);return pr.from<=date&&pr.to>=date});if(!goals.length)return '';const wk=goals.filter(g=>g.type==='week').length,mo=goals.filter(g=>g.type==='month').length;const parts=[];if(wk)parts.push(`<i class="wk" title="${wk} meta(s) semanal(is)">W${wk}</i>`);if(mo)parts.push(`<i class="mo" title="${mo} meta(s) mensal(is)">M${mo}</i>`);return `<div class="goal-mini" title="${goals.length} meta(s) vinculada(s) a este dia">${parts.join('')}</div>`}
function rCal(){const [y,m]=CM.split('-').map(Number),first=new Date(Date.UTC(y,m-1,1)),days=new Date(Date.UTC(y,m,0)).getUTCDate(),rows=ACT(V().filter(r=>r.o.d.startsWith(CM))),by={};rows.forEach(r=>(by[r.o.d]=by[r.o.d]||[]).push(r));
const tot=d=>sum((by[d]||[]).map(r=>r.pl)),mx=Math.max(1,...Object.keys(by).map(d=>Math.abs(tot(d))));let h=['D','S','T','Q','Q','S','S'].map(x=>`<div class="h">${x}</div>`).join('')+'<div></div>'.repeat(first.getUTCDay());
for(let d=1;d<=days;d++){const k=CM+'-'+String(d).padStart(2,'0'),has=by[k],t=tot(k),g=calGoalBadge(k);h+=`<div class="cd${k===today()?' today':''}"${has?` data-d="${k}" style="--d:${d};background:${t>=0?'rgba(46,204,113,':'rgba(229,57,53,'}${(.15+.55*Math.abs(t)/mx).toFixed(2)})"`:` style="--d:${d}"`}><small>${d}</small>${g}${has?`<b class="${cls(t)}">${money(t)}</b>`:''}</div>`}
$('#cgrid').innerHTML=h;$('#cmt').textContent=first.toLocaleDateString('pt-BR',{month:'long',year:'numeric',timeZone:'UTC'});const t=ST(rows);
$('#cstat').innerHTML=card('Lucro do mês',money(t.tot),cls(t.tot))+card('Dias operados',t.n,'',`${t.nw} win · ${t.nl} loss`)+card('Melhor dia',money(t.best),'pos')+card('Pior dia',money(t.worst),'neg');const host=$('#calGoals');let legend=$('#t-cal .goal-legend');if(!legend&&host){host.insertAdjacentHTML('beforebegin','<div class="goal-legend"><span class="lg"><i class="dot w"></i> Meta semanal</span><span class="lg"><i class="dot m"></i> Meta mensal</span></div>');legend=$('#t-cal .goal-legend')}renderCalGoals()}
function goOps(d){const rs=R.filter(r=>r.o.d===d);rs.forEach(r=>OPEN.add(r.o.id));['y'+d.slice(0,4),'m'+d.slice(0,7),'d'+d].forEach(k=>COL.delete(k));$('#tabs [data-t=ops]').click();build();const el=rs[0]&&$(`.op[data-id="${rs[0].o.id}"]`);el&&setTimeout(()=>el.scrollIntoView({behavior:'smooth',block:'center'}),200)}
function rAlert(){const s=ST(ACT()),x=V().filter(r=>r.o.d===today()).pop(),a=[];
if(x&&x.st==='loss')a.push(['l','🛑 Stop Loss de hoje atingido. Encerre por hoje.']);if(x&&x.st==='win')a.push(['w','🚀 Stop Win de hoje atingido. Considere garantir o lucro.']);
if(S.set.maxL&&s.cur<0&&-s.cur>=S.set.maxL)a.push(['l',`⚠️ ${-s.cur} dias seguidos no prejuízo. Faça uma pausa e revise a estratégia.`]);
$('#alerts').innerHTML=a.map(m=>`<div class="alert ${m[0]}">${m[1]}</div>`).join('');$('#alerts').hidden=!a.length}
document.addEventListener('click',e=>{const t=e.target;if(t.closest('button,input,select,label'))return;const sm=t.closest('[data-tg]');
if(sm){const op=sm.closest('.op'),id=op.dataset.id;op.classList.toggle('open');OPEN.has(id)?OPEN.delete(id):OPEN.add(id);
 if(op.classList.contains('open')&&EF('tiles')){op.classList.add('reveal-tiles');setTimeout(()=>{if(op.isConnected)op.classList.remove('reveal-tiles')},340)}else op.classList.remove('reveal-tiles');return}
const mh=t.closest('[data-mo]');if(mh){const k=mh.dataset.mo;mh.parentElement.classList.toggle('col');COL.has(k)?COL.delete(k):COL.add(k);return}
const cd=t.closest('.cd[data-d]');if(cd)goOps(cd.dataset.d)});
const EF=k=>S.set.anim!=='off'&&!!S.set.fx.ef[k]&&!!S.set.fx.ef[k].on,EP=(k,p)=>S.set.fx.ef[k][p];
const EFR=[['spot','Luz que segue o mouse','Mouse','pw,sz',{on:1,pw:1,sz:3}],['ring','Anel que segue o mouse','Mouse','pw,sz,sp',{}],['trail','Rastro do mouse','Mouse','pw,sz,sp,ty',{ty:'dot'}],['magnet','Botões atraídos pelo mouse','Mouse','pw',{}],['tilt','Cards inclinando em 3D','Mouse','pw,sz,sp,ty',{ty:'out'}],['cclick','Faíscas ao clicar','Mouse','pw,sz',{}],
['ent','Entrada de novos elementos','Páginas','pw,sz,sp,ty',{on:1,ty:'rise',dir:'left'}],['exit','Exclusão de elementos','Páginas','pw,sz,sp,ty',{on:1,ty:'implode',dir:'left',particles:'spark',pSpeed:5,pSize:5,pRange:5}],['calpop','Dias do calendário surgindo','Páginas','pw',{on:1}],
['tiles','Quadradinhos surgem ao abrir a operação','Operações','pw,sp',{on:1}],['pulse','Ponto pulsando (operação ao vivo)','Operações','sz,sp',{on:1}],['bar','Barras de progresso mais vivas','Operações','pw',{on:1}],
['shim','Luz percorrendo as barras de progresso','Operações','pw,sz,sp',{on:1}],
['conf','Confete ao bater o Stop Win (Enter)','Eventos','pw,sz,ty',{on:1,ty:'rect'}],['shake','Tremor ao bater o Stop Loss (Enter)','Eventos','pw,sp',{on:1}],
['hov','Cards sobem ao passar o mouse','Cards','pw',{on:1}],['float','Cards flutuando','Cards','pw,sp',{on:1}],['breath','Cards respirando (brilho)','Cards','pw,sz,sp',{}],['bpulse','Borda pulsando nos painéis','Cards','pw,sp',{}],
['neon','Números com neon','Números','pw,sz',{}],['cnt','Números contando','Números','sp',{on:1}],['flash','Destaque quando o número muda','Números','pw,sp',{on:1}],
['rip','Onda ao clicar nos botões','Botões','pw,sz,sp',{on:1}],['press','Botões afundando ao clicar','Botões','pw',{on:1}],

// Efeitos extras: cada um possui força, tamanho e velocidade independentes.
['cursorDot','Ponto luminoso no ponteiro','Mouse extra','pw,sz,sp',{}],
['cursorHalo','Halo de luz adicional','Mouse extra','pw,sz,sp',{}],
['cursorOrbit','Satélites ao redor do cursor','Mouse extra','pw,sz,sp',{}],
['cursorCross','Mira discreta no ponteiro','Mouse extra','pw,sz,sp',{}],
['cursorPulse','Pulso luminoso do ponteiro','Mouse extra','pw,sz,sp',{}],
['cursorComet','Cometa ao movimentar','Mouse extra','pw,sz,sp',{}],
['cursorDust','Poeira suave ao movimentar','Mouse extra','pw,sz,sp',{}],
['cursorSpark','Faíscas no movimento','Mouse extra','pw,sz,sp',{}],
['cursorGrid','Grade iluminada perto do mouse','Mouse extra','pw,sz,sp',{}],
['cursorBeam','Reflexo local nos cards','Mouse extra','pw,sz,sp',{}],
['clickRings','Anéis de luz ao clicar','Cliques','pw,sz,sp',{}],
['clickStars','Estrelinhas ao clicar','Cliques','pw,sz,sp',{}],
['clickCard','Pulso ao clicar em card','Cliques','pw,sz,sp',{}],
['btnGlow','Aura ao passar em botão','Botões extra','pw,sz,sp',{}],
['btnGrow','Botão cresce no hover','Botões extra','pw,sz,sp',{}],
['btnFloat','Botões flutuantes','Botões extra','pw,sz,sp',{}],
['btnWiggle','Botão balança no hover','Botões extra','pw,sz,sp',{}],
['btnBorder','Borda animada em botões','Botões extra','pw,sz,sp',{}],
['btnShadow','Sombra expansiva do botão','Botões extra','pw,sz,sp',{}],
['cardZoom','Zoom suave nos cards','Cards extra','pw,sz,sp',{}],
['cardEdge','Borda cintilante nos cards','Cards extra','pw,sz,sp',{}],
['cardSpot','Foco luminoso nos cards','Cards extra','pw,sz,sp',{}],
['cardHoverPulse','Pulso dos cards no hover','Cards extra','pw,sz,sp',{}],
['boxFloat','Painéis flutuantes','Painéis','pw,sz,sp',{}],
['boxHoverGlow','Iluminação nos painéis','Painéis','pw,sz,sp',{}],
['tabGlow','Luz na aba ativa','Menu extra','pw,sz,sp',{}],
['tabUnderline','Linha animada nas abas','Menu extra','pw,sz,sp',{}],
['tabNudge','Deslize dos itens do menu','Menu extra','pw,sz,sp',{}],
['tabSpin','Giro dos ícones do menu','Menu extra','pw,sz,sp',{}],
['numberHover','Números aumentam no hover','Números extra','pw,sz,sp',{}],
['numberGlow','Números brilham lentamente','Números extra','pw,sz,sp',{}],
['flowHover','Realce de lançamentos ao passar','Fluxo de caixa','pw,sz,sp',{}],

// Novos efeitos EXCLUSIVOS para os indicadores de resumo.
['sumLift','Elevação suave ao passar o mouse','Indicadores de resumo','pw,sz,sp',{}],
['sumScale','Ampliação discreta ao passar o mouse','Indicadores de resumo','pw,sz,sp',{}],
['sumBorder','Borda superior pulsante','Indicadores de resumo','pw,sz,sp',{}],
['sumHalo','Aura suave periódica','Indicadores de resumo','pw,sz,sp',{}],
['sumTint','Cor de fundo respirando','Indicadores de resumo','pw,sz,sp',{}],
['sumValue','Valores flutuando suavemente','Indicadores de resumo','pw,sz,sp',{}],
['sumTilt','Inclinação 3D que segue o mouse','Indicadores de resumo','pw,sz,sp,ty',{ty:'in'}],

['sidei','Ícones do menu animados','Menu','pw,sp',{on:1}],['h1','Título com cores correndo','Títulos','sp',{}],['phic','Ícone do título flutuando','Títulos','pw,sp',{}],['drift','Fundo em movimento lento','Fundo','sp',{}],['chart','Animação dos gráficos','Gráficos','sp',{on:1}]];
const EF0=()=>Object.fromEntries(EFR.map(e=>[e[0],{on:0,pw:5,sz:5,sp:5,...e[4]}]));
const fxCfg=()=>({on:S.set.fx.on&&S.set.anim!=='off',type:S.set.fx.type,pw:S.set.fx.pw,sp:S.set.fx.sp,sz:S.set.fx.sz}),fxCols=()=>S.set.fx.cols;
const CHA=()=>false; // Desenho instantâneo; sem filas de animação ou atraso visual.
const FX_CLOCK_ORIGIN=performance.now();
function syncFloatClocks(section){
 if(!section)return;
 const now=performance.now()-FX_CLOCK_ORIGIN;
 const durationCard=25000/Math.max(1,EP('float','sp'));
 const durationBox=27000/Math.max(1,EP('boxFloat','sp'));
 // Delay negativo é calculado ANTES de mostrar a aba. Nada inicia atrasado.
 section.style.setProperty('--sync-card',`${-((now+1700)%durationCard)}ms`);
 section.style.setProperty('--sync-panel',`${-((now+2200)%durationBox)}ms`);
 section.style.setProperty('--sync-btn',`${-((now+1400)%(32000/Math.max(1,EP('btnFloat','sp'))))}ms`);
 section.style.setProperty('--sync-sweep',`${-((now+3500)%7000)}ms`);
 section.style.setProperty('--sync-title',`${-((now+700)%4500)}ms`);
 // O deslocamento de fase herda do contêiner: não atualizar centenas de filhos a cada entrada.
}
/*ENG*/
const FX={x:null,w:0,h:0,ps:[],cf:[],tr:[],raf:0,l:0,t:0,lastDraw:0,seedType:null};
const AUR_SPRITES=new Map();
function aurSprite(color){
 if(AUR_SPRITES.has(color))return AUR_SPRITES.get(color);
 const c=document.createElement('canvas');c.width=c.height=240;
 const z=c.getContext('2d'),g=z.createRadialGradient(120,120,0,120,120,120);
 g.addColorStop(0,color);g.addColorStop(1,'transparent');z.fillStyle=g;z.fillRect(0,0,240,240);
 if(AUR_SPRITES.size>12)AUR_SPRITES.clear();AUR_SPRITES.set(color,c);return c;
}

function perfCanvasSize(){
 if(!FX.c||!FX.x)return;
 const mode=S?.set?.perf||'smooth',d=Math.min(mode==='max'?1.5:mode==='save'?.8:1,devicePixelRatio||1);
 const oldW=FX.w,oldH=FX.h,newW=Math.max(1,innerWidth),newH=Math.max(1,innerHeight);
 const canvasW=Math.round(newW*d),canvasH=Math.round(newH*d);
 const dimensionsChanged=FX.c.width!==canvasW||FX.c.height!==canvasH;
 FX.w=newW;FX.h=newH;
 if(oldW>0&&oldH>0&&(oldW!==newW||oldH!==newH)){
  // Mudanças da barra do navegador/rotação NÃO sorteiam partículas novamente.
  const sx=newW/oldW,sy=newH/oldH;
  FX.ps.forEach(p=>{p.x*=sx;p.y*=sy});
  FX.cf.forEach(p=>{p.x*=sx;p.y*=sy});
  FX.tr.forEach(p=>{p.x*=sx;p.y*=sy});
 }
 if(dimensionsChanged){if(FX.c.width!==canvasW)FX.c.width=canvasW;if(FX.c.height!==canvasH)FX.c.height=canvasH}
 FX.x.setTransform(d,0,0,d,0,0);
 if(!FX.ps.length)fxSeed(true);
}
function fxInit(){
 const c=FX.c=document.getElementById('fx');
 // A superfície sincronizada evita tearing/piscadas durante movimentos rápidos.
 FX.x=c.getContext('2d',{alpha:true});
 let rsTimer=0;addEventListener('resize',()=>{clearTimeout(rsTimer);rsTimer=setTimeout(perfCanvasSize,90)},{passive:true});
 perfCanvasSize();
}
function perfSync(){const e=document.getElementById('perfFps');if(e)e.hidden=!S?.set?.fps;}

let PERF_FPS_RAF=0,PERF_FPS_LAST=0,PERF_FPS_COUNT=0,PERF_FPS_SAMPLE=0;
function samplePerfFps(t){PERF_FPS_RAF=0;
 if(!S?.set?.fps||document.hidden){PERF_FPS_LAST=0;PERF_FPS_COUNT=0;return}
 if(!PERF_FPS_LAST)PERF_FPS_LAST=t;
 PERF_FPS_COUNT++;
 if(t-PERF_FPS_LAST>=1000){const rate=Math.round(PERF_FPS_COUNT*1000/(t-PERF_FPS_LAST));const el=$('#perfFps');if(el)el.textContent=rate+' FPS';PERF_FPS_LAST=t;PERF_FPS_COUNT=0}
 PERF_FPS_RAF=requestAnimationFrame(samplePerfFps);
}
const _perfSync=perfSync;
perfSync=function(){_perfSync();if(S?.set?.fps&&!PERF_FPS_RAF&&!document.hidden){PERF_FPS_RAF=requestAnimationFrame(samplePerfFps)}else if(!S?.set?.fps&&PERF_FPS_RAF){cancelAnimationFrame(PERF_FPS_RAF);PERF_FPS_RAF=0}};
addEventListener('visibilitychange',()=>{if(!document.hidden)perfSync()});
function fxSeed(force=false){
 const rand=Math.random,f=fxCfg();
 const n=Math.min(50,Math.round(f.pw*(FX.w<700?2:4)*(f.type==='star'||f.type==='rain'?1.3:1)));
 const make=()=>({x:rand()*FX.w,y:rand()*FX.h,r:rand()*2.5+1.5,v:rand()*.6+.4,p:rand()*6.283,c:Math.floor(rand()*3),d:Math.floor(rand()*10),digitTime:rand()*2});
 if(force||FX.seedType!==f.type){FX.ps=Array.from({length:n},make);FX.seedType=f.type;return}
 // Ajustar a densidade sem teletransportar as bolinhas que já estão na tela.
 while(FX.ps.length<n)FX.ps.push(make());
 if(FX.ps.length>n)FX.ps.length=n;
}
function fxKick(){if(document.hidden)return;if(!FX.raf){FX.l=performance.now();FX.raf=requestAnimationFrame(fxLoop)}}
document.addEventListener('visibilitychange',()=>{if(document.hidden){if(FX.raf)cancelAnimationFrame(FX.raf);FX.raf=0}else{FX.l=performance.now();if(fxCfg().on||FX.cf.length||FX.tr.length)fxKick()}});
function fxStart(){
 if(!FX.x)return;
 const cfg=fxCfg();
 if(!cfg.on){
  if(FX.cf.length||FX.tr.length){fxKick();return}
  if(FX.raf)cancelAnimationFrame(FX.raf);
  FX.raf=0;FX.lastDraw=0;FX.x.clearRect(0,0,FX.w,FX.h);return;
 }
 // Alterações de cor, tamanho, força e velocidade nunca reiniciam o relógio.
 fxSeed(FX.seedType!==cfg.type);
 fxKick();
}
function fxBurst(x,y,n,sc,ty,speed=5){const c=[...fxCols(),'#ffd54f','#ef5350'];for(let i=0;i<n;i++){const a=Math.random()*6.283,v=(150+Math.random()*350)*sc*(speed/5);FX.cf.push({x,y,vx:Math.cos(a)*v,vy:Math.sin(a)*v-200*sc,r:Math.random()*6,s:(3+Math.random()*4)*Math.max(.6,sc),c:c[i%c.length],l:(1.6+Math.random())*(5/speed),ty:ty||'rect'})}fxKick()}
function fxTrail(x,y,o){FX.tr.push({x,y,l:1,q:Math.random()*6.28,...o});if(FX.tr.length>70)FX.tr.shift();fxKick()}
function fxLoop(now){const f=fxCfg();if(!f.on&&!FX.cf.length&&!FX.tr.length){FX.raf=0;FX.x.clearRect(0,0,FX.w,FX.h);return}
if(document.hidden){FX.l=now;FX.raf=0;return}
 // Em Fluidez e Qualidade máxima, renderizar em TODOS os quadros do monitor;
 // limitar a 100 FPS causava cadência irregular (ex.: 144 Hz -> 72 FPS).
 const mode=S?.set?.perf||'smooth';
 if(mode==='save'&&FX.cf.length===0&&now-FX.lastDraw<1000/45-1){FX.raf=requestAnimationFrame(fxLoop);return}
 FX.lastDraw=now;
 // Após uma pausa, limitar o deslocamento de um único quadro impede saltos.
 const dt=Math.min(.04,Math.max(0,(now-FX.l)/1000));FX.l=now;FX.t+=dt;const x=FX.x,W=FX.w,H=FX.h,pw=f.pw,z=f.sz/5,sp=(.4+pw*.15)*(f.sp/5),t=FX.t,col=fxCols(),ty=f.type;x.clearRect(0,0,W,H);
if(f.on){
 if(ty==='snow'||ty==='meteor'||ty==='firefly'||ty==='bokeh'){
  FX.ps.forEach(p=>{
   const size=(ty==='bokeh'?6:ty==='firefly'?2.4:ty==='meteor'?2.5:1.25)*p.r*z;
   if(ty==='meteor'){
    p.x+=p.v*sp*50*dt;p.y+=p.v*sp*37*dt;
    if(p.x>W+40||p.y>H+40){p.x=-40;p.y=Math.random()*H}
    x.strokeStyle=col[p.c];x.lineWidth=size;x.globalAlpha=.07+pw*.026;
    x.beginPath();x.moveTo(p.x,p.y);x.lineTo(p.x-p.v*30*z,p.y-p.v*23*z);x.stroke();
   }else{
    p.y+=(ty==='snow'?1:ty==='bokeh'?-1:.15)*p.v*sp*15*dt;
    p.x+=Math.sin(t*.6+p.p)*p.v*4*dt;
    if(p.y>H+25)p.y=-20;if(p.y< -25)p.y=H+20;
    x.fillStyle=ty==='snow'?'#f4faff':col[p.c];
    x.globalAlpha=(.08+pw*.024)*(ty==='firefly'?.3+.7*Math.abs(Math.sin(t*sp+p.p)):1);
    x.beginPath();x.arc(p.x,p.y,size,0,Math.PI*2);x.fill();
   }
  });
 }else if(ty==='const'){
  FX.ps.forEach((p,i)=>{p.x+=Math.sin(t*.2+p.p)*7.2*sp*dt;p.y+=Math.cos(t*.2+p.p)*6*sp*dt;
   x.fillStyle=col[p.c];x.globalAlpha=.1+pw*.033;x.beginPath();x.arc(p.x,p.y,p.r*z*.65,0,Math.PI*2);x.fill();
   FX.ps.slice(i+1,i+8).forEach(q=>{const d=Math.hypot(p.x-q.x,p.y-q.y);if(d<190*z){x.strokeStyle=col[p.c];x.globalAlpha=(.05+pw*.016)*(1-d/(200*z));x.lineWidth=.7;x.beginPath();x.moveTo(p.x,p.y);x.lineTo(q.x,q.y);x.stroke()}});
  });
 }else if(ty==='grid'){
  const step=Math.max(32,78*z);x.strokeStyle=col[0];x.lineWidth=.65;x.globalAlpha=.035+pw*.011;
  for(let px=(t*sp*5)%step;px<W;px+=step){x.beginPath();x.moveTo(px,0);x.lineTo(px,H);x.stroke()}
  for(let py=(t*sp*9)%step;py<H;py+=step){x.beginPath();x.moveTo(0,py);x.lineTo(W,py);x.stroke()}
 }else if(ty==='orbit'||ty==='rings'||ty==='radar'){
  const cx=W*.5,cy=H*.53,max=Math.min(W,H)*.48*z;
  for(let k=0;k<5;k++){
   const radius=ty==='rings'?((t*sp*19+k*max/4)%max):max*(.28+k*.16);
   x.strokeStyle=col[k%3];x.lineWidth=ty==='rings'?2:1;
   x.globalAlpha=(.045+pw*.012)*(ty==='rings'?(1-radius/max):1);
   x.beginPath();x.arc(cx,cy,radius,0,ty==='orbit'?Math.PI*1.3:Math.PI*2);x.stroke();
   if(ty==='orbit'){
    const a=t*sp*.23*(k%2?-1:1)+k;
    x.fillStyle=col[k%3];x.globalAlpha=.15+pw*.036;
    x.beginPath();x.arc(cx+radius*Math.cos(a),cy+radius*Math.sin(a),Math.max(1,z*2.7),0,Math.PI*2);x.fill();
   }
  }
  if(ty==='radar'){
   x.strokeStyle=col[0];x.globalAlpha=.1+pw*.024;x.lineWidth=2*z;
   x.beginPath();x.moveTo(cx,cy);x.lineTo(cx+max*Math.cos(t*sp*.6),cy+max*Math.sin(t*sp*.6));x.stroke();
  }
 }else if(ty==='wave'){for(let k=0;k<3;k++){x.beginPath();x.strokeStyle=col[k];x.globalAlpha=.1+pw*.03;x.lineWidth=2*z;for(let i=0;i<=W;i+=8){const y=H*(.62+k*.12)+Math.sin(i/(140+k*60)+t*sp*(1+k*.3))*(8+pw*5)*z;i?x.lineTo(i,y):x.moveTo(i,y)}x.stroke()}}
else if(ty==='aur'){for(let k=0;k<3;k++){const cx=W*(.5+.4*Math.sin(t*sp*.2+k*2.1)),cy=H*(.45+.3*Math.cos(t*sp*.17+k*1.7)),r=Math.max(W,H)*.45*z;x.globalAlpha=.04+pw*.022;x.drawImage(aurSprite(col[k]),cx-r,cy-r,r*2,r*2)}}
else FX.ps.forEach(p=>{if(ty==='star'){x.globalAlpha=(.2+.8*Math.abs(Math.sin(t*(.6+p.v)*sp+p.p)))*(.15+pw*.07);x.fillStyle=col[p.c];x.beginPath();x.arc(p.x,p.y,p.r*.6*z,0,6.283);x.fill()}
else if(ty==='rain'){p.y+=p.v*sp*60*dt;if(p.y>H+10){p.y=-10;p.x=Math.random()*W}p.digitTime=(p.digitTime||0)+dt;if(p.digitTime>1.4){p.digitTime-=1.4;p.d=Math.floor(Math.random()*10)}x.globalAlpha=.1+pw*.04;x.fillStyle=col[p.c];x.font=(14*z)+'px monospace';x.fillText(p.d,p.x,p.y)}
else if(ty==='bub'){p.y-=p.v*sp*25*dt;p.x+=Math.sin(t+p.p)*10*dt;if(p.y<-30)p.y=H+30;x.globalAlpha=.1+pw*.04;x.strokeStyle=col[p.c];x.lineWidth=1.5;x.beginPath();x.arc(p.x,p.y,p.r*4*z,0,6.283);x.stroke()}
else{p.y-=p.v*sp*30*(ty==='chip'?-.6:1)*dt;p.x+=Math.sin(t*.6+p.p)*12*dt;if(p.y<-20)p.y=H+20;if(p.y>H+20)p.y=-20;
if(ty==='part'){x.globalAlpha=.12+pw*.035;x.fillStyle=col[p.c];x.beginPath();x.arc(p.x,p.y,p.r*z,0,6.283);x.fill()}else{x.globalAlpha=.1+pw*.04;x.font=(p.r*7*z)+'px serif';x.fillText('🪙',p.x,p.y)}}})}
FX.cf=FX.cf.filter(p=>(p.l-=dt)>0);FX.cf.forEach(p=>{p.vy+=700*dt;p.x+=p.vx*dt;p.y+=p.vy*dt;p.r+=dt*8;x.globalAlpha=Math.min(1,p.l);x.fillStyle=p.c;
if(p.ty==='circle'){x.beginPath();x.arc(p.x,p.y,p.s/1.5,0,6.283);x.fill()}else if(p.ty==='coin'){x.font=(p.s*3)+'px serif';x.fillText('🪙',p.x,p.y)}else{x.save();x.translate(p.x,p.y);x.rotate(p.r);x.fillRect(-p.s,-p.s/2,p.s*2,p.s);x.restore()}});
FX.tr=FX.tr.filter(p=>(p.l-=dt*p.d)>0);FX.tr.forEach(p=>{x.globalAlpha=p.l*p.a;x.fillStyle=x.strokeStyle=col[0];if(p.ty==='star'){x.font=(p.r*3*p.l+5)+'px serif';x.fillText('✦',p.x,p.y)}else if(p.ty==='spark'){x.lineWidth=1.6;x.beginPath();x.moveTo(p.x,p.y);x.lineTo(p.x+Math.cos(p.q)*p.r*4,p.y+Math.sin(p.q)*p.r*4);x.stroke()}else{x.beginPath();x.arc(p.x,p.y,Math.max(.5,p.r*p.l),0,6.283);x.fill()}});
x.globalAlpha=1;FX.raf=requestAnimationFrame(fxLoop)}
/*ENDENG*/
function applyFx(){const f=S.set.fx,r=document.documentElement,st=r.style;if(!EF('tilt')&&!EF('sumTilt'))clearTilt();st.setProperty('--fxg',f.glow);EFR.forEach(([k])=>['pw','sz','sp'].forEach(p=>st.setProperty(`--${k}-${p}`,f.ef[k][p])));r.dataset.ef=EFR.filter(e=>EF(e[0])).map(e=>e[0]).join(' ');r.dataset.tr=S.set.tr;r.dataset.lay=S.set.lay;r.dataset.sideSkin=S.set.sideSkin||'soft';r.dataset.siteView=S.set.siteView||'classic';r.setAttribute('data-siteview',S.set.siteView||'classic');
const key=JSON.stringify([f.on,f.type,f.pw,f.sp,f.sz,S.set.anim]);
if(FX._key!==key){FX._key=key;fxStart()}
}
const PL={pw:'Força',sz:'Profundidade / tamanho',sp:'Velocidade',pSpeed:'Velocidade das partículas',pSize:'Tamanho das partículas',pRange:'Alcance das partículas'},TY={ent:[['rise','Subida suave'],['fade','Aparecimento gradual'],['left','Deslizar da esquerda'],['right','Deslizar da direita'],['zoom','Zoom elástico'],['flip','Giro 3D suave'],['cube','Cubo 3D'],['door','Porta 3D'],['fold','Dobrar 3D'],['portal','Portal 3D'],['spiral','Espiral 3D'],['flip3d','Virada completa 3D'],['pop3d','Salto elástico 3D'],['slide3d','Projeção 3D direcional']],exit:[['implode','Implosão 3D'],['dust','Dissolver em partículas'],['shrink','Encolher'],['fold','Dobrar 3D'],['slide','Deslizar'],['vortex','Vórtice 3D'],['fade','Desaparecimento suave']],trail:[['dot','Pontos'],['star','Estrelas'],['spark','Faíscas']],conf:[['rect','Confete'],['circle','Bolinhas'],['coin','Moedas 🪙']],tilt:[['out','Projetar para fora'],['in','Virar para dentro']],sumTilt:[['in','Virar para dentro'],['out','Projetar para fora']]};
/* Manter os painéis abertos mesmo quando outras preferências mudam.
   Reconstruir o HTML aqui destruía o estado nativo dos <details>, a abertura
   do botão ⚙ e o controle em uso (inclusive após eventos de outra aba). */
function efList(){
 const host=$('#efl');
 if(!host)return;
 const group=x=>({'Mouse extra':'Mouse','Cliques':'Mouse','Botões extra':'Botões','Cards extra':'Cards','Menu extra':'Menu','Números extra':'Números'}[x]||x);
 const gs=[...new Set(EFR.map(e=>group(e[2])))];
 const originalGroups=new Set([...host.querySelectorAll('.fx-group[open]')].map(e=>e.dataset.fxGroup));
 const originalPanels=new Set([...host.querySelectorAll('.efp:not([hidden])')].map(e=>e.dataset.effect));
 const intact=host.querySelectorAll('input[data-e]').length===EFR.length && host.querySelectorAll('.fx-group').length===gs.length;
 if(!intact){
  host.innerHTML=gs.map(g=>`<details class="fx-group" data-fx-group="${g}"><summary>${g} · ${EFR.filter(e=>group(e[2])===g).length} efeitos</summary>`+EFR.filter(e=>group(e[2])===g).map(([k,n,,ps])=>{
   const x=S.set.fx.ef[k],types=ps.includes('ty')&&TY[k];
   return `<div class="efr"><label class="chk"><input type="checkbox" data-e="${k}"${x.on?' checked':''}> ${n}</label><button type="button" class="x" data-efx aria-controls="fxPanel-${k}" aria-expanded="false" title="Ajustar força, tamanho e velocidade">⚙</button></div><div class="efp" id="fxPanel-${k}" data-effect="${k}" hidden>${(k==='exit'?['pw','sz','sp','pSpeed','pSize','pRange']:['pw','sz','sp']).map(q=>`<label>${PL[q]} <input type="range" min="1" max="10" data-ep="${k}:${q}" value="${x[q]}"> <b>${x[q]}</b></label>`).join('')}${types?`<label>Estilo <select data-ep="${k}:ty">${TY[k].map(([v,t])=>`<option value="${v}"${x.ty===v?' selected':''}>${t}</option>`).join('')}</select></label>`:''}</div>`}).join('')+'</details>').join('');
  host.querySelectorAll('.fx-group').forEach(el=>{el.open=originalGroups.has(el.dataset.fxGroup)});
  host.querySelectorAll('.efp').forEach(el=>{el.hidden=!originalPanels.has(el.dataset.effect)});
 }
 // Atualizar apenas os valores. Não remover elementos nem perder foco,
 // scroll, sliders em arraste ou expansão de grupos e subpainéis.
 EFR.forEach(([k])=>{
  const x=S.set.fx.ef[k],checkbox=host.querySelector(`[data-e="${k}"]`);
  if(checkbox)checkbox.checked=!!x.on;
  for(const q of ['pw','sz','sp','ty','pSpeed','pSize','pRange']){
   const control=host.querySelector(`[data-ep="${k}:${q}"]`);
   if(!control)continue;
   if(document.activeElement!==control)control.value=x[q];
   if(q!=='ty'&&control.nextElementSibling)control.nextElementSibling.textContent=control.value;
  }
 });
 host.querySelectorAll('[data-efx]').forEach(b=>{
  b.setAttribute('aria-expanded',String(!b.parentElement.nextElementSibling.hidden));
 });
}

/* Valores são renderizados diretamente. Não redefinir innerHTML: animações de contagem
   alteravam o texto enquanto o cálculo já tinha sido atualizado, causando números incorretos
   e reinicialização aparente dos cards. */
let MX=0,MY=0,PQ=0,LB=null,LT=0,LT2=0,FRAME_CARD=null,FRAME_BUTTON=null;
const ring=document.createElement('div');ring.id='ring';document.body.append(ring);let pointerReady=false;
/* A rotação individual de CSS não disputa o transform usado pelos outros efeitos.
   O mesmo cartão segue o cursor, e a volta ao centro é feita pela transição de rotate. */
let TILT_ACTIVE=null,TILT_RECT=null;
const REDUCED_MOTION=matchMedia('(prefers-reduced-motion: reduce)');
const SUMMARY_CARD_SELECTOR='#opSum > .card,#kpi > .card,#perf > .card,#cstat > .card,#fcards > .card,#gcards > .card,#insc > .card,#riskCards > .card,#gdisc > .card';
function clearTilt(card=TILT_ACTIVE){
 if(!card)return;
 if(card.style.rotate!=='0 1 0 0deg')card.style.rotate='0 1 0 0deg';
 card.classList.remove('tilt-active');
 if(TILT_ACTIVE===card){TILT_ACTIVE=null;TILT_RECT=null}
}
function update3DTilt(card,x,y){
 const cfg=card?.matches?.(SUMMARY_CARD_SELECTOR)&&EF('sumTilt')?'sumTilt':EF('tilt')?'tilt':null;
 if(!cfg || document.documentElement.dataset.layoutEdit==='1' || REDUCED_MOTION.matches){clearTilt();return}
 if(!card?.isConnected){clearTilt();return}
 if(TILT_ACTIVE&&TILT_ACTIVE!==card)clearTilt(TILT_ACTIVE);
 // As coordenadas são fixadas na primeira entrada: o retângulo visual muda
 // de largura ao inclinar, o que causava mais giro de um lado do que do outro.
 if(TILT_ACTIVE!==card||!TILT_RECT){
  // Mede o centro SEM a rotação anterior, inclusive quando o usuário
  // atravessa rapidamente vários cartões ou alterna o layout.
  // Restaurar os estilos antes do próximo frame evita qualquer 'pulo'.
  const prevRotate=card.style.getPropertyValue('rotate'),prevRotatePri=card.style.getPropertyPriority('rotate');
  const prevTrans=card.style.getPropertyValue('transition'),prevTransPri=card.style.getPropertyPriority('transition');
  card.style.setProperty('transition','none','important');
  card.style.setProperty('rotate','none','important');
  const rect=card.getBoundingClientRect();
  if(prevRotate)card.style.setProperty('rotate',prevRotate,prevRotatePri);else card.style.removeProperty('rotate');
  if(prevTrans)card.style.setProperty('transition',prevTrans,prevTransPri);else card.style.removeProperty('transition');
  if(!rect.width||!rect.height)return;
  const parent=card.closest('.cards');
  if(parent){
   // O ponto de fuga é o centro do próprio cartão, não o da lista inteira.
   const pr=parent.getBoundingClientRect();
   parent.style.setProperty('--tilt-origin-x',(rect.left+rect.width/2-pr.left)+'px');
   parent.style.setProperty('--tilt-origin-y',(rect.top+rect.height/2-pr.top)+'px');
  }
  TILT_RECT={cx:rect.left+rect.width/2,cy:rect.top+rect.height/2,
   halfW:Math.max(1,card.offsetWidth/2),halfH:Math.max(1,card.offsetHeight/2),
   scrollX:window.scrollX,scrollY:window.scrollY};
 }
 const p=TILT_RECT;
 const dx=Math.max(-1,Math.min(1,(x-(p.cx+p.scrollX-window.scrollX))/p.halfW));
 const dy=Math.max(-1,Math.min(1,(y-(p.cy+p.scrollY-window.scrollY))/p.halfH));
 const inside=(EP(cfg,'ty')||'out')==='in';
 const power=(1.5+EP(cfg,'pw')*1.9);
 // Mesmo módulo angular para bordas simétricas (+X/-X e +Y/-Y).
 const rx=(inside?1:-1)*dy*power;
 const ry=(inside?-1:1)*dx*power;
 const length=Math.hypot(rx,ry),angle=Math.min(24,length);
 const rotation=angle<.06?'0 1 0 0deg':`${(rx/length).toFixed(4)} ${(ry/length).toFixed(4)} 0 ${angle.toFixed(2)}deg`;
 if(card.style.rotate!==rotation)card.style.rotate=rotation;
 card.classList.add('tilt-active');TILT_ACTIVE=card;
}
function resetPointerLayer(){clearTilt();FRAME_CARD=null;FRAME_BUTTON=null;pointerReady=false;document.documentElement.dataset.pointerReady='0';const s=$('#spot'),c=$('#cursorUI');if(s)s.style.transform='translate3d(-2000px,-2000px,0) translate(-50%,-50%)';if(c)c.style.transform='translate3d(-2000px,-2000px,0)';ring.style.transform='translate3d(-2000px,-2000px,0)';document.getElementById('cursorGridLayer')?.style.setProperty('--mx','-2000px');document.getElementById('cursorGridLayer')?.style.setProperty('--my','-2000px')}
window.addEventListener('blur',resetPointerLayer);
document.addEventListener('mouseleave',resetPointerLayer);
document.addEventListener('pointermove',e=>{MX=e.clientX;MY=e.clientY;if(!pointerReady){pointerReady=true;document.documentElement.dataset.pointerReady='1'}const tg=e.target,c=tg.closest&&tg.closest('.card'),bt=tg.closest&&tg.closest('button');
if(EF('trail')&&performance.now()-LT>30){LT=performance.now();fxTrail(MX,MY,{r:EP('trail','sz')*1.2,a:EP('trail','pw')/10,d:EP('trail','sp')*.12,ty:EP('trail','ty')})}
if(EF('cursorComet')&&performance.now()-LT2>32){LT2=performance.now();fxTrail(MX,MY,{r:EP('cursorComet','sz')*1.6,a:EP('cursorComet','pw')*.07,d:EP('cursorComet','sp')*.11,ty:'spark'})}
if(EF('cursorDust')&&Math.random()<.32)fxTrail(MX+(Math.random()-.5)*30,MY+(Math.random()-.5)*30,{r:EP('cursorDust','sz')*.7,a:EP('cursorDust','pw')*.045,d:EP('cursorDust','sp')*.17,ty:'dot'});
if(EF('cursorSpark')&&Math.random()<.22)fxTrail(MX,MY,{r:EP('cursorSpark','sz')*1.7,a:EP('cursorSpark','pw')*.08,d:EP('cursorSpark','sp')*.19,ty:'star'});
FRAME_CARD=c;FRAME_BUTTON=bt;if(PQ)return;PQ=requestAnimationFrame(()=>{PQ=0;const c=FRAME_CARD,bt=FRAME_BUTTON;const grid=document.getElementById('cursorGridLayer');if(EF('cursorGrid')&&grid){grid.style.setProperty('--mx',MX+'px');grid.style.setProperty('--my',MY+'px')}if(EF('spot'))$('#spot').style.transform=`translate3d(${MX}px,${MY}px,0) translate(-50%,-50%)`;if(EF('ring'))ring.style.transform=`translate3d(${MX}px,${MY}px,0)`;const cursor=$('#cursorUI');if(cursor&&(['cursorDot','cursorHalo','cursorOrbit','cursorCross','cursorPulse'].some(EF)))cursor.style.transform=`translate3d(${MX}px,${MY}px,0)`;if(c&&EF('cursorBeam')){const cr=c.getBoundingClientRect();c.style.setProperty('--card-mx',((MX-cr.left)/cr.width*100)+'%');c.style.setProperty('--card-my',((MY-cr.top)/cr.height*100)+'%')}
update3DTilt(c,MX,MY);
if(LB&&LB!==bt)LB.style.translate='';LB=null;if(bt&&EF('magnet')&&!bt.closest('#side')){const b=bt.getBoundingClientRect(),k=EP('magnet','pw')*.04;bt.style.translate=`${(MX-b.left-b.width/2)*k}px ${(MY-b.top-b.height/2)*k}px`;LB=bt}})});
document.addEventListener('pointerout',e=>{const card=e.target.closest?.('.card');if(card && (!e.relatedTarget || !card.contains(e.relatedTarget)))clearTilt(card);if(!e.relatedTarget){document.documentElement.dataset.pointerReady='0'}});
document.addEventListener('pointerdown',e=>{if(e.target.closest?.('#tabs button[data-t]'))return; if(EF('cclick'))fxBurst(e.clientX,e.clientY,EP('cclick','pw')*3,EP('cclick','sz')/10,'circle');if(EF('clickRings'))spawnClickFX(e.clientX,e.clientY,'ring',EP('clickRings','pw'),EP('clickRings','sz'),EP('clickRings','sp'));if(EF('clickStars'))fxBurst(e.clientX,e.clientY,EP('clickStars','pw')*3,EP('clickStars','sz')/11,'circle',EP('clickStars','sp'));if(EF('clickCard')){const c=e.target.closest('.card,.box');if(c){c.style.setProperty('--clickCard-pw',EP('clickCard','pw'));c.style.setProperty('--clickCard-sz',EP('clickCard','sz'));c.style.setProperty('--clickCard-sp',EP('clickCard','sp'));c.classList.remove('click-thump');void c.offsetWidth;c.classList.add('click-thump');setTimeout(()=>c.classList.remove('click-thump'),900)}}if(!EF('rip'))return;const b=e.target.closest('button');if(!b||b.closest('#side'))return;b.querySelectorAll('.rip').forEach(x=>x.remove());const r=b.getBoundingClientRect(),z=Math.max(r.width,r.height),i=document.createElement('i');i.className='rip';i.style.cssText=`width:${z}px;height:${z}px;left:${e.clientX-r.left-z/2}px;top:${e.clientY-r.top-z/2}px`;b.append(i);setTimeout(()=>i.remove(),1000)});
function shake(el){
 const header=el.querySelector('.sm');if(!header)return;
 header.getAnimations().filter(a=>a.id==='stop-loss-shake').forEach(a=>a.cancel());
 const distance=Math.max(1,Math.min(6,EP('shake','pw')*.58));
 const frames=[0,-1,1,-.85,.85,-.5,.5,0].map(p=>({transform:`translateX(${p*distance}px)`}));
 const a=header.animate(frames,{duration:Math.max(200,Math.round(1600/EP('shake','sp'))),easing:'ease-in-out'});
 a.id='stop-loss-shake';
}
function commitFinalValue(t){if(updPending){cancelAnimationFrame(updPending);updPending=0}
 const el=t.closest('.op');if(!el)return;
 const o=S.ops.find(x=>x.id===el.dataset.id);if(!o)return;
 const raw=t.value.trim();
 if(raw===''||!t.validity.valid||!Number.isFinite(Number(raw))){
   t.setCustomValidity('Digite um valor válido e pressione Enter.');
   t.reportValidity();
   t.addEventListener('input',()=>t.setCustomValidity(''),{once:true});
   return;
 }
 const next=Number(raw),previous=o.f;
 if(previous===next){delete t.dataset.draft;return;}
 const prevStatus=R.find(x=>x.o.id===o.id)?.st;
 o.f=next;delete o.statusLock;delete o.pnlBasis;delete o.balanceAfterFinal;delete t.dataset.draft;
 upd();
 const result=R.find(x=>x.o.id===o.id);
 if(!result)return;
 // Somente o Enter, nunca input/change/blur, executa esta rotina.
 if(result.st==='win'&&prevStatus!=='win'&&EF('conf')){
   const bounds=el.getBoundingClientRect();
   fxBurst(bounds.left+bounds.width/2,bounds.top+45,Math.min(125,EP('conf','pw')*12),EP('conf','sz')/5,EP('conf','ty'),EP('conf','sp'));
 }
 if(result.st==='loss'&&prevStatus!=='loss'&&EF('shake'))shake(el);
}
document.addEventListener('keydown',e=>{
 const t=e.target;
 if(e.key!=='Enter'||e.repeat||e.isComposing||!t.matches?.('.op [data-f="f"]'))return;
 e.preventDefault();commitFinalValue(t);
});
function spawnClickFX(x,y,kind,pw,sz,sp){const n=document.createElement('i');n.className='click-fx '+kind;n.style.cssText=`left:${x}px;top:${y}px;--sz:${sz};--pw:${pw};--sp:${sp}`;document.body.append(n);n.addEventListener('animationend',()=>n.remove(),{once:true});setTimeout(()=>n.remove(),2300)}

setInterval(()=>{if(document.hidden)return;R.forEach(r=>{if(!r.o.run)return;
 const card=document.querySelector(`.op[data-id="${r.o.id}"]`);if(!card)return;
 const timer=card.querySelector('[data-k=tmv]'),value=clk(dur(r.o));if(timer&&timer.textContent!==value)timer.textContent=value;
 paintOperationTime(card,r.o);
})},1000);
const dayMap=a=>{const m={};a.forEach(r=>m[r.o.d]=(m[r.o.d]||0)+r.pl);return m};
function gbar(l,v,g,f){const p=g>0?Math.max(0,Math.min(100,v/g*100)):0;return`<div class="card"><span>${l}</span><b class="${cls(v)}">${f(v)}${g?' / '+f(g):''}</b><div class="pg"><i style="width:${p}%"></i></div><small>${g?nf(p,0)+'% da meta'+(v>=g?' ✅':''):'Defina uma meta acima'}</small></div>`}
function rGoals(){const a=ACT(),t=today(),ws=gk(t,'w'),ms=t.slice(0,7),dm=dayMap(a),wk=sum(a.filter(r=>r.o.d>=ws&&r.o.d<=t).map(r=>r.pl)),mo=sum(a.filter(r=>r.o.d.startsWith(ms)).map(r=>r.pl)),pd=Object.keys(dm).filter(d=>d.startsWith(ms)&&dm[d]>0).length,g=S.gl;
$('#gcards').innerHTML=gbar('Lucro da semana',wk,g.wk,money)+gbar('Lucro do mês',mo,g.mo,money)+gbar('Dias positivos no mês',pd,g.dd,n=>n+'');
const okn=a.filter(r=>r.cur>=r.lim).length;let ks=0;for(let i=a.length-1;i>=0&&a[i].cur>=a[i].lim;i--)ks++;let ps=0,mp=0;Object.keys(dm).sort().forEach(d=>{ps=dm[d]>0?ps+1:0;mp=Math.max(mp,ps)});
$('#gdisc').innerHTML=card('Respeitou o limite de perda',pct(a.length?okn/a.length*100:0),'',okn+' de '+a.length+' operações')+card('Sequência respeitando o limite',ks,'','operações seguidas')+card('Passou do limite',a.length-okn,a.length-okn?'neg':'','vezes')+card('Maior sequência de dias no lucro',mp,'pos','dias seguidos');
const gl=+S.goals[S.set.gm]||0,AC=[['🥇','Primeira operação',a.length>=1],['📅','10 operações registradas',a.length>=10],['🔥','3 dias seguidos no lucro',mp>=3],['🛡️','5 operações seguidas respeitando o limite',ks>=5],['📈','Semana no positivo',wk>0],['🗓️','Mês no positivo',mo>0],['⏱️','5 operações com horário ou timer',a.filter(r=>r.o.h1&&r.o.h2).length>=5],['🎯','Meta de banca atingida',gl>0&&bankOf(G())>=gl]];
$('#gach').innerHTML=AC.map(([e,n,on])=>`<div class="card ach${on?' on':''}"><i>${e}</i><b>${n}</b><small>${on?'Conquistada':'Bloqueada'}</small></div>`).join('');renderPeriodGoals()}
function rIns(){const a=ACTR(),T=r=>r.o.h1||r.o.ps||'',H={},W=[0,0,0,0,0,0,0],Wn=[0,0,0,0,0,0,0];a.forEach(r=>{const t=T(r);if(t){const h=t.slice(0,2);(H[h]=H[h]||[0,0])[0]+=r.pl;H[h][1]++}const w=new Date(r.o.d+'T12:00').getDay();W[w]+=r.pl;Wn[w]++});
const hs=Object.entries(H).sort((x,y)=>y[1][0]-x[1][0]),dn=['domingo','segunda','terça','quarta','quinta','sexta','sábado'],wi=W.map((v,i)=>[i,v,Wn[i]]).filter(x=>x[2]).sort((x,y)=>y[1]-x[1]);
const ws=a.filter(r=>r.pl>0&&dur(r.o)),ls=a.filter(r=>r.pl<0&&dur(r.o)),av=x=>x.length?sum(x.map(r=>dur(r.o)))/x.length:0,td=a.filter(r=>dur(r.o)),tot=sum(td.map(r=>dur(r.o))),dm=dayMap(a),ks=Object.keys(dm),nd=ks.length,L=[];
if(hs.length>1)L.push(`Melhor horário: <b>${hs[0][0]}h</b> (${money(hs[0][1][0])}). Pior: <b>${hs[hs.length-1][0]}h</b> (${money(hs[hs.length-1][1][0])}).`);else L.push('Preencha o horário ou use o timer nas operações para descobrir seus melhores horários.');
if(wi.length>1)L.push(`Melhor dia da semana: <b>${dn[wi[0][0]]}</b> (${money(wi[0][1])}). Pior: <b>${dn[wi[wi.length-1][0]]}</b> (${money(wi[wi.length-1][1])}).`);
if(ws.length&&ls.length)L.push(`Operações com lucro duram em média <b>${fdur(Math.round(av(ws)))}</b>; as com prejuízo, <b>${fdur(Math.round(av(ls)))}</b>.`);
const many=ks.filter(d=>a.filter(r=>r.o.d===d).length>=3),few=ks.filter(d=>!many.includes(d));if(many.length&&few.length)L.push(`Dias com 3 ou mais operações rendem em média <b>${money(sum(many.map(d=>dm[d]))/many.length)}</b>; os demais, <b>${money(sum(few.map(d=>dm[d]))/few.length)}</b>.`);
$('#insl').innerHTML=L.map(x=>`<li>${x}</li>`).join('');
$('#insc').innerHTML=card('Operações',a.length)+card('Dias operados',nd)+card('Operações por dia',nd?nf(a.length/nd,1):'—')+card('Tempo total medido',tot?fdur(tot):'—')+card('Duração média',td.length?fdur(Math.round(tot/td.length)):'—');
const s=ST(a),q=S.rng,per=q.from||q.to?`${q.from?fd(q.from):'início'} a ${q.to?fd(q.to):'hoje'}`:'todo o período',inr=x=>(!q.from||x.d>=q.from)&&(!q.to||x.d<=q.to),D=sum(S.dep.filter(inr).map(x=>+x.v||0)),Wd=sum(S.wd.filter(inr).map(x=>+x.v||0));
$('#rep').value=`RELATÓRIO DE BANCA (${per})\nOperações: ${s.n} em ${nd} dia(s)\nLucro/prejuízo: ${money(s.tot)}\nTaxa de acerto: ${pct(s.hit)} (${s.nw} com lucro, ${s.nl} com prejuízo)\nMelhor dia: ${money(s.best)} | Pior dia: ${money(s.worst)}\nStop Win: ${s.sw} | Stop Loss: ${s.sl}\nDrawdown máximo: ${money(s.dd)}\nBanca atual: ${money(bankOf(G()))}\nDepósitos: ${money(D)} | Saques: ${money(Wd)}`}
function prange(p,c){const d=new Date(today()+'T12:00'),iso=x=>x.toISOString().slice(0,10),U=(y,m,dd)=>iso(new Date(Date.UTC(y,m,dd)));if(p==='7'||p==='30')return{from:iso(new Date(d-(p-1)*864e5)),to:''};if(p==='mes')return{from:U(d.getFullYear(),d.getMonth(),1),to:U(d.getFullYear(),d.getMonth()+1,0)};if(p==='ant')return{from:U(d.getFullYear(),d.getMonth()-1,1),to:U(d.getFullYear(),d.getMonth(),0)};if(p==='c')return{from:c.from||'',to:c.to||''};return{from:'',to:''}}
/* ===== quadros (calculadoras e gráficos) ===== */
const WCH={},B=()=>bankOf(S.games),allW=()=>Object.values(S.wg).flat();
const PER=[['all','Tudo'],['7','7 dias'],['30','30 dias'],['mes','Este mês'],['ant','Mês passado'],['c','Personalizado']];
const MET=[['bank','Evolução da banca'],['pl','Lucro/prejuízo'],['cum','Lucro acumulado'],['status','Resultado dos dias'],['games','Lucro por jogo'],['dow','Por dia da semana'],['fm','Depósitos x saques por mês'],['fb','Saldo de caixa acumulado'],['fs','Depositado x sacado'],['fz','Faixas dos depósitos'],['hour','Resultado por horário'],['dur','Resultado por duração']];
const SC=[['sps','Perfeito (exponencial hipotético)','ps','#ffd54f'],['spo','Otimista','po','#2ecc71'],['spm','Moderado','pm','#00acc1'],['spp','Pessimista','pp','#ef5350'],['sfx','Lucro fixo por dia (R$)','fx','#b39ddb']];
const WK={chart:{n:'📊 Gráfico',d:{metric:'bank',type:'line',per:'all',from:'',to:'',gm:'all',grp:'d',col:'#2ecc71',col2:'#ef5350'}},risk:{n:'🎲 Risco por aposta',d:{b:'',r:2,sl:20,sw:10}},scen:{n:'🔮 Cenários de projeção',d:{b:'',n:30,al:'',ps:5,po:3,pm:1.5,pp:-0.5,fx:20,sps:true,spo:true,spm:true,spp:true,sfx:true}},goal:{n:'🎯 Meta de banca',d:{b:'',m:'',tp:'pct',v:2}},recov:{n:'↩️ Recuperação de perda',d:{b:'',l:20}},ruin:{n:'📉 Sequência de perdas',d:{b:'',r:2,k:10}}};
const li=(w,k,l,t='number')=>`<label>${l} <input data-p="${k}" type="${t}"${t==='number'?' step="any"':''} value="${w.c[k]}"></label>`,ls=(w,k,l,o)=>`<label>${l} <select data-p="${k}">${o.map(([v,n])=>`<option value="${v}"${w.c[k]==v?' selected':''}>${n}</option>`).join('')}</select></label>`,lc=(w,k,l)=>`<label><input data-p="${k}" type="checkbox"${w.c[k]?' checked':''}> ${l}</label>`;
const WUI={chart:w=>`<div class="wc">${ls(w,'metric','Dados',MET)}${ls(w,'type','Tipo',[['line','Linha'],['bar','Barras'],['pie','Pizza']])}${ls(w,'per','Período',PER)}${li(w,'from','De','date')}${li(w,'to','até','date')}${ls(w,'gm','Jogo',[['all','Todos'],...S.games.map(g=>[g.id,g.name])])}${ls(w,'grp','Agrupar',[['d','Dia'],['w','Semana'],['m','Mês']])}${li(w,'col','Cor','color')}${li(w,'col2','Cor 2','color')}</div><div class="ch"><canvas></canvas></div>`,
risk:w=>`<div class="wc">${li(w,'b','Banca (vazio = atual)')}${li(w,'r','Risco por aposta (%)')}${li(w,'sl','Stop loss (%)')}${li(w,'sw','Stop win (%)')}</div><div class="wo"></div>`,
scen:w=>`<div class="wc">${li(w,'b','Banca inicial (vazio = atual)')}${li(w,'n','Dias')}${li(w,'al','Meta de banca')}</div><div class="wc">${li(w,'ps','Perfeito %/dia')}${li(w,'po','Otimista %/dia')}${li(w,'pm','Moderado %/dia')}${li(w,'pp','Pessimista %/dia')}${li(w,'fx','Lucro fixo R$/dia')}</div><div class="wc">${SC.map(s=>lc(w,s[0],s[1])).join('')}</div><div class="wo"></div><div class="ch"><canvas></canvas></div><p class="mut">Cenários hipotéticos: não preveem nem garantem resultados.</p>`,
goal:w=>`<div class="wc">${li(w,'b','Banca atual (vazio = atual)')}${li(w,'m','Meta')}${ls(w,'tp','Método',[['pct','% por dia'],['fix','Lucro fixo (R$/dia)']])}${li(w,'v','Valor por dia')}</div><div class="wo"></div>`,
recov:w=>`<div class="wc">${li(w,'b','Banca (vazio = atual)')}${li(w,'l','Perda (%)')}</div><div class="wo"></div>`,
ruin:w=>`<div class="wc">${li(w,'b','Banca (vazio = atual)')}${li(w,'r','Risco por aposta (%)')}${li(w,'k','Perdas seguidas')}</div><div class="wo"></div>`};
const wHTML=w=>`<div class="box wd hc" data-w="${w.id}"><div class="wh"><b>${WK[w.k].n}</b><span><button class="x" data-wcfg title="Mostrar/ocultar opções">⚙</button><button class="x del" data-wx title="Remover quadro">✕</button></span></div>${WUI[w.k](w)}</div>`;
function renderWG(){Object.values(WCH).forEach(c=>c.destroy());for(const k in WCH)delete WCH[k];['calc','geral','flow','ins'].forEach(ct=>{const e=$('#wg-'+ct);if(e)e.innerHTML=(S.wg[ct]||[]).map(w=>{w.c={...WK[w.k].d,...w.c};return wHTML(w)}).join('')||'<p class="mut">Nenhum quadro ainda. Use o botão acima para adicionar.</p>'});wAll()}
function wAll(){wVisible(activeTab())}
function wIn(t){const el=t.closest('[data-w]'),w=allW().find(x=>x.id===el.dataset.w),p=t.dataset.p;if(!w)return;w.c[p]=t.type==='checkbox'?t.checked:t.type==='number'?(t.value===''?'':+t.value):t.value;wUpd(w);save()}
const ymd=t=>t.getFullYear()+'-'+String(t.getMonth()+1).padStart(2,'0')+'-'+String(t.getDate()).padStart(2,'0');
const gk=(d,g)=>{if(g==='m')return d.slice(0,7);if(g==='w'){const t=new Date(d+'T12:00');t.setDate(t.getDate()-(t.getDay()+6)%7);return ymd(t)}return d};
function wRows(c){const q=prange(c.per,c);return ACT(R.filter(r=>(c.gm==='all'||r.g.id===c.gm)&&(!q.from||r.o.d>=q.from)&&(!q.to||r.o.d<=q.to)))}
function wData(c){const m=c.metric;
if(m[0]==='f'){const q=prange(c.per,c),inr=x=>(!q.from||x.d>=q.from)&&(!q.to||x.d<=q.to),dp=S.dep.filter(inr),wd=S.wd.filter(inr);
if(m==='fm'){const ks=[...new Set([...dp,...wd].map(x=>x.d.slice(0,7)))].sort(),g=a=>ks.map(k=>sum(a.filter(x=>x.d.startsWith(k)).map(x=>+x.v||0)));return{labels:ks.map(k=>k.slice(5)+'/'+k.slice(2,4)),ds:[{l:'Depósitos',data:g(dp),c:c.col},{l:'Saques',data:g(wd),c:c.col2}]}}
if(m==='fb'){const ev=[...dp.map(x=>({x,s:1})),...wd.map(x=>({x,s:-1}))].sort((a,b)=>FD(a.x).localeCompare(FD(b.x)));let cu=0;return{labels:ev.map(e=>fd(e.x.d)),ds:[{l:'Saldo (depósitos − saques)',data:ev.map(e=>cu+=e.s*(+e.x.v||0)),c:c.col}]}}
if(m==='fs')return{cat:1,labels:['Depositado','Sacado'],ds:[{l:'Total',data:[sum(dp.map(x=>+x.v||0)),sum(wd.map(x=>+x.v||0))],cs:[c.col,c.col2],c:c.col}]};
const Bn=[[0,100],[100,500],[500,1000],[1000,2500],[2500,1e12]];return{cat:1,labels:['até 100','100–500','500–1.000','1.000–2.500','acima de 2.500'],ds:[{l:'Depósitos',data:Bn.map(([a,b])=>dp.filter(x=>x.v>=a&&x.v<b).length),cs:PAL,c:c.col}]}}
const rs=wRows(c),nm=MET.find(x=>x[0]===m)[1];
if(m==='status'){const K=['win','plus','even','minus','loss'],L=['Stop Win','Lucro abaixo da meta','Zerado','Prejuízo no limite','Stop Loss'],C=[S.set.c.ok,'#8bc34a','#9e9e9e','#ff9800',S.set.c.loss];return{cat:1,labels:L,ds:[{l:nm,data:K.map(k=>rs.filter(r=>r.st===k).length),cs:C,c:c.col}]}}
if(m==='games')return{cat:1,labels:S.games.map(g=>g.name),ds:[{l:nm,data:S.games.map(g=>sum(rs.filter(r=>r.g.id===g.id).map(r=>r.pl))),cs:PAL,c:c.col}]};
if(m==='dow'){const dw=[0,0,0,0,0,0,0];rs.forEach(r=>dw[new Date(r.o.d+'T12:00').getDay()]+=r.pl);return{cat:1,labels:['Dom','Seg','Ter','Qua','Qui','Sex','Sáb'],ds:[{l:nm,data:dw,cs:dw.map(v=>v>=0?c.col:c.col2),c:c.col}]}}
if(m==='hour'){const hs=[...new Set(rs.map(r=>r.o.h1||r.o.ps).filter(Boolean).map(t=>t.slice(0,2)))].sort(),v=hs.map(h=>sum(rs.filter(r=>(r.o.h1||r.o.ps||'').slice(0,2)===h).map(r=>r.pl)));return{cat:1,labels:hs.map(h=>h+'h'),ds:[{l:nm,data:v,cs:v.map(x=>x>=0?c.col:c.col2),c:c.col}]}}
if(m==='dur'){const Bk=[[0,15],[15,30],[30,60],[60,1e9]],v=Bk.map(([a,b])=>sum(rs.filter(r=>{const d=dur(r.o)/60;return d>0&&d>=a&&d<b}).map(r=>r.pl)));return{cat:1,labels:['até 15 min','15–30 min','30–60 min','acima de 60 min'],ds:[{l:nm,data:v,cs:v.map(x=>x>=0?c.col:c.col2),c:c.col}]}}
const mp=new Map();rs.forEach(r=>{const k=gk(r.o.d,c.grp),o=mp.get(k)||{pl:0,cur:0};o.pl+=r.pl;o.cur=r.cur;mp.set(k,o)});const ks=[...mp.keys()].sort();let cu=0;const vals=ks.map(k=>{const o=mp.get(k);return m==='bank'?o.cur:m==='cum'?(cu+=o.pl):o.pl});
const d={labels:ks.map(k=>c.grp==='m'?k.slice(5)+'/'+k.slice(2,4):(c.grp==='w'?'sem ':'')+fd(k)),ds:[{l:nm,data:vals,c:c.col}]};if(m==='pl')d.ds[0].cs=vals.map(v=>v>=0?c.col:c.col2);return d}
function wChart(w,el){const c=w.c,d=wData(c);let ty=c.type;if(d.cat&&ty==='line')ty='bar';if(!d.cat&&ty==='pie')ty='bar';const T=ty==='pie'?'doughnut':ty;let ch=WCH[w.id];if(ch&&ch._t!==T){ch.destroy();ch=null}
if(!ch){ch=WCH[w.id]=new Chart(el.querySelector('canvas'),{type:T,data:{labels:[],datasets:[]},options:{responsive:true,maintainAspectRatio:false,animation:CHA(),plugins:{legend:{position:'bottom',display:T==='doughnut'||d.ds.length>1}}}});ch._t=T}
ch.data.labels=d.labels;ch.data.datasets=d.ds.map(s=>T==='doughnut'?{label:s.l,data:s.data.map(Math.abs),backgroundColor:s.cs||PAL}:T==='bar'?{label:s.l,data:s.data,backgroundColor:s.cs||s.c,borderRadius:6}:{label:s.l,data:s.data,borderColor:s.c,backgroundColor:s.c+'33',fill:true,tension:.25});ch.update()}
function wUpd(w){const el=document.querySelector(`[data-w="${w.id}"]`);if(!el)return;const c=w.c,o=el.querySelector('.wo'),k=w.k,ph=el.querySelector('[data-p=b]');if(ph)ph.placeholder=money(B());
if(k==='chart')return wChart(w,el);const CD=x=>'<div class="cards">'+x+'</div>';
if(k==='risk'){const b=+c.b||B(),u=b*c.r/100;o.innerHTML=CD(card('Banca base',money(b))+card('Valor por aposta',money(u),'pos',pct(+c.r||0)+' da banca')+card('Limite de perda',money(b*c.sl/100),'neg','stop loss de '+pct(+c.sl||0))+card('Meta de lucro',money(b*c.sw/100),'pos','stop win de '+pct(+c.sw||0))+card('Apostas perdidas até o stop',u?Math.floor(b*c.sl/100/u):'—','','seguidas, valor fixo')+card('Perda máx. : meta',c.sw?'1 : '+nf(c.sw/c.sl):'—'))}
else if(k==='goal'){const b=+c.b||B(),m=+c.m||0,v=+c.v||0,f=m-b,d=m>b&&v>0?(c.tp==='pct'?Math.ceil(Math.log(m/b)/Math.log(1+v/100)):Math.ceil(f/v)):0;o.innerHTML=CD(card('Banca atual',money(b))+card('Meta',m?money(m):'—')+card('Falta',m?money(Math.max(0,f)):'—','pos')+card('Dias estimados',m>b?(d||'—'):'—','',d?'por volta de '+new Date(Date.now()+d*864e5).toLocaleDateString('pt-BR'):''))}
else if(k==='recov'){const b=+c.b||B(),l=Math.min(99,+c.l||0);o.innerHTML=CD(card('Banca após a perda',money(b*(1-l/100)),'neg')+card('Ganho necessário',pct(l/(100-l)*100),'pos','para voltar ao valor inicial')+card('Valor a recuperar',money(b*l/100)))+'<table class="rt"><tr><th>Perda</th>'+[10,20,30,40,50,70].map(x=>`<td>${x}%</td>`).join('')+'</tr><tr><th>Ganho</th>'+[10,20,30,40,50,70].map(x=>`<td>${nf(x/(100-x)*100,1)}%</td>`).join('')+'</tr></table>'}
else if(k==='ruin'){const b=+c.b||B(),nb=b*Math.pow(1-(+c.r||0)/100,+c.k||0);o.innerHTML=CD(card('Banca restante',money(nb),'neg',(+c.k||0)+' perdas seguidas')+card('Perda total',money(b-nb))+card('% da banca perdida',pct((1-nb/b)*100))+card('Ganho para recuperar',pct((b/nb-1)*100),'pos'))}
else if(k==='scen'){const b=+c.b||B(),n=Math.max(1,Math.min(365,Math.floor(+c.n)||30)),al=+c.al||0,lb=[...Array(n+1).keys()],ser=SC.filter(s=>c[s[0]]).map(s=>{const r=+c[s[2]]||0;return{s,r,a:lb.map(i=>s[2]==='fx'?b+r*i:b*Math.pow(1+r/100,i))}});
o.innerHTML=CD(ser.map(({s,r,a})=>{const e=a[n],d=al>b&&r>0?(s[2]==='fx'?Math.ceil((al-b)/r):Math.ceil(Math.log(al/b)/Math.log(1+r/100))):0;return card(s[1],money(e),cls(e-b),al>b?(d?d+' dias até a meta':'não atinge a meta'):'lucro '+money(e-b))}).join(''));
let ch=WCH[w.id];if(!ch){ch=WCH[w.id]=new Chart(el.querySelector('canvas'),{type:'line',data:{labels:[],datasets:[]},options:{responsive:true,maintainAspectRatio:false,animation:CHA(),elements:{point:{radius:0}},plugins:{legend:{position:'bottom'}}}})}
ch.data.labels=lb;ch.data.datasets=ser.map(({s,a})=>({label:s[1],data:a,borderColor:s[3],backgroundColor:s[3],tension:.2}));ch.update()}}
const PH={ops:['📝','Operações','Ano › mês › dia › horário. Clique para expandir cada nível.'],geral:['🏠','Geral','Resumo da sua banca, gráficos e quadros seus'],stats:['📈','Estatísticas','Metas, desempenho e comparações'],goals:['🏆','Metas e disciplina','Metas da semana e do mês, disciplina e conquistas'],ins:['🔎','Insights e relatório','Descubra padrões nos seus dados e gere um relatório'],cal:['📅','Calendário','O resultado de cada dia do mês'],calc:['🧮','Calculadoras e cenários','Monte seus próprios quadros e gráficos'],flow:['💰','Fluxo de Caixa','Extrato, saldo acumulado, depósitos, saques e gráficos'],risk:['🛡️','Auditoria de risco','Histórico de perdas, concentração e cenários de resistência'],diary:['📓','Diário de sessões','Registre decisões, emoções e disciplina'],cfg:['⚙️','Personalizar','Layout, cores, animações e dados']};
Object.entries(PH).forEach(([k,[i,t,d]])=>$('#t-'+k).insertAdjacentHTML('afterbegin',`<div class="ph"><span class="ic">${i}</span><div><h2>${t}</h2><p>${d}</p></div></div>`));


function rRisk(){
 const a=ACT(V()),s=ST(a),b=Math.max(0,bankOf(G()));
 let running=0,peak=0,maxDD=0,negStreak=0,mostNeg=0;
 a.forEach(r=>{running+=r.pl;peak=Math.max(peak,running);maxDD=Math.max(maxDD,peak-running);negStreak=r.pl<0?negStreak+1:0;mostNeg=Math.max(mostNeg,negStreak)});
 $('#riskCards').innerHTML=card('Banca atual',money(b),cls(b))+card('Drawdown histórico em resultados',money(maxDD),'neg','maior recuo a partir de um pico do P&L')+card('Maior sequência de perdas',mostNeg,'neg','operações consecutivas')+card('Stop Loss atingidos',s.sl,'neg',a.length?pct(s.sl/a.length*100)+' das operações':'sem operações')+card('Retorno médio por operação',pct(s.ret),cls(s.ret))+card('Pior resultado',money(s.worst),'neg');
 const by=S.games.filter(g=>S.set.gm==='all'||S.set.gm===g.id).map(g=>({g,rows:a.filter(r=>r.g.id===g.id)}));
 const exposure=sum(by.map(x=>sum(x.rows.map(r=>Math.abs(r.pl)))))||1;
 $('#riskGame').innerHTML=by.map(x=>{const vol=sum(x.rows.map(r=>Math.abs(r.pl))),pl=sum(x.rows.map(r=>r.pl)),share=vol/exposure*100;
 return `<div class="risk-game"><div><b>${esc(x.g.name)}</b><span class="${cls(pl)}">${money(pl)} · ${nf(share,1)}%</span></div><div class="pg"><i style="width:${share}%;background:${pl>=0?'var(--ok)':'var(--loss)'}"></i></div><small class="mut">${x.rows.length} operação(ões) · peso calculado pelo movimento absoluto de resultados</small></div>`}).join('')||'<p class="mut">Sem dados de jogos neste filtro.</p>';
 const p=Math.max(.5,Math.min(25,+S.risk.pct||3)),n=Math.max(1,Math.min(20,+S.risk.n||5)),rest=b*Math.pow(1-p/100,n),loss=b-rest,restore=rest>0?(b/rest-1)*100:0;
 $('#riskPctV').textContent=nf(p,1)+'%';$('#riskNV').textContent=n+' sessões';
 $('#riskScenario').innerHTML='<div class="cards">'+card('Banca após sequência',money(rest),'neg')+card('Valor perdido',money(loss),'neg')+card('Recuperação necessária',pct(restore),'pos')+'</div><div class="pg risk-prog"><i style="width:'+(b?rest/b*100:0)+'%;background:var(--ok)"></i></div><p class="mut">Cenário matemático ilustrativo com percentuais aplicados à banca restante, não uma estimativa de chance.</p>';
 const lostLimit=a.filter(r=>r.st==='loss').length,missing=S.ops.filter(o=>o.f==='').length;
 $('#riskAlerts').innerHTML=[
 {h:'Limite de perdas',t:lostLimit?`${lostLimit} registro(s) chegaram ao Stop Loss. Analise a frequência e considere encerrar a sessão ao atingir o limite.`:'Nenhum Stop Loss registrado no filtro atual. Isso não elimina o risco de perdas.'},
 {h:'Dados pendentes',t:missing?`${missing} operação(ões) ainda sem banca final. O diagnóstico melhora quando os resultados são preenchidos.`:'Todas as operações cadastradas possuem resultado final.'},
 {h:'Concentração',t:by.length&&Math.max(...by.map(x=>sum(x.rows.map(r=>Math.abs(r.pl)))/exposure))>.7?'Mais de 70% do volume absoluto de resultados está concentrado em um jogo.':'A distribuição está calculada a partir dos resultados disponíveis.'}
 ].map(x=>`<div class="box"><h3>${x.h}</h3><p class="mut">${x.t}</p></div>`).join('');
}
function rDiary(){
 const di=S.diary||[],games=[{id:'all',name:'Todos os jogos'},...S.games];
 const gameSel=$('#diGame'),filter=$('#diFilter');if(!gameSel||!filter)return;
 const prevGame=gameSel.value||S.games[0]?.id||'all',prevFilter=filter.value||'all';
 gameSel.innerHTML=S.games.map(g=>`<option value="${g.id}">${esc(g.name)}</option>`).join('');if(S.games.some(g=>g.id===prevGame))gameSel.value=prevGame;
 filter.innerHTML=games.map(g=>`<option value="${g.id}">${esc(g.name)}</option>`).join('');filter.value=games.some(g=>g.id===prevFilter)?prevFilter:'all';
 const nr=di.filter(x=>x.rule==='sim').length,good=di.filter(x=>x.mood==='calmo'||x.mood==='atento').length;
 $('#diaryCards').innerHTML=card('Sessões registradas',di.length)+card('Limites respeitados',di.length?pct(nr/di.length*100):'—','pos',nr+' de '+di.length)+card('Sessões calmas/atentas',di.length?pct(good/di.length*100):'—','','avaliação autorrelatada');
 const names=Object.fromEntries(S.games.map(g=>[g.id,g.name]));
 const moodLabels={calmo:'😌 Calmo',atento:'🎯 Atento',ansioso:'😟 Ansioso',impulsivo:'⚡ Impulsivo',cansado:'😴 Cansado'},ruleLabels={sim:'✅ Sim',parcial:'➖ Parcialmente',nao:'⛔ Não'};
 const current=di.filter(x=>filter.value==='all'||x.g===filter.value).sort((x,y)=>y.d.localeCompare(x.d));
 $('#diaryHistory').innerHTML=current.map(x=>`<div class="box diary-entry" data-di-id="${x.id}"><div class="diary-head"><b>${fd(x.d)} · ${esc(names[x.g]||'Jogo removido')}</b><button class="x del" data-di-del title="Remover nota">✕</button></div><div class="diary-form"><label>Data <input type="date" data-di="d" value="${x.d}"></label><label>Estado emocional <select data-di="mood">${Object.entries(moodLabels).map(([v,t])=>`<option value="${v}"${x.mood===v?' selected':''}>${t}</option>`).join('')}</select></label><label>Seguiu os limites? <select data-di="rule">${Object.entries(ruleLabels).map(([v,t])=>`<option value="${v}"${x.rule===v?' selected':''}>${t}</option>`).join('')}</select></label></div><textarea data-di="n" rows="2" placeholder="Revisão da sessão">${esc(x.n||'')}</textarea></div>`).join('')||'<div class="box"><p class="mut">Nenhum registro neste filtro. O diário é opcional: adicione uma sessão quando quiser revisar suas decisões.</p></div>';
}



/* =================== CONTROLE DE BANCA v3: UX, metas, layouts =================== */
const PAGE_HELP={
 ops:'Cadastre operações, ajuste a banca com o lápis sem gerar lucro/prejuízo e confirme a banca final apenas com Enter. Os botões expandir e recolher avançam um nível da hierarquia por clique.',
 geral:'Visão consolidada do saldo, resultados e gráficos. O filtro de jogos e o período acima alteram a análise. Use Editar página para reorganizar os blocos.',
 stats:'Indicadores calculados somente a partir das operações registradas. Um ajuste manual da banca não é tratado como resultado de aposta.',
 goals:'Você pode definir metas para semanas e meses específicos, acompanhar metas antigas e consultar cada período também no calendário. Os objetivos são apenas referência para acompanhamento.',
 ins:'Analisa os resultados registrados e mostra padrões por horário, dia da semana e duração. As tendências observadas não garantem resultados futuros.',
 cal:'Cada célula representa um dia. Clique em dias com operações para abri-las. As metas mensais e semanais cadastradas aparecem acima do calendário.',
 calc:'Crie quadros e simulações, altere as opções pela engrenagem e compare cenários. Simulações não representam probabilidades reais de ganho.',
 flow:'Depósitos em vermelho e saques em verde, separados do lucro ou prejuízo das operações. O extrato mostra o saldo cumulativo conforme os lançamentos.',
 risk:'Mostra concentração, histórico de perdas e cenários hipotéticos para avaliar exposição. Não prevê a chance de sucesso.',
 diary:'Registre sentimentos, respeito aos limites e notas das sessões. Filtre por jogo para rever seu histórico.',
 cfg:'Organize temas, comportamento, mouse, efeitos, dados, layouts e ajuda contextual. Use Backup antes de redefinir os registros.'
};
const SECTION_HELP={
 'Metas do período':'Crie metas semanais ou mensais com data, jogo e indicador; o histórico permanece salvo.',
 'Disciplina':'Percentuais e sequências calculados dos resultados já confirmados.',
 'Fluxo de caixa':'Acompanhe depósitos e saques independentemente das operações e escolha como colorir cada tipo.',
 'Lançamentos':'Edite depósitos e saques aqui. Valores zero não alteram o saldo, mas constam no extrato.',
 'Visual':'Escolha cores, tamanho de texto, estilo e disposição da interface.',
 'Animações':'Configure cada efeito individualmente. Diminuir força e quantidade de partículas melhora a fluidez.',
 'Operações':'Controle a ordem, o comportamento padrão e a hierarquia de expansão.',
 'Gráficos':'Os gráficos refletem os registros e filtros atualmente selecionados.',
 'Dados':'Use backup para evitar perder registros armazenados neste navegador.',
 'Histórico e revisão':'As anotações são editáveis e ficam neste navegador até serem removidas.'
};
function infoUpdate(scope){
 document.documentElement.dataset.info=S.set.infoOn===0?'0':'1';
 if(S.set.infoOn===0){hideInfo();return}
 const headers=scope?.matches?.('main > section')
  ? scope.querySelectorAll('.ph,.cat,.box>h3')
  : document.querySelectorAll('main>section .ph,main>section .cat,main>section .box>h3');
 headers.forEach(h=>{
  if(h.querySelector('.info-button'))return;
  const sec=h.closest('main>section'),tab=sec?.id.slice(2)||'ops';
  const label=(h.querySelector('h2')?.textContent||h.textContent||'').trim();
  const msg=h.classList.contains('ph')?PAGE_HELP[tab]:SECTION_HELP[label]||`Nesta área de ${label.toLowerCase()}, os valores e quadros usam os dados cadastrados e os filtros da página. ${PAGE_HELP[tab]||''}`;
  const b=document.createElement('button');b.type='button';b.className='info-button';b.dataset.infoMessage=msg;b.dataset.infoTitle=label;b.title='Entenda esta seção';b.textContent='i';b.setAttribute('aria-label','Informações sobre '+label);h.append(b);
 });
}
let activeInfoTrigger=null;
function hideInfo(){
 const p=$('#infoPopover');if(p)p.hidden=true;
 if(activeInfoTrigger?.isConnected)activeInfoTrigger.setAttribute('aria-expanded','false');
 activeInfoTrigger=null;
}
function showInfo(b){
 const p=$('#infoPopover');
 // Se clicar novamente no mesmo ícone, feche em vez de abrir de novo.
 if(!p.hidden&&activeInfoTrigger===b){hideInfo();return}
 if(activeInfoTrigger?.isConnected)activeInfoTrigger.setAttribute('aria-expanded','false');
 activeInfoTrigger=b;b.setAttribute('aria-expanded','true');
 const r=b.getBoundingClientRect();
 p.innerHTML=`<strong>${esc(b.dataset.infoTitle||'Informações')}</strong>${esc(b.dataset.infoMessage||'')}`;
 p.hidden=false;
 const w=Math.min(340,innerWidth-24);
 p.style.left=Math.max(12,Math.min(innerWidth-w-12,r.left))+'px';
 p.style.top=Math.max(12,Math.min(innerHeight-175,r.bottom+8))+'px';
 p.style.width=w+'px';
}

function applyTreeDepth(){
 document.documentElement.dataset.treeBulk='1';requestAnimationFrame(()=>requestAnimationFrame(()=>{document.documentElement.dataset.treeBulk='0'}));
 $$('#ops .mg').forEach(el=>{const d=+el.className.match(/lv(\d)/)?.[1]||1;const key=el.querySelector(':scope>.mh')?.dataset.mo;
 if(!key)return;const col=d>progressDepth;el.classList.toggle('col',col);col?COL.add(key):COL.delete(key)});
 $$('#ops .op').forEach(el=>{const open=progressDepth>=4;el.classList.toggle('open',open);open?OPEN.add(el.dataset.id):OPEN.delete(el.dataset.id)});
 $('#ex').textContent='Expandir nível '+Math.min(4,progressDepth+1)+' / 4';$('#co').textContent='Recolher nível '+Math.max(0,progressDepth-1)+' / 4';
}

let noteTarget='';
function openNote(el){noteTarget=el.closest('.op').dataset.id;const o=S.ops.find(x=>x.id===noteTarget);$('#noteFull').value=o?.n||'';$('#noteDialog').returnValue='';$('#noteDialog').showModal();$('#noteFull').focus()}
function confirmBank(el,t){const o=S.ops.find(x=>x.id===el.dataset.id),r=R.find(x=>x.o.id===o.id);if(!o||!r)return;
 const raw=t.value.trim(),value=raw===''?r.auto:Number(raw);
 if(!Number.isFinite(value)||value<0){toast('Digite um saldo válido.');t.focus();return}
 if(o.f!==''){
  // Freeze the registered P/L and stop classifications of this and later completed sessions.
  // A cash adjustment should never retroactively become a win or a loss.
  const sameGame=R.filter(row=>row.g.id===r.g.id),i=sameGame.findIndex(row=>row.o.id===o.id);
  sameGame.slice(Math.max(0,i)).forEach(row=>{if(row.closed){if(row.o.pnlBasis===undefined)row.o.pnlBasis=row.bank;if(!row.o.statusLock)row.o.statusLock=row.st}});
  o.balanceAfterFinal=true
 }
 delete o.summaryCarry; o.manualBank=value;t.readOnly=true;t.type='text';t.value=money(value);el.querySelector('.bank-pencil').textContent='✎';el.querySelector('.bank-pencil').classList.remove('editing');el.querySelector('.bank-hint').textContent='Saldo ajustado manualmente';
 t.blur();upd();toast('Saldo ajustado; os resultados históricos foram preservados.');
}
function bankToggle(b){const el=b.closest('.op'),t=el.querySelector('[data-f=b]');
 if(t.readOnly){const r=R.find(x=>x.o.id===el.dataset.id);t.type='number';t.step='any';t.value=String(r?.bank??0);t.readOnly=false;b.textContent='✓';b.classList.add('editing');b.title='Confirmar o ajuste e bloquear';t.focus();t.select()}
 else confirmBank(el,t);
}

// O lápis do resumo modifica o saldo de referência, nunca o resultado de uma operação.
function beginSummaryBankEdit(){
 const editor=$('#summaryBankEditor'),button=$('[data-summary-bank-edit]'),amount=$('#summaryBankAmount'),input=$('#summaryBankInput');
 if(!editor||!button||!amount||!input)return;
 editor.hidden=false;amount.hidden=true;button.hidden=true;input.value=bankOf(G()).toFixed(2);input.focus();input.select();
}
function cancelSummaryBankEdit(){
 const editor=$('#summaryBankEditor'),button=$('[data-summary-bank-edit]'),amount=$('#summaryBankAmount');
 if(editor)editor.hidden=true;if(button)button.hidden=false;if(amount)amount.hidden=false;
}
function saveSummaryBankEdit(){
 const input=$('#summaryBankInput');if(!input)return;
 const raw=input.value.trim(),nextValue=Number(raw);
 if(raw===''||!Number.isFinite(nextValue)||nextValue<0){toast('Digite um saldo válido e não negativo.');input.focus();return}
 const games=G(),current=bankOf(games),delta=nextValue-current;
 if(Math.abs(delta)<.005){cancelSummaryBankEdit();return}
 // Em "Todos os jogos", ajustar o total equivale a aplicar a diferença ao
 // último jogo com operações, preservando os saldos dos demais jogos.
 const last=V().at(-1),game=last?.g||games.at(-1);
 if(!game){toast('Crie um jogo para registrar a banca.');return}
 const gameTarget=bankOf([game])+delta;
 if(gameTarget<-.005){toast('O ajuste tornaria negativo o saldo de '+game.name+'. Selecione o jogo individualmente para ajustar.');input.focus();return}
 if(last&&last.g.id===game.id){
  if(last.closed){last.o.summaryCarry=Math.max(0,+gameTarget.toFixed(2));}
  else{last.o.manualBank=Math.max(0,+gameTarget.toFixed(2));delete last.o.summaryCarry;}
 }else{
  // Sem operações, não existe lucro ou prejuízo a preservar.
  game.init=Math.max(0,+gameTarget.toFixed(2));
 }
 upd();
 const displayed=$(`.op[data-id="${last?.o.id||''}"] [data-f="b"]`);
 if(displayed&&!last.closed&&displayed.readOnly)displayed.value=money(last.o.manualBank);
 toast('Banca atual ajustada. O histórico de lucro e prejuízo não foi alterado.');
}

function periodRange(g){
 const s=g.type==='month'?g.period.slice(0,7)+'-01':g.period;const e=g.type==='month'?new Date(Date.UTC(+s.slice(0,4),+s.slice(5,7),0)).toISOString().slice(0,10):ymd(new Date(new Date(s+'T12:00').getTime()+6*864e5));return {from:s,to:e};
}
function periodValue(g){const {from,to}=periodRange(g),rows=ACT(R.filter(r=>r.o.d>=from&&r.o.d<=to&&(g.game==='all'||r.g.id===g.game)));
 if(g.kind==='days'){const days=dayMap(rows);return Object.values(days).filter(v=>v>0).length}return sum(rows.map(r=>r.pl));}
function periodCard(g,small=false){const {from,to}=periodRange(g),value=periodValue(g),total=+g.target||0,p=total>0?Math.max(0,Math.min(100,value/total*100)):0;
 const finished=to<today(),future=from>today(),state=finished?(value>=total?'Atingida':'Encerrada'):future?'Planejada':'Em andamento';
 const game=g.game==='all'?'Todos os jogos':S.games.find(x=>x.id===g.game)?.name||'Jogo removido';
 return `<div class="goal-entry" data-pgoal="${esc(g.id)}"><div class="goal-top"><b>${g.type==='month'?'📅 Mês':'🗓️ Semana'} · ${fd(from)}${g.type==='week'?' – '+fd(to):''}</b>${small?'':`<span class="goal-actions"><button data-pg-edit="${esc(g.id)}" title="Editar meta">✎</button><button data-pg-del="${esc(g.id)}" title="Excluir meta">✕</button></span>`}</div>
 <div class="goal-meta">${g.kind==='profit'?'Meta de lucro':'Dias positivos'} · ${esc(game)} · ${state}</div><strong class="${cls(value)}">${g.kind==='profit'?money(value):value} / ${g.kind==='profit'?money(total):total}</strong>
 <div class="pg"><i style="width:${p}%"></i></div><div class="goal-percent">${nf(p,0)}% concluído</div></div>`;
}
function renderPeriodGoals(){const h=$('#pgHistory');if(!h)return;const sel=$('#pgGame'),val=sel.value||'all';sel.innerHTML='<option value="all">Todos os jogos</option>'+S.games.map(g=>`<option value="${g.id}">${esc(g.name)}</option>`).join('');sel.value=val;
 const filter=$('#pgFilter').value||'all',goals=[...(S.periodGoals||[])].sort((a,b)=>b.period.localeCompare(a.period));
 const seen=goals.filter(g=>{const r=periodRange(g);return filter==='all'||(filter==='current'&&r.from<=today()&&r.to>=today())||(filter==='past'&&r.to<today())||(filter==='future'&&r.from>today())});
 $('#pgCount').textContent=seen.length+' meta(s)';h.innerHTML=seen.map(g=>periodCard(g)).join('')||'<div class="box mut">Nenhuma meta registrada para este filtro.</div>';
}
function renderCalGoals(){const el=$('#calGoals');if(!el)return;const monthGoals=(S.periodGoals||[]).filter(g=>g.type==='month'&&g.period===CM);const begin=CM+'-01',days=new Date(Date.UTC(+CM.slice(0,4),+CM.slice(5,7),0)).getUTCDate(),end=CM+'-'+String(days).padStart(2,'0');
 const weeks=(S.periodGoals||[]).filter(g=>g.type==='week'&&periodRange(g).from<=end&&periodRange(g).to>=begin);const visible=g=>S.set.gm==='all'||g.game==='all'||g.game===S.set.gm;el.innerHTML=[...monthGoals,...weeks].filter(visible).map(g=>periodCard(g,true)).join('')||'<p class="mut">Sem metas cadastradas para este mês. Crie uma na aba Metas e disciplina para acompanhar aqui.</p>';
}
function saveGoal(){const date=$('#pgDate').value||today(),type=$('#pgType').value,period=type==='week'?gk(date,'w'):date.slice(0,7),target=Number($('#pgValue').value),kind=$('#pgKind').value,game=$('#pgGame').value;
 if(!Number.isFinite(target)||target<=0){toast('Defina uma meta maior que zero.');$('#pgValue').focus();return}
 const id=$('#pgSave').dataset.editId||uid(),item={id,type,period,target,kind,game},at=S.periodGoals.findIndex(g=>g.id===id);
 if(at>=0)S.periodGoals[at]=item;else S.periodGoals.push(item);
 $('#pgSave').textContent='＋ Salvar meta do período';delete $('#pgSave').dataset.editId;save();rGoals();rCal();if(at<0){const el=[...document.querySelectorAll('#pgHistory [data-pgoal]')].find(e=>e.dataset.pgoal===id);animateJustCreated(el)}toast('Meta salva e vinculada ao calendário.');
}

/* Layout: reorder inside the same parent to preserve functionality of each panel.
   Persistent IDs for static categories, grids and boxes; dynamic operation tiles share a template. */
let layoutEditing=false,layoutDragging=null,layoutDraftBefore=null,layoutScanBusy=false;const layoutDefaults={};
const layoutAvailable=el=>el.matches('section > .cat, section > .bar, section > .box, section > .grid, section > .cards, section > .wrap, section > .div, .grid > .box, .wgrid > [data-w], .tiles > .t');
function layoutKey(el){if(el.dataset.lk)return el.dataset.lk;
 const sec=el.closest('main>section');if(!sec)return '';
 if(el.closest('.tiles'))return el.dataset.lk='op-'+el.closest('.op').dataset.id+'-tile-'+[...el.parentElement.children].indexOf(el);
 if(el.dataset.w)return el.dataset.lk='widget-'+el.dataset.w;
 const p=el.parentElement,idx=[...p.children].filter(ch=>layoutAvailable(ch)).indexOf(el);
 // Stable parent key independent of its current position. Parent block is tagged before its children.
 const parentKey=p.id||p.dataset.lk||sec.id;
 return el.dataset.lk=parentKey+'::'+idx+':'+(el.id||el.tagName.toLowerCase());
}
function layoutScan(sec=$('#t-'+activeTab())){
 if(layoutScanBusy||!sec)return false;
 layoutScanBusy=true;let changed=false;
 const targets=sec.querySelectorAll(':scope > .cat,:scope > .bar,:scope > .box,:scope > .grid,:scope > .cards,:scope > .wrap, :scope > .grid > .box, :scope > .wgrid > [data-w], .tiles > .t');
 for(const el of targets){
  if(!layoutAvailable(el))continue;
  if(!el.dataset.lk){layoutKey(el);changed=true}
  const grip=el.querySelector(':scope > .layout-grip');
  if(layoutEditing&&!grip){const g=document.createElement('button');g.type='button';g.textContent='⠿';g.className='layout-grip';g.title='Arraste para reorganizar';g.draggable=true;el.append(g)}
  if(!layoutEditing&&grip)grip.remove();
 }
 layoutScanBusy=false;return changed;
}
function layoutSnapshot(page){const sec=$('#t-'+page),all=[...sec.querySelectorAll('[data-lk]')].filter(layoutAvailable);return all.map(el=>({key:el.dataset.lk,group:el.parentElement.id||el.parentElement.className||'section',width:el.style.width,height:el.style.height}));}
function layoutApply(saved,page=activeTab()){if(!saved)return;
 const sec=$('#t-'+page);if(!sec)return;layoutScan(sec);const all=[...sec.querySelectorAll('[data-lk]')].filter(layoutAvailable),map=new Map(all.map(el=>[el.dataset.lk,el]));
 for(const item of saved){const el=map.get(item.key);if(!el)continue;el.style.width=item.width||'';el.style.height=item.height||''}
 // reordering reuses live nodes, without innerHTML (no loss of input focus or event listeners).
 const groups=new Map();for(const item of saved){const el=map.get(item.key);if(!el)continue;const p=el.parentElement;if(!groups.has(p))groups.set(p,[]);groups.get(p).push(el)}
 for(const [p,nodes] of groups){
   const slots=[...p.children].filter(el=>el.hasAttribute('data-lk'));
   if(slots.length===nodes.length&&slots.every((el,i)=>el===nodes[i]))continue;
   const ordered=[...nodes,...slots.filter(el=>!nodes.includes(el))];
   // Replace the SAME slots; leave other DOM nodes precisely where they were.
   // Appending to the parent pushed the operational form below history in older builds.
   const markers=slots.map(el=>{const marker=document.createComment('layout-slot');p.replaceChild(marker,el);return marker});
   ordered.forEach((el,i)=>{if(markers[i])p.replaceChild(el,markers[i])});
 }
}
function chooseLayout(){const select=$('#layoutPreset');if(!select)return;const current=select.value||S.layoutActive||'';
 select.innerHTML='<option value="">Padrão do site</option>'+S.layouts.map(x=>`<option value="${esc(x.id)}">${esc(x.name)}</option>`).join('');select.value=S.layouts.some(x=>x.id===current)?current:'';
}
function layoutButtons(){const saveBtn=$('#layoutSave'),cancelBtn=$('#layoutCancel');$('#layoutToggle').textContent=layoutEditing?'✥ Organizando...':'✥ Editar página';saveBtn.hidden=cancelBtn.hidden=!layoutEditing;$('#layoutToggle').disabled=layoutEditing;
 document.documentElement.dataset.layoutEdit=layoutEditing?'1':'0';layoutScan($('#t-'+activeTab()));}
function layoutBegin(){layoutEditing=true;layoutDraftBefore=layoutSnapshot(activeTab());layoutButtons();toast('Arraste pelo ⠿ e redimensione pelo canto inferior direito.');}
function layoutEnd(restore){if(restore&&layoutDraftBefore)layoutApply(layoutDraftBefore);layoutEditing=false;layoutDraftBefore=null;layoutButtons()}
function layoutConfirm(){const name=$('#layoutName').value.trim().slice(0,48);if(!name){$('#layoutName').focus();return}
 let pages={};const active=S.layouts.find(x=>x.id===S.layoutActive);if(active)pages={...active.pages};
 pages[activeTab()]=layoutSnapshot(activeTab());const item={id:uid(),name,pages};S.layouts.push(item);S.layoutActive=item.id;chooseLayout();save();layoutEnd(false);$('#layoutDialog').close();toast('Nova configuração salva em Personalizar → Layout.');
}
function applyLayoutForTab(){
 const sec=$('#t-'+activeTab());if(!sec)return;
 const added=layoutScan(sec),key=S.layoutActive||'default',active=S.layouts.find(x=>x.id===S.layoutActive);
 const config=active?.pages?.[activeTab()]||layoutDefaults[activeTab()];
 if(config&&(added||sec._lastAppliedLayout!==key)){layoutApply(config);sec._lastAppliedLayout=key}
 // Não atualizar todos os componentes a cada clique de navegação.
}
let EXTRAS_TAB='';
function extrasUpdate(){
 if(!S)return;
 const tab=activeTab(),sec=$('#t-'+tab);
 if(!sec)return;
 infoUpdate(sec);
 layoutScan(sec);
 if(!layoutDefaults[tab])layoutDefaults[tab]=layoutSnapshot(tab);
 if(!layoutEditing)applyLayoutForTab();
 if(EXTRAS_TAB!==tab){
  EXTRAS_TAB=tab;
  if($('#sInfo'))$('#sInfo').value=S.set.infoOn===0?'0':'1';
  chooseLayout();
 }
}
function daySeries(){const rows=V(),by={},balances=new Map(G().map(g=>[g.id,+g.init]));rows.forEach(r=>{const d=r.o.d;(by[d]=by[d]||{pl:0,balance:0});if(r.closed)by[d].pl+=r.pl;balances.set(r.g.id,r.next);by[d].balance=sum([...balances.values()])});return Object.keys(by).sort().map(d=>({d,pl:by[d].pl,balance:by[d].balance}))}
function renderOpsDash(){const list=daySeries(),type=$('#opsDashType')?.value||'line',metric=$('#opsDashMetric')?.value||'net',canvas=$('#opsDashCanvas'),tbl=$('#opsDashTable'),wrap=$('#opsDashChartWrap');if(!canvas||!tbl||!wrap)return;const labels=list.map(x=>fd(x.d)),data=list.map(x=>metric==='balance'?x.balance:x.pl),label=metric==='balance'?'Banca ao final do dia':'Lucro/prejuízo do dia',col=metric==='balance'?'#7e57c2':'#2ecc71';if(type==='table'){wrap.hidden=true;tbl.hidden=false;tbl.innerHTML='<div class="wrap"><table><thead><tr><th>Data</th><th>'+label+'</th></tr></thead><tbody>'+list.map(x=>`<tr><td>${fd(x.d)}</td><td class="${cls(metric==='balance'?x.balance:x.pl)}">${money(metric==='balance'?x.balance:x.pl)}</td></tr>`).join('')+'</tbody></table></div>';return}wrap.hidden=false;tbl.hidden=true;const ch=Chart.getChart(canvas)||new Chart(canvas,{type:type==='bar'?'bar':'line',data:{labels,datasets:[{label,data,borderColor:col,backgroundColor:type==='area'?'rgba(126,87,194,.18)':col,tension:.22,fill:type==='area'}]},options:{plugins:{legend:{display:false}}}});ch.type=type==='bar'?'bar':'line';ch.data.labels=labels;ch.data.datasets=[{label,data,borderColor:col,backgroundColor:type==='area'?'rgba(126,87,194,.18)':col,tension:.22,fill:type==='area'}];ch.update()}
function openOpsDash(){const d=$('#opsDashDialog');if(!d||d.open)return;d.showModal();requestAnimationFrame(()=>{if(d.open)renderOpsDash()})}
function closeOpsDash(){const d=$('#opsDashDialog');if(!d||!d.open)return;const a=document.activeElement;if(a instanceof HTMLElement && d.contains(a))a.blur();d.close('cancel');document.querySelectorAll('.chart-tip').forEach(el=>el.remove())}

function initExtras(){
 $('#pgDate').value=today();$('#pgGame').innerHTML='<option value="all">Todos os jogos</option>';
 $('#sInfo').value=S.set.infoOn===0?'0':'1';layoutButtons();
 const note=$('#noteDialog');note.addEventListener('close',()=>{if(note.returnValue==='save'){const o=S.ops.find(x=>x.id===noteTarget);if(o){o.n=$('#noteFull').value;const e=$(`.op[data-id="${o.id}"] .note`);if(e)e.value=o.n;save();toast('Anotação salva.')}}note.returnValue='';});
 const modal=$('#layoutDialog');modal.addEventListener('close',()=>{modal.returnValue='';});
 // Cancelar ignora a validação de nome obrigatório e nunca grava rascunhos.
 $('#layoutDialogCancel').addEventListener('click',e=>{e.preventDefault();e.stopPropagation();modal.close('cancel')});
 $('#noteDialogCancel').addEventListener('click',e=>{e.preventDefault();e.stopPropagation();note.close('cancel')});
 // Captura o clique antes de outros controles, inclusive quando um painel impede bubbling.
 document.addEventListener('click',e=>{
  if(!e.target.closest?.('.info-button,#infoPopover'))hideInfo();
 },true);
 document.addEventListener('keydown',e=>{if(e.key==='Escape')hideInfo()},true);
 document.addEventListener('click',e=>{const t=e.target;
  if(t.closest('.info-button')){e.stopPropagation();showInfo(t.closest('.info-button'));return}
  if(!t.closest('#infoPopover'))hideInfo();
  const b=t.closest('button');if(!b)return;
  if(b.matches('[data-summary-bank-edit]')){beginSummaryBankEdit();return}
  if(b.matches('[data-summary-bank-save]')){saveSummaryBankEdit();return}
  if(b.matches('[data-summary-bank-cancel]')){cancelSummaryBankEdit();return}
  if(b.matches('[data-bank-edit]')){bankToggle(b);return}
  if(b.id==='pgSave'){saveGoal();return}
  if(b.dataset.pgDel){const id=b.dataset.pgDel,el=b.closest('[data-pgoal]');animateRemoval(el,()=>{S.periodGoals=S.periodGoals.filter(g=>g.id!==id);save();renderPeriodGoals();renderCalGoals();toast('Meta removida')});return}
  if(b.dataset.pgEdit){const g=S.periodGoals.find(g=>g.id===b.dataset.pgEdit);if(!g)return;$('#pgType').value=g.type;$('#pgDate').type=g.type==='month'?'month':'date';$('#pgDate').value=g.period;$('#pgKind').value=g.kind;$('#pgValue').value=g.target;$('#pgGame').value=g.game;$('#pgSave').dataset.editId=g.id;$('#pgSave').textContent='✓ Atualizar meta';$('#pgDate').focus();return}
  if(b.id==='opsDashBtn'){openOpsDash();return}
  if(b.id==='opsDashClose'){e.preventDefault();e.stopPropagation();closeOpsDash();return}
  if(b.id==='layoutToggle'){layoutBegin();return}
  if(b.id==='layoutCancel'){layoutEnd(true);return}
  if(b.id==='layoutSave'){$('#layoutName').value='';$('#layoutDialog').returnValue='';$('#layoutDialog').showModal();$('#layoutName').focus();return}
  if(b.id==='layoutConfirm'){e.preventDefault();layoutConfirm();return}
  if(b.id==='layoutUse'){S.layoutActive=$('#layoutPreset').value;$('#t-'+activeTab())._lastAppliedLayout=null;save();applyLayoutForTab();toast('Layout selecionado');return}
  if(b.id==='layoutDelete'){const id=$('#layoutPreset').value;if(!id)return;S.layouts=S.layouts.filter(x=>x.id!==id);if(S.layoutActive===id)S.layoutActive='';chooseLayout();save();toast('Configuração de layout excluída.');return}
  if(b.id==='layoutReset'){S.layoutActive='';Object.entries(layoutDefaults).forEach(([k,v])=>layoutApply(v,k));chooseLayout();save();toast('Disposição original restaurada.');return}
 });
 document.addEventListener('click',e=>{const input=e.target.closest?.('.op input.note');if(input)openNote(input)},true);
 ['opsDashType','opsDashMetric'].forEach(id=>$('#'+id)?.addEventListener('change',renderOpsDash));
 const dash=$('#opsDashDialog');
 $('#opsDashClose')?.addEventListener('click',e=>{e.preventDefault();e.stopImmediatePropagation();closeOpsDash()});
 dash?.addEventListener('click',e=>{if(e.target===dash)closeOpsDash()});
 dash?.addEventListener('close',()=>{document.querySelectorAll('.chart-tip').forEach(el=>el.remove())});
 document.addEventListener('keydown',e=>{
  if(e.key!=='Enter'||e.repeat||e.isComposing)return;
  const t=e.target;if(t.matches('#summaryBankInput')){e.preventDefault();saveSummaryBankEdit();return}
  if(t.matches('.op [data-f="b"]')){e.preventDefault();if(!t.readOnly)confirmBank(t.closest('.op'),t);return}
  if(t.matches('[placeholder^="auto:"]')&&t.value===''){const raw=t.placeholder.replace(/^auto:\s*/,'').replace(/[^\d,.-]/g,'').replace(/\./g,'').replace(',','.');const n=Number(raw);if(Number.isFinite(n)){t.value=n;t.dispatchEvent(new Event('input',{bubbles:true}));e.preventDefault();}}
 },true);
 document.addEventListener('change',e=>{if(e.target.id==='pgType'){const date=$('#pgDate');date.type=e.target.value==='month'?'month':'date';date.value=e.target.value==='month'?today().slice(0,7):today()}if(e.target.id==='sInfo'){S.set.infoOn=+e.target.value;infoUpdate();save()}if(e.target.id==='pgFilter')renderPeriodGoals();},true);
 document.addEventListener('dragstart',e=>{if(!layoutEditing)return;const grip=e.target.closest('.layout-grip');if(!grip)return;layoutDragging=grip.parentElement;e.dataTransfer.effectAllowed='move';e.dataTransfer.setData('text/plain',layoutDragging.dataset.lk)},true);
 document.addEventListener('dragover',e=>{if(!layoutEditing||!layoutDragging)return;const target=e.target.closest('[data-lk]');if(target&&target!==layoutDragging&&target.parentElement===layoutDragging.parentElement){e.preventDefault();target.classList.add('drag-over')}},true);
 document.addEventListener('dragleave',e=>{e.target.closest?.('.drag-over')?.classList.remove('drag-over')},true);
 document.addEventListener('drop',e=>{const target=e.target.closest('[data-lk]');$$('.drag-over').forEach(x=>x.classList.remove('drag-over'));
 if(!layoutEditing||!layoutDragging||!target||target===layoutDragging||target.parentElement!==layoutDragging.parentElement)return;
 e.preventDefault();const p=target.parentElement;const moving=layoutDragging;const forward=!!(moving.compareDocumentPosition(target)&Node.DOCUMENT_POSITION_FOLLOWING);
 p.insertBefore(moving,forward?target.nextSibling:target);layoutDragging=null;},true);
 document.addEventListener('dragend',()=>{$$('.drag-over').forEach(x=>x.classList.remove('drag-over'));layoutDragging=null},true);
}

/* v3.5.4 — presets de navegação, localização e rolagem interna. */
const NAV_PLACEMENTS={rail:'side','rail-mini':'side',outline:'side',gradient:'side',
 'top-ribbon':'top','top-icons':'top','bottom-dock':'dock','bottom-icons':'dock','bottom-floating':'dock'};
function navReconcile(){
 const v=S.set;
 if(v.navAutoHide==null)v.navAutoHide=v.navBar==='floating'?1:0;
 if(v.navWidthSide==null)v.navWidthSide=216;
 if(v.navWidthIcons==null)v.navWidthIcons=76;
 if(v.navWidthHorizontal==null)v.navWidthHorizontal=650;
 if(v.navPrefsV===1)return;
 const legacy=v.sideSkin||'soft';
 const location=NAV_PLACEMENTS[legacy];if(location)v.lay=location;
 const bar={glass:'glass',outline:'outline',gradient:'gradient','top-ribbon':'solid','top-icons':'solid','bottom-floating':'floating','bottom-dock':'solid','bottom-icons':'solid',contrast:'dark'};
 const buttons={pill:'pill',boxed:'square',neon:'neon',outline:'outline',gradient:'gradient','top-ribbon':'underline','top-icons':'soft','bottom-floating':'soft','rail-mini':'soft'};
 v.navBar=bar[legacy]||'solid';v.navButtons=buttons[legacy]||'soft';
 v.navLabels=(['rail','rail-mini','top-icons','bottom-icons','bottom-floating'].includes(legacy))?'icons':'full';
 v.navSize=100;v.navPrefsV=1;v.sideSkin='soft';
 if(v.lay==='side'&&v.navLabels==='icons')v.sb=0;
}
function navWidthMode(){const v=S.set;return ['top','dock'].includes(v.lay)?'horizontal':v.navLabels==='icons'?'icons':'side'}
function navWidthSync(){const s=document.getElementById('sNavWidth'),n=document.getElementById('sNavWidthValue');if(!s||!n)return;const mode=navWidthMode(),v=S.set;
 const conf=mode==='horizontal'?[280,1220,10,+v.navWidthHorizontal||650]:mode==='icons'?[Math.max(68,Math.round(44*(+v.navSize||100)/100)+22),240,2,+v.navWidthIcons||76]:[130,460,2,+v.navWidthSide||216];
 s.min=String(conf[0]);s.max=String(conf[1]);s.step=String(conf[2]);s.value=String(conf[3]);n.textContent=conf[3]+' px';}
function navSetWidthFromControl(){const el=document.getElementById('sNavWidth');if(!el)return;const val=+el.value,mode=navWidthMode();if(mode==='horizontal')S.set.navWidthHorizontal=val;else if(mode==='icons')S.set.navWidthIcons=val;else S.set.navWidthSide=val;
 document.getElementById('sNavWidthValue').textContent=val+' px';}
let navHideTimer=0;
function navCanAutoHide(){return Number(S?.set?.navAutoHide??0)===1;}
function navSetHidden(hidden){
 const root=document.documentElement,side=document.getElementById('side');
 root.dataset.navHidden=hidden?'1':'0';
 const toggle=document.getElementById('sbt'),reveal=document.getElementById('navReveal');
 toggle?.setAttribute('aria-expanded',String(!hidden));
 reveal?.setAttribute('aria-expanded',String(!hidden));
 side?.setAttribute('aria-hidden',String(hidden));
 if(hidden){side?.setAttribute('inert','');}
 else {side?.removeAttribute('inert');}
}
function navShow(){clearTimeout(navHideTimer);navSetHidden(false);}
function navHide(immediate=false){
 clearTimeout(navHideTimer);if(!navCanAutoHide())return;
 const hide=()=>{if(!navCanAutoHide())return;const side=document.getElementById('side');
  if(!immediate&&side?.matches(':hover'))return;
  navSetHidden(true);
 };
 if(immediate)hide();else navHideTimer=setTimeout(hide,190);
}
function navSyncAutoHide(){
 const side=document.getElementById('side');
 if(!navCanAutoHide()){clearTimeout(navHideTimer);navSetHidden(false);return;}
 if(side?.matches(':hover'))navShow();
 else navHide(true);
}
function navMeasureHeader(){
 const header=document.querySelector('header.top');
 if(header)document.documentElement.style.setProperty('--app-header-height',header.offsetHeight+'px');
}
function navApplyLook(){
 const r=document.documentElement,v=S.set;
 r.dataset.lay=v.lay||'side';r.dataset.sideSkin='soft';
 r.dataset.navBar=v.navBar||'solid';r.dataset.navFloat=String(v.navBar==='floating'||Number(v.navAutoHide??0)===1?1:0);r.dataset.navButtons=v.navButtons||'soft';r.dataset.navLabels=v.navLabels||'full';r.dataset.navAutoHide=String(v.navAutoHide??1);
 const n=Math.max(75,Math.min(150,Number(v.navSize)||100));
 r.style.setProperty('--nav-scale',String(n/100));
 r.style.setProperty('--nav-button',`clamp(34px,calc(44px * ${n/100}),68px)`);
 r.style.setProperty('--nav-gap',`clamp(3px,calc(6px * ${n/100}),10px)`);
 r.style.setProperty('--nav-rail-width',`calc(24px + clamp(34px,calc(44px * ${n/100}),68px))`);
 r.style.setProperty('--nav-expanded-width',`${Math.max(130,Math.min(460,+v.navWidthSide||216))}px`);
 r.style.setProperty('--nav-rail-width',`${Math.max(68,Math.round(44*n/100)+22,Math.min(240,+v.navWidthIcons||76))}px`);
 r.style.setProperty('--nav-horizontal-width',`${Math.max(280,Math.min(1220,+v.navWidthHorizontal||650))}px`);
 // The menu geometry is updated in CSS; do not rebuild the charts or data.
 const side=document.getElementById('side');if(side)side.classList.toggle('c',false);
 if(['side','right'].includes(v.lay)&&v.navLabels==='full'&&v.sb)side?.classList.add('c');
 navMeasureHeader();
 navSyncAutoHide();
}

let navButtonFrame=0;
function navScrollButtonState(){
 navButtonFrame=0;
 const nav=document.getElementById('tabs'),up=document.getElementById('navScrollUp'),down=document.getElementById('navScrollDown');
 if(!nav||!up||!down)return;
 const vertical=['side','right'].includes(document.documentElement.dataset.lay);
 const scrollable=vertical && nav.scrollHeight>nav.clientHeight+3;
 up.hidden=down.hidden=!scrollable;
 if(scrollable){up.disabled=nav.scrollTop<=2;down.disabled=nav.scrollTop>=nav.scrollHeight-nav.clientHeight-2;}
}
function navScheduleButtonState(){if(navButtonFrame)return;navButtonFrame=requestAnimationFrame(navScrollButtonState);}
function navUpdate(ensureVisible=false){
 const nav=document.getElementById('tabs');if(!nav)return;
 const tabs=[...nav.querySelectorAll('button[data-t]')],on=nav.querySelector('button.on');
 tabs.forEach(b=>{if(b===on)b.setAttribute('aria-current','page');else b.removeAttribute('aria-current');});
 navScheduleButtonState();
 if(ensureVisible&&on){requestAnimationFrame(()=>{
  const horizontal=!['side','right'].includes(document.documentElement.dataset.lay);
  const start=horizontal?on.offsetLeft:on.offsetTop,
        size=horizontal?on.offsetWidth:on.offsetHeight,
        view=horizontal?nav.clientWidth:nav.clientHeight,
        scroll=horizontal?nav.scrollLeft:nav.scrollTop;
  if(view<=0)return;
  const lead=scroll+Math.max(0,view*.12),tail=scroll+view-Math.max(0,view*.12);
  if(start<lead||start+size>tail){const target=Math.max(0,start+size/2-view/2);if(horizontal)nav.scrollTo({left:target,behavior:'smooth'});else nav.scrollTo({top:target,behavior:'smooth'});}
 });}
}
let pageScrollFrame=0;
function updatePageScroll(){pageScrollFrame=0;const root=document.scrollingElement||document.documentElement;
 const max=root.scrollHeight-root.clientHeight,p=max>0?Math.max(0,Math.min(1,root.scrollTop/max)):0;
 const el=document.getElementById('pageScrollFill');if(el)el.style.transform=`scaleX(${p})`;
}
function navInitialize(){
 const side=document.getElementById('side'), sensor=document.getElementById('navEdgeSensor'),reveal=document.getElementById('navReveal');
 if(typeof ResizeObserver!=='undefined'){const head=document.querySelector('header.top');if(head)new ResizeObserver(navMeasureHeader).observe(head);}
 for(const b of [sensor,reveal]){b?.addEventListener('pointerenter',navShow);b?.addEventListener('click',navShow);}
 side?.addEventListener('pointerenter',navShow);
 side?.addEventListener('pointerleave',()=>navHide());
 side?.addEventListener('focusin',()=>{if(navCanAutoHide())navShow()});
 document.addEventListener('keydown',e=>{if(e.key==='Escape'&&navCanAutoHide())navHide(true)});
 const reset=document.getElementById('navStyleReset');
 reset?.addEventListener('click',()=>{
  Object.assign(S.set,{navBar:'solid',navButtons:'soft',navLabels:'full',navSize:100,navAutoHide:0,navWidthSide:216,navWidthIcons:76,navWidthHorizontal:650});
  $('#sNavBar').value='solid';$('#sNavButtons').value='soft';$('#sNavLabels').value='full';
  $('#sNavSize').value='100';$('#sNavSizeValue').textContent='100%';$('#sNavAutoHide').value='0';navWidthSync();
  navApplyLook();navUpdate(true);save();
 });
 const tabsEl=document.getElementById('tabs');
 tabsEl?.addEventListener('scroll',navScheduleButtonState,{passive:true});
 for(const [id,direction] of [['navScrollUp',-1],['navScrollDown',1]]){
  document.getElementById(id)?.addEventListener('click',()=>{
   if(!tabsEl)return;
   tabsEl.scrollBy({top:direction*Math.max(140,Math.min(260,tabsEl.clientHeight*.55)),behavior:'smooth'});
   navScheduleButtonState();
  });
 }
 window.addEventListener('scroll',()=>{if(!pageScrollFrame)pageScrollFrame=requestAnimationFrame(updatePageScroll);},{passive:true});
 window.addEventListener('resize',()=>{navMeasureHeader();updatePageScroll();navUpdate(false);},{passive:true});
 document.getElementById('tabs')?.addEventListener('keydown',e=>{
  const b=e.target.closest?.('button[data-t]');if(!b)return;
  const tabs=[...document.querySelectorAll('#tabs button[data-t]')];let i=tabs.indexOf(b);
  const horizontal=!['side','right'].includes(document.documentElement.dataset.lay);
  const backward=horizontal?'ArrowLeft':'ArrowUp',forward=horizontal?'ArrowRight':'ArrowDown';
  if(e.key===backward)i=(i-1+tabs.length)%tabs.length;
  else if(e.key===forward)i=(i+1)%tabs.length;
  else if(e.key==='Home')i=0;else if(e.key==='End')i=tabs.length-1;else return;
  e.preventDefault();tabs[i]?.focus();tabs[i]?.click();
 });
 navUpdate(false);updatePageScroll();
}
/* v3.5.11 — fases de flutuação embaralhadas, sem timers e sem
   varrer os cartões ao alternar de aba. O identificador de cada elemento
   é derivado da seção, grupo, posição e rótulo para permanecer estável. */
function floatHash32(value){
 let hash=2166136261;
 for(let i=0;i<value.length;i++){hash^=value.charCodeAt(i);hash=Math.imul(hash,16777619)}
 return hash>>>0;
}
function floatSeedOne(el){
 if(el.dataset.floatSeeded==='1')return;
 const sec=el.closest('main > section')?.id||'site';
 const group=el.closest('[data-id],[data-w]');
 let index=0,prev=el;
 while((prev=prev.previousElementSibling))index++;
 const label=(el.querySelector(':scope > h3, :scope > span, :scope > .summary-bank-head')?.textContent||'').slice(0,48);
 const token=[sec,group?.getAttribute('data-id')||group?.getAttribute('data-w')||'',el.id,el.classList.contains('box')?'box':'card',index,label].join('|');
 const phase=floatHash32(token)/4294967296;
 const amplitude=.78+(floatHash32('a|'+token)/4294967296)*.44;
 el.style.setProperty('--float-phase',phase.toFixed(6));
 el.style.setProperty('--float-amplitude',amplitude.toFixed(4));
 el.dataset.floatSeeded='1';
}
function floatSeedTree(node){
 if(!node||node.nodeType!==1)return;
 if(node.matches?.('.card,.box'))floatSeedOne(node);
 node.querySelectorAll?.('.card,.box').forEach(floatSeedOne);
}
function initializeFloatingPhases(){
 const main=document.querySelector('main');if(!main)return;
 floatSeedTree(main);
 const obs=new MutationObserver(records=>{
  for(const record of records){for(const added of record.addedNodes){
   if(added.nodeType!==1)continue;
   if(added.matches?.('.card,.box')||added.querySelector?.('.card,.box'))floatSeedTree(added);
  }}
 });
 obs.observe(main,{subtree:true,childList:true});
}
load();navReconcile();fxInit();initExtras();all();navInitialize();$('#diDate').value=today();initializeFloatingPhases();



