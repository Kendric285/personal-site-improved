(function(g){var window=this;'use strict';var o6=function(a){g.V.call(this,{D:"div",K:"ytp-miniplayer-ui"});this.eg=!1;this.player=a;this.N(a,"minimized",this.og);this.N(a,"onStateChange",this.dF)},p6=function(a){g.fN.call(this,a);
this.i=new o6(this.player);this.i.hide();g.WM(this.player,this.i.element,4);a.Ce()&&(this.load(),g.N(a.getRootNode(),"ytp-player-minimized",!0))};
g.w(o6,g.V);g.k=o6.prototype;
g.k.qD=function(){this.tooltip=new g.BQ(this.player,this);g.J(this,this.tooltip);g.WM(this.player,this.tooltip.element,4);this.tooltip.scale=.6;this.qc=new g.aO(this.player);g.J(this,this.qc);this.xg=new g.V({D:"div",K:"ytp-miniplayer-scrim"});g.J(this,this.xg);this.xg.Ba(this.element);this.N(this.xg.element,"click",this.iz);var a=new g.V({D:"button",Ea:["ytp-miniplayer-close-button","ytp-button"],V:{"aria-label":"Close"},S:[g.fL()]});g.J(this,a);a.Ba(this.xg.element);this.N(a.element,"click",this.zi);
a=new g.M1(this.player,this);g.J(this,a);a.Ba(this.xg.element);this.Xo=new g.V({D:"div",K:"ytp-miniplayer-controls"});g.J(this,this.Xo);this.Xo.Ba(this.xg.element);this.N(this.Xo.element,"click",this.iz);var b=new g.V({D:"div",K:"ytp-miniplayer-button-container"});g.J(this,b);b.Ba(this.Xo.element);a=new g.V({D:"div",K:"ytp-miniplayer-play-button-container"});g.J(this,a);a.Ba(this.Xo.element);var c=new g.V({D:"div",K:"ytp-miniplayer-button-container"});g.J(this,c);c.Ba(this.Xo.element);this.vL=new g.yP(this.player,
this,!1);g.J(this,this.vL);this.vL.Ba(b.element);b=new g.vP(this.player,this);g.J(this,b);b.Ba(a.element);this.nextButton=new g.yP(this.player,this,!0);g.J(this,this.nextButton);this.nextButton.Ba(c.element);this.Ag=new g.oQ(this.player,this);g.J(this,this.Ag);this.Ag.Ba(this.xg.element);this.Kc=new g.DP(this.player,this);g.J(this,this.Kc);g.WM(this.player,this.Kc.element,4);this.Uy=new g.V({D:"div",K:"ytp-miniplayer-buttons"});g.J(this,this.Uy);g.WM(this.player,this.Uy.element,4);a=new g.V({D:"button",
Ea:["ytp-miniplayer-close-button","ytp-button"],V:{"aria-label":"Close"},S:[g.fL()]});g.J(this,a);a.Ba(this.Uy.element);this.N(a.element,"click",this.zi);a=new g.V({D:"button",Ea:["ytp-miniplayer-replay-button","ytp-button"],V:{"aria-label":"Close"},S:[g.kL()]});g.J(this,a);a.Ba(this.Uy.element);this.N(a.element,"click",this.kU);this.N(this.player,"presentingplayerstatechange",this.Jc);this.N(this.player,"appresize",this.tb);this.N(this.player,"fullscreentoggled",this.tb);this.tb()};
g.k.show=function(){this.zd=new g.Bq(this.Qp,null,this);this.zd.start();this.eg||(this.qD(),this.eg=!0);0!==this.player.getPlayerState()&&g.V.prototype.show.call(this);this.Kc.show();this.player.unloadModule("annotations_module")};
g.k.hide=function(){this.zd&&(this.zd.dispose(),this.zd=void 0);g.V.prototype.hide.call(this);this.player.Ce()||(this.eg&&this.Kc.hide(),this.player.loadModule("annotations_module"))};
g.k.va=function(){this.zd&&(this.zd.dispose(),this.zd=void 0);g.V.prototype.va.call(this)};
g.k.zi=function(){this.player.stopVideo();this.player.Ma("onCloseMiniplayer")};
g.k.kU=function(){this.player.playVideo()};
g.k.iz=function(a){if(a.target===this.xg.element||a.target===this.Xo.element)g.T(this.player.T().experiments,"kevlar_miniplayer_play_pause_on_scrim")?g.iK(this.player.ub())?this.player.pauseVideo():this.player.playVideo():this.player.Ma("onExpandMiniplayer")};
g.k.og=function(){g.N(this.player.getRootNode(),"ytp-player-minimized",this.player.Ce())};
g.k.jd=function(){this.Kc.Sb();this.Ag.Sb()};
g.k.Qp=function(){this.jd();this.zd&&this.zd.start()};
g.k.Jc=function(a){g.U(a.state,32)&&this.tooltip.hide()};
g.k.tb=function(){g.OP(this.Kc,0,this.player.Za().getPlayerSize().width,!1);g.FP(this.Kc)};
g.k.dF=function(a){this.player.Ce()&&(0===a?this.hide():this.show())};
g.k.fc=function(){return this.tooltip};
g.k.Me=function(){return!1};
g.k.lf=function(){return!1};
g.k.gi=function(){return!1};
g.k.Pz=function(){};
g.k.Nm=function(){};
g.k.zr=function(){};
g.k.dn=function(){return null};
g.k.gj=function(){return new g.ol(0,0,0,0)};
g.k.handleGlobalKeyDown=function(){return!1};
g.k.handleGlobalKeyUp=function(){return!1};
g.k.Yp=function(a,b,c,d,e){var f=0,h=d=0,l=g.Nl(a);if(b){c=g.Lq(b,"ytp-prev-button")||g.Lq(b,"ytp-next-button");var m=g.Lq(b,"ytp-play-button"),n=g.Lq(b,"ytp-miniplayer-expand-watch-page-button");c?f=h=12:m?(b=g.Ll(b,this.element),h=b.x,f=b.y-12):n&&(h=g.Lq(b,"ytp-miniplayer-button-top-left"),f=g.Ll(b,this.element),b=g.Nl(b),h?(h=8,f=f.y+40):(h=f.x-l.width+b.width,f=f.y-20))}else h=c-l.width/2,d=25+(e||0);b=this.player.Za().getPlayerSize().width;e=f+(e||0);l=g.Of(h,0,b-l.width);e?(a.style.top=e+"px",
a.style.bottom=""):(a.style.top="",a.style.bottom=d+"px");a.style.left=l+"px"};
g.k.showControls=function(){};
g.k.Sk=function(){};
g.k.vk=function(){return!1};g.w(p6,g.fN);p6.prototype.create=function(){};
p6.prototype.Ki=function(){return!1};
p6.prototype.load=function(){this.player.hideControls();this.i.show()};
p6.prototype.unload=function(){this.player.showControls();this.i.hide()};g.qN.miniplayer=p6;})(_yt_player);
