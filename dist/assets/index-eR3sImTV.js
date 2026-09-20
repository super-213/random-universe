(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function e(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=e(r);fetch(r.href,s)}})();const Eo="180",$i={ROTATE:0,DOLLY:1,PAN:2},Yi={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},gh=0,qo=1,_h=2,pc=1,xh=2,Pn=3,ti=0,We=1,Dn=2,Zn=0,_i=1,Qt=2,$o=3,jo=4,vh=5,pi=100,Mh=101,yh=102,Sh=103,Eh=104,bh=200,Th=201,Ah=202,wh=203,Ea=204,ba=205,Rh=206,Ch=207,Ph=208,Dh=209,Lh=210,Ih=211,Uh=212,Nh=213,Fh=214,Ta=0,Aa=1,wa=2,Ji=3,Ra=4,Ca=5,Pa=6,Da=7,mc=0,Oh=1,Bh=2,Jn=0,zh=1,kh=2,Hh=3,gc=4,Gh=5,Vh=6,Wh=7,_c=300,Qi=301,tr=302,La=303,Ia=304,Is=306,Ua=1e3,gi=1001,Na=1002,gn=1003,Xh=1004,zr=1005,dn=1006,Gs=1007,jn=1008,Fn=1009,xc=1010,vc=1011,vr=1012,bo=1013,Mi=1014,Ln=1015,Pr=1016,To=1017,Ao=1018,Mr=1020,Mc=35902,yc=35899,Sc=1021,Ec=1022,pn=1023,yr=1026,Sr=1027,bc=1028,wo=1029,Tc=1030,Ro=1031,Co=1033,xs=33776,vs=33777,Ms=33778,ys=33779,Fa=35840,Oa=35841,Ba=35842,za=35843,ka=36196,Ha=37492,Ga=37496,Va=37808,Wa=37809,Xa=37810,Ya=37811,qa=37812,$a=37813,ja=37814,Ka=37815,Za=37816,Ja=37817,Qa=37818,to=37819,eo=37820,no=37821,io=36492,ro=36494,so=36495,ao=36283,oo=36284,lo=36285,co=36286,Yh=3200,qh=3201,$h=0,jh=1,qn="",De="srgb",er="srgb-linear",Ts="linear",le="srgb",wi=7680,Ko=519,Kh=512,Zh=513,Jh=514,Ac=515,Qh=516,tu=517,eu=518,nu=519,ho=35044,Zo="300 es",Mn=2e3,As=2001;class bi{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(e)===-1&&i[t].push(e)}hasEventListener(t,e){const i=this._listeners;return i===void 0?!1:i[t]!==void 0&&i[t].indexOf(e)!==-1}removeEventListener(t,e){const i=this._listeners;if(i===void 0)return;const r=i[t];if(r!==void 0){const s=r.indexOf(e);s!==-1&&r.splice(s,1)}}dispatchEvent(t){const e=this._listeners;if(e===void 0)return;const i=e[t.type];if(i!==void 0){t.target=this;const r=i.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,t);t.target=null}}}const Le=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Jo=1234567;const gr=Math.PI/180,Er=180/Math.PI;function In(){const n=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Le[n&255]+Le[n>>8&255]+Le[n>>16&255]+Le[n>>24&255]+"-"+Le[t&255]+Le[t>>8&255]+"-"+Le[t>>16&15|64]+Le[t>>24&255]+"-"+Le[e&63|128]+Le[e>>8&255]+"-"+Le[e>>16&255]+Le[e>>24&255]+Le[i&255]+Le[i>>8&255]+Le[i>>16&255]+Le[i>>24&255]).toLowerCase()}function Kt(n,t,e){return Math.max(t,Math.min(e,n))}function Po(n,t){return(n%t+t)%t}function iu(n,t,e,i,r){return i+(n-t)*(r-i)/(e-t)}function ru(n,t,e){return n!==t?(e-n)/(t-n):0}function _r(n,t,e){return(1-e)*n+e*t}function su(n,t,e,i){return _r(n,t,1-Math.exp(-e*i))}function au(n,t=1){return t-Math.abs(Po(n,t*2)-t)}function ou(n,t,e){return n<=t?0:n>=e?1:(n=(n-t)/(e-t),n*n*(3-2*n))}function lu(n,t,e){return n<=t?0:n>=e?1:(n=(n-t)/(e-t),n*n*n*(n*(n*6-15)+10))}function cu(n,t){return n+Math.floor(Math.random()*(t-n+1))}function hu(n,t){return n+Math.random()*(t-n)}function uu(n){return n*(.5-Math.random())}function fu(n){n!==void 0&&(Jo=n);let t=Jo+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function du(n){return n*gr}function pu(n){return n*Er}function mu(n){return(n&n-1)===0&&n!==0}function gu(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function _u(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function xu(n,t,e,i,r){const s=Math.cos,a=Math.sin,o=s(e/2),c=a(e/2),l=s((t+i)/2),h=a((t+i)/2),f=s((t-i)/2),d=a((t-i)/2),m=s((i-t)/2),g=a((i-t)/2);switch(r){case"XYX":n.set(o*h,c*f,c*d,o*l);break;case"YZY":n.set(c*d,o*h,c*f,o*l);break;case"ZXZ":n.set(c*f,c*d,o*h,o*l);break;case"XZX":n.set(o*h,c*g,c*m,o*l);break;case"YXY":n.set(c*m,o*h,c*g,o*l);break;case"ZYZ":n.set(c*g,c*m,o*h,o*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function fn(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function ae(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}const Pt={DEG2RAD:gr,RAD2DEG:Er,generateUUID:In,clamp:Kt,euclideanModulo:Po,mapLinear:iu,inverseLerp:ru,lerp:_r,damp:su,pingpong:au,smoothstep:ou,smootherstep:lu,randInt:cu,randFloat:hu,randFloatSpread:uu,seededRandom:fu,degToRad:du,radToDeg:pu,isPowerOfTwo:mu,ceilPowerOfTwo:gu,floorPowerOfTwo:_u,setQuaternionFromProperEuler:xu,normalize:ae,denormalize:fn};class Ot{constructor(t=0,e=0){Ot.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,i=this.y,r=t.elements;return this.x=r[0]*e+r[3]*i+r[6],this.y=r[1]*e+r[4]*i+r[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Kt(this.x,t.x,e.x),this.y=Kt(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=Kt(this.x,t,e),this.y=Kt(this.y,t,e),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Kt(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(Kt(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y;return e*e+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const i=Math.cos(e),r=Math.sin(e),s=this.x-t.x,a=this.y-t.y;return this.x=s*i-a*r+t.x,this.y=s*r+a*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class ei{constructor(t=0,e=0,i=0,r=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=i,this._w=r}static slerpFlat(t,e,i,r,s,a,o){let c=i[r+0],l=i[r+1],h=i[r+2],f=i[r+3];const d=s[a+0],m=s[a+1],g=s[a+2],M=s[a+3];if(o===0){t[e+0]=c,t[e+1]=l,t[e+2]=h,t[e+3]=f;return}if(o===1){t[e+0]=d,t[e+1]=m,t[e+2]=g,t[e+3]=M;return}if(f!==M||c!==d||l!==m||h!==g){let p=1-o;const u=c*d+l*m+h*g+f*M,b=u>=0?1:-1,y=1-u*u;if(y>Number.EPSILON){const A=Math.sqrt(y),E=Math.atan2(A,u*b);p=Math.sin(p*E)/A,o=Math.sin(o*E)/A}const v=o*b;if(c=c*p+d*v,l=l*p+m*v,h=h*p+g*v,f=f*p+M*v,p===1-o){const A=1/Math.sqrt(c*c+l*l+h*h+f*f);c*=A,l*=A,h*=A,f*=A}}t[e]=c,t[e+1]=l,t[e+2]=h,t[e+3]=f}static multiplyQuaternionsFlat(t,e,i,r,s,a){const o=i[r],c=i[r+1],l=i[r+2],h=i[r+3],f=s[a],d=s[a+1],m=s[a+2],g=s[a+3];return t[e]=o*g+h*f+c*m-l*d,t[e+1]=c*g+h*d+l*f-o*m,t[e+2]=l*g+h*m+o*d-c*f,t[e+3]=h*g-o*f-c*d-l*m,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,i,r){return this._x=t,this._y=e,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const i=t._x,r=t._y,s=t._z,a=t._order,o=Math.cos,c=Math.sin,l=o(i/2),h=o(r/2),f=o(s/2),d=c(i/2),m=c(r/2),g=c(s/2);switch(a){case"XYZ":this._x=d*h*f+l*m*g,this._y=l*m*f-d*h*g,this._z=l*h*g+d*m*f,this._w=l*h*f-d*m*g;break;case"YXZ":this._x=d*h*f+l*m*g,this._y=l*m*f-d*h*g,this._z=l*h*g-d*m*f,this._w=l*h*f+d*m*g;break;case"ZXY":this._x=d*h*f-l*m*g,this._y=l*m*f+d*h*g,this._z=l*h*g+d*m*f,this._w=l*h*f-d*m*g;break;case"ZYX":this._x=d*h*f-l*m*g,this._y=l*m*f+d*h*g,this._z=l*h*g-d*m*f,this._w=l*h*f+d*m*g;break;case"YZX":this._x=d*h*f+l*m*g,this._y=l*m*f+d*h*g,this._z=l*h*g-d*m*f,this._w=l*h*f-d*m*g;break;case"XZY":this._x=d*h*f-l*m*g,this._y=l*m*f-d*h*g,this._z=l*h*g+d*m*f,this._w=l*h*f+d*m*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const i=e/2,r=Math.sin(i);return this._x=t.x*r,this._y=t.y*r,this._z=t.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,i=e[0],r=e[4],s=e[8],a=e[1],o=e[5],c=e[9],l=e[2],h=e[6],f=e[10],d=i+o+f;if(d>0){const m=.5/Math.sqrt(d+1);this._w=.25/m,this._x=(h-c)*m,this._y=(s-l)*m,this._z=(a-r)*m}else if(i>o&&i>f){const m=2*Math.sqrt(1+i-o-f);this._w=(h-c)/m,this._x=.25*m,this._y=(r+a)/m,this._z=(s+l)/m}else if(o>f){const m=2*Math.sqrt(1+o-i-f);this._w=(s-l)/m,this._x=(r+a)/m,this._y=.25*m,this._z=(c+h)/m}else{const m=2*Math.sqrt(1+f-i-o);this._w=(a-r)/m,this._x=(s+l)/m,this._y=(c+h)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let i=t.dot(e)+1;return i<1e-8?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Kt(this.dot(t),-1,1)))}rotateTowards(t,e){const i=this.angleTo(t);if(i===0)return this;const r=Math.min(1,e/i);return this.slerp(t,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const i=t._x,r=t._y,s=t._z,a=t._w,o=e._x,c=e._y,l=e._z,h=e._w;return this._x=i*h+a*o+r*l-s*c,this._y=r*h+a*c+s*o-i*l,this._z=s*h+a*l+i*c-r*o,this._w=a*h-i*o-r*c-s*l,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const i=this._x,r=this._y,s=this._z,a=this._w;let o=a*t._w+i*t._x+r*t._y+s*t._z;if(o<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,o=-o):this.copy(t),o>=1)return this._w=a,this._x=i,this._y=r,this._z=s,this;const c=1-o*o;if(c<=Number.EPSILON){const m=1-e;return this._w=m*a+e*this._w,this._x=m*i+e*this._x,this._y=m*r+e*this._y,this._z=m*s+e*this._z,this.normalize(),this}const l=Math.sqrt(c),h=Math.atan2(l,o),f=Math.sin((1-e)*h)/l,d=Math.sin(e*h)/l;return this._w=a*f+this._w*d,this._x=i*f+this._x*d,this._y=r*f+this._y*d,this._z=s*f+this._z*d,this._onChangeCallback(),this}slerpQuaternions(t,e,i){return this.copy(t).slerp(e,i)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(t),r*Math.cos(t),s*Math.sin(e),s*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class U{constructor(t=0,e=0,i=0){U.prototype.isVector3=!0,this.x=t,this.y=e,this.z=i}set(t,e,i){return i===void 0&&(i=this.z),this.x=t,this.y=e,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Qo.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Qo.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,i=this.y,r=this.z,s=t.elements;return this.x=s[0]*e+s[3]*i+s[6]*r,this.y=s[1]*e+s[4]*i+s[7]*r,this.z=s[2]*e+s[5]*i+s[8]*r,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,i=this.y,r=this.z,s=t.elements,a=1/(s[3]*e+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*e+s[4]*i+s[8]*r+s[12])*a,this.y=(s[1]*e+s[5]*i+s[9]*r+s[13])*a,this.z=(s[2]*e+s[6]*i+s[10]*r+s[14])*a,this}applyQuaternion(t){const e=this.x,i=this.y,r=this.z,s=t.x,a=t.y,o=t.z,c=t.w,l=2*(a*r-o*i),h=2*(o*e-s*r),f=2*(s*i-a*e);return this.x=e+c*l+a*f-o*h,this.y=i+c*h+o*l-s*f,this.z=r+c*f+s*h-a*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,i=this.y,r=this.z,s=t.elements;return this.x=s[0]*e+s[4]*i+s[8]*r,this.y=s[1]*e+s[5]*i+s[9]*r,this.z=s[2]*e+s[6]*i+s[10]*r,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Kt(this.x,t.x,e.x),this.y=Kt(this.y,t.y,e.y),this.z=Kt(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=Kt(this.x,t,e),this.y=Kt(this.y,t,e),this.z=Kt(this.z,t,e),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Kt(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const i=t.x,r=t.y,s=t.z,a=e.x,o=e.y,c=e.z;return this.x=r*c-s*o,this.y=s*a-i*c,this.z=i*o-r*a,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const i=t.dot(this)/e;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return Vs.copy(this).projectOnVector(t),this.sub(Vs)}reflect(t){return this.sub(Vs.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(Kt(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y,r=this.z-t.z;return e*e+i*i+r*r}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,i){const r=Math.sin(e)*t;return this.x=r*Math.sin(i),this.y=Math.cos(e)*t,this.z=r*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,i){return this.x=t*Math.sin(e),this.y=i,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),r=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=i,this.z=r,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,i=Math.sqrt(1-e*e);return this.x=i*Math.cos(t),this.y=e,this.z=i*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Vs=new U,Qo=new ei;class Wt{constructor(t,e,i,r,s,a,o,c,l){Wt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,i,r,s,a,o,c,l)}set(t,e,i,r,s,a,o,c,l){const h=this.elements;return h[0]=t,h[1]=r,h[2]=o,h[3]=e,h[4]=s,h[5]=c,h[6]=i,h[7]=a,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],this}extractBasis(t,e,i){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,r=e.elements,s=this.elements,a=i[0],o=i[3],c=i[6],l=i[1],h=i[4],f=i[7],d=i[2],m=i[5],g=i[8],M=r[0],p=r[3],u=r[6],b=r[1],y=r[4],v=r[7],A=r[2],E=r[5],w=r[8];return s[0]=a*M+o*b+c*A,s[3]=a*p+o*y+c*E,s[6]=a*u+o*v+c*w,s[1]=l*M+h*b+f*A,s[4]=l*p+h*y+f*E,s[7]=l*u+h*v+f*w,s[2]=d*M+m*b+g*A,s[5]=d*p+m*y+g*E,s[8]=d*u+m*v+g*w,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[1],r=t[2],s=t[3],a=t[4],o=t[5],c=t[6],l=t[7],h=t[8];return e*a*h-e*o*l-i*s*h+i*o*c+r*s*l-r*a*c}invert(){const t=this.elements,e=t[0],i=t[1],r=t[2],s=t[3],a=t[4],o=t[5],c=t[6],l=t[7],h=t[8],f=h*a-o*l,d=o*c-h*s,m=l*s-a*c,g=e*f+i*d+r*m;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const M=1/g;return t[0]=f*M,t[1]=(r*l-h*i)*M,t[2]=(o*i-r*a)*M,t[3]=d*M,t[4]=(h*e-r*c)*M,t[5]=(r*s-o*e)*M,t[6]=m*M,t[7]=(i*c-l*e)*M,t[8]=(a*e-i*s)*M,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,i,r,s,a,o){const c=Math.cos(s),l=Math.sin(s);return this.set(i*c,i*l,-i*(c*a+l*o)+a+t,-r*l,r*c,-r*(-l*a+c*o)+o+e,0,0,1),this}scale(t,e){return this.premultiply(Ws.makeScale(t,e)),this}rotate(t){return this.premultiply(Ws.makeRotation(-t)),this}translate(t,e){return this.premultiply(Ws.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,i,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,i=t.elements;for(let r=0;r<9;r++)if(e[r]!==i[r])return!1;return!0}fromArray(t,e=0){for(let i=0;i<9;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Ws=new Wt;function wc(n){for(let t=n.length-1;t>=0;--t)if(n[t]>=65535)return!0;return!1}function ws(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function vu(){const n=ws("canvas");return n.style.display="block",n}const tl={};function br(n){n in tl||(tl[n]=!0,console.warn(n))}function Mu(n,t,e){return new Promise(function(i,r){function s(){switch(n.clientWaitSync(t,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:r();break;case n.TIMEOUT_EXPIRED:setTimeout(s,e);break;default:i()}}setTimeout(s,e)})}const el=new Wt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),nl=new Wt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function yu(){const n={enabled:!0,workingColorSpace:er,spaces:{},convert:function(r,s,a){return this.enabled===!1||s===a||!s||!a||(this.spaces[s].transfer===le&&(r.r=Un(r.r),r.g=Un(r.g),r.b=Un(r.b)),this.spaces[s].primaries!==this.spaces[a].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===le&&(r.r=ji(r.r),r.g=ji(r.g),r.b=ji(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===qn?Ts:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,a){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,s){return br("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),n.workingToColorSpace(r,s)},toWorkingColorSpace:function(r,s){return br("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),n.colorSpaceToWorking(r,s)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[er]:{primaries:t,whitePoint:i,transfer:Ts,toXYZ:el,fromXYZ:nl,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:De},outputColorSpaceConfig:{drawingBufferColorSpace:De}},[De]:{primaries:t,whitePoint:i,transfer:le,toXYZ:el,fromXYZ:nl,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:De}}}),n}const ie=yu();function Un(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function ji(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let Ri;class Su{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let i;if(t instanceof HTMLCanvasElement)i=t;else{Ri===void 0&&(Ri=ws("canvas")),Ri.width=t.width,Ri.height=t.height;const r=Ri.getContext("2d");t instanceof ImageData?r.putImageData(t,0,0):r.drawImage(t,0,0,t.width,t.height),i=Ri}return i.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=ws("canvas");e.width=t.width,e.height=t.height;const i=e.getContext("2d");i.drawImage(t,0,0,t.width,t.height);const r=i.getImageData(0,0,t.width,t.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=Un(s[a]/255)*255;return i.putImageData(r,0,0),e}else if(t.data){const e=t.data.slice(0);for(let i=0;i<e.length;i++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[i]=Math.floor(Un(e[i]/255)*255):e[i]=Un(e[i]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let Eu=0;class Do{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Eu++}),this.uuid=In(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):e instanceof VideoFrame?t.set(e.displayHeight,e.displayWidth,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push(Xs(r[a].image)):s.push(Xs(r[a]))}else s=Xs(r);i.url=s}return e||(t.images[this.uuid]=i),i}}function Xs(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?Su.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let bu=0;const Ys=new U;class ke extends bi{constructor(t=ke.DEFAULT_IMAGE,e=ke.DEFAULT_MAPPING,i=gi,r=gi,s=dn,a=jn,o=pn,c=Fn,l=ke.DEFAULT_ANISOTROPY,h=qn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:bu++}),this.uuid=In(),this.name="",this.source=new Do(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new Ot(0,0),this.repeat=new Ot(1,1),this.center=new Ot(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Wt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Ys).x}get height(){return this.source.getSize(Ys).y}get depth(){return this.source.getSize(Ys).z}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const e in t){const i=t[e];if(i===void 0){console.warn(`THREE.Texture.setValues(): parameter '${e}' has value of undefined.`);continue}const r=this[e];if(r===void 0){console.warn(`THREE.Texture.setValues(): property '${e}' does not exist.`);continue}r&&i&&r.isVector2&&i.isVector2||r&&i&&r.isVector3&&i.isVector3||r&&i&&r.isMatrix3&&i.isMatrix3?r.copy(i):this[e]=i}}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),e||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==_c)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Ua:t.x=t.x-Math.floor(t.x);break;case gi:t.x=t.x<0?0:1;break;case Na:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Ua:t.y=t.y-Math.floor(t.y);break;case gi:t.y=t.y<0?0:1;break;case Na:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}ke.DEFAULT_IMAGE=null;ke.DEFAULT_MAPPING=_c;ke.DEFAULT_ANISOTROPY=1;class ve{constructor(t=0,e=0,i=0,r=1){ve.prototype.isVector4=!0,this.x=t,this.y=e,this.z=i,this.w=r}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,i,r){return this.x=t,this.y=e,this.z=i,this.w=r,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,i=this.y,r=this.z,s=this.w,a=t.elements;return this.x=a[0]*e+a[4]*i+a[8]*r+a[12]*s,this.y=a[1]*e+a[5]*i+a[9]*r+a[13]*s,this.z=a[2]*e+a[6]*i+a[10]*r+a[14]*s,this.w=a[3]*e+a[7]*i+a[11]*r+a[15]*s,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,i,r,s;const c=t.elements,l=c[0],h=c[4],f=c[8],d=c[1],m=c[5],g=c[9],M=c[2],p=c[6],u=c[10];if(Math.abs(h-d)<.01&&Math.abs(f-M)<.01&&Math.abs(g-p)<.01){if(Math.abs(h+d)<.1&&Math.abs(f+M)<.1&&Math.abs(g+p)<.1&&Math.abs(l+m+u-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const y=(l+1)/2,v=(m+1)/2,A=(u+1)/2,E=(h+d)/4,w=(f+M)/4,C=(g+p)/4;return y>v&&y>A?y<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(y),r=E/i,s=w/i):v>A?v<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(v),i=E/r,s=C/r):A<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(A),i=w/s,r=C/s),this.set(i,r,s,e),this}let b=Math.sqrt((p-g)*(p-g)+(f-M)*(f-M)+(d-h)*(d-h));return Math.abs(b)<.001&&(b=1),this.x=(p-g)/b,this.y=(f-M)/b,this.z=(d-h)/b,this.w=Math.acos((l+m+u-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Kt(this.x,t.x,e.x),this.y=Kt(this.y,t.y,e.y),this.z=Kt(this.z,t.z,e.z),this.w=Kt(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=Kt(this.x,t,e),this.y=Kt(this.y,t,e),this.z=Kt(this.z,t,e),this.w=Kt(this.w,t,e),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Kt(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this.w=t.w+(e.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Tu extends bi{constructor(t=1,e=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:dn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},i),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=i.depth,this.scissor=new ve(0,0,t,e),this.scissorTest=!1,this.viewport=new ve(0,0,t,e);const r={width:t,height:e,depth:i.depth},s=new ke(r);this.textures=[];const a=i.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}_setTextureOptions(t={}){const e={minFilter:dn,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,i=1){if(this.width!==t||this.height!==e||this.depth!==i){this.width=t,this.height=e,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=t,this.textures[r].image.height=e,this.textures[r].image.depth=i,this.textures[r].isArrayTexture=this.textures[r].image.depth>1;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,i=t.textures.length;e<i;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;const r=Object.assign({},t.textures[e].image);this.textures[e].source=new Do(r)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class yi extends Tu{constructor(t=1,e=1,i={}){super(t,e,i),this.isWebGLRenderTarget=!0}}class Rc extends ke{constructor(t=null,e=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:i,depth:r},this.magFilter=gn,this.minFilter=gn,this.wrapR=gi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class Au extends ke{constructor(t=null,e=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:i,depth:r},this.magFilter=gn,this.minFilter=gn,this.wrapR=gi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Dr{constructor(t=new U(1/0,1/0,1/0),e=new U(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e+=3)this.expandByPoint(ln.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,i=t.count;e<i;e++)this.expandByPoint(ln.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const i=ln.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const i=t.geometry;if(i!==void 0){const s=i.getAttribute("position");if(e===!0&&s!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,ln):ln.fromBufferAttribute(s,a),ln.applyMatrix4(t.matrixWorld),this.expandByPoint(ln);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),kr.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),kr.copy(i.boundingBox)),kr.applyMatrix4(t.matrixWorld),this.union(kr)}const r=t.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,ln),ln.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,i;return t.normal.x>0?(e=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),e<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(sr),Hr.subVectors(this.max,sr),Ci.subVectors(t.a,sr),Pi.subVectors(t.b,sr),Di.subVectors(t.c,sr),zn.subVectors(Pi,Ci),kn.subVectors(Di,Pi),si.subVectors(Ci,Di);let e=[0,-zn.z,zn.y,0,-kn.z,kn.y,0,-si.z,si.y,zn.z,0,-zn.x,kn.z,0,-kn.x,si.z,0,-si.x,-zn.y,zn.x,0,-kn.y,kn.x,0,-si.y,si.x,0];return!qs(e,Ci,Pi,Di,Hr)||(e=[1,0,0,0,1,0,0,0,1],!qs(e,Ci,Pi,Di,Hr))?!1:(Gr.crossVectors(zn,kn),e=[Gr.x,Gr.y,Gr.z],qs(e,Ci,Pi,Di,Hr))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,ln).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(ln).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Tn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Tn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Tn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Tn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Tn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Tn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Tn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Tn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Tn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const Tn=[new U,new U,new U,new U,new U,new U,new U,new U],ln=new U,kr=new Dr,Ci=new U,Pi=new U,Di=new U,zn=new U,kn=new U,si=new U,sr=new U,Hr=new U,Gr=new U,ai=new U;function qs(n,t,e,i,r){for(let s=0,a=n.length-3;s<=a;s+=3){ai.fromArray(n,s);const o=r.x*Math.abs(ai.x)+r.y*Math.abs(ai.y)+r.z*Math.abs(ai.z),c=t.dot(ai),l=e.dot(ai),h=i.dot(ai);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>o)return!1}return!0}const wu=new Dr,ar=new U,$s=new U;class Lr{constructor(t=new U,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const i=this.center;e!==void 0?i.copy(e):wu.setFromPoints(t).getCenter(i);let r=0;for(let s=0,a=t.length;s<a;s++)r=Math.max(r,i.distanceToSquared(t[s]));return this.radius=Math.sqrt(r),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const i=this.center.distanceToSquared(t);return e.copy(t),i>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;ar.subVectors(t,this.center);const e=ar.lengthSq();if(e>this.radius*this.radius){const i=Math.sqrt(e),r=(i-this.radius)*.5;this.center.addScaledVector(ar,r/i),this.radius+=r}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):($s.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(ar.copy(t.center).add($s)),this.expandByPoint(ar.copy(t.center).sub($s))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}const An=new U,js=new U,Vr=new U,Hn=new U,Ks=new U,Wr=new U,Zs=new U;class Ir{constructor(t=new U,e=new U(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,An)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const i=e.dot(this.direction);return i<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=An.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(An.copy(this.origin).addScaledVector(this.direction,e),An.distanceToSquared(t))}distanceSqToSegment(t,e,i,r){js.copy(t).add(e).multiplyScalar(.5),Vr.copy(e).sub(t).normalize(),Hn.copy(this.origin).sub(js);const s=t.distanceTo(e)*.5,a=-this.direction.dot(Vr),o=Hn.dot(this.direction),c=-Hn.dot(Vr),l=Hn.lengthSq(),h=Math.abs(1-a*a);let f,d,m,g;if(h>0)if(f=a*c-o,d=a*o-c,g=s*h,f>=0)if(d>=-g)if(d<=g){const M=1/h;f*=M,d*=M,m=f*(f+a*d+2*o)+d*(a*f+d+2*c)+l}else d=s,f=Math.max(0,-(a*d+o)),m=-f*f+d*(d+2*c)+l;else d=-s,f=Math.max(0,-(a*d+o)),m=-f*f+d*(d+2*c)+l;else d<=-g?(f=Math.max(0,-(-a*s+o)),d=f>0?-s:Math.min(Math.max(-s,-c),s),m=-f*f+d*(d+2*c)+l):d<=g?(f=0,d=Math.min(Math.max(-s,-c),s),m=d*(d+2*c)+l):(f=Math.max(0,-(a*s+o)),d=f>0?s:Math.min(Math.max(-s,-c),s),m=-f*f+d*(d+2*c)+l);else d=a>0?-s:s,f=Math.max(0,-(a*d+o)),m=-f*f+d*(d+2*c)+l;return i&&i.copy(this.origin).addScaledVector(this.direction,f),r&&r.copy(js).addScaledVector(Vr,d),m}intersectSphere(t,e){An.subVectors(t.center,this.origin);const i=An.dot(this.direction),r=An.dot(An)-i*i,s=t.radius*t.radius;if(r>s)return null;const a=Math.sqrt(s-r),o=i-a,c=i+a;return c<0?null:o<0?this.at(c,e):this.at(o,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(t.normal)+t.constant)/e;return i>=0?i:null}intersectPlane(t,e){const i=this.distanceToPlane(t);return i===null?null:this.at(i,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let i,r,s,a,o,c;const l=1/this.direction.x,h=1/this.direction.y,f=1/this.direction.z,d=this.origin;return l>=0?(i=(t.min.x-d.x)*l,r=(t.max.x-d.x)*l):(i=(t.max.x-d.x)*l,r=(t.min.x-d.x)*l),h>=0?(s=(t.min.y-d.y)*h,a=(t.max.y-d.y)*h):(s=(t.max.y-d.y)*h,a=(t.min.y-d.y)*h),i>a||s>r||((s>i||isNaN(i))&&(i=s),(a<r||isNaN(r))&&(r=a),f>=0?(o=(t.min.z-d.z)*f,c=(t.max.z-d.z)*f):(o=(t.max.z-d.z)*f,c=(t.min.z-d.z)*f),i>c||o>r)||((o>i||i!==i)&&(i=o),(c<r||r!==r)&&(r=c),r<0)?null:this.at(i>=0?i:r,e)}intersectsBox(t){return this.intersectBox(t,An)!==null}intersectTriangle(t,e,i,r,s){Ks.subVectors(e,t),Wr.subVectors(i,t),Zs.crossVectors(Ks,Wr);let a=this.direction.dot(Zs),o;if(a>0){if(r)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Hn.subVectors(this.origin,t);const c=o*this.direction.dot(Wr.crossVectors(Hn,Wr));if(c<0)return null;const l=o*this.direction.dot(Ks.cross(Hn));if(l<0||c+l>a)return null;const h=-o*Hn.dot(Zs);return h<0?null:this.at(h/a,s)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ge{constructor(t,e,i,r,s,a,o,c,l,h,f,d,m,g,M,p){ge.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,i,r,s,a,o,c,l,h,f,d,m,g,M,p)}set(t,e,i,r,s,a,o,c,l,h,f,d,m,g,M,p){const u=this.elements;return u[0]=t,u[4]=e,u[8]=i,u[12]=r,u[1]=s,u[5]=a,u[9]=o,u[13]=c,u[2]=l,u[6]=h,u[10]=f,u[14]=d,u[3]=m,u[7]=g,u[11]=M,u[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ge().fromArray(this.elements)}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],e[9]=i[9],e[10]=i[10],e[11]=i[11],e[12]=i[12],e[13]=i[13],e[14]=i[14],e[15]=i[15],this}copyPosition(t){const e=this.elements,i=t.elements;return e[12]=i[12],e[13]=i[13],e[14]=i[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,i){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(t,e,i){return this.set(t.x,e.x,i.x,0,t.y,e.y,i.y,0,t.z,e.z,i.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,i=t.elements,r=1/Li.setFromMatrixColumn(t,0).length(),s=1/Li.setFromMatrixColumn(t,1).length(),a=1/Li.setFromMatrixColumn(t,2).length();return e[0]=i[0]*r,e[1]=i[1]*r,e[2]=i[2]*r,e[3]=0,e[4]=i[4]*s,e[5]=i[5]*s,e[6]=i[6]*s,e[7]=0,e[8]=i[8]*a,e[9]=i[9]*a,e[10]=i[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,i=t.x,r=t.y,s=t.z,a=Math.cos(i),o=Math.sin(i),c=Math.cos(r),l=Math.sin(r),h=Math.cos(s),f=Math.sin(s);if(t.order==="XYZ"){const d=a*h,m=a*f,g=o*h,M=o*f;e[0]=c*h,e[4]=-c*f,e[8]=l,e[1]=m+g*l,e[5]=d-M*l,e[9]=-o*c,e[2]=M-d*l,e[6]=g+m*l,e[10]=a*c}else if(t.order==="YXZ"){const d=c*h,m=c*f,g=l*h,M=l*f;e[0]=d+M*o,e[4]=g*o-m,e[8]=a*l,e[1]=a*f,e[5]=a*h,e[9]=-o,e[2]=m*o-g,e[6]=M+d*o,e[10]=a*c}else if(t.order==="ZXY"){const d=c*h,m=c*f,g=l*h,M=l*f;e[0]=d-M*o,e[4]=-a*f,e[8]=g+m*o,e[1]=m+g*o,e[5]=a*h,e[9]=M-d*o,e[2]=-a*l,e[6]=o,e[10]=a*c}else if(t.order==="ZYX"){const d=a*h,m=a*f,g=o*h,M=o*f;e[0]=c*h,e[4]=g*l-m,e[8]=d*l+M,e[1]=c*f,e[5]=M*l+d,e[9]=m*l-g,e[2]=-l,e[6]=o*c,e[10]=a*c}else if(t.order==="YZX"){const d=a*c,m=a*l,g=o*c,M=o*l;e[0]=c*h,e[4]=M-d*f,e[8]=g*f+m,e[1]=f,e[5]=a*h,e[9]=-o*h,e[2]=-l*h,e[6]=m*f+g,e[10]=d-M*f}else if(t.order==="XZY"){const d=a*c,m=a*l,g=o*c,M=o*l;e[0]=c*h,e[4]=-f,e[8]=l*h,e[1]=d*f+M,e[5]=a*h,e[9]=m*f-g,e[2]=g*f-m,e[6]=o*h,e[10]=M*f+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Ru,t,Cu)}lookAt(t,e,i){const r=this.elements;return qe.subVectors(t,e),qe.lengthSq()===0&&(qe.z=1),qe.normalize(),Gn.crossVectors(i,qe),Gn.lengthSq()===0&&(Math.abs(i.z)===1?qe.x+=1e-4:qe.z+=1e-4,qe.normalize(),Gn.crossVectors(i,qe)),Gn.normalize(),Xr.crossVectors(qe,Gn),r[0]=Gn.x,r[4]=Xr.x,r[8]=qe.x,r[1]=Gn.y,r[5]=Xr.y,r[9]=qe.y,r[2]=Gn.z,r[6]=Xr.z,r[10]=qe.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,r=e.elements,s=this.elements,a=i[0],o=i[4],c=i[8],l=i[12],h=i[1],f=i[5],d=i[9],m=i[13],g=i[2],M=i[6],p=i[10],u=i[14],b=i[3],y=i[7],v=i[11],A=i[15],E=r[0],w=r[4],C=r[8],_=r[12],x=r[1],P=r[5],L=r[9],F=r[13],X=r[2],k=r[6],H=r[10],K=r[14],G=r[3],N=r[7],V=r[11],et=r[15];return s[0]=a*E+o*x+c*X+l*G,s[4]=a*w+o*P+c*k+l*N,s[8]=a*C+o*L+c*H+l*V,s[12]=a*_+o*F+c*K+l*et,s[1]=h*E+f*x+d*X+m*G,s[5]=h*w+f*P+d*k+m*N,s[9]=h*C+f*L+d*H+m*V,s[13]=h*_+f*F+d*K+m*et,s[2]=g*E+M*x+p*X+u*G,s[6]=g*w+M*P+p*k+u*N,s[10]=g*C+M*L+p*H+u*V,s[14]=g*_+M*F+p*K+u*et,s[3]=b*E+y*x+v*X+A*G,s[7]=b*w+y*P+v*k+A*N,s[11]=b*C+y*L+v*H+A*V,s[15]=b*_+y*F+v*K+A*et,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[4],r=t[8],s=t[12],a=t[1],o=t[5],c=t[9],l=t[13],h=t[2],f=t[6],d=t[10],m=t[14],g=t[3],M=t[7],p=t[11],u=t[15];return g*(+s*c*f-r*l*f-s*o*d+i*l*d+r*o*m-i*c*m)+M*(+e*c*m-e*l*d+s*a*d-r*a*m+r*l*h-s*c*h)+p*(+e*l*f-e*o*m-s*a*f+i*a*m+s*o*h-i*l*h)+u*(-r*o*h-e*c*f+e*o*d+r*a*f-i*a*d+i*c*h)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,i){const r=this.elements;return t.isVector3?(r[12]=t.x,r[13]=t.y,r[14]=t.z):(r[12]=t,r[13]=e,r[14]=i),this}invert(){const t=this.elements,e=t[0],i=t[1],r=t[2],s=t[3],a=t[4],o=t[5],c=t[6],l=t[7],h=t[8],f=t[9],d=t[10],m=t[11],g=t[12],M=t[13],p=t[14],u=t[15],b=f*p*l-M*d*l+M*c*m-o*p*m-f*c*u+o*d*u,y=g*d*l-h*p*l-g*c*m+a*p*m+h*c*u-a*d*u,v=h*M*l-g*f*l+g*o*m-a*M*m-h*o*u+a*f*u,A=g*f*c-h*M*c-g*o*d+a*M*d+h*o*p-a*f*p,E=e*b+i*y+r*v+s*A;if(E===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const w=1/E;return t[0]=b*w,t[1]=(M*d*s-f*p*s-M*r*m+i*p*m+f*r*u-i*d*u)*w,t[2]=(o*p*s-M*c*s+M*r*l-i*p*l-o*r*u+i*c*u)*w,t[3]=(f*c*s-o*d*s-f*r*l+i*d*l+o*r*m-i*c*m)*w,t[4]=y*w,t[5]=(h*p*s-g*d*s+g*r*m-e*p*m-h*r*u+e*d*u)*w,t[6]=(g*c*s-a*p*s-g*r*l+e*p*l+a*r*u-e*c*u)*w,t[7]=(a*d*s-h*c*s+h*r*l-e*d*l-a*r*m+e*c*m)*w,t[8]=v*w,t[9]=(g*f*s-h*M*s-g*i*m+e*M*m+h*i*u-e*f*u)*w,t[10]=(a*M*s-g*o*s+g*i*l-e*M*l-a*i*u+e*o*u)*w,t[11]=(h*o*s-a*f*s-h*i*l+e*f*l+a*i*m-e*o*m)*w,t[12]=A*w,t[13]=(h*M*r-g*f*r+g*i*d-e*M*d-h*i*p+e*f*p)*w,t[14]=(g*o*r-a*M*r-g*i*c+e*M*c+a*i*p-e*o*p)*w,t[15]=(a*f*r-h*o*r+h*i*c-e*f*c-a*i*d+e*o*d)*w,this}scale(t){const e=this.elements,i=t.x,r=t.y,s=t.z;return e[0]*=i,e[4]*=r,e[8]*=s,e[1]*=i,e[5]*=r,e[9]*=s,e[2]*=i,e[6]*=r,e[10]*=s,e[3]*=i,e[7]*=r,e[11]*=s,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],r=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,i,r))}makeTranslation(t,e,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,i,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,e,-i,0,0,i,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,0,i,0,0,1,0,0,-i,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,0,i,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const i=Math.cos(e),r=Math.sin(e),s=1-i,a=t.x,o=t.y,c=t.z,l=s*a,h=s*o;return this.set(l*a+i,l*o-r*c,l*c+r*o,0,l*o+r*c,h*o+i,h*c-r*a,0,l*c-r*o,h*c+r*a,s*c*c+i,0,0,0,0,1),this}makeScale(t,e,i){return this.set(t,0,0,0,0,e,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,e,i,r,s,a){return this.set(1,i,s,0,t,1,a,0,e,r,1,0,0,0,0,1),this}compose(t,e,i){const r=this.elements,s=e._x,a=e._y,o=e._z,c=e._w,l=s+s,h=a+a,f=o+o,d=s*l,m=s*h,g=s*f,M=a*h,p=a*f,u=o*f,b=c*l,y=c*h,v=c*f,A=i.x,E=i.y,w=i.z;return r[0]=(1-(M+u))*A,r[1]=(m+v)*A,r[2]=(g-y)*A,r[3]=0,r[4]=(m-v)*E,r[5]=(1-(d+u))*E,r[6]=(p+b)*E,r[7]=0,r[8]=(g+y)*w,r[9]=(p-b)*w,r[10]=(1-(d+M))*w,r[11]=0,r[12]=t.x,r[13]=t.y,r[14]=t.z,r[15]=1,this}decompose(t,e,i){const r=this.elements;let s=Li.set(r[0],r[1],r[2]).length();const a=Li.set(r[4],r[5],r[6]).length(),o=Li.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),t.x=r[12],t.y=r[13],t.z=r[14],cn.copy(this);const l=1/s,h=1/a,f=1/o;return cn.elements[0]*=l,cn.elements[1]*=l,cn.elements[2]*=l,cn.elements[4]*=h,cn.elements[5]*=h,cn.elements[6]*=h,cn.elements[8]*=f,cn.elements[9]*=f,cn.elements[10]*=f,e.setFromRotationMatrix(cn),i.x=s,i.y=a,i.z=o,this}makePerspective(t,e,i,r,s,a,o=Mn,c=!1){const l=this.elements,h=2*s/(e-t),f=2*s/(i-r),d=(e+t)/(e-t),m=(i+r)/(i-r);let g,M;if(c)g=s/(a-s),M=a*s/(a-s);else if(o===Mn)g=-(a+s)/(a-s),M=-2*a*s/(a-s);else if(o===As)g=-a/(a-s),M=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=h,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=f,l[9]=m,l[13]=0,l[2]=0,l[6]=0,l[10]=g,l[14]=M,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,i,r,s,a,o=Mn,c=!1){const l=this.elements,h=2/(e-t),f=2/(i-r),d=-(e+t)/(e-t),m=-(i+r)/(i-r);let g,M;if(c)g=1/(a-s),M=a/(a-s);else if(o===Mn)g=-2/(a-s),M=-(a+s)/(a-s);else if(o===As)g=-1/(a-s),M=-s/(a-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=h,l[4]=0,l[8]=0,l[12]=d,l[1]=0,l[5]=f,l[9]=0,l[13]=m,l[2]=0,l[6]=0,l[10]=g,l[14]=M,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){const e=this.elements,i=t.elements;for(let r=0;r<16;r++)if(e[r]!==i[r])return!1;return!0}fromArray(t,e=0){for(let i=0;i<16;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t[e+9]=i[9],t[e+10]=i[10],t[e+11]=i[11],t[e+12]=i[12],t[e+13]=i[13],t[e+14]=i[14],t[e+15]=i[15],t}}const Li=new U,cn=new ge,Ru=new U(0,0,0),Cu=new U(1,1,1),Gn=new U,Xr=new U,qe=new U,il=new ge,rl=new ei;class On{constructor(t=0,e=0,i=0,r=On.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=i,this._order=r}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,i,r=this._order){return this._x=t,this._y=e,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,i=!0){const r=t.elements,s=r[0],a=r[4],o=r[8],c=r[1],l=r[5],h=r[9],f=r[2],d=r[6],m=r[10];switch(e){case"XYZ":this._y=Math.asin(Kt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,m),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(d,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Kt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,m),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin(Kt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-f,m),this._z=Math.atan2(-a,l)):(this._y=0,this._z=Math.atan2(c,s));break;case"ZYX":this._y=Math.asin(-Kt(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(d,m),this._z=Math.atan2(c,s)):(this._x=0,this._z=Math.atan2(-a,l));break;case"YZX":this._z=Math.asin(Kt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(o,m));break;case"XZY":this._z=Math.asin(-Kt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,l),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-h,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,i){return il.makeRotationFromQuaternion(t),this.setFromRotationMatrix(il,e,i)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return rl.setFromEuler(this),this.setFromQuaternion(rl,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}On.DEFAULT_ORDER="XYZ";class Lo{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let Pu=0;const sl=new U,Ii=new ei,wn=new ge,Yr=new U,or=new U,Du=new U,Lu=new ei,al=new U(1,0,0),ol=new U(0,1,0),ll=new U(0,0,1),cl={type:"added"},Iu={type:"removed"},Ui={type:"childadded",child:null},Js={type:"childremoved",child:null};class Ue extends bi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Pu++}),this.uuid=In(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ue.DEFAULT_UP.clone();const t=new U,e=new On,i=new ei,r=new U(1,1,1);function s(){i.setFromEuler(e,!1)}function a(){e.setFromQuaternion(i,void 0,!1)}e._onChange(s),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new ge},normalMatrix:{value:new Wt}}),this.matrix=new ge,this.matrixWorld=new ge,this.matrixAutoUpdate=Ue.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Ue.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Lo,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Ii.setFromAxisAngle(t,e),this.quaternion.multiply(Ii),this}rotateOnWorldAxis(t,e){return Ii.setFromAxisAngle(t,e),this.quaternion.premultiply(Ii),this}rotateX(t){return this.rotateOnAxis(al,t)}rotateY(t){return this.rotateOnAxis(ol,t)}rotateZ(t){return this.rotateOnAxis(ll,t)}translateOnAxis(t,e){return sl.copy(t).applyQuaternion(this.quaternion),this.position.add(sl.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(al,t)}translateY(t){return this.translateOnAxis(ol,t)}translateZ(t){return this.translateOnAxis(ll,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(wn.copy(this.matrixWorld).invert())}lookAt(t,e,i){t.isVector3?Yr.copy(t):Yr.set(t,e,i);const r=this.parent;this.updateWorldMatrix(!0,!1),or.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?wn.lookAt(or,Yr,this.up):wn.lookAt(Yr,or,this.up),this.quaternion.setFromRotationMatrix(wn),r&&(wn.extractRotation(r.matrixWorld),Ii.setFromRotationMatrix(wn),this.quaternion.premultiply(Ii.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(cl),Ui.child=t,this.dispatchEvent(Ui),Ui.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Iu),Js.child=t,this.dispatchEvent(Js),Js.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),wn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),wn.multiply(t.parent.matrixWorld)),t.applyMatrix4(wn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(cl),Ui.child=t,this.dispatchEvent(Ui),Ui.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let i=0,r=this.children.length;i<r;i++){const a=this.children[i].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,i=[]){this[t]===e&&i.push(this);const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].getObjectsByProperty(t,e,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(or,t,Du),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(or,Lu,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let i=0,r=e.length;i<r;i++)e[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let i=0,r=e.length;i<r;i++)e[i].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let i=0,r=e.length;i<r;i++)e[i].updateMatrixWorld(t)}updateWorldMatrix(t,e){const i=this.parent;if(t===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",i={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(o=>({...o})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(t),r.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(t.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const c=o.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){const f=c[l];s(t.shapes,f)}else s(t.shapes,c)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(t.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(s(t.materials,this.material[c]));r.material=o}else r.material=s(t.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const c=this.animations[o];r.animations.push(s(t.animations,c))}}if(e){const o=a(t.geometries),c=a(t.materials),l=a(t.textures),h=a(t.images),f=a(t.shapes),d=a(t.skeletons),m=a(t.animations),g=a(t.nodes);o.length>0&&(i.geometries=o),c.length>0&&(i.materials=c),l.length>0&&(i.textures=l),h.length>0&&(i.images=h),f.length>0&&(i.shapes=f),d.length>0&&(i.skeletons=d),m.length>0&&(i.animations=m),g.length>0&&(i.nodes=g)}return i.object=r,i;function a(o){const c=[];for(const l in o){const h=o[l];delete h.metadata,c.push(h)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let i=0;i<t.children.length;i++){const r=t.children[i];this.add(r.clone())}return this}}Ue.DEFAULT_UP=new U(0,1,0);Ue.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ue.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const hn=new U,Rn=new U,Qs=new U,Cn=new U,Ni=new U,Fi=new U,hl=new U,ta=new U,ea=new U,na=new U,ia=new ve,ra=new ve,sa=new ve;class rn{constructor(t=new U,e=new U,i=new U){this.a=t,this.b=e,this.c=i}static getNormal(t,e,i,r){r.subVectors(i,e),hn.subVectors(t,e),r.cross(hn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(t,e,i,r,s){hn.subVectors(r,e),Rn.subVectors(i,e),Qs.subVectors(t,e);const a=hn.dot(hn),o=hn.dot(Rn),c=hn.dot(Qs),l=Rn.dot(Rn),h=Rn.dot(Qs),f=a*l-o*o;if(f===0)return s.set(0,0,0),null;const d=1/f,m=(l*c-o*h)*d,g=(a*h-o*c)*d;return s.set(1-m-g,g,m)}static containsPoint(t,e,i,r){return this.getBarycoord(t,e,i,r,Cn)===null?!1:Cn.x>=0&&Cn.y>=0&&Cn.x+Cn.y<=1}static getInterpolation(t,e,i,r,s,a,o,c){return this.getBarycoord(t,e,i,r,Cn)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(s,Cn.x),c.addScaledVector(a,Cn.y),c.addScaledVector(o,Cn.z),c)}static getInterpolatedAttribute(t,e,i,r,s,a){return ia.setScalar(0),ra.setScalar(0),sa.setScalar(0),ia.fromBufferAttribute(t,e),ra.fromBufferAttribute(t,i),sa.fromBufferAttribute(t,r),a.setScalar(0),a.addScaledVector(ia,s.x),a.addScaledVector(ra,s.y),a.addScaledVector(sa,s.z),a}static isFrontFacing(t,e,i,r){return hn.subVectors(i,e),Rn.subVectors(t,e),hn.cross(Rn).dot(r)<0}set(t,e,i){return this.a.copy(t),this.b.copy(e),this.c.copy(i),this}setFromPointsAndIndices(t,e,i,r){return this.a.copy(t[e]),this.b.copy(t[i]),this.c.copy(t[r]),this}setFromAttributeAndIndices(t,e,i,r){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,r),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return hn.subVectors(this.c,this.b),Rn.subVectors(this.a,this.b),hn.cross(Rn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return rn.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return rn.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,i,r,s){return rn.getInterpolation(t,this.a,this.b,this.c,e,i,r,s)}containsPoint(t){return rn.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return rn.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const i=this.a,r=this.b,s=this.c;let a,o;Ni.subVectors(r,i),Fi.subVectors(s,i),ta.subVectors(t,i);const c=Ni.dot(ta),l=Fi.dot(ta);if(c<=0&&l<=0)return e.copy(i);ea.subVectors(t,r);const h=Ni.dot(ea),f=Fi.dot(ea);if(h>=0&&f<=h)return e.copy(r);const d=c*f-h*l;if(d<=0&&c>=0&&h<=0)return a=c/(c-h),e.copy(i).addScaledVector(Ni,a);na.subVectors(t,s);const m=Ni.dot(na),g=Fi.dot(na);if(g>=0&&m<=g)return e.copy(s);const M=m*l-c*g;if(M<=0&&l>=0&&g<=0)return o=l/(l-g),e.copy(i).addScaledVector(Fi,o);const p=h*g-m*f;if(p<=0&&f-h>=0&&m-g>=0)return hl.subVectors(s,r),o=(f-h)/(f-h+(m-g)),e.copy(r).addScaledVector(hl,o);const u=1/(p+M+d);return a=M*u,o=d*u,e.copy(i).addScaledVector(Ni,a).addScaledVector(Fi,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const Cc={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Vn={h:0,s:0,l:0},qr={h:0,s:0,l:0};function aa(n,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?n+(t-n)*6*e:e<1/2?t:e<2/3?n+(t-n)*6*(2/3-e):n}class zt{constructor(t,e,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,i)}set(t,e,i){if(e===void 0&&i===void 0){const r=t;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(t,e,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=De){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,ie.colorSpaceToWorking(this,e),this}setRGB(t,e,i,r=ie.workingColorSpace){return this.r=t,this.g=e,this.b=i,ie.colorSpaceToWorking(this,r),this}setHSL(t,e,i,r=ie.workingColorSpace){if(t=Po(t,1),e=Kt(e,0,1),i=Kt(i,0,1),e===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+e):i+e-i*e,a=2*i-s;this.r=aa(a,s,t+1/3),this.g=aa(a,s,t),this.b=aa(a,s,t-1/3)}return ie.colorSpaceToWorking(this,r),this}setStyle(t,e=De){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(t)){let s;const a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,e);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,e);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(t)){const s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(s,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=De){const i=Cc[t.toLowerCase()];return i!==void 0?this.setHex(i,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Un(t.r),this.g=Un(t.g),this.b=Un(t.b),this}copyLinearToSRGB(t){return this.r=ji(t.r),this.g=ji(t.g),this.b=ji(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=De){return ie.workingToColorSpace(Ie.copy(this),t),Math.round(Kt(Ie.r*255,0,255))*65536+Math.round(Kt(Ie.g*255,0,255))*256+Math.round(Kt(Ie.b*255,0,255))}getHexString(t=De){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=ie.workingColorSpace){ie.workingToColorSpace(Ie.copy(this),e);const i=Ie.r,r=Ie.g,s=Ie.b,a=Math.max(i,r,s),o=Math.min(i,r,s);let c,l;const h=(o+a)/2;if(o===a)c=0,l=0;else{const f=a-o;switch(l=h<=.5?f/(a+o):f/(2-a-o),a){case i:c=(r-s)/f+(r<s?6:0);break;case r:c=(s-i)/f+2;break;case s:c=(i-r)/f+4;break}c/=6}return t.h=c,t.s=l,t.l=h,t}getRGB(t,e=ie.workingColorSpace){return ie.workingToColorSpace(Ie.copy(this),e),t.r=Ie.r,t.g=Ie.g,t.b=Ie.b,t}getStyle(t=De){ie.workingToColorSpace(Ie.copy(this),t);const e=Ie.r,i=Ie.g,r=Ie.b;return t!==De?`color(${t} ${e.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(t,e,i){return this.getHSL(Vn),this.setHSL(Vn.h+t,Vn.s+e,Vn.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,i){return this.r=t.r+(e.r-t.r)*i,this.g=t.g+(e.g-t.g)*i,this.b=t.b+(e.b-t.b)*i,this}lerpHSL(t,e){this.getHSL(Vn),t.getHSL(qr);const i=_r(Vn.h,qr.h,e),r=_r(Vn.s,qr.s,e),s=_r(Vn.l,qr.l,e);return this.setHSL(i,r,s),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,i=this.g,r=this.b,s=t.elements;return this.r=s[0]*e+s[3]*i+s[6]*r,this.g=s[1]*e+s[4]*i+s[7]*r,this.b=s[2]*e+s[5]*i+s[8]*r,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ie=new zt;zt.NAMES=Cc;let Uu=0;class Ti extends bi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Uu++}),this.uuid=In(),this.name="",this.type="Material",this.blending=_i,this.side=ti,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ea,this.blendDst=ba,this.blendEquation=pi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new zt(0,0,0),this.blendAlpha=0,this.depthFunc=Ji,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Ko,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=wi,this.stencilZFail=wi,this.stencilZPass=wi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const i=t[e];if(i===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const r=this[e];if(r===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[e]=i}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==_i&&(i.blending=this.blending),this.side!==ti&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Ea&&(i.blendSrc=this.blendSrc),this.blendDst!==ba&&(i.blendDst=this.blendDst),this.blendEquation!==pi&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Ji&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Ko&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==wi&&(i.stencilFail=this.stencilFail),this.stencilZFail!==wi&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==wi&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const a=[];for(const o in s){const c=s[o];delete c.metadata,a.push(c)}return a}if(e){const s=r(t.textures),a=r(t.images);s.length>0&&(i.textures=s),a.length>0&&(i.images=a)}return i}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let i=null;if(e!==null){const r=e.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=e[s].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class Ur extends Ti{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new zt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new On,this.combine=mc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const Me=new U,$r=new Ot;let Nu=0;class se{constructor(t,e,i=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Nu++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=i,this.usage=ho,this.updateRanges=[],this.gpuType=Ln,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,i){t*=this.itemSize,i*=e.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[t+r]=e.array[i+r];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,i=this.count;e<i;e++)$r.fromBufferAttribute(this,e),$r.applyMatrix3(t),this.setXY(e,$r.x,$r.y);else if(this.itemSize===3)for(let e=0,i=this.count;e<i;e++)Me.fromBufferAttribute(this,e),Me.applyMatrix3(t),this.setXYZ(e,Me.x,Me.y,Me.z);return this}applyMatrix4(t){for(let e=0,i=this.count;e<i;e++)Me.fromBufferAttribute(this,e),Me.applyMatrix4(t),this.setXYZ(e,Me.x,Me.y,Me.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)Me.fromBufferAttribute(this,e),Me.applyNormalMatrix(t),this.setXYZ(e,Me.x,Me.y,Me.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)Me.fromBufferAttribute(this,e),Me.transformDirection(t),this.setXYZ(e,Me.x,Me.y,Me.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let i=this.array[t*this.itemSize+e];return this.normalized&&(i=fn(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=ae(i,this.array)),this.array[t*this.itemSize+e]=i,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=fn(e,this.array)),e}setX(t,e){return this.normalized&&(e=ae(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=fn(e,this.array)),e}setY(t,e){return this.normalized&&(e=ae(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=fn(e,this.array)),e}setZ(t,e){return this.normalized&&(e=ae(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=fn(e,this.array)),e}setW(t,e){return this.normalized&&(e=ae(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,i){return t*=this.itemSize,this.normalized&&(e=ae(e,this.array),i=ae(i,this.array)),this.array[t+0]=e,this.array[t+1]=i,this}setXYZ(t,e,i,r){return t*=this.itemSize,this.normalized&&(e=ae(e,this.array),i=ae(i,this.array),r=ae(r,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=r,this}setXYZW(t,e,i,r,s){return t*=this.itemSize,this.normalized&&(e=ae(e,this.array),i=ae(i,this.array),r=ae(r,this.array),s=ae(s,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=r,this.array[t+3]=s,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==ho&&(t.usage=this.usage),t}}class Pc extends se{constructor(t,e,i){super(new Uint16Array(t),e,i)}}class Dc extends se{constructor(t,e,i){super(new Uint32Array(t),e,i)}}class we extends se{constructor(t,e,i){super(new Float32Array(t),e,i)}}let Fu=0;const Je=new ge,oa=new Ue,Oi=new U,$e=new Dr,lr=new Dr,Pe=new U;class he extends bi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Fu++}),this.uuid=In(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(wc(t)?Dc:Pc)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,i=0){this.groups.push({start:t,count:e,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new Wt().getNormalMatrix(t);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(t),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Je.makeRotationFromQuaternion(t),this.applyMatrix4(Je),this}rotateX(t){return Je.makeRotationX(t),this.applyMatrix4(Je),this}rotateY(t){return Je.makeRotationY(t),this.applyMatrix4(Je),this}rotateZ(t){return Je.makeRotationZ(t),this.applyMatrix4(Je),this}translate(t,e,i){return Je.makeTranslation(t,e,i),this.applyMatrix4(Je),this}scale(t,e,i){return Je.makeScale(t,e,i),this.applyMatrix4(Je),this}lookAt(t){return oa.lookAt(t),oa.updateMatrix(),this.applyMatrix4(oa.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Oi).negate(),this.translate(Oi.x,Oi.y,Oi.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const i=[];for(let r=0,s=t.length;r<s;r++){const a=t[r];i.push(a.x,a.y,a.z||0)}this.setAttribute("position",new we(i,3))}else{const i=Math.min(t.length,e.count);for(let r=0;r<i;r++){const s=t[r];e.setXYZ(r,s.x,s.y,s.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Dr);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new U(-1/0,-1/0,-1/0),new U(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let i=0,r=e.length;i<r;i++){const s=e[i];$e.setFromBufferAttribute(s),this.morphTargetsRelative?(Pe.addVectors(this.boundingBox.min,$e.min),this.boundingBox.expandByPoint(Pe),Pe.addVectors(this.boundingBox.max,$e.max),this.boundingBox.expandByPoint(Pe)):(this.boundingBox.expandByPoint($e.min),this.boundingBox.expandByPoint($e.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Lr);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new U,1/0);return}if(t){const i=this.boundingSphere.center;if($e.setFromBufferAttribute(t),e)for(let s=0,a=e.length;s<a;s++){const o=e[s];lr.setFromBufferAttribute(o),this.morphTargetsRelative?(Pe.addVectors($e.min,lr.min),$e.expandByPoint(Pe),Pe.addVectors($e.max,lr.max),$e.expandByPoint(Pe)):($e.expandByPoint(lr.min),$e.expandByPoint(lr.max))}$e.getCenter(i);let r=0;for(let s=0,a=t.count;s<a;s++)Pe.fromBufferAttribute(t,s),r=Math.max(r,i.distanceToSquared(Pe));if(e)for(let s=0,a=e.length;s<a;s++){const o=e[s],c=this.morphTargetsRelative;for(let l=0,h=o.count;l<h;l++)Pe.fromBufferAttribute(o,l),c&&(Oi.fromBufferAttribute(t,l),Pe.add(Oi)),r=Math.max(r,i.distanceToSquared(Pe))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.position,r=e.normal,s=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new se(new Float32Array(4*i.count),4));const a=this.getAttribute("tangent"),o=[],c=[];for(let C=0;C<i.count;C++)o[C]=new U,c[C]=new U;const l=new U,h=new U,f=new U,d=new Ot,m=new Ot,g=new Ot,M=new U,p=new U;function u(C,_,x){l.fromBufferAttribute(i,C),h.fromBufferAttribute(i,_),f.fromBufferAttribute(i,x),d.fromBufferAttribute(s,C),m.fromBufferAttribute(s,_),g.fromBufferAttribute(s,x),h.sub(l),f.sub(l),m.sub(d),g.sub(d);const P=1/(m.x*g.y-g.x*m.y);isFinite(P)&&(M.copy(h).multiplyScalar(g.y).addScaledVector(f,-m.y).multiplyScalar(P),p.copy(f).multiplyScalar(m.x).addScaledVector(h,-g.x).multiplyScalar(P),o[C].add(M),o[_].add(M),o[x].add(M),c[C].add(p),c[_].add(p),c[x].add(p))}let b=this.groups;b.length===0&&(b=[{start:0,count:t.count}]);for(let C=0,_=b.length;C<_;++C){const x=b[C],P=x.start,L=x.count;for(let F=P,X=P+L;F<X;F+=3)u(t.getX(F+0),t.getX(F+1),t.getX(F+2))}const y=new U,v=new U,A=new U,E=new U;function w(C){A.fromBufferAttribute(r,C),E.copy(A);const _=o[C];y.copy(_),y.sub(A.multiplyScalar(A.dot(_))).normalize(),v.crossVectors(E,_);const P=v.dot(c[C])<0?-1:1;a.setXYZW(C,y.x,y.y,y.z,P)}for(let C=0,_=b.length;C<_;++C){const x=b[C],P=x.start,L=x.count;for(let F=P,X=P+L;F<X;F+=3)w(t.getX(F+0)),w(t.getX(F+1)),w(t.getX(F+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new se(new Float32Array(e.count*3),3),this.setAttribute("normal",i);else for(let d=0,m=i.count;d<m;d++)i.setXYZ(d,0,0,0);const r=new U,s=new U,a=new U,o=new U,c=new U,l=new U,h=new U,f=new U;if(t)for(let d=0,m=t.count;d<m;d+=3){const g=t.getX(d+0),M=t.getX(d+1),p=t.getX(d+2);r.fromBufferAttribute(e,g),s.fromBufferAttribute(e,M),a.fromBufferAttribute(e,p),h.subVectors(a,s),f.subVectors(r,s),h.cross(f),o.fromBufferAttribute(i,g),c.fromBufferAttribute(i,M),l.fromBufferAttribute(i,p),o.add(h),c.add(h),l.add(h),i.setXYZ(g,o.x,o.y,o.z),i.setXYZ(M,c.x,c.y,c.z),i.setXYZ(p,l.x,l.y,l.z)}else for(let d=0,m=e.count;d<m;d+=3)r.fromBufferAttribute(e,d+0),s.fromBufferAttribute(e,d+1),a.fromBufferAttribute(e,d+2),h.subVectors(a,s),f.subVectors(r,s),h.cross(f),i.setXYZ(d+0,h.x,h.y,h.z),i.setXYZ(d+1,h.x,h.y,h.z),i.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,i=t.count;e<i;e++)Pe.fromBufferAttribute(t,e),Pe.normalize(),t.setXYZ(e,Pe.x,Pe.y,Pe.z)}toNonIndexed(){function t(o,c){const l=o.array,h=o.itemSize,f=o.normalized,d=new l.constructor(c.length*h);let m=0,g=0;for(let M=0,p=c.length;M<p;M++){o.isInterleavedBufferAttribute?m=c[M]*o.data.stride+o.offset:m=c[M]*h;for(let u=0;u<h;u++)d[g++]=l[m++]}return new se(d,h,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new he,i=this.index.array,r=this.attributes;for(const o in r){const c=r[o],l=t(c,i);e.setAttribute(o,l)}const s=this.morphAttributes;for(const o in s){const c=[],l=s[o];for(let h=0,f=l.length;h<f;h++){const d=l[h],m=t(d,i);c.push(m)}e.morphAttributes[o]=c}e.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,c=a.length;o<c;o++){const l=a[o];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(t[l]=c[l]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const i=this.attributes;for(const c in i){const l=i[c];t.data.attributes[c]=l.toJSON(t.data)}const r={};let s=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],h=[];for(let f=0,d=l.length;f<d;f++){const m=l[f];h.push(m.toJSON(t.data))}h.length>0&&(r[c]=h,s=!0)}s&&(t.data.morphAttributes=r,t.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(t.data.boundingSphere=o.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const i=t.index;i!==null&&this.setIndex(i.clone());const r=t.attributes;for(const l in r){const h=r[l];this.setAttribute(l,h.clone(e))}const s=t.morphAttributes;for(const l in s){const h=[],f=s[l];for(let d=0,m=f.length;d<m;d++)h.push(f[d].clone(e));this.morphAttributes[l]=h}this.morphTargetsRelative=t.morphTargetsRelative;const a=t.groups;for(let l=0,h=a.length;l<h;l++){const f=a[l];this.addGroup(f.start,f.count,f.materialIndex)}const o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());const c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const ul=new ge,oi=new Ir,jr=new Lr,fl=new U,Kr=new U,Zr=new U,Jr=new U,la=new U,Qr=new U,dl=new U,ts=new U;class sn extends Ue{constructor(t=new he,e=new Ur){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const r=e[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(t,e){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,a=i.morphTargetsRelative;e.fromBufferAttribute(r,t);const o=this.morphTargetInfluences;if(s&&o){Qr.set(0,0,0);for(let c=0,l=s.length;c<l;c++){const h=o[c],f=s[c];h!==0&&(la.fromBufferAttribute(f,t),a?Qr.addScaledVector(la,h):Qr.addScaledVector(la.sub(e),h))}e.add(Qr)}return e}raycast(t,e){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),jr.copy(i.boundingSphere),jr.applyMatrix4(s),oi.copy(t.ray).recast(t.near),!(jr.containsPoint(oi.origin)===!1&&(oi.intersectSphere(jr,fl)===null||oi.origin.distanceToSquared(fl)>(t.far-t.near)**2))&&(ul.copy(s).invert(),oi.copy(t.ray).applyMatrix4(ul),!(i.boundingBox!==null&&oi.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,e,oi)))}_computeIntersections(t,e,i){let r;const s=this.geometry,a=this.material,o=s.index,c=s.attributes.position,l=s.attributes.uv,h=s.attributes.uv1,f=s.attributes.normal,d=s.groups,m=s.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,M=d.length;g<M;g++){const p=d[g],u=a[p.materialIndex],b=Math.max(p.start,m.start),y=Math.min(o.count,Math.min(p.start+p.count,m.start+m.count));for(let v=b,A=y;v<A;v+=3){const E=o.getX(v),w=o.getX(v+1),C=o.getX(v+2);r=es(this,u,t,i,l,h,f,E,w,C),r&&(r.faceIndex=Math.floor(v/3),r.face.materialIndex=p.materialIndex,e.push(r))}}else{const g=Math.max(0,m.start),M=Math.min(o.count,m.start+m.count);for(let p=g,u=M;p<u;p+=3){const b=o.getX(p),y=o.getX(p+1),v=o.getX(p+2);r=es(this,a,t,i,l,h,f,b,y,v),r&&(r.faceIndex=Math.floor(p/3),e.push(r))}}else if(c!==void 0)if(Array.isArray(a))for(let g=0,M=d.length;g<M;g++){const p=d[g],u=a[p.materialIndex],b=Math.max(p.start,m.start),y=Math.min(c.count,Math.min(p.start+p.count,m.start+m.count));for(let v=b,A=y;v<A;v+=3){const E=v,w=v+1,C=v+2;r=es(this,u,t,i,l,h,f,E,w,C),r&&(r.faceIndex=Math.floor(v/3),r.face.materialIndex=p.materialIndex,e.push(r))}}else{const g=Math.max(0,m.start),M=Math.min(c.count,m.start+m.count);for(let p=g,u=M;p<u;p+=3){const b=p,y=p+1,v=p+2;r=es(this,a,t,i,l,h,f,b,y,v),r&&(r.faceIndex=Math.floor(p/3),e.push(r))}}}}function Ou(n,t,e,i,r,s,a,o){let c;if(t.side===We?c=i.intersectTriangle(a,s,r,!0,o):c=i.intersectTriangle(r,s,a,t.side===ti,o),c===null)return null;ts.copy(o),ts.applyMatrix4(n.matrixWorld);const l=e.ray.origin.distanceTo(ts);return l<e.near||l>e.far?null:{distance:l,point:ts.clone(),object:n}}function es(n,t,e,i,r,s,a,o,c,l){n.getVertexPosition(o,Kr),n.getVertexPosition(c,Zr),n.getVertexPosition(l,Jr);const h=Ou(n,t,e,i,Kr,Zr,Jr,dl);if(h){const f=new U;rn.getBarycoord(dl,Kr,Zr,Jr,f),r&&(h.uv=rn.getInterpolatedAttribute(r,o,c,l,f,new Ot)),s&&(h.uv1=rn.getInterpolatedAttribute(s,o,c,l,f,new Ot)),a&&(h.normal=rn.getInterpolatedAttribute(a,o,c,l,f,new U),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));const d={a:o,b:c,c:l,normal:new U,materialIndex:0};rn.getNormal(Kr,Zr,Jr,d.normal),h.face=d,h.barycoord=f}return h}class Nr extends he{constructor(t=1,e=1,i=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:i,widthSegments:r,heightSegments:s,depthSegments:a};const o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);const c=[],l=[],h=[],f=[];let d=0,m=0;g("z","y","x",-1,-1,i,e,t,a,s,0),g("z","y","x",1,-1,i,e,-t,a,s,1),g("x","z","y",1,1,t,i,e,r,a,2),g("x","z","y",1,-1,t,i,-e,r,a,3),g("x","y","z",1,-1,t,e,i,r,s,4),g("x","y","z",-1,-1,t,e,-i,r,s,5),this.setIndex(c),this.setAttribute("position",new we(l,3)),this.setAttribute("normal",new we(h,3)),this.setAttribute("uv",new we(f,2));function g(M,p,u,b,y,v,A,E,w,C,_){const x=v/w,P=A/C,L=v/2,F=A/2,X=E/2,k=w+1,H=C+1;let K=0,G=0;const N=new U;for(let V=0;V<H;V++){const et=V*P-F;for(let vt=0;vt<k;vt++){const qt=vt*x-L;N[M]=qt*b,N[p]=et*y,N[u]=X,l.push(N.x,N.y,N.z),N[M]=0,N[p]=0,N[u]=E>0?1:-1,h.push(N.x,N.y,N.z),f.push(vt/w),f.push(1-V/C),K+=1}}for(let V=0;V<C;V++)for(let et=0;et<w;et++){const vt=d+et+k*V,qt=d+et+k*(V+1),Zt=d+(et+1)+k*(V+1),$t=d+(et+1)+k*V;c.push(vt,qt,$t),c.push(qt,Zt,$t),G+=6}o.addGroup(m,G,_),m+=G,d+=K}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Nr(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function nr(n){const t={};for(const e in n){t[e]={};for(const i in n[e]){const r=n[e][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][i]=null):t[e][i]=r.clone():Array.isArray(r)?t[e][i]=r.slice():t[e][i]=r}}return t}function Oe(n){const t={};for(let e=0;e<n.length;e++){const i=nr(n[e]);for(const r in i)t[r]=i[r]}return t}function Bu(n){const t=[];for(let e=0;e<n.length;e++)t.push(n[e].clone());return t}function Lc(n){const t=n.getRenderTarget();return t===null?n.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:ie.workingColorSpace}const zu={clone:nr,merge:Oe};var ku=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Hu=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ni extends Ti{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=ku,this.fragmentShader=Hu,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=nr(t.uniforms),this.uniformsGroups=Bu(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const r in this.uniforms){const a=this.uniforms[r].value;a&&a.isTexture?e.uniforms[r]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[r]={type:"m4",value:a.toArray()}:e.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(e.extensions=i),e}}class Ic extends Ue{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ge,this.projectionMatrix=new ge,this.projectionMatrixInverse=new ge,this.coordinateSystem=Mn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Wn=new U,pl=new Ot,ml=new Ot;class tn extends Ic{constructor(t=50,e=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=Er*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(gr*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Er*2*Math.atan(Math.tan(gr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,i){Wn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Wn.x,Wn.y).multiplyScalar(-t/Wn.z),Wn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Wn.x,Wn.y).multiplyScalar(-t/Wn.z)}getViewSize(t,e){return this.getViewBounds(t,pl,ml),e.subVectors(ml,pl)}setViewOffset(t,e,i,r,s,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(gr*.5*this.fov)/this.zoom,i=2*e,r=this.aspect*i,s=-.5*r;const a=this.view;if(this.view!==null&&this.view.enabled){const c=a.fullWidth,l=a.fullHeight;s+=a.offsetX*r/c,e-=a.offsetY*i/l,r*=a.width/c,i*=a.height/l}const o=this.filmOffset;o!==0&&(s+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,e,e-i,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const Bi=-90,zi=1;class Gu extends Ue{constructor(t,e,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new tn(Bi,zi,t,e);r.layers=this.layers,this.add(r);const s=new tn(Bi,zi,t,e);s.layers=this.layers,this.add(s);const a=new tn(Bi,zi,t,e);a.layers=this.layers,this.add(a);const o=new tn(Bi,zi,t,e);o.layers=this.layers,this.add(o);const c=new tn(Bi,zi,t,e);c.layers=this.layers,this.add(c);const l=new tn(Bi,zi,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[i,r,s,a,o,c]=e;for(const l of e)this.remove(l);if(t===Mn)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===As)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const l of e)this.add(l),l.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,c,l,h]=this.children,f=t.getRenderTarget(),d=t.getActiveCubeFace(),m=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;const M=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,t.setRenderTarget(i,0,r),t.render(e,s),t.setRenderTarget(i,1,r),t.render(e,a),t.setRenderTarget(i,2,r),t.render(e,o),t.setRenderTarget(i,3,r),t.render(e,c),t.setRenderTarget(i,4,r),t.render(e,l),i.texture.generateMipmaps=M,t.setRenderTarget(i,5,r),t.render(e,h),t.setRenderTarget(f,d,m),t.xr.enabled=g,i.texture.needsPMREMUpdate=!0}}class Uc extends ke{constructor(t=[],e=Qi,i,r,s,a,o,c,l,h){super(t,e,i,r,s,a,o,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Vu extends yi{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const i={width:t,height:t,depth:1},r=[i,i,i,i,i,i];this.texture=new Uc(r),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new Nr(5,5,5),s=new ni({name:"CubemapFromEquirect",uniforms:nr(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:We,blending:Zn});s.uniforms.tEquirect.value=e;const a=new sn(r,s),o=e.minFilter;return e.minFilter===jn&&(e.minFilter=dn),new Gu(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e=!0,i=!0,r=!0){const s=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,i,r);t.setRenderTarget(s)}}class ze extends Ue{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Wu={type:"move"};class ca{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ze,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ze,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new U,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new U),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ze,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new U,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new U),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const i of t.hand.values())this._getHandJoint(e,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,i){let r=null,s=null,a=null;const o=this._targetRay,c=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){a=!0;for(const M of t.hand.values()){const p=e.getJointPose(M,i),u=this._getHandJoint(l,M);p!==null&&(u.matrix.fromArray(p.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.matrixWorldNeedsUpdate=!0,u.jointRadius=p.radius),u.visible=p!==null}const h=l.joints["index-finger-tip"],f=l.joints["thumb-tip"],d=h.position.distanceTo(f.position),m=.02,g=.005;l.inputState.pinching&&d>m+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&d<=m-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(s=e.getPose(t.gripSpace,i),s!==null&&(c.matrix.fromArray(s.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,s.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(s.linearVelocity)):c.hasLinearVelocity=!1,s.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(s.angularVelocity)):c.hasAngularVelocity=!1));o!==null&&(r=e.getPose(t.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Wu)))}return o!==null&&(o.visible=r!==null),c!==null&&(c.visible=s!==null),l!==null&&(l.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const i=new ze;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[e.jointName]=i,t.add(i)}return t.joints[e.jointName]}}class Io{constructor(t,e=25e-5){this.isFogExp2=!0,this.name="",this.color=new zt(t),this.density=e}clone(){return new Io(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class Xu extends Ue{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new On,this.environmentIntensity=1,this.environmentRotation=new On,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class Yu{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=ho,this.updateRanges=[],this.version=0,this.uuid=In()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,i){t*=this.stride,i*=e.stride;for(let r=0,s=this.stride;r<s;r++)this.array[t+r]=e.array[i+r];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=In()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(e,this.stride);return i.setUsage(this.usage),i}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=In()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Fe=new U;class Rs{constructor(t,e,i,r=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=i,this.normalized=r}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,i=this.data.count;e<i;e++)Fe.fromBufferAttribute(this,e),Fe.applyMatrix4(t),this.setXYZ(e,Fe.x,Fe.y,Fe.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)Fe.fromBufferAttribute(this,e),Fe.applyNormalMatrix(t),this.setXYZ(e,Fe.x,Fe.y,Fe.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)Fe.fromBufferAttribute(this,e),Fe.transformDirection(t),this.setXYZ(e,Fe.x,Fe.y,Fe.z);return this}getComponent(t,e){let i=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(i=fn(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=ae(i,this.array)),this.data.array[t*this.data.stride+this.offset+e]=i,this}setX(t,e){return this.normalized&&(e=ae(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=ae(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=ae(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=ae(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=fn(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=fn(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=fn(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=fn(e,this.array)),e}setXY(t,e,i){return t=t*this.data.stride+this.offset,this.normalized&&(e=ae(e,this.array),i=ae(i,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this}setXYZ(t,e,i,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=ae(e,this.array),i=ae(i,this.array),r=ae(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this.data.array[t+2]=r,this}setXYZW(t,e,i,r,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=ae(e,this.array),i=ae(i,this.array),r=ae(r,this.array),s=ae(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this.data.array[t+2]=r,this.data.array[t+3]=s,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let i=0;i<this.count;i++){const r=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)e.push(this.data.array[r+s])}return new se(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new Rs(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let i=0;i<this.count;i++){const r=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)e.push(this.data.array[r+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class xe extends Ti{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new zt(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}let ki;const cr=new U,Hi=new U,Gi=new U,Vi=new Ot,hr=new Ot,Nc=new ge,ns=new U,ur=new U,is=new U,gl=new Ot,ha=new Ot,_l=new Ot;class ye extends Ue{constructor(t=new xe){if(super(),this.isSprite=!0,this.type="Sprite",ki===void 0){ki=new he;const e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new Yu(e,5);ki.setIndex([0,1,2,0,2,3]),ki.setAttribute("position",new Rs(i,3,0,!1)),ki.setAttribute("uv",new Rs(i,2,3,!1))}this.geometry=ki,this.material=t,this.center=new Ot(.5,.5),this.count=1}raycast(t,e){t.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Hi.setFromMatrixScale(this.matrixWorld),Nc.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),Gi.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Hi.multiplyScalar(-Gi.z);const i=this.material.rotation;let r,s;i!==0&&(s=Math.cos(i),r=Math.sin(i));const a=this.center;rs(ns.set(-.5,-.5,0),Gi,a,Hi,r,s),rs(ur.set(.5,-.5,0),Gi,a,Hi,r,s),rs(is.set(.5,.5,0),Gi,a,Hi,r,s),gl.set(0,0),ha.set(1,0),_l.set(1,1);let o=t.ray.intersectTriangle(ns,ur,is,!1,cr);if(o===null&&(rs(ur.set(-.5,.5,0),Gi,a,Hi,r,s),ha.set(0,1),o=t.ray.intersectTriangle(ns,is,ur,!1,cr),o===null))return;const c=t.ray.origin.distanceTo(cr);c<t.near||c>t.far||e.push({distance:c,point:cr.clone(),uv:rn.getInterpolation(cr,ns,ur,is,gl,ha,_l,new Ot),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}}function rs(n,t,e,i,r,s){Vi.subVectors(n,e).addScalar(.5).multiply(i),r!==void 0?(hr.x=s*Vi.x-r*Vi.y,hr.y=r*Vi.x+s*Vi.y):hr.copy(Vi),n.copy(t),n.x+=hr.x,n.y+=hr.y,n.applyMatrix4(Nc)}const ua=new U,qu=new U,$u=new Wt;class Xn{constructor(t=new U(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,i,r){return this.normal.set(t,e,i),this.constant=r,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,i){const r=ua.subVectors(i,e).cross(qu.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(r,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const i=t.delta(ua),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const s=-(t.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:e.copy(t.start).addScaledVector(i,s)}intersectsLine(t){const e=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return e<0&&i>0||i<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const i=e||$u.getNormalMatrix(t),r=this.coplanarPoint(ua).applyMatrix4(t),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const li=new Lr,ju=new Ot(.5,.5),ss=new U;class Fc{constructor(t=new Xn,e=new Xn,i=new Xn,r=new Xn,s=new Xn,a=new Xn){this.planes=[t,e,i,r,s,a]}set(t,e,i,r,s,a){const o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(i),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(t){const e=this.planes;for(let i=0;i<6;i++)e[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,e=Mn,i=!1){const r=this.planes,s=t.elements,a=s[0],o=s[1],c=s[2],l=s[3],h=s[4],f=s[5],d=s[6],m=s[7],g=s[8],M=s[9],p=s[10],u=s[11],b=s[12],y=s[13],v=s[14],A=s[15];if(r[0].setComponents(l-a,m-h,u-g,A-b).normalize(),r[1].setComponents(l+a,m+h,u+g,A+b).normalize(),r[2].setComponents(l+o,m+f,u+M,A+y).normalize(),r[3].setComponents(l-o,m-f,u-M,A-y).normalize(),i)r[4].setComponents(c,d,p,v).normalize(),r[5].setComponents(l-c,m-d,u-p,A-v).normalize();else if(r[4].setComponents(l-c,m-d,u-p,A-v).normalize(),e===Mn)r[5].setComponents(l+c,m+d,u+p,A+v).normalize();else if(e===As)r[5].setComponents(c,d,p,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),li.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),li.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(li)}intersectsSprite(t){li.center.set(0,0,0);const e=ju.distanceTo(t.center);return li.radius=.7071067811865476+e,li.applyMatrix4(t.matrixWorld),this.intersectsSphere(li)}intersectsSphere(t){const e=this.planes,i=t.center,r=-t.radius;for(let s=0;s<6;s++)if(e[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(t){const e=this.planes;for(let i=0;i<6;i++){const r=e[i];if(ss.x=r.normal.x>0?t.max.x:t.min.x,ss.y=r.normal.y>0?t.max.y:t.min.y,ss.z=r.normal.z>0?t.max.z:t.min.z,r.distanceToPoint(ss)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let i=0;i<6;i++)if(e[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class xi extends Ti{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new zt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const Cs=new U,Ps=new U,xl=new ge,fr=new Ir,as=new Lr,fa=new U,vl=new U;class Tr extends Ue{constructor(t=new he,e=new xi){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,i=[0];for(let r=1,s=e.count;r<s;r++)Cs.fromBufferAttribute(e,r-1),Ps.fromBufferAttribute(e,r),i[r]=i[r-1],i[r]+=Cs.distanceTo(Ps);t.setAttribute("lineDistance",new we(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const i=this.geometry,r=this.matrixWorld,s=t.params.Line.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),as.copy(i.boundingSphere),as.applyMatrix4(r),as.radius+=s,t.ray.intersectsSphere(as)===!1)return;xl.copy(r).invert(),fr.copy(t.ray).applyMatrix4(xl);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=this.isLineSegments?2:1,h=i.index,d=i.attributes.position;if(h!==null){const m=Math.max(0,a.start),g=Math.min(h.count,a.start+a.count);for(let M=m,p=g-1;M<p;M+=l){const u=h.getX(M),b=h.getX(M+1),y=os(this,t,fr,c,u,b,M);y&&e.push(y)}if(this.isLineLoop){const M=h.getX(g-1),p=h.getX(m),u=os(this,t,fr,c,M,p,g-1);u&&e.push(u)}}else{const m=Math.max(0,a.start),g=Math.min(d.count,a.start+a.count);for(let M=m,p=g-1;M<p;M+=l){const u=os(this,t,fr,c,M,M+1,M);u&&e.push(u)}if(this.isLineLoop){const M=os(this,t,fr,c,g-1,m,g-1);M&&e.push(M)}}}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const r=e[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function os(n,t,e,i,r,s,a){const o=n.geometry.attributes.position;if(Cs.fromBufferAttribute(o,r),Ps.fromBufferAttribute(o,s),e.distanceSqToSegment(Cs,Ps,fa,vl)>i)return;fa.applyMatrix4(n.matrixWorld);const l=t.ray.origin.distanceTo(fa);if(!(l<t.near||l>t.far))return{distance:l,point:vl.clone().applyMatrix4(n.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:n}}const Ml=new U,yl=new U;class Oc extends Tr{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,i=[];for(let r=0,s=e.count;r<s;r+=2)Ml.fromBufferAttribute(e,r),yl.fromBufferAttribute(e,r+1),i[r]=r===0?0:i[r-1],i[r+1]=i[r]+Ml.distanceTo(yl);t.setAttribute("lineDistance",new we(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Ku extends Tr{constructor(t,e){super(t,e),this.isLineLoop=!0,this.type="LineLoop"}}class Sn extends Ti{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new zt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const Sl=new ge,uo=new Ir,ls=new Lr,cs=new U;class Nn extends Ue{constructor(t=new he,e=new Sn){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){const i=this.geometry,r=this.matrixWorld,s=t.params.Points.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),ls.copy(i.boundingSphere),ls.applyMatrix4(r),ls.radius+=s,t.ray.intersectsSphere(ls)===!1)return;Sl.copy(r).invert(),uo.copy(t.ray).applyMatrix4(Sl);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=i.index,f=i.attributes.position;if(l!==null){const d=Math.max(0,a.start),m=Math.min(l.count,a.start+a.count);for(let g=d,M=m;g<M;g++){const p=l.getX(g);cs.fromBufferAttribute(f,p),El(cs,p,c,r,t,e,this)}}else{const d=Math.max(0,a.start),m=Math.min(f.count,a.start+a.count);for(let g=d,M=m;g<M;g++)cs.fromBufferAttribute(f,g),El(cs,g,c,r,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const r=e[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function El(n,t,e,i,r,s,a){const o=uo.distanceSqToPoint(n);if(o<e){const c=new U;uo.closestPointToPoint(n,c),c.applyMatrix4(i);const l=r.ray.origin.distanceTo(c);if(l<r.near||l>r.far)return;s.push({distance:l,distanceToRay:Math.sqrt(o),point:c,index:t,face:null,faceIndex:null,barycoord:null,object:a})}}class Us extends ke{constructor(t,e,i,r,s,a,o,c,l){super(t,e,i,r,s,a,o,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Bc extends ke{constructor(t,e,i=Mi,r,s,a,o=gn,c=gn,l,h=yr,f=1){if(h!==yr&&h!==Sr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const d={width:t,height:e,depth:f};super(d,r,s,a,o,c,h,i,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Do(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}class zc extends ke{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}}class Uo extends he{constructor(t=[],e=[],i=1,r=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:i,detail:r};const s=[],a=[];o(r),l(i),h(),this.setAttribute("position",new we(s,3)),this.setAttribute("normal",new we(s.slice(),3)),this.setAttribute("uv",new we(a,2)),r===0?this.computeVertexNormals():this.normalizeNormals();function o(b){const y=new U,v=new U,A=new U;for(let E=0;E<e.length;E+=3)m(e[E+0],y),m(e[E+1],v),m(e[E+2],A),c(y,v,A,b)}function c(b,y,v,A){const E=A+1,w=[];for(let C=0;C<=E;C++){w[C]=[];const _=b.clone().lerp(v,C/E),x=y.clone().lerp(v,C/E),P=E-C;for(let L=0;L<=P;L++)L===0&&C===E?w[C][L]=_:w[C][L]=_.clone().lerp(x,L/P)}for(let C=0;C<E;C++)for(let _=0;_<2*(E-C)-1;_++){const x=Math.floor(_/2);_%2===0?(d(w[C][x+1]),d(w[C+1][x]),d(w[C][x])):(d(w[C][x+1]),d(w[C+1][x+1]),d(w[C+1][x]))}}function l(b){const y=new U;for(let v=0;v<s.length;v+=3)y.x=s[v+0],y.y=s[v+1],y.z=s[v+2],y.normalize().multiplyScalar(b),s[v+0]=y.x,s[v+1]=y.y,s[v+2]=y.z}function h(){const b=new U;for(let y=0;y<s.length;y+=3){b.x=s[y+0],b.y=s[y+1],b.z=s[y+2];const v=p(b)/2/Math.PI+.5,A=u(b)/Math.PI+.5;a.push(v,1-A)}g(),f()}function f(){for(let b=0;b<a.length;b+=6){const y=a[b+0],v=a[b+2],A=a[b+4],E=Math.max(y,v,A),w=Math.min(y,v,A);E>.9&&w<.1&&(y<.2&&(a[b+0]+=1),v<.2&&(a[b+2]+=1),A<.2&&(a[b+4]+=1))}}function d(b){s.push(b.x,b.y,b.z)}function m(b,y){const v=b*3;y.x=t[v+0],y.y=t[v+1],y.z=t[v+2]}function g(){const b=new U,y=new U,v=new U,A=new U,E=new Ot,w=new Ot,C=new Ot;for(let _=0,x=0;_<s.length;_+=9,x+=6){b.set(s[_+0],s[_+1],s[_+2]),y.set(s[_+3],s[_+4],s[_+5]),v.set(s[_+6],s[_+7],s[_+8]),E.set(a[x+0],a[x+1]),w.set(a[x+2],a[x+3]),C.set(a[x+4],a[x+5]),A.copy(b).add(y).add(v).divideScalar(3);const P=p(A);M(E,x+0,b,P),M(w,x+2,y,P),M(C,x+4,v,P)}}function M(b,y,v,A){A<0&&b.x===1&&(a[y]=b.x-1),v.x===0&&v.z===0&&(a[y]=A/2/Math.PI+.5)}function p(b){return Math.atan2(b.z,-b.x)}function u(b){return Math.atan2(-b.y,Math.sqrt(b.x*b.x+b.z*b.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Uo(t.vertices,t.indices,t.radius,t.details)}}class No extends Uo{constructor(t=1,e=0){const i=(1+Math.sqrt(5))/2,r=[-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],s=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(r,s,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new No(t.radius,t.detail)}}class Ns extends he{constructor(t=1,e=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:i,heightSegments:r};const s=t/2,a=e/2,o=Math.floor(i),c=Math.floor(r),l=o+1,h=c+1,f=t/o,d=e/c,m=[],g=[],M=[],p=[];for(let u=0;u<h;u++){const b=u*d-a;for(let y=0;y<l;y++){const v=y*f-s;g.push(v,-b,0),M.push(0,0,1),p.push(y/o),p.push(1-u/c)}}for(let u=0;u<c;u++)for(let b=0;b<o;b++){const y=b+l*u,v=b+l*(u+1),A=b+1+l*(u+1),E=b+1+l*u;m.push(y,v,E),m.push(v,A,E)}this.setIndex(m),this.setAttribute("position",new we(g,3)),this.setAttribute("normal",new we(M,3)),this.setAttribute("uv",new we(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ns(t.width,t.height,t.widthSegments,t.heightSegments)}}class Fs extends he{constructor(t=1,e=32,i=16,r=0,s=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:i,phiStart:r,phiLength:s,thetaStart:a,thetaLength:o},e=Math.max(3,Math.floor(e)),i=Math.max(2,Math.floor(i));const c=Math.min(a+o,Math.PI);let l=0;const h=[],f=new U,d=new U,m=[],g=[],M=[],p=[];for(let u=0;u<=i;u++){const b=[],y=u/i;let v=0;u===0&&a===0?v=.5/e:u===i&&c===Math.PI&&(v=-.5/e);for(let A=0;A<=e;A++){const E=A/e;f.x=-t*Math.cos(r+E*s)*Math.sin(a+y*o),f.y=t*Math.cos(a+y*o),f.z=t*Math.sin(r+E*s)*Math.sin(a+y*o),g.push(f.x,f.y,f.z),d.copy(f).normalize(),M.push(d.x,d.y,d.z),p.push(E+v,1-y),b.push(l++)}h.push(b)}for(let u=0;u<i;u++)for(let b=0;b<e;b++){const y=h[u][b+1],v=h[u][b],A=h[u+1][b],E=h[u+1][b+1];(u!==0||a>0)&&m.push(y,v,E),(u!==i-1||c<Math.PI)&&m.push(v,A,E)}this.setIndex(m),this.setAttribute("position",new we(g,3)),this.setAttribute("normal",new we(M,3)),this.setAttribute("uv",new we(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Fs(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class Fo extends he{constructor(t=1,e=.4,i=12,r=48,s=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:i,tubularSegments:r,arc:s},i=Math.floor(i),r=Math.floor(r);const a=[],o=[],c=[],l=[],h=new U,f=new U,d=new U;for(let m=0;m<=i;m++)for(let g=0;g<=r;g++){const M=g/r*s,p=m/i*Math.PI*2;f.x=(t+e*Math.cos(p))*Math.cos(M),f.y=(t+e*Math.cos(p))*Math.sin(M),f.z=e*Math.sin(p),o.push(f.x,f.y,f.z),h.x=t*Math.cos(M),h.y=t*Math.sin(M),d.subVectors(f,h).normalize(),c.push(d.x,d.y,d.z),l.push(g/r),l.push(m/i)}for(let m=1;m<=i;m++)for(let g=1;g<=r;g++){const M=(r+1)*m+g-1,p=(r+1)*(m-1)+g-1,u=(r+1)*(m-1)+g,b=(r+1)*m+g;a.push(M,p,b),a.push(p,u,b)}this.setIndex(a),this.setAttribute("position",new we(o,3)),this.setAttribute("normal",new we(c,3)),this.setAttribute("uv",new we(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Fo(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class Zu extends he{constructor(t=null){if(super(),this.type="WireframeGeometry",this.parameters={geometry:t},t!==null){const e=[],i=new Set,r=new U,s=new U;if(t.index!==null){const a=t.attributes.position,o=t.index;let c=t.groups;c.length===0&&(c=[{start:0,count:o.count,materialIndex:0}]);for(let l=0,h=c.length;l<h;++l){const f=c[l],d=f.start,m=f.count;for(let g=d,M=d+m;g<M;g+=3)for(let p=0;p<3;p++){const u=o.getX(g+p),b=o.getX(g+(p+1)%3);r.fromBufferAttribute(a,u),s.fromBufferAttribute(a,b),bl(r,s,i)===!0&&(e.push(r.x,r.y,r.z),e.push(s.x,s.y,s.z))}}}else{const a=t.attributes.position;for(let o=0,c=a.count/3;o<c;o++)for(let l=0;l<3;l++){const h=3*o+l,f=3*o+(l+1)%3;r.fromBufferAttribute(a,h),s.fromBufferAttribute(a,f),bl(r,s,i)===!0&&(e.push(r.x,r.y,r.z),e.push(s.x,s.y,s.z))}}this.setAttribute("position",new we(e,3))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}}function bl(n,t,e){const i=`${n.x},${n.y},${n.z}-${t.x},${t.y},${t.z}`,r=`${t.x},${t.y},${t.z}-${n.x},${n.y},${n.z}`;return e.has(i)===!0||e.has(r)===!0?!1:(e.add(i),e.add(r),!0)}class Ju extends Ti{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Yh,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class Qu extends Ti{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}class tf extends Ic{constructor(t=-1,e=1,i=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=i,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,i,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-t,a=i+t,o=r+e,c=r-e;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=l*this.view.offsetX,a=s+l*this.view.width,o-=h*this.view.offsetY,c=o-h*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}class ef extends tn{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}const Tl=new ge;class nf{constructor(t,e,i=0,r=1/0){this.ray=new Ir(t,e),this.near=i,this.far=r,this.camera=null,this.layers=new Lo,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return Tl.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Tl),this}intersectObject(t,e=!0,i=[]){return fo(t,this,i,e),i.sort(Al),i}intersectObjects(t,e=!0,i=[]){for(let r=0,s=t.length;r<s;r++)fo(t[r],this,i,e);return i.sort(Al),i}}function Al(n,t){return n.distance-t.distance}function fo(n,t,e,i){let r=!0;if(n.layers.test(t.layers)&&n.raycast(t,e)===!1&&(r=!1),r===!0&&i===!0){const s=n.children;for(let a=0,o=s.length;a<o;a++)fo(s[a],t,e,!0)}}class wl{constructor(t=1,e=0,i=0){this.radius=t,this.phi=e,this.theta=i}set(t,e,i){return this.radius=t,this.phi=e,this.theta=i,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=Kt(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,i){return this.radius=Math.sqrt(t*t+e*e+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,i),this.phi=Math.acos(Kt(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class rf extends bi{constructor(t,e=null){super(),this.object=t,this.domElement=e,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(t){if(t===void 0){console.warn("THREE.Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=t}disconnect(){}dispose(){}update(){}}function Rl(n,t,e,i){const r=sf(i);switch(e){case Sc:return n*t;case bc:return n*t/r.components*r.byteLength;case wo:return n*t/r.components*r.byteLength;case Tc:return n*t*2/r.components*r.byteLength;case Ro:return n*t*2/r.components*r.byteLength;case Ec:return n*t*3/r.components*r.byteLength;case pn:return n*t*4/r.components*r.byteLength;case Co:return n*t*4/r.components*r.byteLength;case xs:case vs:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case Ms:case ys:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case Oa:case za:return Math.max(n,16)*Math.max(t,8)/4;case Fa:case Ba:return Math.max(n,8)*Math.max(t,8)/2;case ka:case Ha:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case Ga:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case Va:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case Wa:return Math.floor((n+4)/5)*Math.floor((t+3)/4)*16;case Xa:return Math.floor((n+4)/5)*Math.floor((t+4)/5)*16;case Ya:return Math.floor((n+5)/6)*Math.floor((t+4)/5)*16;case qa:return Math.floor((n+5)/6)*Math.floor((t+5)/6)*16;case $a:return Math.floor((n+7)/8)*Math.floor((t+4)/5)*16;case ja:return Math.floor((n+7)/8)*Math.floor((t+5)/6)*16;case Ka:return Math.floor((n+7)/8)*Math.floor((t+7)/8)*16;case Za:return Math.floor((n+9)/10)*Math.floor((t+4)/5)*16;case Ja:return Math.floor((n+9)/10)*Math.floor((t+5)/6)*16;case Qa:return Math.floor((n+9)/10)*Math.floor((t+7)/8)*16;case to:return Math.floor((n+9)/10)*Math.floor((t+9)/10)*16;case eo:return Math.floor((n+11)/12)*Math.floor((t+9)/10)*16;case no:return Math.floor((n+11)/12)*Math.floor((t+11)/12)*16;case io:case ro:case so:return Math.ceil(n/4)*Math.ceil(t/4)*16;case ao:case oo:return Math.ceil(n/4)*Math.ceil(t/4)*8;case lo:case co:return Math.ceil(n/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function sf(n){switch(n){case Fn:case xc:return{byteLength:1,components:1};case vr:case vc:case Pr:return{byteLength:2,components:1};case To:case Ao:return{byteLength:2,components:4};case Mi:case bo:case Ln:return{byteLength:4,components:1};case Mc:case yc:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Eo}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Eo);function kc(){let n=null,t=!1,e=null,i=null;function r(s,a){e(s,a),i=n.requestAnimationFrame(r)}return{start:function(){t!==!0&&e!==null&&(i=n.requestAnimationFrame(r),t=!0)},stop:function(){n.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(s){e=s},setContext:function(s){n=s}}}function af(n){const t=new WeakMap;function e(o,c){const l=o.array,h=o.usage,f=l.byteLength,d=n.createBuffer();n.bindBuffer(c,d),n.bufferData(c,l,h),o.onUploadCallback();let m;if(l instanceof Float32Array)m=n.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)m=n.HALF_FLOAT;else if(l instanceof Uint16Array)o.isFloat16BufferAttribute?m=n.HALF_FLOAT:m=n.UNSIGNED_SHORT;else if(l instanceof Int16Array)m=n.SHORT;else if(l instanceof Uint32Array)m=n.UNSIGNED_INT;else if(l instanceof Int32Array)m=n.INT;else if(l instanceof Int8Array)m=n.BYTE;else if(l instanceof Uint8Array)m=n.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)m=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:d,type:m,bytesPerElement:l.BYTES_PER_ELEMENT,version:o.version,size:f}}function i(o,c,l){const h=c.array,f=c.updateRanges;if(n.bindBuffer(l,o),f.length===0)n.bufferSubData(l,0,h);else{f.sort((m,g)=>m.start-g.start);let d=0;for(let m=1;m<f.length;m++){const g=f[d],M=f[m];M.start<=g.start+g.count+1?g.count=Math.max(g.count,M.start+M.count-g.start):(++d,f[d]=M)}f.length=d+1;for(let m=0,g=f.length;m<g;m++){const M=f[m];n.bufferSubData(l,M.start*h.BYTES_PER_ELEMENT,h,M.start,M.count)}c.clearUpdateRanges()}c.onUploadCallback()}function r(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);const c=t.get(o);c&&(n.deleteBuffer(c.buffer),t.delete(o))}function a(o,c){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const h=t.get(o);(!h||h.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const l=t.get(o);if(l===void 0)t.set(o,e(o,c));else if(l.version<o.version){if(l.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(l.buffer,o,c),l.version=o.version}}return{get:r,remove:s,update:a}}var of=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,lf=`#ifdef USE_ALPHAHASH
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
#endif`,cf=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,hf=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,uf=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,ff=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,df=`#ifdef USE_AOMAP
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
#endif`,pf=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,mf=`#ifdef USE_BATCHING
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
#endif`,gf=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,_f=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,xf=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,vf=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Mf=`#ifdef USE_IRIDESCENCE
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
#endif`,yf=`#ifdef USE_BUMPMAP
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
#endif`,Sf=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Ef=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,bf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Tf=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Af=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,wf=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Rf=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Cf=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Pf=`#define PI 3.141592653589793
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
} // validated`,Df=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Lf=`vec3 transformedNormal = objectNormal;
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
#endif`,If=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Uf=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Nf=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Ff=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Of="gl_FragColor = linearToOutputTexel( gl_FragColor );",Bf=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,zf=`#ifdef USE_ENVMAP
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
#endif`,kf=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Hf=`#ifdef USE_ENVMAP
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
#endif`,Gf=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Vf=`#ifdef USE_ENVMAP
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
#endif`,Wf=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Xf=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Yf=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,qf=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,$f=`#ifdef USE_GRADIENTMAP
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
}`,jf=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Kf=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Zf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Jf=`uniform bool receiveShadow;
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
#endif`,Qf=`#ifdef USE_ENVMAP
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
#endif`,td=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,ed=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,nd=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,id=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,rd=`PhysicalMaterial material;
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
#endif`,sd=`struct PhysicalMaterial {
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
}`,ad=`
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
#endif`,od=`#if defined( RE_IndirectDiffuse )
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
#endif`,ld=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,cd=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,hd=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,ud=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,fd=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,dd=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,pd=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,md=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,gd=`#if defined( USE_POINTS_UV )
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
#endif`,_d=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,xd=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,vd=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Md=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,yd=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Sd=`#ifdef USE_MORPHTARGETS
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
#endif`,Ed=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,bd=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Td=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Ad=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,wd=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Rd=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Cd=`#ifdef USE_NORMALMAP
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
#endif`,Pd=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Dd=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Ld=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Id=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Ud=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Nd=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Fd=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Od=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Bd=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,zd=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,kd=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Hd=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Gd=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Vd=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Wd=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Xd=`float getShadowMask() {
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
}`,Yd=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,qd=`#ifdef USE_SKINNING
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
#endif`,$d=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,jd=`#ifdef USE_SKINNING
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
#endif`,Kd=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Zd=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Jd=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Qd=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,tp=`#ifdef USE_TRANSMISSION
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
#endif`,ep=`#ifdef USE_TRANSMISSION
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
#endif`,np=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,ip=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,rp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,sp=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const ap=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,op=`uniform sampler2D t2D;
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
}`,lp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,cp=`#ifdef ENVMAP_TYPE_CUBE
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
}`,hp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,up=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,fp=`#include <common>
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
}`,dp=`#if DEPTH_PACKING == 3200
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
}`,pp=`#define DISTANCE
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
}`,mp=`#define DISTANCE
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
}`,gp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,_p=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,xp=`uniform float scale;
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
}`,vp=`uniform vec3 diffuse;
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
}`,Mp=`#include <common>
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
}`,yp=`uniform vec3 diffuse;
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
}`,Sp=`#define LAMBERT
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
}`,Ep=`#define LAMBERT
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
}`,bp=`#define MATCAP
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
}`,Tp=`#define MATCAP
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
}`,Ap=`#define NORMAL
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
}`,wp=`#define NORMAL
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
}`,Rp=`#define PHONG
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
}`,Cp=`#define PHONG
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
}`,Pp=`#define STANDARD
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
}`,Dp=`#define STANDARD
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
}`,Lp=`#define TOON
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
}`,Ip=`#define TOON
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
}`,Up=`uniform float size;
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
}`,Np=`uniform vec3 diffuse;
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
}`,Fp=`#include <common>
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
}`,Op=`uniform vec3 color;
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
}`,Bp=`uniform float rotation;
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
}`,zp=`uniform vec3 diffuse;
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
}`,Yt={alphahash_fragment:of,alphahash_pars_fragment:lf,alphamap_fragment:cf,alphamap_pars_fragment:hf,alphatest_fragment:uf,alphatest_pars_fragment:ff,aomap_fragment:df,aomap_pars_fragment:pf,batching_pars_vertex:mf,batching_vertex:gf,begin_vertex:_f,beginnormal_vertex:xf,bsdfs:vf,iridescence_fragment:Mf,bumpmap_pars_fragment:yf,clipping_planes_fragment:Sf,clipping_planes_pars_fragment:Ef,clipping_planes_pars_vertex:bf,clipping_planes_vertex:Tf,color_fragment:Af,color_pars_fragment:wf,color_pars_vertex:Rf,color_vertex:Cf,common:Pf,cube_uv_reflection_fragment:Df,defaultnormal_vertex:Lf,displacementmap_pars_vertex:If,displacementmap_vertex:Uf,emissivemap_fragment:Nf,emissivemap_pars_fragment:Ff,colorspace_fragment:Of,colorspace_pars_fragment:Bf,envmap_fragment:zf,envmap_common_pars_fragment:kf,envmap_pars_fragment:Hf,envmap_pars_vertex:Gf,envmap_physical_pars_fragment:Qf,envmap_vertex:Vf,fog_vertex:Wf,fog_pars_vertex:Xf,fog_fragment:Yf,fog_pars_fragment:qf,gradientmap_pars_fragment:$f,lightmap_pars_fragment:jf,lights_lambert_fragment:Kf,lights_lambert_pars_fragment:Zf,lights_pars_begin:Jf,lights_toon_fragment:td,lights_toon_pars_fragment:ed,lights_phong_fragment:nd,lights_phong_pars_fragment:id,lights_physical_fragment:rd,lights_physical_pars_fragment:sd,lights_fragment_begin:ad,lights_fragment_maps:od,lights_fragment_end:ld,logdepthbuf_fragment:cd,logdepthbuf_pars_fragment:hd,logdepthbuf_pars_vertex:ud,logdepthbuf_vertex:fd,map_fragment:dd,map_pars_fragment:pd,map_particle_fragment:md,map_particle_pars_fragment:gd,metalnessmap_fragment:_d,metalnessmap_pars_fragment:xd,morphinstance_vertex:vd,morphcolor_vertex:Md,morphnormal_vertex:yd,morphtarget_pars_vertex:Sd,morphtarget_vertex:Ed,normal_fragment_begin:bd,normal_fragment_maps:Td,normal_pars_fragment:Ad,normal_pars_vertex:wd,normal_vertex:Rd,normalmap_pars_fragment:Cd,clearcoat_normal_fragment_begin:Pd,clearcoat_normal_fragment_maps:Dd,clearcoat_pars_fragment:Ld,iridescence_pars_fragment:Id,opaque_fragment:Ud,packing:Nd,premultiplied_alpha_fragment:Fd,project_vertex:Od,dithering_fragment:Bd,dithering_pars_fragment:zd,roughnessmap_fragment:kd,roughnessmap_pars_fragment:Hd,shadowmap_pars_fragment:Gd,shadowmap_pars_vertex:Vd,shadowmap_vertex:Wd,shadowmask_pars_fragment:Xd,skinbase_vertex:Yd,skinning_pars_vertex:qd,skinning_vertex:$d,skinnormal_vertex:jd,specularmap_fragment:Kd,specularmap_pars_fragment:Zd,tonemapping_fragment:Jd,tonemapping_pars_fragment:Qd,transmission_fragment:tp,transmission_pars_fragment:ep,uv_pars_fragment:np,uv_pars_vertex:ip,uv_vertex:rp,worldpos_vertex:sp,background_vert:ap,background_frag:op,backgroundCube_vert:lp,backgroundCube_frag:cp,cube_vert:hp,cube_frag:up,depth_vert:fp,depth_frag:dp,distanceRGBA_vert:pp,distanceRGBA_frag:mp,equirect_vert:gp,equirect_frag:_p,linedashed_vert:xp,linedashed_frag:vp,meshbasic_vert:Mp,meshbasic_frag:yp,meshlambert_vert:Sp,meshlambert_frag:Ep,meshmatcap_vert:bp,meshmatcap_frag:Tp,meshnormal_vert:Ap,meshnormal_frag:wp,meshphong_vert:Rp,meshphong_frag:Cp,meshphysical_vert:Pp,meshphysical_frag:Dp,meshtoon_vert:Lp,meshtoon_frag:Ip,points_vert:Up,points_frag:Np,shadow_vert:Fp,shadow_frag:Op,sprite_vert:Bp,sprite_frag:zp},mt={common:{diffuse:{value:new zt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Wt},alphaMap:{value:null},alphaMapTransform:{value:new Wt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Wt}},envmap:{envMap:{value:null},envMapRotation:{value:new Wt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Wt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Wt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Wt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Wt},normalScale:{value:new Ot(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Wt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Wt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Wt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Wt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new zt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new zt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Wt},alphaTest:{value:0},uvTransform:{value:new Wt}},sprite:{diffuse:{value:new zt(16777215)},opacity:{value:1},center:{value:new Ot(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Wt},alphaMap:{value:null},alphaMapTransform:{value:new Wt},alphaTest:{value:0}}},xn={basic:{uniforms:Oe([mt.common,mt.specularmap,mt.envmap,mt.aomap,mt.lightmap,mt.fog]),vertexShader:Yt.meshbasic_vert,fragmentShader:Yt.meshbasic_frag},lambert:{uniforms:Oe([mt.common,mt.specularmap,mt.envmap,mt.aomap,mt.lightmap,mt.emissivemap,mt.bumpmap,mt.normalmap,mt.displacementmap,mt.fog,mt.lights,{emissive:{value:new zt(0)}}]),vertexShader:Yt.meshlambert_vert,fragmentShader:Yt.meshlambert_frag},phong:{uniforms:Oe([mt.common,mt.specularmap,mt.envmap,mt.aomap,mt.lightmap,mt.emissivemap,mt.bumpmap,mt.normalmap,mt.displacementmap,mt.fog,mt.lights,{emissive:{value:new zt(0)},specular:{value:new zt(1118481)},shininess:{value:30}}]),vertexShader:Yt.meshphong_vert,fragmentShader:Yt.meshphong_frag},standard:{uniforms:Oe([mt.common,mt.envmap,mt.aomap,mt.lightmap,mt.emissivemap,mt.bumpmap,mt.normalmap,mt.displacementmap,mt.roughnessmap,mt.metalnessmap,mt.fog,mt.lights,{emissive:{value:new zt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Yt.meshphysical_vert,fragmentShader:Yt.meshphysical_frag},toon:{uniforms:Oe([mt.common,mt.aomap,mt.lightmap,mt.emissivemap,mt.bumpmap,mt.normalmap,mt.displacementmap,mt.gradientmap,mt.fog,mt.lights,{emissive:{value:new zt(0)}}]),vertexShader:Yt.meshtoon_vert,fragmentShader:Yt.meshtoon_frag},matcap:{uniforms:Oe([mt.common,mt.bumpmap,mt.normalmap,mt.displacementmap,mt.fog,{matcap:{value:null}}]),vertexShader:Yt.meshmatcap_vert,fragmentShader:Yt.meshmatcap_frag},points:{uniforms:Oe([mt.points,mt.fog]),vertexShader:Yt.points_vert,fragmentShader:Yt.points_frag},dashed:{uniforms:Oe([mt.common,mt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Yt.linedashed_vert,fragmentShader:Yt.linedashed_frag},depth:{uniforms:Oe([mt.common,mt.displacementmap]),vertexShader:Yt.depth_vert,fragmentShader:Yt.depth_frag},normal:{uniforms:Oe([mt.common,mt.bumpmap,mt.normalmap,mt.displacementmap,{opacity:{value:1}}]),vertexShader:Yt.meshnormal_vert,fragmentShader:Yt.meshnormal_frag},sprite:{uniforms:Oe([mt.sprite,mt.fog]),vertexShader:Yt.sprite_vert,fragmentShader:Yt.sprite_frag},background:{uniforms:{uvTransform:{value:new Wt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Yt.background_vert,fragmentShader:Yt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Wt}},vertexShader:Yt.backgroundCube_vert,fragmentShader:Yt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Yt.cube_vert,fragmentShader:Yt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Yt.equirect_vert,fragmentShader:Yt.equirect_frag},distanceRGBA:{uniforms:Oe([mt.common,mt.displacementmap,{referencePosition:{value:new U},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Yt.distanceRGBA_vert,fragmentShader:Yt.distanceRGBA_frag},shadow:{uniforms:Oe([mt.lights,mt.fog,{color:{value:new zt(0)},opacity:{value:1}}]),vertexShader:Yt.shadow_vert,fragmentShader:Yt.shadow_frag}};xn.physical={uniforms:Oe([xn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Wt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Wt},clearcoatNormalScale:{value:new Ot(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Wt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Wt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Wt},sheen:{value:0},sheenColor:{value:new zt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Wt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Wt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Wt},transmissionSamplerSize:{value:new Ot},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Wt},attenuationDistance:{value:0},attenuationColor:{value:new zt(0)},specularColor:{value:new zt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Wt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Wt},anisotropyVector:{value:new Ot},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Wt}}]),vertexShader:Yt.meshphysical_vert,fragmentShader:Yt.meshphysical_frag};const hs={r:0,b:0,g:0},ci=new On,kp=new ge;function Hp(n,t,e,i,r,s,a){const o=new zt(0);let c=s===!0?0:1,l,h,f=null,d=0,m=null;function g(y){let v=y.isScene===!0?y.background:null;return v&&v.isTexture&&(v=(y.backgroundBlurriness>0?e:t).get(v)),v}function M(y){let v=!1;const A=g(y);A===null?u(o,c):A&&A.isColor&&(u(A,1),v=!0);const E=n.xr.getEnvironmentBlendMode();E==="additive"?i.buffers.color.setClear(0,0,0,1,a):E==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,a),(n.autoClear||v)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function p(y,v){const A=g(v);A&&(A.isCubeTexture||A.mapping===Is)?(h===void 0&&(h=new sn(new Nr(1,1,1),new ni({name:"BackgroundCubeMaterial",uniforms:nr(xn.backgroundCube.uniforms),vertexShader:xn.backgroundCube.vertexShader,fragmentShader:xn.backgroundCube.fragmentShader,side:We,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(E,w,C){this.matrixWorld.copyPosition(C.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(h)),ci.copy(v.backgroundRotation),ci.x*=-1,ci.y*=-1,ci.z*=-1,A.isCubeTexture&&A.isRenderTargetTexture===!1&&(ci.y*=-1,ci.z*=-1),h.material.uniforms.envMap.value=A,h.material.uniforms.flipEnvMap.value=A.isCubeTexture&&A.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=v.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(kp.makeRotationFromEuler(ci)),h.material.toneMapped=ie.getTransfer(A.colorSpace)!==le,(f!==A||d!==A.version||m!==n.toneMapping)&&(h.material.needsUpdate=!0,f=A,d=A.version,m=n.toneMapping),h.layers.enableAll(),y.unshift(h,h.geometry,h.material,0,0,null)):A&&A.isTexture&&(l===void 0&&(l=new sn(new Ns(2,2),new ni({name:"BackgroundMaterial",uniforms:nr(xn.background.uniforms),vertexShader:xn.background.vertexShader,fragmentShader:xn.background.fragmentShader,side:ti,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(l)),l.material.uniforms.t2D.value=A,l.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,l.material.toneMapped=ie.getTransfer(A.colorSpace)!==le,A.matrixAutoUpdate===!0&&A.updateMatrix(),l.material.uniforms.uvTransform.value.copy(A.matrix),(f!==A||d!==A.version||m!==n.toneMapping)&&(l.material.needsUpdate=!0,f=A,d=A.version,m=n.toneMapping),l.layers.enableAll(),y.unshift(l,l.geometry,l.material,0,0,null))}function u(y,v){y.getRGB(hs,Lc(n)),i.buffers.color.setClear(hs.r,hs.g,hs.b,v,a)}function b(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return o},setClearColor:function(y,v=1){o.set(y),c=v,u(o,c)},getClearAlpha:function(){return c},setClearAlpha:function(y){c=y,u(o,c)},render:M,addToRenderList:p,dispose:b}}function Gp(n,t){const e=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},r=d(null);let s=r,a=!1;function o(x,P,L,F,X){let k=!1;const H=f(F,L,P);s!==H&&(s=H,l(s.object)),k=m(x,F,L,X),k&&g(x,F,L,X),X!==null&&t.update(X,n.ELEMENT_ARRAY_BUFFER),(k||a)&&(a=!1,v(x,P,L,F),X!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get(X).buffer))}function c(){return n.createVertexArray()}function l(x){return n.bindVertexArray(x)}function h(x){return n.deleteVertexArray(x)}function f(x,P,L){const F=L.wireframe===!0;let X=i[x.id];X===void 0&&(X={},i[x.id]=X);let k=X[P.id];k===void 0&&(k={},X[P.id]=k);let H=k[F];return H===void 0&&(H=d(c()),k[F]=H),H}function d(x){const P=[],L=[],F=[];for(let X=0;X<e;X++)P[X]=0,L[X]=0,F[X]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:P,enabledAttributes:L,attributeDivisors:F,object:x,attributes:{},index:null}}function m(x,P,L,F){const X=s.attributes,k=P.attributes;let H=0;const K=L.getAttributes();for(const G in K)if(K[G].location>=0){const V=X[G];let et=k[G];if(et===void 0&&(G==="instanceMatrix"&&x.instanceMatrix&&(et=x.instanceMatrix),G==="instanceColor"&&x.instanceColor&&(et=x.instanceColor)),V===void 0||V.attribute!==et||et&&V.data!==et.data)return!0;H++}return s.attributesNum!==H||s.index!==F}function g(x,P,L,F){const X={},k=P.attributes;let H=0;const K=L.getAttributes();for(const G in K)if(K[G].location>=0){let V=k[G];V===void 0&&(G==="instanceMatrix"&&x.instanceMatrix&&(V=x.instanceMatrix),G==="instanceColor"&&x.instanceColor&&(V=x.instanceColor));const et={};et.attribute=V,V&&V.data&&(et.data=V.data),X[G]=et,H++}s.attributes=X,s.attributesNum=H,s.index=F}function M(){const x=s.newAttributes;for(let P=0,L=x.length;P<L;P++)x[P]=0}function p(x){u(x,0)}function u(x,P){const L=s.newAttributes,F=s.enabledAttributes,X=s.attributeDivisors;L[x]=1,F[x]===0&&(n.enableVertexAttribArray(x),F[x]=1),X[x]!==P&&(n.vertexAttribDivisor(x,P),X[x]=P)}function b(){const x=s.newAttributes,P=s.enabledAttributes;for(let L=0,F=P.length;L<F;L++)P[L]!==x[L]&&(n.disableVertexAttribArray(L),P[L]=0)}function y(x,P,L,F,X,k,H){H===!0?n.vertexAttribIPointer(x,P,L,X,k):n.vertexAttribPointer(x,P,L,F,X,k)}function v(x,P,L,F){M();const X=F.attributes,k=L.getAttributes(),H=P.defaultAttributeValues;for(const K in k){const G=k[K];if(G.location>=0){let N=X[K];if(N===void 0&&(K==="instanceMatrix"&&x.instanceMatrix&&(N=x.instanceMatrix),K==="instanceColor"&&x.instanceColor&&(N=x.instanceColor)),N!==void 0){const V=N.normalized,et=N.itemSize,vt=t.get(N);if(vt===void 0)continue;const qt=vt.buffer,Zt=vt.type,$t=vt.bytesPerElement,W=Zt===n.INT||Zt===n.UNSIGNED_INT||N.gpuType===bo;if(N.isInterleavedBufferAttribute){const Z=N.data,_t=Z.stride,Ct=N.offset;if(Z.isInstancedInterleavedBuffer){for(let St=0;St<G.locationSize;St++)u(G.location+St,Z.meshPerAttribute);x.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=Z.meshPerAttribute*Z.count)}else for(let St=0;St<G.locationSize;St++)p(G.location+St);n.bindBuffer(n.ARRAY_BUFFER,qt);for(let St=0;St<G.locationSize;St++)y(G.location+St,et/G.locationSize,Zt,V,_t*$t,(Ct+et/G.locationSize*St)*$t,W)}else{if(N.isInstancedBufferAttribute){for(let Z=0;Z<G.locationSize;Z++)u(G.location+Z,N.meshPerAttribute);x.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=N.meshPerAttribute*N.count)}else for(let Z=0;Z<G.locationSize;Z++)p(G.location+Z);n.bindBuffer(n.ARRAY_BUFFER,qt);for(let Z=0;Z<G.locationSize;Z++)y(G.location+Z,et/G.locationSize,Zt,V,et*$t,et/G.locationSize*Z*$t,W)}}else if(H!==void 0){const V=H[K];if(V!==void 0)switch(V.length){case 2:n.vertexAttrib2fv(G.location,V);break;case 3:n.vertexAttrib3fv(G.location,V);break;case 4:n.vertexAttrib4fv(G.location,V);break;default:n.vertexAttrib1fv(G.location,V)}}}}b()}function A(){C();for(const x in i){const P=i[x];for(const L in P){const F=P[L];for(const X in F)h(F[X].object),delete F[X];delete P[L]}delete i[x]}}function E(x){if(i[x.id]===void 0)return;const P=i[x.id];for(const L in P){const F=P[L];for(const X in F)h(F[X].object),delete F[X];delete P[L]}delete i[x.id]}function w(x){for(const P in i){const L=i[P];if(L[x.id]===void 0)continue;const F=L[x.id];for(const X in F)h(F[X].object),delete F[X];delete L[x.id]}}function C(){_(),a=!0,s!==r&&(s=r,l(s.object))}function _(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:o,reset:C,resetDefaultState:_,dispose:A,releaseStatesOfGeometry:E,releaseStatesOfProgram:w,initAttributes:M,enableAttribute:p,disableUnusedAttributes:b}}function Vp(n,t,e){let i;function r(l){i=l}function s(l,h){n.drawArrays(i,l,h),e.update(h,i,1)}function a(l,h,f){f!==0&&(n.drawArraysInstanced(i,l,h,f),e.update(h,i,f))}function o(l,h,f){if(f===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,h,0,f);let m=0;for(let g=0;g<f;g++)m+=h[g];e.update(m,i,1)}function c(l,h,f,d){if(f===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let g=0;g<l.length;g++)a(l[g],h[g],d[g]);else{m.multiDrawArraysInstancedWEBGL(i,l,0,h,0,d,0,f);let g=0;for(let M=0;M<f;M++)g+=h[M]*d[M];e.update(g,i,1)}}this.setMode=r,this.render=s,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=c}function Wp(n,t,e,i){let r;function s(){if(r!==void 0)return r;if(t.has("EXT_texture_filter_anisotropic")===!0){const w=t.get("EXT_texture_filter_anisotropic");r=n.getParameter(w.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function a(w){return!(w!==pn&&i.convert(w)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(w){const C=w===Pr&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(w!==Fn&&i.convert(w)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&w!==Ln&&!C)}function c(w){if(w==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";w="mediump"}return w==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=e.precision!==void 0?e.precision:"highp";const h=c(l);h!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);const f=e.logarithmicDepthBuffer===!0,d=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),m=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),M=n.getParameter(n.MAX_TEXTURE_SIZE),p=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),u=n.getParameter(n.MAX_VERTEX_ATTRIBS),b=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),y=n.getParameter(n.MAX_VARYING_VECTORS),v=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),A=g>0,E=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:c,textureFormatReadable:a,textureTypeReadable:o,precision:l,logarithmicDepthBuffer:f,reversedDepthBuffer:d,maxTextures:m,maxVertexTextures:g,maxTextureSize:M,maxCubemapSize:p,maxAttributes:u,maxVertexUniforms:b,maxVaryings:y,maxFragmentUniforms:v,vertexTextures:A,maxSamples:E}}function Xp(n){const t=this;let e=null,i=0,r=!1,s=!1;const a=new Xn,o=new Wt,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(f,d){const m=f.length!==0||d||i!==0||r;return r=d,i=f.length,m},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(f,d){e=h(f,d,0)},this.setState=function(f,d,m){const g=f.clippingPlanes,M=f.clipIntersection,p=f.clipShadows,u=n.get(f);if(!r||g===null||g.length===0||s&&!p)s?h(null):l();else{const b=s?0:i,y=b*4;let v=u.clippingState||null;c.value=v,v=h(g,d,y,m);for(let A=0;A!==y;++A)v[A]=e[A];u.clippingState=v,this.numIntersection=M?this.numPlanes:0,this.numPlanes+=b}};function l(){c.value!==e&&(c.value=e,c.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function h(f,d,m,g){const M=f!==null?f.length:0;let p=null;if(M!==0){if(p=c.value,g!==!0||p===null){const u=m+M*4,b=d.matrixWorldInverse;o.getNormalMatrix(b),(p===null||p.length<u)&&(p=new Float32Array(u));for(let y=0,v=m;y!==M;++y,v+=4)a.copy(f[y]).applyMatrix4(b,o),a.normal.toArray(p,v),p[v+3]=a.constant}c.value=p,c.needsUpdate=!0}return t.numPlanes=M,t.numIntersection=0,p}}function Yp(n){let t=new WeakMap;function e(a,o){return o===La?a.mapping=Qi:o===Ia&&(a.mapping=tr),a}function i(a){if(a&&a.isTexture){const o=a.mapping;if(o===La||o===Ia)if(t.has(a)){const c=t.get(a).texture;return e(c,a.mapping)}else{const c=a.image;if(c&&c.height>0){const l=new Vu(c.height);return l.fromEquirectangularTexture(n,a),t.set(a,l),a.addEventListener("dispose",r),e(l.texture,a.mapping)}else return null}}return a}function r(a){const o=a.target;o.removeEventListener("dispose",r);const c=t.get(o);c!==void 0&&(t.delete(o),c.dispose())}function s(){t=new WeakMap}return{get:i,dispose:s}}const qi=4,Cl=[.125,.215,.35,.446,.526,.582],mi=20,da=new tf,Pl=new zt;let pa=null,ma=0,ga=0,_a=!1;const ui=(1+Math.sqrt(5))/2,Wi=1/ui,Dl=[new U(-ui,Wi,0),new U(ui,Wi,0),new U(-Wi,0,ui),new U(Wi,0,ui),new U(0,ui,-Wi),new U(0,ui,Wi),new U(-1,1,-1),new U(1,1,-1),new U(-1,1,1),new U(1,1,1)],qp=new U;class Ll{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,i=.1,r=100,s={}){const{size:a=256,position:o=qp}=s;pa=this._renderer.getRenderTarget(),ma=this._renderer.getActiveCubeFace(),ga=this._renderer.getActiveMipmapLevel(),_a=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);const c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(t,i,r,c,o),e>0&&this._blur(c,0,0,e),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Nl(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Ul(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(pa,ma,ga),this._renderer.xr.enabled=_a,t.scissorTest=!1,us(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Qi||t.mapping===tr?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),pa=this._renderer.getRenderTarget(),ma=this._renderer.getActiveCubeFace(),ga=this._renderer.getActiveMipmapLevel(),_a=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=e||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,i={magFilter:dn,minFilter:dn,generateMipmaps:!1,type:Pr,format:pn,colorSpace:er,depthBuffer:!1},r=Il(t,e,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Il(t,e,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=$p(s)),this._blurMaterial=jp(s,t,e)}return r}_compileMaterial(t){const e=new sn(this._lodPlanes[0],t);this._renderer.compile(e,da)}_sceneToCubeUV(t,e,i,r,s){const c=new tn(90,1,e,i),l=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],f=this._renderer,d=f.autoClear,m=f.toneMapping;f.getClearColor(Pl),f.toneMapping=Jn,f.autoClear=!1,f.state.buffers.depth.getReversed()&&(f.setRenderTarget(r),f.clearDepth(),f.setRenderTarget(null));const M=new Ur({name:"PMREM.Background",side:We,depthWrite:!1,depthTest:!1}),p=new sn(new Nr,M);let u=!1;const b=t.background;b?b.isColor&&(M.color.copy(b),t.background=null,u=!0):(M.color.copy(Pl),u=!0);for(let y=0;y<6;y++){const v=y%3;v===0?(c.up.set(0,l[y],0),c.position.set(s.x,s.y,s.z),c.lookAt(s.x+h[y],s.y,s.z)):v===1?(c.up.set(0,0,l[y]),c.position.set(s.x,s.y,s.z),c.lookAt(s.x,s.y+h[y],s.z)):(c.up.set(0,l[y],0),c.position.set(s.x,s.y,s.z),c.lookAt(s.x,s.y,s.z+h[y]));const A=this._cubeSize;us(r,v*A,y>2?A:0,A,A),f.setRenderTarget(r),u&&f.render(p,c),f.render(t,c)}p.geometry.dispose(),p.material.dispose(),f.toneMapping=m,f.autoClear=d,t.background=b}_textureToCubeUV(t,e){const i=this._renderer,r=t.mapping===Qi||t.mapping===tr;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Nl()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Ul());const s=r?this._cubemapMaterial:this._equirectMaterial,a=new sn(this._lodPlanes[0],s),o=s.uniforms;o.envMap.value=t;const c=this._cubeSize;us(e,0,0,3*c,2*c),i.setRenderTarget(e),i.render(a,da)}_applyPMREM(t){const e=this._renderer,i=e.autoClear;e.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const a=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),o=Dl[(r-s-1)%Dl.length];this._blur(t,s-1,s,a,o)}e.autoClear=i}_blur(t,e,i,r,s){const a=this._pingPongRenderTarget;this._halfBlur(t,a,e,i,r,"latitudinal",s),this._halfBlur(a,t,i,i,r,"longitudinal",s)}_halfBlur(t,e,i,r,s,a,o){const c=this._renderer,l=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,f=new sn(this._lodPlanes[r],l),d=l.uniforms,m=this._sizeLods[i]-1,g=isFinite(s)?Math.PI/(2*m):2*Math.PI/(2*mi-1),M=s/g,p=isFinite(s)?1+Math.floor(h*M):mi;p>mi&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${mi}`);const u=[];let b=0;for(let w=0;w<mi;++w){const C=w/M,_=Math.exp(-C*C/2);u.push(_),w===0?b+=_:w<p&&(b+=2*_)}for(let w=0;w<u.length;w++)u[w]=u[w]/b;d.envMap.value=t.texture,d.samples.value=p,d.weights.value=u,d.latitudinal.value=a==="latitudinal",o&&(d.poleAxis.value=o);const{_lodMax:y}=this;d.dTheta.value=g,d.mipInt.value=y-i;const v=this._sizeLods[r],A=3*v*(r>y-qi?r-y+qi:0),E=4*(this._cubeSize-v);us(e,A,E,3*v,2*v),c.setRenderTarget(e),c.render(f,da)}}function $p(n){const t=[],e=[],i=[];let r=n;const s=n-qi+1+Cl.length;for(let a=0;a<s;a++){const o=Math.pow(2,r);e.push(o);let c=1/o;a>n-qi?c=Cl[a-n+qi-1]:a===0&&(c=0),i.push(c);const l=1/(o-2),h=-l,f=1+l,d=[h,h,f,h,f,f,h,h,f,f,h,f],m=6,g=6,M=3,p=2,u=1,b=new Float32Array(M*g*m),y=new Float32Array(p*g*m),v=new Float32Array(u*g*m);for(let E=0;E<m;E++){const w=E%3*2/3-1,C=E>2?0:-1,_=[w,C,0,w+2/3,C,0,w+2/3,C+1,0,w,C,0,w+2/3,C+1,0,w,C+1,0];b.set(_,M*g*E),y.set(d,p*g*E);const x=[E,E,E,E,E,E];v.set(x,u*g*E)}const A=new he;A.setAttribute("position",new se(b,M)),A.setAttribute("uv",new se(y,p)),A.setAttribute("faceIndex",new se(v,u)),t.push(A),r>qi&&r--}return{lodPlanes:t,sizeLods:e,sigmas:i}}function Il(n,t,e){const i=new yi(n,t,e);return i.texture.mapping=Is,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function us(n,t,e,i,r){n.viewport.set(t,e,i,r),n.scissor.set(t,e,i,r)}function jp(n,t,e){const i=new Float32Array(mi),r=new U(0,1,0);return new ni({name:"SphericalGaussianBlur",defines:{n:mi,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Oo(),fragmentShader:`

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
		`,blending:Zn,depthTest:!1,depthWrite:!1})}function Ul(){return new ni({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Oo(),fragmentShader:`

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
		`,blending:Zn,depthTest:!1,depthWrite:!1})}function Nl(){return new ni({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Oo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Zn,depthTest:!1,depthWrite:!1})}function Oo(){return`

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
	`}function Kp(n){let t=new WeakMap,e=null;function i(o){if(o&&o.isTexture){const c=o.mapping,l=c===La||c===Ia,h=c===Qi||c===tr;if(l||h){let f=t.get(o);const d=f!==void 0?f.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==d)return e===null&&(e=new Ll(n)),f=l?e.fromEquirectangular(o,f):e.fromCubemap(o,f),f.texture.pmremVersion=o.pmremVersion,t.set(o,f),f.texture;if(f!==void 0)return f.texture;{const m=o.image;return l&&m&&m.height>0||h&&m&&r(m)?(e===null&&(e=new Ll(n)),f=l?e.fromEquirectangular(o):e.fromCubemap(o),f.texture.pmremVersion=o.pmremVersion,t.set(o,f),o.addEventListener("dispose",s),f.texture):null}}}return o}function r(o){let c=0;const l=6;for(let h=0;h<l;h++)o[h]!==void 0&&c++;return c===l}function s(o){const c=o.target;c.removeEventListener("dispose",s);const l=t.get(c);l!==void 0&&(t.delete(c),l.dispose())}function a(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:i,dispose:a}}function Zp(n){const t={};function e(i){if(t[i]!==void 0)return t[i];let r;switch(i){case"WEBGL_depth_texture":r=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=n.getExtension(i)}return t[i]=r,r}return{has:function(i){return e(i)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(i){const r=e(i);return r===null&&br("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function Jp(n,t,e,i){const r={},s=new WeakMap;function a(f){const d=f.target;d.index!==null&&t.remove(d.index);for(const g in d.attributes)t.remove(d.attributes[g]);d.removeEventListener("dispose",a),delete r[d.id];const m=s.get(d);m&&(t.remove(m),s.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function o(f,d){return r[d.id]===!0||(d.addEventListener("dispose",a),r[d.id]=!0,e.memory.geometries++),d}function c(f){const d=f.attributes;for(const m in d)t.update(d[m],n.ARRAY_BUFFER)}function l(f){const d=[],m=f.index,g=f.attributes.position;let M=0;if(m!==null){const b=m.array;M=m.version;for(let y=0,v=b.length;y<v;y+=3){const A=b[y+0],E=b[y+1],w=b[y+2];d.push(A,E,E,w,w,A)}}else if(g!==void 0){const b=g.array;M=g.version;for(let y=0,v=b.length/3-1;y<v;y+=3){const A=y+0,E=y+1,w=y+2;d.push(A,E,E,w,w,A)}}else return;const p=new(wc(d)?Dc:Pc)(d,1);p.version=M;const u=s.get(f);u&&t.remove(u),s.set(f,p)}function h(f){const d=s.get(f);if(d){const m=f.index;m!==null&&d.version<m.version&&l(f)}else l(f);return s.get(f)}return{get:o,update:c,getWireframeAttribute:h}}function Qp(n,t,e){let i;function r(d){i=d}let s,a;function o(d){s=d.type,a=d.bytesPerElement}function c(d,m){n.drawElements(i,m,s,d*a),e.update(m,i,1)}function l(d,m,g){g!==0&&(n.drawElementsInstanced(i,m,s,d*a,g),e.update(m,i,g))}function h(d,m,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,m,0,s,d,0,g);let p=0;for(let u=0;u<g;u++)p+=m[u];e.update(p,i,1)}function f(d,m,g,M){if(g===0)return;const p=t.get("WEBGL_multi_draw");if(p===null)for(let u=0;u<d.length;u++)l(d[u]/a,m[u],M[u]);else{p.multiDrawElementsInstancedWEBGL(i,m,0,s,d,0,M,0,g);let u=0;for(let b=0;b<g;b++)u+=m[b]*M[b];e.update(u,i,1)}}this.setMode=r,this.setIndex=o,this.render=c,this.renderInstances=l,this.renderMultiDraw=h,this.renderMultiDrawInstances=f}function tm(n){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,a,o){switch(e.calls++,a){case n.TRIANGLES:e.triangles+=o*(s/3);break;case n.LINES:e.lines+=o*(s/2);break;case n.LINE_STRIP:e.lines+=o*(s-1);break;case n.LINE_LOOP:e.lines+=o*s;break;case n.POINTS:e.points+=o*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function r(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:r,update:i}}function em(n,t,e){const i=new WeakMap,r=new ve;function s(a,o,c){const l=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,f=h!==void 0?h.length:0;let d=i.get(o);if(d===void 0||d.count!==f){let x=function(){C.dispose(),i.delete(o),o.removeEventListener("dispose",x)};var m=x;d!==void 0&&d.texture.dispose();const g=o.morphAttributes.position!==void 0,M=o.morphAttributes.normal!==void 0,p=o.morphAttributes.color!==void 0,u=o.morphAttributes.position||[],b=o.morphAttributes.normal||[],y=o.morphAttributes.color||[];let v=0;g===!0&&(v=1),M===!0&&(v=2),p===!0&&(v=3);let A=o.attributes.position.count*v,E=1;A>t.maxTextureSize&&(E=Math.ceil(A/t.maxTextureSize),A=t.maxTextureSize);const w=new Float32Array(A*E*4*f),C=new Rc(w,A,E,f);C.type=Ln,C.needsUpdate=!0;const _=v*4;for(let P=0;P<f;P++){const L=u[P],F=b[P],X=y[P],k=A*E*4*P;for(let H=0;H<L.count;H++){const K=H*_;g===!0&&(r.fromBufferAttribute(L,H),w[k+K+0]=r.x,w[k+K+1]=r.y,w[k+K+2]=r.z,w[k+K+3]=0),M===!0&&(r.fromBufferAttribute(F,H),w[k+K+4]=r.x,w[k+K+5]=r.y,w[k+K+6]=r.z,w[k+K+7]=0),p===!0&&(r.fromBufferAttribute(X,H),w[k+K+8]=r.x,w[k+K+9]=r.y,w[k+K+10]=r.z,w[k+K+11]=X.itemSize===4?r.w:1)}}d={count:f,texture:C,size:new Ot(A,E)},i.set(o,d),o.addEventListener("dispose",x)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)c.getUniforms().setValue(n,"morphTexture",a.morphTexture,e);else{let g=0;for(let p=0;p<l.length;p++)g+=l[p];const M=o.morphTargetsRelative?1:1-g;c.getUniforms().setValue(n,"morphTargetBaseInfluence",M),c.getUniforms().setValue(n,"morphTargetInfluences",l)}c.getUniforms().setValue(n,"morphTargetsTexture",d.texture,e),c.getUniforms().setValue(n,"morphTargetsTextureSize",d.size)}return{update:s}}function nm(n,t,e,i){let r=new WeakMap;function s(c){const l=i.render.frame,h=c.geometry,f=t.get(c,h);if(r.get(f)!==l&&(t.update(f),r.set(f,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",o)===!1&&c.addEventListener("dispose",o),r.get(c)!==l&&(e.update(c.instanceMatrix,n.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,n.ARRAY_BUFFER),r.set(c,l))),c.isSkinnedMesh){const d=c.skeleton;r.get(d)!==l&&(d.update(),r.set(d,l))}return f}function a(){r=new WeakMap}function o(c){const l=c.target;l.removeEventListener("dispose",o),e.remove(l.instanceMatrix),l.instanceColor!==null&&e.remove(l.instanceColor)}return{update:s,dispose:a}}const Hc=new ke,Fl=new Bc(1,1),Gc=new Rc,Vc=new Au,Wc=new Uc,Ol=[],Bl=[],zl=new Float32Array(16),kl=new Float32Array(9),Hl=new Float32Array(4);function ir(n,t,e){const i=n[0];if(i<=0||i>0)return n;const r=t*e;let s=Ol[r];if(s===void 0&&(s=new Float32Array(r),Ol[r]=s),t!==0){i.toArray(s,0);for(let a=1,o=0;a!==t;++a)o+=e,n[a].toArray(s,o)}return s}function Re(n,t){if(n.length!==t.length)return!1;for(let e=0,i=n.length;e<i;e++)if(n[e]!==t[e])return!1;return!0}function Ce(n,t){for(let e=0,i=t.length;e<i;e++)n[e]=t[e]}function Os(n,t){let e=Bl[t];e===void 0&&(e=new Int32Array(t),Bl[t]=e);for(let i=0;i!==t;++i)e[i]=n.allocateTextureUnit();return e}function im(n,t){const e=this.cache;e[0]!==t&&(n.uniform1f(this.addr,t),e[0]=t)}function rm(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Re(e,t))return;n.uniform2fv(this.addr,t),Ce(e,t)}}function sm(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(n.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Re(e,t))return;n.uniform3fv(this.addr,t),Ce(e,t)}}function am(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Re(e,t))return;n.uniform4fv(this.addr,t),Ce(e,t)}}function om(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(Re(e,t))return;n.uniformMatrix2fv(this.addr,!1,t),Ce(e,t)}else{if(Re(e,i))return;Hl.set(i),n.uniformMatrix2fv(this.addr,!1,Hl),Ce(e,i)}}function lm(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(Re(e,t))return;n.uniformMatrix3fv(this.addr,!1,t),Ce(e,t)}else{if(Re(e,i))return;kl.set(i),n.uniformMatrix3fv(this.addr,!1,kl),Ce(e,i)}}function cm(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(Re(e,t))return;n.uniformMatrix4fv(this.addr,!1,t),Ce(e,t)}else{if(Re(e,i))return;zl.set(i),n.uniformMatrix4fv(this.addr,!1,zl),Ce(e,i)}}function hm(n,t){const e=this.cache;e[0]!==t&&(n.uniform1i(this.addr,t),e[0]=t)}function um(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Re(e,t))return;n.uniform2iv(this.addr,t),Ce(e,t)}}function fm(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Re(e,t))return;n.uniform3iv(this.addr,t),Ce(e,t)}}function dm(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Re(e,t))return;n.uniform4iv(this.addr,t),Ce(e,t)}}function pm(n,t){const e=this.cache;e[0]!==t&&(n.uniform1ui(this.addr,t),e[0]=t)}function mm(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Re(e,t))return;n.uniform2uiv(this.addr,t),Ce(e,t)}}function gm(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Re(e,t))return;n.uniform3uiv(this.addr,t),Ce(e,t)}}function _m(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Re(e,t))return;n.uniform4uiv(this.addr,t),Ce(e,t)}}function xm(n,t,e){const i=this.cache,r=e.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r);let s;this.type===n.SAMPLER_2D_SHADOW?(Fl.compareFunction=Ac,s=Fl):s=Hc,e.setTexture2D(t||s,r)}function vm(n,t,e){const i=this.cache,r=e.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),e.setTexture3D(t||Vc,r)}function Mm(n,t,e){const i=this.cache,r=e.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),e.setTextureCube(t||Wc,r)}function ym(n,t,e){const i=this.cache,r=e.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),e.setTexture2DArray(t||Gc,r)}function Sm(n){switch(n){case 5126:return im;case 35664:return rm;case 35665:return sm;case 35666:return am;case 35674:return om;case 35675:return lm;case 35676:return cm;case 5124:case 35670:return hm;case 35667:case 35671:return um;case 35668:case 35672:return fm;case 35669:case 35673:return dm;case 5125:return pm;case 36294:return mm;case 36295:return gm;case 36296:return _m;case 35678:case 36198:case 36298:case 36306:case 35682:return xm;case 35679:case 36299:case 36307:return vm;case 35680:case 36300:case 36308:case 36293:return Mm;case 36289:case 36303:case 36311:case 36292:return ym}}function Em(n,t){n.uniform1fv(this.addr,t)}function bm(n,t){const e=ir(t,this.size,2);n.uniform2fv(this.addr,e)}function Tm(n,t){const e=ir(t,this.size,3);n.uniform3fv(this.addr,e)}function Am(n,t){const e=ir(t,this.size,4);n.uniform4fv(this.addr,e)}function wm(n,t){const e=ir(t,this.size,4);n.uniformMatrix2fv(this.addr,!1,e)}function Rm(n,t){const e=ir(t,this.size,9);n.uniformMatrix3fv(this.addr,!1,e)}function Cm(n,t){const e=ir(t,this.size,16);n.uniformMatrix4fv(this.addr,!1,e)}function Pm(n,t){n.uniform1iv(this.addr,t)}function Dm(n,t){n.uniform2iv(this.addr,t)}function Lm(n,t){n.uniform3iv(this.addr,t)}function Im(n,t){n.uniform4iv(this.addr,t)}function Um(n,t){n.uniform1uiv(this.addr,t)}function Nm(n,t){n.uniform2uiv(this.addr,t)}function Fm(n,t){n.uniform3uiv(this.addr,t)}function Om(n,t){n.uniform4uiv(this.addr,t)}function Bm(n,t,e){const i=this.cache,r=t.length,s=Os(e,r);Re(i,s)||(n.uniform1iv(this.addr,s),Ce(i,s));for(let a=0;a!==r;++a)e.setTexture2D(t[a]||Hc,s[a])}function zm(n,t,e){const i=this.cache,r=t.length,s=Os(e,r);Re(i,s)||(n.uniform1iv(this.addr,s),Ce(i,s));for(let a=0;a!==r;++a)e.setTexture3D(t[a]||Vc,s[a])}function km(n,t,e){const i=this.cache,r=t.length,s=Os(e,r);Re(i,s)||(n.uniform1iv(this.addr,s),Ce(i,s));for(let a=0;a!==r;++a)e.setTextureCube(t[a]||Wc,s[a])}function Hm(n,t,e){const i=this.cache,r=t.length,s=Os(e,r);Re(i,s)||(n.uniform1iv(this.addr,s),Ce(i,s));for(let a=0;a!==r;++a)e.setTexture2DArray(t[a]||Gc,s[a])}function Gm(n){switch(n){case 5126:return Em;case 35664:return bm;case 35665:return Tm;case 35666:return Am;case 35674:return wm;case 35675:return Rm;case 35676:return Cm;case 5124:case 35670:return Pm;case 35667:case 35671:return Dm;case 35668:case 35672:return Lm;case 35669:case 35673:return Im;case 5125:return Um;case 36294:return Nm;case 36295:return Fm;case 36296:return Om;case 35678:case 36198:case 36298:case 36306:case 35682:return Bm;case 35679:case 36299:case 36307:return zm;case 35680:case 36300:case 36308:case 36293:return km;case 36289:case 36303:case 36311:case 36292:return Hm}}class Vm{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.setValue=Sm(e.type)}}class Wm{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Gm(e.type)}}class Xm{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,i){const r=this.seq;for(let s=0,a=r.length;s!==a;++s){const o=r[s];o.setValue(t,e[o.id],i)}}}const xa=/(\w+)(\])?(\[|\.)?/g;function Gl(n,t){n.seq.push(t),n.map[t.id]=t}function Ym(n,t,e){const i=n.name,r=i.length;for(xa.lastIndex=0;;){const s=xa.exec(i),a=xa.lastIndex;let o=s[1];const c=s[2]==="]",l=s[3];if(c&&(o=o|0),l===void 0||l==="["&&a+2===r){Gl(e,l===void 0?new Vm(o,n,t):new Wm(o,n,t));break}else{let f=e.map[o];f===void 0&&(f=new Xm(o),Gl(e,f)),e=f}}}class Ss{constructor(t,e){this.seq=[],this.map={};const i=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=t.getActiveUniform(e,r),a=t.getUniformLocation(e,s.name);Ym(s,a,this)}}setValue(t,e,i,r){const s=this.map[e];s!==void 0&&s.setValue(t,i,r)}setOptional(t,e,i){const r=e[i];r!==void 0&&this.setValue(t,i,r)}static upload(t,e,i,r){for(let s=0,a=e.length;s!==a;++s){const o=e[s],c=i[o.id];c.needsUpdate!==!1&&o.setValue(t,c.value,r)}}static seqWithValue(t,e){const i=[];for(let r=0,s=t.length;r!==s;++r){const a=t[r];a.id in e&&i.push(a)}return i}}function Vl(n,t,e){const i=n.createShader(t);return n.shaderSource(i,e),n.compileShader(i),i}const qm=37297;let $m=0;function jm(n,t){const e=n.split(`
`),i=[],r=Math.max(t-6,0),s=Math.min(t+6,e.length);for(let a=r;a<s;a++){const o=a+1;i.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return i.join(`
`)}const Wl=new Wt;function Km(n){ie._getMatrix(Wl,ie.workingColorSpace,n);const t=`mat3( ${Wl.elements.map(e=>e.toFixed(4))} )`;switch(ie.getTransfer(n)){case Ts:return[t,"LinearTransferOETF"];case le:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",n),[t,"LinearTransferOETF"]}}function Xl(n,t,e){const i=n.getShaderParameter(t,n.COMPILE_STATUS),s=(n.getShaderInfoLog(t)||"").trim();if(i&&s==="")return"";const a=/ERROR: 0:(\d+)/.exec(s);if(a){const o=parseInt(a[1]);return e.toUpperCase()+`

`+s+`

`+jm(n.getShaderSource(t),o)}else return s}function Zm(n,t){const e=Km(t);return[`vec4 ${n}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function Jm(n,t){let e;switch(t){case zh:e="Linear";break;case kh:e="Reinhard";break;case Hh:e="Cineon";break;case gc:e="ACESFilmic";break;case Vh:e="AgX";break;case Wh:e="Neutral";break;case Gh:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+n+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const fs=new U;function Qm(){ie.getLuminanceCoefficients(fs);const n=fs.x.toFixed(4),t=fs.y.toFixed(4),e=fs.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function tg(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(pr).join(`
`)}function eg(n){const t=[];for(const e in n){const i=n[e];i!==!1&&t.push("#define "+e+" "+i)}return t.join(`
`)}function ng(n,t){const e={},i=n.getProgramParameter(t,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=n.getActiveAttrib(t,r),a=s.name;let o=1;s.type===n.FLOAT_MAT2&&(o=2),s.type===n.FLOAT_MAT3&&(o=3),s.type===n.FLOAT_MAT4&&(o=4),e[a]={type:s.type,location:n.getAttribLocation(t,a),locationSize:o}}return e}function pr(n){return n!==""}function Yl(n,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function ql(n,t){return n.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const ig=/^[ \t]*#include +<([\w\d./]+)>/gm;function po(n){return n.replace(ig,sg)}const rg=new Map;function sg(n,t){let e=Yt[t];if(e===void 0){const i=rg.get(t);if(i!==void 0)e=Yt[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,i);else throw new Error("Can not resolve #include <"+t+">")}return po(e)}const ag=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function $l(n){return n.replace(ag,og)}function og(n,t,e,i){let r="";for(let s=parseInt(t);s<parseInt(e);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function jl(n){let t=`precision ${n.precision} float;
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
#define LOW_PRECISION`),t}function lg(n){let t="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===pc?t="SHADOWMAP_TYPE_PCF":n.shadowMapType===xh?t="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===Pn&&(t="SHADOWMAP_TYPE_VSM"),t}function cg(n){let t="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case Qi:case tr:t="ENVMAP_TYPE_CUBE";break;case Is:t="ENVMAP_TYPE_CUBE_UV";break}return t}function hg(n){let t="ENVMAP_MODE_REFLECTION";return n.envMap&&n.envMapMode===tr&&(t="ENVMAP_MODE_REFRACTION"),t}function ug(n){let t="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case mc:t="ENVMAP_BLENDING_MULTIPLY";break;case Oh:t="ENVMAP_BLENDING_MIX";break;case Bh:t="ENVMAP_BLENDING_ADD";break}return t}function fg(n){const t=n.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:i,maxMip:e}}function dg(n,t,e,i){const r=n.getContext(),s=e.defines;let a=e.vertexShader,o=e.fragmentShader;const c=lg(e),l=cg(e),h=hg(e),f=ug(e),d=fg(e),m=tg(e),g=eg(s),M=r.createProgram();let p,u,b=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(pr).join(`
`),p.length>0&&(p+=`
`),u=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(pr).join(`
`),u.length>0&&(u+=`
`)):(p=[jl(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(pr).join(`
`),u=[jl(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+h:"",e.envMap?"#define "+f:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Jn?"#define TONE_MAPPING":"",e.toneMapping!==Jn?Yt.tonemapping_pars_fragment:"",e.toneMapping!==Jn?Jm("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Yt.colorspace_pars_fragment,Zm("linearToOutputTexel",e.outputColorSpace),Qm(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(pr).join(`
`)),a=po(a),a=Yl(a,e),a=ql(a,e),o=po(o),o=Yl(o,e),o=ql(o,e),a=$l(a),o=$l(o),e.isRawShaderMaterial!==!0&&(b=`#version 300 es
`,p=[m,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,u=["#define varying in",e.glslVersion===Zo?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Zo?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+u);const y=b+p+a,v=b+u+o,A=Vl(r,r.VERTEX_SHADER,y),E=Vl(r,r.FRAGMENT_SHADER,v);r.attachShader(M,A),r.attachShader(M,E),e.index0AttributeName!==void 0?r.bindAttribLocation(M,0,e.index0AttributeName):e.morphTargets===!0&&r.bindAttribLocation(M,0,"position"),r.linkProgram(M);function w(P){if(n.debug.checkShaderErrors){const L=r.getProgramInfoLog(M)||"",F=r.getShaderInfoLog(A)||"",X=r.getShaderInfoLog(E)||"",k=L.trim(),H=F.trim(),K=X.trim();let G=!0,N=!0;if(r.getProgramParameter(M,r.LINK_STATUS)===!1)if(G=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,M,A,E);else{const V=Xl(r,A,"vertex"),et=Xl(r,E,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(M,r.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+k+`
`+V+`
`+et)}else k!==""?console.warn("THREE.WebGLProgram: Program Info Log:",k):(H===""||K==="")&&(N=!1);N&&(P.diagnostics={runnable:G,programLog:k,vertexShader:{log:H,prefix:p},fragmentShader:{log:K,prefix:u}})}r.deleteShader(A),r.deleteShader(E),C=new Ss(r,M),_=ng(r,M)}let C;this.getUniforms=function(){return C===void 0&&w(this),C};let _;this.getAttributes=function(){return _===void 0&&w(this),_};let x=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return x===!1&&(x=r.getProgramParameter(M,qm)),x},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(M),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=$m++,this.cacheKey=t,this.usedTimes=1,this.program=M,this.vertexShader=A,this.fragmentShader=E,this}let pg=0;class mg{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,i=t.fragmentShader,r=this._getShaderStage(e),s=this._getShaderStage(i),a=this._getShaderCacheForMaterial(t);return a.has(r)===!1&&(a.add(r),r.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const i of e)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let i=e.get(t);return i===void 0&&(i=new Set,e.set(t,i)),i}_getShaderStage(t){const e=this.shaderCache;let i=e.get(t);return i===void 0&&(i=new gg(t),e.set(t,i)),i}}class gg{constructor(t){this.id=pg++,this.code=t,this.usedTimes=0}}function _g(n,t,e,i,r,s,a){const o=new Lo,c=new mg,l=new Set,h=[],f=r.logarithmicDepthBuffer,d=r.vertexTextures;let m=r.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function M(_){return l.add(_),_===0?"uv":`uv${_}`}function p(_,x,P,L,F){const X=L.fog,k=F.geometry,H=_.isMeshStandardMaterial?L.environment:null,K=(_.isMeshStandardMaterial?e:t).get(_.envMap||H),G=K&&K.mapping===Is?K.image.height:null,N=g[_.type];_.precision!==null&&(m=r.getMaxPrecision(_.precision),m!==_.precision&&console.warn("THREE.WebGLProgram.getParameters:",_.precision,"not supported, using",m,"instead."));const V=k.morphAttributes.position||k.morphAttributes.normal||k.morphAttributes.color,et=V!==void 0?V.length:0;let vt=0;k.morphAttributes.position!==void 0&&(vt=1),k.morphAttributes.normal!==void 0&&(vt=2),k.morphAttributes.color!==void 0&&(vt=3);let qt,Zt,$t,W;if(N){const re=xn[N];qt=re.vertexShader,Zt=re.fragmentShader}else qt=_.vertexShader,Zt=_.fragmentShader,c.update(_),$t=c.getVertexShaderID(_),W=c.getFragmentShaderID(_);const Z=n.getRenderTarget(),_t=n.state.buffers.depth.getReversed(),Ct=F.isInstancedMesh===!0,St=F.isBatchedMesh===!0,jt=!!_.map,be=!!_.matcap,D=!!K,ht=!!_.aoMap,ut=!!_.lightMap,ot=!!_.bumpMap,lt=!!_.normalMap,dt=!!_.displacementMap,tt=!!_.emissiveMap,xt=!!_.metalnessMap,Xt=!!_.roughnessMap,Dt=_.anisotropy>0,R=_.clearcoat>0,S=_.dispersion>0,z=_.iridescence>0,$=_.sheen>0,J=_.transmission>0,j=Dt&&!!_.anisotropyMap,yt=R&&!!_.clearcoatMap,st=R&&!!_.clearcoatNormalMap,bt=R&&!!_.clearcoatRoughnessMap,Tt=z&&!!_.iridescenceMap,nt=z&&!!_.iridescenceThicknessMap,pt=$&&!!_.sheenColorMap,Ut=$&&!!_.sheenRoughnessMap,At=!!_.specularMap,ft=!!_.specularColorMap,Ht=!!_.specularIntensityMap,I=J&&!!_.transmissionMap,it=J&&!!_.thicknessMap,ct=!!_.gradientMap,Et=!!_.alphaMap,rt=_.alphaTest>0,Q=!!_.alphaHash,Rt=!!_.extensions;let Gt=Jn;_.toneMapped&&(Z===null||Z.isXRRenderTarget===!0)&&(Gt=n.toneMapping);const fe={shaderID:N,shaderType:_.type,shaderName:_.name,vertexShader:qt,fragmentShader:Zt,defines:_.defines,customVertexShaderID:$t,customFragmentShaderID:W,isRawShaderMaterial:_.isRawShaderMaterial===!0,glslVersion:_.glslVersion,precision:m,batching:St,batchingColor:St&&F._colorsTexture!==null,instancing:Ct,instancingColor:Ct&&F.instanceColor!==null,instancingMorph:Ct&&F.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:Z===null?n.outputColorSpace:Z.isXRRenderTarget===!0?Z.texture.colorSpace:er,alphaToCoverage:!!_.alphaToCoverage,map:jt,matcap:be,envMap:D,envMapMode:D&&K.mapping,envMapCubeUVHeight:G,aoMap:ht,lightMap:ut,bumpMap:ot,normalMap:lt,displacementMap:d&&dt,emissiveMap:tt,normalMapObjectSpace:lt&&_.normalMapType===jh,normalMapTangentSpace:lt&&_.normalMapType===$h,metalnessMap:xt,roughnessMap:Xt,anisotropy:Dt,anisotropyMap:j,clearcoat:R,clearcoatMap:yt,clearcoatNormalMap:st,clearcoatRoughnessMap:bt,dispersion:S,iridescence:z,iridescenceMap:Tt,iridescenceThicknessMap:nt,sheen:$,sheenColorMap:pt,sheenRoughnessMap:Ut,specularMap:At,specularColorMap:ft,specularIntensityMap:Ht,transmission:J,transmissionMap:I,thicknessMap:it,gradientMap:ct,opaque:_.transparent===!1&&_.blending===_i&&_.alphaToCoverage===!1,alphaMap:Et,alphaTest:rt,alphaHash:Q,combine:_.combine,mapUv:jt&&M(_.map.channel),aoMapUv:ht&&M(_.aoMap.channel),lightMapUv:ut&&M(_.lightMap.channel),bumpMapUv:ot&&M(_.bumpMap.channel),normalMapUv:lt&&M(_.normalMap.channel),displacementMapUv:dt&&M(_.displacementMap.channel),emissiveMapUv:tt&&M(_.emissiveMap.channel),metalnessMapUv:xt&&M(_.metalnessMap.channel),roughnessMapUv:Xt&&M(_.roughnessMap.channel),anisotropyMapUv:j&&M(_.anisotropyMap.channel),clearcoatMapUv:yt&&M(_.clearcoatMap.channel),clearcoatNormalMapUv:st&&M(_.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:bt&&M(_.clearcoatRoughnessMap.channel),iridescenceMapUv:Tt&&M(_.iridescenceMap.channel),iridescenceThicknessMapUv:nt&&M(_.iridescenceThicknessMap.channel),sheenColorMapUv:pt&&M(_.sheenColorMap.channel),sheenRoughnessMapUv:Ut&&M(_.sheenRoughnessMap.channel),specularMapUv:At&&M(_.specularMap.channel),specularColorMapUv:ft&&M(_.specularColorMap.channel),specularIntensityMapUv:Ht&&M(_.specularIntensityMap.channel),transmissionMapUv:I&&M(_.transmissionMap.channel),thicknessMapUv:it&&M(_.thicknessMap.channel),alphaMapUv:Et&&M(_.alphaMap.channel),vertexTangents:!!k.attributes.tangent&&(lt||Dt),vertexColors:_.vertexColors,vertexAlphas:_.vertexColors===!0&&!!k.attributes.color&&k.attributes.color.itemSize===4,pointsUvs:F.isPoints===!0&&!!k.attributes.uv&&(jt||Et),fog:!!X,useFog:_.fog===!0,fogExp2:!!X&&X.isFogExp2,flatShading:_.flatShading===!0&&_.wireframe===!1,sizeAttenuation:_.sizeAttenuation===!0,logarithmicDepthBuffer:f,reversedDepthBuffer:_t,skinning:F.isSkinnedMesh===!0,morphTargets:k.morphAttributes.position!==void 0,morphNormals:k.morphAttributes.normal!==void 0,morphColors:k.morphAttributes.color!==void 0,morphTargetsCount:et,morphTextureStride:vt,numDirLights:x.directional.length,numPointLights:x.point.length,numSpotLights:x.spot.length,numSpotLightMaps:x.spotLightMap.length,numRectAreaLights:x.rectArea.length,numHemiLights:x.hemi.length,numDirLightShadows:x.directionalShadowMap.length,numPointLightShadows:x.pointShadowMap.length,numSpotLightShadows:x.spotShadowMap.length,numSpotLightShadowsWithMaps:x.numSpotLightShadowsWithMaps,numLightProbes:x.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:_.dithering,shadowMapEnabled:n.shadowMap.enabled&&P.length>0,shadowMapType:n.shadowMap.type,toneMapping:Gt,decodeVideoTexture:jt&&_.map.isVideoTexture===!0&&ie.getTransfer(_.map.colorSpace)===le,decodeVideoTextureEmissive:tt&&_.emissiveMap.isVideoTexture===!0&&ie.getTransfer(_.emissiveMap.colorSpace)===le,premultipliedAlpha:_.premultipliedAlpha,doubleSided:_.side===Dn,flipSided:_.side===We,useDepthPacking:_.depthPacking>=0,depthPacking:_.depthPacking||0,index0AttributeName:_.index0AttributeName,extensionClipCullDistance:Rt&&_.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Rt&&_.extensions.multiDraw===!0||St)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:_.customProgramCacheKey()};return fe.vertexUv1s=l.has(1),fe.vertexUv2s=l.has(2),fe.vertexUv3s=l.has(3),l.clear(),fe}function u(_){const x=[];if(_.shaderID?x.push(_.shaderID):(x.push(_.customVertexShaderID),x.push(_.customFragmentShaderID)),_.defines!==void 0)for(const P in _.defines)x.push(P),x.push(_.defines[P]);return _.isRawShaderMaterial===!1&&(b(x,_),y(x,_),x.push(n.outputColorSpace)),x.push(_.customProgramCacheKey),x.join()}function b(_,x){_.push(x.precision),_.push(x.outputColorSpace),_.push(x.envMapMode),_.push(x.envMapCubeUVHeight),_.push(x.mapUv),_.push(x.alphaMapUv),_.push(x.lightMapUv),_.push(x.aoMapUv),_.push(x.bumpMapUv),_.push(x.normalMapUv),_.push(x.displacementMapUv),_.push(x.emissiveMapUv),_.push(x.metalnessMapUv),_.push(x.roughnessMapUv),_.push(x.anisotropyMapUv),_.push(x.clearcoatMapUv),_.push(x.clearcoatNormalMapUv),_.push(x.clearcoatRoughnessMapUv),_.push(x.iridescenceMapUv),_.push(x.iridescenceThicknessMapUv),_.push(x.sheenColorMapUv),_.push(x.sheenRoughnessMapUv),_.push(x.specularMapUv),_.push(x.specularColorMapUv),_.push(x.specularIntensityMapUv),_.push(x.transmissionMapUv),_.push(x.thicknessMapUv),_.push(x.combine),_.push(x.fogExp2),_.push(x.sizeAttenuation),_.push(x.morphTargetsCount),_.push(x.morphAttributeCount),_.push(x.numDirLights),_.push(x.numPointLights),_.push(x.numSpotLights),_.push(x.numSpotLightMaps),_.push(x.numHemiLights),_.push(x.numRectAreaLights),_.push(x.numDirLightShadows),_.push(x.numPointLightShadows),_.push(x.numSpotLightShadows),_.push(x.numSpotLightShadowsWithMaps),_.push(x.numLightProbes),_.push(x.shadowMapType),_.push(x.toneMapping),_.push(x.numClippingPlanes),_.push(x.numClipIntersection),_.push(x.depthPacking)}function y(_,x){o.disableAll(),x.supportsVertexTextures&&o.enable(0),x.instancing&&o.enable(1),x.instancingColor&&o.enable(2),x.instancingMorph&&o.enable(3),x.matcap&&o.enable(4),x.envMap&&o.enable(5),x.normalMapObjectSpace&&o.enable(6),x.normalMapTangentSpace&&o.enable(7),x.clearcoat&&o.enable(8),x.iridescence&&o.enable(9),x.alphaTest&&o.enable(10),x.vertexColors&&o.enable(11),x.vertexAlphas&&o.enable(12),x.vertexUv1s&&o.enable(13),x.vertexUv2s&&o.enable(14),x.vertexUv3s&&o.enable(15),x.vertexTangents&&o.enable(16),x.anisotropy&&o.enable(17),x.alphaHash&&o.enable(18),x.batching&&o.enable(19),x.dispersion&&o.enable(20),x.batchingColor&&o.enable(21),x.gradientMap&&o.enable(22),_.push(o.mask),o.disableAll(),x.fog&&o.enable(0),x.useFog&&o.enable(1),x.flatShading&&o.enable(2),x.logarithmicDepthBuffer&&o.enable(3),x.reversedDepthBuffer&&o.enable(4),x.skinning&&o.enable(5),x.morphTargets&&o.enable(6),x.morphNormals&&o.enable(7),x.morphColors&&o.enable(8),x.premultipliedAlpha&&o.enable(9),x.shadowMapEnabled&&o.enable(10),x.doubleSided&&o.enable(11),x.flipSided&&o.enable(12),x.useDepthPacking&&o.enable(13),x.dithering&&o.enable(14),x.transmission&&o.enable(15),x.sheen&&o.enable(16),x.opaque&&o.enable(17),x.pointsUvs&&o.enable(18),x.decodeVideoTexture&&o.enable(19),x.decodeVideoTextureEmissive&&o.enable(20),x.alphaToCoverage&&o.enable(21),_.push(o.mask)}function v(_){const x=g[_.type];let P;if(x){const L=xn[x];P=zu.clone(L.uniforms)}else P=_.uniforms;return P}function A(_,x){let P;for(let L=0,F=h.length;L<F;L++){const X=h[L];if(X.cacheKey===x){P=X,++P.usedTimes;break}}return P===void 0&&(P=new dg(n,x,_,s),h.push(P)),P}function E(_){if(--_.usedTimes===0){const x=h.indexOf(_);h[x]=h[h.length-1],h.pop(),_.destroy()}}function w(_){c.remove(_)}function C(){c.dispose()}return{getParameters:p,getProgramCacheKey:u,getUniforms:v,acquireProgram:A,releaseProgram:E,releaseShaderCache:w,programs:h,dispose:C}}function xg(){let n=new WeakMap;function t(a){return n.has(a)}function e(a){let o=n.get(a);return o===void 0&&(o={},n.set(a,o)),o}function i(a){n.delete(a)}function r(a,o,c){n.get(a)[o]=c}function s(){n=new WeakMap}return{has:t,get:e,remove:i,update:r,dispose:s}}function vg(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.material.id!==t.material.id?n.material.id-t.material.id:n.z!==t.z?n.z-t.z:n.id-t.id}function Kl(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.z!==t.z?t.z-n.z:n.id-t.id}function Zl(){const n=[];let t=0;const e=[],i=[],r=[];function s(){t=0,e.length=0,i.length=0,r.length=0}function a(f,d,m,g,M,p){let u=n[t];return u===void 0?(u={id:f.id,object:f,geometry:d,material:m,groupOrder:g,renderOrder:f.renderOrder,z:M,group:p},n[t]=u):(u.id=f.id,u.object=f,u.geometry=d,u.material=m,u.groupOrder=g,u.renderOrder=f.renderOrder,u.z=M,u.group=p),t++,u}function o(f,d,m,g,M,p){const u=a(f,d,m,g,M,p);m.transmission>0?i.push(u):m.transparent===!0?r.push(u):e.push(u)}function c(f,d,m,g,M,p){const u=a(f,d,m,g,M,p);m.transmission>0?i.unshift(u):m.transparent===!0?r.unshift(u):e.unshift(u)}function l(f,d){e.length>1&&e.sort(f||vg),i.length>1&&i.sort(d||Kl),r.length>1&&r.sort(d||Kl)}function h(){for(let f=t,d=n.length;f<d;f++){const m=n[f];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:e,transmissive:i,transparent:r,init:s,push:o,unshift:c,finish:h,sort:l}}function Mg(){let n=new WeakMap;function t(i,r){const s=n.get(i);let a;return s===void 0?(a=new Zl,n.set(i,[a])):r>=s.length?(a=new Zl,s.push(a)):a=s[r],a}function e(){n=new WeakMap}return{get:t,dispose:e}}function yg(){const n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new U,color:new zt};break;case"SpotLight":e={position:new U,direction:new U,color:new zt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new U,color:new zt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new U,skyColor:new zt,groundColor:new zt};break;case"RectAreaLight":e={color:new zt,position:new U,halfWidth:new U,halfHeight:new U};break}return n[t.id]=e,e}}}function Sg(){const n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ot};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ot};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ot,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[t.id]=e,e}}}let Eg=0;function bg(n,t){return(t.castShadow?2:0)-(n.castShadow?2:0)+(t.map?1:0)-(n.map?1:0)}function Tg(n){const t=new yg,e=Sg(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)i.probe.push(new U);const r=new U,s=new ge,a=new ge;function o(l){let h=0,f=0,d=0;for(let _=0;_<9;_++)i.probe[_].set(0,0,0);let m=0,g=0,M=0,p=0,u=0,b=0,y=0,v=0,A=0,E=0,w=0;l.sort(bg);for(let _=0,x=l.length;_<x;_++){const P=l[_],L=P.color,F=P.intensity,X=P.distance,k=P.shadow&&P.shadow.map?P.shadow.map.texture:null;if(P.isAmbientLight)h+=L.r*F,f+=L.g*F,d+=L.b*F;else if(P.isLightProbe){for(let H=0;H<9;H++)i.probe[H].addScaledVector(P.sh.coefficients[H],F);w++}else if(P.isDirectionalLight){const H=t.get(P);if(H.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){const K=P.shadow,G=e.get(P);G.shadowIntensity=K.intensity,G.shadowBias=K.bias,G.shadowNormalBias=K.normalBias,G.shadowRadius=K.radius,G.shadowMapSize=K.mapSize,i.directionalShadow[m]=G,i.directionalShadowMap[m]=k,i.directionalShadowMatrix[m]=P.shadow.matrix,b++}i.directional[m]=H,m++}else if(P.isSpotLight){const H=t.get(P);H.position.setFromMatrixPosition(P.matrixWorld),H.color.copy(L).multiplyScalar(F),H.distance=X,H.coneCos=Math.cos(P.angle),H.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),H.decay=P.decay,i.spot[M]=H;const K=P.shadow;if(P.map&&(i.spotLightMap[A]=P.map,A++,K.updateMatrices(P),P.castShadow&&E++),i.spotLightMatrix[M]=K.matrix,P.castShadow){const G=e.get(P);G.shadowIntensity=K.intensity,G.shadowBias=K.bias,G.shadowNormalBias=K.normalBias,G.shadowRadius=K.radius,G.shadowMapSize=K.mapSize,i.spotShadow[M]=G,i.spotShadowMap[M]=k,v++}M++}else if(P.isRectAreaLight){const H=t.get(P);H.color.copy(L).multiplyScalar(F),H.halfWidth.set(P.width*.5,0,0),H.halfHeight.set(0,P.height*.5,0),i.rectArea[p]=H,p++}else if(P.isPointLight){const H=t.get(P);if(H.color.copy(P.color).multiplyScalar(P.intensity),H.distance=P.distance,H.decay=P.decay,P.castShadow){const K=P.shadow,G=e.get(P);G.shadowIntensity=K.intensity,G.shadowBias=K.bias,G.shadowNormalBias=K.normalBias,G.shadowRadius=K.radius,G.shadowMapSize=K.mapSize,G.shadowCameraNear=K.camera.near,G.shadowCameraFar=K.camera.far,i.pointShadow[g]=G,i.pointShadowMap[g]=k,i.pointShadowMatrix[g]=P.shadow.matrix,y++}i.point[g]=H,g++}else if(P.isHemisphereLight){const H=t.get(P);H.skyColor.copy(P.color).multiplyScalar(F),H.groundColor.copy(P.groundColor).multiplyScalar(F),i.hemi[u]=H,u++}}p>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=mt.LTC_FLOAT_1,i.rectAreaLTC2=mt.LTC_FLOAT_2):(i.rectAreaLTC1=mt.LTC_HALF_1,i.rectAreaLTC2=mt.LTC_HALF_2)),i.ambient[0]=h,i.ambient[1]=f,i.ambient[2]=d;const C=i.hash;(C.directionalLength!==m||C.pointLength!==g||C.spotLength!==M||C.rectAreaLength!==p||C.hemiLength!==u||C.numDirectionalShadows!==b||C.numPointShadows!==y||C.numSpotShadows!==v||C.numSpotMaps!==A||C.numLightProbes!==w)&&(i.directional.length=m,i.spot.length=M,i.rectArea.length=p,i.point.length=g,i.hemi.length=u,i.directionalShadow.length=b,i.directionalShadowMap.length=b,i.pointShadow.length=y,i.pointShadowMap.length=y,i.spotShadow.length=v,i.spotShadowMap.length=v,i.directionalShadowMatrix.length=b,i.pointShadowMatrix.length=y,i.spotLightMatrix.length=v+A-E,i.spotLightMap.length=A,i.numSpotLightShadowsWithMaps=E,i.numLightProbes=w,C.directionalLength=m,C.pointLength=g,C.spotLength=M,C.rectAreaLength=p,C.hemiLength=u,C.numDirectionalShadows=b,C.numPointShadows=y,C.numSpotShadows=v,C.numSpotMaps=A,C.numLightProbes=w,i.version=Eg++)}function c(l,h){let f=0,d=0,m=0,g=0,M=0;const p=h.matrixWorldInverse;for(let u=0,b=l.length;u<b;u++){const y=l[u];if(y.isDirectionalLight){const v=i.directional[f];v.direction.setFromMatrixPosition(y.matrixWorld),r.setFromMatrixPosition(y.target.matrixWorld),v.direction.sub(r),v.direction.transformDirection(p),f++}else if(y.isSpotLight){const v=i.spot[m];v.position.setFromMatrixPosition(y.matrixWorld),v.position.applyMatrix4(p),v.direction.setFromMatrixPosition(y.matrixWorld),r.setFromMatrixPosition(y.target.matrixWorld),v.direction.sub(r),v.direction.transformDirection(p),m++}else if(y.isRectAreaLight){const v=i.rectArea[g];v.position.setFromMatrixPosition(y.matrixWorld),v.position.applyMatrix4(p),a.identity(),s.copy(y.matrixWorld),s.premultiply(p),a.extractRotation(s),v.halfWidth.set(y.width*.5,0,0),v.halfHeight.set(0,y.height*.5,0),v.halfWidth.applyMatrix4(a),v.halfHeight.applyMatrix4(a),g++}else if(y.isPointLight){const v=i.point[d];v.position.setFromMatrixPosition(y.matrixWorld),v.position.applyMatrix4(p),d++}else if(y.isHemisphereLight){const v=i.hemi[M];v.direction.setFromMatrixPosition(y.matrixWorld),v.direction.transformDirection(p),M++}}}return{setup:o,setupView:c,state:i}}function Jl(n){const t=new Tg(n),e=[],i=[];function r(h){l.camera=h,e.length=0,i.length=0}function s(h){e.push(h)}function a(h){i.push(h)}function o(){t.setup(e)}function c(h){t.setupView(e,h)}const l={lightsArray:e,shadowsArray:i,camera:null,lights:t,transmissionRenderTarget:{}};return{init:r,state:l,setupLights:o,setupLightsView:c,pushLight:s,pushShadow:a}}function Ag(n){let t=new WeakMap;function e(r,s=0){const a=t.get(r);let o;return a===void 0?(o=new Jl(n),t.set(r,[o])):s>=a.length?(o=new Jl(n),a.push(o)):o=a[s],o}function i(){t=new WeakMap}return{get:e,dispose:i}}const wg=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Rg=`uniform sampler2D shadow_pass;
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
}`;function Cg(n,t,e){let i=new Fc;const r=new Ot,s=new Ot,a=new ve,o=new Ju({depthPacking:qh}),c=new Qu,l={},h=e.maxTextureSize,f={[ti]:We,[We]:ti,[Dn]:Dn},d=new ni({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ot},radius:{value:4}},vertexShader:wg,fragmentShader:Rg}),m=d.clone();m.defines.HORIZONTAL_PASS=1;const g=new he;g.setAttribute("position",new se(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const M=new sn(g,d),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=pc;let u=this.type;this.render=function(E,w,C){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||E.length===0)return;const _=n.getRenderTarget(),x=n.getActiveCubeFace(),P=n.getActiveMipmapLevel(),L=n.state;L.setBlending(Zn),L.buffers.depth.getReversed()===!0?L.buffers.color.setClear(0,0,0,0):L.buffers.color.setClear(1,1,1,1),L.buffers.depth.setTest(!0),L.setScissorTest(!1);const F=u!==Pn&&this.type===Pn,X=u===Pn&&this.type!==Pn;for(let k=0,H=E.length;k<H;k++){const K=E[k],G=K.shadow;if(G===void 0){console.warn("THREE.WebGLShadowMap:",K,"has no shadow.");continue}if(G.autoUpdate===!1&&G.needsUpdate===!1)continue;r.copy(G.mapSize);const N=G.getFrameExtents();if(r.multiply(N),s.copy(G.mapSize),(r.x>h||r.y>h)&&(r.x>h&&(s.x=Math.floor(h/N.x),r.x=s.x*N.x,G.mapSize.x=s.x),r.y>h&&(s.y=Math.floor(h/N.y),r.y=s.y*N.y,G.mapSize.y=s.y)),G.map===null||F===!0||X===!0){const et=this.type!==Pn?{minFilter:gn,magFilter:gn}:{};G.map!==null&&G.map.dispose(),G.map=new yi(r.x,r.y,et),G.map.texture.name=K.name+".shadowMap",G.camera.updateProjectionMatrix()}n.setRenderTarget(G.map),n.clear();const V=G.getViewportCount();for(let et=0;et<V;et++){const vt=G.getViewport(et);a.set(s.x*vt.x,s.y*vt.y,s.x*vt.z,s.y*vt.w),L.viewport(a),G.updateMatrices(K,et),i=G.getFrustum(),v(w,C,G.camera,K,this.type)}G.isPointLightShadow!==!0&&this.type===Pn&&b(G,C),G.needsUpdate=!1}u=this.type,p.needsUpdate=!1,n.setRenderTarget(_,x,P)};function b(E,w){const C=t.update(M);d.defines.VSM_SAMPLES!==E.blurSamples&&(d.defines.VSM_SAMPLES=E.blurSamples,m.defines.VSM_SAMPLES=E.blurSamples,d.needsUpdate=!0,m.needsUpdate=!0),E.mapPass===null&&(E.mapPass=new yi(r.x,r.y)),d.uniforms.shadow_pass.value=E.map.texture,d.uniforms.resolution.value=E.mapSize,d.uniforms.radius.value=E.radius,n.setRenderTarget(E.mapPass),n.clear(),n.renderBufferDirect(w,null,C,d,M,null),m.uniforms.shadow_pass.value=E.mapPass.texture,m.uniforms.resolution.value=E.mapSize,m.uniforms.radius.value=E.radius,n.setRenderTarget(E.map),n.clear(),n.renderBufferDirect(w,null,C,m,M,null)}function y(E,w,C,_){let x=null;const P=C.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(P!==void 0)x=P;else if(x=C.isPointLight===!0?c:o,n.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0||w.map&&w.alphaTest>0||w.alphaToCoverage===!0){const L=x.uuid,F=w.uuid;let X=l[L];X===void 0&&(X={},l[L]=X);let k=X[F];k===void 0&&(k=x.clone(),X[F]=k,w.addEventListener("dispose",A)),x=k}if(x.visible=w.visible,x.wireframe=w.wireframe,_===Pn?x.side=w.shadowSide!==null?w.shadowSide:w.side:x.side=w.shadowSide!==null?w.shadowSide:f[w.side],x.alphaMap=w.alphaMap,x.alphaTest=w.alphaToCoverage===!0?.5:w.alphaTest,x.map=w.map,x.clipShadows=w.clipShadows,x.clippingPlanes=w.clippingPlanes,x.clipIntersection=w.clipIntersection,x.displacementMap=w.displacementMap,x.displacementScale=w.displacementScale,x.displacementBias=w.displacementBias,x.wireframeLinewidth=w.wireframeLinewidth,x.linewidth=w.linewidth,C.isPointLight===!0&&x.isMeshDistanceMaterial===!0){const L=n.properties.get(x);L.light=C}return x}function v(E,w,C,_,x){if(E.visible===!1)return;if(E.layers.test(w.layers)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&x===Pn)&&(!E.frustumCulled||i.intersectsObject(E))){E.modelViewMatrix.multiplyMatrices(C.matrixWorldInverse,E.matrixWorld);const F=t.update(E),X=E.material;if(Array.isArray(X)){const k=F.groups;for(let H=0,K=k.length;H<K;H++){const G=k[H],N=X[G.materialIndex];if(N&&N.visible){const V=y(E,N,_,x);E.onBeforeShadow(n,E,w,C,F,V,G),n.renderBufferDirect(C,null,F,V,E,G),E.onAfterShadow(n,E,w,C,F,V,G)}}}else if(X.visible){const k=y(E,X,_,x);E.onBeforeShadow(n,E,w,C,F,k,null),n.renderBufferDirect(C,null,F,k,E,null),E.onAfterShadow(n,E,w,C,F,k,null)}}const L=E.children;for(let F=0,X=L.length;F<X;F++)v(L[F],w,C,_,x)}function A(E){E.target.removeEventListener("dispose",A);for(const C in l){const _=l[C],x=E.target.uuid;x in _&&(_[x].dispose(),delete _[x])}}}const Pg={[Ta]:Aa,[wa]:Pa,[Ra]:Da,[Ji]:Ca,[Aa]:Ta,[Pa]:wa,[Da]:Ra,[Ca]:Ji};function Dg(n,t){function e(){let I=!1;const it=new ve;let ct=null;const Et=new ve(0,0,0,0);return{setMask:function(rt){ct!==rt&&!I&&(n.colorMask(rt,rt,rt,rt),ct=rt)},setLocked:function(rt){I=rt},setClear:function(rt,Q,Rt,Gt,fe){fe===!0&&(rt*=Gt,Q*=Gt,Rt*=Gt),it.set(rt,Q,Rt,Gt),Et.equals(it)===!1&&(n.clearColor(rt,Q,Rt,Gt),Et.copy(it))},reset:function(){I=!1,ct=null,Et.set(-1,0,0,0)}}}function i(){let I=!1,it=!1,ct=null,Et=null,rt=null;return{setReversed:function(Q){if(it!==Q){const Rt=t.get("EXT_clip_control");Q?Rt.clipControlEXT(Rt.LOWER_LEFT_EXT,Rt.ZERO_TO_ONE_EXT):Rt.clipControlEXT(Rt.LOWER_LEFT_EXT,Rt.NEGATIVE_ONE_TO_ONE_EXT),it=Q;const Gt=rt;rt=null,this.setClear(Gt)}},getReversed:function(){return it},setTest:function(Q){Q?Z(n.DEPTH_TEST):_t(n.DEPTH_TEST)},setMask:function(Q){ct!==Q&&!I&&(n.depthMask(Q),ct=Q)},setFunc:function(Q){if(it&&(Q=Pg[Q]),Et!==Q){switch(Q){case Ta:n.depthFunc(n.NEVER);break;case Aa:n.depthFunc(n.ALWAYS);break;case wa:n.depthFunc(n.LESS);break;case Ji:n.depthFunc(n.LEQUAL);break;case Ra:n.depthFunc(n.EQUAL);break;case Ca:n.depthFunc(n.GEQUAL);break;case Pa:n.depthFunc(n.GREATER);break;case Da:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}Et=Q}},setLocked:function(Q){I=Q},setClear:function(Q){rt!==Q&&(it&&(Q=1-Q),n.clearDepth(Q),rt=Q)},reset:function(){I=!1,ct=null,Et=null,rt=null,it=!1}}}function r(){let I=!1,it=null,ct=null,Et=null,rt=null,Q=null,Rt=null,Gt=null,fe=null;return{setTest:function(re){I||(re?Z(n.STENCIL_TEST):_t(n.STENCIL_TEST))},setMask:function(re){it!==re&&!I&&(n.stencilMask(re),it=re)},setFunc:function(re,bn,_n){(ct!==re||Et!==bn||rt!==_n)&&(n.stencilFunc(re,bn,_n),ct=re,Et=bn,rt=_n)},setOp:function(re,bn,_n){(Q!==re||Rt!==bn||Gt!==_n)&&(n.stencilOp(re,bn,_n),Q=re,Rt=bn,Gt=_n)},setLocked:function(re){I=re},setClear:function(re){fe!==re&&(n.clearStencil(re),fe=re)},reset:function(){I=!1,it=null,ct=null,Et=null,rt=null,Q=null,Rt=null,Gt=null,fe=null}}}const s=new e,a=new i,o=new r,c=new WeakMap,l=new WeakMap;let h={},f={},d=new WeakMap,m=[],g=null,M=!1,p=null,u=null,b=null,y=null,v=null,A=null,E=null,w=new zt(0,0,0),C=0,_=!1,x=null,P=null,L=null,F=null,X=null;const k=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let H=!1,K=0;const G=n.getParameter(n.VERSION);G.indexOf("WebGL")!==-1?(K=parseFloat(/^WebGL (\d)/.exec(G)[1]),H=K>=1):G.indexOf("OpenGL ES")!==-1&&(K=parseFloat(/^OpenGL ES (\d)/.exec(G)[1]),H=K>=2);let N=null,V={};const et=n.getParameter(n.SCISSOR_BOX),vt=n.getParameter(n.VIEWPORT),qt=new ve().fromArray(et),Zt=new ve().fromArray(vt);function $t(I,it,ct,Et){const rt=new Uint8Array(4),Q=n.createTexture();n.bindTexture(I,Q),n.texParameteri(I,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(I,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Rt=0;Rt<ct;Rt++)I===n.TEXTURE_3D||I===n.TEXTURE_2D_ARRAY?n.texImage3D(it,0,n.RGBA,1,1,Et,0,n.RGBA,n.UNSIGNED_BYTE,rt):n.texImage2D(it+Rt,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,rt);return Q}const W={};W[n.TEXTURE_2D]=$t(n.TEXTURE_2D,n.TEXTURE_2D,1),W[n.TEXTURE_CUBE_MAP]=$t(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),W[n.TEXTURE_2D_ARRAY]=$t(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),W[n.TEXTURE_3D]=$t(n.TEXTURE_3D,n.TEXTURE_3D,1,1),s.setClear(0,0,0,1),a.setClear(1),o.setClear(0),Z(n.DEPTH_TEST),a.setFunc(Ji),ot(!1),lt(qo),Z(n.CULL_FACE),ht(Zn);function Z(I){h[I]!==!0&&(n.enable(I),h[I]=!0)}function _t(I){h[I]!==!1&&(n.disable(I),h[I]=!1)}function Ct(I,it){return f[I]!==it?(n.bindFramebuffer(I,it),f[I]=it,I===n.DRAW_FRAMEBUFFER&&(f[n.FRAMEBUFFER]=it),I===n.FRAMEBUFFER&&(f[n.DRAW_FRAMEBUFFER]=it),!0):!1}function St(I,it){let ct=m,Et=!1;if(I){ct=d.get(it),ct===void 0&&(ct=[],d.set(it,ct));const rt=I.textures;if(ct.length!==rt.length||ct[0]!==n.COLOR_ATTACHMENT0){for(let Q=0,Rt=rt.length;Q<Rt;Q++)ct[Q]=n.COLOR_ATTACHMENT0+Q;ct.length=rt.length,Et=!0}}else ct[0]!==n.BACK&&(ct[0]=n.BACK,Et=!0);Et&&n.drawBuffers(ct)}function jt(I){return g!==I?(n.useProgram(I),g=I,!0):!1}const be={[pi]:n.FUNC_ADD,[Mh]:n.FUNC_SUBTRACT,[yh]:n.FUNC_REVERSE_SUBTRACT};be[Sh]=n.MIN,be[Eh]=n.MAX;const D={[bh]:n.ZERO,[Th]:n.ONE,[Ah]:n.SRC_COLOR,[Ea]:n.SRC_ALPHA,[Lh]:n.SRC_ALPHA_SATURATE,[Ph]:n.DST_COLOR,[Rh]:n.DST_ALPHA,[wh]:n.ONE_MINUS_SRC_COLOR,[ba]:n.ONE_MINUS_SRC_ALPHA,[Dh]:n.ONE_MINUS_DST_COLOR,[Ch]:n.ONE_MINUS_DST_ALPHA,[Ih]:n.CONSTANT_COLOR,[Uh]:n.ONE_MINUS_CONSTANT_COLOR,[Nh]:n.CONSTANT_ALPHA,[Fh]:n.ONE_MINUS_CONSTANT_ALPHA};function ht(I,it,ct,Et,rt,Q,Rt,Gt,fe,re){if(I===Zn){M===!0&&(_t(n.BLEND),M=!1);return}if(M===!1&&(Z(n.BLEND),M=!0),I!==vh){if(I!==p||re!==_){if((u!==pi||v!==pi)&&(n.blendEquation(n.FUNC_ADD),u=pi,v=pi),re)switch(I){case _i:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Qt:n.blendFunc(n.ONE,n.ONE);break;case $o:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case jo:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}else switch(I){case _i:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Qt:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case $o:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case jo:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}b=null,y=null,A=null,E=null,w.set(0,0,0),C=0,p=I,_=re}return}rt=rt||it,Q=Q||ct,Rt=Rt||Et,(it!==u||rt!==v)&&(n.blendEquationSeparate(be[it],be[rt]),u=it,v=rt),(ct!==b||Et!==y||Q!==A||Rt!==E)&&(n.blendFuncSeparate(D[ct],D[Et],D[Q],D[Rt]),b=ct,y=Et,A=Q,E=Rt),(Gt.equals(w)===!1||fe!==C)&&(n.blendColor(Gt.r,Gt.g,Gt.b,fe),w.copy(Gt),C=fe),p=I,_=!1}function ut(I,it){I.side===Dn?_t(n.CULL_FACE):Z(n.CULL_FACE);let ct=I.side===We;it&&(ct=!ct),ot(ct),I.blending===_i&&I.transparent===!1?ht(Zn):ht(I.blending,I.blendEquation,I.blendSrc,I.blendDst,I.blendEquationAlpha,I.blendSrcAlpha,I.blendDstAlpha,I.blendColor,I.blendAlpha,I.premultipliedAlpha),a.setFunc(I.depthFunc),a.setTest(I.depthTest),a.setMask(I.depthWrite),s.setMask(I.colorWrite);const Et=I.stencilWrite;o.setTest(Et),Et&&(o.setMask(I.stencilWriteMask),o.setFunc(I.stencilFunc,I.stencilRef,I.stencilFuncMask),o.setOp(I.stencilFail,I.stencilZFail,I.stencilZPass)),tt(I.polygonOffset,I.polygonOffsetFactor,I.polygonOffsetUnits),I.alphaToCoverage===!0?Z(n.SAMPLE_ALPHA_TO_COVERAGE):_t(n.SAMPLE_ALPHA_TO_COVERAGE)}function ot(I){x!==I&&(I?n.frontFace(n.CW):n.frontFace(n.CCW),x=I)}function lt(I){I!==gh?(Z(n.CULL_FACE),I!==P&&(I===qo?n.cullFace(n.BACK):I===_h?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):_t(n.CULL_FACE),P=I}function dt(I){I!==L&&(H&&n.lineWidth(I),L=I)}function tt(I,it,ct){I?(Z(n.POLYGON_OFFSET_FILL),(F!==it||X!==ct)&&(n.polygonOffset(it,ct),F=it,X=ct)):_t(n.POLYGON_OFFSET_FILL)}function xt(I){I?Z(n.SCISSOR_TEST):_t(n.SCISSOR_TEST)}function Xt(I){I===void 0&&(I=n.TEXTURE0+k-1),N!==I&&(n.activeTexture(I),N=I)}function Dt(I,it,ct){ct===void 0&&(N===null?ct=n.TEXTURE0+k-1:ct=N);let Et=V[ct];Et===void 0&&(Et={type:void 0,texture:void 0},V[ct]=Et),(Et.type!==I||Et.texture!==it)&&(N!==ct&&(n.activeTexture(ct),N=ct),n.bindTexture(I,it||W[I]),Et.type=I,Et.texture=it)}function R(){const I=V[N];I!==void 0&&I.type!==void 0&&(n.bindTexture(I.type,null),I.type=void 0,I.texture=void 0)}function S(){try{n.compressedTexImage2D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function z(){try{n.compressedTexImage3D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function $(){try{n.texSubImage2D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function J(){try{n.texSubImage3D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function j(){try{n.compressedTexSubImage2D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function yt(){try{n.compressedTexSubImage3D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function st(){try{n.texStorage2D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function bt(){try{n.texStorage3D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Tt(){try{n.texImage2D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function nt(){try{n.texImage3D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function pt(I){qt.equals(I)===!1&&(n.scissor(I.x,I.y,I.z,I.w),qt.copy(I))}function Ut(I){Zt.equals(I)===!1&&(n.viewport(I.x,I.y,I.z,I.w),Zt.copy(I))}function At(I,it){let ct=l.get(it);ct===void 0&&(ct=new WeakMap,l.set(it,ct));let Et=ct.get(I);Et===void 0&&(Et=n.getUniformBlockIndex(it,I.name),ct.set(I,Et))}function ft(I,it){const Et=l.get(it).get(I);c.get(it)!==Et&&(n.uniformBlockBinding(it,Et,I.__bindingPointIndex),c.set(it,Et))}function Ht(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),a.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),h={},N=null,V={},f={},d=new WeakMap,m=[],g=null,M=!1,p=null,u=null,b=null,y=null,v=null,A=null,E=null,w=new zt(0,0,0),C=0,_=!1,x=null,P=null,L=null,F=null,X=null,qt.set(0,0,n.canvas.width,n.canvas.height),Zt.set(0,0,n.canvas.width,n.canvas.height),s.reset(),a.reset(),o.reset()}return{buffers:{color:s,depth:a,stencil:o},enable:Z,disable:_t,bindFramebuffer:Ct,drawBuffers:St,useProgram:jt,setBlending:ht,setMaterial:ut,setFlipSided:ot,setCullFace:lt,setLineWidth:dt,setPolygonOffset:tt,setScissorTest:xt,activeTexture:Xt,bindTexture:Dt,unbindTexture:R,compressedTexImage2D:S,compressedTexImage3D:z,texImage2D:Tt,texImage3D:nt,updateUBOMapping:At,uniformBlockBinding:ft,texStorage2D:st,texStorage3D:bt,texSubImage2D:$,texSubImage3D:J,compressedTexSubImage2D:j,compressedTexSubImage3D:yt,scissor:pt,viewport:Ut,reset:Ht}}function Lg(n,t,e,i,r,s,a){const o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new Ot,h=new WeakMap;let f;const d=new WeakMap;let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(R,S){return m?new OffscreenCanvas(R,S):ws("canvas")}function M(R,S,z){let $=1;const J=Dt(R);if((J.width>z||J.height>z)&&($=z/Math.max(J.width,J.height)),$<1)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap||typeof VideoFrame<"u"&&R instanceof VideoFrame){const j=Math.floor($*J.width),yt=Math.floor($*J.height);f===void 0&&(f=g(j,yt));const st=S?g(j,yt):f;return st.width=j,st.height=yt,st.getContext("2d").drawImage(R,0,0,j,yt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+J.width+"x"+J.height+") to ("+j+"x"+yt+")."),st}else return"data"in R&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+J.width+"x"+J.height+")."),R;return R}function p(R){return R.generateMipmaps}function u(R){n.generateMipmap(R)}function b(R){return R.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:R.isWebGL3DRenderTarget?n.TEXTURE_3D:R.isWebGLArrayRenderTarget||R.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function y(R,S,z,$,J=!1){if(R!==null){if(n[R]!==void 0)return n[R];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let j=S;if(S===n.RED&&(z===n.FLOAT&&(j=n.R32F),z===n.HALF_FLOAT&&(j=n.R16F),z===n.UNSIGNED_BYTE&&(j=n.R8)),S===n.RED_INTEGER&&(z===n.UNSIGNED_BYTE&&(j=n.R8UI),z===n.UNSIGNED_SHORT&&(j=n.R16UI),z===n.UNSIGNED_INT&&(j=n.R32UI),z===n.BYTE&&(j=n.R8I),z===n.SHORT&&(j=n.R16I),z===n.INT&&(j=n.R32I)),S===n.RG&&(z===n.FLOAT&&(j=n.RG32F),z===n.HALF_FLOAT&&(j=n.RG16F),z===n.UNSIGNED_BYTE&&(j=n.RG8)),S===n.RG_INTEGER&&(z===n.UNSIGNED_BYTE&&(j=n.RG8UI),z===n.UNSIGNED_SHORT&&(j=n.RG16UI),z===n.UNSIGNED_INT&&(j=n.RG32UI),z===n.BYTE&&(j=n.RG8I),z===n.SHORT&&(j=n.RG16I),z===n.INT&&(j=n.RG32I)),S===n.RGB_INTEGER&&(z===n.UNSIGNED_BYTE&&(j=n.RGB8UI),z===n.UNSIGNED_SHORT&&(j=n.RGB16UI),z===n.UNSIGNED_INT&&(j=n.RGB32UI),z===n.BYTE&&(j=n.RGB8I),z===n.SHORT&&(j=n.RGB16I),z===n.INT&&(j=n.RGB32I)),S===n.RGBA_INTEGER&&(z===n.UNSIGNED_BYTE&&(j=n.RGBA8UI),z===n.UNSIGNED_SHORT&&(j=n.RGBA16UI),z===n.UNSIGNED_INT&&(j=n.RGBA32UI),z===n.BYTE&&(j=n.RGBA8I),z===n.SHORT&&(j=n.RGBA16I),z===n.INT&&(j=n.RGBA32I)),S===n.RGB&&(z===n.UNSIGNED_INT_5_9_9_9_REV&&(j=n.RGB9_E5),z===n.UNSIGNED_INT_10F_11F_11F_REV&&(j=n.R11F_G11F_B10F)),S===n.RGBA){const yt=J?Ts:ie.getTransfer($);z===n.FLOAT&&(j=n.RGBA32F),z===n.HALF_FLOAT&&(j=n.RGBA16F),z===n.UNSIGNED_BYTE&&(j=yt===le?n.SRGB8_ALPHA8:n.RGBA8),z===n.UNSIGNED_SHORT_4_4_4_4&&(j=n.RGBA4),z===n.UNSIGNED_SHORT_5_5_5_1&&(j=n.RGB5_A1)}return(j===n.R16F||j===n.R32F||j===n.RG16F||j===n.RG32F||j===n.RGBA16F||j===n.RGBA32F)&&t.get("EXT_color_buffer_float"),j}function v(R,S){let z;return R?S===null||S===Mi||S===Mr?z=n.DEPTH24_STENCIL8:S===Ln?z=n.DEPTH32F_STENCIL8:S===vr&&(z=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):S===null||S===Mi||S===Mr?z=n.DEPTH_COMPONENT24:S===Ln?z=n.DEPTH_COMPONENT32F:S===vr&&(z=n.DEPTH_COMPONENT16),z}function A(R,S){return p(R)===!0||R.isFramebufferTexture&&R.minFilter!==gn&&R.minFilter!==dn?Math.log2(Math.max(S.width,S.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?S.mipmaps.length:1}function E(R){const S=R.target;S.removeEventListener("dispose",E),C(S),S.isVideoTexture&&h.delete(S)}function w(R){const S=R.target;S.removeEventListener("dispose",w),x(S)}function C(R){const S=i.get(R);if(S.__webglInit===void 0)return;const z=R.source,$=d.get(z);if($){const J=$[S.__cacheKey];J.usedTimes--,J.usedTimes===0&&_(R),Object.keys($).length===0&&d.delete(z)}i.remove(R)}function _(R){const S=i.get(R);n.deleteTexture(S.__webglTexture);const z=R.source,$=d.get(z);delete $[S.__cacheKey],a.memory.textures--}function x(R){const S=i.get(R);if(R.depthTexture&&(R.depthTexture.dispose(),i.remove(R.depthTexture)),R.isWebGLCubeRenderTarget)for(let $=0;$<6;$++){if(Array.isArray(S.__webglFramebuffer[$]))for(let J=0;J<S.__webglFramebuffer[$].length;J++)n.deleteFramebuffer(S.__webglFramebuffer[$][J]);else n.deleteFramebuffer(S.__webglFramebuffer[$]);S.__webglDepthbuffer&&n.deleteRenderbuffer(S.__webglDepthbuffer[$])}else{if(Array.isArray(S.__webglFramebuffer))for(let $=0;$<S.__webglFramebuffer.length;$++)n.deleteFramebuffer(S.__webglFramebuffer[$]);else n.deleteFramebuffer(S.__webglFramebuffer);if(S.__webglDepthbuffer&&n.deleteRenderbuffer(S.__webglDepthbuffer),S.__webglMultisampledFramebuffer&&n.deleteFramebuffer(S.__webglMultisampledFramebuffer),S.__webglColorRenderbuffer)for(let $=0;$<S.__webglColorRenderbuffer.length;$++)S.__webglColorRenderbuffer[$]&&n.deleteRenderbuffer(S.__webglColorRenderbuffer[$]);S.__webglDepthRenderbuffer&&n.deleteRenderbuffer(S.__webglDepthRenderbuffer)}const z=R.textures;for(let $=0,J=z.length;$<J;$++){const j=i.get(z[$]);j.__webglTexture&&(n.deleteTexture(j.__webglTexture),a.memory.textures--),i.remove(z[$])}i.remove(R)}let P=0;function L(){P=0}function F(){const R=P;return R>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+R+" texture units while this GPU supports only "+r.maxTextures),P+=1,R}function X(R){const S=[];return S.push(R.wrapS),S.push(R.wrapT),S.push(R.wrapR||0),S.push(R.magFilter),S.push(R.minFilter),S.push(R.anisotropy),S.push(R.internalFormat),S.push(R.format),S.push(R.type),S.push(R.generateMipmaps),S.push(R.premultiplyAlpha),S.push(R.flipY),S.push(R.unpackAlignment),S.push(R.colorSpace),S.join()}function k(R,S){const z=i.get(R);if(R.isVideoTexture&&xt(R),R.isRenderTargetTexture===!1&&R.isExternalTexture!==!0&&R.version>0&&z.__version!==R.version){const $=R.image;if($===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if($.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{W(z,R,S);return}}else R.isExternalTexture&&(z.__webglTexture=R.sourceTexture?R.sourceTexture:null);e.bindTexture(n.TEXTURE_2D,z.__webglTexture,n.TEXTURE0+S)}function H(R,S){const z=i.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&z.__version!==R.version){W(z,R,S);return}e.bindTexture(n.TEXTURE_2D_ARRAY,z.__webglTexture,n.TEXTURE0+S)}function K(R,S){const z=i.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&z.__version!==R.version){W(z,R,S);return}e.bindTexture(n.TEXTURE_3D,z.__webglTexture,n.TEXTURE0+S)}function G(R,S){const z=i.get(R);if(R.version>0&&z.__version!==R.version){Z(z,R,S);return}e.bindTexture(n.TEXTURE_CUBE_MAP,z.__webglTexture,n.TEXTURE0+S)}const N={[Ua]:n.REPEAT,[gi]:n.CLAMP_TO_EDGE,[Na]:n.MIRRORED_REPEAT},V={[gn]:n.NEAREST,[Xh]:n.NEAREST_MIPMAP_NEAREST,[zr]:n.NEAREST_MIPMAP_LINEAR,[dn]:n.LINEAR,[Gs]:n.LINEAR_MIPMAP_NEAREST,[jn]:n.LINEAR_MIPMAP_LINEAR},et={[Kh]:n.NEVER,[nu]:n.ALWAYS,[Zh]:n.LESS,[Ac]:n.LEQUAL,[Jh]:n.EQUAL,[eu]:n.GEQUAL,[Qh]:n.GREATER,[tu]:n.NOTEQUAL};function vt(R,S){if(S.type===Ln&&t.has("OES_texture_float_linear")===!1&&(S.magFilter===dn||S.magFilter===Gs||S.magFilter===zr||S.magFilter===jn||S.minFilter===dn||S.minFilter===Gs||S.minFilter===zr||S.minFilter===jn)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(R,n.TEXTURE_WRAP_S,N[S.wrapS]),n.texParameteri(R,n.TEXTURE_WRAP_T,N[S.wrapT]),(R===n.TEXTURE_3D||R===n.TEXTURE_2D_ARRAY)&&n.texParameteri(R,n.TEXTURE_WRAP_R,N[S.wrapR]),n.texParameteri(R,n.TEXTURE_MAG_FILTER,V[S.magFilter]),n.texParameteri(R,n.TEXTURE_MIN_FILTER,V[S.minFilter]),S.compareFunction&&(n.texParameteri(R,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(R,n.TEXTURE_COMPARE_FUNC,et[S.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(S.magFilter===gn||S.minFilter!==zr&&S.minFilter!==jn||S.type===Ln&&t.has("OES_texture_float_linear")===!1)return;if(S.anisotropy>1||i.get(S).__currentAnisotropy){const z=t.get("EXT_texture_filter_anisotropic");n.texParameterf(R,z.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,r.getMaxAnisotropy())),i.get(S).__currentAnisotropy=S.anisotropy}}}function qt(R,S){let z=!1;R.__webglInit===void 0&&(R.__webglInit=!0,S.addEventListener("dispose",E));const $=S.source;let J=d.get($);J===void 0&&(J={},d.set($,J));const j=X(S);if(j!==R.__cacheKey){J[j]===void 0&&(J[j]={texture:n.createTexture(),usedTimes:0},a.memory.textures++,z=!0),J[j].usedTimes++;const yt=J[R.__cacheKey];yt!==void 0&&(J[R.__cacheKey].usedTimes--,yt.usedTimes===0&&_(S)),R.__cacheKey=j,R.__webglTexture=J[j].texture}return z}function Zt(R,S,z){return Math.floor(Math.floor(R/z)/S)}function $t(R,S,z,$){const j=R.updateRanges;if(j.length===0)e.texSubImage2D(n.TEXTURE_2D,0,0,0,S.width,S.height,z,$,S.data);else{j.sort((nt,pt)=>nt.start-pt.start);let yt=0;for(let nt=1;nt<j.length;nt++){const pt=j[yt],Ut=j[nt],At=pt.start+pt.count,ft=Zt(Ut.start,S.width,4),Ht=Zt(pt.start,S.width,4);Ut.start<=At+1&&ft===Ht&&Zt(Ut.start+Ut.count-1,S.width,4)===ft?pt.count=Math.max(pt.count,Ut.start+Ut.count-pt.start):(++yt,j[yt]=Ut)}j.length=yt+1;const st=n.getParameter(n.UNPACK_ROW_LENGTH),bt=n.getParameter(n.UNPACK_SKIP_PIXELS),Tt=n.getParameter(n.UNPACK_SKIP_ROWS);n.pixelStorei(n.UNPACK_ROW_LENGTH,S.width);for(let nt=0,pt=j.length;nt<pt;nt++){const Ut=j[nt],At=Math.floor(Ut.start/4),ft=Math.ceil(Ut.count/4),Ht=At%S.width,I=Math.floor(At/S.width),it=ft,ct=1;n.pixelStorei(n.UNPACK_SKIP_PIXELS,Ht),n.pixelStorei(n.UNPACK_SKIP_ROWS,I),e.texSubImage2D(n.TEXTURE_2D,0,Ht,I,it,ct,z,$,S.data)}R.clearUpdateRanges(),n.pixelStorei(n.UNPACK_ROW_LENGTH,st),n.pixelStorei(n.UNPACK_SKIP_PIXELS,bt),n.pixelStorei(n.UNPACK_SKIP_ROWS,Tt)}}function W(R,S,z){let $=n.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&($=n.TEXTURE_2D_ARRAY),S.isData3DTexture&&($=n.TEXTURE_3D);const J=qt(R,S),j=S.source;e.bindTexture($,R.__webglTexture,n.TEXTURE0+z);const yt=i.get(j);if(j.version!==yt.__version||J===!0){e.activeTexture(n.TEXTURE0+z);const st=ie.getPrimaries(ie.workingColorSpace),bt=S.colorSpace===qn?null:ie.getPrimaries(S.colorSpace),Tt=S.colorSpace===qn||st===bt?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,S.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,S.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Tt);let nt=M(S.image,!1,r.maxTextureSize);nt=Xt(S,nt);const pt=s.convert(S.format,S.colorSpace),Ut=s.convert(S.type);let At=y(S.internalFormat,pt,Ut,S.colorSpace,S.isVideoTexture);vt($,S);let ft;const Ht=S.mipmaps,I=S.isVideoTexture!==!0,it=yt.__version===void 0||J===!0,ct=j.dataReady,Et=A(S,nt);if(S.isDepthTexture)At=v(S.format===Sr,S.type),it&&(I?e.texStorage2D(n.TEXTURE_2D,1,At,nt.width,nt.height):e.texImage2D(n.TEXTURE_2D,0,At,nt.width,nt.height,0,pt,Ut,null));else if(S.isDataTexture)if(Ht.length>0){I&&it&&e.texStorage2D(n.TEXTURE_2D,Et,At,Ht[0].width,Ht[0].height);for(let rt=0,Q=Ht.length;rt<Q;rt++)ft=Ht[rt],I?ct&&e.texSubImage2D(n.TEXTURE_2D,rt,0,0,ft.width,ft.height,pt,Ut,ft.data):e.texImage2D(n.TEXTURE_2D,rt,At,ft.width,ft.height,0,pt,Ut,ft.data);S.generateMipmaps=!1}else I?(it&&e.texStorage2D(n.TEXTURE_2D,Et,At,nt.width,nt.height),ct&&$t(S,nt,pt,Ut)):e.texImage2D(n.TEXTURE_2D,0,At,nt.width,nt.height,0,pt,Ut,nt.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){I&&it&&e.texStorage3D(n.TEXTURE_2D_ARRAY,Et,At,Ht[0].width,Ht[0].height,nt.depth);for(let rt=0,Q=Ht.length;rt<Q;rt++)if(ft=Ht[rt],S.format!==pn)if(pt!==null)if(I){if(ct)if(S.layerUpdates.size>0){const Rt=Rl(ft.width,ft.height,S.format,S.type);for(const Gt of S.layerUpdates){const fe=ft.data.subarray(Gt*Rt/ft.data.BYTES_PER_ELEMENT,(Gt+1)*Rt/ft.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,rt,0,0,Gt,ft.width,ft.height,1,pt,fe)}S.clearLayerUpdates()}else e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,rt,0,0,0,ft.width,ft.height,nt.depth,pt,ft.data)}else e.compressedTexImage3D(n.TEXTURE_2D_ARRAY,rt,At,ft.width,ft.height,nt.depth,0,ft.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else I?ct&&e.texSubImage3D(n.TEXTURE_2D_ARRAY,rt,0,0,0,ft.width,ft.height,nt.depth,pt,Ut,ft.data):e.texImage3D(n.TEXTURE_2D_ARRAY,rt,At,ft.width,ft.height,nt.depth,0,pt,Ut,ft.data)}else{I&&it&&e.texStorage2D(n.TEXTURE_2D,Et,At,Ht[0].width,Ht[0].height);for(let rt=0,Q=Ht.length;rt<Q;rt++)ft=Ht[rt],S.format!==pn?pt!==null?I?ct&&e.compressedTexSubImage2D(n.TEXTURE_2D,rt,0,0,ft.width,ft.height,pt,ft.data):e.compressedTexImage2D(n.TEXTURE_2D,rt,At,ft.width,ft.height,0,ft.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):I?ct&&e.texSubImage2D(n.TEXTURE_2D,rt,0,0,ft.width,ft.height,pt,Ut,ft.data):e.texImage2D(n.TEXTURE_2D,rt,At,ft.width,ft.height,0,pt,Ut,ft.data)}else if(S.isDataArrayTexture)if(I){if(it&&e.texStorage3D(n.TEXTURE_2D_ARRAY,Et,At,nt.width,nt.height,nt.depth),ct)if(S.layerUpdates.size>0){const rt=Rl(nt.width,nt.height,S.format,S.type);for(const Q of S.layerUpdates){const Rt=nt.data.subarray(Q*rt/nt.data.BYTES_PER_ELEMENT,(Q+1)*rt/nt.data.BYTES_PER_ELEMENT);e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,Q,nt.width,nt.height,1,pt,Ut,Rt)}S.clearLayerUpdates()}else e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,nt.width,nt.height,nt.depth,pt,Ut,nt.data)}else e.texImage3D(n.TEXTURE_2D_ARRAY,0,At,nt.width,nt.height,nt.depth,0,pt,Ut,nt.data);else if(S.isData3DTexture)I?(it&&e.texStorage3D(n.TEXTURE_3D,Et,At,nt.width,nt.height,nt.depth),ct&&e.texSubImage3D(n.TEXTURE_3D,0,0,0,0,nt.width,nt.height,nt.depth,pt,Ut,nt.data)):e.texImage3D(n.TEXTURE_3D,0,At,nt.width,nt.height,nt.depth,0,pt,Ut,nt.data);else if(S.isFramebufferTexture){if(it)if(I)e.texStorage2D(n.TEXTURE_2D,Et,At,nt.width,nt.height);else{let rt=nt.width,Q=nt.height;for(let Rt=0;Rt<Et;Rt++)e.texImage2D(n.TEXTURE_2D,Rt,At,rt,Q,0,pt,Ut,null),rt>>=1,Q>>=1}}else if(Ht.length>0){if(I&&it){const rt=Dt(Ht[0]);e.texStorage2D(n.TEXTURE_2D,Et,At,rt.width,rt.height)}for(let rt=0,Q=Ht.length;rt<Q;rt++)ft=Ht[rt],I?ct&&e.texSubImage2D(n.TEXTURE_2D,rt,0,0,pt,Ut,ft):e.texImage2D(n.TEXTURE_2D,rt,At,pt,Ut,ft);S.generateMipmaps=!1}else if(I){if(it){const rt=Dt(nt);e.texStorage2D(n.TEXTURE_2D,Et,At,rt.width,rt.height)}ct&&e.texSubImage2D(n.TEXTURE_2D,0,0,0,pt,Ut,nt)}else e.texImage2D(n.TEXTURE_2D,0,At,pt,Ut,nt);p(S)&&u($),yt.__version=j.version,S.onUpdate&&S.onUpdate(S)}R.__version=S.version}function Z(R,S,z){if(S.image.length!==6)return;const $=qt(R,S),J=S.source;e.bindTexture(n.TEXTURE_CUBE_MAP,R.__webglTexture,n.TEXTURE0+z);const j=i.get(J);if(J.version!==j.__version||$===!0){e.activeTexture(n.TEXTURE0+z);const yt=ie.getPrimaries(ie.workingColorSpace),st=S.colorSpace===qn?null:ie.getPrimaries(S.colorSpace),bt=S.colorSpace===qn||yt===st?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,S.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,S.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,bt);const Tt=S.isCompressedTexture||S.image[0].isCompressedTexture,nt=S.image[0]&&S.image[0].isDataTexture,pt=[];for(let Q=0;Q<6;Q++)!Tt&&!nt?pt[Q]=M(S.image[Q],!0,r.maxCubemapSize):pt[Q]=nt?S.image[Q].image:S.image[Q],pt[Q]=Xt(S,pt[Q]);const Ut=pt[0],At=s.convert(S.format,S.colorSpace),ft=s.convert(S.type),Ht=y(S.internalFormat,At,ft,S.colorSpace),I=S.isVideoTexture!==!0,it=j.__version===void 0||$===!0,ct=J.dataReady;let Et=A(S,Ut);vt(n.TEXTURE_CUBE_MAP,S);let rt;if(Tt){I&&it&&e.texStorage2D(n.TEXTURE_CUBE_MAP,Et,Ht,Ut.width,Ut.height);for(let Q=0;Q<6;Q++){rt=pt[Q].mipmaps;for(let Rt=0;Rt<rt.length;Rt++){const Gt=rt[Rt];S.format!==pn?At!==null?I?ct&&e.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,Rt,0,0,Gt.width,Gt.height,At,Gt.data):e.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,Rt,Ht,Gt.width,Gt.height,0,Gt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):I?ct&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,Rt,0,0,Gt.width,Gt.height,At,ft,Gt.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,Rt,Ht,Gt.width,Gt.height,0,At,ft,Gt.data)}}}else{if(rt=S.mipmaps,I&&it){rt.length>0&&Et++;const Q=Dt(pt[0]);e.texStorage2D(n.TEXTURE_CUBE_MAP,Et,Ht,Q.width,Q.height)}for(let Q=0;Q<6;Q++)if(nt){I?ct&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,0,0,pt[Q].width,pt[Q].height,At,ft,pt[Q].data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,Ht,pt[Q].width,pt[Q].height,0,At,ft,pt[Q].data);for(let Rt=0;Rt<rt.length;Rt++){const fe=rt[Rt].image[Q].image;I?ct&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,Rt+1,0,0,fe.width,fe.height,At,ft,fe.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,Rt+1,Ht,fe.width,fe.height,0,At,ft,fe.data)}}else{I?ct&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,0,0,At,ft,pt[Q]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,Ht,At,ft,pt[Q]);for(let Rt=0;Rt<rt.length;Rt++){const Gt=rt[Rt];I?ct&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,Rt+1,0,0,At,ft,Gt.image[Q]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,Rt+1,Ht,At,ft,Gt.image[Q])}}}p(S)&&u(n.TEXTURE_CUBE_MAP),j.__version=J.version,S.onUpdate&&S.onUpdate(S)}R.__version=S.version}function _t(R,S,z,$,J,j){const yt=s.convert(z.format,z.colorSpace),st=s.convert(z.type),bt=y(z.internalFormat,yt,st,z.colorSpace),Tt=i.get(S),nt=i.get(z);if(nt.__renderTarget=S,!Tt.__hasExternalTextures){const pt=Math.max(1,S.width>>j),Ut=Math.max(1,S.height>>j);J===n.TEXTURE_3D||J===n.TEXTURE_2D_ARRAY?e.texImage3D(J,j,bt,pt,Ut,S.depth,0,yt,st,null):e.texImage2D(J,j,bt,pt,Ut,0,yt,st,null)}e.bindFramebuffer(n.FRAMEBUFFER,R),tt(S)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,$,J,nt.__webglTexture,0,dt(S)):(J===n.TEXTURE_2D||J>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&J<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,$,J,nt.__webglTexture,j),e.bindFramebuffer(n.FRAMEBUFFER,null)}function Ct(R,S,z){if(n.bindRenderbuffer(n.RENDERBUFFER,R),S.depthBuffer){const $=S.depthTexture,J=$&&$.isDepthTexture?$.type:null,j=v(S.stencilBuffer,J),yt=S.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,st=dt(S);tt(S)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,st,j,S.width,S.height):z?n.renderbufferStorageMultisample(n.RENDERBUFFER,st,j,S.width,S.height):n.renderbufferStorage(n.RENDERBUFFER,j,S.width,S.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,yt,n.RENDERBUFFER,R)}else{const $=S.textures;for(let J=0;J<$.length;J++){const j=$[J],yt=s.convert(j.format,j.colorSpace),st=s.convert(j.type),bt=y(j.internalFormat,yt,st,j.colorSpace),Tt=dt(S);z&&tt(S)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,Tt,bt,S.width,S.height):tt(S)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Tt,bt,S.width,S.height):n.renderbufferStorage(n.RENDERBUFFER,bt,S.width,S.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function St(R,S){if(S&&S.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(n.FRAMEBUFFER,R),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const $=i.get(S.depthTexture);$.__renderTarget=S,(!$.__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),k(S.depthTexture,0);const J=$.__webglTexture,j=dt(S);if(S.depthTexture.format===yr)tt(S)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,J,0,j):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,J,0);else if(S.depthTexture.format===Sr)tt(S)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,J,0,j):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,J,0);else throw new Error("Unknown depthTexture format")}function jt(R){const S=i.get(R),z=R.isWebGLCubeRenderTarget===!0;if(S.__boundDepthTexture!==R.depthTexture){const $=R.depthTexture;if(S.__depthDisposeCallback&&S.__depthDisposeCallback(),$){const J=()=>{delete S.__boundDepthTexture,delete S.__depthDisposeCallback,$.removeEventListener("dispose",J)};$.addEventListener("dispose",J),S.__depthDisposeCallback=J}S.__boundDepthTexture=$}if(R.depthTexture&&!S.__autoAllocateDepthBuffer){if(z)throw new Error("target.depthTexture not supported in Cube render targets");const $=R.texture.mipmaps;$&&$.length>0?St(S.__webglFramebuffer[0],R):St(S.__webglFramebuffer,R)}else if(z){S.__webglDepthbuffer=[];for(let $=0;$<6;$++)if(e.bindFramebuffer(n.FRAMEBUFFER,S.__webglFramebuffer[$]),S.__webglDepthbuffer[$]===void 0)S.__webglDepthbuffer[$]=n.createRenderbuffer(),Ct(S.__webglDepthbuffer[$],R,!1);else{const J=R.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,j=S.__webglDepthbuffer[$];n.bindRenderbuffer(n.RENDERBUFFER,j),n.framebufferRenderbuffer(n.FRAMEBUFFER,J,n.RENDERBUFFER,j)}}else{const $=R.texture.mipmaps;if($&&$.length>0?e.bindFramebuffer(n.FRAMEBUFFER,S.__webglFramebuffer[0]):e.bindFramebuffer(n.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer===void 0)S.__webglDepthbuffer=n.createRenderbuffer(),Ct(S.__webglDepthbuffer,R,!1);else{const J=R.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,j=S.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,j),n.framebufferRenderbuffer(n.FRAMEBUFFER,J,n.RENDERBUFFER,j)}}e.bindFramebuffer(n.FRAMEBUFFER,null)}function be(R,S,z){const $=i.get(R);S!==void 0&&_t($.__webglFramebuffer,R,R.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),z!==void 0&&jt(R)}function D(R){const S=R.texture,z=i.get(R),$=i.get(S);R.addEventListener("dispose",w);const J=R.textures,j=R.isWebGLCubeRenderTarget===!0,yt=J.length>1;if(yt||($.__webglTexture===void 0&&($.__webglTexture=n.createTexture()),$.__version=S.version,a.memory.textures++),j){z.__webglFramebuffer=[];for(let st=0;st<6;st++)if(S.mipmaps&&S.mipmaps.length>0){z.__webglFramebuffer[st]=[];for(let bt=0;bt<S.mipmaps.length;bt++)z.__webglFramebuffer[st][bt]=n.createFramebuffer()}else z.__webglFramebuffer[st]=n.createFramebuffer()}else{if(S.mipmaps&&S.mipmaps.length>0){z.__webglFramebuffer=[];for(let st=0;st<S.mipmaps.length;st++)z.__webglFramebuffer[st]=n.createFramebuffer()}else z.__webglFramebuffer=n.createFramebuffer();if(yt)for(let st=0,bt=J.length;st<bt;st++){const Tt=i.get(J[st]);Tt.__webglTexture===void 0&&(Tt.__webglTexture=n.createTexture(),a.memory.textures++)}if(R.samples>0&&tt(R)===!1){z.__webglMultisampledFramebuffer=n.createFramebuffer(),z.__webglColorRenderbuffer=[],e.bindFramebuffer(n.FRAMEBUFFER,z.__webglMultisampledFramebuffer);for(let st=0;st<J.length;st++){const bt=J[st];z.__webglColorRenderbuffer[st]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,z.__webglColorRenderbuffer[st]);const Tt=s.convert(bt.format,bt.colorSpace),nt=s.convert(bt.type),pt=y(bt.internalFormat,Tt,nt,bt.colorSpace,R.isXRRenderTarget===!0),Ut=dt(R);n.renderbufferStorageMultisample(n.RENDERBUFFER,Ut,pt,R.width,R.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+st,n.RENDERBUFFER,z.__webglColorRenderbuffer[st])}n.bindRenderbuffer(n.RENDERBUFFER,null),R.depthBuffer&&(z.__webglDepthRenderbuffer=n.createRenderbuffer(),Ct(z.__webglDepthRenderbuffer,R,!0)),e.bindFramebuffer(n.FRAMEBUFFER,null)}}if(j){e.bindTexture(n.TEXTURE_CUBE_MAP,$.__webglTexture),vt(n.TEXTURE_CUBE_MAP,S);for(let st=0;st<6;st++)if(S.mipmaps&&S.mipmaps.length>0)for(let bt=0;bt<S.mipmaps.length;bt++)_t(z.__webglFramebuffer[st][bt],R,S,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+st,bt);else _t(z.__webglFramebuffer[st],R,S,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+st,0);p(S)&&u(n.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(yt){for(let st=0,bt=J.length;st<bt;st++){const Tt=J[st],nt=i.get(Tt);let pt=n.TEXTURE_2D;(R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(pt=R.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),e.bindTexture(pt,nt.__webglTexture),vt(pt,Tt),_t(z.__webglFramebuffer,R,Tt,n.COLOR_ATTACHMENT0+st,pt,0),p(Tt)&&u(pt)}e.unbindTexture()}else{let st=n.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(st=R.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),e.bindTexture(st,$.__webglTexture),vt(st,S),S.mipmaps&&S.mipmaps.length>0)for(let bt=0;bt<S.mipmaps.length;bt++)_t(z.__webglFramebuffer[bt],R,S,n.COLOR_ATTACHMENT0,st,bt);else _t(z.__webglFramebuffer,R,S,n.COLOR_ATTACHMENT0,st,0);p(S)&&u(st),e.unbindTexture()}R.depthBuffer&&jt(R)}function ht(R){const S=R.textures;for(let z=0,$=S.length;z<$;z++){const J=S[z];if(p(J)){const j=b(R),yt=i.get(J).__webglTexture;e.bindTexture(j,yt),u(j),e.unbindTexture()}}}const ut=[],ot=[];function lt(R){if(R.samples>0){if(tt(R)===!1){const S=R.textures,z=R.width,$=R.height;let J=n.COLOR_BUFFER_BIT;const j=R.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,yt=i.get(R),st=S.length>1;if(st)for(let Tt=0;Tt<S.length;Tt++)e.bindFramebuffer(n.FRAMEBUFFER,yt.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Tt,n.RENDERBUFFER,null),e.bindFramebuffer(n.FRAMEBUFFER,yt.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Tt,n.TEXTURE_2D,null,0);e.bindFramebuffer(n.READ_FRAMEBUFFER,yt.__webglMultisampledFramebuffer);const bt=R.texture.mipmaps;bt&&bt.length>0?e.bindFramebuffer(n.DRAW_FRAMEBUFFER,yt.__webglFramebuffer[0]):e.bindFramebuffer(n.DRAW_FRAMEBUFFER,yt.__webglFramebuffer);for(let Tt=0;Tt<S.length;Tt++){if(R.resolveDepthBuffer&&(R.depthBuffer&&(J|=n.DEPTH_BUFFER_BIT),R.stencilBuffer&&R.resolveStencilBuffer&&(J|=n.STENCIL_BUFFER_BIT)),st){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,yt.__webglColorRenderbuffer[Tt]);const nt=i.get(S[Tt]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,nt,0)}n.blitFramebuffer(0,0,z,$,0,0,z,$,J,n.NEAREST),c===!0&&(ut.length=0,ot.length=0,ut.push(n.COLOR_ATTACHMENT0+Tt),R.depthBuffer&&R.resolveDepthBuffer===!1&&(ut.push(j),ot.push(j),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,ot)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,ut))}if(e.bindFramebuffer(n.READ_FRAMEBUFFER,null),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),st)for(let Tt=0;Tt<S.length;Tt++){e.bindFramebuffer(n.FRAMEBUFFER,yt.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Tt,n.RENDERBUFFER,yt.__webglColorRenderbuffer[Tt]);const nt=i.get(S[Tt]).__webglTexture;e.bindFramebuffer(n.FRAMEBUFFER,yt.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Tt,n.TEXTURE_2D,nt,0)}e.bindFramebuffer(n.DRAW_FRAMEBUFFER,yt.__webglMultisampledFramebuffer)}else if(R.depthBuffer&&R.resolveDepthBuffer===!1&&c){const S=R.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[S])}}}function dt(R){return Math.min(r.maxSamples,R.samples)}function tt(R){const S=i.get(R);return R.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function xt(R){const S=a.render.frame;h.get(R)!==S&&(h.set(R,S),R.update())}function Xt(R,S){const z=R.colorSpace,$=R.format,J=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||z!==er&&z!==qn&&(ie.getTransfer(z)===le?($!==pn||J!==Fn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",z)),S}function Dt(R){return typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement?(l.width=R.naturalWidth||R.width,l.height=R.naturalHeight||R.height):typeof VideoFrame<"u"&&R instanceof VideoFrame?(l.width=R.displayWidth,l.height=R.displayHeight):(l.width=R.width,l.height=R.height),l}this.allocateTextureUnit=F,this.resetTextureUnits=L,this.setTexture2D=k,this.setTexture2DArray=H,this.setTexture3D=K,this.setTextureCube=G,this.rebindTextures=be,this.setupRenderTarget=D,this.updateRenderTargetMipmap=ht,this.updateMultisampleRenderTarget=lt,this.setupDepthRenderbuffer=jt,this.setupFrameBufferTexture=_t,this.useMultisampledRTT=tt}function Ig(n,t){function e(i,r=qn){let s;const a=ie.getTransfer(r);if(i===Fn)return n.UNSIGNED_BYTE;if(i===To)return n.UNSIGNED_SHORT_4_4_4_4;if(i===Ao)return n.UNSIGNED_SHORT_5_5_5_1;if(i===Mc)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===yc)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===xc)return n.BYTE;if(i===vc)return n.SHORT;if(i===vr)return n.UNSIGNED_SHORT;if(i===bo)return n.INT;if(i===Mi)return n.UNSIGNED_INT;if(i===Ln)return n.FLOAT;if(i===Pr)return n.HALF_FLOAT;if(i===Sc)return n.ALPHA;if(i===Ec)return n.RGB;if(i===pn)return n.RGBA;if(i===yr)return n.DEPTH_COMPONENT;if(i===Sr)return n.DEPTH_STENCIL;if(i===bc)return n.RED;if(i===wo)return n.RED_INTEGER;if(i===Tc)return n.RG;if(i===Ro)return n.RG_INTEGER;if(i===Co)return n.RGBA_INTEGER;if(i===xs||i===vs||i===Ms||i===ys)if(a===le)if(s=t.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===xs)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===vs)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Ms)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===ys)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=t.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===xs)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===vs)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Ms)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===ys)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Fa||i===Oa||i===Ba||i===za)if(s=t.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===Fa)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Oa)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Ba)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===za)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===ka||i===Ha||i===Ga)if(s=t.get("WEBGL_compressed_texture_etc"),s!==null){if(i===ka||i===Ha)return a===le?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===Ga)return a===le?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===Va||i===Wa||i===Xa||i===Ya||i===qa||i===$a||i===ja||i===Ka||i===Za||i===Ja||i===Qa||i===to||i===eo||i===no)if(s=t.get("WEBGL_compressed_texture_astc"),s!==null){if(i===Va)return a===le?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Wa)return a===le?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Xa)return a===le?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Ya)return a===le?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===qa)return a===le?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===$a)return a===le?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===ja)return a===le?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Ka)return a===le?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Za)return a===le?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Ja)return a===le?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Qa)return a===le?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===to)return a===le?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===eo)return a===le?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===no)return a===le?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===io||i===ro||i===so)if(s=t.get("EXT_texture_compression_bptc"),s!==null){if(i===io)return a===le?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===ro)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===so)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===ao||i===oo||i===lo||i===co)if(s=t.get("EXT_texture_compression_rgtc"),s!==null){if(i===ao)return s.COMPRESSED_RED_RGTC1_EXT;if(i===oo)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===lo)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===co)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Mr?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:e}}const Ug=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Ng=`
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

}`;class Fg{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){const i=new zc(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=i}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,i=new ni({vertexShader:Ug,fragmentShader:Ng,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new sn(new Ns(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Og extends bi{constructor(t,e){super();const i=this;let r=null,s=1,a=null,o="local-floor",c=1,l=null,h=null,f=null,d=null,m=null,g=null;const M=typeof XRWebGLBinding<"u",p=new Fg,u={},b=e.getContextAttributes();let y=null,v=null;const A=[],E=[],w=new Ot;let C=null;const _=new tn;_.viewport=new ve;const x=new tn;x.viewport=new ve;const P=[_,x],L=new ef;let F=null,X=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(W){let Z=A[W];return Z===void 0&&(Z=new ca,A[W]=Z),Z.getTargetRaySpace()},this.getControllerGrip=function(W){let Z=A[W];return Z===void 0&&(Z=new ca,A[W]=Z),Z.getGripSpace()},this.getHand=function(W){let Z=A[W];return Z===void 0&&(Z=new ca,A[W]=Z),Z.getHandSpace()};function k(W){const Z=E.indexOf(W.inputSource);if(Z===-1)return;const _t=A[Z];_t!==void 0&&(_t.update(W.inputSource,W.frame,l||a),_t.dispatchEvent({type:W.type,data:W.inputSource}))}function H(){r.removeEventListener("select",k),r.removeEventListener("selectstart",k),r.removeEventListener("selectend",k),r.removeEventListener("squeeze",k),r.removeEventListener("squeezestart",k),r.removeEventListener("squeezeend",k),r.removeEventListener("end",H),r.removeEventListener("inputsourceschange",K);for(let W=0;W<A.length;W++){const Z=E[W];Z!==null&&(E[W]=null,A[W].disconnect(Z))}F=null,X=null,p.reset();for(const W in u)delete u[W];t.setRenderTarget(y),m=null,d=null,f=null,r=null,v=null,$t.stop(),i.isPresenting=!1,t.setPixelRatio(C),t.setSize(w.width,w.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(W){s=W,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(W){o=W,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function(W){l=W},this.getBaseLayer=function(){return d!==null?d:m},this.getBinding=function(){return f===null&&M&&(f=new XRWebGLBinding(r,e)),f},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=async function(W){if(r=W,r!==null){if(y=t.getRenderTarget(),r.addEventListener("select",k),r.addEventListener("selectstart",k),r.addEventListener("selectend",k),r.addEventListener("squeeze",k),r.addEventListener("squeezestart",k),r.addEventListener("squeezeend",k),r.addEventListener("end",H),r.addEventListener("inputsourceschange",K),b.xrCompatible!==!0&&await e.makeXRCompatible(),C=t.getPixelRatio(),t.getSize(w),M&&"createProjectionLayer"in XRWebGLBinding.prototype){let _t=null,Ct=null,St=null;b.depth&&(St=b.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,_t=b.stencil?Sr:yr,Ct=b.stencil?Mr:Mi);const jt={colorFormat:e.RGBA8,depthFormat:St,scaleFactor:s};f=this.getBinding(),d=f.createProjectionLayer(jt),r.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),v=new yi(d.textureWidth,d.textureHeight,{format:pn,type:Fn,depthTexture:new Bc(d.textureWidth,d.textureHeight,Ct,void 0,void 0,void 0,void 0,void 0,void 0,_t),stencilBuffer:b.stencil,colorSpace:t.outputColorSpace,samples:b.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}else{const _t={antialias:b.antialias,alpha:!0,depth:b.depth,stencil:b.stencil,framebufferScaleFactor:s};m=new XRWebGLLayer(r,e,_t),r.updateRenderState({baseLayer:m}),t.setPixelRatio(1),t.setSize(m.framebufferWidth,m.framebufferHeight,!1),v=new yi(m.framebufferWidth,m.framebufferHeight,{format:pn,type:Fn,colorSpace:t.outputColorSpace,stencilBuffer:b.stencil,resolveDepthBuffer:m.ignoreDepthValues===!1,resolveStencilBuffer:m.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(c),l=null,a=await r.requestReferenceSpace(o),$t.setContext(r),$t.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return p.getDepthTexture()};function K(W){for(let Z=0;Z<W.removed.length;Z++){const _t=W.removed[Z],Ct=E.indexOf(_t);Ct>=0&&(E[Ct]=null,A[Ct].disconnect(_t))}for(let Z=0;Z<W.added.length;Z++){const _t=W.added[Z];let Ct=E.indexOf(_t);if(Ct===-1){for(let jt=0;jt<A.length;jt++)if(jt>=E.length){E.push(_t),Ct=jt;break}else if(E[jt]===null){E[jt]=_t,Ct=jt;break}if(Ct===-1)break}const St=A[Ct];St&&St.connect(_t)}}const G=new U,N=new U;function V(W,Z,_t){G.setFromMatrixPosition(Z.matrixWorld),N.setFromMatrixPosition(_t.matrixWorld);const Ct=G.distanceTo(N),St=Z.projectionMatrix.elements,jt=_t.projectionMatrix.elements,be=St[14]/(St[10]-1),D=St[14]/(St[10]+1),ht=(St[9]+1)/St[5],ut=(St[9]-1)/St[5],ot=(St[8]-1)/St[0],lt=(jt[8]+1)/jt[0],dt=be*ot,tt=be*lt,xt=Ct/(-ot+lt),Xt=xt*-ot;if(Z.matrixWorld.decompose(W.position,W.quaternion,W.scale),W.translateX(Xt),W.translateZ(xt),W.matrixWorld.compose(W.position,W.quaternion,W.scale),W.matrixWorldInverse.copy(W.matrixWorld).invert(),St[10]===-1)W.projectionMatrix.copy(Z.projectionMatrix),W.projectionMatrixInverse.copy(Z.projectionMatrixInverse);else{const Dt=be+xt,R=D+xt,S=dt-Xt,z=tt+(Ct-Xt),$=ht*D/R*Dt,J=ut*D/R*Dt;W.projectionMatrix.makePerspective(S,z,$,J,Dt,R),W.projectionMatrixInverse.copy(W.projectionMatrix).invert()}}function et(W,Z){Z===null?W.matrixWorld.copy(W.matrix):W.matrixWorld.multiplyMatrices(Z.matrixWorld,W.matrix),W.matrixWorldInverse.copy(W.matrixWorld).invert()}this.updateCamera=function(W){if(r===null)return;let Z=W.near,_t=W.far;p.texture!==null&&(p.depthNear>0&&(Z=p.depthNear),p.depthFar>0&&(_t=p.depthFar)),L.near=x.near=_.near=Z,L.far=x.far=_.far=_t,(F!==L.near||X!==L.far)&&(r.updateRenderState({depthNear:L.near,depthFar:L.far}),F=L.near,X=L.far),L.layers.mask=W.layers.mask|6,_.layers.mask=L.layers.mask&3,x.layers.mask=L.layers.mask&5;const Ct=W.parent,St=L.cameras;et(L,Ct);for(let jt=0;jt<St.length;jt++)et(St[jt],Ct);St.length===2?V(L,_,x):L.projectionMatrix.copy(_.projectionMatrix),vt(W,L,Ct)};function vt(W,Z,_t){_t===null?W.matrix.copy(Z.matrixWorld):(W.matrix.copy(_t.matrixWorld),W.matrix.invert(),W.matrix.multiply(Z.matrixWorld)),W.matrix.decompose(W.position,W.quaternion,W.scale),W.updateMatrixWorld(!0),W.projectionMatrix.copy(Z.projectionMatrix),W.projectionMatrixInverse.copy(Z.projectionMatrixInverse),W.isPerspectiveCamera&&(W.fov=Er*2*Math.atan(1/W.projectionMatrix.elements[5]),W.zoom=1)}this.getCamera=function(){return L},this.getFoveation=function(){if(!(d===null&&m===null))return c},this.setFoveation=function(W){c=W,d!==null&&(d.fixedFoveation=W),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=W)},this.hasDepthSensing=function(){return p.texture!==null},this.getDepthSensingMesh=function(){return p.getMesh(L)},this.getCameraTexture=function(W){return u[W]};let qt=null;function Zt(W,Z){if(h=Z.getViewerPose(l||a),g=Z,h!==null){const _t=h.views;m!==null&&(t.setRenderTargetFramebuffer(v,m.framebuffer),t.setRenderTarget(v));let Ct=!1;_t.length!==L.cameras.length&&(L.cameras.length=0,Ct=!0);for(let D=0;D<_t.length;D++){const ht=_t[D];let ut=null;if(m!==null)ut=m.getViewport(ht);else{const lt=f.getViewSubImage(d,ht);ut=lt.viewport,D===0&&(t.setRenderTargetTextures(v,lt.colorTexture,lt.depthStencilTexture),t.setRenderTarget(v))}let ot=P[D];ot===void 0&&(ot=new tn,ot.layers.enable(D),ot.viewport=new ve,P[D]=ot),ot.matrix.fromArray(ht.transform.matrix),ot.matrix.decompose(ot.position,ot.quaternion,ot.scale),ot.projectionMatrix.fromArray(ht.projectionMatrix),ot.projectionMatrixInverse.copy(ot.projectionMatrix).invert(),ot.viewport.set(ut.x,ut.y,ut.width,ut.height),D===0&&(L.matrix.copy(ot.matrix),L.matrix.decompose(L.position,L.quaternion,L.scale)),Ct===!0&&L.cameras.push(ot)}const St=r.enabledFeatures;if(St&&St.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&M){f=i.getBinding();const D=f.getDepthInformation(_t[0]);D&&D.isValid&&D.texture&&p.init(D,r.renderState)}if(St&&St.includes("camera-access")&&M){t.state.unbindTexture(),f=i.getBinding();for(let D=0;D<_t.length;D++){const ht=_t[D].camera;if(ht){let ut=u[ht];ut||(ut=new zc,u[ht]=ut);const ot=f.getCameraImage(ht);ut.sourceTexture=ot}}}}for(let _t=0;_t<A.length;_t++){const Ct=E[_t],St=A[_t];Ct!==null&&St!==void 0&&St.update(Ct,Z,l||a)}qt&&qt(W,Z),Z.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:Z}),g=null}const $t=new kc;$t.setAnimationLoop(Zt),this.setAnimationLoop=function(W){qt=W},this.dispose=function(){}}}const hi=new On,Bg=new ge;function zg(n,t){function e(p,u){p.matrixAutoUpdate===!0&&p.updateMatrix(),u.value.copy(p.matrix)}function i(p,u){u.color.getRGB(p.fogColor.value,Lc(n)),u.isFog?(p.fogNear.value=u.near,p.fogFar.value=u.far):u.isFogExp2&&(p.fogDensity.value=u.density)}function r(p,u,b,y,v){u.isMeshBasicMaterial||u.isMeshLambertMaterial?s(p,u):u.isMeshToonMaterial?(s(p,u),f(p,u)):u.isMeshPhongMaterial?(s(p,u),h(p,u)):u.isMeshStandardMaterial?(s(p,u),d(p,u),u.isMeshPhysicalMaterial&&m(p,u,v)):u.isMeshMatcapMaterial?(s(p,u),g(p,u)):u.isMeshDepthMaterial?s(p,u):u.isMeshDistanceMaterial?(s(p,u),M(p,u)):u.isMeshNormalMaterial?s(p,u):u.isLineBasicMaterial?(a(p,u),u.isLineDashedMaterial&&o(p,u)):u.isPointsMaterial?c(p,u,b,y):u.isSpriteMaterial?l(p,u):u.isShadowMaterial?(p.color.value.copy(u.color),p.opacity.value=u.opacity):u.isShaderMaterial&&(u.uniformsNeedUpdate=!1)}function s(p,u){p.opacity.value=u.opacity,u.color&&p.diffuse.value.copy(u.color),u.emissive&&p.emissive.value.copy(u.emissive).multiplyScalar(u.emissiveIntensity),u.map&&(p.map.value=u.map,e(u.map,p.mapTransform)),u.alphaMap&&(p.alphaMap.value=u.alphaMap,e(u.alphaMap,p.alphaMapTransform)),u.bumpMap&&(p.bumpMap.value=u.bumpMap,e(u.bumpMap,p.bumpMapTransform),p.bumpScale.value=u.bumpScale,u.side===We&&(p.bumpScale.value*=-1)),u.normalMap&&(p.normalMap.value=u.normalMap,e(u.normalMap,p.normalMapTransform),p.normalScale.value.copy(u.normalScale),u.side===We&&p.normalScale.value.negate()),u.displacementMap&&(p.displacementMap.value=u.displacementMap,e(u.displacementMap,p.displacementMapTransform),p.displacementScale.value=u.displacementScale,p.displacementBias.value=u.displacementBias),u.emissiveMap&&(p.emissiveMap.value=u.emissiveMap,e(u.emissiveMap,p.emissiveMapTransform)),u.specularMap&&(p.specularMap.value=u.specularMap,e(u.specularMap,p.specularMapTransform)),u.alphaTest>0&&(p.alphaTest.value=u.alphaTest);const b=t.get(u),y=b.envMap,v=b.envMapRotation;y&&(p.envMap.value=y,hi.copy(v),hi.x*=-1,hi.y*=-1,hi.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(hi.y*=-1,hi.z*=-1),p.envMapRotation.value.setFromMatrix4(Bg.makeRotationFromEuler(hi)),p.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=u.reflectivity,p.ior.value=u.ior,p.refractionRatio.value=u.refractionRatio),u.lightMap&&(p.lightMap.value=u.lightMap,p.lightMapIntensity.value=u.lightMapIntensity,e(u.lightMap,p.lightMapTransform)),u.aoMap&&(p.aoMap.value=u.aoMap,p.aoMapIntensity.value=u.aoMapIntensity,e(u.aoMap,p.aoMapTransform))}function a(p,u){p.diffuse.value.copy(u.color),p.opacity.value=u.opacity,u.map&&(p.map.value=u.map,e(u.map,p.mapTransform))}function o(p,u){p.dashSize.value=u.dashSize,p.totalSize.value=u.dashSize+u.gapSize,p.scale.value=u.scale}function c(p,u,b,y){p.diffuse.value.copy(u.color),p.opacity.value=u.opacity,p.size.value=u.size*b,p.scale.value=y*.5,u.map&&(p.map.value=u.map,e(u.map,p.uvTransform)),u.alphaMap&&(p.alphaMap.value=u.alphaMap,e(u.alphaMap,p.alphaMapTransform)),u.alphaTest>0&&(p.alphaTest.value=u.alphaTest)}function l(p,u){p.diffuse.value.copy(u.color),p.opacity.value=u.opacity,p.rotation.value=u.rotation,u.map&&(p.map.value=u.map,e(u.map,p.mapTransform)),u.alphaMap&&(p.alphaMap.value=u.alphaMap,e(u.alphaMap,p.alphaMapTransform)),u.alphaTest>0&&(p.alphaTest.value=u.alphaTest)}function h(p,u){p.specular.value.copy(u.specular),p.shininess.value=Math.max(u.shininess,1e-4)}function f(p,u){u.gradientMap&&(p.gradientMap.value=u.gradientMap)}function d(p,u){p.metalness.value=u.metalness,u.metalnessMap&&(p.metalnessMap.value=u.metalnessMap,e(u.metalnessMap,p.metalnessMapTransform)),p.roughness.value=u.roughness,u.roughnessMap&&(p.roughnessMap.value=u.roughnessMap,e(u.roughnessMap,p.roughnessMapTransform)),u.envMap&&(p.envMapIntensity.value=u.envMapIntensity)}function m(p,u,b){p.ior.value=u.ior,u.sheen>0&&(p.sheenColor.value.copy(u.sheenColor).multiplyScalar(u.sheen),p.sheenRoughness.value=u.sheenRoughness,u.sheenColorMap&&(p.sheenColorMap.value=u.sheenColorMap,e(u.sheenColorMap,p.sheenColorMapTransform)),u.sheenRoughnessMap&&(p.sheenRoughnessMap.value=u.sheenRoughnessMap,e(u.sheenRoughnessMap,p.sheenRoughnessMapTransform))),u.clearcoat>0&&(p.clearcoat.value=u.clearcoat,p.clearcoatRoughness.value=u.clearcoatRoughness,u.clearcoatMap&&(p.clearcoatMap.value=u.clearcoatMap,e(u.clearcoatMap,p.clearcoatMapTransform)),u.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=u.clearcoatRoughnessMap,e(u.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),u.clearcoatNormalMap&&(p.clearcoatNormalMap.value=u.clearcoatNormalMap,e(u.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(u.clearcoatNormalScale),u.side===We&&p.clearcoatNormalScale.value.negate())),u.dispersion>0&&(p.dispersion.value=u.dispersion),u.iridescence>0&&(p.iridescence.value=u.iridescence,p.iridescenceIOR.value=u.iridescenceIOR,p.iridescenceThicknessMinimum.value=u.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=u.iridescenceThicknessRange[1],u.iridescenceMap&&(p.iridescenceMap.value=u.iridescenceMap,e(u.iridescenceMap,p.iridescenceMapTransform)),u.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=u.iridescenceThicknessMap,e(u.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),u.transmission>0&&(p.transmission.value=u.transmission,p.transmissionSamplerMap.value=b.texture,p.transmissionSamplerSize.value.set(b.width,b.height),u.transmissionMap&&(p.transmissionMap.value=u.transmissionMap,e(u.transmissionMap,p.transmissionMapTransform)),p.thickness.value=u.thickness,u.thicknessMap&&(p.thicknessMap.value=u.thicknessMap,e(u.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=u.attenuationDistance,p.attenuationColor.value.copy(u.attenuationColor)),u.anisotropy>0&&(p.anisotropyVector.value.set(u.anisotropy*Math.cos(u.anisotropyRotation),u.anisotropy*Math.sin(u.anisotropyRotation)),u.anisotropyMap&&(p.anisotropyMap.value=u.anisotropyMap,e(u.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=u.specularIntensity,p.specularColor.value.copy(u.specularColor),u.specularColorMap&&(p.specularColorMap.value=u.specularColorMap,e(u.specularColorMap,p.specularColorMapTransform)),u.specularIntensityMap&&(p.specularIntensityMap.value=u.specularIntensityMap,e(u.specularIntensityMap,p.specularIntensityMapTransform))}function g(p,u){u.matcap&&(p.matcap.value=u.matcap)}function M(p,u){const b=t.get(u).light;p.referencePosition.value.setFromMatrixPosition(b.matrixWorld),p.nearDistance.value=b.shadow.camera.near,p.farDistance.value=b.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function kg(n,t,e,i){let r={},s={},a=[];const o=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function c(b,y){const v=y.program;i.uniformBlockBinding(b,v)}function l(b,y){let v=r[b.id];v===void 0&&(g(b),v=h(b),r[b.id]=v,b.addEventListener("dispose",p));const A=y.program;i.updateUBOMapping(b,A);const E=t.render.frame;s[b.id]!==E&&(d(b),s[b.id]=E)}function h(b){const y=f();b.__bindingPointIndex=y;const v=n.createBuffer(),A=b.__size,E=b.usage;return n.bindBuffer(n.UNIFORM_BUFFER,v),n.bufferData(n.UNIFORM_BUFFER,A,E),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,y,v),v}function f(){for(let b=0;b<o;b++)if(a.indexOf(b)===-1)return a.push(b),b;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(b){const y=r[b.id],v=b.uniforms,A=b.__cache;n.bindBuffer(n.UNIFORM_BUFFER,y);for(let E=0,w=v.length;E<w;E++){const C=Array.isArray(v[E])?v[E]:[v[E]];for(let _=0,x=C.length;_<x;_++){const P=C[_];if(m(P,E,_,A)===!0){const L=P.__offset,F=Array.isArray(P.value)?P.value:[P.value];let X=0;for(let k=0;k<F.length;k++){const H=F[k],K=M(H);typeof H=="number"||typeof H=="boolean"?(P.__data[0]=H,n.bufferSubData(n.UNIFORM_BUFFER,L+X,P.__data)):H.isMatrix3?(P.__data[0]=H.elements[0],P.__data[1]=H.elements[1],P.__data[2]=H.elements[2],P.__data[3]=0,P.__data[4]=H.elements[3],P.__data[5]=H.elements[4],P.__data[6]=H.elements[5],P.__data[7]=0,P.__data[8]=H.elements[6],P.__data[9]=H.elements[7],P.__data[10]=H.elements[8],P.__data[11]=0):(H.toArray(P.__data,X),X+=K.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,L,P.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function m(b,y,v,A){const E=b.value,w=y+"_"+v;if(A[w]===void 0)return typeof E=="number"||typeof E=="boolean"?A[w]=E:A[w]=E.clone(),!0;{const C=A[w];if(typeof E=="number"||typeof E=="boolean"){if(C!==E)return A[w]=E,!0}else if(C.equals(E)===!1)return C.copy(E),!0}return!1}function g(b){const y=b.uniforms;let v=0;const A=16;for(let w=0,C=y.length;w<C;w++){const _=Array.isArray(y[w])?y[w]:[y[w]];for(let x=0,P=_.length;x<P;x++){const L=_[x],F=Array.isArray(L.value)?L.value:[L.value];for(let X=0,k=F.length;X<k;X++){const H=F[X],K=M(H),G=v%A,N=G%K.boundary,V=G+N;v+=N,V!==0&&A-V<K.storage&&(v+=A-V),L.__data=new Float32Array(K.storage/Float32Array.BYTES_PER_ELEMENT),L.__offset=v,v+=K.storage}}}const E=v%A;return E>0&&(v+=A-E),b.__size=v,b.__cache={},this}function M(b){const y={boundary:0,storage:0};return typeof b=="number"||typeof b=="boolean"?(y.boundary=4,y.storage=4):b.isVector2?(y.boundary=8,y.storage=8):b.isVector3||b.isColor?(y.boundary=16,y.storage=12):b.isVector4?(y.boundary=16,y.storage=16):b.isMatrix3?(y.boundary=48,y.storage=48):b.isMatrix4?(y.boundary=64,y.storage=64):b.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",b),y}function p(b){const y=b.target;y.removeEventListener("dispose",p);const v=a.indexOf(y.__bindingPointIndex);a.splice(v,1),n.deleteBuffer(r[y.id]),delete r[y.id],delete s[y.id]}function u(){for(const b in r)n.deleteBuffer(r[b]);a=[],r={},s={}}return{bind:c,update:l,dispose:u}}class Hg{constructor(t={}){const{canvas:e=vu(),context:i=null,depth:r=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:f=!1,reversedDepthBuffer:d=!1}=t;this.isWebGLRenderer=!0;let m;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");m=i.getContextAttributes().alpha}else m=a;const g=new Uint32Array(4),M=new Int32Array(4);let p=null,u=null;const b=[],y=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Jn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const v=this;let A=!1;this._outputColorSpace=De;let E=0,w=0,C=null,_=-1,x=null;const P=new ve,L=new ve;let F=null;const X=new zt(0);let k=0,H=e.width,K=e.height,G=1,N=null,V=null;const et=new ve(0,0,H,K),vt=new ve(0,0,H,K);let qt=!1;const Zt=new Fc;let $t=!1,W=!1;const Z=new ge,_t=new U,Ct=new ve,St={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let jt=!1;function be(){return C===null?G:1}let D=i;function ht(T,O){return e.getContext(T,O)}try{const T={alpha:!0,depth:r,stencil:s,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:f};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Eo}`),e.addEventListener("webglcontextlost",ct,!1),e.addEventListener("webglcontextrestored",Et,!1),e.addEventListener("webglcontextcreationerror",rt,!1),D===null){const O="webgl2";if(D=ht(O,T),D===null)throw ht(O)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(T){throw console.error("THREE.WebGLRenderer: "+T.message),T}let ut,ot,lt,dt,tt,xt,Xt,Dt,R,S,z,$,J,j,yt,st,bt,Tt,nt,pt,Ut,At,ft,Ht;function I(){ut=new Zp(D),ut.init(),At=new Ig(D,ut),ot=new Wp(D,ut,t,At),lt=new Dg(D,ut),ot.reversedDepthBuffer&&d&&lt.buffers.depth.setReversed(!0),dt=new tm(D),tt=new xg,xt=new Lg(D,ut,lt,tt,ot,At,dt),Xt=new Yp(v),Dt=new Kp(v),R=new af(D),ft=new Gp(D,R),S=new Jp(D,R,dt,ft),z=new nm(D,S,R,dt),nt=new em(D,ot,xt),st=new Xp(tt),$=new _g(v,Xt,Dt,ut,ot,ft,st),J=new zg(v,tt),j=new Mg,yt=new Ag(ut),Tt=new Hp(v,Xt,Dt,lt,z,m,c),bt=new Cg(v,z,ot),Ht=new kg(D,dt,ot,lt),pt=new Vp(D,ut,dt),Ut=new Qp(D,ut,dt),dt.programs=$.programs,v.capabilities=ot,v.extensions=ut,v.properties=tt,v.renderLists=j,v.shadowMap=bt,v.state=lt,v.info=dt}I();const it=new Og(v,D);this.xr=it,this.getContext=function(){return D},this.getContextAttributes=function(){return D.getContextAttributes()},this.forceContextLoss=function(){const T=ut.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){const T=ut.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return G},this.setPixelRatio=function(T){T!==void 0&&(G=T,this.setSize(H,K,!1))},this.getSize=function(T){return T.set(H,K)},this.setSize=function(T,O,Y=!0){if(it.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}H=T,K=O,e.width=Math.floor(T*G),e.height=Math.floor(O*G),Y===!0&&(e.style.width=T+"px",e.style.height=O+"px"),this.setViewport(0,0,T,O)},this.getDrawingBufferSize=function(T){return T.set(H*G,K*G).floor()},this.setDrawingBufferSize=function(T,O,Y){H=T,K=O,G=Y,e.width=Math.floor(T*Y),e.height=Math.floor(O*Y),this.setViewport(0,0,T,O)},this.getCurrentViewport=function(T){return T.copy(P)},this.getViewport=function(T){return T.copy(et)},this.setViewport=function(T,O,Y,q){T.isVector4?et.set(T.x,T.y,T.z,T.w):et.set(T,O,Y,q),lt.viewport(P.copy(et).multiplyScalar(G).round())},this.getScissor=function(T){return T.copy(vt)},this.setScissor=function(T,O,Y,q){T.isVector4?vt.set(T.x,T.y,T.z,T.w):vt.set(T,O,Y,q),lt.scissor(L.copy(vt).multiplyScalar(G).round())},this.getScissorTest=function(){return qt},this.setScissorTest=function(T){lt.setScissorTest(qt=T)},this.setOpaqueSort=function(T){N=T},this.setTransparentSort=function(T){V=T},this.getClearColor=function(T){return T.copy(Tt.getClearColor())},this.setClearColor=function(){Tt.setClearColor(...arguments)},this.getClearAlpha=function(){return Tt.getClearAlpha()},this.setClearAlpha=function(){Tt.setClearAlpha(...arguments)},this.clear=function(T=!0,O=!0,Y=!0){let q=0;if(T){let B=!1;if(C!==null){const at=C.texture.format;B=at===Co||at===Ro||at===wo}if(B){const at=C.texture.type,gt=at===Fn||at===Mi||at===vr||at===Mr||at===To||at===Ao,wt=Tt.getClearColor(),Mt=Tt.getClearAlpha(),Bt=wt.r,kt=wt.g,Lt=wt.b;gt?(g[0]=Bt,g[1]=kt,g[2]=Lt,g[3]=Mt,D.clearBufferuiv(D.COLOR,0,g)):(M[0]=Bt,M[1]=kt,M[2]=Lt,M[3]=Mt,D.clearBufferiv(D.COLOR,0,M))}else q|=D.COLOR_BUFFER_BIT}O&&(q|=D.DEPTH_BUFFER_BIT),Y&&(q|=D.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),D.clear(q)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",ct,!1),e.removeEventListener("webglcontextrestored",Et,!1),e.removeEventListener("webglcontextcreationerror",rt,!1),Tt.dispose(),j.dispose(),yt.dispose(),tt.dispose(),Xt.dispose(),Dt.dispose(),z.dispose(),ft.dispose(),Ht.dispose(),$.dispose(),it.dispose(),it.removeEventListener("sessionstart",_n),it.removeEventListener("sessionend",Ho),ii.stop()};function ct(T){T.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),A=!0}function Et(){console.log("THREE.WebGLRenderer: Context Restored."),A=!1;const T=dt.autoReset,O=bt.enabled,Y=bt.autoUpdate,q=bt.needsUpdate,B=bt.type;I(),dt.autoReset=T,bt.enabled=O,bt.autoUpdate=Y,bt.needsUpdate=q,bt.type=B}function rt(T){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function Q(T){const O=T.target;O.removeEventListener("dispose",Q),Rt(O)}function Rt(T){Gt(T),tt.remove(T)}function Gt(T){const O=tt.get(T).programs;O!==void 0&&(O.forEach(function(Y){$.releaseProgram(Y)}),T.isShaderMaterial&&$.releaseShaderCache(T))}this.renderBufferDirect=function(T,O,Y,q,B,at){O===null&&(O=St);const gt=B.isMesh&&B.matrixWorld.determinant()<0,wt=hh(T,O,Y,q,B);lt.setMaterial(q,gt);let Mt=Y.index,Bt=1;if(q.wireframe===!0){if(Mt=S.getWireframeAttribute(Y),Mt===void 0)return;Bt=2}const kt=Y.drawRange,Lt=Y.attributes.position;let Jt=kt.start*Bt,oe=(kt.start+kt.count)*Bt;at!==null&&(Jt=Math.max(Jt,at.start*Bt),oe=Math.min(oe,(at.start+at.count)*Bt)),Mt!==null?(Jt=Math.max(Jt,0),oe=Math.min(oe,Mt.count)):Lt!=null&&(Jt=Math.max(Jt,0),oe=Math.min(oe,Lt.count));const _e=oe-Jt;if(_e<0||_e===1/0)return;ft.setup(B,q,wt,Y,Mt);let de,ue=pt;if(Mt!==null&&(de=R.get(Mt),ue=Ut,ue.setIndex(de)),B.isMesh)q.wireframe===!0?(lt.setLineWidth(q.wireframeLinewidth*be()),ue.setMode(D.LINES)):ue.setMode(D.TRIANGLES);else if(B.isLine){let Nt=q.linewidth;Nt===void 0&&(Nt=1),lt.setLineWidth(Nt*be()),B.isLineSegments?ue.setMode(D.LINES):B.isLineLoop?ue.setMode(D.LINE_LOOP):ue.setMode(D.LINE_STRIP)}else B.isPoints?ue.setMode(D.POINTS):B.isSprite&&ue.setMode(D.TRIANGLES);if(B.isBatchedMesh)if(B._multiDrawInstances!==null)br("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),ue.renderMultiDrawInstances(B._multiDrawStarts,B._multiDrawCounts,B._multiDrawCount,B._multiDrawInstances);else if(ut.get("WEBGL_multi_draw"))ue.renderMultiDraw(B._multiDrawStarts,B._multiDrawCounts,B._multiDrawCount);else{const Nt=B._multiDrawStarts,pe=B._multiDrawCounts,ne=B._multiDrawCount,Xe=Mt?R.get(Mt).bytesPerElement:1,Ai=tt.get(q).currentProgram.getUniforms();for(let Ye=0;Ye<ne;Ye++)Ai.setValue(D,"_gl_DrawID",Ye),ue.render(Nt[Ye]/Xe,pe[Ye])}else if(B.isInstancedMesh)ue.renderInstances(Jt,_e,B.count);else if(Y.isInstancedBufferGeometry){const Nt=Y._maxInstanceCount!==void 0?Y._maxInstanceCount:1/0,pe=Math.min(Y.instanceCount,Nt);ue.renderInstances(Jt,_e,pe)}else ue.render(Jt,_e)};function fe(T,O,Y){T.transparent===!0&&T.side===Dn&&T.forceSinglePass===!1?(T.side=We,T.needsUpdate=!0,Br(T,O,Y),T.side=ti,T.needsUpdate=!0,Br(T,O,Y),T.side=Dn):Br(T,O,Y)}this.compile=function(T,O,Y=null){Y===null&&(Y=T),u=yt.get(Y),u.init(O),y.push(u),Y.traverseVisible(function(B){B.isLight&&B.layers.test(O.layers)&&(u.pushLight(B),B.castShadow&&u.pushShadow(B))}),T!==Y&&T.traverseVisible(function(B){B.isLight&&B.layers.test(O.layers)&&(u.pushLight(B),B.castShadow&&u.pushShadow(B))}),u.setupLights();const q=new Set;return T.traverse(function(B){if(!(B.isMesh||B.isPoints||B.isLine||B.isSprite))return;const at=B.material;if(at)if(Array.isArray(at))for(let gt=0;gt<at.length;gt++){const wt=at[gt];fe(wt,Y,B),q.add(wt)}else fe(at,Y,B),q.add(at)}),u=y.pop(),q},this.compileAsync=function(T,O,Y=null){const q=this.compile(T,O,Y);return new Promise(B=>{function at(){if(q.forEach(function(gt){tt.get(gt).currentProgram.isReady()&&q.delete(gt)}),q.size===0){B(T);return}setTimeout(at,10)}ut.get("KHR_parallel_shader_compile")!==null?at():setTimeout(at,10)})};let re=null;function bn(T){re&&re(T)}function _n(){ii.stop()}function Ho(){ii.start()}const ii=new kc;ii.setAnimationLoop(bn),typeof self<"u"&&ii.setContext(self),this.setAnimationLoop=function(T){re=T,it.setAnimationLoop(T),T===null?ii.stop():ii.start()},it.addEventListener("sessionstart",_n),it.addEventListener("sessionend",Ho),this.render=function(T,O){if(O!==void 0&&O.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(A===!0)return;if(T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),O.parent===null&&O.matrixWorldAutoUpdate===!0&&O.updateMatrixWorld(),it.enabled===!0&&it.isPresenting===!0&&(it.cameraAutoUpdate===!0&&it.updateCamera(O),O=it.getCamera()),T.isScene===!0&&T.onBeforeRender(v,T,O,C),u=yt.get(T,y.length),u.init(O),y.push(u),Z.multiplyMatrices(O.projectionMatrix,O.matrixWorldInverse),Zt.setFromProjectionMatrix(Z,Mn,O.reversedDepth),W=this.localClippingEnabled,$t=st.init(this.clippingPlanes,W),p=j.get(T,b.length),p.init(),b.push(p),it.enabled===!0&&it.isPresenting===!0){const at=v.xr.getDepthSensingMesh();at!==null&&ks(at,O,-1/0,v.sortObjects)}ks(T,O,0,v.sortObjects),p.finish(),v.sortObjects===!0&&p.sort(N,V),jt=it.enabled===!1||it.isPresenting===!1||it.hasDepthSensing()===!1,jt&&Tt.addToRenderList(p,T),this.info.render.frame++,$t===!0&&st.beginShadows();const Y=u.state.shadowsArray;bt.render(Y,T,O),$t===!0&&st.endShadows(),this.info.autoReset===!0&&this.info.reset();const q=p.opaque,B=p.transmissive;if(u.setupLights(),O.isArrayCamera){const at=O.cameras;if(B.length>0)for(let gt=0,wt=at.length;gt<wt;gt++){const Mt=at[gt];Vo(q,B,T,Mt)}jt&&Tt.render(T);for(let gt=0,wt=at.length;gt<wt;gt++){const Mt=at[gt];Go(p,T,Mt,Mt.viewport)}}else B.length>0&&Vo(q,B,T,O),jt&&Tt.render(T),Go(p,T,O);C!==null&&w===0&&(xt.updateMultisampleRenderTarget(C),xt.updateRenderTargetMipmap(C)),T.isScene===!0&&T.onAfterRender(v,T,O),ft.resetDefaultState(),_=-1,x=null,y.pop(),y.length>0?(u=y[y.length-1],$t===!0&&st.setGlobalState(v.clippingPlanes,u.state.camera)):u=null,b.pop(),b.length>0?p=b[b.length-1]:p=null};function ks(T,O,Y,q){if(T.visible===!1)return;if(T.layers.test(O.layers)){if(T.isGroup)Y=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(O);else if(T.isLight)u.pushLight(T),T.castShadow&&u.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||Zt.intersectsSprite(T)){q&&Ct.setFromMatrixPosition(T.matrixWorld).applyMatrix4(Z);const gt=z.update(T),wt=T.material;wt.visible&&p.push(T,gt,wt,Y,Ct.z,null)}}else if((T.isMesh||T.isLine||T.isPoints)&&(!T.frustumCulled||Zt.intersectsObject(T))){const gt=z.update(T),wt=T.material;if(q&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),Ct.copy(T.boundingSphere.center)):(gt.boundingSphere===null&&gt.computeBoundingSphere(),Ct.copy(gt.boundingSphere.center)),Ct.applyMatrix4(T.matrixWorld).applyMatrix4(Z)),Array.isArray(wt)){const Mt=gt.groups;for(let Bt=0,kt=Mt.length;Bt<kt;Bt++){const Lt=Mt[Bt],Jt=wt[Lt.materialIndex];Jt&&Jt.visible&&p.push(T,gt,Jt,Y,Ct.z,Lt)}}else wt.visible&&p.push(T,gt,wt,Y,Ct.z,null)}}const at=T.children;for(let gt=0,wt=at.length;gt<wt;gt++)ks(at[gt],O,Y,q)}function Go(T,O,Y,q){const B=T.opaque,at=T.transmissive,gt=T.transparent;u.setupLightsView(Y),$t===!0&&st.setGlobalState(v.clippingPlanes,Y),q&&lt.viewport(P.copy(q)),B.length>0&&Or(B,O,Y),at.length>0&&Or(at,O,Y),gt.length>0&&Or(gt,O,Y),lt.buffers.depth.setTest(!0),lt.buffers.depth.setMask(!0),lt.buffers.color.setMask(!0),lt.setPolygonOffset(!1)}function Vo(T,O,Y,q){if((Y.isScene===!0?Y.overrideMaterial:null)!==null)return;u.state.transmissionRenderTarget[q.id]===void 0&&(u.state.transmissionRenderTarget[q.id]=new yi(1,1,{generateMipmaps:!0,type:ut.has("EXT_color_buffer_half_float")||ut.has("EXT_color_buffer_float")?Pr:Fn,minFilter:jn,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:ie.workingColorSpace}));const at=u.state.transmissionRenderTarget[q.id],gt=q.viewport||P;at.setSize(gt.z*v.transmissionResolutionScale,gt.w*v.transmissionResolutionScale);const wt=v.getRenderTarget(),Mt=v.getActiveCubeFace(),Bt=v.getActiveMipmapLevel();v.setRenderTarget(at),v.getClearColor(X),k=v.getClearAlpha(),k<1&&v.setClearColor(16777215,.5),v.clear(),jt&&Tt.render(Y);const kt=v.toneMapping;v.toneMapping=Jn;const Lt=q.viewport;if(q.viewport!==void 0&&(q.viewport=void 0),u.setupLightsView(q),$t===!0&&st.setGlobalState(v.clippingPlanes,q),Or(T,Y,q),xt.updateMultisampleRenderTarget(at),xt.updateRenderTargetMipmap(at),ut.has("WEBGL_multisampled_render_to_texture")===!1){let Jt=!1;for(let oe=0,_e=O.length;oe<_e;oe++){const de=O[oe],ue=de.object,Nt=de.geometry,pe=de.material,ne=de.group;if(pe.side===Dn&&ue.layers.test(q.layers)){const Xe=pe.side;pe.side=We,pe.needsUpdate=!0,Wo(ue,Y,q,Nt,pe,ne),pe.side=Xe,pe.needsUpdate=!0,Jt=!0}}Jt===!0&&(xt.updateMultisampleRenderTarget(at),xt.updateRenderTargetMipmap(at))}v.setRenderTarget(wt,Mt,Bt),v.setClearColor(X,k),Lt!==void 0&&(q.viewport=Lt),v.toneMapping=kt}function Or(T,O,Y){const q=O.isScene===!0?O.overrideMaterial:null;for(let B=0,at=T.length;B<at;B++){const gt=T[B],wt=gt.object,Mt=gt.geometry,Bt=gt.group;let kt=gt.material;kt.allowOverride===!0&&q!==null&&(kt=q),wt.layers.test(Y.layers)&&Wo(wt,O,Y,Mt,kt,Bt)}}function Wo(T,O,Y,q,B,at){T.onBeforeRender(v,O,Y,q,B,at),T.modelViewMatrix.multiplyMatrices(Y.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),B.onBeforeRender(v,O,Y,q,T,at),B.transparent===!0&&B.side===Dn&&B.forceSinglePass===!1?(B.side=We,B.needsUpdate=!0,v.renderBufferDirect(Y,O,q,B,T,at),B.side=ti,B.needsUpdate=!0,v.renderBufferDirect(Y,O,q,B,T,at),B.side=Dn):v.renderBufferDirect(Y,O,q,B,T,at),T.onAfterRender(v,O,Y,q,B,at)}function Br(T,O,Y){O.isScene!==!0&&(O=St);const q=tt.get(T),B=u.state.lights,at=u.state.shadowsArray,gt=B.state.version,wt=$.getParameters(T,B.state,at,O,Y),Mt=$.getProgramCacheKey(wt);let Bt=q.programs;q.environment=T.isMeshStandardMaterial?O.environment:null,q.fog=O.fog,q.envMap=(T.isMeshStandardMaterial?Dt:Xt).get(T.envMap||q.environment),q.envMapRotation=q.environment!==null&&T.envMap===null?O.environmentRotation:T.envMapRotation,Bt===void 0&&(T.addEventListener("dispose",Q),Bt=new Map,q.programs=Bt);let kt=Bt.get(Mt);if(kt!==void 0){if(q.currentProgram===kt&&q.lightsStateVersion===gt)return Yo(T,wt),kt}else wt.uniforms=$.getUniforms(T),T.onBeforeCompile(wt,v),kt=$.acquireProgram(wt,Mt),Bt.set(Mt,kt),q.uniforms=wt.uniforms;const Lt=q.uniforms;return(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(Lt.clippingPlanes=st.uniform),Yo(T,wt),q.needsLights=fh(T),q.lightsStateVersion=gt,q.needsLights&&(Lt.ambientLightColor.value=B.state.ambient,Lt.lightProbe.value=B.state.probe,Lt.directionalLights.value=B.state.directional,Lt.directionalLightShadows.value=B.state.directionalShadow,Lt.spotLights.value=B.state.spot,Lt.spotLightShadows.value=B.state.spotShadow,Lt.rectAreaLights.value=B.state.rectArea,Lt.ltc_1.value=B.state.rectAreaLTC1,Lt.ltc_2.value=B.state.rectAreaLTC2,Lt.pointLights.value=B.state.point,Lt.pointLightShadows.value=B.state.pointShadow,Lt.hemisphereLights.value=B.state.hemi,Lt.directionalShadowMap.value=B.state.directionalShadowMap,Lt.directionalShadowMatrix.value=B.state.directionalShadowMatrix,Lt.spotShadowMap.value=B.state.spotShadowMap,Lt.spotLightMatrix.value=B.state.spotLightMatrix,Lt.spotLightMap.value=B.state.spotLightMap,Lt.pointShadowMap.value=B.state.pointShadowMap,Lt.pointShadowMatrix.value=B.state.pointShadowMatrix),q.currentProgram=kt,q.uniformsList=null,kt}function Xo(T){if(T.uniformsList===null){const O=T.currentProgram.getUniforms();T.uniformsList=Ss.seqWithValue(O.seq,T.uniforms)}return T.uniformsList}function Yo(T,O){const Y=tt.get(T);Y.outputColorSpace=O.outputColorSpace,Y.batching=O.batching,Y.batchingColor=O.batchingColor,Y.instancing=O.instancing,Y.instancingColor=O.instancingColor,Y.instancingMorph=O.instancingMorph,Y.skinning=O.skinning,Y.morphTargets=O.morphTargets,Y.morphNormals=O.morphNormals,Y.morphColors=O.morphColors,Y.morphTargetsCount=O.morphTargetsCount,Y.numClippingPlanes=O.numClippingPlanes,Y.numIntersection=O.numClipIntersection,Y.vertexAlphas=O.vertexAlphas,Y.vertexTangents=O.vertexTangents,Y.toneMapping=O.toneMapping}function hh(T,O,Y,q,B){O.isScene!==!0&&(O=St),xt.resetTextureUnits();const at=O.fog,gt=q.isMeshStandardMaterial?O.environment:null,wt=C===null?v.outputColorSpace:C.isXRRenderTarget===!0?C.texture.colorSpace:er,Mt=(q.isMeshStandardMaterial?Dt:Xt).get(q.envMap||gt),Bt=q.vertexColors===!0&&!!Y.attributes.color&&Y.attributes.color.itemSize===4,kt=!!Y.attributes.tangent&&(!!q.normalMap||q.anisotropy>0),Lt=!!Y.morphAttributes.position,Jt=!!Y.morphAttributes.normal,oe=!!Y.morphAttributes.color;let _e=Jn;q.toneMapped&&(C===null||C.isXRRenderTarget===!0)&&(_e=v.toneMapping);const de=Y.morphAttributes.position||Y.morphAttributes.normal||Y.morphAttributes.color,ue=de!==void 0?de.length:0,Nt=tt.get(q),pe=u.state.lights;if($t===!0&&(W===!0||T!==x)){const Ne=T===x&&q.id===_;st.setState(q,T,Ne)}let ne=!1;q.version===Nt.__version?(Nt.needsLights&&Nt.lightsStateVersion!==pe.state.version||Nt.outputColorSpace!==wt||B.isBatchedMesh&&Nt.batching===!1||!B.isBatchedMesh&&Nt.batching===!0||B.isBatchedMesh&&Nt.batchingColor===!0&&B.colorTexture===null||B.isBatchedMesh&&Nt.batchingColor===!1&&B.colorTexture!==null||B.isInstancedMesh&&Nt.instancing===!1||!B.isInstancedMesh&&Nt.instancing===!0||B.isSkinnedMesh&&Nt.skinning===!1||!B.isSkinnedMesh&&Nt.skinning===!0||B.isInstancedMesh&&Nt.instancingColor===!0&&B.instanceColor===null||B.isInstancedMesh&&Nt.instancingColor===!1&&B.instanceColor!==null||B.isInstancedMesh&&Nt.instancingMorph===!0&&B.morphTexture===null||B.isInstancedMesh&&Nt.instancingMorph===!1&&B.morphTexture!==null||Nt.envMap!==Mt||q.fog===!0&&Nt.fog!==at||Nt.numClippingPlanes!==void 0&&(Nt.numClippingPlanes!==st.numPlanes||Nt.numIntersection!==st.numIntersection)||Nt.vertexAlphas!==Bt||Nt.vertexTangents!==kt||Nt.morphTargets!==Lt||Nt.morphNormals!==Jt||Nt.morphColors!==oe||Nt.toneMapping!==_e||Nt.morphTargetsCount!==ue)&&(ne=!0):(ne=!0,Nt.__version=q.version);let Xe=Nt.currentProgram;ne===!0&&(Xe=Br(q,O,B));let Ai=!1,Ye=!1,rr=!1;const me=Xe.getUniforms(),Ke=Nt.uniforms;if(lt.useProgram(Xe.program)&&(Ai=!0,Ye=!0,rr=!0),q.id!==_&&(_=q.id,Ye=!0),Ai||x!==T){lt.buffers.depth.getReversed()&&T.reversedDepth!==!0&&(T._reversedDepth=!0,T.updateProjectionMatrix()),me.setValue(D,"projectionMatrix",T.projectionMatrix),me.setValue(D,"viewMatrix",T.matrixWorldInverse);const He=me.map.cameraPosition;He!==void 0&&He.setValue(D,_t.setFromMatrixPosition(T.matrixWorld)),ot.logarithmicDepthBuffer&&me.setValue(D,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),(q.isMeshPhongMaterial||q.isMeshToonMaterial||q.isMeshLambertMaterial||q.isMeshBasicMaterial||q.isMeshStandardMaterial||q.isShaderMaterial)&&me.setValue(D,"isOrthographic",T.isOrthographicCamera===!0),x!==T&&(x=T,Ye=!0,rr=!0)}if(B.isSkinnedMesh){me.setOptional(D,B,"bindMatrix"),me.setOptional(D,B,"bindMatrixInverse");const Ne=B.skeleton;Ne&&(Ne.boneTexture===null&&Ne.computeBoneTexture(),me.setValue(D,"boneTexture",Ne.boneTexture,xt))}B.isBatchedMesh&&(me.setOptional(D,B,"batchingTexture"),me.setValue(D,"batchingTexture",B._matricesTexture,xt),me.setOptional(D,B,"batchingIdTexture"),me.setValue(D,"batchingIdTexture",B._indirectTexture,xt),me.setOptional(D,B,"batchingColorTexture"),B._colorsTexture!==null&&me.setValue(D,"batchingColorTexture",B._colorsTexture,xt));const Ze=Y.morphAttributes;if((Ze.position!==void 0||Ze.normal!==void 0||Ze.color!==void 0)&&nt.update(B,Y,Xe),(Ye||Nt.receiveShadow!==B.receiveShadow)&&(Nt.receiveShadow=B.receiveShadow,me.setValue(D,"receiveShadow",B.receiveShadow)),q.isMeshGouraudMaterial&&q.envMap!==null&&(Ke.envMap.value=Mt,Ke.flipEnvMap.value=Mt.isCubeTexture&&Mt.isRenderTargetTexture===!1?-1:1),q.isMeshStandardMaterial&&q.envMap===null&&O.environment!==null&&(Ke.envMapIntensity.value=O.environmentIntensity),Ye&&(me.setValue(D,"toneMappingExposure",v.toneMappingExposure),Nt.needsLights&&uh(Ke,rr),at&&q.fog===!0&&J.refreshFogUniforms(Ke,at),J.refreshMaterialUniforms(Ke,q,G,K,u.state.transmissionRenderTarget[T.id]),Ss.upload(D,Xo(Nt),Ke,xt)),q.isShaderMaterial&&q.uniformsNeedUpdate===!0&&(Ss.upload(D,Xo(Nt),Ke,xt),q.uniformsNeedUpdate=!1),q.isSpriteMaterial&&me.setValue(D,"center",B.center),me.setValue(D,"modelViewMatrix",B.modelViewMatrix),me.setValue(D,"normalMatrix",B.normalMatrix),me.setValue(D,"modelMatrix",B.matrixWorld),q.isShaderMaterial||q.isRawShaderMaterial){const Ne=q.uniformsGroups;for(let He=0,Hs=Ne.length;He<Hs;He++){const ri=Ne[He];Ht.update(ri,Xe),Ht.bind(ri,Xe)}}return Xe}function uh(T,O){T.ambientLightColor.needsUpdate=O,T.lightProbe.needsUpdate=O,T.directionalLights.needsUpdate=O,T.directionalLightShadows.needsUpdate=O,T.pointLights.needsUpdate=O,T.pointLightShadows.needsUpdate=O,T.spotLights.needsUpdate=O,T.spotLightShadows.needsUpdate=O,T.rectAreaLights.needsUpdate=O,T.hemisphereLights.needsUpdate=O}function fh(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return E},this.getActiveMipmapLevel=function(){return w},this.getRenderTarget=function(){return C},this.setRenderTargetTextures=function(T,O,Y){const q=tt.get(T);q.__autoAllocateDepthBuffer=T.resolveDepthBuffer===!1,q.__autoAllocateDepthBuffer===!1&&(q.__useRenderToTexture=!1),tt.get(T.texture).__webglTexture=O,tt.get(T.depthTexture).__webglTexture=q.__autoAllocateDepthBuffer?void 0:Y,q.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(T,O){const Y=tt.get(T);Y.__webglFramebuffer=O,Y.__useDefaultFramebuffer=O===void 0};const dh=D.createFramebuffer();this.setRenderTarget=function(T,O=0,Y=0){C=T,E=O,w=Y;let q=!0,B=null,at=!1,gt=!1;if(T){const Mt=tt.get(T);if(Mt.__useDefaultFramebuffer!==void 0)lt.bindFramebuffer(D.FRAMEBUFFER,null),q=!1;else if(Mt.__webglFramebuffer===void 0)xt.setupRenderTarget(T);else if(Mt.__hasExternalTextures)xt.rebindTextures(T,tt.get(T.texture).__webglTexture,tt.get(T.depthTexture).__webglTexture);else if(T.depthBuffer){const Lt=T.depthTexture;if(Mt.__boundDepthTexture!==Lt){if(Lt!==null&&tt.has(Lt)&&(T.width!==Lt.image.width||T.height!==Lt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");xt.setupDepthRenderbuffer(T)}}const Bt=T.texture;(Bt.isData3DTexture||Bt.isDataArrayTexture||Bt.isCompressedArrayTexture)&&(gt=!0);const kt=tt.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Array.isArray(kt[O])?B=kt[O][Y]:B=kt[O],at=!0):T.samples>0&&xt.useMultisampledRTT(T)===!1?B=tt.get(T).__webglMultisampledFramebuffer:Array.isArray(kt)?B=kt[Y]:B=kt,P.copy(T.viewport),L.copy(T.scissor),F=T.scissorTest}else P.copy(et).multiplyScalar(G).floor(),L.copy(vt).multiplyScalar(G).floor(),F=qt;if(Y!==0&&(B=dh),lt.bindFramebuffer(D.FRAMEBUFFER,B)&&q&&lt.drawBuffers(T,B),lt.viewport(P),lt.scissor(L),lt.setScissorTest(F),at){const Mt=tt.get(T.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_CUBE_MAP_POSITIVE_X+O,Mt.__webglTexture,Y)}else if(gt){const Mt=O;for(let Bt=0;Bt<T.textures.length;Bt++){const kt=tt.get(T.textures[Bt]);D.framebufferTextureLayer(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0+Bt,kt.__webglTexture,Y,Mt)}}else if(T!==null&&Y!==0){const Mt=tt.get(T.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,Mt.__webglTexture,Y)}_=-1},this.readRenderTargetPixels=function(T,O,Y,q,B,at,gt,wt=0){if(!(T&&T.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Mt=tt.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&gt!==void 0&&(Mt=Mt[gt]),Mt){lt.bindFramebuffer(D.FRAMEBUFFER,Mt);try{const Bt=T.textures[wt],kt=Bt.format,Lt=Bt.type;if(!ot.textureFormatReadable(kt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ot.textureTypeReadable(Lt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}O>=0&&O<=T.width-q&&Y>=0&&Y<=T.height-B&&(T.textures.length>1&&D.readBuffer(D.COLOR_ATTACHMENT0+wt),D.readPixels(O,Y,q,B,At.convert(kt),At.convert(Lt),at))}finally{const Bt=C!==null?tt.get(C).__webglFramebuffer:null;lt.bindFramebuffer(D.FRAMEBUFFER,Bt)}}},this.readRenderTargetPixelsAsync=async function(T,O,Y,q,B,at,gt,wt=0){if(!(T&&T.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Mt=tt.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&gt!==void 0&&(Mt=Mt[gt]),Mt)if(O>=0&&O<=T.width-q&&Y>=0&&Y<=T.height-B){lt.bindFramebuffer(D.FRAMEBUFFER,Mt);const Bt=T.textures[wt],kt=Bt.format,Lt=Bt.type;if(!ot.textureFormatReadable(kt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ot.textureTypeReadable(Lt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Jt=D.createBuffer();D.bindBuffer(D.PIXEL_PACK_BUFFER,Jt),D.bufferData(D.PIXEL_PACK_BUFFER,at.byteLength,D.STREAM_READ),T.textures.length>1&&D.readBuffer(D.COLOR_ATTACHMENT0+wt),D.readPixels(O,Y,q,B,At.convert(kt),At.convert(Lt),0);const oe=C!==null?tt.get(C).__webglFramebuffer:null;lt.bindFramebuffer(D.FRAMEBUFFER,oe);const _e=D.fenceSync(D.SYNC_GPU_COMMANDS_COMPLETE,0);return D.flush(),await Mu(D,_e,4),D.bindBuffer(D.PIXEL_PACK_BUFFER,Jt),D.getBufferSubData(D.PIXEL_PACK_BUFFER,0,at),D.deleteBuffer(Jt),D.deleteSync(_e),at}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(T,O=null,Y=0){const q=Math.pow(2,-Y),B=Math.floor(T.image.width*q),at=Math.floor(T.image.height*q),gt=O!==null?O.x:0,wt=O!==null?O.y:0;xt.setTexture2D(T,0),D.copyTexSubImage2D(D.TEXTURE_2D,Y,0,0,gt,wt,B,at),lt.unbindTexture()};const ph=D.createFramebuffer(),mh=D.createFramebuffer();this.copyTextureToTexture=function(T,O,Y=null,q=null,B=0,at=null){at===null&&(B!==0?(br("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),at=B,B=0):at=0);let gt,wt,Mt,Bt,kt,Lt,Jt,oe,_e;const de=T.isCompressedTexture?T.mipmaps[at]:T.image;if(Y!==null)gt=Y.max.x-Y.min.x,wt=Y.max.y-Y.min.y,Mt=Y.isBox3?Y.max.z-Y.min.z:1,Bt=Y.min.x,kt=Y.min.y,Lt=Y.isBox3?Y.min.z:0;else{const Ze=Math.pow(2,-B);gt=Math.floor(de.width*Ze),wt=Math.floor(de.height*Ze),T.isDataArrayTexture?Mt=de.depth:T.isData3DTexture?Mt=Math.floor(de.depth*Ze):Mt=1,Bt=0,kt=0,Lt=0}q!==null?(Jt=q.x,oe=q.y,_e=q.z):(Jt=0,oe=0,_e=0);const ue=At.convert(O.format),Nt=At.convert(O.type);let pe;O.isData3DTexture?(xt.setTexture3D(O,0),pe=D.TEXTURE_3D):O.isDataArrayTexture||O.isCompressedArrayTexture?(xt.setTexture2DArray(O,0),pe=D.TEXTURE_2D_ARRAY):(xt.setTexture2D(O,0),pe=D.TEXTURE_2D),D.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,O.flipY),D.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,O.premultiplyAlpha),D.pixelStorei(D.UNPACK_ALIGNMENT,O.unpackAlignment);const ne=D.getParameter(D.UNPACK_ROW_LENGTH),Xe=D.getParameter(D.UNPACK_IMAGE_HEIGHT),Ai=D.getParameter(D.UNPACK_SKIP_PIXELS),Ye=D.getParameter(D.UNPACK_SKIP_ROWS),rr=D.getParameter(D.UNPACK_SKIP_IMAGES);D.pixelStorei(D.UNPACK_ROW_LENGTH,de.width),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,de.height),D.pixelStorei(D.UNPACK_SKIP_PIXELS,Bt),D.pixelStorei(D.UNPACK_SKIP_ROWS,kt),D.pixelStorei(D.UNPACK_SKIP_IMAGES,Lt);const me=T.isDataArrayTexture||T.isData3DTexture,Ke=O.isDataArrayTexture||O.isData3DTexture;if(T.isDepthTexture){const Ze=tt.get(T),Ne=tt.get(O),He=tt.get(Ze.__renderTarget),Hs=tt.get(Ne.__renderTarget);lt.bindFramebuffer(D.READ_FRAMEBUFFER,He.__webglFramebuffer),lt.bindFramebuffer(D.DRAW_FRAMEBUFFER,Hs.__webglFramebuffer);for(let ri=0;ri<Mt;ri++)me&&(D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,tt.get(T).__webglTexture,B,Lt+ri),D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,tt.get(O).__webglTexture,at,_e+ri)),D.blitFramebuffer(Bt,kt,gt,wt,Jt,oe,gt,wt,D.DEPTH_BUFFER_BIT,D.NEAREST);lt.bindFramebuffer(D.READ_FRAMEBUFFER,null),lt.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else if(B!==0||T.isRenderTargetTexture||tt.has(T)){const Ze=tt.get(T),Ne=tt.get(O);lt.bindFramebuffer(D.READ_FRAMEBUFFER,ph),lt.bindFramebuffer(D.DRAW_FRAMEBUFFER,mh);for(let He=0;He<Mt;He++)me?D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,Ze.__webglTexture,B,Lt+He):D.framebufferTexture2D(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,Ze.__webglTexture,B),Ke?D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,Ne.__webglTexture,at,_e+He):D.framebufferTexture2D(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,Ne.__webglTexture,at),B!==0?D.blitFramebuffer(Bt,kt,gt,wt,Jt,oe,gt,wt,D.COLOR_BUFFER_BIT,D.NEAREST):Ke?D.copyTexSubImage3D(pe,at,Jt,oe,_e+He,Bt,kt,gt,wt):D.copyTexSubImage2D(pe,at,Jt,oe,Bt,kt,gt,wt);lt.bindFramebuffer(D.READ_FRAMEBUFFER,null),lt.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else Ke?T.isDataTexture||T.isData3DTexture?D.texSubImage3D(pe,at,Jt,oe,_e,gt,wt,Mt,ue,Nt,de.data):O.isCompressedArrayTexture?D.compressedTexSubImage3D(pe,at,Jt,oe,_e,gt,wt,Mt,ue,de.data):D.texSubImage3D(pe,at,Jt,oe,_e,gt,wt,Mt,ue,Nt,de):T.isDataTexture?D.texSubImage2D(D.TEXTURE_2D,at,Jt,oe,gt,wt,ue,Nt,de.data):T.isCompressedTexture?D.compressedTexSubImage2D(D.TEXTURE_2D,at,Jt,oe,de.width,de.height,ue,de.data):D.texSubImage2D(D.TEXTURE_2D,at,Jt,oe,gt,wt,ue,Nt,de);D.pixelStorei(D.UNPACK_ROW_LENGTH,ne),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,Xe),D.pixelStorei(D.UNPACK_SKIP_PIXELS,Ai),D.pixelStorei(D.UNPACK_SKIP_ROWS,Ye),D.pixelStorei(D.UNPACK_SKIP_IMAGES,rr),at===0&&O.generateMipmaps&&D.generateMipmap(pe),lt.unbindTexture()},this.initRenderTarget=function(T){tt.get(T).__webglFramebuffer===void 0&&xt.setupRenderTarget(T)},this.initTexture=function(T){T.isCubeTexture?xt.setTextureCube(T,0):T.isData3DTexture?xt.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?xt.setTexture2DArray(T,0):xt.setTexture2D(T,0),lt.unbindTexture()},this.resetState=function(){E=0,w=0,C=null,lt.reset(),ft.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Mn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=ie._getDrawingBufferColorSpace(t),e.unpackColorSpace=ie._getUnpackColorSpace()}}const Ql={type:"change"},Bo={type:"start"},Xc={type:"end"},ds=new Ir,tc=new Xn,Gg=Math.cos(70*Pt.DEG2RAD),Te=new U,Ge=2*Math.PI,ce={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},va=1e-6;class Vg extends rf{constructor(t,e=null){super(t,e),this.state=ce.NONE,this.target=new U,this.cursor=new U,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:$i.ROTATE,MIDDLE:$i.DOLLY,RIGHT:$i.PAN},this.touches={ONE:Yi.ROTATE,TWO:Yi.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new U,this._lastQuaternion=new ei,this._lastTargetPosition=new U,this._quat=new ei().setFromUnitVectors(t.up,new U(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new wl,this._sphericalDelta=new wl,this._scale=1,this._panOffset=new U,this._rotateStart=new Ot,this._rotateEnd=new Ot,this._rotateDelta=new Ot,this._panStart=new Ot,this._panEnd=new Ot,this._panDelta=new Ot,this._dollyStart=new Ot,this._dollyEnd=new Ot,this._dollyDelta=new Ot,this._dollyDirection=new U,this._mouse=new Ot,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=Xg.bind(this),this._onPointerDown=Wg.bind(this),this._onPointerUp=Yg.bind(this),this._onContextMenu=Qg.bind(this),this._onMouseWheel=jg.bind(this),this._onKeyDown=Kg.bind(this),this._onTouchStart=Zg.bind(this),this._onTouchMove=Jg.bind(this),this._onMouseDown=qg.bind(this),this._onMouseMove=$g.bind(this),this._interceptControlDown=t_.bind(this),this._interceptControlUp=e_.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}connect(t){super.connect(t),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(t){t.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=t}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(Ql),this.update(),this.state=ce.NONE}update(t=null){const e=this.object.position;Te.copy(e).sub(this.target),Te.applyQuaternion(this._quat),this._spherical.setFromVector3(Te),this.autoRotate&&this.state===ce.NONE&&this._rotateLeft(this._getAutoRotationAngle(t)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let i=this.minAzimuthAngle,r=this.maxAzimuthAngle;isFinite(i)&&isFinite(r)&&(i<-Math.PI?i+=Ge:i>Math.PI&&(i-=Ge),r<-Math.PI?r+=Ge:r>Math.PI&&(r-=Ge),i<=r?this._spherical.theta=Math.max(i,Math.min(r,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(i+r)/2?Math.max(i,this._spherical.theta):Math.min(r,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let s=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const a=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),s=a!=this._spherical.radius}if(Te.setFromSpherical(this._spherical),Te.applyQuaternion(this._quatInverse),e.copy(this.target).add(Te),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let a=null;if(this.object.isPerspectiveCamera){const o=Te.length();a=this._clampDistance(o*this._scale);const c=o-a;this.object.position.addScaledVector(this._dollyDirection,c),this.object.updateMatrixWorld(),s=!!c}else if(this.object.isOrthographicCamera){const o=new U(this._mouse.x,this._mouse.y,0);o.unproject(this.object);const c=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),s=c!==this.object.zoom;const l=new U(this._mouse.x,this._mouse.y,0);l.unproject(this.object),this.object.position.sub(l).add(o),this.object.updateMatrixWorld(),a=Te.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;a!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(a).add(this.object.position):(ds.origin.copy(this.object.position),ds.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(ds.direction))<Gg?this.object.lookAt(this.target):(tc.setFromNormalAndCoplanarPoint(this.object.up,this.target),ds.intersectPlane(tc,this.target))))}else if(this.object.isOrthographicCamera){const a=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),a!==this.object.zoom&&(this.object.updateProjectionMatrix(),s=!0)}return this._scale=1,this._performCursorZoom=!1,s||this._lastPosition.distanceToSquared(this.object.position)>va||8*(1-this._lastQuaternion.dot(this.object.quaternion))>va||this._lastTargetPosition.distanceToSquared(this.target)>va?(this.dispatchEvent(Ql),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(t){return t!==null?Ge/60*this.autoRotateSpeed*t:Ge/60/60*this.autoRotateSpeed}_getZoomScale(t){const e=Math.abs(t*.01);return Math.pow(.95,this.zoomSpeed*e)}_rotateLeft(t){this._sphericalDelta.theta-=t}_rotateUp(t){this._sphericalDelta.phi-=t}_panLeft(t,e){Te.setFromMatrixColumn(e,0),Te.multiplyScalar(-t),this._panOffset.add(Te)}_panUp(t,e){this.screenSpacePanning===!0?Te.setFromMatrixColumn(e,1):(Te.setFromMatrixColumn(e,0),Te.crossVectors(this.object.up,Te)),Te.multiplyScalar(t),this._panOffset.add(Te)}_pan(t,e){const i=this.domElement;if(this.object.isPerspectiveCamera){const r=this.object.position;Te.copy(r).sub(this.target);let s=Te.length();s*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*t*s/i.clientHeight,this.object.matrix),this._panUp(2*e*s/i.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(t*(this.object.right-this.object.left)/this.object.zoom/i.clientWidth,this.object.matrix),this._panUp(e*(this.object.top-this.object.bottom)/this.object.zoom/i.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(t,e){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const i=this.domElement.getBoundingClientRect(),r=t-i.left,s=e-i.top,a=i.width,o=i.height;this._mouse.x=r/a*2-1,this._mouse.y=-(s/o)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(t){return Math.max(this.minDistance,Math.min(this.maxDistance,t))}_handleMouseDownRotate(t){this._rotateStart.set(t.clientX,t.clientY)}_handleMouseDownDolly(t){this._updateZoomParameters(t.clientX,t.clientX),this._dollyStart.set(t.clientX,t.clientY)}_handleMouseDownPan(t){this._panStart.set(t.clientX,t.clientY)}_handleMouseMoveRotate(t){this._rotateEnd.set(t.clientX,t.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const e=this.domElement;this._rotateLeft(Ge*this._rotateDelta.x/e.clientHeight),this._rotateUp(Ge*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(t){this._dollyEnd.set(t.clientX,t.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(t){this._panEnd.set(t.clientX,t.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(t){this._updateZoomParameters(t.clientX,t.clientY),t.deltaY<0?this._dollyIn(this._getZoomScale(t.deltaY)):t.deltaY>0&&this._dollyOut(this._getZoomScale(t.deltaY)),this.update()}_handleKeyDown(t){let e=!1;switch(t.code){case this.keys.UP:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(Ge*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),e=!0;break;case this.keys.BOTTOM:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(-Ge*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),e=!0;break;case this.keys.LEFT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(Ge*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),e=!0;break;case this.keys.RIGHT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(-Ge*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),e=!0;break}e&&(t.preventDefault(),this.update())}_handleTouchStartRotate(t){if(this._pointers.length===1)this._rotateStart.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),i=.5*(t.pageX+e.x),r=.5*(t.pageY+e.y);this._rotateStart.set(i,r)}}_handleTouchStartPan(t){if(this._pointers.length===1)this._panStart.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),i=.5*(t.pageX+e.x),r=.5*(t.pageY+e.y);this._panStart.set(i,r)}}_handleTouchStartDolly(t){const e=this._getSecondPointerPosition(t),i=t.pageX-e.x,r=t.pageY-e.y,s=Math.sqrt(i*i+r*r);this._dollyStart.set(0,s)}_handleTouchStartDollyPan(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enablePan&&this._handleTouchStartPan(t)}_handleTouchStartDollyRotate(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enableRotate&&this._handleTouchStartRotate(t)}_handleTouchMoveRotate(t){if(this._pointers.length==1)this._rotateEnd.set(t.pageX,t.pageY);else{const i=this._getSecondPointerPosition(t),r=.5*(t.pageX+i.x),s=.5*(t.pageY+i.y);this._rotateEnd.set(r,s)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const e=this.domElement;this._rotateLeft(Ge*this._rotateDelta.x/e.clientHeight),this._rotateUp(Ge*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(t){if(this._pointers.length===1)this._panEnd.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),i=.5*(t.pageX+e.x),r=.5*(t.pageY+e.y);this._panEnd.set(i,r)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(t){const e=this._getSecondPointerPosition(t),i=t.pageX-e.x,r=t.pageY-e.y,s=Math.sqrt(i*i+r*r);this._dollyEnd.set(0,s),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const a=(t.pageX+e.x)*.5,o=(t.pageY+e.y)*.5;this._updateZoomParameters(a,o)}_handleTouchMoveDollyPan(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enablePan&&this._handleTouchMovePan(t)}_handleTouchMoveDollyRotate(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enableRotate&&this._handleTouchMoveRotate(t)}_addPointer(t){this._pointers.push(t.pointerId)}_removePointer(t){delete this._pointerPositions[t.pointerId];for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId){this._pointers.splice(e,1);return}}_isTrackingPointer(t){for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId)return!0;return!1}_trackPointer(t){let e=this._pointerPositions[t.pointerId];e===void 0&&(e=new Ot,this._pointerPositions[t.pointerId]=e),e.set(t.pageX,t.pageY)}_getSecondPointerPosition(t){const e=t.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[e]}_customWheelEvent(t){const e=t.deltaMode,i={clientX:t.clientX,clientY:t.clientY,deltaY:t.deltaY};switch(e){case 1:i.deltaY*=16;break;case 2:i.deltaY*=100;break}return t.ctrlKey&&!this._controlActive&&(i.deltaY*=10),i}}function Wg(n){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(n.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(n)&&(this._addPointer(n),n.pointerType==="touch"?this._onTouchStart(n):this._onMouseDown(n)))}function Xg(n){this.enabled!==!1&&(n.pointerType==="touch"?this._onTouchMove(n):this._onMouseMove(n))}function Yg(n){switch(this._removePointer(n),this._pointers.length){case 0:this.domElement.releasePointerCapture(n.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(Xc),this.state=ce.NONE;break;case 1:const t=this._pointers[0],e=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:e.x,pageY:e.y});break}}function qg(n){let t;switch(n.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case $i.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(n),this.state=ce.DOLLY;break;case $i.ROTATE:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=ce.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=ce.ROTATE}break;case $i.PAN:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=ce.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=ce.PAN}break;default:this.state=ce.NONE}this.state!==ce.NONE&&this.dispatchEvent(Bo)}function $g(n){switch(this.state){case ce.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(n);break;case ce.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(n);break;case ce.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(n);break}}function jg(n){this.enabled===!1||this.enableZoom===!1||this.state!==ce.NONE||(n.preventDefault(),this.dispatchEvent(Bo),this._handleMouseWheel(this._customWheelEvent(n)),this.dispatchEvent(Xc))}function Kg(n){this.enabled!==!1&&this._handleKeyDown(n)}function Zg(n){switch(this._trackPointer(n),this._pointers.length){case 1:switch(this.touches.ONE){case Yi.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(n),this.state=ce.TOUCH_ROTATE;break;case Yi.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(n),this.state=ce.TOUCH_PAN;break;default:this.state=ce.NONE}break;case 2:switch(this.touches.TWO){case Yi.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(n),this.state=ce.TOUCH_DOLLY_PAN;break;case Yi.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(n),this.state=ce.TOUCH_DOLLY_ROTATE;break;default:this.state=ce.NONE}break;default:this.state=ce.NONE}this.state!==ce.NONE&&this.dispatchEvent(Bo)}function Jg(n){switch(this._trackPointer(n),this.state){case ce.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(n),this.update();break;case ce.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(n),this.update();break;case ce.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(n),this.update();break;case ce.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(n),this.update();break;default:this.state=ce.NONE}}function Qg(n){this.enabled!==!1&&n.preventDefault()}function t_(n){n.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function e_(n){n.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}const ec=["一次偶然涨落，一组全新的自然法则。","这里的星光，以陌生的速度穿过真空。","引力写下结构，时间负责把它读完。","一个从未存在过，也不会再次出现的宇宙。","尘埃正在聚集，第一颗恒星即将点亮。"],nc=["赫利俄斯","弥涅耳瓦","伊奥","俄耳甫斯","忒弥斯","厄里倪厄斯","欧律狄刻","阿斯忒里亚"],mo=["棒旋星系","絮状螺旋星系","环状星系","椭圆星系","不规则星系"],ic=["赛里安共同体","洛珂蜂群","弧光联盟","静默者","澄海文明","铸星者","织光议会","塔乌林协约","奈落合众体","远潮群落","镜海联邦","巡星庭","赤纬公社","无昼同盟","尘环智群"],rc=[14221151,16743275,6928639,15174911,16762460,6481615,16747975,10920191,15899989,7595116,6215935,16770683,12815615,16737894,9484543],sc=[{until:55,name:"炽热大爆炸",description:"整个可观测区域同时处于高温、高密度状态；这不是物质从某个中心炸开。"},{until:145,name:"等离子体时代",description:"宇宙膨胀并冷却，原初核合成后，光子仍被自由电子频繁散射。"},{until:245,name:"宇宙黑暗时代",description:"38 万年后宇宙变得透明，但第一代恒星尚未点亮。"},{until:340,name:"宇宙黎明",description:"约 1～2 亿年后，第一代恒星与星系开始形成并推动再电离。"},{until:650,name:"恒星时代",description:"恒星、星系与重元素持续演化；生命与文明属于未证实的模型层。"},{until:845,name:"简并时代 · 假说",description:"若质子衰变等标准长期假说成立，恒星残骸绕核运行，并在近遇中逐个逃离或落入黑洞。"},{until:950,name:"黑洞时代 · 假说",description:"若霍金辐射的标准推断适用，孤立黑洞在极漫长时间中逐个蒸发。"},{until:1001,name:"暗时代 · 渐近",description:"宇宙继续膨胀，辐射红移与稀释，可用能量梯度趋近于零，而非发生一次全局终结。"}];function n_(n){const t=n?.cosmicFate;if(!t||t.type==="heat-death")return sc;const e=sc.slice(0,5);return t.type==="big-rip"?[...e,{until:850,name:"幽灵能量时代 · 假说",description:"暗能量密度随膨胀增长，宇宙在有限时间内加速趋向失稳。"},{until:1001,name:"大撕裂 · 条件结局",description:"在 w < -1 持续成立的假设下，局部引力与微观束缚将被逐层克服。"}]:t.type==="big-crunch"?[...e,{until:850,name:"膨胀反转 · 假说",description:"动态暗能量的有效势能跨过零点，哈勃参数逐步降低至零。"},{until:1001,name:"大坍缩 · 条件结局",description:"尺度因子反向演化，物质与辐射密度在有限时间内快速上升。"}]:[...e,{until:875,name:"亚稳真空 · 假说",description:"真空仍位于寿命未知的局部能量最低点，未发生可见跃迁。"},{until:1001,name:"真空衰变 · 条件结局",description:"随机量子隧穿产生低能真空泡，泡壁以近光速改写局部基态。"}]}function te(n){const t=Math.max(n(),1e-7),e=n();return Math.sqrt(-2*Math.log(t))*Math.cos(2*Math.PI*e)}function Vt(n,t,e){return t+n()*(e-t)}function Bn(n){return function(){let e=n+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}}const go=138e8,i_=145e8,Ma=.012,r_={lambda:{label:"宇宙学常数",description:"暗能量密度保持不变，加速膨胀持续"},quintessence:{label:"演化标量场",description:"暗能量状态方程随尺度因子缓慢演化"},phantom:{label:"幽灵暗能量",description:"有效状态方程低于 -1，暗能量密度随膨胀增长"},recollapsing:{label:"反转势能",description:"标量场势能在远未来跨过零点，膨胀最终停止"}},s_={"heat-death":{label:"渐近热寂",shortLabel:"热寂",description:"膨胀持续，可用能量梯度逐渐消失"},"big-rip":{label:"大撕裂",shortLabel:"大撕裂",description:"加速膨胀最终克服星系、恒星系与局部束缚"},"big-crunch":{label:"大坍缩",shortLabel:"大坍缩",description:"膨胀反转后，尺度因子在有限时间内回落"},"vacuum-decay":{label:"真空衰变",shortLabel:"真空衰变",description:"低能真空泡成核，泡壁以近光速扩张"}};function a_(n,t,e){return t+e*(1-n)/(1+n)}function o_({model:n,w0:t,wa:e,expansionRate:i,darkEnergyDensity:r,turnScale:s}){const a=Math.max(.06,1-r);let o=1,c=1,l=go,h=1;const f=[{ageYears:l,scaleFactor:o,expansionRatio:1,w:t}];for(let d=1;d<=2400;d++){const m=a_(o,t,e);c*=Math.exp(-3*(1+m)*Ma),o*=Math.exp(Ma);const g=n==="recollapsing"?.22*r*Math.pow(o/s,2.35):0,M=a/Math.pow(o,3)+r*c-g;if(M<=0)return{history:f,turnaroundYears:l,finalRateSquared:M};const p=Math.sqrt((h+M)*.5);l+=i_/i*Ma/Math.max(p,1e-12),h=M,d%80===0&&f.push({ageYears:l,scaleFactor:o,expansionRatio:Math.sqrt(M),w:m})}return{history:f,asymptoticYears:l,finalRateSquared:h}}function l_(n){const t=n();return t<.34?{model:"lambda",w0:-1,wa:0,turnScale:1/0}:t<.62?{model:"quintessence",w0:Vt(n,-.96,-.76),wa:Vt(n,-.1,.1),turnScale:1/0}:t<.82?{model:"phantom",w0:Vt(n,-1.22,-1.035),wa:Vt(n,.015,.14),turnScale:1/0}:{model:"recollapsing",w0:Vt(n,-.98,-.78),wa:Vt(n,-.08,.08),turnScale:Vt(n,3.2,11)}}function c_(n,t){const e=Bn(n+6029),i=l_(e),r=o_({...i,expansionRate:t.expansionRate,darkEnergyDensity:t.darkEnergyDensity});let s="heat-death",a=1/0;if(i.model==="phantom")s="big-rip",a=Math.max(go*1.05,r.asymptoticYears);else if(i.model==="recollapsing"){s="big-crunch";const M=Math.max(1e9,r.turnaroundYears-go);a=r.turnaroundYears+M*Vt(e,.78,1.08)}const o=e()<.16,c=o?Vt(e,10.55,92):1/0,l=10**Math.min(c,300),h=o&&l<a,f=h?"vacuum-decay":s,d=h?l:a,m=r_[i.model],g=s_[f];return{...i,modelLabel:m.label,modelDescription:m.description,expansionHistory:r.history,turnaroundYears:r.turnaroundYears||null,metastableVacuum:o,vacuumDecayExponent:c,type:f,label:g.label,shortLabel:g.shortLabel,description:g.description,outcomeYears:d,outcomeExponent:Number.isFinite(d)?Math.log10(d):1/0,onsetAt:f==="big-crunch"?790:f==="big-rip"?820:f==="vacuum-decay"?875:930}}function h_(n){return Number.isFinite(n.outcomeYears)?n.outcomeYears<1e12?`T+${(n.outcomeYears/1e8).toFixed(0)} 亿年`:`T+10^${n.outcomeExponent.toFixed(1)} 年`:"渐近 · 无有限终点"}function u_(n){return n.metastableVacuum?`亚稳态 · 假设寿命 10^${n.vacuumDecayExponent.toFixed(1)} 年`:"未设定可见衰变"}const f_=2100,Bs=(n,t,e)=>Math.max(t,Math.min(e,n)),ac=(n,t,e)=>{const i=Bs((n-t)/(e-t),0,1);return i*i*(3-2*i)};function Yc(n,t){const e=Math.log10(Math.max(138e8,n)),i=Math.log10(138e8),r=t?.cosmicFate;if(r&&Number.isFinite(r.outcomeYears)){if(n>=r.outcomeYears)return 1e3;const a=(e-i)/(r.outcomeExponent-i);return Bs(470+a*(r.onsetAt-470),470,r.onsetAt)}if(e<12)return 470+(e-i)/(12-i)*100;if(e<14)return 570+(e-12)/2*80;if(e<15)return 650+(e-14)*30;if(e<38)return 680+(e-15)/23*165;const s=t?.blackHoleEvaporationExponent||100;return e<s?845+(e-38)/(s-38)*105:950}function d_(n,t,e){const i=Bs(Number(n),0,1e3),r=qc(i,t),s=e.findIndex(o=>i<o.until),a=s<0?e.length-1:s;return{position:i,label:r,eraIndex:a,era:e[a],galaxyIdentityOpacity:ac(i,245,325)*(1-ac(i,820,900))}}function p_(n){const e=1139.904761904762/f_;return n<145||n>=930?e*.42:e*1.25}function m_({position:n,label:t,universe:e,activeEvent:i,activeRelationship:r,ascendedSpecies:s,activeSpecies:a,civilizationData:o}){if(i){const l=n>=i.impactAt,h=l?`；${i.outcome}`:"";return{key:`${i.id}-${l?"aftermath":"forming"}`,time:t,text:`${i.label}：${i.message}${h}`}}const c=e?.cosmicFate;if(c&&c.type!=="heat-death"&&n>=c.onsetAt){if(c.type==="vacuum-decay"){const h=n>=985;return{key:`fate-vacuum-${h?"terminal":"bubble"}`,time:t,text:h?"低能真空泡已经穿过可观测区域，原有粒子与相互作用不再适用":"量子隧穿产生了低能真空泡，泡壁以接近光速向外扩张"}}if(c.type==="big-rip"){const h=n>=985;return{key:`fate-rip-${h?"terminal":"unbinding"}`,time:t,text:h?"膨胀率在有限时间内发散，局部束缚结构相继失效":"幽灵暗能量密度持续上升，星系团与星系开始逐层解束缚"}}const l=n>=985;return{key:`fate-crunch-${l?"terminal":"turnaround"}`,time:t,text:l?"坍缩使物质与辐射密度急剧升高，经典演化在高曲率阶段失效":"宇宙膨胀已经停止，大尺度距离开始反向缩小"}}if(r){const l=o[r.speciesA],h=o[r.speciesB],f=r.relationship==="conflict"?`${l.name} 与 ${h.name} 的边界冲突正在削减双方疆域`:`${l.name} 与 ${h.name} 建立友好共存区，共享资源与航路`;return{key:`relation-${r.relationship}-${r.speciesA}-${r.speciesB}`,time:t,text:f}}return s>0?{key:`ascended-${s}`,time:t,text:`${s} 个种群已转化为高维生命，脱离恒星与黑洞的普通物质演化`}:n<55?{key:"bang",time:"T+0",text:"整个可观测区域处于超高温、高密度状态，空间本身在膨胀"}:n<145?{key:"plasma",time:t,text:"光子在等离子体中不断散射，宇宙随膨胀持续冷却"}:n<245?{key:"dark",time:t,text:"复合后宇宙变得透明，但尚没有恒星光"}:n<340?{key:"stars",time:t,text:"第一代恒星与星系点亮，再电离逐渐开始"}:a>0?{key:`life-${a}`,time:t,text:`${a} 个主要文明种群正在跨越恒星系扩张`}:n<430?{key:"chemistry",time:t,text:"重元素丰度上升，宜居行星开始形成"}:n<Math.min(...o.map(l=>l.birth),620)?{key:"waiting-life",time:t,text:"宜居世界正在积累复杂化学反应，智慧生命尚未出现"}:n<620?{key:"silence",time:t,text:"文明信号已经沉寂，只剩无人维护的轨道遗迹"}:n<650?{key:"last-stars",time:t,text:"恒星形成早已停止，最后的低质量红矮星仍在极缓慢地消耗燃料"}:n<710?{key:"degenerate",time:t,text:"最后一批红矮星熄灭，恒星残骸仍被星系引力束缚并长期绕核运行"}:n<845?{key:"evaporation",time:t,text:"长期引力近遇持续重分配能量，少数残骸逐个逃离，极少数落向星系中心"}:n<950?{key:"holes",time:t,text:"黑洞通过霍金辐射缓慢蒸发"}:{key:"heatdeath",time:t,text:"最后的黑洞已经蒸发，残余光子持续红移并稀释，可用能量梯度趋近于零"}}function qc(n,t){const e=(s,a,o)=>10**(Math.log10(s)+(Math.log10(a)-Math.log10(s))*o),i=s=>{if(s<1){const a=s*31557600;return a<3600?`${Math.round(a/60)} 分钟`:a<86400?`${(a/3600).toFixed(1)} 小时`:`${(a/86400).toFixed(1)} 天`}return s<1e4?`${Math.max(1,Math.round(s))} 年`:s<1e8?`${(s/1e4).toFixed(s<1e6?1:0)} 万年`:s<1e12?`${(s/1e8).toFixed(s<1e9?2:1)} 亿年`:`10^${Math.log10(s).toFixed(1)} 年`};if(n<18)return`T+${Math.max(.001,e(.001,1,n/18)).toFixed(3)} 秒`;if(n<55)return`T+${Math.max(1,Math.round(e(1,180,(n-18)/37)))} 秒`;if(n<145)return`T+${i(e(180/31557600,38e4,(n-55)/90))}`;if(n<245)return`T+${i(e(38e4,18e7,(n-145)/100))}`;if(n<340)return`T+${i(e(18e7,1e9,(n-245)/95))}`;if(n<470)return`T+${i(e(1e9,138e8,(n-340)/130))}`;const r=t?.cosmicFate;if(r&&Number.isFinite(r.outcomeYears)){if(n>=999)return r.label;const s=Bs((n-470)/(r.onsetAt-470),0,1),a=e(138e8,r.outcomeYears,s);return`T+${i(a)}`}return n<570?`T+${i(e(138e8,1e12,(n-470)/100))}`:n<650?`T+10^${(12+(n-570)/80*2).toFixed(1)} 年`:n<680?`T+10^${(14+(n-650)/30).toFixed(1)} 年`:n<845?`T+10^${Math.round(15+(n-680)/165*23)} 年`:n<950?`T+10^${Math.round(38+(n-845)/105*(t.blackHoleEvaporationExponent-38))} 年`:n<999?`T+10^${t.blackHoleEvaporationExponent} 年以后`:"趋近热寂"}function g_(n){const t=Math.round(n*360);return`${t<190?"青白":t<225?"蓝白":t<250?"靛蓝":"紫白"} · ${t}°`}function __(n,t){return n===2?"主环 + 碎环":n===3?"无旋臂":n===4?"不规则":`${t} 条`}function x_(n){const t=n*100;return t<1e-4?"< 0.0001%":t<.01?`${t.toFixed(4)}%`:t<1?`${t.toFixed(2)}%`:`${t.toFixed(1)}%`}function v_(n){return n===0?"尚未出现":`${new Intl.NumberFormat("zh-CN").format(n)} 个`}function $c(n){const t=n.lastStarDeathExponent??n.stellarFormationEndExponent;return Pt.clamp(Yc(10**t,n),478,1e3)}function M_(n){return n>=1?`${n.toFixed(1)} 万亿颗`:`${Math.round(n*1e4)} 亿颗`}function jc(n=Math.floor(Math.random()*9e5)+1e5){const t=Bn(n),e=Vt(t,.38,1.84),i=Vt(t,.52,1.76),r=Vt(t,.72,1.28),s=Vt(t,.82,1.18),a=Vt(t,.65,1.45),o=Vt(t,.48,.82),c=Vt(t,.55,1.75),l=Vt(t,1.9,4.4),h=Math.exp(-Math.pow((r-1)/.17,2)-Math.pow((s-1)/.14,2)),f=Pt.clamp(i*c/Math.pow(a,.72),.12,2.8),d=Math.max(2,Math.round(118*h*Vt(t,.82,1.08))),m=Pt.clamp(Vt(t,.35,3.2)*f,.08,7.2),g=Pt.clamp(12.5-(o-.68)*1.35-(a-1)*.42,11.8,13.25),M=Pt.clamp(g+Vt(t,.68,1.08),12.8,14.25),p=h*Pt.clamp(1-Math.abs(l-2.725)/3.5,.12,1),u=Math.pow(t(),4)*.08*p,b=Math.floor(Vt(t,5,16)),y=Math.max(b,Math.floor(m*1e5*u*Vt(t,.02,.7))),v=Math.round(Math.pow(10,M-8)/10)*10,A=Math.floor(Vt(t,3,7)),E=n%mo.length,w=[.96,.92,.72,.99,.34][E],C=t()<w,_=C&&t()<[.1,.07,.05,.045,.025][E],x=Math.floor(Vt(t,97,103)),P=Vt(t,.48,.76),L=c_(n,{expansionRate:a,darkEnergyDensity:o});return{seed:n,speed:e,gravity:i,fineStructure:r,massRatio:s,expansionRate:a,darkEnergyDensity:o,primordialFluctuation:c,cmbTemperature:l,chemistryStability:h,structureEfficiency:f,stellarFormationEndExponent:g,lastStarDeathExponent:M,elements:d,stars:m,lifeProbability:u,civilizations:y,speciesCount:b,lifetime:v,blackHoleEvaporationExponent:x,armCount:A,galaxyType:E,hasCentralBlackHole:C,activeNucleus:_,hue:P,cosmicFate:L}}let dr=null;function y_(){const n=document.createElement("canvas");n.width=n.height=256;const t=n.getContext("2d"),e=t.createRadialGradient(128,128,82,128,128,128);e.addColorStop(0,"rgba(255,255,255,0)"),e.addColorStop(.72,"rgba(255,255,255,0)"),e.addColorStop(.86,"rgba(255,255,255,.8)"),e.addColorStop(.91,"rgba(255,255,255,.18)"),e.addColorStop(1,"rgba(255,255,255,0)"),t.fillStyle=e,t.fillRect(0,0,256,256);const i=new Us(n);return i.colorSpace=De,i}function en(){const n=document.createElement("canvas");n.width=n.height=128;const t=n.getContext("2d"),e=t.createRadialGradient(64,64,0,64,64,64);e.addColorStop(0,"rgba(255,255,255,1)"),e.addColorStop(.08,"rgba(255,230,170,.85)"),e.addColorStop(.35,"rgba(255,190,100,.22)"),e.addColorStop(1,"rgba(0,0,0,0)"),t.fillStyle=e,t.fillRect(0,0,128,128);const i=new Us(n);return i.colorSpace=De,i}function nn(){if(dr)return dr;const n=document.createElement("canvas");n.width=n.height=64;const t=n.getContext("2d"),e=t.createRadialGradient(32,32,0,32,32,32);return e.addColorStop(0,"rgba(255,255,255,1)"),e.addColorStop(.22,"rgba(255,255,255,.95)"),e.addColorStop(.5,"rgba(255,255,255,.35)"),e.addColorStop(1,"rgba(255,255,255,0)"),t.fillStyle=e,t.fillRect(0,0,64,64),dr=new Us(n),dr.colorSpace=De,dr}let ps=null,ms=null,gs=null;function zo(n){const t=document.createElement("canvas");t.width=1024,t.height=1024;const e=t.getContext("2d");n(e,t.width);const i=new Us(t);return i.colorSpace=De,i.minFilter=jn,i.magFilter=dn,i}function un(n,t,e,i,r,s,a=0,o=Math.PI*2){n.beginPath(),n.ellipse(t,e,i,r,s,a,o)}function oc(){return ps||(ps=zo((n,t)=>{const e=t/2,i=n.createLinearGradient(96,e,t-96,e);i.addColorStop(0,"rgba(255,255,255,0)"),i.addColorStop(.12,"rgba(255,221,174,.18)"),i.addColorStop(.35,"rgba(255,245,222,.76)"),i.addColorStop(.5,"rgba(255,255,255,1)"),i.addColorStop(.66,"rgba(255,232,199,.82)"),i.addColorStop(.88,"rgba(255,179,126,.2)"),i.addColorStop(1,"rgba(255,255,255,0)"),n.save(),n.globalCompositeOperation="lighter",n.filter="blur(34px)",n.strokeStyle=i,n.lineCap="round",n.lineWidth=62,un(n,e,e+7,360,74,-.1),n.stroke(),n.filter="blur(15px)",n.lineWidth=22,un(n,e,e+4,325,62,-.1),n.stroke(),n.restore(),n.save(),n.globalCompositeOperation="lighter",n.lineCap="round",n.strokeStyle=i,n.filter="blur(13px)",n.lineWidth=34,un(n,e-2,e+3,118,164,-.08,Math.PI*1.03,Math.PI*1.98),n.stroke(),n.lineWidth=25,un(n,e+2,e+4,121,161,-.08,.03,Math.PI*.97),n.stroke(),n.filter="none",n.lineWidth=7,n.strokeStyle="rgba(255,250,232,.92)",un(n,e-2,e+3,116,160,-.08,Math.PI*1.05,Math.PI*1.95),n.stroke(),n.strokeStyle="rgba(255,221,180,.72)",un(n,e+2,e+4,119,158,-.08,.07,Math.PI*.93),n.stroke(),n.restore(),n.save(),n.globalCompositeOperation="lighter",n.lineCap="round";for(let a=0;a<12;a++){const o=164+a*16,c=28+a*3.25,l=.2-a*.011;n.strokeStyle=`rgba(255,238,210,${l})`,n.lineWidth=a<4?3.5:2,un(n,e,e+6,o,c,-.1),n.stroke()}n.restore();const r=n.createRadialGradient(e-18,e-20,6,e,e,105);r.addColorStop(0,"rgba(0,0,0,1)"),r.addColorStop(.78,"rgba(0,0,0,1)"),r.addColorStop(.94,"rgba(1,1,2,.995)"),r.addColorStop(1,"rgba(0,0,0,0)"),n.fillStyle=r,n.fillRect(e-112,e-112,224,224),n.save(),n.globalCompositeOperation="lighter",n.filter="blur(12px)",n.strokeStyle="rgba(255,244,220,.86)",n.lineWidth=24,un(n,e,e,103,106,-.08),n.stroke(),n.filter="none",n.strokeStyle="rgba(255,255,247,.98)",n.lineWidth=6,un(n,e,e,102,105,-.08),n.stroke();const s=n.createLinearGradient(130,e+58,t-120,e-32);s.addColorStop(0,"rgba(255,184,126,0)"),s.addColorStop(.2,"rgba(255,207,158,.55)"),s.addColorStop(.43,"rgba(255,251,231,.98)"),s.addColorStop(.66,"rgba(255,244,219,.94)"),s.addColorStop(.9,"rgba(255,166,112,.34)"),s.addColorStop(1,"rgba(255,166,112,0)"),n.strokeStyle=s,n.lineCap="round",n.filter="blur(11px)",n.lineWidth=28,n.beginPath(),n.moveTo(132,e+103),n.bezierCurveTo(318,e+83,638,e-54,908,e-90),n.stroke(),n.filter="none",n.lineWidth=9,n.stroke(),n.restore()}),ps)}function S_(){return ms||(ms=zo((n,t)=>{const e=t/2;n.globalCompositeOperation="lighter",n.lineCap="round";for(let i=0;i<18;i++){const r=i/18*Math.PI*2,s=108+i%3*17,a=.11+i%4*.035;n.strokeStyle=`rgba(255,255,245,${.24+i%5*.07})`,n.lineWidth=2+i%3,un(n,e,e,s,s*.9,-.08,r,r+a),n.stroke()}n.filter="blur(9px)",n.strokeStyle="rgba(255,238,209,.42)",n.lineWidth=10,un(n,e,e,118,111,-.08,.14,Math.PI*.72),n.stroke()}),ms)}function E_(){return gs||(gs=zo((n,t)=>{const e=t/2,i=n.createRadialGradient(e,e,44,e,e,430);i.addColorStop(0,"rgba(255,250,232,.7)"),i.addColorStop(.18,"rgba(255,226,190,.38)"),i.addColorStop(.42,"rgba(255,180,119,.1)"),i.addColorStop(.72,"rgba(255,139,84,.025)"),i.addColorStop(1,"rgba(255,255,255,0)"),n.fillStyle=i,n.fillRect(0,0,t,t)}),gs)}function Kc({color:n=16762255,tilt:t=0,phase:e=0,visualScale:i=1,intensity:r=1}={}){const s=new ze,a=new ye(new xe({map:E_(),color:n,transparent:!0,opacity:0,depthWrite:!1,blending:Qt}));a.scale.setScalar(2.65*i);const o=new ye(new xe({map:oc(),color:n,transparent:!0,opacity:0,alphaTest:.006,depthWrite:!1,blending:_i,rotation:t}));o.scale.setScalar(2.2*i);const c=new ye(new xe({map:S_(),color:n,transparent:!0,opacity:0,depthWrite:!1,blending:Qt,rotation:t}));c.scale.setScalar(2.2*i);const l=new ye(new xe({map:oc(),color:n,transparent:!0,opacity:0,alphaTest:.006,depthWrite:!1,blending:Qt,rotation:t}));l.scale.setScalar(2.2*i);const h=new sn(new Fs(.235*i,32,20),new Ur({color:0}));return h.renderOrder=2,a.renderOrder=1,o.renderOrder=3,l.renderOrder=4,c.renderOrder=5,s.add(a,h,o,l,c),s.userData.blackHoleVisual={halo:a,horizon:h,accretion:o,bloom:l,flow:c,intensity:0,baseTilt:t,phase:e,visualScale:i},Zc(s,r),s}function Zc(n,t){const e=n.userData.blackHoleVisual;if(!e)return;const i=Pt.clamp(t,0,1.4);e.intensity=i,e.accretion.material.opacity=Math.min(1,i*.92),e.bloom.material.opacity=Math.min(.34,i*.27),e.flow.material.opacity=Math.min(.82,i*.5),e.halo.material.opacity=Math.min(.7,i*.42)}function Es(n,t,e=1){const i=n.userData.blackHoleVisual;if(!i||i.intensity<=0)return;const r=t*.001,s=1+Math.sin(r*.72+i.phase)*.035,a=.82+Math.sin(r*1.7+i.phase*1.9)*.18;i.halo.scale.setScalar(2.65*i.visualScale*s),i.halo.material.opacity=Math.min(.7,i.intensity*(.36+a*.09)),i.bloom.material.opacity=Math.min(.36,i.intensity*(.22+a*.07)),i.flow.material.rotation=i.baseTilt+e*Math.sin(r*.44+i.phase)*.055,i.flow.material.opacity=Math.min(.82,i.intensity*(.38+a*.15))}const ya=220,Sa=340;function b_(n){if(n<=ya)return 0;const t=Sa-ya;if(n<Sa){const e=(n-ya)/t;return t*(e**3-.5*e**4)}return t*.5+n-Sa}function Jc(n,t){return b_(n)*t}function T_(n,{civilizationSimulation:t,civilizationData:e,civilizationGroups:i}){if(!n||!t)return;const r=new Uint16Array(e.length);n.owners.forEach((s,a)=>{if(s<0)return;const o=r[s]++;e[s].hostRemnantIndices[o]=t.habitatRemnantIndices[a]}),e.forEach((s,a)=>{s.displayCount=r[a],i[a].geometry.setDrawRange(0,r[a])})}function A_({stellarRemnants:n,remnantDynamics:t,cosmicPosition:e,civilizationData:i,civilizationGroups:r}){if(!n)return;const s=n.geometry.attributes.position.array,a=new U,o=(c,l,h,f,d)=>{const m=c*3,g=Math.min(e,t.escapeAt[c]),M=Jc(g,t.orbitRates[c]),p=Math.cos(M),u=Math.sin(M),b=t.axes[m],y=t.axes[m+1],v=t.axes[m+2],A=b*l+y*h+v*f;d.set(l*p+(y*f-v*h)*u+b*A*(1-p),h*p+(v*l-b*f)*u+y*A*(1-p),f*p+(b*h-y*l)*u+v*A*(1-p))};i.forEach((c,l)=>{const h=r[l];if(!h)return;const f=h.geometry.attributes.position.array;for(let m=0;m<c.displayCount;m++){const g=c.hostRemnantIndices[m],M=g*3,p=m*3;if(o(g,c.hostOffsets[p],c.hostOffsets[p+1],c.hostOffsets[p+2],a),f[p]=s[M]+a.x,f[p+1]=s[M+1]+a.y,f[p+2]=s[M+2]+a.z,c.highDimensional&&e>=c.ascensionAt){const u=Pt.smoothstep(e,c.ascensionAt,c.ascensionAt+34),b=m*1.618+e*.035;f[p]+=Math.sin(b)*u*.7,f[p+1]+=Math.cos(b*.73)*u*.42,f[p+2]+=Math.sin(b*.51+2.1)*u*.7}}h.geometry.attributes.position.needsUpdate=!0;const d=c.homeRemnantIndex*3;if(o(c.homeRemnantIndex,c.homeOffset.x,c.homeOffset.y,c.homeOffset.z,a),c.home.set(s[d]+a.x,s[d+1]+a.y,s[d+2]+a.z),c.highDimensional&&e>=c.ascensionAt){const m=Pt.smoothstep(e,c.ascensionAt,c.ascensionAt+34),g=l*2.17+e*.035;c.home.x+=Math.sin(g)*m*.7,c.home.y+=Math.cos(g*.73)*m*.42,c.home.z+=Math.sin(g*.51+2.1)*m*.7}})}function w_(n,t){const{mode:e,epochEffectsGroup:i,primordialParticles:r,primordialFactors:s,primordialDirections:a,expansionStreaks:o,expansionDirections:c,bangCore:l,shockwaves:h,renderer:f,scene:d,clickableStars:m,originalGalaxyPositions:g,universe:M,transition:p,galaxyGroup:u,starDeathThresholds:b,originalGalaxyColors:y,cosmicEvents:v,remnantGroup:A,stellarRemnants:E,originalRemnantPositions:w,remnantDynamics:C,blackHoleRemnants:_,heatDeathGroup:x,coldPhotons:P,originalPhotonPositions:L,originalPhotonColors:F,cosmicFateGroup:X,fateBubble:k,fateGlow:H}=t,K=M.cosmicFate,G=K&&K.type!=="heat-death",N=G?Pt.smoothstep(n,K.onsetAt,1e3):0,V=n<150&&e==="explorer";if(i.visible=V,V&&r){const ht=Pt.smoothstep(n,0,145),ut=Pt.smoothstep(n,0,55),ot=Pt.smoothstep(n,55,145),lt=.06+Math.pow(ut,.62)*32+ot*7,dt=r.geometry.attributes.position.array;for(let Dt=0;Dt<s.length;Dt++){const R=lt*s[Dt];dt[Dt*3]=a[Dt*3]*R,dt[Dt*3+1]=a[Dt*3+1]*R,dt[Dt*3+2]=a[Dt*3+2]*R}r.geometry.attributes.position.needsUpdate=!0,r.material.opacity=.98*(1-Pt.smoothstep(n,112,150)),r.material.size=.3-ht*.17;const tt=o.geometry.attributes.position.array;for(let Dt=0;Dt<c.length/4;Dt++){const R=c[Dt*4+3],S=(.04+Math.pow(ut,.5)*31+ot*5)*R,z=Math.max(0,S-(1.2+ht*5.5)*R);for(let $=0;$<3;$++){const J=c[Dt*4+$];tt[Dt*6+$]=J*z,tt[Dt*6+3+$]=J*S}}o.geometry.attributes.position.needsUpdate=!0,o.material.opacity=.68*Pt.smoothstep(n,1.5,8)*(1-Pt.smoothstep(n,48,82));const xt=1-Pt.smoothstep(n,7,34),Xt=.7+Math.pow(ut,.46)*18;l.material.opacity=xt,l.scale.set(Xt,Xt,1),h.forEach((Dt,R)=>{const S=3+R*6,z=52+R*7,$=Pt.clamp((n-S)/z,0,1),J=.9+Math.pow($,.72)*(39+R*5);Dt.scale.set(J,J,1),Dt.material.opacity=Math.sin($*Math.PI)*(.24-R*.045)})}const et=new zt(328968),vt=et.clone();if(n<70){const ht=Pt.smoothstep(n,0,70);vt.lerpColors(new zt(2756872),et,ht),f.toneMappingExposure=1.15+(1-ht)*2.2}else if(G&&N>0){const ht={"big-rip":new zt(463652),"big-crunch":new zt(2492422),"vacuum-decay":new zt(1444389)};vt.lerpColors(et,ht[K.type],N*.72),f.toneMappingExposure=K.type==="big-crunch"?1.15+N*1.45:1.15-N*.38}else if(n>950){const ht=Pt.smoothstep(n,950,1e3);vt.lerpColors(et,new zt(197898),ht*.32),f.toneMappingExposure=1.15}else f.toneMappingExposure=1.15;if(f.setClearColor(vt,1),d.fog.color.copy(vt),!m||!g)return;const qt=$c(M),Zt=Pt.smoothstep(n,220,340),$t=1-Pt.smoothstep(n,qt-75,qt+10);m.material.opacity=Zt*.9,m.material.size=.09,p||u.scale.setScalar(1);const W=m.geometry.attributes.position.array,Z=m.geometry.attributes.color.array;for(let ht=0;ht<g.length;ht+=3){const ut=ht/3,ot=1-Pt.smoothstep(n,b[ut],b[ut]+22);W[ht]=g[ht],W[ht+1]=g[ht+1],W[ht+2]=g[ht+2],Z[ht]=y[ht]*ot,Z[ht+1]=y[ht+1]*ot,Z[ht+2]=y[ht+2]*ot}if(v.forEach(ht=>{if(n<ht.impactAt)return;const ut=Pt.smoothstep(n,ht.impactAt,ht.impactAt+24);ht.starImpacts.forEach(ot=>{const lt=ot.index*3;W[lt]+=ot.kick[0]*ut,W[lt+1]+=ot.kick[1]*ut,W[lt+2]+=ot.kick[2]*ut,Z[lt]*=ot.dimFactor,Z[lt+1]*=ot.dimFactor,Z[lt+2]*=ot.dimFactor})}),G&&N>0){const ht=k?.position.x||0,ut=k?.position.y||0,ot=k?.position.z||0,lt=.18+Math.pow(N,.58)*36;for(let dt=0;dt<g.length;dt+=3)if(K.type==="big-rip"){const tt=Math.hypot(g[dt],g[dt+1],g[dt+2]),xt=1+Math.pow(N,1.7)*(2.8+tt*.16);W[dt]*=xt,W[dt+1]*=xt,W[dt+2]*=xt;const Xt=Math.pow(1-N,.72);Z[dt]*=Xt,Z[dt+1]*=Xt,Z[dt+2]*=Xt}else if(K.type==="big-crunch"){const tt=Math.max(.012,1-Math.pow(N,1.35)*.988);W[dt]*=tt,W[dt+1]*=tt,W[dt+2]*=tt,Z[dt]*=1+N*1.4,Z[dt+1]*=1-N*.5,Z[dt+2]*=1-N*.72}else{const tt=Math.hypot(W[dt]-ht,W[dt+1]-ut,W[dt+2]-ot),xt=Pt.smoothstep(lt-1.2,lt+.4,tt);Z[dt]*=xt,Z[dt+1]*=xt,Z[dt+2]*=xt}}m.geometry.attributes.position.needsUpdate=!0,m.geometry.attributes.color.needsUpdate=!0;const _t=u.children.find(ht=>ht.userData.isCoreGlow);if(_t){const{scale:ht,opacity:ut}=_t.userData.profile;_t.material.opacity=Zt*$t*ut*(1-N),_t.scale.set(ht,ht,1)}const Ct=u.children.find(ht=>ht.userData.isAgnGlow),St=u.children.find(ht=>ht.userData.isAgnJet);if(Ct){const ht=Zt*(1-Pt.smoothstep(n,500,650));Ct.material.opacity=ht*.82,Ct.scale.set(.72,.72,1),St.material.opacity=ht*.18}const jt=!G||K.outcomeExponent>38,be=jt&&n>qt-80&&n<930,D=jt&&n>825&&n<960;if(A.visible=(be||D)&&e==="explorer",be&&E){const ht=Pt.smoothstep(n,qt-80,qt+15),ut=1-Pt.smoothstep(n,845,930);E.material.opacity=ht*ut*.64*(1-N);const ot=E.geometry.attributes.position.array,lt=(dt,tt)=>{const xt=dt*3,Xt=w[xt],Dt=w[xt+1],R=w[xt+2],S=C.axes[xt],z=C.axes[xt+1],$=C.axes[xt+2],J=Jc(tt,C.orbitRates[dt]),j=Math.cos(J),yt=Math.sin(J),st=S*Xt+z*Dt+$*R;ot[xt]=Xt*j+(z*R-$*Dt)*yt+S*st*(1-j),ot[xt+1]=Dt*j+($*Xt-S*R)*yt+z*st*(1-j),ot[xt+2]=R*j+(S*Dt-z*Xt)*yt+$*st*(1-j)};for(let dt=0;dt<w.length/3;dt++){const tt=dt*3,xt=C.fates[dt],Xt=C.escapeAt[dt];if(n<Xt||xt===1){lt(dt,n);continue}if(xt===2){const it=Pt.smoothstep(n,Xt,Math.min(900,Xt+42));lt(dt,n+it*150);const ct=1-it*.985;ot[tt]*=ct,ot[tt+1]*=ct,ot[tt+2]*=ct;continue}lt(dt,Xt);const Dt=ot[tt],R=ot[tt+1],S=ot[tt+2],z=Math.max(.001,Math.hypot(Dt,R,S)),$=C.axes[tt],J=C.axes[tt+1],j=C.axes[tt+2],yt=Math.sign(C.orbitRates[dt])||1;let st=(J*S-j*R)*yt,bt=(j*Dt-$*S)*yt,Tt=($*R-J*Dt)*yt;const nt=Math.max(.001,Math.hypot(st,bt,Tt));st/=nt,bt/=nt,Tt/=nt;let pt=st*.9+Dt/z*.34,Ut=bt*.9+R/z*.34+J*Math.sin(dt*12.9898)*.08,At=Tt*.9+S/z*.34;const ft=Math.max(.001,Math.hypot(pt,Ut,At));pt/=ft,Ut/=ft,At/=ft;const Ht=Pt.clamp((n-Xt)/Math.max(1,900-Xt),0,1),I=xt===3?Math.pow(Ht,.72)*(18+C.speeds[dt]*7):Math.pow(Ht,1.35)*(6+C.speeds[dt]*11);ot[tt]=Dt+pt*I,ot[tt+1]=R+Ut*I,ot[tt+2]=S+At*I}E.geometry.attributes.position.needsUpdate=!0}if(_.forEach(ht=>{const ut=ht.userData,ot=Pt.smoothstep(n,ut.birthAt,ut.birthAt+7),lt=1-Pt.smoothstep(n,ut.evaporationAt-24,ut.evaporationAt),dt=Pt.smoothstep(n,ut.evaporationAt-15,ut.evaporationAt),tt=7.5,xt=Math.abs(n-ut.evaporationAt),Xt=xt<tt?Math.sin((1-xt/tt)*Math.PI/2):0;ht.visible=jt&&e==="explorer"&&n>=ut.birthAt&&n<=ut.evaporationAt+tt;const Dt=ut.baseScale*(.18+.82*Math.cbrt(Math.max(0,lt)));ht.scale.setScalar(Math.max(.035,Dt));const R=ot*(.78+dt*.22)*Math.sqrt(Math.max(0,lt));Zc(ht,R),ut.hawkingGlow.material.opacity=ot*(.07+dt*.62)*Math.sqrt(Math.max(0,lt)),ut.finalPulse.material.opacity=Xt*.84;const S=(.22+Xt*2.1)/Math.max(.035,Dt);ut.finalPulse.scale.set(S,S,1)}),x.visible=!G&&n>910&&e==="explorer",P&&L&&F){const ht=Pt.smoothstep(n,910,940),ut=Pt.smoothstep(n,938,1e3);P.material.opacity=ht*Math.pow(1-ut,1.7)*.34;const ot=P.geometry.attributes.position.array,lt=P.geometry.attributes.color.array,dt=1+ut*1.8;for(let tt=0;tt<L.length;tt+=3)ot[tt]=L[tt]*dt,ot[tt+1]=L[tt+1]*dt,ot[tt+2]=L[tt+2]*dt,lt[tt]=F[tt]*(1-ut*.55)+ut*.06,lt[tt+1]=F[tt+1]*(1-ut*.88),lt[tt+2]=F[tt+2]*(1-ut*.96);P.geometry.attributes.position.needsUpdate=!0,P.geometry.attributes.color.needsUpdate=!0}if(X.visible=G&&N>0&&e==="explorer",X.visible&&k&&H)if(K.type==="vacuum-decay"){const ht=.18+Math.pow(N,.58)*36;k.visible=!0,k.scale.setScalar(ht),k.material.opacity=Math.sin(Math.min(.98,N)*Math.PI)*.18+.035,H.position.copy(k.position),H.material.opacity=(1-N)*.42,H.scale.setScalar(1.2+N*5.5)}else{k.visible=!1,H.position.set(0,0,0),H.material.opacity=K.type==="big-crunch"?Math.pow(N,2.4)*.92:Math.sin(N*Math.PI)*.28;const ht=K.type==="big-crunch"?.4+(1-N)*8:3+N*28;H.scale.setScalar(ht)}}function R_(n,t){const{mode:e,cosmicEvents:i,cosmicEventGroup:r}=t;let s=null,a=!1;return i.forEach(o=>{const c=(n-o.start)/o.duration,l=c>=0&&c<=1&&e==="explorer";if(o.group.visible=l,!l)return;a=!0,s=o,o.group.userData.phase=c;const h=o.group.userData.effect;if(o.visual==="supernova"){const f=Pt.smoothstep(c,0,.028),d=f*(1-Pt.smoothstep(c,.045,.19)),m=(1-Pt.smoothstep(c,.12,1))*f;h.innerFlash.material.opacity=d*.98;const g=.08+Math.pow(Math.min(1,c/.16),.28)*.72;h.innerFlash.scale.set(g,g,1),h.photosphere.material.opacity=d*.58+m*.2;const M=.16+Math.pow(c,.56)*1.15;h.photosphere.scale.set(M,M*.9,1),h.remnant.material.opacity=Pt.smoothstep(c,.2,.52)*(1-Pt.smoothstep(c,.82,1))*.72;const p=h.ejecta.geometry.attributes.position.array;for(let y=0;y<h.ejectaVelocity.length;y++){const v=Pt.clamp((c-h.ejectaDelay[y])/(1-h.ejectaDelay[y]),0,1),A=.05+Math.pow(v,.58)*h.ejectaVelocity[y],E=Math.sin(v*10+y*1.73)*v*.045,w=y*3;p[w]=h.ejectaDirections[w]*A+E*h.ejectaDirections[w+1],p[w+1]=h.ejectaDirections[w+1]*A+E*h.ejectaDirections[w+2],p[w+2]=h.ejectaDirections[w+2]*A+E*h.ejectaDirections[w]}h.ejecta.geometry.attributes.position.needsUpdate=!0,h.ejecta.material.opacity=f*(1-Pt.smoothstep(c,.58,1))*.86;const u=h.shell.geometry.attributes.position.array,b=.12+(1-Math.pow(1-c,2.4))*2.25;for(let y=0;y<h.shellNoise.length;y++){const v=y*3,A=1+Math.sin(h.shellNoise[y]+c*4.5)*.055+Math.sin(y*2.1)*.025;u[v]=h.shellDirections[v]*b*A,u[v+1]=h.shellDirections[v+1]*b*A,u[v+2]=h.shellDirections[v+2]*b*A}h.shell.geometry.attributes.position.needsUpdate=!0,h.shell.material.opacity=Pt.smoothstep(c,.04,.14)*(1-Pt.smoothstep(c,.5,1))*.34}else if(o.visual==="pulsar"){const f=Math.pow(Math.sin(c*Math.PI),.45),d=o.type==="pulsar-glitch"?.22:1;h.core.material.opacity=f*.92,h.halo.material.opacity=f*.16*d,h.nebula.material.opacity=f*.095*d,h.halo.scale.set(1.05,1.05,1),h.jets.material.opacity=f*.18*d,h.fieldLines.forEach((m,g)=>{m.material.opacity=f*(.055-g*.007)*d}),o.group.userData.intensity=f}else{const d=c>=.68;h.holeA.visible=!d,h.holeB.visible=!d,h.remnantHole.visible=d;const m=Math.min(1,c/.68),g=w=>Math.PI*2*(1.15*w+4.1*Math.pow(w,3)),M=w=>.12+2.45*Math.pow(1-w,.72),p=g(m),u=M(m);h.holeA.position.set(Math.cos(p)*u,Math.sin(p)*u,Math.sin(p*.5)*.09),h.holeB.position.set(-Math.cos(p)*u,-Math.sin(p)*u,-Math.sin(p*.5)*.09);const b=(w,C)=>{const _=w.geometry.attributes.position.array;for(let x=0;x<84;x++){const P=Math.max(0,m-(83-x)*(.0028+m*9e-4)),L=g(P),F=M(P);_[x*3]=C*Math.cos(L)*F,_[x*3+1]=C*Math.sin(L)*F,_[x*3+2]=C*Math.sin(L*.5)*.09}w.geometry.attributes.position.needsUpdate=!0,w.material.opacity=d?0:Pt.smoothstep(c,.02,.22)*.34};b(h.trailA,1),b(h.trailB,-1);const y=Pt.clamp((c-.68)/(1-.68),0,1),v=Math.exp(-y*7)*Math.sin(y*38);h.remnantHole.scale.set(1.24+v*.07,1.24-v*.045,1.24);const A=d?Math.exp(-y*18):0;h.mergerGlow.material.opacity=A*.045;const E=.3+y*2.4;h.mergerGlow.scale.set(E,E,1),h.wavefronts.forEach((w,C)=>{const _=C*.11,x=Pt.clamp((y-_)/(1-_),0,1);w.visible=d&&x>0,w.scale.setScalar(.3+Math.pow(x,.62)*(3.2+C*.7)),w.material.opacity=Math.sin(x*Math.PI)*.075*(1-C*.16)})}}),r.visible=a,s}function C_(n,t){const{cosmicEventGroup:e,prefersReducedMotion:i,cosmicEvents:r,camera:s}=t;!e.visible||i||r.forEach(a=>{if(!a.group.visible)return;a.group.userData.phase;const o=a.group.userData.effect;if(a.visual==="supernova")o.innerFlash.material.rotation=n*7e-5,o.photosphere.material.rotation=-n*35e-6,o.ejecta.rotation.y=Math.sin(n*21e-5)*.035;else if(a.visual==="pulsar"){o.rotor.rotation.y=n*.0024;const c=new ei,l=new U,h=new U(0,1,0);o.rotor.getWorldQuaternion(c),a.group.getWorldPosition(l),h.applyQuaternion(c).normalize();const f=s.position.clone().sub(l).normalize(),d=Math.pow(Math.abs(h.dot(f)),14),m=.52+Math.pow(Math.max(0,Math.sin(n*.012)),10)*.48,g=a.type==="pulsar-glitch"?.16:1;o.jets.material.opacity=a.group.userData.intensity*(.34+d*.58)*m*g,o.sweepGlow.material.opacity=a.group.userData.intensity*d*m*.78*g;const M=.5+d*1.8;o.sweepGlow.scale.set(M,M,1),o.knots.forEach(p=>{const u=(n*55e-5+p.userData.offset)%1;p.position.set(0,p.userData.side*(.18+u*2.45),0),p.material.opacity=a.group.userData.intensity*Math.sin(u*Math.PI)*(.12+d*.55)*g}),o.fieldLines.forEach((p,u)=>{p.rotation.y+=.006+u*.001})}else Es(o.holeA,n,o.holeA.userData.spinDirection),Es(o.holeB,n,o.holeB.userData.spinDirection),Es(o.remnantHole,n,o.remnantHole.userData.spinDirection)})}function P_({universe:n,civilizationData:t,civilizationSimulation:e,cosmicEvents:i}){if(!e||t.length===0)return;const r=e,s=Bn(n.seed+9241),a=r.habitatRemnantIndices.length,o=t.length,c=6;for(let _=0;_<a;_++){const x=[],P=_*3;for(let L=0;L<a;L++){if(L===_)continue;const F=L*3,X=Math.hypot(r.habitatPositions[P]-r.habitatPositions[F],r.habitatPositions[P+1]-r.habitatPositions[F+1],r.habitatPositions[P+2]-r.habitatPositions[F+2]);(x.length<c||X<x[x.length-1].distance)&&(x.push({node:L,distance:X}),x.sort((k,H)=>k.distance-H.distance),x.length>c&&x.pop())}r.adjacency[_]=Uint16Array.from(x.map(L=>L.node))}const l=new Int16Array(a);l.fill(-1);const h=new Float32Array(a),f=new Uint8Array(o),d=new Float32Array(o*o),m=new Int8Array(o*o),g=new Int16Array(a);g.fill(-1),t.forEach((_,x)=>{g[_.homeNodeIndex]=x});const M=new Uint16Array(o),p=Array(o).fill("自主扩张"),u=n.cosmicFate?.type!=="heat-death",b=u?n.cosmicFate.onsetAt:620,y=u?1e3:710,v=u?n.cosmicFate.label:"恒星能源枯竭",A=(_,x)=>_*o+x;for(let _=0;_<o;_++)for(let x=_+1;x<o;x++){const P=t[_],L=t[x],F=(P.cooperation+L.cooperation)*.28-(P.aggression+L.aggression)*.24+Vt(s,-.16,.16);d[A(_,x)]=F,d[A(x,_)]=F}const E=(_,x,P,L)=>{d[A(_,x)]=P,d[A(x,_)]=P,m[A(_,x)]=L,m[A(x,_)]=L},w=(_,x,P,L)=>{const F=[];for(let k=0;k<a;k++)l[k]===_&&F.push(k);if(F.length===0)return;P&&(x=1);for(let k=F.length-1;k>0;k--){const H=Math.floor(s()*(k+1));[F[k],F[H]]=[F[H],F[k]]}const X=Math.min(F.length,Math.max(P?F.length:0,Math.round(F.length*x*.62)));F.forEach((k,H)=>{H<X?(l[k]=-1,h[k]=0):h[k]*=Math.max(.18,1-x*.46)}),p[_]=L},C=i.slice().sort((_,x)=>_.impactAt-x.impactAt);for(let _=r.start;_<=r.end;_+=r.step){t.forEach((N,V)=>{f[V]||_<N.birth||(f[V]=1,l[N.homeNodeIndex]=V,h[N.homeNodeIndex]=.34,p[V]="母星文明进入星际阶段")}),C.forEach(N=>{N.impactAt<=_-r.step||N.impactAt>_||N.civilizationImpacts.forEach(V=>{const et=t[V.speciesIndex];!et||et.highDimensional&&_>=et.ascensionAt||w(V.speciesIndex,V.lossFraction,V.collapse,N.label)})});const x=new Uint8Array(o),P=new Uint8Array(o);for(let N=0;N<o;N++)for(let V=N+1;V<o;V++){const et=m[A(N,V)];et>0&&(x[N]++,x[V]++),et<0&&(P[N]++,P[V]++)}for(let N=0;N<a;N++){const V=l[N];if(V<0)continue;const et=t[V],vt=1+x[V]*.045-P[V]*.028;h[N]+=(.032+et.resilience*.018)*vt*(1-h[N]),h[N]=Pt.clamp(h[N],0,1.35)}const L=new Uint8Array(o*o);for(let N=0;N<a;N++){const V=l[N];V<0||r.adjacency[N].forEach(et=>{const vt=l[et];vt<0||vt===V||(L[A(V,vt)]=1,L[A(vt,V)]=1)})}for(let N=0;N<o;N++)for(let V=N+1;V<o;V++){let et=d[A(N,V)],vt=m[A(N,V)];if(L[A(N,V)]){const qt=t[N],Zt=t[V];et+=(qt.cooperation+Zt.cooperation-1)*.026,et-=(qt.aggression+Zt.aggression-.82)*.023,et+=Vt(s,-.012,.012),vt===0&&et>.3&&(vt=1),vt===0&&et<-.26&&(vt=-1),vt===1&&et<.08&&(vt=0),vt===-1&&et>-.04&&(vt=0)}else et*=.992,vt===1&&et<.1&&(vt=0),vt===-1&&et>-.08&&(vt=0);E(N,V,Pt.clamp(et,-.95,.95),vt)}const F=Array.from({length:o},()=>[]);for(let N=0;N<a;N++)l[N]>=0&&F[l[N]].push(N);if(t.forEach((N,V)=>{const et=F[V];if(!f[V]||et.length===0||_>=650)return;const vt=1+Math.floor(N.expansionRate+x[V]*.34);for(let qt=0;qt<vt;qt++){const Zt=[];if(et.forEach(Ct=>{r.adjacency[Ct].forEach(St=>{l[St]!==V&&Zt.push([Ct,St])})}),Zt.length===0)break;const[$t,W]=Zt[Math.floor(s()*Zt.length)],Z=l[W];if(Z<0){if(g[W]>=0&&g[W]!==V&&!f[g[W]])continue;s()<.18+N.expansionRate*.19+x[V]*.025&&(l[W]=V,h[W]=Math.max(.14,h[$t]*.34),et.push(W),p[V]=x[V]>0?"协作网络推动殖民":"殖民前沿扩张");continue}const _t=m[A(V,Z)];if(_t>0){h[$t]=Math.min(1.35,h[$t]+.018),h[W]=Math.min(1.35,h[W]+.012),p[V]=`与${t[Z].name}交流`,p[Z]=`与${N.name}交流`;continue}if(_t<0){const Ct=h[$t]*(.72+N.aggression*.76+s()*.35),St=h[W]*(.84+t[Z].resilience*.52+s()*.28);Ct>St?(l[W]=V,h[W]=Math.max(.08,Math.min(.48,(Ct-St)*.5)),p[V]=`与${t[Z].name}争夺边界`,p[Z]=`边界被${N.name}突破`):(h[$t]*=.84,h[W]*=.92,p[V]=`对${t[Z].name}的进攻受挫`)}else if(s()<N.aggression*.035){const Ct=d[A(V,Z)]-.055;E(V,Z,Ct,Ct<-.26?-1:0)}}}),_>=b){const N=Pt.smoothstep(_,b,y);for(let V=0;V<a;V++){const et=l[V];et<0||t[et].highDimensional&&_>=t[et].ascensionAt||(h[V]-=.004+N*.052,(h[V]<=.035||_>=y)&&(l[V]=-1,h[V]=0,p[et]=v))}}const X=new Uint16Array(o),k=new Float32Array(o);for(let N=0;N<a;N++){const V=l[N];V<0||(X[V]++,k[V]+=h[N])}const H=new Int8Array(o),K=new Uint8Array(o),G=new Uint8Array(o);for(let N=0;N<o;N++)H[N]=Math.sign(X[N]-M[N]),K[N]=f[N]&&X[N]>0?1:0,G[N]=t[N].highDimensional&&_>=t[N].ascensionAt?1:0,M[N]=X[N];r.snapshots.push({time:_,owners:l.slice(),counts:X,populations:k,trends:H,active:K,ascended:G,relations:m.slice(),relationScores:d.slice(),causes:p.slice()})}}function D_(n,t){if(!n?.snapshots.length)return null;const e=n,i=Pt.clamp(Math.floor((t-e.start)/e.step),0,e.snapshots.length-1);return e.snapshots[i]}function L_(n,t,e,i){let r=1,s=1/0;const a=[],o=e[t];return i.forEach(c=>{if(n<c.impactAt||o?.highDimensional&&c.impactAt>=o.ascensionAt)return;const l=c.civilizationImpacts.find(h=>h.speciesIndex===t);l&&(r*=1-l.lossFraction,l.collapse&&(s=Math.min(s,c.impactAt)),a.push(c.label))}),{capacityFactor:r,collapsedAt:s,lossFraction:1-r,causes:a}}function I_(n,t,e,i){return e.map((r,s)=>{const a=L_(n,s,e,i),o=!!t?.active[s],c=!!t?.ascended[s]&&o,l=[],h=[];return e.forEach((f,d)=>{if(d===s||!t?.active[d])return;const m=t.relations[s*e.length+d];m>0&&l.push(f.name),m<0&&h.push(f.name)}),{alive:o,ascended:c,count:t?.counts[s]||0,trend:t?.trends[s]||0,eventState:a,friendlyNames:l,conflictNames:h}})}function U_(n,t,e){if(!n)return null;let i=null,r=-1;for(let s=0;s<e;s++)for(let a=s+1;a<e;a++){const o=t[s],c=t[a];if(!o?.alive||!c?.alive||o.ascended||c.ascended)continue;const l=n.relations[s*e+a];if(l===0)continue;const f=Math.abs(n.relationScores[s*e+a])+(l<0?2:0);f<=r||(r=f,i={speciesA:s,speciesB:a,relationship:l<0?"conflict":"coexistence"})}return i}const ee=n=>document.querySelector(n);function Qc(n){const t=n.cosmicFate;ee("#universe-id").textContent=`#${n.seed}`,ee("#explore-id").textContent=`#${n.seed}`,ee("#speed-value").textContent=`${n.speed.toFixed(2)} × 现实宇宙`,ee("#gravity-value").textContent=`${n.gravity.toFixed(2)} × 现实宇宙`,ee("#fine-structure-value").textContent=`${n.fineStructure.toFixed(3)} × 现实宇宙`,ee("#mass-ratio-value").textContent=`${n.massRatio.toFixed(3)} × 现实宇宙`,ee("#expansion-value").textContent=`${n.expansionRate.toFixed(2)} × 现实宇宙`,ee("#dark-energy-value").textContent=`${(n.darkEnergyDensity*100).toFixed(1)}%`,ee("#fluctuation-value").textContent=`${n.primordialFluctuation.toFixed(2)} × 现实宇宙`,ee("#cmb-value").textContent=`${n.cmbTemperature.toFixed(2)} K`,ee("#elements-value").textContent=`${n.elements} 种`,ee("#stars-value").textContent=M_(n.stars),ee("#life-probability-value").textContent=x_(n.lifeProbability),ee("#civilizations-value").textContent=v_(n.civilizations),ee("#galaxy-type-value").textContent=mo[n.galaxyType],ee("#arm-count-value").textContent=__(n.galaxyType,n.armCount),ee("#black-hole-value").textContent=n.hasCentralBlackHole?"存在":"未形成",ee("#nucleus-value").textContent=n.hasCentralBlackHole?n.activeNucleus?"活动 · 吸积中":"宁静":"不适用",ee("#stellar-window-value").textContent=t.outcomeExponent<=n.lastStarDeathExponent?"结局前未抵达":`约 10^${n.lastStarDeathExponent.toFixed(1)} 年`,ee("#galaxy-hue-value").textContent=g_(n.hue),ee("#evaporation-value").textContent=t.outcomeExponent<n.blackHoleEvaporationExponent?"结局前未抵达":`约 10^${n.blackHoleEvaporationExponent} 年`,ee("#dark-energy-model-value").textContent=t.modelLabel,ee("#dark-energy-model-value").title=t.modelDescription,ee("#dark-energy-eos-value").textContent=`w₀ ${t.w0.toFixed(2)} · wₐ ${t.wa.toFixed(2)}`,ee("#vacuum-value").textContent=u_(t),ee("#lifetime-value").textContent=`${t.label} · ${h_(t)}`,ee("#timeline-stellar-label").textContent=t.outcomeExponent<=n.lastStarDeathExponent?"暗能量分流":"恒星熄灭",ee("#timeline-late-label").textContent=t.type==="heat-death"?"黑洞时代":"临界阶段",ee("#timeline-final-label").textContent=t.shortLabel,ee("#cosmic-timeline").setAttribute("aria-label",`从大爆炸到${t.label}的宇宙时间`),ee("#universe-note").textContent=ec[n.seed%ec.length],ee("#galaxy-name").textContent=`${nc[n.seed%nc.length]}星系`;const e=(8+n.stars*4.7).toFixed(1);ee("#galaxy-meta").textContent=`${mo[n.galaxyType]} · 直径 ${e} 万光年`}const je=n=>document.querySelector(n);let lc="",cc=null;function N_(n){je("#cosmic-timeline").value=n.position,je("#time-progress").style.width=`${n.position/10}%`,je("#timeline-value").textContent=n.label,je("#era-number").textContent=String(n.eraIndex+1).padStart(2,"0"),je("#era-name").textContent=n.era.name,je("#cosmic-time").textContent=n.label.replace("T+",""),je("#era-description").textContent=n.era.description,je(".explorer-title").style.setProperty("--cosmic-opacity",n.galaxyIdentityOpacity.toFixed(3))}function F_({position:n,simulationState:t,runtimeState:e,civilizationData:i}){e.forEach((a,o)=>{const c=i[o],l=document.querySelector(`[data-species="${o}"]`);if(!l)return;l.style.opacity=a.alive?"1":".18",l.classList.toggle("is-impacted",a.alive&&a.eventState.causes.length>0),l.classList.toggle("is-ascended",a.ascended);const h=[];t?.causes[o]&&h.push(t.causes[o]),a.friendlyNames.length&&h.push(`与 ${a.friendlyNames.join("、")} 友好交流`),a.conflictNames.length&&h.push(`与 ${a.conflictNames.join("、")} 冲突`),a.eventState.causes.length&&h.push(`受 ${a.eventState.causes.join("、")} 影响`),l.title=a.ascended?"1% 概率的高维转化：已脱离普通物质宿主":h.join("；"),l.querySelector("b").textContent=a.alive?a.ascended?"超维存续":`${a.count} 域${a.trend>0?" ↑":a.trend<0?" ↓":""}`:n<c.birth?"未诞生":"衰亡"});const r=e.filter(a=>a.alive).length,s=e.reduce((a,o)=>a+(o.alive&&!o.ascended?o.count:0),0);je("#civilization-panel").style.setProperty("--cosmic-opacity",r>0?"1":"0"),je("#civilization-summary").textContent=r>0?`${r} 种 · ${s} 域`:"尚未出现"}function O_(n,t=!1){if(n.key===lc&&!t)return;lc=n.key,je("#event-year").textContent=n.time,je("#event-text").textContent=n.text;const e=je("#event-feed");e.classList.remove("is-visible"),requestAnimationFrame(()=>e.classList.add("is-visible")),clearTimeout(cc),cc=setTimeout(()=>e.classList.remove("is-visible"),3200)}let _o=null;const B_=n=>document.querySelector(n);function z_(){_o=null}function k_(n,t){if(!n||n===_o)return;_o=n;const e=B_("#civilization-legend"),i=t.length,r=new Map([...e.querySelectorAll(".civilization-item")].map(y=>[Number(y.dataset.species),y]));e.replaceChildren();const s=Int16Array.from({length:i},(y,v)=>v),a=y=>{let v=y;for(;s[v]!==v;)v=s[v];for(;s[y]!==y;){const A=s[y];s[y]=v,y=A}return v},o=(y,v)=>{const A=a(y),E=a(v);A!==E&&(s[Math.max(A,E)]=Math.min(A,E))};for(let y=0;y<i;y++)if(!(!n.active[y]||n.ascended[y]))for(let v=y+1;v<i;v++){if(!n.active[v]||n.ascended[v])continue;const A=y*i+v;n.relations[A]>0&&n.relationScores[A]>=.52&&o(y,v)}const c=new Map,l=[],h=[];for(let y=0;y<i;y++){if(!n.active[y]){l.push(y);continue}if(n.ascended[y]){h.push(y);continue}const v=a(y);c.has(v)||c.set(v,[]),c.get(v).push(y)}const f=[...c.values()],d=y=>y.reduce((v,A)=>v+n.counts[A],0),m=(y,v)=>{let A={kind:"neutral",state:0,strength:0};return y.forEach(E=>v.forEach(w=>{const C=E*i+w,_=n.relations[C],x=Math.abs(n.relationScores[C]);_!==0&&x>A.strength&&(A={kind:_<0?"conflict":"friendly",state:_,strength:x})})),A};f.sort((y,v)=>d(v)-d(y));const g=f.length?[f.shift()]:[];for(;f.length;){const y=g[g.length-1];let v=0,A=-1;f.forEach((E,w)=>{const C=m(y,E).strength;C>A&&(A=C,v=w)}),g.push(f.splice(v,1)[0])}const M={conflict:'<svg viewBox="0 0 16 16" aria-hidden="true"><path d="M3 3l10 10M13 3L3 13"/><path d="M2 5l3-3M11 14l3-3"/></svg>',friendly:'<svg viewBox="0 0 16 16" aria-hidden="true"><circle cx="6" cy="8" r="3.5"/><circle cx="10" cy="8" r="3.5"/></svg>',neutral:'<svg viewBox="0 0 16 16" aria-hidden="true"><path d="M2.5 8h3M10.5 8h3"/><circle cx="8" cy="8" r="1.25"/></svg>'},p=y=>y==="conflict"?"冲突":y==="friendly"?"友好":"中立",u=y=>{const v=y.slice().sort((A,E)=>n.counts[E]-n.counts[A])[0];return`#${t[v].color.toString(16).padStart(6,"0")}`},b=g.map((y,v)=>({members:y,number:String(v+1).padStart(2,"0"),accent:u(y)}));if(b.forEach((y,v)=>{const A=document.createElement("section");A.className="faction-block",A.style.setProperty("--faction",y.accent),A.setAttribute("aria-label",`阵营 ${y.number}`);const E=document.createElement("div");E.className="faction-header";const w=document.createElement("span");w.className="faction-identity",w.textContent=y.number,w.setAttribute("aria-hidden","true"),E.appendChild(w);const C=document.createElement("div");C.className="faction-relations";const _={conflict:[],friendly:[],neutral:[]};b.forEach((P,L)=>{if(L===v)return;const F=m(y.members,P.members);_[F.kind].push(P)}),["conflict","friendly","neutral"].forEach(P=>{const L=_[P];if(!L.length)return;const F=document.createElement("span");F.className=`faction-relation is-${P}`;const X=`阵营 ${y.number}${p(P)}：阵营 ${L.map(k=>k.number).join("、")}`;F.setAttribute("role","img"),F.setAttribute("aria-label",X),F.title=X,F.innerHTML=`${M[P]}<span>${L.map(k=>`<b style="--target-faction:${k.accent}">${k.number}</b>`).join("")}</span>`,C.appendChild(F)}),E.appendChild(C),A.appendChild(E);const x=document.createElement("div");x.className="faction-members",y.members.slice().sort((P,L)=>n.counts[L]-n.counts[P]||P-L).forEach(P=>{const L=r.get(P);L&&x.appendChild(L)}),A.appendChild(x),e.appendChild(A)}),h.length){const y=document.createElement("section");y.className="faction-block is-transcendent",y.setAttribute("aria-label","升维种群"),y.innerHTML='<div class="faction-header"><span class="faction-identity" aria-hidden="true">◇</span></div>';const v=document.createElement("div");v.className="faction-members",h.forEach(A=>{const E=r.get(A);E&&v.appendChild(E)}),y.appendChild(v),e.appendChild(y)}if(l.length){const y=document.createElement("div");y.className="faction-inactive",l.forEach(v=>{const A=r.get(v);A&&y.appendChild(A)}),e.appendChild(y)}}const It=n=>document.querySelector(n),ko=It("#universe"),$n=window.matchMedia("(prefers-reduced-motion: reduce)").matches,En=new Hg({canvas:ko,antialias:!0,alpha:!1,powerPreference:"high-performance"});En.setPixelRatio(Math.min(devicePixelRatio,2));En.setSize(innerWidth,innerHeight);En.setClearColor(328968,1);En.outputColorSpace=De;En.toneMapping=gc;En.toneMappingExposure=1.15;const zs=new Xu;zs.fog=new Io(328968,.018);const mn=new tn(42,innerWidth/innerHeight,.1,200);mn.position.set(0,.5,32);const an=new Vg(mn,ko);an.enableDamping=!0;an.dampingFactor=.045;an.enablePan=!1;an.minDistance=8;an.maxDistance=46;an.autoRotate=!1;an.enabled=!1;let Se=new ze,Ae=new ze,vn=new ze,Kn=new ze,Si=new ze,vi=new ze,Qn=new ze;zs.add(Se,Ae,vn,Kn,Si,vi,Qn);let Ft=null,on="generator",Be=null,Ki=new Ot(0,0),_s=new Ot(0,0),xo=new nf;xo.params.Points.threshold=.12;let Ar=null,wr=[],Ve=[],fi=[],Rr=null,Ds=[],vo=null,mr=null,Mo=null,yo=null,Xi=null,bs=null,th=[],Cr=null,Zi=null,xr=null,eh=null,nh=null,Ls=null,ih=null,rh=null,So=null,Qe=null,Yn=null,Ee=0,yn=!1,sh=1,hc=performance.now(),Ei=[];function di(n){n.traverse(t=>{t.geometry&&t.geometry.dispose(),t.material&&(Array.isArray(t.material)?t.material:[t.material]).forEach(i=>i.dispose())}),n.clear()}function ah(){di(Se);const n=Bn(Ft.seed),t=Math.min(10500,Math.floor(5200+Ft.stars*900)),e=new Float32Array(t*3),i=new Float32Array(t*3),r=new Float32Array(t),s=new zt().setHSL(Ft.hue,.55,.66),a=new zt(16767402);for(let m=0;m<t;m++){const g=Math.pow(n(),.56)*9.2,M=n()*Math.PI*2,p=Math.acos(2*n()-1),u=Math.sin(M*Ft.armCount+g)*.48;e[m*3]=g*Math.sin(p)*Math.cos(M)+u,e[m*3+1]=g*Math.cos(p)*.82,e[m*3+2]=g*Math.sin(p)*Math.sin(M);const b=s.clone().lerp(a,Math.pow(n(),2.3)),y=.45+n()*.7;i[m*3]=b.r*y,i[m*3+1]=b.g*y,i[m*3+2]=b.b*y,r[m]=n()}const o=new he;o.setAttribute("position",new se(e,3)),o.setAttribute("color",new se(i,3)),o.setAttribute("aSize",new se(r,1));const c=new Sn({size:.065,map:nn(),alphaTest:.015,vertexColors:!0,transparent:!0,opacity:.86,depthWrite:!1,blending:Qt}),l=new Nn(o,c);Se.add(l);const h=new No(9.9,3),f=new Oc(new Zu(h),new xi({color:12175324,transparent:!0,opacity:.032}));Se.add(f);const d=new sn(new Fo(10.7,.007,3,220),new Ur({color:14221151,transparent:!0,opacity:.25}));d.rotation.set(1.24,.18,.4),Se.add(d),Se.rotation.set(.15,-.3,-.08),Se.scale.setScalar(.01),Be={type:"birth",start:performance.now(),duration:$n?1:1300}}function oh(){di(Ae),di(vn),di(Kn),di(Si),di(vi),di(Qn),wr=[],Ve=[],fi=[],Rr=null;const n=Bn(Ft.seed+91),t=17e3,e=new Float32Array(t*3),i=new Float32Array(t*3);So=new Float32Array(t);const r=new zt(16770996),s=new zt().setHSL(Ft.hue,.65,.56),a=$c(Ft),o=Math.min(a,Yc(4e10,Ft)),c=Array.from({length:4+Ft.seed%3},(M,p)=>({x:Vt(n,-8,8)+p*.35,y:Vt(n,-.6,.6),z:Vt(n,-6,6),spread:Vt(n,1.1,3.1)}));for(let M=0;M<t;M++){let p=0,u=0,b=0;if(Ft.galaxyType===0){const E=n();if(E<.2)p=te(n)*3.7,b=te(n)*.42,u=te(n)*.18;else if(E<.29)p=te(n)*1.7,b=te(n)*1.7,u=te(n)*.65;else{const w=3+Math.pow(n(),.72)*11,_=M%2*Math.PI+(w-3)*.46+te(n)*(.12+w*.012),x=te(n)*(.18+w*.025);p=Math.cos(_)*w+x,b=Math.sin(_)*w+x,u=te(n)*(.12+w*.018)}}else if(Ft.galaxyType===1){const E=7+Ft.seed%5,w=Math.pow(n(),.68)*14,C=M%E,_=C/E*Math.PI*2+w*.31+te(n)*(.26+w*.018),x=1+Math.sin(w*2.7+C*1.9)*.11;p=Math.cos(_)*w*x+te(n)*.25,b=Math.sin(_)*w*x+te(n)*.25,u=te(n)*(.18+w*.028)}else if(Ft.galaxyType===2){const E=n(),w=n()*Math.PI*2;let C;E<.72?C=8.4+te(n)*.78:E<.9?C=Math.abs(te(n))*2.1:C=4+n()*8,p=Math.cos(w)*C*1.15+te(n)*.13,b=Math.sin(w)*C+te(n)*.13,u=te(n)*(.18+C*.012)}else if(Ft.galaxyType===3){const E=Math.pow(n(),.38);p=te(n)*5.5*E,u=te(n)*2.35*E,b=te(n)*3.75*E;const w=Math.hypot(p,u,b);if(w>13.5){const C=13.5/w;p*=C,u*=C,b*=C}}else if(n()<.13){const E=Vt(n,-12,12);p=E,b=Math.sin(E*.24)*2.7+te(n)*.7,u=te(n)*.55}else{const E=c[Math.floor(n()*c.length)];p=E.x+te(n)*E.spread,u=E.y+te(n)*E.spread*.38,b=E.z+te(n)*E.spread*.72}e[M*3]=p,e[M*3+1]=u,e[M*3+2]=b;const y=Math.hypot(p,u,b),v=r.clone().lerp(s,Math.min(1,y/12)),A=.55+n()*.85;i[M*3]=v.r*A,i[M*3+1]=v.g*A,i[M*3+2]=v.b*A,So[M]=o+Math.pow(n(),1.9)*(a-o)}ih=e.slice(),rh=i.slice();const l=new he;l.setAttribute("position",new se(e,3)),l.setAttribute("color",new se(i,3));const h=new Nn(l,new Sn({size:.09,map:nn(),alphaTest:.015,vertexColors:!0,transparent:!0,opacity:.9,depthWrite:!1,blending:Qt}));Ae.add(h),Ar=h;const d=[{scale:4.3,opacity:.32},{scale:3.25,opacity:.22},{scale:1.55,opacity:.055},{scale:6.4,opacity:.46},{scale:1.2,opacity:.035}][Ft.galaxyType],m=new ye(new xe({map:en(),color:16768164,transparent:!0,opacity:0,depthWrite:!1,blending:Qt}));if(m.scale.set(d.scale,d.scale,1),m.userData.isCoreGlow=!0,m.userData.profile=d,Ae.add(m),Ft.activeNucleus){const M=new ye(new xe({map:en(),color:14281983,transparent:!0,opacity:0,depthWrite:!1,blending:Qt}));M.scale.set(.72,.72,1),M.userData.isAgnGlow=!0,Ae.add(M);const p=new he().setFromPoints([new U(0,-2.6,0),new U(0,2.6,0)]),u=new Tr(p,new xi({color:11065599,transparent:!0,opacity:0,depthWrite:!1,blending:Qt}));u.rotation.z=.3,u.userData.isAgnJet=!0,Ae.add(u)}const g=[.72,.92,.62,.35,.78];Ae.rotation.set(g[Ft.galaxyType],-.25+Ft.galaxyType*.06,.06),Ae.visible=!1,H_(e),W_(),G_(e),P_({universe:Ft,civilizationData:Ve,civilizationSimulation:Rr,cosmicEvents:Ei})}function H_(n){const t=Bn(Ft.seed+771);Ds=[];const e=4800,i=new Float32Array(e*3),r=new Float32Array(e*3);mr=new Float32Array(e*3),Mo=new Float32Array(e);const s=new zt(16777215),a=new zt(16739624);for(let E=0;E<e;E++){const w=t()*Math.PI*2,C=Vt(t,-1,1),_=Math.sqrt(1-C*C),x=Math.cbrt(t());mr[E*3]=Math.cos(w)*_*x,mr[E*3+1]=C*x,mr[E*3+2]=Math.sin(w)*_*x,Mo[E]=Pt.clamp(1+te(t)*.035*Ft.primordialFluctuation,.82,1.18);const P=s.clone().lerp(a,Math.pow(t(),.7));r[E*3]=P.r,r[E*3+1]=P.g,r[E*3+2]=P.b}const o=new he;o.setAttribute("position",new se(i,3)),o.setAttribute("color",new se(r,3)),vo=new Nn(o,new Sn({size:.24,map:nn(),alphaTest:.012,vertexColors:!0,transparent:!0,opacity:1,depthWrite:!1,blending:Qt})),vn.add(vo);const c=340,l=new Float32Array(c*6);Xi=new Float32Array(c*4);for(let E=0;E<c;E++){const w=t()*Math.PI*2,C=Math.acos(2*t()-1);Xi[E*4]=Math.sin(C)*Math.cos(w),Xi[E*4+1]=Math.cos(C),Xi[E*4+2]=Math.sin(C)*Math.sin(w),Xi[E*4+3]=.45+t()*.75}const h=new he;h.setAttribute("position",new se(l,3)),yo=new Oc(h,new xi({color:16762253,transparent:!0,opacity:.8,blending:Qt,depthWrite:!1})),vn.add(yo),bs=new ye(new xe({map:en(),color:16777215,transparent:!0,opacity:1,depthTest:!1,depthWrite:!1,blending:Qt})),bs.scale.setScalar(.2),vn.add(bs),th=[16774367,16751444,8962047].map((E,w)=>{const C=new ye(new xe({map:y_(),color:E,transparent:!0,opacity:0,depthTest:!1,depthWrite:!1,blending:Qt}));return C.userData.offset=w*.13,vn.add(C),C});const f=1350,d=new Float32Array(f*3),m=new Float32Array(f*3);Qe=new Float32Array(f*3),Yn={axes:new Float32Array(f*3),orbitRates:new Float32Array(f),escapeAt:new Float32Array(f),speeds:new Float32Array(f),fates:new Uint8Array(f)};const g=Pt.clamp((Ft.gravity-.5)*6+(Ft.galaxyType===3?4:0),0,12);for(let E=0;E<f;E++){const C=Math.floor(t()*n.length/3)*3,_=n[C],x=n[C+1],P=n[C+2];d[E*3]=Qe[E*3]=_,d[E*3+1]=Qe[E*3+1]=x,d[E*3+2]=Qe[E*3+2]=P;const L=Ft.galaxyType<=2;let F=L?te(t)*.035:te(t),X=L?1:te(t),k=L?te(t)*.035:te(t);const H=Math.max(.001,Math.hypot(F,X,k));F/=H,X/=H,k/=H,Yn.axes.set([F,X,k],E*3);const K=L?t()<.94?1:-1:t()<.5?1:-1,G=Math.max(.8,Math.hypot(_,x,P));Yn.orbitRates[E]=K*Vt(t,.008,.018)/Math.sqrt(G*.22);const N=t(),V=N<.82?0:N<.92?1:N<.99?2:3;Yn.fates[E]=V,Yn.escapeAt[E]=V===1?1001:(V===3?704:V===2?724:710)+g+Math.pow(t(),.68)*(V===3?28:92),Yn.speeds[E]=V===3?Vt(t,1.7,2.6):Vt(t,.55,1.05);const et=new zt(t()>.28?10204889:9125426);m[E*3]=et.r,m[E*3+1]=et.g,m[E*3+2]=et.b}const M=new he;M.setAttribute("position",new se(d,3)),M.setAttribute("color",new se(m,3)),Ls=new Nn(M,new Sn({size:.12,map:nn(),alphaTest:.012,vertexColors:!0,transparent:!0,opacity:0,depthWrite:!1,blending:Qt})),Kn.add(Ls),Kn.rotation.copy(Ae.rotation);const p=Ft.hasCentralBlackHole?9:6;for(let E=0;E<p;E++){const w=E===0&&Ft.hasCentralBlackHole,C=w?.9:Vt(t,.3,.5),_=Kc({color:w?16763286:t()>.35?16758652:12179455,tilt:Vt(t,-.38,.38),phase:t()*Math.PI*2,visualScale:w?1.14:1,intensity:0}),x=new ye(new xe({map:en(),color:7315404,transparent:!0,opacity:0,depthWrite:!1,blending:Qt}));x.scale.set(1.2,1.2,1);const P=new ye(new xe({map:en(),color:15267071,transparent:!0,opacity:0,depthWrite:!1,blending:Qt}));if(P.scale.set(.2,.2,1),_.add(x,P),w)_.position.set(0,0,0);else{const L=Math.floor(t()*n.length/3)*3;_.position.set(n[L],n[L+1],n[L+2])}_.scale.setScalar(C),_.visible=!1,Object.assign(_.userData,{baseScale:C,birthAt:825+t()*34,evaporationAt:w?949:880+Math.pow(t(),.46)*64,hawkingGlow:x,finalPulse:P,spinDirection:t()<.5?-1:1}),Ds.push(_),Kn.add(_)}const u=260,b=new Float32Array(u*3),y=new Float32Array(u*3);for(let E=0;E<u;E++){const w=t()*Math.PI*2,C=Math.acos(2*t()-1),_=4+Math.pow(t(),1/3)*24;b[E*3]=Math.sin(C)*Math.cos(w)*_,b[E*3+1]=Math.cos(C)*_,b[E*3+2]=Math.sin(C)*Math.sin(w)*_;const x=new zt().setHSL(.56+t()*.1,.28,.46+t()*.22);y[E*3]=x.r,y[E*3+1]=x.g,y[E*3+2]=x.b}const v=new he;v.setAttribute("position",new se(b,3)),v.setAttribute("color",new se(y,3)),eh=b.slice(),nh=y.slice(),Cr=new Nn(v,new Sn({size:.11,map:nn(),alphaTest:.01,vertexColors:!0,transparent:!0,opacity:0,depthWrite:!1,blending:Qt})),Si.add(Cr);const A=Ft.cosmicFate.type==="vacuum-decay"?13019135:Ft.cosmicFate.type==="big-rip"?8440063:16744543;Zi=new sn(new Fs(1,40,24),new Ur({color:A,transparent:!0,opacity:0,wireframe:!0,depthWrite:!1,blending:Qt})),Zi.position.set(4.2,-1.4,2.6),xr=new ye(new xe({map:en(),color:A,transparent:!0,opacity:0,depthTest:!1,depthWrite:!1,blending:Qt})),xr.scale.set(.2,.2,1),vi.add(Zi,xr),vi.rotation.copy(Ae.rotation),vn.visible=!1,Kn.visible=!1,Si.visible=!1,vi.visible=!1}function G_(n){const t=Bn(Ft.seed+1447);Ei=[];const e=Ft.hasCentralBlackHole?{type:"quasar-awakening",visual:"pulsar",label:"类星体短暂苏醒",message:"中心黑洞吸积率骤升，相对论喷流穿过星系核",preferCenter:!0,start:480+t()*16,duration:30,color:"#8dd9ff"}:{type:"magnetar-flare",visual:"pulsar",label:"磁星巨型耀斑",message:"磁壳重排释放高能辐射，脉冲扫过邻近恒星系",start:480+t()*16,duration:26,color:"#7dcaff"},i=[{type:"pair-instability-supernova",visual:"supernova",label:"成对不稳定超新星",message:"第一代巨星被完全撕碎，重元素云向外扩散",start:258+t()*18,duration:28,color:"#ffb36b"},{type:"young-pulsar-birth",visual:"pulsar",label:"年轻脉冲星诞生",message:"新生中子星高速自转，双极束流开始扫掠星际介质",start:302+t()*18,duration:27,color:"#68c8ff"},{type:"type-ia-supernova",visual:"supernova",label:"Ia 型超新星爆发",message:"白矮星发生热核失控，将铁族元素抛入星际空间",start:368+t()*22,duration:25,color:"#ffd08a"},{type:"gamma-ray-burst",visual:"pulsar",label:"长伽马射线暴",message:"垂死巨星坍缩，狭窄高能喷流贯穿恒星外层",start:420+t()*20,duration:24,color:"#89b9ff"},e,{type:"core-collapse-supernova",visual:"supernova",label:"核坍缩超新星",message:"恒星核心坍缩，冲击波把新合成元素送入星际云",start:518+t()*20,duration:27,color:"#ff875c"},{type:"pulsar-glitch",visual:"pulsar",label:"脉冲星自转突变",message:"中子星内部角动量重分配，脉冲节律突然跃迁",start:548+t()*18,duration:22,color:"#8ba8ff"},{type:"superluminous-supernova",visual:"supernova",label:"超亮超新星",message:"磁星引擎持续注入能量，爆发亮度超过普通超新星",start:552+t()*16,duration:26,color:"#ff6b52"},{type:"stellar-black-hole-merger",visual:"black-hole-merger",label:"双黑洞合并",message:"两颗恒星级黑洞完成旋近，引力波向外传播",preferCenter:!0,start:616+t()*18,duration:31,color:"#c897ff"},{type:"late-black-hole-merger",visual:"black-hole-merger",label:"孤立黑洞捕获合并",message:"漫长引力散射后，两颗孤立黑洞形成并合系统",preferCenter:!0,start:872+t()*18,duration:34,color:"#9bb8ff"}].filter(o=>o.type!=="late-black-hole-merger"||Ft.cosmicFate.type==="heat-death"||Ft.cosmicFate.outcomeExponent>45),r={"pair-instability-supernova":{radius:.55,maxStars:5,sourceDim:.02,neighborDim:.96,kick:.018,civilization:.08,range:2.4},"young-pulsar-birth":{radius:.42,maxStars:2,sourceDim:.12,neighborDim:.99,kick:.01,civilization:.035,range:1.8,directional:!0,beamAngle:.12},"type-ia-supernova":{radius:.48,maxStars:4,sourceDim:.02,neighborDim:.97,kick:.012,civilization:.06,range:2.1},"gamma-ray-burst":{radius:7.5,maxStars:46,sourceDim:.025,neighborDim:.82,kick:0,civilization:.42,range:12,maxSpecies:1,directional:!0,beamAngle:.1},"quasar-awakening":{radius:8.5,maxStars:60,sourceDim:.95,neighborDim:.96,kick:0,civilization:.16,range:14,maxSpecies:2,directional:!0,beamAngle:.16},"magnetar-flare":{radius:1.1,maxStars:8,sourceDim:.82,neighborDim:.94,kick:0,civilization:.12,range:3.2,maxSpecies:1},"core-collapse-supernova":{radius:.5,maxStars:4,sourceDim:.025,neighborDim:.97,kick:.014,civilization:.06,range:2.2},"pulsar-glitch":{radius:.01,maxStars:1,sourceDim:.985,neighborDim:1,kick:0,civilization:0,range:0,maxSpecies:0},"superluminous-supernova":{radius:.62,maxStars:6,sourceDim:.02,neighborDim:.95,kick:.02,civilization:.09,range:2.8,maxSpecies:1},"stellar-black-hole-merger":{radius:.08,maxStars:1,sourceDim:.08,neighborDim:1,kick:.65,civilization:0,range:0,maxSpecies:0},"late-black-hole-merger":{radius:.08,maxStars:1,sourceDim:.06,neighborDim:1,kick:.82,civilization:0,range:0,maxSpecies:0}},s=(o=!1)=>{let c=Math.floor(t()*n.length/3);const l=o?2.8:6.2;for(let h=0;h<140;h++){const f=Math.floor(t()*n.length/3),d=f*3;if(Math.hypot(n[d],n[d+1],n[d+2])<l){c=f;break}}return{index:c,position:new U(n[c*3],n[c*3+1],n[c*3+2])}},a=(o,c)=>{const l=r[o.type],h=o.visual==="supernova"?.08:o.visual==="pulsar"?.46:.68,f=o.start+o.duration*h,d=[];for(let v=0;v<n.length/3;v++){const A=v*3,E=Math.hypot(n[A]-c.position.x,n[A+1]-c.position.y,n[A+2]-c.position.z);if(!(E>l.radius)){if(l.directional&&o.beamDirection){const w=new U(n[A]-c.position.x,n[A+1]-c.position.y,n[A+2]-c.position.z).normalize();if(Math.abs(w.dot(o.beamDirection))<Math.cos(l.beamAngle))continue}d.push({index:v,distance:E})}}d.sort((v,A)=>v.distance-A.distance);const m=d.slice(0,l.maxStars).map(({index:v,distance:A},E)=>{const w=v*3,C=1-Math.min(1,A/l.radius);let _=n[w]-c.position.x,x=n[w+1]-c.position.y,P=n[w+2]-c.position.z;const L=Math.hypot(_,x,P);if(L<.001){const X=t()*Math.PI*2,k=t()*2-1,H=Math.sqrt(1-k*k);_=Math.cos(X)*H,x=k,P=Math.sin(X)*H}else _/=L,x/=L,P/=L;const F=l.kick*(.2+C*.8)*(.72+t()*.5);return{index:v,dimFactor:E===0?l.sourceDim:1-(1-l.neighborDim)*C,kick:[_*F,x*F,P*F]}}),g=Ve.map((v,A)=>({species:v,speciesIndex:A,distance:v.home.distanceTo(c.position)})).filter(({species:v,distance:A})=>{if(!(f>=v.birth&&f<v.extinction&&A<=l.range)||v.highDimensional&&f>=v.ascensionAt)return!1;if(!l.directional||!o.beamDirection)return!0;const E=v.home.clone().sub(c.position).normalize();return Math.abs(E.dot(o.beamDirection))>=Math.cos(l.beamAngle)}).sort((v,A)=>v.distance-A.distance),M=Math.min(l.maxSpecies||1,g.length),p=g.slice(0,M).map(({species:v,speciesIndex:A,distance:E})=>{const w=Math.max(.08,1-E/l.range),C=Pt.clamp(l.civilization*(.62+w*.48)*(.84+t()*.3),.03,.58),_=Math.floor(v.maxColonies*Pt.smoothstep(f,v.birth,v.birth+95)),x=_>0&&_<=8&&C>.3&&t()<.42;return{speciesIndex:A,lossFraction:x?1:C,collapse:x}}),u={"pair-instability-supernova":"爆发源完全解体且没有致密残骸","type-ia-supernova":"白矮星被热核爆炸完全摧毁","core-collapse-supernova":"坍缩核心留下中子星或恒星级黑洞","superluminous-supernova":"恒星外层被大规模抛射，中心结局仍不确定"},b=o.visual==="black-hole-merger"?"合并黑洞质量转化为引力波，残留黑洞获得反冲速度":o.type==="pulsar-glitch"?"自转频率发生微小跃变，没有可见的大规模破坏":o.visual==="pulsar"?`${m.length} 个位于辐射束或近场内的恒星系受到影响`:`${u[o.type]||"爆发源发生结构性改变"}，${Math.max(0,m.length-1)} 个邻近恒星系受冲击`,y=p.length?p.map(v=>{const A=Ve[v.speciesIndex].name;return v.collapse?`${A} 灭绝`:`${A} 仿真疆域损失约 ${Math.round(v.lossFraction*100)}%`}).join("，"):"未波及已知文明";return{impactAt:f,impactPhase:h,starImpacts:m,civilizationImpacts:p,outcome:`${b}；${y}`}};i.forEach((o,c)=>{const l=new ze,h=s(o.preferCenter);if(l.position.copy(h.position),l.visible=!1,Qn.add(l),r[o.type].directional&&(o.beamDirection=new U(te(t),te(t),te(t)).normalize(),l.quaternion.setFromUnitVectors(new U(0,1,0),o.beamDirection)),o.visual==="supernova"){const m=new ye(new xe({map:en(),color:16777215,transparent:!0,opacity:0,depthWrite:!1,blending:Qt})),g=new ye(new xe({map:en(),color:16756067,transparent:!0,opacity:0,depthWrite:!1,blending:Qt})),M=new ye(new xe({map:nn(),color:11458815,transparent:!0,opacity:0,depthWrite:!1,blending:Qt}));M.scale.set(.16,.16,1);const p=620,u=new Float32Array(p*3),b=new Float32Array(p*3),y=new Float32Array(p*3),v=new Float32Array(p),A=new Float32Array(p),E=new zt(16773319),w=new zt(16730930);for(let H=0;H<p;H++){const K=t()*Math.PI*2,G=Math.acos(2*t()-1),N=1+Math.sin(K*5+G*3)*.18+(t()-.5)*.24,V=new U(Math.sin(G)*Math.cos(K)*N,Math.cos(G)*(1.08+t()*.34),Math.sin(G)*Math.sin(K)*N).normalize();y.set([V.x,V.y,V.z],H*3),v[H]=.38+Math.pow(t(),.48)*1.45+Math.abs(V.y)*.22,A[H]=Math.pow(t(),2.4)*.22;const et=E.clone().lerp(w,Math.pow(t(),.52));b.set([et.r,et.g,et.b],H*3)}const C=new he;C.setAttribute("position",new se(u,3)),C.setAttribute("color",new se(b,3));const _=new Nn(C,new Sn({size:.1,map:nn(),alphaTest:.008,vertexColors:!0,transparent:!0,opacity:0,depthWrite:!1,blending:Qt})),x=280,P=new Float32Array(x*3),L=new Float32Array(x*3),F=new Float32Array(x);for(let H=0;H<x;H++){const K=t()*Math.PI*2,G=2*t()-1,N=Math.sqrt(1-G*G);L.set([Math.cos(K)*N,G,Math.sin(K)*N],H*3),F[H]=t()*Math.PI*2}const X=new he;X.setAttribute("position",new se(P,3));const k=new Nn(X,new Sn({color:16766112,size:.072,map:nn(),alphaTest:.01,transparent:!0,opacity:0,depthWrite:!1,blending:Qt}));l.add(g,m,_,k,M),l.userData.effect={innerFlash:m,photosphere:g,remnant:M,ejecta:_,ejectaDirections:y,ejectaVelocity:v,ejectaDelay:A,shell:k,shellDirections:L,shellNoise:F}}else if(o.visual==="pulsar"){const m=new ye(new xe({map:nn(),color:16055295,transparent:!0,opacity:0,depthWrite:!1,blending:Qt})),g=new ye(new xe({map:en(),color:4962815,transparent:!0,opacity:0,depthWrite:!1,blending:Qt})),M=new ye(new xe({map:en(),color:1472184,transparent:!0,opacity:0,depthWrite:!1,blending:Qt,rotation:t()*Math.PI})),p=new ye(new xe({map:en(),color:13233663,transparent:!0,opacity:0,depthWrite:!1,blending:Qt}));m.scale.set(.18,.18,1),M.scale.set(1.45,.58,1);const u=new ze;u.rotation.z=.58+t()*.32;const b=420,y=new Float32Array(b*3),v=new Float32Array(b*3);for(let _=0;_<b;_++){const x=_%2?1:-1,P=.1+Math.pow(t(),.66)*2.6,L=.012+P*.014,F=t()*Math.PI*2;y[_*3]=Math.cos(F)*L*t(),y[_*3+1]=x*P,y[_*3+2]=Math.sin(F)*L*t();const X=.35+Math.pow(1-P/2.8,.45)*.65;v.set([.38*X,.76*X,X],_*3)}const A=new he;A.setAttribute("position",new se(y,3)),A.setAttribute("color",new se(v,3));const E=new Nn(A,new Sn({size:.09,map:nn(),alphaTest:.008,vertexColors:!0,transparent:!0,opacity:0,depthWrite:!1,blending:Qt}));u.add(E);const w=[];for(let _=0;_<4;_++){const x=[],P=.5+_*.18;for(let F=0;F<=80;F++){const X=F/80*Math.PI*2;x.push(new U(Math.cos(X)*P,Math.sin(X)*P*.34,Math.sin(X*2)*.08))}const L=new Tr(new he().setFromPoints(x),new xi({color:7524351,transparent:!0,opacity:0,depthWrite:!1,blending:Qt}));L.rotation.set(t()*Math.PI,t()*Math.PI,t()*Math.PI),w.push(L),u.add(L)}const C=[];for(let _=0;_<8;_++){const x=new ye(new xe({map:nn(),color:10214911,transparent:!0,opacity:0,depthWrite:!1,blending:Qt}));x.scale.set(.11,.11,1),x.userData.offset=_/8,x.userData.side=_%2?1:-1,C.push(x),u.add(x)}l.add(M,g,p,m,u),l.userData.effect={core:m,halo:g,nebula:M,sweepGlow:p,rotor:u,jets:E,fieldLines:w,knots:C}}else{const m=(w,C)=>{const _=Kc({color:w,tilt:Vt(t,-.28,.28),phase:t()*Math.PI*2,visualScale:1.08});return _.userData.spinDirection=C,_},g=new ze;g.rotation.set(.76,.18,.24);const M=m(16759408,1),p=m(10999807,-1),u=m(16767405,1);u.scale.setScalar(1.24),u.visible=!1;const b=w=>{const C=new Float32Array(252),_=new he;return _.setAttribute("position",new se(C,3)),new Tr(_,new xi({color:w,transparent:!0,opacity:0,depthWrite:!1,blending:Qt}))},y=b(16751445),v=b(7979007);g.add(y,v,M,p,u);const A=new ye(new xe({map:en(),color:14478079,transparent:!0,opacity:0,depthWrite:!1,blending:Qt})),E=[];for(let w=0;w<3;w++){const C=[];for(let x=0;x<128;x++){const P=x/128*Math.PI*2;C.push(new U(Math.cos(P),Math.sin(P),Math.sin(P*2+w)*.04))}const _=new Ku(new he().setFromPoints(C),new xi({color:w===1?14205951:9422591,transparent:!0,opacity:0,depthWrite:!1,blending:Qt}));_.rotation.set(.34+w*.62,.2+w*.41,w*.9),E.push(_),l.add(_)}l.add(g,A),l.userData.effect={orbitalPlane:g,holeA:M,holeB:p,remnantHole:u,trailA:y,trailB:v,mergerGlow:A,wavefronts:E}}const d=a(o,h);Ei.push({...o,...d,group:l,sourceIndex:h.index,id:`${o.type}-${c}-${Ft.seed}`,label:o.label})}),Qn.rotation.copy(Ae.rotation),Qn.visible=!1,V_()}function V_(){const n=It("#cosmic-event-markers");n.innerHTML="",Ei.forEach(t=>{const e=document.createElement("button");e.type="button",e.className="event-marker",e.style.left=`${t.start/10}%`,e.style.setProperty("--event-color",t.color),e.setAttribute("aria-label",`${t.label}，${qc(t.start,Ft)}；${t.outcome}`),e.title=t.outcome,e.addEventListener("click",()=>{yn=!1,It("#toggle-time").textContent="▶";const i=t.visual==="supernova"?.14:t.visual==="black-hole-merger"?.76:.54;Fr(t.start+t.duration*i,!0)}),n.appendChild(e)})}function W_(){z_();const n=Bn(Ft.seed+410),t=Ft.speciesCount,e=Qe.length/3,i=Math.min(720,e),r=new Uint16Array(i),s=new Float32Array(i*3),a=e/i;for(let l=0;l<i;l++){const h=Math.min(e-1,Math.floor((l+n()*.86)*a)),f=h*3,d=l*3;r[l]=h,s[d]=Qe[f],s[d+1]=Qe[f+1],s[d+2]=Qe[f+2]}Rr={start:390,end:Ft.cosmicFate.type==="heat-death"?710:1e3,step:1,habitatRemnantIndices:r,habitatPositions:s,adjacency:[],snapshots:[]};const o=[],c=It("#civilization-legend");c.innerHTML="";for(let l=0;l<t;l++){let h=Math.floor(n()*i),f=-1;for(let L=0;L<96;L++){const F=Math.floor(n()*i),X=F*3;let k=1/0;o.forEach(H=>{const K=H*3;k=Math.min(k,Math.hypot(s[X]-s[K],s[X+1]-s[K+1],s[X+2]-s[K+2]))}),k>f&&(f=k,h=F)}o.push(h);const d=r[h],m=d*3,g=new U(Qe[m],Qe[m+1],Qe[m+2]),M=rc[l%rc.length],p=new he;p.setAttribute("position",new se(new Float32Array(i*3),3)),p.setDrawRange(0,0);const u=new Sn({color:M,size:.24,map:nn(),alphaTest:.012,transparent:!0,opacity:.98,depthWrite:!1,blending:Qt}),b=new Nn(p,u);Ae.add(b),wr.push(b);const y=n(),v=n(),A=Vt(n,.72,1.36),E=Vt(n,.68,1.32),w=t===1?0:l/(t-1),C=404+Math.round(w*72+n()*11),_=n()<.01,x=_?C+Math.round(Vt(n,130,205)):1/0;Ve.push({name:ic[(Ft.seed+l)%ic.length],color:M,home:g,homeNodeIndex:h,homeRemnantIndex:d,homeOffset:new U,hostRemnantIndices:new Uint16Array(i),hostOffsets:new Float32Array(i*3),displayCount:0,maxColonies:i,birth:C,highDimensional:_,ascensionAt:x,extinction:_?1001:Ft.cosmicFate.type==="heat-death"?710:1e3,aggression:y,cooperation:v,expansionRate:A,resilience:E});const P=`#${M.toString(16).padStart(6,"0")}`;c.insertAdjacentHTML("beforeend",`<div class="civilization-item" style="--species:${P}" data-species="${l}"><i></i><span>${Ve[l].name}</span><b>未诞生</b></div>`)}}function lh(){if(on!=="generator")return;Ft=jc(),Qc(Ft),ah(),oh(),It(".universe-data").scrollTop=0;const n=It("#creation-flash");n.classList.remove("is-flashing"),n.offsetWidth,n.classList.add("is-flashing"),document.querySelectorAll(".metric").forEach(t=>{t.style.animation="none",t.offsetWidth,t.style.animation=""})}function X_(){on==="generator"&&(on="explorer",document.body.classList.add("is-exploring"),It("#generator-view").classList.remove("is-active"),It("#explorer-view").classList.add("is-active"),It("#mode-label").textContent="深空航行中",It("#regenerate-top").style.opacity="0",It("#regenerate-top").style.pointerEvents="none",It("#civilization-panel").classList.remove("is-expanded"),It("#toggle-civilizations").setAttribute("aria-expanded","false"),Ae.visible=!0,Ae.scale.setScalar(.02),an.enabled=!0,an.target.set(0,0,0),Ee=0,It("#cosmic-timeline").value=Ee,Fr(Ee,!0),yn=!0,It("#toggle-time").textContent="Ⅱ",It("#toggle-time").setAttribute("aria-label","暂停时间"),Be={type:"enter",start:performance.now(),duration:$n?1:2100})}function Y_(){on==="explorer"&&(on="generator",document.body.classList.remove("is-exploring"),It("#explorer-view").classList.remove("is-active"),It("#generator-view").classList.add("is-active"),It("#star-inspector").classList.remove("is-open"),It("#civilization-panel").classList.remove("is-expanded"),It("#toggle-civilizations").setAttribute("aria-expanded","false"),It("#mode-label").textContent="创世引擎在线",It("#regenerate-top").style.opacity="",It("#regenerate-top").style.pointerEvents="",yn=!1,It("#toggle-time").textContent="▶",It("#toggle-time").setAttribute("aria-label","播放时间"),an.enabled=!1,vn.visible=!1,Kn.visible=!1,Si.visible=!1,Qn.visible=!1,Be={type:"leave",start:performance.now(),duration:$n?1:1300})}function uc(n){return n===1?1:1-Math.pow(2,-10*n)}function fc(n){return n<.5?4*n*n*n:1-Math.pow(-2*n+2,3)/2}function q_(n){if(!Be)return;const t=Math.min(1,(n-Be.start)/Be.duration);if(Be.type==="birth"){const e=uc(t);Se.scale.setScalar(e),Se.rotation.y=-.3+(1-e)*1.5}if(Be.type==="enter"){const e=fc(t);Se.scale.setScalar(Math.max(.001,1-e*1.5)),Se.rotation.z+=.018*(1-t),Ae.scale.setScalar(.02+uc(t)*.98),mn.position.z=32-e*12,mn.position.y=.5+e*4.2}if(Be.type==="leave"){const e=fc(t);Ae.scale.setScalar(1-e*.96),Se.scale.setScalar(e),mn.position.z=20+e*12,mn.position.y=4.7-e*4.2}t===1&&(Be.type==="enter"&&(Se.visible=!1),Be.type==="leave"&&(Ae.visible=!1,Se.visible=!0,Se.scale.setScalar(1)),Be=null)}function $_(n){if(on!=="explorer"||Be||!Ar||Ee<250||Ee>750)return;Ki.x=n.clientX/innerWidth*2-1,Ki.y=-(n.clientY/innerHeight)*2+1,xo.setFromCamera(Ki,mn);const t=xo.intersectObject(Ar);if(!t.length)return;const e=t[0].index,i=Bn(Ft.seed+e*31),r=["M4 V","K1 III","G2 V","F8 V","A3 V","B1 Ia"],s=r[Math.floor(i()*r.length)],o={M:[2400,3700],K:[3700,5200],G:[5200,6e3],F:[6e3,7500],A:[7500,1e4],B:[1e4,3e4]}[s[0]],c=Math.round(Vt(i,o[0],o[1])),l=Math.floor(i()*13),h=i()<Ft.lifeProbability?"候选信号":"未检出";It("#star-name").textContent=`RU-${String(e).padStart(5,"0")}`,It("#star-type").textContent=s,It("#star-temp").textContent=`${new Intl.NumberFormat("zh-CN").format(c)} K`,It("#star-planets").textContent=l,It("#star-life").textContent=h,It("#star-life").style.color=h==="候选信号"?"var(--accent)":"",It("#star-inspector").classList.add("is-open")}function j_(n){Ee+=n*p_(Ee)*sh}function K_(){if(on!=="explorer")return;const n=It("#civilization-panel"),t=!n.classList.contains("is-expanded");n.classList.toggle("is-expanded",t),It("#toggle-civilizations").setAttribute("aria-expanded",String(t))}function dc(){return{mode:on,epochEffectsGroup:vn,primordialParticles:vo,primordialFactors:Mo,primordialDirections:mr,expansionStreaks:yo,expansionDirections:Xi,bangCore:bs,shockwaves:th,renderer:En,scene:zs,clickableStars:Ar,originalGalaxyPositions:ih,universe:Ft,transition:Be,galaxyGroup:Ae,starDeathThresholds:So,originalGalaxyColors:rh,cosmicEvents:Ei,remnantGroup:Kn,stellarRemnants:Ls,originalRemnantPositions:Qe,remnantDynamics:Yn,blackHoleRemnants:Ds,heatDeathGroup:Si,coldPhotons:Cr,originalPhotonPositions:eh,originalPhotonColors:nh,cosmicFateGroup:vi,fateBubble:Zi,fateGlow:xr,cosmicEventGroup:Qn}}function Z_(n){const t=Ft.cosmicFate.type==="heat-death"?0:Pt.smoothstep(Ee,Ft.cosmicFate.onsetAt,995);n.forEach((e,i)=>{const r=wr[i],s=Ve[i];r.visible=e.alive&&e.count>0,r.material.opacity=(e.ascended?.88:.98)*(1-t),r.material.size=e.ascended?.31:.24,r.material.color.setHex(e.ascended?15325183:s.color)})}function Fr(n,t=!1){const e=d_(n,Ft,n_(Ft));if(Ee=e.position,N_(e),!Ar)return;w_(Ee,dc());const i=D_(Rr,Ee);T_(i,{civilizationSimulation:Rr,civilizationData:Ve,civilizationGroups:wr}),A_({stellarRemnants:Ls,remnantDynamics:Yn,cosmicPosition:Ee,civilizationData:Ve,civilizationGroups:wr}),fi=I_(Ee,i,Ve,Ei),Z_(fi),F_({position:Ee,simulationState:i,runtimeState:fi,civilizationData:Ve}),k_(i,Ve);const r=fi.filter(l=>l.alive).length,s=fi.filter(l=>l.ascended).length,a=U_(i,fi,Ve.length),o=R_(Ee,dc()),c=m_({position:Ee,label:e.label,universe:Ft,activeEvent:o,activeRelationship:a,ascendedSpecies:s,activeSpecies:r,civilizationData:Ve});O_(c,t)}function ch(n){requestAnimationFrame(ch);const t=Math.min(.05,(n-hc)/1e3);if(hc=n,q_(n),_s.lerp(Ki,.04),on==="generator"&&Se.visible&&!$n&&(Se.rotation.y+=45e-5,Se.rotation.x=.15+_s.y*.045,Se.position.x=_s.x*.42,Se.position.y=_s.y*.25),on==="explorer"){yn&&!Be&&(j_(t),Ee>=1e3&&(Ee=1e3,yn=!1,It("#toggle-time").textContent="▶",It("#toggle-time").setAttribute("aria-label","播放时间")),Fr(Ee)),an.update(),vn.position.set(0,0,0),Si.visible&&!$n&&(Cr.rotation.y+=35e-6,Cr.rotation.x+=9e-6),vi.visible&&!$n&&(Zi.rotation.y+=.0014,Zi.rotation.x-=7e-4,xr.material.rotation=n*8e-5),$n||Ds.forEach((i,r)=>{i.visible&&(Es(i,n,i.userData.spinDirection||(r%2?-1:1)),i.userData.hawkingGlow.material.rotation=n*(25e-6+r*1e-6))}),C_(n,{cosmicEventGroup:Qn,prefersReducedMotion:$n,cosmicEvents:Ei,camera:mn}),an.enabled||(Ae.rotation.y+=3e-4);const e=n*12e-5;It("#coord-x").textContent=`${Math.sin(e)<0?"−":"+"}${Math.abs(Math.sin(e)*9).toFixed(2)}`,It("#coord-y").textContent=`${Math.cos(e*.7)<0?"−":"+"}${Math.abs(Math.cos(e*.7)*9).toFixed(2)}`,It("#coord-z").textContent=`${Math.sin(e*.3)<0?"−":"+"}${Math.abs(Math.sin(e*.3)*3).toFixed(2)}`}En.render(zs,mn)}window.addEventListener("pointermove",n=>{Ki.x=n.clientX/innerWidth*2-1,Ki.y=-(n.clientY/innerHeight)*2+1;const t=It("#cursor");t.style.left=`${n.clientX}px`,t.style.top=`${n.clientY}px`,t.style.opacity="1"});window.addEventListener("resize",()=>{mn.aspect=innerWidth/innerHeight,mn.updateProjectionMatrix(),En.setSize(innerWidth,innerHeight),En.setPixelRatio(Math.min(devicePixelRatio,2))});ko.addEventListener("click",$_);It("#regenerate-top").addEventListener("click",lh);It("#enter-universe").addEventListener("click",X_);It("#close-inspector").addEventListener("click",()=>It("#star-inspector").classList.remove("is-open"));It("#toggle-civilizations").addEventListener("click",K_);It("#toggle-time").addEventListener("click",()=>{Ee>=1e3&&Fr(0,!0),yn=!yn,It("#toggle-time").textContent=yn?"Ⅱ":"▶",It("#toggle-time").setAttribute("aria-label",yn?"暂停时间":"播放时间")});It("#cosmic-timeline").addEventListener("input",n=>{yn=!1,It("#toggle-time").textContent="▶",Fr(n.target.value,!0)});document.querySelectorAll(".speed-controls button").forEach(n=>{n.addEventListener("click",()=>{sh=Number(n.dataset.speed),document.querySelectorAll(".speed-controls button").forEach(t=>{const e=t===n;t.classList.toggle("is-active",e),t.setAttribute("aria-pressed",String(e))})})});document.addEventListener("keydown",n=>{if(n.key.toLowerCase()==="r"&&on==="generator"&&lh(),n.key==="Escape"&&on==="explorer"){const t=It("#civilization-panel");t.classList.contains("is-expanded")?(t.classList.remove("is-expanded"),It("#toggle-civilizations").setAttribute("aria-expanded","false")):Y_()}});Ft=jc();Qc(Ft);ah();oh();ch(performance.now());
