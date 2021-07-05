function _classCallCheck(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function _defineProperties(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function _createClass(t,e,n){return e&&_defineProperties(t.prototype,e),n&&_defineProperties(t,n),t}(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{y3DM:function(t,e,n){"use strict";n.r(e),n.d(e,"ComeGoPageModule",(function(){return C}));var i,r,o,a=n("ofXK"),s=n("3Pt+"),c=n("TEn/"),l=n("tyNb"),u=n("mrSG"),h=n("MO+k"),b=n("2pNN"),d=n("sPAB"),f=n("fXoL"),p=n("1Yyo"),v=["lineCanvas"],m=[{path:"",component:(i=function(){function t(e,n,i,r){_classCallCheck(this,t),this.navCtrl=e,this.alertCtrl=n,this.statsSrv=i,this.actionSheetCtrl=r,this._interval=40,this._direction=void 0}return _createClass(t,[{key:"ionViewDidEnter",value:function(){this.initGraph(),this.loadGraphData()}},{key:"interval",get:function(){return this._interval},set:function(t){this._interval=t<1?1:t,this.loadGraphData()}},{key:"direction",get:function(){return this._direction},set:function(t){this._direction="all"===t.toString()?void 0:t,this.loadGraphData()}},{key:"initGraph",value:function(){this.lineChart=new h.Chart(this.lineCanvas.nativeElement,{type:"bar",responsive:!0,data:{datasets:[{label:"Anwesenheit pro Zeiteinheit",fill:!1,backgroundColor:"rgb(52, 102, 189)",borderColor:"rgb(52, 102, 189)",hoverBackgroundColor:"rgb(6, 175, 34)",hoverBorderColor:"rgb(6, 175, 34)",hoverBorderWidth:4}]},options:{scales:{xAxes:[{ticks:{maxRotation:60}}]}}})}},{key:"loadGraphData",value:function(){var t=this;this.statsSrv.loadStatisticHistogramDataByInterval(this.interval,this.direction).then((function(e){t.updateGraph(e,t.lineChart)})).catch((function(e){d.a.alert(t.alertCtrl,e)}))}},{key:"updateGraph",value:function(t,e){for(var n=[],i=[],r=0;r<t.data.length;r++)n.push(t.data[r].x),i.push(t.data[r].y);e.data.labels=n,e.data.datasets[0].data=i,e.update({duration:600,easing:"easeOutBounce"})}},{key:"showDirectionDialog",value:function(){return Object(u.a)(this,void 0,void 0,regeneratorRuntime.mark((function t(){var e,n=this;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.actionSheetCtrl.create({header:"Richtung (Kommen/Gehen)",buttons:[{text:"Alle",handler:function(){n.direction=b.a.none}},{text:"Kommen",icon:"enter",handler:function(){n.direction=b.a.enter}},{text:"Gehen",icon:"exit",handler:function(){n.direction=b.a.go}},{text:"Abbrechen",role:"cancel"}]});case 2:return e=t.sent,t.next=5,e.present();case 5:case"end":return t.stop()}}),t,this)})))}}]),t}(),i.\u0275fac=function(t){return new(t||i)(f.Jb(c.O),f.Jb(c.b),f.Jb(p.a),f.Jb(c.a))},i.\u0275cmp=f.Db({type:i,selectors:[["app-come-go"]],viewQuery:function(t,e){var n;1&t&&f.rc(v,!0),2&t&&f.fc(n=f.Vb())&&(e.lineCanvas=n.first)},decls:20,vars:1,consts:[["slot","start"],["color","primary","text","Zur\xfcck","defaultHrf","/entries"],["size","12","size-sm","8","offset-sm","2"],["min","1","max","60","step","1","snaps","false","pin","true","color","primary","debounce","500",3,"ngModel","ngModelChange"],["slot","end",3,"click"],["height","400px"],["lineCanvas",""]],template:function(t,e){1&t&&(f.Mb(0,"ion-header"),f.Mb(1,"ion-toolbar"),f.Mb(2,"ion-title"),f.mc(3,"Kommen & Gehen"),f.Lb(),f.Mb(4,"ion-buttons",0),f.Kb(5,"ion-back-button",1),f.Lb(),f.Lb(),f.Lb(),f.Mb(6,"ion-content"),f.Mb(7,"ion-grid"),f.Mb(8,"ion-row"),f.Mb(9,"ion-col",2),f.Mb(10,"ion-item"),f.Mb(11,"ion-range",3),f.Ub("ngModelChange",(function(t){return e.interval=t})),f.Lb(),f.Mb(12,"ion-button",4),f.Ub("click",(function(){return e.showDirectionDialog()})),f.mc(13,"Direction"),f.Lb(),f.Lb(),f.Lb(),f.Lb(),f.Mb(14,"ion-row"),f.Mb(15,"ion-col",2),f.Mb(16,"ion-card"),f.Mb(17,"ion-card-content"),f.Kb(18,"canvas",5,6),f.Lb(),f.Lb(),f.Lb(),f.Lb(),f.Lb(),f.Lb()),2&t&&(f.zb(11),f.bc("ngModel",e.interval))},directives:[c.r,c.K,c.I,c.h,c.e,c.f,c.o,c.q,c.z,c.n,c.u,c.x,c.R,s.e,s.h,c.g,c.i,c.j],styles:[""]}),i)}],g=((o=function t(){_classCallCheck(this,t)}).\u0275mod=f.Hb({type:o}),o.\u0275inj=f.Gb({factory:function(t){return new(t||o)},imports:[[l.i.forChild(m)],l.i]}),o),C=((r=function t(){_classCallCheck(this,t)}).\u0275mod=f.Hb({type:r}),r.\u0275inj=f.Gb({factory:function(t){return new(t||r)},imports:[[a.b,s.b,c.L,g]]}),r)}}]);