/*!CK:3276045033!*//*1431226099,*/

if (self.CavalryLogger) { CavalryLogger.start_js(["SimrD"]); }

__d("AttachmentCTA",["Style"],function(a,b,c,d,e,f,g){var h=10,i={init:function(j){var k=j.parentNode,l=Math.max(k.scrollHeight-j.scrollHeight-h*2,0);g.set(j,'margin-top',l+'px');}};e.exports=i;},null);
__d("CanvasRHCHeightController.react",["React","DOMQuery"],function(a,b,c,d,e,f,g,h){var i=g.createClass({displayName:"CanvasRHCHeightController",propTypes:{rhc:g.PropTypes.object},render:function(){var j=h.find(document,'#contentArea'),k=0;if(this.props.rhc.scrollHeight<j.scrollHeight)k=j.scrollHeight-this.props.rhc.scrollHeight;var l={height:k+'px'};return (g.createElement("div",{style:l}));}});e.exports=i;},null);
__d("getNormalizedClientRect",["getDocumentScrollElement"],function(a,b,c,d,e,f,g){'use strict';function h(i){var j=i.getBoundingClientRect(),k=0,l=0,m=g(i.ownerDocument),n=m.getBoundingClientRect();if(n.left>0){k=-n.left;}else{var o=m.scrollWidth+n.left,p=n.width;if(p>o)k=p-o;}if(n.top>0)l=-n.top;return {bottom:j.bottom+l,height:j.height,left:j.left+k,right:j.right+k,top:j.top+l,width:j.width};}e.exports=h;},null);
__d("GiftCredits",["AsyncRequest","Dialog","URI"],function(a,b,c,d,e,f,g,h,i){var j={dialog:null,callback:null,purchaseLock:false,purchaseLockExpiryThreshold:5000,purchaseLockTimeoutId:null,getPurchaseCreditPrompt:function(k,l,m,n){j.main(k,null,null,null,m,null,null,null,'BuyCredits',{},n);},redeemGiftcard:function(k,l,m){var n=i(document.location).setPath('/giftcards').toString();j.main(k,null,null,n,null,null,null,null,l,{},m);},getPrompt:function(k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,aa,ba,ca,da,ea,fa,ga,ha){j.main(k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,aa,ba,ca,da,ea,fa,ga,ha);},main:function(k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,aa,ba,ca,da,ea,fa,ga,ha){if(j.isPurchaseLocked())return false;j.setPurchaseLock(true);var ia={_path:'pay',method:'pay',display:'async',app_id:k,receiver:l,api_key:q,credits_purchase:x,action:s,next:n,dev_purchase_params:JSON.stringify(t),additional_params:JSON.stringify(u),order_info:JSON.stringify(m),product:v,package_id:w,request_id:y,sdk:z,quantity:aa,quantity_min:ba,quantity_max:ca,test_currency:da,pricepoint_id:ea,user:fa,user_hash:ga,ingame_gift_data:ha},ja=new g().setURI('/fbml/ajax/dialog/').setData(ia).setMethod('GET').setReadOnly(true).setStatusElement('commerce_get_more_loading');j.callback=o;j.dialog=new h().setAsync(ja).setModal(true).setCloseHandler(function(ka){j.setPurchaseLock(false);o(ka);}).show();},isPurchaseLocked:function(){return j.purchaseLock;},setPurchaseLock:function(k){j.purchaseLock=k;if(k){j.purchaseLockTimeoutId=setTimeout(function(){j.setPurchaseLock(false);},j.purchaseLockExpiryThreshold);}else clearTimeout(j.purchaseLockTimeoutId);return true;}};e.exports=j;},null);
__d("legacy:giftcredits",["GiftCredits"],function(a,b,c,d){a.GiftCredits=b('GiftCredits');},3);
__d("CanvasResizer",["createArrayFromMixed","CSS","DOMEventListener","Vector"],function(a,b,c,d,e,f,g,h,i,j){var k;function l(){var n,o=document.documentElement;if(window.innerHeight){n=window.innerHeight;}else if(o&&o.clientHeight){n=o.clientHeight;}else n=document.body.clientHeight;for(var p=0;p<k.length;p++){var q=k[p];if(!h.hasClass(q,'noresize')){var r=j.getElementPosition(q,'document').y,s=n-r;q.style.height=s/(k.length-p)+'px';}}}i.add(window,'resize',l);var m={smartSizingFrameAdded:function(){k=[];var n=g(document.getElementsByTagName('iframe'));n.forEach(function(o){if(h.hasClass(o,'smart_sizing_iframe')&&!h.hasClass(o,'noresize')){h.removeClass(o,'canvas_iframe_util');k.push(o);}});l();}};e.exports=m;},null);
__d("StickyArea",["CSS","DOM","DOMQuery","Event","Run","Style","ViewportBounds","cx","getNormalizedClientRect","getOverlayZIndex","removeFromArray","throttle"],function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r){var s=[],t=null,u=null,v=null,w=r.acrossTransitions(x,1000);function x(){s.sort(function(da,ea){var fa=da.getNode(),ga=ea.getNode();if(fa.compareDocumentPosition){return 3-(fa.compareDocumentPosition(ga)&6);}else return fa.sourceIndex-ga.sourceIndex;});}function y(da,ea,fa){var ga=da.getPlaceholder(),ha=da.getNode(),ia=l.get(ha,'float'),ja=da.getData();if(ja.placeholderWidth!==ea||ja.placeholderHeight!==fa||ja.placeholderFloat!==ia){l.apply(ga,{'float':ia,height:fa+'px',width:ea+'px'});ja.placeholderHeight=fa;ja.placeholderWidth=ea;}if(ha.nextSibling!==ga)h.insertAfter(ha,ga);}function z(da,ea){var fa=da.getData();if(fa.fixed!==ea){l.apply(da.getNode(),fa.styles);g.conditionShow(da.getPlaceholder(),ea);fa.fixed=ea;}}function aa(da,ea){if(!da){return 0;}else if(ea.right<=da.rect.left||ea.left>=da.rect.right){return aa(da.prev,ea);}else return da.bottom;}function ba(){var da=0,ea=s.length,fa=100;function ga(ha,ia){var ja=fa;while(da<ea){var ka=s[da],la=ka.getNode();if(ia&&!i.contains(ia,la))break;fa=Math.max(ja,ka.getZIndex());var ma=ka.getData(),na=la.parentNode,oa=ma.styles;for(var pa in oa)oa[pa]='';z(ka,false);var qa=la.offsetHeight,ra=la.offsetWidth,sa=o(la),ta=aa(ha,sa)+ka.getOffset();if(sa.top<=ta){oa.width=ra+'px';var ua=parseInt(l.get(na,'padding-bottom'),10),va=o(na);if(va.bottom-ua>ta+qa){var wa=parseInt(l.get(la,'margin-left'),10);oa.position='fixed';oa.bottom='auto';oa.top=ta+'px';oa.left=sa.left-wa+'px';}else{if(!ma.parent||na!==ma.parent){if(l.get(na,'position')==='static')l.set(na,'position','relative');ma.parent=na;}oa.position='absolute';oa.top='auto';oa.bottom=ua+'px';var xa=parseInt(l.get(na,'border-left-width'),10);oa.left=(sa.left-va.left-xa)+'px';}y(ka,ra,qa);z(ka,true);}da++;ga({bottom:ta+qa,prev:ha,rect:sa},na);l.set(la,'z-index',fa++);}}ga(null,null);}function ca(da,ea,fa){"use strict";this._node=da;this._data={fixed:false,placeholderFloat:null,placeholderHeight:null,placeholderWidth:null,styles:{}};this._offset=fa;g.addClass(da,"_k");if(!ea)k.onLeave(this.destroy.bind(this));if(!s.length){t=j.listen(window,'scroll',function(){w();ba();});u=j.listen(window,'resize',function(){w();ba();});v=m.subscribe('change',function(){w();ba();});}s.push(this);ca.reflow();}ca.prototype.destroy=function(){"use strict";q(s,this);if(!s.length){t.remove();t=null;u.remove();u=null;}if(this._placeholder)h.remove(this._placeholder);var da=0;for(var ea in this._data.styles){this._data.styles[ea]='';da++;}if(da)l.apply(this._node,this._data.styles);};ca.prototype.getData=function(){"use strict";return this._data;};ca.prototype.getNode=function(){"use strict";return this._node;};ca.prototype.getOffset=function(){"use strict";return this._offset||0;};ca.prototype.getPlaceholder=function(){"use strict";if(!this._placeholder)this._placeholder=h.create('div');return this._placeholder;};ca.prototype.getZIndex=function(){"use strict";if(!this._zIndex)this._zIndex=p(this._node);return this._zIndex;};ca.prototype.setOffset=function(da){"use strict";this._offset=da;};ca.reflow=r.acrossTransitions(function(){x();ba();},100);e.exports=ca;},null);