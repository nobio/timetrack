function _classCallCheck(t,o){if(!(t instanceof o))throw new TypeError("Cannot call a class as a function")}(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{"MM+3":function(t,o,n){"use strict";n.r(o),n.d(o,"LogsDetailsPageModule",(function(){return f}));var i,e,s,c=n("ofXK"),a=n("3Pt+"),r=n("TEn/"),b=n("tyNb"),l=n("fXoL"),u=n("xpxr"),d=[{path:"",component:(i=function t(o,n){_classCallCheck(this,t),this.logQueue=o,this.route=n,this.logEntry=this.logQueue.loadById(this.route.snapshot.params.id),console.log(this.logEntry)},i.\u0275fac=function(t){return new(t||i)(l.Jb(u.a),l.Jb(b.a))},i.\u0275cmp=l.Db({type:i,selectors:[["app-logs-details"]],decls:19,vars:7,consts:[["slot","start"],["color","primary","text","Zur\xfcck","defaultHrf","/about"],["padding",""],["size","12","size-sm","8","offset-sm","2"]],template:function(t,o){1&t&&(l.Mb(0,"ion-header"),l.Mb(1,"ion-toolbar"),l.Mb(2,"ion-buttons",0),l.Kb(3,"ion-back-button",1),l.Lb(),l.Mb(4,"ion-title"),l.mc(5,"Log & Trace - Detail"),l.Lb(),l.Lb(),l.Lb(),l.Mb(6,"ion-content",2),l.Mb(7,"ion-grid"),l.Mb(8,"ion-row"),l.Mb(9,"ion-col",3),l.Mb(10,"ion-card"),l.Mb(11,"ion-card-header"),l.Mb(12,"ion-card-subtitle"),l.mc(13),l.Xb(14,"date"),l.Lb(),l.Mb(15,"ion-card-title"),l.mc(16),l.Lb(),l.Lb(),l.Mb(17,"ion-card-content"),l.mc(18),l.Lb(),l.Lb(),l.Lb(),l.Lb(),l.Lb(),l.Lb()),2&t&&(l.zb(13),l.pc("TIME: ",l.Yb(14,4,o.logEntry.timestamp,"HH:mm:ss")," (",o.logEntry.id,")"),l.zb(3),l.nc(o.logEntry.topic),l.zb(2),l.oc(" ",o.logEntry.text," "))},directives:[r.r,r.K,r.h,r.e,r.f,r.I,r.o,r.q,r.z,r.n,r.i,r.k,r.l,r.m,r.j],pipes:[c.d],styles:[""]}),i)}],p=((s=function t(){_classCallCheck(this,t)}).\u0275mod=l.Hb({type:s}),s.\u0275inj=l.Gb({factory:function(t){return new(t||s)},imports:[[b.i.forChild(d)],b.i]}),s),f=((e=function t(){_classCallCheck(this,t)}).\u0275mod=l.Hb({type:e}),e.\u0275inj=l.Gb({factory:function(t){return new(t||e)},imports:[[c.b,a.b,r.L,p]]}),e)}}]);