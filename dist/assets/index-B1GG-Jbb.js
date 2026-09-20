(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function e(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=e(r);fetch(r.href,s)}})();const wo="180",$i={ROTATE:0,DOLLY:1,PAN:2},Yi={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},yh=0,Zo=1,Sh=2,vc=1,Eh=2,Ln=3,ei=0,We=1,In=2,Jn=0,xi=1,Kt=2,Jo=3,Qo=4,bh=5,mi=100,Th=101,Ah=102,wh=103,Rh=104,Ch=200,Ph=201,Dh=202,Lh=203,Aa=204,wa=205,Ih=206,Uh=207,Fh=208,Nh=209,Oh=210,Bh=211,zh=212,kh=213,Hh=214,Ra=0,Ca=1,Pa=2,Qi=3,Da=4,La=5,Ia=6,Ua=7,Mc=0,Gh=1,Vh=2,Qn=0,Wh=1,Xh=2,Yh=3,yc=4,qh=5,$h=6,jh=7,Sc=300,tr=301,er=302,Fa=303,Na=304,Us=306,Oa=1e3,_i=1001,Ba=1002,_n=1003,Kh=1004,kr=1005,dn=1006,Ws=1007,jn=1008,On=1009,Ec=1010,bc=1011,yr=1012,Ro=1013,Mi=1014,Un=1015,Dr=1016,Co=1017,Po=1018,Sr=1020,Tc=35902,Ac=35899,wc=1021,Rc=1022,pn=1023,Er=1026,br=1027,Cc=1028,Do=1029,Pc=1030,Lo=1031,Io=1033,vs=33776,Ms=33777,ys=33778,Ss=33779,za=35840,ka=35841,Ha=35842,Ga=35843,Va=36196,Wa=37492,Xa=37496,Ya=37808,qa=37809,$a=37810,ja=37811,Ka=37812,Za=37813,Ja=37814,Qa=37815,to=37816,eo=37817,no=37818,io=37819,ro=37820,so=37821,ao=36492,oo=36494,lo=36495,co=36283,ho=36284,uo=36285,fo=36286,Zh=3200,Jh=3201,Qh=0,tu=1,qn="",De="srgb",nr="srgb-linear",As="linear",ce="srgb",wi=7680,tl=519,eu=512,nu=513,iu=514,Dc=515,ru=516,su=517,au=518,ou=519,po=35044,el="300 es",yn=2e3,ws=2001;class bi{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(e)===-1&&i[t].push(e)}hasEventListener(t,e){const i=this._listeners;return i===void 0?!1:i[t]!==void 0&&i[t].indexOf(e)!==-1}removeEventListener(t,e){const i=this._listeners;if(i===void 0)return;const r=i[t];if(r!==void 0){const s=r.indexOf(e);s!==-1&&r.splice(s,1)}}dispatchEvent(t){const e=this._listeners;if(e===void 0)return;const i=e[t.type];if(i!==void 0){t.target=this;const r=i.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,t);t.target=null}}}const Le=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let nl=1234567;const _r=Math.PI/180,Tr=180/Math.PI;function Fn(){const n=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Le[n&255]+Le[n>>8&255]+Le[n>>16&255]+Le[n>>24&255]+"-"+Le[t&255]+Le[t>>8&255]+"-"+Le[t>>16&15|64]+Le[t>>24&255]+"-"+Le[e&63|128]+Le[e>>8&255]+"-"+Le[e>>16&255]+Le[e>>24&255]+Le[i&255]+Le[i>>8&255]+Le[i>>16&255]+Le[i>>24&255]).toLowerCase()}function Qt(n,t,e){return Math.max(t,Math.min(e,n))}function Uo(n,t){return(n%t+t)%t}function lu(n,t,e,i,r){return i+(n-t)*(r-i)/(e-t)}function cu(n,t,e){return n!==t?(e-n)/(t-n):0}function xr(n,t,e){return(1-e)*n+e*t}function hu(n,t,e,i){return xr(n,t,1-Math.exp(-e*i))}function uu(n,t=1){return t-Math.abs(Uo(n,t*2)-t)}function fu(n,t,e){return n<=t?0:n>=e?1:(n=(n-t)/(e-t),n*n*(3-2*n))}function du(n,t,e){return n<=t?0:n>=e?1:(n=(n-t)/(e-t),n*n*n*(n*(n*6-15)+10))}function pu(n,t){return n+Math.floor(Math.random()*(t-n+1))}function mu(n,t){return n+Math.random()*(t-n)}function gu(n){return n*(.5-Math.random())}function _u(n){n!==void 0&&(nl=n);let t=nl+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function xu(n){return n*_r}function vu(n){return n*Tr}function Mu(n){return(n&n-1)===0&&n!==0}function yu(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function Su(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function Eu(n,t,e,i,r){const s=Math.cos,a=Math.sin,o=s(e/2),c=a(e/2),l=s((t+i)/2),h=a((t+i)/2),d=s((t-i)/2),m=a((t-i)/2),f=s((i-t)/2),g=a((i-t)/2);switch(r){case"XYX":n.set(o*h,c*d,c*m,o*l);break;case"YZY":n.set(c*m,o*h,c*d,o*l);break;case"ZXZ":n.set(c*d,c*m,o*h,o*l);break;case"XZX":n.set(o*h,c*g,c*f,o*l);break;case"YXY":n.set(c*f,o*h,c*g,o*l);break;case"ZYZ":n.set(c*g,c*f,o*h,o*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function fn(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function oe(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}const At={DEG2RAD:_r,RAD2DEG:Tr,generateUUID:Fn,clamp:Qt,euclideanModulo:Uo,mapLinear:lu,inverseLerp:cu,lerp:xr,damp:hu,pingpong:uu,smoothstep:fu,smootherstep:du,randInt:pu,randFloat:mu,randFloatSpread:gu,seededRandom:_u,degToRad:xu,radToDeg:vu,isPowerOfTwo:Mu,ceilPowerOfTwo:yu,floorPowerOfTwo:Su,setQuaternionFromProperEuler:Eu,normalize:oe,denormalize:fn};class Bt{constructor(t=0,e=0){Bt.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,i=this.y,r=t.elements;return this.x=r[0]*e+r[3]*i+r[6],this.y=r[1]*e+r[4]*i+r[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Qt(this.x,t.x,e.x),this.y=Qt(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=Qt(this.x,t,e),this.y=Qt(this.y,t,e),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Qt(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(Qt(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y;return e*e+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const i=Math.cos(e),r=Math.sin(e),s=this.x-t.x,a=this.y-t.y;return this.x=s*i-a*r+t.x,this.y=s*r+a*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class ni{constructor(t=0,e=0,i=0,r=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=i,this._w=r}static slerpFlat(t,e,i,r,s,a,o){let c=i[r+0],l=i[r+1],h=i[r+2],d=i[r+3];const m=s[a+0],f=s[a+1],g=s[a+2],v=s[a+3];if(o===0){t[e+0]=c,t[e+1]=l,t[e+2]=h,t[e+3]=d;return}if(o===1){t[e+0]=m,t[e+1]=f,t[e+2]=g,t[e+3]=v;return}if(d!==v||c!==m||l!==f||h!==g){let p=1-o;const u=c*m+l*f+h*g+d*v,b=u>=0?1:-1,S=1-u*u;if(S>Number.EPSILON){const T=Math.sqrt(S),E=Math.atan2(T,u*b);p=Math.sin(p*E)/T,o=Math.sin(o*E)/T}const M=o*b;if(c=c*p+m*M,l=l*p+f*M,h=h*p+g*M,d=d*p+v*M,p===1-o){const T=1/Math.sqrt(c*c+l*l+h*h+d*d);c*=T,l*=T,h*=T,d*=T}}t[e]=c,t[e+1]=l,t[e+2]=h,t[e+3]=d}static multiplyQuaternionsFlat(t,e,i,r,s,a){const o=i[r],c=i[r+1],l=i[r+2],h=i[r+3],d=s[a],m=s[a+1],f=s[a+2],g=s[a+3];return t[e]=o*g+h*d+c*f-l*m,t[e+1]=c*g+h*m+l*d-o*f,t[e+2]=l*g+h*f+o*m-c*d,t[e+3]=h*g-o*d-c*m-l*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,i,r){return this._x=t,this._y=e,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const i=t._x,r=t._y,s=t._z,a=t._order,o=Math.cos,c=Math.sin,l=o(i/2),h=o(r/2),d=o(s/2),m=c(i/2),f=c(r/2),g=c(s/2);switch(a){case"XYZ":this._x=m*h*d+l*f*g,this._y=l*f*d-m*h*g,this._z=l*h*g+m*f*d,this._w=l*h*d-m*f*g;break;case"YXZ":this._x=m*h*d+l*f*g,this._y=l*f*d-m*h*g,this._z=l*h*g-m*f*d,this._w=l*h*d+m*f*g;break;case"ZXY":this._x=m*h*d-l*f*g,this._y=l*f*d+m*h*g,this._z=l*h*g+m*f*d,this._w=l*h*d-m*f*g;break;case"ZYX":this._x=m*h*d-l*f*g,this._y=l*f*d+m*h*g,this._z=l*h*g-m*f*d,this._w=l*h*d+m*f*g;break;case"YZX":this._x=m*h*d+l*f*g,this._y=l*f*d+m*h*g,this._z=l*h*g-m*f*d,this._w=l*h*d-m*f*g;break;case"XZY":this._x=m*h*d-l*f*g,this._y=l*f*d-m*h*g,this._z=l*h*g+m*f*d,this._w=l*h*d+m*f*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const i=e/2,r=Math.sin(i);return this._x=t.x*r,this._y=t.y*r,this._z=t.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,i=e[0],r=e[4],s=e[8],a=e[1],o=e[5],c=e[9],l=e[2],h=e[6],d=e[10],m=i+o+d;if(m>0){const f=.5/Math.sqrt(m+1);this._w=.25/f,this._x=(h-c)*f,this._y=(s-l)*f,this._z=(a-r)*f}else if(i>o&&i>d){const f=2*Math.sqrt(1+i-o-d);this._w=(h-c)/f,this._x=.25*f,this._y=(r+a)/f,this._z=(s+l)/f}else if(o>d){const f=2*Math.sqrt(1+o-i-d);this._w=(s-l)/f,this._x=(r+a)/f,this._y=.25*f,this._z=(c+h)/f}else{const f=2*Math.sqrt(1+d-i-o);this._w=(a-r)/f,this._x=(s+l)/f,this._y=(c+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let i=t.dot(e)+1;return i<1e-8?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Qt(this.dot(t),-1,1)))}rotateTowards(t,e){const i=this.angleTo(t);if(i===0)return this;const r=Math.min(1,e/i);return this.slerp(t,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const i=t._x,r=t._y,s=t._z,a=t._w,o=e._x,c=e._y,l=e._z,h=e._w;return this._x=i*h+a*o+r*l-s*c,this._y=r*h+a*c+s*o-i*l,this._z=s*h+a*l+i*c-r*o,this._w=a*h-i*o-r*c-s*l,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const i=this._x,r=this._y,s=this._z,a=this._w;let o=a*t._w+i*t._x+r*t._y+s*t._z;if(o<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,o=-o):this.copy(t),o>=1)return this._w=a,this._x=i,this._y=r,this._z=s,this;const c=1-o*o;if(c<=Number.EPSILON){const f=1-e;return this._w=f*a+e*this._w,this._x=f*i+e*this._x,this._y=f*r+e*this._y,this._z=f*s+e*this._z,this.normalize(),this}const l=Math.sqrt(c),h=Math.atan2(l,o),d=Math.sin((1-e)*h)/l,m=Math.sin(e*h)/l;return this._w=a*d+this._w*m,this._x=i*d+this._x*m,this._y=r*d+this._y*m,this._z=s*d+this._z*m,this._onChangeCallback(),this}slerpQuaternions(t,e,i){return this.copy(t).slerp(e,i)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(t),r*Math.cos(t),s*Math.sin(e),s*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class F{constructor(t=0,e=0,i=0){F.prototype.isVector3=!0,this.x=t,this.y=e,this.z=i}set(t,e,i){return i===void 0&&(i=this.z),this.x=t,this.y=e,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(il.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(il.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,i=this.y,r=this.z,s=t.elements;return this.x=s[0]*e+s[3]*i+s[6]*r,this.y=s[1]*e+s[4]*i+s[7]*r,this.z=s[2]*e+s[5]*i+s[8]*r,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,i=this.y,r=this.z,s=t.elements,a=1/(s[3]*e+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*e+s[4]*i+s[8]*r+s[12])*a,this.y=(s[1]*e+s[5]*i+s[9]*r+s[13])*a,this.z=(s[2]*e+s[6]*i+s[10]*r+s[14])*a,this}applyQuaternion(t){const e=this.x,i=this.y,r=this.z,s=t.x,a=t.y,o=t.z,c=t.w,l=2*(a*r-o*i),h=2*(o*e-s*r),d=2*(s*i-a*e);return this.x=e+c*l+a*d-o*h,this.y=i+c*h+o*l-s*d,this.z=r+c*d+s*h-a*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,i=this.y,r=this.z,s=t.elements;return this.x=s[0]*e+s[4]*i+s[8]*r,this.y=s[1]*e+s[5]*i+s[9]*r,this.z=s[2]*e+s[6]*i+s[10]*r,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Qt(this.x,t.x,e.x),this.y=Qt(this.y,t.y,e.y),this.z=Qt(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=Qt(this.x,t,e),this.y=Qt(this.y,t,e),this.z=Qt(this.z,t,e),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Qt(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const i=t.x,r=t.y,s=t.z,a=e.x,o=e.y,c=e.z;return this.x=r*c-s*o,this.y=s*a-i*c,this.z=i*o-r*a,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const i=t.dot(this)/e;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return Xs.copy(this).projectOnVector(t),this.sub(Xs)}reflect(t){return this.sub(Xs.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(Qt(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y,r=this.z-t.z;return e*e+i*i+r*r}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,i){const r=Math.sin(e)*t;return this.x=r*Math.sin(i),this.y=Math.cos(e)*t,this.z=r*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,i){return this.x=t*Math.sin(e),this.y=i,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),r=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=i,this.z=r,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,i=Math.sqrt(1-e*e);return this.x=i*Math.cos(t),this.y=e,this.z=i*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Xs=new F,il=new ni;class $t{constructor(t,e,i,r,s,a,o,c,l){$t.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,i,r,s,a,o,c,l)}set(t,e,i,r,s,a,o,c,l){const h=this.elements;return h[0]=t,h[1]=r,h[2]=o,h[3]=e,h[4]=s,h[5]=c,h[6]=i,h[7]=a,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],this}extractBasis(t,e,i){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,r=e.elements,s=this.elements,a=i[0],o=i[3],c=i[6],l=i[1],h=i[4],d=i[7],m=i[2],f=i[5],g=i[8],v=r[0],p=r[3],u=r[6],b=r[1],S=r[4],M=r[7],T=r[2],E=r[5],w=r[8];return s[0]=a*v+o*b+c*T,s[3]=a*p+o*S+c*E,s[6]=a*u+o*M+c*w,s[1]=l*v+h*b+d*T,s[4]=l*p+h*S+d*E,s[7]=l*u+h*M+d*w,s[2]=m*v+f*b+g*T,s[5]=m*p+f*S+g*E,s[8]=m*u+f*M+g*w,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[1],r=t[2],s=t[3],a=t[4],o=t[5],c=t[6],l=t[7],h=t[8];return e*a*h-e*o*l-i*s*h+i*o*c+r*s*l-r*a*c}invert(){const t=this.elements,e=t[0],i=t[1],r=t[2],s=t[3],a=t[4],o=t[5],c=t[6],l=t[7],h=t[8],d=h*a-o*l,m=o*c-h*s,f=l*s-a*c,g=e*d+i*m+r*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/g;return t[0]=d*v,t[1]=(r*l-h*i)*v,t[2]=(o*i-r*a)*v,t[3]=m*v,t[4]=(h*e-r*c)*v,t[5]=(r*s-o*e)*v,t[6]=f*v,t[7]=(i*c-l*e)*v,t[8]=(a*e-i*s)*v,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,i,r,s,a,o){const c=Math.cos(s),l=Math.sin(s);return this.set(i*c,i*l,-i*(c*a+l*o)+a+t,-r*l,r*c,-r*(-l*a+c*o)+o+e,0,0,1),this}scale(t,e){return this.premultiply(Ys.makeScale(t,e)),this}rotate(t){return this.premultiply(Ys.makeRotation(-t)),this}translate(t,e){return this.premultiply(Ys.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,i,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,i=t.elements;for(let r=0;r<9;r++)if(e[r]!==i[r])return!1;return!0}fromArray(t,e=0){for(let i=0;i<9;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Ys=new $t;function Lc(n){for(let t=n.length-1;t>=0;--t)if(n[t]>=65535)return!0;return!1}function Rs(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function bu(){const n=Rs("canvas");return n.style.display="block",n}const rl={};function Ar(n){n in rl||(rl[n]=!0,console.warn(n))}function Tu(n,t,e){return new Promise(function(i,r){function s(){switch(n.clientWaitSync(t,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:r();break;case n.TIMEOUT_EXPIRED:setTimeout(s,e);break;default:i()}}setTimeout(s,e)})}const sl=new $t().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),al=new $t().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Au(){const n={enabled:!0,workingColorSpace:nr,spaces:{},convert:function(r,s,a){return this.enabled===!1||s===a||!s||!a||(this.spaces[s].transfer===ce&&(r.r=Nn(r.r),r.g=Nn(r.g),r.b=Nn(r.b)),this.spaces[s].primaries!==this.spaces[a].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===ce&&(r.r=ji(r.r),r.g=ji(r.g),r.b=ji(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===qn?As:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,a){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,s){return Ar("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),n.workingToColorSpace(r,s)},toWorkingColorSpace:function(r,s){return Ar("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),n.colorSpaceToWorking(r,s)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[nr]:{primaries:t,whitePoint:i,transfer:As,toXYZ:sl,fromXYZ:al,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:De},outputColorSpaceConfig:{drawingBufferColorSpace:De}},[De]:{primaries:t,whitePoint:i,transfer:ce,toXYZ:sl,fromXYZ:al,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:De}}}),n}const re=Au();function Nn(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function ji(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let Ri;class wu{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let i;if(t instanceof HTMLCanvasElement)i=t;else{Ri===void 0&&(Ri=Rs("canvas")),Ri.width=t.width,Ri.height=t.height;const r=Ri.getContext("2d");t instanceof ImageData?r.putImageData(t,0,0):r.drawImage(t,0,0,t.width,t.height),i=Ri}return i.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=Rs("canvas");e.width=t.width,e.height=t.height;const i=e.getContext("2d");i.drawImage(t,0,0,t.width,t.height);const r=i.getImageData(0,0,t.width,t.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=Nn(s[a]/255)*255;return i.putImageData(r,0,0),e}else if(t.data){const e=t.data.slice(0);for(let i=0;i<e.length;i++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[i]=Math.floor(Nn(e[i]/255)*255):e[i]=Nn(e[i]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let Ru=0;class Fo{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Ru++}),this.uuid=Fn(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):e instanceof VideoFrame?t.set(e.displayHeight,e.displayWidth,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push(qs(r[a].image)):s.push(qs(r[a]))}else s=qs(r);i.url=s}return e||(t.images[this.uuid]=i),i}}function qs(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?wu.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Cu=0;const $s=new F;class ke extends bi{constructor(t=ke.DEFAULT_IMAGE,e=ke.DEFAULT_MAPPING,i=_i,r=_i,s=dn,a=jn,o=pn,c=On,l=ke.DEFAULT_ANISOTROPY,h=qn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Cu++}),this.uuid=Fn(),this.name="",this.source=new Fo(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new Bt(0,0),this.repeat=new Bt(1,1),this.center=new Bt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new $t,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0}get width(){return this.source.getSize($s).x}get height(){return this.source.getSize($s).y}get depth(){return this.source.getSize($s).z}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const e in t){const i=t[e];if(i===void 0){console.warn(`THREE.Texture.setValues(): parameter '${e}' has value of undefined.`);continue}const r=this[e];if(r===void 0){console.warn(`THREE.Texture.setValues(): property '${e}' does not exist.`);continue}r&&i&&r.isVector2&&i.isVector2||r&&i&&r.isVector3&&i.isVector3||r&&i&&r.isMatrix3&&i.isMatrix3?r.copy(i):this[e]=i}}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),e||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Sc)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Oa:t.x=t.x-Math.floor(t.x);break;case _i:t.x=t.x<0?0:1;break;case Ba:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Oa:t.y=t.y-Math.floor(t.y);break;case _i:t.y=t.y<0?0:1;break;case Ba:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}ke.DEFAULT_IMAGE=null;ke.DEFAULT_MAPPING=Sc;ke.DEFAULT_ANISOTROPY=1;class Me{constructor(t=0,e=0,i=0,r=1){Me.prototype.isVector4=!0,this.x=t,this.y=e,this.z=i,this.w=r}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,i,r){return this.x=t,this.y=e,this.z=i,this.w=r,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,i=this.y,r=this.z,s=this.w,a=t.elements;return this.x=a[0]*e+a[4]*i+a[8]*r+a[12]*s,this.y=a[1]*e+a[5]*i+a[9]*r+a[13]*s,this.z=a[2]*e+a[6]*i+a[10]*r+a[14]*s,this.w=a[3]*e+a[7]*i+a[11]*r+a[15]*s,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,i,r,s;const c=t.elements,l=c[0],h=c[4],d=c[8],m=c[1],f=c[5],g=c[9],v=c[2],p=c[6],u=c[10];if(Math.abs(h-m)<.01&&Math.abs(d-v)<.01&&Math.abs(g-p)<.01){if(Math.abs(h+m)<.1&&Math.abs(d+v)<.1&&Math.abs(g+p)<.1&&Math.abs(l+f+u-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const S=(l+1)/2,M=(f+1)/2,T=(u+1)/2,E=(h+m)/4,w=(d+v)/4,P=(g+p)/4;return S>M&&S>T?S<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(S),r=E/i,s=w/i):M>T?M<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(M),i=E/r,s=P/r):T<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(T),i=w/s,r=P/s),this.set(i,r,s,e),this}let b=Math.sqrt((p-g)*(p-g)+(d-v)*(d-v)+(m-h)*(m-h));return Math.abs(b)<.001&&(b=1),this.x=(p-g)/b,this.y=(d-v)/b,this.z=(m-h)/b,this.w=Math.acos((l+f+u-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Qt(this.x,t.x,e.x),this.y=Qt(this.y,t.y,e.y),this.z=Qt(this.z,t.z,e.z),this.w=Qt(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=Qt(this.x,t,e),this.y=Qt(this.y,t,e),this.z=Qt(this.z,t,e),this.w=Qt(this.w,t,e),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Qt(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this.w=t.w+(e.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Pu extends bi{constructor(t=1,e=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:dn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},i),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=i.depth,this.scissor=new Me(0,0,t,e),this.scissorTest=!1,this.viewport=new Me(0,0,t,e);const r={width:t,height:e,depth:i.depth},s=new ke(r);this.textures=[];const a=i.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}_setTextureOptions(t={}){const e={minFilter:dn,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,i=1){if(this.width!==t||this.height!==e||this.depth!==i){this.width=t,this.height=e,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=t,this.textures[r].image.height=e,this.textures[r].image.depth=i,this.textures[r].isArrayTexture=this.textures[r].image.depth>1;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,i=t.textures.length;e<i;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;const r=Object.assign({},t.textures[e].image);this.textures[e].source=new Fo(r)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class yi extends Pu{constructor(t=1,e=1,i={}){super(t,e,i),this.isWebGLRenderTarget=!0}}class Ic extends ke{constructor(t=null,e=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:i,depth:r},this.magFilter=_n,this.minFilter=_n,this.wrapR=_i,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class Du extends ke{constructor(t=null,e=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:i,depth:r},this.magFilter=_n,this.minFilter=_n,this.wrapR=_i,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Lr{constructor(t=new F(1/0,1/0,1/0),e=new F(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e+=3)this.expandByPoint(ln.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,i=t.count;e<i;e++)this.expandByPoint(ln.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const i=ln.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const i=t.geometry;if(i!==void 0){const s=i.getAttribute("position");if(e===!0&&s!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,ln):ln.fromBufferAttribute(s,a),ln.applyMatrix4(t.matrixWorld),this.expandByPoint(ln);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Hr.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Hr.copy(i.boundingBox)),Hr.applyMatrix4(t.matrixWorld),this.union(Hr)}const r=t.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,ln),ln.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,i;return t.normal.x>0?(e=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),e<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(ar),Gr.subVectors(this.max,ar),Ci.subVectors(t.a,ar),Pi.subVectors(t.b,ar),Di.subVectors(t.c,ar),zn.subVectors(Pi,Ci),kn.subVectors(Di,Pi),ai.subVectors(Ci,Di);let e=[0,-zn.z,zn.y,0,-kn.z,kn.y,0,-ai.z,ai.y,zn.z,0,-zn.x,kn.z,0,-kn.x,ai.z,0,-ai.x,-zn.y,zn.x,0,-kn.y,kn.x,0,-ai.y,ai.x,0];return!js(e,Ci,Pi,Di,Gr)||(e=[1,0,0,0,1,0,0,0,1],!js(e,Ci,Pi,Di,Gr))?!1:(Vr.crossVectors(zn,kn),e=[Vr.x,Vr.y,Vr.z],js(e,Ci,Pi,Di,Gr))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,ln).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(ln).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(wn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),wn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),wn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),wn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),wn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),wn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),wn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),wn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(wn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const wn=[new F,new F,new F,new F,new F,new F,new F,new F],ln=new F,Hr=new Lr,Ci=new F,Pi=new F,Di=new F,zn=new F,kn=new F,ai=new F,ar=new F,Gr=new F,Vr=new F,oi=new F;function js(n,t,e,i,r){for(let s=0,a=n.length-3;s<=a;s+=3){oi.fromArray(n,s);const o=r.x*Math.abs(oi.x)+r.y*Math.abs(oi.y)+r.z*Math.abs(oi.z),c=t.dot(oi),l=e.dot(oi),h=i.dot(oi);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>o)return!1}return!0}const Lu=new Lr,or=new F,Ks=new F;class Ir{constructor(t=new F,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const i=this.center;e!==void 0?i.copy(e):Lu.setFromPoints(t).getCenter(i);let r=0;for(let s=0,a=t.length;s<a;s++)r=Math.max(r,i.distanceToSquared(t[s]));return this.radius=Math.sqrt(r),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const i=this.center.distanceToSquared(t);return e.copy(t),i>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;or.subVectors(t,this.center);const e=or.lengthSq();if(e>this.radius*this.radius){const i=Math.sqrt(e),r=(i-this.radius)*.5;this.center.addScaledVector(or,r/i),this.radius+=r}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Ks.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(or.copy(t.center).add(Ks)),this.expandByPoint(or.copy(t.center).sub(Ks))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}const Rn=new F,Zs=new F,Wr=new F,Hn=new F,Js=new F,Xr=new F,Qs=new F;class Ur{constructor(t=new F,e=new F(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Rn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const i=e.dot(this.direction);return i<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=Rn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Rn.copy(this.origin).addScaledVector(this.direction,e),Rn.distanceToSquared(t))}distanceSqToSegment(t,e,i,r){Zs.copy(t).add(e).multiplyScalar(.5),Wr.copy(e).sub(t).normalize(),Hn.copy(this.origin).sub(Zs);const s=t.distanceTo(e)*.5,a=-this.direction.dot(Wr),o=Hn.dot(this.direction),c=-Hn.dot(Wr),l=Hn.lengthSq(),h=Math.abs(1-a*a);let d,m,f,g;if(h>0)if(d=a*c-o,m=a*o-c,g=s*h,d>=0)if(m>=-g)if(m<=g){const v=1/h;d*=v,m*=v,f=d*(d+a*m+2*o)+m*(a*d+m+2*c)+l}else m=s,d=Math.max(0,-(a*m+o)),f=-d*d+m*(m+2*c)+l;else m=-s,d=Math.max(0,-(a*m+o)),f=-d*d+m*(m+2*c)+l;else m<=-g?(d=Math.max(0,-(-a*s+o)),m=d>0?-s:Math.min(Math.max(-s,-c),s),f=-d*d+m*(m+2*c)+l):m<=g?(d=0,m=Math.min(Math.max(-s,-c),s),f=m*(m+2*c)+l):(d=Math.max(0,-(a*s+o)),m=d>0?s:Math.min(Math.max(-s,-c),s),f=-d*d+m*(m+2*c)+l);else m=a>0?-s:s,d=Math.max(0,-(a*m+o)),f=-d*d+m*(m+2*c)+l;return i&&i.copy(this.origin).addScaledVector(this.direction,d),r&&r.copy(Zs).addScaledVector(Wr,m),f}intersectSphere(t,e){Rn.subVectors(t.center,this.origin);const i=Rn.dot(this.direction),r=Rn.dot(Rn)-i*i,s=t.radius*t.radius;if(r>s)return null;const a=Math.sqrt(s-r),o=i-a,c=i+a;return c<0?null:o<0?this.at(c,e):this.at(o,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(t.normal)+t.constant)/e;return i>=0?i:null}intersectPlane(t,e){const i=this.distanceToPlane(t);return i===null?null:this.at(i,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let i,r,s,a,o,c;const l=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,m=this.origin;return l>=0?(i=(t.min.x-m.x)*l,r=(t.max.x-m.x)*l):(i=(t.max.x-m.x)*l,r=(t.min.x-m.x)*l),h>=0?(s=(t.min.y-m.y)*h,a=(t.max.y-m.y)*h):(s=(t.max.y-m.y)*h,a=(t.min.y-m.y)*h),i>a||s>r||((s>i||isNaN(i))&&(i=s),(a<r||isNaN(r))&&(r=a),d>=0?(o=(t.min.z-m.z)*d,c=(t.max.z-m.z)*d):(o=(t.max.z-m.z)*d,c=(t.min.z-m.z)*d),i>c||o>r)||((o>i||i!==i)&&(i=o),(c<r||r!==r)&&(r=c),r<0)?null:this.at(i>=0?i:r,e)}intersectsBox(t){return this.intersectBox(t,Rn)!==null}intersectTriangle(t,e,i,r,s){Js.subVectors(e,t),Xr.subVectors(i,t),Qs.crossVectors(Js,Xr);let a=this.direction.dot(Qs),o;if(a>0){if(r)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Hn.subVectors(this.origin,t);const c=o*this.direction.dot(Xr.crossVectors(Hn,Xr));if(c<0)return null;const l=o*this.direction.dot(Js.cross(Hn));if(l<0||c+l>a)return null;const h=-o*Hn.dot(Qs);return h<0?null:this.at(h/a,s)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class _e{constructor(t,e,i,r,s,a,o,c,l,h,d,m,f,g,v,p){_e.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,i,r,s,a,o,c,l,h,d,m,f,g,v,p)}set(t,e,i,r,s,a,o,c,l,h,d,m,f,g,v,p){const u=this.elements;return u[0]=t,u[4]=e,u[8]=i,u[12]=r,u[1]=s,u[5]=a,u[9]=o,u[13]=c,u[2]=l,u[6]=h,u[10]=d,u[14]=m,u[3]=f,u[7]=g,u[11]=v,u[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new _e().fromArray(this.elements)}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],e[9]=i[9],e[10]=i[10],e[11]=i[11],e[12]=i[12],e[13]=i[13],e[14]=i[14],e[15]=i[15],this}copyPosition(t){const e=this.elements,i=t.elements;return e[12]=i[12],e[13]=i[13],e[14]=i[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,i){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(t,e,i){return this.set(t.x,e.x,i.x,0,t.y,e.y,i.y,0,t.z,e.z,i.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,i=t.elements,r=1/Li.setFromMatrixColumn(t,0).length(),s=1/Li.setFromMatrixColumn(t,1).length(),a=1/Li.setFromMatrixColumn(t,2).length();return e[0]=i[0]*r,e[1]=i[1]*r,e[2]=i[2]*r,e[3]=0,e[4]=i[4]*s,e[5]=i[5]*s,e[6]=i[6]*s,e[7]=0,e[8]=i[8]*a,e[9]=i[9]*a,e[10]=i[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,i=t.x,r=t.y,s=t.z,a=Math.cos(i),o=Math.sin(i),c=Math.cos(r),l=Math.sin(r),h=Math.cos(s),d=Math.sin(s);if(t.order==="XYZ"){const m=a*h,f=a*d,g=o*h,v=o*d;e[0]=c*h,e[4]=-c*d,e[8]=l,e[1]=f+g*l,e[5]=m-v*l,e[9]=-o*c,e[2]=v-m*l,e[6]=g+f*l,e[10]=a*c}else if(t.order==="YXZ"){const m=c*h,f=c*d,g=l*h,v=l*d;e[0]=m+v*o,e[4]=g*o-f,e[8]=a*l,e[1]=a*d,e[5]=a*h,e[9]=-o,e[2]=f*o-g,e[6]=v+m*o,e[10]=a*c}else if(t.order==="ZXY"){const m=c*h,f=c*d,g=l*h,v=l*d;e[0]=m-v*o,e[4]=-a*d,e[8]=g+f*o,e[1]=f+g*o,e[5]=a*h,e[9]=v-m*o,e[2]=-a*l,e[6]=o,e[10]=a*c}else if(t.order==="ZYX"){const m=a*h,f=a*d,g=o*h,v=o*d;e[0]=c*h,e[4]=g*l-f,e[8]=m*l+v,e[1]=c*d,e[5]=v*l+m,e[9]=f*l-g,e[2]=-l,e[6]=o*c,e[10]=a*c}else if(t.order==="YZX"){const m=a*c,f=a*l,g=o*c,v=o*l;e[0]=c*h,e[4]=v-m*d,e[8]=g*d+f,e[1]=d,e[5]=a*h,e[9]=-o*h,e[2]=-l*h,e[6]=f*d+g,e[10]=m-v*d}else if(t.order==="XZY"){const m=a*c,f=a*l,g=o*c,v=o*l;e[0]=c*h,e[4]=-d,e[8]=l*h,e[1]=m*d+v,e[5]=a*h,e[9]=f*d-g,e[2]=g*d-f,e[6]=o*h,e[10]=v*d+m}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Iu,t,Uu)}lookAt(t,e,i){const r=this.elements;return qe.subVectors(t,e),qe.lengthSq()===0&&(qe.z=1),qe.normalize(),Gn.crossVectors(i,qe),Gn.lengthSq()===0&&(Math.abs(i.z)===1?qe.x+=1e-4:qe.z+=1e-4,qe.normalize(),Gn.crossVectors(i,qe)),Gn.normalize(),Yr.crossVectors(qe,Gn),r[0]=Gn.x,r[4]=Yr.x,r[8]=qe.x,r[1]=Gn.y,r[5]=Yr.y,r[9]=qe.y,r[2]=Gn.z,r[6]=Yr.z,r[10]=qe.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,r=e.elements,s=this.elements,a=i[0],o=i[4],c=i[8],l=i[12],h=i[1],d=i[5],m=i[9],f=i[13],g=i[2],v=i[6],p=i[10],u=i[14],b=i[3],S=i[7],M=i[11],T=i[15],E=r[0],w=r[4],P=r[8],_=r[12],x=r[1],R=r[5],D=r[9],N=r[13],q=r[2],B=r[6],V=r[10],Y=r[14],z=r[3],I=r[7],G=r[11],Q=r[15];return s[0]=a*E+o*x+c*q+l*z,s[4]=a*w+o*R+c*B+l*I,s[8]=a*P+o*D+c*V+l*G,s[12]=a*_+o*N+c*Y+l*Q,s[1]=h*E+d*x+m*q+f*z,s[5]=h*w+d*R+m*B+f*I,s[9]=h*P+d*D+m*V+f*G,s[13]=h*_+d*N+m*Y+f*Q,s[2]=g*E+v*x+p*q+u*z,s[6]=g*w+v*R+p*B+u*I,s[10]=g*P+v*D+p*V+u*G,s[14]=g*_+v*N+p*Y+u*Q,s[3]=b*E+S*x+M*q+T*z,s[7]=b*w+S*R+M*B+T*I,s[11]=b*P+S*D+M*V+T*G,s[15]=b*_+S*N+M*Y+T*Q,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[4],r=t[8],s=t[12],a=t[1],o=t[5],c=t[9],l=t[13],h=t[2],d=t[6],m=t[10],f=t[14],g=t[3],v=t[7],p=t[11],u=t[15];return g*(+s*c*d-r*l*d-s*o*m+i*l*m+r*o*f-i*c*f)+v*(+e*c*f-e*l*m+s*a*m-r*a*f+r*l*h-s*c*h)+p*(+e*l*d-e*o*f-s*a*d+i*a*f+s*o*h-i*l*h)+u*(-r*o*h-e*c*d+e*o*m+r*a*d-i*a*m+i*c*h)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,i){const r=this.elements;return t.isVector3?(r[12]=t.x,r[13]=t.y,r[14]=t.z):(r[12]=t,r[13]=e,r[14]=i),this}invert(){const t=this.elements,e=t[0],i=t[1],r=t[2],s=t[3],a=t[4],o=t[5],c=t[6],l=t[7],h=t[8],d=t[9],m=t[10],f=t[11],g=t[12],v=t[13],p=t[14],u=t[15],b=d*p*l-v*m*l+v*c*f-o*p*f-d*c*u+o*m*u,S=g*m*l-h*p*l-g*c*f+a*p*f+h*c*u-a*m*u,M=h*v*l-g*d*l+g*o*f-a*v*f-h*o*u+a*d*u,T=g*d*c-h*v*c-g*o*m+a*v*m+h*o*p-a*d*p,E=e*b+i*S+r*M+s*T;if(E===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const w=1/E;return t[0]=b*w,t[1]=(v*m*s-d*p*s-v*r*f+i*p*f+d*r*u-i*m*u)*w,t[2]=(o*p*s-v*c*s+v*r*l-i*p*l-o*r*u+i*c*u)*w,t[3]=(d*c*s-o*m*s-d*r*l+i*m*l+o*r*f-i*c*f)*w,t[4]=S*w,t[5]=(h*p*s-g*m*s+g*r*f-e*p*f-h*r*u+e*m*u)*w,t[6]=(g*c*s-a*p*s-g*r*l+e*p*l+a*r*u-e*c*u)*w,t[7]=(a*m*s-h*c*s+h*r*l-e*m*l-a*r*f+e*c*f)*w,t[8]=M*w,t[9]=(g*d*s-h*v*s-g*i*f+e*v*f+h*i*u-e*d*u)*w,t[10]=(a*v*s-g*o*s+g*i*l-e*v*l-a*i*u+e*o*u)*w,t[11]=(h*o*s-a*d*s-h*i*l+e*d*l+a*i*f-e*o*f)*w,t[12]=T*w,t[13]=(h*v*r-g*d*r+g*i*m-e*v*m-h*i*p+e*d*p)*w,t[14]=(g*o*r-a*v*r-g*i*c+e*v*c+a*i*p-e*o*p)*w,t[15]=(a*d*r-h*o*r+h*i*c-e*d*c-a*i*m+e*o*m)*w,this}scale(t){const e=this.elements,i=t.x,r=t.y,s=t.z;return e[0]*=i,e[4]*=r,e[8]*=s,e[1]*=i,e[5]*=r,e[9]*=s,e[2]*=i,e[6]*=r,e[10]*=s,e[3]*=i,e[7]*=r,e[11]*=s,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],r=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,i,r))}makeTranslation(t,e,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,i,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,e,-i,0,0,i,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,0,i,0,0,1,0,0,-i,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,0,i,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const i=Math.cos(e),r=Math.sin(e),s=1-i,a=t.x,o=t.y,c=t.z,l=s*a,h=s*o;return this.set(l*a+i,l*o-r*c,l*c+r*o,0,l*o+r*c,h*o+i,h*c-r*a,0,l*c-r*o,h*c+r*a,s*c*c+i,0,0,0,0,1),this}makeScale(t,e,i){return this.set(t,0,0,0,0,e,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,e,i,r,s,a){return this.set(1,i,s,0,t,1,a,0,e,r,1,0,0,0,0,1),this}compose(t,e,i){const r=this.elements,s=e._x,a=e._y,o=e._z,c=e._w,l=s+s,h=a+a,d=o+o,m=s*l,f=s*h,g=s*d,v=a*h,p=a*d,u=o*d,b=c*l,S=c*h,M=c*d,T=i.x,E=i.y,w=i.z;return r[0]=(1-(v+u))*T,r[1]=(f+M)*T,r[2]=(g-S)*T,r[3]=0,r[4]=(f-M)*E,r[5]=(1-(m+u))*E,r[6]=(p+b)*E,r[7]=0,r[8]=(g+S)*w,r[9]=(p-b)*w,r[10]=(1-(m+v))*w,r[11]=0,r[12]=t.x,r[13]=t.y,r[14]=t.z,r[15]=1,this}decompose(t,e,i){const r=this.elements;let s=Li.set(r[0],r[1],r[2]).length();const a=Li.set(r[4],r[5],r[6]).length(),o=Li.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),t.x=r[12],t.y=r[13],t.z=r[14],cn.copy(this);const l=1/s,h=1/a,d=1/o;return cn.elements[0]*=l,cn.elements[1]*=l,cn.elements[2]*=l,cn.elements[4]*=h,cn.elements[5]*=h,cn.elements[6]*=h,cn.elements[8]*=d,cn.elements[9]*=d,cn.elements[10]*=d,e.setFromRotationMatrix(cn),i.x=s,i.y=a,i.z=o,this}makePerspective(t,e,i,r,s,a,o=yn,c=!1){const l=this.elements,h=2*s/(e-t),d=2*s/(i-r),m=(e+t)/(e-t),f=(i+r)/(i-r);let g,v;if(c)g=s/(a-s),v=a*s/(a-s);else if(o===yn)g=-(a+s)/(a-s),v=-2*a*s/(a-s);else if(o===ws)g=-a/(a-s),v=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=h,l[4]=0,l[8]=m,l[12]=0,l[1]=0,l[5]=d,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=g,l[14]=v,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,i,r,s,a,o=yn,c=!1){const l=this.elements,h=2/(e-t),d=2/(i-r),m=-(e+t)/(e-t),f=-(i+r)/(i-r);let g,v;if(c)g=1/(a-s),v=a/(a-s);else if(o===yn)g=-2/(a-s),v=-(a+s)/(a-s);else if(o===ws)g=-1/(a-s),v=-s/(a-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=h,l[4]=0,l[8]=0,l[12]=m,l[1]=0,l[5]=d,l[9]=0,l[13]=f,l[2]=0,l[6]=0,l[10]=g,l[14]=v,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){const e=this.elements,i=t.elements;for(let r=0;r<16;r++)if(e[r]!==i[r])return!1;return!0}fromArray(t,e=0){for(let i=0;i<16;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t[e+9]=i[9],t[e+10]=i[10],t[e+11]=i[11],t[e+12]=i[12],t[e+13]=i[13],t[e+14]=i[14],t[e+15]=i[15],t}}const Li=new F,cn=new _e,Iu=new F(0,0,0),Uu=new F(1,1,1),Gn=new F,Yr=new F,qe=new F,ol=new _e,ll=new ni;class Bn{constructor(t=0,e=0,i=0,r=Bn.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=i,this._order=r}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,i,r=this._order){return this._x=t,this._y=e,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,i=!0){const r=t.elements,s=r[0],a=r[4],o=r[8],c=r[1],l=r[5],h=r[9],d=r[2],m=r[6],f=r[10];switch(e){case"XYZ":this._y=Math.asin(Qt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(m,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Qt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-d,s),this._z=0);break;case"ZXY":this._x=Math.asin(Qt(m,-1,1)),Math.abs(m)<.9999999?(this._y=Math.atan2(-d,f),this._z=Math.atan2(-a,l)):(this._y=0,this._z=Math.atan2(c,s));break;case"ZYX":this._y=Math.asin(-Qt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(m,f),this._z=Math.atan2(c,s)):(this._x=0,this._z=Math.atan2(-a,l));break;case"YZX":this._z=Math.asin(Qt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-d,s)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-Qt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(m,l),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-h,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,i){return ol.makeRotationFromQuaternion(t),this.setFromRotationMatrix(ol,e,i)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return ll.setFromEuler(this),this.setFromQuaternion(ll,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Bn.DEFAULT_ORDER="XYZ";class No{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let Fu=0;const cl=new F,Ii=new ni,Cn=new _e,qr=new F,lr=new F,Nu=new F,Ou=new ni,hl=new F(1,0,0),ul=new F(0,1,0),fl=new F(0,0,1),dl={type:"added"},Bu={type:"removed"},Ui={type:"childadded",child:null},ta={type:"childremoved",child:null};class Ue extends bi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Fu++}),this.uuid=Fn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ue.DEFAULT_UP.clone();const t=new F,e=new Bn,i=new ni,r=new F(1,1,1);function s(){i.setFromEuler(e,!1)}function a(){e.setFromQuaternion(i,void 0,!1)}e._onChange(s),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new _e},normalMatrix:{value:new $t}}),this.matrix=new _e,this.matrixWorld=new _e,this.matrixAutoUpdate=Ue.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Ue.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new No,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Ii.setFromAxisAngle(t,e),this.quaternion.multiply(Ii),this}rotateOnWorldAxis(t,e){return Ii.setFromAxisAngle(t,e),this.quaternion.premultiply(Ii),this}rotateX(t){return this.rotateOnAxis(hl,t)}rotateY(t){return this.rotateOnAxis(ul,t)}rotateZ(t){return this.rotateOnAxis(fl,t)}translateOnAxis(t,e){return cl.copy(t).applyQuaternion(this.quaternion),this.position.add(cl.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(hl,t)}translateY(t){return this.translateOnAxis(ul,t)}translateZ(t){return this.translateOnAxis(fl,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Cn.copy(this.matrixWorld).invert())}lookAt(t,e,i){t.isVector3?qr.copy(t):qr.set(t,e,i);const r=this.parent;this.updateWorldMatrix(!0,!1),lr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Cn.lookAt(lr,qr,this.up):Cn.lookAt(qr,lr,this.up),this.quaternion.setFromRotationMatrix(Cn),r&&(Cn.extractRotation(r.matrixWorld),Ii.setFromRotationMatrix(Cn),this.quaternion.premultiply(Ii.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(dl),Ui.child=t,this.dispatchEvent(Ui),Ui.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Bu),ta.child=t,this.dispatchEvent(ta),ta.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Cn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Cn.multiply(t.parent.matrixWorld)),t.applyMatrix4(Cn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(dl),Ui.child=t,this.dispatchEvent(Ui),Ui.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let i=0,r=this.children.length;i<r;i++){const a=this.children[i].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,i=[]){this[t]===e&&i.push(this);const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].getObjectsByProperty(t,e,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(lr,t,Nu),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(lr,Ou,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let i=0,r=e.length;i<r;i++)e[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let i=0,r=e.length;i<r;i++)e[i].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let i=0,r=e.length;i<r;i++)e[i].updateMatrixWorld(t)}updateWorldMatrix(t,e){const i=this.parent;if(t===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",i={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(o=>({...o})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(t),r.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(t.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const c=o.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){const d=c[l];s(t.shapes,d)}else s(t.shapes,c)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(t.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(s(t.materials,this.material[c]));r.material=o}else r.material=s(t.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const c=this.animations[o];r.animations.push(s(t.animations,c))}}if(e){const o=a(t.geometries),c=a(t.materials),l=a(t.textures),h=a(t.images),d=a(t.shapes),m=a(t.skeletons),f=a(t.animations),g=a(t.nodes);o.length>0&&(i.geometries=o),c.length>0&&(i.materials=c),l.length>0&&(i.textures=l),h.length>0&&(i.images=h),d.length>0&&(i.shapes=d),m.length>0&&(i.skeletons=m),f.length>0&&(i.animations=f),g.length>0&&(i.nodes=g)}return i.object=r,i;function a(o){const c=[];for(const l in o){const h=o[l];delete h.metadata,c.push(h)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let i=0;i<t.children.length;i++){const r=t.children[i];this.add(r.clone())}return this}}Ue.DEFAULT_UP=new F(0,1,0);Ue.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ue.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const hn=new F,Pn=new F,ea=new F,Dn=new F,Fi=new F,Ni=new F,pl=new F,na=new F,ia=new F,ra=new F,sa=new Me,aa=new Me,oa=new Me;class rn{constructor(t=new F,e=new F,i=new F){this.a=t,this.b=e,this.c=i}static getNormal(t,e,i,r){r.subVectors(i,e),hn.subVectors(t,e),r.cross(hn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(t,e,i,r,s){hn.subVectors(r,e),Pn.subVectors(i,e),ea.subVectors(t,e);const a=hn.dot(hn),o=hn.dot(Pn),c=hn.dot(ea),l=Pn.dot(Pn),h=Pn.dot(ea),d=a*l-o*o;if(d===0)return s.set(0,0,0),null;const m=1/d,f=(l*c-o*h)*m,g=(a*h-o*c)*m;return s.set(1-f-g,g,f)}static containsPoint(t,e,i,r){return this.getBarycoord(t,e,i,r,Dn)===null?!1:Dn.x>=0&&Dn.y>=0&&Dn.x+Dn.y<=1}static getInterpolation(t,e,i,r,s,a,o,c){return this.getBarycoord(t,e,i,r,Dn)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(s,Dn.x),c.addScaledVector(a,Dn.y),c.addScaledVector(o,Dn.z),c)}static getInterpolatedAttribute(t,e,i,r,s,a){return sa.setScalar(0),aa.setScalar(0),oa.setScalar(0),sa.fromBufferAttribute(t,e),aa.fromBufferAttribute(t,i),oa.fromBufferAttribute(t,r),a.setScalar(0),a.addScaledVector(sa,s.x),a.addScaledVector(aa,s.y),a.addScaledVector(oa,s.z),a}static isFrontFacing(t,e,i,r){return hn.subVectors(i,e),Pn.subVectors(t,e),hn.cross(Pn).dot(r)<0}set(t,e,i){return this.a.copy(t),this.b.copy(e),this.c.copy(i),this}setFromPointsAndIndices(t,e,i,r){return this.a.copy(t[e]),this.b.copy(t[i]),this.c.copy(t[r]),this}setFromAttributeAndIndices(t,e,i,r){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,r),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return hn.subVectors(this.c,this.b),Pn.subVectors(this.a,this.b),hn.cross(Pn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return rn.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return rn.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,i,r,s){return rn.getInterpolation(t,this.a,this.b,this.c,e,i,r,s)}containsPoint(t){return rn.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return rn.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const i=this.a,r=this.b,s=this.c;let a,o;Fi.subVectors(r,i),Ni.subVectors(s,i),na.subVectors(t,i);const c=Fi.dot(na),l=Ni.dot(na);if(c<=0&&l<=0)return e.copy(i);ia.subVectors(t,r);const h=Fi.dot(ia),d=Ni.dot(ia);if(h>=0&&d<=h)return e.copy(r);const m=c*d-h*l;if(m<=0&&c>=0&&h<=0)return a=c/(c-h),e.copy(i).addScaledVector(Fi,a);ra.subVectors(t,s);const f=Fi.dot(ra),g=Ni.dot(ra);if(g>=0&&f<=g)return e.copy(s);const v=f*l-c*g;if(v<=0&&l>=0&&g<=0)return o=l/(l-g),e.copy(i).addScaledVector(Ni,o);const p=h*g-f*d;if(p<=0&&d-h>=0&&f-g>=0)return pl.subVectors(s,r),o=(d-h)/(d-h+(f-g)),e.copy(r).addScaledVector(pl,o);const u=1/(p+v+m);return a=v*u,o=m*u,e.copy(i).addScaledVector(Fi,a).addScaledVector(Ni,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const Uc={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Vn={h:0,s:0,l:0},$r={h:0,s:0,l:0};function la(n,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?n+(t-n)*6*e:e<1/2?t:e<2/3?n+(t-n)*6*(2/3-e):n}class kt{constructor(t,e,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,i)}set(t,e,i){if(e===void 0&&i===void 0){const r=t;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(t,e,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=De){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,re.colorSpaceToWorking(this,e),this}setRGB(t,e,i,r=re.workingColorSpace){return this.r=t,this.g=e,this.b=i,re.colorSpaceToWorking(this,r),this}setHSL(t,e,i,r=re.workingColorSpace){if(t=Uo(t,1),e=Qt(e,0,1),i=Qt(i,0,1),e===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+e):i+e-i*e,a=2*i-s;this.r=la(a,s,t+1/3),this.g=la(a,s,t),this.b=la(a,s,t-1/3)}return re.colorSpaceToWorking(this,r),this}setStyle(t,e=De){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(t)){let s;const a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,e);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,e);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(t)){const s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(s,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=De){const i=Uc[t.toLowerCase()];return i!==void 0?this.setHex(i,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Nn(t.r),this.g=Nn(t.g),this.b=Nn(t.b),this}copyLinearToSRGB(t){return this.r=ji(t.r),this.g=ji(t.g),this.b=ji(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=De){return re.workingToColorSpace(Ie.copy(this),t),Math.round(Qt(Ie.r*255,0,255))*65536+Math.round(Qt(Ie.g*255,0,255))*256+Math.round(Qt(Ie.b*255,0,255))}getHexString(t=De){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=re.workingColorSpace){re.workingToColorSpace(Ie.copy(this),e);const i=Ie.r,r=Ie.g,s=Ie.b,a=Math.max(i,r,s),o=Math.min(i,r,s);let c,l;const h=(o+a)/2;if(o===a)c=0,l=0;else{const d=a-o;switch(l=h<=.5?d/(a+o):d/(2-a-o),a){case i:c=(r-s)/d+(r<s?6:0);break;case r:c=(s-i)/d+2;break;case s:c=(i-r)/d+4;break}c/=6}return t.h=c,t.s=l,t.l=h,t}getRGB(t,e=re.workingColorSpace){return re.workingToColorSpace(Ie.copy(this),e),t.r=Ie.r,t.g=Ie.g,t.b=Ie.b,t}getStyle(t=De){re.workingToColorSpace(Ie.copy(this),t);const e=Ie.r,i=Ie.g,r=Ie.b;return t!==De?`color(${t} ${e.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(t,e,i){return this.getHSL(Vn),this.setHSL(Vn.h+t,Vn.s+e,Vn.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,i){return this.r=t.r+(e.r-t.r)*i,this.g=t.g+(e.g-t.g)*i,this.b=t.b+(e.b-t.b)*i,this}lerpHSL(t,e){this.getHSL(Vn),t.getHSL($r);const i=xr(Vn.h,$r.h,e),r=xr(Vn.s,$r.s,e),s=xr(Vn.l,$r.l,e);return this.setHSL(i,r,s),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,i=this.g,r=this.b,s=t.elements;return this.r=s[0]*e+s[3]*i+s[6]*r,this.g=s[1]*e+s[4]*i+s[7]*r,this.b=s[2]*e+s[5]*i+s[8]*r,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ie=new kt;kt.NAMES=Uc;let zu=0;class Ti extends bi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:zu++}),this.uuid=Fn(),this.name="",this.type="Material",this.blending=xi,this.side=ei,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Aa,this.blendDst=wa,this.blendEquation=mi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new kt(0,0,0),this.blendAlpha=0,this.depthFunc=Qi,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=tl,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=wi,this.stencilZFail=wi,this.stencilZPass=wi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const i=t[e];if(i===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const r=this[e];if(r===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[e]=i}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==xi&&(i.blending=this.blending),this.side!==ei&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Aa&&(i.blendSrc=this.blendSrc),this.blendDst!==wa&&(i.blendDst=this.blendDst),this.blendEquation!==mi&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Qi&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==tl&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==wi&&(i.stencilFail=this.stencilFail),this.stencilZFail!==wi&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==wi&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const a=[];for(const o in s){const c=s[o];delete c.metadata,a.push(c)}return a}if(e){const s=r(t.textures),a=r(t.images);s.length>0&&(i.textures=s),a.length>0&&(i.images=a)}return i}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let i=null;if(e!==null){const r=e.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=e[s].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class Fr extends Ti{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new kt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Bn,this.combine=Mc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const ye=new F,jr=new Bt;let ku=0;class ne{constructor(t,e,i=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:ku++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=i,this.usage=po,this.updateRanges=[],this.gpuType=Un,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,i){t*=this.itemSize,i*=e.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[t+r]=e.array[i+r];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,i=this.count;e<i;e++)jr.fromBufferAttribute(this,e),jr.applyMatrix3(t),this.setXY(e,jr.x,jr.y);else if(this.itemSize===3)for(let e=0,i=this.count;e<i;e++)ye.fromBufferAttribute(this,e),ye.applyMatrix3(t),this.setXYZ(e,ye.x,ye.y,ye.z);return this}applyMatrix4(t){for(let e=0,i=this.count;e<i;e++)ye.fromBufferAttribute(this,e),ye.applyMatrix4(t),this.setXYZ(e,ye.x,ye.y,ye.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)ye.fromBufferAttribute(this,e),ye.applyNormalMatrix(t),this.setXYZ(e,ye.x,ye.y,ye.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)ye.fromBufferAttribute(this,e),ye.transformDirection(t),this.setXYZ(e,ye.x,ye.y,ye.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let i=this.array[t*this.itemSize+e];return this.normalized&&(i=fn(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=oe(i,this.array)),this.array[t*this.itemSize+e]=i,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=fn(e,this.array)),e}setX(t,e){return this.normalized&&(e=oe(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=fn(e,this.array)),e}setY(t,e){return this.normalized&&(e=oe(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=fn(e,this.array)),e}setZ(t,e){return this.normalized&&(e=oe(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=fn(e,this.array)),e}setW(t,e){return this.normalized&&(e=oe(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,i){return t*=this.itemSize,this.normalized&&(e=oe(e,this.array),i=oe(i,this.array)),this.array[t+0]=e,this.array[t+1]=i,this}setXYZ(t,e,i,r){return t*=this.itemSize,this.normalized&&(e=oe(e,this.array),i=oe(i,this.array),r=oe(r,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=r,this}setXYZW(t,e,i,r,s){return t*=this.itemSize,this.normalized&&(e=oe(e,this.array),i=oe(i,this.array),r=oe(r,this.array),s=oe(s,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=r,this.array[t+3]=s,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==po&&(t.usage=this.usage),t}}class Fc extends ne{constructor(t,e,i){super(new Uint16Array(t),e,i)}}class Nc extends ne{constructor(t,e,i){super(new Uint32Array(t),e,i)}}class we extends ne{constructor(t,e,i){super(new Float32Array(t),e,i)}}let Hu=0;const Qe=new _e,ca=new Ue,Oi=new F,$e=new Lr,cr=new Lr,Pe=new F;class ae extends bi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Hu++}),this.uuid=Fn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Lc(t)?Nc:Fc)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,i=0){this.groups.push({start:t,count:e,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new $t().getNormalMatrix(t);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(t),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Qe.makeRotationFromQuaternion(t),this.applyMatrix4(Qe),this}rotateX(t){return Qe.makeRotationX(t),this.applyMatrix4(Qe),this}rotateY(t){return Qe.makeRotationY(t),this.applyMatrix4(Qe),this}rotateZ(t){return Qe.makeRotationZ(t),this.applyMatrix4(Qe),this}translate(t,e,i){return Qe.makeTranslation(t,e,i),this.applyMatrix4(Qe),this}scale(t,e,i){return Qe.makeScale(t,e,i),this.applyMatrix4(Qe),this}lookAt(t){return ca.lookAt(t),ca.updateMatrix(),this.applyMatrix4(ca.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Oi).negate(),this.translate(Oi.x,Oi.y,Oi.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const i=[];for(let r=0,s=t.length;r<s;r++){const a=t[r];i.push(a.x,a.y,a.z||0)}this.setAttribute("position",new we(i,3))}else{const i=Math.min(t.length,e.count);for(let r=0;r<i;r++){const s=t[r];e.setXYZ(r,s.x,s.y,s.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Lr);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new F(-1/0,-1/0,-1/0),new F(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let i=0,r=e.length;i<r;i++){const s=e[i];$e.setFromBufferAttribute(s),this.morphTargetsRelative?(Pe.addVectors(this.boundingBox.min,$e.min),this.boundingBox.expandByPoint(Pe),Pe.addVectors(this.boundingBox.max,$e.max),this.boundingBox.expandByPoint(Pe)):(this.boundingBox.expandByPoint($e.min),this.boundingBox.expandByPoint($e.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ir);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new F,1/0);return}if(t){const i=this.boundingSphere.center;if($e.setFromBufferAttribute(t),e)for(let s=0,a=e.length;s<a;s++){const o=e[s];cr.setFromBufferAttribute(o),this.morphTargetsRelative?(Pe.addVectors($e.min,cr.min),$e.expandByPoint(Pe),Pe.addVectors($e.max,cr.max),$e.expandByPoint(Pe)):($e.expandByPoint(cr.min),$e.expandByPoint(cr.max))}$e.getCenter(i);let r=0;for(let s=0,a=t.count;s<a;s++)Pe.fromBufferAttribute(t,s),r=Math.max(r,i.distanceToSquared(Pe));if(e)for(let s=0,a=e.length;s<a;s++){const o=e[s],c=this.morphTargetsRelative;for(let l=0,h=o.count;l<h;l++)Pe.fromBufferAttribute(o,l),c&&(Oi.fromBufferAttribute(t,l),Pe.add(Oi)),r=Math.max(r,i.distanceToSquared(Pe))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.position,r=e.normal,s=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new ne(new Float32Array(4*i.count),4));const a=this.getAttribute("tangent"),o=[],c=[];for(let P=0;P<i.count;P++)o[P]=new F,c[P]=new F;const l=new F,h=new F,d=new F,m=new Bt,f=new Bt,g=new Bt,v=new F,p=new F;function u(P,_,x){l.fromBufferAttribute(i,P),h.fromBufferAttribute(i,_),d.fromBufferAttribute(i,x),m.fromBufferAttribute(s,P),f.fromBufferAttribute(s,_),g.fromBufferAttribute(s,x),h.sub(l),d.sub(l),f.sub(m),g.sub(m);const R=1/(f.x*g.y-g.x*f.y);isFinite(R)&&(v.copy(h).multiplyScalar(g.y).addScaledVector(d,-f.y).multiplyScalar(R),p.copy(d).multiplyScalar(f.x).addScaledVector(h,-g.x).multiplyScalar(R),o[P].add(v),o[_].add(v),o[x].add(v),c[P].add(p),c[_].add(p),c[x].add(p))}let b=this.groups;b.length===0&&(b=[{start:0,count:t.count}]);for(let P=0,_=b.length;P<_;++P){const x=b[P],R=x.start,D=x.count;for(let N=R,q=R+D;N<q;N+=3)u(t.getX(N+0),t.getX(N+1),t.getX(N+2))}const S=new F,M=new F,T=new F,E=new F;function w(P){T.fromBufferAttribute(r,P),E.copy(T);const _=o[P];S.copy(_),S.sub(T.multiplyScalar(T.dot(_))).normalize(),M.crossVectors(E,_);const R=M.dot(c[P])<0?-1:1;a.setXYZW(P,S.x,S.y,S.z,R)}for(let P=0,_=b.length;P<_;++P){const x=b[P],R=x.start,D=x.count;for(let N=R,q=R+D;N<q;N+=3)w(t.getX(N+0)),w(t.getX(N+1)),w(t.getX(N+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new ne(new Float32Array(e.count*3),3),this.setAttribute("normal",i);else for(let m=0,f=i.count;m<f;m++)i.setXYZ(m,0,0,0);const r=new F,s=new F,a=new F,o=new F,c=new F,l=new F,h=new F,d=new F;if(t)for(let m=0,f=t.count;m<f;m+=3){const g=t.getX(m+0),v=t.getX(m+1),p=t.getX(m+2);r.fromBufferAttribute(e,g),s.fromBufferAttribute(e,v),a.fromBufferAttribute(e,p),h.subVectors(a,s),d.subVectors(r,s),h.cross(d),o.fromBufferAttribute(i,g),c.fromBufferAttribute(i,v),l.fromBufferAttribute(i,p),o.add(h),c.add(h),l.add(h),i.setXYZ(g,o.x,o.y,o.z),i.setXYZ(v,c.x,c.y,c.z),i.setXYZ(p,l.x,l.y,l.z)}else for(let m=0,f=e.count;m<f;m+=3)r.fromBufferAttribute(e,m+0),s.fromBufferAttribute(e,m+1),a.fromBufferAttribute(e,m+2),h.subVectors(a,s),d.subVectors(r,s),h.cross(d),i.setXYZ(m+0,h.x,h.y,h.z),i.setXYZ(m+1,h.x,h.y,h.z),i.setXYZ(m+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,i=t.count;e<i;e++)Pe.fromBufferAttribute(t,e),Pe.normalize(),t.setXYZ(e,Pe.x,Pe.y,Pe.z)}toNonIndexed(){function t(o,c){const l=o.array,h=o.itemSize,d=o.normalized,m=new l.constructor(c.length*h);let f=0,g=0;for(let v=0,p=c.length;v<p;v++){o.isInterleavedBufferAttribute?f=c[v]*o.data.stride+o.offset:f=c[v]*h;for(let u=0;u<h;u++)m[g++]=l[f++]}return new ne(m,h,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new ae,i=this.index.array,r=this.attributes;for(const o in r){const c=r[o],l=t(c,i);e.setAttribute(o,l)}const s=this.morphAttributes;for(const o in s){const c=[],l=s[o];for(let h=0,d=l.length;h<d;h++){const m=l[h],f=t(m,i);c.push(f)}e.morphAttributes[o]=c}e.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,c=a.length;o<c;o++){const l=a[o];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(t[l]=c[l]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const i=this.attributes;for(const c in i){const l=i[c];t.data.attributes[c]=l.toJSON(t.data)}const r={};let s=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],h=[];for(let d=0,m=l.length;d<m;d++){const f=l[d];h.push(f.toJSON(t.data))}h.length>0&&(r[c]=h,s=!0)}s&&(t.data.morphAttributes=r,t.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(t.data.boundingSphere=o.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const i=t.index;i!==null&&this.setIndex(i.clone());const r=t.attributes;for(const l in r){const h=r[l];this.setAttribute(l,h.clone(e))}const s=t.morphAttributes;for(const l in s){const h=[],d=s[l];for(let m=0,f=d.length;m<f;m++)h.push(d[m].clone(e));this.morphAttributes[l]=h}this.morphTargetsRelative=t.morphTargetsRelative;const a=t.groups;for(let l=0,h=a.length;l<h;l++){const d=a[l];this.addGroup(d.start,d.count,d.materialIndex)}const o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());const c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const ml=new _e,li=new Ur,Kr=new Ir,gl=new F,Zr=new F,Jr=new F,Qr=new F,ha=new F,ts=new F,_l=new F,es=new F;class sn extends Ue{constructor(t=new ae,e=new Fr){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const r=e[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(t,e){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,a=i.morphTargetsRelative;e.fromBufferAttribute(r,t);const o=this.morphTargetInfluences;if(s&&o){ts.set(0,0,0);for(let c=0,l=s.length;c<l;c++){const h=o[c],d=s[c];h!==0&&(ha.fromBufferAttribute(d,t),a?ts.addScaledVector(ha,h):ts.addScaledVector(ha.sub(e),h))}e.add(ts)}return e}raycast(t,e){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Kr.copy(i.boundingSphere),Kr.applyMatrix4(s),li.copy(t.ray).recast(t.near),!(Kr.containsPoint(li.origin)===!1&&(li.intersectSphere(Kr,gl)===null||li.origin.distanceToSquared(gl)>(t.far-t.near)**2))&&(ml.copy(s).invert(),li.copy(t.ray).applyMatrix4(ml),!(i.boundingBox!==null&&li.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,e,li)))}_computeIntersections(t,e,i){let r;const s=this.geometry,a=this.material,o=s.index,c=s.attributes.position,l=s.attributes.uv,h=s.attributes.uv1,d=s.attributes.normal,m=s.groups,f=s.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,v=m.length;g<v;g++){const p=m[g],u=a[p.materialIndex],b=Math.max(p.start,f.start),S=Math.min(o.count,Math.min(p.start+p.count,f.start+f.count));for(let M=b,T=S;M<T;M+=3){const E=o.getX(M),w=o.getX(M+1),P=o.getX(M+2);r=ns(this,u,t,i,l,h,d,E,w,P),r&&(r.faceIndex=Math.floor(M/3),r.face.materialIndex=p.materialIndex,e.push(r))}}else{const g=Math.max(0,f.start),v=Math.min(o.count,f.start+f.count);for(let p=g,u=v;p<u;p+=3){const b=o.getX(p),S=o.getX(p+1),M=o.getX(p+2);r=ns(this,a,t,i,l,h,d,b,S,M),r&&(r.faceIndex=Math.floor(p/3),e.push(r))}}else if(c!==void 0)if(Array.isArray(a))for(let g=0,v=m.length;g<v;g++){const p=m[g],u=a[p.materialIndex],b=Math.max(p.start,f.start),S=Math.min(c.count,Math.min(p.start+p.count,f.start+f.count));for(let M=b,T=S;M<T;M+=3){const E=M,w=M+1,P=M+2;r=ns(this,u,t,i,l,h,d,E,w,P),r&&(r.faceIndex=Math.floor(M/3),r.face.materialIndex=p.materialIndex,e.push(r))}}else{const g=Math.max(0,f.start),v=Math.min(c.count,f.start+f.count);for(let p=g,u=v;p<u;p+=3){const b=p,S=p+1,M=p+2;r=ns(this,a,t,i,l,h,d,b,S,M),r&&(r.faceIndex=Math.floor(p/3),e.push(r))}}}}function Gu(n,t,e,i,r,s,a,o){let c;if(t.side===We?c=i.intersectTriangle(a,s,r,!0,o):c=i.intersectTriangle(r,s,a,t.side===ei,o),c===null)return null;es.copy(o),es.applyMatrix4(n.matrixWorld);const l=e.ray.origin.distanceTo(es);return l<e.near||l>e.far?null:{distance:l,point:es.clone(),object:n}}function ns(n,t,e,i,r,s,a,o,c,l){n.getVertexPosition(o,Zr),n.getVertexPosition(c,Jr),n.getVertexPosition(l,Qr);const h=Gu(n,t,e,i,Zr,Jr,Qr,_l);if(h){const d=new F;rn.getBarycoord(_l,Zr,Jr,Qr,d),r&&(h.uv=rn.getInterpolatedAttribute(r,o,c,l,d,new Bt)),s&&(h.uv1=rn.getInterpolatedAttribute(s,o,c,l,d,new Bt)),a&&(h.normal=rn.getInterpolatedAttribute(a,o,c,l,d,new F),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));const m={a:o,b:c,c:l,normal:new F,materialIndex:0};rn.getNormal(Zr,Jr,Qr,m.normal),h.face=m,h.barycoord=d}return h}class Nr extends ae{constructor(t=1,e=1,i=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:i,widthSegments:r,heightSegments:s,depthSegments:a};const o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);const c=[],l=[],h=[],d=[];let m=0,f=0;g("z","y","x",-1,-1,i,e,t,a,s,0),g("z","y","x",1,-1,i,e,-t,a,s,1),g("x","z","y",1,1,t,i,e,r,a,2),g("x","z","y",1,-1,t,i,-e,r,a,3),g("x","y","z",1,-1,t,e,i,r,s,4),g("x","y","z",-1,-1,t,e,-i,r,s,5),this.setIndex(c),this.setAttribute("position",new we(l,3)),this.setAttribute("normal",new we(h,3)),this.setAttribute("uv",new we(d,2));function g(v,p,u,b,S,M,T,E,w,P,_){const x=M/w,R=T/P,D=M/2,N=T/2,q=E/2,B=w+1,V=P+1;let Y=0,z=0;const I=new F;for(let G=0;G<V;G++){const Q=G*R-N;for(let nt=0;nt<B;nt++){const Lt=nt*x-D;I[v]=Lt*b,I[p]=Q*S,I[u]=q,l.push(I.x,I.y,I.z),I[v]=0,I[p]=0,I[u]=E>0?1:-1,h.push(I.x,I.y,I.z),d.push(nt/w),d.push(1-G/P),Y+=1}}for(let G=0;G<P;G++)for(let Q=0;Q<w;Q++){const nt=m+Q+B*G,Lt=m+Q+B*(G+1),zt=m+(Q+1)+B*(G+1),Wt=m+(Q+1)+B*G;c.push(nt,Lt,Wt),c.push(Lt,zt,Wt),z+=6}o.addGroup(f,z,_),f+=z,m+=Y}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Nr(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function ir(n){const t={};for(const e in n){t[e]={};for(const i in n[e]){const r=n[e][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][i]=null):t[e][i]=r.clone():Array.isArray(r)?t[e][i]=r.slice():t[e][i]=r}}return t}function Oe(n){const t={};for(let e=0;e<n.length;e++){const i=ir(n[e]);for(const r in i)t[r]=i[r]}return t}function Vu(n){const t=[];for(let e=0;e<n.length;e++)t.push(n[e].clone());return t}function Oc(n){const t=n.getRenderTarget();return t===null?n.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:re.workingColorSpace}const Wu={clone:ir,merge:Oe};var Xu=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Yu=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ii extends Ti{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Xu,this.fragmentShader=Yu,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=ir(t.uniforms),this.uniformsGroups=Vu(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const r in this.uniforms){const a=this.uniforms[r].value;a&&a.isTexture?e.uniforms[r]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[r]={type:"m4",value:a.toArray()}:e.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(e.extensions=i),e}}class Bc extends Ue{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new _e,this.projectionMatrix=new _e,this.projectionMatrixInverse=new _e,this.coordinateSystem=yn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Wn=new F,xl=new Bt,vl=new Bt;class en extends Bc{constructor(t=50,e=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=Tr*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(_r*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Tr*2*Math.atan(Math.tan(_r*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,i){Wn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Wn.x,Wn.y).multiplyScalar(-t/Wn.z),Wn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Wn.x,Wn.y).multiplyScalar(-t/Wn.z)}getViewSize(t,e){return this.getViewBounds(t,xl,vl),e.subVectors(vl,xl)}setViewOffset(t,e,i,r,s,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(_r*.5*this.fov)/this.zoom,i=2*e,r=this.aspect*i,s=-.5*r;const a=this.view;if(this.view!==null&&this.view.enabled){const c=a.fullWidth,l=a.fullHeight;s+=a.offsetX*r/c,e-=a.offsetY*i/l,r*=a.width/c,i*=a.height/l}const o=this.filmOffset;o!==0&&(s+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,e,e-i,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const Bi=-90,zi=1;class qu extends Ue{constructor(t,e,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new en(Bi,zi,t,e);r.layers=this.layers,this.add(r);const s=new en(Bi,zi,t,e);s.layers=this.layers,this.add(s);const a=new en(Bi,zi,t,e);a.layers=this.layers,this.add(a);const o=new en(Bi,zi,t,e);o.layers=this.layers,this.add(o);const c=new en(Bi,zi,t,e);c.layers=this.layers,this.add(c);const l=new en(Bi,zi,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[i,r,s,a,o,c]=e;for(const l of e)this.remove(l);if(t===yn)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===ws)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const l of e)this.add(l),l.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,c,l,h]=this.children,d=t.getRenderTarget(),m=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;const v=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,t.setRenderTarget(i,0,r),t.render(e,s),t.setRenderTarget(i,1,r),t.render(e,a),t.setRenderTarget(i,2,r),t.render(e,o),t.setRenderTarget(i,3,r),t.render(e,c),t.setRenderTarget(i,4,r),t.render(e,l),i.texture.generateMipmaps=v,t.setRenderTarget(i,5,r),t.render(e,h),t.setRenderTarget(d,m,f),t.xr.enabled=g,i.texture.needsPMREMUpdate=!0}}class zc extends ke{constructor(t=[],e=tr,i,r,s,a,o,c,l,h){super(t,e,i,r,s,a,o,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class $u extends yi{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const i={width:t,height:t,depth:1},r=[i,i,i,i,i,i];this.texture=new zc(r),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new Nr(5,5,5),s=new ii({name:"CubemapFromEquirect",uniforms:ir(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:We,blending:Jn});s.uniforms.tEquirect.value=e;const a=new sn(r,s),o=e.minFilter;return e.minFilter===jn&&(e.minFilter=dn),new qu(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e=!0,i=!0,r=!0){const s=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,i,r);t.setRenderTarget(s)}}class ze extends Ue{constructor(){super(),this.isGroup=!0,this.type="Group"}}const ju={type:"move"};class ua{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ze,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ze,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new F,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new F),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ze,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new F,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new F),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const i of t.hand.values())this._getHandJoint(e,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,i){let r=null,s=null,a=null;const o=this._targetRay,c=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){a=!0;for(const v of t.hand.values()){const p=e.getJointPose(v,i),u=this._getHandJoint(l,v);p!==null&&(u.matrix.fromArray(p.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.matrixWorldNeedsUpdate=!0,u.jointRadius=p.radius),u.visible=p!==null}const h=l.joints["index-finger-tip"],d=l.joints["thumb-tip"],m=h.position.distanceTo(d.position),f=.02,g=.005;l.inputState.pinching&&m>f+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&m<=f-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(s=e.getPose(t.gripSpace,i),s!==null&&(c.matrix.fromArray(s.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,s.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(s.linearVelocity)):c.hasLinearVelocity=!1,s.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(s.angularVelocity)):c.hasAngularVelocity=!1));o!==null&&(r=e.getPose(t.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(ju)))}return o!==null&&(o.visible=r!==null),c!==null&&(c.visible=s!==null),l!==null&&(l.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const i=new ze;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[e.jointName]=i,t.add(i)}return t.joints[e.jointName]}}class Oo{constructor(t,e=25e-5){this.isFogExp2=!0,this.name="",this.color=new kt(t),this.density=e}clone(){return new Oo(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class Ku extends Ue{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Bn,this.environmentIntensity=1,this.environmentRotation=new Bn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class Zu{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=po,this.updateRanges=[],this.version=0,this.uuid=Fn()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,i){t*=this.stride,i*=e.stride;for(let r=0,s=this.stride;r<s;r++)this.array[t+r]=e.array[i+r];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Fn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(e,this.stride);return i.setUsage(this.usage),i}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Fn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Ne=new F;class Cs{constructor(t,e,i,r=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=i,this.normalized=r}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,i=this.data.count;e<i;e++)Ne.fromBufferAttribute(this,e),Ne.applyMatrix4(t),this.setXYZ(e,Ne.x,Ne.y,Ne.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)Ne.fromBufferAttribute(this,e),Ne.applyNormalMatrix(t),this.setXYZ(e,Ne.x,Ne.y,Ne.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)Ne.fromBufferAttribute(this,e),Ne.transformDirection(t),this.setXYZ(e,Ne.x,Ne.y,Ne.z);return this}getComponent(t,e){let i=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(i=fn(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=oe(i,this.array)),this.data.array[t*this.data.stride+this.offset+e]=i,this}setX(t,e){return this.normalized&&(e=oe(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=oe(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=oe(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=oe(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=fn(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=fn(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=fn(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=fn(e,this.array)),e}setXY(t,e,i){return t=t*this.data.stride+this.offset,this.normalized&&(e=oe(e,this.array),i=oe(i,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this}setXYZ(t,e,i,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=oe(e,this.array),i=oe(i,this.array),r=oe(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this.data.array[t+2]=r,this}setXYZW(t,e,i,r,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=oe(e,this.array),i=oe(i,this.array),r=oe(r,this.array),s=oe(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this.data.array[t+2]=r,this.data.array[t+3]=s,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let i=0;i<this.count;i++){const r=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)e.push(this.data.array[r+s])}return new ne(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new Cs(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let i=0;i<this.count;i++){const r=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)e.push(this.data.array[r+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class ge extends Ti{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new kt(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}let ki;const hr=new F,Hi=new F,Gi=new F,Vi=new Bt,ur=new Bt,kc=new _e,is=new F,fr=new F,rs=new F,Ml=new Bt,fa=new Bt,yl=new Bt;class ve extends Ue{constructor(t=new ge){if(super(),this.isSprite=!0,this.type="Sprite",ki===void 0){ki=new ae;const e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new Zu(e,5);ki.setIndex([0,1,2,0,2,3]),ki.setAttribute("position",new Cs(i,3,0,!1)),ki.setAttribute("uv",new Cs(i,2,3,!1))}this.geometry=ki,this.material=t,this.center=new Bt(.5,.5),this.count=1}raycast(t,e){t.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Hi.setFromMatrixScale(this.matrixWorld),kc.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),Gi.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Hi.multiplyScalar(-Gi.z);const i=this.material.rotation;let r,s;i!==0&&(s=Math.cos(i),r=Math.sin(i));const a=this.center;ss(is.set(-.5,-.5,0),Gi,a,Hi,r,s),ss(fr.set(.5,-.5,0),Gi,a,Hi,r,s),ss(rs.set(.5,.5,0),Gi,a,Hi,r,s),Ml.set(0,0),fa.set(1,0),yl.set(1,1);let o=t.ray.intersectTriangle(is,fr,rs,!1,hr);if(o===null&&(ss(fr.set(-.5,.5,0),Gi,a,Hi,r,s),fa.set(0,1),o=t.ray.intersectTriangle(is,rs,fr,!1,hr),o===null))return;const c=t.ray.origin.distanceTo(hr);c<t.near||c>t.far||e.push({distance:c,point:hr.clone(),uv:rn.getInterpolation(hr,is,fr,rs,Ml,fa,yl,new Bt),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}}function ss(n,t,e,i,r,s){Vi.subVectors(n,e).addScalar(.5).multiply(i),r!==void 0?(ur.x=s*Vi.x-r*Vi.y,ur.y=r*Vi.x+s*Vi.y):ur.copy(Vi),n.copy(t),n.x+=ur.x,n.y+=ur.y,n.applyMatrix4(kc)}const da=new F,Ju=new F,Qu=new $t;class Xn{constructor(t=new F(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,i,r){return this.normal.set(t,e,i),this.constant=r,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,i){const r=da.subVectors(i,e).cross(Ju.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(r,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const i=t.delta(da),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const s=-(t.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:e.copy(t.start).addScaledVector(i,s)}intersectsLine(t){const e=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return e<0&&i>0||i<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const i=e||Qu.getNormalMatrix(t),r=this.coplanarPoint(da).applyMatrix4(t),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ci=new Ir,tf=new Bt(.5,.5),as=new F;class Hc{constructor(t=new Xn,e=new Xn,i=new Xn,r=new Xn,s=new Xn,a=new Xn){this.planes=[t,e,i,r,s,a]}set(t,e,i,r,s,a){const o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(i),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(t){const e=this.planes;for(let i=0;i<6;i++)e[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,e=yn,i=!1){const r=this.planes,s=t.elements,a=s[0],o=s[1],c=s[2],l=s[3],h=s[4],d=s[5],m=s[6],f=s[7],g=s[8],v=s[9],p=s[10],u=s[11],b=s[12],S=s[13],M=s[14],T=s[15];if(r[0].setComponents(l-a,f-h,u-g,T-b).normalize(),r[1].setComponents(l+a,f+h,u+g,T+b).normalize(),r[2].setComponents(l+o,f+d,u+v,T+S).normalize(),r[3].setComponents(l-o,f-d,u-v,T-S).normalize(),i)r[4].setComponents(c,m,p,M).normalize(),r[5].setComponents(l-c,f-m,u-p,T-M).normalize();else if(r[4].setComponents(l-c,f-m,u-p,T-M).normalize(),e===yn)r[5].setComponents(l+c,f+m,u+p,T+M).normalize();else if(e===ws)r[5].setComponents(c,m,p,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),ci.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),ci.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(ci)}intersectsSprite(t){ci.center.set(0,0,0);const e=tf.distanceTo(t.center);return ci.radius=.7071067811865476+e,ci.applyMatrix4(t.matrixWorld),this.intersectsSphere(ci)}intersectsSphere(t){const e=this.planes,i=t.center,r=-t.radius;for(let s=0;s<6;s++)if(e[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(t){const e=this.planes;for(let i=0;i<6;i++){const r=e[i];if(as.x=r.normal.x>0?t.max.x:t.min.x,as.y=r.normal.y>0?t.max.y:t.min.y,as.z=r.normal.z>0?t.max.z:t.min.z,r.distanceToPoint(as)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let i=0;i<6;i++)if(e[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Kn extends Ti{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new kt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const Ps=new F,Ds=new F,Sl=new _e,dr=new Ur,os=new Ir,pa=new F,El=new F;class Ki extends Ue{constructor(t=new ae,e=new Kn){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,i=[0];for(let r=1,s=e.count;r<s;r++)Ps.fromBufferAttribute(e,r-1),Ds.fromBufferAttribute(e,r),i[r]=i[r-1],i[r]+=Ps.distanceTo(Ds);t.setAttribute("lineDistance",new we(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const i=this.geometry,r=this.matrixWorld,s=t.params.Line.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),os.copy(i.boundingSphere),os.applyMatrix4(r),os.radius+=s,t.ray.intersectsSphere(os)===!1)return;Sl.copy(r).invert(),dr.copy(t.ray).applyMatrix4(Sl);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=this.isLineSegments?2:1,h=i.index,m=i.attributes.position;if(h!==null){const f=Math.max(0,a.start),g=Math.min(h.count,a.start+a.count);for(let v=f,p=g-1;v<p;v+=l){const u=h.getX(v),b=h.getX(v+1),S=ls(this,t,dr,c,u,b,v);S&&e.push(S)}if(this.isLineLoop){const v=h.getX(g-1),p=h.getX(f),u=ls(this,t,dr,c,v,p,g-1);u&&e.push(u)}}else{const f=Math.max(0,a.start),g=Math.min(m.count,a.start+a.count);for(let v=f,p=g-1;v<p;v+=l){const u=ls(this,t,dr,c,v,v+1,v);u&&e.push(u)}if(this.isLineLoop){const v=ls(this,t,dr,c,g-1,f,g-1);v&&e.push(v)}}}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const r=e[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function ls(n,t,e,i,r,s,a){const o=n.geometry.attributes.position;if(Ps.fromBufferAttribute(o,r),Ds.fromBufferAttribute(o,s),e.distanceSqToSegment(Ps,Ds,pa,El)>i)return;pa.applyMatrix4(n.matrixWorld);const l=t.ray.origin.distanceTo(pa);if(!(l<t.near||l>t.far))return{distance:l,point:El.clone().applyMatrix4(n.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:n}}const bl=new F,Tl=new F;class Gc extends Ki{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,i=[];for(let r=0,s=e.count;r<s;r+=2)bl.fromBufferAttribute(e,r),Tl.fromBufferAttribute(e,r+1),i[r]=r===0?0:i[r-1],i[r+1]=i[r]+bl.distanceTo(Tl);t.setAttribute("lineDistance",new we(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class ef extends Ki{constructor(t,e){super(t,e),this.isLineLoop=!0,this.type="LineLoop"}}class mn extends Ti{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new kt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const Al=new _e,mo=new Ur,cs=new Ir,hs=new F;class Sn extends Ue{constructor(t=new ae,e=new mn){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){const i=this.geometry,r=this.matrixWorld,s=t.params.Points.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),cs.copy(i.boundingSphere),cs.applyMatrix4(r),cs.radius+=s,t.ray.intersectsSphere(cs)===!1)return;Al.copy(r).invert(),mo.copy(t.ray).applyMatrix4(Al);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=i.index,d=i.attributes.position;if(l!==null){const m=Math.max(0,a.start),f=Math.min(l.count,a.start+a.count);for(let g=m,v=f;g<v;g++){const p=l.getX(g);hs.fromBufferAttribute(d,p),wl(hs,p,c,r,t,e,this)}}else{const m=Math.max(0,a.start),f=Math.min(d.count,a.start+a.count);for(let g=m,v=f;g<v;g++)hs.fromBufferAttribute(d,g),wl(hs,g,c,r,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const r=e[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function wl(n,t,e,i,r,s,a){const o=mo.distanceSqToPoint(n);if(o<e){const c=new F;mo.closestPointToPoint(n,c),c.applyMatrix4(i);const l=r.ray.origin.distanceTo(c);if(l<r.near||l>r.far)return;s.push({distance:l,distanceToRay:Math.sqrt(o),point:c,index:t,face:null,faceIndex:null,barycoord:null,object:a})}}class Fs extends ke{constructor(t,e,i,r,s,a,o,c,l){super(t,e,i,r,s,a,o,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Vc extends ke{constructor(t,e,i=Mi,r,s,a,o=_n,c=_n,l,h=Er,d=1){if(h!==Er&&h!==br)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const m={width:t,height:e,depth:d};super(m,r,s,a,o,c,h,i,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Fo(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}class Wc extends ke{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}}class Bo extends ae{constructor(t=[],e=[],i=1,r=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:i,detail:r};const s=[],a=[];o(r),l(i),h(),this.setAttribute("position",new we(s,3)),this.setAttribute("normal",new we(s.slice(),3)),this.setAttribute("uv",new we(a,2)),r===0?this.computeVertexNormals():this.normalizeNormals();function o(b){const S=new F,M=new F,T=new F;for(let E=0;E<e.length;E+=3)f(e[E+0],S),f(e[E+1],M),f(e[E+2],T),c(S,M,T,b)}function c(b,S,M,T){const E=T+1,w=[];for(let P=0;P<=E;P++){w[P]=[];const _=b.clone().lerp(M,P/E),x=S.clone().lerp(M,P/E),R=E-P;for(let D=0;D<=R;D++)D===0&&P===E?w[P][D]=_:w[P][D]=_.clone().lerp(x,D/R)}for(let P=0;P<E;P++)for(let _=0;_<2*(E-P)-1;_++){const x=Math.floor(_/2);_%2===0?(m(w[P][x+1]),m(w[P+1][x]),m(w[P][x])):(m(w[P][x+1]),m(w[P+1][x+1]),m(w[P+1][x]))}}function l(b){const S=new F;for(let M=0;M<s.length;M+=3)S.x=s[M+0],S.y=s[M+1],S.z=s[M+2],S.normalize().multiplyScalar(b),s[M+0]=S.x,s[M+1]=S.y,s[M+2]=S.z}function h(){const b=new F;for(let S=0;S<s.length;S+=3){b.x=s[S+0],b.y=s[S+1],b.z=s[S+2];const M=p(b)/2/Math.PI+.5,T=u(b)/Math.PI+.5;a.push(M,1-T)}g(),d()}function d(){for(let b=0;b<a.length;b+=6){const S=a[b+0],M=a[b+2],T=a[b+4],E=Math.max(S,M,T),w=Math.min(S,M,T);E>.9&&w<.1&&(S<.2&&(a[b+0]+=1),M<.2&&(a[b+2]+=1),T<.2&&(a[b+4]+=1))}}function m(b){s.push(b.x,b.y,b.z)}function f(b,S){const M=b*3;S.x=t[M+0],S.y=t[M+1],S.z=t[M+2]}function g(){const b=new F,S=new F,M=new F,T=new F,E=new Bt,w=new Bt,P=new Bt;for(let _=0,x=0;_<s.length;_+=9,x+=6){b.set(s[_+0],s[_+1],s[_+2]),S.set(s[_+3],s[_+4],s[_+5]),M.set(s[_+6],s[_+7],s[_+8]),E.set(a[x+0],a[x+1]),w.set(a[x+2],a[x+3]),P.set(a[x+4],a[x+5]),T.copy(b).add(S).add(M).divideScalar(3);const R=p(T);v(E,x+0,b,R),v(w,x+2,S,R),v(P,x+4,M,R)}}function v(b,S,M,T){T<0&&b.x===1&&(a[S]=b.x-1),M.x===0&&M.z===0&&(a[S]=T/2/Math.PI+.5)}function p(b){return Math.atan2(b.z,-b.x)}function u(b){return Math.atan2(-b.y,Math.sqrt(b.x*b.x+b.z*b.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Bo(t.vertices,t.indices,t.radius,t.details)}}class zo extends Bo{constructor(t=1,e=0){const i=(1+Math.sqrt(5))/2,r=[-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],s=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(r,s,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new zo(t.radius,t.detail)}}class Ns extends ae{constructor(t=1,e=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:i,heightSegments:r};const s=t/2,a=e/2,o=Math.floor(i),c=Math.floor(r),l=o+1,h=c+1,d=t/o,m=e/c,f=[],g=[],v=[],p=[];for(let u=0;u<h;u++){const b=u*m-a;for(let S=0;S<l;S++){const M=S*d-s;g.push(M,-b,0),v.push(0,0,1),p.push(S/o),p.push(1-u/c)}}for(let u=0;u<c;u++)for(let b=0;b<o;b++){const S=b+l*u,M=b+l*(u+1),T=b+1+l*(u+1),E=b+1+l*u;f.push(S,M,E),f.push(M,T,E)}this.setIndex(f),this.setAttribute("position",new we(g,3)),this.setAttribute("normal",new we(v,3)),this.setAttribute("uv",new we(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ns(t.width,t.height,t.widthSegments,t.heightSegments)}}class Os extends ae{constructor(t=1,e=32,i=16,r=0,s=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:i,phiStart:r,phiLength:s,thetaStart:a,thetaLength:o},e=Math.max(3,Math.floor(e)),i=Math.max(2,Math.floor(i));const c=Math.min(a+o,Math.PI);let l=0;const h=[],d=new F,m=new F,f=[],g=[],v=[],p=[];for(let u=0;u<=i;u++){const b=[],S=u/i;let M=0;u===0&&a===0?M=.5/e:u===i&&c===Math.PI&&(M=-.5/e);for(let T=0;T<=e;T++){const E=T/e;d.x=-t*Math.cos(r+E*s)*Math.sin(a+S*o),d.y=t*Math.cos(a+S*o),d.z=t*Math.sin(r+E*s)*Math.sin(a+S*o),g.push(d.x,d.y,d.z),m.copy(d).normalize(),v.push(m.x,m.y,m.z),p.push(E+M,1-S),b.push(l++)}h.push(b)}for(let u=0;u<i;u++)for(let b=0;b<e;b++){const S=h[u][b+1],M=h[u][b],T=h[u+1][b],E=h[u+1][b+1];(u!==0||a>0)&&f.push(S,M,E),(u!==i-1||c<Math.PI)&&f.push(M,T,E)}this.setIndex(f),this.setAttribute("position",new we(g,3)),this.setAttribute("normal",new we(v,3)),this.setAttribute("uv",new we(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Os(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class ko extends ae{constructor(t=1,e=.4,i=12,r=48,s=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:i,tubularSegments:r,arc:s},i=Math.floor(i),r=Math.floor(r);const a=[],o=[],c=[],l=[],h=new F,d=new F,m=new F;for(let f=0;f<=i;f++)for(let g=0;g<=r;g++){const v=g/r*s,p=f/i*Math.PI*2;d.x=(t+e*Math.cos(p))*Math.cos(v),d.y=(t+e*Math.cos(p))*Math.sin(v),d.z=e*Math.sin(p),o.push(d.x,d.y,d.z),h.x=t*Math.cos(v),h.y=t*Math.sin(v),m.subVectors(d,h).normalize(),c.push(m.x,m.y,m.z),l.push(g/r),l.push(f/i)}for(let f=1;f<=i;f++)for(let g=1;g<=r;g++){const v=(r+1)*f+g-1,p=(r+1)*(f-1)+g-1,u=(r+1)*(f-1)+g,b=(r+1)*f+g;a.push(v,p,b),a.push(p,u,b)}this.setIndex(a),this.setAttribute("position",new we(o,3)),this.setAttribute("normal",new we(c,3)),this.setAttribute("uv",new we(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ko(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class nf extends ae{constructor(t=null){if(super(),this.type="WireframeGeometry",this.parameters={geometry:t},t!==null){const e=[],i=new Set,r=new F,s=new F;if(t.index!==null){const a=t.attributes.position,o=t.index;let c=t.groups;c.length===0&&(c=[{start:0,count:o.count,materialIndex:0}]);for(let l=0,h=c.length;l<h;++l){const d=c[l],m=d.start,f=d.count;for(let g=m,v=m+f;g<v;g+=3)for(let p=0;p<3;p++){const u=o.getX(g+p),b=o.getX(g+(p+1)%3);r.fromBufferAttribute(a,u),s.fromBufferAttribute(a,b),Rl(r,s,i)===!0&&(e.push(r.x,r.y,r.z),e.push(s.x,s.y,s.z))}}}else{const a=t.attributes.position;for(let o=0,c=a.count/3;o<c;o++)for(let l=0;l<3;l++){const h=3*o+l,d=3*o+(l+1)%3;r.fromBufferAttribute(a,h),s.fromBufferAttribute(a,d),Rl(r,s,i)===!0&&(e.push(r.x,r.y,r.z),e.push(s.x,s.y,s.z))}}this.setAttribute("position",new we(e,3))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}}function Rl(n,t,e){const i=`${n.x},${n.y},${n.z}-${t.x},${t.y},${t.z}`,r=`${t.x},${t.y},${t.z}-${n.x},${n.y},${n.z}`;return e.has(i)===!0||e.has(r)===!0?!1:(e.add(i),e.add(r),!0)}class rf extends Ti{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Zh,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class sf extends Ti{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}class af extends Bc{constructor(t=-1,e=1,i=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=i,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,i,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-t,a=i+t,o=r+e,c=r-e;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=l*this.view.offsetX,a=s+l*this.view.width,o-=h*this.view.offsetY,c=o-h*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}class of extends en{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}const Cl=new _e;class lf{constructor(t,e,i=0,r=1/0){this.ray=new Ur(t,e),this.near=i,this.far=r,this.camera=null,this.layers=new No,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return Cl.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Cl),this}intersectObject(t,e=!0,i=[]){return go(t,this,i,e),i.sort(Pl),i}intersectObjects(t,e=!0,i=[]){for(let r=0,s=t.length;r<s;r++)go(t[r],this,i,e);return i.sort(Pl),i}}function Pl(n,t){return n.distance-t.distance}function go(n,t,e,i){let r=!0;if(n.layers.test(t.layers)&&n.raycast(t,e)===!1&&(r=!1),r===!0&&i===!0){const s=n.children;for(let a=0,o=s.length;a<o;a++)go(s[a],t,e,!0)}}class Dl{constructor(t=1,e=0,i=0){this.radius=t,this.phi=e,this.theta=i}set(t,e,i){return this.radius=t,this.phi=e,this.theta=i,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=Qt(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,i){return this.radius=Math.sqrt(t*t+e*e+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,i),this.phi=Math.acos(Qt(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class cf extends bi{constructor(t,e=null){super(),this.object=t,this.domElement=e,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(t){if(t===void 0){console.warn("THREE.Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=t}disconnect(){}dispose(){}update(){}}function Ll(n,t,e,i){const r=hf(i);switch(e){case wc:return n*t;case Cc:return n*t/r.components*r.byteLength;case Do:return n*t/r.components*r.byteLength;case Pc:return n*t*2/r.components*r.byteLength;case Lo:return n*t*2/r.components*r.byteLength;case Rc:return n*t*3/r.components*r.byteLength;case pn:return n*t*4/r.components*r.byteLength;case Io:return n*t*4/r.components*r.byteLength;case vs:case Ms:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case ys:case Ss:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case ka:case Ga:return Math.max(n,16)*Math.max(t,8)/4;case za:case Ha:return Math.max(n,8)*Math.max(t,8)/2;case Va:case Wa:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case Xa:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case Ya:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case qa:return Math.floor((n+4)/5)*Math.floor((t+3)/4)*16;case $a:return Math.floor((n+4)/5)*Math.floor((t+4)/5)*16;case ja:return Math.floor((n+5)/6)*Math.floor((t+4)/5)*16;case Ka:return Math.floor((n+5)/6)*Math.floor((t+5)/6)*16;case Za:return Math.floor((n+7)/8)*Math.floor((t+4)/5)*16;case Ja:return Math.floor((n+7)/8)*Math.floor((t+5)/6)*16;case Qa:return Math.floor((n+7)/8)*Math.floor((t+7)/8)*16;case to:return Math.floor((n+9)/10)*Math.floor((t+4)/5)*16;case eo:return Math.floor((n+9)/10)*Math.floor((t+5)/6)*16;case no:return Math.floor((n+9)/10)*Math.floor((t+7)/8)*16;case io:return Math.floor((n+9)/10)*Math.floor((t+9)/10)*16;case ro:return Math.floor((n+11)/12)*Math.floor((t+9)/10)*16;case so:return Math.floor((n+11)/12)*Math.floor((t+11)/12)*16;case ao:case oo:case lo:return Math.ceil(n/4)*Math.ceil(t/4)*16;case co:case ho:return Math.ceil(n/4)*Math.ceil(t/4)*8;case uo:case fo:return Math.ceil(n/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function hf(n){switch(n){case On:case Ec:return{byteLength:1,components:1};case yr:case bc:case Dr:return{byteLength:2,components:1};case Co:case Po:return{byteLength:2,components:4};case Mi:case Ro:case Un:return{byteLength:4,components:1};case Tc:case Ac:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:wo}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=wo);function Xc(){let n=null,t=!1,e=null,i=null;function r(s,a){e(s,a),i=n.requestAnimationFrame(r)}return{start:function(){t!==!0&&e!==null&&(i=n.requestAnimationFrame(r),t=!0)},stop:function(){n.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(s){e=s},setContext:function(s){n=s}}}function uf(n){const t=new WeakMap;function e(o,c){const l=o.array,h=o.usage,d=l.byteLength,m=n.createBuffer();n.bindBuffer(c,m),n.bufferData(c,l,h),o.onUploadCallback();let f;if(l instanceof Float32Array)f=n.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)f=n.HALF_FLOAT;else if(l instanceof Uint16Array)o.isFloat16BufferAttribute?f=n.HALF_FLOAT:f=n.UNSIGNED_SHORT;else if(l instanceof Int16Array)f=n.SHORT;else if(l instanceof Uint32Array)f=n.UNSIGNED_INT;else if(l instanceof Int32Array)f=n.INT;else if(l instanceof Int8Array)f=n.BYTE;else if(l instanceof Uint8Array)f=n.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)f=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:m,type:f,bytesPerElement:l.BYTES_PER_ELEMENT,version:o.version,size:d}}function i(o,c,l){const h=c.array,d=c.updateRanges;if(n.bindBuffer(l,o),d.length===0)n.bufferSubData(l,0,h);else{d.sort((f,g)=>f.start-g.start);let m=0;for(let f=1;f<d.length;f++){const g=d[m],v=d[f];v.start<=g.start+g.count+1?g.count=Math.max(g.count,v.start+v.count-g.start):(++m,d[m]=v)}d.length=m+1;for(let f=0,g=d.length;f<g;f++){const v=d[f];n.bufferSubData(l,v.start*h.BYTES_PER_ELEMENT,h,v.start,v.count)}c.clearUpdateRanges()}c.onUploadCallback()}function r(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);const c=t.get(o);c&&(n.deleteBuffer(c.buffer),t.delete(o))}function a(o,c){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const h=t.get(o);(!h||h.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const l=t.get(o);if(l===void 0)t.set(o,e(o,c));else if(l.version<o.version){if(l.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(l.buffer,o,c),l.version=o.version}}return{get:r,remove:s,update:a}}var ff=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,df=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,pf=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,mf=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,gf=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,_f=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,xf=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,vf=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Mf=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,yf=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Sf=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Ef=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,bf=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Tf=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Af=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,wf=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Rf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Cf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Pf=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Df=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Lf=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,If=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Uf=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,Ff=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Nf=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Of=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Bf=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,zf=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,kf=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Hf=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Gf="gl_FragColor = linearToOutputTexel( gl_FragColor );",Vf=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Wf=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Xf=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Yf=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,qf=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,$f=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,jf=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Kf=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Zf=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Jf=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Qf=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,td=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,ed=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,nd=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,id=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,rd=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,sd=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,ad=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,od=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,ld=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,cd=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,hd=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,ud=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,fd=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,dd=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,pd=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,md=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,gd=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,_d=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,xd=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,vd=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Md=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,yd=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Sd=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Ed=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,bd=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Td=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Ad=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,wd=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Rd=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Cd=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Pd=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Dd=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Ld=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Id=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Ud=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Fd=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Nd=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Od=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Bd=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,zd=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,kd=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Hd=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Gd=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Vd=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Wd=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Xd=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Yd=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,qd=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		float depth = unpackRGBAToDepth( texture2D( depths, uv ) );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			return step( depth, compare );
		#else
			return step( compare, depth );
		#endif
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow( sampler2D shadow, vec2 uv, float compare ) {
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			float hard_shadow = step( distribution.x, compare );
		#else
			float hard_shadow = step( compare, distribution.x );
		#endif
		if ( hard_shadow != 1.0 ) {
			float distance = compare - distribution.x;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,$d=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,jd=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Kd=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Zd=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Jd=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Qd=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,tp=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,ep=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,np=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,ip=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,rp=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,sp=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,ap=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,op=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,lp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,cp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,hp=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const up=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,fp=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,dp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,pp=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,mp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,gp=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,_p=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,xp=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,vp=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Mp=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,yp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Sp=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ep=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,bp=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Tp=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Ap=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,wp=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Rp=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Cp=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Pp=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Dp=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Lp=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Ip=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Up=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Fp=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Np=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Op=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Bp=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,zp=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,kp=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Hp=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Gp=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Vp=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Wp=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,jt={alphahash_fragment:ff,alphahash_pars_fragment:df,alphamap_fragment:pf,alphamap_pars_fragment:mf,alphatest_fragment:gf,alphatest_pars_fragment:_f,aomap_fragment:xf,aomap_pars_fragment:vf,batching_pars_vertex:Mf,batching_vertex:yf,begin_vertex:Sf,beginnormal_vertex:Ef,bsdfs:bf,iridescence_fragment:Tf,bumpmap_pars_fragment:Af,clipping_planes_fragment:wf,clipping_planes_pars_fragment:Rf,clipping_planes_pars_vertex:Cf,clipping_planes_vertex:Pf,color_fragment:Df,color_pars_fragment:Lf,color_pars_vertex:If,color_vertex:Uf,common:Ff,cube_uv_reflection_fragment:Nf,defaultnormal_vertex:Of,displacementmap_pars_vertex:Bf,displacementmap_vertex:zf,emissivemap_fragment:kf,emissivemap_pars_fragment:Hf,colorspace_fragment:Gf,colorspace_pars_fragment:Vf,envmap_fragment:Wf,envmap_common_pars_fragment:Xf,envmap_pars_fragment:Yf,envmap_pars_vertex:qf,envmap_physical_pars_fragment:rd,envmap_vertex:$f,fog_vertex:jf,fog_pars_vertex:Kf,fog_fragment:Zf,fog_pars_fragment:Jf,gradientmap_pars_fragment:Qf,lightmap_pars_fragment:td,lights_lambert_fragment:ed,lights_lambert_pars_fragment:nd,lights_pars_begin:id,lights_toon_fragment:sd,lights_toon_pars_fragment:ad,lights_phong_fragment:od,lights_phong_pars_fragment:ld,lights_physical_fragment:cd,lights_physical_pars_fragment:hd,lights_fragment_begin:ud,lights_fragment_maps:fd,lights_fragment_end:dd,logdepthbuf_fragment:pd,logdepthbuf_pars_fragment:md,logdepthbuf_pars_vertex:gd,logdepthbuf_vertex:_d,map_fragment:xd,map_pars_fragment:vd,map_particle_fragment:Md,map_particle_pars_fragment:yd,metalnessmap_fragment:Sd,metalnessmap_pars_fragment:Ed,morphinstance_vertex:bd,morphcolor_vertex:Td,morphnormal_vertex:Ad,morphtarget_pars_vertex:wd,morphtarget_vertex:Rd,normal_fragment_begin:Cd,normal_fragment_maps:Pd,normal_pars_fragment:Dd,normal_pars_vertex:Ld,normal_vertex:Id,normalmap_pars_fragment:Ud,clearcoat_normal_fragment_begin:Fd,clearcoat_normal_fragment_maps:Nd,clearcoat_pars_fragment:Od,iridescence_pars_fragment:Bd,opaque_fragment:zd,packing:kd,premultiplied_alpha_fragment:Hd,project_vertex:Gd,dithering_fragment:Vd,dithering_pars_fragment:Wd,roughnessmap_fragment:Xd,roughnessmap_pars_fragment:Yd,shadowmap_pars_fragment:qd,shadowmap_pars_vertex:$d,shadowmap_vertex:jd,shadowmask_pars_fragment:Kd,skinbase_vertex:Zd,skinning_pars_vertex:Jd,skinning_vertex:Qd,skinnormal_vertex:tp,specularmap_fragment:ep,specularmap_pars_fragment:np,tonemapping_fragment:ip,tonemapping_pars_fragment:rp,transmission_fragment:sp,transmission_pars_fragment:ap,uv_pars_fragment:op,uv_pars_vertex:lp,uv_vertex:cp,worldpos_vertex:hp,background_vert:up,background_frag:fp,backgroundCube_vert:dp,backgroundCube_frag:pp,cube_vert:mp,cube_frag:gp,depth_vert:_p,depth_frag:xp,distanceRGBA_vert:vp,distanceRGBA_frag:Mp,equirect_vert:yp,equirect_frag:Sp,linedashed_vert:Ep,linedashed_frag:bp,meshbasic_vert:Tp,meshbasic_frag:Ap,meshlambert_vert:wp,meshlambert_frag:Rp,meshmatcap_vert:Cp,meshmatcap_frag:Pp,meshnormal_vert:Dp,meshnormal_frag:Lp,meshphong_vert:Ip,meshphong_frag:Up,meshphysical_vert:Fp,meshphysical_frag:Np,meshtoon_vert:Op,meshtoon_frag:Bp,points_vert:zp,points_frag:kp,shadow_vert:Hp,shadow_frag:Gp,sprite_vert:Vp,sprite_frag:Wp},gt={common:{diffuse:{value:new kt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new $t},alphaMap:{value:null},alphaMapTransform:{value:new $t},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new $t}},envmap:{envMap:{value:null},envMapRotation:{value:new $t},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new $t}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new $t}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new $t},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new $t},normalScale:{value:new Bt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new $t},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new $t}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new $t}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new $t}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new kt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new kt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new $t},alphaTest:{value:0},uvTransform:{value:new $t}},sprite:{diffuse:{value:new kt(16777215)},opacity:{value:1},center:{value:new Bt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new $t},alphaMap:{value:null},alphaMapTransform:{value:new $t},alphaTest:{value:0}}},vn={basic:{uniforms:Oe([gt.common,gt.specularmap,gt.envmap,gt.aomap,gt.lightmap,gt.fog]),vertexShader:jt.meshbasic_vert,fragmentShader:jt.meshbasic_frag},lambert:{uniforms:Oe([gt.common,gt.specularmap,gt.envmap,gt.aomap,gt.lightmap,gt.emissivemap,gt.bumpmap,gt.normalmap,gt.displacementmap,gt.fog,gt.lights,{emissive:{value:new kt(0)}}]),vertexShader:jt.meshlambert_vert,fragmentShader:jt.meshlambert_frag},phong:{uniforms:Oe([gt.common,gt.specularmap,gt.envmap,gt.aomap,gt.lightmap,gt.emissivemap,gt.bumpmap,gt.normalmap,gt.displacementmap,gt.fog,gt.lights,{emissive:{value:new kt(0)},specular:{value:new kt(1118481)},shininess:{value:30}}]),vertexShader:jt.meshphong_vert,fragmentShader:jt.meshphong_frag},standard:{uniforms:Oe([gt.common,gt.envmap,gt.aomap,gt.lightmap,gt.emissivemap,gt.bumpmap,gt.normalmap,gt.displacementmap,gt.roughnessmap,gt.metalnessmap,gt.fog,gt.lights,{emissive:{value:new kt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:jt.meshphysical_vert,fragmentShader:jt.meshphysical_frag},toon:{uniforms:Oe([gt.common,gt.aomap,gt.lightmap,gt.emissivemap,gt.bumpmap,gt.normalmap,gt.displacementmap,gt.gradientmap,gt.fog,gt.lights,{emissive:{value:new kt(0)}}]),vertexShader:jt.meshtoon_vert,fragmentShader:jt.meshtoon_frag},matcap:{uniforms:Oe([gt.common,gt.bumpmap,gt.normalmap,gt.displacementmap,gt.fog,{matcap:{value:null}}]),vertexShader:jt.meshmatcap_vert,fragmentShader:jt.meshmatcap_frag},points:{uniforms:Oe([gt.points,gt.fog]),vertexShader:jt.points_vert,fragmentShader:jt.points_frag},dashed:{uniforms:Oe([gt.common,gt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:jt.linedashed_vert,fragmentShader:jt.linedashed_frag},depth:{uniforms:Oe([gt.common,gt.displacementmap]),vertexShader:jt.depth_vert,fragmentShader:jt.depth_frag},normal:{uniforms:Oe([gt.common,gt.bumpmap,gt.normalmap,gt.displacementmap,{opacity:{value:1}}]),vertexShader:jt.meshnormal_vert,fragmentShader:jt.meshnormal_frag},sprite:{uniforms:Oe([gt.sprite,gt.fog]),vertexShader:jt.sprite_vert,fragmentShader:jt.sprite_frag},background:{uniforms:{uvTransform:{value:new $t},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:jt.background_vert,fragmentShader:jt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new $t}},vertexShader:jt.backgroundCube_vert,fragmentShader:jt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:jt.cube_vert,fragmentShader:jt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:jt.equirect_vert,fragmentShader:jt.equirect_frag},distanceRGBA:{uniforms:Oe([gt.common,gt.displacementmap,{referencePosition:{value:new F},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:jt.distanceRGBA_vert,fragmentShader:jt.distanceRGBA_frag},shadow:{uniforms:Oe([gt.lights,gt.fog,{color:{value:new kt(0)},opacity:{value:1}}]),vertexShader:jt.shadow_vert,fragmentShader:jt.shadow_frag}};vn.physical={uniforms:Oe([vn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new $t},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new $t},clearcoatNormalScale:{value:new Bt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new $t},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new $t},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new $t},sheen:{value:0},sheenColor:{value:new kt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new $t},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new $t},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new $t},transmissionSamplerSize:{value:new Bt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new $t},attenuationDistance:{value:0},attenuationColor:{value:new kt(0)},specularColor:{value:new kt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new $t},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new $t},anisotropyVector:{value:new Bt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new $t}}]),vertexShader:jt.meshphysical_vert,fragmentShader:jt.meshphysical_frag};const us={r:0,b:0,g:0},hi=new Bn,Xp=new _e;function Yp(n,t,e,i,r,s,a){const o=new kt(0);let c=s===!0?0:1,l,h,d=null,m=0,f=null;function g(S){let M=S.isScene===!0?S.background:null;return M&&M.isTexture&&(M=(S.backgroundBlurriness>0?e:t).get(M)),M}function v(S){let M=!1;const T=g(S);T===null?u(o,c):T&&T.isColor&&(u(T,1),M=!0);const E=n.xr.getEnvironmentBlendMode();E==="additive"?i.buffers.color.setClear(0,0,0,1,a):E==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,a),(n.autoClear||M)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function p(S,M){const T=g(M);T&&(T.isCubeTexture||T.mapping===Us)?(h===void 0&&(h=new sn(new Nr(1,1,1),new ii({name:"BackgroundCubeMaterial",uniforms:ir(vn.backgroundCube.uniforms),vertexShader:vn.backgroundCube.vertexShader,fragmentShader:vn.backgroundCube.fragmentShader,side:We,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(E,w,P){this.matrixWorld.copyPosition(P.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(h)),hi.copy(M.backgroundRotation),hi.x*=-1,hi.y*=-1,hi.z*=-1,T.isCubeTexture&&T.isRenderTargetTexture===!1&&(hi.y*=-1,hi.z*=-1),h.material.uniforms.envMap.value=T,h.material.uniforms.flipEnvMap.value=T.isCubeTexture&&T.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=M.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(Xp.makeRotationFromEuler(hi)),h.material.toneMapped=re.getTransfer(T.colorSpace)!==ce,(d!==T||m!==T.version||f!==n.toneMapping)&&(h.material.needsUpdate=!0,d=T,m=T.version,f=n.toneMapping),h.layers.enableAll(),S.unshift(h,h.geometry,h.material,0,0,null)):T&&T.isTexture&&(l===void 0&&(l=new sn(new Ns(2,2),new ii({name:"BackgroundMaterial",uniforms:ir(vn.background.uniforms),vertexShader:vn.background.vertexShader,fragmentShader:vn.background.fragmentShader,side:ei,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(l)),l.material.uniforms.t2D.value=T,l.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,l.material.toneMapped=re.getTransfer(T.colorSpace)!==ce,T.matrixAutoUpdate===!0&&T.updateMatrix(),l.material.uniforms.uvTransform.value.copy(T.matrix),(d!==T||m!==T.version||f!==n.toneMapping)&&(l.material.needsUpdate=!0,d=T,m=T.version,f=n.toneMapping),l.layers.enableAll(),S.unshift(l,l.geometry,l.material,0,0,null))}function u(S,M){S.getRGB(us,Oc(n)),i.buffers.color.setClear(us.r,us.g,us.b,M,a)}function b(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return o},setClearColor:function(S,M=1){o.set(S),c=M,u(o,c)},getClearAlpha:function(){return c},setClearAlpha:function(S){c=S,u(o,c)},render:v,addToRenderList:p,dispose:b}}function qp(n,t){const e=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},r=m(null);let s=r,a=!1;function o(x,R,D,N,q){let B=!1;const V=d(N,D,R);s!==V&&(s=V,l(s.object)),B=f(x,N,D,q),B&&g(x,N,D,q),q!==null&&t.update(q,n.ELEMENT_ARRAY_BUFFER),(B||a)&&(a=!1,M(x,R,D,N),q!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get(q).buffer))}function c(){return n.createVertexArray()}function l(x){return n.bindVertexArray(x)}function h(x){return n.deleteVertexArray(x)}function d(x,R,D){const N=D.wireframe===!0;let q=i[x.id];q===void 0&&(q={},i[x.id]=q);let B=q[R.id];B===void 0&&(B={},q[R.id]=B);let V=B[N];return V===void 0&&(V=m(c()),B[N]=V),V}function m(x){const R=[],D=[],N=[];for(let q=0;q<e;q++)R[q]=0,D[q]=0,N[q]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:R,enabledAttributes:D,attributeDivisors:N,object:x,attributes:{},index:null}}function f(x,R,D,N){const q=s.attributes,B=R.attributes;let V=0;const Y=D.getAttributes();for(const z in Y)if(Y[z].location>=0){const G=q[z];let Q=B[z];if(Q===void 0&&(z==="instanceMatrix"&&x.instanceMatrix&&(Q=x.instanceMatrix),z==="instanceColor"&&x.instanceColor&&(Q=x.instanceColor)),G===void 0||G.attribute!==Q||Q&&G.data!==Q.data)return!0;V++}return s.attributesNum!==V||s.index!==N}function g(x,R,D,N){const q={},B=R.attributes;let V=0;const Y=D.getAttributes();for(const z in Y)if(Y[z].location>=0){let G=B[z];G===void 0&&(z==="instanceMatrix"&&x.instanceMatrix&&(G=x.instanceMatrix),z==="instanceColor"&&x.instanceColor&&(G=x.instanceColor));const Q={};Q.attribute=G,G&&G.data&&(Q.data=G.data),q[z]=Q,V++}s.attributes=q,s.attributesNum=V,s.index=N}function v(){const x=s.newAttributes;for(let R=0,D=x.length;R<D;R++)x[R]=0}function p(x){u(x,0)}function u(x,R){const D=s.newAttributes,N=s.enabledAttributes,q=s.attributeDivisors;D[x]=1,N[x]===0&&(n.enableVertexAttribArray(x),N[x]=1),q[x]!==R&&(n.vertexAttribDivisor(x,R),q[x]=R)}function b(){const x=s.newAttributes,R=s.enabledAttributes;for(let D=0,N=R.length;D<N;D++)R[D]!==x[D]&&(n.disableVertexAttribArray(D),R[D]=0)}function S(x,R,D,N,q,B,V){V===!0?n.vertexAttribIPointer(x,R,D,q,B):n.vertexAttribPointer(x,R,D,N,q,B)}function M(x,R,D,N){v();const q=N.attributes,B=D.getAttributes(),V=R.defaultAttributeValues;for(const Y in B){const z=B[Y];if(z.location>=0){let I=q[Y];if(I===void 0&&(Y==="instanceMatrix"&&x.instanceMatrix&&(I=x.instanceMatrix),Y==="instanceColor"&&x.instanceColor&&(I=x.instanceColor)),I!==void 0){const G=I.normalized,Q=I.itemSize,nt=t.get(I);if(nt===void 0)continue;const Lt=nt.buffer,zt=nt.type,Wt=nt.bytesPerElement,W=zt===n.INT||zt===n.UNSIGNED_INT||I.gpuType===Ro;if(I.isInterleavedBufferAttribute){const Z=I.data,xt=Z.stride,Pt=I.offset;if(Z.isInstancedInterleavedBuffer){for(let bt=0;bt<z.locationSize;bt++)u(z.location+bt,Z.meshPerAttribute);x.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=Z.meshPerAttribute*Z.count)}else for(let bt=0;bt<z.locationSize;bt++)p(z.location+bt);n.bindBuffer(n.ARRAY_BUFFER,Lt);for(let bt=0;bt<z.locationSize;bt++)S(z.location+bt,Q/z.locationSize,zt,G,xt*Wt,(Pt+Q/z.locationSize*bt)*Wt,W)}else{if(I.isInstancedBufferAttribute){for(let Z=0;Z<z.locationSize;Z++)u(z.location+Z,I.meshPerAttribute);x.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=I.meshPerAttribute*I.count)}else for(let Z=0;Z<z.locationSize;Z++)p(z.location+Z);n.bindBuffer(n.ARRAY_BUFFER,Lt);for(let Z=0;Z<z.locationSize;Z++)S(z.location+Z,Q/z.locationSize,zt,G,Q*Wt,Q/z.locationSize*Z*Wt,W)}}else if(V!==void 0){const G=V[Y];if(G!==void 0)switch(G.length){case 2:n.vertexAttrib2fv(z.location,G);break;case 3:n.vertexAttrib3fv(z.location,G);break;case 4:n.vertexAttrib4fv(z.location,G);break;default:n.vertexAttrib1fv(z.location,G)}}}}b()}function T(){P();for(const x in i){const R=i[x];for(const D in R){const N=R[D];for(const q in N)h(N[q].object),delete N[q];delete R[D]}delete i[x]}}function E(x){if(i[x.id]===void 0)return;const R=i[x.id];for(const D in R){const N=R[D];for(const q in N)h(N[q].object),delete N[q];delete R[D]}delete i[x.id]}function w(x){for(const R in i){const D=i[R];if(D[x.id]===void 0)continue;const N=D[x.id];for(const q in N)h(N[q].object),delete N[q];delete D[x.id]}}function P(){_(),a=!0,s!==r&&(s=r,l(s.object))}function _(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:o,reset:P,resetDefaultState:_,dispose:T,releaseStatesOfGeometry:E,releaseStatesOfProgram:w,initAttributes:v,enableAttribute:p,disableUnusedAttributes:b}}function $p(n,t,e){let i;function r(l){i=l}function s(l,h){n.drawArrays(i,l,h),e.update(h,i,1)}function a(l,h,d){d!==0&&(n.drawArraysInstanced(i,l,h,d),e.update(h,i,d))}function o(l,h,d){if(d===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,h,0,d);let f=0;for(let g=0;g<d;g++)f+=h[g];e.update(f,i,1)}function c(l,h,d,m){if(d===0)return;const f=t.get("WEBGL_multi_draw");if(f===null)for(let g=0;g<l.length;g++)a(l[g],h[g],m[g]);else{f.multiDrawArraysInstancedWEBGL(i,l,0,h,0,m,0,d);let g=0;for(let v=0;v<d;v++)g+=h[v]*m[v];e.update(g,i,1)}}this.setMode=r,this.render=s,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=c}function jp(n,t,e,i){let r;function s(){if(r!==void 0)return r;if(t.has("EXT_texture_filter_anisotropic")===!0){const w=t.get("EXT_texture_filter_anisotropic");r=n.getParameter(w.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function a(w){return!(w!==pn&&i.convert(w)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(w){const P=w===Dr&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(w!==On&&i.convert(w)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&w!==Un&&!P)}function c(w){if(w==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";w="mediump"}return w==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=e.precision!==void 0?e.precision:"highp";const h=c(l);h!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);const d=e.logarithmicDepthBuffer===!0,m=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),f=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=n.getParameter(n.MAX_TEXTURE_SIZE),p=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),u=n.getParameter(n.MAX_VERTEX_ATTRIBS),b=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),S=n.getParameter(n.MAX_VARYING_VECTORS),M=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),T=g>0,E=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:c,textureFormatReadable:a,textureTypeReadable:o,precision:l,logarithmicDepthBuffer:d,reversedDepthBuffer:m,maxTextures:f,maxVertexTextures:g,maxTextureSize:v,maxCubemapSize:p,maxAttributes:u,maxVertexUniforms:b,maxVaryings:S,maxFragmentUniforms:M,vertexTextures:T,maxSamples:E}}function Kp(n){const t=this;let e=null,i=0,r=!1,s=!1;const a=new Xn,o=new $t,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(d,m){const f=d.length!==0||m||i!==0||r;return r=m,i=d.length,f},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(d,m){e=h(d,m,0)},this.setState=function(d,m,f){const g=d.clippingPlanes,v=d.clipIntersection,p=d.clipShadows,u=n.get(d);if(!r||g===null||g.length===0||s&&!p)s?h(null):l();else{const b=s?0:i,S=b*4;let M=u.clippingState||null;c.value=M,M=h(g,m,S,f);for(let T=0;T!==S;++T)M[T]=e[T];u.clippingState=M,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=b}};function l(){c.value!==e&&(c.value=e,c.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function h(d,m,f,g){const v=d!==null?d.length:0;let p=null;if(v!==0){if(p=c.value,g!==!0||p===null){const u=f+v*4,b=m.matrixWorldInverse;o.getNormalMatrix(b),(p===null||p.length<u)&&(p=new Float32Array(u));for(let S=0,M=f;S!==v;++S,M+=4)a.copy(d[S]).applyMatrix4(b,o),a.normal.toArray(p,M),p[M+3]=a.constant}c.value=p,c.needsUpdate=!0}return t.numPlanes=v,t.numIntersection=0,p}}function Zp(n){let t=new WeakMap;function e(a,o){return o===Fa?a.mapping=tr:o===Na&&(a.mapping=er),a}function i(a){if(a&&a.isTexture){const o=a.mapping;if(o===Fa||o===Na)if(t.has(a)){const c=t.get(a).texture;return e(c,a.mapping)}else{const c=a.image;if(c&&c.height>0){const l=new $u(c.height);return l.fromEquirectangularTexture(n,a),t.set(a,l),a.addEventListener("dispose",r),e(l.texture,a.mapping)}else return null}}return a}function r(a){const o=a.target;o.removeEventListener("dispose",r);const c=t.get(o);c!==void 0&&(t.delete(o),c.dispose())}function s(){t=new WeakMap}return{get:i,dispose:s}}const qi=4,Il=[.125,.215,.35,.446,.526,.582],gi=20,ma=new af,Ul=new kt;let ga=null,_a=0,xa=0,va=!1;const fi=(1+Math.sqrt(5))/2,Wi=1/fi,Fl=[new F(-fi,Wi,0),new F(fi,Wi,0),new F(-Wi,0,fi),new F(Wi,0,fi),new F(0,fi,-Wi),new F(0,fi,Wi),new F(-1,1,-1),new F(1,1,-1),new F(-1,1,1),new F(1,1,1)],Jp=new F;class Nl{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,i=.1,r=100,s={}){const{size:a=256,position:o=Jp}=s;ga=this._renderer.getRenderTarget(),_a=this._renderer.getActiveCubeFace(),xa=this._renderer.getActiveMipmapLevel(),va=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);const c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(t,i,r,c,o),e>0&&this._blur(c,0,0,e),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=zl(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Bl(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(ga,_a,xa),this._renderer.xr.enabled=va,t.scissorTest=!1,fs(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===tr||t.mapping===er?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),ga=this._renderer.getRenderTarget(),_a=this._renderer.getActiveCubeFace(),xa=this._renderer.getActiveMipmapLevel(),va=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=e||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,i={magFilter:dn,minFilter:dn,generateMipmaps:!1,type:Dr,format:pn,colorSpace:nr,depthBuffer:!1},r=Ol(t,e,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Ol(t,e,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Qp(s)),this._blurMaterial=tm(s,t,e)}return r}_compileMaterial(t){const e=new sn(this._lodPlanes[0],t);this._renderer.compile(e,ma)}_sceneToCubeUV(t,e,i,r,s){const c=new en(90,1,e,i),l=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],d=this._renderer,m=d.autoClear,f=d.toneMapping;d.getClearColor(Ul),d.toneMapping=Qn,d.autoClear=!1,d.state.buffers.depth.getReversed()&&(d.setRenderTarget(r),d.clearDepth(),d.setRenderTarget(null));const v=new Fr({name:"PMREM.Background",side:We,depthWrite:!1,depthTest:!1}),p=new sn(new Nr,v);let u=!1;const b=t.background;b?b.isColor&&(v.color.copy(b),t.background=null,u=!0):(v.color.copy(Ul),u=!0);for(let S=0;S<6;S++){const M=S%3;M===0?(c.up.set(0,l[S],0),c.position.set(s.x,s.y,s.z),c.lookAt(s.x+h[S],s.y,s.z)):M===1?(c.up.set(0,0,l[S]),c.position.set(s.x,s.y,s.z),c.lookAt(s.x,s.y+h[S],s.z)):(c.up.set(0,l[S],0),c.position.set(s.x,s.y,s.z),c.lookAt(s.x,s.y,s.z+h[S]));const T=this._cubeSize;fs(r,M*T,S>2?T:0,T,T),d.setRenderTarget(r),u&&d.render(p,c),d.render(t,c)}p.geometry.dispose(),p.material.dispose(),d.toneMapping=f,d.autoClear=m,t.background=b}_textureToCubeUV(t,e){const i=this._renderer,r=t.mapping===tr||t.mapping===er;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=zl()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Bl());const s=r?this._cubemapMaterial:this._equirectMaterial,a=new sn(this._lodPlanes[0],s),o=s.uniforms;o.envMap.value=t;const c=this._cubeSize;fs(e,0,0,3*c,2*c),i.setRenderTarget(e),i.render(a,ma)}_applyPMREM(t){const e=this._renderer,i=e.autoClear;e.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const a=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),o=Fl[(r-s-1)%Fl.length];this._blur(t,s-1,s,a,o)}e.autoClear=i}_blur(t,e,i,r,s){const a=this._pingPongRenderTarget;this._halfBlur(t,a,e,i,r,"latitudinal",s),this._halfBlur(a,t,i,i,r,"longitudinal",s)}_halfBlur(t,e,i,r,s,a,o){const c=this._renderer,l=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,d=new sn(this._lodPlanes[r],l),m=l.uniforms,f=this._sizeLods[i]-1,g=isFinite(s)?Math.PI/(2*f):2*Math.PI/(2*gi-1),v=s/g,p=isFinite(s)?1+Math.floor(h*v):gi;p>gi&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${gi}`);const u=[];let b=0;for(let w=0;w<gi;++w){const P=w/v,_=Math.exp(-P*P/2);u.push(_),w===0?b+=_:w<p&&(b+=2*_)}for(let w=0;w<u.length;w++)u[w]=u[w]/b;m.envMap.value=t.texture,m.samples.value=p,m.weights.value=u,m.latitudinal.value=a==="latitudinal",o&&(m.poleAxis.value=o);const{_lodMax:S}=this;m.dTheta.value=g,m.mipInt.value=S-i;const M=this._sizeLods[r],T=3*M*(r>S-qi?r-S+qi:0),E=4*(this._cubeSize-M);fs(e,T,E,3*M,2*M),c.setRenderTarget(e),c.render(d,ma)}}function Qp(n){const t=[],e=[],i=[];let r=n;const s=n-qi+1+Il.length;for(let a=0;a<s;a++){const o=Math.pow(2,r);e.push(o);let c=1/o;a>n-qi?c=Il[a-n+qi-1]:a===0&&(c=0),i.push(c);const l=1/(o-2),h=-l,d=1+l,m=[h,h,d,h,d,d,h,h,d,d,h,d],f=6,g=6,v=3,p=2,u=1,b=new Float32Array(v*g*f),S=new Float32Array(p*g*f),M=new Float32Array(u*g*f);for(let E=0;E<f;E++){const w=E%3*2/3-1,P=E>2?0:-1,_=[w,P,0,w+2/3,P,0,w+2/3,P+1,0,w,P,0,w+2/3,P+1,0,w,P+1,0];b.set(_,v*g*E),S.set(m,p*g*E);const x=[E,E,E,E,E,E];M.set(x,u*g*E)}const T=new ae;T.setAttribute("position",new ne(b,v)),T.setAttribute("uv",new ne(S,p)),T.setAttribute("faceIndex",new ne(M,u)),t.push(T),r>qi&&r--}return{lodPlanes:t,sizeLods:e,sigmas:i}}function Ol(n,t,e){const i=new yi(n,t,e);return i.texture.mapping=Us,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function fs(n,t,e,i,r){n.viewport.set(t,e,i,r),n.scissor.set(t,e,i,r)}function tm(n,t,e){const i=new Float32Array(gi),r=new F(0,1,0);return new ii({name:"SphericalGaussianBlur",defines:{n:gi,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Ho(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Jn,depthTest:!1,depthWrite:!1})}function Bl(){return new ii({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Ho(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Jn,depthTest:!1,depthWrite:!1})}function zl(){return new ii({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ho(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Jn,depthTest:!1,depthWrite:!1})}function Ho(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function em(n){let t=new WeakMap,e=null;function i(o){if(o&&o.isTexture){const c=o.mapping,l=c===Fa||c===Na,h=c===tr||c===er;if(l||h){let d=t.get(o);const m=d!==void 0?d.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==m)return e===null&&(e=new Nl(n)),d=l?e.fromEquirectangular(o,d):e.fromCubemap(o,d),d.texture.pmremVersion=o.pmremVersion,t.set(o,d),d.texture;if(d!==void 0)return d.texture;{const f=o.image;return l&&f&&f.height>0||h&&f&&r(f)?(e===null&&(e=new Nl(n)),d=l?e.fromEquirectangular(o):e.fromCubemap(o),d.texture.pmremVersion=o.pmremVersion,t.set(o,d),o.addEventListener("dispose",s),d.texture):null}}}return o}function r(o){let c=0;const l=6;for(let h=0;h<l;h++)o[h]!==void 0&&c++;return c===l}function s(o){const c=o.target;c.removeEventListener("dispose",s);const l=t.get(c);l!==void 0&&(t.delete(c),l.dispose())}function a(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:i,dispose:a}}function nm(n){const t={};function e(i){if(t[i]!==void 0)return t[i];let r;switch(i){case"WEBGL_depth_texture":r=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=n.getExtension(i)}return t[i]=r,r}return{has:function(i){return e(i)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(i){const r=e(i);return r===null&&Ar("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function im(n,t,e,i){const r={},s=new WeakMap;function a(d){const m=d.target;m.index!==null&&t.remove(m.index);for(const g in m.attributes)t.remove(m.attributes[g]);m.removeEventListener("dispose",a),delete r[m.id];const f=s.get(m);f&&(t.remove(f),s.delete(m)),i.releaseStatesOfGeometry(m),m.isInstancedBufferGeometry===!0&&delete m._maxInstanceCount,e.memory.geometries--}function o(d,m){return r[m.id]===!0||(m.addEventListener("dispose",a),r[m.id]=!0,e.memory.geometries++),m}function c(d){const m=d.attributes;for(const f in m)t.update(m[f],n.ARRAY_BUFFER)}function l(d){const m=[],f=d.index,g=d.attributes.position;let v=0;if(f!==null){const b=f.array;v=f.version;for(let S=0,M=b.length;S<M;S+=3){const T=b[S+0],E=b[S+1],w=b[S+2];m.push(T,E,E,w,w,T)}}else if(g!==void 0){const b=g.array;v=g.version;for(let S=0,M=b.length/3-1;S<M;S+=3){const T=S+0,E=S+1,w=S+2;m.push(T,E,E,w,w,T)}}else return;const p=new(Lc(m)?Nc:Fc)(m,1);p.version=v;const u=s.get(d);u&&t.remove(u),s.set(d,p)}function h(d){const m=s.get(d);if(m){const f=d.index;f!==null&&m.version<f.version&&l(d)}else l(d);return s.get(d)}return{get:o,update:c,getWireframeAttribute:h}}function rm(n,t,e){let i;function r(m){i=m}let s,a;function o(m){s=m.type,a=m.bytesPerElement}function c(m,f){n.drawElements(i,f,s,m*a),e.update(f,i,1)}function l(m,f,g){g!==0&&(n.drawElementsInstanced(i,f,s,m*a,g),e.update(f,i,g))}function h(m,f,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,f,0,s,m,0,g);let p=0;for(let u=0;u<g;u++)p+=f[u];e.update(p,i,1)}function d(m,f,g,v){if(g===0)return;const p=t.get("WEBGL_multi_draw");if(p===null)for(let u=0;u<m.length;u++)l(m[u]/a,f[u],v[u]);else{p.multiDrawElementsInstancedWEBGL(i,f,0,s,m,0,v,0,g);let u=0;for(let b=0;b<g;b++)u+=f[b]*v[b];e.update(u,i,1)}}this.setMode=r,this.setIndex=o,this.render=c,this.renderInstances=l,this.renderMultiDraw=h,this.renderMultiDrawInstances=d}function sm(n){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,a,o){switch(e.calls++,a){case n.TRIANGLES:e.triangles+=o*(s/3);break;case n.LINES:e.lines+=o*(s/2);break;case n.LINE_STRIP:e.lines+=o*(s-1);break;case n.LINE_LOOP:e.lines+=o*s;break;case n.POINTS:e.points+=o*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function r(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:r,update:i}}function am(n,t,e){const i=new WeakMap,r=new Me;function s(a,o,c){const l=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,d=h!==void 0?h.length:0;let m=i.get(o);if(m===void 0||m.count!==d){let x=function(){P.dispose(),i.delete(o),o.removeEventListener("dispose",x)};var f=x;m!==void 0&&m.texture.dispose();const g=o.morphAttributes.position!==void 0,v=o.morphAttributes.normal!==void 0,p=o.morphAttributes.color!==void 0,u=o.morphAttributes.position||[],b=o.morphAttributes.normal||[],S=o.morphAttributes.color||[];let M=0;g===!0&&(M=1),v===!0&&(M=2),p===!0&&(M=3);let T=o.attributes.position.count*M,E=1;T>t.maxTextureSize&&(E=Math.ceil(T/t.maxTextureSize),T=t.maxTextureSize);const w=new Float32Array(T*E*4*d),P=new Ic(w,T,E,d);P.type=Un,P.needsUpdate=!0;const _=M*4;for(let R=0;R<d;R++){const D=u[R],N=b[R],q=S[R],B=T*E*4*R;for(let V=0;V<D.count;V++){const Y=V*_;g===!0&&(r.fromBufferAttribute(D,V),w[B+Y+0]=r.x,w[B+Y+1]=r.y,w[B+Y+2]=r.z,w[B+Y+3]=0),v===!0&&(r.fromBufferAttribute(N,V),w[B+Y+4]=r.x,w[B+Y+5]=r.y,w[B+Y+6]=r.z,w[B+Y+7]=0),p===!0&&(r.fromBufferAttribute(q,V),w[B+Y+8]=r.x,w[B+Y+9]=r.y,w[B+Y+10]=r.z,w[B+Y+11]=q.itemSize===4?r.w:1)}}m={count:d,texture:P,size:new Bt(T,E)},i.set(o,m),o.addEventListener("dispose",x)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)c.getUniforms().setValue(n,"morphTexture",a.morphTexture,e);else{let g=0;for(let p=0;p<l.length;p++)g+=l[p];const v=o.morphTargetsRelative?1:1-g;c.getUniforms().setValue(n,"morphTargetBaseInfluence",v),c.getUniforms().setValue(n,"morphTargetInfluences",l)}c.getUniforms().setValue(n,"morphTargetsTexture",m.texture,e),c.getUniforms().setValue(n,"morphTargetsTextureSize",m.size)}return{update:s}}function om(n,t,e,i){let r=new WeakMap;function s(c){const l=i.render.frame,h=c.geometry,d=t.get(c,h);if(r.get(d)!==l&&(t.update(d),r.set(d,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",o)===!1&&c.addEventListener("dispose",o),r.get(c)!==l&&(e.update(c.instanceMatrix,n.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,n.ARRAY_BUFFER),r.set(c,l))),c.isSkinnedMesh){const m=c.skeleton;r.get(m)!==l&&(m.update(),r.set(m,l))}return d}function a(){r=new WeakMap}function o(c){const l=c.target;l.removeEventListener("dispose",o),e.remove(l.instanceMatrix),l.instanceColor!==null&&e.remove(l.instanceColor)}return{update:s,dispose:a}}const Yc=new ke,kl=new Vc(1,1),qc=new Ic,$c=new Du,jc=new zc,Hl=[],Gl=[],Vl=new Float32Array(16),Wl=new Float32Array(9),Xl=new Float32Array(4);function rr(n,t,e){const i=n[0];if(i<=0||i>0)return n;const r=t*e;let s=Hl[r];if(s===void 0&&(s=new Float32Array(r),Hl[r]=s),t!==0){i.toArray(s,0);for(let a=1,o=0;a!==t;++a)o+=e,n[a].toArray(s,o)}return s}function Re(n,t){if(n.length!==t.length)return!1;for(let e=0,i=n.length;e<i;e++)if(n[e]!==t[e])return!1;return!0}function Ce(n,t){for(let e=0,i=t.length;e<i;e++)n[e]=t[e]}function Bs(n,t){let e=Gl[t];e===void 0&&(e=new Int32Array(t),Gl[t]=e);for(let i=0;i!==t;++i)e[i]=n.allocateTextureUnit();return e}function lm(n,t){const e=this.cache;e[0]!==t&&(n.uniform1f(this.addr,t),e[0]=t)}function cm(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Re(e,t))return;n.uniform2fv(this.addr,t),Ce(e,t)}}function hm(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(n.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Re(e,t))return;n.uniform3fv(this.addr,t),Ce(e,t)}}function um(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Re(e,t))return;n.uniform4fv(this.addr,t),Ce(e,t)}}function fm(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(Re(e,t))return;n.uniformMatrix2fv(this.addr,!1,t),Ce(e,t)}else{if(Re(e,i))return;Xl.set(i),n.uniformMatrix2fv(this.addr,!1,Xl),Ce(e,i)}}function dm(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(Re(e,t))return;n.uniformMatrix3fv(this.addr,!1,t),Ce(e,t)}else{if(Re(e,i))return;Wl.set(i),n.uniformMatrix3fv(this.addr,!1,Wl),Ce(e,i)}}function pm(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(Re(e,t))return;n.uniformMatrix4fv(this.addr,!1,t),Ce(e,t)}else{if(Re(e,i))return;Vl.set(i),n.uniformMatrix4fv(this.addr,!1,Vl),Ce(e,i)}}function mm(n,t){const e=this.cache;e[0]!==t&&(n.uniform1i(this.addr,t),e[0]=t)}function gm(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Re(e,t))return;n.uniform2iv(this.addr,t),Ce(e,t)}}function _m(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Re(e,t))return;n.uniform3iv(this.addr,t),Ce(e,t)}}function xm(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Re(e,t))return;n.uniform4iv(this.addr,t),Ce(e,t)}}function vm(n,t){const e=this.cache;e[0]!==t&&(n.uniform1ui(this.addr,t),e[0]=t)}function Mm(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Re(e,t))return;n.uniform2uiv(this.addr,t),Ce(e,t)}}function ym(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Re(e,t))return;n.uniform3uiv(this.addr,t),Ce(e,t)}}function Sm(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Re(e,t))return;n.uniform4uiv(this.addr,t),Ce(e,t)}}function Em(n,t,e){const i=this.cache,r=e.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r);let s;this.type===n.SAMPLER_2D_SHADOW?(kl.compareFunction=Dc,s=kl):s=Yc,e.setTexture2D(t||s,r)}function bm(n,t,e){const i=this.cache,r=e.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),e.setTexture3D(t||$c,r)}function Tm(n,t,e){const i=this.cache,r=e.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),e.setTextureCube(t||jc,r)}function Am(n,t,e){const i=this.cache,r=e.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),e.setTexture2DArray(t||qc,r)}function wm(n){switch(n){case 5126:return lm;case 35664:return cm;case 35665:return hm;case 35666:return um;case 35674:return fm;case 35675:return dm;case 35676:return pm;case 5124:case 35670:return mm;case 35667:case 35671:return gm;case 35668:case 35672:return _m;case 35669:case 35673:return xm;case 5125:return vm;case 36294:return Mm;case 36295:return ym;case 36296:return Sm;case 35678:case 36198:case 36298:case 36306:case 35682:return Em;case 35679:case 36299:case 36307:return bm;case 35680:case 36300:case 36308:case 36293:return Tm;case 36289:case 36303:case 36311:case 36292:return Am}}function Rm(n,t){n.uniform1fv(this.addr,t)}function Cm(n,t){const e=rr(t,this.size,2);n.uniform2fv(this.addr,e)}function Pm(n,t){const e=rr(t,this.size,3);n.uniform3fv(this.addr,e)}function Dm(n,t){const e=rr(t,this.size,4);n.uniform4fv(this.addr,e)}function Lm(n,t){const e=rr(t,this.size,4);n.uniformMatrix2fv(this.addr,!1,e)}function Im(n,t){const e=rr(t,this.size,9);n.uniformMatrix3fv(this.addr,!1,e)}function Um(n,t){const e=rr(t,this.size,16);n.uniformMatrix4fv(this.addr,!1,e)}function Fm(n,t){n.uniform1iv(this.addr,t)}function Nm(n,t){n.uniform2iv(this.addr,t)}function Om(n,t){n.uniform3iv(this.addr,t)}function Bm(n,t){n.uniform4iv(this.addr,t)}function zm(n,t){n.uniform1uiv(this.addr,t)}function km(n,t){n.uniform2uiv(this.addr,t)}function Hm(n,t){n.uniform3uiv(this.addr,t)}function Gm(n,t){n.uniform4uiv(this.addr,t)}function Vm(n,t,e){const i=this.cache,r=t.length,s=Bs(e,r);Re(i,s)||(n.uniform1iv(this.addr,s),Ce(i,s));for(let a=0;a!==r;++a)e.setTexture2D(t[a]||Yc,s[a])}function Wm(n,t,e){const i=this.cache,r=t.length,s=Bs(e,r);Re(i,s)||(n.uniform1iv(this.addr,s),Ce(i,s));for(let a=0;a!==r;++a)e.setTexture3D(t[a]||$c,s[a])}function Xm(n,t,e){const i=this.cache,r=t.length,s=Bs(e,r);Re(i,s)||(n.uniform1iv(this.addr,s),Ce(i,s));for(let a=0;a!==r;++a)e.setTextureCube(t[a]||jc,s[a])}function Ym(n,t,e){const i=this.cache,r=t.length,s=Bs(e,r);Re(i,s)||(n.uniform1iv(this.addr,s),Ce(i,s));for(let a=0;a!==r;++a)e.setTexture2DArray(t[a]||qc,s[a])}function qm(n){switch(n){case 5126:return Rm;case 35664:return Cm;case 35665:return Pm;case 35666:return Dm;case 35674:return Lm;case 35675:return Im;case 35676:return Um;case 5124:case 35670:return Fm;case 35667:case 35671:return Nm;case 35668:case 35672:return Om;case 35669:case 35673:return Bm;case 5125:return zm;case 36294:return km;case 36295:return Hm;case 36296:return Gm;case 35678:case 36198:case 36298:case 36306:case 35682:return Vm;case 35679:case 36299:case 36307:return Wm;case 35680:case 36300:case 36308:case 36293:return Xm;case 36289:case 36303:case 36311:case 36292:return Ym}}class $m{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.setValue=wm(e.type)}}class jm{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=qm(e.type)}}class Km{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,i){const r=this.seq;for(let s=0,a=r.length;s!==a;++s){const o=r[s];o.setValue(t,e[o.id],i)}}}const Ma=/(\w+)(\])?(\[|\.)?/g;function Yl(n,t){n.seq.push(t),n.map[t.id]=t}function Zm(n,t,e){const i=n.name,r=i.length;for(Ma.lastIndex=0;;){const s=Ma.exec(i),a=Ma.lastIndex;let o=s[1];const c=s[2]==="]",l=s[3];if(c&&(o=o|0),l===void 0||l==="["&&a+2===r){Yl(e,l===void 0?new $m(o,n,t):new jm(o,n,t));break}else{let d=e.map[o];d===void 0&&(d=new Km(o),Yl(e,d)),e=d}}}class Es{constructor(t,e){this.seq=[],this.map={};const i=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=t.getActiveUniform(e,r),a=t.getUniformLocation(e,s.name);Zm(s,a,this)}}setValue(t,e,i,r){const s=this.map[e];s!==void 0&&s.setValue(t,i,r)}setOptional(t,e,i){const r=e[i];r!==void 0&&this.setValue(t,i,r)}static upload(t,e,i,r){for(let s=0,a=e.length;s!==a;++s){const o=e[s],c=i[o.id];c.needsUpdate!==!1&&o.setValue(t,c.value,r)}}static seqWithValue(t,e){const i=[];for(let r=0,s=t.length;r!==s;++r){const a=t[r];a.id in e&&i.push(a)}return i}}function ql(n,t,e){const i=n.createShader(t);return n.shaderSource(i,e),n.compileShader(i),i}const Jm=37297;let Qm=0;function tg(n,t){const e=n.split(`
`),i=[],r=Math.max(t-6,0),s=Math.min(t+6,e.length);for(let a=r;a<s;a++){const o=a+1;i.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return i.join(`
`)}const $l=new $t;function eg(n){re._getMatrix($l,re.workingColorSpace,n);const t=`mat3( ${$l.elements.map(e=>e.toFixed(4))} )`;switch(re.getTransfer(n)){case As:return[t,"LinearTransferOETF"];case ce:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",n),[t,"LinearTransferOETF"]}}function jl(n,t,e){const i=n.getShaderParameter(t,n.COMPILE_STATUS),s=(n.getShaderInfoLog(t)||"").trim();if(i&&s==="")return"";const a=/ERROR: 0:(\d+)/.exec(s);if(a){const o=parseInt(a[1]);return e.toUpperCase()+`

`+s+`

`+tg(n.getShaderSource(t),o)}else return s}function ng(n,t){const e=eg(t);return[`vec4 ${n}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function ig(n,t){let e;switch(t){case Wh:e="Linear";break;case Xh:e="Reinhard";break;case Yh:e="Cineon";break;case yc:e="ACESFilmic";break;case $h:e="AgX";break;case jh:e="Neutral";break;case qh:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+n+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const ds=new F;function rg(){re.getLuminanceCoefficients(ds);const n=ds.x.toFixed(4),t=ds.y.toFixed(4),e=ds.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function sg(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(mr).join(`
`)}function ag(n){const t=[];for(const e in n){const i=n[e];i!==!1&&t.push("#define "+e+" "+i)}return t.join(`
`)}function og(n,t){const e={},i=n.getProgramParameter(t,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=n.getActiveAttrib(t,r),a=s.name;let o=1;s.type===n.FLOAT_MAT2&&(o=2),s.type===n.FLOAT_MAT3&&(o=3),s.type===n.FLOAT_MAT4&&(o=4),e[a]={type:s.type,location:n.getAttribLocation(t,a),locationSize:o}}return e}function mr(n){return n!==""}function Kl(n,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Zl(n,t){return n.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const lg=/^[ \t]*#include +<([\w\d./]+)>/gm;function _o(n){return n.replace(lg,hg)}const cg=new Map;function hg(n,t){let e=jt[t];if(e===void 0){const i=cg.get(t);if(i!==void 0)e=jt[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,i);else throw new Error("Can not resolve #include <"+t+">")}return _o(e)}const ug=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Jl(n){return n.replace(ug,fg)}function fg(n,t,e,i){let r="";for(let s=parseInt(t);s<parseInt(e);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Ql(n){let t=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?t+=`
#define HIGH_PRECISION`:n.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function dg(n){let t="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===vc?t="SHADOWMAP_TYPE_PCF":n.shadowMapType===Eh?t="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===Ln&&(t="SHADOWMAP_TYPE_VSM"),t}function pg(n){let t="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case tr:case er:t="ENVMAP_TYPE_CUBE";break;case Us:t="ENVMAP_TYPE_CUBE_UV";break}return t}function mg(n){let t="ENVMAP_MODE_REFLECTION";return n.envMap&&n.envMapMode===er&&(t="ENVMAP_MODE_REFRACTION"),t}function gg(n){let t="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case Mc:t="ENVMAP_BLENDING_MULTIPLY";break;case Gh:t="ENVMAP_BLENDING_MIX";break;case Vh:t="ENVMAP_BLENDING_ADD";break}return t}function _g(n){const t=n.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:i,maxMip:e}}function xg(n,t,e,i){const r=n.getContext(),s=e.defines;let a=e.vertexShader,o=e.fragmentShader;const c=dg(e),l=pg(e),h=mg(e),d=gg(e),m=_g(e),f=sg(e),g=ag(s),v=r.createProgram();let p,u,b=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(mr).join(`
`),p.length>0&&(p+=`
`),u=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(mr).join(`
`),u.length>0&&(u+=`
`)):(p=[Ql(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(mr).join(`
`),u=[Ql(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+h:"",e.envMap?"#define "+d:"",m?"#define CUBEUV_TEXEL_WIDTH "+m.texelWidth:"",m?"#define CUBEUV_TEXEL_HEIGHT "+m.texelHeight:"",m?"#define CUBEUV_MAX_MIP "+m.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Qn?"#define TONE_MAPPING":"",e.toneMapping!==Qn?jt.tonemapping_pars_fragment:"",e.toneMapping!==Qn?ig("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",jt.colorspace_pars_fragment,ng("linearToOutputTexel",e.outputColorSpace),rg(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(mr).join(`
`)),a=_o(a),a=Kl(a,e),a=Zl(a,e),o=_o(o),o=Kl(o,e),o=Zl(o,e),a=Jl(a),o=Jl(o),e.isRawShaderMaterial!==!0&&(b=`#version 300 es
`,p=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,u=["#define varying in",e.glslVersion===el?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===el?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+u);const S=b+p+a,M=b+u+o,T=ql(r,r.VERTEX_SHADER,S),E=ql(r,r.FRAGMENT_SHADER,M);r.attachShader(v,T),r.attachShader(v,E),e.index0AttributeName!==void 0?r.bindAttribLocation(v,0,e.index0AttributeName):e.morphTargets===!0&&r.bindAttribLocation(v,0,"position"),r.linkProgram(v);function w(R){if(n.debug.checkShaderErrors){const D=r.getProgramInfoLog(v)||"",N=r.getShaderInfoLog(T)||"",q=r.getShaderInfoLog(E)||"",B=D.trim(),V=N.trim(),Y=q.trim();let z=!0,I=!0;if(r.getProgramParameter(v,r.LINK_STATUS)===!1)if(z=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,v,T,E);else{const G=jl(r,T,"vertex"),Q=jl(r,E,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(v,r.VALIDATE_STATUS)+`

Material Name: `+R.name+`
Material Type: `+R.type+`

Program Info Log: `+B+`
`+G+`
`+Q)}else B!==""?console.warn("THREE.WebGLProgram: Program Info Log:",B):(V===""||Y==="")&&(I=!1);I&&(R.diagnostics={runnable:z,programLog:B,vertexShader:{log:V,prefix:p},fragmentShader:{log:Y,prefix:u}})}r.deleteShader(T),r.deleteShader(E),P=new Es(r,v),_=og(r,v)}let P;this.getUniforms=function(){return P===void 0&&w(this),P};let _;this.getAttributes=function(){return _===void 0&&w(this),_};let x=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return x===!1&&(x=r.getProgramParameter(v,Jm)),x},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(v),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Qm++,this.cacheKey=t,this.usedTimes=1,this.program=v,this.vertexShader=T,this.fragmentShader=E,this}let vg=0;class Mg{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,i=t.fragmentShader,r=this._getShaderStage(e),s=this._getShaderStage(i),a=this._getShaderCacheForMaterial(t);return a.has(r)===!1&&(a.add(r),r.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const i of e)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let i=e.get(t);return i===void 0&&(i=new Set,e.set(t,i)),i}_getShaderStage(t){const e=this.shaderCache;let i=e.get(t);return i===void 0&&(i=new yg(t),e.set(t,i)),i}}class yg{constructor(t){this.id=vg++,this.code=t,this.usedTimes=0}}function Sg(n,t,e,i,r,s,a){const o=new No,c=new Mg,l=new Set,h=[],d=r.logarithmicDepthBuffer,m=r.vertexTextures;let f=r.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(_){return l.add(_),_===0?"uv":`uv${_}`}function p(_,x,R,D,N){const q=D.fog,B=N.geometry,V=_.isMeshStandardMaterial?D.environment:null,Y=(_.isMeshStandardMaterial?e:t).get(_.envMap||V),z=Y&&Y.mapping===Us?Y.image.height:null,I=g[_.type];_.precision!==null&&(f=r.getMaxPrecision(_.precision),f!==_.precision&&console.warn("THREE.WebGLProgram.getParameters:",_.precision,"not supported, using",f,"instead."));const G=B.morphAttributes.position||B.morphAttributes.normal||B.morphAttributes.color,Q=G!==void 0?G.length:0;let nt=0;B.morphAttributes.position!==void 0&&(nt=1),B.morphAttributes.normal!==void 0&&(nt=2),B.morphAttributes.color!==void 0&&(nt=3);let Lt,zt,Wt,W;if(I){const se=vn[I];Lt=se.vertexShader,zt=se.fragmentShader}else Lt=_.vertexShader,zt=_.fragmentShader,c.update(_),Wt=c.getVertexShaderID(_),W=c.getFragmentShaderID(_);const Z=n.getRenderTarget(),xt=n.state.buffers.depth.getReversed(),Pt=N.isInstancedMesh===!0,bt=N.isBatchedMesh===!0,Zt=!!_.map,be=!!_.matcap,L=!!Y,lt=!!_.aoMap,ut=!!_.lightMap,ft=!!_.bumpMap,ht=!!_.normalMap,dt=!!_.displacementMap,et=!!_.emissiveMap,vt=!!_.metalnessMap,Xt=!!_.roughnessMap,Dt=_.anisotropy>0,C=_.clearcoat>0,y=_.dispersion>0,k=_.iridescence>0,X=_.sheen>0,J=_.transmission>0,K=Dt&&!!_.anisotropyMap,Mt=C&&!!_.clearcoatMap,it=C&&!!_.clearcoatNormalMap,yt=C&&!!_.clearcoatRoughnessMap,St=k&&!!_.iridescenceMap,rt=k&&!!_.iridescenceThicknessMap,mt=X&&!!_.sheenColorMap,Nt=X&&!!_.sheenRoughnessMap,wt=!!_.specularMap,pt=!!_.specularColorMap,Yt=!!_.specularIntensityMap,U=J&&!!_.transmissionMap,st=J&&!!_.thicknessMap,ct=!!_.gradientMap,Tt=!!_.alphaMap,at=_.alphaTest>0,tt=!!_.alphaHash,Ct=!!_.extensions;let qt=Qn;_.toneMapped&&(Z===null||Z.isXRRenderTarget===!0)&&(qt=n.toneMapping);const fe={shaderID:I,shaderType:_.type,shaderName:_.name,vertexShader:Lt,fragmentShader:zt,defines:_.defines,customVertexShaderID:Wt,customFragmentShaderID:W,isRawShaderMaterial:_.isRawShaderMaterial===!0,glslVersion:_.glslVersion,precision:f,batching:bt,batchingColor:bt&&N._colorsTexture!==null,instancing:Pt,instancingColor:Pt&&N.instanceColor!==null,instancingMorph:Pt&&N.morphTexture!==null,supportsVertexTextures:m,outputColorSpace:Z===null?n.outputColorSpace:Z.isXRRenderTarget===!0?Z.texture.colorSpace:nr,alphaToCoverage:!!_.alphaToCoverage,map:Zt,matcap:be,envMap:L,envMapMode:L&&Y.mapping,envMapCubeUVHeight:z,aoMap:lt,lightMap:ut,bumpMap:ft,normalMap:ht,displacementMap:m&&dt,emissiveMap:et,normalMapObjectSpace:ht&&_.normalMapType===tu,normalMapTangentSpace:ht&&_.normalMapType===Qh,metalnessMap:vt,roughnessMap:Xt,anisotropy:Dt,anisotropyMap:K,clearcoat:C,clearcoatMap:Mt,clearcoatNormalMap:it,clearcoatRoughnessMap:yt,dispersion:y,iridescence:k,iridescenceMap:St,iridescenceThicknessMap:rt,sheen:X,sheenColorMap:mt,sheenRoughnessMap:Nt,specularMap:wt,specularColorMap:pt,specularIntensityMap:Yt,transmission:J,transmissionMap:U,thicknessMap:st,gradientMap:ct,opaque:_.transparent===!1&&_.blending===xi&&_.alphaToCoverage===!1,alphaMap:Tt,alphaTest:at,alphaHash:tt,combine:_.combine,mapUv:Zt&&v(_.map.channel),aoMapUv:lt&&v(_.aoMap.channel),lightMapUv:ut&&v(_.lightMap.channel),bumpMapUv:ft&&v(_.bumpMap.channel),normalMapUv:ht&&v(_.normalMap.channel),displacementMapUv:dt&&v(_.displacementMap.channel),emissiveMapUv:et&&v(_.emissiveMap.channel),metalnessMapUv:vt&&v(_.metalnessMap.channel),roughnessMapUv:Xt&&v(_.roughnessMap.channel),anisotropyMapUv:K&&v(_.anisotropyMap.channel),clearcoatMapUv:Mt&&v(_.clearcoatMap.channel),clearcoatNormalMapUv:it&&v(_.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:yt&&v(_.clearcoatRoughnessMap.channel),iridescenceMapUv:St&&v(_.iridescenceMap.channel),iridescenceThicknessMapUv:rt&&v(_.iridescenceThicknessMap.channel),sheenColorMapUv:mt&&v(_.sheenColorMap.channel),sheenRoughnessMapUv:Nt&&v(_.sheenRoughnessMap.channel),specularMapUv:wt&&v(_.specularMap.channel),specularColorMapUv:pt&&v(_.specularColorMap.channel),specularIntensityMapUv:Yt&&v(_.specularIntensityMap.channel),transmissionMapUv:U&&v(_.transmissionMap.channel),thicknessMapUv:st&&v(_.thicknessMap.channel),alphaMapUv:Tt&&v(_.alphaMap.channel),vertexTangents:!!B.attributes.tangent&&(ht||Dt),vertexColors:_.vertexColors,vertexAlphas:_.vertexColors===!0&&!!B.attributes.color&&B.attributes.color.itemSize===4,pointsUvs:N.isPoints===!0&&!!B.attributes.uv&&(Zt||Tt),fog:!!q,useFog:_.fog===!0,fogExp2:!!q&&q.isFogExp2,flatShading:_.flatShading===!0&&_.wireframe===!1,sizeAttenuation:_.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:xt,skinning:N.isSkinnedMesh===!0,morphTargets:B.morphAttributes.position!==void 0,morphNormals:B.morphAttributes.normal!==void 0,morphColors:B.morphAttributes.color!==void 0,morphTargetsCount:Q,morphTextureStride:nt,numDirLights:x.directional.length,numPointLights:x.point.length,numSpotLights:x.spot.length,numSpotLightMaps:x.spotLightMap.length,numRectAreaLights:x.rectArea.length,numHemiLights:x.hemi.length,numDirLightShadows:x.directionalShadowMap.length,numPointLightShadows:x.pointShadowMap.length,numSpotLightShadows:x.spotShadowMap.length,numSpotLightShadowsWithMaps:x.numSpotLightShadowsWithMaps,numLightProbes:x.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:_.dithering,shadowMapEnabled:n.shadowMap.enabled&&R.length>0,shadowMapType:n.shadowMap.type,toneMapping:qt,decodeVideoTexture:Zt&&_.map.isVideoTexture===!0&&re.getTransfer(_.map.colorSpace)===ce,decodeVideoTextureEmissive:et&&_.emissiveMap.isVideoTexture===!0&&re.getTransfer(_.emissiveMap.colorSpace)===ce,premultipliedAlpha:_.premultipliedAlpha,doubleSided:_.side===In,flipSided:_.side===We,useDepthPacking:_.depthPacking>=0,depthPacking:_.depthPacking||0,index0AttributeName:_.index0AttributeName,extensionClipCullDistance:Ct&&_.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ct&&_.extensions.multiDraw===!0||bt)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:_.customProgramCacheKey()};return fe.vertexUv1s=l.has(1),fe.vertexUv2s=l.has(2),fe.vertexUv3s=l.has(3),l.clear(),fe}function u(_){const x=[];if(_.shaderID?x.push(_.shaderID):(x.push(_.customVertexShaderID),x.push(_.customFragmentShaderID)),_.defines!==void 0)for(const R in _.defines)x.push(R),x.push(_.defines[R]);return _.isRawShaderMaterial===!1&&(b(x,_),S(x,_),x.push(n.outputColorSpace)),x.push(_.customProgramCacheKey),x.join()}function b(_,x){_.push(x.precision),_.push(x.outputColorSpace),_.push(x.envMapMode),_.push(x.envMapCubeUVHeight),_.push(x.mapUv),_.push(x.alphaMapUv),_.push(x.lightMapUv),_.push(x.aoMapUv),_.push(x.bumpMapUv),_.push(x.normalMapUv),_.push(x.displacementMapUv),_.push(x.emissiveMapUv),_.push(x.metalnessMapUv),_.push(x.roughnessMapUv),_.push(x.anisotropyMapUv),_.push(x.clearcoatMapUv),_.push(x.clearcoatNormalMapUv),_.push(x.clearcoatRoughnessMapUv),_.push(x.iridescenceMapUv),_.push(x.iridescenceThicknessMapUv),_.push(x.sheenColorMapUv),_.push(x.sheenRoughnessMapUv),_.push(x.specularMapUv),_.push(x.specularColorMapUv),_.push(x.specularIntensityMapUv),_.push(x.transmissionMapUv),_.push(x.thicknessMapUv),_.push(x.combine),_.push(x.fogExp2),_.push(x.sizeAttenuation),_.push(x.morphTargetsCount),_.push(x.morphAttributeCount),_.push(x.numDirLights),_.push(x.numPointLights),_.push(x.numSpotLights),_.push(x.numSpotLightMaps),_.push(x.numHemiLights),_.push(x.numRectAreaLights),_.push(x.numDirLightShadows),_.push(x.numPointLightShadows),_.push(x.numSpotLightShadows),_.push(x.numSpotLightShadowsWithMaps),_.push(x.numLightProbes),_.push(x.shadowMapType),_.push(x.toneMapping),_.push(x.numClippingPlanes),_.push(x.numClipIntersection),_.push(x.depthPacking)}function S(_,x){o.disableAll(),x.supportsVertexTextures&&o.enable(0),x.instancing&&o.enable(1),x.instancingColor&&o.enable(2),x.instancingMorph&&o.enable(3),x.matcap&&o.enable(4),x.envMap&&o.enable(5),x.normalMapObjectSpace&&o.enable(6),x.normalMapTangentSpace&&o.enable(7),x.clearcoat&&o.enable(8),x.iridescence&&o.enable(9),x.alphaTest&&o.enable(10),x.vertexColors&&o.enable(11),x.vertexAlphas&&o.enable(12),x.vertexUv1s&&o.enable(13),x.vertexUv2s&&o.enable(14),x.vertexUv3s&&o.enable(15),x.vertexTangents&&o.enable(16),x.anisotropy&&o.enable(17),x.alphaHash&&o.enable(18),x.batching&&o.enable(19),x.dispersion&&o.enable(20),x.batchingColor&&o.enable(21),x.gradientMap&&o.enable(22),_.push(o.mask),o.disableAll(),x.fog&&o.enable(0),x.useFog&&o.enable(1),x.flatShading&&o.enable(2),x.logarithmicDepthBuffer&&o.enable(3),x.reversedDepthBuffer&&o.enable(4),x.skinning&&o.enable(5),x.morphTargets&&o.enable(6),x.morphNormals&&o.enable(7),x.morphColors&&o.enable(8),x.premultipliedAlpha&&o.enable(9),x.shadowMapEnabled&&o.enable(10),x.doubleSided&&o.enable(11),x.flipSided&&o.enable(12),x.useDepthPacking&&o.enable(13),x.dithering&&o.enable(14),x.transmission&&o.enable(15),x.sheen&&o.enable(16),x.opaque&&o.enable(17),x.pointsUvs&&o.enable(18),x.decodeVideoTexture&&o.enable(19),x.decodeVideoTextureEmissive&&o.enable(20),x.alphaToCoverage&&o.enable(21),_.push(o.mask)}function M(_){const x=g[_.type];let R;if(x){const D=vn[x];R=Wu.clone(D.uniforms)}else R=_.uniforms;return R}function T(_,x){let R;for(let D=0,N=h.length;D<N;D++){const q=h[D];if(q.cacheKey===x){R=q,++R.usedTimes;break}}return R===void 0&&(R=new xg(n,x,_,s),h.push(R)),R}function E(_){if(--_.usedTimes===0){const x=h.indexOf(_);h[x]=h[h.length-1],h.pop(),_.destroy()}}function w(_){c.remove(_)}function P(){c.dispose()}return{getParameters:p,getProgramCacheKey:u,getUniforms:M,acquireProgram:T,releaseProgram:E,releaseShaderCache:w,programs:h,dispose:P}}function Eg(){let n=new WeakMap;function t(a){return n.has(a)}function e(a){let o=n.get(a);return o===void 0&&(o={},n.set(a,o)),o}function i(a){n.delete(a)}function r(a,o,c){n.get(a)[o]=c}function s(){n=new WeakMap}return{has:t,get:e,remove:i,update:r,dispose:s}}function bg(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.material.id!==t.material.id?n.material.id-t.material.id:n.z!==t.z?n.z-t.z:n.id-t.id}function tc(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.z!==t.z?t.z-n.z:n.id-t.id}function ec(){const n=[];let t=0;const e=[],i=[],r=[];function s(){t=0,e.length=0,i.length=0,r.length=0}function a(d,m,f,g,v,p){let u=n[t];return u===void 0?(u={id:d.id,object:d,geometry:m,material:f,groupOrder:g,renderOrder:d.renderOrder,z:v,group:p},n[t]=u):(u.id=d.id,u.object=d,u.geometry=m,u.material=f,u.groupOrder=g,u.renderOrder=d.renderOrder,u.z=v,u.group=p),t++,u}function o(d,m,f,g,v,p){const u=a(d,m,f,g,v,p);f.transmission>0?i.push(u):f.transparent===!0?r.push(u):e.push(u)}function c(d,m,f,g,v,p){const u=a(d,m,f,g,v,p);f.transmission>0?i.unshift(u):f.transparent===!0?r.unshift(u):e.unshift(u)}function l(d,m){e.length>1&&e.sort(d||bg),i.length>1&&i.sort(m||tc),r.length>1&&r.sort(m||tc)}function h(){for(let d=t,m=n.length;d<m;d++){const f=n[d];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:e,transmissive:i,transparent:r,init:s,push:o,unshift:c,finish:h,sort:l}}function Tg(){let n=new WeakMap;function t(i,r){const s=n.get(i);let a;return s===void 0?(a=new ec,n.set(i,[a])):r>=s.length?(a=new ec,s.push(a)):a=s[r],a}function e(){n=new WeakMap}return{get:t,dispose:e}}function Ag(){const n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new F,color:new kt};break;case"SpotLight":e={position:new F,direction:new F,color:new kt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new F,color:new kt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new F,skyColor:new kt,groundColor:new kt};break;case"RectAreaLight":e={color:new kt,position:new F,halfWidth:new F,halfHeight:new F};break}return n[t.id]=e,e}}}function wg(){const n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Bt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Bt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Bt,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[t.id]=e,e}}}let Rg=0;function Cg(n,t){return(t.castShadow?2:0)-(n.castShadow?2:0)+(t.map?1:0)-(n.map?1:0)}function Pg(n){const t=new Ag,e=wg(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)i.probe.push(new F);const r=new F,s=new _e,a=new _e;function o(l){let h=0,d=0,m=0;for(let _=0;_<9;_++)i.probe[_].set(0,0,0);let f=0,g=0,v=0,p=0,u=0,b=0,S=0,M=0,T=0,E=0,w=0;l.sort(Cg);for(let _=0,x=l.length;_<x;_++){const R=l[_],D=R.color,N=R.intensity,q=R.distance,B=R.shadow&&R.shadow.map?R.shadow.map.texture:null;if(R.isAmbientLight)h+=D.r*N,d+=D.g*N,m+=D.b*N;else if(R.isLightProbe){for(let V=0;V<9;V++)i.probe[V].addScaledVector(R.sh.coefficients[V],N);w++}else if(R.isDirectionalLight){const V=t.get(R);if(V.color.copy(R.color).multiplyScalar(R.intensity),R.castShadow){const Y=R.shadow,z=e.get(R);z.shadowIntensity=Y.intensity,z.shadowBias=Y.bias,z.shadowNormalBias=Y.normalBias,z.shadowRadius=Y.radius,z.shadowMapSize=Y.mapSize,i.directionalShadow[f]=z,i.directionalShadowMap[f]=B,i.directionalShadowMatrix[f]=R.shadow.matrix,b++}i.directional[f]=V,f++}else if(R.isSpotLight){const V=t.get(R);V.position.setFromMatrixPosition(R.matrixWorld),V.color.copy(D).multiplyScalar(N),V.distance=q,V.coneCos=Math.cos(R.angle),V.penumbraCos=Math.cos(R.angle*(1-R.penumbra)),V.decay=R.decay,i.spot[v]=V;const Y=R.shadow;if(R.map&&(i.spotLightMap[T]=R.map,T++,Y.updateMatrices(R),R.castShadow&&E++),i.spotLightMatrix[v]=Y.matrix,R.castShadow){const z=e.get(R);z.shadowIntensity=Y.intensity,z.shadowBias=Y.bias,z.shadowNormalBias=Y.normalBias,z.shadowRadius=Y.radius,z.shadowMapSize=Y.mapSize,i.spotShadow[v]=z,i.spotShadowMap[v]=B,M++}v++}else if(R.isRectAreaLight){const V=t.get(R);V.color.copy(D).multiplyScalar(N),V.halfWidth.set(R.width*.5,0,0),V.halfHeight.set(0,R.height*.5,0),i.rectArea[p]=V,p++}else if(R.isPointLight){const V=t.get(R);if(V.color.copy(R.color).multiplyScalar(R.intensity),V.distance=R.distance,V.decay=R.decay,R.castShadow){const Y=R.shadow,z=e.get(R);z.shadowIntensity=Y.intensity,z.shadowBias=Y.bias,z.shadowNormalBias=Y.normalBias,z.shadowRadius=Y.radius,z.shadowMapSize=Y.mapSize,z.shadowCameraNear=Y.camera.near,z.shadowCameraFar=Y.camera.far,i.pointShadow[g]=z,i.pointShadowMap[g]=B,i.pointShadowMatrix[g]=R.shadow.matrix,S++}i.point[g]=V,g++}else if(R.isHemisphereLight){const V=t.get(R);V.skyColor.copy(R.color).multiplyScalar(N),V.groundColor.copy(R.groundColor).multiplyScalar(N),i.hemi[u]=V,u++}}p>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=gt.LTC_FLOAT_1,i.rectAreaLTC2=gt.LTC_FLOAT_2):(i.rectAreaLTC1=gt.LTC_HALF_1,i.rectAreaLTC2=gt.LTC_HALF_2)),i.ambient[0]=h,i.ambient[1]=d,i.ambient[2]=m;const P=i.hash;(P.directionalLength!==f||P.pointLength!==g||P.spotLength!==v||P.rectAreaLength!==p||P.hemiLength!==u||P.numDirectionalShadows!==b||P.numPointShadows!==S||P.numSpotShadows!==M||P.numSpotMaps!==T||P.numLightProbes!==w)&&(i.directional.length=f,i.spot.length=v,i.rectArea.length=p,i.point.length=g,i.hemi.length=u,i.directionalShadow.length=b,i.directionalShadowMap.length=b,i.pointShadow.length=S,i.pointShadowMap.length=S,i.spotShadow.length=M,i.spotShadowMap.length=M,i.directionalShadowMatrix.length=b,i.pointShadowMatrix.length=S,i.spotLightMatrix.length=M+T-E,i.spotLightMap.length=T,i.numSpotLightShadowsWithMaps=E,i.numLightProbes=w,P.directionalLength=f,P.pointLength=g,P.spotLength=v,P.rectAreaLength=p,P.hemiLength=u,P.numDirectionalShadows=b,P.numPointShadows=S,P.numSpotShadows=M,P.numSpotMaps=T,P.numLightProbes=w,i.version=Rg++)}function c(l,h){let d=0,m=0,f=0,g=0,v=0;const p=h.matrixWorldInverse;for(let u=0,b=l.length;u<b;u++){const S=l[u];if(S.isDirectionalLight){const M=i.directional[d];M.direction.setFromMatrixPosition(S.matrixWorld),r.setFromMatrixPosition(S.target.matrixWorld),M.direction.sub(r),M.direction.transformDirection(p),d++}else if(S.isSpotLight){const M=i.spot[f];M.position.setFromMatrixPosition(S.matrixWorld),M.position.applyMatrix4(p),M.direction.setFromMatrixPosition(S.matrixWorld),r.setFromMatrixPosition(S.target.matrixWorld),M.direction.sub(r),M.direction.transformDirection(p),f++}else if(S.isRectAreaLight){const M=i.rectArea[g];M.position.setFromMatrixPosition(S.matrixWorld),M.position.applyMatrix4(p),a.identity(),s.copy(S.matrixWorld),s.premultiply(p),a.extractRotation(s),M.halfWidth.set(S.width*.5,0,0),M.halfHeight.set(0,S.height*.5,0),M.halfWidth.applyMatrix4(a),M.halfHeight.applyMatrix4(a),g++}else if(S.isPointLight){const M=i.point[m];M.position.setFromMatrixPosition(S.matrixWorld),M.position.applyMatrix4(p),m++}else if(S.isHemisphereLight){const M=i.hemi[v];M.direction.setFromMatrixPosition(S.matrixWorld),M.direction.transformDirection(p),v++}}}return{setup:o,setupView:c,state:i}}function nc(n){const t=new Pg(n),e=[],i=[];function r(h){l.camera=h,e.length=0,i.length=0}function s(h){e.push(h)}function a(h){i.push(h)}function o(){t.setup(e)}function c(h){t.setupView(e,h)}const l={lightsArray:e,shadowsArray:i,camera:null,lights:t,transmissionRenderTarget:{}};return{init:r,state:l,setupLights:o,setupLightsView:c,pushLight:s,pushShadow:a}}function Dg(n){let t=new WeakMap;function e(r,s=0){const a=t.get(r);let o;return a===void 0?(o=new nc(n),t.set(r,[o])):s>=a.length?(o=new nc(n),a.push(o)):o=a[s],o}function i(){t=new WeakMap}return{get:e,dispose:i}}const Lg=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Ig=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function Ug(n,t,e){let i=new Hc;const r=new Bt,s=new Bt,a=new Me,o=new rf({depthPacking:Jh}),c=new sf,l={},h=e.maxTextureSize,d={[ei]:We,[We]:ei,[In]:In},m=new ii({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Bt},radius:{value:4}},vertexShader:Lg,fragmentShader:Ig}),f=m.clone();f.defines.HORIZONTAL_PASS=1;const g=new ae;g.setAttribute("position",new ne(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new sn(g,m),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=vc;let u=this.type;this.render=function(E,w,P){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||E.length===0)return;const _=n.getRenderTarget(),x=n.getActiveCubeFace(),R=n.getActiveMipmapLevel(),D=n.state;D.setBlending(Jn),D.buffers.depth.getReversed()===!0?D.buffers.color.setClear(0,0,0,0):D.buffers.color.setClear(1,1,1,1),D.buffers.depth.setTest(!0),D.setScissorTest(!1);const N=u!==Ln&&this.type===Ln,q=u===Ln&&this.type!==Ln;for(let B=0,V=E.length;B<V;B++){const Y=E[B],z=Y.shadow;if(z===void 0){console.warn("THREE.WebGLShadowMap:",Y,"has no shadow.");continue}if(z.autoUpdate===!1&&z.needsUpdate===!1)continue;r.copy(z.mapSize);const I=z.getFrameExtents();if(r.multiply(I),s.copy(z.mapSize),(r.x>h||r.y>h)&&(r.x>h&&(s.x=Math.floor(h/I.x),r.x=s.x*I.x,z.mapSize.x=s.x),r.y>h&&(s.y=Math.floor(h/I.y),r.y=s.y*I.y,z.mapSize.y=s.y)),z.map===null||N===!0||q===!0){const Q=this.type!==Ln?{minFilter:_n,magFilter:_n}:{};z.map!==null&&z.map.dispose(),z.map=new yi(r.x,r.y,Q),z.map.texture.name=Y.name+".shadowMap",z.camera.updateProjectionMatrix()}n.setRenderTarget(z.map),n.clear();const G=z.getViewportCount();for(let Q=0;Q<G;Q++){const nt=z.getViewport(Q);a.set(s.x*nt.x,s.y*nt.y,s.x*nt.z,s.y*nt.w),D.viewport(a),z.updateMatrices(Y,Q),i=z.getFrustum(),M(w,P,z.camera,Y,this.type)}z.isPointLightShadow!==!0&&this.type===Ln&&b(z,P),z.needsUpdate=!1}u=this.type,p.needsUpdate=!1,n.setRenderTarget(_,x,R)};function b(E,w){const P=t.update(v);m.defines.VSM_SAMPLES!==E.blurSamples&&(m.defines.VSM_SAMPLES=E.blurSamples,f.defines.VSM_SAMPLES=E.blurSamples,m.needsUpdate=!0,f.needsUpdate=!0),E.mapPass===null&&(E.mapPass=new yi(r.x,r.y)),m.uniforms.shadow_pass.value=E.map.texture,m.uniforms.resolution.value=E.mapSize,m.uniforms.radius.value=E.radius,n.setRenderTarget(E.mapPass),n.clear(),n.renderBufferDirect(w,null,P,m,v,null),f.uniforms.shadow_pass.value=E.mapPass.texture,f.uniforms.resolution.value=E.mapSize,f.uniforms.radius.value=E.radius,n.setRenderTarget(E.map),n.clear(),n.renderBufferDirect(w,null,P,f,v,null)}function S(E,w,P,_){let x=null;const R=P.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(R!==void 0)x=R;else if(x=P.isPointLight===!0?c:o,n.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0||w.map&&w.alphaTest>0||w.alphaToCoverage===!0){const D=x.uuid,N=w.uuid;let q=l[D];q===void 0&&(q={},l[D]=q);let B=q[N];B===void 0&&(B=x.clone(),q[N]=B,w.addEventListener("dispose",T)),x=B}if(x.visible=w.visible,x.wireframe=w.wireframe,_===Ln?x.side=w.shadowSide!==null?w.shadowSide:w.side:x.side=w.shadowSide!==null?w.shadowSide:d[w.side],x.alphaMap=w.alphaMap,x.alphaTest=w.alphaToCoverage===!0?.5:w.alphaTest,x.map=w.map,x.clipShadows=w.clipShadows,x.clippingPlanes=w.clippingPlanes,x.clipIntersection=w.clipIntersection,x.displacementMap=w.displacementMap,x.displacementScale=w.displacementScale,x.displacementBias=w.displacementBias,x.wireframeLinewidth=w.wireframeLinewidth,x.linewidth=w.linewidth,P.isPointLight===!0&&x.isMeshDistanceMaterial===!0){const D=n.properties.get(x);D.light=P}return x}function M(E,w,P,_,x){if(E.visible===!1)return;if(E.layers.test(w.layers)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&x===Ln)&&(!E.frustumCulled||i.intersectsObject(E))){E.modelViewMatrix.multiplyMatrices(P.matrixWorldInverse,E.matrixWorld);const N=t.update(E),q=E.material;if(Array.isArray(q)){const B=N.groups;for(let V=0,Y=B.length;V<Y;V++){const z=B[V],I=q[z.materialIndex];if(I&&I.visible){const G=S(E,I,_,x);E.onBeforeShadow(n,E,w,P,N,G,z),n.renderBufferDirect(P,null,N,G,E,z),E.onAfterShadow(n,E,w,P,N,G,z)}}}else if(q.visible){const B=S(E,q,_,x);E.onBeforeShadow(n,E,w,P,N,B,null),n.renderBufferDirect(P,null,N,B,E,null),E.onAfterShadow(n,E,w,P,N,B,null)}}const D=E.children;for(let N=0,q=D.length;N<q;N++)M(D[N],w,P,_,x)}function T(E){E.target.removeEventListener("dispose",T);for(const P in l){const _=l[P],x=E.target.uuid;x in _&&(_[x].dispose(),delete _[x])}}}const Fg={[Ra]:Ca,[Pa]:Ia,[Da]:Ua,[Qi]:La,[Ca]:Ra,[Ia]:Pa,[Ua]:Da,[La]:Qi};function Ng(n,t){function e(){let U=!1;const st=new Me;let ct=null;const Tt=new Me(0,0,0,0);return{setMask:function(at){ct!==at&&!U&&(n.colorMask(at,at,at,at),ct=at)},setLocked:function(at){U=at},setClear:function(at,tt,Ct,qt,fe){fe===!0&&(at*=qt,tt*=qt,Ct*=qt),st.set(at,tt,Ct,qt),Tt.equals(st)===!1&&(n.clearColor(at,tt,Ct,qt),Tt.copy(st))},reset:function(){U=!1,ct=null,Tt.set(-1,0,0,0)}}}function i(){let U=!1,st=!1,ct=null,Tt=null,at=null;return{setReversed:function(tt){if(st!==tt){const Ct=t.get("EXT_clip_control");tt?Ct.clipControlEXT(Ct.LOWER_LEFT_EXT,Ct.ZERO_TO_ONE_EXT):Ct.clipControlEXT(Ct.LOWER_LEFT_EXT,Ct.NEGATIVE_ONE_TO_ONE_EXT),st=tt;const qt=at;at=null,this.setClear(qt)}},getReversed:function(){return st},setTest:function(tt){tt?Z(n.DEPTH_TEST):xt(n.DEPTH_TEST)},setMask:function(tt){ct!==tt&&!U&&(n.depthMask(tt),ct=tt)},setFunc:function(tt){if(st&&(tt=Fg[tt]),Tt!==tt){switch(tt){case Ra:n.depthFunc(n.NEVER);break;case Ca:n.depthFunc(n.ALWAYS);break;case Pa:n.depthFunc(n.LESS);break;case Qi:n.depthFunc(n.LEQUAL);break;case Da:n.depthFunc(n.EQUAL);break;case La:n.depthFunc(n.GEQUAL);break;case Ia:n.depthFunc(n.GREATER);break;case Ua:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}Tt=tt}},setLocked:function(tt){U=tt},setClear:function(tt){at!==tt&&(st&&(tt=1-tt),n.clearDepth(tt),at=tt)},reset:function(){U=!1,ct=null,Tt=null,at=null,st=!1}}}function r(){let U=!1,st=null,ct=null,Tt=null,at=null,tt=null,Ct=null,qt=null,fe=null;return{setTest:function(se){U||(se?Z(n.STENCIL_TEST):xt(n.STENCIL_TEST))},setMask:function(se){st!==se&&!U&&(n.stencilMask(se),st=se)},setFunc:function(se,An,xn){(ct!==se||Tt!==An||at!==xn)&&(n.stencilFunc(se,An,xn),ct=se,Tt=An,at=xn)},setOp:function(se,An,xn){(tt!==se||Ct!==An||qt!==xn)&&(n.stencilOp(se,An,xn),tt=se,Ct=An,qt=xn)},setLocked:function(se){U=se},setClear:function(se){fe!==se&&(n.clearStencil(se),fe=se)},reset:function(){U=!1,st=null,ct=null,Tt=null,at=null,tt=null,Ct=null,qt=null,fe=null}}}const s=new e,a=new i,o=new r,c=new WeakMap,l=new WeakMap;let h={},d={},m=new WeakMap,f=[],g=null,v=!1,p=null,u=null,b=null,S=null,M=null,T=null,E=null,w=new kt(0,0,0),P=0,_=!1,x=null,R=null,D=null,N=null,q=null;const B=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let V=!1,Y=0;const z=n.getParameter(n.VERSION);z.indexOf("WebGL")!==-1?(Y=parseFloat(/^WebGL (\d)/.exec(z)[1]),V=Y>=1):z.indexOf("OpenGL ES")!==-1&&(Y=parseFloat(/^OpenGL ES (\d)/.exec(z)[1]),V=Y>=2);let I=null,G={};const Q=n.getParameter(n.SCISSOR_BOX),nt=n.getParameter(n.VIEWPORT),Lt=new Me().fromArray(Q),zt=new Me().fromArray(nt);function Wt(U,st,ct,Tt){const at=new Uint8Array(4),tt=n.createTexture();n.bindTexture(U,tt),n.texParameteri(U,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(U,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Ct=0;Ct<ct;Ct++)U===n.TEXTURE_3D||U===n.TEXTURE_2D_ARRAY?n.texImage3D(st,0,n.RGBA,1,1,Tt,0,n.RGBA,n.UNSIGNED_BYTE,at):n.texImage2D(st+Ct,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,at);return tt}const W={};W[n.TEXTURE_2D]=Wt(n.TEXTURE_2D,n.TEXTURE_2D,1),W[n.TEXTURE_CUBE_MAP]=Wt(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),W[n.TEXTURE_2D_ARRAY]=Wt(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),W[n.TEXTURE_3D]=Wt(n.TEXTURE_3D,n.TEXTURE_3D,1,1),s.setClear(0,0,0,1),a.setClear(1),o.setClear(0),Z(n.DEPTH_TEST),a.setFunc(Qi),ft(!1),ht(Zo),Z(n.CULL_FACE),lt(Jn);function Z(U){h[U]!==!0&&(n.enable(U),h[U]=!0)}function xt(U){h[U]!==!1&&(n.disable(U),h[U]=!1)}function Pt(U,st){return d[U]!==st?(n.bindFramebuffer(U,st),d[U]=st,U===n.DRAW_FRAMEBUFFER&&(d[n.FRAMEBUFFER]=st),U===n.FRAMEBUFFER&&(d[n.DRAW_FRAMEBUFFER]=st),!0):!1}function bt(U,st){let ct=f,Tt=!1;if(U){ct=m.get(st),ct===void 0&&(ct=[],m.set(st,ct));const at=U.textures;if(ct.length!==at.length||ct[0]!==n.COLOR_ATTACHMENT0){for(let tt=0,Ct=at.length;tt<Ct;tt++)ct[tt]=n.COLOR_ATTACHMENT0+tt;ct.length=at.length,Tt=!0}}else ct[0]!==n.BACK&&(ct[0]=n.BACK,Tt=!0);Tt&&n.drawBuffers(ct)}function Zt(U){return g!==U?(n.useProgram(U),g=U,!0):!1}const be={[mi]:n.FUNC_ADD,[Th]:n.FUNC_SUBTRACT,[Ah]:n.FUNC_REVERSE_SUBTRACT};be[wh]=n.MIN,be[Rh]=n.MAX;const L={[Ch]:n.ZERO,[Ph]:n.ONE,[Dh]:n.SRC_COLOR,[Aa]:n.SRC_ALPHA,[Oh]:n.SRC_ALPHA_SATURATE,[Fh]:n.DST_COLOR,[Ih]:n.DST_ALPHA,[Lh]:n.ONE_MINUS_SRC_COLOR,[wa]:n.ONE_MINUS_SRC_ALPHA,[Nh]:n.ONE_MINUS_DST_COLOR,[Uh]:n.ONE_MINUS_DST_ALPHA,[Bh]:n.CONSTANT_COLOR,[zh]:n.ONE_MINUS_CONSTANT_COLOR,[kh]:n.CONSTANT_ALPHA,[Hh]:n.ONE_MINUS_CONSTANT_ALPHA};function lt(U,st,ct,Tt,at,tt,Ct,qt,fe,se){if(U===Jn){v===!0&&(xt(n.BLEND),v=!1);return}if(v===!1&&(Z(n.BLEND),v=!0),U!==bh){if(U!==p||se!==_){if((u!==mi||M!==mi)&&(n.blendEquation(n.FUNC_ADD),u=mi,M=mi),se)switch(U){case xi:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Kt:n.blendFunc(n.ONE,n.ONE);break;case Jo:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Qo:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}else switch(U){case xi:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Kt:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case Jo:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Qo:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}b=null,S=null,T=null,E=null,w.set(0,0,0),P=0,p=U,_=se}return}at=at||st,tt=tt||ct,Ct=Ct||Tt,(st!==u||at!==M)&&(n.blendEquationSeparate(be[st],be[at]),u=st,M=at),(ct!==b||Tt!==S||tt!==T||Ct!==E)&&(n.blendFuncSeparate(L[ct],L[Tt],L[tt],L[Ct]),b=ct,S=Tt,T=tt,E=Ct),(qt.equals(w)===!1||fe!==P)&&(n.blendColor(qt.r,qt.g,qt.b,fe),w.copy(qt),P=fe),p=U,_=!1}function ut(U,st){U.side===In?xt(n.CULL_FACE):Z(n.CULL_FACE);let ct=U.side===We;st&&(ct=!ct),ft(ct),U.blending===xi&&U.transparent===!1?lt(Jn):lt(U.blending,U.blendEquation,U.blendSrc,U.blendDst,U.blendEquationAlpha,U.blendSrcAlpha,U.blendDstAlpha,U.blendColor,U.blendAlpha,U.premultipliedAlpha),a.setFunc(U.depthFunc),a.setTest(U.depthTest),a.setMask(U.depthWrite),s.setMask(U.colorWrite);const Tt=U.stencilWrite;o.setTest(Tt),Tt&&(o.setMask(U.stencilWriteMask),o.setFunc(U.stencilFunc,U.stencilRef,U.stencilFuncMask),o.setOp(U.stencilFail,U.stencilZFail,U.stencilZPass)),et(U.polygonOffset,U.polygonOffsetFactor,U.polygonOffsetUnits),U.alphaToCoverage===!0?Z(n.SAMPLE_ALPHA_TO_COVERAGE):xt(n.SAMPLE_ALPHA_TO_COVERAGE)}function ft(U){x!==U&&(U?n.frontFace(n.CW):n.frontFace(n.CCW),x=U)}function ht(U){U!==yh?(Z(n.CULL_FACE),U!==R&&(U===Zo?n.cullFace(n.BACK):U===Sh?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):xt(n.CULL_FACE),R=U}function dt(U){U!==D&&(V&&n.lineWidth(U),D=U)}function et(U,st,ct){U?(Z(n.POLYGON_OFFSET_FILL),(N!==st||q!==ct)&&(n.polygonOffset(st,ct),N=st,q=ct)):xt(n.POLYGON_OFFSET_FILL)}function vt(U){U?Z(n.SCISSOR_TEST):xt(n.SCISSOR_TEST)}function Xt(U){U===void 0&&(U=n.TEXTURE0+B-1),I!==U&&(n.activeTexture(U),I=U)}function Dt(U,st,ct){ct===void 0&&(I===null?ct=n.TEXTURE0+B-1:ct=I);let Tt=G[ct];Tt===void 0&&(Tt={type:void 0,texture:void 0},G[ct]=Tt),(Tt.type!==U||Tt.texture!==st)&&(I!==ct&&(n.activeTexture(ct),I=ct),n.bindTexture(U,st||W[U]),Tt.type=U,Tt.texture=st)}function C(){const U=G[I];U!==void 0&&U.type!==void 0&&(n.bindTexture(U.type,null),U.type=void 0,U.texture=void 0)}function y(){try{n.compressedTexImage2D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function k(){try{n.compressedTexImage3D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function X(){try{n.texSubImage2D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function J(){try{n.texSubImage3D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function K(){try{n.compressedTexSubImage2D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Mt(){try{n.compressedTexSubImage3D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function it(){try{n.texStorage2D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function yt(){try{n.texStorage3D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function St(){try{n.texImage2D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function rt(){try{n.texImage3D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function mt(U){Lt.equals(U)===!1&&(n.scissor(U.x,U.y,U.z,U.w),Lt.copy(U))}function Nt(U){zt.equals(U)===!1&&(n.viewport(U.x,U.y,U.z,U.w),zt.copy(U))}function wt(U,st){let ct=l.get(st);ct===void 0&&(ct=new WeakMap,l.set(st,ct));let Tt=ct.get(U);Tt===void 0&&(Tt=n.getUniformBlockIndex(st,U.name),ct.set(U,Tt))}function pt(U,st){const Tt=l.get(st).get(U);c.get(st)!==Tt&&(n.uniformBlockBinding(st,Tt,U.__bindingPointIndex),c.set(st,Tt))}function Yt(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),a.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),h={},I=null,G={},d={},m=new WeakMap,f=[],g=null,v=!1,p=null,u=null,b=null,S=null,M=null,T=null,E=null,w=new kt(0,0,0),P=0,_=!1,x=null,R=null,D=null,N=null,q=null,Lt.set(0,0,n.canvas.width,n.canvas.height),zt.set(0,0,n.canvas.width,n.canvas.height),s.reset(),a.reset(),o.reset()}return{buffers:{color:s,depth:a,stencil:o},enable:Z,disable:xt,bindFramebuffer:Pt,drawBuffers:bt,useProgram:Zt,setBlending:lt,setMaterial:ut,setFlipSided:ft,setCullFace:ht,setLineWidth:dt,setPolygonOffset:et,setScissorTest:vt,activeTexture:Xt,bindTexture:Dt,unbindTexture:C,compressedTexImage2D:y,compressedTexImage3D:k,texImage2D:St,texImage3D:rt,updateUBOMapping:wt,uniformBlockBinding:pt,texStorage2D:it,texStorage3D:yt,texSubImage2D:X,texSubImage3D:J,compressedTexSubImage2D:K,compressedTexSubImage3D:Mt,scissor:mt,viewport:Nt,reset:Yt}}function Og(n,t,e,i,r,s,a){const o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new Bt,h=new WeakMap;let d;const m=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(C,y){return f?new OffscreenCanvas(C,y):Rs("canvas")}function v(C,y,k){let X=1;const J=Dt(C);if((J.width>k||J.height>k)&&(X=k/Math.max(J.width,J.height)),X<1)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap||typeof VideoFrame<"u"&&C instanceof VideoFrame){const K=Math.floor(X*J.width),Mt=Math.floor(X*J.height);d===void 0&&(d=g(K,Mt));const it=y?g(K,Mt):d;return it.width=K,it.height=Mt,it.getContext("2d").drawImage(C,0,0,K,Mt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+J.width+"x"+J.height+") to ("+K+"x"+Mt+")."),it}else return"data"in C&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+J.width+"x"+J.height+")."),C;return C}function p(C){return C.generateMipmaps}function u(C){n.generateMipmap(C)}function b(C){return C.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:C.isWebGL3DRenderTarget?n.TEXTURE_3D:C.isWebGLArrayRenderTarget||C.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function S(C,y,k,X,J=!1){if(C!==null){if(n[C]!==void 0)return n[C];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let K=y;if(y===n.RED&&(k===n.FLOAT&&(K=n.R32F),k===n.HALF_FLOAT&&(K=n.R16F),k===n.UNSIGNED_BYTE&&(K=n.R8)),y===n.RED_INTEGER&&(k===n.UNSIGNED_BYTE&&(K=n.R8UI),k===n.UNSIGNED_SHORT&&(K=n.R16UI),k===n.UNSIGNED_INT&&(K=n.R32UI),k===n.BYTE&&(K=n.R8I),k===n.SHORT&&(K=n.R16I),k===n.INT&&(K=n.R32I)),y===n.RG&&(k===n.FLOAT&&(K=n.RG32F),k===n.HALF_FLOAT&&(K=n.RG16F),k===n.UNSIGNED_BYTE&&(K=n.RG8)),y===n.RG_INTEGER&&(k===n.UNSIGNED_BYTE&&(K=n.RG8UI),k===n.UNSIGNED_SHORT&&(K=n.RG16UI),k===n.UNSIGNED_INT&&(K=n.RG32UI),k===n.BYTE&&(K=n.RG8I),k===n.SHORT&&(K=n.RG16I),k===n.INT&&(K=n.RG32I)),y===n.RGB_INTEGER&&(k===n.UNSIGNED_BYTE&&(K=n.RGB8UI),k===n.UNSIGNED_SHORT&&(K=n.RGB16UI),k===n.UNSIGNED_INT&&(K=n.RGB32UI),k===n.BYTE&&(K=n.RGB8I),k===n.SHORT&&(K=n.RGB16I),k===n.INT&&(K=n.RGB32I)),y===n.RGBA_INTEGER&&(k===n.UNSIGNED_BYTE&&(K=n.RGBA8UI),k===n.UNSIGNED_SHORT&&(K=n.RGBA16UI),k===n.UNSIGNED_INT&&(K=n.RGBA32UI),k===n.BYTE&&(K=n.RGBA8I),k===n.SHORT&&(K=n.RGBA16I),k===n.INT&&(K=n.RGBA32I)),y===n.RGB&&(k===n.UNSIGNED_INT_5_9_9_9_REV&&(K=n.RGB9_E5),k===n.UNSIGNED_INT_10F_11F_11F_REV&&(K=n.R11F_G11F_B10F)),y===n.RGBA){const Mt=J?As:re.getTransfer(X);k===n.FLOAT&&(K=n.RGBA32F),k===n.HALF_FLOAT&&(K=n.RGBA16F),k===n.UNSIGNED_BYTE&&(K=Mt===ce?n.SRGB8_ALPHA8:n.RGBA8),k===n.UNSIGNED_SHORT_4_4_4_4&&(K=n.RGBA4),k===n.UNSIGNED_SHORT_5_5_5_1&&(K=n.RGB5_A1)}return(K===n.R16F||K===n.R32F||K===n.RG16F||K===n.RG32F||K===n.RGBA16F||K===n.RGBA32F)&&t.get("EXT_color_buffer_float"),K}function M(C,y){let k;return C?y===null||y===Mi||y===Sr?k=n.DEPTH24_STENCIL8:y===Un?k=n.DEPTH32F_STENCIL8:y===yr&&(k=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):y===null||y===Mi||y===Sr?k=n.DEPTH_COMPONENT24:y===Un?k=n.DEPTH_COMPONENT32F:y===yr&&(k=n.DEPTH_COMPONENT16),k}function T(C,y){return p(C)===!0||C.isFramebufferTexture&&C.minFilter!==_n&&C.minFilter!==dn?Math.log2(Math.max(y.width,y.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?y.mipmaps.length:1}function E(C){const y=C.target;y.removeEventListener("dispose",E),P(y),y.isVideoTexture&&h.delete(y)}function w(C){const y=C.target;y.removeEventListener("dispose",w),x(y)}function P(C){const y=i.get(C);if(y.__webglInit===void 0)return;const k=C.source,X=m.get(k);if(X){const J=X[y.__cacheKey];J.usedTimes--,J.usedTimes===0&&_(C),Object.keys(X).length===0&&m.delete(k)}i.remove(C)}function _(C){const y=i.get(C);n.deleteTexture(y.__webglTexture);const k=C.source,X=m.get(k);delete X[y.__cacheKey],a.memory.textures--}function x(C){const y=i.get(C);if(C.depthTexture&&(C.depthTexture.dispose(),i.remove(C.depthTexture)),C.isWebGLCubeRenderTarget)for(let X=0;X<6;X++){if(Array.isArray(y.__webglFramebuffer[X]))for(let J=0;J<y.__webglFramebuffer[X].length;J++)n.deleteFramebuffer(y.__webglFramebuffer[X][J]);else n.deleteFramebuffer(y.__webglFramebuffer[X]);y.__webglDepthbuffer&&n.deleteRenderbuffer(y.__webglDepthbuffer[X])}else{if(Array.isArray(y.__webglFramebuffer))for(let X=0;X<y.__webglFramebuffer.length;X++)n.deleteFramebuffer(y.__webglFramebuffer[X]);else n.deleteFramebuffer(y.__webglFramebuffer);if(y.__webglDepthbuffer&&n.deleteRenderbuffer(y.__webglDepthbuffer),y.__webglMultisampledFramebuffer&&n.deleteFramebuffer(y.__webglMultisampledFramebuffer),y.__webglColorRenderbuffer)for(let X=0;X<y.__webglColorRenderbuffer.length;X++)y.__webglColorRenderbuffer[X]&&n.deleteRenderbuffer(y.__webglColorRenderbuffer[X]);y.__webglDepthRenderbuffer&&n.deleteRenderbuffer(y.__webglDepthRenderbuffer)}const k=C.textures;for(let X=0,J=k.length;X<J;X++){const K=i.get(k[X]);K.__webglTexture&&(n.deleteTexture(K.__webglTexture),a.memory.textures--),i.remove(k[X])}i.remove(C)}let R=0;function D(){R=0}function N(){const C=R;return C>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+C+" texture units while this GPU supports only "+r.maxTextures),R+=1,C}function q(C){const y=[];return y.push(C.wrapS),y.push(C.wrapT),y.push(C.wrapR||0),y.push(C.magFilter),y.push(C.minFilter),y.push(C.anisotropy),y.push(C.internalFormat),y.push(C.format),y.push(C.type),y.push(C.generateMipmaps),y.push(C.premultiplyAlpha),y.push(C.flipY),y.push(C.unpackAlignment),y.push(C.colorSpace),y.join()}function B(C,y){const k=i.get(C);if(C.isVideoTexture&&vt(C),C.isRenderTargetTexture===!1&&C.isExternalTexture!==!0&&C.version>0&&k.__version!==C.version){const X=C.image;if(X===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(X.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{W(k,C,y);return}}else C.isExternalTexture&&(k.__webglTexture=C.sourceTexture?C.sourceTexture:null);e.bindTexture(n.TEXTURE_2D,k.__webglTexture,n.TEXTURE0+y)}function V(C,y){const k=i.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&k.__version!==C.version){W(k,C,y);return}e.bindTexture(n.TEXTURE_2D_ARRAY,k.__webglTexture,n.TEXTURE0+y)}function Y(C,y){const k=i.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&k.__version!==C.version){W(k,C,y);return}e.bindTexture(n.TEXTURE_3D,k.__webglTexture,n.TEXTURE0+y)}function z(C,y){const k=i.get(C);if(C.version>0&&k.__version!==C.version){Z(k,C,y);return}e.bindTexture(n.TEXTURE_CUBE_MAP,k.__webglTexture,n.TEXTURE0+y)}const I={[Oa]:n.REPEAT,[_i]:n.CLAMP_TO_EDGE,[Ba]:n.MIRRORED_REPEAT},G={[_n]:n.NEAREST,[Kh]:n.NEAREST_MIPMAP_NEAREST,[kr]:n.NEAREST_MIPMAP_LINEAR,[dn]:n.LINEAR,[Ws]:n.LINEAR_MIPMAP_NEAREST,[jn]:n.LINEAR_MIPMAP_LINEAR},Q={[eu]:n.NEVER,[ou]:n.ALWAYS,[nu]:n.LESS,[Dc]:n.LEQUAL,[iu]:n.EQUAL,[au]:n.GEQUAL,[ru]:n.GREATER,[su]:n.NOTEQUAL};function nt(C,y){if(y.type===Un&&t.has("OES_texture_float_linear")===!1&&(y.magFilter===dn||y.magFilter===Ws||y.magFilter===kr||y.magFilter===jn||y.minFilter===dn||y.minFilter===Ws||y.minFilter===kr||y.minFilter===jn)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(C,n.TEXTURE_WRAP_S,I[y.wrapS]),n.texParameteri(C,n.TEXTURE_WRAP_T,I[y.wrapT]),(C===n.TEXTURE_3D||C===n.TEXTURE_2D_ARRAY)&&n.texParameteri(C,n.TEXTURE_WRAP_R,I[y.wrapR]),n.texParameteri(C,n.TEXTURE_MAG_FILTER,G[y.magFilter]),n.texParameteri(C,n.TEXTURE_MIN_FILTER,G[y.minFilter]),y.compareFunction&&(n.texParameteri(C,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(C,n.TEXTURE_COMPARE_FUNC,Q[y.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(y.magFilter===_n||y.minFilter!==kr&&y.minFilter!==jn||y.type===Un&&t.has("OES_texture_float_linear")===!1)return;if(y.anisotropy>1||i.get(y).__currentAnisotropy){const k=t.get("EXT_texture_filter_anisotropic");n.texParameterf(C,k.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(y.anisotropy,r.getMaxAnisotropy())),i.get(y).__currentAnisotropy=y.anisotropy}}}function Lt(C,y){let k=!1;C.__webglInit===void 0&&(C.__webglInit=!0,y.addEventListener("dispose",E));const X=y.source;let J=m.get(X);J===void 0&&(J={},m.set(X,J));const K=q(y);if(K!==C.__cacheKey){J[K]===void 0&&(J[K]={texture:n.createTexture(),usedTimes:0},a.memory.textures++,k=!0),J[K].usedTimes++;const Mt=J[C.__cacheKey];Mt!==void 0&&(J[C.__cacheKey].usedTimes--,Mt.usedTimes===0&&_(y)),C.__cacheKey=K,C.__webglTexture=J[K].texture}return k}function zt(C,y,k){return Math.floor(Math.floor(C/k)/y)}function Wt(C,y,k,X){const K=C.updateRanges;if(K.length===0)e.texSubImage2D(n.TEXTURE_2D,0,0,0,y.width,y.height,k,X,y.data);else{K.sort((rt,mt)=>rt.start-mt.start);let Mt=0;for(let rt=1;rt<K.length;rt++){const mt=K[Mt],Nt=K[rt],wt=mt.start+mt.count,pt=zt(Nt.start,y.width,4),Yt=zt(mt.start,y.width,4);Nt.start<=wt+1&&pt===Yt&&zt(Nt.start+Nt.count-1,y.width,4)===pt?mt.count=Math.max(mt.count,Nt.start+Nt.count-mt.start):(++Mt,K[Mt]=Nt)}K.length=Mt+1;const it=n.getParameter(n.UNPACK_ROW_LENGTH),yt=n.getParameter(n.UNPACK_SKIP_PIXELS),St=n.getParameter(n.UNPACK_SKIP_ROWS);n.pixelStorei(n.UNPACK_ROW_LENGTH,y.width);for(let rt=0,mt=K.length;rt<mt;rt++){const Nt=K[rt],wt=Math.floor(Nt.start/4),pt=Math.ceil(Nt.count/4),Yt=wt%y.width,U=Math.floor(wt/y.width),st=pt,ct=1;n.pixelStorei(n.UNPACK_SKIP_PIXELS,Yt),n.pixelStorei(n.UNPACK_SKIP_ROWS,U),e.texSubImage2D(n.TEXTURE_2D,0,Yt,U,st,ct,k,X,y.data)}C.clearUpdateRanges(),n.pixelStorei(n.UNPACK_ROW_LENGTH,it),n.pixelStorei(n.UNPACK_SKIP_PIXELS,yt),n.pixelStorei(n.UNPACK_SKIP_ROWS,St)}}function W(C,y,k){let X=n.TEXTURE_2D;(y.isDataArrayTexture||y.isCompressedArrayTexture)&&(X=n.TEXTURE_2D_ARRAY),y.isData3DTexture&&(X=n.TEXTURE_3D);const J=Lt(C,y),K=y.source;e.bindTexture(X,C.__webglTexture,n.TEXTURE0+k);const Mt=i.get(K);if(K.version!==Mt.__version||J===!0){e.activeTexture(n.TEXTURE0+k);const it=re.getPrimaries(re.workingColorSpace),yt=y.colorSpace===qn?null:re.getPrimaries(y.colorSpace),St=y.colorSpace===qn||it===yt?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,y.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,y.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,St);let rt=v(y.image,!1,r.maxTextureSize);rt=Xt(y,rt);const mt=s.convert(y.format,y.colorSpace),Nt=s.convert(y.type);let wt=S(y.internalFormat,mt,Nt,y.colorSpace,y.isVideoTexture);nt(X,y);let pt;const Yt=y.mipmaps,U=y.isVideoTexture!==!0,st=Mt.__version===void 0||J===!0,ct=K.dataReady,Tt=T(y,rt);if(y.isDepthTexture)wt=M(y.format===br,y.type),st&&(U?e.texStorage2D(n.TEXTURE_2D,1,wt,rt.width,rt.height):e.texImage2D(n.TEXTURE_2D,0,wt,rt.width,rt.height,0,mt,Nt,null));else if(y.isDataTexture)if(Yt.length>0){U&&st&&e.texStorage2D(n.TEXTURE_2D,Tt,wt,Yt[0].width,Yt[0].height);for(let at=0,tt=Yt.length;at<tt;at++)pt=Yt[at],U?ct&&e.texSubImage2D(n.TEXTURE_2D,at,0,0,pt.width,pt.height,mt,Nt,pt.data):e.texImage2D(n.TEXTURE_2D,at,wt,pt.width,pt.height,0,mt,Nt,pt.data);y.generateMipmaps=!1}else U?(st&&e.texStorage2D(n.TEXTURE_2D,Tt,wt,rt.width,rt.height),ct&&Wt(y,rt,mt,Nt)):e.texImage2D(n.TEXTURE_2D,0,wt,rt.width,rt.height,0,mt,Nt,rt.data);else if(y.isCompressedTexture)if(y.isCompressedArrayTexture){U&&st&&e.texStorage3D(n.TEXTURE_2D_ARRAY,Tt,wt,Yt[0].width,Yt[0].height,rt.depth);for(let at=0,tt=Yt.length;at<tt;at++)if(pt=Yt[at],y.format!==pn)if(mt!==null)if(U){if(ct)if(y.layerUpdates.size>0){const Ct=Ll(pt.width,pt.height,y.format,y.type);for(const qt of y.layerUpdates){const fe=pt.data.subarray(qt*Ct/pt.data.BYTES_PER_ELEMENT,(qt+1)*Ct/pt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,at,0,0,qt,pt.width,pt.height,1,mt,fe)}y.clearLayerUpdates()}else e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,at,0,0,0,pt.width,pt.height,rt.depth,mt,pt.data)}else e.compressedTexImage3D(n.TEXTURE_2D_ARRAY,at,wt,pt.width,pt.height,rt.depth,0,pt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else U?ct&&e.texSubImage3D(n.TEXTURE_2D_ARRAY,at,0,0,0,pt.width,pt.height,rt.depth,mt,Nt,pt.data):e.texImage3D(n.TEXTURE_2D_ARRAY,at,wt,pt.width,pt.height,rt.depth,0,mt,Nt,pt.data)}else{U&&st&&e.texStorage2D(n.TEXTURE_2D,Tt,wt,Yt[0].width,Yt[0].height);for(let at=0,tt=Yt.length;at<tt;at++)pt=Yt[at],y.format!==pn?mt!==null?U?ct&&e.compressedTexSubImage2D(n.TEXTURE_2D,at,0,0,pt.width,pt.height,mt,pt.data):e.compressedTexImage2D(n.TEXTURE_2D,at,wt,pt.width,pt.height,0,pt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):U?ct&&e.texSubImage2D(n.TEXTURE_2D,at,0,0,pt.width,pt.height,mt,Nt,pt.data):e.texImage2D(n.TEXTURE_2D,at,wt,pt.width,pt.height,0,mt,Nt,pt.data)}else if(y.isDataArrayTexture)if(U){if(st&&e.texStorage3D(n.TEXTURE_2D_ARRAY,Tt,wt,rt.width,rt.height,rt.depth),ct)if(y.layerUpdates.size>0){const at=Ll(rt.width,rt.height,y.format,y.type);for(const tt of y.layerUpdates){const Ct=rt.data.subarray(tt*at/rt.data.BYTES_PER_ELEMENT,(tt+1)*at/rt.data.BYTES_PER_ELEMENT);e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,tt,rt.width,rt.height,1,mt,Nt,Ct)}y.clearLayerUpdates()}else e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,rt.width,rt.height,rt.depth,mt,Nt,rt.data)}else e.texImage3D(n.TEXTURE_2D_ARRAY,0,wt,rt.width,rt.height,rt.depth,0,mt,Nt,rt.data);else if(y.isData3DTexture)U?(st&&e.texStorage3D(n.TEXTURE_3D,Tt,wt,rt.width,rt.height,rt.depth),ct&&e.texSubImage3D(n.TEXTURE_3D,0,0,0,0,rt.width,rt.height,rt.depth,mt,Nt,rt.data)):e.texImage3D(n.TEXTURE_3D,0,wt,rt.width,rt.height,rt.depth,0,mt,Nt,rt.data);else if(y.isFramebufferTexture){if(st)if(U)e.texStorage2D(n.TEXTURE_2D,Tt,wt,rt.width,rt.height);else{let at=rt.width,tt=rt.height;for(let Ct=0;Ct<Tt;Ct++)e.texImage2D(n.TEXTURE_2D,Ct,wt,at,tt,0,mt,Nt,null),at>>=1,tt>>=1}}else if(Yt.length>0){if(U&&st){const at=Dt(Yt[0]);e.texStorage2D(n.TEXTURE_2D,Tt,wt,at.width,at.height)}for(let at=0,tt=Yt.length;at<tt;at++)pt=Yt[at],U?ct&&e.texSubImage2D(n.TEXTURE_2D,at,0,0,mt,Nt,pt):e.texImage2D(n.TEXTURE_2D,at,wt,mt,Nt,pt);y.generateMipmaps=!1}else if(U){if(st){const at=Dt(rt);e.texStorage2D(n.TEXTURE_2D,Tt,wt,at.width,at.height)}ct&&e.texSubImage2D(n.TEXTURE_2D,0,0,0,mt,Nt,rt)}else e.texImage2D(n.TEXTURE_2D,0,wt,mt,Nt,rt);p(y)&&u(X),Mt.__version=K.version,y.onUpdate&&y.onUpdate(y)}C.__version=y.version}function Z(C,y,k){if(y.image.length!==6)return;const X=Lt(C,y),J=y.source;e.bindTexture(n.TEXTURE_CUBE_MAP,C.__webglTexture,n.TEXTURE0+k);const K=i.get(J);if(J.version!==K.__version||X===!0){e.activeTexture(n.TEXTURE0+k);const Mt=re.getPrimaries(re.workingColorSpace),it=y.colorSpace===qn?null:re.getPrimaries(y.colorSpace),yt=y.colorSpace===qn||Mt===it?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,y.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,y.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,yt);const St=y.isCompressedTexture||y.image[0].isCompressedTexture,rt=y.image[0]&&y.image[0].isDataTexture,mt=[];for(let tt=0;tt<6;tt++)!St&&!rt?mt[tt]=v(y.image[tt],!0,r.maxCubemapSize):mt[tt]=rt?y.image[tt].image:y.image[tt],mt[tt]=Xt(y,mt[tt]);const Nt=mt[0],wt=s.convert(y.format,y.colorSpace),pt=s.convert(y.type),Yt=S(y.internalFormat,wt,pt,y.colorSpace),U=y.isVideoTexture!==!0,st=K.__version===void 0||X===!0,ct=J.dataReady;let Tt=T(y,Nt);nt(n.TEXTURE_CUBE_MAP,y);let at;if(St){U&&st&&e.texStorage2D(n.TEXTURE_CUBE_MAP,Tt,Yt,Nt.width,Nt.height);for(let tt=0;tt<6;tt++){at=mt[tt].mipmaps;for(let Ct=0;Ct<at.length;Ct++){const qt=at[Ct];y.format!==pn?wt!==null?U?ct&&e.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+tt,Ct,0,0,qt.width,qt.height,wt,qt.data):e.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+tt,Ct,Yt,qt.width,qt.height,0,qt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):U?ct&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+tt,Ct,0,0,qt.width,qt.height,wt,pt,qt.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+tt,Ct,Yt,qt.width,qt.height,0,wt,pt,qt.data)}}}else{if(at=y.mipmaps,U&&st){at.length>0&&Tt++;const tt=Dt(mt[0]);e.texStorage2D(n.TEXTURE_CUBE_MAP,Tt,Yt,tt.width,tt.height)}for(let tt=0;tt<6;tt++)if(rt){U?ct&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+tt,0,0,0,mt[tt].width,mt[tt].height,wt,pt,mt[tt].data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+tt,0,Yt,mt[tt].width,mt[tt].height,0,wt,pt,mt[tt].data);for(let Ct=0;Ct<at.length;Ct++){const fe=at[Ct].image[tt].image;U?ct&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+tt,Ct+1,0,0,fe.width,fe.height,wt,pt,fe.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+tt,Ct+1,Yt,fe.width,fe.height,0,wt,pt,fe.data)}}else{U?ct&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+tt,0,0,0,wt,pt,mt[tt]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+tt,0,Yt,wt,pt,mt[tt]);for(let Ct=0;Ct<at.length;Ct++){const qt=at[Ct];U?ct&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+tt,Ct+1,0,0,wt,pt,qt.image[tt]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+tt,Ct+1,Yt,wt,pt,qt.image[tt])}}}p(y)&&u(n.TEXTURE_CUBE_MAP),K.__version=J.version,y.onUpdate&&y.onUpdate(y)}C.__version=y.version}function xt(C,y,k,X,J,K){const Mt=s.convert(k.format,k.colorSpace),it=s.convert(k.type),yt=S(k.internalFormat,Mt,it,k.colorSpace),St=i.get(y),rt=i.get(k);if(rt.__renderTarget=y,!St.__hasExternalTextures){const mt=Math.max(1,y.width>>K),Nt=Math.max(1,y.height>>K);J===n.TEXTURE_3D||J===n.TEXTURE_2D_ARRAY?e.texImage3D(J,K,yt,mt,Nt,y.depth,0,Mt,it,null):e.texImage2D(J,K,yt,mt,Nt,0,Mt,it,null)}e.bindFramebuffer(n.FRAMEBUFFER,C),et(y)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,X,J,rt.__webglTexture,0,dt(y)):(J===n.TEXTURE_2D||J>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&J<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,X,J,rt.__webglTexture,K),e.bindFramebuffer(n.FRAMEBUFFER,null)}function Pt(C,y,k){if(n.bindRenderbuffer(n.RENDERBUFFER,C),y.depthBuffer){const X=y.depthTexture,J=X&&X.isDepthTexture?X.type:null,K=M(y.stencilBuffer,J),Mt=y.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,it=dt(y);et(y)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,it,K,y.width,y.height):k?n.renderbufferStorageMultisample(n.RENDERBUFFER,it,K,y.width,y.height):n.renderbufferStorage(n.RENDERBUFFER,K,y.width,y.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,Mt,n.RENDERBUFFER,C)}else{const X=y.textures;for(let J=0;J<X.length;J++){const K=X[J],Mt=s.convert(K.format,K.colorSpace),it=s.convert(K.type),yt=S(K.internalFormat,Mt,it,K.colorSpace),St=dt(y);k&&et(y)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,St,yt,y.width,y.height):et(y)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,St,yt,y.width,y.height):n.renderbufferStorage(n.RENDERBUFFER,yt,y.width,y.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function bt(C,y){if(y&&y.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(n.FRAMEBUFFER,C),!(y.depthTexture&&y.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const X=i.get(y.depthTexture);X.__renderTarget=y,(!X.__webglTexture||y.depthTexture.image.width!==y.width||y.depthTexture.image.height!==y.height)&&(y.depthTexture.image.width=y.width,y.depthTexture.image.height=y.height,y.depthTexture.needsUpdate=!0),B(y.depthTexture,0);const J=X.__webglTexture,K=dt(y);if(y.depthTexture.format===Er)et(y)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,J,0,K):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,J,0);else if(y.depthTexture.format===br)et(y)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,J,0,K):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,J,0);else throw new Error("Unknown depthTexture format")}function Zt(C){const y=i.get(C),k=C.isWebGLCubeRenderTarget===!0;if(y.__boundDepthTexture!==C.depthTexture){const X=C.depthTexture;if(y.__depthDisposeCallback&&y.__depthDisposeCallback(),X){const J=()=>{delete y.__boundDepthTexture,delete y.__depthDisposeCallback,X.removeEventListener("dispose",J)};X.addEventListener("dispose",J),y.__depthDisposeCallback=J}y.__boundDepthTexture=X}if(C.depthTexture&&!y.__autoAllocateDepthBuffer){if(k)throw new Error("target.depthTexture not supported in Cube render targets");const X=C.texture.mipmaps;X&&X.length>0?bt(y.__webglFramebuffer[0],C):bt(y.__webglFramebuffer,C)}else if(k){y.__webglDepthbuffer=[];for(let X=0;X<6;X++)if(e.bindFramebuffer(n.FRAMEBUFFER,y.__webglFramebuffer[X]),y.__webglDepthbuffer[X]===void 0)y.__webglDepthbuffer[X]=n.createRenderbuffer(),Pt(y.__webglDepthbuffer[X],C,!1);else{const J=C.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,K=y.__webglDepthbuffer[X];n.bindRenderbuffer(n.RENDERBUFFER,K),n.framebufferRenderbuffer(n.FRAMEBUFFER,J,n.RENDERBUFFER,K)}}else{const X=C.texture.mipmaps;if(X&&X.length>0?e.bindFramebuffer(n.FRAMEBUFFER,y.__webglFramebuffer[0]):e.bindFramebuffer(n.FRAMEBUFFER,y.__webglFramebuffer),y.__webglDepthbuffer===void 0)y.__webglDepthbuffer=n.createRenderbuffer(),Pt(y.__webglDepthbuffer,C,!1);else{const J=C.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,K=y.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,K),n.framebufferRenderbuffer(n.FRAMEBUFFER,J,n.RENDERBUFFER,K)}}e.bindFramebuffer(n.FRAMEBUFFER,null)}function be(C,y,k){const X=i.get(C);y!==void 0&&xt(X.__webglFramebuffer,C,C.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),k!==void 0&&Zt(C)}function L(C){const y=C.texture,k=i.get(C),X=i.get(y);C.addEventListener("dispose",w);const J=C.textures,K=C.isWebGLCubeRenderTarget===!0,Mt=J.length>1;if(Mt||(X.__webglTexture===void 0&&(X.__webglTexture=n.createTexture()),X.__version=y.version,a.memory.textures++),K){k.__webglFramebuffer=[];for(let it=0;it<6;it++)if(y.mipmaps&&y.mipmaps.length>0){k.__webglFramebuffer[it]=[];for(let yt=0;yt<y.mipmaps.length;yt++)k.__webglFramebuffer[it][yt]=n.createFramebuffer()}else k.__webglFramebuffer[it]=n.createFramebuffer()}else{if(y.mipmaps&&y.mipmaps.length>0){k.__webglFramebuffer=[];for(let it=0;it<y.mipmaps.length;it++)k.__webglFramebuffer[it]=n.createFramebuffer()}else k.__webglFramebuffer=n.createFramebuffer();if(Mt)for(let it=0,yt=J.length;it<yt;it++){const St=i.get(J[it]);St.__webglTexture===void 0&&(St.__webglTexture=n.createTexture(),a.memory.textures++)}if(C.samples>0&&et(C)===!1){k.__webglMultisampledFramebuffer=n.createFramebuffer(),k.__webglColorRenderbuffer=[],e.bindFramebuffer(n.FRAMEBUFFER,k.__webglMultisampledFramebuffer);for(let it=0;it<J.length;it++){const yt=J[it];k.__webglColorRenderbuffer[it]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,k.__webglColorRenderbuffer[it]);const St=s.convert(yt.format,yt.colorSpace),rt=s.convert(yt.type),mt=S(yt.internalFormat,St,rt,yt.colorSpace,C.isXRRenderTarget===!0),Nt=dt(C);n.renderbufferStorageMultisample(n.RENDERBUFFER,Nt,mt,C.width,C.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+it,n.RENDERBUFFER,k.__webglColorRenderbuffer[it])}n.bindRenderbuffer(n.RENDERBUFFER,null),C.depthBuffer&&(k.__webglDepthRenderbuffer=n.createRenderbuffer(),Pt(k.__webglDepthRenderbuffer,C,!0)),e.bindFramebuffer(n.FRAMEBUFFER,null)}}if(K){e.bindTexture(n.TEXTURE_CUBE_MAP,X.__webglTexture),nt(n.TEXTURE_CUBE_MAP,y);for(let it=0;it<6;it++)if(y.mipmaps&&y.mipmaps.length>0)for(let yt=0;yt<y.mipmaps.length;yt++)xt(k.__webglFramebuffer[it][yt],C,y,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+it,yt);else xt(k.__webglFramebuffer[it],C,y,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+it,0);p(y)&&u(n.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Mt){for(let it=0,yt=J.length;it<yt;it++){const St=J[it],rt=i.get(St);let mt=n.TEXTURE_2D;(C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(mt=C.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),e.bindTexture(mt,rt.__webglTexture),nt(mt,St),xt(k.__webglFramebuffer,C,St,n.COLOR_ATTACHMENT0+it,mt,0),p(St)&&u(mt)}e.unbindTexture()}else{let it=n.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(it=C.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),e.bindTexture(it,X.__webglTexture),nt(it,y),y.mipmaps&&y.mipmaps.length>0)for(let yt=0;yt<y.mipmaps.length;yt++)xt(k.__webglFramebuffer[yt],C,y,n.COLOR_ATTACHMENT0,it,yt);else xt(k.__webglFramebuffer,C,y,n.COLOR_ATTACHMENT0,it,0);p(y)&&u(it),e.unbindTexture()}C.depthBuffer&&Zt(C)}function lt(C){const y=C.textures;for(let k=0,X=y.length;k<X;k++){const J=y[k];if(p(J)){const K=b(C),Mt=i.get(J).__webglTexture;e.bindTexture(K,Mt),u(K),e.unbindTexture()}}}const ut=[],ft=[];function ht(C){if(C.samples>0){if(et(C)===!1){const y=C.textures,k=C.width,X=C.height;let J=n.COLOR_BUFFER_BIT;const K=C.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Mt=i.get(C),it=y.length>1;if(it)for(let St=0;St<y.length;St++)e.bindFramebuffer(n.FRAMEBUFFER,Mt.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+St,n.RENDERBUFFER,null),e.bindFramebuffer(n.FRAMEBUFFER,Mt.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+St,n.TEXTURE_2D,null,0);e.bindFramebuffer(n.READ_FRAMEBUFFER,Mt.__webglMultisampledFramebuffer);const yt=C.texture.mipmaps;yt&&yt.length>0?e.bindFramebuffer(n.DRAW_FRAMEBUFFER,Mt.__webglFramebuffer[0]):e.bindFramebuffer(n.DRAW_FRAMEBUFFER,Mt.__webglFramebuffer);for(let St=0;St<y.length;St++){if(C.resolveDepthBuffer&&(C.depthBuffer&&(J|=n.DEPTH_BUFFER_BIT),C.stencilBuffer&&C.resolveStencilBuffer&&(J|=n.STENCIL_BUFFER_BIT)),it){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,Mt.__webglColorRenderbuffer[St]);const rt=i.get(y[St]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,rt,0)}n.blitFramebuffer(0,0,k,X,0,0,k,X,J,n.NEAREST),c===!0&&(ut.length=0,ft.length=0,ut.push(n.COLOR_ATTACHMENT0+St),C.depthBuffer&&C.resolveDepthBuffer===!1&&(ut.push(K),ft.push(K),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,ft)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,ut))}if(e.bindFramebuffer(n.READ_FRAMEBUFFER,null),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),it)for(let St=0;St<y.length;St++){e.bindFramebuffer(n.FRAMEBUFFER,Mt.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+St,n.RENDERBUFFER,Mt.__webglColorRenderbuffer[St]);const rt=i.get(y[St]).__webglTexture;e.bindFramebuffer(n.FRAMEBUFFER,Mt.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+St,n.TEXTURE_2D,rt,0)}e.bindFramebuffer(n.DRAW_FRAMEBUFFER,Mt.__webglMultisampledFramebuffer)}else if(C.depthBuffer&&C.resolveDepthBuffer===!1&&c){const y=C.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[y])}}}function dt(C){return Math.min(r.maxSamples,C.samples)}function et(C){const y=i.get(C);return C.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&y.__useRenderToTexture!==!1}function vt(C){const y=a.render.frame;h.get(C)!==y&&(h.set(C,y),C.update())}function Xt(C,y){const k=C.colorSpace,X=C.format,J=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||k!==nr&&k!==qn&&(re.getTransfer(k)===ce?(X!==pn||J!==On)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",k)),y}function Dt(C){return typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement?(l.width=C.naturalWidth||C.width,l.height=C.naturalHeight||C.height):typeof VideoFrame<"u"&&C instanceof VideoFrame?(l.width=C.displayWidth,l.height=C.displayHeight):(l.width=C.width,l.height=C.height),l}this.allocateTextureUnit=N,this.resetTextureUnits=D,this.setTexture2D=B,this.setTexture2DArray=V,this.setTexture3D=Y,this.setTextureCube=z,this.rebindTextures=be,this.setupRenderTarget=L,this.updateRenderTargetMipmap=lt,this.updateMultisampleRenderTarget=ht,this.setupDepthRenderbuffer=Zt,this.setupFrameBufferTexture=xt,this.useMultisampledRTT=et}function Bg(n,t){function e(i,r=qn){let s;const a=re.getTransfer(r);if(i===On)return n.UNSIGNED_BYTE;if(i===Co)return n.UNSIGNED_SHORT_4_4_4_4;if(i===Po)return n.UNSIGNED_SHORT_5_5_5_1;if(i===Tc)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===Ac)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===Ec)return n.BYTE;if(i===bc)return n.SHORT;if(i===yr)return n.UNSIGNED_SHORT;if(i===Ro)return n.INT;if(i===Mi)return n.UNSIGNED_INT;if(i===Un)return n.FLOAT;if(i===Dr)return n.HALF_FLOAT;if(i===wc)return n.ALPHA;if(i===Rc)return n.RGB;if(i===pn)return n.RGBA;if(i===Er)return n.DEPTH_COMPONENT;if(i===br)return n.DEPTH_STENCIL;if(i===Cc)return n.RED;if(i===Do)return n.RED_INTEGER;if(i===Pc)return n.RG;if(i===Lo)return n.RG_INTEGER;if(i===Io)return n.RGBA_INTEGER;if(i===vs||i===Ms||i===ys||i===Ss)if(a===ce)if(s=t.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===vs)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Ms)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===ys)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Ss)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=t.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===vs)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Ms)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===ys)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Ss)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===za||i===ka||i===Ha||i===Ga)if(s=t.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===za)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===ka)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Ha)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Ga)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Va||i===Wa||i===Xa)if(s=t.get("WEBGL_compressed_texture_etc"),s!==null){if(i===Va||i===Wa)return a===ce?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===Xa)return a===ce?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===Ya||i===qa||i===$a||i===ja||i===Ka||i===Za||i===Ja||i===Qa||i===to||i===eo||i===no||i===io||i===ro||i===so)if(s=t.get("WEBGL_compressed_texture_astc"),s!==null){if(i===Ya)return a===ce?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===qa)return a===ce?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===$a)return a===ce?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===ja)return a===ce?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Ka)return a===ce?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Za)return a===ce?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Ja)return a===ce?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Qa)return a===ce?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===to)return a===ce?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===eo)return a===ce?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===no)return a===ce?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===io)return a===ce?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===ro)return a===ce?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===so)return a===ce?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===ao||i===oo||i===lo)if(s=t.get("EXT_texture_compression_bptc"),s!==null){if(i===ao)return a===ce?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===oo)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===lo)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===co||i===ho||i===uo||i===fo)if(s=t.get("EXT_texture_compression_rgtc"),s!==null){if(i===co)return s.COMPRESSED_RED_RGTC1_EXT;if(i===ho)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===uo)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===fo)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Sr?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:e}}const zg=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,kg=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class Hg{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){const i=new Wc(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=i}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,i=new ii({vertexShader:zg,fragmentShader:kg,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new sn(new Ns(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Gg extends bi{constructor(t,e){super();const i=this;let r=null,s=1,a=null,o="local-floor",c=1,l=null,h=null,d=null,m=null,f=null,g=null;const v=typeof XRWebGLBinding<"u",p=new Hg,u={},b=e.getContextAttributes();let S=null,M=null;const T=[],E=[],w=new Bt;let P=null;const _=new en;_.viewport=new Me;const x=new en;x.viewport=new Me;const R=[_,x],D=new of;let N=null,q=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(W){let Z=T[W];return Z===void 0&&(Z=new ua,T[W]=Z),Z.getTargetRaySpace()},this.getControllerGrip=function(W){let Z=T[W];return Z===void 0&&(Z=new ua,T[W]=Z),Z.getGripSpace()},this.getHand=function(W){let Z=T[W];return Z===void 0&&(Z=new ua,T[W]=Z),Z.getHandSpace()};function B(W){const Z=E.indexOf(W.inputSource);if(Z===-1)return;const xt=T[Z];xt!==void 0&&(xt.update(W.inputSource,W.frame,l||a),xt.dispatchEvent({type:W.type,data:W.inputSource}))}function V(){r.removeEventListener("select",B),r.removeEventListener("selectstart",B),r.removeEventListener("selectend",B),r.removeEventListener("squeeze",B),r.removeEventListener("squeezestart",B),r.removeEventListener("squeezeend",B),r.removeEventListener("end",V),r.removeEventListener("inputsourceschange",Y);for(let W=0;W<T.length;W++){const Z=E[W];Z!==null&&(E[W]=null,T[W].disconnect(Z))}N=null,q=null,p.reset();for(const W in u)delete u[W];t.setRenderTarget(S),f=null,m=null,d=null,r=null,M=null,Wt.stop(),i.isPresenting=!1,t.setPixelRatio(P),t.setSize(w.width,w.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(W){s=W,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(W){o=W,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function(W){l=W},this.getBaseLayer=function(){return m!==null?m:f},this.getBinding=function(){return d===null&&v&&(d=new XRWebGLBinding(r,e)),d},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=async function(W){if(r=W,r!==null){if(S=t.getRenderTarget(),r.addEventListener("select",B),r.addEventListener("selectstart",B),r.addEventListener("selectend",B),r.addEventListener("squeeze",B),r.addEventListener("squeezestart",B),r.addEventListener("squeezeend",B),r.addEventListener("end",V),r.addEventListener("inputsourceschange",Y),b.xrCompatible!==!0&&await e.makeXRCompatible(),P=t.getPixelRatio(),t.getSize(w),v&&"createProjectionLayer"in XRWebGLBinding.prototype){let xt=null,Pt=null,bt=null;b.depth&&(bt=b.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,xt=b.stencil?br:Er,Pt=b.stencil?Sr:Mi);const Zt={colorFormat:e.RGBA8,depthFormat:bt,scaleFactor:s};d=this.getBinding(),m=d.createProjectionLayer(Zt),r.updateRenderState({layers:[m]}),t.setPixelRatio(1),t.setSize(m.textureWidth,m.textureHeight,!1),M=new yi(m.textureWidth,m.textureHeight,{format:pn,type:On,depthTexture:new Vc(m.textureWidth,m.textureHeight,Pt,void 0,void 0,void 0,void 0,void 0,void 0,xt),stencilBuffer:b.stencil,colorSpace:t.outputColorSpace,samples:b.antialias?4:0,resolveDepthBuffer:m.ignoreDepthValues===!1,resolveStencilBuffer:m.ignoreDepthValues===!1})}else{const xt={antialias:b.antialias,alpha:!0,depth:b.depth,stencil:b.stencil,framebufferScaleFactor:s};f=new XRWebGLLayer(r,e,xt),r.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),M=new yi(f.framebufferWidth,f.framebufferHeight,{format:pn,type:On,colorSpace:t.outputColorSpace,stencilBuffer:b.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}M.isXRRenderTarget=!0,this.setFoveation(c),l=null,a=await r.requestReferenceSpace(o),Wt.setContext(r),Wt.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return p.getDepthTexture()};function Y(W){for(let Z=0;Z<W.removed.length;Z++){const xt=W.removed[Z],Pt=E.indexOf(xt);Pt>=0&&(E[Pt]=null,T[Pt].disconnect(xt))}for(let Z=0;Z<W.added.length;Z++){const xt=W.added[Z];let Pt=E.indexOf(xt);if(Pt===-1){for(let Zt=0;Zt<T.length;Zt++)if(Zt>=E.length){E.push(xt),Pt=Zt;break}else if(E[Zt]===null){E[Zt]=xt,Pt=Zt;break}if(Pt===-1)break}const bt=T[Pt];bt&&bt.connect(xt)}}const z=new F,I=new F;function G(W,Z,xt){z.setFromMatrixPosition(Z.matrixWorld),I.setFromMatrixPosition(xt.matrixWorld);const Pt=z.distanceTo(I),bt=Z.projectionMatrix.elements,Zt=xt.projectionMatrix.elements,be=bt[14]/(bt[10]-1),L=bt[14]/(bt[10]+1),lt=(bt[9]+1)/bt[5],ut=(bt[9]-1)/bt[5],ft=(bt[8]-1)/bt[0],ht=(Zt[8]+1)/Zt[0],dt=be*ft,et=be*ht,vt=Pt/(-ft+ht),Xt=vt*-ft;if(Z.matrixWorld.decompose(W.position,W.quaternion,W.scale),W.translateX(Xt),W.translateZ(vt),W.matrixWorld.compose(W.position,W.quaternion,W.scale),W.matrixWorldInverse.copy(W.matrixWorld).invert(),bt[10]===-1)W.projectionMatrix.copy(Z.projectionMatrix),W.projectionMatrixInverse.copy(Z.projectionMatrixInverse);else{const Dt=be+vt,C=L+vt,y=dt-Xt,k=et+(Pt-Xt),X=lt*L/C*Dt,J=ut*L/C*Dt;W.projectionMatrix.makePerspective(y,k,X,J,Dt,C),W.projectionMatrixInverse.copy(W.projectionMatrix).invert()}}function Q(W,Z){Z===null?W.matrixWorld.copy(W.matrix):W.matrixWorld.multiplyMatrices(Z.matrixWorld,W.matrix),W.matrixWorldInverse.copy(W.matrixWorld).invert()}this.updateCamera=function(W){if(r===null)return;let Z=W.near,xt=W.far;p.texture!==null&&(p.depthNear>0&&(Z=p.depthNear),p.depthFar>0&&(xt=p.depthFar)),D.near=x.near=_.near=Z,D.far=x.far=_.far=xt,(N!==D.near||q!==D.far)&&(r.updateRenderState({depthNear:D.near,depthFar:D.far}),N=D.near,q=D.far),D.layers.mask=W.layers.mask|6,_.layers.mask=D.layers.mask&3,x.layers.mask=D.layers.mask&5;const Pt=W.parent,bt=D.cameras;Q(D,Pt);for(let Zt=0;Zt<bt.length;Zt++)Q(bt[Zt],Pt);bt.length===2?G(D,_,x):D.projectionMatrix.copy(_.projectionMatrix),nt(W,D,Pt)};function nt(W,Z,xt){xt===null?W.matrix.copy(Z.matrixWorld):(W.matrix.copy(xt.matrixWorld),W.matrix.invert(),W.matrix.multiply(Z.matrixWorld)),W.matrix.decompose(W.position,W.quaternion,W.scale),W.updateMatrixWorld(!0),W.projectionMatrix.copy(Z.projectionMatrix),W.projectionMatrixInverse.copy(Z.projectionMatrixInverse),W.isPerspectiveCamera&&(W.fov=Tr*2*Math.atan(1/W.projectionMatrix.elements[5]),W.zoom=1)}this.getCamera=function(){return D},this.getFoveation=function(){if(!(m===null&&f===null))return c},this.setFoveation=function(W){c=W,m!==null&&(m.fixedFoveation=W),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=W)},this.hasDepthSensing=function(){return p.texture!==null},this.getDepthSensingMesh=function(){return p.getMesh(D)},this.getCameraTexture=function(W){return u[W]};let Lt=null;function zt(W,Z){if(h=Z.getViewerPose(l||a),g=Z,h!==null){const xt=h.views;f!==null&&(t.setRenderTargetFramebuffer(M,f.framebuffer),t.setRenderTarget(M));let Pt=!1;xt.length!==D.cameras.length&&(D.cameras.length=0,Pt=!0);for(let L=0;L<xt.length;L++){const lt=xt[L];let ut=null;if(f!==null)ut=f.getViewport(lt);else{const ht=d.getViewSubImage(m,lt);ut=ht.viewport,L===0&&(t.setRenderTargetTextures(M,ht.colorTexture,ht.depthStencilTexture),t.setRenderTarget(M))}let ft=R[L];ft===void 0&&(ft=new en,ft.layers.enable(L),ft.viewport=new Me,R[L]=ft),ft.matrix.fromArray(lt.transform.matrix),ft.matrix.decompose(ft.position,ft.quaternion,ft.scale),ft.projectionMatrix.fromArray(lt.projectionMatrix),ft.projectionMatrixInverse.copy(ft.projectionMatrix).invert(),ft.viewport.set(ut.x,ut.y,ut.width,ut.height),L===0&&(D.matrix.copy(ft.matrix),D.matrix.decompose(D.position,D.quaternion,D.scale)),Pt===!0&&D.cameras.push(ft)}const bt=r.enabledFeatures;if(bt&&bt.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&v){d=i.getBinding();const L=d.getDepthInformation(xt[0]);L&&L.isValid&&L.texture&&p.init(L,r.renderState)}if(bt&&bt.includes("camera-access")&&v){t.state.unbindTexture(),d=i.getBinding();for(let L=0;L<xt.length;L++){const lt=xt[L].camera;if(lt){let ut=u[lt];ut||(ut=new Wc,u[lt]=ut);const ft=d.getCameraImage(lt);ut.sourceTexture=ft}}}}for(let xt=0;xt<T.length;xt++){const Pt=E[xt],bt=T[xt];Pt!==null&&bt!==void 0&&bt.update(Pt,Z,l||a)}Lt&&Lt(W,Z),Z.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:Z}),g=null}const Wt=new Xc;Wt.setAnimationLoop(zt),this.setAnimationLoop=function(W){Lt=W},this.dispose=function(){}}}const ui=new Bn,Vg=new _e;function Wg(n,t){function e(p,u){p.matrixAutoUpdate===!0&&p.updateMatrix(),u.value.copy(p.matrix)}function i(p,u){u.color.getRGB(p.fogColor.value,Oc(n)),u.isFog?(p.fogNear.value=u.near,p.fogFar.value=u.far):u.isFogExp2&&(p.fogDensity.value=u.density)}function r(p,u,b,S,M){u.isMeshBasicMaterial||u.isMeshLambertMaterial?s(p,u):u.isMeshToonMaterial?(s(p,u),d(p,u)):u.isMeshPhongMaterial?(s(p,u),h(p,u)):u.isMeshStandardMaterial?(s(p,u),m(p,u),u.isMeshPhysicalMaterial&&f(p,u,M)):u.isMeshMatcapMaterial?(s(p,u),g(p,u)):u.isMeshDepthMaterial?s(p,u):u.isMeshDistanceMaterial?(s(p,u),v(p,u)):u.isMeshNormalMaterial?s(p,u):u.isLineBasicMaterial?(a(p,u),u.isLineDashedMaterial&&o(p,u)):u.isPointsMaterial?c(p,u,b,S):u.isSpriteMaterial?l(p,u):u.isShadowMaterial?(p.color.value.copy(u.color),p.opacity.value=u.opacity):u.isShaderMaterial&&(u.uniformsNeedUpdate=!1)}function s(p,u){p.opacity.value=u.opacity,u.color&&p.diffuse.value.copy(u.color),u.emissive&&p.emissive.value.copy(u.emissive).multiplyScalar(u.emissiveIntensity),u.map&&(p.map.value=u.map,e(u.map,p.mapTransform)),u.alphaMap&&(p.alphaMap.value=u.alphaMap,e(u.alphaMap,p.alphaMapTransform)),u.bumpMap&&(p.bumpMap.value=u.bumpMap,e(u.bumpMap,p.bumpMapTransform),p.bumpScale.value=u.bumpScale,u.side===We&&(p.bumpScale.value*=-1)),u.normalMap&&(p.normalMap.value=u.normalMap,e(u.normalMap,p.normalMapTransform),p.normalScale.value.copy(u.normalScale),u.side===We&&p.normalScale.value.negate()),u.displacementMap&&(p.displacementMap.value=u.displacementMap,e(u.displacementMap,p.displacementMapTransform),p.displacementScale.value=u.displacementScale,p.displacementBias.value=u.displacementBias),u.emissiveMap&&(p.emissiveMap.value=u.emissiveMap,e(u.emissiveMap,p.emissiveMapTransform)),u.specularMap&&(p.specularMap.value=u.specularMap,e(u.specularMap,p.specularMapTransform)),u.alphaTest>0&&(p.alphaTest.value=u.alphaTest);const b=t.get(u),S=b.envMap,M=b.envMapRotation;S&&(p.envMap.value=S,ui.copy(M),ui.x*=-1,ui.y*=-1,ui.z*=-1,S.isCubeTexture&&S.isRenderTargetTexture===!1&&(ui.y*=-1,ui.z*=-1),p.envMapRotation.value.setFromMatrix4(Vg.makeRotationFromEuler(ui)),p.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=u.reflectivity,p.ior.value=u.ior,p.refractionRatio.value=u.refractionRatio),u.lightMap&&(p.lightMap.value=u.lightMap,p.lightMapIntensity.value=u.lightMapIntensity,e(u.lightMap,p.lightMapTransform)),u.aoMap&&(p.aoMap.value=u.aoMap,p.aoMapIntensity.value=u.aoMapIntensity,e(u.aoMap,p.aoMapTransform))}function a(p,u){p.diffuse.value.copy(u.color),p.opacity.value=u.opacity,u.map&&(p.map.value=u.map,e(u.map,p.mapTransform))}function o(p,u){p.dashSize.value=u.dashSize,p.totalSize.value=u.dashSize+u.gapSize,p.scale.value=u.scale}function c(p,u,b,S){p.diffuse.value.copy(u.color),p.opacity.value=u.opacity,p.size.value=u.size*b,p.scale.value=S*.5,u.map&&(p.map.value=u.map,e(u.map,p.uvTransform)),u.alphaMap&&(p.alphaMap.value=u.alphaMap,e(u.alphaMap,p.alphaMapTransform)),u.alphaTest>0&&(p.alphaTest.value=u.alphaTest)}function l(p,u){p.diffuse.value.copy(u.color),p.opacity.value=u.opacity,p.rotation.value=u.rotation,u.map&&(p.map.value=u.map,e(u.map,p.mapTransform)),u.alphaMap&&(p.alphaMap.value=u.alphaMap,e(u.alphaMap,p.alphaMapTransform)),u.alphaTest>0&&(p.alphaTest.value=u.alphaTest)}function h(p,u){p.specular.value.copy(u.specular),p.shininess.value=Math.max(u.shininess,1e-4)}function d(p,u){u.gradientMap&&(p.gradientMap.value=u.gradientMap)}function m(p,u){p.metalness.value=u.metalness,u.metalnessMap&&(p.metalnessMap.value=u.metalnessMap,e(u.metalnessMap,p.metalnessMapTransform)),p.roughness.value=u.roughness,u.roughnessMap&&(p.roughnessMap.value=u.roughnessMap,e(u.roughnessMap,p.roughnessMapTransform)),u.envMap&&(p.envMapIntensity.value=u.envMapIntensity)}function f(p,u,b){p.ior.value=u.ior,u.sheen>0&&(p.sheenColor.value.copy(u.sheenColor).multiplyScalar(u.sheen),p.sheenRoughness.value=u.sheenRoughness,u.sheenColorMap&&(p.sheenColorMap.value=u.sheenColorMap,e(u.sheenColorMap,p.sheenColorMapTransform)),u.sheenRoughnessMap&&(p.sheenRoughnessMap.value=u.sheenRoughnessMap,e(u.sheenRoughnessMap,p.sheenRoughnessMapTransform))),u.clearcoat>0&&(p.clearcoat.value=u.clearcoat,p.clearcoatRoughness.value=u.clearcoatRoughness,u.clearcoatMap&&(p.clearcoatMap.value=u.clearcoatMap,e(u.clearcoatMap,p.clearcoatMapTransform)),u.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=u.clearcoatRoughnessMap,e(u.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),u.clearcoatNormalMap&&(p.clearcoatNormalMap.value=u.clearcoatNormalMap,e(u.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(u.clearcoatNormalScale),u.side===We&&p.clearcoatNormalScale.value.negate())),u.dispersion>0&&(p.dispersion.value=u.dispersion),u.iridescence>0&&(p.iridescence.value=u.iridescence,p.iridescenceIOR.value=u.iridescenceIOR,p.iridescenceThicknessMinimum.value=u.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=u.iridescenceThicknessRange[1],u.iridescenceMap&&(p.iridescenceMap.value=u.iridescenceMap,e(u.iridescenceMap,p.iridescenceMapTransform)),u.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=u.iridescenceThicknessMap,e(u.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),u.transmission>0&&(p.transmission.value=u.transmission,p.transmissionSamplerMap.value=b.texture,p.transmissionSamplerSize.value.set(b.width,b.height),u.transmissionMap&&(p.transmissionMap.value=u.transmissionMap,e(u.transmissionMap,p.transmissionMapTransform)),p.thickness.value=u.thickness,u.thicknessMap&&(p.thicknessMap.value=u.thicknessMap,e(u.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=u.attenuationDistance,p.attenuationColor.value.copy(u.attenuationColor)),u.anisotropy>0&&(p.anisotropyVector.value.set(u.anisotropy*Math.cos(u.anisotropyRotation),u.anisotropy*Math.sin(u.anisotropyRotation)),u.anisotropyMap&&(p.anisotropyMap.value=u.anisotropyMap,e(u.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=u.specularIntensity,p.specularColor.value.copy(u.specularColor),u.specularColorMap&&(p.specularColorMap.value=u.specularColorMap,e(u.specularColorMap,p.specularColorMapTransform)),u.specularIntensityMap&&(p.specularIntensityMap.value=u.specularIntensityMap,e(u.specularIntensityMap,p.specularIntensityMapTransform))}function g(p,u){u.matcap&&(p.matcap.value=u.matcap)}function v(p,u){const b=t.get(u).light;p.referencePosition.value.setFromMatrixPosition(b.matrixWorld),p.nearDistance.value=b.shadow.camera.near,p.farDistance.value=b.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function Xg(n,t,e,i){let r={},s={},a=[];const o=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function c(b,S){const M=S.program;i.uniformBlockBinding(b,M)}function l(b,S){let M=r[b.id];M===void 0&&(g(b),M=h(b),r[b.id]=M,b.addEventListener("dispose",p));const T=S.program;i.updateUBOMapping(b,T);const E=t.render.frame;s[b.id]!==E&&(m(b),s[b.id]=E)}function h(b){const S=d();b.__bindingPointIndex=S;const M=n.createBuffer(),T=b.__size,E=b.usage;return n.bindBuffer(n.UNIFORM_BUFFER,M),n.bufferData(n.UNIFORM_BUFFER,T,E),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,S,M),M}function d(){for(let b=0;b<o;b++)if(a.indexOf(b)===-1)return a.push(b),b;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function m(b){const S=r[b.id],M=b.uniforms,T=b.__cache;n.bindBuffer(n.UNIFORM_BUFFER,S);for(let E=0,w=M.length;E<w;E++){const P=Array.isArray(M[E])?M[E]:[M[E]];for(let _=0,x=P.length;_<x;_++){const R=P[_];if(f(R,E,_,T)===!0){const D=R.__offset,N=Array.isArray(R.value)?R.value:[R.value];let q=0;for(let B=0;B<N.length;B++){const V=N[B],Y=v(V);typeof V=="number"||typeof V=="boolean"?(R.__data[0]=V,n.bufferSubData(n.UNIFORM_BUFFER,D+q,R.__data)):V.isMatrix3?(R.__data[0]=V.elements[0],R.__data[1]=V.elements[1],R.__data[2]=V.elements[2],R.__data[3]=0,R.__data[4]=V.elements[3],R.__data[5]=V.elements[4],R.__data[6]=V.elements[5],R.__data[7]=0,R.__data[8]=V.elements[6],R.__data[9]=V.elements[7],R.__data[10]=V.elements[8],R.__data[11]=0):(V.toArray(R.__data,q),q+=Y.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,D,R.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function f(b,S,M,T){const E=b.value,w=S+"_"+M;if(T[w]===void 0)return typeof E=="number"||typeof E=="boolean"?T[w]=E:T[w]=E.clone(),!0;{const P=T[w];if(typeof E=="number"||typeof E=="boolean"){if(P!==E)return T[w]=E,!0}else if(P.equals(E)===!1)return P.copy(E),!0}return!1}function g(b){const S=b.uniforms;let M=0;const T=16;for(let w=0,P=S.length;w<P;w++){const _=Array.isArray(S[w])?S[w]:[S[w]];for(let x=0,R=_.length;x<R;x++){const D=_[x],N=Array.isArray(D.value)?D.value:[D.value];for(let q=0,B=N.length;q<B;q++){const V=N[q],Y=v(V),z=M%T,I=z%Y.boundary,G=z+I;M+=I,G!==0&&T-G<Y.storage&&(M+=T-G),D.__data=new Float32Array(Y.storage/Float32Array.BYTES_PER_ELEMENT),D.__offset=M,M+=Y.storage}}}const E=M%T;return E>0&&(M+=T-E),b.__size=M,b.__cache={},this}function v(b){const S={boundary:0,storage:0};return typeof b=="number"||typeof b=="boolean"?(S.boundary=4,S.storage=4):b.isVector2?(S.boundary=8,S.storage=8):b.isVector3||b.isColor?(S.boundary=16,S.storage=12):b.isVector4?(S.boundary=16,S.storage=16):b.isMatrix3?(S.boundary=48,S.storage=48):b.isMatrix4?(S.boundary=64,S.storage=64):b.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",b),S}function p(b){const S=b.target;S.removeEventListener("dispose",p);const M=a.indexOf(S.__bindingPointIndex);a.splice(M,1),n.deleteBuffer(r[S.id]),delete r[S.id],delete s[S.id]}function u(){for(const b in r)n.deleteBuffer(r[b]);a=[],r={},s={}}return{bind:c,update:l,dispose:u}}class Yg{constructor(t={}){const{canvas:e=bu(),context:i=null,depth:r=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:m=!1}=t;this.isWebGLRenderer=!0;let f;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=i.getContextAttributes().alpha}else f=a;const g=new Uint32Array(4),v=new Int32Array(4);let p=null,u=null;const b=[],S=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Qn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const M=this;let T=!1;this._outputColorSpace=De;let E=0,w=0,P=null,_=-1,x=null;const R=new Me,D=new Me;let N=null;const q=new kt(0);let B=0,V=e.width,Y=e.height,z=1,I=null,G=null;const Q=new Me(0,0,V,Y),nt=new Me(0,0,V,Y);let Lt=!1;const zt=new Hc;let Wt=!1,W=!1;const Z=new _e,xt=new F,Pt=new Me,bt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Zt=!1;function be(){return P===null?z:1}let L=i;function lt(A,O){return e.getContext(A,O)}try{const A={alpha:!0,depth:r,stencil:s,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${wo}`),e.addEventListener("webglcontextlost",ct,!1),e.addEventListener("webglcontextrestored",Tt,!1),e.addEventListener("webglcontextcreationerror",at,!1),L===null){const O="webgl2";if(L=lt(O,A),L===null)throw lt(O)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(A){throw console.error("THREE.WebGLRenderer: "+A.message),A}let ut,ft,ht,dt,et,vt,Xt,Dt,C,y,k,X,J,K,Mt,it,yt,St,rt,mt,Nt,wt,pt,Yt;function U(){ut=new nm(L),ut.init(),wt=new Bg(L,ut),ft=new jp(L,ut,t,wt),ht=new Ng(L,ut),ft.reversedDepthBuffer&&m&&ht.buffers.depth.setReversed(!0),dt=new sm(L),et=new Eg,vt=new Og(L,ut,ht,et,ft,wt,dt),Xt=new Zp(M),Dt=new em(M),C=new uf(L),pt=new qp(L,C),y=new im(L,C,dt,pt),k=new om(L,y,C,dt),rt=new am(L,ft,vt),it=new Kp(et),X=new Sg(M,Xt,Dt,ut,ft,pt,it),J=new Wg(M,et),K=new Tg,Mt=new Dg(ut),St=new Yp(M,Xt,Dt,ht,k,f,c),yt=new Ug(M,k,ft),Yt=new Xg(L,dt,ft,ht),mt=new $p(L,ut,dt),Nt=new rm(L,ut,dt),dt.programs=X.programs,M.capabilities=ft,M.extensions=ut,M.properties=et,M.renderLists=K,M.shadowMap=yt,M.state=ht,M.info=dt}U();const st=new Gg(M,L);this.xr=st,this.getContext=function(){return L},this.getContextAttributes=function(){return L.getContextAttributes()},this.forceContextLoss=function(){const A=ut.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=ut.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return z},this.setPixelRatio=function(A){A!==void 0&&(z=A,this.setSize(V,Y,!1))},this.getSize=function(A){return A.set(V,Y)},this.setSize=function(A,O,$=!0){if(st.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}V=A,Y=O,e.width=Math.floor(A*z),e.height=Math.floor(O*z),$===!0&&(e.style.width=A+"px",e.style.height=O+"px"),this.setViewport(0,0,A,O)},this.getDrawingBufferSize=function(A){return A.set(V*z,Y*z).floor()},this.setDrawingBufferSize=function(A,O,$){V=A,Y=O,z=$,e.width=Math.floor(A*$),e.height=Math.floor(O*$),this.setViewport(0,0,A,O)},this.getCurrentViewport=function(A){return A.copy(R)},this.getViewport=function(A){return A.copy(Q)},this.setViewport=function(A,O,$,j){A.isVector4?Q.set(A.x,A.y,A.z,A.w):Q.set(A,O,$,j),ht.viewport(R.copy(Q).multiplyScalar(z).round())},this.getScissor=function(A){return A.copy(nt)},this.setScissor=function(A,O,$,j){A.isVector4?nt.set(A.x,A.y,A.z,A.w):nt.set(A,O,$,j),ht.scissor(D.copy(nt).multiplyScalar(z).round())},this.getScissorTest=function(){return Lt},this.setScissorTest=function(A){ht.setScissorTest(Lt=A)},this.setOpaqueSort=function(A){I=A},this.setTransparentSort=function(A){G=A},this.getClearColor=function(A){return A.copy(St.getClearColor())},this.setClearColor=function(){St.setClearColor(...arguments)},this.getClearAlpha=function(){return St.getClearAlpha()},this.setClearAlpha=function(){St.setClearAlpha(...arguments)},this.clear=function(A=!0,O=!0,$=!0){let j=0;if(A){let H=!1;if(P!==null){const ot=P.texture.format;H=ot===Io||ot===Lo||ot===Do}if(H){const ot=P.texture.type,_t=ot===On||ot===Mi||ot===yr||ot===Sr||ot===Co||ot===Po,Rt=St.getClearColor(),Et=St.getClearAlpha(),Ht=Rt.r,Vt=Rt.g,It=Rt.b;_t?(g[0]=Ht,g[1]=Vt,g[2]=It,g[3]=Et,L.clearBufferuiv(L.COLOR,0,g)):(v[0]=Ht,v[1]=Vt,v[2]=It,v[3]=Et,L.clearBufferiv(L.COLOR,0,v))}else j|=L.COLOR_BUFFER_BIT}O&&(j|=L.DEPTH_BUFFER_BIT),$&&(j|=L.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),L.clear(j)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",ct,!1),e.removeEventListener("webglcontextrestored",Tt,!1),e.removeEventListener("webglcontextcreationerror",at,!1),St.dispose(),K.dispose(),Mt.dispose(),et.dispose(),Xt.dispose(),Dt.dispose(),k.dispose(),pt.dispose(),Yt.dispose(),X.dispose(),st.dispose(),st.removeEventListener("sessionstart",xn),st.removeEventListener("sessionend",Xo),ri.stop()};function ct(A){A.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),T=!0}function Tt(){console.log("THREE.WebGLRenderer: Context Restored."),T=!1;const A=dt.autoReset,O=yt.enabled,$=yt.autoUpdate,j=yt.needsUpdate,H=yt.type;U(),dt.autoReset=A,yt.enabled=O,yt.autoUpdate=$,yt.needsUpdate=j,yt.type=H}function at(A){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function tt(A){const O=A.target;O.removeEventListener("dispose",tt),Ct(O)}function Ct(A){qt(A),et.remove(A)}function qt(A){const O=et.get(A).programs;O!==void 0&&(O.forEach(function($){X.releaseProgram($)}),A.isShaderMaterial&&X.releaseShaderCache(A))}this.renderBufferDirect=function(A,O,$,j,H,ot){O===null&&(O=bt);const _t=H.isMesh&&H.matrixWorld.determinant()<0,Rt=mh(A,O,$,j,H);ht.setMaterial(j,_t);let Et=$.index,Ht=1;if(j.wireframe===!0){if(Et=y.getWireframeAttribute($),Et===void 0)return;Ht=2}const Vt=$.drawRange,It=$.attributes.position;let te=Vt.start*Ht,le=(Vt.start+Vt.count)*Ht;ot!==null&&(te=Math.max(te,ot.start*Ht),le=Math.min(le,(ot.start+ot.count)*Ht)),Et!==null?(te=Math.max(te,0),le=Math.min(le,Et.count)):It!=null&&(te=Math.max(te,0),le=Math.min(le,It.count));const xe=le-te;if(xe<0||xe===1/0)return;pt.setup(H,j,Rt,$,Et);let de,ue=mt;if(Et!==null&&(de=C.get(Et),ue=Nt,ue.setIndex(de)),H.isMesh)j.wireframe===!0?(ht.setLineWidth(j.wireframeLinewidth*be()),ue.setMode(L.LINES)):ue.setMode(L.TRIANGLES);else if(H.isLine){let Ot=j.linewidth;Ot===void 0&&(Ot=1),ht.setLineWidth(Ot*be()),H.isLineSegments?ue.setMode(L.LINES):H.isLineLoop?ue.setMode(L.LINE_LOOP):ue.setMode(L.LINE_STRIP)}else H.isPoints?ue.setMode(L.POINTS):H.isSprite&&ue.setMode(L.TRIANGLES);if(H.isBatchedMesh)if(H._multiDrawInstances!==null)Ar("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),ue.renderMultiDrawInstances(H._multiDrawStarts,H._multiDrawCounts,H._multiDrawCount,H._multiDrawInstances);else if(ut.get("WEBGL_multi_draw"))ue.renderMultiDraw(H._multiDrawStarts,H._multiDrawCounts,H._multiDrawCount);else{const Ot=H._multiDrawStarts,pe=H._multiDrawCounts,ie=H._multiDrawCount,Xe=Et?C.get(Et).bytesPerElement:1,Ai=et.get(j).currentProgram.getUniforms();for(let Ye=0;Ye<ie;Ye++)Ai.setValue(L,"_gl_DrawID",Ye),ue.render(Ot[Ye]/Xe,pe[Ye])}else if(H.isInstancedMesh)ue.renderInstances(te,xe,H.count);else if($.isInstancedBufferGeometry){const Ot=$._maxInstanceCount!==void 0?$._maxInstanceCount:1/0,pe=Math.min($.instanceCount,Ot);ue.renderInstances(te,xe,pe)}else ue.render(te,xe)};function fe(A,O,$){A.transparent===!0&&A.side===In&&A.forceSinglePass===!1?(A.side=We,A.needsUpdate=!0,zr(A,O,$),A.side=ei,A.needsUpdate=!0,zr(A,O,$),A.side=In):zr(A,O,$)}this.compile=function(A,O,$=null){$===null&&($=A),u=Mt.get($),u.init(O),S.push(u),$.traverseVisible(function(H){H.isLight&&H.layers.test(O.layers)&&(u.pushLight(H),H.castShadow&&u.pushShadow(H))}),A!==$&&A.traverseVisible(function(H){H.isLight&&H.layers.test(O.layers)&&(u.pushLight(H),H.castShadow&&u.pushShadow(H))}),u.setupLights();const j=new Set;return A.traverse(function(H){if(!(H.isMesh||H.isPoints||H.isLine||H.isSprite))return;const ot=H.material;if(ot)if(Array.isArray(ot))for(let _t=0;_t<ot.length;_t++){const Rt=ot[_t];fe(Rt,$,H),j.add(Rt)}else fe(ot,$,H),j.add(ot)}),u=S.pop(),j},this.compileAsync=function(A,O,$=null){const j=this.compile(A,O,$);return new Promise(H=>{function ot(){if(j.forEach(function(_t){et.get(_t).currentProgram.isReady()&&j.delete(_t)}),j.size===0){H(A);return}setTimeout(ot,10)}ut.get("KHR_parallel_shader_compile")!==null?ot():setTimeout(ot,10)})};let se=null;function An(A){se&&se(A)}function xn(){ri.stop()}function Xo(){ri.start()}const ri=new Xc;ri.setAnimationLoop(An),typeof self<"u"&&ri.setContext(self),this.setAnimationLoop=function(A){se=A,st.setAnimationLoop(A),A===null?ri.stop():ri.start()},st.addEventListener("sessionstart",xn),st.addEventListener("sessionend",Xo),this.render=function(A,O){if(O!==void 0&&O.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(T===!0)return;if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),O.parent===null&&O.matrixWorldAutoUpdate===!0&&O.updateMatrixWorld(),st.enabled===!0&&st.isPresenting===!0&&(st.cameraAutoUpdate===!0&&st.updateCamera(O),O=st.getCamera()),A.isScene===!0&&A.onBeforeRender(M,A,O,P),u=Mt.get(A,S.length),u.init(O),S.push(u),Z.multiplyMatrices(O.projectionMatrix,O.matrixWorldInverse),zt.setFromProjectionMatrix(Z,yn,O.reversedDepth),W=this.localClippingEnabled,Wt=it.init(this.clippingPlanes,W),p=K.get(A,b.length),p.init(),b.push(p),st.enabled===!0&&st.isPresenting===!0){const ot=M.xr.getDepthSensingMesh();ot!==null&&Gs(ot,O,-1/0,M.sortObjects)}Gs(A,O,0,M.sortObjects),p.finish(),M.sortObjects===!0&&p.sort(I,G),Zt=st.enabled===!1||st.isPresenting===!1||st.hasDepthSensing()===!1,Zt&&St.addToRenderList(p,A),this.info.render.frame++,Wt===!0&&it.beginShadows();const $=u.state.shadowsArray;yt.render($,A,O),Wt===!0&&it.endShadows(),this.info.autoReset===!0&&this.info.reset();const j=p.opaque,H=p.transmissive;if(u.setupLights(),O.isArrayCamera){const ot=O.cameras;if(H.length>0)for(let _t=0,Rt=ot.length;_t<Rt;_t++){const Et=ot[_t];qo(j,H,A,Et)}Zt&&St.render(A);for(let _t=0,Rt=ot.length;_t<Rt;_t++){const Et=ot[_t];Yo(p,A,Et,Et.viewport)}}else H.length>0&&qo(j,H,A,O),Zt&&St.render(A),Yo(p,A,O);P!==null&&w===0&&(vt.updateMultisampleRenderTarget(P),vt.updateRenderTargetMipmap(P)),A.isScene===!0&&A.onAfterRender(M,A,O),pt.resetDefaultState(),_=-1,x=null,S.pop(),S.length>0?(u=S[S.length-1],Wt===!0&&it.setGlobalState(M.clippingPlanes,u.state.camera)):u=null,b.pop(),b.length>0?p=b[b.length-1]:p=null};function Gs(A,O,$,j){if(A.visible===!1)return;if(A.layers.test(O.layers)){if(A.isGroup)$=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(O);else if(A.isLight)u.pushLight(A),A.castShadow&&u.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||zt.intersectsSprite(A)){j&&Pt.setFromMatrixPosition(A.matrixWorld).applyMatrix4(Z);const _t=k.update(A),Rt=A.material;Rt.visible&&p.push(A,_t,Rt,$,Pt.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||zt.intersectsObject(A))){const _t=k.update(A),Rt=A.material;if(j&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),Pt.copy(A.boundingSphere.center)):(_t.boundingSphere===null&&_t.computeBoundingSphere(),Pt.copy(_t.boundingSphere.center)),Pt.applyMatrix4(A.matrixWorld).applyMatrix4(Z)),Array.isArray(Rt)){const Et=_t.groups;for(let Ht=0,Vt=Et.length;Ht<Vt;Ht++){const It=Et[Ht],te=Rt[It.materialIndex];te&&te.visible&&p.push(A,_t,te,$,Pt.z,It)}}else Rt.visible&&p.push(A,_t,Rt,$,Pt.z,null)}}const ot=A.children;for(let _t=0,Rt=ot.length;_t<Rt;_t++)Gs(ot[_t],O,$,j)}function Yo(A,O,$,j){const H=A.opaque,ot=A.transmissive,_t=A.transparent;u.setupLightsView($),Wt===!0&&it.setGlobalState(M.clippingPlanes,$),j&&ht.viewport(R.copy(j)),H.length>0&&Br(H,O,$),ot.length>0&&Br(ot,O,$),_t.length>0&&Br(_t,O,$),ht.buffers.depth.setTest(!0),ht.buffers.depth.setMask(!0),ht.buffers.color.setMask(!0),ht.setPolygonOffset(!1)}function qo(A,O,$,j){if(($.isScene===!0?$.overrideMaterial:null)!==null)return;u.state.transmissionRenderTarget[j.id]===void 0&&(u.state.transmissionRenderTarget[j.id]=new yi(1,1,{generateMipmaps:!0,type:ut.has("EXT_color_buffer_half_float")||ut.has("EXT_color_buffer_float")?Dr:On,minFilter:jn,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:re.workingColorSpace}));const ot=u.state.transmissionRenderTarget[j.id],_t=j.viewport||R;ot.setSize(_t.z*M.transmissionResolutionScale,_t.w*M.transmissionResolutionScale);const Rt=M.getRenderTarget(),Et=M.getActiveCubeFace(),Ht=M.getActiveMipmapLevel();M.setRenderTarget(ot),M.getClearColor(q),B=M.getClearAlpha(),B<1&&M.setClearColor(16777215,.5),M.clear(),Zt&&St.render($);const Vt=M.toneMapping;M.toneMapping=Qn;const It=j.viewport;if(j.viewport!==void 0&&(j.viewport=void 0),u.setupLightsView(j),Wt===!0&&it.setGlobalState(M.clippingPlanes,j),Br(A,$,j),vt.updateMultisampleRenderTarget(ot),vt.updateRenderTargetMipmap(ot),ut.has("WEBGL_multisampled_render_to_texture")===!1){let te=!1;for(let le=0,xe=O.length;le<xe;le++){const de=O[le],ue=de.object,Ot=de.geometry,pe=de.material,ie=de.group;if(pe.side===In&&ue.layers.test(j.layers)){const Xe=pe.side;pe.side=We,pe.needsUpdate=!0,$o(ue,$,j,Ot,pe,ie),pe.side=Xe,pe.needsUpdate=!0,te=!0}}te===!0&&(vt.updateMultisampleRenderTarget(ot),vt.updateRenderTargetMipmap(ot))}M.setRenderTarget(Rt,Et,Ht),M.setClearColor(q,B),It!==void 0&&(j.viewport=It),M.toneMapping=Vt}function Br(A,O,$){const j=O.isScene===!0?O.overrideMaterial:null;for(let H=0,ot=A.length;H<ot;H++){const _t=A[H],Rt=_t.object,Et=_t.geometry,Ht=_t.group;let Vt=_t.material;Vt.allowOverride===!0&&j!==null&&(Vt=j),Rt.layers.test($.layers)&&$o(Rt,O,$,Et,Vt,Ht)}}function $o(A,O,$,j,H,ot){A.onBeforeRender(M,O,$,j,H,ot),A.modelViewMatrix.multiplyMatrices($.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),H.onBeforeRender(M,O,$,j,A,ot),H.transparent===!0&&H.side===In&&H.forceSinglePass===!1?(H.side=We,H.needsUpdate=!0,M.renderBufferDirect($,O,j,H,A,ot),H.side=ei,H.needsUpdate=!0,M.renderBufferDirect($,O,j,H,A,ot),H.side=In):M.renderBufferDirect($,O,j,H,A,ot),A.onAfterRender(M,O,$,j,H,ot)}function zr(A,O,$){O.isScene!==!0&&(O=bt);const j=et.get(A),H=u.state.lights,ot=u.state.shadowsArray,_t=H.state.version,Rt=X.getParameters(A,H.state,ot,O,$),Et=X.getProgramCacheKey(Rt);let Ht=j.programs;j.environment=A.isMeshStandardMaterial?O.environment:null,j.fog=O.fog,j.envMap=(A.isMeshStandardMaterial?Dt:Xt).get(A.envMap||j.environment),j.envMapRotation=j.environment!==null&&A.envMap===null?O.environmentRotation:A.envMapRotation,Ht===void 0&&(A.addEventListener("dispose",tt),Ht=new Map,j.programs=Ht);let Vt=Ht.get(Et);if(Vt!==void 0){if(j.currentProgram===Vt&&j.lightsStateVersion===_t)return Ko(A,Rt),Vt}else Rt.uniforms=X.getUniforms(A),A.onBeforeCompile(Rt,M),Vt=X.acquireProgram(Rt,Et),Ht.set(Et,Vt),j.uniforms=Rt.uniforms;const It=j.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(It.clippingPlanes=it.uniform),Ko(A,Rt),j.needsLights=_h(A),j.lightsStateVersion=_t,j.needsLights&&(It.ambientLightColor.value=H.state.ambient,It.lightProbe.value=H.state.probe,It.directionalLights.value=H.state.directional,It.directionalLightShadows.value=H.state.directionalShadow,It.spotLights.value=H.state.spot,It.spotLightShadows.value=H.state.spotShadow,It.rectAreaLights.value=H.state.rectArea,It.ltc_1.value=H.state.rectAreaLTC1,It.ltc_2.value=H.state.rectAreaLTC2,It.pointLights.value=H.state.point,It.pointLightShadows.value=H.state.pointShadow,It.hemisphereLights.value=H.state.hemi,It.directionalShadowMap.value=H.state.directionalShadowMap,It.directionalShadowMatrix.value=H.state.directionalShadowMatrix,It.spotShadowMap.value=H.state.spotShadowMap,It.spotLightMatrix.value=H.state.spotLightMatrix,It.spotLightMap.value=H.state.spotLightMap,It.pointShadowMap.value=H.state.pointShadowMap,It.pointShadowMatrix.value=H.state.pointShadowMatrix),j.currentProgram=Vt,j.uniformsList=null,Vt}function jo(A){if(A.uniformsList===null){const O=A.currentProgram.getUniforms();A.uniformsList=Es.seqWithValue(O.seq,A.uniforms)}return A.uniformsList}function Ko(A,O){const $=et.get(A);$.outputColorSpace=O.outputColorSpace,$.batching=O.batching,$.batchingColor=O.batchingColor,$.instancing=O.instancing,$.instancingColor=O.instancingColor,$.instancingMorph=O.instancingMorph,$.skinning=O.skinning,$.morphTargets=O.morphTargets,$.morphNormals=O.morphNormals,$.morphColors=O.morphColors,$.morphTargetsCount=O.morphTargetsCount,$.numClippingPlanes=O.numClippingPlanes,$.numIntersection=O.numClipIntersection,$.vertexAlphas=O.vertexAlphas,$.vertexTangents=O.vertexTangents,$.toneMapping=O.toneMapping}function mh(A,O,$,j,H){O.isScene!==!0&&(O=bt),vt.resetTextureUnits();const ot=O.fog,_t=j.isMeshStandardMaterial?O.environment:null,Rt=P===null?M.outputColorSpace:P.isXRRenderTarget===!0?P.texture.colorSpace:nr,Et=(j.isMeshStandardMaterial?Dt:Xt).get(j.envMap||_t),Ht=j.vertexColors===!0&&!!$.attributes.color&&$.attributes.color.itemSize===4,Vt=!!$.attributes.tangent&&(!!j.normalMap||j.anisotropy>0),It=!!$.morphAttributes.position,te=!!$.morphAttributes.normal,le=!!$.morphAttributes.color;let xe=Qn;j.toneMapped&&(P===null||P.isXRRenderTarget===!0)&&(xe=M.toneMapping);const de=$.morphAttributes.position||$.morphAttributes.normal||$.morphAttributes.color,ue=de!==void 0?de.length:0,Ot=et.get(j),pe=u.state.lights;if(Wt===!0&&(W===!0||A!==x)){const Fe=A===x&&j.id===_;it.setState(j,A,Fe)}let ie=!1;j.version===Ot.__version?(Ot.needsLights&&Ot.lightsStateVersion!==pe.state.version||Ot.outputColorSpace!==Rt||H.isBatchedMesh&&Ot.batching===!1||!H.isBatchedMesh&&Ot.batching===!0||H.isBatchedMesh&&Ot.batchingColor===!0&&H.colorTexture===null||H.isBatchedMesh&&Ot.batchingColor===!1&&H.colorTexture!==null||H.isInstancedMesh&&Ot.instancing===!1||!H.isInstancedMesh&&Ot.instancing===!0||H.isSkinnedMesh&&Ot.skinning===!1||!H.isSkinnedMesh&&Ot.skinning===!0||H.isInstancedMesh&&Ot.instancingColor===!0&&H.instanceColor===null||H.isInstancedMesh&&Ot.instancingColor===!1&&H.instanceColor!==null||H.isInstancedMesh&&Ot.instancingMorph===!0&&H.morphTexture===null||H.isInstancedMesh&&Ot.instancingMorph===!1&&H.morphTexture!==null||Ot.envMap!==Et||j.fog===!0&&Ot.fog!==ot||Ot.numClippingPlanes!==void 0&&(Ot.numClippingPlanes!==it.numPlanes||Ot.numIntersection!==it.numIntersection)||Ot.vertexAlphas!==Ht||Ot.vertexTangents!==Vt||Ot.morphTargets!==It||Ot.morphNormals!==te||Ot.morphColors!==le||Ot.toneMapping!==xe||Ot.morphTargetsCount!==ue)&&(ie=!0):(ie=!0,Ot.__version=j.version);let Xe=Ot.currentProgram;ie===!0&&(Xe=zr(j,O,H));let Ai=!1,Ye=!1,sr=!1;const me=Xe.getUniforms(),Ze=Ot.uniforms;if(ht.useProgram(Xe.program)&&(Ai=!0,Ye=!0,sr=!0),j.id!==_&&(_=j.id,Ye=!0),Ai||x!==A){ht.buffers.depth.getReversed()&&A.reversedDepth!==!0&&(A._reversedDepth=!0,A.updateProjectionMatrix()),me.setValue(L,"projectionMatrix",A.projectionMatrix),me.setValue(L,"viewMatrix",A.matrixWorldInverse);const He=me.map.cameraPosition;He!==void 0&&He.setValue(L,xt.setFromMatrixPosition(A.matrixWorld)),ft.logarithmicDepthBuffer&&me.setValue(L,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(j.isMeshPhongMaterial||j.isMeshToonMaterial||j.isMeshLambertMaterial||j.isMeshBasicMaterial||j.isMeshStandardMaterial||j.isShaderMaterial)&&me.setValue(L,"isOrthographic",A.isOrthographicCamera===!0),x!==A&&(x=A,Ye=!0,sr=!0)}if(H.isSkinnedMesh){me.setOptional(L,H,"bindMatrix"),me.setOptional(L,H,"bindMatrixInverse");const Fe=H.skeleton;Fe&&(Fe.boneTexture===null&&Fe.computeBoneTexture(),me.setValue(L,"boneTexture",Fe.boneTexture,vt))}H.isBatchedMesh&&(me.setOptional(L,H,"batchingTexture"),me.setValue(L,"batchingTexture",H._matricesTexture,vt),me.setOptional(L,H,"batchingIdTexture"),me.setValue(L,"batchingIdTexture",H._indirectTexture,vt),me.setOptional(L,H,"batchingColorTexture"),H._colorsTexture!==null&&me.setValue(L,"batchingColorTexture",H._colorsTexture,vt));const Je=$.morphAttributes;if((Je.position!==void 0||Je.normal!==void 0||Je.color!==void 0)&&rt.update(H,$,Xe),(Ye||Ot.receiveShadow!==H.receiveShadow)&&(Ot.receiveShadow=H.receiveShadow,me.setValue(L,"receiveShadow",H.receiveShadow)),j.isMeshGouraudMaterial&&j.envMap!==null&&(Ze.envMap.value=Et,Ze.flipEnvMap.value=Et.isCubeTexture&&Et.isRenderTargetTexture===!1?-1:1),j.isMeshStandardMaterial&&j.envMap===null&&O.environment!==null&&(Ze.envMapIntensity.value=O.environmentIntensity),Ye&&(me.setValue(L,"toneMappingExposure",M.toneMappingExposure),Ot.needsLights&&gh(Ze,sr),ot&&j.fog===!0&&J.refreshFogUniforms(Ze,ot),J.refreshMaterialUniforms(Ze,j,z,Y,u.state.transmissionRenderTarget[A.id]),Es.upload(L,jo(Ot),Ze,vt)),j.isShaderMaterial&&j.uniformsNeedUpdate===!0&&(Es.upload(L,jo(Ot),Ze,vt),j.uniformsNeedUpdate=!1),j.isSpriteMaterial&&me.setValue(L,"center",H.center),me.setValue(L,"modelViewMatrix",H.modelViewMatrix),me.setValue(L,"normalMatrix",H.normalMatrix),me.setValue(L,"modelMatrix",H.matrixWorld),j.isShaderMaterial||j.isRawShaderMaterial){const Fe=j.uniformsGroups;for(let He=0,Vs=Fe.length;He<Vs;He++){const si=Fe[He];Yt.update(si,Xe),Yt.bind(si,Xe)}}return Xe}function gh(A,O){A.ambientLightColor.needsUpdate=O,A.lightProbe.needsUpdate=O,A.directionalLights.needsUpdate=O,A.directionalLightShadows.needsUpdate=O,A.pointLights.needsUpdate=O,A.pointLightShadows.needsUpdate=O,A.spotLights.needsUpdate=O,A.spotLightShadows.needsUpdate=O,A.rectAreaLights.needsUpdate=O,A.hemisphereLights.needsUpdate=O}function _h(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return E},this.getActiveMipmapLevel=function(){return w},this.getRenderTarget=function(){return P},this.setRenderTargetTextures=function(A,O,$){const j=et.get(A);j.__autoAllocateDepthBuffer=A.resolveDepthBuffer===!1,j.__autoAllocateDepthBuffer===!1&&(j.__useRenderToTexture=!1),et.get(A.texture).__webglTexture=O,et.get(A.depthTexture).__webglTexture=j.__autoAllocateDepthBuffer?void 0:$,j.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(A,O){const $=et.get(A);$.__webglFramebuffer=O,$.__useDefaultFramebuffer=O===void 0};const xh=L.createFramebuffer();this.setRenderTarget=function(A,O=0,$=0){P=A,E=O,w=$;let j=!0,H=null,ot=!1,_t=!1;if(A){const Et=et.get(A);if(Et.__useDefaultFramebuffer!==void 0)ht.bindFramebuffer(L.FRAMEBUFFER,null),j=!1;else if(Et.__webglFramebuffer===void 0)vt.setupRenderTarget(A);else if(Et.__hasExternalTextures)vt.rebindTextures(A,et.get(A.texture).__webglTexture,et.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){const It=A.depthTexture;if(Et.__boundDepthTexture!==It){if(It!==null&&et.has(It)&&(A.width!==It.image.width||A.height!==It.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");vt.setupDepthRenderbuffer(A)}}const Ht=A.texture;(Ht.isData3DTexture||Ht.isDataArrayTexture||Ht.isCompressedArrayTexture)&&(_t=!0);const Vt=et.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(Vt[O])?H=Vt[O][$]:H=Vt[O],ot=!0):A.samples>0&&vt.useMultisampledRTT(A)===!1?H=et.get(A).__webglMultisampledFramebuffer:Array.isArray(Vt)?H=Vt[$]:H=Vt,R.copy(A.viewport),D.copy(A.scissor),N=A.scissorTest}else R.copy(Q).multiplyScalar(z).floor(),D.copy(nt).multiplyScalar(z).floor(),N=Lt;if($!==0&&(H=xh),ht.bindFramebuffer(L.FRAMEBUFFER,H)&&j&&ht.drawBuffers(A,H),ht.viewport(R),ht.scissor(D),ht.setScissorTest(N),ot){const Et=et.get(A.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_CUBE_MAP_POSITIVE_X+O,Et.__webglTexture,$)}else if(_t){const Et=O;for(let Ht=0;Ht<A.textures.length;Ht++){const Vt=et.get(A.textures[Ht]);L.framebufferTextureLayer(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0+Ht,Vt.__webglTexture,$,Et)}}else if(A!==null&&$!==0){const Et=et.get(A.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,Et.__webglTexture,$)}_=-1},this.readRenderTargetPixels=function(A,O,$,j,H,ot,_t,Rt=0){if(!(A&&A.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Et=et.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&_t!==void 0&&(Et=Et[_t]),Et){ht.bindFramebuffer(L.FRAMEBUFFER,Et);try{const Ht=A.textures[Rt],Vt=Ht.format,It=Ht.type;if(!ft.textureFormatReadable(Vt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ft.textureTypeReadable(It)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}O>=0&&O<=A.width-j&&$>=0&&$<=A.height-H&&(A.textures.length>1&&L.readBuffer(L.COLOR_ATTACHMENT0+Rt),L.readPixels(O,$,j,H,wt.convert(Vt),wt.convert(It),ot))}finally{const Ht=P!==null?et.get(P).__webglFramebuffer:null;ht.bindFramebuffer(L.FRAMEBUFFER,Ht)}}},this.readRenderTargetPixelsAsync=async function(A,O,$,j,H,ot,_t,Rt=0){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Et=et.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&_t!==void 0&&(Et=Et[_t]),Et)if(O>=0&&O<=A.width-j&&$>=0&&$<=A.height-H){ht.bindFramebuffer(L.FRAMEBUFFER,Et);const Ht=A.textures[Rt],Vt=Ht.format,It=Ht.type;if(!ft.textureFormatReadable(Vt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ft.textureTypeReadable(It))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const te=L.createBuffer();L.bindBuffer(L.PIXEL_PACK_BUFFER,te),L.bufferData(L.PIXEL_PACK_BUFFER,ot.byteLength,L.STREAM_READ),A.textures.length>1&&L.readBuffer(L.COLOR_ATTACHMENT0+Rt),L.readPixels(O,$,j,H,wt.convert(Vt),wt.convert(It),0);const le=P!==null?et.get(P).__webglFramebuffer:null;ht.bindFramebuffer(L.FRAMEBUFFER,le);const xe=L.fenceSync(L.SYNC_GPU_COMMANDS_COMPLETE,0);return L.flush(),await Tu(L,xe,4),L.bindBuffer(L.PIXEL_PACK_BUFFER,te),L.getBufferSubData(L.PIXEL_PACK_BUFFER,0,ot),L.deleteBuffer(te),L.deleteSync(xe),ot}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(A,O=null,$=0){const j=Math.pow(2,-$),H=Math.floor(A.image.width*j),ot=Math.floor(A.image.height*j),_t=O!==null?O.x:0,Rt=O!==null?O.y:0;vt.setTexture2D(A,0),L.copyTexSubImage2D(L.TEXTURE_2D,$,0,0,_t,Rt,H,ot),ht.unbindTexture()};const vh=L.createFramebuffer(),Mh=L.createFramebuffer();this.copyTextureToTexture=function(A,O,$=null,j=null,H=0,ot=null){ot===null&&(H!==0?(Ar("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),ot=H,H=0):ot=0);let _t,Rt,Et,Ht,Vt,It,te,le,xe;const de=A.isCompressedTexture?A.mipmaps[ot]:A.image;if($!==null)_t=$.max.x-$.min.x,Rt=$.max.y-$.min.y,Et=$.isBox3?$.max.z-$.min.z:1,Ht=$.min.x,Vt=$.min.y,It=$.isBox3?$.min.z:0;else{const Je=Math.pow(2,-H);_t=Math.floor(de.width*Je),Rt=Math.floor(de.height*Je),A.isDataArrayTexture?Et=de.depth:A.isData3DTexture?Et=Math.floor(de.depth*Je):Et=1,Ht=0,Vt=0,It=0}j!==null?(te=j.x,le=j.y,xe=j.z):(te=0,le=0,xe=0);const ue=wt.convert(O.format),Ot=wt.convert(O.type);let pe;O.isData3DTexture?(vt.setTexture3D(O,0),pe=L.TEXTURE_3D):O.isDataArrayTexture||O.isCompressedArrayTexture?(vt.setTexture2DArray(O,0),pe=L.TEXTURE_2D_ARRAY):(vt.setTexture2D(O,0),pe=L.TEXTURE_2D),L.pixelStorei(L.UNPACK_FLIP_Y_WEBGL,O.flipY),L.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL,O.premultiplyAlpha),L.pixelStorei(L.UNPACK_ALIGNMENT,O.unpackAlignment);const ie=L.getParameter(L.UNPACK_ROW_LENGTH),Xe=L.getParameter(L.UNPACK_IMAGE_HEIGHT),Ai=L.getParameter(L.UNPACK_SKIP_PIXELS),Ye=L.getParameter(L.UNPACK_SKIP_ROWS),sr=L.getParameter(L.UNPACK_SKIP_IMAGES);L.pixelStorei(L.UNPACK_ROW_LENGTH,de.width),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,de.height),L.pixelStorei(L.UNPACK_SKIP_PIXELS,Ht),L.pixelStorei(L.UNPACK_SKIP_ROWS,Vt),L.pixelStorei(L.UNPACK_SKIP_IMAGES,It);const me=A.isDataArrayTexture||A.isData3DTexture,Ze=O.isDataArrayTexture||O.isData3DTexture;if(A.isDepthTexture){const Je=et.get(A),Fe=et.get(O),He=et.get(Je.__renderTarget),Vs=et.get(Fe.__renderTarget);ht.bindFramebuffer(L.READ_FRAMEBUFFER,He.__webglFramebuffer),ht.bindFramebuffer(L.DRAW_FRAMEBUFFER,Vs.__webglFramebuffer);for(let si=0;si<Et;si++)me&&(L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,et.get(A).__webglTexture,H,It+si),L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,et.get(O).__webglTexture,ot,xe+si)),L.blitFramebuffer(Ht,Vt,_t,Rt,te,le,_t,Rt,L.DEPTH_BUFFER_BIT,L.NEAREST);ht.bindFramebuffer(L.READ_FRAMEBUFFER,null),ht.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else if(H!==0||A.isRenderTargetTexture||et.has(A)){const Je=et.get(A),Fe=et.get(O);ht.bindFramebuffer(L.READ_FRAMEBUFFER,vh),ht.bindFramebuffer(L.DRAW_FRAMEBUFFER,Mh);for(let He=0;He<Et;He++)me?L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,Je.__webglTexture,H,It+He):L.framebufferTexture2D(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,Je.__webglTexture,H),Ze?L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,Fe.__webglTexture,ot,xe+He):L.framebufferTexture2D(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,Fe.__webglTexture,ot),H!==0?L.blitFramebuffer(Ht,Vt,_t,Rt,te,le,_t,Rt,L.COLOR_BUFFER_BIT,L.NEAREST):Ze?L.copyTexSubImage3D(pe,ot,te,le,xe+He,Ht,Vt,_t,Rt):L.copyTexSubImage2D(pe,ot,te,le,Ht,Vt,_t,Rt);ht.bindFramebuffer(L.READ_FRAMEBUFFER,null),ht.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else Ze?A.isDataTexture||A.isData3DTexture?L.texSubImage3D(pe,ot,te,le,xe,_t,Rt,Et,ue,Ot,de.data):O.isCompressedArrayTexture?L.compressedTexSubImage3D(pe,ot,te,le,xe,_t,Rt,Et,ue,de.data):L.texSubImage3D(pe,ot,te,le,xe,_t,Rt,Et,ue,Ot,de):A.isDataTexture?L.texSubImage2D(L.TEXTURE_2D,ot,te,le,_t,Rt,ue,Ot,de.data):A.isCompressedTexture?L.compressedTexSubImage2D(L.TEXTURE_2D,ot,te,le,de.width,de.height,ue,de.data):L.texSubImage2D(L.TEXTURE_2D,ot,te,le,_t,Rt,ue,Ot,de);L.pixelStorei(L.UNPACK_ROW_LENGTH,ie),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,Xe),L.pixelStorei(L.UNPACK_SKIP_PIXELS,Ai),L.pixelStorei(L.UNPACK_SKIP_ROWS,Ye),L.pixelStorei(L.UNPACK_SKIP_IMAGES,sr),ot===0&&O.generateMipmaps&&L.generateMipmap(pe),ht.unbindTexture()},this.initRenderTarget=function(A){et.get(A).__webglFramebuffer===void 0&&vt.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?vt.setTextureCube(A,0):A.isData3DTexture?vt.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?vt.setTexture2DArray(A,0):vt.setTexture2D(A,0),ht.unbindTexture()},this.resetState=function(){E=0,w=0,P=null,ht.reset(),pt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return yn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=re._getDrawingBufferColorSpace(t),e.unpackColorSpace=re._getUnpackColorSpace()}}const ic={type:"change"},Go={type:"start"},Kc={type:"end"},ps=new Ur,rc=new Xn,qg=Math.cos(70*At.DEG2RAD),Te=new F,Ge=2*Math.PI,he={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},ya=1e-6;class $g extends cf{constructor(t,e=null){super(t,e),this.state=he.NONE,this.target=new F,this.cursor=new F,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:$i.ROTATE,MIDDLE:$i.DOLLY,RIGHT:$i.PAN},this.touches={ONE:Yi.ROTATE,TWO:Yi.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new F,this._lastQuaternion=new ni,this._lastTargetPosition=new F,this._quat=new ni().setFromUnitVectors(t.up,new F(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new Dl,this._sphericalDelta=new Dl,this._scale=1,this._panOffset=new F,this._rotateStart=new Bt,this._rotateEnd=new Bt,this._rotateDelta=new Bt,this._panStart=new Bt,this._panEnd=new Bt,this._panDelta=new Bt,this._dollyStart=new Bt,this._dollyEnd=new Bt,this._dollyDelta=new Bt,this._dollyDirection=new F,this._mouse=new Bt,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=Kg.bind(this),this._onPointerDown=jg.bind(this),this._onPointerUp=Zg.bind(this),this._onContextMenu=r_.bind(this),this._onMouseWheel=t_.bind(this),this._onKeyDown=e_.bind(this),this._onTouchStart=n_.bind(this),this._onTouchMove=i_.bind(this),this._onMouseDown=Jg.bind(this),this._onMouseMove=Qg.bind(this),this._interceptControlDown=s_.bind(this),this._interceptControlUp=a_.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}connect(t){super.connect(t),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(t){t.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=t}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(ic),this.update(),this.state=he.NONE}update(t=null){const e=this.object.position;Te.copy(e).sub(this.target),Te.applyQuaternion(this._quat),this._spherical.setFromVector3(Te),this.autoRotate&&this.state===he.NONE&&this._rotateLeft(this._getAutoRotationAngle(t)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let i=this.minAzimuthAngle,r=this.maxAzimuthAngle;isFinite(i)&&isFinite(r)&&(i<-Math.PI?i+=Ge:i>Math.PI&&(i-=Ge),r<-Math.PI?r+=Ge:r>Math.PI&&(r-=Ge),i<=r?this._spherical.theta=Math.max(i,Math.min(r,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(i+r)/2?Math.max(i,this._spherical.theta):Math.min(r,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let s=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const a=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),s=a!=this._spherical.radius}if(Te.setFromSpherical(this._spherical),Te.applyQuaternion(this._quatInverse),e.copy(this.target).add(Te),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let a=null;if(this.object.isPerspectiveCamera){const o=Te.length();a=this._clampDistance(o*this._scale);const c=o-a;this.object.position.addScaledVector(this._dollyDirection,c),this.object.updateMatrixWorld(),s=!!c}else if(this.object.isOrthographicCamera){const o=new F(this._mouse.x,this._mouse.y,0);o.unproject(this.object);const c=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),s=c!==this.object.zoom;const l=new F(this._mouse.x,this._mouse.y,0);l.unproject(this.object),this.object.position.sub(l).add(o),this.object.updateMatrixWorld(),a=Te.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;a!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(a).add(this.object.position):(ps.origin.copy(this.object.position),ps.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(ps.direction))<qg?this.object.lookAt(this.target):(rc.setFromNormalAndCoplanarPoint(this.object.up,this.target),ps.intersectPlane(rc,this.target))))}else if(this.object.isOrthographicCamera){const a=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),a!==this.object.zoom&&(this.object.updateProjectionMatrix(),s=!0)}return this._scale=1,this._performCursorZoom=!1,s||this._lastPosition.distanceToSquared(this.object.position)>ya||8*(1-this._lastQuaternion.dot(this.object.quaternion))>ya||this._lastTargetPosition.distanceToSquared(this.target)>ya?(this.dispatchEvent(ic),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(t){return t!==null?Ge/60*this.autoRotateSpeed*t:Ge/60/60*this.autoRotateSpeed}_getZoomScale(t){const e=Math.abs(t*.01);return Math.pow(.95,this.zoomSpeed*e)}_rotateLeft(t){this._sphericalDelta.theta-=t}_rotateUp(t){this._sphericalDelta.phi-=t}_panLeft(t,e){Te.setFromMatrixColumn(e,0),Te.multiplyScalar(-t),this._panOffset.add(Te)}_panUp(t,e){this.screenSpacePanning===!0?Te.setFromMatrixColumn(e,1):(Te.setFromMatrixColumn(e,0),Te.crossVectors(this.object.up,Te)),Te.multiplyScalar(t),this._panOffset.add(Te)}_pan(t,e){const i=this.domElement;if(this.object.isPerspectiveCamera){const r=this.object.position;Te.copy(r).sub(this.target);let s=Te.length();s*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*t*s/i.clientHeight,this.object.matrix),this._panUp(2*e*s/i.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(t*(this.object.right-this.object.left)/this.object.zoom/i.clientWidth,this.object.matrix),this._panUp(e*(this.object.top-this.object.bottom)/this.object.zoom/i.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(t,e){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const i=this.domElement.getBoundingClientRect(),r=t-i.left,s=e-i.top,a=i.width,o=i.height;this._mouse.x=r/a*2-1,this._mouse.y=-(s/o)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(t){return Math.max(this.minDistance,Math.min(this.maxDistance,t))}_handleMouseDownRotate(t){this._rotateStart.set(t.clientX,t.clientY)}_handleMouseDownDolly(t){this._updateZoomParameters(t.clientX,t.clientX),this._dollyStart.set(t.clientX,t.clientY)}_handleMouseDownPan(t){this._panStart.set(t.clientX,t.clientY)}_handleMouseMoveRotate(t){this._rotateEnd.set(t.clientX,t.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const e=this.domElement;this._rotateLeft(Ge*this._rotateDelta.x/e.clientHeight),this._rotateUp(Ge*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(t){this._dollyEnd.set(t.clientX,t.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(t){this._panEnd.set(t.clientX,t.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(t){this._updateZoomParameters(t.clientX,t.clientY),t.deltaY<0?this._dollyIn(this._getZoomScale(t.deltaY)):t.deltaY>0&&this._dollyOut(this._getZoomScale(t.deltaY)),this.update()}_handleKeyDown(t){let e=!1;switch(t.code){case this.keys.UP:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(Ge*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),e=!0;break;case this.keys.BOTTOM:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(-Ge*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),e=!0;break;case this.keys.LEFT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(Ge*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),e=!0;break;case this.keys.RIGHT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(-Ge*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),e=!0;break}e&&(t.preventDefault(),this.update())}_handleTouchStartRotate(t){if(this._pointers.length===1)this._rotateStart.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),i=.5*(t.pageX+e.x),r=.5*(t.pageY+e.y);this._rotateStart.set(i,r)}}_handleTouchStartPan(t){if(this._pointers.length===1)this._panStart.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),i=.5*(t.pageX+e.x),r=.5*(t.pageY+e.y);this._panStart.set(i,r)}}_handleTouchStartDolly(t){const e=this._getSecondPointerPosition(t),i=t.pageX-e.x,r=t.pageY-e.y,s=Math.sqrt(i*i+r*r);this._dollyStart.set(0,s)}_handleTouchStartDollyPan(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enablePan&&this._handleTouchStartPan(t)}_handleTouchStartDollyRotate(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enableRotate&&this._handleTouchStartRotate(t)}_handleTouchMoveRotate(t){if(this._pointers.length==1)this._rotateEnd.set(t.pageX,t.pageY);else{const i=this._getSecondPointerPosition(t),r=.5*(t.pageX+i.x),s=.5*(t.pageY+i.y);this._rotateEnd.set(r,s)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const e=this.domElement;this._rotateLeft(Ge*this._rotateDelta.x/e.clientHeight),this._rotateUp(Ge*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(t){if(this._pointers.length===1)this._panEnd.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),i=.5*(t.pageX+e.x),r=.5*(t.pageY+e.y);this._panEnd.set(i,r)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(t){const e=this._getSecondPointerPosition(t),i=t.pageX-e.x,r=t.pageY-e.y,s=Math.sqrt(i*i+r*r);this._dollyEnd.set(0,s),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const a=(t.pageX+e.x)*.5,o=(t.pageY+e.y)*.5;this._updateZoomParameters(a,o)}_handleTouchMoveDollyPan(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enablePan&&this._handleTouchMovePan(t)}_handleTouchMoveDollyRotate(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enableRotate&&this._handleTouchMoveRotate(t)}_addPointer(t){this._pointers.push(t.pointerId)}_removePointer(t){delete this._pointerPositions[t.pointerId];for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId){this._pointers.splice(e,1);return}}_isTrackingPointer(t){for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId)return!0;return!1}_trackPointer(t){let e=this._pointerPositions[t.pointerId];e===void 0&&(e=new Bt,this._pointerPositions[t.pointerId]=e),e.set(t.pageX,t.pageY)}_getSecondPointerPosition(t){const e=t.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[e]}_customWheelEvent(t){const e=t.deltaMode,i={clientX:t.clientX,clientY:t.clientY,deltaY:t.deltaY};switch(e){case 1:i.deltaY*=16;break;case 2:i.deltaY*=100;break}return t.ctrlKey&&!this._controlActive&&(i.deltaY*=10),i}}function jg(n){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(n.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(n)&&(this._addPointer(n),n.pointerType==="touch"?this._onTouchStart(n):this._onMouseDown(n)))}function Kg(n){this.enabled!==!1&&(n.pointerType==="touch"?this._onTouchMove(n):this._onMouseMove(n))}function Zg(n){switch(this._removePointer(n),this._pointers.length){case 0:this.domElement.releasePointerCapture(n.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(Kc),this.state=he.NONE;break;case 1:const t=this._pointers[0],e=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:e.x,pageY:e.y});break}}function Jg(n){let t;switch(n.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case $i.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(n),this.state=he.DOLLY;break;case $i.ROTATE:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=he.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=he.ROTATE}break;case $i.PAN:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=he.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=he.PAN}break;default:this.state=he.NONE}this.state!==he.NONE&&this.dispatchEvent(Go)}function Qg(n){switch(this.state){case he.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(n);break;case he.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(n);break;case he.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(n);break}}function t_(n){this.enabled===!1||this.enableZoom===!1||this.state!==he.NONE||(n.preventDefault(),this.dispatchEvent(Go),this._handleMouseWheel(this._customWheelEvent(n)),this.dispatchEvent(Kc))}function e_(n){this.enabled!==!1&&this._handleKeyDown(n)}function n_(n){switch(this._trackPointer(n),this._pointers.length){case 1:switch(this.touches.ONE){case Yi.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(n),this.state=he.TOUCH_ROTATE;break;case Yi.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(n),this.state=he.TOUCH_PAN;break;default:this.state=he.NONE}break;case 2:switch(this.touches.TWO){case Yi.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(n),this.state=he.TOUCH_DOLLY_PAN;break;case Yi.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(n),this.state=he.TOUCH_DOLLY_ROTATE;break;default:this.state=he.NONE}break;default:this.state=he.NONE}this.state!==he.NONE&&this.dispatchEvent(Go)}function i_(n){switch(this._trackPointer(n),this.state){case he.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(n),this.update();break;case he.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(n),this.update();break;case he.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(n),this.update();break;case he.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(n),this.update();break;default:this.state=he.NONE}}function r_(n){this.enabled!==!1&&n.preventDefault()}function s_(n){n.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function a_(n){n.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}const sc=["一次偶然涨落，一组全新的自然法则。","这里的星光，以陌生的速度穿过真空。","引力写下结构，时间负责把它读完。","一个从未存在过，也不会再次出现的宇宙。","尘埃正在聚集，第一颗恒星即将点亮。"],ac=["赫利俄斯","弥涅耳瓦","伊奥","俄耳甫斯","忒弥斯","厄里倪厄斯","欧律狄刻","阿斯忒里亚"],xo=["棒旋星系","絮状螺旋星系","环状星系","椭圆星系","不规则星系"],oc=["赛里安共同体","洛珂蜂群","弧光联盟","静默者","澄海文明","铸星者","织光议会","塔乌林协约","奈落合众体","远潮群落","镜海联邦","巡星庭","赤纬公社","无昼同盟","尘环智群"],lc=[14221151,16743275,6928639,15174911,16762460,6481615,16747975,10920191,15899989,7595116,6215935,16770683,12815615,16737894,9484543],cc=[{until:55,name:"炽热大爆炸",description:"整个可观测区域同时处于高温、高密度状态；这不是物质从某个中心炸开。"},{until:145,name:"等离子体时代",description:"宇宙膨胀并冷却，原初核合成后，光子仍被自由电子频繁散射。"},{until:245,name:"宇宙黑暗时代",description:"38 万年后宇宙变得透明，但第一代恒星尚未点亮。"},{until:340,name:"宇宙黎明",description:"约 1～2 亿年后，第一代恒星与星系开始形成并推动再电离。"},{until:650,name:"恒星时代",description:"恒星、星系与重元素持续演化；生命与文明属于未证实的模型层。"},{until:845,name:"简并时代 · 假说",description:"若质子衰变等标准长期假说成立，恒星残骸绕核运行，并在近遇中逐个逃离或落入黑洞。"},{until:950,name:"黑洞时代 · 假说",description:"若霍金辐射的标准推断适用，孤立黑洞在极漫长时间中逐个蒸发。"},{until:1001,name:"暗时代 · 渐近",description:"宇宙继续膨胀，辐射红移与稀释，可用能量梯度趋近于零，而非发生一次全局终结。"}];function o_(n){const t=n?.cosmicFate;if(!t||t.type==="heat-death")return cc;const e=cc.slice(0,5);return t.type==="big-rip"?[...e,{until:850,name:"幽灵能量时代 · 假说",description:"暗能量密度随膨胀增长，宇宙在有限时间内加速趋向失稳。"},{until:1001,name:"大撕裂 · 条件结局",description:"在 w < -1 持续成立的假设下，局部引力与微观束缚将被逐层克服。"}]:t.type==="big-crunch"?[...e,{until:850,name:"膨胀反转 · 假说",description:"动态暗能量的有效势能跨过零点，哈勃参数逐步降低至零。"},{until:1001,name:"大坍缩 · 条件结局",description:"尺度因子反向演化，物质与辐射密度在有限时间内快速上升。"}]:[...e,{until:875,name:"亚稳真空 · 假说",description:"真空仍位于寿命未知的局部能量最低点，未发生可见跃迁。"},{until:1001,name:"真空衰变 · 条件结局",description:"随机量子隧穿产生低能真空泡，泡壁以近光速改写局部基态。"}]}function Jt(n){const t=Math.max(n(),1e-7),e=n();return Math.sqrt(-2*Math.log(t))*Math.cos(2*Math.PI*e)}function Gt(n,t,e){return t+n()*(e-t)}const hc="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ",l_=4,Sa=16;function Zc(n){let t=1779033703,e=3144134277,i=1013904242,r=2773480762;for(let s=0;s<n.length;s++){const a=n.charCodeAt(s);t=e^Math.imul(t^a,597399067),e=i^Math.imul(e^a,2869860233),i=r^Math.imul(i^a,951274213),r=t^Math.imul(r^a,2716044179)}return t=Math.imul(i^t>>>18,597399067),e=Math.imul(r^e>>>22,2869860233),i=Math.imul(t^i>>>17,951274213),r=Math.imul(e^r>>>19,2716044179),t^=e^i^r,e^=t,i^=t,r^=t,[t>>>0,e>>>0,i>>>0,r>>>0]}function zs(n){const t=String(n).trim().toUpperCase();if(!/^(?:[A-Z0-9]{16}|[A-Z0-9]{4}(?:-[A-Z0-9]{4}){3})$/.test(t))throw new TypeError("Universe seed must contain exactly 16 letters or digits.");return t.replaceAll("-","").match(new RegExp(`.{${l_}}`,"g")).join("-")}function c_(){const n=globalThis.crypto;if(!n?.getRandomValues)throw new Error("Secure random number generation is unavailable.");let t="";do for(t="";t.length<Sa;){const e=n.getRandomValues(new Uint8Array(Sa));for(const i of e)if(!(i>=252)&&(t+=hc[i%hc.length],t.length===Sa))break}while(!/[A-Z]/.test(t)||!/[0-9]/.test(t));return zs(t)}function h_(n){return Zc(zs(n))[0]}function bn(n,t=0){let[e,i,r,s]=Zc(`${zs(n)}:${t}`);return function(){const o=((e+i|0)+s|0)>>>0;return s=s+1|0,e=i^i>>>9,i=r+(r<<3)|0,r=r<<21|r>>>11,r=r+o|0,o/4294967296}}const vo=138e8,u_=145e8,Ea=.012,f_={lambda:{label:"宇宙学常数",description:"暗能量密度保持不变，加速膨胀持续"},quintessence:{label:"演化标量场",description:"暗能量状态方程随尺度因子缓慢演化"},phantom:{label:"幽灵暗能量",description:"有效状态方程低于 -1，暗能量密度随膨胀增长"},recollapsing:{label:"反转势能",description:"标量场势能在远未来跨过零点，膨胀最终停止"}},d_={"heat-death":{label:"渐近热寂",shortLabel:"热寂",description:"膨胀持续，可用能量梯度逐渐消失"},"big-rip":{label:"大撕裂",shortLabel:"大撕裂",description:"加速膨胀最终克服星系、恒星系与局部束缚"},"big-crunch":{label:"大坍缩",shortLabel:"大坍缩",description:"膨胀反转后，尺度因子在有限时间内回落"},"vacuum-decay":{label:"真空衰变",shortLabel:"真空衰变",description:"低能真空泡成核，泡壁以近光速扩张"}};function p_(n,t,e){return t+e*(1-n)/(1+n)}function m_({model:n,w0:t,wa:e,expansionRate:i,darkEnergyDensity:r,turnScale:s}){const a=Math.max(.06,1-r);let o=1,c=1,l=vo,h=1;const d=[{ageYears:l,scaleFactor:o,expansionRatio:1,w:t}];for(let m=1;m<=2400;m++){const f=p_(o,t,e);c*=Math.exp(-3*(1+f)*Ea),o*=Math.exp(Ea);const g=n==="recollapsing"?.22*r*Math.pow(o/s,2.35):0,v=a/Math.pow(o,3)+r*c-g;if(v<=0)return{history:d,turnaroundYears:l,finalRateSquared:v};const p=Math.sqrt((h+v)*.5);l+=u_/i*Ea/Math.max(p,1e-12),h=v,m%80===0&&d.push({ageYears:l,scaleFactor:o,expansionRatio:Math.sqrt(v),w:f})}return{history:d,asymptoticYears:l,finalRateSquared:h}}function g_(n){const t=n();return t<.34?{model:"lambda",w0:-1,wa:0,turnScale:1/0}:t<.62?{model:"quintessence",w0:Gt(n,-.96,-.76),wa:Gt(n,-.1,.1),turnScale:1/0}:t<.82?{model:"phantom",w0:Gt(n,-1.22,-1.035),wa:Gt(n,.015,.14),turnScale:1/0}:{model:"recollapsing",w0:Gt(n,-.98,-.78),wa:Gt(n,-.08,.08),turnScale:Gt(n,3.2,11)}}function __(n,t){const e=bn(n,6029),i=g_(e),r=m_({...i,expansionRate:t.expansionRate,darkEnergyDensity:t.darkEnergyDensity});let s="heat-death",a=1/0;if(i.model==="phantom")s="big-rip",a=Math.max(vo*1.05,r.asymptoticYears);else if(i.model==="recollapsing"){s="big-crunch";const v=Math.max(1e9,r.turnaroundYears-vo);a=r.turnaroundYears+v*Gt(e,.78,1.08)}const o=e()<.16,c=o?Gt(e,10.55,92):1/0,l=10**Math.min(c,300),h=o&&l<a,d=h?"vacuum-decay":s,m=h?l:a,f=f_[i.model],g=d_[d];return{...i,modelLabel:f.label,modelDescription:f.description,expansionHistory:r.history,turnaroundYears:r.turnaroundYears||null,metastableVacuum:o,vacuumDecayExponent:c,type:d,label:g.label,shortLabel:g.shortLabel,description:g.description,outcomeYears:m,outcomeExponent:Number.isFinite(m)?Math.log10(m):1/0,onsetAt:d==="big-crunch"?790:d==="big-rip"?820:d==="vacuum-decay"?875:930}}function x_(n){return Number.isFinite(n.outcomeYears)?n.outcomeYears<1e12?`T+${(n.outcomeYears/1e8).toFixed(0)} 亿年`:`T+10^${n.outcomeExponent.toFixed(1)} 年`:"渐近 · 无有限终点"}function v_(n){return n.metastableVacuum?`亚稳态 · 假设寿命 10^${n.vacuumDecayExponent.toFixed(1)} 年`:"未设定可见衰变"}const M_=2100,ks=(n,t,e)=>Math.max(t,Math.min(e,n)),uc=(n,t,e)=>{const i=ks((n-t)/(e-t),0,1);return i*i*(3-2*i)};function Jc(n,t){const e=Math.log10(Math.max(138e8,n)),i=Math.log10(138e8),r=t?.cosmicFate;if(r&&Number.isFinite(r.outcomeYears)){if(n>=r.outcomeYears)return 1e3;const a=(e-i)/(r.outcomeExponent-i);return ks(470+a*(r.onsetAt-470),470,r.onsetAt)}if(e<12)return 470+(e-i)/(12-i)*100;if(e<14)return 570+(e-12)/2*80;if(e<15)return 650+(e-14)*30;if(e<38)return 680+(e-15)/23*165;const s=t?.blackHoleEvaporationExponent||100;return e<s?845+(e-38)/(s-38)*105:950}function y_(n,t,e){const i=ks(Number(n),0,1e3),r=Qc(i,t),s=e.findIndex(o=>i<o.until),a=s<0?e.length-1:s;return{position:i,label:r,eraIndex:a,era:e[a],galaxyIdentityOpacity:uc(i,245,325)*(1-uc(i,820,900))}}function S_(n){const e=1139.904761904762/M_;return n<145||n>=930?e*.42:e*1.25}function E_({position:n,label:t,universe:e,activeEvent:i,activeRelationship:r,ascendedSpecies:s,activeSpecies:a,civilizationData:o}){if(i){const l=n>=i.impactAt,h=l?`；${i.outcome}`:"";return{key:`${i.id}-${l?"aftermath":"forming"}`,time:t,text:`${i.label}：${i.message}${h}`}}const c=e?.cosmicFate;if(c&&c.type!=="heat-death"&&n>=c.onsetAt){if(c.type==="vacuum-decay"){const h=n>=985;return{key:`fate-vacuum-${h?"terminal":"bubble"}`,time:t,text:h?"低能真空泡已经穿过可观测区域，原有粒子与相互作用不再适用":"量子隧穿产生了低能真空泡，泡壁以接近光速向外扩张"}}if(c.type==="big-rip"){const h=n>=985;return{key:`fate-rip-${h?"terminal":"unbinding"}`,time:t,text:h?"膨胀率在有限时间内发散，局部束缚结构相继失效":"幽灵暗能量密度持续上升，星系团与星系开始逐层解束缚"}}const l=n>=985;return{key:`fate-crunch-${l?"terminal":"turnaround"}`,time:t,text:l?"坍缩使物质与辐射密度急剧升高，经典演化在高曲率阶段失效":"宇宙膨胀已经停止，大尺度距离开始反向缩小"}}if(r){const l=o[r.speciesA],h=o[r.speciesB],d=r.relationship==="conflict"?`${l.name} 与 ${h.name} 的边界冲突正在削减双方疆域`:`${l.name} 与 ${h.name} 建立友好共存区，共享资源与航路`;return{key:`relation-${r.relationship}-${r.speciesA}-${r.speciesB}`,time:t,text:d}}return s>0?{key:`ascended-${s}`,time:t,text:`${s} 个种群已转化为高维生命，脱离恒星与黑洞的普通物质演化`}:n<55?{key:"bang",time:"T+0",text:"整个可观测区域处于超高温、高密度状态，空间本身在膨胀"}:n<145?{key:"plasma",time:t,text:"光子在等离子体中不断散射，宇宙随膨胀持续冷却"}:n<245?{key:"dark",time:t,text:"复合后宇宙变得透明，但尚没有恒星光"}:n<340?{key:"stars",time:t,text:"第一代恒星与星系点亮，再电离逐渐开始"}:a>0?{key:`life-${a}`,time:t,text:`${a} 个主要文明种群正在跨越恒星系扩张`}:n<430?{key:"chemistry",time:t,text:"重元素丰度上升，宜居行星开始形成"}:n<Math.min(...o.map(l=>l.birth),620)?{key:"waiting-life",time:t,text:"宜居世界正在积累复杂化学反应，智慧生命尚未出现"}:n<620?{key:"silence",time:t,text:"文明信号已经沉寂，只剩无人维护的轨道遗迹"}:n<650?{key:"last-stars",time:t,text:"恒星形成早已停止，最后的低质量红矮星仍在极缓慢地消耗燃料"}:n<710?{key:"degenerate",time:t,text:"最后一批红矮星熄灭，恒星残骸仍被星系引力束缚并长期绕核运行"}:n<845?{key:"evaporation",time:t,text:"长期引力近遇持续重分配能量，少数残骸逐个逃离，极少数落向星系中心"}:n<950?{key:"holes",time:t,text:"黑洞通过霍金辐射缓慢蒸发"}:{key:"heatdeath",time:t,text:"最后的黑洞已经蒸发，残余光子持续红移并稀释，可用能量梯度趋近于零"}}function Qc(n,t){const e=(s,a,o)=>10**(Math.log10(s)+(Math.log10(a)-Math.log10(s))*o),i=s=>{if(s<1){const a=s*31557600;return a<3600?`${Math.round(a/60)} 分钟`:a<86400?`${(a/3600).toFixed(1)} 小时`:`${(a/86400).toFixed(1)} 天`}return s<1e4?`${Math.max(1,Math.round(s))} 年`:s<1e8?`${(s/1e4).toFixed(s<1e6?1:0)} 万年`:s<1e12?`${(s/1e8).toFixed(s<1e9?2:1)} 亿年`:`10^${Math.log10(s).toFixed(1)} 年`};if(n<18)return`T+${Math.max(.001,e(.001,1,n/18)).toFixed(3)} 秒`;if(n<55)return`T+${Math.max(1,Math.round(e(1,180,(n-18)/37)))} 秒`;if(n<145)return`T+${i(e(180/31557600,38e4,(n-55)/90))}`;if(n<245)return`T+${i(e(38e4,18e7,(n-145)/100))}`;if(n<340)return`T+${i(e(18e7,1e9,(n-245)/95))}`;if(n<470)return`T+${i(e(1e9,138e8,(n-340)/130))}`;const r=t?.cosmicFate;if(r&&Number.isFinite(r.outcomeYears)){if(n>=999)return r.label;const s=ks((n-470)/(r.onsetAt-470),0,1),a=e(138e8,r.outcomeYears,s);return`T+${i(a)}`}return n<570?`T+${i(e(138e8,1e12,(n-470)/100))}`:n<650?`T+10^${(12+(n-570)/80*2).toFixed(1)} 年`:n<680?`T+10^${(14+(n-650)/30).toFixed(1)} 年`:n<845?`T+10^${Math.round(15+(n-680)/165*23)} 年`:n<950?`T+10^${Math.round(38+(n-845)/105*(t.blackHoleEvaporationExponent-38))} 年`:n<999?`T+10^${t.blackHoleEvaporationExponent} 年以后`:"趋近热寂"}function b_(n){const t=Math.round(n*360);return`${t<190?"青白":t<225?"蓝白":t<250?"靛蓝":"紫白"} · ${t}°`}function T_(n,t){return n===2?"主环 + 碎环":n===3?"无旋臂":n===4?"不规则":`${t} 条`}function A_(n){const t=n*100;return t<1e-4?"< 0.0001%":t<.01?`${t.toFixed(4)}%`:t<1?`${t.toFixed(2)}%`:`${t.toFixed(1)}%`}function w_(n){return n===0?"尚未出现":`${new Intl.NumberFormat("zh-CN").format(n)} 个`}function th(n){const t=n.lastStarDeathExponent??n.stellarFormationEndExponent;return At.clamp(Jc(10**t,n),478,1e3)}function R_(n){return n>=1?`${n.toFixed(1)} 万亿颗`:`${Math.round(n*1e4)} 亿颗`}function eh(n=c_()){const t=zs(n),e=h_(t),i=bn(t),r=Gt(i,.38,1.84),s=Gt(i,.52,1.76),a=Gt(i,.72,1.28),o=Gt(i,.82,1.18),c=Gt(i,.65,1.45),l=Gt(i,.48,.82),h=Gt(i,.55,1.75),d=Gt(i,1.9,4.4),m=Math.exp(-Math.pow((a-1)/.17,2)-Math.pow((o-1)/.14,2)),f=At.clamp(s*h/Math.pow(c,.72),.12,2.8),g=Math.max(2,Math.round(118*m*Gt(i,.82,1.08))),v=At.clamp(Gt(i,.35,3.2)*f,.08,7.2),p=At.clamp(12.5-(l-.68)*1.35-(c-1)*.42,11.8,13.25),u=At.clamp(p+Gt(i,.68,1.08),12.8,14.25),b=m*At.clamp(1-Math.abs(d-2.725)/3.5,.12,1),S=Math.pow(i(),4)*.08*b,M=Math.floor(Gt(i,5,16)),T=Math.max(M,Math.floor(v*1e5*S*Gt(i,.02,.7))),E=Math.round(Math.pow(10,u-8)/10)*10,w=Math.floor(Gt(i,3,7)),P=e%xo.length,_=[.96,.92,.72,.99,.34][P],x=i()<_,R=x&&i()<[.1,.07,.05,.045,.025][P],D=Math.floor(Gt(i,97,103)),N=Gt(i,.48,.76),q=__(t,{expansionRate:c,darkEnergyDensity:l});return{seed:t,seedValue:e,speed:r,gravity:s,fineStructure:a,massRatio:o,expansionRate:c,darkEnergyDensity:l,primordialFluctuation:h,cmbTemperature:d,chemistryStability:m,structureEfficiency:f,stellarFormationEndExponent:p,lastStarDeathExponent:u,elements:g,stars:v,lifeProbability:S,civilizations:T,speciesCount:M,lifetime:E,blackHoleEvaporationExponent:D,armCount:w,galaxyType:P,hasCentralBlackHole:x,activeNucleus:R,hue:N,cosmicFate:q}}let pr=null;function Mo(){const n=document.createElement("canvas");n.width=n.height=256;const t=n.getContext("2d"),e=t.createRadialGradient(128,128,82,128,128,128);e.addColorStop(0,"rgba(255,255,255,0)"),e.addColorStop(.72,"rgba(255,255,255,0)"),e.addColorStop(.86,"rgba(255,255,255,.8)"),e.addColorStop(.91,"rgba(255,255,255,.18)"),e.addColorStop(1,"rgba(255,255,255,0)"),t.fillStyle=e,t.fillRect(0,0,256,256);const i=new Fs(n);return i.colorSpace=De,i}function nn(){const n=document.createElement("canvas");n.width=n.height=128;const t=n.getContext("2d"),e=t.createRadialGradient(64,64,0,64,64,64);e.addColorStop(0,"rgba(255,255,255,1)"),e.addColorStop(.08,"rgba(255,230,170,.85)"),e.addColorStop(.35,"rgba(255,190,100,.22)"),e.addColorStop(1,"rgba(0,0,0,0)"),t.fillStyle=e,t.fillRect(0,0,128,128);const i=new Fs(n);return i.colorSpace=De,i}function Ke(){if(pr)return pr;const n=document.createElement("canvas");n.width=n.height=64;const t=n.getContext("2d"),e=t.createRadialGradient(32,32,0,32,32,32);return e.addColorStop(0,"rgba(255,255,255,1)"),e.addColorStop(.22,"rgba(255,255,255,.95)"),e.addColorStop(.5,"rgba(255,255,255,.35)"),e.addColorStop(1,"rgba(255,255,255,0)"),t.fillStyle=e,t.fillRect(0,0,64,64),pr=new Fs(n),pr.colorSpace=De,pr}let ms=null,gs=null,_s=null;function Vo(n){const t=document.createElement("canvas");t.width=1024,t.height=1024;const e=t.getContext("2d");n(e,t.width);const i=new Fs(t);return i.colorSpace=De,i.minFilter=jn,i.magFilter=dn,i}function un(n,t,e,i,r,s,a=0,o=Math.PI*2){n.beginPath(),n.ellipse(t,e,i,r,s,a,o)}function fc(){return ms||(ms=Vo((n,t)=>{const e=t/2,i=n.createLinearGradient(96,e,t-96,e);i.addColorStop(0,"rgba(255,255,255,0)"),i.addColorStop(.12,"rgba(255,221,174,.18)"),i.addColorStop(.35,"rgba(255,245,222,.76)"),i.addColorStop(.5,"rgba(255,255,255,1)"),i.addColorStop(.66,"rgba(255,232,199,.82)"),i.addColorStop(.88,"rgba(255,179,126,.2)"),i.addColorStop(1,"rgba(255,255,255,0)"),n.save(),n.globalCompositeOperation="lighter",n.filter="blur(34px)",n.strokeStyle=i,n.lineCap="round",n.lineWidth=62,un(n,e,e+7,360,74,-.1),n.stroke(),n.filter="blur(15px)",n.lineWidth=22,un(n,e,e+4,325,62,-.1),n.stroke(),n.restore(),n.save(),n.globalCompositeOperation="lighter",n.lineCap="round",n.strokeStyle=i,n.filter="blur(13px)",n.lineWidth=34,un(n,e-2,e+3,118,164,-.08,Math.PI*1.03,Math.PI*1.98),n.stroke(),n.lineWidth=25,un(n,e+2,e+4,121,161,-.08,.03,Math.PI*.97),n.stroke(),n.filter="none",n.lineWidth=7,n.strokeStyle="rgba(255,250,232,.92)",un(n,e-2,e+3,116,160,-.08,Math.PI*1.05,Math.PI*1.95),n.stroke(),n.strokeStyle="rgba(255,221,180,.72)",un(n,e+2,e+4,119,158,-.08,.07,Math.PI*.93),n.stroke(),n.restore(),n.save(),n.globalCompositeOperation="lighter",n.lineCap="round";for(let a=0;a<12;a++){const o=164+a*16,c=28+a*3.25,l=.2-a*.011;n.strokeStyle=`rgba(255,238,210,${l})`,n.lineWidth=a<4?3.5:2,un(n,e,e+6,o,c,-.1),n.stroke()}n.restore();const r=n.createRadialGradient(e-18,e-20,6,e,e,105);r.addColorStop(0,"rgba(0,0,0,1)"),r.addColorStop(.78,"rgba(0,0,0,1)"),r.addColorStop(.94,"rgba(1,1,2,.995)"),r.addColorStop(1,"rgba(0,0,0,0)"),n.fillStyle=r,n.fillRect(e-112,e-112,224,224),n.save(),n.globalCompositeOperation="lighter",n.filter="blur(12px)",n.strokeStyle="rgba(255,244,220,.86)",n.lineWidth=24,un(n,e,e,103,106,-.08),n.stroke(),n.filter="none",n.strokeStyle="rgba(255,255,247,.98)",n.lineWidth=6,un(n,e,e,102,105,-.08),n.stroke();const s=n.createLinearGradient(130,e+58,t-120,e-32);s.addColorStop(0,"rgba(255,184,126,0)"),s.addColorStop(.2,"rgba(255,207,158,.55)"),s.addColorStop(.43,"rgba(255,251,231,.98)"),s.addColorStop(.66,"rgba(255,244,219,.94)"),s.addColorStop(.9,"rgba(255,166,112,.34)"),s.addColorStop(1,"rgba(255,166,112,0)"),n.strokeStyle=s,n.lineCap="round",n.filter="blur(11px)",n.lineWidth=28,n.beginPath(),n.moveTo(132,e+103),n.bezierCurveTo(318,e+83,638,e-54,908,e-90),n.stroke(),n.filter="none",n.lineWidth=9,n.stroke(),n.restore()}),ms)}function C_(){return gs||(gs=Vo((n,t)=>{const e=t/2;n.globalCompositeOperation="lighter",n.lineCap="round";for(let i=0;i<18;i++){const r=i/18*Math.PI*2,s=108+i%3*17,a=.11+i%4*.035;n.strokeStyle=`rgba(255,255,245,${.24+i%5*.07})`,n.lineWidth=2+i%3,un(n,e,e,s,s*.9,-.08,r,r+a),n.stroke()}n.filter="blur(9px)",n.strokeStyle="rgba(255,238,209,.42)",n.lineWidth=10,un(n,e,e,118,111,-.08,.14,Math.PI*.72),n.stroke()}),gs)}function P_(){return _s||(_s=Vo((n,t)=>{const e=t/2,i=n.createRadialGradient(e,e,44,e,e,430);i.addColorStop(0,"rgba(255,250,232,.7)"),i.addColorStop(.18,"rgba(255,226,190,.38)"),i.addColorStop(.42,"rgba(255,180,119,.1)"),i.addColorStop(.72,"rgba(255,139,84,.025)"),i.addColorStop(1,"rgba(255,255,255,0)"),n.fillStyle=i,n.fillRect(0,0,t,t)}),_s)}function nh({color:n=16762255,tilt:t=0,phase:e=0,visualScale:i=1,intensity:r=1}={}){const s=new ze,a=new ve(new ge({map:P_(),color:n,transparent:!0,opacity:0,depthWrite:!1,blending:Kt}));a.scale.setScalar(2.65*i);const o=new ve(new ge({map:fc(),color:n,transparent:!0,opacity:0,alphaTest:.006,depthWrite:!1,blending:xi,rotation:t}));o.scale.setScalar(2.2*i);const c=new ve(new ge({map:C_(),color:n,transparent:!0,opacity:0,depthWrite:!1,blending:Kt,rotation:t}));c.scale.setScalar(2.2*i);const l=new ve(new ge({map:fc(),color:n,transparent:!0,opacity:0,alphaTest:.006,depthWrite:!1,blending:Kt,rotation:t}));l.scale.setScalar(2.2*i);const h=new sn(new Os(.235*i,32,20),new Fr({color:0}));return h.renderOrder=2,a.renderOrder=1,o.renderOrder=3,l.renderOrder=4,c.renderOrder=5,s.add(a,h,o,l,c),s.userData.blackHoleVisual={halo:a,horizon:h,accretion:o,bloom:l,flow:c,intensity:0,baseTilt:t,phase:e,visualScale:i},vr(s,r),s}function vr(n,t){const e=n.userData.blackHoleVisual;if(!e)return;const i=At.clamp(t,0,1.4);e.intensity=i,e.accretion.material.opacity=Math.min(1,i*.92),e.bloom.material.opacity=Math.min(.34,i*.27),e.flow.material.opacity=Math.min(.82,i*.5),e.halo.material.opacity=Math.min(.7,i*.42)}function bs(n,t,e=1){const i=n.userData.blackHoleVisual;if(!i||i.intensity<=0)return;const r=t*.001,s=1+Math.sin(r*.72+i.phase)*.035,a=.82+Math.sin(r*1.7+i.phase*1.9)*.18;i.halo.scale.setScalar(2.65*i.visualScale*s),i.halo.material.opacity=Math.min(.7,i.intensity*(.36+a*.09)),i.bloom.material.opacity=Math.min(.36,i.intensity*(.22+a*.07)),i.flow.material.rotation=i.baseTilt+e*Math.sin(r*.44+i.phase)*.055,i.flow.material.opacity=Math.min(.82,i.intensity*(.38+a*.15))}const ba=220,Ta=340;function D_(n){if(n<=ba)return 0;const t=Ta-ba;if(n<Ta){const e=(n-ba)/t;return t*(e**3-.5*e**4)}return t*.5+n-Ta}function ih(n,t){return D_(n)*t}function L_(n,{civilizationSimulation:t,civilizationData:e,civilizationGroups:i}){if(!n||!t)return;const r=new Uint16Array(e.length);n.owners.forEach((s,a)=>{if(s<0)return;const o=r[s]++;e[s].hostRemnantIndices[o]=t.habitatRemnantIndices[a]}),e.forEach((s,a)=>{s.displayCount=r[a],i[a].geometry.setDrawRange(0,r[a])})}function I_({stellarRemnants:n,remnantDynamics:t,cosmicPosition:e,civilizationData:i,civilizationGroups:r}){if(!n)return;const s=n.geometry.attributes.position.array,a=new F,o=(c,l,h,d,m)=>{const f=c*3,g=Math.min(e,t.escapeAt[c]),v=ih(g,t.orbitRates[c]),p=Math.cos(v),u=Math.sin(v),b=t.axes[f],S=t.axes[f+1],M=t.axes[f+2],T=b*l+S*h+M*d;m.set(l*p+(S*d-M*h)*u+b*T*(1-p),h*p+(M*l-b*d)*u+S*T*(1-p),d*p+(b*h-S*l)*u+M*T*(1-p))};i.forEach((c,l)=>{const h=r[l];if(!h)return;const d=h.geometry.attributes.position.array;for(let f=0;f<c.displayCount;f++){const g=c.hostRemnantIndices[f],v=g*3,p=f*3;if(o(g,c.hostOffsets[p],c.hostOffsets[p+1],c.hostOffsets[p+2],a),d[p]=s[v]+a.x,d[p+1]=s[v+1]+a.y,d[p+2]=s[v+2]+a.z,c.highDimensional&&e>=c.ascensionAt){const u=At.smoothstep(e,c.ascensionAt,c.ascensionAt+34),b=f*1.618+e*.035;d[p]+=Math.sin(b)*u*.7,d[p+1]+=Math.cos(b*.73)*u*.42,d[p+2]+=Math.sin(b*.51+2.1)*u*.7}}h.geometry.attributes.position.needsUpdate=!0;const m=c.homeRemnantIndex*3;if(o(c.homeRemnantIndex,c.homeOffset.x,c.homeOffset.y,c.homeOffset.z,a),c.home.set(s[m]+a.x,s[m+1]+a.y,s[m+2]+a.z),c.highDimensional&&e>=c.ascensionAt){const f=At.smoothstep(e,c.ascensionAt,c.ascensionAt+34),g=l*2.17+e*.035;c.home.x+=Math.sin(g)*f*.7,c.home.y+=Math.cos(g*.73)*f*.42,c.home.z+=Math.sin(g*.51+2.1)*f*.7}})}function U_(n,t){const{mode:e,epochEffectsGroup:i,primordialParticles:r,primordialFactors:s,primordialDirections:a,expansionStreaks:o,expansionDirections:c,bangCore:l,shockwaves:h,renderer:d,scene:m,clickableStars:f,originalGalaxyPositions:g,universe:v,transition:p,galaxyGroup:u,starDeathThresholds:b,originalGalaxyColors:S,cosmicEvents:M,remnantGroup:T,stellarRemnants:E,originalRemnantPositions:w,remnantDynamics:P,blackHoleRemnants:_,heatDeathGroup:x,coldPhotons:R,originalPhotonPositions:D,originalPhotonColors:N,cosmicFateGroup:q,fateBubble:B,fateGlow:V}=t,Y=v.cosmicFate,z=Y&&Y.type!=="heat-death",I=z?At.smoothstep(n,Y.onsetAt,1e3):0,G=n<150&&e==="explorer";if(i.visible=G,G&&r){const lt=At.smoothstep(n,0,145),ut=At.smoothstep(n,0,55),ft=At.smoothstep(n,55,145),ht=.06+Math.pow(ut,.62)*32+ft*7,dt=r.geometry.attributes.position.array;for(let Dt=0;Dt<s.length;Dt++){const C=ht*s[Dt];dt[Dt*3]=a[Dt*3]*C,dt[Dt*3+1]=a[Dt*3+1]*C,dt[Dt*3+2]=a[Dt*3+2]*C}r.geometry.attributes.position.needsUpdate=!0,r.material.opacity=.98*(1-At.smoothstep(n,112,150)),r.material.size=.3-lt*.17;const et=o.geometry.attributes.position.array;for(let Dt=0;Dt<c.length/4;Dt++){const C=c[Dt*4+3],y=(.04+Math.pow(ut,.5)*31+ft*5)*C,k=Math.max(0,y-(1.2+lt*5.5)*C);for(let X=0;X<3;X++){const J=c[Dt*4+X];et[Dt*6+X]=J*k,et[Dt*6+3+X]=J*y}}o.geometry.attributes.position.needsUpdate=!0,o.material.opacity=.68*At.smoothstep(n,1.5,8)*(1-At.smoothstep(n,48,82));const vt=1-At.smoothstep(n,7,34),Xt=.7+Math.pow(ut,.46)*18;l.material.opacity=vt,l.scale.set(Xt,Xt,1),h.forEach((Dt,C)=>{const y=3+C*6,k=52+C*7,X=At.clamp((n-y)/k,0,1),J=.9+Math.pow(X,.72)*(39+C*5);Dt.scale.set(J,J,1),Dt.material.opacity=Math.sin(X*Math.PI)*(.24-C*.045)})}const Q=new kt(328968),nt=Q.clone();if(n<70){const lt=At.smoothstep(n,0,70);nt.lerpColors(new kt(2756872),Q,lt),d.toneMappingExposure=1.15+(1-lt)*2.2}else if(z&&I>0){const lt={"big-rip":new kt(463652),"big-crunch":new kt(2492422),"vacuum-decay":new kt(1444389)};nt.lerpColors(Q,lt[Y.type],I*.72),d.toneMappingExposure=Y.type==="big-crunch"?1.15+I*1.45:1.15-I*.38}else if(n>950){const lt=At.smoothstep(n,950,1e3);nt.lerpColors(Q,new kt(197898),lt*.32),d.toneMappingExposure=1.15}else d.toneMappingExposure=1.15;if(d.setClearColor(nt,1),m.fog.color.copy(nt),!f||!g)return;const Lt=th(v),zt=At.smoothstep(n,220,340),Wt=1-At.smoothstep(n,Lt-75,Lt+10);f.material.opacity=zt*.9,f.material.size=.09,p||u.scale.setScalar(1);const W=f.geometry.attributes.position.array,Z=f.geometry.attributes.color.array;for(let lt=0;lt<g.length;lt+=3){const ut=lt/3,ft=1-At.smoothstep(n,b[ut],b[ut]+22);W[lt]=g[lt],W[lt+1]=g[lt+1],W[lt+2]=g[lt+2],Z[lt]=S[lt]*ft,Z[lt+1]=S[lt+1]*ft,Z[lt+2]=S[lt+2]*ft}if(M.forEach(lt=>{if(n<lt.impactAt)return;const ut=At.smoothstep(n,lt.impactAt,lt.impactAt+24);if(lt.starImpacts.forEach(X=>{const J=X.index*3;W[J]+=X.kick[0]*ut,W[J+1]+=X.kick[1]*ut,W[J+2]+=X.kick[2]*ut,Z[J]*=X.dimFactor,Z[J+1]*=X.dimFactor,Z[J+2]*=X.dimFactor}),lt.visual!=="black-hole-merger"||!lt.waveSamples)return;const ft=lt.duration*(1-lt.impactPhase),ht=At.clamp((n-lt.impactAt)/ft,0,1);if(ht<=0||ht>=1)return;const{waveRadius:dt,indices:et,distances:vt,transverse:Xt,polarities:Dt}=lt.waveSamples,C=.18+Math.pow(ht,.72)*dt,y=.18+ht*.34,k=.13*(1-ht*.58);for(let X=0;X<et.length;X++){const J=vt[X]-C;if(Math.abs(J)>y*2.8)continue;const K=Math.cos(J/y*Math.PI)*Math.exp(-Math.pow(J/y,2)*1.7),Mt=K*k*Dt[X],it=et[X]*3,yt=X*3;W[it]+=Xt[yt]*Mt,W[it+1]+=Xt[yt+1]*Mt,W[it+2]+=Xt[yt+2]*Mt;const St=1+Math.abs(K)*.18;Z[it]*=St,Z[it+1]*=St,Z[it+2]*=St}}),z&&I>0){const lt=B?.position.x||0,ut=B?.position.y||0,ft=B?.position.z||0,ht=.18+Math.pow(I,.58)*36;for(let dt=0;dt<g.length;dt+=3)if(Y.type==="big-rip"){const et=Math.hypot(g[dt],g[dt+1],g[dt+2]),vt=1+Math.pow(I,1.7)*(2.8+et*.16);W[dt]*=vt,W[dt+1]*=vt,W[dt+2]*=vt;const Xt=Math.pow(1-I,.72);Z[dt]*=Xt,Z[dt+1]*=Xt,Z[dt+2]*=Xt}else if(Y.type==="big-crunch"){const et=Math.max(.012,1-Math.pow(I,1.35)*.988);W[dt]*=et,W[dt+1]*=et,W[dt+2]*=et,Z[dt]*=1+I*1.4,Z[dt+1]*=1-I*.5,Z[dt+2]*=1-I*.72}else{const et=Math.hypot(W[dt]-lt,W[dt+1]-ut,W[dt+2]-ft),vt=At.smoothstep(ht-1.2,ht+.4,et);Z[dt]*=vt,Z[dt+1]*=vt,Z[dt+2]*=vt}}f.geometry.attributes.position.needsUpdate=!0,f.geometry.attributes.color.needsUpdate=!0;const xt=u.children.find(lt=>lt.userData.isCoreGlow);if(xt){const{scale:lt,opacity:ut}=xt.userData.profile;xt.material.opacity=zt*Wt*ut*(1-I),xt.scale.set(lt,lt,1)}const Pt=u.children.find(lt=>lt.userData.isAgnGlow),bt=u.children.find(lt=>lt.userData.isAgnJet);if(Pt){const lt=zt*(1-At.smoothstep(n,500,650));Pt.material.opacity=lt*.82,Pt.scale.set(.72,.72,1),bt.material.opacity=lt*.18}const Zt=!z||Y.outcomeExponent>38,be=Zt&&n>Lt-80&&n<930,L=Zt&&n>825&&n<960;if(T.visible=(be||L)&&e==="explorer",be&&E){const lt=At.smoothstep(n,Lt-80,Lt+15),ut=1-At.smoothstep(n,845,930);E.material.opacity=lt*ut*.64*(1-I);const ft=E.geometry.attributes.position.array,ht=(dt,et)=>{const vt=dt*3,Xt=w[vt],Dt=w[vt+1],C=w[vt+2],y=P.axes[vt],k=P.axes[vt+1],X=P.axes[vt+2],J=ih(et,P.orbitRates[dt]),K=Math.cos(J),Mt=Math.sin(J),it=y*Xt+k*Dt+X*C;ft[vt]=Xt*K+(k*C-X*Dt)*Mt+y*it*(1-K),ft[vt+1]=Dt*K+(X*Xt-y*C)*Mt+k*it*(1-K),ft[vt+2]=C*K+(y*Dt-k*Xt)*Mt+X*it*(1-K)};for(let dt=0;dt<w.length/3;dt++){const et=dt*3,vt=P.fates[dt],Xt=P.escapeAt[dt];if(n<Xt||vt===1){ht(dt,n);continue}if(vt===2){const st=At.smoothstep(n,Xt,Math.min(900,Xt+42));ht(dt,n+st*150);const ct=1-st*.985;ft[et]*=ct,ft[et+1]*=ct,ft[et+2]*=ct;continue}ht(dt,Xt);const Dt=ft[et],C=ft[et+1],y=ft[et+2],k=Math.max(.001,Math.hypot(Dt,C,y)),X=P.axes[et],J=P.axes[et+1],K=P.axes[et+2],Mt=Math.sign(P.orbitRates[dt])||1;let it=(J*y-K*C)*Mt,yt=(K*Dt-X*y)*Mt,St=(X*C-J*Dt)*Mt;const rt=Math.max(.001,Math.hypot(it,yt,St));it/=rt,yt/=rt,St/=rt;let mt=it*.9+Dt/k*.34,Nt=yt*.9+C/k*.34+J*Math.sin(dt*12.9898)*.08,wt=St*.9+y/k*.34;const pt=Math.max(.001,Math.hypot(mt,Nt,wt));mt/=pt,Nt/=pt,wt/=pt;const Yt=At.clamp((n-Xt)/Math.max(1,900-Xt),0,1),U=vt===3?Math.pow(Yt,.72)*(18+P.speeds[dt]*7):Math.pow(Yt,1.35)*(6+P.speeds[dt]*11);ft[et]=Dt+mt*U,ft[et+1]=C+Nt*U,ft[et+2]=y+wt*U}E.geometry.attributes.position.needsUpdate=!0}if(_.forEach(lt=>{const ut=lt.userData,ft=At.smoothstep(n,ut.birthAt,ut.birthAt+7),ht=1-At.smoothstep(n,ut.evaporationAt-24,ut.evaporationAt),dt=At.smoothstep(n,ut.evaporationAt-15,ut.evaporationAt),et=7.5,vt=Math.abs(n-ut.evaporationAt),Xt=vt<et?Math.sin((1-vt/et)*Math.PI/2):0;lt.visible=Zt&&e==="explorer"&&n>=ut.birthAt&&n<=ut.evaporationAt+et;const Dt=ut.baseScale*(.18+.82*Math.cbrt(Math.max(0,ht)));lt.scale.setScalar(Math.max(.035,Dt));const C=ft*(.78+dt*.22)*Math.sqrt(Math.max(0,ht));vr(lt,C),ut.hawkingGlow.material.opacity=ft*(.07+dt*.62)*Math.sqrt(Math.max(0,ht)),ut.finalPulse.material.opacity=Xt*.84;const y=(.22+Xt*2.1)/Math.max(.035,Dt);ut.finalPulse.scale.set(y,y,1)}),x.visible=!z&&n>910&&e==="explorer",R&&D&&N){const lt=At.smoothstep(n,910,940),ut=At.smoothstep(n,938,1e3);R.material.opacity=lt*Math.pow(1-ut,1.7)*.34;const ft=R.geometry.attributes.position.array,ht=R.geometry.attributes.color.array,dt=1+ut*1.8;for(let et=0;et<D.length;et+=3)ft[et]=D[et]*dt,ft[et+1]=D[et+1]*dt,ft[et+2]=D[et+2]*dt,ht[et]=N[et]*(1-ut*.55)+ut*.06,ht[et+1]=N[et+1]*(1-ut*.88),ht[et+2]=N[et+2]*(1-ut*.96);R.geometry.attributes.position.needsUpdate=!0,R.geometry.attributes.color.needsUpdate=!0}if(q.visible=z&&I>0&&e==="explorer",q.visible&&B&&V)if(Y.type==="vacuum-decay"){const lt=.18+Math.pow(I,.58)*36;B.visible=!0,B.scale.setScalar(lt),B.material.opacity=Math.sin(Math.min(.98,I)*Math.PI)*.18+.035,V.position.copy(B.position),V.material.opacity=(1-I)*.42,V.scale.setScalar(1.2+I*5.5)}else{B.visible=!1,V.position.set(0,0,0),V.material.opacity=Y.type==="big-crunch"?Math.pow(I,2.4)*.92:Math.sin(I*Math.PI)*.28;const lt=Y.type==="big-crunch"?.4+(1-I)*8:3+I*28;V.scale.setScalar(lt)}}function F_(n,t){const{mode:e,cosmicEvents:i,cosmicEventGroup:r}=t;let s=null,a=!1;return i.forEach(o=>{const c=(n-o.start)/o.duration,l=c>=0&&c<=1,h=o.visual==="black-hole-merger"&&n>=o.impactAt&&n<=o.persistUntil,d=(l||h)&&e==="explorer";if(o.group.visible=d,!d)return;a=!0,l&&(s=o);const m=Math.min(1,c);o.group.userData.phase=m;const f=o.group.userData.effect;if(o.visual==="supernova"){const g=m,v=At.smoothstep(g,0,.028),p=v*(1-At.smoothstep(g,.045,.19)),u=(1-At.smoothstep(g,.12,1))*v;f.innerFlash.material.opacity=p*.98;const b=.08+Math.pow(Math.min(1,g/.16),.28)*.72;f.innerFlash.scale.set(b,b,1),f.photosphere.material.opacity=p*.58+u*.2;const S=.16+Math.pow(g,.56)*1.15;f.photosphere.scale.set(S,S*.9,1),f.remnant.material.opacity=At.smoothstep(g,.2,.52)*(1-At.smoothstep(g,.82,1))*.72;const M=f.ejecta.geometry.attributes.position.array;for(let w=0;w<f.ejectaVelocity.length;w++){const P=At.clamp((g-f.ejectaDelay[w])/(1-f.ejectaDelay[w]),0,1),_=.05+Math.pow(P,.58)*f.ejectaVelocity[w],x=Math.sin(P*10+w*1.73)*P*.045,R=w*3;M[R]=f.ejectaDirections[R]*_+x*f.ejectaDirections[R+1],M[R+1]=f.ejectaDirections[R+1]*_+x*f.ejectaDirections[R+2],M[R+2]=f.ejectaDirections[R+2]*_+x*f.ejectaDirections[R]}f.ejecta.geometry.attributes.position.needsUpdate=!0,f.ejecta.material.opacity=v*(1-At.smoothstep(g,.58,1))*.86;const T=f.shell.geometry.attributes.position.array,E=.12+(1-Math.pow(1-g,2.4))*2.25;for(let w=0;w<f.shellNoise.length;w++){const P=w*3,_=1+Math.sin(f.shellNoise[w]+g*4.5)*.055+Math.sin(w*2.1)*.025;T[P]=f.shellDirections[P]*E*_,T[P+1]=f.shellDirections[P+1]*E*_,T[P+2]=f.shellDirections[P+2]*E*_}f.shell.geometry.attributes.position.needsUpdate=!0,f.shell.material.opacity=At.smoothstep(g,.04,.14)*(1-At.smoothstep(g,.5,1))*.34}else if(o.visual==="pulsar"){const v=Math.pow(Math.sin(m*Math.PI),.45),p=o.type==="pulsar-glitch"?.22:1;f.core.material.opacity=v*.92,f.halo.material.opacity=v*.16*p,f.nebula.material.opacity=v*.095*p,f.halo.scale.set(1.05,1.05,1),f.jets.material.opacity=v*.18*p,f.fieldLines.forEach((u,b)=>{u.material.opacity=v*(.055-b*.007)*p}),o.group.userData.intensity=v}else{const g=m,v=.68,p=g>=v;f.holeA.visible=!p,f.holeB.visible=!p,f.remnantHole.visible=p;const u=Math.min(1,g/v),b=Y=>Math.PI*2*(1.15*Y+4.1*Math.pow(Y,3)),S=Y=>.12+2.45*Math.pow(1-Y,.72),M=b(u),T=S(u);f.holeA.position.set(Math.cos(M)*T,Math.sin(M)*T,Math.sin(M*.5)*.09),f.holeB.position.set(-Math.cos(M)*T,-Math.sin(M)*T,-Math.sin(M*.5)*.09);const E=(Y,z)=>{const I=Y.geometry.attributes.position.array;for(let G=0;G<84;G++){const Q=Math.max(0,u-(83-G)*(.0028+u*9e-4)),nt=b(Q),Lt=S(Q);I[G*3]=z*Math.cos(nt)*Lt,I[G*3+1]=z*Math.sin(nt)*Lt,I[G*3+2]=z*Math.sin(nt*.5)*.09}Y.geometry.attributes.position.needsUpdate=!0,Y.material.opacity=p?0:At.smoothstep(g,.02,.22)*.34};E(f.trailA,1),E(f.trailB,-1);const w=At.clamp((g-v)/(1-v),0,1),P=Math.exp(-w*7)*Math.sin(w*38);f.remnantHole.scale.set(1.24+P*.07,1.24-P*.045,1.24),vr(f.holeA,.62+u*.38),vr(f.holeB,.62+u*.38),vr(f.remnantHole,.74+Math.exp(-w*4)*.34);const _=p?Math.exp(-w*18):0;f.mergerGlow.material.opacity=_*(f.gasRich?.48:.13);const x=.3+w*(f.gasRich?3.6:2.4);f.mergerGlow.scale.set(x,x,1),f.gasEcho.material.opacity=f.gasRich?At.smoothstep(w,.02,.12)*(1-At.smoothstep(w,.3,.92))*.34:0;const R=.35+Math.pow(w,.62)*4.2;f.gasEcho.scale.set(R,R,1),f.waveHalos.forEach((Y,z)=>{const I=z*.12,G=At.clamp((w-I)/(1-I),0,1);Y.visible=p&&G>0;const Q=.38+Math.pow(G,.7)*(8.8+z*.6);Y.scale.set(Q,Q,1),Y.material.opacity=Math.pow(Math.sin(G*Math.PI),.78)*(.29-z*.045)}),f.wavefronts.forEach((Y,z)=>{const I=z*.075,G=At.clamp((w-I)/(1-I),0,1);Y.visible=p&&G>0,Y.scale.setScalar(.28+Math.pow(G,.72)*(7.4+z*.34)),Y.material.opacity=Math.pow(Math.sin(G*Math.PI),.72)*.19*(1-z*.08)});const D=f.waveDust.geometry.attributes.position.array,N=.22+Math.pow(w,.72)*8.6;for(let Y=0;Y<f.waveDirections.length/3;Y++){const z=Y*3,I=f.waveDirections[z],G=f.waveDirections[z+1],Q=f.waveDirections[z+2],nt=1+(I*I-Q*Q)*.085*Math.sin(w*Math.PI*5);D[z]=I*N*nt,D[z+1]=G*N*nt,D[z+2]=Q*N*nt}f.waveDust.geometry.attributes.position.needsUpdate=!0,f.waveDust.material.opacity=p?Math.pow(Math.sin(w*Math.PI),.62)*.5:0;const B=At.smoothstep(w,.08,1)*.68;f.remnantHole.position.copy(f.recoilVector).multiplyScalar(B);const V=f.recoilTrail.geometry.attributes.position.array;V[0]=0,V[1]=0,V[2]=0,V[3]=f.remnantHole.position.x,V[4]=f.remnantHole.position.y,V[5]=f.remnantHole.position.z,f.recoilTrail.geometry.attributes.position.needsUpdate=!0,f.recoilTrail.material.opacity=p?(1-w*.72)*.28:0}}),r.visible=a,s}function N_(n,t){const{cosmicEventGroup:e,prefersReducedMotion:i,cosmicEvents:r,camera:s}=t;!e.visible||i||r.forEach(a=>{if(!a.group.visible)return;a.group.userData.phase;const o=a.group.userData.effect;if(a.visual==="supernova")o.innerFlash.material.rotation=n*7e-5,o.photosphere.material.rotation=-n*35e-6,o.ejecta.rotation.y=Math.sin(n*21e-5)*.035;else if(a.visual==="pulsar"){o.rotor.rotation.y=n*.0024;const c=new ni,l=new F,h=new F(0,1,0);o.rotor.getWorldQuaternion(c),a.group.getWorldPosition(l),h.applyQuaternion(c).normalize();const d=s.position.clone().sub(l).normalize(),m=Math.pow(Math.abs(h.dot(d)),14),f=.52+Math.pow(Math.max(0,Math.sin(n*.012)),10)*.48,g=a.type==="pulsar-glitch"?.16:1;o.jets.material.opacity=a.group.userData.intensity*(.34+m*.58)*f*g,o.sweepGlow.material.opacity=a.group.userData.intensity*m*f*.78*g;const v=.5+m*1.8;o.sweepGlow.scale.set(v,v,1),o.knots.forEach(p=>{const u=(n*55e-5+p.userData.offset)%1;p.position.set(0,p.userData.side*(.18+u*2.45),0),p.material.opacity=a.group.userData.intensity*Math.sin(u*Math.PI)*(.12+m*.55)*g}),o.fieldLines.forEach((p,u)=>{p.rotation.y+=.006+u*.001})}else bs(o.holeA,n,o.holeA.userData.spinDirection),bs(o.holeB,n,o.holeB.userData.spinDirection),bs(o.remnantHole,n,o.remnantHole.userData.spinDirection)})}function O_({universe:n,civilizationData:t,civilizationSimulation:e,cosmicEvents:i}){if(!e||t.length===0)return;const r=e,s=bn(n.seed,9241),a=r.habitatRemnantIndices.length,o=t.length,c=6;for(let _=0;_<a;_++){const x=[],R=_*3;for(let D=0;D<a;D++){if(D===_)continue;const N=D*3,q=Math.hypot(r.habitatPositions[R]-r.habitatPositions[N],r.habitatPositions[R+1]-r.habitatPositions[N+1],r.habitatPositions[R+2]-r.habitatPositions[N+2]);(x.length<c||q<x[x.length-1].distance)&&(x.push({node:D,distance:q}),x.sort((B,V)=>B.distance-V.distance),x.length>c&&x.pop())}r.adjacency[_]=Uint16Array.from(x.map(D=>D.node))}const l=new Int16Array(a);l.fill(-1);const h=new Float32Array(a),d=new Uint8Array(o),m=new Float32Array(o*o),f=new Int8Array(o*o),g=new Int16Array(a);g.fill(-1),t.forEach((_,x)=>{g[_.homeNodeIndex]=x});const v=new Uint16Array(o),p=Array(o).fill("自主扩张"),u=n.cosmicFate?.type!=="heat-death",b=u?n.cosmicFate.onsetAt:620,S=u?1e3:710,M=u?n.cosmicFate.label:"恒星能源枯竭",T=(_,x)=>_*o+x;for(let _=0;_<o;_++)for(let x=_+1;x<o;x++){const R=t[_],D=t[x],N=(R.cooperation+D.cooperation)*.28-(R.aggression+D.aggression)*.24+Gt(s,-.16,.16);m[T(_,x)]=N,m[T(x,_)]=N}const E=(_,x,R,D)=>{m[T(_,x)]=R,m[T(x,_)]=R,f[T(_,x)]=D,f[T(x,_)]=D},w=(_,x,R,D)=>{const N=[];for(let B=0;B<a;B++)l[B]===_&&N.push(B);if(N.length===0)return;R&&(x=1);for(let B=N.length-1;B>0;B--){const V=Math.floor(s()*(B+1));[N[B],N[V]]=[N[V],N[B]]}const q=Math.min(N.length,Math.max(R?N.length:0,Math.round(N.length*x*.62)));N.forEach((B,V)=>{V<q?(l[B]=-1,h[B]=0):h[B]*=Math.max(.18,1-x*.46)}),p[_]=D},P=i.slice().sort((_,x)=>_.impactAt-x.impactAt);for(let _=r.start;_<=r.end;_+=r.step){t.forEach((I,G)=>{d[G]||_<I.birth||(d[G]=1,l[I.homeNodeIndex]=G,h[I.homeNodeIndex]=.34,p[G]="母星文明进入星际阶段")}),P.forEach(I=>{I.impactAt<=_-r.step||I.impactAt>_||I.civilizationImpacts.forEach(G=>{const Q=t[G.speciesIndex];!Q||Q.highDimensional&&_>=Q.ascensionAt||w(G.speciesIndex,G.lossFraction,G.collapse,I.label)})});const x=new Uint8Array(o),R=new Uint8Array(o);for(let I=0;I<o;I++)for(let G=I+1;G<o;G++){const Q=f[T(I,G)];Q>0&&(x[I]++,x[G]++),Q<0&&(R[I]++,R[G]++)}for(let I=0;I<a;I++){const G=l[I];if(G<0)continue;const Q=t[G],nt=1+x[G]*.045-R[G]*.028;h[I]+=(.032+Q.resilience*.018)*nt*(1-h[I]),h[I]=At.clamp(h[I],0,1.35)}const D=new Uint8Array(o*o);for(let I=0;I<a;I++){const G=l[I];G<0||r.adjacency[I].forEach(Q=>{const nt=l[Q];nt<0||nt===G||(D[T(G,nt)]=1,D[T(nt,G)]=1)})}for(let I=0;I<o;I++)for(let G=I+1;G<o;G++){let Q=m[T(I,G)],nt=f[T(I,G)];if(D[T(I,G)]){const Lt=t[I],zt=t[G];Q+=(Lt.cooperation+zt.cooperation-1)*.026,Q-=(Lt.aggression+zt.aggression-.82)*.023,Q+=Gt(s,-.012,.012),nt===0&&Q>.3&&(nt=1),nt===0&&Q<-.26&&(nt=-1),nt===1&&Q<.08&&(nt=0),nt===-1&&Q>-.04&&(nt=0)}else Q*=.992,nt===1&&Q<.1&&(nt=0),nt===-1&&Q>-.08&&(nt=0);E(I,G,At.clamp(Q,-.95,.95),nt)}const N=Array.from({length:o},()=>[]);for(let I=0;I<a;I++)l[I]>=0&&N[l[I]].push(I);if(t.forEach((I,G)=>{const Q=N[G];if(!d[G]||Q.length===0||_>=650)return;const nt=1+Math.floor(I.expansionRate+x[G]*.34);for(let Lt=0;Lt<nt;Lt++){const zt=[];if(Q.forEach(Pt=>{r.adjacency[Pt].forEach(bt=>{l[bt]!==G&&zt.push([Pt,bt])})}),zt.length===0)break;const[Wt,W]=zt[Math.floor(s()*zt.length)],Z=l[W];if(Z<0){if(g[W]>=0&&g[W]!==G&&!d[g[W]])continue;s()<.18+I.expansionRate*.19+x[G]*.025&&(l[W]=G,h[W]=Math.max(.14,h[Wt]*.34),Q.push(W),p[G]=x[G]>0?"协作网络推动殖民":"殖民前沿扩张");continue}const xt=f[T(G,Z)];if(xt>0){h[Wt]=Math.min(1.35,h[Wt]+.018),h[W]=Math.min(1.35,h[W]+.012),p[G]=`与${t[Z].name}交流`,p[Z]=`与${I.name}交流`;continue}if(xt<0){const Pt=h[Wt]*(.72+I.aggression*.76+s()*.35),bt=h[W]*(.84+t[Z].resilience*.52+s()*.28);Pt>bt?(l[W]=G,h[W]=Math.max(.08,Math.min(.48,(Pt-bt)*.5)),p[G]=`与${t[Z].name}争夺边界`,p[Z]=`边界被${I.name}突破`):(h[Wt]*=.84,h[W]*=.92,p[G]=`对${t[Z].name}的进攻受挫`)}else if(s()<I.aggression*.035){const Pt=m[T(G,Z)]-.055;E(G,Z,Pt,Pt<-.26?-1:0)}}}),_>=b){const I=At.smoothstep(_,b,S);for(let G=0;G<a;G++){const Q=l[G];Q<0||t[Q].highDimensional&&_>=t[Q].ascensionAt||(h[G]-=.004+I*.052,(h[G]<=.035||_>=S)&&(l[G]=-1,h[G]=0,p[Q]=M))}}const q=new Uint16Array(o),B=new Float32Array(o);for(let I=0;I<a;I++){const G=l[I];G<0||(q[G]++,B[G]+=h[I])}const V=new Int8Array(o),Y=new Uint8Array(o),z=new Uint8Array(o);for(let I=0;I<o;I++)V[I]=Math.sign(q[I]-v[I]),Y[I]=d[I]&&q[I]>0?1:0,z[I]=t[I].highDimensional&&_>=t[I].ascensionAt?1:0,v[I]=q[I];r.snapshots.push({time:_,owners:l.slice(),counts:q,populations:B,trends:V,active:Y,ascended:z,relations:f.slice(),relationScores:m.slice(),causes:p.slice()})}}function B_(n,t){if(!n?.snapshots.length)return null;const e=n,i=At.clamp(Math.floor((t-e.start)/e.step),0,e.snapshots.length-1);return e.snapshots[i]}function z_(n,t,e,i){let r=1,s=1/0;const a=[],o=e[t];return i.forEach(c=>{if(n<c.impactAt||o?.highDimensional&&c.impactAt>=o.ascensionAt)return;const l=c.civilizationImpacts.find(h=>h.speciesIndex===t);l&&(r*=1-l.lossFraction,l.collapse&&(s=Math.min(s,c.impactAt)),a.push(c.label))}),{capacityFactor:r,collapsedAt:s,lossFraction:1-r,causes:a}}function k_(n,t,e,i){return e.map((r,s)=>{const a=z_(n,s,e,i),o=!!t?.active[s],c=!!t?.ascended[s]&&o,l=[],h=[];return e.forEach((d,m)=>{if(m===s||!t?.active[m])return;const f=t.relations[s*e.length+m];f>0&&l.push(d.name),f<0&&h.push(d.name)}),{alive:o,ascended:c,count:t?.counts[s]||0,trend:t?.trends[s]||0,eventState:a,friendlyNames:l,conflictNames:h}})}function H_(n,t,e){if(!n)return null;let i=null,r=-1;for(let s=0;s<e;s++)for(let a=s+1;a<e;a++){const o=t[s],c=t[a];if(!o?.alive||!c?.alive||o.ascended||c.ascended)continue;const l=n.relations[s*e+a];if(l===0)continue;const d=Math.abs(n.relationScores[s*e+a])+(l<0?2:0);d<=r||(r=d,i={speciesA:s,speciesB:a,relationship:l<0?"conflict":"coexistence"})}return i}const ee=n=>document.querySelector(n);function rh(n){const t=n.cosmicFate;ee("#universe-id").textContent=`#${n.seed}`,ee("#explore-id").textContent=`#${n.seed}`,ee("#speed-value").textContent=`${n.speed.toFixed(2)} × 现实宇宙`,ee("#gravity-value").textContent=`${n.gravity.toFixed(2)} × 现实宇宙`,ee("#fine-structure-value").textContent=`${n.fineStructure.toFixed(3)} × 现实宇宙`,ee("#mass-ratio-value").textContent=`${n.massRatio.toFixed(3)} × 现实宇宙`,ee("#expansion-value").textContent=`${n.expansionRate.toFixed(2)} × 现实宇宙`,ee("#dark-energy-value").textContent=`${(n.darkEnergyDensity*100).toFixed(1)}%`,ee("#fluctuation-value").textContent=`${n.primordialFluctuation.toFixed(2)} × 现实宇宙`,ee("#cmb-value").textContent=`${n.cmbTemperature.toFixed(2)} K`,ee("#elements-value").textContent=`${n.elements} 种`,ee("#stars-value").textContent=R_(n.stars),ee("#life-probability-value").textContent=A_(n.lifeProbability),ee("#civilizations-value").textContent=w_(n.civilizations),ee("#galaxy-type-value").textContent=xo[n.galaxyType],ee("#arm-count-value").textContent=T_(n.galaxyType,n.armCount),ee("#black-hole-value").textContent=n.hasCentralBlackHole?"存在":"未形成",ee("#nucleus-value").textContent=n.hasCentralBlackHole?n.activeNucleus?"活动 · 吸积中":"宁静":"不适用",ee("#stellar-window-value").textContent=t.outcomeExponent<=n.lastStarDeathExponent?"结局前未抵达":`约 10^${n.lastStarDeathExponent.toFixed(1)} 年`,ee("#galaxy-hue-value").textContent=b_(n.hue),ee("#evaporation-value").textContent=t.outcomeExponent<n.blackHoleEvaporationExponent?"结局前未抵达":`约 10^${n.blackHoleEvaporationExponent} 年`,ee("#dark-energy-model-value").textContent=t.modelLabel,ee("#dark-energy-model-value").title=t.modelDescription,ee("#dark-energy-eos-value").textContent=`w₀ ${t.w0.toFixed(2)} · wₐ ${t.wa.toFixed(2)}`,ee("#vacuum-value").textContent=v_(t),ee("#lifetime-value").textContent=`${t.label} · ${x_(t)}`,ee("#timeline-stellar-label").textContent=t.outcomeExponent<=n.lastStarDeathExponent?"暗能量分流":"恒星熄灭",ee("#timeline-late-label").textContent=t.type==="heat-death"?"黑洞时代":"临界阶段",ee("#timeline-final-label").textContent=t.shortLabel,ee("#cosmic-timeline").setAttribute("aria-label",`从大爆炸到${t.label}的宇宙时间`),ee("#universe-note").textContent=sc[n.seedValue%sc.length],ee("#galaxy-name").textContent=`${ac[n.seedValue%ac.length]}星系`;const e=(8+n.stars*4.7).toFixed(1);ee("#galaxy-meta").textContent=`${xo[n.galaxyType]} · 直径 ${e} 万光年`}const je=n=>document.querySelector(n);let dc="",pc=null;function G_(n){je("#cosmic-timeline").value=n.position,je("#time-progress").style.width=`${n.position/10}%`,je("#timeline-value").textContent=n.label,je("#era-number").textContent=String(n.eraIndex+1).padStart(2,"0"),je("#era-name").textContent=n.era.name,je("#cosmic-time").textContent=n.label.replace("T+",""),je("#era-description").textContent=n.era.description,je(".explorer-title").style.setProperty("--cosmic-opacity",n.galaxyIdentityOpacity.toFixed(3))}function V_({position:n,simulationState:t,runtimeState:e,civilizationData:i}){e.forEach((a,o)=>{const c=i[o],l=document.querySelector(`[data-species="${o}"]`);if(!l)return;l.style.opacity=a.alive?"1":".18",l.classList.toggle("is-impacted",a.alive&&a.eventState.causes.length>0),l.classList.toggle("is-ascended",a.ascended);const h=[];t?.causes[o]&&h.push(t.causes[o]),a.friendlyNames.length&&h.push(`与 ${a.friendlyNames.join("、")} 友好交流`),a.conflictNames.length&&h.push(`与 ${a.conflictNames.join("、")} 冲突`),a.eventState.causes.length&&h.push(`受 ${a.eventState.causes.join("、")} 影响`),l.title=a.ascended?"1% 概率的高维转化：已脱离普通物质宿主":h.join("；"),l.querySelector("b").textContent=a.alive?a.ascended?"超维存续":`${a.count} 域${a.trend>0?" ↑":a.trend<0?" ↓":""}`:n<c.birth?"未诞生":"衰亡"});const r=e.filter(a=>a.alive).length,s=e.reduce((a,o)=>a+(o.alive&&!o.ascended?o.count:0),0);je("#civilization-panel").style.setProperty("--cosmic-opacity",r>0?"1":"0"),je("#civilization-summary").textContent=r>0?`${r} 种 · ${s} 域`:"尚未出现"}function W_(n,t=!1){if(n.key===dc&&!t)return;dc=n.key,je("#event-year").textContent=n.time,je("#event-text").textContent=n.text;const e=je("#event-feed");e.classList.remove("is-visible"),requestAnimationFrame(()=>e.classList.add("is-visible")),clearTimeout(pc),pc=setTimeout(()=>e.classList.remove("is-visible"),3200)}let yo=null;const X_=n=>document.querySelector(n);function Y_(){yo=null}function q_(n,t){if(!n||n===yo)return;yo=n;const e=X_("#civilization-legend"),i=t.length,r=new Map([...e.querySelectorAll(".civilization-item")].map(S=>[Number(S.dataset.species),S]));e.replaceChildren();const s=Int16Array.from({length:i},(S,M)=>M),a=S=>{let M=S;for(;s[M]!==M;)M=s[M];for(;s[S]!==S;){const T=s[S];s[S]=M,S=T}return M},o=(S,M)=>{const T=a(S),E=a(M);T!==E&&(s[Math.max(T,E)]=Math.min(T,E))};for(let S=0;S<i;S++)if(!(!n.active[S]||n.ascended[S]))for(let M=S+1;M<i;M++){if(!n.active[M]||n.ascended[M])continue;const T=S*i+M;n.relations[T]>0&&n.relationScores[T]>=.52&&o(S,M)}const c=new Map,l=[],h=[];for(let S=0;S<i;S++){if(!n.active[S]){l.push(S);continue}if(n.ascended[S]){h.push(S);continue}const M=a(S);c.has(M)||c.set(M,[]),c.get(M).push(S)}const d=[...c.values()],m=S=>S.reduce((M,T)=>M+n.counts[T],0),f=(S,M)=>{let T={kind:"neutral",state:0,strength:0};return S.forEach(E=>M.forEach(w=>{const P=E*i+w,_=n.relations[P],x=Math.abs(n.relationScores[P]);_!==0&&x>T.strength&&(T={kind:_<0?"conflict":"friendly",state:_,strength:x})})),T};d.sort((S,M)=>m(M)-m(S));const g=d.length?[d.shift()]:[];for(;d.length;){const S=g[g.length-1];let M=0,T=-1;d.forEach((E,w)=>{const P=f(S,E).strength;P>T&&(T=P,M=w)}),g.push(d.splice(M,1)[0])}const v={conflict:'<svg viewBox="0 0 16 16" aria-hidden="true"><path d="M3 3l10 10M13 3L3 13"/><path d="M2 5l3-3M11 14l3-3"/></svg>',friendly:'<svg viewBox="0 0 16 16" aria-hidden="true"><circle cx="6" cy="8" r="3.5"/><circle cx="10" cy="8" r="3.5"/></svg>',neutral:'<svg viewBox="0 0 16 16" aria-hidden="true"><path d="M2.5 8h3M10.5 8h3"/><circle cx="8" cy="8" r="1.25"/></svg>'},p=S=>S==="conflict"?"冲突":S==="friendly"?"友好":"中立",u=S=>{const M=S.slice().sort((T,E)=>n.counts[E]-n.counts[T])[0];return`#${t[M].color.toString(16).padStart(6,"0")}`},b=g.map((S,M)=>({members:S,number:String(M+1).padStart(2,"0"),accent:u(S)}));if(b.forEach((S,M)=>{const T=document.createElement("section");T.className="faction-block",T.style.setProperty("--faction",S.accent),T.setAttribute("aria-label",`阵营 ${S.number}`);const E=document.createElement("div");E.className="faction-header";const w=document.createElement("span");w.className="faction-identity",w.textContent=S.number,w.setAttribute("aria-hidden","true"),E.appendChild(w);const P=document.createElement("div");P.className="faction-relations";const _={conflict:[],friendly:[],neutral:[]};b.forEach((R,D)=>{if(D===M)return;const N=f(S.members,R.members);_[N.kind].push(R)}),["conflict","friendly","neutral"].forEach(R=>{const D=_[R];if(!D.length)return;const N=document.createElement("span");N.className=`faction-relation is-${R}`;const q=`阵营 ${S.number}${p(R)}：阵营 ${D.map(B=>B.number).join("、")}`;N.setAttribute("role","img"),N.setAttribute("aria-label",q),N.title=q,N.innerHTML=`${v[R]}<span>${D.map(B=>`<b style="--target-faction:${B.accent}">${B.number}</b>`).join("")}</span>`,P.appendChild(N)}),E.appendChild(P),T.appendChild(E);const x=document.createElement("div");x.className="faction-members",S.members.slice().sort((R,D)=>n.counts[D]-n.counts[R]||R-D).forEach(R=>{const D=r.get(R);D&&x.appendChild(D)}),T.appendChild(x),e.appendChild(T)}),h.length){const S=document.createElement("section");S.className="faction-block is-transcendent",S.setAttribute("aria-label","升维种群"),S.innerHTML='<div class="faction-header"><span class="faction-identity" aria-hidden="true">◇</span></div>';const M=document.createElement("div");M.className="faction-members",h.forEach(T=>{const E=r.get(T);E&&M.appendChild(E)}),S.appendChild(M),e.appendChild(S)}if(l.length){const S=document.createElement("div");S.className="faction-inactive",l.forEach(M=>{const T=r.get(M);T&&S.appendChild(T)}),e.appendChild(S)}}const Ft=n=>document.querySelector(n),Wo=Ft("#universe"),$n=window.matchMedia("(prefers-reduced-motion: reduce)").matches,Tn=new Yg({canvas:Wo,antialias:!0,alpha:!1,powerPreference:"high-performance"});Tn.setPixelRatio(Math.min(devicePixelRatio,2));Tn.setSize(innerWidth,innerHeight);Tn.setClearColor(328968,1);Tn.outputColorSpace=De;Tn.toneMapping=yc;Tn.toneMappingExposure=1.15;const Hs=new Ku;Hs.fog=new Oo(328968,.018);const gn=new en(42,innerWidth/innerHeight,.1,200);gn.position.set(0,.5,32);const an=new $g(gn,Wo);an.enableDamping=!0;an.dampingFactor=.045;an.enablePan=!1;an.minDistance=8;an.maxDistance=46;an.autoRotate=!1;an.enabled=!1;let Se=new ze,Ae=new ze,Mn=new ze,Zn=new ze,Si=new ze,vi=new ze,ti=new ze;Hs.add(Se,Ae,Mn,Zn,Si,vi,ti);let Ut=null,on="generator",Be=null,Zi=new Bt(0,0),xs=new Bt(0,0),So=new lf;So.params.Points.threshold=.12;let wr=null,Rr=[],Ve=[],di=[],Cr=null,Ls=[],Eo=null,gr=null,bo=null,To=null,Xi=null,Ts=null,sh=[],Pr=null,Ji=null,Mr=null,ah=null,oh=null,Is=null,lh=null,ch=null,Ao=null,tn=null,Yn=null,Ee=0,En=!1,hh=1,mc=performance.now(),Ei=[];function pi(n){n.traverse(t=>{t.geometry&&t.geometry.dispose(),t.material&&(Array.isArray(t.material)?t.material:[t.material]).forEach(i=>i.dispose())}),n.clear()}function uh(){pi(Se);const n=bn(Ut.seed),t=Math.min(10500,Math.floor(5200+Ut.stars*900)),e=new Float32Array(t*3),i=new Float32Array(t*3),r=new Float32Array(t),s=new kt().setHSL(Ut.hue,.55,.66),a=new kt(16767402);for(let f=0;f<t;f++){const g=Math.pow(n(),.56)*9.2,v=n()*Math.PI*2,p=Math.acos(2*n()-1),u=Math.sin(v*Ut.armCount+g)*.48;e[f*3]=g*Math.sin(p)*Math.cos(v)+u,e[f*3+1]=g*Math.cos(p)*.82,e[f*3+2]=g*Math.sin(p)*Math.sin(v);const b=s.clone().lerp(a,Math.pow(n(),2.3)),S=.45+n()*.7;i[f*3]=b.r*S,i[f*3+1]=b.g*S,i[f*3+2]=b.b*S,r[f]=n()}const o=new ae;o.setAttribute("position",new ne(e,3)),o.setAttribute("color",new ne(i,3)),o.setAttribute("aSize",new ne(r,1));const c=new mn({size:.065,map:Ke(),alphaTest:.015,vertexColors:!0,transparent:!0,opacity:.86,depthWrite:!1,blending:Kt}),l=new Sn(o,c);Se.add(l);const h=new zo(9.9,3),d=new Gc(new nf(h),new Kn({color:12175324,transparent:!0,opacity:.032}));Se.add(d);const m=new sn(new ko(10.7,.007,3,220),new Fr({color:14221151,transparent:!0,opacity:.25}));m.rotation.set(1.24,.18,.4),Se.add(m),Se.rotation.set(.15,-.3,-.08),Se.scale.setScalar(.01),Be={type:"birth",start:performance.now(),duration:$n?1:1300}}function fh(){pi(Ae),pi(Mn),pi(Zn),pi(Si),pi(vi),pi(ti),Rr=[],Ve=[],di=[],Cr=null;const n=bn(Ut.seed,91),t=17e3,e=new Float32Array(t*3),i=new Float32Array(t*3);Ao=new Float32Array(t);const r=new kt(16770996),s=new kt().setHSL(Ut.hue,.65,.56),a=th(Ut),o=Math.min(a,Jc(4e10,Ut)),c=Array.from({length:4+Ut.seedValue%3},(v,p)=>({x:Gt(n,-8,8)+p*.35,y:Gt(n,-.6,.6),z:Gt(n,-6,6),spread:Gt(n,1.1,3.1)}));for(let v=0;v<t;v++){let p=0,u=0,b=0;if(Ut.galaxyType===0){const E=n();if(E<.2)p=Jt(n)*3.7,b=Jt(n)*.42,u=Jt(n)*.18;else if(E<.29)p=Jt(n)*1.7,b=Jt(n)*1.7,u=Jt(n)*.65;else{const w=3+Math.pow(n(),.72)*11,_=v%2*Math.PI+(w-3)*.46+Jt(n)*(.12+w*.012),x=Jt(n)*(.18+w*.025);p=Math.cos(_)*w+x,b=Math.sin(_)*w+x,u=Jt(n)*(.12+w*.018)}}else if(Ut.galaxyType===1){const E=7+Ut.seedValue%5,w=Math.pow(n(),.68)*14,P=v%E,_=P/E*Math.PI*2+w*.31+Jt(n)*(.26+w*.018),x=1+Math.sin(w*2.7+P*1.9)*.11;p=Math.cos(_)*w*x+Jt(n)*.25,b=Math.sin(_)*w*x+Jt(n)*.25,u=Jt(n)*(.18+w*.028)}else if(Ut.galaxyType===2){const E=n(),w=n()*Math.PI*2;let P;E<.72?P=8.4+Jt(n)*.78:E<.9?P=Math.abs(Jt(n))*2.1:P=4+n()*8,p=Math.cos(w)*P*1.15+Jt(n)*.13,b=Math.sin(w)*P+Jt(n)*.13,u=Jt(n)*(.18+P*.012)}else if(Ut.galaxyType===3){const E=Math.pow(n(),.38);p=Jt(n)*5.5*E,u=Jt(n)*2.35*E,b=Jt(n)*3.75*E;const w=Math.hypot(p,u,b);if(w>13.5){const P=13.5/w;p*=P,u*=P,b*=P}}else if(n()<.13){const E=Gt(n,-12,12);p=E,b=Math.sin(E*.24)*2.7+Jt(n)*.7,u=Jt(n)*.55}else{const E=c[Math.floor(n()*c.length)];p=E.x+Jt(n)*E.spread,u=E.y+Jt(n)*E.spread*.38,b=E.z+Jt(n)*E.spread*.72}e[v*3]=p,e[v*3+1]=u,e[v*3+2]=b;const S=Math.hypot(p,u,b),M=r.clone().lerp(s,Math.min(1,S/12)),T=.55+n()*.85;i[v*3]=M.r*T,i[v*3+1]=M.g*T,i[v*3+2]=M.b*T,Ao[v]=o+Math.pow(n(),1.9)*(a-o)}lh=e.slice(),ch=i.slice();const l=new ae;l.setAttribute("position",new ne(e,3)),l.setAttribute("color",new ne(i,3));const h=new Sn(l,new mn({size:.09,map:Ke(),alphaTest:.015,vertexColors:!0,transparent:!0,opacity:.9,depthWrite:!1,blending:Kt}));Ae.add(h),wr=h;const m=[{scale:4.3,opacity:.32},{scale:3.25,opacity:.22},{scale:1.55,opacity:.055},{scale:6.4,opacity:.46},{scale:1.2,opacity:.035}][Ut.galaxyType],f=new ve(new ge({map:nn(),color:16768164,transparent:!0,opacity:0,depthWrite:!1,blending:Kt}));if(f.scale.set(m.scale,m.scale,1),f.userData.isCoreGlow=!0,f.userData.profile=m,Ae.add(f),Ut.activeNucleus){const v=new ve(new ge({map:nn(),color:14281983,transparent:!0,opacity:0,depthWrite:!1,blending:Kt}));v.scale.set(.72,.72,1),v.userData.isAgnGlow=!0,Ae.add(v);const p=new ae().setFromPoints([new F(0,-2.6,0),new F(0,2.6,0)]),u=new Ki(p,new Kn({color:11065599,transparent:!0,opacity:0,depthWrite:!1,blending:Kt}));u.rotation.z=.3,u.userData.isAgnJet=!0,Ae.add(u)}const g=[.72,.92,.62,.35,.78];Ae.rotation.set(g[Ut.galaxyType],-.25+Ut.galaxyType*.06,.06),Ae.visible=!1,$_(e),Z_(),j_(e),O_({universe:Ut,civilizationData:Ve,civilizationSimulation:Cr,cosmicEvents:Ei})}function $_(n){const t=bn(Ut.seed,771);Ls=[];const e=4800,i=new Float32Array(e*3),r=new Float32Array(e*3);gr=new Float32Array(e*3),bo=new Float32Array(e);const s=new kt(16777215),a=new kt(16739624);for(let E=0;E<e;E++){const w=t()*Math.PI*2,P=Gt(t,-1,1),_=Math.sqrt(1-P*P),x=Math.cbrt(t());gr[E*3]=Math.cos(w)*_*x,gr[E*3+1]=P*x,gr[E*3+2]=Math.sin(w)*_*x,bo[E]=At.clamp(1+Jt(t)*.035*Ut.primordialFluctuation,.82,1.18);const R=s.clone().lerp(a,Math.pow(t(),.7));r[E*3]=R.r,r[E*3+1]=R.g,r[E*3+2]=R.b}const o=new ae;o.setAttribute("position",new ne(i,3)),o.setAttribute("color",new ne(r,3)),Eo=new Sn(o,new mn({size:.24,map:Ke(),alphaTest:.012,vertexColors:!0,transparent:!0,opacity:1,depthWrite:!1,blending:Kt})),Mn.add(Eo);const c=340,l=new Float32Array(c*6);Xi=new Float32Array(c*4);for(let E=0;E<c;E++){const w=t()*Math.PI*2,P=Math.acos(2*t()-1);Xi[E*4]=Math.sin(P)*Math.cos(w),Xi[E*4+1]=Math.cos(P),Xi[E*4+2]=Math.sin(P)*Math.sin(w),Xi[E*4+3]=.45+t()*.75}const h=new ae;h.setAttribute("position",new ne(l,3)),To=new Gc(h,new Kn({color:16762253,transparent:!0,opacity:.8,blending:Kt,depthWrite:!1})),Mn.add(To),Ts=new ve(new ge({map:nn(),color:16777215,transparent:!0,opacity:1,depthTest:!1,depthWrite:!1,blending:Kt})),Ts.scale.setScalar(.2),Mn.add(Ts),sh=[16774367,16751444,8962047].map((E,w)=>{const P=new ve(new ge({map:Mo(),color:E,transparent:!0,opacity:0,depthTest:!1,depthWrite:!1,blending:Kt}));return P.userData.offset=w*.13,Mn.add(P),P});const d=1350,m=new Float32Array(d*3),f=new Float32Array(d*3);tn=new Float32Array(d*3),Yn={axes:new Float32Array(d*3),orbitRates:new Float32Array(d),escapeAt:new Float32Array(d),speeds:new Float32Array(d),fates:new Uint8Array(d)};const g=At.clamp((Ut.gravity-.5)*6+(Ut.galaxyType===3?4:0),0,12);for(let E=0;E<d;E++){const P=Math.floor(t()*n.length/3)*3,_=n[P],x=n[P+1],R=n[P+2];m[E*3]=tn[E*3]=_,m[E*3+1]=tn[E*3+1]=x,m[E*3+2]=tn[E*3+2]=R;const D=Ut.galaxyType<=2;let N=D?Jt(t)*.035:Jt(t),q=D?1:Jt(t),B=D?Jt(t)*.035:Jt(t);const V=Math.max(.001,Math.hypot(N,q,B));N/=V,q/=V,B/=V,Yn.axes.set([N,q,B],E*3);const Y=D?t()<.94?1:-1:t()<.5?1:-1,z=Math.max(.8,Math.hypot(_,x,R));Yn.orbitRates[E]=Y*Gt(t,.008,.018)/Math.sqrt(z*.22);const I=t(),G=I<.82?0:I<.92?1:I<.99?2:3;Yn.fates[E]=G,Yn.escapeAt[E]=G===1?1001:(G===3?704:G===2?724:710)+g+Math.pow(t(),.68)*(G===3?28:92),Yn.speeds[E]=G===3?Gt(t,1.7,2.6):Gt(t,.55,1.05);const Q=new kt(t()>.28?10204889:9125426);f[E*3]=Q.r,f[E*3+1]=Q.g,f[E*3+2]=Q.b}const v=new ae;v.setAttribute("position",new ne(m,3)),v.setAttribute("color",new ne(f,3)),Is=new Sn(v,new mn({size:.12,map:Ke(),alphaTest:.012,vertexColors:!0,transparent:!0,opacity:0,depthWrite:!1,blending:Kt})),Zn.add(Is),Zn.rotation.copy(Ae.rotation);const p=Ut.hasCentralBlackHole?9:6;for(let E=0;E<p;E++){const w=E===0&&Ut.hasCentralBlackHole,P=w?.9:Gt(t,.3,.5),_=nh({color:w?16763286:t()>.35?16758652:12179455,tilt:Gt(t,-.38,.38),phase:t()*Math.PI*2,visualScale:w?1.14:1,intensity:0}),x=new ve(new ge({map:nn(),color:7315404,transparent:!0,opacity:0,depthWrite:!1,blending:Kt}));x.scale.set(1.2,1.2,1);const R=new ve(new ge({map:nn(),color:15267071,transparent:!0,opacity:0,depthWrite:!1,blending:Kt}));if(R.scale.set(.2,.2,1),_.add(x,R),w)_.position.set(0,0,0);else{const D=Math.floor(t()*n.length/3)*3;_.position.set(n[D],n[D+1],n[D+2])}_.scale.setScalar(P),_.visible=!1,Object.assign(_.userData,{baseScale:P,birthAt:825+t()*34,evaporationAt:w?949:880+Math.pow(t(),.46)*64,hawkingGlow:x,finalPulse:R,spinDirection:t()<.5?-1:1}),Ls.push(_),Zn.add(_)}const u=260,b=new Float32Array(u*3),S=new Float32Array(u*3);for(let E=0;E<u;E++){const w=t()*Math.PI*2,P=Math.acos(2*t()-1),_=4+Math.pow(t(),1/3)*24;b[E*3]=Math.sin(P)*Math.cos(w)*_,b[E*3+1]=Math.cos(P)*_,b[E*3+2]=Math.sin(P)*Math.sin(w)*_;const x=new kt().setHSL(.56+t()*.1,.28,.46+t()*.22);S[E*3]=x.r,S[E*3+1]=x.g,S[E*3+2]=x.b}const M=new ae;M.setAttribute("position",new ne(b,3)),M.setAttribute("color",new ne(S,3)),ah=b.slice(),oh=S.slice(),Pr=new Sn(M,new mn({size:.11,map:Ke(),alphaTest:.01,vertexColors:!0,transparent:!0,opacity:0,depthWrite:!1,blending:Kt})),Si.add(Pr);const T=Ut.cosmicFate.type==="vacuum-decay"?13019135:Ut.cosmicFate.type==="big-rip"?8440063:16744543;Ji=new sn(new Os(1,40,24),new Fr({color:T,transparent:!0,opacity:0,wireframe:!0,depthWrite:!1,blending:Kt})),Ji.position.set(4.2,-1.4,2.6),Mr=new ve(new ge({map:nn(),color:T,transparent:!0,opacity:0,depthTest:!1,depthWrite:!1,blending:Kt})),Mr.scale.set(.2,.2,1),vi.add(Ji,Mr),vi.rotation.copy(Ae.rotation),Mn.visible=!1,Zn.visible=!1,Si.visible=!1,vi.visible=!1}function j_(n){const t=bn(Ut.seed,1447);Ei=[];const e=Ut.hasCentralBlackHole?{type:"quasar-awakening",visual:"pulsar",label:"类星体短暂苏醒",message:"中心黑洞吸积率骤升，相对论喷流穿过星系核",preferCenter:!0,start:480+t()*16,duration:30,color:"#8dd9ff"}:{type:"magnetar-flare",visual:"pulsar",label:"磁星巨型耀斑",message:"磁壳重排释放高能辐射，脉冲扫过邻近恒星系",start:480+t()*16,duration:26,color:"#7dcaff"},i=[{type:"pair-instability-supernova",visual:"supernova",label:"成对不稳定超新星",message:"第一代巨星被完全撕碎，重元素云向外扩散",start:258+t()*18,duration:28,color:"#ffb36b"},{type:"young-pulsar-birth",visual:"pulsar",label:"年轻脉冲星诞生",message:"新生中子星高速自转，双极束流开始扫掠星际介质",start:302+t()*18,duration:27,color:"#68c8ff"},{type:"type-ia-supernova",visual:"supernova",label:"Ia 型超新星爆发",message:"白矮星发生热核失控，将铁族元素抛入星际空间",start:368+t()*22,duration:25,color:"#ffd08a"},{type:"gamma-ray-burst",visual:"pulsar",label:"长伽马射线暴",message:"垂死巨星坍缩，狭窄高能喷流贯穿恒星外层",start:420+t()*20,duration:24,color:"#89b9ff"},e,{type:"core-collapse-supernova",visual:"supernova",label:"核坍缩超新星",message:"恒星核心坍缩，冲击波把新合成元素送入星际云",start:518+t()*20,duration:27,color:"#ff875c"},{type:"pulsar-glitch",visual:"pulsar",label:"脉冲星自转突变",message:"中子星内部角动量重分配，脉冲节律突然跃迁",start:548+t()*18,duration:22,color:"#8ba8ff"},{type:"superluminous-supernova",visual:"supernova",label:"超亮超新星",message:"磁星引擎持续注入能量，爆发亮度超过普通超新星",start:552+t()*16,duration:26,color:"#ff6b52"},{type:"stellar-black-hole-merger",visual:"black-hole-merger",label:"双黑洞合并",message:"时空啁啾达到峰值，引力波波前穿过局部星域（形变已视觉放大）",preferCenter:!0,start:616+t()*18,duration:38,persistUntil:Math.min(845,Ut.cosmicFate.onsetAt||845),color:"#c897ff",gasRich:t()<.38,radiatedMassFraction:Gt(t,.035,.058),recoilKms:Math.round(Gt(t,180,1180))},{type:"late-black-hole-merger",visual:"black-hole-merger",label:"孤立黑洞捕获合并",message:"漫长引力散射后完成并合，残余黑洞在阻尼振铃中反冲",preferCenter:!0,start:872+t()*18,duration:42,persistUntil:950,color:"#9bb8ff",gasRich:!1,radiatedMassFraction:Gt(t,.028,.052),recoilKms:Math.round(Gt(t,420,1640))}].filter(c=>c.type!=="late-black-hole-merger"||Ut.cosmicFate.type==="heat-death"||Ut.cosmicFate.outcomeExponent>45),r={"pair-instability-supernova":{radius:.55,maxStars:5,sourceDim:.02,neighborDim:.96,kick:.018,civilization:.08,range:2.4},"young-pulsar-birth":{radius:.42,maxStars:2,sourceDim:.12,neighborDim:.99,kick:.01,civilization:.035,range:1.8,directional:!0,beamAngle:.12},"type-ia-supernova":{radius:.48,maxStars:4,sourceDim:.02,neighborDim:.97,kick:.012,civilization:.06,range:2.1},"gamma-ray-burst":{radius:7.5,maxStars:46,sourceDim:.025,neighborDim:.82,kick:0,civilization:.42,range:12,maxSpecies:1,directional:!0,beamAngle:.1},"quasar-awakening":{radius:8.5,maxStars:60,sourceDim:.95,neighborDim:.96,kick:0,civilization:.16,range:14,maxSpecies:2,directional:!0,beamAngle:.16},"magnetar-flare":{radius:1.1,maxStars:8,sourceDim:.82,neighborDim:.94,kick:0,civilization:.12,range:3.2,maxSpecies:1},"core-collapse-supernova":{radius:.5,maxStars:4,sourceDim:.025,neighborDim:.97,kick:.014,civilization:.06,range:2.2},"pulsar-glitch":{radius:.01,maxStars:1,sourceDim:.985,neighborDim:1,kick:0,civilization:0,range:0,maxSpecies:0},"superluminous-supernova":{radius:.62,maxStars:6,sourceDim:.02,neighborDim:.95,kick:.02,civilization:.09,range:2.8,maxSpecies:1},"stellar-black-hole-merger":{radius:.08,maxStars:1,sourceDim:.06,neighborDim:1,kick:0,civilization:0,range:0,maxSpecies:0},"late-black-hole-merger":{radius:.08,maxStars:1,sourceDim:.04,neighborDim:1,kick:0,civilization:0,range:0,maxSpecies:0}},s=(c=!1)=>{let l=Math.floor(t()*n.length/3);const h=c?2.8:6.2;for(let d=0;d<140;d++){const m=Math.floor(t()*n.length/3),f=m*3;if(Math.hypot(n[f],n[f+1],n[f+2])<h){l=m;break}}return{index:l,position:new F(n[l*3],n[l*3+1],n[l*3+2])}},a=(c,l)=>{const h=r[c.type],d=c.visual==="supernova"?.08:c.visual==="pulsar"?.46:.68,m=c.start+c.duration*d,f=[];for(let T=0;T<n.length/3;T++){const E=T*3,w=Math.hypot(n[E]-l.position.x,n[E+1]-l.position.y,n[E+2]-l.position.z);if(!(w>h.radius)){if(h.directional&&c.beamDirection){const P=new F(n[E]-l.position.x,n[E+1]-l.position.y,n[E+2]-l.position.z).normalize();if(Math.abs(P.dot(c.beamDirection))<Math.cos(h.beamAngle))continue}f.push({index:T,distance:w})}}f.sort((T,E)=>T.distance-E.distance);const g=f.slice(0,h.maxStars).map(({index:T,distance:E},w)=>{const P=T*3,_=1-Math.min(1,E/h.radius);let x=n[P]-l.position.x,R=n[P+1]-l.position.y,D=n[P+2]-l.position.z;const N=Math.hypot(x,R,D);if(N<.001){const B=t()*Math.PI*2,V=t()*2-1,Y=Math.sqrt(1-V*V);x=Math.cos(B)*Y,R=V,D=Math.sin(B)*Y}else x/=N,R/=N,D/=N;const q=h.kick*(.2+_*.8)*(.72+t()*.5);return{index:T,dimFactor:w===0?h.sourceDim:1-(1-h.neighborDim)*_,kick:[x*q,R*q,D*q]}}),v=Ve.map((T,E)=>({species:T,speciesIndex:E,distance:T.home.distanceTo(l.position)})).filter(({species:T,distance:E})=>{if(!(m>=T.birth&&m<T.extinction&&E<=h.range)||T.highDimensional&&m>=T.ascensionAt)return!1;if(!h.directional||!c.beamDirection)return!0;const w=T.home.clone().sub(l.position).normalize();return Math.abs(w.dot(c.beamDirection))>=Math.cos(h.beamAngle)}).sort((T,E)=>T.distance-E.distance),p=Math.min(h.maxSpecies||1,v.length),u=v.slice(0,p).map(({species:T,speciesIndex:E,distance:w})=>{const P=Math.max(.08,1-w/h.range),_=At.clamp(h.civilization*(.62+P*.48)*(.84+t()*.3),.03,.58),x=Math.floor(T.maxColonies*At.smoothstep(m,T.birth,T.birth+95)),R=x>0&&x<=8&&_>.3&&t()<.42;return{speciesIndex:E,lossFraction:R?1:_,collapse:R}}),b={"pair-instability-supernova":"爆发源完全解体且没有致密残骸","type-ia-supernova":"白矮星被热核爆炸完全摧毁","core-collapse-supernova":"坍缩核心留下中子星或恒星级黑洞","superluminous-supernova":"恒星外层被大规模抛射，中心结局仍不确定"},S=c.visual==="black-hole-merger"?`约 ${(c.radiatedMassFraction*100).toFixed(1)}% 总质量以引力波带走，残余黑洞以约 ${c.recoilKms} km/s 反冲${c.gasRich?"，周围气体受热形成短暂余辉":"；真空环境中没有超新星式爆炸"}`:c.type==="pulsar-glitch"?"自转频率发生微小跃变，没有可见的大规模破坏":c.visual==="pulsar"?`${g.length} 个位于辐射束或近场内的恒星系受到影响`:`${b[c.type]||"爆发源发生结构性改变"}，${Math.max(0,g.length-1)} 个邻近恒星系受冲击`,M=u.length?u.map(T=>{const E=Ve[T.speciesIndex].name;return T.collapse?`${E} 灭绝`:`${E} 仿真疆域损失约 ${Math.round(T.lossFraction*100)}%`}).join("，"):"未波及已知文明";return{impactAt:m,impactPhase:d,starImpacts:g,civilizationImpacts:u,outcome:`${S}；${M}`}},o=(c,l,h)=>{if(c.visual!=="black-hole-merger")return null;const d=c.type==="late-black-hole-merger"?7.2:8.8,m=[];for(let M=0;M<n.length/3;M++){const T=M*3,E=n[T]-l.position.x,w=n[T+1]-l.position.y,P=n[T+2]-l.position.z,_=Math.hypot(E,w,P);_>.12&&_<=d&&m.push({index:M,dx:E,dy:w,dz:P,distance:_})}const f=bn(Ut.seed,9107+h*97),g=Math.min(1800,m.length),v=m.length/Math.max(1,g),p=new Uint16Array(g),u=new Float32Array(g),b=new Float32Array(g*3),S=new Float32Array(g);for(let M=0;M<g;M++){const T=M*v,E=m[Math.min(m.length-1,Math.floor(T+f()*v))],w=1/E.distance,P=E.dx*w;E.dy*w;const _=E.dz*w;let x=-_,R=0,D=P;const N=Math.hypot(x,R,D);N<.04?(x=1,R=0,D=0):(x/=N,R/=N,D/=N),p[M]=E.index,u[M]=E.distance,b.set([x,R,D],M*3),S[M]=Math.cos(Math.atan2(_,P)*2)*(.72+f()*.28)}return{waveRadius:d,indices:p,distances:u,transverse:b,polarities:S}};i.forEach((c,l)=>{const h=new ze,d=s(c.preferCenter);if(h.position.copy(d.position),h.visible=!1,ti.add(h),r[c.type].directional&&(c.beamDirection=new F(Jt(t),Jt(t),Jt(t)).normalize(),h.quaternion.setFromUnitVectors(new F(0,1,0),c.beamDirection)),c.visual==="supernova"){const v=new ve(new ge({map:nn(),color:16777215,transparent:!0,opacity:0,depthWrite:!1,blending:Kt})),p=new ve(new ge({map:nn(),color:16756067,transparent:!0,opacity:0,depthWrite:!1,blending:Kt})),u=new ve(new ge({map:Ke(),color:11458815,transparent:!0,opacity:0,depthWrite:!1,blending:Kt}));u.scale.set(.16,.16,1);const b=620,S=new Float32Array(b*3),M=new Float32Array(b*3),T=new Float32Array(b*3),E=new Float32Array(b),w=new Float32Array(b),P=new kt(16773319),_=new kt(16730930);for(let z=0;z<b;z++){const I=t()*Math.PI*2,G=Math.acos(2*t()-1),Q=1+Math.sin(I*5+G*3)*.18+(t()-.5)*.24,nt=new F(Math.sin(G)*Math.cos(I)*Q,Math.cos(G)*(1.08+t()*.34),Math.sin(G)*Math.sin(I)*Q).normalize();T.set([nt.x,nt.y,nt.z],z*3),E[z]=.38+Math.pow(t(),.48)*1.45+Math.abs(nt.y)*.22,w[z]=Math.pow(t(),2.4)*.22;const Lt=P.clone().lerp(_,Math.pow(t(),.52));M.set([Lt.r,Lt.g,Lt.b],z*3)}const x=new ae;x.setAttribute("position",new ne(S,3)),x.setAttribute("color",new ne(M,3));const R=new Sn(x,new mn({size:.1,map:Ke(),alphaTest:.008,vertexColors:!0,transparent:!0,opacity:0,depthWrite:!1,blending:Kt})),D=280,N=new Float32Array(D*3),q=new Float32Array(D*3),B=new Float32Array(D);for(let z=0;z<D;z++){const I=t()*Math.PI*2,G=2*t()-1,Q=Math.sqrt(1-G*G);q.set([Math.cos(I)*Q,G,Math.sin(I)*Q],z*3),B[z]=t()*Math.PI*2}const V=new ae;V.setAttribute("position",new ne(N,3));const Y=new Sn(V,new mn({color:16766112,size:.072,map:Ke(),alphaTest:.01,transparent:!0,opacity:0,depthWrite:!1,blending:Kt}));h.add(p,v,R,Y,u),h.userData.effect={innerFlash:v,photosphere:p,remnant:u,ejecta:R,ejectaDirections:T,ejectaVelocity:E,ejectaDelay:w,shell:Y,shellDirections:q,shellNoise:B}}else if(c.visual==="pulsar"){const v=new ve(new ge({map:Ke(),color:16055295,transparent:!0,opacity:0,depthWrite:!1,blending:Kt})),p=new ve(new ge({map:nn(),color:4962815,transparent:!0,opacity:0,depthWrite:!1,blending:Kt})),u=new ve(new ge({map:nn(),color:1472184,transparent:!0,opacity:0,depthWrite:!1,blending:Kt,rotation:t()*Math.PI})),b=new ve(new ge({map:nn(),color:13233663,transparent:!0,opacity:0,depthWrite:!1,blending:Kt}));v.scale.set(.18,.18,1),u.scale.set(1.45,.58,1);const S=new ze;S.rotation.z=.58+t()*.32;const M=420,T=new Float32Array(M*3),E=new Float32Array(M*3);for(let R=0;R<M;R++){const D=R%2?1:-1,N=.1+Math.pow(t(),.66)*2.6,q=.012+N*.014,B=t()*Math.PI*2;T[R*3]=Math.cos(B)*q*t(),T[R*3+1]=D*N,T[R*3+2]=Math.sin(B)*q*t();const V=.35+Math.pow(1-N/2.8,.45)*.65;E.set([.38*V,.76*V,V],R*3)}const w=new ae;w.setAttribute("position",new ne(T,3)),w.setAttribute("color",new ne(E,3));const P=new Sn(w,new mn({size:.09,map:Ke(),alphaTest:.008,vertexColors:!0,transparent:!0,opacity:0,depthWrite:!1,blending:Kt}));S.add(P);const _=[];for(let R=0;R<4;R++){const D=[],N=.5+R*.18;for(let B=0;B<=80;B++){const V=B/80*Math.PI*2;D.push(new F(Math.cos(V)*N,Math.sin(V)*N*.34,Math.sin(V*2)*.08))}const q=new Ki(new ae().setFromPoints(D),new Kn({color:7524351,transparent:!0,opacity:0,depthWrite:!1,blending:Kt}));q.rotation.set(t()*Math.PI,t()*Math.PI,t()*Math.PI),_.push(q),S.add(q)}const x=[];for(let R=0;R<8;R++){const D=new ve(new ge({map:Ke(),color:10214911,transparent:!0,opacity:0,depthWrite:!1,blending:Kt}));D.scale.set(.11,.11,1),D.userData.offset=R/8,D.userData.side=R%2?1:-1,x.push(D),S.add(D)}h.add(u,p,b,v,S),h.userData.effect={core:v,halo:p,nebula:u,sweepGlow:b,rotor:S,jets:P,fieldLines:_,knots:x}}else{const v=(nt,Lt)=>{const zt=nh({color:nt,tilt:Gt(t,-.28,.28),phase:t()*Math.PI*2,visualScale:1.08});return zt.userData.spinDirection=Lt,zt},p=new ze;p.rotation.set(.76,.18,.24);const u=v(16759408,1),b=v(10999807,-1),S=v(16767405,1);S.scale.setScalar(1.24),S.visible=!1;const M=nt=>{const Lt=new Float32Array(252),zt=new ae;return zt.setAttribute("position",new ne(Lt,3)),new Ki(zt,new Kn({color:nt,transparent:!0,opacity:0,depthWrite:!1,blending:Kt}))},T=M(16751445),E=M(7979007);p.add(T,E,u,b,S);const w=new ve(new ge({map:nn(),color:c.gasRich?16769717:14478079,transparent:!0,opacity:0,depthTest:!1,depthWrite:!1,blending:Kt})),P=new ve(new ge({map:Mo(),color:16757871,transparent:!0,opacity:0,depthTest:!1,depthWrite:!1,blending:Kt}));P.visible=c.gasRich;const _=[10209535,13810175,7976959].map(nt=>new ve(new ge({map:Mo(),color:nt,transparent:!0,opacity:0,depthTest:!1,depthWrite:!1,blending:Kt}))),x=[];for(let nt=0;nt<6;nt++){const Lt=[];for(let Wt=0;Wt<160;Wt++){const W=Wt/160*Math.PI*2,Z=1+Math.cos(W*2+nt*.7)*.065;Lt.push(new F(Math.cos(W)*Z,Math.sin(W)*Z,Math.sin(W*2+nt)*.055))}const zt=new ef(new ae().setFromPoints(Lt),new Kn({color:nt%3===1?14205951:9422591,transparent:!0,opacity:0,depthTest:!1,depthWrite:!1,blending:Kt}));zt.rotation.set(.34+nt*.47,.2+nt*.39,nt*.76),x.push(zt),h.add(zt)}const R=520,D=new Float32Array(R*3),N=new Float32Array(R*3),q=new Float32Array(R*3),B=new kt(7979007),V=new kt(14732287);for(let nt=0;nt<R;nt++){const Lt=t()*Math.PI*2,zt=Gt(t,-1,1),Wt=Math.sqrt(1-zt*zt);N.set([Math.cos(Lt)*Wt,zt,Math.sin(Lt)*Wt],nt*3);const W=B.clone().lerp(V,t());q.set([W.r,W.g,W.b],nt*3)}const Y=new ae;Y.setAttribute("position",new ne(D,3)),Y.setAttribute("color",new ne(q,3));const z=new Sn(Y,new mn({size:.075,map:Ke(),alphaTest:.008,vertexColors:!0,transparent:!0,opacity:0,depthTest:!1,depthWrite:!1,blending:Kt})),I=new ae;I.setAttribute("position",new ne(new Float32Array(6),3));const G=new Ki(I,new Kn({color:16766122,transparent:!0,opacity:0,depthWrite:!1,blending:Kt})),Q=new F(Jt(t),Jt(t)*.45,Jt(t)).normalize();h.add(z,..._,P,p,w,G),h.userData.effect={orbitalPlane:p,holeA:u,holeB:b,remnantHole:S,trailA:T,trailB:E,mergerGlow:w,gasEcho:P,waveHalos:_,wavefronts:x,waveDust:z,waveDirections:N,recoilTrail:G,recoilVector:Q,gasRich:c.gasRich}}const f=a(c,d),g=o(c,d,l);Ei.push({...c,...f,waveSamples:g,group:h,sourceIndex:d.index,id:`${c.type}-${l}-${Ut.seed}`,label:c.label})}),ti.rotation.copy(Ae.rotation),ti.visible=!1,K_()}function K_(){const n=Ft("#cosmic-event-markers");n.innerHTML="",Ei.forEach(t=>{const e=document.createElement("button");e.type="button",e.className="event-marker",e.style.left=`${t.start/10}%`,e.style.setProperty("--event-color",t.color),e.setAttribute("aria-label",`${t.label}，${Qc(t.start,Ut)}；${t.outcome}`),e.title=t.outcome,e.addEventListener("click",()=>{En=!1,Ft("#toggle-time").textContent="▶";const i=t.visual==="supernova"?.14:t.visual==="black-hole-merger"?.76:.54;Or(t.start+t.duration*i,!0)}),n.appendChild(e)})}function Z_(){Y_();const n=bn(Ut.seed,410),t=Ut.speciesCount,e=tn.length/3,i=Math.min(720,e),r=new Uint16Array(i),s=new Float32Array(i*3),a=e/i;for(let l=0;l<i;l++){const h=Math.min(e-1,Math.floor((l+n()*.86)*a)),d=h*3,m=l*3;r[l]=h,s[m]=tn[d],s[m+1]=tn[d+1],s[m+2]=tn[d+2]}Cr={start:390,end:Ut.cosmicFate.type==="heat-death"?710:1e3,step:1,habitatRemnantIndices:r,habitatPositions:s,adjacency:[],snapshots:[]};const o=[],c=Ft("#civilization-legend");c.innerHTML="";for(let l=0;l<t;l++){let h=Math.floor(n()*i),d=-1;for(let D=0;D<96;D++){const N=Math.floor(n()*i),q=N*3;let B=1/0;o.forEach(V=>{const Y=V*3;B=Math.min(B,Math.hypot(s[q]-s[Y],s[q+1]-s[Y+1],s[q+2]-s[Y+2]))}),B>d&&(d=B,h=N)}o.push(h);const m=r[h],f=m*3,g=new F(tn[f],tn[f+1],tn[f+2]),v=lc[l%lc.length],p=new ae;p.setAttribute("position",new ne(new Float32Array(i*3),3)),p.setDrawRange(0,0);const u=new mn({color:v,size:.24,map:Ke(),alphaTest:.012,transparent:!0,opacity:.98,depthWrite:!1,blending:Kt}),b=new Sn(p,u);Ae.add(b),Rr.push(b);const S=n(),M=n(),T=Gt(n,.72,1.36),E=Gt(n,.68,1.32),w=t===1?0:l/(t-1),P=404+Math.round(w*72+n()*11),_=n()<.01,x=_?P+Math.round(Gt(n,130,205)):1/0;Ve.push({name:oc[(Ut.seedValue+l)%oc.length],color:v,home:g,homeNodeIndex:h,homeRemnantIndex:m,homeOffset:new F,hostRemnantIndices:new Uint16Array(i),hostOffsets:new Float32Array(i*3),displayCount:0,maxColonies:i,birth:P,highDimensional:_,ascensionAt:x,extinction:_?1001:Ut.cosmicFate.type==="heat-death"?710:1e3,aggression:S,cooperation:M,expansionRate:T,resilience:E});const R=`#${v.toString(16).padStart(6,"0")}`;c.insertAdjacentHTML("beforeend",`<div class="civilization-item" style="--species:${R}" data-species="${l}"><i></i><span>${Ve[l].name}</span><b>未诞生</b></div>`)}}function dh(){if(on!=="generator")return;Ut=eh(),rh(Ut),uh(),fh(),Ft(".universe-data").scrollTop=0;const n=Ft("#creation-flash");n.classList.remove("is-flashing"),n.offsetWidth,n.classList.add("is-flashing"),document.querySelectorAll(".metric").forEach(t=>{t.style.animation="none",t.offsetWidth,t.style.animation=""})}function J_(){on==="generator"&&(on="explorer",document.body.classList.add("is-exploring"),Ft("#generator-view").classList.remove("is-active"),Ft("#explorer-view").classList.add("is-active"),Ft("#mode-label").textContent="深空航行中",Ft("#regenerate-top").style.opacity="0",Ft("#regenerate-top").style.pointerEvents="none",Ft("#civilization-panel").classList.remove("is-expanded"),Ft("#toggle-civilizations").setAttribute("aria-expanded","false"),Ae.visible=!0,Ae.scale.setScalar(.02),an.enabled=!0,an.target.set(0,0,0),Ee=0,Ft("#cosmic-timeline").value=Ee,Or(Ee,!0),En=!0,Ft("#toggle-time").textContent="Ⅱ",Ft("#toggle-time").setAttribute("aria-label","暂停时间"),Be={type:"enter",start:performance.now(),duration:$n?1:2100})}function Q_(){on==="explorer"&&(on="generator",document.body.classList.remove("is-exploring"),Ft("#explorer-view").classList.remove("is-active"),Ft("#generator-view").classList.add("is-active"),Ft("#star-inspector").classList.remove("is-open"),Ft("#civilization-panel").classList.remove("is-expanded"),Ft("#toggle-civilizations").setAttribute("aria-expanded","false"),Ft("#mode-label").textContent="创世引擎在线",Ft("#regenerate-top").style.opacity="",Ft("#regenerate-top").style.pointerEvents="",En=!1,Ft("#toggle-time").textContent="▶",Ft("#toggle-time").setAttribute("aria-label","播放时间"),an.enabled=!1,Mn.visible=!1,Zn.visible=!1,Si.visible=!1,ti.visible=!1,Be={type:"leave",start:performance.now(),duration:$n?1:1300})}function gc(n){return n===1?1:1-Math.pow(2,-10*n)}function _c(n){return n<.5?4*n*n*n:1-Math.pow(-2*n+2,3)/2}function t0(n){if(!Be)return;const t=Math.min(1,(n-Be.start)/Be.duration);if(Be.type==="birth"){const e=gc(t);Se.scale.setScalar(e),Se.rotation.y=-.3+(1-e)*1.5}if(Be.type==="enter"){const e=_c(t);Se.scale.setScalar(Math.max(.001,1-e*1.5)),Se.rotation.z+=.018*(1-t),Ae.scale.setScalar(.02+gc(t)*.98),gn.position.z=32-e*12,gn.position.y=.5+e*4.2}if(Be.type==="leave"){const e=_c(t);Ae.scale.setScalar(1-e*.96),Se.scale.setScalar(e),gn.position.z=20+e*12,gn.position.y=4.7-e*4.2}t===1&&(Be.type==="enter"&&(Se.visible=!1),Be.type==="leave"&&(Ae.visible=!1,Se.visible=!0,Se.scale.setScalar(1)),Be=null)}function e0(n){if(on!=="explorer"||Be||!wr||Ee<250||Ee>750)return;Zi.x=n.clientX/innerWidth*2-1,Zi.y=-(n.clientY/innerHeight)*2+1,So.setFromCamera(Zi,gn);const t=So.intersectObject(wr);if(!t.length)return;const e=t[0].index,i=bn(Ut.seed,e*31),r=["M4 V","K1 III","G2 V","F8 V","A3 V","B1 Ia"],s=r[Math.floor(i()*r.length)],o={M:[2400,3700],K:[3700,5200],G:[5200,6e3],F:[6e3,7500],A:[7500,1e4],B:[1e4,3e4]}[s[0]],c=Math.round(Gt(i,o[0],o[1])),l=Math.floor(i()*13),h=i()<Ut.lifeProbability?"候选信号":"未检出";Ft("#star-name").textContent=`RU-${String(e).padStart(5,"0")}`,Ft("#star-type").textContent=s,Ft("#star-temp").textContent=`${new Intl.NumberFormat("zh-CN").format(c)} K`,Ft("#star-planets").textContent=l,Ft("#star-life").textContent=h,Ft("#star-life").style.color=h==="候选信号"?"var(--accent)":"",Ft("#star-inspector").classList.add("is-open")}function n0(n){Ee+=n*S_(Ee)*hh}function i0(){if(on!=="explorer")return;const n=Ft("#civilization-panel"),t=!n.classList.contains("is-expanded");n.classList.toggle("is-expanded",t),Ft("#toggle-civilizations").setAttribute("aria-expanded",String(t))}function xc(){return{mode:on,epochEffectsGroup:Mn,primordialParticles:Eo,primordialFactors:bo,primordialDirections:gr,expansionStreaks:To,expansionDirections:Xi,bangCore:Ts,shockwaves:sh,renderer:Tn,scene:Hs,clickableStars:wr,originalGalaxyPositions:lh,universe:Ut,transition:Be,galaxyGroup:Ae,starDeathThresholds:Ao,originalGalaxyColors:ch,cosmicEvents:Ei,remnantGroup:Zn,stellarRemnants:Is,originalRemnantPositions:tn,remnantDynamics:Yn,blackHoleRemnants:Ls,heatDeathGroup:Si,coldPhotons:Pr,originalPhotonPositions:ah,originalPhotonColors:oh,cosmicFateGroup:vi,fateBubble:Ji,fateGlow:Mr,cosmicEventGroup:ti}}function r0(n){const t=Ut.cosmicFate.type==="heat-death"?0:At.smoothstep(Ee,Ut.cosmicFate.onsetAt,995);n.forEach((e,i)=>{const r=Rr[i],s=Ve[i];r.visible=e.alive&&e.count>0,r.material.opacity=(e.ascended?.88:.98)*(1-t),r.material.size=e.ascended?.31:.24,r.material.color.setHex(e.ascended?15325183:s.color)})}function Or(n,t=!1){const e=y_(n,Ut,o_(Ut));if(Ee=e.position,G_(e),!wr)return;U_(Ee,xc());const i=B_(Cr,Ee);L_(i,{civilizationSimulation:Cr,civilizationData:Ve,civilizationGroups:Rr}),I_({stellarRemnants:Is,remnantDynamics:Yn,cosmicPosition:Ee,civilizationData:Ve,civilizationGroups:Rr}),di=k_(Ee,i,Ve,Ei),r0(di),V_({position:Ee,simulationState:i,runtimeState:di,civilizationData:Ve}),q_(i,Ve);const r=di.filter(l=>l.alive).length,s=di.filter(l=>l.ascended).length,a=H_(i,di,Ve.length),o=F_(Ee,xc()),c=E_({position:Ee,label:e.label,universe:Ut,activeEvent:o,activeRelationship:a,ascendedSpecies:s,activeSpecies:r,civilizationData:Ve});W_(c,t)}function ph(n){requestAnimationFrame(ph);const t=Math.min(.05,(n-mc)/1e3);if(mc=n,t0(n),xs.lerp(Zi,.04),on==="generator"&&Se.visible&&!$n&&(Se.rotation.y+=45e-5,Se.rotation.x=.15+xs.y*.045,Se.position.x=xs.x*.42,Se.position.y=xs.y*.25),on==="explorer"){En&&!Be&&(n0(t),Ee>=1e3&&(Ee=1e3,En=!1,Ft("#toggle-time").textContent="▶",Ft("#toggle-time").setAttribute("aria-label","播放时间")),Or(Ee)),an.update(),Mn.position.set(0,0,0),Si.visible&&!$n&&(Pr.rotation.y+=35e-6,Pr.rotation.x+=9e-6),vi.visible&&!$n&&(Ji.rotation.y+=.0014,Ji.rotation.x-=7e-4,Mr.material.rotation=n*8e-5),$n||Ls.forEach((i,r)=>{i.visible&&(bs(i,n,i.userData.spinDirection||(r%2?-1:1)),i.userData.hawkingGlow.material.rotation=n*(25e-6+r*1e-6))}),N_(n,{cosmicEventGroup:ti,prefersReducedMotion:$n,cosmicEvents:Ei,camera:gn}),an.enabled||(Ae.rotation.y+=3e-4);const e=n*12e-5;Ft("#coord-x").textContent=`${Math.sin(e)<0?"−":"+"}${Math.abs(Math.sin(e)*9).toFixed(2)}`,Ft("#coord-y").textContent=`${Math.cos(e*.7)<0?"−":"+"}${Math.abs(Math.cos(e*.7)*9).toFixed(2)}`,Ft("#coord-z").textContent=`${Math.sin(e*.3)<0?"−":"+"}${Math.abs(Math.sin(e*.3)*3).toFixed(2)}`}Tn.render(Hs,gn)}window.addEventListener("pointermove",n=>{Zi.x=n.clientX/innerWidth*2-1,Zi.y=-(n.clientY/innerHeight)*2+1;const t=Ft("#cursor");t.style.left=`${n.clientX}px`,t.style.top=`${n.clientY}px`,t.style.opacity="1"});window.addEventListener("resize",()=>{gn.aspect=innerWidth/innerHeight,gn.updateProjectionMatrix(),Tn.setSize(innerWidth,innerHeight),Tn.setPixelRatio(Math.min(devicePixelRatio,2))});Wo.addEventListener("click",e0);Ft("#regenerate-top").addEventListener("click",dh);Ft("#enter-universe").addEventListener("click",J_);Ft("#close-inspector").addEventListener("click",()=>Ft("#star-inspector").classList.remove("is-open"));Ft("#toggle-civilizations").addEventListener("click",i0);Ft("#toggle-time").addEventListener("click",()=>{Ee>=1e3&&Or(0,!0),En=!En,Ft("#toggle-time").textContent=En?"Ⅱ":"▶",Ft("#toggle-time").setAttribute("aria-label",En?"暂停时间":"播放时间")});Ft("#cosmic-timeline").addEventListener("input",n=>{En=!1,Ft("#toggle-time").textContent="▶",Or(n.target.value,!0)});document.querySelectorAll(".speed-controls button").forEach(n=>{n.addEventListener("click",()=>{hh=Number(n.dataset.speed),document.querySelectorAll(".speed-controls button").forEach(t=>{const e=t===n;t.classList.toggle("is-active",e),t.setAttribute("aria-pressed",String(e))})})});document.addEventListener("keydown",n=>{if(n.key.toLowerCase()==="r"&&on==="generator"&&dh(),n.key==="Escape"&&on==="explorer"){const t=Ft("#civilization-panel");t.classList.contains("is-expanded")?(t.classList.remove("is-expanded"),Ft("#toggle-civilizations").setAttribute("aria-expanded","false")):Q_()}});Ut=eh();rh(Ut);uh();fh();ph(performance.now());
