/*!CK:1405989872!*//*1430127644,*/

if (self.CavalryLogger) { CavalryLogger.start_js(["O8yeQ"]); }

__d("BrowseLogger",["Banzai","copyProperties","mapObject","Run"],function(a,b,c,d,e,f,g,h,i,j){var k='browse',l='browse_aggr',m=null,n={},o={},p=function(x){if(x==null)return 'undefined';var y=x.tagName.toLowerCase(),z=x.id,aa=x.className;if(z)y+='#'+z;if(aa)y+='.'+aa;return y;};function q(){m=null;n={};o={};}function r(x){h(x,{clientSessionID:m});return x;}function s(x){g.post(k,r(x));}function t(){if(m===null)return;o.aggregated=n;g.post(l,r(o));q();}function u(x){n[x]=(n[x]||0)+1;}function v(x){h(o,x);}j.onUnload(t);var w={newSession:function(){t();m=Math.random().toString();if(!o.start_time)o.start_time=Math.round(Date.now()/1000);},logResultClick:function(x,y,z,aa){var ba={action:'result_click',click_type:x.ct||'result',section:x.section||'unknown',id:x.id||0,path:x.path||'unknown',rank:x.rank||0,referrer:x.referrer||'unknown',result_type:x.result_type||'unknown',session_id:x.session_id||0,query_time:x.query_time,abtest_version:x.abtest_version||'NONE',abtest_params:x.abtest_params,typeahead_sid:x.typeahead_sid||'',result_title:x.result_title||'unknown',result_href:x.result_href||'unknown',result_semantic:x.result_semantic||'unknown',type:x.experience_type||'unknown',click_action:z,sub_id:x.sub_id,owner_id:x.owner_id,browse_location:x.browse_location||'unknown',query_data:x.query_data||'unknown',is_headline:x.is_headline||false,qid:y.qid||0,mf_story_key:y.mf_story_key||0,module:x.module||'NONE',view:x.view};if(y.tn)ba.tn=y.tn;if(x.cst)ba.click_subtype=x.cst;u('result_click_'+ba.click_type);v({path:ba.path,referrer:ba.referrer,result_type:ba.result_type,session_id:ba.session_id,abtest_version:ba.abtest_version,abtest_params:ba.abtest_params,typeahead_sid:ba.typeahead_sid});s(ba);if(!x.id&&(x.browse_location!=='browse_location:mf_trending'))s({action:'logging_error',click_action:z,click_type:ba.click_type,attributes:JSON.stringify(x),element:i({srcElement:aa.srcElement,target:aa.target,toElement:aa.toElement},p),event:{button:aa.button,clientX:aa.clientX,clientY:aa.clientY,ctrlKey:aa.ctrlKey,layerX:aa.layerX,layerY:aa.layerY,offsetX:aa.offsetX,offsetY:aa.offsetY,pageX:aa.pageX,pageY:aa.pageY,screenX:aa.screenX,screenY:aa.screenY,shiftKey:aa.shiftKey,type:aa.type,x:aa.x,y:aa.y}});},logControlsClick:function(x,y){var z={action:'controls_click',click_type:y,path:x.path||'unknown',referrer:x.referrer||'unknown',session_id:x.session_id||0,query_time:x.query_time,filter_name:x.name||'unknown',typeahead_sid:x.typeahead_sid||'',result_type:x.result_type||'unknown',type:x.experience_type||'unknown'};if(x.cst)z.click_subtype=x.cst;u('controls_click_'+y);v({path:z.path,referrer:z.referrer,session_id:z.session_id,typeahead_sid:z.typeahead_sid});s(z);},logResultHover:function(x,y){var z={action:'result_hover',id:x.id||0,path:x.path||'unknown',rank:x.rank,result_type:x.result_type||'unknown',session_id:x.session_id||0,query_time:x.query_time,time_elapsed:y,typeahead_sid:x.typeahead_sid||0,type:x.experience_type||'unknown',module:x.module||'NONE',view:x.view};u('result_hover');v({path:z.path,session_id:z.session_id,typeahead_sid:z.typeahead_sid});s(z);},logScroll:function(x,y,z,aa){var ba={action:'scroll',encoded_query:x,fragments:y,position:z,session_id:aa||0};s(ba);},logNUXStep:function(x){var y={action:'nux_step',step:x};s(y);},logDisambiguationImpression:function(x,y,z,aa,ba){var ca={action:'disambiguation_imp',ids:aa,name:x,path:z,type:y,typeahead_sid:ba};s(ca);},logDisambiguationClick:function(x,y,z,aa,ba,ca){var da={action:'disambiguation_clk',id:ba,index:aa,name:x,path:z,type:y,typeahead_sid:ca};s(da);},logDYMLinkClick:function(x,y,z,aa){var ba={action:'dym_click',path:x.path||'unknown',referrer:x.referrer||'unknown',session_id:x.session_id||0,query_time:x.query_time,abtest_version:x.abtest_version||'NONE',abtest_params:x.abtest_params,typeahead_sid:x.typeahead_sid||'',type:x.experience_type||'unknown',click_action:z,sub_id:x.sub_id,owner_id:x.owner_id,browse_location:x.browse_location||'unknown',query_data:x.query_data||'unknown',module:x.module||'NONE',view:x.view,dym_confidence:x.dym_confidence||'NONE',dym_query:x.dym_query||'',dym_correction:x.dym_correction||''};s(ba);}};e.exports=w;},null);
__d("Base64",[],function(a,b,c,d,e,f){var g='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';function h(l){l=(l.charCodeAt(0)<<16)|(l.charCodeAt(1)<<8)|l.charCodeAt(2);return String.fromCharCode(g.charCodeAt(l>>>18),g.charCodeAt((l>>>12)&63),g.charCodeAt((l>>>6)&63),g.charCodeAt(l&63));}var i='>___?456789:;<=_______'+'\0\1\2\3\4\5\6\7\b\t\n\13\f\r\16\17\20\21\22\23\24\25\26\27\30\31'+'______\32\33\34\35\36\37 !"#$%&\'()*+,-./0123';function j(l){l=(i.charCodeAt(l.charCodeAt(0)-43)<<18)|(i.charCodeAt(l.charCodeAt(1)-43)<<12)|(i.charCodeAt(l.charCodeAt(2)-43)<<6)|i.charCodeAt(l.charCodeAt(3)-43);return String.fromCharCode(l>>>16,(l>>>8)&255,l&255);}var k={encode:function(l){l=unescape(encodeURI(l));var m=(l.length+2)%3;l=(l+'\0\0'.slice(m)).replace(/[\s\S]{3}/g,h);return l.slice(0,l.length+m-2)+'=='.slice(m);},decode:function(l){l=l.replace(/[^A-Za-z0-9+\/]/g,'');var m=(l.length+3)&3;l=(l+'AAA'.slice(m)).replace(/..../g,j);l=l.slice(0,l.length+m-3);try{return decodeURIComponent(escape(l));}catch(n){throw new Error('Not valid UTF-8');}},encodeObject:function(l){return k.encode(JSON.stringify(l));},decodeObject:function(l){return JSON.parse(k.decode(l));},encodeNums:function(l){return String.fromCharCode.apply(String,l.map(function(m){return g.charCodeAt((m|-(m>63))&-(m>0)&63);}));}};e.exports=k;},null);
__d("NodeHighlighter",["DOM","TokenizeUtil","concatMap","createArrayFromMixed","escapeRegex","getElementText"],function(a,b,c,d,e,f,g,h,i,j,k,l){var m={};function n(q,r){var s=l(q).split(r),t=s.map(function(u){if(r.test(u))return o(u);return u||'';});return s.length>1?t:null;}function o(q){var r=g.create('span',{'class':'highlightNode',className:'highlightNode'},q);return r;}var p={getTextNodes:function(q){if(this.isLeafNode(q)||this.isStopNode(q)){return q;}else if(this.isDiscardNode(q))return [];return i(this.getTextNodes.bind(this),j(q.childNodes));},getHighlightCandidates:function(){return [];},isLeafNode:function(q){return g.isTextNode(q);},isStopNode:function(q){return false;},isDiscardNode:function(q){return false;},createSegmentedRegex:function(q){var r=h.getPunctuation();q=this.escapeAndAddBidirectionalCharsToTokens(q);return '(^|\\s|'+r+')('+q.join('|')+')(?=(?:$|\\s|'+r+'))';},createNonSegmentedRegex:function(q){return '('+q.map(k).join('|')+')';},escapeAndAddBidirectionalCharsToTokens:function(q){var r='[\\u200E\\u200F\\u202A\\u202B\\u202C\\u202D\\u202E]*';return q.map(function(s){return r+String(s).split('').map(k).join(r)+r;});},createRegex:function(q){q=q.filter(function(x){return x;});if(!q||q.length===0)return new RegExp(null);var r=q.join('|');if(m[r])return m[r];var s=/[\u0E00-\u109F\u2000-\uFFFF]/,t=[],u=[];q.forEach(function(x){if(s.test(x)){u.push(x);}else t.push(x);});var v='';if(t.length){v+=this.createSegmentedRegex(t);v+=(u.length)?'|':'';}if(u.length)v+=this.createNonSegmentedRegex(u);var w=new RegExp(v,'i');m[r]=w;return w;},searchNodes:function(q,r){return g.scry(q,r);},highlight:function(q,r){r=r.filter(function(u){return u;});if(!r||r.length===0||!q)return;var s=i(function(u){return i(this.getTextNodes.bind(this),this.searchNodes(q,u));}.bind(this),this.getHighlightCandidates()),t=this.createRegex(r);s.forEach(function(u){var v=n(u,t);if(v)if(this.isStopNode(u)){g.setContent(u,v);}else g.replace(u,v);}.bind(this));}};e.exports=p;},null);
__d("IntlSemiticSimplifiedNumberType",["IntlVariations"],function(a,b,c,d,e,f,g){var h={getNumberVariationType:function(i){var j=i%100;return i===2?g.NUMBER_DUAL:j>=3&&j<=10?g.NUMBER_PLURAL:g.NUMBER_SINGULAR;}};e.exports=h;},null);
__d("XGamesHideableXOutAsyncController",["XController"],function(a,b,c,d,e,f){e.exports=b("XController").create("\/games\/async\/xout\/hide\/",{unit_type:{type:"String"},fbs:{type:"Int"},app_id:{type:"Int"},ego_imp:{type:"String"},extra_data:{type:"String"}});},null);
__d("GamesXOut.react",["cx","React"],function(a,b,c,d,e,f,g,h){var i=h.createClass({displayName:"GamesXOut",propTypes:{onClick:h.PropTypes.func.isRequired},render:function(){return (h.createElement("div",{className:"_2b2u"},this.props.children,h.createElement("div",{className:"_1m6e",onClick:this.props.onClick})));}});e.exports=i;},null);
__d("GamesUninstallXOut.react",["cx","React","DOMContainer.react","XGamesHideableXOutAsyncController","AsyncRequest","GamesXOut.react","URI","Dialog","CSS"],function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o){var p=h.createClass({displayName:"GamesUninstallXOut",propTypes:{unitType:h.PropTypes.string.isRequired,appID:h.PropTypes.string.isRequired,domChild:h.PropTypes.any.isRequired,extraData:h.PropTypes.string.isRequired,egoImp:h.PropTypes.string,fbs:h.PropTypes.number.isRequired},getInitialState:function(){return {pending:false};},statics:{appUninstalled:function(q){o.addClass(q,"_4ksu");}},_appUninstalled:function(){var q=(j.getURIBuilder()).setInt('app_id',this.props.appID).setString('extra_data',this.props.extraData).setString('ego_imp',this.props.egoImp).setString('unit_type',this.props.unitType).setInt('fbs',this.props.fbs).getURI();this._request=new k(q).setMethod('POST');this._request.send();},_handleXOut:function(){var q=m('/ajax/settings/apps/delete_app.php').setQueryData({app_id:this.props.appID,legacy:false,dialog:true,xout:true});new n().setAsync(new k(q).setRelativeTo(this.getDOMNode())).setCausalElement(this.getDOMNode()).show();},render:function(){return (h.createElement(l,{onClick:this._handleXOut},h.createElement(i,null,this.props.domChild)));}});e.exports=p;},null);
__d("XHPTemplate",["DataStore","DOM","HTML"],function(a,b,c,d,e,f,g,h,i){function j(l){"use strict";this._model=l;}j.prototype.render=function(){"use strict";if(i.isHTML(this._model))this._model=h.setContent(document.createDocumentFragment(),this._model)[0];return this._model.cloneNode(true);};j.prototype.build=function(){"use strict";return new k(this.render());};j.getNode=function(l,m){"use strict";return j.getNodes(l)[m];};j.getNodes=function(l){"use strict";var m=g.get(l,'XHPTemplate:nodes');if(!m){m={};var n=h.scry(l,'[data-jsid]');n.push(l);var o=n.length;while(o--){var p=n[o];m[p.getAttribute('data-jsid')]=p;p.removeAttribute('data-jsid');}g.set(l,'XHPTemplate:nodes',m);}return m;};function k(l){"use strict";this._root=l;this._populateNodes();}k.prototype._populateNodes=function(){"use strict";this._nodes={};this._leaves={};var l=this._root.getElementsByTagName('*');for(var m=0,n=l.length;m<n;m++){var o=l[m],p=o.getAttribute('data-jsid');if(p){o.removeAttribute('data-jsid');this._nodes[p]=o;this._leaves[p]=!o.childNodes.length;}}};k.prototype.getRoot=function(){"use strict";return this._root;};k.prototype.getNode=function(l){"use strict";return this._nodes[l];};k.prototype.setNodeProperty=function(l,m,n){"use strict";this.getNode(l)[m]=n;return this;};k.prototype.setNodeContent=function(l,m){"use strict";if(!this._leaves[l])throw new Error("Can't setContent on non-leaf node: "+l);h.setContent(this.getNode(l),m);return this;};e.exports=j;},null);
__d("FacebarSemanticQuery",["CurrentUser","URI","copyProperties"],function(a,b,c,d,e,f,g,h,i){var j='str',k=/\*[\w\-]+\(/g;function l(v){var w={me:g.getID()};return i(w,Array.isArray(v.semantic_map)?{}:v.semantic_map);}function m(v,w){var x=l(v);if(typeof x[w]!=='undefined')return String(x[w]);return w;}function n(v){return new h("/profile.php").addQueryData({id:v});}function o(v,w){var x=[w],y=[],z=v.browse_functions,aa=v.search_path;while(x.length>0){var ba=x.pop();if(!r(ba)){y.push(ba);continue;}var ca=ba.substring(0,ba.indexOf('(')),da=ca,ea=s(ba);if(!z[ca]){y=[];break;}var fa=z[ca].minNumParams,ga=z[ca].maxNumParams;if(x.length>0)if(z[ca].numParamsUnbounded){if(y.length>0)ca+='-'+ea.length;}else if((ea.length!=1&&ea.length>fa)||(ea.length===0&&fa!=ga))ca+='-'+ea.length;x.push(ca);for(var ha=0;ha<ea.length;ha++){if(ea[ha].length===0)continue;if(z[da].allowsFreeText){x.push(j+'/'+encodeURIComponent(encodeURIComponent(ea[ha])));}else x.push(ea[ha]);}}return h(aa+y.join('/'));}function p(v){return v.replace(/['"\[\]]/g,'');}function q(v,w){var x=JSON.parse(w),y=[];if(x.length>0)y=[x[0]];var z=[],aa=v.browse_functions,ba=v.search_path;while(y.length>0){var ca=y.pop();if(typeof(ca)!=='object'){z.push(p(ca));continue;}var da=Object.keys(ca)[0],ea=da,fa=ca[da];if(!aa[da]){z=[];break;}var ga=aa[da].minNumParams,ha=aa[da].maxNumParams;if(y.length>0)if(aa[da].numParamsUnbounded){if(z.length>0)da+='-'+fa.length;}else if((fa.length!=1&&fa.length>ga)||(fa.length===0&&ga!=ha))da+='-'+fa.length;y.push(da);for(var ia=0;ia<fa.length;ia++){if(fa[ia].length===0)continue;if(aa[ea].allowsFreeText){y.push(j+'/'+encodeURIComponent(fa[ia]));}else y.push(fa[ia]);}}return h(ba+z.join('/'));}function r(v){return (/^[a-z\-]+\(.*\)$/).test(v);}function s(v){if(!r(v)&&v.indexOf('param_')!==0)return [v];var w=v.substring(v.indexOf('(')+1,v.length-1);if(w.length===0)return [];return t(w);}function t(v){var w=[],x=0,y=0;for(var z=0;z<v.length;++z)if(v[z]==','&&y===0){w.push(v.substring(x,z));x=z+1;}else if(v[z]=='('){y++;}else if(v[z]==')')y--;w.push(v.substring(x,v.length));return w;}function u(v,w,x){"use strict";this.facebarConfig=v;this.unmapped=(w||"").trim();this.mapped=m(v,this.unmapped);this.position=null;this.$FacebarSemanticQuery0=typeof x!=='undefined'?x:false;}u.prototype.isEntity=function(){"use strict";return (/^\d+$/).test(this.mapped);};u.prototype.isShortcut=function(){"use strict";return this.mapped.indexOf('shortcut(')===0;};u.prototype.isImplemented=function(){"use strict";return this.mapped&&!this.mapped.match(k);};u.prototype.isSemanticForest=function(){"use strict";return this.$FacebarSemanticQuery0;};u.prototype.getUnimplemented=function(){"use strict";return (this.mapped.match(k)||[]).map(function(v){return v.substr(1,v.length-2);});};u.prototype.getURI=function(){"use strict";if(this.isEntity()){return n(this.mapped);}else if(this.isShortcut()){return new h(this.mapped.substr(9,this.mapped.length-10));}else if(this.isSemanticForest()){return q(this.facebarConfig,this.unmapped);}else return o(this.facebarConfig,this.unmapped);};e.exports=u;},null);
__d("ResultsBucketizer",["copyProperties"],function(a,b,c,d,e,f,g){function h(i,j){"use strict";this.$ResultsBucketizer0=i;this.$ResultsBucketizer1=j;}h.trimResults=function(i,j,k){"use strict";var l=[];i.forEach(function(m,n){if(m.indexBeforeBuckets>j)l.push({index:n,originalIndex:m.indexBeforeBuckets});});l.sort(function(m,n){return m.originalIndex-n.originalIndex;}).slice(k).sort(function(m,n){return n.index-m.index;}).forEach(function(m){i.splice(m.index,1);});};h.mergeBuckets=function(i,j){"use strict";var k=[];for(var l in j)if(!j[l].rule.hidden&&(!j[l].rule.xor||!j[j[l].rule.xor]))k.push(j[l]);k.sort(function(m,n){var o=(m.rule.position||0)-(n.rule.position||0);if(o!==0)return o;return m.results[0].indexBeforeBuckets-n.results[0].indexBeforeBuckets;});i.length=0;k.forEach(function(m,n){if(m.rule.maxPromotions!=null&&n<k.length-1)h.trimResults(m.results,k[n+1].results[0].indexBeforeBuckets,m.rule.maxPromotions);Array.prototype.push.apply(i,m.results);}.bind(this));};h.prototype.$ResultsBucketizer2=function(i,j){"use strict";if(j.propertyName==null)return j.bucketName||'default';var k=this.$ResultsBucketizer1(i,j.propertyName);if(k==null||(j.propertyValue!=null&&(''+k)!==j.propertyValue))return false;return j.bucketName||(j.propertyName+'.'+k);};h.prototype.$ResultsBucketizer3=function(i,j){"use strict";var k={};i.forEach(function(l,m){j.some(function(n){var o=this.$ResultsBucketizer2(l,n);if(o===false)return false;if(k[o]==null)k[o]={results:[],rule:n};if(!!n.maxResults&&k[o].results.length>=n.maxResults)return true;l.bucketLineage.push({bucketName:o,bucketIndex:k[o].results.length});k[o].results.push(l);return true;}.bind(this));}.bind(this));return k;};h.prototype.$ResultsBucketizer4=function(i,j){"use strict";var k=this.$ResultsBucketizer0[j];if(!k)return {};var l=this.$ResultsBucketizer3(i,k);for(var m in l){var n=l[m].rule.subBucketRules;if(!!n)this.$ResultsBucketizer4(l[m].results,n);}h.mergeBuckets(i,l);return l;};h.prototype.$ResultsBucketizer5=function(i,j,k){"use strict";if(j.length<=k)return j.slice();var l=j.map(function(n){return n.indexBeforeBuckets;}),m=l.sort(function(n,o){return n-o;})[k];return j.filter(function(n){return n.indexBeforeBuckets<m;});};h.prototype.bucketize=function(i,j,k){"use strict";i.forEach(function(l,m){l.bucketLineage=[];l.indexBeforeBuckets=m;});k=k||{};g(k,this.$ResultsBucketizer4(i,'main'));return this.$ResultsBucketizer5(k,i,j);};e.exports=h;},null);
__d("FacebarTypeaheadDebugPane.react",["Banzai","LeftRight.react","React","Image.react"],function(a,b,c,d,e,f,g,h,i,j){var k=i,l=k.PropTypes,m=i.createClass({displayName:"FacebarTypeaheadDebugPane",propTypes:{result:l.object.isRequired},getInitialState:function(){return {feedbackSent:false};},componentWillReceiveProps:function(n){if(n.result!==this.props.result)this.setState({feedbackSent:false});},sendFeedback:function(n){var o=this.props.result;if(o.decoration.entity===o)o.decoration.entity='';var p=JSON.stringify(o),q=JSON.stringify(o.debug.allResults),r={result:p,query:o.debug.query,position:o.debug.position,sid:o.debug.sid,allResults:q,isOK:n};g.post('facebar_feedback',r,{delay:0});this.setState({feedbackSent:true});this.setState({feedbackOK:n});return false;},renderDebugText:function(n){return i.createElement("div",null,n);},render:function(){var n=this.sendFeedback.bind(this,true),o=this.sendFeedback.bind(this,false),p=this.state.feedbackSent,q=p&&this.state.feedbackOK,r=p&&!this.state.feedbackOK;return (i.createElement("div",{className:"fsm pam"},i.createElement(h,null,i.createElement("div",null,this.props.result.debug.map(this.renderDebugText)),i.createElement("div",null,i.createElement("div",{className:q?'':'hidden_elem'},i.createElement("strong",null,"Feedback sent"),i.createElement(j,{className:"mls",src:'/images/green_up.gif'})),i.createElement("div",{className:r?'':'hidden_elem'},i.createElement("strong",null,"Feedback sent"),i.createElement(j,{className:"mls",src:'/images/red_down.gif'})),i.createElement("div",{className:p?'hidden_elem':''},i.createElement("a",{href:"#",onClick:n},i.createElement(j,{src:'/images/green_up.gif'})),i.createElement("a",{href:"#",onClick:o},i.createElement(j,{className:"mls",src:'/images/red_down.gif'})))))));}});e.exports=m;},null);