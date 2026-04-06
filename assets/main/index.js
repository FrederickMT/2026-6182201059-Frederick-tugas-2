System.register("chunks:///_virtual/bird.ts",["./rollupPluginModLoBabelHelpers.js","cc"],(function(e){var t,i,n,r,o,l,s,a,p,c,u,h;return{setters:[function(e){t=e.applyDecoratedDescriptor,i=e.inheritsLoose,n=e.initializerDefineProperty,r=e.assertThisInitialized},function(e){o=e.cclegacy,l=e._decorator,s=e.SpriteFrame,a=e.CCFloat,p=e.Collider2D,c=e.Contact2DType,u=e.Sprite,h=e.Component}],execute:function(){var d,v,g,f,m,y,C,b,B,T,z;o._RF.push({},"c3e75dgOz1ADpFl3tuAN98u","bird",void 0);var D=l.ccclass,R=l.property;e("bird",(d=D("bird"),v=R({type:[s]}),g=R({type:[a]}),f=R({type:s}),m=R({type:s}),d((b=t((C=function(e){function t(){for(var t,i=arguments.length,o=new Array(i),l=0;l<i;l++)o[l]=arguments[l];return t=e.call.apply(e,[this].concat(o))||this,n(t,"spriteBird",b,r(t)),n(t,"scaleList",B,r(t)),n(t,"spriteBirdKuning",T,r(t)),n(t,"spriteBirdMerah",z,r(t)),t.listToRemove=[],t.level=0,t}i(t,e);var o=t.prototype;return o.start=function(){var e=this.getComponent(p);e&&(e.on(c.BEGIN_CONTACT,this.onBeginContact,this),e.on(c.END_CONTACT,this.onEndContact,this))},o.onBeginContact=function(e,i,n){e.group==i.group&&e.node.getComponent(t).level==i.node.getComponent(t).level&&(this.levelUp(),this.listToRemove.push(i.node))},o.onEndContact=function(e,t,i){console.log("onEndContact")},o.levelUp=function(){this.level+1<this.spriteBird.length&&(this.level++,this.getComponent(u).spriteFrame=this.spriteBird[this.level%this.spriteBird.length],console.log(this.level),this.level<this.scaleList.length&&this.node.scale.multiplyScalar(this.scaleList[this.level]))},o.update=function(e){for(var t=0;t<this.listToRemove.length;t++)this.listToRemove[t].active=!1;this.listToRemove=[]},t}(h)).prototype,"spriteBird",[v],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return[]}}),B=t(C.prototype,"scaleList",[g],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return[]}}),T=t(C.prototype,"spriteBirdKuning",[f],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),z=t(C.prototype,"spriteBirdMerah",[m],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),y=C))||y));o._RF.pop()}}}));

System.register("chunks:///_virtual/GameController.ts",["./rollupPluginModLoBabelHelpers.js","cc"],(function(t){var e,r,n,o,i,a,l,c,s,u,p,f,y;return{setters:[function(t){e=t.applyDecoratedDescriptor,r=t.inheritsLoose,n=t.initializerDefineProperty,o=t.assertThisInitialized},function(t){i=t.cclegacy,a=t._decorator,l=t.Prefab,c=t.input,s=t.Input,u=t.instantiate,p=t.Vec3,f=t.RigidBody2D,y=t.Component}],execute:function(){var d,h,b,v,g;i._RF.push({},"8f2f0z7KlZKlbty5yqyHaNR","GameController",void 0);var m=a.ccclass,P=a.property;t("GameController",(d=m("GameController"),h=P({type:l}),d((g=e((v=function(t){function e(){for(var e,r=arguments.length,i=new Array(r),a=0;a<r;a++)i[a]=arguments[a];return e=t.call.apply(t,[this].concat(i))||this,n(e,"birdPrefab",g,o(e)),e}r(e,t);var i=e.prototype;return i.start=function(){c.on(s.EventType.TOUCH_START,this.onTouchStart,this)},i.onTouchStart=function(t){var e=u(this.birdPrefab),r=t.getUILocation();e.setParent(this.node),e.setWorldPosition(new p(r.x,r.y,0)),e.getComponent(f).wakeUp()},i.update=function(t){},e}(y)).prototype,"birdPrefab",[h],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),b=v))||b));i._RF.pop()}}}));

System.register("chunks:///_virtual/main",["./GameController.ts","./bird.ts"],(function(){return{setters:[null,null],execute:function(){}}}));

(function(r) {
  r('virtual:///prerequisite-imports/main', 'chunks:///_virtual/main'); 
})(function(mid, cid) {
    System.register(mid, [cid], function (_export, _context) {
    return {
        setters: [function(_m) {
            var _exportObj = {};

            for (var _key in _m) {
              if (_key !== "default" && _key !== "__esModule") _exportObj[_key] = _m[_key];
            }
      
            _export(_exportObj);
        }],
        execute: function () { }
    };
    });
});