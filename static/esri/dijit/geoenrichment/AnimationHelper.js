// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.24/esri/copyright.txt for details.
//>>built
define("esri/dijit/geoenrichment/AnimationHelper","../../declare dojo/_base/array dojo/_base/lang dojo/dom-class dojo/dom-construct dojo/dom-geometry dojo/sniff dojo/on dojo/Deferred".split(" "),function(p,u,q,k,v,w,f,r,t){var h,n;n=!(29>f("chrome")||23>f("ff")||6>f("safari")||10>f("ie"));h=function(a,e){for(var c=function(a){var c=a.type;h=c;for(var d in b)d!==c&&(b[d].remove(),delete b[d]);e.apply(this,arguments)},b={},l=["animationend","webkitAnimationEnd"],g=0;g<l.length;g++)b[l[g]]=r(a,l[g],
c);return{remove:function(){for(var a in b)b.hasOwnProperty(a)&&b[a].remove()}}};var x=p(null,{_oldNode:null,_targets:null,_deferred:null,start:function(a,e){this._oldNode=e;this._deferred=new t;if(!n)return this.finish(),this._deferred.promise;this._targets=a;r.once(a[0].node,h,q.hitch(this,this.finish));for(var c=0;c<a.length;c++){var b=a[c];k.add(b.node,b.classes);k.add(b.node,"Anim_Common")}return this._deferred.promise},finish:function(){if(this._targets){for(var a=0;a<this._targets.length;a++){var e=
this._targets[a];k.remove(e.node,e.classes);k.remove(e.node,"Anim_Common")}this._targets=null}this._oldNode&&(this.onNodePreDestroy(this._oldNode),v.destroy(this._oldNode),this._oldNode=null);this._deferred.resolve()},onNodePreDestroy:function(a){}});return p(null,{progress:null,_items:null,_flySurfaceNode:null,_ltr:w.isBodyLtr(),constructor:function(a){this._flySurfaceNode=a;this._items=[]},start:function(a,e){var c=this,b=new x;b.onNodePreDestroy=function(a){c.onNodePreDestroy(a)};this._items.push(b);
this.progress||(this.progress=new t);return b.start(a,e).then(q.hitch(this,this._onItemFinished,b))},_onItemFinished:function(a){a=u.indexOf(this._items,a);0<=a&&(this._items.splice(a,1),0===this._items.length&&this.progress&&(this.progress.resolve(),this.progress=null))},finish:function(){for(var a=this._items;0<a.length;)a[a.length-1].finish()},fly:function(a,e,c,b){b=b||a.cloneNode(!0);c||(c=["top",this._ltr?"left":"right"]);if(!n)return b;a=a.getBoundingClientRect();var l=this._flySurfaceNode.getBoundingClientRect();
k.add(b,"Anim_FlyingObj");for(var g,f,h=0;h<c.length;h++){var d=c[h],m=a[d]-l[d];if("right"===d||"bottom"===d)m=-m;if("left"===d&&!this._ltr||"right"===d&&this._ltr)g=d,f=m;b.style[d]=m+"px"}this._flySurfaceNode.appendChild(b);g&&(f+=a.width-b.getBoundingClientRect().width,b.style[g]=f+"px");this.start([{node:b,classes:[e]}],b);return b},onNodePreDestroy:function(a){}})});