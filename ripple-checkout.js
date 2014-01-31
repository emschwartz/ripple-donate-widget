
function RippleCheckout(opts) {

  /* Include bignumber.js */
  /* bignumber.js v1.3.0 https://github.com/MikeMcl/bignumber.js/LICENCE */(function(n){"use strict";function t(n,i){var c,l,a,b,w,p,s=this;if(!(s instanceof t))return new t(n,i);if(n instanceof t)if(u=0,i!==c)n+="";else{s.s=n.s;s.e=n.e;s.c=(n=n.c)?n.slice():n;return}if(typeof n!="string"&&(n=(a=typeof n=="number"||Object.prototype.toString.call(n)=="[object Number]")&&n===0&&1/n<0?"-0":n+""),p=n,i===c&&g.test(n))s.s=n.charAt(0)=="-"?(n=n.slice(1),-1):1;else{if(i==10)return k(n,e,r);if(n=rt.call(n).replace(/^\+(?!-)/,""),s.s=n.charAt(0)=="-"?(n=n.replace(/^-(?!-)/,""),-1):1,i!=null?i!=(i|0)&&y||(o=!(i>=2&&i<65))?(f(i,2),w=g.test(n)):(b="["+d.slice(0,i=i|0)+"]+",n=n.replace(/\.$/,"").replace(/^\./,"0."),(w=new RegExp("^"+b+"(?:\\."+b+")?$",i<37?"i":"").test(n))?(a&&(n.replace(/^0\.0*|\./,"").length>15&&f(p,0),a=!a),n=tt(n,10,i,s.s)):n!="Infinity"&&n!="NaN"&&(f(p,1,i),n="NaN")):w=g.test(n),!w){s.c=s.e=null;n!="Infinity"&&(n!="NaN"&&f(p,3),s.s=null);u=0;return}}for((c=n.indexOf("."))>-1&&(n=n.replace(".","")),(l=n.search(/e/i))>0?(c<0&&(c=l),c+=+n.slice(l+1),n=n.substring(0,l)):c<0&&(c=n.length),l=0;n.charAt(l)=="0";l++);if(i=n.length,a&&i>15&&n.slice(l).length>15&&f(p,0),u=0,(c-=l+1)>h)s.c=s.e=null;else if(l==i||c<v)s.c=[s.e=0];else{for(;n.charAt(--i)=="0";);for(s.e=c,s.c=[],c=0;l<=i;s.c[c++]=+n.charAt(l++));}}function f(n,t,i,r,f,e){if(y){var c,s=["new BigNumber","cmp","div","eq","gt","gte","lt","lte","minus","mod","plus","times","toFr"][u?u<0?-u:u:1/u<0?1:0]+"()",h=o?" out of range":" not a"+(f?" non-zero":"n")+" integer";h=([s+" number type has more than 15 significant digits",s+" not a base "+i+" number",s+" base"+h,s+" not a number"][t]||i+"() "+t+(e?" not a boolean or binary digit":h+(r?" or not ["+(o?" negative, positive":" integer, integer")+" ]":"")))+": "+n;o=u=0;c=new Error(h);c.name="BigNumber Error";throw c;}}function tt(n,i,r,u){function h(n,t){var u,e=0,s=n.length,o,f=[0];for(t=t||r;e<s;e++){for(o=f.length,u=0;u<o;f[u]*=t,u++);for(f[0]+=d.indexOf(n.charAt(e)),u=0;u<f.length;u++)f[u]>i-1&&(f[u+1]==null&&(f[u+1]=0),f[u+1]+=f[u]/i^0,f[u]%=i)}return f.reverse()}function o(n){for(var t=0,r=n.length,i="";t<r;i+=d.charAt(n[t++]));return i}var e,c,l,f,s,a;if(r<37&&(n=n.toLowerCase()),(e=n.indexOf("."))>-1)if(e=n.length-e-1,c=h(new t(r).pow(e).toF(),10),f=n.split("."),l=h(f[1]),f=h(f[0]),a=it(l,c,l.length-c.length,u,i,f[f.length-1]&1),s=a.c,e=a.e){for(;++e;s.unshift(0));n=o(f)+"."+o(s)}else s[0]?f[e=f.length-1]<i-1?(++f[e],n=o(f)):n=new t(o(f),i).plus(p).toS(i):n=o(f);else n=o(h(n));return n}function it(n,i,r,u,f,o){var y,d,k,w,a,rt=i.slice(),g=y=i.length,ut=n.length,s=n.slice(0,y),c=s.length,l=new t(p),nt=l.c=[],tt=0,it=e+(l.e=r)+1;for(l.s=u,u=it<0?0:it;c++<y;s.push(0));rt.unshift(0);do{for(k=0;k<f;k++){if(y!=(c=s.length))w=y>c?1:-1;else for(a=-1,w=0;++a<y;)if(i[a]!=s[a]){w=i[a]>s[a]?1:-1;break}if(w<0){for(d=c==y?i:rt;c;){if(s[--c]<d[c]){for(a=c;a&&!s[--a];s[a]=f-1);--s[a];s[c]+=f}s[c]-=d[c]}for(;!s[0];s.shift());}else break}nt[tt++]=w?k:++k;s[0]&&w?s[c]=n[g]||0:s=[n[g]]}while((g++<ut||s[0]!=null)&&u--);return nt[0]||tt==1||(--l.e,nt.shift()),tt>it&&b(l,e,f,o,s[0]!=null),l.e>h?l.c=l.e=null:l.e<v&&(l.c=[l.e=0]),l}function w(n,i,r){var u=i-(n=new t(n)).e,f=n.c;if(!f)return n.toS();for(f.length>++i&&b(n,u,10),u=f[0]==0?u+1:r?i:n.e+u+1;f.length<u;f.push(0));return u=n.e,r==1||r==2&&(--i<u||u<=c)?(n.s<0&&f[0]?"-":"")+(f.length>1?(f.splice(1,0,"."),f.join("")):f[0])+(u<0?"e":"e+")+u:n.toS()}function b(n,t,i,u,f){var e=n.c,s=n.s<0,c=i/2,o=n.e+t+1,h=e[o],l=f||o<0||e[o+1]!=null;if(f=r<4?(h!=null||l)&&(r==0||r==2&&!s||r==3&&s):h>c||h==c&&(r==4||l||r==6&&(e[o-1]&1||!t&&u)||r==7&&!s||r==8&&s),o<1||!e[0])return e.length=0,e.push(0),f?(e[0]=1,n.e=-t):n.e=0,n;if(e.length=o--,f)for(--i;++e[o]>i;)e[o]=0,o--||(++n.e,e.unshift(1));for(o=e.length;!e[--o];e.pop());return n}function k(n,i,u){var f=r;return r=u,n=new t(n),n.c&&b(n,i,10),r=f,n}var s=1e9,nt=1e6,e=20,r=4,c=-7,a=21,v=-s,h=s,y=!0,l=parseInt,i=t.prototype,d="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ$_",o,u=0,g=/^-?(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i,rt=String.prototype.trim||function(){return this.replace(/^\s+|\s+$/g,"")},p=t(1);t.ROUND_UP=0;t.ROUND_DOWN=1;t.ROUND_CEIL=2;t.ROUND_FLOOR=3;t.ROUND_HALF_UP=4;t.ROUND_HALF_DOWN=5;t.ROUND_HALF_EVEN=6;t.ROUND_HALF_CEIL=7;t.ROUND_HALF_FLOOR=8;t.config=function(){var n,t,g=0,p={},d=arguments,k=d[0],w="config",i=function(n,t,i){return!((o=n<t||n>i)||l(n)!=n&&n!==0)},b=k&&typeof k=="object"?function(){if(k.hasOwnProperty(t))return(n=k[t])!=null}:function(){if(d.length>g)return(n=d[g++])!=null};return b(t="DECIMAL_PLACES")&&(i(n,0,s)?e=n|0:f(n,t,w)),p[t]=e,b(t="ROUNDING_MODE")&&(i(n,0,8)?r=n|0:f(n,t,w)),p[t]=r,b(t="EXPONENTIAL_AT")&&(i(n,-s,s)?c=-(a=~~(n<0?-n:+n)):!o&&n&&i(n[0],-s,0)&&i(n[1],0,s)?(c=~~n[0],a=~~n[1]):f(n,t,w,1)),p[t]=[c,a],b(t="RANGE")&&(i(n,-s,s)&&~~n?v=-(h=~~(n<0?-n:+n)):!o&&n&&i(n[0],-s,-1)&&i(n[1],1,s)?(v=~~n[0],h=~~n[1]):f(n,t,w,1,1)),p[t]=[v,h],b(t="ERRORS")&&(n===!!n||n===1||n===0?l=(o=u=0,y=!!n)?parseInt:parseFloat:f(n,t,w,0,0,1)),p[t]=y,p};i.abs=i.absoluteValue=function(){var n=new t(this);return n.s<0&&(n.s=1),n};i.ceil=function(){return k(this,0,2)};i.comparedTo=i.cmp=function(n,i){var f,l=this,e=l.c,o=(u=-u,n=new t(n,i)).c,r=l.s,c=n.s,s=l.e,h=n.e;if(!r||!c)return null;if(f=e&&!e[0],i=o&&!o[0],f||i)return f?i?0:-c:r;if(r!=c)return r;if(f=r<0,i=s==h,!e||!o)return i?0:!e^f?1:-1;if(!i)return s>h^f?1:-1;for(r=-1,c=(s=e.length)<(h=o.length)?s:h;++r<c;)if(e[r]!=o[r])return e[r]>o[r]^f?1:-1;return s==h?0:s>h^f?1:-1};i.dividedBy=i.div=function(n,i){var r=this.c,o=this.e,s=this.s,f=(u=2,n=new t(n,i)).c,h=n.e,c=n.s,e=s==c?1:-1;return!o&&(!r||!r[0])||!h&&(!f||!f[0])?new t(!s||!c||(r?f&&r[0]==f[0]:!f)?NaN:r&&r[0]==0||!f?e*0:e/0):it(r,f,o-h,e,10)};i.equals=i.eq=function(n,t){return u=3,this.cmp(n,t)===0};i.floor=function(){return k(this,0,3)};i.greaterThan=i.gt=function(n,t){return u=4,this.cmp(n,t)>0};i.greaterThanOrEqualTo=i.gte=function(n,t){return u=5,(t=this.cmp(n,t))==1||t===0};i.isFinite=i.isF=function(){return!!this.c};i.isNaN=function(){return!this.s};i.isNegative=i.isNeg=function(){return this.s<0};i.isZero=i.isZ=function(){return!!this.c&&this.c[0]==0};i.lessThan=i.lt=function(n,t){return u=6,this.cmp(n,t)<0};i.lessThanOrEqualTo=i.lte=function(n,t){return u=7,(t=this.cmp(n,t))==-1||t===0};i.minus=function(n,i){var h,l,a,y,c=this,o=c.s;if(i=(u=8,n=new t(n,i)).s,!o||!i)return new t(NaN);if(o!=i)return n.s=-i,c.plus(n);var f=c.c,p=c.e,e=n.c,s=n.e;if(!p||!s){if(!f||!e)return f?(n.s=-i,n):new t(e?c:NaN);if(!f[0]||!e[0])return e[0]?(n.s=-i,n):new t(f[0]?c:r==3?-0:0)}if(f=f.slice(),o=p-s){for(h=(y=o<0)?(o=-o,f):(s=p,e),h.reverse(),i=o;i--;h.push(0));h.reverse()}else for(a=((y=f.length<e.length)?f:e).length,o=i=0;i<a;i++)if(f[i]!=e[i]){y=f[i]<e[i];break}if(y&&(h=f,f=e,e=h,n.s=-n.s),(i=-((a=f.length)-e.length))>0)for(;i--;f[a++]=0);for(i=e.length;i>o;){if(f[--i]<e[i]){for(l=i;l&&!f[--l];f[l]=9);--f[l];f[i]+=10}f[i]-=e[i]}for(;f[--a]==0;f.pop());for(;f[0]==0;f.shift(),--s);return(s<v||!f[0])&&(f[0]||(n.s=r==3?-1:1),f=[s=0]),n.c=f,n.e=s,n};i.modulo=i.mod=function(n,i){var f=this,h=f.c,c=(u=9,n=new t(n,i)).c,o=f.s,s=n.s;return(i=!o||!s||c&&!c[0],i||h&&!h[0])?new t(i?NaN:f):(f.s=n.s=1,i=n.cmp(f)==1,f.s=o,n.s=s,i?new t(f):(o=e,s=r,e=0,r=1,f=f.div(n),e=o,r=s,this.minus(f.times(n))))};i.negated=i.neg=function(){var n=new t(this);return n.s=-n.s||null,n};i.plus=function(n,i){var o,c=this,f=c.s;if(i=(u=10,n=new t(n,i)).s,!f||!i)return new t(NaN);if(f!=i)return n.s=-i,c.minus(n);var l=c.e,r=c.c,s=n.e,e=n.c;if(!l||!s){if(!r||!e)return new t(f/0);if(!r[0]||!e[0])return e[0]?n:new t(r[0]?c:f*0)}if(r=r.slice(),f=l-s){for(o=f>0?(s=l,e):(f=-f,r),o.reverse();f--;o.push(0));o.reverse()}for(r.length-e.length<0&&(o=e,e=r,r=o),f=e.length,i=0;f;i=(r[--f]=r[f]+e[f]+i)/10^0,r[f]%=10);for(i&&(r.unshift(i),++s>h&&(r=s=null)),f=r.length;r[--f]==0;r.pop());return n.c=r,n.e=s,n};i.toPower=i.pow=function(n){var i=n*0==0?n|0:n,r=new t(this),u=new t(p);if(((o=n<-nt||n>nt)&&(i=n/0)||l(n)!=n&&n!==0&&!(i=NaN))&&!f(n,"exponent","pow")||!i)return new t(Math.pow(r.toS(),i));for(i=i<0?-i:i;;){if(i&1&&(u=u.times(r)),i>>=1,!i)break;r=r.times(r)}return n<0?p.div(u):u};i.round=function(n,t){return n=n==null||((o=n<0||n>s)||l(n)!=n)&&!f(n,"decimal places","round")?0:n|0,t=t==null||((o=t<0||t>8)||l(t)!=t&&t!==0)&&!f(t,"mode","round")?r:t|0,k(this,n,t)};i.squareRoot=i.sqrt=function(){var o,u,c,s,h=this,n=h.c,i=h.s,f=h.e,l=e,a=r,v=new t("0.5");if(i!==1||!n||!n[0])return new t(!i||i<0&&(!n||n[0])?NaN:n?h:1/0);for(i=Math.sqrt(h.toS()),r=1,i==0||i==1/0?(o=n.join(""),o.length+f&1||(o+="0"),u=new t(Math.sqrt(o)+""),u.c||(u.c=[1]),u.e=((f+1)/2|0)-(f<0||f&1)):u=new t(o=i.toString()),c=u.e,i=c+(e+=4),i<3&&(i=0),f=i;;)if(s=u,u=v.times(s.plus(h.div(s))),s.c.slice(0,i).join("")===u.c.slice(0,i).join(""))if(n=u.c,i=i-(o&&u.e<c),n[i]==9&&n[i-1]==9&&n[i-2]==9&&(n[i-3]==9||o&&n[i-3]==4)){if(o&&n[i-3]==9&&(s=u.round(l,0),s.times(s).eq(h)))return r=a,e=l,s;e+=4;i+=4;o=""}else{if(!n[f]&&!n[f-1]&&!n[f-2]&&(!n[f-3]||n[f-3]==5)&&(n.length>f-2&&(n.length=f-2),!u.times(u).eq(h))){while(n.length<f-3)n.push(0);n[f-3]++}return r=a,b(u,e=l,10),u}};i.times=function(n,i){var f,l=this,e=l.c,o=(u=11,n=new t(n,i)).c,s=l.e,r=n.e,c=l.s;if(n.s=c==(i=n.s)?1:-1,!s&&(!e||!e[0])||!r&&(!o||!o[0]))return new t(!c||!i||e&&!e[0]&&!o||o&&!o[0]&&!e?NaN:!e||!o?n.s/0:n.s*0);for(n.e=s+r,(c=e.length)<(i=o.length)&&(f=e,e=o,o=f,r=c,c=i,i=r),r=c+i,f=[];r--;f.push(0));for(s=i-1;s>-1;s--){for(i=0,r=c+s;r>s;i=f[r]+o[s]*e[r-s-1]+i,f[r--]=i%10|0,i=i/10|0);i&&(f[r]=(f[r]+i)%10)}for(i&&++n.e,f[0]||f.shift(),r=f.length;!f[--r];f.pop());return n.c=n.e>h?n.e=null:n.e<v?[n.e=0]:f,n};i.toExponential=i.toE=function(n){return w(this,(n==null||((o=n<0||n>s)||l(n)!=n&&n!==0)&&!f(n,"decimal places","toE"))&&this.c?this.c.length-1:n|0,1)};i.toFixed=i.toF=function(n){var u,t,r,i=this;return n==null||((o=n<0||n>s)||l(n)!=n&&n!==0)&&!f(n,"decimal places","toF")||(r=i.e+(n|0)),u=c,n=a,c=-(a=1/0),r==t?t=i.toS():(t=w(i,r),i.s<0&&i.c&&(i.c[0]?t.indexOf("-")<0&&(t="-"+t):t=t.replace(/^-/,""))),c=u,a=n,t};i.toFraction=i.toFr=function(n){var k,nt,c,l,i,s,d,a=l=new t(p),v=c=new t("0"),w=this,g=w.c,tt=h,it=e,rt=r,b=new t(p);if(!g)return w.toS();for(d=b.e=g.length-w.e-1,(n==null||(!(u=12,s=new t(n)).s||(o=s.cmp(a)<0||!s.c)||y&&s.e<s.c.length-1)&&!f(n,"max denominator","toFr")||(n=s).cmp(b)>0)&&(n=d>0?b:a),h=1/0,s=new t(g.join("")),e=0,r=1;;){if(k=s.div(b),i=l.plus(k.times(v)),i.cmp(n)==1)break;l=v;v=i;a=c.plus(k.times(i=a));c=i;b=s.minus(k.times(i=b));s=i}return i=n.minus(l).div(v),c=c.plus(i.times(a)),l=l.plus(i.times(v)),c.s=a.s=w.s,e=d*2,r=rt,nt=a.div(v).minus(w).abs().cmp(c.div(l).minus(w).abs())<1?[a.toS(),v.toS()]:[c.toS(),l.toS()],h=tt,e=it,nt};i.toPrecision=i.toP=function(n){return n==null||((o=n<1||n>s)||l(n)!=n)&&!f(n,"precision","toP")?this.toS():w(this,--n|0,2)};i.toString=i.toS=function(n){var u,t,e,r=this,i=r.e;if(i===null)t=r.s?"Infinity":"NaN";else{if(n===u&&(i<=c||i>=a))return w(r,r.c.length-1,1);if(t=r.c.join(""),i<0){for(;++i;t="0"+t);t="0."+t}else if(e=t.length,i>0)if(++i>e)for(i-=e;i--;t+="0");else i<e&&(t=t.slice(0,i)+"."+t.slice(i));else if(u=t.charAt(0),e>1)t=u+"."+t.slice(1);else if(u=="0")return u;if(n!=null)if((o=!(n>=2&&n<65))||n!=(n|0)&&y)f(n,"base","toS");else if(t=tt(t,n|0,10,r.s),t=="0")return t}return r.s<0?"-"+t:t};i.valueOf=function(){return this.toS()};typeof module!="undefined"&&module.exports?module.exports=t:typeof define=="function"&&define.amd?define(function(){return t}):n.BigNumber=t})(this);

  /* Base64 Encoded Images */
  var encoded_images = {
    pay: {
      button: 'iVBORw0KGgoAAAANSUhEUgAAAMgAAAAoCAYAAAC7HLUcAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAABNhJREFUeNrsnX9MW1UUx09IB5XR0emGGz+t0PBrYWVsc0hq1TFH6JaMKG6JOo3OuMliIn+YiXFGjUankcUMdSGLZtFtEXVziAwFFZChYgWZUGpHsAEGI2iQH5MfyyLnTh4tbR9I29nI95M0vHdvS5v73odzzr2PPkVq3oc6ZUBA/eiVK0oCAAgmnRiddCJdwXK8k2dQpsQvw6gA8A/Nln7l7qLq+gCOHJADAEfYCXYjAEMBgHsgCAAQBAAIAgAEAQCCAOAnKDAEvsHWPUSfVZ8X24uvC6Q71kdTTIQKAwNBwEcVVnq5tMmh7WjNr/R41iq6Z7MWA4QUa+FSZ+p2koMZmLgs2jmyAAiyYPn4a6ts//HyVgwSUqyFy8jYhGx/x8VBl+0nytroQPk5p/ZtyZH0wJYk0kSFYnAhyP+fsNBgt30xIUo6+cpWab+ptY+KPz1H+UU19G7BXaReEoQBRIrlvwwMjVPRsUa6b385rdlbQo+99KUoyO1J0chf+LlaGzbn99MlhVHR0xvFdkmFBQcAEcS/5ch7rYrMfwxLbQ09A9QwWXj/bO2jF/dmiLYthjg6cva8y9+xbqV6XrNY+sSV1NM/4hBZjlW0UWX7RaltjyGeHs1NEdtPFdaQNlIt7dsj1wcQQebNB6UtDnLYU9Z2QUQWlqjg8LdO/VGLg+iRW+Po8DObvPJZGlp6xUn+06Fc8SjcmU4n6tup7JsO0W9IjaLaXy44Sz44JqTK3RyPA4oI4l3OtvXK9nPUmBk5ntiYRNsytaRWBXr03rXmHspOi5H2Z/71N6yPJKO5lyy238lIGjLerqE3TjeJSMNp2hScpmXG3ohaBhHE+7iLHnJ4Kkf1D12087kzpApaNGtKFL4shIYvTc+gGVdHiUjjINpkVOHoAhBBvA7XD1xzyJF4fYiDSKcqrfRQTvKc38M2PCqK/ymWBirEiZ7/4FqH53FkOF3dTqdauhyFTI6UttMSV9DBTxolsTo6/6Tuob9EdAEQxOtsWnuTKMjdUbBVJwrw90620JtVVxcD+Sc/uAbJ2RA7qywzp3ldwXI8/Fa1kIFrD06vmOKSZodCnttZEI5CvF35nY12pMfiQCLF8g188hsTwmXlYLTRaqf+zpExIcqzh+o8/hw8e3X/Og3t3zMthzu4bjGZr6ZZn5tslLkhBgcSEcR38FRulqmbahu7xIo4r3nwtK79Vbpn6n9z+3qe7eLXZ6RFzPszjIxOkCrYua5hAVJjHNdgWIhdhV/Rna3RFB4ajNV4COJ7+OSWO8Hr2vvkUyRLn0eC6OKWS9GAT3iuLV5//0caHL/s9FzuT1i+hJ4/+j1t1+MqYgjiB/BVu76Ei25r1wDd/eoXUhsvEman3yylU/boUyKouMpMWXoU5xDED5g5kzUT/ucpV+wwJojHXDjw5G0u213NUA1dGieDdgXWPlCk+wc5GXFu+9SLFGJt5FrC6ZghDWsfEMRP4Nmse3XRLuU4uFvv8ar6v+GFt+tFcT7bbBdAinVN2bfrFsq2xFKtqVNKq7xxycmco9i+UrHouOoGFeVvX4MDAkH8D/5u1//qO49nW2wESLEAgCAAQBAAIAgAEAQACAIABAFgoQjCd/NstvRjJACwg51gNxR8q1u+myduAw3ANFO3gf5bgAEA5XylWlL14swAAAAASUVORK5CYII=',
      hover: 'iVBORw0KGgoAAAANSUhEUgAAAMgAAAAoCAYAAAC7HLUcAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAABJJJREFUeNrsm3tMU1ccx38zwAyjYVVmAlYq2yroUB4Ck/qaxqEOTXxGoyYm4h/b6hZnlpG4aOKM2dSMbQnJ/lh0qy5RZMoSIAqIkRBBBXkLdJ2SlkE7EBErbrAlm7+TcNfnBWmrzfh+kpvee04fN+ecT37nd85tUJLu3A9EtJMAAM7oJ0EOADyycxLaAADPQBAAIAgAEAQACAIABAEAggAQ+AShCfxD9Esv0tsJ0eL80R/DVP2LlcyDQ2gYCALWxEXRZ3sWOpQN2IbpS30NFbV3o4EwxZq4pEYqXeRgwhUhopwjC4AgE5YNSzWy9esXvIZGwhRr4qIIDZat16iVbsvXvaGig++lu5SfLW6nvEojmR79icaFIP9/LL2DHus6Ogdo49FS6Tp+qoKyMuMpR7eEdn91hfqH/0YDYooVuCiDgyhLqyH9B8uoLncz5e5aKBJye+rbe2S/o9HYM+bfa+mz0UenqsV5ZsIMdAAiSGDL8fW7i2lubIRUpk2OEkdCiZGOFDaIsrJGM+m2Jbr9jqq67nGtYl2+bqKoiDCHyLJlWSxlvhUjleXoa+nHmg5xfnhTChlMfdK1PXJ1AIKMP/lOjXGQw56NKzVk7RukC08G3eFdWpd6c7eNCq/eoRNVRp/cS+KrEWKQH9hTK67Tp0+hI7pFZL3/mC7f+Z0q6jtp28o4FwmUIUFCqpx9DehQCOJblsxXydZz1HCOHEdP3KTSli7q/8u73GHFAjUVXPlPLueBX911n/JLDKRRvSwE4WO/6k0RaXiaNgJP04qvdiCXQQ7iezxFDzm8lYMjw8n3l9KAbWjUKZHl3iApQkOkaxaGI409y1OjRXQBiCA+h/MHzjfkaDbccxApI3465dWbxvwbMTPCRfI/woOHQ2Kgf1thcHgfR4Z30mbS1sw4h3JeEh6h4dde+nhHiiSWOmwyzVSFi+gCIIjPuVTVISvIwdxrIgHfkqSm7Kw0Ucav2ZQmcpAzF9tGlcV5mdcdLMepQ6uEDLrPy8X0itnxJEeyT+RHyjkK8fni2ZF0sqAZHYkpln/gwX++xCgrB3PX+tClPjpKIWT5dG2i1/fBq1ff5TfRsYvNkgSe4Lwl8fVXxPn65RqqbLOgIxFB/Acv5ZbWmkg7J1LsiPOeBy/r2j+lm5Gi9vh5Xu3iz9dY+sd9D2GhwWR7POxSzgLcaHIUgIX4fn8GVbZ0k9liw248BPE/PLjlBvgKrVr28/NiIrwS5FabVYoGPOA5t9i7IYmU4ZNd3sv1je29dGh3Op0uakXnQZDnDz+160846Y5VT6WCL9ZKZbxJWHztLiXPmuby/opbnfTh9mSqMFrRORDk+eO8kuUM/3nKHT/f/k0cY+HAT7XicMbdChVPyS5VYu8DSXqAkF9m8FjHf5rivZFniZiONXWhYyBIYMCrWfqC227l0B0v93pX/Wn4ZPVckZyPttoFMMV6pnxT3kpl9WZKj4uUplW+eORkrJzPzhCbjg2tPZSTV4cO8YIXknTn/kEzAIApFgAQBAAIAgAEAQCCAABBAIAgAEAQACaeIHo0AwBu0f8rwAAV7L0L4I2ZagAAAABJRU5ErkJggg==',
      clicked: 'iVBORw0KGgoAAAANSUhEUgAAAMgAAAAoCAYAAAC7HLUcAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAABJZJREFUeNrsm3tMU1ccx38acColoC48i0qVTYQOWWEydY4N43szZlnmppEpyeIS+UMzQ5xZoibGmJi4uC1q1AT+2BKHyeIrvgU7ZYgYUi1WgRZYsaNVhI2Cj5q4/o56w+3jwmirzfh+khvuPYc+cu755Pf7nXM7TLv6QCkRFRIAwJOy4ZADAL8UDscYAOAfCAIABAEAggAAQQCAIABAEADCnwgMQWhIjnqN8jOSxXnvQxfVmB10p+cRBgaCgLlpCfTNlzmythU9LtpXbqAzje0YIKRYQ5fshFgvOZjoqEjRzpEFQJAhy8K8VOV+3QQMElKsoYtqlPKQapJjfLYvSE+idSve9mo/esFMR640k9X5EIMLQf7/OO4/8NtnbXdS0Q+V0vWUcdG0vOBN2rwqj9bvu0R/P36CAUSKFb7ERkbQ8nc0tLtoJp3Ztpi2f54rCvK+GM0diu9Rb7k34M+71dFN3/1a+6zwf74iBhBBwlaOrSun0xTNGKlNlxkvjgx9C+06bRRtlfV3qHDJVJ/vcc1oH9Qq1u/X2ih+7GhZZFkyQ0MFeSlS2/7DN6i8rlWcl3yURZa2Lum6L0p9AIIMmkXZ42VyyOqH2RPJ0dlLJ+r+pJJl3itYNkcPnf2jlX6usQTlu2jHjxWTfMcmg7jOTRpDJYW55OjqpYvNd6naaKOl+ZO9JIgZESGk2rulHjcUggSX6dpExX6OGp6RY88hA1WY/qIuV2C1w3s6NZ261Cxde078q7ZOOn7RQqmJMUIQPoqXZYtIw2naCzhNO19tRS2DGiT4+IseSgQqB0eG71e9S93OR/2mRHZ3BFONipSuWRiONH2ZOS1JRBeACBJ0uH7gekOxqLZ0ykT6ID2RfrtuHfBnpCSoRPH/gn+cj8VEL61qksvqjgxzpqnp4w8nydp5SVhaDGjpoDWfZElipahGkjohWkQXAEGCTkWtVVGQnaW1ogBf+lYKff1Zlmjjv3xwDXKkoqlfWTyXeX1GMrccu9e/L2TY9NNlkV4xn2ZPkBXy3L7meRTi87y0eDp06jZuJFKs0MCT/6S+RVEOpsXR7dWfFBclRFk3LzPg78GrV7+cuEU/njdJcviD65aMiePE+fxZqVTdaMeNRAQJHbyUW2loo5w34sSOOO958LJu36d087PUfl/Pq138+rr2rkF/B64zLA9cXu0sQN1NuQAsxK7i2VR92042uxO78RAk9PDkVprgs3TKG3pT3YVzIIJcb7wrRQOe8FxbfLUwk2JUI7xTNne/yXyfNnyho8PnGnDzIMirh5/aDSVcdGvUsXRw4xypjTcJz11tJa3mda//r7pho6JJmVRlduDmQJBXj+dKlif84ylfnDTZxDEQdhwziMMTXytUqpGRVFmDvQ8U6WHCcb3Zb193j0vsjbxMOB27YsKPtCBImMCrWeWnG3zK8e2eywHvqv8X1haki+K8v9UugBTrpbJf30B6d+6fkxYnpVXBeORkoBwszhebjjebOmjvUSNuSAAM064+8BTDAABSLAAgCAAQBAAIAgAEAQCCAABBAIAgAAw9QcowDAD4pOxfAQYAgXW9TGwWjwgAAAAASUVORK5CYII=',
    },
    donate: {
      button: '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',
      hover: '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',
      clicked: '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'
    }
  };


  /* Parse options */

  var dst_address = opts.dst_address,
    server_url = opts.server_url || 'wss://s_west.ripple.com',
    socket;

    if (!dst_address) {
      throw(new Error('dst_address is required'));
    }

    socket = connectToWebSocket({
      server_url: server_url,
      dst_address: dst_address
    });

  return {

    addButton: function(opts) {

      if (!socket) {
        return;
      }

      var dst_amount = opts.dst_amount,
        dst_tag = opts.dst_tag,
        button_opts = {
          dst_address: dst_address,
          dst_tag: dst_tag,
          dst_amount: dst_amount
        },
        button_type = opts.button_type || 'pay',
        callback = opts.callback,
        url = generatePaymentUrl(button_opts);

      if (!dst_amount) {
        throw(new Error('dst_amount is required'));
      }

      if (!dst_tag) {
        throw(new Error('dst_tag is required'));
      }

      // Setup listener to watch for transaction confirmation
      setTransactionListener(socket, button_opts, callback);

      // Create DOM elements
      var image = document.createElement('img'),
        image_src_base = 'data:image/png;base64,';
      image.src = image_src_base + encoded_images[button_type].button;

      var button = document.createElement('a');
      button.appendChild(image);
      button.setAttribute('href', url);
      button.setAttribute('target', '_blank');
      button.onmouseover = function(){
        image.src = './img/' + button_type + '/hover.png';
      };
      button.onmouseout = function(){
        image.src = './img/' + button_type + '/button.png';
      };
      button.onmousedown = function(){
        image.src = './img/' + button_type + '/clicked.png';
      };

      // Insert DOM elements
      var button_div = document.getElementById('ripple-checkout');
      button_div.insertBefore(button, button_div.lastChild);
    }

  };

  /* Internal Functions */

  function connectToWebSocket(opts) {
    if ('WebSocket' in window) {

      var url = opts.server_url,
        dst_address = opts.dst_address;

      /* Subscribe to ripple transaction feed */
      var socket = new WebSocket(url),
        command = JSON.stringify({
          "command": "subscribe",
          "accounts": [dst_address],
        });

      socket.onopen = function(event) {
        console.log('WebSocket open');
        socket.send(command);
      };

      socket.onclose = function() {
        console.log('WebSocket closed');
      };

      return socket;

    } else {
      throw (new Error('ripple-checkout requires WebSockets but they are not supported by this browser'));
    }
  }


  function disconnectFromWebSocket(socket) {
    socket.close();
  }
  

  function generatePaymentUrl(opts) {

    var dst_tag = opts.dst_tag,
      dst_address = opts.dst_address,
      dst_amount = opts.dst_amount,
      amount_str;

    if (typeof dst_amount === 'string') {
      amount_str = dst_amount;
    } else {
      amount_str = dst_amount.value + '/' + dst_amount.currency + (dst_amount.issuer ? '/' + dst_amount.issuer : '');
    }

    var url = 'https://ripple.com/client/#/login?tab=send';
    url += '&to=' + dst_address;
    url += '&amount=' + amount_str;
    url += '&dt=' + dst_tag;

    return url;
  }


  function setTransactionListener(socket, opts, callback) {

    socket.onmessage = function(message){

      try {
        var parsed = JSON.parse(message.data),
          transaction = parsed.transaction;
      } catch (err) {
        return;
      }

      if (parsed.engine_result !== 'tesSUCCESS'){
        return;
      }

      transaction.meta = parsed.meta;

      if (transaction.TransactionType !== 'Payment') {
        return;
      }

      if (transaction.Destination !== opts.dst_address) {
        return;
      }

      if (transaction.DestinationTag !== opts.dst_tag) {
        return;
      }

      var balanceChanges = parseBalanceChanges(transaction, opts.dst_address);

      for (var b = 0; b < balanceChanges.length; b++) {
        if (balanceChanges[b].currency !== opts.dst_amount.currency) {
          continue;
        }

        if (opts.dst_amount.issuer && balanceChanges[b].issuer !== opts.dst_amount.issuer) {
          continue;
        }

        if (balanceChanges[b].value < opts.dst_amount.value) {
          continue;
        }

        callback(null, {
          src_address: transaction.Account,
          dst_address: transaction.Destination,
          dst_amount: balanceChanges[b],
          dst_tag: transaction.DestinationTag,
          tx_hash: transaction.hash
        });
        return;
      }

      callback(new Error('Insufficient amount received.'));

    };

  }

  function parseBalanceChanges (tx, address) {

    if (typeof tx !== 'object') {
      throw(new Error('Invalid parameter: tx. Must be a Ripple transaction object'));
    }

    if (typeof address !== 'string') {
      throw(new Error('Invalid parameter: address. Must supply a Ripple address to parse balance changes for'));
    }

    var addressBalanceChanges = [];

    tx.meta.AffectedNodes.forEach(function(affNode){

      var node = affNode.CreatedNode || affNode.ModifiedNode || affNode.DeletedNode;

      // Look for XRP balance change in AccountRoot node
      if (node.LedgerEntryType === 'AccountRoot') {

        var xrpBalChange = parseAccountRootBalanceChange(node, address);
        if (xrpBalChange) {
          addressBalanceChanges.push(xrpBalChange);
        }

      }

      // Look for trustline balance change in RippleState node
      if (node.LedgerEntryType === 'RippleState') {

        var currBalChange = parseTrustlineBalanceChange(node, address);
        if (currBalChange) {
          addressBalanceChanges.push(currBalChange);
        }

      }

    });

    return addressBalanceChanges;

  }

  function parseAccountRootBalanceChange (node, address) {

    if (node.NewFields) {

      if (node.NewFields.Account === address) {
        return {
          value: dropsToXrp(node.NewFields.Balance),
          currency: 'XRP',
          issuer: ''
        };
      }

    } else if (node.FinalFields) {

      if (node.FinalFields.Account === address) {

        var finalBal = dropsToXrp(node.FinalFields.Balance),
          prevBal = dropsToXrp(node.PreviousFields.Balance),
          balChange = BigNumber(finalBal).minus(prevBal).toString();
        
        return {
          value: balChange,
          currency: 'XRP',
          issuer: ''
        };
      }
    }

    return null;
  }

  function parseTrustlineBalanceChange (node, address) {

    var balChange = {
        value: '',
        currency: '',
        issuer: ''
      }, 
      trustHigh,
      trustLow,
      trustBalFinal,
      trustBalPrev;

    if (node.NewFields) {
      trustHigh = node.NewFields.HighLimit;
      trustLow = node.NewFields.LowLimit;
      trustBalFinal = node.NewFields.Balance;
    } else {
      trustHigh = node.FinalFields.HighLimit;
      trustLow = node.FinalFields.LowLimit;
      trustBalFinal = node.FinalFields.Balance; 
    }

    if (node.PreviousFields && node.PreviousFields.Balance) {
      trustBalPrev = node.PreviousFields.Balance;
    } else {
      trustBalPrev = {value: '0'};
    }

    // Set value
    if (trustLow.issuer === address) {
      balChange.value = BigNumber(trustBalFinal.value).minus(trustBalPrev.value).toString();
    } else if (trustHigh.issuer === address) {
      balChange.value = BigNumber(0).minus(BigNumber(trustBalFinal.value).minus(trustBalPrev.value)).toString();
    } else {
      return null;
    }

    // Set currency
    balChange.currency = trustBalFinal.currency;

    // Set issuer
    if ((BigNumber(trustHigh.value).equals(0) && BigNumber(trustLow.value).equals(0)) ||
      (BigNumber(trustHigh.value).greaterThan(0) && BigNumber(trustLow.value).greaterThan(0))) {

      if (BigNumber(trustBalFinal.value).greaterThan(0) || BigNumber(trustBalPrev.value).greaterThan(0)) {
        balChange.issuer = trustLow.issuer;
      } else {
        balChange.issuer = trustHigh.issuer;
      }

    } else if (BigNumber(trustHigh.value).greaterThan(0)) {
      balChange.issuer = trustLow.issuer;
    } else if (BigNumber(trustLow.value).greaterThan(0)) {
      balChange.issuer = trustHigh.issuer;
    }

    return balChange;

  }


  function isRippleAddress(address) {
    return ripple.UInt160.is_valid(address);
  }

  function dropsToXrp(drops) {
    return BigNumber(drops).dividedBy(1000000.0).toString();
  }

  function xrpToDrops(xrp) {
    return BigNumber(xrp).times(1000000.0).toString();
  }

}

