(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{"1gqn":function(t,e){t.exports=function(t){return t&&"object"==typeof t&&"function"==typeof t.copy&&"function"==typeof t.fill&&"function"==typeof t.readUInt8}},"I+u+":function(t,e,n){"use strict";n.r(e),n.d(e,"AggregatPageModule",(function(){return h}));var r=n("ofXK"),o=n("3Pt+"),i=n("TEn/"),a=n("tyNb"),c=n("2pNN"),s=n("MCLT"),u=n("MO+k"),l=n("sPAB"),p=n("fXoL"),f=n("1Yyo"),b=n("iXKo");const d=["lineCanvas"],g=[{path:"",component:(()=>{class t{constructor(t,e,n,r){this.navCtrl=t,this.alertCtrl=e,this.statsSrv=n,this.logger=r,this.timeUnit=c.c.month}ionViewDidEnter(){this.initGraph(),this.loadGraphData()}initGraph(){this.lineChart=new u.Chart(this.lineCanvas.nativeElement,{type:"bar",responsive:!0,data:{datasets:[{label:"Anwesenheit",fill:!1,backgroundColor:"rgba(255,159,64, 0.5)",borderColor:"rgba(255,159,64, 0.9)",hoverBackgroundColor:"rgba(255,159,64, 0.9)",hoverBorderColor:"rgba(255,159,64, 0.9)",hoverBorderWidth:4}]},options:{scales:{xAxes:[{ticks:{maxRotation:60}}]}}})}loadGraphData(){this.statsSrv.loadStatisticAggregatedDataByUnit(this.timeUnit).then(t=>{this.logger.log(t),this.updateGraph(t,this.lineChart)}).catch(t=>{l.a.alert(this.alertCtrl,t)})}updateGraph(t,e){let n=[],r=[],o=0,i=1e3;for(let a=0;a<t.data.length;a++)Object(s.isDate)(t.data[a].x)?n.push(new Date(t.data[a].x).toLocaleDateString()):n.push(t.data[a].x),r.push(t.data[a].y),o=t.data[a].y>o?t.data[a].y:o,i=t.data[a].y<i?t.data[a].y:i;if(i-=i/100,i=Math.floor(10*i)/10,e.data.labels=n,e.data.datasets[0].data=r,this.timeUnit==c.c.weekday){const t=this.getRandomRGBa(),n="rgba(0,0,0,0.7)";e.data.datasets[0].backgroundColor=t,e.data.datasets[0].hoverBackgroundColor=t,e.data.datasets[0].borderColor=n,e.data.datasets[0].hoverBorderColor=n}e.options.scales.yAxes[0].ticks.min=i,e.data.datasets[0].label=e.options.scales.yAxes[0].ticks.min,e.update({duration:600,easing:"easeOutBounce"})}getRandomRGBa(){return"rgba("+Math.floor(256*Math.random())+","+Math.floor(256*Math.random())+","+Math.floor(256*Math.random())+","+(.5*Math.random()+.5)+")"}setTimeUnit(){this.loadGraphData()}}return t.\u0275fac=function(e){return new(e||t)(p.Jb(i.O),p.Jb(i.b),p.Jb(f.a),p.Jb(b.a))},t.\u0275cmp=p.Db({type:t,selectors:[["app-aggregat"]],viewQuery:function(t,e){var n;1&t&&p.rc(d,!0),2&t&&p.fc(n=p.Vb())&&(e.lineCanvas=n.first)},decls:27,vars:1,consts:[["slot","start"],["color","primary","text","Zur\xfcck","defaultHrf","/entries"],["padding",""],["size","12","size-sm","8","offset-sm","2"],["color","primary",3,"ngModel","ngModelChange"],["value","3",3,"click"],["value","2",3,"click"],["value","1",3,"click"],["value","0",3,"click"],["value","4",3,"click"],["height","400px"],["lineCanvas",""]],template:function(t,e){1&t&&(p.Mb(0,"ion-header"),p.Mb(1,"ion-toolbar"),p.Mb(2,"ion-buttons",0),p.Kb(3,"ion-back-button",1),p.Lb(),p.Mb(4,"ion-title"),p.mc(5,"Arbeitsdauer (aggregiert)"),p.Lb(),p.Lb(),p.Lb(),p.Mb(6,"ion-content",2),p.Mb(7,"ion-grid"),p.Mb(8,"ion-row"),p.Mb(9,"ion-col",3),p.Mb(10,"ion-segment",4),p.Ub("ngModelChange",(function(t){return e.timeUnit=t})),p.Mb(11,"ion-segment-button",5),p.Ub("click",(function(){return e.setTimeUnit()})),p.mc(12," Tag "),p.Lb(),p.Mb(13,"ion-segment-button",6),p.Ub("click",(function(){return e.setTimeUnit()})),p.mc(14," Woche "),p.Lb(),p.Mb(15,"ion-segment-button",7),p.Ub("click",(function(){return e.setTimeUnit()})),p.mc(16," Monat "),p.Lb(),p.Mb(17,"ion-segment-button",8),p.Ub("click",(function(){return e.setTimeUnit()})),p.mc(18," Jahr "),p.Lb(),p.Mb(19,"ion-segment-button",9),p.Ub("click",(function(){return e.setTimeUnit()})),p.mc(20," Wochentag "),p.Lb(),p.Lb(),p.Lb(),p.Lb(),p.Mb(21,"ion-row"),p.Mb(22,"ion-col",3),p.Mb(23,"ion-card"),p.Mb(24,"ion-card-content"),p.Kb(25,"canvas",10,11),p.Lb(),p.Lb(),p.Lb(),p.Lb(),p.Lb(),p.Lb()),2&t&&(p.zb(10),p.bc("ngModel",e.timeUnit))},directives:[i.r,i.K,i.h,i.e,i.f,i.I,i.o,i.q,i.z,i.n,i.A,i.R,o.e,o.h,i.B,i.i,i.j],styles:[""]}),t})()}];let y=(()=>{class t{}return t.\u0275mod=p.Hb({type:t}),t.\u0275inj=p.Gb({factory:function(e){return new(e||t)},imports:[[a.i.forChild(g)],a.i]}),t})(),h=(()=>{class t{}return t.\u0275mod=p.Hb({type:t}),t.\u0275inj=p.Gb({factory:function(e){return new(e||t)},imports:[[r.b,o.b,i.L,y]]}),t})()},KKCa:function(t,e){t.exports="function"==typeof Object.create?function(t,e){t.super_=e,t.prototype=Object.create(e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}})}:function(t,e){t.super_=e;var n=function(){};n.prototype=e.prototype,t.prototype=new n,t.prototype.constructor=t}},MCLT:function(t,e,n){var r=Object.getOwnPropertyDescriptors||function(t){for(var e=Object.keys(t),n={},r=0;r<e.length;r++)n[e[r]]=Object.getOwnPropertyDescriptor(t,e[r]);return n},o=/%[sdj%]/g;e.format=function(t){if(!h(t)){for(var e=[],n=0;n<arguments.length;n++)e.push(c(arguments[n]));return e.join(" ")}n=1;for(var r=arguments,i=r.length,a=String(t).replace(o,(function(t){if("%%"===t)return"%";if(n>=i)return t;switch(t){case"%s":return String(r[n++]);case"%d":return Number(r[n++]);case"%j":try{return JSON.stringify(r[n++])}catch(e){return"[Circular]"}default:return t}})),s=r[n];n<i;s=r[++n])g(s)||!w(s)?a+=" "+s:a+=" "+c(s);return a},e.deprecate=function(t,n){if("undefined"!=typeof process&&!0===process.noDeprecation)return t;if("undefined"==typeof process)return function(){return e.deprecate(t,n).apply(this,arguments)};var r=!1;return function(){if(!r){if(process.throwDeprecation)throw new Error(n);process.traceDeprecation?console.trace(n):console.error(n),r=!0}return t.apply(this,arguments)}};var i,a={};function c(t,n){var r={seen:[],stylize:u};return arguments.length>=3&&(r.depth=arguments[2]),arguments.length>=4&&(r.colors=arguments[3]),d(n)?r.showHidden=n:n&&e._extend(r,n),m(r.showHidden)&&(r.showHidden=!1),m(r.depth)&&(r.depth=2),m(r.colors)&&(r.colors=!1),m(r.customInspect)&&(r.customInspect=!0),r.colors&&(r.stylize=s),l(r,t,r.depth)}function s(t,e){var n=c.styles[e];return n?"\x1b["+c.colors[n][0]+"m"+t+"\x1b["+c.colors[n][1]+"m":t}function u(t,e){return t}function l(t,n,r){if(t.customInspect&&n&&M(n.inspect)&&n.inspect!==e.inspect&&(!n.constructor||n.constructor.prototype!==n)){var o=n.inspect(r,t);return h(o)||(o=l(t,o,r)),o}var i=function(t,e){if(m(e))return t.stylize("undefined","undefined");if(h(e)){var n="'"+JSON.stringify(e).replace(/^"|"$/g,"").replace(/'/g,"\\'").replace(/\\"/g,'"')+"'";return t.stylize(n,"string")}return y(e)?t.stylize(""+e,"number"):d(e)?t.stylize(""+e,"boolean"):g(e)?t.stylize("null","null"):void 0}(t,n);if(i)return i;var a=Object.keys(n),c=function(t){var e={};return t.forEach((function(t,n){e[t]=!0})),e}(a);if(t.showHidden&&(a=Object.getOwnPropertyNames(n)),j(n)&&(a.indexOf("message")>=0||a.indexOf("description")>=0))return p(n);if(0===a.length){if(M(n))return t.stylize("[Function"+(n.name?": "+n.name:"")+"]","special");if(v(n))return t.stylize(RegExp.prototype.toString.call(n),"regexp");if(O(n))return t.stylize(Date.prototype.toString.call(n),"date");if(j(n))return p(n)}var s,u="",w=!1,k=["{","}"];return b(n)&&(w=!0,k=["[","]"]),M(n)&&(u=" [Function"+(n.name?": "+n.name:"")+"]"),v(n)&&(u=" "+RegExp.prototype.toString.call(n)),O(n)&&(u=" "+Date.prototype.toUTCString.call(n)),j(n)&&(u=" "+p(n)),0!==a.length||w&&0!=n.length?r<0?v(n)?t.stylize(RegExp.prototype.toString.call(n),"regexp"):t.stylize("[Object]","special"):(t.seen.push(n),s=w?function(t,e,n,r,o){for(var i=[],a=0,c=e.length;a<c;++a)D(e,String(a))?i.push(f(t,e,n,r,String(a),!0)):i.push("");return o.forEach((function(o){o.match(/^\d+$/)||i.push(f(t,e,n,r,o,!0))})),i}(t,n,r,c,a):a.map((function(e){return f(t,n,r,c,e,w)})),t.seen.pop(),function(t,e,n){return t.reduce((function(t,e){return e.indexOf("\n"),t+e.replace(/\u001b\[\d\d?m/g,"").length+1}),0)>60?n[0]+(""===e?"":e+"\n ")+" "+t.join(",\n  ")+" "+n[1]:n[0]+e+" "+t.join(", ")+" "+n[1]}(s,u,k)):k[0]+u+k[1]}function p(t){return"["+Error.prototype.toString.call(t)+"]"}function f(t,e,n,r,o,i){var a,c,s;if((s=Object.getOwnPropertyDescriptor(e,o)||{value:e[o]}).get?c=t.stylize(s.set?"[Getter/Setter]":"[Getter]","special"):s.set&&(c=t.stylize("[Setter]","special")),D(r,o)||(a="["+o+"]"),c||(t.seen.indexOf(s.value)<0?(c=g(n)?l(t,s.value,null):l(t,s.value,n-1)).indexOf("\n")>-1&&(c=i?c.split("\n").map((function(t){return"  "+t})).join("\n").substr(2):"\n"+c.split("\n").map((function(t){return"   "+t})).join("\n")):c=t.stylize("[Circular]","special")),m(a)){if(i&&o.match(/^\d+$/))return c;(a=JSON.stringify(""+o)).match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/)?(a=a.substr(1,a.length-2),a=t.stylize(a,"name")):(a=a.replace(/'/g,"\\'").replace(/\\"/g,'"').replace(/(^"|"$)/g,"'"),a=t.stylize(a,"string"))}return a+": "+c}function b(t){return Array.isArray(t)}function d(t){return"boolean"==typeof t}function g(t){return null===t}function y(t){return"number"==typeof t}function h(t){return"string"==typeof t}function m(t){return void 0===t}function v(t){return w(t)&&"[object RegExp]"===k(t)}function w(t){return"object"==typeof t&&null!==t}function O(t){return w(t)&&"[object Date]"===k(t)}function j(t){return w(t)&&("[object Error]"===k(t)||t instanceof Error)}function M(t){return"function"==typeof t}function k(t){return Object.prototype.toString.call(t)}function x(t){return t<10?"0"+t.toString(10):t.toString(10)}e.debuglog=function(t){if(m(i)&&(i=process.env.NODE_DEBUG||""),t=t.toUpperCase(),!a[t])if(new RegExp("\\b"+t+"\\b","i").test(i)){var n=process.pid;a[t]=function(){var r=e.format.apply(e,arguments);console.error("%s %d: %s",t,n,r)}}else a[t]=function(){};return a[t]},e.inspect=c,c.colors={bold:[1,22],italic:[3,23],underline:[4,24],inverse:[7,27],white:[37,39],grey:[90,39],black:[30,39],blue:[34,39],cyan:[36,39],green:[32,39],magenta:[35,39],red:[31,39],yellow:[33,39]},c.styles={special:"cyan",number:"yellow",boolean:"yellow",undefined:"grey",null:"bold",string:"green",date:"magenta",regexp:"red"},e.isArray=b,e.isBoolean=d,e.isNull=g,e.isNullOrUndefined=function(t){return null==t},e.isNumber=y,e.isString=h,e.isSymbol=function(t){return"symbol"==typeof t},e.isUndefined=m,e.isRegExp=v,e.isObject=w,e.isDate=O,e.isError=j,e.isFunction=M,e.isPrimitive=function(t){return null===t||"boolean"==typeof t||"number"==typeof t||"string"==typeof t||"symbol"==typeof t||void 0===t},e.isBuffer=n("1gqn");var C=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];function S(){var t=new Date,e=[x(t.getHours()),x(t.getMinutes()),x(t.getSeconds())].join(":");return[t.getDate(),C[t.getMonth()],e].join(" ")}function D(t,e){return Object.prototype.hasOwnProperty.call(t,e)}e.log=function(){console.log("%s - %s",S(),e.format.apply(e,arguments))},e.inherits=n("KKCa"),e._extend=function(t,e){if(!e||!w(e))return t;for(var n=Object.keys(e),r=n.length;r--;)t[n[r]]=e[n[r]];return t};var U="undefined"!=typeof Symbol?Symbol("util.promisify.custom"):void 0;function z(t,e){if(!t){var n=new Error("Promise was rejected with a falsy value");n.reason=t,t=n}return e(t)}e.promisify=function(t){if("function"!=typeof t)throw new TypeError('The "original" argument must be of type Function');if(U&&t[U]){var e;if("function"!=typeof(e=t[U]))throw new TypeError('The "util.promisify.custom" argument must be of type Function');return Object.defineProperty(e,U,{value:e,enumerable:!1,writable:!1,configurable:!0}),e}function e(){for(var e,n,r=new Promise((function(t,r){e=t,n=r})),o=[],i=0;i<arguments.length;i++)o.push(arguments[i]);o.push((function(t,r){t?n(t):e(r)}));try{t.apply(this,o)}catch(a){n(a)}return r}return Object.setPrototypeOf(e,Object.getPrototypeOf(t)),U&&Object.defineProperty(e,U,{value:e,enumerable:!1,writable:!1,configurable:!0}),Object.defineProperties(e,r(t))},e.promisify.custom=U,e.callbackify=function(t){if("function"!=typeof t)throw new TypeError('The "original" argument must be of type Function');function e(){for(var e=[],n=0;n<arguments.length;n++)e.push(arguments[n]);var r=e.pop();if("function"!=typeof r)throw new TypeError("The last argument must be of type Function");var o=this,i=function(){return r.apply(o,arguments)};t.apply(this,e).then((function(t){process.nextTick(i,null,t)}),(function(t){process.nextTick(z,t,i)}))}return Object.setPrototypeOf(e,Object.getPrototypeOf(t)),Object.defineProperties(e,r(t)),e}}}]);