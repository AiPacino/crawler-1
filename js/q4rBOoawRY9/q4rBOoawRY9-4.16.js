/*!CK:2423561474!*//*1429191947,*/

if (self.CavalryLogger) { CavalryLogger.start_js(["9dJqL"]); }

__d("htmlize",["htmlSpecialChars"],function(a,b,c,d,e,f,g){function h(i){return g(i).replace(/\r\n|[\r\n]/g,'<br/>');}e.exports=h;},null);
__d("PluginFlyout",["Arbiter","Button","CSS","DOM","DOMEvent","DOMEventListener","Form","Plugin","TextAreaControl","copyProperties","csx"],function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q){var r=g.SUBSCRIBE_NEW,s=g.subscribe,t=g.inform,u=function(w,x){return l.add(w,'click',x);};function v(w,x,y){var z=this,aa=s(n.CONNECT,function(event,ba){g.unsubscribe(aa);z.init(w,x,y);z.connect(event,ba);},r);s(n.DIALOG,function(){z.init(w,x,y);z.toggle();},r);}p(v.prototype,{init:function(w,x,y){if(this.initialized)return;this.initialized=true;j.appendContent(w,JSON.parse(y));var z=j.find(w,'form'),aa=j.find(z,"._56zw"),ba=j.find(z,"._56zx"),ca=j.find(z,"._42x4"),da=o.getInstance(ca);l.add(ca,'keyup',function(ha){h.setEnabled(aa,!!da.getValue());});l.add(z,'submit',function(ha){new k(ha).kill();m.bootstrap(z);});var ea=(x==='tiny')?j.find(document.body,'.pluginPostFlyoutPrompt'):null;this.flyout=w;this.form=z;this.post_button=aa;this.prompt=ea;var fa=this.hide.bind(this),ga=this.show.bind(this);u(ba,function(ha){new k(ha).kill();fa();});if(ea)u(ea,function(ha){new k(ha).kill();ga();});s(n.CONNECT,this.connect.bind(this),r);s(n.DISCONNECT,function(){fa();},r);s(v.SUCCESS,function(){fa();if(ea)i.hide(ea);},r);s(n.ERROR,function(event,ha){if(ha.action!=='comment')return;j.setContent(j.find(z,"._56zy"),ha.content);i.hide(aa);},r);},connect:function(event,w){if(w.crossFrame)return;if(this.prompt)return i.show(this.prompt);if(!w.story_fbid)this.show();},show:function(){this.shown=true;i.show(this.flyout);i.show(this.post_button);this.form.comment.focus();t(v.SHOW);},hide:function(){this.shown=false;i.hide(this.flyout);t(v.HIDE);},toggle:function(){if(this.shown){this.hide();}else this.show();}});p(v,{SUCCESS:'platform/plugins/flyout/success',SHOW:'platform/plugins/flyout/show',HIDE:'platform/plugins/flyout/hide',success:function(){t(v.SUCCESS);}});e.exports=v;},null);
__d("PluginFlyoutDialog",["Arbiter","DOMEvent","DOMEventListener","PluginFlyout","copyProperties"],function(a,b,c,d,e,f,g,h,i,j,k){function l(m,n,o){this.parent=new j(m,n,o);this.flyout=m;g.subscribe(j.SHOW,this.show.bind(this),g.SUBSCRIBE_NEW);}k(l.prototype,{show:function(){if(this.subscribed)return;this.subscribed=1;var m=window.ServerJSAsyncLoader;m&&m.ondemandjs&&m.run(m.ondemandjs);i.add(this.flyout.parentNode,'click',(function(n){n=new h(n);if(n.target===this.flyout.parentNode){n.kill();this.parent.hide();}}).bind(this));}});e.exports=l;},null);
__d("TypeaheadBestName",["FamilyMentionsData","TokenizeUtil","copyProperties"],function(a,b,c,d,e,f,g,h,i){function j(k){"use strict";this._typeahead=k;}j.prototype.enable=function(){"use strict";var k=this._typeahead.getView(),l=this._getAvailableAlternateNameFields();this._subscription=k.subscribe('beforeRender',function(m,n){var o=n.value;for(var p=0;p<n.results.length;++p){var q=n.results[p],r=this._getNameToDisplay(q,o,l);if(r!==null){q.text=r;if(q.hasOwnProperty('default_name')&&q.text!==q.default_name){q.subtext=q.default_name;}else q.subtext=null;}}}.bind(this));};j.prototype.disable=function(){"use strict";this._typeahead.getView().unsubscribe(this._subscription);this._subscription=null;};j.prototype._getNameToDisplay=function(k,l,m){"use strict";if(k.hasOwnProperty('default_name')&&h.isQueryMatch(l,k.default_name))return k.default_name;for(var n=0;n<m.length;n++){var o=k[m[n]];if(o==(void 0))continue;for(var p=0;p<o.length;p++){var q=o[p];if(h.isQueryMatch(l,q))return q;}}if(k.hasOwnProperty('default_name'))return k.default_name;return null;};j.prototype._getAvailableAlternateNameFields=function(){"use strict";var k=['alternate_names'];if(g.allowFamilyNames)k.push('family_names');return k;};i(j.prototype,{_subscription:null});e.exports=j;},null);
__d("legacy:BestNameTypeaheadBehavior",["TypeaheadBestName"],function(a,b,c,d,e,f,g){if(!a.TypeaheadBehaviors)a.TypeaheadBehaviors={};a.TypeaheadBehaviors.buildBestAvailableNames=function(h){h.enableBehavior(g);};},3);
__d("MentionsInputMatchers",[],function(a,b,c,d,e,f){var g=['@','\\uff20'].join(''),h=['#','\\uFF03'].join(''),i='.,+*?$|#{}()\\^\\-\\[\\]\\\\\/!%\'"~=<>_:;\n\r',j=i.replace('#','')+'&';function k(n,o){"use strict";this.$Matchers0=n;this.$Matchers1=o;this.$Matchers2();}k.prototype.$Matchers2=function(){"use strict";var n=this.$Matchers3(this.$Matchers1),o=this.$Matchers4(this.$Matchers0,this.$Matchers1),p=this.$Matchers5(this.$Matchers0,o),q=this.$Matchers6(n,p),r=this.$Matchers7(n);this.$Matchers8=new RegExp('['+this.$Matchers0+']$');this.$Matchers9=new RegExp(p+'$');this.$Matchersa=new RegExp(r+'$');this.$Matchersb=new RegExp(q+'$');this.$Matchersc=new RegExp('['+h+']');};k.prototype.$Matchers3=function(n){"use strict";return '\\b[A-Z][^ A-Z'+n+']';};k.prototype.$Matchers4=function(n,o){"use strict";return '(?:[^'+n+o+']|['+o+'][^ '+o+'])';};k.prototype.$Matchers5=function(n,o){"use strict";return '(?:^|\\s)(?:['+n+']('+o+'{0,20}))';};k.prototype.$Matchers6=function(n,o){"use strict";return '(?:(?:^|[^#])('+n+'+)|'+o+')';};k.prototype.$Matchers7=function(n){"use strict";return '(?:'+n+'{4,})';};k.prototype.getMainMatcher=function(){"use strict";return this.$Matchers9;};k.prototype.getTriggerMatcher=function(){"use strict";return this.$Matchers8;};k.prototype.getAutoMatcher=function(){"use strict";return this.$Matchersb;};k.prototype.getHashtagMatcher=function(){"use strict";return this.$Matchersc;};var l='\\b[A-Z][^ A-Z'+i+']',m={mentionsMatchers:new k(g,i),hashtagMatchers:new k(h,j),userMatcher:new RegExp('(?:'+l+'{4,})'+'$')};e.exports=m;},null);
__d("MentionsInput",["Arbiter","ArbiterMixin","Bootloader","CSS","DataStore","DOM","Event","FlipDirection","Input","InputSelection","Keys","MentionsInputMatchers","Parent","Style","TokenizeUtil","UserAgent_DEPRECATED","htmlize","mixin","removeFromArray","cx"],function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z){var aa='\u200B',ba=new RegExp(aa,'g'),ca=function(pa){return pa+aa;},da='\uFFFD',ea=/@+\[[0-9]+\:([^\]]|\\\])*\]+/g,fa=/[\\\]:]/g,ga={MENTIONS:'mentions',HASHTAGS:'hashtags'};function ha(pa,qa){return pa.replace(qa,' '.repeat(qa.length));}function ia(pa,qa){return pa.substring(0,qa)+pa.substring(qa+1);}function ja(pa){var qa=pa.lastIndexOf('>');if(qa>=0){var ra=pa.indexOf(' ',qa);return ra>=0?pa.substr(0,ra+1):pa;}else return '';}function ka(pa,qa,ra){var sa=ra.lastIndexOf('<',qa)>ra.lastIndexOf('>',qa);return sa?' ':'&nbsp;<wbr />';}var la=x(h);for(var ma in la)if(la.hasOwnProperty(ma))oa[ma]=la[ma];var na=la===null?null:la.prototype;oa.prototype=Object.create(na);oa.prototype.constructor=oa;oa.__superConstructor__=la;function oa(pa,qa,ra,sa,ta,ua){"use strict";k.set(pa,'MentionsInput',this);this._root=pa;this._typeahead=qa;this._input=ra;this._offsets=[];var va=null,wa=this.init.bind(this,sa,ta,ua);try{va=document.activeElement===this._input;}catch(xa){}if(va){setTimeout(wa,0);}else var ya=m.listen(this._input,'focus',function(){setTimeout(wa,0);ya.remove();});this._hasHashtags=sa.hashtags;this._hashtagsDataSource=sa.hashtags_data_source;this._mentionsDataSource=this._typeahead.getData();this._currentDataSource=this._mentionsDataSource;this._autoSuggestPages=sa.autosuggest_pages;this._lastHighlighterHTML='';this._hashtags=[];this._matchers=r.mentionsMatchers;this._setMatchersMode(ga.MENTIONS);}oa.prototype.init=function(pa,qa,ra){"use strict";if(this._initialized)return;this._initValue=qa?qa.value:'';this._initialized=true;this._highlighter=l.find(this._root,'.highlighter');this._highlighterInner=this._highlighter.firstChild;this._highlighterContent=l.find(this._root,'.highlighterContent');this._hiddenInput=l.find(this._root,'.mentionsHidden');this._placeholder=this._input.getAttribute('placeholder')||'';this._metrics=ra;if(!this._hiddenInput.name){var sa=this._input.name;this._input.name=sa+'_text';this._hiddenInput.name=sa;}this._initEvents();this._initTypeahead();if(qa===null){this._setup();}else this.reset(qa);if(pa.autoheight)this._typeahead.getCore().updateHeight&&this._typeahead.getCore().updateHeight();this.inform('init',null,g.BEHAVIOR_STATE);};oa.prototype._setup=function(){"use strict";this._mentioned={};this._orderedUIDs=[];this._numMentioned=0;this._filterData=null;this._highlighterContent&&l.empty(this._highlighterContent);this._highlighterAuxContent&&l.remove(this._highlighterAuxContent);this._highlighterAuxContent=null;o.setPlaceholder(this._input,this._placeholder);t.set(this._typeahead.getElement(),'height','auto');};oa.prototype.reset=function(pa){"use strict";if(!this._initialized)return;this._setup();var qa=pa&&pa.value||'';this._value=qa;this._hiddenInput&&(this._hiddenInput.value=qa);if(this._input&&pa)o.setValue(this._input,pa.value);var ra=pa&&pa.mentions;if(ra&&ra.length){var sa=[];ra.forEach(function(ta){sa.push(ta.offset+ta.length);delete ta.offset;delete ta.length;this._addToken(ta);},this);sa.reverse().forEach(function(ta){qa=qa.substring(0,ta)+aa+qa.substring(ta);});}o.setValue(this._input,qa);if(this._value==='')n.setDirection(this._input);this._update();};oa.prototype.getValue=function(){"use strict";return o.getValue(this._input).replace(ba,'');};oa.prototype._getMarkedValue=function(){"use strict";return o.getValueRaw(this._input);};oa.prototype.getRawValue=function(){"use strict";this._update();return o.getValue(this._hiddenInput);};oa.prototype.checkValue=function(){"use strict";var pa=this._typeahead.getCore().getValue();if(this._matchers.getTriggerMatcher().exec(pa)||pa==='')this.inform('sessionEnd',{});};oa.prototype.getTypeahead=function(){"use strict";return this._typeahead;};oa.prototype.hasChanges=function(){"use strict";return !o.isEmpty(this._input)&&this._input.value!==this._initValue&&this._initialized;};oa.prototype.focus=function(){"use strict";this._input.focus();};oa.prototype._initEvents=function(){"use strict";var pa=this._update.bind(this);m.listen(this._input,{input:pa,keyup:pa,change:pa,blur:this._handleBlur.bind(this),focus:this._handleFocus.bind(this),keydown:this._handleKeydown.bind(this)});if(this._metrics){this._metrics.init(this._typeahead);this._metrics._reset();this._metrics.bindSessionStart(this._typeahead,'render',true);this._metrics.bindSessionEnd(this._typeahead.getView(),'select',true);this._metrics.bindSessionEnd(this,'sessionEnd',false);m.listen(this._input,'keyup',function(event){setTimeout(this.checkValue.bind(this),0);}.bind(this));}};oa.prototype._initTypeahead=function(){"use strict";this._typeahead.subscribe('select',function(ua,va){var wa=va.selected;this._addToken({uid:wa.uid,text:wa.text,type:wa.type,weakreference:wa.weak_reference});this.updateValue();}.bind(this));var pa=this._input,qa=null;function ra(){if(qa===null){qa=o.getSubmitOnEnter(pa);o.setSubmitOnEnter(pa,false);}}function sa(){if(qa!==null){o.setSubmitOnEnter(pa,qa);qa=null;}}this._typeahead.subscribe('reset',sa);this._typeahead.subscribe('render',ra);this._typeahead.subscribe('highlight',function(ua,va){va.index>=0?ra():sa();});this._typeahead.subscribe('query',function(){this._filterData=null;}.bind(this));var ta=this._typeahead.getCore();ta.suffix=aa;this._handleFocus();};oa.prototype._handleBlur=function(){"use strict";if(this._filterToken){this._filterToken.remove();this._filterToken=null;}};oa.prototype._handleFocus=function(){"use strict";if(!this._filterToken)this._filterToken=this._typeahead.getData().addFilter(this._filterResults.bind(this));this._updateWidth();};oa.prototype._handleKeydown=function(event){"use strict";var pa=event.keyCode;if(pa==q.BACKSPACE||pa==q.DELETE)this._handleBackspaceAndDelete(event,pa);if(pa==q.LEFT||pa==q.RIGHT)setTimeout(this._handleLeftAndRight.bind(this,pa),10);};oa.prototype._handleLeftAndRight=function(pa){"use strict";var qa=this._getMarkedValue(),ra=p.get(this._input),sa=ra.start,ta=ra.end,ua=pa==q.LEFT,va=pa==q.RIGHT;if(sa==ta){var wa=ua?-1:1;if(qa.charAt(sa)==aa)p.set(this._input,sa+wa);}else if(ua&&qa.charAt(sa)==aa){p.set(this._input,sa-1,ta);}else if(ua&&qa.charAt(ta)==aa){p.set(this._input,sa,ta-1);}else if(va&&qa.charAt(ta)==aa){p.set(this._input,sa,ta+1);}else if(va&&qa.charAt(sa)==aa)p.set(this._input,sa+1,ta);};oa.prototype._handleBackspaceAndDelete=function(event,pa){"use strict";var qa=p.get(this._input),ra=false;if(qa.start!==qa.end)if(this._offsetIsInsideMention(qa.start+1)&&this._offsetIsInsideMention(qa.end)){ra=(pa===q.BACKSPACE);}else return;var sa=pa===q.DELETE?1:-1,ta=sa+(ra?qa.end:qa.start),ua=this._getMarkedValue(),va=ua;for(var wa=0;wa<this._orderedUIDs.length;++wa){var xa=this._mentioned[this._orderedUIDs[wa]],ya=xa.text,za=ca(ya),ab=va.indexOf(za),bb=ab+za.length;if(ta<ab||ta>=bb){va=ha(va,za);continue;}var cb,db;if(xa.type!='user'){cb=0;db=[ya];}else{cb=za.substring(0,ta-ab).split(' ').length-1;db=ya.split(' ');}var eb=db.splice(cb,1)[0],fb=db.join(' '),gb=cb===0?ab:bb-eb.length-1;if(fb){xa.text=fb;fb=ca(fb);}else this._removeToken(xa.uid);var hb=ua.substring(0,ab)+fb+ua.substring(bb);o.setValue(this._input,hb);p.set(this._input,gb);this._update();event.kill();break;}};oa.prototype._offsetIsInsideMention=function(pa){"use strict";for(var qa=0;qa<this._offsets.length;qa++)if(pa>this._offsets[qa][0]&&pa<=this._offsets[qa][1])return true;return false;};oa.prototype._filterResults=function(pa){"use strict";if(this._filterData===null){var qa=p.get(this._input).start;if(this._offsetIsInsideMention(qa)){this._filterData={caretIsInsideMention:true};return false;}var ra=this._typeahead.getCore();this._filterData={value:ra.getValue(),rawValue:ra.getRawValue()};}if(this._filterData.caretIsInsideMention)return false;if(this._matchers.getMainMatcher().test(this._filterData.rawValue))return true;if(pa.type!='user'&&!pa.connected_page)return false;if(pa.disable_autosuggest)return false;if(this._matchersMode===ga.MENTIONS&&r.userMatcher.test(this._filterData.value))return true;return u.isExactMatch(this._filterData.value,this._typeahead.getData().getTextToIndex(pa));};oa.prototype._addToken=function(pa){"use strict";var qa=pa.uid;if(!this._mentioned.hasOwnProperty(qa)){this._mentioned[qa]=pa;var ra=this._orderedUIDs,sa=this._getMarkedValue().replace(ea,da),ta=sa.indexOf(ca(this._mentioned[qa].text)),ua=false,va=0;for(var wa=0;wa<ra.length;++wa){var xa=ca(this._mentioned[ra[wa]].text),ya=sa.indexOf(xa,va);va=ya+xa.length;if(ta<ya){this._orderedUIDs.splice(wa,0,qa);ua=true;break;}}if(!ua)this._orderedUIDs.push(qa);this._numMentioned++;this._update();}};oa.prototype._removeToken=function(pa){"use strict";if(this._mentioned.hasOwnProperty(pa)){delete this._mentioned[pa];y(this._orderedUIDs,pa);this._numMentioned--;this._update();}};oa.prototype._update=function(){"use strict";var pa=this._getMarkedValue();this._checkShouldSwapDataSource(pa);if(pa==this._value)return;this._value=pa;this._updateTypeahead();this._updateMentions();this._updateWidth();setTimeout(this._updateDirection.bind(this),0);this.updateValue();var qa=this.hasAuxContent();this.inform('valueUpdate',{value:pa,hasAuxContent:qa});};oa.prototype._updateMentions=function(){"use strict";this._offsets=[];var pa=this._getMarkedValue(),qa=pa;for(var ra=0;ra<this._orderedUIDs.length;++ra){var sa=this._orderedUIDs[ra],ta=ca(this._mentioned[sa].text),ua=qa.indexOf(ta);if(ua==-1)this._removeToken(sa);qa=ha(qa,ta);this._offsets.push([ua,ua+ta.length]);}var va=pa;while((ua=qa.indexOf(aa))>-1){va=ia(va,ua);qa=ia(qa,ua);}if(pa!==va){var wa=p.get(this._input);o.setValue(this._input,va);p.set(this._input,wa.start);this._value=va;}};oa.prototype._renderHashtags=function(pa){"use strict";this._initHashtagParser(pa);if(!this._hasHashtags||!this._hashtagParser)return w(pa);this._hashtags=this._hashtagParser.parse(pa);var qa=[],ra=0;for(var sa=0;sa<this._hashtags.length;sa++){var ta=this._hashtags[sa];qa.push(w(pa.substring(ra,ta.rawOffset)),'<b>',ta.marker,ta.tag,'</b>');ra=ta.rawOffset+ta.marker.length+ta.tag.length;}qa.push(w(pa.substring(ra)));return qa.join('');};oa.prototype.updateValue=function(){"use strict";var pa=this._value=this._getMarkedValue(),qa=this._orderedUIDs,ra=pa.replace(ea,da);for(var sa=0;sa<qa.length;++sa){var ta='@['+qa[sa]+':]',ua=ca(this._mentioned[qa[sa]].text);ra=ra.replace(ua,ta);pa=pa.replace(ua,ta);}var va=this._renderHashtags(pa);for(var sa=0;sa<qa.length;++sa){var wa=qa[sa],xa=this._mentioned[wa],ya=xa.text,za=xa.weakreference?'<b class="weak">':'<b>';va=va.replace('@['+wa+':]',za+w(ca(ya))+'</b>');ya=ya.replace(fa,function(bb){return '\\'+bb;});ra=ra.replace('@['+wa+':]','@['+wa+':'+ya+']');}var ab=ja(va);if(this._highlighterAuxContent||ab!==this._lastHighlighterHTML){if(v.ie()<9)va=va.replace(/ /g,ka);this._highlighterContent.innerHTML=va;this._updateHighlighter();this._lastHighlighterHTML=ab;}this._hiddenInput.value=ra;this._updateHeight();};oa.prototype._updateDirection=function(){"use strict";var pa=t.get(this._input,'direction');if(pa==this._dir)return;this._dir=pa;t.set(this._highlighter,'direction',pa);if(pa=='rtl'){t.set(this._highlighter,'text-align','right');}else t.set(this._highlighter,'text-align','left');};oa.prototype._updateWidth=function(){"use strict";var pa=this._input.offsetWidth;if(pa===this._lastInputWidth)return;this._lastInputWidth=pa;var qa=t.getFloat.bind(null,this._input),ra=pa-qa('paddingLeft')-qa('paddingRight')-qa('borderLeftWidth')-qa('borderRightWidth');this._highlighterInner.style.width=Math.max(ra,0)+'px';};oa.prototype._updateHeight=function(){"use strict";if(this._highlighterAuxContent){var pa=this._highlighter.offsetHeight,qa=this._typeahead.getElement();if(pa>qa.offsetHeight){if(this._typeahead.setHeight){this._typeahead.setHeight(pa);}else t.set(qa,'height',pa+'px');g.inform('reflow');}}};oa.prototype._updateTypeahead=function(){"use strict";var pa=this._typeahead.getCore();pa.matcher=this._matchers.getAutoMatcher();pa.setExclusions(this._orderedUIDs);this.inform('update',{mentioned:this._mentioned});};oa.prototype.setPlaceholder=function(pa){"use strict";this._placeholder=pa;if(!this.hasAuxContent())o.setPlaceholder(this._input,pa);};oa.prototype._updateHighlighter=function(){"use strict";if(this._highlighterContent)j.conditionShow(this._highlighterContent,this._numMentioned>0||this.hasAuxContent()||this._hashtags.length);};oa.prototype.setAuxContent=function(pa){"use strict";if(this._highlighterContent){if(!this._highlighterAuxContent){this._highlighterAuxContent=l.create('span',{className:"highlighterAuxContent"});l.insertAfter(this._highlighterContent,this._highlighterAuxContent);}l.setContent(this._highlighterAuxContent,pa);if(pa){o.setPlaceholder(this._input,'');}else o.setPlaceholder(this._input,this._placeholder);this._value=null;this._update();this._updateHighlighter();this._updateHeight();}};oa.prototype.hasAuxContent=function(){"use strict";var pa=this.getAuxContentRoot();return pa&&j.shown(pa)&&pa.innerHTML.length>0;};oa.prototype.getAuxContentRoot=function(){"use strict";return this._highlighterAuxContent;};oa.prototype.addMention=function(pa,qa){"use strict";qa=(typeof qa==='undefined')?true:qa;var ra=qa===false?'':' ',sa=this._getMarkedValue();if(sa!=='')sa+=' ';o.setValue(this._input,sa+ca(pa.text)+ra);this._addToken(pa);this._update();};oa.prototype.getMentions=function(){"use strict";return this._mentioned;};oa.prototype.bootloadHashtagParser=function(){"use strict";if(!this._hashtagParser)i.loadModules(["HashtagParser"],function(pa){this._hashtagParser=pa;if(this._initialized){this._value=null;this._update();}}.bind(this));};oa.getInstance=function(pa){"use strict";var qa=s.byClass(pa,'uiMentionsInput');return qa?k.get(qa,'MentionsInput'):null;};oa.prototype._checkShouldSwapDataSource=function(pa){"use strict";this._initHashtagParser(pa);if(!this._hashtagsDataSource||!this._hashtagParser)return;var qa=this._isInsideHashtagToken(pa);if(this._matchersMode===ga.HASHTAGS&&!qa){this._setMatchersMode(ga.MENTIONS);this._swapData(this._mentionsDataSource);}else if(this._matchersMode===ga.MENTIONS&&qa){this._setMatchersMode(ga.HASHTAGS);this._swapData(this._hashtagsDataSource);}};oa.prototype._swapData=function(pa){"use strict";this._currentDataSource=pa;this._typeahead.swapDataNoCoreReset(this._currentDataSource);};oa.prototype._isInsideHashtagToken=function(pa){"use strict";this._hashtags=this._hashtagParser.parse(pa);var qa=p.get(this._input).start;for(var ra=0;ra<this._hashtags.length;ra++){var sa=this._hashtags[ra],ta=sa.offset;if(qa>=ta&&qa<=(ta+sa.tag.length+1))return true;}return false;};oa.prototype._initHashtagParser=function(pa){"use strict";if(this._hashtagParser)return;if(this._matchers.getHashtagMatcher().exec(pa))this.bootloadHashtagParser();};oa.prototype._setMatchersMode=function(pa){"use strict";switch(pa){case ga.MENTIONS:this._matchers=r.mentionsMatchers;break;case ga.HASHTAGS:this._matchers=r.hashtagMatchers;break;default:throw new Error('Invariant Violation: MatchersMode enum is missing constant '+pa);}this._matchersMode=pa;};e.exports=oa;},null);
__d("legacy:MentionsInput",["MentionsInput"],function(a,b,c,d){a.MentionsInput=b('MentionsInput');},3);
__d("TypeaheadAreaCore",["InputSelection","TextAreaControl","TypeaheadCore","copyProperties","emptyFunction"],function(a,b,c,d,e,f,g,h,i,j,k){for(var l in i)if(i.hasOwnProperty(l))n[l]=i[l];var m=i===null?null:i.prototype;n.prototype=Object.create(m);n.prototype.constructor=n;n.__superConstructor__=i;function n(o){"use strict";i.call(this,o);this.matcher=new RegExp(this.matcher+'$');this.preventFocusChangeOnTab=true;}n.prototype.select=function(o){"use strict";m.select.call(this,o);var p=this.element.value,q=this.prefix+o.text+this.suffix;this.expandBounds(p,q);var r=p.substring(0,this.start),s=p.substring(this.end);this.element.value=r+q+s;g.set(this.element,r.length+q.length);};n.prototype.expandBounds=function(o,p){"use strict";o=o.toLowerCase();p=p.toLowerCase();var q,r,s,t,u=/\s/;r=o.substring(this.start,this.end);s=p.indexOf(r);q=this.start;while(q>=0&&s>=0){t=o.charAt(q-1);if(!t||u.test(t))this.start=q;r=t+r;s=p.indexOf(r);q--;}r=o.substring(this.start,this.end);s=p.indexOf(r);q=this.end;while(q<=o.length&&s>=0){t=o.charAt(q);if(!t||u.test(t))this.end=q;r=r+t;s=p.indexOf(r);q++;}};n.prototype.getRawValue=function(){"use strict";var o=g.get(this.element).start||0;return m.getValue.call(this).substring(0,o);};n.prototype.getValue=function(){"use strict";var o=this.matcher&&this.matcher.exec(this.getRawValue());if(!o)return '';var p=o[0],q=o.index+p.length;p=p.replace(/^\s/,'');var r=p.length;p=p.replace(/\s$/,'');var s=r-p.length;this.start=q-r;this.end=q+s;return o[2]||o[1]||o[0];};n.prototype.updateHeight=function(){"use strict";var o=h.getInstance(this.element);o.updateHeight();};j(n.prototype,{prefix:'',suffix:', ',matcher:"\\b[^,]*",click:k});e.exports=n;},null);
__d("TypeaheadHoistFriends",["copyProperties"],function(a,b,c,d,e,f,g){function h(i){"use strict";this._typeahead=i;}h.prototype.enable=function(){"use strict";var i=this._typeahead.getView();this._subscription=i.subscribe('beforeRender',function(j,k){var l=[],m=[],n=[];for(var o=0;o<k.results.length;++o){var p=k.results[o];if(p.type=='header'){n=n.concat(m,l);n.push(p);m=[];l=[];}else if(p.type=='user'&&p.bootstrapped){m.push(p);}else l.push(p);}k.results=n.concat(m,l);});};h.prototype.disable=function(){"use strict";this._typeahead.getView().unsubscribe(this._subscription);this._subscription=null;};g(h.prototype,{_subscription:null});e.exports=h;},null);
__d("legacy:HoistFriendsTypeaheadBehavior",["TypeaheadHoistFriends"],function(a,b,c,d,e,f,g){if(!a.TypeaheadBehaviors)a.TypeaheadBehaviors={};a.TypeaheadBehaviors.hoistFriends=function(h){h.enableBehavior(g);};},3);
__d("TypeaheadMetrics",["AsyncRequest","Event","QueriesHistory","copyProperties","emptyFunction"],function(a,b,c,d,e,f,g,h,i,j,k){var l=1000;function m(n){"use strict";this.extraData={};j(this,n);}m.prototype.init=function(n){"use strict";this.init=k;this._initImpl(n);};m.prototype._initImpl=function(n){"use strict";this.core=n.getCore();this.view=n.getView();this.data=n.getData();this.queriesHistory=new i(l);this.stats={};this.sessionActive=false;this._sessionStartEvents=[];this._sessionEndEvents=[];this._reset();this.initEvents();};m.prototype._reset=function(){"use strict";this.log=[];this.stats={};this.avgStats={};this.sessionActive=false;this._setSid(Math.floor(Date.now()*Math.random()));this.request_ids=[];this.lastNotBackspacedQuery='';this.queriesHistory.reset();this._logEvent('session_started',{});};m.prototype._logEvent=function(n,o){"use strict";var p={type:n,data:o,time:Date.now()};this.log.push(p);};m.prototype._setSid=function(n){"use strict";this.sid=n;if(typeof this.data.queryData==='object'&&this.data.queryData!==null){this.data.queryData.sid=this.sid;}else this.data.setQueryData({sid:this.sid});if(typeof this.data.bootstrapData==='object'&&this.data.bootstrapData!==null){this.data.bootstrapData.sid=this.sid;}else this.data.setBootstrapData({sid:this.sid});};m.prototype.resetWithData=function(n){"use strict";this.init=k;this._initImpl(n);};m.prototype.recordSelect=function(n){"use strict";var o=n.selected;if(o.uid==null){this.recordStat('selected_id','SELECT_NULL');}else this.recordStat('selected_id',o.uid);this.recordStat('selected_type',o.type);this.recordStat('selected_score',o.score);this.recordStat('selected_original_id',o.original_id);this.recordStat('place_id',o.place_id);this.recordStat('client_time',o.client_time);this.recordStat('selected_position',n.index);this.recordStat('selected_with_mouse',n.clicked?1:0);this.recordStat('selected_query',n.query);this._sessionEnd();};m.prototype.bindSessionStart=function(n,event,o){"use strict";if(o)for(var p=0;p<this._sessionStartEvents.length;++p){var q=this._sessionStartEvents[p];q.obj.unsubscribe(q.token);}this._sessionStartEvents.push({obj:n,token:n.subscribe(event,function(r,s){this._sessionStart();}.bind(this))});};m.prototype.bindSessionEnd=function(n,event,o){"use strict";if(o)for(var p=0;p<this._sessionEndEvents.length;++p){var q=this._sessionEndEvents[p];q.obj.unsubscribe(q.token);}this._sessionEndEvents.push({obj:n,token:n.subscribe(event,function(r,s){this._sessionEnd();}.bind(this))});};m.prototype.dataSubscribe=function(n,o){"use strict";var p=this.data,q=this.data.subscribe(n,o);this._dataSubscriptions.push(function(){p.unsubscribe(q);});};m.prototype.initEvents=function(){"use strict";this._dataSubscriptions=this._dataSubscriptions||[];this._dataSubscriptions.forEach(function(n){n();});this._dataSubscriptions=[];this.bindSessionStart(this.core,'focus',false);this.bindSessionEnd(this.core,'blur',false);this.view.subscribe('select',function(n,o){this.recordSelect(o);}.bind(this));this.bindSessionEnd(this.view,'select',false);this.view.subscribe('render',function(n,o){this.results=o;}.bind(this));this.dataSubscribe('beforeQuery',function(n,o){this._logEvent('user_typed',{query:o.value});if(!o.value)return;this.query=o.value;this.queriesHistory.add(this.query);if(this.lastNotBackspacedQuery.indexOf(this.query)!==0)this.lastNotBackspacedQuery=this.query;this.recordCountStat('num_queries');}.bind(this));this.dataSubscribe('beforeFetch',function(n,o){if(o.fetch_context.bootstrap){this.bootstrapBegin=Date.now();}else o.fetch_context.queryBegin=Date.now();this._logEvent('async_query_started',{query:o.fetch_context.value,request_id:o.fetch_context.request_id});}.bind(this));this.dataSubscribe('fetchComplete',function(n,o){this._logEvent('async_query_completed',{query:o.fetch_context.value,request_id:o.fetch_context.request_id});if(o.fetch_context.bootstrap){this.recordAvgStat('bootstrap_latency',Date.now()-this.bootstrapBegin);var p={};o.response.payload.entries.forEach(function(q){if(!p[q.type]){p[q.type]=1;}else p[q.type]++;});this.recordStat('bootstrap_response_types',p);this.bootstrapped=true;}else{if('filtered_count' in o.response.payload)this.recordStat('filtered_count',o.response.payload.filtered_count);this.recordAvgStat('avg_query_latency',Date.now()-o.fetch_context.queryBegin);}}.bind(this));this.dataSubscribe('respond',function(n,o){this._logEvent('respond',{query:o.value,num_results:o.results.length});var p=this.data.tokenizeBackend(o.value||'').flatValue,q=this.data.findBestPreviousQuery(p,this.data.getQueryIDs())||'',r=this.data.getQueryIDs()[q];this.normalized_backend_query=q;this.request_id=r;this.request_ids.push(r);}.bind(this));this.dataSubscribe('dirty',function(n,o){this.bootstrapped=false;}.bind(this));};m.prototype._sessionStart=function(){"use strict";if(this.sessionActive)return;this.sessionActive=true;};m.prototype._sessionEnd=function(){"use strict";if(!this.sessionActive)return;this.sessionActive=false;this.submit();this._reset();};m.prototype.recordStat=function(n,o){"use strict";this.stats[n]=o;};m.prototype.recordCountStat=function(n){"use strict";var o=this.stats[n];this.stats[n]=o?o+1:1;};m.prototype.recordAvgStat=function(n,o){"use strict";if(this.avgStats[n]){this.avgStats[n][0]+=o;++this.avgStats[n][1];}else this.avgStats[n]=[o,1];};m.prototype.hasStats=function(){"use strict";return !!Object.keys(this.stats).length;};m.prototype.submit=function(){"use strict";if('log_all_sessions' in this.extraData||this.hasStats()){j(this.stats,this.extraData);if(this.results){var n=(this.results).map(function(q,r){return q.uid;});this.recordStat('candidate_results',JSON.stringify(n));}if(this.query)this.recordStat('query',this.query);if(this.lastNotBackspacedQuery)this.recordStat('last_not_backspaced_query',this.lastNotBackspacedQuery);this.recordStat('queries_history',JSON.stringify(this.queriesHistory.getQueries()));if(this.normalized_backend_query)this.recordStat('normalized_backend_query',this.normalized_backend_query);if(this.request_id)this.recordStat('request_id',this.request_id);if(this.request_ids.length)this.recordStat('request_ids',this.request_ids);if(this.sid)this.recordStat('sid',this.sid);if(this.bootstrapped)this.recordStat('bootstrapped',1);for(var o in this.avgStats){var p=this.avgStats[o];this.stats[o]=p[0]/p[1];}this.recordStat('log',JSON.stringify(this.log));new g().setURI(this.endPoint).setMethod('POST').setData({stats:this.stats}).setErrorHandler(k).send();this._reset();}};m.register=function(n,o,p){"use strict";if(document.activeElement===n){o.init(p);}else var q=h.listen(n,'focus',function(){o.init(p);q.remove();});};j(m.prototype,{endPoint:'/ajax/typeahead/record_basic_metrics.php'});e.exports=m;},null);