/*!CK:3449451799!*//*1403491465,*/

if (self.CavalryLogger) { CavalryLogger.start_js(["A9k2q"]); }

__d("StreamShareVideo",["AsyncRequest","CSS","Event","cx","ge"],function(a,b,c,d,e,f,g,h,i,j,k){var l={_endpoints:[],_thumbs:[],registerThumb:function(m,n,o,p){l._endpoints[m+' '+o]=p;l._thumbs[m+' '+o]=n;},clickTitle:function(m,n,event){return this.expandInlineOrRedirect(m,n,event);},expandInlineOrRedirect:function(m,n,event){if(l._shouldFollowHref(event))return true;var o=l._thumbs[m+' '+n],p=k(o);if(p){h.addClass(p,"uiVideoThumbLoading");g.bootstrap(l._endpoints[m+' '+n],p.parentNode);return false;}return true;},clickTimeline:function(m,n,event){if(l._shouldFollowHref(event))return true;h.addClass(m,"_1xu");h.removeClass(m,"_1xv");g.bootstrap(n,m);return false;},_shouldFollowHref:function(event){event=i.$E(event);if(!event)return false;if(event.getModifiers().any||event.isMiddleClick())return true;return false;}};e.exports=l;},null);
__d("legacy:stream-share-video",["StreamShareVideo"],function(a,b,c,d){a.StreamShareVideo=b('StreamShareVideo');},3);