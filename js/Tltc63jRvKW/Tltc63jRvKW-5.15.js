/*!CK:1161041607!*//*1430137431,*/

if (self.CavalryLogger) { CavalryLogger.start_js(["ire0+"]); }

__d("AsyncDOM",["CSS","DOM"],function(a,b,c,d,e,f,g,h){var i={invoke:function(j,k){for(var l=0;l<j.length;++l){var m=j[l],n=m[0],o=m[1],p=m[2],q=m[3],r=(p&&k)||null;if(o)r=h.scry(r||document.documentElement,o)[0];switch(n){case 'eval':(new Function(q)).apply(r);break;case 'hide':g.hide(r);break;case 'show':g.show(r);break;case 'setContent':h.setContent(r,q);break;case 'appendContent':h.appendContent(r,q);break;case 'prependContent':h.prependContent(r,q);break;case 'insertAfter':h.insertAfter(r,q);break;case 'insertBefore':h.insertBefore(r,q);break;case 'remove':h.remove(r);break;case 'replace':h.replace(r,q);break;default:}}}};e.exports=i;},null);
__d("AsyncFormRequestUtils",["Arbiter"],function(a,b,c,d,e,f,g){var h={subscribe:function(i,j,k){g.subscribe('AsyncRequest/'+j,function(l,m){var n=m.request.relativeTo;if(n&&n===i)k(m);});}};e.exports=h;},null);
__d("EmbedLikeButton",["AsyncFormRequestUtils","ClientIDs","CSS","Event","Form"],function(a,b,c,d,e,f,g,h,i,j,k){var l={addClientId:function(m){m.setAttribute('value',h.getNewClientID());},init:function(m,n,o,p){var q=function(r){return k.bootstrap(p);};j.listen(m,'click',q);j.listen(n,'click',q);g.subscribe(p,'send',function(r){var s=o.getAttribute('value')==='1';if(s){i.hide(m);i.show(n);}else{i.hide(n);i.show(m);}o.setAttribute('value',s?'':'1');});}};e.exports=l;},null);
__d("MorePagerFetchOnScroll",["AsyncRequest","DOMQuery","Event","Style","Vector","throttle"],function(a,b,c,d,e,f,g,h,i,j,k,l){var m={};function n(o,p){"use strict";this._pager=o;this._offset=p||0;this._scrollParent=j.getScrollParent(o);this.setPagerInViewHandler(this._defaultPagerInViewHandler.bind(this));this._hasEventHandlers=false;if(!this.check()){this._scrollListener=i.listen(this._scrollParent,'scroll',l(function(){this.check();}.bind(this),50));this._clickListener=i.listen(this._scrollParent,'click',l(function(){this.check();}.bind(this),50));this._hasEventHandlers=true;}m[o.id]=this;}n.prototype.check=function(){"use strict";if(!h.contains(document.body,this._pager)){this.removeEventListeners();return true;}var o=k.getElementPosition(this._pager).y,p=this._scrollParent===window?k.getViewportDimensions().y:k.getElementDimensions(this._scrollParent).y,q=this._scrollParent===window?k.getScrollPosition().y+p:k.getElementPosition(this._scrollParent).y+p;if(o-this._offset<q){this._inViewHandler();this.removeEventListeners();return true;}return false;};n.prototype.removeEventListeners=function(){"use strict";if(this._hasEventHandlers){this._scrollListener&&this._scrollListener.remove();this._clickListener&&this._clickListener.remove();this._hasEventHandlers=false;}};n.prototype.setPagerInViewHandler=function(o){"use strict";this._inViewHandler=o;return this;};n.prototype._defaultPagerInViewHandler=function(){"use strict";var o=h.scry(this._pager,'a')[0];if(o)g.bootstrap(o.getAttribute('ajaxify')||o.href,o);};n.getInstance=function(o){"use strict";return m[o];};e.exports=n;},null);
__d("PluginLikebox",["AsyncDOM","AsyncRequest","CSS","DOMEvent","DOMEventListener","DOMQuery","EmbedLikeButton","Event","MorePagerFetchOnScroll","PlatformWidgetEndpoint","Popup","copyProperties"],function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r){var s=3;function t(u,v,w){this.stream_id=u;this.force_wall=v;this.width=w;this.retries=0;this.load();k.add(l.find(document.body,'.pluginLikeboxStream'),'click',function(x){var y=new j(x),z=y.target.parentNode;if(i.hasClass(z,'text_exposed_link')){y.kill();i.addClass(l.find(z,'^.text_exposed_root'),'text_exposed');}var aa=y.target.href?y.target:y.target.parentNode.href?y.target.parentNode:null;if(aa&&aa.pathname==='/sharer/sharer.php'){y.kill();q.open(aa.href,670,340);}});}r(t.prototype,{load:function(u){new h().setMethod('GET').setURI(p.plugins('likebox','stream')).setData({id:this.stream_id,dom:u?'pluginLikeboxMoreStories':'pluginLikeboxStream',force_wall:this.force_wall,nobootload:1,inlinecss:1,max_timestamp:u,width:this.width}).setReadOnly(true).setErrorHandler(function(){}).setHandler(this.handleResponse.bind(this)).send();},handleResponse:function(u){if(u.inlinecss){var v=document.createElement('style');v.setAttribute("type","text/css");document.getElementsByTagName('head')[0].appendChild(v);if(v.styleSheet){v.styleSheet.cssText=u.inlinecss;}else v.appendChild(document.createTextNode(u.inlinecss));}g.invoke(u.domops);(function(){var z=l.scry(document.body,'.embeddedForm'),aa='embeddedProcessed';z.map(function(ba){if(!i.hasClass(ba,aa)){var ca=l.find(ba,'.embeddedLikeButton'),da=l.find(ba,'.embeddedUnlikeButton');l.scry(ca,'a').concat(l.scry(da,'a')).forEach(function(ea){n.listen(ea,'click',function(fa){fa.preventDefault();});});m.addClientId(l.find(ba,'input[name="client_id"]'));m.init(ca,da,l.find(ba,'input[name="like_action"]'),ba);i.addClass(ba,aa);}});})();var w=l.scry(document.body,"#pluginLikeboxMoreStories a");if(!w.length)return;w=w[0];var x=function(){this.load(parseInt(w.getAttribute('data-timestamp'),10));var z=l.find(w.parentNode,'.uiMorePagerLoader');i.addClass(z,'uiMorePagerPrimary');i.removeClass(z,'uiMorePagerLoader');i.hide(w);}.bind(this);k.add(w,'click',function(z){new j(z).kill();x();});new o(w,0).setPagerInViewHandler(x);var y=parseInt(w.getAttribute('data-storycount'),10);if(y===0){if(this.retries<=s){this.retries++;x();}else i.hide(w);}else this.retries=0;return h.suppressOnloadToken;}});e.exports=t;},null);