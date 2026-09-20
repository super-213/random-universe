(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function e(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(s){if(s.ep)return;s.ep=!0;const r=e(s);fetch(s.href,r)}})();const Uo="180",ns={ROTATE:0,DOLLY:1,PAN:2},Qi={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Uh=0,rl=1,Fh=2,Pc=1,Nh=2,Nn=3,si=0,qe=1,On=2,ei=0,Ei=1,Ft=2,al=3,ol=4,Oh=5,xi=100,Bh=101,zh=102,kh=103,Hh=104,Gh=200,Vh=201,Wh=202,Xh=203,Ia=204,Ua=205,Yh=206,qh=207,$h=208,jh=209,Kh=210,Zh=211,Jh=212,Qh=213,tu=214,Fa=0,Na=1,Oa=2,as=3,Ba=4,za=5,ka=6,Ha=7,Dc=0,eu=1,nu=2,ni=0,iu=1,su=2,ru=3,Lc=4,au=5,ou=6,lu=7,Ic=300,os=301,ls=302,Ga=303,Va=304,kr=306,Wa=1e3,Mi=1001,Xa=1002,Sn=1003,cu=1004,Ys=1005,vn=1006,Kr=1007,Qn=1008,Hn=1009,Uc=1010,Fc=1011,Cs=1012,Fo=1013,Ti=1014,Bn=1015,Os=1016,No=1017,Oo=1018,Ps=1020,Nc=35902,Oc=35899,Bc=1021,zc=1022,Mn=1023,Ds=1026,Ls=1027,kc=1028,Bo=1029,Hc=1030,zo=1031,ko=1033,Tr=33776,Ar=33777,wr=33778,Rr=33779,Ya=35840,qa=35841,$a=35842,ja=35843,Ka=36196,Za=37492,Ja=37496,Qa=37808,to=37809,eo=37810,no=37811,io=37812,so=37813,ro=37814,ao=37815,oo=37816,lo=37817,co=37818,ho=37819,uo=37820,fo=37821,po=36492,mo=36494,go=36495,_o=36283,xo=36284,vo=36285,Mo=36286,hu=3200,uu=3201,du=0,fu=1,Zn="",Ie="srgb",cs="srgb-linear",Lr="linear",de="srgb",Li=7680,ll=519,pu=512,mu=513,gu=514,Gc=515,_u=516,xu=517,vu=518,Mu=519,yo=35044,cl="300 es",wn=2e3,Ir=2001;class Ci{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(e)===-1&&i[t].push(e)}hasEventListener(t,e){const i=this._listeners;return i===void 0?!1:i[t]!==void 0&&i[t].indexOf(e)!==-1}removeEventListener(t,e){const i=this._listeners;if(i===void 0)return;const s=i[t];if(s!==void 0){const r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){const e=this._listeners;if(e===void 0)return;const i=e[t.type];if(i!==void 0){t.target=this;const s=i.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,t);t.target=null}}}const Ue=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let hl=1234567;const As=Math.PI/180,Is=180/Math.PI;function zn(){const n=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Ue[n&255]+Ue[n>>8&255]+Ue[n>>16&255]+Ue[n>>24&255]+"-"+Ue[t&255]+Ue[t>>8&255]+"-"+Ue[t>>16&15|64]+Ue[t>>24&255]+"-"+Ue[e&63|128]+Ue[e>>8&255]+"-"+Ue[e>>16&255]+Ue[e>>24&255]+Ue[i&255]+Ue[i>>8&255]+Ue[i>>16&255]+Ue[i>>24&255]).toLowerCase()}function Zt(n,t,e){return Math.max(t,Math.min(e,n))}function Ho(n,t){return(n%t+t)%t}function yu(n,t,e,i,s){return i+(n-t)*(s-i)/(e-t)}function Su(n,t,e){return n!==t?(e-n)/(t-n):0}function ws(n,t,e){return(1-e)*n+e*t}function Eu(n,t,e,i){return ws(n,t,1-Math.exp(-e*i))}function bu(n,t=1){return t-Math.abs(Ho(n,t*2)-t)}function Tu(n,t,e){return n<=t?0:n>=e?1:(n=(n-t)/(e-t),n*n*(3-2*n))}function Au(n,t,e){return n<=t?0:n>=e?1:(n=(n-t)/(e-t),n*n*n*(n*(n*6-15)+10))}function wu(n,t){return n+Math.floor(Math.random()*(t-n+1))}function Ru(n,t){return n+Math.random()*(t-n)}function Cu(n){return n*(.5-Math.random())}function Pu(n){n!==void 0&&(hl=n);let t=hl+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function Du(n){return n*As}function Lu(n){return n*Is}function Iu(n){return(n&n-1)===0&&n!==0}function Uu(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function Fu(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function Nu(n,t,e,i,s){const r=Math.cos,a=Math.sin,o=r(e/2),h=a(e/2),l=r((t+i)/2),d=a((t+i)/2),f=r((t-i)/2),p=a((t-i)/2),m=r((i-t)/2),_=a((i-t)/2);switch(s){case"XYX":n.set(o*d,h*f,h*p,o*l);break;case"YZY":n.set(h*p,o*d,h*f,o*l);break;case"ZXZ":n.set(h*f,h*p,o*d,o*l);break;case"XZX":n.set(o*d,h*_,h*m,o*l);break;case"YXY":n.set(h*m,o*d,h*_,o*l);break;case"ZYZ":n.set(h*_,h*m,o*d,o*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function xn(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function he(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}const ft={DEG2RAD:As,RAD2DEG:Is,generateUUID:zn,clamp:Zt,euclideanModulo:Ho,mapLinear:yu,inverseLerp:Su,lerp:ws,damp:Eu,pingpong:bu,smoothstep:Tu,smootherstep:Au,randInt:wu,randFloat:Ru,randFloatSpread:Cu,seededRandom:Pu,degToRad:Du,radToDeg:Lu,isPowerOfTwo:Iu,ceilPowerOfTwo:Uu,floorPowerOfTwo:Fu,setQuaternionFromProperEuler:Nu,normalize:he,denormalize:xn};class Ht{constructor(t=0,e=0){Ht.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,i=this.y,s=t.elements;return this.x=s[0]*e+s[3]*i+s[6],this.y=s[1]*e+s[4]*i+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Zt(this.x,t.x,e.x),this.y=Zt(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=Zt(this.x,t,e),this.y=Zt(this.y,t,e),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Zt(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(Zt(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y;return e*e+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const i=Math.cos(e),s=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*i-a*s+t.x,this.y=r*s+a*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class ri{constructor(t=0,e=0,i=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=i,this._w=s}static slerpFlat(t,e,i,s,r,a,o){let h=i[s+0],l=i[s+1],d=i[s+2],f=i[s+3];const p=r[a+0],m=r[a+1],_=r[a+2],y=r[a+3];if(o===0){t[e+0]=h,t[e+1]=l,t[e+2]=d,t[e+3]=f;return}if(o===1){t[e+0]=p,t[e+1]=m,t[e+2]=_,t[e+3]=y;return}if(f!==y||h!==p||l!==m||d!==_){let c=1-o;const u=h*p+l*m+d*_+f*y,b=u>=0?1:-1,x=1-u*u;if(x>Number.EPSILON){const A=Math.sqrt(x),S=Math.atan2(A,u*b);c=Math.sin(c*S)/A,o=Math.sin(o*S)/A}const g=o*b;if(h=h*c+p*g,l=l*c+m*g,d=d*c+_*g,f=f*c+y*g,c===1-o){const A=1/Math.sqrt(h*h+l*l+d*d+f*f);h*=A,l*=A,d*=A,f*=A}}t[e]=h,t[e+1]=l,t[e+2]=d,t[e+3]=f}static multiplyQuaternionsFlat(t,e,i,s,r,a){const o=i[s],h=i[s+1],l=i[s+2],d=i[s+3],f=r[a],p=r[a+1],m=r[a+2],_=r[a+3];return t[e]=o*_+d*f+h*m-l*p,t[e+1]=h*_+d*p+l*f-o*m,t[e+2]=l*_+d*m+o*p-h*f,t[e+3]=d*_-o*f-h*p-l*m,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,i,s){return this._x=t,this._y=e,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const i=t._x,s=t._y,r=t._z,a=t._order,o=Math.cos,h=Math.sin,l=o(i/2),d=o(s/2),f=o(r/2),p=h(i/2),m=h(s/2),_=h(r/2);switch(a){case"XYZ":this._x=p*d*f+l*m*_,this._y=l*m*f-p*d*_,this._z=l*d*_+p*m*f,this._w=l*d*f-p*m*_;break;case"YXZ":this._x=p*d*f+l*m*_,this._y=l*m*f-p*d*_,this._z=l*d*_-p*m*f,this._w=l*d*f+p*m*_;break;case"ZXY":this._x=p*d*f-l*m*_,this._y=l*m*f+p*d*_,this._z=l*d*_+p*m*f,this._w=l*d*f-p*m*_;break;case"ZYX":this._x=p*d*f-l*m*_,this._y=l*m*f+p*d*_,this._z=l*d*_-p*m*f,this._w=l*d*f+p*m*_;break;case"YZX":this._x=p*d*f+l*m*_,this._y=l*m*f+p*d*_,this._z=l*d*_-p*m*f,this._w=l*d*f-p*m*_;break;case"XZY":this._x=p*d*f-l*m*_,this._y=l*m*f-p*d*_,this._z=l*d*_+p*m*f,this._w=l*d*f+p*m*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const i=e/2,s=Math.sin(i);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,i=e[0],s=e[4],r=e[8],a=e[1],o=e[5],h=e[9],l=e[2],d=e[6],f=e[10],p=i+o+f;if(p>0){const m=.5/Math.sqrt(p+1);this._w=.25/m,this._x=(d-h)*m,this._y=(r-l)*m,this._z=(a-s)*m}else if(i>o&&i>f){const m=2*Math.sqrt(1+i-o-f);this._w=(d-h)/m,this._x=.25*m,this._y=(s+a)/m,this._z=(r+l)/m}else if(o>f){const m=2*Math.sqrt(1+o-i-f);this._w=(r-l)/m,this._x=(s+a)/m,this._y=.25*m,this._z=(h+d)/m}else{const m=2*Math.sqrt(1+f-i-o);this._w=(a-s)/m,this._x=(r+l)/m,this._y=(h+d)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let i=t.dot(e)+1;return i<1e-8?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Zt(this.dot(t),-1,1)))}rotateTowards(t,e){const i=this.angleTo(t);if(i===0)return this;const s=Math.min(1,e/i);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const i=t._x,s=t._y,r=t._z,a=t._w,o=e._x,h=e._y,l=e._z,d=e._w;return this._x=i*d+a*o+s*l-r*h,this._y=s*d+a*h+r*o-i*l,this._z=r*d+a*l+i*h-s*o,this._w=a*d-i*o-s*h-r*l,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const i=this._x,s=this._y,r=this._z,a=this._w;let o=a*t._w+i*t._x+s*t._y+r*t._z;if(o<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,o=-o):this.copy(t),o>=1)return this._w=a,this._x=i,this._y=s,this._z=r,this;const h=1-o*o;if(h<=Number.EPSILON){const m=1-e;return this._w=m*a+e*this._w,this._x=m*i+e*this._x,this._y=m*s+e*this._y,this._z=m*r+e*this._z,this.normalize(),this}const l=Math.sqrt(h),d=Math.atan2(l,o),f=Math.sin((1-e)*d)/l,p=Math.sin(e*d)/l;return this._w=a*f+this._w*p,this._x=i*f+this._x*p,this._y=s*f+this._y*p,this._z=r*f+this._z*p,this._onChangeCallback(),this}slerpQuaternions(t,e,i){return this.copy(t).slerp(e,i)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class B{constructor(t=0,e=0,i=0){B.prototype.isVector3=!0,this.x=t,this.y=e,this.z=i}set(t,e,i){return i===void 0&&(i=this.z),this.x=t,this.y=e,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(ul.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(ul.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,i=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*i+r[6]*s,this.y=r[1]*e+r[4]*i+r[7]*s,this.z=r[2]*e+r[5]*i+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,i=this.y,s=this.z,r=t.elements,a=1/(r[3]*e+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*i+r[8]*s+r[12])*a,this.y=(r[1]*e+r[5]*i+r[9]*s+r[13])*a,this.z=(r[2]*e+r[6]*i+r[10]*s+r[14])*a,this}applyQuaternion(t){const e=this.x,i=this.y,s=this.z,r=t.x,a=t.y,o=t.z,h=t.w,l=2*(a*s-o*i),d=2*(o*e-r*s),f=2*(r*i-a*e);return this.x=e+h*l+a*f-o*d,this.y=i+h*d+o*l-r*f,this.z=s+h*f+r*d-a*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,i=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*i+r[8]*s,this.y=r[1]*e+r[5]*i+r[9]*s,this.z=r[2]*e+r[6]*i+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Zt(this.x,t.x,e.x),this.y=Zt(this.y,t.y,e.y),this.z=Zt(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=Zt(this.x,t,e),this.y=Zt(this.y,t,e),this.z=Zt(this.z,t,e),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Zt(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const i=t.x,s=t.y,r=t.z,a=e.x,o=e.y,h=e.z;return this.x=s*h-r*o,this.y=r*a-i*h,this.z=i*o-s*a,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const i=t.dot(this)/e;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return Zr.copy(this).projectOnVector(t),this.sub(Zr)}reflect(t){return this.sub(Zr.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(Zt(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y,s=this.z-t.z;return e*e+i*i+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,i){const s=Math.sin(e)*t;return this.x=s*Math.sin(i),this.y=Math.cos(e)*t,this.z=s*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,i){return this.x=t*Math.sin(e),this.y=i,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=i,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,i=Math.sqrt(1-e*e);return this.x=i*Math.cos(t),this.y=e,this.z=i*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Zr=new B,ul=new ri;class jt{constructor(t,e,i,s,r,a,o,h,l){jt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,i,s,r,a,o,h,l)}set(t,e,i,s,r,a,o,h,l){const d=this.elements;return d[0]=t,d[1]=s,d[2]=o,d[3]=e,d[4]=r,d[5]=h,d[6]=i,d[7]=a,d[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],this}extractBasis(t,e,i){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,s=e.elements,r=this.elements,a=i[0],o=i[3],h=i[6],l=i[1],d=i[4],f=i[7],p=i[2],m=i[5],_=i[8],y=s[0],c=s[3],u=s[6],b=s[1],x=s[4],g=s[7],A=s[2],S=s[5],T=s[8];return r[0]=a*y+o*b+h*A,r[3]=a*c+o*x+h*S,r[6]=a*u+o*g+h*T,r[1]=l*y+d*b+f*A,r[4]=l*c+d*x+f*S,r[7]=l*u+d*g+f*T,r[2]=p*y+m*b+_*A,r[5]=p*c+m*x+_*S,r[8]=p*u+m*g+_*T,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],a=t[4],o=t[5],h=t[6],l=t[7],d=t[8];return e*a*d-e*o*l-i*r*d+i*o*h+s*r*l-s*a*h}invert(){const t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],a=t[4],o=t[5],h=t[6],l=t[7],d=t[8],f=d*a-o*l,p=o*h-d*r,m=l*r-a*h,_=e*f+i*p+s*m;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const y=1/_;return t[0]=f*y,t[1]=(s*l-d*i)*y,t[2]=(o*i-s*a)*y,t[3]=p*y,t[4]=(d*e-s*h)*y,t[5]=(s*r-o*e)*y,t[6]=m*y,t[7]=(i*h-l*e)*y,t[8]=(a*e-i*r)*y,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,i,s,r,a,o){const h=Math.cos(r),l=Math.sin(r);return this.set(i*h,i*l,-i*(h*a+l*o)+a+t,-s*l,s*h,-s*(-l*a+h*o)+o+e,0,0,1),this}scale(t,e){return this.premultiply(Jr.makeScale(t,e)),this}rotate(t){return this.premultiply(Jr.makeRotation(-t)),this}translate(t,e){return this.premultiply(Jr.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,i,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,i=t.elements;for(let s=0;s<9;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<9;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Jr=new jt;function Vc(n){for(let t=n.length-1;t>=0;--t)if(n[t]>=65535)return!0;return!1}function Ur(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function Ou(){const n=Ur("canvas");return n.style.display="block",n}const dl={};function Us(n){n in dl||(dl[n]=!0,console.warn(n))}function Bu(n,t,e){return new Promise(function(i,s){function r(){switch(n.clientWaitSync(t,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:i()}}setTimeout(r,e)})}const fl=new jt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),pl=new jt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function zu(){const n={enabled:!0,workingColorSpace:cs,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===de&&(s.r=kn(s.r),s.g=kn(s.g),s.b=kn(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===de&&(s.r=is(s.r),s.g=is(s.g),s.b=is(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Zn?Lr:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return Us("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),n.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return Us("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),n.colorSpaceToWorking(s,r)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[cs]:{primaries:t,whitePoint:i,transfer:Lr,toXYZ:fl,fromXYZ:pl,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:Ie},outputColorSpaceConfig:{drawingBufferColorSpace:Ie}},[Ie]:{primaries:t,whitePoint:i,transfer:de,toXYZ:fl,fromXYZ:pl,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:Ie}}}),n}const oe=zu();function kn(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function is(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let Ii;class ku{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let i;if(t instanceof HTMLCanvasElement)i=t;else{Ii===void 0&&(Ii=Ur("canvas")),Ii.width=t.width,Ii.height=t.height;const s=Ii.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),i=Ii}return i.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=Ur("canvas");e.width=t.width,e.height=t.height;const i=e.getContext("2d");i.drawImage(t,0,0,t.width,t.height);const s=i.getImageData(0,0,t.width,t.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=kn(r[a]/255)*255;return i.putImageData(s,0,0),e}else if(t.data){const e=t.data.slice(0);for(let i=0;i<e.length;i++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[i]=Math.floor(kn(e[i]/255)*255):e[i]=kn(e[i]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let Hu=0;class Go{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Hu++}),this.uuid=zn(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):e instanceof VideoFrame?t.set(e.displayHeight,e.displayWidth,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(Qr(s[a].image)):r.push(Qr(s[a]))}else r=Qr(s);i.url=r}return e||(t.images[this.uuid]=i),i}}function Qr(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?ku.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Gu=0;const ta=new B;class Ve extends Ci{constructor(t=Ve.DEFAULT_IMAGE,e=Ve.DEFAULT_MAPPING,i=Mi,s=Mi,r=vn,a=Qn,o=Mn,h=Hn,l=Ve.DEFAULT_ANISOTROPY,d=Zn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Gu++}),this.uuid=zn(),this.name="",this.source=new Go(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=h,this.offset=new Ht(0,0),this.repeat=new Ht(1,1),this.center=new Ht(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new jt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=d,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(ta).x}get height(){return this.source.getSize(ta).y}get depth(){return this.source.getSize(ta).z}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const e in t){const i=t[e];if(i===void 0){console.warn(`THREE.Texture.setValues(): parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){console.warn(`THREE.Texture.setValues(): property '${e}' does not exist.`);continue}s&&i&&s.isVector2&&i.isVector2||s&&i&&s.isVector3&&i.isVector3||s&&i&&s.isMatrix3&&i.isMatrix3?s.copy(i):this[e]=i}}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),e||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Ic)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Wa:t.x=t.x-Math.floor(t.x);break;case Mi:t.x=t.x<0?0:1;break;case Xa:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Wa:t.y=t.y-Math.floor(t.y);break;case Mi:t.y=t.y<0?0:1;break;case Xa:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Ve.DEFAULT_IMAGE=null;Ve.DEFAULT_MAPPING=Ic;Ve.DEFAULT_ANISOTROPY=1;class Se{constructor(t=0,e=0,i=0,s=1){Se.prototype.isVector4=!0,this.x=t,this.y=e,this.z=i,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,i,s){return this.x=t,this.y=e,this.z=i,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,i=this.y,s=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*i+a[8]*s+a[12]*r,this.y=a[1]*e+a[5]*i+a[9]*s+a[13]*r,this.z=a[2]*e+a[6]*i+a[10]*s+a[14]*r,this.w=a[3]*e+a[7]*i+a[11]*s+a[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,i,s,r;const h=t.elements,l=h[0],d=h[4],f=h[8],p=h[1],m=h[5],_=h[9],y=h[2],c=h[6],u=h[10];if(Math.abs(d-p)<.01&&Math.abs(f-y)<.01&&Math.abs(_-c)<.01){if(Math.abs(d+p)<.1&&Math.abs(f+y)<.1&&Math.abs(_+c)<.1&&Math.abs(l+m+u-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const x=(l+1)/2,g=(m+1)/2,A=(u+1)/2,S=(d+p)/4,T=(f+y)/4,R=(_+c)/4;return x>g&&x>A?x<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(x),s=S/i,r=T/i):g>A?g<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(g),i=S/s,r=R/s):A<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(A),i=T/r,s=R/r),this.set(i,s,r,e),this}let b=Math.sqrt((c-_)*(c-_)+(f-y)*(f-y)+(p-d)*(p-d));return Math.abs(b)<.001&&(b=1),this.x=(c-_)/b,this.y=(f-y)/b,this.z=(p-d)/b,this.w=Math.acos((l+m+u-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Zt(this.x,t.x,e.x),this.y=Zt(this.y,t.y,e.y),this.z=Zt(this.z,t.z,e.z),this.w=Zt(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=Zt(this.x,t,e),this.y=Zt(this.y,t,e),this.z=Zt(this.z,t,e),this.w=Zt(this.w,t,e),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Zt(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this.w=t.w+(e.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Vu extends Ci{constructor(t=1,e=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:vn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},i),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=i.depth,this.scissor=new Se(0,0,t,e),this.scissorTest=!1,this.viewport=new Se(0,0,t,e);const s={width:t,height:e,depth:i.depth},r=new Ve(s);this.textures=[];const a=i.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}_setTextureOptions(t={}){const e={minFilter:vn,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,i=1){if(this.width!==t||this.height!==e||this.depth!==i){this.width=t,this.height=e,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=i,this.textures[s].isArrayTexture=this.textures[s].image.depth>1;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,i=t.textures.length;e<i;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;const s=Object.assign({},t.textures[e].image);this.textures[e].source=new Go(s)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ai extends Vu{constructor(t=1,e=1,i={}){super(t,e,i),this.isWebGLRenderTarget=!0}}class Wc extends Ve{constructor(t=null,e=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=Sn,this.minFilter=Sn,this.wrapR=Mi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class Wu extends Ve{constructor(t=null,e=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=Sn,this.minFilter=Sn,this.wrapR=Mi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Bs{constructor(t=new B(1/0,1/0,1/0),e=new B(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e+=3)this.expandByPoint(fn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,i=t.count;e<i;e++)this.expandByPoint(fn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const i=fn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const i=t.geometry;if(i!==void 0){const r=i.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,fn):fn.fromBufferAttribute(r,a),fn.applyMatrix4(t.matrixWorld),this.expandByPoint(fn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),qs.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),qs.copy(i.boundingBox)),qs.applyMatrix4(t.matrixWorld),this.union(qs)}const s=t.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,fn),fn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,i;return t.normal.x>0?(e=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),e<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(ps),$s.subVectors(this.max,ps),Ui.subVectors(t.a,ps),Fi.subVectors(t.b,ps),Ni.subVectors(t.c,ps),Vn.subVectors(Fi,Ui),Wn.subVectors(Ni,Fi),ci.subVectors(Ui,Ni);let e=[0,-Vn.z,Vn.y,0,-Wn.z,Wn.y,0,-ci.z,ci.y,Vn.z,0,-Vn.x,Wn.z,0,-Wn.x,ci.z,0,-ci.x,-Vn.y,Vn.x,0,-Wn.y,Wn.x,0,-ci.y,ci.x,0];return!ea(e,Ui,Fi,Ni,$s)||(e=[1,0,0,0,1,0,0,0,1],!ea(e,Ui,Fi,Ni,$s))?!1:(js.crossVectors(Vn,Wn),e=[js.x,js.y,js.z],ea(e,Ui,Fi,Ni,$s))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,fn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(fn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Dn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Dn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Dn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Dn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Dn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Dn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Dn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Dn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Dn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const Dn=[new B,new B,new B,new B,new B,new B,new B,new B],fn=new B,qs=new Bs,Ui=new B,Fi=new B,Ni=new B,Vn=new B,Wn=new B,ci=new B,ps=new B,$s=new B,js=new B,hi=new B;function ea(n,t,e,i,s){for(let r=0,a=n.length-3;r<=a;r+=3){hi.fromArray(n,r);const o=s.x*Math.abs(hi.x)+s.y*Math.abs(hi.y)+s.z*Math.abs(hi.z),h=t.dot(hi),l=e.dot(hi),d=i.dot(hi);if(Math.max(-Math.max(h,l,d),Math.min(h,l,d))>o)return!1}return!0}const Xu=new Bs,ms=new B,na=new B;class zs{constructor(t=new B,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const i=this.center;e!==void 0?i.copy(e):Xu.setFromPoints(t).getCenter(i);let s=0;for(let r=0,a=t.length;r<a;r++)s=Math.max(s,i.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const i=this.center.distanceToSquared(t);return e.copy(t),i>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;ms.subVectors(t,this.center);const e=ms.lengthSq();if(e>this.radius*this.radius){const i=Math.sqrt(e),s=(i-this.radius)*.5;this.center.addScaledVector(ms,s/i),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(na.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(ms.copy(t.center).add(na)),this.expandByPoint(ms.copy(t.center).sub(na))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}const Ln=new B,ia=new B,Ks=new B,Xn=new B,sa=new B,Zs=new B,ra=new B;class ks{constructor(t=new B,e=new B(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Ln)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const i=e.dot(this.direction);return i<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=Ln.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Ln.copy(this.origin).addScaledVector(this.direction,e),Ln.distanceToSquared(t))}distanceSqToSegment(t,e,i,s){ia.copy(t).add(e).multiplyScalar(.5),Ks.copy(e).sub(t).normalize(),Xn.copy(this.origin).sub(ia);const r=t.distanceTo(e)*.5,a=-this.direction.dot(Ks),o=Xn.dot(this.direction),h=-Xn.dot(Ks),l=Xn.lengthSq(),d=Math.abs(1-a*a);let f,p,m,_;if(d>0)if(f=a*h-o,p=a*o-h,_=r*d,f>=0)if(p>=-_)if(p<=_){const y=1/d;f*=y,p*=y,m=f*(f+a*p+2*o)+p*(a*f+p+2*h)+l}else p=r,f=Math.max(0,-(a*p+o)),m=-f*f+p*(p+2*h)+l;else p=-r,f=Math.max(0,-(a*p+o)),m=-f*f+p*(p+2*h)+l;else p<=-_?(f=Math.max(0,-(-a*r+o)),p=f>0?-r:Math.min(Math.max(-r,-h),r),m=-f*f+p*(p+2*h)+l):p<=_?(f=0,p=Math.min(Math.max(-r,-h),r),m=p*(p+2*h)+l):(f=Math.max(0,-(a*r+o)),p=f>0?r:Math.min(Math.max(-r,-h),r),m=-f*f+p*(p+2*h)+l);else p=a>0?-r:r,f=Math.max(0,-(a*p+o)),m=-f*f+p*(p+2*h)+l;return i&&i.copy(this.origin).addScaledVector(this.direction,f),s&&s.copy(ia).addScaledVector(Ks,p),m}intersectSphere(t,e){Ln.subVectors(t.center,this.origin);const i=Ln.dot(this.direction),s=Ln.dot(Ln)-i*i,r=t.radius*t.radius;if(s>r)return null;const a=Math.sqrt(r-s),o=i-a,h=i+a;return h<0?null:o<0?this.at(h,e):this.at(o,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(t.normal)+t.constant)/e;return i>=0?i:null}intersectPlane(t,e){const i=this.distanceToPlane(t);return i===null?null:this.at(i,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let i,s,r,a,o,h;const l=1/this.direction.x,d=1/this.direction.y,f=1/this.direction.z,p=this.origin;return l>=0?(i=(t.min.x-p.x)*l,s=(t.max.x-p.x)*l):(i=(t.max.x-p.x)*l,s=(t.min.x-p.x)*l),d>=0?(r=(t.min.y-p.y)*d,a=(t.max.y-p.y)*d):(r=(t.max.y-p.y)*d,a=(t.min.y-p.y)*d),i>a||r>s||((r>i||isNaN(i))&&(i=r),(a<s||isNaN(s))&&(s=a),f>=0?(o=(t.min.z-p.z)*f,h=(t.max.z-p.z)*f):(o=(t.max.z-p.z)*f,h=(t.min.z-p.z)*f),i>h||o>s)||((o>i||i!==i)&&(i=o),(h<s||s!==s)&&(s=h),s<0)?null:this.at(i>=0?i:s,e)}intersectsBox(t){return this.intersectBox(t,Ln)!==null}intersectTriangle(t,e,i,s,r){sa.subVectors(e,t),Zs.subVectors(i,t),ra.crossVectors(sa,Zs);let a=this.direction.dot(ra),o;if(a>0){if(s)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Xn.subVectors(this.origin,t);const h=o*this.direction.dot(Zs.crossVectors(Xn,Zs));if(h<0)return null;const l=o*this.direction.dot(sa.cross(Xn));if(l<0||h+l>a)return null;const d=-o*Xn.dot(ra);return d<0?null:this.at(d/a,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Me{constructor(t,e,i,s,r,a,o,h,l,d,f,p,m,_,y,c){Me.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,i,s,r,a,o,h,l,d,f,p,m,_,y,c)}set(t,e,i,s,r,a,o,h,l,d,f,p,m,_,y,c){const u=this.elements;return u[0]=t,u[4]=e,u[8]=i,u[12]=s,u[1]=r,u[5]=a,u[9]=o,u[13]=h,u[2]=l,u[6]=d,u[10]=f,u[14]=p,u[3]=m,u[7]=_,u[11]=y,u[15]=c,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Me().fromArray(this.elements)}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],e[9]=i[9],e[10]=i[10],e[11]=i[11],e[12]=i[12],e[13]=i[13],e[14]=i[14],e[15]=i[15],this}copyPosition(t){const e=this.elements,i=t.elements;return e[12]=i[12],e[13]=i[13],e[14]=i[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,i){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(t,e,i){return this.set(t.x,e.x,i.x,0,t.y,e.y,i.y,0,t.z,e.z,i.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,i=t.elements,s=1/Oi.setFromMatrixColumn(t,0).length(),r=1/Oi.setFromMatrixColumn(t,1).length(),a=1/Oi.setFromMatrixColumn(t,2).length();return e[0]=i[0]*s,e[1]=i[1]*s,e[2]=i[2]*s,e[3]=0,e[4]=i[4]*r,e[5]=i[5]*r,e[6]=i[6]*r,e[7]=0,e[8]=i[8]*a,e[9]=i[9]*a,e[10]=i[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,i=t.x,s=t.y,r=t.z,a=Math.cos(i),o=Math.sin(i),h=Math.cos(s),l=Math.sin(s),d=Math.cos(r),f=Math.sin(r);if(t.order==="XYZ"){const p=a*d,m=a*f,_=o*d,y=o*f;e[0]=h*d,e[4]=-h*f,e[8]=l,e[1]=m+_*l,e[5]=p-y*l,e[9]=-o*h,e[2]=y-p*l,e[6]=_+m*l,e[10]=a*h}else if(t.order==="YXZ"){const p=h*d,m=h*f,_=l*d,y=l*f;e[0]=p+y*o,e[4]=_*o-m,e[8]=a*l,e[1]=a*f,e[5]=a*d,e[9]=-o,e[2]=m*o-_,e[6]=y+p*o,e[10]=a*h}else if(t.order==="ZXY"){const p=h*d,m=h*f,_=l*d,y=l*f;e[0]=p-y*o,e[4]=-a*f,e[8]=_+m*o,e[1]=m+_*o,e[5]=a*d,e[9]=y-p*o,e[2]=-a*l,e[6]=o,e[10]=a*h}else if(t.order==="ZYX"){const p=a*d,m=a*f,_=o*d,y=o*f;e[0]=h*d,e[4]=_*l-m,e[8]=p*l+y,e[1]=h*f,e[5]=y*l+p,e[9]=m*l-_,e[2]=-l,e[6]=o*h,e[10]=a*h}else if(t.order==="YZX"){const p=a*h,m=a*l,_=o*h,y=o*l;e[0]=h*d,e[4]=y-p*f,e[8]=_*f+m,e[1]=f,e[5]=a*d,e[9]=-o*d,e[2]=-l*d,e[6]=m*f+_,e[10]=p-y*f}else if(t.order==="XZY"){const p=a*h,m=a*l,_=o*h,y=o*l;e[0]=h*d,e[4]=-f,e[8]=l*d,e[1]=p*f+y,e[5]=a*d,e[9]=m*f-_,e[2]=_*f-m,e[6]=o*d,e[10]=y*f+p}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Yu,t,qu)}lookAt(t,e,i){const s=this.elements;return Ke.subVectors(t,e),Ke.lengthSq()===0&&(Ke.z=1),Ke.normalize(),Yn.crossVectors(i,Ke),Yn.lengthSq()===0&&(Math.abs(i.z)===1?Ke.x+=1e-4:Ke.z+=1e-4,Ke.normalize(),Yn.crossVectors(i,Ke)),Yn.normalize(),Js.crossVectors(Ke,Yn),s[0]=Yn.x,s[4]=Js.x,s[8]=Ke.x,s[1]=Yn.y,s[5]=Js.y,s[9]=Ke.y,s[2]=Yn.z,s[6]=Js.z,s[10]=Ke.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,s=e.elements,r=this.elements,a=i[0],o=i[4],h=i[8],l=i[12],d=i[1],f=i[5],p=i[9],m=i[13],_=i[2],y=i[6],c=i[10],u=i[14],b=i[3],x=i[7],g=i[11],A=i[15],S=s[0],T=s[4],R=s[8],v=s[12],M=s[1],P=s[5],D=s[9],F=s[13],U=s[2],L=s[6],N=s[10],k=s[14],O=s[3],J=s[7],q=s[11],ct=s[15];return r[0]=a*S+o*M+h*U+l*O,r[4]=a*T+o*P+h*L+l*J,r[8]=a*R+o*D+h*N+l*q,r[12]=a*v+o*F+h*k+l*ct,r[1]=d*S+f*M+p*U+m*O,r[5]=d*T+f*P+p*L+m*J,r[9]=d*R+f*D+p*N+m*q,r[13]=d*v+f*F+p*k+m*ct,r[2]=_*S+y*M+c*U+u*O,r[6]=_*T+y*P+c*L+u*J,r[10]=_*R+y*D+c*N+u*q,r[14]=_*v+y*F+c*k+u*ct,r[3]=b*S+x*M+g*U+A*O,r[7]=b*T+x*P+g*L+A*J,r[11]=b*R+x*D+g*N+A*q,r[15]=b*v+x*F+g*k+A*ct,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[4],s=t[8],r=t[12],a=t[1],o=t[5],h=t[9],l=t[13],d=t[2],f=t[6],p=t[10],m=t[14],_=t[3],y=t[7],c=t[11],u=t[15];return _*(+r*h*f-s*l*f-r*o*p+i*l*p+s*o*m-i*h*m)+y*(+e*h*m-e*l*p+r*a*p-s*a*m+s*l*d-r*h*d)+c*(+e*l*f-e*o*m-r*a*f+i*a*m+r*o*d-i*l*d)+u*(-s*o*d-e*h*f+e*o*p+s*a*f-i*a*p+i*h*d)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,i){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=i),this}invert(){const t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],a=t[4],o=t[5],h=t[6],l=t[7],d=t[8],f=t[9],p=t[10],m=t[11],_=t[12],y=t[13],c=t[14],u=t[15],b=f*c*l-y*p*l+y*h*m-o*c*m-f*h*u+o*p*u,x=_*p*l-d*c*l-_*h*m+a*c*m+d*h*u-a*p*u,g=d*y*l-_*f*l+_*o*m-a*y*m-d*o*u+a*f*u,A=_*f*h-d*y*h-_*o*p+a*y*p+d*o*c-a*f*c,S=e*b+i*x+s*g+r*A;if(S===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const T=1/S;return t[0]=b*T,t[1]=(y*p*r-f*c*r-y*s*m+i*c*m+f*s*u-i*p*u)*T,t[2]=(o*c*r-y*h*r+y*s*l-i*c*l-o*s*u+i*h*u)*T,t[3]=(f*h*r-o*p*r-f*s*l+i*p*l+o*s*m-i*h*m)*T,t[4]=x*T,t[5]=(d*c*r-_*p*r+_*s*m-e*c*m-d*s*u+e*p*u)*T,t[6]=(_*h*r-a*c*r-_*s*l+e*c*l+a*s*u-e*h*u)*T,t[7]=(a*p*r-d*h*r+d*s*l-e*p*l-a*s*m+e*h*m)*T,t[8]=g*T,t[9]=(_*f*r-d*y*r-_*i*m+e*y*m+d*i*u-e*f*u)*T,t[10]=(a*y*r-_*o*r+_*i*l-e*y*l-a*i*u+e*o*u)*T,t[11]=(d*o*r-a*f*r-d*i*l+e*f*l+a*i*m-e*o*m)*T,t[12]=A*T,t[13]=(d*y*s-_*f*s+_*i*p-e*y*p-d*i*c+e*f*c)*T,t[14]=(_*o*s-a*y*s-_*i*h+e*y*h+a*i*c-e*o*c)*T,t[15]=(a*f*s-d*o*s+d*i*h-e*f*h-a*i*p+e*o*p)*T,this}scale(t){const e=this.elements,i=t.x,s=t.y,r=t.z;return e[0]*=i,e[4]*=s,e[8]*=r,e[1]*=i,e[5]*=s,e[9]*=r,e[2]*=i,e[6]*=s,e[10]*=r,e[3]*=i,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,i,s))}makeTranslation(t,e,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,i,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,e,-i,0,0,i,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,0,i,0,0,1,0,0,-i,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,0,i,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const i=Math.cos(e),s=Math.sin(e),r=1-i,a=t.x,o=t.y,h=t.z,l=r*a,d=r*o;return this.set(l*a+i,l*o-s*h,l*h+s*o,0,l*o+s*h,d*o+i,d*h-s*a,0,l*h-s*o,d*h+s*a,r*h*h+i,0,0,0,0,1),this}makeScale(t,e,i){return this.set(t,0,0,0,0,e,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,e,i,s,r,a){return this.set(1,i,r,0,t,1,a,0,e,s,1,0,0,0,0,1),this}compose(t,e,i){const s=this.elements,r=e._x,a=e._y,o=e._z,h=e._w,l=r+r,d=a+a,f=o+o,p=r*l,m=r*d,_=r*f,y=a*d,c=a*f,u=o*f,b=h*l,x=h*d,g=h*f,A=i.x,S=i.y,T=i.z;return s[0]=(1-(y+u))*A,s[1]=(m+g)*A,s[2]=(_-x)*A,s[3]=0,s[4]=(m-g)*S,s[5]=(1-(p+u))*S,s[6]=(c+b)*S,s[7]=0,s[8]=(_+x)*T,s[9]=(c-b)*T,s[10]=(1-(p+y))*T,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,i){const s=this.elements;let r=Oi.set(s[0],s[1],s[2]).length();const a=Oi.set(s[4],s[5],s[6]).length(),o=Oi.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],pn.copy(this);const l=1/r,d=1/a,f=1/o;return pn.elements[0]*=l,pn.elements[1]*=l,pn.elements[2]*=l,pn.elements[4]*=d,pn.elements[5]*=d,pn.elements[6]*=d,pn.elements[8]*=f,pn.elements[9]*=f,pn.elements[10]*=f,e.setFromRotationMatrix(pn),i.x=r,i.y=a,i.z=o,this}makePerspective(t,e,i,s,r,a,o=wn,h=!1){const l=this.elements,d=2*r/(e-t),f=2*r/(i-s),p=(e+t)/(e-t),m=(i+s)/(i-s);let _,y;if(h)_=r/(a-r),y=a*r/(a-r);else if(o===wn)_=-(a+r)/(a-r),y=-2*a*r/(a-r);else if(o===Ir)_=-a/(a-r),y=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=d,l[4]=0,l[8]=p,l[12]=0,l[1]=0,l[5]=f,l[9]=m,l[13]=0,l[2]=0,l[6]=0,l[10]=_,l[14]=y,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,i,s,r,a,o=wn,h=!1){const l=this.elements,d=2/(e-t),f=2/(i-s),p=-(e+t)/(e-t),m=-(i+s)/(i-s);let _,y;if(h)_=1/(a-r),y=a/(a-r);else if(o===wn)_=-2/(a-r),y=-(a+r)/(a-r);else if(o===Ir)_=-1/(a-r),y=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=d,l[4]=0,l[8]=0,l[12]=p,l[1]=0,l[5]=f,l[9]=0,l[13]=m,l[2]=0,l[6]=0,l[10]=_,l[14]=y,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){const e=this.elements,i=t.elements;for(let s=0;s<16;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<16;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t[e+9]=i[9],t[e+10]=i[10],t[e+11]=i[11],t[e+12]=i[12],t[e+13]=i[13],t[e+14]=i[14],t[e+15]=i[15],t}}const Oi=new B,pn=new Me,Yu=new B(0,0,0),qu=new B(1,1,1),Yn=new B,Js=new B,Ke=new B,ml=new Me,gl=new ri;class Gn{constructor(t=0,e=0,i=0,s=Gn.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=i,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,i,s=this._order){return this._x=t,this._y=e,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,i=!0){const s=t.elements,r=s[0],a=s[4],o=s[8],h=s[1],l=s[5],d=s[9],f=s[2],p=s[6],m=s[10];switch(e){case"XYZ":this._y=Math.asin(Zt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-d,m),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(p,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Zt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(o,m),this._z=Math.atan2(h,l)):(this._y=Math.atan2(-f,r),this._z=0);break;case"ZXY":this._x=Math.asin(Zt(p,-1,1)),Math.abs(p)<.9999999?(this._y=Math.atan2(-f,m),this._z=Math.atan2(-a,l)):(this._y=0,this._z=Math.atan2(h,r));break;case"ZYX":this._y=Math.asin(-Zt(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(p,m),this._z=Math.atan2(h,r)):(this._x=0,this._z=Math.atan2(-a,l));break;case"YZX":this._z=Math.asin(Zt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(-d,l),this._y=Math.atan2(-f,r)):(this._x=0,this._y=Math.atan2(o,m));break;case"XZY":this._z=Math.asin(-Zt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(p,l),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-d,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,i){return ml.makeRotationFromQuaternion(t),this.setFromRotationMatrix(ml,e,i)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return gl.setFromEuler(this),this.setFromQuaternion(gl,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Gn.DEFAULT_ORDER="XYZ";class Vo{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let $u=0;const _l=new B,Bi=new ri,In=new Me,Qs=new B,gs=new B,ju=new B,Ku=new ri,xl=new B(1,0,0),vl=new B(0,1,0),Ml=new B(0,0,1),yl={type:"added"},Zu={type:"removed"},zi={type:"childadded",child:null},aa={type:"childremoved",child:null};class Ne extends Ci{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:$u++}),this.uuid=zn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ne.DEFAULT_UP.clone();const t=new B,e=new Gn,i=new ri,s=new B(1,1,1);function r(){i.setFromEuler(e,!1)}function a(){e.setFromQuaternion(i,void 0,!1)}e._onChange(r),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Me},normalMatrix:{value:new jt}}),this.matrix=new Me,this.matrixWorld=new Me,this.matrixAutoUpdate=Ne.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Ne.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Vo,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Bi.setFromAxisAngle(t,e),this.quaternion.multiply(Bi),this}rotateOnWorldAxis(t,e){return Bi.setFromAxisAngle(t,e),this.quaternion.premultiply(Bi),this}rotateX(t){return this.rotateOnAxis(xl,t)}rotateY(t){return this.rotateOnAxis(vl,t)}rotateZ(t){return this.rotateOnAxis(Ml,t)}translateOnAxis(t,e){return _l.copy(t).applyQuaternion(this.quaternion),this.position.add(_l.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(xl,t)}translateY(t){return this.translateOnAxis(vl,t)}translateZ(t){return this.translateOnAxis(Ml,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(In.copy(this.matrixWorld).invert())}lookAt(t,e,i){t.isVector3?Qs.copy(t):Qs.set(t,e,i);const s=this.parent;this.updateWorldMatrix(!0,!1),gs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?In.lookAt(gs,Qs,this.up):In.lookAt(Qs,gs,this.up),this.quaternion.setFromRotationMatrix(In),s&&(In.extractRotation(s.matrixWorld),Bi.setFromRotationMatrix(In),this.quaternion.premultiply(Bi.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(yl),zi.child=t,this.dispatchEvent(zi),zi.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Zu),aa.child=t,this.dispatchEvent(aa),aa.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),In.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),In.multiply(t.parent.matrixWorld)),t.applyMatrix4(In),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(yl),zi.child=t,this.dispatchEvent(zi),zi.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let i=0,s=this.children.length;i<s;i++){const a=this.children[i].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,i=[]){this[t]===e&&i.push(this);const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(t,e,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(gs,t,ju),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(gs,Ku,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].updateMatrixWorld(t)}updateWorldMatrix(t,e){const i=this.parent;if(t===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",i={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,h){return o[h.uuid]===void 0&&(o[h.uuid]=h.toJSON(t)),h.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const h=o.shapes;if(Array.isArray(h))for(let l=0,d=h.length;l<d;l++){const f=h[l];r(t.shapes,f)}else r(t.shapes,h)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let h=0,l=this.material.length;h<l;h++)o.push(r(t.materials,this.material[h]));s.material=o}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){const h=this.animations[o];s.animations.push(r(t.animations,h))}}if(e){const o=a(t.geometries),h=a(t.materials),l=a(t.textures),d=a(t.images),f=a(t.shapes),p=a(t.skeletons),m=a(t.animations),_=a(t.nodes);o.length>0&&(i.geometries=o),h.length>0&&(i.materials=h),l.length>0&&(i.textures=l),d.length>0&&(i.images=d),f.length>0&&(i.shapes=f),p.length>0&&(i.skeletons=p),m.length>0&&(i.animations=m),_.length>0&&(i.nodes=_)}return i.object=s,i;function a(o){const h=[];for(const l in o){const d=o[l];delete d.metadata,h.push(d)}return h}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let i=0;i<t.children.length;i++){const s=t.children[i];this.add(s.clone())}return this}}Ne.DEFAULT_UP=new B(0,1,0);Ne.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ne.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const mn=new B,Un=new B,oa=new B,Fn=new B,ki=new B,Hi=new B,Sl=new B,la=new B,ca=new B,ha=new B,ua=new Se,da=new Se,fa=new Se;class ln{constructor(t=new B,e=new B,i=new B){this.a=t,this.b=e,this.c=i}static getNormal(t,e,i,s){s.subVectors(i,e),mn.subVectors(t,e),s.cross(mn);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,i,s,r){mn.subVectors(s,e),Un.subVectors(i,e),oa.subVectors(t,e);const a=mn.dot(mn),o=mn.dot(Un),h=mn.dot(oa),l=Un.dot(Un),d=Un.dot(oa),f=a*l-o*o;if(f===0)return r.set(0,0,0),null;const p=1/f,m=(l*h-o*d)*p,_=(a*d-o*h)*p;return r.set(1-m-_,_,m)}static containsPoint(t,e,i,s){return this.getBarycoord(t,e,i,s,Fn)===null?!1:Fn.x>=0&&Fn.y>=0&&Fn.x+Fn.y<=1}static getInterpolation(t,e,i,s,r,a,o,h){return this.getBarycoord(t,e,i,s,Fn)===null?(h.x=0,h.y=0,"z"in h&&(h.z=0),"w"in h&&(h.w=0),null):(h.setScalar(0),h.addScaledVector(r,Fn.x),h.addScaledVector(a,Fn.y),h.addScaledVector(o,Fn.z),h)}static getInterpolatedAttribute(t,e,i,s,r,a){return ua.setScalar(0),da.setScalar(0),fa.setScalar(0),ua.fromBufferAttribute(t,e),da.fromBufferAttribute(t,i),fa.fromBufferAttribute(t,s),a.setScalar(0),a.addScaledVector(ua,r.x),a.addScaledVector(da,r.y),a.addScaledVector(fa,r.z),a}static isFrontFacing(t,e,i,s){return mn.subVectors(i,e),Un.subVectors(t,e),mn.cross(Un).dot(s)<0}set(t,e,i){return this.a.copy(t),this.b.copy(e),this.c.copy(i),this}setFromPointsAndIndices(t,e,i,s){return this.a.copy(t[e]),this.b.copy(t[i]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,i,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return mn.subVectors(this.c,this.b),Un.subVectors(this.a,this.b),mn.cross(Un).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return ln.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return ln.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,i,s,r){return ln.getInterpolation(t,this.a,this.b,this.c,e,i,s,r)}containsPoint(t){return ln.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return ln.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const i=this.a,s=this.b,r=this.c;let a,o;ki.subVectors(s,i),Hi.subVectors(r,i),la.subVectors(t,i);const h=ki.dot(la),l=Hi.dot(la);if(h<=0&&l<=0)return e.copy(i);ca.subVectors(t,s);const d=ki.dot(ca),f=Hi.dot(ca);if(d>=0&&f<=d)return e.copy(s);const p=h*f-d*l;if(p<=0&&h>=0&&d<=0)return a=h/(h-d),e.copy(i).addScaledVector(ki,a);ha.subVectors(t,r);const m=ki.dot(ha),_=Hi.dot(ha);if(_>=0&&m<=_)return e.copy(r);const y=m*l-h*_;if(y<=0&&l>=0&&_<=0)return o=l/(l-_),e.copy(i).addScaledVector(Hi,o);const c=d*_-m*f;if(c<=0&&f-d>=0&&m-_>=0)return Sl.subVectors(r,s),o=(f-d)/(f-d+(m-_)),e.copy(s).addScaledVector(Sl,o);const u=1/(c+y+p);return a=y*u,o=p*u,e.copy(i).addScaledVector(ki,a).addScaledVector(Hi,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const Xc={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},qn={h:0,s:0,l:0},tr={h:0,s:0,l:0};function pa(n,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?n+(t-n)*6*e:e<1/2?t:e<2/3?n+(t-n)*6*(2/3-e):n}class zt{constructor(t,e,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,i)}set(t,e,i){if(e===void 0&&i===void 0){const s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Ie){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,oe.colorSpaceToWorking(this,e),this}setRGB(t,e,i,s=oe.workingColorSpace){return this.r=t,this.g=e,this.b=i,oe.colorSpaceToWorking(this,s),this}setHSL(t,e,i,s=oe.workingColorSpace){if(t=Ho(t,1),e=Zt(e,0,1),i=Zt(i,0,1),e===0)this.r=this.g=this.b=i;else{const r=i<=.5?i*(1+e):i+e-i*e,a=2*i-r;this.r=pa(a,r,t+1/3),this.g=pa(a,r,t),this.b=pa(a,r,t-1/3)}return oe.colorSpaceToWorking(this,s),this}setStyle(t,e=Ie){function i(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Ie){const i=Xc[t.toLowerCase()];return i!==void 0?this.setHex(i,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=kn(t.r),this.g=kn(t.g),this.b=kn(t.b),this}copyLinearToSRGB(t){return this.r=is(t.r),this.g=is(t.g),this.b=is(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Ie){return oe.workingToColorSpace(Fe.copy(this),t),Math.round(Zt(Fe.r*255,0,255))*65536+Math.round(Zt(Fe.g*255,0,255))*256+Math.round(Zt(Fe.b*255,0,255))}getHexString(t=Ie){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=oe.workingColorSpace){oe.workingToColorSpace(Fe.copy(this),e);const i=Fe.r,s=Fe.g,r=Fe.b,a=Math.max(i,s,r),o=Math.min(i,s,r);let h,l;const d=(o+a)/2;if(o===a)h=0,l=0;else{const f=a-o;switch(l=d<=.5?f/(a+o):f/(2-a-o),a){case i:h=(s-r)/f+(s<r?6:0);break;case s:h=(r-i)/f+2;break;case r:h=(i-s)/f+4;break}h/=6}return t.h=h,t.s=l,t.l=d,t}getRGB(t,e=oe.workingColorSpace){return oe.workingToColorSpace(Fe.copy(this),e),t.r=Fe.r,t.g=Fe.g,t.b=Fe.b,t}getStyle(t=Ie){oe.workingToColorSpace(Fe.copy(this),t);const e=Fe.r,i=Fe.g,s=Fe.b;return t!==Ie?`color(${t} ${e.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(t,e,i){return this.getHSL(qn),this.setHSL(qn.h+t,qn.s+e,qn.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,i){return this.r=t.r+(e.r-t.r)*i,this.g=t.g+(e.g-t.g)*i,this.b=t.b+(e.b-t.b)*i,this}lerpHSL(t,e){this.getHSL(qn),t.getHSL(tr);const i=ws(qn.h,tr.h,e),s=ws(qn.s,tr.s,e),r=ws(qn.l,tr.l,e);return this.setHSL(i,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,i=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*i+r[6]*s,this.g=r[1]*e+r[4]*i+r[7]*s,this.b=r[2]*e+r[5]*i+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Fe=new zt;zt.NAMES=Xc;let Ju=0;class Pi extends Ci{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Ju++}),this.uuid=zn(),this.name="",this.type="Material",this.blending=Ei,this.side=si,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ia,this.blendDst=Ua,this.blendEquation=xi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new zt(0,0,0),this.blendAlpha=0,this.depthFunc=as,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=ll,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Li,this.stencilZFail=Li,this.stencilZPass=Li,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const i=t[e];if(i===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[e]=i}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Ei&&(i.blending=this.blending),this.side!==si&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Ia&&(i.blendSrc=this.blendSrc),this.blendDst!==Ua&&(i.blendDst=this.blendDst),this.blendEquation!==xi&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==as&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==ll&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Li&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Li&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Li&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){const a=[];for(const o in r){const h=r[o];delete h.metadata,a.push(h)}return a}if(e){const r=s(t.textures),a=s(t.images);r.length>0&&(i.textures=r),a.length>0&&(i.images=a)}return i}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let i=null;if(e!==null){const s=e.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=e[r].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class Hs extends Pi{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new zt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Gn,this.combine=Dc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const Ee=new B,er=new Ht;let Qu=0;class te{constructor(t,e,i=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Qu++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=i,this.usage=yo,this.updateRanges=[],this.gpuType=Bn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,i){t*=this.itemSize,i*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[i+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,i=this.count;e<i;e++)er.fromBufferAttribute(this,e),er.applyMatrix3(t),this.setXY(e,er.x,er.y);else if(this.itemSize===3)for(let e=0,i=this.count;e<i;e++)Ee.fromBufferAttribute(this,e),Ee.applyMatrix3(t),this.setXYZ(e,Ee.x,Ee.y,Ee.z);return this}applyMatrix4(t){for(let e=0,i=this.count;e<i;e++)Ee.fromBufferAttribute(this,e),Ee.applyMatrix4(t),this.setXYZ(e,Ee.x,Ee.y,Ee.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)Ee.fromBufferAttribute(this,e),Ee.applyNormalMatrix(t),this.setXYZ(e,Ee.x,Ee.y,Ee.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)Ee.fromBufferAttribute(this,e),Ee.transformDirection(t),this.setXYZ(e,Ee.x,Ee.y,Ee.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let i=this.array[t*this.itemSize+e];return this.normalized&&(i=xn(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=he(i,this.array)),this.array[t*this.itemSize+e]=i,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=xn(e,this.array)),e}setX(t,e){return this.normalized&&(e=he(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=xn(e,this.array)),e}setY(t,e){return this.normalized&&(e=he(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=xn(e,this.array)),e}setZ(t,e){return this.normalized&&(e=he(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=xn(e,this.array)),e}setW(t,e){return this.normalized&&(e=he(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,i){return t*=this.itemSize,this.normalized&&(e=he(e,this.array),i=he(i,this.array)),this.array[t+0]=e,this.array[t+1]=i,this}setXYZ(t,e,i,s){return t*=this.itemSize,this.normalized&&(e=he(e,this.array),i=he(i,this.array),s=he(s,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this}setXYZW(t,e,i,s,r){return t*=this.itemSize,this.normalized&&(e=he(e,this.array),i=he(i,this.array),s=he(s,this.array),r=he(r,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==yo&&(t.usage=this.usage),t}}class Yc extends te{constructor(t,e,i){super(new Uint16Array(t),e,i)}}class qc extends te{constructor(t,e,i){super(new Uint32Array(t),e,i)}}class Ae extends te{constructor(t,e,i){super(new Float32Array(t),e,i)}}let td=0;const nn=new Me,ma=new Ne,Gi=new B,Ze=new Bs,_s=new Bs,Le=new B;class ne extends Ci{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:td++}),this.uuid=zn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Vc(t)?qc:Yc)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,i=0){this.groups.push({start:t,count:e,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const r=new jt().getNormalMatrix(t);i.applyNormalMatrix(r),i.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return nn.makeRotationFromQuaternion(t),this.applyMatrix4(nn),this}rotateX(t){return nn.makeRotationX(t),this.applyMatrix4(nn),this}rotateY(t){return nn.makeRotationY(t),this.applyMatrix4(nn),this}rotateZ(t){return nn.makeRotationZ(t),this.applyMatrix4(nn),this}translate(t,e,i){return nn.makeTranslation(t,e,i),this.applyMatrix4(nn),this}scale(t,e,i){return nn.makeScale(t,e,i),this.applyMatrix4(nn),this}lookAt(t){return ma.lookAt(t),ma.updateMatrix(),this.applyMatrix4(ma.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Gi).negate(),this.translate(Gi.x,Gi.y,Gi.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const i=[];for(let s=0,r=t.length;s<r;s++){const a=t[s];i.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Ae(i,3))}else{const i=Math.min(t.length,e.count);for(let s=0;s<i;s++){const r=t[s];e.setXYZ(s,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Bs);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new B(-1/0,-1/0,-1/0),new B(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let i=0,s=e.length;i<s;i++){const r=e[i];Ze.setFromBufferAttribute(r),this.morphTargetsRelative?(Le.addVectors(this.boundingBox.min,Ze.min),this.boundingBox.expandByPoint(Le),Le.addVectors(this.boundingBox.max,Ze.max),this.boundingBox.expandByPoint(Le)):(this.boundingBox.expandByPoint(Ze.min),this.boundingBox.expandByPoint(Ze.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new zs);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new B,1/0);return}if(t){const i=this.boundingSphere.center;if(Ze.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){const o=e[r];_s.setFromBufferAttribute(o),this.morphTargetsRelative?(Le.addVectors(Ze.min,_s.min),Ze.expandByPoint(Le),Le.addVectors(Ze.max,_s.max),Ze.expandByPoint(Le)):(Ze.expandByPoint(_s.min),Ze.expandByPoint(_s.max))}Ze.getCenter(i);let s=0;for(let r=0,a=t.count;r<a;r++)Le.fromBufferAttribute(t,r),s=Math.max(s,i.distanceToSquared(Le));if(e)for(let r=0,a=e.length;r<a;r++){const o=e[r],h=this.morphTargetsRelative;for(let l=0,d=o.count;l<d;l++)Le.fromBufferAttribute(o,l),h&&(Gi.fromBufferAttribute(t,l),Le.add(Gi)),s=Math.max(s,i.distanceToSquared(Le))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new te(new Float32Array(4*i.count),4));const a=this.getAttribute("tangent"),o=[],h=[];for(let R=0;R<i.count;R++)o[R]=new B,h[R]=new B;const l=new B,d=new B,f=new B,p=new Ht,m=new Ht,_=new Ht,y=new B,c=new B;function u(R,v,M){l.fromBufferAttribute(i,R),d.fromBufferAttribute(i,v),f.fromBufferAttribute(i,M),p.fromBufferAttribute(r,R),m.fromBufferAttribute(r,v),_.fromBufferAttribute(r,M),d.sub(l),f.sub(l),m.sub(p),_.sub(p);const P=1/(m.x*_.y-_.x*m.y);isFinite(P)&&(y.copy(d).multiplyScalar(_.y).addScaledVector(f,-m.y).multiplyScalar(P),c.copy(f).multiplyScalar(m.x).addScaledVector(d,-_.x).multiplyScalar(P),o[R].add(y),o[v].add(y),o[M].add(y),h[R].add(c),h[v].add(c),h[M].add(c))}let b=this.groups;b.length===0&&(b=[{start:0,count:t.count}]);for(let R=0,v=b.length;R<v;++R){const M=b[R],P=M.start,D=M.count;for(let F=P,U=P+D;F<U;F+=3)u(t.getX(F+0),t.getX(F+1),t.getX(F+2))}const x=new B,g=new B,A=new B,S=new B;function T(R){A.fromBufferAttribute(s,R),S.copy(A);const v=o[R];x.copy(v),x.sub(A.multiplyScalar(A.dot(v))).normalize(),g.crossVectors(S,v);const P=g.dot(h[R])<0?-1:1;a.setXYZW(R,x.x,x.y,x.z,P)}for(let R=0,v=b.length;R<v;++R){const M=b[R],P=M.start,D=M.count;for(let F=P,U=P+D;F<U;F+=3)T(t.getX(F+0)),T(t.getX(F+1)),T(t.getX(F+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new te(new Float32Array(e.count*3),3),this.setAttribute("normal",i);else for(let p=0,m=i.count;p<m;p++)i.setXYZ(p,0,0,0);const s=new B,r=new B,a=new B,o=new B,h=new B,l=new B,d=new B,f=new B;if(t)for(let p=0,m=t.count;p<m;p+=3){const _=t.getX(p+0),y=t.getX(p+1),c=t.getX(p+2);s.fromBufferAttribute(e,_),r.fromBufferAttribute(e,y),a.fromBufferAttribute(e,c),d.subVectors(a,r),f.subVectors(s,r),d.cross(f),o.fromBufferAttribute(i,_),h.fromBufferAttribute(i,y),l.fromBufferAttribute(i,c),o.add(d),h.add(d),l.add(d),i.setXYZ(_,o.x,o.y,o.z),i.setXYZ(y,h.x,h.y,h.z),i.setXYZ(c,l.x,l.y,l.z)}else for(let p=0,m=e.count;p<m;p+=3)s.fromBufferAttribute(e,p+0),r.fromBufferAttribute(e,p+1),a.fromBufferAttribute(e,p+2),d.subVectors(a,r),f.subVectors(s,r),d.cross(f),i.setXYZ(p+0,d.x,d.y,d.z),i.setXYZ(p+1,d.x,d.y,d.z),i.setXYZ(p+2,d.x,d.y,d.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,i=t.count;e<i;e++)Le.fromBufferAttribute(t,e),Le.normalize(),t.setXYZ(e,Le.x,Le.y,Le.z)}toNonIndexed(){function t(o,h){const l=o.array,d=o.itemSize,f=o.normalized,p=new l.constructor(h.length*d);let m=0,_=0;for(let y=0,c=h.length;y<c;y++){o.isInterleavedBufferAttribute?m=h[y]*o.data.stride+o.offset:m=h[y]*d;for(let u=0;u<d;u++)p[_++]=l[m++]}return new te(p,d,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new ne,i=this.index.array,s=this.attributes;for(const o in s){const h=s[o],l=t(h,i);e.setAttribute(o,l)}const r=this.morphAttributes;for(const o in r){const h=[],l=r[o];for(let d=0,f=l.length;d<f;d++){const p=l[d],m=t(p,i);h.push(m)}e.morphAttributes[o]=h}e.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,h=a.length;o<h;o++){const l=a[o];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const h=this.parameters;for(const l in h)h[l]!==void 0&&(t[l]=h[l]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const i=this.attributes;for(const h in i){const l=i[h];t.data.attributes[h]=l.toJSON(t.data)}const s={};let r=!1;for(const h in this.morphAttributes){const l=this.morphAttributes[h],d=[];for(let f=0,p=l.length;f<p;f++){const m=l[f];d.push(m.toJSON(t.data))}d.length>0&&(s[h]=d,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(t.data.boundingSphere=o.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const i=t.index;i!==null&&this.setIndex(i.clone());const s=t.attributes;for(const l in s){const d=s[l];this.setAttribute(l,d.clone(e))}const r=t.morphAttributes;for(const l in r){const d=[],f=r[l];for(let p=0,m=f.length;p<m;p++)d.push(f[p].clone(e));this.morphAttributes[l]=d}this.morphTargetsRelative=t.morphTargetsRelative;const a=t.groups;for(let l=0,d=a.length;l<d;l++){const f=a[l];this.addGroup(f.start,f.count,f.materialIndex)}const o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());const h=t.boundingSphere;return h!==null&&(this.boundingSphere=h.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const El=new Me,ui=new ks,nr=new zs,bl=new B,ir=new B,sr=new B,rr=new B,ga=new B,ar=new B,Tl=new B,or=new B;class cn extends Ne{constructor(t=new ne,e=new Hs){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){const i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,a=i.morphTargetsRelative;e.fromBufferAttribute(s,t);const o=this.morphTargetInfluences;if(r&&o){ar.set(0,0,0);for(let h=0,l=r.length;h<l;h++){const d=o[h],f=r[h];d!==0&&(ga.fromBufferAttribute(f,t),a?ar.addScaledVector(ga,d):ar.addScaledVector(ga.sub(e),d))}e.add(ar)}return e}raycast(t,e){const i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),nr.copy(i.boundingSphere),nr.applyMatrix4(r),ui.copy(t.ray).recast(t.near),!(nr.containsPoint(ui.origin)===!1&&(ui.intersectSphere(nr,bl)===null||ui.origin.distanceToSquared(bl)>(t.far-t.near)**2))&&(El.copy(r).invert(),ui.copy(t.ray).applyMatrix4(El),!(i.boundingBox!==null&&ui.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,e,ui)))}_computeIntersections(t,e,i){let s;const r=this.geometry,a=this.material,o=r.index,h=r.attributes.position,l=r.attributes.uv,d=r.attributes.uv1,f=r.attributes.normal,p=r.groups,m=r.drawRange;if(o!==null)if(Array.isArray(a))for(let _=0,y=p.length;_<y;_++){const c=p[_],u=a[c.materialIndex],b=Math.max(c.start,m.start),x=Math.min(o.count,Math.min(c.start+c.count,m.start+m.count));for(let g=b,A=x;g<A;g+=3){const S=o.getX(g),T=o.getX(g+1),R=o.getX(g+2);s=lr(this,u,t,i,l,d,f,S,T,R),s&&(s.faceIndex=Math.floor(g/3),s.face.materialIndex=c.materialIndex,e.push(s))}}else{const _=Math.max(0,m.start),y=Math.min(o.count,m.start+m.count);for(let c=_,u=y;c<u;c+=3){const b=o.getX(c),x=o.getX(c+1),g=o.getX(c+2);s=lr(this,a,t,i,l,d,f,b,x,g),s&&(s.faceIndex=Math.floor(c/3),e.push(s))}}else if(h!==void 0)if(Array.isArray(a))for(let _=0,y=p.length;_<y;_++){const c=p[_],u=a[c.materialIndex],b=Math.max(c.start,m.start),x=Math.min(h.count,Math.min(c.start+c.count,m.start+m.count));for(let g=b,A=x;g<A;g+=3){const S=g,T=g+1,R=g+2;s=lr(this,u,t,i,l,d,f,S,T,R),s&&(s.faceIndex=Math.floor(g/3),s.face.materialIndex=c.materialIndex,e.push(s))}}else{const _=Math.max(0,m.start),y=Math.min(h.count,m.start+m.count);for(let c=_,u=y;c<u;c+=3){const b=c,x=c+1,g=c+2;s=lr(this,a,t,i,l,d,f,b,x,g),s&&(s.faceIndex=Math.floor(c/3),e.push(s))}}}}function ed(n,t,e,i,s,r,a,o){let h;if(t.side===qe?h=i.intersectTriangle(a,r,s,!0,o):h=i.intersectTriangle(s,r,a,t.side===si,o),h===null)return null;or.copy(o),or.applyMatrix4(n.matrixWorld);const l=e.ray.origin.distanceTo(or);return l<e.near||l>e.far?null:{distance:l,point:or.clone(),object:n}}function lr(n,t,e,i,s,r,a,o,h,l){n.getVertexPosition(o,ir),n.getVertexPosition(h,sr),n.getVertexPosition(l,rr);const d=ed(n,t,e,i,ir,sr,rr,Tl);if(d){const f=new B;ln.getBarycoord(Tl,ir,sr,rr,f),s&&(d.uv=ln.getInterpolatedAttribute(s,o,h,l,f,new Ht)),r&&(d.uv1=ln.getInterpolatedAttribute(r,o,h,l,f,new Ht)),a&&(d.normal=ln.getInterpolatedAttribute(a,o,h,l,f,new B),d.normal.dot(i.direction)>0&&d.normal.multiplyScalar(-1));const p={a:o,b:h,c:l,normal:new B,materialIndex:0};ln.getNormal(ir,sr,rr,p.normal),d.face=p,d.barycoord=f}return d}class Gs extends ne{constructor(t=1,e=1,i=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:i,widthSegments:s,heightSegments:r,depthSegments:a};const o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);const h=[],l=[],d=[],f=[];let p=0,m=0;_("z","y","x",-1,-1,i,e,t,a,r,0),_("z","y","x",1,-1,i,e,-t,a,r,1),_("x","z","y",1,1,t,i,e,s,a,2),_("x","z","y",1,-1,t,i,-e,s,a,3),_("x","y","z",1,-1,t,e,i,s,r,4),_("x","y","z",-1,-1,t,e,-i,s,r,5),this.setIndex(h),this.setAttribute("position",new Ae(l,3)),this.setAttribute("normal",new Ae(d,3)),this.setAttribute("uv",new Ae(f,2));function _(y,c,u,b,x,g,A,S,T,R,v){const M=g/T,P=A/R,D=g/2,F=A/2,U=S/2,L=T+1,N=R+1;let k=0,O=0;const J=new B;for(let q=0;q<N;q++){const ct=q*P-F;for(let vt=0;vt<L;vt++){const Rt=vt*M-D;J[y]=Rt*b,J[c]=ct*x,J[u]=U,l.push(J.x,J.y,J.z),J[y]=0,J[c]=0,J[u]=S>0?1:-1,d.push(J.x,J.y,J.z),f.push(vt/T),f.push(1-q/R),k+=1}}for(let q=0;q<R;q++)for(let ct=0;ct<T;ct++){const vt=p+ct+L*q,Rt=p+ct+L*(q+1),Q=p+(ct+1)+L*(q+1),tt=p+(ct+1)+L*q;h.push(vt,Rt,tt),h.push(Rt,Q,tt),O+=6}o.addGroup(m,O,v),m+=O,p+=k}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Gs(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function hs(n){const t={};for(const e in n){t[e]={};for(const i in n[e]){const s=n[e][i];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][i]=null):t[e][i]=s.clone():Array.isArray(s)?t[e][i]=s.slice():t[e][i]=s}}return t}function ze(n){const t={};for(let e=0;e<n.length;e++){const i=hs(n[e]);for(const s in i)t[s]=i[s]}return t}function nd(n){const t=[];for(let e=0;e<n.length;e++)t.push(n[e].clone());return t}function $c(n){const t=n.getRenderTarget();return t===null?n.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:oe.workingColorSpace}const id={clone:hs,merge:ze};var sd=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,rd=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ai extends Pi{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=sd,this.fragmentShader=rd,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=hs(t.uniforms),this.uniformsGroups=nd(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const s in this.uniforms){const a=this.uniforms[s].value;a&&a.isTexture?e.uniforms[s]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[s]={type:"m4",value:a.toArray()}:e.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const i={};for(const s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(e.extensions=i),e}}class jc extends Ne{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Me,this.projectionMatrix=new Me,this.projectionMatrixInverse=new Me,this.coordinateSystem=wn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const $n=new B,Al=new Ht,wl=new Ht;class on extends jc{constructor(t=50,e=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=Is*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(As*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Is*2*Math.atan(Math.tan(As*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,i){$n.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set($n.x,$n.y).multiplyScalar(-t/$n.z),$n.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set($n.x,$n.y).multiplyScalar(-t/$n.z)}getViewSize(t,e){return this.getViewBounds(t,Al,wl),e.subVectors(wl,Al)}setViewOffset(t,e,i,s,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(As*.5*this.fov)/this.zoom,i=2*e,s=this.aspect*i,r=-.5*s;const a=this.view;if(this.view!==null&&this.view.enabled){const h=a.fullWidth,l=a.fullHeight;r+=a.offsetX*s/h,e-=a.offsetY*i/l,s*=a.width/h,i*=a.height/l}const o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-i,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const Vi=-90,Wi=1;class ad extends Ne{constructor(t,e,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new on(Vi,Wi,t,e);s.layers=this.layers,this.add(s);const r=new on(Vi,Wi,t,e);r.layers=this.layers,this.add(r);const a=new on(Vi,Wi,t,e);a.layers=this.layers,this.add(a);const o=new on(Vi,Wi,t,e);o.layers=this.layers,this.add(o);const h=new on(Vi,Wi,t,e);h.layers=this.layers,this.add(h);const l=new on(Vi,Wi,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[i,s,r,a,o,h]=e;for(const l of e)this.remove(l);if(t===wn)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),h.up.set(0,1,0),h.lookAt(0,0,-1);else if(t===Ir)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),h.up.set(0,-1,0),h.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const l of e)this.add(l),l.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,a,o,h,l,d]=this.children,f=t.getRenderTarget(),p=t.getActiveCubeFace(),m=t.getActiveMipmapLevel(),_=t.xr.enabled;t.xr.enabled=!1;const y=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,t.setRenderTarget(i,0,s),t.render(e,r),t.setRenderTarget(i,1,s),t.render(e,a),t.setRenderTarget(i,2,s),t.render(e,o),t.setRenderTarget(i,3,s),t.render(e,h),t.setRenderTarget(i,4,s),t.render(e,l),i.texture.generateMipmaps=y,t.setRenderTarget(i,5,s),t.render(e,d),t.setRenderTarget(f,p,m),t.xr.enabled=_,i.texture.needsPMREMUpdate=!0}}class Kc extends Ve{constructor(t=[],e=os,i,s,r,a,o,h,l,d){super(t,e,i,s,r,a,o,h,l,d),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class od extends Ai{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const i={width:t,height:t,depth:1},s=[i,i,i,i,i,i];this.texture=new Kc(s),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Gs(5,5,5),r=new ai({name:"CubemapFromEquirect",uniforms:hs(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:qe,blending:ei});r.uniforms.tEquirect.value=e;const a=new cn(s,r),o=e.minFilter;return e.minFilter===Qn&&(e.minFilter=vn),new ad(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e=!0,i=!0,s=!0){const r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,i,s);t.setRenderTarget(r)}}class Ge extends Ne{constructor(){super(),this.isGroup=!0,this.type="Group"}}const ld={type:"move"};class _a{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ge,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ge,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new B,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new B),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ge,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new B,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new B),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const i of t.hand.values())this._getHandJoint(e,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,i){let s=null,r=null,a=null;const o=this._targetRay,h=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){a=!0;for(const y of t.hand.values()){const c=e.getJointPose(y,i),u=this._getHandJoint(l,y);c!==null&&(u.matrix.fromArray(c.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.matrixWorldNeedsUpdate=!0,u.jointRadius=c.radius),u.visible=c!==null}const d=l.joints["index-finger-tip"],f=l.joints["thumb-tip"],p=d.position.distanceTo(f.position),m=.02,_=.005;l.inputState.pinching&&p>m+_?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&p<=m-_&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else h!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,i),r!==null&&(h.matrix.fromArray(r.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,r.linearVelocity?(h.hasLinearVelocity=!0,h.linearVelocity.copy(r.linearVelocity)):h.hasLinearVelocity=!1,r.angularVelocity?(h.hasAngularVelocity=!0,h.angularVelocity.copy(r.angularVelocity)):h.hasAngularVelocity=!1));o!==null&&(s=e.getPose(t.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(ld)))}return o!==null&&(o.visible=s!==null),h!==null&&(h.visible=r!==null),l!==null&&(l.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const i=new Ge;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[e.jointName]=i,t.add(i)}return t.joints[e.jointName]}}class Wo{constructor(t,e=25e-5){this.isFogExp2=!0,this.name="",this.color=new zt(t),this.density=e}clone(){return new Wo(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class cd extends Ne{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Gn,this.environmentIntensity=1,this.environmentRotation=new Gn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class hd{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=yo,this.updateRanges=[],this.version=0,this.uuid=zn()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,i){t*=this.stride,i*=e.stride;for(let s=0,r=this.stride;s<r;s++)this.array[t+s]=e.array[i+s];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=zn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(e,this.stride);return i.setUsage(this.usage),i}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=zn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Be=new B;class Fr{constructor(t,e,i,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=i,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,i=this.data.count;e<i;e++)Be.fromBufferAttribute(this,e),Be.applyMatrix4(t),this.setXYZ(e,Be.x,Be.y,Be.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)Be.fromBufferAttribute(this,e),Be.applyNormalMatrix(t),this.setXYZ(e,Be.x,Be.y,Be.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)Be.fromBufferAttribute(this,e),Be.transformDirection(t),this.setXYZ(e,Be.x,Be.y,Be.z);return this}getComponent(t,e){let i=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(i=xn(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=he(i,this.array)),this.data.array[t*this.data.stride+this.offset+e]=i,this}setX(t,e){return this.normalized&&(e=he(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=he(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=he(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=he(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=xn(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=xn(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=xn(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=xn(e,this.array)),e}setXY(t,e,i){return t=t*this.data.stride+this.offset,this.normalized&&(e=he(e,this.array),i=he(i,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this}setXYZ(t,e,i,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=he(e,this.array),i=he(i,this.array),s=he(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this.data.array[t+2]=s,this}setXYZW(t,e,i,s,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=he(e,this.array),i=he(i,this.array),s=he(s,this.array),r=he(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this.data.array[t+2]=s,this.data.array[t+3]=r,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let i=0;i<this.count;i++){const s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return new te(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new Fr(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let i=0;i<this.count;i++){const s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class ae extends Pi{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new zt(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}let Xi;const xs=new B,Yi=new B,qi=new B,$i=new Ht,vs=new Ht,Zc=new Me,cr=new B,Ms=new B,hr=new B,Rl=new Ht,xa=new Ht,Cl=new Ht;class le extends Ne{constructor(t=new ae){if(super(),this.isSprite=!0,this.type="Sprite",Xi===void 0){Xi=new ne;const e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new hd(e,5);Xi.setIndex([0,1,2,0,2,3]),Xi.setAttribute("position",new Fr(i,3,0,!1)),Xi.setAttribute("uv",new Fr(i,2,3,!1))}this.geometry=Xi,this.material=t,this.center=new Ht(.5,.5),this.count=1}raycast(t,e){t.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Yi.setFromMatrixScale(this.matrixWorld),Zc.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),qi.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Yi.multiplyScalar(-qi.z);const i=this.material.rotation;let s,r;i!==0&&(r=Math.cos(i),s=Math.sin(i));const a=this.center;ur(cr.set(-.5,-.5,0),qi,a,Yi,s,r),ur(Ms.set(.5,-.5,0),qi,a,Yi,s,r),ur(hr.set(.5,.5,0),qi,a,Yi,s,r),Rl.set(0,0),xa.set(1,0),Cl.set(1,1);let o=t.ray.intersectTriangle(cr,Ms,hr,!1,xs);if(o===null&&(ur(Ms.set(-.5,.5,0),qi,a,Yi,s,r),xa.set(0,1),o=t.ray.intersectTriangle(cr,hr,Ms,!1,xs),o===null))return;const h=t.ray.origin.distanceTo(xs);h<t.near||h>t.far||e.push({distance:h,point:xs.clone(),uv:ln.getInterpolation(xs,cr,Ms,hr,Rl,xa,Cl,new Ht),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}}function ur(n,t,e,i,s,r){$i.subVectors(n,e).addScalar(.5).multiply(i),s!==void 0?(vs.x=r*$i.x-s*$i.y,vs.y=s*$i.x+r*$i.y):vs.copy($i),n.copy(t),n.x+=vs.x,n.y+=vs.y,n.applyMatrix4(Zc)}const va=new B,ud=new B,dd=new jt;class jn{constructor(t=new B(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,i,s){return this.normal.set(t,e,i),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,i){const s=va.subVectors(i,e).cross(ud.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const i=t.delta(va),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(i,r)}intersectsLine(t){const e=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return e<0&&i>0||i<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const i=e||dd.getNormalMatrix(t),s=this.coplanarPoint(va).applyMatrix4(t),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const di=new zs,fd=new Ht(.5,.5),dr=new B;class Jc{constructor(t=new jn,e=new jn,i=new jn,s=new jn,r=new jn,a=new jn){this.planes=[t,e,i,s,r,a]}set(t,e,i,s,r,a){const o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(i),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(t){const e=this.planes;for(let i=0;i<6;i++)e[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,e=wn,i=!1){const s=this.planes,r=t.elements,a=r[0],o=r[1],h=r[2],l=r[3],d=r[4],f=r[5],p=r[6],m=r[7],_=r[8],y=r[9],c=r[10],u=r[11],b=r[12],x=r[13],g=r[14],A=r[15];if(s[0].setComponents(l-a,m-d,u-_,A-b).normalize(),s[1].setComponents(l+a,m+d,u+_,A+b).normalize(),s[2].setComponents(l+o,m+f,u+y,A+x).normalize(),s[3].setComponents(l-o,m-f,u-y,A-x).normalize(),i)s[4].setComponents(h,p,c,g).normalize(),s[5].setComponents(l-h,m-p,u-c,A-g).normalize();else if(s[4].setComponents(l-h,m-p,u-c,A-g).normalize(),e===wn)s[5].setComponents(l+h,m+p,u+c,A+g).normalize();else if(e===Ir)s[5].setComponents(h,p,c,g).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),di.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),di.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(di)}intersectsSprite(t){di.center.set(0,0,0);const e=fd.distanceTo(t.center);return di.radius=.7071067811865476+e,di.applyMatrix4(t.matrixWorld),this.intersectsSphere(di)}intersectsSphere(t){const e=this.planes,i=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(t){const e=this.planes;for(let i=0;i<6;i++){const s=e[i];if(dr.x=s.normal.x>0?t.max.x:t.min.x,dr.y=s.normal.y>0?t.max.y:t.min.y,dr.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(dr)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let i=0;i<6;i++)if(e[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class bn extends Pi{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new zt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const Nr=new B,Or=new B,Pl=new Me,ys=new ks,fr=new zs,Ma=new B,Dl=new B;class yi extends Ne{constructor(t=new ne,e=new bn){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,i=[0];for(let s=1,r=e.count;s<r;s++)Nr.fromBufferAttribute(e,s-1),Or.fromBufferAttribute(e,s),i[s]=i[s-1],i[s]+=Nr.distanceTo(Or);t.setAttribute("lineDistance",new Ae(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const i=this.geometry,s=this.matrixWorld,r=t.params.Line.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),fr.copy(i.boundingSphere),fr.applyMatrix4(s),fr.radius+=r,t.ray.intersectsSphere(fr)===!1)return;Pl.copy(s).invert(),ys.copy(t.ray).applyMatrix4(Pl);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),h=o*o,l=this.isLineSegments?2:1,d=i.index,p=i.attributes.position;if(d!==null){const m=Math.max(0,a.start),_=Math.min(d.count,a.start+a.count);for(let y=m,c=_-1;y<c;y+=l){const u=d.getX(y),b=d.getX(y+1),x=pr(this,t,ys,h,u,b,y);x&&e.push(x)}if(this.isLineLoop){const y=d.getX(_-1),c=d.getX(m),u=pr(this,t,ys,h,y,c,_-1);u&&e.push(u)}}else{const m=Math.max(0,a.start),_=Math.min(p.count,a.start+a.count);for(let y=m,c=_-1;y<c;y+=l){const u=pr(this,t,ys,h,y,y+1,y);u&&e.push(u)}if(this.isLineLoop){const y=pr(this,t,ys,h,_-1,m,_-1);y&&e.push(y)}}}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function pr(n,t,e,i,s,r,a){const o=n.geometry.attributes.position;if(Nr.fromBufferAttribute(o,s),Or.fromBufferAttribute(o,r),e.distanceSqToSegment(Nr,Or,Ma,Dl)>i)return;Ma.applyMatrix4(n.matrixWorld);const l=t.ray.origin.distanceTo(Ma);if(!(l<t.near||l>t.far))return{distance:l,point:Dl.clone().applyMatrix4(n.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:n}}const Ll=new B,Il=new B;class Xo extends yi{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,i=[];for(let s=0,r=e.count;s<r;s+=2)Ll.fromBufferAttribute(e,s),Il.fromBufferAttribute(e,s+1),i[s]=s===0?0:i[s-1],i[s+1]=i[s]+Ll.distanceTo(Il);t.setAttribute("lineDistance",new Ae(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class pd extends yi{constructor(t,e){super(t,e),this.isLineLoop=!0,this.type="LineLoop"}}class Ye extends Pi{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new zt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const Ul=new Me,So=new ks,mr=new zs,gr=new B;class Qe extends Ne{constructor(t=new ne,e=new Ye){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){const i=this.geometry,s=this.matrixWorld,r=t.params.Points.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),mr.copy(i.boundingSphere),mr.applyMatrix4(s),mr.radius+=r,t.ray.intersectsSphere(mr)===!1)return;Ul.copy(s).invert(),So.copy(t.ray).applyMatrix4(Ul);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),h=o*o,l=i.index,f=i.attributes.position;if(l!==null){const p=Math.max(0,a.start),m=Math.min(l.count,a.start+a.count);for(let _=p,y=m;_<y;_++){const c=l.getX(_);gr.fromBufferAttribute(f,c),Fl(gr,c,h,s,t,e,this)}}else{const p=Math.max(0,a.start),m=Math.min(f.count,a.start+a.count);for(let _=p,y=m;_<y;_++)gr.fromBufferAttribute(f,_),Fl(gr,_,h,s,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function Fl(n,t,e,i,s,r,a){const o=So.distanceSqToPoint(n);if(o<e){const h=new B;So.closestPointToPoint(n,h),h.applyMatrix4(i);const l=s.ray.origin.distanceTo(h);if(l<s.near||l>s.far)return;r.push({distance:l,distanceToRay:Math.sqrt(o),point:h,index:t,face:null,faceIndex:null,barycoord:null,object:a})}}class Hr extends Ve{constructor(t,e,i,s,r,a,o,h,l){super(t,e,i,s,r,a,o,h,l),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Qc extends Ve{constructor(t,e,i=Ti,s,r,a,o=Sn,h=Sn,l,d=Ds,f=1){if(d!==Ds&&d!==Ls)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const p={width:t,height:e,depth:f};super(p,s,r,a,o,h,d,i,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Go(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}class th extends Ve{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}}class Yo extends ne{constructor(t=[],e=[],i=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:i,detail:s};const r=[],a=[];o(s),l(i),d(),this.setAttribute("position",new Ae(r,3)),this.setAttribute("normal",new Ae(r.slice(),3)),this.setAttribute("uv",new Ae(a,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function o(b){const x=new B,g=new B,A=new B;for(let S=0;S<e.length;S+=3)m(e[S+0],x),m(e[S+1],g),m(e[S+2],A),h(x,g,A,b)}function h(b,x,g,A){const S=A+1,T=[];for(let R=0;R<=S;R++){T[R]=[];const v=b.clone().lerp(g,R/S),M=x.clone().lerp(g,R/S),P=S-R;for(let D=0;D<=P;D++)D===0&&R===S?T[R][D]=v:T[R][D]=v.clone().lerp(M,D/P)}for(let R=0;R<S;R++)for(let v=0;v<2*(S-R)-1;v++){const M=Math.floor(v/2);v%2===0?(p(T[R][M+1]),p(T[R+1][M]),p(T[R][M])):(p(T[R][M+1]),p(T[R+1][M+1]),p(T[R+1][M]))}}function l(b){const x=new B;for(let g=0;g<r.length;g+=3)x.x=r[g+0],x.y=r[g+1],x.z=r[g+2],x.normalize().multiplyScalar(b),r[g+0]=x.x,r[g+1]=x.y,r[g+2]=x.z}function d(){const b=new B;for(let x=0;x<r.length;x+=3){b.x=r[x+0],b.y=r[x+1],b.z=r[x+2];const g=c(b)/2/Math.PI+.5,A=u(b)/Math.PI+.5;a.push(g,1-A)}_(),f()}function f(){for(let b=0;b<a.length;b+=6){const x=a[b+0],g=a[b+2],A=a[b+4],S=Math.max(x,g,A),T=Math.min(x,g,A);S>.9&&T<.1&&(x<.2&&(a[b+0]+=1),g<.2&&(a[b+2]+=1),A<.2&&(a[b+4]+=1))}}function p(b){r.push(b.x,b.y,b.z)}function m(b,x){const g=b*3;x.x=t[g+0],x.y=t[g+1],x.z=t[g+2]}function _(){const b=new B,x=new B,g=new B,A=new B,S=new Ht,T=new Ht,R=new Ht;for(let v=0,M=0;v<r.length;v+=9,M+=6){b.set(r[v+0],r[v+1],r[v+2]),x.set(r[v+3],r[v+4],r[v+5]),g.set(r[v+6],r[v+7],r[v+8]),S.set(a[M+0],a[M+1]),T.set(a[M+2],a[M+3]),R.set(a[M+4],a[M+5]),A.copy(b).add(x).add(g).divideScalar(3);const P=c(A);y(S,M+0,b,P),y(T,M+2,x,P),y(R,M+4,g,P)}}function y(b,x,g,A){A<0&&b.x===1&&(a[x]=b.x-1),g.x===0&&g.z===0&&(a[x]=A/2/Math.PI+.5)}function c(b){return Math.atan2(b.z,-b.x)}function u(b){return Math.atan2(-b.y,Math.sqrt(b.x*b.x+b.z*b.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Yo(t.vertices,t.indices,t.radius,t.details)}}class qo extends Yo{constructor(t=1,e=0){const i=(1+Math.sqrt(5))/2,s=[-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new qo(t.radius,t.detail)}}class Gr extends ne{constructor(t=1,e=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:i,heightSegments:s};const r=t/2,a=e/2,o=Math.floor(i),h=Math.floor(s),l=o+1,d=h+1,f=t/o,p=e/h,m=[],_=[],y=[],c=[];for(let u=0;u<d;u++){const b=u*p-a;for(let x=0;x<l;x++){const g=x*f-r;_.push(g,-b,0),y.push(0,0,1),c.push(x/o),c.push(1-u/h)}}for(let u=0;u<h;u++)for(let b=0;b<o;b++){const x=b+l*u,g=b+l*(u+1),A=b+1+l*(u+1),S=b+1+l*u;m.push(x,g,S),m.push(g,A,S)}this.setIndex(m),this.setAttribute("position",new Ae(_,3)),this.setAttribute("normal",new Ae(y,3)),this.setAttribute("uv",new Ae(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Gr(t.width,t.height,t.widthSegments,t.heightSegments)}}class Vr extends ne{constructor(t=1,e=32,i=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:i,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},e=Math.max(3,Math.floor(e)),i=Math.max(2,Math.floor(i));const h=Math.min(a+o,Math.PI);let l=0;const d=[],f=new B,p=new B,m=[],_=[],y=[],c=[];for(let u=0;u<=i;u++){const b=[],x=u/i;let g=0;u===0&&a===0?g=.5/e:u===i&&h===Math.PI&&(g=-.5/e);for(let A=0;A<=e;A++){const S=A/e;f.x=-t*Math.cos(s+S*r)*Math.sin(a+x*o),f.y=t*Math.cos(a+x*o),f.z=t*Math.sin(s+S*r)*Math.sin(a+x*o),_.push(f.x,f.y,f.z),p.copy(f).normalize(),y.push(p.x,p.y,p.z),c.push(S+g,1-x),b.push(l++)}d.push(b)}for(let u=0;u<i;u++)for(let b=0;b<e;b++){const x=d[u][b+1],g=d[u][b],A=d[u+1][b],S=d[u+1][b+1];(u!==0||a>0)&&m.push(x,g,S),(u!==i-1||h<Math.PI)&&m.push(g,A,S)}this.setIndex(m),this.setAttribute("position",new Ae(_,3)),this.setAttribute("normal",new Ae(y,3)),this.setAttribute("uv",new Ae(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Vr(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class $o extends ne{constructor(t=1,e=.4,i=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:i,tubularSegments:s,arc:r},i=Math.floor(i),s=Math.floor(s);const a=[],o=[],h=[],l=[],d=new B,f=new B,p=new B;for(let m=0;m<=i;m++)for(let _=0;_<=s;_++){const y=_/s*r,c=m/i*Math.PI*2;f.x=(t+e*Math.cos(c))*Math.cos(y),f.y=(t+e*Math.cos(c))*Math.sin(y),f.z=e*Math.sin(c),o.push(f.x,f.y,f.z),d.x=t*Math.cos(y),d.y=t*Math.sin(y),p.subVectors(f,d).normalize(),h.push(p.x,p.y,p.z),l.push(_/s),l.push(m/i)}for(let m=1;m<=i;m++)for(let _=1;_<=s;_++){const y=(s+1)*m+_-1,c=(s+1)*(m-1)+_-1,u=(s+1)*(m-1)+_,b=(s+1)*m+_;a.push(y,c,b),a.push(c,u,b)}this.setIndex(a),this.setAttribute("position",new Ae(o,3)),this.setAttribute("normal",new Ae(h,3)),this.setAttribute("uv",new Ae(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new $o(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class md extends ne{constructor(t=null){if(super(),this.type="WireframeGeometry",this.parameters={geometry:t},t!==null){const e=[],i=new Set,s=new B,r=new B;if(t.index!==null){const a=t.attributes.position,o=t.index;let h=t.groups;h.length===0&&(h=[{start:0,count:o.count,materialIndex:0}]);for(let l=0,d=h.length;l<d;++l){const f=h[l],p=f.start,m=f.count;for(let _=p,y=p+m;_<y;_+=3)for(let c=0;c<3;c++){const u=o.getX(_+c),b=o.getX(_+(c+1)%3);s.fromBufferAttribute(a,u),r.fromBufferAttribute(a,b),Nl(s,r,i)===!0&&(e.push(s.x,s.y,s.z),e.push(r.x,r.y,r.z))}}}else{const a=t.attributes.position;for(let o=0,h=a.count/3;o<h;o++)for(let l=0;l<3;l++){const d=3*o+l,f=3*o+(l+1)%3;s.fromBufferAttribute(a,d),r.fromBufferAttribute(a,f),Nl(s,r,i)===!0&&(e.push(s.x,s.y,s.z),e.push(r.x,r.y,r.z))}}this.setAttribute("position",new Ae(e,3))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}}function Nl(n,t,e){const i=`${n.x},${n.y},${n.z}-${t.x},${t.y},${t.z}`,s=`${t.x},${t.y},${t.z}-${n.x},${n.y},${n.z}`;return e.has(i)===!0||e.has(s)===!0?!1:(e.add(i),e.add(s),!0)}class gd extends Pi{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=hu,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class _d extends Pi{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}class xd extends jc{constructor(t=-1,e=1,i=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=i,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,i,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=i-t,a=i+t,o=s+e,h=s-e;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,d=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,a=r+l*this.view.width,o-=d*this.view.offsetY,h=o-d*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,h,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}class vd extends on{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}const Ol=new Me;class Md{constructor(t,e,i=0,s=1/0){this.ray=new ks(t,e),this.near=i,this.far=s,this.camera=null,this.layers=new Vo,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return Ol.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Ol),this}intersectObject(t,e=!0,i=[]){return Eo(t,this,i,e),i.sort(Bl),i}intersectObjects(t,e=!0,i=[]){for(let s=0,r=t.length;s<r;s++)Eo(t[s],this,i,e);return i.sort(Bl),i}}function Bl(n,t){return n.distance-t.distance}function Eo(n,t,e,i){let s=!0;if(n.layers.test(t.layers)&&n.raycast(t,e)===!1&&(s=!1),s===!0&&i===!0){const r=n.children;for(let a=0,o=r.length;a<o;a++)Eo(r[a],t,e,!0)}}class zl{constructor(t=1,e=0,i=0){this.radius=t,this.phi=e,this.theta=i}set(t,e,i){return this.radius=t,this.phi=e,this.theta=i,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=Zt(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,i){return this.radius=Math.sqrt(t*t+e*e+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,i),this.phi=Math.acos(Zt(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class yd extends Ci{constructor(t,e=null){super(),this.object=t,this.domElement=e,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(t){if(t===void 0){console.warn("THREE.Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=t}disconnect(){}dispose(){}update(){}}function kl(n,t,e,i){const s=Sd(i);switch(e){case Bc:return n*t;case kc:return n*t/s.components*s.byteLength;case Bo:return n*t/s.components*s.byteLength;case Hc:return n*t*2/s.components*s.byteLength;case zo:return n*t*2/s.components*s.byteLength;case zc:return n*t*3/s.components*s.byteLength;case Mn:return n*t*4/s.components*s.byteLength;case ko:return n*t*4/s.components*s.byteLength;case Tr:case Ar:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case wr:case Rr:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case qa:case ja:return Math.max(n,16)*Math.max(t,8)/4;case Ya:case $a:return Math.max(n,8)*Math.max(t,8)/2;case Ka:case Za:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case Ja:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case Qa:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case to:return Math.floor((n+4)/5)*Math.floor((t+3)/4)*16;case eo:return Math.floor((n+4)/5)*Math.floor((t+4)/5)*16;case no:return Math.floor((n+5)/6)*Math.floor((t+4)/5)*16;case io:return Math.floor((n+5)/6)*Math.floor((t+5)/6)*16;case so:return Math.floor((n+7)/8)*Math.floor((t+4)/5)*16;case ro:return Math.floor((n+7)/8)*Math.floor((t+5)/6)*16;case ao:return Math.floor((n+7)/8)*Math.floor((t+7)/8)*16;case oo:return Math.floor((n+9)/10)*Math.floor((t+4)/5)*16;case lo:return Math.floor((n+9)/10)*Math.floor((t+5)/6)*16;case co:return Math.floor((n+9)/10)*Math.floor((t+7)/8)*16;case ho:return Math.floor((n+9)/10)*Math.floor((t+9)/10)*16;case uo:return Math.floor((n+11)/12)*Math.floor((t+9)/10)*16;case fo:return Math.floor((n+11)/12)*Math.floor((t+11)/12)*16;case po:case mo:case go:return Math.ceil(n/4)*Math.ceil(t/4)*16;case _o:case xo:return Math.ceil(n/4)*Math.ceil(t/4)*8;case vo:case Mo:return Math.ceil(n/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Sd(n){switch(n){case Hn:case Uc:return{byteLength:1,components:1};case Cs:case Fc:case Os:return{byteLength:2,components:1};case No:case Oo:return{byteLength:2,components:4};case Ti:case Fo:case Bn:return{byteLength:4,components:1};case Nc:case Oc:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Uo}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Uo);function eh(){let n=null,t=!1,e=null,i=null;function s(r,a){e(r,a),i=n.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(i=n.requestAnimationFrame(s),t=!0)},stop:function(){n.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){n=r}}}function Ed(n){const t=new WeakMap;function e(o,h){const l=o.array,d=o.usage,f=l.byteLength,p=n.createBuffer();n.bindBuffer(h,p),n.bufferData(h,l,d),o.onUploadCallback();let m;if(l instanceof Float32Array)m=n.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)m=n.HALF_FLOAT;else if(l instanceof Uint16Array)o.isFloat16BufferAttribute?m=n.HALF_FLOAT:m=n.UNSIGNED_SHORT;else if(l instanceof Int16Array)m=n.SHORT;else if(l instanceof Uint32Array)m=n.UNSIGNED_INT;else if(l instanceof Int32Array)m=n.INT;else if(l instanceof Int8Array)m=n.BYTE;else if(l instanceof Uint8Array)m=n.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)m=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:p,type:m,bytesPerElement:l.BYTES_PER_ELEMENT,version:o.version,size:f}}function i(o,h,l){const d=h.array,f=h.updateRanges;if(n.bindBuffer(l,o),f.length===0)n.bufferSubData(l,0,d);else{f.sort((m,_)=>m.start-_.start);let p=0;for(let m=1;m<f.length;m++){const _=f[p],y=f[m];y.start<=_.start+_.count+1?_.count=Math.max(_.count,y.start+y.count-_.start):(++p,f[p]=y)}f.length=p+1;for(let m=0,_=f.length;m<_;m++){const y=f[m];n.bufferSubData(l,y.start*d.BYTES_PER_ELEMENT,d,y.start,y.count)}h.clearUpdateRanges()}h.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);const h=t.get(o);h&&(n.deleteBuffer(h.buffer),t.delete(o))}function a(o,h){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const d=t.get(o);(!d||d.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const l=t.get(o);if(l===void 0)t.set(o,e(o,h));else if(l.version<o.version){if(l.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(l.buffer,o,h),l.version=o.version}}return{get:s,remove:r,update:a}}var bd=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Td=`#ifdef USE_ALPHAHASH
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
#endif`,Ad=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,wd=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Rd=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Cd=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Pd=`#ifdef USE_AOMAP
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
#endif`,Dd=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Ld=`#ifdef USE_BATCHING
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
#endif`,Id=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Ud=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Fd=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Nd=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Od=`#ifdef USE_IRIDESCENCE
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
#endif`,Bd=`#ifdef USE_BUMPMAP
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
#endif`,zd=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,kd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Hd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Gd=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Vd=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Wd=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Xd=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Yd=`#if defined( USE_COLOR_ALPHA )
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
#endif`,qd=`#define PI 3.141592653589793
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
} // validated`,$d=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,jd=`vec3 transformedNormal = objectNormal;
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
#endif`,Kd=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Zd=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Jd=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Qd=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,tf="gl_FragColor = linearToOutputTexel( gl_FragColor );",ef=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,nf=`#ifdef USE_ENVMAP
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
#endif`,sf=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,rf=`#ifdef USE_ENVMAP
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
#endif`,af=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,of=`#ifdef USE_ENVMAP
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
#endif`,lf=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,cf=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,hf=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,uf=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,df=`#ifdef USE_GRADIENTMAP
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
}`,ff=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,pf=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,mf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,gf=`uniform bool receiveShadow;
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
#endif`,_f=`#ifdef USE_ENVMAP
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
#endif`,xf=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,vf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Mf=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,yf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Sf=`PhysicalMaterial material;
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
#endif`,Ef=`struct PhysicalMaterial {
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
}`,bf=`
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
#endif`,Tf=`#if defined( RE_IndirectDiffuse )
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
#endif`,Af=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,wf=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Rf=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Cf=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Pf=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Df=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Lf=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,If=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Uf=`#if defined( USE_POINTS_UV )
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
#endif`,Ff=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Nf=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Of=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Bf=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,zf=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,kf=`#ifdef USE_MORPHTARGETS
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
#endif`,Hf=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Gf=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Vf=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Wf=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Xf=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Yf=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,qf=`#ifdef USE_NORMALMAP
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
#endif`,$f=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,jf=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Kf=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Zf=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Jf=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Qf=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,tp=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,ep=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,np=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,ip=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,sp=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,rp=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,ap=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,op=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,lp=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,cp=`float getShadowMask() {
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
}`,hp=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,up=`#ifdef USE_SKINNING
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
#endif`,dp=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,fp=`#ifdef USE_SKINNING
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
#endif`,pp=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,mp=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,gp=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,_p=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,xp=`#ifdef USE_TRANSMISSION
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
#endif`,vp=`#ifdef USE_TRANSMISSION
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
#endif`,Mp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,yp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Sp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Ep=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const bp=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Tp=`uniform sampler2D t2D;
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
}`,Ap=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,wp=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Rp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Cp=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Pp=`#include <common>
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
}`,Dp=`#if DEPTH_PACKING == 3200
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
}`,Lp=`#define DISTANCE
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
}`,Ip=`#define DISTANCE
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
}`,Up=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Fp=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Np=`uniform float scale;
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
}`,Op=`uniform vec3 diffuse;
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
}`,Bp=`#include <common>
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
}`,zp=`uniform vec3 diffuse;
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
}`,kp=`#define LAMBERT
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
}`,Hp=`#define LAMBERT
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
}`,Gp=`#define MATCAP
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
}`,Vp=`#define MATCAP
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
}`,Wp=`#define NORMAL
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
}`,Xp=`#define NORMAL
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
}`,Yp=`#define PHONG
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
}`,qp=`#define PHONG
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
}`,$p=`#define STANDARD
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
}`,jp=`#define STANDARD
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
}`,Kp=`#define TOON
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
}`,Zp=`#define TOON
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
}`,Jp=`uniform float size;
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
}`,Qp=`uniform vec3 diffuse;
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
}`,tm=`#include <common>
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
}`,em=`uniform vec3 color;
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
}`,nm=`uniform float rotation;
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
}`,im=`uniform vec3 diffuse;
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
}`,Kt={alphahash_fragment:bd,alphahash_pars_fragment:Td,alphamap_fragment:Ad,alphamap_pars_fragment:wd,alphatest_fragment:Rd,alphatest_pars_fragment:Cd,aomap_fragment:Pd,aomap_pars_fragment:Dd,batching_pars_vertex:Ld,batching_vertex:Id,begin_vertex:Ud,beginnormal_vertex:Fd,bsdfs:Nd,iridescence_fragment:Od,bumpmap_pars_fragment:Bd,clipping_planes_fragment:zd,clipping_planes_pars_fragment:kd,clipping_planes_pars_vertex:Hd,clipping_planes_vertex:Gd,color_fragment:Vd,color_pars_fragment:Wd,color_pars_vertex:Xd,color_vertex:Yd,common:qd,cube_uv_reflection_fragment:$d,defaultnormal_vertex:jd,displacementmap_pars_vertex:Kd,displacementmap_vertex:Zd,emissivemap_fragment:Jd,emissivemap_pars_fragment:Qd,colorspace_fragment:tf,colorspace_pars_fragment:ef,envmap_fragment:nf,envmap_common_pars_fragment:sf,envmap_pars_fragment:rf,envmap_pars_vertex:af,envmap_physical_pars_fragment:_f,envmap_vertex:of,fog_vertex:lf,fog_pars_vertex:cf,fog_fragment:hf,fog_pars_fragment:uf,gradientmap_pars_fragment:df,lightmap_pars_fragment:ff,lights_lambert_fragment:pf,lights_lambert_pars_fragment:mf,lights_pars_begin:gf,lights_toon_fragment:xf,lights_toon_pars_fragment:vf,lights_phong_fragment:Mf,lights_phong_pars_fragment:yf,lights_physical_fragment:Sf,lights_physical_pars_fragment:Ef,lights_fragment_begin:bf,lights_fragment_maps:Tf,lights_fragment_end:Af,logdepthbuf_fragment:wf,logdepthbuf_pars_fragment:Rf,logdepthbuf_pars_vertex:Cf,logdepthbuf_vertex:Pf,map_fragment:Df,map_pars_fragment:Lf,map_particle_fragment:If,map_particle_pars_fragment:Uf,metalnessmap_fragment:Ff,metalnessmap_pars_fragment:Nf,morphinstance_vertex:Of,morphcolor_vertex:Bf,morphnormal_vertex:zf,morphtarget_pars_vertex:kf,morphtarget_vertex:Hf,normal_fragment_begin:Gf,normal_fragment_maps:Vf,normal_pars_fragment:Wf,normal_pars_vertex:Xf,normal_vertex:Yf,normalmap_pars_fragment:qf,clearcoat_normal_fragment_begin:$f,clearcoat_normal_fragment_maps:jf,clearcoat_pars_fragment:Kf,iridescence_pars_fragment:Zf,opaque_fragment:Jf,packing:Qf,premultiplied_alpha_fragment:tp,project_vertex:ep,dithering_fragment:np,dithering_pars_fragment:ip,roughnessmap_fragment:sp,roughnessmap_pars_fragment:rp,shadowmap_pars_fragment:ap,shadowmap_pars_vertex:op,shadowmap_vertex:lp,shadowmask_pars_fragment:cp,skinbase_vertex:hp,skinning_pars_vertex:up,skinning_vertex:dp,skinnormal_vertex:fp,specularmap_fragment:pp,specularmap_pars_fragment:mp,tonemapping_fragment:gp,tonemapping_pars_fragment:_p,transmission_fragment:xp,transmission_pars_fragment:vp,uv_pars_fragment:Mp,uv_pars_vertex:yp,uv_vertex:Sp,worldpos_vertex:Ep,background_vert:bp,background_frag:Tp,backgroundCube_vert:Ap,backgroundCube_frag:wp,cube_vert:Rp,cube_frag:Cp,depth_vert:Pp,depth_frag:Dp,distanceRGBA_vert:Lp,distanceRGBA_frag:Ip,equirect_vert:Up,equirect_frag:Fp,linedashed_vert:Np,linedashed_frag:Op,meshbasic_vert:Bp,meshbasic_frag:zp,meshlambert_vert:kp,meshlambert_frag:Hp,meshmatcap_vert:Gp,meshmatcap_frag:Vp,meshnormal_vert:Wp,meshnormal_frag:Xp,meshphong_vert:Yp,meshphong_frag:qp,meshphysical_vert:$p,meshphysical_frag:jp,meshtoon_vert:Kp,meshtoon_frag:Zp,points_vert:Jp,points_frag:Qp,shadow_vert:tm,shadow_frag:em,sprite_vert:nm,sprite_frag:im},Et={common:{diffuse:{value:new zt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new jt},alphaMap:{value:null},alphaMapTransform:{value:new jt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new jt}},envmap:{envMap:{value:null},envMapRotation:{value:new jt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new jt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new jt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new jt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new jt},normalScale:{value:new Ht(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new jt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new jt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new jt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new jt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new zt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new zt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new jt},alphaTest:{value:0},uvTransform:{value:new jt}},sprite:{diffuse:{value:new zt(16777215)},opacity:{value:1},center:{value:new Ht(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new jt},alphaMap:{value:null},alphaMapTransform:{value:new jt},alphaTest:{value:0}}},Tn={basic:{uniforms:ze([Et.common,Et.specularmap,Et.envmap,Et.aomap,Et.lightmap,Et.fog]),vertexShader:Kt.meshbasic_vert,fragmentShader:Kt.meshbasic_frag},lambert:{uniforms:ze([Et.common,Et.specularmap,Et.envmap,Et.aomap,Et.lightmap,Et.emissivemap,Et.bumpmap,Et.normalmap,Et.displacementmap,Et.fog,Et.lights,{emissive:{value:new zt(0)}}]),vertexShader:Kt.meshlambert_vert,fragmentShader:Kt.meshlambert_frag},phong:{uniforms:ze([Et.common,Et.specularmap,Et.envmap,Et.aomap,Et.lightmap,Et.emissivemap,Et.bumpmap,Et.normalmap,Et.displacementmap,Et.fog,Et.lights,{emissive:{value:new zt(0)},specular:{value:new zt(1118481)},shininess:{value:30}}]),vertexShader:Kt.meshphong_vert,fragmentShader:Kt.meshphong_frag},standard:{uniforms:ze([Et.common,Et.envmap,Et.aomap,Et.lightmap,Et.emissivemap,Et.bumpmap,Et.normalmap,Et.displacementmap,Et.roughnessmap,Et.metalnessmap,Et.fog,Et.lights,{emissive:{value:new zt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Kt.meshphysical_vert,fragmentShader:Kt.meshphysical_frag},toon:{uniforms:ze([Et.common,Et.aomap,Et.lightmap,Et.emissivemap,Et.bumpmap,Et.normalmap,Et.displacementmap,Et.gradientmap,Et.fog,Et.lights,{emissive:{value:new zt(0)}}]),vertexShader:Kt.meshtoon_vert,fragmentShader:Kt.meshtoon_frag},matcap:{uniforms:ze([Et.common,Et.bumpmap,Et.normalmap,Et.displacementmap,Et.fog,{matcap:{value:null}}]),vertexShader:Kt.meshmatcap_vert,fragmentShader:Kt.meshmatcap_frag},points:{uniforms:ze([Et.points,Et.fog]),vertexShader:Kt.points_vert,fragmentShader:Kt.points_frag},dashed:{uniforms:ze([Et.common,Et.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Kt.linedashed_vert,fragmentShader:Kt.linedashed_frag},depth:{uniforms:ze([Et.common,Et.displacementmap]),vertexShader:Kt.depth_vert,fragmentShader:Kt.depth_frag},normal:{uniforms:ze([Et.common,Et.bumpmap,Et.normalmap,Et.displacementmap,{opacity:{value:1}}]),vertexShader:Kt.meshnormal_vert,fragmentShader:Kt.meshnormal_frag},sprite:{uniforms:ze([Et.sprite,Et.fog]),vertexShader:Kt.sprite_vert,fragmentShader:Kt.sprite_frag},background:{uniforms:{uvTransform:{value:new jt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Kt.background_vert,fragmentShader:Kt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new jt}},vertexShader:Kt.backgroundCube_vert,fragmentShader:Kt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Kt.cube_vert,fragmentShader:Kt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Kt.equirect_vert,fragmentShader:Kt.equirect_frag},distanceRGBA:{uniforms:ze([Et.common,Et.displacementmap,{referencePosition:{value:new B},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Kt.distanceRGBA_vert,fragmentShader:Kt.distanceRGBA_frag},shadow:{uniforms:ze([Et.lights,Et.fog,{color:{value:new zt(0)},opacity:{value:1}}]),vertexShader:Kt.shadow_vert,fragmentShader:Kt.shadow_frag}};Tn.physical={uniforms:ze([Tn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new jt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new jt},clearcoatNormalScale:{value:new Ht(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new jt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new jt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new jt},sheen:{value:0},sheenColor:{value:new zt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new jt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new jt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new jt},transmissionSamplerSize:{value:new Ht},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new jt},attenuationDistance:{value:0},attenuationColor:{value:new zt(0)},specularColor:{value:new zt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new jt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new jt},anisotropyVector:{value:new Ht},anisotropyMap:{value:null},anisotropyMapTransform:{value:new jt}}]),vertexShader:Kt.meshphysical_vert,fragmentShader:Kt.meshphysical_frag};const _r={r:0,b:0,g:0},fi=new Gn,sm=new Me;function rm(n,t,e,i,s,r,a){const o=new zt(0);let h=r===!0?0:1,l,d,f=null,p=0,m=null;function _(x){let g=x.isScene===!0?x.background:null;return g&&g.isTexture&&(g=(x.backgroundBlurriness>0?e:t).get(g)),g}function y(x){let g=!1;const A=_(x);A===null?u(o,h):A&&A.isColor&&(u(A,1),g=!0);const S=n.xr.getEnvironmentBlendMode();S==="additive"?i.buffers.color.setClear(0,0,0,1,a):S==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,a),(n.autoClear||g)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function c(x,g){const A=_(g);A&&(A.isCubeTexture||A.mapping===kr)?(d===void 0&&(d=new cn(new Gs(1,1,1),new ai({name:"BackgroundCubeMaterial",uniforms:hs(Tn.backgroundCube.uniforms),vertexShader:Tn.backgroundCube.vertexShader,fragmentShader:Tn.backgroundCube.fragmentShader,side:qe,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),d.geometry.deleteAttribute("normal"),d.geometry.deleteAttribute("uv"),d.onBeforeRender=function(S,T,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(d.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(d)),fi.copy(g.backgroundRotation),fi.x*=-1,fi.y*=-1,fi.z*=-1,A.isCubeTexture&&A.isRenderTargetTexture===!1&&(fi.y*=-1,fi.z*=-1),d.material.uniforms.envMap.value=A,d.material.uniforms.flipEnvMap.value=A.isCubeTexture&&A.isRenderTargetTexture===!1?-1:1,d.material.uniforms.backgroundBlurriness.value=g.backgroundBlurriness,d.material.uniforms.backgroundIntensity.value=g.backgroundIntensity,d.material.uniforms.backgroundRotation.value.setFromMatrix4(sm.makeRotationFromEuler(fi)),d.material.toneMapped=oe.getTransfer(A.colorSpace)!==de,(f!==A||p!==A.version||m!==n.toneMapping)&&(d.material.needsUpdate=!0,f=A,p=A.version,m=n.toneMapping),d.layers.enableAll(),x.unshift(d,d.geometry,d.material,0,0,null)):A&&A.isTexture&&(l===void 0&&(l=new cn(new Gr(2,2),new ai({name:"BackgroundMaterial",uniforms:hs(Tn.background.uniforms),vertexShader:Tn.background.vertexShader,fragmentShader:Tn.background.fragmentShader,side:si,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(l)),l.material.uniforms.t2D.value=A,l.material.uniforms.backgroundIntensity.value=g.backgroundIntensity,l.material.toneMapped=oe.getTransfer(A.colorSpace)!==de,A.matrixAutoUpdate===!0&&A.updateMatrix(),l.material.uniforms.uvTransform.value.copy(A.matrix),(f!==A||p!==A.version||m!==n.toneMapping)&&(l.material.needsUpdate=!0,f=A,p=A.version,m=n.toneMapping),l.layers.enableAll(),x.unshift(l,l.geometry,l.material,0,0,null))}function u(x,g){x.getRGB(_r,$c(n)),i.buffers.color.setClear(_r.r,_r.g,_r.b,g,a)}function b(){d!==void 0&&(d.geometry.dispose(),d.material.dispose(),d=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return o},setClearColor:function(x,g=1){o.set(x),h=g,u(o,h)},getClearAlpha:function(){return h},setClearAlpha:function(x){h=x,u(o,h)},render:y,addToRenderList:c,dispose:b}}function am(n,t){const e=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=p(null);let r=s,a=!1;function o(M,P,D,F,U){let L=!1;const N=f(F,D,P);r!==N&&(r=N,l(r.object)),L=m(M,F,D,U),L&&_(M,F,D,U),U!==null&&t.update(U,n.ELEMENT_ARRAY_BUFFER),(L||a)&&(a=!1,g(M,P,D,F),U!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get(U).buffer))}function h(){return n.createVertexArray()}function l(M){return n.bindVertexArray(M)}function d(M){return n.deleteVertexArray(M)}function f(M,P,D){const F=D.wireframe===!0;let U=i[M.id];U===void 0&&(U={},i[M.id]=U);let L=U[P.id];L===void 0&&(L={},U[P.id]=L);let N=L[F];return N===void 0&&(N=p(h()),L[F]=N),N}function p(M){const P=[],D=[],F=[];for(let U=0;U<e;U++)P[U]=0,D[U]=0,F[U]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:P,enabledAttributes:D,attributeDivisors:F,object:M,attributes:{},index:null}}function m(M,P,D,F){const U=r.attributes,L=P.attributes;let N=0;const k=D.getAttributes();for(const O in k)if(k[O].location>=0){const q=U[O];let ct=L[O];if(ct===void 0&&(O==="instanceMatrix"&&M.instanceMatrix&&(ct=M.instanceMatrix),O==="instanceColor"&&M.instanceColor&&(ct=M.instanceColor)),q===void 0||q.attribute!==ct||ct&&q.data!==ct.data)return!0;N++}return r.attributesNum!==N||r.index!==F}function _(M,P,D,F){const U={},L=P.attributes;let N=0;const k=D.getAttributes();for(const O in k)if(k[O].location>=0){let q=L[O];q===void 0&&(O==="instanceMatrix"&&M.instanceMatrix&&(q=M.instanceMatrix),O==="instanceColor"&&M.instanceColor&&(q=M.instanceColor));const ct={};ct.attribute=q,q&&q.data&&(ct.data=q.data),U[O]=ct,N++}r.attributes=U,r.attributesNum=N,r.index=F}function y(){const M=r.newAttributes;for(let P=0,D=M.length;P<D;P++)M[P]=0}function c(M){u(M,0)}function u(M,P){const D=r.newAttributes,F=r.enabledAttributes,U=r.attributeDivisors;D[M]=1,F[M]===0&&(n.enableVertexAttribArray(M),F[M]=1),U[M]!==P&&(n.vertexAttribDivisor(M,P),U[M]=P)}function b(){const M=r.newAttributes,P=r.enabledAttributes;for(let D=0,F=P.length;D<F;D++)P[D]!==M[D]&&(n.disableVertexAttribArray(D),P[D]=0)}function x(M,P,D,F,U,L,N){N===!0?n.vertexAttribIPointer(M,P,D,U,L):n.vertexAttribPointer(M,P,D,F,U,L)}function g(M,P,D,F){y();const U=F.attributes,L=D.getAttributes(),N=P.defaultAttributeValues;for(const k in L){const O=L[k];if(O.location>=0){let J=U[k];if(J===void 0&&(k==="instanceMatrix"&&M.instanceMatrix&&(J=M.instanceMatrix),k==="instanceColor"&&M.instanceColor&&(J=M.instanceColor)),J!==void 0){const q=J.normalized,ct=J.itemSize,vt=t.get(J);if(vt===void 0)continue;const Rt=vt.buffer,Q=vt.type,tt=vt.bytesPerElement,V=Q===n.INT||Q===n.UNSIGNED_INT||J.gpuType===Fo;if(J.isInterleavedBufferAttribute){const X=J.data,it=X.stride,_t=J.offset;if(X.isInstancedInterleavedBuffer){for(let mt=0;mt<O.locationSize;mt++)u(O.location+mt,X.meshPerAttribute);M.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=X.meshPerAttribute*X.count)}else for(let mt=0;mt<O.locationSize;mt++)c(O.location+mt);n.bindBuffer(n.ARRAY_BUFFER,Rt);for(let mt=0;mt<O.locationSize;mt++)x(O.location+mt,ct/O.locationSize,Q,q,it*tt,(_t+ct/O.locationSize*mt)*tt,V)}else{if(J.isInstancedBufferAttribute){for(let X=0;X<O.locationSize;X++)u(O.location+X,J.meshPerAttribute);M.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=J.meshPerAttribute*J.count)}else for(let X=0;X<O.locationSize;X++)c(O.location+X);n.bindBuffer(n.ARRAY_BUFFER,Rt);for(let X=0;X<O.locationSize;X++)x(O.location+X,ct/O.locationSize,Q,q,ct*tt,ct/O.locationSize*X*tt,V)}}else if(N!==void 0){const q=N[k];if(q!==void 0)switch(q.length){case 2:n.vertexAttrib2fv(O.location,q);break;case 3:n.vertexAttrib3fv(O.location,q);break;case 4:n.vertexAttrib4fv(O.location,q);break;default:n.vertexAttrib1fv(O.location,q)}}}}b()}function A(){R();for(const M in i){const P=i[M];for(const D in P){const F=P[D];for(const U in F)d(F[U].object),delete F[U];delete P[D]}delete i[M]}}function S(M){if(i[M.id]===void 0)return;const P=i[M.id];for(const D in P){const F=P[D];for(const U in F)d(F[U].object),delete F[U];delete P[D]}delete i[M.id]}function T(M){for(const P in i){const D=i[P];if(D[M.id]===void 0)continue;const F=D[M.id];for(const U in F)d(F[U].object),delete F[U];delete D[M.id]}}function R(){v(),a=!0,r!==s&&(r=s,l(r.object))}function v(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:R,resetDefaultState:v,dispose:A,releaseStatesOfGeometry:S,releaseStatesOfProgram:T,initAttributes:y,enableAttribute:c,disableUnusedAttributes:b}}function om(n,t,e){let i;function s(l){i=l}function r(l,d){n.drawArrays(i,l,d),e.update(d,i,1)}function a(l,d,f){f!==0&&(n.drawArraysInstanced(i,l,d,f),e.update(d,i,f))}function o(l,d,f){if(f===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,d,0,f);let m=0;for(let _=0;_<f;_++)m+=d[_];e.update(m,i,1)}function h(l,d,f,p){if(f===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let _=0;_<l.length;_++)a(l[_],d[_],p[_]);else{m.multiDrawArraysInstancedWEBGL(i,l,0,d,0,p,0,f);let _=0;for(let y=0;y<f;y++)_+=d[y]*p[y];e.update(_,i,1)}}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=h}function lm(n,t,e,i){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){const T=t.get("EXT_texture_filter_anisotropic");s=n.getParameter(T.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(T){return!(T!==Mn&&i.convert(T)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(T){const R=T===Os&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(T!==Hn&&i.convert(T)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&T!==Bn&&!R)}function h(T){if(T==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";T="mediump"}return T==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=e.precision!==void 0?e.precision:"highp";const d=h(l);d!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",d,"instead."),l=d);const f=e.logarithmicDepthBuffer===!0,p=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),m=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),_=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),y=n.getParameter(n.MAX_TEXTURE_SIZE),c=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),u=n.getParameter(n.MAX_VERTEX_ATTRIBS),b=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),x=n.getParameter(n.MAX_VARYING_VECTORS),g=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),A=_>0,S=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:h,textureFormatReadable:a,textureTypeReadable:o,precision:l,logarithmicDepthBuffer:f,reversedDepthBuffer:p,maxTextures:m,maxVertexTextures:_,maxTextureSize:y,maxCubemapSize:c,maxAttributes:u,maxVertexUniforms:b,maxVaryings:x,maxFragmentUniforms:g,vertexTextures:A,maxSamples:S}}function cm(n){const t=this;let e=null,i=0,s=!1,r=!1;const a=new jn,o=new jt,h={value:null,needsUpdate:!1};this.uniform=h,this.numPlanes=0,this.numIntersection=0,this.init=function(f,p){const m=f.length!==0||p||i!==0||s;return s=p,i=f.length,m},this.beginShadows=function(){r=!0,d(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(f,p){e=d(f,p,0)},this.setState=function(f,p,m){const _=f.clippingPlanes,y=f.clipIntersection,c=f.clipShadows,u=n.get(f);if(!s||_===null||_.length===0||r&&!c)r?d(null):l();else{const b=r?0:i,x=b*4;let g=u.clippingState||null;h.value=g,g=d(_,p,x,m);for(let A=0;A!==x;++A)g[A]=e[A];u.clippingState=g,this.numIntersection=y?this.numPlanes:0,this.numPlanes+=b}};function l(){h.value!==e&&(h.value=e,h.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function d(f,p,m,_){const y=f!==null?f.length:0;let c=null;if(y!==0){if(c=h.value,_!==!0||c===null){const u=m+y*4,b=p.matrixWorldInverse;o.getNormalMatrix(b),(c===null||c.length<u)&&(c=new Float32Array(u));for(let x=0,g=m;x!==y;++x,g+=4)a.copy(f[x]).applyMatrix4(b,o),a.normal.toArray(c,g),c[g+3]=a.constant}h.value=c,h.needsUpdate=!0}return t.numPlanes=y,t.numIntersection=0,c}}function hm(n){let t=new WeakMap;function e(a,o){return o===Ga?a.mapping=os:o===Va&&(a.mapping=ls),a}function i(a){if(a&&a.isTexture){const o=a.mapping;if(o===Ga||o===Va)if(t.has(a)){const h=t.get(a).texture;return e(h,a.mapping)}else{const h=a.image;if(h&&h.height>0){const l=new od(h.height);return l.fromEquirectangularTexture(n,a),t.set(a,l),a.addEventListener("dispose",s),e(l.texture,a.mapping)}else return null}}return a}function s(a){const o=a.target;o.removeEventListener("dispose",s);const h=t.get(o);h!==void 0&&(t.delete(o),h.dispose())}function r(){t=new WeakMap}return{get:i,dispose:r}}const ts=4,Hl=[.125,.215,.35,.446,.526,.582],vi=20,ya=new xd,Gl=new zt;let Sa=null,Ea=0,ba=0,Ta=!1;const mi=(1+Math.sqrt(5))/2,ji=1/mi,Vl=[new B(-mi,ji,0),new B(mi,ji,0),new B(-ji,0,mi),new B(ji,0,mi),new B(0,mi,-ji),new B(0,mi,ji),new B(-1,1,-1),new B(1,1,-1),new B(-1,1,1),new B(1,1,1)],um=new B;class Wl{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,i=.1,s=100,r={}){const{size:a=256,position:o=um}=r;Sa=this._renderer.getRenderTarget(),Ea=this._renderer.getActiveCubeFace(),ba=this._renderer.getActiveMipmapLevel(),Ta=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);const h=this._allocateTargets();return h.depthBuffer=!0,this._sceneToCubeUV(t,i,s,h,o),e>0&&this._blur(h,0,0,e),this._applyPMREM(h),this._cleanup(h),h}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=ql(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Yl(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Sa,Ea,ba),this._renderer.xr.enabled=Ta,t.scissorTest=!1,xr(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===os||t.mapping===ls?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Sa=this._renderer.getRenderTarget(),Ea=this._renderer.getActiveCubeFace(),ba=this._renderer.getActiveMipmapLevel(),Ta=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=e||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,i={magFilter:vn,minFilter:vn,generateMipmaps:!1,type:Os,format:Mn,colorSpace:cs,depthBuffer:!1},s=Xl(t,e,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Xl(t,e,i);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=dm(r)),this._blurMaterial=fm(r,t,e)}return s}_compileMaterial(t){const e=new cn(this._lodPlanes[0],t);this._renderer.compile(e,ya)}_sceneToCubeUV(t,e,i,s,r){const h=new on(90,1,e,i),l=[1,-1,1,1,1,1],d=[1,1,1,-1,-1,-1],f=this._renderer,p=f.autoClear,m=f.toneMapping;f.getClearColor(Gl),f.toneMapping=ni,f.autoClear=!1,f.state.buffers.depth.getReversed()&&(f.setRenderTarget(s),f.clearDepth(),f.setRenderTarget(null));const y=new Hs({name:"PMREM.Background",side:qe,depthWrite:!1,depthTest:!1}),c=new cn(new Gs,y);let u=!1;const b=t.background;b?b.isColor&&(y.color.copy(b),t.background=null,u=!0):(y.color.copy(Gl),u=!0);for(let x=0;x<6;x++){const g=x%3;g===0?(h.up.set(0,l[x],0),h.position.set(r.x,r.y,r.z),h.lookAt(r.x+d[x],r.y,r.z)):g===1?(h.up.set(0,0,l[x]),h.position.set(r.x,r.y,r.z),h.lookAt(r.x,r.y+d[x],r.z)):(h.up.set(0,l[x],0),h.position.set(r.x,r.y,r.z),h.lookAt(r.x,r.y,r.z+d[x]));const A=this._cubeSize;xr(s,g*A,x>2?A:0,A,A),f.setRenderTarget(s),u&&f.render(c,h),f.render(t,h)}c.geometry.dispose(),c.material.dispose(),f.toneMapping=m,f.autoClear=p,t.background=b}_textureToCubeUV(t,e){const i=this._renderer,s=t.mapping===os||t.mapping===ls;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=ql()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Yl());const r=s?this._cubemapMaterial:this._equirectMaterial,a=new cn(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=t;const h=this._cubeSize;xr(e,0,0,3*h,2*h),i.setRenderTarget(e),i.render(a,ya)}_applyPMREM(t){const e=this._renderer,i=e.autoClear;e.autoClear=!1;const s=this._lodPlanes.length;for(let r=1;r<s;r++){const a=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=Vl[(s-r-1)%Vl.length];this._blur(t,r-1,r,a,o)}e.autoClear=i}_blur(t,e,i,s,r){const a=this._pingPongRenderTarget;this._halfBlur(t,a,e,i,s,"latitudinal",r),this._halfBlur(a,t,i,i,s,"longitudinal",r)}_halfBlur(t,e,i,s,r,a,o){const h=this._renderer,l=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const d=3,f=new cn(this._lodPlanes[s],l),p=l.uniforms,m=this._sizeLods[i]-1,_=isFinite(r)?Math.PI/(2*m):2*Math.PI/(2*vi-1),y=r/_,c=isFinite(r)?1+Math.floor(d*y):vi;c>vi&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${c} samples when the maximum is set to ${vi}`);const u=[];let b=0;for(let T=0;T<vi;++T){const R=T/y,v=Math.exp(-R*R/2);u.push(v),T===0?b+=v:T<c&&(b+=2*v)}for(let T=0;T<u.length;T++)u[T]=u[T]/b;p.envMap.value=t.texture,p.samples.value=c,p.weights.value=u,p.latitudinal.value=a==="latitudinal",o&&(p.poleAxis.value=o);const{_lodMax:x}=this;p.dTheta.value=_,p.mipInt.value=x-i;const g=this._sizeLods[s],A=3*g*(s>x-ts?s-x+ts:0),S=4*(this._cubeSize-g);xr(e,A,S,3*g,2*g),h.setRenderTarget(e),h.render(f,ya)}}function dm(n){const t=[],e=[],i=[];let s=n;const r=n-ts+1+Hl.length;for(let a=0;a<r;a++){const o=Math.pow(2,s);e.push(o);let h=1/o;a>n-ts?h=Hl[a-n+ts-1]:a===0&&(h=0),i.push(h);const l=1/(o-2),d=-l,f=1+l,p=[d,d,f,d,f,f,d,d,f,f,d,f],m=6,_=6,y=3,c=2,u=1,b=new Float32Array(y*_*m),x=new Float32Array(c*_*m),g=new Float32Array(u*_*m);for(let S=0;S<m;S++){const T=S%3*2/3-1,R=S>2?0:-1,v=[T,R,0,T+2/3,R,0,T+2/3,R+1,0,T,R,0,T+2/3,R+1,0,T,R+1,0];b.set(v,y*_*S),x.set(p,c*_*S);const M=[S,S,S,S,S,S];g.set(M,u*_*S)}const A=new ne;A.setAttribute("position",new te(b,y)),A.setAttribute("uv",new te(x,c)),A.setAttribute("faceIndex",new te(g,u)),t.push(A),s>ts&&s--}return{lodPlanes:t,sizeLods:e,sigmas:i}}function Xl(n,t,e){const i=new Ai(n,t,e);return i.texture.mapping=kr,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function xr(n,t,e,i,s){n.viewport.set(t,e,i,s),n.scissor.set(t,e,i,s)}function fm(n,t,e){const i=new Float32Array(vi),s=new B(0,1,0);return new ai({name:"SphericalGaussianBlur",defines:{n:vi,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:jo(),fragmentShader:`

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
		`,blending:ei,depthTest:!1,depthWrite:!1})}function Yl(){return new ai({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:jo(),fragmentShader:`

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
		`,blending:ei,depthTest:!1,depthWrite:!1})}function ql(){return new ai({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:jo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ei,depthTest:!1,depthWrite:!1})}function jo(){return`

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
	`}function pm(n){let t=new WeakMap,e=null;function i(o){if(o&&o.isTexture){const h=o.mapping,l=h===Ga||h===Va,d=h===os||h===ls;if(l||d){let f=t.get(o);const p=f!==void 0?f.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==p)return e===null&&(e=new Wl(n)),f=l?e.fromEquirectangular(o,f):e.fromCubemap(o,f),f.texture.pmremVersion=o.pmremVersion,t.set(o,f),f.texture;if(f!==void 0)return f.texture;{const m=o.image;return l&&m&&m.height>0||d&&m&&s(m)?(e===null&&(e=new Wl(n)),f=l?e.fromEquirectangular(o):e.fromCubemap(o),f.texture.pmremVersion=o.pmremVersion,t.set(o,f),o.addEventListener("dispose",r),f.texture):null}}}return o}function s(o){let h=0;const l=6;for(let d=0;d<l;d++)o[d]!==void 0&&h++;return h===l}function r(o){const h=o.target;h.removeEventListener("dispose",r);const l=t.get(h);l!==void 0&&(t.delete(h),l.dispose())}function a(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:i,dispose:a}}function mm(n){const t={};function e(i){if(t[i]!==void 0)return t[i];let s;switch(i){case"WEBGL_depth_texture":s=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=n.getExtension(i)}return t[i]=s,s}return{has:function(i){return e(i)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(i){const s=e(i);return s===null&&Us("THREE.WebGLRenderer: "+i+" extension not supported."),s}}}function gm(n,t,e,i){const s={},r=new WeakMap;function a(f){const p=f.target;p.index!==null&&t.remove(p.index);for(const _ in p.attributes)t.remove(p.attributes[_]);p.removeEventListener("dispose",a),delete s[p.id];const m=r.get(p);m&&(t.remove(m),r.delete(p)),i.releaseStatesOfGeometry(p),p.isInstancedBufferGeometry===!0&&delete p._maxInstanceCount,e.memory.geometries--}function o(f,p){return s[p.id]===!0||(p.addEventListener("dispose",a),s[p.id]=!0,e.memory.geometries++),p}function h(f){const p=f.attributes;for(const m in p)t.update(p[m],n.ARRAY_BUFFER)}function l(f){const p=[],m=f.index,_=f.attributes.position;let y=0;if(m!==null){const b=m.array;y=m.version;for(let x=0,g=b.length;x<g;x+=3){const A=b[x+0],S=b[x+1],T=b[x+2];p.push(A,S,S,T,T,A)}}else if(_!==void 0){const b=_.array;y=_.version;for(let x=0,g=b.length/3-1;x<g;x+=3){const A=x+0,S=x+1,T=x+2;p.push(A,S,S,T,T,A)}}else return;const c=new(Vc(p)?qc:Yc)(p,1);c.version=y;const u=r.get(f);u&&t.remove(u),r.set(f,c)}function d(f){const p=r.get(f);if(p){const m=f.index;m!==null&&p.version<m.version&&l(f)}else l(f);return r.get(f)}return{get:o,update:h,getWireframeAttribute:d}}function _m(n,t,e){let i;function s(p){i=p}let r,a;function o(p){r=p.type,a=p.bytesPerElement}function h(p,m){n.drawElements(i,m,r,p*a),e.update(m,i,1)}function l(p,m,_){_!==0&&(n.drawElementsInstanced(i,m,r,p*a,_),e.update(m,i,_))}function d(p,m,_){if(_===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,m,0,r,p,0,_);let c=0;for(let u=0;u<_;u++)c+=m[u];e.update(c,i,1)}function f(p,m,_,y){if(_===0)return;const c=t.get("WEBGL_multi_draw");if(c===null)for(let u=0;u<p.length;u++)l(p[u]/a,m[u],y[u]);else{c.multiDrawElementsInstancedWEBGL(i,m,0,r,p,0,y,0,_);let u=0;for(let b=0;b<_;b++)u+=m[b]*y[b];e.update(u,i,1)}}this.setMode=s,this.setIndex=o,this.render=h,this.renderInstances=l,this.renderMultiDraw=d,this.renderMultiDrawInstances=f}function xm(n){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,a,o){switch(e.calls++,a){case n.TRIANGLES:e.triangles+=o*(r/3);break;case n.LINES:e.lines+=o*(r/2);break;case n.LINE_STRIP:e.lines+=o*(r-1);break;case n.LINE_LOOP:e.lines+=o*r;break;case n.POINTS:e.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:i}}function vm(n,t,e){const i=new WeakMap,s=new Se;function r(a,o,h){const l=a.morphTargetInfluences,d=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,f=d!==void 0?d.length:0;let p=i.get(o);if(p===void 0||p.count!==f){let M=function(){R.dispose(),i.delete(o),o.removeEventListener("dispose",M)};var m=M;p!==void 0&&p.texture.dispose();const _=o.morphAttributes.position!==void 0,y=o.morphAttributes.normal!==void 0,c=o.morphAttributes.color!==void 0,u=o.morphAttributes.position||[],b=o.morphAttributes.normal||[],x=o.morphAttributes.color||[];let g=0;_===!0&&(g=1),y===!0&&(g=2),c===!0&&(g=3);let A=o.attributes.position.count*g,S=1;A>t.maxTextureSize&&(S=Math.ceil(A/t.maxTextureSize),A=t.maxTextureSize);const T=new Float32Array(A*S*4*f),R=new Wc(T,A,S,f);R.type=Bn,R.needsUpdate=!0;const v=g*4;for(let P=0;P<f;P++){const D=u[P],F=b[P],U=x[P],L=A*S*4*P;for(let N=0;N<D.count;N++){const k=N*v;_===!0&&(s.fromBufferAttribute(D,N),T[L+k+0]=s.x,T[L+k+1]=s.y,T[L+k+2]=s.z,T[L+k+3]=0),y===!0&&(s.fromBufferAttribute(F,N),T[L+k+4]=s.x,T[L+k+5]=s.y,T[L+k+6]=s.z,T[L+k+7]=0),c===!0&&(s.fromBufferAttribute(U,N),T[L+k+8]=s.x,T[L+k+9]=s.y,T[L+k+10]=s.z,T[L+k+11]=U.itemSize===4?s.w:1)}}p={count:f,texture:R,size:new Ht(A,S)},i.set(o,p),o.addEventListener("dispose",M)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)h.getUniforms().setValue(n,"morphTexture",a.morphTexture,e);else{let _=0;for(let c=0;c<l.length;c++)_+=l[c];const y=o.morphTargetsRelative?1:1-_;h.getUniforms().setValue(n,"morphTargetBaseInfluence",y),h.getUniforms().setValue(n,"morphTargetInfluences",l)}h.getUniforms().setValue(n,"morphTargetsTexture",p.texture,e),h.getUniforms().setValue(n,"morphTargetsTextureSize",p.size)}return{update:r}}function Mm(n,t,e,i){let s=new WeakMap;function r(h){const l=i.render.frame,d=h.geometry,f=t.get(h,d);if(s.get(f)!==l&&(t.update(f),s.set(f,l)),h.isInstancedMesh&&(h.hasEventListener("dispose",o)===!1&&h.addEventListener("dispose",o),s.get(h)!==l&&(e.update(h.instanceMatrix,n.ARRAY_BUFFER),h.instanceColor!==null&&e.update(h.instanceColor,n.ARRAY_BUFFER),s.set(h,l))),h.isSkinnedMesh){const p=h.skeleton;s.get(p)!==l&&(p.update(),s.set(p,l))}return f}function a(){s=new WeakMap}function o(h){const l=h.target;l.removeEventListener("dispose",o),e.remove(l.instanceMatrix),l.instanceColor!==null&&e.remove(l.instanceColor)}return{update:r,dispose:a}}const nh=new Ve,$l=new Qc(1,1),ih=new Wc,sh=new Wu,rh=new Kc,jl=[],Kl=[],Zl=new Float32Array(16),Jl=new Float32Array(9),Ql=new Float32Array(4);function ds(n,t,e){const i=n[0];if(i<=0||i>0)return n;const s=t*e;let r=jl[s];if(r===void 0&&(r=new Float32Array(s),jl[s]=r),t!==0){i.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,n[a].toArray(r,o)}return r}function Pe(n,t){if(n.length!==t.length)return!1;for(let e=0,i=n.length;e<i;e++)if(n[e]!==t[e])return!1;return!0}function De(n,t){for(let e=0,i=t.length;e<i;e++)n[e]=t[e]}function Wr(n,t){let e=Kl[t];e===void 0&&(e=new Int32Array(t),Kl[t]=e);for(let i=0;i!==t;++i)e[i]=n.allocateTextureUnit();return e}function ym(n,t){const e=this.cache;e[0]!==t&&(n.uniform1f(this.addr,t),e[0]=t)}function Sm(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Pe(e,t))return;n.uniform2fv(this.addr,t),De(e,t)}}function Em(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(n.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Pe(e,t))return;n.uniform3fv(this.addr,t),De(e,t)}}function bm(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Pe(e,t))return;n.uniform4fv(this.addr,t),De(e,t)}}function Tm(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(Pe(e,t))return;n.uniformMatrix2fv(this.addr,!1,t),De(e,t)}else{if(Pe(e,i))return;Ql.set(i),n.uniformMatrix2fv(this.addr,!1,Ql),De(e,i)}}function Am(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(Pe(e,t))return;n.uniformMatrix3fv(this.addr,!1,t),De(e,t)}else{if(Pe(e,i))return;Jl.set(i),n.uniformMatrix3fv(this.addr,!1,Jl),De(e,i)}}function wm(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(Pe(e,t))return;n.uniformMatrix4fv(this.addr,!1,t),De(e,t)}else{if(Pe(e,i))return;Zl.set(i),n.uniformMatrix4fv(this.addr,!1,Zl),De(e,i)}}function Rm(n,t){const e=this.cache;e[0]!==t&&(n.uniform1i(this.addr,t),e[0]=t)}function Cm(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Pe(e,t))return;n.uniform2iv(this.addr,t),De(e,t)}}function Pm(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Pe(e,t))return;n.uniform3iv(this.addr,t),De(e,t)}}function Dm(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Pe(e,t))return;n.uniform4iv(this.addr,t),De(e,t)}}function Lm(n,t){const e=this.cache;e[0]!==t&&(n.uniform1ui(this.addr,t),e[0]=t)}function Im(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Pe(e,t))return;n.uniform2uiv(this.addr,t),De(e,t)}}function Um(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Pe(e,t))return;n.uniform3uiv(this.addr,t),De(e,t)}}function Fm(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Pe(e,t))return;n.uniform4uiv(this.addr,t),De(e,t)}}function Nm(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_2D_SHADOW?($l.compareFunction=Gc,r=$l):r=nh,e.setTexture2D(t||r,s)}function Om(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture3D(t||sh,s)}function Bm(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTextureCube(t||rh,s)}function zm(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture2DArray(t||ih,s)}function km(n){switch(n){case 5126:return ym;case 35664:return Sm;case 35665:return Em;case 35666:return bm;case 35674:return Tm;case 35675:return Am;case 35676:return wm;case 5124:case 35670:return Rm;case 35667:case 35671:return Cm;case 35668:case 35672:return Pm;case 35669:case 35673:return Dm;case 5125:return Lm;case 36294:return Im;case 36295:return Um;case 36296:return Fm;case 35678:case 36198:case 36298:case 36306:case 35682:return Nm;case 35679:case 36299:case 36307:return Om;case 35680:case 36300:case 36308:case 36293:return Bm;case 36289:case 36303:case 36311:case 36292:return zm}}function Hm(n,t){n.uniform1fv(this.addr,t)}function Gm(n,t){const e=ds(t,this.size,2);n.uniform2fv(this.addr,e)}function Vm(n,t){const e=ds(t,this.size,3);n.uniform3fv(this.addr,e)}function Wm(n,t){const e=ds(t,this.size,4);n.uniform4fv(this.addr,e)}function Xm(n,t){const e=ds(t,this.size,4);n.uniformMatrix2fv(this.addr,!1,e)}function Ym(n,t){const e=ds(t,this.size,9);n.uniformMatrix3fv(this.addr,!1,e)}function qm(n,t){const e=ds(t,this.size,16);n.uniformMatrix4fv(this.addr,!1,e)}function $m(n,t){n.uniform1iv(this.addr,t)}function jm(n,t){n.uniform2iv(this.addr,t)}function Km(n,t){n.uniform3iv(this.addr,t)}function Zm(n,t){n.uniform4iv(this.addr,t)}function Jm(n,t){n.uniform1uiv(this.addr,t)}function Qm(n,t){n.uniform2uiv(this.addr,t)}function tg(n,t){n.uniform3uiv(this.addr,t)}function eg(n,t){n.uniform4uiv(this.addr,t)}function ng(n,t,e){const i=this.cache,s=t.length,r=Wr(e,s);Pe(i,r)||(n.uniform1iv(this.addr,r),De(i,r));for(let a=0;a!==s;++a)e.setTexture2D(t[a]||nh,r[a])}function ig(n,t,e){const i=this.cache,s=t.length,r=Wr(e,s);Pe(i,r)||(n.uniform1iv(this.addr,r),De(i,r));for(let a=0;a!==s;++a)e.setTexture3D(t[a]||sh,r[a])}function sg(n,t,e){const i=this.cache,s=t.length,r=Wr(e,s);Pe(i,r)||(n.uniform1iv(this.addr,r),De(i,r));for(let a=0;a!==s;++a)e.setTextureCube(t[a]||rh,r[a])}function rg(n,t,e){const i=this.cache,s=t.length,r=Wr(e,s);Pe(i,r)||(n.uniform1iv(this.addr,r),De(i,r));for(let a=0;a!==s;++a)e.setTexture2DArray(t[a]||ih,r[a])}function ag(n){switch(n){case 5126:return Hm;case 35664:return Gm;case 35665:return Vm;case 35666:return Wm;case 35674:return Xm;case 35675:return Ym;case 35676:return qm;case 5124:case 35670:return $m;case 35667:case 35671:return jm;case 35668:case 35672:return Km;case 35669:case 35673:return Zm;case 5125:return Jm;case 36294:return Qm;case 36295:return tg;case 36296:return eg;case 35678:case 36198:case 36298:case 36306:case 35682:return ng;case 35679:case 36299:case 36307:return ig;case 35680:case 36300:case 36308:case 36293:return sg;case 36289:case 36303:case 36311:case 36292:return rg}}class og{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.setValue=km(e.type)}}class lg{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=ag(e.type)}}class cg{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,i){const s=this.seq;for(let r=0,a=s.length;r!==a;++r){const o=s[r];o.setValue(t,e[o.id],i)}}}const Aa=/(\w+)(\])?(\[|\.)?/g;function tc(n,t){n.seq.push(t),n.map[t.id]=t}function hg(n,t,e){const i=n.name,s=i.length;for(Aa.lastIndex=0;;){const r=Aa.exec(i),a=Aa.lastIndex;let o=r[1];const h=r[2]==="]",l=r[3];if(h&&(o=o|0),l===void 0||l==="["&&a+2===s){tc(e,l===void 0?new og(o,n,t):new lg(o,n,t));break}else{let f=e.map[o];f===void 0&&(f=new cg(o),tc(e,f)),e=f}}}class Cr{constructor(t,e){this.seq=[],this.map={};const i=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<i;++s){const r=t.getActiveUniform(e,s),a=t.getUniformLocation(e,r.name);hg(r,a,this)}}setValue(t,e,i,s){const r=this.map[e];r!==void 0&&r.setValue(t,i,s)}setOptional(t,e,i){const s=e[i];s!==void 0&&this.setValue(t,i,s)}static upload(t,e,i,s){for(let r=0,a=e.length;r!==a;++r){const o=e[r],h=i[o.id];h.needsUpdate!==!1&&o.setValue(t,h.value,s)}}static seqWithValue(t,e){const i=[];for(let s=0,r=t.length;s!==r;++s){const a=t[s];a.id in e&&i.push(a)}return i}}function ec(n,t,e){const i=n.createShader(t);return n.shaderSource(i,e),n.compileShader(i),i}const ug=37297;let dg=0;function fg(n,t){const e=n.split(`
`),i=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=s;a<r;a++){const o=a+1;i.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return i.join(`
`)}const nc=new jt;function pg(n){oe._getMatrix(nc,oe.workingColorSpace,n);const t=`mat3( ${nc.elements.map(e=>e.toFixed(4))} )`;switch(oe.getTransfer(n)){case Lr:return[t,"LinearTransferOETF"];case de:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",n),[t,"LinearTransferOETF"]}}function ic(n,t,e){const i=n.getShaderParameter(t,n.COMPILE_STATUS),r=(n.getShaderInfoLog(t)||"").trim();if(i&&r==="")return"";const a=/ERROR: 0:(\d+)/.exec(r);if(a){const o=parseInt(a[1]);return e.toUpperCase()+`

`+r+`

`+fg(n.getShaderSource(t),o)}else return r}function mg(n,t){const e=pg(t);return[`vec4 ${n}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function gg(n,t){let e;switch(t){case iu:e="Linear";break;case su:e="Reinhard";break;case ru:e="Cineon";break;case Lc:e="ACESFilmic";break;case ou:e="AgX";break;case lu:e="Neutral";break;case au:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+n+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const vr=new B;function _g(){oe.getLuminanceCoefficients(vr);const n=vr.x.toFixed(4),t=vr.y.toFixed(4),e=vr.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function xg(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Es).join(`
`)}function vg(n){const t=[];for(const e in n){const i=n[e];i!==!1&&t.push("#define "+e+" "+i)}return t.join(`
`)}function Mg(n,t){const e={},i=n.getProgramParameter(t,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){const r=n.getActiveAttrib(t,s),a=r.name;let o=1;r.type===n.FLOAT_MAT2&&(o=2),r.type===n.FLOAT_MAT3&&(o=3),r.type===n.FLOAT_MAT4&&(o=4),e[a]={type:r.type,location:n.getAttribLocation(t,a),locationSize:o}}return e}function Es(n){return n!==""}function sc(n,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function rc(n,t){return n.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const yg=/^[ \t]*#include +<([\w\d./]+)>/gm;function bo(n){return n.replace(yg,Eg)}const Sg=new Map;function Eg(n,t){let e=Kt[t];if(e===void 0){const i=Sg.get(t);if(i!==void 0)e=Kt[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,i);else throw new Error("Can not resolve #include <"+t+">")}return bo(e)}const bg=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function ac(n){return n.replace(bg,Tg)}function Tg(n,t,e,i){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function oc(n){let t=`precision ${n.precision} float;
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
#define LOW_PRECISION`),t}function Ag(n){let t="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===Pc?t="SHADOWMAP_TYPE_PCF":n.shadowMapType===Nh?t="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===Nn&&(t="SHADOWMAP_TYPE_VSM"),t}function wg(n){let t="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case os:case ls:t="ENVMAP_TYPE_CUBE";break;case kr:t="ENVMAP_TYPE_CUBE_UV";break}return t}function Rg(n){let t="ENVMAP_MODE_REFLECTION";return n.envMap&&n.envMapMode===ls&&(t="ENVMAP_MODE_REFRACTION"),t}function Cg(n){let t="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case Dc:t="ENVMAP_BLENDING_MULTIPLY";break;case eu:t="ENVMAP_BLENDING_MIX";break;case nu:t="ENVMAP_BLENDING_ADD";break}return t}function Pg(n){const t=n.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:i,maxMip:e}}function Dg(n,t,e,i){const s=n.getContext(),r=e.defines;let a=e.vertexShader,o=e.fragmentShader;const h=Ag(e),l=wg(e),d=Rg(e),f=Cg(e),p=Pg(e),m=xg(e),_=vg(r),y=s.createProgram();let c,u,b=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(c=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_].filter(Es).join(`
`),c.length>0&&(c+=`
`),u=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_].filter(Es).join(`
`),u.length>0&&(u+=`
`)):(c=[oc(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+d:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+h:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Es).join(`
`),u=[oc(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+d:"",e.envMap?"#define "+f:"",p?"#define CUBEUV_TEXEL_WIDTH "+p.texelWidth:"",p?"#define CUBEUV_TEXEL_HEIGHT "+p.texelHeight:"",p?"#define CUBEUV_MAX_MIP "+p.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+h:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==ni?"#define TONE_MAPPING":"",e.toneMapping!==ni?Kt.tonemapping_pars_fragment:"",e.toneMapping!==ni?gg("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Kt.colorspace_pars_fragment,mg("linearToOutputTexel",e.outputColorSpace),_g(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Es).join(`
`)),a=bo(a),a=sc(a,e),a=rc(a,e),o=bo(o),o=sc(o,e),o=rc(o,e),a=ac(a),o=ac(o),e.isRawShaderMaterial!==!0&&(b=`#version 300 es
`,c=[m,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+c,u=["#define varying in",e.glslVersion===cl?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===cl?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+u);const x=b+c+a,g=b+u+o,A=ec(s,s.VERTEX_SHADER,x),S=ec(s,s.FRAGMENT_SHADER,g);s.attachShader(y,A),s.attachShader(y,S),e.index0AttributeName!==void 0?s.bindAttribLocation(y,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(y,0,"position"),s.linkProgram(y);function T(P){if(n.debug.checkShaderErrors){const D=s.getProgramInfoLog(y)||"",F=s.getShaderInfoLog(A)||"",U=s.getShaderInfoLog(S)||"",L=D.trim(),N=F.trim(),k=U.trim();let O=!0,J=!0;if(s.getProgramParameter(y,s.LINK_STATUS)===!1)if(O=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,y,A,S);else{const q=ic(s,A,"vertex"),ct=ic(s,S,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(y,s.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+L+`
`+q+`
`+ct)}else L!==""?console.warn("THREE.WebGLProgram: Program Info Log:",L):(N===""||k==="")&&(J=!1);J&&(P.diagnostics={runnable:O,programLog:L,vertexShader:{log:N,prefix:c},fragmentShader:{log:k,prefix:u}})}s.deleteShader(A),s.deleteShader(S),R=new Cr(s,y),v=Mg(s,y)}let R;this.getUniforms=function(){return R===void 0&&T(this),R};let v;this.getAttributes=function(){return v===void 0&&T(this),v};let M=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return M===!1&&(M=s.getProgramParameter(y,ug)),M},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(y),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=dg++,this.cacheKey=t,this.usedTimes=1,this.program=y,this.vertexShader=A,this.fragmentShader=S,this}let Lg=0;class Ig{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,i=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(i),a=this._getShaderCacheForMaterial(t);return a.has(s)===!1&&(a.add(s),s.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const i of e)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let i=e.get(t);return i===void 0&&(i=new Set,e.set(t,i)),i}_getShaderStage(t){const e=this.shaderCache;let i=e.get(t);return i===void 0&&(i=new Ug(t),e.set(t,i)),i}}class Ug{constructor(t){this.id=Lg++,this.code=t,this.usedTimes=0}}function Fg(n,t,e,i,s,r,a){const o=new Vo,h=new Ig,l=new Set,d=[],f=s.logarithmicDepthBuffer,p=s.vertexTextures;let m=s.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function y(v){return l.add(v),v===0?"uv":`uv${v}`}function c(v,M,P,D,F){const U=D.fog,L=F.geometry,N=v.isMeshStandardMaterial?D.environment:null,k=(v.isMeshStandardMaterial?e:t).get(v.envMap||N),O=k&&k.mapping===kr?k.image.height:null,J=_[v.type];v.precision!==null&&(m=s.getMaxPrecision(v.precision),m!==v.precision&&console.warn("THREE.WebGLProgram.getParameters:",v.precision,"not supported, using",m,"instead."));const q=L.morphAttributes.position||L.morphAttributes.normal||L.morphAttributes.color,ct=q!==void 0?q.length:0;let vt=0;L.morphAttributes.position!==void 0&&(vt=1),L.morphAttributes.normal!==void 0&&(vt=2),L.morphAttributes.color!==void 0&&(vt=3);let Rt,Q,tt,V;if(J){const ce=Tn[J];Rt=ce.vertexShader,Q=ce.fragmentShader}else Rt=v.vertexShader,Q=v.fragmentShader,h.update(v),tt=h.getVertexShaderID(v),V=h.getFragmentShaderID(v);const X=n.getRenderTarget(),it=n.state.buffers.depth.getReversed(),_t=F.isInstancedMesh===!0,mt=F.isBatchedMesh===!0,Pt=!!v.map,Jt=!!v.matcap,I=!!k,Qt=!!v.aoMap,Z=!!v.lightMap,rt=!!v.bumpMap,at=!!v.normalMap,Wt=!!v.displacementMap,nt=!!v.emissiveMap,pt=!!v.metalnessMap,Vt=!!v.roughnessMap,Yt=v.anisotropy>0,C=v.clearcoat>0,E=v.dispersion>0,H=v.iridescence>0,K=v.sheen>0,et=v.transmission>0,Y=Yt&&!!v.anisotropyMap,Mt=C&&!!v.clearcoatMap,lt=C&&!!v.clearcoatNormalMap,Tt=C&&!!v.clearcoatRoughnessMap,At=H&&!!v.iridescenceMap,ot=H&&!!v.iridescenceThicknessMap,xt=K&&!!v.sheenColorMap,Bt=K&&!!v.sheenRoughnessMap,Dt=!!v.specularMap,yt=!!v.specularColorMap,qt=!!v.specularIntensityMap,z=et&&!!v.transmissionMap,ht=et&&!!v.thicknessMap,gt=!!v.gradientMap,wt=!!v.alphaMap,ut=v.alphaTest>0,st=!!v.alphaHash,It=!!v.extensions;let $t=ni;v.toneMapped&&(X===null||X.isXRRenderTarget===!0)&&($t=n.toneMapping);const me={shaderID:J,shaderType:v.type,shaderName:v.name,vertexShader:Rt,fragmentShader:Q,defines:v.defines,customVertexShaderID:tt,customFragmentShaderID:V,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:m,batching:mt,batchingColor:mt&&F._colorsTexture!==null,instancing:_t,instancingColor:_t&&F.instanceColor!==null,instancingMorph:_t&&F.morphTexture!==null,supportsVertexTextures:p,outputColorSpace:X===null?n.outputColorSpace:X.isXRRenderTarget===!0?X.texture.colorSpace:cs,alphaToCoverage:!!v.alphaToCoverage,map:Pt,matcap:Jt,envMap:I,envMapMode:I&&k.mapping,envMapCubeUVHeight:O,aoMap:Qt,lightMap:Z,bumpMap:rt,normalMap:at,displacementMap:p&&Wt,emissiveMap:nt,normalMapObjectSpace:at&&v.normalMapType===fu,normalMapTangentSpace:at&&v.normalMapType===du,metalnessMap:pt,roughnessMap:Vt,anisotropy:Yt,anisotropyMap:Y,clearcoat:C,clearcoatMap:Mt,clearcoatNormalMap:lt,clearcoatRoughnessMap:Tt,dispersion:E,iridescence:H,iridescenceMap:At,iridescenceThicknessMap:ot,sheen:K,sheenColorMap:xt,sheenRoughnessMap:Bt,specularMap:Dt,specularColorMap:yt,specularIntensityMap:qt,transmission:et,transmissionMap:z,thicknessMap:ht,gradientMap:gt,opaque:v.transparent===!1&&v.blending===Ei&&v.alphaToCoverage===!1,alphaMap:wt,alphaTest:ut,alphaHash:st,combine:v.combine,mapUv:Pt&&y(v.map.channel),aoMapUv:Qt&&y(v.aoMap.channel),lightMapUv:Z&&y(v.lightMap.channel),bumpMapUv:rt&&y(v.bumpMap.channel),normalMapUv:at&&y(v.normalMap.channel),displacementMapUv:Wt&&y(v.displacementMap.channel),emissiveMapUv:nt&&y(v.emissiveMap.channel),metalnessMapUv:pt&&y(v.metalnessMap.channel),roughnessMapUv:Vt&&y(v.roughnessMap.channel),anisotropyMapUv:Y&&y(v.anisotropyMap.channel),clearcoatMapUv:Mt&&y(v.clearcoatMap.channel),clearcoatNormalMapUv:lt&&y(v.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Tt&&y(v.clearcoatRoughnessMap.channel),iridescenceMapUv:At&&y(v.iridescenceMap.channel),iridescenceThicknessMapUv:ot&&y(v.iridescenceThicknessMap.channel),sheenColorMapUv:xt&&y(v.sheenColorMap.channel),sheenRoughnessMapUv:Bt&&y(v.sheenRoughnessMap.channel),specularMapUv:Dt&&y(v.specularMap.channel),specularColorMapUv:yt&&y(v.specularColorMap.channel),specularIntensityMapUv:qt&&y(v.specularIntensityMap.channel),transmissionMapUv:z&&y(v.transmissionMap.channel),thicknessMapUv:ht&&y(v.thicknessMap.channel),alphaMapUv:wt&&y(v.alphaMap.channel),vertexTangents:!!L.attributes.tangent&&(at||Yt),vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!L.attributes.color&&L.attributes.color.itemSize===4,pointsUvs:F.isPoints===!0&&!!L.attributes.uv&&(Pt||wt),fog:!!U,useFog:v.fog===!0,fogExp2:!!U&&U.isFogExp2,flatShading:v.flatShading===!0&&v.wireframe===!1,sizeAttenuation:v.sizeAttenuation===!0,logarithmicDepthBuffer:f,reversedDepthBuffer:it,skinning:F.isSkinnedMesh===!0,morphTargets:L.morphAttributes.position!==void 0,morphNormals:L.morphAttributes.normal!==void 0,morphColors:L.morphAttributes.color!==void 0,morphTargetsCount:ct,morphTextureStride:vt,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:v.dithering,shadowMapEnabled:n.shadowMap.enabled&&P.length>0,shadowMapType:n.shadowMap.type,toneMapping:$t,decodeVideoTexture:Pt&&v.map.isVideoTexture===!0&&oe.getTransfer(v.map.colorSpace)===de,decodeVideoTextureEmissive:nt&&v.emissiveMap.isVideoTexture===!0&&oe.getTransfer(v.emissiveMap.colorSpace)===de,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===On,flipSided:v.side===qe,useDepthPacking:v.depthPacking>=0,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionClipCullDistance:It&&v.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(It&&v.extensions.multiDraw===!0||mt)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:v.customProgramCacheKey()};return me.vertexUv1s=l.has(1),me.vertexUv2s=l.has(2),me.vertexUv3s=l.has(3),l.clear(),me}function u(v){const M=[];if(v.shaderID?M.push(v.shaderID):(M.push(v.customVertexShaderID),M.push(v.customFragmentShaderID)),v.defines!==void 0)for(const P in v.defines)M.push(P),M.push(v.defines[P]);return v.isRawShaderMaterial===!1&&(b(M,v),x(M,v),M.push(n.outputColorSpace)),M.push(v.customProgramCacheKey),M.join()}function b(v,M){v.push(M.precision),v.push(M.outputColorSpace),v.push(M.envMapMode),v.push(M.envMapCubeUVHeight),v.push(M.mapUv),v.push(M.alphaMapUv),v.push(M.lightMapUv),v.push(M.aoMapUv),v.push(M.bumpMapUv),v.push(M.normalMapUv),v.push(M.displacementMapUv),v.push(M.emissiveMapUv),v.push(M.metalnessMapUv),v.push(M.roughnessMapUv),v.push(M.anisotropyMapUv),v.push(M.clearcoatMapUv),v.push(M.clearcoatNormalMapUv),v.push(M.clearcoatRoughnessMapUv),v.push(M.iridescenceMapUv),v.push(M.iridescenceThicknessMapUv),v.push(M.sheenColorMapUv),v.push(M.sheenRoughnessMapUv),v.push(M.specularMapUv),v.push(M.specularColorMapUv),v.push(M.specularIntensityMapUv),v.push(M.transmissionMapUv),v.push(M.thicknessMapUv),v.push(M.combine),v.push(M.fogExp2),v.push(M.sizeAttenuation),v.push(M.morphTargetsCount),v.push(M.morphAttributeCount),v.push(M.numDirLights),v.push(M.numPointLights),v.push(M.numSpotLights),v.push(M.numSpotLightMaps),v.push(M.numHemiLights),v.push(M.numRectAreaLights),v.push(M.numDirLightShadows),v.push(M.numPointLightShadows),v.push(M.numSpotLightShadows),v.push(M.numSpotLightShadowsWithMaps),v.push(M.numLightProbes),v.push(M.shadowMapType),v.push(M.toneMapping),v.push(M.numClippingPlanes),v.push(M.numClipIntersection),v.push(M.depthPacking)}function x(v,M){o.disableAll(),M.supportsVertexTextures&&o.enable(0),M.instancing&&o.enable(1),M.instancingColor&&o.enable(2),M.instancingMorph&&o.enable(3),M.matcap&&o.enable(4),M.envMap&&o.enable(5),M.normalMapObjectSpace&&o.enable(6),M.normalMapTangentSpace&&o.enable(7),M.clearcoat&&o.enable(8),M.iridescence&&o.enable(9),M.alphaTest&&o.enable(10),M.vertexColors&&o.enable(11),M.vertexAlphas&&o.enable(12),M.vertexUv1s&&o.enable(13),M.vertexUv2s&&o.enable(14),M.vertexUv3s&&o.enable(15),M.vertexTangents&&o.enable(16),M.anisotropy&&o.enable(17),M.alphaHash&&o.enable(18),M.batching&&o.enable(19),M.dispersion&&o.enable(20),M.batchingColor&&o.enable(21),M.gradientMap&&o.enable(22),v.push(o.mask),o.disableAll(),M.fog&&o.enable(0),M.useFog&&o.enable(1),M.flatShading&&o.enable(2),M.logarithmicDepthBuffer&&o.enable(3),M.reversedDepthBuffer&&o.enable(4),M.skinning&&o.enable(5),M.morphTargets&&o.enable(6),M.morphNormals&&o.enable(7),M.morphColors&&o.enable(8),M.premultipliedAlpha&&o.enable(9),M.shadowMapEnabled&&o.enable(10),M.doubleSided&&o.enable(11),M.flipSided&&o.enable(12),M.useDepthPacking&&o.enable(13),M.dithering&&o.enable(14),M.transmission&&o.enable(15),M.sheen&&o.enable(16),M.opaque&&o.enable(17),M.pointsUvs&&o.enable(18),M.decodeVideoTexture&&o.enable(19),M.decodeVideoTextureEmissive&&o.enable(20),M.alphaToCoverage&&o.enable(21),v.push(o.mask)}function g(v){const M=_[v.type];let P;if(M){const D=Tn[M];P=id.clone(D.uniforms)}else P=v.uniforms;return P}function A(v,M){let P;for(let D=0,F=d.length;D<F;D++){const U=d[D];if(U.cacheKey===M){P=U,++P.usedTimes;break}}return P===void 0&&(P=new Dg(n,M,v,r),d.push(P)),P}function S(v){if(--v.usedTimes===0){const M=d.indexOf(v);d[M]=d[d.length-1],d.pop(),v.destroy()}}function T(v){h.remove(v)}function R(){h.dispose()}return{getParameters:c,getProgramCacheKey:u,getUniforms:g,acquireProgram:A,releaseProgram:S,releaseShaderCache:T,programs:d,dispose:R}}function Ng(){let n=new WeakMap;function t(a){return n.has(a)}function e(a){let o=n.get(a);return o===void 0&&(o={},n.set(a,o)),o}function i(a){n.delete(a)}function s(a,o,h){n.get(a)[o]=h}function r(){n=new WeakMap}return{has:t,get:e,remove:i,update:s,dispose:r}}function Og(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.material.id!==t.material.id?n.material.id-t.material.id:n.z!==t.z?n.z-t.z:n.id-t.id}function lc(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.z!==t.z?t.z-n.z:n.id-t.id}function cc(){const n=[];let t=0;const e=[],i=[],s=[];function r(){t=0,e.length=0,i.length=0,s.length=0}function a(f,p,m,_,y,c){let u=n[t];return u===void 0?(u={id:f.id,object:f,geometry:p,material:m,groupOrder:_,renderOrder:f.renderOrder,z:y,group:c},n[t]=u):(u.id=f.id,u.object=f,u.geometry=p,u.material=m,u.groupOrder=_,u.renderOrder=f.renderOrder,u.z=y,u.group=c),t++,u}function o(f,p,m,_,y,c){const u=a(f,p,m,_,y,c);m.transmission>0?i.push(u):m.transparent===!0?s.push(u):e.push(u)}function h(f,p,m,_,y,c){const u=a(f,p,m,_,y,c);m.transmission>0?i.unshift(u):m.transparent===!0?s.unshift(u):e.unshift(u)}function l(f,p){e.length>1&&e.sort(f||Og),i.length>1&&i.sort(p||lc),s.length>1&&s.sort(p||lc)}function d(){for(let f=t,p=n.length;f<p;f++){const m=n[f];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:e,transmissive:i,transparent:s,init:r,push:o,unshift:h,finish:d,sort:l}}function Bg(){let n=new WeakMap;function t(i,s){const r=n.get(i);let a;return r===void 0?(a=new cc,n.set(i,[a])):s>=r.length?(a=new cc,r.push(a)):a=r[s],a}function e(){n=new WeakMap}return{get:t,dispose:e}}function zg(){const n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new B,color:new zt};break;case"SpotLight":e={position:new B,direction:new B,color:new zt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new B,color:new zt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new B,skyColor:new zt,groundColor:new zt};break;case"RectAreaLight":e={color:new zt,position:new B,halfWidth:new B,halfHeight:new B};break}return n[t.id]=e,e}}}function kg(){const n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ht};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ht};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ht,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[t.id]=e,e}}}let Hg=0;function Gg(n,t){return(t.castShadow?2:0)-(n.castShadow?2:0)+(t.map?1:0)-(n.map?1:0)}function Vg(n){const t=new zg,e=kg(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)i.probe.push(new B);const s=new B,r=new Me,a=new Me;function o(l){let d=0,f=0,p=0;for(let v=0;v<9;v++)i.probe[v].set(0,0,0);let m=0,_=0,y=0,c=0,u=0,b=0,x=0,g=0,A=0,S=0,T=0;l.sort(Gg);for(let v=0,M=l.length;v<M;v++){const P=l[v],D=P.color,F=P.intensity,U=P.distance,L=P.shadow&&P.shadow.map?P.shadow.map.texture:null;if(P.isAmbientLight)d+=D.r*F,f+=D.g*F,p+=D.b*F;else if(P.isLightProbe){for(let N=0;N<9;N++)i.probe[N].addScaledVector(P.sh.coefficients[N],F);T++}else if(P.isDirectionalLight){const N=t.get(P);if(N.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){const k=P.shadow,O=e.get(P);O.shadowIntensity=k.intensity,O.shadowBias=k.bias,O.shadowNormalBias=k.normalBias,O.shadowRadius=k.radius,O.shadowMapSize=k.mapSize,i.directionalShadow[m]=O,i.directionalShadowMap[m]=L,i.directionalShadowMatrix[m]=P.shadow.matrix,b++}i.directional[m]=N,m++}else if(P.isSpotLight){const N=t.get(P);N.position.setFromMatrixPosition(P.matrixWorld),N.color.copy(D).multiplyScalar(F),N.distance=U,N.coneCos=Math.cos(P.angle),N.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),N.decay=P.decay,i.spot[y]=N;const k=P.shadow;if(P.map&&(i.spotLightMap[A]=P.map,A++,k.updateMatrices(P),P.castShadow&&S++),i.spotLightMatrix[y]=k.matrix,P.castShadow){const O=e.get(P);O.shadowIntensity=k.intensity,O.shadowBias=k.bias,O.shadowNormalBias=k.normalBias,O.shadowRadius=k.radius,O.shadowMapSize=k.mapSize,i.spotShadow[y]=O,i.spotShadowMap[y]=L,g++}y++}else if(P.isRectAreaLight){const N=t.get(P);N.color.copy(D).multiplyScalar(F),N.halfWidth.set(P.width*.5,0,0),N.halfHeight.set(0,P.height*.5,0),i.rectArea[c]=N,c++}else if(P.isPointLight){const N=t.get(P);if(N.color.copy(P.color).multiplyScalar(P.intensity),N.distance=P.distance,N.decay=P.decay,P.castShadow){const k=P.shadow,O=e.get(P);O.shadowIntensity=k.intensity,O.shadowBias=k.bias,O.shadowNormalBias=k.normalBias,O.shadowRadius=k.radius,O.shadowMapSize=k.mapSize,O.shadowCameraNear=k.camera.near,O.shadowCameraFar=k.camera.far,i.pointShadow[_]=O,i.pointShadowMap[_]=L,i.pointShadowMatrix[_]=P.shadow.matrix,x++}i.point[_]=N,_++}else if(P.isHemisphereLight){const N=t.get(P);N.skyColor.copy(P.color).multiplyScalar(F),N.groundColor.copy(P.groundColor).multiplyScalar(F),i.hemi[u]=N,u++}}c>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Et.LTC_FLOAT_1,i.rectAreaLTC2=Et.LTC_FLOAT_2):(i.rectAreaLTC1=Et.LTC_HALF_1,i.rectAreaLTC2=Et.LTC_HALF_2)),i.ambient[0]=d,i.ambient[1]=f,i.ambient[2]=p;const R=i.hash;(R.directionalLength!==m||R.pointLength!==_||R.spotLength!==y||R.rectAreaLength!==c||R.hemiLength!==u||R.numDirectionalShadows!==b||R.numPointShadows!==x||R.numSpotShadows!==g||R.numSpotMaps!==A||R.numLightProbes!==T)&&(i.directional.length=m,i.spot.length=y,i.rectArea.length=c,i.point.length=_,i.hemi.length=u,i.directionalShadow.length=b,i.directionalShadowMap.length=b,i.pointShadow.length=x,i.pointShadowMap.length=x,i.spotShadow.length=g,i.spotShadowMap.length=g,i.directionalShadowMatrix.length=b,i.pointShadowMatrix.length=x,i.spotLightMatrix.length=g+A-S,i.spotLightMap.length=A,i.numSpotLightShadowsWithMaps=S,i.numLightProbes=T,R.directionalLength=m,R.pointLength=_,R.spotLength=y,R.rectAreaLength=c,R.hemiLength=u,R.numDirectionalShadows=b,R.numPointShadows=x,R.numSpotShadows=g,R.numSpotMaps=A,R.numLightProbes=T,i.version=Hg++)}function h(l,d){let f=0,p=0,m=0,_=0,y=0;const c=d.matrixWorldInverse;for(let u=0,b=l.length;u<b;u++){const x=l[u];if(x.isDirectionalLight){const g=i.directional[f];g.direction.setFromMatrixPosition(x.matrixWorld),s.setFromMatrixPosition(x.target.matrixWorld),g.direction.sub(s),g.direction.transformDirection(c),f++}else if(x.isSpotLight){const g=i.spot[m];g.position.setFromMatrixPosition(x.matrixWorld),g.position.applyMatrix4(c),g.direction.setFromMatrixPosition(x.matrixWorld),s.setFromMatrixPosition(x.target.matrixWorld),g.direction.sub(s),g.direction.transformDirection(c),m++}else if(x.isRectAreaLight){const g=i.rectArea[_];g.position.setFromMatrixPosition(x.matrixWorld),g.position.applyMatrix4(c),a.identity(),r.copy(x.matrixWorld),r.premultiply(c),a.extractRotation(r),g.halfWidth.set(x.width*.5,0,0),g.halfHeight.set(0,x.height*.5,0),g.halfWidth.applyMatrix4(a),g.halfHeight.applyMatrix4(a),_++}else if(x.isPointLight){const g=i.point[p];g.position.setFromMatrixPosition(x.matrixWorld),g.position.applyMatrix4(c),p++}else if(x.isHemisphereLight){const g=i.hemi[y];g.direction.setFromMatrixPosition(x.matrixWorld),g.direction.transformDirection(c),y++}}}return{setup:o,setupView:h,state:i}}function hc(n){const t=new Vg(n),e=[],i=[];function s(d){l.camera=d,e.length=0,i.length=0}function r(d){e.push(d)}function a(d){i.push(d)}function o(){t.setup(e)}function h(d){t.setupView(e,d)}const l={lightsArray:e,shadowsArray:i,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:l,setupLights:o,setupLightsView:h,pushLight:r,pushShadow:a}}function Wg(n){let t=new WeakMap;function e(s,r=0){const a=t.get(s);let o;return a===void 0?(o=new hc(n),t.set(s,[o])):r>=a.length?(o=new hc(n),a.push(o)):o=a[r],o}function i(){t=new WeakMap}return{get:e,dispose:i}}const Xg=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Yg=`uniform sampler2D shadow_pass;
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
}`;function qg(n,t,e){let i=new Jc;const s=new Ht,r=new Ht,a=new Se,o=new gd({depthPacking:uu}),h=new _d,l={},d=e.maxTextureSize,f={[si]:qe,[qe]:si,[On]:On},p=new ai({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ht},radius:{value:4}},vertexShader:Xg,fragmentShader:Yg}),m=p.clone();m.defines.HORIZONTAL_PASS=1;const _=new ne;_.setAttribute("position",new te(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const y=new cn(_,p),c=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Pc;let u=this.type;this.render=function(S,T,R){if(c.enabled===!1||c.autoUpdate===!1&&c.needsUpdate===!1||S.length===0)return;const v=n.getRenderTarget(),M=n.getActiveCubeFace(),P=n.getActiveMipmapLevel(),D=n.state;D.setBlending(ei),D.buffers.depth.getReversed()===!0?D.buffers.color.setClear(0,0,0,0):D.buffers.color.setClear(1,1,1,1),D.buffers.depth.setTest(!0),D.setScissorTest(!1);const F=u!==Nn&&this.type===Nn,U=u===Nn&&this.type!==Nn;for(let L=0,N=S.length;L<N;L++){const k=S[L],O=k.shadow;if(O===void 0){console.warn("THREE.WebGLShadowMap:",k,"has no shadow.");continue}if(O.autoUpdate===!1&&O.needsUpdate===!1)continue;s.copy(O.mapSize);const J=O.getFrameExtents();if(s.multiply(J),r.copy(O.mapSize),(s.x>d||s.y>d)&&(s.x>d&&(r.x=Math.floor(d/J.x),s.x=r.x*J.x,O.mapSize.x=r.x),s.y>d&&(r.y=Math.floor(d/J.y),s.y=r.y*J.y,O.mapSize.y=r.y)),O.map===null||F===!0||U===!0){const ct=this.type!==Nn?{minFilter:Sn,magFilter:Sn}:{};O.map!==null&&O.map.dispose(),O.map=new Ai(s.x,s.y,ct),O.map.texture.name=k.name+".shadowMap",O.camera.updateProjectionMatrix()}n.setRenderTarget(O.map),n.clear();const q=O.getViewportCount();for(let ct=0;ct<q;ct++){const vt=O.getViewport(ct);a.set(r.x*vt.x,r.y*vt.y,r.x*vt.z,r.y*vt.w),D.viewport(a),O.updateMatrices(k,ct),i=O.getFrustum(),g(T,R,O.camera,k,this.type)}O.isPointLightShadow!==!0&&this.type===Nn&&b(O,R),O.needsUpdate=!1}u=this.type,c.needsUpdate=!1,n.setRenderTarget(v,M,P)};function b(S,T){const R=t.update(y);p.defines.VSM_SAMPLES!==S.blurSamples&&(p.defines.VSM_SAMPLES=S.blurSamples,m.defines.VSM_SAMPLES=S.blurSamples,p.needsUpdate=!0,m.needsUpdate=!0),S.mapPass===null&&(S.mapPass=new Ai(s.x,s.y)),p.uniforms.shadow_pass.value=S.map.texture,p.uniforms.resolution.value=S.mapSize,p.uniforms.radius.value=S.radius,n.setRenderTarget(S.mapPass),n.clear(),n.renderBufferDirect(T,null,R,p,y,null),m.uniforms.shadow_pass.value=S.mapPass.texture,m.uniforms.resolution.value=S.mapSize,m.uniforms.radius.value=S.radius,n.setRenderTarget(S.map),n.clear(),n.renderBufferDirect(T,null,R,m,y,null)}function x(S,T,R,v){let M=null;const P=R.isPointLight===!0?S.customDistanceMaterial:S.customDepthMaterial;if(P!==void 0)M=P;else if(M=R.isPointLight===!0?h:o,n.localClippingEnabled&&T.clipShadows===!0&&Array.isArray(T.clippingPlanes)&&T.clippingPlanes.length!==0||T.displacementMap&&T.displacementScale!==0||T.alphaMap&&T.alphaTest>0||T.map&&T.alphaTest>0||T.alphaToCoverage===!0){const D=M.uuid,F=T.uuid;let U=l[D];U===void 0&&(U={},l[D]=U);let L=U[F];L===void 0&&(L=M.clone(),U[F]=L,T.addEventListener("dispose",A)),M=L}if(M.visible=T.visible,M.wireframe=T.wireframe,v===Nn?M.side=T.shadowSide!==null?T.shadowSide:T.side:M.side=T.shadowSide!==null?T.shadowSide:f[T.side],M.alphaMap=T.alphaMap,M.alphaTest=T.alphaToCoverage===!0?.5:T.alphaTest,M.map=T.map,M.clipShadows=T.clipShadows,M.clippingPlanes=T.clippingPlanes,M.clipIntersection=T.clipIntersection,M.displacementMap=T.displacementMap,M.displacementScale=T.displacementScale,M.displacementBias=T.displacementBias,M.wireframeLinewidth=T.wireframeLinewidth,M.linewidth=T.linewidth,R.isPointLight===!0&&M.isMeshDistanceMaterial===!0){const D=n.properties.get(M);D.light=R}return M}function g(S,T,R,v,M){if(S.visible===!1)return;if(S.layers.test(T.layers)&&(S.isMesh||S.isLine||S.isPoints)&&(S.castShadow||S.receiveShadow&&M===Nn)&&(!S.frustumCulled||i.intersectsObject(S))){S.modelViewMatrix.multiplyMatrices(R.matrixWorldInverse,S.matrixWorld);const F=t.update(S),U=S.material;if(Array.isArray(U)){const L=F.groups;for(let N=0,k=L.length;N<k;N++){const O=L[N],J=U[O.materialIndex];if(J&&J.visible){const q=x(S,J,v,M);S.onBeforeShadow(n,S,T,R,F,q,O),n.renderBufferDirect(R,null,F,q,S,O),S.onAfterShadow(n,S,T,R,F,q,O)}}}else if(U.visible){const L=x(S,U,v,M);S.onBeforeShadow(n,S,T,R,F,L,null),n.renderBufferDirect(R,null,F,L,S,null),S.onAfterShadow(n,S,T,R,F,L,null)}}const D=S.children;for(let F=0,U=D.length;F<U;F++)g(D[F],T,R,v,M)}function A(S){S.target.removeEventListener("dispose",A);for(const R in l){const v=l[R],M=S.target.uuid;M in v&&(v[M].dispose(),delete v[M])}}}const $g={[Fa]:Na,[Oa]:ka,[Ba]:Ha,[as]:za,[Na]:Fa,[ka]:Oa,[Ha]:Ba,[za]:as};function jg(n,t){function e(){let z=!1;const ht=new Se;let gt=null;const wt=new Se(0,0,0,0);return{setMask:function(ut){gt!==ut&&!z&&(n.colorMask(ut,ut,ut,ut),gt=ut)},setLocked:function(ut){z=ut},setClear:function(ut,st,It,$t,me){me===!0&&(ut*=$t,st*=$t,It*=$t),ht.set(ut,st,It,$t),wt.equals(ht)===!1&&(n.clearColor(ut,st,It,$t),wt.copy(ht))},reset:function(){z=!1,gt=null,wt.set(-1,0,0,0)}}}function i(){let z=!1,ht=!1,gt=null,wt=null,ut=null;return{setReversed:function(st){if(ht!==st){const It=t.get("EXT_clip_control");st?It.clipControlEXT(It.LOWER_LEFT_EXT,It.ZERO_TO_ONE_EXT):It.clipControlEXT(It.LOWER_LEFT_EXT,It.NEGATIVE_ONE_TO_ONE_EXT),ht=st;const $t=ut;ut=null,this.setClear($t)}},getReversed:function(){return ht},setTest:function(st){st?X(n.DEPTH_TEST):it(n.DEPTH_TEST)},setMask:function(st){gt!==st&&!z&&(n.depthMask(st),gt=st)},setFunc:function(st){if(ht&&(st=$g[st]),wt!==st){switch(st){case Fa:n.depthFunc(n.NEVER);break;case Na:n.depthFunc(n.ALWAYS);break;case Oa:n.depthFunc(n.LESS);break;case as:n.depthFunc(n.LEQUAL);break;case Ba:n.depthFunc(n.EQUAL);break;case za:n.depthFunc(n.GEQUAL);break;case ka:n.depthFunc(n.GREATER);break;case Ha:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}wt=st}},setLocked:function(st){z=st},setClear:function(st){ut!==st&&(ht&&(st=1-st),n.clearDepth(st),ut=st)},reset:function(){z=!1,gt=null,wt=null,ut=null,ht=!1}}}function s(){let z=!1,ht=null,gt=null,wt=null,ut=null,st=null,It=null,$t=null,me=null;return{setTest:function(ce){z||(ce?X(n.STENCIL_TEST):it(n.STENCIL_TEST))},setMask:function(ce){ht!==ce&&!z&&(n.stencilMask(ce),ht=ce)},setFunc:function(ce,Pn,En){(gt!==ce||wt!==Pn||ut!==En)&&(n.stencilFunc(ce,Pn,En),gt=ce,wt=Pn,ut=En)},setOp:function(ce,Pn,En){(st!==ce||It!==Pn||$t!==En)&&(n.stencilOp(ce,Pn,En),st=ce,It=Pn,$t=En)},setLocked:function(ce){z=ce},setClear:function(ce){me!==ce&&(n.clearStencil(ce),me=ce)},reset:function(){z=!1,ht=null,gt=null,wt=null,ut=null,st=null,It=null,$t=null,me=null}}}const r=new e,a=new i,o=new s,h=new WeakMap,l=new WeakMap;let d={},f={},p=new WeakMap,m=[],_=null,y=!1,c=null,u=null,b=null,x=null,g=null,A=null,S=null,T=new zt(0,0,0),R=0,v=!1,M=null,P=null,D=null,F=null,U=null;const L=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let N=!1,k=0;const O=n.getParameter(n.VERSION);O.indexOf("WebGL")!==-1?(k=parseFloat(/^WebGL (\d)/.exec(O)[1]),N=k>=1):O.indexOf("OpenGL ES")!==-1&&(k=parseFloat(/^OpenGL ES (\d)/.exec(O)[1]),N=k>=2);let J=null,q={};const ct=n.getParameter(n.SCISSOR_BOX),vt=n.getParameter(n.VIEWPORT),Rt=new Se().fromArray(ct),Q=new Se().fromArray(vt);function tt(z,ht,gt,wt){const ut=new Uint8Array(4),st=n.createTexture();n.bindTexture(z,st),n.texParameteri(z,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(z,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let It=0;It<gt;It++)z===n.TEXTURE_3D||z===n.TEXTURE_2D_ARRAY?n.texImage3D(ht,0,n.RGBA,1,1,wt,0,n.RGBA,n.UNSIGNED_BYTE,ut):n.texImage2D(ht+It,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,ut);return st}const V={};V[n.TEXTURE_2D]=tt(n.TEXTURE_2D,n.TEXTURE_2D,1),V[n.TEXTURE_CUBE_MAP]=tt(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),V[n.TEXTURE_2D_ARRAY]=tt(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),V[n.TEXTURE_3D]=tt(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),X(n.DEPTH_TEST),a.setFunc(as),rt(!1),at(rl),X(n.CULL_FACE),Qt(ei);function X(z){d[z]!==!0&&(n.enable(z),d[z]=!0)}function it(z){d[z]!==!1&&(n.disable(z),d[z]=!1)}function _t(z,ht){return f[z]!==ht?(n.bindFramebuffer(z,ht),f[z]=ht,z===n.DRAW_FRAMEBUFFER&&(f[n.FRAMEBUFFER]=ht),z===n.FRAMEBUFFER&&(f[n.DRAW_FRAMEBUFFER]=ht),!0):!1}function mt(z,ht){let gt=m,wt=!1;if(z){gt=p.get(ht),gt===void 0&&(gt=[],p.set(ht,gt));const ut=z.textures;if(gt.length!==ut.length||gt[0]!==n.COLOR_ATTACHMENT0){for(let st=0,It=ut.length;st<It;st++)gt[st]=n.COLOR_ATTACHMENT0+st;gt.length=ut.length,wt=!0}}else gt[0]!==n.BACK&&(gt[0]=n.BACK,wt=!0);wt&&n.drawBuffers(gt)}function Pt(z){return _!==z?(n.useProgram(z),_=z,!0):!1}const Jt={[xi]:n.FUNC_ADD,[Bh]:n.FUNC_SUBTRACT,[zh]:n.FUNC_REVERSE_SUBTRACT};Jt[kh]=n.MIN,Jt[Hh]=n.MAX;const I={[Gh]:n.ZERO,[Vh]:n.ONE,[Wh]:n.SRC_COLOR,[Ia]:n.SRC_ALPHA,[Kh]:n.SRC_ALPHA_SATURATE,[$h]:n.DST_COLOR,[Yh]:n.DST_ALPHA,[Xh]:n.ONE_MINUS_SRC_COLOR,[Ua]:n.ONE_MINUS_SRC_ALPHA,[jh]:n.ONE_MINUS_DST_COLOR,[qh]:n.ONE_MINUS_DST_ALPHA,[Zh]:n.CONSTANT_COLOR,[Jh]:n.ONE_MINUS_CONSTANT_COLOR,[Qh]:n.CONSTANT_ALPHA,[tu]:n.ONE_MINUS_CONSTANT_ALPHA};function Qt(z,ht,gt,wt,ut,st,It,$t,me,ce){if(z===ei){y===!0&&(it(n.BLEND),y=!1);return}if(y===!1&&(X(n.BLEND),y=!0),z!==Oh){if(z!==c||ce!==v){if((u!==xi||g!==xi)&&(n.blendEquation(n.FUNC_ADD),u=xi,g=xi),ce)switch(z){case Ei:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Ft:n.blendFunc(n.ONE,n.ONE);break;case al:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case ol:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",z);break}else switch(z){case Ei:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Ft:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case al:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case ol:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",z);break}b=null,x=null,A=null,S=null,T.set(0,0,0),R=0,c=z,v=ce}return}ut=ut||ht,st=st||gt,It=It||wt,(ht!==u||ut!==g)&&(n.blendEquationSeparate(Jt[ht],Jt[ut]),u=ht,g=ut),(gt!==b||wt!==x||st!==A||It!==S)&&(n.blendFuncSeparate(I[gt],I[wt],I[st],I[It]),b=gt,x=wt,A=st,S=It),($t.equals(T)===!1||me!==R)&&(n.blendColor($t.r,$t.g,$t.b,me),T.copy($t),R=me),c=z,v=!1}function Z(z,ht){z.side===On?it(n.CULL_FACE):X(n.CULL_FACE);let gt=z.side===qe;ht&&(gt=!gt),rt(gt),z.blending===Ei&&z.transparent===!1?Qt(ei):Qt(z.blending,z.blendEquation,z.blendSrc,z.blendDst,z.blendEquationAlpha,z.blendSrcAlpha,z.blendDstAlpha,z.blendColor,z.blendAlpha,z.premultipliedAlpha),a.setFunc(z.depthFunc),a.setTest(z.depthTest),a.setMask(z.depthWrite),r.setMask(z.colorWrite);const wt=z.stencilWrite;o.setTest(wt),wt&&(o.setMask(z.stencilWriteMask),o.setFunc(z.stencilFunc,z.stencilRef,z.stencilFuncMask),o.setOp(z.stencilFail,z.stencilZFail,z.stencilZPass)),nt(z.polygonOffset,z.polygonOffsetFactor,z.polygonOffsetUnits),z.alphaToCoverage===!0?X(n.SAMPLE_ALPHA_TO_COVERAGE):it(n.SAMPLE_ALPHA_TO_COVERAGE)}function rt(z){M!==z&&(z?n.frontFace(n.CW):n.frontFace(n.CCW),M=z)}function at(z){z!==Uh?(X(n.CULL_FACE),z!==P&&(z===rl?n.cullFace(n.BACK):z===Fh?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):it(n.CULL_FACE),P=z}function Wt(z){z!==D&&(N&&n.lineWidth(z),D=z)}function nt(z,ht,gt){z?(X(n.POLYGON_OFFSET_FILL),(F!==ht||U!==gt)&&(n.polygonOffset(ht,gt),F=ht,U=gt)):it(n.POLYGON_OFFSET_FILL)}function pt(z){z?X(n.SCISSOR_TEST):it(n.SCISSOR_TEST)}function Vt(z){z===void 0&&(z=n.TEXTURE0+L-1),J!==z&&(n.activeTexture(z),J=z)}function Yt(z,ht,gt){gt===void 0&&(J===null?gt=n.TEXTURE0+L-1:gt=J);let wt=q[gt];wt===void 0&&(wt={type:void 0,texture:void 0},q[gt]=wt),(wt.type!==z||wt.texture!==ht)&&(J!==gt&&(n.activeTexture(gt),J=gt),n.bindTexture(z,ht||V[z]),wt.type=z,wt.texture=ht)}function C(){const z=q[J];z!==void 0&&z.type!==void 0&&(n.bindTexture(z.type,null),z.type=void 0,z.texture=void 0)}function E(){try{n.compressedTexImage2D(...arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function H(){try{n.compressedTexImage3D(...arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function K(){try{n.texSubImage2D(...arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function et(){try{n.texSubImage3D(...arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function Y(){try{n.compressedTexSubImage2D(...arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function Mt(){try{n.compressedTexSubImage3D(...arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function lt(){try{n.texStorage2D(...arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function Tt(){try{n.texStorage3D(...arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function At(){try{n.texImage2D(...arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function ot(){try{n.texImage3D(...arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function xt(z){Rt.equals(z)===!1&&(n.scissor(z.x,z.y,z.z,z.w),Rt.copy(z))}function Bt(z){Q.equals(z)===!1&&(n.viewport(z.x,z.y,z.z,z.w),Q.copy(z))}function Dt(z,ht){let gt=l.get(ht);gt===void 0&&(gt=new WeakMap,l.set(ht,gt));let wt=gt.get(z);wt===void 0&&(wt=n.getUniformBlockIndex(ht,z.name),gt.set(z,wt))}function yt(z,ht){const wt=l.get(ht).get(z);h.get(ht)!==wt&&(n.uniformBlockBinding(ht,wt,z.__bindingPointIndex),h.set(ht,wt))}function qt(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),a.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),d={},J=null,q={},f={},p=new WeakMap,m=[],_=null,y=!1,c=null,u=null,b=null,x=null,g=null,A=null,S=null,T=new zt(0,0,0),R=0,v=!1,M=null,P=null,D=null,F=null,U=null,Rt.set(0,0,n.canvas.width,n.canvas.height),Q.set(0,0,n.canvas.width,n.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:X,disable:it,bindFramebuffer:_t,drawBuffers:mt,useProgram:Pt,setBlending:Qt,setMaterial:Z,setFlipSided:rt,setCullFace:at,setLineWidth:Wt,setPolygonOffset:nt,setScissorTest:pt,activeTexture:Vt,bindTexture:Yt,unbindTexture:C,compressedTexImage2D:E,compressedTexImage3D:H,texImage2D:At,texImage3D:ot,updateUBOMapping:Dt,uniformBlockBinding:yt,texStorage2D:lt,texStorage3D:Tt,texSubImage2D:K,texSubImage3D:et,compressedTexSubImage2D:Y,compressedTexSubImage3D:Mt,scissor:xt,viewport:Bt,reset:qt}}function Kg(n,t,e,i,s,r,a){const o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,h=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new Ht,d=new WeakMap;let f;const p=new WeakMap;let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(C,E){return m?new OffscreenCanvas(C,E):Ur("canvas")}function y(C,E,H){let K=1;const et=Yt(C);if((et.width>H||et.height>H)&&(K=H/Math.max(et.width,et.height)),K<1)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap||typeof VideoFrame<"u"&&C instanceof VideoFrame){const Y=Math.floor(K*et.width),Mt=Math.floor(K*et.height);f===void 0&&(f=_(Y,Mt));const lt=E?_(Y,Mt):f;return lt.width=Y,lt.height=Mt,lt.getContext("2d").drawImage(C,0,0,Y,Mt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+et.width+"x"+et.height+") to ("+Y+"x"+Mt+")."),lt}else return"data"in C&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+et.width+"x"+et.height+")."),C;return C}function c(C){return C.generateMipmaps}function u(C){n.generateMipmap(C)}function b(C){return C.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:C.isWebGL3DRenderTarget?n.TEXTURE_3D:C.isWebGLArrayRenderTarget||C.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function x(C,E,H,K,et=!1){if(C!==null){if(n[C]!==void 0)return n[C];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let Y=E;if(E===n.RED&&(H===n.FLOAT&&(Y=n.R32F),H===n.HALF_FLOAT&&(Y=n.R16F),H===n.UNSIGNED_BYTE&&(Y=n.R8)),E===n.RED_INTEGER&&(H===n.UNSIGNED_BYTE&&(Y=n.R8UI),H===n.UNSIGNED_SHORT&&(Y=n.R16UI),H===n.UNSIGNED_INT&&(Y=n.R32UI),H===n.BYTE&&(Y=n.R8I),H===n.SHORT&&(Y=n.R16I),H===n.INT&&(Y=n.R32I)),E===n.RG&&(H===n.FLOAT&&(Y=n.RG32F),H===n.HALF_FLOAT&&(Y=n.RG16F),H===n.UNSIGNED_BYTE&&(Y=n.RG8)),E===n.RG_INTEGER&&(H===n.UNSIGNED_BYTE&&(Y=n.RG8UI),H===n.UNSIGNED_SHORT&&(Y=n.RG16UI),H===n.UNSIGNED_INT&&(Y=n.RG32UI),H===n.BYTE&&(Y=n.RG8I),H===n.SHORT&&(Y=n.RG16I),H===n.INT&&(Y=n.RG32I)),E===n.RGB_INTEGER&&(H===n.UNSIGNED_BYTE&&(Y=n.RGB8UI),H===n.UNSIGNED_SHORT&&(Y=n.RGB16UI),H===n.UNSIGNED_INT&&(Y=n.RGB32UI),H===n.BYTE&&(Y=n.RGB8I),H===n.SHORT&&(Y=n.RGB16I),H===n.INT&&(Y=n.RGB32I)),E===n.RGBA_INTEGER&&(H===n.UNSIGNED_BYTE&&(Y=n.RGBA8UI),H===n.UNSIGNED_SHORT&&(Y=n.RGBA16UI),H===n.UNSIGNED_INT&&(Y=n.RGBA32UI),H===n.BYTE&&(Y=n.RGBA8I),H===n.SHORT&&(Y=n.RGBA16I),H===n.INT&&(Y=n.RGBA32I)),E===n.RGB&&(H===n.UNSIGNED_INT_5_9_9_9_REV&&(Y=n.RGB9_E5),H===n.UNSIGNED_INT_10F_11F_11F_REV&&(Y=n.R11F_G11F_B10F)),E===n.RGBA){const Mt=et?Lr:oe.getTransfer(K);H===n.FLOAT&&(Y=n.RGBA32F),H===n.HALF_FLOAT&&(Y=n.RGBA16F),H===n.UNSIGNED_BYTE&&(Y=Mt===de?n.SRGB8_ALPHA8:n.RGBA8),H===n.UNSIGNED_SHORT_4_4_4_4&&(Y=n.RGBA4),H===n.UNSIGNED_SHORT_5_5_5_1&&(Y=n.RGB5_A1)}return(Y===n.R16F||Y===n.R32F||Y===n.RG16F||Y===n.RG32F||Y===n.RGBA16F||Y===n.RGBA32F)&&t.get("EXT_color_buffer_float"),Y}function g(C,E){let H;return C?E===null||E===Ti||E===Ps?H=n.DEPTH24_STENCIL8:E===Bn?H=n.DEPTH32F_STENCIL8:E===Cs&&(H=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):E===null||E===Ti||E===Ps?H=n.DEPTH_COMPONENT24:E===Bn?H=n.DEPTH_COMPONENT32F:E===Cs&&(H=n.DEPTH_COMPONENT16),H}function A(C,E){return c(C)===!0||C.isFramebufferTexture&&C.minFilter!==Sn&&C.minFilter!==vn?Math.log2(Math.max(E.width,E.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?E.mipmaps.length:1}function S(C){const E=C.target;E.removeEventListener("dispose",S),R(E),E.isVideoTexture&&d.delete(E)}function T(C){const E=C.target;E.removeEventListener("dispose",T),M(E)}function R(C){const E=i.get(C);if(E.__webglInit===void 0)return;const H=C.source,K=p.get(H);if(K){const et=K[E.__cacheKey];et.usedTimes--,et.usedTimes===0&&v(C),Object.keys(K).length===0&&p.delete(H)}i.remove(C)}function v(C){const E=i.get(C);n.deleteTexture(E.__webglTexture);const H=C.source,K=p.get(H);delete K[E.__cacheKey],a.memory.textures--}function M(C){const E=i.get(C);if(C.depthTexture&&(C.depthTexture.dispose(),i.remove(C.depthTexture)),C.isWebGLCubeRenderTarget)for(let K=0;K<6;K++){if(Array.isArray(E.__webglFramebuffer[K]))for(let et=0;et<E.__webglFramebuffer[K].length;et++)n.deleteFramebuffer(E.__webglFramebuffer[K][et]);else n.deleteFramebuffer(E.__webglFramebuffer[K]);E.__webglDepthbuffer&&n.deleteRenderbuffer(E.__webglDepthbuffer[K])}else{if(Array.isArray(E.__webglFramebuffer))for(let K=0;K<E.__webglFramebuffer.length;K++)n.deleteFramebuffer(E.__webglFramebuffer[K]);else n.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&n.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&n.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let K=0;K<E.__webglColorRenderbuffer.length;K++)E.__webglColorRenderbuffer[K]&&n.deleteRenderbuffer(E.__webglColorRenderbuffer[K]);E.__webglDepthRenderbuffer&&n.deleteRenderbuffer(E.__webglDepthRenderbuffer)}const H=C.textures;for(let K=0,et=H.length;K<et;K++){const Y=i.get(H[K]);Y.__webglTexture&&(n.deleteTexture(Y.__webglTexture),a.memory.textures--),i.remove(H[K])}i.remove(C)}let P=0;function D(){P=0}function F(){const C=P;return C>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+C+" texture units while this GPU supports only "+s.maxTextures),P+=1,C}function U(C){const E=[];return E.push(C.wrapS),E.push(C.wrapT),E.push(C.wrapR||0),E.push(C.magFilter),E.push(C.minFilter),E.push(C.anisotropy),E.push(C.internalFormat),E.push(C.format),E.push(C.type),E.push(C.generateMipmaps),E.push(C.premultiplyAlpha),E.push(C.flipY),E.push(C.unpackAlignment),E.push(C.colorSpace),E.join()}function L(C,E){const H=i.get(C);if(C.isVideoTexture&&pt(C),C.isRenderTargetTexture===!1&&C.isExternalTexture!==!0&&C.version>0&&H.__version!==C.version){const K=C.image;if(K===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(K.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{V(H,C,E);return}}else C.isExternalTexture&&(H.__webglTexture=C.sourceTexture?C.sourceTexture:null);e.bindTexture(n.TEXTURE_2D,H.__webglTexture,n.TEXTURE0+E)}function N(C,E){const H=i.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&H.__version!==C.version){V(H,C,E);return}e.bindTexture(n.TEXTURE_2D_ARRAY,H.__webglTexture,n.TEXTURE0+E)}function k(C,E){const H=i.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&H.__version!==C.version){V(H,C,E);return}e.bindTexture(n.TEXTURE_3D,H.__webglTexture,n.TEXTURE0+E)}function O(C,E){const H=i.get(C);if(C.version>0&&H.__version!==C.version){X(H,C,E);return}e.bindTexture(n.TEXTURE_CUBE_MAP,H.__webglTexture,n.TEXTURE0+E)}const J={[Wa]:n.REPEAT,[Mi]:n.CLAMP_TO_EDGE,[Xa]:n.MIRRORED_REPEAT},q={[Sn]:n.NEAREST,[cu]:n.NEAREST_MIPMAP_NEAREST,[Ys]:n.NEAREST_MIPMAP_LINEAR,[vn]:n.LINEAR,[Kr]:n.LINEAR_MIPMAP_NEAREST,[Qn]:n.LINEAR_MIPMAP_LINEAR},ct={[pu]:n.NEVER,[Mu]:n.ALWAYS,[mu]:n.LESS,[Gc]:n.LEQUAL,[gu]:n.EQUAL,[vu]:n.GEQUAL,[_u]:n.GREATER,[xu]:n.NOTEQUAL};function vt(C,E){if(E.type===Bn&&t.has("OES_texture_float_linear")===!1&&(E.magFilter===vn||E.magFilter===Kr||E.magFilter===Ys||E.magFilter===Qn||E.minFilter===vn||E.minFilter===Kr||E.minFilter===Ys||E.minFilter===Qn)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(C,n.TEXTURE_WRAP_S,J[E.wrapS]),n.texParameteri(C,n.TEXTURE_WRAP_T,J[E.wrapT]),(C===n.TEXTURE_3D||C===n.TEXTURE_2D_ARRAY)&&n.texParameteri(C,n.TEXTURE_WRAP_R,J[E.wrapR]),n.texParameteri(C,n.TEXTURE_MAG_FILTER,q[E.magFilter]),n.texParameteri(C,n.TEXTURE_MIN_FILTER,q[E.minFilter]),E.compareFunction&&(n.texParameteri(C,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(C,n.TEXTURE_COMPARE_FUNC,ct[E.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===Sn||E.minFilter!==Ys&&E.minFilter!==Qn||E.type===Bn&&t.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||i.get(E).__currentAnisotropy){const H=t.get("EXT_texture_filter_anisotropic");n.texParameterf(C,H.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,s.getMaxAnisotropy())),i.get(E).__currentAnisotropy=E.anisotropy}}}function Rt(C,E){let H=!1;C.__webglInit===void 0&&(C.__webglInit=!0,E.addEventListener("dispose",S));const K=E.source;let et=p.get(K);et===void 0&&(et={},p.set(K,et));const Y=U(E);if(Y!==C.__cacheKey){et[Y]===void 0&&(et[Y]={texture:n.createTexture(),usedTimes:0},a.memory.textures++,H=!0),et[Y].usedTimes++;const Mt=et[C.__cacheKey];Mt!==void 0&&(et[C.__cacheKey].usedTimes--,Mt.usedTimes===0&&v(E)),C.__cacheKey=Y,C.__webglTexture=et[Y].texture}return H}function Q(C,E,H){return Math.floor(Math.floor(C/H)/E)}function tt(C,E,H,K){const Y=C.updateRanges;if(Y.length===0)e.texSubImage2D(n.TEXTURE_2D,0,0,0,E.width,E.height,H,K,E.data);else{Y.sort((ot,xt)=>ot.start-xt.start);let Mt=0;for(let ot=1;ot<Y.length;ot++){const xt=Y[Mt],Bt=Y[ot],Dt=xt.start+xt.count,yt=Q(Bt.start,E.width,4),qt=Q(xt.start,E.width,4);Bt.start<=Dt+1&&yt===qt&&Q(Bt.start+Bt.count-1,E.width,4)===yt?xt.count=Math.max(xt.count,Bt.start+Bt.count-xt.start):(++Mt,Y[Mt]=Bt)}Y.length=Mt+1;const lt=n.getParameter(n.UNPACK_ROW_LENGTH),Tt=n.getParameter(n.UNPACK_SKIP_PIXELS),At=n.getParameter(n.UNPACK_SKIP_ROWS);n.pixelStorei(n.UNPACK_ROW_LENGTH,E.width);for(let ot=0,xt=Y.length;ot<xt;ot++){const Bt=Y[ot],Dt=Math.floor(Bt.start/4),yt=Math.ceil(Bt.count/4),qt=Dt%E.width,z=Math.floor(Dt/E.width),ht=yt,gt=1;n.pixelStorei(n.UNPACK_SKIP_PIXELS,qt),n.pixelStorei(n.UNPACK_SKIP_ROWS,z),e.texSubImage2D(n.TEXTURE_2D,0,qt,z,ht,gt,H,K,E.data)}C.clearUpdateRanges(),n.pixelStorei(n.UNPACK_ROW_LENGTH,lt),n.pixelStorei(n.UNPACK_SKIP_PIXELS,Tt),n.pixelStorei(n.UNPACK_SKIP_ROWS,At)}}function V(C,E,H){let K=n.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(K=n.TEXTURE_2D_ARRAY),E.isData3DTexture&&(K=n.TEXTURE_3D);const et=Rt(C,E),Y=E.source;e.bindTexture(K,C.__webglTexture,n.TEXTURE0+H);const Mt=i.get(Y);if(Y.version!==Mt.__version||et===!0){e.activeTexture(n.TEXTURE0+H);const lt=oe.getPrimaries(oe.workingColorSpace),Tt=E.colorSpace===Zn?null:oe.getPrimaries(E.colorSpace),At=E.colorSpace===Zn||lt===Tt?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,E.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,E.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,At);let ot=y(E.image,!1,s.maxTextureSize);ot=Vt(E,ot);const xt=r.convert(E.format,E.colorSpace),Bt=r.convert(E.type);let Dt=x(E.internalFormat,xt,Bt,E.colorSpace,E.isVideoTexture);vt(K,E);let yt;const qt=E.mipmaps,z=E.isVideoTexture!==!0,ht=Mt.__version===void 0||et===!0,gt=Y.dataReady,wt=A(E,ot);if(E.isDepthTexture)Dt=g(E.format===Ls,E.type),ht&&(z?e.texStorage2D(n.TEXTURE_2D,1,Dt,ot.width,ot.height):e.texImage2D(n.TEXTURE_2D,0,Dt,ot.width,ot.height,0,xt,Bt,null));else if(E.isDataTexture)if(qt.length>0){z&&ht&&e.texStorage2D(n.TEXTURE_2D,wt,Dt,qt[0].width,qt[0].height);for(let ut=0,st=qt.length;ut<st;ut++)yt=qt[ut],z?gt&&e.texSubImage2D(n.TEXTURE_2D,ut,0,0,yt.width,yt.height,xt,Bt,yt.data):e.texImage2D(n.TEXTURE_2D,ut,Dt,yt.width,yt.height,0,xt,Bt,yt.data);E.generateMipmaps=!1}else z?(ht&&e.texStorage2D(n.TEXTURE_2D,wt,Dt,ot.width,ot.height),gt&&tt(E,ot,xt,Bt)):e.texImage2D(n.TEXTURE_2D,0,Dt,ot.width,ot.height,0,xt,Bt,ot.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){z&&ht&&e.texStorage3D(n.TEXTURE_2D_ARRAY,wt,Dt,qt[0].width,qt[0].height,ot.depth);for(let ut=0,st=qt.length;ut<st;ut++)if(yt=qt[ut],E.format!==Mn)if(xt!==null)if(z){if(gt)if(E.layerUpdates.size>0){const It=kl(yt.width,yt.height,E.format,E.type);for(const $t of E.layerUpdates){const me=yt.data.subarray($t*It/yt.data.BYTES_PER_ELEMENT,($t+1)*It/yt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,ut,0,0,$t,yt.width,yt.height,1,xt,me)}E.clearLayerUpdates()}else e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,ut,0,0,0,yt.width,yt.height,ot.depth,xt,yt.data)}else e.compressedTexImage3D(n.TEXTURE_2D_ARRAY,ut,Dt,yt.width,yt.height,ot.depth,0,yt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else z?gt&&e.texSubImage3D(n.TEXTURE_2D_ARRAY,ut,0,0,0,yt.width,yt.height,ot.depth,xt,Bt,yt.data):e.texImage3D(n.TEXTURE_2D_ARRAY,ut,Dt,yt.width,yt.height,ot.depth,0,xt,Bt,yt.data)}else{z&&ht&&e.texStorage2D(n.TEXTURE_2D,wt,Dt,qt[0].width,qt[0].height);for(let ut=0,st=qt.length;ut<st;ut++)yt=qt[ut],E.format!==Mn?xt!==null?z?gt&&e.compressedTexSubImage2D(n.TEXTURE_2D,ut,0,0,yt.width,yt.height,xt,yt.data):e.compressedTexImage2D(n.TEXTURE_2D,ut,Dt,yt.width,yt.height,0,yt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):z?gt&&e.texSubImage2D(n.TEXTURE_2D,ut,0,0,yt.width,yt.height,xt,Bt,yt.data):e.texImage2D(n.TEXTURE_2D,ut,Dt,yt.width,yt.height,0,xt,Bt,yt.data)}else if(E.isDataArrayTexture)if(z){if(ht&&e.texStorage3D(n.TEXTURE_2D_ARRAY,wt,Dt,ot.width,ot.height,ot.depth),gt)if(E.layerUpdates.size>0){const ut=kl(ot.width,ot.height,E.format,E.type);for(const st of E.layerUpdates){const It=ot.data.subarray(st*ut/ot.data.BYTES_PER_ELEMENT,(st+1)*ut/ot.data.BYTES_PER_ELEMENT);e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,st,ot.width,ot.height,1,xt,Bt,It)}E.clearLayerUpdates()}else e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,ot.width,ot.height,ot.depth,xt,Bt,ot.data)}else e.texImage3D(n.TEXTURE_2D_ARRAY,0,Dt,ot.width,ot.height,ot.depth,0,xt,Bt,ot.data);else if(E.isData3DTexture)z?(ht&&e.texStorage3D(n.TEXTURE_3D,wt,Dt,ot.width,ot.height,ot.depth),gt&&e.texSubImage3D(n.TEXTURE_3D,0,0,0,0,ot.width,ot.height,ot.depth,xt,Bt,ot.data)):e.texImage3D(n.TEXTURE_3D,0,Dt,ot.width,ot.height,ot.depth,0,xt,Bt,ot.data);else if(E.isFramebufferTexture){if(ht)if(z)e.texStorage2D(n.TEXTURE_2D,wt,Dt,ot.width,ot.height);else{let ut=ot.width,st=ot.height;for(let It=0;It<wt;It++)e.texImage2D(n.TEXTURE_2D,It,Dt,ut,st,0,xt,Bt,null),ut>>=1,st>>=1}}else if(qt.length>0){if(z&&ht){const ut=Yt(qt[0]);e.texStorage2D(n.TEXTURE_2D,wt,Dt,ut.width,ut.height)}for(let ut=0,st=qt.length;ut<st;ut++)yt=qt[ut],z?gt&&e.texSubImage2D(n.TEXTURE_2D,ut,0,0,xt,Bt,yt):e.texImage2D(n.TEXTURE_2D,ut,Dt,xt,Bt,yt);E.generateMipmaps=!1}else if(z){if(ht){const ut=Yt(ot);e.texStorage2D(n.TEXTURE_2D,wt,Dt,ut.width,ut.height)}gt&&e.texSubImage2D(n.TEXTURE_2D,0,0,0,xt,Bt,ot)}else e.texImage2D(n.TEXTURE_2D,0,Dt,xt,Bt,ot);c(E)&&u(K),Mt.__version=Y.version,E.onUpdate&&E.onUpdate(E)}C.__version=E.version}function X(C,E,H){if(E.image.length!==6)return;const K=Rt(C,E),et=E.source;e.bindTexture(n.TEXTURE_CUBE_MAP,C.__webglTexture,n.TEXTURE0+H);const Y=i.get(et);if(et.version!==Y.__version||K===!0){e.activeTexture(n.TEXTURE0+H);const Mt=oe.getPrimaries(oe.workingColorSpace),lt=E.colorSpace===Zn?null:oe.getPrimaries(E.colorSpace),Tt=E.colorSpace===Zn||Mt===lt?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,E.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,E.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Tt);const At=E.isCompressedTexture||E.image[0].isCompressedTexture,ot=E.image[0]&&E.image[0].isDataTexture,xt=[];for(let st=0;st<6;st++)!At&&!ot?xt[st]=y(E.image[st],!0,s.maxCubemapSize):xt[st]=ot?E.image[st].image:E.image[st],xt[st]=Vt(E,xt[st]);const Bt=xt[0],Dt=r.convert(E.format,E.colorSpace),yt=r.convert(E.type),qt=x(E.internalFormat,Dt,yt,E.colorSpace),z=E.isVideoTexture!==!0,ht=Y.__version===void 0||K===!0,gt=et.dataReady;let wt=A(E,Bt);vt(n.TEXTURE_CUBE_MAP,E);let ut;if(At){z&&ht&&e.texStorage2D(n.TEXTURE_CUBE_MAP,wt,qt,Bt.width,Bt.height);for(let st=0;st<6;st++){ut=xt[st].mipmaps;for(let It=0;It<ut.length;It++){const $t=ut[It];E.format!==Mn?Dt!==null?z?gt&&e.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+st,It,0,0,$t.width,$t.height,Dt,$t.data):e.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+st,It,qt,$t.width,$t.height,0,$t.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):z?gt&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+st,It,0,0,$t.width,$t.height,Dt,yt,$t.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+st,It,qt,$t.width,$t.height,0,Dt,yt,$t.data)}}}else{if(ut=E.mipmaps,z&&ht){ut.length>0&&wt++;const st=Yt(xt[0]);e.texStorage2D(n.TEXTURE_CUBE_MAP,wt,qt,st.width,st.height)}for(let st=0;st<6;st++)if(ot){z?gt&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+st,0,0,0,xt[st].width,xt[st].height,Dt,yt,xt[st].data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+st,0,qt,xt[st].width,xt[st].height,0,Dt,yt,xt[st].data);for(let It=0;It<ut.length;It++){const me=ut[It].image[st].image;z?gt&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+st,It+1,0,0,me.width,me.height,Dt,yt,me.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+st,It+1,qt,me.width,me.height,0,Dt,yt,me.data)}}else{z?gt&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+st,0,0,0,Dt,yt,xt[st]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+st,0,qt,Dt,yt,xt[st]);for(let It=0;It<ut.length;It++){const $t=ut[It];z?gt&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+st,It+1,0,0,Dt,yt,$t.image[st]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+st,It+1,qt,Dt,yt,$t.image[st])}}}c(E)&&u(n.TEXTURE_CUBE_MAP),Y.__version=et.version,E.onUpdate&&E.onUpdate(E)}C.__version=E.version}function it(C,E,H,K,et,Y){const Mt=r.convert(H.format,H.colorSpace),lt=r.convert(H.type),Tt=x(H.internalFormat,Mt,lt,H.colorSpace),At=i.get(E),ot=i.get(H);if(ot.__renderTarget=E,!At.__hasExternalTextures){const xt=Math.max(1,E.width>>Y),Bt=Math.max(1,E.height>>Y);et===n.TEXTURE_3D||et===n.TEXTURE_2D_ARRAY?e.texImage3D(et,Y,Tt,xt,Bt,E.depth,0,Mt,lt,null):e.texImage2D(et,Y,Tt,xt,Bt,0,Mt,lt,null)}e.bindFramebuffer(n.FRAMEBUFFER,C),nt(E)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,K,et,ot.__webglTexture,0,Wt(E)):(et===n.TEXTURE_2D||et>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&et<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,K,et,ot.__webglTexture,Y),e.bindFramebuffer(n.FRAMEBUFFER,null)}function _t(C,E,H){if(n.bindRenderbuffer(n.RENDERBUFFER,C),E.depthBuffer){const K=E.depthTexture,et=K&&K.isDepthTexture?K.type:null,Y=g(E.stencilBuffer,et),Mt=E.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,lt=Wt(E);nt(E)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,lt,Y,E.width,E.height):H?n.renderbufferStorageMultisample(n.RENDERBUFFER,lt,Y,E.width,E.height):n.renderbufferStorage(n.RENDERBUFFER,Y,E.width,E.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,Mt,n.RENDERBUFFER,C)}else{const K=E.textures;for(let et=0;et<K.length;et++){const Y=K[et],Mt=r.convert(Y.format,Y.colorSpace),lt=r.convert(Y.type),Tt=x(Y.internalFormat,Mt,lt,Y.colorSpace),At=Wt(E);H&&nt(E)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,At,Tt,E.width,E.height):nt(E)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,At,Tt,E.width,E.height):n.renderbufferStorage(n.RENDERBUFFER,Tt,E.width,E.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function mt(C,E){if(E&&E.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(n.FRAMEBUFFER,C),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const K=i.get(E.depthTexture);K.__renderTarget=E,(!K.__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),L(E.depthTexture,0);const et=K.__webglTexture,Y=Wt(E);if(E.depthTexture.format===Ds)nt(E)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,et,0,Y):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,et,0);else if(E.depthTexture.format===Ls)nt(E)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,et,0,Y):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,et,0);else throw new Error("Unknown depthTexture format")}function Pt(C){const E=i.get(C),H=C.isWebGLCubeRenderTarget===!0;if(E.__boundDepthTexture!==C.depthTexture){const K=C.depthTexture;if(E.__depthDisposeCallback&&E.__depthDisposeCallback(),K){const et=()=>{delete E.__boundDepthTexture,delete E.__depthDisposeCallback,K.removeEventListener("dispose",et)};K.addEventListener("dispose",et),E.__depthDisposeCallback=et}E.__boundDepthTexture=K}if(C.depthTexture&&!E.__autoAllocateDepthBuffer){if(H)throw new Error("target.depthTexture not supported in Cube render targets");const K=C.texture.mipmaps;K&&K.length>0?mt(E.__webglFramebuffer[0],C):mt(E.__webglFramebuffer,C)}else if(H){E.__webglDepthbuffer=[];for(let K=0;K<6;K++)if(e.bindFramebuffer(n.FRAMEBUFFER,E.__webglFramebuffer[K]),E.__webglDepthbuffer[K]===void 0)E.__webglDepthbuffer[K]=n.createRenderbuffer(),_t(E.__webglDepthbuffer[K],C,!1);else{const et=C.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Y=E.__webglDepthbuffer[K];n.bindRenderbuffer(n.RENDERBUFFER,Y),n.framebufferRenderbuffer(n.FRAMEBUFFER,et,n.RENDERBUFFER,Y)}}else{const K=C.texture.mipmaps;if(K&&K.length>0?e.bindFramebuffer(n.FRAMEBUFFER,E.__webglFramebuffer[0]):e.bindFramebuffer(n.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer===void 0)E.__webglDepthbuffer=n.createRenderbuffer(),_t(E.__webglDepthbuffer,C,!1);else{const et=C.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Y=E.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,Y),n.framebufferRenderbuffer(n.FRAMEBUFFER,et,n.RENDERBUFFER,Y)}}e.bindFramebuffer(n.FRAMEBUFFER,null)}function Jt(C,E,H){const K=i.get(C);E!==void 0&&it(K.__webglFramebuffer,C,C.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),H!==void 0&&Pt(C)}function I(C){const E=C.texture,H=i.get(C),K=i.get(E);C.addEventListener("dispose",T);const et=C.textures,Y=C.isWebGLCubeRenderTarget===!0,Mt=et.length>1;if(Mt||(K.__webglTexture===void 0&&(K.__webglTexture=n.createTexture()),K.__version=E.version,a.memory.textures++),Y){H.__webglFramebuffer=[];for(let lt=0;lt<6;lt++)if(E.mipmaps&&E.mipmaps.length>0){H.__webglFramebuffer[lt]=[];for(let Tt=0;Tt<E.mipmaps.length;Tt++)H.__webglFramebuffer[lt][Tt]=n.createFramebuffer()}else H.__webglFramebuffer[lt]=n.createFramebuffer()}else{if(E.mipmaps&&E.mipmaps.length>0){H.__webglFramebuffer=[];for(let lt=0;lt<E.mipmaps.length;lt++)H.__webglFramebuffer[lt]=n.createFramebuffer()}else H.__webglFramebuffer=n.createFramebuffer();if(Mt)for(let lt=0,Tt=et.length;lt<Tt;lt++){const At=i.get(et[lt]);At.__webglTexture===void 0&&(At.__webglTexture=n.createTexture(),a.memory.textures++)}if(C.samples>0&&nt(C)===!1){H.__webglMultisampledFramebuffer=n.createFramebuffer(),H.__webglColorRenderbuffer=[],e.bindFramebuffer(n.FRAMEBUFFER,H.__webglMultisampledFramebuffer);for(let lt=0;lt<et.length;lt++){const Tt=et[lt];H.__webglColorRenderbuffer[lt]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,H.__webglColorRenderbuffer[lt]);const At=r.convert(Tt.format,Tt.colorSpace),ot=r.convert(Tt.type),xt=x(Tt.internalFormat,At,ot,Tt.colorSpace,C.isXRRenderTarget===!0),Bt=Wt(C);n.renderbufferStorageMultisample(n.RENDERBUFFER,Bt,xt,C.width,C.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+lt,n.RENDERBUFFER,H.__webglColorRenderbuffer[lt])}n.bindRenderbuffer(n.RENDERBUFFER,null),C.depthBuffer&&(H.__webglDepthRenderbuffer=n.createRenderbuffer(),_t(H.__webglDepthRenderbuffer,C,!0)),e.bindFramebuffer(n.FRAMEBUFFER,null)}}if(Y){e.bindTexture(n.TEXTURE_CUBE_MAP,K.__webglTexture),vt(n.TEXTURE_CUBE_MAP,E);for(let lt=0;lt<6;lt++)if(E.mipmaps&&E.mipmaps.length>0)for(let Tt=0;Tt<E.mipmaps.length;Tt++)it(H.__webglFramebuffer[lt][Tt],C,E,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+lt,Tt);else it(H.__webglFramebuffer[lt],C,E,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+lt,0);c(E)&&u(n.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Mt){for(let lt=0,Tt=et.length;lt<Tt;lt++){const At=et[lt],ot=i.get(At);let xt=n.TEXTURE_2D;(C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(xt=C.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),e.bindTexture(xt,ot.__webglTexture),vt(xt,At),it(H.__webglFramebuffer,C,At,n.COLOR_ATTACHMENT0+lt,xt,0),c(At)&&u(xt)}e.unbindTexture()}else{let lt=n.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(lt=C.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),e.bindTexture(lt,K.__webglTexture),vt(lt,E),E.mipmaps&&E.mipmaps.length>0)for(let Tt=0;Tt<E.mipmaps.length;Tt++)it(H.__webglFramebuffer[Tt],C,E,n.COLOR_ATTACHMENT0,lt,Tt);else it(H.__webglFramebuffer,C,E,n.COLOR_ATTACHMENT0,lt,0);c(E)&&u(lt),e.unbindTexture()}C.depthBuffer&&Pt(C)}function Qt(C){const E=C.textures;for(let H=0,K=E.length;H<K;H++){const et=E[H];if(c(et)){const Y=b(C),Mt=i.get(et).__webglTexture;e.bindTexture(Y,Mt),u(Y),e.unbindTexture()}}}const Z=[],rt=[];function at(C){if(C.samples>0){if(nt(C)===!1){const E=C.textures,H=C.width,K=C.height;let et=n.COLOR_BUFFER_BIT;const Y=C.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Mt=i.get(C),lt=E.length>1;if(lt)for(let At=0;At<E.length;At++)e.bindFramebuffer(n.FRAMEBUFFER,Mt.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+At,n.RENDERBUFFER,null),e.bindFramebuffer(n.FRAMEBUFFER,Mt.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+At,n.TEXTURE_2D,null,0);e.bindFramebuffer(n.READ_FRAMEBUFFER,Mt.__webglMultisampledFramebuffer);const Tt=C.texture.mipmaps;Tt&&Tt.length>0?e.bindFramebuffer(n.DRAW_FRAMEBUFFER,Mt.__webglFramebuffer[0]):e.bindFramebuffer(n.DRAW_FRAMEBUFFER,Mt.__webglFramebuffer);for(let At=0;At<E.length;At++){if(C.resolveDepthBuffer&&(C.depthBuffer&&(et|=n.DEPTH_BUFFER_BIT),C.stencilBuffer&&C.resolveStencilBuffer&&(et|=n.STENCIL_BUFFER_BIT)),lt){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,Mt.__webglColorRenderbuffer[At]);const ot=i.get(E[At]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,ot,0)}n.blitFramebuffer(0,0,H,K,0,0,H,K,et,n.NEAREST),h===!0&&(Z.length=0,rt.length=0,Z.push(n.COLOR_ATTACHMENT0+At),C.depthBuffer&&C.resolveDepthBuffer===!1&&(Z.push(Y),rt.push(Y),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,rt)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,Z))}if(e.bindFramebuffer(n.READ_FRAMEBUFFER,null),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),lt)for(let At=0;At<E.length;At++){e.bindFramebuffer(n.FRAMEBUFFER,Mt.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+At,n.RENDERBUFFER,Mt.__webglColorRenderbuffer[At]);const ot=i.get(E[At]).__webglTexture;e.bindFramebuffer(n.FRAMEBUFFER,Mt.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+At,n.TEXTURE_2D,ot,0)}e.bindFramebuffer(n.DRAW_FRAMEBUFFER,Mt.__webglMultisampledFramebuffer)}else if(C.depthBuffer&&C.resolveDepthBuffer===!1&&h){const E=C.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[E])}}}function Wt(C){return Math.min(s.maxSamples,C.samples)}function nt(C){const E=i.get(C);return C.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function pt(C){const E=a.render.frame;d.get(C)!==E&&(d.set(C,E),C.update())}function Vt(C,E){const H=C.colorSpace,K=C.format,et=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||H!==cs&&H!==Zn&&(oe.getTransfer(H)===de?(K!==Mn||et!==Hn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",H)),E}function Yt(C){return typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement?(l.width=C.naturalWidth||C.width,l.height=C.naturalHeight||C.height):typeof VideoFrame<"u"&&C instanceof VideoFrame?(l.width=C.displayWidth,l.height=C.displayHeight):(l.width=C.width,l.height=C.height),l}this.allocateTextureUnit=F,this.resetTextureUnits=D,this.setTexture2D=L,this.setTexture2DArray=N,this.setTexture3D=k,this.setTextureCube=O,this.rebindTextures=Jt,this.setupRenderTarget=I,this.updateRenderTargetMipmap=Qt,this.updateMultisampleRenderTarget=at,this.setupDepthRenderbuffer=Pt,this.setupFrameBufferTexture=it,this.useMultisampledRTT=nt}function Zg(n,t){function e(i,s=Zn){let r;const a=oe.getTransfer(s);if(i===Hn)return n.UNSIGNED_BYTE;if(i===No)return n.UNSIGNED_SHORT_4_4_4_4;if(i===Oo)return n.UNSIGNED_SHORT_5_5_5_1;if(i===Nc)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===Oc)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===Uc)return n.BYTE;if(i===Fc)return n.SHORT;if(i===Cs)return n.UNSIGNED_SHORT;if(i===Fo)return n.INT;if(i===Ti)return n.UNSIGNED_INT;if(i===Bn)return n.FLOAT;if(i===Os)return n.HALF_FLOAT;if(i===Bc)return n.ALPHA;if(i===zc)return n.RGB;if(i===Mn)return n.RGBA;if(i===Ds)return n.DEPTH_COMPONENT;if(i===Ls)return n.DEPTH_STENCIL;if(i===kc)return n.RED;if(i===Bo)return n.RED_INTEGER;if(i===Hc)return n.RG;if(i===zo)return n.RG_INTEGER;if(i===ko)return n.RGBA_INTEGER;if(i===Tr||i===Ar||i===wr||i===Rr)if(a===de)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===Tr)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Ar)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===wr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Rr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===Tr)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Ar)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===wr)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Rr)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Ya||i===qa||i===$a||i===ja)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===Ya)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===qa)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===$a)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===ja)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Ka||i===Za||i===Ja)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(i===Ka||i===Za)return a===de?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===Ja)return a===de?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===Qa||i===to||i===eo||i===no||i===io||i===so||i===ro||i===ao||i===oo||i===lo||i===co||i===ho||i===uo||i===fo)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(i===Qa)return a===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===to)return a===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===eo)return a===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===no)return a===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===io)return a===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===so)return a===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===ro)return a===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===ao)return a===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===oo)return a===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===lo)return a===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===co)return a===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===ho)return a===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===uo)return a===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===fo)return a===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===po||i===mo||i===go)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(i===po)return a===de?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===mo)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===go)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===_o||i===xo||i===vo||i===Mo)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(i===_o)return r.COMPRESSED_RED_RGTC1_EXT;if(i===xo)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===vo)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Mo)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Ps?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:e}}const Jg=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Qg=`
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

}`;class t0{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){const i=new th(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=i}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,i=new ai({vertexShader:Jg,fragmentShader:Qg,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new cn(new Gr(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class e0 extends Ci{constructor(t,e){super();const i=this;let s=null,r=1,a=null,o="local-floor",h=1,l=null,d=null,f=null,p=null,m=null,_=null;const y=typeof XRWebGLBinding<"u",c=new t0,u={},b=e.getContextAttributes();let x=null,g=null;const A=[],S=[],T=new Ht;let R=null;const v=new on;v.viewport=new Se;const M=new on;M.viewport=new Se;const P=[v,M],D=new vd;let F=null,U=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(V){let X=A[V];return X===void 0&&(X=new _a,A[V]=X),X.getTargetRaySpace()},this.getControllerGrip=function(V){let X=A[V];return X===void 0&&(X=new _a,A[V]=X),X.getGripSpace()},this.getHand=function(V){let X=A[V];return X===void 0&&(X=new _a,A[V]=X),X.getHandSpace()};function L(V){const X=S.indexOf(V.inputSource);if(X===-1)return;const it=A[X];it!==void 0&&(it.update(V.inputSource,V.frame,l||a),it.dispatchEvent({type:V.type,data:V.inputSource}))}function N(){s.removeEventListener("select",L),s.removeEventListener("selectstart",L),s.removeEventListener("selectend",L),s.removeEventListener("squeeze",L),s.removeEventListener("squeezestart",L),s.removeEventListener("squeezeend",L),s.removeEventListener("end",N),s.removeEventListener("inputsourceschange",k);for(let V=0;V<A.length;V++){const X=S[V];X!==null&&(S[V]=null,A[V].disconnect(X))}F=null,U=null,c.reset();for(const V in u)delete u[V];t.setRenderTarget(x),m=null,p=null,f=null,s=null,g=null,tt.stop(),i.isPresenting=!1,t.setPixelRatio(R),t.setSize(T.width,T.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(V){r=V,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(V){o=V,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function(V){l=V},this.getBaseLayer=function(){return p!==null?p:m},this.getBinding=function(){return f===null&&y&&(f=new XRWebGLBinding(s,e)),f},this.getFrame=function(){return _},this.getSession=function(){return s},this.setSession=async function(V){if(s=V,s!==null){if(x=t.getRenderTarget(),s.addEventListener("select",L),s.addEventListener("selectstart",L),s.addEventListener("selectend",L),s.addEventListener("squeeze",L),s.addEventListener("squeezestart",L),s.addEventListener("squeezeend",L),s.addEventListener("end",N),s.addEventListener("inputsourceschange",k),b.xrCompatible!==!0&&await e.makeXRCompatible(),R=t.getPixelRatio(),t.getSize(T),y&&"createProjectionLayer"in XRWebGLBinding.prototype){let it=null,_t=null,mt=null;b.depth&&(mt=b.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,it=b.stencil?Ls:Ds,_t=b.stencil?Ps:Ti);const Pt={colorFormat:e.RGBA8,depthFormat:mt,scaleFactor:r};f=this.getBinding(),p=f.createProjectionLayer(Pt),s.updateRenderState({layers:[p]}),t.setPixelRatio(1),t.setSize(p.textureWidth,p.textureHeight,!1),g=new Ai(p.textureWidth,p.textureHeight,{format:Mn,type:Hn,depthTexture:new Qc(p.textureWidth,p.textureHeight,_t,void 0,void 0,void 0,void 0,void 0,void 0,it),stencilBuffer:b.stencil,colorSpace:t.outputColorSpace,samples:b.antialias?4:0,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1})}else{const it={antialias:b.antialias,alpha:!0,depth:b.depth,stencil:b.stencil,framebufferScaleFactor:r};m=new XRWebGLLayer(s,e,it),s.updateRenderState({baseLayer:m}),t.setPixelRatio(1),t.setSize(m.framebufferWidth,m.framebufferHeight,!1),g=new Ai(m.framebufferWidth,m.framebufferHeight,{format:Mn,type:Hn,colorSpace:t.outputColorSpace,stencilBuffer:b.stencil,resolveDepthBuffer:m.ignoreDepthValues===!1,resolveStencilBuffer:m.ignoreDepthValues===!1})}g.isXRRenderTarget=!0,this.setFoveation(h),l=null,a=await s.requestReferenceSpace(o),tt.setContext(s),tt.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return c.getDepthTexture()};function k(V){for(let X=0;X<V.removed.length;X++){const it=V.removed[X],_t=S.indexOf(it);_t>=0&&(S[_t]=null,A[_t].disconnect(it))}for(let X=0;X<V.added.length;X++){const it=V.added[X];let _t=S.indexOf(it);if(_t===-1){for(let Pt=0;Pt<A.length;Pt++)if(Pt>=S.length){S.push(it),_t=Pt;break}else if(S[Pt]===null){S[Pt]=it,_t=Pt;break}if(_t===-1)break}const mt=A[_t];mt&&mt.connect(it)}}const O=new B,J=new B;function q(V,X,it){O.setFromMatrixPosition(X.matrixWorld),J.setFromMatrixPosition(it.matrixWorld);const _t=O.distanceTo(J),mt=X.projectionMatrix.elements,Pt=it.projectionMatrix.elements,Jt=mt[14]/(mt[10]-1),I=mt[14]/(mt[10]+1),Qt=(mt[9]+1)/mt[5],Z=(mt[9]-1)/mt[5],rt=(mt[8]-1)/mt[0],at=(Pt[8]+1)/Pt[0],Wt=Jt*rt,nt=Jt*at,pt=_t/(-rt+at),Vt=pt*-rt;if(X.matrixWorld.decompose(V.position,V.quaternion,V.scale),V.translateX(Vt),V.translateZ(pt),V.matrixWorld.compose(V.position,V.quaternion,V.scale),V.matrixWorldInverse.copy(V.matrixWorld).invert(),mt[10]===-1)V.projectionMatrix.copy(X.projectionMatrix),V.projectionMatrixInverse.copy(X.projectionMatrixInverse);else{const Yt=Jt+pt,C=I+pt,E=Wt-Vt,H=nt+(_t-Vt),K=Qt*I/C*Yt,et=Z*I/C*Yt;V.projectionMatrix.makePerspective(E,H,K,et,Yt,C),V.projectionMatrixInverse.copy(V.projectionMatrix).invert()}}function ct(V,X){X===null?V.matrixWorld.copy(V.matrix):V.matrixWorld.multiplyMatrices(X.matrixWorld,V.matrix),V.matrixWorldInverse.copy(V.matrixWorld).invert()}this.updateCamera=function(V){if(s===null)return;let X=V.near,it=V.far;c.texture!==null&&(c.depthNear>0&&(X=c.depthNear),c.depthFar>0&&(it=c.depthFar)),D.near=M.near=v.near=X,D.far=M.far=v.far=it,(F!==D.near||U!==D.far)&&(s.updateRenderState({depthNear:D.near,depthFar:D.far}),F=D.near,U=D.far),D.layers.mask=V.layers.mask|6,v.layers.mask=D.layers.mask&3,M.layers.mask=D.layers.mask&5;const _t=V.parent,mt=D.cameras;ct(D,_t);for(let Pt=0;Pt<mt.length;Pt++)ct(mt[Pt],_t);mt.length===2?q(D,v,M):D.projectionMatrix.copy(v.projectionMatrix),vt(V,D,_t)};function vt(V,X,it){it===null?V.matrix.copy(X.matrixWorld):(V.matrix.copy(it.matrixWorld),V.matrix.invert(),V.matrix.multiply(X.matrixWorld)),V.matrix.decompose(V.position,V.quaternion,V.scale),V.updateMatrixWorld(!0),V.projectionMatrix.copy(X.projectionMatrix),V.projectionMatrixInverse.copy(X.projectionMatrixInverse),V.isPerspectiveCamera&&(V.fov=Is*2*Math.atan(1/V.projectionMatrix.elements[5]),V.zoom=1)}this.getCamera=function(){return D},this.getFoveation=function(){if(!(p===null&&m===null))return h},this.setFoveation=function(V){h=V,p!==null&&(p.fixedFoveation=V),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=V)},this.hasDepthSensing=function(){return c.texture!==null},this.getDepthSensingMesh=function(){return c.getMesh(D)},this.getCameraTexture=function(V){return u[V]};let Rt=null;function Q(V,X){if(d=X.getViewerPose(l||a),_=X,d!==null){const it=d.views;m!==null&&(t.setRenderTargetFramebuffer(g,m.framebuffer),t.setRenderTarget(g));let _t=!1;it.length!==D.cameras.length&&(D.cameras.length=0,_t=!0);for(let I=0;I<it.length;I++){const Qt=it[I];let Z=null;if(m!==null)Z=m.getViewport(Qt);else{const at=f.getViewSubImage(p,Qt);Z=at.viewport,I===0&&(t.setRenderTargetTextures(g,at.colorTexture,at.depthStencilTexture),t.setRenderTarget(g))}let rt=P[I];rt===void 0&&(rt=new on,rt.layers.enable(I),rt.viewport=new Se,P[I]=rt),rt.matrix.fromArray(Qt.transform.matrix),rt.matrix.decompose(rt.position,rt.quaternion,rt.scale),rt.projectionMatrix.fromArray(Qt.projectionMatrix),rt.projectionMatrixInverse.copy(rt.projectionMatrix).invert(),rt.viewport.set(Z.x,Z.y,Z.width,Z.height),I===0&&(D.matrix.copy(rt.matrix),D.matrix.decompose(D.position,D.quaternion,D.scale)),_t===!0&&D.cameras.push(rt)}const mt=s.enabledFeatures;if(mt&&mt.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&y){f=i.getBinding();const I=f.getDepthInformation(it[0]);I&&I.isValid&&I.texture&&c.init(I,s.renderState)}if(mt&&mt.includes("camera-access")&&y){t.state.unbindTexture(),f=i.getBinding();for(let I=0;I<it.length;I++){const Qt=it[I].camera;if(Qt){let Z=u[Qt];Z||(Z=new th,u[Qt]=Z);const rt=f.getCameraImage(Qt);Z.sourceTexture=rt}}}}for(let it=0;it<A.length;it++){const _t=S[it],mt=A[it];_t!==null&&mt!==void 0&&mt.update(_t,X,l||a)}Rt&&Rt(V,X),X.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:X}),_=null}const tt=new eh;tt.setAnimationLoop(Q),this.setAnimationLoop=function(V){Rt=V},this.dispose=function(){}}}const pi=new Gn,n0=new Me;function i0(n,t){function e(c,u){c.matrixAutoUpdate===!0&&c.updateMatrix(),u.value.copy(c.matrix)}function i(c,u){u.color.getRGB(c.fogColor.value,$c(n)),u.isFog?(c.fogNear.value=u.near,c.fogFar.value=u.far):u.isFogExp2&&(c.fogDensity.value=u.density)}function s(c,u,b,x,g){u.isMeshBasicMaterial||u.isMeshLambertMaterial?r(c,u):u.isMeshToonMaterial?(r(c,u),f(c,u)):u.isMeshPhongMaterial?(r(c,u),d(c,u)):u.isMeshStandardMaterial?(r(c,u),p(c,u),u.isMeshPhysicalMaterial&&m(c,u,g)):u.isMeshMatcapMaterial?(r(c,u),_(c,u)):u.isMeshDepthMaterial?r(c,u):u.isMeshDistanceMaterial?(r(c,u),y(c,u)):u.isMeshNormalMaterial?r(c,u):u.isLineBasicMaterial?(a(c,u),u.isLineDashedMaterial&&o(c,u)):u.isPointsMaterial?h(c,u,b,x):u.isSpriteMaterial?l(c,u):u.isShadowMaterial?(c.color.value.copy(u.color),c.opacity.value=u.opacity):u.isShaderMaterial&&(u.uniformsNeedUpdate=!1)}function r(c,u){c.opacity.value=u.opacity,u.color&&c.diffuse.value.copy(u.color),u.emissive&&c.emissive.value.copy(u.emissive).multiplyScalar(u.emissiveIntensity),u.map&&(c.map.value=u.map,e(u.map,c.mapTransform)),u.alphaMap&&(c.alphaMap.value=u.alphaMap,e(u.alphaMap,c.alphaMapTransform)),u.bumpMap&&(c.bumpMap.value=u.bumpMap,e(u.bumpMap,c.bumpMapTransform),c.bumpScale.value=u.bumpScale,u.side===qe&&(c.bumpScale.value*=-1)),u.normalMap&&(c.normalMap.value=u.normalMap,e(u.normalMap,c.normalMapTransform),c.normalScale.value.copy(u.normalScale),u.side===qe&&c.normalScale.value.negate()),u.displacementMap&&(c.displacementMap.value=u.displacementMap,e(u.displacementMap,c.displacementMapTransform),c.displacementScale.value=u.displacementScale,c.displacementBias.value=u.displacementBias),u.emissiveMap&&(c.emissiveMap.value=u.emissiveMap,e(u.emissiveMap,c.emissiveMapTransform)),u.specularMap&&(c.specularMap.value=u.specularMap,e(u.specularMap,c.specularMapTransform)),u.alphaTest>0&&(c.alphaTest.value=u.alphaTest);const b=t.get(u),x=b.envMap,g=b.envMapRotation;x&&(c.envMap.value=x,pi.copy(g),pi.x*=-1,pi.y*=-1,pi.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(pi.y*=-1,pi.z*=-1),c.envMapRotation.value.setFromMatrix4(n0.makeRotationFromEuler(pi)),c.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,c.reflectivity.value=u.reflectivity,c.ior.value=u.ior,c.refractionRatio.value=u.refractionRatio),u.lightMap&&(c.lightMap.value=u.lightMap,c.lightMapIntensity.value=u.lightMapIntensity,e(u.lightMap,c.lightMapTransform)),u.aoMap&&(c.aoMap.value=u.aoMap,c.aoMapIntensity.value=u.aoMapIntensity,e(u.aoMap,c.aoMapTransform))}function a(c,u){c.diffuse.value.copy(u.color),c.opacity.value=u.opacity,u.map&&(c.map.value=u.map,e(u.map,c.mapTransform))}function o(c,u){c.dashSize.value=u.dashSize,c.totalSize.value=u.dashSize+u.gapSize,c.scale.value=u.scale}function h(c,u,b,x){c.diffuse.value.copy(u.color),c.opacity.value=u.opacity,c.size.value=u.size*b,c.scale.value=x*.5,u.map&&(c.map.value=u.map,e(u.map,c.uvTransform)),u.alphaMap&&(c.alphaMap.value=u.alphaMap,e(u.alphaMap,c.alphaMapTransform)),u.alphaTest>0&&(c.alphaTest.value=u.alphaTest)}function l(c,u){c.diffuse.value.copy(u.color),c.opacity.value=u.opacity,c.rotation.value=u.rotation,u.map&&(c.map.value=u.map,e(u.map,c.mapTransform)),u.alphaMap&&(c.alphaMap.value=u.alphaMap,e(u.alphaMap,c.alphaMapTransform)),u.alphaTest>0&&(c.alphaTest.value=u.alphaTest)}function d(c,u){c.specular.value.copy(u.specular),c.shininess.value=Math.max(u.shininess,1e-4)}function f(c,u){u.gradientMap&&(c.gradientMap.value=u.gradientMap)}function p(c,u){c.metalness.value=u.metalness,u.metalnessMap&&(c.metalnessMap.value=u.metalnessMap,e(u.metalnessMap,c.metalnessMapTransform)),c.roughness.value=u.roughness,u.roughnessMap&&(c.roughnessMap.value=u.roughnessMap,e(u.roughnessMap,c.roughnessMapTransform)),u.envMap&&(c.envMapIntensity.value=u.envMapIntensity)}function m(c,u,b){c.ior.value=u.ior,u.sheen>0&&(c.sheenColor.value.copy(u.sheenColor).multiplyScalar(u.sheen),c.sheenRoughness.value=u.sheenRoughness,u.sheenColorMap&&(c.sheenColorMap.value=u.sheenColorMap,e(u.sheenColorMap,c.sheenColorMapTransform)),u.sheenRoughnessMap&&(c.sheenRoughnessMap.value=u.sheenRoughnessMap,e(u.sheenRoughnessMap,c.sheenRoughnessMapTransform))),u.clearcoat>0&&(c.clearcoat.value=u.clearcoat,c.clearcoatRoughness.value=u.clearcoatRoughness,u.clearcoatMap&&(c.clearcoatMap.value=u.clearcoatMap,e(u.clearcoatMap,c.clearcoatMapTransform)),u.clearcoatRoughnessMap&&(c.clearcoatRoughnessMap.value=u.clearcoatRoughnessMap,e(u.clearcoatRoughnessMap,c.clearcoatRoughnessMapTransform)),u.clearcoatNormalMap&&(c.clearcoatNormalMap.value=u.clearcoatNormalMap,e(u.clearcoatNormalMap,c.clearcoatNormalMapTransform),c.clearcoatNormalScale.value.copy(u.clearcoatNormalScale),u.side===qe&&c.clearcoatNormalScale.value.negate())),u.dispersion>0&&(c.dispersion.value=u.dispersion),u.iridescence>0&&(c.iridescence.value=u.iridescence,c.iridescenceIOR.value=u.iridescenceIOR,c.iridescenceThicknessMinimum.value=u.iridescenceThicknessRange[0],c.iridescenceThicknessMaximum.value=u.iridescenceThicknessRange[1],u.iridescenceMap&&(c.iridescenceMap.value=u.iridescenceMap,e(u.iridescenceMap,c.iridescenceMapTransform)),u.iridescenceThicknessMap&&(c.iridescenceThicknessMap.value=u.iridescenceThicknessMap,e(u.iridescenceThicknessMap,c.iridescenceThicknessMapTransform))),u.transmission>0&&(c.transmission.value=u.transmission,c.transmissionSamplerMap.value=b.texture,c.transmissionSamplerSize.value.set(b.width,b.height),u.transmissionMap&&(c.transmissionMap.value=u.transmissionMap,e(u.transmissionMap,c.transmissionMapTransform)),c.thickness.value=u.thickness,u.thicknessMap&&(c.thicknessMap.value=u.thicknessMap,e(u.thicknessMap,c.thicknessMapTransform)),c.attenuationDistance.value=u.attenuationDistance,c.attenuationColor.value.copy(u.attenuationColor)),u.anisotropy>0&&(c.anisotropyVector.value.set(u.anisotropy*Math.cos(u.anisotropyRotation),u.anisotropy*Math.sin(u.anisotropyRotation)),u.anisotropyMap&&(c.anisotropyMap.value=u.anisotropyMap,e(u.anisotropyMap,c.anisotropyMapTransform))),c.specularIntensity.value=u.specularIntensity,c.specularColor.value.copy(u.specularColor),u.specularColorMap&&(c.specularColorMap.value=u.specularColorMap,e(u.specularColorMap,c.specularColorMapTransform)),u.specularIntensityMap&&(c.specularIntensityMap.value=u.specularIntensityMap,e(u.specularIntensityMap,c.specularIntensityMapTransform))}function _(c,u){u.matcap&&(c.matcap.value=u.matcap)}function y(c,u){const b=t.get(u).light;c.referencePosition.value.setFromMatrixPosition(b.matrixWorld),c.nearDistance.value=b.shadow.camera.near,c.farDistance.value=b.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function s0(n,t,e,i){let s={},r={},a=[];const o=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function h(b,x){const g=x.program;i.uniformBlockBinding(b,g)}function l(b,x){let g=s[b.id];g===void 0&&(_(b),g=d(b),s[b.id]=g,b.addEventListener("dispose",c));const A=x.program;i.updateUBOMapping(b,A);const S=t.render.frame;r[b.id]!==S&&(p(b),r[b.id]=S)}function d(b){const x=f();b.__bindingPointIndex=x;const g=n.createBuffer(),A=b.__size,S=b.usage;return n.bindBuffer(n.UNIFORM_BUFFER,g),n.bufferData(n.UNIFORM_BUFFER,A,S),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,x,g),g}function f(){for(let b=0;b<o;b++)if(a.indexOf(b)===-1)return a.push(b),b;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function p(b){const x=s[b.id],g=b.uniforms,A=b.__cache;n.bindBuffer(n.UNIFORM_BUFFER,x);for(let S=0,T=g.length;S<T;S++){const R=Array.isArray(g[S])?g[S]:[g[S]];for(let v=0,M=R.length;v<M;v++){const P=R[v];if(m(P,S,v,A)===!0){const D=P.__offset,F=Array.isArray(P.value)?P.value:[P.value];let U=0;for(let L=0;L<F.length;L++){const N=F[L],k=y(N);typeof N=="number"||typeof N=="boolean"?(P.__data[0]=N,n.bufferSubData(n.UNIFORM_BUFFER,D+U,P.__data)):N.isMatrix3?(P.__data[0]=N.elements[0],P.__data[1]=N.elements[1],P.__data[2]=N.elements[2],P.__data[3]=0,P.__data[4]=N.elements[3],P.__data[5]=N.elements[4],P.__data[6]=N.elements[5],P.__data[7]=0,P.__data[8]=N.elements[6],P.__data[9]=N.elements[7],P.__data[10]=N.elements[8],P.__data[11]=0):(N.toArray(P.__data,U),U+=k.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,D,P.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function m(b,x,g,A){const S=b.value,T=x+"_"+g;if(A[T]===void 0)return typeof S=="number"||typeof S=="boolean"?A[T]=S:A[T]=S.clone(),!0;{const R=A[T];if(typeof S=="number"||typeof S=="boolean"){if(R!==S)return A[T]=S,!0}else if(R.equals(S)===!1)return R.copy(S),!0}return!1}function _(b){const x=b.uniforms;let g=0;const A=16;for(let T=0,R=x.length;T<R;T++){const v=Array.isArray(x[T])?x[T]:[x[T]];for(let M=0,P=v.length;M<P;M++){const D=v[M],F=Array.isArray(D.value)?D.value:[D.value];for(let U=0,L=F.length;U<L;U++){const N=F[U],k=y(N),O=g%A,J=O%k.boundary,q=O+J;g+=J,q!==0&&A-q<k.storage&&(g+=A-q),D.__data=new Float32Array(k.storage/Float32Array.BYTES_PER_ELEMENT),D.__offset=g,g+=k.storage}}}const S=g%A;return S>0&&(g+=A-S),b.__size=g,b.__cache={},this}function y(b){const x={boundary:0,storage:0};return typeof b=="number"||typeof b=="boolean"?(x.boundary=4,x.storage=4):b.isVector2?(x.boundary=8,x.storage=8):b.isVector3||b.isColor?(x.boundary=16,x.storage=12):b.isVector4?(x.boundary=16,x.storage=16):b.isMatrix3?(x.boundary=48,x.storage=48):b.isMatrix4?(x.boundary=64,x.storage=64):b.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",b),x}function c(b){const x=b.target;x.removeEventListener("dispose",c);const g=a.indexOf(x.__bindingPointIndex);a.splice(g,1),n.deleteBuffer(s[x.id]),delete s[x.id],delete r[x.id]}function u(){for(const b in s)n.deleteBuffer(s[b]);a=[],s={},r={}}return{bind:h,update:l,dispose:u}}class r0{constructor(t={}){const{canvas:e=Ou(),context:i=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:h=!0,preserveDrawingBuffer:l=!1,powerPreference:d="default",failIfMajorPerformanceCaveat:f=!1,reversedDepthBuffer:p=!1}=t;this.isWebGLRenderer=!0;let m;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");m=i.getContextAttributes().alpha}else m=a;const _=new Uint32Array(4),y=new Int32Array(4);let c=null,u=null;const b=[],x=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=ni,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const g=this;let A=!1;this._outputColorSpace=Ie;let S=0,T=0,R=null,v=-1,M=null;const P=new Se,D=new Se;let F=null;const U=new zt(0);let L=0,N=e.width,k=e.height,O=1,J=null,q=null;const ct=new Se(0,0,N,k),vt=new Se(0,0,N,k);let Rt=!1;const Q=new Jc;let tt=!1,V=!1;const X=new Me,it=new B,_t=new Se,mt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Pt=!1;function Jt(){return R===null?O:1}let I=i;function Qt(w,G){return e.getContext(w,G)}try{const w={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:h,preserveDrawingBuffer:l,powerPreference:d,failIfMajorPerformanceCaveat:f};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Uo}`),e.addEventListener("webglcontextlost",gt,!1),e.addEventListener("webglcontextrestored",wt,!1),e.addEventListener("webglcontextcreationerror",ut,!1),I===null){const G="webgl2";if(I=Qt(G,w),I===null)throw Qt(G)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(w){throw console.error("THREE.WebGLRenderer: "+w.message),w}let Z,rt,at,Wt,nt,pt,Vt,Yt,C,E,H,K,et,Y,Mt,lt,Tt,At,ot,xt,Bt,Dt,yt,qt;function z(){Z=new mm(I),Z.init(),Dt=new Zg(I,Z),rt=new lm(I,Z,t,Dt),at=new jg(I,Z),rt.reversedDepthBuffer&&p&&at.buffers.depth.setReversed(!0),Wt=new xm(I),nt=new Ng,pt=new Kg(I,Z,at,nt,rt,Dt,Wt),Vt=new hm(g),Yt=new pm(g),C=new Ed(I),yt=new am(I,C),E=new gm(I,C,Wt,yt),H=new Mm(I,E,C,Wt),ot=new vm(I,rt,pt),lt=new cm(nt),K=new Fg(g,Vt,Yt,Z,rt,yt,lt),et=new i0(g,nt),Y=new Bg,Mt=new Wg(Z),At=new rm(g,Vt,Yt,at,H,m,h),Tt=new qg(g,H,rt),qt=new s0(I,Wt,rt,at),xt=new om(I,Z,Wt),Bt=new _m(I,Z,Wt),Wt.programs=K.programs,g.capabilities=rt,g.extensions=Z,g.properties=nt,g.renderLists=Y,g.shadowMap=Tt,g.state=at,g.info=Wt}z();const ht=new e0(g,I);this.xr=ht,this.getContext=function(){return I},this.getContextAttributes=function(){return I.getContextAttributes()},this.forceContextLoss=function(){const w=Z.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){const w=Z.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return O},this.setPixelRatio=function(w){w!==void 0&&(O=w,this.setSize(N,k,!1))},this.getSize=function(w){return w.set(N,k)},this.setSize=function(w,G,$=!0){if(ht.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}N=w,k=G,e.width=Math.floor(w*O),e.height=Math.floor(G*O),$===!0&&(e.style.width=w+"px",e.style.height=G+"px"),this.setViewport(0,0,w,G)},this.getDrawingBufferSize=function(w){return w.set(N*O,k*O).floor()},this.setDrawingBufferSize=function(w,G,$){N=w,k=G,O=$,e.width=Math.floor(w*$),e.height=Math.floor(G*$),this.setViewport(0,0,w,G)},this.getCurrentViewport=function(w){return w.copy(P)},this.getViewport=function(w){return w.copy(ct)},this.setViewport=function(w,G,$,j){w.isVector4?ct.set(w.x,w.y,w.z,w.w):ct.set(w,G,$,j),at.viewport(P.copy(ct).multiplyScalar(O).round())},this.getScissor=function(w){return w.copy(vt)},this.setScissor=function(w,G,$,j){w.isVector4?vt.set(w.x,w.y,w.z,w.w):vt.set(w,G,$,j),at.scissor(D.copy(vt).multiplyScalar(O).round())},this.getScissorTest=function(){return Rt},this.setScissorTest=function(w){at.setScissorTest(Rt=w)},this.setOpaqueSort=function(w){J=w},this.setTransparentSort=function(w){q=w},this.getClearColor=function(w){return w.copy(At.getClearColor())},this.setClearColor=function(){At.setClearColor(...arguments)},this.getClearAlpha=function(){return At.getClearAlpha()},this.setClearAlpha=function(){At.setClearAlpha(...arguments)},this.clear=function(w=!0,G=!0,$=!0){let j=0;if(w){let W=!1;if(R!==null){const dt=R.texture.format;W=dt===ko||dt===zo||dt===Bo}if(W){const dt=R.texture.type,bt=dt===Hn||dt===Ti||dt===Cs||dt===Ps||dt===No||dt===Oo,Lt=At.getClearColor(),Ct=At.getClearAlpha(),Gt=Lt.r,Xt=Lt.g,Nt=Lt.b;bt?(_[0]=Gt,_[1]=Xt,_[2]=Nt,_[3]=Ct,I.clearBufferuiv(I.COLOR,0,_)):(y[0]=Gt,y[1]=Xt,y[2]=Nt,y[3]=Ct,I.clearBufferiv(I.COLOR,0,y))}else j|=I.COLOR_BUFFER_BIT}G&&(j|=I.DEPTH_BUFFER_BIT),$&&(j|=I.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),I.clear(j)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",gt,!1),e.removeEventListener("webglcontextrestored",wt,!1),e.removeEventListener("webglcontextcreationerror",ut,!1),At.dispose(),Y.dispose(),Mt.dispose(),nt.dispose(),Vt.dispose(),Yt.dispose(),H.dispose(),yt.dispose(),qt.dispose(),K.dispose(),ht.dispose(),ht.removeEventListener("sessionstart",En),ht.removeEventListener("sessionend",Qo),oi.stop()};function gt(w){w.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),A=!0}function wt(){console.log("THREE.WebGLRenderer: Context Restored."),A=!1;const w=Wt.autoReset,G=Tt.enabled,$=Tt.autoUpdate,j=Tt.needsUpdate,W=Tt.type;z(),Wt.autoReset=w,Tt.enabled=G,Tt.autoUpdate=$,Tt.needsUpdate=j,Tt.type=W}function ut(w){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function st(w){const G=w.target;G.removeEventListener("dispose",st),It(G)}function It(w){$t(w),nt.remove(w)}function $t(w){const G=nt.get(w).programs;G!==void 0&&(G.forEach(function($){K.releaseProgram($)}),w.isShaderMaterial&&K.releaseShaderCache(w))}this.renderBufferDirect=function(w,G,$,j,W,dt){G===null&&(G=mt);const bt=W.isMesh&&W.matrixWorld.determinant()<0,Lt=Rh(w,G,$,j,W);at.setMaterial(j,bt);let Ct=$.index,Gt=1;if(j.wireframe===!0){if(Ct=E.getWireframeAttribute($),Ct===void 0)return;Gt=2}const Xt=$.drawRange,Nt=$.attributes.position;let ee=Xt.start*Gt,ue=(Xt.start+Xt.count)*Gt;dt!==null&&(ee=Math.max(ee,dt.start*Gt),ue=Math.min(ue,(dt.start+dt.count)*Gt)),Ct!==null?(ee=Math.max(ee,0),ue=Math.min(ue,Ct.count)):Nt!=null&&(ee=Math.max(ee,0),ue=Math.min(ue,Nt.count));const ye=ue-ee;if(ye<0||ye===1/0)return;yt.setup(W,j,Lt,$,Ct);let ge,pe=xt;if(Ct!==null&&(ge=C.get(Ct),pe=Bt,pe.setIndex(ge)),W.isMesh)j.wireframe===!0?(at.setLineWidth(j.wireframeLinewidth*Jt()),pe.setMode(I.LINES)):pe.setMode(I.TRIANGLES);else if(W.isLine){let kt=j.linewidth;kt===void 0&&(kt=1),at.setLineWidth(kt*Jt()),W.isLineSegments?pe.setMode(I.LINES):W.isLineLoop?pe.setMode(I.LINE_LOOP):pe.setMode(I.LINE_STRIP)}else W.isPoints?pe.setMode(I.POINTS):W.isSprite&&pe.setMode(I.TRIANGLES);if(W.isBatchedMesh)if(W._multiDrawInstances!==null)Us("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),pe.renderMultiDrawInstances(W._multiDrawStarts,W._multiDrawCounts,W._multiDrawCount,W._multiDrawInstances);else if(Z.get("WEBGL_multi_draw"))pe.renderMultiDraw(W._multiDrawStarts,W._multiDrawCounts,W._multiDrawCount);else{const kt=W._multiDrawStarts,_e=W._multiDrawCounts,re=W._multiDrawCount,$e=Ct?C.get(Ct).bytesPerElement:1,Di=nt.get(j).currentProgram.getUniforms();for(let je=0;je<re;je++)Di.setValue(I,"_gl_DrawID",je),pe.render(kt[je]/$e,_e[je])}else if(W.isInstancedMesh)pe.renderInstances(ee,ye,W.count);else if($.isInstancedBufferGeometry){const kt=$._maxInstanceCount!==void 0?$._maxInstanceCount:1/0,_e=Math.min($.instanceCount,kt);pe.renderInstances(ee,ye,_e)}else pe.render(ee,ye)};function me(w,G,$){w.transparent===!0&&w.side===On&&w.forceSinglePass===!1?(w.side=qe,w.needsUpdate=!0,Xs(w,G,$),w.side=si,w.needsUpdate=!0,Xs(w,G,$),w.side=On):Xs(w,G,$)}this.compile=function(w,G,$=null){$===null&&($=w),u=Mt.get($),u.init(G),x.push(u),$.traverseVisible(function(W){W.isLight&&W.layers.test(G.layers)&&(u.pushLight(W),W.castShadow&&u.pushShadow(W))}),w!==$&&w.traverseVisible(function(W){W.isLight&&W.layers.test(G.layers)&&(u.pushLight(W),W.castShadow&&u.pushShadow(W))}),u.setupLights();const j=new Set;return w.traverse(function(W){if(!(W.isMesh||W.isPoints||W.isLine||W.isSprite))return;const dt=W.material;if(dt)if(Array.isArray(dt))for(let bt=0;bt<dt.length;bt++){const Lt=dt[bt];me(Lt,$,W),j.add(Lt)}else me(dt,$,W),j.add(dt)}),u=x.pop(),j},this.compileAsync=function(w,G,$=null){const j=this.compile(w,G,$);return new Promise(W=>{function dt(){if(j.forEach(function(bt){nt.get(bt).currentProgram.isReady()&&j.delete(bt)}),j.size===0){W(w);return}setTimeout(dt,10)}Z.get("KHR_parallel_shader_compile")!==null?dt():setTimeout(dt,10)})};let ce=null;function Pn(w){ce&&ce(w)}function En(){oi.stop()}function Qo(){oi.start()}const oi=new eh;oi.setAnimationLoop(Pn),typeof self<"u"&&oi.setContext(self),this.setAnimationLoop=function(w){ce=w,ht.setAnimationLoop(w),w===null?oi.stop():oi.start()},ht.addEventListener("sessionstart",En),ht.addEventListener("sessionend",Qo),this.render=function(w,G){if(G!==void 0&&G.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(A===!0)return;if(w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),G.parent===null&&G.matrixWorldAutoUpdate===!0&&G.updateMatrixWorld(),ht.enabled===!0&&ht.isPresenting===!0&&(ht.cameraAutoUpdate===!0&&ht.updateCamera(G),G=ht.getCamera()),w.isScene===!0&&w.onBeforeRender(g,w,G,R),u=Mt.get(w,x.length),u.init(G),x.push(u),X.multiplyMatrices(G.projectionMatrix,G.matrixWorldInverse),Q.setFromProjectionMatrix(X,wn,G.reversedDepth),V=this.localClippingEnabled,tt=lt.init(this.clippingPlanes,V),c=Y.get(w,b.length),c.init(),b.push(c),ht.enabled===!0&&ht.isPresenting===!0){const dt=g.xr.getDepthSensingMesh();dt!==null&&$r(dt,G,-1/0,g.sortObjects)}$r(w,G,0,g.sortObjects),c.finish(),g.sortObjects===!0&&c.sort(J,q),Pt=ht.enabled===!1||ht.isPresenting===!1||ht.hasDepthSensing()===!1,Pt&&At.addToRenderList(c,w),this.info.render.frame++,tt===!0&&lt.beginShadows();const $=u.state.shadowsArray;Tt.render($,w,G),tt===!0&&lt.endShadows(),this.info.autoReset===!0&&this.info.reset();const j=c.opaque,W=c.transmissive;if(u.setupLights(),G.isArrayCamera){const dt=G.cameras;if(W.length>0)for(let bt=0,Lt=dt.length;bt<Lt;bt++){const Ct=dt[bt];el(j,W,w,Ct)}Pt&&At.render(w);for(let bt=0,Lt=dt.length;bt<Lt;bt++){const Ct=dt[bt];tl(c,w,Ct,Ct.viewport)}}else W.length>0&&el(j,W,w,G),Pt&&At.render(w),tl(c,w,G);R!==null&&T===0&&(pt.updateMultisampleRenderTarget(R),pt.updateRenderTargetMipmap(R)),w.isScene===!0&&w.onAfterRender(g,w,G),yt.resetDefaultState(),v=-1,M=null,x.pop(),x.length>0?(u=x[x.length-1],tt===!0&&lt.setGlobalState(g.clippingPlanes,u.state.camera)):u=null,b.pop(),b.length>0?c=b[b.length-1]:c=null};function $r(w,G,$,j){if(w.visible===!1)return;if(w.layers.test(G.layers)){if(w.isGroup)$=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(G);else if(w.isLight)u.pushLight(w),w.castShadow&&u.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||Q.intersectsSprite(w)){j&&_t.setFromMatrixPosition(w.matrixWorld).applyMatrix4(X);const bt=H.update(w),Lt=w.material;Lt.visible&&c.push(w,bt,Lt,$,_t.z,null)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||Q.intersectsObject(w))){const bt=H.update(w),Lt=w.material;if(j&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),_t.copy(w.boundingSphere.center)):(bt.boundingSphere===null&&bt.computeBoundingSphere(),_t.copy(bt.boundingSphere.center)),_t.applyMatrix4(w.matrixWorld).applyMatrix4(X)),Array.isArray(Lt)){const Ct=bt.groups;for(let Gt=0,Xt=Ct.length;Gt<Xt;Gt++){const Nt=Ct[Gt],ee=Lt[Nt.materialIndex];ee&&ee.visible&&c.push(w,bt,ee,$,_t.z,Nt)}}else Lt.visible&&c.push(w,bt,Lt,$,_t.z,null)}}const dt=w.children;for(let bt=0,Lt=dt.length;bt<Lt;bt++)$r(dt[bt],G,$,j)}function tl(w,G,$,j){const W=w.opaque,dt=w.transmissive,bt=w.transparent;u.setupLightsView($),tt===!0&&lt.setGlobalState(g.clippingPlanes,$),j&&at.viewport(P.copy(j)),W.length>0&&Ws(W,G,$),dt.length>0&&Ws(dt,G,$),bt.length>0&&Ws(bt,G,$),at.buffers.depth.setTest(!0),at.buffers.depth.setMask(!0),at.buffers.color.setMask(!0),at.setPolygonOffset(!1)}function el(w,G,$,j){if(($.isScene===!0?$.overrideMaterial:null)!==null)return;u.state.transmissionRenderTarget[j.id]===void 0&&(u.state.transmissionRenderTarget[j.id]=new Ai(1,1,{generateMipmaps:!0,type:Z.has("EXT_color_buffer_half_float")||Z.has("EXT_color_buffer_float")?Os:Hn,minFilter:Qn,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:oe.workingColorSpace}));const dt=u.state.transmissionRenderTarget[j.id],bt=j.viewport||P;dt.setSize(bt.z*g.transmissionResolutionScale,bt.w*g.transmissionResolutionScale);const Lt=g.getRenderTarget(),Ct=g.getActiveCubeFace(),Gt=g.getActiveMipmapLevel();g.setRenderTarget(dt),g.getClearColor(U),L=g.getClearAlpha(),L<1&&g.setClearColor(16777215,.5),g.clear(),Pt&&At.render($);const Xt=g.toneMapping;g.toneMapping=ni;const Nt=j.viewport;if(j.viewport!==void 0&&(j.viewport=void 0),u.setupLightsView(j),tt===!0&&lt.setGlobalState(g.clippingPlanes,j),Ws(w,$,j),pt.updateMultisampleRenderTarget(dt),pt.updateRenderTargetMipmap(dt),Z.has("WEBGL_multisampled_render_to_texture")===!1){let ee=!1;for(let ue=0,ye=G.length;ue<ye;ue++){const ge=G[ue],pe=ge.object,kt=ge.geometry,_e=ge.material,re=ge.group;if(_e.side===On&&pe.layers.test(j.layers)){const $e=_e.side;_e.side=qe,_e.needsUpdate=!0,nl(pe,$,j,kt,_e,re),_e.side=$e,_e.needsUpdate=!0,ee=!0}}ee===!0&&(pt.updateMultisampleRenderTarget(dt),pt.updateRenderTargetMipmap(dt))}g.setRenderTarget(Lt,Ct,Gt),g.setClearColor(U,L),Nt!==void 0&&(j.viewport=Nt),g.toneMapping=Xt}function Ws(w,G,$){const j=G.isScene===!0?G.overrideMaterial:null;for(let W=0,dt=w.length;W<dt;W++){const bt=w[W],Lt=bt.object,Ct=bt.geometry,Gt=bt.group;let Xt=bt.material;Xt.allowOverride===!0&&j!==null&&(Xt=j),Lt.layers.test($.layers)&&nl(Lt,G,$,Ct,Xt,Gt)}}function nl(w,G,$,j,W,dt){w.onBeforeRender(g,G,$,j,W,dt),w.modelViewMatrix.multiplyMatrices($.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),W.onBeforeRender(g,G,$,j,w,dt),W.transparent===!0&&W.side===On&&W.forceSinglePass===!1?(W.side=qe,W.needsUpdate=!0,g.renderBufferDirect($,G,j,W,w,dt),W.side=si,W.needsUpdate=!0,g.renderBufferDirect($,G,j,W,w,dt),W.side=On):g.renderBufferDirect($,G,j,W,w,dt),w.onAfterRender(g,G,$,j,W,dt)}function Xs(w,G,$){G.isScene!==!0&&(G=mt);const j=nt.get(w),W=u.state.lights,dt=u.state.shadowsArray,bt=W.state.version,Lt=K.getParameters(w,W.state,dt,G,$),Ct=K.getProgramCacheKey(Lt);let Gt=j.programs;j.environment=w.isMeshStandardMaterial?G.environment:null,j.fog=G.fog,j.envMap=(w.isMeshStandardMaterial?Yt:Vt).get(w.envMap||j.environment),j.envMapRotation=j.environment!==null&&w.envMap===null?G.environmentRotation:w.envMapRotation,Gt===void 0&&(w.addEventListener("dispose",st),Gt=new Map,j.programs=Gt);let Xt=Gt.get(Ct);if(Xt!==void 0){if(j.currentProgram===Xt&&j.lightsStateVersion===bt)return sl(w,Lt),Xt}else Lt.uniforms=K.getUniforms(w),w.onBeforeCompile(Lt,g),Xt=K.acquireProgram(Lt,Ct),Gt.set(Ct,Xt),j.uniforms=Lt.uniforms;const Nt=j.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(Nt.clippingPlanes=lt.uniform),sl(w,Lt),j.needsLights=Ph(w),j.lightsStateVersion=bt,j.needsLights&&(Nt.ambientLightColor.value=W.state.ambient,Nt.lightProbe.value=W.state.probe,Nt.directionalLights.value=W.state.directional,Nt.directionalLightShadows.value=W.state.directionalShadow,Nt.spotLights.value=W.state.spot,Nt.spotLightShadows.value=W.state.spotShadow,Nt.rectAreaLights.value=W.state.rectArea,Nt.ltc_1.value=W.state.rectAreaLTC1,Nt.ltc_2.value=W.state.rectAreaLTC2,Nt.pointLights.value=W.state.point,Nt.pointLightShadows.value=W.state.pointShadow,Nt.hemisphereLights.value=W.state.hemi,Nt.directionalShadowMap.value=W.state.directionalShadowMap,Nt.directionalShadowMatrix.value=W.state.directionalShadowMatrix,Nt.spotShadowMap.value=W.state.spotShadowMap,Nt.spotLightMatrix.value=W.state.spotLightMatrix,Nt.spotLightMap.value=W.state.spotLightMap,Nt.pointShadowMap.value=W.state.pointShadowMap,Nt.pointShadowMatrix.value=W.state.pointShadowMatrix),j.currentProgram=Xt,j.uniformsList=null,Xt}function il(w){if(w.uniformsList===null){const G=w.currentProgram.getUniforms();w.uniformsList=Cr.seqWithValue(G.seq,w.uniforms)}return w.uniformsList}function sl(w,G){const $=nt.get(w);$.outputColorSpace=G.outputColorSpace,$.batching=G.batching,$.batchingColor=G.batchingColor,$.instancing=G.instancing,$.instancingColor=G.instancingColor,$.instancingMorph=G.instancingMorph,$.skinning=G.skinning,$.morphTargets=G.morphTargets,$.morphNormals=G.morphNormals,$.morphColors=G.morphColors,$.morphTargetsCount=G.morphTargetsCount,$.numClippingPlanes=G.numClippingPlanes,$.numIntersection=G.numClipIntersection,$.vertexAlphas=G.vertexAlphas,$.vertexTangents=G.vertexTangents,$.toneMapping=G.toneMapping}function Rh(w,G,$,j,W){G.isScene!==!0&&(G=mt),pt.resetTextureUnits();const dt=G.fog,bt=j.isMeshStandardMaterial?G.environment:null,Lt=R===null?g.outputColorSpace:R.isXRRenderTarget===!0?R.texture.colorSpace:cs,Ct=(j.isMeshStandardMaterial?Yt:Vt).get(j.envMap||bt),Gt=j.vertexColors===!0&&!!$.attributes.color&&$.attributes.color.itemSize===4,Xt=!!$.attributes.tangent&&(!!j.normalMap||j.anisotropy>0),Nt=!!$.morphAttributes.position,ee=!!$.morphAttributes.normal,ue=!!$.morphAttributes.color;let ye=ni;j.toneMapped&&(R===null||R.isXRRenderTarget===!0)&&(ye=g.toneMapping);const ge=$.morphAttributes.position||$.morphAttributes.normal||$.morphAttributes.color,pe=ge!==void 0?ge.length:0,kt=nt.get(j),_e=u.state.lights;if(tt===!0&&(V===!0||w!==M)){const Oe=w===M&&j.id===v;lt.setState(j,w,Oe)}let re=!1;j.version===kt.__version?(kt.needsLights&&kt.lightsStateVersion!==_e.state.version||kt.outputColorSpace!==Lt||W.isBatchedMesh&&kt.batching===!1||!W.isBatchedMesh&&kt.batching===!0||W.isBatchedMesh&&kt.batchingColor===!0&&W.colorTexture===null||W.isBatchedMesh&&kt.batchingColor===!1&&W.colorTexture!==null||W.isInstancedMesh&&kt.instancing===!1||!W.isInstancedMesh&&kt.instancing===!0||W.isSkinnedMesh&&kt.skinning===!1||!W.isSkinnedMesh&&kt.skinning===!0||W.isInstancedMesh&&kt.instancingColor===!0&&W.instanceColor===null||W.isInstancedMesh&&kt.instancingColor===!1&&W.instanceColor!==null||W.isInstancedMesh&&kt.instancingMorph===!0&&W.morphTexture===null||W.isInstancedMesh&&kt.instancingMorph===!1&&W.morphTexture!==null||kt.envMap!==Ct||j.fog===!0&&kt.fog!==dt||kt.numClippingPlanes!==void 0&&(kt.numClippingPlanes!==lt.numPlanes||kt.numIntersection!==lt.numIntersection)||kt.vertexAlphas!==Gt||kt.vertexTangents!==Xt||kt.morphTargets!==Nt||kt.morphNormals!==ee||kt.morphColors!==ue||kt.toneMapping!==ye||kt.morphTargetsCount!==pe)&&(re=!0):(re=!0,kt.__version=j.version);let $e=kt.currentProgram;re===!0&&($e=Xs(j,G,W));let Di=!1,je=!1,fs=!1;const xe=$e.getUniforms(),tn=kt.uniforms;if(at.useProgram($e.program)&&(Di=!0,je=!0,fs=!0),j.id!==v&&(v=j.id,je=!0),Di||M!==w){at.buffers.depth.getReversed()&&w.reversedDepth!==!0&&(w._reversedDepth=!0,w.updateProjectionMatrix()),xe.setValue(I,"projectionMatrix",w.projectionMatrix),xe.setValue(I,"viewMatrix",w.matrixWorldInverse);const We=xe.map.cameraPosition;We!==void 0&&We.setValue(I,it.setFromMatrixPosition(w.matrixWorld)),rt.logarithmicDepthBuffer&&xe.setValue(I,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(j.isMeshPhongMaterial||j.isMeshToonMaterial||j.isMeshLambertMaterial||j.isMeshBasicMaterial||j.isMeshStandardMaterial||j.isShaderMaterial)&&xe.setValue(I,"isOrthographic",w.isOrthographicCamera===!0),M!==w&&(M=w,je=!0,fs=!0)}if(W.isSkinnedMesh){xe.setOptional(I,W,"bindMatrix"),xe.setOptional(I,W,"bindMatrixInverse");const Oe=W.skeleton;Oe&&(Oe.boneTexture===null&&Oe.computeBoneTexture(),xe.setValue(I,"boneTexture",Oe.boneTexture,pt))}W.isBatchedMesh&&(xe.setOptional(I,W,"batchingTexture"),xe.setValue(I,"batchingTexture",W._matricesTexture,pt),xe.setOptional(I,W,"batchingIdTexture"),xe.setValue(I,"batchingIdTexture",W._indirectTexture,pt),xe.setOptional(I,W,"batchingColorTexture"),W._colorsTexture!==null&&xe.setValue(I,"batchingColorTexture",W._colorsTexture,pt));const en=$.morphAttributes;if((en.position!==void 0||en.normal!==void 0||en.color!==void 0)&&ot.update(W,$,$e),(je||kt.receiveShadow!==W.receiveShadow)&&(kt.receiveShadow=W.receiveShadow,xe.setValue(I,"receiveShadow",W.receiveShadow)),j.isMeshGouraudMaterial&&j.envMap!==null&&(tn.envMap.value=Ct,tn.flipEnvMap.value=Ct.isCubeTexture&&Ct.isRenderTargetTexture===!1?-1:1),j.isMeshStandardMaterial&&j.envMap===null&&G.environment!==null&&(tn.envMapIntensity.value=G.environmentIntensity),je&&(xe.setValue(I,"toneMappingExposure",g.toneMappingExposure),kt.needsLights&&Ch(tn,fs),dt&&j.fog===!0&&et.refreshFogUniforms(tn,dt),et.refreshMaterialUniforms(tn,j,O,k,u.state.transmissionRenderTarget[w.id]),Cr.upload(I,il(kt),tn,pt)),j.isShaderMaterial&&j.uniformsNeedUpdate===!0&&(Cr.upload(I,il(kt),tn,pt),j.uniformsNeedUpdate=!1),j.isSpriteMaterial&&xe.setValue(I,"center",W.center),xe.setValue(I,"modelViewMatrix",W.modelViewMatrix),xe.setValue(I,"normalMatrix",W.normalMatrix),xe.setValue(I,"modelMatrix",W.matrixWorld),j.isShaderMaterial||j.isRawShaderMaterial){const Oe=j.uniformsGroups;for(let We=0,jr=Oe.length;We<jr;We++){const li=Oe[We];qt.update(li,$e),qt.bind(li,$e)}}return $e}function Ch(w,G){w.ambientLightColor.needsUpdate=G,w.lightProbe.needsUpdate=G,w.directionalLights.needsUpdate=G,w.directionalLightShadows.needsUpdate=G,w.pointLights.needsUpdate=G,w.pointLightShadows.needsUpdate=G,w.spotLights.needsUpdate=G,w.spotLightShadows.needsUpdate=G,w.rectAreaLights.needsUpdate=G,w.hemisphereLights.needsUpdate=G}function Ph(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return S},this.getActiveMipmapLevel=function(){return T},this.getRenderTarget=function(){return R},this.setRenderTargetTextures=function(w,G,$){const j=nt.get(w);j.__autoAllocateDepthBuffer=w.resolveDepthBuffer===!1,j.__autoAllocateDepthBuffer===!1&&(j.__useRenderToTexture=!1),nt.get(w.texture).__webglTexture=G,nt.get(w.depthTexture).__webglTexture=j.__autoAllocateDepthBuffer?void 0:$,j.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(w,G){const $=nt.get(w);$.__webglFramebuffer=G,$.__useDefaultFramebuffer=G===void 0};const Dh=I.createFramebuffer();this.setRenderTarget=function(w,G=0,$=0){R=w,S=G,T=$;let j=!0,W=null,dt=!1,bt=!1;if(w){const Ct=nt.get(w);if(Ct.__useDefaultFramebuffer!==void 0)at.bindFramebuffer(I.FRAMEBUFFER,null),j=!1;else if(Ct.__webglFramebuffer===void 0)pt.setupRenderTarget(w);else if(Ct.__hasExternalTextures)pt.rebindTextures(w,nt.get(w.texture).__webglTexture,nt.get(w.depthTexture).__webglTexture);else if(w.depthBuffer){const Nt=w.depthTexture;if(Ct.__boundDepthTexture!==Nt){if(Nt!==null&&nt.has(Nt)&&(w.width!==Nt.image.width||w.height!==Nt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");pt.setupDepthRenderbuffer(w)}}const Gt=w.texture;(Gt.isData3DTexture||Gt.isDataArrayTexture||Gt.isCompressedArrayTexture)&&(bt=!0);const Xt=nt.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(Xt[G])?W=Xt[G][$]:W=Xt[G],dt=!0):w.samples>0&&pt.useMultisampledRTT(w)===!1?W=nt.get(w).__webglMultisampledFramebuffer:Array.isArray(Xt)?W=Xt[$]:W=Xt,P.copy(w.viewport),D.copy(w.scissor),F=w.scissorTest}else P.copy(ct).multiplyScalar(O).floor(),D.copy(vt).multiplyScalar(O).floor(),F=Rt;if($!==0&&(W=Dh),at.bindFramebuffer(I.FRAMEBUFFER,W)&&j&&at.drawBuffers(w,W),at.viewport(P),at.scissor(D),at.setScissorTest(F),dt){const Ct=nt.get(w.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_CUBE_MAP_POSITIVE_X+G,Ct.__webglTexture,$)}else if(bt){const Ct=G;for(let Gt=0;Gt<w.textures.length;Gt++){const Xt=nt.get(w.textures[Gt]);I.framebufferTextureLayer(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0+Gt,Xt.__webglTexture,$,Ct)}}else if(w!==null&&$!==0){const Ct=nt.get(w.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,Ct.__webglTexture,$)}v=-1},this.readRenderTargetPixels=function(w,G,$,j,W,dt,bt,Lt=0){if(!(w&&w.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ct=nt.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&bt!==void 0&&(Ct=Ct[bt]),Ct){at.bindFramebuffer(I.FRAMEBUFFER,Ct);try{const Gt=w.textures[Lt],Xt=Gt.format,Nt=Gt.type;if(!rt.textureFormatReadable(Xt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!rt.textureTypeReadable(Nt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}G>=0&&G<=w.width-j&&$>=0&&$<=w.height-W&&(w.textures.length>1&&I.readBuffer(I.COLOR_ATTACHMENT0+Lt),I.readPixels(G,$,j,W,Dt.convert(Xt),Dt.convert(Nt),dt))}finally{const Gt=R!==null?nt.get(R).__webglFramebuffer:null;at.bindFramebuffer(I.FRAMEBUFFER,Gt)}}},this.readRenderTargetPixelsAsync=async function(w,G,$,j,W,dt,bt,Lt=0){if(!(w&&w.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ct=nt.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&bt!==void 0&&(Ct=Ct[bt]),Ct)if(G>=0&&G<=w.width-j&&$>=0&&$<=w.height-W){at.bindFramebuffer(I.FRAMEBUFFER,Ct);const Gt=w.textures[Lt],Xt=Gt.format,Nt=Gt.type;if(!rt.textureFormatReadable(Xt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!rt.textureTypeReadable(Nt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const ee=I.createBuffer();I.bindBuffer(I.PIXEL_PACK_BUFFER,ee),I.bufferData(I.PIXEL_PACK_BUFFER,dt.byteLength,I.STREAM_READ),w.textures.length>1&&I.readBuffer(I.COLOR_ATTACHMENT0+Lt),I.readPixels(G,$,j,W,Dt.convert(Xt),Dt.convert(Nt),0);const ue=R!==null?nt.get(R).__webglFramebuffer:null;at.bindFramebuffer(I.FRAMEBUFFER,ue);const ye=I.fenceSync(I.SYNC_GPU_COMMANDS_COMPLETE,0);return I.flush(),await Bu(I,ye,4),I.bindBuffer(I.PIXEL_PACK_BUFFER,ee),I.getBufferSubData(I.PIXEL_PACK_BUFFER,0,dt),I.deleteBuffer(ee),I.deleteSync(ye),dt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(w,G=null,$=0){const j=Math.pow(2,-$),W=Math.floor(w.image.width*j),dt=Math.floor(w.image.height*j),bt=G!==null?G.x:0,Lt=G!==null?G.y:0;pt.setTexture2D(w,0),I.copyTexSubImage2D(I.TEXTURE_2D,$,0,0,bt,Lt,W,dt),at.unbindTexture()};const Lh=I.createFramebuffer(),Ih=I.createFramebuffer();this.copyTextureToTexture=function(w,G,$=null,j=null,W=0,dt=null){dt===null&&(W!==0?(Us("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),dt=W,W=0):dt=0);let bt,Lt,Ct,Gt,Xt,Nt,ee,ue,ye;const ge=w.isCompressedTexture?w.mipmaps[dt]:w.image;if($!==null)bt=$.max.x-$.min.x,Lt=$.max.y-$.min.y,Ct=$.isBox3?$.max.z-$.min.z:1,Gt=$.min.x,Xt=$.min.y,Nt=$.isBox3?$.min.z:0;else{const en=Math.pow(2,-W);bt=Math.floor(ge.width*en),Lt=Math.floor(ge.height*en),w.isDataArrayTexture?Ct=ge.depth:w.isData3DTexture?Ct=Math.floor(ge.depth*en):Ct=1,Gt=0,Xt=0,Nt=0}j!==null?(ee=j.x,ue=j.y,ye=j.z):(ee=0,ue=0,ye=0);const pe=Dt.convert(G.format),kt=Dt.convert(G.type);let _e;G.isData3DTexture?(pt.setTexture3D(G,0),_e=I.TEXTURE_3D):G.isDataArrayTexture||G.isCompressedArrayTexture?(pt.setTexture2DArray(G,0),_e=I.TEXTURE_2D_ARRAY):(pt.setTexture2D(G,0),_e=I.TEXTURE_2D),I.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,G.flipY),I.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,G.premultiplyAlpha),I.pixelStorei(I.UNPACK_ALIGNMENT,G.unpackAlignment);const re=I.getParameter(I.UNPACK_ROW_LENGTH),$e=I.getParameter(I.UNPACK_IMAGE_HEIGHT),Di=I.getParameter(I.UNPACK_SKIP_PIXELS),je=I.getParameter(I.UNPACK_SKIP_ROWS),fs=I.getParameter(I.UNPACK_SKIP_IMAGES);I.pixelStorei(I.UNPACK_ROW_LENGTH,ge.width),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,ge.height),I.pixelStorei(I.UNPACK_SKIP_PIXELS,Gt),I.pixelStorei(I.UNPACK_SKIP_ROWS,Xt),I.pixelStorei(I.UNPACK_SKIP_IMAGES,Nt);const xe=w.isDataArrayTexture||w.isData3DTexture,tn=G.isDataArrayTexture||G.isData3DTexture;if(w.isDepthTexture){const en=nt.get(w),Oe=nt.get(G),We=nt.get(en.__renderTarget),jr=nt.get(Oe.__renderTarget);at.bindFramebuffer(I.READ_FRAMEBUFFER,We.__webglFramebuffer),at.bindFramebuffer(I.DRAW_FRAMEBUFFER,jr.__webglFramebuffer);for(let li=0;li<Ct;li++)xe&&(I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,nt.get(w).__webglTexture,W,Nt+li),I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,nt.get(G).__webglTexture,dt,ye+li)),I.blitFramebuffer(Gt,Xt,bt,Lt,ee,ue,bt,Lt,I.DEPTH_BUFFER_BIT,I.NEAREST);at.bindFramebuffer(I.READ_FRAMEBUFFER,null),at.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else if(W!==0||w.isRenderTargetTexture||nt.has(w)){const en=nt.get(w),Oe=nt.get(G);at.bindFramebuffer(I.READ_FRAMEBUFFER,Lh),at.bindFramebuffer(I.DRAW_FRAMEBUFFER,Ih);for(let We=0;We<Ct;We++)xe?I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,en.__webglTexture,W,Nt+We):I.framebufferTexture2D(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,en.__webglTexture,W),tn?I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,Oe.__webglTexture,dt,ye+We):I.framebufferTexture2D(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,Oe.__webglTexture,dt),W!==0?I.blitFramebuffer(Gt,Xt,bt,Lt,ee,ue,bt,Lt,I.COLOR_BUFFER_BIT,I.NEAREST):tn?I.copyTexSubImage3D(_e,dt,ee,ue,ye+We,Gt,Xt,bt,Lt):I.copyTexSubImage2D(_e,dt,ee,ue,Gt,Xt,bt,Lt);at.bindFramebuffer(I.READ_FRAMEBUFFER,null),at.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else tn?w.isDataTexture||w.isData3DTexture?I.texSubImage3D(_e,dt,ee,ue,ye,bt,Lt,Ct,pe,kt,ge.data):G.isCompressedArrayTexture?I.compressedTexSubImage3D(_e,dt,ee,ue,ye,bt,Lt,Ct,pe,ge.data):I.texSubImage3D(_e,dt,ee,ue,ye,bt,Lt,Ct,pe,kt,ge):w.isDataTexture?I.texSubImage2D(I.TEXTURE_2D,dt,ee,ue,bt,Lt,pe,kt,ge.data):w.isCompressedTexture?I.compressedTexSubImage2D(I.TEXTURE_2D,dt,ee,ue,ge.width,ge.height,pe,ge.data):I.texSubImage2D(I.TEXTURE_2D,dt,ee,ue,bt,Lt,pe,kt,ge);I.pixelStorei(I.UNPACK_ROW_LENGTH,re),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,$e),I.pixelStorei(I.UNPACK_SKIP_PIXELS,Di),I.pixelStorei(I.UNPACK_SKIP_ROWS,je),I.pixelStorei(I.UNPACK_SKIP_IMAGES,fs),dt===0&&G.generateMipmaps&&I.generateMipmap(_e),at.unbindTexture()},this.initRenderTarget=function(w){nt.get(w).__webglFramebuffer===void 0&&pt.setupRenderTarget(w)},this.initTexture=function(w){w.isCubeTexture?pt.setTextureCube(w,0):w.isData3DTexture?pt.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?pt.setTexture2DArray(w,0):pt.setTexture2D(w,0),at.unbindTexture()},this.resetState=function(){S=0,T=0,R=null,at.reset(),yt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return wn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=oe._getDrawingBufferColorSpace(t),e.unpackColorSpace=oe._getUnpackColorSpace()}}const uc={type:"change"},Ko={type:"start"},ah={type:"end"},Mr=new ks,dc=new jn,a0=Math.cos(70*ft.DEG2RAD),we=new B,Xe=2*Math.PI,fe={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},wa=1e-6;class o0 extends yd{constructor(t,e=null){super(t,e),this.state=fe.NONE,this.target=new B,this.cursor=new B,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:ns.ROTATE,MIDDLE:ns.DOLLY,RIGHT:ns.PAN},this.touches={ONE:Qi.ROTATE,TWO:Qi.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new B,this._lastQuaternion=new ri,this._lastTargetPosition=new B,this._quat=new ri().setFromUnitVectors(t.up,new B(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new zl,this._sphericalDelta=new zl,this._scale=1,this._panOffset=new B,this._rotateStart=new Ht,this._rotateEnd=new Ht,this._rotateDelta=new Ht,this._panStart=new Ht,this._panEnd=new Ht,this._panDelta=new Ht,this._dollyStart=new Ht,this._dollyEnd=new Ht,this._dollyDelta=new Ht,this._dollyDirection=new B,this._mouse=new Ht,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=c0.bind(this),this._onPointerDown=l0.bind(this),this._onPointerUp=h0.bind(this),this._onContextMenu=_0.bind(this),this._onMouseWheel=f0.bind(this),this._onKeyDown=p0.bind(this),this._onTouchStart=m0.bind(this),this._onTouchMove=g0.bind(this),this._onMouseDown=u0.bind(this),this._onMouseMove=d0.bind(this),this._interceptControlDown=x0.bind(this),this._interceptControlUp=v0.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}connect(t){super.connect(t),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(t){t.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=t}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(uc),this.update(),this.state=fe.NONE}update(t=null){const e=this.object.position;we.copy(e).sub(this.target),we.applyQuaternion(this._quat),this._spherical.setFromVector3(we),this.autoRotate&&this.state===fe.NONE&&this._rotateLeft(this._getAutoRotationAngle(t)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let i=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(i)&&isFinite(s)&&(i<-Math.PI?i+=Xe:i>Math.PI&&(i-=Xe),s<-Math.PI?s+=Xe:s>Math.PI&&(s-=Xe),i<=s?this._spherical.theta=Math.max(i,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(i+s)/2?Math.max(i,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const a=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=a!=this._spherical.radius}if(we.setFromSpherical(this._spherical),we.applyQuaternion(this._quatInverse),e.copy(this.target).add(we),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let a=null;if(this.object.isPerspectiveCamera){const o=we.length();a=this._clampDistance(o*this._scale);const h=o-a;this.object.position.addScaledVector(this._dollyDirection,h),this.object.updateMatrixWorld(),r=!!h}else if(this.object.isOrthographicCamera){const o=new B(this._mouse.x,this._mouse.y,0);o.unproject(this.object);const h=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=h!==this.object.zoom;const l=new B(this._mouse.x,this._mouse.y,0);l.unproject(this.object),this.object.position.sub(l).add(o),this.object.updateMatrixWorld(),a=we.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;a!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(a).add(this.object.position):(Mr.origin.copy(this.object.position),Mr.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Mr.direction))<a0?this.object.lookAt(this.target):(dc.setFromNormalAndCoplanarPoint(this.object.up,this.target),Mr.intersectPlane(dc,this.target))))}else if(this.object.isOrthographicCamera){const a=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),a!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>wa||8*(1-this._lastQuaternion.dot(this.object.quaternion))>wa||this._lastTargetPosition.distanceToSquared(this.target)>wa?(this.dispatchEvent(uc),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(t){return t!==null?Xe/60*this.autoRotateSpeed*t:Xe/60/60*this.autoRotateSpeed}_getZoomScale(t){const e=Math.abs(t*.01);return Math.pow(.95,this.zoomSpeed*e)}_rotateLeft(t){this._sphericalDelta.theta-=t}_rotateUp(t){this._sphericalDelta.phi-=t}_panLeft(t,e){we.setFromMatrixColumn(e,0),we.multiplyScalar(-t),this._panOffset.add(we)}_panUp(t,e){this.screenSpacePanning===!0?we.setFromMatrixColumn(e,1):(we.setFromMatrixColumn(e,0),we.crossVectors(this.object.up,we)),we.multiplyScalar(t),this._panOffset.add(we)}_pan(t,e){const i=this.domElement;if(this.object.isPerspectiveCamera){const s=this.object.position;we.copy(s).sub(this.target);let r=we.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*t*r/i.clientHeight,this.object.matrix),this._panUp(2*e*r/i.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(t*(this.object.right-this.object.left)/this.object.zoom/i.clientWidth,this.object.matrix),this._panUp(e*(this.object.top-this.object.bottom)/this.object.zoom/i.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(t,e){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const i=this.domElement.getBoundingClientRect(),s=t-i.left,r=e-i.top,a=i.width,o=i.height;this._mouse.x=s/a*2-1,this._mouse.y=-(r/o)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(t){return Math.max(this.minDistance,Math.min(this.maxDistance,t))}_handleMouseDownRotate(t){this._rotateStart.set(t.clientX,t.clientY)}_handleMouseDownDolly(t){this._updateZoomParameters(t.clientX,t.clientX),this._dollyStart.set(t.clientX,t.clientY)}_handleMouseDownPan(t){this._panStart.set(t.clientX,t.clientY)}_handleMouseMoveRotate(t){this._rotateEnd.set(t.clientX,t.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const e=this.domElement;this._rotateLeft(Xe*this._rotateDelta.x/e.clientHeight),this._rotateUp(Xe*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(t){this._dollyEnd.set(t.clientX,t.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(t){this._panEnd.set(t.clientX,t.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(t){this._updateZoomParameters(t.clientX,t.clientY),t.deltaY<0?this._dollyIn(this._getZoomScale(t.deltaY)):t.deltaY>0&&this._dollyOut(this._getZoomScale(t.deltaY)),this.update()}_handleKeyDown(t){let e=!1;switch(t.code){case this.keys.UP:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(Xe*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),e=!0;break;case this.keys.BOTTOM:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(-Xe*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),e=!0;break;case this.keys.LEFT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(Xe*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),e=!0;break;case this.keys.RIGHT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(-Xe*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),e=!0;break}e&&(t.preventDefault(),this.update())}_handleTouchStartRotate(t){if(this._pointers.length===1)this._rotateStart.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),i=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._rotateStart.set(i,s)}}_handleTouchStartPan(t){if(this._pointers.length===1)this._panStart.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),i=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panStart.set(i,s)}}_handleTouchStartDolly(t){const e=this._getSecondPointerPosition(t),i=t.pageX-e.x,s=t.pageY-e.y,r=Math.sqrt(i*i+s*s);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enablePan&&this._handleTouchStartPan(t)}_handleTouchStartDollyRotate(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enableRotate&&this._handleTouchStartRotate(t)}_handleTouchMoveRotate(t){if(this._pointers.length==1)this._rotateEnd.set(t.pageX,t.pageY);else{const i=this._getSecondPointerPosition(t),s=.5*(t.pageX+i.x),r=.5*(t.pageY+i.y);this._rotateEnd.set(s,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const e=this.domElement;this._rotateLeft(Xe*this._rotateDelta.x/e.clientHeight),this._rotateUp(Xe*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(t){if(this._pointers.length===1)this._panEnd.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),i=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panEnd.set(i,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(t){const e=this._getSecondPointerPosition(t),i=t.pageX-e.x,s=t.pageY-e.y,r=Math.sqrt(i*i+s*s);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const a=(t.pageX+e.x)*.5,o=(t.pageY+e.y)*.5;this._updateZoomParameters(a,o)}_handleTouchMoveDollyPan(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enablePan&&this._handleTouchMovePan(t)}_handleTouchMoveDollyRotate(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enableRotate&&this._handleTouchMoveRotate(t)}_addPointer(t){this._pointers.push(t.pointerId)}_removePointer(t){delete this._pointerPositions[t.pointerId];for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId){this._pointers.splice(e,1);return}}_isTrackingPointer(t){for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId)return!0;return!1}_trackPointer(t){let e=this._pointerPositions[t.pointerId];e===void 0&&(e=new Ht,this._pointerPositions[t.pointerId]=e),e.set(t.pageX,t.pageY)}_getSecondPointerPosition(t){const e=t.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[e]}_customWheelEvent(t){const e=t.deltaMode,i={clientX:t.clientX,clientY:t.clientY,deltaY:t.deltaY};switch(e){case 1:i.deltaY*=16;break;case 2:i.deltaY*=100;break}return t.ctrlKey&&!this._controlActive&&(i.deltaY*=10),i}}function l0(n){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(n.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(n)&&(this._addPointer(n),n.pointerType==="touch"?this._onTouchStart(n):this._onMouseDown(n)))}function c0(n){this.enabled!==!1&&(n.pointerType==="touch"?this._onTouchMove(n):this._onMouseMove(n))}function h0(n){switch(this._removePointer(n),this._pointers.length){case 0:this.domElement.releasePointerCapture(n.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(ah),this.state=fe.NONE;break;case 1:const t=this._pointers[0],e=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:e.x,pageY:e.y});break}}function u0(n){let t;switch(n.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case ns.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(n),this.state=fe.DOLLY;break;case ns.ROTATE:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=fe.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=fe.ROTATE}break;case ns.PAN:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=fe.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=fe.PAN}break;default:this.state=fe.NONE}this.state!==fe.NONE&&this.dispatchEvent(Ko)}function d0(n){switch(this.state){case fe.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(n);break;case fe.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(n);break;case fe.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(n);break}}function f0(n){this.enabled===!1||this.enableZoom===!1||this.state!==fe.NONE||(n.preventDefault(),this.dispatchEvent(Ko),this._handleMouseWheel(this._customWheelEvent(n)),this.dispatchEvent(ah))}function p0(n){this.enabled!==!1&&this._handleKeyDown(n)}function m0(n){switch(this._trackPointer(n),this._pointers.length){case 1:switch(this.touches.ONE){case Qi.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(n),this.state=fe.TOUCH_ROTATE;break;case Qi.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(n),this.state=fe.TOUCH_PAN;break;default:this.state=fe.NONE}break;case 2:switch(this.touches.TWO){case Qi.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(n),this.state=fe.TOUCH_DOLLY_PAN;break;case Qi.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(n),this.state=fe.TOUCH_DOLLY_ROTATE;break;default:this.state=fe.NONE}break;default:this.state=fe.NONE}this.state!==fe.NONE&&this.dispatchEvent(Ko)}function g0(n){switch(this._trackPointer(n),this.state){case fe.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(n),this.update();break;case fe.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(n),this.update();break;case fe.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(n),this.update();break;case fe.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(n),this.update();break;default:this.state=fe.NONE}}function _0(n){this.enabled!==!1&&n.preventDefault()}function x0(n){n.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function v0(n){n.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}const fc=["一次偶然涨落，一组全新的自然法则。","这里的星光，以陌生的速度穿过真空。","引力写下结构，时间负责把它读完。","一个从未存在过，也不会再次出现的宇宙。","尘埃正在聚集，第一颗恒星即将点亮。"],pc=["赫利俄斯","弥涅耳瓦","伊奥","俄耳甫斯","忒弥斯","厄里倪厄斯","欧律狄刻","阿斯忒里亚"],To=["棒旋星系","絮状螺旋星系","环状星系","椭圆星系","不规则星系"],mc=["赛里安共同体","洛珂蜂群","弧光联盟","静默者","澄海文明","铸星者","织光议会","塔乌林协约","奈落合众体","远潮群落","镜海联邦","巡星庭","赤纬公社","无昼同盟","尘环智群"],gc=[14221151,16743275,6928639,15174911,16762460,6481615,16747975,10920191,15899989,7595116,6215935,16770683,12815615,16737894,9484543],_c=[{until:55,name:"炽热大爆炸",description:"整个可观测区域同时处于高温、高密度状态；这不是物质从某个中心炸开。"},{until:145,name:"等离子体时代",description:"宇宙膨胀并冷却，原初核合成后，光子仍被自由电子频繁散射。"},{until:245,name:"宇宙黑暗时代",description:"38 万年后宇宙变得透明，但第一代恒星尚未点亮。"},{until:340,name:"宇宙黎明",description:"约 1～2 亿年后，第一代恒星与星系开始形成并推动再电离。"},{until:650,name:"恒星时代",description:"恒星、星系与重元素持续演化；生命与文明属于未证实的模型层。"},{until:845,name:"简并时代 · 假说",description:"若质子衰变等标准长期假说成立，恒星残骸绕核运行，并在近遇中逐个逃离或落入黑洞。"},{until:950,name:"黑洞时代 · 假说",description:"若霍金辐射的标准推断适用，孤立黑洞在极漫长时间中逐个蒸发。"},{until:1001,name:"暗时代 · 渐近",description:"宇宙继续膨胀，辐射红移与稀释，可用能量梯度趋近于零，而非发生一次全局终结。"}];function M0(n){const t=n?.cosmicFate;if(!t||t.type==="heat-death")return _c;const e=_c.slice(0,5);return t.type==="big-rip"?[...e,{until:850,name:"幽灵能量时代 · 假说",description:"暗能量密度随膨胀增长，宇宙在有限时间内加速趋向失稳。"},{until:1001,name:"大撕裂 · 条件结局",description:"在 w < -1 持续成立的假设下，局部引力与微观束缚将被逐层克服。"}]:t.type==="big-crunch"?[...e,{until:850,name:"膨胀反转 · 假说",description:"动态暗能量的有效势能跨过零点，哈勃参数逐步降低至零。"},{until:1001,name:"大坍缩 · 条件结局",description:"尺度因子反向演化，物质与辐射密度在有限时间内快速上升。"}]:[...e,{until:875,name:"亚稳真空 · 假说",description:"真空仍位于寿命未知的局部能量最低点，未发生可见跃迁。"},{until:1001,name:"真空衰变 · 条件结局",description:"随机量子隧穿产生低能真空泡，泡壁以近光速改写局部基态。"}]}function se(n){const t=Math.max(n(),1e-7),e=n();return Math.sqrt(-2*Math.log(t))*Math.cos(2*Math.PI*e)}function St(n,t,e){return t+n()*(e-t)}const xc="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ",y0=4,Ra=16;function oh(n){let t=1779033703,e=3144134277,i=1013904242,s=2773480762;for(let r=0;r<n.length;r++){const a=n.charCodeAt(r);t=e^Math.imul(t^a,597399067),e=i^Math.imul(e^a,2869860233),i=s^Math.imul(i^a,951274213),s=t^Math.imul(s^a,2716044179)}return t=Math.imul(i^t>>>18,597399067),e=Math.imul(s^e>>>22,2869860233),i=Math.imul(t^i>>>17,951274213),s=Math.imul(e^s>>>19,2716044179),t^=e^i^s,e^=t,i^=t,s^=t,[t>>>0,e>>>0,i>>>0,s>>>0]}function Xr(n){const t=String(n).trim().toUpperCase();if(!/^(?:[A-Z0-9]{16}|[A-Z0-9]{4}(?:-[A-Z0-9]{4}){3})$/.test(t))throw new TypeError("Universe seed must contain exactly 16 letters or digits.");return t.replaceAll("-","").match(new RegExp(`.{${y0}}`,"g")).join("-")}function S0(){const n=globalThis.crypto;if(!n?.getRandomValues)throw new Error("Secure random number generation is unavailable.");let t="";do for(t="";t.length<Ra;){const e=n.getRandomValues(new Uint8Array(Ra));for(const i of e)if(!(i>=252)&&(t+=xc[i%xc.length],t.length===Ra))break}while(!/[A-Z]/.test(t)||!/[0-9]/.test(t));return Xr(t)}function E0(n){return oh(Xr(n))[0]}function hn(n,t=0){let[e,i,s,r]=oh(`${Xr(n)}:${t}`);return function(){const o=((e+i|0)+r|0)>>>0;return r=r+1|0,e=i^i>>>9,i=s+(s<<3)|0,s=s<<21|s>>>11,s=s+o|0,o/4294967296}}const Ao=138e8,b0=145e8,Ca=.012,T0={lambda:{label:"宇宙学常数",description:"暗能量密度保持不变，加速膨胀持续"},quintessence:{label:"演化标量场",description:"暗能量状态方程随尺度因子缓慢演化"},phantom:{label:"幽灵暗能量",description:"有效状态方程低于 -1，暗能量密度随膨胀增长"},recollapsing:{label:"反转势能",description:"标量场势能在远未来跨过零点，膨胀最终停止"}},A0={"heat-death":{label:"渐近热寂",shortLabel:"热寂",description:"膨胀持续，可用能量梯度逐渐消失"},"big-rip":{label:"大撕裂",shortLabel:"大撕裂",description:"加速膨胀最终克服星系、恒星系与局部束缚"},"big-crunch":{label:"大坍缩",shortLabel:"大坍缩",description:"膨胀反转后，尺度因子在有限时间内回落"},"vacuum-decay":{label:"真空衰变",shortLabel:"真空衰变",description:"低能真空泡成核，泡壁以近光速扩张"}};function w0(n,t,e){return t+e*(1-n)/(1+n)}function R0({model:n,w0:t,wa:e,expansionRate:i,darkEnergyDensity:s,turnScale:r}){const a=Math.max(.06,1-s);let o=1,h=1,l=Ao,d=1;const f=[{ageYears:l,scaleFactor:o,expansionRatio:1,w:t}];for(let p=1;p<=2400;p++){const m=w0(o,t,e);h*=Math.exp(-3*(1+m)*Ca),o*=Math.exp(Ca);const _=n==="recollapsing"?.22*s*Math.pow(o/r,2.35):0,y=a/Math.pow(o,3)+s*h-_;if(y<=0)return{history:f,turnaroundYears:l,finalRateSquared:y};const c=Math.sqrt((d+y)*.5);l+=b0/i*Ca/Math.max(c,1e-12),d=y,p%80===0&&f.push({ageYears:l,scaleFactor:o,expansionRatio:Math.sqrt(y),w:m})}return{history:f,asymptoticYears:l,finalRateSquared:d}}function C0(n){const t=n();return t<.34?{model:"lambda",w0:-1,wa:0,turnScale:1/0}:t<.62?{model:"quintessence",w0:St(n,-.96,-.76),wa:St(n,-.1,.1),turnScale:1/0}:t<.82?{model:"phantom",w0:St(n,-1.22,-1.035),wa:St(n,.015,.14),turnScale:1/0}:{model:"recollapsing",w0:St(n,-.98,-.78),wa:St(n,-.08,.08),turnScale:St(n,3.2,11)}}function P0(n,t){const e=hn(n,6029),i=C0(e),s=R0({...i,expansionRate:t.expansionRate,darkEnergyDensity:t.darkEnergyDensity});let r="heat-death",a=1/0;if(i.model==="phantom")r="big-rip",a=Math.max(Ao*1.05,s.asymptoticYears);else if(i.model==="recollapsing"){r="big-crunch";const y=Math.max(1e9,s.turnaroundYears-Ao);a=s.turnaroundYears+y*St(e,.78,1.08)}const o=e()<.16,h=o?St(e,10.55,92):1/0,l=10**Math.min(h,300),d=o&&l<a,f=d?"vacuum-decay":r,p=d?l:a,m=T0[i.model],_=A0[f];return{...i,modelLabel:m.label,modelDescription:m.description,expansionHistory:s.history,turnaroundYears:s.turnaroundYears||null,metastableVacuum:o,vacuumDecayExponent:h,type:f,label:_.label,shortLabel:_.shortLabel,description:_.description,outcomeYears:p,outcomeExponent:Number.isFinite(p)?Math.log10(p):1/0,onsetAt:f==="big-crunch"?790:f==="big-rip"?820:f==="vacuum-decay"?875:930}}function D0(n){return Number.isFinite(n.outcomeYears)?n.outcomeYears<1e12?`T+${(n.outcomeYears/1e8).toFixed(0)} 亿年`:`T+10^${n.outcomeExponent.toFixed(1)} 年`:"渐近 · 无有限终点"}function L0(n){return n.metastableVacuum?`亚稳态 · 假设寿命 10^${n.vacuumDecayExponent.toFixed(1)} 年`:"未设定可见衰变"}const I0=2100,Yr=(n,t,e)=>Math.max(t,Math.min(e,n)),vc=(n,t,e)=>{const i=Yr((n-t)/(e-t),0,1);return i*i*(3-2*i)};function lh(n,t){const e=Math.log10(Math.max(138e8,n)),i=Math.log10(138e8),s=t?.cosmicFate;if(s&&Number.isFinite(s.outcomeYears)){if(n>=s.outcomeYears)return 1e3;const a=(e-i)/(s.outcomeExponent-i);return Yr(470+a*(s.onsetAt-470),470,s.onsetAt)}if(e<12)return 470+(e-i)/(12-i)*100;if(e<14)return 570+(e-12)/2*80;if(e<15)return 650+(e-14)*30;if(e<38)return 680+(e-15)/23*165;const r=t?.blackHoleEvaporationExponent||100;return e<r?845+(e-38)/(r-38)*105:950}function U0(n,t,e){const i=Yr(Number(n),0,1e3),s=ch(i,t),r=e.findIndex(o=>i<o.until),a=r<0?e.length-1:r;return{position:i,label:s,eraIndex:a,era:e[a],galaxyIdentityOpacity:vc(i,245,325)*(1-vc(i,820,900))}}function F0(n){const e=1139.904761904762/I0;return n<145||n>=930?e*.42:e*1.25}function N0({position:n,label:t,universe:e,activeEvent:i,activeRelationship:s,ascendedSpecies:r,activeSpecies:a,civilizationData:o}){if(i){const l=n>=i.impactAt,d=l?`；${i.outcome}`:"";return{key:`${i.id}-${l?"aftermath":"forming"}`,time:t,text:`${i.label}：${i.message}${d}`}}const h=e?.cosmicFate;if(h&&h.type!=="heat-death"&&n>=h.onsetAt){if(h.type==="vacuum-decay"){const d=n>=985;return{key:`fate-vacuum-${d?"terminal":"bubble"}`,time:t,text:d?"低能真空泡已经穿过可观测区域，原有粒子与相互作用不再适用":"量子隧穿产生了低能真空泡，泡壁以接近光速向外扩张"}}if(h.type==="big-rip"){const d=n>=985;return{key:`fate-rip-${d?"terminal":"unbinding"}`,time:t,text:d?"膨胀率在有限时间内发散，局部束缚结构相继失效":"幽灵暗能量密度持续上升，星系团与星系开始逐层解束缚"}}const l=n>=985;return{key:`fate-crunch-${l?"terminal":"turnaround"}`,time:t,text:l?"坍缩使物质与辐射密度急剧升高，经典演化在高曲率阶段失效":"宇宙膨胀已经停止，大尺度距离开始反向缩小"}}if(s){const l=o[s.speciesA],d=o[s.speciesB],f=s.relationship==="conflict"?`${l.name} 与 ${d.name} 的边界冲突正在削减双方疆域`:`${l.name} 与 ${d.name} 建立友好共存区，共享资源与航路`;return{key:`relation-${s.relationship}-${s.speciesA}-${s.speciesB}`,time:t,text:f}}return r>0?{key:`ascended-${r}`,time:t,text:`${r} 个种群已转化为高维生命，脱离恒星与黑洞的普通物质演化`}:n<55?{key:"bang",time:"T+0",text:"整个可观测区域处于超高温、高密度状态，空间本身在膨胀"}:n<145?{key:"plasma",time:t,text:"光子在等离子体中不断散射，宇宙随膨胀持续冷却"}:n<245?{key:"dark",time:t,text:"复合后宇宙变得透明，但尚没有恒星光"}:n<340?{key:"stars",time:t,text:"第一代恒星与星系点亮，再电离逐渐开始"}:a>0?{key:`life-${a}`,time:t,text:`${a} 个主要文明种群正在跨越恒星系扩张`}:n<430?{key:"chemistry",time:t,text:"重元素丰度上升，宜居行星开始形成"}:n<Math.min(...o.map(l=>l.birth),620)?{key:"waiting-life",time:t,text:"宜居世界正在积累复杂化学反应，智慧生命尚未出现"}:n<620?{key:"silence",time:t,text:"文明信号已经沉寂，只剩无人维护的轨道遗迹"}:n<650?{key:"last-stars",time:t,text:"恒星形成早已停止，最后的低质量红矮星仍在极缓慢地消耗燃料"}:n<710?{key:"degenerate",time:t,text:"最后一批红矮星熄灭，恒星残骸仍被星系引力束缚并长期绕核运行"}:n<845?{key:"evaporation",time:t,text:"长期引力近遇持续重分配能量，少数残骸逐个逃离，极少数落向星系中心"}:n<950?{key:"holes",time:t,text:"黑洞通过霍金辐射缓慢蒸发"}:{key:"heatdeath",time:t,text:"最后的黑洞已经蒸发，残余光子持续红移并稀释，可用能量梯度趋近于零"}}function ch(n,t){const e=(r,a,o)=>10**(Math.log10(r)+(Math.log10(a)-Math.log10(r))*o),i=r=>{if(r<1){const a=r*31557600;return a<3600?`${Math.round(a/60)} 分钟`:a<86400?`${(a/3600).toFixed(1)} 小时`:`${(a/86400).toFixed(1)} 天`}return r<1e4?`${Math.max(1,Math.round(r))} 年`:r<1e8?`${(r/1e4).toFixed(r<1e6?1:0)} 万年`:r<1e12?`${(r/1e8).toFixed(r<1e9?2:1)} 亿年`:`10^${Math.log10(r).toFixed(1)} 年`};if(n<18)return`T+${Math.max(.001,e(.001,1,n/18)).toFixed(3)} 秒`;if(n<55)return`T+${Math.max(1,Math.round(e(1,180,(n-18)/37)))} 秒`;if(n<145)return`T+${i(e(180/31557600,38e4,(n-55)/90))}`;if(n<245)return`T+${i(e(38e4,18e7,(n-145)/100))}`;if(n<340)return`T+${i(e(18e7,1e9,(n-245)/95))}`;if(n<470)return`T+${i(e(1e9,138e8,(n-340)/130))}`;const s=t?.cosmicFate;if(s&&Number.isFinite(s.outcomeYears)){if(n>=999)return s.label;const r=Yr((n-470)/(s.onsetAt-470),0,1),a=e(138e8,s.outcomeYears,r);return`T+${i(a)}`}return n<570?`T+${i(e(138e8,1e12,(n-470)/100))}`:n<650?`T+10^${(12+(n-570)/80*2).toFixed(1)} 年`:n<680?`T+10^${(14+(n-650)/30).toFixed(1)} 年`:n<845?`T+10^${Math.round(15+(n-680)/165*23)} 年`:n<950?`T+10^${Math.round(38+(n-845)/105*(t.blackHoleEvaporationExponent-38))} 年`:n<999?`T+10^${t.blackHoleEvaporationExponent} 年以后`:"趋近热寂"}function O0(n){const t=Math.round(n*360);return`${t<190?"青白":t<225?"蓝白":t<250?"靛蓝":"紫白"} · ${t}°`}function B0(n,t){return n===2?"主环 + 碎环":n===3?"无旋臂":n===4?"不规则":`${t} 条`}function z0(n){const t=n*100;return t<1e-4?"< 0.0001%":t<.01?`${t.toFixed(4)}%`:t<1?`${t.toFixed(2)}%`:`${t.toFixed(1)}%`}function k0(n){return n===0?"尚未出现":`${new Intl.NumberFormat("zh-CN").format(n)} 个`}function hh(n){const t=n.lastStarDeathExponent??n.stellarFormationEndExponent;return ft.clamp(lh(10**t,n),478,1e3)}function H0(n){return n>=1?`${n.toFixed(1)} 万亿颗`:`${Math.round(n*1e4)} 亿颗`}function uh(n=S0()){const t=Xr(n),e=E0(t),i=hn(t),s=St(i,.38,1.84),r=St(i,.52,1.76),a=St(i,.72,1.28),o=St(i,.82,1.18),h=St(i,.65,1.45),l=St(i,.48,.82),d=St(i,.55,1.75),f=St(i,1.9,4.4),p=Math.exp(-Math.pow((a-1)/.17,2)-Math.pow((o-1)/.14,2)),m=ft.clamp(r*d/Math.pow(h,.72),.12,2.8),_=Math.max(2,Math.round(118*p*St(i,.82,1.08))),y=ft.clamp(St(i,.35,3.2)*m,.08,7.2),c=ft.clamp(12.5-(l-.68)*1.35-(h-1)*.42,11.8,13.25),u=ft.clamp(c+St(i,.68,1.08),12.8,14.25),b=p*ft.clamp(1-Math.abs(f-2.725)/3.5,.12,1),x=Math.pow(i(),4)*.08*b,g=Math.floor(St(i,5,16)),A=Math.max(g,Math.floor(y*1e5*x*St(i,.02,.7))),S=Math.round(Math.pow(10,u-8)/10)*10,T=Math.floor(St(i,3,7)),R=e%To.length,v=[.96,.92,.72,.99,.34][R],M=i()<v,P=M&&i()<[.1,.07,.05,.045,.025][R],D=Math.floor(St(i,97,103)),F=St(i,.48,.76),U=P0(t,{expansionRate:h,darkEnergyDensity:l});return{seed:t,seedValue:e,speed:s,gravity:r,fineStructure:a,massRatio:o,expansionRate:h,darkEnergyDensity:l,primordialFluctuation:d,cmbTemperature:f,chemistryStability:p,structureEfficiency:m,stellarFormationEndExponent:c,lastStarDeathExponent:u,elements:_,stars:y,lifeProbability:x,civilizations:A,speciesCount:g,lifetime:S,blackHoleEvaporationExponent:D,armCount:T,galaxyType:R,hasCentralBlackHole:M,activeNucleus:P,hue:F,cosmicFate:U}}let Ss=null;function Ki(){const n=document.createElement("canvas");n.width=n.height=256;const t=n.getContext("2d"),e=t.createRadialGradient(128,128,82,128,128,128);e.addColorStop(0,"rgba(255,255,255,0)"),e.addColorStop(.72,"rgba(255,255,255,0)"),e.addColorStop(.86,"rgba(255,255,255,.8)"),e.addColorStop(.91,"rgba(255,255,255,.18)"),e.addColorStop(1,"rgba(255,255,255,0)"),t.fillStyle=e,t.fillRect(0,0,256,256);const i=new Hr(n);return i.colorSpace=Ie,i}function ke(){const n=document.createElement("canvas");n.width=n.height=128;const t=n.getContext("2d"),e=t.createRadialGradient(64,64,0,64,64,64);e.addColorStop(0,"rgba(255,255,255,1)"),e.addColorStop(.08,"rgba(255,230,170,.85)"),e.addColorStop(.35,"rgba(255,190,100,.22)"),e.addColorStop(1,"rgba(0,0,0,0)"),t.fillStyle=e,t.fillRect(0,0,128,128);const i=new Hr(n);return i.colorSpace=Ie,i}function Re(){if(Ss)return Ss;const n=document.createElement("canvas");n.width=n.height=64;const t=n.getContext("2d"),e=t.createRadialGradient(32,32,0,32,32,32);return e.addColorStop(0,"rgba(255,255,255,1)"),e.addColorStop(.22,"rgba(255,255,255,.95)"),e.addColorStop(.5,"rgba(255,255,255,.35)"),e.addColorStop(1,"rgba(255,255,255,0)"),t.fillStyle=e,t.fillRect(0,0,64,64),Ss=new Hr(n),Ss.colorSpace=Ie,Ss}let yr=null,Sr=null,Er=null;function Zo(n){const t=document.createElement("canvas");t.width=1024,t.height=1024;const e=t.getContext("2d");n(e,t.width);const i=new Hr(t);return i.colorSpace=Ie,i.minFilter=Qn,i.magFilter=vn,i}function gn(n,t,e,i,s,r,a=0,o=Math.PI*2){n.beginPath(),n.ellipse(t,e,i,s,r,a,o)}function Mc(){return yr||(yr=Zo((n,t)=>{const e=t/2,i=n.createLinearGradient(96,e,t-96,e);i.addColorStop(0,"rgba(255,255,255,0)"),i.addColorStop(.12,"rgba(255,221,174,.18)"),i.addColorStop(.35,"rgba(255,245,222,.76)"),i.addColorStop(.5,"rgba(255,255,255,1)"),i.addColorStop(.66,"rgba(255,232,199,.82)"),i.addColorStop(.88,"rgba(255,179,126,.2)"),i.addColorStop(1,"rgba(255,255,255,0)"),n.save(),n.globalCompositeOperation="lighter",n.filter="blur(34px)",n.strokeStyle=i,n.lineCap="round",n.lineWidth=62,gn(n,e,e+7,360,74,-.1),n.stroke(),n.filter="blur(15px)",n.lineWidth=22,gn(n,e,e+4,325,62,-.1),n.stroke(),n.restore(),n.save(),n.globalCompositeOperation="lighter",n.lineCap="round",n.strokeStyle=i,n.filter="blur(13px)",n.lineWidth=34,gn(n,e-2,e+3,118,164,-.08,Math.PI*1.03,Math.PI*1.98),n.stroke(),n.lineWidth=25,gn(n,e+2,e+4,121,161,-.08,.03,Math.PI*.97),n.stroke(),n.filter="none",n.lineWidth=7,n.strokeStyle="rgba(255,250,232,.92)",gn(n,e-2,e+3,116,160,-.08,Math.PI*1.05,Math.PI*1.95),n.stroke(),n.strokeStyle="rgba(255,221,180,.72)",gn(n,e+2,e+4,119,158,-.08,.07,Math.PI*.93),n.stroke(),n.restore(),n.save(),n.globalCompositeOperation="lighter",n.lineCap="round";for(let a=0;a<12;a++){const o=164+a*16,h=28+a*3.25,l=.2-a*.011;n.strokeStyle=`rgba(255,238,210,${l})`,n.lineWidth=a<4?3.5:2,gn(n,e,e+6,o,h,-.1),n.stroke()}n.restore();const s=n.createRadialGradient(e-18,e-20,6,e,e,105);s.addColorStop(0,"rgba(0,0,0,1)"),s.addColorStop(.78,"rgba(0,0,0,1)"),s.addColorStop(.94,"rgba(1,1,2,.995)"),s.addColorStop(1,"rgba(0,0,0,0)"),n.fillStyle=s,n.fillRect(e-112,e-112,224,224),n.save(),n.globalCompositeOperation="lighter",n.filter="blur(12px)",n.strokeStyle="rgba(255,244,220,.86)",n.lineWidth=24,gn(n,e,e,103,106,-.08),n.stroke(),n.filter="none",n.strokeStyle="rgba(255,255,247,.98)",n.lineWidth=6,gn(n,e,e,102,105,-.08),n.stroke();const r=n.createLinearGradient(130,e+58,t-120,e-32);r.addColorStop(0,"rgba(255,184,126,0)"),r.addColorStop(.2,"rgba(255,207,158,.55)"),r.addColorStop(.43,"rgba(255,251,231,.98)"),r.addColorStop(.66,"rgba(255,244,219,.94)"),r.addColorStop(.9,"rgba(255,166,112,.34)"),r.addColorStop(1,"rgba(255,166,112,0)"),n.strokeStyle=r,n.lineCap="round",n.filter="blur(11px)",n.lineWidth=28,n.beginPath(),n.moveTo(132,e+103),n.bezierCurveTo(318,e+83,638,e-54,908,e-90),n.stroke(),n.filter="none",n.lineWidth=9,n.stroke(),n.restore()}),yr)}function G0(){return Sr||(Sr=Zo((n,t)=>{const e=t/2;n.globalCompositeOperation="lighter",n.lineCap="round";for(let i=0;i<18;i++){const s=i/18*Math.PI*2,r=108+i%3*17,a=.11+i%4*.035;n.strokeStyle=`rgba(255,255,245,${.24+i%5*.07})`,n.lineWidth=2+i%3,gn(n,e,e,r,r*.9,-.08,s,s+a),n.stroke()}n.filter="blur(9px)",n.strokeStyle="rgba(255,238,209,.42)",n.lineWidth=10,gn(n,e,e,118,111,-.08,.14,Math.PI*.72),n.stroke()}),Sr)}function V0(){return Er||(Er=Zo((n,t)=>{const e=t/2,i=n.createRadialGradient(e,e,44,e,e,430);i.addColorStop(0,"rgba(255,250,232,.7)"),i.addColorStop(.18,"rgba(255,226,190,.38)"),i.addColorStop(.42,"rgba(255,180,119,.1)"),i.addColorStop(.72,"rgba(255,139,84,.025)"),i.addColorStop(1,"rgba(255,255,255,0)"),n.fillStyle=i,n.fillRect(0,0,t,t)}),Er)}function Pr({color:n=16762255,tilt:t=0,phase:e=0,visualScale:i=1,intensity:s=1}={}){const r=new Ge,a=new le(new ae({map:V0(),color:n,transparent:!0,opacity:0,depthWrite:!1,blending:Ft}));a.scale.setScalar(2.65*i);const o=new le(new ae({map:Mc(),color:n,transparent:!0,opacity:0,alphaTest:.006,depthWrite:!1,blending:Ei,rotation:t}));o.scale.setScalar(2.2*i);const h=new le(new ae({map:G0(),color:n,transparent:!0,opacity:0,depthWrite:!1,blending:Ft,rotation:t}));h.scale.setScalar(2.2*i);const l=new le(new ae({map:Mc(),color:n,transparent:!0,opacity:0,alphaTest:.006,depthWrite:!1,blending:Ft,rotation:t}));l.scale.setScalar(2.2*i);const d=new cn(new Vr(.235*i,32,20),new Hs({color:0,transparent:!0,opacity:0}));return d.renderOrder=2,a.renderOrder=1,o.renderOrder=3,l.renderOrder=4,h.renderOrder=5,r.add(a,d,o,l,h),r.userData.blackHoleVisual={halo:a,horizon:d,accretion:o,bloom:l,flow:h,intensity:0,visibility:1,baseTilt:t,phase:e,visualScale:i},Kn(r,s),r}function Kn(n,t,e=1){const i=n.userData.blackHoleVisual;if(!i)return;const s=ft.clamp(t,0,1.4),r=ft.clamp(e,0,1);i.intensity=s,i.visibility=r,i.horizon.material.opacity=ft.smoothstep(s,0,.24)*r,i.horizon.visible=s*r>.001,i.accretion.material.opacity=Math.min(1,s*.92)*r,i.bloom.material.opacity=Math.min(.34,s*.27)*r,i.flow.material.opacity=Math.min(.82,s*.5)*r,i.halo.material.opacity=Math.min(.7,s*.42)*r}function Zi(n,t,e=1){const i=n.userData.blackHoleVisual;if(!i||i.intensity<=0)return;const s=t*.001,r=1+Math.sin(s*.72+i.phase)*.035,a=.82+Math.sin(s*1.7+i.phase*1.9)*.18;i.halo.scale.setScalar(2.65*i.visualScale*r),i.halo.material.opacity=Math.min(.7,i.intensity*(.36+a*.09))*i.visibility,i.bloom.material.opacity=Math.min(.36,i.intensity*(.22+a*.07))*i.visibility,i.flow.material.rotation=i.baseTilt+e*Math.sin(s*.44+i.phase)*.055,i.flow.material.opacity=Math.min(.82,i.intensity*(.38+a*.15))*i.visibility}const Pa=220,Da=340;function dh(n){if(n<=Pa)return 0;const t=Da-Pa;if(n<Da){const e=(n-Pa)/t;return t*(e**3-.5*e**4)}return t*.5+n-Da}function fh(n,t){return dh(n)*t}function W0(n,{civilizationSimulation:t,civilizationData:e,civilizationGroups:i}){if(!n||!t)return;const s=new Uint16Array(e.length);n.owners.forEach((r,a)=>{if(r<0)return;const o=s[r]++;e[r].hostRemnantIndices[o]=t.habitatRemnantIndices[a]}),e.forEach((r,a)=>{r.displayCount=s[a],i[a].geometry.setDrawRange(0,s[a])})}function X0({clickableStars:n,stellarRemnants:t,remnantDynamics:e,cosmicPosition:i,civilizationData:s,civilizationGroups:r}){if(!t)return;const a=t.geometry.attributes.position.array,o=n?.geometry.attributes.position.array,h=o||a,l=p=>o?e.sourceIndices[p]*3:p*3,d=new B,f=(p,m,_,y,c)=>{const u=p*3,b=Math.min(i,e.escapeAt[p]),x=fh(b,e.orbitRates[p]),g=Math.cos(x),A=Math.sin(x),S=e.axes[u],T=e.axes[u+1],R=e.axes[u+2],v=S*m+T*_+R*y;c.set(m*g+(T*y-R*_)*A+S*v*(1-g),_*g+(R*m-S*y)*A+T*v*(1-g),y*g+(S*_-T*m)*A+R*v*(1-g))};s.forEach((p,m)=>{const _=r[m];if(!_)return;const y=_.geometry.attributes.position.array;for(let u=0;u<p.displayCount;u++){const b=p.hostRemnantIndices[u],x=l(b),g=u*3;if(f(b,p.hostOffsets[g],p.hostOffsets[g+1],p.hostOffsets[g+2],d),y[g]=h[x]+d.x,y[g+1]=h[x+1]+d.y,y[g+2]=h[x+2]+d.z,p.highDimensional&&i>=p.ascensionAt){const A=ft.smoothstep(i,p.ascensionAt,p.ascensionAt+34),S=u*1.618+i*.035;y[g]+=Math.sin(S)*A*.7,y[g+1]+=Math.cos(S*.73)*A*.42,y[g+2]+=Math.sin(S*.51+2.1)*A*.7}}_.geometry.attributes.position.needsUpdate=!0;const c=l(p.homeRemnantIndex);if(f(p.homeRemnantIndex,p.homeOffset.x,p.homeOffset.y,p.homeOffset.z,d),p.home.set(h[c]+d.x,h[c+1]+d.y,h[c+2]+d.z),p.highDimensional&&i>=p.ascensionAt){const u=ft.smoothstep(i,p.ascensionAt,p.ascensionAt+34),b=m*2.17+i*.035;p.home.x+=Math.sin(b)*u*.7,p.home.y+=Math.cos(b*.73)*u*.42,p.home.z+=Math.sin(b*.51+2.1)*u*.7}})}const ph=Math.PI*2,Y0=24;function q0(n,t,e){return Math.min(e,Math.max(t,n))}function bs(n,t,e){if(e<=t)return n>=e?1:0;const i=q0((n-t)/(e-t),0,1);return i*i*(3-2*i)}function mh(n,t){const e=t.persistUntil??t.start+t.duration,i=t.persistenceFadeDuration??Y0;return 1-bs(n,e,e+i)}function Si(n,t){let e=n+1^t;return e=Math.imul(e^e>>>16,569420461),e=Math.imul(e^e>>>15,1935289751),((e^e>>>15)>>>0)/4294967296}function $0(n,t,e,i,s,r,a,o,h){const l=Math.cos(h),d=Math.sin(h),f=r*e+a*i+o*s;n[t]=e*l+(a*s-o*i)*d+r*f*(1-l),n[t+1]=i*l+(o*e-r*s)*d+a*f*(1-l),n[t+2]=s*l+(r*i-a*e)*d+o*f*(1-l)}function j0(n,t){const e=n.length/3,i=new Float32Array(n.length),s=new Float32Array(e),r=t.galaxyType<=2,a=t.hasCentralBlackHole?1.35:.16,o=t.seedValue^1831565813,h=1;for(let l=0;l<e;l++){const d=l*3,f=n[d],p=n[d+1],m=n[d+2],_=Math.max(.24,Math.hypot(f,p,m));if(r){let b=(Si(l,o+29)-.5)*.035;const x=1;let g=(Si(l,o+47)-.5)*.035;const A=Math.hypot(b,x,g);b/=A,g/=A,i.set([b,x/A,g],d)}else{const b=Si(l,o+71)*ph,x=.08+Si(l,o+97)*.54,g=Math.sin(x);i.set([Math.cos(b)*g,Math.cos(x),Math.sin(b)*g],d)}const y=a/Math.pow(_+.12,3),c=.72/(_+1.8),u=.0055+.0155*Math.sqrt(t.gravity*(y+c));s[l]=h*Math.min(.095,u)}return{axes:i,orbitRates:s,centralMass:a}}function K0(n,t,e,i){const s=dh(n);for(let r=0;r<i.orbitRates.length;r++){const a=r*3;$0(e,a,t[a],t[a+1],t[a+2],i.axes[a],i.axes[a+1],i.axes[a+2],s*i.orbitRates[r])}}function Z0(n,t,{seedValue:e,eventIndex:i,influenceRadius:s=4.8,maxStars:r=2600}){const a=[];for(let c=0;c<n.length/3;c++){const u=c*3,b=Math.hypot(n[u]-t.x,n[u+1]-t.y,n[u+2]-t.z);b<=s&&a.push({index:c,distance:b})}a.sort((c,u)=>c.distance-u.distance);const o=Math.min(r,a.length),h=new Uint16Array(o),l=new Float32Array(o),d=a.length/Math.max(1,o),f=e^Math.imul(i+1,73244475);for(let c=0;c<o;c++){const u=Si(c,f)*Math.min(1,d),b=c===0?0:Math.min(a.length-1,Math.floor(c*d+u));h[c]=a[b].index,l[c]=a[b].distance}const p=Si(i,f+131)*ph,m=(Si(i,f+173)-.5)*.5,_=Math.cos(m),y=new Float32Array([Math.cos(p)*Math.sin(m),_,Math.sin(p)*Math.sin(m)]);return{indices:h,restDistances:l,axis:y,influenceRadius:s,softening:.24,captureRadius:.42}}function J0(n,t,e,i,s){const r=i.gravityField;if(!r||n<i.start)return;const o=Math.min(n,i.persistUntil)-i.start,h=bs(n,i.start,i.start+4.5),l=bs(n,i.impactAt-1.2,i.impactAt+2.4),d=mh(n,i),f=1-i.radiatedMassFraction*l,p=r.axis[0],m=r.axis[1],_=r.axis[2];for(let y=0;y<r.indices.length;y++){const u=r.indices[y]*3,b=t[u]-s.x,x=t[u+1]-s.y,g=t[u+2]-s.z,A=Math.max(.025,Math.hypot(b,x,g)),S=r.restDistances[y],T=1-bs(S,r.influenceRadius*.34,r.influenceRadius);if(T<=0)continue;const R=Math.sqrt(A*A+r.softening*r.softening),v=.105*Math.sqrt(f/Math.pow(R,3)),M=1+(1-l)*.22*Math.sin(o*.72+S*2.3),P=o*v*M*h*T,D=Math.cos(P),F=Math.sin(P),U=p*b+m*x+_*g;let L=b*D+(m*g-_*x)*F+p*U*(1-D),N=x*D+(_*b-p*g)*F+m*U*(1-D),k=g*D+(p*x-m*b)*F+_*U*(1-D);const O=Math.min(.14,.055/(S+.24)),J=1+Math.sin(P*.63+S*3.1)*O*h*T;if(L*=J,N*=J,k*=J,S<r.captureRadius){const q=S/r.captureRadius*11,ct=bs(n,i.impactAt+q,i.impactAt+q+13),vt=1-ct*.965;L*=vt,N*=vt,k*=vt;const Rt=1-ct;e[u]*=Rt,e[u+1]*=Rt,e[u+2]*=Rt}t[u]=s.x+b+(L-b)*d,t[u+1]=s.y+x+(N-x)*d,t[u+2]=s.z+g+(k-g)*d}}const Q0=Math.PI*2,ve=(n,t,e)=>Math.min(e,Math.max(t,n)),gh=(n,t,e)=>{if(e<=t)return n>=e?1:0;const i=ve((n-t)/(e-t),0,1);return i*i*(3-2*i)},La=(n,t,e)=>10**St(n,t,e);function yc(n,t,e,i){return t<=1?[e]:Array.from({length:t},(s,r)=>{const a=e+(i-e)*r/(t-1),o=r===0?0:St(n,-.025,.025);return ve(a+o,e,i)})}function t_(n,t,e){const i=hn(t.seed,12011+e*977),s=Math.sqrt(t.gravity);if(n.type==="neutron-star-kilonova"){const r=St(i,1.18,1.92),a=St(i,1.12,Math.min(1.82,r)),o=r+a,h=Math.pow(r*a,3/5)/Math.pow(o,1/5),l=1-a/r,d=St(i,.035,.075)*s,f=ve(St(i,.018,.072)*(1+l*2.4),.012,.13),p=ve(St(i,.12,.27)*s,.09,.34),m=2.72+(t.massRatio-1)*.28,_=o-d>m?"black-hole":"massive-neutron-star";return{model:"compact-merger",massA:r,massB:a,chirpMass:h,ejectaMass:f,ejectaVelocityC:p,radiatedMassFraction:d/o,jetOpeningDeg:St(i,5,16),remnantMass:o-d-f,remnantType:_,persistentRemnant:!0,gravityStrength:ve((o-2.2)/1.5,.32,1.25),gravityRadius:St(i,.62,.9),rangeScale:ve(.82+f*5+p,.82,1.42),civilizationScale:ve(.72+p*1.7,.78,1.3),kickScale:ve(.7+p*1.5,.8,1.25)}}if(n.type==="tidal-disruption-event"){const r=St(i,.35,3.2),a=Math.pow(r,r<1?.82:.57),o=8e7*Math.pow(a,1.5)/Math.sqrt(r),h=Math.min(La(i,5.8,8.05)*t.gravity,o),l=St(i,.72,2.15),d=a*Math.cbrt(h/r),f=41*Math.sqrt(h/1e6)*Math.pow(r,-.5)*Math.pow(a,1.5)/Math.pow(l,3),p=St(i,.43,.57),m=ve(St(i,.6,3.8)*l,.5,6.5);return{model:"tidal-disruption",blackHoleMass:h,hillsMass:o,starMass:r,starRadius:a,penetration:l,tidalRadiusSolar:d,fallbackDays:f,boundFraction:p,peakEddingtonRatio:m,fallbackExponent:-5/3,unboundVelocityKms:St(i,5500,16e3)*Math.sqrt(l),pulsePhases:[.58,.74],pulseWeights:[1,.42],recoveryDuration:St(i,18,32),recoveryFraction:.28,rangeScale:ve(.76+Math.log10(m+1)*.42,.78,1.25),civilizationScale:ve(.62+Math.log10(m+1)*.5,.68,1.18),kickScale:ve(.72+l*.15,.82,1.08)}}if(n.type==="failed-supernova"){const r=St(i,18,42),a=St(i,.025,.16)/s,o=St(i,.16,.46),h=r*(1-a)-o;return{model:"failed-collapse",progenitorMass:r,ejectedEnvelopeFraction:a,neutrinoMassLoss:o,remnantMass:h,dustOpticalDepth:St(i,1.2,5.4),fallbackFraction:ve(1-a-o/r,.72,.97),persistentRemnant:!0,remnantType:"black-hole",gravityStrength:ve(h/24,.45,1.5),gravityRadius:St(i,.58,.88),rangeScale:ve(.76+a*2.1,.78,1.08),civilizationScale:ve(.6+a*2.4,.65,1.02),kickScale:ve(.45+a*2.8,.5,.88)}}if(n.type==="red-dwarf-superflare"){const r=La(i,34.4,36.25),a=2+Math.floor(i()*4),o=Math.log10(r)-34;return{model:"magnetic-flare-storm",energyErg:r,stormCount:a,pulsePhases:yc(i,a,.38,.78),pulseWeights:Array.from({length:a},(h,l)=>Math.pow(.76,l)),cmeVelocityKms:St(i,900,4200)*s,ultravioletFraction:St(i,.12,.34),atmosphereLossFraction:ve(St(i,.006,.045)*o,.004,.14),recoveryDuration:St(i,16,34),recoveryFraction:St(i,.48,.72),temporaryOnly:!0,rangeScale:ve(.72+o*.13,.78,1.22),civilizationScale:ve(.55+o*.22,.62,1.3),kickScale:0}}if(n.type==="classical-nova"){const r=St(i,.72,1.34),a=La(i,-10.1,-8.15),o=22e-6*Math.pow(1.05/r,3.2),h=o/a,l=ve(Math.round(4.4-Math.log10(h)*.58),2,4);return{model:"recurrent-nova",whiteDwarfMass:r,accretionRate:a,ignitionMass:o,recurrenceYears:h,ejectaMass:o*St(i,.62,1.08),ejectaVelocityKms:St(i,850,3900)*Math.sqrt(r),outburstCount:l,pulsePhases:yc(i,l,.14,.78),pulseWeights:Array.from({length:l},(d,f)=>Math.pow(.7,f)),recoveryDuration:St(i,7,15),recoveryFraction:.74,temporaryOnly:!0,rangeScale:ve(.72+r*.18,.78,1.02),civilizationScale:ve(.58+r*.2,.68,.92),kickScale:0}}return null}function Sc(n,t){return t?{...n,radius:n.radius*(t.rangeScale||1),maxStars:Math.max(1,Math.round(n.maxStars*(t.rangeScale||1))),kick:n.kick*(t.kickScale??1),civilization:n.civilization*(t.civilizationScale||1),range:n.range*(t.rangeScale||1),beamAngle:t.jetOpeningDeg?t.jetOpeningDeg*Math.PI/180:n.beamAngle}:n}function e_(n){const t=n.simulation;if(!t)return null;if(t.model==="compact-merger"){const e=t.remnantType==="black-hole"?"黑洞":"大质量中子星";return`两颗 ${t.massA.toFixed(2)} 与 ${t.massB.toFixed(2)} M☉ 中子星并合，抛出 ${t.ejectaMass.toFixed(3)} M☉、约 ${(t.ejectaVelocityC*100).toFixed(0)}% 光速的物质，留下 ${t.remnantMass.toFixed(2)} M☉ ${e}`}return t.model==="tidal-disruption"?`${t.starMass.toFixed(1)} M☉ 恒星以穿透因子 β=${t.penetration.toFixed(2)} 掠过约 ${(t.blackHoleMass/1e6).toFixed(1)}×10⁶ M☉ 黑洞，束缚碎片在约 ${Math.round(t.fallbackDays)} 天后开始回落`:t.model==="failed-collapse"?`${t.progenitorMass.toFixed(1)} M☉ 恒星仅抛出约 ${(t.ejectedEnvelopeFraction*100).toFixed(1)}% 外层，回落物质形成约 ${t.remnantMass.toFixed(1)} M☉ 黑洞`:t.model==="magnetic-flare-storm"?`${t.stormCount} 次耀斑组成约 10^${Math.log10(t.energyErg).toFixed(1)} erg 的爆发风暴，CME 速度约 ${Math.round(t.cmeVelocityKms)} km/s，近轨行星大气随后逐步恢复`:t.model==="recurrent-nova"?`${t.whiteDwarfMass.toFixed(2)} M☉ 白矮星以 ${t.accretionRate.toExponential(1)} M☉/年吸积，模型复发周期约 ${Math.round(t.recurrenceYears).toLocaleString("zh-CN")} 年，本段显示 ${t.outburstCount} 次爆发`:null}function _h(n,t){if(!t.simulation?.persistentRemnant||n<t.impactAt)return 0;const e=t.persistUntil??845,i=t.persistenceFadeDuration??24;return 1-gh(n,e,e+i)}function Ec(n,t){let e=n+1^t;return e=Math.imul(e^e>>>16,569420461),e=Math.imul(e^e>>>15,1935289751),((e^e>>>15)>>>0)/4294967296}function n_(n,t,e,i,s){if(!e?.gravityStrength||!e.persistentRemnant)return null;const r=e.gravityRadius||.7,a=[];for(let y=0;y<n.length/3;y++){const c=y*3,u=Math.hypot(n[c]-t.x,n[c+1]-t.y,n[c+2]-t.z);u<=r&&a.push({index:y,distance:u})}a.sort((y,c)=>y.distance-c.distance);const o=Math.min(180,a.length),h=new Uint16Array(o),l=new Float32Array(o),d=a.length/Math.max(1,o);for(let y=0;y<o;y++){const c=a[Math.min(a.length-1,Math.floor(y*d))];h[y]=c.index,l[y]=c.distance}const f=i^Math.imul(s+1,668265261),p=Ec(s,f)*Q0,m=(Ec(s+11,f+37)-.5)*.56,_=Math.cos(m);return{indices:h,restDistances:l,influenceRadius:r,strength:e.gravityStrength,axis:new Float32Array([Math.cos(p)*Math.sin(m),_,Math.sin(p)*Math.sin(m)])}}function i_(n,t,e,i){const s=e.transientGravityField;if(!s||n<e.impactAt)return;const r=_h(n,e);if(r<=0)return;const a=Math.min(n,e.persistUntil??845)-e.impactAt,o=s.axis[0],h=s.axis[1],l=s.axis[2];for(let d=0;d<s.indices.length;d++){const f=s.indices[d];if(f===e.sourceIndex)continue;const p=f*3,m=t[p]-i.x,_=t[p+1]-i.y,y=t[p+2]-i.z,c=Math.max(.08,s.restDistances[d]),u=1-gh(c,s.influenceRadius*.35,s.influenceRadius);if(u<=0)continue;const b=a*.018*Math.sqrt(s.strength/Math.pow(c+.18,3))*u,x=Math.cos(b),g=Math.sin(b),A=o*m+h*_+l*y,S=m*x+(h*y-l*_)*g+o*A*(1-x),T=_*x+(l*m-o*y)*g+h*A*(1-x),R=y*x+(o*_-h*m)*g+l*A*(1-x);t[p]=i.x+m+(S-m)*r,t[p+1]=i.y+_+(T-_)*r,t[p+2]=i.z+y+(R-y)*r}}function s_(n,t){const{mode:e,epochEffectsGroup:i,primordialParticles:s,primordialFactors:r,primordialDirections:a,expansionStreaks:o,expansionDirections:h,bangCore:l,shockwaves:d,renderer:f,scene:p,clickableStars:m,originalGalaxyPositions:_,stellarGravityState:y,universe:c,transition:u,galaxyGroup:b,starDeathThresholds:x,originalGalaxyColors:g,cosmicEvents:A,remnantGroup:S,stellarRemnants:T,originalRemnantPositions:R,remnantDynamics:v,blackHoleRemnants:M,heatDeathGroup:P,coldPhotons:D,originalPhotonPositions:F,originalPhotonColors:U,cosmicFateGroup:L,fateBubble:N,fateGlow:k}=t,O=c.cosmicFate,J=O&&O.type!=="heat-death",q=J?ft.smoothstep(n,O.onsetAt,1e3):0,ct=n<150&&e==="explorer";if(i.visible=ct,ct&&s){const Z=ft.smoothstep(n,0,145),rt=ft.smoothstep(n,0,55),at=ft.smoothstep(n,55,145),Wt=.06+Math.pow(rt,.62)*32+at*7,nt=s.geometry.attributes.position.array;for(let C=0;C<r.length;C++){const E=Wt*r[C];nt[C*3]=a[C*3]*E,nt[C*3+1]=a[C*3+1]*E,nt[C*3+2]=a[C*3+2]*E}s.geometry.attributes.position.needsUpdate=!0,s.material.opacity=.98*(1-ft.smoothstep(n,112,150)),s.material.size=.3-Z*.17;const pt=o.geometry.attributes.position.array;for(let C=0;C<h.length/4;C++){const E=h[C*4+3],H=(.04+Math.pow(rt,.5)*31+at*5)*E,K=Math.max(0,H-(1.2+Z*5.5)*E);for(let et=0;et<3;et++){const Y=h[C*4+et];pt[C*6+et]=Y*K,pt[C*6+3+et]=Y*H}}o.geometry.attributes.position.needsUpdate=!0,o.material.opacity=.68*ft.smoothstep(n,1.5,8)*(1-ft.smoothstep(n,48,82));const Vt=1-ft.smoothstep(n,7,34),Yt=.7+Math.pow(rt,.46)*18;l.material.opacity=Vt,l.scale.set(Yt,Yt,1),d.forEach((C,E)=>{const H=3+E*6,K=52+E*7,et=ft.clamp((n-H)/K,0,1),Y=.9+Math.pow(et,.72)*(39+E*5);C.scale.set(Y,Y,1),C.material.opacity=Math.sin(et*Math.PI)*(.24-E*.045)})}const vt=new zt(328968),Rt=vt.clone();if(n<70){const Z=ft.smoothstep(n,0,70);Rt.lerpColors(new zt(2756872),vt,Z),f.toneMappingExposure=1.15+(1-Z)*2.2}else if(J&&q>0){const Z={"big-rip":new zt(463652),"big-crunch":new zt(2492422),"vacuum-decay":new zt(1444389)};Rt.lerpColors(vt,Z[O.type],q*.72),f.toneMappingExposure=O.type==="big-crunch"?1.15+q*1.45:1.15-q*.38}else if(n>950){const Z=ft.smoothstep(n,950,1e3);Rt.lerpColors(vt,new zt(197898),Z*.32),f.toneMappingExposure=1.15}else f.toneMappingExposure=1.15;if(f.setClearColor(Rt,1),p.fog.color.copy(Rt),!m||!_)return;const Q=hh(c),tt=ft.smoothstep(n,220,340),V=1-ft.smoothstep(n,Q-75,Q+10);m.material.opacity=tt*.9,m.material.size=.09,u||b.scale.setScalar(1);const X=m.geometry.attributes.position.array,it=m.geometry.attributes.color.array;y&&K0(n,_,X,y);for(let Z=0;Z<_.length;Z+=3){const rt=Z/3,at=1-ft.smoothstep(n,x[rt],x[rt]+22);y||(X[Z]=_[Z],X[Z+1]=_[Z+1],X[Z+2]=_[Z+2]),it[Z]=g[Z]*at,it[Z+1]=g[Z+1]*at,it[Z+2]=g[Z+2]*at}if(A.forEach(Z=>{const rt=Z.sourceIndex*3,at={x:X[rt],y:X[rt+1],z:X[rt+2]};Z.group.position.set(at.x,at.y,at.z),Z.visual==="black-hole-merger"&&J0(n,X,it,Z,at),Z.transientGravityField&&i_(n,X,Z,at)}),A.forEach(Z=>{if(n<Z.impactAt)return;const rt=ft.smoothstep(n,Z.impactAt,Z.impactAt+24);if(Z.starImpacts.forEach(Y=>{const Mt=Y.index*3;X[Mt]+=Y.kick[0]*rt,X[Mt+1]+=Y.kick[1]*rt,X[Mt+2]+=Y.kick[2]*rt,it[Mt]*=Y.dimFactor,it[Mt+1]*=Y.dimFactor,it[Mt+2]*=Y.dimFactor}),!Z.waveSamples)return;const at=Z.duration*(1-Z.impactPhase),Wt=ft.clamp((n-Z.impactAt)/at,0,1);if(Wt<=0||Wt>=1)return;const{waveRadius:nt,waveAmplitude:pt=1,indices:Vt,distances:Yt,transverse:C,polarities:E}=Z.waveSamples,H=.18+Math.pow(Wt,.72)*nt,K=.18+Wt*.34,et=.13*pt*(1-Wt*.58);for(let Y=0;Y<Vt.length;Y++){const Mt=Yt[Y]-H;if(Math.abs(Mt)>K*2.8)continue;const lt=Math.cos(Mt/K*Math.PI)*Math.exp(-Math.pow(Mt/K,2)*1.7),Tt=lt*et*E[Y],At=Vt[Y]*3,ot=Y*3;X[At]+=C[ot]*Tt,X[At+1]+=C[ot+1]*Tt,X[At+2]+=C[ot+2]*Tt;const xt=1+Math.abs(lt)*.18;it[At]*=xt,it[At+1]*=xt,it[At+2]*=xt}}),J&&q>0){const Z=N?.position.x||0,rt=N?.position.y||0,at=N?.position.z||0,Wt=.18+Math.pow(q,.58)*36;for(let nt=0;nt<_.length;nt+=3)if(O.type==="big-rip"){const pt=Math.hypot(_[nt],_[nt+1],_[nt+2]),Vt=1+Math.pow(q,1.7)*(2.8+pt*.16);X[nt]*=Vt,X[nt+1]*=Vt,X[nt+2]*=Vt;const Yt=Math.pow(1-q,.72);it[nt]*=Yt,it[nt+1]*=Yt,it[nt+2]*=Yt}else if(O.type==="big-crunch"){const pt=Math.max(.012,1-Math.pow(q,1.35)*.988);X[nt]*=pt,X[nt+1]*=pt,X[nt+2]*=pt,it[nt]*=1+q*1.4,it[nt+1]*=1-q*.5,it[nt+2]*=1-q*.72}else{const pt=Math.hypot(X[nt]-Z,X[nt+1]-rt,X[nt+2]-at),Vt=ft.smoothstep(Wt-1.2,Wt+.4,pt);it[nt]*=Vt,it[nt+1]*=Vt,it[nt+2]*=Vt}}A.forEach(Z=>{const rt=Z.sourceIndex*3;Z.group.position.set(X[rt],X[rt+1],X[rt+2])}),m.geometry.attributes.position.needsUpdate=!0,m.geometry.attributes.color.needsUpdate=!0;const _t=b.children.find(Z=>Z.userData.isCoreGlow);if(_t){const{scale:Z,opacity:rt}=_t.userData.profile;_t.material.opacity=tt*V*rt*(1-q),_t.scale.set(Z,Z,1)}const mt=b.children.find(Z=>Z.userData.isAgnGlow),Pt=b.children.find(Z=>Z.userData.isAgnJet);if(mt){const Z=tt*(1-ft.smoothstep(n,500,650));mt.material.opacity=Z*.82,mt.scale.set(.72,.72,1),Pt.material.opacity=Z*.18}const Jt=!J||O.outcomeExponent>38,I=Jt&&n>Q-80&&n<930,Qt=Jt&&n>825&&n<960;if(S.visible=(I||Qt)&&e==="explorer",I&&T){const Z=ft.smoothstep(n,Q-80,Q+15),rt=1-ft.smoothstep(n,845,930);T.material.opacity=Z*rt*.64*(1-q);const at=T.geometry.attributes.position.array,Wt=(nt,pt)=>{const Vt=nt*3,Yt=R[Vt],C=R[Vt+1],E=R[Vt+2],H=v.axes[Vt],K=v.axes[Vt+1],et=v.axes[Vt+2],Y=fh(pt,v.orbitRates[nt]),Mt=Math.cos(Y),lt=Math.sin(Y),Tt=H*Yt+K*C+et*E;at[Vt]=Yt*Mt+(K*E-et*C)*lt+H*Tt*(1-Mt),at[Vt+1]=C*Mt+(et*Yt-H*E)*lt+K*Tt*(1-Mt),at[Vt+2]=E*Mt+(H*C-K*Yt)*lt+et*Tt*(1-Mt)};for(let nt=0;nt<R.length/3;nt++){const pt=nt*3,Vt=v.fates[nt],Yt=v.escapeAt[nt];if(n<Yt||Vt===1){Wt(nt,n);continue}if(Vt===2){const gt=ft.smoothstep(n,Yt,Math.min(900,Yt+42));Wt(nt,n+gt*150);const wt=1-gt*.985;at[pt]*=wt,at[pt+1]*=wt,at[pt+2]*=wt;continue}Wt(nt,Yt);const C=at[pt],E=at[pt+1],H=at[pt+2],K=Math.max(.001,Math.hypot(C,E,H)),et=v.axes[pt],Y=v.axes[pt+1],Mt=v.axes[pt+2],lt=Math.sign(v.orbitRates[nt])||1;let Tt=(Y*H-Mt*E)*lt,At=(Mt*C-et*H)*lt,ot=(et*E-Y*C)*lt;const xt=Math.max(.001,Math.hypot(Tt,At,ot));Tt/=xt,At/=xt,ot/=xt;let Bt=Tt*.9+C/K*.34,Dt=At*.9+E/K*.34+Y*Math.sin(nt*12.9898)*.08,yt=ot*.9+H/K*.34;const qt=Math.max(.001,Math.hypot(Bt,Dt,yt));Bt/=qt,Dt/=qt,yt/=qt;const z=ft.clamp((n-Yt)/Math.max(1,900-Yt),0,1),ht=Vt===3?Math.pow(z,.72)*(18+v.speeds[nt]*7):Math.pow(z,1.35)*(6+v.speeds[nt]*11);at[pt]=C+Bt*ht,at[pt+1]=E+Dt*ht,at[pt+2]=H+yt*ht}T.geometry.attributes.position.needsUpdate=!0}if(M.forEach(Z=>{const rt=Z.userData,at=ft.smoothstep(n,rt.birthAt,rt.birthAt+7),Wt=1-ft.smoothstep(n,rt.evaporationAt-24,rt.evaporationAt),nt=ft.smoothstep(n,rt.evaporationAt-15,rt.evaporationAt),pt=7.5,Vt=Math.abs(n-rt.evaporationAt),Yt=Vt<pt?Math.sin((1-Vt/pt)*Math.PI/2):0;Z.visible=Jt&&e==="explorer"&&n>=rt.birthAt&&n<=rt.evaporationAt+pt;const C=rt.baseScale*(.18+.82*Math.cbrt(Math.max(0,Wt)));Z.scale.setScalar(Math.max(.035,C));const E=at*(.78+nt*.22)*Math.sqrt(Math.max(0,Wt));Kn(Z,E),rt.hawkingGlow.material.opacity=at*(.07+nt*.62)*Math.sqrt(Math.max(0,Wt)),rt.finalPulse.material.opacity=Yt*.84;const H=(.22+Yt*2.1)/Math.max(.035,C);rt.finalPulse.scale.set(H,H,1)}),P.visible=!J&&n>910&&e==="explorer",D&&F&&U){const Z=ft.smoothstep(n,910,940),rt=ft.smoothstep(n,938,1e3);D.material.opacity=Z*Math.pow(1-rt,1.7)*.34;const at=D.geometry.attributes.position.array,Wt=D.geometry.attributes.color.array,nt=1+rt*1.8;for(let pt=0;pt<F.length;pt+=3)at[pt]=F[pt]*nt,at[pt+1]=F[pt+1]*nt,at[pt+2]=F[pt+2]*nt,Wt[pt]=U[pt]*(1-rt*.55)+rt*.06,Wt[pt+1]=U[pt+1]*(1-rt*.88),Wt[pt+2]=U[pt+2]*(1-rt*.96);D.geometry.attributes.position.needsUpdate=!0,D.geometry.attributes.color.needsUpdate=!0}if(L.visible=J&&q>0&&e==="explorer",L.visible&&N&&k)if(O.type==="vacuum-decay"){const Z=.18+Math.pow(q,.58)*36;N.visible=!0,N.scale.setScalar(Z),N.material.opacity=Math.sin(Math.min(.98,q)*Math.PI)*.18+.035,k.position.copy(N.position),k.material.opacity=(1-q)*.42,k.scale.setScalar(1.2+q*5.5)}else{N.visible=!1,k.position.set(0,0,0),k.material.opacity=O.type==="big-crunch"?Math.pow(q,2.4)*.92:Math.sin(q*Math.PI)*.28;const Z=O.type==="big-crunch"?.4+(1-q)*8:3+q*28;k.scale.setScalar(Z)}}function r_(n,t){const{mode:e,cosmicEvents:i,cosmicEventGroup:s}=t;let r=null,a=!1;return i.forEach(o=>{const h=(n-o.start)/o.duration,l=h>=0&&h<=1,d=o.visual==="black-hole-merger"?mh(n,o):0,f=_h(n,o),p=Math.max(d,f),m=n>=o.impactAt&&p>0,_=(l||m)&&e==="explorer";if(o.group.visible=_,!_)return;a=!0,l&&(r=o);const y=Math.min(1,h);o.group.userData.phase=y;const c=o.group.userData.effect;if(!l&&f>0){o.visual==="kilonova"?(c.innerFlash.material.opacity=0,c.photosphere.material.opacity=0,c.ejecta.material.opacity=0,c.shell.material.opacity=0,c.polarJets&&(c.polarJets.material.opacity=0),c.gravityWave&&(c.gravityWave.material.opacity=0),c.remnant.material.opacity=f*.72):o.visual==="stellar-collapse"&&(c.starCore.material.opacity=0,c.shroud.material.opacity=0,c.dust.material.opacity=0,c.remnantHole.visible=!0,Kn(c.remnantHole,.8,f));return}if(o.visual==="supernova"||o.visual==="nova"||o.visual==="kilonova"){const u=y,b=o.visual==="nova",x=o.visual==="kilonova",g=b?.48:x?1.18:1,A=ft.smoothstep(u,0,.028),S=o.simulation?.pulsePhases?.reduce((N,k,O)=>{const J=o.simulation.pulseWeights?.[O]??1,q=Math.abs(u-k);return Math.max(N,Math.exp(-q*q*1500)*J)},0)||0,T=Math.max(A*(1-ft.smoothstep(u,.045,.19)),S),R=(1-ft.smoothstep(u,.12,1))*A;c.innerFlash.material.opacity=T*(b?.72:.98);const v=(.08+Math.pow(Math.min(1,u/.16),.28)*.72)*g;c.innerFlash.scale.set(v,v,1),c.photosphere.material.opacity=T*.58+R*.2;const M=(.16+Math.pow(u,.56)*1.15)*g;c.photosphere.scale.set(M,M*.9,1);const P=b?1:1-ft.smoothstep(u,.82,1);c.remnant.material.opacity=ft.smoothstep(u,.2,.52)*P*.72;const D=c.ejecta.geometry.attributes.position.array;for(let N=0;N<c.ejectaVelocity.length;N++){const k=ft.clamp((u-c.ejectaDelay[N])/(1-c.ejectaDelay[N]),0,1),O=.05+Math.pow(k,.58)*c.ejectaVelocity[N],J=Math.sin(k*10+N*1.73)*k*.045,q=N*3;D[q]=c.ejectaDirections[q]*O+J*c.ejectaDirections[q+1],D[q+1]=c.ejectaDirections[q+1]*O+J*c.ejectaDirections[q+2],D[q+2]=c.ejectaDirections[q+2]*O+J*c.ejectaDirections[q]}c.ejecta.geometry.attributes.position.needsUpdate=!0,c.ejecta.material.opacity=A*(1-ft.smoothstep(u,.58,1))*.86;const F=c.shell.geometry.attributes.position.array,U=b?.72+(o.simulation?.ejectaVelocityKms||1800)/1e4:x?2.15+(o.simulation?.ejectaVelocityC||.2)*3.1:2.25,L=.12+(1-Math.pow(1-u,2.4))*U;for(let N=0;N<c.shellNoise.length;N++){const k=N*3,O=1+Math.sin(c.shellNoise[N]+u*4.5)*.055+Math.sin(N*2.1)*.025;F[k]=c.shellDirections[k]*L*O,F[k+1]=c.shellDirections[k+1]*L*O,F[k+2]=c.shellDirections[k+2]*L*O}if(c.shell.geometry.attributes.position.needsUpdate=!0,c.shell.material.opacity=ft.smoothstep(u,.04,.14)*(1-ft.smoothstep(u,.5,1))*.34,c.polarJets&&(c.polarJets.material.opacity=ft.smoothstep(u,.015,.08)*(1-ft.smoothstep(u,.18,.5))*.72),c.gravityWave){const N=ft.clamp((u-o.impactPhase)/Math.max(.001,1-o.impactPhase),0,1),k=.25+Math.pow(N,.72)*7.2;c.gravityWave.scale.set(k,k,1),c.gravityWave.material.opacity=Math.pow(Math.sin(N*Math.PI),.72)*.28*(o.waveSamples?.waveAmplitude||1)}}else if(o.visual==="tidal-disruption"){const u=y,b=ft.smoothstep(u,0,.42),x=ft.smoothstep(u,.3,.62),g=ft.smoothstep(u,.4,.72),A=o.simulation?.pulsePhases?.[0]||.58,S=Math.max(0,(u-A)/Math.max(.001,1-A)),T=ft.smoothstep(u,.4,A)*Math.pow(1+S*6,o.simulation?.fallbackExponent||-5/3);c.starCore.position.set(ft.lerp(2.5,.48,b),Math.sin(b*Math.PI)*.34,ft.lerp(.34,0,b)),c.starCore.material.opacity=(1-x)*.96,c.starCore.scale.set(.28+x*.68,Math.max(.035,.28*(1-x*.88)),1),c.disk.material.opacity=T*.5,c.flare.material.opacity=T*.62;const R=.24+Math.sqrt(T)*2.5;c.flare.scale.set(R,R,1),Kn(c.hole,.62+g*.38);const v=c.debris.geometry.attributes.position.array;for(let M=0;M<c.debrisOffsets.length;M++){const P=M*3,D=c.debrisOffsets[M],F=D<0,U=F?.34+Math.abs(D)*(1.15-g*.72):.42+D*(.65+g*3.4),L=D*1.8+g*(F?6.4:1.25),N=Math.sin(c.debrisNoise[M]+g*5)*.045*(1-g*.45);v[P]=Math.cos(L)*U,v[P+1]=Math.sin(L)*U*.38+N,v[P+2]=Math.sin(L*.5+c.debrisNoise[M])*.075}c.debris.geometry.attributes.position.needsUpdate=!0,c.debris.material.opacity=x*(1-ft.smoothstep(u,.9,1))*.82}else if(o.visual==="stellar-flare"){const u=y,b=o.simulation?.pulsePhases?.reduce((v,M,P)=>{const D=o.simulation.pulseWeights?.[P]??1,F=Math.abs(u-M);return Math.max(v,Math.exp(-F*F*900)*D)},0)||0,x=Math.max(Math.pow(Math.sin(u*Math.PI),.5)*.22,b),g=.72+b*.28;c.starCore.material.opacity=.48+x*.5,c.halo.material.opacity=x*g*.32;const A=.45+x*1.25;c.halo.scale.set(A,A,1),c.shock.material.opacity=x*(1-u)*.46;const S=.25+Math.pow(u,.62)*3.4;c.shock.scale.set(S,S,1),c.loops.forEach((v,M)=>{v.material.opacity=x*(.32-M*.065)});const T=c.particles.geometry.attributes.position.array,R=ft.clamp((o.simulation?.cmeVelocityKms||2200)/2200,.55,2.2);for(let v=0;v<c.particleDirections.length/3;v++){const M=v*3,P=.18+Math.pow(u,.58)*(1.25+v%17*.045)*R;T[M]=c.particleDirections[M]*P,T[M+1]=c.particleDirections[M+1]*P,T[M+2]=c.particleDirections[M+2]*P}c.particles.geometry.attributes.position.needsUpdate=!0,c.particles.material.opacity=x*.64}else if(o.visual==="stellar-collapse"){const u=y,b=ft.smoothstep(u,.32,.68),x=ft.smoothstep(u,.04,.2)*(1-ft.smoothstep(u,.3,.52));c.starCore.material.opacity=(1-b)*(.58+x*.42);const g=Math.max(.025,.34*(1-b*.94)+x*.24);c.starCore.scale.set(g,g,1);const A=ft.clamp((o.simulation?.dustOpticalDepth||2)/8,.16,.68);c.shroud.material.opacity=ft.smoothstep(u,.18,.46)*(1-ft.smoothstep(u,.74,1))*A;const S=.32+u*1.45;c.shroud.scale.set(S,S,1);const T=c.dust.geometry.attributes.position.array,R=ft.clamp((o.simulation?.ejectedEnvelopeFraction||.08)/.08,.45,1.8);for(let v=0;v<c.dustDirections.length/3;v++){const M=v*3,P=.1+ft.smoothstep(u,.16,.82)*(.32+v%19*.018)*R;T[M]=c.dustDirections[M]*P,T[M+1]=c.dustDirections[M+1]*P,T[M+2]=c.dustDirections[M+2]*P}c.dust.geometry.attributes.position.needsUpdate=!0,c.dust.material.opacity=ft.smoothstep(u,.22,.48)*(1-ft.smoothstep(u,.82,1))*.46,c.remnantHole.visible=b>.72,c.remnantHole.visible&&Kn(c.remnantHole,.58+b*.34)}else if(o.visual==="pulsar"){const b=Math.pow(Math.sin(y*Math.PI),.45),x=o.type==="pulsar-glitch"?.22:1;c.core.material.opacity=b*.92,c.halo.material.opacity=b*.16*x,c.nebula.material.opacity=b*.095*x,c.halo.scale.set(1.05,1.05,1),c.jets.material.opacity=b*.18*x,c.fieldLines.forEach((g,A)=>{g.material.opacity=b*(.055-A*.007)*x}),o.group.userData.intensity=b}else if(o.visual==="black-hole-merger"){const u=y,b=.68,x=u>=b;c.holeA.visible=!x,c.holeB.visible=!x,c.remnantHole.visible=x&&p>0;const g=Math.min(1,u/b),A=q=>Math.PI*2*(1.15*q+4.1*Math.pow(q,3)),S=q=>.12+2.45*Math.pow(1-q,.72),T=A(g),R=S(g);c.holeA.position.set(Math.cos(T)*R,Math.sin(T)*R,Math.sin(T*.5)*.09),c.holeB.position.set(-Math.cos(T)*R,-Math.sin(T)*R,-Math.sin(T*.5)*.09);const v=(q,ct)=>{const vt=q.geometry.attributes.position.array;for(let Rt=0;Rt<84;Rt++){const Q=Math.max(0,g-(83-Rt)*(.0028+g*9e-4)),tt=A(Q),V=S(Q);vt[Rt*3]=ct*Math.cos(tt)*V,vt[Rt*3+1]=ct*Math.sin(tt)*V,vt[Rt*3+2]=ct*Math.sin(tt*.5)*.09}q.geometry.attributes.position.needsUpdate=!0,q.material.opacity=x?0:ft.smoothstep(u,.02,.22)*.34};v(c.trailA,1),v(c.trailB,-1);const M=ft.clamp((u-b)/(1-b),0,1),P=Math.exp(-M*7)*Math.sin(M*38);c.remnantHole.scale.set(1.24+P*.07,1.24-P*.045,1.24),Kn(c.holeA,.62+g*.38),Kn(c.holeB,.62+g*.38),Kn(c.remnantHole,.74+Math.exp(-M*4)*.34,p);const D=x?Math.exp(-M*18):0;c.mergerGlow.material.opacity=D*(c.gasRich?.48:.13);const F=.3+M*(c.gasRich?3.6:2.4);c.mergerGlow.scale.set(F,F,1),c.gasEcho.material.opacity=c.gasRich?ft.smoothstep(M,.02,.12)*(1-ft.smoothstep(M,.3,.92))*.34:0;const U=.35+Math.pow(M,.62)*4.2;c.gasEcho.scale.set(U,U,1),c.waveHalos.forEach((q,ct)=>{const vt=ct*.12,Rt=ft.clamp((M-vt)/(1-vt),0,1);q.visible=x&&Rt>0;const Q=.38+Math.pow(Rt,.7)*(8.8+ct*.6);q.scale.set(Q,Q,1),q.material.opacity=Math.pow(Math.sin(Rt*Math.PI),.78)*(.29-ct*.045)}),c.wavefronts.forEach((q,ct)=>{const vt=ct*.075,Rt=ft.clamp((M-vt)/(1-vt),0,1);q.visible=x&&Rt>0,q.scale.setScalar(.28+Math.pow(Rt,.72)*(7.4+ct*.34)),q.material.opacity=Math.pow(Math.sin(Rt*Math.PI),.72)*.19*(1-ct*.08)});const L=c.waveDust.geometry.attributes.position.array,N=.22+Math.pow(M,.72)*8.6;for(let q=0;q<c.waveDirections.length/3;q++){const ct=q*3,vt=c.waveDirections[ct],Rt=c.waveDirections[ct+1],Q=c.waveDirections[ct+2],tt=1+(vt*vt-Q*Q)*.085*Math.sin(M*Math.PI*5);L[ct]=vt*N*tt,L[ct+1]=Rt*N*tt,L[ct+2]=Q*N*tt}c.waveDust.geometry.attributes.position.needsUpdate=!0,c.waveDust.material.opacity=x?Math.pow(Math.sin(M*Math.PI),.62)*.5:0;const O=ft.smoothstep(M,.08,1)*.68;c.remnantHole.position.copy(c.recoilVector).multiplyScalar(O);const J=c.recoilTrail.geometry.attributes.position.array;J[0]=0,J[1]=0,J[2]=0,J[3]=c.remnantHole.position.x,J[4]=c.remnantHole.position.y,J[5]=c.remnantHole.position.z,c.recoilTrail.geometry.attributes.position.needsUpdate=!0,c.recoilTrail.material.opacity=x?(1-M*.72)*.28*p:0}}),s.visible=a,r}function a_(n,t){const{cosmicEventGroup:e,prefersReducedMotion:i,cosmicEvents:s,camera:r}=t;!e.visible||i||s.forEach(a=>{if(!a.group.visible)return;a.group.userData.phase;const o=a.group.userData.effect;if(a.visual==="supernova"||a.visual==="nova"||a.visual==="kilonova")o.innerFlash.material.rotation=n*7e-5,o.photosphere.material.rotation=-n*35e-6,o.ejecta.rotation.y=Math.sin(n*21e-5)*.035;else if(a.visual==="tidal-disruption")o.disk.material.rotation=n*.0014,o.debris.rotation.y=Math.sin(n*17e-5)*.08,Zi(o.hole,n,o.hole.userData.spinDirection);else if(a.visual==="stellar-flare")o.loops.forEach((h,l)=>{h.rotation.z=Math.sin(n*9e-4+l)*.16}),o.particles.rotation.y=n*22e-5;else if(a.visual==="stellar-collapse")o.remnantHole.visible&&Zi(o.remnantHole,n,o.remnantHole.userData.spinDirection);else if(a.visual==="pulsar"){o.rotor.rotation.y=n*.0024;const h=new ri,l=new B,d=new B(0,1,0);o.rotor.getWorldQuaternion(h),a.group.getWorldPosition(l),d.applyQuaternion(h).normalize();const f=r.position.clone().sub(l).normalize(),p=Math.pow(Math.abs(d.dot(f)),14),m=.52+Math.pow(Math.max(0,Math.sin(n*.012)),10)*.48,_=a.type==="pulsar-glitch"?.16:1;o.jets.material.opacity=a.group.userData.intensity*(.34+p*.58)*m*_,o.sweepGlow.material.opacity=a.group.userData.intensity*p*m*.78*_;const y=.5+p*1.8;o.sweepGlow.scale.set(y,y,1),o.knots.forEach(c=>{const u=(n*55e-5+c.userData.offset)%1;c.position.set(0,c.userData.side*(.18+u*2.45),0),c.material.opacity=a.group.userData.intensity*Math.sin(u*Math.PI)*(.12+p*.55)*_}),o.fieldLines.forEach((c,u)=>{c.rotation.y+=.006+u*.001})}else a.visual==="black-hole-merger"&&(Zi(o.holeA,n,o.holeA.userData.spinDirection),Zi(o.holeB,n,o.holeB.userData.spinDirection),Zi(o.remnantHole,n,o.remnantHole.userData.spinDirection))})}function o_({universe:n,civilizationData:t,civilizationSimulation:e,cosmicEvents:i}){if(!e||t.length===0)return;const s=e,r=hn(n.seed,9241),a=s.habitatRemnantIndices.length,o=t.length,h=6;for(let U=0;U<a;U++){const L=[],N=U*3;for(let k=0;k<a;k++){if(k===U)continue;const O=k*3,J=Math.hypot(s.habitatPositions[N]-s.habitatPositions[O],s.habitatPositions[N+1]-s.habitatPositions[O+1],s.habitatPositions[N+2]-s.habitatPositions[O+2]);(L.length<h||J<L[L.length-1].distance)&&(L.push({node:k,distance:J}),L.sort((q,ct)=>q.distance-ct.distance),L.length>h&&L.pop())}s.adjacency[U]=Uint16Array.from(L.map(k=>k.node))}const l=new Int16Array(a);l.fill(-1);const d=new Float32Array(a),f=new Uint8Array(o),p=new Float32Array(o*o),m=new Int8Array(o*o),_=new Int16Array(a);_.fill(-1),t.forEach((U,L)=>{_[U.homeNodeIndex]=L});const y=new Uint16Array(o),c=Array(o).fill("自主扩张"),u=new Uint8Array(a),b=n.cosmicFate?.type!=="heat-death",x=b?n.cosmicFate.onsetAt:620,g=b?1e3:710,A=b?n.cosmicFate.label:"恒星能源枯竭",S=i.slice().sort((U,L)=>U.impactAt-L.impactAt),T=new Map(S.map(U=>[U,new Map])),R=S.flatMap(U=>(U.civilizationImpacts=[],(U.civilizationNodeImpacts||[]).map(L=>({event:U,impact:L})))).sort((U,L)=>U.impact.at-L.impact.at||U.impact.nodeIndex-L.impact.nodeIndex),v=(U,L)=>U*o+L;for(let U=0;U<o;U++)for(let L=U+1;L<o;L++){const N=t[U],k=t[L],O=(N.cooperation+k.cooperation)*.28-(N.aggression+k.aggression)*.24+St(r,-.16,.16);p[v(U,L)]=O,p[v(L,U)]=O}const M=(U,L,N,k)=>{p[v(U,L)]=N,p[v(L,U)]=N,m[v(U,L)]=k,m[v(L,U)]=k},P=U=>{let L=0;for(let N=0;N<a;N++)l[N]===U&&L++;return L},D=(U,L,N)=>{const{nodeIndex:k,severity:O,permanent:J,destructionRoll:q,kind:ct="damage"}=L;J&&(u[k]=1);const vt=l[k];if(vt<0)return;const Rt=t[vt];if(Rt.highDimensional&&N>=Rt.ascensionAt)return;if(ct==="recovery"){u[k]||(d[k]=Math.min(1.35,d[k]+O),c[vt]=`${U.label} 后恢复`);return}const Q=T.get(U);let tt=Q.get(vt);tt||(tt={initialCount:P(vt),affectedNodes:new Set,lostNodes:new Set,weakenedNodes:new Set,effectiveLoss:0,collapse:!1},Q.set(vt,tt)),tt.affectedNodes.add(k);const V=ft.clamp(O*.62/Math.max(.65,Rt.resilience),0,.9);if(J||q<V)l[k]=-1,d[k]=0,tt.lostNodes.add(k),tt.weakenedNodes.delete(k),tt.effectiveLoss+=1;else{const it=O*.46;d[k]*=Math.max(.18,1-it),tt.lostNodes.has(k)||tt.weakenedNodes.add(k),tt.effectiveLoss+=it}tt.collapse||=P(vt)===0,c[vt]=U.label};let F=0;for(;F<R.length&&R[F].impact.at<s.start;){const{impact:U}=R[F];U.kind!=="recovery"&&U.permanent&&(u[U.nodeIndex]=1),F++}for(let U=s.start;U<=s.end;U+=s.step){for(t.forEach((Q,tt)=>{if(!(f[tt]||U<Q.birth)){if(f[tt]=1,u[Q.homeNodeIndex]){c[tt]="母星在文明诞生前失去宜居条件";return}l[Q.homeNodeIndex]=tt,d[Q.homeNodeIndex]=.34,c[tt]="母星文明进入星际阶段"}});F<R.length&&R[F].impact.at<=U;){const{event:Q,impact:tt}=R[F];D(Q,tt,U),F++}const L=new Uint8Array(o),N=new Uint8Array(o);for(let Q=0;Q<o;Q++)for(let tt=Q+1;tt<o;tt++){const V=m[v(Q,tt)];V>0&&(L[Q]++,L[tt]++),V<0&&(N[Q]++,N[tt]++)}for(let Q=0;Q<a;Q++){const tt=l[Q];if(tt<0)continue;const V=t[tt],X=1+L[tt]*.045-N[tt]*.028;d[Q]+=(.032+V.resilience*.018)*X*(1-d[Q]),d[Q]=ft.clamp(d[Q],0,1.35)}const k=new Uint8Array(o*o);for(let Q=0;Q<a;Q++){const tt=l[Q];tt<0||s.adjacency[Q].forEach(V=>{const X=l[V];X<0||X===tt||(k[v(tt,X)]=1,k[v(X,tt)]=1)})}for(let Q=0;Q<o;Q++)for(let tt=Q+1;tt<o;tt++){let V=p[v(Q,tt)],X=m[v(Q,tt)];if(k[v(Q,tt)]){const it=t[Q],_t=t[tt];V+=(it.cooperation+_t.cooperation-1)*.026,V-=(it.aggression+_t.aggression-.82)*.023,V+=St(r,-.012,.012),X===0&&V>.3&&(X=1),X===0&&V<-.26&&(X=-1),X===1&&V<.08&&(X=0),X===-1&&V>-.04&&(X=0)}else V*=.992,X===1&&V<.1&&(X=0),X===-1&&V>-.08&&(X=0);M(Q,tt,ft.clamp(V,-.95,.95),X)}const O=Array.from({length:o},()=>[]);for(let Q=0;Q<a;Q++)l[Q]>=0&&O[l[Q]].push(Q);if(t.forEach((Q,tt)=>{const V=O[tt];if(!f[tt]||V.length===0||U>=650)return;const X=1+Math.floor(Q.expansionRate+L[tt]*.34);for(let it=0;it<X;it++){const _t=[];if(V.forEach(Qt=>{s.adjacency[Qt].forEach(Z=>{!u[Z]&&l[Z]!==tt&&_t.push([Qt,Z])})}),_t.length===0)break;const[mt,Pt]=_t[Math.floor(r()*_t.length)],Jt=l[Pt];if(Jt<0){if(_[Pt]>=0&&_[Pt]!==tt&&!f[_[Pt]])continue;r()<.18+Q.expansionRate*.19+L[tt]*.025&&(l[Pt]=tt,d[Pt]=Math.max(.14,d[mt]*.34),V.push(Pt),c[tt]=L[tt]>0?"协作网络推动殖民":"殖民前沿扩张");continue}const I=m[v(tt,Jt)];if(I>0){d[mt]=Math.min(1.35,d[mt]+.018),d[Pt]=Math.min(1.35,d[Pt]+.012),c[tt]=`与${t[Jt].name}交流`,c[Jt]=`与${Q.name}交流`;continue}if(I<0){const Qt=d[mt]*(.72+Q.aggression*.76+r()*.35),Z=d[Pt]*(.84+t[Jt].resilience*.52+r()*.28);Qt>Z?(l[Pt]=tt,d[Pt]=Math.max(.08,Math.min(.48,(Qt-Z)*.5)),c[tt]=`与${t[Jt].name}争夺边界`,c[Jt]=`边界被${Q.name}突破`):(d[mt]*=.84,d[Pt]*=.92,c[tt]=`对${t[Jt].name}的进攻受挫`)}else if(r()<Q.aggression*.035){const Qt=p[v(tt,Jt)]-.055;M(tt,Jt,Qt,Qt<-.26?-1:0)}}}),U>=x){const Q=ft.smoothstep(U,x,g);for(let tt=0;tt<a;tt++){const V=l[tt];V<0||t[V].highDimensional&&U>=t[V].ascensionAt||(d[tt]-=.004+Q*.052,(d[tt]<=.035||U>=g)&&(l[tt]=-1,d[tt]=0,c[V]=A))}}const J=new Uint16Array(o),q=new Float32Array(o);for(let Q=0;Q<a;Q++){const tt=l[Q];tt<0||(J[tt]++,q[tt]+=d[Q])}const ct=new Int8Array(o),vt=new Uint8Array(o),Rt=new Uint8Array(o);for(let Q=0;Q<o;Q++)ct[Q]=Math.sign(J[Q]-y[Q]),vt[Q]=f[Q]&&J[Q]>0?1:0,Rt[Q]=t[Q].highDimensional&&U>=t[Q].ascensionAt?1:0,y[Q]=J[Q];s.snapshots.push({time:U,owners:l.slice(),counts:J,populations:q,trends:ct,active:vt,ascended:Rt,relations:m.slice(),relationScores:p.slice(),causes:c.slice()})}S.forEach(U=>{const L=Array.from(T.get(U).entries()).map(([k,O])=>({speciesIndex:k,lossFraction:ft.clamp(O.effectiveLoss/Math.max(1,O.initialCount),0,1),collapse:O.collapse,affectedDomains:O.affectedNodes.size,lostDomains:O.lostNodes.size,weakenedDomains:O.weakenedNodes.size}));U.civilizationImpacts=L;const N=L.length?L.map(k=>{const O=t[k.speciesIndex].name;return k.collapse?`${O} 灭绝`:k.lostDomains>0?k.weakenedDomains>0?`${O} 损失 ${k.lostDomains} 个疆域，另有 ${k.weakenedDomains} 个受损`:`${O} 损失 ${k.lostDomains} 个疆域`:`${O} 的 ${k.weakenedDomains} 个疆域受损`}).join("，"):"未波及当时存在的文明疆域";U.outcome=`${U.systemOutcome}；${N}`})}function l_(n,t){if(!n?.snapshots.length)return null;const e=n,i=ft.clamp(Math.floor((t-e.start)/e.step),0,e.snapshots.length-1);return e.snapshots[i]}function c_(n,t,e,i){let s=1,r=1/0;const a=[],o=e[t];return i.forEach(h=>{if(n<h.impactAt||o?.highDimensional&&h.impactAt>=o.ascensionAt)return;const l=h.civilizationImpacts.find(d=>d.speciesIndex===t);l&&(s*=1-l.lossFraction,l.collapse&&(r=Math.min(r,h.impactAt)),a.push(h.label))}),{capacityFactor:s,collapsedAt:r,lossFraction:1-s,causes:a}}function h_(n,t,e,i){return e.map((s,r)=>{const a=c_(n,r,e,i),o=!!t?.active[r],h=!!t?.ascended[r]&&o,l=[],d=[];return e.forEach((f,p)=>{if(p===r||!t?.active[p])return;const m=t.relations[r*e.length+p];m>0&&l.push(f.name),m<0&&d.push(f.name)}),{alive:o,ascended:h,count:t?.counts[r]||0,trend:t?.trends[r]||0,eventState:a,friendlyNames:l,conflictNames:d}})}function u_(n,t,e){if(!n)return null;let i=null,s=-1;for(let r=0;r<e;r++)for(let a=r+1;a<e;a++){const o=t[r],h=t[a];if(!o?.alive||!h?.alive||o.ascended||h.ascended)continue;const l=n.relations[r*e+a];if(l===0)continue;const f=Math.abs(n.relationScores[r*e+a])+(l<0?2:0);f<=s||(s=f,i={speciesA:r,speciesB:a,relationship:l<0?"conflict":"coexistence"})}return i}const ie=n=>document.querySelector(n);function xh(n){const t=n.cosmicFate;ie("#universe-id").textContent=`#${n.seed}`,ie("#explore-id").textContent=`#${n.seed}`,ie("#speed-value").textContent=`${n.speed.toFixed(2)} × 现实宇宙`,ie("#gravity-value").textContent=`${n.gravity.toFixed(2)} × 现实宇宙`,ie("#fine-structure-value").textContent=`${n.fineStructure.toFixed(3)} × 现实宇宙`,ie("#mass-ratio-value").textContent=`${n.massRatio.toFixed(3)} × 现实宇宙`,ie("#expansion-value").textContent=`${n.expansionRate.toFixed(2)} × 现实宇宙`,ie("#dark-energy-value").textContent=`${(n.darkEnergyDensity*100).toFixed(1)}%`,ie("#fluctuation-value").textContent=`${n.primordialFluctuation.toFixed(2)} × 现实宇宙`,ie("#cmb-value").textContent=`${n.cmbTemperature.toFixed(2)} K`,ie("#elements-value").textContent=`${n.elements} 种`,ie("#stars-value").textContent=H0(n.stars),ie("#life-probability-value").textContent=z0(n.lifeProbability),ie("#civilizations-value").textContent=k0(n.civilizations),ie("#galaxy-type-value").textContent=To[n.galaxyType],ie("#arm-count-value").textContent=B0(n.galaxyType,n.armCount),ie("#black-hole-value").textContent=n.hasCentralBlackHole?"存在":"未形成",ie("#nucleus-value").textContent=n.hasCentralBlackHole?n.activeNucleus?"活动 · 吸积中":"宁静":"不适用",ie("#stellar-window-value").textContent=t.outcomeExponent<=n.lastStarDeathExponent?"结局前未抵达":`约 10^${n.lastStarDeathExponent.toFixed(1)} 年`,ie("#galaxy-hue-value").textContent=O0(n.hue),ie("#evaporation-value").textContent=t.outcomeExponent<n.blackHoleEvaporationExponent?"结局前未抵达":`约 10^${n.blackHoleEvaporationExponent} 年`,ie("#dark-energy-model-value").textContent=t.modelLabel,ie("#dark-energy-model-value").title=t.modelDescription,ie("#dark-energy-eos-value").textContent=`w₀ ${t.w0.toFixed(2)} · wₐ ${t.wa.toFixed(2)}`,ie("#vacuum-value").textContent=L0(t),ie("#lifetime-value").textContent=`${t.label} · ${D0(t)}`,ie("#timeline-stellar-label").textContent=t.outcomeExponent<=n.lastStarDeathExponent?"暗能量分流":"恒星熄灭",ie("#timeline-late-label").textContent=t.type==="heat-death"?"黑洞时代":"临界阶段",ie("#timeline-final-label").textContent=t.shortLabel,ie("#cosmic-timeline").setAttribute("aria-label",`从大爆炸到${t.label}的宇宙时间`),ie("#universe-note").textContent=fc[n.seedValue%fc.length],ie("#galaxy-name").textContent=`${pc[n.seedValue%pc.length]}星系`;const e=(8+n.stars*4.7).toFixed(1);ie("#galaxy-meta").textContent=`${To[n.galaxyType]} · 直径 ${e} 万光年`}const Je=n=>document.querySelector(n);let bc="",Tc=null;function d_(n){Je("#cosmic-timeline").value=n.position,Je("#time-progress").style.width=`${n.position/10}%`,Je("#timeline-value").textContent=n.label,Je("#era-number").textContent=String(n.eraIndex+1).padStart(2,"0"),Je("#era-name").textContent=n.era.name,Je("#cosmic-time").textContent=n.label.replace("T+",""),Je("#era-description").textContent=n.era.description,Je(".explorer-title").style.setProperty("--cosmic-opacity",n.galaxyIdentityOpacity.toFixed(3))}function f_({position:n,simulationState:t,runtimeState:e,civilizationData:i}){e.forEach((a,o)=>{const h=i[o],l=document.querySelector(`[data-species="${o}"]`);if(!l)return;l.style.opacity=a.alive?"1":".18",l.classList.toggle("is-impacted",a.alive&&a.eventState.causes.length>0),l.classList.toggle("is-ascended",a.ascended);const d=[];t?.causes[o]&&d.push(t.causes[o]),a.friendlyNames.length&&d.push(`与 ${a.friendlyNames.join("、")} 友好交流`),a.conflictNames.length&&d.push(`与 ${a.conflictNames.join("、")} 冲突`),a.eventState.causes.length&&d.push(`受 ${a.eventState.causes.join("、")} 影响`),l.title=a.ascended?"1% 概率的高维转化：已脱离普通物质宿主":d.join("；"),l.querySelector("b").textContent=a.alive?a.ascended?"超维存续":`${a.count} 域${a.trend>0?" ↑":a.trend<0?" ↓":""}`:n<h.birth?"未诞生":"衰亡"});const s=e.filter(a=>a.alive).length,r=e.reduce((a,o)=>a+(o.alive&&!o.ascended?o.count:0),0);Je("#civilization-panel").style.setProperty("--cosmic-opacity",s>0?"1":"0"),Je("#civilization-summary").textContent=s>0?`${s} 种 · ${r} 域`:"尚未出现"}function p_(n,t=!1){if(n.key===bc&&!t)return;bc=n.key,Je("#event-year").textContent=n.time,Je("#event-text").textContent=n.text;const e=Je("#event-feed");e.classList.remove("is-visible"),requestAnimationFrame(()=>e.classList.add("is-visible")),clearTimeout(Tc),Tc=setTimeout(()=>e.classList.remove("is-visible"),3200)}let wo=null;const m_=n=>document.querySelector(n);function g_(){wo=null}function __(n,t){if(!n||n===wo)return;wo=n;const e=m_("#civilization-legend"),i=t.length,s=new Map([...e.querySelectorAll(".civilization-item")].map(x=>[Number(x.dataset.species),x]));e.replaceChildren();const r=Int16Array.from({length:i},(x,g)=>g),a=x=>{let g=x;for(;r[g]!==g;)g=r[g];for(;r[x]!==x;){const A=r[x];r[x]=g,x=A}return g},o=(x,g)=>{const A=a(x),S=a(g);A!==S&&(r[Math.max(A,S)]=Math.min(A,S))};for(let x=0;x<i;x++)if(!(!n.active[x]||n.ascended[x]))for(let g=x+1;g<i;g++){if(!n.active[g]||n.ascended[g])continue;const A=x*i+g;n.relations[A]>0&&n.relationScores[A]>=.52&&o(x,g)}const h=new Map,l=[],d=[];for(let x=0;x<i;x++){if(!n.active[x]){l.push(x);continue}if(n.ascended[x]){d.push(x);continue}const g=a(x);h.has(g)||h.set(g,[]),h.get(g).push(x)}const f=[...h.values()],p=x=>x.reduce((g,A)=>g+n.counts[A],0),m=(x,g)=>{let A={kind:"neutral",state:0,strength:0};return x.forEach(S=>g.forEach(T=>{const R=S*i+T,v=n.relations[R],M=Math.abs(n.relationScores[R]);v!==0&&M>A.strength&&(A={kind:v<0?"conflict":"friendly",state:v,strength:M})})),A};f.sort((x,g)=>p(g)-p(x));const _=f.length?[f.shift()]:[];for(;f.length;){const x=_[_.length-1];let g=0,A=-1;f.forEach((S,T)=>{const R=m(x,S).strength;R>A&&(A=R,g=T)}),_.push(f.splice(g,1)[0])}const y={conflict:'<svg viewBox="0 0 16 16" aria-hidden="true"><path d="M3 3l10 10M13 3L3 13"/><path d="M2 5l3-3M11 14l3-3"/></svg>',friendly:'<svg viewBox="0 0 16 16" aria-hidden="true"><circle cx="6" cy="8" r="3.5"/><circle cx="10" cy="8" r="3.5"/></svg>',neutral:'<svg viewBox="0 0 16 16" aria-hidden="true"><path d="M2.5 8h3M10.5 8h3"/><circle cx="8" cy="8" r="1.25"/></svg>'},c=x=>x==="conflict"?"冲突":x==="friendly"?"友好":"中立",u=x=>{const g=x.slice().sort((A,S)=>n.counts[S]-n.counts[A])[0];return`#${t[g].color.toString(16).padStart(6,"0")}`},b=_.map((x,g)=>({members:x,number:String(g+1).padStart(2,"0"),accent:u(x)}));if(b.forEach((x,g)=>{const A=document.createElement("section");A.className="faction-block",A.style.setProperty("--faction",x.accent),A.setAttribute("aria-label",`阵营 ${x.number}`);const S=document.createElement("div");S.className="faction-header";const T=document.createElement("span");T.className="faction-identity",T.textContent=x.number,T.setAttribute("aria-hidden","true"),S.appendChild(T);const R=document.createElement("div");R.className="faction-relations";const v={conflict:[],friendly:[],neutral:[]};b.forEach((P,D)=>{if(D===g)return;const F=m(x.members,P.members);v[F.kind].push(P)}),["conflict","friendly","neutral"].forEach(P=>{const D=v[P];if(!D.length)return;const F=document.createElement("span");F.className=`faction-relation is-${P}`;const U=`阵营 ${x.number}${c(P)}：阵营 ${D.map(L=>L.number).join("、")}`;F.setAttribute("role","img"),F.setAttribute("aria-label",U),F.title=U,F.innerHTML=`${y[P]}<span>${D.map(L=>`<b style="--target-faction:${L.accent}">${L.number}</b>`).join("")}</span>`,R.appendChild(F)}),S.appendChild(R),A.appendChild(S);const M=document.createElement("div");M.className="faction-members",x.members.slice().sort((P,D)=>n.counts[D]-n.counts[P]||P-D).forEach(P=>{const D=s.get(P);D&&M.appendChild(D)}),A.appendChild(M),e.appendChild(A)}),d.length){const x=document.createElement("section");x.className="faction-block is-transcendent",x.setAttribute("aria-label","升维种群"),x.innerHTML='<div class="faction-header"><span class="faction-identity" aria-hidden="true">◇</span></div>';const g=document.createElement("div");g.className="faction-members",d.forEach(A=>{const S=s.get(A);S&&g.appendChild(S)}),x.appendChild(g),e.appendChild(x)}if(l.length){const x=document.createElement("div");x.className="faction-inactive",l.forEach(g=>{const A=s.get(g);A&&x.appendChild(A)}),e.appendChild(x)}}const Ot=n=>document.querySelector(n),Jo=Ot("#universe"),Jn=window.matchMedia("(prefers-reduced-motion: reduce)").matches,Cn=new r0({canvas:Jo,antialias:!0,alpha:!1,powerPreference:"high-performance"});Cn.setPixelRatio(Math.min(devicePixelRatio,2));Cn.setSize(innerWidth,innerHeight);Cn.setClearColor(328968,1);Cn.outputColorSpace=Ie;Cn.toneMapping=Lc;Cn.toneMappingExposure=1.15;const qr=new cd;qr.fog=new Wo(328968,.018);const yn=new on(42,innerWidth/innerHeight,.1,200);yn.position.set(0,.5,32);const un=new o0(yn,Jo);un.enableDamping=!0;un.dampingFactor=.045;un.enablePan=!1;un.minDistance=8;un.maxDistance=46;un.autoRotate=!1;un.enabled=!1;let be=new Ge,Ce=new Ge,An=new Ge,ti=new Ge,wi=new Ge,bi=new Ge,ii=new Ge;qr.add(be,Ce,An,ti,wi,bi,ii);let Ut=null,dn="generator",He=null,ss=new Ht(0,0),br=new Ht(0,0),Ro=new Md;Ro.params.Points.threshold=.12;let us=null,Fs=[],sn=[],gi=[],rn=null,Br=[],Co=null,Ts=null,Po=null,Do=null,Ji=null,Dr=null,vh=[],Ns=null,rs=null,Rs=null,Mh=null,yh=null,zr=null,Lo=null,Sh=null,es=null,Io=null,an=null,_n=null,Te=0,Rn=!1,Eh=1,Ac=performance.now(),Ri=[];function _i(n){n.traverse(t=>{t.geometry&&t.geometry.dispose(),t.material&&(Array.isArray(t.material)?t.material:[t.material]).forEach(i=>i.dispose())}),n.clear()}function bh(){_i(be);const n=hn(Ut.seed),t=Math.min(10500,Math.floor(5200+Ut.stars*900)),e=new Float32Array(t*3),i=new Float32Array(t*3),s=new Float32Array(t),r=new zt().setHSL(Ut.hue,.55,.66),a=new zt(16767402);for(let m=0;m<t;m++){const _=Math.pow(n(),.56)*9.2,y=n()*Math.PI*2,c=Math.acos(2*n()-1),u=Math.sin(y*Ut.armCount+_)*.48;e[m*3]=_*Math.sin(c)*Math.cos(y)+u,e[m*3+1]=_*Math.cos(c)*.82,e[m*3+2]=_*Math.sin(c)*Math.sin(y);const b=r.clone().lerp(a,Math.pow(n(),2.3)),x=.45+n()*.7;i[m*3]=b.r*x,i[m*3+1]=b.g*x,i[m*3+2]=b.b*x,s[m]=n()}const o=new ne;o.setAttribute("position",new te(e,3)),o.setAttribute("color",new te(i,3)),o.setAttribute("aSize",new te(s,1));const h=new Ye({size:.065,map:Re(),alphaTest:.015,vertexColors:!0,transparent:!0,opacity:.86,depthWrite:!1,blending:Ft}),l=new Qe(o,h);be.add(l);const d=new qo(9.9,3),f=new Xo(new md(d),new bn({color:12175324,transparent:!0,opacity:.032}));be.add(f);const p=new cn(new $o(10.7,.007,3,220),new Hs({color:14221151,transparent:!0,opacity:.25}));p.rotation.set(1.24,.18,.4),be.add(p),be.rotation.set(.15,-.3,-.08),be.scale.setScalar(.01),He={type:"birth",start:performance.now(),duration:Jn?1:1300}}function Th(){_i(Ce),_i(An),_i(ti),_i(wi),_i(bi),_i(ii),Fs=[],sn=[],gi=[],rn=null;const n=hn(Ut.seed,91),t=17e3,e=new Float32Array(t*3),i=new Float32Array(t*3);Io=new Float32Array(t);const s=new zt(16770996),r=new zt().setHSL(Ut.hue,.65,.56),a=hh(Ut),o=Math.min(a,lh(4e10,Ut)),h=Array.from({length:4+Ut.seedValue%3},(y,c)=>({x:St(n,-8,8)+c*.35,y:St(n,-.6,.6),z:St(n,-6,6),spread:St(n,1.1,3.1)}));for(let y=0;y<t;y++){let c=0,u=0,b=0;if(Ut.galaxyType===0){const S=n();if(S<.2)c=se(n)*3.7,b=se(n)*.42,u=se(n)*.18;else if(S<.29)c=se(n)*1.7,b=se(n)*1.7,u=se(n)*.65;else{const T=3+Math.pow(n(),.72)*11,v=y%2*Math.PI+(T-3)*.46+se(n)*(.12+T*.012),M=se(n)*(.18+T*.025);c=Math.cos(v)*T+M,b=Math.sin(v)*T+M,u=se(n)*(.12+T*.018)}}else if(Ut.galaxyType===1){const S=7+Ut.seedValue%5,T=Math.pow(n(),.68)*14,R=y%S,v=R/S*Math.PI*2+T*.31+se(n)*(.26+T*.018),M=1+Math.sin(T*2.7+R*1.9)*.11;c=Math.cos(v)*T*M+se(n)*.25,b=Math.sin(v)*T*M+se(n)*.25,u=se(n)*(.18+T*.028)}else if(Ut.galaxyType===2){const S=n(),T=n()*Math.PI*2;let R;S<.72?R=8.4+se(n)*.78:S<.9?R=Math.abs(se(n))*2.1:R=4+n()*8,c=Math.cos(T)*R*1.15+se(n)*.13,b=Math.sin(T)*R+se(n)*.13,u=se(n)*(.18+R*.012)}else if(Ut.galaxyType===3){const S=Math.pow(n(),.38);c=se(n)*5.5*S,u=se(n)*2.35*S,b=se(n)*3.75*S;const T=Math.hypot(c,u,b);if(T>13.5){const R=13.5/T;c*=R,u*=R,b*=R}}else if(n()<.13){const S=St(n,-12,12);c=S,b=Math.sin(S*.24)*2.7+se(n)*.7,u=se(n)*.55}else{const S=h[Math.floor(n()*h.length)];c=S.x+se(n)*S.spread,u=S.y+se(n)*S.spread*.38,b=S.z+se(n)*S.spread*.72}e[y*3]=c,e[y*3+1]=u,e[y*3+2]=b;const x=Math.hypot(c,u,b),g=s.clone().lerp(r,Math.min(1,x/12)),A=.55+n()*.85;i[y*3]=g.r*A,i[y*3+1]=g.g*A,i[y*3+2]=g.b*A,Io[y]=o+Math.pow(n(),1.9)*(a-o)}Lo=e.slice(),Sh=i.slice(),es=j0(Lo,Ut);const l=new ne;l.setAttribute("position",new te(e,3)),l.setAttribute("color",new te(i,3));const d=new Qe(l,new Ye({size:.09,map:Re(),alphaTest:.015,vertexColors:!0,transparent:!0,opacity:.9,depthWrite:!1,blending:Ft}));Ce.add(d),us=d;const p=[{scale:4.3,opacity:.32},{scale:3.25,opacity:.22},{scale:1.55,opacity:.055},{scale:6.4,opacity:.46},{scale:1.2,opacity:.035}][Ut.galaxyType],m=new le(new ae({map:ke(),color:16768164,transparent:!0,opacity:0,depthWrite:!1,blending:Ft}));if(m.scale.set(p.scale,p.scale,1),m.userData.isCoreGlow=!0,m.userData.profile=p,Ce.add(m),Ut.activeNucleus){const y=new le(new ae({map:ke(),color:14281983,transparent:!0,opacity:0,depthWrite:!1,blending:Ft}));y.scale.set(.72,.72,1),y.userData.isAgnGlow=!0,Ce.add(y);const c=new ne().setFromPoints([new B(0,-2.6,0),new B(0,2.6,0)]),u=new yi(c,new bn({color:11065599,transparent:!0,opacity:0,depthWrite:!1,blending:Ft}));u.rotation.z=.3,u.userData.isAgnJet=!0,Ce.add(u)}const _=[.72,.92,.62,.35,.78];Ce.rotation.set(_[Ut.galaxyType],-.25+Ut.galaxyType*.06,.06),Ce.visible=!1,x_(e),y_(),v_(e),o_({universe:Ut,civilizationData:sn,civilizationSimulation:rn,cosmicEvents:Ri}),M_()}function x_(n){const t=hn(Ut.seed,771);Br=[];const e=4800,i=new Float32Array(e*3),s=new Float32Array(e*3);Ts=new Float32Array(e*3),Po=new Float32Array(e);const r=new zt(16777215),a=new zt(16739624);for(let S=0;S<e;S++){const T=t()*Math.PI*2,R=St(t,-1,1),v=Math.sqrt(1-R*R),M=Math.cbrt(t());Ts[S*3]=Math.cos(T)*v*M,Ts[S*3+1]=R*M,Ts[S*3+2]=Math.sin(T)*v*M,Po[S]=ft.clamp(1+se(t)*.035*Ut.primordialFluctuation,.82,1.18);const P=r.clone().lerp(a,Math.pow(t(),.7));s[S*3]=P.r,s[S*3+1]=P.g,s[S*3+2]=P.b}const o=new ne;o.setAttribute("position",new te(i,3)),o.setAttribute("color",new te(s,3)),Co=new Qe(o,new Ye({size:.24,map:Re(),alphaTest:.012,vertexColors:!0,transparent:!0,opacity:1,depthWrite:!1,blending:Ft})),An.add(Co);const h=340,l=new Float32Array(h*6);Ji=new Float32Array(h*4);for(let S=0;S<h;S++){const T=t()*Math.PI*2,R=Math.acos(2*t()-1);Ji[S*4]=Math.sin(R)*Math.cos(T),Ji[S*4+1]=Math.cos(R),Ji[S*4+2]=Math.sin(R)*Math.sin(T),Ji[S*4+3]=.45+t()*.75}const d=new ne;d.setAttribute("position",new te(l,3)),Do=new Xo(d,new bn({color:16762253,transparent:!0,opacity:.8,blending:Ft,depthWrite:!1})),An.add(Do),Dr=new le(new ae({map:ke(),color:16777215,transparent:!0,opacity:1,depthTest:!1,depthWrite:!1,blending:Ft})),Dr.scale.setScalar(.2),An.add(Dr),vh=[16774367,16751444,8962047].map((S,T)=>{const R=new le(new ae({map:Ki(),color:S,transparent:!0,opacity:0,depthTest:!1,depthWrite:!1,blending:Ft}));return R.userData.offset=T*.13,An.add(R),R});const f=1350,p=new Float32Array(f*3),m=new Float32Array(f*3);an=new Float32Array(f*3),_n={sourceIndices:new Uint16Array(f),axes:new Float32Array(f*3),orbitRates:new Float32Array(f),escapeAt:new Float32Array(f),speeds:new Float32Array(f),fates:new Uint8Array(f)};const _=ft.clamp((Ut.gravity-.5)*6+(Ut.galaxyType===3?4:0),0,12);for(let S=0;S<f;S++){const T=Math.floor(t()*n.length/3),R=T*3;_n.sourceIndices[S]=T;const v=n[R],M=n[R+1],P=n[R+2];p[S*3]=an[S*3]=v,p[S*3+1]=an[S*3+1]=M,p[S*3+2]=an[S*3+2]=P,t(),t(),t(),_n.axes.set([es.axes[R],es.axes[R+1],es.axes[R+2]],S*3),_n.orbitRates[S]=es.orbitRates[T];const D=t(),F=D<.82?0:D<.92?1:D<.99?2:3;_n.fates[S]=F,_n.escapeAt[S]=F===1?1001:(F===3?704:F===2?724:710)+_+Math.pow(t(),.68)*(F===3?28:92),_n.speeds[S]=F===3?St(t,1.7,2.6):St(t,.55,1.05);const U=new zt(t()>.28?10204889:9125426);m[S*3]=U.r,m[S*3+1]=U.g,m[S*3+2]=U.b}const y=new ne;y.setAttribute("position",new te(p,3)),y.setAttribute("color",new te(m,3)),zr=new Qe(y,new Ye({size:.12,map:Re(),alphaTest:.012,vertexColors:!0,transparent:!0,opacity:0,depthWrite:!1,blending:Ft})),ti.add(zr),ti.rotation.copy(Ce.rotation);const c=Ut.hasCentralBlackHole?9:6;for(let S=0;S<c;S++){const T=S===0&&Ut.hasCentralBlackHole,R=T?.9:St(t,.3,.5),v=Pr({color:T?16763286:t()>.35?16758652:12179455,tilt:St(t,-.38,.38),phase:t()*Math.PI*2,visualScale:T?1.14:1,intensity:0}),M=new le(new ae({map:ke(),color:7315404,transparent:!0,opacity:0,depthWrite:!1,blending:Ft}));M.scale.set(1.2,1.2,1);const P=new le(new ae({map:ke(),color:15267071,transparent:!0,opacity:0,depthWrite:!1,blending:Ft}));if(P.scale.set(.2,.2,1),v.add(M,P),T)v.position.set(0,0,0);else{const D=Math.floor(t()*n.length/3)*3;v.position.set(n[D],n[D+1],n[D+2])}v.scale.setScalar(R),v.visible=!1,Object.assign(v.userData,{baseScale:R,birthAt:825+t()*34,evaporationAt:T?949:880+Math.pow(t(),.46)*64,hawkingGlow:M,finalPulse:P,spinDirection:t()<.5?-1:1}),Br.push(v),ti.add(v)}const u=260,b=new Float32Array(u*3),x=new Float32Array(u*3);for(let S=0;S<u;S++){const T=t()*Math.PI*2,R=Math.acos(2*t()-1),v=4+Math.pow(t(),1/3)*24;b[S*3]=Math.sin(R)*Math.cos(T)*v,b[S*3+1]=Math.cos(R)*v,b[S*3+2]=Math.sin(R)*Math.sin(T)*v;const M=new zt().setHSL(.56+t()*.1,.28,.46+t()*.22);x[S*3]=M.r,x[S*3+1]=M.g,x[S*3+2]=M.b}const g=new ne;g.setAttribute("position",new te(b,3)),g.setAttribute("color",new te(x,3)),Mh=b.slice(),yh=x.slice(),Ns=new Qe(g,new Ye({size:.11,map:Re(),alphaTest:.01,vertexColors:!0,transparent:!0,opacity:0,depthWrite:!1,blending:Ft})),wi.add(Ns);const A=Ut.cosmicFate.type==="vacuum-decay"?13019135:Ut.cosmicFate.type==="big-rip"?8440063:16744543;rs=new cn(new Vr(1,40,24),new Hs({color:A,transparent:!0,opacity:0,wireframe:!0,depthWrite:!1,blending:Ft})),rs.position.set(4.2,-1.4,2.6),Rs=new le(new ae({map:ke(),color:A,transparent:!0,opacity:0,depthTest:!1,depthWrite:!1,blending:Ft})),Rs.scale.set(.2,.2,1),bi.add(rs,Rs),bi.rotation.copy(Ce.rotation),An.visible=!1,ti.visible=!1,wi.visible=!1,bi.visible=!1}function v_(n){const t=hn(Ut.seed,1447);Ri=[];const e=Ut.hasCentralBlackHole?{type:"quasar-awakening",visual:"pulsar",label:"类星体短暂苏醒",message:"中心黑洞吸积率骤升，相对论喷流穿过星系核",preferCenter:!0,start:480+t()*16,duration:30,color:"#8dd9ff"}:{type:"magnetar-flare",visual:"pulsar",label:"磁星巨型耀斑",message:"磁壳重排释放高能辐射，脉冲扫过邻近恒星系",start:480+t()*16,duration:26,color:"#7dcaff"},i=[{type:"pair-instability-supernova",visual:"supernova",label:"成对不稳定超新星",message:"第一代巨星被完全撕碎，重元素云向外扩散",start:258+t()*18,duration:28,color:"#ffb36b"},{type:"young-pulsar-birth",visual:"pulsar",label:"年轻脉冲星诞生",message:"新生中子星高速自转，双极束流开始扫掠星际介质",start:302+t()*18,duration:27,color:"#68c8ff"},{type:"classical-nova",visual:"nova",label:"经典新星爆发",message:"白矮星表面的吸积氢发生热核失控，抛出明亮但低质量的壳层",start:336+t()*12,duration:20,color:"#ffe4a8"},{type:"type-ia-supernova",visual:"supernova",label:"Ia 型超新星爆发",message:"白矮星发生热核失控，将铁族元素抛入星际空间",start:368+t()*22,duration:25,color:"#ffd08a"},{type:"red-dwarf-superflare",visual:"stellar-flare",label:"红矮星超级耀斑",message:"磁场突然重联，高能辐射与带电粒子冲击近轨行星",start:396+t()*12,duration:21,color:"#ffcb72"},{type:"gamma-ray-burst",visual:"pulsar",label:"长伽马射线暴",message:"垂死巨星坍缩，狭窄高能喷流贯穿恒星外层",start:420+t()*20,duration:24,color:"#89b9ff"},{type:"neutron-star-kilonova",visual:"kilonova",label:"中子星并合千新星",message:"双中子星旋近并合，短伽马射线束与富含重元素的抛射物同时释放",start:450+t()*12,duration:25,color:"#caa5ff"},e,{type:"tidal-disruption-event",visual:"tidal-disruption",label:"潮汐瓦解事件",message:"恒星掠过中央黑洞的潮汐半径，被拉成长流并逐步吸积",preferCenter:!0,requiresCentralBlackHole:!0,start:502+t()*10,duration:30,color:"#72e4ff"},{type:"core-collapse-supernova",visual:"supernova",label:"核坍缩超新星",message:"恒星核心坍缩，冲击波把新合成元素送入星际云",start:518+t()*20,duration:27,color:"#ff875c"},{type:"pulsar-glitch",visual:"pulsar",label:"脉冲星自转突变",message:"中子星内部角动量重分配，脉冲节律突然跃迁",start:548+t()*18,duration:22,color:"#8ba8ff"},{type:"superluminous-supernova",visual:"supernova",label:"超亮超新星",message:"磁星引擎持续注入能量，爆发亮度超过普通超新星",start:552+t()*16,duration:26,color:"#ff6b52"},{type:"failed-supernova",visual:"stellar-collapse",label:"失败超新星",message:"冲击波未能掀开恒星外层，亮度短暂上升后整体坍缩为黑洞",start:586+t()*14,duration:29,color:"#b87958"},{type:"stellar-black-hole-merger",visual:"black-hole-merger",label:"双黑洞合并",message:"时空啁啾达到峰值，引力波波前穿过局部星域（形变已视觉放大）",preferCenter:!0,start:616+t()*18,duration:38,persistUntil:Math.min(845,Ut.cosmicFate.onsetAt||845),persistenceFadeDuration:24,color:"#c897ff",gasRich:t()<.38,radiatedMassFraction:St(t,.035,.058),recoilKms:Math.round(St(t,180,1180))},{type:"late-black-hole-merger",visual:"black-hole-merger",label:"孤立黑洞捕获合并",message:"漫长引力散射后完成并合，残余黑洞在阻尼振铃中反冲",preferCenter:!0,start:872+t()*18,duration:42,persistUntil:950,persistenceFadeDuration:18,color:"#9bb8ff",gasRich:!1,radiatedMassFraction:St(t,.028,.052),recoilKms:Math.round(St(t,420,1640))}].filter(l=>(!l.requiresCentralBlackHole||Ut.hasCentralBlackHole)&&(l.type!=="late-black-hole-merger"||Ut.cosmicFate.type==="heat-death"||Ut.cosmicFate.outcomeExponent>45)).map((l,d)=>{const f=t_(l,Ut,d);return f?.persistentRemnant?{...l,simulation:f,persistUntil:Math.min(845,Ut.cosmicFate.onsetAt||845),persistenceFadeDuration:24}:{...l,simulation:f}}),s={"pair-instability-supernova":{radius:.55,maxStars:5,sourceDim:.02,neighborDim:.96,kick:.018,civilization:.08,range:2.4},"young-pulsar-birth":{radius:.42,maxStars:2,sourceDim:.12,neighborDim:.99,kick:.01,civilization:.035,range:1.8,directional:!0,beamAngle:.12},"classical-nova":{radius:.18,maxStars:1,sourceDim:1,neighborDim:1,kick:0,civilization:.012,range:.75,maxSpecies:1},"type-ia-supernova":{radius:.48,maxStars:4,sourceDim:.02,neighborDim:.97,kick:.012,civilization:.06,range:2.1},"red-dwarf-superflare":{radius:.22,maxStars:1,sourceDim:1,neighborDim:1,kick:0,civilization:.09,range:1.15,maxSpecies:1},"gamma-ray-burst":{radius:7.5,maxStars:46,sourceDim:.025,neighborDim:.82,kick:0,civilization:.42,range:12,maxSpecies:1,directional:!0,beamAngle:.1},"neutron-star-kilonova":{radius:4.8,maxStars:24,sourceDim:.03,neighborDim:.9,kick:.006,civilization:.24,range:8.5,maxSpecies:1,directional:!0,beamAngle:.14},"quasar-awakening":{radius:8.5,maxStars:60,sourceDim:.95,neighborDim:.96,kick:0,civilization:.16,range:14,maxSpecies:2,directional:!0,beamAngle:.16},"magnetar-flare":{radius:1.1,maxStars:8,sourceDim:.82,neighborDim:.94,kick:0,civilization:.12,range:3.2,maxSpecies:1},"tidal-disruption-event":{radius:.32,maxStars:2,sourceDim:.015,neighborDim:.995,kick:.008,civilization:.075,range:2.8,maxSpecies:1},"core-collapse-supernova":{radius:.5,maxStars:4,sourceDim:.025,neighborDim:.97,kick:.014,civilization:.06,range:2.2},"pulsar-glitch":{radius:.01,maxStars:1,sourceDim:.985,neighborDim:1,kick:0,civilization:0,range:0,maxSpecies:0},"superluminous-supernova":{radius:.62,maxStars:6,sourceDim:.02,neighborDim:.95,kick:.02,civilization:.09,range:2.8,maxSpecies:1},"failed-supernova":{radius:.24,maxStars:2,sourceDim:.008,neighborDim:.995,kick:.003,civilization:.025,range:1.25,maxSpecies:1},"stellar-black-hole-merger":{radius:.08,maxStars:1,sourceDim:.06,neighborDim:1,kick:0,civilization:0,range:0,maxSpecies:0},"late-black-hole-merger":{radius:.08,maxStars:1,sourceDim:.04,neighborDim:1,kick:0,civilization:0,range:0,maxSpecies:0}},r=(l=!1)=>{let d=Math.floor(t()*n.length/3);const f=l?2.8:6.2;for(let p=0;p<140;p++){const m=Math.floor(t()*n.length/3),_=m*3;if(Math.hypot(n[_],n[_+1],n[_+2])<f){d=m;break}}return{index:d,position:new B(n[d*3],n[d*3+1],n[d*3+2])}},a=(l,d)=>{const f=Sc(s[l.type],l.simulation),m={supernova:.08,nova:.14,kilonova:.22,pulsar:.46,"stellar-flare":.38,"tidal-disruption":.58,"stellar-collapse":.64,"black-hole-merger":.68}[l.visual]??.5,_=l.start+l.duration*m,y=[];for(let g=0;g<n.length/3;g++){const A=g*3,S=Math.hypot(n[A]-d.position.x,n[A+1]-d.position.y,n[A+2]-d.position.z);if(!(S>f.radius)){if(f.directional&&l.beamDirection&&S>.001){const T=new B(n[A]-d.position.x,n[A+1]-d.position.y,n[A+2]-d.position.z).normalize();if(Math.abs(T.dot(l.beamDirection))<Math.cos(f.beamAngle))continue}y.push({index:g,distance:S})}}y.sort((g,A)=>g.distance-A.distance);const c=y.slice(0,f.maxStars).map(({index:g,distance:A},S)=>{const T=g*3,R=1-Math.min(1,A/f.radius);let v=n[T]-d.position.x,M=n[T+1]-d.position.y,P=n[T+2]-d.position.z;const D=Math.hypot(v,M,P);if(D<.001){const U=t()*Math.PI*2,L=t()*2-1,N=Math.sqrt(1-L*L);v=Math.cos(U)*N,M=L,P=Math.sin(U)*N}else v/=D,M/=D,P/=D;const F=f.kick*(.2+R*.8)*(.72+t()*.5);return{index:g,dimFactor:S===0?f.sourceDim:1-(1-f.neighborDim)*R,kick:[v*F,M*F,P*F]}}),u={"pair-instability-supernova":"爆发源完全解体且没有致密残骸","classical-nova":"白矮星保留下来，重新开始从伴星吸积物质","type-ia-supernova":"白矮星被热核爆炸完全摧毁","red-dwarf-superflare":"宿主恒星保持完整，但近轨行星大气受到高能粒子冲击","neutron-star-kilonova":"并合形成大质量中子星或黑洞，并把重元素抛入星际空间","tidal-disruption-event":"恒星被撕碎，部分物质形成吸积流，部分沿轨道逃逸","core-collapse-supernova":"坍缩核心留下中子星或恒星级黑洞","superluminous-supernova":"恒星外层被大规模抛射，中心结局仍不确定","failed-supernova":"恒星几乎没有明亮爆炸便消失，留下新生黑洞"},b=e_(l),x=l.visual==="black-hole-merger"?`约 ${(l.radiatedMassFraction*100).toFixed(1)}% 总质量以引力波带走，残余黑洞以约 ${l.recoilKms} km/s 反冲${l.gasRich?"，周围气体受热形成短暂余辉":"；真空环境中没有超新星式爆炸"}`:l.type==="pulsar-glitch"?"自转频率发生微小跃变，没有可见的大规模破坏":b||(u[l.type]?`${u[l.type]}，${Math.max(0,c.length-1)} 个邻近恒星系受影响`:l.visual==="pulsar"?`${c.length} 个位于辐射束或近场内的恒星系受到影响`:`爆发源发生结构性改变，${Math.max(0,c.length-1)} 个邻近恒星系受冲击`);return{impactAt:_,impactPhase:m,starImpacts:c,systemOutcome:x}},o=(l,d,f,p,m)=>{if(!rn||!_n)return[];const _=Sc(s[l.type],l.simulation),y=hn(Ut.seed,6203+m*131),c=new Map,u=(g,A,S,T=!1,R="damage")=>{const v=`${R}:${g}:${A.toFixed(4)}`,M=c.get(v);if(M){M.severity=1-(1-M.severity)*(1-S),M.permanent||=T;return}c.set(v,{nodeIndex:g,at:A,severity:ft.clamp(S,0,1),permanent:T,kind:R,destructionRoll:y()})};if(_.civilization>0&&_.range>0)for(let g=0;g<rn.habitatPositions.length/3;g++){const A=g*3,S=rn.habitatPositions[A]-d.position.x,T=rn.habitatPositions[A+1]-d.position.y,R=rn.habitatPositions[A+2]-d.position.z,v=Math.hypot(S,T,R);if(v>_.range)continue;if(_.directional&&l.beamDirection&&v>.001){const F=1/v;if(Math.abs(S*F*l.beamDirection.x+T*F*l.beamDirection.y+R*F*l.beamDirection.z)<Math.cos(_.beamAngle))continue}const M=Math.max(.08,1-v/_.range),P=ft.clamp(_.civilization*(.62+M*.48)*(.84+y()*.3),0,.58),D=l.simulation?.pulsePhases;if(D?.length?D.forEach((F,U)=>{const L=l.simulation.pulseWeights?.[U]??1;u(g,l.start+l.duration*F,P*L)}):u(g,f.impactAt,P),l.simulation?.recoveryDuration&&l.simulation.recoveryFraction>0){const F=D?.length?Math.max(...D):f.impactPhase,U=l.start+l.duration*F+l.simulation.recoveryDuration;u(g,U,P*l.simulation.recoveryFraction,!1,"recovery")}}const b=new Map(f.starImpacts.map(g=>[g.index,g])),x=new Map;if(p)for(let g=0;g<p.indices.length;g++)p.restDistances[g]>=p.captureRadius||x.set(p.indices[g],p.restDistances[g]);for(let g=0;g<rn.habitatRemnantIndices.length;g++){const A=rn.habitatRemnantIndices[g],S=_n.sourceIndices[A],T=b.get(S);if(T){const v=1-T.dimFactor;v>.001&&u(g,f.impactAt,v,T.dimFactor<=.15)}const R=x.get(S);if(R!==void 0){const v=R/p.captureRadius*11;u(g,f.impactAt+v+13,1,!0)}}return Array.from(c.values()).sort((g,A)=>g.at-A.at||g.nodeIndex-A.nodeIndex)},h=(l,d,f)=>{const p=l.visual==="kilonova";if(l.visual!=="black-hole-merger"&&!p)return null;const m=p?6.4:l.type==="late-black-hole-merger"?7.2:8.8,_=[];for(let T=0;T<n.length/3;T++){const R=T*3,v=n[R]-d.position.x,M=n[R+1]-d.position.y,P=n[R+2]-d.position.z,D=Math.hypot(v,M,P);D>.12&&D<=m&&_.push({index:T,dx:v,dy:M,dz:P,distance:D})}const y=hn(Ut.seed,9107+f*97),c=Math.min(p?900:1800,_.length),u=_.length/Math.max(1,c),b=new Uint16Array(c),x=new Float32Array(c),g=new Float32Array(c*3),A=new Float32Array(c);for(let T=0;T<c;T++){const R=T*u,v=_[Math.min(_.length-1,Math.floor(R+y()*u))],M=1/v.distance,P=v.dx*M;v.dy*M;const D=v.dz*M;let F=-D,U=0,L=P;const N=Math.hypot(F,U,L);N<.04?(F=1,U=0,L=0):(F/=N,U/=N,L/=N),b[T]=v.index,x[T]=v.distance,g.set([F,U,L],T*3),A[T]=Math.cos(Math.atan2(D,P)*2)*(.72+y()*.28)}const S=p?ft.clamp((l.simulation?.radiatedMassFraction||.025)/.04,.38,1):1;return{waveRadius:m,waveAmplitude:S,indices:b,distances:x,transverse:g,polarities:A}};i.forEach((l,d)=>{const f=new Ge,p=r(l.preferCenter);if(f.position.copy(p.position),f.visible=!1,ii.add(f),s[l.type].directional&&(l.beamDirection=new B(se(t),se(t),se(t)).normalize(),f.quaternion.setFromUnitVectors(new B(0,1,0),l.beamDirection)),l.visual==="supernova"||l.visual==="nova"||l.visual==="kilonova"){const x=l.visual==="nova",g=l.visual==="kilonova",A=g?12099071:x?16770733:16756067,S=g?14731519:x?16317439:11458815,T=new le(new ae({map:ke(),color:16777215,transparent:!0,opacity:0,depthWrite:!1,blending:Ft})),R=new le(new ae({map:ke(),color:A,transparent:!0,opacity:0,depthWrite:!1,blending:Ft})),v=new le(new ae({map:Re(),color:S,transparent:!0,opacity:0,depthWrite:!1,blending:Ft}));v.scale.set(.16,.16,1);const M=x?360:620,P=new Float32Array(M*3),D=new Float32Array(M*3),F=new Float32Array(M*3),U=new Float32Array(M),L=new Float32Array(M),N=new zt(g?14283775:x?16775384:16773319),k=new zt(g?9261009:x?16758120:16730930);for(let _t=0;_t<M;_t++){const mt=t()*Math.PI*2,Pt=Math.acos(2*t()-1),Jt=1+Math.sin(mt*5+Pt*3)*.18+(t()-.5)*.24,I=new B(Math.sin(Pt)*Math.cos(mt)*Jt,Math.cos(Pt)*(g?.34:1.08+t()*.34),Math.sin(Pt)*Math.sin(mt)*Jt).normalize();F.set([I.x,I.y,I.z],_t*3);const Qt=g?ft.clamp((l.simulation?.ejectaVelocityC||.2)/.18,.72,1.55):1,Z=x?.46:g?Qt:1;U[_t]=(.38+Math.pow(t(),.48)*1.45+Math.abs(I.y)*.22)*Z,L[_t]=Math.pow(t(),2.4)*.22;const rt=N.clone().lerp(k,Math.pow(t(),.52));D.set([rt.r,rt.g,rt.b],_t*3)}const O=new ne;O.setAttribute("position",new te(P,3)),O.setAttribute("color",new te(D,3));const J=new Qe(O,new Ye({size:.1,map:Re(),alphaTest:.008,vertexColors:!0,transparent:!0,opacity:0,depthWrite:!1,blending:Ft})),q=x?160:280,ct=new Float32Array(q*3),vt=new Float32Array(q*3),Rt=new Float32Array(q);for(let _t=0;_t<q;_t++){const mt=t()*Math.PI*2,Pt=2*t()-1,Jt=Math.sqrt(1-Pt*Pt);vt.set([Math.cos(mt)*Jt,Pt,Math.sin(mt)*Jt],_t*3),Rt[_t]=t()*Math.PI*2}const Q=new ne;Q.setAttribute("position",new te(ct,3));const tt=g?10845439:x?16769184:16766112,V=new Qe(Q,new Ye({color:tt,size:x?.052:.072,map:Re(),alphaTest:.01,transparent:!0,opacity:0,depthWrite:!1,blending:Ft}));let X=null,it=null;if(g){const _t=2.6+(l.simulation?.ejectaVelocityC||.2)*4.2,mt=new ne;mt.setAttribute("position",new Ae([0,-.12,0,0,-_t,0,0,.12,0,0,_t,0],3)),X=new Xo(mt,new bn({color:13234175,transparent:!0,opacity:0,depthWrite:!1,blending:Ft})),it=new le(new ae({map:Ki(),color:12891391,transparent:!0,opacity:0,depthTest:!1,depthWrite:!1,blending:Ft}))}f.add(R,T,J,V,v),X&&f.add(X),it&&f.add(it),f.userData.effect={innerFlash:T,photosphere:R,remnant:v,ejecta:J,ejectaDirections:F,ejectaVelocity:U,ejectaDelay:L,shell:V,shellDirections:vt,shellNoise:Rt,polarJets:X,gravityWave:it}}else if(l.visual==="tidal-disruption"){const x=Pr({color:8773119,tilt:.22,phase:t()*Math.PI*2,visualScale:.86});x.userData.spinDirection=1;const g=new le(new ae({map:Re(),color:16773577,transparent:!0,opacity:0,depthWrite:!1,blending:Ft}));g.scale.set(.28,.28,1);const A=new le(new ae({map:ke(),color:9366271,transparent:!0,opacity:0,depthTest:!1,depthWrite:!1,blending:Ft})),S=new le(new ae({map:Ki(),color:7068927,transparent:!0,opacity:0,depthWrite:!1,blending:Ft,rotation:t()*Math.PI}));S.scale.set(1.5,.48,1);const T=480,R=new Float32Array(T*3),v=new Float32Array(T),M=new Float32Array(T),P=new Float32Array(T*3),D=new zt(16380359),F=new zt(5623807);for(let N=0;N<T;N++){const k=t()<(l.simulation?.boundFraction||.5);v[N]=k?-t():t(),M[N]=t()*Math.PI*2;const O=D.clone().lerp(F,Math.pow(t(),.62));P.set([O.r,O.g,O.b],N*3)}const U=new ne;U.setAttribute("position",new te(R,3)),U.setAttribute("color",new te(P,3));const L=new Qe(U,new Ye({size:.075,map:Re(),alphaTest:.008,vertexColors:!0,transparent:!0,opacity:0,depthWrite:!1,blending:Ft}));f.add(A,S,L,g,x),f.userData.effect={hole:x,starCore:g,flare:A,disk:S,debris:L,debrisOffsets:v,debrisNoise:M}}else if(l.visual==="stellar-flare"){const x=new le(new ae({map:Re(),color:16758618,transparent:!0,opacity:0,depthWrite:!1,blending:Ft})),g=new le(new ae({map:ke(),color:16742962,transparent:!0,opacity:0,depthWrite:!1,blending:Ft})),A=new le(new ae({map:Ki(),color:16765563,transparent:!0,opacity:0,depthWrite:!1,blending:Ft}));x.scale.set(.25,.25,1);const S=[];for(let D=0;D<3;D++){const F=[];for(let L=0;L<=72;L++){const N=L/72*Math.PI;F.push(new B(Math.cos(N)*(.42+D*.16),Math.sin(N)*(.68+D*.18),Math.sin(N*2)*.06))}const U=new yi(new ne().setFromPoints(F),new bn({color:D===1?16773283:16751442,transparent:!0,opacity:0,depthWrite:!1,blending:Ft}));U.rotation.y=D*1.86+t()*.35,S.push(U)}const T=320,R=new Float32Array(T*3),v=new Float32Array(T*3);for(let D=0;D<T;D++){const F=t()*Math.PI*2,U=St(t,-.28,1),L=Math.sqrt(1-Math.min(1,U*U));v.set([Math.cos(F)*L,U,Math.sin(F)*L],D*3)}const M=new ne;M.setAttribute("position",new te(R,3));const P=new Qe(M,new Ye({color:16763248,size:.06,map:Re(),alphaTest:.008,transparent:!0,opacity:0,depthWrite:!1,blending:Ft}));f.add(g,A,x,P,...S),f.userData.effect={starCore:x,halo:g,shock:A,loops:S,particles:P,particleDirections:v}}else if(l.visual==="stellar-collapse"){const x=new le(new ae({map:Re(),color:16753755,transparent:!0,opacity:0,depthWrite:!1,blending:Ft})),g=new le(new ae({map:ke(),color:10114360,transparent:!0,opacity:0,depthWrite:!1,blending:Ft})),A=Pr({color:10316632,tilt:-.18,phase:t()*Math.PI*2,visualScale:.72});A.userData.spinDirection=-1,A.visible=!1;const S=Math.round(180+(l.simulation?.ejectedEnvelopeFraction||.08)*920),T=new Float32Array(S*3),R=new Float32Array(S*3);for(let P=0;P<S;P++){const D=t()*Math.PI*2,F=t()*2-1,U=Math.sqrt(1-F*F);R.set([Math.cos(D)*U,F,Math.sin(D)*U],P*3)}const v=new ne;v.setAttribute("position",new te(T,3));const M=new Qe(v,new Ye({color:9196347,size:.065,map:Re(),alphaTest:.008,transparent:!0,opacity:0,depthWrite:!1,blending:Ft}));f.add(g,M,x,A),f.userData.effect={starCore:x,shroud:g,remnantHole:A,dust:M,dustDirections:R}}else if(l.visual==="pulsar"){const x=new le(new ae({map:Re(),color:16055295,transparent:!0,opacity:0,depthWrite:!1,blending:Ft})),g=new le(new ae({map:ke(),color:4962815,transparent:!0,opacity:0,depthWrite:!1,blending:Ft})),A=new le(new ae({map:ke(),color:1472184,transparent:!0,opacity:0,depthWrite:!1,blending:Ft,rotation:t()*Math.PI})),S=new le(new ae({map:ke(),color:13233663,transparent:!0,opacity:0,depthWrite:!1,blending:Ft}));x.scale.set(.18,.18,1),A.scale.set(1.45,.58,1);const T=new Ge;T.rotation.z=.58+t()*.32;const R=420,v=new Float32Array(R*3),M=new Float32Array(R*3);for(let L=0;L<R;L++){const N=L%2?1:-1,k=.1+Math.pow(t(),.66)*2.6,O=.012+k*.014,J=t()*Math.PI*2;v[L*3]=Math.cos(J)*O*t(),v[L*3+1]=N*k,v[L*3+2]=Math.sin(J)*O*t();const q=.35+Math.pow(1-k/2.8,.45)*.65;M.set([.38*q,.76*q,q],L*3)}const P=new ne;P.setAttribute("position",new te(v,3)),P.setAttribute("color",new te(M,3));const D=new Qe(P,new Ye({size:.09,map:Re(),alphaTest:.008,vertexColors:!0,transparent:!0,opacity:0,depthWrite:!1,blending:Ft}));T.add(D);const F=[];for(let L=0;L<4;L++){const N=[],k=.5+L*.18;for(let J=0;J<=80;J++){const q=J/80*Math.PI*2;N.push(new B(Math.cos(q)*k,Math.sin(q)*k*.34,Math.sin(q*2)*.08))}const O=new yi(new ne().setFromPoints(N),new bn({color:7524351,transparent:!0,opacity:0,depthWrite:!1,blending:Ft}));O.rotation.set(t()*Math.PI,t()*Math.PI,t()*Math.PI),F.push(O),T.add(O)}const U=[];for(let L=0;L<8;L++){const N=new le(new ae({map:Re(),color:10214911,transparent:!0,opacity:0,depthWrite:!1,blending:Ft}));N.scale.set(.11,.11,1),N.userData.offset=L/8,N.userData.side=L%2?1:-1,U.push(N),T.add(N)}f.add(A,g,S,x,T),f.userData.effect={core:x,halo:g,nebula:A,sweepGlow:S,rotor:T,jets:D,fieldLines:F,knots:U}}else if(l.visual==="black-hole-merger"){const x=(V,X)=>{const it=Pr({color:V,tilt:St(t,-.28,.28),phase:t()*Math.PI*2,visualScale:1.08});return it.userData.spinDirection=X,it},g=new Ge;g.rotation.set(.76,.18,.24);const A=x(16759408,1),S=x(10999807,-1),T=x(16767405,1);T.scale.setScalar(1.24),T.visible=!1;const R=V=>{const X=new Float32Array(252),it=new ne;return it.setAttribute("position",new te(X,3)),new yi(it,new bn({color:V,transparent:!0,opacity:0,depthWrite:!1,blending:Ft}))},v=R(16751445),M=R(7979007);g.add(v,M,A,S,T);const P=new le(new ae({map:ke(),color:l.gasRich?16769717:14478079,transparent:!0,opacity:0,depthTest:!1,depthWrite:!1,blending:Ft})),D=new le(new ae({map:Ki(),color:16757871,transparent:!0,opacity:0,depthTest:!1,depthWrite:!1,blending:Ft}));D.visible=l.gasRich;const F=[10209535,13810175,7976959].map(V=>new le(new ae({map:Ki(),color:V,transparent:!0,opacity:0,depthTest:!1,depthWrite:!1,blending:Ft}))),U=[];for(let V=0;V<6;V++){const X=[];for(let _t=0;_t<160;_t++){const mt=_t/160*Math.PI*2,Pt=1+Math.cos(mt*2+V*.7)*.065;X.push(new B(Math.cos(mt)*Pt,Math.sin(mt)*Pt,Math.sin(mt*2+V)*.055))}const it=new pd(new ne().setFromPoints(X),new bn({color:V%3===1?14205951:9422591,transparent:!0,opacity:0,depthTest:!1,depthWrite:!1,blending:Ft}));it.rotation.set(.34+V*.47,.2+V*.39,V*.76),U.push(it),f.add(it)}const L=520,N=new Float32Array(L*3),k=new Float32Array(L*3),O=new Float32Array(L*3),J=new zt(7979007),q=new zt(14732287);for(let V=0;V<L;V++){const X=t()*Math.PI*2,it=St(t,-1,1),_t=Math.sqrt(1-it*it);k.set([Math.cos(X)*_t,it,Math.sin(X)*_t],V*3);const mt=J.clone().lerp(q,t());O.set([mt.r,mt.g,mt.b],V*3)}const ct=new ne;ct.setAttribute("position",new te(N,3)),ct.setAttribute("color",new te(O,3));const vt=new Qe(ct,new Ye({size:.075,map:Re(),alphaTest:.008,vertexColors:!0,transparent:!0,opacity:0,depthTest:!1,depthWrite:!1,blending:Ft})),Rt=new ne;Rt.setAttribute("position",new te(new Float32Array(6),3));const Q=new yi(Rt,new bn({color:16766122,transparent:!0,opacity:0,depthWrite:!1,blending:Ft})),tt=new B(se(t),se(t)*.45,se(t)).normalize();f.add(vt,...F,D,g,P,Q),f.userData.effect={orbitalPlane:g,holeA:A,holeB:S,remnantHole:T,trailA:v,trailB:M,mergerGlow:P,gasEcho:D,waveHalos:F,wavefronts:U,waveDust:vt,waveDirections:k,recoilTrail:Q,recoilVector:tt,gasRich:l.gasRich}}const _=a(l,p),y=h(l,p,d),c=l.visual==="black-hole-merger"?Z0(n,p.position,{seedValue:Ut.seedValue,eventIndex:d}):null,u=n_(n,p.position,l.simulation,Ut.seedValue,d),b=o(l,p,_,c,d);Ri.push({...l,..._,civilizationNodeImpacts:b,civilizationImpacts:[],outcome:_.systemOutcome,waveSamples:y,gravityField:c,transientGravityField:u,group:f,sourceIndex:p.index,id:`${l.type}-${d}-${Ut.seed}`,label:l.label})}),ii.rotation.copy(Ce.rotation),ii.visible=!1}function M_(){const n=Ot("#cosmic-event-markers");n.innerHTML="",Ri.forEach(t=>{const e=document.createElement("button");e.type="button",e.className="event-marker",e.style.left=`${t.start/10}%`,e.style.setProperty("--event-color",t.color),e.setAttribute("aria-label",`${t.label}，${ch(t.start,Ut)}；${t.outcome}`),e.title=t.outcome,e.addEventListener("click",()=>{Rn=!1,Ot("#toggle-time").textContent="▶";const s={supernova:.14,nova:.2,kilonova:.28,pulsar:.54,"stellar-flare":.44,"tidal-disruption":.62,"stellar-collapse":.7,"black-hole-merger":.76}[t.visual]??.5;Vs(t.start+t.duration*s,!0)}),n.appendChild(e)})}function y_(){g_();const n=hn(Ut.seed,410),t=Ut.speciesCount,e=an.length/3,i=Math.min(720,e),s=new Uint16Array(i),r=new Float32Array(i*3),a=e/i;for(let l=0;l<i;l++){const d=Math.min(e-1,Math.floor((l+n()*.86)*a)),f=d*3,p=l*3;s[l]=d,r[p]=an[f],r[p+1]=an[f+1],r[p+2]=an[f+2]}rn={start:390,end:Ut.cosmicFate.type==="heat-death"?710:1e3,step:1,habitatRemnantIndices:s,habitatPositions:r,adjacency:[],snapshots:[]};const o=[],h=Ot("#civilization-legend");h.innerHTML="";for(let l=0;l<t;l++){let d=Math.floor(n()*i),f=-1;for(let D=0;D<96;D++){const F=Math.floor(n()*i),U=F*3;let L=1/0;o.forEach(N=>{const k=N*3;L=Math.min(L,Math.hypot(r[U]-r[k],r[U+1]-r[k+1],r[U+2]-r[k+2]))}),L>f&&(f=L,d=F)}o.push(d);const p=s[d],m=p*3,_=new B(an[m],an[m+1],an[m+2]),y=gc[l%gc.length],c=new ne;c.setAttribute("position",new te(new Float32Array(i*3),3)),c.setDrawRange(0,0);const u=new Ye({color:y,size:.24,map:Re(),alphaTest:.012,transparent:!0,opacity:.98,depthWrite:!1,blending:Ft}),b=new Qe(c,u);Ce.add(b),Fs.push(b);const x=n(),g=n(),A=St(n,.72,1.36),S=St(n,.68,1.32),T=t===1?0:l/(t-1),R=404+Math.round(T*72+n()*11),v=n()<.01,M=v?R+Math.round(St(n,130,205)):1/0;sn.push({name:mc[(Ut.seedValue+l)%mc.length],color:y,home:_,homeNodeIndex:d,homeRemnantIndex:p,homeOffset:new B,hostRemnantIndices:new Uint16Array(i),hostOffsets:new Float32Array(i*3),displayCount:0,maxColonies:i,birth:R,highDimensional:v,ascensionAt:M,extinction:v?1001:Ut.cosmicFate.type==="heat-death"?710:1e3,aggression:x,cooperation:g,expansionRate:A,resilience:S});const P=`#${y.toString(16).padStart(6,"0")}`;h.insertAdjacentHTML("beforeend",`<div class="civilization-item" style="--species:${P}" data-species="${l}"><i></i><span>${sn[l].name}</span><b>未诞生</b></div>`)}}function Ah(){if(dn!=="generator")return;Ut=uh(),xh(Ut),bh(),Th(),Ot(".universe-data").scrollTop=0;const n=Ot("#creation-flash");n.classList.remove("is-flashing"),n.offsetWidth,n.classList.add("is-flashing"),document.querySelectorAll(".metric").forEach(t=>{t.style.animation="none",t.offsetWidth,t.style.animation=""})}function S_(){dn==="generator"&&(dn="explorer",document.body.classList.add("is-exploring"),Ot("#generator-view").classList.remove("is-active"),Ot("#explorer-view").classList.add("is-active"),Ot("#mode-label").textContent="深空航行中",Ot("#regenerate-top").style.opacity="0",Ot("#regenerate-top").style.pointerEvents="none",Ot("#civilization-panel").classList.remove("is-expanded"),Ot("#toggle-civilizations").setAttribute("aria-expanded","false"),Ce.visible=!0,Ce.scale.setScalar(.02),un.enabled=!0,un.target.set(0,0,0),Te=0,Ot("#cosmic-timeline").value=Te,Vs(Te,!0),Rn=!0,Ot("#toggle-time").textContent="Ⅱ",Ot("#toggle-time").setAttribute("aria-label","暂停时间"),He={type:"enter",start:performance.now(),duration:Jn?1:2100})}function E_(){dn==="explorer"&&(dn="generator",document.body.classList.remove("is-exploring"),Ot("#explorer-view").classList.remove("is-active"),Ot("#generator-view").classList.add("is-active"),Ot("#star-inspector").classList.remove("is-open"),Ot("#civilization-panel").classList.remove("is-expanded"),Ot("#toggle-civilizations").setAttribute("aria-expanded","false"),Ot("#mode-label").textContent="创世引擎在线",Ot("#regenerate-top").style.opacity="",Ot("#regenerate-top").style.pointerEvents="",Rn=!1,Ot("#toggle-time").textContent="▶",Ot("#toggle-time").setAttribute("aria-label","播放时间"),un.enabled=!1,An.visible=!1,ti.visible=!1,wi.visible=!1,ii.visible=!1,He={type:"leave",start:performance.now(),duration:Jn?1:1300})}function wc(n){return n===1?1:1-Math.pow(2,-10*n)}function Rc(n){return n<.5?4*n*n*n:1-Math.pow(-2*n+2,3)/2}function b_(n){if(!He)return;const t=Math.min(1,(n-He.start)/He.duration);if(He.type==="birth"){const e=wc(t);be.scale.setScalar(e),be.rotation.y=-.3+(1-e)*1.5}if(He.type==="enter"){const e=Rc(t);be.scale.setScalar(Math.max(.001,1-e*1.5)),be.rotation.z+=.018*(1-t),Ce.scale.setScalar(.02+wc(t)*.98),yn.position.z=32-e*12,yn.position.y=.5+e*4.2}if(He.type==="leave"){const e=Rc(t);Ce.scale.setScalar(1-e*.96),be.scale.setScalar(e),yn.position.z=20+e*12,yn.position.y=4.7-e*4.2}t===1&&(He.type==="enter"&&(be.visible=!1),He.type==="leave"&&(Ce.visible=!1,be.visible=!0,be.scale.setScalar(1)),He=null)}function T_(n){if(dn!=="explorer"||He||!us||Te<250||Te>750)return;ss.x=n.clientX/innerWidth*2-1,ss.y=-(n.clientY/innerHeight)*2+1,Ro.setFromCamera(ss,yn);const t=Ro.intersectObject(us);if(!t.length)return;const e=t[0].index,i=hn(Ut.seed,e*31),s=["M4 V","K1 III","G2 V","F8 V","A3 V","B1 Ia"],r=s[Math.floor(i()*s.length)],o={M:[2400,3700],K:[3700,5200],G:[5200,6e3],F:[6e3,7500],A:[7500,1e4],B:[1e4,3e4]}[r[0]],h=Math.round(St(i,o[0],o[1])),l=Math.floor(i()*13),d=i()<Ut.lifeProbability?"候选信号":"未检出";Ot("#star-name").textContent=`RU-${String(e).padStart(5,"0")}`,Ot("#star-type").textContent=r,Ot("#star-temp").textContent=`${new Intl.NumberFormat("zh-CN").format(h)} K`,Ot("#star-planets").textContent=l,Ot("#star-life").textContent=d,Ot("#star-life").style.color=d==="候选信号"?"var(--accent)":"",Ot("#star-inspector").classList.add("is-open")}function A_(n){Te+=n*F0(Te)*Eh}function w_(){if(dn!=="explorer")return;const n=Ot("#civilization-panel"),t=!n.classList.contains("is-expanded");n.classList.toggle("is-expanded",t),Ot("#toggle-civilizations").setAttribute("aria-expanded",String(t))}function Cc(){return{mode:dn,epochEffectsGroup:An,primordialParticles:Co,primordialFactors:Po,primordialDirections:Ts,expansionStreaks:Do,expansionDirections:Ji,bangCore:Dr,shockwaves:vh,renderer:Cn,scene:qr,clickableStars:us,originalGalaxyPositions:Lo,stellarGravityState:es,universe:Ut,transition:He,galaxyGroup:Ce,starDeathThresholds:Io,originalGalaxyColors:Sh,cosmicEvents:Ri,remnantGroup:ti,stellarRemnants:zr,originalRemnantPositions:an,remnantDynamics:_n,blackHoleRemnants:Br,heatDeathGroup:wi,coldPhotons:Ns,originalPhotonPositions:Mh,originalPhotonColors:yh,cosmicFateGroup:bi,fateBubble:rs,fateGlow:Rs,cosmicEventGroup:ii}}function R_(n){const t=Ut.cosmicFate.type==="heat-death"?0:ft.smoothstep(Te,Ut.cosmicFate.onsetAt,995);n.forEach((e,i)=>{const s=Fs[i],r=sn[i];s.visible=e.alive&&e.count>0,s.material.opacity=(e.ascended?.88:.98)*(1-t),s.material.size=e.ascended?.31:.24,s.material.color.setHex(e.ascended?15325183:r.color)})}function Vs(n,t=!1){const e=U0(n,Ut,M0(Ut));if(Te=e.position,d_(e),!us)return;s_(Te,Cc());const i=l_(rn,Te);W0(i,{civilizationSimulation:rn,civilizationData:sn,civilizationGroups:Fs}),X0({clickableStars:us,stellarRemnants:zr,remnantDynamics:_n,cosmicPosition:Te,civilizationData:sn,civilizationGroups:Fs}),gi=h_(Te,i,sn,Ri),R_(gi),f_({position:Te,simulationState:i,runtimeState:gi,civilizationData:sn}),__(i,sn);const s=gi.filter(l=>l.alive).length,r=gi.filter(l=>l.ascended).length,a=u_(i,gi,sn.length),o=r_(Te,Cc()),h=N0({position:Te,label:e.label,universe:Ut,activeEvent:o,activeRelationship:a,ascendedSpecies:r,activeSpecies:s,civilizationData:sn});p_(h,t)}function wh(n){requestAnimationFrame(wh);const t=Math.min(.05,(n-Ac)/1e3);if(Ac=n,b_(n),br.lerp(ss,.04),dn==="generator"&&be.visible&&!Jn&&(be.rotation.y+=45e-5,be.rotation.x=.15+br.y*.045,be.position.x=br.x*.42,be.position.y=br.y*.25),dn==="explorer"){Rn&&!He&&(A_(t),Te>=1e3&&(Te=1e3,Rn=!1,Ot("#toggle-time").textContent="▶",Ot("#toggle-time").setAttribute("aria-label","播放时间")),Vs(Te)),un.update(),An.position.set(0,0,0),wi.visible&&!Jn&&(Ns.rotation.y+=35e-6,Ns.rotation.x+=9e-6),bi.visible&&!Jn&&(rs.rotation.y+=.0014,rs.rotation.x-=7e-4,Rs.material.rotation=n*8e-5),Jn||Br.forEach((i,s)=>{i.visible&&(Zi(i,n,i.userData.spinDirection||(s%2?-1:1)),i.userData.hawkingGlow.material.rotation=n*(25e-6+s*1e-6))}),a_(n,{cosmicEventGroup:ii,prefersReducedMotion:Jn,cosmicEvents:Ri,camera:yn}),un.enabled||(Ce.rotation.y+=3e-4);const e=n*12e-5;Ot("#coord-x").textContent=`${Math.sin(e)<0?"−":"+"}${Math.abs(Math.sin(e)*9).toFixed(2)}`,Ot("#coord-y").textContent=`${Math.cos(e*.7)<0?"−":"+"}${Math.abs(Math.cos(e*.7)*9).toFixed(2)}`,Ot("#coord-z").textContent=`${Math.sin(e*.3)<0?"−":"+"}${Math.abs(Math.sin(e*.3)*3).toFixed(2)}`}Cn.render(qr,yn)}window.addEventListener("pointermove",n=>{ss.x=n.clientX/innerWidth*2-1,ss.y=-(n.clientY/innerHeight)*2+1;const t=Ot("#cursor");t.style.left=`${n.clientX}px`,t.style.top=`${n.clientY}px`,t.style.opacity="1"});window.addEventListener("resize",()=>{yn.aspect=innerWidth/innerHeight,yn.updateProjectionMatrix(),Cn.setSize(innerWidth,innerHeight),Cn.setPixelRatio(Math.min(devicePixelRatio,2))});Jo.addEventListener("click",T_);Ot("#regenerate-top").addEventListener("click",Ah);Ot("#enter-universe").addEventListener("click",S_);Ot("#close-inspector").addEventListener("click",()=>Ot("#star-inspector").classList.remove("is-open"));Ot("#toggle-civilizations").addEventListener("click",w_);Ot("#toggle-time").addEventListener("click",()=>{Te>=1e3&&Vs(0,!0),Rn=!Rn,Ot("#toggle-time").textContent=Rn?"Ⅱ":"▶",Ot("#toggle-time").setAttribute("aria-label",Rn?"暂停时间":"播放时间")});Ot("#cosmic-timeline").addEventListener("input",n=>{Rn=!1,Ot("#toggle-time").textContent="▶",Vs(n.target.value,!0)});document.querySelectorAll(".speed-controls button").forEach(n=>{n.addEventListener("click",()=>{Eh=Number(n.dataset.speed),document.querySelectorAll(".speed-controls button").forEach(t=>{const e=t===n;t.classList.toggle("is-active",e),t.setAttribute("aria-pressed",String(e))})})});document.addEventListener("keydown",n=>{if(n.key.toLowerCase()==="r"&&dn==="generator"&&Ah(),n.key==="Escape"&&dn==="explorer"){const t=Ot("#civilization-panel");t.classList.contains("is-expanded")?(t.classList.remove("is-expanded"),Ot("#toggle-civilizations").setAttribute("aria-expanded","false")):E_()}});Ut=uh();xh(Ut);bh();Th();wh(performance.now());
