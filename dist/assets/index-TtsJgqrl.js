(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function e(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(s){if(s.ep)return;s.ep=!0;const r=e(s);fetch(s.href,r)}})();const Ho="180",ss={ROTATE:0,DOLLY:1,PAN:2},es={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Vh=0,dc=1,Wh=2,Nl=1,Xh=2,On=3,ri=0,je=1,Bn=2,ni=0,bi=1,Ft=2,fc=3,pc=4,qh=5,Mi=100,$h=101,Yh=102,jh=103,Kh=104,Zh=200,Jh=201,Qh=202,tu=203,za=204,ka=205,eu=206,nu=207,iu=208,su=209,ru=210,au=211,ou=212,cu=213,lu=214,Ha=0,Ga=1,Va=2,ls=3,Wa=4,Xa=5,qa=6,$a=7,Ol=0,hu=1,uu=2,ii=0,du=1,fu=2,pu=3,Bl=4,mu=5,gu=6,_u=7,zl=300,hs=301,us=302,Ya=303,ja=304,qr=306,Ka=1e3,yi=1001,Za=1002,En=1003,xu=1004,js=1005,vn=1006,ia=1007,ti=1008,Gn=1009,kl=1010,Hl=1011,Ls=1012,Go=1013,Ai=1014,zn=1015,ks=1016,Vo=1017,Wo=1018,Is=1020,Gl=35902,Vl=35899,Wl=1021,Xl=1022,yn=1023,Us=1026,Fs=1027,ql=1028,Xo=1029,$l=1030,qo=1031,$o=1033,Cr=33776,Pr=33777,Dr=33778,Lr=33779,Ja=35840,Qa=35841,to=35842,eo=35843,no=36196,io=37492,so=37496,ro=37808,ao=37809,oo=37810,co=37811,lo=37812,ho=37813,uo=37814,fo=37815,po=37816,mo=37817,go=37818,_o=37819,xo=37820,Mo=37821,vo=36492,yo=36494,So=36495,Eo=36283,bo=36284,To=36285,Ao=36286,Mu=3200,vu=3201,yu=0,Su=1,Jn="",Fe="srgb",ds="srgb-linear",Or="linear",fe="srgb",Ui=7680,mc=519,Eu=512,bu=513,Tu=514,Yl=515,Au=516,wu=517,Ru=518,Cu=519,wo=35044,gc="300 es",Rn=2e3,Br=2001;class Pi{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(e)===-1&&i[t].push(e)}hasEventListener(t,e){const i=this._listeners;return i===void 0?!1:i[t]!==void 0&&i[t].indexOf(e)!==-1}removeEventListener(t,e){const i=this._listeners;if(i===void 0)return;const s=i[t];if(s!==void 0){const r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){const e=this._listeners;if(e===void 0)return;const i=e[t.type];if(i!==void 0){t.target=this;const s=i.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,t);t.target=null}}}const Ne=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let _c=1234567;const Cs=Math.PI/180,Ns=180/Math.PI;function kn(){const n=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Ne[n&255]+Ne[n>>8&255]+Ne[n>>16&255]+Ne[n>>24&255]+"-"+Ne[t&255]+Ne[t>>8&255]+"-"+Ne[t>>16&15|64]+Ne[t>>24&255]+"-"+Ne[e&63|128]+Ne[e>>8&255]+"-"+Ne[e>>16&255]+Ne[e>>24&255]+Ne[i&255]+Ne[i>>8&255]+Ne[i>>16&255]+Ne[i>>24&255]).toLowerCase()}function te(n,t,e){return Math.max(t,Math.min(e,n))}function Yo(n,t){return(n%t+t)%t}function Pu(n,t,e,i,s){return i+(n-t)*(s-i)/(e-t)}function Du(n,t,e){return n!==t?(e-n)/(t-n):0}function Ps(n,t,e){return(1-e)*n+e*t}function Lu(n,t,e,i){return Ps(n,t,1-Math.exp(-e*i))}function Iu(n,t=1){return t-Math.abs(Yo(n,t*2)-t)}function Uu(n,t,e){return n<=t?0:n>=e?1:(n=(n-t)/(e-t),n*n*(3-2*n))}function Fu(n,t,e){return n<=t?0:n>=e?1:(n=(n-t)/(e-t),n*n*n*(n*(n*6-15)+10))}function Nu(n,t){return n+Math.floor(Math.random()*(t-n+1))}function Ou(n,t){return n+Math.random()*(t-n)}function Bu(n){return n*(.5-Math.random())}function zu(n){n!==void 0&&(_c=n);let t=_c+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function ku(n){return n*Cs}function Hu(n){return n*Ns}function Gu(n){return(n&n-1)===0&&n!==0}function Vu(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function Wu(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function Xu(n,t,e,i,s){const r=Math.cos,a=Math.sin,o=r(e/2),l=a(e/2),c=r((t+i)/2),h=a((t+i)/2),f=r((t-i)/2),p=a((t-i)/2),m=r((i-t)/2),_=a((i-t)/2);switch(s){case"XYX":n.set(o*h,l*f,l*p,o*c);break;case"YZY":n.set(l*p,o*h,l*f,o*c);break;case"ZXZ":n.set(l*f,l*p,o*h,o*c);break;case"XZX":n.set(o*h,l*_,l*m,o*c);break;case"YXY":n.set(l*m,o*h,l*_,o*c);break;case"ZYZ":n.set(l*_,l*m,o*h,o*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Mn(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function ue(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}const ot={DEG2RAD:Cs,RAD2DEG:Ns,generateUUID:kn,clamp:te,euclideanModulo:Yo,mapLinear:Pu,inverseLerp:Du,lerp:Ps,damp:Lu,pingpong:Iu,smoothstep:Uu,smootherstep:Fu,randInt:Nu,randFloat:Ou,randFloatSpread:Bu,seededRandom:zu,degToRad:ku,radToDeg:Hu,isPowerOfTwo:Gu,ceilPowerOfTwo:Vu,floorPowerOfTwo:Wu,setQuaternionFromProperEuler:Xu,normalize:ue,denormalize:Mn};class Vt{constructor(t=0,e=0){Vt.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,i=this.y,s=t.elements;return this.x=s[0]*e+s[3]*i+s[6],this.y=s[1]*e+s[4]*i+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=te(this.x,t.x,e.x),this.y=te(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=te(this.x,t,e),this.y=te(this.y,t,e),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(te(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(te(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y;return e*e+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const i=Math.cos(e),s=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*i-a*s+t.x,this.y=r*s+a*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class ai{constructor(t=0,e=0,i=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=i,this._w=s}static slerpFlat(t,e,i,s,r,a,o){let l=i[s+0],c=i[s+1],h=i[s+2],f=i[s+3];const p=r[a+0],m=r[a+1],_=r[a+2],x=r[a+3];if(o===0){t[e+0]=l,t[e+1]=c,t[e+2]=h,t[e+3]=f;return}if(o===1){t[e+0]=p,t[e+1]=m,t[e+2]=_,t[e+3]=x;return}if(f!==x||l!==p||c!==m||h!==_){let u=1-o;const d=l*p+c*m+h*_+f*x,b=d>=0?1:-1,v=1-d*d;if(v>Number.EPSILON){const T=Math.sqrt(v),S=Math.atan2(T,d*b);u=Math.sin(u*S)/T,o=Math.sin(o*S)/T}const g=o*b;if(l=l*u+p*g,c=c*u+m*g,h=h*u+_*g,f=f*u+x*g,u===1-o){const T=1/Math.sqrt(l*l+c*c+h*h+f*f);l*=T,c*=T,h*=T,f*=T}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=f}static multiplyQuaternionsFlat(t,e,i,s,r,a){const o=i[s],l=i[s+1],c=i[s+2],h=i[s+3],f=r[a],p=r[a+1],m=r[a+2],_=r[a+3];return t[e]=o*_+h*f+l*m-c*p,t[e+1]=l*_+h*p+c*f-o*m,t[e+2]=c*_+h*m+o*p-l*f,t[e+3]=h*_-o*f-l*p-c*m,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,i,s){return this._x=t,this._y=e,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const i=t._x,s=t._y,r=t._z,a=t._order,o=Math.cos,l=Math.sin,c=o(i/2),h=o(s/2),f=o(r/2),p=l(i/2),m=l(s/2),_=l(r/2);switch(a){case"XYZ":this._x=p*h*f+c*m*_,this._y=c*m*f-p*h*_,this._z=c*h*_+p*m*f,this._w=c*h*f-p*m*_;break;case"YXZ":this._x=p*h*f+c*m*_,this._y=c*m*f-p*h*_,this._z=c*h*_-p*m*f,this._w=c*h*f+p*m*_;break;case"ZXY":this._x=p*h*f-c*m*_,this._y=c*m*f+p*h*_,this._z=c*h*_+p*m*f,this._w=c*h*f-p*m*_;break;case"ZYX":this._x=p*h*f-c*m*_,this._y=c*m*f+p*h*_,this._z=c*h*_-p*m*f,this._w=c*h*f+p*m*_;break;case"YZX":this._x=p*h*f+c*m*_,this._y=c*m*f+p*h*_,this._z=c*h*_-p*m*f,this._w=c*h*f-p*m*_;break;case"XZY":this._x=p*h*f-c*m*_,this._y=c*m*f-p*h*_,this._z=c*h*_+p*m*f,this._w=c*h*f+p*m*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const i=e/2,s=Math.sin(i);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,i=e[0],s=e[4],r=e[8],a=e[1],o=e[5],l=e[9],c=e[2],h=e[6],f=e[10],p=i+o+f;if(p>0){const m=.5/Math.sqrt(p+1);this._w=.25/m,this._x=(h-l)*m,this._y=(r-c)*m,this._z=(a-s)*m}else if(i>o&&i>f){const m=2*Math.sqrt(1+i-o-f);this._w=(h-l)/m,this._x=.25*m,this._y=(s+a)/m,this._z=(r+c)/m}else if(o>f){const m=2*Math.sqrt(1+o-i-f);this._w=(r-c)/m,this._x=(s+a)/m,this._y=.25*m,this._z=(l+h)/m}else{const m=2*Math.sqrt(1+f-i-o);this._w=(a-s)/m,this._x=(r+c)/m,this._y=(l+h)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let i=t.dot(e)+1;return i<1e-8?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(te(this.dot(t),-1,1)))}rotateTowards(t,e){const i=this.angleTo(t);if(i===0)return this;const s=Math.min(1,e/i);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const i=t._x,s=t._y,r=t._z,a=t._w,o=e._x,l=e._y,c=e._z,h=e._w;return this._x=i*h+a*o+s*c-r*l,this._y=s*h+a*l+r*o-i*c,this._z=r*h+a*c+i*l-s*o,this._w=a*h-i*o-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const i=this._x,s=this._y,r=this._z,a=this._w;let o=a*t._w+i*t._x+s*t._y+r*t._z;if(o<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,o=-o):this.copy(t),o>=1)return this._w=a,this._x=i,this._y=s,this._z=r,this;const l=1-o*o;if(l<=Number.EPSILON){const m=1-e;return this._w=m*a+e*this._w,this._x=m*i+e*this._x,this._y=m*s+e*this._y,this._z=m*r+e*this._z,this.normalize(),this}const c=Math.sqrt(l),h=Math.atan2(c,o),f=Math.sin((1-e)*h)/c,p=Math.sin(e*h)/c;return this._w=a*f+this._w*p,this._x=i*f+this._x*p,this._y=s*f+this._y*p,this._z=r*f+this._z*p,this._onChangeCallback(),this}slerpQuaternions(t,e,i){return this.copy(t).slerp(e,i)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class B{constructor(t=0,e=0,i=0){B.prototype.isVector3=!0,this.x=t,this.y=e,this.z=i}set(t,e,i){return i===void 0&&(i=this.z),this.x=t,this.y=e,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(xc.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(xc.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,i=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*i+r[6]*s,this.y=r[1]*e+r[4]*i+r[7]*s,this.z=r[2]*e+r[5]*i+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,i=this.y,s=this.z,r=t.elements,a=1/(r[3]*e+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*i+r[8]*s+r[12])*a,this.y=(r[1]*e+r[5]*i+r[9]*s+r[13])*a,this.z=(r[2]*e+r[6]*i+r[10]*s+r[14])*a,this}applyQuaternion(t){const e=this.x,i=this.y,s=this.z,r=t.x,a=t.y,o=t.z,l=t.w,c=2*(a*s-o*i),h=2*(o*e-r*s),f=2*(r*i-a*e);return this.x=e+l*c+a*f-o*h,this.y=i+l*h+o*c-r*f,this.z=s+l*f+r*h-a*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,i=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*i+r[8]*s,this.y=r[1]*e+r[5]*i+r[9]*s,this.z=r[2]*e+r[6]*i+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=te(this.x,t.x,e.x),this.y=te(this.y,t.y,e.y),this.z=te(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=te(this.x,t,e),this.y=te(this.y,t,e),this.z=te(this.z,t,e),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(te(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const i=t.x,s=t.y,r=t.z,a=e.x,o=e.y,l=e.z;return this.x=s*l-r*o,this.y=r*a-i*l,this.z=i*o-s*a,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const i=t.dot(this)/e;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return sa.copy(this).projectOnVector(t),this.sub(sa)}reflect(t){return this.sub(sa.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(te(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y,s=this.z-t.z;return e*e+i*i+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,i){const s=Math.sin(e)*t;return this.x=s*Math.sin(i),this.y=Math.cos(e)*t,this.z=s*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,i){return this.x=t*Math.sin(e),this.y=i,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=i,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,i=Math.sqrt(1-e*e);return this.x=i*Math.cos(t),this.y=e,this.z=i*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const sa=new B,xc=new ai;class Jt{constructor(t,e,i,s,r,a,o,l,c){Jt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,i,s,r,a,o,l,c)}set(t,e,i,s,r,a,o,l,c){const h=this.elements;return h[0]=t,h[1]=s,h[2]=o,h[3]=e,h[4]=r,h[5]=l,h[6]=i,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],this}extractBasis(t,e,i){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,s=e.elements,r=this.elements,a=i[0],o=i[3],l=i[6],c=i[1],h=i[4],f=i[7],p=i[2],m=i[5],_=i[8],x=s[0],u=s[3],d=s[6],b=s[1],v=s[4],g=s[7],T=s[2],S=s[5],A=s[8];return r[0]=a*x+o*b+l*T,r[3]=a*u+o*v+l*S,r[6]=a*d+o*g+l*A,r[1]=c*x+h*b+f*T,r[4]=c*u+h*v+f*S,r[7]=c*d+h*g+f*A,r[2]=p*x+m*b+_*T,r[5]=p*u+m*v+_*S,r[8]=p*d+m*g+_*A,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8];return e*a*h-e*o*c-i*r*h+i*o*l+s*r*c-s*a*l}invert(){const t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],f=h*a-o*c,p=o*l-h*r,m=c*r-a*l,_=e*f+i*p+s*m;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const x=1/_;return t[0]=f*x,t[1]=(s*c-h*i)*x,t[2]=(o*i-s*a)*x,t[3]=p*x,t[4]=(h*e-s*l)*x,t[5]=(s*r-o*e)*x,t[6]=m*x,t[7]=(i*l-c*e)*x,t[8]=(a*e-i*r)*x,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,i,s,r,a,o){const l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*a+c*o)+a+t,-s*c,s*l,-s*(-c*a+l*o)+o+e,0,0,1),this}scale(t,e){return this.premultiply(ra.makeScale(t,e)),this}rotate(t){return this.premultiply(ra.makeRotation(-t)),this}translate(t,e){return this.premultiply(ra.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,i,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,i=t.elements;for(let s=0;s<9;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<9;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const ra=new Jt;function jl(n){for(let t=n.length-1;t>=0;--t)if(n[t]>=65535)return!0;return!1}function zr(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function qu(){const n=zr("canvas");return n.style.display="block",n}const Mc={};function Os(n){n in Mc||(Mc[n]=!0,console.warn(n))}function $u(n,t,e){return new Promise(function(i,s){function r(){switch(n.clientWaitSync(t,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:i()}}setTimeout(r,e)})}const vc=new Jt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),yc=new Jt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Yu(){const n={enabled:!0,workingColorSpace:ds,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===fe&&(s.r=Hn(s.r),s.g=Hn(s.g),s.b=Hn(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===fe&&(s.r=rs(s.r),s.g=rs(s.g),s.b=rs(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Jn?Or:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return Os("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),n.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return Os("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),n.colorSpaceToWorking(s,r)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[ds]:{primaries:t,whitePoint:i,transfer:Or,toXYZ:vc,fromXYZ:yc,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:Fe},outputColorSpaceConfig:{drawingBufferColorSpace:Fe}},[Fe]:{primaries:t,whitePoint:i,transfer:fe,toXYZ:vc,fromXYZ:yc,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:Fe}}}),n}const ce=Yu();function Hn(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function rs(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let Fi;class ju{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let i;if(t instanceof HTMLCanvasElement)i=t;else{Fi===void 0&&(Fi=zr("canvas")),Fi.width=t.width,Fi.height=t.height;const s=Fi.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),i=Fi}return i.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=zr("canvas");e.width=t.width,e.height=t.height;const i=e.getContext("2d");i.drawImage(t,0,0,t.width,t.height);const s=i.getImageData(0,0,t.width,t.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=Hn(r[a]/255)*255;return i.putImageData(s,0,0),e}else if(t.data){const e=t.data.slice(0);for(let i=0;i<e.length;i++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[i]=Math.floor(Hn(e[i]/255)*255):e[i]=Hn(e[i]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let Ku=0;class jo{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Ku++}),this.uuid=kn(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):e instanceof VideoFrame?t.set(e.displayHeight,e.displayWidth,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(aa(s[a].image)):r.push(aa(s[a]))}else r=aa(s);i.url=r}return e||(t.images[this.uuid]=i),i}}function aa(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?ju.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Zu=0;const oa=new B;class Xe extends Pi{constructor(t=Xe.DEFAULT_IMAGE,e=Xe.DEFAULT_MAPPING,i=yi,s=yi,r=vn,a=ti,o=yn,l=Gn,c=Xe.DEFAULT_ANISOTROPY,h=Jn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Zu++}),this.uuid=kn(),this.name="",this.source=new jo(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Vt(0,0),this.repeat=new Vt(1,1),this.center=new Vt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Jt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(oa).x}get height(){return this.source.getSize(oa).y}get depth(){return this.source.getSize(oa).z}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const e in t){const i=t[e];if(i===void 0){console.warn(`THREE.Texture.setValues(): parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){console.warn(`THREE.Texture.setValues(): property '${e}' does not exist.`);continue}s&&i&&s.isVector2&&i.isVector2||s&&i&&s.isVector3&&i.isVector3||s&&i&&s.isMatrix3&&i.isMatrix3?s.copy(i):this[e]=i}}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),e||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==zl)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Ka:t.x=t.x-Math.floor(t.x);break;case yi:t.x=t.x<0?0:1;break;case Za:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Ka:t.y=t.y-Math.floor(t.y);break;case yi:t.y=t.y<0?0:1;break;case Za:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Xe.DEFAULT_IMAGE=null;Xe.DEFAULT_MAPPING=zl;Xe.DEFAULT_ANISOTROPY=1;class Ee{constructor(t=0,e=0,i=0,s=1){Ee.prototype.isVector4=!0,this.x=t,this.y=e,this.z=i,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,i,s){return this.x=t,this.y=e,this.z=i,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,i=this.y,s=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*i+a[8]*s+a[12]*r,this.y=a[1]*e+a[5]*i+a[9]*s+a[13]*r,this.z=a[2]*e+a[6]*i+a[10]*s+a[14]*r,this.w=a[3]*e+a[7]*i+a[11]*s+a[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,i,s,r;const l=t.elements,c=l[0],h=l[4],f=l[8],p=l[1],m=l[5],_=l[9],x=l[2],u=l[6],d=l[10];if(Math.abs(h-p)<.01&&Math.abs(f-x)<.01&&Math.abs(_-u)<.01){if(Math.abs(h+p)<.1&&Math.abs(f+x)<.1&&Math.abs(_+u)<.1&&Math.abs(c+m+d-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const v=(c+1)/2,g=(m+1)/2,T=(d+1)/2,S=(h+p)/4,A=(f+x)/4,w=(_+u)/4;return v>g&&v>T?v<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(v),s=S/i,r=A/i):g>T?g<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(g),i=S/s,r=w/s):T<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(T),i=A/r,s=w/r),this.set(i,s,r,e),this}let b=Math.sqrt((u-_)*(u-_)+(f-x)*(f-x)+(p-h)*(p-h));return Math.abs(b)<.001&&(b=1),this.x=(u-_)/b,this.y=(f-x)/b,this.z=(p-h)/b,this.w=Math.acos((c+m+d-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=te(this.x,t.x,e.x),this.y=te(this.y,t.y,e.y),this.z=te(this.z,t.z,e.z),this.w=te(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=te(this.x,t,e),this.y=te(this.y,t,e),this.z=te(this.z,t,e),this.w=te(this.w,t,e),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(te(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this.w=t.w+(e.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Ju extends Pi{constructor(t=1,e=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:vn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},i),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=i.depth,this.scissor=new Ee(0,0,t,e),this.scissorTest=!1,this.viewport=new Ee(0,0,t,e);const s={width:t,height:e,depth:i.depth},r=new Xe(s);this.textures=[];const a=i.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}_setTextureOptions(t={}){const e={minFilter:vn,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,i=1){if(this.width!==t||this.height!==e||this.depth!==i){this.width=t,this.height=e,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=i,this.textures[s].isArrayTexture=this.textures[s].image.depth>1;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,i=t.textures.length;e<i;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;const s=Object.assign({},t.textures[e].image);this.textures[e].source=new jo(s)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class wi extends Ju{constructor(t=1,e=1,i={}){super(t,e,i),this.isWebGLRenderTarget=!0}}class Kl extends Xe{constructor(t=null,e=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=En,this.minFilter=En,this.wrapR=yi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class Qu extends Xe{constructor(t=null,e=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=En,this.minFilter=En,this.wrapR=yi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Hs{constructor(t=new B(1/0,1/0,1/0),e=new B(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e+=3)this.expandByPoint(pn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,i=t.count;e<i;e++)this.expandByPoint(pn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const i=pn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const i=t.geometry;if(i!==void 0){const r=i.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,pn):pn.fromBufferAttribute(r,a),pn.applyMatrix4(t.matrixWorld),this.expandByPoint(pn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Ks.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Ks.copy(i.boundingBox)),Ks.applyMatrix4(t.matrixWorld),this.union(Ks)}const s=t.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,pn),pn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,i;return t.normal.x>0?(e=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),e<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(_s),Zs.subVectors(this.max,_s),Ni.subVectors(t.a,_s),Oi.subVectors(t.b,_s),Bi.subVectors(t.c,_s),Wn.subVectors(Oi,Ni),Xn.subVectors(Bi,Oi),hi.subVectors(Ni,Bi);let e=[0,-Wn.z,Wn.y,0,-Xn.z,Xn.y,0,-hi.z,hi.y,Wn.z,0,-Wn.x,Xn.z,0,-Xn.x,hi.z,0,-hi.x,-Wn.y,Wn.x,0,-Xn.y,Xn.x,0,-hi.y,hi.x,0];return!ca(e,Ni,Oi,Bi,Zs)||(e=[1,0,0,0,1,0,0,0,1],!ca(e,Ni,Oi,Bi,Zs))?!1:(Js.crossVectors(Wn,Xn),e=[Js.x,Js.y,Js.z],ca(e,Ni,Oi,Bi,Zs))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,pn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(pn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Ln[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Ln[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Ln[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Ln[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Ln[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Ln[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Ln[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Ln[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Ln),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const Ln=[new B,new B,new B,new B,new B,new B,new B,new B],pn=new B,Ks=new Hs,Ni=new B,Oi=new B,Bi=new B,Wn=new B,Xn=new B,hi=new B,_s=new B,Zs=new B,Js=new B,ui=new B;function ca(n,t,e,i,s){for(let r=0,a=n.length-3;r<=a;r+=3){ui.fromArray(n,r);const o=s.x*Math.abs(ui.x)+s.y*Math.abs(ui.y)+s.z*Math.abs(ui.z),l=t.dot(ui),c=e.dot(ui),h=i.dot(ui);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}const td=new Hs,xs=new B,la=new B;class Gs{constructor(t=new B,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const i=this.center;e!==void 0?i.copy(e):td.setFromPoints(t).getCenter(i);let s=0;for(let r=0,a=t.length;r<a;r++)s=Math.max(s,i.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const i=this.center.distanceToSquared(t);return e.copy(t),i>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;xs.subVectors(t,this.center);const e=xs.lengthSq();if(e>this.radius*this.radius){const i=Math.sqrt(e),s=(i-this.radius)*.5;this.center.addScaledVector(xs,s/i),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(la.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(xs.copy(t.center).add(la)),this.expandByPoint(xs.copy(t.center).sub(la))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}const In=new B,ha=new B,Qs=new B,qn=new B,ua=new B,tr=new B,da=new B;class Vs{constructor(t=new B,e=new B(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,In)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const i=e.dot(this.direction);return i<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=In.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(In.copy(this.origin).addScaledVector(this.direction,e),In.distanceToSquared(t))}distanceSqToSegment(t,e,i,s){ha.copy(t).add(e).multiplyScalar(.5),Qs.copy(e).sub(t).normalize(),qn.copy(this.origin).sub(ha);const r=t.distanceTo(e)*.5,a=-this.direction.dot(Qs),o=qn.dot(this.direction),l=-qn.dot(Qs),c=qn.lengthSq(),h=Math.abs(1-a*a);let f,p,m,_;if(h>0)if(f=a*l-o,p=a*o-l,_=r*h,f>=0)if(p>=-_)if(p<=_){const x=1/h;f*=x,p*=x,m=f*(f+a*p+2*o)+p*(a*f+p+2*l)+c}else p=r,f=Math.max(0,-(a*p+o)),m=-f*f+p*(p+2*l)+c;else p=-r,f=Math.max(0,-(a*p+o)),m=-f*f+p*(p+2*l)+c;else p<=-_?(f=Math.max(0,-(-a*r+o)),p=f>0?-r:Math.min(Math.max(-r,-l),r),m=-f*f+p*(p+2*l)+c):p<=_?(f=0,p=Math.min(Math.max(-r,-l),r),m=p*(p+2*l)+c):(f=Math.max(0,-(a*r+o)),p=f>0?r:Math.min(Math.max(-r,-l),r),m=-f*f+p*(p+2*l)+c);else p=a>0?-r:r,f=Math.max(0,-(a*p+o)),m=-f*f+p*(p+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,f),s&&s.copy(ha).addScaledVector(Qs,p),m}intersectSphere(t,e){In.subVectors(t.center,this.origin);const i=In.dot(this.direction),s=In.dot(In)-i*i,r=t.radius*t.radius;if(s>r)return null;const a=Math.sqrt(r-s),o=i-a,l=i+a;return l<0?null:o<0?this.at(l,e):this.at(o,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(t.normal)+t.constant)/e;return i>=0?i:null}intersectPlane(t,e){const i=this.distanceToPlane(t);return i===null?null:this.at(i,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let i,s,r,a,o,l;const c=1/this.direction.x,h=1/this.direction.y,f=1/this.direction.z,p=this.origin;return c>=0?(i=(t.min.x-p.x)*c,s=(t.max.x-p.x)*c):(i=(t.max.x-p.x)*c,s=(t.min.x-p.x)*c),h>=0?(r=(t.min.y-p.y)*h,a=(t.max.y-p.y)*h):(r=(t.max.y-p.y)*h,a=(t.min.y-p.y)*h),i>a||r>s||((r>i||isNaN(i))&&(i=r),(a<s||isNaN(s))&&(s=a),f>=0?(o=(t.min.z-p.z)*f,l=(t.max.z-p.z)*f):(o=(t.max.z-p.z)*f,l=(t.min.z-p.z)*f),i>l||o>s)||((o>i||i!==i)&&(i=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,e)}intersectsBox(t){return this.intersectBox(t,In)!==null}intersectTriangle(t,e,i,s,r){ua.subVectors(e,t),tr.subVectors(i,t),da.crossVectors(ua,tr);let a=this.direction.dot(da),o;if(a>0){if(s)return null;o=1}else if(a<0)o=-1,a=-a;else return null;qn.subVectors(this.origin,t);const l=o*this.direction.dot(tr.crossVectors(qn,tr));if(l<0)return null;const c=o*this.direction.dot(ua.cross(qn));if(c<0||l+c>a)return null;const h=-o*qn.dot(da);return h<0?null:this.at(h/a,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ve{constructor(t,e,i,s,r,a,o,l,c,h,f,p,m,_,x,u){ve.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,i,s,r,a,o,l,c,h,f,p,m,_,x,u)}set(t,e,i,s,r,a,o,l,c,h,f,p,m,_,x,u){const d=this.elements;return d[0]=t,d[4]=e,d[8]=i,d[12]=s,d[1]=r,d[5]=a,d[9]=o,d[13]=l,d[2]=c,d[6]=h,d[10]=f,d[14]=p,d[3]=m,d[7]=_,d[11]=x,d[15]=u,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ve().fromArray(this.elements)}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],e[9]=i[9],e[10]=i[10],e[11]=i[11],e[12]=i[12],e[13]=i[13],e[14]=i[14],e[15]=i[15],this}copyPosition(t){const e=this.elements,i=t.elements;return e[12]=i[12],e[13]=i[13],e[14]=i[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,i){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(t,e,i){return this.set(t.x,e.x,i.x,0,t.y,e.y,i.y,0,t.z,e.z,i.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,i=t.elements,s=1/zi.setFromMatrixColumn(t,0).length(),r=1/zi.setFromMatrixColumn(t,1).length(),a=1/zi.setFromMatrixColumn(t,2).length();return e[0]=i[0]*s,e[1]=i[1]*s,e[2]=i[2]*s,e[3]=0,e[4]=i[4]*r,e[5]=i[5]*r,e[6]=i[6]*r,e[7]=0,e[8]=i[8]*a,e[9]=i[9]*a,e[10]=i[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,i=t.x,s=t.y,r=t.z,a=Math.cos(i),o=Math.sin(i),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),f=Math.sin(r);if(t.order==="XYZ"){const p=a*h,m=a*f,_=o*h,x=o*f;e[0]=l*h,e[4]=-l*f,e[8]=c,e[1]=m+_*c,e[5]=p-x*c,e[9]=-o*l,e[2]=x-p*c,e[6]=_+m*c,e[10]=a*l}else if(t.order==="YXZ"){const p=l*h,m=l*f,_=c*h,x=c*f;e[0]=p+x*o,e[4]=_*o-m,e[8]=a*c,e[1]=a*f,e[5]=a*h,e[9]=-o,e[2]=m*o-_,e[6]=x+p*o,e[10]=a*l}else if(t.order==="ZXY"){const p=l*h,m=l*f,_=c*h,x=c*f;e[0]=p-x*o,e[4]=-a*f,e[8]=_+m*o,e[1]=m+_*o,e[5]=a*h,e[9]=x-p*o,e[2]=-a*c,e[6]=o,e[10]=a*l}else if(t.order==="ZYX"){const p=a*h,m=a*f,_=o*h,x=o*f;e[0]=l*h,e[4]=_*c-m,e[8]=p*c+x,e[1]=l*f,e[5]=x*c+p,e[9]=m*c-_,e[2]=-c,e[6]=o*l,e[10]=a*l}else if(t.order==="YZX"){const p=a*l,m=a*c,_=o*l,x=o*c;e[0]=l*h,e[4]=x-p*f,e[8]=_*f+m,e[1]=f,e[5]=a*h,e[9]=-o*h,e[2]=-c*h,e[6]=m*f+_,e[10]=p-x*f}else if(t.order==="XZY"){const p=a*l,m=a*c,_=o*l,x=o*c;e[0]=l*h,e[4]=-f,e[8]=c*h,e[1]=p*f+x,e[5]=a*h,e[9]=m*f-_,e[2]=_*f-m,e[6]=o*h,e[10]=x*f+p}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(ed,t,nd)}lookAt(t,e,i){const s=this.elements;return Je.subVectors(t,e),Je.lengthSq()===0&&(Je.z=1),Je.normalize(),$n.crossVectors(i,Je),$n.lengthSq()===0&&(Math.abs(i.z)===1?Je.x+=1e-4:Je.z+=1e-4,Je.normalize(),$n.crossVectors(i,Je)),$n.normalize(),er.crossVectors(Je,$n),s[0]=$n.x,s[4]=er.x,s[8]=Je.x,s[1]=$n.y,s[5]=er.y,s[9]=Je.y,s[2]=$n.z,s[6]=er.z,s[10]=Je.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,s=e.elements,r=this.elements,a=i[0],o=i[4],l=i[8],c=i[12],h=i[1],f=i[5],p=i[9],m=i[13],_=i[2],x=i[6],u=i[10],d=i[14],b=i[3],v=i[7],g=i[11],T=i[15],S=s[0],A=s[4],w=s[8],y=s[12],M=s[1],C=s[5],I=s[9],N=s[13],L=s[2],U=s[6],k=s[10],F=s[14],O=s[3],Z=s[7],$=s[11],it=s[15];return r[0]=a*S+o*M+l*L+c*O,r[4]=a*A+o*C+l*U+c*Z,r[8]=a*w+o*I+l*k+c*$,r[12]=a*y+o*N+l*F+c*it,r[1]=h*S+f*M+p*L+m*O,r[5]=h*A+f*C+p*U+m*Z,r[9]=h*w+f*I+p*k+m*$,r[13]=h*y+f*N+p*F+m*it,r[2]=_*S+x*M+u*L+d*O,r[6]=_*A+x*C+u*U+d*Z,r[10]=_*w+x*I+u*k+d*$,r[14]=_*y+x*N+u*F+d*it,r[3]=b*S+v*M+g*L+T*O,r[7]=b*A+v*C+g*U+T*Z,r[11]=b*w+v*I+g*k+T*$,r[15]=b*y+v*N+g*F+T*it,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[4],s=t[8],r=t[12],a=t[1],o=t[5],l=t[9],c=t[13],h=t[2],f=t[6],p=t[10],m=t[14],_=t[3],x=t[7],u=t[11],d=t[15];return _*(+r*l*f-s*c*f-r*o*p+i*c*p+s*o*m-i*l*m)+x*(+e*l*m-e*c*p+r*a*p-s*a*m+s*c*h-r*l*h)+u*(+e*c*f-e*o*m-r*a*f+i*a*m+r*o*h-i*c*h)+d*(-s*o*h-e*l*f+e*o*p+s*a*f-i*a*p+i*l*h)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,i){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=i),this}invert(){const t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],f=t[9],p=t[10],m=t[11],_=t[12],x=t[13],u=t[14],d=t[15],b=f*u*c-x*p*c+x*l*m-o*u*m-f*l*d+o*p*d,v=_*p*c-h*u*c-_*l*m+a*u*m+h*l*d-a*p*d,g=h*x*c-_*f*c+_*o*m-a*x*m-h*o*d+a*f*d,T=_*f*l-h*x*l-_*o*p+a*x*p+h*o*u-a*f*u,S=e*b+i*v+s*g+r*T;if(S===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const A=1/S;return t[0]=b*A,t[1]=(x*p*r-f*u*r-x*s*m+i*u*m+f*s*d-i*p*d)*A,t[2]=(o*u*r-x*l*r+x*s*c-i*u*c-o*s*d+i*l*d)*A,t[3]=(f*l*r-o*p*r-f*s*c+i*p*c+o*s*m-i*l*m)*A,t[4]=v*A,t[5]=(h*u*r-_*p*r+_*s*m-e*u*m-h*s*d+e*p*d)*A,t[6]=(_*l*r-a*u*r-_*s*c+e*u*c+a*s*d-e*l*d)*A,t[7]=(a*p*r-h*l*r+h*s*c-e*p*c-a*s*m+e*l*m)*A,t[8]=g*A,t[9]=(_*f*r-h*x*r-_*i*m+e*x*m+h*i*d-e*f*d)*A,t[10]=(a*x*r-_*o*r+_*i*c-e*x*c-a*i*d+e*o*d)*A,t[11]=(h*o*r-a*f*r-h*i*c+e*f*c+a*i*m-e*o*m)*A,t[12]=T*A,t[13]=(h*x*s-_*f*s+_*i*p-e*x*p-h*i*u+e*f*u)*A,t[14]=(_*o*s-a*x*s-_*i*l+e*x*l+a*i*u-e*o*u)*A,t[15]=(a*f*s-h*o*s+h*i*l-e*f*l-a*i*p+e*o*p)*A,this}scale(t){const e=this.elements,i=t.x,s=t.y,r=t.z;return e[0]*=i,e[4]*=s,e[8]*=r,e[1]*=i,e[5]*=s,e[9]*=r,e[2]*=i,e[6]*=s,e[10]*=r,e[3]*=i,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,i,s))}makeTranslation(t,e,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,i,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,e,-i,0,0,i,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,0,i,0,0,1,0,0,-i,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,0,i,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const i=Math.cos(e),s=Math.sin(e),r=1-i,a=t.x,o=t.y,l=t.z,c=r*a,h=r*o;return this.set(c*a+i,c*o-s*l,c*l+s*o,0,c*o+s*l,h*o+i,h*l-s*a,0,c*l-s*o,h*l+s*a,r*l*l+i,0,0,0,0,1),this}makeScale(t,e,i){return this.set(t,0,0,0,0,e,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,e,i,s,r,a){return this.set(1,i,r,0,t,1,a,0,e,s,1,0,0,0,0,1),this}compose(t,e,i){const s=this.elements,r=e._x,a=e._y,o=e._z,l=e._w,c=r+r,h=a+a,f=o+o,p=r*c,m=r*h,_=r*f,x=a*h,u=a*f,d=o*f,b=l*c,v=l*h,g=l*f,T=i.x,S=i.y,A=i.z;return s[0]=(1-(x+d))*T,s[1]=(m+g)*T,s[2]=(_-v)*T,s[3]=0,s[4]=(m-g)*S,s[5]=(1-(p+d))*S,s[6]=(u+b)*S,s[7]=0,s[8]=(_+v)*A,s[9]=(u-b)*A,s[10]=(1-(p+x))*A,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,i){const s=this.elements;let r=zi.set(s[0],s[1],s[2]).length();const a=zi.set(s[4],s[5],s[6]).length(),o=zi.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],mn.copy(this);const c=1/r,h=1/a,f=1/o;return mn.elements[0]*=c,mn.elements[1]*=c,mn.elements[2]*=c,mn.elements[4]*=h,mn.elements[5]*=h,mn.elements[6]*=h,mn.elements[8]*=f,mn.elements[9]*=f,mn.elements[10]*=f,e.setFromRotationMatrix(mn),i.x=r,i.y=a,i.z=o,this}makePerspective(t,e,i,s,r,a,o=Rn,l=!1){const c=this.elements,h=2*r/(e-t),f=2*r/(i-s),p=(e+t)/(e-t),m=(i+s)/(i-s);let _,x;if(l)_=r/(a-r),x=a*r/(a-r);else if(o===Rn)_=-(a+r)/(a-r),x=-2*a*r/(a-r);else if(o===Br)_=-a/(a-r),x=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=p,c[12]=0,c[1]=0,c[5]=f,c[9]=m,c[13]=0,c[2]=0,c[6]=0,c[10]=_,c[14]=x,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,i,s,r,a,o=Rn,l=!1){const c=this.elements,h=2/(e-t),f=2/(i-s),p=-(e+t)/(e-t),m=-(i+s)/(i-s);let _,x;if(l)_=1/(a-r),x=a/(a-r);else if(o===Rn)_=-2/(a-r),x=-(a+r)/(a-r);else if(o===Br)_=-1/(a-r),x=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=0,c[12]=p,c[1]=0,c[5]=f,c[9]=0,c[13]=m,c[2]=0,c[6]=0,c[10]=_,c[14]=x,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){const e=this.elements,i=t.elements;for(let s=0;s<16;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<16;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t[e+9]=i[9],t[e+10]=i[10],t[e+11]=i[11],t[e+12]=i[12],t[e+13]=i[13],t[e+14]=i[14],t[e+15]=i[15],t}}const zi=new B,mn=new ve,ed=new B(0,0,0),nd=new B(1,1,1),$n=new B,er=new B,Je=new B,Sc=new ve,Ec=new ai;class Vn{constructor(t=0,e=0,i=0,s=Vn.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=i,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,i,s=this._order){return this._x=t,this._y=e,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,i=!0){const s=t.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],h=s[9],f=s[2],p=s[6],m=s[10];switch(e){case"XYZ":this._y=Math.asin(te(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,m),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(p,c),this._z=0);break;case"YXZ":this._x=Math.asin(-te(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,m),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,r),this._z=0);break;case"ZXY":this._x=Math.asin(te(p,-1,1)),Math.abs(p)<.9999999?(this._y=Math.atan2(-f,m),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-te(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(p,m),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(te(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-f,r)):(this._x=0,this._y=Math.atan2(o,m));break;case"XZY":this._z=Math.asin(-te(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(p,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,i){return Sc.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Sc,e,i)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Ec.setFromEuler(this),this.setFromQuaternion(Ec,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Vn.DEFAULT_ORDER="XYZ";class Ko{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let id=0;const bc=new B,ki=new ai,Un=new ve,nr=new B,Ms=new B,sd=new B,rd=new ai,Tc=new B(1,0,0),Ac=new B(0,1,0),wc=new B(0,0,1),Rc={type:"added"},ad={type:"removed"},Hi={type:"childadded",child:null},fa={type:"childremoved",child:null};class Be extends Pi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:id++}),this.uuid=kn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Be.DEFAULT_UP.clone();const t=new B,e=new Vn,i=new ai,s=new B(1,1,1);function r(){i.setFromEuler(e,!1)}function a(){e.setFromQuaternion(i,void 0,!1)}e._onChange(r),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new ve},normalMatrix:{value:new Jt}}),this.matrix=new ve,this.matrixWorld=new ve,this.matrixAutoUpdate=Be.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Be.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Ko,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return ki.setFromAxisAngle(t,e),this.quaternion.multiply(ki),this}rotateOnWorldAxis(t,e){return ki.setFromAxisAngle(t,e),this.quaternion.premultiply(ki),this}rotateX(t){return this.rotateOnAxis(Tc,t)}rotateY(t){return this.rotateOnAxis(Ac,t)}rotateZ(t){return this.rotateOnAxis(wc,t)}translateOnAxis(t,e){return bc.copy(t).applyQuaternion(this.quaternion),this.position.add(bc.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Tc,t)}translateY(t){return this.translateOnAxis(Ac,t)}translateZ(t){return this.translateOnAxis(wc,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Un.copy(this.matrixWorld).invert())}lookAt(t,e,i){t.isVector3?nr.copy(t):nr.set(t,e,i);const s=this.parent;this.updateWorldMatrix(!0,!1),Ms.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Un.lookAt(Ms,nr,this.up):Un.lookAt(nr,Ms,this.up),this.quaternion.setFromRotationMatrix(Un),s&&(Un.extractRotation(s.matrixWorld),ki.setFromRotationMatrix(Un),this.quaternion.premultiply(ki.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Rc),Hi.child=t,this.dispatchEvent(Hi),Hi.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(ad),fa.child=t,this.dispatchEvent(fa),fa.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Un.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Un.multiply(t.parent.matrixWorld)),t.applyMatrix4(Un),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Rc),Hi.child=t,this.dispatchEvent(Hi),Hi.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let i=0,s=this.children.length;i<s;i++){const a=this.children[i].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,i=[]){this[t]===e&&i.push(this);const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(t,e,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ms,t,sd),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ms,rd,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].updateMatrixWorld(t)}updateWorldMatrix(t,e){const i=this.parent;if(t===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",i={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const f=l[c];r(t.shapes,f)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(t.materials,this.material[l]));s.material=o}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];s.animations.push(r(t.animations,l))}}if(e){const o=a(t.geometries),l=a(t.materials),c=a(t.textures),h=a(t.images),f=a(t.shapes),p=a(t.skeletons),m=a(t.animations),_=a(t.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),h.length>0&&(i.images=h),f.length>0&&(i.shapes=f),p.length>0&&(i.skeletons=p),m.length>0&&(i.animations=m),_.length>0&&(i.nodes=_)}return i.object=s,i;function a(o){const l=[];for(const c in o){const h=o[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let i=0;i<t.children.length;i++){const s=t.children[i];this.add(s.clone())}return this}}Be.DEFAULT_UP=new B(0,1,0);Be.DEFAULT_MATRIX_AUTO_UPDATE=!0;Be.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const gn=new B,Fn=new B,pa=new B,Nn=new B,Gi=new B,Vi=new B,Cc=new B,ma=new B,ga=new B,_a=new B,xa=new Ee,Ma=new Ee,va=new Ee;class ln{constructor(t=new B,e=new B,i=new B){this.a=t,this.b=e,this.c=i}static getNormal(t,e,i,s){s.subVectors(i,e),gn.subVectors(t,e),s.cross(gn);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,i,s,r){gn.subVectors(s,e),Fn.subVectors(i,e),pa.subVectors(t,e);const a=gn.dot(gn),o=gn.dot(Fn),l=gn.dot(pa),c=Fn.dot(Fn),h=Fn.dot(pa),f=a*c-o*o;if(f===0)return r.set(0,0,0),null;const p=1/f,m=(c*l-o*h)*p,_=(a*h-o*l)*p;return r.set(1-m-_,_,m)}static containsPoint(t,e,i,s){return this.getBarycoord(t,e,i,s,Nn)===null?!1:Nn.x>=0&&Nn.y>=0&&Nn.x+Nn.y<=1}static getInterpolation(t,e,i,s,r,a,o,l){return this.getBarycoord(t,e,i,s,Nn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Nn.x),l.addScaledVector(a,Nn.y),l.addScaledVector(o,Nn.z),l)}static getInterpolatedAttribute(t,e,i,s,r,a){return xa.setScalar(0),Ma.setScalar(0),va.setScalar(0),xa.fromBufferAttribute(t,e),Ma.fromBufferAttribute(t,i),va.fromBufferAttribute(t,s),a.setScalar(0),a.addScaledVector(xa,r.x),a.addScaledVector(Ma,r.y),a.addScaledVector(va,r.z),a}static isFrontFacing(t,e,i,s){return gn.subVectors(i,e),Fn.subVectors(t,e),gn.cross(Fn).dot(s)<0}set(t,e,i){return this.a.copy(t),this.b.copy(e),this.c.copy(i),this}setFromPointsAndIndices(t,e,i,s){return this.a.copy(t[e]),this.b.copy(t[i]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,i,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return gn.subVectors(this.c,this.b),Fn.subVectors(this.a,this.b),gn.cross(Fn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return ln.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return ln.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,i,s,r){return ln.getInterpolation(t,this.a,this.b,this.c,e,i,s,r)}containsPoint(t){return ln.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return ln.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const i=this.a,s=this.b,r=this.c;let a,o;Gi.subVectors(s,i),Vi.subVectors(r,i),ma.subVectors(t,i);const l=Gi.dot(ma),c=Vi.dot(ma);if(l<=0&&c<=0)return e.copy(i);ga.subVectors(t,s);const h=Gi.dot(ga),f=Vi.dot(ga);if(h>=0&&f<=h)return e.copy(s);const p=l*f-h*c;if(p<=0&&l>=0&&h<=0)return a=l/(l-h),e.copy(i).addScaledVector(Gi,a);_a.subVectors(t,r);const m=Gi.dot(_a),_=Vi.dot(_a);if(_>=0&&m<=_)return e.copy(r);const x=m*c-l*_;if(x<=0&&c>=0&&_<=0)return o=c/(c-_),e.copy(i).addScaledVector(Vi,o);const u=h*_-m*f;if(u<=0&&f-h>=0&&m-_>=0)return Cc.subVectors(r,s),o=(f-h)/(f-h+(m-_)),e.copy(s).addScaledVector(Cc,o);const d=1/(u+x+p);return a=x*d,o=p*d,e.copy(i).addScaledVector(Gi,a).addScaledVector(Vi,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const Zl={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Yn={h:0,s:0,l:0},ir={h:0,s:0,l:0};function ya(n,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?n+(t-n)*6*e:e<1/2?t:e<2/3?n+(t-n)*6*(2/3-e):n}class Ht{constructor(t,e,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,i)}set(t,e,i){if(e===void 0&&i===void 0){const s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Fe){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,ce.colorSpaceToWorking(this,e),this}setRGB(t,e,i,s=ce.workingColorSpace){return this.r=t,this.g=e,this.b=i,ce.colorSpaceToWorking(this,s),this}setHSL(t,e,i,s=ce.workingColorSpace){if(t=Yo(t,1),e=te(e,0,1),i=te(i,0,1),e===0)this.r=this.g=this.b=i;else{const r=i<=.5?i*(1+e):i+e-i*e,a=2*i-r;this.r=ya(a,r,t+1/3),this.g=ya(a,r,t),this.b=ya(a,r,t-1/3)}return ce.colorSpaceToWorking(this,s),this}setStyle(t,e=Fe){function i(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Fe){const i=Zl[t.toLowerCase()];return i!==void 0?this.setHex(i,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Hn(t.r),this.g=Hn(t.g),this.b=Hn(t.b),this}copyLinearToSRGB(t){return this.r=rs(t.r),this.g=rs(t.g),this.b=rs(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Fe){return ce.workingToColorSpace(Oe.copy(this),t),Math.round(te(Oe.r*255,0,255))*65536+Math.round(te(Oe.g*255,0,255))*256+Math.round(te(Oe.b*255,0,255))}getHexString(t=Fe){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=ce.workingColorSpace){ce.workingToColorSpace(Oe.copy(this),e);const i=Oe.r,s=Oe.g,r=Oe.b,a=Math.max(i,s,r),o=Math.min(i,s,r);let l,c;const h=(o+a)/2;if(o===a)l=0,c=0;else{const f=a-o;switch(c=h<=.5?f/(a+o):f/(2-a-o),a){case i:l=(s-r)/f+(s<r?6:0);break;case s:l=(r-i)/f+2;break;case r:l=(i-s)/f+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=ce.workingColorSpace){return ce.workingToColorSpace(Oe.copy(this),e),t.r=Oe.r,t.g=Oe.g,t.b=Oe.b,t}getStyle(t=Fe){ce.workingToColorSpace(Oe.copy(this),t);const e=Oe.r,i=Oe.g,s=Oe.b;return t!==Fe?`color(${t} ${e.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(t,e,i){return this.getHSL(Yn),this.setHSL(Yn.h+t,Yn.s+e,Yn.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,i){return this.r=t.r+(e.r-t.r)*i,this.g=t.g+(e.g-t.g)*i,this.b=t.b+(e.b-t.b)*i,this}lerpHSL(t,e){this.getHSL(Yn),t.getHSL(ir);const i=Ps(Yn.h,ir.h,e),s=Ps(Yn.s,ir.s,e),r=Ps(Yn.l,ir.l,e);return this.setHSL(i,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,i=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*i+r[6]*s,this.g=r[1]*e+r[4]*i+r[7]*s,this.b=r[2]*e+r[5]*i+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Oe=new Ht;Ht.NAMES=Zl;let od=0;class Di extends Pi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:od++}),this.uuid=kn(),this.name="",this.type="Material",this.blending=bi,this.side=ri,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=za,this.blendDst=ka,this.blendEquation=Mi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ht(0,0,0),this.blendAlpha=0,this.depthFunc=ls,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=mc,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ui,this.stencilZFail=Ui,this.stencilZPass=Ui,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const i=t[e];if(i===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[e]=i}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==bi&&(i.blending=this.blending),this.side!==ri&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==za&&(i.blendSrc=this.blendSrc),this.blendDst!==ka&&(i.blendDst=this.blendDst),this.blendEquation!==Mi&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==ls&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==mc&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ui&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Ui&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Ui&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){const a=[];for(const o in r){const l=r[o];delete l.metadata,a.push(l)}return a}if(e){const r=s(t.textures),a=s(t.images);r.length>0&&(i.textures=r),a.length>0&&(i.images=a)}return i}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let i=null;if(e!==null){const s=e.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=e[r].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class Ws extends Di{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ht(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Vn,this.combine=Ol,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const be=new B,sr=new Vt;let cd=0;class ee{constructor(t,e,i=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:cd++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=i,this.usage=wo,this.updateRanges=[],this.gpuType=zn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,i){t*=this.itemSize,i*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[i+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,i=this.count;e<i;e++)sr.fromBufferAttribute(this,e),sr.applyMatrix3(t),this.setXY(e,sr.x,sr.y);else if(this.itemSize===3)for(let e=0,i=this.count;e<i;e++)be.fromBufferAttribute(this,e),be.applyMatrix3(t),this.setXYZ(e,be.x,be.y,be.z);return this}applyMatrix4(t){for(let e=0,i=this.count;e<i;e++)be.fromBufferAttribute(this,e),be.applyMatrix4(t),this.setXYZ(e,be.x,be.y,be.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)be.fromBufferAttribute(this,e),be.applyNormalMatrix(t),this.setXYZ(e,be.x,be.y,be.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)be.fromBufferAttribute(this,e),be.transformDirection(t),this.setXYZ(e,be.x,be.y,be.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let i=this.array[t*this.itemSize+e];return this.normalized&&(i=Mn(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=ue(i,this.array)),this.array[t*this.itemSize+e]=i,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Mn(e,this.array)),e}setX(t,e){return this.normalized&&(e=ue(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Mn(e,this.array)),e}setY(t,e){return this.normalized&&(e=ue(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Mn(e,this.array)),e}setZ(t,e){return this.normalized&&(e=ue(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Mn(e,this.array)),e}setW(t,e){return this.normalized&&(e=ue(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,i){return t*=this.itemSize,this.normalized&&(e=ue(e,this.array),i=ue(i,this.array)),this.array[t+0]=e,this.array[t+1]=i,this}setXYZ(t,e,i,s){return t*=this.itemSize,this.normalized&&(e=ue(e,this.array),i=ue(i,this.array),s=ue(s,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this}setXYZW(t,e,i,s,r){return t*=this.itemSize,this.normalized&&(e=ue(e,this.array),i=ue(i,this.array),s=ue(s,this.array),r=ue(r,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==wo&&(t.usage=this.usage),t}}class Jl extends ee{constructor(t,e,i){super(new Uint16Array(t),e,i)}}class Ql extends ee{constructor(t,e,i){super(new Uint32Array(t),e,i)}}class we extends ee{constructor(t,e,i){super(new Float32Array(t),e,i)}}let ld=0;const sn=new ve,Sa=new Be,Wi=new B,Qe=new Hs,vs=new Hs,Ie=new B;class ie extends Pi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:ld++}),this.uuid=kn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(jl(t)?Ql:Jl)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,i=0){this.groups.push({start:t,count:e,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const r=new Jt().getNormalMatrix(t);i.applyNormalMatrix(r),i.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return sn.makeRotationFromQuaternion(t),this.applyMatrix4(sn),this}rotateX(t){return sn.makeRotationX(t),this.applyMatrix4(sn),this}rotateY(t){return sn.makeRotationY(t),this.applyMatrix4(sn),this}rotateZ(t){return sn.makeRotationZ(t),this.applyMatrix4(sn),this}translate(t,e,i){return sn.makeTranslation(t,e,i),this.applyMatrix4(sn),this}scale(t,e,i){return sn.makeScale(t,e,i),this.applyMatrix4(sn),this}lookAt(t){return Sa.lookAt(t),Sa.updateMatrix(),this.applyMatrix4(Sa.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Wi).negate(),this.translate(Wi.x,Wi.y,Wi.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const i=[];for(let s=0,r=t.length;s<r;s++){const a=t[s];i.push(a.x,a.y,a.z||0)}this.setAttribute("position",new we(i,3))}else{const i=Math.min(t.length,e.count);for(let s=0;s<i;s++){const r=t[s];e.setXYZ(s,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Hs);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new B(-1/0,-1/0,-1/0),new B(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let i=0,s=e.length;i<s;i++){const r=e[i];Qe.setFromBufferAttribute(r),this.morphTargetsRelative?(Ie.addVectors(this.boundingBox.min,Qe.min),this.boundingBox.expandByPoint(Ie),Ie.addVectors(this.boundingBox.max,Qe.max),this.boundingBox.expandByPoint(Ie)):(this.boundingBox.expandByPoint(Qe.min),this.boundingBox.expandByPoint(Qe.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Gs);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new B,1/0);return}if(t){const i=this.boundingSphere.center;if(Qe.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){const o=e[r];vs.setFromBufferAttribute(o),this.morphTargetsRelative?(Ie.addVectors(Qe.min,vs.min),Qe.expandByPoint(Ie),Ie.addVectors(Qe.max,vs.max),Qe.expandByPoint(Ie)):(Qe.expandByPoint(vs.min),Qe.expandByPoint(vs.max))}Qe.getCenter(i);let s=0;for(let r=0,a=t.count;r<a;r++)Ie.fromBufferAttribute(t,r),s=Math.max(s,i.distanceToSquared(Ie));if(e)for(let r=0,a=e.length;r<a;r++){const o=e[r],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)Ie.fromBufferAttribute(o,c),l&&(Wi.fromBufferAttribute(t,c),Ie.add(Wi)),s=Math.max(s,i.distanceToSquared(Ie))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new ee(new Float32Array(4*i.count),4));const a=this.getAttribute("tangent"),o=[],l=[];for(let w=0;w<i.count;w++)o[w]=new B,l[w]=new B;const c=new B,h=new B,f=new B,p=new Vt,m=new Vt,_=new Vt,x=new B,u=new B;function d(w,y,M){c.fromBufferAttribute(i,w),h.fromBufferAttribute(i,y),f.fromBufferAttribute(i,M),p.fromBufferAttribute(r,w),m.fromBufferAttribute(r,y),_.fromBufferAttribute(r,M),h.sub(c),f.sub(c),m.sub(p),_.sub(p);const C=1/(m.x*_.y-_.x*m.y);isFinite(C)&&(x.copy(h).multiplyScalar(_.y).addScaledVector(f,-m.y).multiplyScalar(C),u.copy(f).multiplyScalar(m.x).addScaledVector(h,-_.x).multiplyScalar(C),o[w].add(x),o[y].add(x),o[M].add(x),l[w].add(u),l[y].add(u),l[M].add(u))}let b=this.groups;b.length===0&&(b=[{start:0,count:t.count}]);for(let w=0,y=b.length;w<y;++w){const M=b[w],C=M.start,I=M.count;for(let N=C,L=C+I;N<L;N+=3)d(t.getX(N+0),t.getX(N+1),t.getX(N+2))}const v=new B,g=new B,T=new B,S=new B;function A(w){T.fromBufferAttribute(s,w),S.copy(T);const y=o[w];v.copy(y),v.sub(T.multiplyScalar(T.dot(y))).normalize(),g.crossVectors(S,y);const C=g.dot(l[w])<0?-1:1;a.setXYZW(w,v.x,v.y,v.z,C)}for(let w=0,y=b.length;w<y;++w){const M=b[w],C=M.start,I=M.count;for(let N=C,L=C+I;N<L;N+=3)A(t.getX(N+0)),A(t.getX(N+1)),A(t.getX(N+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new ee(new Float32Array(e.count*3),3),this.setAttribute("normal",i);else for(let p=0,m=i.count;p<m;p++)i.setXYZ(p,0,0,0);const s=new B,r=new B,a=new B,o=new B,l=new B,c=new B,h=new B,f=new B;if(t)for(let p=0,m=t.count;p<m;p+=3){const _=t.getX(p+0),x=t.getX(p+1),u=t.getX(p+2);s.fromBufferAttribute(e,_),r.fromBufferAttribute(e,x),a.fromBufferAttribute(e,u),h.subVectors(a,r),f.subVectors(s,r),h.cross(f),o.fromBufferAttribute(i,_),l.fromBufferAttribute(i,x),c.fromBufferAttribute(i,u),o.add(h),l.add(h),c.add(h),i.setXYZ(_,o.x,o.y,o.z),i.setXYZ(x,l.x,l.y,l.z),i.setXYZ(u,c.x,c.y,c.z)}else for(let p=0,m=e.count;p<m;p+=3)s.fromBufferAttribute(e,p+0),r.fromBufferAttribute(e,p+1),a.fromBufferAttribute(e,p+2),h.subVectors(a,r),f.subVectors(s,r),h.cross(f),i.setXYZ(p+0,h.x,h.y,h.z),i.setXYZ(p+1,h.x,h.y,h.z),i.setXYZ(p+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,i=t.count;e<i;e++)Ie.fromBufferAttribute(t,e),Ie.normalize(),t.setXYZ(e,Ie.x,Ie.y,Ie.z)}toNonIndexed(){function t(o,l){const c=o.array,h=o.itemSize,f=o.normalized,p=new c.constructor(l.length*h);let m=0,_=0;for(let x=0,u=l.length;x<u;x++){o.isInterleavedBufferAttribute?m=l[x]*o.data.stride+o.offset:m=l[x]*h;for(let d=0;d<h;d++)p[_++]=c[m++]}return new ee(p,h,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new ie,i=this.index.array,s=this.attributes;for(const o in s){const l=s[o],c=t(l,i);e.setAttribute(o,c)}const r=this.morphAttributes;for(const o in r){const l=[],c=r[o];for(let h=0,f=c.length;h<f;h++){const p=c[h],m=t(p,i);l.push(m)}e.morphAttributes[o]=l}e.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const i=this.attributes;for(const l in i){const c=i[l];t.data.attributes[l]=c.toJSON(t.data)}const s={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let f=0,p=c.length;f<p;f++){const m=c[f];h.push(m.toJSON(t.data))}h.length>0&&(s[l]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(t.data.boundingSphere=o.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const i=t.index;i!==null&&this.setIndex(i.clone());const s=t.attributes;for(const c in s){const h=s[c];this.setAttribute(c,h.clone(e))}const r=t.morphAttributes;for(const c in r){const h=[],f=r[c];for(let p=0,m=f.length;p<m;p++)h.push(f[p].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;const a=t.groups;for(let c=0,h=a.length;c<h;c++){const f=a[c];this.addGroup(f.start,f.count,f.materialIndex)}const o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Pc=new ve,di=new Vs,rr=new Gs,Dc=new B,ar=new B,or=new B,cr=new B,Ea=new B,lr=new B,Lc=new B,hr=new B;class hn extends Be{constructor(t=new ie,e=new Ws){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){const i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,a=i.morphTargetsRelative;e.fromBufferAttribute(s,t);const o=this.morphTargetInfluences;if(r&&o){lr.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const h=o[l],f=r[l];h!==0&&(Ea.fromBufferAttribute(f,t),a?lr.addScaledVector(Ea,h):lr.addScaledVector(Ea.sub(e),h))}e.add(lr)}return e}raycast(t,e){const i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),rr.copy(i.boundingSphere),rr.applyMatrix4(r),di.copy(t.ray).recast(t.near),!(rr.containsPoint(di.origin)===!1&&(di.intersectSphere(rr,Dc)===null||di.origin.distanceToSquared(Dc)>(t.far-t.near)**2))&&(Pc.copy(r).invert(),di.copy(t.ray).applyMatrix4(Pc),!(i.boundingBox!==null&&di.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,e,di)))}_computeIntersections(t,e,i){let s;const r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,f=r.attributes.normal,p=r.groups,m=r.drawRange;if(o!==null)if(Array.isArray(a))for(let _=0,x=p.length;_<x;_++){const u=p[_],d=a[u.materialIndex],b=Math.max(u.start,m.start),v=Math.min(o.count,Math.min(u.start+u.count,m.start+m.count));for(let g=b,T=v;g<T;g+=3){const S=o.getX(g),A=o.getX(g+1),w=o.getX(g+2);s=ur(this,d,t,i,c,h,f,S,A,w),s&&(s.faceIndex=Math.floor(g/3),s.face.materialIndex=u.materialIndex,e.push(s))}}else{const _=Math.max(0,m.start),x=Math.min(o.count,m.start+m.count);for(let u=_,d=x;u<d;u+=3){const b=o.getX(u),v=o.getX(u+1),g=o.getX(u+2);s=ur(this,a,t,i,c,h,f,b,v,g),s&&(s.faceIndex=Math.floor(u/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let _=0,x=p.length;_<x;_++){const u=p[_],d=a[u.materialIndex],b=Math.max(u.start,m.start),v=Math.min(l.count,Math.min(u.start+u.count,m.start+m.count));for(let g=b,T=v;g<T;g+=3){const S=g,A=g+1,w=g+2;s=ur(this,d,t,i,c,h,f,S,A,w),s&&(s.faceIndex=Math.floor(g/3),s.face.materialIndex=u.materialIndex,e.push(s))}}else{const _=Math.max(0,m.start),x=Math.min(l.count,m.start+m.count);for(let u=_,d=x;u<d;u+=3){const b=u,v=u+1,g=u+2;s=ur(this,a,t,i,c,h,f,b,v,g),s&&(s.faceIndex=Math.floor(u/3),e.push(s))}}}}function hd(n,t,e,i,s,r,a,o){let l;if(t.side===je?l=i.intersectTriangle(a,r,s,!0,o):l=i.intersectTriangle(s,r,a,t.side===ri,o),l===null)return null;hr.copy(o),hr.applyMatrix4(n.matrixWorld);const c=e.ray.origin.distanceTo(hr);return c<e.near||c>e.far?null:{distance:c,point:hr.clone(),object:n}}function ur(n,t,e,i,s,r,a,o,l,c){n.getVertexPosition(o,ar),n.getVertexPosition(l,or),n.getVertexPosition(c,cr);const h=hd(n,t,e,i,ar,or,cr,Lc);if(h){const f=new B;ln.getBarycoord(Lc,ar,or,cr,f),s&&(h.uv=ln.getInterpolatedAttribute(s,o,l,c,f,new Vt)),r&&(h.uv1=ln.getInterpolatedAttribute(r,o,l,c,f,new Vt)),a&&(h.normal=ln.getInterpolatedAttribute(a,o,l,c,f,new B),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));const p={a:o,b:l,c,normal:new B,materialIndex:0};ln.getNormal(ar,or,cr,p.normal),h.face=p,h.barycoord=f}return h}class Xs extends ie{constructor(t=1,e=1,i=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:i,widthSegments:s,heightSegments:r,depthSegments:a};const o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);const l=[],c=[],h=[],f=[];let p=0,m=0;_("z","y","x",-1,-1,i,e,t,a,r,0),_("z","y","x",1,-1,i,e,-t,a,r,1),_("x","z","y",1,1,t,i,e,s,a,2),_("x","z","y",1,-1,t,i,-e,s,a,3),_("x","y","z",1,-1,t,e,i,s,r,4),_("x","y","z",-1,-1,t,e,-i,s,r,5),this.setIndex(l),this.setAttribute("position",new we(c,3)),this.setAttribute("normal",new we(h,3)),this.setAttribute("uv",new we(f,2));function _(x,u,d,b,v,g,T,S,A,w,y){const M=g/A,C=T/w,I=g/2,N=T/2,L=S/2,U=A+1,k=w+1;let F=0,O=0;const Z=new B;for(let $=0;$<k;$++){const it=$*C-N;for(let mt=0;mt<U;mt++){const Ct=mt*M-I;Z[x]=Ct*b,Z[u]=it*v,Z[d]=L,c.push(Z.x,Z.y,Z.z),Z[x]=0,Z[u]=0,Z[d]=S>0?1:-1,h.push(Z.x,Z.y,Z.z),f.push(mt/A),f.push(1-$/w),F+=1}}for(let $=0;$<w;$++)for(let it=0;it<A;it++){const mt=p+it+U*$,Ct=p+it+U*($+1),et=p+(it+1)+U*($+1),Q=p+(it+1)+U*$;l.push(mt,Ct,Q),l.push(Ct,et,Q),O+=6}o.addGroup(m,O,y),m+=O,p+=F}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Xs(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function fs(n){const t={};for(const e in n){t[e]={};for(const i in n[e]){const s=n[e][i];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][i]=null):t[e][i]=s.clone():Array.isArray(s)?t[e][i]=s.slice():t[e][i]=s}}return t}function He(n){const t={};for(let e=0;e<n.length;e++){const i=fs(n[e]);for(const s in i)t[s]=i[s]}return t}function ud(n){const t=[];for(let e=0;e<n.length;e++)t.push(n[e].clone());return t}function th(n){const t=n.getRenderTarget();return t===null?n.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:ce.workingColorSpace}const dd={clone:fs,merge:He};var fd=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,pd=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class oi extends Di{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=fd,this.fragmentShader=pd,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=fs(t.uniforms),this.uniformsGroups=ud(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const s in this.uniforms){const a=this.uniforms[s].value;a&&a.isTexture?e.uniforms[s]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[s]={type:"m4",value:a.toArray()}:e.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const i={};for(const s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(e.extensions=i),e}}class eh extends Be{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ve,this.projectionMatrix=new ve,this.projectionMatrixInverse=new ve,this.coordinateSystem=Rn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const jn=new B,Ic=new Vt,Uc=new Vt;class cn extends eh{constructor(t=50,e=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=Ns*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Cs*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Ns*2*Math.atan(Math.tan(Cs*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,i){jn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(jn.x,jn.y).multiplyScalar(-t/jn.z),jn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(jn.x,jn.y).multiplyScalar(-t/jn.z)}getViewSize(t,e){return this.getViewBounds(t,Ic,Uc),e.subVectors(Uc,Ic)}setViewOffset(t,e,i,s,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(Cs*.5*this.fov)/this.zoom,i=2*e,s=this.aspect*i,r=-.5*s;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,e-=a.offsetY*i/c,s*=a.width/l,i*=a.height/c}const o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-i,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const Xi=-90,qi=1;class md extends Be{constructor(t,e,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new cn(Xi,qi,t,e);s.layers=this.layers,this.add(s);const r=new cn(Xi,qi,t,e);r.layers=this.layers,this.add(r);const a=new cn(Xi,qi,t,e);a.layers=this.layers,this.add(a);const o=new cn(Xi,qi,t,e);o.layers=this.layers,this.add(o);const l=new cn(Xi,qi,t,e);l.layers=this.layers,this.add(l);const c=new cn(Xi,qi,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[i,s,r,a,o,l]=e;for(const c of e)this.remove(c);if(t===Rn)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Br)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,a,o,l,c,h]=this.children,f=t.getRenderTarget(),p=t.getActiveCubeFace(),m=t.getActiveMipmapLevel(),_=t.xr.enabled;t.xr.enabled=!1;const x=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,t.setRenderTarget(i,0,s),t.render(e,r),t.setRenderTarget(i,1,s),t.render(e,a),t.setRenderTarget(i,2,s),t.render(e,o),t.setRenderTarget(i,3,s),t.render(e,l),t.setRenderTarget(i,4,s),t.render(e,c),i.texture.generateMipmaps=x,t.setRenderTarget(i,5,s),t.render(e,h),t.setRenderTarget(f,p,m),t.xr.enabled=_,i.texture.needsPMREMUpdate=!0}}class nh extends Xe{constructor(t=[],e=hs,i,s,r,a,o,l,c,h){super(t,e,i,s,r,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class gd extends wi{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const i={width:t,height:t,depth:1},s=[i,i,i,i,i,i];this.texture=new nh(s),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Xs(5,5,5),r=new oi({name:"CubemapFromEquirect",uniforms:fs(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:je,blending:ni});r.uniforms.tEquirect.value=e;const a=new hn(s,r),o=e.minFilter;return e.minFilter===ti&&(e.minFilter=vn),new md(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e=!0,i=!0,s=!0){const r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,i,s);t.setRenderTarget(r)}}class We extends Be{constructor(){super(),this.isGroup=!0,this.type="Group"}}const _d={type:"move"};class ba{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new We,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new We,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new B,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new B),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new We,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new B,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new B),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const i of t.hand.values())this._getHandJoint(e,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,i){let s=null,r=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){a=!0;for(const x of t.hand.values()){const u=e.getJointPose(x,i),d=this._getHandJoint(c,x);u!==null&&(d.matrix.fromArray(u.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=u.radius),d.visible=u!==null}const h=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],p=h.position.distanceTo(f.position),m=.02,_=.005;c.inputState.pinching&&p>m+_?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&p<=m-_&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(s=e.getPose(t.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(_d)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const i=new We;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[e.jointName]=i,t.add(i)}return t.joints[e.jointName]}}class Zo{constructor(t,e=25e-5){this.isFogExp2=!0,this.name="",this.color=new Ht(t),this.density=e}clone(){return new Zo(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class xd extends Be{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Vn,this.environmentIntensity=1,this.environmentRotation=new Vn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class Md{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=wo,this.updateRanges=[],this.version=0,this.uuid=kn()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,i){t*=this.stride,i*=e.stride;for(let s=0,r=this.stride;s<r;s++)this.array[t+s]=e.array[i+s];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=kn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(e,this.stride);return i.setUsage(this.usage),i}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=kn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const ke=new B;class kr{constructor(t,e,i,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=i,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,i=this.data.count;e<i;e++)ke.fromBufferAttribute(this,e),ke.applyMatrix4(t),this.setXYZ(e,ke.x,ke.y,ke.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)ke.fromBufferAttribute(this,e),ke.applyNormalMatrix(t),this.setXYZ(e,ke.x,ke.y,ke.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)ke.fromBufferAttribute(this,e),ke.transformDirection(t),this.setXYZ(e,ke.x,ke.y,ke.z);return this}getComponent(t,e){let i=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(i=Mn(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=ue(i,this.array)),this.data.array[t*this.data.stride+this.offset+e]=i,this}setX(t,e){return this.normalized&&(e=ue(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=ue(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=ue(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=ue(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=Mn(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=Mn(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=Mn(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=Mn(e,this.array)),e}setXY(t,e,i){return t=t*this.data.stride+this.offset,this.normalized&&(e=ue(e,this.array),i=ue(i,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this}setXYZ(t,e,i,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=ue(e,this.array),i=ue(i,this.array),s=ue(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this.data.array[t+2]=s,this}setXYZW(t,e,i,s,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=ue(e,this.array),i=ue(i,this.array),s=ue(s,this.array),r=ue(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this.data.array[t+2]=s,this.data.array[t+3]=r,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let i=0;i<this.count;i++){const s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return new ee(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new kr(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let i=0;i<this.count;i++){const s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class oe extends Di{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Ht(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}let $i;const ys=new B,Yi=new B,ji=new B,Ki=new Vt,Ss=new Vt,ih=new ve,dr=new B,Es=new B,fr=new B,Fc=new Vt,Ta=new Vt,Nc=new Vt;class le extends Be{constructor(t=new oe){if(super(),this.isSprite=!0,this.type="Sprite",$i===void 0){$i=new ie;const e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new Md(e,5);$i.setIndex([0,1,2,0,2,3]),$i.setAttribute("position",new kr(i,3,0,!1)),$i.setAttribute("uv",new kr(i,2,3,!1))}this.geometry=$i,this.material=t,this.center=new Vt(.5,.5),this.count=1}raycast(t,e){t.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Yi.setFromMatrixScale(this.matrixWorld),ih.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),ji.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Yi.multiplyScalar(-ji.z);const i=this.material.rotation;let s,r;i!==0&&(r=Math.cos(i),s=Math.sin(i));const a=this.center;pr(dr.set(-.5,-.5,0),ji,a,Yi,s,r),pr(Es.set(.5,-.5,0),ji,a,Yi,s,r),pr(fr.set(.5,.5,0),ji,a,Yi,s,r),Fc.set(0,0),Ta.set(1,0),Nc.set(1,1);let o=t.ray.intersectTriangle(dr,Es,fr,!1,ys);if(o===null&&(pr(Es.set(-.5,.5,0),ji,a,Yi,s,r),Ta.set(0,1),o=t.ray.intersectTriangle(dr,fr,Es,!1,ys),o===null))return;const l=t.ray.origin.distanceTo(ys);l<t.near||l>t.far||e.push({distance:l,point:ys.clone(),uv:ln.getInterpolation(ys,dr,Es,fr,Fc,Ta,Nc,new Vt),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}}function pr(n,t,e,i,s,r){Ki.subVectors(n,e).addScalar(.5).multiply(i),s!==void 0?(Ss.x=r*Ki.x-s*Ki.y,Ss.y=s*Ki.x+r*Ki.y):Ss.copy(Ki),n.copy(t),n.x+=Ss.x,n.y+=Ss.y,n.applyMatrix4(ih)}const Aa=new B,vd=new B,yd=new Jt;class Kn{constructor(t=new B(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,i,s){return this.normal.set(t,e,i),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,i){const s=Aa.subVectors(i,e).cross(vd.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const i=t.delta(Aa),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(i,r)}intersectsLine(t){const e=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return e<0&&i>0||i<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const i=e||yd.getNormalMatrix(t),s=this.coplanarPoint(Aa).applyMatrix4(t),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const fi=new Gs,Sd=new Vt(.5,.5),mr=new B;class sh{constructor(t=new Kn,e=new Kn,i=new Kn,s=new Kn,r=new Kn,a=new Kn){this.planes=[t,e,i,s,r,a]}set(t,e,i,s,r,a){const o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(i),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(t){const e=this.planes;for(let i=0;i<6;i++)e[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,e=Rn,i=!1){const s=this.planes,r=t.elements,a=r[0],o=r[1],l=r[2],c=r[3],h=r[4],f=r[5],p=r[6],m=r[7],_=r[8],x=r[9],u=r[10],d=r[11],b=r[12],v=r[13],g=r[14],T=r[15];if(s[0].setComponents(c-a,m-h,d-_,T-b).normalize(),s[1].setComponents(c+a,m+h,d+_,T+b).normalize(),s[2].setComponents(c+o,m+f,d+x,T+v).normalize(),s[3].setComponents(c-o,m-f,d-x,T-v).normalize(),i)s[4].setComponents(l,p,u,g).normalize(),s[5].setComponents(c-l,m-p,d-u,T-g).normalize();else if(s[4].setComponents(c-l,m-p,d-u,T-g).normalize(),e===Rn)s[5].setComponents(c+l,m+p,d+u,T+g).normalize();else if(e===Br)s[5].setComponents(l,p,u,g).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),fi.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),fi.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(fi)}intersectsSprite(t){fi.center.set(0,0,0);const e=Sd.distanceTo(t.center);return fi.radius=.7071067811865476+e,fi.applyMatrix4(t.matrixWorld),this.intersectsSphere(fi)}intersectsSphere(t){const e=this.planes,i=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(t){const e=this.planes;for(let i=0;i<6;i++){const s=e[i];if(mr.x=s.normal.x>0?t.max.x:t.min.x,mr.y=s.normal.y>0?t.max.y:t.min.y,mr.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(mr)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let i=0;i<6;i++)if(e[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Tn extends Di{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ht(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const Hr=new B,Gr=new B,Oc=new ve,bs=new Vs,gr=new Gs,wa=new B,Bc=new B;class Si extends Be{constructor(t=new ie,e=new Tn){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,i=[0];for(let s=1,r=e.count;s<r;s++)Hr.fromBufferAttribute(e,s-1),Gr.fromBufferAttribute(e,s),i[s]=i[s-1],i[s]+=Hr.distanceTo(Gr);t.setAttribute("lineDistance",new we(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const i=this.geometry,s=this.matrixWorld,r=t.params.Line.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),gr.copy(i.boundingSphere),gr.applyMatrix4(s),gr.radius+=r,t.ray.intersectsSphere(gr)===!1)return;Oc.copy(s).invert(),bs.copy(t.ray).applyMatrix4(Oc);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,h=i.index,p=i.attributes.position;if(h!==null){const m=Math.max(0,a.start),_=Math.min(h.count,a.start+a.count);for(let x=m,u=_-1;x<u;x+=c){const d=h.getX(x),b=h.getX(x+1),v=_r(this,t,bs,l,d,b,x);v&&e.push(v)}if(this.isLineLoop){const x=h.getX(_-1),u=h.getX(m),d=_r(this,t,bs,l,x,u,_-1);d&&e.push(d)}}else{const m=Math.max(0,a.start),_=Math.min(p.count,a.start+a.count);for(let x=m,u=_-1;x<u;x+=c){const d=_r(this,t,bs,l,x,x+1,x);d&&e.push(d)}if(this.isLineLoop){const x=_r(this,t,bs,l,_-1,m,_-1);x&&e.push(x)}}}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function _r(n,t,e,i,s,r,a){const o=n.geometry.attributes.position;if(Hr.fromBufferAttribute(o,s),Gr.fromBufferAttribute(o,r),e.distanceSqToSegment(Hr,Gr,wa,Bc)>i)return;wa.applyMatrix4(n.matrixWorld);const c=t.ray.origin.distanceTo(wa);if(!(c<t.near||c>t.far))return{distance:c,point:Bc.clone().applyMatrix4(n.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:n}}const zc=new B,kc=new B;class Jo extends Si{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,i=[];for(let s=0,r=e.count;s<r;s+=2)zc.fromBufferAttribute(e,s),kc.fromBufferAttribute(e,s+1),i[s]=s===0?0:i[s-1],i[s+1]=i[s]+zc.distanceTo(kc);t.setAttribute("lineDistance",new we(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Ed extends Si{constructor(t,e){super(t,e),this.isLineLoop=!0,this.type="LineLoop"}}class Ye extends Di{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Ht(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const Hc=new ve,Ro=new Vs,xr=new Gs,Mr=new B;class tn extends Be{constructor(t=new ie,e=new Ye){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){const i=this.geometry,s=this.matrixWorld,r=t.params.Points.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),xr.copy(i.boundingSphere),xr.applyMatrix4(s),xr.radius+=r,t.ray.intersectsSphere(xr)===!1)return;Hc.copy(s).invert(),Ro.copy(t.ray).applyMatrix4(Hc);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=i.index,f=i.attributes.position;if(c!==null){const p=Math.max(0,a.start),m=Math.min(c.count,a.start+a.count);for(let _=p,x=m;_<x;_++){const u=c.getX(_);Mr.fromBufferAttribute(f,u),Gc(Mr,u,l,s,t,e,this)}}else{const p=Math.max(0,a.start),m=Math.min(f.count,a.start+a.count);for(let _=p,x=m;_<x;_++)Mr.fromBufferAttribute(f,_),Gc(Mr,_,l,s,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function Gc(n,t,e,i,s,r,a){const o=Ro.distanceSqToPoint(n);if(o<e){const l=new B;Ro.closestPointToPoint(n,l),l.applyMatrix4(i);const c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:a})}}class $r extends Xe{constructor(t,e,i,s,r,a,o,l,c){super(t,e,i,s,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class rh extends Xe{constructor(t,e,i=Ai,s,r,a,o=En,l=En,c,h=Us,f=1){if(h!==Us&&h!==Fs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const p={width:t,height:e,depth:f};super(p,s,r,a,o,l,h,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new jo(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}class ah extends Xe{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}}class Qo extends ie{constructor(t=[],e=[],i=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:i,detail:s};const r=[],a=[];o(s),c(i),h(),this.setAttribute("position",new we(r,3)),this.setAttribute("normal",new we(r.slice(),3)),this.setAttribute("uv",new we(a,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function o(b){const v=new B,g=new B,T=new B;for(let S=0;S<e.length;S+=3)m(e[S+0],v),m(e[S+1],g),m(e[S+2],T),l(v,g,T,b)}function l(b,v,g,T){const S=T+1,A=[];for(let w=0;w<=S;w++){A[w]=[];const y=b.clone().lerp(g,w/S),M=v.clone().lerp(g,w/S),C=S-w;for(let I=0;I<=C;I++)I===0&&w===S?A[w][I]=y:A[w][I]=y.clone().lerp(M,I/C)}for(let w=0;w<S;w++)for(let y=0;y<2*(S-w)-1;y++){const M=Math.floor(y/2);y%2===0?(p(A[w][M+1]),p(A[w+1][M]),p(A[w][M])):(p(A[w][M+1]),p(A[w+1][M+1]),p(A[w+1][M]))}}function c(b){const v=new B;for(let g=0;g<r.length;g+=3)v.x=r[g+0],v.y=r[g+1],v.z=r[g+2],v.normalize().multiplyScalar(b),r[g+0]=v.x,r[g+1]=v.y,r[g+2]=v.z}function h(){const b=new B;for(let v=0;v<r.length;v+=3){b.x=r[v+0],b.y=r[v+1],b.z=r[v+2];const g=u(b)/2/Math.PI+.5,T=d(b)/Math.PI+.5;a.push(g,1-T)}_(),f()}function f(){for(let b=0;b<a.length;b+=6){const v=a[b+0],g=a[b+2],T=a[b+4],S=Math.max(v,g,T),A=Math.min(v,g,T);S>.9&&A<.1&&(v<.2&&(a[b+0]+=1),g<.2&&(a[b+2]+=1),T<.2&&(a[b+4]+=1))}}function p(b){r.push(b.x,b.y,b.z)}function m(b,v){const g=b*3;v.x=t[g+0],v.y=t[g+1],v.z=t[g+2]}function _(){const b=new B,v=new B,g=new B,T=new B,S=new Vt,A=new Vt,w=new Vt;for(let y=0,M=0;y<r.length;y+=9,M+=6){b.set(r[y+0],r[y+1],r[y+2]),v.set(r[y+3],r[y+4],r[y+5]),g.set(r[y+6],r[y+7],r[y+8]),S.set(a[M+0],a[M+1]),A.set(a[M+2],a[M+3]),w.set(a[M+4],a[M+5]),T.copy(b).add(v).add(g).divideScalar(3);const C=u(T);x(S,M+0,b,C),x(A,M+2,v,C),x(w,M+4,g,C)}}function x(b,v,g,T){T<0&&b.x===1&&(a[v]=b.x-1),g.x===0&&g.z===0&&(a[v]=T/2/Math.PI+.5)}function u(b){return Math.atan2(b.z,-b.x)}function d(b){return Math.atan2(-b.y,Math.sqrt(b.x*b.x+b.z*b.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Qo(t.vertices,t.indices,t.radius,t.details)}}class tc extends Qo{constructor(t=1,e=0){const i=(1+Math.sqrt(5))/2,s=[-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new tc(t.radius,t.detail)}}class Yr extends ie{constructor(t=1,e=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:i,heightSegments:s};const r=t/2,a=e/2,o=Math.floor(i),l=Math.floor(s),c=o+1,h=l+1,f=t/o,p=e/l,m=[],_=[],x=[],u=[];for(let d=0;d<h;d++){const b=d*p-a;for(let v=0;v<c;v++){const g=v*f-r;_.push(g,-b,0),x.push(0,0,1),u.push(v/o),u.push(1-d/l)}}for(let d=0;d<l;d++)for(let b=0;b<o;b++){const v=b+c*d,g=b+c*(d+1),T=b+1+c*(d+1),S=b+1+c*d;m.push(v,g,S),m.push(g,T,S)}this.setIndex(m),this.setAttribute("position",new we(_,3)),this.setAttribute("normal",new we(x,3)),this.setAttribute("uv",new we(u,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Yr(t.width,t.height,t.widthSegments,t.heightSegments)}}class jr extends ie{constructor(t=1,e=32,i=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:i,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},e=Math.max(3,Math.floor(e)),i=Math.max(2,Math.floor(i));const l=Math.min(a+o,Math.PI);let c=0;const h=[],f=new B,p=new B,m=[],_=[],x=[],u=[];for(let d=0;d<=i;d++){const b=[],v=d/i;let g=0;d===0&&a===0?g=.5/e:d===i&&l===Math.PI&&(g=-.5/e);for(let T=0;T<=e;T++){const S=T/e;f.x=-t*Math.cos(s+S*r)*Math.sin(a+v*o),f.y=t*Math.cos(a+v*o),f.z=t*Math.sin(s+S*r)*Math.sin(a+v*o),_.push(f.x,f.y,f.z),p.copy(f).normalize(),x.push(p.x,p.y,p.z),u.push(S+g,1-v),b.push(c++)}h.push(b)}for(let d=0;d<i;d++)for(let b=0;b<e;b++){const v=h[d][b+1],g=h[d][b],T=h[d+1][b],S=h[d+1][b+1];(d!==0||a>0)&&m.push(v,g,S),(d!==i-1||l<Math.PI)&&m.push(g,T,S)}this.setIndex(m),this.setAttribute("position",new we(_,3)),this.setAttribute("normal",new we(x,3)),this.setAttribute("uv",new we(u,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new jr(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class ec extends ie{constructor(t=1,e=.4,i=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:i,tubularSegments:s,arc:r},i=Math.floor(i),s=Math.floor(s);const a=[],o=[],l=[],c=[],h=new B,f=new B,p=new B;for(let m=0;m<=i;m++)for(let _=0;_<=s;_++){const x=_/s*r,u=m/i*Math.PI*2;f.x=(t+e*Math.cos(u))*Math.cos(x),f.y=(t+e*Math.cos(u))*Math.sin(x),f.z=e*Math.sin(u),o.push(f.x,f.y,f.z),h.x=t*Math.cos(x),h.y=t*Math.sin(x),p.subVectors(f,h).normalize(),l.push(p.x,p.y,p.z),c.push(_/s),c.push(m/i)}for(let m=1;m<=i;m++)for(let _=1;_<=s;_++){const x=(s+1)*m+_-1,u=(s+1)*(m-1)+_-1,d=(s+1)*(m-1)+_,b=(s+1)*m+_;a.push(x,u,b),a.push(u,d,b)}this.setIndex(a),this.setAttribute("position",new we(o,3)),this.setAttribute("normal",new we(l,3)),this.setAttribute("uv",new we(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ec(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class bd extends ie{constructor(t=null){if(super(),this.type="WireframeGeometry",this.parameters={geometry:t},t!==null){const e=[],i=new Set,s=new B,r=new B;if(t.index!==null){const a=t.attributes.position,o=t.index;let l=t.groups;l.length===0&&(l=[{start:0,count:o.count,materialIndex:0}]);for(let c=0,h=l.length;c<h;++c){const f=l[c],p=f.start,m=f.count;for(let _=p,x=p+m;_<x;_+=3)for(let u=0;u<3;u++){const d=o.getX(_+u),b=o.getX(_+(u+1)%3);s.fromBufferAttribute(a,d),r.fromBufferAttribute(a,b),Vc(s,r,i)===!0&&(e.push(s.x,s.y,s.z),e.push(r.x,r.y,r.z))}}}else{const a=t.attributes.position;for(let o=0,l=a.count/3;o<l;o++)for(let c=0;c<3;c++){const h=3*o+c,f=3*o+(c+1)%3;s.fromBufferAttribute(a,h),r.fromBufferAttribute(a,f),Vc(s,r,i)===!0&&(e.push(s.x,s.y,s.z),e.push(r.x,r.y,r.z))}}this.setAttribute("position",new we(e,3))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}}function Vc(n,t,e){const i=`${n.x},${n.y},${n.z}-${t.x},${t.y},${t.z}`,s=`${t.x},${t.y},${t.z}-${n.x},${n.y},${n.z}`;return e.has(i)===!0||e.has(s)===!0?!1:(e.add(i),e.add(s),!0)}class Td extends Di{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Mu,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class Ad extends Di{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}class wd extends eh{constructor(t=-1,e=1,i=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=i,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,i,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=i-t,a=i+t,o=s+e,l=s-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}class Rd extends cn{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}const Wc=new ve;class Cd{constructor(t,e,i=0,s=1/0){this.ray=new Vs(t,e),this.near=i,this.far=s,this.camera=null,this.layers=new Ko,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return Wc.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Wc),this}intersectObject(t,e=!0,i=[]){return Co(t,this,i,e),i.sort(Xc),i}intersectObjects(t,e=!0,i=[]){for(let s=0,r=t.length;s<r;s++)Co(t[s],this,i,e);return i.sort(Xc),i}}function Xc(n,t){return n.distance-t.distance}function Co(n,t,e,i){let s=!0;if(n.layers.test(t.layers)&&n.raycast(t,e)===!1&&(s=!1),s===!0&&i===!0){const r=n.children;for(let a=0,o=r.length;a<o;a++)Co(r[a],t,e,!0)}}class qc{constructor(t=1,e=0,i=0){this.radius=t,this.phi=e,this.theta=i}set(t,e,i){return this.radius=t,this.phi=e,this.theta=i,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=te(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,i){return this.radius=Math.sqrt(t*t+e*e+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,i),this.phi=Math.acos(te(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class Pd extends Pi{constructor(t,e=null){super(),this.object=t,this.domElement=e,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(t){if(t===void 0){console.warn("THREE.Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=t}disconnect(){}dispose(){}update(){}}function $c(n,t,e,i){const s=Dd(i);switch(e){case Wl:return n*t;case ql:return n*t/s.components*s.byteLength;case Xo:return n*t/s.components*s.byteLength;case $l:return n*t*2/s.components*s.byteLength;case qo:return n*t*2/s.components*s.byteLength;case Xl:return n*t*3/s.components*s.byteLength;case yn:return n*t*4/s.components*s.byteLength;case $o:return n*t*4/s.components*s.byteLength;case Cr:case Pr:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case Dr:case Lr:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case Qa:case eo:return Math.max(n,16)*Math.max(t,8)/4;case Ja:case to:return Math.max(n,8)*Math.max(t,8)/2;case no:case io:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case so:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case ro:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case ao:return Math.floor((n+4)/5)*Math.floor((t+3)/4)*16;case oo:return Math.floor((n+4)/5)*Math.floor((t+4)/5)*16;case co:return Math.floor((n+5)/6)*Math.floor((t+4)/5)*16;case lo:return Math.floor((n+5)/6)*Math.floor((t+5)/6)*16;case ho:return Math.floor((n+7)/8)*Math.floor((t+4)/5)*16;case uo:return Math.floor((n+7)/8)*Math.floor((t+5)/6)*16;case fo:return Math.floor((n+7)/8)*Math.floor((t+7)/8)*16;case po:return Math.floor((n+9)/10)*Math.floor((t+4)/5)*16;case mo:return Math.floor((n+9)/10)*Math.floor((t+5)/6)*16;case go:return Math.floor((n+9)/10)*Math.floor((t+7)/8)*16;case _o:return Math.floor((n+9)/10)*Math.floor((t+9)/10)*16;case xo:return Math.floor((n+11)/12)*Math.floor((t+9)/10)*16;case Mo:return Math.floor((n+11)/12)*Math.floor((t+11)/12)*16;case vo:case yo:case So:return Math.ceil(n/4)*Math.ceil(t/4)*16;case Eo:case bo:return Math.ceil(n/4)*Math.ceil(t/4)*8;case To:case Ao:return Math.ceil(n/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Dd(n){switch(n){case Gn:case kl:return{byteLength:1,components:1};case Ls:case Hl:case ks:return{byteLength:2,components:1};case Vo:case Wo:return{byteLength:2,components:4};case Ai:case Go:case zn:return{byteLength:4,components:1};case Gl:case Vl:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Ho}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Ho);function oh(){let n=null,t=!1,e=null,i=null;function s(r,a){e(r,a),i=n.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(i=n.requestAnimationFrame(s),t=!0)},stop:function(){n.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){n=r}}}function Ld(n){const t=new WeakMap;function e(o,l){const c=o.array,h=o.usage,f=c.byteLength,p=n.createBuffer();n.bindBuffer(l,p),n.bufferData(l,c,h),o.onUploadCallback();let m;if(c instanceof Float32Array)m=n.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)m=n.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?m=n.HALF_FLOAT:m=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)m=n.SHORT;else if(c instanceof Uint32Array)m=n.UNSIGNED_INT;else if(c instanceof Int32Array)m=n.INT;else if(c instanceof Int8Array)m=n.BYTE;else if(c instanceof Uint8Array)m=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)m=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:p,type:m,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:f}}function i(o,l,c){const h=l.array,f=l.updateRanges;if(n.bindBuffer(c,o),f.length===0)n.bufferSubData(c,0,h);else{f.sort((m,_)=>m.start-_.start);let p=0;for(let m=1;m<f.length;m++){const _=f[p],x=f[m];x.start<=_.start+_.count+1?_.count=Math.max(_.count,x.start+x.count-_.start):(++p,f[p]=x)}f.length=p+1;for(let m=0,_=f.length;m<_;m++){const x=f[m];n.bufferSubData(c,x.start*h.BYTES_PER_ELEMENT,h,x.start,x.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=t.get(o);l&&(n.deleteBuffer(l.buffer),t.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const h=t.get(o);(!h||h.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=t.get(o);if(c===void 0)t.set(o,e(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,o,l),c.version=o.version}}return{get:s,remove:r,update:a}}var Id=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Ud=`#ifdef USE_ALPHAHASH
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
#endif`,Fd=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Nd=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Od=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Bd=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,zd=`#ifdef USE_AOMAP
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
#endif`,kd=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Hd=`#ifdef USE_BATCHING
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
#endif`,Gd=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Vd=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Wd=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Xd=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,qd=`#ifdef USE_IRIDESCENCE
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
#endif`,$d=`#ifdef USE_BUMPMAP
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
#endif`,Yd=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,jd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Kd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Zd=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Jd=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Qd=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,tf=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,ef=`#if defined( USE_COLOR_ALPHA )
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
#endif`,nf=`#define PI 3.141592653589793
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
} // validated`,sf=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,rf=`vec3 transformedNormal = objectNormal;
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
#endif`,af=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,of=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,cf=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,lf=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,hf="gl_FragColor = linearToOutputTexel( gl_FragColor );",uf=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,df=`#ifdef USE_ENVMAP
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
#endif`,ff=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,pf=`#ifdef USE_ENVMAP
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
#endif`,mf=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,gf=`#ifdef USE_ENVMAP
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
#endif`,_f=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,xf=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Mf=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,vf=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,yf=`#ifdef USE_GRADIENTMAP
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
}`,Sf=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Ef=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,bf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Tf=`uniform bool receiveShadow;
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
#endif`,Af=`#ifdef USE_ENVMAP
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
#endif`,wf=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Rf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Cf=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Pf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Df=`PhysicalMaterial material;
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
#endif`,Lf=`struct PhysicalMaterial {
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
}`,If=`
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
#endif`,Uf=`#if defined( RE_IndirectDiffuse )
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
#endif`,Ff=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Nf=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Of=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Bf=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,zf=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,kf=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Hf=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Gf=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Vf=`#if defined( USE_POINTS_UV )
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
#endif`,Wf=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Xf=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,qf=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,$f=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Yf=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,jf=`#ifdef USE_MORPHTARGETS
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
#endif`,Kf=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Zf=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Jf=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Qf=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,tp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,ep=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,np=`#ifdef USE_NORMALMAP
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
#endif`,ip=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,sp=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,rp=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,ap=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,op=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,cp=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,lp=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,hp=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,up=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,dp=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,fp=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,pp=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,mp=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,gp=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,_p=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,xp=`float getShadowMask() {
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
}`,Mp=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,vp=`#ifdef USE_SKINNING
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
#endif`,yp=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Sp=`#ifdef USE_SKINNING
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
#endif`,Ep=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,bp=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Tp=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Ap=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,wp=`#ifdef USE_TRANSMISSION
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
#endif`,Rp=`#ifdef USE_TRANSMISSION
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
#endif`,Cp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Pp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Dp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Lp=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Ip=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Up=`uniform sampler2D t2D;
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
}`,Fp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Np=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Op=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Bp=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,zp=`#include <common>
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
}`,kp=`#if DEPTH_PACKING == 3200
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
}`,Hp=`#define DISTANCE
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
}`,Gp=`#define DISTANCE
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
}`,Vp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Wp=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Xp=`uniform float scale;
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
}`,qp=`uniform vec3 diffuse;
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
}`,$p=`#include <common>
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
}`,Yp=`uniform vec3 diffuse;
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
}`,jp=`#define LAMBERT
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
}`,Kp=`#define LAMBERT
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
}`,Zp=`#define MATCAP
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
}`,Jp=`#define MATCAP
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
}`,Qp=`#define NORMAL
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
}`,tm=`#define NORMAL
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
}`,em=`#define PHONG
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
}`,nm=`#define PHONG
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
}`,im=`#define STANDARD
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
}`,sm=`#define STANDARD
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
}`,rm=`#define TOON
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
}`,am=`#define TOON
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
}`,om=`uniform float size;
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
}`,cm=`uniform vec3 diffuse;
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
}`,lm=`#include <common>
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
}`,hm=`uniform vec3 color;
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
}`,um=`uniform float rotation;
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
}`,dm=`uniform vec3 diffuse;
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
}`,Qt={alphahash_fragment:Id,alphahash_pars_fragment:Ud,alphamap_fragment:Fd,alphamap_pars_fragment:Nd,alphatest_fragment:Od,alphatest_pars_fragment:Bd,aomap_fragment:zd,aomap_pars_fragment:kd,batching_pars_vertex:Hd,batching_vertex:Gd,begin_vertex:Vd,beginnormal_vertex:Wd,bsdfs:Xd,iridescence_fragment:qd,bumpmap_pars_fragment:$d,clipping_planes_fragment:Yd,clipping_planes_pars_fragment:jd,clipping_planes_pars_vertex:Kd,clipping_planes_vertex:Zd,color_fragment:Jd,color_pars_fragment:Qd,color_pars_vertex:tf,color_vertex:ef,common:nf,cube_uv_reflection_fragment:sf,defaultnormal_vertex:rf,displacementmap_pars_vertex:af,displacementmap_vertex:of,emissivemap_fragment:cf,emissivemap_pars_fragment:lf,colorspace_fragment:hf,colorspace_pars_fragment:uf,envmap_fragment:df,envmap_common_pars_fragment:ff,envmap_pars_fragment:pf,envmap_pars_vertex:mf,envmap_physical_pars_fragment:Af,envmap_vertex:gf,fog_vertex:_f,fog_pars_vertex:xf,fog_fragment:Mf,fog_pars_fragment:vf,gradientmap_pars_fragment:yf,lightmap_pars_fragment:Sf,lights_lambert_fragment:Ef,lights_lambert_pars_fragment:bf,lights_pars_begin:Tf,lights_toon_fragment:wf,lights_toon_pars_fragment:Rf,lights_phong_fragment:Cf,lights_phong_pars_fragment:Pf,lights_physical_fragment:Df,lights_physical_pars_fragment:Lf,lights_fragment_begin:If,lights_fragment_maps:Uf,lights_fragment_end:Ff,logdepthbuf_fragment:Nf,logdepthbuf_pars_fragment:Of,logdepthbuf_pars_vertex:Bf,logdepthbuf_vertex:zf,map_fragment:kf,map_pars_fragment:Hf,map_particle_fragment:Gf,map_particle_pars_fragment:Vf,metalnessmap_fragment:Wf,metalnessmap_pars_fragment:Xf,morphinstance_vertex:qf,morphcolor_vertex:$f,morphnormal_vertex:Yf,morphtarget_pars_vertex:jf,morphtarget_vertex:Kf,normal_fragment_begin:Zf,normal_fragment_maps:Jf,normal_pars_fragment:Qf,normal_pars_vertex:tp,normal_vertex:ep,normalmap_pars_fragment:np,clearcoat_normal_fragment_begin:ip,clearcoat_normal_fragment_maps:sp,clearcoat_pars_fragment:rp,iridescence_pars_fragment:ap,opaque_fragment:op,packing:cp,premultiplied_alpha_fragment:lp,project_vertex:hp,dithering_fragment:up,dithering_pars_fragment:dp,roughnessmap_fragment:fp,roughnessmap_pars_fragment:pp,shadowmap_pars_fragment:mp,shadowmap_pars_vertex:gp,shadowmap_vertex:_p,shadowmask_pars_fragment:xp,skinbase_vertex:Mp,skinning_pars_vertex:vp,skinning_vertex:yp,skinnormal_vertex:Sp,specularmap_fragment:Ep,specularmap_pars_fragment:bp,tonemapping_fragment:Tp,tonemapping_pars_fragment:Ap,transmission_fragment:wp,transmission_pars_fragment:Rp,uv_pars_fragment:Cp,uv_pars_vertex:Pp,uv_vertex:Dp,worldpos_vertex:Lp,background_vert:Ip,background_frag:Up,backgroundCube_vert:Fp,backgroundCube_frag:Np,cube_vert:Op,cube_frag:Bp,depth_vert:zp,depth_frag:kp,distanceRGBA_vert:Hp,distanceRGBA_frag:Gp,equirect_vert:Vp,equirect_frag:Wp,linedashed_vert:Xp,linedashed_frag:qp,meshbasic_vert:$p,meshbasic_frag:Yp,meshlambert_vert:jp,meshlambert_frag:Kp,meshmatcap_vert:Zp,meshmatcap_frag:Jp,meshnormal_vert:Qp,meshnormal_frag:tm,meshphong_vert:em,meshphong_frag:nm,meshphysical_vert:im,meshphysical_frag:sm,meshtoon_vert:rm,meshtoon_frag:am,points_vert:om,points_frag:cm,shadow_vert:lm,shadow_frag:hm,sprite_vert:um,sprite_frag:dm},Et={common:{diffuse:{value:new Ht(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Jt},alphaMap:{value:null},alphaMapTransform:{value:new Jt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Jt}},envmap:{envMap:{value:null},envMapRotation:{value:new Jt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Jt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Jt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Jt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Jt},normalScale:{value:new Vt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Jt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Jt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Jt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Jt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ht(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ht(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Jt},alphaTest:{value:0},uvTransform:{value:new Jt}},sprite:{diffuse:{value:new Ht(16777215)},opacity:{value:1},center:{value:new Vt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Jt},alphaMap:{value:null},alphaMapTransform:{value:new Jt},alphaTest:{value:0}}},An={basic:{uniforms:He([Et.common,Et.specularmap,Et.envmap,Et.aomap,Et.lightmap,Et.fog]),vertexShader:Qt.meshbasic_vert,fragmentShader:Qt.meshbasic_frag},lambert:{uniforms:He([Et.common,Et.specularmap,Et.envmap,Et.aomap,Et.lightmap,Et.emissivemap,Et.bumpmap,Et.normalmap,Et.displacementmap,Et.fog,Et.lights,{emissive:{value:new Ht(0)}}]),vertexShader:Qt.meshlambert_vert,fragmentShader:Qt.meshlambert_frag},phong:{uniforms:He([Et.common,Et.specularmap,Et.envmap,Et.aomap,Et.lightmap,Et.emissivemap,Et.bumpmap,Et.normalmap,Et.displacementmap,Et.fog,Et.lights,{emissive:{value:new Ht(0)},specular:{value:new Ht(1118481)},shininess:{value:30}}]),vertexShader:Qt.meshphong_vert,fragmentShader:Qt.meshphong_frag},standard:{uniforms:He([Et.common,Et.envmap,Et.aomap,Et.lightmap,Et.emissivemap,Et.bumpmap,Et.normalmap,Et.displacementmap,Et.roughnessmap,Et.metalnessmap,Et.fog,Et.lights,{emissive:{value:new Ht(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Qt.meshphysical_vert,fragmentShader:Qt.meshphysical_frag},toon:{uniforms:He([Et.common,Et.aomap,Et.lightmap,Et.emissivemap,Et.bumpmap,Et.normalmap,Et.displacementmap,Et.gradientmap,Et.fog,Et.lights,{emissive:{value:new Ht(0)}}]),vertexShader:Qt.meshtoon_vert,fragmentShader:Qt.meshtoon_frag},matcap:{uniforms:He([Et.common,Et.bumpmap,Et.normalmap,Et.displacementmap,Et.fog,{matcap:{value:null}}]),vertexShader:Qt.meshmatcap_vert,fragmentShader:Qt.meshmatcap_frag},points:{uniforms:He([Et.points,Et.fog]),vertexShader:Qt.points_vert,fragmentShader:Qt.points_frag},dashed:{uniforms:He([Et.common,Et.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Qt.linedashed_vert,fragmentShader:Qt.linedashed_frag},depth:{uniforms:He([Et.common,Et.displacementmap]),vertexShader:Qt.depth_vert,fragmentShader:Qt.depth_frag},normal:{uniforms:He([Et.common,Et.bumpmap,Et.normalmap,Et.displacementmap,{opacity:{value:1}}]),vertexShader:Qt.meshnormal_vert,fragmentShader:Qt.meshnormal_frag},sprite:{uniforms:He([Et.sprite,Et.fog]),vertexShader:Qt.sprite_vert,fragmentShader:Qt.sprite_frag},background:{uniforms:{uvTransform:{value:new Jt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Qt.background_vert,fragmentShader:Qt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Jt}},vertexShader:Qt.backgroundCube_vert,fragmentShader:Qt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Qt.cube_vert,fragmentShader:Qt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Qt.equirect_vert,fragmentShader:Qt.equirect_frag},distanceRGBA:{uniforms:He([Et.common,Et.displacementmap,{referencePosition:{value:new B},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Qt.distanceRGBA_vert,fragmentShader:Qt.distanceRGBA_frag},shadow:{uniforms:He([Et.lights,Et.fog,{color:{value:new Ht(0)},opacity:{value:1}}]),vertexShader:Qt.shadow_vert,fragmentShader:Qt.shadow_frag}};An.physical={uniforms:He([An.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Jt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Jt},clearcoatNormalScale:{value:new Vt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Jt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Jt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Jt},sheen:{value:0},sheenColor:{value:new Ht(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Jt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Jt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Jt},transmissionSamplerSize:{value:new Vt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Jt},attenuationDistance:{value:0},attenuationColor:{value:new Ht(0)},specularColor:{value:new Ht(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Jt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Jt},anisotropyVector:{value:new Vt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Jt}}]),vertexShader:Qt.meshphysical_vert,fragmentShader:Qt.meshphysical_frag};const vr={r:0,b:0,g:0},pi=new Vn,fm=new ve;function pm(n,t,e,i,s,r,a){const o=new Ht(0);let l=r===!0?0:1,c,h,f=null,p=0,m=null;function _(v){let g=v.isScene===!0?v.background:null;return g&&g.isTexture&&(g=(v.backgroundBlurriness>0?e:t).get(g)),g}function x(v){let g=!1;const T=_(v);T===null?d(o,l):T&&T.isColor&&(d(T,1),g=!0);const S=n.xr.getEnvironmentBlendMode();S==="additive"?i.buffers.color.setClear(0,0,0,1,a):S==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,a),(n.autoClear||g)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function u(v,g){const T=_(g);T&&(T.isCubeTexture||T.mapping===qr)?(h===void 0&&(h=new hn(new Xs(1,1,1),new oi({name:"BackgroundCubeMaterial",uniforms:fs(An.backgroundCube.uniforms),vertexShader:An.backgroundCube.vertexShader,fragmentShader:An.backgroundCube.fragmentShader,side:je,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(S,A,w){this.matrixWorld.copyPosition(w.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),pi.copy(g.backgroundRotation),pi.x*=-1,pi.y*=-1,pi.z*=-1,T.isCubeTexture&&T.isRenderTargetTexture===!1&&(pi.y*=-1,pi.z*=-1),h.material.uniforms.envMap.value=T,h.material.uniforms.flipEnvMap.value=T.isCubeTexture&&T.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=g.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=g.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(fm.makeRotationFromEuler(pi)),h.material.toneMapped=ce.getTransfer(T.colorSpace)!==fe,(f!==T||p!==T.version||m!==n.toneMapping)&&(h.material.needsUpdate=!0,f=T,p=T.version,m=n.toneMapping),h.layers.enableAll(),v.unshift(h,h.geometry,h.material,0,0,null)):T&&T.isTexture&&(c===void 0&&(c=new hn(new Yr(2,2),new oi({name:"BackgroundMaterial",uniforms:fs(An.background.uniforms),vertexShader:An.background.vertexShader,fragmentShader:An.background.fragmentShader,side:ri,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=T,c.material.uniforms.backgroundIntensity.value=g.backgroundIntensity,c.material.toneMapped=ce.getTransfer(T.colorSpace)!==fe,T.matrixAutoUpdate===!0&&T.updateMatrix(),c.material.uniforms.uvTransform.value.copy(T.matrix),(f!==T||p!==T.version||m!==n.toneMapping)&&(c.material.needsUpdate=!0,f=T,p=T.version,m=n.toneMapping),c.layers.enableAll(),v.unshift(c,c.geometry,c.material,0,0,null))}function d(v,g){v.getRGB(vr,th(n)),i.buffers.color.setClear(vr.r,vr.g,vr.b,g,a)}function b(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(v,g=1){o.set(v),l=g,d(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(v){l=v,d(o,l)},render:x,addToRenderList:u,dispose:b}}function mm(n,t){const e=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=p(null);let r=s,a=!1;function o(M,C,I,N,L){let U=!1;const k=f(N,I,C);r!==k&&(r=k,c(r.object)),U=m(M,N,I,L),U&&_(M,N,I,L),L!==null&&t.update(L,n.ELEMENT_ARRAY_BUFFER),(U||a)&&(a=!1,g(M,C,I,N),L!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get(L).buffer))}function l(){return n.createVertexArray()}function c(M){return n.bindVertexArray(M)}function h(M){return n.deleteVertexArray(M)}function f(M,C,I){const N=I.wireframe===!0;let L=i[M.id];L===void 0&&(L={},i[M.id]=L);let U=L[C.id];U===void 0&&(U={},L[C.id]=U);let k=U[N];return k===void 0&&(k=p(l()),U[N]=k),k}function p(M){const C=[],I=[],N=[];for(let L=0;L<e;L++)C[L]=0,I[L]=0,N[L]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:C,enabledAttributes:I,attributeDivisors:N,object:M,attributes:{},index:null}}function m(M,C,I,N){const L=r.attributes,U=C.attributes;let k=0;const F=I.getAttributes();for(const O in F)if(F[O].location>=0){const $=L[O];let it=U[O];if(it===void 0&&(O==="instanceMatrix"&&M.instanceMatrix&&(it=M.instanceMatrix),O==="instanceColor"&&M.instanceColor&&(it=M.instanceColor)),$===void 0||$.attribute!==it||it&&$.data!==it.data)return!0;k++}return r.attributesNum!==k||r.index!==N}function _(M,C,I,N){const L={},U=C.attributes;let k=0;const F=I.getAttributes();for(const O in F)if(F[O].location>=0){let $=U[O];$===void 0&&(O==="instanceMatrix"&&M.instanceMatrix&&($=M.instanceMatrix),O==="instanceColor"&&M.instanceColor&&($=M.instanceColor));const it={};it.attribute=$,$&&$.data&&(it.data=$.data),L[O]=it,k++}r.attributes=L,r.attributesNum=k,r.index=N}function x(){const M=r.newAttributes;for(let C=0,I=M.length;C<I;C++)M[C]=0}function u(M){d(M,0)}function d(M,C){const I=r.newAttributes,N=r.enabledAttributes,L=r.attributeDivisors;I[M]=1,N[M]===0&&(n.enableVertexAttribArray(M),N[M]=1),L[M]!==C&&(n.vertexAttribDivisor(M,C),L[M]=C)}function b(){const M=r.newAttributes,C=r.enabledAttributes;for(let I=0,N=C.length;I<N;I++)C[I]!==M[I]&&(n.disableVertexAttribArray(I),C[I]=0)}function v(M,C,I,N,L,U,k){k===!0?n.vertexAttribIPointer(M,C,I,L,U):n.vertexAttribPointer(M,C,I,N,L,U)}function g(M,C,I,N){x();const L=N.attributes,U=I.getAttributes(),k=C.defaultAttributeValues;for(const F in U){const O=U[F];if(O.location>=0){let Z=L[F];if(Z===void 0&&(F==="instanceMatrix"&&M.instanceMatrix&&(Z=M.instanceMatrix),F==="instanceColor"&&M.instanceColor&&(Z=M.instanceColor)),Z!==void 0){const $=Z.normalized,it=Z.itemSize,mt=t.get(Z);if(mt===void 0)continue;const Ct=mt.buffer,et=mt.type,Q=mt.bytesPerElement,q=et===n.INT||et===n.UNSIGNED_INT||Z.gpuType===Go;if(Z.isInterleavedBufferAttribute){const V=Z.data,at=V.stride,vt=Z.offset;if(V.isInstancedInterleavedBuffer){for(let yt=0;yt<O.locationSize;yt++)d(O.location+yt,V.meshPerAttribute);M.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=V.meshPerAttribute*V.count)}else for(let yt=0;yt<O.locationSize;yt++)u(O.location+yt);n.bindBuffer(n.ARRAY_BUFFER,Ct);for(let yt=0;yt<O.locationSize;yt++)v(O.location+yt,it/O.locationSize,et,$,at*Q,(vt+it/O.locationSize*yt)*Q,q)}else{if(Z.isInstancedBufferAttribute){for(let V=0;V<O.locationSize;V++)d(O.location+V,Z.meshPerAttribute);M.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=Z.meshPerAttribute*Z.count)}else for(let V=0;V<O.locationSize;V++)u(O.location+V);n.bindBuffer(n.ARRAY_BUFFER,Ct);for(let V=0;V<O.locationSize;V++)v(O.location+V,it/O.locationSize,et,$,it*Q,it/O.locationSize*V*Q,q)}}else if(k!==void 0){const $=k[F];if($!==void 0)switch($.length){case 2:n.vertexAttrib2fv(O.location,$);break;case 3:n.vertexAttrib3fv(O.location,$);break;case 4:n.vertexAttrib4fv(O.location,$);break;default:n.vertexAttrib1fv(O.location,$)}}}}b()}function T(){w();for(const M in i){const C=i[M];for(const I in C){const N=C[I];for(const L in N)h(N[L].object),delete N[L];delete C[I]}delete i[M]}}function S(M){if(i[M.id]===void 0)return;const C=i[M.id];for(const I in C){const N=C[I];for(const L in N)h(N[L].object),delete N[L];delete C[I]}delete i[M.id]}function A(M){for(const C in i){const I=i[C];if(I[M.id]===void 0)continue;const N=I[M.id];for(const L in N)h(N[L].object),delete N[L];delete I[M.id]}}function w(){y(),a=!0,r!==s&&(r=s,c(r.object))}function y(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:w,resetDefaultState:y,dispose:T,releaseStatesOfGeometry:S,releaseStatesOfProgram:A,initAttributes:x,enableAttribute:u,disableUnusedAttributes:b}}function gm(n,t,e){let i;function s(c){i=c}function r(c,h){n.drawArrays(i,c,h),e.update(h,i,1)}function a(c,h,f){f!==0&&(n.drawArraysInstanced(i,c,h,f),e.update(h,i,f))}function o(c,h,f){if(f===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,h,0,f);let m=0;for(let _=0;_<f;_++)m+=h[_];e.update(m,i,1)}function l(c,h,f,p){if(f===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let _=0;_<c.length;_++)a(c[_],h[_],p[_]);else{m.multiDrawArraysInstancedWEBGL(i,c,0,h,0,p,0,f);let _=0;for(let x=0;x<f;x++)_+=h[x]*p[x];e.update(_,i,1)}}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function _m(n,t,e,i){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){const A=t.get("EXT_texture_filter_anisotropic");s=n.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(A){return!(A!==yn&&i.convert(A)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(A){const w=A===ks&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(A!==Gn&&i.convert(A)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&A!==zn&&!w)}function l(A){if(A==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp";const h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const f=e.logarithmicDepthBuffer===!0,p=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),m=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),_=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=n.getParameter(n.MAX_TEXTURE_SIZE),u=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),d=n.getParameter(n.MAX_VERTEX_ATTRIBS),b=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),v=n.getParameter(n.MAX_VARYING_VECTORS),g=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),T=_>0,S=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:f,reversedDepthBuffer:p,maxTextures:m,maxVertexTextures:_,maxTextureSize:x,maxCubemapSize:u,maxAttributes:d,maxVertexUniforms:b,maxVaryings:v,maxFragmentUniforms:g,vertexTextures:T,maxSamples:S}}function xm(n){const t=this;let e=null,i=0,s=!1,r=!1;const a=new Kn,o=new Jt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,p){const m=f.length!==0||p||i!==0||s;return s=p,i=f.length,m},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(f,p){e=h(f,p,0)},this.setState=function(f,p,m){const _=f.clippingPlanes,x=f.clipIntersection,u=f.clipShadows,d=n.get(f);if(!s||_===null||_.length===0||r&&!u)r?h(null):c();else{const b=r?0:i,v=b*4;let g=d.clippingState||null;l.value=g,g=h(_,p,v,m);for(let T=0;T!==v;++T)g[T]=e[T];d.clippingState=g,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=b}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function h(f,p,m,_){const x=f!==null?f.length:0;let u=null;if(x!==0){if(u=l.value,_!==!0||u===null){const d=m+x*4,b=p.matrixWorldInverse;o.getNormalMatrix(b),(u===null||u.length<d)&&(u=new Float32Array(d));for(let v=0,g=m;v!==x;++v,g+=4)a.copy(f[v]).applyMatrix4(b,o),a.normal.toArray(u,g),u[g+3]=a.constant}l.value=u,l.needsUpdate=!0}return t.numPlanes=x,t.numIntersection=0,u}}function Mm(n){let t=new WeakMap;function e(a,o){return o===Ya?a.mapping=hs:o===ja&&(a.mapping=us),a}function i(a){if(a&&a.isTexture){const o=a.mapping;if(o===Ya||o===ja)if(t.has(a)){const l=t.get(a).texture;return e(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new gd(l.height);return c.fromEquirectangularTexture(n,a),t.set(a,c),a.addEventListener("dispose",s),e(c.texture,a.mapping)}else return null}}return a}function s(a){const o=a.target;o.removeEventListener("dispose",s);const l=t.get(o);l!==void 0&&(t.delete(o),l.dispose())}function r(){t=new WeakMap}return{get:i,dispose:r}}const ns=4,Yc=[.125,.215,.35,.446,.526,.582],vi=20,Ra=new wd,jc=new Ht;let Ca=null,Pa=0,Da=0,La=!1;const gi=(1+Math.sqrt(5))/2,Zi=1/gi,Kc=[new B(-gi,Zi,0),new B(gi,Zi,0),new B(-Zi,0,gi),new B(Zi,0,gi),new B(0,gi,-Zi),new B(0,gi,Zi),new B(-1,1,-1),new B(1,1,-1),new B(-1,1,1),new B(1,1,1)],vm=new B;class Zc{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,i=.1,s=100,r={}){const{size:a=256,position:o=vm}=r;Ca=this._renderer.getRenderTarget(),Pa=this._renderer.getActiveCubeFace(),Da=this._renderer.getActiveMipmapLevel(),La=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(t,i,s,l,o),e>0&&this._blur(l,0,0,e),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=tl(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Qc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Ca,Pa,Da),this._renderer.xr.enabled=La,t.scissorTest=!1,yr(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===hs||t.mapping===us?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Ca=this._renderer.getRenderTarget(),Pa=this._renderer.getActiveCubeFace(),Da=this._renderer.getActiveMipmapLevel(),La=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=e||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,i={magFilter:vn,minFilter:vn,generateMipmaps:!1,type:ks,format:yn,colorSpace:ds,depthBuffer:!1},s=Jc(t,e,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Jc(t,e,i);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=ym(r)),this._blurMaterial=Sm(r,t,e)}return s}_compileMaterial(t){const e=new hn(this._lodPlanes[0],t);this._renderer.compile(e,Ra)}_sceneToCubeUV(t,e,i,s,r){const l=new cn(90,1,e,i),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],f=this._renderer,p=f.autoClear,m=f.toneMapping;f.getClearColor(jc),f.toneMapping=ii,f.autoClear=!1,f.state.buffers.depth.getReversed()&&(f.setRenderTarget(s),f.clearDepth(),f.setRenderTarget(null));const x=new Ws({name:"PMREM.Background",side:je,depthWrite:!1,depthTest:!1}),u=new hn(new Xs,x);let d=!1;const b=t.background;b?b.isColor&&(x.color.copy(b),t.background=null,d=!0):(x.color.copy(jc),d=!0);for(let v=0;v<6;v++){const g=v%3;g===0?(l.up.set(0,c[v],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+h[v],r.y,r.z)):g===1?(l.up.set(0,0,c[v]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+h[v],r.z)):(l.up.set(0,c[v],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+h[v]));const T=this._cubeSize;yr(s,g*T,v>2?T:0,T,T),f.setRenderTarget(s),d&&f.render(u,l),f.render(t,l)}u.geometry.dispose(),u.material.dispose(),f.toneMapping=m,f.autoClear=p,t.background=b}_textureToCubeUV(t,e){const i=this._renderer,s=t.mapping===hs||t.mapping===us;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=tl()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Qc());const r=s?this._cubemapMaterial:this._equirectMaterial,a=new hn(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=t;const l=this._cubeSize;yr(e,0,0,3*l,2*l),i.setRenderTarget(e),i.render(a,Ra)}_applyPMREM(t){const e=this._renderer,i=e.autoClear;e.autoClear=!1;const s=this._lodPlanes.length;for(let r=1;r<s;r++){const a=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=Kc[(s-r-1)%Kc.length];this._blur(t,r-1,r,a,o)}e.autoClear=i}_blur(t,e,i,s,r){const a=this._pingPongRenderTarget;this._halfBlur(t,a,e,i,s,"latitudinal",r),this._halfBlur(a,t,i,i,s,"longitudinal",r)}_halfBlur(t,e,i,s,r,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,f=new hn(this._lodPlanes[s],c),p=c.uniforms,m=this._sizeLods[i]-1,_=isFinite(r)?Math.PI/(2*m):2*Math.PI/(2*vi-1),x=r/_,u=isFinite(r)?1+Math.floor(h*x):vi;u>vi&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${u} samples when the maximum is set to ${vi}`);const d=[];let b=0;for(let A=0;A<vi;++A){const w=A/x,y=Math.exp(-w*w/2);d.push(y),A===0?b+=y:A<u&&(b+=2*y)}for(let A=0;A<d.length;A++)d[A]=d[A]/b;p.envMap.value=t.texture,p.samples.value=u,p.weights.value=d,p.latitudinal.value=a==="latitudinal",o&&(p.poleAxis.value=o);const{_lodMax:v}=this;p.dTheta.value=_,p.mipInt.value=v-i;const g=this._sizeLods[s],T=3*g*(s>v-ns?s-v+ns:0),S=4*(this._cubeSize-g);yr(e,T,S,3*g,2*g),l.setRenderTarget(e),l.render(f,Ra)}}function ym(n){const t=[],e=[],i=[];let s=n;const r=n-ns+1+Yc.length;for(let a=0;a<r;a++){const o=Math.pow(2,s);e.push(o);let l=1/o;a>n-ns?l=Yc[a-n+ns-1]:a===0&&(l=0),i.push(l);const c=1/(o-2),h=-c,f=1+c,p=[h,h,f,h,f,f,h,h,f,f,h,f],m=6,_=6,x=3,u=2,d=1,b=new Float32Array(x*_*m),v=new Float32Array(u*_*m),g=new Float32Array(d*_*m);for(let S=0;S<m;S++){const A=S%3*2/3-1,w=S>2?0:-1,y=[A,w,0,A+2/3,w,0,A+2/3,w+1,0,A,w,0,A+2/3,w+1,0,A,w+1,0];b.set(y,x*_*S),v.set(p,u*_*S);const M=[S,S,S,S,S,S];g.set(M,d*_*S)}const T=new ie;T.setAttribute("position",new ee(b,x)),T.setAttribute("uv",new ee(v,u)),T.setAttribute("faceIndex",new ee(g,d)),t.push(T),s>ns&&s--}return{lodPlanes:t,sizeLods:e,sigmas:i}}function Jc(n,t,e){const i=new wi(n,t,e);return i.texture.mapping=qr,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function yr(n,t,e,i,s){n.viewport.set(t,e,i,s),n.scissor.set(t,e,i,s)}function Sm(n,t,e){const i=new Float32Array(vi),s=new B(0,1,0);return new oi({name:"SphericalGaussianBlur",defines:{n:vi,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:nc(),fragmentShader:`

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
		`,blending:ni,depthTest:!1,depthWrite:!1})}function Qc(){return new oi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:nc(),fragmentShader:`

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
		`,blending:ni,depthTest:!1,depthWrite:!1})}function tl(){return new oi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:nc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ni,depthTest:!1,depthWrite:!1})}function nc(){return`

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
	`}function Em(n){let t=new WeakMap,e=null;function i(o){if(o&&o.isTexture){const l=o.mapping,c=l===Ya||l===ja,h=l===hs||l===us;if(c||h){let f=t.get(o);const p=f!==void 0?f.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==p)return e===null&&(e=new Zc(n)),f=c?e.fromEquirectangular(o,f):e.fromCubemap(o,f),f.texture.pmremVersion=o.pmremVersion,t.set(o,f),f.texture;if(f!==void 0)return f.texture;{const m=o.image;return c&&m&&m.height>0||h&&m&&s(m)?(e===null&&(e=new Zc(n)),f=c?e.fromEquirectangular(o):e.fromCubemap(o),f.texture.pmremVersion=o.pmremVersion,t.set(o,f),o.addEventListener("dispose",r),f.texture):null}}}return o}function s(o){let l=0;const c=6;for(let h=0;h<c;h++)o[h]!==void 0&&l++;return l===c}function r(o){const l=o.target;l.removeEventListener("dispose",r);const c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function a(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:i,dispose:a}}function bm(n){const t={};function e(i){if(t[i]!==void 0)return t[i];let s;switch(i){case"WEBGL_depth_texture":s=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=n.getExtension(i)}return t[i]=s,s}return{has:function(i){return e(i)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(i){const s=e(i);return s===null&&Os("THREE.WebGLRenderer: "+i+" extension not supported."),s}}}function Tm(n,t,e,i){const s={},r=new WeakMap;function a(f){const p=f.target;p.index!==null&&t.remove(p.index);for(const _ in p.attributes)t.remove(p.attributes[_]);p.removeEventListener("dispose",a),delete s[p.id];const m=r.get(p);m&&(t.remove(m),r.delete(p)),i.releaseStatesOfGeometry(p),p.isInstancedBufferGeometry===!0&&delete p._maxInstanceCount,e.memory.geometries--}function o(f,p){return s[p.id]===!0||(p.addEventListener("dispose",a),s[p.id]=!0,e.memory.geometries++),p}function l(f){const p=f.attributes;for(const m in p)t.update(p[m],n.ARRAY_BUFFER)}function c(f){const p=[],m=f.index,_=f.attributes.position;let x=0;if(m!==null){const b=m.array;x=m.version;for(let v=0,g=b.length;v<g;v+=3){const T=b[v+0],S=b[v+1],A=b[v+2];p.push(T,S,S,A,A,T)}}else if(_!==void 0){const b=_.array;x=_.version;for(let v=0,g=b.length/3-1;v<g;v+=3){const T=v+0,S=v+1,A=v+2;p.push(T,S,S,A,A,T)}}else return;const u=new(jl(p)?Ql:Jl)(p,1);u.version=x;const d=r.get(f);d&&t.remove(d),r.set(f,u)}function h(f){const p=r.get(f);if(p){const m=f.index;m!==null&&p.version<m.version&&c(f)}else c(f);return r.get(f)}return{get:o,update:l,getWireframeAttribute:h}}function Am(n,t,e){let i;function s(p){i=p}let r,a;function o(p){r=p.type,a=p.bytesPerElement}function l(p,m){n.drawElements(i,m,r,p*a),e.update(m,i,1)}function c(p,m,_){_!==0&&(n.drawElementsInstanced(i,m,r,p*a,_),e.update(m,i,_))}function h(p,m,_){if(_===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,m,0,r,p,0,_);let u=0;for(let d=0;d<_;d++)u+=m[d];e.update(u,i,1)}function f(p,m,_,x){if(_===0)return;const u=t.get("WEBGL_multi_draw");if(u===null)for(let d=0;d<p.length;d++)c(p[d]/a,m[d],x[d]);else{u.multiDrawElementsInstancedWEBGL(i,m,0,r,p,0,x,0,_);let d=0;for(let b=0;b<_;b++)d+=m[b]*x[b];e.update(d,i,1)}}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=f}function wm(n){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,a,o){switch(e.calls++,a){case n.TRIANGLES:e.triangles+=o*(r/3);break;case n.LINES:e.lines+=o*(r/2);break;case n.LINE_STRIP:e.lines+=o*(r-1);break;case n.LINE_LOOP:e.lines+=o*r;break;case n.POINTS:e.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:i}}function Rm(n,t,e){const i=new WeakMap,s=new Ee;function r(a,o,l){const c=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,f=h!==void 0?h.length:0;let p=i.get(o);if(p===void 0||p.count!==f){let M=function(){w.dispose(),i.delete(o),o.removeEventListener("dispose",M)};var m=M;p!==void 0&&p.texture.dispose();const _=o.morphAttributes.position!==void 0,x=o.morphAttributes.normal!==void 0,u=o.morphAttributes.color!==void 0,d=o.morphAttributes.position||[],b=o.morphAttributes.normal||[],v=o.morphAttributes.color||[];let g=0;_===!0&&(g=1),x===!0&&(g=2),u===!0&&(g=3);let T=o.attributes.position.count*g,S=1;T>t.maxTextureSize&&(S=Math.ceil(T/t.maxTextureSize),T=t.maxTextureSize);const A=new Float32Array(T*S*4*f),w=new Kl(A,T,S,f);w.type=zn,w.needsUpdate=!0;const y=g*4;for(let C=0;C<f;C++){const I=d[C],N=b[C],L=v[C],U=T*S*4*C;for(let k=0;k<I.count;k++){const F=k*y;_===!0&&(s.fromBufferAttribute(I,k),A[U+F+0]=s.x,A[U+F+1]=s.y,A[U+F+2]=s.z,A[U+F+3]=0),x===!0&&(s.fromBufferAttribute(N,k),A[U+F+4]=s.x,A[U+F+5]=s.y,A[U+F+6]=s.z,A[U+F+7]=0),u===!0&&(s.fromBufferAttribute(L,k),A[U+F+8]=s.x,A[U+F+9]=s.y,A[U+F+10]=s.z,A[U+F+11]=L.itemSize===4?s.w:1)}}p={count:f,texture:w,size:new Vt(T,S)},i.set(o,p),o.addEventListener("dispose",M)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",a.morphTexture,e);else{let _=0;for(let u=0;u<c.length;u++)_+=c[u];const x=o.morphTargetsRelative?1:1-_;l.getUniforms().setValue(n,"morphTargetBaseInfluence",x),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",p.texture,e),l.getUniforms().setValue(n,"morphTargetsTextureSize",p.size)}return{update:r}}function Cm(n,t,e,i){let s=new WeakMap;function r(l){const c=i.render.frame,h=l.geometry,f=t.get(l,h);if(s.get(f)!==c&&(t.update(f),s.set(f,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),s.get(l)!==c&&(e.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,n.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){const p=l.skeleton;s.get(p)!==c&&(p.update(),s.set(p,c))}return f}function a(){s=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:r,dispose:a}}const ch=new Xe,el=new rh(1,1),lh=new Kl,hh=new Qu,uh=new nh,nl=[],il=[],sl=new Float32Array(16),rl=new Float32Array(9),al=new Float32Array(4);function ms(n,t,e){const i=n[0];if(i<=0||i>0)return n;const s=t*e;let r=nl[s];if(r===void 0&&(r=new Float32Array(s),nl[s]=r),t!==0){i.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,n[a].toArray(r,o)}return r}function De(n,t){if(n.length!==t.length)return!1;for(let e=0,i=n.length;e<i;e++)if(n[e]!==t[e])return!1;return!0}function Le(n,t){for(let e=0,i=t.length;e<i;e++)n[e]=t[e]}function Kr(n,t){let e=il[t];e===void 0&&(e=new Int32Array(t),il[t]=e);for(let i=0;i!==t;++i)e[i]=n.allocateTextureUnit();return e}function Pm(n,t){const e=this.cache;e[0]!==t&&(n.uniform1f(this.addr,t),e[0]=t)}function Dm(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(De(e,t))return;n.uniform2fv(this.addr,t),Le(e,t)}}function Lm(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(n.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(De(e,t))return;n.uniform3fv(this.addr,t),Le(e,t)}}function Im(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(De(e,t))return;n.uniform4fv(this.addr,t),Le(e,t)}}function Um(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(De(e,t))return;n.uniformMatrix2fv(this.addr,!1,t),Le(e,t)}else{if(De(e,i))return;al.set(i),n.uniformMatrix2fv(this.addr,!1,al),Le(e,i)}}function Fm(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(De(e,t))return;n.uniformMatrix3fv(this.addr,!1,t),Le(e,t)}else{if(De(e,i))return;rl.set(i),n.uniformMatrix3fv(this.addr,!1,rl),Le(e,i)}}function Nm(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(De(e,t))return;n.uniformMatrix4fv(this.addr,!1,t),Le(e,t)}else{if(De(e,i))return;sl.set(i),n.uniformMatrix4fv(this.addr,!1,sl),Le(e,i)}}function Om(n,t){const e=this.cache;e[0]!==t&&(n.uniform1i(this.addr,t),e[0]=t)}function Bm(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(De(e,t))return;n.uniform2iv(this.addr,t),Le(e,t)}}function zm(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(De(e,t))return;n.uniform3iv(this.addr,t),Le(e,t)}}function km(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(De(e,t))return;n.uniform4iv(this.addr,t),Le(e,t)}}function Hm(n,t){const e=this.cache;e[0]!==t&&(n.uniform1ui(this.addr,t),e[0]=t)}function Gm(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(De(e,t))return;n.uniform2uiv(this.addr,t),Le(e,t)}}function Vm(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(De(e,t))return;n.uniform3uiv(this.addr,t),Le(e,t)}}function Wm(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(De(e,t))return;n.uniform4uiv(this.addr,t),Le(e,t)}}function Xm(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_2D_SHADOW?(el.compareFunction=Yl,r=el):r=ch,e.setTexture2D(t||r,s)}function qm(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture3D(t||hh,s)}function $m(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTextureCube(t||uh,s)}function Ym(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture2DArray(t||lh,s)}function jm(n){switch(n){case 5126:return Pm;case 35664:return Dm;case 35665:return Lm;case 35666:return Im;case 35674:return Um;case 35675:return Fm;case 35676:return Nm;case 5124:case 35670:return Om;case 35667:case 35671:return Bm;case 35668:case 35672:return zm;case 35669:case 35673:return km;case 5125:return Hm;case 36294:return Gm;case 36295:return Vm;case 36296:return Wm;case 35678:case 36198:case 36298:case 36306:case 35682:return Xm;case 35679:case 36299:case 36307:return qm;case 35680:case 36300:case 36308:case 36293:return $m;case 36289:case 36303:case 36311:case 36292:return Ym}}function Km(n,t){n.uniform1fv(this.addr,t)}function Zm(n,t){const e=ms(t,this.size,2);n.uniform2fv(this.addr,e)}function Jm(n,t){const e=ms(t,this.size,3);n.uniform3fv(this.addr,e)}function Qm(n,t){const e=ms(t,this.size,4);n.uniform4fv(this.addr,e)}function tg(n,t){const e=ms(t,this.size,4);n.uniformMatrix2fv(this.addr,!1,e)}function eg(n,t){const e=ms(t,this.size,9);n.uniformMatrix3fv(this.addr,!1,e)}function ng(n,t){const e=ms(t,this.size,16);n.uniformMatrix4fv(this.addr,!1,e)}function ig(n,t){n.uniform1iv(this.addr,t)}function sg(n,t){n.uniform2iv(this.addr,t)}function rg(n,t){n.uniform3iv(this.addr,t)}function ag(n,t){n.uniform4iv(this.addr,t)}function og(n,t){n.uniform1uiv(this.addr,t)}function cg(n,t){n.uniform2uiv(this.addr,t)}function lg(n,t){n.uniform3uiv(this.addr,t)}function hg(n,t){n.uniform4uiv(this.addr,t)}function ug(n,t,e){const i=this.cache,s=t.length,r=Kr(e,s);De(i,r)||(n.uniform1iv(this.addr,r),Le(i,r));for(let a=0;a!==s;++a)e.setTexture2D(t[a]||ch,r[a])}function dg(n,t,e){const i=this.cache,s=t.length,r=Kr(e,s);De(i,r)||(n.uniform1iv(this.addr,r),Le(i,r));for(let a=0;a!==s;++a)e.setTexture3D(t[a]||hh,r[a])}function fg(n,t,e){const i=this.cache,s=t.length,r=Kr(e,s);De(i,r)||(n.uniform1iv(this.addr,r),Le(i,r));for(let a=0;a!==s;++a)e.setTextureCube(t[a]||uh,r[a])}function pg(n,t,e){const i=this.cache,s=t.length,r=Kr(e,s);De(i,r)||(n.uniform1iv(this.addr,r),Le(i,r));for(let a=0;a!==s;++a)e.setTexture2DArray(t[a]||lh,r[a])}function mg(n){switch(n){case 5126:return Km;case 35664:return Zm;case 35665:return Jm;case 35666:return Qm;case 35674:return tg;case 35675:return eg;case 35676:return ng;case 5124:case 35670:return ig;case 35667:case 35671:return sg;case 35668:case 35672:return rg;case 35669:case 35673:return ag;case 5125:return og;case 36294:return cg;case 36295:return lg;case 36296:return hg;case 35678:case 36198:case 36298:case 36306:case 35682:return ug;case 35679:case 36299:case 36307:return dg;case 35680:case 36300:case 36308:case 36293:return fg;case 36289:case 36303:case 36311:case 36292:return pg}}class gg{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.setValue=jm(e.type)}}class _g{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=mg(e.type)}}class xg{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,i){const s=this.seq;for(let r=0,a=s.length;r!==a;++r){const o=s[r];o.setValue(t,e[o.id],i)}}}const Ia=/(\w+)(\])?(\[|\.)?/g;function ol(n,t){n.seq.push(t),n.map[t.id]=t}function Mg(n,t,e){const i=n.name,s=i.length;for(Ia.lastIndex=0;;){const r=Ia.exec(i),a=Ia.lastIndex;let o=r[1];const l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){ol(e,c===void 0?new gg(o,n,t):new _g(o,n,t));break}else{let f=e.map[o];f===void 0&&(f=new xg(o),ol(e,f)),e=f}}}class Ir{constructor(t,e){this.seq=[],this.map={};const i=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<i;++s){const r=t.getActiveUniform(e,s),a=t.getUniformLocation(e,r.name);Mg(r,a,this)}}setValue(t,e,i,s){const r=this.map[e];r!==void 0&&r.setValue(t,i,s)}setOptional(t,e,i){const s=e[i];s!==void 0&&this.setValue(t,i,s)}static upload(t,e,i,s){for(let r=0,a=e.length;r!==a;++r){const o=e[r],l=i[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,s)}}static seqWithValue(t,e){const i=[];for(let s=0,r=t.length;s!==r;++s){const a=t[s];a.id in e&&i.push(a)}return i}}function cl(n,t,e){const i=n.createShader(t);return n.shaderSource(i,e),n.compileShader(i),i}const vg=37297;let yg=0;function Sg(n,t){const e=n.split(`
`),i=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=s;a<r;a++){const o=a+1;i.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return i.join(`
`)}const ll=new Jt;function Eg(n){ce._getMatrix(ll,ce.workingColorSpace,n);const t=`mat3( ${ll.elements.map(e=>e.toFixed(4))} )`;switch(ce.getTransfer(n)){case Or:return[t,"LinearTransferOETF"];case fe:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",n),[t,"LinearTransferOETF"]}}function hl(n,t,e){const i=n.getShaderParameter(t,n.COMPILE_STATUS),r=(n.getShaderInfoLog(t)||"").trim();if(i&&r==="")return"";const a=/ERROR: 0:(\d+)/.exec(r);if(a){const o=parseInt(a[1]);return e.toUpperCase()+`

`+r+`

`+Sg(n.getShaderSource(t),o)}else return r}function bg(n,t){const e=Eg(t);return[`vec4 ${n}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function Tg(n,t){let e;switch(t){case du:e="Linear";break;case fu:e="Reinhard";break;case pu:e="Cineon";break;case Bl:e="ACESFilmic";break;case gu:e="AgX";break;case _u:e="Neutral";break;case mu:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+n+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const Sr=new B;function Ag(){ce.getLuminanceCoefficients(Sr);const n=Sr.x.toFixed(4),t=Sr.y.toFixed(4),e=Sr.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function wg(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(As).join(`
`)}function Rg(n){const t=[];for(const e in n){const i=n[e];i!==!1&&t.push("#define "+e+" "+i)}return t.join(`
`)}function Cg(n,t){const e={},i=n.getProgramParameter(t,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){const r=n.getActiveAttrib(t,s),a=r.name;let o=1;r.type===n.FLOAT_MAT2&&(o=2),r.type===n.FLOAT_MAT3&&(o=3),r.type===n.FLOAT_MAT4&&(o=4),e[a]={type:r.type,location:n.getAttribLocation(t,a),locationSize:o}}return e}function As(n){return n!==""}function ul(n,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function dl(n,t){return n.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const Pg=/^[ \t]*#include +<([\w\d./]+)>/gm;function Po(n){return n.replace(Pg,Lg)}const Dg=new Map;function Lg(n,t){let e=Qt[t];if(e===void 0){const i=Dg.get(t);if(i!==void 0)e=Qt[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,i);else throw new Error("Can not resolve #include <"+t+">")}return Po(e)}const Ig=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function fl(n){return n.replace(Ig,Ug)}function Ug(n,t,e,i){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function pl(n){let t=`precision ${n.precision} float;
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
#define LOW_PRECISION`),t}function Fg(n){let t="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===Nl?t="SHADOWMAP_TYPE_PCF":n.shadowMapType===Xh?t="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===On&&(t="SHADOWMAP_TYPE_VSM"),t}function Ng(n){let t="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case hs:case us:t="ENVMAP_TYPE_CUBE";break;case qr:t="ENVMAP_TYPE_CUBE_UV";break}return t}function Og(n){let t="ENVMAP_MODE_REFLECTION";return n.envMap&&n.envMapMode===us&&(t="ENVMAP_MODE_REFRACTION"),t}function Bg(n){let t="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case Ol:t="ENVMAP_BLENDING_MULTIPLY";break;case hu:t="ENVMAP_BLENDING_MIX";break;case uu:t="ENVMAP_BLENDING_ADD";break}return t}function zg(n){const t=n.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:i,maxMip:e}}function kg(n,t,e,i){const s=n.getContext(),r=e.defines;let a=e.vertexShader,o=e.fragmentShader;const l=Fg(e),c=Ng(e),h=Og(e),f=Bg(e),p=zg(e),m=wg(e),_=Rg(r),x=s.createProgram();let u,d,b=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(u=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_].filter(As).join(`
`),u.length>0&&(u+=`
`),d=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_].filter(As).join(`
`),d.length>0&&(d+=`
`)):(u=[pl(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(As).join(`
`),d=[pl(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+f:"",p?"#define CUBEUV_TEXEL_WIDTH "+p.texelWidth:"",p?"#define CUBEUV_TEXEL_HEIGHT "+p.texelHeight:"",p?"#define CUBEUV_MAX_MIP "+p.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==ii?"#define TONE_MAPPING":"",e.toneMapping!==ii?Qt.tonemapping_pars_fragment:"",e.toneMapping!==ii?Tg("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Qt.colorspace_pars_fragment,bg("linearToOutputTexel",e.outputColorSpace),Ag(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(As).join(`
`)),a=Po(a),a=ul(a,e),a=dl(a,e),o=Po(o),o=ul(o,e),o=dl(o,e),a=fl(a),o=fl(o),e.isRawShaderMaterial!==!0&&(b=`#version 300 es
`,u=[m,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+u,d=["#define varying in",e.glslVersion===gc?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===gc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+d);const v=b+u+a,g=b+d+o,T=cl(s,s.VERTEX_SHADER,v),S=cl(s,s.FRAGMENT_SHADER,g);s.attachShader(x,T),s.attachShader(x,S),e.index0AttributeName!==void 0?s.bindAttribLocation(x,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(x,0,"position"),s.linkProgram(x);function A(C){if(n.debug.checkShaderErrors){const I=s.getProgramInfoLog(x)||"",N=s.getShaderInfoLog(T)||"",L=s.getShaderInfoLog(S)||"",U=I.trim(),k=N.trim(),F=L.trim();let O=!0,Z=!0;if(s.getProgramParameter(x,s.LINK_STATUS)===!1)if(O=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,x,T,S);else{const $=hl(s,T,"vertex"),it=hl(s,S,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(x,s.VALIDATE_STATUS)+`

Material Name: `+C.name+`
Material Type: `+C.type+`

Program Info Log: `+U+`
`+$+`
`+it)}else U!==""?console.warn("THREE.WebGLProgram: Program Info Log:",U):(k===""||F==="")&&(Z=!1);Z&&(C.diagnostics={runnable:O,programLog:U,vertexShader:{log:k,prefix:u},fragmentShader:{log:F,prefix:d}})}s.deleteShader(T),s.deleteShader(S),w=new Ir(s,x),y=Cg(s,x)}let w;this.getUniforms=function(){return w===void 0&&A(this),w};let y;this.getAttributes=function(){return y===void 0&&A(this),y};let M=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return M===!1&&(M=s.getProgramParameter(x,vg)),M},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(x),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=yg++,this.cacheKey=t,this.usedTimes=1,this.program=x,this.vertexShader=T,this.fragmentShader=S,this}let Hg=0;class Gg{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,i=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(i),a=this._getShaderCacheForMaterial(t);return a.has(s)===!1&&(a.add(s),s.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const i of e)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let i=e.get(t);return i===void 0&&(i=new Set,e.set(t,i)),i}_getShaderStage(t){const e=this.shaderCache;let i=e.get(t);return i===void 0&&(i=new Vg(t),e.set(t,i)),i}}class Vg{constructor(t){this.id=Hg++,this.code=t,this.usedTimes=0}}function Wg(n,t,e,i,s,r,a){const o=new Ko,l=new Gg,c=new Set,h=[],f=s.logarithmicDepthBuffer,p=s.vertexTextures;let m=s.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(y){return c.add(y),y===0?"uv":`uv${y}`}function u(y,M,C,I,N){const L=I.fog,U=N.geometry,k=y.isMeshStandardMaterial?I.environment:null,F=(y.isMeshStandardMaterial?e:t).get(y.envMap||k),O=F&&F.mapping===qr?F.image.height:null,Z=_[y.type];y.precision!==null&&(m=s.getMaxPrecision(y.precision),m!==y.precision&&console.warn("THREE.WebGLProgram.getParameters:",y.precision,"not supported, using",m,"instead."));const $=U.morphAttributes.position||U.morphAttributes.normal||U.morphAttributes.color,it=$!==void 0?$.length:0;let mt=0;U.morphAttributes.position!==void 0&&(mt=1),U.morphAttributes.normal!==void 0&&(mt=2),U.morphAttributes.color!==void 0&&(mt=3);let Ct,et,Q,q;if(Z){const he=An[Z];Ct=he.vertexShader,et=he.fragmentShader}else Ct=y.vertexShader,et=y.fragmentShader,l.update(y),Q=l.getVertexShaderID(y),q=l.getFragmentShaderID(y);const V=n.getRenderTarget(),at=n.state.buffers.depth.getReversed(),vt=N.isInstancedMesh===!0,yt=N.isBatchedMesh===!0,bt=!!y.map,Yt=!!y.matcap,D=!!F,Zt=!!y.aoMap,J=!!y.lightMap,lt=!!y.bumpMap,ct=!!y.normalMap,Bt=!!y.displacementMap,st=!!y.emissiveMap,gt=!!y.metalnessMap,Wt=!!y.roughnessMap,jt=y.anisotropy>0,P=y.clearcoat>0,E=y.dispersion>0,H=y.iridescence>0,K=y.sheen>0,nt=y.transmission>0,X=jt&&!!y.anisotropyMap,_t=P&&!!y.clearcoatMap,ut=P&&!!y.clearcoatNormalMap,At=P&&!!y.clearcoatRoughnessMap,wt=H&&!!y.iridescenceMap,ht=H&&!!y.iridescenceThicknessMap,Mt=K&&!!y.sheenColorMap,zt=K&&!!y.sheenRoughnessMap,Lt=!!y.specularMap,St=!!y.specularColorMap,$t=!!y.specularIntensityMap,z=nt&&!!y.transmissionMap,dt=nt&&!!y.thicknessMap,xt=!!y.gradientMap,Rt=!!y.alphaMap,ft=y.alphaTest>0,rt=!!y.alphaHash,Ut=!!y.extensions;let Kt=ii;y.toneMapped&&(V===null||V.isXRRenderTarget===!0)&&(Kt=n.toneMapping);const ge={shaderID:Z,shaderType:y.type,shaderName:y.name,vertexShader:Ct,fragmentShader:et,defines:y.defines,customVertexShaderID:Q,customFragmentShaderID:q,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:m,batching:yt,batchingColor:yt&&N._colorsTexture!==null,instancing:vt,instancingColor:vt&&N.instanceColor!==null,instancingMorph:vt&&N.morphTexture!==null,supportsVertexTextures:p,outputColorSpace:V===null?n.outputColorSpace:V.isXRRenderTarget===!0?V.texture.colorSpace:ds,alphaToCoverage:!!y.alphaToCoverage,map:bt,matcap:Yt,envMap:D,envMapMode:D&&F.mapping,envMapCubeUVHeight:O,aoMap:Zt,lightMap:J,bumpMap:lt,normalMap:ct,displacementMap:p&&Bt,emissiveMap:st,normalMapObjectSpace:ct&&y.normalMapType===Su,normalMapTangentSpace:ct&&y.normalMapType===yu,metalnessMap:gt,roughnessMap:Wt,anisotropy:jt,anisotropyMap:X,clearcoat:P,clearcoatMap:_t,clearcoatNormalMap:ut,clearcoatRoughnessMap:At,dispersion:E,iridescence:H,iridescenceMap:wt,iridescenceThicknessMap:ht,sheen:K,sheenColorMap:Mt,sheenRoughnessMap:zt,specularMap:Lt,specularColorMap:St,specularIntensityMap:$t,transmission:nt,transmissionMap:z,thicknessMap:dt,gradientMap:xt,opaque:y.transparent===!1&&y.blending===bi&&y.alphaToCoverage===!1,alphaMap:Rt,alphaTest:ft,alphaHash:rt,combine:y.combine,mapUv:bt&&x(y.map.channel),aoMapUv:Zt&&x(y.aoMap.channel),lightMapUv:J&&x(y.lightMap.channel),bumpMapUv:lt&&x(y.bumpMap.channel),normalMapUv:ct&&x(y.normalMap.channel),displacementMapUv:Bt&&x(y.displacementMap.channel),emissiveMapUv:st&&x(y.emissiveMap.channel),metalnessMapUv:gt&&x(y.metalnessMap.channel),roughnessMapUv:Wt&&x(y.roughnessMap.channel),anisotropyMapUv:X&&x(y.anisotropyMap.channel),clearcoatMapUv:_t&&x(y.clearcoatMap.channel),clearcoatNormalMapUv:ut&&x(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:At&&x(y.clearcoatRoughnessMap.channel),iridescenceMapUv:wt&&x(y.iridescenceMap.channel),iridescenceThicknessMapUv:ht&&x(y.iridescenceThicknessMap.channel),sheenColorMapUv:Mt&&x(y.sheenColorMap.channel),sheenRoughnessMapUv:zt&&x(y.sheenRoughnessMap.channel),specularMapUv:Lt&&x(y.specularMap.channel),specularColorMapUv:St&&x(y.specularColorMap.channel),specularIntensityMapUv:$t&&x(y.specularIntensityMap.channel),transmissionMapUv:z&&x(y.transmissionMap.channel),thicknessMapUv:dt&&x(y.thicknessMap.channel),alphaMapUv:Rt&&x(y.alphaMap.channel),vertexTangents:!!U.attributes.tangent&&(ct||jt),vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!U.attributes.color&&U.attributes.color.itemSize===4,pointsUvs:N.isPoints===!0&&!!U.attributes.uv&&(bt||Rt),fog:!!L,useFog:y.fog===!0,fogExp2:!!L&&L.isFogExp2,flatShading:y.flatShading===!0&&y.wireframe===!1,sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:f,reversedDepthBuffer:at,skinning:N.isSkinnedMesh===!0,morphTargets:U.morphAttributes.position!==void 0,morphNormals:U.morphAttributes.normal!==void 0,morphColors:U.morphAttributes.color!==void 0,morphTargetsCount:it,morphTextureStride:mt,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:y.dithering,shadowMapEnabled:n.shadowMap.enabled&&C.length>0,shadowMapType:n.shadowMap.type,toneMapping:Kt,decodeVideoTexture:bt&&y.map.isVideoTexture===!0&&ce.getTransfer(y.map.colorSpace)===fe,decodeVideoTextureEmissive:st&&y.emissiveMap.isVideoTexture===!0&&ce.getTransfer(y.emissiveMap.colorSpace)===fe,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===Bn,flipSided:y.side===je,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionClipCullDistance:Ut&&y.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ut&&y.extensions.multiDraw===!0||yt)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()};return ge.vertexUv1s=c.has(1),ge.vertexUv2s=c.has(2),ge.vertexUv3s=c.has(3),c.clear(),ge}function d(y){const M=[];if(y.shaderID?M.push(y.shaderID):(M.push(y.customVertexShaderID),M.push(y.customFragmentShaderID)),y.defines!==void 0)for(const C in y.defines)M.push(C),M.push(y.defines[C]);return y.isRawShaderMaterial===!1&&(b(M,y),v(M,y),M.push(n.outputColorSpace)),M.push(y.customProgramCacheKey),M.join()}function b(y,M){y.push(M.precision),y.push(M.outputColorSpace),y.push(M.envMapMode),y.push(M.envMapCubeUVHeight),y.push(M.mapUv),y.push(M.alphaMapUv),y.push(M.lightMapUv),y.push(M.aoMapUv),y.push(M.bumpMapUv),y.push(M.normalMapUv),y.push(M.displacementMapUv),y.push(M.emissiveMapUv),y.push(M.metalnessMapUv),y.push(M.roughnessMapUv),y.push(M.anisotropyMapUv),y.push(M.clearcoatMapUv),y.push(M.clearcoatNormalMapUv),y.push(M.clearcoatRoughnessMapUv),y.push(M.iridescenceMapUv),y.push(M.iridescenceThicknessMapUv),y.push(M.sheenColorMapUv),y.push(M.sheenRoughnessMapUv),y.push(M.specularMapUv),y.push(M.specularColorMapUv),y.push(M.specularIntensityMapUv),y.push(M.transmissionMapUv),y.push(M.thicknessMapUv),y.push(M.combine),y.push(M.fogExp2),y.push(M.sizeAttenuation),y.push(M.morphTargetsCount),y.push(M.morphAttributeCount),y.push(M.numDirLights),y.push(M.numPointLights),y.push(M.numSpotLights),y.push(M.numSpotLightMaps),y.push(M.numHemiLights),y.push(M.numRectAreaLights),y.push(M.numDirLightShadows),y.push(M.numPointLightShadows),y.push(M.numSpotLightShadows),y.push(M.numSpotLightShadowsWithMaps),y.push(M.numLightProbes),y.push(M.shadowMapType),y.push(M.toneMapping),y.push(M.numClippingPlanes),y.push(M.numClipIntersection),y.push(M.depthPacking)}function v(y,M){o.disableAll(),M.supportsVertexTextures&&o.enable(0),M.instancing&&o.enable(1),M.instancingColor&&o.enable(2),M.instancingMorph&&o.enable(3),M.matcap&&o.enable(4),M.envMap&&o.enable(5),M.normalMapObjectSpace&&o.enable(6),M.normalMapTangentSpace&&o.enable(7),M.clearcoat&&o.enable(8),M.iridescence&&o.enable(9),M.alphaTest&&o.enable(10),M.vertexColors&&o.enable(11),M.vertexAlphas&&o.enable(12),M.vertexUv1s&&o.enable(13),M.vertexUv2s&&o.enable(14),M.vertexUv3s&&o.enable(15),M.vertexTangents&&o.enable(16),M.anisotropy&&o.enable(17),M.alphaHash&&o.enable(18),M.batching&&o.enable(19),M.dispersion&&o.enable(20),M.batchingColor&&o.enable(21),M.gradientMap&&o.enable(22),y.push(o.mask),o.disableAll(),M.fog&&o.enable(0),M.useFog&&o.enable(1),M.flatShading&&o.enable(2),M.logarithmicDepthBuffer&&o.enable(3),M.reversedDepthBuffer&&o.enable(4),M.skinning&&o.enable(5),M.morphTargets&&o.enable(6),M.morphNormals&&o.enable(7),M.morphColors&&o.enable(8),M.premultipliedAlpha&&o.enable(9),M.shadowMapEnabled&&o.enable(10),M.doubleSided&&o.enable(11),M.flipSided&&o.enable(12),M.useDepthPacking&&o.enable(13),M.dithering&&o.enable(14),M.transmission&&o.enable(15),M.sheen&&o.enable(16),M.opaque&&o.enable(17),M.pointsUvs&&o.enable(18),M.decodeVideoTexture&&o.enable(19),M.decodeVideoTextureEmissive&&o.enable(20),M.alphaToCoverage&&o.enable(21),y.push(o.mask)}function g(y){const M=_[y.type];let C;if(M){const I=An[M];C=dd.clone(I.uniforms)}else C=y.uniforms;return C}function T(y,M){let C;for(let I=0,N=h.length;I<N;I++){const L=h[I];if(L.cacheKey===M){C=L,++C.usedTimes;break}}return C===void 0&&(C=new kg(n,M,y,r),h.push(C)),C}function S(y){if(--y.usedTimes===0){const M=h.indexOf(y);h[M]=h[h.length-1],h.pop(),y.destroy()}}function A(y){l.remove(y)}function w(){l.dispose()}return{getParameters:u,getProgramCacheKey:d,getUniforms:g,acquireProgram:T,releaseProgram:S,releaseShaderCache:A,programs:h,dispose:w}}function Xg(){let n=new WeakMap;function t(a){return n.has(a)}function e(a){let o=n.get(a);return o===void 0&&(o={},n.set(a,o)),o}function i(a){n.delete(a)}function s(a,o,l){n.get(a)[o]=l}function r(){n=new WeakMap}return{has:t,get:e,remove:i,update:s,dispose:r}}function qg(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.material.id!==t.material.id?n.material.id-t.material.id:n.z!==t.z?n.z-t.z:n.id-t.id}function ml(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.z!==t.z?t.z-n.z:n.id-t.id}function gl(){const n=[];let t=0;const e=[],i=[],s=[];function r(){t=0,e.length=0,i.length=0,s.length=0}function a(f,p,m,_,x,u){let d=n[t];return d===void 0?(d={id:f.id,object:f,geometry:p,material:m,groupOrder:_,renderOrder:f.renderOrder,z:x,group:u},n[t]=d):(d.id=f.id,d.object=f,d.geometry=p,d.material=m,d.groupOrder=_,d.renderOrder=f.renderOrder,d.z=x,d.group=u),t++,d}function o(f,p,m,_,x,u){const d=a(f,p,m,_,x,u);m.transmission>0?i.push(d):m.transparent===!0?s.push(d):e.push(d)}function l(f,p,m,_,x,u){const d=a(f,p,m,_,x,u);m.transmission>0?i.unshift(d):m.transparent===!0?s.unshift(d):e.unshift(d)}function c(f,p){e.length>1&&e.sort(f||qg),i.length>1&&i.sort(p||ml),s.length>1&&s.sort(p||ml)}function h(){for(let f=t,p=n.length;f<p;f++){const m=n[f];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:e,transmissive:i,transparent:s,init:r,push:o,unshift:l,finish:h,sort:c}}function $g(){let n=new WeakMap;function t(i,s){const r=n.get(i);let a;return r===void 0?(a=new gl,n.set(i,[a])):s>=r.length?(a=new gl,r.push(a)):a=r[s],a}function e(){n=new WeakMap}return{get:t,dispose:e}}function Yg(){const n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new B,color:new Ht};break;case"SpotLight":e={position:new B,direction:new B,color:new Ht,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new B,color:new Ht,distance:0,decay:0};break;case"HemisphereLight":e={direction:new B,skyColor:new Ht,groundColor:new Ht};break;case"RectAreaLight":e={color:new Ht,position:new B,halfWidth:new B,halfHeight:new B};break}return n[t.id]=e,e}}}function jg(){const n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Vt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Vt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Vt,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[t.id]=e,e}}}let Kg=0;function Zg(n,t){return(t.castShadow?2:0)-(n.castShadow?2:0)+(t.map?1:0)-(n.map?1:0)}function Jg(n){const t=new Yg,e=jg(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new B);const s=new B,r=new ve,a=new ve;function o(c){let h=0,f=0,p=0;for(let y=0;y<9;y++)i.probe[y].set(0,0,0);let m=0,_=0,x=0,u=0,d=0,b=0,v=0,g=0,T=0,S=0,A=0;c.sort(Zg);for(let y=0,M=c.length;y<M;y++){const C=c[y],I=C.color,N=C.intensity,L=C.distance,U=C.shadow&&C.shadow.map?C.shadow.map.texture:null;if(C.isAmbientLight)h+=I.r*N,f+=I.g*N,p+=I.b*N;else if(C.isLightProbe){for(let k=0;k<9;k++)i.probe[k].addScaledVector(C.sh.coefficients[k],N);A++}else if(C.isDirectionalLight){const k=t.get(C);if(k.color.copy(C.color).multiplyScalar(C.intensity),C.castShadow){const F=C.shadow,O=e.get(C);O.shadowIntensity=F.intensity,O.shadowBias=F.bias,O.shadowNormalBias=F.normalBias,O.shadowRadius=F.radius,O.shadowMapSize=F.mapSize,i.directionalShadow[m]=O,i.directionalShadowMap[m]=U,i.directionalShadowMatrix[m]=C.shadow.matrix,b++}i.directional[m]=k,m++}else if(C.isSpotLight){const k=t.get(C);k.position.setFromMatrixPosition(C.matrixWorld),k.color.copy(I).multiplyScalar(N),k.distance=L,k.coneCos=Math.cos(C.angle),k.penumbraCos=Math.cos(C.angle*(1-C.penumbra)),k.decay=C.decay,i.spot[x]=k;const F=C.shadow;if(C.map&&(i.spotLightMap[T]=C.map,T++,F.updateMatrices(C),C.castShadow&&S++),i.spotLightMatrix[x]=F.matrix,C.castShadow){const O=e.get(C);O.shadowIntensity=F.intensity,O.shadowBias=F.bias,O.shadowNormalBias=F.normalBias,O.shadowRadius=F.radius,O.shadowMapSize=F.mapSize,i.spotShadow[x]=O,i.spotShadowMap[x]=U,g++}x++}else if(C.isRectAreaLight){const k=t.get(C);k.color.copy(I).multiplyScalar(N),k.halfWidth.set(C.width*.5,0,0),k.halfHeight.set(0,C.height*.5,0),i.rectArea[u]=k,u++}else if(C.isPointLight){const k=t.get(C);if(k.color.copy(C.color).multiplyScalar(C.intensity),k.distance=C.distance,k.decay=C.decay,C.castShadow){const F=C.shadow,O=e.get(C);O.shadowIntensity=F.intensity,O.shadowBias=F.bias,O.shadowNormalBias=F.normalBias,O.shadowRadius=F.radius,O.shadowMapSize=F.mapSize,O.shadowCameraNear=F.camera.near,O.shadowCameraFar=F.camera.far,i.pointShadow[_]=O,i.pointShadowMap[_]=U,i.pointShadowMatrix[_]=C.shadow.matrix,v++}i.point[_]=k,_++}else if(C.isHemisphereLight){const k=t.get(C);k.skyColor.copy(C.color).multiplyScalar(N),k.groundColor.copy(C.groundColor).multiplyScalar(N),i.hemi[d]=k,d++}}u>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Et.LTC_FLOAT_1,i.rectAreaLTC2=Et.LTC_FLOAT_2):(i.rectAreaLTC1=Et.LTC_HALF_1,i.rectAreaLTC2=Et.LTC_HALF_2)),i.ambient[0]=h,i.ambient[1]=f,i.ambient[2]=p;const w=i.hash;(w.directionalLength!==m||w.pointLength!==_||w.spotLength!==x||w.rectAreaLength!==u||w.hemiLength!==d||w.numDirectionalShadows!==b||w.numPointShadows!==v||w.numSpotShadows!==g||w.numSpotMaps!==T||w.numLightProbes!==A)&&(i.directional.length=m,i.spot.length=x,i.rectArea.length=u,i.point.length=_,i.hemi.length=d,i.directionalShadow.length=b,i.directionalShadowMap.length=b,i.pointShadow.length=v,i.pointShadowMap.length=v,i.spotShadow.length=g,i.spotShadowMap.length=g,i.directionalShadowMatrix.length=b,i.pointShadowMatrix.length=v,i.spotLightMatrix.length=g+T-S,i.spotLightMap.length=T,i.numSpotLightShadowsWithMaps=S,i.numLightProbes=A,w.directionalLength=m,w.pointLength=_,w.spotLength=x,w.rectAreaLength=u,w.hemiLength=d,w.numDirectionalShadows=b,w.numPointShadows=v,w.numSpotShadows=g,w.numSpotMaps=T,w.numLightProbes=A,i.version=Kg++)}function l(c,h){let f=0,p=0,m=0,_=0,x=0;const u=h.matrixWorldInverse;for(let d=0,b=c.length;d<b;d++){const v=c[d];if(v.isDirectionalLight){const g=i.directional[f];g.direction.setFromMatrixPosition(v.matrixWorld),s.setFromMatrixPosition(v.target.matrixWorld),g.direction.sub(s),g.direction.transformDirection(u),f++}else if(v.isSpotLight){const g=i.spot[m];g.position.setFromMatrixPosition(v.matrixWorld),g.position.applyMatrix4(u),g.direction.setFromMatrixPosition(v.matrixWorld),s.setFromMatrixPosition(v.target.matrixWorld),g.direction.sub(s),g.direction.transformDirection(u),m++}else if(v.isRectAreaLight){const g=i.rectArea[_];g.position.setFromMatrixPosition(v.matrixWorld),g.position.applyMatrix4(u),a.identity(),r.copy(v.matrixWorld),r.premultiply(u),a.extractRotation(r),g.halfWidth.set(v.width*.5,0,0),g.halfHeight.set(0,v.height*.5,0),g.halfWidth.applyMatrix4(a),g.halfHeight.applyMatrix4(a),_++}else if(v.isPointLight){const g=i.point[p];g.position.setFromMatrixPosition(v.matrixWorld),g.position.applyMatrix4(u),p++}else if(v.isHemisphereLight){const g=i.hemi[x];g.direction.setFromMatrixPosition(v.matrixWorld),g.direction.transformDirection(u),x++}}}return{setup:o,setupView:l,state:i}}function _l(n){const t=new Jg(n),e=[],i=[];function s(h){c.camera=h,e.length=0,i.length=0}function r(h){e.push(h)}function a(h){i.push(h)}function o(){t.setup(e)}function l(h){t.setupView(e,h)}const c={lightsArray:e,shadowsArray:i,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:o,setupLightsView:l,pushLight:r,pushShadow:a}}function Qg(n){let t=new WeakMap;function e(s,r=0){const a=t.get(s);let o;return a===void 0?(o=new _l(n),t.set(s,[o])):r>=a.length?(o=new _l(n),a.push(o)):o=a[r],o}function i(){t=new WeakMap}return{get:e,dispose:i}}const t0=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,e0=`uniform sampler2D shadow_pass;
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
}`;function n0(n,t,e){let i=new sh;const s=new Vt,r=new Vt,a=new Ee,o=new Td({depthPacking:vu}),l=new Ad,c={},h=e.maxTextureSize,f={[ri]:je,[je]:ri,[Bn]:Bn},p=new oi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Vt},radius:{value:4}},vertexShader:t0,fragmentShader:e0}),m=p.clone();m.defines.HORIZONTAL_PASS=1;const _=new ie;_.setAttribute("position",new ee(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const x=new hn(_,p),u=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Nl;let d=this.type;this.render=function(S,A,w){if(u.enabled===!1||u.autoUpdate===!1&&u.needsUpdate===!1||S.length===0)return;const y=n.getRenderTarget(),M=n.getActiveCubeFace(),C=n.getActiveMipmapLevel(),I=n.state;I.setBlending(ni),I.buffers.depth.getReversed()===!0?I.buffers.color.setClear(0,0,0,0):I.buffers.color.setClear(1,1,1,1),I.buffers.depth.setTest(!0),I.setScissorTest(!1);const N=d!==On&&this.type===On,L=d===On&&this.type!==On;for(let U=0,k=S.length;U<k;U++){const F=S[U],O=F.shadow;if(O===void 0){console.warn("THREE.WebGLShadowMap:",F,"has no shadow.");continue}if(O.autoUpdate===!1&&O.needsUpdate===!1)continue;s.copy(O.mapSize);const Z=O.getFrameExtents();if(s.multiply(Z),r.copy(O.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/Z.x),s.x=r.x*Z.x,O.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/Z.y),s.y=r.y*Z.y,O.mapSize.y=r.y)),O.map===null||N===!0||L===!0){const it=this.type!==On?{minFilter:En,magFilter:En}:{};O.map!==null&&O.map.dispose(),O.map=new wi(s.x,s.y,it),O.map.texture.name=F.name+".shadowMap",O.camera.updateProjectionMatrix()}n.setRenderTarget(O.map),n.clear();const $=O.getViewportCount();for(let it=0;it<$;it++){const mt=O.getViewport(it);a.set(r.x*mt.x,r.y*mt.y,r.x*mt.z,r.y*mt.w),I.viewport(a),O.updateMatrices(F,it),i=O.getFrustum(),g(A,w,O.camera,F,this.type)}O.isPointLightShadow!==!0&&this.type===On&&b(O,w),O.needsUpdate=!1}d=this.type,u.needsUpdate=!1,n.setRenderTarget(y,M,C)};function b(S,A){const w=t.update(x);p.defines.VSM_SAMPLES!==S.blurSamples&&(p.defines.VSM_SAMPLES=S.blurSamples,m.defines.VSM_SAMPLES=S.blurSamples,p.needsUpdate=!0,m.needsUpdate=!0),S.mapPass===null&&(S.mapPass=new wi(s.x,s.y)),p.uniforms.shadow_pass.value=S.map.texture,p.uniforms.resolution.value=S.mapSize,p.uniforms.radius.value=S.radius,n.setRenderTarget(S.mapPass),n.clear(),n.renderBufferDirect(A,null,w,p,x,null),m.uniforms.shadow_pass.value=S.mapPass.texture,m.uniforms.resolution.value=S.mapSize,m.uniforms.radius.value=S.radius,n.setRenderTarget(S.map),n.clear(),n.renderBufferDirect(A,null,w,m,x,null)}function v(S,A,w,y){let M=null;const C=w.isPointLight===!0?S.customDistanceMaterial:S.customDepthMaterial;if(C!==void 0)M=C;else if(M=w.isPointLight===!0?l:o,n.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0||A.alphaToCoverage===!0){const I=M.uuid,N=A.uuid;let L=c[I];L===void 0&&(L={},c[I]=L);let U=L[N];U===void 0&&(U=M.clone(),L[N]=U,A.addEventListener("dispose",T)),M=U}if(M.visible=A.visible,M.wireframe=A.wireframe,y===On?M.side=A.shadowSide!==null?A.shadowSide:A.side:M.side=A.shadowSide!==null?A.shadowSide:f[A.side],M.alphaMap=A.alphaMap,M.alphaTest=A.alphaToCoverage===!0?.5:A.alphaTest,M.map=A.map,M.clipShadows=A.clipShadows,M.clippingPlanes=A.clippingPlanes,M.clipIntersection=A.clipIntersection,M.displacementMap=A.displacementMap,M.displacementScale=A.displacementScale,M.displacementBias=A.displacementBias,M.wireframeLinewidth=A.wireframeLinewidth,M.linewidth=A.linewidth,w.isPointLight===!0&&M.isMeshDistanceMaterial===!0){const I=n.properties.get(M);I.light=w}return M}function g(S,A,w,y,M){if(S.visible===!1)return;if(S.layers.test(A.layers)&&(S.isMesh||S.isLine||S.isPoints)&&(S.castShadow||S.receiveShadow&&M===On)&&(!S.frustumCulled||i.intersectsObject(S))){S.modelViewMatrix.multiplyMatrices(w.matrixWorldInverse,S.matrixWorld);const N=t.update(S),L=S.material;if(Array.isArray(L)){const U=N.groups;for(let k=0,F=U.length;k<F;k++){const O=U[k],Z=L[O.materialIndex];if(Z&&Z.visible){const $=v(S,Z,y,M);S.onBeforeShadow(n,S,A,w,N,$,O),n.renderBufferDirect(w,null,N,$,S,O),S.onAfterShadow(n,S,A,w,N,$,O)}}}else if(L.visible){const U=v(S,L,y,M);S.onBeforeShadow(n,S,A,w,N,U,null),n.renderBufferDirect(w,null,N,U,S,null),S.onAfterShadow(n,S,A,w,N,U,null)}}const I=S.children;for(let N=0,L=I.length;N<L;N++)g(I[N],A,w,y,M)}function T(S){S.target.removeEventListener("dispose",T);for(const w in c){const y=c[w],M=S.target.uuid;M in y&&(y[M].dispose(),delete y[M])}}}const i0={[Ha]:Ga,[Va]:qa,[Wa]:$a,[ls]:Xa,[Ga]:Ha,[qa]:Va,[$a]:Wa,[Xa]:ls};function s0(n,t){function e(){let z=!1;const dt=new Ee;let xt=null;const Rt=new Ee(0,0,0,0);return{setMask:function(ft){xt!==ft&&!z&&(n.colorMask(ft,ft,ft,ft),xt=ft)},setLocked:function(ft){z=ft},setClear:function(ft,rt,Ut,Kt,ge){ge===!0&&(ft*=Kt,rt*=Kt,Ut*=Kt),dt.set(ft,rt,Ut,Kt),Rt.equals(dt)===!1&&(n.clearColor(ft,rt,Ut,Kt),Rt.copy(dt))},reset:function(){z=!1,xt=null,Rt.set(-1,0,0,0)}}}function i(){let z=!1,dt=!1,xt=null,Rt=null,ft=null;return{setReversed:function(rt){if(dt!==rt){const Ut=t.get("EXT_clip_control");rt?Ut.clipControlEXT(Ut.LOWER_LEFT_EXT,Ut.ZERO_TO_ONE_EXT):Ut.clipControlEXT(Ut.LOWER_LEFT_EXT,Ut.NEGATIVE_ONE_TO_ONE_EXT),dt=rt;const Kt=ft;ft=null,this.setClear(Kt)}},getReversed:function(){return dt},setTest:function(rt){rt?V(n.DEPTH_TEST):at(n.DEPTH_TEST)},setMask:function(rt){xt!==rt&&!z&&(n.depthMask(rt),xt=rt)},setFunc:function(rt){if(dt&&(rt=i0[rt]),Rt!==rt){switch(rt){case Ha:n.depthFunc(n.NEVER);break;case Ga:n.depthFunc(n.ALWAYS);break;case Va:n.depthFunc(n.LESS);break;case ls:n.depthFunc(n.LEQUAL);break;case Wa:n.depthFunc(n.EQUAL);break;case Xa:n.depthFunc(n.GEQUAL);break;case qa:n.depthFunc(n.GREATER);break;case $a:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}Rt=rt}},setLocked:function(rt){z=rt},setClear:function(rt){ft!==rt&&(dt&&(rt=1-rt),n.clearDepth(rt),ft=rt)},reset:function(){z=!1,xt=null,Rt=null,ft=null,dt=!1}}}function s(){let z=!1,dt=null,xt=null,Rt=null,ft=null,rt=null,Ut=null,Kt=null,ge=null;return{setTest:function(he){z||(he?V(n.STENCIL_TEST):at(n.STENCIL_TEST))},setMask:function(he){dt!==he&&!z&&(n.stencilMask(he),dt=he)},setFunc:function(he,Dn,bn){(xt!==he||Rt!==Dn||ft!==bn)&&(n.stencilFunc(he,Dn,bn),xt=he,Rt=Dn,ft=bn)},setOp:function(he,Dn,bn){(rt!==he||Ut!==Dn||Kt!==bn)&&(n.stencilOp(he,Dn,bn),rt=he,Ut=Dn,Kt=bn)},setLocked:function(he){z=he},setClear:function(he){ge!==he&&(n.clearStencil(he),ge=he)},reset:function(){z=!1,dt=null,xt=null,Rt=null,ft=null,rt=null,Ut=null,Kt=null,ge=null}}}const r=new e,a=new i,o=new s,l=new WeakMap,c=new WeakMap;let h={},f={},p=new WeakMap,m=[],_=null,x=!1,u=null,d=null,b=null,v=null,g=null,T=null,S=null,A=new Ht(0,0,0),w=0,y=!1,M=null,C=null,I=null,N=null,L=null;const U=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let k=!1,F=0;const O=n.getParameter(n.VERSION);O.indexOf("WebGL")!==-1?(F=parseFloat(/^WebGL (\d)/.exec(O)[1]),k=F>=1):O.indexOf("OpenGL ES")!==-1&&(F=parseFloat(/^OpenGL ES (\d)/.exec(O)[1]),k=F>=2);let Z=null,$={};const it=n.getParameter(n.SCISSOR_BOX),mt=n.getParameter(n.VIEWPORT),Ct=new Ee().fromArray(it),et=new Ee().fromArray(mt);function Q(z,dt,xt,Rt){const ft=new Uint8Array(4),rt=n.createTexture();n.bindTexture(z,rt),n.texParameteri(z,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(z,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Ut=0;Ut<xt;Ut++)z===n.TEXTURE_3D||z===n.TEXTURE_2D_ARRAY?n.texImage3D(dt,0,n.RGBA,1,1,Rt,0,n.RGBA,n.UNSIGNED_BYTE,ft):n.texImage2D(dt+Ut,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,ft);return rt}const q={};q[n.TEXTURE_2D]=Q(n.TEXTURE_2D,n.TEXTURE_2D,1),q[n.TEXTURE_CUBE_MAP]=Q(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),q[n.TEXTURE_2D_ARRAY]=Q(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),q[n.TEXTURE_3D]=Q(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),V(n.DEPTH_TEST),a.setFunc(ls),lt(!1),ct(dc),V(n.CULL_FACE),Zt(ni);function V(z){h[z]!==!0&&(n.enable(z),h[z]=!0)}function at(z){h[z]!==!1&&(n.disable(z),h[z]=!1)}function vt(z,dt){return f[z]!==dt?(n.bindFramebuffer(z,dt),f[z]=dt,z===n.DRAW_FRAMEBUFFER&&(f[n.FRAMEBUFFER]=dt),z===n.FRAMEBUFFER&&(f[n.DRAW_FRAMEBUFFER]=dt),!0):!1}function yt(z,dt){let xt=m,Rt=!1;if(z){xt=p.get(dt),xt===void 0&&(xt=[],p.set(dt,xt));const ft=z.textures;if(xt.length!==ft.length||xt[0]!==n.COLOR_ATTACHMENT0){for(let rt=0,Ut=ft.length;rt<Ut;rt++)xt[rt]=n.COLOR_ATTACHMENT0+rt;xt.length=ft.length,Rt=!0}}else xt[0]!==n.BACK&&(xt[0]=n.BACK,Rt=!0);Rt&&n.drawBuffers(xt)}function bt(z){return _!==z?(n.useProgram(z),_=z,!0):!1}const Yt={[Mi]:n.FUNC_ADD,[$h]:n.FUNC_SUBTRACT,[Yh]:n.FUNC_REVERSE_SUBTRACT};Yt[jh]=n.MIN,Yt[Kh]=n.MAX;const D={[Zh]:n.ZERO,[Jh]:n.ONE,[Qh]:n.SRC_COLOR,[za]:n.SRC_ALPHA,[ru]:n.SRC_ALPHA_SATURATE,[iu]:n.DST_COLOR,[eu]:n.DST_ALPHA,[tu]:n.ONE_MINUS_SRC_COLOR,[ka]:n.ONE_MINUS_SRC_ALPHA,[su]:n.ONE_MINUS_DST_COLOR,[nu]:n.ONE_MINUS_DST_ALPHA,[au]:n.CONSTANT_COLOR,[ou]:n.ONE_MINUS_CONSTANT_COLOR,[cu]:n.CONSTANT_ALPHA,[lu]:n.ONE_MINUS_CONSTANT_ALPHA};function Zt(z,dt,xt,Rt,ft,rt,Ut,Kt,ge,he){if(z===ni){x===!0&&(at(n.BLEND),x=!1);return}if(x===!1&&(V(n.BLEND),x=!0),z!==qh){if(z!==u||he!==y){if((d!==Mi||g!==Mi)&&(n.blendEquation(n.FUNC_ADD),d=Mi,g=Mi),he)switch(z){case bi:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Ft:n.blendFunc(n.ONE,n.ONE);break;case fc:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case pc:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",z);break}else switch(z){case bi:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Ft:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case fc:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case pc:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",z);break}b=null,v=null,T=null,S=null,A.set(0,0,0),w=0,u=z,y=he}return}ft=ft||dt,rt=rt||xt,Ut=Ut||Rt,(dt!==d||ft!==g)&&(n.blendEquationSeparate(Yt[dt],Yt[ft]),d=dt,g=ft),(xt!==b||Rt!==v||rt!==T||Ut!==S)&&(n.blendFuncSeparate(D[xt],D[Rt],D[rt],D[Ut]),b=xt,v=Rt,T=rt,S=Ut),(Kt.equals(A)===!1||ge!==w)&&(n.blendColor(Kt.r,Kt.g,Kt.b,ge),A.copy(Kt),w=ge),u=z,y=!1}function J(z,dt){z.side===Bn?at(n.CULL_FACE):V(n.CULL_FACE);let xt=z.side===je;dt&&(xt=!xt),lt(xt),z.blending===bi&&z.transparent===!1?Zt(ni):Zt(z.blending,z.blendEquation,z.blendSrc,z.blendDst,z.blendEquationAlpha,z.blendSrcAlpha,z.blendDstAlpha,z.blendColor,z.blendAlpha,z.premultipliedAlpha),a.setFunc(z.depthFunc),a.setTest(z.depthTest),a.setMask(z.depthWrite),r.setMask(z.colorWrite);const Rt=z.stencilWrite;o.setTest(Rt),Rt&&(o.setMask(z.stencilWriteMask),o.setFunc(z.stencilFunc,z.stencilRef,z.stencilFuncMask),o.setOp(z.stencilFail,z.stencilZFail,z.stencilZPass)),st(z.polygonOffset,z.polygonOffsetFactor,z.polygonOffsetUnits),z.alphaToCoverage===!0?V(n.SAMPLE_ALPHA_TO_COVERAGE):at(n.SAMPLE_ALPHA_TO_COVERAGE)}function lt(z){M!==z&&(z?n.frontFace(n.CW):n.frontFace(n.CCW),M=z)}function ct(z){z!==Vh?(V(n.CULL_FACE),z!==C&&(z===dc?n.cullFace(n.BACK):z===Wh?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):at(n.CULL_FACE),C=z}function Bt(z){z!==I&&(k&&n.lineWidth(z),I=z)}function st(z,dt,xt){z?(V(n.POLYGON_OFFSET_FILL),(N!==dt||L!==xt)&&(n.polygonOffset(dt,xt),N=dt,L=xt)):at(n.POLYGON_OFFSET_FILL)}function gt(z){z?V(n.SCISSOR_TEST):at(n.SCISSOR_TEST)}function Wt(z){z===void 0&&(z=n.TEXTURE0+U-1),Z!==z&&(n.activeTexture(z),Z=z)}function jt(z,dt,xt){xt===void 0&&(Z===null?xt=n.TEXTURE0+U-1:xt=Z);let Rt=$[xt];Rt===void 0&&(Rt={type:void 0,texture:void 0},$[xt]=Rt),(Rt.type!==z||Rt.texture!==dt)&&(Z!==xt&&(n.activeTexture(xt),Z=xt),n.bindTexture(z,dt||q[z]),Rt.type=z,Rt.texture=dt)}function P(){const z=$[Z];z!==void 0&&z.type!==void 0&&(n.bindTexture(z.type,null),z.type=void 0,z.texture=void 0)}function E(){try{n.compressedTexImage2D(...arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function H(){try{n.compressedTexImage3D(...arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function K(){try{n.texSubImage2D(...arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function nt(){try{n.texSubImage3D(...arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function X(){try{n.compressedTexSubImage2D(...arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function _t(){try{n.compressedTexSubImage3D(...arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function ut(){try{n.texStorage2D(...arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function At(){try{n.texStorage3D(...arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function wt(){try{n.texImage2D(...arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function ht(){try{n.texImage3D(...arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function Mt(z){Ct.equals(z)===!1&&(n.scissor(z.x,z.y,z.z,z.w),Ct.copy(z))}function zt(z){et.equals(z)===!1&&(n.viewport(z.x,z.y,z.z,z.w),et.copy(z))}function Lt(z,dt){let xt=c.get(dt);xt===void 0&&(xt=new WeakMap,c.set(dt,xt));let Rt=xt.get(z);Rt===void 0&&(Rt=n.getUniformBlockIndex(dt,z.name),xt.set(z,Rt))}function St(z,dt){const Rt=c.get(dt).get(z);l.get(dt)!==Rt&&(n.uniformBlockBinding(dt,Rt,z.__bindingPointIndex),l.set(dt,Rt))}function $t(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),a.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),h={},Z=null,$={},f={},p=new WeakMap,m=[],_=null,x=!1,u=null,d=null,b=null,v=null,g=null,T=null,S=null,A=new Ht(0,0,0),w=0,y=!1,M=null,C=null,I=null,N=null,L=null,Ct.set(0,0,n.canvas.width,n.canvas.height),et.set(0,0,n.canvas.width,n.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:V,disable:at,bindFramebuffer:vt,drawBuffers:yt,useProgram:bt,setBlending:Zt,setMaterial:J,setFlipSided:lt,setCullFace:ct,setLineWidth:Bt,setPolygonOffset:st,setScissorTest:gt,activeTexture:Wt,bindTexture:jt,unbindTexture:P,compressedTexImage2D:E,compressedTexImage3D:H,texImage2D:wt,texImage3D:ht,updateUBOMapping:Lt,uniformBlockBinding:St,texStorage2D:ut,texStorage3D:At,texSubImage2D:K,texSubImage3D:nt,compressedTexSubImage2D:X,compressedTexSubImage3D:_t,scissor:Mt,viewport:zt,reset:$t}}function r0(n,t,e,i,s,r,a){const o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Vt,h=new WeakMap;let f;const p=new WeakMap;let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(P,E){return m?new OffscreenCanvas(P,E):zr("canvas")}function x(P,E,H){let K=1;const nt=jt(P);if((nt.width>H||nt.height>H)&&(K=H/Math.max(nt.width,nt.height)),K<1)if(typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&P instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&P instanceof ImageBitmap||typeof VideoFrame<"u"&&P instanceof VideoFrame){const X=Math.floor(K*nt.width),_t=Math.floor(K*nt.height);f===void 0&&(f=_(X,_t));const ut=E?_(X,_t):f;return ut.width=X,ut.height=_t,ut.getContext("2d").drawImage(P,0,0,X,_t),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+nt.width+"x"+nt.height+") to ("+X+"x"+_t+")."),ut}else return"data"in P&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+nt.width+"x"+nt.height+")."),P;return P}function u(P){return P.generateMipmaps}function d(P){n.generateMipmap(P)}function b(P){return P.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:P.isWebGL3DRenderTarget?n.TEXTURE_3D:P.isWebGLArrayRenderTarget||P.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function v(P,E,H,K,nt=!1){if(P!==null){if(n[P]!==void 0)return n[P];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+P+"'")}let X=E;if(E===n.RED&&(H===n.FLOAT&&(X=n.R32F),H===n.HALF_FLOAT&&(X=n.R16F),H===n.UNSIGNED_BYTE&&(X=n.R8)),E===n.RED_INTEGER&&(H===n.UNSIGNED_BYTE&&(X=n.R8UI),H===n.UNSIGNED_SHORT&&(X=n.R16UI),H===n.UNSIGNED_INT&&(X=n.R32UI),H===n.BYTE&&(X=n.R8I),H===n.SHORT&&(X=n.R16I),H===n.INT&&(X=n.R32I)),E===n.RG&&(H===n.FLOAT&&(X=n.RG32F),H===n.HALF_FLOAT&&(X=n.RG16F),H===n.UNSIGNED_BYTE&&(X=n.RG8)),E===n.RG_INTEGER&&(H===n.UNSIGNED_BYTE&&(X=n.RG8UI),H===n.UNSIGNED_SHORT&&(X=n.RG16UI),H===n.UNSIGNED_INT&&(X=n.RG32UI),H===n.BYTE&&(X=n.RG8I),H===n.SHORT&&(X=n.RG16I),H===n.INT&&(X=n.RG32I)),E===n.RGB_INTEGER&&(H===n.UNSIGNED_BYTE&&(X=n.RGB8UI),H===n.UNSIGNED_SHORT&&(X=n.RGB16UI),H===n.UNSIGNED_INT&&(X=n.RGB32UI),H===n.BYTE&&(X=n.RGB8I),H===n.SHORT&&(X=n.RGB16I),H===n.INT&&(X=n.RGB32I)),E===n.RGBA_INTEGER&&(H===n.UNSIGNED_BYTE&&(X=n.RGBA8UI),H===n.UNSIGNED_SHORT&&(X=n.RGBA16UI),H===n.UNSIGNED_INT&&(X=n.RGBA32UI),H===n.BYTE&&(X=n.RGBA8I),H===n.SHORT&&(X=n.RGBA16I),H===n.INT&&(X=n.RGBA32I)),E===n.RGB&&(H===n.UNSIGNED_INT_5_9_9_9_REV&&(X=n.RGB9_E5),H===n.UNSIGNED_INT_10F_11F_11F_REV&&(X=n.R11F_G11F_B10F)),E===n.RGBA){const _t=nt?Or:ce.getTransfer(K);H===n.FLOAT&&(X=n.RGBA32F),H===n.HALF_FLOAT&&(X=n.RGBA16F),H===n.UNSIGNED_BYTE&&(X=_t===fe?n.SRGB8_ALPHA8:n.RGBA8),H===n.UNSIGNED_SHORT_4_4_4_4&&(X=n.RGBA4),H===n.UNSIGNED_SHORT_5_5_5_1&&(X=n.RGB5_A1)}return(X===n.R16F||X===n.R32F||X===n.RG16F||X===n.RG32F||X===n.RGBA16F||X===n.RGBA32F)&&t.get("EXT_color_buffer_float"),X}function g(P,E){let H;return P?E===null||E===Ai||E===Is?H=n.DEPTH24_STENCIL8:E===zn?H=n.DEPTH32F_STENCIL8:E===Ls&&(H=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):E===null||E===Ai||E===Is?H=n.DEPTH_COMPONENT24:E===zn?H=n.DEPTH_COMPONENT32F:E===Ls&&(H=n.DEPTH_COMPONENT16),H}function T(P,E){return u(P)===!0||P.isFramebufferTexture&&P.minFilter!==En&&P.minFilter!==vn?Math.log2(Math.max(E.width,E.height))+1:P.mipmaps!==void 0&&P.mipmaps.length>0?P.mipmaps.length:P.isCompressedTexture&&Array.isArray(P.image)?E.mipmaps.length:1}function S(P){const E=P.target;E.removeEventListener("dispose",S),w(E),E.isVideoTexture&&h.delete(E)}function A(P){const E=P.target;E.removeEventListener("dispose",A),M(E)}function w(P){const E=i.get(P);if(E.__webglInit===void 0)return;const H=P.source,K=p.get(H);if(K){const nt=K[E.__cacheKey];nt.usedTimes--,nt.usedTimes===0&&y(P),Object.keys(K).length===0&&p.delete(H)}i.remove(P)}function y(P){const E=i.get(P);n.deleteTexture(E.__webglTexture);const H=P.source,K=p.get(H);delete K[E.__cacheKey],a.memory.textures--}function M(P){const E=i.get(P);if(P.depthTexture&&(P.depthTexture.dispose(),i.remove(P.depthTexture)),P.isWebGLCubeRenderTarget)for(let K=0;K<6;K++){if(Array.isArray(E.__webglFramebuffer[K]))for(let nt=0;nt<E.__webglFramebuffer[K].length;nt++)n.deleteFramebuffer(E.__webglFramebuffer[K][nt]);else n.deleteFramebuffer(E.__webglFramebuffer[K]);E.__webglDepthbuffer&&n.deleteRenderbuffer(E.__webglDepthbuffer[K])}else{if(Array.isArray(E.__webglFramebuffer))for(let K=0;K<E.__webglFramebuffer.length;K++)n.deleteFramebuffer(E.__webglFramebuffer[K]);else n.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&n.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&n.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let K=0;K<E.__webglColorRenderbuffer.length;K++)E.__webglColorRenderbuffer[K]&&n.deleteRenderbuffer(E.__webglColorRenderbuffer[K]);E.__webglDepthRenderbuffer&&n.deleteRenderbuffer(E.__webglDepthRenderbuffer)}const H=P.textures;for(let K=0,nt=H.length;K<nt;K++){const X=i.get(H[K]);X.__webglTexture&&(n.deleteTexture(X.__webglTexture),a.memory.textures--),i.remove(H[K])}i.remove(P)}let C=0;function I(){C=0}function N(){const P=C;return P>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+P+" texture units while this GPU supports only "+s.maxTextures),C+=1,P}function L(P){const E=[];return E.push(P.wrapS),E.push(P.wrapT),E.push(P.wrapR||0),E.push(P.magFilter),E.push(P.minFilter),E.push(P.anisotropy),E.push(P.internalFormat),E.push(P.format),E.push(P.type),E.push(P.generateMipmaps),E.push(P.premultiplyAlpha),E.push(P.flipY),E.push(P.unpackAlignment),E.push(P.colorSpace),E.join()}function U(P,E){const H=i.get(P);if(P.isVideoTexture&&gt(P),P.isRenderTargetTexture===!1&&P.isExternalTexture!==!0&&P.version>0&&H.__version!==P.version){const K=P.image;if(K===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(K.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{q(H,P,E);return}}else P.isExternalTexture&&(H.__webglTexture=P.sourceTexture?P.sourceTexture:null);e.bindTexture(n.TEXTURE_2D,H.__webglTexture,n.TEXTURE0+E)}function k(P,E){const H=i.get(P);if(P.isRenderTargetTexture===!1&&P.version>0&&H.__version!==P.version){q(H,P,E);return}e.bindTexture(n.TEXTURE_2D_ARRAY,H.__webglTexture,n.TEXTURE0+E)}function F(P,E){const H=i.get(P);if(P.isRenderTargetTexture===!1&&P.version>0&&H.__version!==P.version){q(H,P,E);return}e.bindTexture(n.TEXTURE_3D,H.__webglTexture,n.TEXTURE0+E)}function O(P,E){const H=i.get(P);if(P.version>0&&H.__version!==P.version){V(H,P,E);return}e.bindTexture(n.TEXTURE_CUBE_MAP,H.__webglTexture,n.TEXTURE0+E)}const Z={[Ka]:n.REPEAT,[yi]:n.CLAMP_TO_EDGE,[Za]:n.MIRRORED_REPEAT},$={[En]:n.NEAREST,[xu]:n.NEAREST_MIPMAP_NEAREST,[js]:n.NEAREST_MIPMAP_LINEAR,[vn]:n.LINEAR,[ia]:n.LINEAR_MIPMAP_NEAREST,[ti]:n.LINEAR_MIPMAP_LINEAR},it={[Eu]:n.NEVER,[Cu]:n.ALWAYS,[bu]:n.LESS,[Yl]:n.LEQUAL,[Tu]:n.EQUAL,[Ru]:n.GEQUAL,[Au]:n.GREATER,[wu]:n.NOTEQUAL};function mt(P,E){if(E.type===zn&&t.has("OES_texture_float_linear")===!1&&(E.magFilter===vn||E.magFilter===ia||E.magFilter===js||E.magFilter===ti||E.minFilter===vn||E.minFilter===ia||E.minFilter===js||E.minFilter===ti)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(P,n.TEXTURE_WRAP_S,Z[E.wrapS]),n.texParameteri(P,n.TEXTURE_WRAP_T,Z[E.wrapT]),(P===n.TEXTURE_3D||P===n.TEXTURE_2D_ARRAY)&&n.texParameteri(P,n.TEXTURE_WRAP_R,Z[E.wrapR]),n.texParameteri(P,n.TEXTURE_MAG_FILTER,$[E.magFilter]),n.texParameteri(P,n.TEXTURE_MIN_FILTER,$[E.minFilter]),E.compareFunction&&(n.texParameteri(P,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(P,n.TEXTURE_COMPARE_FUNC,it[E.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===En||E.minFilter!==js&&E.minFilter!==ti||E.type===zn&&t.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||i.get(E).__currentAnisotropy){const H=t.get("EXT_texture_filter_anisotropic");n.texParameterf(P,H.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,s.getMaxAnisotropy())),i.get(E).__currentAnisotropy=E.anisotropy}}}function Ct(P,E){let H=!1;P.__webglInit===void 0&&(P.__webglInit=!0,E.addEventListener("dispose",S));const K=E.source;let nt=p.get(K);nt===void 0&&(nt={},p.set(K,nt));const X=L(E);if(X!==P.__cacheKey){nt[X]===void 0&&(nt[X]={texture:n.createTexture(),usedTimes:0},a.memory.textures++,H=!0),nt[X].usedTimes++;const _t=nt[P.__cacheKey];_t!==void 0&&(nt[P.__cacheKey].usedTimes--,_t.usedTimes===0&&y(E)),P.__cacheKey=X,P.__webglTexture=nt[X].texture}return H}function et(P,E,H){return Math.floor(Math.floor(P/H)/E)}function Q(P,E,H,K){const X=P.updateRanges;if(X.length===0)e.texSubImage2D(n.TEXTURE_2D,0,0,0,E.width,E.height,H,K,E.data);else{X.sort((ht,Mt)=>ht.start-Mt.start);let _t=0;for(let ht=1;ht<X.length;ht++){const Mt=X[_t],zt=X[ht],Lt=Mt.start+Mt.count,St=et(zt.start,E.width,4),$t=et(Mt.start,E.width,4);zt.start<=Lt+1&&St===$t&&et(zt.start+zt.count-1,E.width,4)===St?Mt.count=Math.max(Mt.count,zt.start+zt.count-Mt.start):(++_t,X[_t]=zt)}X.length=_t+1;const ut=n.getParameter(n.UNPACK_ROW_LENGTH),At=n.getParameter(n.UNPACK_SKIP_PIXELS),wt=n.getParameter(n.UNPACK_SKIP_ROWS);n.pixelStorei(n.UNPACK_ROW_LENGTH,E.width);for(let ht=0,Mt=X.length;ht<Mt;ht++){const zt=X[ht],Lt=Math.floor(zt.start/4),St=Math.ceil(zt.count/4),$t=Lt%E.width,z=Math.floor(Lt/E.width),dt=St,xt=1;n.pixelStorei(n.UNPACK_SKIP_PIXELS,$t),n.pixelStorei(n.UNPACK_SKIP_ROWS,z),e.texSubImage2D(n.TEXTURE_2D,0,$t,z,dt,xt,H,K,E.data)}P.clearUpdateRanges(),n.pixelStorei(n.UNPACK_ROW_LENGTH,ut),n.pixelStorei(n.UNPACK_SKIP_PIXELS,At),n.pixelStorei(n.UNPACK_SKIP_ROWS,wt)}}function q(P,E,H){let K=n.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(K=n.TEXTURE_2D_ARRAY),E.isData3DTexture&&(K=n.TEXTURE_3D);const nt=Ct(P,E),X=E.source;e.bindTexture(K,P.__webglTexture,n.TEXTURE0+H);const _t=i.get(X);if(X.version!==_t.__version||nt===!0){e.activeTexture(n.TEXTURE0+H);const ut=ce.getPrimaries(ce.workingColorSpace),At=E.colorSpace===Jn?null:ce.getPrimaries(E.colorSpace),wt=E.colorSpace===Jn||ut===At?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,E.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,E.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,wt);let ht=x(E.image,!1,s.maxTextureSize);ht=Wt(E,ht);const Mt=r.convert(E.format,E.colorSpace),zt=r.convert(E.type);let Lt=v(E.internalFormat,Mt,zt,E.colorSpace,E.isVideoTexture);mt(K,E);let St;const $t=E.mipmaps,z=E.isVideoTexture!==!0,dt=_t.__version===void 0||nt===!0,xt=X.dataReady,Rt=T(E,ht);if(E.isDepthTexture)Lt=g(E.format===Fs,E.type),dt&&(z?e.texStorage2D(n.TEXTURE_2D,1,Lt,ht.width,ht.height):e.texImage2D(n.TEXTURE_2D,0,Lt,ht.width,ht.height,0,Mt,zt,null));else if(E.isDataTexture)if($t.length>0){z&&dt&&e.texStorage2D(n.TEXTURE_2D,Rt,Lt,$t[0].width,$t[0].height);for(let ft=0,rt=$t.length;ft<rt;ft++)St=$t[ft],z?xt&&e.texSubImage2D(n.TEXTURE_2D,ft,0,0,St.width,St.height,Mt,zt,St.data):e.texImage2D(n.TEXTURE_2D,ft,Lt,St.width,St.height,0,Mt,zt,St.data);E.generateMipmaps=!1}else z?(dt&&e.texStorage2D(n.TEXTURE_2D,Rt,Lt,ht.width,ht.height),xt&&Q(E,ht,Mt,zt)):e.texImage2D(n.TEXTURE_2D,0,Lt,ht.width,ht.height,0,Mt,zt,ht.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){z&&dt&&e.texStorage3D(n.TEXTURE_2D_ARRAY,Rt,Lt,$t[0].width,$t[0].height,ht.depth);for(let ft=0,rt=$t.length;ft<rt;ft++)if(St=$t[ft],E.format!==yn)if(Mt!==null)if(z){if(xt)if(E.layerUpdates.size>0){const Ut=$c(St.width,St.height,E.format,E.type);for(const Kt of E.layerUpdates){const ge=St.data.subarray(Kt*Ut/St.data.BYTES_PER_ELEMENT,(Kt+1)*Ut/St.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,ft,0,0,Kt,St.width,St.height,1,Mt,ge)}E.clearLayerUpdates()}else e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,ft,0,0,0,St.width,St.height,ht.depth,Mt,St.data)}else e.compressedTexImage3D(n.TEXTURE_2D_ARRAY,ft,Lt,St.width,St.height,ht.depth,0,St.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else z?xt&&e.texSubImage3D(n.TEXTURE_2D_ARRAY,ft,0,0,0,St.width,St.height,ht.depth,Mt,zt,St.data):e.texImage3D(n.TEXTURE_2D_ARRAY,ft,Lt,St.width,St.height,ht.depth,0,Mt,zt,St.data)}else{z&&dt&&e.texStorage2D(n.TEXTURE_2D,Rt,Lt,$t[0].width,$t[0].height);for(let ft=0,rt=$t.length;ft<rt;ft++)St=$t[ft],E.format!==yn?Mt!==null?z?xt&&e.compressedTexSubImage2D(n.TEXTURE_2D,ft,0,0,St.width,St.height,Mt,St.data):e.compressedTexImage2D(n.TEXTURE_2D,ft,Lt,St.width,St.height,0,St.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):z?xt&&e.texSubImage2D(n.TEXTURE_2D,ft,0,0,St.width,St.height,Mt,zt,St.data):e.texImage2D(n.TEXTURE_2D,ft,Lt,St.width,St.height,0,Mt,zt,St.data)}else if(E.isDataArrayTexture)if(z){if(dt&&e.texStorage3D(n.TEXTURE_2D_ARRAY,Rt,Lt,ht.width,ht.height,ht.depth),xt)if(E.layerUpdates.size>0){const ft=$c(ht.width,ht.height,E.format,E.type);for(const rt of E.layerUpdates){const Ut=ht.data.subarray(rt*ft/ht.data.BYTES_PER_ELEMENT,(rt+1)*ft/ht.data.BYTES_PER_ELEMENT);e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,rt,ht.width,ht.height,1,Mt,zt,Ut)}E.clearLayerUpdates()}else e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,ht.width,ht.height,ht.depth,Mt,zt,ht.data)}else e.texImage3D(n.TEXTURE_2D_ARRAY,0,Lt,ht.width,ht.height,ht.depth,0,Mt,zt,ht.data);else if(E.isData3DTexture)z?(dt&&e.texStorage3D(n.TEXTURE_3D,Rt,Lt,ht.width,ht.height,ht.depth),xt&&e.texSubImage3D(n.TEXTURE_3D,0,0,0,0,ht.width,ht.height,ht.depth,Mt,zt,ht.data)):e.texImage3D(n.TEXTURE_3D,0,Lt,ht.width,ht.height,ht.depth,0,Mt,zt,ht.data);else if(E.isFramebufferTexture){if(dt)if(z)e.texStorage2D(n.TEXTURE_2D,Rt,Lt,ht.width,ht.height);else{let ft=ht.width,rt=ht.height;for(let Ut=0;Ut<Rt;Ut++)e.texImage2D(n.TEXTURE_2D,Ut,Lt,ft,rt,0,Mt,zt,null),ft>>=1,rt>>=1}}else if($t.length>0){if(z&&dt){const ft=jt($t[0]);e.texStorage2D(n.TEXTURE_2D,Rt,Lt,ft.width,ft.height)}for(let ft=0,rt=$t.length;ft<rt;ft++)St=$t[ft],z?xt&&e.texSubImage2D(n.TEXTURE_2D,ft,0,0,Mt,zt,St):e.texImage2D(n.TEXTURE_2D,ft,Lt,Mt,zt,St);E.generateMipmaps=!1}else if(z){if(dt){const ft=jt(ht);e.texStorage2D(n.TEXTURE_2D,Rt,Lt,ft.width,ft.height)}xt&&e.texSubImage2D(n.TEXTURE_2D,0,0,0,Mt,zt,ht)}else e.texImage2D(n.TEXTURE_2D,0,Lt,Mt,zt,ht);u(E)&&d(K),_t.__version=X.version,E.onUpdate&&E.onUpdate(E)}P.__version=E.version}function V(P,E,H){if(E.image.length!==6)return;const K=Ct(P,E),nt=E.source;e.bindTexture(n.TEXTURE_CUBE_MAP,P.__webglTexture,n.TEXTURE0+H);const X=i.get(nt);if(nt.version!==X.__version||K===!0){e.activeTexture(n.TEXTURE0+H);const _t=ce.getPrimaries(ce.workingColorSpace),ut=E.colorSpace===Jn?null:ce.getPrimaries(E.colorSpace),At=E.colorSpace===Jn||_t===ut?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,E.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,E.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,At);const wt=E.isCompressedTexture||E.image[0].isCompressedTexture,ht=E.image[0]&&E.image[0].isDataTexture,Mt=[];for(let rt=0;rt<6;rt++)!wt&&!ht?Mt[rt]=x(E.image[rt],!0,s.maxCubemapSize):Mt[rt]=ht?E.image[rt].image:E.image[rt],Mt[rt]=Wt(E,Mt[rt]);const zt=Mt[0],Lt=r.convert(E.format,E.colorSpace),St=r.convert(E.type),$t=v(E.internalFormat,Lt,St,E.colorSpace),z=E.isVideoTexture!==!0,dt=X.__version===void 0||K===!0,xt=nt.dataReady;let Rt=T(E,zt);mt(n.TEXTURE_CUBE_MAP,E);let ft;if(wt){z&&dt&&e.texStorage2D(n.TEXTURE_CUBE_MAP,Rt,$t,zt.width,zt.height);for(let rt=0;rt<6;rt++){ft=Mt[rt].mipmaps;for(let Ut=0;Ut<ft.length;Ut++){const Kt=ft[Ut];E.format!==yn?Lt!==null?z?xt&&e.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+rt,Ut,0,0,Kt.width,Kt.height,Lt,Kt.data):e.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+rt,Ut,$t,Kt.width,Kt.height,0,Kt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):z?xt&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+rt,Ut,0,0,Kt.width,Kt.height,Lt,St,Kt.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+rt,Ut,$t,Kt.width,Kt.height,0,Lt,St,Kt.data)}}}else{if(ft=E.mipmaps,z&&dt){ft.length>0&&Rt++;const rt=jt(Mt[0]);e.texStorage2D(n.TEXTURE_CUBE_MAP,Rt,$t,rt.width,rt.height)}for(let rt=0;rt<6;rt++)if(ht){z?xt&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+rt,0,0,0,Mt[rt].width,Mt[rt].height,Lt,St,Mt[rt].data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+rt,0,$t,Mt[rt].width,Mt[rt].height,0,Lt,St,Mt[rt].data);for(let Ut=0;Ut<ft.length;Ut++){const ge=ft[Ut].image[rt].image;z?xt&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+rt,Ut+1,0,0,ge.width,ge.height,Lt,St,ge.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+rt,Ut+1,$t,ge.width,ge.height,0,Lt,St,ge.data)}}else{z?xt&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+rt,0,0,0,Lt,St,Mt[rt]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+rt,0,$t,Lt,St,Mt[rt]);for(let Ut=0;Ut<ft.length;Ut++){const Kt=ft[Ut];z?xt&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+rt,Ut+1,0,0,Lt,St,Kt.image[rt]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+rt,Ut+1,$t,Lt,St,Kt.image[rt])}}}u(E)&&d(n.TEXTURE_CUBE_MAP),X.__version=nt.version,E.onUpdate&&E.onUpdate(E)}P.__version=E.version}function at(P,E,H,K,nt,X){const _t=r.convert(H.format,H.colorSpace),ut=r.convert(H.type),At=v(H.internalFormat,_t,ut,H.colorSpace),wt=i.get(E),ht=i.get(H);if(ht.__renderTarget=E,!wt.__hasExternalTextures){const Mt=Math.max(1,E.width>>X),zt=Math.max(1,E.height>>X);nt===n.TEXTURE_3D||nt===n.TEXTURE_2D_ARRAY?e.texImage3D(nt,X,At,Mt,zt,E.depth,0,_t,ut,null):e.texImage2D(nt,X,At,Mt,zt,0,_t,ut,null)}e.bindFramebuffer(n.FRAMEBUFFER,P),st(E)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,K,nt,ht.__webglTexture,0,Bt(E)):(nt===n.TEXTURE_2D||nt>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&nt<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,K,nt,ht.__webglTexture,X),e.bindFramebuffer(n.FRAMEBUFFER,null)}function vt(P,E,H){if(n.bindRenderbuffer(n.RENDERBUFFER,P),E.depthBuffer){const K=E.depthTexture,nt=K&&K.isDepthTexture?K.type:null,X=g(E.stencilBuffer,nt),_t=E.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ut=Bt(E);st(E)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ut,X,E.width,E.height):H?n.renderbufferStorageMultisample(n.RENDERBUFFER,ut,X,E.width,E.height):n.renderbufferStorage(n.RENDERBUFFER,X,E.width,E.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,_t,n.RENDERBUFFER,P)}else{const K=E.textures;for(let nt=0;nt<K.length;nt++){const X=K[nt],_t=r.convert(X.format,X.colorSpace),ut=r.convert(X.type),At=v(X.internalFormat,_t,ut,X.colorSpace),wt=Bt(E);H&&st(E)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,wt,At,E.width,E.height):st(E)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,wt,At,E.width,E.height):n.renderbufferStorage(n.RENDERBUFFER,At,E.width,E.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function yt(P,E){if(E&&E.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(n.FRAMEBUFFER,P),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const K=i.get(E.depthTexture);K.__renderTarget=E,(!K.__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),U(E.depthTexture,0);const nt=K.__webglTexture,X=Bt(E);if(E.depthTexture.format===Us)st(E)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,nt,0,X):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,nt,0);else if(E.depthTexture.format===Fs)st(E)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,nt,0,X):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,nt,0);else throw new Error("Unknown depthTexture format")}function bt(P){const E=i.get(P),H=P.isWebGLCubeRenderTarget===!0;if(E.__boundDepthTexture!==P.depthTexture){const K=P.depthTexture;if(E.__depthDisposeCallback&&E.__depthDisposeCallback(),K){const nt=()=>{delete E.__boundDepthTexture,delete E.__depthDisposeCallback,K.removeEventListener("dispose",nt)};K.addEventListener("dispose",nt),E.__depthDisposeCallback=nt}E.__boundDepthTexture=K}if(P.depthTexture&&!E.__autoAllocateDepthBuffer){if(H)throw new Error("target.depthTexture not supported in Cube render targets");const K=P.texture.mipmaps;K&&K.length>0?yt(E.__webglFramebuffer[0],P):yt(E.__webglFramebuffer,P)}else if(H){E.__webglDepthbuffer=[];for(let K=0;K<6;K++)if(e.bindFramebuffer(n.FRAMEBUFFER,E.__webglFramebuffer[K]),E.__webglDepthbuffer[K]===void 0)E.__webglDepthbuffer[K]=n.createRenderbuffer(),vt(E.__webglDepthbuffer[K],P,!1);else{const nt=P.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,X=E.__webglDepthbuffer[K];n.bindRenderbuffer(n.RENDERBUFFER,X),n.framebufferRenderbuffer(n.FRAMEBUFFER,nt,n.RENDERBUFFER,X)}}else{const K=P.texture.mipmaps;if(K&&K.length>0?e.bindFramebuffer(n.FRAMEBUFFER,E.__webglFramebuffer[0]):e.bindFramebuffer(n.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer===void 0)E.__webglDepthbuffer=n.createRenderbuffer(),vt(E.__webglDepthbuffer,P,!1);else{const nt=P.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,X=E.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,X),n.framebufferRenderbuffer(n.FRAMEBUFFER,nt,n.RENDERBUFFER,X)}}e.bindFramebuffer(n.FRAMEBUFFER,null)}function Yt(P,E,H){const K=i.get(P);E!==void 0&&at(K.__webglFramebuffer,P,P.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),H!==void 0&&bt(P)}function D(P){const E=P.texture,H=i.get(P),K=i.get(E);P.addEventListener("dispose",A);const nt=P.textures,X=P.isWebGLCubeRenderTarget===!0,_t=nt.length>1;if(_t||(K.__webglTexture===void 0&&(K.__webglTexture=n.createTexture()),K.__version=E.version,a.memory.textures++),X){H.__webglFramebuffer=[];for(let ut=0;ut<6;ut++)if(E.mipmaps&&E.mipmaps.length>0){H.__webglFramebuffer[ut]=[];for(let At=0;At<E.mipmaps.length;At++)H.__webglFramebuffer[ut][At]=n.createFramebuffer()}else H.__webglFramebuffer[ut]=n.createFramebuffer()}else{if(E.mipmaps&&E.mipmaps.length>0){H.__webglFramebuffer=[];for(let ut=0;ut<E.mipmaps.length;ut++)H.__webglFramebuffer[ut]=n.createFramebuffer()}else H.__webglFramebuffer=n.createFramebuffer();if(_t)for(let ut=0,At=nt.length;ut<At;ut++){const wt=i.get(nt[ut]);wt.__webglTexture===void 0&&(wt.__webglTexture=n.createTexture(),a.memory.textures++)}if(P.samples>0&&st(P)===!1){H.__webglMultisampledFramebuffer=n.createFramebuffer(),H.__webglColorRenderbuffer=[],e.bindFramebuffer(n.FRAMEBUFFER,H.__webglMultisampledFramebuffer);for(let ut=0;ut<nt.length;ut++){const At=nt[ut];H.__webglColorRenderbuffer[ut]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,H.__webglColorRenderbuffer[ut]);const wt=r.convert(At.format,At.colorSpace),ht=r.convert(At.type),Mt=v(At.internalFormat,wt,ht,At.colorSpace,P.isXRRenderTarget===!0),zt=Bt(P);n.renderbufferStorageMultisample(n.RENDERBUFFER,zt,Mt,P.width,P.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ut,n.RENDERBUFFER,H.__webglColorRenderbuffer[ut])}n.bindRenderbuffer(n.RENDERBUFFER,null),P.depthBuffer&&(H.__webglDepthRenderbuffer=n.createRenderbuffer(),vt(H.__webglDepthRenderbuffer,P,!0)),e.bindFramebuffer(n.FRAMEBUFFER,null)}}if(X){e.bindTexture(n.TEXTURE_CUBE_MAP,K.__webglTexture),mt(n.TEXTURE_CUBE_MAP,E);for(let ut=0;ut<6;ut++)if(E.mipmaps&&E.mipmaps.length>0)for(let At=0;At<E.mipmaps.length;At++)at(H.__webglFramebuffer[ut][At],P,E,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ut,At);else at(H.__webglFramebuffer[ut],P,E,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ut,0);u(E)&&d(n.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(_t){for(let ut=0,At=nt.length;ut<At;ut++){const wt=nt[ut],ht=i.get(wt);let Mt=n.TEXTURE_2D;(P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(Mt=P.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),e.bindTexture(Mt,ht.__webglTexture),mt(Mt,wt),at(H.__webglFramebuffer,P,wt,n.COLOR_ATTACHMENT0+ut,Mt,0),u(wt)&&d(Mt)}e.unbindTexture()}else{let ut=n.TEXTURE_2D;if((P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(ut=P.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),e.bindTexture(ut,K.__webglTexture),mt(ut,E),E.mipmaps&&E.mipmaps.length>0)for(let At=0;At<E.mipmaps.length;At++)at(H.__webglFramebuffer[At],P,E,n.COLOR_ATTACHMENT0,ut,At);else at(H.__webglFramebuffer,P,E,n.COLOR_ATTACHMENT0,ut,0);u(E)&&d(ut),e.unbindTexture()}P.depthBuffer&&bt(P)}function Zt(P){const E=P.textures;for(let H=0,K=E.length;H<K;H++){const nt=E[H];if(u(nt)){const X=b(P),_t=i.get(nt).__webglTexture;e.bindTexture(X,_t),d(X),e.unbindTexture()}}}const J=[],lt=[];function ct(P){if(P.samples>0){if(st(P)===!1){const E=P.textures,H=P.width,K=P.height;let nt=n.COLOR_BUFFER_BIT;const X=P.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,_t=i.get(P),ut=E.length>1;if(ut)for(let wt=0;wt<E.length;wt++)e.bindFramebuffer(n.FRAMEBUFFER,_t.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+wt,n.RENDERBUFFER,null),e.bindFramebuffer(n.FRAMEBUFFER,_t.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+wt,n.TEXTURE_2D,null,0);e.bindFramebuffer(n.READ_FRAMEBUFFER,_t.__webglMultisampledFramebuffer);const At=P.texture.mipmaps;At&&At.length>0?e.bindFramebuffer(n.DRAW_FRAMEBUFFER,_t.__webglFramebuffer[0]):e.bindFramebuffer(n.DRAW_FRAMEBUFFER,_t.__webglFramebuffer);for(let wt=0;wt<E.length;wt++){if(P.resolveDepthBuffer&&(P.depthBuffer&&(nt|=n.DEPTH_BUFFER_BIT),P.stencilBuffer&&P.resolveStencilBuffer&&(nt|=n.STENCIL_BUFFER_BIT)),ut){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,_t.__webglColorRenderbuffer[wt]);const ht=i.get(E[wt]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,ht,0)}n.blitFramebuffer(0,0,H,K,0,0,H,K,nt,n.NEAREST),l===!0&&(J.length=0,lt.length=0,J.push(n.COLOR_ATTACHMENT0+wt),P.depthBuffer&&P.resolveDepthBuffer===!1&&(J.push(X),lt.push(X),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,lt)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,J))}if(e.bindFramebuffer(n.READ_FRAMEBUFFER,null),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),ut)for(let wt=0;wt<E.length;wt++){e.bindFramebuffer(n.FRAMEBUFFER,_t.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+wt,n.RENDERBUFFER,_t.__webglColorRenderbuffer[wt]);const ht=i.get(E[wt]).__webglTexture;e.bindFramebuffer(n.FRAMEBUFFER,_t.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+wt,n.TEXTURE_2D,ht,0)}e.bindFramebuffer(n.DRAW_FRAMEBUFFER,_t.__webglMultisampledFramebuffer)}else if(P.depthBuffer&&P.resolveDepthBuffer===!1&&l){const E=P.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[E])}}}function Bt(P){return Math.min(s.maxSamples,P.samples)}function st(P){const E=i.get(P);return P.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function gt(P){const E=a.render.frame;h.get(P)!==E&&(h.set(P,E),P.update())}function Wt(P,E){const H=P.colorSpace,K=P.format,nt=P.type;return P.isCompressedTexture===!0||P.isVideoTexture===!0||H!==ds&&H!==Jn&&(ce.getTransfer(H)===fe?(K!==yn||nt!==Gn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",H)),E}function jt(P){return typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement?(c.width=P.naturalWidth||P.width,c.height=P.naturalHeight||P.height):typeof VideoFrame<"u"&&P instanceof VideoFrame?(c.width=P.displayWidth,c.height=P.displayHeight):(c.width=P.width,c.height=P.height),c}this.allocateTextureUnit=N,this.resetTextureUnits=I,this.setTexture2D=U,this.setTexture2DArray=k,this.setTexture3D=F,this.setTextureCube=O,this.rebindTextures=Yt,this.setupRenderTarget=D,this.updateRenderTargetMipmap=Zt,this.updateMultisampleRenderTarget=ct,this.setupDepthRenderbuffer=bt,this.setupFrameBufferTexture=at,this.useMultisampledRTT=st}function a0(n,t){function e(i,s=Jn){let r;const a=ce.getTransfer(s);if(i===Gn)return n.UNSIGNED_BYTE;if(i===Vo)return n.UNSIGNED_SHORT_4_4_4_4;if(i===Wo)return n.UNSIGNED_SHORT_5_5_5_1;if(i===Gl)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===Vl)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===kl)return n.BYTE;if(i===Hl)return n.SHORT;if(i===Ls)return n.UNSIGNED_SHORT;if(i===Go)return n.INT;if(i===Ai)return n.UNSIGNED_INT;if(i===zn)return n.FLOAT;if(i===ks)return n.HALF_FLOAT;if(i===Wl)return n.ALPHA;if(i===Xl)return n.RGB;if(i===yn)return n.RGBA;if(i===Us)return n.DEPTH_COMPONENT;if(i===Fs)return n.DEPTH_STENCIL;if(i===ql)return n.RED;if(i===Xo)return n.RED_INTEGER;if(i===$l)return n.RG;if(i===qo)return n.RG_INTEGER;if(i===$o)return n.RGBA_INTEGER;if(i===Cr||i===Pr||i===Dr||i===Lr)if(a===fe)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===Cr)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Pr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Dr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Lr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===Cr)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Pr)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Dr)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Lr)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Ja||i===Qa||i===to||i===eo)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===Ja)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Qa)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===to)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===eo)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===no||i===io||i===so)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(i===no||i===io)return a===fe?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===so)return a===fe?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===ro||i===ao||i===oo||i===co||i===lo||i===ho||i===uo||i===fo||i===po||i===mo||i===go||i===_o||i===xo||i===Mo)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(i===ro)return a===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===ao)return a===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===oo)return a===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===co)return a===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===lo)return a===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===ho)return a===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===uo)return a===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===fo)return a===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===po)return a===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===mo)return a===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===go)return a===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===_o)return a===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===xo)return a===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Mo)return a===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===vo||i===yo||i===So)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(i===vo)return a===fe?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===yo)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===So)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Eo||i===bo||i===To||i===Ao)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(i===Eo)return r.COMPRESSED_RED_RGTC1_EXT;if(i===bo)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===To)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Ao)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Is?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:e}}const o0=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,c0=`
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

}`;class l0{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){const i=new ah(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=i}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,i=new oi({vertexShader:o0,fragmentShader:c0,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new hn(new Yr(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class h0 extends Pi{constructor(t,e){super();const i=this;let s=null,r=1,a=null,o="local-floor",l=1,c=null,h=null,f=null,p=null,m=null,_=null;const x=typeof XRWebGLBinding<"u",u=new l0,d={},b=e.getContextAttributes();let v=null,g=null;const T=[],S=[],A=new Vt;let w=null;const y=new cn;y.viewport=new Ee;const M=new cn;M.viewport=new Ee;const C=[y,M],I=new Rd;let N=null,L=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(q){let V=T[q];return V===void 0&&(V=new ba,T[q]=V),V.getTargetRaySpace()},this.getControllerGrip=function(q){let V=T[q];return V===void 0&&(V=new ba,T[q]=V),V.getGripSpace()},this.getHand=function(q){let V=T[q];return V===void 0&&(V=new ba,T[q]=V),V.getHandSpace()};function U(q){const V=S.indexOf(q.inputSource);if(V===-1)return;const at=T[V];at!==void 0&&(at.update(q.inputSource,q.frame,c||a),at.dispatchEvent({type:q.type,data:q.inputSource}))}function k(){s.removeEventListener("select",U),s.removeEventListener("selectstart",U),s.removeEventListener("selectend",U),s.removeEventListener("squeeze",U),s.removeEventListener("squeezestart",U),s.removeEventListener("squeezeend",U),s.removeEventListener("end",k),s.removeEventListener("inputsourceschange",F);for(let q=0;q<T.length;q++){const V=S[q];V!==null&&(S[q]=null,T[q].disconnect(V))}N=null,L=null,u.reset();for(const q in d)delete d[q];t.setRenderTarget(v),m=null,p=null,f=null,s=null,g=null,Q.stop(),i.isPresenting=!1,t.setPixelRatio(w),t.setSize(A.width,A.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(q){r=q,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(q){o=q,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(q){c=q},this.getBaseLayer=function(){return p!==null?p:m},this.getBinding=function(){return f===null&&x&&(f=new XRWebGLBinding(s,e)),f},this.getFrame=function(){return _},this.getSession=function(){return s},this.setSession=async function(q){if(s=q,s!==null){if(v=t.getRenderTarget(),s.addEventListener("select",U),s.addEventListener("selectstart",U),s.addEventListener("selectend",U),s.addEventListener("squeeze",U),s.addEventListener("squeezestart",U),s.addEventListener("squeezeend",U),s.addEventListener("end",k),s.addEventListener("inputsourceschange",F),b.xrCompatible!==!0&&await e.makeXRCompatible(),w=t.getPixelRatio(),t.getSize(A),x&&"createProjectionLayer"in XRWebGLBinding.prototype){let at=null,vt=null,yt=null;b.depth&&(yt=b.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,at=b.stencil?Fs:Us,vt=b.stencil?Is:Ai);const bt={colorFormat:e.RGBA8,depthFormat:yt,scaleFactor:r};f=this.getBinding(),p=f.createProjectionLayer(bt),s.updateRenderState({layers:[p]}),t.setPixelRatio(1),t.setSize(p.textureWidth,p.textureHeight,!1),g=new wi(p.textureWidth,p.textureHeight,{format:yn,type:Gn,depthTexture:new rh(p.textureWidth,p.textureHeight,vt,void 0,void 0,void 0,void 0,void 0,void 0,at),stencilBuffer:b.stencil,colorSpace:t.outputColorSpace,samples:b.antialias?4:0,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1})}else{const at={antialias:b.antialias,alpha:!0,depth:b.depth,stencil:b.stencil,framebufferScaleFactor:r};m=new XRWebGLLayer(s,e,at),s.updateRenderState({baseLayer:m}),t.setPixelRatio(1),t.setSize(m.framebufferWidth,m.framebufferHeight,!1),g=new wi(m.framebufferWidth,m.framebufferHeight,{format:yn,type:Gn,colorSpace:t.outputColorSpace,stencilBuffer:b.stencil,resolveDepthBuffer:m.ignoreDepthValues===!1,resolveStencilBuffer:m.ignoreDepthValues===!1})}g.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),Q.setContext(s),Q.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return u.getDepthTexture()};function F(q){for(let V=0;V<q.removed.length;V++){const at=q.removed[V],vt=S.indexOf(at);vt>=0&&(S[vt]=null,T[vt].disconnect(at))}for(let V=0;V<q.added.length;V++){const at=q.added[V];let vt=S.indexOf(at);if(vt===-1){for(let bt=0;bt<T.length;bt++)if(bt>=S.length){S.push(at),vt=bt;break}else if(S[bt]===null){S[bt]=at,vt=bt;break}if(vt===-1)break}const yt=T[vt];yt&&yt.connect(at)}}const O=new B,Z=new B;function $(q,V,at){O.setFromMatrixPosition(V.matrixWorld),Z.setFromMatrixPosition(at.matrixWorld);const vt=O.distanceTo(Z),yt=V.projectionMatrix.elements,bt=at.projectionMatrix.elements,Yt=yt[14]/(yt[10]-1),D=yt[14]/(yt[10]+1),Zt=(yt[9]+1)/yt[5],J=(yt[9]-1)/yt[5],lt=(yt[8]-1)/yt[0],ct=(bt[8]+1)/bt[0],Bt=Yt*lt,st=Yt*ct,gt=vt/(-lt+ct),Wt=gt*-lt;if(V.matrixWorld.decompose(q.position,q.quaternion,q.scale),q.translateX(Wt),q.translateZ(gt),q.matrixWorld.compose(q.position,q.quaternion,q.scale),q.matrixWorldInverse.copy(q.matrixWorld).invert(),yt[10]===-1)q.projectionMatrix.copy(V.projectionMatrix),q.projectionMatrixInverse.copy(V.projectionMatrixInverse);else{const jt=Yt+gt,P=D+gt,E=Bt-Wt,H=st+(vt-Wt),K=Zt*D/P*jt,nt=J*D/P*jt;q.projectionMatrix.makePerspective(E,H,K,nt,jt,P),q.projectionMatrixInverse.copy(q.projectionMatrix).invert()}}function it(q,V){V===null?q.matrixWorld.copy(q.matrix):q.matrixWorld.multiplyMatrices(V.matrixWorld,q.matrix),q.matrixWorldInverse.copy(q.matrixWorld).invert()}this.updateCamera=function(q){if(s===null)return;let V=q.near,at=q.far;u.texture!==null&&(u.depthNear>0&&(V=u.depthNear),u.depthFar>0&&(at=u.depthFar)),I.near=M.near=y.near=V,I.far=M.far=y.far=at,(N!==I.near||L!==I.far)&&(s.updateRenderState({depthNear:I.near,depthFar:I.far}),N=I.near,L=I.far),I.layers.mask=q.layers.mask|6,y.layers.mask=I.layers.mask&3,M.layers.mask=I.layers.mask&5;const vt=q.parent,yt=I.cameras;it(I,vt);for(let bt=0;bt<yt.length;bt++)it(yt[bt],vt);yt.length===2?$(I,y,M):I.projectionMatrix.copy(y.projectionMatrix),mt(q,I,vt)};function mt(q,V,at){at===null?q.matrix.copy(V.matrixWorld):(q.matrix.copy(at.matrixWorld),q.matrix.invert(),q.matrix.multiply(V.matrixWorld)),q.matrix.decompose(q.position,q.quaternion,q.scale),q.updateMatrixWorld(!0),q.projectionMatrix.copy(V.projectionMatrix),q.projectionMatrixInverse.copy(V.projectionMatrixInverse),q.isPerspectiveCamera&&(q.fov=Ns*2*Math.atan(1/q.projectionMatrix.elements[5]),q.zoom=1)}this.getCamera=function(){return I},this.getFoveation=function(){if(!(p===null&&m===null))return l},this.setFoveation=function(q){l=q,p!==null&&(p.fixedFoveation=q),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=q)},this.hasDepthSensing=function(){return u.texture!==null},this.getDepthSensingMesh=function(){return u.getMesh(I)},this.getCameraTexture=function(q){return d[q]};let Ct=null;function et(q,V){if(h=V.getViewerPose(c||a),_=V,h!==null){const at=h.views;m!==null&&(t.setRenderTargetFramebuffer(g,m.framebuffer),t.setRenderTarget(g));let vt=!1;at.length!==I.cameras.length&&(I.cameras.length=0,vt=!0);for(let D=0;D<at.length;D++){const Zt=at[D];let J=null;if(m!==null)J=m.getViewport(Zt);else{const ct=f.getViewSubImage(p,Zt);J=ct.viewport,D===0&&(t.setRenderTargetTextures(g,ct.colorTexture,ct.depthStencilTexture),t.setRenderTarget(g))}let lt=C[D];lt===void 0&&(lt=new cn,lt.layers.enable(D),lt.viewport=new Ee,C[D]=lt),lt.matrix.fromArray(Zt.transform.matrix),lt.matrix.decompose(lt.position,lt.quaternion,lt.scale),lt.projectionMatrix.fromArray(Zt.projectionMatrix),lt.projectionMatrixInverse.copy(lt.projectionMatrix).invert(),lt.viewport.set(J.x,J.y,J.width,J.height),D===0&&(I.matrix.copy(lt.matrix),I.matrix.decompose(I.position,I.quaternion,I.scale)),vt===!0&&I.cameras.push(lt)}const yt=s.enabledFeatures;if(yt&&yt.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&x){f=i.getBinding();const D=f.getDepthInformation(at[0]);D&&D.isValid&&D.texture&&u.init(D,s.renderState)}if(yt&&yt.includes("camera-access")&&x){t.state.unbindTexture(),f=i.getBinding();for(let D=0;D<at.length;D++){const Zt=at[D].camera;if(Zt){let J=d[Zt];J||(J=new ah,d[Zt]=J);const lt=f.getCameraImage(Zt);J.sourceTexture=lt}}}}for(let at=0;at<T.length;at++){const vt=S[at],yt=T[at];vt!==null&&yt!==void 0&&yt.update(vt,V,c||a)}Ct&&Ct(q,V),V.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:V}),_=null}const Q=new oh;Q.setAnimationLoop(et),this.setAnimationLoop=function(q){Ct=q},this.dispose=function(){}}}const mi=new Vn,u0=new ve;function d0(n,t){function e(u,d){u.matrixAutoUpdate===!0&&u.updateMatrix(),d.value.copy(u.matrix)}function i(u,d){d.color.getRGB(u.fogColor.value,th(n)),d.isFog?(u.fogNear.value=d.near,u.fogFar.value=d.far):d.isFogExp2&&(u.fogDensity.value=d.density)}function s(u,d,b,v,g){d.isMeshBasicMaterial||d.isMeshLambertMaterial?r(u,d):d.isMeshToonMaterial?(r(u,d),f(u,d)):d.isMeshPhongMaterial?(r(u,d),h(u,d)):d.isMeshStandardMaterial?(r(u,d),p(u,d),d.isMeshPhysicalMaterial&&m(u,d,g)):d.isMeshMatcapMaterial?(r(u,d),_(u,d)):d.isMeshDepthMaterial?r(u,d):d.isMeshDistanceMaterial?(r(u,d),x(u,d)):d.isMeshNormalMaterial?r(u,d):d.isLineBasicMaterial?(a(u,d),d.isLineDashedMaterial&&o(u,d)):d.isPointsMaterial?l(u,d,b,v):d.isSpriteMaterial?c(u,d):d.isShadowMaterial?(u.color.value.copy(d.color),u.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function r(u,d){u.opacity.value=d.opacity,d.color&&u.diffuse.value.copy(d.color),d.emissive&&u.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(u.map.value=d.map,e(d.map,u.mapTransform)),d.alphaMap&&(u.alphaMap.value=d.alphaMap,e(d.alphaMap,u.alphaMapTransform)),d.bumpMap&&(u.bumpMap.value=d.bumpMap,e(d.bumpMap,u.bumpMapTransform),u.bumpScale.value=d.bumpScale,d.side===je&&(u.bumpScale.value*=-1)),d.normalMap&&(u.normalMap.value=d.normalMap,e(d.normalMap,u.normalMapTransform),u.normalScale.value.copy(d.normalScale),d.side===je&&u.normalScale.value.negate()),d.displacementMap&&(u.displacementMap.value=d.displacementMap,e(d.displacementMap,u.displacementMapTransform),u.displacementScale.value=d.displacementScale,u.displacementBias.value=d.displacementBias),d.emissiveMap&&(u.emissiveMap.value=d.emissiveMap,e(d.emissiveMap,u.emissiveMapTransform)),d.specularMap&&(u.specularMap.value=d.specularMap,e(d.specularMap,u.specularMapTransform)),d.alphaTest>0&&(u.alphaTest.value=d.alphaTest);const b=t.get(d),v=b.envMap,g=b.envMapRotation;v&&(u.envMap.value=v,mi.copy(g),mi.x*=-1,mi.y*=-1,mi.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(mi.y*=-1,mi.z*=-1),u.envMapRotation.value.setFromMatrix4(u0.makeRotationFromEuler(mi)),u.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,u.reflectivity.value=d.reflectivity,u.ior.value=d.ior,u.refractionRatio.value=d.refractionRatio),d.lightMap&&(u.lightMap.value=d.lightMap,u.lightMapIntensity.value=d.lightMapIntensity,e(d.lightMap,u.lightMapTransform)),d.aoMap&&(u.aoMap.value=d.aoMap,u.aoMapIntensity.value=d.aoMapIntensity,e(d.aoMap,u.aoMapTransform))}function a(u,d){u.diffuse.value.copy(d.color),u.opacity.value=d.opacity,d.map&&(u.map.value=d.map,e(d.map,u.mapTransform))}function o(u,d){u.dashSize.value=d.dashSize,u.totalSize.value=d.dashSize+d.gapSize,u.scale.value=d.scale}function l(u,d,b,v){u.diffuse.value.copy(d.color),u.opacity.value=d.opacity,u.size.value=d.size*b,u.scale.value=v*.5,d.map&&(u.map.value=d.map,e(d.map,u.uvTransform)),d.alphaMap&&(u.alphaMap.value=d.alphaMap,e(d.alphaMap,u.alphaMapTransform)),d.alphaTest>0&&(u.alphaTest.value=d.alphaTest)}function c(u,d){u.diffuse.value.copy(d.color),u.opacity.value=d.opacity,u.rotation.value=d.rotation,d.map&&(u.map.value=d.map,e(d.map,u.mapTransform)),d.alphaMap&&(u.alphaMap.value=d.alphaMap,e(d.alphaMap,u.alphaMapTransform)),d.alphaTest>0&&(u.alphaTest.value=d.alphaTest)}function h(u,d){u.specular.value.copy(d.specular),u.shininess.value=Math.max(d.shininess,1e-4)}function f(u,d){d.gradientMap&&(u.gradientMap.value=d.gradientMap)}function p(u,d){u.metalness.value=d.metalness,d.metalnessMap&&(u.metalnessMap.value=d.metalnessMap,e(d.metalnessMap,u.metalnessMapTransform)),u.roughness.value=d.roughness,d.roughnessMap&&(u.roughnessMap.value=d.roughnessMap,e(d.roughnessMap,u.roughnessMapTransform)),d.envMap&&(u.envMapIntensity.value=d.envMapIntensity)}function m(u,d,b){u.ior.value=d.ior,d.sheen>0&&(u.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),u.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(u.sheenColorMap.value=d.sheenColorMap,e(d.sheenColorMap,u.sheenColorMapTransform)),d.sheenRoughnessMap&&(u.sheenRoughnessMap.value=d.sheenRoughnessMap,e(d.sheenRoughnessMap,u.sheenRoughnessMapTransform))),d.clearcoat>0&&(u.clearcoat.value=d.clearcoat,u.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(u.clearcoatMap.value=d.clearcoatMap,e(d.clearcoatMap,u.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(u.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,e(d.clearcoatRoughnessMap,u.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(u.clearcoatNormalMap.value=d.clearcoatNormalMap,e(d.clearcoatNormalMap,u.clearcoatNormalMapTransform),u.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===je&&u.clearcoatNormalScale.value.negate())),d.dispersion>0&&(u.dispersion.value=d.dispersion),d.iridescence>0&&(u.iridescence.value=d.iridescence,u.iridescenceIOR.value=d.iridescenceIOR,u.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],u.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(u.iridescenceMap.value=d.iridescenceMap,e(d.iridescenceMap,u.iridescenceMapTransform)),d.iridescenceThicknessMap&&(u.iridescenceThicknessMap.value=d.iridescenceThicknessMap,e(d.iridescenceThicknessMap,u.iridescenceThicknessMapTransform))),d.transmission>0&&(u.transmission.value=d.transmission,u.transmissionSamplerMap.value=b.texture,u.transmissionSamplerSize.value.set(b.width,b.height),d.transmissionMap&&(u.transmissionMap.value=d.transmissionMap,e(d.transmissionMap,u.transmissionMapTransform)),u.thickness.value=d.thickness,d.thicknessMap&&(u.thicknessMap.value=d.thicknessMap,e(d.thicknessMap,u.thicknessMapTransform)),u.attenuationDistance.value=d.attenuationDistance,u.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(u.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(u.anisotropyMap.value=d.anisotropyMap,e(d.anisotropyMap,u.anisotropyMapTransform))),u.specularIntensity.value=d.specularIntensity,u.specularColor.value.copy(d.specularColor),d.specularColorMap&&(u.specularColorMap.value=d.specularColorMap,e(d.specularColorMap,u.specularColorMapTransform)),d.specularIntensityMap&&(u.specularIntensityMap.value=d.specularIntensityMap,e(d.specularIntensityMap,u.specularIntensityMapTransform))}function _(u,d){d.matcap&&(u.matcap.value=d.matcap)}function x(u,d){const b=t.get(d).light;u.referencePosition.value.setFromMatrixPosition(b.matrixWorld),u.nearDistance.value=b.shadow.camera.near,u.farDistance.value=b.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function f0(n,t,e,i){let s={},r={},a=[];const o=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(b,v){const g=v.program;i.uniformBlockBinding(b,g)}function c(b,v){let g=s[b.id];g===void 0&&(_(b),g=h(b),s[b.id]=g,b.addEventListener("dispose",u));const T=v.program;i.updateUBOMapping(b,T);const S=t.render.frame;r[b.id]!==S&&(p(b),r[b.id]=S)}function h(b){const v=f();b.__bindingPointIndex=v;const g=n.createBuffer(),T=b.__size,S=b.usage;return n.bindBuffer(n.UNIFORM_BUFFER,g),n.bufferData(n.UNIFORM_BUFFER,T,S),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,v,g),g}function f(){for(let b=0;b<o;b++)if(a.indexOf(b)===-1)return a.push(b),b;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function p(b){const v=s[b.id],g=b.uniforms,T=b.__cache;n.bindBuffer(n.UNIFORM_BUFFER,v);for(let S=0,A=g.length;S<A;S++){const w=Array.isArray(g[S])?g[S]:[g[S]];for(let y=0,M=w.length;y<M;y++){const C=w[y];if(m(C,S,y,T)===!0){const I=C.__offset,N=Array.isArray(C.value)?C.value:[C.value];let L=0;for(let U=0;U<N.length;U++){const k=N[U],F=x(k);typeof k=="number"||typeof k=="boolean"?(C.__data[0]=k,n.bufferSubData(n.UNIFORM_BUFFER,I+L,C.__data)):k.isMatrix3?(C.__data[0]=k.elements[0],C.__data[1]=k.elements[1],C.__data[2]=k.elements[2],C.__data[3]=0,C.__data[4]=k.elements[3],C.__data[5]=k.elements[4],C.__data[6]=k.elements[5],C.__data[7]=0,C.__data[8]=k.elements[6],C.__data[9]=k.elements[7],C.__data[10]=k.elements[8],C.__data[11]=0):(k.toArray(C.__data,L),L+=F.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,I,C.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function m(b,v,g,T){const S=b.value,A=v+"_"+g;if(T[A]===void 0)return typeof S=="number"||typeof S=="boolean"?T[A]=S:T[A]=S.clone(),!0;{const w=T[A];if(typeof S=="number"||typeof S=="boolean"){if(w!==S)return T[A]=S,!0}else if(w.equals(S)===!1)return w.copy(S),!0}return!1}function _(b){const v=b.uniforms;let g=0;const T=16;for(let A=0,w=v.length;A<w;A++){const y=Array.isArray(v[A])?v[A]:[v[A]];for(let M=0,C=y.length;M<C;M++){const I=y[M],N=Array.isArray(I.value)?I.value:[I.value];for(let L=0,U=N.length;L<U;L++){const k=N[L],F=x(k),O=g%T,Z=O%F.boundary,$=O+Z;g+=Z,$!==0&&T-$<F.storage&&(g+=T-$),I.__data=new Float32Array(F.storage/Float32Array.BYTES_PER_ELEMENT),I.__offset=g,g+=F.storage}}}const S=g%T;return S>0&&(g+=T-S),b.__size=g,b.__cache={},this}function x(b){const v={boundary:0,storage:0};return typeof b=="number"||typeof b=="boolean"?(v.boundary=4,v.storage=4):b.isVector2?(v.boundary=8,v.storage=8):b.isVector3||b.isColor?(v.boundary=16,v.storage=12):b.isVector4?(v.boundary=16,v.storage=16):b.isMatrix3?(v.boundary=48,v.storage=48):b.isMatrix4?(v.boundary=64,v.storage=64):b.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",b),v}function u(b){const v=b.target;v.removeEventListener("dispose",u);const g=a.indexOf(v.__bindingPointIndex);a.splice(g,1),n.deleteBuffer(s[v.id]),delete s[v.id],delete r[v.id]}function d(){for(const b in s)n.deleteBuffer(s[b]);a=[],s={},r={}}return{bind:l,update:c,dispose:d}}class p0{constructor(t={}){const{canvas:e=qu(),context:i=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:f=!1,reversedDepthBuffer:p=!1}=t;this.isWebGLRenderer=!0;let m;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");m=i.getContextAttributes().alpha}else m=a;const _=new Uint32Array(4),x=new Int32Array(4);let u=null,d=null;const b=[],v=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=ii,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const g=this;let T=!1;this._outputColorSpace=Fe;let S=0,A=0,w=null,y=-1,M=null;const C=new Ee,I=new Ee;let N=null;const L=new Ht(0);let U=0,k=e.width,F=e.height,O=1,Z=null,$=null;const it=new Ee(0,0,k,F),mt=new Ee(0,0,k,F);let Ct=!1;const et=new sh;let Q=!1,q=!1;const V=new ve,at=new B,vt=new Ee,yt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let bt=!1;function Yt(){return w===null?O:1}let D=i;function Zt(R,G){return e.getContext(R,G)}try{const R={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:f};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Ho}`),e.addEventListener("webglcontextlost",xt,!1),e.addEventListener("webglcontextrestored",Rt,!1),e.addEventListener("webglcontextcreationerror",ft,!1),D===null){const G="webgl2";if(D=Zt(G,R),D===null)throw Zt(G)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(R){throw console.error("THREE.WebGLRenderer: "+R.message),R}let J,lt,ct,Bt,st,gt,Wt,jt,P,E,H,K,nt,X,_t,ut,At,wt,ht,Mt,zt,Lt,St,$t;function z(){J=new bm(D),J.init(),Lt=new a0(D,J),lt=new _m(D,J,t,Lt),ct=new s0(D,J),lt.reversedDepthBuffer&&p&&ct.buffers.depth.setReversed(!0),Bt=new wm(D),st=new Xg,gt=new r0(D,J,ct,st,lt,Lt,Bt),Wt=new Mm(g),jt=new Em(g),P=new Ld(D),St=new mm(D,P),E=new Tm(D,P,Bt,St),H=new Cm(D,E,P,Bt),ht=new Rm(D,lt,gt),ut=new xm(st),K=new Wg(g,Wt,jt,J,lt,St,ut),nt=new d0(g,st),X=new $g,_t=new Qg(J),wt=new pm(g,Wt,jt,ct,H,m,l),At=new n0(g,H,lt),$t=new f0(D,Bt,lt,ct),Mt=new gm(D,J,Bt),zt=new Am(D,J,Bt),Bt.programs=K.programs,g.capabilities=lt,g.extensions=J,g.properties=st,g.renderLists=X,g.shadowMap=At,g.state=ct,g.info=Bt}z();const dt=new h0(g,D);this.xr=dt,this.getContext=function(){return D},this.getContextAttributes=function(){return D.getContextAttributes()},this.forceContextLoss=function(){const R=J.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){const R=J.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return O},this.setPixelRatio=function(R){R!==void 0&&(O=R,this.setSize(k,F,!1))},this.getSize=function(R){return R.set(k,F)},this.setSize=function(R,G,Y=!0){if(dt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}k=R,F=G,e.width=Math.floor(R*O),e.height=Math.floor(G*O),Y===!0&&(e.style.width=R+"px",e.style.height=G+"px"),this.setViewport(0,0,R,G)},this.getDrawingBufferSize=function(R){return R.set(k*O,F*O).floor()},this.setDrawingBufferSize=function(R,G,Y){k=R,F=G,O=Y,e.width=Math.floor(R*Y),e.height=Math.floor(G*Y),this.setViewport(0,0,R,G)},this.getCurrentViewport=function(R){return R.copy(C)},this.getViewport=function(R){return R.copy(it)},this.setViewport=function(R,G,Y,j){R.isVector4?it.set(R.x,R.y,R.z,R.w):it.set(R,G,Y,j),ct.viewport(C.copy(it).multiplyScalar(O).round())},this.getScissor=function(R){return R.copy(mt)},this.setScissor=function(R,G,Y,j){R.isVector4?mt.set(R.x,R.y,R.z,R.w):mt.set(R,G,Y,j),ct.scissor(I.copy(mt).multiplyScalar(O).round())},this.getScissorTest=function(){return Ct},this.setScissorTest=function(R){ct.setScissorTest(Ct=R)},this.setOpaqueSort=function(R){Z=R},this.setTransparentSort=function(R){$=R},this.getClearColor=function(R){return R.copy(wt.getClearColor())},this.setClearColor=function(){wt.setClearColor(...arguments)},this.getClearAlpha=function(){return wt.getClearAlpha()},this.setClearAlpha=function(){wt.setClearAlpha(...arguments)},this.clear=function(R=!0,G=!0,Y=!0){let j=0;if(R){let W=!1;if(w!==null){const pt=w.texture.format;W=pt===$o||pt===qo||pt===Xo}if(W){const pt=w.texture.type,Tt=pt===Gn||pt===Ai||pt===Ls||pt===Is||pt===Vo||pt===Wo,It=wt.getClearColor(),Pt=wt.getClearAlpha(),Xt=It.r,qt=It.g,Nt=It.b;Tt?(_[0]=Xt,_[1]=qt,_[2]=Nt,_[3]=Pt,D.clearBufferuiv(D.COLOR,0,_)):(x[0]=Xt,x[1]=qt,x[2]=Nt,x[3]=Pt,D.clearBufferiv(D.COLOR,0,x))}else j|=D.COLOR_BUFFER_BIT}G&&(j|=D.DEPTH_BUFFER_BIT),Y&&(j|=D.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),D.clear(j)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",xt,!1),e.removeEventListener("webglcontextrestored",Rt,!1),e.removeEventListener("webglcontextcreationerror",ft,!1),wt.dispose(),X.dispose(),_t.dispose(),st.dispose(),Wt.dispose(),jt.dispose(),H.dispose(),St.dispose(),$t.dispose(),K.dispose(),dt.dispose(),dt.removeEventListener("sessionstart",bn),dt.removeEventListener("sessionend",ac),ci.stop()};function xt(R){R.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),T=!0}function Rt(){console.log("THREE.WebGLRenderer: Context Restored."),T=!1;const R=Bt.autoReset,G=At.enabled,Y=At.autoUpdate,j=At.needsUpdate,W=At.type;z(),Bt.autoReset=R,At.enabled=G,At.autoUpdate=Y,At.needsUpdate=j,At.type=W}function ft(R){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function rt(R){const G=R.target;G.removeEventListener("dispose",rt),Ut(G)}function Ut(R){Kt(R),st.remove(R)}function Kt(R){const G=st.get(R).programs;G!==void 0&&(G.forEach(function(Y){K.releaseProgram(Y)}),R.isShaderMaterial&&K.releaseShaderCache(R))}this.renderBufferDirect=function(R,G,Y,j,W,pt){G===null&&(G=yt);const Tt=W.isMesh&&W.matrixWorld.determinant()<0,It=Oh(R,G,Y,j,W);ct.setMaterial(j,Tt);let Pt=Y.index,Xt=1;if(j.wireframe===!0){if(Pt=E.getWireframeAttribute(Y),Pt===void 0)return;Xt=2}const qt=Y.drawRange,Nt=Y.attributes.position;let ne=qt.start*Xt,de=(qt.start+qt.count)*Xt;pt!==null&&(ne=Math.max(ne,pt.start*Xt),de=Math.min(de,(pt.start+pt.count)*Xt)),Pt!==null?(ne=Math.max(ne,0),de=Math.min(de,Pt.count)):Nt!=null&&(ne=Math.max(ne,0),de=Math.min(de,Nt.count));const ye=de-ne;if(ye<0||ye===1/0)return;St.setup(W,j,It,Y,Pt);let _e,me=Mt;if(Pt!==null&&(_e=P.get(Pt),me=zt,me.setIndex(_e)),W.isMesh)j.wireframe===!0?(ct.setLineWidth(j.wireframeLinewidth*Yt()),me.setMode(D.LINES)):me.setMode(D.TRIANGLES);else if(W.isLine){let Gt=j.linewidth;Gt===void 0&&(Gt=1),ct.setLineWidth(Gt*Yt()),W.isLineSegments?me.setMode(D.LINES):W.isLineLoop?me.setMode(D.LINE_LOOP):me.setMode(D.LINE_STRIP)}else W.isPoints?me.setMode(D.POINTS):W.isSprite&&me.setMode(D.TRIANGLES);if(W.isBatchedMesh)if(W._multiDrawInstances!==null)Os("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),me.renderMultiDrawInstances(W._multiDrawStarts,W._multiDrawCounts,W._multiDrawCount,W._multiDrawInstances);else if(J.get("WEBGL_multi_draw"))me.renderMultiDraw(W._multiDrawStarts,W._multiDrawCounts,W._multiDrawCount);else{const Gt=W._multiDrawStarts,xe=W._multiDrawCounts,ae=W._multiDrawCount,Ke=Pt?P.get(Pt).bytesPerElement:1,Ii=st.get(j).currentProgram.getUniforms();for(let Ze=0;Ze<ae;Ze++)Ii.setValue(D,"_gl_DrawID",Ze),me.render(Gt[Ze]/Ke,xe[Ze])}else if(W.isInstancedMesh)me.renderInstances(ne,ye,W.count);else if(Y.isInstancedBufferGeometry){const Gt=Y._maxInstanceCount!==void 0?Y._maxInstanceCount:1/0,xe=Math.min(Y.instanceCount,Gt);me.renderInstances(ne,ye,xe)}else me.render(ne,ye)};function ge(R,G,Y){R.transparent===!0&&R.side===Bn&&R.forceSinglePass===!1?(R.side=je,R.needsUpdate=!0,Ys(R,G,Y),R.side=ri,R.needsUpdate=!0,Ys(R,G,Y),R.side=Bn):Ys(R,G,Y)}this.compile=function(R,G,Y=null){Y===null&&(Y=R),d=_t.get(Y),d.init(G),v.push(d),Y.traverseVisible(function(W){W.isLight&&W.layers.test(G.layers)&&(d.pushLight(W),W.castShadow&&d.pushShadow(W))}),R!==Y&&R.traverseVisible(function(W){W.isLight&&W.layers.test(G.layers)&&(d.pushLight(W),W.castShadow&&d.pushShadow(W))}),d.setupLights();const j=new Set;return R.traverse(function(W){if(!(W.isMesh||W.isPoints||W.isLine||W.isSprite))return;const pt=W.material;if(pt)if(Array.isArray(pt))for(let Tt=0;Tt<pt.length;Tt++){const It=pt[Tt];ge(It,Y,W),j.add(It)}else ge(pt,Y,W),j.add(pt)}),d=v.pop(),j},this.compileAsync=function(R,G,Y=null){const j=this.compile(R,G,Y);return new Promise(W=>{function pt(){if(j.forEach(function(Tt){st.get(Tt).currentProgram.isReady()&&j.delete(Tt)}),j.size===0){W(R);return}setTimeout(pt,10)}J.get("KHR_parallel_shader_compile")!==null?pt():setTimeout(pt,10)})};let he=null;function Dn(R){he&&he(R)}function bn(){ci.stop()}function ac(){ci.start()}const ci=new oh;ci.setAnimationLoop(Dn),typeof self<"u"&&ci.setContext(self),this.setAnimationLoop=function(R){he=R,dt.setAnimationLoop(R),R===null?ci.stop():ci.start()},dt.addEventListener("sessionstart",bn),dt.addEventListener("sessionend",ac),this.render=function(R,G){if(G!==void 0&&G.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(T===!0)return;if(R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),G.parent===null&&G.matrixWorldAutoUpdate===!0&&G.updateMatrixWorld(),dt.enabled===!0&&dt.isPresenting===!0&&(dt.cameraAutoUpdate===!0&&dt.updateCamera(G),G=dt.getCamera()),R.isScene===!0&&R.onBeforeRender(g,R,G,w),d=_t.get(R,v.length),d.init(G),v.push(d),V.multiplyMatrices(G.projectionMatrix,G.matrixWorldInverse),et.setFromProjectionMatrix(V,Rn,G.reversedDepth),q=this.localClippingEnabled,Q=ut.init(this.clippingPlanes,q),u=X.get(R,b.length),u.init(),b.push(u),dt.enabled===!0&&dt.isPresenting===!0){const pt=g.xr.getDepthSensingMesh();pt!==null&&ea(pt,G,-1/0,g.sortObjects)}ea(R,G,0,g.sortObjects),u.finish(),g.sortObjects===!0&&u.sort(Z,$),bt=dt.enabled===!1||dt.isPresenting===!1||dt.hasDepthSensing()===!1,bt&&wt.addToRenderList(u,R),this.info.render.frame++,Q===!0&&ut.beginShadows();const Y=d.state.shadowsArray;At.render(Y,R,G),Q===!0&&ut.endShadows(),this.info.autoReset===!0&&this.info.reset();const j=u.opaque,W=u.transmissive;if(d.setupLights(),G.isArrayCamera){const pt=G.cameras;if(W.length>0)for(let Tt=0,It=pt.length;Tt<It;Tt++){const Pt=pt[Tt];cc(j,W,R,Pt)}bt&&wt.render(R);for(let Tt=0,It=pt.length;Tt<It;Tt++){const Pt=pt[Tt];oc(u,R,Pt,Pt.viewport)}}else W.length>0&&cc(j,W,R,G),bt&&wt.render(R),oc(u,R,G);w!==null&&A===0&&(gt.updateMultisampleRenderTarget(w),gt.updateRenderTargetMipmap(w)),R.isScene===!0&&R.onAfterRender(g,R,G),St.resetDefaultState(),y=-1,M=null,v.pop(),v.length>0?(d=v[v.length-1],Q===!0&&ut.setGlobalState(g.clippingPlanes,d.state.camera)):d=null,b.pop(),b.length>0?u=b[b.length-1]:u=null};function ea(R,G,Y,j){if(R.visible===!1)return;if(R.layers.test(G.layers)){if(R.isGroup)Y=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update(G);else if(R.isLight)d.pushLight(R),R.castShadow&&d.pushShadow(R);else if(R.isSprite){if(!R.frustumCulled||et.intersectsSprite(R)){j&&vt.setFromMatrixPosition(R.matrixWorld).applyMatrix4(V);const Tt=H.update(R),It=R.material;It.visible&&u.push(R,Tt,It,Y,vt.z,null)}}else if((R.isMesh||R.isLine||R.isPoints)&&(!R.frustumCulled||et.intersectsObject(R))){const Tt=H.update(R),It=R.material;if(j&&(R.boundingSphere!==void 0?(R.boundingSphere===null&&R.computeBoundingSphere(),vt.copy(R.boundingSphere.center)):(Tt.boundingSphere===null&&Tt.computeBoundingSphere(),vt.copy(Tt.boundingSphere.center)),vt.applyMatrix4(R.matrixWorld).applyMatrix4(V)),Array.isArray(It)){const Pt=Tt.groups;for(let Xt=0,qt=Pt.length;Xt<qt;Xt++){const Nt=Pt[Xt],ne=It[Nt.materialIndex];ne&&ne.visible&&u.push(R,Tt,ne,Y,vt.z,Nt)}}else It.visible&&u.push(R,Tt,It,Y,vt.z,null)}}const pt=R.children;for(let Tt=0,It=pt.length;Tt<It;Tt++)ea(pt[Tt],G,Y,j)}function oc(R,G,Y,j){const W=R.opaque,pt=R.transmissive,Tt=R.transparent;d.setupLightsView(Y),Q===!0&&ut.setGlobalState(g.clippingPlanes,Y),j&&ct.viewport(C.copy(j)),W.length>0&&$s(W,G,Y),pt.length>0&&$s(pt,G,Y),Tt.length>0&&$s(Tt,G,Y),ct.buffers.depth.setTest(!0),ct.buffers.depth.setMask(!0),ct.buffers.color.setMask(!0),ct.setPolygonOffset(!1)}function cc(R,G,Y,j){if((Y.isScene===!0?Y.overrideMaterial:null)!==null)return;d.state.transmissionRenderTarget[j.id]===void 0&&(d.state.transmissionRenderTarget[j.id]=new wi(1,1,{generateMipmaps:!0,type:J.has("EXT_color_buffer_half_float")||J.has("EXT_color_buffer_float")?ks:Gn,minFilter:ti,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:ce.workingColorSpace}));const pt=d.state.transmissionRenderTarget[j.id],Tt=j.viewport||C;pt.setSize(Tt.z*g.transmissionResolutionScale,Tt.w*g.transmissionResolutionScale);const It=g.getRenderTarget(),Pt=g.getActiveCubeFace(),Xt=g.getActiveMipmapLevel();g.setRenderTarget(pt),g.getClearColor(L),U=g.getClearAlpha(),U<1&&g.setClearColor(16777215,.5),g.clear(),bt&&wt.render(Y);const qt=g.toneMapping;g.toneMapping=ii;const Nt=j.viewport;if(j.viewport!==void 0&&(j.viewport=void 0),d.setupLightsView(j),Q===!0&&ut.setGlobalState(g.clippingPlanes,j),$s(R,Y,j),gt.updateMultisampleRenderTarget(pt),gt.updateRenderTargetMipmap(pt),J.has("WEBGL_multisampled_render_to_texture")===!1){let ne=!1;for(let de=0,ye=G.length;de<ye;de++){const _e=G[de],me=_e.object,Gt=_e.geometry,xe=_e.material,ae=_e.group;if(xe.side===Bn&&me.layers.test(j.layers)){const Ke=xe.side;xe.side=je,xe.needsUpdate=!0,lc(me,Y,j,Gt,xe,ae),xe.side=Ke,xe.needsUpdate=!0,ne=!0}}ne===!0&&(gt.updateMultisampleRenderTarget(pt),gt.updateRenderTargetMipmap(pt))}g.setRenderTarget(It,Pt,Xt),g.setClearColor(L,U),Nt!==void 0&&(j.viewport=Nt),g.toneMapping=qt}function $s(R,G,Y){const j=G.isScene===!0?G.overrideMaterial:null;for(let W=0,pt=R.length;W<pt;W++){const Tt=R[W],It=Tt.object,Pt=Tt.geometry,Xt=Tt.group;let qt=Tt.material;qt.allowOverride===!0&&j!==null&&(qt=j),It.layers.test(Y.layers)&&lc(It,G,Y,Pt,qt,Xt)}}function lc(R,G,Y,j,W,pt){R.onBeforeRender(g,G,Y,j,W,pt),R.modelViewMatrix.multiplyMatrices(Y.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),W.onBeforeRender(g,G,Y,j,R,pt),W.transparent===!0&&W.side===Bn&&W.forceSinglePass===!1?(W.side=je,W.needsUpdate=!0,g.renderBufferDirect(Y,G,j,W,R,pt),W.side=ri,W.needsUpdate=!0,g.renderBufferDirect(Y,G,j,W,R,pt),W.side=Bn):g.renderBufferDirect(Y,G,j,W,R,pt),R.onAfterRender(g,G,Y,j,W,pt)}function Ys(R,G,Y){G.isScene!==!0&&(G=yt);const j=st.get(R),W=d.state.lights,pt=d.state.shadowsArray,Tt=W.state.version,It=K.getParameters(R,W.state,pt,G,Y),Pt=K.getProgramCacheKey(It);let Xt=j.programs;j.environment=R.isMeshStandardMaterial?G.environment:null,j.fog=G.fog,j.envMap=(R.isMeshStandardMaterial?jt:Wt).get(R.envMap||j.environment),j.envMapRotation=j.environment!==null&&R.envMap===null?G.environmentRotation:R.envMapRotation,Xt===void 0&&(R.addEventListener("dispose",rt),Xt=new Map,j.programs=Xt);let qt=Xt.get(Pt);if(qt!==void 0){if(j.currentProgram===qt&&j.lightsStateVersion===Tt)return uc(R,It),qt}else It.uniforms=K.getUniforms(R),R.onBeforeCompile(It,g),qt=K.acquireProgram(It,Pt),Xt.set(Pt,qt),j.uniforms=It.uniforms;const Nt=j.uniforms;return(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&(Nt.clippingPlanes=ut.uniform),uc(R,It),j.needsLights=zh(R),j.lightsStateVersion=Tt,j.needsLights&&(Nt.ambientLightColor.value=W.state.ambient,Nt.lightProbe.value=W.state.probe,Nt.directionalLights.value=W.state.directional,Nt.directionalLightShadows.value=W.state.directionalShadow,Nt.spotLights.value=W.state.spot,Nt.spotLightShadows.value=W.state.spotShadow,Nt.rectAreaLights.value=W.state.rectArea,Nt.ltc_1.value=W.state.rectAreaLTC1,Nt.ltc_2.value=W.state.rectAreaLTC2,Nt.pointLights.value=W.state.point,Nt.pointLightShadows.value=W.state.pointShadow,Nt.hemisphereLights.value=W.state.hemi,Nt.directionalShadowMap.value=W.state.directionalShadowMap,Nt.directionalShadowMatrix.value=W.state.directionalShadowMatrix,Nt.spotShadowMap.value=W.state.spotShadowMap,Nt.spotLightMatrix.value=W.state.spotLightMatrix,Nt.spotLightMap.value=W.state.spotLightMap,Nt.pointShadowMap.value=W.state.pointShadowMap,Nt.pointShadowMatrix.value=W.state.pointShadowMatrix),j.currentProgram=qt,j.uniformsList=null,qt}function hc(R){if(R.uniformsList===null){const G=R.currentProgram.getUniforms();R.uniformsList=Ir.seqWithValue(G.seq,R.uniforms)}return R.uniformsList}function uc(R,G){const Y=st.get(R);Y.outputColorSpace=G.outputColorSpace,Y.batching=G.batching,Y.batchingColor=G.batchingColor,Y.instancing=G.instancing,Y.instancingColor=G.instancingColor,Y.instancingMorph=G.instancingMorph,Y.skinning=G.skinning,Y.morphTargets=G.morphTargets,Y.morphNormals=G.morphNormals,Y.morphColors=G.morphColors,Y.morphTargetsCount=G.morphTargetsCount,Y.numClippingPlanes=G.numClippingPlanes,Y.numIntersection=G.numClipIntersection,Y.vertexAlphas=G.vertexAlphas,Y.vertexTangents=G.vertexTangents,Y.toneMapping=G.toneMapping}function Oh(R,G,Y,j,W){G.isScene!==!0&&(G=yt),gt.resetTextureUnits();const pt=G.fog,Tt=j.isMeshStandardMaterial?G.environment:null,It=w===null?g.outputColorSpace:w.isXRRenderTarget===!0?w.texture.colorSpace:ds,Pt=(j.isMeshStandardMaterial?jt:Wt).get(j.envMap||Tt),Xt=j.vertexColors===!0&&!!Y.attributes.color&&Y.attributes.color.itemSize===4,qt=!!Y.attributes.tangent&&(!!j.normalMap||j.anisotropy>0),Nt=!!Y.morphAttributes.position,ne=!!Y.morphAttributes.normal,de=!!Y.morphAttributes.color;let ye=ii;j.toneMapped&&(w===null||w.isXRRenderTarget===!0)&&(ye=g.toneMapping);const _e=Y.morphAttributes.position||Y.morphAttributes.normal||Y.morphAttributes.color,me=_e!==void 0?_e.length:0,Gt=st.get(j),xe=d.state.lights;if(Q===!0&&(q===!0||R!==M)){const ze=R===M&&j.id===y;ut.setState(j,R,ze)}let ae=!1;j.version===Gt.__version?(Gt.needsLights&&Gt.lightsStateVersion!==xe.state.version||Gt.outputColorSpace!==It||W.isBatchedMesh&&Gt.batching===!1||!W.isBatchedMesh&&Gt.batching===!0||W.isBatchedMesh&&Gt.batchingColor===!0&&W.colorTexture===null||W.isBatchedMesh&&Gt.batchingColor===!1&&W.colorTexture!==null||W.isInstancedMesh&&Gt.instancing===!1||!W.isInstancedMesh&&Gt.instancing===!0||W.isSkinnedMesh&&Gt.skinning===!1||!W.isSkinnedMesh&&Gt.skinning===!0||W.isInstancedMesh&&Gt.instancingColor===!0&&W.instanceColor===null||W.isInstancedMesh&&Gt.instancingColor===!1&&W.instanceColor!==null||W.isInstancedMesh&&Gt.instancingMorph===!0&&W.morphTexture===null||W.isInstancedMesh&&Gt.instancingMorph===!1&&W.morphTexture!==null||Gt.envMap!==Pt||j.fog===!0&&Gt.fog!==pt||Gt.numClippingPlanes!==void 0&&(Gt.numClippingPlanes!==ut.numPlanes||Gt.numIntersection!==ut.numIntersection)||Gt.vertexAlphas!==Xt||Gt.vertexTangents!==qt||Gt.morphTargets!==Nt||Gt.morphNormals!==ne||Gt.morphColors!==de||Gt.toneMapping!==ye||Gt.morphTargetsCount!==me)&&(ae=!0):(ae=!0,Gt.__version=j.version);let Ke=Gt.currentProgram;ae===!0&&(Ke=Ys(j,G,W));let Ii=!1,Ze=!1,gs=!1;const Me=Ke.getUniforms(),en=Gt.uniforms;if(ct.useProgram(Ke.program)&&(Ii=!0,Ze=!0,gs=!0),j.id!==y&&(y=j.id,Ze=!0),Ii||M!==R){ct.buffers.depth.getReversed()&&R.reversedDepth!==!0&&(R._reversedDepth=!0,R.updateProjectionMatrix()),Me.setValue(D,"projectionMatrix",R.projectionMatrix),Me.setValue(D,"viewMatrix",R.matrixWorldInverse);const qe=Me.map.cameraPosition;qe!==void 0&&qe.setValue(D,at.setFromMatrixPosition(R.matrixWorld)),lt.logarithmicDepthBuffer&&Me.setValue(D,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),(j.isMeshPhongMaterial||j.isMeshToonMaterial||j.isMeshLambertMaterial||j.isMeshBasicMaterial||j.isMeshStandardMaterial||j.isShaderMaterial)&&Me.setValue(D,"isOrthographic",R.isOrthographicCamera===!0),M!==R&&(M=R,Ze=!0,gs=!0)}if(W.isSkinnedMesh){Me.setOptional(D,W,"bindMatrix"),Me.setOptional(D,W,"bindMatrixInverse");const ze=W.skeleton;ze&&(ze.boneTexture===null&&ze.computeBoneTexture(),Me.setValue(D,"boneTexture",ze.boneTexture,gt))}W.isBatchedMesh&&(Me.setOptional(D,W,"batchingTexture"),Me.setValue(D,"batchingTexture",W._matricesTexture,gt),Me.setOptional(D,W,"batchingIdTexture"),Me.setValue(D,"batchingIdTexture",W._indirectTexture,gt),Me.setOptional(D,W,"batchingColorTexture"),W._colorsTexture!==null&&Me.setValue(D,"batchingColorTexture",W._colorsTexture,gt));const nn=Y.morphAttributes;if((nn.position!==void 0||nn.normal!==void 0||nn.color!==void 0)&&ht.update(W,Y,Ke),(Ze||Gt.receiveShadow!==W.receiveShadow)&&(Gt.receiveShadow=W.receiveShadow,Me.setValue(D,"receiveShadow",W.receiveShadow)),j.isMeshGouraudMaterial&&j.envMap!==null&&(en.envMap.value=Pt,en.flipEnvMap.value=Pt.isCubeTexture&&Pt.isRenderTargetTexture===!1?-1:1),j.isMeshStandardMaterial&&j.envMap===null&&G.environment!==null&&(en.envMapIntensity.value=G.environmentIntensity),Ze&&(Me.setValue(D,"toneMappingExposure",g.toneMappingExposure),Gt.needsLights&&Bh(en,gs),pt&&j.fog===!0&&nt.refreshFogUniforms(en,pt),nt.refreshMaterialUniforms(en,j,O,F,d.state.transmissionRenderTarget[R.id]),Ir.upload(D,hc(Gt),en,gt)),j.isShaderMaterial&&j.uniformsNeedUpdate===!0&&(Ir.upload(D,hc(Gt),en,gt),j.uniformsNeedUpdate=!1),j.isSpriteMaterial&&Me.setValue(D,"center",W.center),Me.setValue(D,"modelViewMatrix",W.modelViewMatrix),Me.setValue(D,"normalMatrix",W.normalMatrix),Me.setValue(D,"modelMatrix",W.matrixWorld),j.isShaderMaterial||j.isRawShaderMaterial){const ze=j.uniformsGroups;for(let qe=0,na=ze.length;qe<na;qe++){const li=ze[qe];$t.update(li,Ke),$t.bind(li,Ke)}}return Ke}function Bh(R,G){R.ambientLightColor.needsUpdate=G,R.lightProbe.needsUpdate=G,R.directionalLights.needsUpdate=G,R.directionalLightShadows.needsUpdate=G,R.pointLights.needsUpdate=G,R.pointLightShadows.needsUpdate=G,R.spotLights.needsUpdate=G,R.spotLightShadows.needsUpdate=G,R.rectAreaLights.needsUpdate=G,R.hemisphereLights.needsUpdate=G}function zh(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return S},this.getActiveMipmapLevel=function(){return A},this.getRenderTarget=function(){return w},this.setRenderTargetTextures=function(R,G,Y){const j=st.get(R);j.__autoAllocateDepthBuffer=R.resolveDepthBuffer===!1,j.__autoAllocateDepthBuffer===!1&&(j.__useRenderToTexture=!1),st.get(R.texture).__webglTexture=G,st.get(R.depthTexture).__webglTexture=j.__autoAllocateDepthBuffer?void 0:Y,j.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(R,G){const Y=st.get(R);Y.__webglFramebuffer=G,Y.__useDefaultFramebuffer=G===void 0};const kh=D.createFramebuffer();this.setRenderTarget=function(R,G=0,Y=0){w=R,S=G,A=Y;let j=!0,W=null,pt=!1,Tt=!1;if(R){const Pt=st.get(R);if(Pt.__useDefaultFramebuffer!==void 0)ct.bindFramebuffer(D.FRAMEBUFFER,null),j=!1;else if(Pt.__webglFramebuffer===void 0)gt.setupRenderTarget(R);else if(Pt.__hasExternalTextures)gt.rebindTextures(R,st.get(R.texture).__webglTexture,st.get(R.depthTexture).__webglTexture);else if(R.depthBuffer){const Nt=R.depthTexture;if(Pt.__boundDepthTexture!==Nt){if(Nt!==null&&st.has(Nt)&&(R.width!==Nt.image.width||R.height!==Nt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");gt.setupDepthRenderbuffer(R)}}const Xt=R.texture;(Xt.isData3DTexture||Xt.isDataArrayTexture||Xt.isCompressedArrayTexture)&&(Tt=!0);const qt=st.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(Array.isArray(qt[G])?W=qt[G][Y]:W=qt[G],pt=!0):R.samples>0&&gt.useMultisampledRTT(R)===!1?W=st.get(R).__webglMultisampledFramebuffer:Array.isArray(qt)?W=qt[Y]:W=qt,C.copy(R.viewport),I.copy(R.scissor),N=R.scissorTest}else C.copy(it).multiplyScalar(O).floor(),I.copy(mt).multiplyScalar(O).floor(),N=Ct;if(Y!==0&&(W=kh),ct.bindFramebuffer(D.FRAMEBUFFER,W)&&j&&ct.drawBuffers(R,W),ct.viewport(C),ct.scissor(I),ct.setScissorTest(N),pt){const Pt=st.get(R.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_CUBE_MAP_POSITIVE_X+G,Pt.__webglTexture,Y)}else if(Tt){const Pt=G;for(let Xt=0;Xt<R.textures.length;Xt++){const qt=st.get(R.textures[Xt]);D.framebufferTextureLayer(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0+Xt,qt.__webglTexture,Y,Pt)}}else if(R!==null&&Y!==0){const Pt=st.get(R.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,Pt.__webglTexture,Y)}y=-1},this.readRenderTargetPixels=function(R,G,Y,j,W,pt,Tt,It=0){if(!(R&&R.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Pt=st.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Tt!==void 0&&(Pt=Pt[Tt]),Pt){ct.bindFramebuffer(D.FRAMEBUFFER,Pt);try{const Xt=R.textures[It],qt=Xt.format,Nt=Xt.type;if(!lt.textureFormatReadable(qt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!lt.textureTypeReadable(Nt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}G>=0&&G<=R.width-j&&Y>=0&&Y<=R.height-W&&(R.textures.length>1&&D.readBuffer(D.COLOR_ATTACHMENT0+It),D.readPixels(G,Y,j,W,Lt.convert(qt),Lt.convert(Nt),pt))}finally{const Xt=w!==null?st.get(w).__webglFramebuffer:null;ct.bindFramebuffer(D.FRAMEBUFFER,Xt)}}},this.readRenderTargetPixelsAsync=async function(R,G,Y,j,W,pt,Tt,It=0){if(!(R&&R.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Pt=st.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Tt!==void 0&&(Pt=Pt[Tt]),Pt)if(G>=0&&G<=R.width-j&&Y>=0&&Y<=R.height-W){ct.bindFramebuffer(D.FRAMEBUFFER,Pt);const Xt=R.textures[It],qt=Xt.format,Nt=Xt.type;if(!lt.textureFormatReadable(qt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!lt.textureTypeReadable(Nt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const ne=D.createBuffer();D.bindBuffer(D.PIXEL_PACK_BUFFER,ne),D.bufferData(D.PIXEL_PACK_BUFFER,pt.byteLength,D.STREAM_READ),R.textures.length>1&&D.readBuffer(D.COLOR_ATTACHMENT0+It),D.readPixels(G,Y,j,W,Lt.convert(qt),Lt.convert(Nt),0);const de=w!==null?st.get(w).__webglFramebuffer:null;ct.bindFramebuffer(D.FRAMEBUFFER,de);const ye=D.fenceSync(D.SYNC_GPU_COMMANDS_COMPLETE,0);return D.flush(),await $u(D,ye,4),D.bindBuffer(D.PIXEL_PACK_BUFFER,ne),D.getBufferSubData(D.PIXEL_PACK_BUFFER,0,pt),D.deleteBuffer(ne),D.deleteSync(ye),pt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(R,G=null,Y=0){const j=Math.pow(2,-Y),W=Math.floor(R.image.width*j),pt=Math.floor(R.image.height*j),Tt=G!==null?G.x:0,It=G!==null?G.y:0;gt.setTexture2D(R,0),D.copyTexSubImage2D(D.TEXTURE_2D,Y,0,0,Tt,It,W,pt),ct.unbindTexture()};const Hh=D.createFramebuffer(),Gh=D.createFramebuffer();this.copyTextureToTexture=function(R,G,Y=null,j=null,W=0,pt=null){pt===null&&(W!==0?(Os("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),pt=W,W=0):pt=0);let Tt,It,Pt,Xt,qt,Nt,ne,de,ye;const _e=R.isCompressedTexture?R.mipmaps[pt]:R.image;if(Y!==null)Tt=Y.max.x-Y.min.x,It=Y.max.y-Y.min.y,Pt=Y.isBox3?Y.max.z-Y.min.z:1,Xt=Y.min.x,qt=Y.min.y,Nt=Y.isBox3?Y.min.z:0;else{const nn=Math.pow(2,-W);Tt=Math.floor(_e.width*nn),It=Math.floor(_e.height*nn),R.isDataArrayTexture?Pt=_e.depth:R.isData3DTexture?Pt=Math.floor(_e.depth*nn):Pt=1,Xt=0,qt=0,Nt=0}j!==null?(ne=j.x,de=j.y,ye=j.z):(ne=0,de=0,ye=0);const me=Lt.convert(G.format),Gt=Lt.convert(G.type);let xe;G.isData3DTexture?(gt.setTexture3D(G,0),xe=D.TEXTURE_3D):G.isDataArrayTexture||G.isCompressedArrayTexture?(gt.setTexture2DArray(G,0),xe=D.TEXTURE_2D_ARRAY):(gt.setTexture2D(G,0),xe=D.TEXTURE_2D),D.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,G.flipY),D.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,G.premultiplyAlpha),D.pixelStorei(D.UNPACK_ALIGNMENT,G.unpackAlignment);const ae=D.getParameter(D.UNPACK_ROW_LENGTH),Ke=D.getParameter(D.UNPACK_IMAGE_HEIGHT),Ii=D.getParameter(D.UNPACK_SKIP_PIXELS),Ze=D.getParameter(D.UNPACK_SKIP_ROWS),gs=D.getParameter(D.UNPACK_SKIP_IMAGES);D.pixelStorei(D.UNPACK_ROW_LENGTH,_e.width),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,_e.height),D.pixelStorei(D.UNPACK_SKIP_PIXELS,Xt),D.pixelStorei(D.UNPACK_SKIP_ROWS,qt),D.pixelStorei(D.UNPACK_SKIP_IMAGES,Nt);const Me=R.isDataArrayTexture||R.isData3DTexture,en=G.isDataArrayTexture||G.isData3DTexture;if(R.isDepthTexture){const nn=st.get(R),ze=st.get(G),qe=st.get(nn.__renderTarget),na=st.get(ze.__renderTarget);ct.bindFramebuffer(D.READ_FRAMEBUFFER,qe.__webglFramebuffer),ct.bindFramebuffer(D.DRAW_FRAMEBUFFER,na.__webglFramebuffer);for(let li=0;li<Pt;li++)Me&&(D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,st.get(R).__webglTexture,W,Nt+li),D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,st.get(G).__webglTexture,pt,ye+li)),D.blitFramebuffer(Xt,qt,Tt,It,ne,de,Tt,It,D.DEPTH_BUFFER_BIT,D.NEAREST);ct.bindFramebuffer(D.READ_FRAMEBUFFER,null),ct.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else if(W!==0||R.isRenderTargetTexture||st.has(R)){const nn=st.get(R),ze=st.get(G);ct.bindFramebuffer(D.READ_FRAMEBUFFER,Hh),ct.bindFramebuffer(D.DRAW_FRAMEBUFFER,Gh);for(let qe=0;qe<Pt;qe++)Me?D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,nn.__webglTexture,W,Nt+qe):D.framebufferTexture2D(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,nn.__webglTexture,W),en?D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,ze.__webglTexture,pt,ye+qe):D.framebufferTexture2D(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,ze.__webglTexture,pt),W!==0?D.blitFramebuffer(Xt,qt,Tt,It,ne,de,Tt,It,D.COLOR_BUFFER_BIT,D.NEAREST):en?D.copyTexSubImage3D(xe,pt,ne,de,ye+qe,Xt,qt,Tt,It):D.copyTexSubImage2D(xe,pt,ne,de,Xt,qt,Tt,It);ct.bindFramebuffer(D.READ_FRAMEBUFFER,null),ct.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else en?R.isDataTexture||R.isData3DTexture?D.texSubImage3D(xe,pt,ne,de,ye,Tt,It,Pt,me,Gt,_e.data):G.isCompressedArrayTexture?D.compressedTexSubImage3D(xe,pt,ne,de,ye,Tt,It,Pt,me,_e.data):D.texSubImage3D(xe,pt,ne,de,ye,Tt,It,Pt,me,Gt,_e):R.isDataTexture?D.texSubImage2D(D.TEXTURE_2D,pt,ne,de,Tt,It,me,Gt,_e.data):R.isCompressedTexture?D.compressedTexSubImage2D(D.TEXTURE_2D,pt,ne,de,_e.width,_e.height,me,_e.data):D.texSubImage2D(D.TEXTURE_2D,pt,ne,de,Tt,It,me,Gt,_e);D.pixelStorei(D.UNPACK_ROW_LENGTH,ae),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,Ke),D.pixelStorei(D.UNPACK_SKIP_PIXELS,Ii),D.pixelStorei(D.UNPACK_SKIP_ROWS,Ze),D.pixelStorei(D.UNPACK_SKIP_IMAGES,gs),pt===0&&G.generateMipmaps&&D.generateMipmap(xe),ct.unbindTexture()},this.initRenderTarget=function(R){st.get(R).__webglFramebuffer===void 0&&gt.setupRenderTarget(R)},this.initTexture=function(R){R.isCubeTexture?gt.setTextureCube(R,0):R.isData3DTexture?gt.setTexture3D(R,0):R.isDataArrayTexture||R.isCompressedArrayTexture?gt.setTexture2DArray(R,0):gt.setTexture2D(R,0),ct.unbindTexture()},this.resetState=function(){S=0,A=0,w=null,ct.reset(),St.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Rn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=ce._getDrawingBufferColorSpace(t),e.unpackColorSpace=ce._getUnpackColorSpace()}}const xl={type:"change"},ic={type:"start"},dh={type:"end"},Er=new Vs,Ml=new Kn,m0=Math.cos(70*ot.DEG2RAD),Re=new B,$e=2*Math.PI,pe={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Ua=1e-6;class g0 extends Pd{constructor(t,e=null){super(t,e),this.state=pe.NONE,this.target=new B,this.cursor=new B,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:ss.ROTATE,MIDDLE:ss.DOLLY,RIGHT:ss.PAN},this.touches={ONE:es.ROTATE,TWO:es.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new B,this._lastQuaternion=new ai,this._lastTargetPosition=new B,this._quat=new ai().setFromUnitVectors(t.up,new B(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new qc,this._sphericalDelta=new qc,this._scale=1,this._panOffset=new B,this._rotateStart=new Vt,this._rotateEnd=new Vt,this._rotateDelta=new Vt,this._panStart=new Vt,this._panEnd=new Vt,this._panDelta=new Vt,this._dollyStart=new Vt,this._dollyEnd=new Vt,this._dollyDelta=new Vt,this._dollyDirection=new B,this._mouse=new Vt,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=x0.bind(this),this._onPointerDown=_0.bind(this),this._onPointerUp=M0.bind(this),this._onContextMenu=A0.bind(this),this._onMouseWheel=S0.bind(this),this._onKeyDown=E0.bind(this),this._onTouchStart=b0.bind(this),this._onTouchMove=T0.bind(this),this._onMouseDown=v0.bind(this),this._onMouseMove=y0.bind(this),this._interceptControlDown=w0.bind(this),this._interceptControlUp=R0.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}connect(t){super.connect(t),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(t){t.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=t}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(xl),this.update(),this.state=pe.NONE}update(t=null){const e=this.object.position;Re.copy(e).sub(this.target),Re.applyQuaternion(this._quat),this._spherical.setFromVector3(Re),this.autoRotate&&this.state===pe.NONE&&this._rotateLeft(this._getAutoRotationAngle(t)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let i=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(i)&&isFinite(s)&&(i<-Math.PI?i+=$e:i>Math.PI&&(i-=$e),s<-Math.PI?s+=$e:s>Math.PI&&(s-=$e),i<=s?this._spherical.theta=Math.max(i,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(i+s)/2?Math.max(i,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const a=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=a!=this._spherical.radius}if(Re.setFromSpherical(this._spherical),Re.applyQuaternion(this._quatInverse),e.copy(this.target).add(Re),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let a=null;if(this.object.isPerspectiveCamera){const o=Re.length();a=this._clampDistance(o*this._scale);const l=o-a;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),r=!!l}else if(this.object.isOrthographicCamera){const o=new B(this._mouse.x,this._mouse.y,0);o.unproject(this.object);const l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=l!==this.object.zoom;const c=new B(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(o),this.object.updateMatrixWorld(),a=Re.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;a!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(a).add(this.object.position):(Er.origin.copy(this.object.position),Er.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Er.direction))<m0?this.object.lookAt(this.target):(Ml.setFromNormalAndCoplanarPoint(this.object.up,this.target),Er.intersectPlane(Ml,this.target))))}else if(this.object.isOrthographicCamera){const a=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),a!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>Ua||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Ua||this._lastTargetPosition.distanceToSquared(this.target)>Ua?(this.dispatchEvent(xl),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(t){return t!==null?$e/60*this.autoRotateSpeed*t:$e/60/60*this.autoRotateSpeed}_getZoomScale(t){const e=Math.abs(t*.01);return Math.pow(.95,this.zoomSpeed*e)}_rotateLeft(t){this._sphericalDelta.theta-=t}_rotateUp(t){this._sphericalDelta.phi-=t}_panLeft(t,e){Re.setFromMatrixColumn(e,0),Re.multiplyScalar(-t),this._panOffset.add(Re)}_panUp(t,e){this.screenSpacePanning===!0?Re.setFromMatrixColumn(e,1):(Re.setFromMatrixColumn(e,0),Re.crossVectors(this.object.up,Re)),Re.multiplyScalar(t),this._panOffset.add(Re)}_pan(t,e){const i=this.domElement;if(this.object.isPerspectiveCamera){const s=this.object.position;Re.copy(s).sub(this.target);let r=Re.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*t*r/i.clientHeight,this.object.matrix),this._panUp(2*e*r/i.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(t*(this.object.right-this.object.left)/this.object.zoom/i.clientWidth,this.object.matrix),this._panUp(e*(this.object.top-this.object.bottom)/this.object.zoom/i.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(t,e){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const i=this.domElement.getBoundingClientRect(),s=t-i.left,r=e-i.top,a=i.width,o=i.height;this._mouse.x=s/a*2-1,this._mouse.y=-(r/o)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(t){return Math.max(this.minDistance,Math.min(this.maxDistance,t))}_handleMouseDownRotate(t){this._rotateStart.set(t.clientX,t.clientY)}_handleMouseDownDolly(t){this._updateZoomParameters(t.clientX,t.clientX),this._dollyStart.set(t.clientX,t.clientY)}_handleMouseDownPan(t){this._panStart.set(t.clientX,t.clientY)}_handleMouseMoveRotate(t){this._rotateEnd.set(t.clientX,t.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const e=this.domElement;this._rotateLeft($e*this._rotateDelta.x/e.clientHeight),this._rotateUp($e*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(t){this._dollyEnd.set(t.clientX,t.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(t){this._panEnd.set(t.clientX,t.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(t){this._updateZoomParameters(t.clientX,t.clientY),t.deltaY<0?this._dollyIn(this._getZoomScale(t.deltaY)):t.deltaY>0&&this._dollyOut(this._getZoomScale(t.deltaY)),this.update()}_handleKeyDown(t){let e=!1;switch(t.code){case this.keys.UP:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp($e*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),e=!0;break;case this.keys.BOTTOM:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(-$e*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),e=!0;break;case this.keys.LEFT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft($e*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),e=!0;break;case this.keys.RIGHT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(-$e*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),e=!0;break}e&&(t.preventDefault(),this.update())}_handleTouchStartRotate(t){if(this._pointers.length===1)this._rotateStart.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),i=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._rotateStart.set(i,s)}}_handleTouchStartPan(t){if(this._pointers.length===1)this._panStart.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),i=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panStart.set(i,s)}}_handleTouchStartDolly(t){const e=this._getSecondPointerPosition(t),i=t.pageX-e.x,s=t.pageY-e.y,r=Math.sqrt(i*i+s*s);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enablePan&&this._handleTouchStartPan(t)}_handleTouchStartDollyRotate(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enableRotate&&this._handleTouchStartRotate(t)}_handleTouchMoveRotate(t){if(this._pointers.length==1)this._rotateEnd.set(t.pageX,t.pageY);else{const i=this._getSecondPointerPosition(t),s=.5*(t.pageX+i.x),r=.5*(t.pageY+i.y);this._rotateEnd.set(s,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const e=this.domElement;this._rotateLeft($e*this._rotateDelta.x/e.clientHeight),this._rotateUp($e*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(t){if(this._pointers.length===1)this._panEnd.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),i=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panEnd.set(i,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(t){const e=this._getSecondPointerPosition(t),i=t.pageX-e.x,s=t.pageY-e.y,r=Math.sqrt(i*i+s*s);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const a=(t.pageX+e.x)*.5,o=(t.pageY+e.y)*.5;this._updateZoomParameters(a,o)}_handleTouchMoveDollyPan(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enablePan&&this._handleTouchMovePan(t)}_handleTouchMoveDollyRotate(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enableRotate&&this._handleTouchMoveRotate(t)}_addPointer(t){this._pointers.push(t.pointerId)}_removePointer(t){delete this._pointerPositions[t.pointerId];for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId){this._pointers.splice(e,1);return}}_isTrackingPointer(t){for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId)return!0;return!1}_trackPointer(t){let e=this._pointerPositions[t.pointerId];e===void 0&&(e=new Vt,this._pointerPositions[t.pointerId]=e),e.set(t.pageX,t.pageY)}_getSecondPointerPosition(t){const e=t.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[e]}_customWheelEvent(t){const e=t.deltaMode,i={clientX:t.clientX,clientY:t.clientY,deltaY:t.deltaY};switch(e){case 1:i.deltaY*=16;break;case 2:i.deltaY*=100;break}return t.ctrlKey&&!this._controlActive&&(i.deltaY*=10),i}}function _0(n){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(n.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(n)&&(this._addPointer(n),n.pointerType==="touch"?this._onTouchStart(n):this._onMouseDown(n)))}function x0(n){this.enabled!==!1&&(n.pointerType==="touch"?this._onTouchMove(n):this._onMouseMove(n))}function M0(n){switch(this._removePointer(n),this._pointers.length){case 0:this.domElement.releasePointerCapture(n.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(dh),this.state=pe.NONE;break;case 1:const t=this._pointers[0],e=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:e.x,pageY:e.y});break}}function v0(n){let t;switch(n.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case ss.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(n),this.state=pe.DOLLY;break;case ss.ROTATE:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=pe.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=pe.ROTATE}break;case ss.PAN:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=pe.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=pe.PAN}break;default:this.state=pe.NONE}this.state!==pe.NONE&&this.dispatchEvent(ic)}function y0(n){switch(this.state){case pe.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(n);break;case pe.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(n);break;case pe.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(n);break}}function S0(n){this.enabled===!1||this.enableZoom===!1||this.state!==pe.NONE||(n.preventDefault(),this.dispatchEvent(ic),this._handleMouseWheel(this._customWheelEvent(n)),this.dispatchEvent(dh))}function E0(n){this.enabled!==!1&&this._handleKeyDown(n)}function b0(n){switch(this._trackPointer(n),this._pointers.length){case 1:switch(this.touches.ONE){case es.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(n),this.state=pe.TOUCH_ROTATE;break;case es.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(n),this.state=pe.TOUCH_PAN;break;default:this.state=pe.NONE}break;case 2:switch(this.touches.TWO){case es.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(n),this.state=pe.TOUCH_DOLLY_PAN;break;case es.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(n),this.state=pe.TOUCH_DOLLY_ROTATE;break;default:this.state=pe.NONE}break;default:this.state=pe.NONE}this.state!==pe.NONE&&this.dispatchEvent(ic)}function T0(n){switch(this._trackPointer(n),this.state){case pe.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(n),this.update();break;case pe.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(n),this.update();break;case pe.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(n),this.update();break;case pe.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(n),this.update();break;default:this.state=pe.NONE}}function A0(n){this.enabled!==!1&&n.preventDefault()}function w0(n){n.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function R0(n){n.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}const vl=["一次偶然涨落，一组全新的自然法则。","这里的星光，以陌生的速度穿过真空。","引力写下结构，时间负责把它读完。","一个从未存在过，也不会再次出现的宇宙。","尘埃正在聚集，第一颗恒星即将点亮。"],yl=["赫利俄斯","弥涅耳瓦","伊奥","俄耳甫斯","忒弥斯","厄里倪厄斯","欧律狄刻","阿斯忒里亚"],Do=["棒旋星系","絮状螺旋星系","环状星系","椭圆星系","不规则星系"],Sl=["赛里安共同体","洛珂蜂群","弧光联盟","静默者","澄海文明","铸星者","织光议会","塔乌林协约","奈落合众体","远潮群落","镜海联邦","巡星庭","赤纬公社","无昼同盟","尘环智群"],El=[14221151,16743275,6928639,15174911,16762460,6481615,16747975,10920191,15899989,7595116,6215935,16770683,12815615,16737894,9484543],bl=[{until:55,name:"炽热大爆炸",description:"整个可观测区域同时处于高温、高密度状态；这不是物质从某个中心炸开。"},{until:145,name:"等离子体时代",description:"宇宙膨胀并冷却，原初核合成后，光子仍被自由电子频繁散射。"},{until:245,name:"宇宙黑暗时代",description:"38 万年后宇宙变得透明，但第一代恒星尚未点亮。"},{until:340,name:"宇宙黎明",description:"约 1～2 亿年后，第一代恒星与星系开始形成并推动再电离。"},{until:650,name:"恒星时代",description:"恒星、星系与重元素持续演化；生命与文明属于未证实的模型层。"},{until:845,name:"简并时代 · 假说",description:"若质子衰变等标准长期假说成立，恒星残骸绕核运行，并在近遇中逐个逃离或落入黑洞。"},{until:950,name:"黑洞时代 · 假说",description:"若霍金辐射的标准推断适用，孤立黑洞在极漫长时间中逐个蒸发。"},{until:1001,name:"暗时代 · 渐近",description:"宇宙继续膨胀，辐射红移与稀释，可用能量梯度趋近于零，而非发生一次全局终结。"}];function C0(n){const t=n?.cosmicFate;if(!t||t.type==="heat-death")return bl;const e=bl.slice(0,5);return t.type==="big-rip"?[...e,{until:850,name:"幽灵能量时代 · 假说",description:"暗能量密度随膨胀增长，宇宙在有限时间内加速趋向失稳。"},{until:1001,name:"大撕裂 · 条件结局",description:"在 w < -1 持续成立的假设下，局部引力与微观束缚将被逐层克服。"}]:t.type==="big-crunch"?[...e,{until:850,name:"膨胀反转 · 假说",description:"动态暗能量的有效势能跨过零点，哈勃参数逐步降低至零。"},{until:1001,name:"大坍缩 · 条件结局",description:"尺度因子反向演化，物质与辐射密度在有限时间内快速上升。"}]:[...e,{until:875,name:"亚稳真空 · 假说",description:"真空仍位于寿命未知的局部能量最低点，未发生可见跃迁。"},{until:1001,name:"真空衰变 · 条件结局",description:"随机量子隧穿产生低能真空泡，泡壁以近光速改写局部基态。"}]}function re(n){const t=Math.max(n(),1e-7),e=n();return Math.sqrt(-2*Math.log(t))*Math.cos(2*Math.PI*e)}function tt(n,t,e){return t+n()*(e-t)}const Tl="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ",P0=4,Fa=16;function fh(n){let t=1779033703,e=3144134277,i=1013904242,s=2773480762;for(let r=0;r<n.length;r++){const a=n.charCodeAt(r);t=e^Math.imul(t^a,597399067),e=i^Math.imul(e^a,2869860233),i=s^Math.imul(i^a,951274213),s=t^Math.imul(s^a,2716044179)}return t=Math.imul(i^t>>>18,597399067),e=Math.imul(s^e>>>22,2869860233),i=Math.imul(t^i>>>17,951274213),s=Math.imul(e^s>>>19,2716044179),t^=e^i^s,e^=t,i^=t,s^=t,[t>>>0,e>>>0,i>>>0,s>>>0]}function Zr(n){const t=String(n).trim().toUpperCase();if(!/^(?:[A-Z0-9]{16}|[A-Z0-9]{4}(?:-[A-Z0-9]{4}){3})$/.test(t))throw new TypeError("Universe seed must contain exactly 16 letters or digits.");return t.replaceAll("-","").match(new RegExp(`.{${P0}}`,"g")).join("-")}function D0(){const n=globalThis.crypto;if(!n?.getRandomValues)throw new Error("Secure random number generation is unavailable.");let t="";do for(t="";t.length<Fa;){const e=n.getRandomValues(new Uint8Array(Fa));for(const i of e)if(!(i>=252)&&(t+=Tl[i%Tl.length],t.length===Fa))break}while(!/[A-Z]/.test(t)||!/[0-9]/.test(t));return Zr(t)}function L0(n){return fh(Zr(n))[0]}function un(n,t=0){let[e,i,s,r]=fh(`${Zr(n)}:${t}`);return function(){const o=((e+i|0)+r|0)>>>0;return r=r+1|0,e=i^i>>>9,i=s+(s<<3)|0,s=s<<21|s>>>11,s=s+o|0,o/4294967296}}const Lo=145e8,as=.012,I0={lambda:{label:"宇宙学常数",description:"暗能量密度保持不变，加速膨胀持续"},quintessence:{label:"演化标量场",description:"暗能量状态方程随尺度因子缓慢演化"},phantom:{label:"幽灵暗能量",description:"有效状态方程低于 -1，暗能量密度随膨胀增长"},recollapsing:{label:"反转势能",description:"标量场势能在远未来跨过零点，膨胀最终停止"}},U0={"heat-death":{label:"渐近热寂",shortLabel:"热寂",description:"膨胀持续，可用能量梯度逐渐消失"},"big-rip":{label:"大撕裂",shortLabel:"大撕裂",description:"加速膨胀最终克服星系、恒星系与局部束缚"},"big-crunch":{label:"大坍缩",shortLabel:"大坍缩",description:"膨胀反转后，尺度因子在有限时间内回落"},"vacuum-decay":{label:"真空衰变",shortLabel:"真空衰变",description:"低能真空泡成核，泡壁以近光速扩张"}};function ph(n,t,e){const i=n*n+(1-n)**2;return t+e*(1-n)/i}function F0({scaleFactor:n,darkEnergyEvolution:t,rateSquared:e,ageYears:i,w0:s,wa:r,expansionRate:a,darkEnergyDensity:o,omegaMatter:l,turnScale:c,history:h}){let f=n,p=t,m=e,_=i;for(let x=1;x<=3200;x++){const u=f*Math.exp(-as),d=Math.sqrt(f*u),b=ph(d,s,r),v=p*Math.exp(3*(1+b)*as),g=.22*o*Math.pow(u/c,2.35),T=l/Math.pow(u,3)+o*v-g,S=Math.sqrt(Math.max(1e-18,(m+T)*.5));if(_+=Lo/a*as/S,f=u,p=v,m=T,x%80===0&&h.push({ageYears:_,scaleFactor:f,expansionRatio:-Math.sqrt(Math.max(0,m)),w:b,phase:"contraction"}),f<1e-8)break}return _}function N0({model:n,w0:t,wa:e,expansionRate:i,darkEnergyDensity:s,turnScale:r,presentAgeYears:a}){const o=Math.max(.06,1-s);let l=1,c=1,h=a,f=1;const p=[{ageYears:h,scaleFactor:l,expansionRatio:1,w:t,phase:"expansion"}];for(let _=1;_<=2400;_++){const x=l,u=l*Math.exp(as),d=Math.sqrt(l*u),b=ph(d,t,e),v=c*Math.exp(-3*(1+b)*as),g=n==="recollapsing"?.22*s*Math.pow(u/r,2.35):0,T=o/Math.pow(u,3)+s*v-g;if(T<=0){const A=h,w=F0({scaleFactor:x,darkEnergyEvolution:c,rateSquared:f,ageYears:h,w0:t,wa:e,expansionRate:i,darkEnergyDensity:s,omegaMatter:o,turnScale:r,history:p});return{history:p,turnaroundYears:A,crunchYears:w,finalRateSquared:T}}const S=Math.sqrt((f+T)*.5);h+=Lo/i*as/Math.max(S,1e-12),l=u,c=v,f=T,_%80===0&&p.push({ageYears:h,scaleFactor:l,expansionRatio:Math.sqrt(T),w:b,phase:"expansion"})}let m=h;if(n==="phantom"){const _=Lo/i*2/(3*Math.abs(1+t))/Math.sqrt(s*c);m+=_}return{history:p,asymptoticYears:m,finalRateSquared:f}}function O0(n){const t=n();return t<.34?{model:"lambda",w0:-1,wa:0,turnScale:1/0}:t<.62?{model:"quintessence",w0:tt(n,-.96,-.76),wa:tt(n,-.1,.1),turnScale:1/0}:t<.82?{model:"phantom",w0:tt(n,-1.22,-1.035),wa:tt(n,.015,.14),turnScale:1/0}:{model:"recollapsing",w0:tt(n,-.98,-.78),wa:tt(n,-.08,.08),turnScale:tt(n,3.2,11)}}function B0(n,t){const e=un(n,6029),i=O0(e),s=N0({...i,expansionRate:t.expansionRate,darkEnergyDensity:t.darkEnergyDensity,presentAgeYears:t.presentAgeYears});let r="heat-death",a=1/0;i.model==="phantom"?(r="big-rip",a=Math.max(t.presentAgeYears*1.05,s.asymptoticYears)):i.model==="recollapsing"&&(r="big-crunch",a=s.crunchYears);const o=e()<.16,l=o?tt(e,10.55,92):1/0,c=10**Math.min(l,300),h=o&&c<a,f=h?"vacuum-decay":r,p=h?c:a,m=I0[i.model],_=U0[f];return{...i,modelLabel:m.label,modelDescription:m.description,expansionHistory:s.history,turnaroundYears:s.turnaroundYears||null,metastableVacuum:o,vacuumDecayExponent:l,type:f,label:_.label,shortLabel:_.shortLabel,description:_.description,outcomeYears:p,outcomeExponent:Number.isFinite(p)?Math.log10(p):1/0,onsetAt:f==="big-crunch"?790:f==="big-rip"?820:f==="vacuum-decay"?875:930}}function z0(n){return Number.isFinite(n.outcomeYears)?n.outcomeYears<1e12?`T+${(n.outcomeYears/1e8).toFixed(0)} 亿年`:`T+10^${n.outcomeExponent.toFixed(1)} 年`:"渐近 · 无有限终点"}function k0(n){return n.metastableVacuum?`亚稳态 · 假设寿命 10^${n.vacuumDecayExponent.toFixed(1)} 年`:"未设定可见衰变"}const H0=2100,Jr=(n,t,e)=>Math.max(t,Math.min(e,n)),Al=(n,t,e)=>{const i=Jr((n-t)/(e-t),0,1);return i*i*(3-2*i)};function mh(n,t){const e=t?.presentAgeYears||138e8,i=Math.log10(Math.max(e,n)),s=Math.log10(e),r=t?.cosmicFate;if(r&&Number.isFinite(r.outcomeYears)){if(n>=r.outcomeYears)return 1e3;const o=(i-s)/(r.outcomeExponent-s);return Jr(470+o*530,470,1e3)}if(i<12)return 470+(i-s)/(12-s)*100;if(i<14)return 570+(i-12)/2*80;if(i<15)return 650+(i-14)*30;if(i<38)return 680+(i-15)/23*165;const a=t?.blackHoleEvaporationExponent||100;return i<a?845+(i-38)/(a-38)*105:950}function G0(n,t,e){const i=Jr(Number(n),0,1e3),s=gh(i,t),r=e.findIndex(o=>i<o.until),a=r<0?e.length-1:r;return{position:i,label:s,eraIndex:a,era:e[a],galaxyIdentityOpacity:Al(i,245,325)*(1-Al(i,820,900))}}function V0(n){const e=1139.904761904762/H0;return n<145||n>=930?e*.42:e*1.25}function W0({position:n,label:t,universe:e,activeEvent:i,activeRelationship:s,ascendedSpecies:r,activeSpecies:a,civilizationData:o}){if(i){const c=n>=i.impactAt,h=c?`；${i.outcome}`:"";return{key:`${i.id}-${c?"aftermath":"forming"}`,time:t,text:`${i.label}：${i.message}${h}`}}const l=e?.cosmicFate;if(l&&l.type!=="heat-death"&&n>=l.onsetAt){if(l.type==="vacuum-decay"){const h=n>=985;return{key:`fate-vacuum-${h?"terminal":"bubble"}`,time:t,text:h?"低能真空泡已经穿过可观测区域，原有粒子与相互作用不再适用":"量子隧穿产生了低能真空泡，泡壁以接近光速向外扩张"}}if(l.type==="big-rip"){const h=n>=985;return{key:`fate-rip-${h?"terminal":"unbinding"}`,time:t,text:h?"膨胀率在有限时间内发散，局部束缚结构相继失效":"幽灵暗能量密度持续上升，星系团与星系开始逐层解束缚"}}const c=n>=985;return{key:`fate-crunch-${c?"terminal":"turnaround"}`,time:t,text:c?"坍缩使物质与辐射密度急剧升高，经典演化在高曲率阶段失效":"宇宙膨胀已经停止，大尺度距离开始反向缩小"}}if(s){const c=o[s.speciesA],h=o[s.speciesB],f=s.relationship==="conflict"?`${c.name} 与 ${h.name} 的边界冲突正在削减双方疆域`:`${c.name} 与 ${h.name} 建立友好共存区，共享资源与航路`;return{key:`relation-${s.relationship}-${s.speciesA}-${s.speciesB}`,time:t,text:f}}return r>0?{key:`ascended-${r}`,time:t,text:`${r} 个种群已转化为高维生命，脱离恒星与黑洞的普通物质演化`}:n<55?{key:"bang",time:"T+0",text:"整个可观测区域处于超高温、高密度状态，空间本身在膨胀"}:n<145?{key:"plasma",time:t,text:"光子在等离子体中不断散射，宇宙随膨胀持续冷却"}:n<245?{key:"dark",time:t,text:"复合后宇宙变得透明，但尚没有恒星光"}:n<340?{key:"stars",time:t,text:"第一代恒星与星系点亮，再电离逐渐开始"}:a>0?{key:`life-${a}`,time:t,text:`${a} 个主要文明种群正在跨越恒星系扩张`}:n<430?{key:"chemistry",time:t,text:"重元素丰度上升，宜居行星开始形成"}:n<Math.min(...o.map(c=>c.birth),620)?{key:"waiting-life",time:t,text:"宜居世界正在积累复杂化学反应，智慧生命尚未出现"}:n<620?{key:"silence",time:t,text:"文明信号已经沉寂，只剩无人维护的轨道遗迹"}:n<650?{key:"last-stars",time:t,text:"恒星形成早已停止，最后的低质量红矮星仍在极缓慢地消耗燃料"}:n<710?{key:"degenerate",time:t,text:"最后一批红矮星熄灭，恒星残骸仍被星系引力束缚并长期绕核运行"}:n<845?{key:"evaporation",time:t,text:"长期引力近遇持续重分配能量，少数残骸逐个逃离，极少数落向星系中心"}:n<950?{key:"holes",time:t,text:"黑洞通过霍金辐射缓慢蒸发"}:{key:"heatdeath",time:t,text:"最后的黑洞已经蒸发，残余光子持续红移并稀释，可用能量梯度趋近于零"}}function gh(n,t){const e=(h,f,p)=>10**(Math.log10(h)+(Math.log10(f)-Math.log10(h))*p),i=h=>{if(h<1){const f=h*31557600;return f<3600?`${Math.round(f/60)} 分钟`:f<86400?`${(f/3600).toFixed(1)} 小时`:`${(f/86400).toFixed(1)} 天`}return h<1e4?`${Math.max(1,Math.round(h))} 年`:h<1e8?`${(h/1e4).toFixed(h<1e6?1:0)} 万年`:h<1e12?`${(h/1e8).toFixed(h<1e9?2:1)} 亿年`:`10^${Math.log10(h).toFixed(1)} 年`};if(n<18)return`T+${Math.max(.001,e(.001,1,n/18)).toFixed(3)} 秒`;if(n<55)return`T+${Math.max(1,Math.round(e(1,180,(n-18)/37)))} 秒`;const s=t?.cosmicMilestones||{},r=s.recombinationYears||38e4,a=Math.max(r*1.1,s.firstStarsYears||18e7),o=Math.max(a*1.1,s.matureGalaxiesYears||1e9),l=Math.max(o*1.1,t?.presentAgeYears||138e8);if(n<145)return`T+${i(e(180/31557600,r,(n-55)/90))}`;if(n<245)return`T+${i(e(r,a,(n-145)/100))}`;if(n<340)return`T+${i(e(a,o,(n-245)/95))}`;if(n<470)return`T+${i(e(o,l,(n-340)/130))}`;const c=t?.cosmicFate;if(c&&Number.isFinite(c.outcomeYears)){if(n>=1e3)return c.label;const h=Jr((n-470)/530,0,1),f=e(l,c.outcomeYears,h);return`T+${i(f)}`}return n<570?`T+${i(e(l,1e12,(n-470)/100))}`:n<650?`T+10^${(12+(n-570)/80*2).toFixed(1)} 年`:n<680?`T+10^${(14+(n-650)/30).toFixed(1)} 年`:n<845?`T+10^${Math.round(15+(n-680)/165*23)} 年`:n<950?`T+10^${Math.round(38+(n-845)/105*(t.blackHoleEvaporationExponent-38))} 年`:n<999?`T+10^${t.blackHoleEvaporationExponent} 年以后`:"趋近热寂"}const X0=138e8,q0=2.725,Ur=.315;function $0(n,t){const e=Math.max(.06,1-t),i=Math.max(1e-6,t),s=2/(3*Math.sqrt(i))*Math.asinh(Math.sqrt(i/e)),r=2/(3*Math.sqrt(1-Ur))*Math.asinh(Math.sqrt((1-Ur)/Ur));return X0*s/r/n}function Y0({speed:n,fineStructure:t,massRatio:e,expansionRate:i,darkEnergyDensity:s,primordialFluctuation:r,cmbTemperature:a,structureEfficiency:o}){const l=Math.max(.06,1-s),c=t**2*n**2/e,h=ot.clamp(38e4*Math.pow(a/q0/c,1.5)/i*Math.sqrt(Ur/l),4e4,4e6),f=ot.clamp(18e7/Math.pow(o,.7)/Math.pow(r,.35)/Math.sqrt(i),3e7,9e8),p=ot.clamp(f*5.4,f*1.8,32e8);return{atomicBindingScale:c,recombinationYears:h,firstStarsYears:f,matureGalaxiesYears:p,presentAgeYears:$0(i,s)}}function j0(n){const t=Math.round(n*360);return`${t<190?"青白":t<225?"蓝白":t<250?"靛蓝":"紫白"} · ${t}°`}function K0(n,t){return n===2?"主环 + 碎环":n===3?"无旋臂":n===4?"不规则":`${t} 条`}function Z0(n){const t=n*100;return t<1e-4?"< 0.0001%":t<.01?`${t.toFixed(4)}%`:t<1?`${t.toFixed(2)}%`:`${t.toFixed(1)}%`}function J0(n){return n===0?"尚未出现":`${new Intl.NumberFormat("zh-CN").format(n)} 个`}function _h(n){const t=n.lastStarDeathExponent??n.stellarFormationEndExponent;return ot.clamp(mh(10**t,n),478,1e3)}function Q0(n){return n>=1?`${n.toFixed(1)} 万亿颗`:`${Math.round(n*1e4)} 亿颗`}function xh(n=D0()){const t=Zr(n),e=L0(t),i=un(t),s=tt(i,.38,1.84),r=tt(i,.52,1.76),a=tt(i,.72,1.28),o=tt(i,.82,1.18),l=tt(i,.65,1.45),c=tt(i,.48,.82),h=tt(i,.55,1.75),f=tt(i,1.9,4.4),p=Math.exp(-Math.pow((a-1)/.17,2)-Math.pow((o-1)/.14,2)),m=ot.clamp(r*h/Math.pow(l,.72),.12,2.8),_=Math.max(2,Math.round(118*p*tt(i,.82,1.08))),x=ot.clamp(tt(i,.35,3.2)*m,.08,7.2),u=ot.clamp(12.5-(c-.68)*1.35-(l-1)*.42,11.8,13.25),d=ot.clamp(u+tt(i,.68,1.08),12.8,14.25),b=p*ot.clamp(1-Math.abs(f-2.725)/3.5,.12,1),v=Math.pow(i(),4)*.08*b,g=Math.floor(tt(i,5,16)),T=Math.floor(x*1e5*v*tt(i,.02,.7)),S=Math.max(g,T),A=Math.round(Math.pow(10,d-8)/10)*10,w=Math.floor(tt(i,3,7)),y=e%Do.length,M=[.96,.92,.72,.99,.34][y],C=i()<M,I=C&&i()<[.1,.07,.05,.045,.025][y],N=Math.floor(tt(i,97,103)),L=tt(i,.48,.76),U=Y0({speed:s,fineStructure:a,massRatio:o,expansionRate:l,darkEnergyDensity:c,primordialFluctuation:h,cmbTemperature:f,structureEfficiency:m}),k=B0(t,{expansionRate:l,darkEnergyDensity:c,presentAgeYears:U.presentAgeYears});return{seed:t,seedValue:e,speed:s,gravity:r,fineStructure:a,massRatio:o,expansionRate:l,darkEnergyDensity:c,primordialFluctuation:h,cmbTemperature:f,chemistryStability:p,structureEfficiency:m,stellarFormationEndExponent:u,lastStarDeathExponent:d,elements:_,stars:x,lifeProbability:v,civilizations:S,estimatedCivilizations:T,speciesCount:g,trackedSpeciesCount:g,lifetime:A,blackHoleEvaporationExponent:N,armCount:w,galaxyType:y,hasCentralBlackHole:C,activeNucleus:I,hue:L,cosmicMilestones:U,presentAgeYears:U.presentAgeYears,cosmicFate:k}}let Ts=null;function Ji(){const n=document.createElement("canvas");n.width=n.height=256;const t=n.getContext("2d"),e=t.createRadialGradient(128,128,82,128,128,128);e.addColorStop(0,"rgba(255,255,255,0)"),e.addColorStop(.72,"rgba(255,255,255,0)"),e.addColorStop(.86,"rgba(255,255,255,.8)"),e.addColorStop(.91,"rgba(255,255,255,.18)"),e.addColorStop(1,"rgba(255,255,255,0)"),t.fillStyle=e,t.fillRect(0,0,256,256);const i=new $r(n);return i.colorSpace=Fe,i}function Ge(){const n=document.createElement("canvas");n.width=n.height=128;const t=n.getContext("2d"),e=t.createRadialGradient(64,64,0,64,64,64);e.addColorStop(0,"rgba(255,255,255,1)"),e.addColorStop(.08,"rgba(255,230,170,.85)"),e.addColorStop(.35,"rgba(255,190,100,.22)"),e.addColorStop(1,"rgba(0,0,0,0)"),t.fillStyle=e,t.fillRect(0,0,128,128);const i=new $r(n);return i.colorSpace=Fe,i}function Ce(){if(Ts)return Ts;const n=document.createElement("canvas");n.width=n.height=64;const t=n.getContext("2d"),e=t.createRadialGradient(32,32,0,32,32,32);return e.addColorStop(0,"rgba(255,255,255,1)"),e.addColorStop(.22,"rgba(255,255,255,.95)"),e.addColorStop(.5,"rgba(255,255,255,.35)"),e.addColorStop(1,"rgba(255,255,255,0)"),t.fillStyle=e,t.fillRect(0,0,64,64),Ts=new $r(n),Ts.colorSpace=Fe,Ts}let br=null,Tr=null,Ar=null;function sc(n){const t=document.createElement("canvas");t.width=1024,t.height=1024;const e=t.getContext("2d");n(e,t.width);const i=new $r(t);return i.colorSpace=Fe,i.minFilter=ti,i.magFilter=vn,i}function _n(n,t,e,i,s,r,a=0,o=Math.PI*2){n.beginPath(),n.ellipse(t,e,i,s,r,a,o)}function wl(){return br||(br=sc((n,t)=>{const e=t/2,i=n.createLinearGradient(96,e,t-96,e);i.addColorStop(0,"rgba(255,255,255,0)"),i.addColorStop(.12,"rgba(255,221,174,.18)"),i.addColorStop(.35,"rgba(255,245,222,.76)"),i.addColorStop(.5,"rgba(255,255,255,1)"),i.addColorStop(.66,"rgba(255,232,199,.82)"),i.addColorStop(.88,"rgba(255,179,126,.2)"),i.addColorStop(1,"rgba(255,255,255,0)"),n.save(),n.globalCompositeOperation="lighter",n.filter="blur(34px)",n.strokeStyle=i,n.lineCap="round",n.lineWidth=62,_n(n,e,e+7,360,74,-.1),n.stroke(),n.filter="blur(15px)",n.lineWidth=22,_n(n,e,e+4,325,62,-.1),n.stroke(),n.restore(),n.save(),n.globalCompositeOperation="lighter",n.lineCap="round",n.strokeStyle=i,n.filter="blur(13px)",n.lineWidth=34,_n(n,e-2,e+3,118,164,-.08,Math.PI*1.03,Math.PI*1.98),n.stroke(),n.lineWidth=25,_n(n,e+2,e+4,121,161,-.08,.03,Math.PI*.97),n.stroke(),n.filter="none",n.lineWidth=7,n.strokeStyle="rgba(255,250,232,.92)",_n(n,e-2,e+3,116,160,-.08,Math.PI*1.05,Math.PI*1.95),n.stroke(),n.strokeStyle="rgba(255,221,180,.72)",_n(n,e+2,e+4,119,158,-.08,.07,Math.PI*.93),n.stroke(),n.restore(),n.save(),n.globalCompositeOperation="lighter",n.lineCap="round";for(let a=0;a<12;a++){const o=164+a*16,l=28+a*3.25,c=.2-a*.011;n.strokeStyle=`rgba(255,238,210,${c})`,n.lineWidth=a<4?3.5:2,_n(n,e,e+6,o,l,-.1),n.stroke()}n.restore();const s=n.createRadialGradient(e-18,e-20,6,e,e,105);s.addColorStop(0,"rgba(0,0,0,1)"),s.addColorStop(.78,"rgba(0,0,0,1)"),s.addColorStop(.94,"rgba(1,1,2,.995)"),s.addColorStop(1,"rgba(0,0,0,0)"),n.fillStyle=s,n.fillRect(e-112,e-112,224,224),n.save(),n.globalCompositeOperation="lighter",n.filter="blur(12px)",n.strokeStyle="rgba(255,244,220,.86)",n.lineWidth=24,_n(n,e,e,103,106,-.08),n.stroke(),n.filter="none",n.strokeStyle="rgba(255,255,247,.98)",n.lineWidth=6,_n(n,e,e,102,105,-.08),n.stroke();const r=n.createLinearGradient(130,e+58,t-120,e-32);r.addColorStop(0,"rgba(255,184,126,0)"),r.addColorStop(.2,"rgba(255,207,158,.55)"),r.addColorStop(.43,"rgba(255,251,231,.98)"),r.addColorStop(.66,"rgba(255,244,219,.94)"),r.addColorStop(.9,"rgba(255,166,112,.34)"),r.addColorStop(1,"rgba(255,166,112,0)"),n.strokeStyle=r,n.lineCap="round",n.filter="blur(11px)",n.lineWidth=28,n.beginPath(),n.moveTo(132,e+103),n.bezierCurveTo(318,e+83,638,e-54,908,e-90),n.stroke(),n.filter="none",n.lineWidth=9,n.stroke(),n.restore()}),br)}function t_(){return Tr||(Tr=sc((n,t)=>{const e=t/2;n.globalCompositeOperation="lighter",n.lineCap="round";for(let i=0;i<18;i++){const s=i/18*Math.PI*2,r=108+i%3*17,a=.11+i%4*.035;n.strokeStyle=`rgba(255,255,245,${.24+i%5*.07})`,n.lineWidth=2+i%3,_n(n,e,e,r,r*.9,-.08,s,s+a),n.stroke()}n.filter="blur(9px)",n.strokeStyle="rgba(255,238,209,.42)",n.lineWidth=10,_n(n,e,e,118,111,-.08,.14,Math.PI*.72),n.stroke()}),Tr)}function e_(){return Ar||(Ar=sc((n,t)=>{const e=t/2,i=n.createRadialGradient(e,e,44,e,e,430);i.addColorStop(0,"rgba(255,250,232,.7)"),i.addColorStop(.18,"rgba(255,226,190,.38)"),i.addColorStop(.42,"rgba(255,180,119,.1)"),i.addColorStop(.72,"rgba(255,139,84,.025)"),i.addColorStop(1,"rgba(255,255,255,0)"),n.fillStyle=i,n.fillRect(0,0,t,t)}),Ar)}function Fr({color:n=16762255,tilt:t=0,phase:e=0,visualScale:i=1,intensity:s=1}={}){const r=new We,a=new le(new oe({map:e_(),color:n,transparent:!0,opacity:0,depthWrite:!1,blending:Ft}));a.scale.setScalar(2.65*i);const o=new le(new oe({map:wl(),color:n,transparent:!0,opacity:0,alphaTest:.006,depthWrite:!1,blending:bi,rotation:t}));o.scale.setScalar(2.2*i);const l=new le(new oe({map:t_(),color:n,transparent:!0,opacity:0,depthWrite:!1,blending:Ft,rotation:t}));l.scale.setScalar(2.2*i);const c=new le(new oe({map:wl(),color:n,transparent:!0,opacity:0,alphaTest:.006,depthWrite:!1,blending:Ft,rotation:t}));c.scale.setScalar(2.2*i);const h=new hn(new jr(.235*i,32,20),new Ws({color:0,transparent:!0,opacity:0}));return h.renderOrder=2,a.renderOrder=1,o.renderOrder=3,c.renderOrder=4,l.renderOrder=5,r.add(a,h,o,c,l),r.userData.blackHoleVisual={halo:a,horizon:h,accretion:o,bloom:c,flow:l,intensity:0,visibility:1,baseTilt:t,phase:e,visualScale:i},Zn(r,s),r}function Zn(n,t,e=1){const i=n.userData.blackHoleVisual;if(!i)return;const s=ot.clamp(t,0,1.4),r=ot.clamp(e,0,1);i.intensity=s,i.visibility=r,i.horizon.material.opacity=ot.smoothstep(s,0,.24)*r,i.horizon.visible=s*r>.001,i.accretion.material.opacity=Math.min(1,s*.92)*r,i.bloom.material.opacity=Math.min(.34,s*.27)*r,i.flow.material.opacity=Math.min(.82,s*.5)*r,i.halo.material.opacity=Math.min(.7,s*.42)*r}function Qi(n,t,e=1){const i=n.userData.blackHoleVisual;if(!i||i.intensity<=0)return;const s=t*.001,r=1+Math.sin(s*.72+i.phase)*.035,a=.82+Math.sin(s*1.7+i.phase*1.9)*.18;i.halo.scale.setScalar(2.65*i.visualScale*r),i.halo.material.opacity=Math.min(.7,i.intensity*(.36+a*.09))*i.visibility,i.bloom.material.opacity=Math.min(.36,i.intensity*(.22+a*.07))*i.visibility,i.flow.material.rotation=i.baseTilt+e*Math.sin(s*.44+i.phase)*.055,i.flow.material.opacity=Math.min(.82,i.intensity*(.38+a*.15))*i.visibility}const Na=220,Oa=340;function Mh(n){if(n<=Na)return 0;const t=Oa-Na;if(n<Oa){const e=(n-Na)/t;return t*(e**3-.5*e**4)}return t*.5+n-Oa}function vh(n,t){return Mh(n)*t}function n_(n,{civilizationSimulation:t,civilizationData:e,civilizationGroups:i}){if(!n||!t)return;const s=new Uint16Array(e.length);n.owners.forEach((r,a)=>{if(r<0)return;const o=s[r]++;e[r].hostRemnantIndices[o]=t.habitatRemnantIndices[a]}),e.forEach((r,a)=>{r.displayCount=s[a],i[a].geometry.setDrawRange(0,s[a])})}function i_({clickableStars:n,stellarRemnants:t,remnantDynamics:e,cosmicPosition:i,civilizationData:s,civilizationGroups:r}){if(!t)return;const a=t.geometry.attributes.position.array,o=n?.geometry.attributes.position.array,l=o||a,c=p=>o?e.sourceIndices[p]*3:p*3,h=new B,f=(p,m,_,x,u)=>{const d=p*3,b=Math.min(i,e.escapeAt[p]),v=vh(b,e.orbitRates[p]),g=Math.cos(v),T=Math.sin(v),S=e.axes[d],A=e.axes[d+1],w=e.axes[d+2],y=S*m+A*_+w*x;u.set(m*g+(A*x-w*_)*T+S*y*(1-g),_*g+(w*m-S*x)*T+A*y*(1-g),x*g+(S*_-A*m)*T+w*y*(1-g))};s.forEach((p,m)=>{const _=r[m];if(!_)return;const x=_.geometry.attributes.position.array;for(let d=0;d<p.displayCount;d++){const b=p.hostRemnantIndices[d],v=c(b),g=d*3;if(f(b,p.hostOffsets[g],p.hostOffsets[g+1],p.hostOffsets[g+2],h),x[g]=l[v]+h.x,x[g+1]=l[v+1]+h.y,x[g+2]=l[v+2]+h.z,p.highDimensional&&i>=p.ascensionAt){const T=ot.smoothstep(i,p.ascensionAt,p.ascensionAt+34),S=d*1.618+i*.035;x[g]+=Math.sin(S)*T*.7,x[g+1]+=Math.cos(S*.73)*T*.42,x[g+2]+=Math.sin(S*.51+2.1)*T*.7}}_.geometry.attributes.position.needsUpdate=!0;const u=c(p.homeRemnantIndex);if(f(p.homeRemnantIndex,p.homeOffset.x,p.homeOffset.y,p.homeOffset.z,h),p.home.set(l[u]+h.x,l[u+1]+h.y,l[u+2]+h.z),p.highDimensional&&i>=p.ascensionAt){const d=ot.smoothstep(i,p.ascensionAt,p.ascensionAt+34),b=m*2.17+i*.035;p.home.x+=Math.sin(b)*d*.7,p.home.y+=Math.cos(b*.73)*d*.42,p.home.z+=Math.sin(b*.51+2.1)*d*.7}})}const yh=Math.PI*2,s_=24;function r_(n,t,e){return Math.min(e,Math.max(t,n))}function ws(n,t,e){if(e<=t)return n>=e?1:0;const i=r_((n-t)/(e-t),0,1);return i*i*(3-2*i)}function Sh(n,t){const e=t.persistUntil??t.start+t.duration,i=t.persistenceFadeDuration??s_;return 1-ws(n,e,e+i)}function Ei(n,t){let e=n+1^t;return e=Math.imul(e^e>>>16,569420461),e=Math.imul(e^e>>>15,1935289751),((e^e>>>15)>>>0)/4294967296}function a_(n,t,e,i,s,r,a,o,l){const c=Math.cos(l),h=Math.sin(l),f=r*e+a*i+o*s;n[t]=e*c+(a*s-o*i)*h+r*f*(1-c),n[t+1]=i*c+(o*e-r*s)*h+a*f*(1-c),n[t+2]=s*c+(r*i-a*e)*h+o*f*(1-c)}function o_(n,t){const e=n.length/3,i=new Float32Array(n.length),s=new Float32Array(e),r=t.galaxyType<=2,a=t.hasCentralBlackHole?1.35:.16,o=t.seedValue^1831565813,l=1;for(let c=0;c<e;c++){const h=c*3,f=n[h],p=n[h+1],m=n[h+2],_=Math.max(.24,Math.hypot(f,p,m));if(r){let b=(Ei(c,o+29)-.5)*.035;const v=1;let g=(Ei(c,o+47)-.5)*.035;const T=Math.hypot(b,v,g);b/=T,g/=T,i.set([b,v/T,g],h)}else{const b=Ei(c,o+71)*yh,v=.08+Ei(c,o+97)*.54,g=Math.sin(v);i.set([Math.cos(b)*g,Math.cos(v),Math.sin(b)*g],h)}const x=a/Math.pow(_+.12,3),u=.72/Math.pow(_+1.8,2),d=.055*Math.sqrt(t.gravity*(x+u));s[c]=l*Math.min(.095,d)}return{axes:i,orbitRates:s,centralMass:a}}function c_(n,t,e,i){const s=Mh(n);for(let r=0;r<i.orbitRates.length;r++){const a=r*3;a_(e,a,t[a],t[a+1],t[a+2],i.axes[a],i.axes[a+1],i.axes[a+2],s*i.orbitRates[r])}}function l_(n,t,{seedValue:e,eventIndex:i,influenceRadius:s=4.8,maxStars:r=2600}){const a=[];for(let u=0;u<n.length/3;u++){const d=u*3,b=Math.hypot(n[d]-t.x,n[d+1]-t.y,n[d+2]-t.z);b<=s&&a.push({index:u,distance:b})}a.sort((u,d)=>u.distance-d.distance);const o=Math.min(r,a.length),l=new Uint16Array(o),c=new Float32Array(o),h=a.length/Math.max(1,o),f=e^Math.imul(i+1,73244475);for(let u=0;u<o;u++){const d=Ei(u,f)*Math.min(1,h),b=u===0?0:Math.min(a.length-1,Math.floor(u*h+d));l[u]=a[b].index,c[u]=a[b].distance}const p=Ei(i,f+131)*yh,m=(Ei(i,f+173)-.5)*.5,_=Math.cos(m),x=new Float32Array([Math.cos(p)*Math.sin(m),_,Math.sin(p)*Math.sin(m)]);return{indices:l,restDistances:c,axis:x,influenceRadius:s,softening:.24,captureRadius:.42}}function h_(n,t,e,i,s){const r=i.gravityField;if(!r||n<i.start)return;const o=Math.min(n,i.persistUntil)-i.start,l=ws(n,i.start,i.start+4.5),c=ws(n,i.impactAt-1.2,i.impactAt+2.4),h=Sh(n,i),f=1-i.radiatedMassFraction*c,p=r.axis[0],m=r.axis[1],_=r.axis[2];for(let x=0;x<r.indices.length;x++){const d=r.indices[x]*3,b=t[d]-s.x,v=t[d+1]-s.y,g=t[d+2]-s.z,T=Math.max(.025,Math.hypot(b,v,g)),S=r.restDistances[x],A=1-ws(S,r.influenceRadius*.34,r.influenceRadius);if(A<=0)continue;const w=Math.sqrt(T*T+r.softening*r.softening),y=.105*Math.sqrt(f/Math.pow(w,3)),M=1+(1-c)*.22*Math.sin(o*.72+S*2.3),C=o*y*M*l*A,I=Math.cos(C),N=Math.sin(C),L=p*b+m*v+_*g;let U=b*I+(m*g-_*v)*N+p*L*(1-I),k=v*I+(_*b-p*g)*N+m*L*(1-I),F=g*I+(p*v-m*b)*N+_*L*(1-I);const O=Math.min(.14,.055/(S+.24)),Z=1+Math.sin(C*.63+S*3.1)*O*l*A;if(U*=Z,k*=Z,F*=Z,S<r.captureRadius){const $=S/r.captureRadius*11,it=ws(n,i.impactAt+$,i.impactAt+$+13),mt=1-it*.965;U*=mt,k*=mt,F*=mt;const Ct=1-it;e[d]*=Ct,e[d+1]*=Ct,e[d+2]*=Ct}t[d]=s.x+b+(U-b)*h,t[d+1]=s.y+v+(k-v)*h,t[d+2]=s.z+g+(F-g)*h}}const Io=Math.PI*2,kt=(n,t,e)=>Math.min(e,Math.max(t,n)),Eh=(n,t,e)=>{if(e<=t)return n>=e?1:0;const i=kt((n-t)/(e-t),0,1);return i*i*(3-2*i)},Se=(n,t,e)=>10**tt(n,t,e);function u_({massA:n,massB:t,alignedSpinA:e,alignedSpinB:i,inPlaneSpinA:s=0,inPlaneSpinB:r=0}){const a=Math.max(n,t),l=Math.min(n,t)/a,c=l/(1+l)**2,h=12e3*c**2*Math.sqrt(Math.max(0,1-4*c))*(1-.93*c),f=6900*c**2/(1+l)*(i-l*e),p=6e4*c**2/(1+l)*(r-l*s),m=145*Math.PI/180,_=h**2+f**2+2*h*f*Math.cos(m);return Math.sqrt(Math.max(0,_)+p**2)}function Ba(n,t,e,i){return t<=1?[e]:Array.from({length:t},(s,r)=>{const a=e+(i-e)*r/(t-1),o=r===0?0:tt(n,-.025,.025);return kt(a+o,e,i)})}function d_(n,t,e){const i=un(t.seed,12011+e*977),s=Math.sqrt(t.gravity);if(n.type==="pair-instability-supernova"){const r=tt(i,140,255),a=tt(i,64,Math.min(133,r*.54)),o=kt(4+Math.pow((a-64)/69,1.7)*72,4,76),l=kt(.04+Math.pow((a-64)/69,2.2)*38,.04,38),c=o*1e51/1788e51;return{model:"pair-instability",progenitorMass:r,heliumCoreMass:a,explosionEnergyBethe:o,nickelMass:l,radiatedMass:c,ejectaMass:r-c,ejectaVelocityKms:tt(i,7e3,14500)*Math.pow(o/20,.18),noRemnant:!0,rangeScale:kt(.82+Math.sqrt(o/20)*.3,.9,1.62),civilizationScale:kt(.76+Math.sqrt(o/20)*.24,.86,1.48),kickScale:kt(.8+o/120,.84,1.42)}}if(n.type==="type-ia-supernova"){const r=i()<.46?"double-degenerate":"single-degenerate",a=r==="double-degenerate"?tt(i,1.22,1.58):tt(i,1.34,1.41),o=tt(i,.38,.86),l=tt(i,.85,1.55)*(1+(o-.6)*.25);return{model:"thermonuclear-supernova",channel:r,whiteDwarfMass:a,nickelMass:o,explosionEnergyBethe:l,ejectaMass:a,ejectaVelocityKms:tt(i,9e3,14500)*Math.sqrt(l),noRemnant:!0,rangeScale:kt(.84+l*.14,.92,1.16),civilizationScale:kt(.78+o*.28,.86,1.12),kickScale:kt(.84+l*.1,.9,1.08)}}if(n.type==="core-collapse-supernova"){const r=tt(i,8.2,31),a=kt((r-8)/23+tt(i,-.16,.16),0,1),o=a>.7?"black-hole":"neutron-star",l=o==="black-hole"?tt(i,4.8,Math.min(13.5,r*.55)):tt(i,1.18,2.18),c=tt(i,.45,2.15)*(1-a*.28),h=tt(i,.4,Math.min(2.1,r-l-.8));return{model:"core-collapse",progenitorMass:r,explosionEnergyBethe:c,ejectaMass:r-l-h,ejectaVelocityKms:tt(i,4500,11500)*Math.sqrt(c),nickelMass:tt(i,.025,.13)*c,neutrinoEnergyErg:Se(i,52.9,53.5),neutrinoMassLoss:h,remnantType:o,remnantMass:l,natalKickKms:o==="neutron-star"?tt(i,80,720):tt(i,15,180),persistentRemnant:!0,gravityStrength:kt(l/8,.2,1.35),gravityRadius:tt(i,.42,.72),rangeScale:kt(.78+Math.sqrt(c)*.2,.86,1.22),civilizationScale:kt(.72+c*.17,.8,1.16),kickScale:kt(.76+c*.18,.82,1.18)}}if(n.type==="superluminous-supernova"){const r=i()<.64?"magnetar":"circumstellar-interaction",a=tt(i,22,78),o=tt(i,3,18),l=r==="magnetar"&&a<48?"magnetar":"black-hole",c=l==="magnetar"?tt(i,1.55,2.35):tt(i,5.5,18),h=o*1e51/1788e51;return{model:"superluminous-supernova",engine:r,progenitorMass:a,explosionEnergyBethe:o,radiatedMass:h,ejectaMass:a-c-h,ejectaVelocityKms:tt(i,8e3,18500)*Math.pow(o/8,.18),peakLuminosityErgS:Se(i,43.7,45),magnetarPeriodMs:r==="magnetar"?tt(i,1.1,4.8):null,magneticFieldGauss:r==="magnetar"?Se(i,13.8,15.2):null,remnantType:l,remnantMass:c,persistentRemnant:!0,gravityStrength:kt(c/10,.24,1.45),gravityRadius:tt(i,.48,.78),rangeScale:kt(.94+Math.sqrt(o/8)*.34,1.05,1.52),civilizationScale:kt(.88+Math.log10(o)*.24,.96,1.38),kickScale:kt(.86+o/42,.92,1.32)}}if(n.type==="young-pulsar-birth"){const r=tt(i,1.18,2.12),a=Se(i,1.05,2.22),o=Se(i,11.8,13.55),l=39e30*Math.pow(o/1e12,2)*Math.pow(1e3/a,4);return{model:"young-pulsar",neutronStarMass:r,spinPeriodMs:a,magneticFieldGauss:o,spinDownLuminosityErgS:l,natalKickKms:tt(i,90,820),beamOpeningDeg:tt(i,5,18),persistentRemnant:!0,gravityStrength:kt(r/3.6,.28,.62),gravityRadius:tt(i,.34,.54),rangeScale:kt(.76+Math.log10(l/1e36+1)*.16,.78,1.22),civilizationScale:kt(.72+Math.log10(l/1e36+1)*.18,.75,1.18),kickScale:0}}if(n.type==="gamma-ray-burst"){const r=tt(i,22,72),a=Se(i,51.4,54.1),o=tt(i,3.2,11.5),l=o*Math.PI/180;return{model:"collapsar-jet",progenitorMass:r,isotropicEnergyErg:a,trueJetEnergyErg:a*(1-Math.cos(l)),jetOpeningDeg:o,lorentzFactor:tt(i,90,620),durationSeconds:Se(i,.35,2.15),remnantMass:tt(i,3.4,15),remnantType:"black-hole",rangeScale:kt(.78+(Math.log10(a)-51)*.17,.86,1.48),civilizationScale:kt(.72+(Math.log10(a)-51)*.2,.82,1.5),kickScale:0}}if(n.type==="quasar-awakening"){const r=Se(i,6.5,9.2)*kt(t.massRatio,.7,1.6),a=Se(i,-1.15,.24),o=tt(i,.07,.22);return{model:"quasar-duty-cycle",blackHoleMass:r,eddingtonRatio:a,radiativeEfficiency:o,accretionRateSolarPerYear:2.2*r/1e8*a*(.1/o),jetLorentzFactor:tt(i,3,18),jetOpeningDeg:tt(i,4,15),activeDurationMyr:Se(i,-.2,1.7),pulsePhases:[.32,.58,.76],pulseWeights:[1,.72,.46],recoveryDuration:tt(i,18,32),recoveryFraction:tt(i,.22,.38),temporaryOnly:!0,rangeScale:kt(.8+Math.sqrt(a)*.34,.84,1.38),civilizationScale:kt(.72+Math.sqrt(a)*.3,.78,1.34),kickScale:0}}if(n.type==="magnetar-flare"){const r=Se(i,14.2,15.35),a=Se(i,44.2,46.4),o=2+Math.floor(i()*4);return{model:"magnetar-giant-flare",magneticFieldGauss:r,energyErg:a,spikeDurationSeconds:Se(i,-2.7,-.55),tailPeriodSeconds:tt(i,2.2,11.8),pulsePhases:Ba(i,o,.34,.76),pulseWeights:Array.from({length:o},(l,c)=>Math.pow(.68,c)),recoveryDuration:tt(i,12,28),recoveryFraction:tt(i,.36,.62),temporaryOnly:!0,rangeScale:kt(.76+(Math.log10(a)-44)*.18,.8,1.34),civilizationScale:kt(.68+(Math.log10(a)-44)*.22,.72,1.42),kickScale:0}}if(n.type==="pulsar-glitch"){const r=Se(i,1.3,3),a=Se(i,-9.2,-5.1);return{model:"pulsar-glitch",spinPeriodMs:r,fractionalFrequencyJump:a,recoveryFraction:tt(i,.08,.82),recoveryDays:Se(i,.4,2.9),pulsePhases:[.46,.56],pulseWeights:[1,.24],temporaryOnly:!0,rangeScale:1,civilizationScale:1,kickScale:0}}if(n.type==="stellar-black-hole-merger"||n.type==="late-black-hole-merger"){const r=n.type==="late-black-hole-merger",a=r?Se(i,2.7,5.4):tt(i,18,86),o=r?Se(i,2.5,Math.log10(a)):tt(i,7,Math.min(70,a)),l=a+o,c=a*o/(l*l),h=tt(i,0,.94),f=tt(i,0,.94),p=tt(i,-1,1),m=tt(i,-1,1),_=h*p,x=f*m,u=i()*Io,d=i()*Io,b=h*Math.sqrt(1-p**2)*Math.cos(u),v=f*Math.sqrt(1-m**2)*Math.cos(d),g=(a*_+o*x)/l,T=kt(.035+c*.11+Math.max(0,g)*.018,.028,.09),S=kt(u_({massA:a,massB:o,alignedSpinA:_,alignedSpinB:x,inPlaneSpinA:b,inPlaneSpinB:v}),0,5e3);return{model:"black-hole-binary",massA:a,massB:o,chirpMass:Math.pow(a*o,3/5)/Math.pow(l,1/5),spinA:_,spinB:x,spinMagnitudeA:h,spinMagnitudeB:f,spinTiltCosineA:p,spinTiltCosineB:m,effectiveSpin:g,radiatedMassFraction:T,remnantMass:l*(1-T),recoilKms:S,gasRich:!r&&i()<.38,persistentRemnant:!1,rangeScale:1,civilizationScale:1,kickScale:0}}if(n.type==="neutron-star-kilonova"){const r=tt(i,1.18,1.92),a=tt(i,1.12,Math.min(1.82,r)),o=r+a,l=Math.pow(r*a,3/5)/Math.pow(o,1/5),c=1-a/r,h=tt(i,.035,.075)*s,f=kt(tt(i,.018,.072)*(1+c*2.4),.012,.13),p=kt(tt(i,.12,.27)*s,.09,.34),m=2.72+(t.massRatio-1)*.28,_=o-h>m?"black-hole":"massive-neutron-star";return{model:"compact-merger",massA:r,massB:a,chirpMass:l,ejectaMass:f,ejectaVelocityC:p,radiatedMassFraction:h/o,jetOpeningDeg:tt(i,5,16),remnantMass:o-h-f,remnantType:_,persistentRemnant:!0,gravityStrength:kt((o-2.2)/1.5,.32,1.25),gravityRadius:tt(i,.62,.9),rangeScale:kt(.82+f*5+p,.82,1.42),civilizationScale:kt(.72+p*1.7,.78,1.3),kickScale:kt(.7+p*1.5,.8,1.25)}}if(n.type==="tidal-disruption-event"){const r=tt(i,.35,3.2),a=Math.pow(r,r<1?.82:.57),o=8e7*Math.pow(a,1.5)/Math.sqrt(r),l=Math.min(Se(i,5.8,8.05)*t.gravity,o),c=tt(i,.72,2.15),h=a*Math.cbrt(l/r),f=41*Math.sqrt(l/1e6)*Math.pow(r,-.5)*Math.pow(a,1.5)/Math.pow(c,3),p=tt(i,.43,.57),m=kt(tt(i,.6,3.8)*c,.5,6.5);return{model:"tidal-disruption",blackHoleMass:l,hillsMass:o,starMass:r,starRadius:a,penetration:c,tidalRadiusSolar:h,fallbackDays:f,boundFraction:p,peakEddingtonRatio:m,fallbackExponent:-5/3,unboundVelocityKms:tt(i,5500,16e3)*Math.sqrt(c),pulsePhases:[.58,.74],pulseWeights:[1,.42],recoveryDuration:tt(i,18,32),recoveryFraction:.28,rangeScale:kt(.76+Math.log10(m+1)*.42,.78,1.25),civilizationScale:kt(.62+Math.log10(m+1)*.5,.68,1.18),kickScale:kt(.72+c*.15,.82,1.08)}}if(n.type==="failed-supernova"){const r=tt(i,18,42),a=tt(i,.025,.16)/s,o=tt(i,.16,.46),l=r*(1-a)-o;return{model:"failed-collapse",progenitorMass:r,ejectedEnvelopeFraction:a,neutrinoMassLoss:o,remnantMass:l,dustOpticalDepth:tt(i,1.2,5.4),fallbackFraction:kt(1-a-o/r,.72,.97),persistentRemnant:!0,remnantType:"black-hole",gravityStrength:kt(l/24,.45,1.5),gravityRadius:tt(i,.58,.88),rangeScale:kt(.76+a*2.1,.78,1.08),civilizationScale:kt(.6+a*2.4,.65,1.02),kickScale:kt(.45+a*2.8,.5,.88)}}if(n.type==="red-dwarf-superflare"){const r=Se(i,34.4,36.25),a=2+Math.floor(i()*4),o=Math.log10(r)-34;return{model:"magnetic-flare-storm",energyErg:r,stormCount:a,pulsePhases:Ba(i,a,.38,.78),pulseWeights:Array.from({length:a},(l,c)=>Math.pow(.76,c)),cmeVelocityKms:tt(i,900,4200)*s,ultravioletFraction:tt(i,.12,.34),atmosphereLossFraction:kt(tt(i,.006,.045)*o,.004,.14),recoveryDuration:tt(i,16,34),recoveryFraction:tt(i,.48,.72),temporaryOnly:!0,rangeScale:kt(.72+o*.13,.78,1.22),civilizationScale:kt(.55+o*.22,.62,1.3),kickScale:0}}if(n.type==="classical-nova"){const r=tt(i,.72,1.34),a=Se(i,-10.1,-8.15),o=22e-6*Math.pow(1.05/r,3.2),l=o/a,c=kt(Math.round(4.4-Math.log10(l)*.58),2,4);return{model:"recurrent-nova",whiteDwarfMass:r,accretionRate:a,ignitionMass:o,recurrenceYears:l,ejectaMass:o*tt(i,.62,1.08),ejectaVelocityKms:tt(i,850,3900)*Math.sqrt(r),outburstCount:c,pulsePhases:Ba(i,c,.14,.78),pulseWeights:Array.from({length:c},(h,f)=>Math.pow(.7,f)),recoveryDuration:tt(i,7,15),recoveryFraction:.74,temporaryOnly:!0,rangeScale:kt(.72+r*.18,.78,1.02),civilizationScale:kt(.58+r*.2,.68,.92),kickScale:0}}return null}function Rl(n,t,e=null){if(!t)return n;const i=Math.sqrt(e?.speed||1),s=.82+i*.18;return{...n,radius:n.radius*(t.rangeScale||1)*s,maxStars:Math.max(1,Math.round(n.maxStars*(t.rangeScale||1))),kick:n.kick*(t.kickScale??1),civilization:n.civilization*(t.civilizationScale||1),range:n.range*(t.rangeScale||1)*i,beamAngle:t.jetOpeningDeg||t.beamOpeningDeg?(t.jetOpeningDeg||t.beamOpeningDeg)*Math.PI/180:n.beamAngle}}function f_(n){const t=n.simulation;if(!t)return null;if(t.model==="compact-merger"){const e=t.remnantType==="black-hole"?"黑洞":"大质量中子星";return`两颗 ${t.massA.toFixed(2)} 与 ${t.massB.toFixed(2)} M☉ 中子星并合，抛出 ${t.ejectaMass.toFixed(3)} M☉、约 ${(t.ejectaVelocityC*100).toFixed(0)}% 光速的物质，留下 ${t.remnantMass.toFixed(2)} M☉ ${e}`}if(t.model==="tidal-disruption")return`${t.starMass.toFixed(1)} M☉ 恒星以穿透因子 β=${t.penetration.toFixed(2)} 掠过约 ${(t.blackHoleMass/1e6).toFixed(1)}×10⁶ M☉ 黑洞，束缚碎片在约 ${Math.round(t.fallbackDays)} 天后开始回落`;if(t.model==="failed-collapse")return`${t.progenitorMass.toFixed(1)} M☉ 恒星仅抛出约 ${(t.ejectedEnvelopeFraction*100).toFixed(1)}% 外层，回落物质形成约 ${t.remnantMass.toFixed(1)} M☉ 黑洞`;if(t.model==="magnetic-flare-storm")return`${t.stormCount} 次耀斑组成约 10^${Math.log10(t.energyErg).toFixed(1)} erg 的爆发风暴，CME 速度约 ${Math.round(t.cmeVelocityKms)} km/s，近轨行星大气随后逐步恢复`;if(t.model==="recurrent-nova")return`${t.whiteDwarfMass.toFixed(2)} M☉ 白矮星以 ${t.accretionRate.toExponential(1)} M☉/年吸积，模型复发周期约 ${Math.round(t.recurrenceYears).toLocaleString("zh-CN")} 年，本段显示 ${t.outburstCount} 次爆发`;if(t.model==="pair-instability")return`${t.progenitorMass.toFixed(0)} M☉ 巨星的 ${t.heliumCoreMass.toFixed(0)} M☉ 氦核触发成对不稳定，释放约 ${t.explosionEnergyBethe.toFixed(1)} Bethe，并完全解体、不留致密残骸`;if(t.model==="thermonuclear-supernova")return`${t.channel==="double-degenerate"?"双白矮星并合":"伴星吸积"}使 ${t.whiteDwarfMass.toFixed(2)} M☉ 白矮星热核失控，合成约 ${t.nickelMass.toFixed(2)} M☉ 镍-56，并完全解体`;if(t.model==="core-collapse"){const e=t.remnantType==="black-hole"?"黑洞":"中子星";return`${t.progenitorMass.toFixed(1)} M☉ 恒星以约 ${t.explosionEnergyBethe.toFixed(2)} Bethe 爆发，抛出 ${t.ejectaMass.toFixed(1)} M☉ 物质，留下 ${t.remnantMass.toFixed(2)} M☉ ${e}`}if(t.model==="superluminous-supernova"){const e=t.engine==="magnetar"?`${t.magnetarPeriodMs.toFixed(1)} ms 初始周期磁星`:"致密星周物质相互作用";return`${t.progenitorMass.toFixed(0)} M☉ 前身星由${e}持续供能，峰值光度约 10^${Math.log10(t.peakLuminosityErgS).toFixed(1)} erg/s，留下 ${t.remnantMass.toFixed(1)} M☉ ${t.remnantType==="black-hole"?"黑洞":"磁星"}`}return t.model==="young-pulsar"?`${t.neutronStarMass.toFixed(2)} M☉ 中子星以 ${t.spinPeriodMs.toFixed(1)} ms 周期自转，表面磁场约 10^${Math.log10(t.magneticFieldGauss).toFixed(1)} G，并以约 ${Math.round(t.natalKickKms)} km/s 获得诞生踢速`:t.model==="collapsar-jet"?`${t.progenitorMass.toFixed(0)} M☉ 巨星坍缩为约 ${t.remnantMass.toFixed(1)} M☉ 黑洞，产生张角 ${t.jetOpeningDeg.toFixed(1)}°、洛伦兹因子约 ${Math.round(t.lorentzFactor)} 的喷流，持续约 ${t.durationSeconds.toFixed(1)} 秒`:t.model==="quasar-duty-cycle"?`约 ${(t.blackHoleMass/1e6).toFixed(1)}×10⁶ M☉ 中央黑洞达到 ${(t.eddingtonRatio*100).toFixed(0)}% 爱丁顿吸积率，每年吸积约 ${t.accretionRateSolarPerYear.toFixed(2)} M☉，活动期约 ${t.activeDurationMyr.toFixed(1)} 百万年`:t.model==="magnetar-giant-flare"?`约 10^${Math.log10(t.magneticFieldGauss).toFixed(1)} G 磁场重排，释放约 10^${Math.log10(t.energyErg).toFixed(1)} erg；初始硬脉冲持续 ${t.spikeDurationSeconds.toFixed(3)} 秒并伴随衰减尾波`:t.model==="pulsar-glitch"?`${t.spinPeriodMs.toFixed(1)} ms 脉冲星的自转频率跃增约 ${t.fractionalFrequencyJump.toExponential(1)}，其中 ${(t.recoveryFraction*100).toFixed(0)}% 在约 ${Math.round(t.recoveryDays)} 天内恢复`:t.model==="black-hole-binary"?`${t.massA.toFixed(1)} 与 ${t.massB.toFixed(1)} M☉ 黑洞并合，约 ${(t.radiatedMassFraction*100).toFixed(1)}% 总质量转化为引力波，形成 ${t.remnantMass.toFixed(1)} M☉ 黑洞并以约 ${Math.round(t.recoilKms)} km/s 反冲${t.gasRich?"，周围气体产生短暂余辉":""}`:null}function bh(n,t){if(!t.simulation?.persistentRemnant||n<t.impactAt)return 0;const e=t.persistUntil??845,i=t.persistenceFadeDuration??24;return 1-Eh(n,e,e+i)}function Cl(n,t){let e=n+1^t;return e=Math.imul(e^e>>>16,569420461),e=Math.imul(e^e>>>15,1935289751),((e^e>>>15)>>>0)/4294967296}function p_(n,t,e,i,s){if(!e?.gravityStrength||!e.persistentRemnant)return null;const r=e.gravityRadius||.7,a=[];for(let x=0;x<n.length/3;x++){const u=x*3,d=Math.hypot(n[u]-t.x,n[u+1]-t.y,n[u+2]-t.z);d<=r&&a.push({index:x,distance:d})}a.sort((x,u)=>x.distance-u.distance);const o=Math.min(180,a.length),l=new Uint16Array(o),c=new Float32Array(o),h=a.length/Math.max(1,o);for(let x=0;x<o;x++){const u=a[Math.min(a.length-1,Math.floor(x*h))];l[x]=u.index,c[x]=u.distance}const f=i^Math.imul(s+1,668265261),p=Cl(s,f)*Io,m=(Cl(s+11,f+37)-.5)*.56,_=Math.cos(m);return{indices:l,restDistances:c,influenceRadius:r,strength:e.gravityStrength,axis:new Float32Array([Math.cos(p)*Math.sin(m),_,Math.sin(p)*Math.sin(m)])}}function m_(n,t,e,i){const s=e.transientGravityField;if(!s||n<e.impactAt)return;const r=bh(n,e);if(r<=0)return;const a=Math.min(n,e.persistUntil??845)-e.impactAt,o=s.axis[0],l=s.axis[1],c=s.axis[2];for(let h=0;h<s.indices.length;h++){const f=s.indices[h];if(f===e.sourceIndex)continue;const p=f*3,m=t[p]-i.x,_=t[p+1]-i.y,x=t[p+2]-i.z,u=Math.max(.08,s.restDistances[h]),d=1-Eh(u,s.influenceRadius*.35,s.influenceRadius);if(d<=0)continue;const b=a*.018*Math.sqrt(s.strength/Math.pow(u+.18,3))*d,v=Math.cos(b),g=Math.sin(b),T=o*m+l*_+c*x,S=m*v+(l*x-c*_)*g+o*T*(1-v),A=_*v+(c*m-o*x)*g+l*T*(1-v),w=x*v+(o*_-l*m)*g+c*T*(1-v);t[p]=i.x+m+(S-m)*r,t[p+1]=i.y+_+(A-_)*r,t[p+2]=i.z+x+(w-x)*r}}function g_(n,t){const{mode:e,epochEffectsGroup:i,primordialParticles:s,primordialFactors:r,primordialDirections:a,expansionStreaks:o,expansionDirections:l,bangCore:c,shockwaves:h,renderer:f,scene:p,clickableStars:m,originalGalaxyPositions:_,stellarGravityState:x,universe:u,transition:d,galaxyGroup:b,starDeathThresholds:v,originalGalaxyColors:g,cosmicEvents:T,remnantGroup:S,stellarRemnants:A,originalRemnantPositions:w,remnantDynamics:y,blackHoleRemnants:M,heatDeathGroup:C,coldPhotons:I,originalPhotonPositions:N,originalPhotonColors:L,cosmicFateGroup:U,fateBubble:k,fateGlow:F}=t,O=u.cosmicFate,Z=O&&O.type!=="heat-death",$=Z?ot.smoothstep(n,O.onsetAt,1e3):0,it=n<150&&e==="explorer";if(i.visible=it,it&&s){const J=ot.smoothstep(n,0,145),lt=ot.smoothstep(n,0,55),ct=ot.smoothstep(n,55,145),Bt=Math.sqrt(u.speed),st=(.06+Math.pow(lt,.62)*32+ct*7)*Bt,gt=s.geometry.attributes.position.array;for(let E=0;E<r.length;E++){const H=st*r[E];gt[E*3]=a[E*3]*H,gt[E*3+1]=a[E*3+1]*H,gt[E*3+2]=a[E*3+2]*H}s.geometry.attributes.position.needsUpdate=!0,s.material.opacity=.98*(1-ot.smoothstep(n,112,150)),s.material.size=.3-J*.17;const Wt=o.geometry.attributes.position.array;for(let E=0;E<l.length/4;E++){const H=l[E*4+3],K=(.04+Math.pow(lt,.5)*31+ct*5)*H*Bt,nt=Math.max(0,K-(1.2+J*5.5)*H);for(let X=0;X<3;X++){const _t=l[E*4+X];Wt[E*6+X]=_t*nt,Wt[E*6+3+X]=_t*K}}o.geometry.attributes.position.needsUpdate=!0,o.material.opacity=.68*ot.smoothstep(n,1.5,8)*(1-ot.smoothstep(n,48,82));const jt=1-ot.smoothstep(n,7,34),P=.7+Math.pow(lt,.46)*18;c.material.opacity=jt,c.scale.set(P,P,1),h.forEach((E,H)=>{const K=3+H*6,nt=52+H*7,X=ot.clamp((n-K)/nt,0,1),_t=.9+Math.pow(X,.72)*(39+H*5);E.scale.set(_t,_t,1),E.material.opacity=Math.sin(X*Math.PI)*(.24-H*.045)})}const mt=new Ht(328968),Ct=mt.clone();if(n<70){const J=ot.smoothstep(n,0,70);Ct.lerpColors(new Ht(2756872),mt,J),f.toneMappingExposure=1.15+(1-J)*2.2}else if(Z&&$>0){const J={"big-rip":new Ht(463652),"big-crunch":new Ht(2492422),"vacuum-decay":new Ht(1444389)};Ct.lerpColors(mt,J[O.type],$*.72),f.toneMappingExposure=O.type==="big-crunch"?1.15+$*1.45:1.15-$*.38}else if(n>950){const J=ot.smoothstep(n,950,1e3);Ct.lerpColors(mt,new Ht(197898),J*.32),f.toneMappingExposure=1.15}else f.toneMappingExposure=1.15;if(f.setClearColor(Ct,1),p.fog.color.copy(Ct),!m||!_)return;const et=_h(u),Q=ot.smoothstep(n,220,340),q=1-ot.smoothstep(n,et-75,et+10);m.material.opacity=Q*.9,m.material.size=.09,d||b.scale.setScalar(1);const V=m.geometry.attributes.position.array,at=m.geometry.attributes.color.array;x&&c_(n,_,V,x);for(let J=0;J<_.length;J+=3){const lt=J/3,ct=1-ot.smoothstep(n,v[lt],v[lt]+22);x||(V[J]=_[J],V[J+1]=_[J+1],V[J+2]=_[J+2]),at[J]=g[J]*ct,at[J+1]=g[J+1]*ct,at[J+2]=g[J+2]*ct}if(T.forEach(J=>{const lt=J.sourceIndex*3,ct={x:V[lt],y:V[lt+1],z:V[lt+2]};J.group.position.set(ct.x,ct.y,ct.z),J.visual==="black-hole-merger"&&h_(n,V,at,J,ct),J.transientGravityField&&m_(n,V,J,ct)}),T.forEach(J=>{if(n<J.impactAt)return;const lt=ot.smoothstep(n,J.impactAt,J.impactAt+24);if(J.starImpacts.forEach(X=>{const _t=X.index*3;V[_t]+=X.kick[0]*lt,V[_t+1]+=X.kick[1]*lt,V[_t+2]+=X.kick[2]*lt,at[_t]*=X.dimFactor,at[_t+1]*=X.dimFactor,at[_t+2]*=X.dimFactor}),!J.waveSamples)return;const ct=J.duration*(1-J.impactPhase),Bt=ot.clamp((n-J.impactAt)/ct,0,1);if(Bt<=0||Bt>=1)return;const{waveRadius:st,waveAmplitude:gt=1,indices:Wt,distances:jt,transverse:P,polarities:E}=J.waveSamples,H=.18+Math.pow(Bt,.72)*st,K=.18+Bt*.34,nt=.13*gt*(1-Bt*.58);for(let X=0;X<Wt.length;X++){const _t=jt[X]-H;if(Math.abs(_t)>K*2.8)continue;const ut=Math.cos(_t/K*Math.PI)*Math.exp(-Math.pow(_t/K,2)*1.7),At=ut*nt*E[X],wt=Wt[X]*3,ht=X*3;V[wt]+=P[ht]*At,V[wt+1]+=P[ht+1]*At,V[wt+2]+=P[ht+2]*At;const Mt=1+Math.abs(ut)*.18;at[wt]*=Mt,at[wt+1]*=Mt,at[wt+2]*=Mt}}),Z&&$>0){const J=k?.position.x||0,lt=k?.position.y||0,ct=k?.position.z||0,Bt=.18+Math.pow($,.58)*36;for(let st=0;st<_.length;st+=3)if(O.type==="big-rip"){const gt=Math.hypot(_[st],_[st+1],_[st+2]),Wt=1+Math.pow($,1.7)*(2.8+gt*.16);V[st]*=Wt,V[st+1]*=Wt,V[st+2]*=Wt;const jt=Math.pow(1-$,.72);at[st]*=jt,at[st+1]*=jt,at[st+2]*=jt}else if(O.type==="big-crunch"){const gt=Math.max(.012,1-Math.pow($,1.35)*.988);V[st]*=gt,V[st+1]*=gt,V[st+2]*=gt,at[st]*=1+$*1.4,at[st+1]*=1-$*.5,at[st+2]*=1-$*.72}else{const gt=Math.hypot(V[st]-J,V[st+1]-lt,V[st+2]-ct),Wt=ot.smoothstep(Bt-1.2,Bt+.4,gt);at[st]*=Wt,at[st+1]*=Wt,at[st+2]*=Wt}}T.forEach(J=>{const lt=J.sourceIndex*3;J.group.position.set(V[lt],V[lt+1],V[lt+2])}),m.geometry.attributes.position.needsUpdate=!0,m.geometry.attributes.color.needsUpdate=!0;const vt=b.children.find(J=>J.userData.isCoreGlow);if(vt){const{scale:J,opacity:lt}=vt.userData.profile;vt.material.opacity=Q*q*lt*(1-$),vt.scale.set(J,J,1)}const yt=b.children.find(J=>J.userData.isAgnGlow),bt=b.children.find(J=>J.userData.isAgnJet);if(yt){const J=Q*(1-ot.smoothstep(n,500,650));yt.material.opacity=J*.82,yt.scale.set(.72,.72,1),bt.material.opacity=J*.18}const Yt=!Z||O.outcomeExponent>38,D=Yt&&n>et-80&&n<930,Zt=Yt&&n>825&&n<960;if(S.visible=(D||Zt)&&e==="explorer",D&&A){const J=ot.smoothstep(n,et-80,et+15),lt=1-ot.smoothstep(n,845,930);A.material.opacity=J*lt*.64*(1-$);const ct=A.geometry.attributes.position.array,Bt=(st,gt)=>{const Wt=st*3,jt=w[Wt],P=w[Wt+1],E=w[Wt+2],H=y.axes[Wt],K=y.axes[Wt+1],nt=y.axes[Wt+2],X=vh(gt,y.orbitRates[st]),_t=Math.cos(X),ut=Math.sin(X),At=H*jt+K*P+nt*E;ct[Wt]=jt*_t+(K*E-nt*P)*ut+H*At*(1-_t),ct[Wt+1]=P*_t+(nt*jt-H*E)*ut+K*At*(1-_t),ct[Wt+2]=E*_t+(H*P-K*jt)*ut+nt*At*(1-_t)};for(let st=0;st<w.length/3;st++){const gt=st*3,Wt=y.fates[st],jt=y.escapeAt[st];if(n<jt||Wt===1){Bt(st,n);continue}if(Wt===2){const xt=ot.smoothstep(n,jt,Math.min(900,jt+42));Bt(st,n+xt*150);const Rt=1-xt*.985;ct[gt]*=Rt,ct[gt+1]*=Rt,ct[gt+2]*=Rt;continue}Bt(st,jt);const P=ct[gt],E=ct[gt+1],H=ct[gt+2],K=Math.max(.001,Math.hypot(P,E,H)),nt=y.axes[gt],X=y.axes[gt+1],_t=y.axes[gt+2],ut=Math.sign(y.orbitRates[st])||1;let At=(X*H-_t*E)*ut,wt=(_t*P-nt*H)*ut,ht=(nt*E-X*P)*ut;const Mt=Math.max(.001,Math.hypot(At,wt,ht));At/=Mt,wt/=Mt,ht/=Mt;let zt=At*.9+P/K*.34,Lt=wt*.9+E/K*.34+X*Math.sin(st*12.9898)*.08,St=ht*.9+H/K*.34;const $t=Math.max(.001,Math.hypot(zt,Lt,St));zt/=$t,Lt/=$t,St/=$t;const z=ot.clamp((n-jt)/Math.max(1,900-jt),0,1),dt=Wt===3?Math.pow(z,.72)*(18+y.speeds[st]*7):Math.pow(z,1.35)*(6+y.speeds[st]*11);ct[gt]=P+zt*dt,ct[gt+1]=E+Lt*dt,ct[gt+2]=H+St*dt}A.geometry.attributes.position.needsUpdate=!0}if(M.forEach(J=>{const lt=J.userData,ct=ot.smoothstep(n,lt.birthAt,lt.birthAt+7),Bt=1-ot.smoothstep(n,lt.evaporationAt-24,lt.evaporationAt),st=ot.smoothstep(n,lt.evaporationAt-15,lt.evaporationAt),gt=7.5,Wt=Math.abs(n-lt.evaporationAt),jt=Wt<gt?Math.sin((1-Wt/gt)*Math.PI/2):0;J.visible=Yt&&e==="explorer"&&n>=lt.birthAt&&n<=lt.evaporationAt+gt;const P=lt.baseScale*(.18+.82*Math.cbrt(Math.max(0,Bt)));J.scale.setScalar(Math.max(.035,P));const E=ct*(.78+st*.22)*Math.sqrt(Math.max(0,Bt));Zn(J,E),lt.hawkingGlow.material.opacity=ct*(.07+st*.62)*Math.sqrt(Math.max(0,Bt)),lt.finalPulse.material.opacity=jt*.84;const H=(.22+jt*2.1)/Math.max(.035,P);lt.finalPulse.scale.set(H,H,1)}),C.visible=!Z&&n>910&&e==="explorer",I&&N&&L){const J=ot.smoothstep(n,910,940),lt=ot.smoothstep(n,938,1e3);I.material.opacity=J*Math.pow(1-lt,1.7)*.34;const ct=I.geometry.attributes.position.array,Bt=I.geometry.attributes.color.array,st=1+lt*1.8;for(let gt=0;gt<N.length;gt+=3)ct[gt]=N[gt]*st,ct[gt+1]=N[gt+1]*st,ct[gt+2]=N[gt+2]*st,Bt[gt]=L[gt]*(1-lt*.55)+lt*.06,Bt[gt+1]=L[gt+1]*(1-lt*.88),Bt[gt+2]=L[gt+2]*(1-lt*.96);I.geometry.attributes.position.needsUpdate=!0,I.geometry.attributes.color.needsUpdate=!0}if(U.visible=Z&&$>0&&e==="explorer",U.visible&&k&&F)if(O.type==="vacuum-decay"){const J=.18+Math.pow($,.58)*36;k.visible=!0,k.scale.setScalar(J),k.material.opacity=Math.sin(Math.min(.98,$)*Math.PI)*.18+.035,F.position.copy(k.position),F.material.opacity=(1-$)*.42,F.scale.setScalar(1.2+$*5.5)}else{k.visible=!1,F.position.set(0,0,0),F.material.opacity=O.type==="big-crunch"?Math.pow($,2.4)*.92:Math.sin($*Math.PI)*.28;const J=O.type==="big-crunch"?.4+(1-$)*8:3+$*28;F.scale.setScalar(J)}}function __(n,t){const{mode:e,cosmicEvents:i,cosmicEventGroup:s}=t;let r=null,a=!1;return i.forEach(o=>{const l=(n-o.start)/o.duration,c=l>=0&&l<=1,h=o.visual==="black-hole-merger"?Sh(n,o):0,f=bh(n,o),p=Math.max(h,f),m=n>=o.impactAt&&p>0,_=(c||m)&&e==="explorer";if(o.group.visible=_,!_)return;a=!0,c&&(r=o);const x=Math.min(1,l);o.group.userData.phase=x;const u=o.group.userData.effect;if(!c&&f>0){o.visual==="kilonova"?(u.innerFlash.material.opacity=0,u.photosphere.material.opacity=0,u.ejecta.material.opacity=0,u.shell.material.opacity=0,u.polarJets&&(u.polarJets.material.opacity=0),u.gravityWave&&(u.gravityWave.material.opacity=0),u.remnant.material.opacity=f*.72):o.visual==="stellar-collapse"?(u.starCore.material.opacity=0,u.shroud.material.opacity=0,u.dust.material.opacity=0,u.remnantHole.visible=!0,Zn(u.remnantHole,.8,f)):o.visual==="supernova"?(u.innerFlash.material.opacity=0,u.photosphere.material.opacity=0,u.ejecta.material.opacity=0,u.shell.material.opacity=0,u.remnant.material.opacity=f*.68):o.visual==="pulsar"&&(u.core.material.opacity=f*.76,u.halo.material.opacity=f*.1,u.nebula.material.opacity=f*.055,u.jets.material.opacity=f*.12,u.sweepGlow.material.opacity=0,u.fieldLines.forEach((d,b)=>{d.material.opacity=f*(.038-b*.005)}),o.group.userData.intensity=f*.56);return}if(o.visual==="supernova"||o.visual==="nova"||o.visual==="kilonova"){const d=x,b=o.visual==="nova",v=o.visual==="kilonova",g=b?.48:v?1.18:1,T=ot.smoothstep(d,0,.028),S=o.simulation?.pulsePhases?.reduce((F,O,Z)=>{const $=o.simulation.pulseWeights?.[Z]??1,it=Math.abs(d-O);return Math.max(F,Math.exp(-it*it*1500)*$)},0)||0,A=ot.clamp((o.simulation?.nickelMass||.6)/.6,.58,2.2),w=Math.min(1,Math.max(T*(1-ot.smoothstep(d,.045,.19)),S)*(b||v?1:A)),y=(1-ot.smoothstep(d,.12,1))*T;u.innerFlash.material.opacity=w*(b?.72:.98);const M=(.08+Math.pow(Math.min(1,d/.16),.28)*.72)*g;u.innerFlash.scale.set(M,M,1),u.photosphere.material.opacity=w*.58+y*.2;const C=(.16+Math.pow(d,.56)*1.15)*g;u.photosphere.scale.set(C,C*.9,1);const I=b||o.simulation?.persistentRemnant?1:1-ot.smoothstep(d,.82,1);u.remnant.material.opacity=ot.smoothstep(d,.2,.52)*I*.72;const N=u.ejecta.geometry.attributes.position.array;for(let F=0;F<u.ejectaVelocity.length;F++){const O=ot.clamp((d-u.ejectaDelay[F])/(1-u.ejectaDelay[F]),0,1),Z=.05+Math.pow(O,.58)*u.ejectaVelocity[F],$=Math.sin(O*10+F*1.73)*O*.045,it=F*3;N[it]=u.ejectaDirections[it]*Z+$*u.ejectaDirections[it+1],N[it+1]=u.ejectaDirections[it+1]*Z+$*u.ejectaDirections[it+2],N[it+2]=u.ejectaDirections[it+2]*Z+$*u.ejectaDirections[it]}u.ejecta.geometry.attributes.position.needsUpdate=!0,u.ejecta.material.opacity=T*(1-ot.smoothstep(d,.58,1))*.86;const L=u.shell.geometry.attributes.position.array,U=b?.72+(o.simulation?.ejectaVelocityKms||1800)/1e4:v?2.15+(o.simulation?.ejectaVelocityC||.2)*3.1:ot.clamp(1.25+(o.simulation?.ejectaVelocityKms||9e3)/7200,1.8,3.9),k=.12+(1-Math.pow(1-d,2.4))*U;for(let F=0;F<u.shellNoise.length;F++){const O=F*3,Z=1+Math.sin(u.shellNoise[F]+d*4.5)*.055+Math.sin(F*2.1)*.025;L[O]=u.shellDirections[O]*k*Z,L[O+1]=u.shellDirections[O+1]*k*Z,L[O+2]=u.shellDirections[O+2]*k*Z}if(u.shell.geometry.attributes.position.needsUpdate=!0,u.shell.material.opacity=ot.smoothstep(d,.04,.14)*(1-ot.smoothstep(d,.5,1))*.34,u.polarJets&&(u.polarJets.material.opacity=ot.smoothstep(d,.015,.08)*(1-ot.smoothstep(d,.18,.5))*.72),u.gravityWave){const F=ot.clamp((d-o.impactPhase)/Math.max(.001,1-o.impactPhase),0,1),O=.25+Math.pow(F,.72)*7.2;u.gravityWave.scale.set(O,O,1),u.gravityWave.material.opacity=Math.pow(Math.sin(F*Math.PI),.72)*.28*(o.waveSamples?.waveAmplitude||1)}}else if(o.visual==="tidal-disruption"){const d=x,b=ot.smoothstep(d,0,.42),v=ot.smoothstep(d,.3,.62),g=ot.smoothstep(d,.4,.72),T=o.simulation?.pulsePhases?.[0]||.58,S=Math.max(0,(d-T)/Math.max(.001,1-T)),A=ot.smoothstep(d,.4,T)*Math.pow(1+S*6,o.simulation?.fallbackExponent||-5/3);u.starCore.position.set(ot.lerp(2.5,.48,b),Math.sin(b*Math.PI)*.34,ot.lerp(.34,0,b)),u.starCore.material.opacity=(1-v)*.96,u.starCore.scale.set(.28+v*.68,Math.max(.035,.28*(1-v*.88)),1),u.disk.material.opacity=A*.5,u.flare.material.opacity=A*.62;const w=.24+Math.sqrt(A)*2.5;u.flare.scale.set(w,w,1),Zn(u.hole,.62+g*.38);const y=u.debris.geometry.attributes.position.array;for(let M=0;M<u.debrisOffsets.length;M++){const C=M*3,I=u.debrisOffsets[M],N=I<0,L=N?.34+Math.abs(I)*(1.15-g*.72):.42+I*(.65+g*3.4),U=I*1.8+g*(N?6.4:1.25),k=Math.sin(u.debrisNoise[M]+g*5)*.045*(1-g*.45);y[C]=Math.cos(U)*L,y[C+1]=Math.sin(U)*L*.38+k,y[C+2]=Math.sin(U*.5+u.debrisNoise[M])*.075}u.debris.geometry.attributes.position.needsUpdate=!0,u.debris.material.opacity=v*(1-ot.smoothstep(d,.9,1))*.82}else if(o.visual==="stellar-flare"){const d=x,b=o.simulation?.pulsePhases?.reduce((y,M,C)=>{const I=o.simulation.pulseWeights?.[C]??1,N=Math.abs(d-M);return Math.max(y,Math.exp(-N*N*900)*I)},0)||0,v=Math.max(Math.pow(Math.sin(d*Math.PI),.5)*.22,b),g=.72+b*.28;u.starCore.material.opacity=.48+v*.5,u.halo.material.opacity=v*g*.32;const T=.45+v*1.25;u.halo.scale.set(T,T,1),u.shock.material.opacity=v*(1-d)*.46;const S=.25+Math.pow(d,.62)*3.4;u.shock.scale.set(S,S,1),u.loops.forEach((y,M)=>{y.material.opacity=v*(.32-M*.065)});const A=u.particles.geometry.attributes.position.array,w=ot.clamp((o.simulation?.cmeVelocityKms||2200)/2200,.55,2.2);for(let y=0;y<u.particleDirections.length/3;y++){const M=y*3,C=.18+Math.pow(d,.58)*(1.25+y%17*.045)*w;A[M]=u.particleDirections[M]*C,A[M+1]=u.particleDirections[M+1]*C,A[M+2]=u.particleDirections[M+2]*C}u.particles.geometry.attributes.position.needsUpdate=!0,u.particles.material.opacity=v*.64}else if(o.visual==="stellar-collapse"){const d=x,b=ot.smoothstep(d,.32,.68),v=ot.smoothstep(d,.04,.2)*(1-ot.smoothstep(d,.3,.52));u.starCore.material.opacity=(1-b)*(.58+v*.42);const g=Math.max(.025,.34*(1-b*.94)+v*.24);u.starCore.scale.set(g,g,1);const T=ot.clamp((o.simulation?.dustOpticalDepth||2)/8,.16,.68);u.shroud.material.opacity=ot.smoothstep(d,.18,.46)*(1-ot.smoothstep(d,.74,1))*T;const S=.32+d*1.45;u.shroud.scale.set(S,S,1);const A=u.dust.geometry.attributes.position.array,w=ot.clamp((o.simulation?.ejectedEnvelopeFraction||.08)/.08,.45,1.8);for(let y=0;y<u.dustDirections.length/3;y++){const M=y*3,C=.1+ot.smoothstep(d,.16,.82)*(.32+y%19*.018)*w;A[M]=u.dustDirections[M]*C,A[M+1]=u.dustDirections[M+1]*C,A[M+2]=u.dustDirections[M+2]*C}u.dust.geometry.attributes.position.needsUpdate=!0,u.dust.material.opacity=ot.smoothstep(d,.22,.48)*(1-ot.smoothstep(d,.82,1))*.46,u.remnantHole.visible=b>.72,u.remnantHole.visible&&Zn(u.remnantHole,.58+b*.34)}else if(o.visual==="pulsar"){const d=x,b=o.simulation?.pulsePhases?.reduce((A,w,y)=>{const M=o.simulation.pulseWeights?.[y]??1,C=Math.abs(d-w);return Math.max(A,Math.exp(-C*C*1200)*M)},0)||0,v=Math.max(Math.pow(Math.sin(d*Math.PI),.45),b),g=o.type==="pulsar-glitch"?.22:1,T=u.jetPowerScale||1;u.core.material.opacity=Math.min(1,v*(.82+b*.18)),u.halo.material.opacity=Math.min(.58,v*.16*g*Math.sqrt(T)),u.nebula.material.opacity=Math.min(.34,v*.095*g*Math.sqrt(T));const S=1.05+b*.52+(T-1)*.18;u.halo.scale.set(S,S,1),u.jets.material.opacity=v*.18*g,u.fieldLines.forEach((A,w)=>{A.material.opacity=v*(.055-w*.007)*g}),o.group.userData.intensity=v}else if(o.visual==="black-hole-merger"){const d=x,b=.68,v=d>=b;u.holeA.visible=!v,u.holeB.visible=!v,u.remnantHole.visible=v&&p>0;const g=Math.min(1,d/b),T=$=>Math.PI*2*(1.15*$+4.1*Math.pow($,3)),S=$=>.12+2.45*Math.pow(1-$,.72),A=T(g),w=S(g);u.holeA.position.set(Math.cos(A)*w,Math.sin(A)*w,Math.sin(A*.5)*.09),u.holeB.position.set(-Math.cos(A)*w,-Math.sin(A)*w,-Math.sin(A*.5)*.09);const y=($,it)=>{const mt=$.geometry.attributes.position.array;for(let Ct=0;Ct<84;Ct++){const et=Math.max(0,g-(83-Ct)*(.0028+g*9e-4)),Q=T(et),q=S(et);mt[Ct*3]=it*Math.cos(Q)*q,mt[Ct*3+1]=it*Math.sin(Q)*q,mt[Ct*3+2]=it*Math.sin(Q*.5)*.09}$.geometry.attributes.position.needsUpdate=!0,$.material.opacity=v?0:ot.smoothstep(d,.02,.22)*.34};y(u.trailA,1),y(u.trailB,-1);const M=ot.clamp((d-b)/(1-b),0,1),C=Math.exp(-M*7)*Math.sin(M*38);u.remnantHole.scale.set(1.24+C*.07,1.24-C*.045,1.24),Zn(u.holeA,.62+g*.38),Zn(u.holeB,.62+g*.38),Zn(u.remnantHole,.74+Math.exp(-M*4)*.34,p);const I=v?Math.exp(-M*18):0;u.mergerGlow.material.opacity=I*(u.gasRich?.48:.13);const N=.3+M*(u.gasRich?3.6:2.4);u.mergerGlow.scale.set(N,N,1),u.gasEcho.material.opacity=u.gasRich?ot.smoothstep(M,.02,.12)*(1-ot.smoothstep(M,.3,.92))*.34:0;const L=.35+Math.pow(M,.62)*4.2;u.gasEcho.scale.set(L,L,1),u.waveHalos.forEach(($,it)=>{const mt=it*.12,Ct=ot.clamp((M-mt)/(1-mt),0,1);$.visible=v&&Ct>0;const et=.38+Math.pow(Ct,.7)*(8.8+it*.6);$.scale.set(et,et,1),$.material.opacity=Math.pow(Math.sin(Ct*Math.PI),.78)*(.29-it*.045)}),u.wavefronts.forEach(($,it)=>{const mt=it*.075,Ct=ot.clamp((M-mt)/(1-mt),0,1);$.visible=v&&Ct>0,$.scale.setScalar(.28+Math.pow(Ct,.72)*(7.4+it*.34)),$.material.opacity=Math.pow(Math.sin(Ct*Math.PI),.72)*.19*(1-it*.08)});const U=u.waveDust.geometry.attributes.position.array,k=.22+Math.pow(M,.72)*8.6;for(let $=0;$<u.waveDirections.length/3;$++){const it=$*3,mt=u.waveDirections[it],Ct=u.waveDirections[it+1],et=u.waveDirections[it+2],Q=1+(mt*mt-et*et)*.085*Math.sin(M*Math.PI*5);U[it]=mt*k*Q,U[it+1]=Ct*k*Q,U[it+2]=et*k*Q}u.waveDust.geometry.attributes.position.needsUpdate=!0,u.waveDust.material.opacity=v?Math.pow(Math.sin(M*Math.PI),.62)*.5:0;const O=ot.smoothstep(M,.08,1)*ot.clamp((o.simulation?.recoilKms||o.recoilKms||500)/720,.22,2.2);u.remnantHole.position.copy(u.recoilVector).multiplyScalar(O);const Z=u.recoilTrail.geometry.attributes.position.array;Z[0]=0,Z[1]=0,Z[2]=0,Z[3]=u.remnantHole.position.x,Z[4]=u.remnantHole.position.y,Z[5]=u.remnantHole.position.z,u.recoilTrail.geometry.attributes.position.needsUpdate=!0,u.recoilTrail.material.opacity=v?(1-M*.72)*.28*p:0}}),s.visible=a,r}function x_(n,t){const{cosmicEventGroup:e,prefersReducedMotion:i,cosmicEvents:s,camera:r}=t;!e.visible||i||s.forEach(a=>{if(!a.group.visible)return;const o=a.group.userData.phase,l=a.group.userData.effect;if(a.visual==="supernova"||a.visual==="nova"||a.visual==="kilonova")l.innerFlash.material.rotation=n*7e-5,l.photosphere.material.rotation=-n*35e-6,l.ejecta.rotation.y=Math.sin(n*21e-5)*.035;else if(a.visual==="tidal-disruption")l.disk.material.rotation=n*.0014,l.debris.rotation.y=Math.sin(n*17e-5)*.08,Qi(l.hole,n,l.hole.userData.spinDirection);else if(a.visual==="stellar-flare")l.loops.forEach((c,h)=>{c.rotation.z=Math.sin(n*9e-4+h)*.16}),l.particles.rotation.y=n*22e-5;else if(a.visual==="stellar-collapse")l.remnantHole.visible&&Qi(l.remnantHole,n,l.remnantHole.userData.spinDirection);else if(a.visual==="pulsar"){const c=a.simulation?.spinPeriodMs,h=c?ot.clamp(80/c,.45,4.8):a.simulation?.model==="magnetar-giant-flare"?.72:1,f=a.simulation?.model==="pulsar-glitch"&&o>=.46?1+Math.min(.12,a.simulation.fractionalFrequencyJump*15e3):1;l.rotor.rotation.y=n*.0024*h*f;const p=new ai,m=new B,_=new B(0,1,0);l.rotor.getWorldQuaternion(p),a.group.getWorldPosition(m),_.applyQuaternion(p).normalize();const x=r.position.clone().sub(m).normalize(),u=Math.pow(Math.abs(_.dot(x)),14),d=ot.clamp(h,.55,3.2),b=.52+Math.pow(Math.max(0,Math.sin(n*.012*d)),10)*.48,v=a.type==="pulsar-glitch"?.16:1;l.jets.material.opacity=a.group.userData.intensity*(.34+u*.58)*b*v,l.sweepGlow.material.opacity=a.group.userData.intensity*u*b*.78*v;const g=.5+u*1.8;l.sweepGlow.scale.set(g,g,1),l.knots.forEach(T=>{const S=(n*55e-5+T.userData.offset)%1;T.position.set(0,T.userData.side*(.18+S*2.45),0),T.material.opacity=a.group.userData.intensity*Math.sin(S*Math.PI)*(.12+u*.55)*v}),l.fieldLines.forEach((T,S)=>{T.rotation.y+=.006+S*.001})}else a.visual==="black-hole-merger"&&(Qi(l.holeA,n,l.holeA.userData.spinDirection),Qi(l.holeB,n,l.holeB.userData.spinDirection),Qi(l.remnantHole,n,l.remnantHole.userData.spinDirection))})}function M_({universe:n,civilizationData:t,civilizationSimulation:e,cosmicEvents:i}){if(!e||t.length===0)return;const s=e,r=un(n.seed,9241),a=s.habitatRemnantIndices.length,o=t.length,l=6;for(let L=0;L<a;L++){const U=[],k=L*3;for(let F=0;F<a;F++){if(F===L)continue;const O=F*3,Z=Math.hypot(s.habitatPositions[k]-s.habitatPositions[O],s.habitatPositions[k+1]-s.habitatPositions[O+1],s.habitatPositions[k+2]-s.habitatPositions[O+2]);(U.length<l||Z<U[U.length-1].distance)&&(U.push({node:F,distance:Z}),U.sort(($,it)=>$.distance-it.distance),U.length>l&&U.pop())}s.adjacency[L]=Uint16Array.from(U.map(F=>F.node))}const c=new Int16Array(a);c.fill(-1);const h=new Float32Array(a),f=new Uint8Array(o),p=new Float32Array(o*o),m=new Int8Array(o*o),_=new Int16Array(a);_.fill(-1),t.forEach((L,U)=>{_[L.homeNodeIndex]=U});const x=new Uint16Array(o),u=Array(o).fill("自主扩张"),d=new Uint8Array(a),b=n.cosmicFate?.type!=="heat-death",v=b?n.cosmicFate.onsetAt:620,g=b?1e3:710,T=b?n.cosmicFate.label:"恒星能源枯竭",S=i.slice().sort((L,U)=>L.impactAt-U.impactAt),A=new Map(S.map(L=>[L,new Map])),w=S.flatMap(L=>(L.civilizationImpacts=[],(L.civilizationNodeImpacts||[]).map(U=>({event:L,impact:U})))).sort((L,U)=>L.impact.at-U.impact.at||L.impact.nodeIndex-U.impact.nodeIndex),y=(L,U)=>L*o+U;for(let L=0;L<o;L++)for(let U=L+1;U<o;U++){const k=t[L],F=t[U],O=(k.cooperation+F.cooperation)*.28-(k.aggression+F.aggression)*.24+tt(r,-.16,.16);p[y(L,U)]=O,p[y(U,L)]=O}const M=(L,U,k,F)=>{p[y(L,U)]=k,p[y(U,L)]=k,m[y(L,U)]=F,m[y(U,L)]=F},C=L=>{let U=0;for(let k=0;k<a;k++)c[k]===L&&U++;return U},I=(L,U,k)=>{const{nodeIndex:F,severity:O,permanent:Z,destructionRoll:$,kind:it="damage"}=U;Z&&(d[F]=1);const mt=c[F];if(mt<0)return;const Ct=t[mt];if(Ct.highDimensional&&k>=Ct.ascensionAt)return;if(it==="recovery"){d[F]||(h[F]=Math.min(1.35,h[F]+O),u[mt]=`${L.label} 后恢复`);return}const et=A.get(L);let Q=et.get(mt);Q||(Q={initialCount:C(mt),affectedNodes:new Set,lostNodes:new Set,weakenedNodes:new Set,effectiveLoss:0,collapse:!1},et.set(mt,Q)),Q.affectedNodes.add(F);const q=ot.clamp(O*.62/Math.max(.65,Ct.resilience),0,.9);if(Z||$<q)c[F]=-1,h[F]=0,Q.lostNodes.add(F),Q.weakenedNodes.delete(F),Q.effectiveLoss+=1;else{const at=O*.46;h[F]*=Math.max(.18,1-at),Q.lostNodes.has(F)||Q.weakenedNodes.add(F),Q.effectiveLoss+=at}Q.collapse||=C(mt)===0,u[mt]=L.label};let N=0;for(;N<w.length&&w[N].impact.at<s.start;){const{impact:L}=w[N];L.kind!=="recovery"&&L.permanent&&(d[L.nodeIndex]=1),N++}for(let L=s.start;L<=s.end;L+=s.step){for(t.forEach((et,Q)=>{if(!(f[Q]||L<et.birth)){if(f[Q]=1,d[et.homeNodeIndex]){u[Q]="母星在文明诞生前失去宜居条件";return}c[et.homeNodeIndex]=Q,h[et.homeNodeIndex]=.34,u[Q]="母星文明进入星际阶段"}});N<w.length&&w[N].impact.at<=L;){const{event:et,impact:Q}=w[N];I(et,Q,L),N++}const U=new Uint8Array(o),k=new Uint8Array(o);for(let et=0;et<o;et++)for(let Q=et+1;Q<o;Q++){const q=m[y(et,Q)];q>0&&(U[et]++,U[Q]++),q<0&&(k[et]++,k[Q]++)}for(let et=0;et<a;et++){const Q=c[et];if(Q<0)continue;const q=t[Q],V=1+U[Q]*.045-k[Q]*.028;h[et]+=(.032+q.resilience*.018)*V*(1-h[et]),h[et]=ot.clamp(h[et],0,1.35)}const F=new Uint8Array(o*o);for(let et=0;et<a;et++){const Q=c[et];Q<0||s.adjacency[et].forEach(q=>{const V=c[q];V<0||V===Q||(F[y(Q,V)]=1,F[y(V,Q)]=1)})}for(let et=0;et<o;et++)for(let Q=et+1;Q<o;Q++){let q=p[y(et,Q)],V=m[y(et,Q)];if(F[y(et,Q)]){const at=t[et],vt=t[Q];q+=(at.cooperation+vt.cooperation-1)*.026,q-=(at.aggression+vt.aggression-.82)*.023,q+=tt(r,-.012,.012),V===0&&q>.3&&(V=1),V===0&&q<-.26&&(V=-1),V===1&&q<.08&&(V=0),V===-1&&q>-.04&&(V=0)}else q*=.992,V===1&&q<.1&&(V=0),V===-1&&q>-.08&&(V=0);M(et,Q,ot.clamp(q,-.95,.95),V)}const O=Array.from({length:o},()=>[]);for(let et=0;et<a;et++)c[et]>=0&&O[c[et]].push(et);if(t.forEach((et,Q)=>{const q=O[Q];if(!f[Q]||q.length===0||L>=650)return;const V=1+Math.floor(et.expansionRate+U[Q]*.34);for(let at=0;at<V;at++){const vt=[];if(q.forEach(Zt=>{s.adjacency[Zt].forEach(J=>{!d[J]&&c[J]!==Q&&vt.push([Zt,J])})}),vt.length===0)break;const[yt,bt]=vt[Math.floor(r()*vt.length)],Yt=c[bt];if(Yt<0){if(_[bt]>=0&&_[bt]!==Q&&!f[_[bt]])continue;r()<.18+et.expansionRate*.19+U[Q]*.025&&(c[bt]=Q,h[bt]=Math.max(.14,h[yt]*.34),q.push(bt),u[Q]=U[Q]>0?"协作网络推动殖民":"殖民前沿扩张");continue}const D=m[y(Q,Yt)];if(D>0){h[yt]=Math.min(1.35,h[yt]+.018),h[bt]=Math.min(1.35,h[bt]+.012),u[Q]=`与${t[Yt].name}交流`,u[Yt]=`与${et.name}交流`;continue}if(D<0){const Zt=h[yt]*(.72+et.aggression*.76+r()*.35),J=h[bt]*(.84+t[Yt].resilience*.52+r()*.28);Zt>J?(c[bt]=Q,h[bt]=Math.max(.08,Math.min(.48,(Zt-J)*.5)),u[Q]=`与${t[Yt].name}争夺边界`,u[Yt]=`边界被${et.name}突破`):(h[yt]*=.84,h[bt]*=.92,u[Q]=`对${t[Yt].name}的进攻受挫`)}else if(r()<et.aggression*.035){const Zt=p[y(Q,Yt)]-.055;M(Q,Yt,Zt,Zt<-.26?-1:0)}}}),L>=v){const et=ot.smoothstep(L,v,g);for(let Q=0;Q<a;Q++){const q=c[Q];q<0||t[q].highDimensional&&L>=t[q].ascensionAt||(h[Q]-=.004+et*.052,(h[Q]<=.035||L>=g)&&(c[Q]=-1,h[Q]=0,u[q]=T))}}const Z=new Uint16Array(o),$=new Float32Array(o);for(let et=0;et<a;et++){const Q=c[et];Q<0||(Z[Q]++,$[Q]+=h[et])}const it=new Int8Array(o),mt=new Uint8Array(o),Ct=new Uint8Array(o);for(let et=0;et<o;et++)it[et]=Math.sign(Z[et]-x[et]),mt[et]=f[et]&&Z[et]>0?1:0,Ct[et]=t[et].highDimensional&&L>=t[et].ascensionAt?1:0,x[et]=Z[et];s.snapshots.push({time:L,owners:c.slice(),counts:Z,populations:$,trends:it,active:mt,ascended:Ct,relations:m.slice(),relationScores:p.slice(),causes:u.slice()})}S.forEach(L=>{const U=Array.from(A.get(L).entries()).map(([F,O])=>({speciesIndex:F,lossFraction:ot.clamp(O.effectiveLoss/Math.max(1,O.initialCount),0,1),collapse:O.collapse,affectedDomains:O.affectedNodes.size,lostDomains:O.lostNodes.size,weakenedDomains:O.weakenedNodes.size}));L.civilizationImpacts=U;const k=U.length?U.map(F=>{const O=t[F.speciesIndex].name;return F.collapse?`${O} 灭绝`:F.lostDomains>0?F.weakenedDomains>0?`${O} 损失 ${F.lostDomains} 个疆域，另有 ${F.weakenedDomains} 个受损`:`${O} 损失 ${F.lostDomains} 个疆域`:`${O} 的 ${F.weakenedDomains} 个疆域受损`}).join("，"):"未波及当时存在的文明疆域";L.outcome=`${L.systemOutcome}；${k}`})}function v_(n,t){if(!n?.snapshots.length)return null;const e=n,i=ot.clamp(Math.floor((t-e.start)/e.step),0,e.snapshots.length-1);return e.snapshots[i]}function y_(n,t,e,i){let s=1,r=1/0;const a=[],o=e[t];return i.forEach(l=>{if(n<l.impactAt||o?.highDimensional&&l.impactAt>=o.ascensionAt)return;const c=l.civilizationImpacts.find(h=>h.speciesIndex===t);c&&(s*=1-c.lossFraction,c.collapse&&(r=Math.min(r,l.impactAt)),a.push(l.label))}),{capacityFactor:s,collapsedAt:r,lossFraction:1-s,causes:a}}function S_(n,t,e,i){return e.map((s,r)=>{const a=y_(n,r,e,i),o=!!t?.active[r],l=!!t?.ascended[r]&&o,c=[],h=[];return e.forEach((f,p)=>{if(p===r||!t?.active[p])return;const m=t.relations[r*e.length+p];m>0&&c.push(f.name),m<0&&h.push(f.name)}),{alive:o,ascended:l,count:t?.counts[r]||0,trend:t?.trends[r]||0,eventState:a,friendlyNames:c,conflictNames:h}})}function E_(n,t,e){if(!n)return null;let i=null,s=-1;for(let r=0;r<e;r++)for(let a=r+1;a<e;a++){const o=t[r],l=t[a];if(!o?.alive||!l?.alive||o.ascended||l.ascended)continue;const c=n.relations[r*e+a];if(c===0)continue;const f=Math.abs(n.relationScores[r*e+a])+(c<0?2:0);f<=s||(s=f,i={speciesA:r,speciesB:a,relationship:c<0?"conflict":"coexistence"})}return i}function b_(n,t,e){return Math.min(e,Math.max(t,n))}function T_(n,t,e){if(t<=0||e<=0)return 0;const i=Math.exp(-t);let s=1,r=0;for(;s>i&&r<=e;)s*=Math.max(1e-12,n()),r++;return Math.min(e,Math.max(0,r-1))}function A_(n,t,e){const i=b_(.38+t.stars*.16+t.structureEfficiency*.18,.55,2.35);return n.flatMap(s=>{const r=s.maximumOccurrences||1,o=1+T_(e,(s.repeatRate||0)*i,r-1),l=s.repeatSpacing||Math.max(12,s.duration*.72),{repeatRate:c,repeatSpacing:h,maximumOccurrences:f,...p}=s;return Array.from({length:o},(m,_)=>{if(_===0)return{...p,occurrenceIndex:_,occurrenceCount:o};const x=l*_*(.82+e()*.36),u=Math.max(p.start,998-p.duration);return{...p,start:Math.min(u,p.start+x),label:`${p.label}（第 ${_+1} 次）`,occurrenceIndex:_,occurrenceCount:o}})}).sort((s,r)=>s.start-r.start||s.occurrenceIndex-r.occurrenceIndex)}const se=n=>document.querySelector(n);function Th(n){const t=n.cosmicFate;se("#universe-id").textContent=`#${n.seed}`,se("#explore-id").textContent=`#${n.seed}`,se("#speed-value").textContent=`${n.speed.toFixed(2)} × 现实宇宙`,se("#gravity-value").textContent=`${n.gravity.toFixed(2)} × 现实宇宙`,se("#fine-structure-value").textContent=`${n.fineStructure.toFixed(3)} × 现实宇宙`,se("#mass-ratio-value").textContent=`${n.massRatio.toFixed(3)} × 现实宇宙`,se("#expansion-value").textContent=`${n.expansionRate.toFixed(2)} × 现实宇宙`,se("#dark-energy-value").textContent=`${(n.darkEnergyDensity*100).toFixed(1)}%`,se("#fluctuation-value").textContent=`${n.primordialFluctuation.toFixed(2)} × 现实宇宙`,se("#cmb-value").textContent=`${n.cmbTemperature.toFixed(2)} K`,se("#elements-value").textContent=`${n.elements} 种`,se("#stars-value").textContent=Q0(n.stars),se("#life-probability-value").textContent=Z0(n.lifeProbability),se("#civilizations-value").textContent=J0(n.civilizations),se("#civilizations-value").title=`宏观估算值；时间轴固定跟踪 ${n.trackedSpeciesCount} 个主要文明样本，以保证每个种子都有可观察的文明演化`,se("#galaxy-type-value").textContent=Do[n.galaxyType],se("#arm-count-value").textContent=K0(n.galaxyType,n.armCount),se("#black-hole-value").textContent=n.hasCentralBlackHole?"存在":"未形成",se("#nucleus-value").textContent=n.hasCentralBlackHole?n.activeNucleus?"活动 · 吸积中":"宁静":"不适用",se("#stellar-window-value").textContent=t.outcomeExponent<=n.lastStarDeathExponent?"结局前未抵达":`约 10^${n.lastStarDeathExponent.toFixed(1)} 年`,se("#galaxy-hue-value").textContent=j0(n.hue),se("#evaporation-value").textContent=t.outcomeExponent<n.blackHoleEvaporationExponent?"结局前未抵达":`约 10^${n.blackHoleEvaporationExponent} 年`,se("#dark-energy-model-value").textContent=t.modelLabel,se("#dark-energy-model-value").title=t.modelDescription,se("#dark-energy-eos-value").textContent=`w₀ ${t.w0.toFixed(2)} · wₐ ${t.wa.toFixed(2)} · 有界 BA`,se("#vacuum-value").textContent=k0(t),se("#lifetime-value").textContent=`${t.label} · ${z0(t)}`,se("#timeline-stellar-label").textContent=t.outcomeExponent<=n.lastStarDeathExponent?"暗能量分流":"恒星熄灭",se("#timeline-late-label").textContent=t.type==="heat-death"?"黑洞时代":"临界阶段",se("#timeline-final-label").textContent=t.shortLabel,se("#cosmic-timeline").setAttribute("aria-label",`从大爆炸到${t.label}的宇宙时间`),se("#universe-note").textContent=vl[n.seedValue%vl.length],se("#galaxy-name").textContent=`${yl[n.seedValue%yl.length]}星系`;const e=(8+n.stars*4.7).toFixed(1);se("#galaxy-meta").textContent=`${Do[n.galaxyType]} · 直径 ${e} 万光年`}const Ue=n=>document.querySelector(n);let Pl="",Dl=null;const w_=[[0,18],[18,55],[55,145],[145,245],[245,340],[340,470]];function wr(n,t,e){const i=document.createElement("i");i.className=`scale-${e}`,i.style.left=`${t/10}%`,i.dataset.position=t.toFixed(3),n.appendChild(i)}function R_(n){const t=Ue("#timeline-scale");if(!t)return;const e=n?.cosmicFate,i=Math.min(999,Math.max(471,e?.onsetAt||850)),s=e?.type==="heat-death"?[[470,570],[570,650],[650,680],[680,845],[845,950],[950,1e3]]:[[470,i],[i,1e3]],r=[...w_,...s].filter(([a,o])=>o>a);t.replaceChildren(),r.forEach(([a,o],l)=>{const c=o-a,h=Math.max(1,Math.min(4,Math.round(c/48))),f=c/h;l>0&&wr(t,a,"break");for(let p=0;p<h;p++){const m=a+p*f;if((l===0||p>0)&&wr(t,m,"tick scale-tick--major"),!(f<20))for(let _=2;_<=9;_++){const x=m+Math.log10(_)*f;wr(t,x,_===2||_===5?"tick scale-tick--mid":"tick scale-tick--minor")}}}),wr(t,1e3,"tick scale-tick--major")}function C_(){const n=Ue("#timeline-scale");n&&(n.classList.remove("is-entering"),n.offsetWidth,n.classList.add("is-entering"))}function Ah(n){const t=Ue("#timeline-scale");if(!t||t.clientWidth===0)return;const e=n/1e3*t.clientWidth,i=Math.min(58,t.clientWidth*.09);t.querySelectorAll(".scale-tick").forEach(s=>{const a=Number(s.dataset.position)/1e3*t.clientWidth-e,o=Math.max(0,1-Math.abs(a)/i),l=Math.sign(a)*o*i*.34,c=1+o*1.35;s.style.transform=`translateX(calc(-50% + ${l.toFixed(2)}px)) scaleY(${c.toFixed(3)})`})}function P_(){Ue("#timeline-scale")?.querySelectorAll(".scale-tick").forEach(n=>{n.style.transform=""})}function D_(n){Ue("#cosmic-timeline").value=n.position,Ue("#time-progress").style.width=`${n.position/10}%`,Ue("#timeline-value").textContent=n.label,Ue("#era-number").textContent=String(n.eraIndex+1).padStart(2,"0"),Ue("#era-name").textContent=n.era.name,Ue("#cosmic-time").textContent=n.label.replace("T+",""),Ue("#era-description").textContent=n.era.description,Ue(".explorer-title").style.setProperty("--cosmic-opacity",n.galaxyIdentityOpacity.toFixed(3))}function L_({position:n,simulationState:t,runtimeState:e,civilizationData:i}){e.forEach((a,o)=>{const l=i[o],c=document.querySelector(`[data-species="${o}"]`);if(!c)return;c.style.opacity=a.alive?"1":".18",c.classList.toggle("is-impacted",a.alive&&a.eventState.causes.length>0),c.classList.toggle("is-ascended",a.ascended);const h=[];t?.causes[o]&&h.push(t.causes[o]),a.friendlyNames.length&&h.push(`与 ${a.friendlyNames.join("、")} 友好交流`),a.conflictNames.length&&h.push(`与 ${a.conflictNames.join("、")} 冲突`),a.eventState.causes.length&&h.push(`受 ${a.eventState.causes.join("、")} 影响`),c.title=a.ascended?"1% 概率的高维转化：已脱离普通物质宿主":h.join("；"),c.querySelector("b").textContent=a.alive?a.ascended?"超维存续":`${a.count} 域${a.trend>0?" ↑":a.trend<0?" ↓":""}`:n<l.birth?"未诞生":"衰亡"});const s=e.filter(a=>a.alive).length,r=e.reduce((a,o)=>a+(o.alive&&!o.ascended?o.count:0),0);Ue("#civilization-panel").style.setProperty("--cosmic-opacity",s>0?"1":"0"),Ue("#civilization-summary").textContent=s>0?`${s} 种 · ${r} 域`:"尚未出现"}function I_(n,t=!1){if(n.key===Pl&&!t)return;Pl=n.key,Ue("#event-year").textContent=n.time,Ue("#event-text").textContent=n.text;const e=Ue("#event-feed");e.classList.remove("is-visible"),requestAnimationFrame(()=>e.classList.add("is-visible")),clearTimeout(Dl),Dl=setTimeout(()=>e.classList.remove("is-visible"),3200)}let Uo=null;const U_=n=>document.querySelector(n);function F_(){Uo=null}function N_(n,t){if(!n||n===Uo)return;Uo=n;const e=U_("#civilization-legend"),i=t.length,s=new Map([...e.querySelectorAll(".civilization-item")].map(v=>[Number(v.dataset.species),v]));e.replaceChildren();const r=Int16Array.from({length:i},(v,g)=>g),a=v=>{let g=v;for(;r[g]!==g;)g=r[g];for(;r[v]!==v;){const T=r[v];r[v]=g,v=T}return g},o=(v,g)=>{const T=a(v),S=a(g);T!==S&&(r[Math.max(T,S)]=Math.min(T,S))};for(let v=0;v<i;v++)if(!(!n.active[v]||n.ascended[v]))for(let g=v+1;g<i;g++){if(!n.active[g]||n.ascended[g])continue;const T=v*i+g;n.relations[T]>0&&n.relationScores[T]>=.52&&o(v,g)}const l=new Map,c=[],h=[];for(let v=0;v<i;v++){if(!n.active[v]){c.push(v);continue}if(n.ascended[v]){h.push(v);continue}const g=a(v);l.has(g)||l.set(g,[]),l.get(g).push(v)}const f=[...l.values()],p=v=>v.reduce((g,T)=>g+n.counts[T],0),m=(v,g)=>{let T={kind:"neutral",state:0,strength:0};return v.forEach(S=>g.forEach(A=>{const w=S*i+A,y=n.relations[w],M=Math.abs(n.relationScores[w]);y!==0&&M>T.strength&&(T={kind:y<0?"conflict":"friendly",state:y,strength:M})})),T};f.sort((v,g)=>p(g)-p(v));const _=f.length?[f.shift()]:[];for(;f.length;){const v=_[_.length-1];let g=0,T=-1;f.forEach((S,A)=>{const w=m(v,S).strength;w>T&&(T=w,g=A)}),_.push(f.splice(g,1)[0])}const x={conflict:'<svg viewBox="0 0 16 16" aria-hidden="true"><path d="M3 3l10 10M13 3L3 13"/><path d="M2 5l3-3M11 14l3-3"/></svg>',friendly:'<svg viewBox="0 0 16 16" aria-hidden="true"><circle cx="6" cy="8" r="3.5"/><circle cx="10" cy="8" r="3.5"/></svg>',neutral:'<svg viewBox="0 0 16 16" aria-hidden="true"><path d="M2.5 8h3M10.5 8h3"/><circle cx="8" cy="8" r="1.25"/></svg>'},u=v=>v==="conflict"?"冲突":v==="friendly"?"友好":"中立",d=v=>{const g=v.slice().sort((T,S)=>n.counts[S]-n.counts[T])[0];return`#${t[g].color.toString(16).padStart(6,"0")}`},b=_.map((v,g)=>({members:v,number:String(g+1).padStart(2,"0"),accent:d(v)}));if(b.forEach((v,g)=>{const T=document.createElement("section");T.className="faction-block",T.style.setProperty("--faction",v.accent),T.setAttribute("aria-label",`阵营 ${v.number}`);const S=document.createElement("div");S.className="faction-header";const A=document.createElement("span");A.className="faction-identity",A.textContent=v.number,A.setAttribute("aria-hidden","true"),S.appendChild(A);const w=document.createElement("div");w.className="faction-relations";const y={conflict:[],friendly:[],neutral:[]};b.forEach((C,I)=>{if(I===g)return;const N=m(v.members,C.members);y[N.kind].push(C)}),["conflict","friendly","neutral"].forEach(C=>{const I=y[C];if(!I.length)return;const N=document.createElement("span");N.className=`faction-relation is-${C}`;const L=`阵营 ${v.number}${u(C)}：阵营 ${I.map(U=>U.number).join("、")}`;N.setAttribute("role","img"),N.setAttribute("aria-label",L),N.title=L,N.innerHTML=`${x[C]}<span>${I.map(U=>`<b style="--target-faction:${U.accent}">${U.number}</b>`).join("")}</span>`,w.appendChild(N)}),S.appendChild(w),T.appendChild(S);const M=document.createElement("div");M.className="faction-members",v.members.slice().sort((C,I)=>n.counts[I]-n.counts[C]||C-I).forEach(C=>{const I=s.get(C);I&&M.appendChild(I)}),T.appendChild(M),e.appendChild(T)}),h.length){const v=document.createElement("section");v.className="faction-block is-transcendent",v.setAttribute("aria-label","升维种群"),v.innerHTML='<div class="faction-header"><span class="faction-identity" aria-hidden="true">◇</span></div>';const g=document.createElement("div");g.className="faction-members",h.forEach(T=>{const S=s.get(T);S&&g.appendChild(S)}),v.appendChild(g),e.appendChild(v)}if(c.length){const v=document.createElement("div");v.className="faction-inactive",c.forEach(g=>{const T=s.get(g);T&&v.appendChild(T)}),e.appendChild(v)}}const Ot=n=>document.querySelector(n),rc=Ot("#universe"),Qn=window.matchMedia("(prefers-reduced-motion: reduce)").matches,Pn=new p0({canvas:rc,antialias:!0,alpha:!1,powerPreference:"high-performance"});Pn.setPixelRatio(Math.min(devicePixelRatio,2));Pn.setSize(innerWidth,innerHeight);Pn.setClearColor(328968,1);Pn.outputColorSpace=Fe;Pn.toneMapping=Bl;Pn.toneMappingExposure=1.15;const Qr=new xd;Qr.fog=new Zo(328968,.018);const Sn=new cn(42,innerWidth/innerHeight,.1,200);Sn.position.set(0,.5,32);const dn=new g0(Sn,rc);dn.enableDamping=!0;dn.dampingFactor=.045;dn.enablePan=!1;dn.minDistance=8;dn.maxDistance=46;dn.autoRotate=!1;dn.enabled=!1;let Te=new We,Pe=new We,wn=new We,ei=new We,Ri=new We,Ti=new We,si=new We;Qr.add(Te,Pe,wn,ei,Ri,Ti,si);let Dt=null,fn="generator",Ve=null,os=new Vt(0,0),Rr=new Vt(0,0),Fo=new Cd;Fo.params.Points.threshold=.12;let ps=null,Bs=[],rn=[],_i=[],an=null,Vr=[],No=null,Rs=null,Oo=null,Bo=null,ts=null,Nr=null,wh=[],zs=null,cs=null,Ds=null,Rh=null,Ch=null,Wr=null,zo=null,Ph=null,is=null,ko=null,on=null,xn=null,Ae=0,Cn=!1,Dh=1,Ll=performance.now(),Ci=[];function xi(n){n.traverse(t=>{t.geometry&&t.geometry.dispose(),t.material&&(Array.isArray(t.material)?t.material:[t.material]).forEach(i=>i.dispose())}),n.clear()}function Lh(){xi(Te);const n=un(Dt.seed),t=Math.min(10500,Math.floor(5200+Dt.stars*900)),e=new Float32Array(t*3),i=new Float32Array(t*3),s=new Float32Array(t),r=new Ht().setHSL(Dt.hue,.55,.66),a=new Ht(16767402);for(let m=0;m<t;m++){const _=Math.pow(n(),.56)*9.2,x=n()*Math.PI*2,u=Math.acos(2*n()-1),d=Math.sin(x*Dt.armCount+_)*.48;e[m*3]=_*Math.sin(u)*Math.cos(x)+d,e[m*3+1]=_*Math.cos(u)*.82,e[m*3+2]=_*Math.sin(u)*Math.sin(x);const b=r.clone().lerp(a,Math.pow(n(),2.3)),v=.45+n()*.7;i[m*3]=b.r*v,i[m*3+1]=b.g*v,i[m*3+2]=b.b*v,s[m]=n()}const o=new ie;o.setAttribute("position",new ee(e,3)),o.setAttribute("color",new ee(i,3)),o.setAttribute("aSize",new ee(s,1));const l=new Ye({size:.065,map:Ce(),alphaTest:.015,vertexColors:!0,transparent:!0,opacity:.86,depthWrite:!1,blending:Ft}),c=new tn(o,l);Te.add(c);const h=new tc(9.9,3),f=new Jo(new bd(h),new Tn({color:12175324,transparent:!0,opacity:.032}));Te.add(f);const p=new hn(new ec(10.7,.007,3,220),new Ws({color:14221151,transparent:!0,opacity:.25}));p.rotation.set(1.24,.18,.4),Te.add(p),Te.rotation.set(.15,-.3,-.08),Te.scale.setScalar(.01),Ve={type:"birth",start:performance.now(),duration:Qn?1:1300}}function Ih(){xi(Pe),xi(wn),xi(ei),xi(Ri),xi(Ti),xi(si),Bs=[],rn=[],_i=[],an=null;const n=un(Dt.seed,91),t=17e3,e=new Float32Array(t*3),i=new Float32Array(t*3);ko=new Float32Array(t);const s=new Ht(16770996),r=new Ht().setHSL(Dt.hue,.65,.56),a=_h(Dt),o=Math.min(a,mh(4e10,Dt)),l=Array.from({length:4+Dt.seedValue%3},(x,u)=>({x:tt(n,-8,8)+u*.35,y:tt(n,-.6,.6),z:tt(n,-6,6),spread:tt(n,1.1,3.1)}));for(let x=0;x<t;x++){let u=0,d=0,b=0;if(Dt.galaxyType===0){const S=n();if(S<.2)u=re(n)*3.7,b=re(n)*.42,d=re(n)*.18;else if(S<.29)u=re(n)*1.7,b=re(n)*1.7,d=re(n)*.65;else{const A=3+Math.pow(n(),.72)*11,y=x%2*Math.PI+(A-3)*.46+re(n)*(.12+A*.012),M=re(n)*(.18+A*.025);u=Math.cos(y)*A+M,b=Math.sin(y)*A+M,d=re(n)*(.12+A*.018)}}else if(Dt.galaxyType===1){const S=7+Dt.seedValue%5,A=Math.pow(n(),.68)*14,w=x%S,y=w/S*Math.PI*2+A*.31+re(n)*(.26+A*.018),M=1+Math.sin(A*2.7+w*1.9)*.11;u=Math.cos(y)*A*M+re(n)*.25,b=Math.sin(y)*A*M+re(n)*.25,d=re(n)*(.18+A*.028)}else if(Dt.galaxyType===2){const S=n(),A=n()*Math.PI*2;let w;S<.72?w=8.4+re(n)*.78:S<.9?w=Math.abs(re(n))*2.1:w=4+n()*8,u=Math.cos(A)*w*1.15+re(n)*.13,b=Math.sin(A)*w+re(n)*.13,d=re(n)*(.18+w*.012)}else if(Dt.galaxyType===3){const S=Math.pow(n(),.38);u=re(n)*5.5*S,d=re(n)*2.35*S,b=re(n)*3.75*S;const A=Math.hypot(u,d,b);if(A>13.5){const w=13.5/A;u*=w,d*=w,b*=w}}else if(n()<.13){const S=tt(n,-12,12);u=S,b=Math.sin(S*.24)*2.7+re(n)*.7,d=re(n)*.55}else{const S=l[Math.floor(n()*l.length)];u=S.x+re(n)*S.spread,d=S.y+re(n)*S.spread*.38,b=S.z+re(n)*S.spread*.72}e[x*3]=u,e[x*3+1]=d,e[x*3+2]=b;const v=Math.hypot(u,d,b),g=s.clone().lerp(r,Math.min(1,v/12)),T=.55+n()*.85;i[x*3]=g.r*T,i[x*3+1]=g.g*T,i[x*3+2]=g.b*T,ko[x]=o+Math.pow(n(),1.9)*(a-o)}zo=e.slice(),Ph=i.slice(),is=o_(zo,Dt);const c=new ie;c.setAttribute("position",new ee(e,3)),c.setAttribute("color",new ee(i,3));const h=new tn(c,new Ye({size:.09,map:Ce(),alphaTest:.015,vertexColors:!0,transparent:!0,opacity:.9,depthWrite:!1,blending:Ft}));Pe.add(h),ps=h;const p=[{scale:4.3,opacity:.32},{scale:3.25,opacity:.22},{scale:1.55,opacity:.055},{scale:6.4,opacity:.46},{scale:1.2,opacity:.035}][Dt.galaxyType],m=new le(new oe({map:Ge(),color:16768164,transparent:!0,opacity:0,depthWrite:!1,blending:Ft}));if(m.scale.set(p.scale,p.scale,1),m.userData.isCoreGlow=!0,m.userData.profile=p,Pe.add(m),Dt.activeNucleus){const x=new le(new oe({map:Ge(),color:14281983,transparent:!0,opacity:0,depthWrite:!1,blending:Ft}));x.scale.set(.72,.72,1),x.userData.isAgnGlow=!0,Pe.add(x);const u=new ie().setFromPoints([new B(0,-2.6,0),new B(0,2.6,0)]),d=new Si(u,new Tn({color:11065599,transparent:!0,opacity:0,depthWrite:!1,blending:Ft}));d.rotation.z=.3,d.userData.isAgnJet=!0,Pe.add(d)}const _=[.72,.92,.62,.35,.78];Pe.rotation.set(_[Dt.galaxyType],-.25+Dt.galaxyType*.06,.06),Pe.visible=!1,O_(e),k_(),B_(e),M_({universe:Dt,civilizationData:rn,civilizationSimulation:an,cosmicEvents:Ci}),z_(),R_(Dt)}function O_(n){const t=un(Dt.seed,771);Vr=[];const e=4800,i=new Float32Array(e*3),s=new Float32Array(e*3);Rs=new Float32Array(e*3),Oo=new Float32Array(e);const r=new Ht(16777215),a=new Ht(16739624);for(let S=0;S<e;S++){const A=t()*Math.PI*2,w=tt(t,-1,1),y=Math.sqrt(1-w*w),M=Math.cbrt(t());Rs[S*3]=Math.cos(A)*y*M,Rs[S*3+1]=w*M,Rs[S*3+2]=Math.sin(A)*y*M,Oo[S]=ot.clamp(1+re(t)*.035*Dt.primordialFluctuation,.82,1.18);const C=r.clone().lerp(a,Math.pow(t(),.7));s[S*3]=C.r,s[S*3+1]=C.g,s[S*3+2]=C.b}const o=new ie;o.setAttribute("position",new ee(i,3)),o.setAttribute("color",new ee(s,3)),No=new tn(o,new Ye({size:.24,map:Ce(),alphaTest:.012,vertexColors:!0,transparent:!0,opacity:1,depthWrite:!1,blending:Ft})),wn.add(No);const l=340,c=new Float32Array(l*6);ts=new Float32Array(l*4);for(let S=0;S<l;S++){const A=t()*Math.PI*2,w=Math.acos(2*t()-1);ts[S*4]=Math.sin(w)*Math.cos(A),ts[S*4+1]=Math.cos(w),ts[S*4+2]=Math.sin(w)*Math.sin(A),ts[S*4+3]=.45+t()*.75}const h=new ie;h.setAttribute("position",new ee(c,3)),Bo=new Jo(h,new Tn({color:16762253,transparent:!0,opacity:.8,blending:Ft,depthWrite:!1})),wn.add(Bo),Nr=new le(new oe({map:Ge(),color:16777215,transparent:!0,opacity:1,depthTest:!1,depthWrite:!1,blending:Ft})),Nr.scale.setScalar(.2),wn.add(Nr),wh=[16774367,16751444,8962047].map((S,A)=>{const w=new le(new oe({map:Ji(),color:S,transparent:!0,opacity:0,depthTest:!1,depthWrite:!1,blending:Ft}));return w.userData.offset=A*.13,wn.add(w),w});const f=1350,p=new Float32Array(f*3),m=new Float32Array(f*3);on=new Float32Array(f*3),xn={sourceIndices:new Uint16Array(f),axes:new Float32Array(f*3),orbitRates:new Float32Array(f),escapeAt:new Float32Array(f),speeds:new Float32Array(f),fates:new Uint8Array(f)};const _=ot.clamp((Dt.gravity-.5)*6+(Dt.galaxyType===3?4:0),0,12);for(let S=0;S<f;S++){const A=Math.floor(t()*n.length/3),w=A*3;xn.sourceIndices[S]=A;const y=n[w],M=n[w+1],C=n[w+2];p[S*3]=on[S*3]=y,p[S*3+1]=on[S*3+1]=M,p[S*3+2]=on[S*3+2]=C,t(),t(),t(),xn.axes.set([is.axes[w],is.axes[w+1],is.axes[w+2]],S*3),xn.orbitRates[S]=is.orbitRates[A];const I=t(),N=I<.82?0:I<.92?1:I<.99?2:3;xn.fates[S]=N,xn.escapeAt[S]=N===1?1001:(N===3?704:N===2?724:710)+_+Math.pow(t(),.68)*(N===3?28:92),xn.speeds[S]=N===3?tt(t,1.7,2.6):tt(t,.55,1.05);const L=new Ht(t()>.28?10204889:9125426);m[S*3]=L.r,m[S*3+1]=L.g,m[S*3+2]=L.b}const x=new ie;x.setAttribute("position",new ee(p,3)),x.setAttribute("color",new ee(m,3)),Wr=new tn(x,new Ye({size:.12,map:Ce(),alphaTest:.012,vertexColors:!0,transparent:!0,opacity:0,depthWrite:!1,blending:Ft})),ei.add(Wr),ei.rotation.copy(Pe.rotation);const u=Dt.hasCentralBlackHole?9:6;for(let S=0;S<u;S++){const A=S===0&&Dt.hasCentralBlackHole,w=A?.9:tt(t,.3,.5),y=Fr({color:A?16763286:t()>.35?16758652:12179455,tilt:tt(t,-.38,.38),phase:t()*Math.PI*2,visualScale:A?1.14:1,intensity:0}),M=new le(new oe({map:Ge(),color:7315404,transparent:!0,opacity:0,depthWrite:!1,blending:Ft}));M.scale.set(1.2,1.2,1);const C=new le(new oe({map:Ge(),color:15267071,transparent:!0,opacity:0,depthWrite:!1,blending:Ft}));if(C.scale.set(.2,.2,1),y.add(M,C),A)y.position.set(0,0,0);else{const I=Math.floor(t()*n.length/3)*3;y.position.set(n[I],n[I+1],n[I+2])}y.scale.setScalar(w),y.visible=!1,Object.assign(y.userData,{baseScale:w,birthAt:825+t()*34,evaporationAt:A?949:880+Math.pow(t(),.46)*64,hawkingGlow:M,finalPulse:C,spinDirection:t()<.5?-1:1}),Vr.push(y),ei.add(y)}const d=260,b=new Float32Array(d*3),v=new Float32Array(d*3);for(let S=0;S<d;S++){const A=t()*Math.PI*2,w=Math.acos(2*t()-1),y=4+Math.pow(t(),1/3)*24;b[S*3]=Math.sin(w)*Math.cos(A)*y,b[S*3+1]=Math.cos(w)*y,b[S*3+2]=Math.sin(w)*Math.sin(A)*y;const M=new Ht().setHSL(.56+t()*.1,.28,.46+t()*.22);v[S*3]=M.r,v[S*3+1]=M.g,v[S*3+2]=M.b}const g=new ie;g.setAttribute("position",new ee(b,3)),g.setAttribute("color",new ee(v,3)),Rh=b.slice(),Ch=v.slice(),zs=new tn(g,new Ye({size:.11,map:Ce(),alphaTest:.01,vertexColors:!0,transparent:!0,opacity:0,depthWrite:!1,blending:Ft})),Ri.add(zs);const T=Dt.cosmicFate.type==="vacuum-decay"?13019135:Dt.cosmicFate.type==="big-rip"?8440063:16744543;cs=new hn(new jr(1,40,24),new Ws({color:T,transparent:!0,opacity:0,wireframe:!0,depthWrite:!1,blending:Ft})),cs.position.set(4.2,-1.4,2.6),Ds=new le(new oe({map:Ge(),color:T,transparent:!0,opacity:0,depthTest:!1,depthWrite:!1,blending:Ft})),Ds.scale.set(.2,.2,1),Ti.add(cs,Ds),Ti.rotation.copy(Pe.rotation),wn.visible=!1,ei.visible=!1,Ri.visible=!1,Ti.visible=!1}function B_(n){const t=un(Dt.seed,1447);Ci=[];const e=Dt.hasCentralBlackHole?{type:"quasar-awakening",visual:"pulsar",label:"类星体短暂苏醒",message:"中心黑洞吸积率骤升，相对论喷流穿过星系核",preferCenter:!0,start:480+t()*16,duration:30,color:"#8dd9ff",repeatRate:.32,maximumOccurrences:2}:{type:"magnetar-flare",visual:"pulsar",label:"磁星巨型耀斑",message:"磁壳重排释放高能辐射，脉冲扫过邻近恒星系",start:480+t()*16,duration:26,color:"#7dcaff",repeatRate:.52,maximumOccurrences:2},i=[{type:"pair-instability-supernova",visual:"supernova",label:"成对不稳定超新星",message:"第一代巨星被完全撕碎，重元素云向外扩散",start:258+t()*18,duration:28,color:"#ffb36b",repeatRate:.16,maximumOccurrences:2},{type:"young-pulsar-birth",visual:"pulsar",label:"年轻脉冲星诞生",message:"新生中子星高速自转，双极束流开始扫掠星际介质",start:302+t()*18,duration:27,color:"#68c8ff",repeatRate:.42,maximumOccurrences:2},{type:"classical-nova",visual:"nova",label:"经典新星爆发",message:"白矮星表面的吸积氢发生热核失控，抛出明亮但低质量的壳层",start:336+t()*12,duration:20,color:"#ffe4a8",repeatRate:.9,maximumOccurrences:3},{type:"type-ia-supernova",visual:"supernova",label:"Ia 型超新星爆发",message:"白矮星发生热核失控，将铁族元素抛入星际空间",start:368+t()*22,duration:25,color:"#ffd08a",repeatRate:.66,maximumOccurrences:3},{type:"red-dwarf-superflare",visual:"stellar-flare",label:"红矮星超级耀斑",message:"磁场突然重联，高能辐射与带电粒子冲击近轨行星",start:396+t()*12,duration:21,color:"#ffcb72",repeatRate:1.05,maximumOccurrences:3},{type:"gamma-ray-burst",visual:"pulsar",label:"长伽马射线暴",message:"垂死巨星坍缩，狭窄高能喷流贯穿恒星外层",start:420+t()*20,duration:24,color:"#89b9ff",repeatRate:.2,maximumOccurrences:2},{type:"neutron-star-kilonova",visual:"kilonova",label:"中子星并合千新星",message:"双中子星旋近并合，短伽马射线束与富含重元素的抛射物同时释放",start:450+t()*12,duration:25,color:"#caa5ff",repeatRate:.28,maximumOccurrences:2},e,{type:"tidal-disruption-event",visual:"tidal-disruption",label:"潮汐瓦解事件",message:"恒星掠过中央黑洞的潮汐半径，被拉成长流并逐步吸积",preferCenter:!0,requiresCentralBlackHole:!0,start:502+t()*10,duration:30,color:"#72e4ff",repeatRate:.28,maximumOccurrences:2},{type:"core-collapse-supernova",visual:"supernova",label:"核坍缩超新星",message:"恒星核心坍缩，冲击波把新合成元素送入星际云",start:518+t()*20,duration:27,color:"#ff875c",repeatRate:.86,maximumOccurrences:3},{type:"pulsar-glitch",visual:"pulsar",label:"脉冲星自转突变",message:"中子星内部角动量重分配，脉冲节律突然跃迁",start:548+t()*18,duration:22,color:"#8ba8ff",repeatRate:.72,maximumOccurrences:3},{type:"superluminous-supernova",visual:"supernova",label:"超亮超新星",message:"磁星引擎持续注入能量，爆发亮度超过普通超新星",start:552+t()*16,duration:26,color:"#ff6b52",repeatRate:.2,maximumOccurrences:2},{type:"failed-supernova",visual:"stellar-collapse",label:"失败超新星",message:"冲击波未能掀开恒星外层，亮度短暂上升后整体坍缩为黑洞",start:586+t()*14,duration:29,color:"#b87958",repeatRate:.38,maximumOccurrences:2},{type:"stellar-black-hole-merger",visual:"black-hole-merger",label:"双黑洞合并",message:"时空啁啾达到峰值，引力波波前穿过局部星域（形变已视觉放大）",preferCenter:!0,start:616+t()*18,duration:38,persistUntil:Math.min(845,Dt.cosmicFate.onsetAt||845),persistenceFadeDuration:24,color:"#c897ff",repeatRate:.36,maximumOccurrences:2},{type:"late-black-hole-merger",visual:"black-hole-merger",label:"孤立黑洞捕获合并",message:"漫长引力散射后完成并合，残余黑洞在阻尼振铃中反冲",preferCenter:!0,start:872+t()*18,duration:42,persistUntil:950,persistenceFadeDuration:18,color:"#9bb8ff",repeatRate:.14,maximumOccurrences:2}].filter(h=>(!h.requiresCentralBlackHole||Dt.hasCentralBlackHole)&&(h.type!=="late-black-hole-merger"||Dt.cosmicFate.type==="heat-death"||Dt.cosmicFate.outcomeExponent>45)),s=A_(i,Dt,t).map((h,f)=>{const p=d_(h,Dt,f),m={...h,simulation:p};return p?.model==="black-hole-binary"&&(m.gasRich=p.gasRich,m.radiatedMassFraction=p.radiatedMassFraction,m.recoilKms=p.recoilKms),p?.persistentRemnant&&(m.persistUntil=Math.min(845,Dt.cosmicFate.onsetAt||845),m.persistenceFadeDuration=24),m}),r={"pair-instability-supernova":{radius:.55,maxStars:5,sourceDim:.02,neighborDim:.96,kick:.018,civilization:.08,range:2.4},"young-pulsar-birth":{radius:.42,maxStars:2,sourceDim:.12,neighborDim:.99,kick:.01,civilization:.035,range:1.8,directional:!0,beamAngle:.12},"classical-nova":{radius:.18,maxStars:1,sourceDim:1,neighborDim:1,kick:0,civilization:.012,range:.75,maxSpecies:1},"type-ia-supernova":{radius:.48,maxStars:4,sourceDim:.02,neighborDim:.97,kick:.012,civilization:.06,range:2.1},"red-dwarf-superflare":{radius:.22,maxStars:1,sourceDim:1,neighborDim:1,kick:0,civilization:.09,range:1.15,maxSpecies:1},"gamma-ray-burst":{radius:7.5,maxStars:46,sourceDim:.025,neighborDim:.82,kick:0,civilization:.42,range:12,maxSpecies:1,directional:!0,beamAngle:.1},"neutron-star-kilonova":{radius:4.8,maxStars:24,sourceDim:.03,neighborDim:.9,kick:.006,civilization:.24,range:8.5,maxSpecies:1,directional:!0,beamAngle:.14},"quasar-awakening":{radius:8.5,maxStars:60,sourceDim:.95,neighborDim:.96,kick:0,civilization:.16,range:14,maxSpecies:2,directional:!0,beamAngle:.16},"magnetar-flare":{radius:1.1,maxStars:8,sourceDim:.82,neighborDim:.94,kick:0,civilization:.12,range:3.2,maxSpecies:1},"tidal-disruption-event":{radius:.32,maxStars:2,sourceDim:.015,neighborDim:.995,kick:.008,civilization:.075,range:2.8,maxSpecies:1},"core-collapse-supernova":{radius:.5,maxStars:4,sourceDim:.025,neighborDim:.97,kick:.014,civilization:.06,range:2.2},"pulsar-glitch":{radius:.01,maxStars:1,sourceDim:.985,neighborDim:1,kick:0,civilization:0,range:0,maxSpecies:0},"superluminous-supernova":{radius:.62,maxStars:6,sourceDim:.02,neighborDim:.95,kick:.02,civilization:.09,range:2.8,maxSpecies:1},"failed-supernova":{radius:.24,maxStars:2,sourceDim:.008,neighborDim:.995,kick:.003,civilization:.025,range:1.25,maxSpecies:1},"stellar-black-hole-merger":{radius:.08,maxStars:1,sourceDim:.06,neighborDim:1,kick:0,civilization:0,range:0,maxSpecies:0},"late-black-hole-merger":{radius:.08,maxStars:1,sourceDim:.04,neighborDim:1,kick:0,civilization:0,range:0,maxSpecies:0}},a=(h=!1)=>{let f=Math.floor(t()*n.length/3);const p=h?2.8:6.2;for(let m=0;m<140;m++){const _=Math.floor(t()*n.length/3),x=_*3;if(Math.hypot(n[x],n[x+1],n[x+2])<p){f=_;break}}return{index:f,position:new B(n[f*3],n[f*3+1],n[f*3+2])}},o=(h,f)=>{const p=Rl(r[h.type],h.simulation,Dt),_={supernova:.08,nova:.14,kilonova:.22,pulsar:.46,"stellar-flare":.38,"tidal-disruption":.58,"stellar-collapse":.64,"black-hole-merger":.68}[h.visual]??.5,x=h.start+h.duration*_,u=[];for(let T=0;T<n.length/3;T++){const S=T*3,A=Math.hypot(n[S]-f.position.x,n[S+1]-f.position.y,n[S+2]-f.position.z);if(!(A>p.radius)){if(p.directional&&h.beamDirection&&A>.001){const w=new B(n[S]-f.position.x,n[S+1]-f.position.y,n[S+2]-f.position.z).normalize();if(Math.abs(w.dot(h.beamDirection))<Math.cos(p.beamAngle))continue}u.push({index:T,distance:A})}}u.sort((T,S)=>T.distance-S.distance);const d=u.slice(0,p.maxStars).map(({index:T,distance:S},A)=>{const w=T*3,y=1-Math.min(1,S/p.radius);let M=n[w]-f.position.x,C=n[w+1]-f.position.y,I=n[w+2]-f.position.z;const N=Math.hypot(M,C,I);if(N<.001){const U=t()*Math.PI*2,k=t()*2-1,F=Math.sqrt(1-k*k);M=Math.cos(U)*F,C=k,I=Math.sin(U)*F}else M/=N,C/=N,I/=N;const L=p.kick*(.2+y*.8)*(.72+t()*.5);return{index:T,dimFactor:A===0?p.sourceDim:1-(1-p.neighborDim)*y,kick:[M*L,C*L,I*L]}}),b={"pair-instability-supernova":"爆发源完全解体且没有致密残骸","classical-nova":"白矮星保留下来，重新开始从伴星吸积物质","type-ia-supernova":"白矮星被热核爆炸完全摧毁","red-dwarf-superflare":"宿主恒星保持完整，但近轨行星大气受到高能粒子冲击","neutron-star-kilonova":"并合形成大质量中子星或黑洞，并把重元素抛入星际空间","tidal-disruption-event":"恒星被撕碎，部分物质形成吸积流，部分沿轨道逃逸","core-collapse-supernova":"坍缩核心留下中子星或恒星级黑洞","superluminous-supernova":"恒星外层被大规模抛射，中心结局仍不确定","failed-supernova":"恒星几乎没有明亮爆炸便消失，留下新生黑洞"},v=f_(h),g=v||(h.visual==="black-hole-merger"?`约 ${(h.radiatedMassFraction*100).toFixed(1)}% 总质量以引力波带走，残余黑洞以约 ${h.recoilKms} km/s 反冲${h.gasRich?"，周围气体受热形成短暂余辉":"；真空环境中没有超新星式爆炸"}`:h.type==="pulsar-glitch"?"自转频率发生微小跃变，没有可见的大规模破坏":b[h.type]?`${b[h.type]}，${Math.max(0,d.length-1)} 个邻近恒星系受影响`:h.visual==="pulsar"?`${d.length} 个位于辐射束或近场内的恒星系受到影响`:`爆发源发生结构性改变，${Math.max(0,d.length-1)} 个邻近恒星系受冲击`);return{impactAt:x,impactPhase:_,starImpacts:d,systemOutcome:g}},l=(h,f,p,m,_)=>{if(!an||!xn)return[];const x=Rl(r[h.type],h.simulation,Dt),u=un(Dt.seed,6203+_*131),d=new Map,b=(T,S,A,w=!1,y="damage")=>{const M=`${y}:${T}:${S.toFixed(4)}`,C=d.get(M);if(C){C.severity=1-(1-C.severity)*(1-A),C.permanent||=w;return}d.set(M,{nodeIndex:T,at:S,severity:ot.clamp(A,0,1),permanent:w,kind:y,destructionRoll:u()})};if(x.civilization>0&&x.range>0)for(let T=0;T<an.habitatPositions.length/3;T++){const S=T*3,A=an.habitatPositions[S]-f.position.x,w=an.habitatPositions[S+1]-f.position.y,y=an.habitatPositions[S+2]-f.position.z,M=Math.hypot(A,w,y);if(M>x.range)continue;if(x.directional&&h.beamDirection&&M>.001){const L=1/M;if(Math.abs(A*L*h.beamDirection.x+w*L*h.beamDirection.y+y*L*h.beamDirection.z)<Math.cos(x.beamAngle))continue}const C=Math.max(.08,1-M/x.range),I=ot.clamp(x.civilization*(.62+C*.48)*(.84+u()*.3),0,.58),N=h.simulation?.pulsePhases;if(N?.length?N.forEach((L,U)=>{const k=h.simulation.pulseWeights?.[U]??1;b(T,h.start+h.duration*L,I*k)}):b(T,p.impactAt,I),h.simulation?.recoveryDuration&&h.simulation.recoveryFraction>0){const L=N?.length?Math.max(...N):p.impactPhase,U=h.start+h.duration*L+h.simulation.recoveryDuration;b(T,U,I*h.simulation.recoveryFraction,!1,"recovery")}}const v=new Map(p.starImpacts.map(T=>[T.index,T])),g=new Map;if(m)for(let T=0;T<m.indices.length;T++)m.restDistances[T]>=m.captureRadius||g.set(m.indices[T],m.restDistances[T]);for(let T=0;T<an.habitatRemnantIndices.length;T++){const S=an.habitatRemnantIndices[T],A=xn.sourceIndices[S],w=v.get(A);if(w){const M=1-w.dimFactor;M>.001&&b(T,p.impactAt,M,w.dimFactor<=.15)}const y=g.get(A);if(y!==void 0){const M=y/m.captureRadius*11;b(T,p.impactAt+M+13,1,!0)}}return Array.from(d.values()).sort((T,S)=>T.at-S.at||T.nodeIndex-S.nodeIndex)},c=(h,f,p)=>{const m=h.visual==="kilonova";if(h.visual!=="black-hole-merger"&&!m)return null;const _=m?6.4:h.type==="late-black-hole-merger"?7.2:8.8,x=[];for(let w=0;w<n.length/3;w++){const y=w*3,M=n[y]-f.position.x,C=n[y+1]-f.position.y,I=n[y+2]-f.position.z,N=Math.hypot(M,C,I);N>.12&&N<=_&&x.push({index:w,dx:M,dy:C,dz:I,distance:N})}const u=un(Dt.seed,9107+p*97),d=Math.min(m?900:1800,x.length),b=x.length/Math.max(1,d),v=new Uint16Array(d),g=new Float32Array(d),T=new Float32Array(d*3),S=new Float32Array(d);for(let w=0;w<d;w++){const y=w*b,M=x[Math.min(x.length-1,Math.floor(y+u()*b))],C=1/M.distance,I=M.dx*C;M.dy*C;const N=M.dz*C;let L=-N,U=0,k=I;const F=Math.hypot(L,U,k);F<.04?(L=1,U=0,k=0):(L/=F,U/=F,k/=F),v[w]=M.index,g[w]=M.distance,T.set([L,U,k],w*3),S[w]=Math.cos(Math.atan2(N,I)*2)*(.72+u()*.28)}const A=m?ot.clamp((h.simulation?.radiatedMassFraction||.025)/.04,.38,1):ot.clamp((h.simulation?.radiatedMassFraction||.045)/.045,.62,1.8);return{waveRadius:_,waveAmplitude:A,indices:v,distances:g,transverse:T,polarities:S}};s.forEach((h,f)=>{const p=new We,m=a(h.preferCenter);if(p.position.copy(m.position),p.visible=!1,si.add(p),r[h.type].directional&&(h.beamDirection=new B(re(t),re(t),re(t)).normalize(),p.quaternion.setFromUnitVectors(new B(0,1,0),h.beamDirection)),h.visual==="supernova"||h.visual==="nova"||h.visual==="kilonova"){const g=h.visual==="nova",T=h.visual==="kilonova",S=T?12099071:g?16770733:16756067,A=T?14731519:g?16317439:11458815,w=new le(new oe({map:Ge(),color:16777215,transparent:!0,opacity:0,depthWrite:!1,blending:Ft})),y=new le(new oe({map:Ge(),color:S,transparent:!0,opacity:0,depthWrite:!1,blending:Ft})),M=new le(new oe({map:Ce(),color:A,transparent:!0,opacity:0,depthWrite:!1,blending:Ft}));M.scale.set(.16,.16,1);const C=ot.clamp(Math.sqrt((h.simulation?.ejectaMass||(g?2e-5:8))/(g?2e-5:8)),.7,1.65),I=Math.round((g?360:620)*C),N=new Float32Array(I*3),L=new Float32Array(I*3),U=new Float32Array(I*3),k=new Float32Array(I),F=new Float32Array(I),O=new Ht(T?14283775:g?16775384:16773319),Z=new Ht(T?9261009:g?16758120:16730930);for(let bt=0;bt<I;bt++){const Yt=t()*Math.PI*2,D=Math.acos(2*t()-1),Zt=1+Math.sin(Yt*5+D*3)*.18+(t()-.5)*.24,J=new B(Math.sin(D)*Math.cos(Yt)*Zt,Math.cos(D)*(T?.34:1.08+t()*.34),Math.sin(D)*Math.sin(Yt)*Zt).normalize();U.set([J.x,J.y,J.z],bt*3);const lt=T?ot.clamp((h.simulation?.ejectaVelocityC||.2)/.18,.72,1.55):g?ot.clamp((h.simulation?.ejectaVelocityKms||1800)/1800,.64,1.7):ot.clamp((h.simulation?.ejectaVelocityKms||9e3)/9e3,.62,1.72),ct=g?.46*lt:lt;k[bt]=(.38+Math.pow(t(),.48)*1.45+Math.abs(J.y)*.22)*ct,F[bt]=Math.pow(t(),2.4)*.22;const Bt=O.clone().lerp(Z,Math.pow(t(),.52));L.set([Bt.r,Bt.g,Bt.b],bt*3)}const $=new ie;$.setAttribute("position",new ee(N,3)),$.setAttribute("color",new ee(L,3));const it=new tn($,new Ye({size:.1,map:Ce(),alphaTest:.008,vertexColors:!0,transparent:!0,opacity:0,depthWrite:!1,blending:Ft})),mt=Math.round((g?160:280)*Math.min(1.45,C)),Ct=new Float32Array(mt*3),et=new Float32Array(mt*3),Q=new Float32Array(mt);for(let bt=0;bt<mt;bt++){const Yt=t()*Math.PI*2,D=2*t()-1,Zt=Math.sqrt(1-D*D);et.set([Math.cos(Yt)*Zt,D,Math.sin(Yt)*Zt],bt*3),Q[bt]=t()*Math.PI*2}const q=new ie;q.setAttribute("position",new ee(Ct,3));const V=T?10845439:g?16769184:16766112,at=new tn(q,new Ye({color:V,size:g?.052:.072,map:Ce(),alphaTest:.01,transparent:!0,opacity:0,depthWrite:!1,blending:Ft}));let vt=null,yt=null;if(T){const bt=2.6+(h.simulation?.ejectaVelocityC||.2)*4.2,Yt=new ie;Yt.setAttribute("position",new we([0,-.12,0,0,-bt,0,0,.12,0,0,bt,0],3)),vt=new Jo(Yt,new Tn({color:13234175,transparent:!0,opacity:0,depthWrite:!1,blending:Ft})),yt=new le(new oe({map:Ji(),color:12891391,transparent:!0,opacity:0,depthTest:!1,depthWrite:!1,blending:Ft}))}p.add(y,w,it,at,M),vt&&p.add(vt),yt&&p.add(yt),p.userData.effect={innerFlash:w,photosphere:y,remnant:M,ejecta:it,ejectaDirections:U,ejectaVelocity:k,ejectaDelay:F,shell:at,shellDirections:et,shellNoise:Q,polarJets:vt,gravityWave:yt}}else if(h.visual==="tidal-disruption"){const g=Fr({color:8773119,tilt:.22,phase:t()*Math.PI*2,visualScale:.86});g.userData.spinDirection=1;const T=new le(new oe({map:Ce(),color:16773577,transparent:!0,opacity:0,depthWrite:!1,blending:Ft}));T.scale.set(.28,.28,1);const S=new le(new oe({map:Ge(),color:9366271,transparent:!0,opacity:0,depthTest:!1,depthWrite:!1,blending:Ft})),A=new le(new oe({map:Ji(),color:7068927,transparent:!0,opacity:0,depthWrite:!1,blending:Ft,rotation:t()*Math.PI}));A.scale.set(1.5,.48,1);const w=480,y=new Float32Array(w*3),M=new Float32Array(w),C=new Float32Array(w),I=new Float32Array(w*3),N=new Ht(16380359),L=new Ht(5623807);for(let F=0;F<w;F++){const O=t()<(h.simulation?.boundFraction||.5);M[F]=O?-t():t(),C[F]=t()*Math.PI*2;const Z=N.clone().lerp(L,Math.pow(t(),.62));I.set([Z.r,Z.g,Z.b],F*3)}const U=new ie;U.setAttribute("position",new ee(y,3)),U.setAttribute("color",new ee(I,3));const k=new tn(U,new Ye({size:.075,map:Ce(),alphaTest:.008,vertexColors:!0,transparent:!0,opacity:0,depthWrite:!1,blending:Ft}));p.add(S,A,k,T,g),p.userData.effect={hole:g,starCore:T,flare:S,disk:A,debris:k,debrisOffsets:M,debrisNoise:C}}else if(h.visual==="stellar-flare"){const g=new le(new oe({map:Ce(),color:16758618,transparent:!0,opacity:0,depthWrite:!1,blending:Ft})),T=new le(new oe({map:Ge(),color:16742962,transparent:!0,opacity:0,depthWrite:!1,blending:Ft})),S=new le(new oe({map:Ji(),color:16765563,transparent:!0,opacity:0,depthWrite:!1,blending:Ft}));g.scale.set(.25,.25,1);const A=[];for(let N=0;N<3;N++){const L=[];for(let k=0;k<=72;k++){const F=k/72*Math.PI;L.push(new B(Math.cos(F)*(.42+N*.16),Math.sin(F)*(.68+N*.18),Math.sin(F*2)*.06))}const U=new Si(new ie().setFromPoints(L),new Tn({color:N===1?16773283:16751442,transparent:!0,opacity:0,depthWrite:!1,blending:Ft}));U.rotation.y=N*1.86+t()*.35,A.push(U)}const w=320,y=new Float32Array(w*3),M=new Float32Array(w*3);for(let N=0;N<w;N++){const L=t()*Math.PI*2,U=tt(t,-.28,1),k=Math.sqrt(1-Math.min(1,U*U));M.set([Math.cos(L)*k,U,Math.sin(L)*k],N*3)}const C=new ie;C.setAttribute("position",new ee(y,3));const I=new tn(C,new Ye({color:16763248,size:.06,map:Ce(),alphaTest:.008,transparent:!0,opacity:0,depthWrite:!1,blending:Ft}));p.add(T,S,g,I,...A),p.userData.effect={starCore:g,halo:T,shock:S,loops:A,particles:I,particleDirections:M}}else if(h.visual==="stellar-collapse"){const g=new le(new oe({map:Ce(),color:16753755,transparent:!0,opacity:0,depthWrite:!1,blending:Ft})),T=new le(new oe({map:Ge(),color:10114360,transparent:!0,opacity:0,depthWrite:!1,blending:Ft})),S=Fr({color:10316632,tilt:-.18,phase:t()*Math.PI*2,visualScale:.72});S.userData.spinDirection=-1,S.visible=!1;const A=Math.round(180+(h.simulation?.ejectedEnvelopeFraction||.08)*920),w=new Float32Array(A*3),y=new Float32Array(A*3);for(let I=0;I<A;I++){const N=t()*Math.PI*2,L=t()*2-1,U=Math.sqrt(1-L*L);y.set([Math.cos(N)*U,L,Math.sin(N)*U],I*3)}const M=new ie;M.setAttribute("position",new ee(w,3));const C=new tn(M,new Ye({color:9196347,size:.065,map:Ce(),alphaTest:.008,transparent:!0,opacity:0,depthWrite:!1,blending:Ft}));p.add(T,C,g,S),p.userData.effect={starCore:g,shroud:T,remnantHole:S,dust:C,dustDirections:y}}else if(h.visual==="pulsar"){const g=new le(new oe({map:Ce(),color:16055295,transparent:!0,opacity:0,depthWrite:!1,blending:Ft})),T=new le(new oe({map:Ge(),color:4962815,transparent:!0,opacity:0,depthWrite:!1,blending:Ft})),S=new le(new oe({map:Ge(),color:1472184,transparent:!0,opacity:0,depthWrite:!1,blending:Ft,rotation:t()*Math.PI})),A=new le(new oe({map:Ge(),color:13233663,transparent:!0,opacity:0,depthWrite:!1,blending:Ft}));g.scale.set(.18,.18,1),S.scale.set(1.45,.58,1);const w=new We;w.rotation.z=.58+t()*.32;const y=h.simulation?.model==="collapsar-jet"?ot.clamp(h.simulation.lorentzFactor/260,.7,1.75):h.simulation?.model==="quasar-duty-cycle"?ot.clamp(h.simulation.jetLorentzFactor/8,.7,1.7):1,M=Math.round(420*y),C=new Float32Array(M*3),I=new Float32Array(M*3);for(let F=0;F<M;F++){const O=F%2?1:-1,Z=.1+Math.pow(t(),.66)*2.6*y,$=.012+Z*.014,it=t()*Math.PI*2;C[F*3]=Math.cos(it)*$*t(),C[F*3+1]=O*Z,C[F*3+2]=Math.sin(it)*$*t();const mt=.35+Math.pow(1-Z/2.8,.45)*.65;I.set([.38*mt,.76*mt,mt],F*3)}const N=new ie;N.setAttribute("position",new ee(C,3)),N.setAttribute("color",new ee(I,3));const L=new tn(N,new Ye({size:.09,map:Ce(),alphaTest:.008,vertexColors:!0,transparent:!0,opacity:0,depthWrite:!1,blending:Ft}));w.add(L);const U=[];for(let F=0;F<4;F++){const O=[],Z=.5+F*.18;for(let it=0;it<=80;it++){const mt=it/80*Math.PI*2;O.push(new B(Math.cos(mt)*Z,Math.sin(mt)*Z*.34,Math.sin(mt*2)*.08))}const $=new Si(new ie().setFromPoints(O),new Tn({color:7524351,transparent:!0,opacity:0,depthWrite:!1,blending:Ft}));$.rotation.set(t()*Math.PI,t()*Math.PI,t()*Math.PI),U.push($),w.add($)}const k=[];for(let F=0;F<8;F++){const O=new le(new oe({map:Ce(),color:10214911,transparent:!0,opacity:0,depthWrite:!1,blending:Ft}));O.scale.set(.11,.11,1),O.userData.offset=F/8,O.userData.side=F%2?1:-1,k.push(O),w.add(O)}p.add(S,T,A,g,w),p.userData.effect={core:g,halo:T,nebula:S,sweepGlow:A,rotor:w,jets:L,fieldLines:U,knots:k,jetPowerScale:y}}else if(h.visual==="black-hole-merger"){const g=(V,at)=>{const vt=Fr({color:V,tilt:tt(t,-.28,.28),phase:t()*Math.PI*2,visualScale:1.08});return vt.userData.spinDirection=at,vt},T=new We;T.rotation.set(.76,.18,.24);const S=g(16759408,1),A=g(10999807,-1),w=g(16767405,1);w.scale.setScalar(1.24),w.visible=!1;const y=V=>{const at=new Float32Array(252),vt=new ie;return vt.setAttribute("position",new ee(at,3)),new Si(vt,new Tn({color:V,transparent:!0,opacity:0,depthWrite:!1,blending:Ft}))},M=y(16751445),C=y(7979007);T.add(M,C,S,A,w);const I=new le(new oe({map:Ge(),color:h.gasRich?16769717:14478079,transparent:!0,opacity:0,depthTest:!1,depthWrite:!1,blending:Ft})),N=new le(new oe({map:Ji(),color:16757871,transparent:!0,opacity:0,depthTest:!1,depthWrite:!1,blending:Ft}));N.visible=h.gasRich;const L=[10209535,13810175,7976959].map(V=>new le(new oe({map:Ji(),color:V,transparent:!0,opacity:0,depthTest:!1,depthWrite:!1,blending:Ft}))),U=[];for(let V=0;V<6;V++){const at=[];for(let yt=0;yt<160;yt++){const bt=yt/160*Math.PI*2,Yt=1+Math.cos(bt*2+V*.7)*.065;at.push(new B(Math.cos(bt)*Yt,Math.sin(bt)*Yt,Math.sin(bt*2+V)*.055))}const vt=new Ed(new ie().setFromPoints(at),new Tn({color:V%3===1?14205951:9422591,transparent:!0,opacity:0,depthTest:!1,depthWrite:!1,blending:Ft}));vt.rotation.set(.34+V*.47,.2+V*.39,V*.76),U.push(vt),p.add(vt)}const k=520,F=new Float32Array(k*3),O=new Float32Array(k*3),Z=new Float32Array(k*3),$=new Ht(7979007),it=new Ht(14732287);for(let V=0;V<k;V++){const at=t()*Math.PI*2,vt=tt(t,-1,1),yt=Math.sqrt(1-vt*vt);O.set([Math.cos(at)*yt,vt,Math.sin(at)*yt],V*3);const bt=$.clone().lerp(it,t());Z.set([bt.r,bt.g,bt.b],V*3)}const mt=new ie;mt.setAttribute("position",new ee(F,3)),mt.setAttribute("color",new ee(Z,3));const Ct=new tn(mt,new Ye({size:.075,map:Ce(),alphaTest:.008,vertexColors:!0,transparent:!0,opacity:0,depthTest:!1,depthWrite:!1,blending:Ft})),et=new ie;et.setAttribute("position",new ee(new Float32Array(6),3));const Q=new Si(et,new Tn({color:16766122,transparent:!0,opacity:0,depthWrite:!1,blending:Ft})),q=new B(re(t),re(t)*.45,re(t)).normalize();p.add(Ct,...L,N,T,I,Q),p.userData.effect={orbitalPlane:T,holeA:S,holeB:A,remnantHole:w,trailA:M,trailB:C,mergerGlow:I,gasEcho:N,waveHalos:L,wavefronts:U,waveDust:Ct,waveDirections:O,recoilTrail:Q,recoilVector:q,gasRich:h.gasRich}}const x=o(h,m),u=c(h,m,f),d=h.visual==="black-hole-merger"?l_(n,m.position,{seedValue:Dt.seedValue,eventIndex:f}):null,b=p_(n,m.position,h.simulation,Dt.seedValue,f),v=l(h,m,x,d,f);Ci.push({...h,...x,civilizationNodeImpacts:v,civilizationImpacts:[],outcome:x.systemOutcome,waveSamples:u,gravityField:d,transientGravityField:b,group:p,sourceIndex:m.index,id:`${h.type}-${f}-${Dt.seed}`,label:h.label})}),si.rotation.copy(Pe.rotation),si.visible=!1}function z_(){const n=Ot("#cosmic-event-markers");n.innerHTML="",Ci.forEach(t=>{const e=document.createElement("button");e.type="button",e.className="event-marker",e.style.left=`${t.start/10}%`,e.style.setProperty("--event-color",t.color),e.setAttribute("aria-label",`${t.label}，${gh(t.start,Dt)}；${t.outcome}`),e.title=t.outcome,e.addEventListener("click",()=>{Cn=!1,Ot("#toggle-time").textContent="▶";const s={supernova:.14,nova:.2,kilonova:.28,pulsar:.54,"stellar-flare":.44,"tidal-disruption":.62,"stellar-collapse":.7,"black-hole-merger":.76}[t.visual]??.5;qs(t.start+t.duration*s,!0)}),n.appendChild(e)})}function k_(){F_();const n=un(Dt.seed,410),t=Dt.speciesCount,e=on.length/3,i=Math.min(720,e),s=new Uint16Array(i),r=new Float32Array(i*3),a=e/i;for(let c=0;c<i;c++){const h=Math.min(e-1,Math.floor((c+n()*.86)*a)),f=h*3,p=c*3;s[c]=h,r[p]=on[f],r[p+1]=on[f+1],r[p+2]=on[f+2]}an={start:390,end:Dt.cosmicFate.type==="heat-death"?710:1e3,step:1,habitatRemnantIndices:s,habitatPositions:r,adjacency:[],snapshots:[]};const o=[],l=Ot("#civilization-legend");l.innerHTML="";for(let c=0;c<t;c++){let h=Math.floor(n()*i),f=-1;for(let I=0;I<96;I++){const N=Math.floor(n()*i),L=N*3;let U=1/0;o.forEach(k=>{const F=k*3;U=Math.min(U,Math.hypot(r[L]-r[F],r[L+1]-r[F+1],r[L+2]-r[F+2]))}),U>f&&(f=U,h=N)}o.push(h);const p=s[h],m=p*3,_=new B(on[m],on[m+1],on[m+2]),x=El[c%El.length],u=new ie;u.setAttribute("position",new ee(new Float32Array(i*3),3)),u.setDrawRange(0,0);const d=new Ye({color:x,size:.24,map:Ce(),alphaTest:.012,transparent:!0,opacity:.98,depthWrite:!1,blending:Ft}),b=new tn(u,d);Pe.add(b),Bs.push(b);const v=n(),g=n(),T=tt(n,.72,1.36),S=tt(n,.68,1.32),A=t===1?0:c/(t-1),w=404+Math.round(A*72+n()*11),y=n()<.01,M=y?w+Math.round(tt(n,130,205)):1/0;rn.push({name:Sl[(Dt.seedValue+c)%Sl.length],color:x,home:_,homeNodeIndex:h,homeRemnantIndex:p,homeOffset:new B,hostRemnantIndices:new Uint16Array(i),hostOffsets:new Float32Array(i*3),displayCount:0,maxColonies:i,birth:w,highDimensional:y,ascensionAt:M,extinction:y?1001:Dt.cosmicFate.type==="heat-death"?710:1e3,aggression:v,cooperation:g,expansionRate:T,resilience:S});const C=`#${x.toString(16).padStart(6,"0")}`;l.insertAdjacentHTML("beforeend",`<div class="civilization-item" style="--species:${C}" data-species="${c}"><i></i><span>${rn[c].name}</span><b>未诞生</b></div>`)}}function Uh(){if(fn!=="generator")return;Dt=xh(),Th(Dt),Lh(),Ih(),Ot(".universe-data").scrollTop=0;const n=Ot("#creation-flash");n.classList.remove("is-flashing"),n.offsetWidth,n.classList.add("is-flashing"),document.querySelectorAll(".metric").forEach(t=>{t.style.animation="none",t.offsetWidth,t.style.animation=""})}function H_(){fn==="generator"&&(fn="explorer",document.body.classList.add("is-exploring"),Ot("#generator-view").classList.remove("is-active"),Ot("#explorer-view").classList.add("is-active"),Ot("#mode-label").textContent="深空航行中",Ot("#regenerate-top").style.opacity="0",Ot("#regenerate-top").style.pointerEvents="none",Ot("#civilization-panel").classList.remove("is-expanded"),Ot("#toggle-civilizations").setAttribute("aria-expanded","false"),Pe.visible=!0,Pe.scale.setScalar(.02),dn.enabled=!0,dn.target.set(0,0,0),Ae=0,Ot("#cosmic-timeline").value=Ae,qs(Ae,!0),C_(),Cn=!0,Ot("#toggle-time").textContent="Ⅱ",Ot("#toggle-time").setAttribute("aria-label","暂停时间"),Ve={type:"enter",start:performance.now(),duration:Qn?1:2100})}function G_(){fn==="explorer"&&(fn="generator",document.body.classList.remove("is-exploring"),Ot("#explorer-view").classList.remove("is-active"),Ot("#generator-view").classList.add("is-active"),Ot("#star-inspector").classList.remove("is-open"),Ot("#civilization-panel").classList.remove("is-expanded"),Ot("#toggle-civilizations").setAttribute("aria-expanded","false"),Ot("#mode-label").textContent="创世引擎在线",Ot("#regenerate-top").style.opacity="",Ot("#regenerate-top").style.pointerEvents="",Cn=!1,Ot("#toggle-time").textContent="▶",Ot("#toggle-time").setAttribute("aria-label","播放时间"),dn.enabled=!1,wn.visible=!1,ei.visible=!1,Ri.visible=!1,si.visible=!1,Ve={type:"leave",start:performance.now(),duration:Qn?1:1300})}function Il(n){return n===1?1:1-Math.pow(2,-10*n)}function Ul(n){return n<.5?4*n*n*n:1-Math.pow(-2*n+2,3)/2}function V_(n){if(!Ve)return;const t=Math.min(1,(n-Ve.start)/Ve.duration);if(Ve.type==="birth"){const e=Il(t);Te.scale.setScalar(e),Te.rotation.y=-.3+(1-e)*1.5}if(Ve.type==="enter"){const e=Ul(t);Te.scale.setScalar(Math.max(.001,1-e*1.5)),Te.rotation.z+=.018*(1-t),Pe.scale.setScalar(.02+Il(t)*.98),Sn.position.z=32-e*12,Sn.position.y=.5+e*4.2}if(Ve.type==="leave"){const e=Ul(t);Pe.scale.setScalar(1-e*.96),Te.scale.setScalar(e),Sn.position.z=20+e*12,Sn.position.y=4.7-e*4.2}t===1&&(Ve.type==="enter"&&(Te.visible=!1),Ve.type==="leave"&&(Pe.visible=!1,Te.visible=!0,Te.scale.setScalar(1)),Ve=null)}function W_(n){if(fn!=="explorer"||Ve||!ps||Ae<250||Ae>750)return;os.x=n.clientX/innerWidth*2-1,os.y=-(n.clientY/innerHeight)*2+1,Fo.setFromCamera(os,Sn);const t=Fo.intersectObject(ps);if(!t.length)return;const e=t[0].index,i=un(Dt.seed,e*31),s=["M4 V","K1 III","G2 V","F8 V","A3 V","B1 Ia"],r=s[Math.floor(i()*s.length)],o={M:[2400,3700],K:[3700,5200],G:[5200,6e3],F:[6e3,7500],A:[7500,1e4],B:[1e4,3e4]}[r[0]],l=Math.round(tt(i,o[0],o[1])),c=Math.floor(i()*13),h=i()<Dt.lifeProbability?"候选信号":"未检出";Ot("#star-name").textContent=`RU-${String(e).padStart(5,"0")}`,Ot("#star-type").textContent=r,Ot("#star-temp").textContent=`${new Intl.NumberFormat("zh-CN").format(l)} K`,Ot("#star-planets").textContent=c,Ot("#star-life").textContent=h,Ot("#star-life").style.color=h==="候选信号"?"var(--accent)":"",Ot("#star-inspector").classList.add("is-open")}function X_(n){Ae+=n*V0(Ae)*Dh}function q_(){if(fn!=="explorer")return;const n=Ot("#civilization-panel"),t=!n.classList.contains("is-expanded");n.classList.toggle("is-expanded",t),Ot("#toggle-civilizations").setAttribute("aria-expanded",String(t))}function Fl(){return{mode:fn,epochEffectsGroup:wn,primordialParticles:No,primordialFactors:Oo,primordialDirections:Rs,expansionStreaks:Bo,expansionDirections:ts,bangCore:Nr,shockwaves:wh,renderer:Pn,scene:Qr,clickableStars:ps,originalGalaxyPositions:zo,stellarGravityState:is,universe:Dt,transition:Ve,galaxyGroup:Pe,starDeathThresholds:ko,originalGalaxyColors:Ph,cosmicEvents:Ci,remnantGroup:ei,stellarRemnants:Wr,originalRemnantPositions:on,remnantDynamics:xn,blackHoleRemnants:Vr,heatDeathGroup:Ri,coldPhotons:zs,originalPhotonPositions:Rh,originalPhotonColors:Ch,cosmicFateGroup:Ti,fateBubble:cs,fateGlow:Ds,cosmicEventGroup:si}}function $_(n){const t=Dt.cosmicFate.type==="heat-death"?0:ot.smoothstep(Ae,Dt.cosmicFate.onsetAt,995);n.forEach((e,i)=>{const s=Bs[i],r=rn[i];s.visible=e.alive&&e.count>0,s.material.opacity=(e.ascended?.88:.98)*(1-t),s.material.size=e.ascended?.31:.24,s.material.color.setHex(e.ascended?15325183:r.color)})}function qs(n,t=!1){const e=G0(n,Dt,C0(Dt));if(Ae=e.position,D_(e),!ps)return;g_(Ae,Fl());const i=v_(an,Ae);n_(i,{civilizationSimulation:an,civilizationData:rn,civilizationGroups:Bs}),i_({clickableStars:ps,stellarRemnants:Wr,remnantDynamics:xn,cosmicPosition:Ae,civilizationData:rn,civilizationGroups:Bs}),_i=S_(Ae,i,rn,Ci),$_(_i),L_({position:Ae,simulationState:i,runtimeState:_i,civilizationData:rn}),N_(i,rn);const s=_i.filter(c=>c.alive).length,r=_i.filter(c=>c.ascended).length,a=E_(i,_i,rn.length),o=__(Ae,Fl()),l=W0({position:Ae,label:e.label,universe:Dt,activeEvent:o,activeRelationship:a,ascendedSpecies:r,activeSpecies:s,civilizationData:rn});I_(l,t)}function Fh(n){requestAnimationFrame(Fh);const t=Math.min(.05,(n-Ll)/1e3);if(Ll=n,V_(n),Rr.lerp(os,.04),fn==="generator"&&Te.visible&&!Qn&&(Te.rotation.y+=45e-5,Te.rotation.x=.15+Rr.y*.045,Te.position.x=Rr.x*.42,Te.position.y=Rr.y*.25),fn==="explorer"){Cn&&!Ve&&(X_(t),Ae>=1e3&&(Ae=1e3,Cn=!1,Ot("#toggle-time").textContent="▶",Ot("#toggle-time").setAttribute("aria-label","播放时间")),qs(Ae)),dn.update(),wn.position.set(0,0,0),Ri.visible&&!Qn&&(zs.rotation.y+=35e-6,zs.rotation.x+=9e-6),Ti.visible&&!Qn&&(cs.rotation.y+=.0014,cs.rotation.x-=7e-4,Ds.material.rotation=n*8e-5),Qn||Vr.forEach((i,s)=>{i.visible&&(Qi(i,n,i.userData.spinDirection||(s%2?-1:1)),i.userData.hawkingGlow.material.rotation=n*(25e-6+s*1e-6))}),x_(n,{cosmicEventGroup:si,prefersReducedMotion:Qn,cosmicEvents:Ci,camera:Sn}),dn.enabled||(Pe.rotation.y+=3e-4);const e=n*12e-5;Ot("#coord-x").textContent=`${Math.sin(e)<0?"−":"+"}${Math.abs(Math.sin(e)*9).toFixed(2)}`,Ot("#coord-y").textContent=`${Math.cos(e*.7)<0?"−":"+"}${Math.abs(Math.cos(e*.7)*9).toFixed(2)}`,Ot("#coord-z").textContent=`${Math.sin(e*.3)<0?"−":"+"}${Math.abs(Math.sin(e*.3)*3).toFixed(2)}`}Pn.render(Qr,Sn)}window.addEventListener("pointermove",n=>{os.x=n.clientX/innerWidth*2-1,os.y=-(n.clientY/innerHeight)*2+1;const t=Ot("#cursor");t.style.left=`${n.clientX}px`,t.style.top=`${n.clientY}px`,t.style.opacity="1"});window.addEventListener("resize",()=>{Sn.aspect=innerWidth/innerHeight,Sn.updateProjectionMatrix(),Pn.setSize(innerWidth,innerHeight),Pn.setPixelRatio(Math.min(devicePixelRatio,2))});rc.addEventListener("click",W_);Ot("#regenerate-top").addEventListener("click",Uh);Ot("#enter-universe").addEventListener("click",H_);Ot("#close-inspector").addEventListener("click",()=>Ot("#star-inspector").classList.remove("is-open"));Ot("#toggle-civilizations").addEventListener("click",q_);Ot("#toggle-time").addEventListener("click",()=>{Ae>=1e3&&qs(0,!0),Cn=!Cn,Ot("#toggle-time").textContent=Cn?"Ⅱ":"▶",Ot("#toggle-time").setAttribute("aria-label",Cn?"暂停时间":"播放时间")});const Li=Ot("#cosmic-timeline"),Xr=Li.closest(".range-wrap");function Nh(){Xr.classList.add("is-scrubbing"),Ah(Number(Li.value))}function ta(){Xr.classList.contains("is-scrubbing")&&(Xr.classList.remove("is-scrubbing"),P_())}Li.addEventListener("pointerdown",Nh);window.addEventListener("pointerup",ta);window.addEventListener("pointercancel",ta);Li.addEventListener("keydown",n=>{["ArrowLeft","ArrowRight","Home","End","PageUp","PageDown"].includes(n.key)&&Nh()});Li.addEventListener("keyup",ta);Li.addEventListener("blur",ta);Li.addEventListener("input",n=>{Cn=!1,Ot("#toggle-time").textContent="▶",qs(n.target.value,!0),Xr.classList.contains("is-scrubbing")&&Ah(Number(n.target.value))});document.querySelectorAll(".speed-controls button").forEach(n=>{n.addEventListener("click",()=>{Dh=Number(n.dataset.speed),document.querySelectorAll(".speed-controls button").forEach(t=>{const e=t===n;t.classList.toggle("is-active",e),t.setAttribute("aria-pressed",String(e))})})});document.addEventListener("keydown",n=>{if(n.key.toLowerCase()==="r"&&fn==="generator"&&Uh(),n.key==="Escape"&&fn==="explorer"){const t=Ot("#civilization-panel");t.classList.contains("is-expanded")?(t.classList.remove("is-expanded"),Ot("#toggle-civilizations").setAttribute("aria-expanded","false")):G_()}});Dt=xh();Th(Dt);Lh();Ih();Fh(performance.now());
