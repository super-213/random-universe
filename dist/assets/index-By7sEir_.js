(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function e(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(s){if(s.ep)return;s.ep=!0;const r=e(s);fetch(s.href,r)}})();const Xo="180",as={ROTATE:0,DOLLY:1,PAN:2},is={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Yh=0,_c=1,qh=2,kl=1,$h=2,zn=3,oi=0,Ze=1,kn=2,ii=0,Ai=1,Bt=2,xc=3,Mc=4,jh=5,yi=100,Kh=101,Zh=102,Jh=103,Qh=104,tu=200,eu=201,nu=202,iu=203,Wa=204,Xa=205,su=206,ru=207,au=208,ou=209,cu=210,lu=211,hu=212,uu=213,du=214,Ya=0,qa=1,$a=2,ds=3,ja=4,Ka=5,Za=6,Ja=7,Hl=0,fu=1,pu=2,si=0,mu=1,gu=2,_u=3,Gl=4,xu=5,Mu=6,vu=7,Vl=300,fs=301,ps=302,Qa=303,to=304,Kr=306,eo=1e3,Ei=1001,no=1002,wn=1003,yu=1004,tr=1005,En=1006,oa=1007,ni=1008,Wn=1009,Wl=1010,Xl=1011,Ns=1012,Yo=1013,Ri=1014,Hn=1015,Ws=1016,qo=1017,$o=1018,Os=1020,Yl=35902,ql=35899,$l=1021,jl=1022,bn=1023,Bs=1026,zs=1027,Kl=1028,jo=1029,Zl=1030,Ko=1031,Zo=1033,Ur=33776,Fr=33777,Nr=33778,Or=33779,io=35840,so=35841,ro=35842,ao=35843,oo=36196,co=37492,lo=37496,ho=37808,uo=37809,fo=37810,po=37811,mo=37812,go=37813,_o=37814,xo=37815,Mo=37816,vo=37817,yo=37818,So=37819,Eo=37820,bo=37821,To=36492,Ao=36494,wo=36495,Ro=36283,Co=36284,Po=36285,Do=36286,Su=3200,Eu=3201,bu=0,Tu=1,ti="",Ne="srgb",ms="srgb-linear",Gr="linear",pe="srgb",Ni=7680,vc=519,Au=512,wu=513,Ru=514,Jl=515,Cu=516,Pu=517,Du=518,Lu=519,Lo=35044,yc="300 es",Dn=2e3,Vr=2001;class Li{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(e)===-1&&i[t].push(e)}hasEventListener(t,e){const i=this._listeners;return i===void 0?!1:i[t]!==void 0&&i[t].indexOf(e)!==-1}removeEventListener(t,e){const i=this._listeners;if(i===void 0)return;const s=i[t];if(s!==void 0){const r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){const e=this._listeners;if(e===void 0)return;const i=e[t.type];if(i!==void 0){t.target=this;const s=i.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,t);t.target=null}}}const Oe=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Sc=1234567;const Is=Math.PI/180,ks=180/Math.PI;function Gn(){const n=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Oe[n&255]+Oe[n>>8&255]+Oe[n>>16&255]+Oe[n>>24&255]+"-"+Oe[t&255]+Oe[t>>8&255]+"-"+Oe[t>>16&15|64]+Oe[t>>24&255]+"-"+Oe[e&63|128]+Oe[e>>8&255]+"-"+Oe[e>>16&255]+Oe[e>>24&255]+Oe[i&255]+Oe[i>>8&255]+Oe[i>>16&255]+Oe[i>>24&255]).toLowerCase()}function Jt(n,t,e){return Math.max(t,Math.min(e,n))}function Jo(n,t){return(n%t+t)%t}function Iu(n,t,e,i,s){return i+(n-t)*(s-i)/(e-t)}function Uu(n,t,e){return n!==t?(e-n)/(t-n):0}function Us(n,t,e){return(1-e)*n+e*t}function Fu(n,t,e,i){return Us(n,t,1-Math.exp(-e*i))}function Nu(n,t=1){return t-Math.abs(Jo(n,t*2)-t)}function Ou(n,t,e){return n<=t?0:n>=e?1:(n=(n-t)/(e-t),n*n*(3-2*n))}function Bu(n,t,e){return n<=t?0:n>=e?1:(n=(n-t)/(e-t),n*n*n*(n*(n*6-15)+10))}function zu(n,t){return n+Math.floor(Math.random()*(t-n+1))}function ku(n,t){return n+Math.random()*(t-n)}function Hu(n){return n*(.5-Math.random())}function Gu(n){n!==void 0&&(Sc=n);let t=Sc+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function Vu(n){return n*Is}function Wu(n){return n*ks}function Xu(n){return(n&n-1)===0&&n!==0}function Yu(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function qu(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function $u(n,t,e,i,s){const r=Math.cos,a=Math.sin,o=r(e/2),l=a(e/2),c=r((t+i)/2),u=a((t+i)/2),d=r((t-i)/2),p=a((t-i)/2),g=r((i-t)/2),x=a((i-t)/2);switch(s){case"XYX":n.set(o*u,l*d,l*p,o*c);break;case"YZY":n.set(l*p,o*u,l*d,o*c);break;case"ZXZ":n.set(l*d,l*p,o*u,o*c);break;case"XZX":n.set(o*u,l*x,l*g,o*c);break;case"YXY":n.set(l*g,o*u,l*x,o*c);break;case"ZYZ":n.set(l*x,l*g,o*u,o*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Sn(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function de(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}const rt={DEG2RAD:Is,RAD2DEG:ks,generateUUID:Gn,clamp:Jt,euclideanModulo:Jo,mapLinear:Iu,inverseLerp:Uu,lerp:Us,damp:Fu,pingpong:Nu,smoothstep:Ou,smootherstep:Bu,randInt:zu,randFloat:ku,randFloatSpread:Hu,seededRandom:Gu,degToRad:Vu,radToDeg:Wu,isPowerOfTwo:Xu,ceilPowerOfTwo:Yu,floorPowerOfTwo:qu,setQuaternionFromProperEuler:$u,normalize:de,denormalize:Sn};class Xt{constructor(t=0,e=0){Xt.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,i=this.y,s=t.elements;return this.x=s[0]*e+s[3]*i+s[6],this.y=s[1]*e+s[4]*i+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Jt(this.x,t.x,e.x),this.y=Jt(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=Jt(this.x,t,e),this.y=Jt(this.y,t,e),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Jt(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(Jt(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y;return e*e+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const i=Math.cos(e),s=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*i-a*s+t.x,this.y=r*s+a*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class ci{constructor(t=0,e=0,i=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=i,this._w=s}static slerpFlat(t,e,i,s,r,a,o){let l=i[s+0],c=i[s+1],u=i[s+2],d=i[s+3];const p=r[a+0],g=r[a+1],x=r[a+2],v=r[a+3];if(o===0){t[e+0]=l,t[e+1]=c,t[e+2]=u,t[e+3]=d;return}if(o===1){t[e+0]=p,t[e+1]=g,t[e+2]=x,t[e+3]=v;return}if(d!==v||l!==p||c!==g||u!==x){let h=1-o;const f=l*p+c*g+u*x+d*v,m=f>=0?1:-1,_=1-f*f;if(_>Number.EPSILON){const T=Math.sqrt(_),S=Math.atan2(T,f*m);h=Math.sin(h*S)/T,o=Math.sin(o*S)/T}const M=o*m;if(l=l*h+p*M,c=c*h+g*M,u=u*h+x*M,d=d*h+v*M,h===1-o){const T=1/Math.sqrt(l*l+c*c+u*u+d*d);l*=T,c*=T,u*=T,d*=T}}t[e]=l,t[e+1]=c,t[e+2]=u,t[e+3]=d}static multiplyQuaternionsFlat(t,e,i,s,r,a){const o=i[s],l=i[s+1],c=i[s+2],u=i[s+3],d=r[a],p=r[a+1],g=r[a+2],x=r[a+3];return t[e]=o*x+u*d+l*g-c*p,t[e+1]=l*x+u*p+c*d-o*g,t[e+2]=c*x+u*g+o*p-l*d,t[e+3]=u*x-o*d-l*p-c*g,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,i,s){return this._x=t,this._y=e,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const i=t._x,s=t._y,r=t._z,a=t._order,o=Math.cos,l=Math.sin,c=o(i/2),u=o(s/2),d=o(r/2),p=l(i/2),g=l(s/2),x=l(r/2);switch(a){case"XYZ":this._x=p*u*d+c*g*x,this._y=c*g*d-p*u*x,this._z=c*u*x+p*g*d,this._w=c*u*d-p*g*x;break;case"YXZ":this._x=p*u*d+c*g*x,this._y=c*g*d-p*u*x,this._z=c*u*x-p*g*d,this._w=c*u*d+p*g*x;break;case"ZXY":this._x=p*u*d-c*g*x,this._y=c*g*d+p*u*x,this._z=c*u*x+p*g*d,this._w=c*u*d-p*g*x;break;case"ZYX":this._x=p*u*d-c*g*x,this._y=c*g*d+p*u*x,this._z=c*u*x-p*g*d,this._w=c*u*d+p*g*x;break;case"YZX":this._x=p*u*d+c*g*x,this._y=c*g*d+p*u*x,this._z=c*u*x-p*g*d,this._w=c*u*d-p*g*x;break;case"XZY":this._x=p*u*d-c*g*x,this._y=c*g*d-p*u*x,this._z=c*u*x+p*g*d,this._w=c*u*d+p*g*x;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const i=e/2,s=Math.sin(i);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,i=e[0],s=e[4],r=e[8],a=e[1],o=e[5],l=e[9],c=e[2],u=e[6],d=e[10],p=i+o+d;if(p>0){const g=.5/Math.sqrt(p+1);this._w=.25/g,this._x=(u-l)*g,this._y=(r-c)*g,this._z=(a-s)*g}else if(i>o&&i>d){const g=2*Math.sqrt(1+i-o-d);this._w=(u-l)/g,this._x=.25*g,this._y=(s+a)/g,this._z=(r+c)/g}else if(o>d){const g=2*Math.sqrt(1+o-i-d);this._w=(r-c)/g,this._x=(s+a)/g,this._y=.25*g,this._z=(l+u)/g}else{const g=2*Math.sqrt(1+d-i-o);this._w=(a-s)/g,this._x=(r+c)/g,this._y=(l+u)/g,this._z=.25*g}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let i=t.dot(e)+1;return i<1e-8?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Jt(this.dot(t),-1,1)))}rotateTowards(t,e){const i=this.angleTo(t);if(i===0)return this;const s=Math.min(1,e/i);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const i=t._x,s=t._y,r=t._z,a=t._w,o=e._x,l=e._y,c=e._z,u=e._w;return this._x=i*u+a*o+s*c-r*l,this._y=s*u+a*l+r*o-i*c,this._z=r*u+a*c+i*l-s*o,this._w=a*u-i*o-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const i=this._x,s=this._y,r=this._z,a=this._w;let o=a*t._w+i*t._x+s*t._y+r*t._z;if(o<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,o=-o):this.copy(t),o>=1)return this._w=a,this._x=i,this._y=s,this._z=r,this;const l=1-o*o;if(l<=Number.EPSILON){const g=1-e;return this._w=g*a+e*this._w,this._x=g*i+e*this._x,this._y=g*s+e*this._y,this._z=g*r+e*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,o),d=Math.sin((1-e)*u)/c,p=Math.sin(e*u)/c;return this._w=a*d+this._w*p,this._x=i*d+this._x*p,this._y=s*d+this._y*p,this._z=r*d+this._z*p,this._onChangeCallback(),this}slerpQuaternions(t,e,i){return this.copy(t).slerp(e,i)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class B{constructor(t=0,e=0,i=0){B.prototype.isVector3=!0,this.x=t,this.y=e,this.z=i}set(t,e,i){return i===void 0&&(i=this.z),this.x=t,this.y=e,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Ec.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Ec.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,i=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*i+r[6]*s,this.y=r[1]*e+r[4]*i+r[7]*s,this.z=r[2]*e+r[5]*i+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,i=this.y,s=this.z,r=t.elements,a=1/(r[3]*e+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*i+r[8]*s+r[12])*a,this.y=(r[1]*e+r[5]*i+r[9]*s+r[13])*a,this.z=(r[2]*e+r[6]*i+r[10]*s+r[14])*a,this}applyQuaternion(t){const e=this.x,i=this.y,s=this.z,r=t.x,a=t.y,o=t.z,l=t.w,c=2*(a*s-o*i),u=2*(o*e-r*s),d=2*(r*i-a*e);return this.x=e+l*c+a*d-o*u,this.y=i+l*u+o*c-r*d,this.z=s+l*d+r*u-a*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,i=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*i+r[8]*s,this.y=r[1]*e+r[5]*i+r[9]*s,this.z=r[2]*e+r[6]*i+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Jt(this.x,t.x,e.x),this.y=Jt(this.y,t.y,e.y),this.z=Jt(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=Jt(this.x,t,e),this.y=Jt(this.y,t,e),this.z=Jt(this.z,t,e),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Jt(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const i=t.x,s=t.y,r=t.z,a=e.x,o=e.y,l=e.z;return this.x=s*l-r*o,this.y=r*a-i*l,this.z=i*o-s*a,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const i=t.dot(this)/e;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return ca.copy(this).projectOnVector(t),this.sub(ca)}reflect(t){return this.sub(ca.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(Jt(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y,s=this.z-t.z;return e*e+i*i+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,i){const s=Math.sin(e)*t;return this.x=s*Math.sin(i),this.y=Math.cos(e)*t,this.z=s*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,i){return this.x=t*Math.sin(e),this.y=i,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=i,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,i=Math.sqrt(1-e*e);return this.x=i*Math.cos(t),this.y=e,this.z=i*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const ca=new B,Ec=new ci;class Kt{constructor(t,e,i,s,r,a,o,l,c){Kt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,i,s,r,a,o,l,c)}set(t,e,i,s,r,a,o,l,c){const u=this.elements;return u[0]=t,u[1]=s,u[2]=o,u[3]=e,u[4]=r,u[5]=l,u[6]=i,u[7]=a,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],this}extractBasis(t,e,i){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,s=e.elements,r=this.elements,a=i[0],o=i[3],l=i[6],c=i[1],u=i[4],d=i[7],p=i[2],g=i[5],x=i[8],v=s[0],h=s[3],f=s[6],m=s[1],_=s[4],M=s[7],T=s[2],S=s[5],w=s[8];return r[0]=a*v+o*m+l*T,r[3]=a*h+o*_+l*S,r[6]=a*f+o*M+l*w,r[1]=c*v+u*m+d*T,r[4]=c*h+u*_+d*S,r[7]=c*f+u*M+d*w,r[2]=p*v+g*m+x*T,r[5]=p*h+g*_+x*S,r[8]=p*f+g*M+x*w,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],u=t[8];return e*a*u-e*o*c-i*r*u+i*o*l+s*r*c-s*a*l}invert(){const t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],u=t[8],d=u*a-o*c,p=o*l-u*r,g=c*r-a*l,x=e*d+i*p+s*g;if(x===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/x;return t[0]=d*v,t[1]=(s*c-u*i)*v,t[2]=(o*i-s*a)*v,t[3]=p*v,t[4]=(u*e-s*l)*v,t[5]=(s*r-o*e)*v,t[6]=g*v,t[7]=(i*l-c*e)*v,t[8]=(a*e-i*r)*v,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,i,s,r,a,o){const l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*a+c*o)+a+t,-s*c,s*l,-s*(-c*a+l*o)+o+e,0,0,1),this}scale(t,e){return this.premultiply(la.makeScale(t,e)),this}rotate(t){return this.premultiply(la.makeRotation(-t)),this}translate(t,e){return this.premultiply(la.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,i,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,i=t.elements;for(let s=0;s<9;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<9;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const la=new Kt;function Ql(n){for(let t=n.length-1;t>=0;--t)if(n[t]>=65535)return!0;return!1}function Wr(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function ju(){const n=Wr("canvas");return n.style.display="block",n}const bc={};function Hs(n){n in bc||(bc[n]=!0,console.warn(n))}function Ku(n,t,e){return new Promise(function(i,s){function r(){switch(n.clientWaitSync(t,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:i()}}setTimeout(r,e)})}const Tc=new Kt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Ac=new Kt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Zu(){const n={enabled:!0,workingColorSpace:ms,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===pe&&(s.r=Vn(s.r),s.g=Vn(s.g),s.b=Vn(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===pe&&(s.r=os(s.r),s.g=os(s.g),s.b=os(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===ti?Gr:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return Hs("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),n.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return Hs("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),n.colorSpaceToWorking(s,r)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[ms]:{primaries:t,whitePoint:i,transfer:Gr,toXYZ:Tc,fromXYZ:Ac,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:Ne},outputColorSpaceConfig:{drawingBufferColorSpace:Ne}},[Ne]:{primaries:t,whitePoint:i,transfer:pe,toXYZ:Tc,fromXYZ:Ac,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:Ne}}}),n}const le=Zu();function Vn(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function os(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let Oi;class Ju{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let i;if(t instanceof HTMLCanvasElement)i=t;else{Oi===void 0&&(Oi=Wr("canvas")),Oi.width=t.width,Oi.height=t.height;const s=Oi.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),i=Oi}return i.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=Wr("canvas");e.width=t.width,e.height=t.height;const i=e.getContext("2d");i.drawImage(t,0,0,t.width,t.height);const s=i.getImageData(0,0,t.width,t.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=Vn(r[a]/255)*255;return i.putImageData(s,0,0),e}else if(t.data){const e=t.data.slice(0);for(let i=0;i<e.length;i++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[i]=Math.floor(Vn(e[i]/255)*255):e[i]=Vn(e[i]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let Qu=0;class Qo{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Qu++}),this.uuid=Gn(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):e instanceof VideoFrame?t.set(e.displayHeight,e.displayWidth,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(ha(s[a].image)):r.push(ha(s[a]))}else r=ha(s);i.url=r}return e||(t.images[this.uuid]=i),i}}function ha(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?Ju.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let td=0;const ua=new B;class Ye extends Li{constructor(t=Ye.DEFAULT_IMAGE,e=Ye.DEFAULT_MAPPING,i=Ei,s=Ei,r=En,a=ni,o=bn,l=Wn,c=Ye.DEFAULT_ANISOTROPY,u=ti){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:td++}),this.uuid=Gn(),this.name="",this.source=new Qo(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Xt(0,0),this.repeat=new Xt(1,1),this.center=new Xt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Kt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(ua).x}get height(){return this.source.getSize(ua).y}get depth(){return this.source.getSize(ua).z}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const e in t){const i=t[e];if(i===void 0){console.warn(`THREE.Texture.setValues(): parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){console.warn(`THREE.Texture.setValues(): property '${e}' does not exist.`);continue}s&&i&&s.isVector2&&i.isVector2||s&&i&&s.isVector3&&i.isVector3||s&&i&&s.isMatrix3&&i.isMatrix3?s.copy(i):this[e]=i}}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),e||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Vl)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case eo:t.x=t.x-Math.floor(t.x);break;case Ei:t.x=t.x<0?0:1;break;case no:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case eo:t.y=t.y-Math.floor(t.y);break;case Ei:t.y=t.y<0?0:1;break;case no:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Ye.DEFAULT_IMAGE=null;Ye.DEFAULT_MAPPING=Vl;Ye.DEFAULT_ANISOTROPY=1;class Ee{constructor(t=0,e=0,i=0,s=1){Ee.prototype.isVector4=!0,this.x=t,this.y=e,this.z=i,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,i,s){return this.x=t,this.y=e,this.z=i,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,i=this.y,s=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*i+a[8]*s+a[12]*r,this.y=a[1]*e+a[5]*i+a[9]*s+a[13]*r,this.z=a[2]*e+a[6]*i+a[10]*s+a[14]*r,this.w=a[3]*e+a[7]*i+a[11]*s+a[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,i,s,r;const l=t.elements,c=l[0],u=l[4],d=l[8],p=l[1],g=l[5],x=l[9],v=l[2],h=l[6],f=l[10];if(Math.abs(u-p)<.01&&Math.abs(d-v)<.01&&Math.abs(x-h)<.01){if(Math.abs(u+p)<.1&&Math.abs(d+v)<.1&&Math.abs(x+h)<.1&&Math.abs(c+g+f-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const _=(c+1)/2,M=(g+1)/2,T=(f+1)/2,S=(u+p)/4,w=(d+v)/4,D=(x+h)/4;return _>M&&_>T?_<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(_),s=S/i,r=w/i):M>T?M<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(M),i=S/s,r=D/s):T<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(T),i=w/r,s=D/r),this.set(i,s,r,e),this}let m=Math.sqrt((h-x)*(h-x)+(d-v)*(d-v)+(p-u)*(p-u));return Math.abs(m)<.001&&(m=1),this.x=(h-x)/m,this.y=(d-v)/m,this.z=(p-u)/m,this.w=Math.acos((c+g+f-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Jt(this.x,t.x,e.x),this.y=Jt(this.y,t.y,e.y),this.z=Jt(this.z,t.z,e.z),this.w=Jt(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=Jt(this.x,t,e),this.y=Jt(this.y,t,e),this.z=Jt(this.z,t,e),this.w=Jt(this.w,t,e),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Jt(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this.w=t.w+(e.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class ed extends Li{constructor(t=1,e=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:En,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},i),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=i.depth,this.scissor=new Ee(0,0,t,e),this.scissorTest=!1,this.viewport=new Ee(0,0,t,e);const s={width:t,height:e,depth:i.depth},r=new Ye(s);this.textures=[];const a=i.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}_setTextureOptions(t={}){const e={minFilter:En,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,i=1){if(this.width!==t||this.height!==e||this.depth!==i){this.width=t,this.height=e,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=i,this.textures[s].isArrayTexture=this.textures[s].image.depth>1;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,i=t.textures.length;e<i;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;const s=Object.assign({},t.textures[e].image);this.textures[e].source=new Qo(s)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ci extends ed{constructor(t=1,e=1,i={}){super(t,e,i),this.isWebGLRenderTarget=!0}}class th extends Ye{constructor(t=null,e=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=wn,this.minFilter=wn,this.wrapR=Ei,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class nd extends Ye{constructor(t=null,e=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=wn,this.minFilter=wn,this.wrapR=Ei,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Xs{constructor(t=new B(1/0,1/0,1/0),e=new B(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e+=3)this.expandByPoint(xn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,i=t.count;e<i;e++)this.expandByPoint(xn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const i=xn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const i=t.geometry;if(i!==void 0){const r=i.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,xn):xn.fromBufferAttribute(r,a),xn.applyMatrix4(t.matrixWorld),this.expandByPoint(xn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),er.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),er.copy(i.boundingBox)),er.applyMatrix4(t.matrixWorld),this.union(er)}const s=t.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,xn),xn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,i;return t.normal.x>0?(e=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),e<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(ys),nr.subVectors(this.max,ys),Bi.subVectors(t.a,ys),zi.subVectors(t.b,ys),ki.subVectors(t.c,ys),Yn.subVectors(zi,Bi),qn.subVectors(ki,zi),di.subVectors(Bi,ki);let e=[0,-Yn.z,Yn.y,0,-qn.z,qn.y,0,-di.z,di.y,Yn.z,0,-Yn.x,qn.z,0,-qn.x,di.z,0,-di.x,-Yn.y,Yn.x,0,-qn.y,qn.x,0,-di.y,di.x,0];return!da(e,Bi,zi,ki,nr)||(e=[1,0,0,0,1,0,0,0,1],!da(e,Bi,zi,ki,nr))?!1:(ir.crossVectors(Yn,qn),e=[ir.x,ir.y,ir.z],da(e,Bi,zi,ki,nr))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,xn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(xn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Un[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Un[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Un[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Un[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Un[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Un[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Un[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Un[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Un),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const Un=[new B,new B,new B,new B,new B,new B,new B,new B],xn=new B,er=new Xs,Bi=new B,zi=new B,ki=new B,Yn=new B,qn=new B,di=new B,ys=new B,nr=new B,ir=new B,fi=new B;function da(n,t,e,i,s){for(let r=0,a=n.length-3;r<=a;r+=3){fi.fromArray(n,r);const o=s.x*Math.abs(fi.x)+s.y*Math.abs(fi.y)+s.z*Math.abs(fi.z),l=t.dot(fi),c=e.dot(fi),u=i.dot(fi);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}const id=new Xs,Ss=new B,fa=new B;class Ys{constructor(t=new B,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const i=this.center;e!==void 0?i.copy(e):id.setFromPoints(t).getCenter(i);let s=0;for(let r=0,a=t.length;r<a;r++)s=Math.max(s,i.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const i=this.center.distanceToSquared(t);return e.copy(t),i>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Ss.subVectors(t,this.center);const e=Ss.lengthSq();if(e>this.radius*this.radius){const i=Math.sqrt(e),s=(i-this.radius)*.5;this.center.addScaledVector(Ss,s/i),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(fa.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Ss.copy(t.center).add(fa)),this.expandByPoint(Ss.copy(t.center).sub(fa))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}const Fn=new B,pa=new B,sr=new B,$n=new B,ma=new B,rr=new B,ga=new B;class qs{constructor(t=new B,e=new B(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Fn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const i=e.dot(this.direction);return i<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=Fn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Fn.copy(this.origin).addScaledVector(this.direction,e),Fn.distanceToSquared(t))}distanceSqToSegment(t,e,i,s){pa.copy(t).add(e).multiplyScalar(.5),sr.copy(e).sub(t).normalize(),$n.copy(this.origin).sub(pa);const r=t.distanceTo(e)*.5,a=-this.direction.dot(sr),o=$n.dot(this.direction),l=-$n.dot(sr),c=$n.lengthSq(),u=Math.abs(1-a*a);let d,p,g,x;if(u>0)if(d=a*l-o,p=a*o-l,x=r*u,d>=0)if(p>=-x)if(p<=x){const v=1/u;d*=v,p*=v,g=d*(d+a*p+2*o)+p*(a*d+p+2*l)+c}else p=r,d=Math.max(0,-(a*p+o)),g=-d*d+p*(p+2*l)+c;else p=-r,d=Math.max(0,-(a*p+o)),g=-d*d+p*(p+2*l)+c;else p<=-x?(d=Math.max(0,-(-a*r+o)),p=d>0?-r:Math.min(Math.max(-r,-l),r),g=-d*d+p*(p+2*l)+c):p<=x?(d=0,p=Math.min(Math.max(-r,-l),r),g=p*(p+2*l)+c):(d=Math.max(0,-(a*r+o)),p=d>0?r:Math.min(Math.max(-r,-l),r),g=-d*d+p*(p+2*l)+c);else p=a>0?-r:r,d=Math.max(0,-(a*p+o)),g=-d*d+p*(p+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,d),s&&s.copy(pa).addScaledVector(sr,p),g}intersectSphere(t,e){Fn.subVectors(t.center,this.origin);const i=Fn.dot(this.direction),s=Fn.dot(Fn)-i*i,r=t.radius*t.radius;if(s>r)return null;const a=Math.sqrt(r-s),o=i-a,l=i+a;return l<0?null:o<0?this.at(l,e):this.at(o,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(t.normal)+t.constant)/e;return i>=0?i:null}intersectPlane(t,e){const i=this.distanceToPlane(t);return i===null?null:this.at(i,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let i,s,r,a,o,l;const c=1/this.direction.x,u=1/this.direction.y,d=1/this.direction.z,p=this.origin;return c>=0?(i=(t.min.x-p.x)*c,s=(t.max.x-p.x)*c):(i=(t.max.x-p.x)*c,s=(t.min.x-p.x)*c),u>=0?(r=(t.min.y-p.y)*u,a=(t.max.y-p.y)*u):(r=(t.max.y-p.y)*u,a=(t.min.y-p.y)*u),i>a||r>s||((r>i||isNaN(i))&&(i=r),(a<s||isNaN(s))&&(s=a),d>=0?(o=(t.min.z-p.z)*d,l=(t.max.z-p.z)*d):(o=(t.max.z-p.z)*d,l=(t.min.z-p.z)*d),i>l||o>s)||((o>i||i!==i)&&(i=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,e)}intersectsBox(t){return this.intersectBox(t,Fn)!==null}intersectTriangle(t,e,i,s,r){ma.subVectors(e,t),rr.subVectors(i,t),ga.crossVectors(ma,rr);let a=this.direction.dot(ga),o;if(a>0){if(s)return null;o=1}else if(a<0)o=-1,a=-a;else return null;$n.subVectors(this.origin,t);const l=o*this.direction.dot(rr.crossVectors($n,rr));if(l<0)return null;const c=o*this.direction.dot(ma.cross($n));if(c<0||l+c>a)return null;const u=-o*$n.dot(ga);return u<0?null:this.at(u/a,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ve{constructor(t,e,i,s,r,a,o,l,c,u,d,p,g,x,v,h){ve.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,i,s,r,a,o,l,c,u,d,p,g,x,v,h)}set(t,e,i,s,r,a,o,l,c,u,d,p,g,x,v,h){const f=this.elements;return f[0]=t,f[4]=e,f[8]=i,f[12]=s,f[1]=r,f[5]=a,f[9]=o,f[13]=l,f[2]=c,f[6]=u,f[10]=d,f[14]=p,f[3]=g,f[7]=x,f[11]=v,f[15]=h,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ve().fromArray(this.elements)}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],e[9]=i[9],e[10]=i[10],e[11]=i[11],e[12]=i[12],e[13]=i[13],e[14]=i[14],e[15]=i[15],this}copyPosition(t){const e=this.elements,i=t.elements;return e[12]=i[12],e[13]=i[13],e[14]=i[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,i){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(t,e,i){return this.set(t.x,e.x,i.x,0,t.y,e.y,i.y,0,t.z,e.z,i.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,i=t.elements,s=1/Hi.setFromMatrixColumn(t,0).length(),r=1/Hi.setFromMatrixColumn(t,1).length(),a=1/Hi.setFromMatrixColumn(t,2).length();return e[0]=i[0]*s,e[1]=i[1]*s,e[2]=i[2]*s,e[3]=0,e[4]=i[4]*r,e[5]=i[5]*r,e[6]=i[6]*r,e[7]=0,e[8]=i[8]*a,e[9]=i[9]*a,e[10]=i[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,i=t.x,s=t.y,r=t.z,a=Math.cos(i),o=Math.sin(i),l=Math.cos(s),c=Math.sin(s),u=Math.cos(r),d=Math.sin(r);if(t.order==="XYZ"){const p=a*u,g=a*d,x=o*u,v=o*d;e[0]=l*u,e[4]=-l*d,e[8]=c,e[1]=g+x*c,e[5]=p-v*c,e[9]=-o*l,e[2]=v-p*c,e[6]=x+g*c,e[10]=a*l}else if(t.order==="YXZ"){const p=l*u,g=l*d,x=c*u,v=c*d;e[0]=p+v*o,e[4]=x*o-g,e[8]=a*c,e[1]=a*d,e[5]=a*u,e[9]=-o,e[2]=g*o-x,e[6]=v+p*o,e[10]=a*l}else if(t.order==="ZXY"){const p=l*u,g=l*d,x=c*u,v=c*d;e[0]=p-v*o,e[4]=-a*d,e[8]=x+g*o,e[1]=g+x*o,e[5]=a*u,e[9]=v-p*o,e[2]=-a*c,e[6]=o,e[10]=a*l}else if(t.order==="ZYX"){const p=a*u,g=a*d,x=o*u,v=o*d;e[0]=l*u,e[4]=x*c-g,e[8]=p*c+v,e[1]=l*d,e[5]=v*c+p,e[9]=g*c-x,e[2]=-c,e[6]=o*l,e[10]=a*l}else if(t.order==="YZX"){const p=a*l,g=a*c,x=o*l,v=o*c;e[0]=l*u,e[4]=v-p*d,e[8]=x*d+g,e[1]=d,e[5]=a*u,e[9]=-o*u,e[2]=-c*u,e[6]=g*d+x,e[10]=p-v*d}else if(t.order==="XZY"){const p=a*l,g=a*c,x=o*l,v=o*c;e[0]=l*u,e[4]=-d,e[8]=c*u,e[1]=p*d+v,e[5]=a*u,e[9]=g*d-x,e[2]=x*d-g,e[6]=o*u,e[10]=v*d+p}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(sd,t,rd)}lookAt(t,e,i){const s=this.elements;return tn.subVectors(t,e),tn.lengthSq()===0&&(tn.z=1),tn.normalize(),jn.crossVectors(i,tn),jn.lengthSq()===0&&(Math.abs(i.z)===1?tn.x+=1e-4:tn.z+=1e-4,tn.normalize(),jn.crossVectors(i,tn)),jn.normalize(),ar.crossVectors(tn,jn),s[0]=jn.x,s[4]=ar.x,s[8]=tn.x,s[1]=jn.y,s[5]=ar.y,s[9]=tn.y,s[2]=jn.z,s[6]=ar.z,s[10]=tn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,s=e.elements,r=this.elements,a=i[0],o=i[4],l=i[8],c=i[12],u=i[1],d=i[5],p=i[9],g=i[13],x=i[2],v=i[6],h=i[10],f=i[14],m=i[3],_=i[7],M=i[11],T=i[15],S=s[0],w=s[4],D=s[8],E=s[12],b=s[1],P=s[5],C=s[9],L=s[13],F=s[2],U=s[6],N=s[10],G=s[14],z=s[3],Z=s[7],$=s[11],nt=s[15];return r[0]=a*S+o*b+l*F+c*z,r[4]=a*w+o*P+l*U+c*Z,r[8]=a*D+o*C+l*N+c*$,r[12]=a*E+o*L+l*G+c*nt,r[1]=u*S+d*b+p*F+g*z,r[5]=u*w+d*P+p*U+g*Z,r[9]=u*D+d*C+p*N+g*$,r[13]=u*E+d*L+p*G+g*nt,r[2]=x*S+v*b+h*F+f*z,r[6]=x*w+v*P+h*U+f*Z,r[10]=x*D+v*C+h*N+f*$,r[14]=x*E+v*L+h*G+f*nt,r[3]=m*S+_*b+M*F+T*z,r[7]=m*w+_*P+M*U+T*Z,r[11]=m*D+_*C+M*N+T*$,r[15]=m*E+_*L+M*G+T*nt,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[4],s=t[8],r=t[12],a=t[1],o=t[5],l=t[9],c=t[13],u=t[2],d=t[6],p=t[10],g=t[14],x=t[3],v=t[7],h=t[11],f=t[15];return x*(+r*l*d-s*c*d-r*o*p+i*c*p+s*o*g-i*l*g)+v*(+e*l*g-e*c*p+r*a*p-s*a*g+s*c*u-r*l*u)+h*(+e*c*d-e*o*g-r*a*d+i*a*g+r*o*u-i*c*u)+f*(-s*o*u-e*l*d+e*o*p+s*a*d-i*a*p+i*l*u)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,i){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=i),this}invert(){const t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],u=t[8],d=t[9],p=t[10],g=t[11],x=t[12],v=t[13],h=t[14],f=t[15],m=d*h*c-v*p*c+v*l*g-o*h*g-d*l*f+o*p*f,_=x*p*c-u*h*c-x*l*g+a*h*g+u*l*f-a*p*f,M=u*v*c-x*d*c+x*o*g-a*v*g-u*o*f+a*d*f,T=x*d*l-u*v*l-x*o*p+a*v*p+u*o*h-a*d*h,S=e*m+i*_+s*M+r*T;if(S===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const w=1/S;return t[0]=m*w,t[1]=(v*p*r-d*h*r-v*s*g+i*h*g+d*s*f-i*p*f)*w,t[2]=(o*h*r-v*l*r+v*s*c-i*h*c-o*s*f+i*l*f)*w,t[3]=(d*l*r-o*p*r-d*s*c+i*p*c+o*s*g-i*l*g)*w,t[4]=_*w,t[5]=(u*h*r-x*p*r+x*s*g-e*h*g-u*s*f+e*p*f)*w,t[6]=(x*l*r-a*h*r-x*s*c+e*h*c+a*s*f-e*l*f)*w,t[7]=(a*p*r-u*l*r+u*s*c-e*p*c-a*s*g+e*l*g)*w,t[8]=M*w,t[9]=(x*d*r-u*v*r-x*i*g+e*v*g+u*i*f-e*d*f)*w,t[10]=(a*v*r-x*o*r+x*i*c-e*v*c-a*i*f+e*o*f)*w,t[11]=(u*o*r-a*d*r-u*i*c+e*d*c+a*i*g-e*o*g)*w,t[12]=T*w,t[13]=(u*v*s-x*d*s+x*i*p-e*v*p-u*i*h+e*d*h)*w,t[14]=(x*o*s-a*v*s-x*i*l+e*v*l+a*i*h-e*o*h)*w,t[15]=(a*d*s-u*o*s+u*i*l-e*d*l-a*i*p+e*o*p)*w,this}scale(t){const e=this.elements,i=t.x,s=t.y,r=t.z;return e[0]*=i,e[4]*=s,e[8]*=r,e[1]*=i,e[5]*=s,e[9]*=r,e[2]*=i,e[6]*=s,e[10]*=r,e[3]*=i,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,i,s))}makeTranslation(t,e,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,i,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,e,-i,0,0,i,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,0,i,0,0,1,0,0,-i,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,0,i,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const i=Math.cos(e),s=Math.sin(e),r=1-i,a=t.x,o=t.y,l=t.z,c=r*a,u=r*o;return this.set(c*a+i,c*o-s*l,c*l+s*o,0,c*o+s*l,u*o+i,u*l-s*a,0,c*l-s*o,u*l+s*a,r*l*l+i,0,0,0,0,1),this}makeScale(t,e,i){return this.set(t,0,0,0,0,e,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,e,i,s,r,a){return this.set(1,i,r,0,t,1,a,0,e,s,1,0,0,0,0,1),this}compose(t,e,i){const s=this.elements,r=e._x,a=e._y,o=e._z,l=e._w,c=r+r,u=a+a,d=o+o,p=r*c,g=r*u,x=r*d,v=a*u,h=a*d,f=o*d,m=l*c,_=l*u,M=l*d,T=i.x,S=i.y,w=i.z;return s[0]=(1-(v+f))*T,s[1]=(g+M)*T,s[2]=(x-_)*T,s[3]=0,s[4]=(g-M)*S,s[5]=(1-(p+f))*S,s[6]=(h+m)*S,s[7]=0,s[8]=(x+_)*w,s[9]=(h-m)*w,s[10]=(1-(p+v))*w,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,i){const s=this.elements;let r=Hi.set(s[0],s[1],s[2]).length();const a=Hi.set(s[4],s[5],s[6]).length(),o=Hi.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],Mn.copy(this);const c=1/r,u=1/a,d=1/o;return Mn.elements[0]*=c,Mn.elements[1]*=c,Mn.elements[2]*=c,Mn.elements[4]*=u,Mn.elements[5]*=u,Mn.elements[6]*=u,Mn.elements[8]*=d,Mn.elements[9]*=d,Mn.elements[10]*=d,e.setFromRotationMatrix(Mn),i.x=r,i.y=a,i.z=o,this}makePerspective(t,e,i,s,r,a,o=Dn,l=!1){const c=this.elements,u=2*r/(e-t),d=2*r/(i-s),p=(e+t)/(e-t),g=(i+s)/(i-s);let x,v;if(l)x=r/(a-r),v=a*r/(a-r);else if(o===Dn)x=-(a+r)/(a-r),v=-2*a*r/(a-r);else if(o===Vr)x=-a/(a-r),v=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=p,c[12]=0,c[1]=0,c[5]=d,c[9]=g,c[13]=0,c[2]=0,c[6]=0,c[10]=x,c[14]=v,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,i,s,r,a,o=Dn,l=!1){const c=this.elements,u=2/(e-t),d=2/(i-s),p=-(e+t)/(e-t),g=-(i+s)/(i-s);let x,v;if(l)x=1/(a-r),v=a/(a-r);else if(o===Dn)x=-2/(a-r),v=-(a+r)/(a-r);else if(o===Vr)x=-1/(a-r),v=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=0,c[12]=p,c[1]=0,c[5]=d,c[9]=0,c[13]=g,c[2]=0,c[6]=0,c[10]=x,c[14]=v,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){const e=this.elements,i=t.elements;for(let s=0;s<16;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<16;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t[e+9]=i[9],t[e+10]=i[10],t[e+11]=i[11],t[e+12]=i[12],t[e+13]=i[13],t[e+14]=i[14],t[e+15]=i[15],t}}const Hi=new B,Mn=new ve,sd=new B(0,0,0),rd=new B(1,1,1),jn=new B,ar=new B,tn=new B,wc=new ve,Rc=new ci;class Xn{constructor(t=0,e=0,i=0,s=Xn.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=i,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,i,s=this._order){return this._x=t,this._y=e,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,i=!0){const s=t.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],u=s[9],d=s[2],p=s[6],g=s[10];switch(e){case"XYZ":this._y=Math.asin(Jt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,g),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(p,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Jt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,g),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(Jt(p,-1,1)),Math.abs(p)<.9999999?(this._y=Math.atan2(-d,g),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Jt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(p,g),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Jt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(o,g));break;case"XZY":this._z=Math.asin(-Jt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(p,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-u,g),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,i){return wc.makeRotationFromQuaternion(t),this.setFromRotationMatrix(wc,e,i)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Rc.setFromEuler(this),this.setFromQuaternion(Rc,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Xn.DEFAULT_ORDER="XYZ";class tc{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let ad=0;const Cc=new B,Gi=new ci,Nn=new ve,or=new B,Es=new B,od=new B,cd=new ci,Pc=new B(1,0,0),Dc=new B(0,1,0),Lc=new B(0,0,1),Ic={type:"added"},ld={type:"removed"},Vi={type:"childadded",child:null},_a={type:"childremoved",child:null};class ze extends Li{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:ad++}),this.uuid=Gn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=ze.DEFAULT_UP.clone();const t=new B,e=new Xn,i=new ci,s=new B(1,1,1);function r(){i.setFromEuler(e,!1)}function a(){e.setFromQuaternion(i,void 0,!1)}e._onChange(r),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new ve},normalMatrix:{value:new Kt}}),this.matrix=new ve,this.matrixWorld=new ve,this.matrixAutoUpdate=ze.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=ze.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new tc,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Gi.setFromAxisAngle(t,e),this.quaternion.multiply(Gi),this}rotateOnWorldAxis(t,e){return Gi.setFromAxisAngle(t,e),this.quaternion.premultiply(Gi),this}rotateX(t){return this.rotateOnAxis(Pc,t)}rotateY(t){return this.rotateOnAxis(Dc,t)}rotateZ(t){return this.rotateOnAxis(Lc,t)}translateOnAxis(t,e){return Cc.copy(t).applyQuaternion(this.quaternion),this.position.add(Cc.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Pc,t)}translateY(t){return this.translateOnAxis(Dc,t)}translateZ(t){return this.translateOnAxis(Lc,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Nn.copy(this.matrixWorld).invert())}lookAt(t,e,i){t.isVector3?or.copy(t):or.set(t,e,i);const s=this.parent;this.updateWorldMatrix(!0,!1),Es.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Nn.lookAt(Es,or,this.up):Nn.lookAt(or,Es,this.up),this.quaternion.setFromRotationMatrix(Nn),s&&(Nn.extractRotation(s.matrixWorld),Gi.setFromRotationMatrix(Nn),this.quaternion.premultiply(Gi.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Ic),Vi.child=t,this.dispatchEvent(Vi),Vi.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(ld),_a.child=t,this.dispatchEvent(_a),_a.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Nn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Nn.multiply(t.parent.matrixWorld)),t.applyMatrix4(Nn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Ic),Vi.child=t,this.dispatchEvent(Vi),Vi.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let i=0,s=this.children.length;i<s;i++){const a=this.children[i].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,i=[]){this[t]===e&&i.push(this);const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(t,e,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Es,t,od),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Es,cd,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].updateMatrixWorld(t)}updateWorldMatrix(t,e){const i=this.parent;if(t===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",i={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const d=l[c];r(t.shapes,d)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(t.materials,this.material[l]));s.material=o}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];s.animations.push(r(t.animations,l))}}if(e){const o=a(t.geometries),l=a(t.materials),c=a(t.textures),u=a(t.images),d=a(t.shapes),p=a(t.skeletons),g=a(t.animations),x=a(t.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),d.length>0&&(i.shapes=d),p.length>0&&(i.skeletons=p),g.length>0&&(i.animations=g),x.length>0&&(i.nodes=x)}return i.object=s,i;function a(o){const l=[];for(const c in o){const u=o[c];delete u.metadata,l.push(u)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let i=0;i<t.children.length;i++){const s=t.children[i];this.add(s.clone())}return this}}ze.DEFAULT_UP=new B(0,1,0);ze.DEFAULT_MATRIX_AUTO_UPDATE=!0;ze.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const vn=new B,On=new B,xa=new B,Bn=new B,Wi=new B,Xi=new B,Uc=new B,Ma=new B,va=new B,ya=new B,Sa=new Ee,Ea=new Ee,ba=new Ee;class dn{constructor(t=new B,e=new B,i=new B){this.a=t,this.b=e,this.c=i}static getNormal(t,e,i,s){s.subVectors(i,e),vn.subVectors(t,e),s.cross(vn);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,i,s,r){vn.subVectors(s,e),On.subVectors(i,e),xa.subVectors(t,e);const a=vn.dot(vn),o=vn.dot(On),l=vn.dot(xa),c=On.dot(On),u=On.dot(xa),d=a*c-o*o;if(d===0)return r.set(0,0,0),null;const p=1/d,g=(c*l-o*u)*p,x=(a*u-o*l)*p;return r.set(1-g-x,x,g)}static containsPoint(t,e,i,s){return this.getBarycoord(t,e,i,s,Bn)===null?!1:Bn.x>=0&&Bn.y>=0&&Bn.x+Bn.y<=1}static getInterpolation(t,e,i,s,r,a,o,l){return this.getBarycoord(t,e,i,s,Bn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Bn.x),l.addScaledVector(a,Bn.y),l.addScaledVector(o,Bn.z),l)}static getInterpolatedAttribute(t,e,i,s,r,a){return Sa.setScalar(0),Ea.setScalar(0),ba.setScalar(0),Sa.fromBufferAttribute(t,e),Ea.fromBufferAttribute(t,i),ba.fromBufferAttribute(t,s),a.setScalar(0),a.addScaledVector(Sa,r.x),a.addScaledVector(Ea,r.y),a.addScaledVector(ba,r.z),a}static isFrontFacing(t,e,i,s){return vn.subVectors(i,e),On.subVectors(t,e),vn.cross(On).dot(s)<0}set(t,e,i){return this.a.copy(t),this.b.copy(e),this.c.copy(i),this}setFromPointsAndIndices(t,e,i,s){return this.a.copy(t[e]),this.b.copy(t[i]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,i,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return vn.subVectors(this.c,this.b),On.subVectors(this.a,this.b),vn.cross(On).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return dn.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return dn.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,i,s,r){return dn.getInterpolation(t,this.a,this.b,this.c,e,i,s,r)}containsPoint(t){return dn.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return dn.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const i=this.a,s=this.b,r=this.c;let a,o;Wi.subVectors(s,i),Xi.subVectors(r,i),Ma.subVectors(t,i);const l=Wi.dot(Ma),c=Xi.dot(Ma);if(l<=0&&c<=0)return e.copy(i);va.subVectors(t,s);const u=Wi.dot(va),d=Xi.dot(va);if(u>=0&&d<=u)return e.copy(s);const p=l*d-u*c;if(p<=0&&l>=0&&u<=0)return a=l/(l-u),e.copy(i).addScaledVector(Wi,a);ya.subVectors(t,r);const g=Wi.dot(ya),x=Xi.dot(ya);if(x>=0&&g<=x)return e.copy(r);const v=g*c-l*x;if(v<=0&&c>=0&&x<=0)return o=c/(c-x),e.copy(i).addScaledVector(Xi,o);const h=u*x-g*d;if(h<=0&&d-u>=0&&g-x>=0)return Uc.subVectors(r,s),o=(d-u)/(d-u+(g-x)),e.copy(s).addScaledVector(Uc,o);const f=1/(h+v+p);return a=v*f,o=p*f,e.copy(i).addScaledVector(Wi,a).addScaledVector(Xi,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const eh={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Kn={h:0,s:0,l:0},cr={h:0,s:0,l:0};function Ta(n,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?n+(t-n)*6*e:e<1/2?t:e<2/3?n+(t-n)*6*(2/3-e):n}class Vt{constructor(t,e,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,i)}set(t,e,i){if(e===void 0&&i===void 0){const s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Ne){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,le.colorSpaceToWorking(this,e),this}setRGB(t,e,i,s=le.workingColorSpace){return this.r=t,this.g=e,this.b=i,le.colorSpaceToWorking(this,s),this}setHSL(t,e,i,s=le.workingColorSpace){if(t=Jo(t,1),e=Jt(e,0,1),i=Jt(i,0,1),e===0)this.r=this.g=this.b=i;else{const r=i<=.5?i*(1+e):i+e-i*e,a=2*i-r;this.r=Ta(a,r,t+1/3),this.g=Ta(a,r,t),this.b=Ta(a,r,t-1/3)}return le.colorSpaceToWorking(this,s),this}setStyle(t,e=Ne){function i(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Ne){const i=eh[t.toLowerCase()];return i!==void 0?this.setHex(i,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Vn(t.r),this.g=Vn(t.g),this.b=Vn(t.b),this}copyLinearToSRGB(t){return this.r=os(t.r),this.g=os(t.g),this.b=os(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Ne){return le.workingToColorSpace(Be.copy(this),t),Math.round(Jt(Be.r*255,0,255))*65536+Math.round(Jt(Be.g*255,0,255))*256+Math.round(Jt(Be.b*255,0,255))}getHexString(t=Ne){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=le.workingColorSpace){le.workingToColorSpace(Be.copy(this),e);const i=Be.r,s=Be.g,r=Be.b,a=Math.max(i,s,r),o=Math.min(i,s,r);let l,c;const u=(o+a)/2;if(o===a)l=0,c=0;else{const d=a-o;switch(c=u<=.5?d/(a+o):d/(2-a-o),a){case i:l=(s-r)/d+(s<r?6:0);break;case s:l=(r-i)/d+2;break;case r:l=(i-s)/d+4;break}l/=6}return t.h=l,t.s=c,t.l=u,t}getRGB(t,e=le.workingColorSpace){return le.workingToColorSpace(Be.copy(this),e),t.r=Be.r,t.g=Be.g,t.b=Be.b,t}getStyle(t=Ne){le.workingToColorSpace(Be.copy(this),t);const e=Be.r,i=Be.g,s=Be.b;return t!==Ne?`color(${t} ${e.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(t,e,i){return this.getHSL(Kn),this.setHSL(Kn.h+t,Kn.s+e,Kn.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,i){return this.r=t.r+(e.r-t.r)*i,this.g=t.g+(e.g-t.g)*i,this.b=t.b+(e.b-t.b)*i,this}lerpHSL(t,e){this.getHSL(Kn),t.getHSL(cr);const i=Us(Kn.h,cr.h,e),s=Us(Kn.s,cr.s,e),r=Us(Kn.l,cr.l,e);return this.setHSL(i,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,i=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*i+r[6]*s,this.g=r[1]*e+r[4]*i+r[7]*s,this.b=r[2]*e+r[5]*i+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Be=new Vt;Vt.NAMES=eh;let hd=0;class Ii extends Li{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:hd++}),this.uuid=Gn(),this.name="",this.type="Material",this.blending=Ai,this.side=oi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Wa,this.blendDst=Xa,this.blendEquation=yi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Vt(0,0,0),this.blendAlpha=0,this.depthFunc=ds,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=vc,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ni,this.stencilZFail=Ni,this.stencilZPass=Ni,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const i=t[e];if(i===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[e]=i}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Ai&&(i.blending=this.blending),this.side!==oi&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Wa&&(i.blendSrc=this.blendSrc),this.blendDst!==Xa&&(i.blendDst=this.blendDst),this.blendEquation!==yi&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==ds&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==vc&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ni&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Ni&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Ni&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){const a=[];for(const o in r){const l=r[o];delete l.metadata,a.push(l)}return a}if(e){const r=s(t.textures),a=s(t.images);r.length>0&&(i.textures=r),a.length>0&&(i.images=a)}return i}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let i=null;if(e!==null){const s=e.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=e[r].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class $s extends Ii{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Vt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Xn,this.combine=Hl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const be=new B,lr=new Xt;let ud=0;class Qt{constructor(t,e,i=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:ud++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=i,this.usage=Lo,this.updateRanges=[],this.gpuType=Hn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,i){t*=this.itemSize,i*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[i+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,i=this.count;e<i;e++)lr.fromBufferAttribute(this,e),lr.applyMatrix3(t),this.setXY(e,lr.x,lr.y);else if(this.itemSize===3)for(let e=0,i=this.count;e<i;e++)be.fromBufferAttribute(this,e),be.applyMatrix3(t),this.setXYZ(e,be.x,be.y,be.z);return this}applyMatrix4(t){for(let e=0,i=this.count;e<i;e++)be.fromBufferAttribute(this,e),be.applyMatrix4(t),this.setXYZ(e,be.x,be.y,be.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)be.fromBufferAttribute(this,e),be.applyNormalMatrix(t),this.setXYZ(e,be.x,be.y,be.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)be.fromBufferAttribute(this,e),be.transformDirection(t),this.setXYZ(e,be.x,be.y,be.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let i=this.array[t*this.itemSize+e];return this.normalized&&(i=Sn(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=de(i,this.array)),this.array[t*this.itemSize+e]=i,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Sn(e,this.array)),e}setX(t,e){return this.normalized&&(e=de(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Sn(e,this.array)),e}setY(t,e){return this.normalized&&(e=de(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Sn(e,this.array)),e}setZ(t,e){return this.normalized&&(e=de(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Sn(e,this.array)),e}setW(t,e){return this.normalized&&(e=de(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,i){return t*=this.itemSize,this.normalized&&(e=de(e,this.array),i=de(i,this.array)),this.array[t+0]=e,this.array[t+1]=i,this}setXYZ(t,e,i,s){return t*=this.itemSize,this.normalized&&(e=de(e,this.array),i=de(i,this.array),s=de(s,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this}setXYZW(t,e,i,s,r){return t*=this.itemSize,this.normalized&&(e=de(e,this.array),i=de(i,this.array),s=de(s,this.array),r=de(r,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Lo&&(t.usage=this.usage),t}}class nh extends Qt{constructor(t,e,i){super(new Uint16Array(t),e,i)}}class ih extends Qt{constructor(t,e,i){super(new Uint32Array(t),e,i)}}class Re extends Qt{constructor(t,e,i){super(new Float32Array(t),e,i)}}let dd=0;const on=new ve,Aa=new ze,Yi=new B,en=new Xs,bs=new Xs,Ue=new B;class ee extends Li{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:dd++}),this.uuid=Gn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Ql(t)?ih:nh)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,i=0){this.groups.push({start:t,count:e,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const r=new Kt().getNormalMatrix(t);i.applyNormalMatrix(r),i.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return on.makeRotationFromQuaternion(t),this.applyMatrix4(on),this}rotateX(t){return on.makeRotationX(t),this.applyMatrix4(on),this}rotateY(t){return on.makeRotationY(t),this.applyMatrix4(on),this}rotateZ(t){return on.makeRotationZ(t),this.applyMatrix4(on),this}translate(t,e,i){return on.makeTranslation(t,e,i),this.applyMatrix4(on),this}scale(t,e,i){return on.makeScale(t,e,i),this.applyMatrix4(on),this}lookAt(t){return Aa.lookAt(t),Aa.updateMatrix(),this.applyMatrix4(Aa.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Yi).negate(),this.translate(Yi.x,Yi.y,Yi.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const i=[];for(let s=0,r=t.length;s<r;s++){const a=t[s];i.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Re(i,3))}else{const i=Math.min(t.length,e.count);for(let s=0;s<i;s++){const r=t[s];e.setXYZ(s,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Xs);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new B(-1/0,-1/0,-1/0),new B(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let i=0,s=e.length;i<s;i++){const r=e[i];en.setFromBufferAttribute(r),this.morphTargetsRelative?(Ue.addVectors(this.boundingBox.min,en.min),this.boundingBox.expandByPoint(Ue),Ue.addVectors(this.boundingBox.max,en.max),this.boundingBox.expandByPoint(Ue)):(this.boundingBox.expandByPoint(en.min),this.boundingBox.expandByPoint(en.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ys);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new B,1/0);return}if(t){const i=this.boundingSphere.center;if(en.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){const o=e[r];bs.setFromBufferAttribute(o),this.morphTargetsRelative?(Ue.addVectors(en.min,bs.min),en.expandByPoint(Ue),Ue.addVectors(en.max,bs.max),en.expandByPoint(Ue)):(en.expandByPoint(bs.min),en.expandByPoint(bs.max))}en.getCenter(i);let s=0;for(let r=0,a=t.count;r<a;r++)Ue.fromBufferAttribute(t,r),s=Math.max(s,i.distanceToSquared(Ue));if(e)for(let r=0,a=e.length;r<a;r++){const o=e[r],l=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)Ue.fromBufferAttribute(o,c),l&&(Yi.fromBufferAttribute(t,c),Ue.add(Yi)),s=Math.max(s,i.distanceToSquared(Ue))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Qt(new Float32Array(4*i.count),4));const a=this.getAttribute("tangent"),o=[],l=[];for(let D=0;D<i.count;D++)o[D]=new B,l[D]=new B;const c=new B,u=new B,d=new B,p=new Xt,g=new Xt,x=new Xt,v=new B,h=new B;function f(D,E,b){c.fromBufferAttribute(i,D),u.fromBufferAttribute(i,E),d.fromBufferAttribute(i,b),p.fromBufferAttribute(r,D),g.fromBufferAttribute(r,E),x.fromBufferAttribute(r,b),u.sub(c),d.sub(c),g.sub(p),x.sub(p);const P=1/(g.x*x.y-x.x*g.y);isFinite(P)&&(v.copy(u).multiplyScalar(x.y).addScaledVector(d,-g.y).multiplyScalar(P),h.copy(d).multiplyScalar(g.x).addScaledVector(u,-x.x).multiplyScalar(P),o[D].add(v),o[E].add(v),o[b].add(v),l[D].add(h),l[E].add(h),l[b].add(h))}let m=this.groups;m.length===0&&(m=[{start:0,count:t.count}]);for(let D=0,E=m.length;D<E;++D){const b=m[D],P=b.start,C=b.count;for(let L=P,F=P+C;L<F;L+=3)f(t.getX(L+0),t.getX(L+1),t.getX(L+2))}const _=new B,M=new B,T=new B,S=new B;function w(D){T.fromBufferAttribute(s,D),S.copy(T);const E=o[D];_.copy(E),_.sub(T.multiplyScalar(T.dot(E))).normalize(),M.crossVectors(S,E);const P=M.dot(l[D])<0?-1:1;a.setXYZW(D,_.x,_.y,_.z,P)}for(let D=0,E=m.length;D<E;++D){const b=m[D],P=b.start,C=b.count;for(let L=P,F=P+C;L<F;L+=3)w(t.getX(L+0)),w(t.getX(L+1)),w(t.getX(L+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Qt(new Float32Array(e.count*3),3),this.setAttribute("normal",i);else for(let p=0,g=i.count;p<g;p++)i.setXYZ(p,0,0,0);const s=new B,r=new B,a=new B,o=new B,l=new B,c=new B,u=new B,d=new B;if(t)for(let p=0,g=t.count;p<g;p+=3){const x=t.getX(p+0),v=t.getX(p+1),h=t.getX(p+2);s.fromBufferAttribute(e,x),r.fromBufferAttribute(e,v),a.fromBufferAttribute(e,h),u.subVectors(a,r),d.subVectors(s,r),u.cross(d),o.fromBufferAttribute(i,x),l.fromBufferAttribute(i,v),c.fromBufferAttribute(i,h),o.add(u),l.add(u),c.add(u),i.setXYZ(x,o.x,o.y,o.z),i.setXYZ(v,l.x,l.y,l.z),i.setXYZ(h,c.x,c.y,c.z)}else for(let p=0,g=e.count;p<g;p+=3)s.fromBufferAttribute(e,p+0),r.fromBufferAttribute(e,p+1),a.fromBufferAttribute(e,p+2),u.subVectors(a,r),d.subVectors(s,r),u.cross(d),i.setXYZ(p+0,u.x,u.y,u.z),i.setXYZ(p+1,u.x,u.y,u.z),i.setXYZ(p+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,i=t.count;e<i;e++)Ue.fromBufferAttribute(t,e),Ue.normalize(),t.setXYZ(e,Ue.x,Ue.y,Ue.z)}toNonIndexed(){function t(o,l){const c=o.array,u=o.itemSize,d=o.normalized,p=new c.constructor(l.length*u);let g=0,x=0;for(let v=0,h=l.length;v<h;v++){o.isInterleavedBufferAttribute?g=l[v]*o.data.stride+o.offset:g=l[v]*u;for(let f=0;f<u;f++)p[x++]=c[g++]}return new Qt(p,u,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new ee,i=this.index.array,s=this.attributes;for(const o in s){const l=s[o],c=t(l,i);e.setAttribute(o,c)}const r=this.morphAttributes;for(const o in r){const l=[],c=r[o];for(let u=0,d=c.length;u<d;u++){const p=c[u],g=t(p,i);l.push(g)}e.morphAttributes[o]=l}e.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const i=this.attributes;for(const l in i){const c=i[l];t.data.attributes[l]=c.toJSON(t.data)}const s={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let d=0,p=c.length;d<p;d++){const g=c[d];u.push(g.toJSON(t.data))}u.length>0&&(s[l]=u,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(t.data.boundingSphere=o.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const i=t.index;i!==null&&this.setIndex(i.clone());const s=t.attributes;for(const c in s){const u=s[c];this.setAttribute(c,u.clone(e))}const r=t.morphAttributes;for(const c in r){const u=[],d=r[c];for(let p=0,g=d.length;p<g;p++)u.push(d[p].clone(e));this.morphAttributes[c]=u}this.morphTargetsRelative=t.morphTargetsRelative;const a=t.groups;for(let c=0,u=a.length;c<u;c++){const d=a[c];this.addGroup(d.start,d.count,d.materialIndex)}const o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Fc=new ve,pi=new qs,hr=new Ys,Nc=new B,ur=new B,dr=new B,fr=new B,wa=new B,pr=new B,Oc=new B,mr=new B;class fn extends ze{constructor(t=new ee,e=new $s){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){const i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,a=i.morphTargetsRelative;e.fromBufferAttribute(s,t);const o=this.morphTargetInfluences;if(r&&o){pr.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const u=o[l],d=r[l];u!==0&&(wa.fromBufferAttribute(d,t),a?pr.addScaledVector(wa,u):pr.addScaledVector(wa.sub(e),u))}e.add(pr)}return e}raycast(t,e){const i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),hr.copy(i.boundingSphere),hr.applyMatrix4(r),pi.copy(t.ray).recast(t.near),!(hr.containsPoint(pi.origin)===!1&&(pi.intersectSphere(hr,Nc)===null||pi.origin.distanceToSquared(Nc)>(t.far-t.near)**2))&&(Fc.copy(r).invert(),pi.copy(t.ray).applyMatrix4(Fc),!(i.boundingBox!==null&&pi.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,e,pi)))}_computeIntersections(t,e,i){let s;const r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,u=r.attributes.uv1,d=r.attributes.normal,p=r.groups,g=r.drawRange;if(o!==null)if(Array.isArray(a))for(let x=0,v=p.length;x<v;x++){const h=p[x],f=a[h.materialIndex],m=Math.max(h.start,g.start),_=Math.min(o.count,Math.min(h.start+h.count,g.start+g.count));for(let M=m,T=_;M<T;M+=3){const S=o.getX(M),w=o.getX(M+1),D=o.getX(M+2);s=gr(this,f,t,i,c,u,d,S,w,D),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=h.materialIndex,e.push(s))}}else{const x=Math.max(0,g.start),v=Math.min(o.count,g.start+g.count);for(let h=x,f=v;h<f;h+=3){const m=o.getX(h),_=o.getX(h+1),M=o.getX(h+2);s=gr(this,a,t,i,c,u,d,m,_,M),s&&(s.faceIndex=Math.floor(h/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let x=0,v=p.length;x<v;x++){const h=p[x],f=a[h.materialIndex],m=Math.max(h.start,g.start),_=Math.min(l.count,Math.min(h.start+h.count,g.start+g.count));for(let M=m,T=_;M<T;M+=3){const S=M,w=M+1,D=M+2;s=gr(this,f,t,i,c,u,d,S,w,D),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=h.materialIndex,e.push(s))}}else{const x=Math.max(0,g.start),v=Math.min(l.count,g.start+g.count);for(let h=x,f=v;h<f;h+=3){const m=h,_=h+1,M=h+2;s=gr(this,a,t,i,c,u,d,m,_,M),s&&(s.faceIndex=Math.floor(h/3),e.push(s))}}}}function fd(n,t,e,i,s,r,a,o){let l;if(t.side===Ze?l=i.intersectTriangle(a,r,s,!0,o):l=i.intersectTriangle(s,r,a,t.side===oi,o),l===null)return null;mr.copy(o),mr.applyMatrix4(n.matrixWorld);const c=e.ray.origin.distanceTo(mr);return c<e.near||c>e.far?null:{distance:c,point:mr.clone(),object:n}}function gr(n,t,e,i,s,r,a,o,l,c){n.getVertexPosition(o,ur),n.getVertexPosition(l,dr),n.getVertexPosition(c,fr);const u=fd(n,t,e,i,ur,dr,fr,Oc);if(u){const d=new B;dn.getBarycoord(Oc,ur,dr,fr,d),s&&(u.uv=dn.getInterpolatedAttribute(s,o,l,c,d,new Xt)),r&&(u.uv1=dn.getInterpolatedAttribute(r,o,l,c,d,new Xt)),a&&(u.normal=dn.getInterpolatedAttribute(a,o,l,c,d,new B),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const p={a:o,b:l,c,normal:new B,materialIndex:0};dn.getNormal(ur,dr,fr,p.normal),u.face=p,u.barycoord=d}return u}class js extends ee{constructor(t=1,e=1,i=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:i,widthSegments:s,heightSegments:r,depthSegments:a};const o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);const l=[],c=[],u=[],d=[];let p=0,g=0;x("z","y","x",-1,-1,i,e,t,a,r,0),x("z","y","x",1,-1,i,e,-t,a,r,1),x("x","z","y",1,1,t,i,e,s,a,2),x("x","z","y",1,-1,t,i,-e,s,a,3),x("x","y","z",1,-1,t,e,i,s,r,4),x("x","y","z",-1,-1,t,e,-i,s,r,5),this.setIndex(l),this.setAttribute("position",new Re(c,3)),this.setAttribute("normal",new Re(u,3)),this.setAttribute("uv",new Re(d,2));function x(v,h,f,m,_,M,T,S,w,D,E){const b=M/w,P=T/D,C=M/2,L=T/2,F=S/2,U=w+1,N=D+1;let G=0,z=0;const Z=new B;for(let $=0;$<N;$++){const nt=$*P-L;for(let k=0;k<U;k++){const q=k*b-C;Z[v]=q*m,Z[h]=nt*_,Z[f]=F,c.push(Z.x,Z.y,Z.z),Z[v]=0,Z[h]=0,Z[f]=S>0?1:-1,u.push(Z.x,Z.y,Z.z),d.push(k/w),d.push(1-$/D),G+=1}}for(let $=0;$<D;$++)for(let nt=0;nt<w;nt++){const k=p+nt+U*$,q=p+nt+U*($+1),ft=p+(nt+1)+U*($+1),ct=p+(nt+1)+U*$;l.push(k,q,ct),l.push(q,ft,ct),z+=6}o.addGroup(g,z,E),g+=z,p+=G}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new js(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function gs(n){const t={};for(const e in n){t[e]={};for(const i in n[e]){const s=n[e][i];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][i]=null):t[e][i]=s.clone():Array.isArray(s)?t[e][i]=s.slice():t[e][i]=s}}return t}function Ge(n){const t={};for(let e=0;e<n.length;e++){const i=gs(n[e]);for(const s in i)t[s]=i[s]}return t}function pd(n){const t=[];for(let e=0;e<n.length;e++)t.push(n[e].clone());return t}function sh(n){const t=n.getRenderTarget();return t===null?n.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:le.workingColorSpace}const md={clone:gs,merge:Ge};var gd=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,_d=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class li extends Ii{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=gd,this.fragmentShader=_d,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=gs(t.uniforms),this.uniformsGroups=pd(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const s in this.uniforms){const a=this.uniforms[s].value;a&&a.isTexture?e.uniforms[s]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[s]={type:"m4",value:a.toArray()}:e.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const i={};for(const s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(e.extensions=i),e}}class rh extends ze{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ve,this.projectionMatrix=new ve,this.projectionMatrixInverse=new ve,this.coordinateSystem=Dn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Zn=new B,Bc=new Xt,zc=new Xt;class un extends rh{constructor(t=50,e=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=ks*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Is*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return ks*2*Math.atan(Math.tan(Is*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,i){Zn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Zn.x,Zn.y).multiplyScalar(-t/Zn.z),Zn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Zn.x,Zn.y).multiplyScalar(-t/Zn.z)}getViewSize(t,e){return this.getViewBounds(t,Bc,zc),e.subVectors(zc,Bc)}setViewOffset(t,e,i,s,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(Is*.5*this.fov)/this.zoom,i=2*e,s=this.aspect*i,r=-.5*s;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,e-=a.offsetY*i/c,s*=a.width/l,i*=a.height/c}const o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-i,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const qi=-90,$i=1;class xd extends ze{constructor(t,e,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new un(qi,$i,t,e);s.layers=this.layers,this.add(s);const r=new un(qi,$i,t,e);r.layers=this.layers,this.add(r);const a=new un(qi,$i,t,e);a.layers=this.layers,this.add(a);const o=new un(qi,$i,t,e);o.layers=this.layers,this.add(o);const l=new un(qi,$i,t,e);l.layers=this.layers,this.add(l);const c=new un(qi,$i,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[i,s,r,a,o,l]=e;for(const c of e)this.remove(c);if(t===Dn)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Vr)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,a,o,l,c,u]=this.children,d=t.getRenderTarget(),p=t.getActiveCubeFace(),g=t.getActiveMipmapLevel(),x=t.xr.enabled;t.xr.enabled=!1;const v=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,t.setRenderTarget(i,0,s),t.render(e,r),t.setRenderTarget(i,1,s),t.render(e,a),t.setRenderTarget(i,2,s),t.render(e,o),t.setRenderTarget(i,3,s),t.render(e,l),t.setRenderTarget(i,4,s),t.render(e,c),i.texture.generateMipmaps=v,t.setRenderTarget(i,5,s),t.render(e,u),t.setRenderTarget(d,p,g),t.xr.enabled=x,i.texture.needsPMREMUpdate=!0}}class ah extends Ye{constructor(t=[],e=fs,i,s,r,a,o,l,c,u){super(t,e,i,s,r,a,o,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Md extends Ci{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const i={width:t,height:t,depth:1},s=[i,i,i,i,i,i];this.texture=new ah(s),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new js(5,5,5),r=new li({name:"CubemapFromEquirect",uniforms:gs(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Ze,blending:ii});r.uniforms.tEquirect.value=e;const a=new fn(s,r),o=e.minFilter;return e.minFilter===ni&&(e.minFilter=En),new xd(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e=!0,i=!0,s=!0){const r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,i,s);t.setRenderTarget(r)}}class Xe extends ze{constructor(){super(),this.isGroup=!0,this.type="Group"}}const vd={type:"move"};class Ra{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Xe,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Xe,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new B,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new B),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Xe,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new B,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new B),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const i of t.hand.values())this._getHandJoint(e,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,i){let s=null,r=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){a=!0;for(const v of t.hand.values()){const h=e.getJointPose(v,i),f=this._getHandJoint(c,v);h!==null&&(f.matrix.fromArray(h.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=h.radius),f.visible=h!==null}const u=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],p=u.position.distanceTo(d.position),g=.02,x=.005;c.inputState.pinching&&p>g+x?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&p<=g-x&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(s=e.getPose(t.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(vd)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const i=new Xe;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[e.jointName]=i,t.add(i)}return t.joints[e.jointName]}}class ec{constructor(t,e=25e-5){this.isFogExp2=!0,this.name="",this.color=new Vt(t),this.density=e}clone(){return new ec(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class yd extends ze{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Xn,this.environmentIntensity=1,this.environmentRotation=new Xn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class Sd{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=Lo,this.updateRanges=[],this.version=0,this.uuid=Gn()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,i){t*=this.stride,i*=e.stride;for(let s=0,r=this.stride;s<r;s++)this.array[t+s]=e.array[i+s];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Gn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(e,this.stride);return i.setUsage(this.usage),i}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Gn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const He=new B;class Xr{constructor(t,e,i,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=i,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,i=this.data.count;e<i;e++)He.fromBufferAttribute(this,e),He.applyMatrix4(t),this.setXYZ(e,He.x,He.y,He.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)He.fromBufferAttribute(this,e),He.applyNormalMatrix(t),this.setXYZ(e,He.x,He.y,He.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)He.fromBufferAttribute(this,e),He.transformDirection(t),this.setXYZ(e,He.x,He.y,He.z);return this}getComponent(t,e){let i=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(i=Sn(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=de(i,this.array)),this.data.array[t*this.data.stride+this.offset+e]=i,this}setX(t,e){return this.normalized&&(e=de(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=de(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=de(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=de(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=Sn(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=Sn(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=Sn(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=Sn(e,this.array)),e}setXY(t,e,i){return t=t*this.data.stride+this.offset,this.normalized&&(e=de(e,this.array),i=de(i,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this}setXYZ(t,e,i,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=de(e,this.array),i=de(i,this.array),s=de(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this.data.array[t+2]=s,this}setXYZW(t,e,i,s,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=de(e,this.array),i=de(i,this.array),s=de(s,this.array),r=de(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this.data.array[t+2]=s,this.data.array[t+3]=r,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let i=0;i<this.count;i++){const s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return new Qt(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new Xr(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let i=0;i<this.count;i++){const s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class ce extends Ii{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Vt(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}let ji;const Ts=new B,Ki=new B,Zi=new B,Ji=new Xt,As=new Xt,oh=new ve,_r=new B,ws=new B,xr=new B,kc=new Xt,Ca=new Xt,Hc=new Xt;class he extends ze{constructor(t=new ce){if(super(),this.isSprite=!0,this.type="Sprite",ji===void 0){ji=new ee;const e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new Sd(e,5);ji.setIndex([0,1,2,0,2,3]),ji.setAttribute("position",new Xr(i,3,0,!1)),ji.setAttribute("uv",new Xr(i,2,3,!1))}this.geometry=ji,this.material=t,this.center=new Xt(.5,.5),this.count=1}raycast(t,e){t.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Ki.setFromMatrixScale(this.matrixWorld),oh.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),Zi.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Ki.multiplyScalar(-Zi.z);const i=this.material.rotation;let s,r;i!==0&&(r=Math.cos(i),s=Math.sin(i));const a=this.center;Mr(_r.set(-.5,-.5,0),Zi,a,Ki,s,r),Mr(ws.set(.5,-.5,0),Zi,a,Ki,s,r),Mr(xr.set(.5,.5,0),Zi,a,Ki,s,r),kc.set(0,0),Ca.set(1,0),Hc.set(1,1);let o=t.ray.intersectTriangle(_r,ws,xr,!1,Ts);if(o===null&&(Mr(ws.set(-.5,.5,0),Zi,a,Ki,s,r),Ca.set(0,1),o=t.ray.intersectTriangle(_r,xr,ws,!1,Ts),o===null))return;const l=t.ray.origin.distanceTo(Ts);l<t.near||l>t.far||e.push({distance:l,point:Ts.clone(),uv:dn.getInterpolation(Ts,_r,ws,xr,kc,Ca,Hc,new Xt),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}}function Mr(n,t,e,i,s,r){Ji.subVectors(n,e).addScalar(.5).multiply(i),s!==void 0?(As.x=r*Ji.x-s*Ji.y,As.y=s*Ji.x+r*Ji.y):As.copy(Ji),n.copy(t),n.x+=As.x,n.y+=As.y,n.applyMatrix4(oh)}const Pa=new B,Ed=new B,bd=new Kt;class Jn{constructor(t=new B(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,i,s){return this.normal.set(t,e,i),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,i){const s=Pa.subVectors(i,e).cross(Ed.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const i=t.delta(Pa),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(i,r)}intersectsLine(t){const e=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return e<0&&i>0||i<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const i=e||bd.getNormalMatrix(t),s=this.coplanarPoint(Pa).applyMatrix4(t),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const mi=new Ys,Td=new Xt(.5,.5),vr=new B;class ch{constructor(t=new Jn,e=new Jn,i=new Jn,s=new Jn,r=new Jn,a=new Jn){this.planes=[t,e,i,s,r,a]}set(t,e,i,s,r,a){const o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(i),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(t){const e=this.planes;for(let i=0;i<6;i++)e[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,e=Dn,i=!1){const s=this.planes,r=t.elements,a=r[0],o=r[1],l=r[2],c=r[3],u=r[4],d=r[5],p=r[6],g=r[7],x=r[8],v=r[9],h=r[10],f=r[11],m=r[12],_=r[13],M=r[14],T=r[15];if(s[0].setComponents(c-a,g-u,f-x,T-m).normalize(),s[1].setComponents(c+a,g+u,f+x,T+m).normalize(),s[2].setComponents(c+o,g+d,f+v,T+_).normalize(),s[3].setComponents(c-o,g-d,f-v,T-_).normalize(),i)s[4].setComponents(l,p,h,M).normalize(),s[5].setComponents(c-l,g-p,f-h,T-M).normalize();else if(s[4].setComponents(c-l,g-p,f-h,T-M).normalize(),e===Dn)s[5].setComponents(c+l,g+p,f+h,T+M).normalize();else if(e===Vr)s[5].setComponents(l,p,h,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),mi.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),mi.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(mi)}intersectsSprite(t){mi.center.set(0,0,0);const e=Td.distanceTo(t.center);return mi.radius=.7071067811865476+e,mi.applyMatrix4(t.matrixWorld),this.intersectsSphere(mi)}intersectsSphere(t){const e=this.planes,i=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(t){const e=this.planes;for(let i=0;i<6;i++){const s=e[i];if(vr.x=s.normal.x>0?t.max.x:t.min.x,vr.y=s.normal.y>0?t.max.y:t.min.y,vr.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(vr)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let i=0;i<6;i++)if(e[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Rn extends Ii{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Vt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const Yr=new B,qr=new B,Gc=new ve,Rs=new qs,yr=new Ys,Da=new B,Vc=new B;class bi extends ze{constructor(t=new ee,e=new Rn){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,i=[0];for(let s=1,r=e.count;s<r;s++)Yr.fromBufferAttribute(e,s-1),qr.fromBufferAttribute(e,s),i[s]=i[s-1],i[s]+=Yr.distanceTo(qr);t.setAttribute("lineDistance",new Re(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const i=this.geometry,s=this.matrixWorld,r=t.params.Line.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),yr.copy(i.boundingSphere),yr.applyMatrix4(s),yr.radius+=r,t.ray.intersectsSphere(yr)===!1)return;Gc.copy(s).invert(),Rs.copy(t.ray).applyMatrix4(Gc);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,u=i.index,p=i.attributes.position;if(u!==null){const g=Math.max(0,a.start),x=Math.min(u.count,a.start+a.count);for(let v=g,h=x-1;v<h;v+=c){const f=u.getX(v),m=u.getX(v+1),_=Sr(this,t,Rs,l,f,m,v);_&&e.push(_)}if(this.isLineLoop){const v=u.getX(x-1),h=u.getX(g),f=Sr(this,t,Rs,l,v,h,x-1);f&&e.push(f)}}else{const g=Math.max(0,a.start),x=Math.min(p.count,a.start+a.count);for(let v=g,h=x-1;v<h;v+=c){const f=Sr(this,t,Rs,l,v,v+1,v);f&&e.push(f)}if(this.isLineLoop){const v=Sr(this,t,Rs,l,x-1,g,x-1);v&&e.push(v)}}}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function Sr(n,t,e,i,s,r,a){const o=n.geometry.attributes.position;if(Yr.fromBufferAttribute(o,s),qr.fromBufferAttribute(o,r),e.distanceSqToSegment(Yr,qr,Da,Vc)>i)return;Da.applyMatrix4(n.matrixWorld);const c=t.ray.origin.distanceTo(Da);if(!(c<t.near||c>t.far))return{distance:c,point:Vc.clone().applyMatrix4(n.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:n}}const Wc=new B,Xc=new B;class nc extends bi{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,i=[];for(let s=0,r=e.count;s<r;s+=2)Wc.fromBufferAttribute(e,s),Xc.fromBufferAttribute(e,s+1),i[s]=s===0?0:i[s-1],i[s+1]=i[s]+Wc.distanceTo(Xc);t.setAttribute("lineDistance",new Re(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Ad extends bi{constructor(t,e){super(t,e),this.isLineLoop=!0,this.type="LineLoop"}}class Ke extends Ii{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Vt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const Yc=new ve,Io=new qs,Er=new Ys,br=new B;class nn extends ze{constructor(t=new ee,e=new Ke){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){const i=this.geometry,s=this.matrixWorld,r=t.params.Points.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Er.copy(i.boundingSphere),Er.applyMatrix4(s),Er.radius+=r,t.ray.intersectsSphere(Er)===!1)return;Yc.copy(s).invert(),Io.copy(t.ray).applyMatrix4(Yc);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=i.index,d=i.attributes.position;if(c!==null){const p=Math.max(0,a.start),g=Math.min(c.count,a.start+a.count);for(let x=p,v=g;x<v;x++){const h=c.getX(x);br.fromBufferAttribute(d,h),qc(br,h,l,s,t,e,this)}}else{const p=Math.max(0,a.start),g=Math.min(d.count,a.start+a.count);for(let x=p,v=g;x<v;x++)br.fromBufferAttribute(d,x),qc(br,x,l,s,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function qc(n,t,e,i,s,r,a){const o=Io.distanceSqToPoint(n);if(o<e){const l=new B;Io.closestPointToPoint(n,l),l.applyMatrix4(i);const c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:a})}}class Zr extends Ye{constructor(t,e,i,s,r,a,o,l,c){super(t,e,i,s,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class lh extends Ye{constructor(t,e,i=Ri,s,r,a,o=wn,l=wn,c,u=Bs,d=1){if(u!==Bs&&u!==zs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const p={width:t,height:e,depth:d};super(p,s,r,a,o,l,u,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Qo(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}class hh extends Ye{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}}class ic extends ee{constructor(t=[],e=[],i=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:i,detail:s};const r=[],a=[];o(s),c(i),u(),this.setAttribute("position",new Re(r,3)),this.setAttribute("normal",new Re(r.slice(),3)),this.setAttribute("uv",new Re(a,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function o(m){const _=new B,M=new B,T=new B;for(let S=0;S<e.length;S+=3)g(e[S+0],_),g(e[S+1],M),g(e[S+2],T),l(_,M,T,m)}function l(m,_,M,T){const S=T+1,w=[];for(let D=0;D<=S;D++){w[D]=[];const E=m.clone().lerp(M,D/S),b=_.clone().lerp(M,D/S),P=S-D;for(let C=0;C<=P;C++)C===0&&D===S?w[D][C]=E:w[D][C]=E.clone().lerp(b,C/P)}for(let D=0;D<S;D++)for(let E=0;E<2*(S-D)-1;E++){const b=Math.floor(E/2);E%2===0?(p(w[D][b+1]),p(w[D+1][b]),p(w[D][b])):(p(w[D][b+1]),p(w[D+1][b+1]),p(w[D+1][b]))}}function c(m){const _=new B;for(let M=0;M<r.length;M+=3)_.x=r[M+0],_.y=r[M+1],_.z=r[M+2],_.normalize().multiplyScalar(m),r[M+0]=_.x,r[M+1]=_.y,r[M+2]=_.z}function u(){const m=new B;for(let _=0;_<r.length;_+=3){m.x=r[_+0],m.y=r[_+1],m.z=r[_+2];const M=h(m)/2/Math.PI+.5,T=f(m)/Math.PI+.5;a.push(M,1-T)}x(),d()}function d(){for(let m=0;m<a.length;m+=6){const _=a[m+0],M=a[m+2],T=a[m+4],S=Math.max(_,M,T),w=Math.min(_,M,T);S>.9&&w<.1&&(_<.2&&(a[m+0]+=1),M<.2&&(a[m+2]+=1),T<.2&&(a[m+4]+=1))}}function p(m){r.push(m.x,m.y,m.z)}function g(m,_){const M=m*3;_.x=t[M+0],_.y=t[M+1],_.z=t[M+2]}function x(){const m=new B,_=new B,M=new B,T=new B,S=new Xt,w=new Xt,D=new Xt;for(let E=0,b=0;E<r.length;E+=9,b+=6){m.set(r[E+0],r[E+1],r[E+2]),_.set(r[E+3],r[E+4],r[E+5]),M.set(r[E+6],r[E+7],r[E+8]),S.set(a[b+0],a[b+1]),w.set(a[b+2],a[b+3]),D.set(a[b+4],a[b+5]),T.copy(m).add(_).add(M).divideScalar(3);const P=h(T);v(S,b+0,m,P),v(w,b+2,_,P),v(D,b+4,M,P)}}function v(m,_,M,T){T<0&&m.x===1&&(a[_]=m.x-1),M.x===0&&M.z===0&&(a[_]=T/2/Math.PI+.5)}function h(m){return Math.atan2(m.z,-m.x)}function f(m){return Math.atan2(-m.y,Math.sqrt(m.x*m.x+m.z*m.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ic(t.vertices,t.indices,t.radius,t.details)}}class sc extends ic{constructor(t=1,e=0){const i=(1+Math.sqrt(5))/2,s=[-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new sc(t.radius,t.detail)}}class Jr extends ee{constructor(t=1,e=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:i,heightSegments:s};const r=t/2,a=e/2,o=Math.floor(i),l=Math.floor(s),c=o+1,u=l+1,d=t/o,p=e/l,g=[],x=[],v=[],h=[];for(let f=0;f<u;f++){const m=f*p-a;for(let _=0;_<c;_++){const M=_*d-r;x.push(M,-m,0),v.push(0,0,1),h.push(_/o),h.push(1-f/l)}}for(let f=0;f<l;f++)for(let m=0;m<o;m++){const _=m+c*f,M=m+c*(f+1),T=m+1+c*(f+1),S=m+1+c*f;g.push(_,M,S),g.push(M,T,S)}this.setIndex(g),this.setAttribute("position",new Re(x,3)),this.setAttribute("normal",new Re(v,3)),this.setAttribute("uv",new Re(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Jr(t.width,t.height,t.widthSegments,t.heightSegments)}}class Qr extends ee{constructor(t=1,e=32,i=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:i,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},e=Math.max(3,Math.floor(e)),i=Math.max(2,Math.floor(i));const l=Math.min(a+o,Math.PI);let c=0;const u=[],d=new B,p=new B,g=[],x=[],v=[],h=[];for(let f=0;f<=i;f++){const m=[],_=f/i;let M=0;f===0&&a===0?M=.5/e:f===i&&l===Math.PI&&(M=-.5/e);for(let T=0;T<=e;T++){const S=T/e;d.x=-t*Math.cos(s+S*r)*Math.sin(a+_*o),d.y=t*Math.cos(a+_*o),d.z=t*Math.sin(s+S*r)*Math.sin(a+_*o),x.push(d.x,d.y,d.z),p.copy(d).normalize(),v.push(p.x,p.y,p.z),h.push(S+M,1-_),m.push(c++)}u.push(m)}for(let f=0;f<i;f++)for(let m=0;m<e;m++){const _=u[f][m+1],M=u[f][m],T=u[f+1][m],S=u[f+1][m+1];(f!==0||a>0)&&g.push(_,M,S),(f!==i-1||l<Math.PI)&&g.push(M,T,S)}this.setIndex(g),this.setAttribute("position",new Re(x,3)),this.setAttribute("normal",new Re(v,3)),this.setAttribute("uv",new Re(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Qr(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class rc extends ee{constructor(t=1,e=.4,i=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:i,tubularSegments:s,arc:r},i=Math.floor(i),s=Math.floor(s);const a=[],o=[],l=[],c=[],u=new B,d=new B,p=new B;for(let g=0;g<=i;g++)for(let x=0;x<=s;x++){const v=x/s*r,h=g/i*Math.PI*2;d.x=(t+e*Math.cos(h))*Math.cos(v),d.y=(t+e*Math.cos(h))*Math.sin(v),d.z=e*Math.sin(h),o.push(d.x,d.y,d.z),u.x=t*Math.cos(v),u.y=t*Math.sin(v),p.subVectors(d,u).normalize(),l.push(p.x,p.y,p.z),c.push(x/s),c.push(g/i)}for(let g=1;g<=i;g++)for(let x=1;x<=s;x++){const v=(s+1)*g+x-1,h=(s+1)*(g-1)+x-1,f=(s+1)*(g-1)+x,m=(s+1)*g+x;a.push(v,h,m),a.push(h,f,m)}this.setIndex(a),this.setAttribute("position",new Re(o,3)),this.setAttribute("normal",new Re(l,3)),this.setAttribute("uv",new Re(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new rc(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class wd extends ee{constructor(t=null){if(super(),this.type="WireframeGeometry",this.parameters={geometry:t},t!==null){const e=[],i=new Set,s=new B,r=new B;if(t.index!==null){const a=t.attributes.position,o=t.index;let l=t.groups;l.length===0&&(l=[{start:0,count:o.count,materialIndex:0}]);for(let c=0,u=l.length;c<u;++c){const d=l[c],p=d.start,g=d.count;for(let x=p,v=p+g;x<v;x+=3)for(let h=0;h<3;h++){const f=o.getX(x+h),m=o.getX(x+(h+1)%3);s.fromBufferAttribute(a,f),r.fromBufferAttribute(a,m),$c(s,r,i)===!0&&(e.push(s.x,s.y,s.z),e.push(r.x,r.y,r.z))}}}else{const a=t.attributes.position;for(let o=0,l=a.count/3;o<l;o++)for(let c=0;c<3;c++){const u=3*o+c,d=3*o+(c+1)%3;s.fromBufferAttribute(a,u),r.fromBufferAttribute(a,d),$c(s,r,i)===!0&&(e.push(s.x,s.y,s.z),e.push(r.x,r.y,r.z))}}this.setAttribute("position",new Re(e,3))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}}function $c(n,t,e){const i=`${n.x},${n.y},${n.z}-${t.x},${t.y},${t.z}`,s=`${t.x},${t.y},${t.z}-${n.x},${n.y},${n.z}`;return e.has(i)===!0||e.has(s)===!0?!1:(e.add(i),e.add(s),!0)}class Rd extends Ii{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Su,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class Cd extends Ii{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}class Pd extends rh{constructor(t=-1,e=1,i=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=i,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,i,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=i-t,a=i+t,o=s+e,l=s-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}class Dd extends un{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}const jc=new ve;class Ld{constructor(t,e,i=0,s=1/0){this.ray=new qs(t,e),this.near=i,this.far=s,this.camera=null,this.layers=new tc,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return jc.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(jc),this}intersectObject(t,e=!0,i=[]){return Uo(t,this,i,e),i.sort(Kc),i}intersectObjects(t,e=!0,i=[]){for(let s=0,r=t.length;s<r;s++)Uo(t[s],this,i,e);return i.sort(Kc),i}}function Kc(n,t){return n.distance-t.distance}function Uo(n,t,e,i){let s=!0;if(n.layers.test(t.layers)&&n.raycast(t,e)===!1&&(s=!1),s===!0&&i===!0){const r=n.children;for(let a=0,o=r.length;a<o;a++)Uo(r[a],t,e,!0)}}class Zc{constructor(t=1,e=0,i=0){this.radius=t,this.phi=e,this.theta=i}set(t,e,i){return this.radius=t,this.phi=e,this.theta=i,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=Jt(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,i){return this.radius=Math.sqrt(t*t+e*e+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,i),this.phi=Math.acos(Jt(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class Id extends Li{constructor(t,e=null){super(),this.object=t,this.domElement=e,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(t){if(t===void 0){console.warn("THREE.Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=t}disconnect(){}dispose(){}update(){}}function Jc(n,t,e,i){const s=Ud(i);switch(e){case $l:return n*t;case Kl:return n*t/s.components*s.byteLength;case jo:return n*t/s.components*s.byteLength;case Zl:return n*t*2/s.components*s.byteLength;case Ko:return n*t*2/s.components*s.byteLength;case jl:return n*t*3/s.components*s.byteLength;case bn:return n*t*4/s.components*s.byteLength;case Zo:return n*t*4/s.components*s.byteLength;case Ur:case Fr:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case Nr:case Or:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case so:case ao:return Math.max(n,16)*Math.max(t,8)/4;case io:case ro:return Math.max(n,8)*Math.max(t,8)/2;case oo:case co:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case lo:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case ho:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case uo:return Math.floor((n+4)/5)*Math.floor((t+3)/4)*16;case fo:return Math.floor((n+4)/5)*Math.floor((t+4)/5)*16;case po:return Math.floor((n+5)/6)*Math.floor((t+4)/5)*16;case mo:return Math.floor((n+5)/6)*Math.floor((t+5)/6)*16;case go:return Math.floor((n+7)/8)*Math.floor((t+4)/5)*16;case _o:return Math.floor((n+7)/8)*Math.floor((t+5)/6)*16;case xo:return Math.floor((n+7)/8)*Math.floor((t+7)/8)*16;case Mo:return Math.floor((n+9)/10)*Math.floor((t+4)/5)*16;case vo:return Math.floor((n+9)/10)*Math.floor((t+5)/6)*16;case yo:return Math.floor((n+9)/10)*Math.floor((t+7)/8)*16;case So:return Math.floor((n+9)/10)*Math.floor((t+9)/10)*16;case Eo:return Math.floor((n+11)/12)*Math.floor((t+9)/10)*16;case bo:return Math.floor((n+11)/12)*Math.floor((t+11)/12)*16;case To:case Ao:case wo:return Math.ceil(n/4)*Math.ceil(t/4)*16;case Ro:case Co:return Math.ceil(n/4)*Math.ceil(t/4)*8;case Po:case Do:return Math.ceil(n/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Ud(n){switch(n){case Wn:case Wl:return{byteLength:1,components:1};case Ns:case Xl:case Ws:return{byteLength:2,components:1};case qo:case $o:return{byteLength:2,components:4};case Ri:case Yo:case Hn:return{byteLength:4,components:1};case Yl:case ql:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Xo}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Xo);function uh(){let n=null,t=!1,e=null,i=null;function s(r,a){e(r,a),i=n.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(i=n.requestAnimationFrame(s),t=!0)},stop:function(){n.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){n=r}}}function Fd(n){const t=new WeakMap;function e(o,l){const c=o.array,u=o.usage,d=c.byteLength,p=n.createBuffer();n.bindBuffer(l,p),n.bufferData(l,c,u),o.onUploadCallback();let g;if(c instanceof Float32Array)g=n.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)g=n.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?g=n.HALF_FLOAT:g=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)g=n.SHORT;else if(c instanceof Uint32Array)g=n.UNSIGNED_INT;else if(c instanceof Int32Array)g=n.INT;else if(c instanceof Int8Array)g=n.BYTE;else if(c instanceof Uint8Array)g=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)g=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:p,type:g,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:d}}function i(o,l,c){const u=l.array,d=l.updateRanges;if(n.bindBuffer(c,o),d.length===0)n.bufferSubData(c,0,u);else{d.sort((g,x)=>g.start-x.start);let p=0;for(let g=1;g<d.length;g++){const x=d[p],v=d[g];v.start<=x.start+x.count+1?x.count=Math.max(x.count,v.start+v.count-x.start):(++p,d[p]=v)}d.length=p+1;for(let g=0,x=d.length;g<x;g++){const v=d[g];n.bufferSubData(c,v.start*u.BYTES_PER_ELEMENT,u,v.start,v.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=t.get(o);l&&(n.deleteBuffer(l.buffer),t.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const u=t.get(o);(!u||u.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=t.get(o);if(c===void 0)t.set(o,e(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,o,l),c.version=o.version}}return{get:s,remove:r,update:a}}var Nd=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Od=`#ifdef USE_ALPHAHASH
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
#endif`,Bd=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,zd=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,kd=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Hd=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Gd=`#ifdef USE_AOMAP
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
#endif`,Vd=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Wd=`#ifdef USE_BATCHING
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
#endif`,Xd=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Yd=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,qd=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,$d=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,jd=`#ifdef USE_IRIDESCENCE
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
#endif`,Kd=`#ifdef USE_BUMPMAP
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
#endif`,Zd=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Jd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Qd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,tf=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,ef=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,nf=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,sf=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,rf=`#if defined( USE_COLOR_ALPHA )
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
#endif`,af=`#define PI 3.141592653589793
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
} // validated`,of=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,cf=`vec3 transformedNormal = objectNormal;
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
#endif`,lf=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,hf=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,uf=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,df=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,ff="gl_FragColor = linearToOutputTexel( gl_FragColor );",pf=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,mf=`#ifdef USE_ENVMAP
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
#endif`,gf=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,_f=`#ifdef USE_ENVMAP
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
#endif`,xf=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Mf=`#ifdef USE_ENVMAP
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
#endif`,vf=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,yf=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Sf=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Ef=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,bf=`#ifdef USE_GRADIENTMAP
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
}`,Tf=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Af=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,wf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Rf=`uniform bool receiveShadow;
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
#endif`,Cf=`#ifdef USE_ENVMAP
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
#endif`,Pf=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Df=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Lf=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,If=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Uf=`PhysicalMaterial material;
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
#endif`,Ff=`struct PhysicalMaterial {
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
}`,Nf=`
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
#endif`,Of=`#if defined( RE_IndirectDiffuse )
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
#endif`,Bf=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,zf=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,kf=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Hf=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Gf=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Vf=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Wf=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Xf=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Yf=`#if defined( USE_POINTS_UV )
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
#endif`,qf=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,$f=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,jf=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Kf=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Zf=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Jf=`#ifdef USE_MORPHTARGETS
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
#endif`,Qf=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,tp=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,ep=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,np=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,ip=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,sp=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,rp=`#ifdef USE_NORMALMAP
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
#endif`,ap=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,op=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,cp=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,lp=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,hp=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,up=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,dp=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,fp=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,pp=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,mp=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,gp=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,_p=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,xp=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Mp=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,vp=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,yp=`float getShadowMask() {
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
}`,Sp=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Ep=`#ifdef USE_SKINNING
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
#endif`,bp=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Tp=`#ifdef USE_SKINNING
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
#endif`,Ap=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,wp=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Rp=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Cp=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Pp=`#ifdef USE_TRANSMISSION
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
#endif`,Dp=`#ifdef USE_TRANSMISSION
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
#endif`,Lp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Ip=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Up=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Fp=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Np=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Op=`uniform sampler2D t2D;
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
}`,Bp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,zp=`#ifdef ENVMAP_TYPE_CUBE
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
}`,kp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Hp=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Gp=`#include <common>
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
}`,Vp=`#if DEPTH_PACKING == 3200
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
}`,Wp=`#define DISTANCE
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
}`,Xp=`#define DISTANCE
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
}`,Yp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,qp=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,$p=`uniform float scale;
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
}`,jp=`uniform vec3 diffuse;
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
}`,Kp=`#include <common>
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
}`,Zp=`uniform vec3 diffuse;
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
}`,Jp=`#define LAMBERT
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
}`,Qp=`#define LAMBERT
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
}`,tm=`#define MATCAP
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
}`,em=`#define MATCAP
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
}`,nm=`#define NORMAL
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
}`,im=`#define NORMAL
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
}`,sm=`#define PHONG
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
}`,rm=`#define PHONG
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
}`,am=`#define STANDARD
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
}`,om=`#define STANDARD
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
}`,cm=`#define TOON
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
}`,lm=`#define TOON
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
}`,hm=`uniform float size;
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
}`,um=`uniform vec3 diffuse;
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
}`,dm=`#include <common>
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
}`,fm=`uniform vec3 color;
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
}`,pm=`uniform float rotation;
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
}`,mm=`uniform vec3 diffuse;
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
}`,Zt={alphahash_fragment:Nd,alphahash_pars_fragment:Od,alphamap_fragment:Bd,alphamap_pars_fragment:zd,alphatest_fragment:kd,alphatest_pars_fragment:Hd,aomap_fragment:Gd,aomap_pars_fragment:Vd,batching_pars_vertex:Wd,batching_vertex:Xd,begin_vertex:Yd,beginnormal_vertex:qd,bsdfs:$d,iridescence_fragment:jd,bumpmap_pars_fragment:Kd,clipping_planes_fragment:Zd,clipping_planes_pars_fragment:Jd,clipping_planes_pars_vertex:Qd,clipping_planes_vertex:tf,color_fragment:ef,color_pars_fragment:nf,color_pars_vertex:sf,color_vertex:rf,common:af,cube_uv_reflection_fragment:of,defaultnormal_vertex:cf,displacementmap_pars_vertex:lf,displacementmap_vertex:hf,emissivemap_fragment:uf,emissivemap_pars_fragment:df,colorspace_fragment:ff,colorspace_pars_fragment:pf,envmap_fragment:mf,envmap_common_pars_fragment:gf,envmap_pars_fragment:_f,envmap_pars_vertex:xf,envmap_physical_pars_fragment:Cf,envmap_vertex:Mf,fog_vertex:vf,fog_pars_vertex:yf,fog_fragment:Sf,fog_pars_fragment:Ef,gradientmap_pars_fragment:bf,lightmap_pars_fragment:Tf,lights_lambert_fragment:Af,lights_lambert_pars_fragment:wf,lights_pars_begin:Rf,lights_toon_fragment:Pf,lights_toon_pars_fragment:Df,lights_phong_fragment:Lf,lights_phong_pars_fragment:If,lights_physical_fragment:Uf,lights_physical_pars_fragment:Ff,lights_fragment_begin:Nf,lights_fragment_maps:Of,lights_fragment_end:Bf,logdepthbuf_fragment:zf,logdepthbuf_pars_fragment:kf,logdepthbuf_pars_vertex:Hf,logdepthbuf_vertex:Gf,map_fragment:Vf,map_pars_fragment:Wf,map_particle_fragment:Xf,map_particle_pars_fragment:Yf,metalnessmap_fragment:qf,metalnessmap_pars_fragment:$f,morphinstance_vertex:jf,morphcolor_vertex:Kf,morphnormal_vertex:Zf,morphtarget_pars_vertex:Jf,morphtarget_vertex:Qf,normal_fragment_begin:tp,normal_fragment_maps:ep,normal_pars_fragment:np,normal_pars_vertex:ip,normal_vertex:sp,normalmap_pars_fragment:rp,clearcoat_normal_fragment_begin:ap,clearcoat_normal_fragment_maps:op,clearcoat_pars_fragment:cp,iridescence_pars_fragment:lp,opaque_fragment:hp,packing:up,premultiplied_alpha_fragment:dp,project_vertex:fp,dithering_fragment:pp,dithering_pars_fragment:mp,roughnessmap_fragment:gp,roughnessmap_pars_fragment:_p,shadowmap_pars_fragment:xp,shadowmap_pars_vertex:Mp,shadowmap_vertex:vp,shadowmask_pars_fragment:yp,skinbase_vertex:Sp,skinning_pars_vertex:Ep,skinning_vertex:bp,skinnormal_vertex:Tp,specularmap_fragment:Ap,specularmap_pars_fragment:wp,tonemapping_fragment:Rp,tonemapping_pars_fragment:Cp,transmission_fragment:Pp,transmission_pars_fragment:Dp,uv_pars_fragment:Lp,uv_pars_vertex:Ip,uv_vertex:Up,worldpos_vertex:Fp,background_vert:Np,background_frag:Op,backgroundCube_vert:Bp,backgroundCube_frag:zp,cube_vert:kp,cube_frag:Hp,depth_vert:Gp,depth_frag:Vp,distanceRGBA_vert:Wp,distanceRGBA_frag:Xp,equirect_vert:Yp,equirect_frag:qp,linedashed_vert:$p,linedashed_frag:jp,meshbasic_vert:Kp,meshbasic_frag:Zp,meshlambert_vert:Jp,meshlambert_frag:Qp,meshmatcap_vert:tm,meshmatcap_frag:em,meshnormal_vert:nm,meshnormal_frag:im,meshphong_vert:sm,meshphong_frag:rm,meshphysical_vert:am,meshphysical_frag:om,meshtoon_vert:cm,meshtoon_frag:lm,points_vert:hm,points_frag:um,shadow_vert:dm,shadow_frag:fm,sprite_vert:pm,sprite_frag:mm},At={common:{diffuse:{value:new Vt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Kt},alphaMap:{value:null},alphaMapTransform:{value:new Kt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Kt}},envmap:{envMap:{value:null},envMapRotation:{value:new Kt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Kt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Kt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Kt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Kt},normalScale:{value:new Xt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Kt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Kt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Kt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Kt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Vt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Vt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Kt},alphaTest:{value:0},uvTransform:{value:new Kt}},sprite:{diffuse:{value:new Vt(16777215)},opacity:{value:1},center:{value:new Xt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Kt},alphaMap:{value:null},alphaMapTransform:{value:new Kt},alphaTest:{value:0}}},Cn={basic:{uniforms:Ge([At.common,At.specularmap,At.envmap,At.aomap,At.lightmap,At.fog]),vertexShader:Zt.meshbasic_vert,fragmentShader:Zt.meshbasic_frag},lambert:{uniforms:Ge([At.common,At.specularmap,At.envmap,At.aomap,At.lightmap,At.emissivemap,At.bumpmap,At.normalmap,At.displacementmap,At.fog,At.lights,{emissive:{value:new Vt(0)}}]),vertexShader:Zt.meshlambert_vert,fragmentShader:Zt.meshlambert_frag},phong:{uniforms:Ge([At.common,At.specularmap,At.envmap,At.aomap,At.lightmap,At.emissivemap,At.bumpmap,At.normalmap,At.displacementmap,At.fog,At.lights,{emissive:{value:new Vt(0)},specular:{value:new Vt(1118481)},shininess:{value:30}}]),vertexShader:Zt.meshphong_vert,fragmentShader:Zt.meshphong_frag},standard:{uniforms:Ge([At.common,At.envmap,At.aomap,At.lightmap,At.emissivemap,At.bumpmap,At.normalmap,At.displacementmap,At.roughnessmap,At.metalnessmap,At.fog,At.lights,{emissive:{value:new Vt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Zt.meshphysical_vert,fragmentShader:Zt.meshphysical_frag},toon:{uniforms:Ge([At.common,At.aomap,At.lightmap,At.emissivemap,At.bumpmap,At.normalmap,At.displacementmap,At.gradientmap,At.fog,At.lights,{emissive:{value:new Vt(0)}}]),vertexShader:Zt.meshtoon_vert,fragmentShader:Zt.meshtoon_frag},matcap:{uniforms:Ge([At.common,At.bumpmap,At.normalmap,At.displacementmap,At.fog,{matcap:{value:null}}]),vertexShader:Zt.meshmatcap_vert,fragmentShader:Zt.meshmatcap_frag},points:{uniforms:Ge([At.points,At.fog]),vertexShader:Zt.points_vert,fragmentShader:Zt.points_frag},dashed:{uniforms:Ge([At.common,At.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Zt.linedashed_vert,fragmentShader:Zt.linedashed_frag},depth:{uniforms:Ge([At.common,At.displacementmap]),vertexShader:Zt.depth_vert,fragmentShader:Zt.depth_frag},normal:{uniforms:Ge([At.common,At.bumpmap,At.normalmap,At.displacementmap,{opacity:{value:1}}]),vertexShader:Zt.meshnormal_vert,fragmentShader:Zt.meshnormal_frag},sprite:{uniforms:Ge([At.sprite,At.fog]),vertexShader:Zt.sprite_vert,fragmentShader:Zt.sprite_frag},background:{uniforms:{uvTransform:{value:new Kt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Zt.background_vert,fragmentShader:Zt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Kt}},vertexShader:Zt.backgroundCube_vert,fragmentShader:Zt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Zt.cube_vert,fragmentShader:Zt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Zt.equirect_vert,fragmentShader:Zt.equirect_frag},distanceRGBA:{uniforms:Ge([At.common,At.displacementmap,{referencePosition:{value:new B},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Zt.distanceRGBA_vert,fragmentShader:Zt.distanceRGBA_frag},shadow:{uniforms:Ge([At.lights,At.fog,{color:{value:new Vt(0)},opacity:{value:1}}]),vertexShader:Zt.shadow_vert,fragmentShader:Zt.shadow_frag}};Cn.physical={uniforms:Ge([Cn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Kt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Kt},clearcoatNormalScale:{value:new Xt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Kt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Kt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Kt},sheen:{value:0},sheenColor:{value:new Vt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Kt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Kt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Kt},transmissionSamplerSize:{value:new Xt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Kt},attenuationDistance:{value:0},attenuationColor:{value:new Vt(0)},specularColor:{value:new Vt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Kt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Kt},anisotropyVector:{value:new Xt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Kt}}]),vertexShader:Zt.meshphysical_vert,fragmentShader:Zt.meshphysical_frag};const Tr={r:0,b:0,g:0},gi=new Xn,gm=new ve;function _m(n,t,e,i,s,r,a){const o=new Vt(0);let l=r===!0?0:1,c,u,d=null,p=0,g=null;function x(_){let M=_.isScene===!0?_.background:null;return M&&M.isTexture&&(M=(_.backgroundBlurriness>0?e:t).get(M)),M}function v(_){let M=!1;const T=x(_);T===null?f(o,l):T&&T.isColor&&(f(T,1),M=!0);const S=n.xr.getEnvironmentBlendMode();S==="additive"?i.buffers.color.setClear(0,0,0,1,a):S==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,a),(n.autoClear||M)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function h(_,M){const T=x(M);T&&(T.isCubeTexture||T.mapping===Kr)?(u===void 0&&(u=new fn(new js(1,1,1),new li({name:"BackgroundCubeMaterial",uniforms:gs(Cn.backgroundCube.uniforms),vertexShader:Cn.backgroundCube.vertexShader,fragmentShader:Cn.backgroundCube.fragmentShader,side:Ze,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(S,w,D){this.matrixWorld.copyPosition(D.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(u)),gi.copy(M.backgroundRotation),gi.x*=-1,gi.y*=-1,gi.z*=-1,T.isCubeTexture&&T.isRenderTargetTexture===!1&&(gi.y*=-1,gi.z*=-1),u.material.uniforms.envMap.value=T,u.material.uniforms.flipEnvMap.value=T.isCubeTexture&&T.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=M.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(gm.makeRotationFromEuler(gi)),u.material.toneMapped=le.getTransfer(T.colorSpace)!==pe,(d!==T||p!==T.version||g!==n.toneMapping)&&(u.material.needsUpdate=!0,d=T,p=T.version,g=n.toneMapping),u.layers.enableAll(),_.unshift(u,u.geometry,u.material,0,0,null)):T&&T.isTexture&&(c===void 0&&(c=new fn(new Jr(2,2),new li({name:"BackgroundMaterial",uniforms:gs(Cn.background.uniforms),vertexShader:Cn.background.vertexShader,fragmentShader:Cn.background.fragmentShader,side:oi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=T,c.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,c.material.toneMapped=le.getTransfer(T.colorSpace)!==pe,T.matrixAutoUpdate===!0&&T.updateMatrix(),c.material.uniforms.uvTransform.value.copy(T.matrix),(d!==T||p!==T.version||g!==n.toneMapping)&&(c.material.needsUpdate=!0,d=T,p=T.version,g=n.toneMapping),c.layers.enableAll(),_.unshift(c,c.geometry,c.material,0,0,null))}function f(_,M){_.getRGB(Tr,sh(n)),i.buffers.color.setClear(Tr.r,Tr.g,Tr.b,M,a)}function m(){u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(_,M=1){o.set(_),l=M,f(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(_){l=_,f(o,l)},render:v,addToRenderList:h,dispose:m}}function xm(n,t){const e=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=p(null);let r=s,a=!1;function o(b,P,C,L,F){let U=!1;const N=d(L,C,P);r!==N&&(r=N,c(r.object)),U=g(b,L,C,F),U&&x(b,L,C,F),F!==null&&t.update(F,n.ELEMENT_ARRAY_BUFFER),(U||a)&&(a=!1,M(b,P,C,L),F!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get(F).buffer))}function l(){return n.createVertexArray()}function c(b){return n.bindVertexArray(b)}function u(b){return n.deleteVertexArray(b)}function d(b,P,C){const L=C.wireframe===!0;let F=i[b.id];F===void 0&&(F={},i[b.id]=F);let U=F[P.id];U===void 0&&(U={},F[P.id]=U);let N=U[L];return N===void 0&&(N=p(l()),U[L]=N),N}function p(b){const P=[],C=[],L=[];for(let F=0;F<e;F++)P[F]=0,C[F]=0,L[F]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:P,enabledAttributes:C,attributeDivisors:L,object:b,attributes:{},index:null}}function g(b,P,C,L){const F=r.attributes,U=P.attributes;let N=0;const G=C.getAttributes();for(const z in G)if(G[z].location>=0){const $=F[z];let nt=U[z];if(nt===void 0&&(z==="instanceMatrix"&&b.instanceMatrix&&(nt=b.instanceMatrix),z==="instanceColor"&&b.instanceColor&&(nt=b.instanceColor)),$===void 0||$.attribute!==nt||nt&&$.data!==nt.data)return!0;N++}return r.attributesNum!==N||r.index!==L}function x(b,P,C,L){const F={},U=P.attributes;let N=0;const G=C.getAttributes();for(const z in G)if(G[z].location>=0){let $=U[z];$===void 0&&(z==="instanceMatrix"&&b.instanceMatrix&&($=b.instanceMatrix),z==="instanceColor"&&b.instanceColor&&($=b.instanceColor));const nt={};nt.attribute=$,$&&$.data&&(nt.data=$.data),F[z]=nt,N++}r.attributes=F,r.attributesNum=N,r.index=L}function v(){const b=r.newAttributes;for(let P=0,C=b.length;P<C;P++)b[P]=0}function h(b){f(b,0)}function f(b,P){const C=r.newAttributes,L=r.enabledAttributes,F=r.attributeDivisors;C[b]=1,L[b]===0&&(n.enableVertexAttribArray(b),L[b]=1),F[b]!==P&&(n.vertexAttribDivisor(b,P),F[b]=P)}function m(){const b=r.newAttributes,P=r.enabledAttributes;for(let C=0,L=P.length;C<L;C++)P[C]!==b[C]&&(n.disableVertexAttribArray(C),P[C]=0)}function _(b,P,C,L,F,U,N){N===!0?n.vertexAttribIPointer(b,P,C,F,U):n.vertexAttribPointer(b,P,C,L,F,U)}function M(b,P,C,L){v();const F=L.attributes,U=C.getAttributes(),N=P.defaultAttributeValues;for(const G in U){const z=U[G];if(z.location>=0){let Z=F[G];if(Z===void 0&&(G==="instanceMatrix"&&b.instanceMatrix&&(Z=b.instanceMatrix),G==="instanceColor"&&b.instanceColor&&(Z=b.instanceColor)),Z!==void 0){const $=Z.normalized,nt=Z.itemSize,k=t.get(Z);if(k===void 0)continue;const q=k.buffer,ft=k.type,ct=k.bytesPerElement,X=ft===n.INT||ft===n.UNSIGNED_INT||Z.gpuType===Yo;if(Z.isInterleavedBufferAttribute){const J=Z.data,ut=J.stride,bt=Z.offset;if(J.isInstancedInterleavedBuffer){for(let vt=0;vt<z.locationSize;vt++)f(z.location+vt,J.meshPerAttribute);b.isInstancedMesh!==!0&&L._maxInstanceCount===void 0&&(L._maxInstanceCount=J.meshPerAttribute*J.count)}else for(let vt=0;vt<z.locationSize;vt++)h(z.location+vt);n.bindBuffer(n.ARRAY_BUFFER,q);for(let vt=0;vt<z.locationSize;vt++)_(z.location+vt,nt/z.locationSize,ft,$,ut*ct,(bt+nt/z.locationSize*vt)*ct,X)}else{if(Z.isInstancedBufferAttribute){for(let J=0;J<z.locationSize;J++)f(z.location+J,Z.meshPerAttribute);b.isInstancedMesh!==!0&&L._maxInstanceCount===void 0&&(L._maxInstanceCount=Z.meshPerAttribute*Z.count)}else for(let J=0;J<z.locationSize;J++)h(z.location+J);n.bindBuffer(n.ARRAY_BUFFER,q);for(let J=0;J<z.locationSize;J++)_(z.location+J,nt/z.locationSize,ft,$,nt*ct,nt/z.locationSize*J*ct,X)}}else if(N!==void 0){const $=N[G];if($!==void 0)switch($.length){case 2:n.vertexAttrib2fv(z.location,$);break;case 3:n.vertexAttrib3fv(z.location,$);break;case 4:n.vertexAttrib4fv(z.location,$);break;default:n.vertexAttrib1fv(z.location,$)}}}}m()}function T(){D();for(const b in i){const P=i[b];for(const C in P){const L=P[C];for(const F in L)u(L[F].object),delete L[F];delete P[C]}delete i[b]}}function S(b){if(i[b.id]===void 0)return;const P=i[b.id];for(const C in P){const L=P[C];for(const F in L)u(L[F].object),delete L[F];delete P[C]}delete i[b.id]}function w(b){for(const P in i){const C=i[P];if(C[b.id]===void 0)continue;const L=C[b.id];for(const F in L)u(L[F].object),delete L[F];delete C[b.id]}}function D(){E(),a=!0,r!==s&&(r=s,c(r.object))}function E(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:D,resetDefaultState:E,dispose:T,releaseStatesOfGeometry:S,releaseStatesOfProgram:w,initAttributes:v,enableAttribute:h,disableUnusedAttributes:m}}function Mm(n,t,e){let i;function s(c){i=c}function r(c,u){n.drawArrays(i,c,u),e.update(u,i,1)}function a(c,u,d){d!==0&&(n.drawArraysInstanced(i,c,u,d),e.update(u,i,d))}function o(c,u,d){if(d===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,u,0,d);let g=0;for(let x=0;x<d;x++)g+=u[x];e.update(g,i,1)}function l(c,u,d,p){if(d===0)return;const g=t.get("WEBGL_multi_draw");if(g===null)for(let x=0;x<c.length;x++)a(c[x],u[x],p[x]);else{g.multiDrawArraysInstancedWEBGL(i,c,0,u,0,p,0,d);let x=0;for(let v=0;v<d;v++)x+=u[v]*p[v];e.update(x,i,1)}}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function vm(n,t,e,i){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){const w=t.get("EXT_texture_filter_anisotropic");s=n.getParameter(w.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(w){return!(w!==bn&&i.convert(w)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(w){const D=w===Ws&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(w!==Wn&&i.convert(w)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&w!==Hn&&!D)}function l(w){if(w==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";w="mediump"}return w==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp";const u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const d=e.logarithmicDepthBuffer===!0,p=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),g=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),x=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=n.getParameter(n.MAX_TEXTURE_SIZE),h=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),f=n.getParameter(n.MAX_VERTEX_ATTRIBS),m=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),_=n.getParameter(n.MAX_VARYING_VECTORS),M=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),T=x>0,S=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:d,reversedDepthBuffer:p,maxTextures:g,maxVertexTextures:x,maxTextureSize:v,maxCubemapSize:h,maxAttributes:f,maxVertexUniforms:m,maxVaryings:_,maxFragmentUniforms:M,vertexTextures:T,maxSamples:S}}function ym(n){const t=this;let e=null,i=0,s=!1,r=!1;const a=new Jn,o=new Kt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,p){const g=d.length!==0||p||i!==0||s;return s=p,i=d.length,g},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,p){e=u(d,p,0)},this.setState=function(d,p,g){const x=d.clippingPlanes,v=d.clipIntersection,h=d.clipShadows,f=n.get(d);if(!s||x===null||x.length===0||r&&!h)r?u(null):c();else{const m=r?0:i,_=m*4;let M=f.clippingState||null;l.value=M,M=u(x,p,_,g);for(let T=0;T!==_;++T)M[T]=e[T];f.clippingState=M,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=m}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function u(d,p,g,x){const v=d!==null?d.length:0;let h=null;if(v!==0){if(h=l.value,x!==!0||h===null){const f=g+v*4,m=p.matrixWorldInverse;o.getNormalMatrix(m),(h===null||h.length<f)&&(h=new Float32Array(f));for(let _=0,M=g;_!==v;++_,M+=4)a.copy(d[_]).applyMatrix4(m,o),a.normal.toArray(h,M),h[M+3]=a.constant}l.value=h,l.needsUpdate=!0}return t.numPlanes=v,t.numIntersection=0,h}}function Sm(n){let t=new WeakMap;function e(a,o){return o===Qa?a.mapping=fs:o===to&&(a.mapping=ps),a}function i(a){if(a&&a.isTexture){const o=a.mapping;if(o===Qa||o===to)if(t.has(a)){const l=t.get(a).texture;return e(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new Md(l.height);return c.fromEquirectangularTexture(n,a),t.set(a,c),a.addEventListener("dispose",s),e(c.texture,a.mapping)}else return null}}return a}function s(a){const o=a.target;o.removeEventListener("dispose",s);const l=t.get(o);l!==void 0&&(t.delete(o),l.dispose())}function r(){t=new WeakMap}return{get:i,dispose:r}}const ss=4,Qc=[.125,.215,.35,.446,.526,.582],Si=20,La=new Pd,tl=new Vt;let Ia=null,Ua=0,Fa=0,Na=!1;const xi=(1+Math.sqrt(5))/2,Qi=1/xi,el=[new B(-xi,Qi,0),new B(xi,Qi,0),new B(-Qi,0,xi),new B(Qi,0,xi),new B(0,xi,-Qi),new B(0,xi,Qi),new B(-1,1,-1),new B(1,1,-1),new B(-1,1,1),new B(1,1,1)],Em=new B;class nl{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,i=.1,s=100,r={}){const{size:a=256,position:o=Em}=r;Ia=this._renderer.getRenderTarget(),Ua=this._renderer.getActiveCubeFace(),Fa=this._renderer.getActiveMipmapLevel(),Na=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(t,i,s,l,o),e>0&&this._blur(l,0,0,e),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=rl(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=sl(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Ia,Ua,Fa),this._renderer.xr.enabled=Na,t.scissorTest=!1,Ar(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===fs||t.mapping===ps?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Ia=this._renderer.getRenderTarget(),Ua=this._renderer.getActiveCubeFace(),Fa=this._renderer.getActiveMipmapLevel(),Na=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=e||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,i={magFilter:En,minFilter:En,generateMipmaps:!1,type:Ws,format:bn,colorSpace:ms,depthBuffer:!1},s=il(t,e,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=il(t,e,i);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=bm(r)),this._blurMaterial=Tm(r,t,e)}return s}_compileMaterial(t){const e=new fn(this._lodPlanes[0],t);this._renderer.compile(e,La)}_sceneToCubeUV(t,e,i,s,r){const l=new un(90,1,e,i),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],d=this._renderer,p=d.autoClear,g=d.toneMapping;d.getClearColor(tl),d.toneMapping=si,d.autoClear=!1,d.state.buffers.depth.getReversed()&&(d.setRenderTarget(s),d.clearDepth(),d.setRenderTarget(null));const v=new $s({name:"PMREM.Background",side:Ze,depthWrite:!1,depthTest:!1}),h=new fn(new js,v);let f=!1;const m=t.background;m?m.isColor&&(v.color.copy(m),t.background=null,f=!0):(v.color.copy(tl),f=!0);for(let _=0;_<6;_++){const M=_%3;M===0?(l.up.set(0,c[_],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+u[_],r.y,r.z)):M===1?(l.up.set(0,0,c[_]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+u[_],r.z)):(l.up.set(0,c[_],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+u[_]));const T=this._cubeSize;Ar(s,M*T,_>2?T:0,T,T),d.setRenderTarget(s),f&&d.render(h,l),d.render(t,l)}h.geometry.dispose(),h.material.dispose(),d.toneMapping=g,d.autoClear=p,t.background=m}_textureToCubeUV(t,e){const i=this._renderer,s=t.mapping===fs||t.mapping===ps;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=rl()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=sl());const r=s?this._cubemapMaterial:this._equirectMaterial,a=new fn(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=t;const l=this._cubeSize;Ar(e,0,0,3*l,2*l),i.setRenderTarget(e),i.render(a,La)}_applyPMREM(t){const e=this._renderer,i=e.autoClear;e.autoClear=!1;const s=this._lodPlanes.length;for(let r=1;r<s;r++){const a=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=el[(s-r-1)%el.length];this._blur(t,r-1,r,a,o)}e.autoClear=i}_blur(t,e,i,s,r){const a=this._pingPongRenderTarget;this._halfBlur(t,a,e,i,s,"latitudinal",r),this._halfBlur(a,t,i,i,s,"longitudinal",r)}_halfBlur(t,e,i,s,r,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,d=new fn(this._lodPlanes[s],c),p=c.uniforms,g=this._sizeLods[i]-1,x=isFinite(r)?Math.PI/(2*g):2*Math.PI/(2*Si-1),v=r/x,h=isFinite(r)?1+Math.floor(u*v):Si;h>Si&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${h} samples when the maximum is set to ${Si}`);const f=[];let m=0;for(let w=0;w<Si;++w){const D=w/v,E=Math.exp(-D*D/2);f.push(E),w===0?m+=E:w<h&&(m+=2*E)}for(let w=0;w<f.length;w++)f[w]=f[w]/m;p.envMap.value=t.texture,p.samples.value=h,p.weights.value=f,p.latitudinal.value=a==="latitudinal",o&&(p.poleAxis.value=o);const{_lodMax:_}=this;p.dTheta.value=x,p.mipInt.value=_-i;const M=this._sizeLods[s],T=3*M*(s>_-ss?s-_+ss:0),S=4*(this._cubeSize-M);Ar(e,T,S,3*M,2*M),l.setRenderTarget(e),l.render(d,La)}}function bm(n){const t=[],e=[],i=[];let s=n;const r=n-ss+1+Qc.length;for(let a=0;a<r;a++){const o=Math.pow(2,s);e.push(o);let l=1/o;a>n-ss?l=Qc[a-n+ss-1]:a===0&&(l=0),i.push(l);const c=1/(o-2),u=-c,d=1+c,p=[u,u,d,u,d,d,u,u,d,d,u,d],g=6,x=6,v=3,h=2,f=1,m=new Float32Array(v*x*g),_=new Float32Array(h*x*g),M=new Float32Array(f*x*g);for(let S=0;S<g;S++){const w=S%3*2/3-1,D=S>2?0:-1,E=[w,D,0,w+2/3,D,0,w+2/3,D+1,0,w,D,0,w+2/3,D+1,0,w,D+1,0];m.set(E,v*x*S),_.set(p,h*x*S);const b=[S,S,S,S,S,S];M.set(b,f*x*S)}const T=new ee;T.setAttribute("position",new Qt(m,v)),T.setAttribute("uv",new Qt(_,h)),T.setAttribute("faceIndex",new Qt(M,f)),t.push(T),s>ss&&s--}return{lodPlanes:t,sizeLods:e,sigmas:i}}function il(n,t,e){const i=new Ci(n,t,e);return i.texture.mapping=Kr,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Ar(n,t,e,i,s){n.viewport.set(t,e,i,s),n.scissor.set(t,e,i,s)}function Tm(n,t,e){const i=new Float32Array(Si),s=new B(0,1,0);return new li({name:"SphericalGaussianBlur",defines:{n:Si,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:ac(),fragmentShader:`

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
		`,blending:ii,depthTest:!1,depthWrite:!1})}function sl(){return new li({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:ac(),fragmentShader:`

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
		`,blending:ii,depthTest:!1,depthWrite:!1})}function rl(){return new li({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ac(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ii,depthTest:!1,depthWrite:!1})}function ac(){return`

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
	`}function Am(n){let t=new WeakMap,e=null;function i(o){if(o&&o.isTexture){const l=o.mapping,c=l===Qa||l===to,u=l===fs||l===ps;if(c||u){let d=t.get(o);const p=d!==void 0?d.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==p)return e===null&&(e=new nl(n)),d=c?e.fromEquirectangular(o,d):e.fromCubemap(o,d),d.texture.pmremVersion=o.pmremVersion,t.set(o,d),d.texture;if(d!==void 0)return d.texture;{const g=o.image;return c&&g&&g.height>0||u&&g&&s(g)?(e===null&&(e=new nl(n)),d=c?e.fromEquirectangular(o):e.fromCubemap(o),d.texture.pmremVersion=o.pmremVersion,t.set(o,d),o.addEventListener("dispose",r),d.texture):null}}}return o}function s(o){let l=0;const c=6;for(let u=0;u<c;u++)o[u]!==void 0&&l++;return l===c}function r(o){const l=o.target;l.removeEventListener("dispose",r);const c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function a(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:i,dispose:a}}function wm(n){const t={};function e(i){if(t[i]!==void 0)return t[i];let s;switch(i){case"WEBGL_depth_texture":s=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=n.getExtension(i)}return t[i]=s,s}return{has:function(i){return e(i)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(i){const s=e(i);return s===null&&Hs("THREE.WebGLRenderer: "+i+" extension not supported."),s}}}function Rm(n,t,e,i){const s={},r=new WeakMap;function a(d){const p=d.target;p.index!==null&&t.remove(p.index);for(const x in p.attributes)t.remove(p.attributes[x]);p.removeEventListener("dispose",a),delete s[p.id];const g=r.get(p);g&&(t.remove(g),r.delete(p)),i.releaseStatesOfGeometry(p),p.isInstancedBufferGeometry===!0&&delete p._maxInstanceCount,e.memory.geometries--}function o(d,p){return s[p.id]===!0||(p.addEventListener("dispose",a),s[p.id]=!0,e.memory.geometries++),p}function l(d){const p=d.attributes;for(const g in p)t.update(p[g],n.ARRAY_BUFFER)}function c(d){const p=[],g=d.index,x=d.attributes.position;let v=0;if(g!==null){const m=g.array;v=g.version;for(let _=0,M=m.length;_<M;_+=3){const T=m[_+0],S=m[_+1],w=m[_+2];p.push(T,S,S,w,w,T)}}else if(x!==void 0){const m=x.array;v=x.version;for(let _=0,M=m.length/3-1;_<M;_+=3){const T=_+0,S=_+1,w=_+2;p.push(T,S,S,w,w,T)}}else return;const h=new(Ql(p)?ih:nh)(p,1);h.version=v;const f=r.get(d);f&&t.remove(f),r.set(d,h)}function u(d){const p=r.get(d);if(p){const g=d.index;g!==null&&p.version<g.version&&c(d)}else c(d);return r.get(d)}return{get:o,update:l,getWireframeAttribute:u}}function Cm(n,t,e){let i;function s(p){i=p}let r,a;function o(p){r=p.type,a=p.bytesPerElement}function l(p,g){n.drawElements(i,g,r,p*a),e.update(g,i,1)}function c(p,g,x){x!==0&&(n.drawElementsInstanced(i,g,r,p*a,x),e.update(g,i,x))}function u(p,g,x){if(x===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,g,0,r,p,0,x);let h=0;for(let f=0;f<x;f++)h+=g[f];e.update(h,i,1)}function d(p,g,x,v){if(x===0)return;const h=t.get("WEBGL_multi_draw");if(h===null)for(let f=0;f<p.length;f++)c(p[f]/a,g[f],v[f]);else{h.multiDrawElementsInstancedWEBGL(i,g,0,r,p,0,v,0,x);let f=0;for(let m=0;m<x;m++)f+=g[m]*v[m];e.update(f,i,1)}}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=d}function Pm(n){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,a,o){switch(e.calls++,a){case n.TRIANGLES:e.triangles+=o*(r/3);break;case n.LINES:e.lines+=o*(r/2);break;case n.LINE_STRIP:e.lines+=o*(r-1);break;case n.LINE_LOOP:e.lines+=o*r;break;case n.POINTS:e.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:i}}function Dm(n,t,e){const i=new WeakMap,s=new Ee;function r(a,o,l){const c=a.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,d=u!==void 0?u.length:0;let p=i.get(o);if(p===void 0||p.count!==d){let b=function(){D.dispose(),i.delete(o),o.removeEventListener("dispose",b)};var g=b;p!==void 0&&p.texture.dispose();const x=o.morphAttributes.position!==void 0,v=o.morphAttributes.normal!==void 0,h=o.morphAttributes.color!==void 0,f=o.morphAttributes.position||[],m=o.morphAttributes.normal||[],_=o.morphAttributes.color||[];let M=0;x===!0&&(M=1),v===!0&&(M=2),h===!0&&(M=3);let T=o.attributes.position.count*M,S=1;T>t.maxTextureSize&&(S=Math.ceil(T/t.maxTextureSize),T=t.maxTextureSize);const w=new Float32Array(T*S*4*d),D=new th(w,T,S,d);D.type=Hn,D.needsUpdate=!0;const E=M*4;for(let P=0;P<d;P++){const C=f[P],L=m[P],F=_[P],U=T*S*4*P;for(let N=0;N<C.count;N++){const G=N*E;x===!0&&(s.fromBufferAttribute(C,N),w[U+G+0]=s.x,w[U+G+1]=s.y,w[U+G+2]=s.z,w[U+G+3]=0),v===!0&&(s.fromBufferAttribute(L,N),w[U+G+4]=s.x,w[U+G+5]=s.y,w[U+G+6]=s.z,w[U+G+7]=0),h===!0&&(s.fromBufferAttribute(F,N),w[U+G+8]=s.x,w[U+G+9]=s.y,w[U+G+10]=s.z,w[U+G+11]=F.itemSize===4?s.w:1)}}p={count:d,texture:D,size:new Xt(T,S)},i.set(o,p),o.addEventListener("dispose",b)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",a.morphTexture,e);else{let x=0;for(let h=0;h<c.length;h++)x+=c[h];const v=o.morphTargetsRelative?1:1-x;l.getUniforms().setValue(n,"morphTargetBaseInfluence",v),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",p.texture,e),l.getUniforms().setValue(n,"morphTargetsTextureSize",p.size)}return{update:r}}function Lm(n,t,e,i){let s=new WeakMap;function r(l){const c=i.render.frame,u=l.geometry,d=t.get(l,u);if(s.get(d)!==c&&(t.update(d),s.set(d,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),s.get(l)!==c&&(e.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,n.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){const p=l.skeleton;s.get(p)!==c&&(p.update(),s.set(p,c))}return d}function a(){s=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:r,dispose:a}}const dh=new Ye,al=new lh(1,1),fh=new th,ph=new nd,mh=new ah,ol=[],cl=[],ll=new Float32Array(16),hl=new Float32Array(9),ul=new Float32Array(4);function Ms(n,t,e){const i=n[0];if(i<=0||i>0)return n;const s=t*e;let r=ol[s];if(r===void 0&&(r=new Float32Array(s),ol[s]=r),t!==0){i.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,n[a].toArray(r,o)}return r}function Le(n,t){if(n.length!==t.length)return!1;for(let e=0,i=n.length;e<i;e++)if(n[e]!==t[e])return!1;return!0}function Ie(n,t){for(let e=0,i=t.length;e<i;e++)n[e]=t[e]}function ta(n,t){let e=cl[t];e===void 0&&(e=new Int32Array(t),cl[t]=e);for(let i=0;i!==t;++i)e[i]=n.allocateTextureUnit();return e}function Im(n,t){const e=this.cache;e[0]!==t&&(n.uniform1f(this.addr,t),e[0]=t)}function Um(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Le(e,t))return;n.uniform2fv(this.addr,t),Ie(e,t)}}function Fm(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(n.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Le(e,t))return;n.uniform3fv(this.addr,t),Ie(e,t)}}function Nm(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Le(e,t))return;n.uniform4fv(this.addr,t),Ie(e,t)}}function Om(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(Le(e,t))return;n.uniformMatrix2fv(this.addr,!1,t),Ie(e,t)}else{if(Le(e,i))return;ul.set(i),n.uniformMatrix2fv(this.addr,!1,ul),Ie(e,i)}}function Bm(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(Le(e,t))return;n.uniformMatrix3fv(this.addr,!1,t),Ie(e,t)}else{if(Le(e,i))return;hl.set(i),n.uniformMatrix3fv(this.addr,!1,hl),Ie(e,i)}}function zm(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(Le(e,t))return;n.uniformMatrix4fv(this.addr,!1,t),Ie(e,t)}else{if(Le(e,i))return;ll.set(i),n.uniformMatrix4fv(this.addr,!1,ll),Ie(e,i)}}function km(n,t){const e=this.cache;e[0]!==t&&(n.uniform1i(this.addr,t),e[0]=t)}function Hm(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Le(e,t))return;n.uniform2iv(this.addr,t),Ie(e,t)}}function Gm(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Le(e,t))return;n.uniform3iv(this.addr,t),Ie(e,t)}}function Vm(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Le(e,t))return;n.uniform4iv(this.addr,t),Ie(e,t)}}function Wm(n,t){const e=this.cache;e[0]!==t&&(n.uniform1ui(this.addr,t),e[0]=t)}function Xm(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Le(e,t))return;n.uniform2uiv(this.addr,t),Ie(e,t)}}function Ym(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Le(e,t))return;n.uniform3uiv(this.addr,t),Ie(e,t)}}function qm(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Le(e,t))return;n.uniform4uiv(this.addr,t),Ie(e,t)}}function $m(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_2D_SHADOW?(al.compareFunction=Jl,r=al):r=dh,e.setTexture2D(t||r,s)}function jm(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture3D(t||ph,s)}function Km(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTextureCube(t||mh,s)}function Zm(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture2DArray(t||fh,s)}function Jm(n){switch(n){case 5126:return Im;case 35664:return Um;case 35665:return Fm;case 35666:return Nm;case 35674:return Om;case 35675:return Bm;case 35676:return zm;case 5124:case 35670:return km;case 35667:case 35671:return Hm;case 35668:case 35672:return Gm;case 35669:case 35673:return Vm;case 5125:return Wm;case 36294:return Xm;case 36295:return Ym;case 36296:return qm;case 35678:case 36198:case 36298:case 36306:case 35682:return $m;case 35679:case 36299:case 36307:return jm;case 35680:case 36300:case 36308:case 36293:return Km;case 36289:case 36303:case 36311:case 36292:return Zm}}function Qm(n,t){n.uniform1fv(this.addr,t)}function tg(n,t){const e=Ms(t,this.size,2);n.uniform2fv(this.addr,e)}function eg(n,t){const e=Ms(t,this.size,3);n.uniform3fv(this.addr,e)}function ng(n,t){const e=Ms(t,this.size,4);n.uniform4fv(this.addr,e)}function ig(n,t){const e=Ms(t,this.size,4);n.uniformMatrix2fv(this.addr,!1,e)}function sg(n,t){const e=Ms(t,this.size,9);n.uniformMatrix3fv(this.addr,!1,e)}function rg(n,t){const e=Ms(t,this.size,16);n.uniformMatrix4fv(this.addr,!1,e)}function ag(n,t){n.uniform1iv(this.addr,t)}function og(n,t){n.uniform2iv(this.addr,t)}function cg(n,t){n.uniform3iv(this.addr,t)}function lg(n,t){n.uniform4iv(this.addr,t)}function hg(n,t){n.uniform1uiv(this.addr,t)}function ug(n,t){n.uniform2uiv(this.addr,t)}function dg(n,t){n.uniform3uiv(this.addr,t)}function fg(n,t){n.uniform4uiv(this.addr,t)}function pg(n,t,e){const i=this.cache,s=t.length,r=ta(e,s);Le(i,r)||(n.uniform1iv(this.addr,r),Ie(i,r));for(let a=0;a!==s;++a)e.setTexture2D(t[a]||dh,r[a])}function mg(n,t,e){const i=this.cache,s=t.length,r=ta(e,s);Le(i,r)||(n.uniform1iv(this.addr,r),Ie(i,r));for(let a=0;a!==s;++a)e.setTexture3D(t[a]||ph,r[a])}function gg(n,t,e){const i=this.cache,s=t.length,r=ta(e,s);Le(i,r)||(n.uniform1iv(this.addr,r),Ie(i,r));for(let a=0;a!==s;++a)e.setTextureCube(t[a]||mh,r[a])}function _g(n,t,e){const i=this.cache,s=t.length,r=ta(e,s);Le(i,r)||(n.uniform1iv(this.addr,r),Ie(i,r));for(let a=0;a!==s;++a)e.setTexture2DArray(t[a]||fh,r[a])}function xg(n){switch(n){case 5126:return Qm;case 35664:return tg;case 35665:return eg;case 35666:return ng;case 35674:return ig;case 35675:return sg;case 35676:return rg;case 5124:case 35670:return ag;case 35667:case 35671:return og;case 35668:case 35672:return cg;case 35669:case 35673:return lg;case 5125:return hg;case 36294:return ug;case 36295:return dg;case 36296:return fg;case 35678:case 36198:case 36298:case 36306:case 35682:return pg;case 35679:case 36299:case 36307:return mg;case 35680:case 36300:case 36308:case 36293:return gg;case 36289:case 36303:case 36311:case 36292:return _g}}class Mg{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.setValue=Jm(e.type)}}class vg{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=xg(e.type)}}class yg{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,i){const s=this.seq;for(let r=0,a=s.length;r!==a;++r){const o=s[r];o.setValue(t,e[o.id],i)}}}const Oa=/(\w+)(\])?(\[|\.)?/g;function dl(n,t){n.seq.push(t),n.map[t.id]=t}function Sg(n,t,e){const i=n.name,s=i.length;for(Oa.lastIndex=0;;){const r=Oa.exec(i),a=Oa.lastIndex;let o=r[1];const l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){dl(e,c===void 0?new Mg(o,n,t):new vg(o,n,t));break}else{let d=e.map[o];d===void 0&&(d=new yg(o),dl(e,d)),e=d}}}class Br{constructor(t,e){this.seq=[],this.map={};const i=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<i;++s){const r=t.getActiveUniform(e,s),a=t.getUniformLocation(e,r.name);Sg(r,a,this)}}setValue(t,e,i,s){const r=this.map[e];r!==void 0&&r.setValue(t,i,s)}setOptional(t,e,i){const s=e[i];s!==void 0&&this.setValue(t,i,s)}static upload(t,e,i,s){for(let r=0,a=e.length;r!==a;++r){const o=e[r],l=i[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,s)}}static seqWithValue(t,e){const i=[];for(let s=0,r=t.length;s!==r;++s){const a=t[s];a.id in e&&i.push(a)}return i}}function fl(n,t,e){const i=n.createShader(t);return n.shaderSource(i,e),n.compileShader(i),i}const Eg=37297;let bg=0;function Tg(n,t){const e=n.split(`
`),i=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=s;a<r;a++){const o=a+1;i.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return i.join(`
`)}const pl=new Kt;function Ag(n){le._getMatrix(pl,le.workingColorSpace,n);const t=`mat3( ${pl.elements.map(e=>e.toFixed(4))} )`;switch(le.getTransfer(n)){case Gr:return[t,"LinearTransferOETF"];case pe:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",n),[t,"LinearTransferOETF"]}}function ml(n,t,e){const i=n.getShaderParameter(t,n.COMPILE_STATUS),r=(n.getShaderInfoLog(t)||"").trim();if(i&&r==="")return"";const a=/ERROR: 0:(\d+)/.exec(r);if(a){const o=parseInt(a[1]);return e.toUpperCase()+`

`+r+`

`+Tg(n.getShaderSource(t),o)}else return r}function wg(n,t){const e=Ag(t);return[`vec4 ${n}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function Rg(n,t){let e;switch(t){case mu:e="Linear";break;case gu:e="Reinhard";break;case _u:e="Cineon";break;case Gl:e="ACESFilmic";break;case Mu:e="AgX";break;case vu:e="Neutral";break;case xu:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+n+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const wr=new B;function Cg(){le.getLuminanceCoefficients(wr);const n=wr.x.toFixed(4),t=wr.y.toFixed(4),e=wr.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Pg(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ps).join(`
`)}function Dg(n){const t=[];for(const e in n){const i=n[e];i!==!1&&t.push("#define "+e+" "+i)}return t.join(`
`)}function Lg(n,t){const e={},i=n.getProgramParameter(t,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){const r=n.getActiveAttrib(t,s),a=r.name;let o=1;r.type===n.FLOAT_MAT2&&(o=2),r.type===n.FLOAT_MAT3&&(o=3),r.type===n.FLOAT_MAT4&&(o=4),e[a]={type:r.type,location:n.getAttribLocation(t,a),locationSize:o}}return e}function Ps(n){return n!==""}function gl(n,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function _l(n,t){return n.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const Ig=/^[ \t]*#include +<([\w\d./]+)>/gm;function Fo(n){return n.replace(Ig,Fg)}const Ug=new Map;function Fg(n,t){let e=Zt[t];if(e===void 0){const i=Ug.get(t);if(i!==void 0)e=Zt[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,i);else throw new Error("Can not resolve #include <"+t+">")}return Fo(e)}const Ng=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function xl(n){return n.replace(Ng,Og)}function Og(n,t,e,i){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Ml(n){let t=`precision ${n.precision} float;
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
#define LOW_PRECISION`),t}function Bg(n){let t="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===kl?t="SHADOWMAP_TYPE_PCF":n.shadowMapType===$h?t="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===zn&&(t="SHADOWMAP_TYPE_VSM"),t}function zg(n){let t="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case fs:case ps:t="ENVMAP_TYPE_CUBE";break;case Kr:t="ENVMAP_TYPE_CUBE_UV";break}return t}function kg(n){let t="ENVMAP_MODE_REFLECTION";return n.envMap&&n.envMapMode===ps&&(t="ENVMAP_MODE_REFRACTION"),t}function Hg(n){let t="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case Hl:t="ENVMAP_BLENDING_MULTIPLY";break;case fu:t="ENVMAP_BLENDING_MIX";break;case pu:t="ENVMAP_BLENDING_ADD";break}return t}function Gg(n){const t=n.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:i,maxMip:e}}function Vg(n,t,e,i){const s=n.getContext(),r=e.defines;let a=e.vertexShader,o=e.fragmentShader;const l=Bg(e),c=zg(e),u=kg(e),d=Hg(e),p=Gg(e),g=Pg(e),x=Dg(r),v=s.createProgram();let h,f,m=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(h=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,x].filter(Ps).join(`
`),h.length>0&&(h+=`
`),f=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,x].filter(Ps).join(`
`),f.length>0&&(f+=`
`)):(h=[Ml(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,x,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ps).join(`
`),f=[Ml(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,x,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+u:"",e.envMap?"#define "+d:"",p?"#define CUBEUV_TEXEL_WIDTH "+p.texelWidth:"",p?"#define CUBEUV_TEXEL_HEIGHT "+p.texelHeight:"",p?"#define CUBEUV_MAX_MIP "+p.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==si?"#define TONE_MAPPING":"",e.toneMapping!==si?Zt.tonemapping_pars_fragment:"",e.toneMapping!==si?Rg("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Zt.colorspace_pars_fragment,wg("linearToOutputTexel",e.outputColorSpace),Cg(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Ps).join(`
`)),a=Fo(a),a=gl(a,e),a=_l(a,e),o=Fo(o),o=gl(o,e),o=_l(o,e),a=xl(a),o=xl(o),e.isRawShaderMaterial!==!0&&(m=`#version 300 es
`,h=[g,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+h,f=["#define varying in",e.glslVersion===yc?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===yc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);const _=m+h+a,M=m+f+o,T=fl(s,s.VERTEX_SHADER,_),S=fl(s,s.FRAGMENT_SHADER,M);s.attachShader(v,T),s.attachShader(v,S),e.index0AttributeName!==void 0?s.bindAttribLocation(v,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(v,0,"position"),s.linkProgram(v);function w(P){if(n.debug.checkShaderErrors){const C=s.getProgramInfoLog(v)||"",L=s.getShaderInfoLog(T)||"",F=s.getShaderInfoLog(S)||"",U=C.trim(),N=L.trim(),G=F.trim();let z=!0,Z=!0;if(s.getProgramParameter(v,s.LINK_STATUS)===!1)if(z=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,v,T,S);else{const $=ml(s,T,"vertex"),nt=ml(s,S,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(v,s.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+U+`
`+$+`
`+nt)}else U!==""?console.warn("THREE.WebGLProgram: Program Info Log:",U):(N===""||G==="")&&(Z=!1);Z&&(P.diagnostics={runnable:z,programLog:U,vertexShader:{log:N,prefix:h},fragmentShader:{log:G,prefix:f}})}s.deleteShader(T),s.deleteShader(S),D=new Br(s,v),E=Lg(s,v)}let D;this.getUniforms=function(){return D===void 0&&w(this),D};let E;this.getAttributes=function(){return E===void 0&&w(this),E};let b=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return b===!1&&(b=s.getProgramParameter(v,Eg)),b},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(v),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=bg++,this.cacheKey=t,this.usedTimes=1,this.program=v,this.vertexShader=T,this.fragmentShader=S,this}let Wg=0;class Xg{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,i=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(i),a=this._getShaderCacheForMaterial(t);return a.has(s)===!1&&(a.add(s),s.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const i of e)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let i=e.get(t);return i===void 0&&(i=new Set,e.set(t,i)),i}_getShaderStage(t){const e=this.shaderCache;let i=e.get(t);return i===void 0&&(i=new Yg(t),e.set(t,i)),i}}class Yg{constructor(t){this.id=Wg++,this.code=t,this.usedTimes=0}}function qg(n,t,e,i,s,r,a){const o=new tc,l=new Xg,c=new Set,u=[],d=s.logarithmicDepthBuffer,p=s.vertexTextures;let g=s.precision;const x={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(E){return c.add(E),E===0?"uv":`uv${E}`}function h(E,b,P,C,L){const F=C.fog,U=L.geometry,N=E.isMeshStandardMaterial?C.environment:null,G=(E.isMeshStandardMaterial?e:t).get(E.envMap||N),z=G&&G.mapping===Kr?G.image.height:null,Z=x[E.type];E.precision!==null&&(g=s.getMaxPrecision(E.precision),g!==E.precision&&console.warn("THREE.WebGLProgram.getParameters:",E.precision,"not supported, using",g,"instead."));const $=U.morphAttributes.position||U.morphAttributes.normal||U.morphAttributes.color,nt=$!==void 0?$.length:0;let k=0;U.morphAttributes.position!==void 0&&(k=1),U.morphAttributes.normal!==void 0&&(k=2),U.morphAttributes.color!==void 0&&(k=3);let q,ft,ct,X;if(Z){const ie=Cn[Z];q=ie.vertexShader,ft=ie.fragmentShader}else q=E.vertexShader,ft=E.fragmentShader,l.update(E),ct=l.getVertexShaderID(E),X=l.getFragmentShaderID(E);const J=n.getRenderTarget(),ut=n.state.buffers.depth.getReversed(),bt=L.isInstancedMesh===!0,vt=L.isBatchedMesh===!0,Ot=!!E.map,ne=!!E.matcap,I=!!G,Ft=!!E.aoMap,Pt=!!E.lightMap,wt=!!E.bumpMap,Et=!!E.normalMap,jt=!!E.displacementMap,St=!!E.emissiveMap,Dt=!!E.metalnessMap,re=!!E.roughnessMap,at=E.anisotropy>0,A=E.clearcoat>0,y=E.dispersion>0,H=E.iridescence>0,W=E.sheen>0,j=E.transmission>0,K=at&&!!E.anisotropyMap,Tt=A&&!!E.clearcoatMap,ot=A&&!!E.clearcoatNormalMap,dt=A&&!!E.clearcoatRoughnessMap,xt=H&&!!E.iridescenceMap,st=H&&!!E.iridescenceThicknessMap,gt=W&&!!E.sheenColorMap,yt=W&&!!E.sheenRoughnessMap,mt=!!E.specularMap,Mt=!!E.specularColorMap,zt=!!E.specularIntensityMap,O=j&&!!E.transmissionMap,lt=j&&!!E.thicknessMap,_t=!!E.gradientMap,Lt=!!E.alphaMap,ht=E.alphaTest>0,it=!!E.alphaHash,Ut=!!E.extensions;let qt=si;E.toneMapped&&(J===null||J.isXRRenderTarget===!0)&&(qt=n.toneMapping);const ue={shaderID:Z,shaderType:E.type,shaderName:E.name,vertexShader:q,fragmentShader:ft,defines:E.defines,customVertexShaderID:ct,customFragmentShaderID:X,isRawShaderMaterial:E.isRawShaderMaterial===!0,glslVersion:E.glslVersion,precision:g,batching:vt,batchingColor:vt&&L._colorsTexture!==null,instancing:bt,instancingColor:bt&&L.instanceColor!==null,instancingMorph:bt&&L.morphTexture!==null,supportsVertexTextures:p,outputColorSpace:J===null?n.outputColorSpace:J.isXRRenderTarget===!0?J.texture.colorSpace:ms,alphaToCoverage:!!E.alphaToCoverage,map:Ot,matcap:ne,envMap:I,envMapMode:I&&G.mapping,envMapCubeUVHeight:z,aoMap:Ft,lightMap:Pt,bumpMap:wt,normalMap:Et,displacementMap:p&&jt,emissiveMap:St,normalMapObjectSpace:Et&&E.normalMapType===Tu,normalMapTangentSpace:Et&&E.normalMapType===bu,metalnessMap:Dt,roughnessMap:re,anisotropy:at,anisotropyMap:K,clearcoat:A,clearcoatMap:Tt,clearcoatNormalMap:ot,clearcoatRoughnessMap:dt,dispersion:y,iridescence:H,iridescenceMap:xt,iridescenceThicknessMap:st,sheen:W,sheenColorMap:gt,sheenRoughnessMap:yt,specularMap:mt,specularColorMap:Mt,specularIntensityMap:zt,transmission:j,transmissionMap:O,thicknessMap:lt,gradientMap:_t,opaque:E.transparent===!1&&E.blending===Ai&&E.alphaToCoverage===!1,alphaMap:Lt,alphaTest:ht,alphaHash:it,combine:E.combine,mapUv:Ot&&v(E.map.channel),aoMapUv:Ft&&v(E.aoMap.channel),lightMapUv:Pt&&v(E.lightMap.channel),bumpMapUv:wt&&v(E.bumpMap.channel),normalMapUv:Et&&v(E.normalMap.channel),displacementMapUv:jt&&v(E.displacementMap.channel),emissiveMapUv:St&&v(E.emissiveMap.channel),metalnessMapUv:Dt&&v(E.metalnessMap.channel),roughnessMapUv:re&&v(E.roughnessMap.channel),anisotropyMapUv:K&&v(E.anisotropyMap.channel),clearcoatMapUv:Tt&&v(E.clearcoatMap.channel),clearcoatNormalMapUv:ot&&v(E.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:dt&&v(E.clearcoatRoughnessMap.channel),iridescenceMapUv:xt&&v(E.iridescenceMap.channel),iridescenceThicknessMapUv:st&&v(E.iridescenceThicknessMap.channel),sheenColorMapUv:gt&&v(E.sheenColorMap.channel),sheenRoughnessMapUv:yt&&v(E.sheenRoughnessMap.channel),specularMapUv:mt&&v(E.specularMap.channel),specularColorMapUv:Mt&&v(E.specularColorMap.channel),specularIntensityMapUv:zt&&v(E.specularIntensityMap.channel),transmissionMapUv:O&&v(E.transmissionMap.channel),thicknessMapUv:lt&&v(E.thicknessMap.channel),alphaMapUv:Lt&&v(E.alphaMap.channel),vertexTangents:!!U.attributes.tangent&&(Et||at),vertexColors:E.vertexColors,vertexAlphas:E.vertexColors===!0&&!!U.attributes.color&&U.attributes.color.itemSize===4,pointsUvs:L.isPoints===!0&&!!U.attributes.uv&&(Ot||Lt),fog:!!F,useFog:E.fog===!0,fogExp2:!!F&&F.isFogExp2,flatShading:E.flatShading===!0&&E.wireframe===!1,sizeAttenuation:E.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:ut,skinning:L.isSkinnedMesh===!0,morphTargets:U.morphAttributes.position!==void 0,morphNormals:U.morphAttributes.normal!==void 0,morphColors:U.morphAttributes.color!==void 0,morphTargetsCount:nt,morphTextureStride:k,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:E.dithering,shadowMapEnabled:n.shadowMap.enabled&&P.length>0,shadowMapType:n.shadowMap.type,toneMapping:qt,decodeVideoTexture:Ot&&E.map.isVideoTexture===!0&&le.getTransfer(E.map.colorSpace)===pe,decodeVideoTextureEmissive:St&&E.emissiveMap.isVideoTexture===!0&&le.getTransfer(E.emissiveMap.colorSpace)===pe,premultipliedAlpha:E.premultipliedAlpha,doubleSided:E.side===kn,flipSided:E.side===Ze,useDepthPacking:E.depthPacking>=0,depthPacking:E.depthPacking||0,index0AttributeName:E.index0AttributeName,extensionClipCullDistance:Ut&&E.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ut&&E.extensions.multiDraw===!0||vt)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:E.customProgramCacheKey()};return ue.vertexUv1s=c.has(1),ue.vertexUv2s=c.has(2),ue.vertexUv3s=c.has(3),c.clear(),ue}function f(E){const b=[];if(E.shaderID?b.push(E.shaderID):(b.push(E.customVertexShaderID),b.push(E.customFragmentShaderID)),E.defines!==void 0)for(const P in E.defines)b.push(P),b.push(E.defines[P]);return E.isRawShaderMaterial===!1&&(m(b,E),_(b,E),b.push(n.outputColorSpace)),b.push(E.customProgramCacheKey),b.join()}function m(E,b){E.push(b.precision),E.push(b.outputColorSpace),E.push(b.envMapMode),E.push(b.envMapCubeUVHeight),E.push(b.mapUv),E.push(b.alphaMapUv),E.push(b.lightMapUv),E.push(b.aoMapUv),E.push(b.bumpMapUv),E.push(b.normalMapUv),E.push(b.displacementMapUv),E.push(b.emissiveMapUv),E.push(b.metalnessMapUv),E.push(b.roughnessMapUv),E.push(b.anisotropyMapUv),E.push(b.clearcoatMapUv),E.push(b.clearcoatNormalMapUv),E.push(b.clearcoatRoughnessMapUv),E.push(b.iridescenceMapUv),E.push(b.iridescenceThicknessMapUv),E.push(b.sheenColorMapUv),E.push(b.sheenRoughnessMapUv),E.push(b.specularMapUv),E.push(b.specularColorMapUv),E.push(b.specularIntensityMapUv),E.push(b.transmissionMapUv),E.push(b.thicknessMapUv),E.push(b.combine),E.push(b.fogExp2),E.push(b.sizeAttenuation),E.push(b.morphTargetsCount),E.push(b.morphAttributeCount),E.push(b.numDirLights),E.push(b.numPointLights),E.push(b.numSpotLights),E.push(b.numSpotLightMaps),E.push(b.numHemiLights),E.push(b.numRectAreaLights),E.push(b.numDirLightShadows),E.push(b.numPointLightShadows),E.push(b.numSpotLightShadows),E.push(b.numSpotLightShadowsWithMaps),E.push(b.numLightProbes),E.push(b.shadowMapType),E.push(b.toneMapping),E.push(b.numClippingPlanes),E.push(b.numClipIntersection),E.push(b.depthPacking)}function _(E,b){o.disableAll(),b.supportsVertexTextures&&o.enable(0),b.instancing&&o.enable(1),b.instancingColor&&o.enable(2),b.instancingMorph&&o.enable(3),b.matcap&&o.enable(4),b.envMap&&o.enable(5),b.normalMapObjectSpace&&o.enable(6),b.normalMapTangentSpace&&o.enable(7),b.clearcoat&&o.enable(8),b.iridescence&&o.enable(9),b.alphaTest&&o.enable(10),b.vertexColors&&o.enable(11),b.vertexAlphas&&o.enable(12),b.vertexUv1s&&o.enable(13),b.vertexUv2s&&o.enable(14),b.vertexUv3s&&o.enable(15),b.vertexTangents&&o.enable(16),b.anisotropy&&o.enable(17),b.alphaHash&&o.enable(18),b.batching&&o.enable(19),b.dispersion&&o.enable(20),b.batchingColor&&o.enable(21),b.gradientMap&&o.enable(22),E.push(o.mask),o.disableAll(),b.fog&&o.enable(0),b.useFog&&o.enable(1),b.flatShading&&o.enable(2),b.logarithmicDepthBuffer&&o.enable(3),b.reversedDepthBuffer&&o.enable(4),b.skinning&&o.enable(5),b.morphTargets&&o.enable(6),b.morphNormals&&o.enable(7),b.morphColors&&o.enable(8),b.premultipliedAlpha&&o.enable(9),b.shadowMapEnabled&&o.enable(10),b.doubleSided&&o.enable(11),b.flipSided&&o.enable(12),b.useDepthPacking&&o.enable(13),b.dithering&&o.enable(14),b.transmission&&o.enable(15),b.sheen&&o.enable(16),b.opaque&&o.enable(17),b.pointsUvs&&o.enable(18),b.decodeVideoTexture&&o.enable(19),b.decodeVideoTextureEmissive&&o.enable(20),b.alphaToCoverage&&o.enable(21),E.push(o.mask)}function M(E){const b=x[E.type];let P;if(b){const C=Cn[b];P=md.clone(C.uniforms)}else P=E.uniforms;return P}function T(E,b){let P;for(let C=0,L=u.length;C<L;C++){const F=u[C];if(F.cacheKey===b){P=F,++P.usedTimes;break}}return P===void 0&&(P=new Vg(n,b,E,r),u.push(P)),P}function S(E){if(--E.usedTimes===0){const b=u.indexOf(E);u[b]=u[u.length-1],u.pop(),E.destroy()}}function w(E){l.remove(E)}function D(){l.dispose()}return{getParameters:h,getProgramCacheKey:f,getUniforms:M,acquireProgram:T,releaseProgram:S,releaseShaderCache:w,programs:u,dispose:D}}function $g(){let n=new WeakMap;function t(a){return n.has(a)}function e(a){let o=n.get(a);return o===void 0&&(o={},n.set(a,o)),o}function i(a){n.delete(a)}function s(a,o,l){n.get(a)[o]=l}function r(){n=new WeakMap}return{has:t,get:e,remove:i,update:s,dispose:r}}function jg(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.material.id!==t.material.id?n.material.id-t.material.id:n.z!==t.z?n.z-t.z:n.id-t.id}function vl(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.z!==t.z?t.z-n.z:n.id-t.id}function yl(){const n=[];let t=0;const e=[],i=[],s=[];function r(){t=0,e.length=0,i.length=0,s.length=0}function a(d,p,g,x,v,h){let f=n[t];return f===void 0?(f={id:d.id,object:d,geometry:p,material:g,groupOrder:x,renderOrder:d.renderOrder,z:v,group:h},n[t]=f):(f.id=d.id,f.object=d,f.geometry=p,f.material=g,f.groupOrder=x,f.renderOrder=d.renderOrder,f.z=v,f.group=h),t++,f}function o(d,p,g,x,v,h){const f=a(d,p,g,x,v,h);g.transmission>0?i.push(f):g.transparent===!0?s.push(f):e.push(f)}function l(d,p,g,x,v,h){const f=a(d,p,g,x,v,h);g.transmission>0?i.unshift(f):g.transparent===!0?s.unshift(f):e.unshift(f)}function c(d,p){e.length>1&&e.sort(d||jg),i.length>1&&i.sort(p||vl),s.length>1&&s.sort(p||vl)}function u(){for(let d=t,p=n.length;d<p;d++){const g=n[d];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:e,transmissive:i,transparent:s,init:r,push:o,unshift:l,finish:u,sort:c}}function Kg(){let n=new WeakMap;function t(i,s){const r=n.get(i);let a;return r===void 0?(a=new yl,n.set(i,[a])):s>=r.length?(a=new yl,r.push(a)):a=r[s],a}function e(){n=new WeakMap}return{get:t,dispose:e}}function Zg(){const n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new B,color:new Vt};break;case"SpotLight":e={position:new B,direction:new B,color:new Vt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new B,color:new Vt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new B,skyColor:new Vt,groundColor:new Vt};break;case"RectAreaLight":e={color:new Vt,position:new B,halfWidth:new B,halfHeight:new B};break}return n[t.id]=e,e}}}function Jg(){const n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Xt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Xt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Xt,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[t.id]=e,e}}}let Qg=0;function t0(n,t){return(t.castShadow?2:0)-(n.castShadow?2:0)+(t.map?1:0)-(n.map?1:0)}function e0(n){const t=new Zg,e=Jg(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new B);const s=new B,r=new ve,a=new ve;function o(c){let u=0,d=0,p=0;for(let E=0;E<9;E++)i.probe[E].set(0,0,0);let g=0,x=0,v=0,h=0,f=0,m=0,_=0,M=0,T=0,S=0,w=0;c.sort(t0);for(let E=0,b=c.length;E<b;E++){const P=c[E],C=P.color,L=P.intensity,F=P.distance,U=P.shadow&&P.shadow.map?P.shadow.map.texture:null;if(P.isAmbientLight)u+=C.r*L,d+=C.g*L,p+=C.b*L;else if(P.isLightProbe){for(let N=0;N<9;N++)i.probe[N].addScaledVector(P.sh.coefficients[N],L);w++}else if(P.isDirectionalLight){const N=t.get(P);if(N.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){const G=P.shadow,z=e.get(P);z.shadowIntensity=G.intensity,z.shadowBias=G.bias,z.shadowNormalBias=G.normalBias,z.shadowRadius=G.radius,z.shadowMapSize=G.mapSize,i.directionalShadow[g]=z,i.directionalShadowMap[g]=U,i.directionalShadowMatrix[g]=P.shadow.matrix,m++}i.directional[g]=N,g++}else if(P.isSpotLight){const N=t.get(P);N.position.setFromMatrixPosition(P.matrixWorld),N.color.copy(C).multiplyScalar(L),N.distance=F,N.coneCos=Math.cos(P.angle),N.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),N.decay=P.decay,i.spot[v]=N;const G=P.shadow;if(P.map&&(i.spotLightMap[T]=P.map,T++,G.updateMatrices(P),P.castShadow&&S++),i.spotLightMatrix[v]=G.matrix,P.castShadow){const z=e.get(P);z.shadowIntensity=G.intensity,z.shadowBias=G.bias,z.shadowNormalBias=G.normalBias,z.shadowRadius=G.radius,z.shadowMapSize=G.mapSize,i.spotShadow[v]=z,i.spotShadowMap[v]=U,M++}v++}else if(P.isRectAreaLight){const N=t.get(P);N.color.copy(C).multiplyScalar(L),N.halfWidth.set(P.width*.5,0,0),N.halfHeight.set(0,P.height*.5,0),i.rectArea[h]=N,h++}else if(P.isPointLight){const N=t.get(P);if(N.color.copy(P.color).multiplyScalar(P.intensity),N.distance=P.distance,N.decay=P.decay,P.castShadow){const G=P.shadow,z=e.get(P);z.shadowIntensity=G.intensity,z.shadowBias=G.bias,z.shadowNormalBias=G.normalBias,z.shadowRadius=G.radius,z.shadowMapSize=G.mapSize,z.shadowCameraNear=G.camera.near,z.shadowCameraFar=G.camera.far,i.pointShadow[x]=z,i.pointShadowMap[x]=U,i.pointShadowMatrix[x]=P.shadow.matrix,_++}i.point[x]=N,x++}else if(P.isHemisphereLight){const N=t.get(P);N.skyColor.copy(P.color).multiplyScalar(L),N.groundColor.copy(P.groundColor).multiplyScalar(L),i.hemi[f]=N,f++}}h>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=At.LTC_FLOAT_1,i.rectAreaLTC2=At.LTC_FLOAT_2):(i.rectAreaLTC1=At.LTC_HALF_1,i.rectAreaLTC2=At.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=d,i.ambient[2]=p;const D=i.hash;(D.directionalLength!==g||D.pointLength!==x||D.spotLength!==v||D.rectAreaLength!==h||D.hemiLength!==f||D.numDirectionalShadows!==m||D.numPointShadows!==_||D.numSpotShadows!==M||D.numSpotMaps!==T||D.numLightProbes!==w)&&(i.directional.length=g,i.spot.length=v,i.rectArea.length=h,i.point.length=x,i.hemi.length=f,i.directionalShadow.length=m,i.directionalShadowMap.length=m,i.pointShadow.length=_,i.pointShadowMap.length=_,i.spotShadow.length=M,i.spotShadowMap.length=M,i.directionalShadowMatrix.length=m,i.pointShadowMatrix.length=_,i.spotLightMatrix.length=M+T-S,i.spotLightMap.length=T,i.numSpotLightShadowsWithMaps=S,i.numLightProbes=w,D.directionalLength=g,D.pointLength=x,D.spotLength=v,D.rectAreaLength=h,D.hemiLength=f,D.numDirectionalShadows=m,D.numPointShadows=_,D.numSpotShadows=M,D.numSpotMaps=T,D.numLightProbes=w,i.version=Qg++)}function l(c,u){let d=0,p=0,g=0,x=0,v=0;const h=u.matrixWorldInverse;for(let f=0,m=c.length;f<m;f++){const _=c[f];if(_.isDirectionalLight){const M=i.directional[d];M.direction.setFromMatrixPosition(_.matrixWorld),s.setFromMatrixPosition(_.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(h),d++}else if(_.isSpotLight){const M=i.spot[g];M.position.setFromMatrixPosition(_.matrixWorld),M.position.applyMatrix4(h),M.direction.setFromMatrixPosition(_.matrixWorld),s.setFromMatrixPosition(_.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(h),g++}else if(_.isRectAreaLight){const M=i.rectArea[x];M.position.setFromMatrixPosition(_.matrixWorld),M.position.applyMatrix4(h),a.identity(),r.copy(_.matrixWorld),r.premultiply(h),a.extractRotation(r),M.halfWidth.set(_.width*.5,0,0),M.halfHeight.set(0,_.height*.5,0),M.halfWidth.applyMatrix4(a),M.halfHeight.applyMatrix4(a),x++}else if(_.isPointLight){const M=i.point[p];M.position.setFromMatrixPosition(_.matrixWorld),M.position.applyMatrix4(h),p++}else if(_.isHemisphereLight){const M=i.hemi[v];M.direction.setFromMatrixPosition(_.matrixWorld),M.direction.transformDirection(h),v++}}}return{setup:o,setupView:l,state:i}}function Sl(n){const t=new e0(n),e=[],i=[];function s(u){c.camera=u,e.length=0,i.length=0}function r(u){e.push(u)}function a(u){i.push(u)}function o(){t.setup(e)}function l(u){t.setupView(e,u)}const c={lightsArray:e,shadowsArray:i,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:o,setupLightsView:l,pushLight:r,pushShadow:a}}function n0(n){let t=new WeakMap;function e(s,r=0){const a=t.get(s);let o;return a===void 0?(o=new Sl(n),t.set(s,[o])):r>=a.length?(o=new Sl(n),a.push(o)):o=a[r],o}function i(){t=new WeakMap}return{get:e,dispose:i}}const i0=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,s0=`uniform sampler2D shadow_pass;
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
}`;function r0(n,t,e){let i=new ch;const s=new Xt,r=new Xt,a=new Ee,o=new Rd({depthPacking:Eu}),l=new Cd,c={},u=e.maxTextureSize,d={[oi]:Ze,[Ze]:oi,[kn]:kn},p=new li({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Xt},radius:{value:4}},vertexShader:i0,fragmentShader:s0}),g=p.clone();g.defines.HORIZONTAL_PASS=1;const x=new ee;x.setAttribute("position",new Qt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new fn(x,p),h=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=kl;let f=this.type;this.render=function(S,w,D){if(h.enabled===!1||h.autoUpdate===!1&&h.needsUpdate===!1||S.length===0)return;const E=n.getRenderTarget(),b=n.getActiveCubeFace(),P=n.getActiveMipmapLevel(),C=n.state;C.setBlending(ii),C.buffers.depth.getReversed()===!0?C.buffers.color.setClear(0,0,0,0):C.buffers.color.setClear(1,1,1,1),C.buffers.depth.setTest(!0),C.setScissorTest(!1);const L=f!==zn&&this.type===zn,F=f===zn&&this.type!==zn;for(let U=0,N=S.length;U<N;U++){const G=S[U],z=G.shadow;if(z===void 0){console.warn("THREE.WebGLShadowMap:",G,"has no shadow.");continue}if(z.autoUpdate===!1&&z.needsUpdate===!1)continue;s.copy(z.mapSize);const Z=z.getFrameExtents();if(s.multiply(Z),r.copy(z.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/Z.x),s.x=r.x*Z.x,z.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/Z.y),s.y=r.y*Z.y,z.mapSize.y=r.y)),z.map===null||L===!0||F===!0){const nt=this.type!==zn?{minFilter:wn,magFilter:wn}:{};z.map!==null&&z.map.dispose(),z.map=new Ci(s.x,s.y,nt),z.map.texture.name=G.name+".shadowMap",z.camera.updateProjectionMatrix()}n.setRenderTarget(z.map),n.clear();const $=z.getViewportCount();for(let nt=0;nt<$;nt++){const k=z.getViewport(nt);a.set(r.x*k.x,r.y*k.y,r.x*k.z,r.y*k.w),C.viewport(a),z.updateMatrices(G,nt),i=z.getFrustum(),M(w,D,z.camera,G,this.type)}z.isPointLightShadow!==!0&&this.type===zn&&m(z,D),z.needsUpdate=!1}f=this.type,h.needsUpdate=!1,n.setRenderTarget(E,b,P)};function m(S,w){const D=t.update(v);p.defines.VSM_SAMPLES!==S.blurSamples&&(p.defines.VSM_SAMPLES=S.blurSamples,g.defines.VSM_SAMPLES=S.blurSamples,p.needsUpdate=!0,g.needsUpdate=!0),S.mapPass===null&&(S.mapPass=new Ci(s.x,s.y)),p.uniforms.shadow_pass.value=S.map.texture,p.uniforms.resolution.value=S.mapSize,p.uniforms.radius.value=S.radius,n.setRenderTarget(S.mapPass),n.clear(),n.renderBufferDirect(w,null,D,p,v,null),g.uniforms.shadow_pass.value=S.mapPass.texture,g.uniforms.resolution.value=S.mapSize,g.uniforms.radius.value=S.radius,n.setRenderTarget(S.map),n.clear(),n.renderBufferDirect(w,null,D,g,v,null)}function _(S,w,D,E){let b=null;const P=D.isPointLight===!0?S.customDistanceMaterial:S.customDepthMaterial;if(P!==void 0)b=P;else if(b=D.isPointLight===!0?l:o,n.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0||w.map&&w.alphaTest>0||w.alphaToCoverage===!0){const C=b.uuid,L=w.uuid;let F=c[C];F===void 0&&(F={},c[C]=F);let U=F[L];U===void 0&&(U=b.clone(),F[L]=U,w.addEventListener("dispose",T)),b=U}if(b.visible=w.visible,b.wireframe=w.wireframe,E===zn?b.side=w.shadowSide!==null?w.shadowSide:w.side:b.side=w.shadowSide!==null?w.shadowSide:d[w.side],b.alphaMap=w.alphaMap,b.alphaTest=w.alphaToCoverage===!0?.5:w.alphaTest,b.map=w.map,b.clipShadows=w.clipShadows,b.clippingPlanes=w.clippingPlanes,b.clipIntersection=w.clipIntersection,b.displacementMap=w.displacementMap,b.displacementScale=w.displacementScale,b.displacementBias=w.displacementBias,b.wireframeLinewidth=w.wireframeLinewidth,b.linewidth=w.linewidth,D.isPointLight===!0&&b.isMeshDistanceMaterial===!0){const C=n.properties.get(b);C.light=D}return b}function M(S,w,D,E,b){if(S.visible===!1)return;if(S.layers.test(w.layers)&&(S.isMesh||S.isLine||S.isPoints)&&(S.castShadow||S.receiveShadow&&b===zn)&&(!S.frustumCulled||i.intersectsObject(S))){S.modelViewMatrix.multiplyMatrices(D.matrixWorldInverse,S.matrixWorld);const L=t.update(S),F=S.material;if(Array.isArray(F)){const U=L.groups;for(let N=0,G=U.length;N<G;N++){const z=U[N],Z=F[z.materialIndex];if(Z&&Z.visible){const $=_(S,Z,E,b);S.onBeforeShadow(n,S,w,D,L,$,z),n.renderBufferDirect(D,null,L,$,S,z),S.onAfterShadow(n,S,w,D,L,$,z)}}}else if(F.visible){const U=_(S,F,E,b);S.onBeforeShadow(n,S,w,D,L,U,null),n.renderBufferDirect(D,null,L,U,S,null),S.onAfterShadow(n,S,w,D,L,U,null)}}const C=S.children;for(let L=0,F=C.length;L<F;L++)M(C[L],w,D,E,b)}function T(S){S.target.removeEventListener("dispose",T);for(const D in c){const E=c[D],b=S.target.uuid;b in E&&(E[b].dispose(),delete E[b])}}}const a0={[Ya]:qa,[$a]:Za,[ja]:Ja,[ds]:Ka,[qa]:Ya,[Za]:$a,[Ja]:ja,[Ka]:ds};function o0(n,t){function e(){let O=!1;const lt=new Ee;let _t=null;const Lt=new Ee(0,0,0,0);return{setMask:function(ht){_t!==ht&&!O&&(n.colorMask(ht,ht,ht,ht),_t=ht)},setLocked:function(ht){O=ht},setClear:function(ht,it,Ut,qt,ue){ue===!0&&(ht*=qt,it*=qt,Ut*=qt),lt.set(ht,it,Ut,qt),Lt.equals(lt)===!1&&(n.clearColor(ht,it,Ut,qt),Lt.copy(lt))},reset:function(){O=!1,_t=null,Lt.set(-1,0,0,0)}}}function i(){let O=!1,lt=!1,_t=null,Lt=null,ht=null;return{setReversed:function(it){if(lt!==it){const Ut=t.get("EXT_clip_control");it?Ut.clipControlEXT(Ut.LOWER_LEFT_EXT,Ut.ZERO_TO_ONE_EXT):Ut.clipControlEXT(Ut.LOWER_LEFT_EXT,Ut.NEGATIVE_ONE_TO_ONE_EXT),lt=it;const qt=ht;ht=null,this.setClear(qt)}},getReversed:function(){return lt},setTest:function(it){it?J(n.DEPTH_TEST):ut(n.DEPTH_TEST)},setMask:function(it){_t!==it&&!O&&(n.depthMask(it),_t=it)},setFunc:function(it){if(lt&&(it=a0[it]),Lt!==it){switch(it){case Ya:n.depthFunc(n.NEVER);break;case qa:n.depthFunc(n.ALWAYS);break;case $a:n.depthFunc(n.LESS);break;case ds:n.depthFunc(n.LEQUAL);break;case ja:n.depthFunc(n.EQUAL);break;case Ka:n.depthFunc(n.GEQUAL);break;case Za:n.depthFunc(n.GREATER);break;case Ja:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}Lt=it}},setLocked:function(it){O=it},setClear:function(it){ht!==it&&(lt&&(it=1-it),n.clearDepth(it),ht=it)},reset:function(){O=!1,_t=null,Lt=null,ht=null,lt=!1}}}function s(){let O=!1,lt=null,_t=null,Lt=null,ht=null,it=null,Ut=null,qt=null,ue=null;return{setTest:function(ie){O||(ie?J(n.STENCIL_TEST):ut(n.STENCIL_TEST))},setMask:function(ie){lt!==ie&&!O&&(n.stencilMask(ie),lt=ie)},setFunc:function(ie,sn,qe){(_t!==ie||Lt!==sn||ht!==qe)&&(n.stencilFunc(ie,sn,qe),_t=ie,Lt=sn,ht=qe)},setOp:function(ie,sn,qe){(it!==ie||Ut!==sn||qt!==qe)&&(n.stencilOp(ie,sn,qe),it=ie,Ut=sn,qt=qe)},setLocked:function(ie){O=ie},setClear:function(ie){ue!==ie&&(n.clearStencil(ie),ue=ie)},reset:function(){O=!1,lt=null,_t=null,Lt=null,ht=null,it=null,Ut=null,qt=null,ue=null}}}const r=new e,a=new i,o=new s,l=new WeakMap,c=new WeakMap;let u={},d={},p=new WeakMap,g=[],x=null,v=!1,h=null,f=null,m=null,_=null,M=null,T=null,S=null,w=new Vt(0,0,0),D=0,E=!1,b=null,P=null,C=null,L=null,F=null;const U=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let N=!1,G=0;const z=n.getParameter(n.VERSION);z.indexOf("WebGL")!==-1?(G=parseFloat(/^WebGL (\d)/.exec(z)[1]),N=G>=1):z.indexOf("OpenGL ES")!==-1&&(G=parseFloat(/^OpenGL ES (\d)/.exec(z)[1]),N=G>=2);let Z=null,$={};const nt=n.getParameter(n.SCISSOR_BOX),k=n.getParameter(n.VIEWPORT),q=new Ee().fromArray(nt),ft=new Ee().fromArray(k);function ct(O,lt,_t,Lt){const ht=new Uint8Array(4),it=n.createTexture();n.bindTexture(O,it),n.texParameteri(O,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(O,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Ut=0;Ut<_t;Ut++)O===n.TEXTURE_3D||O===n.TEXTURE_2D_ARRAY?n.texImage3D(lt,0,n.RGBA,1,1,Lt,0,n.RGBA,n.UNSIGNED_BYTE,ht):n.texImage2D(lt+Ut,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,ht);return it}const X={};X[n.TEXTURE_2D]=ct(n.TEXTURE_2D,n.TEXTURE_2D,1),X[n.TEXTURE_CUBE_MAP]=ct(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),X[n.TEXTURE_2D_ARRAY]=ct(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),X[n.TEXTURE_3D]=ct(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),J(n.DEPTH_TEST),a.setFunc(ds),wt(!1),Et(_c),J(n.CULL_FACE),Ft(ii);function J(O){u[O]!==!0&&(n.enable(O),u[O]=!0)}function ut(O){u[O]!==!1&&(n.disable(O),u[O]=!1)}function bt(O,lt){return d[O]!==lt?(n.bindFramebuffer(O,lt),d[O]=lt,O===n.DRAW_FRAMEBUFFER&&(d[n.FRAMEBUFFER]=lt),O===n.FRAMEBUFFER&&(d[n.DRAW_FRAMEBUFFER]=lt),!0):!1}function vt(O,lt){let _t=g,Lt=!1;if(O){_t=p.get(lt),_t===void 0&&(_t=[],p.set(lt,_t));const ht=O.textures;if(_t.length!==ht.length||_t[0]!==n.COLOR_ATTACHMENT0){for(let it=0,Ut=ht.length;it<Ut;it++)_t[it]=n.COLOR_ATTACHMENT0+it;_t.length=ht.length,Lt=!0}}else _t[0]!==n.BACK&&(_t[0]=n.BACK,Lt=!0);Lt&&n.drawBuffers(_t)}function Ot(O){return x!==O?(n.useProgram(O),x=O,!0):!1}const ne={[yi]:n.FUNC_ADD,[Kh]:n.FUNC_SUBTRACT,[Zh]:n.FUNC_REVERSE_SUBTRACT};ne[Jh]=n.MIN,ne[Qh]=n.MAX;const I={[tu]:n.ZERO,[eu]:n.ONE,[nu]:n.SRC_COLOR,[Wa]:n.SRC_ALPHA,[cu]:n.SRC_ALPHA_SATURATE,[au]:n.DST_COLOR,[su]:n.DST_ALPHA,[iu]:n.ONE_MINUS_SRC_COLOR,[Xa]:n.ONE_MINUS_SRC_ALPHA,[ou]:n.ONE_MINUS_DST_COLOR,[ru]:n.ONE_MINUS_DST_ALPHA,[lu]:n.CONSTANT_COLOR,[hu]:n.ONE_MINUS_CONSTANT_COLOR,[uu]:n.CONSTANT_ALPHA,[du]:n.ONE_MINUS_CONSTANT_ALPHA};function Ft(O,lt,_t,Lt,ht,it,Ut,qt,ue,ie){if(O===ii){v===!0&&(ut(n.BLEND),v=!1);return}if(v===!1&&(J(n.BLEND),v=!0),O!==jh){if(O!==h||ie!==E){if((f!==yi||M!==yi)&&(n.blendEquation(n.FUNC_ADD),f=yi,M=yi),ie)switch(O){case Ai:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Bt:n.blendFunc(n.ONE,n.ONE);break;case xc:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Mc:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",O);break}else switch(O){case Ai:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Bt:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case xc:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Mc:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",O);break}m=null,_=null,T=null,S=null,w.set(0,0,0),D=0,h=O,E=ie}return}ht=ht||lt,it=it||_t,Ut=Ut||Lt,(lt!==f||ht!==M)&&(n.blendEquationSeparate(ne[lt],ne[ht]),f=lt,M=ht),(_t!==m||Lt!==_||it!==T||Ut!==S)&&(n.blendFuncSeparate(I[_t],I[Lt],I[it],I[Ut]),m=_t,_=Lt,T=it,S=Ut),(qt.equals(w)===!1||ue!==D)&&(n.blendColor(qt.r,qt.g,qt.b,ue),w.copy(qt),D=ue),h=O,E=!1}function Pt(O,lt){O.side===kn?ut(n.CULL_FACE):J(n.CULL_FACE);let _t=O.side===Ze;lt&&(_t=!_t),wt(_t),O.blending===Ai&&O.transparent===!1?Ft(ii):Ft(O.blending,O.blendEquation,O.blendSrc,O.blendDst,O.blendEquationAlpha,O.blendSrcAlpha,O.blendDstAlpha,O.blendColor,O.blendAlpha,O.premultipliedAlpha),a.setFunc(O.depthFunc),a.setTest(O.depthTest),a.setMask(O.depthWrite),r.setMask(O.colorWrite);const Lt=O.stencilWrite;o.setTest(Lt),Lt&&(o.setMask(O.stencilWriteMask),o.setFunc(O.stencilFunc,O.stencilRef,O.stencilFuncMask),o.setOp(O.stencilFail,O.stencilZFail,O.stencilZPass)),St(O.polygonOffset,O.polygonOffsetFactor,O.polygonOffsetUnits),O.alphaToCoverage===!0?J(n.SAMPLE_ALPHA_TO_COVERAGE):ut(n.SAMPLE_ALPHA_TO_COVERAGE)}function wt(O){b!==O&&(O?n.frontFace(n.CW):n.frontFace(n.CCW),b=O)}function Et(O){O!==Yh?(J(n.CULL_FACE),O!==P&&(O===_c?n.cullFace(n.BACK):O===qh?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):ut(n.CULL_FACE),P=O}function jt(O){O!==C&&(N&&n.lineWidth(O),C=O)}function St(O,lt,_t){O?(J(n.POLYGON_OFFSET_FILL),(L!==lt||F!==_t)&&(n.polygonOffset(lt,_t),L=lt,F=_t)):ut(n.POLYGON_OFFSET_FILL)}function Dt(O){O?J(n.SCISSOR_TEST):ut(n.SCISSOR_TEST)}function re(O){O===void 0&&(O=n.TEXTURE0+U-1),Z!==O&&(n.activeTexture(O),Z=O)}function at(O,lt,_t){_t===void 0&&(Z===null?_t=n.TEXTURE0+U-1:_t=Z);let Lt=$[_t];Lt===void 0&&(Lt={type:void 0,texture:void 0},$[_t]=Lt),(Lt.type!==O||Lt.texture!==lt)&&(Z!==_t&&(n.activeTexture(_t),Z=_t),n.bindTexture(O,lt||X[O]),Lt.type=O,Lt.texture=lt)}function A(){const O=$[Z];O!==void 0&&O.type!==void 0&&(n.bindTexture(O.type,null),O.type=void 0,O.texture=void 0)}function y(){try{n.compressedTexImage2D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function H(){try{n.compressedTexImage3D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function W(){try{n.texSubImage2D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function j(){try{n.texSubImage3D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function K(){try{n.compressedTexSubImage2D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Tt(){try{n.compressedTexSubImage3D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function ot(){try{n.texStorage2D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function dt(){try{n.texStorage3D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function xt(){try{n.texImage2D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function st(){try{n.texImage3D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function gt(O){q.equals(O)===!1&&(n.scissor(O.x,O.y,O.z,O.w),q.copy(O))}function yt(O){ft.equals(O)===!1&&(n.viewport(O.x,O.y,O.z,O.w),ft.copy(O))}function mt(O,lt){let _t=c.get(lt);_t===void 0&&(_t=new WeakMap,c.set(lt,_t));let Lt=_t.get(O);Lt===void 0&&(Lt=n.getUniformBlockIndex(lt,O.name),_t.set(O,Lt))}function Mt(O,lt){const Lt=c.get(lt).get(O);l.get(lt)!==Lt&&(n.uniformBlockBinding(lt,Lt,O.__bindingPointIndex),l.set(lt,Lt))}function zt(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),a.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),u={},Z=null,$={},d={},p=new WeakMap,g=[],x=null,v=!1,h=null,f=null,m=null,_=null,M=null,T=null,S=null,w=new Vt(0,0,0),D=0,E=!1,b=null,P=null,C=null,L=null,F=null,q.set(0,0,n.canvas.width,n.canvas.height),ft.set(0,0,n.canvas.width,n.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:J,disable:ut,bindFramebuffer:bt,drawBuffers:vt,useProgram:Ot,setBlending:Ft,setMaterial:Pt,setFlipSided:wt,setCullFace:Et,setLineWidth:jt,setPolygonOffset:St,setScissorTest:Dt,activeTexture:re,bindTexture:at,unbindTexture:A,compressedTexImage2D:y,compressedTexImage3D:H,texImage2D:xt,texImage3D:st,updateUBOMapping:mt,uniformBlockBinding:Mt,texStorage2D:ot,texStorage3D:dt,texSubImage2D:W,texSubImage3D:j,compressedTexSubImage2D:K,compressedTexSubImage3D:Tt,scissor:gt,viewport:yt,reset:zt}}function c0(n,t,e,i,s,r,a){const o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Xt,u=new WeakMap;let d;const p=new WeakMap;let g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function x(A,y){return g?new OffscreenCanvas(A,y):Wr("canvas")}function v(A,y,H){let W=1;const j=at(A);if((j.width>H||j.height>H)&&(W=H/Math.max(j.width,j.height)),W<1)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap||typeof VideoFrame<"u"&&A instanceof VideoFrame){const K=Math.floor(W*j.width),Tt=Math.floor(W*j.height);d===void 0&&(d=x(K,Tt));const ot=y?x(K,Tt):d;return ot.width=K,ot.height=Tt,ot.getContext("2d").drawImage(A,0,0,K,Tt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+j.width+"x"+j.height+") to ("+K+"x"+Tt+")."),ot}else return"data"in A&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+j.width+"x"+j.height+")."),A;return A}function h(A){return A.generateMipmaps}function f(A){n.generateMipmap(A)}function m(A){return A.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:A.isWebGL3DRenderTarget?n.TEXTURE_3D:A.isWebGLArrayRenderTarget||A.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function _(A,y,H,W,j=!1){if(A!==null){if(n[A]!==void 0)return n[A];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let K=y;if(y===n.RED&&(H===n.FLOAT&&(K=n.R32F),H===n.HALF_FLOAT&&(K=n.R16F),H===n.UNSIGNED_BYTE&&(K=n.R8)),y===n.RED_INTEGER&&(H===n.UNSIGNED_BYTE&&(K=n.R8UI),H===n.UNSIGNED_SHORT&&(K=n.R16UI),H===n.UNSIGNED_INT&&(K=n.R32UI),H===n.BYTE&&(K=n.R8I),H===n.SHORT&&(K=n.R16I),H===n.INT&&(K=n.R32I)),y===n.RG&&(H===n.FLOAT&&(K=n.RG32F),H===n.HALF_FLOAT&&(K=n.RG16F),H===n.UNSIGNED_BYTE&&(K=n.RG8)),y===n.RG_INTEGER&&(H===n.UNSIGNED_BYTE&&(K=n.RG8UI),H===n.UNSIGNED_SHORT&&(K=n.RG16UI),H===n.UNSIGNED_INT&&(K=n.RG32UI),H===n.BYTE&&(K=n.RG8I),H===n.SHORT&&(K=n.RG16I),H===n.INT&&(K=n.RG32I)),y===n.RGB_INTEGER&&(H===n.UNSIGNED_BYTE&&(K=n.RGB8UI),H===n.UNSIGNED_SHORT&&(K=n.RGB16UI),H===n.UNSIGNED_INT&&(K=n.RGB32UI),H===n.BYTE&&(K=n.RGB8I),H===n.SHORT&&(K=n.RGB16I),H===n.INT&&(K=n.RGB32I)),y===n.RGBA_INTEGER&&(H===n.UNSIGNED_BYTE&&(K=n.RGBA8UI),H===n.UNSIGNED_SHORT&&(K=n.RGBA16UI),H===n.UNSIGNED_INT&&(K=n.RGBA32UI),H===n.BYTE&&(K=n.RGBA8I),H===n.SHORT&&(K=n.RGBA16I),H===n.INT&&(K=n.RGBA32I)),y===n.RGB&&(H===n.UNSIGNED_INT_5_9_9_9_REV&&(K=n.RGB9_E5),H===n.UNSIGNED_INT_10F_11F_11F_REV&&(K=n.R11F_G11F_B10F)),y===n.RGBA){const Tt=j?Gr:le.getTransfer(W);H===n.FLOAT&&(K=n.RGBA32F),H===n.HALF_FLOAT&&(K=n.RGBA16F),H===n.UNSIGNED_BYTE&&(K=Tt===pe?n.SRGB8_ALPHA8:n.RGBA8),H===n.UNSIGNED_SHORT_4_4_4_4&&(K=n.RGBA4),H===n.UNSIGNED_SHORT_5_5_5_1&&(K=n.RGB5_A1)}return(K===n.R16F||K===n.R32F||K===n.RG16F||K===n.RG32F||K===n.RGBA16F||K===n.RGBA32F)&&t.get("EXT_color_buffer_float"),K}function M(A,y){let H;return A?y===null||y===Ri||y===Os?H=n.DEPTH24_STENCIL8:y===Hn?H=n.DEPTH32F_STENCIL8:y===Ns&&(H=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):y===null||y===Ri||y===Os?H=n.DEPTH_COMPONENT24:y===Hn?H=n.DEPTH_COMPONENT32F:y===Ns&&(H=n.DEPTH_COMPONENT16),H}function T(A,y){return h(A)===!0||A.isFramebufferTexture&&A.minFilter!==wn&&A.minFilter!==En?Math.log2(Math.max(y.width,y.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?y.mipmaps.length:1}function S(A){const y=A.target;y.removeEventListener("dispose",S),D(y),y.isVideoTexture&&u.delete(y)}function w(A){const y=A.target;y.removeEventListener("dispose",w),b(y)}function D(A){const y=i.get(A);if(y.__webglInit===void 0)return;const H=A.source,W=p.get(H);if(W){const j=W[y.__cacheKey];j.usedTimes--,j.usedTimes===0&&E(A),Object.keys(W).length===0&&p.delete(H)}i.remove(A)}function E(A){const y=i.get(A);n.deleteTexture(y.__webglTexture);const H=A.source,W=p.get(H);delete W[y.__cacheKey],a.memory.textures--}function b(A){const y=i.get(A);if(A.depthTexture&&(A.depthTexture.dispose(),i.remove(A.depthTexture)),A.isWebGLCubeRenderTarget)for(let W=0;W<6;W++){if(Array.isArray(y.__webglFramebuffer[W]))for(let j=0;j<y.__webglFramebuffer[W].length;j++)n.deleteFramebuffer(y.__webglFramebuffer[W][j]);else n.deleteFramebuffer(y.__webglFramebuffer[W]);y.__webglDepthbuffer&&n.deleteRenderbuffer(y.__webglDepthbuffer[W])}else{if(Array.isArray(y.__webglFramebuffer))for(let W=0;W<y.__webglFramebuffer.length;W++)n.deleteFramebuffer(y.__webglFramebuffer[W]);else n.deleteFramebuffer(y.__webglFramebuffer);if(y.__webglDepthbuffer&&n.deleteRenderbuffer(y.__webglDepthbuffer),y.__webglMultisampledFramebuffer&&n.deleteFramebuffer(y.__webglMultisampledFramebuffer),y.__webglColorRenderbuffer)for(let W=0;W<y.__webglColorRenderbuffer.length;W++)y.__webglColorRenderbuffer[W]&&n.deleteRenderbuffer(y.__webglColorRenderbuffer[W]);y.__webglDepthRenderbuffer&&n.deleteRenderbuffer(y.__webglDepthRenderbuffer)}const H=A.textures;for(let W=0,j=H.length;W<j;W++){const K=i.get(H[W]);K.__webglTexture&&(n.deleteTexture(K.__webglTexture),a.memory.textures--),i.remove(H[W])}i.remove(A)}let P=0;function C(){P=0}function L(){const A=P;return A>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+A+" texture units while this GPU supports only "+s.maxTextures),P+=1,A}function F(A){const y=[];return y.push(A.wrapS),y.push(A.wrapT),y.push(A.wrapR||0),y.push(A.magFilter),y.push(A.minFilter),y.push(A.anisotropy),y.push(A.internalFormat),y.push(A.format),y.push(A.type),y.push(A.generateMipmaps),y.push(A.premultiplyAlpha),y.push(A.flipY),y.push(A.unpackAlignment),y.push(A.colorSpace),y.join()}function U(A,y){const H=i.get(A);if(A.isVideoTexture&&Dt(A),A.isRenderTargetTexture===!1&&A.isExternalTexture!==!0&&A.version>0&&H.__version!==A.version){const W=A.image;if(W===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(W.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{X(H,A,y);return}}else A.isExternalTexture&&(H.__webglTexture=A.sourceTexture?A.sourceTexture:null);e.bindTexture(n.TEXTURE_2D,H.__webglTexture,n.TEXTURE0+y)}function N(A,y){const H=i.get(A);if(A.isRenderTargetTexture===!1&&A.version>0&&H.__version!==A.version){X(H,A,y);return}e.bindTexture(n.TEXTURE_2D_ARRAY,H.__webglTexture,n.TEXTURE0+y)}function G(A,y){const H=i.get(A);if(A.isRenderTargetTexture===!1&&A.version>0&&H.__version!==A.version){X(H,A,y);return}e.bindTexture(n.TEXTURE_3D,H.__webglTexture,n.TEXTURE0+y)}function z(A,y){const H=i.get(A);if(A.version>0&&H.__version!==A.version){J(H,A,y);return}e.bindTexture(n.TEXTURE_CUBE_MAP,H.__webglTexture,n.TEXTURE0+y)}const Z={[eo]:n.REPEAT,[Ei]:n.CLAMP_TO_EDGE,[no]:n.MIRRORED_REPEAT},$={[wn]:n.NEAREST,[yu]:n.NEAREST_MIPMAP_NEAREST,[tr]:n.NEAREST_MIPMAP_LINEAR,[En]:n.LINEAR,[oa]:n.LINEAR_MIPMAP_NEAREST,[ni]:n.LINEAR_MIPMAP_LINEAR},nt={[Au]:n.NEVER,[Lu]:n.ALWAYS,[wu]:n.LESS,[Jl]:n.LEQUAL,[Ru]:n.EQUAL,[Du]:n.GEQUAL,[Cu]:n.GREATER,[Pu]:n.NOTEQUAL};function k(A,y){if(y.type===Hn&&t.has("OES_texture_float_linear")===!1&&(y.magFilter===En||y.magFilter===oa||y.magFilter===tr||y.magFilter===ni||y.minFilter===En||y.minFilter===oa||y.minFilter===tr||y.minFilter===ni)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(A,n.TEXTURE_WRAP_S,Z[y.wrapS]),n.texParameteri(A,n.TEXTURE_WRAP_T,Z[y.wrapT]),(A===n.TEXTURE_3D||A===n.TEXTURE_2D_ARRAY)&&n.texParameteri(A,n.TEXTURE_WRAP_R,Z[y.wrapR]),n.texParameteri(A,n.TEXTURE_MAG_FILTER,$[y.magFilter]),n.texParameteri(A,n.TEXTURE_MIN_FILTER,$[y.minFilter]),y.compareFunction&&(n.texParameteri(A,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(A,n.TEXTURE_COMPARE_FUNC,nt[y.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(y.magFilter===wn||y.minFilter!==tr&&y.minFilter!==ni||y.type===Hn&&t.has("OES_texture_float_linear")===!1)return;if(y.anisotropy>1||i.get(y).__currentAnisotropy){const H=t.get("EXT_texture_filter_anisotropic");n.texParameterf(A,H.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(y.anisotropy,s.getMaxAnisotropy())),i.get(y).__currentAnisotropy=y.anisotropy}}}function q(A,y){let H=!1;A.__webglInit===void 0&&(A.__webglInit=!0,y.addEventListener("dispose",S));const W=y.source;let j=p.get(W);j===void 0&&(j={},p.set(W,j));const K=F(y);if(K!==A.__cacheKey){j[K]===void 0&&(j[K]={texture:n.createTexture(),usedTimes:0},a.memory.textures++,H=!0),j[K].usedTimes++;const Tt=j[A.__cacheKey];Tt!==void 0&&(j[A.__cacheKey].usedTimes--,Tt.usedTimes===0&&E(y)),A.__cacheKey=K,A.__webglTexture=j[K].texture}return H}function ft(A,y,H){return Math.floor(Math.floor(A/H)/y)}function ct(A,y,H,W){const K=A.updateRanges;if(K.length===0)e.texSubImage2D(n.TEXTURE_2D,0,0,0,y.width,y.height,H,W,y.data);else{K.sort((st,gt)=>st.start-gt.start);let Tt=0;for(let st=1;st<K.length;st++){const gt=K[Tt],yt=K[st],mt=gt.start+gt.count,Mt=ft(yt.start,y.width,4),zt=ft(gt.start,y.width,4);yt.start<=mt+1&&Mt===zt&&ft(yt.start+yt.count-1,y.width,4)===Mt?gt.count=Math.max(gt.count,yt.start+yt.count-gt.start):(++Tt,K[Tt]=yt)}K.length=Tt+1;const ot=n.getParameter(n.UNPACK_ROW_LENGTH),dt=n.getParameter(n.UNPACK_SKIP_PIXELS),xt=n.getParameter(n.UNPACK_SKIP_ROWS);n.pixelStorei(n.UNPACK_ROW_LENGTH,y.width);for(let st=0,gt=K.length;st<gt;st++){const yt=K[st],mt=Math.floor(yt.start/4),Mt=Math.ceil(yt.count/4),zt=mt%y.width,O=Math.floor(mt/y.width),lt=Mt,_t=1;n.pixelStorei(n.UNPACK_SKIP_PIXELS,zt),n.pixelStorei(n.UNPACK_SKIP_ROWS,O),e.texSubImage2D(n.TEXTURE_2D,0,zt,O,lt,_t,H,W,y.data)}A.clearUpdateRanges(),n.pixelStorei(n.UNPACK_ROW_LENGTH,ot),n.pixelStorei(n.UNPACK_SKIP_PIXELS,dt),n.pixelStorei(n.UNPACK_SKIP_ROWS,xt)}}function X(A,y,H){let W=n.TEXTURE_2D;(y.isDataArrayTexture||y.isCompressedArrayTexture)&&(W=n.TEXTURE_2D_ARRAY),y.isData3DTexture&&(W=n.TEXTURE_3D);const j=q(A,y),K=y.source;e.bindTexture(W,A.__webglTexture,n.TEXTURE0+H);const Tt=i.get(K);if(K.version!==Tt.__version||j===!0){e.activeTexture(n.TEXTURE0+H);const ot=le.getPrimaries(le.workingColorSpace),dt=y.colorSpace===ti?null:le.getPrimaries(y.colorSpace),xt=y.colorSpace===ti||ot===dt?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,y.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,y.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,xt);let st=v(y.image,!1,s.maxTextureSize);st=re(y,st);const gt=r.convert(y.format,y.colorSpace),yt=r.convert(y.type);let mt=_(y.internalFormat,gt,yt,y.colorSpace,y.isVideoTexture);k(W,y);let Mt;const zt=y.mipmaps,O=y.isVideoTexture!==!0,lt=Tt.__version===void 0||j===!0,_t=K.dataReady,Lt=T(y,st);if(y.isDepthTexture)mt=M(y.format===zs,y.type),lt&&(O?e.texStorage2D(n.TEXTURE_2D,1,mt,st.width,st.height):e.texImage2D(n.TEXTURE_2D,0,mt,st.width,st.height,0,gt,yt,null));else if(y.isDataTexture)if(zt.length>0){O&&lt&&e.texStorage2D(n.TEXTURE_2D,Lt,mt,zt[0].width,zt[0].height);for(let ht=0,it=zt.length;ht<it;ht++)Mt=zt[ht],O?_t&&e.texSubImage2D(n.TEXTURE_2D,ht,0,0,Mt.width,Mt.height,gt,yt,Mt.data):e.texImage2D(n.TEXTURE_2D,ht,mt,Mt.width,Mt.height,0,gt,yt,Mt.data);y.generateMipmaps=!1}else O?(lt&&e.texStorage2D(n.TEXTURE_2D,Lt,mt,st.width,st.height),_t&&ct(y,st,gt,yt)):e.texImage2D(n.TEXTURE_2D,0,mt,st.width,st.height,0,gt,yt,st.data);else if(y.isCompressedTexture)if(y.isCompressedArrayTexture){O&&lt&&e.texStorage3D(n.TEXTURE_2D_ARRAY,Lt,mt,zt[0].width,zt[0].height,st.depth);for(let ht=0,it=zt.length;ht<it;ht++)if(Mt=zt[ht],y.format!==bn)if(gt!==null)if(O){if(_t)if(y.layerUpdates.size>0){const Ut=Jc(Mt.width,Mt.height,y.format,y.type);for(const qt of y.layerUpdates){const ue=Mt.data.subarray(qt*Ut/Mt.data.BYTES_PER_ELEMENT,(qt+1)*Ut/Mt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,ht,0,0,qt,Mt.width,Mt.height,1,gt,ue)}y.clearLayerUpdates()}else e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,ht,0,0,0,Mt.width,Mt.height,st.depth,gt,Mt.data)}else e.compressedTexImage3D(n.TEXTURE_2D_ARRAY,ht,mt,Mt.width,Mt.height,st.depth,0,Mt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else O?_t&&e.texSubImage3D(n.TEXTURE_2D_ARRAY,ht,0,0,0,Mt.width,Mt.height,st.depth,gt,yt,Mt.data):e.texImage3D(n.TEXTURE_2D_ARRAY,ht,mt,Mt.width,Mt.height,st.depth,0,gt,yt,Mt.data)}else{O&&lt&&e.texStorage2D(n.TEXTURE_2D,Lt,mt,zt[0].width,zt[0].height);for(let ht=0,it=zt.length;ht<it;ht++)Mt=zt[ht],y.format!==bn?gt!==null?O?_t&&e.compressedTexSubImage2D(n.TEXTURE_2D,ht,0,0,Mt.width,Mt.height,gt,Mt.data):e.compressedTexImage2D(n.TEXTURE_2D,ht,mt,Mt.width,Mt.height,0,Mt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):O?_t&&e.texSubImage2D(n.TEXTURE_2D,ht,0,0,Mt.width,Mt.height,gt,yt,Mt.data):e.texImage2D(n.TEXTURE_2D,ht,mt,Mt.width,Mt.height,0,gt,yt,Mt.data)}else if(y.isDataArrayTexture)if(O){if(lt&&e.texStorage3D(n.TEXTURE_2D_ARRAY,Lt,mt,st.width,st.height,st.depth),_t)if(y.layerUpdates.size>0){const ht=Jc(st.width,st.height,y.format,y.type);for(const it of y.layerUpdates){const Ut=st.data.subarray(it*ht/st.data.BYTES_PER_ELEMENT,(it+1)*ht/st.data.BYTES_PER_ELEMENT);e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,it,st.width,st.height,1,gt,yt,Ut)}y.clearLayerUpdates()}else e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,st.width,st.height,st.depth,gt,yt,st.data)}else e.texImage3D(n.TEXTURE_2D_ARRAY,0,mt,st.width,st.height,st.depth,0,gt,yt,st.data);else if(y.isData3DTexture)O?(lt&&e.texStorage3D(n.TEXTURE_3D,Lt,mt,st.width,st.height,st.depth),_t&&e.texSubImage3D(n.TEXTURE_3D,0,0,0,0,st.width,st.height,st.depth,gt,yt,st.data)):e.texImage3D(n.TEXTURE_3D,0,mt,st.width,st.height,st.depth,0,gt,yt,st.data);else if(y.isFramebufferTexture){if(lt)if(O)e.texStorage2D(n.TEXTURE_2D,Lt,mt,st.width,st.height);else{let ht=st.width,it=st.height;for(let Ut=0;Ut<Lt;Ut++)e.texImage2D(n.TEXTURE_2D,Ut,mt,ht,it,0,gt,yt,null),ht>>=1,it>>=1}}else if(zt.length>0){if(O&&lt){const ht=at(zt[0]);e.texStorage2D(n.TEXTURE_2D,Lt,mt,ht.width,ht.height)}for(let ht=0,it=zt.length;ht<it;ht++)Mt=zt[ht],O?_t&&e.texSubImage2D(n.TEXTURE_2D,ht,0,0,gt,yt,Mt):e.texImage2D(n.TEXTURE_2D,ht,mt,gt,yt,Mt);y.generateMipmaps=!1}else if(O){if(lt){const ht=at(st);e.texStorage2D(n.TEXTURE_2D,Lt,mt,ht.width,ht.height)}_t&&e.texSubImage2D(n.TEXTURE_2D,0,0,0,gt,yt,st)}else e.texImage2D(n.TEXTURE_2D,0,mt,gt,yt,st);h(y)&&f(W),Tt.__version=K.version,y.onUpdate&&y.onUpdate(y)}A.__version=y.version}function J(A,y,H){if(y.image.length!==6)return;const W=q(A,y),j=y.source;e.bindTexture(n.TEXTURE_CUBE_MAP,A.__webglTexture,n.TEXTURE0+H);const K=i.get(j);if(j.version!==K.__version||W===!0){e.activeTexture(n.TEXTURE0+H);const Tt=le.getPrimaries(le.workingColorSpace),ot=y.colorSpace===ti?null:le.getPrimaries(y.colorSpace),dt=y.colorSpace===ti||Tt===ot?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,y.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,y.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,dt);const xt=y.isCompressedTexture||y.image[0].isCompressedTexture,st=y.image[0]&&y.image[0].isDataTexture,gt=[];for(let it=0;it<6;it++)!xt&&!st?gt[it]=v(y.image[it],!0,s.maxCubemapSize):gt[it]=st?y.image[it].image:y.image[it],gt[it]=re(y,gt[it]);const yt=gt[0],mt=r.convert(y.format,y.colorSpace),Mt=r.convert(y.type),zt=_(y.internalFormat,mt,Mt,y.colorSpace),O=y.isVideoTexture!==!0,lt=K.__version===void 0||W===!0,_t=j.dataReady;let Lt=T(y,yt);k(n.TEXTURE_CUBE_MAP,y);let ht;if(xt){O&&lt&&e.texStorage2D(n.TEXTURE_CUBE_MAP,Lt,zt,yt.width,yt.height);for(let it=0;it<6;it++){ht=gt[it].mipmaps;for(let Ut=0;Ut<ht.length;Ut++){const qt=ht[Ut];y.format!==bn?mt!==null?O?_t&&e.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+it,Ut,0,0,qt.width,qt.height,mt,qt.data):e.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+it,Ut,zt,qt.width,qt.height,0,qt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):O?_t&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+it,Ut,0,0,qt.width,qt.height,mt,Mt,qt.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+it,Ut,zt,qt.width,qt.height,0,mt,Mt,qt.data)}}}else{if(ht=y.mipmaps,O&&lt){ht.length>0&&Lt++;const it=at(gt[0]);e.texStorage2D(n.TEXTURE_CUBE_MAP,Lt,zt,it.width,it.height)}for(let it=0;it<6;it++)if(st){O?_t&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+it,0,0,0,gt[it].width,gt[it].height,mt,Mt,gt[it].data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+it,0,zt,gt[it].width,gt[it].height,0,mt,Mt,gt[it].data);for(let Ut=0;Ut<ht.length;Ut++){const ue=ht[Ut].image[it].image;O?_t&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+it,Ut+1,0,0,ue.width,ue.height,mt,Mt,ue.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+it,Ut+1,zt,ue.width,ue.height,0,mt,Mt,ue.data)}}else{O?_t&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+it,0,0,0,mt,Mt,gt[it]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+it,0,zt,mt,Mt,gt[it]);for(let Ut=0;Ut<ht.length;Ut++){const qt=ht[Ut];O?_t&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+it,Ut+1,0,0,mt,Mt,qt.image[it]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+it,Ut+1,zt,mt,Mt,qt.image[it])}}}h(y)&&f(n.TEXTURE_CUBE_MAP),K.__version=j.version,y.onUpdate&&y.onUpdate(y)}A.__version=y.version}function ut(A,y,H,W,j,K){const Tt=r.convert(H.format,H.colorSpace),ot=r.convert(H.type),dt=_(H.internalFormat,Tt,ot,H.colorSpace),xt=i.get(y),st=i.get(H);if(st.__renderTarget=y,!xt.__hasExternalTextures){const gt=Math.max(1,y.width>>K),yt=Math.max(1,y.height>>K);j===n.TEXTURE_3D||j===n.TEXTURE_2D_ARRAY?e.texImage3D(j,K,dt,gt,yt,y.depth,0,Tt,ot,null):e.texImage2D(j,K,dt,gt,yt,0,Tt,ot,null)}e.bindFramebuffer(n.FRAMEBUFFER,A),St(y)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,W,j,st.__webglTexture,0,jt(y)):(j===n.TEXTURE_2D||j>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&j<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,W,j,st.__webglTexture,K),e.bindFramebuffer(n.FRAMEBUFFER,null)}function bt(A,y,H){if(n.bindRenderbuffer(n.RENDERBUFFER,A),y.depthBuffer){const W=y.depthTexture,j=W&&W.isDepthTexture?W.type:null,K=M(y.stencilBuffer,j),Tt=y.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ot=jt(y);St(y)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ot,K,y.width,y.height):H?n.renderbufferStorageMultisample(n.RENDERBUFFER,ot,K,y.width,y.height):n.renderbufferStorage(n.RENDERBUFFER,K,y.width,y.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,Tt,n.RENDERBUFFER,A)}else{const W=y.textures;for(let j=0;j<W.length;j++){const K=W[j],Tt=r.convert(K.format,K.colorSpace),ot=r.convert(K.type),dt=_(K.internalFormat,Tt,ot,K.colorSpace),xt=jt(y);H&&St(y)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,xt,dt,y.width,y.height):St(y)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,xt,dt,y.width,y.height):n.renderbufferStorage(n.RENDERBUFFER,dt,y.width,y.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function vt(A,y){if(y&&y.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(n.FRAMEBUFFER,A),!(y.depthTexture&&y.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const W=i.get(y.depthTexture);W.__renderTarget=y,(!W.__webglTexture||y.depthTexture.image.width!==y.width||y.depthTexture.image.height!==y.height)&&(y.depthTexture.image.width=y.width,y.depthTexture.image.height=y.height,y.depthTexture.needsUpdate=!0),U(y.depthTexture,0);const j=W.__webglTexture,K=jt(y);if(y.depthTexture.format===Bs)St(y)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,j,0,K):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,j,0);else if(y.depthTexture.format===zs)St(y)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,j,0,K):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,j,0);else throw new Error("Unknown depthTexture format")}function Ot(A){const y=i.get(A),H=A.isWebGLCubeRenderTarget===!0;if(y.__boundDepthTexture!==A.depthTexture){const W=A.depthTexture;if(y.__depthDisposeCallback&&y.__depthDisposeCallback(),W){const j=()=>{delete y.__boundDepthTexture,delete y.__depthDisposeCallback,W.removeEventListener("dispose",j)};W.addEventListener("dispose",j),y.__depthDisposeCallback=j}y.__boundDepthTexture=W}if(A.depthTexture&&!y.__autoAllocateDepthBuffer){if(H)throw new Error("target.depthTexture not supported in Cube render targets");const W=A.texture.mipmaps;W&&W.length>0?vt(y.__webglFramebuffer[0],A):vt(y.__webglFramebuffer,A)}else if(H){y.__webglDepthbuffer=[];for(let W=0;W<6;W++)if(e.bindFramebuffer(n.FRAMEBUFFER,y.__webglFramebuffer[W]),y.__webglDepthbuffer[W]===void 0)y.__webglDepthbuffer[W]=n.createRenderbuffer(),bt(y.__webglDepthbuffer[W],A,!1);else{const j=A.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,K=y.__webglDepthbuffer[W];n.bindRenderbuffer(n.RENDERBUFFER,K),n.framebufferRenderbuffer(n.FRAMEBUFFER,j,n.RENDERBUFFER,K)}}else{const W=A.texture.mipmaps;if(W&&W.length>0?e.bindFramebuffer(n.FRAMEBUFFER,y.__webglFramebuffer[0]):e.bindFramebuffer(n.FRAMEBUFFER,y.__webglFramebuffer),y.__webglDepthbuffer===void 0)y.__webglDepthbuffer=n.createRenderbuffer(),bt(y.__webglDepthbuffer,A,!1);else{const j=A.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,K=y.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,K),n.framebufferRenderbuffer(n.FRAMEBUFFER,j,n.RENDERBUFFER,K)}}e.bindFramebuffer(n.FRAMEBUFFER,null)}function ne(A,y,H){const W=i.get(A);y!==void 0&&ut(W.__webglFramebuffer,A,A.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),H!==void 0&&Ot(A)}function I(A){const y=A.texture,H=i.get(A),W=i.get(y);A.addEventListener("dispose",w);const j=A.textures,K=A.isWebGLCubeRenderTarget===!0,Tt=j.length>1;if(Tt||(W.__webglTexture===void 0&&(W.__webglTexture=n.createTexture()),W.__version=y.version,a.memory.textures++),K){H.__webglFramebuffer=[];for(let ot=0;ot<6;ot++)if(y.mipmaps&&y.mipmaps.length>0){H.__webglFramebuffer[ot]=[];for(let dt=0;dt<y.mipmaps.length;dt++)H.__webglFramebuffer[ot][dt]=n.createFramebuffer()}else H.__webglFramebuffer[ot]=n.createFramebuffer()}else{if(y.mipmaps&&y.mipmaps.length>0){H.__webglFramebuffer=[];for(let ot=0;ot<y.mipmaps.length;ot++)H.__webglFramebuffer[ot]=n.createFramebuffer()}else H.__webglFramebuffer=n.createFramebuffer();if(Tt)for(let ot=0,dt=j.length;ot<dt;ot++){const xt=i.get(j[ot]);xt.__webglTexture===void 0&&(xt.__webglTexture=n.createTexture(),a.memory.textures++)}if(A.samples>0&&St(A)===!1){H.__webglMultisampledFramebuffer=n.createFramebuffer(),H.__webglColorRenderbuffer=[],e.bindFramebuffer(n.FRAMEBUFFER,H.__webglMultisampledFramebuffer);for(let ot=0;ot<j.length;ot++){const dt=j[ot];H.__webglColorRenderbuffer[ot]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,H.__webglColorRenderbuffer[ot]);const xt=r.convert(dt.format,dt.colorSpace),st=r.convert(dt.type),gt=_(dt.internalFormat,xt,st,dt.colorSpace,A.isXRRenderTarget===!0),yt=jt(A);n.renderbufferStorageMultisample(n.RENDERBUFFER,yt,gt,A.width,A.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ot,n.RENDERBUFFER,H.__webglColorRenderbuffer[ot])}n.bindRenderbuffer(n.RENDERBUFFER,null),A.depthBuffer&&(H.__webglDepthRenderbuffer=n.createRenderbuffer(),bt(H.__webglDepthRenderbuffer,A,!0)),e.bindFramebuffer(n.FRAMEBUFFER,null)}}if(K){e.bindTexture(n.TEXTURE_CUBE_MAP,W.__webglTexture),k(n.TEXTURE_CUBE_MAP,y);for(let ot=0;ot<6;ot++)if(y.mipmaps&&y.mipmaps.length>0)for(let dt=0;dt<y.mipmaps.length;dt++)ut(H.__webglFramebuffer[ot][dt],A,y,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ot,dt);else ut(H.__webglFramebuffer[ot],A,y,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ot,0);h(y)&&f(n.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Tt){for(let ot=0,dt=j.length;ot<dt;ot++){const xt=j[ot],st=i.get(xt);let gt=n.TEXTURE_2D;(A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(gt=A.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),e.bindTexture(gt,st.__webglTexture),k(gt,xt),ut(H.__webglFramebuffer,A,xt,n.COLOR_ATTACHMENT0+ot,gt,0),h(xt)&&f(gt)}e.unbindTexture()}else{let ot=n.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(ot=A.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),e.bindTexture(ot,W.__webglTexture),k(ot,y),y.mipmaps&&y.mipmaps.length>0)for(let dt=0;dt<y.mipmaps.length;dt++)ut(H.__webglFramebuffer[dt],A,y,n.COLOR_ATTACHMENT0,ot,dt);else ut(H.__webglFramebuffer,A,y,n.COLOR_ATTACHMENT0,ot,0);h(y)&&f(ot),e.unbindTexture()}A.depthBuffer&&Ot(A)}function Ft(A){const y=A.textures;for(let H=0,W=y.length;H<W;H++){const j=y[H];if(h(j)){const K=m(A),Tt=i.get(j).__webglTexture;e.bindTexture(K,Tt),f(K),e.unbindTexture()}}}const Pt=[],wt=[];function Et(A){if(A.samples>0){if(St(A)===!1){const y=A.textures,H=A.width,W=A.height;let j=n.COLOR_BUFFER_BIT;const K=A.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Tt=i.get(A),ot=y.length>1;if(ot)for(let xt=0;xt<y.length;xt++)e.bindFramebuffer(n.FRAMEBUFFER,Tt.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+xt,n.RENDERBUFFER,null),e.bindFramebuffer(n.FRAMEBUFFER,Tt.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+xt,n.TEXTURE_2D,null,0);e.bindFramebuffer(n.READ_FRAMEBUFFER,Tt.__webglMultisampledFramebuffer);const dt=A.texture.mipmaps;dt&&dt.length>0?e.bindFramebuffer(n.DRAW_FRAMEBUFFER,Tt.__webglFramebuffer[0]):e.bindFramebuffer(n.DRAW_FRAMEBUFFER,Tt.__webglFramebuffer);for(let xt=0;xt<y.length;xt++){if(A.resolveDepthBuffer&&(A.depthBuffer&&(j|=n.DEPTH_BUFFER_BIT),A.stencilBuffer&&A.resolveStencilBuffer&&(j|=n.STENCIL_BUFFER_BIT)),ot){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,Tt.__webglColorRenderbuffer[xt]);const st=i.get(y[xt]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,st,0)}n.blitFramebuffer(0,0,H,W,0,0,H,W,j,n.NEAREST),l===!0&&(Pt.length=0,wt.length=0,Pt.push(n.COLOR_ATTACHMENT0+xt),A.depthBuffer&&A.resolveDepthBuffer===!1&&(Pt.push(K),wt.push(K),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,wt)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,Pt))}if(e.bindFramebuffer(n.READ_FRAMEBUFFER,null),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),ot)for(let xt=0;xt<y.length;xt++){e.bindFramebuffer(n.FRAMEBUFFER,Tt.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+xt,n.RENDERBUFFER,Tt.__webglColorRenderbuffer[xt]);const st=i.get(y[xt]).__webglTexture;e.bindFramebuffer(n.FRAMEBUFFER,Tt.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+xt,n.TEXTURE_2D,st,0)}e.bindFramebuffer(n.DRAW_FRAMEBUFFER,Tt.__webglMultisampledFramebuffer)}else if(A.depthBuffer&&A.resolveDepthBuffer===!1&&l){const y=A.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[y])}}}function jt(A){return Math.min(s.maxSamples,A.samples)}function St(A){const y=i.get(A);return A.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&y.__useRenderToTexture!==!1}function Dt(A){const y=a.render.frame;u.get(A)!==y&&(u.set(A,y),A.update())}function re(A,y){const H=A.colorSpace,W=A.format,j=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||H!==ms&&H!==ti&&(le.getTransfer(H)===pe?(W!==bn||j!==Wn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",H)),y}function at(A){return typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement?(c.width=A.naturalWidth||A.width,c.height=A.naturalHeight||A.height):typeof VideoFrame<"u"&&A instanceof VideoFrame?(c.width=A.displayWidth,c.height=A.displayHeight):(c.width=A.width,c.height=A.height),c}this.allocateTextureUnit=L,this.resetTextureUnits=C,this.setTexture2D=U,this.setTexture2DArray=N,this.setTexture3D=G,this.setTextureCube=z,this.rebindTextures=ne,this.setupRenderTarget=I,this.updateRenderTargetMipmap=Ft,this.updateMultisampleRenderTarget=Et,this.setupDepthRenderbuffer=Ot,this.setupFrameBufferTexture=ut,this.useMultisampledRTT=St}function l0(n,t){function e(i,s=ti){let r;const a=le.getTransfer(s);if(i===Wn)return n.UNSIGNED_BYTE;if(i===qo)return n.UNSIGNED_SHORT_4_4_4_4;if(i===$o)return n.UNSIGNED_SHORT_5_5_5_1;if(i===Yl)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===ql)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===Wl)return n.BYTE;if(i===Xl)return n.SHORT;if(i===Ns)return n.UNSIGNED_SHORT;if(i===Yo)return n.INT;if(i===Ri)return n.UNSIGNED_INT;if(i===Hn)return n.FLOAT;if(i===Ws)return n.HALF_FLOAT;if(i===$l)return n.ALPHA;if(i===jl)return n.RGB;if(i===bn)return n.RGBA;if(i===Bs)return n.DEPTH_COMPONENT;if(i===zs)return n.DEPTH_STENCIL;if(i===Kl)return n.RED;if(i===jo)return n.RED_INTEGER;if(i===Zl)return n.RG;if(i===Ko)return n.RG_INTEGER;if(i===Zo)return n.RGBA_INTEGER;if(i===Ur||i===Fr||i===Nr||i===Or)if(a===pe)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===Ur)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Fr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Nr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Or)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===Ur)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Fr)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Nr)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Or)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===io||i===so||i===ro||i===ao)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===io)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===so)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===ro)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===ao)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===oo||i===co||i===lo)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(i===oo||i===co)return a===pe?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===lo)return a===pe?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===ho||i===uo||i===fo||i===po||i===mo||i===go||i===_o||i===xo||i===Mo||i===vo||i===yo||i===So||i===Eo||i===bo)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(i===ho)return a===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===uo)return a===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===fo)return a===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===po)return a===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===mo)return a===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===go)return a===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===_o)return a===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===xo)return a===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Mo)return a===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===vo)return a===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===yo)return a===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===So)return a===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Eo)return a===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===bo)return a===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===To||i===Ao||i===wo)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(i===To)return a===pe?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Ao)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===wo)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Ro||i===Co||i===Po||i===Do)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(i===Ro)return r.COMPRESSED_RED_RGTC1_EXT;if(i===Co)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Po)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Do)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Os?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:e}}const h0=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,u0=`
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

}`;class d0{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){const i=new hh(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=i}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,i=new li({vertexShader:h0,fragmentShader:u0,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new fn(new Jr(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class f0 extends Li{constructor(t,e){super();const i=this;let s=null,r=1,a=null,o="local-floor",l=1,c=null,u=null,d=null,p=null,g=null,x=null;const v=typeof XRWebGLBinding<"u",h=new d0,f={},m=e.getContextAttributes();let _=null,M=null;const T=[],S=[],w=new Xt;let D=null;const E=new un;E.viewport=new Ee;const b=new un;b.viewport=new Ee;const P=[E,b],C=new Dd;let L=null,F=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(X){let J=T[X];return J===void 0&&(J=new Ra,T[X]=J),J.getTargetRaySpace()},this.getControllerGrip=function(X){let J=T[X];return J===void 0&&(J=new Ra,T[X]=J),J.getGripSpace()},this.getHand=function(X){let J=T[X];return J===void 0&&(J=new Ra,T[X]=J),J.getHandSpace()};function U(X){const J=S.indexOf(X.inputSource);if(J===-1)return;const ut=T[J];ut!==void 0&&(ut.update(X.inputSource,X.frame,c||a),ut.dispatchEvent({type:X.type,data:X.inputSource}))}function N(){s.removeEventListener("select",U),s.removeEventListener("selectstart",U),s.removeEventListener("selectend",U),s.removeEventListener("squeeze",U),s.removeEventListener("squeezestart",U),s.removeEventListener("squeezeend",U),s.removeEventListener("end",N),s.removeEventListener("inputsourceschange",G);for(let X=0;X<T.length;X++){const J=S[X];J!==null&&(S[X]=null,T[X].disconnect(J))}L=null,F=null,h.reset();for(const X in f)delete f[X];t.setRenderTarget(_),g=null,p=null,d=null,s=null,M=null,ct.stop(),i.isPresenting=!1,t.setPixelRatio(D),t.setSize(w.width,w.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(X){r=X,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(X){o=X,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(X){c=X},this.getBaseLayer=function(){return p!==null?p:g},this.getBinding=function(){return d===null&&v&&(d=new XRWebGLBinding(s,e)),d},this.getFrame=function(){return x},this.getSession=function(){return s},this.setSession=async function(X){if(s=X,s!==null){if(_=t.getRenderTarget(),s.addEventListener("select",U),s.addEventListener("selectstart",U),s.addEventListener("selectend",U),s.addEventListener("squeeze",U),s.addEventListener("squeezestart",U),s.addEventListener("squeezeend",U),s.addEventListener("end",N),s.addEventListener("inputsourceschange",G),m.xrCompatible!==!0&&await e.makeXRCompatible(),D=t.getPixelRatio(),t.getSize(w),v&&"createProjectionLayer"in XRWebGLBinding.prototype){let ut=null,bt=null,vt=null;m.depth&&(vt=m.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,ut=m.stencil?zs:Bs,bt=m.stencil?Os:Ri);const Ot={colorFormat:e.RGBA8,depthFormat:vt,scaleFactor:r};d=this.getBinding(),p=d.createProjectionLayer(Ot),s.updateRenderState({layers:[p]}),t.setPixelRatio(1),t.setSize(p.textureWidth,p.textureHeight,!1),M=new Ci(p.textureWidth,p.textureHeight,{format:bn,type:Wn,depthTexture:new lh(p.textureWidth,p.textureHeight,bt,void 0,void 0,void 0,void 0,void 0,void 0,ut),stencilBuffer:m.stencil,colorSpace:t.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1})}else{const ut={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};g=new XRWebGLLayer(s,e,ut),s.updateRenderState({baseLayer:g}),t.setPixelRatio(1),t.setSize(g.framebufferWidth,g.framebufferHeight,!1),M=new Ci(g.framebufferWidth,g.framebufferHeight,{format:bn,type:Wn,colorSpace:t.outputColorSpace,stencilBuffer:m.stencil,resolveDepthBuffer:g.ignoreDepthValues===!1,resolveStencilBuffer:g.ignoreDepthValues===!1})}M.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),ct.setContext(s),ct.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return h.getDepthTexture()};function G(X){for(let J=0;J<X.removed.length;J++){const ut=X.removed[J],bt=S.indexOf(ut);bt>=0&&(S[bt]=null,T[bt].disconnect(ut))}for(let J=0;J<X.added.length;J++){const ut=X.added[J];let bt=S.indexOf(ut);if(bt===-1){for(let Ot=0;Ot<T.length;Ot++)if(Ot>=S.length){S.push(ut),bt=Ot;break}else if(S[Ot]===null){S[Ot]=ut,bt=Ot;break}if(bt===-1)break}const vt=T[bt];vt&&vt.connect(ut)}}const z=new B,Z=new B;function $(X,J,ut){z.setFromMatrixPosition(J.matrixWorld),Z.setFromMatrixPosition(ut.matrixWorld);const bt=z.distanceTo(Z),vt=J.projectionMatrix.elements,Ot=ut.projectionMatrix.elements,ne=vt[14]/(vt[10]-1),I=vt[14]/(vt[10]+1),Ft=(vt[9]+1)/vt[5],Pt=(vt[9]-1)/vt[5],wt=(vt[8]-1)/vt[0],Et=(Ot[8]+1)/Ot[0],jt=ne*wt,St=ne*Et,Dt=bt/(-wt+Et),re=Dt*-wt;if(J.matrixWorld.decompose(X.position,X.quaternion,X.scale),X.translateX(re),X.translateZ(Dt),X.matrixWorld.compose(X.position,X.quaternion,X.scale),X.matrixWorldInverse.copy(X.matrixWorld).invert(),vt[10]===-1)X.projectionMatrix.copy(J.projectionMatrix),X.projectionMatrixInverse.copy(J.projectionMatrixInverse);else{const at=ne+Dt,A=I+Dt,y=jt-re,H=St+(bt-re),W=Ft*I/A*at,j=Pt*I/A*at;X.projectionMatrix.makePerspective(y,H,W,j,at,A),X.projectionMatrixInverse.copy(X.projectionMatrix).invert()}}function nt(X,J){J===null?X.matrixWorld.copy(X.matrix):X.matrixWorld.multiplyMatrices(J.matrixWorld,X.matrix),X.matrixWorldInverse.copy(X.matrixWorld).invert()}this.updateCamera=function(X){if(s===null)return;let J=X.near,ut=X.far;h.texture!==null&&(h.depthNear>0&&(J=h.depthNear),h.depthFar>0&&(ut=h.depthFar)),C.near=b.near=E.near=J,C.far=b.far=E.far=ut,(L!==C.near||F!==C.far)&&(s.updateRenderState({depthNear:C.near,depthFar:C.far}),L=C.near,F=C.far),C.layers.mask=X.layers.mask|6,E.layers.mask=C.layers.mask&3,b.layers.mask=C.layers.mask&5;const bt=X.parent,vt=C.cameras;nt(C,bt);for(let Ot=0;Ot<vt.length;Ot++)nt(vt[Ot],bt);vt.length===2?$(C,E,b):C.projectionMatrix.copy(E.projectionMatrix),k(X,C,bt)};function k(X,J,ut){ut===null?X.matrix.copy(J.matrixWorld):(X.matrix.copy(ut.matrixWorld),X.matrix.invert(),X.matrix.multiply(J.matrixWorld)),X.matrix.decompose(X.position,X.quaternion,X.scale),X.updateMatrixWorld(!0),X.projectionMatrix.copy(J.projectionMatrix),X.projectionMatrixInverse.copy(J.projectionMatrixInverse),X.isPerspectiveCamera&&(X.fov=ks*2*Math.atan(1/X.projectionMatrix.elements[5]),X.zoom=1)}this.getCamera=function(){return C},this.getFoveation=function(){if(!(p===null&&g===null))return l},this.setFoveation=function(X){l=X,p!==null&&(p.fixedFoveation=X),g!==null&&g.fixedFoveation!==void 0&&(g.fixedFoveation=X)},this.hasDepthSensing=function(){return h.texture!==null},this.getDepthSensingMesh=function(){return h.getMesh(C)},this.getCameraTexture=function(X){return f[X]};let q=null;function ft(X,J){if(u=J.getViewerPose(c||a),x=J,u!==null){const ut=u.views;g!==null&&(t.setRenderTargetFramebuffer(M,g.framebuffer),t.setRenderTarget(M));let bt=!1;ut.length!==C.cameras.length&&(C.cameras.length=0,bt=!0);for(let I=0;I<ut.length;I++){const Ft=ut[I];let Pt=null;if(g!==null)Pt=g.getViewport(Ft);else{const Et=d.getViewSubImage(p,Ft);Pt=Et.viewport,I===0&&(t.setRenderTargetTextures(M,Et.colorTexture,Et.depthStencilTexture),t.setRenderTarget(M))}let wt=P[I];wt===void 0&&(wt=new un,wt.layers.enable(I),wt.viewport=new Ee,P[I]=wt),wt.matrix.fromArray(Ft.transform.matrix),wt.matrix.decompose(wt.position,wt.quaternion,wt.scale),wt.projectionMatrix.fromArray(Ft.projectionMatrix),wt.projectionMatrixInverse.copy(wt.projectionMatrix).invert(),wt.viewport.set(Pt.x,Pt.y,Pt.width,Pt.height),I===0&&(C.matrix.copy(wt.matrix),C.matrix.decompose(C.position,C.quaternion,C.scale)),bt===!0&&C.cameras.push(wt)}const vt=s.enabledFeatures;if(vt&&vt.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&v){d=i.getBinding();const I=d.getDepthInformation(ut[0]);I&&I.isValid&&I.texture&&h.init(I,s.renderState)}if(vt&&vt.includes("camera-access")&&v){t.state.unbindTexture(),d=i.getBinding();for(let I=0;I<ut.length;I++){const Ft=ut[I].camera;if(Ft){let Pt=f[Ft];Pt||(Pt=new hh,f[Ft]=Pt);const wt=d.getCameraImage(Ft);Pt.sourceTexture=wt}}}}for(let ut=0;ut<T.length;ut++){const bt=S[ut],vt=T[ut];bt!==null&&vt!==void 0&&vt.update(bt,J,c||a)}q&&q(X,J),J.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:J}),x=null}const ct=new uh;ct.setAnimationLoop(ft),this.setAnimationLoop=function(X){q=X},this.dispose=function(){}}}const _i=new Xn,p0=new ve;function m0(n,t){function e(h,f){h.matrixAutoUpdate===!0&&h.updateMatrix(),f.value.copy(h.matrix)}function i(h,f){f.color.getRGB(h.fogColor.value,sh(n)),f.isFog?(h.fogNear.value=f.near,h.fogFar.value=f.far):f.isFogExp2&&(h.fogDensity.value=f.density)}function s(h,f,m,_,M){f.isMeshBasicMaterial||f.isMeshLambertMaterial?r(h,f):f.isMeshToonMaterial?(r(h,f),d(h,f)):f.isMeshPhongMaterial?(r(h,f),u(h,f)):f.isMeshStandardMaterial?(r(h,f),p(h,f),f.isMeshPhysicalMaterial&&g(h,f,M)):f.isMeshMatcapMaterial?(r(h,f),x(h,f)):f.isMeshDepthMaterial?r(h,f):f.isMeshDistanceMaterial?(r(h,f),v(h,f)):f.isMeshNormalMaterial?r(h,f):f.isLineBasicMaterial?(a(h,f),f.isLineDashedMaterial&&o(h,f)):f.isPointsMaterial?l(h,f,m,_):f.isSpriteMaterial?c(h,f):f.isShadowMaterial?(h.color.value.copy(f.color),h.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function r(h,f){h.opacity.value=f.opacity,f.color&&h.diffuse.value.copy(f.color),f.emissive&&h.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(h.map.value=f.map,e(f.map,h.mapTransform)),f.alphaMap&&(h.alphaMap.value=f.alphaMap,e(f.alphaMap,h.alphaMapTransform)),f.bumpMap&&(h.bumpMap.value=f.bumpMap,e(f.bumpMap,h.bumpMapTransform),h.bumpScale.value=f.bumpScale,f.side===Ze&&(h.bumpScale.value*=-1)),f.normalMap&&(h.normalMap.value=f.normalMap,e(f.normalMap,h.normalMapTransform),h.normalScale.value.copy(f.normalScale),f.side===Ze&&h.normalScale.value.negate()),f.displacementMap&&(h.displacementMap.value=f.displacementMap,e(f.displacementMap,h.displacementMapTransform),h.displacementScale.value=f.displacementScale,h.displacementBias.value=f.displacementBias),f.emissiveMap&&(h.emissiveMap.value=f.emissiveMap,e(f.emissiveMap,h.emissiveMapTransform)),f.specularMap&&(h.specularMap.value=f.specularMap,e(f.specularMap,h.specularMapTransform)),f.alphaTest>0&&(h.alphaTest.value=f.alphaTest);const m=t.get(f),_=m.envMap,M=m.envMapRotation;_&&(h.envMap.value=_,_i.copy(M),_i.x*=-1,_i.y*=-1,_i.z*=-1,_.isCubeTexture&&_.isRenderTargetTexture===!1&&(_i.y*=-1,_i.z*=-1),h.envMapRotation.value.setFromMatrix4(p0.makeRotationFromEuler(_i)),h.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,h.reflectivity.value=f.reflectivity,h.ior.value=f.ior,h.refractionRatio.value=f.refractionRatio),f.lightMap&&(h.lightMap.value=f.lightMap,h.lightMapIntensity.value=f.lightMapIntensity,e(f.lightMap,h.lightMapTransform)),f.aoMap&&(h.aoMap.value=f.aoMap,h.aoMapIntensity.value=f.aoMapIntensity,e(f.aoMap,h.aoMapTransform))}function a(h,f){h.diffuse.value.copy(f.color),h.opacity.value=f.opacity,f.map&&(h.map.value=f.map,e(f.map,h.mapTransform))}function o(h,f){h.dashSize.value=f.dashSize,h.totalSize.value=f.dashSize+f.gapSize,h.scale.value=f.scale}function l(h,f,m,_){h.diffuse.value.copy(f.color),h.opacity.value=f.opacity,h.size.value=f.size*m,h.scale.value=_*.5,f.map&&(h.map.value=f.map,e(f.map,h.uvTransform)),f.alphaMap&&(h.alphaMap.value=f.alphaMap,e(f.alphaMap,h.alphaMapTransform)),f.alphaTest>0&&(h.alphaTest.value=f.alphaTest)}function c(h,f){h.diffuse.value.copy(f.color),h.opacity.value=f.opacity,h.rotation.value=f.rotation,f.map&&(h.map.value=f.map,e(f.map,h.mapTransform)),f.alphaMap&&(h.alphaMap.value=f.alphaMap,e(f.alphaMap,h.alphaMapTransform)),f.alphaTest>0&&(h.alphaTest.value=f.alphaTest)}function u(h,f){h.specular.value.copy(f.specular),h.shininess.value=Math.max(f.shininess,1e-4)}function d(h,f){f.gradientMap&&(h.gradientMap.value=f.gradientMap)}function p(h,f){h.metalness.value=f.metalness,f.metalnessMap&&(h.metalnessMap.value=f.metalnessMap,e(f.metalnessMap,h.metalnessMapTransform)),h.roughness.value=f.roughness,f.roughnessMap&&(h.roughnessMap.value=f.roughnessMap,e(f.roughnessMap,h.roughnessMapTransform)),f.envMap&&(h.envMapIntensity.value=f.envMapIntensity)}function g(h,f,m){h.ior.value=f.ior,f.sheen>0&&(h.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),h.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(h.sheenColorMap.value=f.sheenColorMap,e(f.sheenColorMap,h.sheenColorMapTransform)),f.sheenRoughnessMap&&(h.sheenRoughnessMap.value=f.sheenRoughnessMap,e(f.sheenRoughnessMap,h.sheenRoughnessMapTransform))),f.clearcoat>0&&(h.clearcoat.value=f.clearcoat,h.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(h.clearcoatMap.value=f.clearcoatMap,e(f.clearcoatMap,h.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(h.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,e(f.clearcoatRoughnessMap,h.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(h.clearcoatNormalMap.value=f.clearcoatNormalMap,e(f.clearcoatNormalMap,h.clearcoatNormalMapTransform),h.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===Ze&&h.clearcoatNormalScale.value.negate())),f.dispersion>0&&(h.dispersion.value=f.dispersion),f.iridescence>0&&(h.iridescence.value=f.iridescence,h.iridescenceIOR.value=f.iridescenceIOR,h.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],h.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(h.iridescenceMap.value=f.iridescenceMap,e(f.iridescenceMap,h.iridescenceMapTransform)),f.iridescenceThicknessMap&&(h.iridescenceThicknessMap.value=f.iridescenceThicknessMap,e(f.iridescenceThicknessMap,h.iridescenceThicknessMapTransform))),f.transmission>0&&(h.transmission.value=f.transmission,h.transmissionSamplerMap.value=m.texture,h.transmissionSamplerSize.value.set(m.width,m.height),f.transmissionMap&&(h.transmissionMap.value=f.transmissionMap,e(f.transmissionMap,h.transmissionMapTransform)),h.thickness.value=f.thickness,f.thicknessMap&&(h.thicknessMap.value=f.thicknessMap,e(f.thicknessMap,h.thicknessMapTransform)),h.attenuationDistance.value=f.attenuationDistance,h.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(h.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(h.anisotropyMap.value=f.anisotropyMap,e(f.anisotropyMap,h.anisotropyMapTransform))),h.specularIntensity.value=f.specularIntensity,h.specularColor.value.copy(f.specularColor),f.specularColorMap&&(h.specularColorMap.value=f.specularColorMap,e(f.specularColorMap,h.specularColorMapTransform)),f.specularIntensityMap&&(h.specularIntensityMap.value=f.specularIntensityMap,e(f.specularIntensityMap,h.specularIntensityMapTransform))}function x(h,f){f.matcap&&(h.matcap.value=f.matcap)}function v(h,f){const m=t.get(f).light;h.referencePosition.value.setFromMatrixPosition(m.matrixWorld),h.nearDistance.value=m.shadow.camera.near,h.farDistance.value=m.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function g0(n,t,e,i){let s={},r={},a=[];const o=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(m,_){const M=_.program;i.uniformBlockBinding(m,M)}function c(m,_){let M=s[m.id];M===void 0&&(x(m),M=u(m),s[m.id]=M,m.addEventListener("dispose",h));const T=_.program;i.updateUBOMapping(m,T);const S=t.render.frame;r[m.id]!==S&&(p(m),r[m.id]=S)}function u(m){const _=d();m.__bindingPointIndex=_;const M=n.createBuffer(),T=m.__size,S=m.usage;return n.bindBuffer(n.UNIFORM_BUFFER,M),n.bufferData(n.UNIFORM_BUFFER,T,S),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,_,M),M}function d(){for(let m=0;m<o;m++)if(a.indexOf(m)===-1)return a.push(m),m;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function p(m){const _=s[m.id],M=m.uniforms,T=m.__cache;n.bindBuffer(n.UNIFORM_BUFFER,_);for(let S=0,w=M.length;S<w;S++){const D=Array.isArray(M[S])?M[S]:[M[S]];for(let E=0,b=D.length;E<b;E++){const P=D[E];if(g(P,S,E,T)===!0){const C=P.__offset,L=Array.isArray(P.value)?P.value:[P.value];let F=0;for(let U=0;U<L.length;U++){const N=L[U],G=v(N);typeof N=="number"||typeof N=="boolean"?(P.__data[0]=N,n.bufferSubData(n.UNIFORM_BUFFER,C+F,P.__data)):N.isMatrix3?(P.__data[0]=N.elements[0],P.__data[1]=N.elements[1],P.__data[2]=N.elements[2],P.__data[3]=0,P.__data[4]=N.elements[3],P.__data[5]=N.elements[4],P.__data[6]=N.elements[5],P.__data[7]=0,P.__data[8]=N.elements[6],P.__data[9]=N.elements[7],P.__data[10]=N.elements[8],P.__data[11]=0):(N.toArray(P.__data,F),F+=G.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,C,P.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function g(m,_,M,T){const S=m.value,w=_+"_"+M;if(T[w]===void 0)return typeof S=="number"||typeof S=="boolean"?T[w]=S:T[w]=S.clone(),!0;{const D=T[w];if(typeof S=="number"||typeof S=="boolean"){if(D!==S)return T[w]=S,!0}else if(D.equals(S)===!1)return D.copy(S),!0}return!1}function x(m){const _=m.uniforms;let M=0;const T=16;for(let w=0,D=_.length;w<D;w++){const E=Array.isArray(_[w])?_[w]:[_[w]];for(let b=0,P=E.length;b<P;b++){const C=E[b],L=Array.isArray(C.value)?C.value:[C.value];for(let F=0,U=L.length;F<U;F++){const N=L[F],G=v(N),z=M%T,Z=z%G.boundary,$=z+Z;M+=Z,$!==0&&T-$<G.storage&&(M+=T-$),C.__data=new Float32Array(G.storage/Float32Array.BYTES_PER_ELEMENT),C.__offset=M,M+=G.storage}}}const S=M%T;return S>0&&(M+=T-S),m.__size=M,m.__cache={},this}function v(m){const _={boundary:0,storage:0};return typeof m=="number"||typeof m=="boolean"?(_.boundary=4,_.storage=4):m.isVector2?(_.boundary=8,_.storage=8):m.isVector3||m.isColor?(_.boundary=16,_.storage=12):m.isVector4?(_.boundary=16,_.storage=16):m.isMatrix3?(_.boundary=48,_.storage=48):m.isMatrix4?(_.boundary=64,_.storage=64):m.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",m),_}function h(m){const _=m.target;_.removeEventListener("dispose",h);const M=a.indexOf(_.__bindingPointIndex);a.splice(M,1),n.deleteBuffer(s[_.id]),delete s[_.id],delete r[_.id]}function f(){for(const m in s)n.deleteBuffer(s[m]);a=[],s={},r={}}return{bind:l,update:c,dispose:f}}class _0{constructor(t={}){const{canvas:e=ju(),context:i=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:p=!1}=t;this.isWebGLRenderer=!0;let g;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=i.getContextAttributes().alpha}else g=a;const x=new Uint32Array(4),v=new Int32Array(4);let h=null,f=null;const m=[],_=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=si,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const M=this;let T=!1;this._outputColorSpace=Ne;let S=0,w=0,D=null,E=-1,b=null;const P=new Ee,C=new Ee;let L=null;const F=new Vt(0);let U=0,N=e.width,G=e.height,z=1,Z=null,$=null;const nt=new Ee(0,0,N,G),k=new Ee(0,0,N,G);let q=!1;const ft=new ch;let ct=!1,X=!1;const J=new ve,ut=new B,bt=new Ee,vt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Ot=!1;function ne(){return D===null?z:1}let I=i;function Ft(R,V){return e.getContext(R,V)}try{const R={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:d};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Xo}`),e.addEventListener("webglcontextlost",_t,!1),e.addEventListener("webglcontextrestored",Lt,!1),e.addEventListener("webglcontextcreationerror",ht,!1),I===null){const V="webgl2";if(I=Ft(V,R),I===null)throw Ft(V)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(R){throw console.error("THREE.WebGLRenderer: "+R.message),R}let Pt,wt,Et,jt,St,Dt,re,at,A,y,H,W,j,K,Tt,ot,dt,xt,st,gt,yt,mt,Mt,zt;function O(){Pt=new wm(I),Pt.init(),mt=new l0(I,Pt),wt=new vm(I,Pt,t,mt),Et=new o0(I,Pt),wt.reversedDepthBuffer&&p&&Et.buffers.depth.setReversed(!0),jt=new Pm(I),St=new $g,Dt=new c0(I,Pt,Et,St,wt,mt,jt),re=new Sm(M),at=new Am(M),A=new Fd(I),Mt=new xm(I,A),y=new Rm(I,A,jt,Mt),H=new Lm(I,y,A,jt),st=new Dm(I,wt,Dt),ot=new ym(St),W=new qg(M,re,at,Pt,wt,Mt,ot),j=new m0(M,St),K=new Kg,Tt=new n0(Pt),xt=new _m(M,re,at,Et,H,g,l),dt=new r0(M,H,wt),zt=new g0(I,jt,wt,Et),gt=new Mm(I,Pt,jt),yt=new Cm(I,Pt,jt),jt.programs=W.programs,M.capabilities=wt,M.extensions=Pt,M.properties=St,M.renderLists=K,M.shadowMap=dt,M.state=Et,M.info=jt}O();const lt=new f0(M,I);this.xr=lt,this.getContext=function(){return I},this.getContextAttributes=function(){return I.getContextAttributes()},this.forceContextLoss=function(){const R=Pt.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){const R=Pt.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return z},this.setPixelRatio=function(R){R!==void 0&&(z=R,this.setSize(N,G,!1))},this.getSize=function(R){return R.set(N,G)},this.setSize=function(R,V,Q=!0){if(lt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}N=R,G=V,e.width=Math.floor(R*z),e.height=Math.floor(V*z),Q===!0&&(e.style.width=R+"px",e.style.height=V+"px"),this.setViewport(0,0,R,V)},this.getDrawingBufferSize=function(R){return R.set(N*z,G*z).floor()},this.setDrawingBufferSize=function(R,V,Q){N=R,G=V,z=Q,e.width=Math.floor(R*Q),e.height=Math.floor(V*Q),this.setViewport(0,0,R,V)},this.getCurrentViewport=function(R){return R.copy(P)},this.getViewport=function(R){return R.copy(nt)},this.setViewport=function(R,V,Q,tt){R.isVector4?nt.set(R.x,R.y,R.z,R.w):nt.set(R,V,Q,tt),Et.viewport(P.copy(nt).multiplyScalar(z).round())},this.getScissor=function(R){return R.copy(k)},this.setScissor=function(R,V,Q,tt){R.isVector4?k.set(R.x,R.y,R.z,R.w):k.set(R,V,Q,tt),Et.scissor(C.copy(k).multiplyScalar(z).round())},this.getScissorTest=function(){return q},this.setScissorTest=function(R){Et.setScissorTest(q=R)},this.setOpaqueSort=function(R){Z=R},this.setTransparentSort=function(R){$=R},this.getClearColor=function(R){return R.copy(xt.getClearColor())},this.setClearColor=function(){xt.setClearColor(...arguments)},this.getClearAlpha=function(){return xt.getClearAlpha()},this.setClearAlpha=function(){xt.setClearAlpha(...arguments)},this.clear=function(R=!0,V=!0,Q=!0){let tt=0;if(R){let Y=!1;if(D!==null){const pt=D.texture.format;Y=pt===Zo||pt===Ko||pt===jo}if(Y){const pt=D.texture.type,Rt=pt===Wn||pt===Ri||pt===Ns||pt===Os||pt===qo||pt===$o,Nt=xt.getClearColor(),It=xt.getClearAlpha(),Yt=Nt.r,$t=Nt.g,kt=Nt.b;Rt?(x[0]=Yt,x[1]=$t,x[2]=kt,x[3]=It,I.clearBufferuiv(I.COLOR,0,x)):(v[0]=Yt,v[1]=$t,v[2]=kt,v[3]=It,I.clearBufferiv(I.COLOR,0,v))}else tt|=I.COLOR_BUFFER_BIT}V&&(tt|=I.DEPTH_BUFFER_BIT),Q&&(tt|=I.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),I.clear(tt)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",_t,!1),e.removeEventListener("webglcontextrestored",Lt,!1),e.removeEventListener("webglcontextcreationerror",ht,!1),xt.dispose(),K.dispose(),Tt.dispose(),St.dispose(),re.dispose(),at.dispose(),H.dispose(),Mt.dispose(),zt.dispose(),W.dispose(),lt.dispose(),lt.removeEventListener("sessionstart",qe),lt.removeEventListener("sessionend",uc),hi.stop()};function _t(R){R.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),T=!0}function Lt(){console.log("THREE.WebGLRenderer: Context Restored."),T=!1;const R=jt.autoReset,V=dt.enabled,Q=dt.autoUpdate,tt=dt.needsUpdate,Y=dt.type;O(),jt.autoReset=R,dt.enabled=V,dt.autoUpdate=Q,dt.needsUpdate=tt,dt.type=Y}function ht(R){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function it(R){const V=R.target;V.removeEventListener("dispose",it),Ut(V)}function Ut(R){qt(R),St.remove(R)}function qt(R){const V=St.get(R).programs;V!==void 0&&(V.forEach(function(Q){W.releaseProgram(Q)}),R.isShaderMaterial&&W.releaseShaderCache(R))}this.renderBufferDirect=function(R,V,Q,tt,Y,pt){V===null&&(V=vt);const Rt=Y.isMesh&&Y.matrixWorld.determinant()<0,Nt=kh(R,V,Q,tt,Y);Et.setMaterial(tt,Rt);let It=Q.index,Yt=1;if(tt.wireframe===!0){if(It=y.getWireframeAttribute(Q),It===void 0)return;Yt=2}const $t=Q.drawRange,kt=Q.attributes.position;let te=$t.start*Yt,fe=($t.start+$t.count)*Yt;pt!==null&&(te=Math.max(te,pt.start*Yt),fe=Math.min(fe,(pt.start+pt.count)*Yt)),It!==null?(te=Math.max(te,0),fe=Math.min(fe,It.count)):kt!=null&&(te=Math.max(te,0),fe=Math.min(fe,kt.count));const ye=fe-te;if(ye<0||ye===1/0)return;Mt.setup(Y,tt,Nt,Q,It);let _e,ge=gt;if(It!==null&&(_e=A.get(It),ge=yt,ge.setIndex(_e)),Y.isMesh)tt.wireframe===!0?(Et.setLineWidth(tt.wireframeLinewidth*ne()),ge.setMode(I.LINES)):ge.setMode(I.TRIANGLES);else if(Y.isLine){let Wt=tt.linewidth;Wt===void 0&&(Wt=1),Et.setLineWidth(Wt*ne()),Y.isLineSegments?ge.setMode(I.LINES):Y.isLineLoop?ge.setMode(I.LINE_LOOP):ge.setMode(I.LINE_STRIP)}else Y.isPoints?ge.setMode(I.POINTS):Y.isSprite&&ge.setMode(I.TRIANGLES);if(Y.isBatchedMesh)if(Y._multiDrawInstances!==null)Hs("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),ge.renderMultiDrawInstances(Y._multiDrawStarts,Y._multiDrawCounts,Y._multiDrawCount,Y._multiDrawInstances);else if(Pt.get("WEBGL_multi_draw"))ge.renderMultiDraw(Y._multiDrawStarts,Y._multiDrawCounts,Y._multiDrawCount);else{const Wt=Y._multiDrawStarts,xe=Y._multiDrawCounts,oe=Y._multiDrawCount,Je=It?A.get(It).bytesPerElement:1,Fi=St.get(tt).currentProgram.getUniforms();for(let Qe=0;Qe<oe;Qe++)Fi.setValue(I,"_gl_DrawID",Qe),ge.render(Wt[Qe]/Je,xe[Qe])}else if(Y.isInstancedMesh)ge.renderInstances(te,ye,Y.count);else if(Q.isInstancedBufferGeometry){const Wt=Q._maxInstanceCount!==void 0?Q._maxInstanceCount:1/0,xe=Math.min(Q.instanceCount,Wt);ge.renderInstances(te,ye,xe)}else ge.render(te,ye)};function ue(R,V,Q){R.transparent===!0&&R.side===kn&&R.forceSinglePass===!1?(R.side=Ze,R.needsUpdate=!0,Qs(R,V,Q),R.side=oi,R.needsUpdate=!0,Qs(R,V,Q),R.side=kn):Qs(R,V,Q)}this.compile=function(R,V,Q=null){Q===null&&(Q=R),f=Tt.get(Q),f.init(V),_.push(f),Q.traverseVisible(function(Y){Y.isLight&&Y.layers.test(V.layers)&&(f.pushLight(Y),Y.castShadow&&f.pushShadow(Y))}),R!==Q&&R.traverseVisible(function(Y){Y.isLight&&Y.layers.test(V.layers)&&(f.pushLight(Y),Y.castShadow&&f.pushShadow(Y))}),f.setupLights();const tt=new Set;return R.traverse(function(Y){if(!(Y.isMesh||Y.isPoints||Y.isLine||Y.isSprite))return;const pt=Y.material;if(pt)if(Array.isArray(pt))for(let Rt=0;Rt<pt.length;Rt++){const Nt=pt[Rt];ue(Nt,Q,Y),tt.add(Nt)}else ue(pt,Q,Y),tt.add(pt)}),f=_.pop(),tt},this.compileAsync=function(R,V,Q=null){const tt=this.compile(R,V,Q);return new Promise(Y=>{function pt(){if(tt.forEach(function(Rt){St.get(Rt).currentProgram.isReady()&&tt.delete(Rt)}),tt.size===0){Y(R);return}setTimeout(pt,10)}Pt.get("KHR_parallel_shader_compile")!==null?pt():setTimeout(pt,10)})};let ie=null;function sn(R){ie&&ie(R)}function qe(){hi.stop()}function uc(){hi.start()}const hi=new uh;hi.setAnimationLoop(sn),typeof self<"u"&&hi.setContext(self),this.setAnimationLoop=function(R){ie=R,lt.setAnimationLoop(R),R===null?hi.stop():hi.start()},lt.addEventListener("sessionstart",qe),lt.addEventListener("sessionend",uc),this.render=function(R,V){if(V!==void 0&&V.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(T===!0)return;if(R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),V.parent===null&&V.matrixWorldAutoUpdate===!0&&V.updateMatrixWorld(),lt.enabled===!0&&lt.isPresenting===!0&&(lt.cameraAutoUpdate===!0&&lt.updateCamera(V),V=lt.getCamera()),R.isScene===!0&&R.onBeforeRender(M,R,V,D),f=Tt.get(R,_.length),f.init(V),_.push(f),J.multiplyMatrices(V.projectionMatrix,V.matrixWorldInverse),ft.setFromProjectionMatrix(J,Dn,V.reversedDepth),X=this.localClippingEnabled,ct=ot.init(this.clippingPlanes,X),h=K.get(R,m.length),h.init(),m.push(h),lt.enabled===!0&&lt.isPresenting===!0){const pt=M.xr.getDepthSensingMesh();pt!==null&&ra(pt,V,-1/0,M.sortObjects)}ra(R,V,0,M.sortObjects),h.finish(),M.sortObjects===!0&&h.sort(Z,$),Ot=lt.enabled===!1||lt.isPresenting===!1||lt.hasDepthSensing()===!1,Ot&&xt.addToRenderList(h,R),this.info.render.frame++,ct===!0&&ot.beginShadows();const Q=f.state.shadowsArray;dt.render(Q,R,V),ct===!0&&ot.endShadows(),this.info.autoReset===!0&&this.info.reset();const tt=h.opaque,Y=h.transmissive;if(f.setupLights(),V.isArrayCamera){const pt=V.cameras;if(Y.length>0)for(let Rt=0,Nt=pt.length;Rt<Nt;Rt++){const It=pt[Rt];fc(tt,Y,R,It)}Ot&&xt.render(R);for(let Rt=0,Nt=pt.length;Rt<Nt;Rt++){const It=pt[Rt];dc(h,R,It,It.viewport)}}else Y.length>0&&fc(tt,Y,R,V),Ot&&xt.render(R),dc(h,R,V);D!==null&&w===0&&(Dt.updateMultisampleRenderTarget(D),Dt.updateRenderTargetMipmap(D)),R.isScene===!0&&R.onAfterRender(M,R,V),Mt.resetDefaultState(),E=-1,b=null,_.pop(),_.length>0?(f=_[_.length-1],ct===!0&&ot.setGlobalState(M.clippingPlanes,f.state.camera)):f=null,m.pop(),m.length>0?h=m[m.length-1]:h=null};function ra(R,V,Q,tt){if(R.visible===!1)return;if(R.layers.test(V.layers)){if(R.isGroup)Q=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update(V);else if(R.isLight)f.pushLight(R),R.castShadow&&f.pushShadow(R);else if(R.isSprite){if(!R.frustumCulled||ft.intersectsSprite(R)){tt&&bt.setFromMatrixPosition(R.matrixWorld).applyMatrix4(J);const Rt=H.update(R),Nt=R.material;Nt.visible&&h.push(R,Rt,Nt,Q,bt.z,null)}}else if((R.isMesh||R.isLine||R.isPoints)&&(!R.frustumCulled||ft.intersectsObject(R))){const Rt=H.update(R),Nt=R.material;if(tt&&(R.boundingSphere!==void 0?(R.boundingSphere===null&&R.computeBoundingSphere(),bt.copy(R.boundingSphere.center)):(Rt.boundingSphere===null&&Rt.computeBoundingSphere(),bt.copy(Rt.boundingSphere.center)),bt.applyMatrix4(R.matrixWorld).applyMatrix4(J)),Array.isArray(Nt)){const It=Rt.groups;for(let Yt=0,$t=It.length;Yt<$t;Yt++){const kt=It[Yt],te=Nt[kt.materialIndex];te&&te.visible&&h.push(R,Rt,te,Q,bt.z,kt)}}else Nt.visible&&h.push(R,Rt,Nt,Q,bt.z,null)}}const pt=R.children;for(let Rt=0,Nt=pt.length;Rt<Nt;Rt++)ra(pt[Rt],V,Q,tt)}function dc(R,V,Q,tt){const Y=R.opaque,pt=R.transmissive,Rt=R.transparent;f.setupLightsView(Q),ct===!0&&ot.setGlobalState(M.clippingPlanes,Q),tt&&Et.viewport(P.copy(tt)),Y.length>0&&Js(Y,V,Q),pt.length>0&&Js(pt,V,Q),Rt.length>0&&Js(Rt,V,Q),Et.buffers.depth.setTest(!0),Et.buffers.depth.setMask(!0),Et.buffers.color.setMask(!0),Et.setPolygonOffset(!1)}function fc(R,V,Q,tt){if((Q.isScene===!0?Q.overrideMaterial:null)!==null)return;f.state.transmissionRenderTarget[tt.id]===void 0&&(f.state.transmissionRenderTarget[tt.id]=new Ci(1,1,{generateMipmaps:!0,type:Pt.has("EXT_color_buffer_half_float")||Pt.has("EXT_color_buffer_float")?Ws:Wn,minFilter:ni,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:le.workingColorSpace}));const pt=f.state.transmissionRenderTarget[tt.id],Rt=tt.viewport||P;pt.setSize(Rt.z*M.transmissionResolutionScale,Rt.w*M.transmissionResolutionScale);const Nt=M.getRenderTarget(),It=M.getActiveCubeFace(),Yt=M.getActiveMipmapLevel();M.setRenderTarget(pt),M.getClearColor(F),U=M.getClearAlpha(),U<1&&M.setClearColor(16777215,.5),M.clear(),Ot&&xt.render(Q);const $t=M.toneMapping;M.toneMapping=si;const kt=tt.viewport;if(tt.viewport!==void 0&&(tt.viewport=void 0),f.setupLightsView(tt),ct===!0&&ot.setGlobalState(M.clippingPlanes,tt),Js(R,Q,tt),Dt.updateMultisampleRenderTarget(pt),Dt.updateRenderTargetMipmap(pt),Pt.has("WEBGL_multisampled_render_to_texture")===!1){let te=!1;for(let fe=0,ye=V.length;fe<ye;fe++){const _e=V[fe],ge=_e.object,Wt=_e.geometry,xe=_e.material,oe=_e.group;if(xe.side===kn&&ge.layers.test(tt.layers)){const Je=xe.side;xe.side=Ze,xe.needsUpdate=!0,pc(ge,Q,tt,Wt,xe,oe),xe.side=Je,xe.needsUpdate=!0,te=!0}}te===!0&&(Dt.updateMultisampleRenderTarget(pt),Dt.updateRenderTargetMipmap(pt))}M.setRenderTarget(Nt,It,Yt),M.setClearColor(F,U),kt!==void 0&&(tt.viewport=kt),M.toneMapping=$t}function Js(R,V,Q){const tt=V.isScene===!0?V.overrideMaterial:null;for(let Y=0,pt=R.length;Y<pt;Y++){const Rt=R[Y],Nt=Rt.object,It=Rt.geometry,Yt=Rt.group;let $t=Rt.material;$t.allowOverride===!0&&tt!==null&&($t=tt),Nt.layers.test(Q.layers)&&pc(Nt,V,Q,It,$t,Yt)}}function pc(R,V,Q,tt,Y,pt){R.onBeforeRender(M,V,Q,tt,Y,pt),R.modelViewMatrix.multiplyMatrices(Q.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),Y.onBeforeRender(M,V,Q,tt,R,pt),Y.transparent===!0&&Y.side===kn&&Y.forceSinglePass===!1?(Y.side=Ze,Y.needsUpdate=!0,M.renderBufferDirect(Q,V,tt,Y,R,pt),Y.side=oi,Y.needsUpdate=!0,M.renderBufferDirect(Q,V,tt,Y,R,pt),Y.side=kn):M.renderBufferDirect(Q,V,tt,Y,R,pt),R.onAfterRender(M,V,Q,tt,Y,pt)}function Qs(R,V,Q){V.isScene!==!0&&(V=vt);const tt=St.get(R),Y=f.state.lights,pt=f.state.shadowsArray,Rt=Y.state.version,Nt=W.getParameters(R,Y.state,pt,V,Q),It=W.getProgramCacheKey(Nt);let Yt=tt.programs;tt.environment=R.isMeshStandardMaterial?V.environment:null,tt.fog=V.fog,tt.envMap=(R.isMeshStandardMaterial?at:re).get(R.envMap||tt.environment),tt.envMapRotation=tt.environment!==null&&R.envMap===null?V.environmentRotation:R.envMapRotation,Yt===void 0&&(R.addEventListener("dispose",it),Yt=new Map,tt.programs=Yt);let $t=Yt.get(It);if($t!==void 0){if(tt.currentProgram===$t&&tt.lightsStateVersion===Rt)return gc(R,Nt),$t}else Nt.uniforms=W.getUniforms(R),R.onBeforeCompile(Nt,M),$t=W.acquireProgram(Nt,It),Yt.set(It,$t),tt.uniforms=Nt.uniforms;const kt=tt.uniforms;return(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&(kt.clippingPlanes=ot.uniform),gc(R,Nt),tt.needsLights=Gh(R),tt.lightsStateVersion=Rt,tt.needsLights&&(kt.ambientLightColor.value=Y.state.ambient,kt.lightProbe.value=Y.state.probe,kt.directionalLights.value=Y.state.directional,kt.directionalLightShadows.value=Y.state.directionalShadow,kt.spotLights.value=Y.state.spot,kt.spotLightShadows.value=Y.state.spotShadow,kt.rectAreaLights.value=Y.state.rectArea,kt.ltc_1.value=Y.state.rectAreaLTC1,kt.ltc_2.value=Y.state.rectAreaLTC2,kt.pointLights.value=Y.state.point,kt.pointLightShadows.value=Y.state.pointShadow,kt.hemisphereLights.value=Y.state.hemi,kt.directionalShadowMap.value=Y.state.directionalShadowMap,kt.directionalShadowMatrix.value=Y.state.directionalShadowMatrix,kt.spotShadowMap.value=Y.state.spotShadowMap,kt.spotLightMatrix.value=Y.state.spotLightMatrix,kt.spotLightMap.value=Y.state.spotLightMap,kt.pointShadowMap.value=Y.state.pointShadowMap,kt.pointShadowMatrix.value=Y.state.pointShadowMatrix),tt.currentProgram=$t,tt.uniformsList=null,$t}function mc(R){if(R.uniformsList===null){const V=R.currentProgram.getUniforms();R.uniformsList=Br.seqWithValue(V.seq,R.uniforms)}return R.uniformsList}function gc(R,V){const Q=St.get(R);Q.outputColorSpace=V.outputColorSpace,Q.batching=V.batching,Q.batchingColor=V.batchingColor,Q.instancing=V.instancing,Q.instancingColor=V.instancingColor,Q.instancingMorph=V.instancingMorph,Q.skinning=V.skinning,Q.morphTargets=V.morphTargets,Q.morphNormals=V.morphNormals,Q.morphColors=V.morphColors,Q.morphTargetsCount=V.morphTargetsCount,Q.numClippingPlanes=V.numClippingPlanes,Q.numIntersection=V.numClipIntersection,Q.vertexAlphas=V.vertexAlphas,Q.vertexTangents=V.vertexTangents,Q.toneMapping=V.toneMapping}function kh(R,V,Q,tt,Y){V.isScene!==!0&&(V=vt),Dt.resetTextureUnits();const pt=V.fog,Rt=tt.isMeshStandardMaterial?V.environment:null,Nt=D===null?M.outputColorSpace:D.isXRRenderTarget===!0?D.texture.colorSpace:ms,It=(tt.isMeshStandardMaterial?at:re).get(tt.envMap||Rt),Yt=tt.vertexColors===!0&&!!Q.attributes.color&&Q.attributes.color.itemSize===4,$t=!!Q.attributes.tangent&&(!!tt.normalMap||tt.anisotropy>0),kt=!!Q.morphAttributes.position,te=!!Q.morphAttributes.normal,fe=!!Q.morphAttributes.color;let ye=si;tt.toneMapped&&(D===null||D.isXRRenderTarget===!0)&&(ye=M.toneMapping);const _e=Q.morphAttributes.position||Q.morphAttributes.normal||Q.morphAttributes.color,ge=_e!==void 0?_e.length:0,Wt=St.get(tt),xe=f.state.lights;if(ct===!0&&(X===!0||R!==b)){const ke=R===b&&tt.id===E;ot.setState(tt,R,ke)}let oe=!1;tt.version===Wt.__version?(Wt.needsLights&&Wt.lightsStateVersion!==xe.state.version||Wt.outputColorSpace!==Nt||Y.isBatchedMesh&&Wt.batching===!1||!Y.isBatchedMesh&&Wt.batching===!0||Y.isBatchedMesh&&Wt.batchingColor===!0&&Y.colorTexture===null||Y.isBatchedMesh&&Wt.batchingColor===!1&&Y.colorTexture!==null||Y.isInstancedMesh&&Wt.instancing===!1||!Y.isInstancedMesh&&Wt.instancing===!0||Y.isSkinnedMesh&&Wt.skinning===!1||!Y.isSkinnedMesh&&Wt.skinning===!0||Y.isInstancedMesh&&Wt.instancingColor===!0&&Y.instanceColor===null||Y.isInstancedMesh&&Wt.instancingColor===!1&&Y.instanceColor!==null||Y.isInstancedMesh&&Wt.instancingMorph===!0&&Y.morphTexture===null||Y.isInstancedMesh&&Wt.instancingMorph===!1&&Y.morphTexture!==null||Wt.envMap!==It||tt.fog===!0&&Wt.fog!==pt||Wt.numClippingPlanes!==void 0&&(Wt.numClippingPlanes!==ot.numPlanes||Wt.numIntersection!==ot.numIntersection)||Wt.vertexAlphas!==Yt||Wt.vertexTangents!==$t||Wt.morphTargets!==kt||Wt.morphNormals!==te||Wt.morphColors!==fe||Wt.toneMapping!==ye||Wt.morphTargetsCount!==ge)&&(oe=!0):(oe=!0,Wt.__version=tt.version);let Je=Wt.currentProgram;oe===!0&&(Je=Qs(tt,V,Y));let Fi=!1,Qe=!1,vs=!1;const Me=Je.getUniforms(),rn=Wt.uniforms;if(Et.useProgram(Je.program)&&(Fi=!0,Qe=!0,vs=!0),tt.id!==E&&(E=tt.id,Qe=!0),Fi||b!==R){Et.buffers.depth.getReversed()&&R.reversedDepth!==!0&&(R._reversedDepth=!0,R.updateProjectionMatrix()),Me.setValue(I,"projectionMatrix",R.projectionMatrix),Me.setValue(I,"viewMatrix",R.matrixWorldInverse);const $e=Me.map.cameraPosition;$e!==void 0&&$e.setValue(I,ut.setFromMatrixPosition(R.matrixWorld)),wt.logarithmicDepthBuffer&&Me.setValue(I,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),(tt.isMeshPhongMaterial||tt.isMeshToonMaterial||tt.isMeshLambertMaterial||tt.isMeshBasicMaterial||tt.isMeshStandardMaterial||tt.isShaderMaterial)&&Me.setValue(I,"isOrthographic",R.isOrthographicCamera===!0),b!==R&&(b=R,Qe=!0,vs=!0)}if(Y.isSkinnedMesh){Me.setOptional(I,Y,"bindMatrix"),Me.setOptional(I,Y,"bindMatrixInverse");const ke=Y.skeleton;ke&&(ke.boneTexture===null&&ke.computeBoneTexture(),Me.setValue(I,"boneTexture",ke.boneTexture,Dt))}Y.isBatchedMesh&&(Me.setOptional(I,Y,"batchingTexture"),Me.setValue(I,"batchingTexture",Y._matricesTexture,Dt),Me.setOptional(I,Y,"batchingIdTexture"),Me.setValue(I,"batchingIdTexture",Y._indirectTexture,Dt),Me.setOptional(I,Y,"batchingColorTexture"),Y._colorsTexture!==null&&Me.setValue(I,"batchingColorTexture",Y._colorsTexture,Dt));const an=Q.morphAttributes;if((an.position!==void 0||an.normal!==void 0||an.color!==void 0)&&st.update(Y,Q,Je),(Qe||Wt.receiveShadow!==Y.receiveShadow)&&(Wt.receiveShadow=Y.receiveShadow,Me.setValue(I,"receiveShadow",Y.receiveShadow)),tt.isMeshGouraudMaterial&&tt.envMap!==null&&(rn.envMap.value=It,rn.flipEnvMap.value=It.isCubeTexture&&It.isRenderTargetTexture===!1?-1:1),tt.isMeshStandardMaterial&&tt.envMap===null&&V.environment!==null&&(rn.envMapIntensity.value=V.environmentIntensity),Qe&&(Me.setValue(I,"toneMappingExposure",M.toneMappingExposure),Wt.needsLights&&Hh(rn,vs),pt&&tt.fog===!0&&j.refreshFogUniforms(rn,pt),j.refreshMaterialUniforms(rn,tt,z,G,f.state.transmissionRenderTarget[R.id]),Br.upload(I,mc(Wt),rn,Dt)),tt.isShaderMaterial&&tt.uniformsNeedUpdate===!0&&(Br.upload(I,mc(Wt),rn,Dt),tt.uniformsNeedUpdate=!1),tt.isSpriteMaterial&&Me.setValue(I,"center",Y.center),Me.setValue(I,"modelViewMatrix",Y.modelViewMatrix),Me.setValue(I,"normalMatrix",Y.normalMatrix),Me.setValue(I,"modelMatrix",Y.matrixWorld),tt.isShaderMaterial||tt.isRawShaderMaterial){const ke=tt.uniformsGroups;for(let $e=0,aa=ke.length;$e<aa;$e++){const ui=ke[$e];zt.update(ui,Je),zt.bind(ui,Je)}}return Je}function Hh(R,V){R.ambientLightColor.needsUpdate=V,R.lightProbe.needsUpdate=V,R.directionalLights.needsUpdate=V,R.directionalLightShadows.needsUpdate=V,R.pointLights.needsUpdate=V,R.pointLightShadows.needsUpdate=V,R.spotLights.needsUpdate=V,R.spotLightShadows.needsUpdate=V,R.rectAreaLights.needsUpdate=V,R.hemisphereLights.needsUpdate=V}function Gh(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return S},this.getActiveMipmapLevel=function(){return w},this.getRenderTarget=function(){return D},this.setRenderTargetTextures=function(R,V,Q){const tt=St.get(R);tt.__autoAllocateDepthBuffer=R.resolveDepthBuffer===!1,tt.__autoAllocateDepthBuffer===!1&&(tt.__useRenderToTexture=!1),St.get(R.texture).__webglTexture=V,St.get(R.depthTexture).__webglTexture=tt.__autoAllocateDepthBuffer?void 0:Q,tt.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(R,V){const Q=St.get(R);Q.__webglFramebuffer=V,Q.__useDefaultFramebuffer=V===void 0};const Vh=I.createFramebuffer();this.setRenderTarget=function(R,V=0,Q=0){D=R,S=V,w=Q;let tt=!0,Y=null,pt=!1,Rt=!1;if(R){const It=St.get(R);if(It.__useDefaultFramebuffer!==void 0)Et.bindFramebuffer(I.FRAMEBUFFER,null),tt=!1;else if(It.__webglFramebuffer===void 0)Dt.setupRenderTarget(R);else if(It.__hasExternalTextures)Dt.rebindTextures(R,St.get(R.texture).__webglTexture,St.get(R.depthTexture).__webglTexture);else if(R.depthBuffer){const kt=R.depthTexture;if(It.__boundDepthTexture!==kt){if(kt!==null&&St.has(kt)&&(R.width!==kt.image.width||R.height!==kt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");Dt.setupDepthRenderbuffer(R)}}const Yt=R.texture;(Yt.isData3DTexture||Yt.isDataArrayTexture||Yt.isCompressedArrayTexture)&&(Rt=!0);const $t=St.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(Array.isArray($t[V])?Y=$t[V][Q]:Y=$t[V],pt=!0):R.samples>0&&Dt.useMultisampledRTT(R)===!1?Y=St.get(R).__webglMultisampledFramebuffer:Array.isArray($t)?Y=$t[Q]:Y=$t,P.copy(R.viewport),C.copy(R.scissor),L=R.scissorTest}else P.copy(nt).multiplyScalar(z).floor(),C.copy(k).multiplyScalar(z).floor(),L=q;if(Q!==0&&(Y=Vh),Et.bindFramebuffer(I.FRAMEBUFFER,Y)&&tt&&Et.drawBuffers(R,Y),Et.viewport(P),Et.scissor(C),Et.setScissorTest(L),pt){const It=St.get(R.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_CUBE_MAP_POSITIVE_X+V,It.__webglTexture,Q)}else if(Rt){const It=V;for(let Yt=0;Yt<R.textures.length;Yt++){const $t=St.get(R.textures[Yt]);I.framebufferTextureLayer(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0+Yt,$t.__webglTexture,Q,It)}}else if(R!==null&&Q!==0){const It=St.get(R.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,It.__webglTexture,Q)}E=-1},this.readRenderTargetPixels=function(R,V,Q,tt,Y,pt,Rt,Nt=0){if(!(R&&R.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let It=St.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Rt!==void 0&&(It=It[Rt]),It){Et.bindFramebuffer(I.FRAMEBUFFER,It);try{const Yt=R.textures[Nt],$t=Yt.format,kt=Yt.type;if(!wt.textureFormatReadable($t)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!wt.textureTypeReadable(kt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}V>=0&&V<=R.width-tt&&Q>=0&&Q<=R.height-Y&&(R.textures.length>1&&I.readBuffer(I.COLOR_ATTACHMENT0+Nt),I.readPixels(V,Q,tt,Y,mt.convert($t),mt.convert(kt),pt))}finally{const Yt=D!==null?St.get(D).__webglFramebuffer:null;Et.bindFramebuffer(I.FRAMEBUFFER,Yt)}}},this.readRenderTargetPixelsAsync=async function(R,V,Q,tt,Y,pt,Rt,Nt=0){if(!(R&&R.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let It=St.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Rt!==void 0&&(It=It[Rt]),It)if(V>=0&&V<=R.width-tt&&Q>=0&&Q<=R.height-Y){Et.bindFramebuffer(I.FRAMEBUFFER,It);const Yt=R.textures[Nt],$t=Yt.format,kt=Yt.type;if(!wt.textureFormatReadable($t))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!wt.textureTypeReadable(kt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const te=I.createBuffer();I.bindBuffer(I.PIXEL_PACK_BUFFER,te),I.bufferData(I.PIXEL_PACK_BUFFER,pt.byteLength,I.STREAM_READ),R.textures.length>1&&I.readBuffer(I.COLOR_ATTACHMENT0+Nt),I.readPixels(V,Q,tt,Y,mt.convert($t),mt.convert(kt),0);const fe=D!==null?St.get(D).__webglFramebuffer:null;Et.bindFramebuffer(I.FRAMEBUFFER,fe);const ye=I.fenceSync(I.SYNC_GPU_COMMANDS_COMPLETE,0);return I.flush(),await Ku(I,ye,4),I.bindBuffer(I.PIXEL_PACK_BUFFER,te),I.getBufferSubData(I.PIXEL_PACK_BUFFER,0,pt),I.deleteBuffer(te),I.deleteSync(ye),pt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(R,V=null,Q=0){const tt=Math.pow(2,-Q),Y=Math.floor(R.image.width*tt),pt=Math.floor(R.image.height*tt),Rt=V!==null?V.x:0,Nt=V!==null?V.y:0;Dt.setTexture2D(R,0),I.copyTexSubImage2D(I.TEXTURE_2D,Q,0,0,Rt,Nt,Y,pt),Et.unbindTexture()};const Wh=I.createFramebuffer(),Xh=I.createFramebuffer();this.copyTextureToTexture=function(R,V,Q=null,tt=null,Y=0,pt=null){pt===null&&(Y!==0?(Hs("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),pt=Y,Y=0):pt=0);let Rt,Nt,It,Yt,$t,kt,te,fe,ye;const _e=R.isCompressedTexture?R.mipmaps[pt]:R.image;if(Q!==null)Rt=Q.max.x-Q.min.x,Nt=Q.max.y-Q.min.y,It=Q.isBox3?Q.max.z-Q.min.z:1,Yt=Q.min.x,$t=Q.min.y,kt=Q.isBox3?Q.min.z:0;else{const an=Math.pow(2,-Y);Rt=Math.floor(_e.width*an),Nt=Math.floor(_e.height*an),R.isDataArrayTexture?It=_e.depth:R.isData3DTexture?It=Math.floor(_e.depth*an):It=1,Yt=0,$t=0,kt=0}tt!==null?(te=tt.x,fe=tt.y,ye=tt.z):(te=0,fe=0,ye=0);const ge=mt.convert(V.format),Wt=mt.convert(V.type);let xe;V.isData3DTexture?(Dt.setTexture3D(V,0),xe=I.TEXTURE_3D):V.isDataArrayTexture||V.isCompressedArrayTexture?(Dt.setTexture2DArray(V,0),xe=I.TEXTURE_2D_ARRAY):(Dt.setTexture2D(V,0),xe=I.TEXTURE_2D),I.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,V.flipY),I.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,V.premultiplyAlpha),I.pixelStorei(I.UNPACK_ALIGNMENT,V.unpackAlignment);const oe=I.getParameter(I.UNPACK_ROW_LENGTH),Je=I.getParameter(I.UNPACK_IMAGE_HEIGHT),Fi=I.getParameter(I.UNPACK_SKIP_PIXELS),Qe=I.getParameter(I.UNPACK_SKIP_ROWS),vs=I.getParameter(I.UNPACK_SKIP_IMAGES);I.pixelStorei(I.UNPACK_ROW_LENGTH,_e.width),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,_e.height),I.pixelStorei(I.UNPACK_SKIP_PIXELS,Yt),I.pixelStorei(I.UNPACK_SKIP_ROWS,$t),I.pixelStorei(I.UNPACK_SKIP_IMAGES,kt);const Me=R.isDataArrayTexture||R.isData3DTexture,rn=V.isDataArrayTexture||V.isData3DTexture;if(R.isDepthTexture){const an=St.get(R),ke=St.get(V),$e=St.get(an.__renderTarget),aa=St.get(ke.__renderTarget);Et.bindFramebuffer(I.READ_FRAMEBUFFER,$e.__webglFramebuffer),Et.bindFramebuffer(I.DRAW_FRAMEBUFFER,aa.__webglFramebuffer);for(let ui=0;ui<It;ui++)Me&&(I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,St.get(R).__webglTexture,Y,kt+ui),I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,St.get(V).__webglTexture,pt,ye+ui)),I.blitFramebuffer(Yt,$t,Rt,Nt,te,fe,Rt,Nt,I.DEPTH_BUFFER_BIT,I.NEAREST);Et.bindFramebuffer(I.READ_FRAMEBUFFER,null),Et.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else if(Y!==0||R.isRenderTargetTexture||St.has(R)){const an=St.get(R),ke=St.get(V);Et.bindFramebuffer(I.READ_FRAMEBUFFER,Wh),Et.bindFramebuffer(I.DRAW_FRAMEBUFFER,Xh);for(let $e=0;$e<It;$e++)Me?I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,an.__webglTexture,Y,kt+$e):I.framebufferTexture2D(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,an.__webglTexture,Y),rn?I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,ke.__webglTexture,pt,ye+$e):I.framebufferTexture2D(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,ke.__webglTexture,pt),Y!==0?I.blitFramebuffer(Yt,$t,Rt,Nt,te,fe,Rt,Nt,I.COLOR_BUFFER_BIT,I.NEAREST):rn?I.copyTexSubImage3D(xe,pt,te,fe,ye+$e,Yt,$t,Rt,Nt):I.copyTexSubImage2D(xe,pt,te,fe,Yt,$t,Rt,Nt);Et.bindFramebuffer(I.READ_FRAMEBUFFER,null),Et.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else rn?R.isDataTexture||R.isData3DTexture?I.texSubImage3D(xe,pt,te,fe,ye,Rt,Nt,It,ge,Wt,_e.data):V.isCompressedArrayTexture?I.compressedTexSubImage3D(xe,pt,te,fe,ye,Rt,Nt,It,ge,_e.data):I.texSubImage3D(xe,pt,te,fe,ye,Rt,Nt,It,ge,Wt,_e):R.isDataTexture?I.texSubImage2D(I.TEXTURE_2D,pt,te,fe,Rt,Nt,ge,Wt,_e.data):R.isCompressedTexture?I.compressedTexSubImage2D(I.TEXTURE_2D,pt,te,fe,_e.width,_e.height,ge,_e.data):I.texSubImage2D(I.TEXTURE_2D,pt,te,fe,Rt,Nt,ge,Wt,_e);I.pixelStorei(I.UNPACK_ROW_LENGTH,oe),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,Je),I.pixelStorei(I.UNPACK_SKIP_PIXELS,Fi),I.pixelStorei(I.UNPACK_SKIP_ROWS,Qe),I.pixelStorei(I.UNPACK_SKIP_IMAGES,vs),pt===0&&V.generateMipmaps&&I.generateMipmap(xe),Et.unbindTexture()},this.initRenderTarget=function(R){St.get(R).__webglFramebuffer===void 0&&Dt.setupRenderTarget(R)},this.initTexture=function(R){R.isCubeTexture?Dt.setTextureCube(R,0):R.isData3DTexture?Dt.setTexture3D(R,0):R.isDataArrayTexture||R.isCompressedArrayTexture?Dt.setTexture2DArray(R,0):Dt.setTexture2D(R,0),Et.unbindTexture()},this.resetState=function(){S=0,w=0,D=null,Et.reset(),Mt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Dn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=le._getDrawingBufferColorSpace(t),e.unpackColorSpace=le._getUnpackColorSpace()}}const El={type:"change"},oc={type:"start"},gh={type:"end"},Rr=new qs,bl=new Jn,x0=Math.cos(70*rt.DEG2RAD),Ce=new B,je=2*Math.PI,me={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Ba=1e-6;class M0 extends Id{constructor(t,e=null){super(t,e),this.state=me.NONE,this.target=new B,this.cursor=new B,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:as.ROTATE,MIDDLE:as.DOLLY,RIGHT:as.PAN},this.touches={ONE:is.ROTATE,TWO:is.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new B,this._lastQuaternion=new ci,this._lastTargetPosition=new B,this._quat=new ci().setFromUnitVectors(t.up,new B(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new Zc,this._sphericalDelta=new Zc,this._scale=1,this._panOffset=new B,this._rotateStart=new Xt,this._rotateEnd=new Xt,this._rotateDelta=new Xt,this._panStart=new Xt,this._panEnd=new Xt,this._panDelta=new Xt,this._dollyStart=new Xt,this._dollyEnd=new Xt,this._dollyDelta=new Xt,this._dollyDirection=new B,this._mouse=new Xt,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=y0.bind(this),this._onPointerDown=v0.bind(this),this._onPointerUp=S0.bind(this),this._onContextMenu=C0.bind(this),this._onMouseWheel=T0.bind(this),this._onKeyDown=A0.bind(this),this._onTouchStart=w0.bind(this),this._onTouchMove=R0.bind(this),this._onMouseDown=E0.bind(this),this._onMouseMove=b0.bind(this),this._interceptControlDown=P0.bind(this),this._interceptControlUp=D0.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}connect(t){super.connect(t),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(t){t.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=t}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(El),this.update(),this.state=me.NONE}update(t=null){const e=this.object.position;Ce.copy(e).sub(this.target),Ce.applyQuaternion(this._quat),this._spherical.setFromVector3(Ce),this.autoRotate&&this.state===me.NONE&&this._rotateLeft(this._getAutoRotationAngle(t)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let i=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(i)&&isFinite(s)&&(i<-Math.PI?i+=je:i>Math.PI&&(i-=je),s<-Math.PI?s+=je:s>Math.PI&&(s-=je),i<=s?this._spherical.theta=Math.max(i,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(i+s)/2?Math.max(i,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const a=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=a!=this._spherical.radius}if(Ce.setFromSpherical(this._spherical),Ce.applyQuaternion(this._quatInverse),e.copy(this.target).add(Ce),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let a=null;if(this.object.isPerspectiveCamera){const o=Ce.length();a=this._clampDistance(o*this._scale);const l=o-a;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),r=!!l}else if(this.object.isOrthographicCamera){const o=new B(this._mouse.x,this._mouse.y,0);o.unproject(this.object);const l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=l!==this.object.zoom;const c=new B(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(o),this.object.updateMatrixWorld(),a=Ce.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;a!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(a).add(this.object.position):(Rr.origin.copy(this.object.position),Rr.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Rr.direction))<x0?this.object.lookAt(this.target):(bl.setFromNormalAndCoplanarPoint(this.object.up,this.target),Rr.intersectPlane(bl,this.target))))}else if(this.object.isOrthographicCamera){const a=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),a!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>Ba||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Ba||this._lastTargetPosition.distanceToSquared(this.target)>Ba?(this.dispatchEvent(El),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(t){return t!==null?je/60*this.autoRotateSpeed*t:je/60/60*this.autoRotateSpeed}_getZoomScale(t){const e=Math.abs(t*.01);return Math.pow(.95,this.zoomSpeed*e)}_rotateLeft(t){this._sphericalDelta.theta-=t}_rotateUp(t){this._sphericalDelta.phi-=t}_panLeft(t,e){Ce.setFromMatrixColumn(e,0),Ce.multiplyScalar(-t),this._panOffset.add(Ce)}_panUp(t,e){this.screenSpacePanning===!0?Ce.setFromMatrixColumn(e,1):(Ce.setFromMatrixColumn(e,0),Ce.crossVectors(this.object.up,Ce)),Ce.multiplyScalar(t),this._panOffset.add(Ce)}_pan(t,e){const i=this.domElement;if(this.object.isPerspectiveCamera){const s=this.object.position;Ce.copy(s).sub(this.target);let r=Ce.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*t*r/i.clientHeight,this.object.matrix),this._panUp(2*e*r/i.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(t*(this.object.right-this.object.left)/this.object.zoom/i.clientWidth,this.object.matrix),this._panUp(e*(this.object.top-this.object.bottom)/this.object.zoom/i.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(t,e){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const i=this.domElement.getBoundingClientRect(),s=t-i.left,r=e-i.top,a=i.width,o=i.height;this._mouse.x=s/a*2-1,this._mouse.y=-(r/o)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(t){return Math.max(this.minDistance,Math.min(this.maxDistance,t))}_handleMouseDownRotate(t){this._rotateStart.set(t.clientX,t.clientY)}_handleMouseDownDolly(t){this._updateZoomParameters(t.clientX,t.clientX),this._dollyStart.set(t.clientX,t.clientY)}_handleMouseDownPan(t){this._panStart.set(t.clientX,t.clientY)}_handleMouseMoveRotate(t){this._rotateEnd.set(t.clientX,t.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const e=this.domElement;this._rotateLeft(je*this._rotateDelta.x/e.clientHeight),this._rotateUp(je*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(t){this._dollyEnd.set(t.clientX,t.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(t){this._panEnd.set(t.clientX,t.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(t){this._updateZoomParameters(t.clientX,t.clientY),t.deltaY<0?this._dollyIn(this._getZoomScale(t.deltaY)):t.deltaY>0&&this._dollyOut(this._getZoomScale(t.deltaY)),this.update()}_handleKeyDown(t){let e=!1;switch(t.code){case this.keys.UP:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(je*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),e=!0;break;case this.keys.BOTTOM:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(-je*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),e=!0;break;case this.keys.LEFT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(je*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),e=!0;break;case this.keys.RIGHT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(-je*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),e=!0;break}e&&(t.preventDefault(),this.update())}_handleTouchStartRotate(t){if(this._pointers.length===1)this._rotateStart.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),i=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._rotateStart.set(i,s)}}_handleTouchStartPan(t){if(this._pointers.length===1)this._panStart.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),i=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panStart.set(i,s)}}_handleTouchStartDolly(t){const e=this._getSecondPointerPosition(t),i=t.pageX-e.x,s=t.pageY-e.y,r=Math.sqrt(i*i+s*s);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enablePan&&this._handleTouchStartPan(t)}_handleTouchStartDollyRotate(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enableRotate&&this._handleTouchStartRotate(t)}_handleTouchMoveRotate(t){if(this._pointers.length==1)this._rotateEnd.set(t.pageX,t.pageY);else{const i=this._getSecondPointerPosition(t),s=.5*(t.pageX+i.x),r=.5*(t.pageY+i.y);this._rotateEnd.set(s,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const e=this.domElement;this._rotateLeft(je*this._rotateDelta.x/e.clientHeight),this._rotateUp(je*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(t){if(this._pointers.length===1)this._panEnd.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),i=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panEnd.set(i,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(t){const e=this._getSecondPointerPosition(t),i=t.pageX-e.x,s=t.pageY-e.y,r=Math.sqrt(i*i+s*s);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const a=(t.pageX+e.x)*.5,o=(t.pageY+e.y)*.5;this._updateZoomParameters(a,o)}_handleTouchMoveDollyPan(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enablePan&&this._handleTouchMovePan(t)}_handleTouchMoveDollyRotate(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enableRotate&&this._handleTouchMoveRotate(t)}_addPointer(t){this._pointers.push(t.pointerId)}_removePointer(t){delete this._pointerPositions[t.pointerId];for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId){this._pointers.splice(e,1);return}}_isTrackingPointer(t){for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId)return!0;return!1}_trackPointer(t){let e=this._pointerPositions[t.pointerId];e===void 0&&(e=new Xt,this._pointerPositions[t.pointerId]=e),e.set(t.pageX,t.pageY)}_getSecondPointerPosition(t){const e=t.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[e]}_customWheelEvent(t){const e=t.deltaMode,i={clientX:t.clientX,clientY:t.clientY,deltaY:t.deltaY};switch(e){case 1:i.deltaY*=16;break;case 2:i.deltaY*=100;break}return t.ctrlKey&&!this._controlActive&&(i.deltaY*=10),i}}function v0(n){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(n.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(n)&&(this._addPointer(n),n.pointerType==="touch"?this._onTouchStart(n):this._onMouseDown(n)))}function y0(n){this.enabled!==!1&&(n.pointerType==="touch"?this._onTouchMove(n):this._onMouseMove(n))}function S0(n){switch(this._removePointer(n),this._pointers.length){case 0:this.domElement.releasePointerCapture(n.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(gh),this.state=me.NONE;break;case 1:const t=this._pointers[0],e=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:e.x,pageY:e.y});break}}function E0(n){let t;switch(n.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case as.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(n),this.state=me.DOLLY;break;case as.ROTATE:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=me.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=me.ROTATE}break;case as.PAN:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=me.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=me.PAN}break;default:this.state=me.NONE}this.state!==me.NONE&&this.dispatchEvent(oc)}function b0(n){switch(this.state){case me.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(n);break;case me.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(n);break;case me.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(n);break}}function T0(n){this.enabled===!1||this.enableZoom===!1||this.state!==me.NONE||(n.preventDefault(),this.dispatchEvent(oc),this._handleMouseWheel(this._customWheelEvent(n)),this.dispatchEvent(gh))}function A0(n){this.enabled!==!1&&this._handleKeyDown(n)}function w0(n){switch(this._trackPointer(n),this._pointers.length){case 1:switch(this.touches.ONE){case is.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(n),this.state=me.TOUCH_ROTATE;break;case is.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(n),this.state=me.TOUCH_PAN;break;default:this.state=me.NONE}break;case 2:switch(this.touches.TWO){case is.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(n),this.state=me.TOUCH_DOLLY_PAN;break;case is.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(n),this.state=me.TOUCH_DOLLY_ROTATE;break;default:this.state=me.NONE}break;default:this.state=me.NONE}this.state!==me.NONE&&this.dispatchEvent(oc)}function R0(n){switch(this._trackPointer(n),this.state){case me.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(n),this.update();break;case me.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(n),this.update();break;case me.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(n),this.update();break;case me.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(n),this.update();break;default:this.state=me.NONE}}function C0(n){this.enabled!==!1&&n.preventDefault()}function P0(n){n.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function D0(n){n.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}const L0=2100,_s=(n,t,e)=>Math.max(t,Math.min(e,n)),Tl=(n,t,e)=>{const i=_s((n-t)/(e-t),0,1);return i*i*(3-2*i)};function mn(n,t){const e=t?.presentAgeYears||138e8,i=t?.cosmicMilestones||{},s=i.recombinationYears||38e4,r=Math.max(s*1.1,i.firstStarsYears||18e7),a=Math.max(r*1.1,i.matureGalaxiesYears||1e9),o=Math.max(a*1.1,e),l=Math.max(.001/31557600,Number(n)||0),c=(x,v,h)=>_s((Math.log10(x)-Math.log10(v))/(Math.log10(h)-Math.log10(v)),0,1);if(l<180/31557600){const x=l*31557600;return x<1?c(x,.001,1)*18:18+c(x,1,180)*37}if(l<s)return 55+c(l,180/31557600,s)*90;if(l<r)return 145+c(l,s,r)*100;if(l<a)return 245+c(l,r,a)*95;if(l<o)return 340+c(l,a,o)*130;const u=Math.log10(l),d=Math.log10(o),p=t?.cosmicFate;if(p&&Number.isFinite(p.outcomeYears)){if(n>=p.outcomeYears)return 1e3;const x=(u-d)/(p.outcomeExponent-d);return _s(470+x*530,470,1e3)}if(u<12)return 470+(u-d)/(12-d)*100;if(u<14)return 570+(u-12)/2*80;if(u<15)return 650+(u-14)*30;if(u<38)return 680+(u-15)/23*165;const g=t?.blackHoleEvaporationExponent||100;return u<g?845+(u-38)/(g-38)*105:950}function cc(n,t){const e=_s(n,470,950),i=Math.log10(t?.presentAgeYears||138e8);let s;if(e<570)s=i+(12-i)*(e-470)/100;else if(e<650)s=12+(e-570)/80*2;else if(e<680)s=14+(e-650)/30;else if(e<845)s=15+(e-680)/165*23;else{const r=t?.blackHoleEvaporationExponent||100;s=38+(e-845)/105*(r-38)}return 10**s}function I0(n,t,e){const i=_s(Number(n),0,1e3),s=_h(i,t),r=e.findIndex(o=>i<o.until),a=r<0?e.length-1:r;return{position:i,label:s,eraIndex:a,era:e[a],galaxyIdentityOpacity:Tl(i,245,325)*(1-Tl(i,820,900))}}function U0(n){const e=1139.904761904762/L0;return n<145||n>=930?e*.42:e*1.25}function F0({position:n,label:t,universe:e,activeEvent:i,activeRelationship:s,ascendedSpecies:r,activeSpecies:a,civilizationData:o}){const l=e?.cosmicFate;if(l&&l.type!=="heat-death"&&n>=l.onsetAt){if(l.type==="vacuum-decay"){const p=n>=995;return{key:`fate-vacuum-${p?"terminal":"bubble"}`,time:t,text:p?"低能真空泡已经穿过可观测区域，原有粒子与相互作用不再适用":"量子隧穿产生了低能真空泡，泡壁以接近光速向外扩张"}}if(l.type==="big-rip"){const p=n>=995;return{key:`fate-rip-${p?"terminal":"unbinding"}`,time:t,text:p?"膨胀率在有限时间内发散，局部束缚结构相继失效":"幽灵暗能量密度持续上升，星系团与星系开始逐层解束缚"}}const d=n>=995;return{key:`fate-crunch-${d?"terminal":"turnaround"}`,time:t,text:d?"坍缩使物质与辐射密度急剧升高，经典演化在高曲率阶段失效":"宇宙膨胀已经停止，大尺度距离开始反向缩小"}}if(i){const d=n>=i.impactAt,p=d?`；${i.outcome}`:"";return{key:`${i.id}-${d?"aftermath":"forming"}`,time:t,text:`${i.label}：${i.message}${p}`}}if(s){const d=o[s.speciesA],p=o[s.speciesB],g=s.relationship==="conflict"?`${d.name} 与 ${p.name} 的边界冲突正在削减双方疆域`:`${d.name} 与 ${p.name} 建立友好共存区，共享资源与航路`;return{key:`relation-${s.relationship}-${s.speciesA}-${s.speciesB}`,time:t,text:g}}if(r>0)return{key:`ascended-${r}`,time:t,text:`${r} 个种群已转化为高维生命，脱离恒星与黑洞的普通物质演化`};if(n<55)return{key:"bang",time:"T+0",text:"整个可观测区域处于超高温、高密度状态，空间本身在膨胀"};if(n<145)return{key:"plasma",time:t,text:"光子在等离子体中不断散射，宇宙随膨胀持续冷却"};if(n<245)return{key:"dark",time:t,text:"复合后宇宙变得透明，但尚没有恒星光"};if(n<340)return{key:"stars",time:t,text:"第一代恒星与星系点亮，再电离逐渐开始"};if(a>0)return{key:`life-${a}`,time:t,text:`${a} 个主要文明种群正在跨越恒星系扩张`};if(n<430)return{key:"chemistry",time:t,text:"重元素丰度上升，宜居行星开始形成"};if(n<Math.min(...o.map(d=>d.birth),620))return{key:"waiting-life",time:t,text:"宜居世界正在积累复杂化学反应，智慧生命尚未出现"};const c=mn(10**e.stellarFormationEndExponent,e),u=mn(10**e.lastStarDeathExponent,e);return n<c?{key:"silence",time:t,text:"文明信号已经沉寂，恒星形成率仍在持续下降"}:n<u?{key:"last-stars",time:t,text:"恒星形成已经停止，最后的低质量红矮星仍在极缓慢地消耗燃料"}:n<845?{key:"evaporation",time:t,text:"长期引力近遇持续重分配能量，少数残骸逐个逃离，极少数落向星系中心"}:n<950?{key:"holes",time:t,text:"黑洞通过霍金辐射缓慢蒸发"}:{key:"heatdeath",time:t,text:"最后的黑洞已经蒸发，残余光子持续红移并稀释，可用能量梯度趋近于零"}}function _h(n,t){const e=(u,d,p)=>10**(Math.log10(u)+(Math.log10(d)-Math.log10(u))*p),i=u=>{if(u<1){const d=u*31557600;return d<3600?`${Math.round(d/60)} 分钟`:d<86400?`${(d/3600).toFixed(1)} 小时`:`${(d/86400).toFixed(1)} 天`}return u<1e4?`${Math.max(1,Math.round(u))} 年`:u<1e8?`${(u/1e4).toFixed(u<1e6?1:0)} 万年`:u<1e12?`${(u/1e8).toFixed(u<1e9?2:1)} 亿年`:`10^${Math.log10(u).toFixed(1)} 年`};if(n<18)return`T+${Math.max(.001,e(.001,1,n/18)).toFixed(3)} 秒`;if(n<55)return`T+${Math.max(1,Math.round(e(1,180,(n-18)/37)))} 秒`;const s=t?.cosmicMilestones||{},r=s.recombinationYears||38e4,a=Math.max(r*1.1,s.firstStarsYears||18e7),o=Math.max(a*1.1,s.matureGalaxiesYears||1e9),l=Math.max(o*1.1,t?.presentAgeYears||138e8);if(n<145)return`T+${i(e(180/31557600,r,(n-55)/90))}`;if(n<245)return`T+${i(e(r,a,(n-145)/100))}`;if(n<340)return`T+${i(e(a,o,(n-245)/95))}`;if(n<470)return`T+${i(e(o,l,(n-340)/130))}`;const c=t?.cosmicFate;if(c&&Number.isFinite(c.outcomeYears)){if(n>=1e3)return c.label;const u=_s((n-470)/530,0,1),d=e(l,c.outcomeYears,u);return`T+${i(d)}`}return n<570?`T+${i(e(l,1e12,(n-470)/100))}`:n<650?`T+10^${(12+(n-570)/80*2).toFixed(1)} 年`:n<680?`T+10^${(14+(n-650)/30).toFixed(1)} 年`:n<845?`T+10^${Math.round(15+(n-680)/165*23)} 年`:n<950?`T+10^${Math.round(38+(n-845)/105*(t.blackHoleEvaporationExponent-38))} 年`:n<999?`T+10^${t.blackHoleEvaporationExponent} 年以后`:"趋近热寂"}const Al=["一次偶然涨落，一组全新的自然法则。","这里的星光，以陌生的速度穿过真空。","引力写下结构，时间负责把它读完。","一个从未存在过，也不会再次出现的宇宙。","尘埃正在聚集，第一颗恒星即将点亮。"],wl=["赫利俄斯","弥涅耳瓦","伊奥","俄耳甫斯","忒弥斯","厄里倪厄斯","欧律狄刻","阿斯忒里亚"],No=["棒旋星系","絮状螺旋星系","环状星系","椭圆星系","不规则星系"],Rl=["赛里安共同体","洛珂蜂群","弧光联盟","静默者","澄海文明","铸星者","织光议会","塔乌林协约","奈落合众体","远潮群落","镜海联邦","巡星庭","赤纬公社","无昼同盟","尘环智群"],Cl=[14221151,16743275,6928639,15174911,16762460,6481615,16747975,10920191,15899989,7595116,6215935,16770683,12815615,16737894,9484543],za=[{until:55,name:"炽热大爆炸",description:"整个可观测区域同时处于高温、高密度状态；这不是物质从某个中心炸开。"},{until:145,name:"等离子体时代",description:"宇宙膨胀并冷却，原初核合成后，光子仍被自由电子频繁散射。"},{until:245,name:"宇宙黑暗时代",description:"38 万年后宇宙变得透明，但第一代恒星尚未点亮。"},{until:340,name:"宇宙黎明",description:"约 1～2 亿年后，第一代恒星与星系开始形成并推动再电离。"},{until:650,name:"恒星时代",description:"恒星、星系与重元素持续演化；生命与文明属于未证实的模型层。"},{until:845,name:"简并时代 · 假说",description:"若质子衰变等标准长期假说成立，恒星残骸绕核运行，并在近遇中逐个逃离或落入黑洞。"},{until:950,name:"黑洞时代 · 假说",description:"若霍金辐射的标准推断适用，孤立黑洞在极漫长时间中逐个蒸发。"},{until:1001,name:"暗时代 · 渐近",description:"宇宙继续膨胀，辐射红移与稀释，可用能量梯度趋近于零，而非发生一次全局终结。"}];function N0(n){const t=n?.cosmicFate,e=mn(10**n.lastStarDeathExponent,n),i={until:Math.min(e,t?.type==="heat-death"?e:t?.onsetAt??e),name:"恒星时代",description:"恒星、星系与重元素持续演化；生命与文明属于未证实的模型层。"};if(!t||t.type==="heat-death")return[...za.slice(0,4),i,...za.slice(5)];const s=[...za.slice(0,4),i],r=t.onsetAt>e?[{until:t.onsetAt,name:"简并时代 · 假说",description:"恒星已经熄灭，白矮星、中子星与黑洞继续经历长期引力演化。"}]:[];return t.type==="big-rip"?[...s,...r,{until:1001,name:"大撕裂 · 条件结局",description:"在 w < -1 持续成立的假设下，局部引力与微观束缚将被逐层克服。"}]:t.type==="big-crunch"?[...s,...r,{until:1001,name:"大坍缩 · 条件结局",description:"尺度因子反向演化，物质与辐射密度在有限时间内快速上升。"}]:[...s,...r,{until:1001,name:"真空衰变 · 条件结局",description:"随机量子隧穿产生低能真空泡，泡壁以近光速改写局部基态。"}]}function ae(n){const t=Math.max(n(),1e-7),e=n();return Math.sqrt(-2*Math.log(t))*Math.cos(2*Math.PI*e)}function et(n,t,e){return t+n()*(e-t)}const Pl="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ",O0=4,ka=16;function xh(n){let t=1779033703,e=3144134277,i=1013904242,s=2773480762;for(let r=0;r<n.length;r++){const a=n.charCodeAt(r);t=e^Math.imul(t^a,597399067),e=i^Math.imul(e^a,2869860233),i=s^Math.imul(i^a,951274213),s=t^Math.imul(s^a,2716044179)}return t=Math.imul(i^t>>>18,597399067),e=Math.imul(s^e>>>22,2869860233),i=Math.imul(t^i>>>17,951274213),s=Math.imul(e^s>>>19,2716044179),t^=e^i^s,e^=t,i^=t,s^=t,[t>>>0,e>>>0,i>>>0,s>>>0]}function ea(n){const t=String(n).trim().toUpperCase();if(!/^(?:[A-Z0-9]{16}|[A-Z0-9]{4}(?:-[A-Z0-9]{4}){3})$/.test(t))throw new TypeError("Universe seed must contain exactly 16 letters or digits.");return t.replaceAll("-","").match(new RegExp(`.{${O0}}`,"g")).join("-")}function B0(){const n=globalThis.crypto;if(!n?.getRandomValues)throw new Error("Secure random number generation is unavailable.");let t="";do for(t="";t.length<ka;){const e=n.getRandomValues(new Uint8Array(ka));for(const i of e)if(!(i>=252)&&(t+=Pl[i%Pl.length],t.length===ka))break}while(!/[A-Z]/.test(t)||!/[0-9]/.test(t));return ea(t)}function z0(n){return xh(ea(n))[0]}function pn(n,t=0){let[e,i,s,r]=xh(`${ea(n)}:${t}`);return function(){const o=((e+i|0)+r|0)>>>0;return r=r+1|0,e=i^i>>>9,i=s+(s<<3)|0,s=s<<21|s>>>11,s=s+o|0,o/4294967296}}const Oo=145e8,cs=.012,Mh=(n,t,e)=>Math.min(e,Math.max(t,n));function k0(n,t,e){const i=Math.log10(t),s=Math.log10(e);return 470+(Math.log10(Mh(n,t,e))-i)/(s-i)*530}const H0={lambda:{label:"宇宙学常数",description:"暗能量密度保持不变，加速膨胀持续"},quintessence:{label:"演化标量场",description:"暗能量状态方程随尺度因子缓慢演化"},phantom:{label:"幽灵暗能量",description:"有效状态方程低于 -1，暗能量密度随膨胀增长"},recollapsing:{label:"反转势能",description:"标量场势能在远未来跨过零点，膨胀最终停止"}},G0={"heat-death":{label:"渐近热寂",shortLabel:"热寂",description:"膨胀持续，可用能量梯度逐渐消失"},"big-rip":{label:"大撕裂",shortLabel:"大撕裂",description:"加速膨胀最终克服星系、恒星系与局部束缚"},"big-crunch":{label:"大坍缩",shortLabel:"大坍缩",description:"膨胀反转后，尺度因子在有限时间内回落"},"vacuum-decay":{label:"真空衰变",shortLabel:"真空衰变",description:"低能真空泡成核，泡壁以近光速扩张"}};function vh(n,t,e){const i=n*n+(1-n)**2;return t+e*(1-n)/i}function V0({scaleFactor:n,darkEnergyEvolution:t,rateSquared:e,ageYears:i,w0:s,wa:r,expansionRate:a,darkEnergyDensity:o,omegaMatter:l,turnScale:c,history:u}){let d=n,p=t,g=e,x=i;for(let v=1;v<=3200;v++){const h=d*Math.exp(-cs),f=Math.sqrt(d*h),m=vh(f,s,r),_=p*Math.exp(3*(1+m)*cs),M=.22*o*Math.pow(h/c,2.35),T=l/Math.pow(h,3)+o*_-M,S=Math.sqrt(Math.max(1e-18,(g+T)*.5));if(x+=Oo/a*cs/S,d=h,p=_,g=T,v%80===0&&u.push({ageYears:x,scaleFactor:d,expansionRatio:-Math.sqrt(Math.max(0,g)),w:m,phase:"contraction"}),d<1e-8)break}return x}function W0({model:n,w0:t,wa:e,expansionRate:i,darkEnergyDensity:s,turnScale:r,presentAgeYears:a}){const o=Math.max(.06,1-s);let l=1,c=1,u=a,d=1;const p=[{ageYears:u,scaleFactor:l,expansionRatio:1,w:t,phase:"expansion"}];for(let x=1;x<=2400;x++){const v=l,h=l*Math.exp(cs),f=Math.sqrt(l*h),m=vh(f,t,e),_=c*Math.exp(-3*(1+m)*cs),M=n==="recollapsing"?.22*s*Math.pow(h/r,2.35):0,T=o/Math.pow(h,3)+s*_-M;if(T<=0){const w=u,D=V0({scaleFactor:v,darkEnergyEvolution:c,rateSquared:d,ageYears:u,w0:t,wa:e,expansionRate:i,darkEnergyDensity:s,omegaMatter:o,turnScale:r,history:p});return{history:p,turnaroundYears:w,crunchYears:D,finalRateSquared:T}}const S=Math.sqrt((d+T)*.5);u+=Oo/i*cs/Math.max(S,1e-12),l=h,c=_,d=T,x%80===0&&p.push({ageYears:u,scaleFactor:l,expansionRatio:Math.sqrt(T),w:m,phase:"expansion"})}let g=u;if(n==="phantom"){const x=Oo/i*2/(3*Math.abs(1+t))/Math.sqrt(s*c);g+=x}return{history:p,asymptoticYears:g,finalRateSquared:d}}function X0(n){const t=n();return t<.34?{model:"lambda",w0:-1,wa:0,turnScale:1/0}:t<.62?{model:"quintessence",w0:et(n,-.96,-.76),wa:et(n,-.1,.1),turnScale:1/0}:t<.82?{model:"phantom",w0:et(n,-1.22,-1.035),wa:et(n,.015,.14),turnScale:1/0}:{model:"recollapsing",w0:et(n,-.98,-.78),wa:et(n,-.08,.08),turnScale:et(n,3.2,11)}}function Y0(n,t){const e=pn(n,6029),i=X0(e),s=W0({...i,expansionRate:t.expansionRate,darkEnergyDensity:t.darkEnergyDensity,presentAgeYears:t.presentAgeYears});let r="heat-death",a=1/0;i.model==="phantom"?(r="big-rip",a=Math.max(t.presentAgeYears*1.05,s.asymptoticYears)):i.model==="recollapsing"&&(r="big-crunch",a=s.crunchYears);const o=e()<.16,l=o?et(e,10.55,92):1/0,c=10**Math.min(l,300),u=o&&c<a,d=u?"vacuum-decay":r,p=u?c:a,g=H0[i.model],x=G0[d];let v=1/0;if(d==="big-crunch")v=s.turnaroundYears||p;else if(d==="big-rip"){const f=Math.log10(t.presentAgeYears),m=Math.log10(p);v=10**(f+(m-f)*.9)}else if(d==="vacuum-decay"){const f=Math.log10(t.presentAgeYears),m=Math.log10(p);v=10**(f+(m-f)*.97)}const h=Number.isFinite(v)?Mh(k0(v,t.presentAgeYears,p),480,997):930;return{...i,modelLabel:g.label,modelDescription:g.description,expansionHistory:s.history,turnaroundYears:s.turnaroundYears||null,metastableVacuum:o,vacuumDecayExponent:l,type:d,label:x.label,shortLabel:x.shortLabel,description:x.description,outcomeYears:p,outcomeExponent:Number.isFinite(p)?Math.log10(p):1/0,onsetYears:v,onsetAt:h}}function q0(n){return Number.isFinite(n.outcomeYears)?n.outcomeYears<1e12?`T+${(n.outcomeYears/1e8).toFixed(0)} 亿年`:`T+10^${n.outcomeExponent.toFixed(1)} 年`:"渐近 · 无有限终点"}function $0(n){return n.metastableVacuum?`亚稳态 · 假设寿命 10^${n.vacuumDecayExponent.toFixed(1)} 年`:"未设定可见衰变"}const j0=138e8,K0=2.725,zr=.315;function Z0(n,t){const e=Math.max(.06,1-t),i=Math.max(1e-6,t),s=2/(3*Math.sqrt(i))*Math.asinh(Math.sqrt(i/e)),r=2/(3*Math.sqrt(1-zr))*Math.asinh(Math.sqrt((1-zr)/zr));return j0*s/r/n}function J0({speed:n,fineStructure:t,massRatio:e,expansionRate:i,darkEnergyDensity:s,primordialFluctuation:r,cmbTemperature:a,structureEfficiency:o}){const l=Math.max(.06,1-s),c=t**2*n**2/e,u=rt.clamp(38e4*Math.pow(a/K0/c,1.5)/i*Math.sqrt(zr/l),4e4,4e6),d=rt.clamp(18e7/Math.pow(o,.7)/Math.pow(r,.35)/Math.sqrt(i),3e7,9e8),p=rt.clamp(d*5.4,d*1.8,32e8);return{atomicBindingScale:c,recombinationYears:u,firstStarsYears:d,matureGalaxiesYears:p,presentAgeYears:Z0(i,s)}}function Q0(n){const t=Math.round(n*360);return`${t<190?"青白":t<225?"蓝白":t<250?"靛蓝":"紫白"} · ${t}°`}function t_(n,t){return n===2?"主环 + 碎环":n===3?"无旋臂":n===4?"不规则":`${t} 条`}function e_(n){const t=n*100;return t<1e-4?"< 0.0001%":t<.01?`${t.toFixed(4)}%`:t<1?`${t.toFixed(2)}%`:`${t.toFixed(1)}%`}function n_(n){return n===0?"尚未出现":`${new Intl.NumberFormat("zh-CN").format(n)} 个`}function Ks(n){const t=n.lastStarDeathExponent??n.stellarFormationEndExponent;return rt.clamp(mn(10**t,n),478,1e3)}function i_(n){return rt.clamp(mn(10**n.stellarFormationEndExponent,n),478,1e3)}function s_(n){return n>=1?`${n.toFixed(1)} 万亿颗`:`${Math.round(n*1e4)} 亿颗`}function yh(n=B0()){const t=ea(n),e=z0(t),i=pn(t),s=et(i,.38,1.84),r=et(i,.52,1.76),a=et(i,.72,1.28),o=et(i,.82,1.18),l=et(i,.65,1.45),c=et(i,.48,.82),u=et(i,.55,1.75),d=et(i,1.9,4.4),p=Math.exp(-Math.pow((a-1)/.17,2)-Math.pow((o-1)/.14,2)),g=rt.clamp(r*u/Math.pow(l,.72),.12,2.8),x=Math.max(2,Math.round(118*p*et(i,.82,1.08))),v=rt.clamp(et(i,.35,3.2)*g,.08,7.2),h=rt.clamp(12.5-(c-.68)*1.35-(l-1)*.42,11.8,13.25),f=rt.clamp(h+et(i,.68,1.08),12.8,14.25),m=p*rt.clamp(1-Math.abs(d-2.725)/3.5,.12,1),_=Math.pow(i(),4)*.08*m,M=Math.floor(et(i,5,16)),T=Math.floor(v*1e5*_*et(i,.02,.7)),S=Math.max(M,T),w=Math.round(Math.pow(10,f-8)/10)*10,D=Math.floor(et(i,3,7)),E=e%No.length,b=[.96,.92,.72,.99,.34][E],P=i()<b,C=P&&i()<[.1,.07,.05,.045,.025][E],L=Math.floor(et(i,97,103)),F=et(i,.48,.76),U=J0({speed:s,fineStructure:a,massRatio:o,expansionRate:l,darkEnergyDensity:c,primordialFluctuation:u,cmbTemperature:d,structureEfficiency:g}),N=Y0(t,{expansionRate:l,darkEnergyDensity:c,presentAgeYears:U.presentAgeYears});return{seed:t,seedValue:e,speed:s,gravity:r,fineStructure:a,massRatio:o,expansionRate:l,darkEnergyDensity:c,primordialFluctuation:u,cmbTemperature:d,chemistryStability:p,structureEfficiency:g,stellarFormationEndExponent:h,lastStarDeathExponent:f,elements:x,stars:v,lifeProbability:_,civilizations:S,estimatedCivilizations:T,speciesCount:M,trackedSpeciesCount:M,lifetime:w,blackHoleEvaporationExponent:L,armCount:D,galaxyType:E,hasCentralBlackHole:P,activeNucleus:C,hue:F,cosmicMilestones:U,presentAgeYears:U.presentAgeYears,cosmicFate:N}}let Cs=null;function ts(){const n=document.createElement("canvas");n.width=n.height=256;const t=n.getContext("2d"),e=t.createRadialGradient(128,128,82,128,128,128);e.addColorStop(0,"rgba(255,255,255,0)"),e.addColorStop(.72,"rgba(255,255,255,0)"),e.addColorStop(.86,"rgba(255,255,255,.8)"),e.addColorStop(.91,"rgba(255,255,255,.18)"),e.addColorStop(1,"rgba(255,255,255,0)"),t.fillStyle=e,t.fillRect(0,0,256,256);const i=new Zr(n);return i.colorSpace=Ne,i}function Ve(){const n=document.createElement("canvas");n.width=n.height=128;const t=n.getContext("2d"),e=t.createRadialGradient(64,64,0,64,64,64);e.addColorStop(0,"rgba(255,255,255,1)"),e.addColorStop(.08,"rgba(255,230,170,.85)"),e.addColorStop(.35,"rgba(255,190,100,.22)"),e.addColorStop(1,"rgba(0,0,0,0)"),t.fillStyle=e,t.fillRect(0,0,128,128);const i=new Zr(n);return i.colorSpace=Ne,i}function Pe(){if(Cs)return Cs;const n=document.createElement("canvas");n.width=n.height=64;const t=n.getContext("2d"),e=t.createRadialGradient(32,32,0,32,32,32);return e.addColorStop(0,"rgba(255,255,255,1)"),e.addColorStop(.22,"rgba(255,255,255,.95)"),e.addColorStop(.5,"rgba(255,255,255,.35)"),e.addColorStop(1,"rgba(255,255,255,0)"),t.fillStyle=e,t.fillRect(0,0,64,64),Cs=new Zr(n),Cs.colorSpace=Ne,Cs}let Cr=null,Pr=null,Dr=null;function lc(n){const t=document.createElement("canvas");t.width=1024,t.height=1024;const e=t.getContext("2d");n(e,t.width);const i=new Zr(t);return i.colorSpace=Ne,i.minFilter=ni,i.magFilter=En,i}function yn(n,t,e,i,s,r,a=0,o=Math.PI*2){n.beginPath(),n.ellipse(t,e,i,s,r,a,o)}function Dl(){return Cr||(Cr=lc((n,t)=>{const e=t/2,i=n.createLinearGradient(96,e,t-96,e);i.addColorStop(0,"rgba(255,255,255,0)"),i.addColorStop(.12,"rgba(255,221,174,.18)"),i.addColorStop(.35,"rgba(255,245,222,.76)"),i.addColorStop(.5,"rgba(255,255,255,1)"),i.addColorStop(.66,"rgba(255,232,199,.82)"),i.addColorStop(.88,"rgba(255,179,126,.2)"),i.addColorStop(1,"rgba(255,255,255,0)"),n.save(),n.globalCompositeOperation="lighter",n.filter="blur(34px)",n.strokeStyle=i,n.lineCap="round",n.lineWidth=62,yn(n,e,e+7,360,74,-.1),n.stroke(),n.filter="blur(15px)",n.lineWidth=22,yn(n,e,e+4,325,62,-.1),n.stroke(),n.restore(),n.save(),n.globalCompositeOperation="lighter",n.lineCap="round",n.strokeStyle=i,n.filter="blur(13px)",n.lineWidth=34,yn(n,e-2,e+3,118,164,-.08,Math.PI*1.03,Math.PI*1.98),n.stroke(),n.lineWidth=25,yn(n,e+2,e+4,121,161,-.08,.03,Math.PI*.97),n.stroke(),n.filter="none",n.lineWidth=7,n.strokeStyle="rgba(255,250,232,.92)",yn(n,e-2,e+3,116,160,-.08,Math.PI*1.05,Math.PI*1.95),n.stroke(),n.strokeStyle="rgba(255,221,180,.72)",yn(n,e+2,e+4,119,158,-.08,.07,Math.PI*.93),n.stroke(),n.restore(),n.save(),n.globalCompositeOperation="lighter",n.lineCap="round";for(let a=0;a<12;a++){const o=164+a*16,l=28+a*3.25,c=.2-a*.011;n.strokeStyle=`rgba(255,238,210,${c})`,n.lineWidth=a<4?3.5:2,yn(n,e,e+6,o,l,-.1),n.stroke()}n.restore();const s=n.createRadialGradient(e-18,e-20,6,e,e,105);s.addColorStop(0,"rgba(0,0,0,1)"),s.addColorStop(.78,"rgba(0,0,0,1)"),s.addColorStop(.94,"rgba(1,1,2,.995)"),s.addColorStop(1,"rgba(0,0,0,0)"),n.fillStyle=s,n.fillRect(e-112,e-112,224,224),n.save(),n.globalCompositeOperation="lighter",n.filter="blur(12px)",n.strokeStyle="rgba(255,244,220,.86)",n.lineWidth=24,yn(n,e,e,103,106,-.08),n.stroke(),n.filter="none",n.strokeStyle="rgba(255,255,247,.98)",n.lineWidth=6,yn(n,e,e,102,105,-.08),n.stroke();const r=n.createLinearGradient(130,e+58,t-120,e-32);r.addColorStop(0,"rgba(255,184,126,0)"),r.addColorStop(.2,"rgba(255,207,158,.55)"),r.addColorStop(.43,"rgba(255,251,231,.98)"),r.addColorStop(.66,"rgba(255,244,219,.94)"),r.addColorStop(.9,"rgba(255,166,112,.34)"),r.addColorStop(1,"rgba(255,166,112,0)"),n.strokeStyle=r,n.lineCap="round",n.filter="blur(11px)",n.lineWidth=28,n.beginPath(),n.moveTo(132,e+103),n.bezierCurveTo(318,e+83,638,e-54,908,e-90),n.stroke(),n.filter="none",n.lineWidth=9,n.stroke(),n.restore()}),Cr)}function r_(){return Pr||(Pr=lc((n,t)=>{const e=t/2;n.globalCompositeOperation="lighter",n.lineCap="round";for(let i=0;i<18;i++){const s=i/18*Math.PI*2,r=108+i%3*17,a=.11+i%4*.035;n.strokeStyle=`rgba(255,255,245,${.24+i%5*.07})`,n.lineWidth=2+i%3,yn(n,e,e,r,r*.9,-.08,s,s+a),n.stroke()}n.filter="blur(9px)",n.strokeStyle="rgba(255,238,209,.42)",n.lineWidth=10,yn(n,e,e,118,111,-.08,.14,Math.PI*.72),n.stroke()}),Pr)}function a_(){return Dr||(Dr=lc((n,t)=>{const e=t/2,i=n.createRadialGradient(e,e,44,e,e,430);i.addColorStop(0,"rgba(255,250,232,.7)"),i.addColorStop(.18,"rgba(255,226,190,.38)"),i.addColorStop(.42,"rgba(255,180,119,.1)"),i.addColorStop(.72,"rgba(255,139,84,.025)"),i.addColorStop(1,"rgba(255,255,255,0)"),n.fillStyle=i,n.fillRect(0,0,t,t)}),Dr)}function kr({color:n=16762255,tilt:t=0,phase:e=0,visualScale:i=1,intensity:s=1}={}){const r=new Xe,a=new he(new ce({map:a_(),color:n,transparent:!0,opacity:0,depthWrite:!1,blending:Bt}));a.scale.setScalar(2.65*i);const o=new he(new ce({map:Dl(),color:n,transparent:!0,opacity:0,alphaTest:.006,depthWrite:!1,blending:Ai,rotation:t}));o.scale.setScalar(2.2*i);const l=new he(new ce({map:r_(),color:n,transparent:!0,opacity:0,depthWrite:!1,blending:Bt,rotation:t}));l.scale.setScalar(2.2*i);const c=new he(new ce({map:Dl(),color:n,transparent:!0,opacity:0,alphaTest:.006,depthWrite:!1,blending:Bt,rotation:t}));c.scale.setScalar(2.2*i);const u=new fn(new Qr(.235*i,32,20),new $s({color:0,transparent:!0,opacity:0}));return u.renderOrder=2,a.renderOrder=1,o.renderOrder=3,c.renderOrder=4,l.renderOrder=5,r.add(a,u,o,c,l),r.userData.blackHoleVisual={halo:a,horizon:u,accretion:o,bloom:c,flow:l,intensity:0,visibility:1,baseTilt:t,phase:e,visualScale:i},Qn(r,s),r}function Qn(n,t,e=1){const i=n.userData.blackHoleVisual;if(!i)return;const s=rt.clamp(t,0,1.4),r=rt.clamp(e,0,1);i.intensity=s,i.visibility=r,i.horizon.material.opacity=rt.smoothstep(s,0,.24)*r,i.horizon.visible=s*r>.001,i.accretion.material.opacity=Math.min(1,s*.92)*r,i.bloom.material.opacity=Math.min(.34,s*.27)*r,i.flow.material.opacity=Math.min(.82,s*.5)*r,i.halo.material.opacity=Math.min(.7,s*.42)*r}function es(n,t,e=1){const i=n.userData.blackHoleVisual;if(!i||i.intensity<=0)return;const s=t*.001,r=1+Math.sin(s*.72+i.phase)*.035,a=.82+Math.sin(s*1.7+i.phase*1.9)*.18;i.halo.scale.setScalar(2.65*i.visualScale*r),i.halo.material.opacity=Math.min(.7,i.intensity*(.36+a*.09))*i.visibility,i.bloom.material.opacity=Math.min(.36,i.intensity*(.22+a*.07))*i.visibility,i.flow.material.rotation=i.baseTilt+e*Math.sin(s*.44+i.phase)*.055,i.flow.material.opacity=Math.min(.82,i.intensity*(.38+a*.15))*i.visibility}const Ha=245,Ga=340;function Sh(n){if(n<=Ha)return 0;const t=Ga-Ha;if(n<Ga){const e=(n-Ha)/t;return t*(e**3-.5*e**4)}return t*.5+n-Ga}function Eh(n,t){return Sh(n)*t}function o_(n,{civilizationSimulation:t,civilizationData:e,civilizationGroups:i}){if(!n||!t)return;const s=new Uint16Array(e.length);n.owners.forEach((r,a)=>{if(r<0)return;const o=s[r]++;e[r].hostRemnantIndices[o]=t.habitatRemnantIndices[a]}),e.forEach((r,a)=>{r.displayCount=s[a],i[a].geometry.setDrawRange(0,s[a])})}function c_({clickableStars:n,stellarRemnants:t,remnantDynamics:e,cosmicPosition:i,civilizationData:s,civilizationGroups:r}){if(!t)return;const a=t.geometry.attributes.position.array,o=n?.geometry.attributes.position.array,l=d=>{const p=i>=e.birthAt[d];return!o||p?{positions:a,offset:d*3}:{positions:o,offset:e.sourceIndices[d]*3}},c=new B,u=(d,p,g,x,v)=>{const h=d*3,f=Math.min(i,e.escapeAt[d]),m=Eh(f,e.orbitRates[d]),_=Math.cos(m),M=Math.sin(m),T=e.axes[h],S=e.axes[h+1],w=e.axes[h+2],D=T*p+S*g+w*x;v.set(p*_+(S*x-w*g)*M+T*D*(1-_),g*_+(w*p-T*x)*M+S*D*(1-_),x*_+(T*g-S*p)*M+w*D*(1-_))};s.forEach((d,p)=>{const g=r[p];if(!g)return;const x=g.geometry.attributes.position.array;for(let h=0;h<d.displayCount;h++){const f=d.hostRemnantIndices[h],m=l(f),_=h*3;if(u(f,d.hostOffsets[_],d.hostOffsets[_+1],d.hostOffsets[_+2],c),x[_]=m.positions[m.offset]+c.x,x[_+1]=m.positions[m.offset+1]+c.y,x[_+2]=m.positions[m.offset+2]+c.z,d.highDimensional&&i>=d.ascensionAt){const M=rt.smoothstep(i,d.ascensionAt,d.ascensionAt+34),T=h*1.618+i*.035;x[_]+=Math.sin(T)*M*.7,x[_+1]+=Math.cos(T*.73)*M*.42,x[_+2]+=Math.sin(T*.51+2.1)*M*.7}}g.geometry.attributes.position.needsUpdate=!0;const v=l(d.homeRemnantIndex);if(u(d.homeRemnantIndex,d.homeOffset.x,d.homeOffset.y,d.homeOffset.z,c),d.home.set(v.positions[v.offset]+c.x,v.positions[v.offset+1]+c.y,v.positions[v.offset+2]+c.z),d.highDimensional&&i>=d.ascensionAt){const h=rt.smoothstep(i,d.ascensionAt,d.ascensionAt+34),f=p*2.17+i*.035;d.home.x+=Math.sin(f)*h*.7,d.home.y+=Math.cos(f*.73)*h*.42,d.home.z+=Math.sin(f*.51+2.1)*h*.7}})}const bh=Math.PI*2,l_=24;function h_(n,t,e){return Math.min(e,Math.max(t,n))}function Ds(n,t,e){if(e<=t)return n>=e?1:0;const i=h_((n-t)/(e-t),0,1);return i*i*(3-2*i)}function Th(n,t){const e=t.persistUntil??t.start+t.duration,i=t.persistenceFadeDuration??l_;return 1-Ds(n,e,e+i)}function Ti(n,t){let e=n+1^t;return e=Math.imul(e^e>>>16,569420461),e=Math.imul(e^e>>>15,1935289751),((e^e>>>15)>>>0)/4294967296}function u_(n,t,e,i,s,r,a,o,l){const c=Math.cos(l),u=Math.sin(l),d=r*e+a*i+o*s;n[t]=e*c+(a*s-o*i)*u+r*d*(1-c),n[t+1]=i*c+(o*e-r*s)*u+a*d*(1-c),n[t+2]=s*c+(r*i-a*e)*u+o*d*(1-c)}function d_(n,t){const e=n.length/3,i=new Float32Array(n.length),s=new Float32Array(e),r=t.galaxyType<=2,a=t.hasCentralBlackHole?1.35:.16,o=t.seedValue^1831565813,l=1;for(let c=0;c<e;c++){const u=c*3,d=n[u],p=n[u+1],g=n[u+2],x=Math.max(.24,Math.hypot(d,p,g));if(r){let m=(Ti(c,o+29)-.5)*.035;const _=1;let M=(Ti(c,o+47)-.5)*.035;const T=Math.hypot(m,_,M);m/=T,M/=T,i.set([m,_/T,M],u)}else{const m=Ti(c,o+71)*bh,_=.08+Ti(c,o+97)*.54,M=Math.sin(_);i.set([Math.cos(m)*M,Math.cos(_),Math.sin(m)*M],u)}const v=a/Math.pow(x+.12,3),h=.72/Math.pow(x+1.8,2),f=.055*Math.sqrt(t.gravity*(v+h));s[c]=l*Math.min(.095,f)}return{axes:i,orbitRates:s,centralMass:a}}function f_(n,t,e,i){const s=Sh(n);for(let r=0;r<i.orbitRates.length;r++){const a=r*3;u_(e,a,t[a],t[a+1],t[a+2],i.axes[a],i.axes[a+1],i.axes[a+2],s*i.orbitRates[r])}}function p_(n,t,{seedValue:e,eventIndex:i,influenceRadius:s=4.8,maxStars:r=2600}){const a=[];for(let h=0;h<n.length/3;h++){const f=h*3,m=Math.hypot(n[f]-t.x,n[f+1]-t.y,n[f+2]-t.z);m<=s&&a.push({index:h,distance:m})}a.sort((h,f)=>h.distance-f.distance);const o=Math.min(r,a.length),l=new Uint16Array(o),c=new Float32Array(o),u=a.length/Math.max(1,o),d=e^Math.imul(i+1,73244475);for(let h=0;h<o;h++){const f=Ti(h,d)*Math.min(1,u),m=h===0?0:Math.min(a.length-1,Math.floor(h*u+f));l[h]=a[m].index,c[h]=a[m].distance}const p=Ti(i,d+131)*bh,g=(Ti(i,d+173)-.5)*.5,x=Math.cos(g),v=new Float32Array([Math.cos(p)*Math.sin(g),x,Math.sin(p)*Math.sin(g)]);return{indices:l,restDistances:c,axis:v,influenceRadius:s,softening:.24,captureRadius:.42}}function m_(n,t,e,i,s){const r=i.gravityField;if(!r||n<i.start)return;const o=Math.min(n,i.persistUntil)-i.start,l=Ds(n,i.start,i.start+4.5),c=Ds(n,i.impactAt-1.2,i.impactAt+2.4),u=Th(n,i),d=1-i.radiatedMassFraction*c,p=r.axis[0],g=r.axis[1],x=r.axis[2];for(let v=0;v<r.indices.length;v++){const f=r.indices[v]*3,m=t[f]-s.x,_=t[f+1]-s.y,M=t[f+2]-s.z,T=Math.max(.025,Math.hypot(m,_,M)),S=r.restDistances[v],w=1-Ds(S,r.influenceRadius*.34,r.influenceRadius);if(w<=0)continue;const D=Math.sqrt(T*T+r.softening*r.softening),E=.105*Math.sqrt(d/Math.pow(D,3)),b=1+(1-c)*.22*Math.sin(o*.72+S*2.3),P=o*E*b*l*w,C=Math.cos(P),L=Math.sin(P),F=p*m+g*_+x*M;let U=m*C+(g*M-x*_)*L+p*F*(1-C),N=_*C+(x*m-p*M)*L+g*F*(1-C),G=M*C+(p*_-g*m)*L+x*F*(1-C);const z=Math.min(.14,.055/(S+.24)),Z=1+Math.sin(P*.63+S*3.1)*z*l*w;if(U*=Z,N*=Z,G*=Z,S<r.captureRadius){const $=S/r.captureRadius*11,nt=Ds(n,i.impactAt+$,i.impactAt+$+13),k=1-nt*.965;U*=k,N*=k,G*=k;const q=1-nt;e[f]*=q,e[f+1]*=q,e[f+2]*=q}t[f]=s.x+m+(U-m)*u,t[f+1]=s.y+_+(N-_)*u,t[f+2]=s.z+M+(G-M)*u}}const Bo=Math.PI*2,Gt=(n,t,e)=>Math.min(e,Math.max(t,n)),Ah=(n,t,e)=>{if(e<=t)return n>=e?1:0;const i=Gt((n-t)/(e-t),0,1);return i*i*(3-2*i)},Se=(n,t,e)=>10**et(n,t,e);function g_({massA:n,massB:t,alignedSpinA:e,alignedSpinB:i,inPlaneSpinA:s=0,inPlaneSpinB:r=0}){const a=Math.max(n,t),l=Math.min(n,t)/a,c=l/(1+l)**2,u=12e3*c**2*Math.sqrt(Math.max(0,1-4*c))*(1-.93*c),d=6900*c**2/(1+l)*(i-l*e),p=6e4*c**2/(1+l)*(r-l*s),g=145*Math.PI/180,x=u**2+d**2+2*u*d*Math.cos(g);return Math.sqrt(Math.max(0,x)+p**2)}function Va(n,t,e,i){return t<=1?[e]:Array.from({length:t},(s,r)=>{const a=e+(i-e)*r/(t-1),o=r===0?0:et(n,-.025,.025);return Gt(a+o,e,i)})}function __(n,t,e){const i=pn(t.seed,12011+e*977),s=Math.sqrt(t.gravity);if(n.type==="pair-instability-supernova"){const r=et(i,140,255),a=et(i,64,Math.min(133,r*.54)),o=Gt(4+Math.pow((a-64)/69,1.7)*72,4,76),l=Gt(.04+Math.pow((a-64)/69,2.2)*38,.04,38),c=o*1e51/1788e51;return{model:"pair-instability",progenitorMass:r,heliumCoreMass:a,explosionEnergyBethe:o,nickelMass:l,radiatedMass:c,ejectaMass:r-c,ejectaVelocityKms:et(i,7e3,14500)*Math.pow(o/20,.18),noRemnant:!0,rangeScale:Gt(.82+Math.sqrt(o/20)*.3,.9,1.62),civilizationScale:Gt(.76+Math.sqrt(o/20)*.24,.86,1.48),kickScale:Gt(.8+o/120,.84,1.42)}}if(n.type==="type-ia-supernova"){const r=i()<.46?"double-degenerate":"single-degenerate",a=r==="double-degenerate"?et(i,1.22,1.58):et(i,1.34,1.41),o=et(i,.38,.86),l=et(i,.85,1.55)*(1+(o-.6)*.25);return{model:"thermonuclear-supernova",channel:r,whiteDwarfMass:a,nickelMass:o,explosionEnergyBethe:l,ejectaMass:a,ejectaVelocityKms:et(i,9e3,14500)*Math.sqrt(l),noRemnant:!0,rangeScale:Gt(.84+l*.14,.92,1.16),civilizationScale:Gt(.78+o*.28,.86,1.12),kickScale:Gt(.84+l*.1,.9,1.08)}}if(n.type==="core-collapse-supernova"){const r=et(i,8.2,31),a=Gt((r-8)/23+et(i,-.16,.16),0,1),o=a>.7?"black-hole":"neutron-star",l=o==="black-hole"?et(i,4.8,Math.min(13.5,r*.55)):et(i,1.18,2.18),c=et(i,.45,2.15)*(1-a*.28),u=et(i,.4,Math.min(2.1,r-l-.8));return{model:"core-collapse",progenitorMass:r,explosionEnergyBethe:c,ejectaMass:r-l-u,ejectaVelocityKms:et(i,4500,11500)*Math.sqrt(c),nickelMass:et(i,.025,.13)*c,neutrinoEnergyErg:Se(i,52.9,53.5),neutrinoMassLoss:u,remnantType:o,remnantMass:l,natalKickKms:o==="neutron-star"?et(i,80,720):et(i,15,180),persistentRemnant:!0,gravityStrength:Gt(l/8,.2,1.35),gravityRadius:et(i,.42,.72),rangeScale:Gt(.78+Math.sqrt(c)*.2,.86,1.22),civilizationScale:Gt(.72+c*.17,.8,1.16),kickScale:Gt(.76+c*.18,.82,1.18)}}if(n.type==="superluminous-supernova"){const r=i()<.64?"magnetar":"circumstellar-interaction",a=et(i,22,78),o=et(i,3,18),l=r==="magnetar"&&a<48?"magnetar":"black-hole",c=l==="magnetar"?et(i,1.55,2.35):et(i,5.5,18),u=o*1e51/1788e51;return{model:"superluminous-supernova",engine:r,progenitorMass:a,explosionEnergyBethe:o,radiatedMass:u,ejectaMass:a-c-u,ejectaVelocityKms:et(i,8e3,18500)*Math.pow(o/8,.18),peakLuminosityErgS:Se(i,43.7,45),magnetarPeriodMs:r==="magnetar"?et(i,1.1,4.8):null,magneticFieldGauss:r==="magnetar"?Se(i,13.8,15.2):null,remnantType:l,remnantMass:c,persistentRemnant:!0,gravityStrength:Gt(c/10,.24,1.45),gravityRadius:et(i,.48,.78),rangeScale:Gt(.94+Math.sqrt(o/8)*.34,1.05,1.52),civilizationScale:Gt(.88+Math.log10(o)*.24,.96,1.38),kickScale:Gt(.86+o/42,.92,1.32)}}if(n.type==="young-pulsar-birth"){const r=et(i,1.18,2.12),a=Se(i,1.05,2.22),o=Se(i,11.8,13.55),l=39e30*Math.pow(o/1e12,2)*Math.pow(1e3/a,4);return{model:"young-pulsar",neutronStarMass:r,spinPeriodMs:a,magneticFieldGauss:o,spinDownLuminosityErgS:l,natalKickKms:et(i,90,820),beamOpeningDeg:et(i,5,18),persistentRemnant:!0,gravityStrength:Gt(r/3.6,.28,.62),gravityRadius:et(i,.34,.54),rangeScale:Gt(.76+Math.log10(l/1e36+1)*.16,.78,1.22),civilizationScale:Gt(.72+Math.log10(l/1e36+1)*.18,.75,1.18),kickScale:0}}if(n.type==="gamma-ray-burst"){const r=et(i,22,72),a=Se(i,51.4,54.1),o=et(i,3.2,11.5),l=o*Math.PI/180;return{model:"collapsar-jet",progenitorMass:r,isotropicEnergyErg:a,trueJetEnergyErg:a*(1-Math.cos(l)),jetOpeningDeg:o,lorentzFactor:et(i,90,620),durationSeconds:Se(i,.35,2.15),remnantMass:et(i,3.4,15),remnantType:"black-hole",rangeScale:Gt(.78+(Math.log10(a)-51)*.17,.86,1.48),civilizationScale:Gt(.72+(Math.log10(a)-51)*.2,.82,1.5),kickScale:0}}if(n.type==="quasar-awakening"){const r=Se(i,6.5,9.2)*Gt(t.massRatio,.7,1.6),a=Se(i,-1.15,.24),o=et(i,.07,.22);return{model:"quasar-duty-cycle",blackHoleMass:r,eddingtonRatio:a,radiativeEfficiency:o,accretionRateSolarPerYear:2.2*r/1e8*a*(.1/o),jetLorentzFactor:et(i,3,18),jetOpeningDeg:et(i,4,15),activeDurationMyr:Se(i,-.2,1.7),pulsePhases:[.32,.58,.76],pulseWeights:[1,.72,.46],recoveryDuration:et(i,18,32),recoveryFraction:et(i,.22,.38),temporaryOnly:!0,rangeScale:Gt(.8+Math.sqrt(a)*.34,.84,1.38),civilizationScale:Gt(.72+Math.sqrt(a)*.3,.78,1.34),kickScale:0}}if(n.type==="magnetar-flare"){const r=Se(i,14.2,15.35),a=Se(i,44.2,46.4),o=2+Math.floor(i()*4);return{model:"magnetar-giant-flare",magneticFieldGauss:r,energyErg:a,spikeDurationSeconds:Se(i,-2.7,-.55),tailPeriodSeconds:et(i,2.2,11.8),pulsePhases:Va(i,o,.34,.76),pulseWeights:Array.from({length:o},(l,c)=>Math.pow(.68,c)),recoveryDuration:et(i,12,28),recoveryFraction:et(i,.36,.62),temporaryOnly:!0,rangeScale:Gt(.76+(Math.log10(a)-44)*.18,.8,1.34),civilizationScale:Gt(.68+(Math.log10(a)-44)*.22,.72,1.42),kickScale:0}}if(n.type==="pulsar-glitch"){const r=Se(i,1.3,3),a=Se(i,-9.2,-5.1);return{model:"pulsar-glitch",spinPeriodMs:r,fractionalFrequencyJump:a,recoveryFraction:et(i,.08,.82),recoveryDays:Se(i,.4,2.9),pulsePhases:[.46,.56],pulseWeights:[1,.24],temporaryOnly:!0,rangeScale:1,civilizationScale:1,kickScale:0}}if(n.type==="stellar-black-hole-merger"||n.type==="late-black-hole-merger"){const r=n.type==="late-black-hole-merger",a=r?Se(i,2.7,5.4):et(i,18,86),o=r?Se(i,2.5,Math.log10(a)):et(i,7,Math.min(70,a)),l=a+o,c=a*o/(l*l),u=et(i,0,.94),d=et(i,0,.94),p=et(i,-1,1),g=et(i,-1,1),x=u*p,v=d*g,h=i()*Bo,f=i()*Bo,m=u*Math.sqrt(1-p**2)*Math.cos(h),_=d*Math.sqrt(1-g**2)*Math.cos(f),M=(a*x+o*v)/l,T=Gt(.035+c*.11+Math.max(0,M)*.018,.028,.09),S=Gt(g_({massA:a,massB:o,alignedSpinA:x,alignedSpinB:v,inPlaneSpinA:m,inPlaneSpinB:_}),0,5e3);return{model:"black-hole-binary",massA:a,massB:o,chirpMass:Math.pow(a*o,3/5)/Math.pow(l,1/5),spinA:x,spinB:v,spinMagnitudeA:u,spinMagnitudeB:d,spinTiltCosineA:p,spinTiltCosineB:g,effectiveSpin:M,radiatedMassFraction:T,remnantMass:l*(1-T),recoilKms:S,gasRich:!r&&i()<.38,persistentRemnant:!1,rangeScale:1,civilizationScale:1,kickScale:0}}if(n.type==="neutron-star-kilonova"){const r=et(i,1.18,1.92),a=et(i,1.12,Math.min(1.82,r)),o=r+a,l=Math.pow(r*a,3/5)/Math.pow(o,1/5),c=1-a/r,u=et(i,.035,.075)*s,d=Gt(et(i,.018,.072)*(1+c*2.4),.012,.13),p=Gt(et(i,.12,.27)*s,.09,.34),g=2.72+(t.massRatio-1)*.28,x=o-u>g?"black-hole":"massive-neutron-star";return{model:"compact-merger",massA:r,massB:a,chirpMass:l,ejectaMass:d,ejectaVelocityC:p,radiatedMassFraction:u/o,jetOpeningDeg:et(i,5,16),remnantMass:o-u-d,remnantType:x,persistentRemnant:!0,gravityStrength:Gt((o-2.2)/1.5,.32,1.25),gravityRadius:et(i,.62,.9),rangeScale:Gt(.82+d*5+p,.82,1.42),civilizationScale:Gt(.72+p*1.7,.78,1.3),kickScale:Gt(.7+p*1.5,.8,1.25)}}if(n.type==="tidal-disruption-event"){const r=et(i,.35,3.2),a=Math.pow(r,r<1?.82:.57),o=8e7*Math.pow(a,1.5)/Math.sqrt(r),l=Math.min(Se(i,5.8,8.05)*t.gravity,o),c=et(i,.72,2.15),u=a*Math.cbrt(l/r),d=41*Math.sqrt(l/1e6)*Math.pow(r,-.5)*Math.pow(a,1.5)/Math.pow(c,3),p=et(i,.43,.57),g=Gt(et(i,.6,3.8)*c,.5,6.5);return{model:"tidal-disruption",blackHoleMass:l,hillsMass:o,starMass:r,starRadius:a,penetration:c,tidalRadiusSolar:u,fallbackDays:d,boundFraction:p,peakEddingtonRatio:g,fallbackExponent:-5/3,unboundVelocityKms:et(i,5500,16e3)*Math.sqrt(c),pulsePhases:[.58,.74],pulseWeights:[1,.42],recoveryDuration:et(i,18,32),recoveryFraction:.28,rangeScale:Gt(.76+Math.log10(g+1)*.42,.78,1.25),civilizationScale:Gt(.62+Math.log10(g+1)*.5,.68,1.18),kickScale:Gt(.72+c*.15,.82,1.08)}}if(n.type==="failed-supernova"){const r=et(i,18,42),a=et(i,.025,.16)/s,o=et(i,.16,.46),l=r*(1-a)-o;return{model:"failed-collapse",progenitorMass:r,ejectedEnvelopeFraction:a,neutrinoMassLoss:o,remnantMass:l,dustOpticalDepth:et(i,1.2,5.4),fallbackFraction:Gt(1-a-o/r,.72,.97),persistentRemnant:!0,remnantType:"black-hole",gravityStrength:Gt(l/24,.45,1.5),gravityRadius:et(i,.58,.88),rangeScale:Gt(.76+a*2.1,.78,1.08),civilizationScale:Gt(.6+a*2.4,.65,1.02),kickScale:Gt(.45+a*2.8,.5,.88)}}if(n.type==="red-dwarf-superflare"){const r=Se(i,34.4,36.25),a=2+Math.floor(i()*4),o=Math.log10(r)-34;return{model:"magnetic-flare-storm",energyErg:r,stormCount:a,pulsePhases:Va(i,a,.38,.78),pulseWeights:Array.from({length:a},(l,c)=>Math.pow(.76,c)),cmeVelocityKms:et(i,900,4200)*s,ultravioletFraction:et(i,.12,.34),atmosphereLossFraction:Gt(et(i,.006,.045)*o,.004,.14),recoveryDuration:et(i,16,34),recoveryFraction:et(i,.48,.72),temporaryOnly:!0,rangeScale:Gt(.72+o*.13,.78,1.22),civilizationScale:Gt(.55+o*.22,.62,1.3),kickScale:0}}if(n.type==="classical-nova"){const r=et(i,.72,1.34),a=Se(i,-10.1,-8.15),o=22e-6*Math.pow(1.05/r,3.2),l=o/a,c=Gt(Math.round(4.4-Math.log10(l)*.58),2,4);return{model:"recurrent-nova",whiteDwarfMass:r,accretionRate:a,ignitionMass:o,recurrenceYears:l,ejectaMass:o*et(i,.62,1.08),ejectaVelocityKms:et(i,850,3900)*Math.sqrt(r),outburstCount:c,pulsePhases:Va(i,c,.14,.78),pulseWeights:Array.from({length:c},(u,d)=>Math.pow(.7,d)),recoveryDuration:et(i,7,15),recoveryFraction:.74,temporaryOnly:!0,rangeScale:Gt(.72+r*.18,.78,1.02),civilizationScale:Gt(.58+r*.2,.68,.92),kickScale:0}}return null}function Ll(n,t,e=null){if(!t)return n;const i=Math.sqrt(e?.speed||1),s=.82+i*.18;return{...n,radius:n.radius*(t.rangeScale||1)*s,maxStars:Math.max(1,Math.round(n.maxStars*(t.rangeScale||1))),kick:n.kick*(t.kickScale??1),civilization:n.civilization*(t.civilizationScale||1),range:n.range*(t.rangeScale||1)*i,beamAngle:t.jetOpeningDeg||t.beamOpeningDeg?(t.jetOpeningDeg||t.beamOpeningDeg)*Math.PI/180:n.beamAngle}}function x_(n){const t=n.simulation;if(!t)return null;if(t.model==="compact-merger"){const e=t.remnantType==="black-hole"?"黑洞":"大质量中子星";return`两颗 ${t.massA.toFixed(2)} 与 ${t.massB.toFixed(2)} M☉ 中子星并合，抛出 ${t.ejectaMass.toFixed(3)} M☉、约 ${(t.ejectaVelocityC*100).toFixed(0)}% 光速的物质，留下 ${t.remnantMass.toFixed(2)} M☉ ${e}`}if(t.model==="tidal-disruption")return`${t.starMass.toFixed(1)} M☉ 恒星以穿透因子 β=${t.penetration.toFixed(2)} 掠过约 ${(t.blackHoleMass/1e6).toFixed(1)}×10⁶ M☉ 黑洞，束缚碎片在约 ${Math.round(t.fallbackDays)} 天后开始回落`;if(t.model==="failed-collapse")return`${t.progenitorMass.toFixed(1)} M☉ 恒星仅抛出约 ${(t.ejectedEnvelopeFraction*100).toFixed(1)}% 外层，回落物质形成约 ${t.remnantMass.toFixed(1)} M☉ 黑洞`;if(t.model==="magnetic-flare-storm")return`${t.stormCount} 次耀斑组成约 10^${Math.log10(t.energyErg).toFixed(1)} erg 的爆发风暴，CME 速度约 ${Math.round(t.cmeVelocityKms)} km/s，近轨行星大气随后逐步恢复`;if(t.model==="recurrent-nova")return`${t.whiteDwarfMass.toFixed(2)} M☉ 白矮星以 ${t.accretionRate.toExponential(1)} M☉/年吸积，模型复发周期约 ${Math.round(t.recurrenceYears).toLocaleString("zh-CN")} 年，本段显示 ${t.outburstCount} 次爆发`;if(t.model==="pair-instability")return`${t.progenitorMass.toFixed(0)} M☉ 巨星的 ${t.heliumCoreMass.toFixed(0)} M☉ 氦核触发成对不稳定，释放约 ${t.explosionEnergyBethe.toFixed(1)} Bethe，并完全解体、不留致密残骸`;if(t.model==="thermonuclear-supernova")return`${t.channel==="double-degenerate"?"双白矮星并合":"伴星吸积"}使 ${t.whiteDwarfMass.toFixed(2)} M☉ 白矮星热核失控，合成约 ${t.nickelMass.toFixed(2)} M☉ 镍-56，并完全解体`;if(t.model==="core-collapse"){const e=t.remnantType==="black-hole"?"黑洞":"中子星";return`${t.progenitorMass.toFixed(1)} M☉ 恒星以约 ${t.explosionEnergyBethe.toFixed(2)} Bethe 爆发，抛出 ${t.ejectaMass.toFixed(1)} M☉ 物质，留下 ${t.remnantMass.toFixed(2)} M☉ ${e}`}if(t.model==="superluminous-supernova"){const e=t.engine==="magnetar"?`${t.magnetarPeriodMs.toFixed(1)} ms 初始周期磁星`:"致密星周物质相互作用";return`${t.progenitorMass.toFixed(0)} M☉ 前身星由${e}持续供能，峰值光度约 10^${Math.log10(t.peakLuminosityErgS).toFixed(1)} erg/s，留下 ${t.remnantMass.toFixed(1)} M☉ ${t.remnantType==="black-hole"?"黑洞":"磁星"}`}return t.model==="young-pulsar"?`${t.neutronStarMass.toFixed(2)} M☉ 中子星以 ${t.spinPeriodMs.toFixed(1)} ms 周期自转，表面磁场约 10^${Math.log10(t.magneticFieldGauss).toFixed(1)} G，并以约 ${Math.round(t.natalKickKms)} km/s 获得诞生踢速`:t.model==="collapsar-jet"?`${t.progenitorMass.toFixed(0)} M☉ 巨星坍缩为约 ${t.remnantMass.toFixed(1)} M☉ 黑洞，产生张角 ${t.jetOpeningDeg.toFixed(1)}°、洛伦兹因子约 ${Math.round(t.lorentzFactor)} 的喷流，持续约 ${t.durationSeconds.toFixed(1)} 秒`:t.model==="quasar-duty-cycle"?`约 ${(t.blackHoleMass/1e6).toFixed(1)}×10⁶ M☉ 中央黑洞达到 ${(t.eddingtonRatio*100).toFixed(0)}% 爱丁顿吸积率，每年吸积约 ${t.accretionRateSolarPerYear.toFixed(2)} M☉，活动期约 ${t.activeDurationMyr.toFixed(1)} 百万年`:t.model==="magnetar-giant-flare"?`约 10^${Math.log10(t.magneticFieldGauss).toFixed(1)} G 磁场重排，释放约 10^${Math.log10(t.energyErg).toFixed(1)} erg；初始硬脉冲持续 ${t.spikeDurationSeconds.toFixed(3)} 秒并伴随衰减尾波`:t.model==="pulsar-glitch"?`${t.spinPeriodMs.toFixed(1)} ms 脉冲星的自转频率跃增约 ${t.fractionalFrequencyJump.toExponential(1)}，其中 ${(t.recoveryFraction*100).toFixed(0)}% 在约 ${Math.round(t.recoveryDays)} 天内恢复`:t.model==="black-hole-binary"?`${t.massA.toFixed(1)} 与 ${t.massB.toFixed(1)} M☉ 黑洞并合，约 ${(t.radiatedMassFraction*100).toFixed(1)}% 总质量转化为引力波，形成 ${t.remnantMass.toFixed(1)} M☉ 黑洞并以约 ${Math.round(t.recoilKms)} km/s 反冲${t.gasRich?"，周围气体产生短暂余辉":""}`:null}function wh(n,t){if(!t.simulation?.persistentRemnant||n<t.impactAt)return 0;const e=t.persistUntil??845,i=t.persistenceFadeDuration??24;return 1-Ah(n,e,e+i)}function Il(n,t){let e=n+1^t;return e=Math.imul(e^e>>>16,569420461),e=Math.imul(e^e>>>15,1935289751),((e^e>>>15)>>>0)/4294967296}function M_(n,t,e,i,s){if(!e?.gravityStrength||!e.persistentRemnant)return null;const r=e.gravityRadius||.7,a=[];for(let v=0;v<n.length/3;v++){const h=v*3,f=Math.hypot(n[h]-t.x,n[h+1]-t.y,n[h+2]-t.z);f<=r&&a.push({index:v,distance:f})}a.sort((v,h)=>v.distance-h.distance);const o=Math.min(180,a.length),l=new Uint16Array(o),c=new Float32Array(o),u=a.length/Math.max(1,o);for(let v=0;v<o;v++){const h=a[Math.min(a.length-1,Math.floor(v*u))];l[v]=h.index,c[v]=h.distance}const d=i^Math.imul(s+1,668265261),p=Il(s,d)*Bo,g=(Il(s+11,d+37)-.5)*.56,x=Math.cos(g);return{indices:l,restDistances:c,influenceRadius:r,strength:e.gravityStrength,axis:new Float32Array([Math.cos(p)*Math.sin(g),x,Math.sin(p)*Math.sin(g)])}}function v_(n,t,e,i){const s=e.transientGravityField;if(!s||n<e.impactAt)return;const r=wh(n,e);if(r<=0)return;const a=Math.min(n,e.persistUntil??845)-e.impactAt,o=s.axis[0],l=s.axis[1],c=s.axis[2];for(let u=0;u<s.indices.length;u++){const d=s.indices[u];if(d===e.sourceIndex)continue;const p=d*3,g=t[p]-i.x,x=t[p+1]-i.y,v=t[p+2]-i.z,h=Math.max(.08,s.restDistances[u]),f=1-Ah(h,s.influenceRadius*.35,s.influenceRadius);if(f<=0)continue;const m=a*.018*Math.sqrt(s.strength/Math.pow(h+.18,3))*f,_=Math.cos(m),M=Math.sin(m),T=o*g+l*x+c*v,S=g*_+(l*v-c*x)*M+o*T*(1-_),w=x*_+(c*g-o*v)*M+l*T*(1-_),D=v*_+(o*x-l*g)*M+c*T*(1-_);t[p]=i.x+g+(S-g)*r,t[p+1]=i.y+x+(w-x)*r,t[p+2]=i.z+v+(D-v)*r}}function y_(n,t){const{mode:e,epochEffectsGroup:i,primordialParticles:s,primordialFactors:r,primordialDirections:a,expansionStreaks:o,expansionDirections:l,bangCore:c,shockwaves:u,renderer:d,scene:p,clickableStars:g,originalGalaxyPositions:x,stellarGravityState:v,universe:h,transition:f,galaxyGroup:m,starDeathThresholds:_,originalGalaxyColors:M,cosmicEvents:T,remnantGroup:S,stellarRemnants:w,originalRemnantPositions:D,remnantDynamics:E,blackHoleRemnants:b,heatDeathGroup:P,coldPhotons:C,originalPhotonPositions:L,originalPhotonColors:F,cosmicFateGroup:U,fateBubble:N,fateGlow:G}=t,z=h.cosmicFate,Z=z&&z.type!=="heat-death",$=Z?rt.smoothstep(n,z.onsetAt,1e3):0,nt=n<150&&e==="explorer";if(i.visible=nt,nt&&s){const at=rt.smoothstep(n,0,145),A=rt.smoothstep(n,0,55),y=rt.smoothstep(n,55,145),H=Math.sqrt(h.speed),W=(.06+Math.pow(A,.62)*32+y*7)*H,j=s.geometry.attributes.position.array;for(let dt=0;dt<r.length;dt++){const xt=W*r[dt];j[dt*3]=a[dt*3]*xt,j[dt*3+1]=a[dt*3+1]*xt,j[dt*3+2]=a[dt*3+2]*xt}s.geometry.attributes.position.needsUpdate=!0,s.material.opacity=.98*(1-rt.smoothstep(n,112,150)),s.material.size=.3-at*.17;const K=o.geometry.attributes.position.array;for(let dt=0;dt<l.length/4;dt++){const xt=l[dt*4+3],st=(.04+Math.pow(A,.5)*31+y*5)*xt*H,gt=Math.max(0,st-(1.2+at*5.5)*xt);for(let yt=0;yt<3;yt++){const mt=l[dt*4+yt];K[dt*6+yt]=mt*gt,K[dt*6+3+yt]=mt*st}}o.geometry.attributes.position.needsUpdate=!0,o.material.opacity=.68*rt.smoothstep(n,1.5,8)*(1-rt.smoothstep(n,48,82));const Tt=1-rt.smoothstep(n,7,34),ot=.7+Math.pow(A,.46)*18;c.material.opacity=Tt,c.scale.set(ot,ot,1),u.forEach((dt,xt)=>{const st=3+xt*6,gt=52+xt*7,yt=rt.clamp((n-st)/gt,0,1),mt=.9+Math.pow(yt,.72)*(39+xt*5);dt.scale.set(mt,mt,1),dt.material.opacity=Math.sin(yt*Math.PI)*(.24-xt*.045)})}const k=new Vt(328968),q=k.clone();if(n<70){const at=rt.smoothstep(n,0,70);q.lerpColors(new Vt(2756872),k,at),d.toneMappingExposure=1.15+(1-at)*2.2}else if(Z&&$>0){const at={"big-rip":new Vt(463652),"big-crunch":new Vt(2492422),"vacuum-decay":new Vt(1444389)};q.lerpColors(k,at[z.type],$*.72),d.toneMappingExposure=z.type==="big-crunch"?1.15+$*1.45:1.15-$*.38}else if(n>950){const at=rt.smoothstep(n,950,1e3);q.lerpColors(k,new Vt(197898),at*.32),d.toneMappingExposure=1.15}else d.toneMappingExposure=1.15;if(d.setClearColor(q,1),p.fog.color.copy(q),!g||!x)return;const ft=Ks(h),ct=i_(h),X=at=>mn(cc(at,h),h),J=X(845),ut=X(930),bt=X(900),vt=X(790),Ot=X(850),ne=rt.smoothstep(n,245,340),I=1-rt.smoothstep(n,ft-75,ft+10);g.material.opacity=ne*.9,g.material.size=.09,f||m.scale.setScalar(1);const Ft=g.geometry.attributes.position.array,Pt=g.geometry.attributes.color.array;v&&f_(n,x,Ft,v);for(let at=0;at<x.length;at+=3){const A=at/3,y=1-rt.smoothstep(n,_[A],_[A]+22);v||(Ft[at]=x[at],Ft[at+1]=x[at+1],Ft[at+2]=x[at+2]),Pt[at]=M[at]*y,Pt[at+1]=M[at+1]*y,Pt[at+2]=M[at+2]*y}if(T.forEach(at=>{const A=at.sourceIndex*3,y={x:Ft[A],y:Ft[A+1],z:Ft[A+2]};at.group.position.set(y.x,y.y,y.z),at.visual==="black-hole-merger"&&m_(n,Ft,Pt,at,y),at.transientGravityField&&v_(n,Ft,at,y)}),T.forEach(at=>{if(n<at.impactAt)return;const A=rt.smoothstep(n,at.impactAt,at.impactAt+24);if(at.starImpacts.forEach(yt=>{const mt=yt.index*3;Ft[mt]+=yt.kick[0]*A,Ft[mt+1]+=yt.kick[1]*A,Ft[mt+2]+=yt.kick[2]*A,Pt[mt]*=yt.dimFactor,Pt[mt+1]*=yt.dimFactor,Pt[mt+2]*=yt.dimFactor}),!at.waveSamples)return;const y=at.duration*(1-at.impactPhase),H=rt.clamp((n-at.impactAt)/y,0,1);if(H<=0||H>=1)return;const{waveRadius:W,waveAmplitude:j=1,indices:K,distances:Tt,transverse:ot,polarities:dt}=at.waveSamples,xt=.18+Math.pow(H,.72)*W,st=.18+H*.34,gt=.13*j*(1-H*.58);for(let yt=0;yt<K.length;yt++){const mt=Tt[yt]-xt;if(Math.abs(mt)>st*2.8)continue;const Mt=Math.cos(mt/st*Math.PI)*Math.exp(-Math.pow(mt/st,2)*1.7),zt=Mt*gt*dt[yt],O=K[yt]*3,lt=yt*3;Ft[O]+=ot[lt]*zt,Ft[O+1]+=ot[lt+1]*zt,Ft[O+2]+=ot[lt+2]*zt;const _t=1+Math.abs(Mt)*.18;Pt[O]*=_t,Pt[O+1]*=_t,Pt[O+2]*=_t}}),Z&&$>0){const at=N?.position.x||0,A=N?.position.y||0,y=N?.position.z||0,H=.18+Math.pow($,.58)*36;for(let W=0;W<x.length;W+=3)if(z.type==="big-rip"){const j=Math.hypot(x[W],x[W+1],x[W+2]),K=1+Math.pow($,1.7)*(2.8+j*.16);Ft[W]*=K,Ft[W+1]*=K,Ft[W+2]*=K;const Tt=Math.pow(1-$,.72);Pt[W]*=Tt,Pt[W+1]*=Tt,Pt[W+2]*=Tt}else if(z.type==="big-crunch"){const j=Math.max(.012,1-Math.pow($,1.35)*.988);Ft[W]*=j,Ft[W+1]*=j,Ft[W+2]*=j,Pt[W]*=1+$*1.4,Pt[W+1]*=1-$*.5,Pt[W+2]*=1-$*.72}else{const j=Math.hypot(Ft[W]-at,Ft[W+1]-A,Ft[W+2]-y),K=rt.smoothstep(H-1.2,H+.4,j);Pt[W]*=K,Pt[W+1]*=K,Pt[W+2]*=K}}T.forEach(at=>{const A=at.sourceIndex*3;at.group.position.set(Ft[A],Ft[A+1],Ft[A+2])}),g.geometry.attributes.position.needsUpdate=!0,g.geometry.attributes.color.needsUpdate=!0;const wt=m.children.find(at=>at.userData.isCoreGlow);if(wt){const{scale:at,opacity:A}=wt.userData.profile;wt.material.opacity=ne*I*A*(1-$),wt.scale.set(at,at,1)}const Et=m.children.find(at=>at.userData.isAgnGlow),jt=m.children.find(at=>at.userData.isAgnJet);if(Et){const at=Math.min(ct-1,mn(4e10,h)),A=ne*(1-rt.smoothstep(n,at,ct));Et.material.opacity=A*.82,Et.scale.set(.72,.72,1),jt.material.opacity=A*.18}const St=1-$,Dt=St>.001&&n>=E.firstBirthAt&&n<ut,re=St>.001&&b.some(at=>n>=at.userData.birthAt&&n<=at.userData.evaporationAt+7.5);if(S.visible=(Dt||re)&&e==="explorer",Dt&&w){const at=J>=999?1:1-rt.smoothstep(n,J,Math.max(J+1,ut));w.material.opacity=at*.64*(1-$);const A=w.geometry.attributes.position.array,y=w.geometry.attributes.color.array,H=(W,j)=>{const K=W*3,Tt=D[K],ot=D[K+1],dt=D[K+2],xt=E.axes[K],st=E.axes[K+1],gt=E.axes[K+2],yt=Eh(j,E.orbitRates[W]),mt=Math.cos(yt),Mt=Math.sin(yt),zt=xt*Tt+st*ot+gt*dt;A[K]=Tt*mt+(st*dt-gt*ot)*Mt+xt*zt*(1-mt),A[K+1]=ot*mt+(gt*Tt-xt*dt)*Mt+st*zt*(1-mt),A[K+2]=dt*mt+(xt*ot-st*Tt)*Mt+gt*zt*(1-mt)};for(let W=0;W<D.length/3;W++){const j=W*3,K=rt.smoothstep(n,E.birthAt[W],E.birthAt[W]+8);y[j]=E.baseColors[j]*K,y[j+1]=E.baseColors[j+1]*K,y[j+2]=E.baseColors[j+2]*K;const Tt=E.fates[W],ot=E.escapeAt[W];if(n<ot||Tt===1){H(W,n);continue}if(Tt===2){const sn=rt.smoothstep(n,ot,Math.max(ot+1,Math.min(bt,ot+42)));H(W,n+sn*150);const qe=1-sn*.985;A[j]*=qe,A[j+1]*=qe,A[j+2]*=qe;continue}H(W,ot);const dt=A[j],xt=A[j+1],st=A[j+2],gt=Math.max(.001,Math.hypot(dt,xt,st)),yt=E.axes[j],mt=E.axes[j+1],Mt=E.axes[j+2],zt=Math.sign(E.orbitRates[W])||1;let O=(mt*st-Mt*xt)*zt,lt=(Mt*dt-yt*st)*zt,_t=(yt*xt-mt*dt)*zt;const Lt=Math.max(.001,Math.hypot(O,lt,_t));O/=Lt,lt/=Lt,_t/=Lt;let ht=O*.9+dt/gt*.34,it=lt*.9+xt/gt*.34+mt*Math.sin(W*12.9898)*.08,Ut=_t*.9+st/gt*.34;const qt=Math.max(.001,Math.hypot(ht,it,Ut));ht/=qt,it/=qt,Ut/=qt;const ue=rt.clamp((n-ot)/Math.max(1,bt-ot),0,1),ie=Tt===3?Math.pow(ue,.72)*(18+E.speeds[W]*7):Math.pow(ue,1.35)*(6+E.speeds[W]*11);A[j]=dt+ht*ie,A[j+1]=xt+it*ie,A[j+2]=st+Ut*ie}w.geometry.attributes.position.needsUpdate=!0,w.geometry.attributes.color.needsUpdate=!0}if(b.forEach(at=>{const A=at.userData;if(!A.isCentral&&Number.isInteger(A.sourceIndex)){const mt=A.sourceIndex*3;at.position.set(Ft[mt],Ft[mt+1],Ft[mt+2])}const y=rt.smoothstep(n,A.birthAt,A.birthAt+7),H=1-rt.smoothstep(n,A.evaporationAt-24,A.evaporationAt),W=rt.smoothstep(n,A.evaporationAt-15,A.evaporationAt),j=Math.max(A.birthAt+12,ft-50),K=rt.smoothstep(n,j,Math.max(j+1,X(825))),Tt=rt.smoothstep(n,vt,Math.max(vt+1,Ot)),ot=7.5,dt=Math.abs(n-A.evaporationAt),xt=dt<ot?Math.sin((1-dt/ot)*Math.PI/2):0;at.visible=St>.001&&e==="explorer"&&n>=A.birthAt&&n<=A.evaporationAt+ot;const st=A.baseScale*(.18+.82*Math.cbrt(Math.max(0,H)));at.scale.setScalar(Math.max(.035,st));const gt=y*rt.lerp(A.accretionStrength,.24,K)*Math.sqrt(Math.max(0,H));Qn(at,gt,St),A.hawkingGlow.material.opacity=y*Tt*(.06+W*.62)*Math.sqrt(Math.max(0,H))*St,A.finalPulse.material.opacity=xt*.84*St;const yt=(.22+xt*2.1)/Math.max(.035,st);A.finalPulse.scale.set(yt,yt,1)}),P.visible=!Z&&n>910&&e==="explorer",C&&L&&F){const at=rt.smoothstep(n,910,940),A=rt.smoothstep(n,938,1e3);C.material.opacity=at*Math.pow(1-A,1.7)*.34;const y=C.geometry.attributes.position.array,H=C.geometry.attributes.color.array,W=1+A*1.8;for(let j=0;j<L.length;j+=3)y[j]=L[j]*W,y[j+1]=L[j+1]*W,y[j+2]=L[j+2]*W,H[j]=F[j]*(1-A*.55)+A*.06,H[j+1]=F[j+1]*(1-A*.88),H[j+2]=F[j+2]*(1-A*.96);C.geometry.attributes.position.needsUpdate=!0,C.geometry.attributes.color.needsUpdate=!0}if(U.visible=Z&&$>0&&e==="explorer",U.visible&&N&&G)if(z.type==="vacuum-decay"){const at=.18+Math.pow($,.58)*36;N.visible=!0,N.scale.setScalar(at),N.material.opacity=Math.sin(Math.min(.98,$)*Math.PI)*.18+.035,G.position.copy(N.position),G.material.opacity=(1-$)*.42,G.scale.setScalar(1.2+$*5.5)}else{N.visible=!1,G.position.set(0,0,0),G.material.opacity=z.type==="big-crunch"?Math.pow($,2.4)*.92:Math.sin($*Math.PI)*.28;const at=z.type==="big-crunch"?.4+(1-$)*8:3+$*28;G.scale.setScalar(at)}}function S_(n,t){const{mode:e,cosmicEvents:i,cosmicEventGroup:s,universe:r}=t,a=r.cosmicFate.type!=="heat-death"&&n>=r.cosmicFate.onsetAt;let o=null,l=!1;return i.forEach(c=>{const u=(n-c.start)/c.duration,d=u>=0&&u<=1,p=c.visual==="black-hole-merger"?Th(n,c):0,g=wh(n,c),x=Math.max(p,g),v=n>=c.impactAt&&x>0,h=!a&&(d||v)&&e==="explorer";if(c.group.visible=h,!h)return;l=!0,d&&(o=c);const f=Math.min(1,u);c.group.userData.phase=f;const m=c.group.userData.effect;if(!d&&g>0){c.visual==="kilonova"?(m.innerFlash.material.opacity=0,m.photosphere.material.opacity=0,m.ejecta.material.opacity=0,m.shell.material.opacity=0,m.polarJets&&(m.polarJets.material.opacity=0),m.gravityWave&&(m.gravityWave.material.opacity=0),m.remnant.material.opacity=g*.72):c.visual==="stellar-collapse"?(m.starCore.material.opacity=0,m.shroud.material.opacity=0,m.dust.material.opacity=0,m.remnantHole.visible=!0,Qn(m.remnantHole,.8,g)):c.visual==="supernova"?(m.innerFlash.material.opacity=0,m.photosphere.material.opacity=0,m.ejecta.material.opacity=0,m.shell.material.opacity=0,m.remnant.material.opacity=g*.68):c.visual==="pulsar"&&(m.core.material.opacity=g*.76,m.halo.material.opacity=g*.1,m.nebula.material.opacity=g*.055,m.jets.material.opacity=g*.12,m.sweepGlow.material.opacity=0,m.fieldLines.forEach((_,M)=>{_.material.opacity=g*(.038-M*.005)}),c.group.userData.intensity=g*.56);return}if(c.visual==="supernova"||c.visual==="nova"||c.visual==="kilonova"){const _=f,M=c.visual==="nova",T=c.visual==="kilonova",S=M?.48:T?1.18:1,w=rt.smoothstep(_,0,.028),D=c.simulation?.pulsePhases?.reduce((Z,$,nt)=>{const k=c.simulation.pulseWeights?.[nt]??1,q=Math.abs(_-$);return Math.max(Z,Math.exp(-q*q*1500)*k)},0)||0,E=rt.clamp((c.simulation?.nickelMass||.6)/.6,.58,2.2),b=Math.min(1,Math.max(w*(1-rt.smoothstep(_,.045,.19)),D)*(M||T?1:E)),P=(1-rt.smoothstep(_,.12,1))*w;m.innerFlash.material.opacity=b*(M?.72:.98);const C=(.08+Math.pow(Math.min(1,_/.16),.28)*.72)*S;m.innerFlash.scale.set(C,C,1),m.photosphere.material.opacity=b*.58+P*.2;const L=(.16+Math.pow(_,.56)*1.15)*S;m.photosphere.scale.set(L,L*.9,1);const F=M||c.simulation?.persistentRemnant?1:1-rt.smoothstep(_,.82,1);m.remnant.material.opacity=rt.smoothstep(_,.2,.52)*F*.72;const U=m.ejecta.geometry.attributes.position.array;for(let Z=0;Z<m.ejectaVelocity.length;Z++){const $=rt.clamp((_-m.ejectaDelay[Z])/(1-m.ejectaDelay[Z]),0,1),nt=.05+Math.pow($,.58)*m.ejectaVelocity[Z],k=Math.sin($*10+Z*1.73)*$*.045,q=Z*3;U[q]=m.ejectaDirections[q]*nt+k*m.ejectaDirections[q+1],U[q+1]=m.ejectaDirections[q+1]*nt+k*m.ejectaDirections[q+2],U[q+2]=m.ejectaDirections[q+2]*nt+k*m.ejectaDirections[q]}m.ejecta.geometry.attributes.position.needsUpdate=!0,m.ejecta.material.opacity=w*(1-rt.smoothstep(_,.58,1))*.86;const N=m.shell.geometry.attributes.position.array,G=M?.72+(c.simulation?.ejectaVelocityKms||1800)/1e4:T?2.15+(c.simulation?.ejectaVelocityC||.2)*3.1:rt.clamp(1.25+(c.simulation?.ejectaVelocityKms||9e3)/7200,1.8,3.9),z=.12+(1-Math.pow(1-_,2.4))*G;for(let Z=0;Z<m.shellNoise.length;Z++){const $=Z*3,nt=1+Math.sin(m.shellNoise[Z]+_*4.5)*.055+Math.sin(Z*2.1)*.025;N[$]=m.shellDirections[$]*z*nt,N[$+1]=m.shellDirections[$+1]*z*nt,N[$+2]=m.shellDirections[$+2]*z*nt}if(m.shell.geometry.attributes.position.needsUpdate=!0,m.shell.material.opacity=rt.smoothstep(_,.04,.14)*(1-rt.smoothstep(_,.5,1))*.34,m.polarJets&&(m.polarJets.material.opacity=rt.smoothstep(_,.015,.08)*(1-rt.smoothstep(_,.18,.5))*.72),m.gravityWave){const Z=rt.clamp((_-c.impactPhase)/Math.max(.001,1-c.impactPhase),0,1),$=.25+Math.pow(Z,.72)*7.2;m.gravityWave.scale.set($,$,1),m.gravityWave.material.opacity=Math.pow(Math.sin(Z*Math.PI),.72)*.28*(c.waveSamples?.waveAmplitude||1)}}else if(c.visual==="tidal-disruption"){const _=f,M=rt.smoothstep(_,0,.42),T=rt.smoothstep(_,.3,.62),S=rt.smoothstep(_,.4,.72),w=c.simulation?.pulsePhases?.[0]||.58,D=Math.max(0,(_-w)/Math.max(.001,1-w)),E=rt.smoothstep(_,.4,w)*Math.pow(1+D*6,c.simulation?.fallbackExponent||-5/3);m.starCore.position.set(rt.lerp(2.5,.48,M),Math.sin(M*Math.PI)*.34,rt.lerp(.34,0,M)),m.starCore.material.opacity=(1-T)*.96,m.starCore.scale.set(.28+T*.68,Math.max(.035,.28*(1-T*.88)),1),m.disk.material.opacity=E*.5,m.flare.material.opacity=E*.62;const b=.24+Math.sqrt(E)*2.5;m.flare.scale.set(b,b,1),Qn(m.hole,.62+S*.38);const P=m.debris.geometry.attributes.position.array;for(let C=0;C<m.debrisOffsets.length;C++){const L=C*3,F=m.debrisOffsets[C],U=F<0,N=U?.34+Math.abs(F)*(1.15-S*.72):.42+F*(.65+S*3.4),G=F*1.8+S*(U?6.4:1.25),z=Math.sin(m.debrisNoise[C]+S*5)*.045*(1-S*.45);P[L]=Math.cos(G)*N,P[L+1]=Math.sin(G)*N*.38+z,P[L+2]=Math.sin(G*.5+m.debrisNoise[C])*.075}m.debris.geometry.attributes.position.needsUpdate=!0,m.debris.material.opacity=T*(1-rt.smoothstep(_,.9,1))*.82}else if(c.visual==="stellar-flare"){const _=f,M=c.simulation?.pulsePhases?.reduce((P,C,L)=>{const F=c.simulation.pulseWeights?.[L]??1,U=Math.abs(_-C);return Math.max(P,Math.exp(-U*U*900)*F)},0)||0,T=Math.max(Math.pow(Math.sin(_*Math.PI),.5)*.22,M),S=.72+M*.28;m.starCore.material.opacity=.48+T*.5,m.halo.material.opacity=T*S*.32;const w=.45+T*1.25;m.halo.scale.set(w,w,1),m.shock.material.opacity=T*(1-_)*.46;const D=.25+Math.pow(_,.62)*3.4;m.shock.scale.set(D,D,1),m.loops.forEach((P,C)=>{P.material.opacity=T*(.32-C*.065)});const E=m.particles.geometry.attributes.position.array,b=rt.clamp((c.simulation?.cmeVelocityKms||2200)/2200,.55,2.2);for(let P=0;P<m.particleDirections.length/3;P++){const C=P*3,L=.18+Math.pow(_,.58)*(1.25+P%17*.045)*b;E[C]=m.particleDirections[C]*L,E[C+1]=m.particleDirections[C+1]*L,E[C+2]=m.particleDirections[C+2]*L}m.particles.geometry.attributes.position.needsUpdate=!0,m.particles.material.opacity=T*.64}else if(c.visual==="stellar-collapse"){const _=f,M=rt.smoothstep(_,.32,.68),T=rt.smoothstep(_,.04,.2)*(1-rt.smoothstep(_,.3,.52));m.starCore.material.opacity=(1-M)*(.58+T*.42);const S=Math.max(.025,.34*(1-M*.94)+T*.24);m.starCore.scale.set(S,S,1);const w=rt.clamp((c.simulation?.dustOpticalDepth||2)/8,.16,.68);m.shroud.material.opacity=rt.smoothstep(_,.18,.46)*(1-rt.smoothstep(_,.74,1))*w;const D=.32+_*1.45;m.shroud.scale.set(D,D,1);const E=m.dust.geometry.attributes.position.array,b=rt.clamp((c.simulation?.ejectedEnvelopeFraction||.08)/.08,.45,1.8);for(let P=0;P<m.dustDirections.length/3;P++){const C=P*3,L=.1+rt.smoothstep(_,.16,.82)*(.32+P%19*.018)*b;E[C]=m.dustDirections[C]*L,E[C+1]=m.dustDirections[C+1]*L,E[C+2]=m.dustDirections[C+2]*L}m.dust.geometry.attributes.position.needsUpdate=!0,m.dust.material.opacity=rt.smoothstep(_,.22,.48)*(1-rt.smoothstep(_,.82,1))*.46,m.remnantHole.visible=M>.72,m.remnantHole.visible&&Qn(m.remnantHole,.58+M*.34)}else if(c.visual==="pulsar"){const _=f,M=c.simulation?.pulsePhases?.reduce((E,b,P)=>{const C=c.simulation.pulseWeights?.[P]??1,L=Math.abs(_-b);return Math.max(E,Math.exp(-L*L*1200)*C)},0)||0,T=Math.max(Math.pow(Math.sin(_*Math.PI),.45),M),S=c.type==="pulsar-glitch"?.22:1,w=m.jetPowerScale||1;m.core.material.opacity=Math.min(1,T*(.82+M*.18)),m.halo.material.opacity=Math.min(.58,T*.16*S*Math.sqrt(w)),m.nebula.material.opacity=Math.min(.34,T*.095*S*Math.sqrt(w));const D=1.05+M*.52+(w-1)*.18;m.halo.scale.set(D,D,1),m.jets.material.opacity=T*.18*S,m.fieldLines.forEach((E,b)=>{E.material.opacity=T*(.055-b*.007)*S}),c.group.userData.intensity=T}else if(c.visual==="black-hole-merger"){const _=f,M=.68,T=_>=M;m.holeA.visible=!T,m.holeB.visible=!T,m.remnantHole.visible=T&&x>0;const S=Math.min(1,_/M),w=k=>Math.PI*2*(1.15*k+4.1*Math.pow(k,3)),D=k=>.12+2.45*Math.pow(1-k,.72),E=w(S),b=D(S);m.holeA.position.set(Math.cos(E)*b,Math.sin(E)*b,Math.sin(E*.5)*.09),m.holeB.position.set(-Math.cos(E)*b,-Math.sin(E)*b,-Math.sin(E*.5)*.09);const P=(k,q)=>{const ft=k.geometry.attributes.position.array;for(let ct=0;ct<84;ct++){const X=Math.max(0,S-(83-ct)*(.0028+S*9e-4)),J=w(X),ut=D(X);ft[ct*3]=q*Math.cos(J)*ut,ft[ct*3+1]=q*Math.sin(J)*ut,ft[ct*3+2]=q*Math.sin(J*.5)*.09}k.geometry.attributes.position.needsUpdate=!0,k.material.opacity=T?0:rt.smoothstep(_,.02,.22)*.34};P(m.trailA,1),P(m.trailB,-1);const C=rt.clamp((_-M)/(1-M),0,1),L=Math.exp(-C*7)*Math.sin(C*38);m.remnantHole.scale.set(1.24+L*.07,1.24-L*.045,1.24),Qn(m.holeA,.62+S*.38),Qn(m.holeB,.62+S*.38),Qn(m.remnantHole,.74+Math.exp(-C*4)*.34,x);const F=T?Math.exp(-C*18):0;m.mergerGlow.material.opacity=F*(m.gasRich?.48:.13);const U=.3+C*(m.gasRich?3.6:2.4);m.mergerGlow.scale.set(U,U,1),m.gasEcho.material.opacity=m.gasRich?rt.smoothstep(C,.02,.12)*(1-rt.smoothstep(C,.3,.92))*.34:0;const N=.35+Math.pow(C,.62)*4.2;m.gasEcho.scale.set(N,N,1),m.waveHalos.forEach((k,q)=>{const ft=q*.12,ct=rt.clamp((C-ft)/(1-ft),0,1);k.visible=T&&ct>0;const X=.38+Math.pow(ct,.7)*(8.8+q*.6);k.scale.set(X,X,1),k.material.opacity=Math.pow(Math.sin(ct*Math.PI),.78)*(.29-q*.045)}),m.wavefronts.forEach((k,q)=>{const ft=q*.075,ct=rt.clamp((C-ft)/(1-ft),0,1);k.visible=T&&ct>0,k.scale.setScalar(.28+Math.pow(ct,.72)*(7.4+q*.34)),k.material.opacity=Math.pow(Math.sin(ct*Math.PI),.72)*.19*(1-q*.08)});const G=m.waveDust.geometry.attributes.position.array,z=.22+Math.pow(C,.72)*8.6;for(let k=0;k<m.waveDirections.length/3;k++){const q=k*3,ft=m.waveDirections[q],ct=m.waveDirections[q+1],X=m.waveDirections[q+2],J=1+(ft*ft-X*X)*.085*Math.sin(C*Math.PI*5);G[q]=ft*z*J,G[q+1]=ct*z*J,G[q+2]=X*z*J}m.waveDust.geometry.attributes.position.needsUpdate=!0,m.waveDust.material.opacity=T?Math.pow(Math.sin(C*Math.PI),.62)*.5:0;const $=rt.smoothstep(C,.08,1)*rt.clamp((c.simulation?.recoilKms||c.recoilKms||500)/720,.22,2.2);m.remnantHole.position.copy(m.recoilVector).multiplyScalar($);const nt=m.recoilTrail.geometry.attributes.position.array;nt[0]=0,nt[1]=0,nt[2]=0,nt[3]=m.remnantHole.position.x,nt[4]=m.remnantHole.position.y,nt[5]=m.remnantHole.position.z,m.recoilTrail.geometry.attributes.position.needsUpdate=!0,m.recoilTrail.material.opacity=T?(1-C*.72)*.28*x:0}}),s.visible=l,o}function E_(n,t){const{cosmicEventGroup:e,prefersReducedMotion:i,cosmicEvents:s,camera:r}=t;!e.visible||i||s.forEach(a=>{if(!a.group.visible)return;const o=a.group.userData.phase,l=a.group.userData.effect;if(a.visual==="supernova"||a.visual==="nova"||a.visual==="kilonova")l.innerFlash.material.rotation=n*7e-5,l.photosphere.material.rotation=-n*35e-6,l.ejecta.rotation.y=Math.sin(n*21e-5)*.035;else if(a.visual==="tidal-disruption")l.disk.material.rotation=n*.0014,l.debris.rotation.y=Math.sin(n*17e-5)*.08,es(l.hole,n,l.hole.userData.spinDirection);else if(a.visual==="stellar-flare")l.loops.forEach((c,u)=>{c.rotation.z=Math.sin(n*9e-4+u)*.16}),l.particles.rotation.y=n*22e-5;else if(a.visual==="stellar-collapse")l.remnantHole.visible&&es(l.remnantHole,n,l.remnantHole.userData.spinDirection);else if(a.visual==="pulsar"){const c=a.simulation?.spinPeriodMs,u=c?rt.clamp(80/c,.45,4.8):a.simulation?.model==="magnetar-giant-flare"?.72:1,d=a.simulation?.model==="pulsar-glitch"&&o>=.46?1+Math.min(.12,a.simulation.fractionalFrequencyJump*15e3):1;l.rotor.rotation.y=n*.0024*u*d;const p=new ci,g=new B,x=new B(0,1,0);l.rotor.getWorldQuaternion(p),a.group.getWorldPosition(g),x.applyQuaternion(p).normalize();const v=r.position.clone().sub(g).normalize(),h=Math.pow(Math.abs(x.dot(v)),14),f=rt.clamp(u,.55,3.2),m=.52+Math.pow(Math.max(0,Math.sin(n*.012*f)),10)*.48,_=a.type==="pulsar-glitch"?.16:1;l.jets.material.opacity=a.group.userData.intensity*(.34+h*.58)*m*_,l.sweepGlow.material.opacity=a.group.userData.intensity*h*m*.78*_;const M=.5+h*1.8;l.sweepGlow.scale.set(M,M,1),l.knots.forEach(T=>{const S=(n*55e-5+T.userData.offset)%1;T.position.set(0,T.userData.side*(.18+S*2.45),0),T.material.opacity=a.group.userData.intensity*Math.sin(S*Math.PI)*(.12+h*.55)*_}),l.fieldLines.forEach((T,S)=>{T.rotation.y+=.006+S*.001})}else a.visual==="black-hole-merger"&&(es(l.holeA,n,l.holeA.userData.spinDirection),es(l.holeB,n,l.holeB.userData.spinDirection),es(l.remnantHole,n,l.remnantHole.userData.spinDirection))})}const b_=(n,t,e)=>Math.min(e,Math.max(t,n));function T_(n,t,e){if(!n?.length||t<=0)return[];const i=Array.from(n,(o,l)=>l).sort((o,l)=>n[o]-n[l]),s=Math.max(t,Math.floor(i.length*.42)),r=i.slice(0,s),a=[];for(let o=0;o<Math.min(t,r.length);o++){const l=Math.floor(o/t*r.length),c=Math.max(l+1,Math.floor((o+1)/t*r.length)),u=Math.min(c-l-1,Math.floor(e()*(c-l)));a.push(r[l+u])}return a}function A_(n){return!n||!(n.remnantType==="black-hole"||n.model==="black-hole-binary"||n.model==="collapsar-jet"||n.model==="failed-collapse")||!Number.isFinite(n.remnantMass)?null:Math.max(2.5,n.remnantMass)}function w_(n,t=100){const e=Math.max(2.5,Number(n)||2.5);return b_(67+3*Math.log10(e/10),64,t)}function R_(n){const t=Ks(n),e=n.cosmicFate?.type!=="heat-death",i=!e||n.cosmicFate.outcomeExponent>n.lastStarDeathExponent,s=i?Math.max(470,t-22):1/0,r=i?Math.min(1e3,t+55):1/0;return{energyStart:s,energyEnd:r,fateStart:e?n.cosmicFate.onsetAt:1/0,fateEnd:e?1e3:1/0}}function C_({universe:n,civilizationData:t,civilizationSimulation:e,cosmicEvents:i}){if(!e||t.length===0)return;const s=e,r=pn(n.seed,9241),a=s.habitatRemnantIndices.length,o=t.length,l=6;for(let C=0;C<a;C++){const L=[],F=C*3;for(let U=0;U<a;U++){if(U===C)continue;const N=U*3,G=Math.hypot(s.habitatPositions[F]-s.habitatPositions[N],s.habitatPositions[F+1]-s.habitatPositions[N+1],s.habitatPositions[F+2]-s.habitatPositions[N+2]);(L.length<l||G<L[L.length-1].distance)&&(L.push({node:U,distance:G}),L.sort((z,Z)=>z.distance-Z.distance),L.length>l&&L.pop())}s.adjacency[C]=Uint16Array.from(L.map(U=>U.node))}const c=new Int16Array(a);c.fill(-1);const u=new Float32Array(a),d=new Uint8Array(o),p=new Float32Array(o*o),g=new Int8Array(o*o),x=new Int16Array(a);x.fill(-1),t.forEach((C,L)=>{x[C.homeNodeIndex]=L});const v=new Uint16Array(o),h=Array(o).fill("自主扩张"),f=new Uint8Array(a),m=R_(n),_=Math.min(m.energyStart,m.fateStart);s.end=1e3;const M=i.slice().sort((C,L)=>C.impactAt-L.impactAt),T=new Map(M.map(C=>[C,new Map])),S=M.flatMap(C=>(C.civilizationImpacts=[],(C.civilizationNodeImpacts||[]).map(L=>({event:C,impact:L})))).sort((C,L)=>C.impact.at-L.impact.at||C.impact.nodeIndex-L.impact.nodeIndex),w=(C,L)=>C*o+L;for(let C=0;C<o;C++)for(let L=C+1;L<o;L++){const F=t[C],U=t[L],N=(F.cooperation+U.cooperation)*.28-(F.aggression+U.aggression)*.24+et(r,-.16,.16);p[w(C,L)]=N,p[w(L,C)]=N}const D=(C,L,F,U)=>{p[w(C,L)]=F,p[w(L,C)]=F,g[w(C,L)]=U,g[w(L,C)]=U},E=C=>{let L=0;for(let F=0;F<a;F++)c[F]===C&&L++;return L},b=(C,L,F)=>{const{nodeIndex:U,severity:N,permanent:G,destructionRoll:z,kind:Z="damage"}=L;G&&(f[U]=1);const $=c[U];if($<0)return;const nt=t[$];if(nt.highDimensional&&F>=nt.ascensionAt)return;if(Z==="recovery"){f[U]||(u[U]=Math.min(1.35,u[U]+N),h[$]=`${C.label} 后恢复`);return}const k=T.get(C);let q=k.get($);q||(q={initialCount:E($),affectedNodes:new Set,lostNodes:new Set,weakenedNodes:new Set,effectiveLoss:0,collapse:!1},k.set($,q)),q.affectedNodes.add(U);const ft=rt.clamp(N*.62/Math.max(.65,nt.resilience),0,.9);if(G||z<ft)c[U]=-1,u[U]=0,q.lostNodes.add(U),q.weakenedNodes.delete(U),q.effectiveLoss+=1;else{const X=N*.46;u[U]*=Math.max(.18,1-X),q.lostNodes.has(U)||q.weakenedNodes.add(U),q.effectiveLoss+=X}q.collapse||=E($)===0,h[$]=C.label};let P=0;for(;P<S.length&&S[P].impact.at<s.start;){const{impact:C}=S[P];C.kind!=="recovery"&&C.permanent&&(f[C.nodeIndex]=1),P++}for(let C=s.start;C<=s.end;C+=s.step){for(t.forEach((k,q)=>{if(!(d[q]||C<k.birth)){if(d[q]=1,f[k.homeNodeIndex]){h[q]="母星在文明诞生前失去宜居条件";return}c[k.homeNodeIndex]=q,u[k.homeNodeIndex]=.34,h[q]="母星文明进入星际阶段"}});P<S.length&&S[P].impact.at<=C;){const{event:k,impact:q}=S[P];b(k,q,C),P++}const L=new Uint8Array(o),F=new Uint8Array(o);for(let k=0;k<o;k++)for(let q=k+1;q<o;q++){const ft=g[w(k,q)];ft>0&&(L[k]++,L[q]++),ft<0&&(F[k]++,F[q]++)}for(let k=0;k<a;k++){const q=c[k];if(q<0)continue;const ft=t[q],ct=1+L[q]*.045-F[q]*.028;u[k]+=(.032+ft.resilience*.018)*ct*(1-u[k]),u[k]=rt.clamp(u[k],0,1.35)}const U=new Uint8Array(o*o);for(let k=0;k<a;k++){const q=c[k];q<0||s.adjacency[k].forEach(ft=>{const ct=c[ft];ct<0||ct===q||(U[w(q,ct)]=1,U[w(ct,q)]=1)})}for(let k=0;k<o;k++)for(let q=k+1;q<o;q++){let ft=p[w(k,q)],ct=g[w(k,q)];if(U[w(k,q)]){const X=t[k],J=t[q];ft+=(X.cooperation+J.cooperation-1)*.026,ft-=(X.aggression+J.aggression-.82)*.023,ft+=et(r,-.012,.012),ct===0&&ft>.3&&(ct=1),ct===0&&ft<-.26&&(ct=-1),ct===1&&ft<.08&&(ct=0),ct===-1&&ft>-.04&&(ct=0)}else ft*=.992,ct===1&&ft<.1&&(ct=0),ct===-1&&ft>-.08&&(ct=0);D(k,q,rt.clamp(ft,-.95,.95),ct)}const N=Array.from({length:o},()=>[]);for(let k=0;k<a;k++)c[k]>=0&&N[c[k]].push(k);if(t.forEach((k,q)=>{const ft=N[q];if(!d[q]||ft.length===0||C>=_)return;const ct=1+Math.floor(k.expansionRate+L[q]*.34);for(let X=0;X<ct;X++){const J=[];if(ft.forEach(ne=>{s.adjacency[ne].forEach(I=>{!f[I]&&c[I]!==q&&J.push([ne,I])})}),J.length===0)break;const[ut,bt]=J[Math.floor(r()*J.length)],vt=c[bt];if(vt<0){if(x[bt]>=0&&x[bt]!==q&&!d[x[bt]])continue;r()<.18+k.expansionRate*.19+L[q]*.025&&(c[bt]=q,u[bt]=Math.max(.14,u[ut]*.34),ft.push(bt),h[q]=L[q]>0?"协作网络推动殖民":"殖民前沿扩张");continue}const Ot=g[w(q,vt)];if(Ot>0){u[ut]=Math.min(1.35,u[ut]+.018),u[bt]=Math.min(1.35,u[bt]+.012),h[q]=`与${t[vt].name}交流`,h[vt]=`与${k.name}交流`;continue}if(Ot<0){const ne=u[ut]*(.72+k.aggression*.76+r()*.35),I=u[bt]*(.84+t[vt].resilience*.52+r()*.28);ne>I?(c[bt]=q,u[bt]=Math.max(.08,Math.min(.48,(ne-I)*.5)),h[q]=`与${t[vt].name}争夺边界`,h[vt]=`边界被${k.name}突破`):(u[ut]*=.84,u[bt]*=.92,h[q]=`对${t[vt].name}的进攻受挫`)}else if(r()<k.aggression*.035){const ne=p[w(q,vt)]-.055;D(q,vt,ne,ne<-.26?-1:0)}}}),C>=Math.min(m.energyStart,m.fateStart)){const k=rt.smoothstep(C,m.energyStart,m.energyEnd),q=Number.isFinite(m.fateStart)?rt.smoothstep(C,m.fateStart,m.fateEnd):0,ft=Math.max(k,q),ct=C>=m.energyEnd||C>=m.fateEnd,X=q>k?n.cosmicFate.label:"恒星能源枯竭";for(let J=0;J<a;J++){const ut=c[J];ut<0||t[ut].highDimensional&&C>=t[ut].ascensionAt||(u[J]-=.004+ft*.052,(u[J]<=.035||ct)&&(c[J]=-1,u[J]=0,h[ut]=X))}}const G=new Uint16Array(o),z=new Float32Array(o);for(let k=0;k<a;k++){const q=c[k];q<0||(G[q]++,z[q]+=u[k])}const Z=new Int8Array(o),$=new Uint8Array(o),nt=new Uint8Array(o);for(let k=0;k<o;k++)Z[k]=Math.sign(G[k]-v[k]),$[k]=d[k]&&G[k]>0?1:0,nt[k]=t[k].highDimensional&&C>=t[k].ascensionAt?1:0,v[k]=G[k];s.snapshots.push({time:C,owners:c.slice(),counts:G,populations:z,trends:Z,active:$,ascended:nt,relations:g.slice(),relationScores:p.slice(),causes:h.slice()})}M.forEach(C=>{const L=Array.from(T.get(C).entries()).map(([U,N])=>({speciesIndex:U,lossFraction:rt.clamp(N.effectiveLoss/Math.max(1,N.initialCount),0,1),collapse:N.collapse,affectedDomains:N.affectedNodes.size,lostDomains:N.lostNodes.size,weakenedDomains:N.weakenedNodes.size}));C.civilizationImpacts=L;const F=L.length?L.map(U=>{const N=t[U.speciesIndex].name;return U.collapse?`${N} 灭绝`:U.lostDomains>0?U.weakenedDomains>0?`${N} 损失 ${U.lostDomains} 个疆域，另有 ${U.weakenedDomains} 个受损`:`${N} 损失 ${U.lostDomains} 个疆域`:`${N} 的 ${U.weakenedDomains} 个疆域受损`}).join("，"):"未波及当时存在的文明疆域";C.outcome=`${C.systemOutcome}；${F}`})}function P_(n,t){if(!n?.snapshots.length)return null;const e=n,i=rt.clamp(Math.floor((t-e.start)/e.step),0,e.snapshots.length-1);return e.snapshots[i]}function D_(n,t,e,i){let s=1,r=1/0;const a=[],o=e[t];return i.forEach(l=>{if(n<l.impactAt||o?.highDimensional&&l.impactAt>=o.ascensionAt)return;const c=l.civilizationImpacts.find(u=>u.speciesIndex===t);c&&(s*=1-c.lossFraction,c.collapse&&(r=Math.min(r,l.impactAt)),a.push(l.label))}),{capacityFactor:s,collapsedAt:r,lossFraction:1-s,causes:a}}function L_(n,t,e,i){return e.map((s,r)=>{const a=D_(n,r,e,i),o=!!t?.active[r],l=!!t?.ascended[r]&&o,c=[],u=[];return e.forEach((d,p)=>{if(p===r||!t?.active[p])return;const g=t.relations[r*e.length+p];g>0&&c.push(d.name),g<0&&u.push(d.name)}),{alive:o,ascended:l,count:t?.counts[r]||0,trend:t?.trends[r]||0,eventState:a,friendlyNames:c,conflictNames:u}})}function I_(n,t,e){if(!n)return null;let i=null,s=-1;for(let r=0;r<e;r++)for(let a=r+1;a<e;a++){const o=t[r],l=t[a];if(!o?.alive||!l?.alive||o.ascended||l.ascended)continue;const c=n.relations[r*e+a];if(c===0)continue;const d=Math.abs(n.relationScores[r*e+a])+(c<0?2:0);d<=s||(s=d,i={speciesA:r,speciesB:a,relationship:c<0?"conflict":"coexistence"})}return i}function U_(n,t,e){return Math.min(e,Math.max(t,n))}function F_(n,t,e){if(t<=0||e<=0)return 0;const i=Math.exp(-t);let s=1,r=0;for(;s>i&&r<=e;)s*=Math.max(1e-12,n()),r++;return Math.min(e,Math.max(0,r-1))}function N_(n,t,e){const i=U_(.38+t.stars*.16+t.structureEfficiency*.18,.55,2.35);return n.flatMap(s=>{const r=s.maximumOccurrences||1,o=1+F_(e,(s.repeatRate||0)*i,r-1),l=s.repeatSpacing||Math.max(12,s.duration*.72),{repeatRate:c,repeatSpacing:u,maximumOccurrences:d,...p}=s,g=Math.min(998-p.duration,p.latestStart??1/0);if(p.start>g)return[];const x=Array.from({length:o},(v,h)=>{if(h===0)return{...p,occurrenceIndex:h,occurrenceCount:o};const f=l*h*(.82+e()*.36),m=p.start+f;return m>g?null:{...p,start:m,label:`${p.label}（第 ${h+1} 次）`,occurrenceIndex:h,occurrenceCount:o}}).filter(Boolean);return x.map(v=>({...v,occurrenceCount:x.length}))}).sort((s,r)=>s.start-r.start||s.occurrenceIndex-r.occurrenceIndex)}const se=n=>document.querySelector(n);function Rh(n){const t=n.cosmicFate;se("#universe-id").textContent=`#${n.seed}`,se("#explore-id").textContent=`#${n.seed}`,se("#speed-value").textContent=`${n.speed.toFixed(2)} × 现实宇宙`,se("#gravity-value").textContent=`${n.gravity.toFixed(2)} × 现实宇宙`,se("#fine-structure-value").textContent=`${n.fineStructure.toFixed(3)} × 现实宇宙`,se("#mass-ratio-value").textContent=`${n.massRatio.toFixed(3)} × 现实宇宙`,se("#expansion-value").textContent=`${n.expansionRate.toFixed(2)} × 现实宇宙`,se("#dark-energy-value").textContent=`${(n.darkEnergyDensity*100).toFixed(1)}%`,se("#fluctuation-value").textContent=`${n.primordialFluctuation.toFixed(2)} × 现实宇宙`,se("#cmb-value").textContent=`${n.cmbTemperature.toFixed(2)} K`,se("#elements-value").textContent=`${n.elements} 种`,se("#stars-value").textContent=s_(n.stars),se("#life-probability-value").textContent=e_(n.lifeProbability),se("#civilizations-value").textContent=n_(n.civilizations),se("#civilizations-value").title=`宏观估算值；时间轴固定跟踪 ${n.trackedSpeciesCount} 个主要文明样本，以保证每个种子都有可观察的文明演化`,se("#galaxy-type-value").textContent=No[n.galaxyType],se("#arm-count-value").textContent=t_(n.galaxyType,n.armCount),se("#black-hole-value").textContent=n.hasCentralBlackHole?"存在":"未形成",se("#nucleus-value").textContent=n.hasCentralBlackHole?n.activeNucleus?"活动 · 吸积中":"宁静":"不适用",se("#stellar-window-value").textContent=t.outcomeExponent<=n.lastStarDeathExponent?"结局前未抵达":`约 10^${n.lastStarDeathExponent.toFixed(1)} 年`,se("#galaxy-hue-value").textContent=Q0(n.hue),se("#evaporation-value").textContent=t.outcomeExponent<n.blackHoleEvaporationExponent?"结局前未抵达":`约 10^${n.blackHoleEvaporationExponent} 年`,se("#dark-energy-model-value").textContent=t.modelLabel,se("#dark-energy-model-value").title=t.modelDescription,se("#dark-energy-eos-value").textContent=`w₀ ${t.w0.toFixed(2)} · wₐ ${t.wa.toFixed(2)} · 有界 BA`,se("#vacuum-value").textContent=$0(t),se("#lifetime-value").textContent=`${t.label} · ${q0(t)}`;const e=Ks(n),i=se("#timeline-stellar-label"),s=t.type==="heat-death"||e<t.onsetAt;i.textContent="恒星熄灭",i.style.left=`${e/10}%`,i.style.display=s?"":"none";const r=se("#timeline-late-label");r.textContent=t.type==="heat-death"?"黑洞时代":"临界阶段",r.style.left=`${(t.type==="heat-death"?845:t.onsetAt)/10}%`,se("#timeline-final-label").textContent=t.shortLabel,se("#cosmic-timeline").setAttribute("aria-label",`从大爆炸到${t.label}的宇宙时间`),se("#universe-note").textContent=Al[n.seedValue%Al.length],se("#galaxy-name").textContent=`${wl[n.seedValue%wl.length]}星系`;const a=(8+n.stars*4.7).toFixed(1);se("#galaxy-meta").textContent=`${No[n.galaxyType]} · 直径 ${a} 万光年`}const Fe=n=>document.querySelector(n);let Ul="",Fl=null;const O_=[[0,18],[18,55],[55,145],[145,245],[245,340],[340,470]];function Lr(n,t,e){const i=document.createElement("i");i.className=`scale-${e}`,i.style.left=`${t/10}%`,i.dataset.position=t.toFixed(3),n.appendChild(i)}function B_(n){const t=Fe("#timeline-scale");if(!t)return;const e=n?.cosmicFate,i=Math.min(999,Math.max(471,e?.onsetAt||850)),s=e?.type==="heat-death"?[[470,570],[570,650],[650,680],[680,845],[845,950],[950,1e3]]:[[470,i],[i,1e3]],r=[...O_,...s].filter(([a,o])=>o>a);t.replaceChildren(),r.forEach(([a,o],l)=>{const c=o-a,u=Math.max(1,Math.min(4,Math.round(c/48))),d=c/u;l>0&&Lr(t,a,"break");for(let p=0;p<u;p++){const g=a+p*d;if((l===0||p>0)&&Lr(t,g,"tick scale-tick--major"),!(d<20))for(let x=2;x<=9;x++){const v=g+Math.log10(x)*d;Lr(t,v,x===2||x===5?"tick scale-tick--mid":"tick scale-tick--minor")}}}),Lr(t,1e3,"tick scale-tick--major")}function z_(){const n=Fe("#timeline-scale");n&&(n.classList.remove("is-entering"),n.offsetWidth,n.classList.add("is-entering"))}function Ch(n){const t=Fe("#timeline-scale");if(!t||t.clientWidth===0)return;const e=n/1e3*t.clientWidth,i=Math.min(58,t.clientWidth*.09);t.querySelectorAll(".scale-tick").forEach(s=>{const a=Number(s.dataset.position)/1e3*t.clientWidth-e,o=Math.max(0,1-Math.abs(a)/i),l=Math.sign(a)*o*i*.34,c=1+o*1.35;s.style.transform=`translateX(calc(-50% + ${l.toFixed(2)}px)) scaleY(${c.toFixed(3)})`})}function k_(){Fe("#timeline-scale")?.querySelectorAll(".scale-tick").forEach(n=>{n.style.transform=""})}function H_(n){Fe("#cosmic-timeline").value=n.position,Fe("#time-progress").style.width=`${n.position/10}%`,Fe("#timeline-value").textContent=n.label,Fe("#era-number").textContent=String(n.eraIndex+1).padStart(2,"0"),Fe("#era-name").textContent=n.era.name,Fe("#cosmic-time").textContent=n.label.replace("T+",""),Fe("#era-description").textContent=n.era.description,Fe(".explorer-title").style.setProperty("--cosmic-opacity",n.galaxyIdentityOpacity.toFixed(3))}function G_({position:n,simulationState:t,runtimeState:e,civilizationData:i}){e.forEach((a,o)=>{const l=i[o],c=document.querySelector(`[data-species="${o}"]`);if(!c)return;c.style.opacity=a.alive?"1":".18",c.classList.toggle("is-impacted",a.alive&&a.eventState.causes.length>0),c.classList.toggle("is-ascended",a.ascended);const u=[];t?.causes[o]&&u.push(t.causes[o]),a.friendlyNames.length&&u.push(`与 ${a.friendlyNames.join("、")} 友好交流`),a.conflictNames.length&&u.push(`与 ${a.conflictNames.join("、")} 冲突`),a.eventState.causes.length&&u.push(`受 ${a.eventState.causes.join("、")} 影响`),c.title=a.ascended?"1% 概率的高维转化：已脱离普通物质宿主":u.join("；"),c.querySelector("b").textContent=a.alive?a.ascended?"超维存续":`${a.count} 域${a.trend>0?" ↑":a.trend<0?" ↓":""}`:n<l.birth?"未诞生":"衰亡"});const s=e.filter(a=>a.alive).length,r=e.reduce((a,o)=>a+(o.alive&&!o.ascended?o.count:0),0);Fe("#civilization-panel").style.setProperty("--cosmic-opacity",s>0?"1":"0"),Fe("#civilization-summary").textContent=s>0?`${s} 种 · ${r} 域`:"尚未出现"}function V_(n,t=!1){if(n.key===Ul&&!t)return;Ul=n.key,Fe("#event-year").textContent=n.time,Fe("#event-text").textContent=n.text;const e=Fe("#event-feed");e.classList.remove("is-visible"),requestAnimationFrame(()=>e.classList.add("is-visible")),clearTimeout(Fl),Fl=setTimeout(()=>e.classList.remove("is-visible"),3200)}let zo=null;const W_=n=>document.querySelector(n);function X_(){zo=null}function Y_(n,t){if(!n||n===zo)return;zo=n;const e=W_("#civilization-legend"),i=t.length,s=new Map([...e.querySelectorAll(".civilization-item")].map(_=>[Number(_.dataset.species),_]));e.replaceChildren();const r=Int16Array.from({length:i},(_,M)=>M),a=_=>{let M=_;for(;r[M]!==M;)M=r[M];for(;r[_]!==_;){const T=r[_];r[_]=M,_=T}return M},o=(_,M)=>{const T=a(_),S=a(M);T!==S&&(r[Math.max(T,S)]=Math.min(T,S))};for(let _=0;_<i;_++)if(!(!n.active[_]||n.ascended[_]))for(let M=_+1;M<i;M++){if(!n.active[M]||n.ascended[M])continue;const T=_*i+M;n.relations[T]>0&&n.relationScores[T]>=.52&&o(_,M)}const l=new Map,c=[],u=[];for(let _=0;_<i;_++){if(!n.active[_]){c.push(_);continue}if(n.ascended[_]){u.push(_);continue}const M=a(_);l.has(M)||l.set(M,[]),l.get(M).push(_)}const d=[...l.values()],p=_=>_.reduce((M,T)=>M+n.counts[T],0),g=(_,M)=>{let T={kind:"neutral",state:0,strength:0};return _.forEach(S=>M.forEach(w=>{const D=S*i+w,E=n.relations[D],b=Math.abs(n.relationScores[D]);E!==0&&b>T.strength&&(T={kind:E<0?"conflict":"friendly",state:E,strength:b})})),T};d.sort((_,M)=>p(M)-p(_));const x=d.length?[d.shift()]:[];for(;d.length;){const _=x[x.length-1];let M=0,T=-1;d.forEach((S,w)=>{const D=g(_,S).strength;D>T&&(T=D,M=w)}),x.push(d.splice(M,1)[0])}const v={conflict:'<svg viewBox="0 0 16 16" aria-hidden="true"><path d="M3 3l10 10M13 3L3 13"/><path d="M2 5l3-3M11 14l3-3"/></svg>',friendly:'<svg viewBox="0 0 16 16" aria-hidden="true"><circle cx="6" cy="8" r="3.5"/><circle cx="10" cy="8" r="3.5"/></svg>',neutral:'<svg viewBox="0 0 16 16" aria-hidden="true"><path d="M2.5 8h3M10.5 8h3"/><circle cx="8" cy="8" r="1.25"/></svg>'},h=_=>_==="conflict"?"冲突":_==="friendly"?"友好":"中立",f=_=>{const M=_.slice().sort((T,S)=>n.counts[S]-n.counts[T])[0];return`#${t[M].color.toString(16).padStart(6,"0")}`},m=x.map((_,M)=>({members:_,number:String(M+1).padStart(2,"0"),accent:f(_)}));if(m.forEach((_,M)=>{const T=document.createElement("section");T.className="faction-block",T.style.setProperty("--faction",_.accent),T.setAttribute("aria-label",`阵营 ${_.number}`);const S=document.createElement("div");S.className="faction-header";const w=document.createElement("span");w.className="faction-identity",w.textContent=_.number,w.setAttribute("aria-hidden","true"),S.appendChild(w);const D=document.createElement("div");D.className="faction-relations";const E={conflict:[],friendly:[],neutral:[]};m.forEach((P,C)=>{if(C===M)return;const L=g(_.members,P.members);E[L.kind].push(P)}),["conflict","friendly","neutral"].forEach(P=>{const C=E[P];if(!C.length)return;const L=document.createElement("span");L.className=`faction-relation is-${P}`;const F=`阵营 ${_.number}${h(P)}：阵营 ${C.map(U=>U.number).join("、")}`;L.setAttribute("role","img"),L.setAttribute("aria-label",F),L.title=F,L.innerHTML=`${v[P]}<span>${C.map(U=>`<b style="--target-faction:${U.accent}">${U.number}</b>`).join("")}</span>`,D.appendChild(L)}),S.appendChild(D),T.appendChild(S);const b=document.createElement("div");b.className="faction-members",_.members.slice().sort((P,C)=>n.counts[C]-n.counts[P]||P-C).forEach(P=>{const C=s.get(P);C&&b.appendChild(C)}),T.appendChild(b),e.appendChild(T)}),u.length){const _=document.createElement("section");_.className="faction-block is-transcendent",_.setAttribute("aria-label","升维种群"),_.innerHTML='<div class="faction-header"><span class="faction-identity" aria-hidden="true">◇</span></div>';const M=document.createElement("div");M.className="faction-members",u.forEach(T=>{const S=s.get(T);S&&M.appendChild(S)}),_.appendChild(M),e.appendChild(_)}if(c.length){const _=document.createElement("div");_.className="faction-inactive",c.forEach(M=>{const T=s.get(M);T&&_.appendChild(T)}),e.appendChild(_)}}const Ht=n=>document.querySelector(n),hc=Ht("#universe"),ei=window.matchMedia("(prefers-reduced-motion: reduce)").matches,In=new _0({canvas:hc,antialias:!0,alpha:!1,powerPreference:"high-performance"});In.setPixelRatio(Math.min(devicePixelRatio,2));In.setSize(innerWidth,innerHeight);In.setClearColor(328968,1);In.outputColorSpace=Ne;In.toneMapping=Gl;In.toneMappingExposure=1.15;const na=new yd;na.fog=new ec(328968,.018);const Tn=new un(42,innerWidth/innerHeight,.1,200);Tn.position.set(0,.5,32);const gn=new M0(Tn,hc);gn.enableDamping=!0;gn.dampingFactor=.045;gn.enablePan=!1;gn.minDistance=8;gn.maxDistance=46;gn.autoRotate=!1;gn.enabled=!1;let Ae=new Xe,De=new Xe,Pn=new Xe,ri=new Xe,Pi=new Xe,wi=new Xe,ai=new Xe;na.add(Ae,De,Pn,ri,Pi,wi,ai);let Ct=null,_n="generator",We=null,ls=new Xt(0,0),Ir=new Xt(0,0),ko=new Ld;ko.params.Points.threshold=.12;let xs=null,Gs=[],cn=[],Mi=[],ln=null,ia=[],Ho=null,Ls=null,Go=null,Vo=null,ns=null,Hr=null,Ph=[],Vs=null,hs=null,Fs=null,Dh=null,Lh=null,$r=null,us=null,Ih=null,rs=null,An=null,hn=null,Te=null,we=0,Ln=!1,Uh=1,Nl=performance.now(),Di=[];function Wo({random:n,massSolar:t,birthAt:e,sourceIndex:i=null,isCentral:s=!1,originEventId:r=null}){const a=rt.clamp((Math.log10(t)-.6)/8.4,0,1),o=s?.9:.3+a*.34,l=kr({color:s?16763286:n()>.35?16758652:12179455,tilt:et(n,-.38,.38),phase:n()*Math.PI*2,visualScale:s?1.14:1,intensity:0}),c=new he(new ce({map:Ve(),color:7315404,transparent:!0,opacity:0,depthWrite:!1,blending:Bt}));c.scale.set(1.2,1.2,1);const u=new he(new ce({map:Ve(),color:15267071,transparent:!0,opacity:0,depthWrite:!1,blending:Bt}));if(u.scale.set(.2,.2,1),l.add(c,u),s)l.position.set(0,0,0);else if(Number.isInteger(i)){const p=i*3;l.position.set(us[p],us[p+1],us[p+2])}const d=w_(t,Ct.blackHoleEvaporationExponent);return l.scale.setScalar(o),l.visible=!1,Object.assign(l.userData,{baseScale:o,birthAt:e,evaporationAt:mn(10**d,Ct),evaporationExponent:d,massSolar:t,sourceIndex:i,isCentral:s,originEventId:r,accretionStrength:s?Ct.activeNucleus?1.08:.56:.68+a*.18,hawkingGlow:c,finalPulse:u,spinDirection:n()<.5?-1:1}),ia.push(l),ri.add(l),l}function vi(n){n.traverse(t=>{t.geometry&&t.geometry.dispose(),t.material&&(Array.isArray(t.material)?t.material:[t.material]).forEach(i=>i.dispose())}),n.clear()}function Fh(){vi(Ae);const n=pn(Ct.seed),t=Math.min(10500,Math.floor(5200+Ct.stars*900)),e=new Float32Array(t*3),i=new Float32Array(t*3),s=new Float32Array(t),r=new Vt().setHSL(Ct.hue,.55,.66),a=new Vt(16767402);for(let g=0;g<t;g++){const x=Math.pow(n(),.56)*9.2,v=n()*Math.PI*2,h=Math.acos(2*n()-1),f=Math.sin(v*Ct.armCount+x)*.48;e[g*3]=x*Math.sin(h)*Math.cos(v)+f,e[g*3+1]=x*Math.cos(h)*.82,e[g*3+2]=x*Math.sin(h)*Math.sin(v);const m=r.clone().lerp(a,Math.pow(n(),2.3)),_=.45+n()*.7;i[g*3]=m.r*_,i[g*3+1]=m.g*_,i[g*3+2]=m.b*_,s[g]=n()}const o=new ee;o.setAttribute("position",new Qt(e,3)),o.setAttribute("color",new Qt(i,3)),o.setAttribute("aSize",new Qt(s,1));const l=new Ke({size:.065,map:Pe(),alphaTest:.015,vertexColors:!0,transparent:!0,opacity:.86,depthWrite:!1,blending:Bt}),c=new nn(o,l);Ae.add(c);const u=new sc(9.9,3),d=new nc(new wd(u),new Rn({color:12175324,transparent:!0,opacity:.032}));Ae.add(d);const p=new fn(new rc(10.7,.007,3,220),new $s({color:14221151,transparent:!0,opacity:.25}));p.rotation.set(1.24,.18,.4),Ae.add(p),Ae.rotation.set(.15,-.3,-.08),Ae.scale.setScalar(.01),We={type:"birth",start:performance.now(),duration:ei?1:1300}}function Nh(){vi(De),vi(Pn),vi(ri),vi(Pi),vi(wi),vi(ai),Gs=[],cn=[],Mi=[],ln=null;const n=pn(Ct.seed,91),t=17e3,e=new Float32Array(t*3),i=new Float32Array(t*3);An=new Float32Array(t);const s=new Vt(16770996),r=new Vt().setHSL(Ct.hue,.65,.56),a=Ks(Ct),o=Math.min(a,mn(4e10,Ct)),l=Array.from({length:4+Ct.seedValue%3},(v,h)=>({x:et(n,-8,8)+h*.35,y:et(n,-.6,.6),z:et(n,-6,6),spread:et(n,1.1,3.1)}));for(let v=0;v<t;v++){let h=0,f=0,m=0;if(Ct.galaxyType===0){const S=n();if(S<.2)h=ae(n)*3.7,m=ae(n)*.42,f=ae(n)*.18;else if(S<.29)h=ae(n)*1.7,m=ae(n)*1.7,f=ae(n)*.65;else{const w=3+Math.pow(n(),.72)*11,E=v%2*Math.PI+(w-3)*.46+ae(n)*(.12+w*.012),b=ae(n)*(.18+w*.025);h=Math.cos(E)*w+b,m=Math.sin(E)*w+b,f=ae(n)*(.12+w*.018)}}else if(Ct.galaxyType===1){const S=7+Ct.seedValue%5,w=Math.pow(n(),.68)*14,D=v%S,E=D/S*Math.PI*2+w*.31+ae(n)*(.26+w*.018),b=1+Math.sin(w*2.7+D*1.9)*.11;h=Math.cos(E)*w*b+ae(n)*.25,m=Math.sin(E)*w*b+ae(n)*.25,f=ae(n)*(.18+w*.028)}else if(Ct.galaxyType===2){const S=n(),w=n()*Math.PI*2;let D;S<.72?D=8.4+ae(n)*.78:S<.9?D=Math.abs(ae(n))*2.1:D=4+n()*8,h=Math.cos(w)*D*1.15+ae(n)*.13,m=Math.sin(w)*D+ae(n)*.13,f=ae(n)*(.18+D*.012)}else if(Ct.galaxyType===3){const S=Math.pow(n(),.38);h=ae(n)*5.5*S,f=ae(n)*2.35*S,m=ae(n)*3.75*S;const w=Math.hypot(h,f,m);if(w>13.5){const D=13.5/w;h*=D,f*=D,m*=D}}else if(n()<.13){const S=et(n,-12,12);h=S,m=Math.sin(S*.24)*2.7+ae(n)*.7,f=ae(n)*.55}else{const S=l[Math.floor(n()*l.length)];h=S.x+ae(n)*S.spread,f=S.y+ae(n)*S.spread*.38,m=S.z+ae(n)*S.spread*.72}e[v*3]=h,e[v*3+1]=f,e[v*3+2]=m;const _=Math.hypot(h,f,m),M=s.clone().lerp(r,Math.min(1,_/12)),T=.55+n()*.85;i[v*3]=M.r*T,i[v*3+1]=M.g*T,i[v*3+2]=M.b*T,An[v]=o+Math.pow(n(),1.9)*(a-o)}us=e.slice(),Ih=i.slice(),rs=d_(us,Ct);const c=new ee;c.setAttribute("position",new Qt(e,3)),c.setAttribute("color",new Qt(i,3));const u=new nn(c,new Ke({size:.09,map:Pe(),alphaTest:.015,vertexColors:!0,transparent:!0,opacity:.9,depthWrite:!1,blending:Bt}));De.add(u),xs=u;const p=[{scale:4.3,opacity:.32},{scale:3.25,opacity:.22},{scale:1.55,opacity:.055},{scale:6.4,opacity:.46},{scale:1.2,opacity:.035}][Ct.galaxyType],g=new he(new ce({map:Ve(),color:16768164,transparent:!0,opacity:0,depthWrite:!1,blending:Bt}));if(g.scale.set(p.scale,p.scale,1),g.userData.isCoreGlow=!0,g.userData.profile=p,De.add(g),Ct.activeNucleus){const v=new he(new ce({map:Ve(),color:14281983,transparent:!0,opacity:0,depthWrite:!1,blending:Bt}));v.scale.set(.72,.72,1),v.userData.isAgnGlow=!0,De.add(v);const h=new ee().setFromPoints([new B(0,-2.6,0),new B(0,2.6,0)]),f=new bi(h,new Rn({color:11065599,transparent:!0,opacity:0,depthWrite:!1,blending:Bt}));f.rotation.z=.3,f.userData.isAgnJet=!0,De.add(f)}const x=[.72,.92,.62,.35,.78];De.rotation.set(x[Ct.galaxyType],-.25+Ct.galaxyType*.06,.06),De.visible=!1,q_(e),K_(),$_(e),C_({universe:Ct,civilizationData:cn,civilizationSimulation:ln,cosmicEvents:Di}),j_(),B_(Ct)}function q_(n){const t=pn(Ct.seed,771);ia=[];const e=4800,i=new Float32Array(e*3),s=new Float32Array(e*3);Ls=new Float32Array(e*3),Go=new Float32Array(e);const r=new Vt(16777215),a=new Vt(16739624);for(let S=0;S<e;S++){const w=t()*Math.PI*2,D=et(t,-1,1),E=Math.sqrt(1-D*D),b=Math.cbrt(t());Ls[S*3]=Math.cos(w)*E*b,Ls[S*3+1]=D*b,Ls[S*3+2]=Math.sin(w)*E*b,Go[S]=rt.clamp(1+ae(t)*.035*Ct.primordialFluctuation,.82,1.18);const P=r.clone().lerp(a,Math.pow(t(),.7));s[S*3]=P.r,s[S*3+1]=P.g,s[S*3+2]=P.b}const o=new ee;o.setAttribute("position",new Qt(i,3)),o.setAttribute("color",new Qt(s,3)),Ho=new nn(o,new Ke({size:.24,map:Pe(),alphaTest:.012,vertexColors:!0,transparent:!0,opacity:1,depthWrite:!1,blending:Bt})),Pn.add(Ho);const l=340,c=new Float32Array(l*6);ns=new Float32Array(l*4);for(let S=0;S<l;S++){const w=t()*Math.PI*2,D=Math.acos(2*t()-1);ns[S*4]=Math.sin(D)*Math.cos(w),ns[S*4+1]=Math.cos(D),ns[S*4+2]=Math.sin(D)*Math.sin(w),ns[S*4+3]=.45+t()*.75}const u=new ee;u.setAttribute("position",new Qt(c,3)),Vo=new nc(u,new Rn({color:16762253,transparent:!0,opacity:.8,blending:Bt,depthWrite:!1})),Pn.add(Vo),Hr=new he(new ce({map:Ve(),color:16777215,transparent:!0,opacity:1,depthTest:!1,depthWrite:!1,blending:Bt})),Hr.scale.setScalar(.2),Pn.add(Hr),Ph=[16774367,16751444,8962047].map((S,w)=>{const D=new he(new ce({map:ts(),color:S,transparent:!0,opacity:0,depthTest:!1,depthWrite:!1,blending:Bt}));return D.userData.offset=w*.13,Pn.add(D),D});const d=1350,p=new Float32Array(d*3),g=new Float32Array(d*3);hn=new Float32Array(d*3),Te={sourceIndices:new Uint16Array(d),birthAt:new Float32Array(d),axes:new Float32Array(d*3),orbitRates:new Float32Array(d),escapeAt:new Float32Array(d),speeds:new Float32Array(d),fates:new Uint8Array(d)};const x=rt.clamp((Ct.gravity-.5)*6+(Ct.galaxyType===3?4:0),0,12);for(let S=0;S<d;S++){const w=Math.floor(t()*n.length/3),D=w*3;Te.sourceIndices[S]=w,Te.birthAt[S]=An[w];const E=n[D],b=n[D+1],P=n[D+2];p[S*3]=hn[S*3]=E,p[S*3+1]=hn[S*3+1]=b,p[S*3+2]=hn[S*3+2]=P,t(),t(),t(),Te.axes.set([rs.axes[D],rs.axes[D+1],rs.axes[D+2]],S*3),Te.orbitRates[S]=rs.orbitRates[w];const C=t(),L=C<.82?0:C<.92?1:C<.99?2:3;Te.fates[S]=L;const F=L===1?1001:(L===3?704:L===2?724:710)+x+Math.pow(t(),.68)*(L===3?28:92);Te.escapeAt[S]=F>1e3?F:mn(cc(F,Ct),Ct),Te.speeds[S]=L===3?et(t,1.7,2.6):et(t,.55,1.05);const U=new Vt(t()>.28?10204889:9125426);g[S*3]=U.r,g[S*3+1]=U.g,g[S*3+2]=U.b}Te.baseColors=g.slice(),Te.firstBirthAt=Math.min(...Te.birthAt);const v=new ee;if(v.setAttribute("position",new Qt(p,3)),v.setAttribute("color",new Qt(g,3)),$r=new nn(v,new Ke({size:.12,map:Pe(),alphaTest:.012,vertexColors:!0,transparent:!0,opacity:0,depthWrite:!1,blending:Bt})),ri.add($r),ri.rotation.copy(De.rotation),Ct.hasCentralBlackHole){const S=Ct.cosmicMilestones.firstStarsYears,w=10**(1+(Ct.blackHoleEvaporationExponent-67)/3);Wo({random:t,massSolar:w,birthAt:mn(S*1.35,Ct),isCentral:!0})}T_(An,Ct.hasCentralBlackHole?4:5,t).forEach(S=>{Wo({random:t,massSolar:et(t,5,48),birthAt:An[S],sourceIndex:S})});const f=260,m=new Float32Array(f*3),_=new Float32Array(f*3);for(let S=0;S<f;S++){const w=t()*Math.PI*2,D=Math.acos(2*t()-1),E=4+Math.pow(t(),1/3)*24;m[S*3]=Math.sin(D)*Math.cos(w)*E,m[S*3+1]=Math.cos(D)*E,m[S*3+2]=Math.sin(D)*Math.sin(w)*E;const b=new Vt().setHSL(.56+t()*.1,.28,.46+t()*.22);_[S*3]=b.r,_[S*3+1]=b.g,_[S*3+2]=b.b}const M=new ee;M.setAttribute("position",new Qt(m,3)),M.setAttribute("color",new Qt(_,3)),Dh=m.slice(),Lh=_.slice(),Vs=new nn(M,new Ke({size:.11,map:Pe(),alphaTest:.01,vertexColors:!0,transparent:!0,opacity:0,depthWrite:!1,blending:Bt})),Pi.add(Vs);const T=Ct.cosmicFate.type==="vacuum-decay"?13019135:Ct.cosmicFate.type==="big-rip"?8440063:16744543;hs=new fn(new Qr(1,40,24),new $s({color:T,transparent:!0,opacity:0,wireframe:!0,depthWrite:!1,blending:Bt})),hs.position.set(4.2,-1.4,2.6),Fs=new he(new ce({map:Ve(),color:T,transparent:!0,opacity:0,depthTest:!1,depthWrite:!1,blending:Bt})),Fs.scale.set(.2,.2,1),wi.add(hs,Fs),wi.rotation.copy(De.rotation),Pn.visible=!1,ri.visible=!1,Pi.visible=!1,wi.visible=!1}function $_(n){const t=pn(Ct.seed,1447);Di=[];const e=Ks(Ct),s=Ct.cosmicFate.type!=="heat-death"?Ct.cosmicFate.onsetAt:1e3,r=h=>h<470?h:mn(cc(h,Ct),Ct),a=Math.min(s,r(845)),o=new Set(["pair-instability-supernova","young-pulsar-birth","classical-nova","type-ia-supernova","red-dwarf-superflare","gamma-ray-burst","neutron-star-kilonova","quasar-awakening","magnetar-flare","tidal-disruption-event","core-collapse-supernova","pulsar-glitch","superluminous-supernova","failed-supernova"]),l=Ct.hasCentralBlackHole?{type:"quasar-awakening",visual:"pulsar",label:"类星体短暂苏醒",message:"中心黑洞吸积率骤升，相对论喷流穿过星系核",preferCenter:!0,start:480+t()*16,duration:30,color:"#8dd9ff",repeatRate:.32,maximumOccurrences:2}:{type:"magnetar-flare",visual:"pulsar",label:"磁星巨型耀斑",message:"磁壳重排释放高能辐射，脉冲扫过邻近恒星系",start:480+t()*16,duration:26,color:"#7dcaff",repeatRate:.52,maximumOccurrences:2},c=[{type:"pair-instability-supernova",visual:"supernova",label:"成对不稳定超新星",message:"第一代巨星被完全撕碎，重元素云向外扩散",start:258+t()*18,duration:28,color:"#ffb36b",repeatRate:.16,maximumOccurrences:2},{type:"young-pulsar-birth",visual:"pulsar",label:"年轻脉冲星诞生",message:"新生中子星高速自转，双极束流开始扫掠星际介质",start:302+t()*18,duration:27,color:"#68c8ff",repeatRate:.42,maximumOccurrences:2},{type:"classical-nova",visual:"nova",label:"经典新星爆发",message:"白矮星表面的吸积氢发生热核失控，抛出明亮但低质量的壳层",start:336+t()*12,duration:20,color:"#ffe4a8",repeatRate:.9,maximumOccurrences:3},{type:"type-ia-supernova",visual:"supernova",label:"Ia 型超新星爆发",message:"白矮星发生热核失控，将铁族元素抛入星际空间",start:368+t()*22,duration:25,color:"#ffd08a",repeatRate:.66,maximumOccurrences:3},{type:"red-dwarf-superflare",visual:"stellar-flare",label:"红矮星超级耀斑",message:"磁场突然重联，高能辐射与带电粒子冲击近轨行星",start:396+t()*12,duration:21,color:"#ffcb72",repeatRate:1.05,maximumOccurrences:3},{type:"gamma-ray-burst",visual:"pulsar",label:"长伽马射线暴",message:"垂死巨星坍缩，狭窄高能喷流贯穿恒星外层",start:420+t()*20,duration:24,color:"#89b9ff",repeatRate:.2,maximumOccurrences:2},{type:"neutron-star-kilonova",visual:"kilonova",label:"中子星并合千新星",message:"双中子星旋近并合，短伽马射线束与富含重元素的抛射物同时释放",start:450+t()*12,duration:25,color:"#caa5ff",repeatRate:.28,maximumOccurrences:2},l,{type:"tidal-disruption-event",visual:"tidal-disruption",label:"潮汐瓦解事件",message:"恒星掠过中央黑洞的潮汐半径，被拉成长流并逐步吸积",preferCenter:!0,requiresCentralBlackHole:!0,start:502+t()*10,duration:30,color:"#72e4ff",repeatRate:.28,maximumOccurrences:2},{type:"core-collapse-supernova",visual:"supernova",label:"核坍缩超新星",message:"恒星核心坍缩，冲击波把新合成元素送入星际云",start:518+t()*20,duration:27,color:"#ff875c",repeatRate:.86,maximumOccurrences:3},{type:"pulsar-glitch",visual:"pulsar",label:"脉冲星自转突变",message:"中子星内部角动量重分配，脉冲节律突然跃迁",start:548+t()*18,duration:22,color:"#8ba8ff",repeatRate:.72,maximumOccurrences:3},{type:"superluminous-supernova",visual:"supernova",label:"超亮超新星",message:"磁星引擎持续注入能量，爆发亮度超过普通超新星",start:552+t()*16,duration:26,color:"#ff6b52",repeatRate:.2,maximumOccurrences:2},{type:"failed-supernova",visual:"stellar-collapse",label:"失败超新星",message:"冲击波未能掀开恒星外层，亮度短暂上升后整体坍缩为黑洞",start:586+t()*14,duration:29,color:"#b87958",repeatRate:.38,maximumOccurrences:2},{type:"stellar-black-hole-merger",visual:"black-hole-merger",label:"双黑洞合并",message:"时空啁啾达到峰值，引力波波前穿过局部星域（形变已视觉放大）",preferCenter:!0,start:616+t()*18,duration:38,persistUntil:a,persistenceFadeDuration:24,color:"#c897ff",repeatRate:.36,maximumOccurrences:2},{type:"late-black-hole-merger",visual:"black-hole-merger",label:"孤立黑洞捕获合并",message:"漫长引力散射后完成并合，残余黑洞在阻尼振铃中反冲",preferCenter:!0,start:872+t()*18,duration:42,persistUntil:Math.min(s,r(950)),persistenceFadeDuration:18,color:"#9bb8ff",repeatRate:.14,maximumOccurrences:2}].filter(h=>(!h.requiresCentralBlackHole||Ct.hasCentralBlackHole)&&(h.type!=="late-black-hole-merger"||Ct.cosmicFate.type==="heat-death"||Ct.cosmicFate.outcomeExponent>45)).map(h=>{const f=o.has(h.type),m=r(h.start),_=Math.min(s-h.duration,f?e-h.duration:1/0);return{...h,start:m,latestStart:_,requiresLivingStar:f}}),u=N_(c,Ct,t).map(h=>{const f=Math.min(s,h.requiresLivingStar?e:1/0);return{...h,duration:Math.min(h.duration,f-h.start)}}).filter(h=>h.duration>=1).map((h,f)=>{const m=__(h,Ct,f),_={...h,simulation:m};return m?.model==="black-hole-binary"&&(_.gasRich=m.gasRich,_.radiatedMassFraction=m.radiatedMassFraction,_.recoilKms=m.recoilKms),m?.persistentRemnant&&(_.persistUntil=h.type==="late-black-hole-merger"?Math.min(s,r(950)):a,_.persistenceFadeDuration=24),_}),d={"pair-instability-supernova":{radius:.55,maxStars:5,sourceDim:.02,neighborDim:.96,kick:.018,civilization:.08,range:2.4},"young-pulsar-birth":{radius:.42,maxStars:2,sourceDim:.12,neighborDim:.99,kick:.01,civilization:.035,range:1.8,directional:!0,beamAngle:.12},"classical-nova":{radius:.18,maxStars:1,sourceDim:1,neighborDim:1,kick:0,civilization:.012,range:.75,maxSpecies:1},"type-ia-supernova":{radius:.48,maxStars:4,sourceDim:.02,neighborDim:.97,kick:.012,civilization:.06,range:2.1},"red-dwarf-superflare":{radius:.22,maxStars:1,sourceDim:1,neighborDim:1,kick:0,civilization:.09,range:1.15,maxSpecies:1},"gamma-ray-burst":{radius:7.5,maxStars:46,sourceDim:.025,neighborDim:.82,kick:0,civilization:.42,range:12,maxSpecies:1,directional:!0,beamAngle:.1},"neutron-star-kilonova":{radius:4.8,maxStars:24,sourceDim:.03,neighborDim:.9,kick:.006,civilization:.24,range:8.5,maxSpecies:1,directional:!0,beamAngle:.14},"quasar-awakening":{radius:8.5,maxStars:60,sourceDim:.95,neighborDim:.96,kick:0,civilization:.16,range:14,maxSpecies:2,directional:!0,beamAngle:.16},"magnetar-flare":{radius:1.1,maxStars:8,sourceDim:.82,neighborDim:.94,kick:0,civilization:.12,range:3.2,maxSpecies:1},"tidal-disruption-event":{radius:.32,maxStars:2,sourceDim:.015,neighborDim:.995,kick:.008,civilization:.075,range:2.8,maxSpecies:1},"core-collapse-supernova":{radius:.5,maxStars:4,sourceDim:.025,neighborDim:.97,kick:.014,civilization:.06,range:2.2},"pulsar-glitch":{radius:.01,maxStars:1,sourceDim:.985,neighborDim:1,kick:0,civilization:0,range:0,maxSpecies:0},"superluminous-supernova":{radius:.62,maxStars:6,sourceDim:.02,neighborDim:.95,kick:.02,civilization:.09,range:2.8,maxSpecies:1},"failed-supernova":{radius:.24,maxStars:2,sourceDim:.008,neighborDim:.995,kick:.003,civilization:.025,range:1.25,maxSpecies:1},"stellar-black-hole-merger":{radius:.08,maxStars:1,sourceDim:.06,neighborDim:1,kick:0,civilization:0,range:0,maxSpecies:0},"late-black-hole-merger":{radius:.08,maxStars:1,sourceDim:.04,neighborDim:1,kick:0,civilization:0,range:0,maxSpecies:0}},p=(h=!1,f=null)=>{let m=f===null?Math.floor(t()*n.length/3):An.findIndex(M=>M>f);m<0&&(m=Math.floor(t()*n.length/3));const _=h?2.8:6.2;for(let M=0;M<140;M++){const T=Math.floor(t()*n.length/3);if(f!==null&&An[T]<=f)continue;const S=T*3;if(Math.hypot(n[S],n[S+1],n[S+2])<_){m=T;break}}return{index:m,position:new B(n[m*3],n[m*3+1],n[m*3+2])}},g=(h,f)=>{const m=Ll(d[h.type],h.simulation,Ct),M={supernova:.08,nova:.14,kilonova:.22,pulsar:.46,"stellar-flare":.38,"tidal-disruption":.58,"stellar-collapse":.64,"black-hole-merger":.68}[h.visual]??.5,T=h.start+h.duration*M,S=[];for(let P=0;P<n.length/3;P++){const C=P*3,L=Math.hypot(n[C]-f.position.x,n[C+1]-f.position.y,n[C+2]-f.position.z);if(!(L>m.radius)){if(m.directional&&h.beamDirection&&L>.001){const F=new B(n[C]-f.position.x,n[C+1]-f.position.y,n[C+2]-f.position.z).normalize();if(Math.abs(F.dot(h.beamDirection))<Math.cos(m.beamAngle))continue}S.push({index:P,distance:L})}}S.sort((P,C)=>P.distance-C.distance);const w=S.slice(0,m.maxStars).map(({index:P,distance:C},L)=>{const F=P*3,U=1-Math.min(1,C/m.radius);let N=n[F]-f.position.x,G=n[F+1]-f.position.y,z=n[F+2]-f.position.z;const Z=Math.hypot(N,G,z);if(Z<.001){const nt=t()*Math.PI*2,k=t()*2-1,q=Math.sqrt(1-k*k);N=Math.cos(nt)*q,G=k,z=Math.sin(nt)*q}else N/=Z,G/=Z,z/=Z;const $=m.kick*(.2+U*.8)*(.72+t()*.5);return{index:P,dimFactor:L===0?m.sourceDim:1-(1-m.neighborDim)*U,kick:[N*$,G*$,z*$]}}),D={"pair-instability-supernova":"爆发源完全解体且没有致密残骸","classical-nova":"白矮星保留下来，重新开始从伴星吸积物质","type-ia-supernova":"白矮星被热核爆炸完全摧毁","red-dwarf-superflare":"宿主恒星保持完整，但近轨行星大气受到高能粒子冲击","neutron-star-kilonova":"并合形成大质量中子星或黑洞，并把重元素抛入星际空间","tidal-disruption-event":"恒星被撕碎，部分物质形成吸积流，部分沿轨道逃逸","core-collapse-supernova":"坍缩核心留下中子星或恒星级黑洞","superluminous-supernova":"恒星外层被大规模抛射，中心结局仍不确定","failed-supernova":"恒星几乎没有明亮爆炸便消失，留下新生黑洞"},E=x_(h),b=E||(h.visual==="black-hole-merger"?`约 ${(h.radiatedMassFraction*100).toFixed(1)}% 总质量以引力波带走，残余黑洞以约 ${h.recoilKms} km/s 反冲${h.gasRich?"，周围气体受热形成短暂余辉":"；真空环境中没有超新星式爆炸"}`:h.type==="pulsar-glitch"?"自转频率发生微小跃变，没有可见的大规模破坏":D[h.type]?`${D[h.type]}，${Math.max(0,w.length-1)} 个邻近恒星系受影响`:h.visual==="pulsar"?`${w.length} 个位于辐射束或近场内的恒星系受到影响`:`爆发源发生结构性改变，${Math.max(0,w.length-1)} 个邻近恒星系受冲击`);return{impactAt:T,impactPhase:M,starImpacts:w,systemOutcome:b}},x=(h,f,m,_,M)=>{if(!ln||!Te)return[];const T=Ll(d[h.type],h.simulation,Ct),S=pn(Ct.seed,6203+M*131),w=new Map,D=(P,C,L,F=!1,U="damage")=>{const N=`${U}:${P}:${C.toFixed(4)}`,G=w.get(N);if(G){G.severity=1-(1-G.severity)*(1-L),G.permanent||=F;return}w.set(N,{nodeIndex:P,at:C,severity:rt.clamp(L,0,1),permanent:F,kind:U,destructionRoll:S()})};if(T.civilization>0&&T.range>0)for(let P=0;P<ln.habitatPositions.length/3;P++){const C=P*3,L=ln.habitatPositions[C]-f.position.x,F=ln.habitatPositions[C+1]-f.position.y,U=ln.habitatPositions[C+2]-f.position.z,N=Math.hypot(L,F,U);if(N>T.range)continue;if(T.directional&&h.beamDirection&&N>.001){const $=1/N;if(Math.abs(L*$*h.beamDirection.x+F*$*h.beamDirection.y+U*$*h.beamDirection.z)<Math.cos(T.beamAngle))continue}const G=Math.max(.08,1-N/T.range),z=rt.clamp(T.civilization*(.62+G*.48)*(.84+S()*.3),0,.58),Z=h.simulation?.pulsePhases;if(Z?.length?Z.forEach(($,nt)=>{const k=h.simulation.pulseWeights?.[nt]??1;D(P,h.start+h.duration*$,z*k)}):D(P,m.impactAt,z),h.simulation?.recoveryDuration&&h.simulation.recoveryFraction>0){const $=Z?.length?Math.max(...Z):m.impactPhase,nt=h.start+h.duration*$+h.simulation.recoveryDuration;D(P,nt,z*h.simulation.recoveryFraction,!1,"recovery")}}const E=new Map(m.starImpacts.map(P=>[P.index,P])),b=new Map;if(_)for(let P=0;P<_.indices.length;P++)_.restDistances[P]>=_.captureRadius||b.set(_.indices[P],_.restDistances[P]);for(let P=0;P<ln.habitatRemnantIndices.length;P++){const C=ln.habitatRemnantIndices[P],L=Te.sourceIndices[C],F=E.get(L);if(F){const N=1-F.dimFactor;N>.001&&D(P,m.impactAt,N,F.dimFactor<=.15)}const U=b.get(L);if(U!==void 0){const N=U/_.captureRadius*11;D(P,m.impactAt+N+13,1,!0)}}return Array.from(w.values()).sort((P,C)=>P.at-C.at||P.nodeIndex-C.nodeIndex)},v=(h,f,m)=>{const _=h.visual==="kilonova";if(h.visual!=="black-hole-merger"&&!_)return null;const M=_?6.4:h.type==="late-black-hole-merger"?7.2:8.8,T=[];for(let F=0;F<n.length/3;F++){const U=F*3,N=n[U]-f.position.x,G=n[U+1]-f.position.y,z=n[U+2]-f.position.z,Z=Math.hypot(N,G,z);Z>.12&&Z<=M&&T.push({index:F,dx:N,dy:G,dz:z,distance:Z})}const S=pn(Ct.seed,9107+m*97),w=Math.min(_?900:1800,T.length),D=T.length/Math.max(1,w),E=new Uint16Array(w),b=new Float32Array(w),P=new Float32Array(w*3),C=new Float32Array(w);for(let F=0;F<w;F++){const U=F*D,N=T[Math.min(T.length-1,Math.floor(U+S()*D))],G=1/N.distance,z=N.dx*G;N.dy*G;const Z=N.dz*G;let $=-Z,nt=0,k=z;const q=Math.hypot($,nt,k);q<.04?($=1,nt=0,k=0):($/=q,nt/=q,k/=q),E[F]=N.index,b[F]=N.distance,P.set([$,nt,k],F*3),C[F]=Math.cos(Math.atan2(Z,z)*2)*(.72+S()*.28)}const L=_?rt.clamp((h.simulation?.radiatedMassFraction||.025)/.04,.38,1):rt.clamp((h.simulation?.radiatedMassFraction||.045)/.045,.62,1.8);return{waveRadius:M,waveAmplitude:L,indices:E,distances:b,transverse:P,polarities:C}};u.forEach((h,f)=>{const m=new Xe,_=p(h.preferCenter,h.requiresLivingStar?h.start+h.duration:null);m.position.copy(_.position),m.visible=!1,ai.add(m);const M=d[h.type];if(M.directional&&(h.beamDirection=new B(ae(t),ae(t),ae(t)).normalize(),m.quaternion.setFromUnitVectors(new B(0,1,0),h.beamDirection)),h.visual==="supernova"||h.visual==="nova"||h.visual==="kilonova"){const L=h.visual==="nova",F=h.visual==="kilonova",U=F?12099071:L?16770733:16756067,N=F?14731519:L?16317439:11458815,G=new he(new ce({map:Ve(),color:16777215,transparent:!0,opacity:0,depthWrite:!1,blending:Bt})),z=new he(new ce({map:Ve(),color:U,transparent:!0,opacity:0,depthWrite:!1,blending:Bt})),Z=new he(new ce({map:Pe(),color:N,transparent:!0,opacity:0,depthWrite:!1,blending:Bt}));Z.scale.set(.16,.16,1);const $=rt.clamp(Math.sqrt((h.simulation?.ejectaMass||(L?2e-5:8))/(L?2e-5:8)),.7,1.65),nt=Math.round((L?360:620)*$),k=new Float32Array(nt*3),q=new Float32Array(nt*3),ft=new Float32Array(nt*3),ct=new Float32Array(nt),X=new Float32Array(nt),J=new Vt(F?14283775:L?16775384:16773319),ut=new Vt(F?9261009:L?16758120:16730930);for(let Dt=0;Dt<nt;Dt++){const re=t()*Math.PI*2,at=Math.acos(2*t()-1),A=1+Math.sin(re*5+at*3)*.18+(t()-.5)*.24,y=new B(Math.sin(at)*Math.cos(re)*A,Math.cos(at)*(F?.34:1.08+t()*.34),Math.sin(at)*Math.sin(re)*A).normalize();ft.set([y.x,y.y,y.z],Dt*3);const H=F?rt.clamp((h.simulation?.ejectaVelocityC||.2)/.18,.72,1.55):L?rt.clamp((h.simulation?.ejectaVelocityKms||1800)/1800,.64,1.7):rt.clamp((h.simulation?.ejectaVelocityKms||9e3)/9e3,.62,1.72),W=L?.46*H:H;ct[Dt]=(.38+Math.pow(t(),.48)*1.45+Math.abs(y.y)*.22)*W,X[Dt]=Math.pow(t(),2.4)*.22;const j=J.clone().lerp(ut,Math.pow(t(),.52));q.set([j.r,j.g,j.b],Dt*3)}const bt=new ee;bt.setAttribute("position",new Qt(k,3)),bt.setAttribute("color",new Qt(q,3));const vt=new nn(bt,new Ke({size:.1,map:Pe(),alphaTest:.008,vertexColors:!0,transparent:!0,opacity:0,depthWrite:!1,blending:Bt})),Ot=Math.round((L?160:280)*Math.min(1.45,$)),ne=new Float32Array(Ot*3),I=new Float32Array(Ot*3),Ft=new Float32Array(Ot);for(let Dt=0;Dt<Ot;Dt++){const re=t()*Math.PI*2,at=2*t()-1,A=Math.sqrt(1-at*at);I.set([Math.cos(re)*A,at,Math.sin(re)*A],Dt*3),Ft[Dt]=t()*Math.PI*2}const Pt=new ee;Pt.setAttribute("position",new Qt(ne,3));const wt=F?10845439:L?16769184:16766112,Et=new nn(Pt,new Ke({color:wt,size:L?.052:.072,map:Pe(),alphaTest:.01,transparent:!0,opacity:0,depthWrite:!1,blending:Bt}));let jt=null,St=null;if(F){const Dt=2.6+(h.simulation?.ejectaVelocityC||.2)*4.2,re=new ee;re.setAttribute("position",new Re([0,-.12,0,0,-Dt,0,0,.12,0,0,Dt,0],3)),jt=new nc(re,new Rn({color:13234175,transparent:!0,opacity:0,depthWrite:!1,blending:Bt})),St=new he(new ce({map:ts(),color:12891391,transparent:!0,opacity:0,depthTest:!1,depthWrite:!1,blending:Bt}))}m.add(z,G,vt,Et,Z),jt&&m.add(jt),St&&m.add(St),m.userData.effect={innerFlash:G,photosphere:z,remnant:Z,ejecta:vt,ejectaDirections:ft,ejectaVelocity:ct,ejectaDelay:X,shell:Et,shellDirections:I,shellNoise:Ft,polarJets:jt,gravityWave:St}}else if(h.visual==="tidal-disruption"){const L=kr({color:8773119,tilt:.22,phase:t()*Math.PI*2,visualScale:.86});L.userData.spinDirection=1;const F=new he(new ce({map:Pe(),color:16773577,transparent:!0,opacity:0,depthWrite:!1,blending:Bt}));F.scale.set(.28,.28,1);const U=new he(new ce({map:Ve(),color:9366271,transparent:!0,opacity:0,depthTest:!1,depthWrite:!1,blending:Bt})),N=new he(new ce({map:ts(),color:7068927,transparent:!0,opacity:0,depthWrite:!1,blending:Bt,rotation:t()*Math.PI}));N.scale.set(1.5,.48,1);const G=480,z=new Float32Array(G*3),Z=new Float32Array(G),$=new Float32Array(G),nt=new Float32Array(G*3),k=new Vt(16380359),q=new Vt(5623807);for(let X=0;X<G;X++){const J=t()<(h.simulation?.boundFraction||.5);Z[X]=J?-t():t(),$[X]=t()*Math.PI*2;const ut=k.clone().lerp(q,Math.pow(t(),.62));nt.set([ut.r,ut.g,ut.b],X*3)}const ft=new ee;ft.setAttribute("position",new Qt(z,3)),ft.setAttribute("color",new Qt(nt,3));const ct=new nn(ft,new Ke({size:.075,map:Pe(),alphaTest:.008,vertexColors:!0,transparent:!0,opacity:0,depthWrite:!1,blending:Bt}));m.add(U,N,ct,F,L),m.userData.effect={hole:L,starCore:F,flare:U,disk:N,debris:ct,debrisOffsets:Z,debrisNoise:$}}else if(h.visual==="stellar-flare"){const L=new he(new ce({map:Pe(),color:16758618,transparent:!0,opacity:0,depthWrite:!1,blending:Bt})),F=new he(new ce({map:Ve(),color:16742962,transparent:!0,opacity:0,depthWrite:!1,blending:Bt})),U=new he(new ce({map:ts(),color:16765563,transparent:!0,opacity:0,depthWrite:!1,blending:Bt}));L.scale.set(.25,.25,1);const N=[];for(let k=0;k<3;k++){const q=[];for(let ct=0;ct<=72;ct++){const X=ct/72*Math.PI;q.push(new B(Math.cos(X)*(.42+k*.16),Math.sin(X)*(.68+k*.18),Math.sin(X*2)*.06))}const ft=new bi(new ee().setFromPoints(q),new Rn({color:k===1?16773283:16751442,transparent:!0,opacity:0,depthWrite:!1,blending:Bt}));ft.rotation.y=k*1.86+t()*.35,N.push(ft)}const G=320,z=new Float32Array(G*3),Z=new Float32Array(G*3);for(let k=0;k<G;k++){const q=t()*Math.PI*2,ft=et(t,-.28,1),ct=Math.sqrt(1-Math.min(1,ft*ft));Z.set([Math.cos(q)*ct,ft,Math.sin(q)*ct],k*3)}const $=new ee;$.setAttribute("position",new Qt(z,3));const nt=new nn($,new Ke({color:16763248,size:.06,map:Pe(),alphaTest:.008,transparent:!0,opacity:0,depthWrite:!1,blending:Bt}));m.add(F,U,L,nt,...N),m.userData.effect={starCore:L,halo:F,shock:U,loops:N,particles:nt,particleDirections:Z}}else if(h.visual==="stellar-collapse"){const L=new he(new ce({map:Pe(),color:16753755,transparent:!0,opacity:0,depthWrite:!1,blending:Bt})),F=new he(new ce({map:Ve(),color:10114360,transparent:!0,opacity:0,depthWrite:!1,blending:Bt})),U=kr({color:10316632,tilt:-.18,phase:t()*Math.PI*2,visualScale:.72});U.userData.spinDirection=-1,U.visible=!1;const N=Math.round(180+(h.simulation?.ejectedEnvelopeFraction||.08)*920),G=new Float32Array(N*3),z=new Float32Array(N*3);for(let nt=0;nt<N;nt++){const k=t()*Math.PI*2,q=t()*2-1,ft=Math.sqrt(1-q*q);z.set([Math.cos(k)*ft,q,Math.sin(k)*ft],nt*3)}const Z=new ee;Z.setAttribute("position",new Qt(G,3));const $=new nn(Z,new Ke({color:9196347,size:.065,map:Pe(),alphaTest:.008,transparent:!0,opacity:0,depthWrite:!1,blending:Bt}));m.add(F,$,L,U),m.userData.effect={starCore:L,shroud:F,remnantHole:U,dust:$,dustDirections:z}}else if(h.visual==="pulsar"){const L=new he(new ce({map:Pe(),color:16055295,transparent:!0,opacity:0,depthWrite:!1,blending:Bt})),F=new he(new ce({map:Ve(),color:4962815,transparent:!0,opacity:0,depthWrite:!1,blending:Bt})),U=new he(new ce({map:Ve(),color:1472184,transparent:!0,opacity:0,depthWrite:!1,blending:Bt,rotation:t()*Math.PI})),N=new he(new ce({map:Ve(),color:13233663,transparent:!0,opacity:0,depthWrite:!1,blending:Bt}));L.scale.set(.18,.18,1),U.scale.set(1.45,.58,1);const G=new Xe;G.rotation.z=.58+t()*.32;const z=h.simulation?.model==="collapsar-jet"?rt.clamp(h.simulation.lorentzFactor/260,.7,1.75):h.simulation?.model==="quasar-duty-cycle"?rt.clamp(h.simulation.jetLorentzFactor/8,.7,1.7):1,Z=Math.round(420*z),$=new Float32Array(Z*3),nt=new Float32Array(Z*3);for(let X=0;X<Z;X++){const J=X%2?1:-1,ut=.1+Math.pow(t(),.66)*2.6*z,bt=.012+ut*.014,vt=t()*Math.PI*2;$[X*3]=Math.cos(vt)*bt*t(),$[X*3+1]=J*ut,$[X*3+2]=Math.sin(vt)*bt*t();const Ot=.35+Math.pow(1-ut/2.8,.45)*.65;nt.set([.38*Ot,.76*Ot,Ot],X*3)}const k=new ee;k.setAttribute("position",new Qt($,3)),k.setAttribute("color",new Qt(nt,3));const q=new nn(k,new Ke({size:.09,map:Pe(),alphaTest:.008,vertexColors:!0,transparent:!0,opacity:0,depthWrite:!1,blending:Bt}));G.add(q);const ft=[];for(let X=0;X<4;X++){const J=[],ut=.5+X*.18;for(let vt=0;vt<=80;vt++){const Ot=vt/80*Math.PI*2;J.push(new B(Math.cos(Ot)*ut,Math.sin(Ot)*ut*.34,Math.sin(Ot*2)*.08))}const bt=new bi(new ee().setFromPoints(J),new Rn({color:7524351,transparent:!0,opacity:0,depthWrite:!1,blending:Bt}));bt.rotation.set(t()*Math.PI,t()*Math.PI,t()*Math.PI),ft.push(bt),G.add(bt)}const ct=[];for(let X=0;X<8;X++){const J=new he(new ce({map:Pe(),color:10214911,transparent:!0,opacity:0,depthWrite:!1,blending:Bt}));J.scale.set(.11,.11,1),J.userData.offset=X/8,J.userData.side=X%2?1:-1,ct.push(J),G.add(J)}m.add(U,F,N,L,G),m.userData.effect={core:L,halo:F,nebula:U,sweepGlow:N,rotor:G,jets:q,fieldLines:ft,knots:ct,jetPowerScale:z}}else if(h.visual==="black-hole-merger"){const L=(wt,Et)=>{const jt=kr({color:wt,tilt:et(t,-.28,.28),phase:t()*Math.PI*2,visualScale:1.08});return jt.userData.spinDirection=Et,jt},F=new Xe;F.rotation.set(.76,.18,.24);const U=L(16759408,1),N=L(10999807,-1),G=L(16767405,1);G.scale.setScalar(1.24),G.visible=!1;const z=wt=>{const Et=new Float32Array(252),jt=new ee;return jt.setAttribute("position",new Qt(Et,3)),new bi(jt,new Rn({color:wt,transparent:!0,opacity:0,depthWrite:!1,blending:Bt}))},Z=z(16751445),$=z(7979007);F.add(Z,$,U,N,G);const nt=new he(new ce({map:Ve(),color:h.gasRich?16769717:14478079,transparent:!0,opacity:0,depthTest:!1,depthWrite:!1,blending:Bt})),k=new he(new ce({map:ts(),color:16757871,transparent:!0,opacity:0,depthTest:!1,depthWrite:!1,blending:Bt}));k.visible=h.gasRich;const q=[10209535,13810175,7976959].map(wt=>new he(new ce({map:ts(),color:wt,transparent:!0,opacity:0,depthTest:!1,depthWrite:!1,blending:Bt}))),ft=[];for(let wt=0;wt<6;wt++){const Et=[];for(let St=0;St<160;St++){const Dt=St/160*Math.PI*2,re=1+Math.cos(Dt*2+wt*.7)*.065;Et.push(new B(Math.cos(Dt)*re,Math.sin(Dt)*re,Math.sin(Dt*2+wt)*.055))}const jt=new Ad(new ee().setFromPoints(Et),new Rn({color:wt%3===1?14205951:9422591,transparent:!0,opacity:0,depthTest:!1,depthWrite:!1,blending:Bt}));jt.rotation.set(.34+wt*.47,.2+wt*.39,wt*.76),ft.push(jt),m.add(jt)}const ct=520,X=new Float32Array(ct*3),J=new Float32Array(ct*3),ut=new Float32Array(ct*3),bt=new Vt(7979007),vt=new Vt(14732287);for(let wt=0;wt<ct;wt++){const Et=t()*Math.PI*2,jt=et(t,-1,1),St=Math.sqrt(1-jt*jt);J.set([Math.cos(Et)*St,jt,Math.sin(Et)*St],wt*3);const Dt=bt.clone().lerp(vt,t());ut.set([Dt.r,Dt.g,Dt.b],wt*3)}const Ot=new ee;Ot.setAttribute("position",new Qt(X,3)),Ot.setAttribute("color",new Qt(ut,3));const ne=new nn(Ot,new Ke({size:.075,map:Pe(),alphaTest:.008,vertexColors:!0,transparent:!0,opacity:0,depthTest:!1,depthWrite:!1,blending:Bt})),I=new ee;I.setAttribute("position",new Qt(new Float32Array(6),3));const Ft=new bi(I,new Rn({color:16766122,transparent:!0,opacity:0,depthWrite:!1,blending:Bt})),Pt=new B(ae(t),ae(t)*.45,ae(t)).normalize();m.add(ne,...q,k,F,nt,Ft),m.userData.effect={orbitalPlane:F,holeA:U,holeB:N,remnantHole:G,trailA:Z,trailB:$,mergerGlow:nt,gasEcho:k,waveHalos:q,wavefronts:ft,waveDust:ne,waveDirections:J,recoilTrail:Ft,recoilVector:Pt,gasRich:h.gasRich}}const T=g(h,_),S=v(h,_,f),w=h.visual==="black-hole-merger"?p_(n,_.position,{seedValue:Ct.seedValue,eventIndex:f}):null,D=M_(n,_.position,h.simulation,Ct.seedValue,f),E=x(h,_,T,w,f),b=`${h.type}-${f}-${Ct.seed}`,P=A_(h.simulation);if(M.sourceDim<=.15&&h.visual!=="black-hole-merger"){An[_.index]=Math.min(An[_.index],T.impactAt);for(let L=0;L<Te.sourceIndices.length;L++)Te.sourceIndices[L]===_.index&&(Te.birthAt[L]=1001)}P&&(h.persistUntil=h.start+h.duration,h.persistenceFadeDuration=8,Wo({random:t,massSolar:P,birthAt:T.impactAt,sourceIndex:_.index,originEventId:b})),Di.push({...h,...T,civilizationNodeImpacts:E,civilizationImpacts:[],outcome:T.systemOutcome,waveSamples:S,gravityField:w,transientGravityField:D,group:m,sourceIndex:_.index,id:b,label:h.label})}),Te.firstBirthAt=Math.min(...Te.birthAt),ai.rotation.copy(De.rotation),ai.visible=!1}function j_(){const n=Ht("#cosmic-event-markers");n.innerHTML="",Di.forEach(t=>{const e=document.createElement("button");e.type="button",e.className="event-marker",e.style.left=`${t.start/10}%`,e.style.setProperty("--event-color",t.color),e.setAttribute("aria-label",`${t.label}，${_h(t.start,Ct)}；${t.outcome}`),e.title=t.outcome,e.addEventListener("click",()=>{Ln=!1,Ht("#toggle-time").textContent="▶";const s={supernova:.14,nova:.2,kilonova:.28,pulsar:.54,"stellar-flare":.44,"tidal-disruption":.62,"stellar-collapse":.7,"black-hole-merger":.76}[t.visual]??.5;Zs(t.start+t.duration*s,!0)}),n.appendChild(e)})}function K_(){X_();const n=pn(Ct.seed,410),t=Ct.speciesCount,e=hn.length/3,i=Math.min(720,e),s=new Uint16Array(i),r=new Float32Array(i*3),a=e/i;for(let c=0;c<i;c++){const u=Math.min(e-1,Math.floor((c+n()*.86)*a)),d=u*3,p=c*3;s[c]=u,r[p]=hn[d],r[p+1]=hn[d+1],r[p+2]=hn[d+2]}ln={start:390,end:1e3,step:1,habitatRemnantIndices:s,habitatPositions:r,adjacency:[],snapshots:[]};const o=[],l=Ht("#civilization-legend");l.innerHTML="";for(let c=0;c<t;c++){let u=Math.floor(n()*i),d=-1;for(let C=0;C<96;C++){const L=Math.floor(n()*i),F=L*3;let U=1/0;o.forEach(N=>{const G=N*3;U=Math.min(U,Math.hypot(r[F]-r[G],r[F+1]-r[G+1],r[F+2]-r[G+2]))}),U>d&&(d=U,u=L)}o.push(u);const p=s[u],g=p*3,x=new B(hn[g],hn[g+1],hn[g+2]),v=Cl[c%Cl.length],h=new ee;h.setAttribute("position",new Qt(new Float32Array(i*3),3)),h.setDrawRange(0,0);const f=new Ke({color:v,size:.24,map:Pe(),alphaTest:.012,transparent:!0,opacity:.98,depthWrite:!1,blending:Bt}),m=new nn(h,f);De.add(m),Gs.push(m);const _=n(),M=n(),T=et(n,.72,1.36),S=et(n,.68,1.32),w=t===1?0:c/(t-1),D=404+Math.round(w*72+n()*11),E=n()<.01,b=E?D+Math.round(et(n,130,205)):1/0;cn.push({name:Rl[(Ct.seedValue+c)%Rl.length],color:v,home:x,homeNodeIndex:u,homeRemnantIndex:p,homeOffset:new B,hostRemnantIndices:new Uint16Array(i),hostOffsets:new Float32Array(i*3),displayCount:0,maxColonies:i,birth:D,highDimensional:E,ascensionAt:b,aggression:_,cooperation:M,expansionRate:T,resilience:S});const P=`#${v.toString(16).padStart(6,"0")}`;l.insertAdjacentHTML("beforeend",`<div class="civilization-item" style="--species:${P}" data-species="${c}"><i></i><span>${cn[c].name}</span><b>未诞生</b></div>`)}}function Oh(){if(_n!=="generator")return;Ct=yh(),Rh(Ct),Fh(),Nh(),Ht(".universe-data").scrollTop=0;const n=Ht("#creation-flash");n.classList.remove("is-flashing"),n.offsetWidth,n.classList.add("is-flashing"),document.querySelectorAll(".metric").forEach(t=>{t.style.animation="none",t.offsetWidth,t.style.animation=""})}function Z_(){_n==="generator"&&(_n="explorer",document.body.classList.add("is-exploring"),Ht("#generator-view").classList.remove("is-active"),Ht("#explorer-view").classList.add("is-active"),Ht("#mode-label").textContent="深空航行中",Ht("#regenerate-top").style.opacity="0",Ht("#regenerate-top").style.pointerEvents="none",Ht("#civilization-panel").classList.remove("is-expanded"),Ht("#toggle-civilizations").setAttribute("aria-expanded","false"),De.visible=!0,De.scale.setScalar(.02),gn.enabled=!0,gn.target.set(0,0,0),we=0,Ht("#cosmic-timeline").value=we,Zs(we,!0),z_(),Ln=!0,Ht("#toggle-time").textContent="Ⅱ",Ht("#toggle-time").setAttribute("aria-label","暂停时间"),We={type:"enter",start:performance.now(),duration:ei?1:2100})}function J_(){_n==="explorer"&&(_n="generator",document.body.classList.remove("is-exploring"),Ht("#explorer-view").classList.remove("is-active"),Ht("#generator-view").classList.add("is-active"),Ht("#star-inspector").classList.remove("is-open"),Ht("#civilization-panel").classList.remove("is-expanded"),Ht("#toggle-civilizations").setAttribute("aria-expanded","false"),Ht("#mode-label").textContent="创世引擎在线",Ht("#regenerate-top").style.opacity="",Ht("#regenerate-top").style.pointerEvents="",Ln=!1,Ht("#toggle-time").textContent="▶",Ht("#toggle-time").setAttribute("aria-label","播放时间"),gn.enabled=!1,Pn.visible=!1,ri.visible=!1,Pi.visible=!1,ai.visible=!1,We={type:"leave",start:performance.now(),duration:ei?1:1300})}function Ol(n){return n===1?1:1-Math.pow(2,-10*n)}function Bl(n){return n<.5?4*n*n*n:1-Math.pow(-2*n+2,3)/2}function Q_(n){if(!We)return;const t=Math.min(1,(n-We.start)/We.duration);if(We.type==="birth"){const e=Ol(t);Ae.scale.setScalar(e),Ae.rotation.y=-.3+(1-e)*1.5}if(We.type==="enter"){const e=Bl(t);Ae.scale.setScalar(Math.max(.001,1-e*1.5)),Ae.rotation.z+=.018*(1-t),De.scale.setScalar(.02+Ol(t)*.98),Tn.position.z=32-e*12,Tn.position.y=.5+e*4.2}if(We.type==="leave"){const e=Bl(t);De.scale.setScalar(1-e*.96),Ae.scale.setScalar(e),Tn.position.z=20+e*12,Tn.position.y=4.7-e*4.2}t===1&&(We.type==="enter"&&(Ae.visible=!1),We.type==="leave"&&(De.visible=!1,Ae.visible=!0,Ae.scale.setScalar(1)),We=null)}function tx(n){if(_n!=="explorer"||We||!xs||we<250)return;ls.x=n.clientX/innerWidth*2-1,ls.y=-(n.clientY/innerHeight)*2+1,ko.setFromCamera(ls,Tn);const e=ko.intersectObject(xs).find(p=>we<An[p.index]+22);if(!e)return;const i=e.index,s=pn(Ct.seed,i*31),r=["M4 V","K1 III","G2 V","F8 V","A3 V","B1 Ia"],a=r[Math.floor(s()*r.length)],l={M:[2400,3700],K:[3700,5200],G:[5200,6e3],F:[6e3,7500],A:[7500,1e4],B:[1e4,3e4]}[a[0]],c=Math.round(et(s,l[0],l[1])),u=Math.floor(s()*13),d=s()<Ct.lifeProbability?"候选信号":"未检出";Ht("#star-name").textContent=`RU-${String(i).padStart(5,"0")}`,Ht("#star-type").textContent=a,Ht("#star-temp").textContent=`${new Intl.NumberFormat("zh-CN").format(c)} K`,Ht("#star-planets").textContent=u,Ht("#star-life").textContent=d,Ht("#star-life").style.color=d==="候选信号"?"var(--accent)":"",Ht("#star-inspector").classList.add("is-open")}function ex(n){we+=n*U0(we)*Uh}function nx(){if(_n!=="explorer")return;const n=Ht("#civilization-panel"),t=!n.classList.contains("is-expanded");n.classList.toggle("is-expanded",t),Ht("#toggle-civilizations").setAttribute("aria-expanded",String(t))}function zl(){return{mode:_n,epochEffectsGroup:Pn,primordialParticles:Ho,primordialFactors:Go,primordialDirections:Ls,expansionStreaks:Vo,expansionDirections:ns,bangCore:Hr,shockwaves:Ph,renderer:In,scene:na,clickableStars:xs,originalGalaxyPositions:us,stellarGravityState:rs,universe:Ct,transition:We,galaxyGroup:De,starDeathThresholds:An,originalGalaxyColors:Ih,cosmicEvents:Di,remnantGroup:ri,stellarRemnants:$r,originalRemnantPositions:hn,remnantDynamics:Te,blackHoleRemnants:ia,heatDeathGroup:Pi,coldPhotons:Vs,originalPhotonPositions:Dh,originalPhotonColors:Lh,cosmicFateGroup:wi,fateBubble:hs,fateGlow:Fs,cosmicEventGroup:ai}}function ix(n){const t=Ct.cosmicFate.type==="heat-death"?0:rt.smoothstep(we,Ct.cosmicFate.onsetAt,995);n.forEach((e,i)=>{const s=Gs[i],r=cn[i];s.visible=e.alive&&e.count>0,s.material.opacity=(e.ascended?.88:.98)*(1-t),s.material.size=e.ascended?.31:.24,s.material.color.setHex(e.ascended?15325183:r.color)})}function Zs(n,t=!1){const e=I0(n,Ct,N0(Ct));if(we=e.position,H_(e),!xs)return;y_(we,zl());const i=P_(ln,we);o_(i,{civilizationSimulation:ln,civilizationData:cn,civilizationGroups:Gs}),c_({clickableStars:xs,stellarRemnants:$r,remnantDynamics:Te,cosmicPosition:we,civilizationData:cn,civilizationGroups:Gs}),Mi=L_(we,i,cn,Di),ix(Mi),G_({position:we,simulationState:i,runtimeState:Mi,civilizationData:cn}),Y_(i,cn);const s=Mi.filter(c=>c.alive).length,r=Mi.filter(c=>c.ascended).length,a=I_(i,Mi,cn.length),o=S_(we,zl()),l=F0({position:we,label:e.label,universe:Ct,activeEvent:o,activeRelationship:a,ascendedSpecies:r,activeSpecies:s,civilizationData:cn});V_(l,t)}function Bh(n){requestAnimationFrame(Bh);const t=Math.min(.05,(n-Nl)/1e3);if(Nl=n,Q_(n),Ir.lerp(ls,.04),_n==="generator"&&Ae.visible&&!ei&&(Ae.rotation.y+=45e-5,Ae.rotation.x=.15+Ir.y*.045,Ae.position.x=Ir.x*.42,Ae.position.y=Ir.y*.25),_n==="explorer"){Ln&&!We&&(ex(t),we>=1e3&&(we=1e3,Ln=!1,Ht("#toggle-time").textContent="▶",Ht("#toggle-time").setAttribute("aria-label","播放时间")),Zs(we)),gn.update(),Pn.position.set(0,0,0),Pi.visible&&!ei&&(Vs.rotation.y+=35e-6,Vs.rotation.x+=9e-6),wi.visible&&!ei&&(hs.rotation.y+=.0014,hs.rotation.x-=7e-4,Fs.material.rotation=n*8e-5),ei||ia.forEach((i,s)=>{i.visible&&(es(i,n,i.userData.spinDirection||(s%2?-1:1)),i.userData.hawkingGlow.material.rotation=n*(25e-6+s*1e-6))}),E_(n,{cosmicEventGroup:ai,prefersReducedMotion:ei,cosmicEvents:Di,camera:Tn}),gn.enabled||(De.rotation.y+=3e-4);const e=n*12e-5;Ht("#coord-x").textContent=`${Math.sin(e)<0?"−":"+"}${Math.abs(Math.sin(e)*9).toFixed(2)}`,Ht("#coord-y").textContent=`${Math.cos(e*.7)<0?"−":"+"}${Math.abs(Math.cos(e*.7)*9).toFixed(2)}`,Ht("#coord-z").textContent=`${Math.sin(e*.3)<0?"−":"+"}${Math.abs(Math.sin(e*.3)*3).toFixed(2)}`}In.render(na,Tn)}window.addEventListener("pointermove",n=>{ls.x=n.clientX/innerWidth*2-1,ls.y=-(n.clientY/innerHeight)*2+1;const t=Ht("#cursor");t.style.left=`${n.clientX}px`,t.style.top=`${n.clientY}px`,t.style.opacity="1"});window.addEventListener("resize",()=>{Tn.aspect=innerWidth/innerHeight,Tn.updateProjectionMatrix(),In.setSize(innerWidth,innerHeight),In.setPixelRatio(Math.min(devicePixelRatio,2))});hc.addEventListener("click",tx);Ht("#regenerate-top").addEventListener("click",Oh);Ht("#enter-universe").addEventListener("click",Z_);Ht("#close-inspector").addEventListener("click",()=>Ht("#star-inspector").classList.remove("is-open"));Ht("#toggle-civilizations").addEventListener("click",nx);Ht("#toggle-time").addEventListener("click",()=>{we>=1e3&&Zs(0,!0),Ln=!Ln,Ht("#toggle-time").textContent=Ln?"Ⅱ":"▶",Ht("#toggle-time").setAttribute("aria-label",Ln?"暂停时间":"播放时间")});const Ui=Ht("#cosmic-timeline"),jr=Ui.closest(".range-wrap");function zh(){jr.classList.add("is-scrubbing"),Ch(Number(Ui.value))}function sa(){jr.classList.contains("is-scrubbing")&&(jr.classList.remove("is-scrubbing"),k_())}Ui.addEventListener("pointerdown",zh);window.addEventListener("pointerup",sa);window.addEventListener("pointercancel",sa);Ui.addEventListener("keydown",n=>{["ArrowLeft","ArrowRight","Home","End","PageUp","PageDown"].includes(n.key)&&zh()});Ui.addEventListener("keyup",sa);Ui.addEventListener("blur",sa);Ui.addEventListener("input",n=>{Ln=!1,Ht("#toggle-time").textContent="▶",Zs(n.target.value,!0),jr.classList.contains("is-scrubbing")&&Ch(Number(n.target.value))});document.querySelectorAll(".speed-controls button").forEach(n=>{n.addEventListener("click",()=>{Uh=Number(n.dataset.speed),document.querySelectorAll(".speed-controls button").forEach(t=>{const e=t===n;t.classList.toggle("is-active",e),t.setAttribute("aria-pressed",String(e))})})});document.addEventListener("keydown",n=>{if(n.key.toLowerCase()==="r"&&_n==="generator"&&Oh(),n.key==="Escape"&&_n==="explorer"){const t=Ht("#civilization-panel");t.classList.contains("is-expanded")?(t.classList.remove("is-expanded"),Ht("#toggle-civilizations").setAttribute("aria-expanded","false")):J_()}});Ct=yh();Rh(Ct);Fh();Nh();Bh(performance.now());
