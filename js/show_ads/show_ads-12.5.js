(function(){var n=this,aa=function(a,b,c){return a.call.apply(a.bind,arguments)},ba=function(a,b,c){if(!a)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var c=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(c,d);return a.apply(b,c)}}return function(){return a.apply(b,arguments)}},p=function(a,b,c){p=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?aa:ba;return p.apply(null,arguments)};var u=(new Date).getTime();var x=function(a){a=parseFloat(a);return isNaN(a)||1<a||0>a?0:a},ca=function(a,b){var c=parseInt(a,10);return isNaN(c)?b:c},A=function(a,b){return/^true$/.test(a)?!0:/^false$/.test(a)?!1:b},da=/^([\w-]+\.)*([\w-]{2,})(\:[0-9]+)?$/,ea=function(a,b){if(!a)return b;var c=a.match(da);return c?c[0]:b};var oa=x("0.01"),pa=x("0.001"),qa=ca("101",-1),ra=ca("98",0),sa=x("0.05"),ta=x("0.001"),ua=x("0.0"),va=x("0.001"),wa=A("true",!0),xa=x("0.01"),ya=x("0.03"),
za=x("0.001"),Aa=x("0.01"),Ba=x("");var Ca=function(){return"r20151201"},Da=A("false",!1),Ea=A("false",!1),Fa=A("false",!1),Ga=Fa||!Ea;var Ha=String.prototype.trim?function(a){return a.trim()}:function(a){return a.replace(/^[\s\xa0]+|[\s\xa0]+$/g,"")},Ia=/&/g,Za=/</g,$a=/>/g,ab=/"/g,bb=/'/g,cb=/\x00/g,db={"\x00":"\\0","\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","\t":"\\t","\x0B":"\\x0B",'"':'\\"',"\\":"\\\\","<":"<"},E={"'":"\\'"},eb=function(a,b){return a<b?-1:a>b?1:0};var F=function(a){F[" "](a);return a};F[" "]=function(){};var G;a:{var fb=n.navigator;if(fb){var gb=fb.userAgent;if(gb){G=gb;break a}}G=""};var hb=-1!=G.indexOf("Opera")||-1!=G.indexOf("OPR"),H=-1!=G.indexOf("Trident")||-1!=G.indexOf("MSIE"),ib=-1!=G.indexOf("Edge"),I=-1!=G.indexOf("Gecko")&&!(-1!=G.toLowerCase().indexOf("webkit")&&-1==G.indexOf("Edge"))&&!(-1!=G.indexOf("Trident")||-1!=G.indexOf("MSIE"))&&-1==G.indexOf("Edge"),jb=-1!=G.toLowerCase().indexOf("webkit")&&-1==G.indexOf("Edge"),kb=function(){var a=G;if(I)return/rv\:([^\);]+)(\)|;)/.exec(a);if(ib)return/Edge\/([\d\.]+)/.exec(a);if(H)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);
if(jb)return/WebKit\/(\S+)/.exec(a)},lb=function(){var a=n.document;return a?a.documentMode:void 0},mb=function(){if(hb&&n.opera){var a;var b=n.opera.version;try{a=b()}catch(c){a=b}return a}a="";(b=kb())&&(a=b?b[1]:"");return H&&(b=lb(),b>parseFloat(a))?String(b):a}(),nb={},ob=function(a){if(!nb[a]){for(var b=0,c=Ha(String(mb)).split("."),d=Ha(String(a)).split("."),f=Math.max(c.length,d.length),e=0;0==b&&e<f;e++){var g=c[e]||"",h=d[e]||"",l=RegExp("(\\d*)(\\D*)","g"),t=RegExp("(\\d*)(\\D*)","g");
do{var q=l.exec(g)||["","",""],m=t.exec(h)||["","",""];if(0==q[0].length&&0==m[0].length)break;b=eb(0==q[1].length?0:parseInt(q[1],10),0==m[1].length?0:parseInt(m[1],10))||eb(0==q[2].length,0==m[2].length)||eb(q[2],m[2])}while(0==b)}nb[a]=0<=b}},pb=n.document,qb=pb&&H?lb()||("CSS1Compat"==pb.compatMode?parseInt(mb,10):5):void 0;var rb;if(!(rb=!I&&!H)){var sb;if(sb=H)sb=9<=qb;rb=sb}rb||I&&ob("1.9.1");H&&ob("9");var tb=function(a){try{var b;if(b=!!a&&null!=a.location.href)a:{try{F(a.foo);b=!0;break a}catch(c){}b=!1}return b}catch(c){return!1}},J=function(a,b){if(!(1E-4>Math.random())){var c=Math.random();if(c<b)return c=ub(window),a[Math.floor(c*a.length)]}return null},ub=function(a){try{var b=new Uint32Array(1);a.crypto.getRandomValues(b);return b[0]/65536/65536}catch(c){return Math.random()}},vb=function(a,b){for(var c in a)Object.prototype.hasOwnProperty.call(a,c)&&b.call(void 0,a[c],c,a)},wb=function(a){var b=
a.length;if(0==b)return 0;for(var c=305419896,d=0;d<b;d++)c^=(c<<5)+(c>>2)+a.charCodeAt(d)&4294967295;return 0<c?c:4294967296+c};var xb=function(a,b,c){a.addEventListener?a.addEventListener(b,c,!1):a.attachEvent&&a.attachEvent("on"+b,c)};var Ab=function(a,b,c,d,f,e){try{if((d?a.Y:Math.random())<(f||a.N)){var g=a.M+b+yb(c),g=g.substring(0,2E3);"undefined"===typeof e?zb(g):zb(g,e)}}catch(h){}},yb=function(a){var b="";vb(a,function(a,d){if(0===a||a)b+="&"+d+"="+encodeURIComponent(String(a))});return b},zb=function(a,b){n.google_image_requests||(n.google_image_requests=[]);var c=n.document.createElement("img");if(b){var d=function(a){b(a);a=d;c.removeEventListener?c.removeEventListener("load",a,!1):c.detachEvent&&c.detachEvent("onload",
a);a=d;c.removeEventListener?c.removeEventListener("error",a,!1):c.detachEvent&&c.detachEvent("onerror",a)};xb(c,"load",d);xb(c,"error",d)}c.src=a;n.google_image_requests.push(c)};var Bb=document,M=window,Cb,Db=null,N=Bb.getElementsByTagName("script");N&&N.length&&(Db=N[N.length-1]);Cb=Db;var Eb=Object.prototype.hasOwnProperty,Fb=function(a,b){for(var c in a)Eb.call(a,c)&&b.call(void 0,a[c],c,a)},O=function(a){return!!a&&"function"==typeof a&&!!a.call},Gb=function(a,b){if(!(2>arguments.length))for(var c=1,d=arguments.length;c<d;++c)a.push(arguments[c])},Hb=function(a,b){if(a.indexOf){var c=a.indexOf(b);return 0<c||0===c}for(c=0;c<a.length;c++)if(a[c]===b)return!0;return!1},Ib=function(a){"google_onload_fired"in a||(a.google_onload_fired=!1,xb(a,"load",function(){a.google_onload_fired=
!0}))},Jb=function(a){a=a.google_unique_id;return"number"==typeof a?a:0},Kb=!!window.google_async_iframe_id;var Lb=function(a){return(a=a.google_ad_modifications)?a.loeids||[]:[]},Mb=function(a,b,c){if(!a)return null;for(var d=0;d<a.length;++d)if((a[d].ad_slot||b)==b&&(a[d].ad_tag_origin||c)==c)return a[d];return null};var Nb=function(a,b,c){this.U=a;this.P=b;this.w=c;this.v=null;this.O=this.o;this.da=!1},Ob=function(a,b,c){this.message=a;this.fileName=b||"";this.lineNumber=c||-1},Qb=function(a,b,c,d){var f;try{f=c()}catch(h){var e=a.w;try{var g=Pb(h),e=(d||a.O).call(a,b,g,void 0,void 0)}catch(l){a.o("pAR",l)}if(!e)throw h;}finally{}return f},Rb=function(a,b){var c=U;return function(){var d=arguments;return Qb(c,a,function(){return b.apply(void 0,d)})}};
Nb.prototype.o=function(a,b,c,d,f){var e={};e.context=a;b instanceof Ob||(b=Pb(b));e.msg=b.message.substring(0,512);b.fileName&&(e.file=b.fileName);0<b.lineNumber&&(e.line=b.lineNumber.toString());a=n.document;e.url=a.URL.substring(0,512);e.ref=a.referrer.substring(0,512);if(this.v)try{this.v(e)}catch(g){}if(d)try{d(e)}catch(g){}Ab(this.U,f||this.P,e,this.da,c);return this.w};
var Pb=function(a){var b=a.toString();a.name&&-1==b.indexOf(a.name)&&(b+=": "+a.name);a.message&&-1==b.indexOf(a.message)&&(b+=": "+a.message);if(a.stack){var c=a.stack,d=b;try{-1==c.indexOf(d)&&(c=d+"\n"+c);for(var f;c!=f;)f=c,c=c.replace(/((https?:\/..*\/)[^\/:]*:\d+(?:.|\n)*)\2/,"$1");b=c.replace(/\n */g,"\n")}catch(e){b=d}}return new Ob(b,a.fileName,a.lineNumber)};var Sb,U;Sb=new function(){this.M="http"+("http:"==M.location.protocol?"":"s")+"://pagead2.googlesyndication.com/pagead/gen_204?id=";this.N=.01;this.Y=Math.random()};U=new Nb(Sb,"jserror",!0);var Ub=function(a,b){Qb(U,a,b,Tb)},Tb=U.o,Ac=function(a,b){return Rb(a,b)};var Bc={client:"google_ad_client",format:"google_ad_format",slotname:"google_ad_slot",output:"google_ad_output",ad_type:"google_ad_type",async_oa:"google_async_for_oa_experiment",dimpr:"google_always_use_delayed_impressions_experiment",peri:"google_top_experiment",pse:"google_pstate_expt"};U.w=!Da;U.v=function(a){a.shv=Ca();vb(Bc,function(b,c){try{null!=n[b]&&(a[c]=n[b])}catch(d){}})};var Cc=function(a,b){this.start=a<b?a:b;this.end=a<b?b:a};var Dc=function(a){var b;try{b=parseInt(a.localStorage.getItem("google_experiment_mod"),10)}catch(c){return null}if(0<=b&&1E3>b)return b;b=Math.floor(1E3*ub(a));try{return a.localStorage.setItem("google_experiment_mod",""+b),b}catch(c){return null}};var Ec=null,Fc=function(){if(!Ec){for(var a=window,b=a,c=0;a&&a!=a.parent;)if(a=a.parent,c++,tb(a))b=a;else break;Ec=b}return Ec};var V={Oa:{i:"453848100",j:"453848101"},wa:{i:"828064124",la:"828064125",ma:"828064172",na:"828064173"},va:{i:"828064127",j:"828064128"},xa:{i:"828064170",j:"828064171"},Aa:{i:"24819308",j:"24819309",ga:"24819320",ka:"24819321"},za:{i:"24819330",j:"24819331"},Ca:{i:"828064162",j:"828064163"},Ba:{i:"828064164",j:"828064165",oa:"828064166"},sa:{i:"86724438",j:"86724439"},ta:{i:"828064190",j:"828064191"},Ha:{i:"10573505",j:"10573506"},J:{i:"10573595",j:"10573596"},Na:{i:"10573511",j:"10573512"},L:{i:"10573581",
j:"10573582"},Ia:{i:"10573531",j:"10573532"},K:{i:"10573561",j:"10573562"},Ja:{i:"10573551",j:"10573552"},Ga:{i:"312815004",j:"312815005"},I:{i:"312815104",j:"312815105"},ja:{i:"26835105",j:"26835106"},qa:{i:"35923720",j:"35923721"},A:{i:"35923760",j:"35923761"},Pa:{i:"27415001",j:"27415002"},H:{i:"20040000",j:"20040001"},ha:{i:"20040016",j:"20040017"},pa:{i:"828064202",j:"828064203"},ra:{i:"314159284",Qa:"314159285"},Da:{i:"19188000",j:"19188001"},Ea:{i:"20040026",j:"20040027"},Fa:{i:"33895410",
j:"33895411"},ia:{fa:"314159230",ya:"314159231"},ua:{Ka:"27285692",Ma:"27285712",La:"27285713"}};var Gc=new function(){this.V=new Cc(100,199)};var W=function(a,b,c,d){return a.location&&a.location.hash=="#google_plle_"+d?d:J([c,d],b)};var Hc=function(a,b,c){Ub("files::getSrc",function(){if("https:"==M.location.protocol&&"http"==c)throw c="https",Error("Requested url "+a+b);});return[c,"://",a,b].join("")},Ic=function(a,b,c){c||(c=Ga?"https":"http");return Hc(a,b,c)};var Jc=function(){},Lc=function(a,b,c){switch(typeof b){case "string":Kc(b,c);break;case "number":c.push(isFinite(b)&&!isNaN(b)?String(b):"null");break;case "boolean":c.push(String(b));break;case "undefined":c.push("null");break;case "object":if(null==b){c.push("null");break}if(b instanceof Array||void 0!=b.length&&b.splice){var d=b.length;c.push("[");for(var f="",e=0;e<d;e++)c.push(f),Lc(a,b[e],c),f=",";c.push("]");break}c.push("{");d="";for(f in b)b.hasOwnProperty(f)&&(e=b[f],"function"!=typeof e&&
(c.push(d),Kc(f,c),c.push(":"),Lc(a,e,c),d=","));c.push("}");break;case "function":break;default:throw Error("Unknown type: "+typeof b);}},Mc={'"':'\\"',"\\":"\\\\","/":"\\/","\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","\t":"\\t","\x0B":"\\u000b"},Nc=/\uffff/.test("\uffff")?/[\\\"\x00-\x1f\x7f-\uffff]/g:/[\\\"\x00-\x1f\x7f-\xff]/g,Kc=function(a,b){b.push('"');b.push(a.replace(Nc,function(a){if(a in Mc)return Mc[a];var b=a.charCodeAt(0),f="\\u";16>b?f+="000":256>b?f+="00":4096>b&&(f+="0");return Mc[a]=
f+b.toString(16)}));b.push('"')};var Oc=null,Pc=I||jb||hb||"function"==typeof n.atob;var Qc="google_ad_block google_ad_channel google_ad_client google_ad_format google_ad_height google_ad_host google_ad_host_channel google_ad_host_tier_id google_ad_modifications google_ad_output google_ad_region google_ad_section google_ad_slot google_ad_type google_ad_unit_key google_ad_unit_key_2 google_ad_width google_adtest google_allow_expandable_ads google_alternate_ad_url google_alternate_color google_analytics_domain_name google_analytics_uacct google_analytics_url_parameters google_available_width google_captcha_token google_city google_color_bg google_color_border google_color_line google_color_link google_color_text google_color_url google_container_id google_content_recommendation_ui_type google_contents google_core_dbp google_country google_cpm google_ctr_threshold google_cust_age google_cust_ch google_cust_criteria google_cust_gender google_cust_id google_cust_interests google_cust_job google_cust_l google_cust_lh google_cust_u_url google_disable_video_autoplay google_delay_requests_count google_delay_requests_delay google_ed google_eids google_ember_h google_ember_w google_enable_content_recommendations google_enable_ose google_enable_ose_periscope google_encoding google_floating_ad_position google_font_face google_font_size google_frame_id google_gl google_hints google_is_split_slot google_image_size google_kw google_kw_type google_lact google_language google_loeid google_max_num_ads google_max_radlink_len google_mtl google_nofo google_num_radlinks google_num_radlinks_per_unit google_only_ads_with_video google_only_pyv_ads google_only_userchoice_ads google_override_format google_page_url google_pgb_reactive google_previous_watch google_previous_searches google_referrer_url google_region google_responsive_formats google_reuse_colors google_rl_dest_url google_rl_filtering google_rl_mode google_rt google_safe google_scs google_source_type google_sui google_skip google_tag_for_child_directed_treatment google_tag_info google_tag_origin google_tdsma google_tfs google_tl google_ui_features google_video_doc_id google_video_product_type google_video_url_to_fetch google_webgl_support google_with_pyv_ads google_yt_pt google_yt_up".split(" "),
Rc={google_ad_modifications:!0,google_analytics_domain_name:!0,google_analytics_uacct:!0},Sc=function(a){return(a=a.innerText||a.innerHTML)&&(a=a.replace(/^\s+/,"").split(/\r?\n/,1)[0].match(/^\x3c!--+(.*?)(?:--+>)?\s*$/))&&/google_ad_client/.test(a[1])?a[1]:null},Tc=function(a){if(a=a.innerText||a.innerHTML)if(a=a.replace(/^\s+/,"").split(/\r?\n/,1)[0],(a=a.match(/^\x3c!--+(.*?)(?:--+>)?\s*$/)||a.match(/^\/*\s*<!\[CDATA\[(.*?)(?:\/*\s*\]\]>)?\s*$/i))&&/google_ad_client/.test(a[1]))return a[1];return null},
Uc=function(a){if(a=a.innerText||a.innerHTML)if(a=a.replace(/^\s+|\s+$/g,"").replace(/\s*(\r?\n)+\s*/g,";"),(a=a.match(/^\x3c!--+(.*?)(?:--+>)?$/)||a.match(/^\/*\s*<!\[CDATA\[(.*?)(?:\/*\s*\]\]>)?$/i))&&/google_ad_client/.test(a[1]))return a[1];return null},Xc=function(a,b){var c;try{a:{var d=a.document.getElementsByTagName("script"),f=Sc,e;"undefined"!=typeof a.google_pubvars_recovery_regexp_experiment?e=a.google_pubvars_recovery_regexp_experiment:(e=J(["C","E","EM"],ya),a.google_pubvars_recovery_regexp_experiment=
e);b.google_pubvars_recovery_regexp_experiment=e;switch(e){case "E":f=Tc;break;case "EM":var g=a.navigator&&a.navigator.userAgent||"",h;if(!(h=/appbankapppuzdradb|daumapps|fban|fbios|fbav|fb_iab|gsa\/|messengerforios|naver|niftyappmobile|nonavigation|pinterest|twitter|ucbrowser|yjnewsapp|youtube/i.test(g))){var l;if(l=/i(phone|pad|pod)/i.test(g)){var t;if(t=/applewebkit/i.test(g)&&!/version|safari/i.test(g)){var q;try{q=!(!M.navigator.X&&!M.top.navigator.X)}catch(v){q=!1}t=!q}l=t}h=l}f=h?Sc:Uc}for(var m=
d.length-1;0<=m;m--){var y=d[m];if(!y.google_parsed_script){y.google_parsed_script=!0;var z=f(y);if(z){c=z;break a}}}c=null}}catch(v){return!1}if(!c)return!1;try{for(var d=/(google_\w+) *= *(['"]?[\w.-]+['"]?) *(?:;|$)/gm,f={},w;w=d.exec(c);)f[w[1]]=Vc(w[2]);Wc(f,a)}catch(v){return!1}return!!a.google_ad_client},Yc=function(a){a.google_page_url&&(a.google_page_url=String(a.google_page_url));var b=[];Fb(a,function(a,d){if(null!=a){var f;try{var e=[];Lc(new Jc,a,e);f=e.join("")}catch(g){}f&&(f=f.replace(/\//g,
"\\$&"),Gb(b,d,"=",f,";"))}});return b.join("")},Zc=function(a){for(var b=0,c=Qc.length;b<c;b++){var d=Qc[b];Rc[d]||(a[d]=null)}},Vc=function(a){switch(a){case "true":return!0;case "false":return!1;case "null":return null;case "undefined":break;default:try{var b=a.match(/^(?:'(.*)'|"(.*)")$/);if(b)return b[1]||b[2]||"";if(/^[-+]?\d*(\.\d+)?$/.test(a)){var c=parseFloat(a);return c===c?c:void 0}}catch(d){}}},Wc=function(a,b){for(var c=0;c<Qc.length;c++){var d=Qc[c];null==b[d]&&null!=a[d]&&(b[d]=a[d])}};var $c=null;var ad=function(a){this.m=a;a.google_iframe_oncopy||(a.google_iframe_oncopy={handlers:{},upd:p(this.ca,this)});this.$=a.google_iframe_oncopy},bd;var X="var i=this.id,s=window.google_iframe_oncopy,H=s&&s.handlers,h=H&&H[i],w=this.contentWindow,d;try{d=w.document}catch(e){}if(h&&d&&(!d.body||!d.body.firstChild)){if(h.call){setTimeout(h,0)}else if(h.match){try{h=s.upd(h,i)}catch(e){}w.location.replace(h)}}";
/[\x00&<>"']/.test(X)&&(-1!=X.indexOf("&")&&(X=X.replace(Ia,"&amp;")),-1!=X.indexOf("<")&&(X=X.replace(Za,"&lt;")),-1!=X.indexOf(">")&&(X=X.replace($a,"&gt;")),-1!=X.indexOf('"')&&(X=X.replace(ab,"&quot;")),-1!=X.indexOf("'")&&(X=X.replace(bb,"&#39;")),-1!=X.indexOf("\x00")&&(X=X.replace(cb,"&#0;")));bd=X;ad.prototype.set=function(a,b){this.$.handlers[a]=b;this.m.addEventListener&&this.m.addEventListener("load",p(this.R,this,a),!1)};
ad.prototype.R=function(a){a=this.m.document.getElementById(a);try{var b=a.contentWindow.document;if(a.onload&&b&&(!b.body||!b.body.firstChild))a.onload()}catch(c){}};ad.prototype.ca=function(a,b){var c=cd("rx",a),d;a:{if(a&&(d=a.match("dt=([^&]+)"))&&2==d.length){d=d[1];break a}d=""}d=(new Date).getTime()-d;c=c.replace(/&dtd=(\d+|-?M)/,"&dtd="+(1E5<=d?"M":0<=d?d:"-M"));this.set(b,c);return c};
var cd=function(a,b){var c=new RegExp("\\b"+a+"=(\\d+)"),d=c.exec(b);d&&(b=b.replace(c,a+"="+(+d[1]+1||1)));return b};var dd=/MSIE [2-7]|PlayStation|Gecko\/20090226|Android 2\.|Opera/i,ed=/Android/,fd=!1;var gd=function(a){if(!a)return"";(a=a.toLowerCase())&&"ca-"!=a.substring(0,3)&&(a="ca-"+a);return a};var hd={"120x90":!0,"160x90":!0,"180x90":!0,"200x90":!0,"468x15":!0,"728x15":!0};var id="google_ad_client google_ad_format google_ad_height google_ad_width google_city google_country google_encoding google_language google_page_url".split(" "),jd=function(a){try{var b=a.top.google_ads_params_store;if(b)return b;b=a.top.google_ads_params_store={};if(b===a.top.google_ads_params_store)return b}catch(c){}return null};var Y,Z=function(a){this.u=[];this.m=a||window;this.l=0;this.s=null;this.G=0},kd=function(a,b){this.S=a;this.ea=b};Z.prototype.enqueue=function(a,b){0!=this.l||0!=this.u.length||b&&b!=window?this.C(a,b):(this.l=2,this.F(new kd(a,window)))};Z.prototype.C=function(a,b){this.u.push(new kd(a,b||this.m));ld(this)};Z.prototype.T=function(a){this.l=1;if(a){var b=Ac("sjr::timeout",p(this.D,this,!0));this.s=this.m.setTimeout(b,a)}};
Z.prototype.D=function(a){a&&++this.G;1==this.l&&(null!=this.s&&(this.m.clearTimeout(this.s),this.s=null),this.l=0);ld(this)};Z.prototype.Z=function(){return!(!window||!Array)};Z.prototype.aa=function(){return this.G};Z.prototype.nq=Z.prototype.enqueue;Z.prototype.nqa=Z.prototype.C;Z.prototype.al=Z.prototype.T;Z.prototype.rl=Z.prototype.D;Z.prototype.sz=Z.prototype.Z;Z.prototype.tc=Z.prototype.aa;var ld=function(a){var b=Ac("sjr::tryrun",p(a.ba,a));a.m.setTimeout(b,0)};
Z.prototype.ba=function(){if(0==this.l&&this.u.length){var a=this.u.shift();this.l=2;var b=Ac("sjr::run",p(this.F,this,a));a.ea.setTimeout(b,0);ld(this)}};Z.prototype.F=function(a){this.l=0;a.S()};
var md=function(a){try{return a.sz()}catch(b){return!1}},nd=function(a){return!!a&&("object"==typeof a||"function"==typeof a)&&md(a)&&O(a.nq)&&O(a.nqa)&&O(a.al)&&O(a.rl)},od=function(){if(Y&&md(Y))return Y;var a=Fc(),b=a.google_jobrunner;return nd(b)?Y=b:a.google_jobrunner=Y=new Z(a)},pd=function(a,b){od().nq(a,b)},qd=function(a,b){od().nqa(a,b)};var rd=Kb?1==Jb(M):!Jb(M),sd=function(){var a=Fa?"https":"http",b=F("script"),c;c=ea("","pagead2.googlesyndication.com");return["<",b,' src="',Ic(c,["/pagead/js/",Ca(),"/r20151006/show_ads_impl.js"].join(""),a),'"></',b,">"].join("")},td=function(a,b,c,d){return function(){var f=!1;d&&od().al(3E4);try{var e=a.document.getElementById(b).contentWindow;
if(tb(e)){var g=a.document.getElementById(b).contentWindow,h=g.document;h.body&&h.body.firstChild||(h.open(),g.google_async_iframe_close=!0,h.write(c))}else{for(var l=a.document.getElementById(b).contentWindow,e=c,e=String(e),g=['"'],h=0;h<e.length;h++){var t=e.charAt(h),q=t.charCodeAt(0),m=h+1,y;if(!(y=db[t])){var z;if(31<q&&127>q)z=t;else{var w=t;if(w in E)z=E[w];else if(w in db)z=E[w]=db[w];else{var v=w,B=w.charCodeAt(0);if(31<B&&127>B)v=w;else{if(256>B){if(v="\\x",16>B||256<B)v+="0"}else v="\\u",
4096>B&&(v+="0");v+=B.toString(16).toUpperCase()}z=E[w]=v}}y=z}g[m]=y}g.push('"');l.location.replace("javascript:"+g.join(""))}f=!0}catch(P){l=Fc().google_jobrunner,nd(l)&&l.rl()}f&&(f=cd("google_async_rrc",c),(new ad(a)).set(b,td(a,b,f,!1)))}},ud=function(a){var b=["<iframe"];Fb(a,function(a,d){null!=a&&b.push(" "+d+'="'+a+'"')});b.push("></iframe>");return b.join("")},vd=function(a){var b;if(b=rd){if(!$c)a:{var c=[n.top];b=[];for(var d=0,f;f=c[d++];){b.push(f);try{if(f.frames)for(var e=f.frames.length,
g=0;g<e&&1024>c.length;++g)c.push(f.frames[g])}catch(l){}}for(e=0;e<b.length;e++)try{var h=b[e].frames.google_esf;if(h){$c=h;break a}}catch(l){}$c=null}b=!$c}return b?(h={style:"display:none"},h["data-ad-client"]=gd(a),h.id="google_esf",h.name="google_esf",a=Ic(ea("","googleads.g.doubleclick.net"),["/pagead/html/",Ca(),"/r20151006/zrt_lookup.html"].join("")),h.src=a,ud(h)):""},wd=function(a,b){var c=b.google_ad_output,
d=b.google_ad_format;d||"html"!=c&&null!=c||(d=b.google_ad_width+"x"+b.google_ad_height,b.google_ad_format_suffix&&(d+=b.google_ad_format_suffix));c=!b.google_ad_slot||b.google_override_format||!hd[b.google_ad_width+"x"+b.google_ad_height]&&"aa"==b.google_loader_used;d=d&&c?d.toLowerCase():"";b.google_ad_format=d;for(var d=[b.google_ad_slot,b.google_ad_format,b.google_ad_type,b.google_ad_width,b.google_ad_height],c=[],f=0,e=Cb.parentElement;e&&25>f;e=e.parentNode,++f)c.push(9!=e.nodeType&&e.id||"");
(c=c.join())&&d.push(c);b.google_ad_unit_key=wb(d.join(":")).toString();d=a.google_adk2_experiment=a.google_adk2_experiment||J(["C","E"],va)||"N";if("E"==d){d=Cb;c=[];for(f=0;d&&25>f;++f){var e="",e=(e=9!=d.nodeType&&d.id)?"/"+e:"",g;a:{if(d&&d.nodeName&&d.parentElement){g=d.nodeName.toString().toLowerCase();for(var h=d.parentElement.childNodes,l=0,t=0;t<h.length;++t){var q=h[t];if(q.nodeName&&q.nodeName.toString().toLowerCase()==g){if(d==q){g="."+l;break a}++l}}}g=""}c.push((d.nodeName&&d.nodeName.toString().toLowerCase())+
e+g);d=d.parentElement}d=c.join()+":";c=a;f=[];if(c)try{for(var m=c.parent,e=0;m&&m!=c&&25>e;++e){var y=m.frames;for(g=0;g<y.length;++g)if(c==y[g]){f.push(g);break}c=m;m=c.parent}}catch(z){}b.google_ad_unit_key_2=wb(d+f.join()).toString()}else"C"==d&&(b.google_ad_unit_key_2="ctrl")};Ub("sa::main",function(){var a=window,b=a.google_ad_modifications=a.google_ad_modifications||{};if(!b.plle){b.plle=!0;var c=b.loeids=b.loeids||[],d=V.J,f,e=d.j,g;if(a.location&&a.location.hash=="#google_plle_"+e)g=e;else{var h=[d.i,e],l=new Cc(qa,qa+ra-1),t;if(!(t=0>=ra||ra%h.length)){var q=Gc.V;t=!(q.start<=l.start&&q.end>=l.end)}if(t)g=null;else{var m=Dc(a);g=null!==m&&l.start<=m&&l.end>=m?h[(m-qa)%h.length]:null}}(f=g)&&c.push(f);var d=V.I,y=W(a,sa,d.i,d.j);y&&c.push(y);var d=V.L,z=W(a,ta,d.i,
d.j);z&&c.push(z);var d=V.K,w=W(a,ua,d.i,d.j);w&&c.push(w);var d=V.A,v=W(a,Aa,d.i,d.j);v&&c.push(v);if(!Bb.body){var d=V.H,B=W(a,Ba,d.i,d.j);B&&c.push(B)}}var P;var Vb=a.google_ad_slot,Q=a.google_ad_modifications;if(!Q||Mb(Q.ad_whitelist,Vb,void 0))P=null;else{var Wb=Q.space_collapsing||"none",Xb=Mb(Q.ad_blacklist,Vb);P=Xb?{B:!0,W:Xb.space_collapsing||Wb}:Q.remove_ads_by_default?{B:!0,W:Wb}:null}if(P&&P.B)Zc(a);else{Ib(a);var Yb=window.google_ad_output;void 0!==window.google_always_use_delayed_impressions_experiment||
Yb&&"html"!=Yb||(window.google_always_use_delayed_impressions_experiment=J(["C","E"],pa));var Ja;if(!(Ja=!1===window.google_enable_async)){var Ka;var Zb=navigator.userAgent;dd.test(Zb)?Ka=!1:(void 0!==window.google_async_for_oa_experiment||!ed.test(navigator.userAgent)||dd.test(navigator.userAgent)||(window.google_async_for_oa_experiment=J(["E","C"],oa)),Ka=ed.test(Zb)?"E"===window.google_async_for_oa_experiment:!0);Ja=!Ka||window.google_container_id||window.google_ad_output&&"html"!=window.google_ad_output}if(Ja)a.google_loader_used=
"sb",a.google_start_time=u,wd(a,a),document.write(vd(a.google_ad_client)+sd());else{if(rd){var $b=a.google_ad_client,xd=navigator;if(wa&&a&&$b&&xd){var ac=a.document,yd=Ic("pagead2.googlesyndication.com","/pub-config/"+gd($b)+".js"),bc=ac.createElement("script");bc.src=yd;var fa=ac.getElementsByTagName("script")[0];fa&&fa.parentNode&&fa.parentNode.insertBefore(bc,fa)}}a.google_unique_id?++a.google_unique_id:a.google_unique_id=1;var k={};null==a.google_ad_client&&Xc(a,k)&&(k.google_loader_features_used=
2048);Wc(a,k);k.google_loader_used="sa";Zc(a);var cc=F("script"),La,ga;a:{try{var K=a.top.google_pubvars_reuse_experiment;if("undefined"!==typeof K){ga=K;break a}K=J(["C","E"],xa)||null;a.top.google_pubvars_reuse_experiment=K;if(a.top.google_pubvars_reuse_experiment===K){ga=K;break a}}catch(dc){}ga=null}if("E"===ga){var zd=null!=k.google_ad_client,Ad=null!=k.google_ad_width,Bd=null!=k.google_ad_height,ec=jd(a);if(ec){for(var Ma=0;Ma<id.length;Ma++){var Na=id[Ma];null!=k[Na]&&(ec[Na]=k[Na])}var R=
jd(a);if(R){var fc=R.google_ad_width,gc=R.google_ad_height,Oa=R.google_ad_format;if(fc&&gc&&Oa){var ha,Pa=Oa&&Oa.match(/(\d+)x(\d+)/);ha=Pa?{width:Pa[1],height:Pa[2]}:null;!ha||ha.width==fc&&ha.height==gc||delete R.google_ad_format}}}var Qa=jd(a);if(Qa)for(var Ra=0;Ra<id.length;Ra++){var ia=id[Ra];null==k[ia]&&null!=Qa[ia]&&(k[ia]=Qa[ia])}var Cd=null!=k.google_ad_client,Dd=null!=k.google_ad_width,Ed=null!=k.google_ad_height;La=[zd?"c2":Cd?"c1":"c0",Ad?"w2":Dd?"w1":"w0",Bd?"h2":Ed?"h1":"h0"].join()}var r=
{},Fd=k.google_ad_height;r.width='"'+k.google_ad_width+'"';r.height='"'+Fd+'"';r.frameborder='"0"';r.marginwidth='"0"';r.marginheight='"0"';r.vspace='"0"';r.hspace='"0"';r.allowtransparency='"true"';r.scrolling='"no"';r.allowfullscreen='"true"';r.onload='"'+bd+'"';for(var ja,hc=a.document,S=r.id,Gd=0;!S||hc.getElementById(S);)S="aswift_"+Gd++;r.id=S;r.name=S;var ic=k.google_ad_width,jc=k.google_ad_height,Sa=V.A,kc=Sa.i,lc=Sa.j,mc=k.google_active_plles=k.google_active_plles||[];Hb(Lb(a),kc)?mc.push(kc):
Hb(Lb(a),lc)&&mc.push(lc);fd=Hb(Lb(a),Sa.j);var ka=["<iframe"],la;for(la in r)r.hasOwnProperty(la)&&Gb(ka,la+"="+r[la]);var Ta="left:0;position:absolute;top:0;";fd&&(Ta=Ta+"width:"+ic+"px;height:"+jc+"px;");ka.push('style="'+Ta+'"');ka.push("></iframe>");var nc=r.id,oc="border:none;height:"+jc+"px;margin:0;padding:0;position:relative;visibility:visible;width:"+ic+"px;background-color:transparent";hc.write(['<ins id="',nc+"_expand",'" style="display:inline-table;',oc,'"><ins id="',nc+"_anchor",'" style="display:block;',
oc,'">',ka.join(" "),"</ins></ins>"].join(""));ja=r.id;wd(a,k);var Hd=Yc(k),L=null,Ua=J(["C","E"],za);if("E"==Ua){a:{try{if(window.JSON&&window.JSON.stringify&&window.encodeURIComponent){var Va=encodeURIComponent(window.JSON.stringify(k)),Wa;if(Pc)Wa=n.btoa(Va);else{for(var C=[],pc=0,Xa=0;Xa<Va.length;Xa++){for(var T=Va.charCodeAt(Xa);255<T;)C[pc++]=T&255,T>>=8;C[pc++]=T}if(!Oc){Oc={};for(var ma=0;65>ma;ma++)Oc[ma]="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".charAt(ma)}for(var na=
Oc,qc=[],D=0;D<C.length;D+=3){var rc=C[D],sc=D+1<C.length,tc=sc?C[D+1]:0,uc=D+2<C.length,vc=uc?C[D+2]:0,Id=rc>>2,Jd=(rc&3)<<4|tc>>4,wc=(tc&15)<<2|vc>>6,xc=vc&63;uc||(xc=64,sc||(wc=64));qc.push(na[Id],na[Jd],na[wc],na[xc])}Wa=qc.join("")}L=Wa;break a}Ab(Sb,"sblob",{json:window.JSON?1:0,eURI:window.encodeURIComponent?1:0},!0,void 0,void 0)}catch(dc){U.o("sblob",dc,void 0,void 0)}L=""}L||(L="{X}")}else"C"==Ua&&(L="{C}");var Kd=vd(k.google_ad_client),yc=(new Date).getTime(),Ya=a.google_async_for_oa_experiment;
Ya&&(a.google_async_for_oa_experiment=void 0);var zc=a.google_always_use_delayed_impressions_experiment,Ld=["<!doctype html><html><body>",Kd,"<",cc,">",Hd,"google_show_ads_impl=true;google_unique_id=",Jb(a),';google_async_iframe_id="',ja,'";google_start_time=',u,";",Ua?'google_pub_vars = "'+L+'";':"",La?'google_pubvars_reuse_experiment_result = "'+La+'";':"",Ya?'google_async_for_oa_experiment="'+Ya+'";':"",zc?'google_always_use_delayed_impressions_experiment="'+zc+'";':"","google_bpp=",yc>u?yc-u:
1,";google_async_rrc=0;google_iframe_start_time=new Date().getTime();</",cc,">",sd(),"</body></html>"].join("");(a.document.getElementById(ja)?pd:qd)(td(a,ja,Ld,!0))}}});}).call(this);
