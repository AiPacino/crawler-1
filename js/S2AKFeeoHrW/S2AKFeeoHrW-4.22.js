/*!CK:3482541289!*//*1429676315,*/

if (self.CavalryLogger) { CavalryLogger.start_js(["wQwhZ"]); }

__d("PubContentTrendingUnitTruncation",["DOM","PubContentTrendingUnitEllipsis","Style","csx"],function(a,b,c,d,e,f,g,h,i,j){var k,l={truncate:function(m){var n=g.scry(m,"._5v9v"),o=n[n.length-1];if(o){if(k===(void 0)){var p=g.find(m,"._uhk");k=i.getFloat(p,'maxHeight');}var q=g.find(m,"._5r--");h.add(o,k,q);}}};e.exports=l;},null);
__d("XPubcontentTrendingSeeMoreController",["XController"],function(a,b,c,d,e,f){e.exports=b("XController").create("\/pubcontent\/trending\/see_more\/",{topic_ids:{type:"IntVector",defaultValue:[]},position:{type:"Int",required:true}});},null);
__d("NewPubcontentTrendingUnitToggle",["AsyncRequest","CSS","DOM","Event","PubContentTrendingUnitTruncation","XPubcontentTrendingSeeMoreController","Run","csx","cx"],function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o){var p=false,q=[],r,s;function t(){if(r){r.remove();r=null;}if(s){s.remove();s=null;}}var u={listenForToggle:function(v,w,x,y,z,aa){function ba(){t();p=true;if(y)h.addClass(y,"_24gw");if(w)h.hide(w);if(x)h.show(x);z.forEach(function(da){q.push(da);});var ca=(l.getURIBuilder()).setIntVector('topic_ids',q).setInt('position',aa).getURI();new g().setURI(ca).setHandler(function(){if(x)h.hide(x);i.scry(v,"._5my1").forEach(function(da){k.truncate(da);});}).send();}if(y)r=j.listen(y,'click',ba);if(w)s=j.listen(w,'click',ba);m.onLeave(t);},isToggled:function(){return p;},setIsToggled:function(v){j.fire(v,'click');},addTopicID:function(v){q.push(v);}};e.exports=u;},null);
__d("PubcontentTrendingUnitToggle",["CSS","DOM","Event","PubContentTrendingUnitTruncation","Run","csx","cx"],function(a,b,c,d,e,f,g,h,i,j,k,l,m){var n=false,o,p;function q(){if(o){o.remove();o=null;}if(p){p.remove();p=null;}}var r={listenForToggle:function(s,t,u){function v(){q();n=true;if(u)g.addClass(u,"_24gw");if(t)g.hide(t);h.scry(s,"._5my1").forEach(function(w){g.show(w);j.truncate(w);});}if(u)o=i.listen(u,'click',v);if(t)p=i.listen(t,'click',v);k.onLeave(q);},isToggled:function(){return n;}};e.exports=r;},null);
__d("XPubcontentTrendingReplaceTrendsController",["XController"],function(a,b,c,d,e,f){e.exports=b("XController").create("\/pubcontent\/trending\/trending_unit\/",{is_expanded:{type:"Bool",defaultValue:false}});},null);
__d("PubcontentTrendingUnitRefresh",["AsyncRequest","PubcontentTrendingUnitToggle","XPubcontentTrendingReplaceTrendsController"],function(a,b,c,d,e,f,g,h,i){var j={refreshTrendingUnitWithDelay:function(k){var l=k*1000;setTimeout(function(){var m=h.isToggled(),n=(i.getURIBuilder()).setBool('is_expanded',m).getURI();new g().setURI(n).send();},l);}};e.exports=j;},null);
__d("TrendingRHCLogger",["AsyncSignal","CSS","Event","Parent","Run","BanzaiScuba","TrendingRHCConfig","cx"],function(a,b,c,d,e,f,g,h,i,j,k,l,m,n){var o,p,q,r,s,t,u,v,w=3,x=false,y=false;function z(ea,fa,ga,ha){var ia=new l('trending_rhc',null,{sampleRate:m.sample_rate});ia.addNormal('country',s);ia.addNormal('post_search_trending_feeds',m.post_search_trending_feeds);ia.addNormal('event',fa);ia.addNormal('position',ea);ia.addNormal('qe_group',p);if(x){var ja=ea<=w?q:v;ia.addNormal('source',ja);}else ia.addNormal('source',q);ia.addNormVector('categories',ga);ia.addNormal('topic_id',ha);ia.post();}function aa(ea,fa){var ga=ea.getAttribute('data-position');if(!ga)return;var ha=ea.getAttribute('data-categories'),ia=ha?JSON.parse(ha):null,ja=ea.getAttribute('data-topicid');z(ga,fa,ia,ja);}function ba(event){var ea=null,fa=event.getTarget(),ga=j.byClass(event.getTarget(),"_2w2e");if(ga){fa=ga;}else if(!h.hasClass(fa,"_5my2")){ea=j.byClass(fa,"_4_nl");fa=j.byClass(fa,"_5my2");}if(!fa||ea||h.hasClass(event.getTarget(),"_19_3")||h.hasClass(event.getTarget(),"_1k6k"))return;aa(fa,'click');var ha=fa.getAttribute('data-position');if(ha==='seemore'||ha==='trendingheader')if(x){y=true;}else ca();}function ca(){if(!o)return;if(x){new g('/ajax/pubcontent/trending_rhc/log_hidden',{keys:JSON.stringify(o),source:v,scores:JSON.stringify(t),query_id:u}).send();}else new g('/ajax/pubcontent/trending_rhc/log_hidden',{keys:JSON.stringify(o),source:q,scores:JSON.stringify(t),query_id:r}).send();o=null;}var da={init:function(ea,fa){q=fa.source;p=fa.qe_group;s=fa.country;o=fa.hidden_keys;r=fa.query_id;t=fa.hidden_scores;if(fa.has_litestand==='gk')x=true;var ga=i.listen(ea,'click',ba);k.onLeave(function(){ga.remove();});},initSeeMore:function(ea,fa,ga,ha,ia){o=fa;t=ga;u=ha;v=ia;var ja=i.listen(ea,'click',ba);if(y){ca();}else y=false;k.onLeave(function(){ja.remove();});},logHovercardArticleClick:function(ea,fa){z(ea,'hover_article_click',null,fa);},logHovercardFeedClick:function(ea,fa){z(ea,'hover_feed_click',null,fa);},logImpression:function(ea){aa(ea,'imp');},getSource:function(){return q;},getQueryID:function(){return r;},getSeeMoreSource:function(){return v;},getSeeMoreQueryID:function(){return u;}};e.exports=da;},null);
__d("XPubcontentTrendingHideConfirmController",["XController"],function(a,b,c,d,e,f){e.exports=b("XController").create("\/pubcontent\/trending\/hide_confirm\/",{hidden_topic_id:{type:"Int",required:true},position:{type:"Int",defaultValue:0},reason:{type:"Int",required:true},source:{type:"String"},trqid:{type:"Int",defaultValue:-1}});},null);
__d("XPubcontentTrendingInsertItemController",["XController"],function(a,b,c,d,e,f){e.exports=b("XController").create("\/pubcontent\/trending\/hide_options\/",{num_removed_topics:{type:"Int",defaultValue:0},trending_topic_id:{type:"Int",required:true},topic_ids:{type:"IntVector",defaultValue:[]}});},null);
__d("TrendingRHCHideForDeferredSeemore",["AsyncRequest","CSS","DOM","DOMQuery","Event","PubContentTrendingUnitTruncation","TrendingRHCLogger","URI","XPubcontentTrendingHideConfirmController","XPubcontentTrendingInsertItemController","cx","csx","tidyEvent"],function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s){var t,u,v=false,w=['webkitAnimationEnd','animationend','mozAnimationEnd','oAnimationEnd','MSAnimationEnd'];function x(da){h.removeClass(da,"_4_ni");}function y(da){da.sort(function(ea,fa){var ga=Number(ea.getAttribute('data-position')),ha=Number(fa.getAttribute('data-position'));if(ga&&ha)return ga<ha?-1:1;return 0;});return da;}function z(da,ea){var fa=j.scry(da,"._5my2"),ga=fa.filter(function(ia){var ja=Number(ia.getAttribute('data-position'));return ja>=ea;}),ha=[];ga.forEach(function(ia){var ja=Number(ia.getAttribute('data-position'));ia.setAttribute('data-position',ja-1);var ka=j.scry(ia,"._7ge");ka.forEach(function(la){var ma=n(la.getAttribute('href')).addQueryData('position',ja-1);ha.push({link:la,uri:ma.toString()});});});ha.forEach(function(ia){var ja=ia.link;ja.setAttribute('href',ia.uri);});u++;}function aa(da,ea){var fa=da[0],ga=da.filter(function(ha){return !h.hasClass(ha,"_5my1");});if(ga&&ga[0])h.addClass(ga[0],"_5my1");h.addClass(fa,"_4_ni");h.show(fa);m.logImpression(fa);w.forEach(function(event){fa.addEventListener(event,function(){l.truncate(fa);});});}function ba(da,ea){var fa=j.find(da,"^._5mym"),ga=j.scry(fa,"._5my2.hidden_elem");ga=y(ga);var ha=j.find(da,"^._5my2"),ia=i.create('div',{className:"_4_nj"});if(ga.length>=1)aa(ga,ha);var ja=Number(ha.getAttribute('data-position'));z(fa,ja);i.replace(ha,ia);var ka=(o.getURIBuilder()).setInt('reason',da.firstChild.value).setInt('hidden_topic_id',ea).setInt('position',ja);if(m.getSource())ka.setString('source',m.getSource());if(m.getQueryID())ka.setInt('trqid',m.getQueryID());var la=ka.getURI();new g().setURI(la).setRelativeTo(da).send();}var ca={initializeTrendingTopics:function(da){t=da;u=0;},addTopicID:function(da){if(t)t.push(da);},addTopicIDs:function(da){if(t)da.forEach(function(ea){t.push(ea);});},confirmHide:function(da,ea){var fa=false;s(k.listen(da,'click',function(){setTimeout(function(){if(fa)return;fa=true;ba(da,ea);},100);}));},listenForHide:function(da,ea){s(k.listen(da,'click',function(){var fa=j.find(da,"^._5my2");x(fa);var ga=j.find(fa,"._4_nl"),ha=j.find(fa,"._4_nm");h.hide(ha);h.show(ga);if(!v){v=true;var ia=(p.getURIBuilder()).setInt('trending_topic_id',ea).setIntVector('topic_ids',t).setInt('num_removed_topics',u).getURI();new g().setURI(ia).setRelativeTo(da).setHandler(function(){v=false;}).send();}}));},listenForUndo:function(da){var ea=j.find(da,"._4_nn");s(k.listen(ea,'click',function(){var fa=j.find(da,"^._5my2 ._4_nm");h.hide(da);h.show(fa);var ga=j.scry(fa,"^._5myl ._4loq");i.remove(ga[ga.length-1]);t.pop();}));},hideSeeMoreLink:function(){var da=j.scry(document,"a._5my9");if(da&&da.length>0&&!h.hasClass(da[0],'hidden_elem'))h.addClass(da[0],"_4_nk");}};e.exports=ca;},null);