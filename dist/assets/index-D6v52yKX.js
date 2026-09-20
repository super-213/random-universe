(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function e(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(s){if(s.ep)return;s.ep=!0;const r=e(s);fetch(s.href,r)}})();const zo="180",ss={ROTATE:0,DOLLY:1,PAN:2},es={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},kh=0,hl=1,Hh=2,Uc=1,Gh=2,On=3,ri=0,je=1,Bn=2,ni=0,bi=1,Ft=2,ul=3,dl=4,Vh=5,vi=100,Wh=101,Xh=102,$h=103,qh=104,Yh=200,jh=201,Kh=202,Zh=203,Ba=204,za=205,Jh=206,Qh=207,tu=208,eu=209,nu=210,iu=211,su=212,ru=213,au=214,ka=0,Ha=1,Ga=2,ls=3,Va=4,Wa=5,Xa=6,$a=7,Fc=0,ou=1,lu=2,ii=0,cu=1,hu=2,uu=3,Nc=4,du=5,fu=6,pu=7,Oc=300,cs=301,hs=302,qa=303,Ya=304,Wr=306,ja=1e3,yi=1001,Ka=1002,En=1003,mu=1004,Ys=1005,Mn=1006,ea=1007,ti=1008,Gn=1009,Bc=1010,zc=1011,Ds=1012,ko=1013,Ai=1014,zn=1015,zs=1016,Ho=1017,Go=1018,Ls=1020,kc=35902,Hc=35899,Gc=1021,Vc=1022,yn=1023,Is=1026,Us=1027,Wc=1028,Vo=1029,Xc=1030,Wo=1031,Xo=1033,Rr=33776,Cr=33777,Pr=33778,Dr=33779,Za=35840,Ja=35841,Qa=35842,to=35843,eo=36196,no=37492,io=37496,so=37808,ro=37809,ao=37810,oo=37811,lo=37812,co=37813,ho=37814,uo=37815,fo=37816,po=37817,mo=37818,go=37819,_o=37820,xo=37821,vo=36492,Mo=36494,yo=36495,So=36283,Eo=36284,bo=36285,To=36286,gu=3200,_u=3201,xu=0,vu=1,Jn="",Fe="srgb",us="srgb-linear",Fr="linear",fe="srgb",Ui=7680,fl=519,Mu=512,yu=513,Su=514,$c=515,Eu=516,bu=517,Tu=518,Au=519,Ao=35044,pl="300 es",Rn=2e3,Nr=2001;class Pi{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(e)===-1&&i[t].push(e)}hasEventListener(t,e){const i=this._listeners;return i===void 0?!1:i[t]!==void 0&&i[t].indexOf(e)!==-1}removeEventListener(t,e){const i=this._listeners;if(i===void 0)return;const s=i[t];if(s!==void 0){const r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){const e=this._listeners;if(e===void 0)return;const i=e[t.type];if(i!==void 0){t.target=this;const s=i.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,t);t.target=null}}}const Ne=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let ml=1234567;const Rs=Math.PI/180,Fs=180/Math.PI;function kn(){const n=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Ne[n&255]+Ne[n>>8&255]+Ne[n>>16&255]+Ne[n>>24&255]+"-"+Ne[t&255]+Ne[t>>8&255]+"-"+Ne[t>>16&15|64]+Ne[t>>24&255]+"-"+Ne[e&63|128]+Ne[e>>8&255]+"-"+Ne[e>>16&255]+Ne[e>>24&255]+Ne[i&255]+Ne[i>>8&255]+Ne[i>>16&255]+Ne[i>>24&255]).toLowerCase()}function te(n,t,e){return Math.max(t,Math.min(e,n))}function $o(n,t){return(n%t+t)%t}function wu(n,t,e,i,s){return i+(n-t)*(s-i)/(e-t)}function Ru(n,t,e){return n!==t?(e-n)/(t-n):0}function Cs(n,t,e){return(1-e)*n+e*t}function Cu(n,t,e,i){return Cs(n,t,1-Math.exp(-e*i))}function Pu(n,t=1){return t-Math.abs($o(n,t*2)-t)}function Du(n,t,e){return n<=t?0:n>=e?1:(n=(n-t)/(e-t),n*n*(3-2*n))}function Lu(n,t,e){return n<=t?0:n>=e?1:(n=(n-t)/(e-t),n*n*n*(n*(n*6-15)+10))}function Iu(n,t){return n+Math.floor(Math.random()*(t-n+1))}function Uu(n,t){return n+Math.random()*(t-n)}function Fu(n){return n*(.5-Math.random())}function Nu(n){n!==void 0&&(ml=n);let t=ml+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function Ou(n){return n*Rs}function Bu(n){return n*Fs}function zu(n){return(n&n-1)===0&&n!==0}function ku(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function Hu(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function Gu(n,t,e,i,s){const r=Math.cos,a=Math.sin,o=r(e/2),c=a(e/2),l=r((t+i)/2),d=a((t+i)/2),f=r((t-i)/2),p=a((t-i)/2),m=r((i-t)/2),_=a((i-t)/2);switch(s){case"XYX":n.set(o*d,c*f,c*p,o*l);break;case"YZY":n.set(c*p,o*d,c*f,o*l);break;case"ZXZ":n.set(c*f,c*p,o*d,o*l);break;case"XZX":n.set(o*d,c*_,c*m,o*l);break;case"YXY":n.set(c*m,o*d,c*_,o*l);break;case"ZYZ":n.set(c*_,c*m,o*d,o*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function vn(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function ue(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}const lt={DEG2RAD:Rs,RAD2DEG:Fs,generateUUID:kn,clamp:te,euclideanModulo:$o,mapLinear:wu,inverseLerp:Ru,lerp:Cs,damp:Cu,pingpong:Pu,smoothstep:Du,smootherstep:Lu,randInt:Iu,randFloat:Uu,randFloatSpread:Fu,seededRandom:Nu,degToRad:Ou,radToDeg:Bu,isPowerOfTwo:zu,ceilPowerOfTwo:ku,floorPowerOfTwo:Hu,setQuaternionFromProperEuler:Gu,normalize:ue,denormalize:vn};class Gt{constructor(t=0,e=0){Gt.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,i=this.y,s=t.elements;return this.x=s[0]*e+s[3]*i+s[6],this.y=s[1]*e+s[4]*i+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=te(this.x,t.x,e.x),this.y=te(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=te(this.x,t,e),this.y=te(this.y,t,e),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(te(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(te(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y;return e*e+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const i=Math.cos(e),s=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*i-a*s+t.x,this.y=r*s+a*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class ai{constructor(t=0,e=0,i=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=i,this._w=s}static slerpFlat(t,e,i,s,r,a,o){let c=i[s+0],l=i[s+1],d=i[s+2],f=i[s+3];const p=r[a+0],m=r[a+1],_=r[a+2],M=r[a+3];if(o===0){t[e+0]=c,t[e+1]=l,t[e+2]=d,t[e+3]=f;return}if(o===1){t[e+0]=p,t[e+1]=m,t[e+2]=_,t[e+3]=M;return}if(f!==M||c!==p||l!==m||d!==_){let h=1-o;const u=c*p+l*m+d*_+f*M,b=u>=0?1:-1,x=1-u*u;if(x>Number.EPSILON){const A=Math.sqrt(x),S=Math.atan2(A,u*b);h=Math.sin(h*S)/A,o=Math.sin(o*S)/A}const g=o*b;if(c=c*h+p*g,l=l*h+m*g,d=d*h+_*g,f=f*h+M*g,h===1-o){const A=1/Math.sqrt(c*c+l*l+d*d+f*f);c*=A,l*=A,d*=A,f*=A}}t[e]=c,t[e+1]=l,t[e+2]=d,t[e+3]=f}static multiplyQuaternionsFlat(t,e,i,s,r,a){const o=i[s],c=i[s+1],l=i[s+2],d=i[s+3],f=r[a],p=r[a+1],m=r[a+2],_=r[a+3];return t[e]=o*_+d*f+c*m-l*p,t[e+1]=c*_+d*p+l*f-o*m,t[e+2]=l*_+d*m+o*p-c*f,t[e+3]=d*_-o*f-c*p-l*m,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,i,s){return this._x=t,this._y=e,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const i=t._x,s=t._y,r=t._z,a=t._order,o=Math.cos,c=Math.sin,l=o(i/2),d=o(s/2),f=o(r/2),p=c(i/2),m=c(s/2),_=c(r/2);switch(a){case"XYZ":this._x=p*d*f+l*m*_,this._y=l*m*f-p*d*_,this._z=l*d*_+p*m*f,this._w=l*d*f-p*m*_;break;case"YXZ":this._x=p*d*f+l*m*_,this._y=l*m*f-p*d*_,this._z=l*d*_-p*m*f,this._w=l*d*f+p*m*_;break;case"ZXY":this._x=p*d*f-l*m*_,this._y=l*m*f+p*d*_,this._z=l*d*_+p*m*f,this._w=l*d*f-p*m*_;break;case"ZYX":this._x=p*d*f-l*m*_,this._y=l*m*f+p*d*_,this._z=l*d*_-p*m*f,this._w=l*d*f+p*m*_;break;case"YZX":this._x=p*d*f+l*m*_,this._y=l*m*f+p*d*_,this._z=l*d*_-p*m*f,this._w=l*d*f-p*m*_;break;case"XZY":this._x=p*d*f-l*m*_,this._y=l*m*f-p*d*_,this._z=l*d*_+p*m*f,this._w=l*d*f+p*m*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const i=e/2,s=Math.sin(i);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,i=e[0],s=e[4],r=e[8],a=e[1],o=e[5],c=e[9],l=e[2],d=e[6],f=e[10],p=i+o+f;if(p>0){const m=.5/Math.sqrt(p+1);this._w=.25/m,this._x=(d-c)*m,this._y=(r-l)*m,this._z=(a-s)*m}else if(i>o&&i>f){const m=2*Math.sqrt(1+i-o-f);this._w=(d-c)/m,this._x=.25*m,this._y=(s+a)/m,this._z=(r+l)/m}else if(o>f){const m=2*Math.sqrt(1+o-i-f);this._w=(r-l)/m,this._x=(s+a)/m,this._y=.25*m,this._z=(c+d)/m}else{const m=2*Math.sqrt(1+f-i-o);this._w=(a-s)/m,this._x=(r+l)/m,this._y=(c+d)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let i=t.dot(e)+1;return i<1e-8?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(te(this.dot(t),-1,1)))}rotateTowards(t,e){const i=this.angleTo(t);if(i===0)return this;const s=Math.min(1,e/i);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const i=t._x,s=t._y,r=t._z,a=t._w,o=e._x,c=e._y,l=e._z,d=e._w;return this._x=i*d+a*o+s*l-r*c,this._y=s*d+a*c+r*o-i*l,this._z=r*d+a*l+i*c-s*o,this._w=a*d-i*o-s*c-r*l,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const i=this._x,s=this._y,r=this._z,a=this._w;let o=a*t._w+i*t._x+s*t._y+r*t._z;if(o<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,o=-o):this.copy(t),o>=1)return this._w=a,this._x=i,this._y=s,this._z=r,this;const c=1-o*o;if(c<=Number.EPSILON){const m=1-e;return this._w=m*a+e*this._w,this._x=m*i+e*this._x,this._y=m*s+e*this._y,this._z=m*r+e*this._z,this.normalize(),this}const l=Math.sqrt(c),d=Math.atan2(l,o),f=Math.sin((1-e)*d)/l,p=Math.sin(e*d)/l;return this._w=a*f+this._w*p,this._x=i*f+this._x*p,this._y=s*f+this._y*p,this._z=r*f+this._z*p,this._onChangeCallback(),this}slerpQuaternions(t,e,i){return this.copy(t).slerp(e,i)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class B{constructor(t=0,e=0,i=0){B.prototype.isVector3=!0,this.x=t,this.y=e,this.z=i}set(t,e,i){return i===void 0&&(i=this.z),this.x=t,this.y=e,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(gl.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(gl.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,i=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*i+r[6]*s,this.y=r[1]*e+r[4]*i+r[7]*s,this.z=r[2]*e+r[5]*i+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,i=this.y,s=this.z,r=t.elements,a=1/(r[3]*e+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*i+r[8]*s+r[12])*a,this.y=(r[1]*e+r[5]*i+r[9]*s+r[13])*a,this.z=(r[2]*e+r[6]*i+r[10]*s+r[14])*a,this}applyQuaternion(t){const e=this.x,i=this.y,s=this.z,r=t.x,a=t.y,o=t.z,c=t.w,l=2*(a*s-o*i),d=2*(o*e-r*s),f=2*(r*i-a*e);return this.x=e+c*l+a*f-o*d,this.y=i+c*d+o*l-r*f,this.z=s+c*f+r*d-a*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,i=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*i+r[8]*s,this.y=r[1]*e+r[5]*i+r[9]*s,this.z=r[2]*e+r[6]*i+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=te(this.x,t.x,e.x),this.y=te(this.y,t.y,e.y),this.z=te(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=te(this.x,t,e),this.y=te(this.y,t,e),this.z=te(this.z,t,e),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(te(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const i=t.x,s=t.y,r=t.z,a=e.x,o=e.y,c=e.z;return this.x=s*c-r*o,this.y=r*a-i*c,this.z=i*o-s*a,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const i=t.dot(this)/e;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return na.copy(this).projectOnVector(t),this.sub(na)}reflect(t){return this.sub(na.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(te(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y,s=this.z-t.z;return e*e+i*i+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,i){const s=Math.sin(e)*t;return this.x=s*Math.sin(i),this.y=Math.cos(e)*t,this.z=s*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,i){return this.x=t*Math.sin(e),this.y=i,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=i,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,i=Math.sqrt(1-e*e);return this.x=i*Math.cos(t),this.y=e,this.z=i*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const na=new B,gl=new ai;class Kt{constructor(t,e,i,s,r,a,o,c,l){Kt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,i,s,r,a,o,c,l)}set(t,e,i,s,r,a,o,c,l){const d=this.elements;return d[0]=t,d[1]=s,d[2]=o,d[3]=e,d[4]=r,d[5]=c,d[6]=i,d[7]=a,d[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],this}extractBasis(t,e,i){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,s=e.elements,r=this.elements,a=i[0],o=i[3],c=i[6],l=i[1],d=i[4],f=i[7],p=i[2],m=i[5],_=i[8],M=s[0],h=s[3],u=s[6],b=s[1],x=s[4],g=s[7],A=s[2],S=s[5],T=s[8];return r[0]=a*M+o*b+c*A,r[3]=a*h+o*x+c*S,r[6]=a*u+o*g+c*T,r[1]=l*M+d*b+f*A,r[4]=l*h+d*x+f*S,r[7]=l*u+d*g+f*T,r[2]=p*M+m*b+_*A,r[5]=p*h+m*x+_*S,r[8]=p*u+m*g+_*T,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],a=t[4],o=t[5],c=t[6],l=t[7],d=t[8];return e*a*d-e*o*l-i*r*d+i*o*c+s*r*l-s*a*c}invert(){const t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],a=t[4],o=t[5],c=t[6],l=t[7],d=t[8],f=d*a-o*l,p=o*c-d*r,m=l*r-a*c,_=e*f+i*p+s*m;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const M=1/_;return t[0]=f*M,t[1]=(s*l-d*i)*M,t[2]=(o*i-s*a)*M,t[3]=p*M,t[4]=(d*e-s*c)*M,t[5]=(s*r-o*e)*M,t[6]=m*M,t[7]=(i*c-l*e)*M,t[8]=(a*e-i*r)*M,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,i,s,r,a,o){const c=Math.cos(r),l=Math.sin(r);return this.set(i*c,i*l,-i*(c*a+l*o)+a+t,-s*l,s*c,-s*(-l*a+c*o)+o+e,0,0,1),this}scale(t,e){return this.premultiply(ia.makeScale(t,e)),this}rotate(t){return this.premultiply(ia.makeRotation(-t)),this}translate(t,e){return this.premultiply(ia.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,i,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,i=t.elements;for(let s=0;s<9;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<9;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const ia=new Kt;function qc(n){for(let t=n.length-1;t>=0;--t)if(n[t]>=65535)return!0;return!1}function Or(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function Vu(){const n=Or("canvas");return n.style.display="block",n}const _l={};function Ns(n){n in _l||(_l[n]=!0,console.warn(n))}function Wu(n,t,e){return new Promise(function(i,s){function r(){switch(n.clientWaitSync(t,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:i()}}setTimeout(r,e)})}const xl=new Kt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),vl=new Kt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Xu(){const n={enabled:!0,workingColorSpace:us,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===fe&&(s.r=Hn(s.r),s.g=Hn(s.g),s.b=Hn(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===fe&&(s.r=rs(s.r),s.g=rs(s.g),s.b=rs(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Jn?Fr:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return Ns("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),n.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return Ns("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),n.colorSpaceToWorking(s,r)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[us]:{primaries:t,whitePoint:i,transfer:Fr,toXYZ:xl,fromXYZ:vl,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:Fe},outputColorSpaceConfig:{drawingBufferColorSpace:Fe}},[Fe]:{primaries:t,whitePoint:i,transfer:fe,toXYZ:xl,fromXYZ:vl,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:Fe}}}),n}const le=Xu();function Hn(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function rs(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let Fi;class $u{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let i;if(t instanceof HTMLCanvasElement)i=t;else{Fi===void 0&&(Fi=Or("canvas")),Fi.width=t.width,Fi.height=t.height;const s=Fi.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),i=Fi}return i.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=Or("canvas");e.width=t.width,e.height=t.height;const i=e.getContext("2d");i.drawImage(t,0,0,t.width,t.height);const s=i.getImageData(0,0,t.width,t.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=Hn(r[a]/255)*255;return i.putImageData(s,0,0),e}else if(t.data){const e=t.data.slice(0);for(let i=0;i<e.length;i++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[i]=Math.floor(Hn(e[i]/255)*255):e[i]=Hn(e[i]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let qu=0;class qo{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:qu++}),this.uuid=kn(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):e instanceof VideoFrame?t.set(e.displayHeight,e.displayWidth,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(sa(s[a].image)):r.push(sa(s[a]))}else r=sa(s);i.url=r}return e||(t.images[this.uuid]=i),i}}function sa(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?$u.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Yu=0;const ra=new B;class Xe extends Pi{constructor(t=Xe.DEFAULT_IMAGE,e=Xe.DEFAULT_MAPPING,i=yi,s=yi,r=Mn,a=ti,o=yn,c=Gn,l=Xe.DEFAULT_ANISOTROPY,d=Jn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Yu++}),this.uuid=kn(),this.name="",this.source=new qo(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new Gt(0,0),this.repeat=new Gt(1,1),this.center=new Gt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Kt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=d,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(ra).x}get height(){return this.source.getSize(ra).y}get depth(){return this.source.getSize(ra).z}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const e in t){const i=t[e];if(i===void 0){console.warn(`THREE.Texture.setValues(): parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){console.warn(`THREE.Texture.setValues(): property '${e}' does not exist.`);continue}s&&i&&s.isVector2&&i.isVector2||s&&i&&s.isVector3&&i.isVector3||s&&i&&s.isMatrix3&&i.isMatrix3?s.copy(i):this[e]=i}}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),e||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Oc)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case ja:t.x=t.x-Math.floor(t.x);break;case yi:t.x=t.x<0?0:1;break;case Ka:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case ja:t.y=t.y-Math.floor(t.y);break;case yi:t.y=t.y<0?0:1;break;case Ka:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Xe.DEFAULT_IMAGE=null;Xe.DEFAULT_MAPPING=Oc;Xe.DEFAULT_ANISOTROPY=1;class Ee{constructor(t=0,e=0,i=0,s=1){Ee.prototype.isVector4=!0,this.x=t,this.y=e,this.z=i,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,i,s){return this.x=t,this.y=e,this.z=i,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,i=this.y,s=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*i+a[8]*s+a[12]*r,this.y=a[1]*e+a[5]*i+a[9]*s+a[13]*r,this.z=a[2]*e+a[6]*i+a[10]*s+a[14]*r,this.w=a[3]*e+a[7]*i+a[11]*s+a[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,i,s,r;const c=t.elements,l=c[0],d=c[4],f=c[8],p=c[1],m=c[5],_=c[9],M=c[2],h=c[6],u=c[10];if(Math.abs(d-p)<.01&&Math.abs(f-M)<.01&&Math.abs(_-h)<.01){if(Math.abs(d+p)<.1&&Math.abs(f+M)<.1&&Math.abs(_+h)<.1&&Math.abs(l+m+u-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const x=(l+1)/2,g=(m+1)/2,A=(u+1)/2,S=(d+p)/4,T=(f+M)/4,R=(_+h)/4;return x>g&&x>A?x<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(x),s=S/i,r=T/i):g>A?g<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(g),i=S/s,r=R/s):A<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(A),i=T/r,s=R/r),this.set(i,s,r,e),this}let b=Math.sqrt((h-_)*(h-_)+(f-M)*(f-M)+(p-d)*(p-d));return Math.abs(b)<.001&&(b=1),this.x=(h-_)/b,this.y=(f-M)/b,this.z=(p-d)/b,this.w=Math.acos((l+m+u-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=te(this.x,t.x,e.x),this.y=te(this.y,t.y,e.y),this.z=te(this.z,t.z,e.z),this.w=te(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=te(this.x,t,e),this.y=te(this.y,t,e),this.z=te(this.z,t,e),this.w=te(this.w,t,e),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(te(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this.w=t.w+(e.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class ju extends Pi{constructor(t=1,e=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Mn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},i),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=i.depth,this.scissor=new Ee(0,0,t,e),this.scissorTest=!1,this.viewport=new Ee(0,0,t,e);const s={width:t,height:e,depth:i.depth},r=new Xe(s);this.textures=[];const a=i.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}_setTextureOptions(t={}){const e={minFilter:Mn,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,i=1){if(this.width!==t||this.height!==e||this.depth!==i){this.width=t,this.height=e,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=i,this.textures[s].isArrayTexture=this.textures[s].image.depth>1;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,i=t.textures.length;e<i;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;const s=Object.assign({},t.textures[e].image);this.textures[e].source=new qo(s)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class wi extends ju{constructor(t=1,e=1,i={}){super(t,e,i),this.isWebGLRenderTarget=!0}}class Yc extends Xe{constructor(t=null,e=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=En,this.minFilter=En,this.wrapR=yi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class Ku extends Xe{constructor(t=null,e=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=En,this.minFilter=En,this.wrapR=yi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ks{constructor(t=new B(1/0,1/0,1/0),e=new B(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e+=3)this.expandByPoint(pn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,i=t.count;e<i;e++)this.expandByPoint(pn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const i=pn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const i=t.geometry;if(i!==void 0){const r=i.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,pn):pn.fromBufferAttribute(r,a),pn.applyMatrix4(t.matrixWorld),this.expandByPoint(pn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),js.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),js.copy(i.boundingBox)),js.applyMatrix4(t.matrixWorld),this.union(js)}const s=t.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,pn),pn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,i;return t.normal.x>0?(e=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),e<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(gs),Ks.subVectors(this.max,gs),Ni.subVectors(t.a,gs),Oi.subVectors(t.b,gs),Bi.subVectors(t.c,gs),Wn.subVectors(Oi,Ni),Xn.subVectors(Bi,Oi),hi.subVectors(Ni,Bi);let e=[0,-Wn.z,Wn.y,0,-Xn.z,Xn.y,0,-hi.z,hi.y,Wn.z,0,-Wn.x,Xn.z,0,-Xn.x,hi.z,0,-hi.x,-Wn.y,Wn.x,0,-Xn.y,Xn.x,0,-hi.y,hi.x,0];return!aa(e,Ni,Oi,Bi,Ks)||(e=[1,0,0,0,1,0,0,0,1],!aa(e,Ni,Oi,Bi,Ks))?!1:(Zs.crossVectors(Wn,Xn),e=[Zs.x,Zs.y,Zs.z],aa(e,Ni,Oi,Bi,Ks))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,pn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(pn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Ln[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Ln[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Ln[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Ln[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Ln[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Ln[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Ln[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Ln[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Ln),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const Ln=[new B,new B,new B,new B,new B,new B,new B,new B],pn=new B,js=new ks,Ni=new B,Oi=new B,Bi=new B,Wn=new B,Xn=new B,hi=new B,gs=new B,Ks=new B,Zs=new B,ui=new B;function aa(n,t,e,i,s){for(let r=0,a=n.length-3;r<=a;r+=3){ui.fromArray(n,r);const o=s.x*Math.abs(ui.x)+s.y*Math.abs(ui.y)+s.z*Math.abs(ui.z),c=t.dot(ui),l=e.dot(ui),d=i.dot(ui);if(Math.max(-Math.max(c,l,d),Math.min(c,l,d))>o)return!1}return!0}const Zu=new ks,_s=new B,oa=new B;class Hs{constructor(t=new B,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const i=this.center;e!==void 0?i.copy(e):Zu.setFromPoints(t).getCenter(i);let s=0;for(let r=0,a=t.length;r<a;r++)s=Math.max(s,i.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const i=this.center.distanceToSquared(t);return e.copy(t),i>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;_s.subVectors(t,this.center);const e=_s.lengthSq();if(e>this.radius*this.radius){const i=Math.sqrt(e),s=(i-this.radius)*.5;this.center.addScaledVector(_s,s/i),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(oa.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(_s.copy(t.center).add(oa)),this.expandByPoint(_s.copy(t.center).sub(oa))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}const In=new B,la=new B,Js=new B,$n=new B,ca=new B,Qs=new B,ha=new B;class Gs{constructor(t=new B,e=new B(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,In)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const i=e.dot(this.direction);return i<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=In.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(In.copy(this.origin).addScaledVector(this.direction,e),In.distanceToSquared(t))}distanceSqToSegment(t,e,i,s){la.copy(t).add(e).multiplyScalar(.5),Js.copy(e).sub(t).normalize(),$n.copy(this.origin).sub(la);const r=t.distanceTo(e)*.5,a=-this.direction.dot(Js),o=$n.dot(this.direction),c=-$n.dot(Js),l=$n.lengthSq(),d=Math.abs(1-a*a);let f,p,m,_;if(d>0)if(f=a*c-o,p=a*o-c,_=r*d,f>=0)if(p>=-_)if(p<=_){const M=1/d;f*=M,p*=M,m=f*(f+a*p+2*o)+p*(a*f+p+2*c)+l}else p=r,f=Math.max(0,-(a*p+o)),m=-f*f+p*(p+2*c)+l;else p=-r,f=Math.max(0,-(a*p+o)),m=-f*f+p*(p+2*c)+l;else p<=-_?(f=Math.max(0,-(-a*r+o)),p=f>0?-r:Math.min(Math.max(-r,-c),r),m=-f*f+p*(p+2*c)+l):p<=_?(f=0,p=Math.min(Math.max(-r,-c),r),m=p*(p+2*c)+l):(f=Math.max(0,-(a*r+o)),p=f>0?r:Math.min(Math.max(-r,-c),r),m=-f*f+p*(p+2*c)+l);else p=a>0?-r:r,f=Math.max(0,-(a*p+o)),m=-f*f+p*(p+2*c)+l;return i&&i.copy(this.origin).addScaledVector(this.direction,f),s&&s.copy(la).addScaledVector(Js,p),m}intersectSphere(t,e){In.subVectors(t.center,this.origin);const i=In.dot(this.direction),s=In.dot(In)-i*i,r=t.radius*t.radius;if(s>r)return null;const a=Math.sqrt(r-s),o=i-a,c=i+a;return c<0?null:o<0?this.at(c,e):this.at(o,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(t.normal)+t.constant)/e;return i>=0?i:null}intersectPlane(t,e){const i=this.distanceToPlane(t);return i===null?null:this.at(i,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let i,s,r,a,o,c;const l=1/this.direction.x,d=1/this.direction.y,f=1/this.direction.z,p=this.origin;return l>=0?(i=(t.min.x-p.x)*l,s=(t.max.x-p.x)*l):(i=(t.max.x-p.x)*l,s=(t.min.x-p.x)*l),d>=0?(r=(t.min.y-p.y)*d,a=(t.max.y-p.y)*d):(r=(t.max.y-p.y)*d,a=(t.min.y-p.y)*d),i>a||r>s||((r>i||isNaN(i))&&(i=r),(a<s||isNaN(s))&&(s=a),f>=0?(o=(t.min.z-p.z)*f,c=(t.max.z-p.z)*f):(o=(t.max.z-p.z)*f,c=(t.min.z-p.z)*f),i>c||o>s)||((o>i||i!==i)&&(i=o),(c<s||s!==s)&&(s=c),s<0)?null:this.at(i>=0?i:s,e)}intersectsBox(t){return this.intersectBox(t,In)!==null}intersectTriangle(t,e,i,s,r){ca.subVectors(e,t),Qs.subVectors(i,t),ha.crossVectors(ca,Qs);let a=this.direction.dot(ha),o;if(a>0){if(s)return null;o=1}else if(a<0)o=-1,a=-a;else return null;$n.subVectors(this.origin,t);const c=o*this.direction.dot(Qs.crossVectors($n,Qs));if(c<0)return null;const l=o*this.direction.dot(ca.cross($n));if(l<0||c+l>a)return null;const d=-o*$n.dot(ha);return d<0?null:this.at(d/a,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Me{constructor(t,e,i,s,r,a,o,c,l,d,f,p,m,_,M,h){Me.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,i,s,r,a,o,c,l,d,f,p,m,_,M,h)}set(t,e,i,s,r,a,o,c,l,d,f,p,m,_,M,h){const u=this.elements;return u[0]=t,u[4]=e,u[8]=i,u[12]=s,u[1]=r,u[5]=a,u[9]=o,u[13]=c,u[2]=l,u[6]=d,u[10]=f,u[14]=p,u[3]=m,u[7]=_,u[11]=M,u[15]=h,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Me().fromArray(this.elements)}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],e[9]=i[9],e[10]=i[10],e[11]=i[11],e[12]=i[12],e[13]=i[13],e[14]=i[14],e[15]=i[15],this}copyPosition(t){const e=this.elements,i=t.elements;return e[12]=i[12],e[13]=i[13],e[14]=i[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,i){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(t,e,i){return this.set(t.x,e.x,i.x,0,t.y,e.y,i.y,0,t.z,e.z,i.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,i=t.elements,s=1/zi.setFromMatrixColumn(t,0).length(),r=1/zi.setFromMatrixColumn(t,1).length(),a=1/zi.setFromMatrixColumn(t,2).length();return e[0]=i[0]*s,e[1]=i[1]*s,e[2]=i[2]*s,e[3]=0,e[4]=i[4]*r,e[5]=i[5]*r,e[6]=i[6]*r,e[7]=0,e[8]=i[8]*a,e[9]=i[9]*a,e[10]=i[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,i=t.x,s=t.y,r=t.z,a=Math.cos(i),o=Math.sin(i),c=Math.cos(s),l=Math.sin(s),d=Math.cos(r),f=Math.sin(r);if(t.order==="XYZ"){const p=a*d,m=a*f,_=o*d,M=o*f;e[0]=c*d,e[4]=-c*f,e[8]=l,e[1]=m+_*l,e[5]=p-M*l,e[9]=-o*c,e[2]=M-p*l,e[6]=_+m*l,e[10]=a*c}else if(t.order==="YXZ"){const p=c*d,m=c*f,_=l*d,M=l*f;e[0]=p+M*o,e[4]=_*o-m,e[8]=a*l,e[1]=a*f,e[5]=a*d,e[9]=-o,e[2]=m*o-_,e[6]=M+p*o,e[10]=a*c}else if(t.order==="ZXY"){const p=c*d,m=c*f,_=l*d,M=l*f;e[0]=p-M*o,e[4]=-a*f,e[8]=_+m*o,e[1]=m+_*o,e[5]=a*d,e[9]=M-p*o,e[2]=-a*l,e[6]=o,e[10]=a*c}else if(t.order==="ZYX"){const p=a*d,m=a*f,_=o*d,M=o*f;e[0]=c*d,e[4]=_*l-m,e[8]=p*l+M,e[1]=c*f,e[5]=M*l+p,e[9]=m*l-_,e[2]=-l,e[6]=o*c,e[10]=a*c}else if(t.order==="YZX"){const p=a*c,m=a*l,_=o*c,M=o*l;e[0]=c*d,e[4]=M-p*f,e[8]=_*f+m,e[1]=f,e[5]=a*d,e[9]=-o*d,e[2]=-l*d,e[6]=m*f+_,e[10]=p-M*f}else if(t.order==="XZY"){const p=a*c,m=a*l,_=o*c,M=o*l;e[0]=c*d,e[4]=-f,e[8]=l*d,e[1]=p*f+M,e[5]=a*d,e[9]=m*f-_,e[2]=_*f-m,e[6]=o*d,e[10]=M*f+p}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Ju,t,Qu)}lookAt(t,e,i){const s=this.elements;return Je.subVectors(t,e),Je.lengthSq()===0&&(Je.z=1),Je.normalize(),qn.crossVectors(i,Je),qn.lengthSq()===0&&(Math.abs(i.z)===1?Je.x+=1e-4:Je.z+=1e-4,Je.normalize(),qn.crossVectors(i,Je)),qn.normalize(),tr.crossVectors(Je,qn),s[0]=qn.x,s[4]=tr.x,s[8]=Je.x,s[1]=qn.y,s[5]=tr.y,s[9]=Je.y,s[2]=qn.z,s[6]=tr.z,s[10]=Je.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,s=e.elements,r=this.elements,a=i[0],o=i[4],c=i[8],l=i[12],d=i[1],f=i[5],p=i[9],m=i[13],_=i[2],M=i[6],h=i[10],u=i[14],b=i[3],x=i[7],g=i[11],A=i[15],S=s[0],T=s[4],R=s[8],v=s[12],y=s[1],P=s[5],D=s[9],F=s[13],I=s[2],U=s[6],O=s[10],z=s[14],N=s[3],Z=s[7],Y=s[11],it=s[15];return r[0]=a*S+o*y+c*I+l*N,r[4]=a*T+o*P+c*U+l*Z,r[8]=a*R+o*D+c*O+l*Y,r[12]=a*v+o*F+c*z+l*it,r[1]=d*S+f*y+p*I+m*N,r[5]=d*T+f*P+p*U+m*Z,r[9]=d*R+f*D+p*O+m*Y,r[13]=d*v+f*F+p*z+m*it,r[2]=_*S+M*y+h*I+u*N,r[6]=_*T+M*P+h*U+u*Z,r[10]=_*R+M*D+h*O+u*Y,r[14]=_*v+M*F+h*z+u*it,r[3]=b*S+x*y+g*I+A*N,r[7]=b*T+x*P+g*U+A*Z,r[11]=b*R+x*D+g*O+A*Y,r[15]=b*v+x*F+g*z+A*it,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[4],s=t[8],r=t[12],a=t[1],o=t[5],c=t[9],l=t[13],d=t[2],f=t[6],p=t[10],m=t[14],_=t[3],M=t[7],h=t[11],u=t[15];return _*(+r*c*f-s*l*f-r*o*p+i*l*p+s*o*m-i*c*m)+M*(+e*c*m-e*l*p+r*a*p-s*a*m+s*l*d-r*c*d)+h*(+e*l*f-e*o*m-r*a*f+i*a*m+r*o*d-i*l*d)+u*(-s*o*d-e*c*f+e*o*p+s*a*f-i*a*p+i*c*d)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,i){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=i),this}invert(){const t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],a=t[4],o=t[5],c=t[6],l=t[7],d=t[8],f=t[9],p=t[10],m=t[11],_=t[12],M=t[13],h=t[14],u=t[15],b=f*h*l-M*p*l+M*c*m-o*h*m-f*c*u+o*p*u,x=_*p*l-d*h*l-_*c*m+a*h*m+d*c*u-a*p*u,g=d*M*l-_*f*l+_*o*m-a*M*m-d*o*u+a*f*u,A=_*f*c-d*M*c-_*o*p+a*M*p+d*o*h-a*f*h,S=e*b+i*x+s*g+r*A;if(S===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const T=1/S;return t[0]=b*T,t[1]=(M*p*r-f*h*r-M*s*m+i*h*m+f*s*u-i*p*u)*T,t[2]=(o*h*r-M*c*r+M*s*l-i*h*l-o*s*u+i*c*u)*T,t[3]=(f*c*r-o*p*r-f*s*l+i*p*l+o*s*m-i*c*m)*T,t[4]=x*T,t[5]=(d*h*r-_*p*r+_*s*m-e*h*m-d*s*u+e*p*u)*T,t[6]=(_*c*r-a*h*r-_*s*l+e*h*l+a*s*u-e*c*u)*T,t[7]=(a*p*r-d*c*r+d*s*l-e*p*l-a*s*m+e*c*m)*T,t[8]=g*T,t[9]=(_*f*r-d*M*r-_*i*m+e*M*m+d*i*u-e*f*u)*T,t[10]=(a*M*r-_*o*r+_*i*l-e*M*l-a*i*u+e*o*u)*T,t[11]=(d*o*r-a*f*r-d*i*l+e*f*l+a*i*m-e*o*m)*T,t[12]=A*T,t[13]=(d*M*s-_*f*s+_*i*p-e*M*p-d*i*h+e*f*h)*T,t[14]=(_*o*s-a*M*s-_*i*c+e*M*c+a*i*h-e*o*h)*T,t[15]=(a*f*s-d*o*s+d*i*c-e*f*c-a*i*p+e*o*p)*T,this}scale(t){const e=this.elements,i=t.x,s=t.y,r=t.z;return e[0]*=i,e[4]*=s,e[8]*=r,e[1]*=i,e[5]*=s,e[9]*=r,e[2]*=i,e[6]*=s,e[10]*=r,e[3]*=i,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,i,s))}makeTranslation(t,e,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,i,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,e,-i,0,0,i,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,0,i,0,0,1,0,0,-i,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,0,i,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const i=Math.cos(e),s=Math.sin(e),r=1-i,a=t.x,o=t.y,c=t.z,l=r*a,d=r*o;return this.set(l*a+i,l*o-s*c,l*c+s*o,0,l*o+s*c,d*o+i,d*c-s*a,0,l*c-s*o,d*c+s*a,r*c*c+i,0,0,0,0,1),this}makeScale(t,e,i){return this.set(t,0,0,0,0,e,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,e,i,s,r,a){return this.set(1,i,r,0,t,1,a,0,e,s,1,0,0,0,0,1),this}compose(t,e,i){const s=this.elements,r=e._x,a=e._y,o=e._z,c=e._w,l=r+r,d=a+a,f=o+o,p=r*l,m=r*d,_=r*f,M=a*d,h=a*f,u=o*f,b=c*l,x=c*d,g=c*f,A=i.x,S=i.y,T=i.z;return s[0]=(1-(M+u))*A,s[1]=(m+g)*A,s[2]=(_-x)*A,s[3]=0,s[4]=(m-g)*S,s[5]=(1-(p+u))*S,s[6]=(h+b)*S,s[7]=0,s[8]=(_+x)*T,s[9]=(h-b)*T,s[10]=(1-(p+M))*T,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,i){const s=this.elements;let r=zi.set(s[0],s[1],s[2]).length();const a=zi.set(s[4],s[5],s[6]).length(),o=zi.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],mn.copy(this);const l=1/r,d=1/a,f=1/o;return mn.elements[0]*=l,mn.elements[1]*=l,mn.elements[2]*=l,mn.elements[4]*=d,mn.elements[5]*=d,mn.elements[6]*=d,mn.elements[8]*=f,mn.elements[9]*=f,mn.elements[10]*=f,e.setFromRotationMatrix(mn),i.x=r,i.y=a,i.z=o,this}makePerspective(t,e,i,s,r,a,o=Rn,c=!1){const l=this.elements,d=2*r/(e-t),f=2*r/(i-s),p=(e+t)/(e-t),m=(i+s)/(i-s);let _,M;if(c)_=r/(a-r),M=a*r/(a-r);else if(o===Rn)_=-(a+r)/(a-r),M=-2*a*r/(a-r);else if(o===Nr)_=-a/(a-r),M=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=d,l[4]=0,l[8]=p,l[12]=0,l[1]=0,l[5]=f,l[9]=m,l[13]=0,l[2]=0,l[6]=0,l[10]=_,l[14]=M,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,i,s,r,a,o=Rn,c=!1){const l=this.elements,d=2/(e-t),f=2/(i-s),p=-(e+t)/(e-t),m=-(i+s)/(i-s);let _,M;if(c)_=1/(a-r),M=a/(a-r);else if(o===Rn)_=-2/(a-r),M=-(a+r)/(a-r);else if(o===Nr)_=-1/(a-r),M=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=d,l[4]=0,l[8]=0,l[12]=p,l[1]=0,l[5]=f,l[9]=0,l[13]=m,l[2]=0,l[6]=0,l[10]=_,l[14]=M,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){const e=this.elements,i=t.elements;for(let s=0;s<16;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<16;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t[e+9]=i[9],t[e+10]=i[10],t[e+11]=i[11],t[e+12]=i[12],t[e+13]=i[13],t[e+14]=i[14],t[e+15]=i[15],t}}const zi=new B,mn=new Me,Ju=new B(0,0,0),Qu=new B(1,1,1),qn=new B,tr=new B,Je=new B,Ml=new Me,yl=new ai;class Vn{constructor(t=0,e=0,i=0,s=Vn.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=i,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,i,s=this._order){return this._x=t,this._y=e,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,i=!0){const s=t.elements,r=s[0],a=s[4],o=s[8],c=s[1],l=s[5],d=s[9],f=s[2],p=s[6],m=s[10];switch(e){case"XYZ":this._y=Math.asin(te(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-d,m),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(p,l),this._z=0);break;case"YXZ":this._x=Math.asin(-te(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(o,m),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-f,r),this._z=0);break;case"ZXY":this._x=Math.asin(te(p,-1,1)),Math.abs(p)<.9999999?(this._y=Math.atan2(-f,m),this._z=Math.atan2(-a,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-te(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(p,m),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-a,l));break;case"YZX":this._z=Math.asin(te(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-d,l),this._y=Math.atan2(-f,r)):(this._x=0,this._y=Math.atan2(o,m));break;case"XZY":this._z=Math.asin(-te(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(p,l),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-d,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,i){return Ml.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Ml,e,i)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return yl.setFromEuler(this),this.setFromQuaternion(yl,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Vn.DEFAULT_ORDER="XYZ";class Yo{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let td=0;const Sl=new B,ki=new ai,Un=new Me,er=new B,xs=new B,ed=new B,nd=new ai,El=new B(1,0,0),bl=new B(0,1,0),Tl=new B(0,0,1),Al={type:"added"},id={type:"removed"},Hi={type:"childadded",child:null},ua={type:"childremoved",child:null};class Be extends Pi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:td++}),this.uuid=kn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Be.DEFAULT_UP.clone();const t=new B,e=new Vn,i=new ai,s=new B(1,1,1);function r(){i.setFromEuler(e,!1)}function a(){e.setFromQuaternion(i,void 0,!1)}e._onChange(r),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Me},normalMatrix:{value:new Kt}}),this.matrix=new Me,this.matrixWorld=new Me,this.matrixAutoUpdate=Be.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Be.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Yo,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return ki.setFromAxisAngle(t,e),this.quaternion.multiply(ki),this}rotateOnWorldAxis(t,e){return ki.setFromAxisAngle(t,e),this.quaternion.premultiply(ki),this}rotateX(t){return this.rotateOnAxis(El,t)}rotateY(t){return this.rotateOnAxis(bl,t)}rotateZ(t){return this.rotateOnAxis(Tl,t)}translateOnAxis(t,e){return Sl.copy(t).applyQuaternion(this.quaternion),this.position.add(Sl.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(El,t)}translateY(t){return this.translateOnAxis(bl,t)}translateZ(t){return this.translateOnAxis(Tl,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Un.copy(this.matrixWorld).invert())}lookAt(t,e,i){t.isVector3?er.copy(t):er.set(t,e,i);const s=this.parent;this.updateWorldMatrix(!0,!1),xs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Un.lookAt(xs,er,this.up):Un.lookAt(er,xs,this.up),this.quaternion.setFromRotationMatrix(Un),s&&(Un.extractRotation(s.matrixWorld),ki.setFromRotationMatrix(Un),this.quaternion.premultiply(ki.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Al),Hi.child=t,this.dispatchEvent(Hi),Hi.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(id),ua.child=t,this.dispatchEvent(ua),ua.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Un.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Un.multiply(t.parent.matrixWorld)),t.applyMatrix4(Un),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Al),Hi.child=t,this.dispatchEvent(Hi),Hi.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let i=0,s=this.children.length;i<s;i++){const a=this.children[i].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,i=[]){this[t]===e&&i.push(this);const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(t,e,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(xs,t,ed),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(xs,nd,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].updateMatrixWorld(t)}updateWorldMatrix(t,e){const i=this.parent;if(t===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",i={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const c=o.shapes;if(Array.isArray(c))for(let l=0,d=c.length;l<d;l++){const f=c[l];r(t.shapes,f)}else r(t.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(r(t.materials,this.material[c]));s.material=o}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){const c=this.animations[o];s.animations.push(r(t.animations,c))}}if(e){const o=a(t.geometries),c=a(t.materials),l=a(t.textures),d=a(t.images),f=a(t.shapes),p=a(t.skeletons),m=a(t.animations),_=a(t.nodes);o.length>0&&(i.geometries=o),c.length>0&&(i.materials=c),l.length>0&&(i.textures=l),d.length>0&&(i.images=d),f.length>0&&(i.shapes=f),p.length>0&&(i.skeletons=p),m.length>0&&(i.animations=m),_.length>0&&(i.nodes=_)}return i.object=s,i;function a(o){const c=[];for(const l in o){const d=o[l];delete d.metadata,c.push(d)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let i=0;i<t.children.length;i++){const s=t.children[i];this.add(s.clone())}return this}}Be.DEFAULT_UP=new B(0,1,0);Be.DEFAULT_MATRIX_AUTO_UPDATE=!0;Be.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const gn=new B,Fn=new B,da=new B,Nn=new B,Gi=new B,Vi=new B,wl=new B,fa=new B,pa=new B,ma=new B,ga=new Ee,_a=new Ee,xa=new Ee;class cn{constructor(t=new B,e=new B,i=new B){this.a=t,this.b=e,this.c=i}static getNormal(t,e,i,s){s.subVectors(i,e),gn.subVectors(t,e),s.cross(gn);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,i,s,r){gn.subVectors(s,e),Fn.subVectors(i,e),da.subVectors(t,e);const a=gn.dot(gn),o=gn.dot(Fn),c=gn.dot(da),l=Fn.dot(Fn),d=Fn.dot(da),f=a*l-o*o;if(f===0)return r.set(0,0,0),null;const p=1/f,m=(l*c-o*d)*p,_=(a*d-o*c)*p;return r.set(1-m-_,_,m)}static containsPoint(t,e,i,s){return this.getBarycoord(t,e,i,s,Nn)===null?!1:Nn.x>=0&&Nn.y>=0&&Nn.x+Nn.y<=1}static getInterpolation(t,e,i,s,r,a,o,c){return this.getBarycoord(t,e,i,s,Nn)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,Nn.x),c.addScaledVector(a,Nn.y),c.addScaledVector(o,Nn.z),c)}static getInterpolatedAttribute(t,e,i,s,r,a){return ga.setScalar(0),_a.setScalar(0),xa.setScalar(0),ga.fromBufferAttribute(t,e),_a.fromBufferAttribute(t,i),xa.fromBufferAttribute(t,s),a.setScalar(0),a.addScaledVector(ga,r.x),a.addScaledVector(_a,r.y),a.addScaledVector(xa,r.z),a}static isFrontFacing(t,e,i,s){return gn.subVectors(i,e),Fn.subVectors(t,e),gn.cross(Fn).dot(s)<0}set(t,e,i){return this.a.copy(t),this.b.copy(e),this.c.copy(i),this}setFromPointsAndIndices(t,e,i,s){return this.a.copy(t[e]),this.b.copy(t[i]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,i,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return gn.subVectors(this.c,this.b),Fn.subVectors(this.a,this.b),gn.cross(Fn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return cn.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return cn.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,i,s,r){return cn.getInterpolation(t,this.a,this.b,this.c,e,i,s,r)}containsPoint(t){return cn.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return cn.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const i=this.a,s=this.b,r=this.c;let a,o;Gi.subVectors(s,i),Vi.subVectors(r,i),fa.subVectors(t,i);const c=Gi.dot(fa),l=Vi.dot(fa);if(c<=0&&l<=0)return e.copy(i);pa.subVectors(t,s);const d=Gi.dot(pa),f=Vi.dot(pa);if(d>=0&&f<=d)return e.copy(s);const p=c*f-d*l;if(p<=0&&c>=0&&d<=0)return a=c/(c-d),e.copy(i).addScaledVector(Gi,a);ma.subVectors(t,r);const m=Gi.dot(ma),_=Vi.dot(ma);if(_>=0&&m<=_)return e.copy(r);const M=m*l-c*_;if(M<=0&&l>=0&&_<=0)return o=l/(l-_),e.copy(i).addScaledVector(Vi,o);const h=d*_-m*f;if(h<=0&&f-d>=0&&m-_>=0)return wl.subVectors(r,s),o=(f-d)/(f-d+(m-_)),e.copy(s).addScaledVector(wl,o);const u=1/(h+M+p);return a=M*u,o=p*u,e.copy(i).addScaledVector(Gi,a).addScaledVector(Vi,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const jc={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Yn={h:0,s:0,l:0},nr={h:0,s:0,l:0};function va(n,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?n+(t-n)*6*e:e<1/2?t:e<2/3?n+(t-n)*6*(2/3-e):n}class kt{constructor(t,e,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,i)}set(t,e,i){if(e===void 0&&i===void 0){const s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Fe){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,le.colorSpaceToWorking(this,e),this}setRGB(t,e,i,s=le.workingColorSpace){return this.r=t,this.g=e,this.b=i,le.colorSpaceToWorking(this,s),this}setHSL(t,e,i,s=le.workingColorSpace){if(t=$o(t,1),e=te(e,0,1),i=te(i,0,1),e===0)this.r=this.g=this.b=i;else{const r=i<=.5?i*(1+e):i+e-i*e,a=2*i-r;this.r=va(a,r,t+1/3),this.g=va(a,r,t),this.b=va(a,r,t-1/3)}return le.colorSpaceToWorking(this,s),this}setStyle(t,e=Fe){function i(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Fe){const i=jc[t.toLowerCase()];return i!==void 0?this.setHex(i,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Hn(t.r),this.g=Hn(t.g),this.b=Hn(t.b),this}copyLinearToSRGB(t){return this.r=rs(t.r),this.g=rs(t.g),this.b=rs(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Fe){return le.workingToColorSpace(Oe.copy(this),t),Math.round(te(Oe.r*255,0,255))*65536+Math.round(te(Oe.g*255,0,255))*256+Math.round(te(Oe.b*255,0,255))}getHexString(t=Fe){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=le.workingColorSpace){le.workingToColorSpace(Oe.copy(this),e);const i=Oe.r,s=Oe.g,r=Oe.b,a=Math.max(i,s,r),o=Math.min(i,s,r);let c,l;const d=(o+a)/2;if(o===a)c=0,l=0;else{const f=a-o;switch(l=d<=.5?f/(a+o):f/(2-a-o),a){case i:c=(s-r)/f+(s<r?6:0);break;case s:c=(r-i)/f+2;break;case r:c=(i-s)/f+4;break}c/=6}return t.h=c,t.s=l,t.l=d,t}getRGB(t,e=le.workingColorSpace){return le.workingToColorSpace(Oe.copy(this),e),t.r=Oe.r,t.g=Oe.g,t.b=Oe.b,t}getStyle(t=Fe){le.workingToColorSpace(Oe.copy(this),t);const e=Oe.r,i=Oe.g,s=Oe.b;return t!==Fe?`color(${t} ${e.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(t,e,i){return this.getHSL(Yn),this.setHSL(Yn.h+t,Yn.s+e,Yn.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,i){return this.r=t.r+(e.r-t.r)*i,this.g=t.g+(e.g-t.g)*i,this.b=t.b+(e.b-t.b)*i,this}lerpHSL(t,e){this.getHSL(Yn),t.getHSL(nr);const i=Cs(Yn.h,nr.h,e),s=Cs(Yn.s,nr.s,e),r=Cs(Yn.l,nr.l,e);return this.setHSL(i,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,i=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*i+r[6]*s,this.g=r[1]*e+r[4]*i+r[7]*s,this.b=r[2]*e+r[5]*i+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Oe=new kt;kt.NAMES=jc;let sd=0;class Di extends Pi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:sd++}),this.uuid=kn(),this.name="",this.type="Material",this.blending=bi,this.side=ri,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ba,this.blendDst=za,this.blendEquation=vi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new kt(0,0,0),this.blendAlpha=0,this.depthFunc=ls,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=fl,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ui,this.stencilZFail=Ui,this.stencilZPass=Ui,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const i=t[e];if(i===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[e]=i}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==bi&&(i.blending=this.blending),this.side!==ri&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Ba&&(i.blendSrc=this.blendSrc),this.blendDst!==za&&(i.blendDst=this.blendDst),this.blendEquation!==vi&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==ls&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==fl&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ui&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Ui&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Ui&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){const a=[];for(const o in r){const c=r[o];delete c.metadata,a.push(c)}return a}if(e){const r=s(t.textures),a=s(t.images);r.length>0&&(i.textures=r),a.length>0&&(i.images=a)}return i}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let i=null;if(e!==null){const s=e.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=e[r].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class Vs extends Di{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new kt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Vn,this.combine=Fc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const be=new B,ir=new Gt;let rd=0;class ee{constructor(t,e,i=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:rd++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=i,this.usage=Ao,this.updateRanges=[],this.gpuType=zn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,i){t*=this.itemSize,i*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[i+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,i=this.count;e<i;e++)ir.fromBufferAttribute(this,e),ir.applyMatrix3(t),this.setXY(e,ir.x,ir.y);else if(this.itemSize===3)for(let e=0,i=this.count;e<i;e++)be.fromBufferAttribute(this,e),be.applyMatrix3(t),this.setXYZ(e,be.x,be.y,be.z);return this}applyMatrix4(t){for(let e=0,i=this.count;e<i;e++)be.fromBufferAttribute(this,e),be.applyMatrix4(t),this.setXYZ(e,be.x,be.y,be.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)be.fromBufferAttribute(this,e),be.applyNormalMatrix(t),this.setXYZ(e,be.x,be.y,be.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)be.fromBufferAttribute(this,e),be.transformDirection(t),this.setXYZ(e,be.x,be.y,be.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let i=this.array[t*this.itemSize+e];return this.normalized&&(i=vn(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=ue(i,this.array)),this.array[t*this.itemSize+e]=i,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=vn(e,this.array)),e}setX(t,e){return this.normalized&&(e=ue(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=vn(e,this.array)),e}setY(t,e){return this.normalized&&(e=ue(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=vn(e,this.array)),e}setZ(t,e){return this.normalized&&(e=ue(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=vn(e,this.array)),e}setW(t,e){return this.normalized&&(e=ue(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,i){return t*=this.itemSize,this.normalized&&(e=ue(e,this.array),i=ue(i,this.array)),this.array[t+0]=e,this.array[t+1]=i,this}setXYZ(t,e,i,s){return t*=this.itemSize,this.normalized&&(e=ue(e,this.array),i=ue(i,this.array),s=ue(s,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this}setXYZW(t,e,i,s,r){return t*=this.itemSize,this.normalized&&(e=ue(e,this.array),i=ue(i,this.array),s=ue(s,this.array),r=ue(r,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Ao&&(t.usage=this.usage),t}}class Kc extends ee{constructor(t,e,i){super(new Uint16Array(t),e,i)}}class Zc extends ee{constructor(t,e,i){super(new Uint32Array(t),e,i)}}class we extends ee{constructor(t,e,i){super(new Float32Array(t),e,i)}}let ad=0;const sn=new Me,Ma=new Be,Wi=new B,Qe=new ks,vs=new ks,Ie=new B;class ie extends Pi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:ad++}),this.uuid=kn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(qc(t)?Zc:Kc)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,i=0){this.groups.push({start:t,count:e,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const r=new Kt().getNormalMatrix(t);i.applyNormalMatrix(r),i.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return sn.makeRotationFromQuaternion(t),this.applyMatrix4(sn),this}rotateX(t){return sn.makeRotationX(t),this.applyMatrix4(sn),this}rotateY(t){return sn.makeRotationY(t),this.applyMatrix4(sn),this}rotateZ(t){return sn.makeRotationZ(t),this.applyMatrix4(sn),this}translate(t,e,i){return sn.makeTranslation(t,e,i),this.applyMatrix4(sn),this}scale(t,e,i){return sn.makeScale(t,e,i),this.applyMatrix4(sn),this}lookAt(t){return Ma.lookAt(t),Ma.updateMatrix(),this.applyMatrix4(Ma.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Wi).negate(),this.translate(Wi.x,Wi.y,Wi.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const i=[];for(let s=0,r=t.length;s<r;s++){const a=t[s];i.push(a.x,a.y,a.z||0)}this.setAttribute("position",new we(i,3))}else{const i=Math.min(t.length,e.count);for(let s=0;s<i;s++){const r=t[s];e.setXYZ(s,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ks);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new B(-1/0,-1/0,-1/0),new B(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let i=0,s=e.length;i<s;i++){const r=e[i];Qe.setFromBufferAttribute(r),this.morphTargetsRelative?(Ie.addVectors(this.boundingBox.min,Qe.min),this.boundingBox.expandByPoint(Ie),Ie.addVectors(this.boundingBox.max,Qe.max),this.boundingBox.expandByPoint(Ie)):(this.boundingBox.expandByPoint(Qe.min),this.boundingBox.expandByPoint(Qe.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Hs);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new B,1/0);return}if(t){const i=this.boundingSphere.center;if(Qe.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){const o=e[r];vs.setFromBufferAttribute(o),this.morphTargetsRelative?(Ie.addVectors(Qe.min,vs.min),Qe.expandByPoint(Ie),Ie.addVectors(Qe.max,vs.max),Qe.expandByPoint(Ie)):(Qe.expandByPoint(vs.min),Qe.expandByPoint(vs.max))}Qe.getCenter(i);let s=0;for(let r=0,a=t.count;r<a;r++)Ie.fromBufferAttribute(t,r),s=Math.max(s,i.distanceToSquared(Ie));if(e)for(let r=0,a=e.length;r<a;r++){const o=e[r],c=this.morphTargetsRelative;for(let l=0,d=o.count;l<d;l++)Ie.fromBufferAttribute(o,l),c&&(Wi.fromBufferAttribute(t,l),Ie.add(Wi)),s=Math.max(s,i.distanceToSquared(Ie))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new ee(new Float32Array(4*i.count),4));const a=this.getAttribute("tangent"),o=[],c=[];for(let R=0;R<i.count;R++)o[R]=new B,c[R]=new B;const l=new B,d=new B,f=new B,p=new Gt,m=new Gt,_=new Gt,M=new B,h=new B;function u(R,v,y){l.fromBufferAttribute(i,R),d.fromBufferAttribute(i,v),f.fromBufferAttribute(i,y),p.fromBufferAttribute(r,R),m.fromBufferAttribute(r,v),_.fromBufferAttribute(r,y),d.sub(l),f.sub(l),m.sub(p),_.sub(p);const P=1/(m.x*_.y-_.x*m.y);isFinite(P)&&(M.copy(d).multiplyScalar(_.y).addScaledVector(f,-m.y).multiplyScalar(P),h.copy(f).multiplyScalar(m.x).addScaledVector(d,-_.x).multiplyScalar(P),o[R].add(M),o[v].add(M),o[y].add(M),c[R].add(h),c[v].add(h),c[y].add(h))}let b=this.groups;b.length===0&&(b=[{start:0,count:t.count}]);for(let R=0,v=b.length;R<v;++R){const y=b[R],P=y.start,D=y.count;for(let F=P,I=P+D;F<I;F+=3)u(t.getX(F+0),t.getX(F+1),t.getX(F+2))}const x=new B,g=new B,A=new B,S=new B;function T(R){A.fromBufferAttribute(s,R),S.copy(A);const v=o[R];x.copy(v),x.sub(A.multiplyScalar(A.dot(v))).normalize(),g.crossVectors(S,v);const P=g.dot(c[R])<0?-1:1;a.setXYZW(R,x.x,x.y,x.z,P)}for(let R=0,v=b.length;R<v;++R){const y=b[R],P=y.start,D=y.count;for(let F=P,I=P+D;F<I;F+=3)T(t.getX(F+0)),T(t.getX(F+1)),T(t.getX(F+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new ee(new Float32Array(e.count*3),3),this.setAttribute("normal",i);else for(let p=0,m=i.count;p<m;p++)i.setXYZ(p,0,0,0);const s=new B,r=new B,a=new B,o=new B,c=new B,l=new B,d=new B,f=new B;if(t)for(let p=0,m=t.count;p<m;p+=3){const _=t.getX(p+0),M=t.getX(p+1),h=t.getX(p+2);s.fromBufferAttribute(e,_),r.fromBufferAttribute(e,M),a.fromBufferAttribute(e,h),d.subVectors(a,r),f.subVectors(s,r),d.cross(f),o.fromBufferAttribute(i,_),c.fromBufferAttribute(i,M),l.fromBufferAttribute(i,h),o.add(d),c.add(d),l.add(d),i.setXYZ(_,o.x,o.y,o.z),i.setXYZ(M,c.x,c.y,c.z),i.setXYZ(h,l.x,l.y,l.z)}else for(let p=0,m=e.count;p<m;p+=3)s.fromBufferAttribute(e,p+0),r.fromBufferAttribute(e,p+1),a.fromBufferAttribute(e,p+2),d.subVectors(a,r),f.subVectors(s,r),d.cross(f),i.setXYZ(p+0,d.x,d.y,d.z),i.setXYZ(p+1,d.x,d.y,d.z),i.setXYZ(p+2,d.x,d.y,d.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,i=t.count;e<i;e++)Ie.fromBufferAttribute(t,e),Ie.normalize(),t.setXYZ(e,Ie.x,Ie.y,Ie.z)}toNonIndexed(){function t(o,c){const l=o.array,d=o.itemSize,f=o.normalized,p=new l.constructor(c.length*d);let m=0,_=0;for(let M=0,h=c.length;M<h;M++){o.isInterleavedBufferAttribute?m=c[M]*o.data.stride+o.offset:m=c[M]*d;for(let u=0;u<d;u++)p[_++]=l[m++]}return new ee(p,d,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new ie,i=this.index.array,s=this.attributes;for(const o in s){const c=s[o],l=t(c,i);e.setAttribute(o,l)}const r=this.morphAttributes;for(const o in r){const c=[],l=r[o];for(let d=0,f=l.length;d<f;d++){const p=l[d],m=t(p,i);c.push(m)}e.morphAttributes[o]=c}e.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,c=a.length;o<c;o++){const l=a[o];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(t[l]=c[l]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const i=this.attributes;for(const c in i){const l=i[c];t.data.attributes[c]=l.toJSON(t.data)}const s={};let r=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],d=[];for(let f=0,p=l.length;f<p;f++){const m=l[f];d.push(m.toJSON(t.data))}d.length>0&&(s[c]=d,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(t.data.boundingSphere=o.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const i=t.index;i!==null&&this.setIndex(i.clone());const s=t.attributes;for(const l in s){const d=s[l];this.setAttribute(l,d.clone(e))}const r=t.morphAttributes;for(const l in r){const d=[],f=r[l];for(let p=0,m=f.length;p<m;p++)d.push(f[p].clone(e));this.morphAttributes[l]=d}this.morphTargetsRelative=t.morphTargetsRelative;const a=t.groups;for(let l=0,d=a.length;l<d;l++){const f=a[l];this.addGroup(f.start,f.count,f.materialIndex)}const o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());const c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Rl=new Me,di=new Gs,sr=new Hs,Cl=new B,rr=new B,ar=new B,or=new B,ya=new B,lr=new B,Pl=new B,cr=new B;class hn extends Be{constructor(t=new ie,e=new Vs){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){const i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,a=i.morphTargetsRelative;e.fromBufferAttribute(s,t);const o=this.morphTargetInfluences;if(r&&o){lr.set(0,0,0);for(let c=0,l=r.length;c<l;c++){const d=o[c],f=r[c];d!==0&&(ya.fromBufferAttribute(f,t),a?lr.addScaledVector(ya,d):lr.addScaledVector(ya.sub(e),d))}e.add(lr)}return e}raycast(t,e){const i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),sr.copy(i.boundingSphere),sr.applyMatrix4(r),di.copy(t.ray).recast(t.near),!(sr.containsPoint(di.origin)===!1&&(di.intersectSphere(sr,Cl)===null||di.origin.distanceToSquared(Cl)>(t.far-t.near)**2))&&(Rl.copy(r).invert(),di.copy(t.ray).applyMatrix4(Rl),!(i.boundingBox!==null&&di.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,e,di)))}_computeIntersections(t,e,i){let s;const r=this.geometry,a=this.material,o=r.index,c=r.attributes.position,l=r.attributes.uv,d=r.attributes.uv1,f=r.attributes.normal,p=r.groups,m=r.drawRange;if(o!==null)if(Array.isArray(a))for(let _=0,M=p.length;_<M;_++){const h=p[_],u=a[h.materialIndex],b=Math.max(h.start,m.start),x=Math.min(o.count,Math.min(h.start+h.count,m.start+m.count));for(let g=b,A=x;g<A;g+=3){const S=o.getX(g),T=o.getX(g+1),R=o.getX(g+2);s=hr(this,u,t,i,l,d,f,S,T,R),s&&(s.faceIndex=Math.floor(g/3),s.face.materialIndex=h.materialIndex,e.push(s))}}else{const _=Math.max(0,m.start),M=Math.min(o.count,m.start+m.count);for(let h=_,u=M;h<u;h+=3){const b=o.getX(h),x=o.getX(h+1),g=o.getX(h+2);s=hr(this,a,t,i,l,d,f,b,x,g),s&&(s.faceIndex=Math.floor(h/3),e.push(s))}}else if(c!==void 0)if(Array.isArray(a))for(let _=0,M=p.length;_<M;_++){const h=p[_],u=a[h.materialIndex],b=Math.max(h.start,m.start),x=Math.min(c.count,Math.min(h.start+h.count,m.start+m.count));for(let g=b,A=x;g<A;g+=3){const S=g,T=g+1,R=g+2;s=hr(this,u,t,i,l,d,f,S,T,R),s&&(s.faceIndex=Math.floor(g/3),s.face.materialIndex=h.materialIndex,e.push(s))}}else{const _=Math.max(0,m.start),M=Math.min(c.count,m.start+m.count);for(let h=_,u=M;h<u;h+=3){const b=h,x=h+1,g=h+2;s=hr(this,a,t,i,l,d,f,b,x,g),s&&(s.faceIndex=Math.floor(h/3),e.push(s))}}}}function od(n,t,e,i,s,r,a,o){let c;if(t.side===je?c=i.intersectTriangle(a,r,s,!0,o):c=i.intersectTriangle(s,r,a,t.side===ri,o),c===null)return null;cr.copy(o),cr.applyMatrix4(n.matrixWorld);const l=e.ray.origin.distanceTo(cr);return l<e.near||l>e.far?null:{distance:l,point:cr.clone(),object:n}}function hr(n,t,e,i,s,r,a,o,c,l){n.getVertexPosition(o,rr),n.getVertexPosition(c,ar),n.getVertexPosition(l,or);const d=od(n,t,e,i,rr,ar,or,Pl);if(d){const f=new B;cn.getBarycoord(Pl,rr,ar,or,f),s&&(d.uv=cn.getInterpolatedAttribute(s,o,c,l,f,new Gt)),r&&(d.uv1=cn.getInterpolatedAttribute(r,o,c,l,f,new Gt)),a&&(d.normal=cn.getInterpolatedAttribute(a,o,c,l,f,new B),d.normal.dot(i.direction)>0&&d.normal.multiplyScalar(-1));const p={a:o,b:c,c:l,normal:new B,materialIndex:0};cn.getNormal(rr,ar,or,p.normal),d.face=p,d.barycoord=f}return d}class Ws extends ie{constructor(t=1,e=1,i=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:i,widthSegments:s,heightSegments:r,depthSegments:a};const o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);const c=[],l=[],d=[],f=[];let p=0,m=0;_("z","y","x",-1,-1,i,e,t,a,r,0),_("z","y","x",1,-1,i,e,-t,a,r,1),_("x","z","y",1,1,t,i,e,s,a,2),_("x","z","y",1,-1,t,i,-e,s,a,3),_("x","y","z",1,-1,t,e,i,s,r,4),_("x","y","z",-1,-1,t,e,-i,s,r,5),this.setIndex(c),this.setAttribute("position",new we(l,3)),this.setAttribute("normal",new we(d,3)),this.setAttribute("uv",new we(f,2));function _(M,h,u,b,x,g,A,S,T,R,v){const y=g/T,P=A/R,D=g/2,F=A/2,I=S/2,U=T+1,O=R+1;let z=0,N=0;const Z=new B;for(let Y=0;Y<O;Y++){const it=Y*P-F;for(let vt=0;vt<U;vt++){const Rt=vt*y-D;Z[M]=Rt*b,Z[h]=it*x,Z[u]=I,l.push(Z.x,Z.y,Z.z),Z[M]=0,Z[h]=0,Z[u]=S>0?1:-1,d.push(Z.x,Z.y,Z.z),f.push(vt/T),f.push(1-Y/R),z+=1}}for(let Y=0;Y<R;Y++)for(let it=0;it<T;it++){const vt=p+it+U*Y,Rt=p+it+U*(Y+1),et=p+(it+1)+U*(Y+1),tt=p+(it+1)+U*Y;c.push(vt,Rt,tt),c.push(Rt,et,tt),N+=6}o.addGroup(m,N,v),m+=N,p+=z}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ws(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function ds(n){const t={};for(const e in n){t[e]={};for(const i in n[e]){const s=n[e][i];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][i]=null):t[e][i]=s.clone():Array.isArray(s)?t[e][i]=s.slice():t[e][i]=s}}return t}function He(n){const t={};for(let e=0;e<n.length;e++){const i=ds(n[e]);for(const s in i)t[s]=i[s]}return t}function ld(n){const t=[];for(let e=0;e<n.length;e++)t.push(n[e].clone());return t}function Jc(n){const t=n.getRenderTarget();return t===null?n.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:le.workingColorSpace}const cd={clone:ds,merge:He};var hd=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,ud=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class oi extends Di{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=hd,this.fragmentShader=ud,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=ds(t.uniforms),this.uniformsGroups=ld(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const s in this.uniforms){const a=this.uniforms[s].value;a&&a.isTexture?e.uniforms[s]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[s]={type:"m4",value:a.toArray()}:e.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const i={};for(const s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(e.extensions=i),e}}class Qc extends Be{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Me,this.projectionMatrix=new Me,this.projectionMatrixInverse=new Me,this.coordinateSystem=Rn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const jn=new B,Dl=new Gt,Ll=new Gt;class ln extends Qc{constructor(t=50,e=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=Fs*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Rs*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Fs*2*Math.atan(Math.tan(Rs*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,i){jn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(jn.x,jn.y).multiplyScalar(-t/jn.z),jn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(jn.x,jn.y).multiplyScalar(-t/jn.z)}getViewSize(t,e){return this.getViewBounds(t,Dl,Ll),e.subVectors(Ll,Dl)}setViewOffset(t,e,i,s,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(Rs*.5*this.fov)/this.zoom,i=2*e,s=this.aspect*i,r=-.5*s;const a=this.view;if(this.view!==null&&this.view.enabled){const c=a.fullWidth,l=a.fullHeight;r+=a.offsetX*s/c,e-=a.offsetY*i/l,s*=a.width/c,i*=a.height/l}const o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-i,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const Xi=-90,$i=1;class dd extends Be{constructor(t,e,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new ln(Xi,$i,t,e);s.layers=this.layers,this.add(s);const r=new ln(Xi,$i,t,e);r.layers=this.layers,this.add(r);const a=new ln(Xi,$i,t,e);a.layers=this.layers,this.add(a);const o=new ln(Xi,$i,t,e);o.layers=this.layers,this.add(o);const c=new ln(Xi,$i,t,e);c.layers=this.layers,this.add(c);const l=new ln(Xi,$i,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[i,s,r,a,o,c]=e;for(const l of e)this.remove(l);if(t===Rn)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===Nr)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const l of e)this.add(l),l.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,a,o,c,l,d]=this.children,f=t.getRenderTarget(),p=t.getActiveCubeFace(),m=t.getActiveMipmapLevel(),_=t.xr.enabled;t.xr.enabled=!1;const M=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,t.setRenderTarget(i,0,s),t.render(e,r),t.setRenderTarget(i,1,s),t.render(e,a),t.setRenderTarget(i,2,s),t.render(e,o),t.setRenderTarget(i,3,s),t.render(e,c),t.setRenderTarget(i,4,s),t.render(e,l),i.texture.generateMipmaps=M,t.setRenderTarget(i,5,s),t.render(e,d),t.setRenderTarget(f,p,m),t.xr.enabled=_,i.texture.needsPMREMUpdate=!0}}class th extends Xe{constructor(t=[],e=cs,i,s,r,a,o,c,l,d){super(t,e,i,s,r,a,o,c,l,d),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class fd extends wi{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const i={width:t,height:t,depth:1},s=[i,i,i,i,i,i];this.texture=new th(s),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Ws(5,5,5),r=new oi({name:"CubemapFromEquirect",uniforms:ds(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:je,blending:ni});r.uniforms.tEquirect.value=e;const a=new hn(s,r),o=e.minFilter;return e.minFilter===ti&&(e.minFilter=Mn),new dd(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e=!0,i=!0,s=!0){const r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,i,s);t.setRenderTarget(r)}}class We extends Be{constructor(){super(),this.isGroup=!0,this.type="Group"}}const pd={type:"move"};class Sa{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new We,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new We,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new B,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new B),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new We,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new B,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new B),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const i of t.hand.values())this._getHandJoint(e,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,i){let s=null,r=null,a=null;const o=this._targetRay,c=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){a=!0;for(const M of t.hand.values()){const h=e.getJointPose(M,i),u=this._getHandJoint(l,M);h!==null&&(u.matrix.fromArray(h.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.matrixWorldNeedsUpdate=!0,u.jointRadius=h.radius),u.visible=h!==null}const d=l.joints["index-finger-tip"],f=l.joints["thumb-tip"],p=d.position.distanceTo(f.position),m=.02,_=.005;l.inputState.pinching&&p>m+_?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&p<=m-_&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,i),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));o!==null&&(s=e.getPose(t.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(pd)))}return o!==null&&(o.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const i=new We;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[e.jointName]=i,t.add(i)}return t.joints[e.jointName]}}class jo{constructor(t,e=25e-5){this.isFogExp2=!0,this.name="",this.color=new kt(t),this.density=e}clone(){return new jo(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class md extends Be{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Vn,this.environmentIntensity=1,this.environmentRotation=new Vn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class gd{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=Ao,this.updateRanges=[],this.version=0,this.uuid=kn()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,i){t*=this.stride,i*=e.stride;for(let s=0,r=this.stride;s<r;s++)this.array[t+s]=e.array[i+s];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=kn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(e,this.stride);return i.setUsage(this.usage),i}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=kn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const ke=new B;class Br{constructor(t,e,i,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=i,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,i=this.data.count;e<i;e++)ke.fromBufferAttribute(this,e),ke.applyMatrix4(t),this.setXYZ(e,ke.x,ke.y,ke.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)ke.fromBufferAttribute(this,e),ke.applyNormalMatrix(t),this.setXYZ(e,ke.x,ke.y,ke.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)ke.fromBufferAttribute(this,e),ke.transformDirection(t),this.setXYZ(e,ke.x,ke.y,ke.z);return this}getComponent(t,e){let i=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(i=vn(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=ue(i,this.array)),this.data.array[t*this.data.stride+this.offset+e]=i,this}setX(t,e){return this.normalized&&(e=ue(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=ue(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=ue(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=ue(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=vn(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=vn(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=vn(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=vn(e,this.array)),e}setXY(t,e,i){return t=t*this.data.stride+this.offset,this.normalized&&(e=ue(e,this.array),i=ue(i,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this}setXYZ(t,e,i,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=ue(e,this.array),i=ue(i,this.array),s=ue(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this.data.array[t+2]=s,this}setXYZW(t,e,i,s,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=ue(e,this.array),i=ue(i,this.array),s=ue(s,this.array),r=ue(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this.data.array[t+2]=s,this.data.array[t+3]=r,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let i=0;i<this.count;i++){const s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return new ee(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new Br(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let i=0;i<this.count;i++){const s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class oe extends Di{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new kt(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}let qi;const Ms=new B,Yi=new B,ji=new B,Ki=new Gt,ys=new Gt,eh=new Me,ur=new B,Ss=new B,dr=new B,Il=new Gt,Ea=new Gt,Ul=new Gt;class ce extends Be{constructor(t=new oe){if(super(),this.isSprite=!0,this.type="Sprite",qi===void 0){qi=new ie;const e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new gd(e,5);qi.setIndex([0,1,2,0,2,3]),qi.setAttribute("position",new Br(i,3,0,!1)),qi.setAttribute("uv",new Br(i,2,3,!1))}this.geometry=qi,this.material=t,this.center=new Gt(.5,.5),this.count=1}raycast(t,e){t.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Yi.setFromMatrixScale(this.matrixWorld),eh.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),ji.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Yi.multiplyScalar(-ji.z);const i=this.material.rotation;let s,r;i!==0&&(r=Math.cos(i),s=Math.sin(i));const a=this.center;fr(ur.set(-.5,-.5,0),ji,a,Yi,s,r),fr(Ss.set(.5,-.5,0),ji,a,Yi,s,r),fr(dr.set(.5,.5,0),ji,a,Yi,s,r),Il.set(0,0),Ea.set(1,0),Ul.set(1,1);let o=t.ray.intersectTriangle(ur,Ss,dr,!1,Ms);if(o===null&&(fr(Ss.set(-.5,.5,0),ji,a,Yi,s,r),Ea.set(0,1),o=t.ray.intersectTriangle(ur,dr,Ss,!1,Ms),o===null))return;const c=t.ray.origin.distanceTo(Ms);c<t.near||c>t.far||e.push({distance:c,point:Ms.clone(),uv:cn.getInterpolation(Ms,ur,Ss,dr,Il,Ea,Ul,new Gt),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}}function fr(n,t,e,i,s,r){Ki.subVectors(n,e).addScalar(.5).multiply(i),s!==void 0?(ys.x=r*Ki.x-s*Ki.y,ys.y=s*Ki.x+r*Ki.y):ys.copy(Ki),n.copy(t),n.x+=ys.x,n.y+=ys.y,n.applyMatrix4(eh)}const ba=new B,_d=new B,xd=new Kt;class Kn{constructor(t=new B(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,i,s){return this.normal.set(t,e,i),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,i){const s=ba.subVectors(i,e).cross(_d.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const i=t.delta(ba),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(i,r)}intersectsLine(t){const e=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return e<0&&i>0||i<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const i=e||xd.getNormalMatrix(t),s=this.coplanarPoint(ba).applyMatrix4(t),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const fi=new Hs,vd=new Gt(.5,.5),pr=new B;class nh{constructor(t=new Kn,e=new Kn,i=new Kn,s=new Kn,r=new Kn,a=new Kn){this.planes=[t,e,i,s,r,a]}set(t,e,i,s,r,a){const o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(i),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(t){const e=this.planes;for(let i=0;i<6;i++)e[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,e=Rn,i=!1){const s=this.planes,r=t.elements,a=r[0],o=r[1],c=r[2],l=r[3],d=r[4],f=r[5],p=r[6],m=r[7],_=r[8],M=r[9],h=r[10],u=r[11],b=r[12],x=r[13],g=r[14],A=r[15];if(s[0].setComponents(l-a,m-d,u-_,A-b).normalize(),s[1].setComponents(l+a,m+d,u+_,A+b).normalize(),s[2].setComponents(l+o,m+f,u+M,A+x).normalize(),s[3].setComponents(l-o,m-f,u-M,A-x).normalize(),i)s[4].setComponents(c,p,h,g).normalize(),s[5].setComponents(l-c,m-p,u-h,A-g).normalize();else if(s[4].setComponents(l-c,m-p,u-h,A-g).normalize(),e===Rn)s[5].setComponents(l+c,m+p,u+h,A+g).normalize();else if(e===Nr)s[5].setComponents(c,p,h,g).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),fi.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),fi.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(fi)}intersectsSprite(t){fi.center.set(0,0,0);const e=vd.distanceTo(t.center);return fi.radius=.7071067811865476+e,fi.applyMatrix4(t.matrixWorld),this.intersectsSphere(fi)}intersectsSphere(t){const e=this.planes,i=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(t){const e=this.planes;for(let i=0;i<6;i++){const s=e[i];if(pr.x=s.normal.x>0?t.max.x:t.min.x,pr.y=s.normal.y>0?t.max.y:t.min.y,pr.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(pr)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let i=0;i<6;i++)if(e[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Tn extends Di{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new kt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const zr=new B,kr=new B,Fl=new Me,Es=new Gs,mr=new Hs,Ta=new B,Nl=new B;class Si extends Be{constructor(t=new ie,e=new Tn){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,i=[0];for(let s=1,r=e.count;s<r;s++)zr.fromBufferAttribute(e,s-1),kr.fromBufferAttribute(e,s),i[s]=i[s-1],i[s]+=zr.distanceTo(kr);t.setAttribute("lineDistance",new we(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const i=this.geometry,s=this.matrixWorld,r=t.params.Line.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),mr.copy(i.boundingSphere),mr.applyMatrix4(s),mr.radius+=r,t.ray.intersectsSphere(mr)===!1)return;Fl.copy(s).invert(),Es.copy(t.ray).applyMatrix4(Fl);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=this.isLineSegments?2:1,d=i.index,p=i.attributes.position;if(d!==null){const m=Math.max(0,a.start),_=Math.min(d.count,a.start+a.count);for(let M=m,h=_-1;M<h;M+=l){const u=d.getX(M),b=d.getX(M+1),x=gr(this,t,Es,c,u,b,M);x&&e.push(x)}if(this.isLineLoop){const M=d.getX(_-1),h=d.getX(m),u=gr(this,t,Es,c,M,h,_-1);u&&e.push(u)}}else{const m=Math.max(0,a.start),_=Math.min(p.count,a.start+a.count);for(let M=m,h=_-1;M<h;M+=l){const u=gr(this,t,Es,c,M,M+1,M);u&&e.push(u)}if(this.isLineLoop){const M=gr(this,t,Es,c,_-1,m,_-1);M&&e.push(M)}}}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function gr(n,t,e,i,s,r,a){const o=n.geometry.attributes.position;if(zr.fromBufferAttribute(o,s),kr.fromBufferAttribute(o,r),e.distanceSqToSegment(zr,kr,Ta,Nl)>i)return;Ta.applyMatrix4(n.matrixWorld);const l=t.ray.origin.distanceTo(Ta);if(!(l<t.near||l>t.far))return{distance:l,point:Nl.clone().applyMatrix4(n.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:n}}const Ol=new B,Bl=new B;class Ko extends Si{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,i=[];for(let s=0,r=e.count;s<r;s+=2)Ol.fromBufferAttribute(e,s),Bl.fromBufferAttribute(e,s+1),i[s]=s===0?0:i[s-1],i[s+1]=i[s]+Ol.distanceTo(Bl);t.setAttribute("lineDistance",new we(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Md extends Si{constructor(t,e){super(t,e),this.isLineLoop=!0,this.type="LineLoop"}}class Ye extends Di{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new kt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const zl=new Me,wo=new Gs,_r=new Hs,xr=new B;class tn extends Be{constructor(t=new ie,e=new Ye){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){const i=this.geometry,s=this.matrixWorld,r=t.params.Points.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),_r.copy(i.boundingSphere),_r.applyMatrix4(s),_r.radius+=r,t.ray.intersectsSphere(_r)===!1)return;zl.copy(s).invert(),wo.copy(t.ray).applyMatrix4(zl);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=i.index,f=i.attributes.position;if(l!==null){const p=Math.max(0,a.start),m=Math.min(l.count,a.start+a.count);for(let _=p,M=m;_<M;_++){const h=l.getX(_);xr.fromBufferAttribute(f,h),kl(xr,h,c,s,t,e,this)}}else{const p=Math.max(0,a.start),m=Math.min(f.count,a.start+a.count);for(let _=p,M=m;_<M;_++)xr.fromBufferAttribute(f,_),kl(xr,_,c,s,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function kl(n,t,e,i,s,r,a){const o=wo.distanceSqToPoint(n);if(o<e){const c=new B;wo.closestPointToPoint(n,c),c.applyMatrix4(i);const l=s.ray.origin.distanceTo(c);if(l<s.near||l>s.far)return;r.push({distance:l,distanceToRay:Math.sqrt(o),point:c,index:t,face:null,faceIndex:null,barycoord:null,object:a})}}class Xr extends Xe{constructor(t,e,i,s,r,a,o,c,l){super(t,e,i,s,r,a,o,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}}class ih extends Xe{constructor(t,e,i=Ai,s,r,a,o=En,c=En,l,d=Is,f=1){if(d!==Is&&d!==Us)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const p={width:t,height:e,depth:f};super(p,s,r,a,o,c,d,i,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new qo(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}class sh extends Xe{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}}class Zo extends ie{constructor(t=[],e=[],i=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:i,detail:s};const r=[],a=[];o(s),l(i),d(),this.setAttribute("position",new we(r,3)),this.setAttribute("normal",new we(r.slice(),3)),this.setAttribute("uv",new we(a,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function o(b){const x=new B,g=new B,A=new B;for(let S=0;S<e.length;S+=3)m(e[S+0],x),m(e[S+1],g),m(e[S+2],A),c(x,g,A,b)}function c(b,x,g,A){const S=A+1,T=[];for(let R=0;R<=S;R++){T[R]=[];const v=b.clone().lerp(g,R/S),y=x.clone().lerp(g,R/S),P=S-R;for(let D=0;D<=P;D++)D===0&&R===S?T[R][D]=v:T[R][D]=v.clone().lerp(y,D/P)}for(let R=0;R<S;R++)for(let v=0;v<2*(S-R)-1;v++){const y=Math.floor(v/2);v%2===0?(p(T[R][y+1]),p(T[R+1][y]),p(T[R][y])):(p(T[R][y+1]),p(T[R+1][y+1]),p(T[R+1][y]))}}function l(b){const x=new B;for(let g=0;g<r.length;g+=3)x.x=r[g+0],x.y=r[g+1],x.z=r[g+2],x.normalize().multiplyScalar(b),r[g+0]=x.x,r[g+1]=x.y,r[g+2]=x.z}function d(){const b=new B;for(let x=0;x<r.length;x+=3){b.x=r[x+0],b.y=r[x+1],b.z=r[x+2];const g=h(b)/2/Math.PI+.5,A=u(b)/Math.PI+.5;a.push(g,1-A)}_(),f()}function f(){for(let b=0;b<a.length;b+=6){const x=a[b+0],g=a[b+2],A=a[b+4],S=Math.max(x,g,A),T=Math.min(x,g,A);S>.9&&T<.1&&(x<.2&&(a[b+0]+=1),g<.2&&(a[b+2]+=1),A<.2&&(a[b+4]+=1))}}function p(b){r.push(b.x,b.y,b.z)}function m(b,x){const g=b*3;x.x=t[g+0],x.y=t[g+1],x.z=t[g+2]}function _(){const b=new B,x=new B,g=new B,A=new B,S=new Gt,T=new Gt,R=new Gt;for(let v=0,y=0;v<r.length;v+=9,y+=6){b.set(r[v+0],r[v+1],r[v+2]),x.set(r[v+3],r[v+4],r[v+5]),g.set(r[v+6],r[v+7],r[v+8]),S.set(a[y+0],a[y+1]),T.set(a[y+2],a[y+3]),R.set(a[y+4],a[y+5]),A.copy(b).add(x).add(g).divideScalar(3);const P=h(A);M(S,y+0,b,P),M(T,y+2,x,P),M(R,y+4,g,P)}}function M(b,x,g,A){A<0&&b.x===1&&(a[x]=b.x-1),g.x===0&&g.z===0&&(a[x]=A/2/Math.PI+.5)}function h(b){return Math.atan2(b.z,-b.x)}function u(b){return Math.atan2(-b.y,Math.sqrt(b.x*b.x+b.z*b.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Zo(t.vertices,t.indices,t.radius,t.details)}}class Jo extends Zo{constructor(t=1,e=0){const i=(1+Math.sqrt(5))/2,s=[-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new Jo(t.radius,t.detail)}}class $r extends ie{constructor(t=1,e=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:i,heightSegments:s};const r=t/2,a=e/2,o=Math.floor(i),c=Math.floor(s),l=o+1,d=c+1,f=t/o,p=e/c,m=[],_=[],M=[],h=[];for(let u=0;u<d;u++){const b=u*p-a;for(let x=0;x<l;x++){const g=x*f-r;_.push(g,-b,0),M.push(0,0,1),h.push(x/o),h.push(1-u/c)}}for(let u=0;u<c;u++)for(let b=0;b<o;b++){const x=b+l*u,g=b+l*(u+1),A=b+1+l*(u+1),S=b+1+l*u;m.push(x,g,S),m.push(g,A,S)}this.setIndex(m),this.setAttribute("position",new we(_,3)),this.setAttribute("normal",new we(M,3)),this.setAttribute("uv",new we(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new $r(t.width,t.height,t.widthSegments,t.heightSegments)}}class qr extends ie{constructor(t=1,e=32,i=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:i,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},e=Math.max(3,Math.floor(e)),i=Math.max(2,Math.floor(i));const c=Math.min(a+o,Math.PI);let l=0;const d=[],f=new B,p=new B,m=[],_=[],M=[],h=[];for(let u=0;u<=i;u++){const b=[],x=u/i;let g=0;u===0&&a===0?g=.5/e:u===i&&c===Math.PI&&(g=-.5/e);for(let A=0;A<=e;A++){const S=A/e;f.x=-t*Math.cos(s+S*r)*Math.sin(a+x*o),f.y=t*Math.cos(a+x*o),f.z=t*Math.sin(s+S*r)*Math.sin(a+x*o),_.push(f.x,f.y,f.z),p.copy(f).normalize(),M.push(p.x,p.y,p.z),h.push(S+g,1-x),b.push(l++)}d.push(b)}for(let u=0;u<i;u++)for(let b=0;b<e;b++){const x=d[u][b+1],g=d[u][b],A=d[u+1][b],S=d[u+1][b+1];(u!==0||a>0)&&m.push(x,g,S),(u!==i-1||c<Math.PI)&&m.push(g,A,S)}this.setIndex(m),this.setAttribute("position",new we(_,3)),this.setAttribute("normal",new we(M,3)),this.setAttribute("uv",new we(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new qr(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class Qo extends ie{constructor(t=1,e=.4,i=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:i,tubularSegments:s,arc:r},i=Math.floor(i),s=Math.floor(s);const a=[],o=[],c=[],l=[],d=new B,f=new B,p=new B;for(let m=0;m<=i;m++)for(let _=0;_<=s;_++){const M=_/s*r,h=m/i*Math.PI*2;f.x=(t+e*Math.cos(h))*Math.cos(M),f.y=(t+e*Math.cos(h))*Math.sin(M),f.z=e*Math.sin(h),o.push(f.x,f.y,f.z),d.x=t*Math.cos(M),d.y=t*Math.sin(M),p.subVectors(f,d).normalize(),c.push(p.x,p.y,p.z),l.push(_/s),l.push(m/i)}for(let m=1;m<=i;m++)for(let _=1;_<=s;_++){const M=(s+1)*m+_-1,h=(s+1)*(m-1)+_-1,u=(s+1)*(m-1)+_,b=(s+1)*m+_;a.push(M,h,b),a.push(h,u,b)}this.setIndex(a),this.setAttribute("position",new we(o,3)),this.setAttribute("normal",new we(c,3)),this.setAttribute("uv",new we(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Qo(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class yd extends ie{constructor(t=null){if(super(),this.type="WireframeGeometry",this.parameters={geometry:t},t!==null){const e=[],i=new Set,s=new B,r=new B;if(t.index!==null){const a=t.attributes.position,o=t.index;let c=t.groups;c.length===0&&(c=[{start:0,count:o.count,materialIndex:0}]);for(let l=0,d=c.length;l<d;++l){const f=c[l],p=f.start,m=f.count;for(let _=p,M=p+m;_<M;_+=3)for(let h=0;h<3;h++){const u=o.getX(_+h),b=o.getX(_+(h+1)%3);s.fromBufferAttribute(a,u),r.fromBufferAttribute(a,b),Hl(s,r,i)===!0&&(e.push(s.x,s.y,s.z),e.push(r.x,r.y,r.z))}}}else{const a=t.attributes.position;for(let o=0,c=a.count/3;o<c;o++)for(let l=0;l<3;l++){const d=3*o+l,f=3*o+(l+1)%3;s.fromBufferAttribute(a,d),r.fromBufferAttribute(a,f),Hl(s,r,i)===!0&&(e.push(s.x,s.y,s.z),e.push(r.x,r.y,r.z))}}this.setAttribute("position",new we(e,3))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}}function Hl(n,t,e){const i=`${n.x},${n.y},${n.z}-${t.x},${t.y},${t.z}`,s=`${t.x},${t.y},${t.z}-${n.x},${n.y},${n.z}`;return e.has(i)===!0||e.has(s)===!0?!1:(e.add(i),e.add(s),!0)}class Sd extends Di{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=gu,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class Ed extends Di{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}class bd extends Qc{constructor(t=-1,e=1,i=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=i,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,i,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=i-t,a=i+t,o=s+e,c=s-e;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,d=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,a=r+l*this.view.width,o-=d*this.view.offsetY,c=o-d*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}class Td extends ln{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}const Gl=new Me;class Ad{constructor(t,e,i=0,s=1/0){this.ray=new Gs(t,e),this.near=i,this.far=s,this.camera=null,this.layers=new Yo,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return Gl.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Gl),this}intersectObject(t,e=!0,i=[]){return Ro(t,this,i,e),i.sort(Vl),i}intersectObjects(t,e=!0,i=[]){for(let s=0,r=t.length;s<r;s++)Ro(t[s],this,i,e);return i.sort(Vl),i}}function Vl(n,t){return n.distance-t.distance}function Ro(n,t,e,i){let s=!0;if(n.layers.test(t.layers)&&n.raycast(t,e)===!1&&(s=!1),s===!0&&i===!0){const r=n.children;for(let a=0,o=r.length;a<o;a++)Ro(r[a],t,e,!0)}}class Wl{constructor(t=1,e=0,i=0){this.radius=t,this.phi=e,this.theta=i}set(t,e,i){return this.radius=t,this.phi=e,this.theta=i,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=te(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,i){return this.radius=Math.sqrt(t*t+e*e+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,i),this.phi=Math.acos(te(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class wd extends Pi{constructor(t,e=null){super(),this.object=t,this.domElement=e,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(t){if(t===void 0){console.warn("THREE.Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=t}disconnect(){}dispose(){}update(){}}function Xl(n,t,e,i){const s=Rd(i);switch(e){case Gc:return n*t;case Wc:return n*t/s.components*s.byteLength;case Vo:return n*t/s.components*s.byteLength;case Xc:return n*t*2/s.components*s.byteLength;case Wo:return n*t*2/s.components*s.byteLength;case Vc:return n*t*3/s.components*s.byteLength;case yn:return n*t*4/s.components*s.byteLength;case Xo:return n*t*4/s.components*s.byteLength;case Rr:case Cr:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case Pr:case Dr:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case Ja:case to:return Math.max(n,16)*Math.max(t,8)/4;case Za:case Qa:return Math.max(n,8)*Math.max(t,8)/2;case eo:case no:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case io:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case so:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case ro:return Math.floor((n+4)/5)*Math.floor((t+3)/4)*16;case ao:return Math.floor((n+4)/5)*Math.floor((t+4)/5)*16;case oo:return Math.floor((n+5)/6)*Math.floor((t+4)/5)*16;case lo:return Math.floor((n+5)/6)*Math.floor((t+5)/6)*16;case co:return Math.floor((n+7)/8)*Math.floor((t+4)/5)*16;case ho:return Math.floor((n+7)/8)*Math.floor((t+5)/6)*16;case uo:return Math.floor((n+7)/8)*Math.floor((t+7)/8)*16;case fo:return Math.floor((n+9)/10)*Math.floor((t+4)/5)*16;case po:return Math.floor((n+9)/10)*Math.floor((t+5)/6)*16;case mo:return Math.floor((n+9)/10)*Math.floor((t+7)/8)*16;case go:return Math.floor((n+9)/10)*Math.floor((t+9)/10)*16;case _o:return Math.floor((n+11)/12)*Math.floor((t+9)/10)*16;case xo:return Math.floor((n+11)/12)*Math.floor((t+11)/12)*16;case vo:case Mo:case yo:return Math.ceil(n/4)*Math.ceil(t/4)*16;case So:case Eo:return Math.ceil(n/4)*Math.ceil(t/4)*8;case bo:case To:return Math.ceil(n/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Rd(n){switch(n){case Gn:case Bc:return{byteLength:1,components:1};case Ds:case zc:case zs:return{byteLength:2,components:1};case Ho:case Go:return{byteLength:2,components:4};case Ai:case ko:case zn:return{byteLength:4,components:1};case kc:case Hc:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:zo}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=zo);function rh(){let n=null,t=!1,e=null,i=null;function s(r,a){e(r,a),i=n.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(i=n.requestAnimationFrame(s),t=!0)},stop:function(){n.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){n=r}}}function Cd(n){const t=new WeakMap;function e(o,c){const l=o.array,d=o.usage,f=l.byteLength,p=n.createBuffer();n.bindBuffer(c,p),n.bufferData(c,l,d),o.onUploadCallback();let m;if(l instanceof Float32Array)m=n.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)m=n.HALF_FLOAT;else if(l instanceof Uint16Array)o.isFloat16BufferAttribute?m=n.HALF_FLOAT:m=n.UNSIGNED_SHORT;else if(l instanceof Int16Array)m=n.SHORT;else if(l instanceof Uint32Array)m=n.UNSIGNED_INT;else if(l instanceof Int32Array)m=n.INT;else if(l instanceof Int8Array)m=n.BYTE;else if(l instanceof Uint8Array)m=n.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)m=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:p,type:m,bytesPerElement:l.BYTES_PER_ELEMENT,version:o.version,size:f}}function i(o,c,l){const d=c.array,f=c.updateRanges;if(n.bindBuffer(l,o),f.length===0)n.bufferSubData(l,0,d);else{f.sort((m,_)=>m.start-_.start);let p=0;for(let m=1;m<f.length;m++){const _=f[p],M=f[m];M.start<=_.start+_.count+1?_.count=Math.max(_.count,M.start+M.count-_.start):(++p,f[p]=M)}f.length=p+1;for(let m=0,_=f.length;m<_;m++){const M=f[m];n.bufferSubData(l,M.start*d.BYTES_PER_ELEMENT,d,M.start,M.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);const c=t.get(o);c&&(n.deleteBuffer(c.buffer),t.delete(o))}function a(o,c){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const d=t.get(o);(!d||d.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const l=t.get(o);if(l===void 0)t.set(o,e(o,c));else if(l.version<o.version){if(l.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(l.buffer,o,c),l.version=o.version}}return{get:s,remove:r,update:a}}var Pd=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Dd=`#ifdef USE_ALPHAHASH
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
#endif`,Ld=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Id=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Ud=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Fd=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Nd=`#ifdef USE_AOMAP
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
#endif`,Od=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Bd=`#ifdef USE_BATCHING
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
#endif`,zd=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,kd=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Hd=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Gd=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Vd=`#ifdef USE_IRIDESCENCE
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
#endif`,Wd=`#ifdef USE_BUMPMAP
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
#endif`,Xd=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,$d=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,qd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Yd=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,jd=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Kd=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Zd=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Jd=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Qd=`#define PI 3.141592653589793
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
} // validated`,tf=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,ef=`vec3 transformedNormal = objectNormal;
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
#endif`,nf=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,sf=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,rf=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,af=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,of="gl_FragColor = linearToOutputTexel( gl_FragColor );",lf=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,cf=`#ifdef USE_ENVMAP
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
#endif`,hf=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,uf=`#ifdef USE_ENVMAP
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
#endif`,df=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,ff=`#ifdef USE_ENVMAP
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
#endif`,pf=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,mf=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,gf=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,_f=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,xf=`#ifdef USE_GRADIENTMAP
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
}`,vf=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Mf=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,yf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Sf=`uniform bool receiveShadow;
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
#endif`,Ef=`#ifdef USE_ENVMAP
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
#endif`,bf=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Tf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Af=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,wf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Rf=`PhysicalMaterial material;
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
#endif`,Cf=`struct PhysicalMaterial {
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
}`,Pf=`
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
#endif`,Df=`#if defined( RE_IndirectDiffuse )
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
#endif`,Lf=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,If=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Uf=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Ff=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Nf=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Of=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Bf=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,zf=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,kf=`#if defined( USE_POINTS_UV )
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
#endif`,Hf=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Gf=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Vf=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Wf=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Xf=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,$f=`#ifdef USE_MORPHTARGETS
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
#endif`,qf=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Yf=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,jf=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Kf=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Zf=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Jf=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Qf=`#ifdef USE_NORMALMAP
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
#endif`,tp=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,ep=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,np=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,ip=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,sp=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,rp=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,ap=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,op=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,lp=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,cp=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,hp=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,up=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,dp=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,fp=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,pp=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,mp=`float getShadowMask() {
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
}`,gp=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,_p=`#ifdef USE_SKINNING
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
#endif`,xp=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,vp=`#ifdef USE_SKINNING
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
#endif`,Mp=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,yp=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Sp=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Ep=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,bp=`#ifdef USE_TRANSMISSION
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
#endif`,Tp=`#ifdef USE_TRANSMISSION
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
#endif`,Ap=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,wp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Rp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Cp=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Pp=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Dp=`uniform sampler2D t2D;
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
}`,Lp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Ip=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Up=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Fp=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Np=`#include <common>
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
}`,Op=`#if DEPTH_PACKING == 3200
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
}`,Bp=`#define DISTANCE
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
}`,zp=`#define DISTANCE
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
}`,kp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Hp=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Gp=`uniform float scale;
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
}`,Vp=`uniform vec3 diffuse;
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
}`,Wp=`#include <common>
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
}`,Xp=`uniform vec3 diffuse;
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
}`,$p=`#define LAMBERT
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
}`,qp=`#define LAMBERT
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
}`,Yp=`#define MATCAP
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
}`,jp=`#define MATCAP
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
}`,Kp=`#define NORMAL
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
}`,Zp=`#define NORMAL
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
}`,Jp=`#define PHONG
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
}`,Qp=`#define PHONG
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
}`,tm=`#define STANDARD
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
}`,em=`#define STANDARD
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
}`,nm=`#define TOON
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
}`,im=`#define TOON
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
}`,sm=`uniform float size;
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
}`,rm=`uniform vec3 diffuse;
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
}`,am=`#include <common>
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
}`,om=`uniform vec3 color;
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
}`,lm=`uniform float rotation;
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
}`,cm=`uniform vec3 diffuse;
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
}`,Qt={alphahash_fragment:Pd,alphahash_pars_fragment:Dd,alphamap_fragment:Ld,alphamap_pars_fragment:Id,alphatest_fragment:Ud,alphatest_pars_fragment:Fd,aomap_fragment:Nd,aomap_pars_fragment:Od,batching_pars_vertex:Bd,batching_vertex:zd,begin_vertex:kd,beginnormal_vertex:Hd,bsdfs:Gd,iridescence_fragment:Vd,bumpmap_pars_fragment:Wd,clipping_planes_fragment:Xd,clipping_planes_pars_fragment:$d,clipping_planes_pars_vertex:qd,clipping_planes_vertex:Yd,color_fragment:jd,color_pars_fragment:Kd,color_pars_vertex:Zd,color_vertex:Jd,common:Qd,cube_uv_reflection_fragment:tf,defaultnormal_vertex:ef,displacementmap_pars_vertex:nf,displacementmap_vertex:sf,emissivemap_fragment:rf,emissivemap_pars_fragment:af,colorspace_fragment:of,colorspace_pars_fragment:lf,envmap_fragment:cf,envmap_common_pars_fragment:hf,envmap_pars_fragment:uf,envmap_pars_vertex:df,envmap_physical_pars_fragment:Ef,envmap_vertex:ff,fog_vertex:pf,fog_pars_vertex:mf,fog_fragment:gf,fog_pars_fragment:_f,gradientmap_pars_fragment:xf,lightmap_pars_fragment:vf,lights_lambert_fragment:Mf,lights_lambert_pars_fragment:yf,lights_pars_begin:Sf,lights_toon_fragment:bf,lights_toon_pars_fragment:Tf,lights_phong_fragment:Af,lights_phong_pars_fragment:wf,lights_physical_fragment:Rf,lights_physical_pars_fragment:Cf,lights_fragment_begin:Pf,lights_fragment_maps:Df,lights_fragment_end:Lf,logdepthbuf_fragment:If,logdepthbuf_pars_fragment:Uf,logdepthbuf_pars_vertex:Ff,logdepthbuf_vertex:Nf,map_fragment:Of,map_pars_fragment:Bf,map_particle_fragment:zf,map_particle_pars_fragment:kf,metalnessmap_fragment:Hf,metalnessmap_pars_fragment:Gf,morphinstance_vertex:Vf,morphcolor_vertex:Wf,morphnormal_vertex:Xf,morphtarget_pars_vertex:$f,morphtarget_vertex:qf,normal_fragment_begin:Yf,normal_fragment_maps:jf,normal_pars_fragment:Kf,normal_pars_vertex:Zf,normal_vertex:Jf,normalmap_pars_fragment:Qf,clearcoat_normal_fragment_begin:tp,clearcoat_normal_fragment_maps:ep,clearcoat_pars_fragment:np,iridescence_pars_fragment:ip,opaque_fragment:sp,packing:rp,premultiplied_alpha_fragment:ap,project_vertex:op,dithering_fragment:lp,dithering_pars_fragment:cp,roughnessmap_fragment:hp,roughnessmap_pars_fragment:up,shadowmap_pars_fragment:dp,shadowmap_pars_vertex:fp,shadowmap_vertex:pp,shadowmask_pars_fragment:mp,skinbase_vertex:gp,skinning_pars_vertex:_p,skinning_vertex:xp,skinnormal_vertex:vp,specularmap_fragment:Mp,specularmap_pars_fragment:yp,tonemapping_fragment:Sp,tonemapping_pars_fragment:Ep,transmission_fragment:bp,transmission_pars_fragment:Tp,uv_pars_fragment:Ap,uv_pars_vertex:wp,uv_vertex:Rp,worldpos_vertex:Cp,background_vert:Pp,background_frag:Dp,backgroundCube_vert:Lp,backgroundCube_frag:Ip,cube_vert:Up,cube_frag:Fp,depth_vert:Np,depth_frag:Op,distanceRGBA_vert:Bp,distanceRGBA_frag:zp,equirect_vert:kp,equirect_frag:Hp,linedashed_vert:Gp,linedashed_frag:Vp,meshbasic_vert:Wp,meshbasic_frag:Xp,meshlambert_vert:$p,meshlambert_frag:qp,meshmatcap_vert:Yp,meshmatcap_frag:jp,meshnormal_vert:Kp,meshnormal_frag:Zp,meshphong_vert:Jp,meshphong_frag:Qp,meshphysical_vert:tm,meshphysical_frag:em,meshtoon_vert:nm,meshtoon_frag:im,points_vert:sm,points_frag:rm,shadow_vert:am,shadow_frag:om,sprite_vert:lm,sprite_frag:cm},St={common:{diffuse:{value:new kt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Kt},alphaMap:{value:null},alphaMapTransform:{value:new Kt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Kt}},envmap:{envMap:{value:null},envMapRotation:{value:new Kt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Kt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Kt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Kt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Kt},normalScale:{value:new Gt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Kt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Kt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Kt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Kt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new kt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new kt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Kt},alphaTest:{value:0},uvTransform:{value:new Kt}},sprite:{diffuse:{value:new kt(16777215)},opacity:{value:1},center:{value:new Gt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Kt},alphaMap:{value:null},alphaMapTransform:{value:new Kt},alphaTest:{value:0}}},An={basic:{uniforms:He([St.common,St.specularmap,St.envmap,St.aomap,St.lightmap,St.fog]),vertexShader:Qt.meshbasic_vert,fragmentShader:Qt.meshbasic_frag},lambert:{uniforms:He([St.common,St.specularmap,St.envmap,St.aomap,St.lightmap,St.emissivemap,St.bumpmap,St.normalmap,St.displacementmap,St.fog,St.lights,{emissive:{value:new kt(0)}}]),vertexShader:Qt.meshlambert_vert,fragmentShader:Qt.meshlambert_frag},phong:{uniforms:He([St.common,St.specularmap,St.envmap,St.aomap,St.lightmap,St.emissivemap,St.bumpmap,St.normalmap,St.displacementmap,St.fog,St.lights,{emissive:{value:new kt(0)},specular:{value:new kt(1118481)},shininess:{value:30}}]),vertexShader:Qt.meshphong_vert,fragmentShader:Qt.meshphong_frag},standard:{uniforms:He([St.common,St.envmap,St.aomap,St.lightmap,St.emissivemap,St.bumpmap,St.normalmap,St.displacementmap,St.roughnessmap,St.metalnessmap,St.fog,St.lights,{emissive:{value:new kt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Qt.meshphysical_vert,fragmentShader:Qt.meshphysical_frag},toon:{uniforms:He([St.common,St.aomap,St.lightmap,St.emissivemap,St.bumpmap,St.normalmap,St.displacementmap,St.gradientmap,St.fog,St.lights,{emissive:{value:new kt(0)}}]),vertexShader:Qt.meshtoon_vert,fragmentShader:Qt.meshtoon_frag},matcap:{uniforms:He([St.common,St.bumpmap,St.normalmap,St.displacementmap,St.fog,{matcap:{value:null}}]),vertexShader:Qt.meshmatcap_vert,fragmentShader:Qt.meshmatcap_frag},points:{uniforms:He([St.points,St.fog]),vertexShader:Qt.points_vert,fragmentShader:Qt.points_frag},dashed:{uniforms:He([St.common,St.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Qt.linedashed_vert,fragmentShader:Qt.linedashed_frag},depth:{uniforms:He([St.common,St.displacementmap]),vertexShader:Qt.depth_vert,fragmentShader:Qt.depth_frag},normal:{uniforms:He([St.common,St.bumpmap,St.normalmap,St.displacementmap,{opacity:{value:1}}]),vertexShader:Qt.meshnormal_vert,fragmentShader:Qt.meshnormal_frag},sprite:{uniforms:He([St.sprite,St.fog]),vertexShader:Qt.sprite_vert,fragmentShader:Qt.sprite_frag},background:{uniforms:{uvTransform:{value:new Kt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Qt.background_vert,fragmentShader:Qt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Kt}},vertexShader:Qt.backgroundCube_vert,fragmentShader:Qt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Qt.cube_vert,fragmentShader:Qt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Qt.equirect_vert,fragmentShader:Qt.equirect_frag},distanceRGBA:{uniforms:He([St.common,St.displacementmap,{referencePosition:{value:new B},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Qt.distanceRGBA_vert,fragmentShader:Qt.distanceRGBA_frag},shadow:{uniforms:He([St.lights,St.fog,{color:{value:new kt(0)},opacity:{value:1}}]),vertexShader:Qt.shadow_vert,fragmentShader:Qt.shadow_frag}};An.physical={uniforms:He([An.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Kt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Kt},clearcoatNormalScale:{value:new Gt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Kt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Kt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Kt},sheen:{value:0},sheenColor:{value:new kt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Kt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Kt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Kt},transmissionSamplerSize:{value:new Gt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Kt},attenuationDistance:{value:0},attenuationColor:{value:new kt(0)},specularColor:{value:new kt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Kt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Kt},anisotropyVector:{value:new Gt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Kt}}]),vertexShader:Qt.meshphysical_vert,fragmentShader:Qt.meshphysical_frag};const vr={r:0,b:0,g:0},pi=new Vn,hm=new Me;function um(n,t,e,i,s,r,a){const o=new kt(0);let c=r===!0?0:1,l,d,f=null,p=0,m=null;function _(x){let g=x.isScene===!0?x.background:null;return g&&g.isTexture&&(g=(x.backgroundBlurriness>0?e:t).get(g)),g}function M(x){let g=!1;const A=_(x);A===null?u(o,c):A&&A.isColor&&(u(A,1),g=!0);const S=n.xr.getEnvironmentBlendMode();S==="additive"?i.buffers.color.setClear(0,0,0,1,a):S==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,a),(n.autoClear||g)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function h(x,g){const A=_(g);A&&(A.isCubeTexture||A.mapping===Wr)?(d===void 0&&(d=new hn(new Ws(1,1,1),new oi({name:"BackgroundCubeMaterial",uniforms:ds(An.backgroundCube.uniforms),vertexShader:An.backgroundCube.vertexShader,fragmentShader:An.backgroundCube.fragmentShader,side:je,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),d.geometry.deleteAttribute("normal"),d.geometry.deleteAttribute("uv"),d.onBeforeRender=function(S,T,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(d.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(d)),pi.copy(g.backgroundRotation),pi.x*=-1,pi.y*=-1,pi.z*=-1,A.isCubeTexture&&A.isRenderTargetTexture===!1&&(pi.y*=-1,pi.z*=-1),d.material.uniforms.envMap.value=A,d.material.uniforms.flipEnvMap.value=A.isCubeTexture&&A.isRenderTargetTexture===!1?-1:1,d.material.uniforms.backgroundBlurriness.value=g.backgroundBlurriness,d.material.uniforms.backgroundIntensity.value=g.backgroundIntensity,d.material.uniforms.backgroundRotation.value.setFromMatrix4(hm.makeRotationFromEuler(pi)),d.material.toneMapped=le.getTransfer(A.colorSpace)!==fe,(f!==A||p!==A.version||m!==n.toneMapping)&&(d.material.needsUpdate=!0,f=A,p=A.version,m=n.toneMapping),d.layers.enableAll(),x.unshift(d,d.geometry,d.material,0,0,null)):A&&A.isTexture&&(l===void 0&&(l=new hn(new $r(2,2),new oi({name:"BackgroundMaterial",uniforms:ds(An.background.uniforms),vertexShader:An.background.vertexShader,fragmentShader:An.background.fragmentShader,side:ri,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(l)),l.material.uniforms.t2D.value=A,l.material.uniforms.backgroundIntensity.value=g.backgroundIntensity,l.material.toneMapped=le.getTransfer(A.colorSpace)!==fe,A.matrixAutoUpdate===!0&&A.updateMatrix(),l.material.uniforms.uvTransform.value.copy(A.matrix),(f!==A||p!==A.version||m!==n.toneMapping)&&(l.material.needsUpdate=!0,f=A,p=A.version,m=n.toneMapping),l.layers.enableAll(),x.unshift(l,l.geometry,l.material,0,0,null))}function u(x,g){x.getRGB(vr,Jc(n)),i.buffers.color.setClear(vr.r,vr.g,vr.b,g,a)}function b(){d!==void 0&&(d.geometry.dispose(),d.material.dispose(),d=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return o},setClearColor:function(x,g=1){o.set(x),c=g,u(o,c)},getClearAlpha:function(){return c},setClearAlpha:function(x){c=x,u(o,c)},render:M,addToRenderList:h,dispose:b}}function dm(n,t){const e=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=p(null);let r=s,a=!1;function o(y,P,D,F,I){let U=!1;const O=f(F,D,P);r!==O&&(r=O,l(r.object)),U=m(y,F,D,I),U&&_(y,F,D,I),I!==null&&t.update(I,n.ELEMENT_ARRAY_BUFFER),(U||a)&&(a=!1,g(y,P,D,F),I!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get(I).buffer))}function c(){return n.createVertexArray()}function l(y){return n.bindVertexArray(y)}function d(y){return n.deleteVertexArray(y)}function f(y,P,D){const F=D.wireframe===!0;let I=i[y.id];I===void 0&&(I={},i[y.id]=I);let U=I[P.id];U===void 0&&(U={},I[P.id]=U);let O=U[F];return O===void 0&&(O=p(c()),U[F]=O),O}function p(y){const P=[],D=[],F=[];for(let I=0;I<e;I++)P[I]=0,D[I]=0,F[I]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:P,enabledAttributes:D,attributeDivisors:F,object:y,attributes:{},index:null}}function m(y,P,D,F){const I=r.attributes,U=P.attributes;let O=0;const z=D.getAttributes();for(const N in z)if(z[N].location>=0){const Y=I[N];let it=U[N];if(it===void 0&&(N==="instanceMatrix"&&y.instanceMatrix&&(it=y.instanceMatrix),N==="instanceColor"&&y.instanceColor&&(it=y.instanceColor)),Y===void 0||Y.attribute!==it||it&&Y.data!==it.data)return!0;O++}return r.attributesNum!==O||r.index!==F}function _(y,P,D,F){const I={},U=P.attributes;let O=0;const z=D.getAttributes();for(const N in z)if(z[N].location>=0){let Y=U[N];Y===void 0&&(N==="instanceMatrix"&&y.instanceMatrix&&(Y=y.instanceMatrix),N==="instanceColor"&&y.instanceColor&&(Y=y.instanceColor));const it={};it.attribute=Y,Y&&Y.data&&(it.data=Y.data),I[N]=it,O++}r.attributes=I,r.attributesNum=O,r.index=F}function M(){const y=r.newAttributes;for(let P=0,D=y.length;P<D;P++)y[P]=0}function h(y){u(y,0)}function u(y,P){const D=r.newAttributes,F=r.enabledAttributes,I=r.attributeDivisors;D[y]=1,F[y]===0&&(n.enableVertexAttribArray(y),F[y]=1),I[y]!==P&&(n.vertexAttribDivisor(y,P),I[y]=P)}function b(){const y=r.newAttributes,P=r.enabledAttributes;for(let D=0,F=P.length;D<F;D++)P[D]!==y[D]&&(n.disableVertexAttribArray(D),P[D]=0)}function x(y,P,D,F,I,U,O){O===!0?n.vertexAttribIPointer(y,P,D,I,U):n.vertexAttribPointer(y,P,D,F,I,U)}function g(y,P,D,F){M();const I=F.attributes,U=D.getAttributes(),O=P.defaultAttributeValues;for(const z in U){const N=U[z];if(N.location>=0){let Z=I[z];if(Z===void 0&&(z==="instanceMatrix"&&y.instanceMatrix&&(Z=y.instanceMatrix),z==="instanceColor"&&y.instanceColor&&(Z=y.instanceColor)),Z!==void 0){const Y=Z.normalized,it=Z.itemSize,vt=t.get(Z);if(vt===void 0)continue;const Rt=vt.buffer,et=vt.type,tt=vt.bytesPerElement,W=et===n.INT||et===n.UNSIGNED_INT||Z.gpuType===ko;if(Z.isInterleavedBufferAttribute){const X=Z.data,rt=X.stride,bt=Z.offset;if(X.isInstancedInterleavedBuffer){for(let mt=0;mt<N.locationSize;mt++)u(N.location+mt,X.meshPerAttribute);y.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=X.meshPerAttribute*X.count)}else for(let mt=0;mt<N.locationSize;mt++)h(N.location+mt);n.bindBuffer(n.ARRAY_BUFFER,Rt);for(let mt=0;mt<N.locationSize;mt++)x(N.location+mt,it/N.locationSize,et,Y,rt*tt,(bt+it/N.locationSize*mt)*tt,W)}else{if(Z.isInstancedBufferAttribute){for(let X=0;X<N.locationSize;X++)u(N.location+X,Z.meshPerAttribute);y.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=Z.meshPerAttribute*Z.count)}else for(let X=0;X<N.locationSize;X++)h(N.location+X);n.bindBuffer(n.ARRAY_BUFFER,Rt);for(let X=0;X<N.locationSize;X++)x(N.location+X,it/N.locationSize,et,Y,it*tt,it/N.locationSize*X*tt,W)}}else if(O!==void 0){const Y=O[z];if(Y!==void 0)switch(Y.length){case 2:n.vertexAttrib2fv(N.location,Y);break;case 3:n.vertexAttrib3fv(N.location,Y);break;case 4:n.vertexAttrib4fv(N.location,Y);break;default:n.vertexAttrib1fv(N.location,Y)}}}}b()}function A(){R();for(const y in i){const P=i[y];for(const D in P){const F=P[D];for(const I in F)d(F[I].object),delete F[I];delete P[D]}delete i[y]}}function S(y){if(i[y.id]===void 0)return;const P=i[y.id];for(const D in P){const F=P[D];for(const I in F)d(F[I].object),delete F[I];delete P[D]}delete i[y.id]}function T(y){for(const P in i){const D=i[P];if(D[y.id]===void 0)continue;const F=D[y.id];for(const I in F)d(F[I].object),delete F[I];delete D[y.id]}}function R(){v(),a=!0,r!==s&&(r=s,l(r.object))}function v(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:R,resetDefaultState:v,dispose:A,releaseStatesOfGeometry:S,releaseStatesOfProgram:T,initAttributes:M,enableAttribute:h,disableUnusedAttributes:b}}function fm(n,t,e){let i;function s(l){i=l}function r(l,d){n.drawArrays(i,l,d),e.update(d,i,1)}function a(l,d,f){f!==0&&(n.drawArraysInstanced(i,l,d,f),e.update(d,i,f))}function o(l,d,f){if(f===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,d,0,f);let m=0;for(let _=0;_<f;_++)m+=d[_];e.update(m,i,1)}function c(l,d,f,p){if(f===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let _=0;_<l.length;_++)a(l[_],d[_],p[_]);else{m.multiDrawArraysInstancedWEBGL(i,l,0,d,0,p,0,f);let _=0;for(let M=0;M<f;M++)_+=d[M]*p[M];e.update(_,i,1)}}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=c}function pm(n,t,e,i){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){const T=t.get("EXT_texture_filter_anisotropic");s=n.getParameter(T.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(T){return!(T!==yn&&i.convert(T)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(T){const R=T===zs&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(T!==Gn&&i.convert(T)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&T!==zn&&!R)}function c(T){if(T==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";T="mediump"}return T==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=e.precision!==void 0?e.precision:"highp";const d=c(l);d!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",d,"instead."),l=d);const f=e.logarithmicDepthBuffer===!0,p=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),m=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),_=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),M=n.getParameter(n.MAX_TEXTURE_SIZE),h=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),u=n.getParameter(n.MAX_VERTEX_ATTRIBS),b=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),x=n.getParameter(n.MAX_VARYING_VECTORS),g=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),A=_>0,S=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:a,textureTypeReadable:o,precision:l,logarithmicDepthBuffer:f,reversedDepthBuffer:p,maxTextures:m,maxVertexTextures:_,maxTextureSize:M,maxCubemapSize:h,maxAttributes:u,maxVertexUniforms:b,maxVaryings:x,maxFragmentUniforms:g,vertexTextures:A,maxSamples:S}}function mm(n){const t=this;let e=null,i=0,s=!1,r=!1;const a=new Kn,o=new Kt,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(f,p){const m=f.length!==0||p||i!==0||s;return s=p,i=f.length,m},this.beginShadows=function(){r=!0,d(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(f,p){e=d(f,p,0)},this.setState=function(f,p,m){const _=f.clippingPlanes,M=f.clipIntersection,h=f.clipShadows,u=n.get(f);if(!s||_===null||_.length===0||r&&!h)r?d(null):l();else{const b=r?0:i,x=b*4;let g=u.clippingState||null;c.value=g,g=d(_,p,x,m);for(let A=0;A!==x;++A)g[A]=e[A];u.clippingState=g,this.numIntersection=M?this.numPlanes:0,this.numPlanes+=b}};function l(){c.value!==e&&(c.value=e,c.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function d(f,p,m,_){const M=f!==null?f.length:0;let h=null;if(M!==0){if(h=c.value,_!==!0||h===null){const u=m+M*4,b=p.matrixWorldInverse;o.getNormalMatrix(b),(h===null||h.length<u)&&(h=new Float32Array(u));for(let x=0,g=m;x!==M;++x,g+=4)a.copy(f[x]).applyMatrix4(b,o),a.normal.toArray(h,g),h[g+3]=a.constant}c.value=h,c.needsUpdate=!0}return t.numPlanes=M,t.numIntersection=0,h}}function gm(n){let t=new WeakMap;function e(a,o){return o===qa?a.mapping=cs:o===Ya&&(a.mapping=hs),a}function i(a){if(a&&a.isTexture){const o=a.mapping;if(o===qa||o===Ya)if(t.has(a)){const c=t.get(a).texture;return e(c,a.mapping)}else{const c=a.image;if(c&&c.height>0){const l=new fd(c.height);return l.fromEquirectangularTexture(n,a),t.set(a,l),a.addEventListener("dispose",s),e(l.texture,a.mapping)}else return null}}return a}function s(a){const o=a.target;o.removeEventListener("dispose",s);const c=t.get(o);c!==void 0&&(t.delete(o),c.dispose())}function r(){t=new WeakMap}return{get:i,dispose:r}}const ns=4,$l=[.125,.215,.35,.446,.526,.582],Mi=20,Aa=new bd,ql=new kt;let wa=null,Ra=0,Ca=0,Pa=!1;const gi=(1+Math.sqrt(5))/2,Zi=1/gi,Yl=[new B(-gi,Zi,0),new B(gi,Zi,0),new B(-Zi,0,gi),new B(Zi,0,gi),new B(0,gi,-Zi),new B(0,gi,Zi),new B(-1,1,-1),new B(1,1,-1),new B(-1,1,1),new B(1,1,1)],_m=new B;class jl{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,i=.1,s=100,r={}){const{size:a=256,position:o=_m}=r;wa=this._renderer.getRenderTarget(),Ra=this._renderer.getActiveCubeFace(),Ca=this._renderer.getActiveMipmapLevel(),Pa=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);const c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(t,i,s,c,o),e>0&&this._blur(c,0,0,e),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Jl(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Zl(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(wa,Ra,Ca),this._renderer.xr.enabled=Pa,t.scissorTest=!1,Mr(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===cs||t.mapping===hs?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),wa=this._renderer.getRenderTarget(),Ra=this._renderer.getActiveCubeFace(),Ca=this._renderer.getActiveMipmapLevel(),Pa=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=e||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,i={magFilter:Mn,minFilter:Mn,generateMipmaps:!1,type:zs,format:yn,colorSpace:us,depthBuffer:!1},s=Kl(t,e,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Kl(t,e,i);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=xm(r)),this._blurMaterial=vm(r,t,e)}return s}_compileMaterial(t){const e=new hn(this._lodPlanes[0],t);this._renderer.compile(e,Aa)}_sceneToCubeUV(t,e,i,s,r){const c=new ln(90,1,e,i),l=[1,-1,1,1,1,1],d=[1,1,1,-1,-1,-1],f=this._renderer,p=f.autoClear,m=f.toneMapping;f.getClearColor(ql),f.toneMapping=ii,f.autoClear=!1,f.state.buffers.depth.getReversed()&&(f.setRenderTarget(s),f.clearDepth(),f.setRenderTarget(null));const M=new Vs({name:"PMREM.Background",side:je,depthWrite:!1,depthTest:!1}),h=new hn(new Ws,M);let u=!1;const b=t.background;b?b.isColor&&(M.color.copy(b),t.background=null,u=!0):(M.color.copy(ql),u=!0);for(let x=0;x<6;x++){const g=x%3;g===0?(c.up.set(0,l[x],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x+d[x],r.y,r.z)):g===1?(c.up.set(0,0,l[x]),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y+d[x],r.z)):(c.up.set(0,l[x],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y,r.z+d[x]));const A=this._cubeSize;Mr(s,g*A,x>2?A:0,A,A),f.setRenderTarget(s),u&&f.render(h,c),f.render(t,c)}h.geometry.dispose(),h.material.dispose(),f.toneMapping=m,f.autoClear=p,t.background=b}_textureToCubeUV(t,e){const i=this._renderer,s=t.mapping===cs||t.mapping===hs;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Jl()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Zl());const r=s?this._cubemapMaterial:this._equirectMaterial,a=new hn(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=t;const c=this._cubeSize;Mr(e,0,0,3*c,2*c),i.setRenderTarget(e),i.render(a,Aa)}_applyPMREM(t){const e=this._renderer,i=e.autoClear;e.autoClear=!1;const s=this._lodPlanes.length;for(let r=1;r<s;r++){const a=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=Yl[(s-r-1)%Yl.length];this._blur(t,r-1,r,a,o)}e.autoClear=i}_blur(t,e,i,s,r){const a=this._pingPongRenderTarget;this._halfBlur(t,a,e,i,s,"latitudinal",r),this._halfBlur(a,t,i,i,s,"longitudinal",r)}_halfBlur(t,e,i,s,r,a,o){const c=this._renderer,l=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const d=3,f=new hn(this._lodPlanes[s],l),p=l.uniforms,m=this._sizeLods[i]-1,_=isFinite(r)?Math.PI/(2*m):2*Math.PI/(2*Mi-1),M=r/_,h=isFinite(r)?1+Math.floor(d*M):Mi;h>Mi&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${h} samples when the maximum is set to ${Mi}`);const u=[];let b=0;for(let T=0;T<Mi;++T){const R=T/M,v=Math.exp(-R*R/2);u.push(v),T===0?b+=v:T<h&&(b+=2*v)}for(let T=0;T<u.length;T++)u[T]=u[T]/b;p.envMap.value=t.texture,p.samples.value=h,p.weights.value=u,p.latitudinal.value=a==="latitudinal",o&&(p.poleAxis.value=o);const{_lodMax:x}=this;p.dTheta.value=_,p.mipInt.value=x-i;const g=this._sizeLods[s],A=3*g*(s>x-ns?s-x+ns:0),S=4*(this._cubeSize-g);Mr(e,A,S,3*g,2*g),c.setRenderTarget(e),c.render(f,Aa)}}function xm(n){const t=[],e=[],i=[];let s=n;const r=n-ns+1+$l.length;for(let a=0;a<r;a++){const o=Math.pow(2,s);e.push(o);let c=1/o;a>n-ns?c=$l[a-n+ns-1]:a===0&&(c=0),i.push(c);const l=1/(o-2),d=-l,f=1+l,p=[d,d,f,d,f,f,d,d,f,f,d,f],m=6,_=6,M=3,h=2,u=1,b=new Float32Array(M*_*m),x=new Float32Array(h*_*m),g=new Float32Array(u*_*m);for(let S=0;S<m;S++){const T=S%3*2/3-1,R=S>2?0:-1,v=[T,R,0,T+2/3,R,0,T+2/3,R+1,0,T,R,0,T+2/3,R+1,0,T,R+1,0];b.set(v,M*_*S),x.set(p,h*_*S);const y=[S,S,S,S,S,S];g.set(y,u*_*S)}const A=new ie;A.setAttribute("position",new ee(b,M)),A.setAttribute("uv",new ee(x,h)),A.setAttribute("faceIndex",new ee(g,u)),t.push(A),s>ns&&s--}return{lodPlanes:t,sizeLods:e,sigmas:i}}function Kl(n,t,e){const i=new wi(n,t,e);return i.texture.mapping=Wr,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Mr(n,t,e,i,s){n.viewport.set(t,e,i,s),n.scissor.set(t,e,i,s)}function vm(n,t,e){const i=new Float32Array(Mi),s=new B(0,1,0);return new oi({name:"SphericalGaussianBlur",defines:{n:Mi,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:tl(),fragmentShader:`

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
		`,blending:ni,depthTest:!1,depthWrite:!1})}function Zl(){return new oi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:tl(),fragmentShader:`

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
		`,blending:ni,depthTest:!1,depthWrite:!1})}function Jl(){return new oi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:tl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ni,depthTest:!1,depthWrite:!1})}function tl(){return`

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
	`}function Mm(n){let t=new WeakMap,e=null;function i(o){if(o&&o.isTexture){const c=o.mapping,l=c===qa||c===Ya,d=c===cs||c===hs;if(l||d){let f=t.get(o);const p=f!==void 0?f.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==p)return e===null&&(e=new jl(n)),f=l?e.fromEquirectangular(o,f):e.fromCubemap(o,f),f.texture.pmremVersion=o.pmremVersion,t.set(o,f),f.texture;if(f!==void 0)return f.texture;{const m=o.image;return l&&m&&m.height>0||d&&m&&s(m)?(e===null&&(e=new jl(n)),f=l?e.fromEquirectangular(o):e.fromCubemap(o),f.texture.pmremVersion=o.pmremVersion,t.set(o,f),o.addEventListener("dispose",r),f.texture):null}}}return o}function s(o){let c=0;const l=6;for(let d=0;d<l;d++)o[d]!==void 0&&c++;return c===l}function r(o){const c=o.target;c.removeEventListener("dispose",r);const l=t.get(c);l!==void 0&&(t.delete(c),l.dispose())}function a(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:i,dispose:a}}function ym(n){const t={};function e(i){if(t[i]!==void 0)return t[i];let s;switch(i){case"WEBGL_depth_texture":s=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=n.getExtension(i)}return t[i]=s,s}return{has:function(i){return e(i)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(i){const s=e(i);return s===null&&Ns("THREE.WebGLRenderer: "+i+" extension not supported."),s}}}function Sm(n,t,e,i){const s={},r=new WeakMap;function a(f){const p=f.target;p.index!==null&&t.remove(p.index);for(const _ in p.attributes)t.remove(p.attributes[_]);p.removeEventListener("dispose",a),delete s[p.id];const m=r.get(p);m&&(t.remove(m),r.delete(p)),i.releaseStatesOfGeometry(p),p.isInstancedBufferGeometry===!0&&delete p._maxInstanceCount,e.memory.geometries--}function o(f,p){return s[p.id]===!0||(p.addEventListener("dispose",a),s[p.id]=!0,e.memory.geometries++),p}function c(f){const p=f.attributes;for(const m in p)t.update(p[m],n.ARRAY_BUFFER)}function l(f){const p=[],m=f.index,_=f.attributes.position;let M=0;if(m!==null){const b=m.array;M=m.version;for(let x=0,g=b.length;x<g;x+=3){const A=b[x+0],S=b[x+1],T=b[x+2];p.push(A,S,S,T,T,A)}}else if(_!==void 0){const b=_.array;M=_.version;for(let x=0,g=b.length/3-1;x<g;x+=3){const A=x+0,S=x+1,T=x+2;p.push(A,S,S,T,T,A)}}else return;const h=new(qc(p)?Zc:Kc)(p,1);h.version=M;const u=r.get(f);u&&t.remove(u),r.set(f,h)}function d(f){const p=r.get(f);if(p){const m=f.index;m!==null&&p.version<m.version&&l(f)}else l(f);return r.get(f)}return{get:o,update:c,getWireframeAttribute:d}}function Em(n,t,e){let i;function s(p){i=p}let r,a;function o(p){r=p.type,a=p.bytesPerElement}function c(p,m){n.drawElements(i,m,r,p*a),e.update(m,i,1)}function l(p,m,_){_!==0&&(n.drawElementsInstanced(i,m,r,p*a,_),e.update(m,i,_))}function d(p,m,_){if(_===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,m,0,r,p,0,_);let h=0;for(let u=0;u<_;u++)h+=m[u];e.update(h,i,1)}function f(p,m,_,M){if(_===0)return;const h=t.get("WEBGL_multi_draw");if(h===null)for(let u=0;u<p.length;u++)l(p[u]/a,m[u],M[u]);else{h.multiDrawElementsInstancedWEBGL(i,m,0,r,p,0,M,0,_);let u=0;for(let b=0;b<_;b++)u+=m[b]*M[b];e.update(u,i,1)}}this.setMode=s,this.setIndex=o,this.render=c,this.renderInstances=l,this.renderMultiDraw=d,this.renderMultiDrawInstances=f}function bm(n){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,a,o){switch(e.calls++,a){case n.TRIANGLES:e.triangles+=o*(r/3);break;case n.LINES:e.lines+=o*(r/2);break;case n.LINE_STRIP:e.lines+=o*(r-1);break;case n.LINE_LOOP:e.lines+=o*r;break;case n.POINTS:e.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:i}}function Tm(n,t,e){const i=new WeakMap,s=new Ee;function r(a,o,c){const l=a.morphTargetInfluences,d=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,f=d!==void 0?d.length:0;let p=i.get(o);if(p===void 0||p.count!==f){let y=function(){R.dispose(),i.delete(o),o.removeEventListener("dispose",y)};var m=y;p!==void 0&&p.texture.dispose();const _=o.morphAttributes.position!==void 0,M=o.morphAttributes.normal!==void 0,h=o.morphAttributes.color!==void 0,u=o.morphAttributes.position||[],b=o.morphAttributes.normal||[],x=o.morphAttributes.color||[];let g=0;_===!0&&(g=1),M===!0&&(g=2),h===!0&&(g=3);let A=o.attributes.position.count*g,S=1;A>t.maxTextureSize&&(S=Math.ceil(A/t.maxTextureSize),A=t.maxTextureSize);const T=new Float32Array(A*S*4*f),R=new Yc(T,A,S,f);R.type=zn,R.needsUpdate=!0;const v=g*4;for(let P=0;P<f;P++){const D=u[P],F=b[P],I=x[P],U=A*S*4*P;for(let O=0;O<D.count;O++){const z=O*v;_===!0&&(s.fromBufferAttribute(D,O),T[U+z+0]=s.x,T[U+z+1]=s.y,T[U+z+2]=s.z,T[U+z+3]=0),M===!0&&(s.fromBufferAttribute(F,O),T[U+z+4]=s.x,T[U+z+5]=s.y,T[U+z+6]=s.z,T[U+z+7]=0),h===!0&&(s.fromBufferAttribute(I,O),T[U+z+8]=s.x,T[U+z+9]=s.y,T[U+z+10]=s.z,T[U+z+11]=I.itemSize===4?s.w:1)}}p={count:f,texture:R,size:new Gt(A,S)},i.set(o,p),o.addEventListener("dispose",y)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)c.getUniforms().setValue(n,"morphTexture",a.morphTexture,e);else{let _=0;for(let h=0;h<l.length;h++)_+=l[h];const M=o.morphTargetsRelative?1:1-_;c.getUniforms().setValue(n,"morphTargetBaseInfluence",M),c.getUniforms().setValue(n,"morphTargetInfluences",l)}c.getUniforms().setValue(n,"morphTargetsTexture",p.texture,e),c.getUniforms().setValue(n,"morphTargetsTextureSize",p.size)}return{update:r}}function Am(n,t,e,i){let s=new WeakMap;function r(c){const l=i.render.frame,d=c.geometry,f=t.get(c,d);if(s.get(f)!==l&&(t.update(f),s.set(f,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",o)===!1&&c.addEventListener("dispose",o),s.get(c)!==l&&(e.update(c.instanceMatrix,n.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,n.ARRAY_BUFFER),s.set(c,l))),c.isSkinnedMesh){const p=c.skeleton;s.get(p)!==l&&(p.update(),s.set(p,l))}return f}function a(){s=new WeakMap}function o(c){const l=c.target;l.removeEventListener("dispose",o),e.remove(l.instanceMatrix),l.instanceColor!==null&&e.remove(l.instanceColor)}return{update:r,dispose:a}}const ah=new Xe,Ql=new ih(1,1),oh=new Yc,lh=new Ku,ch=new th,tc=[],ec=[],nc=new Float32Array(16),ic=new Float32Array(9),sc=new Float32Array(4);function ps(n,t,e){const i=n[0];if(i<=0||i>0)return n;const s=t*e;let r=tc[s];if(r===void 0&&(r=new Float32Array(s),tc[s]=r),t!==0){i.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,n[a].toArray(r,o)}return r}function De(n,t){if(n.length!==t.length)return!1;for(let e=0,i=n.length;e<i;e++)if(n[e]!==t[e])return!1;return!0}function Le(n,t){for(let e=0,i=t.length;e<i;e++)n[e]=t[e]}function Yr(n,t){let e=ec[t];e===void 0&&(e=new Int32Array(t),ec[t]=e);for(let i=0;i!==t;++i)e[i]=n.allocateTextureUnit();return e}function wm(n,t){const e=this.cache;e[0]!==t&&(n.uniform1f(this.addr,t),e[0]=t)}function Rm(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(De(e,t))return;n.uniform2fv(this.addr,t),Le(e,t)}}function Cm(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(n.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(De(e,t))return;n.uniform3fv(this.addr,t),Le(e,t)}}function Pm(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(De(e,t))return;n.uniform4fv(this.addr,t),Le(e,t)}}function Dm(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(De(e,t))return;n.uniformMatrix2fv(this.addr,!1,t),Le(e,t)}else{if(De(e,i))return;sc.set(i),n.uniformMatrix2fv(this.addr,!1,sc),Le(e,i)}}function Lm(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(De(e,t))return;n.uniformMatrix3fv(this.addr,!1,t),Le(e,t)}else{if(De(e,i))return;ic.set(i),n.uniformMatrix3fv(this.addr,!1,ic),Le(e,i)}}function Im(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(De(e,t))return;n.uniformMatrix4fv(this.addr,!1,t),Le(e,t)}else{if(De(e,i))return;nc.set(i),n.uniformMatrix4fv(this.addr,!1,nc),Le(e,i)}}function Um(n,t){const e=this.cache;e[0]!==t&&(n.uniform1i(this.addr,t),e[0]=t)}function Fm(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(De(e,t))return;n.uniform2iv(this.addr,t),Le(e,t)}}function Nm(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(De(e,t))return;n.uniform3iv(this.addr,t),Le(e,t)}}function Om(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(De(e,t))return;n.uniform4iv(this.addr,t),Le(e,t)}}function Bm(n,t){const e=this.cache;e[0]!==t&&(n.uniform1ui(this.addr,t),e[0]=t)}function zm(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(De(e,t))return;n.uniform2uiv(this.addr,t),Le(e,t)}}function km(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(De(e,t))return;n.uniform3uiv(this.addr,t),Le(e,t)}}function Hm(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(De(e,t))return;n.uniform4uiv(this.addr,t),Le(e,t)}}function Gm(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_2D_SHADOW?(Ql.compareFunction=$c,r=Ql):r=ah,e.setTexture2D(t||r,s)}function Vm(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture3D(t||lh,s)}function Wm(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTextureCube(t||ch,s)}function Xm(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture2DArray(t||oh,s)}function $m(n){switch(n){case 5126:return wm;case 35664:return Rm;case 35665:return Cm;case 35666:return Pm;case 35674:return Dm;case 35675:return Lm;case 35676:return Im;case 5124:case 35670:return Um;case 35667:case 35671:return Fm;case 35668:case 35672:return Nm;case 35669:case 35673:return Om;case 5125:return Bm;case 36294:return zm;case 36295:return km;case 36296:return Hm;case 35678:case 36198:case 36298:case 36306:case 35682:return Gm;case 35679:case 36299:case 36307:return Vm;case 35680:case 36300:case 36308:case 36293:return Wm;case 36289:case 36303:case 36311:case 36292:return Xm}}function qm(n,t){n.uniform1fv(this.addr,t)}function Ym(n,t){const e=ps(t,this.size,2);n.uniform2fv(this.addr,e)}function jm(n,t){const e=ps(t,this.size,3);n.uniform3fv(this.addr,e)}function Km(n,t){const e=ps(t,this.size,4);n.uniform4fv(this.addr,e)}function Zm(n,t){const e=ps(t,this.size,4);n.uniformMatrix2fv(this.addr,!1,e)}function Jm(n,t){const e=ps(t,this.size,9);n.uniformMatrix3fv(this.addr,!1,e)}function Qm(n,t){const e=ps(t,this.size,16);n.uniformMatrix4fv(this.addr,!1,e)}function tg(n,t){n.uniform1iv(this.addr,t)}function eg(n,t){n.uniform2iv(this.addr,t)}function ng(n,t){n.uniform3iv(this.addr,t)}function ig(n,t){n.uniform4iv(this.addr,t)}function sg(n,t){n.uniform1uiv(this.addr,t)}function rg(n,t){n.uniform2uiv(this.addr,t)}function ag(n,t){n.uniform3uiv(this.addr,t)}function og(n,t){n.uniform4uiv(this.addr,t)}function lg(n,t,e){const i=this.cache,s=t.length,r=Yr(e,s);De(i,r)||(n.uniform1iv(this.addr,r),Le(i,r));for(let a=0;a!==s;++a)e.setTexture2D(t[a]||ah,r[a])}function cg(n,t,e){const i=this.cache,s=t.length,r=Yr(e,s);De(i,r)||(n.uniform1iv(this.addr,r),Le(i,r));for(let a=0;a!==s;++a)e.setTexture3D(t[a]||lh,r[a])}function hg(n,t,e){const i=this.cache,s=t.length,r=Yr(e,s);De(i,r)||(n.uniform1iv(this.addr,r),Le(i,r));for(let a=0;a!==s;++a)e.setTextureCube(t[a]||ch,r[a])}function ug(n,t,e){const i=this.cache,s=t.length,r=Yr(e,s);De(i,r)||(n.uniform1iv(this.addr,r),Le(i,r));for(let a=0;a!==s;++a)e.setTexture2DArray(t[a]||oh,r[a])}function dg(n){switch(n){case 5126:return qm;case 35664:return Ym;case 35665:return jm;case 35666:return Km;case 35674:return Zm;case 35675:return Jm;case 35676:return Qm;case 5124:case 35670:return tg;case 35667:case 35671:return eg;case 35668:case 35672:return ng;case 35669:case 35673:return ig;case 5125:return sg;case 36294:return rg;case 36295:return ag;case 36296:return og;case 35678:case 36198:case 36298:case 36306:case 35682:return lg;case 35679:case 36299:case 36307:return cg;case 35680:case 36300:case 36308:case 36293:return hg;case 36289:case 36303:case 36311:case 36292:return ug}}class fg{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.setValue=$m(e.type)}}class pg{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=dg(e.type)}}class mg{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,i){const s=this.seq;for(let r=0,a=s.length;r!==a;++r){const o=s[r];o.setValue(t,e[o.id],i)}}}const Da=/(\w+)(\])?(\[|\.)?/g;function rc(n,t){n.seq.push(t),n.map[t.id]=t}function gg(n,t,e){const i=n.name,s=i.length;for(Da.lastIndex=0;;){const r=Da.exec(i),a=Da.lastIndex;let o=r[1];const c=r[2]==="]",l=r[3];if(c&&(o=o|0),l===void 0||l==="["&&a+2===s){rc(e,l===void 0?new fg(o,n,t):new pg(o,n,t));break}else{let f=e.map[o];f===void 0&&(f=new mg(o),rc(e,f)),e=f}}}class Lr{constructor(t,e){this.seq=[],this.map={};const i=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<i;++s){const r=t.getActiveUniform(e,s),a=t.getUniformLocation(e,r.name);gg(r,a,this)}}setValue(t,e,i,s){const r=this.map[e];r!==void 0&&r.setValue(t,i,s)}setOptional(t,e,i){const s=e[i];s!==void 0&&this.setValue(t,i,s)}static upload(t,e,i,s){for(let r=0,a=e.length;r!==a;++r){const o=e[r],c=i[o.id];c.needsUpdate!==!1&&o.setValue(t,c.value,s)}}static seqWithValue(t,e){const i=[];for(let s=0,r=t.length;s!==r;++s){const a=t[s];a.id in e&&i.push(a)}return i}}function ac(n,t,e){const i=n.createShader(t);return n.shaderSource(i,e),n.compileShader(i),i}const _g=37297;let xg=0;function vg(n,t){const e=n.split(`
`),i=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=s;a<r;a++){const o=a+1;i.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return i.join(`
`)}const oc=new Kt;function Mg(n){le._getMatrix(oc,le.workingColorSpace,n);const t=`mat3( ${oc.elements.map(e=>e.toFixed(4))} )`;switch(le.getTransfer(n)){case Fr:return[t,"LinearTransferOETF"];case fe:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",n),[t,"LinearTransferOETF"]}}function lc(n,t,e){const i=n.getShaderParameter(t,n.COMPILE_STATUS),r=(n.getShaderInfoLog(t)||"").trim();if(i&&r==="")return"";const a=/ERROR: 0:(\d+)/.exec(r);if(a){const o=parseInt(a[1]);return e.toUpperCase()+`

`+r+`

`+vg(n.getShaderSource(t),o)}else return r}function yg(n,t){const e=Mg(t);return[`vec4 ${n}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function Sg(n,t){let e;switch(t){case cu:e="Linear";break;case hu:e="Reinhard";break;case uu:e="Cineon";break;case Nc:e="ACESFilmic";break;case fu:e="AgX";break;case pu:e="Neutral";break;case du:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+n+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const yr=new B;function Eg(){le.getLuminanceCoefficients(yr);const n=yr.x.toFixed(4),t=yr.y.toFixed(4),e=yr.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function bg(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ts).join(`
`)}function Tg(n){const t=[];for(const e in n){const i=n[e];i!==!1&&t.push("#define "+e+" "+i)}return t.join(`
`)}function Ag(n,t){const e={},i=n.getProgramParameter(t,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){const r=n.getActiveAttrib(t,s),a=r.name;let o=1;r.type===n.FLOAT_MAT2&&(o=2),r.type===n.FLOAT_MAT3&&(o=3),r.type===n.FLOAT_MAT4&&(o=4),e[a]={type:r.type,location:n.getAttribLocation(t,a),locationSize:o}}return e}function Ts(n){return n!==""}function cc(n,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function hc(n,t){return n.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const wg=/^[ \t]*#include +<([\w\d./]+)>/gm;function Co(n){return n.replace(wg,Cg)}const Rg=new Map;function Cg(n,t){let e=Qt[t];if(e===void 0){const i=Rg.get(t);if(i!==void 0)e=Qt[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,i);else throw new Error("Can not resolve #include <"+t+">")}return Co(e)}const Pg=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function uc(n){return n.replace(Pg,Dg)}function Dg(n,t,e,i){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function dc(n){let t=`precision ${n.precision} float;
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
#define LOW_PRECISION`),t}function Lg(n){let t="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===Uc?t="SHADOWMAP_TYPE_PCF":n.shadowMapType===Gh?t="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===On&&(t="SHADOWMAP_TYPE_VSM"),t}function Ig(n){let t="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case cs:case hs:t="ENVMAP_TYPE_CUBE";break;case Wr:t="ENVMAP_TYPE_CUBE_UV";break}return t}function Ug(n){let t="ENVMAP_MODE_REFLECTION";return n.envMap&&n.envMapMode===hs&&(t="ENVMAP_MODE_REFRACTION"),t}function Fg(n){let t="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case Fc:t="ENVMAP_BLENDING_MULTIPLY";break;case ou:t="ENVMAP_BLENDING_MIX";break;case lu:t="ENVMAP_BLENDING_ADD";break}return t}function Ng(n){const t=n.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:i,maxMip:e}}function Og(n,t,e,i){const s=n.getContext(),r=e.defines;let a=e.vertexShader,o=e.fragmentShader;const c=Lg(e),l=Ig(e),d=Ug(e),f=Fg(e),p=Ng(e),m=bg(e),_=Tg(r),M=s.createProgram();let h,u,b=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(h=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_].filter(Ts).join(`
`),h.length>0&&(h+=`
`),u=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_].filter(Ts).join(`
`),u.length>0&&(u+=`
`)):(h=[dc(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+d:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ts).join(`
`),u=[dc(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+d:"",e.envMap?"#define "+f:"",p?"#define CUBEUV_TEXEL_WIDTH "+p.texelWidth:"",p?"#define CUBEUV_TEXEL_HEIGHT "+p.texelHeight:"",p?"#define CUBEUV_MAX_MIP "+p.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==ii?"#define TONE_MAPPING":"",e.toneMapping!==ii?Qt.tonemapping_pars_fragment:"",e.toneMapping!==ii?Sg("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Qt.colorspace_pars_fragment,yg("linearToOutputTexel",e.outputColorSpace),Eg(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Ts).join(`
`)),a=Co(a),a=cc(a,e),a=hc(a,e),o=Co(o),o=cc(o,e),o=hc(o,e),a=uc(a),o=uc(o),e.isRawShaderMaterial!==!0&&(b=`#version 300 es
`,h=[m,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+h,u=["#define varying in",e.glslVersion===pl?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===pl?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+u);const x=b+h+a,g=b+u+o,A=ac(s,s.VERTEX_SHADER,x),S=ac(s,s.FRAGMENT_SHADER,g);s.attachShader(M,A),s.attachShader(M,S),e.index0AttributeName!==void 0?s.bindAttribLocation(M,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(M,0,"position"),s.linkProgram(M);function T(P){if(n.debug.checkShaderErrors){const D=s.getProgramInfoLog(M)||"",F=s.getShaderInfoLog(A)||"",I=s.getShaderInfoLog(S)||"",U=D.trim(),O=F.trim(),z=I.trim();let N=!0,Z=!0;if(s.getProgramParameter(M,s.LINK_STATUS)===!1)if(N=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,M,A,S);else{const Y=lc(s,A,"vertex"),it=lc(s,S,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(M,s.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+U+`
`+Y+`
`+it)}else U!==""?console.warn("THREE.WebGLProgram: Program Info Log:",U):(O===""||z==="")&&(Z=!1);Z&&(P.diagnostics={runnable:N,programLog:U,vertexShader:{log:O,prefix:h},fragmentShader:{log:z,prefix:u}})}s.deleteShader(A),s.deleteShader(S),R=new Lr(s,M),v=Ag(s,M)}let R;this.getUniforms=function(){return R===void 0&&T(this),R};let v;this.getAttributes=function(){return v===void 0&&T(this),v};let y=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return y===!1&&(y=s.getProgramParameter(M,_g)),y},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(M),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=xg++,this.cacheKey=t,this.usedTimes=1,this.program=M,this.vertexShader=A,this.fragmentShader=S,this}let Bg=0;class zg{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,i=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(i),a=this._getShaderCacheForMaterial(t);return a.has(s)===!1&&(a.add(s),s.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const i of e)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let i=e.get(t);return i===void 0&&(i=new Set,e.set(t,i)),i}_getShaderStage(t){const e=this.shaderCache;let i=e.get(t);return i===void 0&&(i=new kg(t),e.set(t,i)),i}}class kg{constructor(t){this.id=Bg++,this.code=t,this.usedTimes=0}}function Hg(n,t,e,i,s,r,a){const o=new Yo,c=new zg,l=new Set,d=[],f=s.logarithmicDepthBuffer,p=s.vertexTextures;let m=s.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function M(v){return l.add(v),v===0?"uv":`uv${v}`}function h(v,y,P,D,F){const I=D.fog,U=F.geometry,O=v.isMeshStandardMaterial?D.environment:null,z=(v.isMeshStandardMaterial?e:t).get(v.envMap||O),N=z&&z.mapping===Wr?z.image.height:null,Z=_[v.type];v.precision!==null&&(m=s.getMaxPrecision(v.precision),m!==v.precision&&console.warn("THREE.WebGLProgram.getParameters:",v.precision,"not supported, using",m,"instead."));const Y=U.morphAttributes.position||U.morphAttributes.normal||U.morphAttributes.color,it=Y!==void 0?Y.length:0;let vt=0;U.morphAttributes.position!==void 0&&(vt=1),U.morphAttributes.normal!==void 0&&(vt=2),U.morphAttributes.color!==void 0&&(vt=3);let Rt,et,tt,W;if(Z){const he=An[Z];Rt=he.vertexShader,et=he.fragmentShader}else Rt=v.vertexShader,et=v.fragmentShader,c.update(v),tt=c.getVertexShaderID(v),W=c.getFragmentShaderID(v);const X=n.getRenderTarget(),rt=n.state.buffers.depth.getReversed(),bt=F.isInstancedMesh===!0,mt=F.isBatchedMesh===!0,Pt=!!v.map,Zt=!!v.matcap,L=!!z,Jt=!!v.aoMap,J=!!v.lightMap,ht=!!v.bumpMap,ot=!!v.normalMap,Xt=!!v.displacementMap,st=!!v.emissiveMap,gt=!!v.metalnessMap,Wt=!!v.roughnessMap,qt=v.anisotropy>0,C=v.clearcoat>0,E=v.dispersion>0,H=v.iridescence>0,K=v.sheen>0,nt=v.transmission>0,$=qt&&!!v.anisotropyMap,Mt=C&&!!v.clearcoatMap,ut=C&&!!v.clearcoatNormalMap,Tt=C&&!!v.clearcoatRoughnessMap,At=H&&!!v.iridescenceMap,ct=H&&!!v.iridescenceThicknessMap,xt=K&&!!v.sheenColorMap,Bt=K&&!!v.sheenRoughnessMap,Dt=!!v.specularMap,yt=!!v.specularColorMap,Yt=!!v.specularIntensityMap,k=nt&&!!v.transmissionMap,dt=nt&&!!v.thicknessMap,_t=!!v.gradientMap,wt=!!v.alphaMap,ft=v.alphaTest>0,at=!!v.alphaHash,It=!!v.extensions;let jt=ii;v.toneMapped&&(X===null||X.isXRRenderTarget===!0)&&(jt=n.toneMapping);const ge={shaderID:Z,shaderType:v.type,shaderName:v.name,vertexShader:Rt,fragmentShader:et,defines:v.defines,customVertexShaderID:tt,customFragmentShaderID:W,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:m,batching:mt,batchingColor:mt&&F._colorsTexture!==null,instancing:bt,instancingColor:bt&&F.instanceColor!==null,instancingMorph:bt&&F.morphTexture!==null,supportsVertexTextures:p,outputColorSpace:X===null?n.outputColorSpace:X.isXRRenderTarget===!0?X.texture.colorSpace:us,alphaToCoverage:!!v.alphaToCoverage,map:Pt,matcap:Zt,envMap:L,envMapMode:L&&z.mapping,envMapCubeUVHeight:N,aoMap:Jt,lightMap:J,bumpMap:ht,normalMap:ot,displacementMap:p&&Xt,emissiveMap:st,normalMapObjectSpace:ot&&v.normalMapType===vu,normalMapTangentSpace:ot&&v.normalMapType===xu,metalnessMap:gt,roughnessMap:Wt,anisotropy:qt,anisotropyMap:$,clearcoat:C,clearcoatMap:Mt,clearcoatNormalMap:ut,clearcoatRoughnessMap:Tt,dispersion:E,iridescence:H,iridescenceMap:At,iridescenceThicknessMap:ct,sheen:K,sheenColorMap:xt,sheenRoughnessMap:Bt,specularMap:Dt,specularColorMap:yt,specularIntensityMap:Yt,transmission:nt,transmissionMap:k,thicknessMap:dt,gradientMap:_t,opaque:v.transparent===!1&&v.blending===bi&&v.alphaToCoverage===!1,alphaMap:wt,alphaTest:ft,alphaHash:at,combine:v.combine,mapUv:Pt&&M(v.map.channel),aoMapUv:Jt&&M(v.aoMap.channel),lightMapUv:J&&M(v.lightMap.channel),bumpMapUv:ht&&M(v.bumpMap.channel),normalMapUv:ot&&M(v.normalMap.channel),displacementMapUv:Xt&&M(v.displacementMap.channel),emissiveMapUv:st&&M(v.emissiveMap.channel),metalnessMapUv:gt&&M(v.metalnessMap.channel),roughnessMapUv:Wt&&M(v.roughnessMap.channel),anisotropyMapUv:$&&M(v.anisotropyMap.channel),clearcoatMapUv:Mt&&M(v.clearcoatMap.channel),clearcoatNormalMapUv:ut&&M(v.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Tt&&M(v.clearcoatRoughnessMap.channel),iridescenceMapUv:At&&M(v.iridescenceMap.channel),iridescenceThicknessMapUv:ct&&M(v.iridescenceThicknessMap.channel),sheenColorMapUv:xt&&M(v.sheenColorMap.channel),sheenRoughnessMapUv:Bt&&M(v.sheenRoughnessMap.channel),specularMapUv:Dt&&M(v.specularMap.channel),specularColorMapUv:yt&&M(v.specularColorMap.channel),specularIntensityMapUv:Yt&&M(v.specularIntensityMap.channel),transmissionMapUv:k&&M(v.transmissionMap.channel),thicknessMapUv:dt&&M(v.thicknessMap.channel),alphaMapUv:wt&&M(v.alphaMap.channel),vertexTangents:!!U.attributes.tangent&&(ot||qt),vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!U.attributes.color&&U.attributes.color.itemSize===4,pointsUvs:F.isPoints===!0&&!!U.attributes.uv&&(Pt||wt),fog:!!I,useFog:v.fog===!0,fogExp2:!!I&&I.isFogExp2,flatShading:v.flatShading===!0&&v.wireframe===!1,sizeAttenuation:v.sizeAttenuation===!0,logarithmicDepthBuffer:f,reversedDepthBuffer:rt,skinning:F.isSkinnedMesh===!0,morphTargets:U.morphAttributes.position!==void 0,morphNormals:U.morphAttributes.normal!==void 0,morphColors:U.morphAttributes.color!==void 0,morphTargetsCount:it,morphTextureStride:vt,numDirLights:y.directional.length,numPointLights:y.point.length,numSpotLights:y.spot.length,numSpotLightMaps:y.spotLightMap.length,numRectAreaLights:y.rectArea.length,numHemiLights:y.hemi.length,numDirLightShadows:y.directionalShadowMap.length,numPointLightShadows:y.pointShadowMap.length,numSpotLightShadows:y.spotShadowMap.length,numSpotLightShadowsWithMaps:y.numSpotLightShadowsWithMaps,numLightProbes:y.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:v.dithering,shadowMapEnabled:n.shadowMap.enabled&&P.length>0,shadowMapType:n.shadowMap.type,toneMapping:jt,decodeVideoTexture:Pt&&v.map.isVideoTexture===!0&&le.getTransfer(v.map.colorSpace)===fe,decodeVideoTextureEmissive:st&&v.emissiveMap.isVideoTexture===!0&&le.getTransfer(v.emissiveMap.colorSpace)===fe,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===Bn,flipSided:v.side===je,useDepthPacking:v.depthPacking>=0,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionClipCullDistance:It&&v.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(It&&v.extensions.multiDraw===!0||mt)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:v.customProgramCacheKey()};return ge.vertexUv1s=l.has(1),ge.vertexUv2s=l.has(2),ge.vertexUv3s=l.has(3),l.clear(),ge}function u(v){const y=[];if(v.shaderID?y.push(v.shaderID):(y.push(v.customVertexShaderID),y.push(v.customFragmentShaderID)),v.defines!==void 0)for(const P in v.defines)y.push(P),y.push(v.defines[P]);return v.isRawShaderMaterial===!1&&(b(y,v),x(y,v),y.push(n.outputColorSpace)),y.push(v.customProgramCacheKey),y.join()}function b(v,y){v.push(y.precision),v.push(y.outputColorSpace),v.push(y.envMapMode),v.push(y.envMapCubeUVHeight),v.push(y.mapUv),v.push(y.alphaMapUv),v.push(y.lightMapUv),v.push(y.aoMapUv),v.push(y.bumpMapUv),v.push(y.normalMapUv),v.push(y.displacementMapUv),v.push(y.emissiveMapUv),v.push(y.metalnessMapUv),v.push(y.roughnessMapUv),v.push(y.anisotropyMapUv),v.push(y.clearcoatMapUv),v.push(y.clearcoatNormalMapUv),v.push(y.clearcoatRoughnessMapUv),v.push(y.iridescenceMapUv),v.push(y.iridescenceThicknessMapUv),v.push(y.sheenColorMapUv),v.push(y.sheenRoughnessMapUv),v.push(y.specularMapUv),v.push(y.specularColorMapUv),v.push(y.specularIntensityMapUv),v.push(y.transmissionMapUv),v.push(y.thicknessMapUv),v.push(y.combine),v.push(y.fogExp2),v.push(y.sizeAttenuation),v.push(y.morphTargetsCount),v.push(y.morphAttributeCount),v.push(y.numDirLights),v.push(y.numPointLights),v.push(y.numSpotLights),v.push(y.numSpotLightMaps),v.push(y.numHemiLights),v.push(y.numRectAreaLights),v.push(y.numDirLightShadows),v.push(y.numPointLightShadows),v.push(y.numSpotLightShadows),v.push(y.numSpotLightShadowsWithMaps),v.push(y.numLightProbes),v.push(y.shadowMapType),v.push(y.toneMapping),v.push(y.numClippingPlanes),v.push(y.numClipIntersection),v.push(y.depthPacking)}function x(v,y){o.disableAll(),y.supportsVertexTextures&&o.enable(0),y.instancing&&o.enable(1),y.instancingColor&&o.enable(2),y.instancingMorph&&o.enable(3),y.matcap&&o.enable(4),y.envMap&&o.enable(5),y.normalMapObjectSpace&&o.enable(6),y.normalMapTangentSpace&&o.enable(7),y.clearcoat&&o.enable(8),y.iridescence&&o.enable(9),y.alphaTest&&o.enable(10),y.vertexColors&&o.enable(11),y.vertexAlphas&&o.enable(12),y.vertexUv1s&&o.enable(13),y.vertexUv2s&&o.enable(14),y.vertexUv3s&&o.enable(15),y.vertexTangents&&o.enable(16),y.anisotropy&&o.enable(17),y.alphaHash&&o.enable(18),y.batching&&o.enable(19),y.dispersion&&o.enable(20),y.batchingColor&&o.enable(21),y.gradientMap&&o.enable(22),v.push(o.mask),o.disableAll(),y.fog&&o.enable(0),y.useFog&&o.enable(1),y.flatShading&&o.enable(2),y.logarithmicDepthBuffer&&o.enable(3),y.reversedDepthBuffer&&o.enable(4),y.skinning&&o.enable(5),y.morphTargets&&o.enable(6),y.morphNormals&&o.enable(7),y.morphColors&&o.enable(8),y.premultipliedAlpha&&o.enable(9),y.shadowMapEnabled&&o.enable(10),y.doubleSided&&o.enable(11),y.flipSided&&o.enable(12),y.useDepthPacking&&o.enable(13),y.dithering&&o.enable(14),y.transmission&&o.enable(15),y.sheen&&o.enable(16),y.opaque&&o.enable(17),y.pointsUvs&&o.enable(18),y.decodeVideoTexture&&o.enable(19),y.decodeVideoTextureEmissive&&o.enable(20),y.alphaToCoverage&&o.enable(21),v.push(o.mask)}function g(v){const y=_[v.type];let P;if(y){const D=An[y];P=cd.clone(D.uniforms)}else P=v.uniforms;return P}function A(v,y){let P;for(let D=0,F=d.length;D<F;D++){const I=d[D];if(I.cacheKey===y){P=I,++P.usedTimes;break}}return P===void 0&&(P=new Og(n,y,v,r),d.push(P)),P}function S(v){if(--v.usedTimes===0){const y=d.indexOf(v);d[y]=d[d.length-1],d.pop(),v.destroy()}}function T(v){c.remove(v)}function R(){c.dispose()}return{getParameters:h,getProgramCacheKey:u,getUniforms:g,acquireProgram:A,releaseProgram:S,releaseShaderCache:T,programs:d,dispose:R}}function Gg(){let n=new WeakMap;function t(a){return n.has(a)}function e(a){let o=n.get(a);return o===void 0&&(o={},n.set(a,o)),o}function i(a){n.delete(a)}function s(a,o,c){n.get(a)[o]=c}function r(){n=new WeakMap}return{has:t,get:e,remove:i,update:s,dispose:r}}function Vg(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.material.id!==t.material.id?n.material.id-t.material.id:n.z!==t.z?n.z-t.z:n.id-t.id}function fc(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.z!==t.z?t.z-n.z:n.id-t.id}function pc(){const n=[];let t=0;const e=[],i=[],s=[];function r(){t=0,e.length=0,i.length=0,s.length=0}function a(f,p,m,_,M,h){let u=n[t];return u===void 0?(u={id:f.id,object:f,geometry:p,material:m,groupOrder:_,renderOrder:f.renderOrder,z:M,group:h},n[t]=u):(u.id=f.id,u.object=f,u.geometry=p,u.material=m,u.groupOrder=_,u.renderOrder=f.renderOrder,u.z=M,u.group=h),t++,u}function o(f,p,m,_,M,h){const u=a(f,p,m,_,M,h);m.transmission>0?i.push(u):m.transparent===!0?s.push(u):e.push(u)}function c(f,p,m,_,M,h){const u=a(f,p,m,_,M,h);m.transmission>0?i.unshift(u):m.transparent===!0?s.unshift(u):e.unshift(u)}function l(f,p){e.length>1&&e.sort(f||Vg),i.length>1&&i.sort(p||fc),s.length>1&&s.sort(p||fc)}function d(){for(let f=t,p=n.length;f<p;f++){const m=n[f];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:e,transmissive:i,transparent:s,init:r,push:o,unshift:c,finish:d,sort:l}}function Wg(){let n=new WeakMap;function t(i,s){const r=n.get(i);let a;return r===void 0?(a=new pc,n.set(i,[a])):s>=r.length?(a=new pc,r.push(a)):a=r[s],a}function e(){n=new WeakMap}return{get:t,dispose:e}}function Xg(){const n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new B,color:new kt};break;case"SpotLight":e={position:new B,direction:new B,color:new kt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new B,color:new kt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new B,skyColor:new kt,groundColor:new kt};break;case"RectAreaLight":e={color:new kt,position:new B,halfWidth:new B,halfHeight:new B};break}return n[t.id]=e,e}}}function $g(){const n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Gt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Gt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Gt,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[t.id]=e,e}}}let qg=0;function Yg(n,t){return(t.castShadow?2:0)-(n.castShadow?2:0)+(t.map?1:0)-(n.map?1:0)}function jg(n){const t=new Xg,e=$g(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)i.probe.push(new B);const s=new B,r=new Me,a=new Me;function o(l){let d=0,f=0,p=0;for(let v=0;v<9;v++)i.probe[v].set(0,0,0);let m=0,_=0,M=0,h=0,u=0,b=0,x=0,g=0,A=0,S=0,T=0;l.sort(Yg);for(let v=0,y=l.length;v<y;v++){const P=l[v],D=P.color,F=P.intensity,I=P.distance,U=P.shadow&&P.shadow.map?P.shadow.map.texture:null;if(P.isAmbientLight)d+=D.r*F,f+=D.g*F,p+=D.b*F;else if(P.isLightProbe){for(let O=0;O<9;O++)i.probe[O].addScaledVector(P.sh.coefficients[O],F);T++}else if(P.isDirectionalLight){const O=t.get(P);if(O.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){const z=P.shadow,N=e.get(P);N.shadowIntensity=z.intensity,N.shadowBias=z.bias,N.shadowNormalBias=z.normalBias,N.shadowRadius=z.radius,N.shadowMapSize=z.mapSize,i.directionalShadow[m]=N,i.directionalShadowMap[m]=U,i.directionalShadowMatrix[m]=P.shadow.matrix,b++}i.directional[m]=O,m++}else if(P.isSpotLight){const O=t.get(P);O.position.setFromMatrixPosition(P.matrixWorld),O.color.copy(D).multiplyScalar(F),O.distance=I,O.coneCos=Math.cos(P.angle),O.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),O.decay=P.decay,i.spot[M]=O;const z=P.shadow;if(P.map&&(i.spotLightMap[A]=P.map,A++,z.updateMatrices(P),P.castShadow&&S++),i.spotLightMatrix[M]=z.matrix,P.castShadow){const N=e.get(P);N.shadowIntensity=z.intensity,N.shadowBias=z.bias,N.shadowNormalBias=z.normalBias,N.shadowRadius=z.radius,N.shadowMapSize=z.mapSize,i.spotShadow[M]=N,i.spotShadowMap[M]=U,g++}M++}else if(P.isRectAreaLight){const O=t.get(P);O.color.copy(D).multiplyScalar(F),O.halfWidth.set(P.width*.5,0,0),O.halfHeight.set(0,P.height*.5,0),i.rectArea[h]=O,h++}else if(P.isPointLight){const O=t.get(P);if(O.color.copy(P.color).multiplyScalar(P.intensity),O.distance=P.distance,O.decay=P.decay,P.castShadow){const z=P.shadow,N=e.get(P);N.shadowIntensity=z.intensity,N.shadowBias=z.bias,N.shadowNormalBias=z.normalBias,N.shadowRadius=z.radius,N.shadowMapSize=z.mapSize,N.shadowCameraNear=z.camera.near,N.shadowCameraFar=z.camera.far,i.pointShadow[_]=N,i.pointShadowMap[_]=U,i.pointShadowMatrix[_]=P.shadow.matrix,x++}i.point[_]=O,_++}else if(P.isHemisphereLight){const O=t.get(P);O.skyColor.copy(P.color).multiplyScalar(F),O.groundColor.copy(P.groundColor).multiplyScalar(F),i.hemi[u]=O,u++}}h>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=St.LTC_FLOAT_1,i.rectAreaLTC2=St.LTC_FLOAT_2):(i.rectAreaLTC1=St.LTC_HALF_1,i.rectAreaLTC2=St.LTC_HALF_2)),i.ambient[0]=d,i.ambient[1]=f,i.ambient[2]=p;const R=i.hash;(R.directionalLength!==m||R.pointLength!==_||R.spotLength!==M||R.rectAreaLength!==h||R.hemiLength!==u||R.numDirectionalShadows!==b||R.numPointShadows!==x||R.numSpotShadows!==g||R.numSpotMaps!==A||R.numLightProbes!==T)&&(i.directional.length=m,i.spot.length=M,i.rectArea.length=h,i.point.length=_,i.hemi.length=u,i.directionalShadow.length=b,i.directionalShadowMap.length=b,i.pointShadow.length=x,i.pointShadowMap.length=x,i.spotShadow.length=g,i.spotShadowMap.length=g,i.directionalShadowMatrix.length=b,i.pointShadowMatrix.length=x,i.spotLightMatrix.length=g+A-S,i.spotLightMap.length=A,i.numSpotLightShadowsWithMaps=S,i.numLightProbes=T,R.directionalLength=m,R.pointLength=_,R.spotLength=M,R.rectAreaLength=h,R.hemiLength=u,R.numDirectionalShadows=b,R.numPointShadows=x,R.numSpotShadows=g,R.numSpotMaps=A,R.numLightProbes=T,i.version=qg++)}function c(l,d){let f=0,p=0,m=0,_=0,M=0;const h=d.matrixWorldInverse;for(let u=0,b=l.length;u<b;u++){const x=l[u];if(x.isDirectionalLight){const g=i.directional[f];g.direction.setFromMatrixPosition(x.matrixWorld),s.setFromMatrixPosition(x.target.matrixWorld),g.direction.sub(s),g.direction.transformDirection(h),f++}else if(x.isSpotLight){const g=i.spot[m];g.position.setFromMatrixPosition(x.matrixWorld),g.position.applyMatrix4(h),g.direction.setFromMatrixPosition(x.matrixWorld),s.setFromMatrixPosition(x.target.matrixWorld),g.direction.sub(s),g.direction.transformDirection(h),m++}else if(x.isRectAreaLight){const g=i.rectArea[_];g.position.setFromMatrixPosition(x.matrixWorld),g.position.applyMatrix4(h),a.identity(),r.copy(x.matrixWorld),r.premultiply(h),a.extractRotation(r),g.halfWidth.set(x.width*.5,0,0),g.halfHeight.set(0,x.height*.5,0),g.halfWidth.applyMatrix4(a),g.halfHeight.applyMatrix4(a),_++}else if(x.isPointLight){const g=i.point[p];g.position.setFromMatrixPosition(x.matrixWorld),g.position.applyMatrix4(h),p++}else if(x.isHemisphereLight){const g=i.hemi[M];g.direction.setFromMatrixPosition(x.matrixWorld),g.direction.transformDirection(h),M++}}}return{setup:o,setupView:c,state:i}}function mc(n){const t=new jg(n),e=[],i=[];function s(d){l.camera=d,e.length=0,i.length=0}function r(d){e.push(d)}function a(d){i.push(d)}function o(){t.setup(e)}function c(d){t.setupView(e,d)}const l={lightsArray:e,shadowsArray:i,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:l,setupLights:o,setupLightsView:c,pushLight:r,pushShadow:a}}function Kg(n){let t=new WeakMap;function e(s,r=0){const a=t.get(s);let o;return a===void 0?(o=new mc(n),t.set(s,[o])):r>=a.length?(o=new mc(n),a.push(o)):o=a[r],o}function i(){t=new WeakMap}return{get:e,dispose:i}}const Zg=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Jg=`uniform sampler2D shadow_pass;
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
}`;function Qg(n,t,e){let i=new nh;const s=new Gt,r=new Gt,a=new Ee,o=new Sd({depthPacking:_u}),c=new Ed,l={},d=e.maxTextureSize,f={[ri]:je,[je]:ri,[Bn]:Bn},p=new oi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Gt},radius:{value:4}},vertexShader:Zg,fragmentShader:Jg}),m=p.clone();m.defines.HORIZONTAL_PASS=1;const _=new ie;_.setAttribute("position",new ee(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const M=new hn(_,p),h=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Uc;let u=this.type;this.render=function(S,T,R){if(h.enabled===!1||h.autoUpdate===!1&&h.needsUpdate===!1||S.length===0)return;const v=n.getRenderTarget(),y=n.getActiveCubeFace(),P=n.getActiveMipmapLevel(),D=n.state;D.setBlending(ni),D.buffers.depth.getReversed()===!0?D.buffers.color.setClear(0,0,0,0):D.buffers.color.setClear(1,1,1,1),D.buffers.depth.setTest(!0),D.setScissorTest(!1);const F=u!==On&&this.type===On,I=u===On&&this.type!==On;for(let U=0,O=S.length;U<O;U++){const z=S[U],N=z.shadow;if(N===void 0){console.warn("THREE.WebGLShadowMap:",z,"has no shadow.");continue}if(N.autoUpdate===!1&&N.needsUpdate===!1)continue;s.copy(N.mapSize);const Z=N.getFrameExtents();if(s.multiply(Z),r.copy(N.mapSize),(s.x>d||s.y>d)&&(s.x>d&&(r.x=Math.floor(d/Z.x),s.x=r.x*Z.x,N.mapSize.x=r.x),s.y>d&&(r.y=Math.floor(d/Z.y),s.y=r.y*Z.y,N.mapSize.y=r.y)),N.map===null||F===!0||I===!0){const it=this.type!==On?{minFilter:En,magFilter:En}:{};N.map!==null&&N.map.dispose(),N.map=new wi(s.x,s.y,it),N.map.texture.name=z.name+".shadowMap",N.camera.updateProjectionMatrix()}n.setRenderTarget(N.map),n.clear();const Y=N.getViewportCount();for(let it=0;it<Y;it++){const vt=N.getViewport(it);a.set(r.x*vt.x,r.y*vt.y,r.x*vt.z,r.y*vt.w),D.viewport(a),N.updateMatrices(z,it),i=N.getFrustum(),g(T,R,N.camera,z,this.type)}N.isPointLightShadow!==!0&&this.type===On&&b(N,R),N.needsUpdate=!1}u=this.type,h.needsUpdate=!1,n.setRenderTarget(v,y,P)};function b(S,T){const R=t.update(M);p.defines.VSM_SAMPLES!==S.blurSamples&&(p.defines.VSM_SAMPLES=S.blurSamples,m.defines.VSM_SAMPLES=S.blurSamples,p.needsUpdate=!0,m.needsUpdate=!0),S.mapPass===null&&(S.mapPass=new wi(s.x,s.y)),p.uniforms.shadow_pass.value=S.map.texture,p.uniforms.resolution.value=S.mapSize,p.uniforms.radius.value=S.radius,n.setRenderTarget(S.mapPass),n.clear(),n.renderBufferDirect(T,null,R,p,M,null),m.uniforms.shadow_pass.value=S.mapPass.texture,m.uniforms.resolution.value=S.mapSize,m.uniforms.radius.value=S.radius,n.setRenderTarget(S.map),n.clear(),n.renderBufferDirect(T,null,R,m,M,null)}function x(S,T,R,v){let y=null;const P=R.isPointLight===!0?S.customDistanceMaterial:S.customDepthMaterial;if(P!==void 0)y=P;else if(y=R.isPointLight===!0?c:o,n.localClippingEnabled&&T.clipShadows===!0&&Array.isArray(T.clippingPlanes)&&T.clippingPlanes.length!==0||T.displacementMap&&T.displacementScale!==0||T.alphaMap&&T.alphaTest>0||T.map&&T.alphaTest>0||T.alphaToCoverage===!0){const D=y.uuid,F=T.uuid;let I=l[D];I===void 0&&(I={},l[D]=I);let U=I[F];U===void 0&&(U=y.clone(),I[F]=U,T.addEventListener("dispose",A)),y=U}if(y.visible=T.visible,y.wireframe=T.wireframe,v===On?y.side=T.shadowSide!==null?T.shadowSide:T.side:y.side=T.shadowSide!==null?T.shadowSide:f[T.side],y.alphaMap=T.alphaMap,y.alphaTest=T.alphaToCoverage===!0?.5:T.alphaTest,y.map=T.map,y.clipShadows=T.clipShadows,y.clippingPlanes=T.clippingPlanes,y.clipIntersection=T.clipIntersection,y.displacementMap=T.displacementMap,y.displacementScale=T.displacementScale,y.displacementBias=T.displacementBias,y.wireframeLinewidth=T.wireframeLinewidth,y.linewidth=T.linewidth,R.isPointLight===!0&&y.isMeshDistanceMaterial===!0){const D=n.properties.get(y);D.light=R}return y}function g(S,T,R,v,y){if(S.visible===!1)return;if(S.layers.test(T.layers)&&(S.isMesh||S.isLine||S.isPoints)&&(S.castShadow||S.receiveShadow&&y===On)&&(!S.frustumCulled||i.intersectsObject(S))){S.modelViewMatrix.multiplyMatrices(R.matrixWorldInverse,S.matrixWorld);const F=t.update(S),I=S.material;if(Array.isArray(I)){const U=F.groups;for(let O=0,z=U.length;O<z;O++){const N=U[O],Z=I[N.materialIndex];if(Z&&Z.visible){const Y=x(S,Z,v,y);S.onBeforeShadow(n,S,T,R,F,Y,N),n.renderBufferDirect(R,null,F,Y,S,N),S.onAfterShadow(n,S,T,R,F,Y,N)}}}else if(I.visible){const U=x(S,I,v,y);S.onBeforeShadow(n,S,T,R,F,U,null),n.renderBufferDirect(R,null,F,U,S,null),S.onAfterShadow(n,S,T,R,F,U,null)}}const D=S.children;for(let F=0,I=D.length;F<I;F++)g(D[F],T,R,v,y)}function A(S){S.target.removeEventListener("dispose",A);for(const R in l){const v=l[R],y=S.target.uuid;y in v&&(v[y].dispose(),delete v[y])}}}const t0={[ka]:Ha,[Ga]:Xa,[Va]:$a,[ls]:Wa,[Ha]:ka,[Xa]:Ga,[$a]:Va,[Wa]:ls};function e0(n,t){function e(){let k=!1;const dt=new Ee;let _t=null;const wt=new Ee(0,0,0,0);return{setMask:function(ft){_t!==ft&&!k&&(n.colorMask(ft,ft,ft,ft),_t=ft)},setLocked:function(ft){k=ft},setClear:function(ft,at,It,jt,ge){ge===!0&&(ft*=jt,at*=jt,It*=jt),dt.set(ft,at,It,jt),wt.equals(dt)===!1&&(n.clearColor(ft,at,It,jt),wt.copy(dt))},reset:function(){k=!1,_t=null,wt.set(-1,0,0,0)}}}function i(){let k=!1,dt=!1,_t=null,wt=null,ft=null;return{setReversed:function(at){if(dt!==at){const It=t.get("EXT_clip_control");at?It.clipControlEXT(It.LOWER_LEFT_EXT,It.ZERO_TO_ONE_EXT):It.clipControlEXT(It.LOWER_LEFT_EXT,It.NEGATIVE_ONE_TO_ONE_EXT),dt=at;const jt=ft;ft=null,this.setClear(jt)}},getReversed:function(){return dt},setTest:function(at){at?X(n.DEPTH_TEST):rt(n.DEPTH_TEST)},setMask:function(at){_t!==at&&!k&&(n.depthMask(at),_t=at)},setFunc:function(at){if(dt&&(at=t0[at]),wt!==at){switch(at){case ka:n.depthFunc(n.NEVER);break;case Ha:n.depthFunc(n.ALWAYS);break;case Ga:n.depthFunc(n.LESS);break;case ls:n.depthFunc(n.LEQUAL);break;case Va:n.depthFunc(n.EQUAL);break;case Wa:n.depthFunc(n.GEQUAL);break;case Xa:n.depthFunc(n.GREATER);break;case $a:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}wt=at}},setLocked:function(at){k=at},setClear:function(at){ft!==at&&(dt&&(at=1-at),n.clearDepth(at),ft=at)},reset:function(){k=!1,_t=null,wt=null,ft=null,dt=!1}}}function s(){let k=!1,dt=null,_t=null,wt=null,ft=null,at=null,It=null,jt=null,ge=null;return{setTest:function(he){k||(he?X(n.STENCIL_TEST):rt(n.STENCIL_TEST))},setMask:function(he){dt!==he&&!k&&(n.stencilMask(he),dt=he)},setFunc:function(he,Dn,bn){(_t!==he||wt!==Dn||ft!==bn)&&(n.stencilFunc(he,Dn,bn),_t=he,wt=Dn,ft=bn)},setOp:function(he,Dn,bn){(at!==he||It!==Dn||jt!==bn)&&(n.stencilOp(he,Dn,bn),at=he,It=Dn,jt=bn)},setLocked:function(he){k=he},setClear:function(he){ge!==he&&(n.clearStencil(he),ge=he)},reset:function(){k=!1,dt=null,_t=null,wt=null,ft=null,at=null,It=null,jt=null,ge=null}}}const r=new e,a=new i,o=new s,c=new WeakMap,l=new WeakMap;let d={},f={},p=new WeakMap,m=[],_=null,M=!1,h=null,u=null,b=null,x=null,g=null,A=null,S=null,T=new kt(0,0,0),R=0,v=!1,y=null,P=null,D=null,F=null,I=null;const U=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let O=!1,z=0;const N=n.getParameter(n.VERSION);N.indexOf("WebGL")!==-1?(z=parseFloat(/^WebGL (\d)/.exec(N)[1]),O=z>=1):N.indexOf("OpenGL ES")!==-1&&(z=parseFloat(/^OpenGL ES (\d)/.exec(N)[1]),O=z>=2);let Z=null,Y={};const it=n.getParameter(n.SCISSOR_BOX),vt=n.getParameter(n.VIEWPORT),Rt=new Ee().fromArray(it),et=new Ee().fromArray(vt);function tt(k,dt,_t,wt){const ft=new Uint8Array(4),at=n.createTexture();n.bindTexture(k,at),n.texParameteri(k,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(k,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let It=0;It<_t;It++)k===n.TEXTURE_3D||k===n.TEXTURE_2D_ARRAY?n.texImage3D(dt,0,n.RGBA,1,1,wt,0,n.RGBA,n.UNSIGNED_BYTE,ft):n.texImage2D(dt+It,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,ft);return at}const W={};W[n.TEXTURE_2D]=tt(n.TEXTURE_2D,n.TEXTURE_2D,1),W[n.TEXTURE_CUBE_MAP]=tt(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),W[n.TEXTURE_2D_ARRAY]=tt(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),W[n.TEXTURE_3D]=tt(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),X(n.DEPTH_TEST),a.setFunc(ls),ht(!1),ot(hl),X(n.CULL_FACE),Jt(ni);function X(k){d[k]!==!0&&(n.enable(k),d[k]=!0)}function rt(k){d[k]!==!1&&(n.disable(k),d[k]=!1)}function bt(k,dt){return f[k]!==dt?(n.bindFramebuffer(k,dt),f[k]=dt,k===n.DRAW_FRAMEBUFFER&&(f[n.FRAMEBUFFER]=dt),k===n.FRAMEBUFFER&&(f[n.DRAW_FRAMEBUFFER]=dt),!0):!1}function mt(k,dt){let _t=m,wt=!1;if(k){_t=p.get(dt),_t===void 0&&(_t=[],p.set(dt,_t));const ft=k.textures;if(_t.length!==ft.length||_t[0]!==n.COLOR_ATTACHMENT0){for(let at=0,It=ft.length;at<It;at++)_t[at]=n.COLOR_ATTACHMENT0+at;_t.length=ft.length,wt=!0}}else _t[0]!==n.BACK&&(_t[0]=n.BACK,wt=!0);wt&&n.drawBuffers(_t)}function Pt(k){return _!==k?(n.useProgram(k),_=k,!0):!1}const Zt={[vi]:n.FUNC_ADD,[Wh]:n.FUNC_SUBTRACT,[Xh]:n.FUNC_REVERSE_SUBTRACT};Zt[$h]=n.MIN,Zt[qh]=n.MAX;const L={[Yh]:n.ZERO,[jh]:n.ONE,[Kh]:n.SRC_COLOR,[Ba]:n.SRC_ALPHA,[nu]:n.SRC_ALPHA_SATURATE,[tu]:n.DST_COLOR,[Jh]:n.DST_ALPHA,[Zh]:n.ONE_MINUS_SRC_COLOR,[za]:n.ONE_MINUS_SRC_ALPHA,[eu]:n.ONE_MINUS_DST_COLOR,[Qh]:n.ONE_MINUS_DST_ALPHA,[iu]:n.CONSTANT_COLOR,[su]:n.ONE_MINUS_CONSTANT_COLOR,[ru]:n.CONSTANT_ALPHA,[au]:n.ONE_MINUS_CONSTANT_ALPHA};function Jt(k,dt,_t,wt,ft,at,It,jt,ge,he){if(k===ni){M===!0&&(rt(n.BLEND),M=!1);return}if(M===!1&&(X(n.BLEND),M=!0),k!==Vh){if(k!==h||he!==v){if((u!==vi||g!==vi)&&(n.blendEquation(n.FUNC_ADD),u=vi,g=vi),he)switch(k){case bi:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Ft:n.blendFunc(n.ONE,n.ONE);break;case ul:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case dl:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",k);break}else switch(k){case bi:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Ft:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case ul:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case dl:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",k);break}b=null,x=null,A=null,S=null,T.set(0,0,0),R=0,h=k,v=he}return}ft=ft||dt,at=at||_t,It=It||wt,(dt!==u||ft!==g)&&(n.blendEquationSeparate(Zt[dt],Zt[ft]),u=dt,g=ft),(_t!==b||wt!==x||at!==A||It!==S)&&(n.blendFuncSeparate(L[_t],L[wt],L[at],L[It]),b=_t,x=wt,A=at,S=It),(jt.equals(T)===!1||ge!==R)&&(n.blendColor(jt.r,jt.g,jt.b,ge),T.copy(jt),R=ge),h=k,v=!1}function J(k,dt){k.side===Bn?rt(n.CULL_FACE):X(n.CULL_FACE);let _t=k.side===je;dt&&(_t=!_t),ht(_t),k.blending===bi&&k.transparent===!1?Jt(ni):Jt(k.blending,k.blendEquation,k.blendSrc,k.blendDst,k.blendEquationAlpha,k.blendSrcAlpha,k.blendDstAlpha,k.blendColor,k.blendAlpha,k.premultipliedAlpha),a.setFunc(k.depthFunc),a.setTest(k.depthTest),a.setMask(k.depthWrite),r.setMask(k.colorWrite);const wt=k.stencilWrite;o.setTest(wt),wt&&(o.setMask(k.stencilWriteMask),o.setFunc(k.stencilFunc,k.stencilRef,k.stencilFuncMask),o.setOp(k.stencilFail,k.stencilZFail,k.stencilZPass)),st(k.polygonOffset,k.polygonOffsetFactor,k.polygonOffsetUnits),k.alphaToCoverage===!0?X(n.SAMPLE_ALPHA_TO_COVERAGE):rt(n.SAMPLE_ALPHA_TO_COVERAGE)}function ht(k){y!==k&&(k?n.frontFace(n.CW):n.frontFace(n.CCW),y=k)}function ot(k){k!==kh?(X(n.CULL_FACE),k!==P&&(k===hl?n.cullFace(n.BACK):k===Hh?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):rt(n.CULL_FACE),P=k}function Xt(k){k!==D&&(O&&n.lineWidth(k),D=k)}function st(k,dt,_t){k?(X(n.POLYGON_OFFSET_FILL),(F!==dt||I!==_t)&&(n.polygonOffset(dt,_t),F=dt,I=_t)):rt(n.POLYGON_OFFSET_FILL)}function gt(k){k?X(n.SCISSOR_TEST):rt(n.SCISSOR_TEST)}function Wt(k){k===void 0&&(k=n.TEXTURE0+U-1),Z!==k&&(n.activeTexture(k),Z=k)}function qt(k,dt,_t){_t===void 0&&(Z===null?_t=n.TEXTURE0+U-1:_t=Z);let wt=Y[_t];wt===void 0&&(wt={type:void 0,texture:void 0},Y[_t]=wt),(wt.type!==k||wt.texture!==dt)&&(Z!==_t&&(n.activeTexture(_t),Z=_t),n.bindTexture(k,dt||W[k]),wt.type=k,wt.texture=dt)}function C(){const k=Y[Z];k!==void 0&&k.type!==void 0&&(n.bindTexture(k.type,null),k.type=void 0,k.texture=void 0)}function E(){try{n.compressedTexImage2D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function H(){try{n.compressedTexImage3D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function K(){try{n.texSubImage2D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function nt(){try{n.texSubImage3D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function $(){try{n.compressedTexSubImage2D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Mt(){try{n.compressedTexSubImage3D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function ut(){try{n.texStorage2D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Tt(){try{n.texStorage3D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function At(){try{n.texImage2D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function ct(){try{n.texImage3D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function xt(k){Rt.equals(k)===!1&&(n.scissor(k.x,k.y,k.z,k.w),Rt.copy(k))}function Bt(k){et.equals(k)===!1&&(n.viewport(k.x,k.y,k.z,k.w),et.copy(k))}function Dt(k,dt){let _t=l.get(dt);_t===void 0&&(_t=new WeakMap,l.set(dt,_t));let wt=_t.get(k);wt===void 0&&(wt=n.getUniformBlockIndex(dt,k.name),_t.set(k,wt))}function yt(k,dt){const wt=l.get(dt).get(k);c.get(dt)!==wt&&(n.uniformBlockBinding(dt,wt,k.__bindingPointIndex),c.set(dt,wt))}function Yt(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),a.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),d={},Z=null,Y={},f={},p=new WeakMap,m=[],_=null,M=!1,h=null,u=null,b=null,x=null,g=null,A=null,S=null,T=new kt(0,0,0),R=0,v=!1,y=null,P=null,D=null,F=null,I=null,Rt.set(0,0,n.canvas.width,n.canvas.height),et.set(0,0,n.canvas.width,n.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:X,disable:rt,bindFramebuffer:bt,drawBuffers:mt,useProgram:Pt,setBlending:Jt,setMaterial:J,setFlipSided:ht,setCullFace:ot,setLineWidth:Xt,setPolygonOffset:st,setScissorTest:gt,activeTexture:Wt,bindTexture:qt,unbindTexture:C,compressedTexImage2D:E,compressedTexImage3D:H,texImage2D:At,texImage3D:ct,updateUBOMapping:Dt,uniformBlockBinding:yt,texStorage2D:ut,texStorage3D:Tt,texSubImage2D:K,texSubImage3D:nt,compressedTexSubImage2D:$,compressedTexSubImage3D:Mt,scissor:xt,viewport:Bt,reset:Yt}}function n0(n,t,e,i,s,r,a){const o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new Gt,d=new WeakMap;let f;const p=new WeakMap;let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(C,E){return m?new OffscreenCanvas(C,E):Or("canvas")}function M(C,E,H){let K=1;const nt=qt(C);if((nt.width>H||nt.height>H)&&(K=H/Math.max(nt.width,nt.height)),K<1)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap||typeof VideoFrame<"u"&&C instanceof VideoFrame){const $=Math.floor(K*nt.width),Mt=Math.floor(K*nt.height);f===void 0&&(f=_($,Mt));const ut=E?_($,Mt):f;return ut.width=$,ut.height=Mt,ut.getContext("2d").drawImage(C,0,0,$,Mt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+nt.width+"x"+nt.height+") to ("+$+"x"+Mt+")."),ut}else return"data"in C&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+nt.width+"x"+nt.height+")."),C;return C}function h(C){return C.generateMipmaps}function u(C){n.generateMipmap(C)}function b(C){return C.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:C.isWebGL3DRenderTarget?n.TEXTURE_3D:C.isWebGLArrayRenderTarget||C.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function x(C,E,H,K,nt=!1){if(C!==null){if(n[C]!==void 0)return n[C];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let $=E;if(E===n.RED&&(H===n.FLOAT&&($=n.R32F),H===n.HALF_FLOAT&&($=n.R16F),H===n.UNSIGNED_BYTE&&($=n.R8)),E===n.RED_INTEGER&&(H===n.UNSIGNED_BYTE&&($=n.R8UI),H===n.UNSIGNED_SHORT&&($=n.R16UI),H===n.UNSIGNED_INT&&($=n.R32UI),H===n.BYTE&&($=n.R8I),H===n.SHORT&&($=n.R16I),H===n.INT&&($=n.R32I)),E===n.RG&&(H===n.FLOAT&&($=n.RG32F),H===n.HALF_FLOAT&&($=n.RG16F),H===n.UNSIGNED_BYTE&&($=n.RG8)),E===n.RG_INTEGER&&(H===n.UNSIGNED_BYTE&&($=n.RG8UI),H===n.UNSIGNED_SHORT&&($=n.RG16UI),H===n.UNSIGNED_INT&&($=n.RG32UI),H===n.BYTE&&($=n.RG8I),H===n.SHORT&&($=n.RG16I),H===n.INT&&($=n.RG32I)),E===n.RGB_INTEGER&&(H===n.UNSIGNED_BYTE&&($=n.RGB8UI),H===n.UNSIGNED_SHORT&&($=n.RGB16UI),H===n.UNSIGNED_INT&&($=n.RGB32UI),H===n.BYTE&&($=n.RGB8I),H===n.SHORT&&($=n.RGB16I),H===n.INT&&($=n.RGB32I)),E===n.RGBA_INTEGER&&(H===n.UNSIGNED_BYTE&&($=n.RGBA8UI),H===n.UNSIGNED_SHORT&&($=n.RGBA16UI),H===n.UNSIGNED_INT&&($=n.RGBA32UI),H===n.BYTE&&($=n.RGBA8I),H===n.SHORT&&($=n.RGBA16I),H===n.INT&&($=n.RGBA32I)),E===n.RGB&&(H===n.UNSIGNED_INT_5_9_9_9_REV&&($=n.RGB9_E5),H===n.UNSIGNED_INT_10F_11F_11F_REV&&($=n.R11F_G11F_B10F)),E===n.RGBA){const Mt=nt?Fr:le.getTransfer(K);H===n.FLOAT&&($=n.RGBA32F),H===n.HALF_FLOAT&&($=n.RGBA16F),H===n.UNSIGNED_BYTE&&($=Mt===fe?n.SRGB8_ALPHA8:n.RGBA8),H===n.UNSIGNED_SHORT_4_4_4_4&&($=n.RGBA4),H===n.UNSIGNED_SHORT_5_5_5_1&&($=n.RGB5_A1)}return($===n.R16F||$===n.R32F||$===n.RG16F||$===n.RG32F||$===n.RGBA16F||$===n.RGBA32F)&&t.get("EXT_color_buffer_float"),$}function g(C,E){let H;return C?E===null||E===Ai||E===Ls?H=n.DEPTH24_STENCIL8:E===zn?H=n.DEPTH32F_STENCIL8:E===Ds&&(H=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):E===null||E===Ai||E===Ls?H=n.DEPTH_COMPONENT24:E===zn?H=n.DEPTH_COMPONENT32F:E===Ds&&(H=n.DEPTH_COMPONENT16),H}function A(C,E){return h(C)===!0||C.isFramebufferTexture&&C.minFilter!==En&&C.minFilter!==Mn?Math.log2(Math.max(E.width,E.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?E.mipmaps.length:1}function S(C){const E=C.target;E.removeEventListener("dispose",S),R(E),E.isVideoTexture&&d.delete(E)}function T(C){const E=C.target;E.removeEventListener("dispose",T),y(E)}function R(C){const E=i.get(C);if(E.__webglInit===void 0)return;const H=C.source,K=p.get(H);if(K){const nt=K[E.__cacheKey];nt.usedTimes--,nt.usedTimes===0&&v(C),Object.keys(K).length===0&&p.delete(H)}i.remove(C)}function v(C){const E=i.get(C);n.deleteTexture(E.__webglTexture);const H=C.source,K=p.get(H);delete K[E.__cacheKey],a.memory.textures--}function y(C){const E=i.get(C);if(C.depthTexture&&(C.depthTexture.dispose(),i.remove(C.depthTexture)),C.isWebGLCubeRenderTarget)for(let K=0;K<6;K++){if(Array.isArray(E.__webglFramebuffer[K]))for(let nt=0;nt<E.__webglFramebuffer[K].length;nt++)n.deleteFramebuffer(E.__webglFramebuffer[K][nt]);else n.deleteFramebuffer(E.__webglFramebuffer[K]);E.__webglDepthbuffer&&n.deleteRenderbuffer(E.__webglDepthbuffer[K])}else{if(Array.isArray(E.__webglFramebuffer))for(let K=0;K<E.__webglFramebuffer.length;K++)n.deleteFramebuffer(E.__webglFramebuffer[K]);else n.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&n.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&n.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let K=0;K<E.__webglColorRenderbuffer.length;K++)E.__webglColorRenderbuffer[K]&&n.deleteRenderbuffer(E.__webglColorRenderbuffer[K]);E.__webglDepthRenderbuffer&&n.deleteRenderbuffer(E.__webglDepthRenderbuffer)}const H=C.textures;for(let K=0,nt=H.length;K<nt;K++){const $=i.get(H[K]);$.__webglTexture&&(n.deleteTexture($.__webglTexture),a.memory.textures--),i.remove(H[K])}i.remove(C)}let P=0;function D(){P=0}function F(){const C=P;return C>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+C+" texture units while this GPU supports only "+s.maxTextures),P+=1,C}function I(C){const E=[];return E.push(C.wrapS),E.push(C.wrapT),E.push(C.wrapR||0),E.push(C.magFilter),E.push(C.minFilter),E.push(C.anisotropy),E.push(C.internalFormat),E.push(C.format),E.push(C.type),E.push(C.generateMipmaps),E.push(C.premultiplyAlpha),E.push(C.flipY),E.push(C.unpackAlignment),E.push(C.colorSpace),E.join()}function U(C,E){const H=i.get(C);if(C.isVideoTexture&&gt(C),C.isRenderTargetTexture===!1&&C.isExternalTexture!==!0&&C.version>0&&H.__version!==C.version){const K=C.image;if(K===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(K.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{W(H,C,E);return}}else C.isExternalTexture&&(H.__webglTexture=C.sourceTexture?C.sourceTexture:null);e.bindTexture(n.TEXTURE_2D,H.__webglTexture,n.TEXTURE0+E)}function O(C,E){const H=i.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&H.__version!==C.version){W(H,C,E);return}e.bindTexture(n.TEXTURE_2D_ARRAY,H.__webglTexture,n.TEXTURE0+E)}function z(C,E){const H=i.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&H.__version!==C.version){W(H,C,E);return}e.bindTexture(n.TEXTURE_3D,H.__webglTexture,n.TEXTURE0+E)}function N(C,E){const H=i.get(C);if(C.version>0&&H.__version!==C.version){X(H,C,E);return}e.bindTexture(n.TEXTURE_CUBE_MAP,H.__webglTexture,n.TEXTURE0+E)}const Z={[ja]:n.REPEAT,[yi]:n.CLAMP_TO_EDGE,[Ka]:n.MIRRORED_REPEAT},Y={[En]:n.NEAREST,[mu]:n.NEAREST_MIPMAP_NEAREST,[Ys]:n.NEAREST_MIPMAP_LINEAR,[Mn]:n.LINEAR,[ea]:n.LINEAR_MIPMAP_NEAREST,[ti]:n.LINEAR_MIPMAP_LINEAR},it={[Mu]:n.NEVER,[Au]:n.ALWAYS,[yu]:n.LESS,[$c]:n.LEQUAL,[Su]:n.EQUAL,[Tu]:n.GEQUAL,[Eu]:n.GREATER,[bu]:n.NOTEQUAL};function vt(C,E){if(E.type===zn&&t.has("OES_texture_float_linear")===!1&&(E.magFilter===Mn||E.magFilter===ea||E.magFilter===Ys||E.magFilter===ti||E.minFilter===Mn||E.minFilter===ea||E.minFilter===Ys||E.minFilter===ti)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(C,n.TEXTURE_WRAP_S,Z[E.wrapS]),n.texParameteri(C,n.TEXTURE_WRAP_T,Z[E.wrapT]),(C===n.TEXTURE_3D||C===n.TEXTURE_2D_ARRAY)&&n.texParameteri(C,n.TEXTURE_WRAP_R,Z[E.wrapR]),n.texParameteri(C,n.TEXTURE_MAG_FILTER,Y[E.magFilter]),n.texParameteri(C,n.TEXTURE_MIN_FILTER,Y[E.minFilter]),E.compareFunction&&(n.texParameteri(C,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(C,n.TEXTURE_COMPARE_FUNC,it[E.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===En||E.minFilter!==Ys&&E.minFilter!==ti||E.type===zn&&t.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||i.get(E).__currentAnisotropy){const H=t.get("EXT_texture_filter_anisotropic");n.texParameterf(C,H.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,s.getMaxAnisotropy())),i.get(E).__currentAnisotropy=E.anisotropy}}}function Rt(C,E){let H=!1;C.__webglInit===void 0&&(C.__webglInit=!0,E.addEventListener("dispose",S));const K=E.source;let nt=p.get(K);nt===void 0&&(nt={},p.set(K,nt));const $=I(E);if($!==C.__cacheKey){nt[$]===void 0&&(nt[$]={texture:n.createTexture(),usedTimes:0},a.memory.textures++,H=!0),nt[$].usedTimes++;const Mt=nt[C.__cacheKey];Mt!==void 0&&(nt[C.__cacheKey].usedTimes--,Mt.usedTimes===0&&v(E)),C.__cacheKey=$,C.__webglTexture=nt[$].texture}return H}function et(C,E,H){return Math.floor(Math.floor(C/H)/E)}function tt(C,E,H,K){const $=C.updateRanges;if($.length===0)e.texSubImage2D(n.TEXTURE_2D,0,0,0,E.width,E.height,H,K,E.data);else{$.sort((ct,xt)=>ct.start-xt.start);let Mt=0;for(let ct=1;ct<$.length;ct++){const xt=$[Mt],Bt=$[ct],Dt=xt.start+xt.count,yt=et(Bt.start,E.width,4),Yt=et(xt.start,E.width,4);Bt.start<=Dt+1&&yt===Yt&&et(Bt.start+Bt.count-1,E.width,4)===yt?xt.count=Math.max(xt.count,Bt.start+Bt.count-xt.start):(++Mt,$[Mt]=Bt)}$.length=Mt+1;const ut=n.getParameter(n.UNPACK_ROW_LENGTH),Tt=n.getParameter(n.UNPACK_SKIP_PIXELS),At=n.getParameter(n.UNPACK_SKIP_ROWS);n.pixelStorei(n.UNPACK_ROW_LENGTH,E.width);for(let ct=0,xt=$.length;ct<xt;ct++){const Bt=$[ct],Dt=Math.floor(Bt.start/4),yt=Math.ceil(Bt.count/4),Yt=Dt%E.width,k=Math.floor(Dt/E.width),dt=yt,_t=1;n.pixelStorei(n.UNPACK_SKIP_PIXELS,Yt),n.pixelStorei(n.UNPACK_SKIP_ROWS,k),e.texSubImage2D(n.TEXTURE_2D,0,Yt,k,dt,_t,H,K,E.data)}C.clearUpdateRanges(),n.pixelStorei(n.UNPACK_ROW_LENGTH,ut),n.pixelStorei(n.UNPACK_SKIP_PIXELS,Tt),n.pixelStorei(n.UNPACK_SKIP_ROWS,At)}}function W(C,E,H){let K=n.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(K=n.TEXTURE_2D_ARRAY),E.isData3DTexture&&(K=n.TEXTURE_3D);const nt=Rt(C,E),$=E.source;e.bindTexture(K,C.__webglTexture,n.TEXTURE0+H);const Mt=i.get($);if($.version!==Mt.__version||nt===!0){e.activeTexture(n.TEXTURE0+H);const ut=le.getPrimaries(le.workingColorSpace),Tt=E.colorSpace===Jn?null:le.getPrimaries(E.colorSpace),At=E.colorSpace===Jn||ut===Tt?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,E.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,E.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,At);let ct=M(E.image,!1,s.maxTextureSize);ct=Wt(E,ct);const xt=r.convert(E.format,E.colorSpace),Bt=r.convert(E.type);let Dt=x(E.internalFormat,xt,Bt,E.colorSpace,E.isVideoTexture);vt(K,E);let yt;const Yt=E.mipmaps,k=E.isVideoTexture!==!0,dt=Mt.__version===void 0||nt===!0,_t=$.dataReady,wt=A(E,ct);if(E.isDepthTexture)Dt=g(E.format===Us,E.type),dt&&(k?e.texStorage2D(n.TEXTURE_2D,1,Dt,ct.width,ct.height):e.texImage2D(n.TEXTURE_2D,0,Dt,ct.width,ct.height,0,xt,Bt,null));else if(E.isDataTexture)if(Yt.length>0){k&&dt&&e.texStorage2D(n.TEXTURE_2D,wt,Dt,Yt[0].width,Yt[0].height);for(let ft=0,at=Yt.length;ft<at;ft++)yt=Yt[ft],k?_t&&e.texSubImage2D(n.TEXTURE_2D,ft,0,0,yt.width,yt.height,xt,Bt,yt.data):e.texImage2D(n.TEXTURE_2D,ft,Dt,yt.width,yt.height,0,xt,Bt,yt.data);E.generateMipmaps=!1}else k?(dt&&e.texStorage2D(n.TEXTURE_2D,wt,Dt,ct.width,ct.height),_t&&tt(E,ct,xt,Bt)):e.texImage2D(n.TEXTURE_2D,0,Dt,ct.width,ct.height,0,xt,Bt,ct.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){k&&dt&&e.texStorage3D(n.TEXTURE_2D_ARRAY,wt,Dt,Yt[0].width,Yt[0].height,ct.depth);for(let ft=0,at=Yt.length;ft<at;ft++)if(yt=Yt[ft],E.format!==yn)if(xt!==null)if(k){if(_t)if(E.layerUpdates.size>0){const It=Xl(yt.width,yt.height,E.format,E.type);for(const jt of E.layerUpdates){const ge=yt.data.subarray(jt*It/yt.data.BYTES_PER_ELEMENT,(jt+1)*It/yt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,ft,0,0,jt,yt.width,yt.height,1,xt,ge)}E.clearLayerUpdates()}else e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,ft,0,0,0,yt.width,yt.height,ct.depth,xt,yt.data)}else e.compressedTexImage3D(n.TEXTURE_2D_ARRAY,ft,Dt,yt.width,yt.height,ct.depth,0,yt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else k?_t&&e.texSubImage3D(n.TEXTURE_2D_ARRAY,ft,0,0,0,yt.width,yt.height,ct.depth,xt,Bt,yt.data):e.texImage3D(n.TEXTURE_2D_ARRAY,ft,Dt,yt.width,yt.height,ct.depth,0,xt,Bt,yt.data)}else{k&&dt&&e.texStorage2D(n.TEXTURE_2D,wt,Dt,Yt[0].width,Yt[0].height);for(let ft=0,at=Yt.length;ft<at;ft++)yt=Yt[ft],E.format!==yn?xt!==null?k?_t&&e.compressedTexSubImage2D(n.TEXTURE_2D,ft,0,0,yt.width,yt.height,xt,yt.data):e.compressedTexImage2D(n.TEXTURE_2D,ft,Dt,yt.width,yt.height,0,yt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):k?_t&&e.texSubImage2D(n.TEXTURE_2D,ft,0,0,yt.width,yt.height,xt,Bt,yt.data):e.texImage2D(n.TEXTURE_2D,ft,Dt,yt.width,yt.height,0,xt,Bt,yt.data)}else if(E.isDataArrayTexture)if(k){if(dt&&e.texStorage3D(n.TEXTURE_2D_ARRAY,wt,Dt,ct.width,ct.height,ct.depth),_t)if(E.layerUpdates.size>0){const ft=Xl(ct.width,ct.height,E.format,E.type);for(const at of E.layerUpdates){const It=ct.data.subarray(at*ft/ct.data.BYTES_PER_ELEMENT,(at+1)*ft/ct.data.BYTES_PER_ELEMENT);e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,at,ct.width,ct.height,1,xt,Bt,It)}E.clearLayerUpdates()}else e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,ct.width,ct.height,ct.depth,xt,Bt,ct.data)}else e.texImage3D(n.TEXTURE_2D_ARRAY,0,Dt,ct.width,ct.height,ct.depth,0,xt,Bt,ct.data);else if(E.isData3DTexture)k?(dt&&e.texStorage3D(n.TEXTURE_3D,wt,Dt,ct.width,ct.height,ct.depth),_t&&e.texSubImage3D(n.TEXTURE_3D,0,0,0,0,ct.width,ct.height,ct.depth,xt,Bt,ct.data)):e.texImage3D(n.TEXTURE_3D,0,Dt,ct.width,ct.height,ct.depth,0,xt,Bt,ct.data);else if(E.isFramebufferTexture){if(dt)if(k)e.texStorage2D(n.TEXTURE_2D,wt,Dt,ct.width,ct.height);else{let ft=ct.width,at=ct.height;for(let It=0;It<wt;It++)e.texImage2D(n.TEXTURE_2D,It,Dt,ft,at,0,xt,Bt,null),ft>>=1,at>>=1}}else if(Yt.length>0){if(k&&dt){const ft=qt(Yt[0]);e.texStorage2D(n.TEXTURE_2D,wt,Dt,ft.width,ft.height)}for(let ft=0,at=Yt.length;ft<at;ft++)yt=Yt[ft],k?_t&&e.texSubImage2D(n.TEXTURE_2D,ft,0,0,xt,Bt,yt):e.texImage2D(n.TEXTURE_2D,ft,Dt,xt,Bt,yt);E.generateMipmaps=!1}else if(k){if(dt){const ft=qt(ct);e.texStorage2D(n.TEXTURE_2D,wt,Dt,ft.width,ft.height)}_t&&e.texSubImage2D(n.TEXTURE_2D,0,0,0,xt,Bt,ct)}else e.texImage2D(n.TEXTURE_2D,0,Dt,xt,Bt,ct);h(E)&&u(K),Mt.__version=$.version,E.onUpdate&&E.onUpdate(E)}C.__version=E.version}function X(C,E,H){if(E.image.length!==6)return;const K=Rt(C,E),nt=E.source;e.bindTexture(n.TEXTURE_CUBE_MAP,C.__webglTexture,n.TEXTURE0+H);const $=i.get(nt);if(nt.version!==$.__version||K===!0){e.activeTexture(n.TEXTURE0+H);const Mt=le.getPrimaries(le.workingColorSpace),ut=E.colorSpace===Jn?null:le.getPrimaries(E.colorSpace),Tt=E.colorSpace===Jn||Mt===ut?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,E.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,E.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Tt);const At=E.isCompressedTexture||E.image[0].isCompressedTexture,ct=E.image[0]&&E.image[0].isDataTexture,xt=[];for(let at=0;at<6;at++)!At&&!ct?xt[at]=M(E.image[at],!0,s.maxCubemapSize):xt[at]=ct?E.image[at].image:E.image[at],xt[at]=Wt(E,xt[at]);const Bt=xt[0],Dt=r.convert(E.format,E.colorSpace),yt=r.convert(E.type),Yt=x(E.internalFormat,Dt,yt,E.colorSpace),k=E.isVideoTexture!==!0,dt=$.__version===void 0||K===!0,_t=nt.dataReady;let wt=A(E,Bt);vt(n.TEXTURE_CUBE_MAP,E);let ft;if(At){k&&dt&&e.texStorage2D(n.TEXTURE_CUBE_MAP,wt,Yt,Bt.width,Bt.height);for(let at=0;at<6;at++){ft=xt[at].mipmaps;for(let It=0;It<ft.length;It++){const jt=ft[It];E.format!==yn?Dt!==null?k?_t&&e.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+at,It,0,0,jt.width,jt.height,Dt,jt.data):e.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+at,It,Yt,jt.width,jt.height,0,jt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):k?_t&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+at,It,0,0,jt.width,jt.height,Dt,yt,jt.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+at,It,Yt,jt.width,jt.height,0,Dt,yt,jt.data)}}}else{if(ft=E.mipmaps,k&&dt){ft.length>0&&wt++;const at=qt(xt[0]);e.texStorage2D(n.TEXTURE_CUBE_MAP,wt,Yt,at.width,at.height)}for(let at=0;at<6;at++)if(ct){k?_t&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+at,0,0,0,xt[at].width,xt[at].height,Dt,yt,xt[at].data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+at,0,Yt,xt[at].width,xt[at].height,0,Dt,yt,xt[at].data);for(let It=0;It<ft.length;It++){const ge=ft[It].image[at].image;k?_t&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+at,It+1,0,0,ge.width,ge.height,Dt,yt,ge.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+at,It+1,Yt,ge.width,ge.height,0,Dt,yt,ge.data)}}else{k?_t&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+at,0,0,0,Dt,yt,xt[at]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+at,0,Yt,Dt,yt,xt[at]);for(let It=0;It<ft.length;It++){const jt=ft[It];k?_t&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+at,It+1,0,0,Dt,yt,jt.image[at]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+at,It+1,Yt,Dt,yt,jt.image[at])}}}h(E)&&u(n.TEXTURE_CUBE_MAP),$.__version=nt.version,E.onUpdate&&E.onUpdate(E)}C.__version=E.version}function rt(C,E,H,K,nt,$){const Mt=r.convert(H.format,H.colorSpace),ut=r.convert(H.type),Tt=x(H.internalFormat,Mt,ut,H.colorSpace),At=i.get(E),ct=i.get(H);if(ct.__renderTarget=E,!At.__hasExternalTextures){const xt=Math.max(1,E.width>>$),Bt=Math.max(1,E.height>>$);nt===n.TEXTURE_3D||nt===n.TEXTURE_2D_ARRAY?e.texImage3D(nt,$,Tt,xt,Bt,E.depth,0,Mt,ut,null):e.texImage2D(nt,$,Tt,xt,Bt,0,Mt,ut,null)}e.bindFramebuffer(n.FRAMEBUFFER,C),st(E)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,K,nt,ct.__webglTexture,0,Xt(E)):(nt===n.TEXTURE_2D||nt>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&nt<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,K,nt,ct.__webglTexture,$),e.bindFramebuffer(n.FRAMEBUFFER,null)}function bt(C,E,H){if(n.bindRenderbuffer(n.RENDERBUFFER,C),E.depthBuffer){const K=E.depthTexture,nt=K&&K.isDepthTexture?K.type:null,$=g(E.stencilBuffer,nt),Mt=E.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ut=Xt(E);st(E)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ut,$,E.width,E.height):H?n.renderbufferStorageMultisample(n.RENDERBUFFER,ut,$,E.width,E.height):n.renderbufferStorage(n.RENDERBUFFER,$,E.width,E.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,Mt,n.RENDERBUFFER,C)}else{const K=E.textures;for(let nt=0;nt<K.length;nt++){const $=K[nt],Mt=r.convert($.format,$.colorSpace),ut=r.convert($.type),Tt=x($.internalFormat,Mt,ut,$.colorSpace),At=Xt(E);H&&st(E)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,At,Tt,E.width,E.height):st(E)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,At,Tt,E.width,E.height):n.renderbufferStorage(n.RENDERBUFFER,Tt,E.width,E.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function mt(C,E){if(E&&E.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(n.FRAMEBUFFER,C),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const K=i.get(E.depthTexture);K.__renderTarget=E,(!K.__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),U(E.depthTexture,0);const nt=K.__webglTexture,$=Xt(E);if(E.depthTexture.format===Is)st(E)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,nt,0,$):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,nt,0);else if(E.depthTexture.format===Us)st(E)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,nt,0,$):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,nt,0);else throw new Error("Unknown depthTexture format")}function Pt(C){const E=i.get(C),H=C.isWebGLCubeRenderTarget===!0;if(E.__boundDepthTexture!==C.depthTexture){const K=C.depthTexture;if(E.__depthDisposeCallback&&E.__depthDisposeCallback(),K){const nt=()=>{delete E.__boundDepthTexture,delete E.__depthDisposeCallback,K.removeEventListener("dispose",nt)};K.addEventListener("dispose",nt),E.__depthDisposeCallback=nt}E.__boundDepthTexture=K}if(C.depthTexture&&!E.__autoAllocateDepthBuffer){if(H)throw new Error("target.depthTexture not supported in Cube render targets");const K=C.texture.mipmaps;K&&K.length>0?mt(E.__webglFramebuffer[0],C):mt(E.__webglFramebuffer,C)}else if(H){E.__webglDepthbuffer=[];for(let K=0;K<6;K++)if(e.bindFramebuffer(n.FRAMEBUFFER,E.__webglFramebuffer[K]),E.__webglDepthbuffer[K]===void 0)E.__webglDepthbuffer[K]=n.createRenderbuffer(),bt(E.__webglDepthbuffer[K],C,!1);else{const nt=C.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,$=E.__webglDepthbuffer[K];n.bindRenderbuffer(n.RENDERBUFFER,$),n.framebufferRenderbuffer(n.FRAMEBUFFER,nt,n.RENDERBUFFER,$)}}else{const K=C.texture.mipmaps;if(K&&K.length>0?e.bindFramebuffer(n.FRAMEBUFFER,E.__webglFramebuffer[0]):e.bindFramebuffer(n.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer===void 0)E.__webglDepthbuffer=n.createRenderbuffer(),bt(E.__webglDepthbuffer,C,!1);else{const nt=C.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,$=E.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,$),n.framebufferRenderbuffer(n.FRAMEBUFFER,nt,n.RENDERBUFFER,$)}}e.bindFramebuffer(n.FRAMEBUFFER,null)}function Zt(C,E,H){const K=i.get(C);E!==void 0&&rt(K.__webglFramebuffer,C,C.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),H!==void 0&&Pt(C)}function L(C){const E=C.texture,H=i.get(C),K=i.get(E);C.addEventListener("dispose",T);const nt=C.textures,$=C.isWebGLCubeRenderTarget===!0,Mt=nt.length>1;if(Mt||(K.__webglTexture===void 0&&(K.__webglTexture=n.createTexture()),K.__version=E.version,a.memory.textures++),$){H.__webglFramebuffer=[];for(let ut=0;ut<6;ut++)if(E.mipmaps&&E.mipmaps.length>0){H.__webglFramebuffer[ut]=[];for(let Tt=0;Tt<E.mipmaps.length;Tt++)H.__webglFramebuffer[ut][Tt]=n.createFramebuffer()}else H.__webglFramebuffer[ut]=n.createFramebuffer()}else{if(E.mipmaps&&E.mipmaps.length>0){H.__webglFramebuffer=[];for(let ut=0;ut<E.mipmaps.length;ut++)H.__webglFramebuffer[ut]=n.createFramebuffer()}else H.__webglFramebuffer=n.createFramebuffer();if(Mt)for(let ut=0,Tt=nt.length;ut<Tt;ut++){const At=i.get(nt[ut]);At.__webglTexture===void 0&&(At.__webglTexture=n.createTexture(),a.memory.textures++)}if(C.samples>0&&st(C)===!1){H.__webglMultisampledFramebuffer=n.createFramebuffer(),H.__webglColorRenderbuffer=[],e.bindFramebuffer(n.FRAMEBUFFER,H.__webglMultisampledFramebuffer);for(let ut=0;ut<nt.length;ut++){const Tt=nt[ut];H.__webglColorRenderbuffer[ut]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,H.__webglColorRenderbuffer[ut]);const At=r.convert(Tt.format,Tt.colorSpace),ct=r.convert(Tt.type),xt=x(Tt.internalFormat,At,ct,Tt.colorSpace,C.isXRRenderTarget===!0),Bt=Xt(C);n.renderbufferStorageMultisample(n.RENDERBUFFER,Bt,xt,C.width,C.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ut,n.RENDERBUFFER,H.__webglColorRenderbuffer[ut])}n.bindRenderbuffer(n.RENDERBUFFER,null),C.depthBuffer&&(H.__webglDepthRenderbuffer=n.createRenderbuffer(),bt(H.__webglDepthRenderbuffer,C,!0)),e.bindFramebuffer(n.FRAMEBUFFER,null)}}if($){e.bindTexture(n.TEXTURE_CUBE_MAP,K.__webglTexture),vt(n.TEXTURE_CUBE_MAP,E);for(let ut=0;ut<6;ut++)if(E.mipmaps&&E.mipmaps.length>0)for(let Tt=0;Tt<E.mipmaps.length;Tt++)rt(H.__webglFramebuffer[ut][Tt],C,E,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ut,Tt);else rt(H.__webglFramebuffer[ut],C,E,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ut,0);h(E)&&u(n.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Mt){for(let ut=0,Tt=nt.length;ut<Tt;ut++){const At=nt[ut],ct=i.get(At);let xt=n.TEXTURE_2D;(C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(xt=C.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),e.bindTexture(xt,ct.__webglTexture),vt(xt,At),rt(H.__webglFramebuffer,C,At,n.COLOR_ATTACHMENT0+ut,xt,0),h(At)&&u(xt)}e.unbindTexture()}else{let ut=n.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(ut=C.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),e.bindTexture(ut,K.__webglTexture),vt(ut,E),E.mipmaps&&E.mipmaps.length>0)for(let Tt=0;Tt<E.mipmaps.length;Tt++)rt(H.__webglFramebuffer[Tt],C,E,n.COLOR_ATTACHMENT0,ut,Tt);else rt(H.__webglFramebuffer,C,E,n.COLOR_ATTACHMENT0,ut,0);h(E)&&u(ut),e.unbindTexture()}C.depthBuffer&&Pt(C)}function Jt(C){const E=C.textures;for(let H=0,K=E.length;H<K;H++){const nt=E[H];if(h(nt)){const $=b(C),Mt=i.get(nt).__webglTexture;e.bindTexture($,Mt),u($),e.unbindTexture()}}}const J=[],ht=[];function ot(C){if(C.samples>0){if(st(C)===!1){const E=C.textures,H=C.width,K=C.height;let nt=n.COLOR_BUFFER_BIT;const $=C.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Mt=i.get(C),ut=E.length>1;if(ut)for(let At=0;At<E.length;At++)e.bindFramebuffer(n.FRAMEBUFFER,Mt.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+At,n.RENDERBUFFER,null),e.bindFramebuffer(n.FRAMEBUFFER,Mt.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+At,n.TEXTURE_2D,null,0);e.bindFramebuffer(n.READ_FRAMEBUFFER,Mt.__webglMultisampledFramebuffer);const Tt=C.texture.mipmaps;Tt&&Tt.length>0?e.bindFramebuffer(n.DRAW_FRAMEBUFFER,Mt.__webglFramebuffer[0]):e.bindFramebuffer(n.DRAW_FRAMEBUFFER,Mt.__webglFramebuffer);for(let At=0;At<E.length;At++){if(C.resolveDepthBuffer&&(C.depthBuffer&&(nt|=n.DEPTH_BUFFER_BIT),C.stencilBuffer&&C.resolveStencilBuffer&&(nt|=n.STENCIL_BUFFER_BIT)),ut){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,Mt.__webglColorRenderbuffer[At]);const ct=i.get(E[At]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,ct,0)}n.blitFramebuffer(0,0,H,K,0,0,H,K,nt,n.NEAREST),c===!0&&(J.length=0,ht.length=0,J.push(n.COLOR_ATTACHMENT0+At),C.depthBuffer&&C.resolveDepthBuffer===!1&&(J.push($),ht.push($),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,ht)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,J))}if(e.bindFramebuffer(n.READ_FRAMEBUFFER,null),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),ut)for(let At=0;At<E.length;At++){e.bindFramebuffer(n.FRAMEBUFFER,Mt.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+At,n.RENDERBUFFER,Mt.__webglColorRenderbuffer[At]);const ct=i.get(E[At]).__webglTexture;e.bindFramebuffer(n.FRAMEBUFFER,Mt.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+At,n.TEXTURE_2D,ct,0)}e.bindFramebuffer(n.DRAW_FRAMEBUFFER,Mt.__webglMultisampledFramebuffer)}else if(C.depthBuffer&&C.resolveDepthBuffer===!1&&c){const E=C.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[E])}}}function Xt(C){return Math.min(s.maxSamples,C.samples)}function st(C){const E=i.get(C);return C.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function gt(C){const E=a.render.frame;d.get(C)!==E&&(d.set(C,E),C.update())}function Wt(C,E){const H=C.colorSpace,K=C.format,nt=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||H!==us&&H!==Jn&&(le.getTransfer(H)===fe?(K!==yn||nt!==Gn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",H)),E}function qt(C){return typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement?(l.width=C.naturalWidth||C.width,l.height=C.naturalHeight||C.height):typeof VideoFrame<"u"&&C instanceof VideoFrame?(l.width=C.displayWidth,l.height=C.displayHeight):(l.width=C.width,l.height=C.height),l}this.allocateTextureUnit=F,this.resetTextureUnits=D,this.setTexture2D=U,this.setTexture2DArray=O,this.setTexture3D=z,this.setTextureCube=N,this.rebindTextures=Zt,this.setupRenderTarget=L,this.updateRenderTargetMipmap=Jt,this.updateMultisampleRenderTarget=ot,this.setupDepthRenderbuffer=Pt,this.setupFrameBufferTexture=rt,this.useMultisampledRTT=st}function i0(n,t){function e(i,s=Jn){let r;const a=le.getTransfer(s);if(i===Gn)return n.UNSIGNED_BYTE;if(i===Ho)return n.UNSIGNED_SHORT_4_4_4_4;if(i===Go)return n.UNSIGNED_SHORT_5_5_5_1;if(i===kc)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===Hc)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===Bc)return n.BYTE;if(i===zc)return n.SHORT;if(i===Ds)return n.UNSIGNED_SHORT;if(i===ko)return n.INT;if(i===Ai)return n.UNSIGNED_INT;if(i===zn)return n.FLOAT;if(i===zs)return n.HALF_FLOAT;if(i===Gc)return n.ALPHA;if(i===Vc)return n.RGB;if(i===yn)return n.RGBA;if(i===Is)return n.DEPTH_COMPONENT;if(i===Us)return n.DEPTH_STENCIL;if(i===Wc)return n.RED;if(i===Vo)return n.RED_INTEGER;if(i===Xc)return n.RG;if(i===Wo)return n.RG_INTEGER;if(i===Xo)return n.RGBA_INTEGER;if(i===Rr||i===Cr||i===Pr||i===Dr)if(a===fe)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===Rr)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Cr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Pr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Dr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===Rr)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Cr)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Pr)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Dr)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Za||i===Ja||i===Qa||i===to)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===Za)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Ja)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Qa)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===to)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===eo||i===no||i===io)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(i===eo||i===no)return a===fe?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===io)return a===fe?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===so||i===ro||i===ao||i===oo||i===lo||i===co||i===ho||i===uo||i===fo||i===po||i===mo||i===go||i===_o||i===xo)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(i===so)return a===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===ro)return a===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===ao)return a===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===oo)return a===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===lo)return a===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===co)return a===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===ho)return a===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===uo)return a===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===fo)return a===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===po)return a===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===mo)return a===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===go)return a===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===_o)return a===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===xo)return a===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===vo||i===Mo||i===yo)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(i===vo)return a===fe?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Mo)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===yo)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===So||i===Eo||i===bo||i===To)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(i===So)return r.COMPRESSED_RED_RGTC1_EXT;if(i===Eo)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===bo)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===To)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Ls?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:e}}const s0=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,r0=`
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

}`;class a0{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){const i=new sh(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=i}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,i=new oi({vertexShader:s0,fragmentShader:r0,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new hn(new $r(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class o0 extends Pi{constructor(t,e){super();const i=this;let s=null,r=1,a=null,o="local-floor",c=1,l=null,d=null,f=null,p=null,m=null,_=null;const M=typeof XRWebGLBinding<"u",h=new a0,u={},b=e.getContextAttributes();let x=null,g=null;const A=[],S=[],T=new Gt;let R=null;const v=new ln;v.viewport=new Ee;const y=new ln;y.viewport=new Ee;const P=[v,y],D=new Td;let F=null,I=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(W){let X=A[W];return X===void 0&&(X=new Sa,A[W]=X),X.getTargetRaySpace()},this.getControllerGrip=function(W){let X=A[W];return X===void 0&&(X=new Sa,A[W]=X),X.getGripSpace()},this.getHand=function(W){let X=A[W];return X===void 0&&(X=new Sa,A[W]=X),X.getHandSpace()};function U(W){const X=S.indexOf(W.inputSource);if(X===-1)return;const rt=A[X];rt!==void 0&&(rt.update(W.inputSource,W.frame,l||a),rt.dispatchEvent({type:W.type,data:W.inputSource}))}function O(){s.removeEventListener("select",U),s.removeEventListener("selectstart",U),s.removeEventListener("selectend",U),s.removeEventListener("squeeze",U),s.removeEventListener("squeezestart",U),s.removeEventListener("squeezeend",U),s.removeEventListener("end",O),s.removeEventListener("inputsourceschange",z);for(let W=0;W<A.length;W++){const X=S[W];X!==null&&(S[W]=null,A[W].disconnect(X))}F=null,I=null,h.reset();for(const W in u)delete u[W];t.setRenderTarget(x),m=null,p=null,f=null,s=null,g=null,tt.stop(),i.isPresenting=!1,t.setPixelRatio(R),t.setSize(T.width,T.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(W){r=W,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(W){o=W,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function(W){l=W},this.getBaseLayer=function(){return p!==null?p:m},this.getBinding=function(){return f===null&&M&&(f=new XRWebGLBinding(s,e)),f},this.getFrame=function(){return _},this.getSession=function(){return s},this.setSession=async function(W){if(s=W,s!==null){if(x=t.getRenderTarget(),s.addEventListener("select",U),s.addEventListener("selectstart",U),s.addEventListener("selectend",U),s.addEventListener("squeeze",U),s.addEventListener("squeezestart",U),s.addEventListener("squeezeend",U),s.addEventListener("end",O),s.addEventListener("inputsourceschange",z),b.xrCompatible!==!0&&await e.makeXRCompatible(),R=t.getPixelRatio(),t.getSize(T),M&&"createProjectionLayer"in XRWebGLBinding.prototype){let rt=null,bt=null,mt=null;b.depth&&(mt=b.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,rt=b.stencil?Us:Is,bt=b.stencil?Ls:Ai);const Pt={colorFormat:e.RGBA8,depthFormat:mt,scaleFactor:r};f=this.getBinding(),p=f.createProjectionLayer(Pt),s.updateRenderState({layers:[p]}),t.setPixelRatio(1),t.setSize(p.textureWidth,p.textureHeight,!1),g=new wi(p.textureWidth,p.textureHeight,{format:yn,type:Gn,depthTexture:new ih(p.textureWidth,p.textureHeight,bt,void 0,void 0,void 0,void 0,void 0,void 0,rt),stencilBuffer:b.stencil,colorSpace:t.outputColorSpace,samples:b.antialias?4:0,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1})}else{const rt={antialias:b.antialias,alpha:!0,depth:b.depth,stencil:b.stencil,framebufferScaleFactor:r};m=new XRWebGLLayer(s,e,rt),s.updateRenderState({baseLayer:m}),t.setPixelRatio(1),t.setSize(m.framebufferWidth,m.framebufferHeight,!1),g=new wi(m.framebufferWidth,m.framebufferHeight,{format:yn,type:Gn,colorSpace:t.outputColorSpace,stencilBuffer:b.stencil,resolveDepthBuffer:m.ignoreDepthValues===!1,resolveStencilBuffer:m.ignoreDepthValues===!1})}g.isXRRenderTarget=!0,this.setFoveation(c),l=null,a=await s.requestReferenceSpace(o),tt.setContext(s),tt.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return h.getDepthTexture()};function z(W){for(let X=0;X<W.removed.length;X++){const rt=W.removed[X],bt=S.indexOf(rt);bt>=0&&(S[bt]=null,A[bt].disconnect(rt))}for(let X=0;X<W.added.length;X++){const rt=W.added[X];let bt=S.indexOf(rt);if(bt===-1){for(let Pt=0;Pt<A.length;Pt++)if(Pt>=S.length){S.push(rt),bt=Pt;break}else if(S[Pt]===null){S[Pt]=rt,bt=Pt;break}if(bt===-1)break}const mt=A[bt];mt&&mt.connect(rt)}}const N=new B,Z=new B;function Y(W,X,rt){N.setFromMatrixPosition(X.matrixWorld),Z.setFromMatrixPosition(rt.matrixWorld);const bt=N.distanceTo(Z),mt=X.projectionMatrix.elements,Pt=rt.projectionMatrix.elements,Zt=mt[14]/(mt[10]-1),L=mt[14]/(mt[10]+1),Jt=(mt[9]+1)/mt[5],J=(mt[9]-1)/mt[5],ht=(mt[8]-1)/mt[0],ot=(Pt[8]+1)/Pt[0],Xt=Zt*ht,st=Zt*ot,gt=bt/(-ht+ot),Wt=gt*-ht;if(X.matrixWorld.decompose(W.position,W.quaternion,W.scale),W.translateX(Wt),W.translateZ(gt),W.matrixWorld.compose(W.position,W.quaternion,W.scale),W.matrixWorldInverse.copy(W.matrixWorld).invert(),mt[10]===-1)W.projectionMatrix.copy(X.projectionMatrix),W.projectionMatrixInverse.copy(X.projectionMatrixInverse);else{const qt=Zt+gt,C=L+gt,E=Xt-Wt,H=st+(bt-Wt),K=Jt*L/C*qt,nt=J*L/C*qt;W.projectionMatrix.makePerspective(E,H,K,nt,qt,C),W.projectionMatrixInverse.copy(W.projectionMatrix).invert()}}function it(W,X){X===null?W.matrixWorld.copy(W.matrix):W.matrixWorld.multiplyMatrices(X.matrixWorld,W.matrix),W.matrixWorldInverse.copy(W.matrixWorld).invert()}this.updateCamera=function(W){if(s===null)return;let X=W.near,rt=W.far;h.texture!==null&&(h.depthNear>0&&(X=h.depthNear),h.depthFar>0&&(rt=h.depthFar)),D.near=y.near=v.near=X,D.far=y.far=v.far=rt,(F!==D.near||I!==D.far)&&(s.updateRenderState({depthNear:D.near,depthFar:D.far}),F=D.near,I=D.far),D.layers.mask=W.layers.mask|6,v.layers.mask=D.layers.mask&3,y.layers.mask=D.layers.mask&5;const bt=W.parent,mt=D.cameras;it(D,bt);for(let Pt=0;Pt<mt.length;Pt++)it(mt[Pt],bt);mt.length===2?Y(D,v,y):D.projectionMatrix.copy(v.projectionMatrix),vt(W,D,bt)};function vt(W,X,rt){rt===null?W.matrix.copy(X.matrixWorld):(W.matrix.copy(rt.matrixWorld),W.matrix.invert(),W.matrix.multiply(X.matrixWorld)),W.matrix.decompose(W.position,W.quaternion,W.scale),W.updateMatrixWorld(!0),W.projectionMatrix.copy(X.projectionMatrix),W.projectionMatrixInverse.copy(X.projectionMatrixInverse),W.isPerspectiveCamera&&(W.fov=Fs*2*Math.atan(1/W.projectionMatrix.elements[5]),W.zoom=1)}this.getCamera=function(){return D},this.getFoveation=function(){if(!(p===null&&m===null))return c},this.setFoveation=function(W){c=W,p!==null&&(p.fixedFoveation=W),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=W)},this.hasDepthSensing=function(){return h.texture!==null},this.getDepthSensingMesh=function(){return h.getMesh(D)},this.getCameraTexture=function(W){return u[W]};let Rt=null;function et(W,X){if(d=X.getViewerPose(l||a),_=X,d!==null){const rt=d.views;m!==null&&(t.setRenderTargetFramebuffer(g,m.framebuffer),t.setRenderTarget(g));let bt=!1;rt.length!==D.cameras.length&&(D.cameras.length=0,bt=!0);for(let L=0;L<rt.length;L++){const Jt=rt[L];let J=null;if(m!==null)J=m.getViewport(Jt);else{const ot=f.getViewSubImage(p,Jt);J=ot.viewport,L===0&&(t.setRenderTargetTextures(g,ot.colorTexture,ot.depthStencilTexture),t.setRenderTarget(g))}let ht=P[L];ht===void 0&&(ht=new ln,ht.layers.enable(L),ht.viewport=new Ee,P[L]=ht),ht.matrix.fromArray(Jt.transform.matrix),ht.matrix.decompose(ht.position,ht.quaternion,ht.scale),ht.projectionMatrix.fromArray(Jt.projectionMatrix),ht.projectionMatrixInverse.copy(ht.projectionMatrix).invert(),ht.viewport.set(J.x,J.y,J.width,J.height),L===0&&(D.matrix.copy(ht.matrix),D.matrix.decompose(D.position,D.quaternion,D.scale)),bt===!0&&D.cameras.push(ht)}const mt=s.enabledFeatures;if(mt&&mt.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&M){f=i.getBinding();const L=f.getDepthInformation(rt[0]);L&&L.isValid&&L.texture&&h.init(L,s.renderState)}if(mt&&mt.includes("camera-access")&&M){t.state.unbindTexture(),f=i.getBinding();for(let L=0;L<rt.length;L++){const Jt=rt[L].camera;if(Jt){let J=u[Jt];J||(J=new sh,u[Jt]=J);const ht=f.getCameraImage(Jt);J.sourceTexture=ht}}}}for(let rt=0;rt<A.length;rt++){const bt=S[rt],mt=A[rt];bt!==null&&mt!==void 0&&mt.update(bt,X,l||a)}Rt&&Rt(W,X),X.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:X}),_=null}const tt=new rh;tt.setAnimationLoop(et),this.setAnimationLoop=function(W){Rt=W},this.dispose=function(){}}}const mi=new Vn,l0=new Me;function c0(n,t){function e(h,u){h.matrixAutoUpdate===!0&&h.updateMatrix(),u.value.copy(h.matrix)}function i(h,u){u.color.getRGB(h.fogColor.value,Jc(n)),u.isFog?(h.fogNear.value=u.near,h.fogFar.value=u.far):u.isFogExp2&&(h.fogDensity.value=u.density)}function s(h,u,b,x,g){u.isMeshBasicMaterial||u.isMeshLambertMaterial?r(h,u):u.isMeshToonMaterial?(r(h,u),f(h,u)):u.isMeshPhongMaterial?(r(h,u),d(h,u)):u.isMeshStandardMaterial?(r(h,u),p(h,u),u.isMeshPhysicalMaterial&&m(h,u,g)):u.isMeshMatcapMaterial?(r(h,u),_(h,u)):u.isMeshDepthMaterial?r(h,u):u.isMeshDistanceMaterial?(r(h,u),M(h,u)):u.isMeshNormalMaterial?r(h,u):u.isLineBasicMaterial?(a(h,u),u.isLineDashedMaterial&&o(h,u)):u.isPointsMaterial?c(h,u,b,x):u.isSpriteMaterial?l(h,u):u.isShadowMaterial?(h.color.value.copy(u.color),h.opacity.value=u.opacity):u.isShaderMaterial&&(u.uniformsNeedUpdate=!1)}function r(h,u){h.opacity.value=u.opacity,u.color&&h.diffuse.value.copy(u.color),u.emissive&&h.emissive.value.copy(u.emissive).multiplyScalar(u.emissiveIntensity),u.map&&(h.map.value=u.map,e(u.map,h.mapTransform)),u.alphaMap&&(h.alphaMap.value=u.alphaMap,e(u.alphaMap,h.alphaMapTransform)),u.bumpMap&&(h.bumpMap.value=u.bumpMap,e(u.bumpMap,h.bumpMapTransform),h.bumpScale.value=u.bumpScale,u.side===je&&(h.bumpScale.value*=-1)),u.normalMap&&(h.normalMap.value=u.normalMap,e(u.normalMap,h.normalMapTransform),h.normalScale.value.copy(u.normalScale),u.side===je&&h.normalScale.value.negate()),u.displacementMap&&(h.displacementMap.value=u.displacementMap,e(u.displacementMap,h.displacementMapTransform),h.displacementScale.value=u.displacementScale,h.displacementBias.value=u.displacementBias),u.emissiveMap&&(h.emissiveMap.value=u.emissiveMap,e(u.emissiveMap,h.emissiveMapTransform)),u.specularMap&&(h.specularMap.value=u.specularMap,e(u.specularMap,h.specularMapTransform)),u.alphaTest>0&&(h.alphaTest.value=u.alphaTest);const b=t.get(u),x=b.envMap,g=b.envMapRotation;x&&(h.envMap.value=x,mi.copy(g),mi.x*=-1,mi.y*=-1,mi.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(mi.y*=-1,mi.z*=-1),h.envMapRotation.value.setFromMatrix4(l0.makeRotationFromEuler(mi)),h.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,h.reflectivity.value=u.reflectivity,h.ior.value=u.ior,h.refractionRatio.value=u.refractionRatio),u.lightMap&&(h.lightMap.value=u.lightMap,h.lightMapIntensity.value=u.lightMapIntensity,e(u.lightMap,h.lightMapTransform)),u.aoMap&&(h.aoMap.value=u.aoMap,h.aoMapIntensity.value=u.aoMapIntensity,e(u.aoMap,h.aoMapTransform))}function a(h,u){h.diffuse.value.copy(u.color),h.opacity.value=u.opacity,u.map&&(h.map.value=u.map,e(u.map,h.mapTransform))}function o(h,u){h.dashSize.value=u.dashSize,h.totalSize.value=u.dashSize+u.gapSize,h.scale.value=u.scale}function c(h,u,b,x){h.diffuse.value.copy(u.color),h.opacity.value=u.opacity,h.size.value=u.size*b,h.scale.value=x*.5,u.map&&(h.map.value=u.map,e(u.map,h.uvTransform)),u.alphaMap&&(h.alphaMap.value=u.alphaMap,e(u.alphaMap,h.alphaMapTransform)),u.alphaTest>0&&(h.alphaTest.value=u.alphaTest)}function l(h,u){h.diffuse.value.copy(u.color),h.opacity.value=u.opacity,h.rotation.value=u.rotation,u.map&&(h.map.value=u.map,e(u.map,h.mapTransform)),u.alphaMap&&(h.alphaMap.value=u.alphaMap,e(u.alphaMap,h.alphaMapTransform)),u.alphaTest>0&&(h.alphaTest.value=u.alphaTest)}function d(h,u){h.specular.value.copy(u.specular),h.shininess.value=Math.max(u.shininess,1e-4)}function f(h,u){u.gradientMap&&(h.gradientMap.value=u.gradientMap)}function p(h,u){h.metalness.value=u.metalness,u.metalnessMap&&(h.metalnessMap.value=u.metalnessMap,e(u.metalnessMap,h.metalnessMapTransform)),h.roughness.value=u.roughness,u.roughnessMap&&(h.roughnessMap.value=u.roughnessMap,e(u.roughnessMap,h.roughnessMapTransform)),u.envMap&&(h.envMapIntensity.value=u.envMapIntensity)}function m(h,u,b){h.ior.value=u.ior,u.sheen>0&&(h.sheenColor.value.copy(u.sheenColor).multiplyScalar(u.sheen),h.sheenRoughness.value=u.sheenRoughness,u.sheenColorMap&&(h.sheenColorMap.value=u.sheenColorMap,e(u.sheenColorMap,h.sheenColorMapTransform)),u.sheenRoughnessMap&&(h.sheenRoughnessMap.value=u.sheenRoughnessMap,e(u.sheenRoughnessMap,h.sheenRoughnessMapTransform))),u.clearcoat>0&&(h.clearcoat.value=u.clearcoat,h.clearcoatRoughness.value=u.clearcoatRoughness,u.clearcoatMap&&(h.clearcoatMap.value=u.clearcoatMap,e(u.clearcoatMap,h.clearcoatMapTransform)),u.clearcoatRoughnessMap&&(h.clearcoatRoughnessMap.value=u.clearcoatRoughnessMap,e(u.clearcoatRoughnessMap,h.clearcoatRoughnessMapTransform)),u.clearcoatNormalMap&&(h.clearcoatNormalMap.value=u.clearcoatNormalMap,e(u.clearcoatNormalMap,h.clearcoatNormalMapTransform),h.clearcoatNormalScale.value.copy(u.clearcoatNormalScale),u.side===je&&h.clearcoatNormalScale.value.negate())),u.dispersion>0&&(h.dispersion.value=u.dispersion),u.iridescence>0&&(h.iridescence.value=u.iridescence,h.iridescenceIOR.value=u.iridescenceIOR,h.iridescenceThicknessMinimum.value=u.iridescenceThicknessRange[0],h.iridescenceThicknessMaximum.value=u.iridescenceThicknessRange[1],u.iridescenceMap&&(h.iridescenceMap.value=u.iridescenceMap,e(u.iridescenceMap,h.iridescenceMapTransform)),u.iridescenceThicknessMap&&(h.iridescenceThicknessMap.value=u.iridescenceThicknessMap,e(u.iridescenceThicknessMap,h.iridescenceThicknessMapTransform))),u.transmission>0&&(h.transmission.value=u.transmission,h.transmissionSamplerMap.value=b.texture,h.transmissionSamplerSize.value.set(b.width,b.height),u.transmissionMap&&(h.transmissionMap.value=u.transmissionMap,e(u.transmissionMap,h.transmissionMapTransform)),h.thickness.value=u.thickness,u.thicknessMap&&(h.thicknessMap.value=u.thicknessMap,e(u.thicknessMap,h.thicknessMapTransform)),h.attenuationDistance.value=u.attenuationDistance,h.attenuationColor.value.copy(u.attenuationColor)),u.anisotropy>0&&(h.anisotropyVector.value.set(u.anisotropy*Math.cos(u.anisotropyRotation),u.anisotropy*Math.sin(u.anisotropyRotation)),u.anisotropyMap&&(h.anisotropyMap.value=u.anisotropyMap,e(u.anisotropyMap,h.anisotropyMapTransform))),h.specularIntensity.value=u.specularIntensity,h.specularColor.value.copy(u.specularColor),u.specularColorMap&&(h.specularColorMap.value=u.specularColorMap,e(u.specularColorMap,h.specularColorMapTransform)),u.specularIntensityMap&&(h.specularIntensityMap.value=u.specularIntensityMap,e(u.specularIntensityMap,h.specularIntensityMapTransform))}function _(h,u){u.matcap&&(h.matcap.value=u.matcap)}function M(h,u){const b=t.get(u).light;h.referencePosition.value.setFromMatrixPosition(b.matrixWorld),h.nearDistance.value=b.shadow.camera.near,h.farDistance.value=b.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function h0(n,t,e,i){let s={},r={},a=[];const o=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function c(b,x){const g=x.program;i.uniformBlockBinding(b,g)}function l(b,x){let g=s[b.id];g===void 0&&(_(b),g=d(b),s[b.id]=g,b.addEventListener("dispose",h));const A=x.program;i.updateUBOMapping(b,A);const S=t.render.frame;r[b.id]!==S&&(p(b),r[b.id]=S)}function d(b){const x=f();b.__bindingPointIndex=x;const g=n.createBuffer(),A=b.__size,S=b.usage;return n.bindBuffer(n.UNIFORM_BUFFER,g),n.bufferData(n.UNIFORM_BUFFER,A,S),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,x,g),g}function f(){for(let b=0;b<o;b++)if(a.indexOf(b)===-1)return a.push(b),b;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function p(b){const x=s[b.id],g=b.uniforms,A=b.__cache;n.bindBuffer(n.UNIFORM_BUFFER,x);for(let S=0,T=g.length;S<T;S++){const R=Array.isArray(g[S])?g[S]:[g[S]];for(let v=0,y=R.length;v<y;v++){const P=R[v];if(m(P,S,v,A)===!0){const D=P.__offset,F=Array.isArray(P.value)?P.value:[P.value];let I=0;for(let U=0;U<F.length;U++){const O=F[U],z=M(O);typeof O=="number"||typeof O=="boolean"?(P.__data[0]=O,n.bufferSubData(n.UNIFORM_BUFFER,D+I,P.__data)):O.isMatrix3?(P.__data[0]=O.elements[0],P.__data[1]=O.elements[1],P.__data[2]=O.elements[2],P.__data[3]=0,P.__data[4]=O.elements[3],P.__data[5]=O.elements[4],P.__data[6]=O.elements[5],P.__data[7]=0,P.__data[8]=O.elements[6],P.__data[9]=O.elements[7],P.__data[10]=O.elements[8],P.__data[11]=0):(O.toArray(P.__data,I),I+=z.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,D,P.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function m(b,x,g,A){const S=b.value,T=x+"_"+g;if(A[T]===void 0)return typeof S=="number"||typeof S=="boolean"?A[T]=S:A[T]=S.clone(),!0;{const R=A[T];if(typeof S=="number"||typeof S=="boolean"){if(R!==S)return A[T]=S,!0}else if(R.equals(S)===!1)return R.copy(S),!0}return!1}function _(b){const x=b.uniforms;let g=0;const A=16;for(let T=0,R=x.length;T<R;T++){const v=Array.isArray(x[T])?x[T]:[x[T]];for(let y=0,P=v.length;y<P;y++){const D=v[y],F=Array.isArray(D.value)?D.value:[D.value];for(let I=0,U=F.length;I<U;I++){const O=F[I],z=M(O),N=g%A,Z=N%z.boundary,Y=N+Z;g+=Z,Y!==0&&A-Y<z.storage&&(g+=A-Y),D.__data=new Float32Array(z.storage/Float32Array.BYTES_PER_ELEMENT),D.__offset=g,g+=z.storage}}}const S=g%A;return S>0&&(g+=A-S),b.__size=g,b.__cache={},this}function M(b){const x={boundary:0,storage:0};return typeof b=="number"||typeof b=="boolean"?(x.boundary=4,x.storage=4):b.isVector2?(x.boundary=8,x.storage=8):b.isVector3||b.isColor?(x.boundary=16,x.storage=12):b.isVector4?(x.boundary=16,x.storage=16):b.isMatrix3?(x.boundary=48,x.storage=48):b.isMatrix4?(x.boundary=64,x.storage=64):b.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",b),x}function h(b){const x=b.target;x.removeEventListener("dispose",h);const g=a.indexOf(x.__bindingPointIndex);a.splice(g,1),n.deleteBuffer(s[x.id]),delete s[x.id],delete r[x.id]}function u(){for(const b in s)n.deleteBuffer(s[b]);a=[],s={},r={}}return{bind:c,update:l,dispose:u}}class u0{constructor(t={}){const{canvas:e=Vu(),context:i=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:d="default",failIfMajorPerformanceCaveat:f=!1,reversedDepthBuffer:p=!1}=t;this.isWebGLRenderer=!0;let m;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");m=i.getContextAttributes().alpha}else m=a;const _=new Uint32Array(4),M=new Int32Array(4);let h=null,u=null;const b=[],x=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=ii,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const g=this;let A=!1;this._outputColorSpace=Fe;let S=0,T=0,R=null,v=-1,y=null;const P=new Ee,D=new Ee;let F=null;const I=new kt(0);let U=0,O=e.width,z=e.height,N=1,Z=null,Y=null;const it=new Ee(0,0,O,z),vt=new Ee(0,0,O,z);let Rt=!1;const et=new nh;let tt=!1,W=!1;const X=new Me,rt=new B,bt=new Ee,mt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Pt=!1;function Zt(){return R===null?N:1}let L=i;function Jt(w,G){return e.getContext(w,G)}try{const w={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:d,failIfMajorPerformanceCaveat:f};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${zo}`),e.addEventListener("webglcontextlost",_t,!1),e.addEventListener("webglcontextrestored",wt,!1),e.addEventListener("webglcontextcreationerror",ft,!1),L===null){const G="webgl2";if(L=Jt(G,w),L===null)throw Jt(G)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(w){throw console.error("THREE.WebGLRenderer: "+w.message),w}let J,ht,ot,Xt,st,gt,Wt,qt,C,E,H,K,nt,$,Mt,ut,Tt,At,ct,xt,Bt,Dt,yt,Yt;function k(){J=new ym(L),J.init(),Dt=new i0(L,J),ht=new pm(L,J,t,Dt),ot=new e0(L,J),ht.reversedDepthBuffer&&p&&ot.buffers.depth.setReversed(!0),Xt=new bm(L),st=new Gg,gt=new n0(L,J,ot,st,ht,Dt,Xt),Wt=new gm(g),qt=new Mm(g),C=new Cd(L),yt=new dm(L,C),E=new Sm(L,C,Xt,yt),H=new Am(L,E,C,Xt),ct=new Tm(L,ht,gt),ut=new mm(st),K=new Hg(g,Wt,qt,J,ht,yt,ut),nt=new c0(g,st),$=new Wg,Mt=new Kg(J),At=new um(g,Wt,qt,ot,H,m,c),Tt=new Qg(g,H,ht),Yt=new h0(L,Xt,ht,ot),xt=new fm(L,J,Xt),Bt=new Em(L,J,Xt),Xt.programs=K.programs,g.capabilities=ht,g.extensions=J,g.properties=st,g.renderLists=$,g.shadowMap=Tt,g.state=ot,g.info=Xt}k();const dt=new o0(g,L);this.xr=dt,this.getContext=function(){return L},this.getContextAttributes=function(){return L.getContextAttributes()},this.forceContextLoss=function(){const w=J.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){const w=J.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return N},this.setPixelRatio=function(w){w!==void 0&&(N=w,this.setSize(O,z,!1))},this.getSize=function(w){return w.set(O,z)},this.setSize=function(w,G,q=!0){if(dt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}O=w,z=G,e.width=Math.floor(w*N),e.height=Math.floor(G*N),q===!0&&(e.style.width=w+"px",e.style.height=G+"px"),this.setViewport(0,0,w,G)},this.getDrawingBufferSize=function(w){return w.set(O*N,z*N).floor()},this.setDrawingBufferSize=function(w,G,q){O=w,z=G,N=q,e.width=Math.floor(w*q),e.height=Math.floor(G*q),this.setViewport(0,0,w,G)},this.getCurrentViewport=function(w){return w.copy(P)},this.getViewport=function(w){return w.copy(it)},this.setViewport=function(w,G,q,j){w.isVector4?it.set(w.x,w.y,w.z,w.w):it.set(w,G,q,j),ot.viewport(P.copy(it).multiplyScalar(N).round())},this.getScissor=function(w){return w.copy(vt)},this.setScissor=function(w,G,q,j){w.isVector4?vt.set(w.x,w.y,w.z,w.w):vt.set(w,G,q,j),ot.scissor(D.copy(vt).multiplyScalar(N).round())},this.getScissorTest=function(){return Rt},this.setScissorTest=function(w){ot.setScissorTest(Rt=w)},this.setOpaqueSort=function(w){Z=w},this.setTransparentSort=function(w){Y=w},this.getClearColor=function(w){return w.copy(At.getClearColor())},this.setClearColor=function(){At.setClearColor(...arguments)},this.getClearAlpha=function(){return At.getClearAlpha()},this.setClearAlpha=function(){At.setClearAlpha(...arguments)},this.clear=function(w=!0,G=!0,q=!0){let j=0;if(w){let V=!1;if(R!==null){const pt=R.texture.format;V=pt===Xo||pt===Wo||pt===Vo}if(V){const pt=R.texture.type,Et=pt===Gn||pt===Ai||pt===Ds||pt===Ls||pt===Ho||pt===Go,Lt=At.getClearColor(),Ct=At.getClearAlpha(),Vt=Lt.r,$t=Lt.g,Nt=Lt.b;Et?(_[0]=Vt,_[1]=$t,_[2]=Nt,_[3]=Ct,L.clearBufferuiv(L.COLOR,0,_)):(M[0]=Vt,M[1]=$t,M[2]=Nt,M[3]=Ct,L.clearBufferiv(L.COLOR,0,M))}else j|=L.COLOR_BUFFER_BIT}G&&(j|=L.DEPTH_BUFFER_BIT),q&&(j|=L.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),L.clear(j)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",_t,!1),e.removeEventListener("webglcontextrestored",wt,!1),e.removeEventListener("webglcontextcreationerror",ft,!1),At.dispose(),$.dispose(),Mt.dispose(),st.dispose(),Wt.dispose(),qt.dispose(),H.dispose(),yt.dispose(),Yt.dispose(),K.dispose(),dt.dispose(),dt.removeEventListener("sessionstart",bn),dt.removeEventListener("sessionend",sl),li.stop()};function _t(w){w.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),A=!0}function wt(){console.log("THREE.WebGLRenderer: Context Restored."),A=!1;const w=Xt.autoReset,G=Tt.enabled,q=Tt.autoUpdate,j=Tt.needsUpdate,V=Tt.type;k(),Xt.autoReset=w,Tt.enabled=G,Tt.autoUpdate=q,Tt.needsUpdate=j,Tt.type=V}function ft(w){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function at(w){const G=w.target;G.removeEventListener("dispose",at),It(G)}function It(w){jt(w),st.remove(w)}function jt(w){const G=st.get(w).programs;G!==void 0&&(G.forEach(function(q){K.releaseProgram(q)}),w.isShaderMaterial&&K.releaseShaderCache(w))}this.renderBufferDirect=function(w,G,q,j,V,pt){G===null&&(G=mt);const Et=V.isMesh&&V.matrixWorld.determinant()<0,Lt=Uh(w,G,q,j,V);ot.setMaterial(j,Et);let Ct=q.index,Vt=1;if(j.wireframe===!0){if(Ct=E.getWireframeAttribute(q),Ct===void 0)return;Vt=2}const $t=q.drawRange,Nt=q.attributes.position;let ne=$t.start*Vt,de=($t.start+$t.count)*Vt;pt!==null&&(ne=Math.max(ne,pt.start*Vt),de=Math.min(de,(pt.start+pt.count)*Vt)),Ct!==null?(ne=Math.max(ne,0),de=Math.min(de,Ct.count)):Nt!=null&&(ne=Math.max(ne,0),de=Math.min(de,Nt.count));const ye=de-ne;if(ye<0||ye===1/0)return;yt.setup(V,j,Lt,q,Ct);let _e,me=xt;if(Ct!==null&&(_e=C.get(Ct),me=Bt,me.setIndex(_e)),V.isMesh)j.wireframe===!0?(ot.setLineWidth(j.wireframeLinewidth*Zt()),me.setMode(L.LINES)):me.setMode(L.TRIANGLES);else if(V.isLine){let Ht=j.linewidth;Ht===void 0&&(Ht=1),ot.setLineWidth(Ht*Zt()),V.isLineSegments?me.setMode(L.LINES):V.isLineLoop?me.setMode(L.LINE_LOOP):me.setMode(L.LINE_STRIP)}else V.isPoints?me.setMode(L.POINTS):V.isSprite&&me.setMode(L.TRIANGLES);if(V.isBatchedMesh)if(V._multiDrawInstances!==null)Ns("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),me.renderMultiDrawInstances(V._multiDrawStarts,V._multiDrawCounts,V._multiDrawCount,V._multiDrawInstances);else if(J.get("WEBGL_multi_draw"))me.renderMultiDraw(V._multiDrawStarts,V._multiDrawCounts,V._multiDrawCount);else{const Ht=V._multiDrawStarts,xe=V._multiDrawCounts,ae=V._multiDrawCount,Ke=Ct?C.get(Ct).bytesPerElement:1,Ii=st.get(j).currentProgram.getUniforms();for(let Ze=0;Ze<ae;Ze++)Ii.setValue(L,"_gl_DrawID",Ze),me.render(Ht[Ze]/Ke,xe[Ze])}else if(V.isInstancedMesh)me.renderInstances(ne,ye,V.count);else if(q.isInstancedBufferGeometry){const Ht=q._maxInstanceCount!==void 0?q._maxInstanceCount:1/0,xe=Math.min(q.instanceCount,Ht);me.renderInstances(ne,ye,xe)}else me.render(ne,ye)};function ge(w,G,q){w.transparent===!0&&w.side===Bn&&w.forceSinglePass===!1?(w.side=je,w.needsUpdate=!0,qs(w,G,q),w.side=ri,w.needsUpdate=!0,qs(w,G,q),w.side=Bn):qs(w,G,q)}this.compile=function(w,G,q=null){q===null&&(q=w),u=Mt.get(q),u.init(G),x.push(u),q.traverseVisible(function(V){V.isLight&&V.layers.test(G.layers)&&(u.pushLight(V),V.castShadow&&u.pushShadow(V))}),w!==q&&w.traverseVisible(function(V){V.isLight&&V.layers.test(G.layers)&&(u.pushLight(V),V.castShadow&&u.pushShadow(V))}),u.setupLights();const j=new Set;return w.traverse(function(V){if(!(V.isMesh||V.isPoints||V.isLine||V.isSprite))return;const pt=V.material;if(pt)if(Array.isArray(pt))for(let Et=0;Et<pt.length;Et++){const Lt=pt[Et];ge(Lt,q,V),j.add(Lt)}else ge(pt,q,V),j.add(pt)}),u=x.pop(),j},this.compileAsync=function(w,G,q=null){const j=this.compile(w,G,q);return new Promise(V=>{function pt(){if(j.forEach(function(Et){st.get(Et).currentProgram.isReady()&&j.delete(Et)}),j.size===0){V(w);return}setTimeout(pt,10)}J.get("KHR_parallel_shader_compile")!==null?pt():setTimeout(pt,10)})};let he=null;function Dn(w){he&&he(w)}function bn(){li.stop()}function sl(){li.start()}const li=new rh;li.setAnimationLoop(Dn),typeof self<"u"&&li.setContext(self),this.setAnimationLoop=function(w){he=w,dt.setAnimationLoop(w),w===null?li.stop():li.start()},dt.addEventListener("sessionstart",bn),dt.addEventListener("sessionend",sl),this.render=function(w,G){if(G!==void 0&&G.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(A===!0)return;if(w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),G.parent===null&&G.matrixWorldAutoUpdate===!0&&G.updateMatrixWorld(),dt.enabled===!0&&dt.isPresenting===!0&&(dt.cameraAutoUpdate===!0&&dt.updateCamera(G),G=dt.getCamera()),w.isScene===!0&&w.onBeforeRender(g,w,G,R),u=Mt.get(w,x.length),u.init(G),x.push(u),X.multiplyMatrices(G.projectionMatrix,G.matrixWorldInverse),et.setFromProjectionMatrix(X,Rn,G.reversedDepth),W=this.localClippingEnabled,tt=ut.init(this.clippingPlanes,W),h=$.get(w,b.length),h.init(),b.push(h),dt.enabled===!0&&dt.isPresenting===!0){const pt=g.xr.getDepthSensingMesh();pt!==null&&Qr(pt,G,-1/0,g.sortObjects)}Qr(w,G,0,g.sortObjects),h.finish(),g.sortObjects===!0&&h.sort(Z,Y),Pt=dt.enabled===!1||dt.isPresenting===!1||dt.hasDepthSensing()===!1,Pt&&At.addToRenderList(h,w),this.info.render.frame++,tt===!0&&ut.beginShadows();const q=u.state.shadowsArray;Tt.render(q,w,G),tt===!0&&ut.endShadows(),this.info.autoReset===!0&&this.info.reset();const j=h.opaque,V=h.transmissive;if(u.setupLights(),G.isArrayCamera){const pt=G.cameras;if(V.length>0)for(let Et=0,Lt=pt.length;Et<Lt;Et++){const Ct=pt[Et];al(j,V,w,Ct)}Pt&&At.render(w);for(let Et=0,Lt=pt.length;Et<Lt;Et++){const Ct=pt[Et];rl(h,w,Ct,Ct.viewport)}}else V.length>0&&al(j,V,w,G),Pt&&At.render(w),rl(h,w,G);R!==null&&T===0&&(gt.updateMultisampleRenderTarget(R),gt.updateRenderTargetMipmap(R)),w.isScene===!0&&w.onAfterRender(g,w,G),yt.resetDefaultState(),v=-1,y=null,x.pop(),x.length>0?(u=x[x.length-1],tt===!0&&ut.setGlobalState(g.clippingPlanes,u.state.camera)):u=null,b.pop(),b.length>0?h=b[b.length-1]:h=null};function Qr(w,G,q,j){if(w.visible===!1)return;if(w.layers.test(G.layers)){if(w.isGroup)q=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(G);else if(w.isLight)u.pushLight(w),w.castShadow&&u.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||et.intersectsSprite(w)){j&&bt.setFromMatrixPosition(w.matrixWorld).applyMatrix4(X);const Et=H.update(w),Lt=w.material;Lt.visible&&h.push(w,Et,Lt,q,bt.z,null)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||et.intersectsObject(w))){const Et=H.update(w),Lt=w.material;if(j&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),bt.copy(w.boundingSphere.center)):(Et.boundingSphere===null&&Et.computeBoundingSphere(),bt.copy(Et.boundingSphere.center)),bt.applyMatrix4(w.matrixWorld).applyMatrix4(X)),Array.isArray(Lt)){const Ct=Et.groups;for(let Vt=0,$t=Ct.length;Vt<$t;Vt++){const Nt=Ct[Vt],ne=Lt[Nt.materialIndex];ne&&ne.visible&&h.push(w,Et,ne,q,bt.z,Nt)}}else Lt.visible&&h.push(w,Et,Lt,q,bt.z,null)}}const pt=w.children;for(let Et=0,Lt=pt.length;Et<Lt;Et++)Qr(pt[Et],G,q,j)}function rl(w,G,q,j){const V=w.opaque,pt=w.transmissive,Et=w.transparent;u.setupLightsView(q),tt===!0&&ut.setGlobalState(g.clippingPlanes,q),j&&ot.viewport(P.copy(j)),V.length>0&&$s(V,G,q),pt.length>0&&$s(pt,G,q),Et.length>0&&$s(Et,G,q),ot.buffers.depth.setTest(!0),ot.buffers.depth.setMask(!0),ot.buffers.color.setMask(!0),ot.setPolygonOffset(!1)}function al(w,G,q,j){if((q.isScene===!0?q.overrideMaterial:null)!==null)return;u.state.transmissionRenderTarget[j.id]===void 0&&(u.state.transmissionRenderTarget[j.id]=new wi(1,1,{generateMipmaps:!0,type:J.has("EXT_color_buffer_half_float")||J.has("EXT_color_buffer_float")?zs:Gn,minFilter:ti,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:le.workingColorSpace}));const pt=u.state.transmissionRenderTarget[j.id],Et=j.viewport||P;pt.setSize(Et.z*g.transmissionResolutionScale,Et.w*g.transmissionResolutionScale);const Lt=g.getRenderTarget(),Ct=g.getActiveCubeFace(),Vt=g.getActiveMipmapLevel();g.setRenderTarget(pt),g.getClearColor(I),U=g.getClearAlpha(),U<1&&g.setClearColor(16777215,.5),g.clear(),Pt&&At.render(q);const $t=g.toneMapping;g.toneMapping=ii;const Nt=j.viewport;if(j.viewport!==void 0&&(j.viewport=void 0),u.setupLightsView(j),tt===!0&&ut.setGlobalState(g.clippingPlanes,j),$s(w,q,j),gt.updateMultisampleRenderTarget(pt),gt.updateRenderTargetMipmap(pt),J.has("WEBGL_multisampled_render_to_texture")===!1){let ne=!1;for(let de=0,ye=G.length;de<ye;de++){const _e=G[de],me=_e.object,Ht=_e.geometry,xe=_e.material,ae=_e.group;if(xe.side===Bn&&me.layers.test(j.layers)){const Ke=xe.side;xe.side=je,xe.needsUpdate=!0,ol(me,q,j,Ht,xe,ae),xe.side=Ke,xe.needsUpdate=!0,ne=!0}}ne===!0&&(gt.updateMultisampleRenderTarget(pt),gt.updateRenderTargetMipmap(pt))}g.setRenderTarget(Lt,Ct,Vt),g.setClearColor(I,U),Nt!==void 0&&(j.viewport=Nt),g.toneMapping=$t}function $s(w,G,q){const j=G.isScene===!0?G.overrideMaterial:null;for(let V=0,pt=w.length;V<pt;V++){const Et=w[V],Lt=Et.object,Ct=Et.geometry,Vt=Et.group;let $t=Et.material;$t.allowOverride===!0&&j!==null&&($t=j),Lt.layers.test(q.layers)&&ol(Lt,G,q,Ct,$t,Vt)}}function ol(w,G,q,j,V,pt){w.onBeforeRender(g,G,q,j,V,pt),w.modelViewMatrix.multiplyMatrices(q.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),V.onBeforeRender(g,G,q,j,w,pt),V.transparent===!0&&V.side===Bn&&V.forceSinglePass===!1?(V.side=je,V.needsUpdate=!0,g.renderBufferDirect(q,G,j,V,w,pt),V.side=ri,V.needsUpdate=!0,g.renderBufferDirect(q,G,j,V,w,pt),V.side=Bn):g.renderBufferDirect(q,G,j,V,w,pt),w.onAfterRender(g,G,q,j,V,pt)}function qs(w,G,q){G.isScene!==!0&&(G=mt);const j=st.get(w),V=u.state.lights,pt=u.state.shadowsArray,Et=V.state.version,Lt=K.getParameters(w,V.state,pt,G,q),Ct=K.getProgramCacheKey(Lt);let Vt=j.programs;j.environment=w.isMeshStandardMaterial?G.environment:null,j.fog=G.fog,j.envMap=(w.isMeshStandardMaterial?qt:Wt).get(w.envMap||j.environment),j.envMapRotation=j.environment!==null&&w.envMap===null?G.environmentRotation:w.envMapRotation,Vt===void 0&&(w.addEventListener("dispose",at),Vt=new Map,j.programs=Vt);let $t=Vt.get(Ct);if($t!==void 0){if(j.currentProgram===$t&&j.lightsStateVersion===Et)return cl(w,Lt),$t}else Lt.uniforms=K.getUniforms(w),w.onBeforeCompile(Lt,g),$t=K.acquireProgram(Lt,Ct),Vt.set(Ct,$t),j.uniforms=Lt.uniforms;const Nt=j.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(Nt.clippingPlanes=ut.uniform),cl(w,Lt),j.needsLights=Nh(w),j.lightsStateVersion=Et,j.needsLights&&(Nt.ambientLightColor.value=V.state.ambient,Nt.lightProbe.value=V.state.probe,Nt.directionalLights.value=V.state.directional,Nt.directionalLightShadows.value=V.state.directionalShadow,Nt.spotLights.value=V.state.spot,Nt.spotLightShadows.value=V.state.spotShadow,Nt.rectAreaLights.value=V.state.rectArea,Nt.ltc_1.value=V.state.rectAreaLTC1,Nt.ltc_2.value=V.state.rectAreaLTC2,Nt.pointLights.value=V.state.point,Nt.pointLightShadows.value=V.state.pointShadow,Nt.hemisphereLights.value=V.state.hemi,Nt.directionalShadowMap.value=V.state.directionalShadowMap,Nt.directionalShadowMatrix.value=V.state.directionalShadowMatrix,Nt.spotShadowMap.value=V.state.spotShadowMap,Nt.spotLightMatrix.value=V.state.spotLightMatrix,Nt.spotLightMap.value=V.state.spotLightMap,Nt.pointShadowMap.value=V.state.pointShadowMap,Nt.pointShadowMatrix.value=V.state.pointShadowMatrix),j.currentProgram=$t,j.uniformsList=null,$t}function ll(w){if(w.uniformsList===null){const G=w.currentProgram.getUniforms();w.uniformsList=Lr.seqWithValue(G.seq,w.uniforms)}return w.uniformsList}function cl(w,G){const q=st.get(w);q.outputColorSpace=G.outputColorSpace,q.batching=G.batching,q.batchingColor=G.batchingColor,q.instancing=G.instancing,q.instancingColor=G.instancingColor,q.instancingMorph=G.instancingMorph,q.skinning=G.skinning,q.morphTargets=G.morphTargets,q.morphNormals=G.morphNormals,q.morphColors=G.morphColors,q.morphTargetsCount=G.morphTargetsCount,q.numClippingPlanes=G.numClippingPlanes,q.numIntersection=G.numClipIntersection,q.vertexAlphas=G.vertexAlphas,q.vertexTangents=G.vertexTangents,q.toneMapping=G.toneMapping}function Uh(w,G,q,j,V){G.isScene!==!0&&(G=mt),gt.resetTextureUnits();const pt=G.fog,Et=j.isMeshStandardMaterial?G.environment:null,Lt=R===null?g.outputColorSpace:R.isXRRenderTarget===!0?R.texture.colorSpace:us,Ct=(j.isMeshStandardMaterial?qt:Wt).get(j.envMap||Et),Vt=j.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,$t=!!q.attributes.tangent&&(!!j.normalMap||j.anisotropy>0),Nt=!!q.morphAttributes.position,ne=!!q.morphAttributes.normal,de=!!q.morphAttributes.color;let ye=ii;j.toneMapped&&(R===null||R.isXRRenderTarget===!0)&&(ye=g.toneMapping);const _e=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,me=_e!==void 0?_e.length:0,Ht=st.get(j),xe=u.state.lights;if(tt===!0&&(W===!0||w!==y)){const ze=w===y&&j.id===v;ut.setState(j,w,ze)}let ae=!1;j.version===Ht.__version?(Ht.needsLights&&Ht.lightsStateVersion!==xe.state.version||Ht.outputColorSpace!==Lt||V.isBatchedMesh&&Ht.batching===!1||!V.isBatchedMesh&&Ht.batching===!0||V.isBatchedMesh&&Ht.batchingColor===!0&&V.colorTexture===null||V.isBatchedMesh&&Ht.batchingColor===!1&&V.colorTexture!==null||V.isInstancedMesh&&Ht.instancing===!1||!V.isInstancedMesh&&Ht.instancing===!0||V.isSkinnedMesh&&Ht.skinning===!1||!V.isSkinnedMesh&&Ht.skinning===!0||V.isInstancedMesh&&Ht.instancingColor===!0&&V.instanceColor===null||V.isInstancedMesh&&Ht.instancingColor===!1&&V.instanceColor!==null||V.isInstancedMesh&&Ht.instancingMorph===!0&&V.morphTexture===null||V.isInstancedMesh&&Ht.instancingMorph===!1&&V.morphTexture!==null||Ht.envMap!==Ct||j.fog===!0&&Ht.fog!==pt||Ht.numClippingPlanes!==void 0&&(Ht.numClippingPlanes!==ut.numPlanes||Ht.numIntersection!==ut.numIntersection)||Ht.vertexAlphas!==Vt||Ht.vertexTangents!==$t||Ht.morphTargets!==Nt||Ht.morphNormals!==ne||Ht.morphColors!==de||Ht.toneMapping!==ye||Ht.morphTargetsCount!==me)&&(ae=!0):(ae=!0,Ht.__version=j.version);let Ke=Ht.currentProgram;ae===!0&&(Ke=qs(j,G,V));let Ii=!1,Ze=!1,ms=!1;const ve=Ke.getUniforms(),en=Ht.uniforms;if(ot.useProgram(Ke.program)&&(Ii=!0,Ze=!0,ms=!0),j.id!==v&&(v=j.id,Ze=!0),Ii||y!==w){ot.buffers.depth.getReversed()&&w.reversedDepth!==!0&&(w._reversedDepth=!0,w.updateProjectionMatrix()),ve.setValue(L,"projectionMatrix",w.projectionMatrix),ve.setValue(L,"viewMatrix",w.matrixWorldInverse);const $e=ve.map.cameraPosition;$e!==void 0&&$e.setValue(L,rt.setFromMatrixPosition(w.matrixWorld)),ht.logarithmicDepthBuffer&&ve.setValue(L,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(j.isMeshPhongMaterial||j.isMeshToonMaterial||j.isMeshLambertMaterial||j.isMeshBasicMaterial||j.isMeshStandardMaterial||j.isShaderMaterial)&&ve.setValue(L,"isOrthographic",w.isOrthographicCamera===!0),y!==w&&(y=w,Ze=!0,ms=!0)}if(V.isSkinnedMesh){ve.setOptional(L,V,"bindMatrix"),ve.setOptional(L,V,"bindMatrixInverse");const ze=V.skeleton;ze&&(ze.boneTexture===null&&ze.computeBoneTexture(),ve.setValue(L,"boneTexture",ze.boneTexture,gt))}V.isBatchedMesh&&(ve.setOptional(L,V,"batchingTexture"),ve.setValue(L,"batchingTexture",V._matricesTexture,gt),ve.setOptional(L,V,"batchingIdTexture"),ve.setValue(L,"batchingIdTexture",V._indirectTexture,gt),ve.setOptional(L,V,"batchingColorTexture"),V._colorsTexture!==null&&ve.setValue(L,"batchingColorTexture",V._colorsTexture,gt));const nn=q.morphAttributes;if((nn.position!==void 0||nn.normal!==void 0||nn.color!==void 0)&&ct.update(V,q,Ke),(Ze||Ht.receiveShadow!==V.receiveShadow)&&(Ht.receiveShadow=V.receiveShadow,ve.setValue(L,"receiveShadow",V.receiveShadow)),j.isMeshGouraudMaterial&&j.envMap!==null&&(en.envMap.value=Ct,en.flipEnvMap.value=Ct.isCubeTexture&&Ct.isRenderTargetTexture===!1?-1:1),j.isMeshStandardMaterial&&j.envMap===null&&G.environment!==null&&(en.envMapIntensity.value=G.environmentIntensity),Ze&&(ve.setValue(L,"toneMappingExposure",g.toneMappingExposure),Ht.needsLights&&Fh(en,ms),pt&&j.fog===!0&&nt.refreshFogUniforms(en,pt),nt.refreshMaterialUniforms(en,j,N,z,u.state.transmissionRenderTarget[w.id]),Lr.upload(L,ll(Ht),en,gt)),j.isShaderMaterial&&j.uniformsNeedUpdate===!0&&(Lr.upload(L,ll(Ht),en,gt),j.uniformsNeedUpdate=!1),j.isSpriteMaterial&&ve.setValue(L,"center",V.center),ve.setValue(L,"modelViewMatrix",V.modelViewMatrix),ve.setValue(L,"normalMatrix",V.normalMatrix),ve.setValue(L,"modelMatrix",V.matrixWorld),j.isShaderMaterial||j.isRawShaderMaterial){const ze=j.uniformsGroups;for(let $e=0,ta=ze.length;$e<ta;$e++){const ci=ze[$e];Yt.update(ci,Ke),Yt.bind(ci,Ke)}}return Ke}function Fh(w,G){w.ambientLightColor.needsUpdate=G,w.lightProbe.needsUpdate=G,w.directionalLights.needsUpdate=G,w.directionalLightShadows.needsUpdate=G,w.pointLights.needsUpdate=G,w.pointLightShadows.needsUpdate=G,w.spotLights.needsUpdate=G,w.spotLightShadows.needsUpdate=G,w.rectAreaLights.needsUpdate=G,w.hemisphereLights.needsUpdate=G}function Nh(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return S},this.getActiveMipmapLevel=function(){return T},this.getRenderTarget=function(){return R},this.setRenderTargetTextures=function(w,G,q){const j=st.get(w);j.__autoAllocateDepthBuffer=w.resolveDepthBuffer===!1,j.__autoAllocateDepthBuffer===!1&&(j.__useRenderToTexture=!1),st.get(w.texture).__webglTexture=G,st.get(w.depthTexture).__webglTexture=j.__autoAllocateDepthBuffer?void 0:q,j.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(w,G){const q=st.get(w);q.__webglFramebuffer=G,q.__useDefaultFramebuffer=G===void 0};const Oh=L.createFramebuffer();this.setRenderTarget=function(w,G=0,q=0){R=w,S=G,T=q;let j=!0,V=null,pt=!1,Et=!1;if(w){const Ct=st.get(w);if(Ct.__useDefaultFramebuffer!==void 0)ot.bindFramebuffer(L.FRAMEBUFFER,null),j=!1;else if(Ct.__webglFramebuffer===void 0)gt.setupRenderTarget(w);else if(Ct.__hasExternalTextures)gt.rebindTextures(w,st.get(w.texture).__webglTexture,st.get(w.depthTexture).__webglTexture);else if(w.depthBuffer){const Nt=w.depthTexture;if(Ct.__boundDepthTexture!==Nt){if(Nt!==null&&st.has(Nt)&&(w.width!==Nt.image.width||w.height!==Nt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");gt.setupDepthRenderbuffer(w)}}const Vt=w.texture;(Vt.isData3DTexture||Vt.isDataArrayTexture||Vt.isCompressedArrayTexture)&&(Et=!0);const $t=st.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray($t[G])?V=$t[G][q]:V=$t[G],pt=!0):w.samples>0&&gt.useMultisampledRTT(w)===!1?V=st.get(w).__webglMultisampledFramebuffer:Array.isArray($t)?V=$t[q]:V=$t,P.copy(w.viewport),D.copy(w.scissor),F=w.scissorTest}else P.copy(it).multiplyScalar(N).floor(),D.copy(vt).multiplyScalar(N).floor(),F=Rt;if(q!==0&&(V=Oh),ot.bindFramebuffer(L.FRAMEBUFFER,V)&&j&&ot.drawBuffers(w,V),ot.viewport(P),ot.scissor(D),ot.setScissorTest(F),pt){const Ct=st.get(w.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_CUBE_MAP_POSITIVE_X+G,Ct.__webglTexture,q)}else if(Et){const Ct=G;for(let Vt=0;Vt<w.textures.length;Vt++){const $t=st.get(w.textures[Vt]);L.framebufferTextureLayer(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0+Vt,$t.__webglTexture,q,Ct)}}else if(w!==null&&q!==0){const Ct=st.get(w.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,Ct.__webglTexture,q)}v=-1},this.readRenderTargetPixels=function(w,G,q,j,V,pt,Et,Lt=0){if(!(w&&w.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ct=st.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&Et!==void 0&&(Ct=Ct[Et]),Ct){ot.bindFramebuffer(L.FRAMEBUFFER,Ct);try{const Vt=w.textures[Lt],$t=Vt.format,Nt=Vt.type;if(!ht.textureFormatReadable($t)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ht.textureTypeReadable(Nt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}G>=0&&G<=w.width-j&&q>=0&&q<=w.height-V&&(w.textures.length>1&&L.readBuffer(L.COLOR_ATTACHMENT0+Lt),L.readPixels(G,q,j,V,Dt.convert($t),Dt.convert(Nt),pt))}finally{const Vt=R!==null?st.get(R).__webglFramebuffer:null;ot.bindFramebuffer(L.FRAMEBUFFER,Vt)}}},this.readRenderTargetPixelsAsync=async function(w,G,q,j,V,pt,Et,Lt=0){if(!(w&&w.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ct=st.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&Et!==void 0&&(Ct=Ct[Et]),Ct)if(G>=0&&G<=w.width-j&&q>=0&&q<=w.height-V){ot.bindFramebuffer(L.FRAMEBUFFER,Ct);const Vt=w.textures[Lt],$t=Vt.format,Nt=Vt.type;if(!ht.textureFormatReadable($t))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ht.textureTypeReadable(Nt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const ne=L.createBuffer();L.bindBuffer(L.PIXEL_PACK_BUFFER,ne),L.bufferData(L.PIXEL_PACK_BUFFER,pt.byteLength,L.STREAM_READ),w.textures.length>1&&L.readBuffer(L.COLOR_ATTACHMENT0+Lt),L.readPixels(G,q,j,V,Dt.convert($t),Dt.convert(Nt),0);const de=R!==null?st.get(R).__webglFramebuffer:null;ot.bindFramebuffer(L.FRAMEBUFFER,de);const ye=L.fenceSync(L.SYNC_GPU_COMMANDS_COMPLETE,0);return L.flush(),await Wu(L,ye,4),L.bindBuffer(L.PIXEL_PACK_BUFFER,ne),L.getBufferSubData(L.PIXEL_PACK_BUFFER,0,pt),L.deleteBuffer(ne),L.deleteSync(ye),pt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(w,G=null,q=0){const j=Math.pow(2,-q),V=Math.floor(w.image.width*j),pt=Math.floor(w.image.height*j),Et=G!==null?G.x:0,Lt=G!==null?G.y:0;gt.setTexture2D(w,0),L.copyTexSubImage2D(L.TEXTURE_2D,q,0,0,Et,Lt,V,pt),ot.unbindTexture()};const Bh=L.createFramebuffer(),zh=L.createFramebuffer();this.copyTextureToTexture=function(w,G,q=null,j=null,V=0,pt=null){pt===null&&(V!==0?(Ns("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),pt=V,V=0):pt=0);let Et,Lt,Ct,Vt,$t,Nt,ne,de,ye;const _e=w.isCompressedTexture?w.mipmaps[pt]:w.image;if(q!==null)Et=q.max.x-q.min.x,Lt=q.max.y-q.min.y,Ct=q.isBox3?q.max.z-q.min.z:1,Vt=q.min.x,$t=q.min.y,Nt=q.isBox3?q.min.z:0;else{const nn=Math.pow(2,-V);Et=Math.floor(_e.width*nn),Lt=Math.floor(_e.height*nn),w.isDataArrayTexture?Ct=_e.depth:w.isData3DTexture?Ct=Math.floor(_e.depth*nn):Ct=1,Vt=0,$t=0,Nt=0}j!==null?(ne=j.x,de=j.y,ye=j.z):(ne=0,de=0,ye=0);const me=Dt.convert(G.format),Ht=Dt.convert(G.type);let xe;G.isData3DTexture?(gt.setTexture3D(G,0),xe=L.TEXTURE_3D):G.isDataArrayTexture||G.isCompressedArrayTexture?(gt.setTexture2DArray(G,0),xe=L.TEXTURE_2D_ARRAY):(gt.setTexture2D(G,0),xe=L.TEXTURE_2D),L.pixelStorei(L.UNPACK_FLIP_Y_WEBGL,G.flipY),L.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL,G.premultiplyAlpha),L.pixelStorei(L.UNPACK_ALIGNMENT,G.unpackAlignment);const ae=L.getParameter(L.UNPACK_ROW_LENGTH),Ke=L.getParameter(L.UNPACK_IMAGE_HEIGHT),Ii=L.getParameter(L.UNPACK_SKIP_PIXELS),Ze=L.getParameter(L.UNPACK_SKIP_ROWS),ms=L.getParameter(L.UNPACK_SKIP_IMAGES);L.pixelStorei(L.UNPACK_ROW_LENGTH,_e.width),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,_e.height),L.pixelStorei(L.UNPACK_SKIP_PIXELS,Vt),L.pixelStorei(L.UNPACK_SKIP_ROWS,$t),L.pixelStorei(L.UNPACK_SKIP_IMAGES,Nt);const ve=w.isDataArrayTexture||w.isData3DTexture,en=G.isDataArrayTexture||G.isData3DTexture;if(w.isDepthTexture){const nn=st.get(w),ze=st.get(G),$e=st.get(nn.__renderTarget),ta=st.get(ze.__renderTarget);ot.bindFramebuffer(L.READ_FRAMEBUFFER,$e.__webglFramebuffer),ot.bindFramebuffer(L.DRAW_FRAMEBUFFER,ta.__webglFramebuffer);for(let ci=0;ci<Ct;ci++)ve&&(L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,st.get(w).__webglTexture,V,Nt+ci),L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,st.get(G).__webglTexture,pt,ye+ci)),L.blitFramebuffer(Vt,$t,Et,Lt,ne,de,Et,Lt,L.DEPTH_BUFFER_BIT,L.NEAREST);ot.bindFramebuffer(L.READ_FRAMEBUFFER,null),ot.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else if(V!==0||w.isRenderTargetTexture||st.has(w)){const nn=st.get(w),ze=st.get(G);ot.bindFramebuffer(L.READ_FRAMEBUFFER,Bh),ot.bindFramebuffer(L.DRAW_FRAMEBUFFER,zh);for(let $e=0;$e<Ct;$e++)ve?L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,nn.__webglTexture,V,Nt+$e):L.framebufferTexture2D(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,nn.__webglTexture,V),en?L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,ze.__webglTexture,pt,ye+$e):L.framebufferTexture2D(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,ze.__webglTexture,pt),V!==0?L.blitFramebuffer(Vt,$t,Et,Lt,ne,de,Et,Lt,L.COLOR_BUFFER_BIT,L.NEAREST):en?L.copyTexSubImage3D(xe,pt,ne,de,ye+$e,Vt,$t,Et,Lt):L.copyTexSubImage2D(xe,pt,ne,de,Vt,$t,Et,Lt);ot.bindFramebuffer(L.READ_FRAMEBUFFER,null),ot.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else en?w.isDataTexture||w.isData3DTexture?L.texSubImage3D(xe,pt,ne,de,ye,Et,Lt,Ct,me,Ht,_e.data):G.isCompressedArrayTexture?L.compressedTexSubImage3D(xe,pt,ne,de,ye,Et,Lt,Ct,me,_e.data):L.texSubImage3D(xe,pt,ne,de,ye,Et,Lt,Ct,me,Ht,_e):w.isDataTexture?L.texSubImage2D(L.TEXTURE_2D,pt,ne,de,Et,Lt,me,Ht,_e.data):w.isCompressedTexture?L.compressedTexSubImage2D(L.TEXTURE_2D,pt,ne,de,_e.width,_e.height,me,_e.data):L.texSubImage2D(L.TEXTURE_2D,pt,ne,de,Et,Lt,me,Ht,_e);L.pixelStorei(L.UNPACK_ROW_LENGTH,ae),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,Ke),L.pixelStorei(L.UNPACK_SKIP_PIXELS,Ii),L.pixelStorei(L.UNPACK_SKIP_ROWS,Ze),L.pixelStorei(L.UNPACK_SKIP_IMAGES,ms),pt===0&&G.generateMipmaps&&L.generateMipmap(xe),ot.unbindTexture()},this.initRenderTarget=function(w){st.get(w).__webglFramebuffer===void 0&&gt.setupRenderTarget(w)},this.initTexture=function(w){w.isCubeTexture?gt.setTextureCube(w,0):w.isData3DTexture?gt.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?gt.setTexture2DArray(w,0):gt.setTexture2D(w,0),ot.unbindTexture()},this.resetState=function(){S=0,T=0,R=null,ot.reset(),yt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Rn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=le._getDrawingBufferColorSpace(t),e.unpackColorSpace=le._getUnpackColorSpace()}}const gc={type:"change"},el={type:"start"},hh={type:"end"},Sr=new Gs,_c=new Kn,d0=Math.cos(70*lt.DEG2RAD),Re=new B,qe=2*Math.PI,pe={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},La=1e-6;class f0 extends wd{constructor(t,e=null){super(t,e),this.state=pe.NONE,this.target=new B,this.cursor=new B,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:ss.ROTATE,MIDDLE:ss.DOLLY,RIGHT:ss.PAN},this.touches={ONE:es.ROTATE,TWO:es.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new B,this._lastQuaternion=new ai,this._lastTargetPosition=new B,this._quat=new ai().setFromUnitVectors(t.up,new B(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new Wl,this._sphericalDelta=new Wl,this._scale=1,this._panOffset=new B,this._rotateStart=new Gt,this._rotateEnd=new Gt,this._rotateDelta=new Gt,this._panStart=new Gt,this._panEnd=new Gt,this._panDelta=new Gt,this._dollyStart=new Gt,this._dollyEnd=new Gt,this._dollyDelta=new Gt,this._dollyDirection=new B,this._mouse=new Gt,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=m0.bind(this),this._onPointerDown=p0.bind(this),this._onPointerUp=g0.bind(this),this._onContextMenu=E0.bind(this),this._onMouseWheel=v0.bind(this),this._onKeyDown=M0.bind(this),this._onTouchStart=y0.bind(this),this._onTouchMove=S0.bind(this),this._onMouseDown=_0.bind(this),this._onMouseMove=x0.bind(this),this._interceptControlDown=b0.bind(this),this._interceptControlUp=T0.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}connect(t){super.connect(t),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(t){t.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=t}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(gc),this.update(),this.state=pe.NONE}update(t=null){const e=this.object.position;Re.copy(e).sub(this.target),Re.applyQuaternion(this._quat),this._spherical.setFromVector3(Re),this.autoRotate&&this.state===pe.NONE&&this._rotateLeft(this._getAutoRotationAngle(t)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let i=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(i)&&isFinite(s)&&(i<-Math.PI?i+=qe:i>Math.PI&&(i-=qe),s<-Math.PI?s+=qe:s>Math.PI&&(s-=qe),i<=s?this._spherical.theta=Math.max(i,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(i+s)/2?Math.max(i,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const a=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=a!=this._spherical.radius}if(Re.setFromSpherical(this._spherical),Re.applyQuaternion(this._quatInverse),e.copy(this.target).add(Re),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let a=null;if(this.object.isPerspectiveCamera){const o=Re.length();a=this._clampDistance(o*this._scale);const c=o-a;this.object.position.addScaledVector(this._dollyDirection,c),this.object.updateMatrixWorld(),r=!!c}else if(this.object.isOrthographicCamera){const o=new B(this._mouse.x,this._mouse.y,0);o.unproject(this.object);const c=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=c!==this.object.zoom;const l=new B(this._mouse.x,this._mouse.y,0);l.unproject(this.object),this.object.position.sub(l).add(o),this.object.updateMatrixWorld(),a=Re.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;a!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(a).add(this.object.position):(Sr.origin.copy(this.object.position),Sr.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Sr.direction))<d0?this.object.lookAt(this.target):(_c.setFromNormalAndCoplanarPoint(this.object.up,this.target),Sr.intersectPlane(_c,this.target))))}else if(this.object.isOrthographicCamera){const a=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),a!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>La||8*(1-this._lastQuaternion.dot(this.object.quaternion))>La||this._lastTargetPosition.distanceToSquared(this.target)>La?(this.dispatchEvent(gc),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(t){return t!==null?qe/60*this.autoRotateSpeed*t:qe/60/60*this.autoRotateSpeed}_getZoomScale(t){const e=Math.abs(t*.01);return Math.pow(.95,this.zoomSpeed*e)}_rotateLeft(t){this._sphericalDelta.theta-=t}_rotateUp(t){this._sphericalDelta.phi-=t}_panLeft(t,e){Re.setFromMatrixColumn(e,0),Re.multiplyScalar(-t),this._panOffset.add(Re)}_panUp(t,e){this.screenSpacePanning===!0?Re.setFromMatrixColumn(e,1):(Re.setFromMatrixColumn(e,0),Re.crossVectors(this.object.up,Re)),Re.multiplyScalar(t),this._panOffset.add(Re)}_pan(t,e){const i=this.domElement;if(this.object.isPerspectiveCamera){const s=this.object.position;Re.copy(s).sub(this.target);let r=Re.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*t*r/i.clientHeight,this.object.matrix),this._panUp(2*e*r/i.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(t*(this.object.right-this.object.left)/this.object.zoom/i.clientWidth,this.object.matrix),this._panUp(e*(this.object.top-this.object.bottom)/this.object.zoom/i.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(t,e){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const i=this.domElement.getBoundingClientRect(),s=t-i.left,r=e-i.top,a=i.width,o=i.height;this._mouse.x=s/a*2-1,this._mouse.y=-(r/o)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(t){return Math.max(this.minDistance,Math.min(this.maxDistance,t))}_handleMouseDownRotate(t){this._rotateStart.set(t.clientX,t.clientY)}_handleMouseDownDolly(t){this._updateZoomParameters(t.clientX,t.clientX),this._dollyStart.set(t.clientX,t.clientY)}_handleMouseDownPan(t){this._panStart.set(t.clientX,t.clientY)}_handleMouseMoveRotate(t){this._rotateEnd.set(t.clientX,t.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const e=this.domElement;this._rotateLeft(qe*this._rotateDelta.x/e.clientHeight),this._rotateUp(qe*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(t){this._dollyEnd.set(t.clientX,t.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(t){this._panEnd.set(t.clientX,t.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(t){this._updateZoomParameters(t.clientX,t.clientY),t.deltaY<0?this._dollyIn(this._getZoomScale(t.deltaY)):t.deltaY>0&&this._dollyOut(this._getZoomScale(t.deltaY)),this.update()}_handleKeyDown(t){let e=!1;switch(t.code){case this.keys.UP:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(qe*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),e=!0;break;case this.keys.BOTTOM:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(-qe*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),e=!0;break;case this.keys.LEFT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(qe*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),e=!0;break;case this.keys.RIGHT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(-qe*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),e=!0;break}e&&(t.preventDefault(),this.update())}_handleTouchStartRotate(t){if(this._pointers.length===1)this._rotateStart.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),i=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._rotateStart.set(i,s)}}_handleTouchStartPan(t){if(this._pointers.length===1)this._panStart.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),i=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panStart.set(i,s)}}_handleTouchStartDolly(t){const e=this._getSecondPointerPosition(t),i=t.pageX-e.x,s=t.pageY-e.y,r=Math.sqrt(i*i+s*s);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enablePan&&this._handleTouchStartPan(t)}_handleTouchStartDollyRotate(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enableRotate&&this._handleTouchStartRotate(t)}_handleTouchMoveRotate(t){if(this._pointers.length==1)this._rotateEnd.set(t.pageX,t.pageY);else{const i=this._getSecondPointerPosition(t),s=.5*(t.pageX+i.x),r=.5*(t.pageY+i.y);this._rotateEnd.set(s,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const e=this.domElement;this._rotateLeft(qe*this._rotateDelta.x/e.clientHeight),this._rotateUp(qe*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(t){if(this._pointers.length===1)this._panEnd.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),i=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panEnd.set(i,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(t){const e=this._getSecondPointerPosition(t),i=t.pageX-e.x,s=t.pageY-e.y,r=Math.sqrt(i*i+s*s);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const a=(t.pageX+e.x)*.5,o=(t.pageY+e.y)*.5;this._updateZoomParameters(a,o)}_handleTouchMoveDollyPan(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enablePan&&this._handleTouchMovePan(t)}_handleTouchMoveDollyRotate(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enableRotate&&this._handleTouchMoveRotate(t)}_addPointer(t){this._pointers.push(t.pointerId)}_removePointer(t){delete this._pointerPositions[t.pointerId];for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId){this._pointers.splice(e,1);return}}_isTrackingPointer(t){for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId)return!0;return!1}_trackPointer(t){let e=this._pointerPositions[t.pointerId];e===void 0&&(e=new Gt,this._pointerPositions[t.pointerId]=e),e.set(t.pageX,t.pageY)}_getSecondPointerPosition(t){const e=t.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[e]}_customWheelEvent(t){const e=t.deltaMode,i={clientX:t.clientX,clientY:t.clientY,deltaY:t.deltaY};switch(e){case 1:i.deltaY*=16;break;case 2:i.deltaY*=100;break}return t.ctrlKey&&!this._controlActive&&(i.deltaY*=10),i}}function p0(n){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(n.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(n)&&(this._addPointer(n),n.pointerType==="touch"?this._onTouchStart(n):this._onMouseDown(n)))}function m0(n){this.enabled!==!1&&(n.pointerType==="touch"?this._onTouchMove(n):this._onMouseMove(n))}function g0(n){switch(this._removePointer(n),this._pointers.length){case 0:this.domElement.releasePointerCapture(n.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(hh),this.state=pe.NONE;break;case 1:const t=this._pointers[0],e=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:e.x,pageY:e.y});break}}function _0(n){let t;switch(n.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case ss.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(n),this.state=pe.DOLLY;break;case ss.ROTATE:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=pe.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=pe.ROTATE}break;case ss.PAN:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=pe.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=pe.PAN}break;default:this.state=pe.NONE}this.state!==pe.NONE&&this.dispatchEvent(el)}function x0(n){switch(this.state){case pe.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(n);break;case pe.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(n);break;case pe.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(n);break}}function v0(n){this.enabled===!1||this.enableZoom===!1||this.state!==pe.NONE||(n.preventDefault(),this.dispatchEvent(el),this._handleMouseWheel(this._customWheelEvent(n)),this.dispatchEvent(hh))}function M0(n){this.enabled!==!1&&this._handleKeyDown(n)}function y0(n){switch(this._trackPointer(n),this._pointers.length){case 1:switch(this.touches.ONE){case es.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(n),this.state=pe.TOUCH_ROTATE;break;case es.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(n),this.state=pe.TOUCH_PAN;break;default:this.state=pe.NONE}break;case 2:switch(this.touches.TWO){case es.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(n),this.state=pe.TOUCH_DOLLY_PAN;break;case es.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(n),this.state=pe.TOUCH_DOLLY_ROTATE;break;default:this.state=pe.NONE}break;default:this.state=pe.NONE}this.state!==pe.NONE&&this.dispatchEvent(el)}function S0(n){switch(this._trackPointer(n),this.state){case pe.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(n),this.update();break;case pe.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(n),this.update();break;case pe.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(n),this.update();break;case pe.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(n),this.update();break;default:this.state=pe.NONE}}function E0(n){this.enabled!==!1&&n.preventDefault()}function b0(n){n.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function T0(n){n.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}const xc=["一次偶然涨落，一组全新的自然法则。","这里的星光，以陌生的速度穿过真空。","引力写下结构，时间负责把它读完。","一个从未存在过，也不会再次出现的宇宙。","尘埃正在聚集，第一颗恒星即将点亮。"],vc=["赫利俄斯","弥涅耳瓦","伊奥","俄耳甫斯","忒弥斯","厄里倪厄斯","欧律狄刻","阿斯忒里亚"],Po=["棒旋星系","絮状螺旋星系","环状星系","椭圆星系","不规则星系"],Mc=["赛里安共同体","洛珂蜂群","弧光联盟","静默者","澄海文明","铸星者","织光议会","塔乌林协约","奈落合众体","远潮群落","镜海联邦","巡星庭","赤纬公社","无昼同盟","尘环智群"],yc=[14221151,16743275,6928639,15174911,16762460,6481615,16747975,10920191,15899989,7595116,6215935,16770683,12815615,16737894,9484543],Sc=[{until:55,name:"炽热大爆炸",description:"整个可观测区域同时处于高温、高密度状态；这不是物质从某个中心炸开。"},{until:145,name:"等离子体时代",description:"宇宙膨胀并冷却，原初核合成后，光子仍被自由电子频繁散射。"},{until:245,name:"宇宙黑暗时代",description:"38 万年后宇宙变得透明，但第一代恒星尚未点亮。"},{until:340,name:"宇宙黎明",description:"约 1～2 亿年后，第一代恒星与星系开始形成并推动再电离。"},{until:650,name:"恒星时代",description:"恒星、星系与重元素持续演化；生命与文明属于未证实的模型层。"},{until:845,name:"简并时代 · 假说",description:"若质子衰变等标准长期假说成立，恒星残骸绕核运行，并在近遇中逐个逃离或落入黑洞。"},{until:950,name:"黑洞时代 · 假说",description:"若霍金辐射的标准推断适用，孤立黑洞在极漫长时间中逐个蒸发。"},{until:1001,name:"暗时代 · 渐近",description:"宇宙继续膨胀，辐射红移与稀释，可用能量梯度趋近于零，而非发生一次全局终结。"}];function A0(n){const t=n?.cosmicFate;if(!t||t.type==="heat-death")return Sc;const e=Sc.slice(0,5);return t.type==="big-rip"?[...e,{until:850,name:"幽灵能量时代 · 假说",description:"暗能量密度随膨胀增长，宇宙在有限时间内加速趋向失稳。"},{until:1001,name:"大撕裂 · 条件结局",description:"在 w < -1 持续成立的假设下，局部引力与微观束缚将被逐层克服。"}]:t.type==="big-crunch"?[...e,{until:850,name:"膨胀反转 · 假说",description:"动态暗能量的有效势能跨过零点，哈勃参数逐步降低至零。"},{until:1001,name:"大坍缩 · 条件结局",description:"尺度因子反向演化，物质与辐射密度在有限时间内快速上升。"}]:[...e,{until:875,name:"亚稳真空 · 假说",description:"真空仍位于寿命未知的局部能量最低点，未发生可见跃迁。"},{until:1001,name:"真空衰变 · 条件结局",description:"随机量子隧穿产生低能真空泡，泡壁以近光速改写局部基态。"}]}function re(n){const t=Math.max(n(),1e-7),e=n();return Math.sqrt(-2*Math.log(t))*Math.cos(2*Math.PI*e)}function Q(n,t,e){return t+n()*(e-t)}const Ec="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ",w0=4,Ia=16;function uh(n){let t=1779033703,e=3144134277,i=1013904242,s=2773480762;for(let r=0;r<n.length;r++){const a=n.charCodeAt(r);t=e^Math.imul(t^a,597399067),e=i^Math.imul(e^a,2869860233),i=s^Math.imul(i^a,951274213),s=t^Math.imul(s^a,2716044179)}return t=Math.imul(i^t>>>18,597399067),e=Math.imul(s^e>>>22,2869860233),i=Math.imul(t^i>>>17,951274213),s=Math.imul(e^s>>>19,2716044179),t^=e^i^s,e^=t,i^=t,s^=t,[t>>>0,e>>>0,i>>>0,s>>>0]}function jr(n){const t=String(n).trim().toUpperCase();if(!/^(?:[A-Z0-9]{16}|[A-Z0-9]{4}(?:-[A-Z0-9]{4}){3})$/.test(t))throw new TypeError("Universe seed must contain exactly 16 letters or digits.");return t.replaceAll("-","").match(new RegExp(`.{${w0}}`,"g")).join("-")}function R0(){const n=globalThis.crypto;if(!n?.getRandomValues)throw new Error("Secure random number generation is unavailable.");let t="";do for(t="";t.length<Ia;){const e=n.getRandomValues(new Uint8Array(Ia));for(const i of e)if(!(i>=252)&&(t+=Ec[i%Ec.length],t.length===Ia))break}while(!/[A-Z]/.test(t)||!/[0-9]/.test(t));return jr(t)}function C0(n){return uh(jr(n))[0]}function un(n,t=0){let[e,i,s,r]=uh(`${jr(n)}:${t}`);return function(){const o=((e+i|0)+r|0)>>>0;return r=r+1|0,e=i^i>>>9,i=s+(s<<3)|0,s=s<<21|s>>>11,s=s+o|0,o/4294967296}}const Do=138e8,P0=145e8,Ua=.012,D0={lambda:{label:"宇宙学常数",description:"暗能量密度保持不变，加速膨胀持续"},quintessence:{label:"演化标量场",description:"暗能量状态方程随尺度因子缓慢演化"},phantom:{label:"幽灵暗能量",description:"有效状态方程低于 -1，暗能量密度随膨胀增长"},recollapsing:{label:"反转势能",description:"标量场势能在远未来跨过零点，膨胀最终停止"}},L0={"heat-death":{label:"渐近热寂",shortLabel:"热寂",description:"膨胀持续，可用能量梯度逐渐消失"},"big-rip":{label:"大撕裂",shortLabel:"大撕裂",description:"加速膨胀最终克服星系、恒星系与局部束缚"},"big-crunch":{label:"大坍缩",shortLabel:"大坍缩",description:"膨胀反转后，尺度因子在有限时间内回落"},"vacuum-decay":{label:"真空衰变",shortLabel:"真空衰变",description:"低能真空泡成核，泡壁以近光速扩张"}};function I0(n,t,e){return t+e*(1-n)/(1+n)}function U0({model:n,w0:t,wa:e,expansionRate:i,darkEnergyDensity:s,turnScale:r}){const a=Math.max(.06,1-s);let o=1,c=1,l=Do,d=1;const f=[{ageYears:l,scaleFactor:o,expansionRatio:1,w:t}];for(let p=1;p<=2400;p++){const m=I0(o,t,e);c*=Math.exp(-3*(1+m)*Ua),o*=Math.exp(Ua);const _=n==="recollapsing"?.22*s*Math.pow(o/r,2.35):0,M=a/Math.pow(o,3)+s*c-_;if(M<=0)return{history:f,turnaroundYears:l,finalRateSquared:M};const h=Math.sqrt((d+M)*.5);l+=P0/i*Ua/Math.max(h,1e-12),d=M,p%80===0&&f.push({ageYears:l,scaleFactor:o,expansionRatio:Math.sqrt(M),w:m})}return{history:f,asymptoticYears:l,finalRateSquared:d}}function F0(n){const t=n();return t<.34?{model:"lambda",w0:-1,wa:0,turnScale:1/0}:t<.62?{model:"quintessence",w0:Q(n,-.96,-.76),wa:Q(n,-.1,.1),turnScale:1/0}:t<.82?{model:"phantom",w0:Q(n,-1.22,-1.035),wa:Q(n,.015,.14),turnScale:1/0}:{model:"recollapsing",w0:Q(n,-.98,-.78),wa:Q(n,-.08,.08),turnScale:Q(n,3.2,11)}}function N0(n,t){const e=un(n,6029),i=F0(e),s=U0({...i,expansionRate:t.expansionRate,darkEnergyDensity:t.darkEnergyDensity});let r="heat-death",a=1/0;if(i.model==="phantom")r="big-rip",a=Math.max(Do*1.05,s.asymptoticYears);else if(i.model==="recollapsing"){r="big-crunch";const M=Math.max(1e9,s.turnaroundYears-Do);a=s.turnaroundYears+M*Q(e,.78,1.08)}const o=e()<.16,c=o?Q(e,10.55,92):1/0,l=10**Math.min(c,300),d=o&&l<a,f=d?"vacuum-decay":r,p=d?l:a,m=D0[i.model],_=L0[f];return{...i,modelLabel:m.label,modelDescription:m.description,expansionHistory:s.history,turnaroundYears:s.turnaroundYears||null,metastableVacuum:o,vacuumDecayExponent:c,type:f,label:_.label,shortLabel:_.shortLabel,description:_.description,outcomeYears:p,outcomeExponent:Number.isFinite(p)?Math.log10(p):1/0,onsetAt:f==="big-crunch"?790:f==="big-rip"?820:f==="vacuum-decay"?875:930}}function O0(n){return Number.isFinite(n.outcomeYears)?n.outcomeYears<1e12?`T+${(n.outcomeYears/1e8).toFixed(0)} 亿年`:`T+10^${n.outcomeExponent.toFixed(1)} 年`:"渐近 · 无有限终点"}function B0(n){return n.metastableVacuum?`亚稳态 · 假设寿命 10^${n.vacuumDecayExponent.toFixed(1)} 年`:"未设定可见衰变"}const z0=2100,Kr=(n,t,e)=>Math.max(t,Math.min(e,n)),bc=(n,t,e)=>{const i=Kr((n-t)/(e-t),0,1);return i*i*(3-2*i)};function dh(n,t){const e=Math.log10(Math.max(138e8,n)),i=Math.log10(138e8),s=t?.cosmicFate;if(s&&Number.isFinite(s.outcomeYears)){if(n>=s.outcomeYears)return 1e3;const a=(e-i)/(s.outcomeExponent-i);return Kr(470+a*(s.onsetAt-470),470,s.onsetAt)}if(e<12)return 470+(e-i)/(12-i)*100;if(e<14)return 570+(e-12)/2*80;if(e<15)return 650+(e-14)*30;if(e<38)return 680+(e-15)/23*165;const r=t?.blackHoleEvaporationExponent||100;return e<r?845+(e-38)/(r-38)*105:950}function k0(n,t,e){const i=Kr(Number(n),0,1e3),s=fh(i,t),r=e.findIndex(o=>i<o.until),a=r<0?e.length-1:r;return{position:i,label:s,eraIndex:a,era:e[a],galaxyIdentityOpacity:bc(i,245,325)*(1-bc(i,820,900))}}function H0(n){const e=1139.904761904762/z0;return n<145||n>=930?e*.42:e*1.25}function G0({position:n,label:t,universe:e,activeEvent:i,activeRelationship:s,ascendedSpecies:r,activeSpecies:a,civilizationData:o}){if(i){const l=n>=i.impactAt,d=l?`；${i.outcome}`:"";return{key:`${i.id}-${l?"aftermath":"forming"}`,time:t,text:`${i.label}：${i.message}${d}`}}const c=e?.cosmicFate;if(c&&c.type!=="heat-death"&&n>=c.onsetAt){if(c.type==="vacuum-decay"){const d=n>=985;return{key:`fate-vacuum-${d?"terminal":"bubble"}`,time:t,text:d?"低能真空泡已经穿过可观测区域，原有粒子与相互作用不再适用":"量子隧穿产生了低能真空泡，泡壁以接近光速向外扩张"}}if(c.type==="big-rip"){const d=n>=985;return{key:`fate-rip-${d?"terminal":"unbinding"}`,time:t,text:d?"膨胀率在有限时间内发散，局部束缚结构相继失效":"幽灵暗能量密度持续上升，星系团与星系开始逐层解束缚"}}const l=n>=985;return{key:`fate-crunch-${l?"terminal":"turnaround"}`,time:t,text:l?"坍缩使物质与辐射密度急剧升高，经典演化在高曲率阶段失效":"宇宙膨胀已经停止，大尺度距离开始反向缩小"}}if(s){const l=o[s.speciesA],d=o[s.speciesB],f=s.relationship==="conflict"?`${l.name} 与 ${d.name} 的边界冲突正在削减双方疆域`:`${l.name} 与 ${d.name} 建立友好共存区，共享资源与航路`;return{key:`relation-${s.relationship}-${s.speciesA}-${s.speciesB}`,time:t,text:f}}return r>0?{key:`ascended-${r}`,time:t,text:`${r} 个种群已转化为高维生命，脱离恒星与黑洞的普通物质演化`}:n<55?{key:"bang",time:"T+0",text:"整个可观测区域处于超高温、高密度状态，空间本身在膨胀"}:n<145?{key:"plasma",time:t,text:"光子在等离子体中不断散射，宇宙随膨胀持续冷却"}:n<245?{key:"dark",time:t,text:"复合后宇宙变得透明，但尚没有恒星光"}:n<340?{key:"stars",time:t,text:"第一代恒星与星系点亮，再电离逐渐开始"}:a>0?{key:`life-${a}`,time:t,text:`${a} 个主要文明种群正在跨越恒星系扩张`}:n<430?{key:"chemistry",time:t,text:"重元素丰度上升，宜居行星开始形成"}:n<Math.min(...o.map(l=>l.birth),620)?{key:"waiting-life",time:t,text:"宜居世界正在积累复杂化学反应，智慧生命尚未出现"}:n<620?{key:"silence",time:t,text:"文明信号已经沉寂，只剩无人维护的轨道遗迹"}:n<650?{key:"last-stars",time:t,text:"恒星形成早已停止，最后的低质量红矮星仍在极缓慢地消耗燃料"}:n<710?{key:"degenerate",time:t,text:"最后一批红矮星熄灭，恒星残骸仍被星系引力束缚并长期绕核运行"}:n<845?{key:"evaporation",time:t,text:"长期引力近遇持续重分配能量，少数残骸逐个逃离，极少数落向星系中心"}:n<950?{key:"holes",time:t,text:"黑洞通过霍金辐射缓慢蒸发"}:{key:"heatdeath",time:t,text:"最后的黑洞已经蒸发，残余光子持续红移并稀释，可用能量梯度趋近于零"}}function fh(n,t){const e=(r,a,o)=>10**(Math.log10(r)+(Math.log10(a)-Math.log10(r))*o),i=r=>{if(r<1){const a=r*31557600;return a<3600?`${Math.round(a/60)} 分钟`:a<86400?`${(a/3600).toFixed(1)} 小时`:`${(a/86400).toFixed(1)} 天`}return r<1e4?`${Math.max(1,Math.round(r))} 年`:r<1e8?`${(r/1e4).toFixed(r<1e6?1:0)} 万年`:r<1e12?`${(r/1e8).toFixed(r<1e9?2:1)} 亿年`:`10^${Math.log10(r).toFixed(1)} 年`};if(n<18)return`T+${Math.max(.001,e(.001,1,n/18)).toFixed(3)} 秒`;if(n<55)return`T+${Math.max(1,Math.round(e(1,180,(n-18)/37)))} 秒`;if(n<145)return`T+${i(e(180/31557600,38e4,(n-55)/90))}`;if(n<245)return`T+${i(e(38e4,18e7,(n-145)/100))}`;if(n<340)return`T+${i(e(18e7,1e9,(n-245)/95))}`;if(n<470)return`T+${i(e(1e9,138e8,(n-340)/130))}`;const s=t?.cosmicFate;if(s&&Number.isFinite(s.outcomeYears)){if(n>=999)return s.label;const r=Kr((n-470)/(s.onsetAt-470),0,1),a=e(138e8,s.outcomeYears,r);return`T+${i(a)}`}return n<570?`T+${i(e(138e8,1e12,(n-470)/100))}`:n<650?`T+10^${(12+(n-570)/80*2).toFixed(1)} 年`:n<680?`T+10^${(14+(n-650)/30).toFixed(1)} 年`:n<845?`T+10^${Math.round(15+(n-680)/165*23)} 年`:n<950?`T+10^${Math.round(38+(n-845)/105*(t.blackHoleEvaporationExponent-38))} 年`:n<999?`T+10^${t.blackHoleEvaporationExponent} 年以后`:"趋近热寂"}function V0(n){const t=Math.round(n*360);return`${t<190?"青白":t<225?"蓝白":t<250?"靛蓝":"紫白"} · ${t}°`}function W0(n,t){return n===2?"主环 + 碎环":n===3?"无旋臂":n===4?"不规则":`${t} 条`}function X0(n){const t=n*100;return t<1e-4?"< 0.0001%":t<.01?`${t.toFixed(4)}%`:t<1?`${t.toFixed(2)}%`:`${t.toFixed(1)}%`}function $0(n){return n===0?"尚未出现":`${new Intl.NumberFormat("zh-CN").format(n)} 个`}function ph(n){const t=n.lastStarDeathExponent??n.stellarFormationEndExponent;return lt.clamp(dh(10**t,n),478,1e3)}function q0(n){return n>=1?`${n.toFixed(1)} 万亿颗`:`${Math.round(n*1e4)} 亿颗`}function mh(n=R0()){const t=jr(n),e=C0(t),i=un(t),s=Q(i,.38,1.84),r=Q(i,.52,1.76),a=Q(i,.72,1.28),o=Q(i,.82,1.18),c=Q(i,.65,1.45),l=Q(i,.48,.82),d=Q(i,.55,1.75),f=Q(i,1.9,4.4),p=Math.exp(-Math.pow((a-1)/.17,2)-Math.pow((o-1)/.14,2)),m=lt.clamp(r*d/Math.pow(c,.72),.12,2.8),_=Math.max(2,Math.round(118*p*Q(i,.82,1.08))),M=lt.clamp(Q(i,.35,3.2)*m,.08,7.2),h=lt.clamp(12.5-(l-.68)*1.35-(c-1)*.42,11.8,13.25),u=lt.clamp(h+Q(i,.68,1.08),12.8,14.25),b=p*lt.clamp(1-Math.abs(f-2.725)/3.5,.12,1),x=Math.pow(i(),4)*.08*b,g=Math.floor(Q(i,5,16)),A=Math.max(g,Math.floor(M*1e5*x*Q(i,.02,.7))),S=Math.round(Math.pow(10,u-8)/10)*10,T=Math.floor(Q(i,3,7)),R=e%Po.length,v=[.96,.92,.72,.99,.34][R],y=i()<v,P=y&&i()<[.1,.07,.05,.045,.025][R],D=Math.floor(Q(i,97,103)),F=Q(i,.48,.76),I=N0(t,{expansionRate:c,darkEnergyDensity:l});return{seed:t,seedValue:e,speed:s,gravity:r,fineStructure:a,massRatio:o,expansionRate:c,darkEnergyDensity:l,primordialFluctuation:d,cmbTemperature:f,chemistryStability:p,structureEfficiency:m,stellarFormationEndExponent:h,lastStarDeathExponent:u,elements:_,stars:M,lifeProbability:x,civilizations:A,speciesCount:g,lifetime:S,blackHoleEvaporationExponent:D,armCount:T,galaxyType:R,hasCentralBlackHole:y,activeNucleus:P,hue:F,cosmicFate:I}}let bs=null;function Ji(){const n=document.createElement("canvas");n.width=n.height=256;const t=n.getContext("2d"),e=t.createRadialGradient(128,128,82,128,128,128);e.addColorStop(0,"rgba(255,255,255,0)"),e.addColorStop(.72,"rgba(255,255,255,0)"),e.addColorStop(.86,"rgba(255,255,255,.8)"),e.addColorStop(.91,"rgba(255,255,255,.18)"),e.addColorStop(1,"rgba(255,255,255,0)"),t.fillStyle=e,t.fillRect(0,0,256,256);const i=new Xr(n);return i.colorSpace=Fe,i}function Ge(){const n=document.createElement("canvas");n.width=n.height=128;const t=n.getContext("2d"),e=t.createRadialGradient(64,64,0,64,64,64);e.addColorStop(0,"rgba(255,255,255,1)"),e.addColorStop(.08,"rgba(255,230,170,.85)"),e.addColorStop(.35,"rgba(255,190,100,.22)"),e.addColorStop(1,"rgba(0,0,0,0)"),t.fillStyle=e,t.fillRect(0,0,128,128);const i=new Xr(n);return i.colorSpace=Fe,i}function Ce(){if(bs)return bs;const n=document.createElement("canvas");n.width=n.height=64;const t=n.getContext("2d"),e=t.createRadialGradient(32,32,0,32,32,32);return e.addColorStop(0,"rgba(255,255,255,1)"),e.addColorStop(.22,"rgba(255,255,255,.95)"),e.addColorStop(.5,"rgba(255,255,255,.35)"),e.addColorStop(1,"rgba(255,255,255,0)"),t.fillStyle=e,t.fillRect(0,0,64,64),bs=new Xr(n),bs.colorSpace=Fe,bs}let Er=null,br=null,Tr=null;function nl(n){const t=document.createElement("canvas");t.width=1024,t.height=1024;const e=t.getContext("2d");n(e,t.width);const i=new Xr(t);return i.colorSpace=Fe,i.minFilter=ti,i.magFilter=Mn,i}function _n(n,t,e,i,s,r,a=0,o=Math.PI*2){n.beginPath(),n.ellipse(t,e,i,s,r,a,o)}function Tc(){return Er||(Er=nl((n,t)=>{const e=t/2,i=n.createLinearGradient(96,e,t-96,e);i.addColorStop(0,"rgba(255,255,255,0)"),i.addColorStop(.12,"rgba(255,221,174,.18)"),i.addColorStop(.35,"rgba(255,245,222,.76)"),i.addColorStop(.5,"rgba(255,255,255,1)"),i.addColorStop(.66,"rgba(255,232,199,.82)"),i.addColorStop(.88,"rgba(255,179,126,.2)"),i.addColorStop(1,"rgba(255,255,255,0)"),n.save(),n.globalCompositeOperation="lighter",n.filter="blur(34px)",n.strokeStyle=i,n.lineCap="round",n.lineWidth=62,_n(n,e,e+7,360,74,-.1),n.stroke(),n.filter="blur(15px)",n.lineWidth=22,_n(n,e,e+4,325,62,-.1),n.stroke(),n.restore(),n.save(),n.globalCompositeOperation="lighter",n.lineCap="round",n.strokeStyle=i,n.filter="blur(13px)",n.lineWidth=34,_n(n,e-2,e+3,118,164,-.08,Math.PI*1.03,Math.PI*1.98),n.stroke(),n.lineWidth=25,_n(n,e+2,e+4,121,161,-.08,.03,Math.PI*.97),n.stroke(),n.filter="none",n.lineWidth=7,n.strokeStyle="rgba(255,250,232,.92)",_n(n,e-2,e+3,116,160,-.08,Math.PI*1.05,Math.PI*1.95),n.stroke(),n.strokeStyle="rgba(255,221,180,.72)",_n(n,e+2,e+4,119,158,-.08,.07,Math.PI*.93),n.stroke(),n.restore(),n.save(),n.globalCompositeOperation="lighter",n.lineCap="round";for(let a=0;a<12;a++){const o=164+a*16,c=28+a*3.25,l=.2-a*.011;n.strokeStyle=`rgba(255,238,210,${l})`,n.lineWidth=a<4?3.5:2,_n(n,e,e+6,o,c,-.1),n.stroke()}n.restore();const s=n.createRadialGradient(e-18,e-20,6,e,e,105);s.addColorStop(0,"rgba(0,0,0,1)"),s.addColorStop(.78,"rgba(0,0,0,1)"),s.addColorStop(.94,"rgba(1,1,2,.995)"),s.addColorStop(1,"rgba(0,0,0,0)"),n.fillStyle=s,n.fillRect(e-112,e-112,224,224),n.save(),n.globalCompositeOperation="lighter",n.filter="blur(12px)",n.strokeStyle="rgba(255,244,220,.86)",n.lineWidth=24,_n(n,e,e,103,106,-.08),n.stroke(),n.filter="none",n.strokeStyle="rgba(255,255,247,.98)",n.lineWidth=6,_n(n,e,e,102,105,-.08),n.stroke();const r=n.createLinearGradient(130,e+58,t-120,e-32);r.addColorStop(0,"rgba(255,184,126,0)"),r.addColorStop(.2,"rgba(255,207,158,.55)"),r.addColorStop(.43,"rgba(255,251,231,.98)"),r.addColorStop(.66,"rgba(255,244,219,.94)"),r.addColorStop(.9,"rgba(255,166,112,.34)"),r.addColorStop(1,"rgba(255,166,112,0)"),n.strokeStyle=r,n.lineCap="round",n.filter="blur(11px)",n.lineWidth=28,n.beginPath(),n.moveTo(132,e+103),n.bezierCurveTo(318,e+83,638,e-54,908,e-90),n.stroke(),n.filter="none",n.lineWidth=9,n.stroke(),n.restore()}),Er)}function Y0(){return br||(br=nl((n,t)=>{const e=t/2;n.globalCompositeOperation="lighter",n.lineCap="round";for(let i=0;i<18;i++){const s=i/18*Math.PI*2,r=108+i%3*17,a=.11+i%4*.035;n.strokeStyle=`rgba(255,255,245,${.24+i%5*.07})`,n.lineWidth=2+i%3,_n(n,e,e,r,r*.9,-.08,s,s+a),n.stroke()}n.filter="blur(9px)",n.strokeStyle="rgba(255,238,209,.42)",n.lineWidth=10,_n(n,e,e,118,111,-.08,.14,Math.PI*.72),n.stroke()}),br)}function j0(){return Tr||(Tr=nl((n,t)=>{const e=t/2,i=n.createRadialGradient(e,e,44,e,e,430);i.addColorStop(0,"rgba(255,250,232,.7)"),i.addColorStop(.18,"rgba(255,226,190,.38)"),i.addColorStop(.42,"rgba(255,180,119,.1)"),i.addColorStop(.72,"rgba(255,139,84,.025)"),i.addColorStop(1,"rgba(255,255,255,0)"),n.fillStyle=i,n.fillRect(0,0,t,t)}),Tr)}function Ir({color:n=16762255,tilt:t=0,phase:e=0,visualScale:i=1,intensity:s=1}={}){const r=new We,a=new ce(new oe({map:j0(),color:n,transparent:!0,opacity:0,depthWrite:!1,blending:Ft}));a.scale.setScalar(2.65*i);const o=new ce(new oe({map:Tc(),color:n,transparent:!0,opacity:0,alphaTest:.006,depthWrite:!1,blending:bi,rotation:t}));o.scale.setScalar(2.2*i);const c=new ce(new oe({map:Y0(),color:n,transparent:!0,opacity:0,depthWrite:!1,blending:Ft,rotation:t}));c.scale.setScalar(2.2*i);const l=new ce(new oe({map:Tc(),color:n,transparent:!0,opacity:0,alphaTest:.006,depthWrite:!1,blending:Ft,rotation:t}));l.scale.setScalar(2.2*i);const d=new hn(new qr(.235*i,32,20),new Vs({color:0,transparent:!0,opacity:0}));return d.renderOrder=2,a.renderOrder=1,o.renderOrder=3,l.renderOrder=4,c.renderOrder=5,r.add(a,d,o,l,c),r.userData.blackHoleVisual={halo:a,horizon:d,accretion:o,bloom:l,flow:c,intensity:0,visibility:1,baseTilt:t,phase:e,visualScale:i},Zn(r,s),r}function Zn(n,t,e=1){const i=n.userData.blackHoleVisual;if(!i)return;const s=lt.clamp(t,0,1.4),r=lt.clamp(e,0,1);i.intensity=s,i.visibility=r,i.horizon.material.opacity=lt.smoothstep(s,0,.24)*r,i.horizon.visible=s*r>.001,i.accretion.material.opacity=Math.min(1,s*.92)*r,i.bloom.material.opacity=Math.min(.34,s*.27)*r,i.flow.material.opacity=Math.min(.82,s*.5)*r,i.halo.material.opacity=Math.min(.7,s*.42)*r}function Qi(n,t,e=1){const i=n.userData.blackHoleVisual;if(!i||i.intensity<=0)return;const s=t*.001,r=1+Math.sin(s*.72+i.phase)*.035,a=.82+Math.sin(s*1.7+i.phase*1.9)*.18;i.halo.scale.setScalar(2.65*i.visualScale*r),i.halo.material.opacity=Math.min(.7,i.intensity*(.36+a*.09))*i.visibility,i.bloom.material.opacity=Math.min(.36,i.intensity*(.22+a*.07))*i.visibility,i.flow.material.rotation=i.baseTilt+e*Math.sin(s*.44+i.phase)*.055,i.flow.material.opacity=Math.min(.82,i.intensity*(.38+a*.15))*i.visibility}const Fa=220,Na=340;function gh(n){if(n<=Fa)return 0;const t=Na-Fa;if(n<Na){const e=(n-Fa)/t;return t*(e**3-.5*e**4)}return t*.5+n-Na}function _h(n,t){return gh(n)*t}function K0(n,{civilizationSimulation:t,civilizationData:e,civilizationGroups:i}){if(!n||!t)return;const s=new Uint16Array(e.length);n.owners.forEach((r,a)=>{if(r<0)return;const o=s[r]++;e[r].hostRemnantIndices[o]=t.habitatRemnantIndices[a]}),e.forEach((r,a)=>{r.displayCount=s[a],i[a].geometry.setDrawRange(0,s[a])})}function Z0({clickableStars:n,stellarRemnants:t,remnantDynamics:e,cosmicPosition:i,civilizationData:s,civilizationGroups:r}){if(!t)return;const a=t.geometry.attributes.position.array,o=n?.geometry.attributes.position.array,c=o||a,l=p=>o?e.sourceIndices[p]*3:p*3,d=new B,f=(p,m,_,M,h)=>{const u=p*3,b=Math.min(i,e.escapeAt[p]),x=_h(b,e.orbitRates[p]),g=Math.cos(x),A=Math.sin(x),S=e.axes[u],T=e.axes[u+1],R=e.axes[u+2],v=S*m+T*_+R*M;h.set(m*g+(T*M-R*_)*A+S*v*(1-g),_*g+(R*m-S*M)*A+T*v*(1-g),M*g+(S*_-T*m)*A+R*v*(1-g))};s.forEach((p,m)=>{const _=r[m];if(!_)return;const M=_.geometry.attributes.position.array;for(let u=0;u<p.displayCount;u++){const b=p.hostRemnantIndices[u],x=l(b),g=u*3;if(f(b,p.hostOffsets[g],p.hostOffsets[g+1],p.hostOffsets[g+2],d),M[g]=c[x]+d.x,M[g+1]=c[x+1]+d.y,M[g+2]=c[x+2]+d.z,p.highDimensional&&i>=p.ascensionAt){const A=lt.smoothstep(i,p.ascensionAt,p.ascensionAt+34),S=u*1.618+i*.035;M[g]+=Math.sin(S)*A*.7,M[g+1]+=Math.cos(S*.73)*A*.42,M[g+2]+=Math.sin(S*.51+2.1)*A*.7}}_.geometry.attributes.position.needsUpdate=!0;const h=l(p.homeRemnantIndex);if(f(p.homeRemnantIndex,p.homeOffset.x,p.homeOffset.y,p.homeOffset.z,d),p.home.set(c[h]+d.x,c[h+1]+d.y,c[h+2]+d.z),p.highDimensional&&i>=p.ascensionAt){const u=lt.smoothstep(i,p.ascensionAt,p.ascensionAt+34),b=m*2.17+i*.035;p.home.x+=Math.sin(b)*u*.7,p.home.y+=Math.cos(b*.73)*u*.42,p.home.z+=Math.sin(b*.51+2.1)*u*.7}})}const xh=Math.PI*2,J0=24;function Q0(n,t,e){return Math.min(e,Math.max(t,n))}function As(n,t,e){if(e<=t)return n>=e?1:0;const i=Q0((n-t)/(e-t),0,1);return i*i*(3-2*i)}function vh(n,t){const e=t.persistUntil??t.start+t.duration,i=t.persistenceFadeDuration??J0;return 1-As(n,e,e+i)}function Ei(n,t){let e=n+1^t;return e=Math.imul(e^e>>>16,569420461),e=Math.imul(e^e>>>15,1935289751),((e^e>>>15)>>>0)/4294967296}function t_(n,t,e,i,s,r,a,o,c){const l=Math.cos(c),d=Math.sin(c),f=r*e+a*i+o*s;n[t]=e*l+(a*s-o*i)*d+r*f*(1-l),n[t+1]=i*l+(o*e-r*s)*d+a*f*(1-l),n[t+2]=s*l+(r*i-a*e)*d+o*f*(1-l)}function e_(n,t){const e=n.length/3,i=new Float32Array(n.length),s=new Float32Array(e),r=t.galaxyType<=2,a=t.hasCentralBlackHole?1.35:.16,o=t.seedValue^1831565813,c=1;for(let l=0;l<e;l++){const d=l*3,f=n[d],p=n[d+1],m=n[d+2],_=Math.max(.24,Math.hypot(f,p,m));if(r){let b=(Ei(l,o+29)-.5)*.035;const x=1;let g=(Ei(l,o+47)-.5)*.035;const A=Math.hypot(b,x,g);b/=A,g/=A,i.set([b,x/A,g],d)}else{const b=Ei(l,o+71)*xh,x=.08+Ei(l,o+97)*.54,g=Math.sin(x);i.set([Math.cos(b)*g,Math.cos(x),Math.sin(b)*g],d)}const M=a/Math.pow(_+.12,3),h=.72/(_+1.8),u=.0055+.0155*Math.sqrt(t.gravity*(M+h));s[l]=c*Math.min(.095,u)}return{axes:i,orbitRates:s,centralMass:a}}function n_(n,t,e,i){const s=gh(n);for(let r=0;r<i.orbitRates.length;r++){const a=r*3;t_(e,a,t[a],t[a+1],t[a+2],i.axes[a],i.axes[a+1],i.axes[a+2],s*i.orbitRates[r])}}function i_(n,t,{seedValue:e,eventIndex:i,influenceRadius:s=4.8,maxStars:r=2600}){const a=[];for(let h=0;h<n.length/3;h++){const u=h*3,b=Math.hypot(n[u]-t.x,n[u+1]-t.y,n[u+2]-t.z);b<=s&&a.push({index:h,distance:b})}a.sort((h,u)=>h.distance-u.distance);const o=Math.min(r,a.length),c=new Uint16Array(o),l=new Float32Array(o),d=a.length/Math.max(1,o),f=e^Math.imul(i+1,73244475);for(let h=0;h<o;h++){const u=Ei(h,f)*Math.min(1,d),b=h===0?0:Math.min(a.length-1,Math.floor(h*d+u));c[h]=a[b].index,l[h]=a[b].distance}const p=Ei(i,f+131)*xh,m=(Ei(i,f+173)-.5)*.5,_=Math.cos(m),M=new Float32Array([Math.cos(p)*Math.sin(m),_,Math.sin(p)*Math.sin(m)]);return{indices:c,restDistances:l,axis:M,influenceRadius:s,softening:.24,captureRadius:.42}}function s_(n,t,e,i,s){const r=i.gravityField;if(!r||n<i.start)return;const o=Math.min(n,i.persistUntil)-i.start,c=As(n,i.start,i.start+4.5),l=As(n,i.impactAt-1.2,i.impactAt+2.4),d=vh(n,i),f=1-i.radiatedMassFraction*l,p=r.axis[0],m=r.axis[1],_=r.axis[2];for(let M=0;M<r.indices.length;M++){const u=r.indices[M]*3,b=t[u]-s.x,x=t[u+1]-s.y,g=t[u+2]-s.z,A=Math.max(.025,Math.hypot(b,x,g)),S=r.restDistances[M],T=1-As(S,r.influenceRadius*.34,r.influenceRadius);if(T<=0)continue;const R=Math.sqrt(A*A+r.softening*r.softening),v=.105*Math.sqrt(f/Math.pow(R,3)),y=1+(1-l)*.22*Math.sin(o*.72+S*2.3),P=o*v*y*c*T,D=Math.cos(P),F=Math.sin(P),I=p*b+m*x+_*g;let U=b*D+(m*g-_*x)*F+p*I*(1-D),O=x*D+(_*b-p*g)*F+m*I*(1-D),z=g*D+(p*x-m*b)*F+_*I*(1-D);const N=Math.min(.14,.055/(S+.24)),Z=1+Math.sin(P*.63+S*3.1)*N*c*T;if(U*=Z,O*=Z,z*=Z,S<r.captureRadius){const Y=S/r.captureRadius*11,it=As(n,i.impactAt+Y,i.impactAt+Y+13),vt=1-it*.965;U*=vt,O*=vt,z*=vt;const Rt=1-it;e[u]*=Rt,e[u+1]*=Rt,e[u+2]*=Rt}t[u]=s.x+b+(U-b)*d,t[u+1]=s.y+x+(O-x)*d,t[u+2]=s.z+g+(z-g)*d}}const r_=Math.PI*2,zt=(n,t,e)=>Math.min(e,Math.max(t,n)),Mh=(n,t,e)=>{if(e<=t)return n>=e?1:0;const i=zt((n-t)/(e-t),0,1);return i*i*(3-2*i)},Se=(n,t,e)=>10**Q(n,t,e);function Oa(n,t,e,i){return t<=1?[e]:Array.from({length:t},(s,r)=>{const a=e+(i-e)*r/(t-1),o=r===0?0:Q(n,-.025,.025);return zt(a+o,e,i)})}function a_(n,t,e){const i=un(t.seed,12011+e*977),s=Math.sqrt(t.gravity);if(n.type==="pair-instability-supernova"){const r=Q(i,140,255),a=Q(i,64,Math.min(133,r*.54)),o=zt(4+Math.pow((a-64)/69,1.7)*72,4,76),c=zt(.04+Math.pow((a-64)/69,2.2)*38,.04,38);return{model:"pair-instability",progenitorMass:r,heliumCoreMass:a,explosionEnergyBethe:o,nickelMass:c,ejectaMass:r*Q(i,.82,.96),ejectaVelocityKms:Q(i,7e3,14500)*Math.pow(o/20,.18),noRemnant:!0,rangeScale:zt(.82+Math.sqrt(o/20)*.3,.9,1.62),civilizationScale:zt(.76+Math.sqrt(o/20)*.24,.86,1.48),kickScale:zt(.8+o/120,.84,1.42)}}if(n.type==="type-ia-supernova"){const r=i()<.46?"double-degenerate":"single-degenerate",a=r==="double-degenerate"?Q(i,1.22,1.58):Q(i,1.34,1.41),o=Q(i,.38,.86),c=Q(i,.85,1.55)*(1+(o-.6)*.25);return{model:"thermonuclear-supernova",channel:r,whiteDwarfMass:a,nickelMass:o,explosionEnergyBethe:c,ejectaMass:a,ejectaVelocityKms:Q(i,9e3,14500)*Math.sqrt(c),noRemnant:!0,rangeScale:zt(.84+c*.14,.92,1.16),civilizationScale:zt(.78+o*.28,.86,1.12),kickScale:zt(.84+c*.1,.9,1.08)}}if(n.type==="core-collapse-supernova"){const r=Q(i,8.2,31),a=zt((r-8)/23+Q(i,-.16,.16),0,1),o=a>.7?"black-hole":"neutron-star",c=o==="black-hole"?Q(i,4.8,Math.min(13.5,r*.55)):Q(i,1.18,2.18),l=Q(i,.45,2.15)*(1-a*.28);return{model:"core-collapse",progenitorMass:r,explosionEnergyBethe:l,ejectaMass:Math.max(.8,r-c-Q(i,.4,2.1)),ejectaVelocityKms:Q(i,4500,11500)*Math.sqrt(l),nickelMass:Q(i,.025,.13)*l,neutrinoEnergyErg:Se(i,52.9,53.5),remnantType:o,remnantMass:c,natalKickKms:o==="neutron-star"?Q(i,80,720):Q(i,15,180),persistentRemnant:!0,gravityStrength:zt(c/8,.2,1.35),gravityRadius:Q(i,.42,.72),rangeScale:zt(.78+Math.sqrt(l)*.2,.86,1.22),civilizationScale:zt(.72+l*.17,.8,1.16),kickScale:zt(.76+l*.18,.82,1.18)}}if(n.type==="superluminous-supernova"){const r=i()<.64?"magnetar":"circumstellar-interaction",a=Q(i,22,78),o=Q(i,3,18),c=r==="magnetar"&&a<48?"magnetar":"black-hole",l=c==="magnetar"?Q(i,1.55,2.35):Q(i,5.5,18);return{model:"superluminous-supernova",engine:r,progenitorMass:a,explosionEnergyBethe:o,ejectaMass:Q(i,5,Math.max(7,a*.62)),ejectaVelocityKms:Q(i,8e3,18500)*Math.pow(o/8,.18),peakLuminosityErgS:Se(i,43.7,45),magnetarPeriodMs:r==="magnetar"?Q(i,1.1,4.8):null,magneticFieldGauss:r==="magnetar"?Se(i,13.8,15.2):null,remnantType:c,remnantMass:l,persistentRemnant:!0,gravityStrength:zt(l/10,.24,1.45),gravityRadius:Q(i,.48,.78),rangeScale:zt(.94+Math.sqrt(o/8)*.34,1.05,1.52),civilizationScale:zt(.88+Math.log10(o)*.24,.96,1.38),kickScale:zt(.86+o/42,.92,1.32)}}if(n.type==="young-pulsar-birth"){const r=Q(i,1.18,2.12),a=Se(i,1.05,2.22),o=Se(i,11.8,13.55),c=39e30*Math.pow(o/1e12,2)*Math.pow(1e3/a,4);return{model:"young-pulsar",neutronStarMass:r,spinPeriodMs:a,magneticFieldGauss:o,spinDownLuminosityErgS:c,natalKickKms:Q(i,90,820),beamOpeningDeg:Q(i,5,18),persistentRemnant:!0,gravityStrength:zt(r/3.6,.28,.62),gravityRadius:Q(i,.34,.54),rangeScale:zt(.76+Math.log10(c/1e36+1)*.16,.78,1.22),civilizationScale:zt(.72+Math.log10(c/1e36+1)*.18,.75,1.18),kickScale:0}}if(n.type==="gamma-ray-burst"){const r=Q(i,22,72),a=Se(i,51.4,54.1),o=Q(i,3.2,11.5),c=o*Math.PI/180;return{model:"collapsar-jet",progenitorMass:r,isotropicEnergyErg:a,trueJetEnergyErg:a*(1-Math.cos(c)),jetOpeningDeg:o,lorentzFactor:Q(i,90,620),durationSeconds:Se(i,.35,2.15),remnantMass:Q(i,3.4,15),remnantType:"black-hole",rangeScale:zt(.78+(Math.log10(a)-51)*.17,.86,1.48),civilizationScale:zt(.72+(Math.log10(a)-51)*.2,.82,1.5),kickScale:0}}if(n.type==="quasar-awakening"){const r=Se(i,6.5,9.2)*zt(t.massRatio,.7,1.6),a=Se(i,-1.15,.24),o=Q(i,.07,.22);return{model:"quasar-duty-cycle",blackHoleMass:r,eddingtonRatio:a,radiativeEfficiency:o,accretionRateSolarPerYear:2.2*r/1e8*a*(.1/o),jetLorentzFactor:Q(i,3,18),jetOpeningDeg:Q(i,4,15),activeDurationMyr:Se(i,-.2,1.7),pulsePhases:[.32,.58,.76],pulseWeights:[1,.72,.46],recoveryDuration:Q(i,18,32),recoveryFraction:Q(i,.22,.38),temporaryOnly:!0,rangeScale:zt(.8+Math.sqrt(a)*.34,.84,1.38),civilizationScale:zt(.72+Math.sqrt(a)*.3,.78,1.34),kickScale:0}}if(n.type==="magnetar-flare"){const r=Se(i,14.2,15.35),a=Se(i,44.2,46.4),o=2+Math.floor(i()*4);return{model:"magnetar-giant-flare",magneticFieldGauss:r,energyErg:a,spikeDurationSeconds:Se(i,-2.7,-.55),tailPeriodSeconds:Q(i,2.2,11.8),pulsePhases:Oa(i,o,.34,.76),pulseWeights:Array.from({length:o},(c,l)=>Math.pow(.68,l)),recoveryDuration:Q(i,12,28),recoveryFraction:Q(i,.36,.62),temporaryOnly:!0,rangeScale:zt(.76+(Math.log10(a)-44)*.18,.8,1.34),civilizationScale:zt(.68+(Math.log10(a)-44)*.22,.72,1.42),kickScale:0}}if(n.type==="pulsar-glitch"){const r=Se(i,1.3,3),a=Se(i,-9.2,-5.1);return{model:"pulsar-glitch",spinPeriodMs:r,fractionalFrequencyJump:a,recoveryFraction:Q(i,.08,.82),recoveryDays:Se(i,.4,2.9),pulsePhases:[.46,.56],pulseWeights:[1,.24],temporaryOnly:!0,rangeScale:1,civilizationScale:1,kickScale:0}}if(n.type==="stellar-black-hole-merger"||n.type==="late-black-hole-merger"){const r=n.type==="late-black-hole-merger",a=r?Se(i,2.7,5.4):Q(i,18,86),o=r?Se(i,2.5,Math.log10(a)):Q(i,7,Math.min(70,a)),c=a+o,l=a*o/(c*c),d=Q(i,-.82,.94),f=Q(i,-.82,.94),p=(a*d+o*f)/c,m=zt(.035+l*.11+Math.max(0,p)*.018,.028,.09),_=zt(Q(i,80,r?1750:1050)*(1+Math.abs(d-f)*.52)*(.72+(1-o/a)*.5),40,3200);return{model:"black-hole-binary",massA:a,massB:o,chirpMass:Math.pow(a*o,3/5)/Math.pow(c,1/5),spinA:d,spinB:f,effectiveSpin:p,radiatedMassFraction:m,remnantMass:c*(1-m),recoilKms:_,gasRich:!r&&i()<.38,persistentRemnant:!1,rangeScale:1,civilizationScale:1,kickScale:0}}if(n.type==="neutron-star-kilonova"){const r=Q(i,1.18,1.92),a=Q(i,1.12,Math.min(1.82,r)),o=r+a,c=Math.pow(r*a,3/5)/Math.pow(o,1/5),l=1-a/r,d=Q(i,.035,.075)*s,f=zt(Q(i,.018,.072)*(1+l*2.4),.012,.13),p=zt(Q(i,.12,.27)*s,.09,.34),m=2.72+(t.massRatio-1)*.28,_=o-d>m?"black-hole":"massive-neutron-star";return{model:"compact-merger",massA:r,massB:a,chirpMass:c,ejectaMass:f,ejectaVelocityC:p,radiatedMassFraction:d/o,jetOpeningDeg:Q(i,5,16),remnantMass:o-d-f,remnantType:_,persistentRemnant:!0,gravityStrength:zt((o-2.2)/1.5,.32,1.25),gravityRadius:Q(i,.62,.9),rangeScale:zt(.82+f*5+p,.82,1.42),civilizationScale:zt(.72+p*1.7,.78,1.3),kickScale:zt(.7+p*1.5,.8,1.25)}}if(n.type==="tidal-disruption-event"){const r=Q(i,.35,3.2),a=Math.pow(r,r<1?.82:.57),o=8e7*Math.pow(a,1.5)/Math.sqrt(r),c=Math.min(Se(i,5.8,8.05)*t.gravity,o),l=Q(i,.72,2.15),d=a*Math.cbrt(c/r),f=41*Math.sqrt(c/1e6)*Math.pow(r,-.5)*Math.pow(a,1.5)/Math.pow(l,3),p=Q(i,.43,.57),m=zt(Q(i,.6,3.8)*l,.5,6.5);return{model:"tidal-disruption",blackHoleMass:c,hillsMass:o,starMass:r,starRadius:a,penetration:l,tidalRadiusSolar:d,fallbackDays:f,boundFraction:p,peakEddingtonRatio:m,fallbackExponent:-5/3,unboundVelocityKms:Q(i,5500,16e3)*Math.sqrt(l),pulsePhases:[.58,.74],pulseWeights:[1,.42],recoveryDuration:Q(i,18,32),recoveryFraction:.28,rangeScale:zt(.76+Math.log10(m+1)*.42,.78,1.25),civilizationScale:zt(.62+Math.log10(m+1)*.5,.68,1.18),kickScale:zt(.72+l*.15,.82,1.08)}}if(n.type==="failed-supernova"){const r=Q(i,18,42),a=Q(i,.025,.16)/s,o=Q(i,.16,.46),c=r*(1-a)-o;return{model:"failed-collapse",progenitorMass:r,ejectedEnvelopeFraction:a,neutrinoMassLoss:o,remnantMass:c,dustOpticalDepth:Q(i,1.2,5.4),fallbackFraction:zt(1-a-o/r,.72,.97),persistentRemnant:!0,remnantType:"black-hole",gravityStrength:zt(c/24,.45,1.5),gravityRadius:Q(i,.58,.88),rangeScale:zt(.76+a*2.1,.78,1.08),civilizationScale:zt(.6+a*2.4,.65,1.02),kickScale:zt(.45+a*2.8,.5,.88)}}if(n.type==="red-dwarf-superflare"){const r=Se(i,34.4,36.25),a=2+Math.floor(i()*4),o=Math.log10(r)-34;return{model:"magnetic-flare-storm",energyErg:r,stormCount:a,pulsePhases:Oa(i,a,.38,.78),pulseWeights:Array.from({length:a},(c,l)=>Math.pow(.76,l)),cmeVelocityKms:Q(i,900,4200)*s,ultravioletFraction:Q(i,.12,.34),atmosphereLossFraction:zt(Q(i,.006,.045)*o,.004,.14),recoveryDuration:Q(i,16,34),recoveryFraction:Q(i,.48,.72),temporaryOnly:!0,rangeScale:zt(.72+o*.13,.78,1.22),civilizationScale:zt(.55+o*.22,.62,1.3),kickScale:0}}if(n.type==="classical-nova"){const r=Q(i,.72,1.34),a=Se(i,-10.1,-8.15),o=22e-6*Math.pow(1.05/r,3.2),c=o/a,l=zt(Math.round(4.4-Math.log10(c)*.58),2,4);return{model:"recurrent-nova",whiteDwarfMass:r,accretionRate:a,ignitionMass:o,recurrenceYears:c,ejectaMass:o*Q(i,.62,1.08),ejectaVelocityKms:Q(i,850,3900)*Math.sqrt(r),outburstCount:l,pulsePhases:Oa(i,l,.14,.78),pulseWeights:Array.from({length:l},(d,f)=>Math.pow(.7,f)),recoveryDuration:Q(i,7,15),recoveryFraction:.74,temporaryOnly:!0,rangeScale:zt(.72+r*.18,.78,1.02),civilizationScale:zt(.58+r*.2,.68,.92),kickScale:0}}return null}function Ac(n,t){return t?{...n,radius:n.radius*(t.rangeScale||1),maxStars:Math.max(1,Math.round(n.maxStars*(t.rangeScale||1))),kick:n.kick*(t.kickScale??1),civilization:n.civilization*(t.civilizationScale||1),range:n.range*(t.rangeScale||1),beamAngle:t.jetOpeningDeg||t.beamOpeningDeg?(t.jetOpeningDeg||t.beamOpeningDeg)*Math.PI/180:n.beamAngle}:n}function o_(n){const t=n.simulation;if(!t)return null;if(t.model==="compact-merger"){const e=t.remnantType==="black-hole"?"黑洞":"大质量中子星";return`两颗 ${t.massA.toFixed(2)} 与 ${t.massB.toFixed(2)} M☉ 中子星并合，抛出 ${t.ejectaMass.toFixed(3)} M☉、约 ${(t.ejectaVelocityC*100).toFixed(0)}% 光速的物质，留下 ${t.remnantMass.toFixed(2)} M☉ ${e}`}if(t.model==="tidal-disruption")return`${t.starMass.toFixed(1)} M☉ 恒星以穿透因子 β=${t.penetration.toFixed(2)} 掠过约 ${(t.blackHoleMass/1e6).toFixed(1)}×10⁶ M☉ 黑洞，束缚碎片在约 ${Math.round(t.fallbackDays)} 天后开始回落`;if(t.model==="failed-collapse")return`${t.progenitorMass.toFixed(1)} M☉ 恒星仅抛出约 ${(t.ejectedEnvelopeFraction*100).toFixed(1)}% 外层，回落物质形成约 ${t.remnantMass.toFixed(1)} M☉ 黑洞`;if(t.model==="magnetic-flare-storm")return`${t.stormCount} 次耀斑组成约 10^${Math.log10(t.energyErg).toFixed(1)} erg 的爆发风暴，CME 速度约 ${Math.round(t.cmeVelocityKms)} km/s，近轨行星大气随后逐步恢复`;if(t.model==="recurrent-nova")return`${t.whiteDwarfMass.toFixed(2)} M☉ 白矮星以 ${t.accretionRate.toExponential(1)} M☉/年吸积，模型复发周期约 ${Math.round(t.recurrenceYears).toLocaleString("zh-CN")} 年，本段显示 ${t.outburstCount} 次爆发`;if(t.model==="pair-instability")return`${t.progenitorMass.toFixed(0)} M☉ 巨星的 ${t.heliumCoreMass.toFixed(0)} M☉ 氦核触发成对不稳定，释放约 ${t.explosionEnergyBethe.toFixed(1)} Bethe，并完全解体、不留致密残骸`;if(t.model==="thermonuclear-supernova")return`${t.channel==="double-degenerate"?"双白矮星并合":"伴星吸积"}使 ${t.whiteDwarfMass.toFixed(2)} M☉ 白矮星热核失控，合成约 ${t.nickelMass.toFixed(2)} M☉ 镍-56，并完全解体`;if(t.model==="core-collapse"){const e=t.remnantType==="black-hole"?"黑洞":"中子星";return`${t.progenitorMass.toFixed(1)} M☉ 恒星以约 ${t.explosionEnergyBethe.toFixed(2)} Bethe 爆发，抛出 ${t.ejectaMass.toFixed(1)} M☉ 物质，留下 ${t.remnantMass.toFixed(2)} M☉ ${e}`}if(t.model==="superluminous-supernova"){const e=t.engine==="magnetar"?`${t.magnetarPeriodMs.toFixed(1)} ms 初始周期磁星`:"致密星周物质相互作用";return`${t.progenitorMass.toFixed(0)} M☉ 前身星由${e}持续供能，峰值光度约 10^${Math.log10(t.peakLuminosityErgS).toFixed(1)} erg/s，留下 ${t.remnantMass.toFixed(1)} M☉ ${t.remnantType==="black-hole"?"黑洞":"磁星"}`}return t.model==="young-pulsar"?`${t.neutronStarMass.toFixed(2)} M☉ 中子星以 ${t.spinPeriodMs.toFixed(1)} ms 周期自转，表面磁场约 10^${Math.log10(t.magneticFieldGauss).toFixed(1)} G，并以约 ${Math.round(t.natalKickKms)} km/s 获得诞生踢速`:t.model==="collapsar-jet"?`${t.progenitorMass.toFixed(0)} M☉ 巨星坍缩为约 ${t.remnantMass.toFixed(1)} M☉ 黑洞，产生张角 ${t.jetOpeningDeg.toFixed(1)}°、洛伦兹因子约 ${Math.round(t.lorentzFactor)} 的喷流，持续约 ${t.durationSeconds.toFixed(1)} 秒`:t.model==="quasar-duty-cycle"?`约 ${(t.blackHoleMass/1e6).toFixed(1)}×10⁶ M☉ 中央黑洞达到 ${(t.eddingtonRatio*100).toFixed(0)}% 爱丁顿吸积率，每年吸积约 ${t.accretionRateSolarPerYear.toFixed(2)} M☉，活动期约 ${t.activeDurationMyr.toFixed(1)} 百万年`:t.model==="magnetar-giant-flare"?`约 10^${Math.log10(t.magneticFieldGauss).toFixed(1)} G 磁场重排，释放约 10^${Math.log10(t.energyErg).toFixed(1)} erg；初始硬脉冲持续 ${t.spikeDurationSeconds.toFixed(3)} 秒并伴随衰减尾波`:t.model==="pulsar-glitch"?`${t.spinPeriodMs.toFixed(1)} ms 脉冲星的自转频率跃增约 ${t.fractionalFrequencyJump.toExponential(1)}，其中 ${(t.recoveryFraction*100).toFixed(0)}% 在约 ${Math.round(t.recoveryDays)} 天内恢复`:t.model==="black-hole-binary"?`${t.massA.toFixed(1)} 与 ${t.massB.toFixed(1)} M☉ 黑洞并合，约 ${(t.radiatedMassFraction*100).toFixed(1)}% 总质量转化为引力波，形成 ${t.remnantMass.toFixed(1)} M☉ 黑洞并以约 ${Math.round(t.recoilKms)} km/s 反冲${t.gasRich?"，周围气体产生短暂余辉":""}`:null}function yh(n,t){if(!t.simulation?.persistentRemnant||n<t.impactAt)return 0;const e=t.persistUntil??845,i=t.persistenceFadeDuration??24;return 1-Mh(n,e,e+i)}function wc(n,t){let e=n+1^t;return e=Math.imul(e^e>>>16,569420461),e=Math.imul(e^e>>>15,1935289751),((e^e>>>15)>>>0)/4294967296}function l_(n,t,e,i,s){if(!e?.gravityStrength||!e.persistentRemnant)return null;const r=e.gravityRadius||.7,a=[];for(let M=0;M<n.length/3;M++){const h=M*3,u=Math.hypot(n[h]-t.x,n[h+1]-t.y,n[h+2]-t.z);u<=r&&a.push({index:M,distance:u})}a.sort((M,h)=>M.distance-h.distance);const o=Math.min(180,a.length),c=new Uint16Array(o),l=new Float32Array(o),d=a.length/Math.max(1,o);for(let M=0;M<o;M++){const h=a[Math.min(a.length-1,Math.floor(M*d))];c[M]=h.index,l[M]=h.distance}const f=i^Math.imul(s+1,668265261),p=wc(s,f)*r_,m=(wc(s+11,f+37)-.5)*.56,_=Math.cos(m);return{indices:c,restDistances:l,influenceRadius:r,strength:e.gravityStrength,axis:new Float32Array([Math.cos(p)*Math.sin(m),_,Math.sin(p)*Math.sin(m)])}}function c_(n,t,e,i){const s=e.transientGravityField;if(!s||n<e.impactAt)return;const r=yh(n,e);if(r<=0)return;const a=Math.min(n,e.persistUntil??845)-e.impactAt,o=s.axis[0],c=s.axis[1],l=s.axis[2];for(let d=0;d<s.indices.length;d++){const f=s.indices[d];if(f===e.sourceIndex)continue;const p=f*3,m=t[p]-i.x,_=t[p+1]-i.y,M=t[p+2]-i.z,h=Math.max(.08,s.restDistances[d]),u=1-Mh(h,s.influenceRadius*.35,s.influenceRadius);if(u<=0)continue;const b=a*.018*Math.sqrt(s.strength/Math.pow(h+.18,3))*u,x=Math.cos(b),g=Math.sin(b),A=o*m+c*_+l*M,S=m*x+(c*M-l*_)*g+o*A*(1-x),T=_*x+(l*m-o*M)*g+c*A*(1-x),R=M*x+(o*_-c*m)*g+l*A*(1-x);t[p]=i.x+m+(S-m)*r,t[p+1]=i.y+_+(T-_)*r,t[p+2]=i.z+M+(R-M)*r}}function h_(n,t){const{mode:e,epochEffectsGroup:i,primordialParticles:s,primordialFactors:r,primordialDirections:a,expansionStreaks:o,expansionDirections:c,bangCore:l,shockwaves:d,renderer:f,scene:p,clickableStars:m,originalGalaxyPositions:_,stellarGravityState:M,universe:h,transition:u,galaxyGroup:b,starDeathThresholds:x,originalGalaxyColors:g,cosmicEvents:A,remnantGroup:S,stellarRemnants:T,originalRemnantPositions:R,remnantDynamics:v,blackHoleRemnants:y,heatDeathGroup:P,coldPhotons:D,originalPhotonPositions:F,originalPhotonColors:I,cosmicFateGroup:U,fateBubble:O,fateGlow:z}=t,N=h.cosmicFate,Z=N&&N.type!=="heat-death",Y=Z?lt.smoothstep(n,N.onsetAt,1e3):0,it=n<150&&e==="explorer";if(i.visible=it,it&&s){const J=lt.smoothstep(n,0,145),ht=lt.smoothstep(n,0,55),ot=lt.smoothstep(n,55,145),Xt=.06+Math.pow(ht,.62)*32+ot*7,st=s.geometry.attributes.position.array;for(let C=0;C<r.length;C++){const E=Xt*r[C];st[C*3]=a[C*3]*E,st[C*3+1]=a[C*3+1]*E,st[C*3+2]=a[C*3+2]*E}s.geometry.attributes.position.needsUpdate=!0,s.material.opacity=.98*(1-lt.smoothstep(n,112,150)),s.material.size=.3-J*.17;const gt=o.geometry.attributes.position.array;for(let C=0;C<c.length/4;C++){const E=c[C*4+3],H=(.04+Math.pow(ht,.5)*31+ot*5)*E,K=Math.max(0,H-(1.2+J*5.5)*E);for(let nt=0;nt<3;nt++){const $=c[C*4+nt];gt[C*6+nt]=$*K,gt[C*6+3+nt]=$*H}}o.geometry.attributes.position.needsUpdate=!0,o.material.opacity=.68*lt.smoothstep(n,1.5,8)*(1-lt.smoothstep(n,48,82));const Wt=1-lt.smoothstep(n,7,34),qt=.7+Math.pow(ht,.46)*18;l.material.opacity=Wt,l.scale.set(qt,qt,1),d.forEach((C,E)=>{const H=3+E*6,K=52+E*7,nt=lt.clamp((n-H)/K,0,1),$=.9+Math.pow(nt,.72)*(39+E*5);C.scale.set($,$,1),C.material.opacity=Math.sin(nt*Math.PI)*(.24-E*.045)})}const vt=new kt(328968),Rt=vt.clone();if(n<70){const J=lt.smoothstep(n,0,70);Rt.lerpColors(new kt(2756872),vt,J),f.toneMappingExposure=1.15+(1-J)*2.2}else if(Z&&Y>0){const J={"big-rip":new kt(463652),"big-crunch":new kt(2492422),"vacuum-decay":new kt(1444389)};Rt.lerpColors(vt,J[N.type],Y*.72),f.toneMappingExposure=N.type==="big-crunch"?1.15+Y*1.45:1.15-Y*.38}else if(n>950){const J=lt.smoothstep(n,950,1e3);Rt.lerpColors(vt,new kt(197898),J*.32),f.toneMappingExposure=1.15}else f.toneMappingExposure=1.15;if(f.setClearColor(Rt,1),p.fog.color.copy(Rt),!m||!_)return;const et=ph(h),tt=lt.smoothstep(n,220,340),W=1-lt.smoothstep(n,et-75,et+10);m.material.opacity=tt*.9,m.material.size=.09,u||b.scale.setScalar(1);const X=m.geometry.attributes.position.array,rt=m.geometry.attributes.color.array;M&&n_(n,_,X,M);for(let J=0;J<_.length;J+=3){const ht=J/3,ot=1-lt.smoothstep(n,x[ht],x[ht]+22);M||(X[J]=_[J],X[J+1]=_[J+1],X[J+2]=_[J+2]),rt[J]=g[J]*ot,rt[J+1]=g[J+1]*ot,rt[J+2]=g[J+2]*ot}if(A.forEach(J=>{const ht=J.sourceIndex*3,ot={x:X[ht],y:X[ht+1],z:X[ht+2]};J.group.position.set(ot.x,ot.y,ot.z),J.visual==="black-hole-merger"&&s_(n,X,rt,J,ot),J.transientGravityField&&c_(n,X,J,ot)}),A.forEach(J=>{if(n<J.impactAt)return;const ht=lt.smoothstep(n,J.impactAt,J.impactAt+24);if(J.starImpacts.forEach($=>{const Mt=$.index*3;X[Mt]+=$.kick[0]*ht,X[Mt+1]+=$.kick[1]*ht,X[Mt+2]+=$.kick[2]*ht,rt[Mt]*=$.dimFactor,rt[Mt+1]*=$.dimFactor,rt[Mt+2]*=$.dimFactor}),!J.waveSamples)return;const ot=J.duration*(1-J.impactPhase),Xt=lt.clamp((n-J.impactAt)/ot,0,1);if(Xt<=0||Xt>=1)return;const{waveRadius:st,waveAmplitude:gt=1,indices:Wt,distances:qt,transverse:C,polarities:E}=J.waveSamples,H=.18+Math.pow(Xt,.72)*st,K=.18+Xt*.34,nt=.13*gt*(1-Xt*.58);for(let $=0;$<Wt.length;$++){const Mt=qt[$]-H;if(Math.abs(Mt)>K*2.8)continue;const ut=Math.cos(Mt/K*Math.PI)*Math.exp(-Math.pow(Mt/K,2)*1.7),Tt=ut*nt*E[$],At=Wt[$]*3,ct=$*3;X[At]+=C[ct]*Tt,X[At+1]+=C[ct+1]*Tt,X[At+2]+=C[ct+2]*Tt;const xt=1+Math.abs(ut)*.18;rt[At]*=xt,rt[At+1]*=xt,rt[At+2]*=xt}}),Z&&Y>0){const J=O?.position.x||0,ht=O?.position.y||0,ot=O?.position.z||0,Xt=.18+Math.pow(Y,.58)*36;for(let st=0;st<_.length;st+=3)if(N.type==="big-rip"){const gt=Math.hypot(_[st],_[st+1],_[st+2]),Wt=1+Math.pow(Y,1.7)*(2.8+gt*.16);X[st]*=Wt,X[st+1]*=Wt,X[st+2]*=Wt;const qt=Math.pow(1-Y,.72);rt[st]*=qt,rt[st+1]*=qt,rt[st+2]*=qt}else if(N.type==="big-crunch"){const gt=Math.max(.012,1-Math.pow(Y,1.35)*.988);X[st]*=gt,X[st+1]*=gt,X[st+2]*=gt,rt[st]*=1+Y*1.4,rt[st+1]*=1-Y*.5,rt[st+2]*=1-Y*.72}else{const gt=Math.hypot(X[st]-J,X[st+1]-ht,X[st+2]-ot),Wt=lt.smoothstep(Xt-1.2,Xt+.4,gt);rt[st]*=Wt,rt[st+1]*=Wt,rt[st+2]*=Wt}}A.forEach(J=>{const ht=J.sourceIndex*3;J.group.position.set(X[ht],X[ht+1],X[ht+2])}),m.geometry.attributes.position.needsUpdate=!0,m.geometry.attributes.color.needsUpdate=!0;const bt=b.children.find(J=>J.userData.isCoreGlow);if(bt){const{scale:J,opacity:ht}=bt.userData.profile;bt.material.opacity=tt*W*ht*(1-Y),bt.scale.set(J,J,1)}const mt=b.children.find(J=>J.userData.isAgnGlow),Pt=b.children.find(J=>J.userData.isAgnJet);if(mt){const J=tt*(1-lt.smoothstep(n,500,650));mt.material.opacity=J*.82,mt.scale.set(.72,.72,1),Pt.material.opacity=J*.18}const Zt=!Z||N.outcomeExponent>38,L=Zt&&n>et-80&&n<930,Jt=Zt&&n>825&&n<960;if(S.visible=(L||Jt)&&e==="explorer",L&&T){const J=lt.smoothstep(n,et-80,et+15),ht=1-lt.smoothstep(n,845,930);T.material.opacity=J*ht*.64*(1-Y);const ot=T.geometry.attributes.position.array,Xt=(st,gt)=>{const Wt=st*3,qt=R[Wt],C=R[Wt+1],E=R[Wt+2],H=v.axes[Wt],K=v.axes[Wt+1],nt=v.axes[Wt+2],$=_h(gt,v.orbitRates[st]),Mt=Math.cos($),ut=Math.sin($),Tt=H*qt+K*C+nt*E;ot[Wt]=qt*Mt+(K*E-nt*C)*ut+H*Tt*(1-Mt),ot[Wt+1]=C*Mt+(nt*qt-H*E)*ut+K*Tt*(1-Mt),ot[Wt+2]=E*Mt+(H*C-K*qt)*ut+nt*Tt*(1-Mt)};for(let st=0;st<R.length/3;st++){const gt=st*3,Wt=v.fates[st],qt=v.escapeAt[st];if(n<qt||Wt===1){Xt(st,n);continue}if(Wt===2){const _t=lt.smoothstep(n,qt,Math.min(900,qt+42));Xt(st,n+_t*150);const wt=1-_t*.985;ot[gt]*=wt,ot[gt+1]*=wt,ot[gt+2]*=wt;continue}Xt(st,qt);const C=ot[gt],E=ot[gt+1],H=ot[gt+2],K=Math.max(.001,Math.hypot(C,E,H)),nt=v.axes[gt],$=v.axes[gt+1],Mt=v.axes[gt+2],ut=Math.sign(v.orbitRates[st])||1;let Tt=($*H-Mt*E)*ut,At=(Mt*C-nt*H)*ut,ct=(nt*E-$*C)*ut;const xt=Math.max(.001,Math.hypot(Tt,At,ct));Tt/=xt,At/=xt,ct/=xt;let Bt=Tt*.9+C/K*.34,Dt=At*.9+E/K*.34+$*Math.sin(st*12.9898)*.08,yt=ct*.9+H/K*.34;const Yt=Math.max(.001,Math.hypot(Bt,Dt,yt));Bt/=Yt,Dt/=Yt,yt/=Yt;const k=lt.clamp((n-qt)/Math.max(1,900-qt),0,1),dt=Wt===3?Math.pow(k,.72)*(18+v.speeds[st]*7):Math.pow(k,1.35)*(6+v.speeds[st]*11);ot[gt]=C+Bt*dt,ot[gt+1]=E+Dt*dt,ot[gt+2]=H+yt*dt}T.geometry.attributes.position.needsUpdate=!0}if(y.forEach(J=>{const ht=J.userData,ot=lt.smoothstep(n,ht.birthAt,ht.birthAt+7),Xt=1-lt.smoothstep(n,ht.evaporationAt-24,ht.evaporationAt),st=lt.smoothstep(n,ht.evaporationAt-15,ht.evaporationAt),gt=7.5,Wt=Math.abs(n-ht.evaporationAt),qt=Wt<gt?Math.sin((1-Wt/gt)*Math.PI/2):0;J.visible=Zt&&e==="explorer"&&n>=ht.birthAt&&n<=ht.evaporationAt+gt;const C=ht.baseScale*(.18+.82*Math.cbrt(Math.max(0,Xt)));J.scale.setScalar(Math.max(.035,C));const E=ot*(.78+st*.22)*Math.sqrt(Math.max(0,Xt));Zn(J,E),ht.hawkingGlow.material.opacity=ot*(.07+st*.62)*Math.sqrt(Math.max(0,Xt)),ht.finalPulse.material.opacity=qt*.84;const H=(.22+qt*2.1)/Math.max(.035,C);ht.finalPulse.scale.set(H,H,1)}),P.visible=!Z&&n>910&&e==="explorer",D&&F&&I){const J=lt.smoothstep(n,910,940),ht=lt.smoothstep(n,938,1e3);D.material.opacity=J*Math.pow(1-ht,1.7)*.34;const ot=D.geometry.attributes.position.array,Xt=D.geometry.attributes.color.array,st=1+ht*1.8;for(let gt=0;gt<F.length;gt+=3)ot[gt]=F[gt]*st,ot[gt+1]=F[gt+1]*st,ot[gt+2]=F[gt+2]*st,Xt[gt]=I[gt]*(1-ht*.55)+ht*.06,Xt[gt+1]=I[gt+1]*(1-ht*.88),Xt[gt+2]=I[gt+2]*(1-ht*.96);D.geometry.attributes.position.needsUpdate=!0,D.geometry.attributes.color.needsUpdate=!0}if(U.visible=Z&&Y>0&&e==="explorer",U.visible&&O&&z)if(N.type==="vacuum-decay"){const J=.18+Math.pow(Y,.58)*36;O.visible=!0,O.scale.setScalar(J),O.material.opacity=Math.sin(Math.min(.98,Y)*Math.PI)*.18+.035,z.position.copy(O.position),z.material.opacity=(1-Y)*.42,z.scale.setScalar(1.2+Y*5.5)}else{O.visible=!1,z.position.set(0,0,0),z.material.opacity=N.type==="big-crunch"?Math.pow(Y,2.4)*.92:Math.sin(Y*Math.PI)*.28;const J=N.type==="big-crunch"?.4+(1-Y)*8:3+Y*28;z.scale.setScalar(J)}}function u_(n,t){const{mode:e,cosmicEvents:i,cosmicEventGroup:s}=t;let r=null,a=!1;return i.forEach(o=>{const c=(n-o.start)/o.duration,l=c>=0&&c<=1,d=o.visual==="black-hole-merger"?vh(n,o):0,f=yh(n,o),p=Math.max(d,f),m=n>=o.impactAt&&p>0,_=(l||m)&&e==="explorer";if(o.group.visible=_,!_)return;a=!0,l&&(r=o);const M=Math.min(1,c);o.group.userData.phase=M;const h=o.group.userData.effect;if(!l&&f>0){o.visual==="kilonova"?(h.innerFlash.material.opacity=0,h.photosphere.material.opacity=0,h.ejecta.material.opacity=0,h.shell.material.opacity=0,h.polarJets&&(h.polarJets.material.opacity=0),h.gravityWave&&(h.gravityWave.material.opacity=0),h.remnant.material.opacity=f*.72):o.visual==="stellar-collapse"?(h.starCore.material.opacity=0,h.shroud.material.opacity=0,h.dust.material.opacity=0,h.remnantHole.visible=!0,Zn(h.remnantHole,.8,f)):o.visual==="supernova"?(h.innerFlash.material.opacity=0,h.photosphere.material.opacity=0,h.ejecta.material.opacity=0,h.shell.material.opacity=0,h.remnant.material.opacity=f*.68):o.visual==="pulsar"&&(h.core.material.opacity=f*.76,h.halo.material.opacity=f*.1,h.nebula.material.opacity=f*.055,h.jets.material.opacity=f*.12,h.sweepGlow.material.opacity=0,h.fieldLines.forEach((u,b)=>{u.material.opacity=f*(.038-b*.005)}),o.group.userData.intensity=f*.56);return}if(o.visual==="supernova"||o.visual==="nova"||o.visual==="kilonova"){const u=M,b=o.visual==="nova",x=o.visual==="kilonova",g=b?.48:x?1.18:1,A=lt.smoothstep(u,0,.028),S=o.simulation?.pulsePhases?.reduce((z,N,Z)=>{const Y=o.simulation.pulseWeights?.[Z]??1,it=Math.abs(u-N);return Math.max(z,Math.exp(-it*it*1500)*Y)},0)||0,T=lt.clamp((o.simulation?.nickelMass||.6)/.6,.58,2.2),R=Math.min(1,Math.max(A*(1-lt.smoothstep(u,.045,.19)),S)*(b||x?1:T)),v=(1-lt.smoothstep(u,.12,1))*A;h.innerFlash.material.opacity=R*(b?.72:.98);const y=(.08+Math.pow(Math.min(1,u/.16),.28)*.72)*g;h.innerFlash.scale.set(y,y,1),h.photosphere.material.opacity=R*.58+v*.2;const P=(.16+Math.pow(u,.56)*1.15)*g;h.photosphere.scale.set(P,P*.9,1);const D=b||o.simulation?.persistentRemnant?1:1-lt.smoothstep(u,.82,1);h.remnant.material.opacity=lt.smoothstep(u,.2,.52)*D*.72;const F=h.ejecta.geometry.attributes.position.array;for(let z=0;z<h.ejectaVelocity.length;z++){const N=lt.clamp((u-h.ejectaDelay[z])/(1-h.ejectaDelay[z]),0,1),Z=.05+Math.pow(N,.58)*h.ejectaVelocity[z],Y=Math.sin(N*10+z*1.73)*N*.045,it=z*3;F[it]=h.ejectaDirections[it]*Z+Y*h.ejectaDirections[it+1],F[it+1]=h.ejectaDirections[it+1]*Z+Y*h.ejectaDirections[it+2],F[it+2]=h.ejectaDirections[it+2]*Z+Y*h.ejectaDirections[it]}h.ejecta.geometry.attributes.position.needsUpdate=!0,h.ejecta.material.opacity=A*(1-lt.smoothstep(u,.58,1))*.86;const I=h.shell.geometry.attributes.position.array,U=b?.72+(o.simulation?.ejectaVelocityKms||1800)/1e4:x?2.15+(o.simulation?.ejectaVelocityC||.2)*3.1:lt.clamp(1.25+(o.simulation?.ejectaVelocityKms||9e3)/7200,1.8,3.9),O=.12+(1-Math.pow(1-u,2.4))*U;for(let z=0;z<h.shellNoise.length;z++){const N=z*3,Z=1+Math.sin(h.shellNoise[z]+u*4.5)*.055+Math.sin(z*2.1)*.025;I[N]=h.shellDirections[N]*O*Z,I[N+1]=h.shellDirections[N+1]*O*Z,I[N+2]=h.shellDirections[N+2]*O*Z}if(h.shell.geometry.attributes.position.needsUpdate=!0,h.shell.material.opacity=lt.smoothstep(u,.04,.14)*(1-lt.smoothstep(u,.5,1))*.34,h.polarJets&&(h.polarJets.material.opacity=lt.smoothstep(u,.015,.08)*(1-lt.smoothstep(u,.18,.5))*.72),h.gravityWave){const z=lt.clamp((u-o.impactPhase)/Math.max(.001,1-o.impactPhase),0,1),N=.25+Math.pow(z,.72)*7.2;h.gravityWave.scale.set(N,N,1),h.gravityWave.material.opacity=Math.pow(Math.sin(z*Math.PI),.72)*.28*(o.waveSamples?.waveAmplitude||1)}}else if(o.visual==="tidal-disruption"){const u=M,b=lt.smoothstep(u,0,.42),x=lt.smoothstep(u,.3,.62),g=lt.smoothstep(u,.4,.72),A=o.simulation?.pulsePhases?.[0]||.58,S=Math.max(0,(u-A)/Math.max(.001,1-A)),T=lt.smoothstep(u,.4,A)*Math.pow(1+S*6,o.simulation?.fallbackExponent||-5/3);h.starCore.position.set(lt.lerp(2.5,.48,b),Math.sin(b*Math.PI)*.34,lt.lerp(.34,0,b)),h.starCore.material.opacity=(1-x)*.96,h.starCore.scale.set(.28+x*.68,Math.max(.035,.28*(1-x*.88)),1),h.disk.material.opacity=T*.5,h.flare.material.opacity=T*.62;const R=.24+Math.sqrt(T)*2.5;h.flare.scale.set(R,R,1),Zn(h.hole,.62+g*.38);const v=h.debris.geometry.attributes.position.array;for(let y=0;y<h.debrisOffsets.length;y++){const P=y*3,D=h.debrisOffsets[y],F=D<0,I=F?.34+Math.abs(D)*(1.15-g*.72):.42+D*(.65+g*3.4),U=D*1.8+g*(F?6.4:1.25),O=Math.sin(h.debrisNoise[y]+g*5)*.045*(1-g*.45);v[P]=Math.cos(U)*I,v[P+1]=Math.sin(U)*I*.38+O,v[P+2]=Math.sin(U*.5+h.debrisNoise[y])*.075}h.debris.geometry.attributes.position.needsUpdate=!0,h.debris.material.opacity=x*(1-lt.smoothstep(u,.9,1))*.82}else if(o.visual==="stellar-flare"){const u=M,b=o.simulation?.pulsePhases?.reduce((v,y,P)=>{const D=o.simulation.pulseWeights?.[P]??1,F=Math.abs(u-y);return Math.max(v,Math.exp(-F*F*900)*D)},0)||0,x=Math.max(Math.pow(Math.sin(u*Math.PI),.5)*.22,b),g=.72+b*.28;h.starCore.material.opacity=.48+x*.5,h.halo.material.opacity=x*g*.32;const A=.45+x*1.25;h.halo.scale.set(A,A,1),h.shock.material.opacity=x*(1-u)*.46;const S=.25+Math.pow(u,.62)*3.4;h.shock.scale.set(S,S,1),h.loops.forEach((v,y)=>{v.material.opacity=x*(.32-y*.065)});const T=h.particles.geometry.attributes.position.array,R=lt.clamp((o.simulation?.cmeVelocityKms||2200)/2200,.55,2.2);for(let v=0;v<h.particleDirections.length/3;v++){const y=v*3,P=.18+Math.pow(u,.58)*(1.25+v%17*.045)*R;T[y]=h.particleDirections[y]*P,T[y+1]=h.particleDirections[y+1]*P,T[y+2]=h.particleDirections[y+2]*P}h.particles.geometry.attributes.position.needsUpdate=!0,h.particles.material.opacity=x*.64}else if(o.visual==="stellar-collapse"){const u=M,b=lt.smoothstep(u,.32,.68),x=lt.smoothstep(u,.04,.2)*(1-lt.smoothstep(u,.3,.52));h.starCore.material.opacity=(1-b)*(.58+x*.42);const g=Math.max(.025,.34*(1-b*.94)+x*.24);h.starCore.scale.set(g,g,1);const A=lt.clamp((o.simulation?.dustOpticalDepth||2)/8,.16,.68);h.shroud.material.opacity=lt.smoothstep(u,.18,.46)*(1-lt.smoothstep(u,.74,1))*A;const S=.32+u*1.45;h.shroud.scale.set(S,S,1);const T=h.dust.geometry.attributes.position.array,R=lt.clamp((o.simulation?.ejectedEnvelopeFraction||.08)/.08,.45,1.8);for(let v=0;v<h.dustDirections.length/3;v++){const y=v*3,P=.1+lt.smoothstep(u,.16,.82)*(.32+v%19*.018)*R;T[y]=h.dustDirections[y]*P,T[y+1]=h.dustDirections[y+1]*P,T[y+2]=h.dustDirections[y+2]*P}h.dust.geometry.attributes.position.needsUpdate=!0,h.dust.material.opacity=lt.smoothstep(u,.22,.48)*(1-lt.smoothstep(u,.82,1))*.46,h.remnantHole.visible=b>.72,h.remnantHole.visible&&Zn(h.remnantHole,.58+b*.34)}else if(o.visual==="pulsar"){const u=M,b=o.simulation?.pulsePhases?.reduce((T,R,v)=>{const y=o.simulation.pulseWeights?.[v]??1,P=Math.abs(u-R);return Math.max(T,Math.exp(-P*P*1200)*y)},0)||0,x=Math.max(Math.pow(Math.sin(u*Math.PI),.45),b),g=o.type==="pulsar-glitch"?.22:1,A=h.jetPowerScale||1;h.core.material.opacity=Math.min(1,x*(.82+b*.18)),h.halo.material.opacity=Math.min(.58,x*.16*g*Math.sqrt(A)),h.nebula.material.opacity=Math.min(.34,x*.095*g*Math.sqrt(A));const S=1.05+b*.52+(A-1)*.18;h.halo.scale.set(S,S,1),h.jets.material.opacity=x*.18*g,h.fieldLines.forEach((T,R)=>{T.material.opacity=x*(.055-R*.007)*g}),o.group.userData.intensity=x}else if(o.visual==="black-hole-merger"){const u=M,b=.68,x=u>=b;h.holeA.visible=!x,h.holeB.visible=!x,h.remnantHole.visible=x&&p>0;const g=Math.min(1,u/b),A=Y=>Math.PI*2*(1.15*Y+4.1*Math.pow(Y,3)),S=Y=>.12+2.45*Math.pow(1-Y,.72),T=A(g),R=S(g);h.holeA.position.set(Math.cos(T)*R,Math.sin(T)*R,Math.sin(T*.5)*.09),h.holeB.position.set(-Math.cos(T)*R,-Math.sin(T)*R,-Math.sin(T*.5)*.09);const v=(Y,it)=>{const vt=Y.geometry.attributes.position.array;for(let Rt=0;Rt<84;Rt++){const et=Math.max(0,g-(83-Rt)*(.0028+g*9e-4)),tt=A(et),W=S(et);vt[Rt*3]=it*Math.cos(tt)*W,vt[Rt*3+1]=it*Math.sin(tt)*W,vt[Rt*3+2]=it*Math.sin(tt*.5)*.09}Y.geometry.attributes.position.needsUpdate=!0,Y.material.opacity=x?0:lt.smoothstep(u,.02,.22)*.34};v(h.trailA,1),v(h.trailB,-1);const y=lt.clamp((u-b)/(1-b),0,1),P=Math.exp(-y*7)*Math.sin(y*38);h.remnantHole.scale.set(1.24+P*.07,1.24-P*.045,1.24),Zn(h.holeA,.62+g*.38),Zn(h.holeB,.62+g*.38),Zn(h.remnantHole,.74+Math.exp(-y*4)*.34,p);const D=x?Math.exp(-y*18):0;h.mergerGlow.material.opacity=D*(h.gasRich?.48:.13);const F=.3+y*(h.gasRich?3.6:2.4);h.mergerGlow.scale.set(F,F,1),h.gasEcho.material.opacity=h.gasRich?lt.smoothstep(y,.02,.12)*(1-lt.smoothstep(y,.3,.92))*.34:0;const I=.35+Math.pow(y,.62)*4.2;h.gasEcho.scale.set(I,I,1),h.waveHalos.forEach((Y,it)=>{const vt=it*.12,Rt=lt.clamp((y-vt)/(1-vt),0,1);Y.visible=x&&Rt>0;const et=.38+Math.pow(Rt,.7)*(8.8+it*.6);Y.scale.set(et,et,1),Y.material.opacity=Math.pow(Math.sin(Rt*Math.PI),.78)*(.29-it*.045)}),h.wavefronts.forEach((Y,it)=>{const vt=it*.075,Rt=lt.clamp((y-vt)/(1-vt),0,1);Y.visible=x&&Rt>0,Y.scale.setScalar(.28+Math.pow(Rt,.72)*(7.4+it*.34)),Y.material.opacity=Math.pow(Math.sin(Rt*Math.PI),.72)*.19*(1-it*.08)});const U=h.waveDust.geometry.attributes.position.array,O=.22+Math.pow(y,.72)*8.6;for(let Y=0;Y<h.waveDirections.length/3;Y++){const it=Y*3,vt=h.waveDirections[it],Rt=h.waveDirections[it+1],et=h.waveDirections[it+2],tt=1+(vt*vt-et*et)*.085*Math.sin(y*Math.PI*5);U[it]=vt*O*tt,U[it+1]=Rt*O*tt,U[it+2]=et*O*tt}h.waveDust.geometry.attributes.position.needsUpdate=!0,h.waveDust.material.opacity=x?Math.pow(Math.sin(y*Math.PI),.62)*.5:0;const N=lt.smoothstep(y,.08,1)*lt.clamp((o.simulation?.recoilKms||o.recoilKms||500)/720,.22,2.2);h.remnantHole.position.copy(h.recoilVector).multiplyScalar(N);const Z=h.recoilTrail.geometry.attributes.position.array;Z[0]=0,Z[1]=0,Z[2]=0,Z[3]=h.remnantHole.position.x,Z[4]=h.remnantHole.position.y,Z[5]=h.remnantHole.position.z,h.recoilTrail.geometry.attributes.position.needsUpdate=!0,h.recoilTrail.material.opacity=x?(1-y*.72)*.28*p:0}}),s.visible=a,r}function d_(n,t){const{cosmicEventGroup:e,prefersReducedMotion:i,cosmicEvents:s,camera:r}=t;!e.visible||i||s.forEach(a=>{if(!a.group.visible)return;const o=a.group.userData.phase,c=a.group.userData.effect;if(a.visual==="supernova"||a.visual==="nova"||a.visual==="kilonova")c.innerFlash.material.rotation=n*7e-5,c.photosphere.material.rotation=-n*35e-6,c.ejecta.rotation.y=Math.sin(n*21e-5)*.035;else if(a.visual==="tidal-disruption")c.disk.material.rotation=n*.0014,c.debris.rotation.y=Math.sin(n*17e-5)*.08,Qi(c.hole,n,c.hole.userData.spinDirection);else if(a.visual==="stellar-flare")c.loops.forEach((l,d)=>{l.rotation.z=Math.sin(n*9e-4+d)*.16}),c.particles.rotation.y=n*22e-5;else if(a.visual==="stellar-collapse")c.remnantHole.visible&&Qi(c.remnantHole,n,c.remnantHole.userData.spinDirection);else if(a.visual==="pulsar"){const l=a.simulation?.spinPeriodMs,d=l?lt.clamp(80/l,.45,4.8):a.simulation?.model==="magnetar-giant-flare"?.72:1,f=a.simulation?.model==="pulsar-glitch"&&o>=.46?1+Math.min(.12,a.simulation.fractionalFrequencyJump*15e3):1;c.rotor.rotation.y=n*.0024*d*f;const p=new ai,m=new B,_=new B(0,1,0);c.rotor.getWorldQuaternion(p),a.group.getWorldPosition(m),_.applyQuaternion(p).normalize();const M=r.position.clone().sub(m).normalize(),h=Math.pow(Math.abs(_.dot(M)),14),u=lt.clamp(d,.55,3.2),b=.52+Math.pow(Math.max(0,Math.sin(n*.012*u)),10)*.48,x=a.type==="pulsar-glitch"?.16:1;c.jets.material.opacity=a.group.userData.intensity*(.34+h*.58)*b*x,c.sweepGlow.material.opacity=a.group.userData.intensity*h*b*.78*x;const g=.5+h*1.8;c.sweepGlow.scale.set(g,g,1),c.knots.forEach(A=>{const S=(n*55e-5+A.userData.offset)%1;A.position.set(0,A.userData.side*(.18+S*2.45),0),A.material.opacity=a.group.userData.intensity*Math.sin(S*Math.PI)*(.12+h*.55)*x}),c.fieldLines.forEach((A,S)=>{A.rotation.y+=.006+S*.001})}else a.visual==="black-hole-merger"&&(Qi(c.holeA,n,c.holeA.userData.spinDirection),Qi(c.holeB,n,c.holeB.userData.spinDirection),Qi(c.remnantHole,n,c.remnantHole.userData.spinDirection))})}function f_({universe:n,civilizationData:t,civilizationSimulation:e,cosmicEvents:i}){if(!e||t.length===0)return;const s=e,r=un(n.seed,9241),a=s.habitatRemnantIndices.length,o=t.length,c=6;for(let I=0;I<a;I++){const U=[],O=I*3;for(let z=0;z<a;z++){if(z===I)continue;const N=z*3,Z=Math.hypot(s.habitatPositions[O]-s.habitatPositions[N],s.habitatPositions[O+1]-s.habitatPositions[N+1],s.habitatPositions[O+2]-s.habitatPositions[N+2]);(U.length<c||Z<U[U.length-1].distance)&&(U.push({node:z,distance:Z}),U.sort((Y,it)=>Y.distance-it.distance),U.length>c&&U.pop())}s.adjacency[I]=Uint16Array.from(U.map(z=>z.node))}const l=new Int16Array(a);l.fill(-1);const d=new Float32Array(a),f=new Uint8Array(o),p=new Float32Array(o*o),m=new Int8Array(o*o),_=new Int16Array(a);_.fill(-1),t.forEach((I,U)=>{_[I.homeNodeIndex]=U});const M=new Uint16Array(o),h=Array(o).fill("自主扩张"),u=new Uint8Array(a),b=n.cosmicFate?.type!=="heat-death",x=b?n.cosmicFate.onsetAt:620,g=b?1e3:710,A=b?n.cosmicFate.label:"恒星能源枯竭",S=i.slice().sort((I,U)=>I.impactAt-U.impactAt),T=new Map(S.map(I=>[I,new Map])),R=S.flatMap(I=>(I.civilizationImpacts=[],(I.civilizationNodeImpacts||[]).map(U=>({event:I,impact:U})))).sort((I,U)=>I.impact.at-U.impact.at||I.impact.nodeIndex-U.impact.nodeIndex),v=(I,U)=>I*o+U;for(let I=0;I<o;I++)for(let U=I+1;U<o;U++){const O=t[I],z=t[U],N=(O.cooperation+z.cooperation)*.28-(O.aggression+z.aggression)*.24+Q(r,-.16,.16);p[v(I,U)]=N,p[v(U,I)]=N}const y=(I,U,O,z)=>{p[v(I,U)]=O,p[v(U,I)]=O,m[v(I,U)]=z,m[v(U,I)]=z},P=I=>{let U=0;for(let O=0;O<a;O++)l[O]===I&&U++;return U},D=(I,U,O)=>{const{nodeIndex:z,severity:N,permanent:Z,destructionRoll:Y,kind:it="damage"}=U;Z&&(u[z]=1);const vt=l[z];if(vt<0)return;const Rt=t[vt];if(Rt.highDimensional&&O>=Rt.ascensionAt)return;if(it==="recovery"){u[z]||(d[z]=Math.min(1.35,d[z]+N),h[vt]=`${I.label} 后恢复`);return}const et=T.get(I);let tt=et.get(vt);tt||(tt={initialCount:P(vt),affectedNodes:new Set,lostNodes:new Set,weakenedNodes:new Set,effectiveLoss:0,collapse:!1},et.set(vt,tt)),tt.affectedNodes.add(z);const W=lt.clamp(N*.62/Math.max(.65,Rt.resilience),0,.9);if(Z||Y<W)l[z]=-1,d[z]=0,tt.lostNodes.add(z),tt.weakenedNodes.delete(z),tt.effectiveLoss+=1;else{const rt=N*.46;d[z]*=Math.max(.18,1-rt),tt.lostNodes.has(z)||tt.weakenedNodes.add(z),tt.effectiveLoss+=rt}tt.collapse||=P(vt)===0,h[vt]=I.label};let F=0;for(;F<R.length&&R[F].impact.at<s.start;){const{impact:I}=R[F];I.kind!=="recovery"&&I.permanent&&(u[I.nodeIndex]=1),F++}for(let I=s.start;I<=s.end;I+=s.step){for(t.forEach((et,tt)=>{if(!(f[tt]||I<et.birth)){if(f[tt]=1,u[et.homeNodeIndex]){h[tt]="母星在文明诞生前失去宜居条件";return}l[et.homeNodeIndex]=tt,d[et.homeNodeIndex]=.34,h[tt]="母星文明进入星际阶段"}});F<R.length&&R[F].impact.at<=I;){const{event:et,impact:tt}=R[F];D(et,tt,I),F++}const U=new Uint8Array(o),O=new Uint8Array(o);for(let et=0;et<o;et++)for(let tt=et+1;tt<o;tt++){const W=m[v(et,tt)];W>0&&(U[et]++,U[tt]++),W<0&&(O[et]++,O[tt]++)}for(let et=0;et<a;et++){const tt=l[et];if(tt<0)continue;const W=t[tt],X=1+U[tt]*.045-O[tt]*.028;d[et]+=(.032+W.resilience*.018)*X*(1-d[et]),d[et]=lt.clamp(d[et],0,1.35)}const z=new Uint8Array(o*o);for(let et=0;et<a;et++){const tt=l[et];tt<0||s.adjacency[et].forEach(W=>{const X=l[W];X<0||X===tt||(z[v(tt,X)]=1,z[v(X,tt)]=1)})}for(let et=0;et<o;et++)for(let tt=et+1;tt<o;tt++){let W=p[v(et,tt)],X=m[v(et,tt)];if(z[v(et,tt)]){const rt=t[et],bt=t[tt];W+=(rt.cooperation+bt.cooperation-1)*.026,W-=(rt.aggression+bt.aggression-.82)*.023,W+=Q(r,-.012,.012),X===0&&W>.3&&(X=1),X===0&&W<-.26&&(X=-1),X===1&&W<.08&&(X=0),X===-1&&W>-.04&&(X=0)}else W*=.992,X===1&&W<.1&&(X=0),X===-1&&W>-.08&&(X=0);y(et,tt,lt.clamp(W,-.95,.95),X)}const N=Array.from({length:o},()=>[]);for(let et=0;et<a;et++)l[et]>=0&&N[l[et]].push(et);if(t.forEach((et,tt)=>{const W=N[tt];if(!f[tt]||W.length===0||I>=650)return;const X=1+Math.floor(et.expansionRate+U[tt]*.34);for(let rt=0;rt<X;rt++){const bt=[];if(W.forEach(Jt=>{s.adjacency[Jt].forEach(J=>{!u[J]&&l[J]!==tt&&bt.push([Jt,J])})}),bt.length===0)break;const[mt,Pt]=bt[Math.floor(r()*bt.length)],Zt=l[Pt];if(Zt<0){if(_[Pt]>=0&&_[Pt]!==tt&&!f[_[Pt]])continue;r()<.18+et.expansionRate*.19+U[tt]*.025&&(l[Pt]=tt,d[Pt]=Math.max(.14,d[mt]*.34),W.push(Pt),h[tt]=U[tt]>0?"协作网络推动殖民":"殖民前沿扩张");continue}const L=m[v(tt,Zt)];if(L>0){d[mt]=Math.min(1.35,d[mt]+.018),d[Pt]=Math.min(1.35,d[Pt]+.012),h[tt]=`与${t[Zt].name}交流`,h[Zt]=`与${et.name}交流`;continue}if(L<0){const Jt=d[mt]*(.72+et.aggression*.76+r()*.35),J=d[Pt]*(.84+t[Zt].resilience*.52+r()*.28);Jt>J?(l[Pt]=tt,d[Pt]=Math.max(.08,Math.min(.48,(Jt-J)*.5)),h[tt]=`与${t[Zt].name}争夺边界`,h[Zt]=`边界被${et.name}突破`):(d[mt]*=.84,d[Pt]*=.92,h[tt]=`对${t[Zt].name}的进攻受挫`)}else if(r()<et.aggression*.035){const Jt=p[v(tt,Zt)]-.055;y(tt,Zt,Jt,Jt<-.26?-1:0)}}}),I>=x){const et=lt.smoothstep(I,x,g);for(let tt=0;tt<a;tt++){const W=l[tt];W<0||t[W].highDimensional&&I>=t[W].ascensionAt||(d[tt]-=.004+et*.052,(d[tt]<=.035||I>=g)&&(l[tt]=-1,d[tt]=0,h[W]=A))}}const Z=new Uint16Array(o),Y=new Float32Array(o);for(let et=0;et<a;et++){const tt=l[et];tt<0||(Z[tt]++,Y[tt]+=d[et])}const it=new Int8Array(o),vt=new Uint8Array(o),Rt=new Uint8Array(o);for(let et=0;et<o;et++)it[et]=Math.sign(Z[et]-M[et]),vt[et]=f[et]&&Z[et]>0?1:0,Rt[et]=t[et].highDimensional&&I>=t[et].ascensionAt?1:0,M[et]=Z[et];s.snapshots.push({time:I,owners:l.slice(),counts:Z,populations:Y,trends:it,active:vt,ascended:Rt,relations:m.slice(),relationScores:p.slice(),causes:h.slice()})}S.forEach(I=>{const U=Array.from(T.get(I).entries()).map(([z,N])=>({speciesIndex:z,lossFraction:lt.clamp(N.effectiveLoss/Math.max(1,N.initialCount),0,1),collapse:N.collapse,affectedDomains:N.affectedNodes.size,lostDomains:N.lostNodes.size,weakenedDomains:N.weakenedNodes.size}));I.civilizationImpacts=U;const O=U.length?U.map(z=>{const N=t[z.speciesIndex].name;return z.collapse?`${N} 灭绝`:z.lostDomains>0?z.weakenedDomains>0?`${N} 损失 ${z.lostDomains} 个疆域，另有 ${z.weakenedDomains} 个受损`:`${N} 损失 ${z.lostDomains} 个疆域`:`${N} 的 ${z.weakenedDomains} 个疆域受损`}).join("，"):"未波及当时存在的文明疆域";I.outcome=`${I.systemOutcome}；${O}`})}function p_(n,t){if(!n?.snapshots.length)return null;const e=n,i=lt.clamp(Math.floor((t-e.start)/e.step),0,e.snapshots.length-1);return e.snapshots[i]}function m_(n,t,e,i){let s=1,r=1/0;const a=[],o=e[t];return i.forEach(c=>{if(n<c.impactAt||o?.highDimensional&&c.impactAt>=o.ascensionAt)return;const l=c.civilizationImpacts.find(d=>d.speciesIndex===t);l&&(s*=1-l.lossFraction,l.collapse&&(r=Math.min(r,c.impactAt)),a.push(c.label))}),{capacityFactor:s,collapsedAt:r,lossFraction:1-s,causes:a}}function g_(n,t,e,i){return e.map((s,r)=>{const a=m_(n,r,e,i),o=!!t?.active[r],c=!!t?.ascended[r]&&o,l=[],d=[];return e.forEach((f,p)=>{if(p===r||!t?.active[p])return;const m=t.relations[r*e.length+p];m>0&&l.push(f.name),m<0&&d.push(f.name)}),{alive:o,ascended:c,count:t?.counts[r]||0,trend:t?.trends[r]||0,eventState:a,friendlyNames:l,conflictNames:d}})}function __(n,t,e){if(!n)return null;let i=null,s=-1;for(let r=0;r<e;r++)for(let a=r+1;a<e;a++){const o=t[r],c=t[a];if(!o?.alive||!c?.alive||o.ascended||c.ascended)continue;const l=n.relations[r*e+a];if(l===0)continue;const f=Math.abs(n.relationScores[r*e+a])+(l<0?2:0);f<=s||(s=f,i={speciesA:r,speciesB:a,relationship:l<0?"conflict":"coexistence"})}return i}const se=n=>document.querySelector(n);function Sh(n){const t=n.cosmicFate;se("#universe-id").textContent=`#${n.seed}`,se("#explore-id").textContent=`#${n.seed}`,se("#speed-value").textContent=`${n.speed.toFixed(2)} × 现实宇宙`,se("#gravity-value").textContent=`${n.gravity.toFixed(2)} × 现实宇宙`,se("#fine-structure-value").textContent=`${n.fineStructure.toFixed(3)} × 现实宇宙`,se("#mass-ratio-value").textContent=`${n.massRatio.toFixed(3)} × 现实宇宙`,se("#expansion-value").textContent=`${n.expansionRate.toFixed(2)} × 现实宇宙`,se("#dark-energy-value").textContent=`${(n.darkEnergyDensity*100).toFixed(1)}%`,se("#fluctuation-value").textContent=`${n.primordialFluctuation.toFixed(2)} × 现实宇宙`,se("#cmb-value").textContent=`${n.cmbTemperature.toFixed(2)} K`,se("#elements-value").textContent=`${n.elements} 种`,se("#stars-value").textContent=q0(n.stars),se("#life-probability-value").textContent=X0(n.lifeProbability),se("#civilizations-value").textContent=$0(n.civilizations),se("#galaxy-type-value").textContent=Po[n.galaxyType],se("#arm-count-value").textContent=W0(n.galaxyType,n.armCount),se("#black-hole-value").textContent=n.hasCentralBlackHole?"存在":"未形成",se("#nucleus-value").textContent=n.hasCentralBlackHole?n.activeNucleus?"活动 · 吸积中":"宁静":"不适用",se("#stellar-window-value").textContent=t.outcomeExponent<=n.lastStarDeathExponent?"结局前未抵达":`约 10^${n.lastStarDeathExponent.toFixed(1)} 年`,se("#galaxy-hue-value").textContent=V0(n.hue),se("#evaporation-value").textContent=t.outcomeExponent<n.blackHoleEvaporationExponent?"结局前未抵达":`约 10^${n.blackHoleEvaporationExponent} 年`,se("#dark-energy-model-value").textContent=t.modelLabel,se("#dark-energy-model-value").title=t.modelDescription,se("#dark-energy-eos-value").textContent=`w₀ ${t.w0.toFixed(2)} · wₐ ${t.wa.toFixed(2)}`,se("#vacuum-value").textContent=B0(t),se("#lifetime-value").textContent=`${t.label} · ${O0(t)}`,se("#timeline-stellar-label").textContent=t.outcomeExponent<=n.lastStarDeathExponent?"暗能量分流":"恒星熄灭",se("#timeline-late-label").textContent=t.type==="heat-death"?"黑洞时代":"临界阶段",se("#timeline-final-label").textContent=t.shortLabel,se("#cosmic-timeline").setAttribute("aria-label",`从大爆炸到${t.label}的宇宙时间`),se("#universe-note").textContent=xc[n.seedValue%xc.length],se("#galaxy-name").textContent=`${vc[n.seedValue%vc.length]}星系`;const e=(8+n.stars*4.7).toFixed(1);se("#galaxy-meta").textContent=`${Po[n.galaxyType]} · 直径 ${e} 万光年`}const Ue=n=>document.querySelector(n);let Rc="",Cc=null;const x_=[[0,18],[18,55],[55,145],[145,245],[245,340],[340,470]];function Ar(n,t,e){const i=document.createElement("i");i.className=`scale-${e}`,i.style.left=`${t/10}%`,i.dataset.position=t.toFixed(3),n.appendChild(i)}function v_(n){const t=Ue("#timeline-scale");if(!t)return;const e=n?.cosmicFate,i=Math.min(999,Math.max(471,e?.onsetAt||850)),s=e?.type==="heat-death"?[[470,570],[570,650],[650,680],[680,845],[845,950],[950,1e3]]:[[470,i],[i,1e3]],r=[...x_,...s].filter(([a,o])=>o>a);t.replaceChildren(),r.forEach(([a,o],c)=>{const l=o-a,d=Math.max(1,Math.min(4,Math.round(l/48))),f=l/d;c>0&&Ar(t,a,"break");for(let p=0;p<d;p++){const m=a+p*f;if((c===0||p>0)&&Ar(t,m,"tick scale-tick--major"),!(f<20))for(let _=2;_<=9;_++){const M=m+Math.log10(_)*f;Ar(t,M,_===2||_===5?"tick scale-tick--mid":"tick scale-tick--minor")}}}),Ar(t,1e3,"tick scale-tick--major")}function M_(){const n=Ue("#timeline-scale");n&&(n.classList.remove("is-entering"),n.offsetWidth,n.classList.add("is-entering"))}function Eh(n){const t=Ue("#timeline-scale");if(!t||t.clientWidth===0)return;const e=n/1e3*t.clientWidth,i=Math.min(58,t.clientWidth*.09);t.querySelectorAll(".scale-tick").forEach(s=>{const a=Number(s.dataset.position)/1e3*t.clientWidth-e,o=Math.max(0,1-Math.abs(a)/i),c=Math.sign(a)*o*i*.34,l=1+o*1.35;s.style.transform=`translateX(calc(-50% + ${c.toFixed(2)}px)) scaleY(${l.toFixed(3)})`})}function y_(){Ue("#timeline-scale")?.querySelectorAll(".scale-tick").forEach(n=>{n.style.transform=""})}function S_(n){Ue("#cosmic-timeline").value=n.position,Ue("#time-progress").style.width=`${n.position/10}%`,Ue("#timeline-value").textContent=n.label,Ue("#era-number").textContent=String(n.eraIndex+1).padStart(2,"0"),Ue("#era-name").textContent=n.era.name,Ue("#cosmic-time").textContent=n.label.replace("T+",""),Ue("#era-description").textContent=n.era.description,Ue(".explorer-title").style.setProperty("--cosmic-opacity",n.galaxyIdentityOpacity.toFixed(3))}function E_({position:n,simulationState:t,runtimeState:e,civilizationData:i}){e.forEach((a,o)=>{const c=i[o],l=document.querySelector(`[data-species="${o}"]`);if(!l)return;l.style.opacity=a.alive?"1":".18",l.classList.toggle("is-impacted",a.alive&&a.eventState.causes.length>0),l.classList.toggle("is-ascended",a.ascended);const d=[];t?.causes[o]&&d.push(t.causes[o]),a.friendlyNames.length&&d.push(`与 ${a.friendlyNames.join("、")} 友好交流`),a.conflictNames.length&&d.push(`与 ${a.conflictNames.join("、")} 冲突`),a.eventState.causes.length&&d.push(`受 ${a.eventState.causes.join("、")} 影响`),l.title=a.ascended?"1% 概率的高维转化：已脱离普通物质宿主":d.join("；"),l.querySelector("b").textContent=a.alive?a.ascended?"超维存续":`${a.count} 域${a.trend>0?" ↑":a.trend<0?" ↓":""}`:n<c.birth?"未诞生":"衰亡"});const s=e.filter(a=>a.alive).length,r=e.reduce((a,o)=>a+(o.alive&&!o.ascended?o.count:0),0);Ue("#civilization-panel").style.setProperty("--cosmic-opacity",s>0?"1":"0"),Ue("#civilization-summary").textContent=s>0?`${s} 种 · ${r} 域`:"尚未出现"}function b_(n,t=!1){if(n.key===Rc&&!t)return;Rc=n.key,Ue("#event-year").textContent=n.time,Ue("#event-text").textContent=n.text;const e=Ue("#event-feed");e.classList.remove("is-visible"),requestAnimationFrame(()=>e.classList.add("is-visible")),clearTimeout(Cc),Cc=setTimeout(()=>e.classList.remove("is-visible"),3200)}let Lo=null;const T_=n=>document.querySelector(n);function A_(){Lo=null}function w_(n,t){if(!n||n===Lo)return;Lo=n;const e=T_("#civilization-legend"),i=t.length,s=new Map([...e.querySelectorAll(".civilization-item")].map(x=>[Number(x.dataset.species),x]));e.replaceChildren();const r=Int16Array.from({length:i},(x,g)=>g),a=x=>{let g=x;for(;r[g]!==g;)g=r[g];for(;r[x]!==x;){const A=r[x];r[x]=g,x=A}return g},o=(x,g)=>{const A=a(x),S=a(g);A!==S&&(r[Math.max(A,S)]=Math.min(A,S))};for(let x=0;x<i;x++)if(!(!n.active[x]||n.ascended[x]))for(let g=x+1;g<i;g++){if(!n.active[g]||n.ascended[g])continue;const A=x*i+g;n.relations[A]>0&&n.relationScores[A]>=.52&&o(x,g)}const c=new Map,l=[],d=[];for(let x=0;x<i;x++){if(!n.active[x]){l.push(x);continue}if(n.ascended[x]){d.push(x);continue}const g=a(x);c.has(g)||c.set(g,[]),c.get(g).push(x)}const f=[...c.values()],p=x=>x.reduce((g,A)=>g+n.counts[A],0),m=(x,g)=>{let A={kind:"neutral",state:0,strength:0};return x.forEach(S=>g.forEach(T=>{const R=S*i+T,v=n.relations[R],y=Math.abs(n.relationScores[R]);v!==0&&y>A.strength&&(A={kind:v<0?"conflict":"friendly",state:v,strength:y})})),A};f.sort((x,g)=>p(g)-p(x));const _=f.length?[f.shift()]:[];for(;f.length;){const x=_[_.length-1];let g=0,A=-1;f.forEach((S,T)=>{const R=m(x,S).strength;R>A&&(A=R,g=T)}),_.push(f.splice(g,1)[0])}const M={conflict:'<svg viewBox="0 0 16 16" aria-hidden="true"><path d="M3 3l10 10M13 3L3 13"/><path d="M2 5l3-3M11 14l3-3"/></svg>',friendly:'<svg viewBox="0 0 16 16" aria-hidden="true"><circle cx="6" cy="8" r="3.5"/><circle cx="10" cy="8" r="3.5"/></svg>',neutral:'<svg viewBox="0 0 16 16" aria-hidden="true"><path d="M2.5 8h3M10.5 8h3"/><circle cx="8" cy="8" r="1.25"/></svg>'},h=x=>x==="conflict"?"冲突":x==="friendly"?"友好":"中立",u=x=>{const g=x.slice().sort((A,S)=>n.counts[S]-n.counts[A])[0];return`#${t[g].color.toString(16).padStart(6,"0")}`},b=_.map((x,g)=>({members:x,number:String(g+1).padStart(2,"0"),accent:u(x)}));if(b.forEach((x,g)=>{const A=document.createElement("section");A.className="faction-block",A.style.setProperty("--faction",x.accent),A.setAttribute("aria-label",`阵营 ${x.number}`);const S=document.createElement("div");S.className="faction-header";const T=document.createElement("span");T.className="faction-identity",T.textContent=x.number,T.setAttribute("aria-hidden","true"),S.appendChild(T);const R=document.createElement("div");R.className="faction-relations";const v={conflict:[],friendly:[],neutral:[]};b.forEach((P,D)=>{if(D===g)return;const F=m(x.members,P.members);v[F.kind].push(P)}),["conflict","friendly","neutral"].forEach(P=>{const D=v[P];if(!D.length)return;const F=document.createElement("span");F.className=`faction-relation is-${P}`;const I=`阵营 ${x.number}${h(P)}：阵营 ${D.map(U=>U.number).join("、")}`;F.setAttribute("role","img"),F.setAttribute("aria-label",I),F.title=I,F.innerHTML=`${M[P]}<span>${D.map(U=>`<b style="--target-faction:${U.accent}">${U.number}</b>`).join("")}</span>`,R.appendChild(F)}),S.appendChild(R),A.appendChild(S);const y=document.createElement("div");y.className="faction-members",x.members.slice().sort((P,D)=>n.counts[D]-n.counts[P]||P-D).forEach(P=>{const D=s.get(P);D&&y.appendChild(D)}),A.appendChild(y),e.appendChild(A)}),d.length){const x=document.createElement("section");x.className="faction-block is-transcendent",x.setAttribute("aria-label","升维种群"),x.innerHTML='<div class="faction-header"><span class="faction-identity" aria-hidden="true">◇</span></div>';const g=document.createElement("div");g.className="faction-members",d.forEach(A=>{const S=s.get(A);S&&g.appendChild(S)}),x.appendChild(g),e.appendChild(x)}if(l.length){const x=document.createElement("div");x.className="faction-inactive",l.forEach(g=>{const A=s.get(g);A&&x.appendChild(A)}),e.appendChild(x)}}const Ot=n=>document.querySelector(n),il=Ot("#universe"),Qn=window.matchMedia("(prefers-reduced-motion: reduce)").matches,Pn=new u0({canvas:il,antialias:!0,alpha:!1,powerPreference:"high-performance"});Pn.setPixelRatio(Math.min(devicePixelRatio,2));Pn.setSize(innerWidth,innerHeight);Pn.setClearColor(328968,1);Pn.outputColorSpace=Fe;Pn.toneMapping=Nc;Pn.toneMappingExposure=1.15;const Zr=new md;Zr.fog=new jo(328968,.018);const Sn=new ln(42,innerWidth/innerHeight,.1,200);Sn.position.set(0,.5,32);const dn=new f0(Sn,il);dn.enableDamping=!0;dn.dampingFactor=.045;dn.enablePan=!1;dn.minDistance=8;dn.maxDistance=46;dn.autoRotate=!1;dn.enabled=!1;let Te=new We,Pe=new We,wn=new We,ei=new We,Ri=new We,Ti=new We,si=new We;Zr.add(Te,Pe,wn,ei,Ri,Ti,si);let Ut=null,fn="generator",Ve=null,as=new Gt(0,0),wr=new Gt(0,0),Io=new Ad;Io.params.Points.threshold=.12;let fs=null,Os=[],rn=[],_i=[],an=null,Hr=[],Uo=null,ws=null,Fo=null,No=null,ts=null,Ur=null,bh=[],Bs=null,os=null,Ps=null,Th=null,Ah=null,Gr=null,Oo=null,wh=null,is=null,Bo=null,on=null,xn=null,Ae=0,Cn=!1,Rh=1,Pc=performance.now(),Ci=[];function xi(n){n.traverse(t=>{t.geometry&&t.geometry.dispose(),t.material&&(Array.isArray(t.material)?t.material:[t.material]).forEach(i=>i.dispose())}),n.clear()}function Ch(){xi(Te);const n=un(Ut.seed),t=Math.min(10500,Math.floor(5200+Ut.stars*900)),e=new Float32Array(t*3),i=new Float32Array(t*3),s=new Float32Array(t),r=new kt().setHSL(Ut.hue,.55,.66),a=new kt(16767402);for(let m=0;m<t;m++){const _=Math.pow(n(),.56)*9.2,M=n()*Math.PI*2,h=Math.acos(2*n()-1),u=Math.sin(M*Ut.armCount+_)*.48;e[m*3]=_*Math.sin(h)*Math.cos(M)+u,e[m*3+1]=_*Math.cos(h)*.82,e[m*3+2]=_*Math.sin(h)*Math.sin(M);const b=r.clone().lerp(a,Math.pow(n(),2.3)),x=.45+n()*.7;i[m*3]=b.r*x,i[m*3+1]=b.g*x,i[m*3+2]=b.b*x,s[m]=n()}const o=new ie;o.setAttribute("position",new ee(e,3)),o.setAttribute("color",new ee(i,3)),o.setAttribute("aSize",new ee(s,1));const c=new Ye({size:.065,map:Ce(),alphaTest:.015,vertexColors:!0,transparent:!0,opacity:.86,depthWrite:!1,blending:Ft}),l=new tn(o,c);Te.add(l);const d=new Jo(9.9,3),f=new Ko(new yd(d),new Tn({color:12175324,transparent:!0,opacity:.032}));Te.add(f);const p=new hn(new Qo(10.7,.007,3,220),new Vs({color:14221151,transparent:!0,opacity:.25}));p.rotation.set(1.24,.18,.4),Te.add(p),Te.rotation.set(.15,-.3,-.08),Te.scale.setScalar(.01),Ve={type:"birth",start:performance.now(),duration:Qn?1:1300}}function Ph(){xi(Pe),xi(wn),xi(ei),xi(Ri),xi(Ti),xi(si),Os=[],rn=[],_i=[],an=null;const n=un(Ut.seed,91),t=17e3,e=new Float32Array(t*3),i=new Float32Array(t*3);Bo=new Float32Array(t);const s=new kt(16770996),r=new kt().setHSL(Ut.hue,.65,.56),a=ph(Ut),o=Math.min(a,dh(4e10,Ut)),c=Array.from({length:4+Ut.seedValue%3},(M,h)=>({x:Q(n,-8,8)+h*.35,y:Q(n,-.6,.6),z:Q(n,-6,6),spread:Q(n,1.1,3.1)}));for(let M=0;M<t;M++){let h=0,u=0,b=0;if(Ut.galaxyType===0){const S=n();if(S<.2)h=re(n)*3.7,b=re(n)*.42,u=re(n)*.18;else if(S<.29)h=re(n)*1.7,b=re(n)*1.7,u=re(n)*.65;else{const T=3+Math.pow(n(),.72)*11,v=M%2*Math.PI+(T-3)*.46+re(n)*(.12+T*.012),y=re(n)*(.18+T*.025);h=Math.cos(v)*T+y,b=Math.sin(v)*T+y,u=re(n)*(.12+T*.018)}}else if(Ut.galaxyType===1){const S=7+Ut.seedValue%5,T=Math.pow(n(),.68)*14,R=M%S,v=R/S*Math.PI*2+T*.31+re(n)*(.26+T*.018),y=1+Math.sin(T*2.7+R*1.9)*.11;h=Math.cos(v)*T*y+re(n)*.25,b=Math.sin(v)*T*y+re(n)*.25,u=re(n)*(.18+T*.028)}else if(Ut.galaxyType===2){const S=n(),T=n()*Math.PI*2;let R;S<.72?R=8.4+re(n)*.78:S<.9?R=Math.abs(re(n))*2.1:R=4+n()*8,h=Math.cos(T)*R*1.15+re(n)*.13,b=Math.sin(T)*R+re(n)*.13,u=re(n)*(.18+R*.012)}else if(Ut.galaxyType===3){const S=Math.pow(n(),.38);h=re(n)*5.5*S,u=re(n)*2.35*S,b=re(n)*3.75*S;const T=Math.hypot(h,u,b);if(T>13.5){const R=13.5/T;h*=R,u*=R,b*=R}}else if(n()<.13){const S=Q(n,-12,12);h=S,b=Math.sin(S*.24)*2.7+re(n)*.7,u=re(n)*.55}else{const S=c[Math.floor(n()*c.length)];h=S.x+re(n)*S.spread,u=S.y+re(n)*S.spread*.38,b=S.z+re(n)*S.spread*.72}e[M*3]=h,e[M*3+1]=u,e[M*3+2]=b;const x=Math.hypot(h,u,b),g=s.clone().lerp(r,Math.min(1,x/12)),A=.55+n()*.85;i[M*3]=g.r*A,i[M*3+1]=g.g*A,i[M*3+2]=g.b*A,Bo[M]=o+Math.pow(n(),1.9)*(a-o)}Oo=e.slice(),wh=i.slice(),is=e_(Oo,Ut);const l=new ie;l.setAttribute("position",new ee(e,3)),l.setAttribute("color",new ee(i,3));const d=new tn(l,new Ye({size:.09,map:Ce(),alphaTest:.015,vertexColors:!0,transparent:!0,opacity:.9,depthWrite:!1,blending:Ft}));Pe.add(d),fs=d;const p=[{scale:4.3,opacity:.32},{scale:3.25,opacity:.22},{scale:1.55,opacity:.055},{scale:6.4,opacity:.46},{scale:1.2,opacity:.035}][Ut.galaxyType],m=new ce(new oe({map:Ge(),color:16768164,transparent:!0,opacity:0,depthWrite:!1,blending:Ft}));if(m.scale.set(p.scale,p.scale,1),m.userData.isCoreGlow=!0,m.userData.profile=p,Pe.add(m),Ut.activeNucleus){const M=new ce(new oe({map:Ge(),color:14281983,transparent:!0,opacity:0,depthWrite:!1,blending:Ft}));M.scale.set(.72,.72,1),M.userData.isAgnGlow=!0,Pe.add(M);const h=new ie().setFromPoints([new B(0,-2.6,0),new B(0,2.6,0)]),u=new Si(h,new Tn({color:11065599,transparent:!0,opacity:0,depthWrite:!1,blending:Ft}));u.rotation.z=.3,u.userData.isAgnJet=!0,Pe.add(u)}const _=[.72,.92,.62,.35,.78];Pe.rotation.set(_[Ut.galaxyType],-.25+Ut.galaxyType*.06,.06),Pe.visible=!1,R_(e),D_(),C_(e),f_({universe:Ut,civilizationData:rn,civilizationSimulation:an,cosmicEvents:Ci}),P_(),v_(Ut)}function R_(n){const t=un(Ut.seed,771);Hr=[];const e=4800,i=new Float32Array(e*3),s=new Float32Array(e*3);ws=new Float32Array(e*3),Fo=new Float32Array(e);const r=new kt(16777215),a=new kt(16739624);for(let S=0;S<e;S++){const T=t()*Math.PI*2,R=Q(t,-1,1),v=Math.sqrt(1-R*R),y=Math.cbrt(t());ws[S*3]=Math.cos(T)*v*y,ws[S*3+1]=R*y,ws[S*3+2]=Math.sin(T)*v*y,Fo[S]=lt.clamp(1+re(t)*.035*Ut.primordialFluctuation,.82,1.18);const P=r.clone().lerp(a,Math.pow(t(),.7));s[S*3]=P.r,s[S*3+1]=P.g,s[S*3+2]=P.b}const o=new ie;o.setAttribute("position",new ee(i,3)),o.setAttribute("color",new ee(s,3)),Uo=new tn(o,new Ye({size:.24,map:Ce(),alphaTest:.012,vertexColors:!0,transparent:!0,opacity:1,depthWrite:!1,blending:Ft})),wn.add(Uo);const c=340,l=new Float32Array(c*6);ts=new Float32Array(c*4);for(let S=0;S<c;S++){const T=t()*Math.PI*2,R=Math.acos(2*t()-1);ts[S*4]=Math.sin(R)*Math.cos(T),ts[S*4+1]=Math.cos(R),ts[S*4+2]=Math.sin(R)*Math.sin(T),ts[S*4+3]=.45+t()*.75}const d=new ie;d.setAttribute("position",new ee(l,3)),No=new Ko(d,new Tn({color:16762253,transparent:!0,opacity:.8,blending:Ft,depthWrite:!1})),wn.add(No),Ur=new ce(new oe({map:Ge(),color:16777215,transparent:!0,opacity:1,depthTest:!1,depthWrite:!1,blending:Ft})),Ur.scale.setScalar(.2),wn.add(Ur),bh=[16774367,16751444,8962047].map((S,T)=>{const R=new ce(new oe({map:Ji(),color:S,transparent:!0,opacity:0,depthTest:!1,depthWrite:!1,blending:Ft}));return R.userData.offset=T*.13,wn.add(R),R});const f=1350,p=new Float32Array(f*3),m=new Float32Array(f*3);on=new Float32Array(f*3),xn={sourceIndices:new Uint16Array(f),axes:new Float32Array(f*3),orbitRates:new Float32Array(f),escapeAt:new Float32Array(f),speeds:new Float32Array(f),fates:new Uint8Array(f)};const _=lt.clamp((Ut.gravity-.5)*6+(Ut.galaxyType===3?4:0),0,12);for(let S=0;S<f;S++){const T=Math.floor(t()*n.length/3),R=T*3;xn.sourceIndices[S]=T;const v=n[R],y=n[R+1],P=n[R+2];p[S*3]=on[S*3]=v,p[S*3+1]=on[S*3+1]=y,p[S*3+2]=on[S*3+2]=P,t(),t(),t(),xn.axes.set([is.axes[R],is.axes[R+1],is.axes[R+2]],S*3),xn.orbitRates[S]=is.orbitRates[T];const D=t(),F=D<.82?0:D<.92?1:D<.99?2:3;xn.fates[S]=F,xn.escapeAt[S]=F===1?1001:(F===3?704:F===2?724:710)+_+Math.pow(t(),.68)*(F===3?28:92),xn.speeds[S]=F===3?Q(t,1.7,2.6):Q(t,.55,1.05);const I=new kt(t()>.28?10204889:9125426);m[S*3]=I.r,m[S*3+1]=I.g,m[S*3+2]=I.b}const M=new ie;M.setAttribute("position",new ee(p,3)),M.setAttribute("color",new ee(m,3)),Gr=new tn(M,new Ye({size:.12,map:Ce(),alphaTest:.012,vertexColors:!0,transparent:!0,opacity:0,depthWrite:!1,blending:Ft})),ei.add(Gr),ei.rotation.copy(Pe.rotation);const h=Ut.hasCentralBlackHole?9:6;for(let S=0;S<h;S++){const T=S===0&&Ut.hasCentralBlackHole,R=T?.9:Q(t,.3,.5),v=Ir({color:T?16763286:t()>.35?16758652:12179455,tilt:Q(t,-.38,.38),phase:t()*Math.PI*2,visualScale:T?1.14:1,intensity:0}),y=new ce(new oe({map:Ge(),color:7315404,transparent:!0,opacity:0,depthWrite:!1,blending:Ft}));y.scale.set(1.2,1.2,1);const P=new ce(new oe({map:Ge(),color:15267071,transparent:!0,opacity:0,depthWrite:!1,blending:Ft}));if(P.scale.set(.2,.2,1),v.add(y,P),T)v.position.set(0,0,0);else{const D=Math.floor(t()*n.length/3)*3;v.position.set(n[D],n[D+1],n[D+2])}v.scale.setScalar(R),v.visible=!1,Object.assign(v.userData,{baseScale:R,birthAt:825+t()*34,evaporationAt:T?949:880+Math.pow(t(),.46)*64,hawkingGlow:y,finalPulse:P,spinDirection:t()<.5?-1:1}),Hr.push(v),ei.add(v)}const u=260,b=new Float32Array(u*3),x=new Float32Array(u*3);for(let S=0;S<u;S++){const T=t()*Math.PI*2,R=Math.acos(2*t()-1),v=4+Math.pow(t(),1/3)*24;b[S*3]=Math.sin(R)*Math.cos(T)*v,b[S*3+1]=Math.cos(R)*v,b[S*3+2]=Math.sin(R)*Math.sin(T)*v;const y=new kt().setHSL(.56+t()*.1,.28,.46+t()*.22);x[S*3]=y.r,x[S*3+1]=y.g,x[S*3+2]=y.b}const g=new ie;g.setAttribute("position",new ee(b,3)),g.setAttribute("color",new ee(x,3)),Th=b.slice(),Ah=x.slice(),Bs=new tn(g,new Ye({size:.11,map:Ce(),alphaTest:.01,vertexColors:!0,transparent:!0,opacity:0,depthWrite:!1,blending:Ft})),Ri.add(Bs);const A=Ut.cosmicFate.type==="vacuum-decay"?13019135:Ut.cosmicFate.type==="big-rip"?8440063:16744543;os=new hn(new qr(1,40,24),new Vs({color:A,transparent:!0,opacity:0,wireframe:!0,depthWrite:!1,blending:Ft})),os.position.set(4.2,-1.4,2.6),Ps=new ce(new oe({map:Ge(),color:A,transparent:!0,opacity:0,depthTest:!1,depthWrite:!1,blending:Ft})),Ps.scale.set(.2,.2,1),Ti.add(os,Ps),Ti.rotation.copy(Pe.rotation),wn.visible=!1,ei.visible=!1,Ri.visible=!1,Ti.visible=!1}function C_(n){const t=un(Ut.seed,1447);Ci=[];const e=Ut.hasCentralBlackHole?{type:"quasar-awakening",visual:"pulsar",label:"类星体短暂苏醒",message:"中心黑洞吸积率骤升，相对论喷流穿过星系核",preferCenter:!0,start:480+t()*16,duration:30,color:"#8dd9ff"}:{type:"magnetar-flare",visual:"pulsar",label:"磁星巨型耀斑",message:"磁壳重排释放高能辐射，脉冲扫过邻近恒星系",start:480+t()*16,duration:26,color:"#7dcaff"},i=[{type:"pair-instability-supernova",visual:"supernova",label:"成对不稳定超新星",message:"第一代巨星被完全撕碎，重元素云向外扩散",start:258+t()*18,duration:28,color:"#ffb36b"},{type:"young-pulsar-birth",visual:"pulsar",label:"年轻脉冲星诞生",message:"新生中子星高速自转，双极束流开始扫掠星际介质",start:302+t()*18,duration:27,color:"#68c8ff"},{type:"classical-nova",visual:"nova",label:"经典新星爆发",message:"白矮星表面的吸积氢发生热核失控，抛出明亮但低质量的壳层",start:336+t()*12,duration:20,color:"#ffe4a8"},{type:"type-ia-supernova",visual:"supernova",label:"Ia 型超新星爆发",message:"白矮星发生热核失控，将铁族元素抛入星际空间",start:368+t()*22,duration:25,color:"#ffd08a"},{type:"red-dwarf-superflare",visual:"stellar-flare",label:"红矮星超级耀斑",message:"磁场突然重联，高能辐射与带电粒子冲击近轨行星",start:396+t()*12,duration:21,color:"#ffcb72"},{type:"gamma-ray-burst",visual:"pulsar",label:"长伽马射线暴",message:"垂死巨星坍缩，狭窄高能喷流贯穿恒星外层",start:420+t()*20,duration:24,color:"#89b9ff"},{type:"neutron-star-kilonova",visual:"kilonova",label:"中子星并合千新星",message:"双中子星旋近并合，短伽马射线束与富含重元素的抛射物同时释放",start:450+t()*12,duration:25,color:"#caa5ff"},e,{type:"tidal-disruption-event",visual:"tidal-disruption",label:"潮汐瓦解事件",message:"恒星掠过中央黑洞的潮汐半径，被拉成长流并逐步吸积",preferCenter:!0,requiresCentralBlackHole:!0,start:502+t()*10,duration:30,color:"#72e4ff"},{type:"core-collapse-supernova",visual:"supernova",label:"核坍缩超新星",message:"恒星核心坍缩，冲击波把新合成元素送入星际云",start:518+t()*20,duration:27,color:"#ff875c"},{type:"pulsar-glitch",visual:"pulsar",label:"脉冲星自转突变",message:"中子星内部角动量重分配，脉冲节律突然跃迁",start:548+t()*18,duration:22,color:"#8ba8ff"},{type:"superluminous-supernova",visual:"supernova",label:"超亮超新星",message:"磁星引擎持续注入能量，爆发亮度超过普通超新星",start:552+t()*16,duration:26,color:"#ff6b52"},{type:"failed-supernova",visual:"stellar-collapse",label:"失败超新星",message:"冲击波未能掀开恒星外层，亮度短暂上升后整体坍缩为黑洞",start:586+t()*14,duration:29,color:"#b87958"},{type:"stellar-black-hole-merger",visual:"black-hole-merger",label:"双黑洞合并",message:"时空啁啾达到峰值，引力波波前穿过局部星域（形变已视觉放大）",preferCenter:!0,start:616+t()*18,duration:38,persistUntil:Math.min(845,Ut.cosmicFate.onsetAt||845),persistenceFadeDuration:24,color:"#c897ff"},{type:"late-black-hole-merger",visual:"black-hole-merger",label:"孤立黑洞捕获合并",message:"漫长引力散射后完成并合，残余黑洞在阻尼振铃中反冲",preferCenter:!0,start:872+t()*18,duration:42,persistUntil:950,persistenceFadeDuration:18,color:"#9bb8ff"}].filter(l=>(!l.requiresCentralBlackHole||Ut.hasCentralBlackHole)&&(l.type!=="late-black-hole-merger"||Ut.cosmicFate.type==="heat-death"||Ut.cosmicFate.outcomeExponent>45)).map((l,d)=>{const f=a_(l,Ut,d),p={...l,simulation:f};return f?.model==="black-hole-binary"&&(p.gasRich=f.gasRich,p.radiatedMassFraction=f.radiatedMassFraction,p.recoilKms=f.recoilKms),f?.persistentRemnant&&(p.persistUntil=Math.min(845,Ut.cosmicFate.onsetAt||845),p.persistenceFadeDuration=24),p}),s={"pair-instability-supernova":{radius:.55,maxStars:5,sourceDim:.02,neighborDim:.96,kick:.018,civilization:.08,range:2.4},"young-pulsar-birth":{radius:.42,maxStars:2,sourceDim:.12,neighborDim:.99,kick:.01,civilization:.035,range:1.8,directional:!0,beamAngle:.12},"classical-nova":{radius:.18,maxStars:1,sourceDim:1,neighborDim:1,kick:0,civilization:.012,range:.75,maxSpecies:1},"type-ia-supernova":{radius:.48,maxStars:4,sourceDim:.02,neighborDim:.97,kick:.012,civilization:.06,range:2.1},"red-dwarf-superflare":{radius:.22,maxStars:1,sourceDim:1,neighborDim:1,kick:0,civilization:.09,range:1.15,maxSpecies:1},"gamma-ray-burst":{radius:7.5,maxStars:46,sourceDim:.025,neighborDim:.82,kick:0,civilization:.42,range:12,maxSpecies:1,directional:!0,beamAngle:.1},"neutron-star-kilonova":{radius:4.8,maxStars:24,sourceDim:.03,neighborDim:.9,kick:.006,civilization:.24,range:8.5,maxSpecies:1,directional:!0,beamAngle:.14},"quasar-awakening":{radius:8.5,maxStars:60,sourceDim:.95,neighborDim:.96,kick:0,civilization:.16,range:14,maxSpecies:2,directional:!0,beamAngle:.16},"magnetar-flare":{radius:1.1,maxStars:8,sourceDim:.82,neighborDim:.94,kick:0,civilization:.12,range:3.2,maxSpecies:1},"tidal-disruption-event":{radius:.32,maxStars:2,sourceDim:.015,neighborDim:.995,kick:.008,civilization:.075,range:2.8,maxSpecies:1},"core-collapse-supernova":{radius:.5,maxStars:4,sourceDim:.025,neighborDim:.97,kick:.014,civilization:.06,range:2.2},"pulsar-glitch":{radius:.01,maxStars:1,sourceDim:.985,neighborDim:1,kick:0,civilization:0,range:0,maxSpecies:0},"superluminous-supernova":{radius:.62,maxStars:6,sourceDim:.02,neighborDim:.95,kick:.02,civilization:.09,range:2.8,maxSpecies:1},"failed-supernova":{radius:.24,maxStars:2,sourceDim:.008,neighborDim:.995,kick:.003,civilization:.025,range:1.25,maxSpecies:1},"stellar-black-hole-merger":{radius:.08,maxStars:1,sourceDim:.06,neighborDim:1,kick:0,civilization:0,range:0,maxSpecies:0},"late-black-hole-merger":{radius:.08,maxStars:1,sourceDim:.04,neighborDim:1,kick:0,civilization:0,range:0,maxSpecies:0}},r=(l=!1)=>{let d=Math.floor(t()*n.length/3);const f=l?2.8:6.2;for(let p=0;p<140;p++){const m=Math.floor(t()*n.length/3),_=m*3;if(Math.hypot(n[_],n[_+1],n[_+2])<f){d=m;break}}return{index:d,position:new B(n[d*3],n[d*3+1],n[d*3+2])}},a=(l,d)=>{const f=Ac(s[l.type],l.simulation),m={supernova:.08,nova:.14,kilonova:.22,pulsar:.46,"stellar-flare":.38,"tidal-disruption":.58,"stellar-collapse":.64,"black-hole-merger":.68}[l.visual]??.5,_=l.start+l.duration*m,M=[];for(let g=0;g<n.length/3;g++){const A=g*3,S=Math.hypot(n[A]-d.position.x,n[A+1]-d.position.y,n[A+2]-d.position.z);if(!(S>f.radius)){if(f.directional&&l.beamDirection&&S>.001){const T=new B(n[A]-d.position.x,n[A+1]-d.position.y,n[A+2]-d.position.z).normalize();if(Math.abs(T.dot(l.beamDirection))<Math.cos(f.beamAngle))continue}M.push({index:g,distance:S})}}M.sort((g,A)=>g.distance-A.distance);const h=M.slice(0,f.maxStars).map(({index:g,distance:A},S)=>{const T=g*3,R=1-Math.min(1,A/f.radius);let v=n[T]-d.position.x,y=n[T+1]-d.position.y,P=n[T+2]-d.position.z;const D=Math.hypot(v,y,P);if(D<.001){const I=t()*Math.PI*2,U=t()*2-1,O=Math.sqrt(1-U*U);v=Math.cos(I)*O,y=U,P=Math.sin(I)*O}else v/=D,y/=D,P/=D;const F=f.kick*(.2+R*.8)*(.72+t()*.5);return{index:g,dimFactor:S===0?f.sourceDim:1-(1-f.neighborDim)*R,kick:[v*F,y*F,P*F]}}),u={"pair-instability-supernova":"爆发源完全解体且没有致密残骸","classical-nova":"白矮星保留下来，重新开始从伴星吸积物质","type-ia-supernova":"白矮星被热核爆炸完全摧毁","red-dwarf-superflare":"宿主恒星保持完整，但近轨行星大气受到高能粒子冲击","neutron-star-kilonova":"并合形成大质量中子星或黑洞，并把重元素抛入星际空间","tidal-disruption-event":"恒星被撕碎，部分物质形成吸积流，部分沿轨道逃逸","core-collapse-supernova":"坍缩核心留下中子星或恒星级黑洞","superluminous-supernova":"恒星外层被大规模抛射，中心结局仍不确定","failed-supernova":"恒星几乎没有明亮爆炸便消失，留下新生黑洞"},b=o_(l),x=b||(l.visual==="black-hole-merger"?`约 ${(l.radiatedMassFraction*100).toFixed(1)}% 总质量以引力波带走，残余黑洞以约 ${l.recoilKms} km/s 反冲${l.gasRich?"，周围气体受热形成短暂余辉":"；真空环境中没有超新星式爆炸"}`:l.type==="pulsar-glitch"?"自转频率发生微小跃变，没有可见的大规模破坏":u[l.type]?`${u[l.type]}，${Math.max(0,h.length-1)} 个邻近恒星系受影响`:l.visual==="pulsar"?`${h.length} 个位于辐射束或近场内的恒星系受到影响`:`爆发源发生结构性改变，${Math.max(0,h.length-1)} 个邻近恒星系受冲击`);return{impactAt:_,impactPhase:m,starImpacts:h,systemOutcome:x}},o=(l,d,f,p,m)=>{if(!an||!xn)return[];const _=Ac(s[l.type],l.simulation),M=un(Ut.seed,6203+m*131),h=new Map,u=(g,A,S,T=!1,R="damage")=>{const v=`${R}:${g}:${A.toFixed(4)}`,y=h.get(v);if(y){y.severity=1-(1-y.severity)*(1-S),y.permanent||=T;return}h.set(v,{nodeIndex:g,at:A,severity:lt.clamp(S,0,1),permanent:T,kind:R,destructionRoll:M()})};if(_.civilization>0&&_.range>0)for(let g=0;g<an.habitatPositions.length/3;g++){const A=g*3,S=an.habitatPositions[A]-d.position.x,T=an.habitatPositions[A+1]-d.position.y,R=an.habitatPositions[A+2]-d.position.z,v=Math.hypot(S,T,R);if(v>_.range)continue;if(_.directional&&l.beamDirection&&v>.001){const F=1/v;if(Math.abs(S*F*l.beamDirection.x+T*F*l.beamDirection.y+R*F*l.beamDirection.z)<Math.cos(_.beamAngle))continue}const y=Math.max(.08,1-v/_.range),P=lt.clamp(_.civilization*(.62+y*.48)*(.84+M()*.3),0,.58),D=l.simulation?.pulsePhases;if(D?.length?D.forEach((F,I)=>{const U=l.simulation.pulseWeights?.[I]??1;u(g,l.start+l.duration*F,P*U)}):u(g,f.impactAt,P),l.simulation?.recoveryDuration&&l.simulation.recoveryFraction>0){const F=D?.length?Math.max(...D):f.impactPhase,I=l.start+l.duration*F+l.simulation.recoveryDuration;u(g,I,P*l.simulation.recoveryFraction,!1,"recovery")}}const b=new Map(f.starImpacts.map(g=>[g.index,g])),x=new Map;if(p)for(let g=0;g<p.indices.length;g++)p.restDistances[g]>=p.captureRadius||x.set(p.indices[g],p.restDistances[g]);for(let g=0;g<an.habitatRemnantIndices.length;g++){const A=an.habitatRemnantIndices[g],S=xn.sourceIndices[A],T=b.get(S);if(T){const v=1-T.dimFactor;v>.001&&u(g,f.impactAt,v,T.dimFactor<=.15)}const R=x.get(S);if(R!==void 0){const v=R/p.captureRadius*11;u(g,f.impactAt+v+13,1,!0)}}return Array.from(h.values()).sort((g,A)=>g.at-A.at||g.nodeIndex-A.nodeIndex)},c=(l,d,f)=>{const p=l.visual==="kilonova";if(l.visual!=="black-hole-merger"&&!p)return null;const m=p?6.4:l.type==="late-black-hole-merger"?7.2:8.8,_=[];for(let T=0;T<n.length/3;T++){const R=T*3,v=n[R]-d.position.x,y=n[R+1]-d.position.y,P=n[R+2]-d.position.z,D=Math.hypot(v,y,P);D>.12&&D<=m&&_.push({index:T,dx:v,dy:y,dz:P,distance:D})}const M=un(Ut.seed,9107+f*97),h=Math.min(p?900:1800,_.length),u=_.length/Math.max(1,h),b=new Uint16Array(h),x=new Float32Array(h),g=new Float32Array(h*3),A=new Float32Array(h);for(let T=0;T<h;T++){const R=T*u,v=_[Math.min(_.length-1,Math.floor(R+M()*u))],y=1/v.distance,P=v.dx*y;v.dy*y;const D=v.dz*y;let F=-D,I=0,U=P;const O=Math.hypot(F,I,U);O<.04?(F=1,I=0,U=0):(F/=O,I/=O,U/=O),b[T]=v.index,x[T]=v.distance,g.set([F,I,U],T*3),A[T]=Math.cos(Math.atan2(D,P)*2)*(.72+M()*.28)}const S=p?lt.clamp((l.simulation?.radiatedMassFraction||.025)/.04,.38,1):lt.clamp((l.simulation?.radiatedMassFraction||.045)/.045,.62,1.8);return{waveRadius:m,waveAmplitude:S,indices:b,distances:x,transverse:g,polarities:A}};i.forEach((l,d)=>{const f=new We,p=r(l.preferCenter);if(f.position.copy(p.position),f.visible=!1,si.add(f),s[l.type].directional&&(l.beamDirection=new B(re(t),re(t),re(t)).normalize(),f.quaternion.setFromUnitVectors(new B(0,1,0),l.beamDirection)),l.visual==="supernova"||l.visual==="nova"||l.visual==="kilonova"){const x=l.visual==="nova",g=l.visual==="kilonova",A=g?12099071:x?16770733:16756067,S=g?14731519:x?16317439:11458815,T=new ce(new oe({map:Ge(),color:16777215,transparent:!0,opacity:0,depthWrite:!1,blending:Ft})),R=new ce(new oe({map:Ge(),color:A,transparent:!0,opacity:0,depthWrite:!1,blending:Ft})),v=new ce(new oe({map:Ce(),color:S,transparent:!0,opacity:0,depthWrite:!1,blending:Ft}));v.scale.set(.16,.16,1);const y=lt.clamp(Math.sqrt((l.simulation?.ejectaMass||(x?2e-5:8))/(x?2e-5:8)),.7,1.65),P=Math.round((x?360:620)*y),D=new Float32Array(P*3),F=new Float32Array(P*3),I=new Float32Array(P*3),U=new Float32Array(P),O=new Float32Array(P),z=new kt(g?14283775:x?16775384:16773319),N=new kt(g?9261009:x?16758120:16730930);for(let mt=0;mt<P;mt++){const Pt=t()*Math.PI*2,Zt=Math.acos(2*t()-1),L=1+Math.sin(Pt*5+Zt*3)*.18+(t()-.5)*.24,Jt=new B(Math.sin(Zt)*Math.cos(Pt)*L,Math.cos(Zt)*(g?.34:1.08+t()*.34),Math.sin(Zt)*Math.sin(Pt)*L).normalize();I.set([Jt.x,Jt.y,Jt.z],mt*3);const J=g?lt.clamp((l.simulation?.ejectaVelocityC||.2)/.18,.72,1.55):x?lt.clamp((l.simulation?.ejectaVelocityKms||1800)/1800,.64,1.7):lt.clamp((l.simulation?.ejectaVelocityKms||9e3)/9e3,.62,1.72),ht=x?.46*J:J;U[mt]=(.38+Math.pow(t(),.48)*1.45+Math.abs(Jt.y)*.22)*ht,O[mt]=Math.pow(t(),2.4)*.22;const ot=z.clone().lerp(N,Math.pow(t(),.52));F.set([ot.r,ot.g,ot.b],mt*3)}const Z=new ie;Z.setAttribute("position",new ee(D,3)),Z.setAttribute("color",new ee(F,3));const Y=new tn(Z,new Ye({size:.1,map:Ce(),alphaTest:.008,vertexColors:!0,transparent:!0,opacity:0,depthWrite:!1,blending:Ft})),it=Math.round((x?160:280)*Math.min(1.45,y)),vt=new Float32Array(it*3),Rt=new Float32Array(it*3),et=new Float32Array(it);for(let mt=0;mt<it;mt++){const Pt=t()*Math.PI*2,Zt=2*t()-1,L=Math.sqrt(1-Zt*Zt);Rt.set([Math.cos(Pt)*L,Zt,Math.sin(Pt)*L],mt*3),et[mt]=t()*Math.PI*2}const tt=new ie;tt.setAttribute("position",new ee(vt,3));const W=g?10845439:x?16769184:16766112,X=new tn(tt,new Ye({color:W,size:x?.052:.072,map:Ce(),alphaTest:.01,transparent:!0,opacity:0,depthWrite:!1,blending:Ft}));let rt=null,bt=null;if(g){const mt=2.6+(l.simulation?.ejectaVelocityC||.2)*4.2,Pt=new ie;Pt.setAttribute("position",new we([0,-.12,0,0,-mt,0,0,.12,0,0,mt,0],3)),rt=new Ko(Pt,new Tn({color:13234175,transparent:!0,opacity:0,depthWrite:!1,blending:Ft})),bt=new ce(new oe({map:Ji(),color:12891391,transparent:!0,opacity:0,depthTest:!1,depthWrite:!1,blending:Ft}))}f.add(R,T,Y,X,v),rt&&f.add(rt),bt&&f.add(bt),f.userData.effect={innerFlash:T,photosphere:R,remnant:v,ejecta:Y,ejectaDirections:I,ejectaVelocity:U,ejectaDelay:O,shell:X,shellDirections:Rt,shellNoise:et,polarJets:rt,gravityWave:bt}}else if(l.visual==="tidal-disruption"){const x=Ir({color:8773119,tilt:.22,phase:t()*Math.PI*2,visualScale:.86});x.userData.spinDirection=1;const g=new ce(new oe({map:Ce(),color:16773577,transparent:!0,opacity:0,depthWrite:!1,blending:Ft}));g.scale.set(.28,.28,1);const A=new ce(new oe({map:Ge(),color:9366271,transparent:!0,opacity:0,depthTest:!1,depthWrite:!1,blending:Ft})),S=new ce(new oe({map:Ji(),color:7068927,transparent:!0,opacity:0,depthWrite:!1,blending:Ft,rotation:t()*Math.PI}));S.scale.set(1.5,.48,1);const T=480,R=new Float32Array(T*3),v=new Float32Array(T),y=new Float32Array(T),P=new Float32Array(T*3),D=new kt(16380359),F=new kt(5623807);for(let O=0;O<T;O++){const z=t()<(l.simulation?.boundFraction||.5);v[O]=z?-t():t(),y[O]=t()*Math.PI*2;const N=D.clone().lerp(F,Math.pow(t(),.62));P.set([N.r,N.g,N.b],O*3)}const I=new ie;I.setAttribute("position",new ee(R,3)),I.setAttribute("color",new ee(P,3));const U=new tn(I,new Ye({size:.075,map:Ce(),alphaTest:.008,vertexColors:!0,transparent:!0,opacity:0,depthWrite:!1,blending:Ft}));f.add(A,S,U,g,x),f.userData.effect={hole:x,starCore:g,flare:A,disk:S,debris:U,debrisOffsets:v,debrisNoise:y}}else if(l.visual==="stellar-flare"){const x=new ce(new oe({map:Ce(),color:16758618,transparent:!0,opacity:0,depthWrite:!1,blending:Ft})),g=new ce(new oe({map:Ge(),color:16742962,transparent:!0,opacity:0,depthWrite:!1,blending:Ft})),A=new ce(new oe({map:Ji(),color:16765563,transparent:!0,opacity:0,depthWrite:!1,blending:Ft}));x.scale.set(.25,.25,1);const S=[];for(let D=0;D<3;D++){const F=[];for(let U=0;U<=72;U++){const O=U/72*Math.PI;F.push(new B(Math.cos(O)*(.42+D*.16),Math.sin(O)*(.68+D*.18),Math.sin(O*2)*.06))}const I=new Si(new ie().setFromPoints(F),new Tn({color:D===1?16773283:16751442,transparent:!0,opacity:0,depthWrite:!1,blending:Ft}));I.rotation.y=D*1.86+t()*.35,S.push(I)}const T=320,R=new Float32Array(T*3),v=new Float32Array(T*3);for(let D=0;D<T;D++){const F=t()*Math.PI*2,I=Q(t,-.28,1),U=Math.sqrt(1-Math.min(1,I*I));v.set([Math.cos(F)*U,I,Math.sin(F)*U],D*3)}const y=new ie;y.setAttribute("position",new ee(R,3));const P=new tn(y,new Ye({color:16763248,size:.06,map:Ce(),alphaTest:.008,transparent:!0,opacity:0,depthWrite:!1,blending:Ft}));f.add(g,A,x,P,...S),f.userData.effect={starCore:x,halo:g,shock:A,loops:S,particles:P,particleDirections:v}}else if(l.visual==="stellar-collapse"){const x=new ce(new oe({map:Ce(),color:16753755,transparent:!0,opacity:0,depthWrite:!1,blending:Ft})),g=new ce(new oe({map:Ge(),color:10114360,transparent:!0,opacity:0,depthWrite:!1,blending:Ft})),A=Ir({color:10316632,tilt:-.18,phase:t()*Math.PI*2,visualScale:.72});A.userData.spinDirection=-1,A.visible=!1;const S=Math.round(180+(l.simulation?.ejectedEnvelopeFraction||.08)*920),T=new Float32Array(S*3),R=new Float32Array(S*3);for(let P=0;P<S;P++){const D=t()*Math.PI*2,F=t()*2-1,I=Math.sqrt(1-F*F);R.set([Math.cos(D)*I,F,Math.sin(D)*I],P*3)}const v=new ie;v.setAttribute("position",new ee(T,3));const y=new tn(v,new Ye({color:9196347,size:.065,map:Ce(),alphaTest:.008,transparent:!0,opacity:0,depthWrite:!1,blending:Ft}));f.add(g,y,x,A),f.userData.effect={starCore:x,shroud:g,remnantHole:A,dust:y,dustDirections:R}}else if(l.visual==="pulsar"){const x=new ce(new oe({map:Ce(),color:16055295,transparent:!0,opacity:0,depthWrite:!1,blending:Ft})),g=new ce(new oe({map:Ge(),color:4962815,transparent:!0,opacity:0,depthWrite:!1,blending:Ft})),A=new ce(new oe({map:Ge(),color:1472184,transparent:!0,opacity:0,depthWrite:!1,blending:Ft,rotation:t()*Math.PI})),S=new ce(new oe({map:Ge(),color:13233663,transparent:!0,opacity:0,depthWrite:!1,blending:Ft}));x.scale.set(.18,.18,1),A.scale.set(1.45,.58,1);const T=new We;T.rotation.z=.58+t()*.32;const R=l.simulation?.model==="collapsar-jet"?lt.clamp(l.simulation.lorentzFactor/260,.7,1.75):l.simulation?.model==="quasar-duty-cycle"?lt.clamp(l.simulation.jetLorentzFactor/8,.7,1.7):1,v=Math.round(420*R),y=new Float32Array(v*3),P=new Float32Array(v*3);for(let O=0;O<v;O++){const z=O%2?1:-1,N=.1+Math.pow(t(),.66)*2.6*R,Z=.012+N*.014,Y=t()*Math.PI*2;y[O*3]=Math.cos(Y)*Z*t(),y[O*3+1]=z*N,y[O*3+2]=Math.sin(Y)*Z*t();const it=.35+Math.pow(1-N/2.8,.45)*.65;P.set([.38*it,.76*it,it],O*3)}const D=new ie;D.setAttribute("position",new ee(y,3)),D.setAttribute("color",new ee(P,3));const F=new tn(D,new Ye({size:.09,map:Ce(),alphaTest:.008,vertexColors:!0,transparent:!0,opacity:0,depthWrite:!1,blending:Ft}));T.add(F);const I=[];for(let O=0;O<4;O++){const z=[],N=.5+O*.18;for(let Y=0;Y<=80;Y++){const it=Y/80*Math.PI*2;z.push(new B(Math.cos(it)*N,Math.sin(it)*N*.34,Math.sin(it*2)*.08))}const Z=new Si(new ie().setFromPoints(z),new Tn({color:7524351,transparent:!0,opacity:0,depthWrite:!1,blending:Ft}));Z.rotation.set(t()*Math.PI,t()*Math.PI,t()*Math.PI),I.push(Z),T.add(Z)}const U=[];for(let O=0;O<8;O++){const z=new ce(new oe({map:Ce(),color:10214911,transparent:!0,opacity:0,depthWrite:!1,blending:Ft}));z.scale.set(.11,.11,1),z.userData.offset=O/8,z.userData.side=O%2?1:-1,U.push(z),T.add(z)}f.add(A,g,S,x,T),f.userData.effect={core:x,halo:g,nebula:A,sweepGlow:S,rotor:T,jets:F,fieldLines:I,knots:U,jetPowerScale:R}}else if(l.visual==="black-hole-merger"){const x=(W,X)=>{const rt=Ir({color:W,tilt:Q(t,-.28,.28),phase:t()*Math.PI*2,visualScale:1.08});return rt.userData.spinDirection=X,rt},g=new We;g.rotation.set(.76,.18,.24);const A=x(16759408,1),S=x(10999807,-1),T=x(16767405,1);T.scale.setScalar(1.24),T.visible=!1;const R=W=>{const X=new Float32Array(252),rt=new ie;return rt.setAttribute("position",new ee(X,3)),new Si(rt,new Tn({color:W,transparent:!0,opacity:0,depthWrite:!1,blending:Ft}))},v=R(16751445),y=R(7979007);g.add(v,y,A,S,T);const P=new ce(new oe({map:Ge(),color:l.gasRich?16769717:14478079,transparent:!0,opacity:0,depthTest:!1,depthWrite:!1,blending:Ft})),D=new ce(new oe({map:Ji(),color:16757871,transparent:!0,opacity:0,depthTest:!1,depthWrite:!1,blending:Ft}));D.visible=l.gasRich;const F=[10209535,13810175,7976959].map(W=>new ce(new oe({map:Ji(),color:W,transparent:!0,opacity:0,depthTest:!1,depthWrite:!1,blending:Ft}))),I=[];for(let W=0;W<6;W++){const X=[];for(let bt=0;bt<160;bt++){const mt=bt/160*Math.PI*2,Pt=1+Math.cos(mt*2+W*.7)*.065;X.push(new B(Math.cos(mt)*Pt,Math.sin(mt)*Pt,Math.sin(mt*2+W)*.055))}const rt=new Md(new ie().setFromPoints(X),new Tn({color:W%3===1?14205951:9422591,transparent:!0,opacity:0,depthTest:!1,depthWrite:!1,blending:Ft}));rt.rotation.set(.34+W*.47,.2+W*.39,W*.76),I.push(rt),f.add(rt)}const U=520,O=new Float32Array(U*3),z=new Float32Array(U*3),N=new Float32Array(U*3),Z=new kt(7979007),Y=new kt(14732287);for(let W=0;W<U;W++){const X=t()*Math.PI*2,rt=Q(t,-1,1),bt=Math.sqrt(1-rt*rt);z.set([Math.cos(X)*bt,rt,Math.sin(X)*bt],W*3);const mt=Z.clone().lerp(Y,t());N.set([mt.r,mt.g,mt.b],W*3)}const it=new ie;it.setAttribute("position",new ee(O,3)),it.setAttribute("color",new ee(N,3));const vt=new tn(it,new Ye({size:.075,map:Ce(),alphaTest:.008,vertexColors:!0,transparent:!0,opacity:0,depthTest:!1,depthWrite:!1,blending:Ft})),Rt=new ie;Rt.setAttribute("position",new ee(new Float32Array(6),3));const et=new Si(Rt,new Tn({color:16766122,transparent:!0,opacity:0,depthWrite:!1,blending:Ft})),tt=new B(re(t),re(t)*.45,re(t)).normalize();f.add(vt,...F,D,g,P,et),f.userData.effect={orbitalPlane:g,holeA:A,holeB:S,remnantHole:T,trailA:v,trailB:y,mergerGlow:P,gasEcho:D,waveHalos:F,wavefronts:I,waveDust:vt,waveDirections:z,recoilTrail:et,recoilVector:tt,gasRich:l.gasRich}}const _=a(l,p),M=c(l,p,d),h=l.visual==="black-hole-merger"?i_(n,p.position,{seedValue:Ut.seedValue,eventIndex:d}):null,u=l_(n,p.position,l.simulation,Ut.seedValue,d),b=o(l,p,_,h,d);Ci.push({...l,..._,civilizationNodeImpacts:b,civilizationImpacts:[],outcome:_.systemOutcome,waveSamples:M,gravityField:h,transientGravityField:u,group:f,sourceIndex:p.index,id:`${l.type}-${d}-${Ut.seed}`,label:l.label})}),si.rotation.copy(Pe.rotation),si.visible=!1}function P_(){const n=Ot("#cosmic-event-markers");n.innerHTML="",Ci.forEach(t=>{const e=document.createElement("button");e.type="button",e.className="event-marker",e.style.left=`${t.start/10}%`,e.style.setProperty("--event-color",t.color),e.setAttribute("aria-label",`${t.label}，${fh(t.start,Ut)}；${t.outcome}`),e.title=t.outcome,e.addEventListener("click",()=>{Cn=!1,Ot("#toggle-time").textContent="▶";const s={supernova:.14,nova:.2,kilonova:.28,pulsar:.54,"stellar-flare":.44,"tidal-disruption":.62,"stellar-collapse":.7,"black-hole-merger":.76}[t.visual]??.5;Xs(t.start+t.duration*s,!0)}),n.appendChild(e)})}function D_(){A_();const n=un(Ut.seed,410),t=Ut.speciesCount,e=on.length/3,i=Math.min(720,e),s=new Uint16Array(i),r=new Float32Array(i*3),a=e/i;for(let l=0;l<i;l++){const d=Math.min(e-1,Math.floor((l+n()*.86)*a)),f=d*3,p=l*3;s[l]=d,r[p]=on[f],r[p+1]=on[f+1],r[p+2]=on[f+2]}an={start:390,end:Ut.cosmicFate.type==="heat-death"?710:1e3,step:1,habitatRemnantIndices:s,habitatPositions:r,adjacency:[],snapshots:[]};const o=[],c=Ot("#civilization-legend");c.innerHTML="";for(let l=0;l<t;l++){let d=Math.floor(n()*i),f=-1;for(let D=0;D<96;D++){const F=Math.floor(n()*i),I=F*3;let U=1/0;o.forEach(O=>{const z=O*3;U=Math.min(U,Math.hypot(r[I]-r[z],r[I+1]-r[z+1],r[I+2]-r[z+2]))}),U>f&&(f=U,d=F)}o.push(d);const p=s[d],m=p*3,_=new B(on[m],on[m+1],on[m+2]),M=yc[l%yc.length],h=new ie;h.setAttribute("position",new ee(new Float32Array(i*3),3)),h.setDrawRange(0,0);const u=new Ye({color:M,size:.24,map:Ce(),alphaTest:.012,transparent:!0,opacity:.98,depthWrite:!1,blending:Ft}),b=new tn(h,u);Pe.add(b),Os.push(b);const x=n(),g=n(),A=Q(n,.72,1.36),S=Q(n,.68,1.32),T=t===1?0:l/(t-1),R=404+Math.round(T*72+n()*11),v=n()<.01,y=v?R+Math.round(Q(n,130,205)):1/0;rn.push({name:Mc[(Ut.seedValue+l)%Mc.length],color:M,home:_,homeNodeIndex:d,homeRemnantIndex:p,homeOffset:new B,hostRemnantIndices:new Uint16Array(i),hostOffsets:new Float32Array(i*3),displayCount:0,maxColonies:i,birth:R,highDimensional:v,ascensionAt:y,extinction:v?1001:Ut.cosmicFate.type==="heat-death"?710:1e3,aggression:x,cooperation:g,expansionRate:A,resilience:S});const P=`#${M.toString(16).padStart(6,"0")}`;c.insertAdjacentHTML("beforeend",`<div class="civilization-item" style="--species:${P}" data-species="${l}"><i></i><span>${rn[l].name}</span><b>未诞生</b></div>`)}}function Dh(){if(fn!=="generator")return;Ut=mh(),Sh(Ut),Ch(),Ph(),Ot(".universe-data").scrollTop=0;const n=Ot("#creation-flash");n.classList.remove("is-flashing"),n.offsetWidth,n.classList.add("is-flashing"),document.querySelectorAll(".metric").forEach(t=>{t.style.animation="none",t.offsetWidth,t.style.animation=""})}function L_(){fn==="generator"&&(fn="explorer",document.body.classList.add("is-exploring"),Ot("#generator-view").classList.remove("is-active"),Ot("#explorer-view").classList.add("is-active"),Ot("#mode-label").textContent="深空航行中",Ot("#regenerate-top").style.opacity="0",Ot("#regenerate-top").style.pointerEvents="none",Ot("#civilization-panel").classList.remove("is-expanded"),Ot("#toggle-civilizations").setAttribute("aria-expanded","false"),Pe.visible=!0,Pe.scale.setScalar(.02),dn.enabled=!0,dn.target.set(0,0,0),Ae=0,Ot("#cosmic-timeline").value=Ae,Xs(Ae,!0),M_(),Cn=!0,Ot("#toggle-time").textContent="Ⅱ",Ot("#toggle-time").setAttribute("aria-label","暂停时间"),Ve={type:"enter",start:performance.now(),duration:Qn?1:2100})}function I_(){fn==="explorer"&&(fn="generator",document.body.classList.remove("is-exploring"),Ot("#explorer-view").classList.remove("is-active"),Ot("#generator-view").classList.add("is-active"),Ot("#star-inspector").classList.remove("is-open"),Ot("#civilization-panel").classList.remove("is-expanded"),Ot("#toggle-civilizations").setAttribute("aria-expanded","false"),Ot("#mode-label").textContent="创世引擎在线",Ot("#regenerate-top").style.opacity="",Ot("#regenerate-top").style.pointerEvents="",Cn=!1,Ot("#toggle-time").textContent="▶",Ot("#toggle-time").setAttribute("aria-label","播放时间"),dn.enabled=!1,wn.visible=!1,ei.visible=!1,Ri.visible=!1,si.visible=!1,Ve={type:"leave",start:performance.now(),duration:Qn?1:1300})}function Dc(n){return n===1?1:1-Math.pow(2,-10*n)}function Lc(n){return n<.5?4*n*n*n:1-Math.pow(-2*n+2,3)/2}function U_(n){if(!Ve)return;const t=Math.min(1,(n-Ve.start)/Ve.duration);if(Ve.type==="birth"){const e=Dc(t);Te.scale.setScalar(e),Te.rotation.y=-.3+(1-e)*1.5}if(Ve.type==="enter"){const e=Lc(t);Te.scale.setScalar(Math.max(.001,1-e*1.5)),Te.rotation.z+=.018*(1-t),Pe.scale.setScalar(.02+Dc(t)*.98),Sn.position.z=32-e*12,Sn.position.y=.5+e*4.2}if(Ve.type==="leave"){const e=Lc(t);Pe.scale.setScalar(1-e*.96),Te.scale.setScalar(e),Sn.position.z=20+e*12,Sn.position.y=4.7-e*4.2}t===1&&(Ve.type==="enter"&&(Te.visible=!1),Ve.type==="leave"&&(Pe.visible=!1,Te.visible=!0,Te.scale.setScalar(1)),Ve=null)}function F_(n){if(fn!=="explorer"||Ve||!fs||Ae<250||Ae>750)return;as.x=n.clientX/innerWidth*2-1,as.y=-(n.clientY/innerHeight)*2+1,Io.setFromCamera(as,Sn);const t=Io.intersectObject(fs);if(!t.length)return;const e=t[0].index,i=un(Ut.seed,e*31),s=["M4 V","K1 III","G2 V","F8 V","A3 V","B1 Ia"],r=s[Math.floor(i()*s.length)],o={M:[2400,3700],K:[3700,5200],G:[5200,6e3],F:[6e3,7500],A:[7500,1e4],B:[1e4,3e4]}[r[0]],c=Math.round(Q(i,o[0],o[1])),l=Math.floor(i()*13),d=i()<Ut.lifeProbability?"候选信号":"未检出";Ot("#star-name").textContent=`RU-${String(e).padStart(5,"0")}`,Ot("#star-type").textContent=r,Ot("#star-temp").textContent=`${new Intl.NumberFormat("zh-CN").format(c)} K`,Ot("#star-planets").textContent=l,Ot("#star-life").textContent=d,Ot("#star-life").style.color=d==="候选信号"?"var(--accent)":"",Ot("#star-inspector").classList.add("is-open")}function N_(n){Ae+=n*H0(Ae)*Rh}function O_(){if(fn!=="explorer")return;const n=Ot("#civilization-panel"),t=!n.classList.contains("is-expanded");n.classList.toggle("is-expanded",t),Ot("#toggle-civilizations").setAttribute("aria-expanded",String(t))}function Ic(){return{mode:fn,epochEffectsGroup:wn,primordialParticles:Uo,primordialFactors:Fo,primordialDirections:ws,expansionStreaks:No,expansionDirections:ts,bangCore:Ur,shockwaves:bh,renderer:Pn,scene:Zr,clickableStars:fs,originalGalaxyPositions:Oo,stellarGravityState:is,universe:Ut,transition:Ve,galaxyGroup:Pe,starDeathThresholds:Bo,originalGalaxyColors:wh,cosmicEvents:Ci,remnantGroup:ei,stellarRemnants:Gr,originalRemnantPositions:on,remnantDynamics:xn,blackHoleRemnants:Hr,heatDeathGroup:Ri,coldPhotons:Bs,originalPhotonPositions:Th,originalPhotonColors:Ah,cosmicFateGroup:Ti,fateBubble:os,fateGlow:Ps,cosmicEventGroup:si}}function B_(n){const t=Ut.cosmicFate.type==="heat-death"?0:lt.smoothstep(Ae,Ut.cosmicFate.onsetAt,995);n.forEach((e,i)=>{const s=Os[i],r=rn[i];s.visible=e.alive&&e.count>0,s.material.opacity=(e.ascended?.88:.98)*(1-t),s.material.size=e.ascended?.31:.24,s.material.color.setHex(e.ascended?15325183:r.color)})}function Xs(n,t=!1){const e=k0(n,Ut,A0(Ut));if(Ae=e.position,S_(e),!fs)return;h_(Ae,Ic());const i=p_(an,Ae);K0(i,{civilizationSimulation:an,civilizationData:rn,civilizationGroups:Os}),Z0({clickableStars:fs,stellarRemnants:Gr,remnantDynamics:xn,cosmicPosition:Ae,civilizationData:rn,civilizationGroups:Os}),_i=g_(Ae,i,rn,Ci),B_(_i),E_({position:Ae,simulationState:i,runtimeState:_i,civilizationData:rn}),w_(i,rn);const s=_i.filter(l=>l.alive).length,r=_i.filter(l=>l.ascended).length,a=__(i,_i,rn.length),o=u_(Ae,Ic()),c=G0({position:Ae,label:e.label,universe:Ut,activeEvent:o,activeRelationship:a,ascendedSpecies:r,activeSpecies:s,civilizationData:rn});b_(c,t)}function Lh(n){requestAnimationFrame(Lh);const t=Math.min(.05,(n-Pc)/1e3);if(Pc=n,U_(n),wr.lerp(as,.04),fn==="generator"&&Te.visible&&!Qn&&(Te.rotation.y+=45e-5,Te.rotation.x=.15+wr.y*.045,Te.position.x=wr.x*.42,Te.position.y=wr.y*.25),fn==="explorer"){Cn&&!Ve&&(N_(t),Ae>=1e3&&(Ae=1e3,Cn=!1,Ot("#toggle-time").textContent="▶",Ot("#toggle-time").setAttribute("aria-label","播放时间")),Xs(Ae)),dn.update(),wn.position.set(0,0,0),Ri.visible&&!Qn&&(Bs.rotation.y+=35e-6,Bs.rotation.x+=9e-6),Ti.visible&&!Qn&&(os.rotation.y+=.0014,os.rotation.x-=7e-4,Ps.material.rotation=n*8e-5),Qn||Hr.forEach((i,s)=>{i.visible&&(Qi(i,n,i.userData.spinDirection||(s%2?-1:1)),i.userData.hawkingGlow.material.rotation=n*(25e-6+s*1e-6))}),d_(n,{cosmicEventGroup:si,prefersReducedMotion:Qn,cosmicEvents:Ci,camera:Sn}),dn.enabled||(Pe.rotation.y+=3e-4);const e=n*12e-5;Ot("#coord-x").textContent=`${Math.sin(e)<0?"−":"+"}${Math.abs(Math.sin(e)*9).toFixed(2)}`,Ot("#coord-y").textContent=`${Math.cos(e*.7)<0?"−":"+"}${Math.abs(Math.cos(e*.7)*9).toFixed(2)}`,Ot("#coord-z").textContent=`${Math.sin(e*.3)<0?"−":"+"}${Math.abs(Math.sin(e*.3)*3).toFixed(2)}`}Pn.render(Zr,Sn)}window.addEventListener("pointermove",n=>{as.x=n.clientX/innerWidth*2-1,as.y=-(n.clientY/innerHeight)*2+1;const t=Ot("#cursor");t.style.left=`${n.clientX}px`,t.style.top=`${n.clientY}px`,t.style.opacity="1"});window.addEventListener("resize",()=>{Sn.aspect=innerWidth/innerHeight,Sn.updateProjectionMatrix(),Pn.setSize(innerWidth,innerHeight),Pn.setPixelRatio(Math.min(devicePixelRatio,2))});il.addEventListener("click",F_);Ot("#regenerate-top").addEventListener("click",Dh);Ot("#enter-universe").addEventListener("click",L_);Ot("#close-inspector").addEventListener("click",()=>Ot("#star-inspector").classList.remove("is-open"));Ot("#toggle-civilizations").addEventListener("click",O_);Ot("#toggle-time").addEventListener("click",()=>{Ae>=1e3&&Xs(0,!0),Cn=!Cn,Ot("#toggle-time").textContent=Cn?"Ⅱ":"▶",Ot("#toggle-time").setAttribute("aria-label",Cn?"暂停时间":"播放时间")});const Li=Ot("#cosmic-timeline"),Vr=Li.closest(".range-wrap");function Ih(){Vr.classList.add("is-scrubbing"),Eh(Number(Li.value))}function Jr(){Vr.classList.contains("is-scrubbing")&&(Vr.classList.remove("is-scrubbing"),y_())}Li.addEventListener("pointerdown",Ih);window.addEventListener("pointerup",Jr);window.addEventListener("pointercancel",Jr);Li.addEventListener("keydown",n=>{["ArrowLeft","ArrowRight","Home","End","PageUp","PageDown"].includes(n.key)&&Ih()});Li.addEventListener("keyup",Jr);Li.addEventListener("blur",Jr);Li.addEventListener("input",n=>{Cn=!1,Ot("#toggle-time").textContent="▶",Xs(n.target.value,!0),Vr.classList.contains("is-scrubbing")&&Eh(Number(n.target.value))});document.querySelectorAll(".speed-controls button").forEach(n=>{n.addEventListener("click",()=>{Rh=Number(n.dataset.speed),document.querySelectorAll(".speed-controls button").forEach(t=>{const e=t===n;t.classList.toggle("is-active",e),t.setAttribute("aria-pressed",String(e))})})});document.addEventListener("keydown",n=>{if(n.key.toLowerCase()==="r"&&fn==="generator"&&Dh(),n.key==="Escape"&&fn==="explorer"){const t=Ot("#civilization-panel");t.classList.contains("is-expanded")?(t.classList.remove("is-expanded"),Ot("#toggle-civilizations").setAttribute("aria-expanded","false")):I_()}});Ut=mh();Sh(Ut);Ch();Ph();Lh(performance.now());
