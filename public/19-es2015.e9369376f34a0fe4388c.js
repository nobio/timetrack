(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{"MM+3":function(t,o,n){"use strict";n.r(o),n.d(o,"LogsDetailsPageModule",(function(){return u}));var e=n("ofXK"),i=n("3Pt+"),r=n("TEn/"),s=n("tyNb"),b=n("fXoL"),c=n("xpxr");const a=[{path:"",component:(()=>{class t{constructor(t,o){this.logQueue=t,this.route=o,this.logEntry=this.logQueue.loadById(this.route.snapshot.params.id),console.log(this.logEntry)}}return t.\u0275fac=function(o){return new(o||t)(b.Jb(c.a),b.Jb(s.a))},t.\u0275cmp=b.Db({type:t,selectors:[["app-logs-details"]],decls:19,vars:7,consts:[["slot","start"],["color","primary","text","Zur\xfcck","defaultHrf","/about"],["padding",""],["size","12","size-sm","8","offset-sm","2"]],template:function(t,o){1&t&&(b.Mb(0,"ion-header"),b.Mb(1,"ion-toolbar"),b.Mb(2,"ion-buttons",0),b.Kb(3,"ion-back-button",1),b.Lb(),b.Mb(4,"ion-title"),b.mc(5,"Log & Trace - Detail"),b.Lb(),b.Lb(),b.Lb(),b.Mb(6,"ion-content",2),b.Mb(7,"ion-grid"),b.Mb(8,"ion-row"),b.Mb(9,"ion-col",3),b.Mb(10,"ion-card"),b.Mb(11,"ion-card-header"),b.Mb(12,"ion-card-subtitle"),b.mc(13),b.Xb(14,"date"),b.Lb(),b.Mb(15,"ion-card-title"),b.mc(16),b.Lb(),b.Lb(),b.Mb(17,"ion-card-content"),b.mc(18),b.Lb(),b.Lb(),b.Lb(),b.Lb(),b.Lb(),b.Lb()),2&t&&(b.zb(13),b.pc("TIME: ",b.Yb(14,4,o.logEntry.timestamp,"HH:mm:ss")," (",o.logEntry.id,")"),b.zb(3),b.nc(o.logEntry.topic),b.zb(2),b.oc(" ",o.logEntry.text," "))},directives:[r.r,r.K,r.h,r.e,r.f,r.I,r.o,r.q,r.z,r.n,r.i,r.k,r.l,r.m,r.j],pipes:[e.d],styles:[""]}),t})()}];let l=(()=>{class t{}return t.\u0275mod=b.Hb({type:t}),t.\u0275inj=b.Gb({factory:function(o){return new(o||t)},imports:[[s.i.forChild(a)],s.i]}),t})(),u=(()=>{class t{}return t.\u0275mod=b.Hb({type:t}),t.\u0275inj=b.Gb({factory:function(o){return new(o||t)},imports:[[e.b,i.b,r.L,l]]}),t})()}}]);