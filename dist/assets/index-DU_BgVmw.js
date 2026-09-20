(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function e(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(s){if(s.ep)return;s.ep=!0;const r=e(s);fetch(s.href,r)}})();const Jo="180",ds={ROTATE:0,DOLLY:1,PAN:2},ls={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Kh=0,yc=1,Zh=2,Vl=1,Jh=2,kn=3,li=0,Je=1,Gn=2,ri=0,Pi=1,Nt=2,Sc=3,Ec=4,Qh=5,bi=100,tu=101,eu=102,nu=103,iu=104,su=200,ru=201,au=202,ou=203,Ka=204,Za=205,cu=206,lu=207,hu=208,uu=209,du=210,fu=211,pu=212,mu=213,gu=214,Ja=0,Qa=1,to=2,_s=3,eo=4,no=5,io=6,so=7,Wl=0,_u=1,xu=2,ai=0,Mu=1,vu=2,yu=3,Xl=4,Su=5,Eu=6,bu=7,Yl=300,xs=301,Ms=302,ro=303,ao=304,ia=306,oo=1e3,wi=1001,co=1002,wn=1003,Tu=1004,or=1005,En=1006,fa=1007,si=1008,Yn=1009,ql=1010,$l=1011,Vs=1012,Qo=1013,Ii=1014,Vn=1015,Zs=1016,tc=1017,ec=1018,Ws=1020,jl=35902,Kl=35899,Zl=1021,Jl=1022,bn=1023,Xs=1026,Ys=1027,Ql=1028,nc=1029,th=1030,ic=1031,sc=1033,Hr=33776,Gr=33777,Vr=33778,Wr=33779,lo=35840,ho=35841,uo=35842,fo=35843,po=36196,mo=37492,go=37496,_o=37808,xo=37809,Mo=37810,vo=37811,yo=37812,So=37813,Eo=37814,bo=37815,To=37816,Ao=37817,wo=37818,Ro=37819,Co=37820,Po=37821,Do=36492,Lo=36494,Io=36495,Uo=36283,Fo=36284,No=36285,Oo=36286,Au=3200,wu=3201,Ru=0,Cu=1,ni="",Ne="srgb",vs="srgb-linear",jr="linear",pe="srgb",Vi=7680,bc=519,Pu=512,Du=513,Lu=514,eh=515,Iu=516,Uu=517,Fu=518,Nu=519,Bo=35044,Tc="300 es",Ln=2e3,Kr=2001;class Oi{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(e)===-1&&i[t].push(e)}hasEventListener(t,e){const i=this._listeners;return i===void 0?!1:i[t]!==void 0&&i[t].indexOf(e)!==-1}removeEventListener(t,e){const i=this._listeners;if(i===void 0)return;const s=i[t];if(s!==void 0){const r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){const e=this._listeners;if(e===void 0)return;const i=e[t.type];if(i!==void 0){t.target=this;const s=i.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,t);t.target=null}}}const Oe=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Ac=1234567;const ks=Math.PI/180,qs=180/Math.PI;function Wn(){const n=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Oe[n&255]+Oe[n>>8&255]+Oe[n>>16&255]+Oe[n>>24&255]+"-"+Oe[t&255]+Oe[t>>8&255]+"-"+Oe[t>>16&15|64]+Oe[t>>24&255]+"-"+Oe[e&63|128]+Oe[e>>8&255]+"-"+Oe[e>>16&255]+Oe[e>>24&255]+Oe[i&255]+Oe[i>>8&255]+Oe[i>>16&255]+Oe[i>>24&255]).toLowerCase()}function Zt(n,t,e){return Math.max(t,Math.min(e,n))}function rc(n,t){return(n%t+t)%t}function Ou(n,t,e,i,s){return i+(n-t)*(s-i)/(e-t)}function Bu(n,t,e){return n!==t?(e-n)/(t-n):0}function Hs(n,t,e){return(1-e)*n+e*t}function zu(n,t,e,i){return Hs(n,t,1-Math.exp(-e*i))}function ku(n,t=1){return t-Math.abs(rc(n,t*2)-t)}function Hu(n,t,e){return n<=t?0:n>=e?1:(n=(n-t)/(e-t),n*n*(3-2*n))}function Gu(n,t,e){return n<=t?0:n>=e?1:(n=(n-t)/(e-t),n*n*n*(n*(n*6-15)+10))}function Vu(n,t){return n+Math.floor(Math.random()*(t-n+1))}function Wu(n,t){return n+Math.random()*(t-n)}function Xu(n){return n*(.5-Math.random())}function Yu(n){n!==void 0&&(Ac=n);let t=Ac+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function qu(n){return n*ks}function $u(n){return n*qs}function ju(n){return(n&n-1)===0&&n!==0}function Ku(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function Zu(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function Ju(n,t,e,i,s){const r=Math.cos,a=Math.sin,o=r(e/2),l=a(e/2),c=r((t+i)/2),d=a((t+i)/2),u=r((t-i)/2),p=a((t-i)/2),g=r((i-t)/2),x=a((i-t)/2);switch(s){case"XYX":n.set(o*d,l*u,l*p,o*c);break;case"YZY":n.set(l*p,o*d,l*u,o*c);break;case"ZXZ":n.set(l*u,l*p,o*d,o*c);break;case"XZX":n.set(o*d,l*x,l*g,o*c);break;case"YXY":n.set(l*g,o*d,l*x,o*c);break;case"ZYZ":n.set(l*x,l*g,o*d,o*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Sn(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function de(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}const nt={DEG2RAD:ks,RAD2DEG:qs,generateUUID:Wn,clamp:Zt,euclideanModulo:rc,mapLinear:Ou,inverseLerp:Bu,lerp:Hs,damp:zu,pingpong:ku,smoothstep:Hu,smootherstep:Gu,randInt:Vu,randFloat:Wu,randFloatSpread:Xu,seededRandom:Yu,degToRad:qu,radToDeg:$u,isPowerOfTwo:ju,ceilPowerOfTwo:Ku,floorPowerOfTwo:Zu,setQuaternionFromProperEuler:Ju,normalize:de,denormalize:Sn};class Vt{constructor(t=0,e=0){Vt.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,i=this.y,s=t.elements;return this.x=s[0]*e+s[3]*i+s[6],this.y=s[1]*e+s[4]*i+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Zt(this.x,t.x,e.x),this.y=Zt(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=Zt(this.x,t,e),this.y=Zt(this.y,t,e),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Zt(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(Zt(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y;return e*e+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const i=Math.cos(e),s=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*i-a*s+t.x,this.y=r*s+a*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class hi{constructor(t=0,e=0,i=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=i,this._w=s}static slerpFlat(t,e,i,s,r,a,o){let l=i[s+0],c=i[s+1],d=i[s+2],u=i[s+3];const p=r[a+0],g=r[a+1],x=r[a+2],v=r[a+3];if(o===0){t[e+0]=l,t[e+1]=c,t[e+2]=d,t[e+3]=u;return}if(o===1){t[e+0]=p,t[e+1]=g,t[e+2]=x,t[e+3]=v;return}if(u!==v||l!==p||c!==g||d!==x){let h=1-o;const f=l*p+c*g+d*x+u*v,m=f>=0?1:-1,_=1-f*f;if(_>Number.EPSILON){const y=Math.sqrt(_),E=Math.atan2(y,f*m);h=Math.sin(h*E)/y,o=Math.sin(o*E)/y}const M=o*m;if(l=l*h+p*M,c=c*h+g*M,d=d*h+x*M,u=u*h+v*M,h===1-o){const y=1/Math.sqrt(l*l+c*c+d*d+u*u);l*=y,c*=y,d*=y,u*=y}}t[e]=l,t[e+1]=c,t[e+2]=d,t[e+3]=u}static multiplyQuaternionsFlat(t,e,i,s,r,a){const o=i[s],l=i[s+1],c=i[s+2],d=i[s+3],u=r[a],p=r[a+1],g=r[a+2],x=r[a+3];return t[e]=o*x+d*u+l*g-c*p,t[e+1]=l*x+d*p+c*u-o*g,t[e+2]=c*x+d*g+o*p-l*u,t[e+3]=d*x-o*u-l*p-c*g,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,i,s){return this._x=t,this._y=e,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const i=t._x,s=t._y,r=t._z,a=t._order,o=Math.cos,l=Math.sin,c=o(i/2),d=o(s/2),u=o(r/2),p=l(i/2),g=l(s/2),x=l(r/2);switch(a){case"XYZ":this._x=p*d*u+c*g*x,this._y=c*g*u-p*d*x,this._z=c*d*x+p*g*u,this._w=c*d*u-p*g*x;break;case"YXZ":this._x=p*d*u+c*g*x,this._y=c*g*u-p*d*x,this._z=c*d*x-p*g*u,this._w=c*d*u+p*g*x;break;case"ZXY":this._x=p*d*u-c*g*x,this._y=c*g*u+p*d*x,this._z=c*d*x+p*g*u,this._w=c*d*u-p*g*x;break;case"ZYX":this._x=p*d*u-c*g*x,this._y=c*g*u+p*d*x,this._z=c*d*x-p*g*u,this._w=c*d*u+p*g*x;break;case"YZX":this._x=p*d*u+c*g*x,this._y=c*g*u+p*d*x,this._z=c*d*x-p*g*u,this._w=c*d*u-p*g*x;break;case"XZY":this._x=p*d*u-c*g*x,this._y=c*g*u-p*d*x,this._z=c*d*x+p*g*u,this._w=c*d*u+p*g*x;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const i=e/2,s=Math.sin(i);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,i=e[0],s=e[4],r=e[8],a=e[1],o=e[5],l=e[9],c=e[2],d=e[6],u=e[10],p=i+o+u;if(p>0){const g=.5/Math.sqrt(p+1);this._w=.25/g,this._x=(d-l)*g,this._y=(r-c)*g,this._z=(a-s)*g}else if(i>o&&i>u){const g=2*Math.sqrt(1+i-o-u);this._w=(d-l)/g,this._x=.25*g,this._y=(s+a)/g,this._z=(r+c)/g}else if(o>u){const g=2*Math.sqrt(1+o-i-u);this._w=(r-c)/g,this._x=(s+a)/g,this._y=.25*g,this._z=(l+d)/g}else{const g=2*Math.sqrt(1+u-i-o);this._w=(a-s)/g,this._x=(r+c)/g,this._y=(l+d)/g,this._z=.25*g}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let i=t.dot(e)+1;return i<1e-8?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Zt(this.dot(t),-1,1)))}rotateTowards(t,e){const i=this.angleTo(t);if(i===0)return this;const s=Math.min(1,e/i);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const i=t._x,s=t._y,r=t._z,a=t._w,o=e._x,l=e._y,c=e._z,d=e._w;return this._x=i*d+a*o+s*c-r*l,this._y=s*d+a*l+r*o-i*c,this._z=r*d+a*c+i*l-s*o,this._w=a*d-i*o-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const i=this._x,s=this._y,r=this._z,a=this._w;let o=a*t._w+i*t._x+s*t._y+r*t._z;if(o<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,o=-o):this.copy(t),o>=1)return this._w=a,this._x=i,this._y=s,this._z=r,this;const l=1-o*o;if(l<=Number.EPSILON){const g=1-e;return this._w=g*a+e*this._w,this._x=g*i+e*this._x,this._y=g*s+e*this._y,this._z=g*r+e*this._z,this.normalize(),this}const c=Math.sqrt(l),d=Math.atan2(c,o),u=Math.sin((1-e)*d)/c,p=Math.sin(e*d)/c;return this._w=a*u+this._w*p,this._x=i*u+this._x*p,this._y=s*u+this._y*p,this._z=r*u+this._z*p,this._onChangeCallback(),this}slerpQuaternions(t,e,i){return this.copy(t).slerp(e,i)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class z{constructor(t=0,e=0,i=0){z.prototype.isVector3=!0,this.x=t,this.y=e,this.z=i}set(t,e,i){return i===void 0&&(i=this.z),this.x=t,this.y=e,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(wc.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(wc.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,i=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*i+r[6]*s,this.y=r[1]*e+r[4]*i+r[7]*s,this.z=r[2]*e+r[5]*i+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,i=this.y,s=this.z,r=t.elements,a=1/(r[3]*e+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*i+r[8]*s+r[12])*a,this.y=(r[1]*e+r[5]*i+r[9]*s+r[13])*a,this.z=(r[2]*e+r[6]*i+r[10]*s+r[14])*a,this}applyQuaternion(t){const e=this.x,i=this.y,s=this.z,r=t.x,a=t.y,o=t.z,l=t.w,c=2*(a*s-o*i),d=2*(o*e-r*s),u=2*(r*i-a*e);return this.x=e+l*c+a*u-o*d,this.y=i+l*d+o*c-r*u,this.z=s+l*u+r*d-a*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,i=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*i+r[8]*s,this.y=r[1]*e+r[5]*i+r[9]*s,this.z=r[2]*e+r[6]*i+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Zt(this.x,t.x,e.x),this.y=Zt(this.y,t.y,e.y),this.z=Zt(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=Zt(this.x,t,e),this.y=Zt(this.y,t,e),this.z=Zt(this.z,t,e),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Zt(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const i=t.x,s=t.y,r=t.z,a=e.x,o=e.y,l=e.z;return this.x=s*l-r*o,this.y=r*a-i*l,this.z=i*o-s*a,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const i=t.dot(this)/e;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return pa.copy(this).projectOnVector(t),this.sub(pa)}reflect(t){return this.sub(pa.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(Zt(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y,s=this.z-t.z;return e*e+i*i+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,i){const s=Math.sin(e)*t;return this.x=s*Math.sin(i),this.y=Math.cos(e)*t,this.z=s*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,i){return this.x=t*Math.sin(e),this.y=i,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=i,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,i=Math.sqrt(1-e*e);return this.x=i*Math.cos(t),this.y=e,this.z=i*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const pa=new z,wc=new hi;class $t{constructor(t,e,i,s,r,a,o,l,c){$t.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,i,s,r,a,o,l,c)}set(t,e,i,s,r,a,o,l,c){const d=this.elements;return d[0]=t,d[1]=s,d[2]=o,d[3]=e,d[4]=r,d[5]=l,d[6]=i,d[7]=a,d[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],this}extractBasis(t,e,i){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,s=e.elements,r=this.elements,a=i[0],o=i[3],l=i[6],c=i[1],d=i[4],u=i[7],p=i[2],g=i[5],x=i[8],v=s[0],h=s[3],f=s[6],m=s[1],_=s[4],M=s[7],y=s[2],E=s[5],C=s[8];return r[0]=a*v+o*m+l*y,r[3]=a*h+o*_+l*E,r[6]=a*f+o*M+l*C,r[1]=c*v+d*m+u*y,r[4]=c*h+d*_+u*E,r[7]=c*f+d*M+u*C,r[2]=p*v+g*m+x*y,r[5]=p*h+g*_+x*E,r[8]=p*f+g*M+x*C,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],d=t[8];return e*a*d-e*o*c-i*r*d+i*o*l+s*r*c-s*a*l}invert(){const t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],d=t[8],u=d*a-o*c,p=o*l-d*r,g=c*r-a*l,x=e*u+i*p+s*g;if(x===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/x;return t[0]=u*v,t[1]=(s*c-d*i)*v,t[2]=(o*i-s*a)*v,t[3]=p*v,t[4]=(d*e-s*l)*v,t[5]=(s*r-o*e)*v,t[6]=g*v,t[7]=(i*l-c*e)*v,t[8]=(a*e-i*r)*v,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,i,s,r,a,o){const l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*a+c*o)+a+t,-s*c,s*l,-s*(-c*a+l*o)+o+e,0,0,1),this}scale(t,e){return this.premultiply(ma.makeScale(t,e)),this}rotate(t){return this.premultiply(ma.makeRotation(-t)),this}translate(t,e){return this.premultiply(ma.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,i,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,i=t.elements;for(let s=0;s<9;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<9;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const ma=new $t;function nh(n){for(let t=n.length-1;t>=0;--t)if(n[t]>=65535)return!0;return!1}function Zr(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function Qu(){const n=Zr("canvas");return n.style.display="block",n}const Rc={};function $s(n){n in Rc||(Rc[n]=!0,console.warn(n))}function td(n,t,e){return new Promise(function(i,s){function r(){switch(n.clientWaitSync(t,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:i()}}setTimeout(r,e)})}const Cc=new $t().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Pc=new $t().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function ed(){const n={enabled:!0,workingColorSpace:vs,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===pe&&(s.r=Xn(s.r),s.g=Xn(s.g),s.b=Xn(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===pe&&(s.r=fs(s.r),s.g=fs(s.g),s.b=fs(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===ni?jr:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return $s("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),n.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return $s("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),n.colorSpaceToWorking(s,r)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[vs]:{primaries:t,whitePoint:i,transfer:jr,toXYZ:Cc,fromXYZ:Pc,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:Ne},outputColorSpaceConfig:{drawingBufferColorSpace:Ne}},[Ne]:{primaries:t,whitePoint:i,transfer:pe,toXYZ:Cc,fromXYZ:Pc,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:Ne}}}),n}const he=ed();function Xn(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function fs(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let Wi;class nd{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let i;if(t instanceof HTMLCanvasElement)i=t;else{Wi===void 0&&(Wi=Zr("canvas")),Wi.width=t.width,Wi.height=t.height;const s=Wi.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),i=Wi}return i.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=Zr("canvas");e.width=t.width,e.height=t.height;const i=e.getContext("2d");i.drawImage(t,0,0,t.width,t.height);const s=i.getImageData(0,0,t.width,t.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=Xn(r[a]/255)*255;return i.putImageData(s,0,0),e}else if(t.data){const e=t.data.slice(0);for(let i=0;i<e.length;i++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[i]=Math.floor(Xn(e[i]/255)*255):e[i]=Xn(e[i]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let id=0;class ac{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:id++}),this.uuid=Wn(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):e instanceof VideoFrame?t.set(e.displayHeight,e.displayWidth,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(ga(s[a].image)):r.push(ga(s[a]))}else r=ga(s);i.url=r}return e||(t.images[this.uuid]=i),i}}function ga(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?nd.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let sd=0;const _a=new z;class qe extends Oi{constructor(t=qe.DEFAULT_IMAGE,e=qe.DEFAULT_MAPPING,i=wi,s=wi,r=En,a=si,o=bn,l=Yn,c=qe.DEFAULT_ANISOTROPY,d=ni){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:sd++}),this.uuid=Wn(),this.name="",this.source=new ac(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Vt(0,0),this.repeat=new Vt(1,1),this.center=new Vt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new $t,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=d,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(_a).x}get height(){return this.source.getSize(_a).y}get depth(){return this.source.getSize(_a).z}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const e in t){const i=t[e];if(i===void 0){console.warn(`THREE.Texture.setValues(): parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){console.warn(`THREE.Texture.setValues(): property '${e}' does not exist.`);continue}s&&i&&s.isVector2&&i.isVector2||s&&i&&s.isVector3&&i.isVector3||s&&i&&s.isMatrix3&&i.isMatrix3?s.copy(i):this[e]=i}}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),e||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Yl)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case oo:t.x=t.x-Math.floor(t.x);break;case wi:t.x=t.x<0?0:1;break;case co:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case oo:t.y=t.y-Math.floor(t.y);break;case wi:t.y=t.y<0?0:1;break;case co:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}qe.DEFAULT_IMAGE=null;qe.DEFAULT_MAPPING=Yl;qe.DEFAULT_ANISOTROPY=1;class be{constructor(t=0,e=0,i=0,s=1){be.prototype.isVector4=!0,this.x=t,this.y=e,this.z=i,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,i,s){return this.x=t,this.y=e,this.z=i,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,i=this.y,s=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*i+a[8]*s+a[12]*r,this.y=a[1]*e+a[5]*i+a[9]*s+a[13]*r,this.z=a[2]*e+a[6]*i+a[10]*s+a[14]*r,this.w=a[3]*e+a[7]*i+a[11]*s+a[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,i,s,r;const l=t.elements,c=l[0],d=l[4],u=l[8],p=l[1],g=l[5],x=l[9],v=l[2],h=l[6],f=l[10];if(Math.abs(d-p)<.01&&Math.abs(u-v)<.01&&Math.abs(x-h)<.01){if(Math.abs(d+p)<.1&&Math.abs(u+v)<.1&&Math.abs(x+h)<.1&&Math.abs(c+g+f-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const _=(c+1)/2,M=(g+1)/2,y=(f+1)/2,E=(d+p)/4,C=(u+v)/4,L=(x+h)/4;return _>M&&_>y?_<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(_),s=E/i,r=C/i):M>y?M<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(M),i=E/s,r=L/s):y<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(y),i=C/r,s=L/r),this.set(i,s,r,e),this}let m=Math.sqrt((h-x)*(h-x)+(u-v)*(u-v)+(p-d)*(p-d));return Math.abs(m)<.001&&(m=1),this.x=(h-x)/m,this.y=(u-v)/m,this.z=(p-d)/m,this.w=Math.acos((c+g+f-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Zt(this.x,t.x,e.x),this.y=Zt(this.y,t.y,e.y),this.z=Zt(this.z,t.z,e.z),this.w=Zt(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=Zt(this.x,t,e),this.y=Zt(this.y,t,e),this.z=Zt(this.z,t,e),this.w=Zt(this.w,t,e),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Zt(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this.w=t.w+(e.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class rd extends Oi{constructor(t=1,e=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:En,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},i),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=i.depth,this.scissor=new be(0,0,t,e),this.scissorTest=!1,this.viewport=new be(0,0,t,e);const s={width:t,height:e,depth:i.depth},r=new qe(s);this.textures=[];const a=i.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}_setTextureOptions(t={}){const e={minFilter:En,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,i=1){if(this.width!==t||this.height!==e||this.depth!==i){this.width=t,this.height=e,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=i,this.textures[s].isArrayTexture=this.textures[s].image.depth>1;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,i=t.textures.length;e<i;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;const s=Object.assign({},t.textures[e].image);this.textures[e].source=new ac(s)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ui extends rd{constructor(t=1,e=1,i={}){super(t,e,i),this.isWebGLRenderTarget=!0}}class ih extends qe{constructor(t=null,e=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=wn,this.minFilter=wn,this.wrapR=wi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class ad extends qe{constructor(t=null,e=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=wn,this.minFilter=wn,this.wrapR=wi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Js{constructor(t=new z(1/0,1/0,1/0),e=new z(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e+=3)this.expandByPoint(xn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,i=t.count;e<i;e++)this.expandByPoint(xn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const i=xn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const i=t.geometry;if(i!==void 0){const r=i.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,xn):xn.fromBufferAttribute(r,a),xn.applyMatrix4(t.matrixWorld),this.expandByPoint(xn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),cr.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),cr.copy(i.boundingBox)),cr.applyMatrix4(t.matrixWorld),this.union(cr)}const s=t.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,xn),xn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,i;return t.normal.x>0?(e=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),e<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(ws),lr.subVectors(this.max,ws),Xi.subVectors(t.a,ws),Yi.subVectors(t.b,ws),qi.subVectors(t.c,ws),$n.subVectors(Yi,Xi),jn.subVectors(qi,Yi),pi.subVectors(Xi,qi);let e=[0,-$n.z,$n.y,0,-jn.z,jn.y,0,-pi.z,pi.y,$n.z,0,-$n.x,jn.z,0,-jn.x,pi.z,0,-pi.x,-$n.y,$n.x,0,-jn.y,jn.x,0,-pi.y,pi.x,0];return!xa(e,Xi,Yi,qi,lr)||(e=[1,0,0,0,1,0,0,0,1],!xa(e,Xi,Yi,qi,lr))?!1:(hr.crossVectors($n,jn),e=[hr.x,hr.y,hr.z],xa(e,Xi,Yi,qi,lr))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,xn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(xn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Fn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Fn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Fn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Fn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Fn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Fn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Fn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Fn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Fn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const Fn=[new z,new z,new z,new z,new z,new z,new z,new z],xn=new z,cr=new Js,Xi=new z,Yi=new z,qi=new z,$n=new z,jn=new z,pi=new z,ws=new z,lr=new z,hr=new z,mi=new z;function xa(n,t,e,i,s){for(let r=0,a=n.length-3;r<=a;r+=3){mi.fromArray(n,r);const o=s.x*Math.abs(mi.x)+s.y*Math.abs(mi.y)+s.z*Math.abs(mi.z),l=t.dot(mi),c=e.dot(mi),d=i.dot(mi);if(Math.max(-Math.max(l,c,d),Math.min(l,c,d))>o)return!1}return!0}const od=new Js,Rs=new z,Ma=new z;class Qs{constructor(t=new z,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const i=this.center;e!==void 0?i.copy(e):od.setFromPoints(t).getCenter(i);let s=0;for(let r=0,a=t.length;r<a;r++)s=Math.max(s,i.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const i=this.center.distanceToSquared(t);return e.copy(t),i>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Rs.subVectors(t,this.center);const e=Rs.lengthSq();if(e>this.radius*this.radius){const i=Math.sqrt(e),s=(i-this.radius)*.5;this.center.addScaledVector(Rs,s/i),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Ma.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Rs.copy(t.center).add(Ma)),this.expandByPoint(Rs.copy(t.center).sub(Ma))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}const Nn=new z,va=new z,ur=new z,Kn=new z,ya=new z,dr=new z,Sa=new z;class tr{constructor(t=new z,e=new z(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Nn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const i=e.dot(this.direction);return i<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=Nn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Nn.copy(this.origin).addScaledVector(this.direction,e),Nn.distanceToSquared(t))}distanceSqToSegment(t,e,i,s){va.copy(t).add(e).multiplyScalar(.5),ur.copy(e).sub(t).normalize(),Kn.copy(this.origin).sub(va);const r=t.distanceTo(e)*.5,a=-this.direction.dot(ur),o=Kn.dot(this.direction),l=-Kn.dot(ur),c=Kn.lengthSq(),d=Math.abs(1-a*a);let u,p,g,x;if(d>0)if(u=a*l-o,p=a*o-l,x=r*d,u>=0)if(p>=-x)if(p<=x){const v=1/d;u*=v,p*=v,g=u*(u+a*p+2*o)+p*(a*u+p+2*l)+c}else p=r,u=Math.max(0,-(a*p+o)),g=-u*u+p*(p+2*l)+c;else p=-r,u=Math.max(0,-(a*p+o)),g=-u*u+p*(p+2*l)+c;else p<=-x?(u=Math.max(0,-(-a*r+o)),p=u>0?-r:Math.min(Math.max(-r,-l),r),g=-u*u+p*(p+2*l)+c):p<=x?(u=0,p=Math.min(Math.max(-r,-l),r),g=p*(p+2*l)+c):(u=Math.max(0,-(a*r+o)),p=u>0?r:Math.min(Math.max(-r,-l),r),g=-u*u+p*(p+2*l)+c);else p=a>0?-r:r,u=Math.max(0,-(a*p+o)),g=-u*u+p*(p+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(va).addScaledVector(ur,p),g}intersectSphere(t,e){Nn.subVectors(t.center,this.origin);const i=Nn.dot(this.direction),s=Nn.dot(Nn)-i*i,r=t.radius*t.radius;if(s>r)return null;const a=Math.sqrt(r-s),o=i-a,l=i+a;return l<0?null:o<0?this.at(l,e):this.at(o,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(t.normal)+t.constant)/e;return i>=0?i:null}intersectPlane(t,e){const i=this.distanceToPlane(t);return i===null?null:this.at(i,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let i,s,r,a,o,l;const c=1/this.direction.x,d=1/this.direction.y,u=1/this.direction.z,p=this.origin;return c>=0?(i=(t.min.x-p.x)*c,s=(t.max.x-p.x)*c):(i=(t.max.x-p.x)*c,s=(t.min.x-p.x)*c),d>=0?(r=(t.min.y-p.y)*d,a=(t.max.y-p.y)*d):(r=(t.max.y-p.y)*d,a=(t.min.y-p.y)*d),i>a||r>s||((r>i||isNaN(i))&&(i=r),(a<s||isNaN(s))&&(s=a),u>=0?(o=(t.min.z-p.z)*u,l=(t.max.z-p.z)*u):(o=(t.max.z-p.z)*u,l=(t.min.z-p.z)*u),i>l||o>s)||((o>i||i!==i)&&(i=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,e)}intersectsBox(t){return this.intersectBox(t,Nn)!==null}intersectTriangle(t,e,i,s,r){ya.subVectors(e,t),dr.subVectors(i,t),Sa.crossVectors(ya,dr);let a=this.direction.dot(Sa),o;if(a>0){if(s)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Kn.subVectors(this.origin,t);const l=o*this.direction.dot(dr.crossVectors(Kn,dr));if(l<0)return null;const c=o*this.direction.dot(ya.cross(Kn));if(c<0||l+c>a)return null;const d=-o*Kn.dot(Sa);return d<0?null:this.at(d/a,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ve{constructor(t,e,i,s,r,a,o,l,c,d,u,p,g,x,v,h){ve.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,i,s,r,a,o,l,c,d,u,p,g,x,v,h)}set(t,e,i,s,r,a,o,l,c,d,u,p,g,x,v,h){const f=this.elements;return f[0]=t,f[4]=e,f[8]=i,f[12]=s,f[1]=r,f[5]=a,f[9]=o,f[13]=l,f[2]=c,f[6]=d,f[10]=u,f[14]=p,f[3]=g,f[7]=x,f[11]=v,f[15]=h,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ve().fromArray(this.elements)}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],e[9]=i[9],e[10]=i[10],e[11]=i[11],e[12]=i[12],e[13]=i[13],e[14]=i[14],e[15]=i[15],this}copyPosition(t){const e=this.elements,i=t.elements;return e[12]=i[12],e[13]=i[13],e[14]=i[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,i){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(t,e,i){return this.set(t.x,e.x,i.x,0,t.y,e.y,i.y,0,t.z,e.z,i.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,i=t.elements,s=1/$i.setFromMatrixColumn(t,0).length(),r=1/$i.setFromMatrixColumn(t,1).length(),a=1/$i.setFromMatrixColumn(t,2).length();return e[0]=i[0]*s,e[1]=i[1]*s,e[2]=i[2]*s,e[3]=0,e[4]=i[4]*r,e[5]=i[5]*r,e[6]=i[6]*r,e[7]=0,e[8]=i[8]*a,e[9]=i[9]*a,e[10]=i[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,i=t.x,s=t.y,r=t.z,a=Math.cos(i),o=Math.sin(i),l=Math.cos(s),c=Math.sin(s),d=Math.cos(r),u=Math.sin(r);if(t.order==="XYZ"){const p=a*d,g=a*u,x=o*d,v=o*u;e[0]=l*d,e[4]=-l*u,e[8]=c,e[1]=g+x*c,e[5]=p-v*c,e[9]=-o*l,e[2]=v-p*c,e[6]=x+g*c,e[10]=a*l}else if(t.order==="YXZ"){const p=l*d,g=l*u,x=c*d,v=c*u;e[0]=p+v*o,e[4]=x*o-g,e[8]=a*c,e[1]=a*u,e[5]=a*d,e[9]=-o,e[2]=g*o-x,e[6]=v+p*o,e[10]=a*l}else if(t.order==="ZXY"){const p=l*d,g=l*u,x=c*d,v=c*u;e[0]=p-v*o,e[4]=-a*u,e[8]=x+g*o,e[1]=g+x*o,e[5]=a*d,e[9]=v-p*o,e[2]=-a*c,e[6]=o,e[10]=a*l}else if(t.order==="ZYX"){const p=a*d,g=a*u,x=o*d,v=o*u;e[0]=l*d,e[4]=x*c-g,e[8]=p*c+v,e[1]=l*u,e[5]=v*c+p,e[9]=g*c-x,e[2]=-c,e[6]=o*l,e[10]=a*l}else if(t.order==="YZX"){const p=a*l,g=a*c,x=o*l,v=o*c;e[0]=l*d,e[4]=v-p*u,e[8]=x*u+g,e[1]=u,e[5]=a*d,e[9]=-o*d,e[2]=-c*d,e[6]=g*u+x,e[10]=p-v*u}else if(t.order==="XZY"){const p=a*l,g=a*c,x=o*l,v=o*c;e[0]=l*d,e[4]=-u,e[8]=c*d,e[1]=p*u+v,e[5]=a*d,e[9]=g*u-x,e[2]=x*u-g,e[6]=o*d,e[10]=v*u+p}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(cd,t,ld)}lookAt(t,e,i){const s=this.elements;return nn.subVectors(t,e),nn.lengthSq()===0&&(nn.z=1),nn.normalize(),Zn.crossVectors(i,nn),Zn.lengthSq()===0&&(Math.abs(i.z)===1?nn.x+=1e-4:nn.z+=1e-4,nn.normalize(),Zn.crossVectors(i,nn)),Zn.normalize(),fr.crossVectors(nn,Zn),s[0]=Zn.x,s[4]=fr.x,s[8]=nn.x,s[1]=Zn.y,s[5]=fr.y,s[9]=nn.y,s[2]=Zn.z,s[6]=fr.z,s[10]=nn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,s=e.elements,r=this.elements,a=i[0],o=i[4],l=i[8],c=i[12],d=i[1],u=i[5],p=i[9],g=i[13],x=i[2],v=i[6],h=i[10],f=i[14],m=i[3],_=i[7],M=i[11],y=i[15],E=s[0],C=s[4],L=s[8],b=s[12],S=s[1],R=s[5],A=s[9],P=s[13],F=s[2],U=s[6],O=s[10],W=s[14],V=s[3],j=s[7],K=s[11],et=s[15];return r[0]=a*E+o*S+l*F+c*V,r[4]=a*C+o*R+l*U+c*j,r[8]=a*L+o*A+l*O+c*K,r[12]=a*b+o*P+l*W+c*et,r[1]=d*E+u*S+p*F+g*V,r[5]=d*C+u*R+p*U+g*j,r[9]=d*L+u*A+p*O+g*K,r[13]=d*b+u*P+p*W+g*et,r[2]=x*E+v*S+h*F+f*V,r[6]=x*C+v*R+h*U+f*j,r[10]=x*L+v*A+h*O+f*K,r[14]=x*b+v*P+h*W+f*et,r[3]=m*E+_*S+M*F+y*V,r[7]=m*C+_*R+M*U+y*j,r[11]=m*L+_*A+M*O+y*K,r[15]=m*b+_*P+M*W+y*et,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[4],s=t[8],r=t[12],a=t[1],o=t[5],l=t[9],c=t[13],d=t[2],u=t[6],p=t[10],g=t[14],x=t[3],v=t[7],h=t[11],f=t[15];return x*(+r*l*u-s*c*u-r*o*p+i*c*p+s*o*g-i*l*g)+v*(+e*l*g-e*c*p+r*a*p-s*a*g+s*c*d-r*l*d)+h*(+e*c*u-e*o*g-r*a*u+i*a*g+r*o*d-i*c*d)+f*(-s*o*d-e*l*u+e*o*p+s*a*u-i*a*p+i*l*d)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,i){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=i),this}invert(){const t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],d=t[8],u=t[9],p=t[10],g=t[11],x=t[12],v=t[13],h=t[14],f=t[15],m=u*h*c-v*p*c+v*l*g-o*h*g-u*l*f+o*p*f,_=x*p*c-d*h*c-x*l*g+a*h*g+d*l*f-a*p*f,M=d*v*c-x*u*c+x*o*g-a*v*g-d*o*f+a*u*f,y=x*u*l-d*v*l-x*o*p+a*v*p+d*o*h-a*u*h,E=e*m+i*_+s*M+r*y;if(E===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const C=1/E;return t[0]=m*C,t[1]=(v*p*r-u*h*r-v*s*g+i*h*g+u*s*f-i*p*f)*C,t[2]=(o*h*r-v*l*r+v*s*c-i*h*c-o*s*f+i*l*f)*C,t[3]=(u*l*r-o*p*r-u*s*c+i*p*c+o*s*g-i*l*g)*C,t[4]=_*C,t[5]=(d*h*r-x*p*r+x*s*g-e*h*g-d*s*f+e*p*f)*C,t[6]=(x*l*r-a*h*r-x*s*c+e*h*c+a*s*f-e*l*f)*C,t[7]=(a*p*r-d*l*r+d*s*c-e*p*c-a*s*g+e*l*g)*C,t[8]=M*C,t[9]=(x*u*r-d*v*r-x*i*g+e*v*g+d*i*f-e*u*f)*C,t[10]=(a*v*r-x*o*r+x*i*c-e*v*c-a*i*f+e*o*f)*C,t[11]=(d*o*r-a*u*r-d*i*c+e*u*c+a*i*g-e*o*g)*C,t[12]=y*C,t[13]=(d*v*s-x*u*s+x*i*p-e*v*p-d*i*h+e*u*h)*C,t[14]=(x*o*s-a*v*s-x*i*l+e*v*l+a*i*h-e*o*h)*C,t[15]=(a*u*s-d*o*s+d*i*l-e*u*l-a*i*p+e*o*p)*C,this}scale(t){const e=this.elements,i=t.x,s=t.y,r=t.z;return e[0]*=i,e[4]*=s,e[8]*=r,e[1]*=i,e[5]*=s,e[9]*=r,e[2]*=i,e[6]*=s,e[10]*=r,e[3]*=i,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,i,s))}makeTranslation(t,e,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,i,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,e,-i,0,0,i,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,0,i,0,0,1,0,0,-i,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,0,i,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const i=Math.cos(e),s=Math.sin(e),r=1-i,a=t.x,o=t.y,l=t.z,c=r*a,d=r*o;return this.set(c*a+i,c*o-s*l,c*l+s*o,0,c*o+s*l,d*o+i,d*l-s*a,0,c*l-s*o,d*l+s*a,r*l*l+i,0,0,0,0,1),this}makeScale(t,e,i){return this.set(t,0,0,0,0,e,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,e,i,s,r,a){return this.set(1,i,r,0,t,1,a,0,e,s,1,0,0,0,0,1),this}compose(t,e,i){const s=this.elements,r=e._x,a=e._y,o=e._z,l=e._w,c=r+r,d=a+a,u=o+o,p=r*c,g=r*d,x=r*u,v=a*d,h=a*u,f=o*u,m=l*c,_=l*d,M=l*u,y=i.x,E=i.y,C=i.z;return s[0]=(1-(v+f))*y,s[1]=(g+M)*y,s[2]=(x-_)*y,s[3]=0,s[4]=(g-M)*E,s[5]=(1-(p+f))*E,s[6]=(h+m)*E,s[7]=0,s[8]=(x+_)*C,s[9]=(h-m)*C,s[10]=(1-(p+v))*C,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,i){const s=this.elements;let r=$i.set(s[0],s[1],s[2]).length();const a=$i.set(s[4],s[5],s[6]).length(),o=$i.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],Mn.copy(this);const c=1/r,d=1/a,u=1/o;return Mn.elements[0]*=c,Mn.elements[1]*=c,Mn.elements[2]*=c,Mn.elements[4]*=d,Mn.elements[5]*=d,Mn.elements[6]*=d,Mn.elements[8]*=u,Mn.elements[9]*=u,Mn.elements[10]*=u,e.setFromRotationMatrix(Mn),i.x=r,i.y=a,i.z=o,this}makePerspective(t,e,i,s,r,a,o=Ln,l=!1){const c=this.elements,d=2*r/(e-t),u=2*r/(i-s),p=(e+t)/(e-t),g=(i+s)/(i-s);let x,v;if(l)x=r/(a-r),v=a*r/(a-r);else if(o===Ln)x=-(a+r)/(a-r),v=-2*a*r/(a-r);else if(o===Kr)x=-a/(a-r),v=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=d,c[4]=0,c[8]=p,c[12]=0,c[1]=0,c[5]=u,c[9]=g,c[13]=0,c[2]=0,c[6]=0,c[10]=x,c[14]=v,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,i,s,r,a,o=Ln,l=!1){const c=this.elements,d=2/(e-t),u=2/(i-s),p=-(e+t)/(e-t),g=-(i+s)/(i-s);let x,v;if(l)x=1/(a-r),v=a/(a-r);else if(o===Ln)x=-2/(a-r),v=-(a+r)/(a-r);else if(o===Kr)x=-1/(a-r),v=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=d,c[4]=0,c[8]=0,c[12]=p,c[1]=0,c[5]=u,c[9]=0,c[13]=g,c[2]=0,c[6]=0,c[10]=x,c[14]=v,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){const e=this.elements,i=t.elements;for(let s=0;s<16;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<16;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t[e+9]=i[9],t[e+10]=i[10],t[e+11]=i[11],t[e+12]=i[12],t[e+13]=i[13],t[e+14]=i[14],t[e+15]=i[15],t}}const $i=new z,Mn=new ve,cd=new z(0,0,0),ld=new z(1,1,1),Zn=new z,fr=new z,nn=new z,Dc=new ve,Lc=new hi;class qn{constructor(t=0,e=0,i=0,s=qn.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=i,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,i,s=this._order){return this._x=t,this._y=e,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,i=!0){const s=t.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],d=s[9],u=s[2],p=s[6],g=s[10];switch(e){case"XYZ":this._y=Math.asin(Zt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-d,g),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(p,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Zt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(o,g),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(Zt(p,-1,1)),Math.abs(p)<.9999999?(this._y=Math.atan2(-u,g),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Zt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(p,g),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Zt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-d,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(o,g));break;case"XZY":this._z=Math.asin(-Zt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(p,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-d,g),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,i){return Dc.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Dc,e,i)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Lc.setFromEuler(this),this.setFromQuaternion(Lc,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}qn.DEFAULT_ORDER="XYZ";class oc{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let hd=0;const Ic=new z,ji=new hi,On=new ve,pr=new z,Cs=new z,ud=new z,dd=new hi,Uc=new z(1,0,0),Fc=new z(0,1,0),Nc=new z(0,0,1),Oc={type:"added"},fd={type:"removed"},Ki={type:"childadded",child:null},Ea={type:"childremoved",child:null};class He extends Oi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:hd++}),this.uuid=Wn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=He.DEFAULT_UP.clone();const t=new z,e=new qn,i=new hi,s=new z(1,1,1);function r(){i.setFromEuler(e,!1)}function a(){e.setFromQuaternion(i,void 0,!1)}e._onChange(r),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new ve},normalMatrix:{value:new $t}}),this.matrix=new ve,this.matrixWorld=new ve,this.matrixAutoUpdate=He.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=He.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new oc,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return ji.setFromAxisAngle(t,e),this.quaternion.multiply(ji),this}rotateOnWorldAxis(t,e){return ji.setFromAxisAngle(t,e),this.quaternion.premultiply(ji),this}rotateX(t){return this.rotateOnAxis(Uc,t)}rotateY(t){return this.rotateOnAxis(Fc,t)}rotateZ(t){return this.rotateOnAxis(Nc,t)}translateOnAxis(t,e){return Ic.copy(t).applyQuaternion(this.quaternion),this.position.add(Ic.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Uc,t)}translateY(t){return this.translateOnAxis(Fc,t)}translateZ(t){return this.translateOnAxis(Nc,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(On.copy(this.matrixWorld).invert())}lookAt(t,e,i){t.isVector3?pr.copy(t):pr.set(t,e,i);const s=this.parent;this.updateWorldMatrix(!0,!1),Cs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?On.lookAt(Cs,pr,this.up):On.lookAt(pr,Cs,this.up),this.quaternion.setFromRotationMatrix(On),s&&(On.extractRotation(s.matrixWorld),ji.setFromRotationMatrix(On),this.quaternion.premultiply(ji.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Oc),Ki.child=t,this.dispatchEvent(Ki),Ki.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(fd),Ea.child=t,this.dispatchEvent(Ea),Ea.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),On.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),On.multiply(t.parent.matrixWorld)),t.applyMatrix4(On),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Oc),Ki.child=t,this.dispatchEvent(Ki),Ki.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let i=0,s=this.children.length;i<s;i++){const a=this.children[i].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,i=[]){this[t]===e&&i.push(this);const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(t,e,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Cs,t,ud),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Cs,dd,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].updateMatrixWorld(t)}updateWorldMatrix(t,e){const i=this.parent;if(t===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",i={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,d=l.length;c<d;c++){const u=l[c];r(t.shapes,u)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(t.materials,this.material[l]));s.material=o}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];s.animations.push(r(t.animations,l))}}if(e){const o=a(t.geometries),l=a(t.materials),c=a(t.textures),d=a(t.images),u=a(t.shapes),p=a(t.skeletons),g=a(t.animations),x=a(t.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),d.length>0&&(i.images=d),u.length>0&&(i.shapes=u),p.length>0&&(i.skeletons=p),g.length>0&&(i.animations=g),x.length>0&&(i.nodes=x)}return i.object=s,i;function a(o){const l=[];for(const c in o){const d=o[c];delete d.metadata,l.push(d)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let i=0;i<t.children.length;i++){const s=t.children[i];this.add(s.clone())}return this}}He.DEFAULT_UP=new z(0,1,0);He.DEFAULT_MATRIX_AUTO_UPDATE=!0;He.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const vn=new z,Bn=new z,ba=new z,zn=new z,Zi=new z,Ji=new z,Bc=new z,Ta=new z,Aa=new z,wa=new z,Ra=new be,Ca=new be,Pa=new be;class fn{constructor(t=new z,e=new z,i=new z){this.a=t,this.b=e,this.c=i}static getNormal(t,e,i,s){s.subVectors(i,e),vn.subVectors(t,e),s.cross(vn);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,i,s,r){vn.subVectors(s,e),Bn.subVectors(i,e),ba.subVectors(t,e);const a=vn.dot(vn),o=vn.dot(Bn),l=vn.dot(ba),c=Bn.dot(Bn),d=Bn.dot(ba),u=a*c-o*o;if(u===0)return r.set(0,0,0),null;const p=1/u,g=(c*l-o*d)*p,x=(a*d-o*l)*p;return r.set(1-g-x,x,g)}static containsPoint(t,e,i,s){return this.getBarycoord(t,e,i,s,zn)===null?!1:zn.x>=0&&zn.y>=0&&zn.x+zn.y<=1}static getInterpolation(t,e,i,s,r,a,o,l){return this.getBarycoord(t,e,i,s,zn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,zn.x),l.addScaledVector(a,zn.y),l.addScaledVector(o,zn.z),l)}static getInterpolatedAttribute(t,e,i,s,r,a){return Ra.setScalar(0),Ca.setScalar(0),Pa.setScalar(0),Ra.fromBufferAttribute(t,e),Ca.fromBufferAttribute(t,i),Pa.fromBufferAttribute(t,s),a.setScalar(0),a.addScaledVector(Ra,r.x),a.addScaledVector(Ca,r.y),a.addScaledVector(Pa,r.z),a}static isFrontFacing(t,e,i,s){return vn.subVectors(i,e),Bn.subVectors(t,e),vn.cross(Bn).dot(s)<0}set(t,e,i){return this.a.copy(t),this.b.copy(e),this.c.copy(i),this}setFromPointsAndIndices(t,e,i,s){return this.a.copy(t[e]),this.b.copy(t[i]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,i,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return vn.subVectors(this.c,this.b),Bn.subVectors(this.a,this.b),vn.cross(Bn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return fn.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return fn.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,i,s,r){return fn.getInterpolation(t,this.a,this.b,this.c,e,i,s,r)}containsPoint(t){return fn.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return fn.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const i=this.a,s=this.b,r=this.c;let a,o;Zi.subVectors(s,i),Ji.subVectors(r,i),Ta.subVectors(t,i);const l=Zi.dot(Ta),c=Ji.dot(Ta);if(l<=0&&c<=0)return e.copy(i);Aa.subVectors(t,s);const d=Zi.dot(Aa),u=Ji.dot(Aa);if(d>=0&&u<=d)return e.copy(s);const p=l*u-d*c;if(p<=0&&l>=0&&d<=0)return a=l/(l-d),e.copy(i).addScaledVector(Zi,a);wa.subVectors(t,r);const g=Zi.dot(wa),x=Ji.dot(wa);if(x>=0&&g<=x)return e.copy(r);const v=g*c-l*x;if(v<=0&&c>=0&&x<=0)return o=c/(c-x),e.copy(i).addScaledVector(Ji,o);const h=d*x-g*u;if(h<=0&&u-d>=0&&g-x>=0)return Bc.subVectors(r,s),o=(u-d)/(u-d+(g-x)),e.copy(s).addScaledVector(Bc,o);const f=1/(h+v+p);return a=v*f,o=p*f,e.copy(i).addScaledVector(Zi,a).addScaledVector(Ji,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const sh={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Jn={h:0,s:0,l:0},mr={h:0,s:0,l:0};function Da(n,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?n+(t-n)*6*e:e<1/2?t:e<2/3?n+(t-n)*6*(2/3-e):n}class kt{constructor(t,e,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,i)}set(t,e,i){if(e===void 0&&i===void 0){const s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Ne){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,he.colorSpaceToWorking(this,e),this}setRGB(t,e,i,s=he.workingColorSpace){return this.r=t,this.g=e,this.b=i,he.colorSpaceToWorking(this,s),this}setHSL(t,e,i,s=he.workingColorSpace){if(t=rc(t,1),e=Zt(e,0,1),i=Zt(i,0,1),e===0)this.r=this.g=this.b=i;else{const r=i<=.5?i*(1+e):i+e-i*e,a=2*i-r;this.r=Da(a,r,t+1/3),this.g=Da(a,r,t),this.b=Da(a,r,t-1/3)}return he.colorSpaceToWorking(this,s),this}setStyle(t,e=Ne){function i(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Ne){const i=sh[t.toLowerCase()];return i!==void 0?this.setHex(i,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Xn(t.r),this.g=Xn(t.g),this.b=Xn(t.b),this}copyLinearToSRGB(t){return this.r=fs(t.r),this.g=fs(t.g),this.b=fs(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Ne){return he.workingToColorSpace(Be.copy(this),t),Math.round(Zt(Be.r*255,0,255))*65536+Math.round(Zt(Be.g*255,0,255))*256+Math.round(Zt(Be.b*255,0,255))}getHexString(t=Ne){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=he.workingColorSpace){he.workingToColorSpace(Be.copy(this),e);const i=Be.r,s=Be.g,r=Be.b,a=Math.max(i,s,r),o=Math.min(i,s,r);let l,c;const d=(o+a)/2;if(o===a)l=0,c=0;else{const u=a-o;switch(c=d<=.5?u/(a+o):u/(2-a-o),a){case i:l=(s-r)/u+(s<r?6:0);break;case s:l=(r-i)/u+2;break;case r:l=(i-s)/u+4;break}l/=6}return t.h=l,t.s=c,t.l=d,t}getRGB(t,e=he.workingColorSpace){return he.workingToColorSpace(Be.copy(this),e),t.r=Be.r,t.g=Be.g,t.b=Be.b,t}getStyle(t=Ne){he.workingToColorSpace(Be.copy(this),t);const e=Be.r,i=Be.g,s=Be.b;return t!==Ne?`color(${t} ${e.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(t,e,i){return this.getHSL(Jn),this.setHSL(Jn.h+t,Jn.s+e,Jn.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,i){return this.r=t.r+(e.r-t.r)*i,this.g=t.g+(e.g-t.g)*i,this.b=t.b+(e.b-t.b)*i,this}lerpHSL(t,e){this.getHSL(Jn),t.getHSL(mr);const i=Hs(Jn.h,mr.h,e),s=Hs(Jn.s,mr.s,e),r=Hs(Jn.l,mr.l,e);return this.setHSL(i,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,i=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*i+r[6]*s,this.g=r[1]*e+r[4]*i+r[7]*s,this.b=r[2]*e+r[5]*i+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Be=new kt;kt.NAMES=sh;let pd=0;class Bi extends Oi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:pd++}),this.uuid=Wn(),this.name="",this.type="Material",this.blending=Pi,this.side=li,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ka,this.blendDst=Za,this.blendEquation=bi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new kt(0,0,0),this.blendAlpha=0,this.depthFunc=_s,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=bc,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Vi,this.stencilZFail=Vi,this.stencilZPass=Vi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const i=t[e];if(i===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[e]=i}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Pi&&(i.blending=this.blending),this.side!==li&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Ka&&(i.blendSrc=this.blendSrc),this.blendDst!==Za&&(i.blendDst=this.blendDst),this.blendEquation!==bi&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==_s&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==bc&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Vi&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Vi&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Vi&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){const a=[];for(const o in r){const l=r[o];delete l.metadata,a.push(l)}return a}if(e){const r=s(t.textures),a=s(t.images);r.length>0&&(i.textures=r),a.length>0&&(i.images=a)}return i}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let i=null;if(e!==null){const s=e.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=e[r].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class er extends Bi{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new kt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new qn,this.combine=Wl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const Te=new z,gr=new Vt;let md=0;class Kt{constructor(t,e,i=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:md++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=i,this.usage=Bo,this.updateRanges=[],this.gpuType=Vn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,i){t*=this.itemSize,i*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[i+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,i=this.count;e<i;e++)gr.fromBufferAttribute(this,e),gr.applyMatrix3(t),this.setXY(e,gr.x,gr.y);else if(this.itemSize===3)for(let e=0,i=this.count;e<i;e++)Te.fromBufferAttribute(this,e),Te.applyMatrix3(t),this.setXYZ(e,Te.x,Te.y,Te.z);return this}applyMatrix4(t){for(let e=0,i=this.count;e<i;e++)Te.fromBufferAttribute(this,e),Te.applyMatrix4(t),this.setXYZ(e,Te.x,Te.y,Te.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)Te.fromBufferAttribute(this,e),Te.applyNormalMatrix(t),this.setXYZ(e,Te.x,Te.y,Te.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)Te.fromBufferAttribute(this,e),Te.transformDirection(t),this.setXYZ(e,Te.x,Te.y,Te.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let i=this.array[t*this.itemSize+e];return this.normalized&&(i=Sn(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=de(i,this.array)),this.array[t*this.itemSize+e]=i,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Sn(e,this.array)),e}setX(t,e){return this.normalized&&(e=de(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Sn(e,this.array)),e}setY(t,e){return this.normalized&&(e=de(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Sn(e,this.array)),e}setZ(t,e){return this.normalized&&(e=de(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Sn(e,this.array)),e}setW(t,e){return this.normalized&&(e=de(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,i){return t*=this.itemSize,this.normalized&&(e=de(e,this.array),i=de(i,this.array)),this.array[t+0]=e,this.array[t+1]=i,this}setXYZ(t,e,i,s){return t*=this.itemSize,this.normalized&&(e=de(e,this.array),i=de(i,this.array),s=de(s,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this}setXYZW(t,e,i,s,r){return t*=this.itemSize,this.normalized&&(e=de(e,this.array),i=de(i,this.array),s=de(s,this.array),r=de(r,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Bo&&(t.usage=this.usage),t}}class rh extends Kt{constructor(t,e,i){super(new Uint16Array(t),e,i)}}class ah extends Kt{constructor(t,e,i){super(new Uint32Array(t),e,i)}}class Pe extends Kt{constructor(t,e,i){super(new Float32Array(t),e,i)}}let gd=0;const cn=new ve,La=new He,Qi=new z,sn=new Js,Ps=new Js,Ue=new z;class ee extends Oi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:gd++}),this.uuid=Wn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(nh(t)?ah:rh)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,i=0){this.groups.push({start:t,count:e,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const r=new $t().getNormalMatrix(t);i.applyNormalMatrix(r),i.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return cn.makeRotationFromQuaternion(t),this.applyMatrix4(cn),this}rotateX(t){return cn.makeRotationX(t),this.applyMatrix4(cn),this}rotateY(t){return cn.makeRotationY(t),this.applyMatrix4(cn),this}rotateZ(t){return cn.makeRotationZ(t),this.applyMatrix4(cn),this}translate(t,e,i){return cn.makeTranslation(t,e,i),this.applyMatrix4(cn),this}scale(t,e,i){return cn.makeScale(t,e,i),this.applyMatrix4(cn),this}lookAt(t){return La.lookAt(t),La.updateMatrix(),this.applyMatrix4(La.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Qi).negate(),this.translate(Qi.x,Qi.y,Qi.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const i=[];for(let s=0,r=t.length;s<r;s++){const a=t[s];i.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Pe(i,3))}else{const i=Math.min(t.length,e.count);for(let s=0;s<i;s++){const r=t[s];e.setXYZ(s,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Js);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new z(-1/0,-1/0,-1/0),new z(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let i=0,s=e.length;i<s;i++){const r=e[i];sn.setFromBufferAttribute(r),this.morphTargetsRelative?(Ue.addVectors(this.boundingBox.min,sn.min),this.boundingBox.expandByPoint(Ue),Ue.addVectors(this.boundingBox.max,sn.max),this.boundingBox.expandByPoint(Ue)):(this.boundingBox.expandByPoint(sn.min),this.boundingBox.expandByPoint(sn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Qs);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new z,1/0);return}if(t){const i=this.boundingSphere.center;if(sn.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){const o=e[r];Ps.setFromBufferAttribute(o),this.morphTargetsRelative?(Ue.addVectors(sn.min,Ps.min),sn.expandByPoint(Ue),Ue.addVectors(sn.max,Ps.max),sn.expandByPoint(Ue)):(sn.expandByPoint(Ps.min),sn.expandByPoint(Ps.max))}sn.getCenter(i);let s=0;for(let r=0,a=t.count;r<a;r++)Ue.fromBufferAttribute(t,r),s=Math.max(s,i.distanceToSquared(Ue));if(e)for(let r=0,a=e.length;r<a;r++){const o=e[r],l=this.morphTargetsRelative;for(let c=0,d=o.count;c<d;c++)Ue.fromBufferAttribute(o,c),l&&(Qi.fromBufferAttribute(t,c),Ue.add(Qi)),s=Math.max(s,i.distanceToSquared(Ue))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Kt(new Float32Array(4*i.count),4));const a=this.getAttribute("tangent"),o=[],l=[];for(let L=0;L<i.count;L++)o[L]=new z,l[L]=new z;const c=new z,d=new z,u=new z,p=new Vt,g=new Vt,x=new Vt,v=new z,h=new z;function f(L,b,S){c.fromBufferAttribute(i,L),d.fromBufferAttribute(i,b),u.fromBufferAttribute(i,S),p.fromBufferAttribute(r,L),g.fromBufferAttribute(r,b),x.fromBufferAttribute(r,S),d.sub(c),u.sub(c),g.sub(p),x.sub(p);const R=1/(g.x*x.y-x.x*g.y);isFinite(R)&&(v.copy(d).multiplyScalar(x.y).addScaledVector(u,-g.y).multiplyScalar(R),h.copy(u).multiplyScalar(g.x).addScaledVector(d,-x.x).multiplyScalar(R),o[L].add(v),o[b].add(v),o[S].add(v),l[L].add(h),l[b].add(h),l[S].add(h))}let m=this.groups;m.length===0&&(m=[{start:0,count:t.count}]);for(let L=0,b=m.length;L<b;++L){const S=m[L],R=S.start,A=S.count;for(let P=R,F=R+A;P<F;P+=3)f(t.getX(P+0),t.getX(P+1),t.getX(P+2))}const _=new z,M=new z,y=new z,E=new z;function C(L){y.fromBufferAttribute(s,L),E.copy(y);const b=o[L];_.copy(b),_.sub(y.multiplyScalar(y.dot(b))).normalize(),M.crossVectors(E,b);const R=M.dot(l[L])<0?-1:1;a.setXYZW(L,_.x,_.y,_.z,R)}for(let L=0,b=m.length;L<b;++L){const S=m[L],R=S.start,A=S.count;for(let P=R,F=R+A;P<F;P+=3)C(t.getX(P+0)),C(t.getX(P+1)),C(t.getX(P+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Kt(new Float32Array(e.count*3),3),this.setAttribute("normal",i);else for(let p=0,g=i.count;p<g;p++)i.setXYZ(p,0,0,0);const s=new z,r=new z,a=new z,o=new z,l=new z,c=new z,d=new z,u=new z;if(t)for(let p=0,g=t.count;p<g;p+=3){const x=t.getX(p+0),v=t.getX(p+1),h=t.getX(p+2);s.fromBufferAttribute(e,x),r.fromBufferAttribute(e,v),a.fromBufferAttribute(e,h),d.subVectors(a,r),u.subVectors(s,r),d.cross(u),o.fromBufferAttribute(i,x),l.fromBufferAttribute(i,v),c.fromBufferAttribute(i,h),o.add(d),l.add(d),c.add(d),i.setXYZ(x,o.x,o.y,o.z),i.setXYZ(v,l.x,l.y,l.z),i.setXYZ(h,c.x,c.y,c.z)}else for(let p=0,g=e.count;p<g;p+=3)s.fromBufferAttribute(e,p+0),r.fromBufferAttribute(e,p+1),a.fromBufferAttribute(e,p+2),d.subVectors(a,r),u.subVectors(s,r),d.cross(u),i.setXYZ(p+0,d.x,d.y,d.z),i.setXYZ(p+1,d.x,d.y,d.z),i.setXYZ(p+2,d.x,d.y,d.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,i=t.count;e<i;e++)Ue.fromBufferAttribute(t,e),Ue.normalize(),t.setXYZ(e,Ue.x,Ue.y,Ue.z)}toNonIndexed(){function t(o,l){const c=o.array,d=o.itemSize,u=o.normalized,p=new c.constructor(l.length*d);let g=0,x=0;for(let v=0,h=l.length;v<h;v++){o.isInterleavedBufferAttribute?g=l[v]*o.data.stride+o.offset:g=l[v]*d;for(let f=0;f<d;f++)p[x++]=c[g++]}return new Kt(p,d,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new ee,i=this.index.array,s=this.attributes;for(const o in s){const l=s[o],c=t(l,i);e.setAttribute(o,c)}const r=this.morphAttributes;for(const o in r){const l=[],c=r[o];for(let d=0,u=c.length;d<u;d++){const p=c[d],g=t(p,i);l.push(g)}e.morphAttributes[o]=l}e.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const i=this.attributes;for(const l in i){const c=i[l];t.data.attributes[l]=c.toJSON(t.data)}const s={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],d=[];for(let u=0,p=c.length;u<p;u++){const g=c[u];d.push(g.toJSON(t.data))}d.length>0&&(s[l]=d,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(t.data.boundingSphere=o.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const i=t.index;i!==null&&this.setIndex(i.clone());const s=t.attributes;for(const c in s){const d=s[c];this.setAttribute(c,d.clone(e))}const r=t.morphAttributes;for(const c in r){const d=[],u=r[c];for(let p=0,g=u.length;p<g;p++)d.push(u[p].clone(e));this.morphAttributes[c]=d}this.morphTargetsRelative=t.morphTargetsRelative;const a=t.groups;for(let c=0,d=a.length;c<d;c++){const u=a[c];this.addGroup(u.start,u.count,u.materialIndex)}const o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const zc=new ve,gi=new tr,_r=new Qs,kc=new z,xr=new z,Mr=new z,vr=new z,Ia=new z,yr=new z,Hc=new z,Sr=new z;class pn extends He{constructor(t=new ee,e=new er){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){const i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,a=i.morphTargetsRelative;e.fromBufferAttribute(s,t);const o=this.morphTargetInfluences;if(r&&o){yr.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const d=o[l],u=r[l];d!==0&&(Ia.fromBufferAttribute(u,t),a?yr.addScaledVector(Ia,d):yr.addScaledVector(Ia.sub(e),d))}e.add(yr)}return e}raycast(t,e){const i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),_r.copy(i.boundingSphere),_r.applyMatrix4(r),gi.copy(t.ray).recast(t.near),!(_r.containsPoint(gi.origin)===!1&&(gi.intersectSphere(_r,kc)===null||gi.origin.distanceToSquared(kc)>(t.far-t.near)**2))&&(zc.copy(r).invert(),gi.copy(t.ray).applyMatrix4(zc),!(i.boundingBox!==null&&gi.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,e,gi)))}_computeIntersections(t,e,i){let s;const r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,d=r.attributes.uv1,u=r.attributes.normal,p=r.groups,g=r.drawRange;if(o!==null)if(Array.isArray(a))for(let x=0,v=p.length;x<v;x++){const h=p[x],f=a[h.materialIndex],m=Math.max(h.start,g.start),_=Math.min(o.count,Math.min(h.start+h.count,g.start+g.count));for(let M=m,y=_;M<y;M+=3){const E=o.getX(M),C=o.getX(M+1),L=o.getX(M+2);s=Er(this,f,t,i,c,d,u,E,C,L),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=h.materialIndex,e.push(s))}}else{const x=Math.max(0,g.start),v=Math.min(o.count,g.start+g.count);for(let h=x,f=v;h<f;h+=3){const m=o.getX(h),_=o.getX(h+1),M=o.getX(h+2);s=Er(this,a,t,i,c,d,u,m,_,M),s&&(s.faceIndex=Math.floor(h/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let x=0,v=p.length;x<v;x++){const h=p[x],f=a[h.materialIndex],m=Math.max(h.start,g.start),_=Math.min(l.count,Math.min(h.start+h.count,g.start+g.count));for(let M=m,y=_;M<y;M+=3){const E=M,C=M+1,L=M+2;s=Er(this,f,t,i,c,d,u,E,C,L),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=h.materialIndex,e.push(s))}}else{const x=Math.max(0,g.start),v=Math.min(l.count,g.start+g.count);for(let h=x,f=v;h<f;h+=3){const m=h,_=h+1,M=h+2;s=Er(this,a,t,i,c,d,u,m,_,M),s&&(s.faceIndex=Math.floor(h/3),e.push(s))}}}}function _d(n,t,e,i,s,r,a,o){let l;if(t.side===Je?l=i.intersectTriangle(a,r,s,!0,o):l=i.intersectTriangle(s,r,a,t.side===li,o),l===null)return null;Sr.copy(o),Sr.applyMatrix4(n.matrixWorld);const c=e.ray.origin.distanceTo(Sr);return c<e.near||c>e.far?null:{distance:c,point:Sr.clone(),object:n}}function Er(n,t,e,i,s,r,a,o,l,c){n.getVertexPosition(o,xr),n.getVertexPosition(l,Mr),n.getVertexPosition(c,vr);const d=_d(n,t,e,i,xr,Mr,vr,Hc);if(d){const u=new z;fn.getBarycoord(Hc,xr,Mr,vr,u),s&&(d.uv=fn.getInterpolatedAttribute(s,o,l,c,u,new Vt)),r&&(d.uv1=fn.getInterpolatedAttribute(r,o,l,c,u,new Vt)),a&&(d.normal=fn.getInterpolatedAttribute(a,o,l,c,u,new z),d.normal.dot(i.direction)>0&&d.normal.multiplyScalar(-1));const p={a:o,b:l,c,normal:new z,materialIndex:0};fn.getNormal(xr,Mr,vr,p.normal),d.face=p,d.barycoord=u}return d}class nr extends ee{constructor(t=1,e=1,i=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:i,widthSegments:s,heightSegments:r,depthSegments:a};const o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);const l=[],c=[],d=[],u=[];let p=0,g=0;x("z","y","x",-1,-1,i,e,t,a,r,0),x("z","y","x",1,-1,i,e,-t,a,r,1),x("x","z","y",1,1,t,i,e,s,a,2),x("x","z","y",1,-1,t,i,-e,s,a,3),x("x","y","z",1,-1,t,e,i,s,r,4),x("x","y","z",-1,-1,t,e,-i,s,r,5),this.setIndex(l),this.setAttribute("position",new Pe(c,3)),this.setAttribute("normal",new Pe(d,3)),this.setAttribute("uv",new Pe(u,2));function x(v,h,f,m,_,M,y,E,C,L,b){const S=M/C,R=y/L,A=M/2,P=y/2,F=E/2,U=C+1,O=L+1;let W=0,V=0;const j=new z;for(let K=0;K<O;K++){const et=K*R-P;for(let H=0;H<U;H++){const G=H*S-A;j[v]=G*m,j[h]=et*_,j[f]=F,c.push(j.x,j.y,j.z),j[v]=0,j[h]=0,j[f]=E>0?1:-1,d.push(j.x,j.y,j.z),u.push(H/C),u.push(1-K/L),W+=1}}for(let K=0;K<L;K++)for(let et=0;et<C;et++){const H=p+et+U*K,G=p+et+U*(K+1),xt=p+(et+1)+U*(K+1),pt=p+(et+1)+U*K;l.push(H,G,pt),l.push(G,xt,pt),V+=6}o.addGroup(g,V,b),g+=V,p+=W}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new nr(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function ys(n){const t={};for(const e in n){t[e]={};for(const i in n[e]){const s=n[e][i];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][i]=null):t[e][i]=s.clone():Array.isArray(s)?t[e][i]=s.slice():t[e][i]=s}}return t}function We(n){const t={};for(let e=0;e<n.length;e++){const i=ys(n[e]);for(const s in i)t[s]=i[s]}return t}function xd(n){const t=[];for(let e=0;e<n.length;e++)t.push(n[e].clone());return t}function oh(n){const t=n.getRenderTarget();return t===null?n.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:he.workingColorSpace}const Md={clone:ys,merge:We};var vd=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,yd=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ui extends Bi{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=vd,this.fragmentShader=yd,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=ys(t.uniforms),this.uniformsGroups=xd(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const s in this.uniforms){const a=this.uniforms[s].value;a&&a.isTexture?e.uniforms[s]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[s]={type:"m4",value:a.toArray()}:e.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const i={};for(const s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(e.extensions=i),e}}class ch extends He{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ve,this.projectionMatrix=new ve,this.projectionMatrixInverse=new ve,this.coordinateSystem=Ln,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Qn=new z,Gc=new Vt,Vc=new Vt;class dn extends ch{constructor(t=50,e=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=qs*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(ks*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return qs*2*Math.atan(Math.tan(ks*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,i){Qn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Qn.x,Qn.y).multiplyScalar(-t/Qn.z),Qn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Qn.x,Qn.y).multiplyScalar(-t/Qn.z)}getViewSize(t,e){return this.getViewBounds(t,Gc,Vc),e.subVectors(Vc,Gc)}setViewOffset(t,e,i,s,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(ks*.5*this.fov)/this.zoom,i=2*e,s=this.aspect*i,r=-.5*s;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,e-=a.offsetY*i/c,s*=a.width/l,i*=a.height/c}const o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-i,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const ts=-90,es=1;class Sd extends He{constructor(t,e,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new dn(ts,es,t,e);s.layers=this.layers,this.add(s);const r=new dn(ts,es,t,e);r.layers=this.layers,this.add(r);const a=new dn(ts,es,t,e);a.layers=this.layers,this.add(a);const o=new dn(ts,es,t,e);o.layers=this.layers,this.add(o);const l=new dn(ts,es,t,e);l.layers=this.layers,this.add(l);const c=new dn(ts,es,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[i,s,r,a,o,l]=e;for(const c of e)this.remove(c);if(t===Ln)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Kr)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,a,o,l,c,d]=this.children,u=t.getRenderTarget(),p=t.getActiveCubeFace(),g=t.getActiveMipmapLevel(),x=t.xr.enabled;t.xr.enabled=!1;const v=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,t.setRenderTarget(i,0,s),t.render(e,r),t.setRenderTarget(i,1,s),t.render(e,a),t.setRenderTarget(i,2,s),t.render(e,o),t.setRenderTarget(i,3,s),t.render(e,l),t.setRenderTarget(i,4,s),t.render(e,c),i.texture.generateMipmaps=v,t.setRenderTarget(i,5,s),t.render(e,d),t.setRenderTarget(u,p,g),t.xr.enabled=x,i.texture.needsPMREMUpdate=!0}}class lh extends qe{constructor(t=[],e=xs,i,s,r,a,o,l,c,d){super(t,e,i,s,r,a,o,l,c,d),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Ed extends Ui{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const i={width:t,height:t,depth:1},s=[i,i,i,i,i,i];this.texture=new lh(s),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new nr(5,5,5),r=new ui({name:"CubemapFromEquirect",uniforms:ys(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Je,blending:ri});r.uniforms.tEquirect.value=e;const a=new pn(s,r),o=e.minFilter;return e.minFilter===si&&(e.minFilter=En),new Sd(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e=!0,i=!0,s=!0){const r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,i,s);t.setRenderTarget(r)}}class ke extends He{constructor(){super(),this.isGroup=!0,this.type="Group"}}const bd={type:"move"};class Ua{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ke,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ke,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new z,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new z),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ke,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new z,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new z),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const i of t.hand.values())this._getHandJoint(e,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,i){let s=null,r=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){a=!0;for(const v of t.hand.values()){const h=e.getJointPose(v,i),f=this._getHandJoint(c,v);h!==null&&(f.matrix.fromArray(h.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=h.radius),f.visible=h!==null}const d=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],p=d.position.distanceTo(u.position),g=.02,x=.005;c.inputState.pinching&&p>g+x?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&p<=g-x&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(s=e.getPose(t.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(bd)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const i=new ke;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[e.jointName]=i,t.add(i)}return t.joints[e.jointName]}}class cc{constructor(t,e=25e-5){this.isFogExp2=!0,this.name="",this.color=new kt(t),this.density=e}clone(){return new cc(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class Td extends He{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new qn,this.environmentIntensity=1,this.environmentRotation=new qn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class Ad{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=Bo,this.updateRanges=[],this.version=0,this.uuid=Wn()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,i){t*=this.stride,i*=e.stride;for(let s=0,r=this.stride;s<r;s++)this.array[t+s]=e.array[i+s];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Wn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(e,this.stride);return i.setUsage(this.usage),i}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Wn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Ve=new z;class Jr{constructor(t,e,i,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=i,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,i=this.data.count;e<i;e++)Ve.fromBufferAttribute(this,e),Ve.applyMatrix4(t),this.setXYZ(e,Ve.x,Ve.y,Ve.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)Ve.fromBufferAttribute(this,e),Ve.applyNormalMatrix(t),this.setXYZ(e,Ve.x,Ve.y,Ve.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)Ve.fromBufferAttribute(this,e),Ve.transformDirection(t),this.setXYZ(e,Ve.x,Ve.y,Ve.z);return this}getComponent(t,e){let i=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(i=Sn(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=de(i,this.array)),this.data.array[t*this.data.stride+this.offset+e]=i,this}setX(t,e){return this.normalized&&(e=de(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=de(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=de(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=de(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=Sn(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=Sn(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=Sn(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=Sn(e,this.array)),e}setXY(t,e,i){return t=t*this.data.stride+this.offset,this.normalized&&(e=de(e,this.array),i=de(i,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this}setXYZ(t,e,i,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=de(e,this.array),i=de(i,this.array),s=de(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this.data.array[t+2]=s,this}setXYZW(t,e,i,s,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=de(e,this.array),i=de(i,this.array),s=de(s,this.array),r=de(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this.data.array[t+2]=s,this.data.array[t+3]=r,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let i=0;i<this.count;i++){const s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return new Kt(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new Jr(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let i=0;i<this.count;i++){const s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class se extends Bi{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new kt(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}let ns;const Ds=new z,is=new z,ss=new z,rs=new Vt,Ls=new Vt,hh=new ve,br=new z,Is=new z,Tr=new z,Wc=new Vt,Fa=new Vt,Xc=new Vt;class oe extends He{constructor(t=new se){if(super(),this.isSprite=!0,this.type="Sprite",ns===void 0){ns=new ee;const e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new Ad(e,5);ns.setIndex([0,1,2,0,2,3]),ns.setAttribute("position",new Jr(i,3,0,!1)),ns.setAttribute("uv",new Jr(i,2,3,!1))}this.geometry=ns,this.material=t,this.center=new Vt(.5,.5),this.count=1}raycast(t,e){t.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),is.setFromMatrixScale(this.matrixWorld),hh.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),ss.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&is.multiplyScalar(-ss.z);const i=this.material.rotation;let s,r;i!==0&&(r=Math.cos(i),s=Math.sin(i));const a=this.center;Ar(br.set(-.5,-.5,0),ss,a,is,s,r),Ar(Is.set(.5,-.5,0),ss,a,is,s,r),Ar(Tr.set(.5,.5,0),ss,a,is,s,r),Wc.set(0,0),Fa.set(1,0),Xc.set(1,1);let o=t.ray.intersectTriangle(br,Is,Tr,!1,Ds);if(o===null&&(Ar(Is.set(-.5,.5,0),ss,a,is,s,r),Fa.set(0,1),o=t.ray.intersectTriangle(br,Tr,Is,!1,Ds),o===null))return;const l=t.ray.origin.distanceTo(Ds);l<t.near||l>t.far||e.push({distance:l,point:Ds.clone(),uv:fn.getInterpolation(Ds,br,Is,Tr,Wc,Fa,Xc,new Vt),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}}function Ar(n,t,e,i,s,r){rs.subVectors(n,e).addScalar(.5).multiply(i),s!==void 0?(Ls.x=r*rs.x-s*rs.y,Ls.y=s*rs.x+r*rs.y):Ls.copy(rs),n.copy(t),n.x+=Ls.x,n.y+=Ls.y,n.applyMatrix4(hh)}const Na=new z,wd=new z,Rd=new $t;class ti{constructor(t=new z(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,i,s){return this.normal.set(t,e,i),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,i){const s=Na.subVectors(i,e).cross(wd.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const i=t.delta(Na),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(i,r)}intersectsLine(t){const e=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return e<0&&i>0||i<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const i=e||Rd.getNormalMatrix(t),s=this.coplanarPoint(Na).applyMatrix4(t),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const _i=new Qs,Cd=new Vt(.5,.5),wr=new z;class uh{constructor(t=new ti,e=new ti,i=new ti,s=new ti,r=new ti,a=new ti){this.planes=[t,e,i,s,r,a]}set(t,e,i,s,r,a){const o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(i),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(t){const e=this.planes;for(let i=0;i<6;i++)e[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,e=Ln,i=!1){const s=this.planes,r=t.elements,a=r[0],o=r[1],l=r[2],c=r[3],d=r[4],u=r[5],p=r[6],g=r[7],x=r[8],v=r[9],h=r[10],f=r[11],m=r[12],_=r[13],M=r[14],y=r[15];if(s[0].setComponents(c-a,g-d,f-x,y-m).normalize(),s[1].setComponents(c+a,g+d,f+x,y+m).normalize(),s[2].setComponents(c+o,g+u,f+v,y+_).normalize(),s[3].setComponents(c-o,g-u,f-v,y-_).normalize(),i)s[4].setComponents(l,p,h,M).normalize(),s[5].setComponents(c-l,g-p,f-h,y-M).normalize();else if(s[4].setComponents(c-l,g-p,f-h,y-M).normalize(),e===Ln)s[5].setComponents(c+l,g+p,f+h,y+M).normalize();else if(e===Kr)s[5].setComponents(l,p,h,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),_i.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),_i.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(_i)}intersectsSprite(t){_i.center.set(0,0,0);const e=Cd.distanceTo(t.center);return _i.radius=.7071067811865476+e,_i.applyMatrix4(t.matrixWorld),this.intersectsSphere(_i)}intersectsSphere(t){const e=this.planes,i=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(t){const e=this.planes;for(let i=0;i<6;i++){const s=e[i];if(wr.x=s.normal.x>0?t.max.x:t.min.x,wr.y=s.normal.y>0?t.max.y:t.min.y,wr.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(wr)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let i=0;i<6;i++)if(e[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Cn extends Bi{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new kt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const Qr=new z,ta=new z,Yc=new ve,Us=new tr,Rr=new Qs,Oa=new z,qc=new z;class Ri extends He{constructor(t=new ee,e=new Cn){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,i=[0];for(let s=1,r=e.count;s<r;s++)Qr.fromBufferAttribute(e,s-1),ta.fromBufferAttribute(e,s),i[s]=i[s-1],i[s]+=Qr.distanceTo(ta);t.setAttribute("lineDistance",new Pe(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const i=this.geometry,s=this.matrixWorld,r=t.params.Line.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Rr.copy(i.boundingSphere),Rr.applyMatrix4(s),Rr.radius+=r,t.ray.intersectsSphere(Rr)===!1)return;Yc.copy(s).invert(),Us.copy(t.ray).applyMatrix4(Yc);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,d=i.index,p=i.attributes.position;if(d!==null){const g=Math.max(0,a.start),x=Math.min(d.count,a.start+a.count);for(let v=g,h=x-1;v<h;v+=c){const f=d.getX(v),m=d.getX(v+1),_=Cr(this,t,Us,l,f,m,v);_&&e.push(_)}if(this.isLineLoop){const v=d.getX(x-1),h=d.getX(g),f=Cr(this,t,Us,l,v,h,x-1);f&&e.push(f)}}else{const g=Math.max(0,a.start),x=Math.min(p.count,a.start+a.count);for(let v=g,h=x-1;v<h;v+=c){const f=Cr(this,t,Us,l,v,v+1,v);f&&e.push(f)}if(this.isLineLoop){const v=Cr(this,t,Us,l,x-1,g,x-1);v&&e.push(v)}}}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function Cr(n,t,e,i,s,r,a){const o=n.geometry.attributes.position;if(Qr.fromBufferAttribute(o,s),ta.fromBufferAttribute(o,r),e.distanceSqToSegment(Qr,ta,Oa,qc)>i)return;Oa.applyMatrix4(n.matrixWorld);const c=t.ray.origin.distanceTo(Oa);if(!(c<t.near||c>t.far))return{distance:c,point:qc.clone().applyMatrix4(n.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:n}}const $c=new z,jc=new z;class lc extends Ri{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,i=[];for(let s=0,r=e.count;s<r;s+=2)$c.fromBufferAttribute(e,s),jc.fromBufferAttribute(e,s+1),i[s]=s===0?0:i[s-1],i[s+1]=i[s]+$c.distanceTo(jc);t.setAttribute("lineDistance",new Pe(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Pd extends Ri{constructor(t,e){super(t,e),this.isLineLoop=!0,this.type="LineLoop"}}class Ye extends Bi{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new kt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const Kc=new ve,zo=new tr,Pr=new Qs,Dr=new z;class Ze extends He{constructor(t=new ee,e=new Ye){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){const i=this.geometry,s=this.matrixWorld,r=t.params.Points.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Pr.copy(i.boundingSphere),Pr.applyMatrix4(s),Pr.radius+=r,t.ray.intersectsSphere(Pr)===!1)return;Kc.copy(s).invert(),zo.copy(t.ray).applyMatrix4(Kc);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=i.index,u=i.attributes.position;if(c!==null){const p=Math.max(0,a.start),g=Math.min(c.count,a.start+a.count);for(let x=p,v=g;x<v;x++){const h=c.getX(x);Dr.fromBufferAttribute(u,h),Zc(Dr,h,l,s,t,e,this)}}else{const p=Math.max(0,a.start),g=Math.min(u.count,a.start+a.count);for(let x=p,v=g;x<v;x++)Dr.fromBufferAttribute(u,x),Zc(Dr,x,l,s,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function Zc(n,t,e,i,s,r,a){const o=zo.distanceSqToPoint(n);if(o<e){const l=new z;zo.closestPointToPoint(n,l),l.applyMatrix4(i);const c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:a})}}class sa extends qe{constructor(t,e,i,s,r,a,o,l,c){super(t,e,i,s,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class dh extends qe{constructor(t,e,i=Ii,s,r,a,o=wn,l=wn,c,d=Xs,u=1){if(d!==Xs&&d!==Ys)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const p={width:t,height:e,depth:u};super(p,s,r,a,o,l,d,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new ac(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}class fh extends qe{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}}class hc extends ee{constructor(t=[],e=[],i=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:i,detail:s};const r=[],a=[];o(s),c(i),d(),this.setAttribute("position",new Pe(r,3)),this.setAttribute("normal",new Pe(r.slice(),3)),this.setAttribute("uv",new Pe(a,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function o(m){const _=new z,M=new z,y=new z;for(let E=0;E<e.length;E+=3)g(e[E+0],_),g(e[E+1],M),g(e[E+2],y),l(_,M,y,m)}function l(m,_,M,y){const E=y+1,C=[];for(let L=0;L<=E;L++){C[L]=[];const b=m.clone().lerp(M,L/E),S=_.clone().lerp(M,L/E),R=E-L;for(let A=0;A<=R;A++)A===0&&L===E?C[L][A]=b:C[L][A]=b.clone().lerp(S,A/R)}for(let L=0;L<E;L++)for(let b=0;b<2*(E-L)-1;b++){const S=Math.floor(b/2);b%2===0?(p(C[L][S+1]),p(C[L+1][S]),p(C[L][S])):(p(C[L][S+1]),p(C[L+1][S+1]),p(C[L+1][S]))}}function c(m){const _=new z;for(let M=0;M<r.length;M+=3)_.x=r[M+0],_.y=r[M+1],_.z=r[M+2],_.normalize().multiplyScalar(m),r[M+0]=_.x,r[M+1]=_.y,r[M+2]=_.z}function d(){const m=new z;for(let _=0;_<r.length;_+=3){m.x=r[_+0],m.y=r[_+1],m.z=r[_+2];const M=h(m)/2/Math.PI+.5,y=f(m)/Math.PI+.5;a.push(M,1-y)}x(),u()}function u(){for(let m=0;m<a.length;m+=6){const _=a[m+0],M=a[m+2],y=a[m+4],E=Math.max(_,M,y),C=Math.min(_,M,y);E>.9&&C<.1&&(_<.2&&(a[m+0]+=1),M<.2&&(a[m+2]+=1),y<.2&&(a[m+4]+=1))}}function p(m){r.push(m.x,m.y,m.z)}function g(m,_){const M=m*3;_.x=t[M+0],_.y=t[M+1],_.z=t[M+2]}function x(){const m=new z,_=new z,M=new z,y=new z,E=new Vt,C=new Vt,L=new Vt;for(let b=0,S=0;b<r.length;b+=9,S+=6){m.set(r[b+0],r[b+1],r[b+2]),_.set(r[b+3],r[b+4],r[b+5]),M.set(r[b+6],r[b+7],r[b+8]),E.set(a[S+0],a[S+1]),C.set(a[S+2],a[S+3]),L.set(a[S+4],a[S+5]),y.copy(m).add(_).add(M).divideScalar(3);const R=h(y);v(E,S+0,m,R),v(C,S+2,_,R),v(L,S+4,M,R)}}function v(m,_,M,y){y<0&&m.x===1&&(a[_]=m.x-1),M.x===0&&M.z===0&&(a[_]=y/2/Math.PI+.5)}function h(m){return Math.atan2(m.z,-m.x)}function f(m){return Math.atan2(-m.y,Math.sqrt(m.x*m.x+m.z*m.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new hc(t.vertices,t.indices,t.radius,t.details)}}class uc extends hc{constructor(t=1,e=0){const i=(1+Math.sqrt(5))/2,s=[-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new uc(t.radius,t.detail)}}class ra extends ee{constructor(t=1,e=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:i,heightSegments:s};const r=t/2,a=e/2,o=Math.floor(i),l=Math.floor(s),c=o+1,d=l+1,u=t/o,p=e/l,g=[],x=[],v=[],h=[];for(let f=0;f<d;f++){const m=f*p-a;for(let _=0;_<c;_++){const M=_*u-r;x.push(M,-m,0),v.push(0,0,1),h.push(_/o),h.push(1-f/l)}}for(let f=0;f<l;f++)for(let m=0;m<o;m++){const _=m+c*f,M=m+c*(f+1),y=m+1+c*(f+1),E=m+1+c*f;g.push(_,M,E),g.push(M,y,E)}this.setIndex(g),this.setAttribute("position",new Pe(x,3)),this.setAttribute("normal",new Pe(v,3)),this.setAttribute("uv",new Pe(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ra(t.width,t.height,t.widthSegments,t.heightSegments)}}class aa extends ee{constructor(t=1,e=32,i=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:i,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},e=Math.max(3,Math.floor(e)),i=Math.max(2,Math.floor(i));const l=Math.min(a+o,Math.PI);let c=0;const d=[],u=new z,p=new z,g=[],x=[],v=[],h=[];for(let f=0;f<=i;f++){const m=[],_=f/i;let M=0;f===0&&a===0?M=.5/e:f===i&&l===Math.PI&&(M=-.5/e);for(let y=0;y<=e;y++){const E=y/e;u.x=-t*Math.cos(s+E*r)*Math.sin(a+_*o),u.y=t*Math.cos(a+_*o),u.z=t*Math.sin(s+E*r)*Math.sin(a+_*o),x.push(u.x,u.y,u.z),p.copy(u).normalize(),v.push(p.x,p.y,p.z),h.push(E+M,1-_),m.push(c++)}d.push(m)}for(let f=0;f<i;f++)for(let m=0;m<e;m++){const _=d[f][m+1],M=d[f][m],y=d[f+1][m],E=d[f+1][m+1];(f!==0||a>0)&&g.push(_,M,E),(f!==i-1||l<Math.PI)&&g.push(M,y,E)}this.setIndex(g),this.setAttribute("position",new Pe(x,3)),this.setAttribute("normal",new Pe(v,3)),this.setAttribute("uv",new Pe(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new aa(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class dc extends ee{constructor(t=1,e=.4,i=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:i,tubularSegments:s,arc:r},i=Math.floor(i),s=Math.floor(s);const a=[],o=[],l=[],c=[],d=new z,u=new z,p=new z;for(let g=0;g<=i;g++)for(let x=0;x<=s;x++){const v=x/s*r,h=g/i*Math.PI*2;u.x=(t+e*Math.cos(h))*Math.cos(v),u.y=(t+e*Math.cos(h))*Math.sin(v),u.z=e*Math.sin(h),o.push(u.x,u.y,u.z),d.x=t*Math.cos(v),d.y=t*Math.sin(v),p.subVectors(u,d).normalize(),l.push(p.x,p.y,p.z),c.push(x/s),c.push(g/i)}for(let g=1;g<=i;g++)for(let x=1;x<=s;x++){const v=(s+1)*g+x-1,h=(s+1)*(g-1)+x-1,f=(s+1)*(g-1)+x,m=(s+1)*g+x;a.push(v,h,m),a.push(h,f,m)}this.setIndex(a),this.setAttribute("position",new Pe(o,3)),this.setAttribute("normal",new Pe(l,3)),this.setAttribute("uv",new Pe(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new dc(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class Dd extends ee{constructor(t=null){if(super(),this.type="WireframeGeometry",this.parameters={geometry:t},t!==null){const e=[],i=new Set,s=new z,r=new z;if(t.index!==null){const a=t.attributes.position,o=t.index;let l=t.groups;l.length===0&&(l=[{start:0,count:o.count,materialIndex:0}]);for(let c=0,d=l.length;c<d;++c){const u=l[c],p=u.start,g=u.count;for(let x=p,v=p+g;x<v;x+=3)for(let h=0;h<3;h++){const f=o.getX(x+h),m=o.getX(x+(h+1)%3);s.fromBufferAttribute(a,f),r.fromBufferAttribute(a,m),Jc(s,r,i)===!0&&(e.push(s.x,s.y,s.z),e.push(r.x,r.y,r.z))}}}else{const a=t.attributes.position;for(let o=0,l=a.count/3;o<l;o++)for(let c=0;c<3;c++){const d=3*o+c,u=3*o+(c+1)%3;s.fromBufferAttribute(a,d),r.fromBufferAttribute(a,u),Jc(s,r,i)===!0&&(e.push(s.x,s.y,s.z),e.push(r.x,r.y,r.z))}}this.setAttribute("position",new Pe(e,3))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}}function Jc(n,t,e){const i=`${n.x},${n.y},${n.z}-${t.x},${t.y},${t.z}`,s=`${t.x},${t.y},${t.z}-${n.x},${n.y},${n.z}`;return e.has(i)===!0||e.has(s)===!0?!1:(e.add(i),e.add(s),!0)}class Ld extends Bi{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Au,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class Id extends Bi{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}class Ud extends ch{constructor(t=-1,e=1,i=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=i,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,i,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=i-t,a=i+t,o=s+e,l=s-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,d=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=d*this.view.offsetY,l=o-d*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}class Fd extends dn{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}const Qc=new ve;class Nd{constructor(t,e,i=0,s=1/0){this.ray=new tr(t,e),this.near=i,this.far=s,this.camera=null,this.layers=new oc,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return Qc.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Qc),this}intersectObject(t,e=!0,i=[]){return ko(t,this,i,e),i.sort(tl),i}intersectObjects(t,e=!0,i=[]){for(let s=0,r=t.length;s<r;s++)ko(t[s],this,i,e);return i.sort(tl),i}}function tl(n,t){return n.distance-t.distance}function ko(n,t,e,i){let s=!0;if(n.layers.test(t.layers)&&n.raycast(t,e)===!1&&(s=!1),s===!0&&i===!0){const r=n.children;for(let a=0,o=r.length;a<o;a++)ko(r[a],t,e,!0)}}class el{constructor(t=1,e=0,i=0){this.radius=t,this.phi=e,this.theta=i}set(t,e,i){return this.radius=t,this.phi=e,this.theta=i,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=Zt(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,i){return this.radius=Math.sqrt(t*t+e*e+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,i),this.phi=Math.acos(Zt(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class Od extends Oi{constructor(t,e=null){super(),this.object=t,this.domElement=e,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(t){if(t===void 0){console.warn("THREE.Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=t}disconnect(){}dispose(){}update(){}}function nl(n,t,e,i){const s=Bd(i);switch(e){case Zl:return n*t;case Ql:return n*t/s.components*s.byteLength;case nc:return n*t/s.components*s.byteLength;case th:return n*t*2/s.components*s.byteLength;case ic:return n*t*2/s.components*s.byteLength;case Jl:return n*t*3/s.components*s.byteLength;case bn:return n*t*4/s.components*s.byteLength;case sc:return n*t*4/s.components*s.byteLength;case Hr:case Gr:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case Vr:case Wr:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case ho:case fo:return Math.max(n,16)*Math.max(t,8)/4;case lo:case uo:return Math.max(n,8)*Math.max(t,8)/2;case po:case mo:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case go:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case _o:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case xo:return Math.floor((n+4)/5)*Math.floor((t+3)/4)*16;case Mo:return Math.floor((n+4)/5)*Math.floor((t+4)/5)*16;case vo:return Math.floor((n+5)/6)*Math.floor((t+4)/5)*16;case yo:return Math.floor((n+5)/6)*Math.floor((t+5)/6)*16;case So:return Math.floor((n+7)/8)*Math.floor((t+4)/5)*16;case Eo:return Math.floor((n+7)/8)*Math.floor((t+5)/6)*16;case bo:return Math.floor((n+7)/8)*Math.floor((t+7)/8)*16;case To:return Math.floor((n+9)/10)*Math.floor((t+4)/5)*16;case Ao:return Math.floor((n+9)/10)*Math.floor((t+5)/6)*16;case wo:return Math.floor((n+9)/10)*Math.floor((t+7)/8)*16;case Ro:return Math.floor((n+9)/10)*Math.floor((t+9)/10)*16;case Co:return Math.floor((n+11)/12)*Math.floor((t+9)/10)*16;case Po:return Math.floor((n+11)/12)*Math.floor((t+11)/12)*16;case Do:case Lo:case Io:return Math.ceil(n/4)*Math.ceil(t/4)*16;case Uo:case Fo:return Math.ceil(n/4)*Math.ceil(t/4)*8;case No:case Oo:return Math.ceil(n/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Bd(n){switch(n){case Yn:case ql:return{byteLength:1,components:1};case Vs:case $l:case Zs:return{byteLength:2,components:1};case tc:case ec:return{byteLength:2,components:4};case Ii:case Qo:case Vn:return{byteLength:4,components:1};case jl:case Kl:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Jo}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Jo);function ph(){let n=null,t=!1,e=null,i=null;function s(r,a){e(r,a),i=n.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(i=n.requestAnimationFrame(s),t=!0)},stop:function(){n.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){n=r}}}function zd(n){const t=new WeakMap;function e(o,l){const c=o.array,d=o.usage,u=c.byteLength,p=n.createBuffer();n.bindBuffer(l,p),n.bufferData(l,c,d),o.onUploadCallback();let g;if(c instanceof Float32Array)g=n.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)g=n.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?g=n.HALF_FLOAT:g=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)g=n.SHORT;else if(c instanceof Uint32Array)g=n.UNSIGNED_INT;else if(c instanceof Int32Array)g=n.INT;else if(c instanceof Int8Array)g=n.BYTE;else if(c instanceof Uint8Array)g=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)g=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:p,type:g,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:u}}function i(o,l,c){const d=l.array,u=l.updateRanges;if(n.bindBuffer(c,o),u.length===0)n.bufferSubData(c,0,d);else{u.sort((g,x)=>g.start-x.start);let p=0;for(let g=1;g<u.length;g++){const x=u[p],v=u[g];v.start<=x.start+x.count+1?x.count=Math.max(x.count,v.start+v.count-x.start):(++p,u[p]=v)}u.length=p+1;for(let g=0,x=u.length;g<x;g++){const v=u[g];n.bufferSubData(c,v.start*d.BYTES_PER_ELEMENT,d,v.start,v.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=t.get(o);l&&(n.deleteBuffer(l.buffer),t.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const d=t.get(o);(!d||d.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=t.get(o);if(c===void 0)t.set(o,e(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,o,l),c.version=o.version}}return{get:s,remove:r,update:a}}var kd=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Hd=`#ifdef USE_ALPHAHASH
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
#endif`,Gd=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Vd=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Wd=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Xd=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Yd=`#ifdef USE_AOMAP
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
#endif`,qd=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,$d=`#ifdef USE_BATCHING
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
#endif`,jd=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Kd=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Zd=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Jd=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Qd=`#ifdef USE_IRIDESCENCE
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
#endif`,tf=`#ifdef USE_BUMPMAP
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
#endif`,ef=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,nf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,sf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,rf=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,af=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,of=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,cf=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,lf=`#if defined( USE_COLOR_ALPHA )
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
#endif`,hf=`#define PI 3.141592653589793
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
} // validated`,uf=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,df=`vec3 transformedNormal = objectNormal;
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
#endif`,ff=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,pf=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,mf=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,gf=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,_f="gl_FragColor = linearToOutputTexel( gl_FragColor );",xf=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Mf=`#ifdef USE_ENVMAP
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
#endif`,vf=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,yf=`#ifdef USE_ENVMAP
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
#endif`,Sf=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Ef=`#ifdef USE_ENVMAP
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
#endif`,bf=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Tf=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Af=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,wf=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Rf=`#ifdef USE_GRADIENTMAP
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
}`,Cf=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Pf=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Df=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Lf=`uniform bool receiveShadow;
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
#endif`,If=`#ifdef USE_ENVMAP
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
#endif`,Uf=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Ff=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Nf=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Of=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Bf=`PhysicalMaterial material;
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
#endif`,zf=`struct PhysicalMaterial {
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
}`,kf=`
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
#endif`,Hf=`#if defined( RE_IndirectDiffuse )
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
#endif`,Gf=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Vf=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Wf=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Xf=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Yf=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,qf=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,$f=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,jf=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Kf=`#if defined( USE_POINTS_UV )
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
#endif`,Zf=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Jf=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Qf=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,tp=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,ep=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,np=`#ifdef USE_MORPHTARGETS
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
#endif`,ip=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,sp=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,rp=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,ap=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,op=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,cp=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,lp=`#ifdef USE_NORMALMAP
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
#endif`,hp=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,up=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,dp=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,fp=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,pp=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,mp=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,gp=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,_p=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,xp=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Mp=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,vp=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,yp=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Sp=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Ep=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,bp=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Tp=`float getShadowMask() {
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
}`,Ap=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,wp=`#ifdef USE_SKINNING
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
#endif`,Rp=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Cp=`#ifdef USE_SKINNING
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
#endif`,Pp=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Dp=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Lp=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Ip=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Up=`#ifdef USE_TRANSMISSION
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
#endif`,Fp=`#ifdef USE_TRANSMISSION
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
#endif`,Np=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Op=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Bp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,zp=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const kp=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Hp=`uniform sampler2D t2D;
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
}`,Gp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Vp=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Wp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Xp=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Yp=`#include <common>
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
}`,qp=`#if DEPTH_PACKING == 3200
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
}`,$p=`#define DISTANCE
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
}`,jp=`#define DISTANCE
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
}`,Kp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Zp=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Jp=`uniform float scale;
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
}`,Qp=`uniform vec3 diffuse;
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
}`,tm=`#include <common>
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
}`,em=`uniform vec3 diffuse;
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
}`,nm=`#define LAMBERT
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
}`,im=`#define LAMBERT
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
}`,sm=`#define MATCAP
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
}`,rm=`#define MATCAP
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
}`,am=`#define NORMAL
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
}`,om=`#define NORMAL
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
}`,cm=`#define PHONG
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
}`,lm=`#define PHONG
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
}`,hm=`#define STANDARD
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
}`,um=`#define STANDARD
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
}`,dm=`#define TOON
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
}`,fm=`#define TOON
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
}`,pm=`uniform float size;
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
}`,mm=`uniform vec3 diffuse;
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
}`,gm=`#include <common>
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
}`,_m=`uniform vec3 color;
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
}`,xm=`uniform float rotation;
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
}`,Mm=`uniform vec3 diffuse;
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
}`,jt={alphahash_fragment:kd,alphahash_pars_fragment:Hd,alphamap_fragment:Gd,alphamap_pars_fragment:Vd,alphatest_fragment:Wd,alphatest_pars_fragment:Xd,aomap_fragment:Yd,aomap_pars_fragment:qd,batching_pars_vertex:$d,batching_vertex:jd,begin_vertex:Kd,beginnormal_vertex:Zd,bsdfs:Jd,iridescence_fragment:Qd,bumpmap_pars_fragment:tf,clipping_planes_fragment:ef,clipping_planes_pars_fragment:nf,clipping_planes_pars_vertex:sf,clipping_planes_vertex:rf,color_fragment:af,color_pars_fragment:of,color_pars_vertex:cf,color_vertex:lf,common:hf,cube_uv_reflection_fragment:uf,defaultnormal_vertex:df,displacementmap_pars_vertex:ff,displacementmap_vertex:pf,emissivemap_fragment:mf,emissivemap_pars_fragment:gf,colorspace_fragment:_f,colorspace_pars_fragment:xf,envmap_fragment:Mf,envmap_common_pars_fragment:vf,envmap_pars_fragment:yf,envmap_pars_vertex:Sf,envmap_physical_pars_fragment:If,envmap_vertex:Ef,fog_vertex:bf,fog_pars_vertex:Tf,fog_fragment:Af,fog_pars_fragment:wf,gradientmap_pars_fragment:Rf,lightmap_pars_fragment:Cf,lights_lambert_fragment:Pf,lights_lambert_pars_fragment:Df,lights_pars_begin:Lf,lights_toon_fragment:Uf,lights_toon_pars_fragment:Ff,lights_phong_fragment:Nf,lights_phong_pars_fragment:Of,lights_physical_fragment:Bf,lights_physical_pars_fragment:zf,lights_fragment_begin:kf,lights_fragment_maps:Hf,lights_fragment_end:Gf,logdepthbuf_fragment:Vf,logdepthbuf_pars_fragment:Wf,logdepthbuf_pars_vertex:Xf,logdepthbuf_vertex:Yf,map_fragment:qf,map_pars_fragment:$f,map_particle_fragment:jf,map_particle_pars_fragment:Kf,metalnessmap_fragment:Zf,metalnessmap_pars_fragment:Jf,morphinstance_vertex:Qf,morphcolor_vertex:tp,morphnormal_vertex:ep,morphtarget_pars_vertex:np,morphtarget_vertex:ip,normal_fragment_begin:sp,normal_fragment_maps:rp,normal_pars_fragment:ap,normal_pars_vertex:op,normal_vertex:cp,normalmap_pars_fragment:lp,clearcoat_normal_fragment_begin:hp,clearcoat_normal_fragment_maps:up,clearcoat_pars_fragment:dp,iridescence_pars_fragment:fp,opaque_fragment:pp,packing:mp,premultiplied_alpha_fragment:gp,project_vertex:_p,dithering_fragment:xp,dithering_pars_fragment:Mp,roughnessmap_fragment:vp,roughnessmap_pars_fragment:yp,shadowmap_pars_fragment:Sp,shadowmap_pars_vertex:Ep,shadowmap_vertex:bp,shadowmask_pars_fragment:Tp,skinbase_vertex:Ap,skinning_pars_vertex:wp,skinning_vertex:Rp,skinnormal_vertex:Cp,specularmap_fragment:Pp,specularmap_pars_fragment:Dp,tonemapping_fragment:Lp,tonemapping_pars_fragment:Ip,transmission_fragment:Up,transmission_pars_fragment:Fp,uv_pars_fragment:Np,uv_pars_vertex:Op,uv_vertex:Bp,worldpos_vertex:zp,background_vert:kp,background_frag:Hp,backgroundCube_vert:Gp,backgroundCube_frag:Vp,cube_vert:Wp,cube_frag:Xp,depth_vert:Yp,depth_frag:qp,distanceRGBA_vert:$p,distanceRGBA_frag:jp,equirect_vert:Kp,equirect_frag:Zp,linedashed_vert:Jp,linedashed_frag:Qp,meshbasic_vert:tm,meshbasic_frag:em,meshlambert_vert:nm,meshlambert_frag:im,meshmatcap_vert:sm,meshmatcap_frag:rm,meshnormal_vert:am,meshnormal_frag:om,meshphong_vert:cm,meshphong_frag:lm,meshphysical_vert:hm,meshphysical_frag:um,meshtoon_vert:dm,meshtoon_frag:fm,points_vert:pm,points_frag:mm,shadow_vert:gm,shadow_frag:_m,sprite_vert:xm,sprite_frag:Mm},At={common:{diffuse:{value:new kt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new $t},alphaMap:{value:null},alphaMapTransform:{value:new $t},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new $t}},envmap:{envMap:{value:null},envMapRotation:{value:new $t},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new $t}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new $t}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new $t},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new $t},normalScale:{value:new Vt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new $t},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new $t}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new $t}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new $t}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new kt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new kt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new $t},alphaTest:{value:0},uvTransform:{value:new $t}},sprite:{diffuse:{value:new kt(16777215)},opacity:{value:1},center:{value:new Vt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new $t},alphaMap:{value:null},alphaMapTransform:{value:new $t},alphaTest:{value:0}}},Pn={basic:{uniforms:We([At.common,At.specularmap,At.envmap,At.aomap,At.lightmap,At.fog]),vertexShader:jt.meshbasic_vert,fragmentShader:jt.meshbasic_frag},lambert:{uniforms:We([At.common,At.specularmap,At.envmap,At.aomap,At.lightmap,At.emissivemap,At.bumpmap,At.normalmap,At.displacementmap,At.fog,At.lights,{emissive:{value:new kt(0)}}]),vertexShader:jt.meshlambert_vert,fragmentShader:jt.meshlambert_frag},phong:{uniforms:We([At.common,At.specularmap,At.envmap,At.aomap,At.lightmap,At.emissivemap,At.bumpmap,At.normalmap,At.displacementmap,At.fog,At.lights,{emissive:{value:new kt(0)},specular:{value:new kt(1118481)},shininess:{value:30}}]),vertexShader:jt.meshphong_vert,fragmentShader:jt.meshphong_frag},standard:{uniforms:We([At.common,At.envmap,At.aomap,At.lightmap,At.emissivemap,At.bumpmap,At.normalmap,At.displacementmap,At.roughnessmap,At.metalnessmap,At.fog,At.lights,{emissive:{value:new kt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:jt.meshphysical_vert,fragmentShader:jt.meshphysical_frag},toon:{uniforms:We([At.common,At.aomap,At.lightmap,At.emissivemap,At.bumpmap,At.normalmap,At.displacementmap,At.gradientmap,At.fog,At.lights,{emissive:{value:new kt(0)}}]),vertexShader:jt.meshtoon_vert,fragmentShader:jt.meshtoon_frag},matcap:{uniforms:We([At.common,At.bumpmap,At.normalmap,At.displacementmap,At.fog,{matcap:{value:null}}]),vertexShader:jt.meshmatcap_vert,fragmentShader:jt.meshmatcap_frag},points:{uniforms:We([At.points,At.fog]),vertexShader:jt.points_vert,fragmentShader:jt.points_frag},dashed:{uniforms:We([At.common,At.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:jt.linedashed_vert,fragmentShader:jt.linedashed_frag},depth:{uniforms:We([At.common,At.displacementmap]),vertexShader:jt.depth_vert,fragmentShader:jt.depth_frag},normal:{uniforms:We([At.common,At.bumpmap,At.normalmap,At.displacementmap,{opacity:{value:1}}]),vertexShader:jt.meshnormal_vert,fragmentShader:jt.meshnormal_frag},sprite:{uniforms:We([At.sprite,At.fog]),vertexShader:jt.sprite_vert,fragmentShader:jt.sprite_frag},background:{uniforms:{uvTransform:{value:new $t},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:jt.background_vert,fragmentShader:jt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new $t}},vertexShader:jt.backgroundCube_vert,fragmentShader:jt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:jt.cube_vert,fragmentShader:jt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:jt.equirect_vert,fragmentShader:jt.equirect_frag},distanceRGBA:{uniforms:We([At.common,At.displacementmap,{referencePosition:{value:new z},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:jt.distanceRGBA_vert,fragmentShader:jt.distanceRGBA_frag},shadow:{uniforms:We([At.lights,At.fog,{color:{value:new kt(0)},opacity:{value:1}}]),vertexShader:jt.shadow_vert,fragmentShader:jt.shadow_frag}};Pn.physical={uniforms:We([Pn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new $t},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new $t},clearcoatNormalScale:{value:new Vt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new $t},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new $t},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new $t},sheen:{value:0},sheenColor:{value:new kt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new $t},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new $t},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new $t},transmissionSamplerSize:{value:new Vt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new $t},attenuationDistance:{value:0},attenuationColor:{value:new kt(0)},specularColor:{value:new kt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new $t},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new $t},anisotropyVector:{value:new Vt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new $t}}]),vertexShader:jt.meshphysical_vert,fragmentShader:jt.meshphysical_frag};const Lr={r:0,b:0,g:0},xi=new qn,vm=new ve;function ym(n,t,e,i,s,r,a){const o=new kt(0);let l=r===!0?0:1,c,d,u=null,p=0,g=null;function x(_){let M=_.isScene===!0?_.background:null;return M&&M.isTexture&&(M=(_.backgroundBlurriness>0?e:t).get(M)),M}function v(_){let M=!1;const y=x(_);y===null?f(o,l):y&&y.isColor&&(f(y,1),M=!0);const E=n.xr.getEnvironmentBlendMode();E==="additive"?i.buffers.color.setClear(0,0,0,1,a):E==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,a),(n.autoClear||M)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function h(_,M){const y=x(M);y&&(y.isCubeTexture||y.mapping===ia)?(d===void 0&&(d=new pn(new nr(1,1,1),new ui({name:"BackgroundCubeMaterial",uniforms:ys(Pn.backgroundCube.uniforms),vertexShader:Pn.backgroundCube.vertexShader,fragmentShader:Pn.backgroundCube.fragmentShader,side:Je,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),d.geometry.deleteAttribute("normal"),d.geometry.deleteAttribute("uv"),d.onBeforeRender=function(E,C,L){this.matrixWorld.copyPosition(L.matrixWorld)},Object.defineProperty(d.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(d)),xi.copy(M.backgroundRotation),xi.x*=-1,xi.y*=-1,xi.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(xi.y*=-1,xi.z*=-1),d.material.uniforms.envMap.value=y,d.material.uniforms.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,d.material.uniforms.backgroundBlurriness.value=M.backgroundBlurriness,d.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,d.material.uniforms.backgroundRotation.value.setFromMatrix4(vm.makeRotationFromEuler(xi)),d.material.toneMapped=he.getTransfer(y.colorSpace)!==pe,(u!==y||p!==y.version||g!==n.toneMapping)&&(d.material.needsUpdate=!0,u=y,p=y.version,g=n.toneMapping),d.layers.enableAll(),_.unshift(d,d.geometry,d.material,0,0,null)):y&&y.isTexture&&(c===void 0&&(c=new pn(new ra(2,2),new ui({name:"BackgroundMaterial",uniforms:ys(Pn.background.uniforms),vertexShader:Pn.background.vertexShader,fragmentShader:Pn.background.fragmentShader,side:li,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=y,c.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,c.material.toneMapped=he.getTransfer(y.colorSpace)!==pe,y.matrixAutoUpdate===!0&&y.updateMatrix(),c.material.uniforms.uvTransform.value.copy(y.matrix),(u!==y||p!==y.version||g!==n.toneMapping)&&(c.material.needsUpdate=!0,u=y,p=y.version,g=n.toneMapping),c.layers.enableAll(),_.unshift(c,c.geometry,c.material,0,0,null))}function f(_,M){_.getRGB(Lr,oh(n)),i.buffers.color.setClear(Lr.r,Lr.g,Lr.b,M,a)}function m(){d!==void 0&&(d.geometry.dispose(),d.material.dispose(),d=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(_,M=1){o.set(_),l=M,f(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(_){l=_,f(o,l)},render:v,addToRenderList:h,dispose:m}}function Sm(n,t){const e=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=p(null);let r=s,a=!1;function o(S,R,A,P,F){let U=!1;const O=u(P,A,R);r!==O&&(r=O,c(r.object)),U=g(S,P,A,F),U&&x(S,P,A,F),F!==null&&t.update(F,n.ELEMENT_ARRAY_BUFFER),(U||a)&&(a=!1,M(S,R,A,P),F!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get(F).buffer))}function l(){return n.createVertexArray()}function c(S){return n.bindVertexArray(S)}function d(S){return n.deleteVertexArray(S)}function u(S,R,A){const P=A.wireframe===!0;let F=i[S.id];F===void 0&&(F={},i[S.id]=F);let U=F[R.id];U===void 0&&(U={},F[R.id]=U);let O=U[P];return O===void 0&&(O=p(l()),U[P]=O),O}function p(S){const R=[],A=[],P=[];for(let F=0;F<e;F++)R[F]=0,A[F]=0,P[F]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:R,enabledAttributes:A,attributeDivisors:P,object:S,attributes:{},index:null}}function g(S,R,A,P){const F=r.attributes,U=R.attributes;let O=0;const W=A.getAttributes();for(const V in W)if(W[V].location>=0){const K=F[V];let et=U[V];if(et===void 0&&(V==="instanceMatrix"&&S.instanceMatrix&&(et=S.instanceMatrix),V==="instanceColor"&&S.instanceColor&&(et=S.instanceColor)),K===void 0||K.attribute!==et||et&&K.data!==et.data)return!0;O++}return r.attributesNum!==O||r.index!==P}function x(S,R,A,P){const F={},U=R.attributes;let O=0;const W=A.getAttributes();for(const V in W)if(W[V].location>=0){let K=U[V];K===void 0&&(V==="instanceMatrix"&&S.instanceMatrix&&(K=S.instanceMatrix),V==="instanceColor"&&S.instanceColor&&(K=S.instanceColor));const et={};et.attribute=K,K&&K.data&&(et.data=K.data),F[V]=et,O++}r.attributes=F,r.attributesNum=O,r.index=P}function v(){const S=r.newAttributes;for(let R=0,A=S.length;R<A;R++)S[R]=0}function h(S){f(S,0)}function f(S,R){const A=r.newAttributes,P=r.enabledAttributes,F=r.attributeDivisors;A[S]=1,P[S]===0&&(n.enableVertexAttribArray(S),P[S]=1),F[S]!==R&&(n.vertexAttribDivisor(S,R),F[S]=R)}function m(){const S=r.newAttributes,R=r.enabledAttributes;for(let A=0,P=R.length;A<P;A++)R[A]!==S[A]&&(n.disableVertexAttribArray(A),R[A]=0)}function _(S,R,A,P,F,U,O){O===!0?n.vertexAttribIPointer(S,R,A,F,U):n.vertexAttribPointer(S,R,A,P,F,U)}function M(S,R,A,P){v();const F=P.attributes,U=A.getAttributes(),O=R.defaultAttributeValues;for(const W in U){const V=U[W];if(V.location>=0){let j=F[W];if(j===void 0&&(W==="instanceMatrix"&&S.instanceMatrix&&(j=S.instanceMatrix),W==="instanceColor"&&S.instanceColor&&(j=S.instanceColor)),j!==void 0){const K=j.normalized,et=j.itemSize,H=t.get(j);if(H===void 0)continue;const G=H.buffer,xt=H.type,pt=H.bytesPerElement,Y=xt===n.INT||xt===n.UNSIGNED_INT||j.gpuType===Qo;if(j.isInterleavedBufferAttribute){const Z=j.data,_t=Z.stride,Et=j.offset;if(Z.isInstancedInterleavedBuffer){for(let St=0;St<V.locationSize;St++)f(V.location+St,Z.meshPerAttribute);S.isInstancedMesh!==!0&&P._maxInstanceCount===void 0&&(P._maxInstanceCount=Z.meshPerAttribute*Z.count)}else for(let St=0;St<V.locationSize;St++)h(V.location+St);n.bindBuffer(n.ARRAY_BUFFER,G);for(let St=0;St<V.locationSize;St++)_(V.location+St,et/V.locationSize,xt,K,_t*pt,(Et+et/V.locationSize*St)*pt,Y)}else{if(j.isInstancedBufferAttribute){for(let Z=0;Z<V.locationSize;Z++)f(V.location+Z,j.meshPerAttribute);S.isInstancedMesh!==!0&&P._maxInstanceCount===void 0&&(P._maxInstanceCount=j.meshPerAttribute*j.count)}else for(let Z=0;Z<V.locationSize;Z++)h(V.location+Z);n.bindBuffer(n.ARRAY_BUFFER,G);for(let Z=0;Z<V.locationSize;Z++)_(V.location+Z,et/V.locationSize,xt,K,et*pt,et/V.locationSize*Z*pt,Y)}}else if(O!==void 0){const K=O[W];if(K!==void 0)switch(K.length){case 2:n.vertexAttrib2fv(V.location,K);break;case 3:n.vertexAttrib3fv(V.location,K);break;case 4:n.vertexAttrib4fv(V.location,K);break;default:n.vertexAttrib1fv(V.location,K)}}}}m()}function y(){L();for(const S in i){const R=i[S];for(const A in R){const P=R[A];for(const F in P)d(P[F].object),delete P[F];delete R[A]}delete i[S]}}function E(S){if(i[S.id]===void 0)return;const R=i[S.id];for(const A in R){const P=R[A];for(const F in P)d(P[F].object),delete P[F];delete R[A]}delete i[S.id]}function C(S){for(const R in i){const A=i[R];if(A[S.id]===void 0)continue;const P=A[S.id];for(const F in P)d(P[F].object),delete P[F];delete A[S.id]}}function L(){b(),a=!0,r!==s&&(r=s,c(r.object))}function b(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:L,resetDefaultState:b,dispose:y,releaseStatesOfGeometry:E,releaseStatesOfProgram:C,initAttributes:v,enableAttribute:h,disableUnusedAttributes:m}}function Em(n,t,e){let i;function s(c){i=c}function r(c,d){n.drawArrays(i,c,d),e.update(d,i,1)}function a(c,d,u){u!==0&&(n.drawArraysInstanced(i,c,d,u),e.update(d,i,u))}function o(c,d,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,d,0,u);let g=0;for(let x=0;x<u;x++)g+=d[x];e.update(g,i,1)}function l(c,d,u,p){if(u===0)return;const g=t.get("WEBGL_multi_draw");if(g===null)for(let x=0;x<c.length;x++)a(c[x],d[x],p[x]);else{g.multiDrawArraysInstancedWEBGL(i,c,0,d,0,p,0,u);let x=0;for(let v=0;v<u;v++)x+=d[v]*p[v];e.update(x,i,1)}}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function bm(n,t,e,i){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){const C=t.get("EXT_texture_filter_anisotropic");s=n.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(C){return!(C!==bn&&i.convert(C)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(C){const L=C===Zs&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(C!==Yn&&i.convert(C)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&C!==Vn&&!L)}function l(C){if(C==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp";const d=l(c);d!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",d,"instead."),c=d);const u=e.logarithmicDepthBuffer===!0,p=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),g=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),x=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=n.getParameter(n.MAX_TEXTURE_SIZE),h=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),f=n.getParameter(n.MAX_VERTEX_ATTRIBS),m=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),_=n.getParameter(n.MAX_VARYING_VECTORS),M=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),y=x>0,E=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:u,reversedDepthBuffer:p,maxTextures:g,maxVertexTextures:x,maxTextureSize:v,maxCubemapSize:h,maxAttributes:f,maxVertexUniforms:m,maxVaryings:_,maxFragmentUniforms:M,vertexTextures:y,maxSamples:E}}function Tm(n){const t=this;let e=null,i=0,s=!1,r=!1;const a=new ti,o=new $t,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,p){const g=u.length!==0||p||i!==0||s;return s=p,i=u.length,g},this.beginShadows=function(){r=!0,d(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,p){e=d(u,p,0)},this.setState=function(u,p,g){const x=u.clippingPlanes,v=u.clipIntersection,h=u.clipShadows,f=n.get(u);if(!s||x===null||x.length===0||r&&!h)r?d(null):c();else{const m=r?0:i,_=m*4;let M=f.clippingState||null;l.value=M,M=d(x,p,_,g);for(let y=0;y!==_;++y)M[y]=e[y];f.clippingState=M,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=m}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function d(u,p,g,x){const v=u!==null?u.length:0;let h=null;if(v!==0){if(h=l.value,x!==!0||h===null){const f=g+v*4,m=p.matrixWorldInverse;o.getNormalMatrix(m),(h===null||h.length<f)&&(h=new Float32Array(f));for(let _=0,M=g;_!==v;++_,M+=4)a.copy(u[_]).applyMatrix4(m,o),a.normal.toArray(h,M),h[M+3]=a.constant}l.value=h,l.needsUpdate=!0}return t.numPlanes=v,t.numIntersection=0,h}}function Am(n){let t=new WeakMap;function e(a,o){return o===ro?a.mapping=xs:o===ao&&(a.mapping=Ms),a}function i(a){if(a&&a.isTexture){const o=a.mapping;if(o===ro||o===ao)if(t.has(a)){const l=t.get(a).texture;return e(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new Ed(l.height);return c.fromEquirectangularTexture(n,a),t.set(a,c),a.addEventListener("dispose",s),e(c.texture,a.mapping)}else return null}}return a}function s(a){const o=a.target;o.removeEventListener("dispose",s);const l=t.get(o);l!==void 0&&(t.delete(o),l.dispose())}function r(){t=new WeakMap}return{get:i,dispose:r}}const hs=4,il=[.125,.215,.35,.446,.526,.582],Ti=20,Ba=new Ud,sl=new kt;let za=null,ka=0,Ha=0,Ga=!1;const yi=(1+Math.sqrt(5))/2,as=1/yi,rl=[new z(-yi,as,0),new z(yi,as,0),new z(-as,0,yi),new z(as,0,yi),new z(0,yi,-as),new z(0,yi,as),new z(-1,1,-1),new z(1,1,-1),new z(-1,1,1),new z(1,1,1)],wm=new z;class al{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,i=.1,s=100,r={}){const{size:a=256,position:o=wm}=r;za=this._renderer.getRenderTarget(),ka=this._renderer.getActiveCubeFace(),Ha=this._renderer.getActiveMipmapLevel(),Ga=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(t,i,s,l,o),e>0&&this._blur(l,0,0,e),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=ll(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=cl(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(za,ka,Ha),this._renderer.xr.enabled=Ga,t.scissorTest=!1,Ir(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===xs||t.mapping===Ms?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),za=this._renderer.getRenderTarget(),ka=this._renderer.getActiveCubeFace(),Ha=this._renderer.getActiveMipmapLevel(),Ga=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=e||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,i={magFilter:En,minFilter:En,generateMipmaps:!1,type:Zs,format:bn,colorSpace:vs,depthBuffer:!1},s=ol(t,e,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=ol(t,e,i);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Rm(r)),this._blurMaterial=Cm(r,t,e)}return s}_compileMaterial(t){const e=new pn(this._lodPlanes[0],t);this._renderer.compile(e,Ba)}_sceneToCubeUV(t,e,i,s,r){const l=new dn(90,1,e,i),c=[1,-1,1,1,1,1],d=[1,1,1,-1,-1,-1],u=this._renderer,p=u.autoClear,g=u.toneMapping;u.getClearColor(sl),u.toneMapping=ai,u.autoClear=!1,u.state.buffers.depth.getReversed()&&(u.setRenderTarget(s),u.clearDepth(),u.setRenderTarget(null));const v=new er({name:"PMREM.Background",side:Je,depthWrite:!1,depthTest:!1}),h=new pn(new nr,v);let f=!1;const m=t.background;m?m.isColor&&(v.color.copy(m),t.background=null,f=!0):(v.color.copy(sl),f=!0);for(let _=0;_<6;_++){const M=_%3;M===0?(l.up.set(0,c[_],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+d[_],r.y,r.z)):M===1?(l.up.set(0,0,c[_]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+d[_],r.z)):(l.up.set(0,c[_],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+d[_]));const y=this._cubeSize;Ir(s,M*y,_>2?y:0,y,y),u.setRenderTarget(s),f&&u.render(h,l),u.render(t,l)}h.geometry.dispose(),h.material.dispose(),u.toneMapping=g,u.autoClear=p,t.background=m}_textureToCubeUV(t,e){const i=this._renderer,s=t.mapping===xs||t.mapping===Ms;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=ll()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=cl());const r=s?this._cubemapMaterial:this._equirectMaterial,a=new pn(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=t;const l=this._cubeSize;Ir(e,0,0,3*l,2*l),i.setRenderTarget(e),i.render(a,Ba)}_applyPMREM(t){const e=this._renderer,i=e.autoClear;e.autoClear=!1;const s=this._lodPlanes.length;for(let r=1;r<s;r++){const a=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=rl[(s-r-1)%rl.length];this._blur(t,r-1,r,a,o)}e.autoClear=i}_blur(t,e,i,s,r){const a=this._pingPongRenderTarget;this._halfBlur(t,a,e,i,s,"latitudinal",r),this._halfBlur(a,t,i,i,s,"longitudinal",r)}_halfBlur(t,e,i,s,r,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const d=3,u=new pn(this._lodPlanes[s],c),p=c.uniforms,g=this._sizeLods[i]-1,x=isFinite(r)?Math.PI/(2*g):2*Math.PI/(2*Ti-1),v=r/x,h=isFinite(r)?1+Math.floor(d*v):Ti;h>Ti&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${h} samples when the maximum is set to ${Ti}`);const f=[];let m=0;for(let C=0;C<Ti;++C){const L=C/v,b=Math.exp(-L*L/2);f.push(b),C===0?m+=b:C<h&&(m+=2*b)}for(let C=0;C<f.length;C++)f[C]=f[C]/m;p.envMap.value=t.texture,p.samples.value=h,p.weights.value=f,p.latitudinal.value=a==="latitudinal",o&&(p.poleAxis.value=o);const{_lodMax:_}=this;p.dTheta.value=x,p.mipInt.value=_-i;const M=this._sizeLods[s],y=3*M*(s>_-hs?s-_+hs:0),E=4*(this._cubeSize-M);Ir(e,y,E,3*M,2*M),l.setRenderTarget(e),l.render(u,Ba)}}function Rm(n){const t=[],e=[],i=[];let s=n;const r=n-hs+1+il.length;for(let a=0;a<r;a++){const o=Math.pow(2,s);e.push(o);let l=1/o;a>n-hs?l=il[a-n+hs-1]:a===0&&(l=0),i.push(l);const c=1/(o-2),d=-c,u=1+c,p=[d,d,u,d,u,u,d,d,u,u,d,u],g=6,x=6,v=3,h=2,f=1,m=new Float32Array(v*x*g),_=new Float32Array(h*x*g),M=new Float32Array(f*x*g);for(let E=0;E<g;E++){const C=E%3*2/3-1,L=E>2?0:-1,b=[C,L,0,C+2/3,L,0,C+2/3,L+1,0,C,L,0,C+2/3,L+1,0,C,L+1,0];m.set(b,v*x*E),_.set(p,h*x*E);const S=[E,E,E,E,E,E];M.set(S,f*x*E)}const y=new ee;y.setAttribute("position",new Kt(m,v)),y.setAttribute("uv",new Kt(_,h)),y.setAttribute("faceIndex",new Kt(M,f)),t.push(y),s>hs&&s--}return{lodPlanes:t,sizeLods:e,sigmas:i}}function ol(n,t,e){const i=new Ui(n,t,e);return i.texture.mapping=ia,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Ir(n,t,e,i,s){n.viewport.set(t,e,i,s),n.scissor.set(t,e,i,s)}function Cm(n,t,e){const i=new Float32Array(Ti),s=new z(0,1,0);return new ui({name:"SphericalGaussianBlur",defines:{n:Ti,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:fc(),fragmentShader:`

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
		`,blending:ri,depthTest:!1,depthWrite:!1})}function cl(){return new ui({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:fc(),fragmentShader:`

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
		`,blending:ri,depthTest:!1,depthWrite:!1})}function ll(){return new ui({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:fc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ri,depthTest:!1,depthWrite:!1})}function fc(){return`

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
	`}function Pm(n){let t=new WeakMap,e=null;function i(o){if(o&&o.isTexture){const l=o.mapping,c=l===ro||l===ao,d=l===xs||l===Ms;if(c||d){let u=t.get(o);const p=u!==void 0?u.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==p)return e===null&&(e=new al(n)),u=c?e.fromEquirectangular(o,u):e.fromCubemap(o,u),u.texture.pmremVersion=o.pmremVersion,t.set(o,u),u.texture;if(u!==void 0)return u.texture;{const g=o.image;return c&&g&&g.height>0||d&&g&&s(g)?(e===null&&(e=new al(n)),u=c?e.fromEquirectangular(o):e.fromCubemap(o),u.texture.pmremVersion=o.pmremVersion,t.set(o,u),o.addEventListener("dispose",r),u.texture):null}}}return o}function s(o){let l=0;const c=6;for(let d=0;d<c;d++)o[d]!==void 0&&l++;return l===c}function r(o){const l=o.target;l.removeEventListener("dispose",r);const c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function a(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:i,dispose:a}}function Dm(n){const t={};function e(i){if(t[i]!==void 0)return t[i];let s;switch(i){case"WEBGL_depth_texture":s=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=n.getExtension(i)}return t[i]=s,s}return{has:function(i){return e(i)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(i){const s=e(i);return s===null&&$s("THREE.WebGLRenderer: "+i+" extension not supported."),s}}}function Lm(n,t,e,i){const s={},r=new WeakMap;function a(u){const p=u.target;p.index!==null&&t.remove(p.index);for(const x in p.attributes)t.remove(p.attributes[x]);p.removeEventListener("dispose",a),delete s[p.id];const g=r.get(p);g&&(t.remove(g),r.delete(p)),i.releaseStatesOfGeometry(p),p.isInstancedBufferGeometry===!0&&delete p._maxInstanceCount,e.memory.geometries--}function o(u,p){return s[p.id]===!0||(p.addEventListener("dispose",a),s[p.id]=!0,e.memory.geometries++),p}function l(u){const p=u.attributes;for(const g in p)t.update(p[g],n.ARRAY_BUFFER)}function c(u){const p=[],g=u.index,x=u.attributes.position;let v=0;if(g!==null){const m=g.array;v=g.version;for(let _=0,M=m.length;_<M;_+=3){const y=m[_+0],E=m[_+1],C=m[_+2];p.push(y,E,E,C,C,y)}}else if(x!==void 0){const m=x.array;v=x.version;for(let _=0,M=m.length/3-1;_<M;_+=3){const y=_+0,E=_+1,C=_+2;p.push(y,E,E,C,C,y)}}else return;const h=new(nh(p)?ah:rh)(p,1);h.version=v;const f=r.get(u);f&&t.remove(f),r.set(u,h)}function d(u){const p=r.get(u);if(p){const g=u.index;g!==null&&p.version<g.version&&c(u)}else c(u);return r.get(u)}return{get:o,update:l,getWireframeAttribute:d}}function Im(n,t,e){let i;function s(p){i=p}let r,a;function o(p){r=p.type,a=p.bytesPerElement}function l(p,g){n.drawElements(i,g,r,p*a),e.update(g,i,1)}function c(p,g,x){x!==0&&(n.drawElementsInstanced(i,g,r,p*a,x),e.update(g,i,x))}function d(p,g,x){if(x===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,g,0,r,p,0,x);let h=0;for(let f=0;f<x;f++)h+=g[f];e.update(h,i,1)}function u(p,g,x,v){if(x===0)return;const h=t.get("WEBGL_multi_draw");if(h===null)for(let f=0;f<p.length;f++)c(p[f]/a,g[f],v[f]);else{h.multiDrawElementsInstancedWEBGL(i,g,0,r,p,0,v,0,x);let f=0;for(let m=0;m<x;m++)f+=g[m]*v[m];e.update(f,i,1)}}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=d,this.renderMultiDrawInstances=u}function Um(n){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,a,o){switch(e.calls++,a){case n.TRIANGLES:e.triangles+=o*(r/3);break;case n.LINES:e.lines+=o*(r/2);break;case n.LINE_STRIP:e.lines+=o*(r-1);break;case n.LINE_LOOP:e.lines+=o*r;break;case n.POINTS:e.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:i}}function Fm(n,t,e){const i=new WeakMap,s=new be;function r(a,o,l){const c=a.morphTargetInfluences,d=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=d!==void 0?d.length:0;let p=i.get(o);if(p===void 0||p.count!==u){let S=function(){L.dispose(),i.delete(o),o.removeEventListener("dispose",S)};var g=S;p!==void 0&&p.texture.dispose();const x=o.morphAttributes.position!==void 0,v=o.morphAttributes.normal!==void 0,h=o.morphAttributes.color!==void 0,f=o.morphAttributes.position||[],m=o.morphAttributes.normal||[],_=o.morphAttributes.color||[];let M=0;x===!0&&(M=1),v===!0&&(M=2),h===!0&&(M=3);let y=o.attributes.position.count*M,E=1;y>t.maxTextureSize&&(E=Math.ceil(y/t.maxTextureSize),y=t.maxTextureSize);const C=new Float32Array(y*E*4*u),L=new ih(C,y,E,u);L.type=Vn,L.needsUpdate=!0;const b=M*4;for(let R=0;R<u;R++){const A=f[R],P=m[R],F=_[R],U=y*E*4*R;for(let O=0;O<A.count;O++){const W=O*b;x===!0&&(s.fromBufferAttribute(A,O),C[U+W+0]=s.x,C[U+W+1]=s.y,C[U+W+2]=s.z,C[U+W+3]=0),v===!0&&(s.fromBufferAttribute(P,O),C[U+W+4]=s.x,C[U+W+5]=s.y,C[U+W+6]=s.z,C[U+W+7]=0),h===!0&&(s.fromBufferAttribute(F,O),C[U+W+8]=s.x,C[U+W+9]=s.y,C[U+W+10]=s.z,C[U+W+11]=F.itemSize===4?s.w:1)}}p={count:u,texture:L,size:new Vt(y,E)},i.set(o,p),o.addEventListener("dispose",S)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",a.morphTexture,e);else{let x=0;for(let h=0;h<c.length;h++)x+=c[h];const v=o.morphTargetsRelative?1:1-x;l.getUniforms().setValue(n,"morphTargetBaseInfluence",v),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",p.texture,e),l.getUniforms().setValue(n,"morphTargetsTextureSize",p.size)}return{update:r}}function Nm(n,t,e,i){let s=new WeakMap;function r(l){const c=i.render.frame,d=l.geometry,u=t.get(l,d);if(s.get(u)!==c&&(t.update(u),s.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),s.get(l)!==c&&(e.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,n.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){const p=l.skeleton;s.get(p)!==c&&(p.update(),s.set(p,c))}return u}function a(){s=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:r,dispose:a}}const mh=new qe,hl=new dh(1,1),gh=new ih,_h=new ad,xh=new lh,ul=[],dl=[],fl=new Float32Array(16),pl=new Float32Array(9),ml=new Float32Array(4);function bs(n,t,e){const i=n[0];if(i<=0||i>0)return n;const s=t*e;let r=ul[s];if(r===void 0&&(r=new Float32Array(s),ul[s]=r),t!==0){i.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,n[a].toArray(r,o)}return r}function Le(n,t){if(n.length!==t.length)return!1;for(let e=0,i=n.length;e<i;e++)if(n[e]!==t[e])return!1;return!0}function Ie(n,t){for(let e=0,i=t.length;e<i;e++)n[e]=t[e]}function oa(n,t){let e=dl[t];e===void 0&&(e=new Int32Array(t),dl[t]=e);for(let i=0;i!==t;++i)e[i]=n.allocateTextureUnit();return e}function Om(n,t){const e=this.cache;e[0]!==t&&(n.uniform1f(this.addr,t),e[0]=t)}function Bm(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Le(e,t))return;n.uniform2fv(this.addr,t),Ie(e,t)}}function zm(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(n.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Le(e,t))return;n.uniform3fv(this.addr,t),Ie(e,t)}}function km(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Le(e,t))return;n.uniform4fv(this.addr,t),Ie(e,t)}}function Hm(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(Le(e,t))return;n.uniformMatrix2fv(this.addr,!1,t),Ie(e,t)}else{if(Le(e,i))return;ml.set(i),n.uniformMatrix2fv(this.addr,!1,ml),Ie(e,i)}}function Gm(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(Le(e,t))return;n.uniformMatrix3fv(this.addr,!1,t),Ie(e,t)}else{if(Le(e,i))return;pl.set(i),n.uniformMatrix3fv(this.addr,!1,pl),Ie(e,i)}}function Vm(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(Le(e,t))return;n.uniformMatrix4fv(this.addr,!1,t),Ie(e,t)}else{if(Le(e,i))return;fl.set(i),n.uniformMatrix4fv(this.addr,!1,fl),Ie(e,i)}}function Wm(n,t){const e=this.cache;e[0]!==t&&(n.uniform1i(this.addr,t),e[0]=t)}function Xm(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Le(e,t))return;n.uniform2iv(this.addr,t),Ie(e,t)}}function Ym(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Le(e,t))return;n.uniform3iv(this.addr,t),Ie(e,t)}}function qm(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Le(e,t))return;n.uniform4iv(this.addr,t),Ie(e,t)}}function $m(n,t){const e=this.cache;e[0]!==t&&(n.uniform1ui(this.addr,t),e[0]=t)}function jm(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Le(e,t))return;n.uniform2uiv(this.addr,t),Ie(e,t)}}function Km(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Le(e,t))return;n.uniform3uiv(this.addr,t),Ie(e,t)}}function Zm(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Le(e,t))return;n.uniform4uiv(this.addr,t),Ie(e,t)}}function Jm(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_2D_SHADOW?(hl.compareFunction=eh,r=hl):r=mh,e.setTexture2D(t||r,s)}function Qm(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture3D(t||_h,s)}function tg(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTextureCube(t||xh,s)}function eg(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture2DArray(t||gh,s)}function ng(n){switch(n){case 5126:return Om;case 35664:return Bm;case 35665:return zm;case 35666:return km;case 35674:return Hm;case 35675:return Gm;case 35676:return Vm;case 5124:case 35670:return Wm;case 35667:case 35671:return Xm;case 35668:case 35672:return Ym;case 35669:case 35673:return qm;case 5125:return $m;case 36294:return jm;case 36295:return Km;case 36296:return Zm;case 35678:case 36198:case 36298:case 36306:case 35682:return Jm;case 35679:case 36299:case 36307:return Qm;case 35680:case 36300:case 36308:case 36293:return tg;case 36289:case 36303:case 36311:case 36292:return eg}}function ig(n,t){n.uniform1fv(this.addr,t)}function sg(n,t){const e=bs(t,this.size,2);n.uniform2fv(this.addr,e)}function rg(n,t){const e=bs(t,this.size,3);n.uniform3fv(this.addr,e)}function ag(n,t){const e=bs(t,this.size,4);n.uniform4fv(this.addr,e)}function og(n,t){const e=bs(t,this.size,4);n.uniformMatrix2fv(this.addr,!1,e)}function cg(n,t){const e=bs(t,this.size,9);n.uniformMatrix3fv(this.addr,!1,e)}function lg(n,t){const e=bs(t,this.size,16);n.uniformMatrix4fv(this.addr,!1,e)}function hg(n,t){n.uniform1iv(this.addr,t)}function ug(n,t){n.uniform2iv(this.addr,t)}function dg(n,t){n.uniform3iv(this.addr,t)}function fg(n,t){n.uniform4iv(this.addr,t)}function pg(n,t){n.uniform1uiv(this.addr,t)}function mg(n,t){n.uniform2uiv(this.addr,t)}function gg(n,t){n.uniform3uiv(this.addr,t)}function _g(n,t){n.uniform4uiv(this.addr,t)}function xg(n,t,e){const i=this.cache,s=t.length,r=oa(e,s);Le(i,r)||(n.uniform1iv(this.addr,r),Ie(i,r));for(let a=0;a!==s;++a)e.setTexture2D(t[a]||mh,r[a])}function Mg(n,t,e){const i=this.cache,s=t.length,r=oa(e,s);Le(i,r)||(n.uniform1iv(this.addr,r),Ie(i,r));for(let a=0;a!==s;++a)e.setTexture3D(t[a]||_h,r[a])}function vg(n,t,e){const i=this.cache,s=t.length,r=oa(e,s);Le(i,r)||(n.uniform1iv(this.addr,r),Ie(i,r));for(let a=0;a!==s;++a)e.setTextureCube(t[a]||xh,r[a])}function yg(n,t,e){const i=this.cache,s=t.length,r=oa(e,s);Le(i,r)||(n.uniform1iv(this.addr,r),Ie(i,r));for(let a=0;a!==s;++a)e.setTexture2DArray(t[a]||gh,r[a])}function Sg(n){switch(n){case 5126:return ig;case 35664:return sg;case 35665:return rg;case 35666:return ag;case 35674:return og;case 35675:return cg;case 35676:return lg;case 5124:case 35670:return hg;case 35667:case 35671:return ug;case 35668:case 35672:return dg;case 35669:case 35673:return fg;case 5125:return pg;case 36294:return mg;case 36295:return gg;case 36296:return _g;case 35678:case 36198:case 36298:case 36306:case 35682:return xg;case 35679:case 36299:case 36307:return Mg;case 35680:case 36300:case 36308:case 36293:return vg;case 36289:case 36303:case 36311:case 36292:return yg}}class Eg{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.setValue=ng(e.type)}}class bg{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Sg(e.type)}}class Tg{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,i){const s=this.seq;for(let r=0,a=s.length;r!==a;++r){const o=s[r];o.setValue(t,e[o.id],i)}}}const Va=/(\w+)(\])?(\[|\.)?/g;function gl(n,t){n.seq.push(t),n.map[t.id]=t}function Ag(n,t,e){const i=n.name,s=i.length;for(Va.lastIndex=0;;){const r=Va.exec(i),a=Va.lastIndex;let o=r[1];const l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){gl(e,c===void 0?new Eg(o,n,t):new bg(o,n,t));break}else{let u=e.map[o];u===void 0&&(u=new Tg(o),gl(e,u)),e=u}}}class Xr{constructor(t,e){this.seq=[],this.map={};const i=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<i;++s){const r=t.getActiveUniform(e,s),a=t.getUniformLocation(e,r.name);Ag(r,a,this)}}setValue(t,e,i,s){const r=this.map[e];r!==void 0&&r.setValue(t,i,s)}setOptional(t,e,i){const s=e[i];s!==void 0&&this.setValue(t,i,s)}static upload(t,e,i,s){for(let r=0,a=e.length;r!==a;++r){const o=e[r],l=i[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,s)}}static seqWithValue(t,e){const i=[];for(let s=0,r=t.length;s!==r;++s){const a=t[s];a.id in e&&i.push(a)}return i}}function _l(n,t,e){const i=n.createShader(t);return n.shaderSource(i,e),n.compileShader(i),i}const wg=37297;let Rg=0;function Cg(n,t){const e=n.split(`
`),i=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=s;a<r;a++){const o=a+1;i.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return i.join(`
`)}const xl=new $t;function Pg(n){he._getMatrix(xl,he.workingColorSpace,n);const t=`mat3( ${xl.elements.map(e=>e.toFixed(4))} )`;switch(he.getTransfer(n)){case jr:return[t,"LinearTransferOETF"];case pe:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",n),[t,"LinearTransferOETF"]}}function Ml(n,t,e){const i=n.getShaderParameter(t,n.COMPILE_STATUS),r=(n.getShaderInfoLog(t)||"").trim();if(i&&r==="")return"";const a=/ERROR: 0:(\d+)/.exec(r);if(a){const o=parseInt(a[1]);return e.toUpperCase()+`

`+r+`

`+Cg(n.getShaderSource(t),o)}else return r}function Dg(n,t){const e=Pg(t);return[`vec4 ${n}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function Lg(n,t){let e;switch(t){case Mu:e="Linear";break;case vu:e="Reinhard";break;case yu:e="Cineon";break;case Xl:e="ACESFilmic";break;case Eu:e="AgX";break;case bu:e="Neutral";break;case Su:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+n+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const Ur=new z;function Ig(){he.getLuminanceCoefficients(Ur);const n=Ur.x.toFixed(4),t=Ur.y.toFixed(4),e=Ur.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Ug(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ns).join(`
`)}function Fg(n){const t=[];for(const e in n){const i=n[e];i!==!1&&t.push("#define "+e+" "+i)}return t.join(`
`)}function Ng(n,t){const e={},i=n.getProgramParameter(t,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){const r=n.getActiveAttrib(t,s),a=r.name;let o=1;r.type===n.FLOAT_MAT2&&(o=2),r.type===n.FLOAT_MAT3&&(o=3),r.type===n.FLOAT_MAT4&&(o=4),e[a]={type:r.type,location:n.getAttribLocation(t,a),locationSize:o}}return e}function Ns(n){return n!==""}function vl(n,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function yl(n,t){return n.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const Og=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ho(n){return n.replace(Og,zg)}const Bg=new Map;function zg(n,t){let e=jt[t];if(e===void 0){const i=Bg.get(t);if(i!==void 0)e=jt[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,i);else throw new Error("Can not resolve #include <"+t+">")}return Ho(e)}const kg=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Sl(n){return n.replace(kg,Hg)}function Hg(n,t,e,i){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function El(n){let t=`precision ${n.precision} float;
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
#define LOW_PRECISION`),t}function Gg(n){let t="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===Vl?t="SHADOWMAP_TYPE_PCF":n.shadowMapType===Jh?t="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===kn&&(t="SHADOWMAP_TYPE_VSM"),t}function Vg(n){let t="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case xs:case Ms:t="ENVMAP_TYPE_CUBE";break;case ia:t="ENVMAP_TYPE_CUBE_UV";break}return t}function Wg(n){let t="ENVMAP_MODE_REFLECTION";return n.envMap&&n.envMapMode===Ms&&(t="ENVMAP_MODE_REFRACTION"),t}function Xg(n){let t="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case Wl:t="ENVMAP_BLENDING_MULTIPLY";break;case _u:t="ENVMAP_BLENDING_MIX";break;case xu:t="ENVMAP_BLENDING_ADD";break}return t}function Yg(n){const t=n.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:i,maxMip:e}}function qg(n,t,e,i){const s=n.getContext(),r=e.defines;let a=e.vertexShader,o=e.fragmentShader;const l=Gg(e),c=Vg(e),d=Wg(e),u=Xg(e),p=Yg(e),g=Ug(e),x=Fg(r),v=s.createProgram();let h,f,m=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(h=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,x].filter(Ns).join(`
`),h.length>0&&(h+=`
`),f=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,x].filter(Ns).join(`
`),f.length>0&&(f+=`
`)):(h=[El(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,x,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+d:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ns).join(`
`),f=[El(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,x,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+d:"",e.envMap?"#define "+u:"",p?"#define CUBEUV_TEXEL_WIDTH "+p.texelWidth:"",p?"#define CUBEUV_TEXEL_HEIGHT "+p.texelHeight:"",p?"#define CUBEUV_MAX_MIP "+p.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==ai?"#define TONE_MAPPING":"",e.toneMapping!==ai?jt.tonemapping_pars_fragment:"",e.toneMapping!==ai?Lg("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",jt.colorspace_pars_fragment,Dg("linearToOutputTexel",e.outputColorSpace),Ig(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Ns).join(`
`)),a=Ho(a),a=vl(a,e),a=yl(a,e),o=Ho(o),o=vl(o,e),o=yl(o,e),a=Sl(a),o=Sl(o),e.isRawShaderMaterial!==!0&&(m=`#version 300 es
`,h=[g,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+h,f=["#define varying in",e.glslVersion===Tc?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Tc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);const _=m+h+a,M=m+f+o,y=_l(s,s.VERTEX_SHADER,_),E=_l(s,s.FRAGMENT_SHADER,M);s.attachShader(v,y),s.attachShader(v,E),e.index0AttributeName!==void 0?s.bindAttribLocation(v,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(v,0,"position"),s.linkProgram(v);function C(R){if(n.debug.checkShaderErrors){const A=s.getProgramInfoLog(v)||"",P=s.getShaderInfoLog(y)||"",F=s.getShaderInfoLog(E)||"",U=A.trim(),O=P.trim(),W=F.trim();let V=!0,j=!0;if(s.getProgramParameter(v,s.LINK_STATUS)===!1)if(V=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,v,y,E);else{const K=Ml(s,y,"vertex"),et=Ml(s,E,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(v,s.VALIDATE_STATUS)+`

Material Name: `+R.name+`
Material Type: `+R.type+`

Program Info Log: `+U+`
`+K+`
`+et)}else U!==""?console.warn("THREE.WebGLProgram: Program Info Log:",U):(O===""||W==="")&&(j=!1);j&&(R.diagnostics={runnable:V,programLog:U,vertexShader:{log:O,prefix:h},fragmentShader:{log:W,prefix:f}})}s.deleteShader(y),s.deleteShader(E),L=new Xr(s,v),b=Ng(s,v)}let L;this.getUniforms=function(){return L===void 0&&C(this),L};let b;this.getAttributes=function(){return b===void 0&&C(this),b};let S=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return S===!1&&(S=s.getProgramParameter(v,wg)),S},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(v),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Rg++,this.cacheKey=t,this.usedTimes=1,this.program=v,this.vertexShader=y,this.fragmentShader=E,this}let $g=0;class jg{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,i=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(i),a=this._getShaderCacheForMaterial(t);return a.has(s)===!1&&(a.add(s),s.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const i of e)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let i=e.get(t);return i===void 0&&(i=new Set,e.set(t,i)),i}_getShaderStage(t){const e=this.shaderCache;let i=e.get(t);return i===void 0&&(i=new Kg(t),e.set(t,i)),i}}class Kg{constructor(t){this.id=$g++,this.code=t,this.usedTimes=0}}function Zg(n,t,e,i,s,r,a){const o=new oc,l=new jg,c=new Set,d=[],u=s.logarithmicDepthBuffer,p=s.vertexTextures;let g=s.precision;const x={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(b){return c.add(b),b===0?"uv":`uv${b}`}function h(b,S,R,A,P){const F=A.fog,U=P.geometry,O=b.isMeshStandardMaterial?A.environment:null,W=(b.isMeshStandardMaterial?e:t).get(b.envMap||O),V=W&&W.mapping===ia?W.image.height:null,j=x[b.type];b.precision!==null&&(g=s.getMaxPrecision(b.precision),g!==b.precision&&console.warn("THREE.WebGLProgram.getParameters:",b.precision,"not supported, using",g,"instead."));const K=U.morphAttributes.position||U.morphAttributes.normal||U.morphAttributes.color,et=K!==void 0?K.length:0;let H=0;U.morphAttributes.position!==void 0&&(H=1),U.morphAttributes.normal!==void 0&&(H=2),U.morphAttributes.color!==void 0&&(H=3);let G,xt,pt,Y;if(j){const ie=Pn[j];G=ie.vertexShader,xt=ie.fragmentShader}else G=b.vertexShader,xt=b.fragmentShader,l.update(b),pt=l.getVertexShaderID(b),Y=l.getFragmentShaderID(b);const Z=n.getRenderTarget(),_t=n.state.buffers.depth.getReversed(),Et=P.isInstancedMesh===!0,St=P.isBatchedMesh===!0,Ft=!!b.map,re=!!b.matcap,I=!!W,ce=!!b.aoMap,Wt=!!b.lightMap,Ct=!!b.bumpMap,wt=!!b.normalMap,qt=!!b.displacementMap,ut=!!b.emissiveMap,yt=!!b.metalnessMap,Jt=!!b.roughnessMap,ne=b.anisotropy>0,D=b.clearcoat>0,T=b.dispersion>0,$=b.iridescence>0,st=b.sheen>0,k=b.transmission>0,B=ne&&!!b.anisotropyMap,Mt=D&&!!b.clearcoatMap,ct=D&&!!b.clearcoatNormalMap,at=D&&!!b.clearcoatRoughnessMap,it=$&&!!b.iridescenceMap,tt=$&&!!b.iridescenceThicknessMap,mt=st&&!!b.sheenColorMap,Tt=st&&!!b.sheenRoughnessMap,gt=!!b.specularMap,ft=!!b.specularColorMap,It=!!b.specularIntensityMap,N=k&&!!b.transmissionMap,ot=k&&!!b.thicknessMap,ht=!!b.gradientMap,bt=!!b.alphaMap,dt=b.alphaTest>0,lt=!!b.alphaHash,Dt=!!b.extensions;let Ht=ai;b.toneMapped&&(Z===null||Z.isXRRenderTarget===!0)&&(Ht=n.toneMapping);const ue={shaderID:j,shaderType:b.type,shaderName:b.name,vertexShader:G,fragmentShader:xt,defines:b.defines,customVertexShaderID:pt,customFragmentShaderID:Y,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:g,batching:St,batchingColor:St&&P._colorsTexture!==null,instancing:Et,instancingColor:Et&&P.instanceColor!==null,instancingMorph:Et&&P.morphTexture!==null,supportsVertexTextures:p,outputColorSpace:Z===null?n.outputColorSpace:Z.isXRRenderTarget===!0?Z.texture.colorSpace:vs,alphaToCoverage:!!b.alphaToCoverage,map:Ft,matcap:re,envMap:I,envMapMode:I&&W.mapping,envMapCubeUVHeight:V,aoMap:ce,lightMap:Wt,bumpMap:Ct,normalMap:wt,displacementMap:p&&qt,emissiveMap:ut,normalMapObjectSpace:wt&&b.normalMapType===Cu,normalMapTangentSpace:wt&&b.normalMapType===Ru,metalnessMap:yt,roughnessMap:Jt,anisotropy:ne,anisotropyMap:B,clearcoat:D,clearcoatMap:Mt,clearcoatNormalMap:ct,clearcoatRoughnessMap:at,dispersion:T,iridescence:$,iridescenceMap:it,iridescenceThicknessMap:tt,sheen:st,sheenColorMap:mt,sheenRoughnessMap:Tt,specularMap:gt,specularColorMap:ft,specularIntensityMap:It,transmission:k,transmissionMap:N,thicknessMap:ot,gradientMap:ht,opaque:b.transparent===!1&&b.blending===Pi&&b.alphaToCoverage===!1,alphaMap:bt,alphaTest:dt,alphaHash:lt,combine:b.combine,mapUv:Ft&&v(b.map.channel),aoMapUv:ce&&v(b.aoMap.channel),lightMapUv:Wt&&v(b.lightMap.channel),bumpMapUv:Ct&&v(b.bumpMap.channel),normalMapUv:wt&&v(b.normalMap.channel),displacementMapUv:qt&&v(b.displacementMap.channel),emissiveMapUv:ut&&v(b.emissiveMap.channel),metalnessMapUv:yt&&v(b.metalnessMap.channel),roughnessMapUv:Jt&&v(b.roughnessMap.channel),anisotropyMapUv:B&&v(b.anisotropyMap.channel),clearcoatMapUv:Mt&&v(b.clearcoatMap.channel),clearcoatNormalMapUv:ct&&v(b.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:at&&v(b.clearcoatRoughnessMap.channel),iridescenceMapUv:it&&v(b.iridescenceMap.channel),iridescenceThicknessMapUv:tt&&v(b.iridescenceThicknessMap.channel),sheenColorMapUv:mt&&v(b.sheenColorMap.channel),sheenRoughnessMapUv:Tt&&v(b.sheenRoughnessMap.channel),specularMapUv:gt&&v(b.specularMap.channel),specularColorMapUv:ft&&v(b.specularColorMap.channel),specularIntensityMapUv:It&&v(b.specularIntensityMap.channel),transmissionMapUv:N&&v(b.transmissionMap.channel),thicknessMapUv:ot&&v(b.thicknessMap.channel),alphaMapUv:bt&&v(b.alphaMap.channel),vertexTangents:!!U.attributes.tangent&&(wt||ne),vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!U.attributes.color&&U.attributes.color.itemSize===4,pointsUvs:P.isPoints===!0&&!!U.attributes.uv&&(Ft||bt),fog:!!F,useFog:b.fog===!0,fogExp2:!!F&&F.isFogExp2,flatShading:b.flatShading===!0&&b.wireframe===!1,sizeAttenuation:b.sizeAttenuation===!0,logarithmicDepthBuffer:u,reversedDepthBuffer:_t,skinning:P.isSkinnedMesh===!0,morphTargets:U.morphAttributes.position!==void 0,morphNormals:U.morphAttributes.normal!==void 0,morphColors:U.morphAttributes.color!==void 0,morphTargetsCount:et,morphTextureStride:H,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:b.dithering,shadowMapEnabled:n.shadowMap.enabled&&R.length>0,shadowMapType:n.shadowMap.type,toneMapping:Ht,decodeVideoTexture:Ft&&b.map.isVideoTexture===!0&&he.getTransfer(b.map.colorSpace)===pe,decodeVideoTextureEmissive:ut&&b.emissiveMap.isVideoTexture===!0&&he.getTransfer(b.emissiveMap.colorSpace)===pe,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===Gn,flipSided:b.side===Je,useDepthPacking:b.depthPacking>=0,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionClipCullDistance:Dt&&b.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Dt&&b.extensions.multiDraw===!0||St)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:b.customProgramCacheKey()};return ue.vertexUv1s=c.has(1),ue.vertexUv2s=c.has(2),ue.vertexUv3s=c.has(3),c.clear(),ue}function f(b){const S=[];if(b.shaderID?S.push(b.shaderID):(S.push(b.customVertexShaderID),S.push(b.customFragmentShaderID)),b.defines!==void 0)for(const R in b.defines)S.push(R),S.push(b.defines[R]);return b.isRawShaderMaterial===!1&&(m(S,b),_(S,b),S.push(n.outputColorSpace)),S.push(b.customProgramCacheKey),S.join()}function m(b,S){b.push(S.precision),b.push(S.outputColorSpace),b.push(S.envMapMode),b.push(S.envMapCubeUVHeight),b.push(S.mapUv),b.push(S.alphaMapUv),b.push(S.lightMapUv),b.push(S.aoMapUv),b.push(S.bumpMapUv),b.push(S.normalMapUv),b.push(S.displacementMapUv),b.push(S.emissiveMapUv),b.push(S.metalnessMapUv),b.push(S.roughnessMapUv),b.push(S.anisotropyMapUv),b.push(S.clearcoatMapUv),b.push(S.clearcoatNormalMapUv),b.push(S.clearcoatRoughnessMapUv),b.push(S.iridescenceMapUv),b.push(S.iridescenceThicknessMapUv),b.push(S.sheenColorMapUv),b.push(S.sheenRoughnessMapUv),b.push(S.specularMapUv),b.push(S.specularColorMapUv),b.push(S.specularIntensityMapUv),b.push(S.transmissionMapUv),b.push(S.thicknessMapUv),b.push(S.combine),b.push(S.fogExp2),b.push(S.sizeAttenuation),b.push(S.morphTargetsCount),b.push(S.morphAttributeCount),b.push(S.numDirLights),b.push(S.numPointLights),b.push(S.numSpotLights),b.push(S.numSpotLightMaps),b.push(S.numHemiLights),b.push(S.numRectAreaLights),b.push(S.numDirLightShadows),b.push(S.numPointLightShadows),b.push(S.numSpotLightShadows),b.push(S.numSpotLightShadowsWithMaps),b.push(S.numLightProbes),b.push(S.shadowMapType),b.push(S.toneMapping),b.push(S.numClippingPlanes),b.push(S.numClipIntersection),b.push(S.depthPacking)}function _(b,S){o.disableAll(),S.supportsVertexTextures&&o.enable(0),S.instancing&&o.enable(1),S.instancingColor&&o.enable(2),S.instancingMorph&&o.enable(3),S.matcap&&o.enable(4),S.envMap&&o.enable(5),S.normalMapObjectSpace&&o.enable(6),S.normalMapTangentSpace&&o.enable(7),S.clearcoat&&o.enable(8),S.iridescence&&o.enable(9),S.alphaTest&&o.enable(10),S.vertexColors&&o.enable(11),S.vertexAlphas&&o.enable(12),S.vertexUv1s&&o.enable(13),S.vertexUv2s&&o.enable(14),S.vertexUv3s&&o.enable(15),S.vertexTangents&&o.enable(16),S.anisotropy&&o.enable(17),S.alphaHash&&o.enable(18),S.batching&&o.enable(19),S.dispersion&&o.enable(20),S.batchingColor&&o.enable(21),S.gradientMap&&o.enable(22),b.push(o.mask),o.disableAll(),S.fog&&o.enable(0),S.useFog&&o.enable(1),S.flatShading&&o.enable(2),S.logarithmicDepthBuffer&&o.enable(3),S.reversedDepthBuffer&&o.enable(4),S.skinning&&o.enable(5),S.morphTargets&&o.enable(6),S.morphNormals&&o.enable(7),S.morphColors&&o.enable(8),S.premultipliedAlpha&&o.enable(9),S.shadowMapEnabled&&o.enable(10),S.doubleSided&&o.enable(11),S.flipSided&&o.enable(12),S.useDepthPacking&&o.enable(13),S.dithering&&o.enable(14),S.transmission&&o.enable(15),S.sheen&&o.enable(16),S.opaque&&o.enable(17),S.pointsUvs&&o.enable(18),S.decodeVideoTexture&&o.enable(19),S.decodeVideoTextureEmissive&&o.enable(20),S.alphaToCoverage&&o.enable(21),b.push(o.mask)}function M(b){const S=x[b.type];let R;if(S){const A=Pn[S];R=Md.clone(A.uniforms)}else R=b.uniforms;return R}function y(b,S){let R;for(let A=0,P=d.length;A<P;A++){const F=d[A];if(F.cacheKey===S){R=F,++R.usedTimes;break}}return R===void 0&&(R=new qg(n,S,b,r),d.push(R)),R}function E(b){if(--b.usedTimes===0){const S=d.indexOf(b);d[S]=d[d.length-1],d.pop(),b.destroy()}}function C(b){l.remove(b)}function L(){l.dispose()}return{getParameters:h,getProgramCacheKey:f,getUniforms:M,acquireProgram:y,releaseProgram:E,releaseShaderCache:C,programs:d,dispose:L}}function Jg(){let n=new WeakMap;function t(a){return n.has(a)}function e(a){let o=n.get(a);return o===void 0&&(o={},n.set(a,o)),o}function i(a){n.delete(a)}function s(a,o,l){n.get(a)[o]=l}function r(){n=new WeakMap}return{has:t,get:e,remove:i,update:s,dispose:r}}function Qg(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.material.id!==t.material.id?n.material.id-t.material.id:n.z!==t.z?n.z-t.z:n.id-t.id}function bl(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.z!==t.z?t.z-n.z:n.id-t.id}function Tl(){const n=[];let t=0;const e=[],i=[],s=[];function r(){t=0,e.length=0,i.length=0,s.length=0}function a(u,p,g,x,v,h){let f=n[t];return f===void 0?(f={id:u.id,object:u,geometry:p,material:g,groupOrder:x,renderOrder:u.renderOrder,z:v,group:h},n[t]=f):(f.id=u.id,f.object=u,f.geometry=p,f.material=g,f.groupOrder=x,f.renderOrder=u.renderOrder,f.z=v,f.group=h),t++,f}function o(u,p,g,x,v,h){const f=a(u,p,g,x,v,h);g.transmission>0?i.push(f):g.transparent===!0?s.push(f):e.push(f)}function l(u,p,g,x,v,h){const f=a(u,p,g,x,v,h);g.transmission>0?i.unshift(f):g.transparent===!0?s.unshift(f):e.unshift(f)}function c(u,p){e.length>1&&e.sort(u||Qg),i.length>1&&i.sort(p||bl),s.length>1&&s.sort(p||bl)}function d(){for(let u=t,p=n.length;u<p;u++){const g=n[u];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:e,transmissive:i,transparent:s,init:r,push:o,unshift:l,finish:d,sort:c}}function t0(){let n=new WeakMap;function t(i,s){const r=n.get(i);let a;return r===void 0?(a=new Tl,n.set(i,[a])):s>=r.length?(a=new Tl,r.push(a)):a=r[s],a}function e(){n=new WeakMap}return{get:t,dispose:e}}function e0(){const n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new z,color:new kt};break;case"SpotLight":e={position:new z,direction:new z,color:new kt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new z,color:new kt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new z,skyColor:new kt,groundColor:new kt};break;case"RectAreaLight":e={color:new kt,position:new z,halfWidth:new z,halfHeight:new z};break}return n[t.id]=e,e}}}function n0(){const n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Vt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Vt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Vt,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[t.id]=e,e}}}let i0=0;function s0(n,t){return(t.castShadow?2:0)-(n.castShadow?2:0)+(t.map?1:0)-(n.map?1:0)}function r0(n){const t=new e0,e=n0(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new z);const s=new z,r=new ve,a=new ve;function o(c){let d=0,u=0,p=0;for(let b=0;b<9;b++)i.probe[b].set(0,0,0);let g=0,x=0,v=0,h=0,f=0,m=0,_=0,M=0,y=0,E=0,C=0;c.sort(s0);for(let b=0,S=c.length;b<S;b++){const R=c[b],A=R.color,P=R.intensity,F=R.distance,U=R.shadow&&R.shadow.map?R.shadow.map.texture:null;if(R.isAmbientLight)d+=A.r*P,u+=A.g*P,p+=A.b*P;else if(R.isLightProbe){for(let O=0;O<9;O++)i.probe[O].addScaledVector(R.sh.coefficients[O],P);C++}else if(R.isDirectionalLight){const O=t.get(R);if(O.color.copy(R.color).multiplyScalar(R.intensity),R.castShadow){const W=R.shadow,V=e.get(R);V.shadowIntensity=W.intensity,V.shadowBias=W.bias,V.shadowNormalBias=W.normalBias,V.shadowRadius=W.radius,V.shadowMapSize=W.mapSize,i.directionalShadow[g]=V,i.directionalShadowMap[g]=U,i.directionalShadowMatrix[g]=R.shadow.matrix,m++}i.directional[g]=O,g++}else if(R.isSpotLight){const O=t.get(R);O.position.setFromMatrixPosition(R.matrixWorld),O.color.copy(A).multiplyScalar(P),O.distance=F,O.coneCos=Math.cos(R.angle),O.penumbraCos=Math.cos(R.angle*(1-R.penumbra)),O.decay=R.decay,i.spot[v]=O;const W=R.shadow;if(R.map&&(i.spotLightMap[y]=R.map,y++,W.updateMatrices(R),R.castShadow&&E++),i.spotLightMatrix[v]=W.matrix,R.castShadow){const V=e.get(R);V.shadowIntensity=W.intensity,V.shadowBias=W.bias,V.shadowNormalBias=W.normalBias,V.shadowRadius=W.radius,V.shadowMapSize=W.mapSize,i.spotShadow[v]=V,i.spotShadowMap[v]=U,M++}v++}else if(R.isRectAreaLight){const O=t.get(R);O.color.copy(A).multiplyScalar(P),O.halfWidth.set(R.width*.5,0,0),O.halfHeight.set(0,R.height*.5,0),i.rectArea[h]=O,h++}else if(R.isPointLight){const O=t.get(R);if(O.color.copy(R.color).multiplyScalar(R.intensity),O.distance=R.distance,O.decay=R.decay,R.castShadow){const W=R.shadow,V=e.get(R);V.shadowIntensity=W.intensity,V.shadowBias=W.bias,V.shadowNormalBias=W.normalBias,V.shadowRadius=W.radius,V.shadowMapSize=W.mapSize,V.shadowCameraNear=W.camera.near,V.shadowCameraFar=W.camera.far,i.pointShadow[x]=V,i.pointShadowMap[x]=U,i.pointShadowMatrix[x]=R.shadow.matrix,_++}i.point[x]=O,x++}else if(R.isHemisphereLight){const O=t.get(R);O.skyColor.copy(R.color).multiplyScalar(P),O.groundColor.copy(R.groundColor).multiplyScalar(P),i.hemi[f]=O,f++}}h>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=At.LTC_FLOAT_1,i.rectAreaLTC2=At.LTC_FLOAT_2):(i.rectAreaLTC1=At.LTC_HALF_1,i.rectAreaLTC2=At.LTC_HALF_2)),i.ambient[0]=d,i.ambient[1]=u,i.ambient[2]=p;const L=i.hash;(L.directionalLength!==g||L.pointLength!==x||L.spotLength!==v||L.rectAreaLength!==h||L.hemiLength!==f||L.numDirectionalShadows!==m||L.numPointShadows!==_||L.numSpotShadows!==M||L.numSpotMaps!==y||L.numLightProbes!==C)&&(i.directional.length=g,i.spot.length=v,i.rectArea.length=h,i.point.length=x,i.hemi.length=f,i.directionalShadow.length=m,i.directionalShadowMap.length=m,i.pointShadow.length=_,i.pointShadowMap.length=_,i.spotShadow.length=M,i.spotShadowMap.length=M,i.directionalShadowMatrix.length=m,i.pointShadowMatrix.length=_,i.spotLightMatrix.length=M+y-E,i.spotLightMap.length=y,i.numSpotLightShadowsWithMaps=E,i.numLightProbes=C,L.directionalLength=g,L.pointLength=x,L.spotLength=v,L.rectAreaLength=h,L.hemiLength=f,L.numDirectionalShadows=m,L.numPointShadows=_,L.numSpotShadows=M,L.numSpotMaps=y,L.numLightProbes=C,i.version=i0++)}function l(c,d){let u=0,p=0,g=0,x=0,v=0;const h=d.matrixWorldInverse;for(let f=0,m=c.length;f<m;f++){const _=c[f];if(_.isDirectionalLight){const M=i.directional[u];M.direction.setFromMatrixPosition(_.matrixWorld),s.setFromMatrixPosition(_.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(h),u++}else if(_.isSpotLight){const M=i.spot[g];M.position.setFromMatrixPosition(_.matrixWorld),M.position.applyMatrix4(h),M.direction.setFromMatrixPosition(_.matrixWorld),s.setFromMatrixPosition(_.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(h),g++}else if(_.isRectAreaLight){const M=i.rectArea[x];M.position.setFromMatrixPosition(_.matrixWorld),M.position.applyMatrix4(h),a.identity(),r.copy(_.matrixWorld),r.premultiply(h),a.extractRotation(r),M.halfWidth.set(_.width*.5,0,0),M.halfHeight.set(0,_.height*.5,0),M.halfWidth.applyMatrix4(a),M.halfHeight.applyMatrix4(a),x++}else if(_.isPointLight){const M=i.point[p];M.position.setFromMatrixPosition(_.matrixWorld),M.position.applyMatrix4(h),p++}else if(_.isHemisphereLight){const M=i.hemi[v];M.direction.setFromMatrixPosition(_.matrixWorld),M.direction.transformDirection(h),v++}}}return{setup:o,setupView:l,state:i}}function Al(n){const t=new r0(n),e=[],i=[];function s(d){c.camera=d,e.length=0,i.length=0}function r(d){e.push(d)}function a(d){i.push(d)}function o(){t.setup(e)}function l(d){t.setupView(e,d)}const c={lightsArray:e,shadowsArray:i,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:o,setupLightsView:l,pushLight:r,pushShadow:a}}function a0(n){let t=new WeakMap;function e(s,r=0){const a=t.get(s);let o;return a===void 0?(o=new Al(n),t.set(s,[o])):r>=a.length?(o=new Al(n),a.push(o)):o=a[r],o}function i(){t=new WeakMap}return{get:e,dispose:i}}const o0=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,c0=`uniform sampler2D shadow_pass;
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
}`;function l0(n,t,e){let i=new uh;const s=new Vt,r=new Vt,a=new be,o=new Ld({depthPacking:wu}),l=new Id,c={},d=e.maxTextureSize,u={[li]:Je,[Je]:li,[Gn]:Gn},p=new ui({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Vt},radius:{value:4}},vertexShader:o0,fragmentShader:c0}),g=p.clone();g.defines.HORIZONTAL_PASS=1;const x=new ee;x.setAttribute("position",new Kt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new pn(x,p),h=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Vl;let f=this.type;this.render=function(E,C,L){if(h.enabled===!1||h.autoUpdate===!1&&h.needsUpdate===!1||E.length===0)return;const b=n.getRenderTarget(),S=n.getActiveCubeFace(),R=n.getActiveMipmapLevel(),A=n.state;A.setBlending(ri),A.buffers.depth.getReversed()===!0?A.buffers.color.setClear(0,0,0,0):A.buffers.color.setClear(1,1,1,1),A.buffers.depth.setTest(!0),A.setScissorTest(!1);const P=f!==kn&&this.type===kn,F=f===kn&&this.type!==kn;for(let U=0,O=E.length;U<O;U++){const W=E[U],V=W.shadow;if(V===void 0){console.warn("THREE.WebGLShadowMap:",W,"has no shadow.");continue}if(V.autoUpdate===!1&&V.needsUpdate===!1)continue;s.copy(V.mapSize);const j=V.getFrameExtents();if(s.multiply(j),r.copy(V.mapSize),(s.x>d||s.y>d)&&(s.x>d&&(r.x=Math.floor(d/j.x),s.x=r.x*j.x,V.mapSize.x=r.x),s.y>d&&(r.y=Math.floor(d/j.y),s.y=r.y*j.y,V.mapSize.y=r.y)),V.map===null||P===!0||F===!0){const et=this.type!==kn?{minFilter:wn,magFilter:wn}:{};V.map!==null&&V.map.dispose(),V.map=new Ui(s.x,s.y,et),V.map.texture.name=W.name+".shadowMap",V.camera.updateProjectionMatrix()}n.setRenderTarget(V.map),n.clear();const K=V.getViewportCount();for(let et=0;et<K;et++){const H=V.getViewport(et);a.set(r.x*H.x,r.y*H.y,r.x*H.z,r.y*H.w),A.viewport(a),V.updateMatrices(W,et),i=V.getFrustum(),M(C,L,V.camera,W,this.type)}V.isPointLightShadow!==!0&&this.type===kn&&m(V,L),V.needsUpdate=!1}f=this.type,h.needsUpdate=!1,n.setRenderTarget(b,S,R)};function m(E,C){const L=t.update(v);p.defines.VSM_SAMPLES!==E.blurSamples&&(p.defines.VSM_SAMPLES=E.blurSamples,g.defines.VSM_SAMPLES=E.blurSamples,p.needsUpdate=!0,g.needsUpdate=!0),E.mapPass===null&&(E.mapPass=new Ui(s.x,s.y)),p.uniforms.shadow_pass.value=E.map.texture,p.uniforms.resolution.value=E.mapSize,p.uniforms.radius.value=E.radius,n.setRenderTarget(E.mapPass),n.clear(),n.renderBufferDirect(C,null,L,p,v,null),g.uniforms.shadow_pass.value=E.mapPass.texture,g.uniforms.resolution.value=E.mapSize,g.uniforms.radius.value=E.radius,n.setRenderTarget(E.map),n.clear(),n.renderBufferDirect(C,null,L,g,v,null)}function _(E,C,L,b){let S=null;const R=L.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(R!==void 0)S=R;else if(S=L.isPointLight===!0?l:o,n.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0||C.alphaToCoverage===!0){const A=S.uuid,P=C.uuid;let F=c[A];F===void 0&&(F={},c[A]=F);let U=F[P];U===void 0&&(U=S.clone(),F[P]=U,C.addEventListener("dispose",y)),S=U}if(S.visible=C.visible,S.wireframe=C.wireframe,b===kn?S.side=C.shadowSide!==null?C.shadowSide:C.side:S.side=C.shadowSide!==null?C.shadowSide:u[C.side],S.alphaMap=C.alphaMap,S.alphaTest=C.alphaToCoverage===!0?.5:C.alphaTest,S.map=C.map,S.clipShadows=C.clipShadows,S.clippingPlanes=C.clippingPlanes,S.clipIntersection=C.clipIntersection,S.displacementMap=C.displacementMap,S.displacementScale=C.displacementScale,S.displacementBias=C.displacementBias,S.wireframeLinewidth=C.wireframeLinewidth,S.linewidth=C.linewidth,L.isPointLight===!0&&S.isMeshDistanceMaterial===!0){const A=n.properties.get(S);A.light=L}return S}function M(E,C,L,b,S){if(E.visible===!1)return;if(E.layers.test(C.layers)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&S===kn)&&(!E.frustumCulled||i.intersectsObject(E))){E.modelViewMatrix.multiplyMatrices(L.matrixWorldInverse,E.matrixWorld);const P=t.update(E),F=E.material;if(Array.isArray(F)){const U=P.groups;for(let O=0,W=U.length;O<W;O++){const V=U[O],j=F[V.materialIndex];if(j&&j.visible){const K=_(E,j,b,S);E.onBeforeShadow(n,E,C,L,P,K,V),n.renderBufferDirect(L,null,P,K,E,V),E.onAfterShadow(n,E,C,L,P,K,V)}}}else if(F.visible){const U=_(E,F,b,S);E.onBeforeShadow(n,E,C,L,P,U,null),n.renderBufferDirect(L,null,P,U,E,null),E.onAfterShadow(n,E,C,L,P,U,null)}}const A=E.children;for(let P=0,F=A.length;P<F;P++)M(A[P],C,L,b,S)}function y(E){E.target.removeEventListener("dispose",y);for(const L in c){const b=c[L],S=E.target.uuid;S in b&&(b[S].dispose(),delete b[S])}}}const h0={[Ja]:Qa,[to]:io,[eo]:so,[_s]:no,[Qa]:Ja,[io]:to,[so]:eo,[no]:_s};function u0(n,t){function e(){let N=!1;const ot=new be;let ht=null;const bt=new be(0,0,0,0);return{setMask:function(dt){ht!==dt&&!N&&(n.colorMask(dt,dt,dt,dt),ht=dt)},setLocked:function(dt){N=dt},setClear:function(dt,lt,Dt,Ht,ue){ue===!0&&(dt*=Ht,lt*=Ht,Dt*=Ht),ot.set(dt,lt,Dt,Ht),bt.equals(ot)===!1&&(n.clearColor(dt,lt,Dt,Ht),bt.copy(ot))},reset:function(){N=!1,ht=null,bt.set(-1,0,0,0)}}}function i(){let N=!1,ot=!1,ht=null,bt=null,dt=null;return{setReversed:function(lt){if(ot!==lt){const Dt=t.get("EXT_clip_control");lt?Dt.clipControlEXT(Dt.LOWER_LEFT_EXT,Dt.ZERO_TO_ONE_EXT):Dt.clipControlEXT(Dt.LOWER_LEFT_EXT,Dt.NEGATIVE_ONE_TO_ONE_EXT),ot=lt;const Ht=dt;dt=null,this.setClear(Ht)}},getReversed:function(){return ot},setTest:function(lt){lt?Z(n.DEPTH_TEST):_t(n.DEPTH_TEST)},setMask:function(lt){ht!==lt&&!N&&(n.depthMask(lt),ht=lt)},setFunc:function(lt){if(ot&&(lt=h0[lt]),bt!==lt){switch(lt){case Ja:n.depthFunc(n.NEVER);break;case Qa:n.depthFunc(n.ALWAYS);break;case to:n.depthFunc(n.LESS);break;case _s:n.depthFunc(n.LEQUAL);break;case eo:n.depthFunc(n.EQUAL);break;case no:n.depthFunc(n.GEQUAL);break;case io:n.depthFunc(n.GREATER);break;case so:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}bt=lt}},setLocked:function(lt){N=lt},setClear:function(lt){dt!==lt&&(ot&&(lt=1-lt),n.clearDepth(lt),dt=lt)},reset:function(){N=!1,ht=null,bt=null,dt=null,ot=!1}}}function s(){let N=!1,ot=null,ht=null,bt=null,dt=null,lt=null,Dt=null,Ht=null,ue=null;return{setTest:function(ie){N||(ie?Z(n.STENCIL_TEST):_t(n.STENCIL_TEST))},setMask:function(ie){ot!==ie&&!N&&(n.stencilMask(ie),ot=ie)},setFunc:function(ie,Qe,$e){(ht!==ie||bt!==Qe||dt!==$e)&&(n.stencilFunc(ie,Qe,$e),ht=ie,bt=Qe,dt=$e)},setOp:function(ie,Qe,$e){(lt!==ie||Dt!==Qe||Ht!==$e)&&(n.stencilOp(ie,Qe,$e),lt=ie,Dt=Qe,Ht=$e)},setLocked:function(ie){N=ie},setClear:function(ie){ue!==ie&&(n.clearStencil(ie),ue=ie)},reset:function(){N=!1,ot=null,ht=null,bt=null,dt=null,lt=null,Dt=null,Ht=null,ue=null}}}const r=new e,a=new i,o=new s,l=new WeakMap,c=new WeakMap;let d={},u={},p=new WeakMap,g=[],x=null,v=!1,h=null,f=null,m=null,_=null,M=null,y=null,E=null,C=new kt(0,0,0),L=0,b=!1,S=null,R=null,A=null,P=null,F=null;const U=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let O=!1,W=0;const V=n.getParameter(n.VERSION);V.indexOf("WebGL")!==-1?(W=parseFloat(/^WebGL (\d)/.exec(V)[1]),O=W>=1):V.indexOf("OpenGL ES")!==-1&&(W=parseFloat(/^OpenGL ES (\d)/.exec(V)[1]),O=W>=2);let j=null,K={};const et=n.getParameter(n.SCISSOR_BOX),H=n.getParameter(n.VIEWPORT),G=new be().fromArray(et),xt=new be().fromArray(H);function pt(N,ot,ht,bt){const dt=new Uint8Array(4),lt=n.createTexture();n.bindTexture(N,lt),n.texParameteri(N,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(N,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Dt=0;Dt<ht;Dt++)N===n.TEXTURE_3D||N===n.TEXTURE_2D_ARRAY?n.texImage3D(ot,0,n.RGBA,1,1,bt,0,n.RGBA,n.UNSIGNED_BYTE,dt):n.texImage2D(ot+Dt,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,dt);return lt}const Y={};Y[n.TEXTURE_2D]=pt(n.TEXTURE_2D,n.TEXTURE_2D,1),Y[n.TEXTURE_CUBE_MAP]=pt(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),Y[n.TEXTURE_2D_ARRAY]=pt(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),Y[n.TEXTURE_3D]=pt(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),Z(n.DEPTH_TEST),a.setFunc(_s),Ct(!1),wt(yc),Z(n.CULL_FACE),ce(ri);function Z(N){d[N]!==!0&&(n.enable(N),d[N]=!0)}function _t(N){d[N]!==!1&&(n.disable(N),d[N]=!1)}function Et(N,ot){return u[N]!==ot?(n.bindFramebuffer(N,ot),u[N]=ot,N===n.DRAW_FRAMEBUFFER&&(u[n.FRAMEBUFFER]=ot),N===n.FRAMEBUFFER&&(u[n.DRAW_FRAMEBUFFER]=ot),!0):!1}function St(N,ot){let ht=g,bt=!1;if(N){ht=p.get(ot),ht===void 0&&(ht=[],p.set(ot,ht));const dt=N.textures;if(ht.length!==dt.length||ht[0]!==n.COLOR_ATTACHMENT0){for(let lt=0,Dt=dt.length;lt<Dt;lt++)ht[lt]=n.COLOR_ATTACHMENT0+lt;ht.length=dt.length,bt=!0}}else ht[0]!==n.BACK&&(ht[0]=n.BACK,bt=!0);bt&&n.drawBuffers(ht)}function Ft(N){return x!==N?(n.useProgram(N),x=N,!0):!1}const re={[bi]:n.FUNC_ADD,[tu]:n.FUNC_SUBTRACT,[eu]:n.FUNC_REVERSE_SUBTRACT};re[nu]=n.MIN,re[iu]=n.MAX;const I={[su]:n.ZERO,[ru]:n.ONE,[au]:n.SRC_COLOR,[Ka]:n.SRC_ALPHA,[du]:n.SRC_ALPHA_SATURATE,[hu]:n.DST_COLOR,[cu]:n.DST_ALPHA,[ou]:n.ONE_MINUS_SRC_COLOR,[Za]:n.ONE_MINUS_SRC_ALPHA,[uu]:n.ONE_MINUS_DST_COLOR,[lu]:n.ONE_MINUS_DST_ALPHA,[fu]:n.CONSTANT_COLOR,[pu]:n.ONE_MINUS_CONSTANT_COLOR,[mu]:n.CONSTANT_ALPHA,[gu]:n.ONE_MINUS_CONSTANT_ALPHA};function ce(N,ot,ht,bt,dt,lt,Dt,Ht,ue,ie){if(N===ri){v===!0&&(_t(n.BLEND),v=!1);return}if(v===!1&&(Z(n.BLEND),v=!0),N!==Qh){if(N!==h||ie!==b){if((f!==bi||M!==bi)&&(n.blendEquation(n.FUNC_ADD),f=bi,M=bi),ie)switch(N){case Pi:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Nt:n.blendFunc(n.ONE,n.ONE);break;case Sc:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Ec:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",N);break}else switch(N){case Pi:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Nt:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case Sc:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Ec:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",N);break}m=null,_=null,y=null,E=null,C.set(0,0,0),L=0,h=N,b=ie}return}dt=dt||ot,lt=lt||ht,Dt=Dt||bt,(ot!==f||dt!==M)&&(n.blendEquationSeparate(re[ot],re[dt]),f=ot,M=dt),(ht!==m||bt!==_||lt!==y||Dt!==E)&&(n.blendFuncSeparate(I[ht],I[bt],I[lt],I[Dt]),m=ht,_=bt,y=lt,E=Dt),(Ht.equals(C)===!1||ue!==L)&&(n.blendColor(Ht.r,Ht.g,Ht.b,ue),C.copy(Ht),L=ue),h=N,b=!1}function Wt(N,ot){N.side===Gn?_t(n.CULL_FACE):Z(n.CULL_FACE);let ht=N.side===Je;ot&&(ht=!ht),Ct(ht),N.blending===Pi&&N.transparent===!1?ce(ri):ce(N.blending,N.blendEquation,N.blendSrc,N.blendDst,N.blendEquationAlpha,N.blendSrcAlpha,N.blendDstAlpha,N.blendColor,N.blendAlpha,N.premultipliedAlpha),a.setFunc(N.depthFunc),a.setTest(N.depthTest),a.setMask(N.depthWrite),r.setMask(N.colorWrite);const bt=N.stencilWrite;o.setTest(bt),bt&&(o.setMask(N.stencilWriteMask),o.setFunc(N.stencilFunc,N.stencilRef,N.stencilFuncMask),o.setOp(N.stencilFail,N.stencilZFail,N.stencilZPass)),ut(N.polygonOffset,N.polygonOffsetFactor,N.polygonOffsetUnits),N.alphaToCoverage===!0?Z(n.SAMPLE_ALPHA_TO_COVERAGE):_t(n.SAMPLE_ALPHA_TO_COVERAGE)}function Ct(N){S!==N&&(N?n.frontFace(n.CW):n.frontFace(n.CCW),S=N)}function wt(N){N!==Kh?(Z(n.CULL_FACE),N!==R&&(N===yc?n.cullFace(n.BACK):N===Zh?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):_t(n.CULL_FACE),R=N}function qt(N){N!==A&&(O&&n.lineWidth(N),A=N)}function ut(N,ot,ht){N?(Z(n.POLYGON_OFFSET_FILL),(P!==ot||F!==ht)&&(n.polygonOffset(ot,ht),P=ot,F=ht)):_t(n.POLYGON_OFFSET_FILL)}function yt(N){N?Z(n.SCISSOR_TEST):_t(n.SCISSOR_TEST)}function Jt(N){N===void 0&&(N=n.TEXTURE0+U-1),j!==N&&(n.activeTexture(N),j=N)}function ne(N,ot,ht){ht===void 0&&(j===null?ht=n.TEXTURE0+U-1:ht=j);let bt=K[ht];bt===void 0&&(bt={type:void 0,texture:void 0},K[ht]=bt),(bt.type!==N||bt.texture!==ot)&&(j!==ht&&(n.activeTexture(ht),j=ht),n.bindTexture(N,ot||Y[N]),bt.type=N,bt.texture=ot)}function D(){const N=K[j];N!==void 0&&N.type!==void 0&&(n.bindTexture(N.type,null),N.type=void 0,N.texture=void 0)}function T(){try{n.compressedTexImage2D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function $(){try{n.compressedTexImage3D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function st(){try{n.texSubImage2D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function k(){try{n.texSubImage3D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function B(){try{n.compressedTexSubImage2D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Mt(){try{n.compressedTexSubImage3D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function ct(){try{n.texStorage2D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function at(){try{n.texStorage3D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function it(){try{n.texImage2D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function tt(){try{n.texImage3D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function mt(N){G.equals(N)===!1&&(n.scissor(N.x,N.y,N.z,N.w),G.copy(N))}function Tt(N){xt.equals(N)===!1&&(n.viewport(N.x,N.y,N.z,N.w),xt.copy(N))}function gt(N,ot){let ht=c.get(ot);ht===void 0&&(ht=new WeakMap,c.set(ot,ht));let bt=ht.get(N);bt===void 0&&(bt=n.getUniformBlockIndex(ot,N.name),ht.set(N,bt))}function ft(N,ot){const bt=c.get(ot).get(N);l.get(ot)!==bt&&(n.uniformBlockBinding(ot,bt,N.__bindingPointIndex),l.set(ot,bt))}function It(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),a.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),d={},j=null,K={},u={},p=new WeakMap,g=[],x=null,v=!1,h=null,f=null,m=null,_=null,M=null,y=null,E=null,C=new kt(0,0,0),L=0,b=!1,S=null,R=null,A=null,P=null,F=null,G.set(0,0,n.canvas.width,n.canvas.height),xt.set(0,0,n.canvas.width,n.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:Z,disable:_t,bindFramebuffer:Et,drawBuffers:St,useProgram:Ft,setBlending:ce,setMaterial:Wt,setFlipSided:Ct,setCullFace:wt,setLineWidth:qt,setPolygonOffset:ut,setScissorTest:yt,activeTexture:Jt,bindTexture:ne,unbindTexture:D,compressedTexImage2D:T,compressedTexImage3D:$,texImage2D:it,texImage3D:tt,updateUBOMapping:gt,uniformBlockBinding:ft,texStorage2D:ct,texStorage3D:at,texSubImage2D:st,texSubImage3D:k,compressedTexSubImage2D:B,compressedTexSubImage3D:Mt,scissor:mt,viewport:Tt,reset:It}}function d0(n,t,e,i,s,r,a){const o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Vt,d=new WeakMap;let u;const p=new WeakMap;let g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function x(D,T){return g?new OffscreenCanvas(D,T):Zr("canvas")}function v(D,T,$){let st=1;const k=ne(D);if((k.width>$||k.height>$)&&(st=$/Math.max(k.width,k.height)),st<1)if(typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&D instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&D instanceof ImageBitmap||typeof VideoFrame<"u"&&D instanceof VideoFrame){const B=Math.floor(st*k.width),Mt=Math.floor(st*k.height);u===void 0&&(u=x(B,Mt));const ct=T?x(B,Mt):u;return ct.width=B,ct.height=Mt,ct.getContext("2d").drawImage(D,0,0,B,Mt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+k.width+"x"+k.height+") to ("+B+"x"+Mt+")."),ct}else return"data"in D&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+k.width+"x"+k.height+")."),D;return D}function h(D){return D.generateMipmaps}function f(D){n.generateMipmap(D)}function m(D){return D.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:D.isWebGL3DRenderTarget?n.TEXTURE_3D:D.isWebGLArrayRenderTarget||D.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function _(D,T,$,st,k=!1){if(D!==null){if(n[D]!==void 0)return n[D];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+D+"'")}let B=T;if(T===n.RED&&($===n.FLOAT&&(B=n.R32F),$===n.HALF_FLOAT&&(B=n.R16F),$===n.UNSIGNED_BYTE&&(B=n.R8)),T===n.RED_INTEGER&&($===n.UNSIGNED_BYTE&&(B=n.R8UI),$===n.UNSIGNED_SHORT&&(B=n.R16UI),$===n.UNSIGNED_INT&&(B=n.R32UI),$===n.BYTE&&(B=n.R8I),$===n.SHORT&&(B=n.R16I),$===n.INT&&(B=n.R32I)),T===n.RG&&($===n.FLOAT&&(B=n.RG32F),$===n.HALF_FLOAT&&(B=n.RG16F),$===n.UNSIGNED_BYTE&&(B=n.RG8)),T===n.RG_INTEGER&&($===n.UNSIGNED_BYTE&&(B=n.RG8UI),$===n.UNSIGNED_SHORT&&(B=n.RG16UI),$===n.UNSIGNED_INT&&(B=n.RG32UI),$===n.BYTE&&(B=n.RG8I),$===n.SHORT&&(B=n.RG16I),$===n.INT&&(B=n.RG32I)),T===n.RGB_INTEGER&&($===n.UNSIGNED_BYTE&&(B=n.RGB8UI),$===n.UNSIGNED_SHORT&&(B=n.RGB16UI),$===n.UNSIGNED_INT&&(B=n.RGB32UI),$===n.BYTE&&(B=n.RGB8I),$===n.SHORT&&(B=n.RGB16I),$===n.INT&&(B=n.RGB32I)),T===n.RGBA_INTEGER&&($===n.UNSIGNED_BYTE&&(B=n.RGBA8UI),$===n.UNSIGNED_SHORT&&(B=n.RGBA16UI),$===n.UNSIGNED_INT&&(B=n.RGBA32UI),$===n.BYTE&&(B=n.RGBA8I),$===n.SHORT&&(B=n.RGBA16I),$===n.INT&&(B=n.RGBA32I)),T===n.RGB&&($===n.UNSIGNED_INT_5_9_9_9_REV&&(B=n.RGB9_E5),$===n.UNSIGNED_INT_10F_11F_11F_REV&&(B=n.R11F_G11F_B10F)),T===n.RGBA){const Mt=k?jr:he.getTransfer(st);$===n.FLOAT&&(B=n.RGBA32F),$===n.HALF_FLOAT&&(B=n.RGBA16F),$===n.UNSIGNED_BYTE&&(B=Mt===pe?n.SRGB8_ALPHA8:n.RGBA8),$===n.UNSIGNED_SHORT_4_4_4_4&&(B=n.RGBA4),$===n.UNSIGNED_SHORT_5_5_5_1&&(B=n.RGB5_A1)}return(B===n.R16F||B===n.R32F||B===n.RG16F||B===n.RG32F||B===n.RGBA16F||B===n.RGBA32F)&&t.get("EXT_color_buffer_float"),B}function M(D,T){let $;return D?T===null||T===Ii||T===Ws?$=n.DEPTH24_STENCIL8:T===Vn?$=n.DEPTH32F_STENCIL8:T===Vs&&($=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):T===null||T===Ii||T===Ws?$=n.DEPTH_COMPONENT24:T===Vn?$=n.DEPTH_COMPONENT32F:T===Vs&&($=n.DEPTH_COMPONENT16),$}function y(D,T){return h(D)===!0||D.isFramebufferTexture&&D.minFilter!==wn&&D.minFilter!==En?Math.log2(Math.max(T.width,T.height))+1:D.mipmaps!==void 0&&D.mipmaps.length>0?D.mipmaps.length:D.isCompressedTexture&&Array.isArray(D.image)?T.mipmaps.length:1}function E(D){const T=D.target;T.removeEventListener("dispose",E),L(T),T.isVideoTexture&&d.delete(T)}function C(D){const T=D.target;T.removeEventListener("dispose",C),S(T)}function L(D){const T=i.get(D);if(T.__webglInit===void 0)return;const $=D.source,st=p.get($);if(st){const k=st[T.__cacheKey];k.usedTimes--,k.usedTimes===0&&b(D),Object.keys(st).length===0&&p.delete($)}i.remove(D)}function b(D){const T=i.get(D);n.deleteTexture(T.__webglTexture);const $=D.source,st=p.get($);delete st[T.__cacheKey],a.memory.textures--}function S(D){const T=i.get(D);if(D.depthTexture&&(D.depthTexture.dispose(),i.remove(D.depthTexture)),D.isWebGLCubeRenderTarget)for(let st=0;st<6;st++){if(Array.isArray(T.__webglFramebuffer[st]))for(let k=0;k<T.__webglFramebuffer[st].length;k++)n.deleteFramebuffer(T.__webglFramebuffer[st][k]);else n.deleteFramebuffer(T.__webglFramebuffer[st]);T.__webglDepthbuffer&&n.deleteRenderbuffer(T.__webglDepthbuffer[st])}else{if(Array.isArray(T.__webglFramebuffer))for(let st=0;st<T.__webglFramebuffer.length;st++)n.deleteFramebuffer(T.__webglFramebuffer[st]);else n.deleteFramebuffer(T.__webglFramebuffer);if(T.__webglDepthbuffer&&n.deleteRenderbuffer(T.__webglDepthbuffer),T.__webglMultisampledFramebuffer&&n.deleteFramebuffer(T.__webglMultisampledFramebuffer),T.__webglColorRenderbuffer)for(let st=0;st<T.__webglColorRenderbuffer.length;st++)T.__webglColorRenderbuffer[st]&&n.deleteRenderbuffer(T.__webglColorRenderbuffer[st]);T.__webglDepthRenderbuffer&&n.deleteRenderbuffer(T.__webglDepthRenderbuffer)}const $=D.textures;for(let st=0,k=$.length;st<k;st++){const B=i.get($[st]);B.__webglTexture&&(n.deleteTexture(B.__webglTexture),a.memory.textures--),i.remove($[st])}i.remove(D)}let R=0;function A(){R=0}function P(){const D=R;return D>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+D+" texture units while this GPU supports only "+s.maxTextures),R+=1,D}function F(D){const T=[];return T.push(D.wrapS),T.push(D.wrapT),T.push(D.wrapR||0),T.push(D.magFilter),T.push(D.minFilter),T.push(D.anisotropy),T.push(D.internalFormat),T.push(D.format),T.push(D.type),T.push(D.generateMipmaps),T.push(D.premultiplyAlpha),T.push(D.flipY),T.push(D.unpackAlignment),T.push(D.colorSpace),T.join()}function U(D,T){const $=i.get(D);if(D.isVideoTexture&&yt(D),D.isRenderTargetTexture===!1&&D.isExternalTexture!==!0&&D.version>0&&$.__version!==D.version){const st=D.image;if(st===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(st.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Y($,D,T);return}}else D.isExternalTexture&&($.__webglTexture=D.sourceTexture?D.sourceTexture:null);e.bindTexture(n.TEXTURE_2D,$.__webglTexture,n.TEXTURE0+T)}function O(D,T){const $=i.get(D);if(D.isRenderTargetTexture===!1&&D.version>0&&$.__version!==D.version){Y($,D,T);return}e.bindTexture(n.TEXTURE_2D_ARRAY,$.__webglTexture,n.TEXTURE0+T)}function W(D,T){const $=i.get(D);if(D.isRenderTargetTexture===!1&&D.version>0&&$.__version!==D.version){Y($,D,T);return}e.bindTexture(n.TEXTURE_3D,$.__webglTexture,n.TEXTURE0+T)}function V(D,T){const $=i.get(D);if(D.version>0&&$.__version!==D.version){Z($,D,T);return}e.bindTexture(n.TEXTURE_CUBE_MAP,$.__webglTexture,n.TEXTURE0+T)}const j={[oo]:n.REPEAT,[wi]:n.CLAMP_TO_EDGE,[co]:n.MIRRORED_REPEAT},K={[wn]:n.NEAREST,[Tu]:n.NEAREST_MIPMAP_NEAREST,[or]:n.NEAREST_MIPMAP_LINEAR,[En]:n.LINEAR,[fa]:n.LINEAR_MIPMAP_NEAREST,[si]:n.LINEAR_MIPMAP_LINEAR},et={[Pu]:n.NEVER,[Nu]:n.ALWAYS,[Du]:n.LESS,[eh]:n.LEQUAL,[Lu]:n.EQUAL,[Fu]:n.GEQUAL,[Iu]:n.GREATER,[Uu]:n.NOTEQUAL};function H(D,T){if(T.type===Vn&&t.has("OES_texture_float_linear")===!1&&(T.magFilter===En||T.magFilter===fa||T.magFilter===or||T.magFilter===si||T.minFilter===En||T.minFilter===fa||T.minFilter===or||T.minFilter===si)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(D,n.TEXTURE_WRAP_S,j[T.wrapS]),n.texParameteri(D,n.TEXTURE_WRAP_T,j[T.wrapT]),(D===n.TEXTURE_3D||D===n.TEXTURE_2D_ARRAY)&&n.texParameteri(D,n.TEXTURE_WRAP_R,j[T.wrapR]),n.texParameteri(D,n.TEXTURE_MAG_FILTER,K[T.magFilter]),n.texParameteri(D,n.TEXTURE_MIN_FILTER,K[T.minFilter]),T.compareFunction&&(n.texParameteri(D,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(D,n.TEXTURE_COMPARE_FUNC,et[T.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(T.magFilter===wn||T.minFilter!==or&&T.minFilter!==si||T.type===Vn&&t.has("OES_texture_float_linear")===!1)return;if(T.anisotropy>1||i.get(T).__currentAnisotropy){const $=t.get("EXT_texture_filter_anisotropic");n.texParameterf(D,$.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(T.anisotropy,s.getMaxAnisotropy())),i.get(T).__currentAnisotropy=T.anisotropy}}}function G(D,T){let $=!1;D.__webglInit===void 0&&(D.__webglInit=!0,T.addEventListener("dispose",E));const st=T.source;let k=p.get(st);k===void 0&&(k={},p.set(st,k));const B=F(T);if(B!==D.__cacheKey){k[B]===void 0&&(k[B]={texture:n.createTexture(),usedTimes:0},a.memory.textures++,$=!0),k[B].usedTimes++;const Mt=k[D.__cacheKey];Mt!==void 0&&(k[D.__cacheKey].usedTimes--,Mt.usedTimes===0&&b(T)),D.__cacheKey=B,D.__webglTexture=k[B].texture}return $}function xt(D,T,$){return Math.floor(Math.floor(D/$)/T)}function pt(D,T,$,st){const B=D.updateRanges;if(B.length===0)e.texSubImage2D(n.TEXTURE_2D,0,0,0,T.width,T.height,$,st,T.data);else{B.sort((tt,mt)=>tt.start-mt.start);let Mt=0;for(let tt=1;tt<B.length;tt++){const mt=B[Mt],Tt=B[tt],gt=mt.start+mt.count,ft=xt(Tt.start,T.width,4),It=xt(mt.start,T.width,4);Tt.start<=gt+1&&ft===It&&xt(Tt.start+Tt.count-1,T.width,4)===ft?mt.count=Math.max(mt.count,Tt.start+Tt.count-mt.start):(++Mt,B[Mt]=Tt)}B.length=Mt+1;const ct=n.getParameter(n.UNPACK_ROW_LENGTH),at=n.getParameter(n.UNPACK_SKIP_PIXELS),it=n.getParameter(n.UNPACK_SKIP_ROWS);n.pixelStorei(n.UNPACK_ROW_LENGTH,T.width);for(let tt=0,mt=B.length;tt<mt;tt++){const Tt=B[tt],gt=Math.floor(Tt.start/4),ft=Math.ceil(Tt.count/4),It=gt%T.width,N=Math.floor(gt/T.width),ot=ft,ht=1;n.pixelStorei(n.UNPACK_SKIP_PIXELS,It),n.pixelStorei(n.UNPACK_SKIP_ROWS,N),e.texSubImage2D(n.TEXTURE_2D,0,It,N,ot,ht,$,st,T.data)}D.clearUpdateRanges(),n.pixelStorei(n.UNPACK_ROW_LENGTH,ct),n.pixelStorei(n.UNPACK_SKIP_PIXELS,at),n.pixelStorei(n.UNPACK_SKIP_ROWS,it)}}function Y(D,T,$){let st=n.TEXTURE_2D;(T.isDataArrayTexture||T.isCompressedArrayTexture)&&(st=n.TEXTURE_2D_ARRAY),T.isData3DTexture&&(st=n.TEXTURE_3D);const k=G(D,T),B=T.source;e.bindTexture(st,D.__webglTexture,n.TEXTURE0+$);const Mt=i.get(B);if(B.version!==Mt.__version||k===!0){e.activeTexture(n.TEXTURE0+$);const ct=he.getPrimaries(he.workingColorSpace),at=T.colorSpace===ni?null:he.getPrimaries(T.colorSpace),it=T.colorSpace===ni||ct===at?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,T.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,T.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,it);let tt=v(T.image,!1,s.maxTextureSize);tt=Jt(T,tt);const mt=r.convert(T.format,T.colorSpace),Tt=r.convert(T.type);let gt=_(T.internalFormat,mt,Tt,T.colorSpace,T.isVideoTexture);H(st,T);let ft;const It=T.mipmaps,N=T.isVideoTexture!==!0,ot=Mt.__version===void 0||k===!0,ht=B.dataReady,bt=y(T,tt);if(T.isDepthTexture)gt=M(T.format===Ys,T.type),ot&&(N?e.texStorage2D(n.TEXTURE_2D,1,gt,tt.width,tt.height):e.texImage2D(n.TEXTURE_2D,0,gt,tt.width,tt.height,0,mt,Tt,null));else if(T.isDataTexture)if(It.length>0){N&&ot&&e.texStorage2D(n.TEXTURE_2D,bt,gt,It[0].width,It[0].height);for(let dt=0,lt=It.length;dt<lt;dt++)ft=It[dt],N?ht&&e.texSubImage2D(n.TEXTURE_2D,dt,0,0,ft.width,ft.height,mt,Tt,ft.data):e.texImage2D(n.TEXTURE_2D,dt,gt,ft.width,ft.height,0,mt,Tt,ft.data);T.generateMipmaps=!1}else N?(ot&&e.texStorage2D(n.TEXTURE_2D,bt,gt,tt.width,tt.height),ht&&pt(T,tt,mt,Tt)):e.texImage2D(n.TEXTURE_2D,0,gt,tt.width,tt.height,0,mt,Tt,tt.data);else if(T.isCompressedTexture)if(T.isCompressedArrayTexture){N&&ot&&e.texStorage3D(n.TEXTURE_2D_ARRAY,bt,gt,It[0].width,It[0].height,tt.depth);for(let dt=0,lt=It.length;dt<lt;dt++)if(ft=It[dt],T.format!==bn)if(mt!==null)if(N){if(ht)if(T.layerUpdates.size>0){const Dt=nl(ft.width,ft.height,T.format,T.type);for(const Ht of T.layerUpdates){const ue=ft.data.subarray(Ht*Dt/ft.data.BYTES_PER_ELEMENT,(Ht+1)*Dt/ft.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,dt,0,0,Ht,ft.width,ft.height,1,mt,ue)}T.clearLayerUpdates()}else e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,dt,0,0,0,ft.width,ft.height,tt.depth,mt,ft.data)}else e.compressedTexImage3D(n.TEXTURE_2D_ARRAY,dt,gt,ft.width,ft.height,tt.depth,0,ft.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else N?ht&&e.texSubImage3D(n.TEXTURE_2D_ARRAY,dt,0,0,0,ft.width,ft.height,tt.depth,mt,Tt,ft.data):e.texImage3D(n.TEXTURE_2D_ARRAY,dt,gt,ft.width,ft.height,tt.depth,0,mt,Tt,ft.data)}else{N&&ot&&e.texStorage2D(n.TEXTURE_2D,bt,gt,It[0].width,It[0].height);for(let dt=0,lt=It.length;dt<lt;dt++)ft=It[dt],T.format!==bn?mt!==null?N?ht&&e.compressedTexSubImage2D(n.TEXTURE_2D,dt,0,0,ft.width,ft.height,mt,ft.data):e.compressedTexImage2D(n.TEXTURE_2D,dt,gt,ft.width,ft.height,0,ft.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):N?ht&&e.texSubImage2D(n.TEXTURE_2D,dt,0,0,ft.width,ft.height,mt,Tt,ft.data):e.texImage2D(n.TEXTURE_2D,dt,gt,ft.width,ft.height,0,mt,Tt,ft.data)}else if(T.isDataArrayTexture)if(N){if(ot&&e.texStorage3D(n.TEXTURE_2D_ARRAY,bt,gt,tt.width,tt.height,tt.depth),ht)if(T.layerUpdates.size>0){const dt=nl(tt.width,tt.height,T.format,T.type);for(const lt of T.layerUpdates){const Dt=tt.data.subarray(lt*dt/tt.data.BYTES_PER_ELEMENT,(lt+1)*dt/tt.data.BYTES_PER_ELEMENT);e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,lt,tt.width,tt.height,1,mt,Tt,Dt)}T.clearLayerUpdates()}else e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,tt.width,tt.height,tt.depth,mt,Tt,tt.data)}else e.texImage3D(n.TEXTURE_2D_ARRAY,0,gt,tt.width,tt.height,tt.depth,0,mt,Tt,tt.data);else if(T.isData3DTexture)N?(ot&&e.texStorage3D(n.TEXTURE_3D,bt,gt,tt.width,tt.height,tt.depth),ht&&e.texSubImage3D(n.TEXTURE_3D,0,0,0,0,tt.width,tt.height,tt.depth,mt,Tt,tt.data)):e.texImage3D(n.TEXTURE_3D,0,gt,tt.width,tt.height,tt.depth,0,mt,Tt,tt.data);else if(T.isFramebufferTexture){if(ot)if(N)e.texStorage2D(n.TEXTURE_2D,bt,gt,tt.width,tt.height);else{let dt=tt.width,lt=tt.height;for(let Dt=0;Dt<bt;Dt++)e.texImage2D(n.TEXTURE_2D,Dt,gt,dt,lt,0,mt,Tt,null),dt>>=1,lt>>=1}}else if(It.length>0){if(N&&ot){const dt=ne(It[0]);e.texStorage2D(n.TEXTURE_2D,bt,gt,dt.width,dt.height)}for(let dt=0,lt=It.length;dt<lt;dt++)ft=It[dt],N?ht&&e.texSubImage2D(n.TEXTURE_2D,dt,0,0,mt,Tt,ft):e.texImage2D(n.TEXTURE_2D,dt,gt,mt,Tt,ft);T.generateMipmaps=!1}else if(N){if(ot){const dt=ne(tt);e.texStorage2D(n.TEXTURE_2D,bt,gt,dt.width,dt.height)}ht&&e.texSubImage2D(n.TEXTURE_2D,0,0,0,mt,Tt,tt)}else e.texImage2D(n.TEXTURE_2D,0,gt,mt,Tt,tt);h(T)&&f(st),Mt.__version=B.version,T.onUpdate&&T.onUpdate(T)}D.__version=T.version}function Z(D,T,$){if(T.image.length!==6)return;const st=G(D,T),k=T.source;e.bindTexture(n.TEXTURE_CUBE_MAP,D.__webglTexture,n.TEXTURE0+$);const B=i.get(k);if(k.version!==B.__version||st===!0){e.activeTexture(n.TEXTURE0+$);const Mt=he.getPrimaries(he.workingColorSpace),ct=T.colorSpace===ni?null:he.getPrimaries(T.colorSpace),at=T.colorSpace===ni||Mt===ct?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,T.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,T.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,at);const it=T.isCompressedTexture||T.image[0].isCompressedTexture,tt=T.image[0]&&T.image[0].isDataTexture,mt=[];for(let lt=0;lt<6;lt++)!it&&!tt?mt[lt]=v(T.image[lt],!0,s.maxCubemapSize):mt[lt]=tt?T.image[lt].image:T.image[lt],mt[lt]=Jt(T,mt[lt]);const Tt=mt[0],gt=r.convert(T.format,T.colorSpace),ft=r.convert(T.type),It=_(T.internalFormat,gt,ft,T.colorSpace),N=T.isVideoTexture!==!0,ot=B.__version===void 0||st===!0,ht=k.dataReady;let bt=y(T,Tt);H(n.TEXTURE_CUBE_MAP,T);let dt;if(it){N&&ot&&e.texStorage2D(n.TEXTURE_CUBE_MAP,bt,It,Tt.width,Tt.height);for(let lt=0;lt<6;lt++){dt=mt[lt].mipmaps;for(let Dt=0;Dt<dt.length;Dt++){const Ht=dt[Dt];T.format!==bn?gt!==null?N?ht&&e.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+lt,Dt,0,0,Ht.width,Ht.height,gt,Ht.data):e.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+lt,Dt,It,Ht.width,Ht.height,0,Ht.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):N?ht&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+lt,Dt,0,0,Ht.width,Ht.height,gt,ft,Ht.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+lt,Dt,It,Ht.width,Ht.height,0,gt,ft,Ht.data)}}}else{if(dt=T.mipmaps,N&&ot){dt.length>0&&bt++;const lt=ne(mt[0]);e.texStorage2D(n.TEXTURE_CUBE_MAP,bt,It,lt.width,lt.height)}for(let lt=0;lt<6;lt++)if(tt){N?ht&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+lt,0,0,0,mt[lt].width,mt[lt].height,gt,ft,mt[lt].data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+lt,0,It,mt[lt].width,mt[lt].height,0,gt,ft,mt[lt].data);for(let Dt=0;Dt<dt.length;Dt++){const ue=dt[Dt].image[lt].image;N?ht&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+lt,Dt+1,0,0,ue.width,ue.height,gt,ft,ue.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+lt,Dt+1,It,ue.width,ue.height,0,gt,ft,ue.data)}}else{N?ht&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+lt,0,0,0,gt,ft,mt[lt]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+lt,0,It,gt,ft,mt[lt]);for(let Dt=0;Dt<dt.length;Dt++){const Ht=dt[Dt];N?ht&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+lt,Dt+1,0,0,gt,ft,Ht.image[lt]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+lt,Dt+1,It,gt,ft,Ht.image[lt])}}}h(T)&&f(n.TEXTURE_CUBE_MAP),B.__version=k.version,T.onUpdate&&T.onUpdate(T)}D.__version=T.version}function _t(D,T,$,st,k,B){const Mt=r.convert($.format,$.colorSpace),ct=r.convert($.type),at=_($.internalFormat,Mt,ct,$.colorSpace),it=i.get(T),tt=i.get($);if(tt.__renderTarget=T,!it.__hasExternalTextures){const mt=Math.max(1,T.width>>B),Tt=Math.max(1,T.height>>B);k===n.TEXTURE_3D||k===n.TEXTURE_2D_ARRAY?e.texImage3D(k,B,at,mt,Tt,T.depth,0,Mt,ct,null):e.texImage2D(k,B,at,mt,Tt,0,Mt,ct,null)}e.bindFramebuffer(n.FRAMEBUFFER,D),ut(T)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,st,k,tt.__webglTexture,0,qt(T)):(k===n.TEXTURE_2D||k>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&k<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,st,k,tt.__webglTexture,B),e.bindFramebuffer(n.FRAMEBUFFER,null)}function Et(D,T,$){if(n.bindRenderbuffer(n.RENDERBUFFER,D),T.depthBuffer){const st=T.depthTexture,k=st&&st.isDepthTexture?st.type:null,B=M(T.stencilBuffer,k),Mt=T.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ct=qt(T);ut(T)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ct,B,T.width,T.height):$?n.renderbufferStorageMultisample(n.RENDERBUFFER,ct,B,T.width,T.height):n.renderbufferStorage(n.RENDERBUFFER,B,T.width,T.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,Mt,n.RENDERBUFFER,D)}else{const st=T.textures;for(let k=0;k<st.length;k++){const B=st[k],Mt=r.convert(B.format,B.colorSpace),ct=r.convert(B.type),at=_(B.internalFormat,Mt,ct,B.colorSpace),it=qt(T);$&&ut(T)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,it,at,T.width,T.height):ut(T)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,it,at,T.width,T.height):n.renderbufferStorage(n.RENDERBUFFER,at,T.width,T.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function St(D,T){if(T&&T.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(n.FRAMEBUFFER,D),!(T.depthTexture&&T.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const st=i.get(T.depthTexture);st.__renderTarget=T,(!st.__webglTexture||T.depthTexture.image.width!==T.width||T.depthTexture.image.height!==T.height)&&(T.depthTexture.image.width=T.width,T.depthTexture.image.height=T.height,T.depthTexture.needsUpdate=!0),U(T.depthTexture,0);const k=st.__webglTexture,B=qt(T);if(T.depthTexture.format===Xs)ut(T)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,k,0,B):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,k,0);else if(T.depthTexture.format===Ys)ut(T)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,k,0,B):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,k,0);else throw new Error("Unknown depthTexture format")}function Ft(D){const T=i.get(D),$=D.isWebGLCubeRenderTarget===!0;if(T.__boundDepthTexture!==D.depthTexture){const st=D.depthTexture;if(T.__depthDisposeCallback&&T.__depthDisposeCallback(),st){const k=()=>{delete T.__boundDepthTexture,delete T.__depthDisposeCallback,st.removeEventListener("dispose",k)};st.addEventListener("dispose",k),T.__depthDisposeCallback=k}T.__boundDepthTexture=st}if(D.depthTexture&&!T.__autoAllocateDepthBuffer){if($)throw new Error("target.depthTexture not supported in Cube render targets");const st=D.texture.mipmaps;st&&st.length>0?St(T.__webglFramebuffer[0],D):St(T.__webglFramebuffer,D)}else if($){T.__webglDepthbuffer=[];for(let st=0;st<6;st++)if(e.bindFramebuffer(n.FRAMEBUFFER,T.__webglFramebuffer[st]),T.__webglDepthbuffer[st]===void 0)T.__webglDepthbuffer[st]=n.createRenderbuffer(),Et(T.__webglDepthbuffer[st],D,!1);else{const k=D.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,B=T.__webglDepthbuffer[st];n.bindRenderbuffer(n.RENDERBUFFER,B),n.framebufferRenderbuffer(n.FRAMEBUFFER,k,n.RENDERBUFFER,B)}}else{const st=D.texture.mipmaps;if(st&&st.length>0?e.bindFramebuffer(n.FRAMEBUFFER,T.__webglFramebuffer[0]):e.bindFramebuffer(n.FRAMEBUFFER,T.__webglFramebuffer),T.__webglDepthbuffer===void 0)T.__webglDepthbuffer=n.createRenderbuffer(),Et(T.__webglDepthbuffer,D,!1);else{const k=D.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,B=T.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,B),n.framebufferRenderbuffer(n.FRAMEBUFFER,k,n.RENDERBUFFER,B)}}e.bindFramebuffer(n.FRAMEBUFFER,null)}function re(D,T,$){const st=i.get(D);T!==void 0&&_t(st.__webglFramebuffer,D,D.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),$!==void 0&&Ft(D)}function I(D){const T=D.texture,$=i.get(D),st=i.get(T);D.addEventListener("dispose",C);const k=D.textures,B=D.isWebGLCubeRenderTarget===!0,Mt=k.length>1;if(Mt||(st.__webglTexture===void 0&&(st.__webglTexture=n.createTexture()),st.__version=T.version,a.memory.textures++),B){$.__webglFramebuffer=[];for(let ct=0;ct<6;ct++)if(T.mipmaps&&T.mipmaps.length>0){$.__webglFramebuffer[ct]=[];for(let at=0;at<T.mipmaps.length;at++)$.__webglFramebuffer[ct][at]=n.createFramebuffer()}else $.__webglFramebuffer[ct]=n.createFramebuffer()}else{if(T.mipmaps&&T.mipmaps.length>0){$.__webglFramebuffer=[];for(let ct=0;ct<T.mipmaps.length;ct++)$.__webglFramebuffer[ct]=n.createFramebuffer()}else $.__webglFramebuffer=n.createFramebuffer();if(Mt)for(let ct=0,at=k.length;ct<at;ct++){const it=i.get(k[ct]);it.__webglTexture===void 0&&(it.__webglTexture=n.createTexture(),a.memory.textures++)}if(D.samples>0&&ut(D)===!1){$.__webglMultisampledFramebuffer=n.createFramebuffer(),$.__webglColorRenderbuffer=[],e.bindFramebuffer(n.FRAMEBUFFER,$.__webglMultisampledFramebuffer);for(let ct=0;ct<k.length;ct++){const at=k[ct];$.__webglColorRenderbuffer[ct]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,$.__webglColorRenderbuffer[ct]);const it=r.convert(at.format,at.colorSpace),tt=r.convert(at.type),mt=_(at.internalFormat,it,tt,at.colorSpace,D.isXRRenderTarget===!0),Tt=qt(D);n.renderbufferStorageMultisample(n.RENDERBUFFER,Tt,mt,D.width,D.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ct,n.RENDERBUFFER,$.__webglColorRenderbuffer[ct])}n.bindRenderbuffer(n.RENDERBUFFER,null),D.depthBuffer&&($.__webglDepthRenderbuffer=n.createRenderbuffer(),Et($.__webglDepthRenderbuffer,D,!0)),e.bindFramebuffer(n.FRAMEBUFFER,null)}}if(B){e.bindTexture(n.TEXTURE_CUBE_MAP,st.__webglTexture),H(n.TEXTURE_CUBE_MAP,T);for(let ct=0;ct<6;ct++)if(T.mipmaps&&T.mipmaps.length>0)for(let at=0;at<T.mipmaps.length;at++)_t($.__webglFramebuffer[ct][at],D,T,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ct,at);else _t($.__webglFramebuffer[ct],D,T,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ct,0);h(T)&&f(n.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Mt){for(let ct=0,at=k.length;ct<at;ct++){const it=k[ct],tt=i.get(it);let mt=n.TEXTURE_2D;(D.isWebGL3DRenderTarget||D.isWebGLArrayRenderTarget)&&(mt=D.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),e.bindTexture(mt,tt.__webglTexture),H(mt,it),_t($.__webglFramebuffer,D,it,n.COLOR_ATTACHMENT0+ct,mt,0),h(it)&&f(mt)}e.unbindTexture()}else{let ct=n.TEXTURE_2D;if((D.isWebGL3DRenderTarget||D.isWebGLArrayRenderTarget)&&(ct=D.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),e.bindTexture(ct,st.__webglTexture),H(ct,T),T.mipmaps&&T.mipmaps.length>0)for(let at=0;at<T.mipmaps.length;at++)_t($.__webglFramebuffer[at],D,T,n.COLOR_ATTACHMENT0,ct,at);else _t($.__webglFramebuffer,D,T,n.COLOR_ATTACHMENT0,ct,0);h(T)&&f(ct),e.unbindTexture()}D.depthBuffer&&Ft(D)}function ce(D){const T=D.textures;for(let $=0,st=T.length;$<st;$++){const k=T[$];if(h(k)){const B=m(D),Mt=i.get(k).__webglTexture;e.bindTexture(B,Mt),f(B),e.unbindTexture()}}}const Wt=[],Ct=[];function wt(D){if(D.samples>0){if(ut(D)===!1){const T=D.textures,$=D.width,st=D.height;let k=n.COLOR_BUFFER_BIT;const B=D.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Mt=i.get(D),ct=T.length>1;if(ct)for(let it=0;it<T.length;it++)e.bindFramebuffer(n.FRAMEBUFFER,Mt.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+it,n.RENDERBUFFER,null),e.bindFramebuffer(n.FRAMEBUFFER,Mt.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+it,n.TEXTURE_2D,null,0);e.bindFramebuffer(n.READ_FRAMEBUFFER,Mt.__webglMultisampledFramebuffer);const at=D.texture.mipmaps;at&&at.length>0?e.bindFramebuffer(n.DRAW_FRAMEBUFFER,Mt.__webglFramebuffer[0]):e.bindFramebuffer(n.DRAW_FRAMEBUFFER,Mt.__webglFramebuffer);for(let it=0;it<T.length;it++){if(D.resolveDepthBuffer&&(D.depthBuffer&&(k|=n.DEPTH_BUFFER_BIT),D.stencilBuffer&&D.resolveStencilBuffer&&(k|=n.STENCIL_BUFFER_BIT)),ct){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,Mt.__webglColorRenderbuffer[it]);const tt=i.get(T[it]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,tt,0)}n.blitFramebuffer(0,0,$,st,0,0,$,st,k,n.NEAREST),l===!0&&(Wt.length=0,Ct.length=0,Wt.push(n.COLOR_ATTACHMENT0+it),D.depthBuffer&&D.resolveDepthBuffer===!1&&(Wt.push(B),Ct.push(B),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,Ct)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,Wt))}if(e.bindFramebuffer(n.READ_FRAMEBUFFER,null),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),ct)for(let it=0;it<T.length;it++){e.bindFramebuffer(n.FRAMEBUFFER,Mt.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+it,n.RENDERBUFFER,Mt.__webglColorRenderbuffer[it]);const tt=i.get(T[it]).__webglTexture;e.bindFramebuffer(n.FRAMEBUFFER,Mt.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+it,n.TEXTURE_2D,tt,0)}e.bindFramebuffer(n.DRAW_FRAMEBUFFER,Mt.__webglMultisampledFramebuffer)}else if(D.depthBuffer&&D.resolveDepthBuffer===!1&&l){const T=D.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[T])}}}function qt(D){return Math.min(s.maxSamples,D.samples)}function ut(D){const T=i.get(D);return D.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&T.__useRenderToTexture!==!1}function yt(D){const T=a.render.frame;d.get(D)!==T&&(d.set(D,T),D.update())}function Jt(D,T){const $=D.colorSpace,st=D.format,k=D.type;return D.isCompressedTexture===!0||D.isVideoTexture===!0||$!==vs&&$!==ni&&(he.getTransfer($)===pe?(st!==bn||k!==Yn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",$)),T}function ne(D){return typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement?(c.width=D.naturalWidth||D.width,c.height=D.naturalHeight||D.height):typeof VideoFrame<"u"&&D instanceof VideoFrame?(c.width=D.displayWidth,c.height=D.displayHeight):(c.width=D.width,c.height=D.height),c}this.allocateTextureUnit=P,this.resetTextureUnits=A,this.setTexture2D=U,this.setTexture2DArray=O,this.setTexture3D=W,this.setTextureCube=V,this.rebindTextures=re,this.setupRenderTarget=I,this.updateRenderTargetMipmap=ce,this.updateMultisampleRenderTarget=wt,this.setupDepthRenderbuffer=Ft,this.setupFrameBufferTexture=_t,this.useMultisampledRTT=ut}function f0(n,t){function e(i,s=ni){let r;const a=he.getTransfer(s);if(i===Yn)return n.UNSIGNED_BYTE;if(i===tc)return n.UNSIGNED_SHORT_4_4_4_4;if(i===ec)return n.UNSIGNED_SHORT_5_5_5_1;if(i===jl)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===Kl)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===ql)return n.BYTE;if(i===$l)return n.SHORT;if(i===Vs)return n.UNSIGNED_SHORT;if(i===Qo)return n.INT;if(i===Ii)return n.UNSIGNED_INT;if(i===Vn)return n.FLOAT;if(i===Zs)return n.HALF_FLOAT;if(i===Zl)return n.ALPHA;if(i===Jl)return n.RGB;if(i===bn)return n.RGBA;if(i===Xs)return n.DEPTH_COMPONENT;if(i===Ys)return n.DEPTH_STENCIL;if(i===Ql)return n.RED;if(i===nc)return n.RED_INTEGER;if(i===th)return n.RG;if(i===ic)return n.RG_INTEGER;if(i===sc)return n.RGBA_INTEGER;if(i===Hr||i===Gr||i===Vr||i===Wr)if(a===pe)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===Hr)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Gr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Vr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Wr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===Hr)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Gr)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Vr)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Wr)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===lo||i===ho||i===uo||i===fo)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===lo)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===ho)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===uo)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===fo)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===po||i===mo||i===go)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(i===po||i===mo)return a===pe?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===go)return a===pe?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===_o||i===xo||i===Mo||i===vo||i===yo||i===So||i===Eo||i===bo||i===To||i===Ao||i===wo||i===Ro||i===Co||i===Po)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(i===_o)return a===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===xo)return a===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Mo)return a===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===vo)return a===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===yo)return a===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===So)return a===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Eo)return a===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===bo)return a===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===To)return a===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Ao)return a===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===wo)return a===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Ro)return a===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Co)return a===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Po)return a===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Do||i===Lo||i===Io)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(i===Do)return a===pe?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Lo)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Io)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Uo||i===Fo||i===No||i===Oo)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(i===Uo)return r.COMPRESSED_RED_RGTC1_EXT;if(i===Fo)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===No)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Oo)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Ws?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:e}}const p0=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,m0=`
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

}`;class g0{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){const i=new fh(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=i}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,i=new ui({vertexShader:p0,fragmentShader:m0,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new pn(new ra(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class _0 extends Oi{constructor(t,e){super();const i=this;let s=null,r=1,a=null,o="local-floor",l=1,c=null,d=null,u=null,p=null,g=null,x=null;const v=typeof XRWebGLBinding<"u",h=new g0,f={},m=e.getContextAttributes();let _=null,M=null;const y=[],E=[],C=new Vt;let L=null;const b=new dn;b.viewport=new be;const S=new dn;S.viewport=new be;const R=[b,S],A=new Fd;let P=null,F=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Y){let Z=y[Y];return Z===void 0&&(Z=new Ua,y[Y]=Z),Z.getTargetRaySpace()},this.getControllerGrip=function(Y){let Z=y[Y];return Z===void 0&&(Z=new Ua,y[Y]=Z),Z.getGripSpace()},this.getHand=function(Y){let Z=y[Y];return Z===void 0&&(Z=new Ua,y[Y]=Z),Z.getHandSpace()};function U(Y){const Z=E.indexOf(Y.inputSource);if(Z===-1)return;const _t=y[Z];_t!==void 0&&(_t.update(Y.inputSource,Y.frame,c||a),_t.dispatchEvent({type:Y.type,data:Y.inputSource}))}function O(){s.removeEventListener("select",U),s.removeEventListener("selectstart",U),s.removeEventListener("selectend",U),s.removeEventListener("squeeze",U),s.removeEventListener("squeezestart",U),s.removeEventListener("squeezeend",U),s.removeEventListener("end",O),s.removeEventListener("inputsourceschange",W);for(let Y=0;Y<y.length;Y++){const Z=E[Y];Z!==null&&(E[Y]=null,y[Y].disconnect(Z))}P=null,F=null,h.reset();for(const Y in f)delete f[Y];t.setRenderTarget(_),g=null,p=null,u=null,s=null,M=null,pt.stop(),i.isPresenting=!1,t.setPixelRatio(L),t.setSize(C.width,C.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Y){r=Y,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Y){o=Y,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(Y){c=Y},this.getBaseLayer=function(){return p!==null?p:g},this.getBinding=function(){return u===null&&v&&(u=new XRWebGLBinding(s,e)),u},this.getFrame=function(){return x},this.getSession=function(){return s},this.setSession=async function(Y){if(s=Y,s!==null){if(_=t.getRenderTarget(),s.addEventListener("select",U),s.addEventListener("selectstart",U),s.addEventListener("selectend",U),s.addEventListener("squeeze",U),s.addEventListener("squeezestart",U),s.addEventListener("squeezeend",U),s.addEventListener("end",O),s.addEventListener("inputsourceschange",W),m.xrCompatible!==!0&&await e.makeXRCompatible(),L=t.getPixelRatio(),t.getSize(C),v&&"createProjectionLayer"in XRWebGLBinding.prototype){let _t=null,Et=null,St=null;m.depth&&(St=m.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,_t=m.stencil?Ys:Xs,Et=m.stencil?Ws:Ii);const Ft={colorFormat:e.RGBA8,depthFormat:St,scaleFactor:r};u=this.getBinding(),p=u.createProjectionLayer(Ft),s.updateRenderState({layers:[p]}),t.setPixelRatio(1),t.setSize(p.textureWidth,p.textureHeight,!1),M=new Ui(p.textureWidth,p.textureHeight,{format:bn,type:Yn,depthTexture:new dh(p.textureWidth,p.textureHeight,Et,void 0,void 0,void 0,void 0,void 0,void 0,_t),stencilBuffer:m.stencil,colorSpace:t.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1})}else{const _t={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};g=new XRWebGLLayer(s,e,_t),s.updateRenderState({baseLayer:g}),t.setPixelRatio(1),t.setSize(g.framebufferWidth,g.framebufferHeight,!1),M=new Ui(g.framebufferWidth,g.framebufferHeight,{format:bn,type:Yn,colorSpace:t.outputColorSpace,stencilBuffer:m.stencil,resolveDepthBuffer:g.ignoreDepthValues===!1,resolveStencilBuffer:g.ignoreDepthValues===!1})}M.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),pt.setContext(s),pt.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return h.getDepthTexture()};function W(Y){for(let Z=0;Z<Y.removed.length;Z++){const _t=Y.removed[Z],Et=E.indexOf(_t);Et>=0&&(E[Et]=null,y[Et].disconnect(_t))}for(let Z=0;Z<Y.added.length;Z++){const _t=Y.added[Z];let Et=E.indexOf(_t);if(Et===-1){for(let Ft=0;Ft<y.length;Ft++)if(Ft>=E.length){E.push(_t),Et=Ft;break}else if(E[Ft]===null){E[Ft]=_t,Et=Ft;break}if(Et===-1)break}const St=y[Et];St&&St.connect(_t)}}const V=new z,j=new z;function K(Y,Z,_t){V.setFromMatrixPosition(Z.matrixWorld),j.setFromMatrixPosition(_t.matrixWorld);const Et=V.distanceTo(j),St=Z.projectionMatrix.elements,Ft=_t.projectionMatrix.elements,re=St[14]/(St[10]-1),I=St[14]/(St[10]+1),ce=(St[9]+1)/St[5],Wt=(St[9]-1)/St[5],Ct=(St[8]-1)/St[0],wt=(Ft[8]+1)/Ft[0],qt=re*Ct,ut=re*wt,yt=Et/(-Ct+wt),Jt=yt*-Ct;if(Z.matrixWorld.decompose(Y.position,Y.quaternion,Y.scale),Y.translateX(Jt),Y.translateZ(yt),Y.matrixWorld.compose(Y.position,Y.quaternion,Y.scale),Y.matrixWorldInverse.copy(Y.matrixWorld).invert(),St[10]===-1)Y.projectionMatrix.copy(Z.projectionMatrix),Y.projectionMatrixInverse.copy(Z.projectionMatrixInverse);else{const ne=re+yt,D=I+yt,T=qt-Jt,$=ut+(Et-Jt),st=ce*I/D*ne,k=Wt*I/D*ne;Y.projectionMatrix.makePerspective(T,$,st,k,ne,D),Y.projectionMatrixInverse.copy(Y.projectionMatrix).invert()}}function et(Y,Z){Z===null?Y.matrixWorld.copy(Y.matrix):Y.matrixWorld.multiplyMatrices(Z.matrixWorld,Y.matrix),Y.matrixWorldInverse.copy(Y.matrixWorld).invert()}this.updateCamera=function(Y){if(s===null)return;let Z=Y.near,_t=Y.far;h.texture!==null&&(h.depthNear>0&&(Z=h.depthNear),h.depthFar>0&&(_t=h.depthFar)),A.near=S.near=b.near=Z,A.far=S.far=b.far=_t,(P!==A.near||F!==A.far)&&(s.updateRenderState({depthNear:A.near,depthFar:A.far}),P=A.near,F=A.far),A.layers.mask=Y.layers.mask|6,b.layers.mask=A.layers.mask&3,S.layers.mask=A.layers.mask&5;const Et=Y.parent,St=A.cameras;et(A,Et);for(let Ft=0;Ft<St.length;Ft++)et(St[Ft],Et);St.length===2?K(A,b,S):A.projectionMatrix.copy(b.projectionMatrix),H(Y,A,Et)};function H(Y,Z,_t){_t===null?Y.matrix.copy(Z.matrixWorld):(Y.matrix.copy(_t.matrixWorld),Y.matrix.invert(),Y.matrix.multiply(Z.matrixWorld)),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale),Y.updateMatrixWorld(!0),Y.projectionMatrix.copy(Z.projectionMatrix),Y.projectionMatrixInverse.copy(Z.projectionMatrixInverse),Y.isPerspectiveCamera&&(Y.fov=qs*2*Math.atan(1/Y.projectionMatrix.elements[5]),Y.zoom=1)}this.getCamera=function(){return A},this.getFoveation=function(){if(!(p===null&&g===null))return l},this.setFoveation=function(Y){l=Y,p!==null&&(p.fixedFoveation=Y),g!==null&&g.fixedFoveation!==void 0&&(g.fixedFoveation=Y)},this.hasDepthSensing=function(){return h.texture!==null},this.getDepthSensingMesh=function(){return h.getMesh(A)},this.getCameraTexture=function(Y){return f[Y]};let G=null;function xt(Y,Z){if(d=Z.getViewerPose(c||a),x=Z,d!==null){const _t=d.views;g!==null&&(t.setRenderTargetFramebuffer(M,g.framebuffer),t.setRenderTarget(M));let Et=!1;_t.length!==A.cameras.length&&(A.cameras.length=0,Et=!0);for(let I=0;I<_t.length;I++){const ce=_t[I];let Wt=null;if(g!==null)Wt=g.getViewport(ce);else{const wt=u.getViewSubImage(p,ce);Wt=wt.viewport,I===0&&(t.setRenderTargetTextures(M,wt.colorTexture,wt.depthStencilTexture),t.setRenderTarget(M))}let Ct=R[I];Ct===void 0&&(Ct=new dn,Ct.layers.enable(I),Ct.viewport=new be,R[I]=Ct),Ct.matrix.fromArray(ce.transform.matrix),Ct.matrix.decompose(Ct.position,Ct.quaternion,Ct.scale),Ct.projectionMatrix.fromArray(ce.projectionMatrix),Ct.projectionMatrixInverse.copy(Ct.projectionMatrix).invert(),Ct.viewport.set(Wt.x,Wt.y,Wt.width,Wt.height),I===0&&(A.matrix.copy(Ct.matrix),A.matrix.decompose(A.position,A.quaternion,A.scale)),Et===!0&&A.cameras.push(Ct)}const St=s.enabledFeatures;if(St&&St.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&v){u=i.getBinding();const I=u.getDepthInformation(_t[0]);I&&I.isValid&&I.texture&&h.init(I,s.renderState)}if(St&&St.includes("camera-access")&&v){t.state.unbindTexture(),u=i.getBinding();for(let I=0;I<_t.length;I++){const ce=_t[I].camera;if(ce){let Wt=f[ce];Wt||(Wt=new fh,f[ce]=Wt);const Ct=u.getCameraImage(ce);Wt.sourceTexture=Ct}}}}for(let _t=0;_t<y.length;_t++){const Et=E[_t],St=y[_t];Et!==null&&St!==void 0&&St.update(Et,Z,c||a)}G&&G(Y,Z),Z.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:Z}),x=null}const pt=new ph;pt.setAnimationLoop(xt),this.setAnimationLoop=function(Y){G=Y},this.dispose=function(){}}}const Mi=new qn,x0=new ve;function M0(n,t){function e(h,f){h.matrixAutoUpdate===!0&&h.updateMatrix(),f.value.copy(h.matrix)}function i(h,f){f.color.getRGB(h.fogColor.value,oh(n)),f.isFog?(h.fogNear.value=f.near,h.fogFar.value=f.far):f.isFogExp2&&(h.fogDensity.value=f.density)}function s(h,f,m,_,M){f.isMeshBasicMaterial||f.isMeshLambertMaterial?r(h,f):f.isMeshToonMaterial?(r(h,f),u(h,f)):f.isMeshPhongMaterial?(r(h,f),d(h,f)):f.isMeshStandardMaterial?(r(h,f),p(h,f),f.isMeshPhysicalMaterial&&g(h,f,M)):f.isMeshMatcapMaterial?(r(h,f),x(h,f)):f.isMeshDepthMaterial?r(h,f):f.isMeshDistanceMaterial?(r(h,f),v(h,f)):f.isMeshNormalMaterial?r(h,f):f.isLineBasicMaterial?(a(h,f),f.isLineDashedMaterial&&o(h,f)):f.isPointsMaterial?l(h,f,m,_):f.isSpriteMaterial?c(h,f):f.isShadowMaterial?(h.color.value.copy(f.color),h.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function r(h,f){h.opacity.value=f.opacity,f.color&&h.diffuse.value.copy(f.color),f.emissive&&h.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(h.map.value=f.map,e(f.map,h.mapTransform)),f.alphaMap&&(h.alphaMap.value=f.alphaMap,e(f.alphaMap,h.alphaMapTransform)),f.bumpMap&&(h.bumpMap.value=f.bumpMap,e(f.bumpMap,h.bumpMapTransform),h.bumpScale.value=f.bumpScale,f.side===Je&&(h.bumpScale.value*=-1)),f.normalMap&&(h.normalMap.value=f.normalMap,e(f.normalMap,h.normalMapTransform),h.normalScale.value.copy(f.normalScale),f.side===Je&&h.normalScale.value.negate()),f.displacementMap&&(h.displacementMap.value=f.displacementMap,e(f.displacementMap,h.displacementMapTransform),h.displacementScale.value=f.displacementScale,h.displacementBias.value=f.displacementBias),f.emissiveMap&&(h.emissiveMap.value=f.emissiveMap,e(f.emissiveMap,h.emissiveMapTransform)),f.specularMap&&(h.specularMap.value=f.specularMap,e(f.specularMap,h.specularMapTransform)),f.alphaTest>0&&(h.alphaTest.value=f.alphaTest);const m=t.get(f),_=m.envMap,M=m.envMapRotation;_&&(h.envMap.value=_,Mi.copy(M),Mi.x*=-1,Mi.y*=-1,Mi.z*=-1,_.isCubeTexture&&_.isRenderTargetTexture===!1&&(Mi.y*=-1,Mi.z*=-1),h.envMapRotation.value.setFromMatrix4(x0.makeRotationFromEuler(Mi)),h.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,h.reflectivity.value=f.reflectivity,h.ior.value=f.ior,h.refractionRatio.value=f.refractionRatio),f.lightMap&&(h.lightMap.value=f.lightMap,h.lightMapIntensity.value=f.lightMapIntensity,e(f.lightMap,h.lightMapTransform)),f.aoMap&&(h.aoMap.value=f.aoMap,h.aoMapIntensity.value=f.aoMapIntensity,e(f.aoMap,h.aoMapTransform))}function a(h,f){h.diffuse.value.copy(f.color),h.opacity.value=f.opacity,f.map&&(h.map.value=f.map,e(f.map,h.mapTransform))}function o(h,f){h.dashSize.value=f.dashSize,h.totalSize.value=f.dashSize+f.gapSize,h.scale.value=f.scale}function l(h,f,m,_){h.diffuse.value.copy(f.color),h.opacity.value=f.opacity,h.size.value=f.size*m,h.scale.value=_*.5,f.map&&(h.map.value=f.map,e(f.map,h.uvTransform)),f.alphaMap&&(h.alphaMap.value=f.alphaMap,e(f.alphaMap,h.alphaMapTransform)),f.alphaTest>0&&(h.alphaTest.value=f.alphaTest)}function c(h,f){h.diffuse.value.copy(f.color),h.opacity.value=f.opacity,h.rotation.value=f.rotation,f.map&&(h.map.value=f.map,e(f.map,h.mapTransform)),f.alphaMap&&(h.alphaMap.value=f.alphaMap,e(f.alphaMap,h.alphaMapTransform)),f.alphaTest>0&&(h.alphaTest.value=f.alphaTest)}function d(h,f){h.specular.value.copy(f.specular),h.shininess.value=Math.max(f.shininess,1e-4)}function u(h,f){f.gradientMap&&(h.gradientMap.value=f.gradientMap)}function p(h,f){h.metalness.value=f.metalness,f.metalnessMap&&(h.metalnessMap.value=f.metalnessMap,e(f.metalnessMap,h.metalnessMapTransform)),h.roughness.value=f.roughness,f.roughnessMap&&(h.roughnessMap.value=f.roughnessMap,e(f.roughnessMap,h.roughnessMapTransform)),f.envMap&&(h.envMapIntensity.value=f.envMapIntensity)}function g(h,f,m){h.ior.value=f.ior,f.sheen>0&&(h.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),h.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(h.sheenColorMap.value=f.sheenColorMap,e(f.sheenColorMap,h.sheenColorMapTransform)),f.sheenRoughnessMap&&(h.sheenRoughnessMap.value=f.sheenRoughnessMap,e(f.sheenRoughnessMap,h.sheenRoughnessMapTransform))),f.clearcoat>0&&(h.clearcoat.value=f.clearcoat,h.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(h.clearcoatMap.value=f.clearcoatMap,e(f.clearcoatMap,h.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(h.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,e(f.clearcoatRoughnessMap,h.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(h.clearcoatNormalMap.value=f.clearcoatNormalMap,e(f.clearcoatNormalMap,h.clearcoatNormalMapTransform),h.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===Je&&h.clearcoatNormalScale.value.negate())),f.dispersion>0&&(h.dispersion.value=f.dispersion),f.iridescence>0&&(h.iridescence.value=f.iridescence,h.iridescenceIOR.value=f.iridescenceIOR,h.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],h.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(h.iridescenceMap.value=f.iridescenceMap,e(f.iridescenceMap,h.iridescenceMapTransform)),f.iridescenceThicknessMap&&(h.iridescenceThicknessMap.value=f.iridescenceThicknessMap,e(f.iridescenceThicknessMap,h.iridescenceThicknessMapTransform))),f.transmission>0&&(h.transmission.value=f.transmission,h.transmissionSamplerMap.value=m.texture,h.transmissionSamplerSize.value.set(m.width,m.height),f.transmissionMap&&(h.transmissionMap.value=f.transmissionMap,e(f.transmissionMap,h.transmissionMapTransform)),h.thickness.value=f.thickness,f.thicknessMap&&(h.thicknessMap.value=f.thicknessMap,e(f.thicknessMap,h.thicknessMapTransform)),h.attenuationDistance.value=f.attenuationDistance,h.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(h.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(h.anisotropyMap.value=f.anisotropyMap,e(f.anisotropyMap,h.anisotropyMapTransform))),h.specularIntensity.value=f.specularIntensity,h.specularColor.value.copy(f.specularColor),f.specularColorMap&&(h.specularColorMap.value=f.specularColorMap,e(f.specularColorMap,h.specularColorMapTransform)),f.specularIntensityMap&&(h.specularIntensityMap.value=f.specularIntensityMap,e(f.specularIntensityMap,h.specularIntensityMapTransform))}function x(h,f){f.matcap&&(h.matcap.value=f.matcap)}function v(h,f){const m=t.get(f).light;h.referencePosition.value.setFromMatrixPosition(m.matrixWorld),h.nearDistance.value=m.shadow.camera.near,h.farDistance.value=m.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function v0(n,t,e,i){let s={},r={},a=[];const o=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(m,_){const M=_.program;i.uniformBlockBinding(m,M)}function c(m,_){let M=s[m.id];M===void 0&&(x(m),M=d(m),s[m.id]=M,m.addEventListener("dispose",h));const y=_.program;i.updateUBOMapping(m,y);const E=t.render.frame;r[m.id]!==E&&(p(m),r[m.id]=E)}function d(m){const _=u();m.__bindingPointIndex=_;const M=n.createBuffer(),y=m.__size,E=m.usage;return n.bindBuffer(n.UNIFORM_BUFFER,M),n.bufferData(n.UNIFORM_BUFFER,y,E),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,_,M),M}function u(){for(let m=0;m<o;m++)if(a.indexOf(m)===-1)return a.push(m),m;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function p(m){const _=s[m.id],M=m.uniforms,y=m.__cache;n.bindBuffer(n.UNIFORM_BUFFER,_);for(let E=0,C=M.length;E<C;E++){const L=Array.isArray(M[E])?M[E]:[M[E]];for(let b=0,S=L.length;b<S;b++){const R=L[b];if(g(R,E,b,y)===!0){const A=R.__offset,P=Array.isArray(R.value)?R.value:[R.value];let F=0;for(let U=0;U<P.length;U++){const O=P[U],W=v(O);typeof O=="number"||typeof O=="boolean"?(R.__data[0]=O,n.bufferSubData(n.UNIFORM_BUFFER,A+F,R.__data)):O.isMatrix3?(R.__data[0]=O.elements[0],R.__data[1]=O.elements[1],R.__data[2]=O.elements[2],R.__data[3]=0,R.__data[4]=O.elements[3],R.__data[5]=O.elements[4],R.__data[6]=O.elements[5],R.__data[7]=0,R.__data[8]=O.elements[6],R.__data[9]=O.elements[7],R.__data[10]=O.elements[8],R.__data[11]=0):(O.toArray(R.__data,F),F+=W.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,A,R.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function g(m,_,M,y){const E=m.value,C=_+"_"+M;if(y[C]===void 0)return typeof E=="number"||typeof E=="boolean"?y[C]=E:y[C]=E.clone(),!0;{const L=y[C];if(typeof E=="number"||typeof E=="boolean"){if(L!==E)return y[C]=E,!0}else if(L.equals(E)===!1)return L.copy(E),!0}return!1}function x(m){const _=m.uniforms;let M=0;const y=16;for(let C=0,L=_.length;C<L;C++){const b=Array.isArray(_[C])?_[C]:[_[C]];for(let S=0,R=b.length;S<R;S++){const A=b[S],P=Array.isArray(A.value)?A.value:[A.value];for(let F=0,U=P.length;F<U;F++){const O=P[F],W=v(O),V=M%y,j=V%W.boundary,K=V+j;M+=j,K!==0&&y-K<W.storage&&(M+=y-K),A.__data=new Float32Array(W.storage/Float32Array.BYTES_PER_ELEMENT),A.__offset=M,M+=W.storage}}}const E=M%y;return E>0&&(M+=y-E),m.__size=M,m.__cache={},this}function v(m){const _={boundary:0,storage:0};return typeof m=="number"||typeof m=="boolean"?(_.boundary=4,_.storage=4):m.isVector2?(_.boundary=8,_.storage=8):m.isVector3||m.isColor?(_.boundary=16,_.storage=12):m.isVector4?(_.boundary=16,_.storage=16):m.isMatrix3?(_.boundary=48,_.storage=48):m.isMatrix4?(_.boundary=64,_.storage=64):m.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",m),_}function h(m){const _=m.target;_.removeEventListener("dispose",h);const M=a.indexOf(_.__bindingPointIndex);a.splice(M,1),n.deleteBuffer(s[_.id]),delete s[_.id],delete r[_.id]}function f(){for(const m in s)n.deleteBuffer(s[m]);a=[],s={},r={}}return{bind:l,update:c,dispose:f}}class y0{constructor(t={}){const{canvas:e=Qu(),context:i=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:d="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:p=!1}=t;this.isWebGLRenderer=!0;let g;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=i.getContextAttributes().alpha}else g=a;const x=new Uint32Array(4),v=new Int32Array(4);let h=null,f=null;const m=[],_=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=ai,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const M=this;let y=!1;this._outputColorSpace=Ne;let E=0,C=0,L=null,b=-1,S=null;const R=new be,A=new be;let P=null;const F=new kt(0);let U=0,O=e.width,W=e.height,V=1,j=null,K=null;const et=new be(0,0,O,W),H=new be(0,0,O,W);let G=!1;const xt=new uh;let pt=!1,Y=!1;const Z=new ve,_t=new z,Et=new be,St={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Ft=!1;function re(){return L===null?V:1}let I=i;function ce(w,X){return e.getContext(w,X)}try{const w={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:d,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Jo}`),e.addEventListener("webglcontextlost",ht,!1),e.addEventListener("webglcontextrestored",bt,!1),e.addEventListener("webglcontextcreationerror",dt,!1),I===null){const X="webgl2";if(I=ce(X,w),I===null)throw ce(X)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(w){throw console.error("THREE.WebGLRenderer: "+w.message),w}let Wt,Ct,wt,qt,ut,yt,Jt,ne,D,T,$,st,k,B,Mt,ct,at,it,tt,mt,Tt,gt,ft,It;function N(){Wt=new Dm(I),Wt.init(),gt=new f0(I,Wt),Ct=new bm(I,Wt,t,gt),wt=new u0(I,Wt),Ct.reversedDepthBuffer&&p&&wt.buffers.depth.setReversed(!0),qt=new Um(I),ut=new Jg,yt=new d0(I,Wt,wt,ut,Ct,gt,qt),Jt=new Am(M),ne=new Pm(M),D=new zd(I),ft=new Sm(I,D),T=new Lm(I,D,qt,ft),$=new Nm(I,T,D,qt),tt=new Fm(I,Ct,yt),ct=new Tm(ut),st=new Zg(M,Jt,ne,Wt,Ct,ft,ct),k=new M0(M,ut),B=new t0,Mt=new a0(Wt),it=new ym(M,Jt,ne,wt,$,g,l),at=new l0(M,$,Ct),It=new v0(I,qt,Ct,wt),mt=new Em(I,Wt,qt),Tt=new Im(I,Wt,qt),qt.programs=st.programs,M.capabilities=Ct,M.extensions=Wt,M.properties=ut,M.renderLists=B,M.shadowMap=at,M.state=wt,M.info=qt}N();const ot=new _0(M,I);this.xr=ot,this.getContext=function(){return I},this.getContextAttributes=function(){return I.getContextAttributes()},this.forceContextLoss=function(){const w=Wt.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){const w=Wt.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return V},this.setPixelRatio=function(w){w!==void 0&&(V=w,this.setSize(O,W,!1))},this.getSize=function(w){return w.set(O,W)},this.setSize=function(w,X,J=!0){if(ot.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}O=w,W=X,e.width=Math.floor(w*V),e.height=Math.floor(X*V),J===!0&&(e.style.width=w+"px",e.style.height=X+"px"),this.setViewport(0,0,w,X)},this.getDrawingBufferSize=function(w){return w.set(O*V,W*V).floor()},this.setDrawingBufferSize=function(w,X,J){O=w,W=X,V=J,e.width=Math.floor(w*J),e.height=Math.floor(X*J),this.setViewport(0,0,w,X)},this.getCurrentViewport=function(w){return w.copy(R)},this.getViewport=function(w){return w.copy(et)},this.setViewport=function(w,X,J,Q){w.isVector4?et.set(w.x,w.y,w.z,w.w):et.set(w,X,J,Q),wt.viewport(R.copy(et).multiplyScalar(V).round())},this.getScissor=function(w){return w.copy(H)},this.setScissor=function(w,X,J,Q){w.isVector4?H.set(w.x,w.y,w.z,w.w):H.set(w,X,J,Q),wt.scissor(A.copy(H).multiplyScalar(V).round())},this.getScissorTest=function(){return G},this.setScissorTest=function(w){wt.setScissorTest(G=w)},this.setOpaqueSort=function(w){j=w},this.setTransparentSort=function(w){K=w},this.getClearColor=function(w){return w.copy(it.getClearColor())},this.setClearColor=function(){it.setClearColor(...arguments)},this.getClearAlpha=function(){return it.getClearAlpha()},this.setClearAlpha=function(){it.setClearAlpha(...arguments)},this.clear=function(w=!0,X=!0,J=!0){let Q=0;if(w){let q=!1;if(L!==null){const vt=L.texture.format;q=vt===sc||vt===ic||vt===nc}if(q){const vt=L.texture.type,Pt=vt===Yn||vt===Ii||vt===Vs||vt===Ws||vt===tc||vt===ec,Ut=it.getClearColor(),Lt=it.getClearAlpha(),Xt=Ut.r,Yt=Ut.g,Ot=Ut.b;Pt?(x[0]=Xt,x[1]=Yt,x[2]=Ot,x[3]=Lt,I.clearBufferuiv(I.COLOR,0,x)):(v[0]=Xt,v[1]=Yt,v[2]=Ot,v[3]=Lt,I.clearBufferiv(I.COLOR,0,v))}else Q|=I.COLOR_BUFFER_BIT}X&&(Q|=I.DEPTH_BUFFER_BIT),J&&(Q|=I.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),I.clear(Q)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",ht,!1),e.removeEventListener("webglcontextrestored",bt,!1),e.removeEventListener("webglcontextcreationerror",dt,!1),it.dispose(),B.dispose(),Mt.dispose(),ut.dispose(),Jt.dispose(),ne.dispose(),$.dispose(),ft.dispose(),It.dispose(),st.dispose(),ot.dispose(),ot.removeEventListener("sessionstart",$e),ot.removeEventListener("sessionend",ki),Rn.stop()};function ht(w){w.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),y=!0}function bt(){console.log("THREE.WebGLRenderer: Context Restored."),y=!1;const w=qt.autoReset,X=at.enabled,J=at.autoUpdate,Q=at.needsUpdate,q=at.type;N(),qt.autoReset=w,at.enabled=X,at.autoUpdate=J,at.needsUpdate=Q,at.type=q}function dt(w){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function lt(w){const X=w.target;X.removeEventListener("dispose",lt),Dt(X)}function Dt(w){Ht(w),ut.remove(w)}function Ht(w){const X=ut.get(w).programs;X!==void 0&&(X.forEach(function(J){st.releaseProgram(J)}),w.isShaderMaterial&&st.releaseShaderCache(w))}this.renderBufferDirect=function(w,X,J,Q,q,vt){X===null&&(X=St);const Pt=q.isMesh&&q.matrixWorld.determinant()<0,Ut=Wh(w,X,J,Q,q);wt.setMaterial(Q,Pt);let Lt=J.index,Xt=1;if(Q.wireframe===!0){if(Lt=T.getWireframeAttribute(J),Lt===void 0)return;Xt=2}const Yt=J.drawRange,Ot=J.attributes.position;let Qt=Yt.start*Xt,fe=(Yt.start+Yt.count)*Xt;vt!==null&&(Qt=Math.max(Qt,vt.start*Xt),fe=Math.min(fe,(vt.start+vt.count)*Xt)),Lt!==null?(Qt=Math.max(Qt,0),fe=Math.min(fe,Lt.count)):Ot!=null&&(Qt=Math.max(Qt,0),fe=Math.min(fe,Ot.count));const ye=fe-Qt;if(ye<0||ye===1/0)return;ft.setup(q,Q,Ut,J,Lt);let _e,ge=mt;if(Lt!==null&&(_e=D.get(Lt),ge=Tt,ge.setIndex(_e)),q.isMesh)Q.wireframe===!0?(wt.setLineWidth(Q.wireframeLinewidth*re()),ge.setMode(I.LINES)):ge.setMode(I.TRIANGLES);else if(q.isLine){let Gt=Q.linewidth;Gt===void 0&&(Gt=1),wt.setLineWidth(Gt*re()),q.isLineSegments?ge.setMode(I.LINES):q.isLineLoop?ge.setMode(I.LINE_LOOP):ge.setMode(I.LINE_STRIP)}else q.isPoints?ge.setMode(I.POINTS):q.isSprite&&ge.setMode(I.TRIANGLES);if(q.isBatchedMesh)if(q._multiDrawInstances!==null)$s("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),ge.renderMultiDrawInstances(q._multiDrawStarts,q._multiDrawCounts,q._multiDrawCount,q._multiDrawInstances);else if(Wt.get("WEBGL_multi_draw"))ge.renderMultiDraw(q._multiDrawStarts,q._multiDrawCounts,q._multiDrawCount);else{const Gt=q._multiDrawStarts,xe=q._multiDrawCounts,le=q._multiDrawCount,tn=Lt?D.get(Lt).bytesPerElement:1,Gi=ut.get(Q).currentProgram.getUniforms();for(let en=0;en<le;en++)Gi.setValue(I,"_gl_DrawID",en),ge.render(Gt[en]/tn,xe[en])}else if(q.isInstancedMesh)ge.renderInstances(Qt,ye,q.count);else if(J.isInstancedBufferGeometry){const Gt=J._maxInstanceCount!==void 0?J._maxInstanceCount:1/0,xe=Math.min(J.instanceCount,Gt);ge.renderInstances(Qt,ye,xe)}else ge.render(Qt,ye)};function ue(w,X,J){w.transparent===!0&&w.side===Gn&&w.forceSinglePass===!1?(w.side=Je,w.needsUpdate=!0,ar(w,X,J),w.side=li,w.needsUpdate=!0,ar(w,X,J),w.side=Gn):ar(w,X,J)}this.compile=function(w,X,J=null){J===null&&(J=w),f=Mt.get(J),f.init(X),_.push(f),J.traverseVisible(function(q){q.isLight&&q.layers.test(X.layers)&&(f.pushLight(q),q.castShadow&&f.pushShadow(q))}),w!==J&&w.traverseVisible(function(q){q.isLight&&q.layers.test(X.layers)&&(f.pushLight(q),q.castShadow&&f.pushShadow(q))}),f.setupLights();const Q=new Set;return w.traverse(function(q){if(!(q.isMesh||q.isPoints||q.isLine||q.isSprite))return;const vt=q.material;if(vt)if(Array.isArray(vt))for(let Pt=0;Pt<vt.length;Pt++){const Ut=vt[Pt];ue(Ut,J,q),Q.add(Ut)}else ue(vt,J,q),Q.add(vt)}),f=_.pop(),Q},this.compileAsync=function(w,X,J=null){const Q=this.compile(w,X,J);return new Promise(q=>{function vt(){if(Q.forEach(function(Pt){ut.get(Pt).currentProgram.isReady()&&Q.delete(Pt)}),Q.size===0){q(w);return}setTimeout(vt,10)}Wt.get("KHR_parallel_shader_compile")!==null?vt():setTimeout(vt,10)})};let ie=null;function Qe(w){ie&&ie(w)}function $e(){Rn.stop()}function ki(){Rn.start()}const Rn=new ph;Rn.setAnimationLoop(Qe),typeof self<"u"&&Rn.setContext(self),this.setAnimationLoop=function(w){ie=w,ot.setAnimationLoop(w),w===null?Rn.stop():Rn.start()},ot.addEventListener("sessionstart",$e),ot.addEventListener("sessionend",ki),this.render=function(w,X){if(X!==void 0&&X.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(y===!0)return;if(w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),X.parent===null&&X.matrixWorldAutoUpdate===!0&&X.updateMatrixWorld(),ot.enabled===!0&&ot.isPresenting===!0&&(ot.cameraAutoUpdate===!0&&ot.updateCamera(X),X=ot.getCamera()),w.isScene===!0&&w.onBeforeRender(M,w,X,L),f=Mt.get(w,_.length),f.init(X),_.push(f),Z.multiplyMatrices(X.projectionMatrix,X.matrixWorldInverse),xt.setFromProjectionMatrix(Z,Ln,X.reversedDepth),Y=this.localClippingEnabled,pt=ct.init(this.clippingPlanes,Y),h=B.get(w,m.length),h.init(),m.push(h),ot.enabled===!0&&ot.isPresenting===!0){const vt=M.xr.getDepthSensingMesh();vt!==null&&di(vt,X,-1/0,M.sortObjects)}di(w,X,0,M.sortObjects),h.finish(),M.sortObjects===!0&&h.sort(j,K),Ft=ot.enabled===!1||ot.isPresenting===!1||ot.hasDepthSensing()===!1,Ft&&it.addToRenderList(h,w),this.info.render.frame++,pt===!0&&ct.beginShadows();const J=f.state.shadowsArray;at.render(J,w,X),pt===!0&&ct.endShadows(),this.info.autoReset===!0&&this.info.reset();const Q=h.opaque,q=h.transmissive;if(f.setupLights(),X.isArrayCamera){const vt=X.cameras;if(q.length>0)for(let Pt=0,Ut=vt.length;Pt<Ut;Pt++){const Lt=vt[Pt];Hi(Q,q,w,Lt)}Ft&&it.render(w);for(let Pt=0,Ut=vt.length;Pt<Ut;Pt++){const Lt=vt[Pt];Ts(h,w,Lt,Lt.viewport)}}else q.length>0&&Hi(Q,q,w,X),Ft&&it.render(w),Ts(h,w,X);L!==null&&C===0&&(yt.updateMultisampleRenderTarget(L),yt.updateRenderTargetMipmap(L)),w.isScene===!0&&w.onAfterRender(M,w,X),ft.resetDefaultState(),b=-1,S=null,_.pop(),_.length>0?(f=_[_.length-1],pt===!0&&ct.setGlobalState(M.clippingPlanes,f.state.camera)):f=null,m.pop(),m.length>0?h=m[m.length-1]:h=null};function di(w,X,J,Q){if(w.visible===!1)return;if(w.layers.test(X.layers)){if(w.isGroup)J=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(X);else if(w.isLight)f.pushLight(w),w.castShadow&&f.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||xt.intersectsSprite(w)){Q&&Et.setFromMatrixPosition(w.matrixWorld).applyMatrix4(Z);const Pt=$.update(w),Ut=w.material;Ut.visible&&h.push(w,Pt,Ut,J,Et.z,null)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||xt.intersectsObject(w))){const Pt=$.update(w),Ut=w.material;if(Q&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),Et.copy(w.boundingSphere.center)):(Pt.boundingSphere===null&&Pt.computeBoundingSphere(),Et.copy(Pt.boundingSphere.center)),Et.applyMatrix4(w.matrixWorld).applyMatrix4(Z)),Array.isArray(Ut)){const Lt=Pt.groups;for(let Xt=0,Yt=Lt.length;Xt<Yt;Xt++){const Ot=Lt[Xt],Qt=Ut[Ot.materialIndex];Qt&&Qt.visible&&h.push(w,Pt,Qt,J,Et.z,Ot)}}else Ut.visible&&h.push(w,Pt,Ut,J,Et.z,null)}}const vt=w.children;for(let Pt=0,Ut=vt.length;Pt<Ut;Pt++)di(vt[Pt],X,J,Q)}function Ts(w,X,J,Q){const q=w.opaque,vt=w.transmissive,Pt=w.transparent;f.setupLightsView(J),pt===!0&&ct.setGlobalState(M.clippingPlanes,J),Q&&wt.viewport(R.copy(Q)),q.length>0&&rr(q,X,J),vt.length>0&&rr(vt,X,J),Pt.length>0&&rr(Pt,X,J),wt.buffers.depth.setTest(!0),wt.buffers.depth.setMask(!0),wt.buffers.color.setMask(!0),wt.setPolygonOffset(!1)}function Hi(w,X,J,Q){if((J.isScene===!0?J.overrideMaterial:null)!==null)return;f.state.transmissionRenderTarget[Q.id]===void 0&&(f.state.transmissionRenderTarget[Q.id]=new Ui(1,1,{generateMipmaps:!0,type:Wt.has("EXT_color_buffer_half_float")||Wt.has("EXT_color_buffer_float")?Zs:Yn,minFilter:si,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:he.workingColorSpace}));const vt=f.state.transmissionRenderTarget[Q.id],Pt=Q.viewport||R;vt.setSize(Pt.z*M.transmissionResolutionScale,Pt.w*M.transmissionResolutionScale);const Ut=M.getRenderTarget(),Lt=M.getActiveCubeFace(),Xt=M.getActiveMipmapLevel();M.setRenderTarget(vt),M.getClearColor(F),U=M.getClearAlpha(),U<1&&M.setClearColor(16777215,.5),M.clear(),Ft&&it.render(J);const Yt=M.toneMapping;M.toneMapping=ai;const Ot=Q.viewport;if(Q.viewport!==void 0&&(Q.viewport=void 0),f.setupLightsView(Q),pt===!0&&ct.setGlobalState(M.clippingPlanes,Q),rr(w,J,Q),yt.updateMultisampleRenderTarget(vt),yt.updateRenderTargetMipmap(vt),Wt.has("WEBGL_multisampled_render_to_texture")===!1){let Qt=!1;for(let fe=0,ye=X.length;fe<ye;fe++){const _e=X[fe],ge=_e.object,Gt=_e.geometry,xe=_e.material,le=_e.group;if(xe.side===Gn&&ge.layers.test(Q.layers)){const tn=xe.side;xe.side=Je,xe.needsUpdate=!0,xc(ge,J,Q,Gt,xe,le),xe.side=tn,xe.needsUpdate=!0,Qt=!0}}Qt===!0&&(yt.updateMultisampleRenderTarget(vt),yt.updateRenderTargetMipmap(vt))}M.setRenderTarget(Ut,Lt,Xt),M.setClearColor(F,U),Ot!==void 0&&(Q.viewport=Ot),M.toneMapping=Yt}function rr(w,X,J){const Q=X.isScene===!0?X.overrideMaterial:null;for(let q=0,vt=w.length;q<vt;q++){const Pt=w[q],Ut=Pt.object,Lt=Pt.geometry,Xt=Pt.group;let Yt=Pt.material;Yt.allowOverride===!0&&Q!==null&&(Yt=Q),Ut.layers.test(J.layers)&&xc(Ut,X,J,Lt,Yt,Xt)}}function xc(w,X,J,Q,q,vt){w.onBeforeRender(M,X,J,Q,q,vt),w.modelViewMatrix.multiplyMatrices(J.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),q.onBeforeRender(M,X,J,Q,w,vt),q.transparent===!0&&q.side===Gn&&q.forceSinglePass===!1?(q.side=Je,q.needsUpdate=!0,M.renderBufferDirect(J,X,Q,q,w,vt),q.side=li,q.needsUpdate=!0,M.renderBufferDirect(J,X,Q,q,w,vt),q.side=Gn):M.renderBufferDirect(J,X,Q,q,w,vt),w.onAfterRender(M,X,J,Q,q,vt)}function ar(w,X,J){X.isScene!==!0&&(X=St);const Q=ut.get(w),q=f.state.lights,vt=f.state.shadowsArray,Pt=q.state.version,Ut=st.getParameters(w,q.state,vt,X,J),Lt=st.getProgramCacheKey(Ut);let Xt=Q.programs;Q.environment=w.isMeshStandardMaterial?X.environment:null,Q.fog=X.fog,Q.envMap=(w.isMeshStandardMaterial?ne:Jt).get(w.envMap||Q.environment),Q.envMapRotation=Q.environment!==null&&w.envMap===null?X.environmentRotation:w.envMapRotation,Xt===void 0&&(w.addEventListener("dispose",lt),Xt=new Map,Q.programs=Xt);let Yt=Xt.get(Lt);if(Yt!==void 0){if(Q.currentProgram===Yt&&Q.lightsStateVersion===Pt)return vc(w,Ut),Yt}else Ut.uniforms=st.getUniforms(w),w.onBeforeCompile(Ut,M),Yt=st.acquireProgram(Ut,Lt),Xt.set(Lt,Yt),Q.uniforms=Ut.uniforms;const Ot=Q.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(Ot.clippingPlanes=ct.uniform),vc(w,Ut),Q.needsLights=Yh(w),Q.lightsStateVersion=Pt,Q.needsLights&&(Ot.ambientLightColor.value=q.state.ambient,Ot.lightProbe.value=q.state.probe,Ot.directionalLights.value=q.state.directional,Ot.directionalLightShadows.value=q.state.directionalShadow,Ot.spotLights.value=q.state.spot,Ot.spotLightShadows.value=q.state.spotShadow,Ot.rectAreaLights.value=q.state.rectArea,Ot.ltc_1.value=q.state.rectAreaLTC1,Ot.ltc_2.value=q.state.rectAreaLTC2,Ot.pointLights.value=q.state.point,Ot.pointLightShadows.value=q.state.pointShadow,Ot.hemisphereLights.value=q.state.hemi,Ot.directionalShadowMap.value=q.state.directionalShadowMap,Ot.directionalShadowMatrix.value=q.state.directionalShadowMatrix,Ot.spotShadowMap.value=q.state.spotShadowMap,Ot.spotLightMatrix.value=q.state.spotLightMatrix,Ot.spotLightMap.value=q.state.spotLightMap,Ot.pointShadowMap.value=q.state.pointShadowMap,Ot.pointShadowMatrix.value=q.state.pointShadowMatrix),Q.currentProgram=Yt,Q.uniformsList=null,Yt}function Mc(w){if(w.uniformsList===null){const X=w.currentProgram.getUniforms();w.uniformsList=Xr.seqWithValue(X.seq,w.uniforms)}return w.uniformsList}function vc(w,X){const J=ut.get(w);J.outputColorSpace=X.outputColorSpace,J.batching=X.batching,J.batchingColor=X.batchingColor,J.instancing=X.instancing,J.instancingColor=X.instancingColor,J.instancingMorph=X.instancingMorph,J.skinning=X.skinning,J.morphTargets=X.morphTargets,J.morphNormals=X.morphNormals,J.morphColors=X.morphColors,J.morphTargetsCount=X.morphTargetsCount,J.numClippingPlanes=X.numClippingPlanes,J.numIntersection=X.numClipIntersection,J.vertexAlphas=X.vertexAlphas,J.vertexTangents=X.vertexTangents,J.toneMapping=X.toneMapping}function Wh(w,X,J,Q,q){X.isScene!==!0&&(X=St),yt.resetTextureUnits();const vt=X.fog,Pt=Q.isMeshStandardMaterial?X.environment:null,Ut=L===null?M.outputColorSpace:L.isXRRenderTarget===!0?L.texture.colorSpace:vs,Lt=(Q.isMeshStandardMaterial?ne:Jt).get(Q.envMap||Pt),Xt=Q.vertexColors===!0&&!!J.attributes.color&&J.attributes.color.itemSize===4,Yt=!!J.attributes.tangent&&(!!Q.normalMap||Q.anisotropy>0),Ot=!!J.morphAttributes.position,Qt=!!J.morphAttributes.normal,fe=!!J.morphAttributes.color;let ye=ai;Q.toneMapped&&(L===null||L.isXRRenderTarget===!0)&&(ye=M.toneMapping);const _e=J.morphAttributes.position||J.morphAttributes.normal||J.morphAttributes.color,ge=_e!==void 0?_e.length:0,Gt=ut.get(Q),xe=f.state.lights;if(pt===!0&&(Y===!0||w!==S)){const Ge=w===S&&Q.id===b;ct.setState(Q,w,Ge)}let le=!1;Q.version===Gt.__version?(Gt.needsLights&&Gt.lightsStateVersion!==xe.state.version||Gt.outputColorSpace!==Ut||q.isBatchedMesh&&Gt.batching===!1||!q.isBatchedMesh&&Gt.batching===!0||q.isBatchedMesh&&Gt.batchingColor===!0&&q.colorTexture===null||q.isBatchedMesh&&Gt.batchingColor===!1&&q.colorTexture!==null||q.isInstancedMesh&&Gt.instancing===!1||!q.isInstancedMesh&&Gt.instancing===!0||q.isSkinnedMesh&&Gt.skinning===!1||!q.isSkinnedMesh&&Gt.skinning===!0||q.isInstancedMesh&&Gt.instancingColor===!0&&q.instanceColor===null||q.isInstancedMesh&&Gt.instancingColor===!1&&q.instanceColor!==null||q.isInstancedMesh&&Gt.instancingMorph===!0&&q.morphTexture===null||q.isInstancedMesh&&Gt.instancingMorph===!1&&q.morphTexture!==null||Gt.envMap!==Lt||Q.fog===!0&&Gt.fog!==vt||Gt.numClippingPlanes!==void 0&&(Gt.numClippingPlanes!==ct.numPlanes||Gt.numIntersection!==ct.numIntersection)||Gt.vertexAlphas!==Xt||Gt.vertexTangents!==Yt||Gt.morphTargets!==Ot||Gt.morphNormals!==Qt||Gt.morphColors!==fe||Gt.toneMapping!==ye||Gt.morphTargetsCount!==ge)&&(le=!0):(le=!0,Gt.__version=Q.version);let tn=Gt.currentProgram;le===!0&&(tn=ar(Q,X,q));let Gi=!1,en=!1,As=!1;const Me=tn.getUniforms(),an=Gt.uniforms;if(wt.useProgram(tn.program)&&(Gi=!0,en=!0,As=!0),Q.id!==b&&(b=Q.id,en=!0),Gi||S!==w){wt.buffers.depth.getReversed()&&w.reversedDepth!==!0&&(w._reversedDepth=!0,w.updateProjectionMatrix()),Me.setValue(I,"projectionMatrix",w.projectionMatrix),Me.setValue(I,"viewMatrix",w.matrixWorldInverse);const je=Me.map.cameraPosition;je!==void 0&&je.setValue(I,_t.setFromMatrixPosition(w.matrixWorld)),Ct.logarithmicDepthBuffer&&Me.setValue(I,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(Q.isMeshPhongMaterial||Q.isMeshToonMaterial||Q.isMeshLambertMaterial||Q.isMeshBasicMaterial||Q.isMeshStandardMaterial||Q.isShaderMaterial)&&Me.setValue(I,"isOrthographic",w.isOrthographicCamera===!0),S!==w&&(S=w,en=!0,As=!0)}if(q.isSkinnedMesh){Me.setOptional(I,q,"bindMatrix"),Me.setOptional(I,q,"bindMatrixInverse");const Ge=q.skeleton;Ge&&(Ge.boneTexture===null&&Ge.computeBoneTexture(),Me.setValue(I,"boneTexture",Ge.boneTexture,yt))}q.isBatchedMesh&&(Me.setOptional(I,q,"batchingTexture"),Me.setValue(I,"batchingTexture",q._matricesTexture,yt),Me.setOptional(I,q,"batchingIdTexture"),Me.setValue(I,"batchingIdTexture",q._indirectTexture,yt),Me.setOptional(I,q,"batchingColorTexture"),q._colorsTexture!==null&&Me.setValue(I,"batchingColorTexture",q._colorsTexture,yt));const on=J.morphAttributes;if((on.position!==void 0||on.normal!==void 0||on.color!==void 0)&&tt.update(q,J,tn),(en||Gt.receiveShadow!==q.receiveShadow)&&(Gt.receiveShadow=q.receiveShadow,Me.setValue(I,"receiveShadow",q.receiveShadow)),Q.isMeshGouraudMaterial&&Q.envMap!==null&&(an.envMap.value=Lt,an.flipEnvMap.value=Lt.isCubeTexture&&Lt.isRenderTargetTexture===!1?-1:1),Q.isMeshStandardMaterial&&Q.envMap===null&&X.environment!==null&&(an.envMapIntensity.value=X.environmentIntensity),en&&(Me.setValue(I,"toneMappingExposure",M.toneMappingExposure),Gt.needsLights&&Xh(an,As),vt&&Q.fog===!0&&k.refreshFogUniforms(an,vt),k.refreshMaterialUniforms(an,Q,V,W,f.state.transmissionRenderTarget[w.id]),Xr.upload(I,Mc(Gt),an,yt)),Q.isShaderMaterial&&Q.uniformsNeedUpdate===!0&&(Xr.upload(I,Mc(Gt),an,yt),Q.uniformsNeedUpdate=!1),Q.isSpriteMaterial&&Me.setValue(I,"center",q.center),Me.setValue(I,"modelViewMatrix",q.modelViewMatrix),Me.setValue(I,"normalMatrix",q.normalMatrix),Me.setValue(I,"modelMatrix",q.matrixWorld),Q.isShaderMaterial||Q.isRawShaderMaterial){const Ge=Q.uniformsGroups;for(let je=0,da=Ge.length;je<da;je++){const fi=Ge[je];It.update(fi,tn),It.bind(fi,tn)}}return tn}function Xh(w,X){w.ambientLightColor.needsUpdate=X,w.lightProbe.needsUpdate=X,w.directionalLights.needsUpdate=X,w.directionalLightShadows.needsUpdate=X,w.pointLights.needsUpdate=X,w.pointLightShadows.needsUpdate=X,w.spotLights.needsUpdate=X,w.spotLightShadows.needsUpdate=X,w.rectAreaLights.needsUpdate=X,w.hemisphereLights.needsUpdate=X}function Yh(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return E},this.getActiveMipmapLevel=function(){return C},this.getRenderTarget=function(){return L},this.setRenderTargetTextures=function(w,X,J){const Q=ut.get(w);Q.__autoAllocateDepthBuffer=w.resolveDepthBuffer===!1,Q.__autoAllocateDepthBuffer===!1&&(Q.__useRenderToTexture=!1),ut.get(w.texture).__webglTexture=X,ut.get(w.depthTexture).__webglTexture=Q.__autoAllocateDepthBuffer?void 0:J,Q.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(w,X){const J=ut.get(w);J.__webglFramebuffer=X,J.__useDefaultFramebuffer=X===void 0};const qh=I.createFramebuffer();this.setRenderTarget=function(w,X=0,J=0){L=w,E=X,C=J;let Q=!0,q=null,vt=!1,Pt=!1;if(w){const Lt=ut.get(w);if(Lt.__useDefaultFramebuffer!==void 0)wt.bindFramebuffer(I.FRAMEBUFFER,null),Q=!1;else if(Lt.__webglFramebuffer===void 0)yt.setupRenderTarget(w);else if(Lt.__hasExternalTextures)yt.rebindTextures(w,ut.get(w.texture).__webglTexture,ut.get(w.depthTexture).__webglTexture);else if(w.depthBuffer){const Ot=w.depthTexture;if(Lt.__boundDepthTexture!==Ot){if(Ot!==null&&ut.has(Ot)&&(w.width!==Ot.image.width||w.height!==Ot.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");yt.setupDepthRenderbuffer(w)}}const Xt=w.texture;(Xt.isData3DTexture||Xt.isDataArrayTexture||Xt.isCompressedArrayTexture)&&(Pt=!0);const Yt=ut.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(Yt[X])?q=Yt[X][J]:q=Yt[X],vt=!0):w.samples>0&&yt.useMultisampledRTT(w)===!1?q=ut.get(w).__webglMultisampledFramebuffer:Array.isArray(Yt)?q=Yt[J]:q=Yt,R.copy(w.viewport),A.copy(w.scissor),P=w.scissorTest}else R.copy(et).multiplyScalar(V).floor(),A.copy(H).multiplyScalar(V).floor(),P=G;if(J!==0&&(q=qh),wt.bindFramebuffer(I.FRAMEBUFFER,q)&&Q&&wt.drawBuffers(w,q),wt.viewport(R),wt.scissor(A),wt.setScissorTest(P),vt){const Lt=ut.get(w.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_CUBE_MAP_POSITIVE_X+X,Lt.__webglTexture,J)}else if(Pt){const Lt=X;for(let Xt=0;Xt<w.textures.length;Xt++){const Yt=ut.get(w.textures[Xt]);I.framebufferTextureLayer(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0+Xt,Yt.__webglTexture,J,Lt)}}else if(w!==null&&J!==0){const Lt=ut.get(w.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,Lt.__webglTexture,J)}b=-1},this.readRenderTargetPixels=function(w,X,J,Q,q,vt,Pt,Ut=0){if(!(w&&w.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Lt=ut.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&Pt!==void 0&&(Lt=Lt[Pt]),Lt){wt.bindFramebuffer(I.FRAMEBUFFER,Lt);try{const Xt=w.textures[Ut],Yt=Xt.format,Ot=Xt.type;if(!Ct.textureFormatReadable(Yt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Ct.textureTypeReadable(Ot)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}X>=0&&X<=w.width-Q&&J>=0&&J<=w.height-q&&(w.textures.length>1&&I.readBuffer(I.COLOR_ATTACHMENT0+Ut),I.readPixels(X,J,Q,q,gt.convert(Yt),gt.convert(Ot),vt))}finally{const Xt=L!==null?ut.get(L).__webglFramebuffer:null;wt.bindFramebuffer(I.FRAMEBUFFER,Xt)}}},this.readRenderTargetPixelsAsync=async function(w,X,J,Q,q,vt,Pt,Ut=0){if(!(w&&w.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Lt=ut.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&Pt!==void 0&&(Lt=Lt[Pt]),Lt)if(X>=0&&X<=w.width-Q&&J>=0&&J<=w.height-q){wt.bindFramebuffer(I.FRAMEBUFFER,Lt);const Xt=w.textures[Ut],Yt=Xt.format,Ot=Xt.type;if(!Ct.textureFormatReadable(Yt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Ct.textureTypeReadable(Ot))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Qt=I.createBuffer();I.bindBuffer(I.PIXEL_PACK_BUFFER,Qt),I.bufferData(I.PIXEL_PACK_BUFFER,vt.byteLength,I.STREAM_READ),w.textures.length>1&&I.readBuffer(I.COLOR_ATTACHMENT0+Ut),I.readPixels(X,J,Q,q,gt.convert(Yt),gt.convert(Ot),0);const fe=L!==null?ut.get(L).__webglFramebuffer:null;wt.bindFramebuffer(I.FRAMEBUFFER,fe);const ye=I.fenceSync(I.SYNC_GPU_COMMANDS_COMPLETE,0);return I.flush(),await td(I,ye,4),I.bindBuffer(I.PIXEL_PACK_BUFFER,Qt),I.getBufferSubData(I.PIXEL_PACK_BUFFER,0,vt),I.deleteBuffer(Qt),I.deleteSync(ye),vt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(w,X=null,J=0){const Q=Math.pow(2,-J),q=Math.floor(w.image.width*Q),vt=Math.floor(w.image.height*Q),Pt=X!==null?X.x:0,Ut=X!==null?X.y:0;yt.setTexture2D(w,0),I.copyTexSubImage2D(I.TEXTURE_2D,J,0,0,Pt,Ut,q,vt),wt.unbindTexture()};const $h=I.createFramebuffer(),jh=I.createFramebuffer();this.copyTextureToTexture=function(w,X,J=null,Q=null,q=0,vt=null){vt===null&&(q!==0?($s("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),vt=q,q=0):vt=0);let Pt,Ut,Lt,Xt,Yt,Ot,Qt,fe,ye;const _e=w.isCompressedTexture?w.mipmaps[vt]:w.image;if(J!==null)Pt=J.max.x-J.min.x,Ut=J.max.y-J.min.y,Lt=J.isBox3?J.max.z-J.min.z:1,Xt=J.min.x,Yt=J.min.y,Ot=J.isBox3?J.min.z:0;else{const on=Math.pow(2,-q);Pt=Math.floor(_e.width*on),Ut=Math.floor(_e.height*on),w.isDataArrayTexture?Lt=_e.depth:w.isData3DTexture?Lt=Math.floor(_e.depth*on):Lt=1,Xt=0,Yt=0,Ot=0}Q!==null?(Qt=Q.x,fe=Q.y,ye=Q.z):(Qt=0,fe=0,ye=0);const ge=gt.convert(X.format),Gt=gt.convert(X.type);let xe;X.isData3DTexture?(yt.setTexture3D(X,0),xe=I.TEXTURE_3D):X.isDataArrayTexture||X.isCompressedArrayTexture?(yt.setTexture2DArray(X,0),xe=I.TEXTURE_2D_ARRAY):(yt.setTexture2D(X,0),xe=I.TEXTURE_2D),I.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,X.flipY),I.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,X.premultiplyAlpha),I.pixelStorei(I.UNPACK_ALIGNMENT,X.unpackAlignment);const le=I.getParameter(I.UNPACK_ROW_LENGTH),tn=I.getParameter(I.UNPACK_IMAGE_HEIGHT),Gi=I.getParameter(I.UNPACK_SKIP_PIXELS),en=I.getParameter(I.UNPACK_SKIP_ROWS),As=I.getParameter(I.UNPACK_SKIP_IMAGES);I.pixelStorei(I.UNPACK_ROW_LENGTH,_e.width),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,_e.height),I.pixelStorei(I.UNPACK_SKIP_PIXELS,Xt),I.pixelStorei(I.UNPACK_SKIP_ROWS,Yt),I.pixelStorei(I.UNPACK_SKIP_IMAGES,Ot);const Me=w.isDataArrayTexture||w.isData3DTexture,an=X.isDataArrayTexture||X.isData3DTexture;if(w.isDepthTexture){const on=ut.get(w),Ge=ut.get(X),je=ut.get(on.__renderTarget),da=ut.get(Ge.__renderTarget);wt.bindFramebuffer(I.READ_FRAMEBUFFER,je.__webglFramebuffer),wt.bindFramebuffer(I.DRAW_FRAMEBUFFER,da.__webglFramebuffer);for(let fi=0;fi<Lt;fi++)Me&&(I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,ut.get(w).__webglTexture,q,Ot+fi),I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,ut.get(X).__webglTexture,vt,ye+fi)),I.blitFramebuffer(Xt,Yt,Pt,Ut,Qt,fe,Pt,Ut,I.DEPTH_BUFFER_BIT,I.NEAREST);wt.bindFramebuffer(I.READ_FRAMEBUFFER,null),wt.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else if(q!==0||w.isRenderTargetTexture||ut.has(w)){const on=ut.get(w),Ge=ut.get(X);wt.bindFramebuffer(I.READ_FRAMEBUFFER,$h),wt.bindFramebuffer(I.DRAW_FRAMEBUFFER,jh);for(let je=0;je<Lt;je++)Me?I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,on.__webglTexture,q,Ot+je):I.framebufferTexture2D(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,on.__webglTexture,q),an?I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,Ge.__webglTexture,vt,ye+je):I.framebufferTexture2D(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,Ge.__webglTexture,vt),q!==0?I.blitFramebuffer(Xt,Yt,Pt,Ut,Qt,fe,Pt,Ut,I.COLOR_BUFFER_BIT,I.NEAREST):an?I.copyTexSubImage3D(xe,vt,Qt,fe,ye+je,Xt,Yt,Pt,Ut):I.copyTexSubImage2D(xe,vt,Qt,fe,Xt,Yt,Pt,Ut);wt.bindFramebuffer(I.READ_FRAMEBUFFER,null),wt.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else an?w.isDataTexture||w.isData3DTexture?I.texSubImage3D(xe,vt,Qt,fe,ye,Pt,Ut,Lt,ge,Gt,_e.data):X.isCompressedArrayTexture?I.compressedTexSubImage3D(xe,vt,Qt,fe,ye,Pt,Ut,Lt,ge,_e.data):I.texSubImage3D(xe,vt,Qt,fe,ye,Pt,Ut,Lt,ge,Gt,_e):w.isDataTexture?I.texSubImage2D(I.TEXTURE_2D,vt,Qt,fe,Pt,Ut,ge,Gt,_e.data):w.isCompressedTexture?I.compressedTexSubImage2D(I.TEXTURE_2D,vt,Qt,fe,_e.width,_e.height,ge,_e.data):I.texSubImage2D(I.TEXTURE_2D,vt,Qt,fe,Pt,Ut,ge,Gt,_e);I.pixelStorei(I.UNPACK_ROW_LENGTH,le),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,tn),I.pixelStorei(I.UNPACK_SKIP_PIXELS,Gi),I.pixelStorei(I.UNPACK_SKIP_ROWS,en),I.pixelStorei(I.UNPACK_SKIP_IMAGES,As),vt===0&&X.generateMipmaps&&I.generateMipmap(xe),wt.unbindTexture()},this.initRenderTarget=function(w){ut.get(w).__webglFramebuffer===void 0&&yt.setupRenderTarget(w)},this.initTexture=function(w){w.isCubeTexture?yt.setTextureCube(w,0):w.isData3DTexture?yt.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?yt.setTexture2DArray(w,0):yt.setTexture2D(w,0),wt.unbindTexture()},this.resetState=function(){E=0,C=0,L=null,wt.reset(),ft.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ln}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=he._getDrawingBufferColorSpace(t),e.unpackColorSpace=he._getUnpackColorSpace()}}const wl={type:"change"},pc={type:"start"},Mh={type:"end"},Fr=new tr,Rl=new ti,S0=Math.cos(70*nt.DEG2RAD),De=new z,Ke=2*Math.PI,me={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Wa=1e-6;class E0 extends Od{constructor(t,e=null){super(t,e),this.state=me.NONE,this.target=new z,this.cursor=new z,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:ds.ROTATE,MIDDLE:ds.DOLLY,RIGHT:ds.PAN},this.touches={ONE:ls.ROTATE,TWO:ls.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new z,this._lastQuaternion=new hi,this._lastTargetPosition=new z,this._quat=new hi().setFromUnitVectors(t.up,new z(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new el,this._sphericalDelta=new el,this._scale=1,this._panOffset=new z,this._rotateStart=new Vt,this._rotateEnd=new Vt,this._rotateDelta=new Vt,this._panStart=new Vt,this._panEnd=new Vt,this._panDelta=new Vt,this._dollyStart=new Vt,this._dollyEnd=new Vt,this._dollyDelta=new Vt,this._dollyDirection=new z,this._mouse=new Vt,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=T0.bind(this),this._onPointerDown=b0.bind(this),this._onPointerUp=A0.bind(this),this._onContextMenu=I0.bind(this),this._onMouseWheel=C0.bind(this),this._onKeyDown=P0.bind(this),this._onTouchStart=D0.bind(this),this._onTouchMove=L0.bind(this),this._onMouseDown=w0.bind(this),this._onMouseMove=R0.bind(this),this._interceptControlDown=U0.bind(this),this._interceptControlUp=F0.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}connect(t){super.connect(t),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(t){t.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=t}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(wl),this.update(),this.state=me.NONE}update(t=null){const e=this.object.position;De.copy(e).sub(this.target),De.applyQuaternion(this._quat),this._spherical.setFromVector3(De),this.autoRotate&&this.state===me.NONE&&this._rotateLeft(this._getAutoRotationAngle(t)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let i=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(i)&&isFinite(s)&&(i<-Math.PI?i+=Ke:i>Math.PI&&(i-=Ke),s<-Math.PI?s+=Ke:s>Math.PI&&(s-=Ke),i<=s?this._spherical.theta=Math.max(i,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(i+s)/2?Math.max(i,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const a=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=a!=this._spherical.radius}if(De.setFromSpherical(this._spherical),De.applyQuaternion(this._quatInverse),e.copy(this.target).add(De),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let a=null;if(this.object.isPerspectiveCamera){const o=De.length();a=this._clampDistance(o*this._scale);const l=o-a;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),r=!!l}else if(this.object.isOrthographicCamera){const o=new z(this._mouse.x,this._mouse.y,0);o.unproject(this.object);const l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=l!==this.object.zoom;const c=new z(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(o),this.object.updateMatrixWorld(),a=De.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;a!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(a).add(this.object.position):(Fr.origin.copy(this.object.position),Fr.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Fr.direction))<S0?this.object.lookAt(this.target):(Rl.setFromNormalAndCoplanarPoint(this.object.up,this.target),Fr.intersectPlane(Rl,this.target))))}else if(this.object.isOrthographicCamera){const a=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),a!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>Wa||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Wa||this._lastTargetPosition.distanceToSquared(this.target)>Wa?(this.dispatchEvent(wl),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(t){return t!==null?Ke/60*this.autoRotateSpeed*t:Ke/60/60*this.autoRotateSpeed}_getZoomScale(t){const e=Math.abs(t*.01);return Math.pow(.95,this.zoomSpeed*e)}_rotateLeft(t){this._sphericalDelta.theta-=t}_rotateUp(t){this._sphericalDelta.phi-=t}_panLeft(t,e){De.setFromMatrixColumn(e,0),De.multiplyScalar(-t),this._panOffset.add(De)}_panUp(t,e){this.screenSpacePanning===!0?De.setFromMatrixColumn(e,1):(De.setFromMatrixColumn(e,0),De.crossVectors(this.object.up,De)),De.multiplyScalar(t),this._panOffset.add(De)}_pan(t,e){const i=this.domElement;if(this.object.isPerspectiveCamera){const s=this.object.position;De.copy(s).sub(this.target);let r=De.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*t*r/i.clientHeight,this.object.matrix),this._panUp(2*e*r/i.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(t*(this.object.right-this.object.left)/this.object.zoom/i.clientWidth,this.object.matrix),this._panUp(e*(this.object.top-this.object.bottom)/this.object.zoom/i.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(t,e){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const i=this.domElement.getBoundingClientRect(),s=t-i.left,r=e-i.top,a=i.width,o=i.height;this._mouse.x=s/a*2-1,this._mouse.y=-(r/o)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(t){return Math.max(this.minDistance,Math.min(this.maxDistance,t))}_handleMouseDownRotate(t){this._rotateStart.set(t.clientX,t.clientY)}_handleMouseDownDolly(t){this._updateZoomParameters(t.clientX,t.clientX),this._dollyStart.set(t.clientX,t.clientY)}_handleMouseDownPan(t){this._panStart.set(t.clientX,t.clientY)}_handleMouseMoveRotate(t){this._rotateEnd.set(t.clientX,t.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const e=this.domElement;this._rotateLeft(Ke*this._rotateDelta.x/e.clientHeight),this._rotateUp(Ke*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(t){this._dollyEnd.set(t.clientX,t.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(t){this._panEnd.set(t.clientX,t.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(t){this._updateZoomParameters(t.clientX,t.clientY),t.deltaY<0?this._dollyIn(this._getZoomScale(t.deltaY)):t.deltaY>0&&this._dollyOut(this._getZoomScale(t.deltaY)),this.update()}_handleKeyDown(t){let e=!1;switch(t.code){case this.keys.UP:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(Ke*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),e=!0;break;case this.keys.BOTTOM:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(-Ke*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),e=!0;break;case this.keys.LEFT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(Ke*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),e=!0;break;case this.keys.RIGHT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(-Ke*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),e=!0;break}e&&(t.preventDefault(),this.update())}_handleTouchStartRotate(t){if(this._pointers.length===1)this._rotateStart.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),i=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._rotateStart.set(i,s)}}_handleTouchStartPan(t){if(this._pointers.length===1)this._panStart.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),i=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panStart.set(i,s)}}_handleTouchStartDolly(t){const e=this._getSecondPointerPosition(t),i=t.pageX-e.x,s=t.pageY-e.y,r=Math.sqrt(i*i+s*s);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enablePan&&this._handleTouchStartPan(t)}_handleTouchStartDollyRotate(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enableRotate&&this._handleTouchStartRotate(t)}_handleTouchMoveRotate(t){if(this._pointers.length==1)this._rotateEnd.set(t.pageX,t.pageY);else{const i=this._getSecondPointerPosition(t),s=.5*(t.pageX+i.x),r=.5*(t.pageY+i.y);this._rotateEnd.set(s,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const e=this.domElement;this._rotateLeft(Ke*this._rotateDelta.x/e.clientHeight),this._rotateUp(Ke*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(t){if(this._pointers.length===1)this._panEnd.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),i=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panEnd.set(i,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(t){const e=this._getSecondPointerPosition(t),i=t.pageX-e.x,s=t.pageY-e.y,r=Math.sqrt(i*i+s*s);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const a=(t.pageX+e.x)*.5,o=(t.pageY+e.y)*.5;this._updateZoomParameters(a,o)}_handleTouchMoveDollyPan(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enablePan&&this._handleTouchMovePan(t)}_handleTouchMoveDollyRotate(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enableRotate&&this._handleTouchMoveRotate(t)}_addPointer(t){this._pointers.push(t.pointerId)}_removePointer(t){delete this._pointerPositions[t.pointerId];for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId){this._pointers.splice(e,1);return}}_isTrackingPointer(t){for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId)return!0;return!1}_trackPointer(t){let e=this._pointerPositions[t.pointerId];e===void 0&&(e=new Vt,this._pointerPositions[t.pointerId]=e),e.set(t.pageX,t.pageY)}_getSecondPointerPosition(t){const e=t.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[e]}_customWheelEvent(t){const e=t.deltaMode,i={clientX:t.clientX,clientY:t.clientY,deltaY:t.deltaY};switch(e){case 1:i.deltaY*=16;break;case 2:i.deltaY*=100;break}return t.ctrlKey&&!this._controlActive&&(i.deltaY*=10),i}}function b0(n){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(n.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(n)&&(this._addPointer(n),n.pointerType==="touch"?this._onTouchStart(n):this._onMouseDown(n)))}function T0(n){this.enabled!==!1&&(n.pointerType==="touch"?this._onTouchMove(n):this._onMouseMove(n))}function A0(n){switch(this._removePointer(n),this._pointers.length){case 0:this.domElement.releasePointerCapture(n.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(Mh),this.state=me.NONE;break;case 1:const t=this._pointers[0],e=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:e.x,pageY:e.y});break}}function w0(n){let t;switch(n.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case ds.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(n),this.state=me.DOLLY;break;case ds.ROTATE:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=me.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=me.ROTATE}break;case ds.PAN:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=me.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=me.PAN}break;default:this.state=me.NONE}this.state!==me.NONE&&this.dispatchEvent(pc)}function R0(n){switch(this.state){case me.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(n);break;case me.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(n);break;case me.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(n);break}}function C0(n){this.enabled===!1||this.enableZoom===!1||this.state!==me.NONE||(n.preventDefault(),this.dispatchEvent(pc),this._handleMouseWheel(this._customWheelEvent(n)),this.dispatchEvent(Mh))}function P0(n){this.enabled!==!1&&this._handleKeyDown(n)}function D0(n){switch(this._trackPointer(n),this._pointers.length){case 1:switch(this.touches.ONE){case ls.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(n),this.state=me.TOUCH_ROTATE;break;case ls.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(n),this.state=me.TOUCH_PAN;break;default:this.state=me.NONE}break;case 2:switch(this.touches.TWO){case ls.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(n),this.state=me.TOUCH_DOLLY_PAN;break;case ls.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(n),this.state=me.TOUCH_DOLLY_ROTATE;break;default:this.state=me.NONE}break;default:this.state=me.NONE}this.state!==me.NONE&&this.dispatchEvent(pc)}function L0(n){switch(this._trackPointer(n),this.state){case me.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(n),this.update();break;case me.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(n),this.update();break;case me.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(n),this.update();break;case me.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(n),this.update();break;default:this.state=me.NONE}}function I0(n){this.enabled!==!1&&n.preventDefault()}function U0(n){n.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function F0(n){n.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}const N0=2100,Ss=(n,t,e)=>Math.max(t,Math.min(e,n)),Cl=(n,t,e)=>{const i=Ss((n-t)/(e-t),0,1);return i*i*(3-2*i)};function mn(n,t){const e=t?.presentAgeYears||138e8,i=t?.cosmicMilestones||{},s=i.recombinationYears||38e4,r=Math.max(s*1.1,i.firstStarsYears||18e7),a=Math.max(r*1.1,i.matureGalaxiesYears||1e9),o=Math.max(a*1.1,e),l=Math.max(.001/31557600,Number(n)||0),c=(x,v,h)=>Ss((Math.log10(x)-Math.log10(v))/(Math.log10(h)-Math.log10(v)),0,1);if(l<180/31557600){const x=l*31557600;return x<1?c(x,.001,1)*18:18+c(x,1,180)*37}if(l<s)return 55+c(l,180/31557600,s)*90;if(l<r)return 145+c(l,s,r)*100;if(l<a)return 245+c(l,r,a)*95;if(l<o)return 340+c(l,a,o)*130;const d=Math.log10(l),u=Math.log10(o),p=t?.cosmicFate;if(p&&Number.isFinite(p.outcomeYears)){if(n>=p.outcomeYears)return 1e3;const x=(d-u)/(p.outcomeExponent-u);return Ss(470+x*530,470,1e3)}if(d<12)return 470+(d-u)/(12-u)*100;if(d<14)return 570+(d-12)/2*80;if(d<15)return 650+(d-14)*30;if(d<38)return 680+(d-15)/23*165;const g=t?.blackHoleEvaporationExponent||100;return d<g?845+(d-38)/(g-38)*105:950}function mc(n,t){const e=Ss(n,470,950),i=Math.log10(t?.presentAgeYears||138e8);let s;if(e<570)s=i+(12-i)*(e-470)/100;else if(e<650)s=12+(e-570)/80*2;else if(e<680)s=14+(e-650)/30;else if(e<845)s=15+(e-680)/165*23;else{const r=t?.blackHoleEvaporationExponent||100;s=38+(e-845)/105*(r-38)}return 10**s}function O0(n,t,e){const i=Ss(Number(n),0,1e3),s=vh(i,t),r=e.findIndex(o=>i<o.until),a=r<0?e.length-1:r;return{position:i,label:s,eraIndex:a,era:e[a],galaxyIdentityOpacity:Cl(i,245,325)*(1-Cl(i,820,900))}}function B0(n){const e=1139.904761904762/N0;return n<145||n>=930?e*.42:e*1.25}function z0({position:n,label:t,universe:e,activeEvent:i,activeRelationship:s,ascendedSpecies:r,activeSpecies:a,civilizationData:o}){const l=e?.cosmicFate;if(l&&l.type!=="heat-death"&&n>=l.onsetAt){if(l.type==="vacuum-decay"){const p=n>=995;return{key:`fate-vacuum-${p?"terminal":"bubble"}`,time:t,text:p?"低能真空泡已经穿过可观测区域，原有粒子与相互作用不再适用":"量子隧穿产生了低能真空泡，泡壁以接近光速向外扩张"}}if(l.type==="big-rip"){const p=n>=995;return{key:`fate-rip-${p?"terminal":"unbinding"}`,time:t,text:p?"膨胀率在有限时间内发散，局部束缚结构相继失效":"幽灵暗能量密度持续上升，星系团与星系开始逐层解束缚"}}const u=n>=995;return{key:`fate-crunch-${u?"terminal":"turnaround"}`,time:t,text:u?"坍缩使物质与辐射密度急剧升高，经典演化在高曲率阶段失效":"宇宙膨胀已经停止，大尺度距离开始反向缩小"}}if(i){const u=n>=i.impactAt,p=u?`；${i.outcome}`:"";return{key:`${i.id}-${u?"aftermath":"forming"}`,time:t,text:`${i.label}：${i.message}${p}`}}if(s){const u=o[s.speciesA],p=o[s.speciesB],g=s.relationship==="conflict"?`${u.name} 与 ${p.name} 的边界冲突正在削减双方疆域`:`${u.name} 与 ${p.name} 建立友好共存区，共享资源与航路`;return{key:`relation-${s.relationship}-${s.speciesA}-${s.speciesB}`,time:t,text:g}}if(r>0)return{key:`ascended-${r}`,time:t,text:`${r} 个种群已转化为高维生命，脱离恒星与黑洞的普通物质演化`};if(n<55)return{key:"bang",time:"T+0",text:"整个可观测区域处于超高温、高密度状态，空间本身在膨胀"};if(n<145)return{key:"plasma",time:t,text:"光子在等离子体中不断散射，宇宙随膨胀持续冷却"};if(n<245)return{key:"dark",time:t,text:"复合后宇宙变得透明；微弱云团表示中性气体密度，此时尚没有恒星光"};if(n<270)return{key:"stars-first-light",time:t,text:"最早的高密度气体云发生坍缩，第一代大质量恒星在少数区域点燃"};if(n<312)return{key:"stars-ionization",time:t,text:"年轻恒星的紫外辐射正在吹出电离泡，原星系仍处于成团与坍缩中"};if(n<340)return{key:"stars-overlap",time:t,text:"不断扩张的电离区开始交叠，星系结构逐渐稳定，星系际中性氢比例快速下降"};if(a>0)return{key:`life-${a}`,time:t,text:`${a} 个主要文明种群正在跨越恒星系扩张`};if(n<430)return{key:"chemistry",time:t,text:"重元素丰度上升，宜居行星开始形成"};if(n<Math.min(...o.map(u=>u.birth),620))return{key:"waiting-life",time:t,text:"宜居世界正在积累复杂化学反应，智慧生命尚未出现"};const c=mn(10**e.stellarFormationEndExponent,e),d=mn(10**e.lastStarDeathExponent,e);return n<c?{key:"silence",time:t,text:"文明信号已经沉寂，恒星形成率仍在持续下降"}:n<d?{key:"last-stars",time:t,text:"恒星形成已经停止，最后的低质量红矮星仍在极缓慢地消耗燃料"}:n<845?{key:"evaporation",time:t,text:"长期引力近遇持续重分配能量，少数残骸逐个逃离，极少数落向星系中心"}:n<950?{key:"holes",time:t,text:"黑洞通过霍金辐射缓慢蒸发"}:{key:"heatdeath",time:t,text:"最后的黑洞已经蒸发，残余光子持续红移并稀释，可用能量梯度趋近于零"}}function vh(n,t){const e=(d,u,p)=>10**(Math.log10(d)+(Math.log10(u)-Math.log10(d))*p),i=d=>{if(d<1){const u=d*31557600;return u<3600?`${Math.round(u/60)} 分钟`:u<86400?`${(u/3600).toFixed(1)} 小时`:`${(u/86400).toFixed(1)} 天`}return d<1e4?`${Math.max(1,Math.round(d))} 年`:d<1e8?`${(d/1e4).toFixed(d<1e6?1:0)} 万年`:d<1e12?`${(d/1e8).toFixed(d<1e9?2:1)} 亿年`:`10^${Math.log10(d).toFixed(1)} 年`};if(n<18)return`T+${Math.max(.001,e(.001,1,n/18)).toFixed(3)} 秒`;if(n<55)return`T+${Math.max(1,Math.round(e(1,180,(n-18)/37)))} 秒`;const s=t?.cosmicMilestones||{},r=s.recombinationYears||38e4,a=Math.max(r*1.1,s.firstStarsYears||18e7),o=Math.max(a*1.1,s.matureGalaxiesYears||1e9),l=Math.max(o*1.1,t?.presentAgeYears||138e8);if(n<145)return`T+${i(e(180/31557600,r,(n-55)/90))}`;if(n<245)return`T+${i(e(r,a,(n-145)/100))}`;if(n<340)return`T+${i(e(a,o,(n-245)/95))}`;if(n<470)return`T+${i(e(o,l,(n-340)/130))}`;const c=t?.cosmicFate;if(c&&Number.isFinite(c.outcomeYears)){if(n>=1e3)return c.label;const d=Ss((n-470)/530,0,1),u=e(l,c.outcomeYears,d);return`T+${i(u)}`}return n<570?`T+${i(e(l,1e12,(n-470)/100))}`:n<650?`T+10^${(12+(n-570)/80*2).toFixed(1)} 年`:n<680?`T+10^${(14+(n-650)/30).toFixed(1)} 年`:n<845?`T+10^${Math.round(15+(n-680)/165*23)} 年`:n<950?`T+10^${Math.round(38+(n-845)/105*(t.blackHoleEvaporationExponent-38))} 年`:n<999?`T+10^${t.blackHoleEvaporationExponent} 年以后`:"趋近热寂"}const Pl=["赫利俄斯","弥涅耳瓦","伊奥","俄耳甫斯","忒弥斯","厄里倪厄斯","欧律狄刻","阿斯忒里亚"],Go=["棒旋星系","絮状螺旋星系","环状星系","椭圆星系","不规则星系"],Dl=["赛里安共同体","洛珂蜂群","弧光联盟","静默者","澄海文明","铸星者","织光议会","塔乌林协约","奈落合众体","远潮群落","镜海联邦","巡星庭","赤纬公社","无昼同盟","尘环智群"],Ll=[14221151,16743275,6928639,15174911,16762460,6481615,16747975,10920191,15899989,7595116,6215935,16770683,12815615,16737894,9484543],Xa=[{until:55,name:"炽热大爆炸",description:"整个可观测区域同时处于高温、高密度状态；这不是物质从某个中心炸开。"},{until:145,name:"等离子体时代",description:"宇宙膨胀并冷却，原初核合成后，光子仍被自由电子频繁散射。"},{until:245,name:"宇宙黑暗时代",description:"38 万年后宇宙变得透明，但第一代恒星尚未点亮。"},{until:340,name:"宇宙黎明",description:"约 1～2 亿年后，第一代恒星与星系开始形成并推动再电离。"},{until:650,name:"恒星时代",description:"恒星、星系与重元素持续演化；生命与文明属于未证实的模型层。"},{until:845,name:"简并时代 · 假说",description:"若质子衰变等标准长期假说成立，恒星残骸绕核运行，并在近遇中逐个逃离或落入黑洞。"},{until:950,name:"黑洞时代 · 假说",description:"若霍金辐射的标准推断适用，孤立黑洞在极漫长时间中逐个蒸发。"},{until:1001,name:"暗时代 · 渐近",description:"宇宙继续膨胀，辐射红移与稀释，可用能量梯度趋近于零，而非发生一次全局终结。"}];function k0(n){const t=n?.cosmicFate,e=mn(10**n.lastStarDeathExponent,n),i={until:Math.min(e,t?.type==="heat-death"?e:t?.onsetAt??e),name:"恒星时代",description:"恒星、星系与重元素持续演化；生命与文明属于未证实的模型层。"};if(!t||t.type==="heat-death")return[...Xa.slice(0,4),i,...Xa.slice(5)];const s=[...Xa.slice(0,4),i],r=t.onsetAt>e?[{until:t.onsetAt,name:"简并时代 · 假说",description:"恒星已经熄灭，白矮星、中子星与黑洞继续经历长期引力演化。"}]:[];return t.type==="big-rip"?[...s,...r,{until:1001,name:"大撕裂 · 条件结局",description:"在 w < -1 持续成立的假设下，局部引力与微观束缚将被逐层克服。"}]:t.type==="big-crunch"?[...s,...r,{until:1001,name:"大坍缩 · 条件结局",description:"尺度因子反向演化，物质与辐射密度在有限时间内快速上升。"}]:[...s,...r,{until:1001,name:"真空衰变 · 条件结局",description:"随机量子隧穿产生低能真空泡，泡壁以近光速改写局部基态。"}]}function te(n){const t=Math.max(n(),1e-7),e=n();return Math.sqrt(-2*Math.log(t))*Math.cos(2*Math.PI*e)}function rt(n,t,e){return t+n()*(e-t)}const Il="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ",H0=4,Ya=16;function yh(n){let t=1779033703,e=3144134277,i=1013904242,s=2773480762;for(let r=0;r<n.length;r++){const a=n.charCodeAt(r);t=e^Math.imul(t^a,597399067),e=i^Math.imul(e^a,2869860233),i=s^Math.imul(i^a,951274213),s=t^Math.imul(s^a,2716044179)}return t=Math.imul(i^t>>>18,597399067),e=Math.imul(s^e>>>22,2869860233),i=Math.imul(t^i>>>17,951274213),s=Math.imul(e^s>>>19,2716044179),t^=e^i^s,e^=t,i^=t,s^=t,[t>>>0,e>>>0,i>>>0,s>>>0]}function ca(n){const t=String(n).trim().toUpperCase();if(!/^(?:[A-Z0-9]{16}|[A-Z0-9]{4}(?:-[A-Z0-9]{4}){3})$/.test(t))throw new TypeError("Universe seed must contain exactly 16 letters or digits.");return t.replaceAll("-","").match(new RegExp(`.{${H0}}`,"g")).join("-")}function G0(){const n=globalThis.crypto;if(!n?.getRandomValues)throw new Error("Secure random number generation is unavailable.");let t="";do for(t="";t.length<Ya;){const e=n.getRandomValues(new Uint8Array(Ya));for(const i of e)if(!(i>=252)&&(t+=Il[i%Il.length],t.length===Ya))break}while(!/[A-Z]/.test(t)||!/[0-9]/.test(t));return ca(t)}function V0(n){return yh(ca(n))[0]}function rn(n,t=0){let[e,i,s,r]=yh(`${ca(n)}:${t}`);return function(){const o=((e+i|0)+r|0)>>>0;return r=r+1|0,e=i^i>>>9,i=s+(s<<3)|0,s=s<<21|s>>>11,s=s+o|0,o/4294967296}}const Vo=245,vi=340,W0=(n,t,e)=>Math.max(t,Math.min(e,n));function X0(n,t,e){const i=t*3,s=e*3;return Math.hypot(n[i]-n[s],n[i+1]-n[s+1],n[i+2]-n[s+2])}function Y0(n,t,e=7){const i=rn(n,191),s=t.length/3,r=Math.min(e,s),a=[];let o=0,l=1/0;for(let v=0;v<s;v++){const h=v*3,f=Math.hypot(t[h],t[h+1],t[h+2]);f<l&&(l=f,o=v)}a.push(o);for(let v=0;a.length<r&&v<s*2;v++){const h=Math.floor(i()*s);a.every(m=>X0(t,h,m)>3.2)&&a.push(h)}for(;a.length<r;)a.push(Math.floor(i()*s));const c=a.map((v,h)=>{const f=v*3;return{position:[t[f],t[f+1],t[f+2]],birthAt:h===0?246:249+i()*28,maxRadius:4.8+i()*3.8,phase:i()*Math.PI*2}}),d=new Float32Array(s),u=new Float32Array(t.length);for(let v=0;v<s;v++){const h=v*3;let f=c[0],m=1/0;c.forEach(E=>{const C=Math.hypot(t[h]-E.position[0],t[h+1]-E.position[1],t[h+2]-E.position[2]);C<m&&(m=C,f=E)});const _=Math.min(48,m*2.65),M=Math.pow(i(),1.65)*24;d[v]=W0(f.birthAt+_+M,Vo+1,322);const y=1.28+i()*.24;u[h]=t[h]*y+te(i)*.9,u[h+1]=t[h+1]*(1.8+i()*.45)+te(i)*.68,u[h+2]=t[h+2]*y+te(i)*.9}const p=Math.min(3200,s),g=new Uint16Array(p),x=s/p;for(let v=0;v<p;v++)g[v]=Math.min(s-1,Math.floor(v*x+i()*x));return{birthAt:d,formationOrigins:u,gasSourceIndices:g,sites:c}}const Wo=145e8,ps=.012,Sh=(n,t,e)=>Math.min(e,Math.max(t,n));function q0(n,t,e){const i=Math.log10(t),s=Math.log10(e);return 470+(Math.log10(Sh(n,t,e))-i)/(s-i)*530}const $0={lambda:{label:"宇宙学常数",description:"暗能量密度保持不变，加速膨胀持续"},quintessence:{label:"演化标量场",description:"暗能量状态方程随尺度因子缓慢演化"},phantom:{label:"幽灵暗能量",description:"有效状态方程低于 -1，暗能量密度随膨胀增长"},recollapsing:{label:"反转势能",description:"标量场势能在远未来跨过零点，膨胀最终停止"}},j0={"heat-death":{label:"渐近热寂",shortLabel:"热寂",description:"膨胀持续，可用能量梯度逐渐消失"},"big-rip":{label:"大撕裂",shortLabel:"大撕裂",description:"加速膨胀最终克服星系、恒星系与局部束缚"},"big-crunch":{label:"大坍缩",shortLabel:"大坍缩",description:"膨胀反转后，尺度因子在有限时间内回落"},"vacuum-decay":{label:"真空衰变",shortLabel:"真空衰变",description:"低能真空泡成核，泡壁以近光速扩张"}};function Eh(n,t,e){const i=n*n+(1-n)**2;return t+e*(1-n)/i}function K0({scaleFactor:n,darkEnergyEvolution:t,rateSquared:e,ageYears:i,w0:s,wa:r,expansionRate:a,darkEnergyDensity:o,omegaMatter:l,turnScale:c,history:d}){let u=n,p=t,g=e,x=i;for(let v=1;v<=3200;v++){const h=u*Math.exp(-ps),f=Math.sqrt(u*h),m=Eh(f,s,r),_=p*Math.exp(3*(1+m)*ps),M=.22*o*Math.pow(h/c,2.35),y=l/Math.pow(h,3)+o*_-M,E=Math.sqrt(Math.max(1e-18,(g+y)*.5));if(x+=Wo/a*ps/E,u=h,p=_,g=y,v%80===0&&d.push({ageYears:x,scaleFactor:u,expansionRatio:-Math.sqrt(Math.max(0,g)),w:m,phase:"contraction"}),u<1e-8)break}return x}function Z0({model:n,w0:t,wa:e,expansionRate:i,darkEnergyDensity:s,turnScale:r,presentAgeYears:a}){const o=Math.max(.06,1-s);let l=1,c=1,d=a,u=1;const p=[{ageYears:d,scaleFactor:l,expansionRatio:1,w:t,phase:"expansion"}];for(let x=1;x<=2400;x++){const v=l,h=l*Math.exp(ps),f=Math.sqrt(l*h),m=Eh(f,t,e),_=c*Math.exp(-3*(1+m)*ps),M=n==="recollapsing"?.22*s*Math.pow(h/r,2.35):0,y=o/Math.pow(h,3)+s*_-M;if(y<=0){const C=d,L=K0({scaleFactor:v,darkEnergyEvolution:c,rateSquared:u,ageYears:d,w0:t,wa:e,expansionRate:i,darkEnergyDensity:s,omegaMatter:o,turnScale:r,history:p});return{history:p,turnaroundYears:C,crunchYears:L,finalRateSquared:y}}const E=Math.sqrt((u+y)*.5);d+=Wo/i*ps/Math.max(E,1e-12),l=h,c=_,u=y,x%80===0&&p.push({ageYears:d,scaleFactor:l,expansionRatio:Math.sqrt(y),w:m,phase:"expansion"})}let g=d;if(n==="phantom"){const x=Wo/i*2/(3*Math.abs(1+t))/Math.sqrt(s*c);g+=x}return{history:p,asymptoticYears:g,finalRateSquared:u}}function J0(n){const t=n();return t<.34?{model:"lambda",w0:-1,wa:0,turnScale:1/0}:t<.62?{model:"quintessence",w0:rt(n,-.96,-.76),wa:rt(n,-.1,.1),turnScale:1/0}:t<.82?{model:"phantom",w0:rt(n,-1.22,-1.035),wa:rt(n,.015,.14),turnScale:1/0}:{model:"recollapsing",w0:rt(n,-.98,-.78),wa:rt(n,-.08,.08),turnScale:rt(n,3.2,11)}}function Q0(n,t){const e=rn(n,6029),i=J0(e),s=Z0({...i,expansionRate:t.expansionRate,darkEnergyDensity:t.darkEnergyDensity,presentAgeYears:t.presentAgeYears});let r="heat-death",a=1/0;i.model==="phantom"?(r="big-rip",a=Math.max(t.presentAgeYears*1.05,s.asymptoticYears)):i.model==="recollapsing"&&(r="big-crunch",a=s.crunchYears);const o=e()<.16,l=o?rt(e,10.55,92):1/0,c=10**Math.min(l,300),d=o&&c<a,u=d?"vacuum-decay":r,p=d?c:a,g=$0[i.model],x=j0[u];let v=1/0;if(u==="big-crunch")v=s.turnaroundYears||p;else if(u==="big-rip"){const f=Math.log10(t.presentAgeYears),m=Math.log10(p);v=10**(f+(m-f)*.9)}else if(u==="vacuum-decay"){const f=Math.log10(t.presentAgeYears),m=Math.log10(p);v=10**(f+(m-f)*.97)}const h=Number.isFinite(v)?Sh(q0(v,t.presentAgeYears,p),480,997):930;return{...i,modelLabel:g.label,modelDescription:g.description,expansionHistory:s.history,turnaroundYears:s.turnaroundYears||null,metastableVacuum:o,vacuumDecayExponent:l,type:u,label:x.label,shortLabel:x.shortLabel,description:x.description,outcomeYears:p,outcomeExponent:Number.isFinite(p)?Math.log10(p):1/0,onsetYears:v,onsetAt:h}}function t_(n){return Number.isFinite(n.outcomeYears)?n.outcomeYears<1e12?`T+${(n.outcomeYears/1e8).toFixed(0)} 亿年`:`T+10^${n.outcomeExponent.toFixed(1)} 年`:"渐近 · 无有限终点"}function e_(n){return n.metastableVacuum?`亚稳态 · 假设寿命 10^${n.vacuumDecayExponent.toFixed(1)} 年`:"未设定可见衰变"}const n_=138e8,i_=2.725,Yr=.315;function s_(n,t){const e=Math.max(.06,1-t),i=Math.max(1e-6,t),s=2/(3*Math.sqrt(i))*Math.asinh(Math.sqrt(i/e)),r=2/(3*Math.sqrt(1-Yr))*Math.asinh(Math.sqrt((1-Yr)/Yr));return n_*s/r/n}function r_({speed:n,fineStructure:t,massRatio:e,expansionRate:i,darkEnergyDensity:s,primordialFluctuation:r,cmbTemperature:a,structureEfficiency:o}){const l=Math.max(.06,1-s),c=t**2*n**2/e,d=nt.clamp(38e4*Math.pow(a/i_/c,1.5)/i*Math.sqrt(Yr/l),4e4,4e6),u=nt.clamp(18e7/Math.pow(o,.7)/Math.pow(r,.35)/Math.sqrt(i),3e7,9e8),p=nt.clamp(u*5.4,u*1.8,32e8);return{atomicBindingScale:c,recombinationYears:d,firstStarsYears:u,matureGalaxiesYears:p,presentAgeYears:s_(i,s)}}function a_(n){const t=Math.round(n*360);return`${t<190?"青白":t<225?"蓝白":t<250?"靛蓝":"紫白"} · ${t}°`}function o_(n,t){return n===2?"主环 + 碎环":n===3?"无旋臂":n===4?"不规则":`${t} 条`}function c_(n){const t=n*100;return t<1e-4?"< 0.0001%":t<.01?`${t.toFixed(4)}%`:t<1?`${t.toFixed(2)}%`:`${t.toFixed(1)}%`}function l_(n){return n===0?"尚未出现":`${new Intl.NumberFormat("zh-CN").format(n)} 个`}function ir(n){const t=n.lastStarDeathExponent??n.stellarFormationEndExponent;return nt.clamp(mn(10**t,n),478,1e3)}function h_(n){return nt.clamp(mn(10**n.stellarFormationEndExponent,n),478,1e3)}function u_(n){return n>=1?`${n.toFixed(1)} 万亿颗`:`${Math.round(n*1e4)} 亿颗`}function bh(n=G0()){const t=ca(n),e=V0(t),i=rn(t),s=rt(i,.38,1.84),r=rt(i,.52,1.76),a=rt(i,.72,1.28),o=rt(i,.82,1.18),l=rt(i,.65,1.45),c=rt(i,.48,.82),d=rt(i,.55,1.75),u=rt(i,1.9,4.4),p=Math.exp(-Math.pow((a-1)/.17,2)-Math.pow((o-1)/.14,2)),g=nt.clamp(r*d/Math.pow(l,.72),.12,2.8),x=Math.max(2,Math.round(118*p*rt(i,.82,1.08))),v=nt.clamp(rt(i,.35,3.2)*g,.08,7.2),h=nt.clamp(12.5-(c-.68)*1.35-(l-1)*.42,11.8,13.25),f=nt.clamp(h+rt(i,.68,1.08),12.8,14.25),m=p*nt.clamp(1-Math.abs(u-2.725)/3.5,.12,1),_=Math.pow(i(),4)*.08*m,M=Math.floor(rt(i,5,16)),y=Math.floor(v*1e5*_*rt(i,.02,.7)),E=Math.max(M,y),C=Math.round(Math.pow(10,f-8)/10)*10,L=Math.floor(rt(i,3,7)),b=e%Go.length,S=[.96,.92,.72,.99,.34][b],R=i()<S,A=R&&i()<[.1,.07,.05,.045,.025][b],P=Math.floor(rt(i,97,103)),F=rt(i,.48,.76),U=r_({speed:s,fineStructure:a,massRatio:o,expansionRate:l,darkEnergyDensity:c,primordialFluctuation:d,cmbTemperature:u,structureEfficiency:g}),O=Q0(t,{expansionRate:l,darkEnergyDensity:c,presentAgeYears:U.presentAgeYears});return{seed:t,seedValue:e,speed:s,gravity:r,fineStructure:a,massRatio:o,expansionRate:l,darkEnergyDensity:c,primordialFluctuation:d,cmbTemperature:u,chemistryStability:p,structureEfficiency:g,stellarFormationEndExponent:h,lastStarDeathExponent:f,elements:x,stars:v,lifeProbability:_,civilizations:E,estimatedCivilizations:y,speciesCount:M,trackedSpeciesCount:M,lifetime:C,blackHoleEvaporationExponent:P,armCount:L,galaxyType:b,hasCentralBlackHole:R,activeNucleus:A,hue:F,cosmicMilestones:U,presentAgeYears:U.presentAgeYears,cosmicFate:O}}let Fs=null;function Ai(){const n=document.createElement("canvas");n.width=n.height=256;const t=n.getContext("2d"),e=t.createRadialGradient(128,128,82,128,128,128);e.addColorStop(0,"rgba(255,255,255,0)"),e.addColorStop(.72,"rgba(255,255,255,0)"),e.addColorStop(.86,"rgba(255,255,255,.8)"),e.addColorStop(.91,"rgba(255,255,255,.18)"),e.addColorStop(1,"rgba(255,255,255,0)"),t.fillStyle=e,t.fillRect(0,0,256,256);const i=new sa(n);return i.colorSpace=Ne,i}function ze(){const n=document.createElement("canvas");n.width=n.height=128;const t=n.getContext("2d"),e=t.createRadialGradient(64,64,0,64,64,64);e.addColorStop(0,"rgba(255,255,255,1)"),e.addColorStop(.08,"rgba(255,230,170,.85)"),e.addColorStop(.35,"rgba(255,190,100,.22)"),e.addColorStop(1,"rgba(0,0,0,0)"),t.fillStyle=e,t.fillRect(0,0,128,128);const i=new sa(n);return i.colorSpace=Ne,i}function Ae(){if(Fs)return Fs;const n=document.createElement("canvas");n.width=n.height=64;const t=n.getContext("2d"),e=t.createRadialGradient(32,32,0,32,32,32);return e.addColorStop(0,"rgba(255,255,255,1)"),e.addColorStop(.22,"rgba(255,255,255,.95)"),e.addColorStop(.5,"rgba(255,255,255,.35)"),e.addColorStop(1,"rgba(255,255,255,0)"),t.fillStyle=e,t.fillRect(0,0,64,64),Fs=new sa(n),Fs.colorSpace=Ne,Fs}let Nr=null,Or=null,Br=null;function gc(n){const t=document.createElement("canvas");t.width=1024,t.height=1024;const e=t.getContext("2d");n(e,t.width);const i=new sa(t);return i.colorSpace=Ne,i.minFilter=si,i.magFilter=En,i}function yn(n,t,e,i,s,r,a=0,o=Math.PI*2){n.beginPath(),n.ellipse(t,e,i,s,r,a,o)}function Ul(){return Nr||(Nr=gc((n,t)=>{const e=t/2,i=n.createLinearGradient(96,e,t-96,e);i.addColorStop(0,"rgba(255,255,255,0)"),i.addColorStop(.12,"rgba(255,221,174,.18)"),i.addColorStop(.35,"rgba(255,245,222,.76)"),i.addColorStop(.5,"rgba(255,255,255,1)"),i.addColorStop(.66,"rgba(255,232,199,.82)"),i.addColorStop(.88,"rgba(255,179,126,.2)"),i.addColorStop(1,"rgba(255,255,255,0)"),n.save(),n.globalCompositeOperation="lighter",n.filter="blur(34px)",n.strokeStyle=i,n.lineCap="round",n.lineWidth=62,yn(n,e,e+7,360,74,-.1),n.stroke(),n.filter="blur(15px)",n.lineWidth=22,yn(n,e,e+4,325,62,-.1),n.stroke(),n.restore(),n.save(),n.globalCompositeOperation="lighter",n.lineCap="round",n.strokeStyle=i,n.filter="blur(13px)",n.lineWidth=34,yn(n,e-2,e+3,118,164,-.08,Math.PI*1.03,Math.PI*1.98),n.stroke(),n.lineWidth=25,yn(n,e+2,e+4,121,161,-.08,.03,Math.PI*.97),n.stroke(),n.filter="none",n.lineWidth=7,n.strokeStyle="rgba(255,250,232,.92)",yn(n,e-2,e+3,116,160,-.08,Math.PI*1.05,Math.PI*1.95),n.stroke(),n.strokeStyle="rgba(255,221,180,.72)",yn(n,e+2,e+4,119,158,-.08,.07,Math.PI*.93),n.stroke(),n.restore(),n.save(),n.globalCompositeOperation="lighter",n.lineCap="round";for(let a=0;a<12;a++){const o=164+a*16,l=28+a*3.25,c=.2-a*.011;n.strokeStyle=`rgba(255,238,210,${c})`,n.lineWidth=a<4?3.5:2,yn(n,e,e+6,o,l,-.1),n.stroke()}n.restore();const s=n.createRadialGradient(e-18,e-20,6,e,e,105);s.addColorStop(0,"rgba(0,0,0,1)"),s.addColorStop(.78,"rgba(0,0,0,1)"),s.addColorStop(.94,"rgba(1,1,2,.995)"),s.addColorStop(1,"rgba(0,0,0,0)"),n.fillStyle=s,n.fillRect(e-112,e-112,224,224),n.save(),n.globalCompositeOperation="lighter",n.filter="blur(12px)",n.strokeStyle="rgba(255,244,220,.86)",n.lineWidth=24,yn(n,e,e,103,106,-.08),n.stroke(),n.filter="none",n.strokeStyle="rgba(255,255,247,.98)",n.lineWidth=6,yn(n,e,e,102,105,-.08),n.stroke();const r=n.createLinearGradient(130,e+58,t-120,e-32);r.addColorStop(0,"rgba(255,184,126,0)"),r.addColorStop(.2,"rgba(255,207,158,.55)"),r.addColorStop(.43,"rgba(255,251,231,.98)"),r.addColorStop(.66,"rgba(255,244,219,.94)"),r.addColorStop(.9,"rgba(255,166,112,.34)"),r.addColorStop(1,"rgba(255,166,112,0)"),n.strokeStyle=r,n.lineCap="round",n.filter="blur(11px)",n.lineWidth=28,n.beginPath(),n.moveTo(132,e+103),n.bezierCurveTo(318,e+83,638,e-54,908,e-90),n.stroke(),n.filter="none",n.lineWidth=9,n.stroke(),n.restore()}),Nr)}function d_(){return Or||(Or=gc((n,t)=>{const e=t/2;n.globalCompositeOperation="lighter",n.lineCap="round";for(let i=0;i<18;i++){const s=i/18*Math.PI*2,r=108+i%3*17,a=.11+i%4*.035;n.strokeStyle=`rgba(255,255,245,${.24+i%5*.07})`,n.lineWidth=2+i%3,yn(n,e,e,r,r*.9,-.08,s,s+a),n.stroke()}n.filter="blur(9px)",n.strokeStyle="rgba(255,238,209,.42)",n.lineWidth=10,yn(n,e,e,118,111,-.08,.14,Math.PI*.72),n.stroke()}),Or)}function f_(){return Br||(Br=gc((n,t)=>{const e=t/2,i=n.createRadialGradient(e,e,44,e,e,430);i.addColorStop(0,"rgba(255,250,232,.7)"),i.addColorStop(.18,"rgba(255,226,190,.38)"),i.addColorStop(.42,"rgba(255,180,119,.1)"),i.addColorStop(.72,"rgba(255,139,84,.025)"),i.addColorStop(1,"rgba(255,255,255,0)"),n.fillStyle=i,n.fillRect(0,0,t,t)}),Br)}function qr({color:n=16762255,tilt:t=0,phase:e=0,visualScale:i=1,intensity:s=1}={}){const r=new ke,a=new oe(new se({map:f_(),color:n,transparent:!0,opacity:0,depthWrite:!1,blending:Nt}));a.scale.setScalar(2.65*i);const o=new oe(new se({map:Ul(),color:n,transparent:!0,opacity:0,alphaTest:.006,depthWrite:!1,blending:Pi,rotation:t}));o.scale.setScalar(2.2*i);const l=new oe(new se({map:d_(),color:n,transparent:!0,opacity:0,depthWrite:!1,blending:Nt,rotation:t}));l.scale.setScalar(2.2*i);const c=new oe(new se({map:Ul(),color:n,transparent:!0,opacity:0,alphaTest:.006,depthWrite:!1,blending:Nt,rotation:t}));c.scale.setScalar(2.2*i);const d=new pn(new aa(.235*i,32,20),new er({color:0,transparent:!0,opacity:0}));return d.renderOrder=2,a.renderOrder=1,o.renderOrder=3,c.renderOrder=4,l.renderOrder=5,r.add(a,d,o,c,l),r.userData.blackHoleVisual={halo:a,horizon:d,accretion:o,bloom:c,flow:l,intensity:0,visibility:1,baseTilt:t,phase:e,visualScale:i},ei(r,s),r}function ei(n,t,e=1){const i=n.userData.blackHoleVisual;if(!i)return;const s=nt.clamp(t,0,1.4),r=nt.clamp(e,0,1);i.intensity=s,i.visibility=r,i.horizon.material.opacity=nt.smoothstep(s,0,.24)*r,i.horizon.visible=s*r>.001,i.accretion.material.opacity=Math.min(1,s*.92)*r,i.bloom.material.opacity=Math.min(.34,s*.27)*r,i.flow.material.opacity=Math.min(.82,s*.5)*r,i.halo.material.opacity=Math.min(.7,s*.42)*r}function os(n,t,e=1){const i=n.userData.blackHoleVisual;if(!i||i.intensity<=0)return;const s=t*.001,r=1+Math.sin(s*.72+i.phase)*.035,a=.82+Math.sin(s*1.7+i.phase*1.9)*.18;i.halo.scale.setScalar(2.65*i.visualScale*r),i.halo.material.opacity=Math.min(.7,i.intensity*(.36+a*.09))*i.visibility,i.bloom.material.opacity=Math.min(.36,i.intensity*(.22+a*.07))*i.visibility,i.flow.material.rotation=i.baseTilt+e*Math.sin(s*.44+i.phase)*.055,i.flow.material.opacity=Math.min(.82,i.intensity*(.38+a*.15))*i.visibility}const qa=245,$a=340;function Th(n){if(n<=qa)return 0;const t=$a-qa;if(n<$a){const e=(n-qa)/t;return t*(e**3-.5*e**4)}return t*.5+n-$a}function Ah(n,t){return Th(n)*t}function p_(n,{civilizationSimulation:t,civilizationData:e,civilizationGroups:i}){if(!n||!t)return;const s=new Uint16Array(e.length);n.owners.forEach((r,a)=>{if(r<0)return;const o=s[r]++;e[r].hostRemnantIndices[o]=t.habitatRemnantIndices[a]}),e.forEach((r,a)=>{r.displayCount=s[a],i[a].geometry.setDrawRange(0,s[a])})}function m_({clickableStars:n,stellarRemnants:t,remnantDynamics:e,cosmicPosition:i,civilizationData:s,civilizationGroups:r}){if(!t)return;const a=t.geometry.attributes.position.array,o=n?.geometry.attributes.position.array,l=u=>{const p=i>=e.birthAt[u];return!o||p?{positions:a,offset:u*3}:{positions:o,offset:e.sourceIndices[u]*3}},c=new z,d=(u,p,g,x,v)=>{const h=u*3,f=Math.min(i,e.escapeAt[u]),m=Ah(f,e.orbitRates[u]),_=Math.cos(m),M=Math.sin(m),y=e.axes[h],E=e.axes[h+1],C=e.axes[h+2],L=y*p+E*g+C*x;v.set(p*_+(E*x-C*g)*M+y*L*(1-_),g*_+(C*p-y*x)*M+E*L*(1-_),x*_+(y*g-E*p)*M+C*L*(1-_))};s.forEach((u,p)=>{const g=r[p];if(!g)return;const x=g.geometry.attributes.position.array;for(let h=0;h<u.displayCount;h++){const f=u.hostRemnantIndices[h],m=l(f),_=h*3;if(d(f,u.hostOffsets[_],u.hostOffsets[_+1],u.hostOffsets[_+2],c),x[_]=m.positions[m.offset]+c.x,x[_+1]=m.positions[m.offset+1]+c.y,x[_+2]=m.positions[m.offset+2]+c.z,u.highDimensional&&i>=u.ascensionAt){const M=nt.smoothstep(i,u.ascensionAt,u.ascensionAt+34),y=h*1.618+i*.035;x[_]+=Math.sin(y)*M*.7,x[_+1]+=Math.cos(y*.73)*M*.42,x[_+2]+=Math.sin(y*.51+2.1)*M*.7}}g.geometry.attributes.position.needsUpdate=!0;const v=l(u.homeRemnantIndex);if(d(u.homeRemnantIndex,u.homeOffset.x,u.homeOffset.y,u.homeOffset.z,c),u.home.set(v.positions[v.offset]+c.x,v.positions[v.offset+1]+c.y,v.positions[v.offset+2]+c.z),u.highDimensional&&i>=u.ascensionAt){const h=nt.smoothstep(i,u.ascensionAt,u.ascensionAt+34),f=p*2.17+i*.035;u.home.x+=Math.sin(f)*h*.7,u.home.y+=Math.cos(f*.73)*h*.42,u.home.z+=Math.sin(f*.51+2.1)*h*.7}})}const wh=Math.PI*2,g_=24;function __(n,t,e){return Math.min(e,Math.max(t,n))}function Os(n,t,e){if(e<=t)return n>=e?1:0;const i=__((n-t)/(e-t),0,1);return i*i*(3-2*i)}function Rh(n,t){const e=t.persistUntil??t.start+t.duration,i=t.persistenceFadeDuration??g_;return 1-Os(n,e,e+i)}function Ci(n,t){let e=n+1^t;return e=Math.imul(e^e>>>16,569420461),e=Math.imul(e^e>>>15,1935289751),((e^e>>>15)>>>0)/4294967296}function x_(n,t,e,i,s,r,a,o,l){const c=Math.cos(l),d=Math.sin(l),u=r*e+a*i+o*s;n[t]=e*c+(a*s-o*i)*d+r*u*(1-c),n[t+1]=i*c+(o*e-r*s)*d+a*u*(1-c),n[t+2]=s*c+(r*i-a*e)*d+o*u*(1-c)}function M_(n,t){const e=n.length/3,i=new Float32Array(n.length),s=new Float32Array(e),r=t.galaxyType<=2,a=t.hasCentralBlackHole?1.35:.16,o=t.seedValue^1831565813,l=1;for(let c=0;c<e;c++){const d=c*3,u=n[d],p=n[d+1],g=n[d+2],x=Math.max(.24,Math.hypot(u,p,g));if(r){let m=(Ci(c,o+29)-.5)*.035;const _=1;let M=(Ci(c,o+47)-.5)*.035;const y=Math.hypot(m,_,M);m/=y,M/=y,i.set([m,_/y,M],d)}else{const m=Ci(c,o+71)*wh,_=.08+Ci(c,o+97)*.54,M=Math.sin(_);i.set([Math.cos(m)*M,Math.cos(_),Math.sin(m)*M],d)}const v=a/Math.pow(x+.12,3),h=.72/Math.pow(x+1.8,2),f=.055*Math.sqrt(t.gravity*(v+h));s[c]=l*Math.min(.095,f)}return{axes:i,orbitRates:s,centralMass:a}}function v_(n,t,e,i){const s=Th(n);for(let r=0;r<i.orbitRates.length;r++){const a=r*3;x_(e,a,t[a],t[a+1],t[a+2],i.axes[a],i.axes[a+1],i.axes[a+2],s*i.orbitRates[r])}}function y_(n,t,{seedValue:e,eventIndex:i,influenceRadius:s=4.8,maxStars:r=2600}){const a=[];for(let h=0;h<n.length/3;h++){const f=h*3,m=Math.hypot(n[f]-t.x,n[f+1]-t.y,n[f+2]-t.z);m<=s&&a.push({index:h,distance:m})}a.sort((h,f)=>h.distance-f.distance);const o=Math.min(r,a.length),l=new Uint16Array(o),c=new Float32Array(o),d=a.length/Math.max(1,o),u=e^Math.imul(i+1,73244475);for(let h=0;h<o;h++){const f=Ci(h,u)*Math.min(1,d),m=h===0?0:Math.min(a.length-1,Math.floor(h*d+f));l[h]=a[m].index,c[h]=a[m].distance}const p=Ci(i,u+131)*wh,g=(Ci(i,u+173)-.5)*.5,x=Math.cos(g),v=new Float32Array([Math.cos(p)*Math.sin(g),x,Math.sin(p)*Math.sin(g)]);return{indices:l,restDistances:c,axis:v,influenceRadius:s,softening:.24,captureRadius:.42}}function S_(n,t,e,i,s){const r=i.gravityField;if(!r||n<i.start)return;const o=Math.min(n,i.persistUntil)-i.start,l=Os(n,i.start,i.start+4.5),c=Os(n,i.impactAt-1.2,i.impactAt+2.4),d=Rh(n,i),u=1-i.radiatedMassFraction*c,p=r.axis[0],g=r.axis[1],x=r.axis[2];for(let v=0;v<r.indices.length;v++){const f=r.indices[v]*3,m=t[f]-s.x,_=t[f+1]-s.y,M=t[f+2]-s.z,y=Math.max(.025,Math.hypot(m,_,M)),E=r.restDistances[v],C=1-Os(E,r.influenceRadius*.34,r.influenceRadius);if(C<=0)continue;const L=Math.sqrt(y*y+r.softening*r.softening),b=.105*Math.sqrt(u/Math.pow(L,3)),S=1+(1-c)*.22*Math.sin(o*.72+E*2.3),R=o*b*S*l*C,A=Math.cos(R),P=Math.sin(R),F=p*m+g*_+x*M;let U=m*A+(g*M-x*_)*P+p*F*(1-A),O=_*A+(x*m-p*M)*P+g*F*(1-A),W=M*A+(p*_-g*m)*P+x*F*(1-A);const V=Math.min(.14,.055/(E+.24)),j=1+Math.sin(R*.63+E*3.1)*V*l*C;if(U*=j,O*=j,W*=j,E<r.captureRadius){const K=E/r.captureRadius*11,et=Os(n,i.impactAt+K,i.impactAt+K+13),H=1-et*.965;U*=H,O*=H,W*=H;const G=1-et;e[f]*=G,e[f+1]*=G,e[f+2]*=G}t[f]=s.x+m+(U-m)*d,t[f+1]=s.y+_+(O-_)*d,t[f+2]=s.z+M+(W-M)*d}}const Xo=Math.PI*2,zt=(n,t,e)=>Math.min(e,Math.max(t,n)),Ch=(n,t,e)=>{if(e<=t)return n>=e?1:0;const i=zt((n-t)/(e-t),0,1);return i*i*(3-2*i)},Se=(n,t,e)=>10**rt(n,t,e);function E_({massA:n,massB:t,alignedSpinA:e,alignedSpinB:i,inPlaneSpinA:s=0,inPlaneSpinB:r=0}){const a=Math.max(n,t),l=Math.min(n,t)/a,c=l/(1+l)**2,d=12e3*c**2*Math.sqrt(Math.max(0,1-4*c))*(1-.93*c),u=6900*c**2/(1+l)*(i-l*e),p=6e4*c**2/(1+l)*(r-l*s),g=145*Math.PI/180,x=d**2+u**2+2*d*u*Math.cos(g);return Math.sqrt(Math.max(0,x)+p**2)}function ja(n,t,e,i){return t<=1?[e]:Array.from({length:t},(s,r)=>{const a=e+(i-e)*r/(t-1),o=r===0?0:rt(n,-.025,.025);return zt(a+o,e,i)})}function b_(n,t,e){const i=rn(t.seed,12011+e*977),s=Math.sqrt(t.gravity);if(n.type==="pair-instability-supernova"){const r=rt(i,140,255),a=rt(i,64,Math.min(133,r*.54)),o=zt(4+Math.pow((a-64)/69,1.7)*72,4,76),l=zt(.04+Math.pow((a-64)/69,2.2)*38,.04,38),c=o*1e51/1788e51;return{model:"pair-instability",progenitorMass:r,heliumCoreMass:a,explosionEnergyBethe:o,nickelMass:l,radiatedMass:c,ejectaMass:r-c,ejectaVelocityKms:rt(i,7e3,14500)*Math.pow(o/20,.18),noRemnant:!0,rangeScale:zt(.82+Math.sqrt(o/20)*.3,.9,1.62),civilizationScale:zt(.76+Math.sqrt(o/20)*.24,.86,1.48),kickScale:zt(.8+o/120,.84,1.42)}}if(n.type==="type-ia-supernova"){const r=i()<.46?"double-degenerate":"single-degenerate",a=r==="double-degenerate"?rt(i,1.22,1.58):rt(i,1.34,1.41),o=rt(i,.38,.86),l=rt(i,.85,1.55)*(1+(o-.6)*.25);return{model:"thermonuclear-supernova",channel:r,whiteDwarfMass:a,nickelMass:o,explosionEnergyBethe:l,ejectaMass:a,ejectaVelocityKms:rt(i,9e3,14500)*Math.sqrt(l),noRemnant:!0,rangeScale:zt(.84+l*.14,.92,1.16),civilizationScale:zt(.78+o*.28,.86,1.12),kickScale:zt(.84+l*.1,.9,1.08)}}if(n.type==="core-collapse-supernova"){const r=rt(i,8.2,31),a=zt((r-8)/23+rt(i,-.16,.16),0,1),o=a>.7?"black-hole":"neutron-star",l=o==="black-hole"?rt(i,4.8,Math.min(13.5,r*.55)):rt(i,1.18,2.18),c=rt(i,.45,2.15)*(1-a*.28),d=rt(i,.4,Math.min(2.1,r-l-.8));return{model:"core-collapse",progenitorMass:r,explosionEnergyBethe:c,ejectaMass:r-l-d,ejectaVelocityKms:rt(i,4500,11500)*Math.sqrt(c),nickelMass:rt(i,.025,.13)*c,neutrinoEnergyErg:Se(i,52.9,53.5),neutrinoMassLoss:d,remnantType:o,remnantMass:l,natalKickKms:o==="neutron-star"?rt(i,80,720):rt(i,15,180),persistentRemnant:!0,gravityStrength:zt(l/8,.2,1.35),gravityRadius:rt(i,.42,.72),rangeScale:zt(.78+Math.sqrt(c)*.2,.86,1.22),civilizationScale:zt(.72+c*.17,.8,1.16),kickScale:zt(.76+c*.18,.82,1.18)}}if(n.type==="superluminous-supernova"){const r=i()<.64?"magnetar":"circumstellar-interaction",a=rt(i,22,78),o=rt(i,3,18),l=r==="magnetar"&&a<48?"magnetar":"black-hole",c=l==="magnetar"?rt(i,1.55,2.35):rt(i,5.5,18),d=o*1e51/1788e51;return{model:"superluminous-supernova",engine:r,progenitorMass:a,explosionEnergyBethe:o,radiatedMass:d,ejectaMass:a-c-d,ejectaVelocityKms:rt(i,8e3,18500)*Math.pow(o/8,.18),peakLuminosityErgS:Se(i,43.7,45),magnetarPeriodMs:r==="magnetar"?rt(i,1.1,4.8):null,magneticFieldGauss:r==="magnetar"?Se(i,13.8,15.2):null,remnantType:l,remnantMass:c,persistentRemnant:!0,gravityStrength:zt(c/10,.24,1.45),gravityRadius:rt(i,.48,.78),rangeScale:zt(.94+Math.sqrt(o/8)*.34,1.05,1.52),civilizationScale:zt(.88+Math.log10(o)*.24,.96,1.38),kickScale:zt(.86+o/42,.92,1.32)}}if(n.type==="young-pulsar-birth"){const r=rt(i,1.18,2.12),a=Se(i,1.05,2.22),o=Se(i,11.8,13.55),l=39e30*Math.pow(o/1e12,2)*Math.pow(1e3/a,4);return{model:"young-pulsar",neutronStarMass:r,spinPeriodMs:a,magneticFieldGauss:o,spinDownLuminosityErgS:l,natalKickKms:rt(i,90,820),beamOpeningDeg:rt(i,5,18),persistentRemnant:!0,gravityStrength:zt(r/3.6,.28,.62),gravityRadius:rt(i,.34,.54),rangeScale:zt(.76+Math.log10(l/1e36+1)*.16,.78,1.22),civilizationScale:zt(.72+Math.log10(l/1e36+1)*.18,.75,1.18),kickScale:0}}if(n.type==="gamma-ray-burst"){const r=rt(i,22,72),a=Se(i,51.4,54.1),o=rt(i,3.2,11.5),l=o*Math.PI/180;return{model:"collapsar-jet",progenitorMass:r,isotropicEnergyErg:a,trueJetEnergyErg:a*(1-Math.cos(l)),jetOpeningDeg:o,lorentzFactor:rt(i,90,620),durationSeconds:Se(i,.35,2.15),remnantMass:rt(i,3.4,15),remnantType:"black-hole",rangeScale:zt(.78+(Math.log10(a)-51)*.17,.86,1.48),civilizationScale:zt(.72+(Math.log10(a)-51)*.2,.82,1.5),kickScale:0}}if(n.type==="quasar-awakening"){const r=Se(i,6.5,9.2)*zt(t.massRatio,.7,1.6),a=Se(i,-1.15,.24),o=rt(i,.07,.22);return{model:"quasar-duty-cycle",blackHoleMass:r,eddingtonRatio:a,radiativeEfficiency:o,accretionRateSolarPerYear:2.2*r/1e8*a*(.1/o),jetLorentzFactor:rt(i,3,18),jetOpeningDeg:rt(i,4,15),activeDurationMyr:Se(i,-.2,1.7),pulsePhases:[.32,.58,.76],pulseWeights:[1,.72,.46],recoveryDuration:rt(i,18,32),recoveryFraction:rt(i,.22,.38),temporaryOnly:!0,rangeScale:zt(.8+Math.sqrt(a)*.34,.84,1.38),civilizationScale:zt(.72+Math.sqrt(a)*.3,.78,1.34),kickScale:0}}if(n.type==="magnetar-flare"){const r=Se(i,14.2,15.35),a=Se(i,44.2,46.4),o=2+Math.floor(i()*4);return{model:"magnetar-giant-flare",magneticFieldGauss:r,energyErg:a,spikeDurationSeconds:Se(i,-2.7,-.55),tailPeriodSeconds:rt(i,2.2,11.8),pulsePhases:ja(i,o,.34,.76),pulseWeights:Array.from({length:o},(l,c)=>Math.pow(.68,c)),recoveryDuration:rt(i,12,28),recoveryFraction:rt(i,.36,.62),temporaryOnly:!0,rangeScale:zt(.76+(Math.log10(a)-44)*.18,.8,1.34),civilizationScale:zt(.68+(Math.log10(a)-44)*.22,.72,1.42),kickScale:0}}if(n.type==="pulsar-glitch"){const r=Se(i,1.3,3),a=Se(i,-9.2,-5.1);return{model:"pulsar-glitch",spinPeriodMs:r,fractionalFrequencyJump:a,recoveryFraction:rt(i,.08,.82),recoveryDays:Se(i,.4,2.9),pulsePhases:[.46,.56],pulseWeights:[1,.24],temporaryOnly:!0,rangeScale:1,civilizationScale:1,kickScale:0}}if(n.type==="stellar-black-hole-merger"||n.type==="late-black-hole-merger"){const r=n.type==="late-black-hole-merger",a=r?Se(i,2.7,5.4):rt(i,18,86),o=r?Se(i,2.5,Math.log10(a)):rt(i,7,Math.min(70,a)),l=a+o,c=a*o/(l*l),d=rt(i,0,.94),u=rt(i,0,.94),p=rt(i,-1,1),g=rt(i,-1,1),x=d*p,v=u*g,h=i()*Xo,f=i()*Xo,m=d*Math.sqrt(1-p**2)*Math.cos(h),_=u*Math.sqrt(1-g**2)*Math.cos(f),M=(a*x+o*v)/l,y=zt(.035+c*.11+Math.max(0,M)*.018,.028,.09),E=zt(E_({massA:a,massB:o,alignedSpinA:x,alignedSpinB:v,inPlaneSpinA:m,inPlaneSpinB:_}),0,5e3);return{model:"black-hole-binary",massA:a,massB:o,chirpMass:Math.pow(a*o,3/5)/Math.pow(l,1/5),spinA:x,spinB:v,spinMagnitudeA:d,spinMagnitudeB:u,spinTiltCosineA:p,spinTiltCosineB:g,effectiveSpin:M,radiatedMassFraction:y,remnantMass:l*(1-y),recoilKms:E,gasRich:!r&&i()<.38,persistentRemnant:!1,rangeScale:1,civilizationScale:1,kickScale:0}}if(n.type==="neutron-star-kilonova"){const r=rt(i,1.18,1.92),a=rt(i,1.12,Math.min(1.82,r)),o=r+a,l=Math.pow(r*a,3/5)/Math.pow(o,1/5),c=1-a/r,d=rt(i,.035,.075)*s,u=zt(rt(i,.018,.072)*(1+c*2.4),.012,.13),p=zt(rt(i,.12,.27)*s,.09,.34),g=2.72+(t.massRatio-1)*.28,x=o-d>g?"black-hole":"massive-neutron-star";return{model:"compact-merger",massA:r,massB:a,chirpMass:l,ejectaMass:u,ejectaVelocityC:p,radiatedMassFraction:d/o,jetOpeningDeg:rt(i,5,16),remnantMass:o-d-u,remnantType:x,persistentRemnant:!0,gravityStrength:zt((o-2.2)/1.5,.32,1.25),gravityRadius:rt(i,.62,.9),rangeScale:zt(.82+u*5+p,.82,1.42),civilizationScale:zt(.72+p*1.7,.78,1.3),kickScale:zt(.7+p*1.5,.8,1.25)}}if(n.type==="tidal-disruption-event"){const r=rt(i,.35,3.2),a=Math.pow(r,r<1?.82:.57),o=8e7*Math.pow(a,1.5)/Math.sqrt(r),l=Math.min(Se(i,5.8,8.05)*t.gravity,o),c=rt(i,.72,2.15),d=a*Math.cbrt(l/r),u=41*Math.sqrt(l/1e6)*Math.pow(r,-.5)*Math.pow(a,1.5)/Math.pow(c,3),p=rt(i,.43,.57),g=zt(rt(i,.6,3.8)*c,.5,6.5);return{model:"tidal-disruption",blackHoleMass:l,hillsMass:o,starMass:r,starRadius:a,penetration:c,tidalRadiusSolar:d,fallbackDays:u,boundFraction:p,peakEddingtonRatio:g,fallbackExponent:-5/3,unboundVelocityKms:rt(i,5500,16e3)*Math.sqrt(c),pulsePhases:[.58,.74],pulseWeights:[1,.42],recoveryDuration:rt(i,18,32),recoveryFraction:.28,rangeScale:zt(.76+Math.log10(g+1)*.42,.78,1.25),civilizationScale:zt(.62+Math.log10(g+1)*.5,.68,1.18),kickScale:zt(.72+c*.15,.82,1.08)}}if(n.type==="failed-supernova"){const r=rt(i,18,42),a=rt(i,.025,.16)/s,o=rt(i,.16,.46),l=r*(1-a)-o;return{model:"failed-collapse",progenitorMass:r,ejectedEnvelopeFraction:a,neutrinoMassLoss:o,remnantMass:l,dustOpticalDepth:rt(i,1.2,5.4),fallbackFraction:zt(1-a-o/r,.72,.97),persistentRemnant:!0,remnantType:"black-hole",gravityStrength:zt(l/24,.45,1.5),gravityRadius:rt(i,.58,.88),rangeScale:zt(.76+a*2.1,.78,1.08),civilizationScale:zt(.6+a*2.4,.65,1.02),kickScale:zt(.45+a*2.8,.5,.88)}}if(n.type==="red-dwarf-superflare"){const r=Se(i,34.4,36.25),a=2+Math.floor(i()*4),o=Math.log10(r)-34;return{model:"magnetic-flare-storm",energyErg:r,stormCount:a,pulsePhases:ja(i,a,.38,.78),pulseWeights:Array.from({length:a},(l,c)=>Math.pow(.76,c)),cmeVelocityKms:rt(i,900,4200)*s,ultravioletFraction:rt(i,.12,.34),atmosphereLossFraction:zt(rt(i,.006,.045)*o,.004,.14),recoveryDuration:rt(i,16,34),recoveryFraction:rt(i,.48,.72),temporaryOnly:!0,rangeScale:zt(.72+o*.13,.78,1.22),civilizationScale:zt(.55+o*.22,.62,1.3),kickScale:0}}if(n.type==="classical-nova"){const r=rt(i,.72,1.34),a=Se(i,-10.1,-8.15),o=22e-6*Math.pow(1.05/r,3.2),l=o/a,c=zt(Math.round(4.4-Math.log10(l)*.58),2,4);return{model:"recurrent-nova",whiteDwarfMass:r,accretionRate:a,ignitionMass:o,recurrenceYears:l,ejectaMass:o*rt(i,.62,1.08),ejectaVelocityKms:rt(i,850,3900)*Math.sqrt(r),outburstCount:c,pulsePhases:ja(i,c,.14,.78),pulseWeights:Array.from({length:c},(d,u)=>Math.pow(.7,u)),recoveryDuration:rt(i,7,15),recoveryFraction:.74,temporaryOnly:!0,rangeScale:zt(.72+r*.18,.78,1.02),civilizationScale:zt(.58+r*.2,.68,.92),kickScale:0}}return null}function Fl(n,t,e=null){if(!t)return n;const i=Math.sqrt(e?.speed||1),s=.82+i*.18;return{...n,radius:n.radius*(t.rangeScale||1)*s,maxStars:Math.max(1,Math.round(n.maxStars*(t.rangeScale||1))),kick:n.kick*(t.kickScale??1),civilization:n.civilization*(t.civilizationScale||1),range:n.range*(t.rangeScale||1)*i,beamAngle:t.jetOpeningDeg||t.beamOpeningDeg?(t.jetOpeningDeg||t.beamOpeningDeg)*Math.PI/180:n.beamAngle}}function T_(n){const t=n.simulation;if(!t)return null;if(t.model==="compact-merger"){const e=t.remnantType==="black-hole"?"黑洞":"大质量中子星";return`两颗 ${t.massA.toFixed(2)} 与 ${t.massB.toFixed(2)} M☉ 中子星并合，抛出 ${t.ejectaMass.toFixed(3)} M☉、约 ${(t.ejectaVelocityC*100).toFixed(0)}% 光速的物质，留下 ${t.remnantMass.toFixed(2)} M☉ ${e}`}if(t.model==="tidal-disruption")return`${t.starMass.toFixed(1)} M☉ 恒星以穿透因子 β=${t.penetration.toFixed(2)} 掠过约 ${(t.blackHoleMass/1e6).toFixed(1)}×10⁶ M☉ 黑洞，束缚碎片在约 ${Math.round(t.fallbackDays)} 天后开始回落`;if(t.model==="failed-collapse")return`${t.progenitorMass.toFixed(1)} M☉ 恒星仅抛出约 ${(t.ejectedEnvelopeFraction*100).toFixed(1)}% 外层，回落物质形成约 ${t.remnantMass.toFixed(1)} M☉ 黑洞`;if(t.model==="magnetic-flare-storm")return`${t.stormCount} 次耀斑组成约 10^${Math.log10(t.energyErg).toFixed(1)} erg 的爆发风暴，CME 速度约 ${Math.round(t.cmeVelocityKms)} km/s，近轨行星大气随后逐步恢复`;if(t.model==="recurrent-nova")return`${t.whiteDwarfMass.toFixed(2)} M☉ 白矮星以 ${t.accretionRate.toExponential(1)} M☉/年吸积，模型复发周期约 ${Math.round(t.recurrenceYears).toLocaleString("zh-CN")} 年，本段显示 ${t.outburstCount} 次爆发`;if(t.model==="pair-instability")return`${t.progenitorMass.toFixed(0)} M☉ 巨星的 ${t.heliumCoreMass.toFixed(0)} M☉ 氦核触发成对不稳定，释放约 ${t.explosionEnergyBethe.toFixed(1)} Bethe，并完全解体、不留致密残骸`;if(t.model==="thermonuclear-supernova")return`${t.channel==="double-degenerate"?"双白矮星并合":"伴星吸积"}使 ${t.whiteDwarfMass.toFixed(2)} M☉ 白矮星热核失控，合成约 ${t.nickelMass.toFixed(2)} M☉ 镍-56，并完全解体`;if(t.model==="core-collapse"){const e=t.remnantType==="black-hole"?"黑洞":"中子星";return`${t.progenitorMass.toFixed(1)} M☉ 恒星以约 ${t.explosionEnergyBethe.toFixed(2)} Bethe 爆发，抛出 ${t.ejectaMass.toFixed(1)} M☉ 物质，留下 ${t.remnantMass.toFixed(2)} M☉ ${e}`}if(t.model==="superluminous-supernova"){const e=t.engine==="magnetar"?`${t.magnetarPeriodMs.toFixed(1)} ms 初始周期磁星`:"致密星周物质相互作用";return`${t.progenitorMass.toFixed(0)} M☉ 前身星由${e}持续供能，峰值光度约 10^${Math.log10(t.peakLuminosityErgS).toFixed(1)} erg/s，留下 ${t.remnantMass.toFixed(1)} M☉ ${t.remnantType==="black-hole"?"黑洞":"磁星"}`}return t.model==="young-pulsar"?`${t.neutronStarMass.toFixed(2)} M☉ 中子星以 ${t.spinPeriodMs.toFixed(1)} ms 周期自转，表面磁场约 10^${Math.log10(t.magneticFieldGauss).toFixed(1)} G，并以约 ${Math.round(t.natalKickKms)} km/s 获得诞生踢速`:t.model==="collapsar-jet"?`${t.progenitorMass.toFixed(0)} M☉ 巨星坍缩为约 ${t.remnantMass.toFixed(1)} M☉ 黑洞，产生张角 ${t.jetOpeningDeg.toFixed(1)}°、洛伦兹因子约 ${Math.round(t.lorentzFactor)} 的喷流，持续约 ${t.durationSeconds.toFixed(1)} 秒`:t.model==="quasar-duty-cycle"?`约 ${(t.blackHoleMass/1e6).toFixed(1)}×10⁶ M☉ 中央黑洞达到 ${(t.eddingtonRatio*100).toFixed(0)}% 爱丁顿吸积率，每年吸积约 ${t.accretionRateSolarPerYear.toFixed(2)} M☉，活动期约 ${t.activeDurationMyr.toFixed(1)} 百万年`:t.model==="magnetar-giant-flare"?`约 10^${Math.log10(t.magneticFieldGauss).toFixed(1)} G 磁场重排，释放约 10^${Math.log10(t.energyErg).toFixed(1)} erg；初始硬脉冲持续 ${t.spikeDurationSeconds.toFixed(3)} 秒并伴随衰减尾波`:t.model==="pulsar-glitch"?`${t.spinPeriodMs.toFixed(1)} ms 脉冲星的自转频率跃增约 ${t.fractionalFrequencyJump.toExponential(1)}，其中 ${(t.recoveryFraction*100).toFixed(0)}% 在约 ${Math.round(t.recoveryDays)} 天内恢复`:t.model==="black-hole-binary"?`${t.massA.toFixed(1)} 与 ${t.massB.toFixed(1)} M☉ 黑洞并合，约 ${(t.radiatedMassFraction*100).toFixed(1)}% 总质量转化为引力波，形成 ${t.remnantMass.toFixed(1)} M☉ 黑洞并以约 ${Math.round(t.recoilKms)} km/s 反冲${t.gasRich?"，周围气体产生短暂余辉":""}`:null}function Ph(n,t){if(!t.simulation?.persistentRemnant||n<t.impactAt)return 0;const e=t.persistUntil??845,i=t.persistenceFadeDuration??24;return 1-Ch(n,e,e+i)}function Nl(n,t){let e=n+1^t;return e=Math.imul(e^e>>>16,569420461),e=Math.imul(e^e>>>15,1935289751),((e^e>>>15)>>>0)/4294967296}function A_(n,t,e,i,s){if(!e?.gravityStrength||!e.persistentRemnant)return null;const r=e.gravityRadius||.7,a=[];for(let v=0;v<n.length/3;v++){const h=v*3,f=Math.hypot(n[h]-t.x,n[h+1]-t.y,n[h+2]-t.z);f<=r&&a.push({index:v,distance:f})}a.sort((v,h)=>v.distance-h.distance);const o=Math.min(180,a.length),l=new Uint16Array(o),c=new Float32Array(o),d=a.length/Math.max(1,o);for(let v=0;v<o;v++){const h=a[Math.min(a.length-1,Math.floor(v*d))];l[v]=h.index,c[v]=h.distance}const u=i^Math.imul(s+1,668265261),p=Nl(s,u)*Xo,g=(Nl(s+11,u+37)-.5)*.56,x=Math.cos(g);return{indices:l,restDistances:c,influenceRadius:r,strength:e.gravityStrength,axis:new Float32Array([Math.cos(p)*Math.sin(g),x,Math.sin(p)*Math.sin(g)])}}function w_(n,t,e,i){const s=e.transientGravityField;if(!s||n<e.impactAt)return;const r=Ph(n,e);if(r<=0)return;const a=Math.min(n,e.persistUntil??845)-e.impactAt,o=s.axis[0],l=s.axis[1],c=s.axis[2];for(let d=0;d<s.indices.length;d++){const u=s.indices[d];if(u===e.sourceIndex)continue;const p=u*3,g=t[p]-i.x,x=t[p+1]-i.y,v=t[p+2]-i.z,h=Math.max(.08,s.restDistances[d]),f=1-Ch(h,s.influenceRadius*.35,s.influenceRadius);if(f<=0)continue;const m=a*.018*Math.sqrt(s.strength/Math.pow(h+.18,3))*f,_=Math.cos(m),M=Math.sin(m),y=o*g+l*x+c*v,E=g*_+(l*v-c*x)*M+o*y*(1-_),C=x*_+(c*g-o*v)*M+l*y*(1-_),L=v*_+(o*x-l*g)*M+c*y*(1-_);t[p]=i.x+g+(E-g)*r,t[p+1]=i.y+x+(C-x)*r,t[p+2]=i.z+v+(L-v)*r}}function R_(n,t){const{mode:e,epochEffectsGroup:i,primordialParticles:s,primordialFactors:r,primordialDirections:a,expansionStreaks:o,expansionDirections:l,bangCore:c,shockwaves:d,renderer:u,scene:p,clickableStars:g,originalGalaxyPositions:x,stellarGravityState:v,universe:h,transition:f,galaxyGroup:m,starDeathThresholds:_,originalGalaxyColors:M,stellarDawnModel:y,dawnGas:E,dawnSites:C,cosmicEvents:L,remnantGroup:b,stellarRemnants:S,originalRemnantPositions:R,remnantDynamics:A,blackHoleRemnants:P,heatDeathGroup:F,coldPhotons:U,originalPhotonPositions:O,originalPhotonColors:W,cosmicFateGroup:V,fateBubble:j,fateGlow:K}=t,et=h.cosmicFate,H=et&&et.type!=="heat-death",G=H?nt.smoothstep(n,et.onsetAt,1e3):0,xt=n<150&&e==="explorer";if(i.visible=xt,xt&&s){const k=nt.smoothstep(n,0,145),B=nt.smoothstep(n,0,55),Mt=nt.smoothstep(n,55,145),ct=Math.sqrt(h.speed),at=(.06+Math.pow(B,.62)*32+Mt*7)*ct,it=s.geometry.attributes.position.array;for(let gt=0;gt<r.length;gt++){const ft=at*r[gt];it[gt*3]=a[gt*3]*ft,it[gt*3+1]=a[gt*3+1]*ft,it[gt*3+2]=a[gt*3+2]*ft}s.geometry.attributes.position.needsUpdate=!0,s.material.opacity=.98*(1-nt.smoothstep(n,112,150)),s.material.size=.3-k*.17;const tt=o.geometry.attributes.position.array;for(let gt=0;gt<l.length/4;gt++){const ft=l[gt*4+3],It=(.04+Math.pow(B,.5)*31+Mt*5)*ft*ct,N=Math.max(0,It-(1.2+k*5.5)*ft);for(let ot=0;ot<3;ot++){const ht=l[gt*4+ot];tt[gt*6+ot]=ht*N,tt[gt*6+3+ot]=ht*It}}o.geometry.attributes.position.needsUpdate=!0,o.material.opacity=.68*nt.smoothstep(n,1.5,8)*(1-nt.smoothstep(n,48,82));const mt=1-nt.smoothstep(n,7,34),Tt=.7+Math.pow(B,.46)*18;c.material.opacity=mt,c.scale.set(Tt,Tt,1),d.forEach((gt,ft)=>{const It=3+ft*6,N=52+ft*7,ot=nt.clamp((n-It)/N,0,1),ht=.9+Math.pow(ot,.72)*(39+ft*5);gt.scale.set(ht,ht,1),gt.material.opacity=Math.sin(ot*Math.PI)*(.24-ft*.045)})}const pt=new kt(328968),Y=pt.clone();if(n<70){const k=nt.smoothstep(n,0,70);Y.lerpColors(new kt(2756872),pt,k),u.toneMappingExposure=1.15+(1-k)*2.2}else if(H&&G>0){const k={"big-rip":new kt(463652),"big-crunch":new kt(2492422),"vacuum-decay":new kt(1444389)};Y.lerpColors(pt,k[et.type],G*.72),u.toneMappingExposure=et.type==="big-crunch"?1.15+G*1.45:1.15-G*.38}else if(n>950){const k=nt.smoothstep(n,950,1e3);Y.lerpColors(pt,new kt(197898),k*.32),u.toneMappingExposure=1.15}else u.toneMappingExposure=1.15;if(u.setClearColor(Y,1),p.fog.color.copy(Y),!g||!x)return;const Z=ir(h),_t=h_(h),Et=k=>mn(mc(k,h),h),St=Et(845),Ft=Et(930),re=Et(900),I=Et(790),ce=Et(850),Wt=nt.smoothstep(n,Vo,vi),Ct=nt.smoothstep(n,282,vi),wt=1-nt.smoothstep(n,Z-75,Z+10);g.material.opacity=.9,g.material.size=.09,f||m.scale.setScalar(1);const qt=e==="explorer"&&n>=205&&n<348;if(E&&y){E.visible=qt;const k=nt.smoothstep(n,205,228),B=nt.smoothstep(n,265,342);E.material.opacity=k*(1-B)*.2,E.material.size=.19-Wt*.07;const Mt=E.geometry.attributes.position.array;y.gasSourceIndices.forEach((ct,at)=>{const it=ct*3,tt=at*3,mt=nt.smoothstep(n,y.birthAt[ct]-32,Math.min(vi,y.birthAt[ct]+32))*.72;Mt[tt]=nt.lerp(y.formationOrigins[it],x[it],mt),Mt[tt+1]=nt.lerp(y.formationOrigins[it+1],x[it+1],mt),Mt[tt+2]=nt.lerp(y.formationOrigins[it+2],x[it+2],mt)}),E.geometry.attributes.position.needsUpdate=!0}C?.forEach(k=>{const{birthAt:B,maxRadius:Mt,phase:ct,front:at,sourceGlow:it}=k.userData,tt=nt.clamp((n-B)/Math.max(1,vi-B),0,1),mt=1-nt.smoothstep(n,330,348);k.visible=qt&&tt>0;const Tt=.25+Math.pow(tt,.68)*Mt;at.scale.set(Tt,Tt,1),at.material.opacity=Math.sin(Math.min(.995,tt)*Math.PI)*.075*mt,at.material.rotation=ct+tt*.18;const gt=1-nt.smoothstep(tt,.03,.24);it.scale.setScalar(.35+tt*.95),it.material.opacity=gt*.72*mt});const ut=g.geometry.attributes.position.array,yt=g.geometry.attributes.color.array;v&&v_(n,x,ut,v);for(let k=0;k<x.length;k+=3){const B=k/3,Mt=1-nt.smoothstep(n,_[B],_[B]+22);v||(ut[k]=x[k],ut[k+1]=x[k+1],ut[k+2]=x[k+2]);const ct=y?.birthAt[B]??Vo,at=nt.smoothstep(n,ct,ct+5.5),it=1-nt.smoothstep(n,ct+3,ct+18);if(y&&n<vi){const tt=nt.smoothstep(n,ct-7,Math.min(vi,ct+38));ut[k]=nt.lerp(y.formationOrigins[k],ut[k],tt),ut[k+1]=nt.lerp(y.formationOrigins[k+1],ut[k+1],tt),ut[k+2]=nt.lerp(y.formationOrigins[k+2],ut[k+2],tt)}yt[k]=M[k]*Mt*at*(1+it*.28),yt[k+1]=M[k+1]*Mt*at*(1+it*.52),yt[k+2]=M[k+2]*Mt*at*(1+it*.95)}if(L.forEach(k=>{const B=k.sourceIndex*3,Mt={x:ut[B],y:ut[B+1],z:ut[B+2]};k.group.position.set(Mt.x,Mt.y,Mt.z),k.visual==="black-hole-merger"&&S_(n,ut,yt,k,Mt),k.transientGravityField&&w_(n,ut,k,Mt)}),L.forEach(k=>{if(n<k.impactAt)return;const B=nt.smoothstep(n,k.impactAt,k.impactAt+24);if(k.starImpacts.forEach(ot=>{const ht=ot.index*3;ut[ht]+=ot.kick[0]*B,ut[ht+1]+=ot.kick[1]*B,ut[ht+2]+=ot.kick[2]*B,yt[ht]*=ot.dimFactor,yt[ht+1]*=ot.dimFactor,yt[ht+2]*=ot.dimFactor}),!k.waveSamples)return;const Mt=k.duration*(1-k.impactPhase),ct=nt.clamp((n-k.impactAt)/Mt,0,1);if(ct<=0||ct>=1)return;const{waveRadius:at,waveAmplitude:it=1,indices:tt,distances:mt,transverse:Tt,polarities:gt}=k.waveSamples,ft=.18+Math.pow(ct,.72)*at,It=.18+ct*.34,N=.13*it*(1-ct*.58);for(let ot=0;ot<tt.length;ot++){const ht=mt[ot]-ft;if(Math.abs(ht)>It*2.8)continue;const bt=Math.cos(ht/It*Math.PI)*Math.exp(-Math.pow(ht/It,2)*1.7),dt=bt*N*gt[ot],lt=tt[ot]*3,Dt=ot*3;ut[lt]+=Tt[Dt]*dt,ut[lt+1]+=Tt[Dt+1]*dt,ut[lt+2]+=Tt[Dt+2]*dt;const Ht=1+Math.abs(bt)*.18;yt[lt]*=Ht,yt[lt+1]*=Ht,yt[lt+2]*=Ht}}),H&&G>0){const k=j?.position.x||0,B=j?.position.y||0,Mt=j?.position.z||0,ct=.18+Math.pow(G,.58)*36;for(let at=0;at<x.length;at+=3)if(et.type==="big-rip"){const it=Math.hypot(x[at],x[at+1],x[at+2]),tt=1+Math.pow(G,1.7)*(2.8+it*.16);ut[at]*=tt,ut[at+1]*=tt,ut[at+2]*=tt;const mt=Math.pow(1-G,.72);yt[at]*=mt,yt[at+1]*=mt,yt[at+2]*=mt}else if(et.type==="big-crunch"){const it=Math.max(.012,1-Math.pow(G,1.35)*.988);ut[at]*=it,ut[at+1]*=it,ut[at+2]*=it,yt[at]*=1+G*1.4,yt[at+1]*=1-G*.5,yt[at+2]*=1-G*.72}else{const it=Math.hypot(ut[at]-k,ut[at+1]-B,ut[at+2]-Mt),tt=nt.smoothstep(ct-1.2,ct+.4,it);yt[at]*=tt,yt[at+1]*=tt,yt[at+2]*=tt}}L.forEach(k=>{const B=k.sourceIndex*3;k.group.position.set(ut[B],ut[B+1],ut[B+2])}),g.geometry.attributes.position.needsUpdate=!0,g.geometry.attributes.color.needsUpdate=!0;const Jt=m.children.find(k=>k.userData.isCoreGlow);if(Jt){const{scale:k,opacity:B}=Jt.userData.profile;Jt.material.opacity=Ct*wt*B*(1-G),Jt.scale.set(k,k,1)}const ne=m.children.find(k=>k.userData.isAgnGlow),D=m.children.find(k=>k.userData.isAgnJet);if(ne){const k=Math.min(_t-1,mn(4e10,h)),B=Ct*(1-nt.smoothstep(n,k,_t));ne.material.opacity=B*.82,ne.scale.set(.72,.72,1),D.material.opacity=B*.18}const T=1-G,$=T>.001&&n>=A.firstBirthAt&&n<Ft,st=T>.001&&P.some(k=>n>=k.userData.birthAt&&n<=k.userData.evaporationAt+7.5);if(b.visible=($||st)&&e==="explorer",$&&S){const k=St>=999?1:1-nt.smoothstep(n,St,Math.max(St+1,Ft));S.material.opacity=k*.64*(1-G);const B=S.geometry.attributes.position.array,Mt=S.geometry.attributes.color.array,ct=(at,it)=>{const tt=at*3,mt=R[tt],Tt=R[tt+1],gt=R[tt+2],ft=A.axes[tt],It=A.axes[tt+1],N=A.axes[tt+2],ot=Ah(it,A.orbitRates[at]),ht=Math.cos(ot),bt=Math.sin(ot),dt=ft*mt+It*Tt+N*gt;B[tt]=mt*ht+(It*gt-N*Tt)*bt+ft*dt*(1-ht),B[tt+1]=Tt*ht+(N*mt-ft*gt)*bt+It*dt*(1-ht),B[tt+2]=gt*ht+(ft*Tt-It*mt)*bt+N*dt*(1-ht)};for(let at=0;at<R.length/3;at++){const it=at*3,tt=nt.smoothstep(n,A.birthAt[at],A.birthAt[at]+8);Mt[it]=A.baseColors[it]*tt,Mt[it+1]=A.baseColors[it+1]*tt,Mt[it+2]=A.baseColors[it+2]*tt;const mt=A.fates[at],Tt=A.escapeAt[at];if(n<Tt||mt===1){ct(at,n);continue}if(mt===2){const Ts=nt.smoothstep(n,Tt,Math.max(Tt+1,Math.min(re,Tt+42)));ct(at,n+Ts*150);const Hi=1-Ts*.985;B[it]*=Hi,B[it+1]*=Hi,B[it+2]*=Hi;continue}ct(at,Tt);const gt=B[it],ft=B[it+1],It=B[it+2],N=Math.max(.001,Math.hypot(gt,ft,It)),ot=A.axes[it],ht=A.axes[it+1],bt=A.axes[it+2],dt=Math.sign(A.orbitRates[at])||1;let lt=(ht*It-bt*ft)*dt,Dt=(bt*gt-ot*It)*dt,Ht=(ot*ft-ht*gt)*dt;const ue=Math.max(.001,Math.hypot(lt,Dt,Ht));lt/=ue,Dt/=ue,Ht/=ue;let ie=lt*.9+gt/N*.34,Qe=Dt*.9+ft/N*.34+ht*Math.sin(at*12.9898)*.08,$e=Ht*.9+It/N*.34;const ki=Math.max(.001,Math.hypot(ie,Qe,$e));ie/=ki,Qe/=ki,$e/=ki;const Rn=nt.clamp((n-Tt)/Math.max(1,re-Tt),0,1),di=mt===3?Math.pow(Rn,.72)*(18+A.speeds[at]*7):Math.pow(Rn,1.35)*(6+A.speeds[at]*11);B[it]=gt+ie*di,B[it+1]=ft+Qe*di,B[it+2]=It+$e*di}S.geometry.attributes.position.needsUpdate=!0,S.geometry.attributes.color.needsUpdate=!0}if(P.forEach(k=>{const B=k.userData;if(!B.isCentral&&Number.isInteger(B.sourceIndex)){const bt=B.sourceIndex*3;k.position.set(ut[bt],ut[bt+1],ut[bt+2])}const Mt=nt.smoothstep(n,B.birthAt,B.birthAt+7),ct=1-nt.smoothstep(n,B.evaporationAt-24,B.evaporationAt),at=nt.smoothstep(n,B.evaporationAt-15,B.evaporationAt),it=Math.max(B.birthAt+12,Z-50),tt=nt.smoothstep(n,it,Math.max(it+1,Et(825))),mt=nt.smoothstep(n,I,Math.max(I+1,ce)),Tt=7.5,gt=Math.abs(n-B.evaporationAt),ft=gt<Tt?Math.sin((1-gt/Tt)*Math.PI/2):0;k.visible=T>.001&&e==="explorer"&&n>=B.birthAt&&n<=B.evaporationAt+Tt;const It=B.isCentral?nt.smoothstep(n,B.birthAt,vi+18):1,N=B.baseScale*nt.lerp(.28,1,It)*(.18+.82*Math.cbrt(Math.max(0,ct)));k.scale.setScalar(Math.max(.035,N));const ot=Mt*It*nt.lerp(B.accretionStrength,.24,tt)*Math.sqrt(Math.max(0,ct));ei(k,ot,T),B.hawkingGlow.material.opacity=Mt*mt*(.06+at*.62)*Math.sqrt(Math.max(0,ct))*T,B.finalPulse.material.opacity=ft*.84*T;const ht=(.22+ft*2.1)/Math.max(.035,N);B.finalPulse.scale.set(ht,ht,1)}),F.visible=!H&&n>910&&e==="explorer",U&&O&&W){const k=nt.smoothstep(n,910,940),B=nt.smoothstep(n,938,1e3);U.material.opacity=k*Math.pow(1-B,1.7)*.34;const Mt=U.geometry.attributes.position.array,ct=U.geometry.attributes.color.array,at=1+B*1.8;for(let it=0;it<O.length;it+=3)Mt[it]=O[it]*at,Mt[it+1]=O[it+1]*at,Mt[it+2]=O[it+2]*at,ct[it]=W[it]*(1-B*.55)+B*.06,ct[it+1]=W[it+1]*(1-B*.88),ct[it+2]=W[it+2]*(1-B*.96);U.geometry.attributes.position.needsUpdate=!0,U.geometry.attributes.color.needsUpdate=!0}if(V.visible=H&&G>0&&e==="explorer",V.visible&&j&&K)if(et.type==="vacuum-decay"){const k=.18+Math.pow(G,.58)*36;j.visible=!0,j.scale.setScalar(k),j.material.opacity=Math.sin(Math.min(.98,G)*Math.PI)*.18+.035,K.position.copy(j.position),K.material.opacity=(1-G)*.42,K.scale.setScalar(1.2+G*5.5)}else{j.visible=!1,K.position.set(0,0,0),K.material.opacity=et.type==="big-crunch"?Math.pow(G,2.4)*.92:Math.sin(G*Math.PI)*.28;const k=et.type==="big-crunch"?.4+(1-G)*8:3+G*28;K.scale.setScalar(k)}}function C_(n,t){const{mode:e,cosmicEvents:i,cosmicEventGroup:s,universe:r}=t,a=r.cosmicFate.type!=="heat-death"&&n>=r.cosmicFate.onsetAt;let o=null,l=!1;return i.forEach(c=>{const d=(n-c.start)/c.duration,u=d>=0&&d<=1,p=c.visual==="black-hole-merger"?Rh(n,c):0,g=Ph(n,c),x=Math.max(p,g),v=n>=c.impactAt&&x>0,h=!a&&(u||v)&&e==="explorer";if(c.group.visible=h,!h)return;l=!0,u&&(o=c);const f=Math.min(1,d);c.group.userData.phase=f;const m=c.group.userData.effect;if(!u&&g>0){c.visual==="kilonova"?(m.innerFlash.material.opacity=0,m.photosphere.material.opacity=0,m.ejecta.material.opacity=0,m.shell.material.opacity=0,m.polarJets&&(m.polarJets.material.opacity=0),m.gravityWave&&(m.gravityWave.material.opacity=0),m.remnant.material.opacity=g*.72):c.visual==="stellar-collapse"?(m.starCore.material.opacity=0,m.shroud.material.opacity=0,m.dust.material.opacity=0,m.remnantHole.visible=!0,ei(m.remnantHole,.8,g)):c.visual==="supernova"?(m.innerFlash.material.opacity=0,m.photosphere.material.opacity=0,m.ejecta.material.opacity=0,m.shell.material.opacity=0,m.remnant.material.opacity=g*.68):c.visual==="pulsar"&&(m.core.material.opacity=g*.76,m.halo.material.opacity=g*.1,m.nebula.material.opacity=g*.055,m.jets.material.opacity=g*.12,m.sweepGlow.material.opacity=0,m.fieldLines.forEach((_,M)=>{_.material.opacity=g*(.038-M*.005)}),c.group.userData.intensity=g*.56);return}if(c.visual==="supernova"||c.visual==="nova"||c.visual==="kilonova"){const _=f,M=c.visual==="nova",y=c.visual==="kilonova",E=M?.48:y?1.18:1,C=nt.smoothstep(_,0,.028),L=c.simulation?.pulsePhases?.reduce((j,K,et)=>{const H=c.simulation.pulseWeights?.[et]??1,G=Math.abs(_-K);return Math.max(j,Math.exp(-G*G*1500)*H)},0)||0,b=nt.clamp((c.simulation?.nickelMass||.6)/.6,.58,2.2),S=Math.min(1,Math.max(C*(1-nt.smoothstep(_,.045,.19)),L)*(M||y?1:b)),R=(1-nt.smoothstep(_,.12,1))*C;m.innerFlash.material.opacity=S*(M?.72:.98);const A=(.08+Math.pow(Math.min(1,_/.16),.28)*.72)*E;m.innerFlash.scale.set(A,A,1),m.photosphere.material.opacity=S*.58+R*.2;const P=(.16+Math.pow(_,.56)*1.15)*E;m.photosphere.scale.set(P,P*.9,1);const F=M||c.simulation?.persistentRemnant?1:1-nt.smoothstep(_,.82,1);m.remnant.material.opacity=nt.smoothstep(_,.2,.52)*F*.72;const U=m.ejecta.geometry.attributes.position.array;for(let j=0;j<m.ejectaVelocity.length;j++){const K=nt.clamp((_-m.ejectaDelay[j])/(1-m.ejectaDelay[j]),0,1),et=.05+Math.pow(K,.58)*m.ejectaVelocity[j],H=Math.sin(K*10+j*1.73)*K*.045,G=j*3;U[G]=m.ejectaDirections[G]*et+H*m.ejectaDirections[G+1],U[G+1]=m.ejectaDirections[G+1]*et+H*m.ejectaDirections[G+2],U[G+2]=m.ejectaDirections[G+2]*et+H*m.ejectaDirections[G]}m.ejecta.geometry.attributes.position.needsUpdate=!0,m.ejecta.material.opacity=C*(1-nt.smoothstep(_,.58,1))*.86;const O=m.shell.geometry.attributes.position.array,W=M?.72+(c.simulation?.ejectaVelocityKms||1800)/1e4:y?2.15+(c.simulation?.ejectaVelocityC||.2)*3.1:nt.clamp(1.25+(c.simulation?.ejectaVelocityKms||9e3)/7200,1.8,3.9),V=.12+(1-Math.pow(1-_,2.4))*W;for(let j=0;j<m.shellNoise.length;j++){const K=j*3,et=1+Math.sin(m.shellNoise[j]+_*4.5)*.055+Math.sin(j*2.1)*.025;O[K]=m.shellDirections[K]*V*et,O[K+1]=m.shellDirections[K+1]*V*et,O[K+2]=m.shellDirections[K+2]*V*et}if(m.shell.geometry.attributes.position.needsUpdate=!0,m.shell.material.opacity=nt.smoothstep(_,.04,.14)*(1-nt.smoothstep(_,.5,1))*.34,m.polarJets&&(m.polarJets.material.opacity=nt.smoothstep(_,.015,.08)*(1-nt.smoothstep(_,.18,.5))*.72),m.gravityWave){const j=nt.clamp((_-c.impactPhase)/Math.max(.001,1-c.impactPhase),0,1),K=.25+Math.pow(j,.72)*7.2;m.gravityWave.scale.set(K,K,1),m.gravityWave.material.opacity=Math.pow(Math.sin(j*Math.PI),.72)*.28*(c.waveSamples?.waveAmplitude||1)}}else if(c.visual==="tidal-disruption"){const _=f,M=nt.smoothstep(_,0,.42),y=nt.smoothstep(_,.3,.62),E=nt.smoothstep(_,.4,.72),C=c.simulation?.pulsePhases?.[0]||.58,L=Math.max(0,(_-C)/Math.max(.001,1-C)),b=nt.smoothstep(_,.4,C)*Math.pow(1+L*6,c.simulation?.fallbackExponent||-5/3);m.starCore.position.set(nt.lerp(2.5,.48,M),Math.sin(M*Math.PI)*.34,nt.lerp(.34,0,M)),m.starCore.material.opacity=(1-y)*.96,m.starCore.scale.set(.28+y*.68,Math.max(.035,.28*(1-y*.88)),1),m.disk.material.opacity=b*.5,m.flare.material.opacity=b*.62;const S=.24+Math.sqrt(b)*2.5;m.flare.scale.set(S,S,1),ei(m.hole,.62+E*.38);const R=m.debris.geometry.attributes.position.array;for(let A=0;A<m.debrisOffsets.length;A++){const P=A*3,F=m.debrisOffsets[A],U=F<0,O=U?.34+Math.abs(F)*(1.15-E*.72):.42+F*(.65+E*3.4),W=F*1.8+E*(U?6.4:1.25),V=Math.sin(m.debrisNoise[A]+E*5)*.045*(1-E*.45);R[P]=Math.cos(W)*O,R[P+1]=Math.sin(W)*O*.38+V,R[P+2]=Math.sin(W*.5+m.debrisNoise[A])*.075}m.debris.geometry.attributes.position.needsUpdate=!0,m.debris.material.opacity=y*(1-nt.smoothstep(_,.9,1))*.82}else if(c.visual==="stellar-flare"){const _=f,M=c.simulation?.pulsePhases?.reduce((R,A,P)=>{const F=c.simulation.pulseWeights?.[P]??1,U=Math.abs(_-A);return Math.max(R,Math.exp(-U*U*900)*F)},0)||0,y=Math.max(Math.pow(Math.sin(_*Math.PI),.5)*.22,M),E=.72+M*.28;m.starCore.material.opacity=.48+y*.5,m.halo.material.opacity=y*E*.32;const C=.45+y*1.25;m.halo.scale.set(C,C,1),m.shock.material.opacity=y*(1-_)*.46;const L=.25+Math.pow(_,.62)*3.4;m.shock.scale.set(L,L,1),m.loops.forEach((R,A)=>{R.material.opacity=y*(.32-A*.065)});const b=m.particles.geometry.attributes.position.array,S=nt.clamp((c.simulation?.cmeVelocityKms||2200)/2200,.55,2.2);for(let R=0;R<m.particleDirections.length/3;R++){const A=R*3,P=.18+Math.pow(_,.58)*(1.25+R%17*.045)*S;b[A]=m.particleDirections[A]*P,b[A+1]=m.particleDirections[A+1]*P,b[A+2]=m.particleDirections[A+2]*P}m.particles.geometry.attributes.position.needsUpdate=!0,m.particles.material.opacity=y*.64}else if(c.visual==="stellar-collapse"){const _=f,M=nt.smoothstep(_,.32,.68),y=nt.smoothstep(_,.04,.2)*(1-nt.smoothstep(_,.3,.52));m.starCore.material.opacity=(1-M)*(.58+y*.42);const E=Math.max(.025,.34*(1-M*.94)+y*.24);m.starCore.scale.set(E,E,1);const C=nt.clamp((c.simulation?.dustOpticalDepth||2)/8,.16,.68);m.shroud.material.opacity=nt.smoothstep(_,.18,.46)*(1-nt.smoothstep(_,.74,1))*C;const L=.32+_*1.45;m.shroud.scale.set(L,L,1);const b=m.dust.geometry.attributes.position.array,S=nt.clamp((c.simulation?.ejectedEnvelopeFraction||.08)/.08,.45,1.8);for(let R=0;R<m.dustDirections.length/3;R++){const A=R*3,P=.1+nt.smoothstep(_,.16,.82)*(.32+R%19*.018)*S;b[A]=m.dustDirections[A]*P,b[A+1]=m.dustDirections[A+1]*P,b[A+2]=m.dustDirections[A+2]*P}m.dust.geometry.attributes.position.needsUpdate=!0,m.dust.material.opacity=nt.smoothstep(_,.22,.48)*(1-nt.smoothstep(_,.82,1))*.46,m.remnantHole.visible=M>.72,m.remnantHole.visible&&ei(m.remnantHole,.58+M*.34)}else if(c.visual==="pulsar"){const _=f,M=c.simulation?.pulsePhases?.reduce((b,S,R)=>{const A=c.simulation.pulseWeights?.[R]??1,P=Math.abs(_-S);return Math.max(b,Math.exp(-P*P*1200)*A)},0)||0,y=Math.max(Math.pow(Math.sin(_*Math.PI),.45),M),E=c.type==="pulsar-glitch"?.22:1,C=m.jetPowerScale||1;m.core.material.opacity=Math.min(1,y*(.82+M*.18)),m.halo.material.opacity=Math.min(.58,y*.16*E*Math.sqrt(C)),m.nebula.material.opacity=Math.min(.34,y*.095*E*Math.sqrt(C));const L=1.05+M*.52+(C-1)*.18;m.halo.scale.set(L,L,1),m.jets.material.opacity=y*.18*E,m.fieldLines.forEach((b,S)=>{b.material.opacity=y*(.055-S*.007)*E}),c.group.userData.intensity=y}else if(c.visual==="black-hole-merger"){const _=f,M=.68,y=_>=M;m.holeA.visible=!y,m.holeB.visible=!y,m.remnantHole.visible=y&&x>0;const E=Math.min(1,_/M),C=H=>Math.PI*2*(1.15*H+4.1*Math.pow(H,3)),L=H=>.12+2.45*Math.pow(1-H,.72),b=C(E),S=L(E);m.holeA.position.set(Math.cos(b)*S,Math.sin(b)*S,Math.sin(b*.5)*.09),m.holeB.position.set(-Math.cos(b)*S,-Math.sin(b)*S,-Math.sin(b*.5)*.09);const R=(H,G)=>{const xt=H.geometry.attributes.position.array;for(let pt=0;pt<84;pt++){const Y=Math.max(0,E-(83-pt)*(.0028+E*9e-4)),Z=C(Y),_t=L(Y);xt[pt*3]=G*Math.cos(Z)*_t,xt[pt*3+1]=G*Math.sin(Z)*_t,xt[pt*3+2]=G*Math.sin(Z*.5)*.09}H.geometry.attributes.position.needsUpdate=!0,H.material.opacity=y?0:nt.smoothstep(_,.02,.22)*.34};R(m.trailA,1),R(m.trailB,-1);const A=nt.clamp((_-M)/(1-M),0,1),P=Math.exp(-A*7)*Math.sin(A*38);m.remnantHole.scale.set(1.24+P*.07,1.24-P*.045,1.24),ei(m.holeA,.62+E*.38),ei(m.holeB,.62+E*.38),ei(m.remnantHole,.74+Math.exp(-A*4)*.34,x);const F=y?Math.exp(-A*18):0;m.mergerGlow.material.opacity=F*(m.gasRich?.48:.13);const U=.3+A*(m.gasRich?3.6:2.4);m.mergerGlow.scale.set(U,U,1),m.gasEcho.material.opacity=m.gasRich?nt.smoothstep(A,.02,.12)*(1-nt.smoothstep(A,.3,.92))*.34:0;const O=.35+Math.pow(A,.62)*4.2;m.gasEcho.scale.set(O,O,1),m.waveHalos.forEach((H,G)=>{const xt=G*.12,pt=nt.clamp((A-xt)/(1-xt),0,1);H.visible=y&&pt>0;const Y=.38+Math.pow(pt,.7)*(8.8+G*.6);H.scale.set(Y,Y,1),H.material.opacity=Math.pow(Math.sin(pt*Math.PI),.78)*(.29-G*.045)}),m.wavefronts.forEach((H,G)=>{const xt=G*.075,pt=nt.clamp((A-xt)/(1-xt),0,1);H.visible=y&&pt>0,H.scale.setScalar(.28+Math.pow(pt,.72)*(7.4+G*.34)),H.material.opacity=Math.pow(Math.sin(pt*Math.PI),.72)*.19*(1-G*.08)});const W=m.waveDust.geometry.attributes.position.array,V=.22+Math.pow(A,.72)*8.6;for(let H=0;H<m.waveDirections.length/3;H++){const G=H*3,xt=m.waveDirections[G],pt=m.waveDirections[G+1],Y=m.waveDirections[G+2],Z=1+(xt*xt-Y*Y)*.085*Math.sin(A*Math.PI*5);W[G]=xt*V*Z,W[G+1]=pt*V*Z,W[G+2]=Y*V*Z}m.waveDust.geometry.attributes.position.needsUpdate=!0,m.waveDust.material.opacity=y?Math.pow(Math.sin(A*Math.PI),.62)*.5:0;const K=nt.smoothstep(A,.08,1)*nt.clamp((c.simulation?.recoilKms||c.recoilKms||500)/720,.22,2.2);m.remnantHole.position.copy(m.recoilVector).multiplyScalar(K);const et=m.recoilTrail.geometry.attributes.position.array;et[0]=0,et[1]=0,et[2]=0,et[3]=m.remnantHole.position.x,et[4]=m.remnantHole.position.y,et[5]=m.remnantHole.position.z,m.recoilTrail.geometry.attributes.position.needsUpdate=!0,m.recoilTrail.material.opacity=y?(1-A*.72)*.28*x:0}}),s.visible=l,o}function P_(n,t){const{cosmicEventGroup:e,prefersReducedMotion:i,cosmicEvents:s,camera:r}=t;!e.visible||i||s.forEach(a=>{if(!a.group.visible)return;const o=a.group.userData.phase,l=a.group.userData.effect;if(a.visual==="supernova"||a.visual==="nova"||a.visual==="kilonova")l.innerFlash.material.rotation=n*7e-5,l.photosphere.material.rotation=-n*35e-6,l.ejecta.rotation.y=Math.sin(n*21e-5)*.035;else if(a.visual==="tidal-disruption")l.disk.material.rotation=n*.0014,l.debris.rotation.y=Math.sin(n*17e-5)*.08,os(l.hole,n,l.hole.userData.spinDirection);else if(a.visual==="stellar-flare")l.loops.forEach((c,d)=>{c.rotation.z=Math.sin(n*9e-4+d)*.16}),l.particles.rotation.y=n*22e-5;else if(a.visual==="stellar-collapse")l.remnantHole.visible&&os(l.remnantHole,n,l.remnantHole.userData.spinDirection);else if(a.visual==="pulsar"){const c=a.simulation?.spinPeriodMs,d=c?nt.clamp(80/c,.45,4.8):a.simulation?.model==="magnetar-giant-flare"?.72:1,u=a.simulation?.model==="pulsar-glitch"&&o>=.46?1+Math.min(.12,a.simulation.fractionalFrequencyJump*15e3):1;l.rotor.rotation.y=n*.0024*d*u;const p=new hi,g=new z,x=new z(0,1,0);l.rotor.getWorldQuaternion(p),a.group.getWorldPosition(g),x.applyQuaternion(p).normalize();const v=r.position.clone().sub(g).normalize(),h=Math.pow(Math.abs(x.dot(v)),14),f=nt.clamp(d,.55,3.2),m=.52+Math.pow(Math.max(0,Math.sin(n*.012*f)),10)*.48,_=a.type==="pulsar-glitch"?.16:1;l.jets.material.opacity=a.group.userData.intensity*(.34+h*.58)*m*_,l.sweepGlow.material.opacity=a.group.userData.intensity*h*m*.78*_;const M=.5+h*1.8;l.sweepGlow.scale.set(M,M,1),l.knots.forEach(y=>{const E=(n*55e-5+y.userData.offset)%1;y.position.set(0,y.userData.side*(.18+E*2.45),0),y.material.opacity=a.group.userData.intensity*Math.sin(E*Math.PI)*(.12+h*.55)*_}),l.fieldLines.forEach((y,E)=>{y.rotation.y+=.006+E*.001})}else a.visual==="black-hole-merger"&&(os(l.holeA,n,l.holeA.userData.spinDirection),os(l.holeB,n,l.holeB.userData.spinDirection),os(l.remnantHole,n,l.remnantHole.userData.spinDirection))})}const D_=(n,t,e)=>Math.min(e,Math.max(t,n));function L_(n,t,e){if(!n?.length||t<=0)return[];const i=Array.from(n,(o,l)=>l).sort((o,l)=>n[o]-n[l]),s=Math.max(t,Math.floor(i.length*.42)),r=i.slice(0,s),a=[];for(let o=0;o<Math.min(t,r.length);o++){const l=Math.floor(o/t*r.length),c=Math.max(l+1,Math.floor((o+1)/t*r.length)),d=Math.min(c-l-1,Math.floor(e()*(c-l)));a.push(r[l+d])}return a}function I_(n){return!n||!(n.remnantType==="black-hole"||n.model==="black-hole-binary"||n.model==="collapsar-jet"||n.model==="failed-collapse")||!Number.isFinite(n.remnantMass)?null:Math.max(2.5,n.remnantMass)}function U_(n,t=100){const e=Math.max(2.5,Number(n)||2.5);return D_(67+3*Math.log10(e/10),64,t)}function F_(n){const t=ir(n),e=n.cosmicFate?.type!=="heat-death",i=!e||n.cosmicFate.outcomeExponent>n.lastStarDeathExponent,s=i?Math.max(470,t-22):1/0,r=i?Math.min(1e3,t+55):1/0;return{energyStart:s,energyEnd:r,fateStart:e?n.cosmicFate.onsetAt:1/0,fateEnd:e?1e3:1/0}}function N_({universe:n,civilizationData:t,civilizationSimulation:e,cosmicEvents:i}){if(!e||t.length===0)return;const s=e,r=rn(n.seed,9241),a=s.habitatRemnantIndices.length,o=t.length,l=6;for(let A=0;A<a;A++){const P=[],F=A*3;for(let U=0;U<a;U++){if(U===A)continue;const O=U*3,W=Math.hypot(s.habitatPositions[F]-s.habitatPositions[O],s.habitatPositions[F+1]-s.habitatPositions[O+1],s.habitatPositions[F+2]-s.habitatPositions[O+2]);(P.length<l||W<P[P.length-1].distance)&&(P.push({node:U,distance:W}),P.sort((V,j)=>V.distance-j.distance),P.length>l&&P.pop())}s.adjacency[A]=Uint16Array.from(P.map(U=>U.node))}const c=new Int16Array(a);c.fill(-1);const d=new Float32Array(a),u=new Uint8Array(o),p=new Float32Array(o*o),g=new Int8Array(o*o),x=new Int16Array(a);x.fill(-1),t.forEach((A,P)=>{x[A.homeNodeIndex]=P});const v=new Uint16Array(o),h=Array(o).fill("自主扩张"),f=new Uint8Array(a),m=F_(n),_=Math.min(m.energyStart,m.fateStart);s.end=1e3;const M=i.slice().sort((A,P)=>A.impactAt-P.impactAt),y=new Map(M.map(A=>[A,new Map])),E=M.flatMap(A=>(A.civilizationImpacts=[],(A.civilizationNodeImpacts||[]).map(P=>({event:A,impact:P})))).sort((A,P)=>A.impact.at-P.impact.at||A.impact.nodeIndex-P.impact.nodeIndex),C=(A,P)=>A*o+P;for(let A=0;A<o;A++)for(let P=A+1;P<o;P++){const F=t[A],U=t[P],O=(F.cooperation+U.cooperation)*.28-(F.aggression+U.aggression)*.24+rt(r,-.16,.16);p[C(A,P)]=O,p[C(P,A)]=O}const L=(A,P,F,U)=>{p[C(A,P)]=F,p[C(P,A)]=F,g[C(A,P)]=U,g[C(P,A)]=U},b=A=>{let P=0;for(let F=0;F<a;F++)c[F]===A&&P++;return P},S=(A,P,F)=>{const{nodeIndex:U,severity:O,permanent:W,destructionRoll:V,kind:j="damage"}=P;W&&(f[U]=1);const K=c[U];if(K<0)return;const et=t[K];if(et.highDimensional&&F>=et.ascensionAt)return;if(j==="recovery"){f[U]||(d[U]=Math.min(1.35,d[U]+O),h[K]=`${A.label} 后恢复`);return}const H=y.get(A);let G=H.get(K);G||(G={initialCount:b(K),affectedNodes:new Set,lostNodes:new Set,weakenedNodes:new Set,effectiveLoss:0,collapse:!1},H.set(K,G)),G.affectedNodes.add(U);const xt=nt.clamp(O*.62/Math.max(.65,et.resilience),0,.9);if(W||V<xt)c[U]=-1,d[U]=0,G.lostNodes.add(U),G.weakenedNodes.delete(U),G.effectiveLoss+=1;else{const Y=O*.46;d[U]*=Math.max(.18,1-Y),G.lostNodes.has(U)||G.weakenedNodes.add(U),G.effectiveLoss+=Y}G.collapse||=b(K)===0,h[K]=A.label};let R=0;for(;R<E.length&&E[R].impact.at<s.start;){const{impact:A}=E[R];A.kind!=="recovery"&&A.permanent&&(f[A.nodeIndex]=1),R++}for(let A=s.start;A<=s.end;A+=s.step){for(t.forEach((H,G)=>{if(!(u[G]||A<H.birth)){if(u[G]=1,f[H.homeNodeIndex]){h[G]="母星在文明诞生前失去宜居条件";return}c[H.homeNodeIndex]=G,d[H.homeNodeIndex]=.34,h[G]="母星文明进入星际阶段"}});R<E.length&&E[R].impact.at<=A;){const{event:H,impact:G}=E[R];S(H,G,A),R++}const P=new Uint8Array(o),F=new Uint8Array(o);for(let H=0;H<o;H++)for(let G=H+1;G<o;G++){const xt=g[C(H,G)];xt>0&&(P[H]++,P[G]++),xt<0&&(F[H]++,F[G]++)}for(let H=0;H<a;H++){const G=c[H];if(G<0)continue;const xt=t[G],pt=1+P[G]*.045-F[G]*.028;d[H]+=(.032+xt.resilience*.018)*pt*(1-d[H]),d[H]=nt.clamp(d[H],0,1.35)}const U=new Uint8Array(o*o);for(let H=0;H<a;H++){const G=c[H];G<0||s.adjacency[H].forEach(xt=>{const pt=c[xt];pt<0||pt===G||(U[C(G,pt)]=1,U[C(pt,G)]=1)})}for(let H=0;H<o;H++)for(let G=H+1;G<o;G++){let xt=p[C(H,G)],pt=g[C(H,G)];if(U[C(H,G)]){const Y=t[H],Z=t[G];xt+=(Y.cooperation+Z.cooperation-1)*.026,xt-=(Y.aggression+Z.aggression-.82)*.023,xt+=rt(r,-.012,.012),pt===0&&xt>.3&&(pt=1),pt===0&&xt<-.26&&(pt=-1),pt===1&&xt<.08&&(pt=0),pt===-1&&xt>-.04&&(pt=0)}else xt*=.992,pt===1&&xt<.1&&(pt=0),pt===-1&&xt>-.08&&(pt=0);L(H,G,nt.clamp(xt,-.95,.95),pt)}const O=Array.from({length:o},()=>[]);for(let H=0;H<a;H++)c[H]>=0&&O[c[H]].push(H);if(t.forEach((H,G)=>{const xt=O[G];if(!u[G]||xt.length===0||A>=_)return;const pt=1+Math.floor(H.expansionRate+P[G]*.34);for(let Y=0;Y<pt;Y++){const Z=[];if(xt.forEach(re=>{s.adjacency[re].forEach(I=>{!f[I]&&c[I]!==G&&Z.push([re,I])})}),Z.length===0)break;const[_t,Et]=Z[Math.floor(r()*Z.length)],St=c[Et];if(St<0){if(x[Et]>=0&&x[Et]!==G&&!u[x[Et]])continue;r()<.18+H.expansionRate*.19+P[G]*.025&&(c[Et]=G,d[Et]=Math.max(.14,d[_t]*.34),xt.push(Et),h[G]=P[G]>0?"协作网络推动殖民":"殖民前沿扩张");continue}const Ft=g[C(G,St)];if(Ft>0){d[_t]=Math.min(1.35,d[_t]+.018),d[Et]=Math.min(1.35,d[Et]+.012),h[G]=`与${t[St].name}交流`,h[St]=`与${H.name}交流`;continue}if(Ft<0){const re=d[_t]*(.72+H.aggression*.76+r()*.35),I=d[Et]*(.84+t[St].resilience*.52+r()*.28);re>I?(c[Et]=G,d[Et]=Math.max(.08,Math.min(.48,(re-I)*.5)),h[G]=`与${t[St].name}争夺边界`,h[St]=`边界被${H.name}突破`):(d[_t]*=.84,d[Et]*=.92,h[G]=`对${t[St].name}的进攻受挫`)}else if(r()<H.aggression*.035){const re=p[C(G,St)]-.055;L(G,St,re,re<-.26?-1:0)}}}),A>=Math.min(m.energyStart,m.fateStart)){const H=nt.smoothstep(A,m.energyStart,m.energyEnd),G=Number.isFinite(m.fateStart)?nt.smoothstep(A,m.fateStart,m.fateEnd):0,xt=Math.max(H,G),pt=A>=m.energyEnd||A>=m.fateEnd,Y=G>H?n.cosmicFate.label:"恒星能源枯竭";for(let Z=0;Z<a;Z++){const _t=c[Z];_t<0||t[_t].highDimensional&&A>=t[_t].ascensionAt||(d[Z]-=.004+xt*.052,(d[Z]<=.035||pt)&&(c[Z]=-1,d[Z]=0,h[_t]=Y))}}const W=new Uint16Array(o),V=new Float32Array(o);for(let H=0;H<a;H++){const G=c[H];G<0||(W[G]++,V[G]+=d[H])}const j=new Int8Array(o),K=new Uint8Array(o),et=new Uint8Array(o);for(let H=0;H<o;H++)j[H]=Math.sign(W[H]-v[H]),K[H]=u[H]&&W[H]>0?1:0,et[H]=t[H].highDimensional&&A>=t[H].ascensionAt?1:0,v[H]=W[H];s.snapshots.push({time:A,owners:c.slice(),counts:W,populations:V,trends:j,active:K,ascended:et,relations:g.slice(),relationScores:p.slice(),causes:h.slice()})}M.forEach(A=>{const P=Array.from(y.get(A).entries()).map(([U,O])=>({speciesIndex:U,lossFraction:nt.clamp(O.effectiveLoss/Math.max(1,O.initialCount),0,1),collapse:O.collapse,affectedDomains:O.affectedNodes.size,lostDomains:O.lostNodes.size,weakenedDomains:O.weakenedNodes.size}));A.civilizationImpacts=P;const F=P.length?P.map(U=>{const O=t[U.speciesIndex].name;return U.collapse?`${O} 灭绝`:U.lostDomains>0?U.weakenedDomains>0?`${O} 损失 ${U.lostDomains} 个疆域，另有 ${U.weakenedDomains} 个受损`:`${O} 损失 ${U.lostDomains} 个疆域`:`${O} 的 ${U.weakenedDomains} 个疆域受损`}).join("，"):"未波及当时存在的文明疆域";A.outcome=`${A.systemOutcome}；${F}`})}function O_(n,t){if(!n?.snapshots.length)return null;const e=n,i=nt.clamp(Math.floor((t-e.start)/e.step),0,e.snapshots.length-1);return e.snapshots[i]}function B_(n,t,e,i){let s=1,r=1/0;const a=[],o=e[t];return i.forEach(l=>{if(n<l.impactAt||o?.highDimensional&&l.impactAt>=o.ascensionAt)return;const c=l.civilizationImpacts.find(d=>d.speciesIndex===t);c&&(s*=1-c.lossFraction,c.collapse&&(r=Math.min(r,l.impactAt)),a.push(l.label))}),{capacityFactor:s,collapsedAt:r,lossFraction:1-s,causes:a}}function z_(n,t,e,i){return e.map((s,r)=>{const a=B_(n,r,e,i),o=!!t?.active[r],l=!!t?.ascended[r]&&o,c=[],d=[];return e.forEach((u,p)=>{if(p===r||!t?.active[p])return;const g=t.relations[r*e.length+p];g>0&&c.push(u.name),g<0&&d.push(u.name)}),{alive:o,ascended:l,count:t?.counts[r]||0,trend:t?.trends[r]||0,eventState:a,friendlyNames:c,conflictNames:d}})}function k_(n,t,e){if(!n)return null;let i=null,s=-1;for(let r=0;r<e;r++)for(let a=r+1;a<e;a++){const o=t[r],l=t[a];if(!o?.alive||!l?.alive||o.ascended||l.ascended)continue;const c=n.relations[r*e+a];if(c===0)continue;const u=Math.abs(n.relationScores[r*e+a])+(c<0?2:0);u<=s||(s=u,i={speciesA:r,speciesB:a,relationship:c<0?"conflict":"coexistence"})}return i}function H_(n,t,e){return Math.min(e,Math.max(t,n))}function G_(n,t,e){if(t<=0||e<=0)return 0;const i=Math.exp(-t);let s=1,r=0;for(;s>i&&r<=e;)s*=Math.max(1e-12,n()),r++;return Math.min(e,Math.max(0,r-1))}function V_(n,t,e){const i=H_(.38+t.stars*.16+t.structureEfficiency*.18,.55,2.35);return n.flatMap(s=>{const r=s.maximumOccurrences||1,o=1+G_(e,(s.repeatRate||0)*i,r-1),l=s.repeatSpacing||Math.max(12,s.duration*.72),{repeatRate:c,repeatSpacing:d,maximumOccurrences:u,...p}=s,g=Math.min(998-p.duration,p.latestStart??1/0);if(p.start>g)return[];const x=Array.from({length:o},(v,h)=>{if(h===0)return{...p,occurrenceIndex:h,occurrenceCount:o};const f=l*h*(.82+e()*.36),m=p.start+f;return m>g?null:{...p,start:m,label:`${p.label}（第 ${h+1} 次）`,occurrenceIndex:h,occurrenceCount:o}}).filter(Boolean);return x.map(v=>({...v,occurrenceCount:x.length}))}).sort((s,r)=>s.start-r.start||s.occurrenceIndex-r.occurrenceIndex)}const ae=n=>document.querySelector(n);function Dh(n){const t=n.cosmicFate;ae("#universe-id").textContent=`#${n.seed}`,ae("#explore-id").textContent=`#${n.seed}`,ae("#speed-value").textContent=`${n.speed.toFixed(2)} × 现实宇宙`,ae("#gravity-value").textContent=`${n.gravity.toFixed(2)} × 现实宇宙`,ae("#fine-structure-value").textContent=`${n.fineStructure.toFixed(3)} × 现实宇宙`,ae("#mass-ratio-value").textContent=`${n.massRatio.toFixed(3)} × 现实宇宙`,ae("#expansion-value").textContent=`${n.expansionRate.toFixed(2)} × 现实宇宙`,ae("#dark-energy-value").textContent=`${(n.darkEnergyDensity*100).toFixed(1)}%`,ae("#fluctuation-value").textContent=`${n.primordialFluctuation.toFixed(2)} × 现实宇宙`,ae("#cmb-value").textContent=`${n.cmbTemperature.toFixed(2)} K`,ae("#elements-value").textContent=`${n.elements} 种`,ae("#stars-value").textContent=u_(n.stars),ae("#life-probability-value").textContent=c_(n.lifeProbability),ae("#civilizations-value").textContent=l_(n.civilizations),ae("#civilizations-value").title=`宏观估算值；时间轴固定跟踪 ${n.trackedSpeciesCount} 个主要文明样本，以保证每个种子都有可观察的文明演化`,ae("#galaxy-type-value").textContent=Go[n.galaxyType],ae("#arm-count-value").textContent=o_(n.galaxyType,n.armCount),ae("#black-hole-value").textContent=n.hasCentralBlackHole?"存在":"未形成",ae("#nucleus-value").textContent=n.hasCentralBlackHole?n.activeNucleus?"活动 · 吸积中":"宁静":"不适用",ae("#stellar-window-value").textContent=t.outcomeExponent<=n.lastStarDeathExponent?"结局前未抵达":`约 10^${n.lastStarDeathExponent.toFixed(1)} 年`,ae("#galaxy-hue-value").textContent=a_(n.hue),ae("#evaporation-value").textContent=t.outcomeExponent<n.blackHoleEvaporationExponent?"结局前未抵达":`约 10^${n.blackHoleEvaporationExponent} 年`,ae("#dark-energy-model-value").textContent=t.modelLabel,ae("#dark-energy-model-value").title=t.modelDescription,ae("#dark-energy-eos-value").textContent=`w₀ ${t.w0.toFixed(2)} · wₐ ${t.wa.toFixed(2)} · 有界 BA`,ae("#vacuum-value").textContent=e_(t),ae("#lifetime-value").textContent=`${t.label} · ${t_(t)}`;const e=ir(n),i=ae("#timeline-stellar-label"),s=t.type==="heat-death"||e<t.onsetAt;i.textContent="恒星熄灭",i.style.left=`${e/10}%`,i.style.display=s?"":"none";const r=ae("#timeline-late-label");r.textContent=t.type==="heat-death"?"黑洞时代":"临界阶段",r.style.left=`${(t.type==="heat-death"?845:t.onsetAt)/10}%`,ae("#timeline-final-label").textContent=t.shortLabel,ae("#cosmic-timeline").setAttribute("aria-label",`从大爆炸到${t.label}的宇宙时间`),ae("#galaxy-name").textContent=`${Pl[n.seedValue%Pl.length]}星系`;const a=(8+n.stars*4.7).toFixed(1);ae("#galaxy-meta").textContent=`${Go[n.galaxyType]} · 直径 ${a} 万光年`}const Fe=n=>document.querySelector(n);let Ol="",Bl=null;const W_=[[0,18],[18,55],[55,145],[145,245],[245,340],[340,470]];function zr(n,t,e){const i=document.createElement("i");i.className=`scale-${e}`,i.style.left=`${t/10}%`,i.dataset.position=t.toFixed(3),n.appendChild(i)}function X_(n){const t=Fe("#timeline-scale");if(!t)return;const e=n?.cosmicFate,i=Math.min(999,Math.max(471,e?.onsetAt||850)),s=e?.type==="heat-death"?[[470,570],[570,650],[650,680],[680,845],[845,950],[950,1e3]]:[[470,i],[i,1e3]],r=[...W_,...s].filter(([a,o])=>o>a);t.replaceChildren(),r.forEach(([a,o],l)=>{const c=o-a,d=Math.max(1,Math.min(4,Math.round(c/48))),u=c/d;l>0&&zr(t,a,"break");for(let p=0;p<d;p++){const g=a+p*u;if((l===0||p>0)&&zr(t,g,"tick scale-tick--major"),!(u<20))for(let x=2;x<=9;x++){const v=g+Math.log10(x)*u;zr(t,v,x===2||x===5?"tick scale-tick--mid":"tick scale-tick--minor")}}}),zr(t,1e3,"tick scale-tick--major")}function Y_(){const n=Fe("#timeline-scale");n&&(n.classList.remove("is-entering"),n.offsetWidth,n.classList.add("is-entering"))}function Lh(n){const t=Fe("#timeline-scale");if(!t||t.clientWidth===0)return;const e=n/1e3*t.clientWidth,i=Math.min(58,t.clientWidth*.09);t.querySelectorAll(".scale-tick").forEach(s=>{const a=Number(s.dataset.position)/1e3*t.clientWidth-e,o=Math.max(0,1-Math.abs(a)/i),l=Math.sign(a)*o*i*.34,c=1+o*1.35;s.style.transform=`translateX(calc(-50% + ${l.toFixed(2)}px)) scaleY(${c.toFixed(3)})`})}function q_(){Fe("#timeline-scale")?.querySelectorAll(".scale-tick").forEach(n=>{n.style.transform=""})}function $_(n){Fe("#cosmic-timeline").value=n.position,Fe("#time-progress").style.width=`${n.position/10}%`,Fe("#timeline-value").textContent=n.label,Fe("#era-number").textContent=String(n.eraIndex+1).padStart(2,"0"),Fe("#era-name").textContent=n.era.name,Fe("#cosmic-time").textContent=n.label.replace("T+",""),Fe("#era-description").textContent=n.era.description,Fe(".explorer-title").style.setProperty("--cosmic-opacity",n.galaxyIdentityOpacity.toFixed(3))}function j_({position:n,simulationState:t,runtimeState:e,civilizationData:i}){e.forEach((a,o)=>{const l=i[o],c=document.querySelector(`[data-species="${o}"]`);if(!c)return;c.style.opacity=a.alive?"1":".18",c.classList.toggle("is-impacted",a.alive&&a.eventState.causes.length>0),c.classList.toggle("is-ascended",a.ascended);const d=[];t?.causes[o]&&d.push(t.causes[o]),a.friendlyNames.length&&d.push(`与 ${a.friendlyNames.join("、")} 友好交流`),a.conflictNames.length&&d.push(`与 ${a.conflictNames.join("、")} 冲突`),a.eventState.causes.length&&d.push(`受 ${a.eventState.causes.join("、")} 影响`),c.title=a.ascended?"1% 概率的高维转化：已脱离普通物质宿主":d.join("；"),c.querySelector("b").textContent=a.alive?a.ascended?"超维存续":`${a.count} 域${a.trend>0?" ↑":a.trend<0?" ↓":""}`:n<l.birth?"未诞生":"衰亡"});const s=e.filter(a=>a.alive).length,r=e.reduce((a,o)=>a+(o.alive&&!o.ascended?o.count:0),0);Fe("#civilization-panel").style.setProperty("--cosmic-opacity",s>0?"1":"0"),Fe("#civilization-summary").textContent=s>0?`${s} 种 · ${r} 域`:"尚未出现"}function K_(n,t=!1){if(n.key===Ol&&!t)return;Ol=n.key,Fe("#event-year").textContent=n.time,Fe("#event-text").textContent=n.text;const e=Fe("#event-feed");e.classList.remove("is-visible"),requestAnimationFrame(()=>e.classList.add("is-visible")),clearTimeout(Bl),Bl=setTimeout(()=>e.classList.remove("is-visible"),3200)}let Yo=null;const Z_=n=>document.querySelector(n);function J_(){Yo=null}function Q_(n,t){if(!n||n===Yo)return;Yo=n;const e=Z_("#civilization-legend"),i=t.length,s=new Map([...e.querySelectorAll(".civilization-item")].map(_=>[Number(_.dataset.species),_]));e.replaceChildren();const r=Int16Array.from({length:i},(_,M)=>M),a=_=>{let M=_;for(;r[M]!==M;)M=r[M];for(;r[_]!==_;){const y=r[_];r[_]=M,_=y}return M},o=(_,M)=>{const y=a(_),E=a(M);y!==E&&(r[Math.max(y,E)]=Math.min(y,E))};for(let _=0;_<i;_++)if(!(!n.active[_]||n.ascended[_]))for(let M=_+1;M<i;M++){if(!n.active[M]||n.ascended[M])continue;const y=_*i+M;n.relations[y]>0&&n.relationScores[y]>=.52&&o(_,M)}const l=new Map,c=[],d=[];for(let _=0;_<i;_++){if(!n.active[_]){c.push(_);continue}if(n.ascended[_]){d.push(_);continue}const M=a(_);l.has(M)||l.set(M,[]),l.get(M).push(_)}const u=[...l.values()],p=_=>_.reduce((M,y)=>M+n.counts[y],0),g=(_,M)=>{let y={kind:"neutral",state:0,strength:0};return _.forEach(E=>M.forEach(C=>{const L=E*i+C,b=n.relations[L],S=Math.abs(n.relationScores[L]);b!==0&&S>y.strength&&(y={kind:b<0?"conflict":"friendly",state:b,strength:S})})),y};u.sort((_,M)=>p(M)-p(_));const x=u.length?[u.shift()]:[];for(;u.length;){const _=x[x.length-1];let M=0,y=-1;u.forEach((E,C)=>{const L=g(_,E).strength;L>y&&(y=L,M=C)}),x.push(u.splice(M,1)[0])}const v={conflict:'<svg viewBox="0 0 16 16" aria-hidden="true"><path d="M3 3l10 10M13 3L3 13"/><path d="M2 5l3-3M11 14l3-3"/></svg>',friendly:'<svg viewBox="0 0 16 16" aria-hidden="true"><circle cx="6" cy="8" r="3.5"/><circle cx="10" cy="8" r="3.5"/></svg>',neutral:'<svg viewBox="0 0 16 16" aria-hidden="true"><path d="M2.5 8h3M10.5 8h3"/><circle cx="8" cy="8" r="1.25"/></svg>'},h=_=>_==="conflict"?"冲突":_==="friendly"?"友好":"中立",f=_=>{const M=_.slice().sort((y,E)=>n.counts[E]-n.counts[y])[0];return`#${t[M].color.toString(16).padStart(6,"0")}`},m=x.map((_,M)=>({members:_,number:String(M+1).padStart(2,"0"),accent:f(_)}));if(m.forEach((_,M)=>{const y=document.createElement("section");y.className="faction-block",y.style.setProperty("--faction",_.accent),y.setAttribute("aria-label",`阵营 ${_.number}`);const E=document.createElement("div");E.className="faction-header";const C=document.createElement("span");C.className="faction-identity",C.textContent=_.number,C.setAttribute("aria-hidden","true"),E.appendChild(C);const L=document.createElement("div");L.className="faction-relations";const b={conflict:[],friendly:[],neutral:[]};m.forEach((R,A)=>{if(A===M)return;const P=g(_.members,R.members);b[P.kind].push(R)}),["conflict","friendly","neutral"].forEach(R=>{const A=b[R];if(!A.length)return;const P=document.createElement("span");P.className=`faction-relation is-${R}`;const F=`阵营 ${_.number}${h(R)}：阵营 ${A.map(U=>U.number).join("、")}`;P.setAttribute("role","img"),P.setAttribute("aria-label",F),P.title=F,P.innerHTML=`${v[R]}<span>${A.map(U=>`<b style="--target-faction:${U.accent}">${U.number}</b>`).join("")}</span>`,L.appendChild(P)}),E.appendChild(L),y.appendChild(E);const S=document.createElement("div");S.className="faction-members",_.members.slice().sort((R,A)=>n.counts[A]-n.counts[R]||R-A).forEach(R=>{const A=s.get(R);A&&S.appendChild(A)}),y.appendChild(S),e.appendChild(y)}),d.length){const _=document.createElement("section");_.className="faction-block is-transcendent",_.setAttribute("aria-label","升维种群"),_.innerHTML='<div class="faction-header"><span class="faction-identity" aria-hidden="true">◇</span></div>';const M=document.createElement("div");M.className="faction-members",d.forEach(y=>{const E=s.get(y);E&&M.appendChild(E)}),_.appendChild(M),e.appendChild(_)}if(c.length){const _=document.createElement("div");_.className="faction-inactive",c.forEach(M=>{const y=s.get(M);y&&_.appendChild(y)}),e.appendChild(_)}}const Bt=n=>document.querySelector(n),_c=Bt("#universe"),ii=window.matchMedia("(prefers-reduced-motion: reduce)").matches,Un=new y0({canvas:_c,antialias:!0,alpha:!1,powerPreference:"high-performance"});Un.setPixelRatio(Math.min(devicePixelRatio,2));Un.setSize(innerWidth,innerHeight);Un.setClearColor(328968,1);Un.outputColorSpace=Ne;Un.toneMapping=Xl;Un.toneMappingExposure=1.15;const la=new Td;la.fog=new cc(328968,.018);const Tn=new dn(42,innerWidth/innerHeight,.1,200);Tn.position.set(0,.5,32);const gn=new E0(Tn,_c);gn.enableDamping=!0;gn.dampingFactor=.045;gn.enablePan=!1;gn.minDistance=8;gn.maxDistance=46;gn.autoRotate=!1;gn.enabled=!1;let Re=new ke,Ee=new ke,Dn=new ke,oi=new ke,Fi=new ke,Di=new ke,ci=new ke;la.add(Re,Ee,Dn,oi,Fi,Di,ci);let Rt=null,_n="generator",Xe=null,ms=new Vt(0,0),kr=new Vt(0,0),qo=new Nd;qo.params.Points.threshold=.12;let Es=null,js=[],ln=[],Si=[],hn=null,ha=[],$o=null,Bs=null,jo=null,Ko=null,cs=null,$r=null,Ih=[],Ks=null,gs=null,Gs=null,Uh=null,Fh=null,ea=null,Li=null,Nh=null,Hn=null,zs=null,Oh=[],us=null,An=null,un=null,we=null,Ce=0,In=!1,Bh=10,zl=performance.now(),Ni=[];function Zo({random:n,massSolar:t,birthAt:e,sourceIndex:i=null,isCentral:s=!1,originEventId:r=null}){const a=nt.clamp((Math.log10(t)-.6)/8.4,0,1),o=s?.9:.3+a*.34,l=qr({color:s?16763286:n()>.35?16758652:12179455,tilt:rt(n,-.38,.38),phase:n()*Math.PI*2,visualScale:s?1.14:1,intensity:0}),c=new oe(new se({map:ze(),color:7315404,transparent:!0,opacity:0,depthWrite:!1,blending:Nt}));c.scale.set(1.2,1.2,1);const d=new oe(new se({map:ze(),color:15267071,transparent:!0,opacity:0,depthWrite:!1,blending:Nt}));if(d.scale.set(.2,.2,1),l.add(c,d),s)l.position.set(0,0,0);else if(Number.isInteger(i)){const p=i*3;l.position.set(Li[p],Li[p+1],Li[p+2])}const u=U_(t,Rt.blackHoleEvaporationExponent);return l.scale.setScalar(o),l.visible=!1,Object.assign(l.userData,{baseScale:o,birthAt:e,evaporationAt:mn(10**u,Rt),evaporationExponent:u,massSolar:t,sourceIndex:i,isCentral:s,originEventId:r,accretionStrength:s?Rt.activeNucleus?1.08:.56:.68+a*.18,hawkingGlow:c,finalPulse:d,spinDirection:n()<.5?-1:1}),ha.push(l),oi.add(l),l}function Ei(n){n.traverse(t=>{t.geometry&&t.geometry.dispose(),t.material&&(Array.isArray(t.material)?t.material:[t.material]).forEach(i=>i.dispose())}),n.clear()}function zh(){Ei(Re);const n=rn(Rt.seed),t=Math.min(10500,Math.floor(5200+Rt.stars*900)),e=new Float32Array(t*3),i=new Float32Array(t*3),s=new Float32Array(t),r=new kt().setHSL(Rt.hue,.55,.66),a=new kt(16767402);for(let g=0;g<t;g++){const x=Math.pow(n(),.56)*9.2,v=n()*Math.PI*2,h=Math.acos(2*n()-1),f=Math.sin(v*Rt.armCount+x)*.48;e[g*3]=x*Math.sin(h)*Math.cos(v)+f,e[g*3+1]=x*Math.cos(h)*.82,e[g*3+2]=x*Math.sin(h)*Math.sin(v);const m=r.clone().lerp(a,Math.pow(n(),2.3)),_=.45+n()*.7;i[g*3]=m.r*_,i[g*3+1]=m.g*_,i[g*3+2]=m.b*_,s[g]=n()}const o=new ee;o.setAttribute("position",new Kt(e,3)),o.setAttribute("color",new Kt(i,3)),o.setAttribute("aSize",new Kt(s,1));const l=new Ye({size:.065,map:Ae(),alphaTest:.015,vertexColors:!0,transparent:!0,opacity:.86,depthWrite:!1,blending:Nt}),c=new Ze(o,l);Re.add(c);const d=new uc(9.9,3),u=new lc(new Dd(d),new Cn({color:12175324,transparent:!0,opacity:.032}));Re.add(u);const p=new pn(new dc(10.7,.007,3,220),new er({color:14221151,transparent:!0,opacity:.25}));p.rotation.set(1.24,.18,.4),Re.add(p),Re.rotation.set(.15,-.3,-.08),Re.scale.setScalar(.01),Xe={type:"birth",start:performance.now(),duration:ii?1:1300}}function kh(){Ei(Ee),Ei(Dn),Ei(oi),Ei(Fi),Ei(Di),Ei(ci),js=[],ln=[],Si=[],hn=null;const n=rn(Rt.seed,91),t=17e3,e=new Float32Array(t*3),i=new Float32Array(t*3);An=new Float32Array(t);const s=new kt(16770996),r=new kt().setHSL(Rt.hue,.65,.56),a=ir(Rt),o=Math.min(a,mn(4e10,Rt)),l=Array.from({length:4+Rt.seedValue%3},(m,_)=>({x:rt(n,-8,8)+_*.35,y:rt(n,-.6,.6),z:rt(n,-6,6),spread:rt(n,1.1,3.1)}));for(let m=0;m<t;m++){let _=0,M=0,y=0;if(Rt.galaxyType===0){const b=n();if(b<.2)_=te(n)*3.7,y=te(n)*.42,M=te(n)*.18;else if(b<.29)_=te(n)*1.7,y=te(n)*1.7,M=te(n)*.65;else{const S=3+Math.pow(n(),.72)*11,A=m%2*Math.PI+(S-3)*.46+te(n)*(.12+S*.012),P=te(n)*(.18+S*.025);_=Math.cos(A)*S+P,y=Math.sin(A)*S+P,M=te(n)*(.12+S*.018)}}else if(Rt.galaxyType===1){const b=7+Rt.seedValue%5,S=Math.pow(n(),.68)*14,R=m%b,A=R/b*Math.PI*2+S*.31+te(n)*(.26+S*.018),P=1+Math.sin(S*2.7+R*1.9)*.11;_=Math.cos(A)*S*P+te(n)*.25,y=Math.sin(A)*S*P+te(n)*.25,M=te(n)*(.18+S*.028)}else if(Rt.galaxyType===2){const b=n(),S=n()*Math.PI*2;let R;b<.72?R=8.4+te(n)*.78:b<.9?R=Math.abs(te(n))*2.1:R=4+n()*8,_=Math.cos(S)*R*1.15+te(n)*.13,y=Math.sin(S)*R+te(n)*.13,M=te(n)*(.18+R*.012)}else if(Rt.galaxyType===3){const b=Math.pow(n(),.38);_=te(n)*5.5*b,M=te(n)*2.35*b,y=te(n)*3.75*b;const S=Math.hypot(_,M,y);if(S>13.5){const R=13.5/S;_*=R,M*=R,y*=R}}else if(n()<.13){const b=rt(n,-12,12);_=b,y=Math.sin(b*.24)*2.7+te(n)*.7,M=te(n)*.55}else{const b=l[Math.floor(n()*l.length)];_=b.x+te(n)*b.spread,M=b.y+te(n)*b.spread*.38,y=b.z+te(n)*b.spread*.72}e[m*3]=_,e[m*3+1]=M,e[m*3+2]=y;const E=Math.hypot(_,M,y),C=s.clone().lerp(r,Math.min(1,E/12)),L=.55+n()*.85;i[m*3]=C.r*L,i[m*3+1]=C.g*L,i[m*3+2]=C.b*L,An[m]=o+Math.pow(n(),1.9)*(a-o)}Li=e.slice(),Nh=i.slice(),Hn=Y0(Rt.seed,Li),us=M_(Li,Rt);const c=new Float32Array(Hn.gasSourceIndices.length*3),d=new Float32Array(Hn.gasSourceIndices.length*3);Hn.gasSourceIndices.forEach((m,_)=>{const M=m*3,y=_*3;c[y]=Hn.formationOrigins[M],c[y+1]=Hn.formationOrigins[M+1],c[y+2]=Hn.formationOrigins[M+2];const E=.48+n()*.32;d[y]=.2*E,d[y+1]=.52*E,d[y+2]=.72*E});const u=new ee;u.setAttribute("position",new Kt(c,3)),u.setAttribute("color",new Kt(d,3)),zs=new Ze(u,new Ye({size:.18,map:Ae(),alphaTest:.008,vertexColors:!0,transparent:!0,opacity:0,depthWrite:!1,blending:Nt})),zs.visible=!1,zs.renderOrder=-1,Ee.add(zs);const p=new ee;p.setAttribute("position",new Kt(e,3)),p.setAttribute("color",new Kt(i,3));const g=new Ze(p,new Ye({size:.09,map:Ae(),alphaTest:.015,vertexColors:!0,transparent:!0,opacity:.9,depthWrite:!1,blending:Nt}));Ee.add(g),Es=g,Oh=Hn.sites.map(m=>{const _=new ke;_.position.fromArray(m.position),_.userData.birthAt=m.birthAt,_.userData.maxRadius=m.maxRadius,_.userData.phase=m.phase;const M=new oe(new se({map:Ai(),color:9296874,transparent:!0,opacity:0,depthWrite:!1,blending:Nt})),y=new oe(new se({map:ze(),color:15333631,transparent:!0,opacity:0,depthWrite:!1,blending:Nt}));return M.scale.setScalar(.1),y.scale.setScalar(.25),_.userData.front=M,_.userData.sourceGlow=y,_.add(M,y),Ee.add(_),_});const v=[{scale:4.3,opacity:.32},{scale:3.25,opacity:.22},{scale:1.55,opacity:.055},{scale:6.4,opacity:.46},{scale:1.2,opacity:.035}][Rt.galaxyType],h=new oe(new se({map:ze(),color:16768164,transparent:!0,opacity:0,depthWrite:!1,blending:Nt}));if(h.scale.set(v.scale,v.scale,1),h.userData.isCoreGlow=!0,h.userData.profile=v,Ee.add(h),Rt.activeNucleus){const m=new oe(new se({map:ze(),color:14281983,transparent:!0,opacity:0,depthWrite:!1,blending:Nt}));m.scale.set(.72,.72,1),m.userData.isAgnGlow=!0,Ee.add(m);const _=new ee().setFromPoints([new z(0,-2.6,0),new z(0,2.6,0)]),M=new Ri(_,new Cn({color:11065599,transparent:!0,opacity:0,depthWrite:!1,blending:Nt}));M.rotation.z=.3,M.userData.isAgnJet=!0,Ee.add(M)}const f=[.72,.92,.62,.35,.78];Ee.rotation.set(f[Rt.galaxyType],-.25+Rt.galaxyType*.06,.06),Ee.visible=!1,tx(e),ix(),ex(e),N_({universe:Rt,civilizationData:ln,civilizationSimulation:hn,cosmicEvents:Ni}),nx(),X_(Rt)}function tx(n){const t=rn(Rt.seed,771);ha=[];const e=4800,i=new Float32Array(e*3),s=new Float32Array(e*3);Bs=new Float32Array(e*3),jo=new Float32Array(e);const r=new kt(16777215),a=new kt(16739624);for(let E=0;E<e;E++){const C=t()*Math.PI*2,L=rt(t,-1,1),b=Math.sqrt(1-L*L),S=Math.cbrt(t());Bs[E*3]=Math.cos(C)*b*S,Bs[E*3+1]=L*S,Bs[E*3+2]=Math.sin(C)*b*S,jo[E]=nt.clamp(1+te(t)*.035*Rt.primordialFluctuation,.82,1.18);const R=r.clone().lerp(a,Math.pow(t(),.7));s[E*3]=R.r,s[E*3+1]=R.g,s[E*3+2]=R.b}const o=new ee;o.setAttribute("position",new Kt(i,3)),o.setAttribute("color",new Kt(s,3)),$o=new Ze(o,new Ye({size:.24,map:Ae(),alphaTest:.012,vertexColors:!0,transparent:!0,opacity:1,depthWrite:!1,blending:Nt})),Dn.add($o);const l=340,c=new Float32Array(l*6);cs=new Float32Array(l*4);for(let E=0;E<l;E++){const C=t()*Math.PI*2,L=Math.acos(2*t()-1);cs[E*4]=Math.sin(L)*Math.cos(C),cs[E*4+1]=Math.cos(L),cs[E*4+2]=Math.sin(L)*Math.sin(C),cs[E*4+3]=.45+t()*.75}const d=new ee;d.setAttribute("position",new Kt(c,3)),Ko=new lc(d,new Cn({color:16762253,transparent:!0,opacity:.8,blending:Nt,depthWrite:!1})),Dn.add(Ko),$r=new oe(new se({map:ze(),color:16777215,transparent:!0,opacity:1,depthTest:!1,depthWrite:!1,blending:Nt})),$r.scale.setScalar(.2),Dn.add($r),Ih=[16774367,16751444,8962047].map((E,C)=>{const L=new oe(new se({map:Ai(),color:E,transparent:!0,opacity:0,depthTest:!1,depthWrite:!1,blending:Nt}));return L.userData.offset=C*.13,Dn.add(L),L});const u=1350,p=new Float32Array(u*3),g=new Float32Array(u*3);un=new Float32Array(u*3),we={sourceIndices:new Uint16Array(u),birthAt:new Float32Array(u),axes:new Float32Array(u*3),orbitRates:new Float32Array(u),escapeAt:new Float32Array(u),speeds:new Float32Array(u),fates:new Uint8Array(u)};const x=nt.clamp((Rt.gravity-.5)*6+(Rt.galaxyType===3?4:0),0,12);for(let E=0;E<u;E++){const C=Math.floor(t()*n.length/3),L=C*3;we.sourceIndices[E]=C,we.birthAt[E]=An[C];const b=n[L],S=n[L+1],R=n[L+2];p[E*3]=un[E*3]=b,p[E*3+1]=un[E*3+1]=S,p[E*3+2]=un[E*3+2]=R,t(),t(),t(),we.axes.set([us.axes[L],us.axes[L+1],us.axes[L+2]],E*3),we.orbitRates[E]=us.orbitRates[C];const A=t(),P=A<.82?0:A<.92?1:A<.99?2:3;we.fates[E]=P;const F=P===1?1001:(P===3?704:P===2?724:710)+x+Math.pow(t(),.68)*(P===3?28:92);we.escapeAt[E]=F>1e3?F:mn(mc(F,Rt),Rt),we.speeds[E]=P===3?rt(t,1.7,2.6):rt(t,.55,1.05);const U=new kt(t()>.28?10204889:9125426);g[E*3]=U.r,g[E*3+1]=U.g,g[E*3+2]=U.b}we.baseColors=g.slice(),we.firstBirthAt=Math.min(...we.birthAt);const v=new ee;if(v.setAttribute("position",new Kt(p,3)),v.setAttribute("color",new Kt(g,3)),ea=new Ze(v,new Ye({size:.12,map:Ae(),alphaTest:.012,vertexColors:!0,transparent:!0,opacity:0,depthWrite:!1,blending:Nt})),oi.add(ea),oi.rotation.copy(Ee.rotation),Rt.hasCentralBlackHole){const E=Rt.cosmicMilestones.firstStarsYears,C=10**(1+(Rt.blackHoleEvaporationExponent-67)/3);Zo({random:t,massSolar:C,birthAt:mn(E*2.2,Rt),isCentral:!0})}L_(An,Rt.hasCentralBlackHole?4:5,t).forEach(E=>{Zo({random:t,massSolar:rt(t,5,48),birthAt:An[E],sourceIndex:E})});const f=260,m=new Float32Array(f*3),_=new Float32Array(f*3);for(let E=0;E<f;E++){const C=t()*Math.PI*2,L=Math.acos(2*t()-1),b=4+Math.pow(t(),1/3)*24;m[E*3]=Math.sin(L)*Math.cos(C)*b,m[E*3+1]=Math.cos(L)*b,m[E*3+2]=Math.sin(L)*Math.sin(C)*b;const S=new kt().setHSL(.56+t()*.1,.28,.46+t()*.22);_[E*3]=S.r,_[E*3+1]=S.g,_[E*3+2]=S.b}const M=new ee;M.setAttribute("position",new Kt(m,3)),M.setAttribute("color",new Kt(_,3)),Uh=m.slice(),Fh=_.slice(),Ks=new Ze(M,new Ye({size:.11,map:Ae(),alphaTest:.01,vertexColors:!0,transparent:!0,opacity:0,depthWrite:!1,blending:Nt})),Fi.add(Ks);const y=Rt.cosmicFate.type==="vacuum-decay"?13019135:Rt.cosmicFate.type==="big-rip"?8440063:16744543;gs=new pn(new aa(1,40,24),new er({color:y,transparent:!0,opacity:0,wireframe:!0,depthWrite:!1,blending:Nt})),gs.position.set(4.2,-1.4,2.6),Gs=new oe(new se({map:ze(),color:y,transparent:!0,opacity:0,depthTest:!1,depthWrite:!1,blending:Nt})),Gs.scale.set(.2,.2,1),Di.add(gs,Gs),Di.rotation.copy(Ee.rotation),Dn.visible=!1,oi.visible=!1,Fi.visible=!1,Di.visible=!1}function ex(n){const t=rn(Rt.seed,1447);Ni=[];const e=ir(Rt),s=Rt.cosmicFate.type!=="heat-death"?Rt.cosmicFate.onsetAt:1e3,r=h=>h<470?h:mn(mc(h,Rt),Rt),a=Math.min(s,r(845)),o=new Set(["pair-instability-supernova","young-pulsar-birth","classical-nova","type-ia-supernova","red-dwarf-superflare","gamma-ray-burst","neutron-star-kilonova","quasar-awakening","magnetar-flare","tidal-disruption-event","core-collapse-supernova","pulsar-glitch","superluminous-supernova","failed-supernova"]),l=Rt.hasCentralBlackHole?{type:"quasar-awakening",visual:"pulsar",label:"类星体短暂苏醒",message:"中心黑洞吸积率骤升，相对论喷流穿过星系核",preferCenter:!0,start:480+t()*16,duration:30,color:"#8dd9ff",repeatRate:.32,maximumOccurrences:2}:{type:"magnetar-flare",visual:"pulsar",label:"磁星巨型耀斑",message:"磁壳重排释放高能辐射，脉冲扫过邻近恒星系",start:480+t()*16,duration:26,color:"#7dcaff",repeatRate:.52,maximumOccurrences:2},c=[{type:"pair-instability-supernova",visual:"supernova",label:"成对不稳定超新星",message:"第一代巨星被完全撕碎，重元素云向外扩散",start:258+t()*18,duration:28,color:"#ffb36b",repeatRate:.16,maximumOccurrences:2},{type:"young-pulsar-birth",visual:"pulsar",label:"年轻脉冲星诞生",message:"新生中子星高速自转，双极束流开始扫掠星际介质",start:302+t()*18,duration:27,color:"#68c8ff",repeatRate:.42,maximumOccurrences:2},{type:"classical-nova",visual:"nova",label:"经典新星爆发",message:"白矮星表面的吸积氢发生热核失控，抛出明亮但低质量的壳层",start:336+t()*12,duration:20,color:"#ffe4a8",repeatRate:.9,maximumOccurrences:3},{type:"type-ia-supernova",visual:"supernova",label:"Ia 型超新星爆发",message:"白矮星发生热核失控，将铁族元素抛入星际空间",start:368+t()*22,duration:25,color:"#ffd08a",repeatRate:.66,maximumOccurrences:3},{type:"red-dwarf-superflare",visual:"stellar-flare",label:"红矮星超级耀斑",message:"磁场突然重联，高能辐射与带电粒子冲击近轨行星",start:396+t()*12,duration:21,color:"#ffcb72",repeatRate:1.05,maximumOccurrences:3},{type:"gamma-ray-burst",visual:"pulsar",label:"长伽马射线暴",message:"垂死巨星坍缩，狭窄高能喷流贯穿恒星外层",start:420+t()*20,duration:24,color:"#89b9ff",repeatRate:.2,maximumOccurrences:2},{type:"neutron-star-kilonova",visual:"kilonova",label:"中子星并合千新星",message:"双中子星旋近并合，短伽马射线束与富含重元素的抛射物同时释放",start:450+t()*12,duration:25,color:"#caa5ff",repeatRate:.28,maximumOccurrences:2},l,{type:"tidal-disruption-event",visual:"tidal-disruption",label:"潮汐瓦解事件",message:"恒星掠过中央黑洞的潮汐半径，被拉成长流并逐步吸积",preferCenter:!0,requiresCentralBlackHole:!0,start:502+t()*10,duration:30,color:"#72e4ff",repeatRate:.28,maximumOccurrences:2},{type:"core-collapse-supernova",visual:"supernova",label:"核坍缩超新星",message:"恒星核心坍缩，冲击波把新合成元素送入星际云",start:518+t()*20,duration:27,color:"#ff875c",repeatRate:.86,maximumOccurrences:3},{type:"pulsar-glitch",visual:"pulsar",label:"脉冲星自转突变",message:"中子星内部角动量重分配，脉冲节律突然跃迁",start:548+t()*18,duration:22,color:"#8ba8ff",repeatRate:.72,maximumOccurrences:3},{type:"superluminous-supernova",visual:"supernova",label:"超亮超新星",message:"磁星引擎持续注入能量，爆发亮度超过普通超新星",start:552+t()*16,duration:26,color:"#ff6b52",repeatRate:.2,maximumOccurrences:2},{type:"failed-supernova",visual:"stellar-collapse",label:"失败超新星",message:"冲击波未能掀开恒星外层，亮度短暂上升后整体坍缩为黑洞",start:586+t()*14,duration:29,color:"#b87958",repeatRate:.38,maximumOccurrences:2},{type:"stellar-black-hole-merger",visual:"black-hole-merger",label:"双黑洞合并",message:"时空啁啾达到峰值，引力波波前穿过局部星域（形变已视觉放大）",preferCenter:!0,start:616+t()*18,duration:38,persistUntil:a,persistenceFadeDuration:24,color:"#c897ff",repeatRate:.36,maximumOccurrences:2},{type:"late-black-hole-merger",visual:"black-hole-merger",label:"孤立黑洞捕获合并",message:"漫长引力散射后完成并合，残余黑洞在阻尼振铃中反冲",preferCenter:!0,start:872+t()*18,duration:42,persistUntil:Math.min(s,r(950)),persistenceFadeDuration:18,color:"#9bb8ff",repeatRate:.14,maximumOccurrences:2}].filter(h=>(!h.requiresCentralBlackHole||Rt.hasCentralBlackHole)&&(h.type!=="late-black-hole-merger"||Rt.cosmicFate.type==="heat-death"||Rt.cosmicFate.outcomeExponent>45)).map(h=>{const f=o.has(h.type),m=r(h.start),_=Math.min(s-h.duration,f?e-h.duration:1/0);return{...h,start:m,latestStart:_,requiresLivingStar:f}}),d=V_(c,Rt,t).map(h=>{const f=Math.min(s,h.requiresLivingStar?e:1/0);return{...h,duration:Math.min(h.duration,f-h.start)}}).filter(h=>h.duration>=1).map((h,f)=>{const m=b_(h,Rt,f),_={...h,simulation:m};return m?.model==="black-hole-binary"&&(_.gasRich=m.gasRich,_.radiatedMassFraction=m.radiatedMassFraction,_.recoilKms=m.recoilKms),m?.persistentRemnant&&(_.persistUntil=h.type==="late-black-hole-merger"?Math.min(s,r(950)):a,_.persistenceFadeDuration=24),_}),u={"pair-instability-supernova":{radius:.55,maxStars:5,sourceDim:.02,neighborDim:.96,kick:.018,civilization:.08,range:2.4},"young-pulsar-birth":{radius:.42,maxStars:2,sourceDim:.12,neighborDim:.99,kick:.01,civilization:.035,range:1.8,directional:!0,beamAngle:.12},"classical-nova":{radius:.18,maxStars:1,sourceDim:1,neighborDim:1,kick:0,civilization:.012,range:.75,maxSpecies:1},"type-ia-supernova":{radius:.48,maxStars:4,sourceDim:.02,neighborDim:.97,kick:.012,civilization:.06,range:2.1},"red-dwarf-superflare":{radius:.22,maxStars:1,sourceDim:1,neighborDim:1,kick:0,civilization:.09,range:1.15,maxSpecies:1},"gamma-ray-burst":{radius:7.5,maxStars:46,sourceDim:.025,neighborDim:.82,kick:0,civilization:.42,range:12,maxSpecies:1,directional:!0,beamAngle:.1},"neutron-star-kilonova":{radius:4.8,maxStars:24,sourceDim:.03,neighborDim:.9,kick:.006,civilization:.24,range:8.5,maxSpecies:1,directional:!0,beamAngle:.14},"quasar-awakening":{radius:8.5,maxStars:60,sourceDim:.95,neighborDim:.96,kick:0,civilization:.16,range:14,maxSpecies:2,directional:!0,beamAngle:.16},"magnetar-flare":{radius:1.1,maxStars:8,sourceDim:.82,neighborDim:.94,kick:0,civilization:.12,range:3.2,maxSpecies:1},"tidal-disruption-event":{radius:.32,maxStars:2,sourceDim:.015,neighborDim:.995,kick:.008,civilization:.075,range:2.8,maxSpecies:1},"core-collapse-supernova":{radius:.5,maxStars:4,sourceDim:.025,neighborDim:.97,kick:.014,civilization:.06,range:2.2},"pulsar-glitch":{radius:.01,maxStars:1,sourceDim:.985,neighborDim:1,kick:0,civilization:0,range:0,maxSpecies:0},"superluminous-supernova":{radius:.62,maxStars:6,sourceDim:.02,neighborDim:.95,kick:.02,civilization:.09,range:2.8,maxSpecies:1},"failed-supernova":{radius:.24,maxStars:2,sourceDim:.008,neighborDim:.995,kick:.003,civilization:.025,range:1.25,maxSpecies:1},"stellar-black-hole-merger":{radius:.08,maxStars:1,sourceDim:.06,neighborDim:1,kick:0,civilization:0,range:0,maxSpecies:0},"late-black-hole-merger":{radius:.08,maxStars:1,sourceDim:.04,neighborDim:1,kick:0,civilization:0,range:0,maxSpecies:0}},p=(h=!1,f=null)=>{let m=f===null?Math.floor(t()*n.length/3):An.findIndex(M=>M>f);m<0&&(m=Math.floor(t()*n.length/3));const _=h?2.8:6.2;for(let M=0;M<140;M++){const y=Math.floor(t()*n.length/3);if(f!==null&&An[y]<=f)continue;const E=y*3;if(Math.hypot(n[E],n[E+1],n[E+2])<_){m=y;break}}return{index:m,position:new z(n[m*3],n[m*3+1],n[m*3+2])}},g=(h,f)=>{const m=Fl(u[h.type],h.simulation,Rt),M={supernova:.08,nova:.14,kilonova:.22,pulsar:.46,"stellar-flare":.38,"tidal-disruption":.58,"stellar-collapse":.64,"black-hole-merger":.68}[h.visual]??.5,y=h.start+h.duration*M,E=[];for(let R=0;R<n.length/3;R++){const A=R*3,P=Math.hypot(n[A]-f.position.x,n[A+1]-f.position.y,n[A+2]-f.position.z);if(!(P>m.radius)){if(m.directional&&h.beamDirection&&P>.001){const F=new z(n[A]-f.position.x,n[A+1]-f.position.y,n[A+2]-f.position.z).normalize();if(Math.abs(F.dot(h.beamDirection))<Math.cos(m.beamAngle))continue}E.push({index:R,distance:P})}}E.sort((R,A)=>R.distance-A.distance);const C=E.slice(0,m.maxStars).map(({index:R,distance:A},P)=>{const F=R*3,U=1-Math.min(1,A/m.radius);let O=n[F]-f.position.x,W=n[F+1]-f.position.y,V=n[F+2]-f.position.z;const j=Math.hypot(O,W,V);if(j<.001){const et=t()*Math.PI*2,H=t()*2-1,G=Math.sqrt(1-H*H);O=Math.cos(et)*G,W=H,V=Math.sin(et)*G}else O/=j,W/=j,V/=j;const K=m.kick*(.2+U*.8)*(.72+t()*.5);return{index:R,dimFactor:P===0?m.sourceDim:1-(1-m.neighborDim)*U,kick:[O*K,W*K,V*K]}}),L={"pair-instability-supernova":"爆发源完全解体且没有致密残骸","classical-nova":"白矮星保留下来，重新开始从伴星吸积物质","type-ia-supernova":"白矮星被热核爆炸完全摧毁","red-dwarf-superflare":"宿主恒星保持完整，但近轨行星大气受到高能粒子冲击","neutron-star-kilonova":"并合形成大质量中子星或黑洞，并把重元素抛入星际空间","tidal-disruption-event":"恒星被撕碎，部分物质形成吸积流，部分沿轨道逃逸","core-collapse-supernova":"坍缩核心留下中子星或恒星级黑洞","superluminous-supernova":"恒星外层被大规模抛射，中心结局仍不确定","failed-supernova":"恒星几乎没有明亮爆炸便消失，留下新生黑洞"},b=T_(h),S=b||(h.visual==="black-hole-merger"?`约 ${(h.radiatedMassFraction*100).toFixed(1)}% 总质量以引力波带走，残余黑洞以约 ${h.recoilKms} km/s 反冲${h.gasRich?"，周围气体受热形成短暂余辉":"；真空环境中没有超新星式爆炸"}`:h.type==="pulsar-glitch"?"自转频率发生微小跃变，没有可见的大规模破坏":L[h.type]?`${L[h.type]}，${Math.max(0,C.length-1)} 个邻近恒星系受影响`:h.visual==="pulsar"?`${C.length} 个位于辐射束或近场内的恒星系受到影响`:`爆发源发生结构性改变，${Math.max(0,C.length-1)} 个邻近恒星系受冲击`);return{impactAt:y,impactPhase:M,starImpacts:C,systemOutcome:S}},x=(h,f,m,_,M)=>{if(!hn||!we)return[];const y=Fl(u[h.type],h.simulation,Rt),E=rn(Rt.seed,6203+M*131),C=new Map,L=(R,A,P,F=!1,U="damage")=>{const O=`${U}:${R}:${A.toFixed(4)}`,W=C.get(O);if(W){W.severity=1-(1-W.severity)*(1-P),W.permanent||=F;return}C.set(O,{nodeIndex:R,at:A,severity:nt.clamp(P,0,1),permanent:F,kind:U,destructionRoll:E()})};if(y.civilization>0&&y.range>0)for(let R=0;R<hn.habitatPositions.length/3;R++){const A=R*3,P=hn.habitatPositions[A]-f.position.x,F=hn.habitatPositions[A+1]-f.position.y,U=hn.habitatPositions[A+2]-f.position.z,O=Math.hypot(P,F,U);if(O>y.range)continue;if(y.directional&&h.beamDirection&&O>.001){const K=1/O;if(Math.abs(P*K*h.beamDirection.x+F*K*h.beamDirection.y+U*K*h.beamDirection.z)<Math.cos(y.beamAngle))continue}const W=Math.max(.08,1-O/y.range),V=nt.clamp(y.civilization*(.62+W*.48)*(.84+E()*.3),0,.58),j=h.simulation?.pulsePhases;if(j?.length?j.forEach((K,et)=>{const H=h.simulation.pulseWeights?.[et]??1;L(R,h.start+h.duration*K,V*H)}):L(R,m.impactAt,V),h.simulation?.recoveryDuration&&h.simulation.recoveryFraction>0){const K=j?.length?Math.max(...j):m.impactPhase,et=h.start+h.duration*K+h.simulation.recoveryDuration;L(R,et,V*h.simulation.recoveryFraction,!1,"recovery")}}const b=new Map(m.starImpacts.map(R=>[R.index,R])),S=new Map;if(_)for(let R=0;R<_.indices.length;R++)_.restDistances[R]>=_.captureRadius||S.set(_.indices[R],_.restDistances[R]);for(let R=0;R<hn.habitatRemnantIndices.length;R++){const A=hn.habitatRemnantIndices[R],P=we.sourceIndices[A],F=b.get(P);if(F){const O=1-F.dimFactor;O>.001&&L(R,m.impactAt,O,F.dimFactor<=.15)}const U=S.get(P);if(U!==void 0){const O=U/_.captureRadius*11;L(R,m.impactAt+O+13,1,!0)}}return Array.from(C.values()).sort((R,A)=>R.at-A.at||R.nodeIndex-A.nodeIndex)},v=(h,f,m)=>{const _=h.visual==="kilonova";if(h.visual!=="black-hole-merger"&&!_)return null;const M=_?6.4:h.type==="late-black-hole-merger"?7.2:8.8,y=[];for(let F=0;F<n.length/3;F++){const U=F*3,O=n[U]-f.position.x,W=n[U+1]-f.position.y,V=n[U+2]-f.position.z,j=Math.hypot(O,W,V);j>.12&&j<=M&&y.push({index:F,dx:O,dy:W,dz:V,distance:j})}const E=rn(Rt.seed,9107+m*97),C=Math.min(_?900:1800,y.length),L=y.length/Math.max(1,C),b=new Uint16Array(C),S=new Float32Array(C),R=new Float32Array(C*3),A=new Float32Array(C);for(let F=0;F<C;F++){const U=F*L,O=y[Math.min(y.length-1,Math.floor(U+E()*L))],W=1/O.distance,V=O.dx*W;O.dy*W;const j=O.dz*W;let K=-j,et=0,H=V;const G=Math.hypot(K,et,H);G<.04?(K=1,et=0,H=0):(K/=G,et/=G,H/=G),b[F]=O.index,S[F]=O.distance,R.set([K,et,H],F*3),A[F]=Math.cos(Math.atan2(j,V)*2)*(.72+E()*.28)}const P=_?nt.clamp((h.simulation?.radiatedMassFraction||.025)/.04,.38,1):nt.clamp((h.simulation?.radiatedMassFraction||.045)/.045,.62,1.8);return{waveRadius:M,waveAmplitude:P,indices:b,distances:S,transverse:R,polarities:A}};d.forEach((h,f)=>{const m=new ke,_=p(h.preferCenter,h.requiresLivingStar?h.start+h.duration:null);m.position.copy(_.position),m.visible=!1,ci.add(m);const M=u[h.type];if(M.directional&&(h.beamDirection=new z(te(t),te(t),te(t)).normalize(),m.quaternion.setFromUnitVectors(new z(0,1,0),h.beamDirection)),h.visual==="supernova"||h.visual==="nova"||h.visual==="kilonova"){const P=h.visual==="nova",F=h.visual==="kilonova",U=F?12099071:P?16770733:16756067,O=F?14731519:P?16317439:11458815,W=new oe(new se({map:ze(),color:16777215,transparent:!0,opacity:0,depthWrite:!1,blending:Nt})),V=new oe(new se({map:ze(),color:U,transparent:!0,opacity:0,depthWrite:!1,blending:Nt})),j=new oe(new se({map:Ae(),color:O,transparent:!0,opacity:0,depthWrite:!1,blending:Nt}));j.scale.set(.16,.16,1);const K=nt.clamp(Math.sqrt((h.simulation?.ejectaMass||(P?2e-5:8))/(P?2e-5:8)),.7,1.65),et=Math.round((P?360:620)*K),H=new Float32Array(et*3),G=new Float32Array(et*3),xt=new Float32Array(et*3),pt=new Float32Array(et),Y=new Float32Array(et),Z=new kt(F?14283775:P?16775384:16773319),_t=new kt(F?9261009:P?16758120:16730930);for(let yt=0;yt<et;yt++){const Jt=t()*Math.PI*2,ne=Math.acos(2*t()-1),D=1+Math.sin(Jt*5+ne*3)*.18+(t()-.5)*.24,T=new z(Math.sin(ne)*Math.cos(Jt)*D,Math.cos(ne)*(F?.34:1.08+t()*.34),Math.sin(ne)*Math.sin(Jt)*D).normalize();xt.set([T.x,T.y,T.z],yt*3);const $=F?nt.clamp((h.simulation?.ejectaVelocityC||.2)/.18,.72,1.55):P?nt.clamp((h.simulation?.ejectaVelocityKms||1800)/1800,.64,1.7):nt.clamp((h.simulation?.ejectaVelocityKms||9e3)/9e3,.62,1.72),st=P?.46*$:$;pt[yt]=(.38+Math.pow(t(),.48)*1.45+Math.abs(T.y)*.22)*st,Y[yt]=Math.pow(t(),2.4)*.22;const k=Z.clone().lerp(_t,Math.pow(t(),.52));G.set([k.r,k.g,k.b],yt*3)}const Et=new ee;Et.setAttribute("position",new Kt(H,3)),Et.setAttribute("color",new Kt(G,3));const St=new Ze(Et,new Ye({size:.1,map:Ae(),alphaTest:.008,vertexColors:!0,transparent:!0,opacity:0,depthWrite:!1,blending:Nt})),Ft=Math.round((P?160:280)*Math.min(1.45,K)),re=new Float32Array(Ft*3),I=new Float32Array(Ft*3),ce=new Float32Array(Ft);for(let yt=0;yt<Ft;yt++){const Jt=t()*Math.PI*2,ne=2*t()-1,D=Math.sqrt(1-ne*ne);I.set([Math.cos(Jt)*D,ne,Math.sin(Jt)*D],yt*3),ce[yt]=t()*Math.PI*2}const Wt=new ee;Wt.setAttribute("position",new Kt(re,3));const Ct=F?10845439:P?16769184:16766112,wt=new Ze(Wt,new Ye({color:Ct,size:P?.052:.072,map:Ae(),alphaTest:.01,transparent:!0,opacity:0,depthWrite:!1,blending:Nt}));let qt=null,ut=null;if(F){const yt=2.6+(h.simulation?.ejectaVelocityC||.2)*4.2,Jt=new ee;Jt.setAttribute("position",new Pe([0,-.12,0,0,-yt,0,0,.12,0,0,yt,0],3)),qt=new lc(Jt,new Cn({color:13234175,transparent:!0,opacity:0,depthWrite:!1,blending:Nt})),ut=new oe(new se({map:Ai(),color:12891391,transparent:!0,opacity:0,depthTest:!1,depthWrite:!1,blending:Nt}))}m.add(V,W,St,wt,j),qt&&m.add(qt),ut&&m.add(ut),m.userData.effect={innerFlash:W,photosphere:V,remnant:j,ejecta:St,ejectaDirections:xt,ejectaVelocity:pt,ejectaDelay:Y,shell:wt,shellDirections:I,shellNoise:ce,polarJets:qt,gravityWave:ut}}else if(h.visual==="tidal-disruption"){const P=qr({color:8773119,tilt:.22,phase:t()*Math.PI*2,visualScale:.86});P.userData.spinDirection=1;const F=new oe(new se({map:Ae(),color:16773577,transparent:!0,opacity:0,depthWrite:!1,blending:Nt}));F.scale.set(.28,.28,1);const U=new oe(new se({map:ze(),color:9366271,transparent:!0,opacity:0,depthTest:!1,depthWrite:!1,blending:Nt})),O=new oe(new se({map:Ai(),color:7068927,transparent:!0,opacity:0,depthWrite:!1,blending:Nt,rotation:t()*Math.PI}));O.scale.set(1.5,.48,1);const W=480,V=new Float32Array(W*3),j=new Float32Array(W),K=new Float32Array(W),et=new Float32Array(W*3),H=new kt(16380359),G=new kt(5623807);for(let Y=0;Y<W;Y++){const Z=t()<(h.simulation?.boundFraction||.5);j[Y]=Z?-t():t(),K[Y]=t()*Math.PI*2;const _t=H.clone().lerp(G,Math.pow(t(),.62));et.set([_t.r,_t.g,_t.b],Y*3)}const xt=new ee;xt.setAttribute("position",new Kt(V,3)),xt.setAttribute("color",new Kt(et,3));const pt=new Ze(xt,new Ye({size:.075,map:Ae(),alphaTest:.008,vertexColors:!0,transparent:!0,opacity:0,depthWrite:!1,blending:Nt}));m.add(U,O,pt,F,P),m.userData.effect={hole:P,starCore:F,flare:U,disk:O,debris:pt,debrisOffsets:j,debrisNoise:K}}else if(h.visual==="stellar-flare"){const P=new oe(new se({map:Ae(),color:16758618,transparent:!0,opacity:0,depthWrite:!1,blending:Nt})),F=new oe(new se({map:ze(),color:16742962,transparent:!0,opacity:0,depthWrite:!1,blending:Nt})),U=new oe(new se({map:Ai(),color:16765563,transparent:!0,opacity:0,depthWrite:!1,blending:Nt}));P.scale.set(.25,.25,1);const O=[];for(let H=0;H<3;H++){const G=[];for(let pt=0;pt<=72;pt++){const Y=pt/72*Math.PI;G.push(new z(Math.cos(Y)*(.42+H*.16),Math.sin(Y)*(.68+H*.18),Math.sin(Y*2)*.06))}const xt=new Ri(new ee().setFromPoints(G),new Cn({color:H===1?16773283:16751442,transparent:!0,opacity:0,depthWrite:!1,blending:Nt}));xt.rotation.y=H*1.86+t()*.35,O.push(xt)}const W=320,V=new Float32Array(W*3),j=new Float32Array(W*3);for(let H=0;H<W;H++){const G=t()*Math.PI*2,xt=rt(t,-.28,1),pt=Math.sqrt(1-Math.min(1,xt*xt));j.set([Math.cos(G)*pt,xt,Math.sin(G)*pt],H*3)}const K=new ee;K.setAttribute("position",new Kt(V,3));const et=new Ze(K,new Ye({color:16763248,size:.06,map:Ae(),alphaTest:.008,transparent:!0,opacity:0,depthWrite:!1,blending:Nt}));m.add(F,U,P,et,...O),m.userData.effect={starCore:P,halo:F,shock:U,loops:O,particles:et,particleDirections:j}}else if(h.visual==="stellar-collapse"){const P=new oe(new se({map:Ae(),color:16753755,transparent:!0,opacity:0,depthWrite:!1,blending:Nt})),F=new oe(new se({map:ze(),color:10114360,transparent:!0,opacity:0,depthWrite:!1,blending:Nt})),U=qr({color:10316632,tilt:-.18,phase:t()*Math.PI*2,visualScale:.72});U.userData.spinDirection=-1,U.visible=!1;const O=Math.round(180+(h.simulation?.ejectedEnvelopeFraction||.08)*920),W=new Float32Array(O*3),V=new Float32Array(O*3);for(let et=0;et<O;et++){const H=t()*Math.PI*2,G=t()*2-1,xt=Math.sqrt(1-G*G);V.set([Math.cos(H)*xt,G,Math.sin(H)*xt],et*3)}const j=new ee;j.setAttribute("position",new Kt(W,3));const K=new Ze(j,new Ye({color:9196347,size:.065,map:Ae(),alphaTest:.008,transparent:!0,opacity:0,depthWrite:!1,blending:Nt}));m.add(F,K,P,U),m.userData.effect={starCore:P,shroud:F,remnantHole:U,dust:K,dustDirections:V}}else if(h.visual==="pulsar"){const P=new oe(new se({map:Ae(),color:16055295,transparent:!0,opacity:0,depthWrite:!1,blending:Nt})),F=new oe(new se({map:ze(),color:4962815,transparent:!0,opacity:0,depthWrite:!1,blending:Nt})),U=new oe(new se({map:ze(),color:1472184,transparent:!0,opacity:0,depthWrite:!1,blending:Nt,rotation:t()*Math.PI})),O=new oe(new se({map:ze(),color:13233663,transparent:!0,opacity:0,depthWrite:!1,blending:Nt}));P.scale.set(.18,.18,1),U.scale.set(1.45,.58,1);const W=new ke;W.rotation.z=.58+t()*.32;const V=h.simulation?.model==="collapsar-jet"?nt.clamp(h.simulation.lorentzFactor/260,.7,1.75):h.simulation?.model==="quasar-duty-cycle"?nt.clamp(h.simulation.jetLorentzFactor/8,.7,1.7):1,j=Math.round(420*V),K=new Float32Array(j*3),et=new Float32Array(j*3);for(let Y=0;Y<j;Y++){const Z=Y%2?1:-1,_t=.1+Math.pow(t(),.66)*2.6*V,Et=.012+_t*.014,St=t()*Math.PI*2;K[Y*3]=Math.cos(St)*Et*t(),K[Y*3+1]=Z*_t,K[Y*3+2]=Math.sin(St)*Et*t();const Ft=.35+Math.pow(1-_t/2.8,.45)*.65;et.set([.38*Ft,.76*Ft,Ft],Y*3)}const H=new ee;H.setAttribute("position",new Kt(K,3)),H.setAttribute("color",new Kt(et,3));const G=new Ze(H,new Ye({size:.09,map:Ae(),alphaTest:.008,vertexColors:!0,transparent:!0,opacity:0,depthWrite:!1,blending:Nt}));W.add(G);const xt=[];for(let Y=0;Y<4;Y++){const Z=[],_t=.5+Y*.18;for(let St=0;St<=80;St++){const Ft=St/80*Math.PI*2;Z.push(new z(Math.cos(Ft)*_t,Math.sin(Ft)*_t*.34,Math.sin(Ft*2)*.08))}const Et=new Ri(new ee().setFromPoints(Z),new Cn({color:7524351,transparent:!0,opacity:0,depthWrite:!1,blending:Nt}));Et.rotation.set(t()*Math.PI,t()*Math.PI,t()*Math.PI),xt.push(Et),W.add(Et)}const pt=[];for(let Y=0;Y<8;Y++){const Z=new oe(new se({map:Ae(),color:10214911,transparent:!0,opacity:0,depthWrite:!1,blending:Nt}));Z.scale.set(.11,.11,1),Z.userData.offset=Y/8,Z.userData.side=Y%2?1:-1,pt.push(Z),W.add(Z)}m.add(U,F,O,P,W),m.userData.effect={core:P,halo:F,nebula:U,sweepGlow:O,rotor:W,jets:G,fieldLines:xt,knots:pt,jetPowerScale:V}}else if(h.visual==="black-hole-merger"){const P=(Ct,wt)=>{const qt=qr({color:Ct,tilt:rt(t,-.28,.28),phase:t()*Math.PI*2,visualScale:1.08});return qt.userData.spinDirection=wt,qt},F=new ke;F.rotation.set(.76,.18,.24);const U=P(16759408,1),O=P(10999807,-1),W=P(16767405,1);W.scale.setScalar(1.24),W.visible=!1;const V=Ct=>{const wt=new Float32Array(252),qt=new ee;return qt.setAttribute("position",new Kt(wt,3)),new Ri(qt,new Cn({color:Ct,transparent:!0,opacity:0,depthWrite:!1,blending:Nt}))},j=V(16751445),K=V(7979007);F.add(j,K,U,O,W);const et=new oe(new se({map:ze(),color:h.gasRich?16769717:14478079,transparent:!0,opacity:0,depthTest:!1,depthWrite:!1,blending:Nt})),H=new oe(new se({map:Ai(),color:16757871,transparent:!0,opacity:0,depthTest:!1,depthWrite:!1,blending:Nt}));H.visible=h.gasRich;const G=[10209535,13810175,7976959].map(Ct=>new oe(new se({map:Ai(),color:Ct,transparent:!0,opacity:0,depthTest:!1,depthWrite:!1,blending:Nt}))),xt=[];for(let Ct=0;Ct<6;Ct++){const wt=[];for(let ut=0;ut<160;ut++){const yt=ut/160*Math.PI*2,Jt=1+Math.cos(yt*2+Ct*.7)*.065;wt.push(new z(Math.cos(yt)*Jt,Math.sin(yt)*Jt,Math.sin(yt*2+Ct)*.055))}const qt=new Pd(new ee().setFromPoints(wt),new Cn({color:Ct%3===1?14205951:9422591,transparent:!0,opacity:0,depthTest:!1,depthWrite:!1,blending:Nt}));qt.rotation.set(.34+Ct*.47,.2+Ct*.39,Ct*.76),xt.push(qt),m.add(qt)}const pt=520,Y=new Float32Array(pt*3),Z=new Float32Array(pt*3),_t=new Float32Array(pt*3),Et=new kt(7979007),St=new kt(14732287);for(let Ct=0;Ct<pt;Ct++){const wt=t()*Math.PI*2,qt=rt(t,-1,1),ut=Math.sqrt(1-qt*qt);Z.set([Math.cos(wt)*ut,qt,Math.sin(wt)*ut],Ct*3);const yt=Et.clone().lerp(St,t());_t.set([yt.r,yt.g,yt.b],Ct*3)}const Ft=new ee;Ft.setAttribute("position",new Kt(Y,3)),Ft.setAttribute("color",new Kt(_t,3));const re=new Ze(Ft,new Ye({size:.075,map:Ae(),alphaTest:.008,vertexColors:!0,transparent:!0,opacity:0,depthTest:!1,depthWrite:!1,blending:Nt})),I=new ee;I.setAttribute("position",new Kt(new Float32Array(6),3));const ce=new Ri(I,new Cn({color:16766122,transparent:!0,opacity:0,depthWrite:!1,blending:Nt})),Wt=new z(te(t),te(t)*.45,te(t)).normalize();m.add(re,...G,H,F,et,ce),m.userData.effect={orbitalPlane:F,holeA:U,holeB:O,remnantHole:W,trailA:j,trailB:K,mergerGlow:et,gasEcho:H,waveHalos:G,wavefronts:xt,waveDust:re,waveDirections:Z,recoilTrail:ce,recoilVector:Wt,gasRich:h.gasRich}}const y=g(h,_),E=v(h,_,f),C=h.visual==="black-hole-merger"?y_(n,_.position,{seedValue:Rt.seedValue,eventIndex:f}):null,L=A_(n,_.position,h.simulation,Rt.seedValue,f),b=x(h,_,y,C,f),S=`${h.type}-${f}-${Rt.seed}`,R=I_(h.simulation);if(M.sourceDim<=.15&&h.visual!=="black-hole-merger"){An[_.index]=Math.min(An[_.index],y.impactAt);for(let P=0;P<we.sourceIndices.length;P++)we.sourceIndices[P]===_.index&&(we.birthAt[P]=1001)}R&&(h.persistUntil=h.start+h.duration,h.persistenceFadeDuration=8,Zo({random:t,massSolar:R,birthAt:y.impactAt,sourceIndex:_.index,originEventId:S})),Ni.push({...h,...y,civilizationNodeImpacts:b,civilizationImpacts:[],outcome:y.systemOutcome,waveSamples:E,gravityField:C,transientGravityField:L,group:m,sourceIndex:_.index,id:S,label:h.label})}),we.firstBirthAt=Math.min(...we.birthAt),ci.rotation.copy(Ee.rotation),ci.visible=!1}function nx(){const n=Bt("#cosmic-event-markers");n.innerHTML="",Ni.forEach(t=>{const e=document.createElement("button");e.type="button",e.className="event-marker",e.style.left=`${t.start/10}%`,e.style.setProperty("--event-color",t.color),e.setAttribute("aria-label",`${t.label}，${vh(t.start,Rt)}；${t.outcome}`),e.title=t.outcome,e.addEventListener("click",()=>{In=!1,Bt("#toggle-time").textContent="▶";const s={supernova:.14,nova:.2,kilonova:.28,pulsar:.54,"stellar-flare":.44,"tidal-disruption":.62,"stellar-collapse":.7,"black-hole-merger":.76}[t.visual]??.5;sr(t.start+t.duration*s,!0)}),n.appendChild(e)})}function ix(){J_();const n=rn(Rt.seed,410),t=Rt.speciesCount,e=un.length/3,i=Math.min(720,e),s=new Uint16Array(i),r=new Float32Array(i*3),a=e/i;for(let c=0;c<i;c++){const d=Math.min(e-1,Math.floor((c+n()*.86)*a)),u=d*3,p=c*3;s[c]=d,r[p]=un[u],r[p+1]=un[u+1],r[p+2]=un[u+2]}hn={start:390,end:1e3,step:1,habitatRemnantIndices:s,habitatPositions:r,adjacency:[],snapshots:[]};const o=[],l=Bt("#civilization-legend");l.innerHTML="";for(let c=0;c<t;c++){let d=Math.floor(n()*i),u=-1;for(let A=0;A<96;A++){const P=Math.floor(n()*i),F=P*3;let U=1/0;o.forEach(O=>{const W=O*3;U=Math.min(U,Math.hypot(r[F]-r[W],r[F+1]-r[W+1],r[F+2]-r[W+2]))}),U>u&&(u=U,d=P)}o.push(d);const p=s[d],g=p*3,x=new z(un[g],un[g+1],un[g+2]),v=Ll[c%Ll.length],h=new ee;h.setAttribute("position",new Kt(new Float32Array(i*3),3)),h.setDrawRange(0,0);const f=new Ye({color:v,size:.24,map:Ae(),alphaTest:.012,transparent:!0,opacity:.98,depthWrite:!1,blending:Nt}),m=new Ze(h,f);Ee.add(m),js.push(m);const _=n(),M=n(),y=rt(n,.72,1.36),E=rt(n,.68,1.32),C=t===1?0:c/(t-1),L=404+Math.round(C*72+n()*11),b=n()<.01,S=b?L+Math.round(rt(n,130,205)):1/0;ln.push({name:Dl[(Rt.seedValue+c)%Dl.length],color:v,home:x,homeNodeIndex:d,homeRemnantIndex:p,homeOffset:new z,hostRemnantIndices:new Uint16Array(i),hostOffsets:new Float32Array(i*3),displayCount:0,maxColonies:i,birth:L,highDimensional:b,ascensionAt:S,aggression:_,cooperation:M,expansionRate:y,resilience:E});const R=`#${v.toString(16).padStart(6,"0")}`;l.insertAdjacentHTML("beforeend",`<div class="civilization-item" style="--species:${R}" data-species="${c}"><i></i><span>${ln[c].name}</span><b>未诞生</b></div>`)}}function Hh(){if(_n!=="generator")return;Rt=bh(),Dh(Rt),zh(),kh(),Bt(".universe-data").scrollTop=0;const n=Bt("#creation-flash");n.classList.remove("is-flashing"),n.offsetWidth,n.classList.add("is-flashing"),document.querySelectorAll(".metric").forEach(t=>{t.style.animation="none",t.offsetWidth,t.style.animation=""})}function sx(){_n==="generator"&&(_n="explorer",document.body.classList.add("is-exploring"),Bt("#generator-view").classList.remove("is-active"),Bt("#explorer-view").classList.add("is-active"),Bt("#mode-label").textContent="深空航行中",Bt("#regenerate-top").style.opacity="0",Bt("#regenerate-top").style.pointerEvents="none",Bt("#civilization-panel").classList.remove("is-expanded"),Bt("#toggle-civilizations").setAttribute("aria-expanded","false"),Ee.visible=!0,Ee.scale.setScalar(.02),gn.enabled=!0,gn.target.set(0,0,0),Ce=0,Bt("#cosmic-timeline").value=Ce,sr(Ce,!0),Y_(),In=!0,Bt("#toggle-time").textContent="Ⅱ",Bt("#toggle-time").setAttribute("aria-label","暂停时间"),Xe={type:"enter",start:performance.now(),duration:ii?1:2100})}function rx(){_n==="explorer"&&(_n="generator",document.body.classList.remove("is-exploring"),Bt("#explorer-view").classList.remove("is-active"),Bt("#generator-view").classList.add("is-active"),Bt("#star-inspector").classList.remove("is-open"),Bt("#civilization-panel").classList.remove("is-expanded"),Bt("#toggle-civilizations").setAttribute("aria-expanded","false"),Bt("#mode-label").textContent="创世引擎在线",Bt("#regenerate-top").style.opacity="",Bt("#regenerate-top").style.pointerEvents="",In=!1,Bt("#toggle-time").textContent="▶",Bt("#toggle-time").setAttribute("aria-label","播放时间"),gn.enabled=!1,Dn.visible=!1,oi.visible=!1,Fi.visible=!1,ci.visible=!1,Xe={type:"leave",start:performance.now(),duration:ii?1:1300})}function kl(n){return n===1?1:1-Math.pow(2,-10*n)}function Hl(n){return n<.5?4*n*n*n:1-Math.pow(-2*n+2,3)/2}function ax(n){if(!Xe)return;const t=Math.min(1,(n-Xe.start)/Xe.duration);if(Xe.type==="birth"){const e=kl(t);Re.scale.setScalar(e),Re.rotation.y=-.3+(1-e)*1.5}if(Xe.type==="enter"){const e=Hl(t);Re.scale.setScalar(Math.max(.001,1-e*1.5)),Re.rotation.z+=.018*(1-t),Ee.scale.setScalar(.02+kl(t)*.98),Tn.position.z=32-e*12,Tn.position.y=.5+e*4.2}if(Xe.type==="leave"){const e=Hl(t);Ee.scale.setScalar(1-e*.96),Re.scale.setScalar(e),Tn.position.z=20+e*12,Tn.position.y=4.7-e*4.2}t===1&&(Xe.type==="enter"&&(Re.visible=!1),Xe.type==="leave"&&(Ee.visible=!1,Re.visible=!0,Re.scale.setScalar(1)),Xe=null)}function ox(n){if(_n!=="explorer"||Xe||!Es||Ce<250)return;ms.x=n.clientX/innerWidth*2-1,ms.y=-(n.clientY/innerHeight)*2+1,qo.setFromCamera(ms,Tn);const e=qo.intersectObject(Es).find(p=>Ce<An[p.index]+22);if(!e)return;const i=e.index,s=rn(Rt.seed,i*31),r=["M4 V","K1 III","G2 V","F8 V","A3 V","B1 Ia"],a=r[Math.floor(s()*r.length)],l={M:[2400,3700],K:[3700,5200],G:[5200,6e3],F:[6e3,7500],A:[7500,1e4],B:[1e4,3e4]}[a[0]],c=Math.round(rt(s,l[0],l[1])),d=Math.floor(s()*13),u=s()<Rt.lifeProbability?"候选信号":"未检出";Bt("#star-name").textContent=`RU-${String(i).padStart(5,"0")}`,Bt("#star-type").textContent=a,Bt("#star-temp").textContent=`${new Intl.NumberFormat("zh-CN").format(c)} K`,Bt("#star-planets").textContent=d,Bt("#star-life").textContent=u,Bt("#star-life").style.color=u==="候选信号"?"var(--accent)":"",Bt("#star-inspector").classList.add("is-open")}function cx(n){Ce+=n*B0(Ce)*Bh}function lx(){if(_n!=="explorer")return;const n=Bt("#civilization-panel"),t=!n.classList.contains("is-expanded");n.classList.toggle("is-expanded",t),Bt("#toggle-civilizations").setAttribute("aria-expanded",String(t))}function Gl(){return{mode:_n,epochEffectsGroup:Dn,primordialParticles:$o,primordialFactors:jo,primordialDirections:Bs,expansionStreaks:Ko,expansionDirections:cs,bangCore:$r,shockwaves:Ih,renderer:Un,scene:la,clickableStars:Es,originalGalaxyPositions:Li,stellarGravityState:us,universe:Rt,transition:Xe,galaxyGroup:Ee,starDeathThresholds:An,originalGalaxyColors:Nh,stellarDawnModel:Hn,dawnGas:zs,dawnSites:Oh,cosmicEvents:Ni,remnantGroup:oi,stellarRemnants:ea,originalRemnantPositions:un,remnantDynamics:we,blackHoleRemnants:ha,heatDeathGroup:Fi,coldPhotons:Ks,originalPhotonPositions:Uh,originalPhotonColors:Fh,cosmicFateGroup:Di,fateBubble:gs,fateGlow:Gs,cosmicEventGroup:ci}}function hx(n){const t=Rt.cosmicFate.type==="heat-death"?0:nt.smoothstep(Ce,Rt.cosmicFate.onsetAt,995);n.forEach((e,i)=>{const s=js[i],r=ln[i];s.visible=e.alive&&e.count>0,s.material.opacity=(e.ascended?.88:.98)*(1-t),s.material.size=e.ascended?.31:.24,s.material.color.setHex(e.ascended?15325183:r.color)})}function sr(n,t=!1){const e=O0(n,Rt,k0(Rt));if(Ce=e.position,$_(e),!Es)return;R_(Ce,Gl());const i=O_(hn,Ce);p_(i,{civilizationSimulation:hn,civilizationData:ln,civilizationGroups:js}),m_({clickableStars:Es,stellarRemnants:ea,remnantDynamics:we,cosmicPosition:Ce,civilizationData:ln,civilizationGroups:js}),Si=z_(Ce,i,ln,Ni),hx(Si),j_({position:Ce,simulationState:i,runtimeState:Si,civilizationData:ln}),Q_(i,ln);const s=Si.filter(c=>c.alive).length,r=Si.filter(c=>c.ascended).length,a=k_(i,Si,ln.length),o=C_(Ce,Gl()),l=z0({position:Ce,label:e.label,universe:Rt,activeEvent:o,activeRelationship:a,ascendedSpecies:r,activeSpecies:s,civilizationData:ln});K_(l,t)}function Gh(n){requestAnimationFrame(Gh);const t=Math.min(.05,(n-zl)/1e3);if(zl=n,ax(n),kr.lerp(ms,.04),_n==="generator"&&Re.visible&&!ii&&(Re.rotation.y+=45e-5,Re.rotation.x=.15+kr.y*.045,Re.position.x=kr.x*.42,Re.position.y=kr.y*.25),_n==="explorer"){In&&!Xe&&(cx(t),Ce>=1e3&&(Ce=1e3,In=!1,Bt("#toggle-time").textContent="▶",Bt("#toggle-time").setAttribute("aria-label","播放时间")),sr(Ce)),gn.update(),Dn.position.set(0,0,0),Fi.visible&&!ii&&(Ks.rotation.y+=35e-6,Ks.rotation.x+=9e-6),Di.visible&&!ii&&(gs.rotation.y+=.0014,gs.rotation.x-=7e-4,Gs.material.rotation=n*8e-5),ii||ha.forEach((i,s)=>{i.visible&&(os(i,n,i.userData.spinDirection||(s%2?-1:1)),i.userData.hawkingGlow.material.rotation=n*(25e-6+s*1e-6))}),P_(n,{cosmicEventGroup:ci,prefersReducedMotion:ii,cosmicEvents:Ni,camera:Tn}),gn.enabled||(Ee.rotation.y+=3e-4);const e=n*12e-5;Bt("#coord-x").textContent=`${Math.sin(e)<0?"−":"+"}${Math.abs(Math.sin(e)*9).toFixed(2)}`,Bt("#coord-y").textContent=`${Math.cos(e*.7)<0?"−":"+"}${Math.abs(Math.cos(e*.7)*9).toFixed(2)}`,Bt("#coord-z").textContent=`${Math.sin(e*.3)<0?"−":"+"}${Math.abs(Math.sin(e*.3)*3).toFixed(2)}`}Un.render(la,Tn)}window.addEventListener("pointermove",n=>{ms.x=n.clientX/innerWidth*2-1,ms.y=-(n.clientY/innerHeight)*2+1;const t=Bt("#cursor");t.style.left=`${n.clientX}px`,t.style.top=`${n.clientY}px`,t.style.opacity="1"});window.addEventListener("resize",()=>{Tn.aspect=innerWidth/innerHeight,Tn.updateProjectionMatrix(),Un.setSize(innerWidth,innerHeight),Un.setPixelRatio(Math.min(devicePixelRatio,2))});_c.addEventListener("click",ox);Bt("#regenerate-top").addEventListener("click",Hh);Bt("#enter-universe").addEventListener("click",sx);Bt("#close-inspector").addEventListener("click",()=>Bt("#star-inspector").classList.remove("is-open"));Bt("#toggle-civilizations").addEventListener("click",lx);Bt("#toggle-time").addEventListener("click",()=>{Ce>=1e3&&sr(0,!0),In=!In,Bt("#toggle-time").textContent=In?"Ⅱ":"▶",Bt("#toggle-time").setAttribute("aria-label",In?"暂停时间":"播放时间")});const zi=Bt("#cosmic-timeline"),na=zi.closest(".range-wrap");function Vh(){na.classList.add("is-scrubbing"),Lh(Number(zi.value))}function ua(){na.classList.contains("is-scrubbing")&&(na.classList.remove("is-scrubbing"),q_())}zi.addEventListener("pointerdown",Vh);window.addEventListener("pointerup",ua);window.addEventListener("pointercancel",ua);zi.addEventListener("keydown",n=>{["ArrowLeft","ArrowRight","Home","End","PageUp","PageDown"].includes(n.key)&&Vh()});zi.addEventListener("keyup",ua);zi.addEventListener("blur",ua);zi.addEventListener("input",n=>{In=!1,Bt("#toggle-time").textContent="▶",sr(n.target.value,!0),na.classList.contains("is-scrubbing")&&Lh(Number(n.target.value))});document.querySelectorAll(".speed-controls button").forEach(n=>{n.addEventListener("click",()=>{Bh=Number(n.dataset.speed),document.querySelectorAll(".speed-controls button").forEach(t=>{const e=t===n;t.classList.toggle("is-active",e),t.setAttribute("aria-pressed",String(e))})})});document.addEventListener("keydown",n=>{if(n.key.toLowerCase()==="r"&&_n==="generator"&&Hh(),n.key==="Escape"&&_n==="explorer"){const t=Bt("#civilization-panel");t.classList.contains("is-expanded")?(t.classList.remove("is-expanded"),Bt("#toggle-civilizations").setAttribute("aria-expanded","false")):rx()}});Rt=bh();Dh(Rt);zh();kh();Gh(performance.now());
