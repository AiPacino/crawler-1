/*!CK:2116248391!*//*1429330832,*/

if (self.CavalryLogger) { CavalryLogger.start_js(["Mpgvp"]); }

__d("CurationCaretNux",["csx","cx","ge","tidyEvent","AsyncRequest","CSS","DataStore","DOM","Event","Parent","Rect"],function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q){var r="div._1zpr",s="_5jmm",t='CurationCaretNux_instance',u='CurationCaretNux_caretMenuLoaded',v=100,w="caret_nux",x="save_option_nux",y="seen",z="dismissed",aa="focus",ba="click",ca="scroll",da=false;function ea(fa,ga,ha,ia){"use strict";var ja=i(ia);if(ja){this.container=ja;this.caret=ha;this.caretNux=fa.instance;this.caretNuxData=fa;this.saveOptionNux=ga.instance;this.saveOptionNuxData=ga;this.popoverTriggered=false;var ka=p.byClass(ja,s);m.set(ka,t,this);this.$CurationCaretNux0();}}ea.prototype.$CurationCaretNux0=function(){"use strict";var fa=n.scry(this.container,r);if(fa.length>0)j([o.listen(fa[0],'click',function(){if(da)return;this.caretNux.subscribe('show',function(){this.$CurationCaretNux1();}.bind(this));this.caretNux.subscribe('hide',function(){this.$CurationCaretNux2();if(da){this.$CurationCaretNux3(w,y);this.$CurationCaretNux3(w,z);}}.bind(this));this.$CurationCaretNux4();this.interactionTime=0;setTimeout(function(){if(!this.$CurationCaretNux5()){da=true;this.caretNux.show();}}.bind(this),this.caretNuxData.min_consume_duration);setTimeout(function(){if(!this.$CurationCaretNux5()){da=false;this.caretNux.hide();}}.bind(this),this.caretNuxData.max_consume_duration);var ga=Date.now();setTimeout(function(){this.$CurationCaretNux6(function(){if(!this.interactionTime)this.interactionTime=Date.now()-ga;}.bind(this));}.bind(this),0);}.bind(this))]);};ea.prototype.$CurationCaretNux5=function(){"use strict";return this.interactionTime&&this.interactionTime>0;};ea.prototype.$CurationCaretNux1=function(){"use strict";this.caretClickListener=o.listen(this.caret,'click',function(){this.caretNux.hide();if(this.saveOptionNux){this.popoverTriggered=true;this.$CurationCaretNux7();}}.bind(this));var fa=false;this.$CurationCaretNux6(function(ga){if(fa||ga===ba||!this.caretNux.isShown())return;var ha=q.getViewportWithoutScrollbarsBounds(),ia=q.getElementBounds(this.caretNux.getContentRoot());ia=ia.sub(0,v);if(ha.contains(ia)){this.$CurationCaretNux3(w,y);fa=true;}}.bind(this));};ea.prototype.$CurationCaretNux2=function(){"use strict";this.caretClickListener.remove();this.$CurationCaretNux8();};ea.prototype.$CurationCaretNux7=function(){"use strict";if(this.$CurationCaretNux9()&&this.popoverTriggered)setTimeout(function(){var fa=n.scry(document,"li.save_caret_menu_item");for(var ga=0;ga<fa.length;ga++){var ha=fa[ga],ia=p.byClass(ha,"uiLayer");if(ia&&l.shown(ia)){this.saveOptionNux.setContext(ha);break;}}this.saveOptionNux.show();this.$CurationCaretNux3(x,y);var ja=m.get(this.caret,'Popover');ja&&ja.subscribeOnce('hide',function(){this.saveOptionNux.hide();}.bind(this));}.bind(this),0);};ea.prototype.$CurationCaretNux3=function(fa,ga){"use strict";var ha;if(fa===w){ha=this.caretNuxData;}else if(fa===x){ha=this.saveOptionNuxData;}else throw "Invalid nux type";var ia;if(ga===y){ia=ha.seen_uri;ha.seen_uri=null;}else if(ga===z){ia=ha.dismiss_uri;ha.dismiss_uri=null;}else throw "Invalid impression type";if(ia){var ja=new k(ia);if(this.interactionTime&&fa===w)ja.setData({interaction_time:this.interactionTime});ja.send();}};ea.prototype.$CurationCaretNux6=function(fa){"use strict";this.$CurationCaretNuxa.push(fa);};ea.prototype.$CurationCaretNuxb=function(fa){"use strict";this.$CurationCaretNuxa.forEach(function(ga){ga.call(this,fa);},this);};ea.prototype.$CurationCaretNux4=function(){"use strict";if(!this.$CurationCaretNuxc){this.$CurationCaretNuxa=[];this.$CurationCaretNuxc=[o.listen(window,'click',this.$CurationCaretNuxb.bind(this,ba)),o.listen(window,'focus',this.$CurationCaretNuxb.bind(this,aa)),o.listen(window,'scroll',this.$CurationCaretNuxb.bind(this,ca))];}};ea.prototype.$CurationCaretNux8=function(fa){"use strict";if(this.$CurationCaretNuxc){while(this.$CurationCaretNuxc.length)this.$CurationCaretNuxc.pop().remove();this.$CurationCaretNuxc=null;this.$CurationCaretNuxa=null;}};ea.prototype.$CurationCaretNux9=function(){"use strict";var fa=p.byClass(this.container,s);return m.get(fa,u)===true;};ea.saveOptionLoaded=function(fa){"use strict";var ga=i(fa);if(ga){var ha=p.byClass(ga,s);m.set(ha,u,true);var ia=m.get(ha,t);ia&&ia.$CurationCaretNux7();}};e.exports=ea;},null);
__d("legacy:tour",["Tour"],function(a,b,c,d){a.Tour=b('Tour');},3);