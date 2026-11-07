


/* Gráficos locais leves. Não dependem de CDN ou conexão com a internet.
   Interface compatível com as operações de gráfico utilizadas por este projeto. */
(function(){
 'use strict';
 const instances=new WeakMap();
 const fmt=n=>new Intl.NumberFormat('pt-BR',{maximumFractionDigits:1,notation:Math.abs(n)>99999?'compact':'standard'}).format(n);
 const css=(key,def)=>getComputedStyle(document.documentElement).getPropertyValue(key).trim()||def;
 const rgb=(c,f)=>c&&c!=='transparent' ? c : f;
 const palette=['#7e57c2','#2ecc71','#00acc1','#ff9800','#e53935','#42a5f5','#fbc02d'];
 class Chart{
  static defaults={color:'#9a9a9a',borderColor:'#2f2f2f'};
  static getChart(el){return instances.get(el)||undefined}
  constructor(canvas,config){
   this.canvas=typeof canvas==='string'?document.querySelector(canvas):canvas;
   if(!this.canvas||!this.canvas.getContext)return;
   this.ctx=this.canvas.getContext('2d');
   this.type=config.type||'line';
   this.data=config.data||{labels:[],datasets:[]};
   this.options=config.options||{};
   this._boundMove=e=>this.hover(e);
   this._boundLeave=()=>{this.tip?.remove();this.tip=null};
   this.canvas.addEventListener('pointermove',this._boundMove,{passive:true});
   this.canvas.addEventListener('pointerleave',this._boundLeave,{passive:true});
   instances.set(this.canvas,this);this.update();
  }
  destroy(){this._boundLeave();this.canvas.removeEventListener('pointermove',this._boundMove);this.canvas.removeEventListener('pointerleave',this._boundLeave);instances.delete(this.canvas)}
  reset(){}
  resize(){
   if(!this.canvas?.isConnected)return false;
   const box=this.canvas.parentElement;
   // clientWidth/clientHeight não incluem zoom, giro ou translação
   // temporários da aba. getBoundingClientRect() causava saltos e
   // canvas com resolução diferente após a transição.
   if(!box||this.canvas.closest('section[hidden]'))return false;
   const w=Math.floor(box.clientWidth),h=Math.floor(box.clientHeight);
   if(w<30||h<30)return false;
   const d=Math.min(2,window.devicePixelRatio||1);
   const bw=Math.round(w*d),bh=Math.round(h*d);
   if(this.canvas.width!==bw||this.canvas.height!==bh){
    this.canvas.width=bw;this.canvas.height=bh;
   }
   // O tamanho visual pertence ao contêiner, não ao backing store.
   // Evita que canvas.width reforce o tamanho mínimo do grid.
   if(this.canvas.style.width!=='100%')this.canvas.style.width='100%';
   if(this.canvas.style.height!=='100%')this.canvas.style.height='100%';
   this.ctx.setTransform(d,0,0,d,0,0);this.w=w;this.h=h;return true;
  }
  update(){
   if(!this.resize())return;
   const {ctx:c,w,h}=this;c.clearRect(0,0,w,h);
   this.type=this._t||this.type;
   if(this.type==='pie'||this.type==='doughnut')this.drawPie();
   else this.drawCartesian();
  }
  font(n=11){return `${n}px system-ui,"Segoe UI",sans-serif`}
  line(x1,y1,x2,y2,color,width=1){const c=this.ctx;c.beginPath();c.strokeStyle=color;c.lineWidth=width;c.moveTo(x1,y1);c.lineTo(x2,y2);c.stroke()}
  drawEmpty(label='Sem dados neste período'){
   const c=this.ctx;c.save();c.fillStyle=Chart.defaults.color;c.font=this.font(12);c.textAlign='center';c.fillText(label,this.w/2,this.h/2);c.restore();
  }
  drawLegend(ds,labels){
   const c=this.ctx,w=this.w,h=this.h,max=7;
   c.textAlign='left';c.font=this.font(10);
   let x=12,y=h-15;
   ds.slice(0,max).forEach((s,i)=>{
    const name=(s.label||labels?.[i]||'Série '+(i+1)).slice(0,26);
    const txtW=c.measureText(name).width;
    if(x+txtW+24>w){x=12;y-=15}
    c.fillStyle=Array.isArray(s.backgroundColor)?s.backgroundColor[0]:s.borderColor||s.backgroundColor||palette[i%palette.length];
    c.fillRect(x,y-8,8,8);c.fillStyle=Chart.defaults.color;c.fillText(name,x+12,y);
    x+=txtW+28;
   });
  }
  drawCartesian(){
   const c=this.ctx,w=this.w,h=this.h;
   const ds=(this.data.datasets||[]).filter(s=>Array.isArray(s.data)),labels=this.data.labels||[];
   const len=Math.max(labels.length, ...ds.map(s=>s.data.length),0);
   if(!len||!ds.length){this.drawEmpty();return}
   const values=ds.flatMap(s=>s.data).filter(v=>v!==null&&Number.isFinite(+v)).map(Number);
   if(!values.length){this.drawEmpty();return}
   const isBar=this.type==='bar';
   let min=Math.min(0,...values),max=Math.max(0,...values);
   if(min===max){max=min+1}
   const span=max-min;
   min-=span*.08;max+=span*.08;
   const useLegend=this.options?.plugins?.legend?.display!==false && ds.length>1;
   const left=58,top=12,right=13,bottom=useLegend?49:31;
   const pw=Math.max(1,w-left-right),ph=Math.max(1,h-top-bottom);
   const sx=i=>left+(len===1?.5:i/(len-1))*pw;
   const sy=n=>top+(max-n)/(max-min)*ph;
   c.save();c.font=this.font();
   for(let i=0;i<=4;i++){
    const v=min+(max-min)*(1-i/4),y=top+i/4*ph;
    this.line(left,y,w-right,y,css('--ln','#303030'),.75);
    c.fillStyle=Chart.defaults.color;c.textAlign='right';c.fillText(fmt(v),left-8,y+3);
   }
   this.line(left,sy(0),w-right,sy(0),css('--mut','#9a9a9a'),1);
   c.textAlign='center';c.fillStyle=Chart.defaults.color;
   const maxTicks=Math.max(2,Math.floor(pw/74)),skip=Math.max(1,Math.ceil(len/maxTicks));
   for(let i=0;i<len;i+=skip)c.fillText(String(labels[i]??'').slice(0,16),isBar?left+(i+.5)*pw/len:sx(i),h-bottom+15);
   if(isBar){
    const group=pw/len,bar=Math.min(22,group*.75/Math.max(1,ds.length));
    ds.forEach((s,si)=>s.data.forEach((v,i)=>{
     if(v===null||!Number.isFinite(+v))return;
     const x=left+i*group+group/2+(si-(ds.length-1)/2)*bar,
      y0=sy(0),yv=sy(Number(v)),hh=Math.max(1,Math.abs(y0-yv));
     c.fillStyle=Array.isArray(s.backgroundColor)?s.backgroundColor[i%s.backgroundColor.length]:rgb(s.backgroundColor||s.borderColor,palette[si%palette.length]);
     c.beginPath();c.roundRect(x-bar*.43,Math.min(y0,yv),Math.max(2,bar*.86),hh,Math.min(4,hh/2));c.fill();
    }))
   }else{
    ds.forEach((s,si)=>{
     c.strokeStyle=rgb(s.borderColor,palette[si%palette.length]);c.lineWidth=2.25;c.lineJoin='round';c.lineCap='round';c.beginPath();
     let active=false;
     s.data.forEach((v,i)=>{if(v===null||!Number.isFinite(+v)){active=false;return}const x=sx(i),y=sy(Number(v));if(!active){c.moveTo(x,y);active=true}else c.lineTo(x,y)});
     c.stroke();
     if(s.fill){const nums=s.data.map((v,i)=>v===null||!Number.isFinite(+v)?null:{x:sx(i),y:sy(+v)}).filter(Boolean);if(nums.length){c.save();c.fillStyle=s.backgroundColor||'rgba(126,87,194,.16)';c.globalAlpha=.26;c.beginPath();c.moveTo(nums[0].x,sy(0));nums.forEach(p=>c.lineTo(p.x,p.y));c.lineTo(nums[nums.length-1].x,sy(0));c.closePath();c.fill();c.restore()}}
     if(len<=45)s.data.forEach((v,i)=>{if(v===null||!Number.isFinite(+v))return;c.beginPath();c.fillStyle=rgb(s.borderColor,palette[si%palette.length]);c.arc(sx(i),sy(+v),2.5,0,Math.PI*2);c.fill()});
    })
   }
   if(useLegend)this.drawLegend(ds);
   c.restore();
   this._plot={left,top,pw,ph,len,labels,ds,sx,sy,min,max,isBar};
  }
  drawPie(){
   const c=this.ctx,w=this.w,h=this.h,ds=this.data.datasets||[];
   const vals=(ds[0]?.data||[]).map(x=>Math.abs(Number(x)||0)),sum=vals.reduce((a,b)=>a+b,0);
   if(!sum){this.drawEmpty();return}
   const labels=this.data.labels||[];
   const r=Math.max(16,Math.min(w*.21,h*.34)),cx=w*.34,cy=h*.46;
   const colors=ds[0].backgroundColor||palette;
   let start=-Math.PI/2;const segments=[];
   vals.forEach((v,i)=>{
    if(!v)return;
    const end=start+v/sum*Math.PI*2;
    c.beginPath();c.moveTo(cx,cy);c.arc(cx,cy,r,start,end);c.closePath();c.fillStyle=Array.isArray(colors)?colors[i%colors.length]:colors;c.fill();
    segments.push({i,start,end,v});start=end;
   });
   if(this.type==='doughnut'){
    c.beginPath();c.fillStyle=css('--pn','#1b1b1b');c.arc(cx,cy,r*.53,0,Math.PI*2);c.fill();
   }
   const row=16,tx=Math.min(cx+r+16,w*.6),maxRows=Math.floor((h-20)/row);
   labels.slice(0,maxRows).forEach((l,i)=>{
    c.fillStyle=Array.isArray(colors)?colors[i%colors.length]:colors;c.fillRect(tx,18+i*row,9,9);
    c.fillStyle=Chart.defaults.color;c.font=this.font(10.5);c.textAlign='left';
    const name=String(l).length>20?String(l).slice(0,18)+'…':String(l);
    c.fillText(`${name}  ${fmt(vals[i])}`,tx+14,26+i*row);
   });
   this._pie={cx,cy,r,segments,sum,labels};this._plot=null;
  }
  hover(e){
   if(!this.ctx||!this.w)return;
   const rect=this.canvas.getBoundingClientRect(),x=e.clientX-rect.left,y=e.clientY-rect.top;
   let text='';
   if(this._plot){const p=this._plot;if(x>=p.left-10&&x<=p.left+p.pw+10&&y>=p.top&&y<=p.top+p.ph+5){
    const i=Math.max(0,Math.min(p.len-1,Math.round(p.isBar?(x-p.left)/p.pw*p.len-.5:(x-p.left)/p.pw*(p.len-1))));
    text=`${p.labels[i]??'Dados'} · `+p.ds.map(s=>`${s.label||'Valor'}: ${s.data[i]==null?'—':fmt(s.data[i])}`).join(' | ');
   }}else if(this._pie){const p=this._pie,dist=Math.hypot(x-p.cx,y-p.cy);if(dist<=p.r){let a=Math.atan2(y-p.cy,x-p.cx);if(a<-Math.PI/2)a+=Math.PI*2;const seg=p.segments.find(z=>a>=z.start&&a<=z.end);if(seg)text=`${p.labels[seg.i]||'Valor'}: ${fmt(seg.v)} (${fmt(seg.v/p.sum*100)}%)`}}
   if(!text){this._boundLeave();return}
   if(!this.tip){this.tip=document.createElement('div');this.tip.className='chart-tip';document.body.append(this.tip)}
   this.tip.textContent=text;this.tip.style.left=Math.min(innerWidth-260,e.clientX+13)+'px';this.tip.style.top=Math.max(10,e.clientY-42)+'px';
  }
 }
 window.Chart=Chart;
 addEventListener('resize',()=>{clearTimeout(Chart._rs);Chart._rs=setTimeout(()=>{document.querySelectorAll('canvas').forEach(cv=>instances.get(cv)?.update())},125)},{passive:true});
})();



