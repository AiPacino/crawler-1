/*!CK:3481093390!*//*1427935274,*/

if (self.CavalryLogger) { CavalryLogger.start_js(["2ROd3"]); }

__d("ComposerTargetType",[],function(a,b,c,d,e,f){e.exports={SELF_USER:"feed",OTHER_USER:"wall",GROUP:"group",PAGE:"page",EVENT:"event"};},null);
__d("ComposerType",[],function(a,b,c,d,e,f){e.exports={INLINE:"inline",ADVANCED:"advanced",NORMAL:"normal"};},null);
__d("ComposerVersion",[],function(a,b,c,d,e,f){e.exports={MBASIC_LEGACY:"legacy",MBASIC_AMBER:"amber",MBASIC_LEGACY_SHARE:"legacy_share",MBASIC_AMBER_SHARE:"amber_share",WWW_LEGACY:"www_legacy"};},null);
__d("ComposerWaterfallEvent",[],function(a,b,c,d,e,f){e.exports={COMPOSER_CANCEL:"composer_cancel",COMPOSER_CANCEL_INTENT:"intent_composer_cancel",COMPOSER_ENTRY:"composer_entry",COMPOSER_NOT_RENDERED:"composer_not_renderer",COMPOSER_POST:"composer_post",COMPOSER_POST_CANCEL:"composer_post_cancel",COMPOSER_POST_FAILURE:"composer_post_failure",COMPOSER_POST_FAILURE_FATAL:"composer_post_fatal_failure",COMPOSER_POST_FAILURE_GIVEUP:"composer_post_giveup_failure",COMPOSER_POST_SUCCESS:"composer_post_success",COMPOSER_POST_COMPLETED:"composer_post_completed",COMPOSER_WRITTEN:"composer_written",ALBUM_ADD:"add_album",ALBUM_CANCEL:"cancel_album",ALBUM_INTENT:"intent_album",ALBUM_REMOVE:"remove_album",FRIEND_TAG_ADD:"add_friend_tag",FRIEND_TAG_CANCEL:"cancel_friend_tag",FRIEND_TAG_INTENT:"intent_friend_tag",FRIEND_TAG_REMOVE:"remove_friend_tag",FRIEND_TAG_SEARCH:"search_friend_tag",FRIEND_SHOW_MORE:"show_more_friend_tag",LOCATION_ADD:"add_location",LOCATION_CANCEL:"cancel_location",LOCATION_INTENT:"intent_location",LOCATION_REMOVE:"remove_location",LOCATION_SCROLL:"scroll_location",LOCATION_SEARCH:"search_location",MINUTIAE_ADD:"add_minutiae",MINUTIAE_CANCEL:"cancel_minutiae",MINUTIAE_CHANGE_ICON:"change_icon_minutiae",MINUTIAE_CHANGE_ICON_CANCEL:"change_icon_cancel_minutiae",MINUTIAE_CHANGE_ICON_INTENT:"change_icon_intent_minutiae",MINUTIAE_INTENT:"intent_minutiae",MINUTIAE_REMOVE:"remove_minutiae",MINUTIAE_SCROLL:"scroll_minutiae",MINUTIAE_SEARCH:"search_minutiae",MINUTIAE_TYPE_CLICK:"type_click_minutiae",MINUTIAE_SEE_MORE:"see_more_minutiae",MINUTIAE_CHAIN_SKIP:"skip_chain_minutiae",MINUTIAE_CHAIN_SUGGEST:"suggest_chain_minutiae",MINUTIAE_ICONPICKER_QUERY:"minutiae_iconpicker_query",MINUTIAE_ICONPICKER_BOOTSTRAP:"minutiae_iconpicker_bootstrap",MINUTIAE_ICONPICKER_SELECT:"minutiae_iconpicker_select",MEDIA_INTENT:"intent_media",MEDIA_CANCEL:"cancel_media",PHOTO_ADD:"add_photo",PHOTO_ADD_FAILURE:"add_photo_failure",PHOTO_ADD_SUCCESS:"add_photo_success",PHOTO_REMOVE:"remove_photo",PRIVACY_ADD:"add_privacy",PRIVACY_CANCEL:"cancel_privacy",PRIVACY_INTENT:"intent_privacy",PRIVACY_SCROLL:"scroll_privacy",PRIVACY_SEE_ALL_LISTS:"see_all_lists_privacy",SELECT_FRIEND_TIMELINE_INTENT:"intent_select_friend_timeline",SELECT_FRIEND_TIMELINE_ADD:"add_select_friend_timeline",SELECT_FRIEND_TIMELINE_CANCEL:"cancel_select_friend_timeline",SERVER_POST_BEGIN:"server_composer_post_begin",SERVER_POST_FAILURE:"server_composer_post_failure",SERVER_POST_SUCCESS:"server_composer_post_succeeded",POST_POST_WITH_TAG_BEGIN:"post_post_with_tag_begin",POST_POST_WITH_TAG_FAILURE:"post_post_with_tag_failure",POST_POST_WITH_TAG_SUCCESS:"post_post_with_tag_success",TARGET_SELECTOR_INTENT:"intent_target_selector",TARGET_SELECTOR_CANCEL:"cancel_target_selector",VIDEO_ADD:"add_video",VIDEO_ADD_FAILURE:"add_video_failure",VIDEO_ADD_SUCCESS:"add_video_success",VIDEO_REMOVE:"remove_video"};},null);
__d("ComposerXAjaxEndpoint",[],function(a,b,c,d,e,f){e.exports={ADS_MEDIA_UPLOAD:"\/ajax\/ads\/create\/composerx\/attachment\/media\/upload\/",ADS_ATTACHMENT_STATUS:"\/ajax\/ads\/create\/composerx\/attachment\/status\/",MEDIA_UPLOAD:"\/ajax\/composerx\/attachment\/media\/upload\/"};},null);
__d("ComposerXContextConfig",[],function(a,b,c,d,e,f){e.exports={propertyNames:{actorID:"ACTOR_ID",postID:"POST_ID"},propertyValues:{ACTOR_ID:"actorID",POST_ID:"postID"}};},null);
__d("ComposerXAttachmentBootstrap",["CSS","Form","Parent","URI","cx"],function(a,b,c,d,e,f,g,h,i,j,k){var l=[],m={bootstrap:function(n){m.load(i.byTag(n,'form'),n.getAttribute('data-endpoint'));},load:function(n,o,p){var q=j(o).addQueryData({composerurihash:m.getURIHash(o)});g.conditionClass(n,"_fu",p);var r=i.byClass(n,"_2_4");g.removeClass(r,'async_saving');h.setDisabled(n,false);n.action=q.toString();h.bootstrap(n);},getURIHash:function(n){if(n==='initial')return 'initial';var o=l.indexOf(n);if(o!==-1){return o+'';}else{o=l.length;l[o]=n;return o+'';}}};e.exports=m;},null);
__d("ComposerXContext",["ComposerXContextConfig","invariant"],function(a,b,c,d,e,f,g,h){var i=function(k){return g.propertyNames[k];};function j(k){"use strict";this.$ComposerXContext0={};for(var l in k)this.setProperty(l,k[l]);}j.prototype.getProperty=function(k){"use strict";h(i(k));return this.$ComposerXContext0[k];};j.prototype.setProperty=function(k,l){"use strict";h(i(k));this.$ComposerXContext0[k]=l;return this;};j.PROPERTIES=g.propertyValues;e.exports=j;},null);
__d("ComposerXSessionIDs",["DOM","cx"],function(a,b,c,d,e,f,g,h){function i(){return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g,function(l){var m=Math.random()*16|0,n=l=='x'?m:(m&3|8);return n.toString(16);});}var j={},k={getSessionID:function(l){return j[l];},resetSessionID:function(l){j[l]=i();},createSessionIDInput:function(l){return g.create('input',{type:'hidden',name:'composer_session_id',className:"_5r_b",value:l});}};e.exports=k;},null);
__d("ShareModeConst",[],function(a,b,c,d,e,f){var g={SELF_PAGE:'selfpage',PAGE:'page',SELF_POST:'self',FRIEND:'friend',GROUP:'group',ALBUM:'album',MESSAGE:'message'};e.exports=g;},null);
__d("ComposerXMarauderLogger",["Event","ComposerTargetType","ComposerType","ComposerVersion","ComposerWaterfallEvent","ComposerXSessionIDs","MarauderLogger","ShareModeConst"],function(a,b,c,d,e,f,g,h,i,j,k,l,m,n){var o={},p=i.NORMAL,q=j.WWW_LEGACY,r={logEvent:function(s,t,u){if(!u)u={};var v=o[t],w=l.getSessionID(t);if(!v||!w)return;if(u.logOncePerSession){if(!v.loggedEventTypes[w])v.loggedEventTypes[w]={};if(v.loggedEventTypes[w][s])return;v.loggedEventTypes[w][s]=true;}var x=Object.assign({},u.extraData,{composer_type:p,composer_version:q,target_type:v.targetType,ref:v.entryPointRef});if(u.logDetails){x.has_photo=v.hasPhoto;x.has_video=v.hasVideo;x.xy_tag_count=v.numXYTags;x.with_tag_count=v.numWithTags;x.tags_user=v.numUserTags;}m.log(s,'composer',x,(void 0),(void 0),w);},registerComposer:function(s,t,u){o[s.id]={targetType:t,entryPointRef:u,loggedEventTypes:{},hasPhoto:false,hasVideo:false,numWithTags:0,numXYTags:0,numUserTags:0};},updateHasPhoto:function(s,t){if(!o[s])return;o[s].hasPhoto=t;},updateHasVideo:function(s,t){if(!o[s])return;o[s].hasVideo=t;},updateNumWithTags:function(s,t){if(!o[s])return;o[s].numWithTags=t;},updateNumXYTags:function(s,t){if(!o[s])return;o[s].numXYTags=t;o[s].numWithTags=o[s].numWithTags-t;},updateNumUserTags:function(s,t){if(!o[s])return;o[s].numUserTags=t;},listenForPostEvents:function(s,t){if(!t)return [];return [g.listen(t,'submit',function(){r.logPost(s);}),g.listen(t,'success',function(){r.logPostSuccess(s);}),g.listen(t,'error',function(event){r.logPostFailure(s,{error_info:{error_code:event.data.response.error,error_description:event.data.response.errorDescription,error_summary:event.data.response.errorSummary}});})];},setShareMode:function(s,t){var u=o[s];if(!u)return;switch(t){case n.SELF_POST:u.targetType=h.SELF_USER;break;case n.FRIEND:u.targetType=h.OTHER_USER;break;case n.PAGE:case n.SELF_PAGE:u.targetType=h.PAGE;break;case n.GROUP:u.targetType=h.GROUP;break;default:u.targetType=h.OTHER;}},logEntry:function(s,t){if(typeof t==='string')return;r.logEvent(k.COMPOSER_ENTRY,s,{logOncePerSession:true,extraData:t});},logCompleted:function(s,t){r.logEvent(k.COMPOSER_POST_COMPLETED,s,{extraData:t});},logPost:function(s,t){r.logEvent(k.COMPOSER_POST,s,{extraData:t});},logPostSuccess:function(s,t){r.logEvent(k.COMPOSER_POST_SUCCESS,s,{extraData:t});},logPostFailure:function(s,t){r.logEvent(k.COMPOSER_POST_FAILURE,s,{extraData:t});}};e.exports=r;},null);
__d("ComposerXSessionIDInserter",["ComposerXSessionIDs","DOM","DOMQuery","Event","Parent","csx","cx","onEnclosingPageletDestroy"],function(a,b,c,d,e,f,g,h,i,j,k,l,m,n){var o={init:function(p){var q=j.listen(p,'submit',o._onSubmit);n(p,function(){q.remove();});},_onSubmit:function(p){o.insertSessionInput(p.getTarget());},insertSessionInput:function(p){var q=k.byClass(p,"_119");if(!q)return;var r=g.getSessionID(q.id);if(!r)return;var s=i.scry(p,"._5r_b")[0];if(!s){h.prependContent(p,g.createSessionIDInput(r));}else s.value=r;}};e.exports=o;},null);
__d("ComposerXStore",["Arbiter","ge"],function(a,b,c,d,e,f,g,h){var i={};function j(l,m){return 'ComposerX/'+l+'/'+m;}var k={set:function(l,m,n){if(!i[l])i[l]={};i[l][m]=n;g.inform(j(l,m),{},g.BEHAVIOR_STATE);},get:function(l,m){if(i[l])return i[l][m];return null;},getAllForComposer:function(l){return i[l]||{};},waitForComponents:function(l,m,n){g.registerCallback(n,m.map(j.bind(null,l)));}};g.subscribe('page_transition',function(){for(var l in i)if(!h(l))delete i[l];});e.exports=k;},null);
__d("ComposerX",["ActorURI","Arbiter","ComposerXAttachmentBootstrap","ComposerXContext","ComposerXMarauderLogger","ComposerXSessionIDs","ComposerXSessionIDInserter","ComposerXStore","CSS","DOM","DOMQuery","PrivacyConst","PrivacySelectorNewDispatcher","URI","SubscriptionsHandler","arrayContains","copyProperties","csx","cx","getObjectValues","removeFromArray"],function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,aa){var ba='any';function ca(da){"use strict";this._root=da;this._composerID=da.id;this._attachments={};this._context=new j({});l.resetSessionID(this._composerID);m.init(this._root);this._subscriptionsHandler=new u();this._subscriptionsHandler.addSubscriptions(h.subscribe(['composer/publish','composer/close'],function(ea,fa){if(fa.composer_id===this._composerID)this.reset();}.bind(this)));this._subscriptionsHandler.addSubscriptions.apply(this._subscriptionsHandler,k.listenForPostEvents(this._composerID,this._getContent()));this._attachmentFetchForm=q.find(da,"._2_4");}ca.prototype.getAttachment=function(da,ea,fa){"use strict";da=this._augmentURI(da);var ga=i.getURIHash(da);this._endpointHashToShow=ga;var ha=this._attachments[ga];if(ha){this._showAttachmentAfterComponentsLoaded(ga,fa);}else this.fetchAttachmentData(da,ea);};ca.prototype.fetchAttachmentData=function(da,ea){"use strict";da=this._augmentURI(da);var fa=i.getURIHash(da);if(this._attachments[fa])return;if(!v(this._currentFetchEndpoints,fa)){i.load(this._attachmentFetchForm,da,ea);this._currentFetchEndpoints.push(fa);}};ca.prototype.setAttachment=function(da,ea,fa,ga){"use strict";aa(this._currentFetchEndpoints,da);this._setupAttachment(da,ea,fa,ga);this._showAttachmentAfterComponentsLoaded(da,false);};ca.prototype.setInitialAttachment=function(da,ea,fa,ga,ha){"use strict";if(ha)this._context=ha;da=this._augmentURI(da);var ia=i.getURIHash(da);this._setupAttachment(ia,ea,fa,ga);this._initialAttachmentEndpoint=da;if(!this._currentInstance)this._showAttachmentAfterComponentsLoaded(ia,true);};ca.prototype.setComponent=function(da,ea){"use strict";if(!n.get(this._composerID,da)){n.set(this._composerID,da,ea);p.appendContent(this._attachmentFetchForm,p.create('input',{type:'hidden',name:'loaded_components[]',value:da}));}};ca.prototype.reset=function(){"use strict";if(this._currentInstance){this._currentInstance.cleanup();this._currentInstance=null;}l.resetSessionID(this._composerID);for(var da in this._attachments)this._attachments[da].instance.reset();var ea=n.getAllForComposer(this._composerID);z(ea).forEach(function(ha){if(ha.reset)ha.reset(ha);});var fa=n.get(this._composerID,'mainprivacywidget'),ga=fa&&fa.instance&&fa.instance.getInstance().getInstance();if(ga&&ga.isComposerWithDefault()){ga.selectDefaultOption();s.handleUpdateFromSelector({selector_type:r.PrivacyField.DEFAULT_COMPOSER.toString(),post_param:ga.getSelectedPostParam(),unique_value:'_reloadDefaultSelectors'});}this.getAttachment(this._initialAttachmentEndpoint,false,true);h.inform('composer/reset');};ca.prototype.destroy=function(){"use strict";this._subscriptionsHandler.release();};ca.prototype.addPlaceholders=function(da,ea){"use strict";var fa;for(var ga in this._attachments){fa=this._attachments[ga];if(fa.instance===da){ea.forEach(function(ha){fa.placeholders.push(ha);fa.required_components.push(ha.component_name);});break;}}if(this._currentInstance===da)this._fillPlaceholders(ea);};ca.prototype.hasAttachmentWithClassName=function(da){"use strict";return q.scry(this._root,'.'+da).length>0;};ca.prototype.showAttachmentThrobber=function(){"use strict";o.addClass(this._attachmentFetchForm,'async_saving');};ca.prototype.hideAttachmentThrobber=function(){"use strict";o.removeClass(this._attachmentFetchForm,'async_saving');};ca.prototype.getContext=function(){"use strict";return this._context;};ca.prototype.getID=function(){"use strict";return this._composerID;};ca.prototype._setupAttachment=function(da,ea,fa,ga){"use strict";ea.setComposerID(this._composerID);this._attachments[da]={instance:ea,placeholders:fa,required_components:ga};var ha=this._getContent(),ia=ea.getRoot();if(ia.parentNode!==ha){o.hide(ia);p.appendContent(ha,ia);}};ca.prototype._getContent=function(){"use strict";return q.find(this._root,"div._55d0");};ca.prototype._showAttachment=function(da,ea,fa,ga){"use strict";if(this._currentInstance===da)return;if(this._endpointHashToShow===ba){this._endpointHashToShow=null;}else if(this._endpointHashToShow!==ea)return;if(this._currentInstance){if(!this._currentInstance.canSwitchAway())return;this._currentInstance.cleanup();}this._currentInstance=da;var ha=this._getContent().childNodes,ia=da.getRoot();for(var ja=0;ja<ha.length;ja++)if(ha[ja]!==ia)o.hide(ha[ja]);o.show(ia);this._fillPlaceholders(fa);da.initWithComponents(ga);this._setAttachmentSelectedClass(da.attachmentClassName);h.inform('composer/initializedAttachment',{composerRoot:this._root,isInitial:ga});};ca.prototype._showAttachmentAfterComponentsLoaded=function(da,ea){"use strict";var fa=this._attachments[da];n.waitForComponents(this._composerID,fa.required_components,this._showAttachment.bind(this,fa.instance,da,fa.placeholders,ea));};ca.prototype._fillPlaceholders=function(da){"use strict";da.forEach(function(ea){var fa=n.get(this._composerID,ea.component_name);if(fa.element&&ea.element!==fa.element.parentNode)p.setContent(ea.element,fa.element);}.bind(this));};ca.prototype._setAttachmentSelectedClass=function(da){"use strict";var ea=q.scry(this._root,"._519b")[0],fa;if(ea){o.removeClass(ea,"_519b");fa=q.scry(ea,'*[aria-pressed="true"]')[0];if(fa)fa.setAttribute('aria-pressed','false');}if(da){var ga=q.scry(this._root,'.'+da)[0];if(ga){o.addClass(ga,"_519b");fa=q.scry(ga,'*[aria-pressed="false"]')[0];if(fa)fa.setAttribute('aria-pressed','true');}}};ca.prototype._augmentURI=function(da){"use strict";var ea=this._context.getProperty(j.PROPERTIES.ACTOR_ID),fa=(ea)?g.create(da,ea):new t(da),ga=this._context.getProperty(j.PROPERTIES.POST_ID);if(ga)fa.addQueryData('post_id',ga);return fa.toString();};w(ca.prototype,{_endpointHashToShow:ba,_currentFetchEndpoints:[],_initialAttachmentEndpoint:''});e.exports=ca;},null);
__d("ComposerXAttachment",["ComposerXStore","copyProperties"],function(a,b,c,d,e,f,g,h){function i(){"use strict";}i.prototype.getRoot=function(){"use strict";};i.prototype.initWithComponents=function(j){"use strict";};i.prototype.cleanup=function(){"use strict";};i.prototype.reset=function(){"use strict";};i.prototype.getComponent=function(j){"use strict";return g.get(this._composerID,j);};i.prototype.getComponentInstance=function(j){"use strict";var k=g.get(this._composerID,j);return k&&k.instance;};i.prototype.canSwitchAway=function(){"use strict";return true;};i.prototype.setComposerID=function(j){"use strict";this._composerID=j;};i.prototype.getComposerID=function(){"use strict";return this._composerID;};i.prototype.allowOGTagPreview=function(){"use strict";return false;};h(i.prototype,{attachmentClassName:''});e.exports=i;},null);
__d("registerForLeaveWarning",["PageTransitions","Run","URI","createCancelableFunction","fbt"],function(a,b,c,d,e,f,g,h,i,j,k){function l(n){var o=i.getNextURI(),p=j(n);h.onBeforeUnload(function(){return m(p,o);});return p;}function m(n,o){var p=g.getMostRecentURI(),q=i.getNextURI(),r=p.getQueryData().hasOwnProperty('theater')&&o.path===q.path,s=q.getQueryData().hasOwnProperty('theater'),t=a.DialogNavigationStack&&a.DialogNavigationStack.isActiveURI(q);if(r||s||t){h.onAfterLoad(function(){h.onBeforeUnload(function(){return m(n,o);});});return;}if(a.Dialog&&a.Dialog.getCurrent())return;if(n())return "You haven't finished your post yet. Do you want to leave without finishing?";}e.exports=l;},null);
__d("ComposerXController",["ActorURI","Arbiter","ComposerX","ComposerXMarauderLogger","ComposerXAttachmentBootstrap","ComposerXContext","Event","Parent","$","cx","emptyFunction","ge","invariant","registerForLeaveWarning"],function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t){var u={},v={},w={};function x(ba){var ca=r(ba);if(!ca)return null;var da=n.byClass(o(ba),"_119"),ea=da.id;if(!w[ea])w[ea]=new i(da);return w[ea];}function y(ba){var ca=x(ba);s(ca!==null);return ca;}function z(ba){if(!v[ba])return;v[ba].forEach(function(ca){return ca.cancel();});delete v[ba];}var aa={registerConditionForComposerCancel:function(ba,ca){var da=y(ba).getID();if(!(da in u))u[da]=[];u[da].push(ca);if(!(da in v))v[da]=[];v[da].push(t(ca));},hasChanges:function(ba){var ca=u[ba];if(!ca)return false;return ca.some(function(da){return da();});},getAttachment:function(ba,ca,da){var ea=y(ba);ea.getAttachment(ca,da);},fetchAttachmentData:function(ba,ca,da){y(ba).fetchAttachmentData(ca,da);},setAttachment:function(ba,ca,da,ea,fa){var ga=x(ba);if(ga)ga.setAttachment(ca,da,ea,fa);},setInitialAttachment:function(ba,ca,da,ea,fa,ga){var ha=y(ba);ha.setInitialAttachment(ca,da,ea,fa,ga);},setComponent:function(ba,ca,da){var ea=x(ba);if(ea)ea.setComponent(ca,da);},reset:function(ba){var ca=y(ba);ca.reset();},holdTheMarkup:q,getEndpoint:function(ba,ca,da){var ea=y(ba),fa=ea.getContext();ca=g.create(ca,fa.getProperty(l.PROPERTIES.ACTOR_ID)).toString();k.load(ea._attachmentFetchForm,ca,da);},addPlaceholders:function(ba,ca,da){var ea=y(ba);ea.addPlaceholders(ca,da);},hasAttachmentWithClassName:function(ba,ca){var da=y(ba);return da.hasAttachmentWithClassName(ca);},showAttachmentThrobber:function(ba){var ca=y(ba);ca.showAttachmentThrobber();},hideAttachmentThrobber:function(ba){var ca=y(ba);ca.hideAttachmentThrobber();},logEventForAttachment:function(ba,ca){m.listen(ba,'click',function(){var da=aa.getComposerID(ba);j.logEvent(ca,da);});},getComposerID:function(ba){return y(ba).getID();},destroyComposer:function(ba){if(!(ba in w))return;w[ba].destroy();delete w[ba];delete u[ba];z(ba);}};k.bootstrap=function(ba){aa.getAttachment(ba,ba.getAttribute('data-endpoint'));};h.subscribe('page_transition',function(){for(var ba in w)if(!r(ba))aa.destroyComposer(ba);});e.exports=aa;},null);
__d("ComposerXDragDrop",["Arbiter","ComposerXAjaxEndpoint","ComposerXController","CSS","DOMQuery","DragDropTarget","Parent","URI","csx","cx"],function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var q=h.MEDIA_UPLOAD,r='/ajax/composerx/attachment/link/scraper/',s=function(u){u();};function t(u,v,w,x){"use strict";this._root=u;this._composerID=v;this._targetID=w;x=x||s;this._dragdrop=new l(u).setOnFilesDropCallback(function(y){x(this._uploadFiles.bind(this,y));}.bind(this)).setFileFilter(t.filterImages).enable();t.handleDragEnterAndLeave(u);g.subscribe('composer/deactivateDragdrop',function(){this.deactivate();}.bind(this));g.subscribe('composer/reactivateDragdrop',function(){this.reactivate();}.bind(this));}t.prototype.enableURLDropping=function(){"use strict";this._dragdrop.setOnURLDropCallback(this._onURLDrop.bind(this));};t.prototype.deactivate=function(){"use strict";this._dragdrop.disable();};t.prototype.reactivate=function(){"use strict";this._dragdrop.enable();};t.prototype._uploadFiles=function(u){"use strict";i.getAttachment(this._root,q);g.inform('ComposerXFilesStore/filesDropped/'+this._composerID+'/mediaupload',{files:u},g.BEHAVIOR_PERSISTENT);};t.prototype._onURLDrop=function(u){"use strict";var v=new n(r);v.addQueryData({scrape_url:encodeURIComponent(u)});i.getAttachment(this._root,v.toString());};t.handleDragEnterAndLeave=function(u){"use strict";var v=k.scry(m.byClass(u,"_119"),"._2wr");g.subscribe('dragenter',function(w,x){if(u==x.element)v.forEach(j.hide);});g.subscribe('dragleave',function(w,x){if(u==x.element)v.forEach(j.show);});};t.filterImages=function(u){"use strict";var v=[];for(var w=0;w<u.length;w++)if(u[w].type.match('image/*'))v.push(u[w]);return v;};e.exports=t;},null);
__d("XBirthdayMessagePostController",["XController"],function(a,b,c,d,e,f){e.exports=b("XController").create("\/reminders\/birthday\/message\/",{});},null);