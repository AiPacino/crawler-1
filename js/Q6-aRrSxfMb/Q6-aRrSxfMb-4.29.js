/*!CK:4216733003!*//*1430308181,*/

if (self.CavalryLogger) { CavalryLogger.start_js(["r+h1D"]); }

__d("PubContentTrendingUnitEllipsis",["DOM","DOMDimensions","concatMap","createArrayFromMixed","getElementText"],function(a,b,c,d,e,f,g,h,i,j,k){var l,m={add:function(p,q,r){r=r||p;g.scry(p,'br').forEach(g.remove);var s=h.getElementDimensions(r).height;if(s<=q)return p;var t,u='...',v=o(p),w=v.length-1,x=k(v[w]);while(w>=0&&s>q){t=Math.max(x.lastIndexOf(' '),x.lastIndexOf('\n'));if(t===-1)t=x.length-u.length-1;if(t<=0){n(v[w],'');w--;x=k(v[w]);}else{x=x.substr(0,t).trimRight()+u;n(v[w],x);}s=h.getElementDimensions(r).height-1;}}};function n(p,q){l=l||(p.textContent!=null?'textContent':'innerText');p[l]=q;}function o(p){if(g.isTextNode(p))return [p];return i(o,j(p.childNodes));}e.exports=m;},null);