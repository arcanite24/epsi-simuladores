webpackJsonp([6],{576:function(l,n,e){"use strict";function u(l){return a["ɵvid"](0,[(l()(),a["ɵted"](-1,null,["\n    "])),(l()(),a["ɵeld"](1,0,null,null,3,"div",[["class","flex-col"]],null,null,null,null,null)),(l()(),a["ɵted"](-1,null,["\n      "])),(l()(),a["ɵeld"](3,0,null,null,0,"img",[["src","assets/imgs/rings.svg"]],null,null,null,null,null)),(l()(),a["ɵted"](-1,null,["\n    "])),(l()(),a["ɵted"](-1,null,["\n  "]))],null,null)}function t(l){return a["ɵvid"](0,[(l()(),a["ɵeld"](0,0,null,null,4,"ion-slide",[],null,null,null,R.b,R.a)),a["ɵdid"](1,180224,null,0,y.a,[a.ElementRef,a.Renderer,D.a],null,null),(l()(),a["ɵted"](-1,0,["\n      "])),(l()(),a["ɵeld"](3,0,[["img",1]],0,0,"img",[],[[8,"src",4]],[[null,"click"]],function(l,n,e){var u=!0;if("click"===n){u=!1!==l.component.openSlide(a["ɵnov"](l,3))&&u}return u},null,null)),(l()(),a["ɵted"](-1,0,["\n    "]))],null,function(l,n){l(n,3,0,n.context.$implicit)})}function i(l){return a["ɵvid"](0,[(l()(),a["ɵeld"](0,0,null,null,5,"ion-slides",[],null,[[null,"ionSlideDidChange"]],function(l,n,e){var u=!0;if("ionSlideDidChange"===n){u=!1!==l.component.onSlideChange()&&u}return u},w.b,w.a)),a["ɵdid"](1,1228800,[[1,4]],0,D.a,[S.a,_.a,a.NgZone,[2,E.a],a.ElementRef,a.Renderer],null,{ionSlideDidChange:"ionSlideDidChange"}),(l()(),a["ɵted"](-1,0,["\n    "])),(l()(),a["ɵand"](16777216,null,0,1,null,t)),a["ɵdid"](4,802816,null,0,k.j,[a.ViewContainerRef,a.TemplateRef,a.IterableDiffers],{ngForOf:[0,"ngForOf"]},null),(l()(),a["ɵted"](-1,0,["\n  "]))],function(l,n){l(n,4,0,n.context.ngIf.images)},null)}function d(l){return a["ɵvid"](0,[a["ɵqud"](671088640,1,{slides:0}),(l()(),a["ɵeld"](1,0,null,null,10,"ion-header",[],null,null,null,null,null)),a["ɵdid"](2,16384,null,0,x.a,[S.a,a.ElementRef,a.Renderer,[2,E.a]],null,null),(l()(),a["ɵted"](-1,null,["\n\n  "])),(l()(),a["ɵeld"](4,0,null,null,6,"ion-navbar",[["class","toolbar"],["color","primary"]],[[8,"hidden",0],[2,"statusbar-padding",null]],null,null,F.b,F.a)),a["ɵdid"](5,49152,null,0,I.a,[P.a,[2,E.a],[2,N.a],S.a,a.ElementRef,a.Renderer],{color:[0,"color"]},null),(l()(),a["ɵted"](-1,3,["\n    "])),(l()(),a["ɵeld"](7,0,null,3,2,"ion-title",[],null,null,null,j.b,j.a)),a["ɵdid"](8,49152,null,0,L.a,[S.a,a.ElementRef,a.Renderer,[2,O.a],[2,I.a]],null,null),(l()(),a["ɵted"](-1,0,["Presentación"])),(l()(),a["ɵted"](-1,3,["\n  "])),(l()(),a["ɵted"](-1,null,["\n\n"])),(l()(),a["ɵted"](-1,null,["\n\n\n"])),(l()(),a["ɵeld"](13,0,null,null,9,"ion-content",[["class","bg-eee"]],[[2,"statusbar-padding",null],[2,"has-refresher",null]],null,null,V.b,V.a)),a["ɵdid"](14,4374528,null,0,q.a,[S.a,_.a,M.a,a.ElementRef,a.Renderer,P.a,$.a,a.NgZone,[2,E.a],[2,N.a]],null,null),(l()(),a["ɵted"](-1,1,["\n\n  "])),(l()(),a["ɵand"](0,[["loader",2]],1,0,null,u)),(l()(),a["ɵted"](-1,1,["\n\n  "])),(l()(),a["ɵand"](16777216,null,1,2,null,i)),a["ɵdid"](19,16384,null,0,k.k,[a.ViewContainerRef,a.TemplateRef],{ngIf:[0,"ngIf"]},null),a["ɵpid"](131072,k.b,[a.ChangeDetectorRef]),(l()(),a["ɵted"](-1,1,["\n\n  "])),(l()(),a["ɵted"](-1,1,["\n\n"])),(l()(),a["ɵted"](-1,null,["\n"]))],function(l,n){var e=n.component;l(n,5,0,"primary");l(n,19,0,a["ɵunv"](n,19,0,a["ɵnov"](n,20).transform(e.slide$)))},function(l,n){l(n,4,0,a["ɵnov"](n,5)._hidden,a["ɵnov"](n,5)._sbPadding);l(n,13,0,a["ɵnov"](n,14).statusbarPadding,a["ɵnov"](n,14)._hasRefresher)})}Object.defineProperty(n,"__esModule",{value:!0});var a=e(0),o=(e(1),e(28),e(461),e(457),e(458)),r=function(){function l(l,n,e,u){this.navCtrl=l,this.navParams=n,this.afs=e,this.imgCtrl=u,this.id=this.navParams.get("id"),this.lc=!1,this.newNota={title:"",text:""}}return l.prototype.ionViewDidLoad=function(){this.slide$=this.afs.collection(o.a.SLIDE).doc(this.id).valueChanges()},l.prototype.openSlide=function(l){this.imgCtrl.create(l).present()},l.prototype.addNota=function(l,n){this.lc=!0},l.prototype.onSlideChange=function(){},l}(),s=function(){return function(){}}(),c=e(447),f=e(448),p=e(449),m=e(450),v=e(451),g=e(452),h=e(453),b=e(454),C=e(455),R=e(590),y=e(208),D=e(136),w=e(591),S=e(3),_=e(6),E=e(7),k=e(16),x=e(130),F=e(456),I=e(53),P=e(13),N=e(31),j=e(580),L=e(196),O=e(95),V=e(579),q=e(40),M=e(14),$=e(61),A=e(15),T=e(132),Z=e(99),z=a["ɵcrt"]({encapsulation:2,styles:[],data:{}}),J=a["ɵccf"]("page-slide-detail",r,function(l){return a["ɵvid"](0,[(l()(),a["ɵeld"](0,0,null,null,1,"page-slide-detail",[],null,null,null,d,z)),a["ɵdid"](1,49152,null,0,r,[N.a,A.a,T.AngularFirestore,Z.a],null,null)],null,null)},{},{},[]),K=e(22),B=e(197),G=e(62);e.d(n,"SlideDetailPageModuleNgFactory",function(){return H});var H=a["ɵcmf"](s,[],function(l){return a["ɵmod"]([a["ɵmpd"](512,a.ComponentFactoryResolver,a["ɵCodegenComponentFactoryResolver"],[[8,[c.a,f.a,p.a,m.a,v.a,g.a,h.a,b.a,C.a,J]],[3,a.ComponentFactoryResolver],a.NgModuleRef]),a["ɵmpd"](4608,k.m,k.l,[a.LOCALE_ID,[2,k.w]]),a["ɵmpd"](4608,K.k,K.k,[]),a["ɵmpd"](4608,K.c,K.c,[]),a["ɵmpd"](512,k.c,k.c,[]),a["ɵmpd"](512,K.j,K.j,[]),a["ɵmpd"](512,K.d,K.d,[]),a["ɵmpd"](512,K.i,K.i,[]),a["ɵmpd"](512,B.a,B.a,[]),a["ɵmpd"](512,B.b,B.b,[]),a["ɵmpd"](512,s,s,[]),a["ɵmpd"](256,G.a,r,[])])})},579:function(l,n,e){"use strict";function u(l){return t["ɵvid"](2,[t["ɵqud"](402653184,1,{_fixedContent:0}),t["ɵqud"](402653184,2,{_scrollContent:0}),(l()(),t["ɵeld"](2,0,[[1,0],["fixedContent",1]],null,1,"div",[["class","fixed-content"]],null,null,null,null,null)),t["ɵncd"](null,0),(l()(),t["ɵeld"](4,0,[[2,0],["scrollContent",1]],null,1,"div",[["class","scroll-content"]],null,null,null,null,null)),t["ɵncd"](null,1),t["ɵncd"](null,2)],null,null)}e.d(n,"a",function(){return i}),n.b=u;var t=e(0),i=(e(3),e(6),e(14),e(61),e(7),e(31),t["ɵcrt"]({encapsulation:2,styles:[],data:{}}))},580:function(l,n,e){"use strict";function u(l){return t["ɵvid"](2,[(l()(),t["ɵeld"](0,0,null,null,2,"div",[["class","toolbar-title"]],null,null,null,null,null)),t["ɵdid"](1,278528,null,0,i.i,[t.IterableDiffers,t.KeyValueDiffers,t.ElementRef,t.Renderer2],{klass:[0,"klass"],ngClass:[1,"ngClass"]},null),t["ɵncd"](null,0)],function(l,n){l(n,1,0,"toolbar-title","toolbar-title-"+n.component._mode)},null)}e.d(n,"a",function(){return d}),n.b=u;var t=e(0),i=e(16),d=(e(3),t["ɵcrt"]({encapsulation:2,styles:[],data:{}}))},590:function(l,n,e){"use strict";function u(l){return t["ɵvid"](2,[(l()(),t["ɵeld"](0,0,null,null,1,"div",[["class","slide-zoom"]],null,null,null,null,null)),t["ɵncd"](null,0)],null,null)}e.d(n,"a",function(){return i}),n.b=u;var t=e(0),i=t["ɵcrt"]({encapsulation:2,styles:[],data:{}})},591:function(l,n,e){"use strict";function u(l){return t["ɵvid"](2,[(l()(),t["ɵeld"](0,0,null,null,3,"div",[["class","swiper-container"]],[[1,"dir",0]],null,null,null,null)),(l()(),t["ɵeld"](1,0,null,null,1,"div",[["class","swiper-wrapper"]],null,null,null,null,null)),t["ɵncd"](null,0),(l()(),t["ɵeld"](3,0,null,null,0,"div",[["class","swiper-pagination"]],[[2,"hide",null]],null,null,null,null))],null,function(l,n){var e=n.component;l(n,0,0,e._rtl?"rtl":null);l(n,3,0,!e.pager)})}e.d(n,"a",function(){return i}),n.b=u;var t=e(0),i=(e(3),e(6),e(7),t["ɵcrt"]({encapsulation:2,styles:[],data:{}}))}});