var kontra=function(){let t=()=>{},e="position:absolute;width:1px;height:1px;overflow:hidden;clip:rect(0,0,0,0);";function i(t,e){let i=e.parentNode;if(t.setAttribute("data-kontra",""),i){let s=i.querySelector("[data-kontra]:last-of-type")||e;i.insertBefore(t,s.nextSibling)}else document.body.appendChild(t)}function s(t,e){let i=t.indexOf(e);if(-1!=i)return t.splice(i,1),!0}let n,h,r={};function a(t,e){r[t]=r[t]||[],r[t].push(e)}function o(t,...e){(r[t]||[]).map((t=>t(...e)))}let d={get:(e,i)=>"_proxy"==i||t};function c(){return n}function l(){return h}class u{constructor({spriteSheet:t,frames:e,frameRate:i,loop:s=!0}){this.spriteSheet=t,this.frames=e,this.frameRate=i,this.loop=s;let{width:n,height:h,margin:r=0}=t.frame;this.width=n,this.height=h,this.margin=r,this._f=0,this._a=0}clone(){return new u(this)}reset(){this._f=0,this._a=0}update(t=1/60){if(this.loop||this._f!=this.frames.length-1)for(this._a+=t;this._a*this.frameRate>=1;)this._f=++this._f%this.frames.length,this._a-=1/this.frameRate}render({x:t,y:e,width:i=this.width,height:s=this.height,context:n=l()}){let h=this.frames[this._f]/this.spriteSheet._f|0,r=this.frames[this._f]%this.spriteSheet._f|0;n.drawImage(this.spriteSheet.image,r*this.width+(2*r+1)*this.margin,h*this.height+(2*h+1)*this.margin,this.width,this.height,t,e,i,s)}}function p(){return new u(...arguments)}let _=/(jpeg|jpg|gif|png|webp)$/,f=/(wav|mp3|ogg|aac)$/,g=/^\//,m=/\/$/,w=new WeakMap,x="",y="",b="";function v(t,e){return new URL(t,e).href}function j(t,e){return[t.replace(m,""),t?e.replace(g,""):e].filter((t=>t)).join("/")}function C(t){return t.split(".").pop()}function A(t){let e=t.replace("."+C(t),"");return 2==e.split("/").length?e.replace(g,""):e}let S={},k={},M={};function E(){window.__k||(window.__k={dm:w,u:v,d:M,i:S})}function P(t){return E(),new Promise(((e,i)=>{let s,n,h;if(s=j(x,t),S[s])return e(S[s]);n=new Image,n.onload=function(){h=v(s,window.location.href),S[A(t)]=S[s]=S[h]=this,o("assetLoaded",this,t),e(this)},n.onerror=function(){i(s)},n.src=s}))}function O(t){return new Promise(((e,i)=>{let s,n,h,r,a=t;var d;return s=new Audio,n={wav:(d=s).canPlayType('audio/wav; codecs="1"'),mp3:d.canPlayType("audio/mpeg;"),ogg:d.canPlayType('audio/ogg; codecs="vorbis"'),aac:d.canPlayType("audio/aac;")},(t=[].concat(t).reduce(((t,e)=>t||(n[C(e)]?e:null)),0))?(h=j(y,t),k[h]?e(k[h]):(s.addEventListener("canplay",(function(){r=v(h,window.location.href),k[A(t)]=k[h]=k[r]=this,o("assetLoaded",this,t),e(this)})),s.onerror=function(){i(h)},s.src=h,void s.load())):i(a)}))}function L(t){let e,i;return E(),e=j(b,t),M[e]?Promise.resolve(M[e]):fetch(e).then((t=>{if(!t.ok)throw t;return t.clone().json().catch((()=>t.text()))})).then((s=>(i=v(e,window.location.href),"object"==typeof s&&w.set(s,i),M[A(t)]=M[e]=M[i]=s,o("assetLoaded",s,t),s)))}function I(t,e){let i=Math.sin(e),s=Math.cos(e);return{x:t.x*s-t.y*i,y:t.x*i+t.y*s}}function G(t,e,i){return Math.min(Math.max(t,i),e)}function D(t,e){return[t,e]=[t,e].map((t=>N(t))),t.x<e.x+e.width&&t.x+t.width>e.x&&t.y<e.y+e.height&&t.y+t.height>e.y}function N(t){let{x:e=0,y:i=0,width:s,height:n}=t.world||t;return t.mapwidth&&(s=t.mapwidth,n=t.mapheight),t.anchor&&(e-=s*t.anchor.x,i-=n*t.anchor.y),s<0&&(e+=s,s*=-1),n<0&&(i+=n,n*=-1),{x:e,y:i,width:s,height:n}}class X{constructor(t=0,e=0,i={}){this.x=t,this.y=e,i._c&&(this.clamp(i._a,i._b,i._d,i._e),this.x=t,this.y=e)}add(t){return new X(this.x+t.x,this.y+t.y,this)}subtract(t){return new X(this.x-t.x,this.y-t.y,this)}scale(t){return new X(this.x*t,this.y*t)}normalize(t=this.length()){return new X(this.x/t,this.y/t)}dot(t){return this.x*t.x+this.y*t.y}length(){return Math.hypot(this.x,this.y)}distance(t){return Math.hypot(this.x-t.x,this.y-t.y)}angle(t){return Math.acos(this.dot(t)/(this.length()*t.length()))}clamp(t,e,i,s){this._c=!0,this._a=t,this._b=e,this._d=i,this._e=s}get x(){return this._x}get y(){return this._y}set x(t){this._x=this._c?G(this._a,this._d,t):t}set y(t){this._y=this._c?G(this._b,this._e,t):t}}function Y(){return new X(...arguments)}class z extends class{constructor(t){return this.init(t)}init(t={}){this.position=Y(),this.velocity=Y(),this.acceleration=Y(),this.ttl=1/0,Object.assign(this,t)}update(t){this.advance(t)}advance(t){let e=this.acceleration;t&&(e=e.scale(t)),this.velocity=this.velocity.add(e);let i=this.velocity;t&&(i=i.scale(t)),this.position=this.position.add(i),this._pc(),this.ttl--}get dx(){return this.velocity.x}get dy(){return this.velocity.y}set dx(t){this.velocity.x=t}set dy(t){this.velocity.y=t}get ddx(){return this.acceleration.x}get ddy(){return this.acceleration.y}set ddx(t){this.acceleration.x=t}set ddy(t){this.acceleration.y=t}isAlive(){return this.ttl>0}_pc(){}}{init({width:t=0,height:e=0,context:i=l(),render:s=this.draw,update:n=this.advance,children:h=[],anchor:r={x:0,y:0},opacity:a=1,rotation:o=0,scaleX:d=1,scaleY:c=1,...u}={}){this._c=[],super.init({width:t,height:e,context:i,anchor:r,opacity:a,rotation:o,scaleX:d,scaleY:c,...u}),this._di=!0,this._uw(),this.addChild(h),this._rf=s,this._uf=n}update(t){this._uf(t),this.children.map((e=>e.update&&e.update(t)))}render(){let t=this.context;t.save(),(this.x||this.y)&&t.translate(this.x,this.y),this.rotation&&t.rotate(this.rotation),1==this.scaleX&&1==this.scaleY||t.scale(this.scaleX,this.scaleY);let e=-this.width*this.anchor.x,i=-this.height*this.anchor.y;(e||i)&&t.translate(e,i),this.context.globalAlpha=this.opacity,this._rf(),(e||i)&&t.translate(-e,-i),this.children.map((t=>t.render&&t.render())),t.restore()}draw(){}_pc(){this._uw(),this.children.map((t=>t._pc()))}get x(){return this.position.x}get y(){return this.position.y}set x(t){this.position.x=t,this._pc()}set y(t){this.position.y=t,this._pc()}get width(){return this._w}set width(t){this._w=t,this._pc()}get height(){return this._h}set height(t){this._h=t,this._pc()}_uw(){if(!this._di)return;let{_wx:t=0,_wy:e=0,_wo:i=1,_wr:s=0,_wsx:n=1,_wsy:h=1}=this.parent||{};this._wx=this.x,this._wy=this.y,this._ww=this.width,this._wh=this.height,this._wo=i*this.opacity,this._wsx=n*this.scaleX,this._wsy=h*this.scaleY,this._wx=this._wx*n,this._wy=this._wy*h,this._ww=this.width*this._wsx,this._wh=this.height*this._wsy,this._wr=s+this.rotation;let{x:r,y:a}=I({x:this._wx,y:this._wy},s);this._wx=r,this._wy=a,this._wx+=t,this._wy+=e}get world(){return{x:this._wx,y:this._wy,width:this._ww,height:this._wh,opacity:this._wo,rotation:this._wr,scaleX:this._wsx,scaleY:this._wsy}}set children(t){this.removeChild(this._c),this.addChild(t)}get children(){return this._c}addChild(...e){e.flat().map((e=>{this.children.push(e),e.parent=this,e._pc=e._pc||t,e._pc()}))}removeChild(...t){t.flat().map((t=>{s(this.children,t)&&(t.parent=null,t._pc())}))}get opacity(){return this._opa}set opacity(t){this._opa=t,this._pc()}get rotation(){return this._rot}set rotation(t){this._rot=t,this._pc()}setScale(t,e=t){this.scaleX=t,this.scaleY=e}get scaleX(){return this._scx}set scaleX(t){this._scx=t,this._pc()}get scaleY(){return this._scy}set scaleY(t){this._scy=t,this._pc()}}function T(){return new z(...arguments)}class R extends z{init({image:t,width:e=(t?t.width:void 0),height:i=(t?t.height:void 0),...s}={}){super.init({image:t,width:e,height:i,...s})}get animations(){return this._a}set animations(t){let e,i;for(e in this._a={},t)this._a[e]=t[e].clone(),i=i||this._a[e];this.currentAnimation=i,this.width=this.width||i.width,this.height=this.height||i.height}playAnimation(t){this.currentAnimation=this.animations[t],this.currentAnimation.loop||this.currentAnimation.reset()}advance(t){super.advance(t),this.currentAnimation&&this.currentAnimation.update(t)}draw(){this.image&&this.context.drawImage(this.image,0,0,this.image.width,this.image.height),this.currentAnimation&&this.currentAnimation.render({x:0,y:0,width:this.width,height:this.height,context:this.context}),this.color&&(this.context.fillStyle=this.color,this.context.fillRect(0,0,this.width,this.height))}}let F=/(\d+)(\w+)/;class B extends z{init({text:t="",textAlign:e="",lineHeight:i=1,font:s=l().font,...n}={}){t=""+t,super.init({text:t,textAlign:e,lineHeight:i,font:s,...n}),this._p()}get width(){return this._w}set width(t){this._d=!0,this._w=t,this._fw=t}get text(){return this._t}set text(t){this._d=!0,this._t=""+t}get font(){return this._f}set font(t){this._d=!0,this._f=t,this._fs=function(t){let e=t.match(F),i=+e[1];return{size:i,unit:e[2],computed:i}}(t).computed}get lineHeight(){return this._lh}set lineHeight(t){this._d=!0,this._lh=t}render(){this._d&&this._p(),super.render()}_p(){this._s=[],this._d=!1;let t=this.context;if(t.font=this.font,!this._s.length&&this._fw){let e=this.text.split(" "),i=0,s=2;for(;s<=e.length;s++){let n=e.slice(i,s).join(" ");t.measureText(n).width>this._fw&&(this._s.push(e.slice(i,s-1).join(" ")),i=s-1)}this._s.push(e.slice(i,s).join(" "))}if(!this._s.length&&this.text.includes("\n")){let e=0;this.text.split("\n").map((i=>{this._s.push(i),e=Math.max(e,t.measureText(i).width)})),this._w=this._fw||e}this._s.length||(this._s.push(this.text),this._w=this._fw||t.measureText(this.text).width),this.height=this._fs+(this._s.length-1)*this._fs*this.lineHeight,this._uw()}draw(){let t=0,e=this.textAlign,i=this.context;e=this.textAlign||("rtl"==i.canvas.dir?"right":"left"),t="right"==e?this.width:"center"==e?this.width/2|0:0,this._s.map(((s,n)=>{i.textBaseline="top",i.textAlign=e,i.fillStyle=this.color,i.font=this.font,i.fillText(s,t,this._fs*this.lineHeight*n)}))}}function W(){return new B(...arguments)}let H=new WeakMap,U={},q={},K={0:"left",1:"middle",2:"right"};function V(t,e){let{x:i,y:s,width:n,height:h}=N(t);do{i-=t.sx||0,s-=t.sy||0}while(t=t.parent);let r=e.x-Math.max(i,Math.min(e.x,i+n)),a=e.y-Math.max(s,Math.min(e.y,s+h));return r*r+a*a<e.radius*e.radius}function $(t){let e=t._lf.length?t._lf:t._cf;for(let i=e.length-1;i>=0;i--){let s=e[i];if(s.collidesWithPointer?s.collidesWithPointer(t):V(s,t))return s}}function J(t,e){return parseFloat(t.getPropertyValue(e))||0}function Q(t){let e=null!=t.button?K[t.button]:"left";q[e]=!0,st(t,"onDown")}function Z(t){let e=null!=t.button?K[t.button]:"left";q[e]=!1,st(t,"onUp")}function tt(t){st(t,"onOver")}function et(t){H.get(t.target)._oo=null,q={}}function it(t,e,i){let s=$(t);s&&s[e]&&s[e](i),U[e]&&U[e](i,s),"onOver"==e&&(s!=t._oo&&t._oo&&t._oo.onOut&&t._oo.onOut(i),t._oo=s)}function st(t,e){t.preventDefault();let i=t.target,s=H.get(i),{scaleX:n,scaleY:h,offsetX:r,offsetY:a}=function(t){let{canvas:e,_s:i}=t,s=e.getBoundingClientRect(),n="none"!=i.transform?i.transform.replace("matrix(","").split(","):[1,1,1,1],h=parseFloat(n[0]),r=parseFloat(n[3]),a=(J(i,"border-left-width")+J(i,"border-right-width"))*h,o=(J(i,"border-top-width")+J(i,"border-bottom-width"))*r,d=(J(i,"padding-left")+J(i,"padding-right"))*h,c=(J(i,"padding-top")+J(i,"padding-bottom"))*r;return{scaleX:(s.width-a-d)/e.width,scaleY:(s.height-o-c)/e.height,offsetX:s.left+(J(i,"border-left-width")+J(i,"padding-left"))*h,offsetY:s.top+(J(i,"border-top-width")+J(i,"padding-top"))*r}}(s);t.type.includes("touch")?(Array.from(t.touches).map((({clientX:t,clientY:e,identifier:i})=>{let o=s.touches[i];o||(o=s.touches[i]={start:{x:(t-r)/n,y:(e-a)/h}},s.touches.length++),o.changed=!1})),Array.from(t.changedTouches).map((({clientX:i,clientY:d,identifier:c})=>{let l=s.touches[c];l.changed=!0,l.x=s.x=(i-r)/n,l.y=s.y=(d-a)/h,it(s,e,t),o("touchChanged",t,s.touches),"onUp"==e&&(delete s.touches[c],s.touches.length--,s.touches.length||o("touchEnd"))}))):(s.x=(t.clientX-r)/n,s.y=(t.clientY-a)/h,it(s,e,t))}function nt({radius:t=5,canvas:e=c()}={}){let i=H.get(e);if(!i){let s=window.getComputedStyle(e);i={x:0,y:0,radius:t,touches:{length:0},canvas:e,_cf:[],_lf:[],_o:[],_oo:null,_s:s},H.set(e,i)}return e.addEventListener("mousedown",Q),e.addEventListener("touchstart",Q),e.addEventListener("mouseup",Z),e.addEventListener("touchend",Z),e.addEventListener("touchcancel",Z),e.addEventListener("blur",et),e.addEventListener("mousemove",tt),e.addEventListener("touchmove",tt),i._t||(i._t=!0,a("tick",(()=>{i._lf.length=0,i._cf.map((t=>{i._lf.push(t)})),i._cf.length=0}))),i}function ht(...t){t.flat().map((t=>{let e=t.context?t.context.canvas:c(),i=H.get(e);t._r||(t._r=t.render,t.render=function(){i._cf.push(this),this._r()},i._o.push(t))}))}function rt(t,e){let i=t[0].toUpperCase()+t.substr(1);U["on"+i]=e}function at(t){let e=t[0].toUpperCase()+t.substr(1);U["on"+e]=0}class ot extends R{init({padX:s=0,padY:n=0,text:h,disabled:r=!1,onDown:a,onUp:o,...d}={}){super.init({padX:s,padY:n,...d}),this.textNode=W({...h,context:this.context}),this.width||(this.width=this.textNode.width,this.height=this.textNode.height),ht(this),this.addChild(this.textNode),this._od=a||t,this._ou=o||t;let c=this._dn=document.createElement("button");c.style=e,c.textContent=this.text,r&&this.disable(),c.addEventListener("focus",(()=>this.focus())),c.addEventListener("blur",(()=>this.blur())),c.addEventListener("keydown",(t=>this._kd(t))),c.addEventListener("keyup",(t=>this._ku(t))),i(c,this.context.canvas),this._uw(),this._p()}get text(){return this.textNode.text}set text(t){this._d=!0,this.textNode.text=t}destroy(){this._dn.remove()}_p(){this.text!=this._dn.textContent&&(this._dn.textContent=this.text),this.textNode._p();let t=this.textNode.width+2*this.padX,e=this.textNode.height+2*this.padY;this.width=Math.max(t,this.width),this.height=Math.max(e,this.height),this._uw()}render(){this._d&&this._p(),super.render()}enable(){this.disabled=this._dn.disabled=!1,this.onEnable()}disable(){this.disabled=this._dn.disabled=!0,this.onDisable()}focus(){this.disabled||(this.focused=!0,document.activeElement!=this._dn&&this._dn.focus(),this.onFocus())}blur(){this.focused=!1,document.activeElement==this._dn&&this._dn.blur(),this.onBlur()}onOver(){this.disabled||(this.hovered=!0)}onOut(){this.hovered=!1}onEnable(){}onDisable(){}onFocus(){}onBlur(){}onDown(){this.disabled||(this.pressed=!0,this._od())}onUp(){this.disabled||(this.pressed=!1,this._ou())}_kd(t){"Enter"!=t.code&&"Space"!=t.code||this.onDown()}_ku(t){"Enter"!=t.code&&"Space"!=t.code||this.onUp()}}function dt(t){let e=t.canvas;t.clearRect(0,0,e.width,e.height)}let ct=[],lt={},ut={},pt={0:"south",1:"east",2:"west",3:"north",4:"leftshoulder",5:"rightshoulder",6:"lefttrigger",7:"righttrigger",8:"select",9:"start",10:"leftstick",11:"rightstick",12:"dpadup",13:"dpaddown",14:"dpadleft",15:"dpadright"};function _t(t){ct[t.gamepad.index]={pressedButtons:{},axes:{}}}function ft(t){delete ct[t.gamepad.index]}function gt(){ct.map((t=>{t.pressedButtons={},t.axes={}}))}function mt(){let t=navigator.getGamepads?navigator.getGamepads():navigator.webkitGetGamepads?navigator.webkitGetGamepads:[];for(let e=0;e<t.length;e++){let i=t[e];if(!i)continue;i.buttons.map(((t,e)=>{let s=pt[e],{pressed:n}=t,{pressedButtons:h}=ct[i.index],r=h[s];!r&&n?[lt[i.index],lt].map((e=>{e?.[s]?.(i,t)})):r&&!n&&[ut[i.index],ut].map((e=>{e?.[s]?.(i,t)})),h[s]=n}));let{axes:s}=ct[i.index];s.leftstickx=i.axes[0],s.leftsticky=i.axes[1],s.rightstickx=i.axes[2],s.rightsticky=i.axes[3]}}function wt(){window.addEventListener("gamepadconnected",_t),window.addEventListener("gamepaddisconnected",ft),window.addEventListener("blur",gt),a("tick",mt)}function xt(t,e,{gamepad:i,handler:s="gamepaddown"}={}){let n="gamepaddown"==s?lt:ut;[].concat(t).map((t=>{isNaN(i)?n[t]=e:(n[i]=n[i]||{},n[i][t]=e)}))}function yt(t,{gamepad:e,handler:i="gamepaddown"}={}){let s="gamepaddown"==i?lt:ut;[].concat(t).map((t=>{isNaN(e)?delete s[t]:(s[e]=s[e]||{},delete s[e][t])}))}let bt,vt={},jt=!1,Ct={swipe:{touches:1,threshold:10,touchend({0:t}){let e=t.x-t.start.x,i=t.y-t.start.y,s=Math.abs(e),n=Math.abs(i);if(!(s<this.threshold&&n<this.threshold))return s>n?e<0?"left":"right":i<0?"up":"down"}},pinch:{touches:2,threshold:2,touchstart({0:t,1:e}){this.prevDist=Math.hypot(t.x-e.x,t.y-e.y)},touchmove({0:t,1:e}){let i=Math.hypot(t.x-e.x,t.y-e.y);if(Math.abs(i-this.prevDist)<this.threshold)return;let s=i>this.prevDist?"out":"in";return this.prevDist=i,s}}};function At(){jt||(jt=!0,a("touchChanged",((t,e)=>{Object.keys(Ct).map((i=>{let s,n=Ct[i];(!bt||bt==i)&&e.length==n.touches&&[...Array(e.length).keys()].every((t=>e[t]))&&(s=n[t.type]?.(e)??"")&&vt[i+s]&&(bt=i,vt[i+s](t,e))}))})),a("touchEnd",(()=>{bt=0})))}function St(t,e){[].concat(t).map((t=>{vt[t]=e}))}function kt(t){[].concat(t).map((t=>{vt[t]=0}))}let Mt={set:(t,e,i)=>(e.startsWith("_")||(t._d=!0),Reflect.set(t,e,i))},Et={start:t=>t?1:0,center:()=>.5,end:t=>t?0:1};class Pt extends z{init({flow:t="column",align:e="start",justify:i="start",colGap:s=0,rowGap:n=0,numCols:h=1,dir:r="",breakpoints:a=[],...o}={}){return super.init({flow:t,align:e,justify:i,colGap:s,rowGap:n,numCols:h,dir:r,breakpoints:a,...o}),this._p(),new Proxy(this,Mt)}addChild(t){this._d=!0,super.addChild(t)}removeChild(t){this._d=!0,super.removeChild(t)}render(){this._d&&this._p(),super.render()}destroy(){this.children.map((t=>t.destroy&&t.destroy()))}_p(){this._d=!1,this.breakpoints.map((t=>{t.metric.call(this)&&this._b!==t&&(this._b=t,t.callback.call(this))}));let t=this._g=[],e=this._cw=[],i=this._rh=[],s=this.children,n=this._nc="column"==this.flow?1:"row"==this.flow?s.length:this.numCols,h=0,r=0;for(let a,o=0;a=s[o];o++){t[h]=t[h]||[],a._p&&a._p();let{width:s,height:o}=a.world||a;i[h]=Math.max(i[h]||0,o);let d=a.colSpan||1,c=d;do{e[r]=Math.max(e[r]||0,s/c),t[h][r]=a}while(r++<=n&&--d);r>=n&&(r=0,h++)}for(;r>0&&r<n;)t[h][r++]=!1;let a=t.length,o=[].concat(this.colGap),d=[].concat(this.rowGap);this._w=e.reduce(((t,e)=>t+e),0);for(let t=0;t<n-1;t++)this._w+=o[t%o.length];this._h=i.reduce(((t,e)=>t+e),0);for(let t=0;t<a-1;t++)this._h+=d[t%d.length];this._uw();let c="rtl"==this.context.canvas.dir&&!this.dir||"rtl"==this.dir;this._rtl=c,c&&(this._g=t.map((t=>t.reverse())),this._cw=e.reverse(),o=o.reverse());let l=-this.anchor.y*this.height,u=[],p=[].concat(this.justify),_=[].concat(this.align);this._g.map(((t,s)=>{let n=-this.anchor.x*this.width;t.map(((t,h)=>{if(t&&!u.includes(t)){u.push(t);let r=Et[t.justifySelf||p[h%p.length]](this._rtl),a=Et[t.alignSelf||_[s%_.length]](),d=t.colSpan||1,c=e[h];if(d>1&&h+d<=this._nc)for(let t=1;t<d;t++)c+=e[h+t]+o[(h+t)%o.length];let f=c*r,g=i[s]*a,m=0,w=0,{width:x,height:y}=t.world||t;if(t.anchor&&(m=t.anchor.x,w=t.anchor.y),0==r)f+=x*m;else if(.5==r){f+=(m<.5?-1:.5==m?0:1)*x*r}else f-=x*(1-m);if(0==a)g+=y*w;else if(.5==a){g+=(w<.5?-1:.5==w?0:1)*y*a}else g-=y*(1-w);t.x=n+f,t.y=l+g}n+=e[h]+o[h%o.length]})),l+=i[s]+d[s%d.length]}))}}let Ot={},Lt={},It={},Gt={Enter:"enter",Escape:"esc",Space:"space",ArrowLeft:"arrowleft",ArrowUp:"arrowup",ArrowRight:"arrowright",ArrowDown:"arrowdown"};function Dt(e=t,i){e._pd&&i.preventDefault(),e(i)}function Nt(t){let e=Gt[t.code],i=Ot[e];It[e]=!0,Dt(i,t)}function Xt(t){let e=Gt[t.code],i=Lt[e];It[e]=!1,Dt(i,t)}function Yt(){It={}}function zt(){let t;for(t=0;t<26;t++)Gt["Key"+String.fromCharCode(t+65)]=String.fromCharCode(t+97);for(t=0;t<10;t++)Gt["Digit"+t]=Gt["Numpad"+t]=""+t;window.addEventListener("keydown",Nt),window.addEventListener("keyup",Xt),window.addEventListener("blur",Yt)}function Tt(t,e,{handler:i="keydown",preventDefault:s=!0}={}){let n="keydown"==i?Ot:Lt;e._pd=s,[].concat(t).map((t=>n[t]=e))}function Rt(t,{handler:e="keydown"}={}){let i="keydown"==e?Ot:Lt;[].concat(t).map((t=>delete i[t]))}function Ft(t,e){return Object.values(e).includes(t)}function Bt(t){return Object.keys(Ct).some((e=>t.startsWith(e)))}function Wt(t){let e=t.substr(t.search(/[A-Z]/));return e[0].toLowerCase()+e.substr(1)}class Ht{constructor({create:t,maxSize:e=1024}={}){this._c=t,this.objects=[t()],this.size=0,this.maxSize=e}get(t={}){if(this.size==this.objects.length){if(this.size==this.maxSize)return;for(let t=0;t<this.size&&this.objects.length<this.maxSize;t++)this.objects.push(this._c())}let e=this.objects[this.size];return this.size++,e.init(t),e}getAliveObjects(){return this.objects.slice(0,this.size)}clear(){this.size=this.objects.length=0,this.objects.push(this._c())}update(t){let e,i=!1;for(let s=this.size;s--;)e=this.objects[s],e.update(t),e.isAlive()||(i=!0,this.size--);i&&this.objects.sort(((t,e)=>e.isAlive()-t.isAlive()))}render(){for(let t=this.size;t--;)this.objects[t].render()}}function Ut(t,e){let i=[],s=e.x+e.width/2,n=e.y+e.height/2,h=t.y<n,r=t.y+t.height>=n;return t.x<s&&(h&&i.push(0),r&&i.push(2)),t.x+t.width>=s&&(h&&i.push(1),r&&i.push(3)),i}class qt{constructor({maxDepth:t=3,maxObjects:e=25,bounds:i}={}){this.maxDepth=t,this.maxObjects=e;let s=c();this.bounds=i||{x:0,y:0,width:s.width,height:s.height},this._b=!1,this._d=0,this._o=[],this._s=[],this._p=null}clear(){this._s.map((t=>{t.clear()})),this._b=!1,this._o.length=0}get(t){let e=new Set;for(;this._s.length&&this._b;)return Ut(t,this.bounds).map((i=>{this._s[i].get(t).map((t=>e.add(t)))})),Array.from(e);return this._o.filter((e=>e!==t))}add(...t){t.flat().map((t=>{this._b?this._a(t):(this._o.push(t),this._o.length>this.maxObjects&&this._d<this.maxDepth&&(this._sp(),this._o.map((t=>this._a(t))),this._o.length=0))}))}_a(t){Ut(t,this.bounds).map((e=>{this._s[e].add(t)}))}_sp(t,e,i){if(this._b=!0,!this._s.length)for(t=this.bounds.width/2|0,e=this.bounds.height/2|0,i=0;i<4;i++)this._s[i]=new qt({bounds:{x:this.bounds.x+(i%2==1?t:0),y:this.bounds.y+(i>=2?e:0),width:t,height:e},maxDepth:this.maxDepth,maxObjects:this.maxObjects}),this._s[i]._d=this._d+1}}function Kt(t){let e=[];return t._dn?e.push(t._dn):t.children&&t.children.map((t=>{e=e.concat(Kt(t))})),e}class Vt{constructor({id:t,name:s=t,objects:n=[],context:h=l(),cullObjects:r=!0,cullFunction:a=D,sortFunction:o,...d}){this._o=[];let c=h.canvas,u=this._dn=document.createElement("section");u.tabIndex=-1,u.style=e,u.id=t,u.setAttribute("aria-label",s),i(u,c),Object.assign(this,{id:t,name:s,context:h,cullObjects:r,cullFunction:a,sortFunction:o,...d});let{width:p,height:_}=c,f=p/2,g=_/2;this.camera=T({x:f,y:g,width:p,height:_,context:h,centerX:f,centerY:g,anchor:{x:.5,y:.5},render:this._rf.bind(this)}),this.add(n)}set objects(t){this.remove(this._o),this.add(t)}get objects(){return this._o}add(...t){t.flat().map((t=>{this._o.push(t),Kt(t).map((t=>{this._dn.appendChild(t)}))}))}remove(...t){t.flat().map((t=>{s(this._o,t),Kt(t).map((t=>{i(t,this.context)}))}))}show(){this.hidden=this._dn.hidden=!1;let t=this._o.find((t=>t.focus));t?t.focus():this._dn.focus(),this.onShow()}hide(){this.hidden=this._dn.hidden=!0,this.onHide()}destroy(){this._dn.remove(),this._o.map((t=>t.destroy&&t.destroy()))}lookAt(t){let{x:e,y:i}=t.world||t;this.camera.x=e,this.camera.y=i}update(t){this.hidden||this._o.map((e=>e.update&&e.update(t)))}_rf(){let{_o:t,context:e,_sx:i,_sy:s,camera:n,sortFunction:h,cullObjects:r,cullFunction:a}=this;e.translate(i,s);let o=t;r&&(o=o.filter((t=>a(n,t)))),h&&o.sort(h),o.map((t=>t.render&&t.render()))}render(){if(!this.hidden){let{context:t,camera:e}=this,{x:i,y:s,centerX:n,centerY:h}=e;t.save(),this._sx=n-i,this._sy=h-s,t.translate(this._sx,this._sy),e.render(),t.restore()}}onShow(){}onHide(){}}function $t(t){if(+t==t)return t;let e=[],i=t.split(".."),s=+i[0],n=+i[1],h=s;if(s<n)for(;h<=n;h++)e.push(h);else for(;h>=n;h--)e.push(h);return e}class Jt{constructor({image:t,frameWidth:e,frameHeight:i,frameMargin:s,animations:n}={}){this.animations={},this.image=t,this.frame={width:e,height:i,margin:s},this._f=t.width/e|0,this.createAnimations(n)}createAnimations(t){let e,i;for(i in t){let{frames:s,frameRate:n,loop:h}=t[i];e=[],[].concat(s).map((t=>{e=e.concat($t(t))})),this.animations[i]=p({spriteSheet:this,frames:e,frameRate:n,loop:h})}}}function Qt(t,e){return t/e|0}function Zt(t,e){return t/e|0}class te{constructor(t={}){let{width:e,height:i,tilewidth:s,tileheight:n,tilesets:h}=t,r=e*s,a=i*n,o=document.createElement("canvas");o.width=r,o.height=a,this._c=o,this._ctx=o.getContext("2d"),h.map((e=>{let{__k:i,location:s}=window,n=(i?i.dm.get(t):"")||s.href,{source:h}=e;if(h){let t=i.d[i.u(h,n)];Object.keys(t).map((i=>{e[i]=t[i]}))}let{image:r}=e;if(""+r===r){let t=i.i[i.u(r,n)];e.image=t}})),Object.assign(this,{context:l(),layerMap:{},layerCanvases:{},mapwidth:r,mapheight:a,_sx:0,_sy:0,_o:[],...t}),this._p()}get sx(){return this._sx}get sy(){return this._sy}set sx(t){this._sx=G(0,this.mapwidth-c().width,t)}set sy(t){this._sy=G(0,this.mapheight-c().height,t)}set objects(t){this.remove(this._o),this.add(t)}get objects(){return this._o}add(...t){t.flat().map((t=>{this._o.push(t)}))}remove(...t){t.flat().map((t=>{s(this._o,t)}))}setTileAtLayer(t,e,i){let{layerMap:s,tileheight:n,tilewidth:h,width:r}=this,{row:a,col:o,x:d,y:c}=e,l=a??Qt(c,n),u=o??Zt(d,h);s[t]&&(this._d=!0,s[t]._d=!0,s[t].data[l*r+u]=i)}setLayer(t,e){let{layerMap:i}=this;i[t]&&(this._d=!0,i[t]._d=!0,i[t].data=e)}layerCollidesWith(t,e){let{tilewidth:i,tileheight:s,layerMap:n}=this,{x:h,y:r,width:a,height:o}=N(e),d=Qt(r,s),c=Zt(h,i),l=Qt(r+o,s),u=Zt(h+a,i),p=n[t];for(let t=d;t<=l;t++)for(let e=c;e<=u;e++)if(p.data[e+t*this.width])return!0;return!1}tileAtLayer(t,e){let{layerMap:i,tileheight:s,tilewidth:n,width:h}=this,{row:r,col:a,x:o,y:d}=e,c=r??Qt(d,s),l=a??Zt(o,n);return i[t]?i[t].data[c*h+l]:-1}render(t=this._c,e=!0){let{_d:i,context:s,sx:n=0,sy:h=0}=this;i&&this._p();let{width:r,height:a}=c(),o=Math.min(t.width,r),d=Math.min(t.height,a);s.drawImage(t,n,h,o,d,0,0,o,d),e&&(s.save(),(n||h)&&s.translate(-n,-h),this.objects.map((t=>t.render&&t.render())),s.restore())}renderLayer(t){let{layerCanvases:e,layerMap:i}=this,s=i[t],n=e[t],h=n?.getContext("2d");if(!n){let{mapwidth:i,mapheight:r}=this;n=document.createElement("canvas"),h=n.getContext("2d"),n.width=i,n.height=r,e[t]=n,this._r(s,h)}s._d&&(s._d=!1,h.clearRect(0,0,n.width,n.height),this._r(s,h)),this.render(n,!1)}_p(){let{_ctx:t,layers:e=[],layerMap:i}=this;this._d=!1,e.map((e=>{let{name:s,data:n,visible:h}=e;e._d=!1,i[s]=e,n&&0!=h&&this._r(e,t)}))}_r(t,e){let{opacity:i,data:s=[]}=t,{tilesets:n,width:h,tilewidth:r,tileheight:a}=this;e.save(),e.globalAlpha=i,s.map(((t,i)=>{if(!t)return;let s;for(let e=n.length-1;e>=0&&(s=n[e],!(t/s.firstgid>=1));e--);let{image:o,margin:d=0,firstgid:c,columns:l}=s,u=t-c,p=l??o.width/(r+d)|0,_=i%h*r,f=(i/h|0)*a,g=u%p*(r+d),m=(u/p|0)*(a+d);e.drawImage(o,g,m,r,a,_,f,r,a)})),e.restore()}}let ee={Animation:p,AnimationClass:u,imageAssets:S,audioAssets:k,dataAssets:M,setImagePath:function(t){x=t},setAudioPath:function(t){y=t},setDataPath:function(t){b=t},loadImage:P,loadAudio:O,loadData:L,load:function(...t){return E(),Promise.all(t.map((t=>{let e=C([].concat(t)[0]);return e.match(_)?P(t):e.match(f)?O(t):L(t)})))},Button:function(){return new ot(...arguments)},ButtonClass:ot,init:function(t,{contextless:e=!1}={}){return n=document.getElementById(t)||t||document.querySelector("canvas"),e&&(n=n||new Proxy({},d)),h=n.getContext("2d")||new Proxy({},d),h.imageSmoothingEnabled=!1,o("init"),{canvas:n,context:h}},getCanvas:c,getContext:l,on:a,off:function(t,e){r[t]=(r[t]||[]).filter((t=>t!=e))},emit:o,GameLoop:function({fps:e=60,clearCanvas:i=!0,update:s=t,render:n,context:h=l(),blur:r=!1}={}){let a,d,c,u,p,_=0,f=1e3/e,g=1/e,m=i?dt:t,w=!0;function x(){if(d=requestAnimationFrame(x),w&&(c=performance.now(),u=c-a,a=c,!(u>1e3))){for(o("tick"),_+=u;_>=f;)p.update(g),_-=f;m(h),p.render()}}return r||(window.addEventListener("focus",(()=>{w=!0})),window.addEventListener("blur",(()=>{w=!1}))),p={update:s,render:n,isStopped:!0,start(){a=performance.now(),this.isStopped=!1,requestAnimationFrame(x)},stop(){this.isStopped=!0,cancelAnimationFrame(d)}},p},GameObject:T,GameObjectClass:z,gamepadMap:pt,updateGamepad:mt,initGamepad:wt,onGamepad:xt,offGamepad:yt,gamepadPressed:function(t,{gamepad:e}={}){return isNaN(e)?ct.some((e=>e.pressedButtons[t])):!!ct[e]&&!!ct[e].pressedButtons[t]},gamepadAxis:function(t,e){return ct[e]?.axes[t]||0},gestureMap:Ct,initGesture:At,onGesture:St,offGesture:kt,Grid:function(){return new Pt(...arguments)},GridClass:Pt,degToRad:function(t){return t*Math.PI/180},radToDeg:function(t){return 180*t/Math.PI},angleToTarget:function(t,e){return Math.atan2(e.y-t.y,e.x-t.x)+Math.PI/2},rotatePoint:I,movePoint:function(t,e,i){return{x:t.x+Math.sin(e)*i,y:t.y-Math.cos(e)*i}},randInt:function(t,e){return(Math.random()*(e-t+1)|0)+t},seedRand:function(t){for(var e=0,i=2166136261;e<t.length;e++)i=Math.imul(i^t.charCodeAt(e),16777619);i+=i<<13,i^=i>>>7,i+=i<<3,i^=i>>>17;let s=(i+=i<<5)>>>0,n=()=>(2**31-1&(s=Math.imul(48271,s)))/2**31;return n(),n},lerp:function(t,e,i){return t*(1-i)+e*i},inverseLerp:function(t,e,i){return(i-t)/(e-t)},clamp:G,setStoreItem:function(t,e){null==e?localStorage.removeItem(t):localStorage.setItem(t,JSON.stringify(e))},getStoreItem:function(t){let e=localStorage.getItem(t);try{e=JSON.parse(e)}catch(t){}return e},collides:D,getWorldRect:N,depthSort:function(t,e,i="y"){return[t,e]=[t,e].map(N),t[i]-e[i]},initInput:function(t={}){zt();let e=nt(t.pointer);return At(),wt(),{pointer:e}},onInput:function(t,e,{gamepad:i,key:s}={}){[].concat(t).map((t=>{Ft(t,pt)?xt(t,e,i):Bt(t)?St(t,e):Ft(t,Gt)?Tt(t,e,s):["down","up"].includes(t)&&rt(t,e)}))},offInput:function(t,{gamepad:e,key:i}={}){[].concat(t).map((t=>{Ft(t,pt)?yt(t,e):Bt(t)?kt(t):Ft(t,Gt)?Rt(t,i):["down","up"].includes(t)&&at(t)}))},keyMap:Gt,initKeys:zt,onKey:Tt,offKey:Rt,keyPressed:function(t){return!!It[t]},registerPlugin:function(t,e){let i=t.prototype;i&&(i._inc||(i._inc={},i._bInc=function(t,e,...i){return this._inc[e].before.reduce(((e,i)=>{let s=i(t,...e);return s||e}),i)},i._aInc=function(t,e,i,...s){return this._inc[e].after.reduce(((e,i)=>{let n=i(t,e,...s);return n||e}),i)}),Object.getOwnPropertyNames(e).map((t=>{let s=Wt(t);i[s]&&(i["_o"+s]||(i["_o"+s]=i[s],i[s]=function(...t){let e=this._bInc(this,s,...t),n=i["_o"+s].call(this,...e);return this._aInc(this,s,n,...t)}),i._inc[s]||(i._inc[s]={before:[],after:[]}),t.startsWith("before")?i._inc[s].before.push(e[t]):t.startsWith("after")&&i._inc[s].after.push(e[t]))})))},unregisterPlugin:function(t,e){let i=t.prototype;i&&i._inc&&Object.getOwnPropertyNames(e).map((t=>{let n=Wt(t);t.startsWith("before")?s(i._inc[n].before,e[t]):t.startsWith("after")&&s(i._inc[n].after,e[t])}))},extendObject:function(t,e){let i=t.prototype;i&&Object.getOwnPropertyNames(e).map((t=>{i[t]||(i[t]=e[t])}))},initPointer:nt,getPointer:function(t=c()){return H.get(t)},track:ht,untrack:function(...t){t.flat().map((t=>{let e=t.context?t.context.canvas:c(),i=H.get(e);t.render=t._r,t._r=0,s(i._o,t)}))},pointerOver:function(t){let e=t.context?t.context.canvas:c(),i=H.get(e);return i._o.includes(t)&&$(i)===t},onPointer:rt,offPointer:at,pointerPressed:function(t){return!!q[t]},Pool:function(){return new Ht(...arguments)},PoolClass:Ht,Quadtree:function(){return new qt(...arguments)},QuadtreeClass:qt,Scene:function(){return new Vt(...arguments)},SceneClass:Vt,Sprite:function(){return new R(...arguments)},SpriteClass:R,SpriteSheet:function(){return new Jt(...arguments)},SpriteSheetClass:Jt,Text:W,TextClass:B,TileEngine:function(){return new te(...arguments)},Vector:Y,VectorClass:X};return ee}();
