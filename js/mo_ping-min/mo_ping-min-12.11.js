(function(){var map=crystal.map;var format=crystal.format;var dom=crystal.dom;var getFlashVersion=crystal.getFlashVersion;var lib_name="crystal";var generateId=crystal.generateId;var serializeQuery=crystal.serializeQuery;var ua=crystal.ua;var evt=crystal.evt;var renderer=function(){var param_template='<param name="{name}" value="{value}"></param>',buildParams=function(o){return map(o,function(v,k){return format(param_template,{name:k,value:v})}).join("")},removeFlash=function(flash){if(!flash||!flash.parentNode)return;
if(ua.ie)for(var i in flash)if(typeof flash[i]=="function")flash[i]=null;flash.parentNode.removeChild(flash)},buildHTML=dom.buildHTML,renderFlash=function(config,el){var params={allowscriptaccess:"always",wmode:"opaque",quality:"high"};if(config.params)mix(params,config.params);var initvars=config.initvars||{};if(config.link_to)initvars["adlink"]=config.link_to;if(getFlashVersion()>=11)initvars["ime"]=true;if(initvars["ime"])initvars["setFocus"]=lib_name+".ime.setFocus";var attrs={id:generateId()};
initvars["swfid"]=attrs["id"];params.flashvars=serializeQuery(initvars);if(ua.ie){attrs.classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000";params.movie=config.resource_url}else{params.type="application/x-shockwave-flash";attrs.data=config.resource_url}el.innerHTML=buildHTML({outline:"none",width:config.width+"px",height:config.height+"px"},attrs,"object",buildParams(params));var flash=el.firstChild;evt.on(window,"unload",function(){removeFlash(flash)});return flash};return{swf:renderFlash}}();var wrap=
dom.createElement({},{},"div");document.body.appendChild(wrap);renderer["swf"]({resource_url:"http://adsrich.qq.com/sc/monitor/monitor.swf?v=20130812",width:1,height:1},wrap)})();