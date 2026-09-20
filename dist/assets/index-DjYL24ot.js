(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function e(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=e(r);fetch(r.href,s)}})();const Do="180",Ki={ROTATE:0,DOLLY:1,PAN:2},qi={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},wh=0,el=1,Rh=2,Ec=1,Ch=2,Ln=3,ei=0,We=1,Un=2,Jn=0,vi=1,jt=2,nl=3,il=4,Ph=5,mi=100,Dh=101,Lh=102,Ih=103,Uh=104,Fh=200,Nh=201,Oh=202,Bh=203,Ca=204,Pa=205,zh=206,kh=207,Hh=208,Gh=209,Vh=210,Wh=211,Xh=212,Yh=213,qh=214,Da=0,La=1,Ia=2,er=3,Ua=4,Fa=5,Na=6,Oa=7,bc=0,$h=1,jh=2,Qn=0,Kh=1,Zh=2,Jh=3,Tc=4,Qh=5,tu=6,eu=7,Ac=300,nr=301,ir=302,Ba=303,za=304,Os=306,ka=1e3,_i=1001,Ha=1002,_n=1003,nu=1004,Vr=1005,fn=1006,qs=1007,jn=1008,Bn=1009,wc=1010,Rc=1011,Tr=1012,Lo=1013,yi=1014,Fn=1015,Ur=1016,Io=1017,Uo=1018,Ar=1020,Cc=35902,Pc=35899,Dc=1021,Lc=1022,pn=1023,wr=1026,Rr=1027,Ic=1028,Fo=1029,Uc=1030,No=1031,Oo=1033,Ss=33776,Es=33777,bs=33778,Ts=33779,Ga=35840,Va=35841,Wa=35842,Xa=35843,Ya=36196,qa=37492,$a=37496,ja=37808,Ka=37809,Za=37810,Ja=37811,Qa=37812,to=37813,eo=37814,no=37815,io=37816,ro=37817,so=37818,ao=37819,oo=37820,lo=37821,co=36492,ho=36494,uo=36495,fo=36283,po=36284,mo=36285,go=36286,iu=3200,ru=3201,su=0,au=1,qn="",De="srgb",rr="srgb-linear",Cs="linear",le="srgb",Ri=7680,rl=519,ou=512,lu=513,cu=514,Fc=515,hu=516,uu=517,du=518,fu=519,_o=35044,sl="300 es",yn=2e3,Ps=2001;class Ti{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(e)===-1&&i[t].push(e)}hasEventListener(t,e){const i=this._listeners;return i===void 0?!1:i[t]!==void 0&&i[t].indexOf(e)!==-1}removeEventListener(t,e){const i=this._listeners;if(i===void 0)return;const r=i[t];if(r!==void 0){const s=r.indexOf(e);s!==-1&&r.splice(s,1)}}dispatchEvent(t){const e=this._listeners;if(e===void 0)return;const i=e[t.type];if(i!==void 0){t.target=this;const r=i.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,t);t.target=null}}}const Le=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let al=1234567;const yr=Math.PI/180,Cr=180/Math.PI;function Nn(){const n=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Le[n&255]+Le[n>>8&255]+Le[n>>16&255]+Le[n>>24&255]+"-"+Le[t&255]+Le[t>>8&255]+"-"+Le[t>>16&15|64]+Le[t>>24&255]+"-"+Le[e&63|128]+Le[e>>8&255]+"-"+Le[e>>16&255]+Le[e>>24&255]+Le[i&255]+Le[i>>8&255]+Le[i>>16&255]+Le[i>>24&255]).toLowerCase()}function Kt(n,t,e){return Math.max(t,Math.min(e,n))}function Bo(n,t){return(n%t+t)%t}function pu(n,t,e,i,r){return i+(n-t)*(r-i)/(e-t)}function mu(n,t,e){return n!==t?(e-n)/(t-n):0}function Sr(n,t,e){return(1-e)*n+e*t}function gu(n,t,e,i){return Sr(n,t,1-Math.exp(-e*i))}function _u(n,t=1){return t-Math.abs(Bo(n,t*2)-t)}function xu(n,t,e){return n<=t?0:n>=e?1:(n=(n-t)/(e-t),n*n*(3-2*n))}function vu(n,t,e){return n<=t?0:n>=e?1:(n=(n-t)/(e-t),n*n*n*(n*(n*6-15)+10))}function Mu(n,t){return n+Math.floor(Math.random()*(t-n+1))}function yu(n,t){return n+Math.random()*(t-n)}function Su(n){return n*(.5-Math.random())}function Eu(n){n!==void 0&&(al=n);let t=al+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function bu(n){return n*yr}function Tu(n){return n*Cr}function Au(n){return(n&n-1)===0&&n!==0}function wu(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function Ru(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function Cu(n,t,e,i,r){const s=Math.cos,a=Math.sin,o=s(e/2),c=a(e/2),l=s((t+i)/2),h=a((t+i)/2),f=s((t-i)/2),d=a((t-i)/2),m=s((i-t)/2),g=a((i-t)/2);switch(r){case"XYX":n.set(o*h,c*f,c*d,o*l);break;case"YZY":n.set(c*d,o*h,c*f,o*l);break;case"ZXZ":n.set(c*f,c*d,o*h,o*l);break;case"XZX":n.set(o*h,c*g,c*m,o*l);break;case"YXY":n.set(c*m,o*h,c*g,o*l);break;case"ZYZ":n.set(c*g,c*m,o*h,o*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function dn(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function ae(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}const Tt={DEG2RAD:yr,RAD2DEG:Cr,generateUUID:Nn,clamp:Kt,euclideanModulo:Bo,mapLinear:pu,inverseLerp:mu,lerp:Sr,damp:gu,pingpong:_u,smoothstep:xu,smootherstep:vu,randInt:Mu,randFloat:yu,randFloatSpread:Su,seededRandom:Eu,degToRad:bu,radToDeg:Tu,isPowerOfTwo:Au,ceilPowerOfTwo:wu,floorPowerOfTwo:Ru,setQuaternionFromProperEuler:Cu,normalize:ae,denormalize:dn};class Ot{constructor(t=0,e=0){Ot.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,i=this.y,r=t.elements;return this.x=r[0]*e+r[3]*i+r[6],this.y=r[1]*e+r[4]*i+r[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Kt(this.x,t.x,e.x),this.y=Kt(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=Kt(this.x,t,e),this.y=Kt(this.y,t,e),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Kt(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(Kt(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y;return e*e+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const i=Math.cos(e),r=Math.sin(e),s=this.x-t.x,a=this.y-t.y;return this.x=s*i-a*r+t.x,this.y=s*r+a*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class ni{constructor(t=0,e=0,i=0,r=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=i,this._w=r}static slerpFlat(t,e,i,r,s,a,o){let c=i[r+0],l=i[r+1],h=i[r+2],f=i[r+3];const d=s[a+0],m=s[a+1],g=s[a+2],v=s[a+3];if(o===0){t[e+0]=c,t[e+1]=l,t[e+2]=h,t[e+3]=f;return}if(o===1){t[e+0]=d,t[e+1]=m,t[e+2]=g,t[e+3]=v;return}if(f!==v||c!==d||l!==m||h!==g){let p=1-o;const u=c*d+l*m+h*g+f*v,b=u>=0?1:-1,y=1-u*u;if(y>Number.EPSILON){const T=Math.sqrt(y),E=Math.atan2(T,u*b);p=Math.sin(p*E)/T,o=Math.sin(o*E)/T}const x=o*b;if(c=c*p+d*x,l=l*p+m*x,h=h*p+g*x,f=f*p+v*x,p===1-o){const T=1/Math.sqrt(c*c+l*l+h*h+f*f);c*=T,l*=T,h*=T,f*=T}}t[e]=c,t[e+1]=l,t[e+2]=h,t[e+3]=f}static multiplyQuaternionsFlat(t,e,i,r,s,a){const o=i[r],c=i[r+1],l=i[r+2],h=i[r+3],f=s[a],d=s[a+1],m=s[a+2],g=s[a+3];return t[e]=o*g+h*f+c*m-l*d,t[e+1]=c*g+h*d+l*f-o*m,t[e+2]=l*g+h*m+o*d-c*f,t[e+3]=h*g-o*f-c*d-l*m,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,i,r){return this._x=t,this._y=e,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const i=t._x,r=t._y,s=t._z,a=t._order,o=Math.cos,c=Math.sin,l=o(i/2),h=o(r/2),f=o(s/2),d=c(i/2),m=c(r/2),g=c(s/2);switch(a){case"XYZ":this._x=d*h*f+l*m*g,this._y=l*m*f-d*h*g,this._z=l*h*g+d*m*f,this._w=l*h*f-d*m*g;break;case"YXZ":this._x=d*h*f+l*m*g,this._y=l*m*f-d*h*g,this._z=l*h*g-d*m*f,this._w=l*h*f+d*m*g;break;case"ZXY":this._x=d*h*f-l*m*g,this._y=l*m*f+d*h*g,this._z=l*h*g+d*m*f,this._w=l*h*f-d*m*g;break;case"ZYX":this._x=d*h*f-l*m*g,this._y=l*m*f+d*h*g,this._z=l*h*g-d*m*f,this._w=l*h*f+d*m*g;break;case"YZX":this._x=d*h*f+l*m*g,this._y=l*m*f+d*h*g,this._z=l*h*g-d*m*f,this._w=l*h*f-d*m*g;break;case"XZY":this._x=d*h*f-l*m*g,this._y=l*m*f-d*h*g,this._z=l*h*g+d*m*f,this._w=l*h*f+d*m*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const i=e/2,r=Math.sin(i);return this._x=t.x*r,this._y=t.y*r,this._z=t.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,i=e[0],r=e[4],s=e[8],a=e[1],o=e[5],c=e[9],l=e[2],h=e[6],f=e[10],d=i+o+f;if(d>0){const m=.5/Math.sqrt(d+1);this._w=.25/m,this._x=(h-c)*m,this._y=(s-l)*m,this._z=(a-r)*m}else if(i>o&&i>f){const m=2*Math.sqrt(1+i-o-f);this._w=(h-c)/m,this._x=.25*m,this._y=(r+a)/m,this._z=(s+l)/m}else if(o>f){const m=2*Math.sqrt(1+o-i-f);this._w=(s-l)/m,this._x=(r+a)/m,this._y=.25*m,this._z=(c+h)/m}else{const m=2*Math.sqrt(1+f-i-o);this._w=(a-r)/m,this._x=(s+l)/m,this._y=(c+h)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let i=t.dot(e)+1;return i<1e-8?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Kt(this.dot(t),-1,1)))}rotateTowards(t,e){const i=this.angleTo(t);if(i===0)return this;const r=Math.min(1,e/i);return this.slerp(t,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const i=t._x,r=t._y,s=t._z,a=t._w,o=e._x,c=e._y,l=e._z,h=e._w;return this._x=i*h+a*o+r*l-s*c,this._y=r*h+a*c+s*o-i*l,this._z=s*h+a*l+i*c-r*o,this._w=a*h-i*o-r*c-s*l,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const i=this._x,r=this._y,s=this._z,a=this._w;let o=a*t._w+i*t._x+r*t._y+s*t._z;if(o<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,o=-o):this.copy(t),o>=1)return this._w=a,this._x=i,this._y=r,this._z=s,this;const c=1-o*o;if(c<=Number.EPSILON){const m=1-e;return this._w=m*a+e*this._w,this._x=m*i+e*this._x,this._y=m*r+e*this._y,this._z=m*s+e*this._z,this.normalize(),this}const l=Math.sqrt(c),h=Math.atan2(l,o),f=Math.sin((1-e)*h)/l,d=Math.sin(e*h)/l;return this._w=a*f+this._w*d,this._x=i*f+this._x*d,this._y=r*f+this._y*d,this._z=s*f+this._z*d,this._onChangeCallback(),this}slerpQuaternions(t,e,i){return this.copy(t).slerp(e,i)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(t),r*Math.cos(t),s*Math.sin(e),s*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class U{constructor(t=0,e=0,i=0){U.prototype.isVector3=!0,this.x=t,this.y=e,this.z=i}set(t,e,i){return i===void 0&&(i=this.z),this.x=t,this.y=e,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(ol.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(ol.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,i=this.y,r=this.z,s=t.elements;return this.x=s[0]*e+s[3]*i+s[6]*r,this.y=s[1]*e+s[4]*i+s[7]*r,this.z=s[2]*e+s[5]*i+s[8]*r,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,i=this.y,r=this.z,s=t.elements,a=1/(s[3]*e+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*e+s[4]*i+s[8]*r+s[12])*a,this.y=(s[1]*e+s[5]*i+s[9]*r+s[13])*a,this.z=(s[2]*e+s[6]*i+s[10]*r+s[14])*a,this}applyQuaternion(t){const e=this.x,i=this.y,r=this.z,s=t.x,a=t.y,o=t.z,c=t.w,l=2*(a*r-o*i),h=2*(o*e-s*r),f=2*(s*i-a*e);return this.x=e+c*l+a*f-o*h,this.y=i+c*h+o*l-s*f,this.z=r+c*f+s*h-a*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,i=this.y,r=this.z,s=t.elements;return this.x=s[0]*e+s[4]*i+s[8]*r,this.y=s[1]*e+s[5]*i+s[9]*r,this.z=s[2]*e+s[6]*i+s[10]*r,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Kt(this.x,t.x,e.x),this.y=Kt(this.y,t.y,e.y),this.z=Kt(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=Kt(this.x,t,e),this.y=Kt(this.y,t,e),this.z=Kt(this.z,t,e),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Kt(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const i=t.x,r=t.y,s=t.z,a=e.x,o=e.y,c=e.z;return this.x=r*c-s*o,this.y=s*a-i*c,this.z=i*o-r*a,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const i=t.dot(this)/e;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return $s.copy(this).projectOnVector(t),this.sub($s)}reflect(t){return this.sub($s.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(Kt(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y,r=this.z-t.z;return e*e+i*i+r*r}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,i){const r=Math.sin(e)*t;return this.x=r*Math.sin(i),this.y=Math.cos(e)*t,this.z=r*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,i){return this.x=t*Math.sin(e),this.y=i,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),r=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=i,this.z=r,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,i=Math.sqrt(1-e*e);return this.x=i*Math.cos(t),this.y=e,this.z=i*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const $s=new U,ol=new ni;class qt{constructor(t,e,i,r,s,a,o,c,l){qt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,i,r,s,a,o,c,l)}set(t,e,i,r,s,a,o,c,l){const h=this.elements;return h[0]=t,h[1]=r,h[2]=o,h[3]=e,h[4]=s,h[5]=c,h[6]=i,h[7]=a,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],this}extractBasis(t,e,i){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,r=e.elements,s=this.elements,a=i[0],o=i[3],c=i[6],l=i[1],h=i[4],f=i[7],d=i[2],m=i[5],g=i[8],v=r[0],p=r[3],u=r[6],b=r[1],y=r[4],x=r[7],T=r[2],E=r[5],w=r[8];return s[0]=a*v+o*b+c*T,s[3]=a*p+o*y+c*E,s[6]=a*u+o*x+c*w,s[1]=l*v+h*b+f*T,s[4]=l*p+h*y+f*E,s[7]=l*u+h*x+f*w,s[2]=d*v+m*b+g*T,s[5]=d*p+m*y+g*E,s[8]=d*u+m*x+g*w,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[1],r=t[2],s=t[3],a=t[4],o=t[5],c=t[6],l=t[7],h=t[8];return e*a*h-e*o*l-i*s*h+i*o*c+r*s*l-r*a*c}invert(){const t=this.elements,e=t[0],i=t[1],r=t[2],s=t[3],a=t[4],o=t[5],c=t[6],l=t[7],h=t[8],f=h*a-o*l,d=o*c-h*s,m=l*s-a*c,g=e*f+i*d+r*m;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/g;return t[0]=f*v,t[1]=(r*l-h*i)*v,t[2]=(o*i-r*a)*v,t[3]=d*v,t[4]=(h*e-r*c)*v,t[5]=(r*s-o*e)*v,t[6]=m*v,t[7]=(i*c-l*e)*v,t[8]=(a*e-i*s)*v,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,i,r,s,a,o){const c=Math.cos(s),l=Math.sin(s);return this.set(i*c,i*l,-i*(c*a+l*o)+a+t,-r*l,r*c,-r*(-l*a+c*o)+o+e,0,0,1),this}scale(t,e){return this.premultiply(js.makeScale(t,e)),this}rotate(t){return this.premultiply(js.makeRotation(-t)),this}translate(t,e){return this.premultiply(js.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,i,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,i=t.elements;for(let r=0;r<9;r++)if(e[r]!==i[r])return!1;return!0}fromArray(t,e=0){for(let i=0;i<9;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const js=new qt;function Nc(n){for(let t=n.length-1;t>=0;--t)if(n[t]>=65535)return!0;return!1}function Ds(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function Pu(){const n=Ds("canvas");return n.style.display="block",n}const ll={};function Pr(n){n in ll||(ll[n]=!0,console.warn(n))}function Du(n,t,e){return new Promise(function(i,r){function s(){switch(n.clientWaitSync(t,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:r();break;case n.TIMEOUT_EXPIRED:setTimeout(s,e);break;default:i()}}setTimeout(s,e)})}const cl=new qt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),hl=new qt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Lu(){const n={enabled:!0,workingColorSpace:rr,spaces:{},convert:function(r,s,a){return this.enabled===!1||s===a||!s||!a||(this.spaces[s].transfer===le&&(r.r=On(r.r),r.g=On(r.g),r.b=On(r.b)),this.spaces[s].primaries!==this.spaces[a].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===le&&(r.r=Zi(r.r),r.g=Zi(r.g),r.b=Zi(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===qn?Cs:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,a){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,s){return Pr("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),n.workingToColorSpace(r,s)},toWorkingColorSpace:function(r,s){return Pr("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),n.colorSpaceToWorking(r,s)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[rr]:{primaries:t,whitePoint:i,transfer:Cs,toXYZ:cl,fromXYZ:hl,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:De},outputColorSpaceConfig:{drawingBufferColorSpace:De}},[De]:{primaries:t,whitePoint:i,transfer:le,toXYZ:cl,fromXYZ:hl,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:De}}}),n}const ie=Lu();function On(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Zi(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let Ci;class Iu{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let i;if(t instanceof HTMLCanvasElement)i=t;else{Ci===void 0&&(Ci=Ds("canvas")),Ci.width=t.width,Ci.height=t.height;const r=Ci.getContext("2d");t instanceof ImageData?r.putImageData(t,0,0):r.drawImage(t,0,0,t.width,t.height),i=Ci}return i.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=Ds("canvas");e.width=t.width,e.height=t.height;const i=e.getContext("2d");i.drawImage(t,0,0,t.width,t.height);const r=i.getImageData(0,0,t.width,t.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=On(s[a]/255)*255;return i.putImageData(r,0,0),e}else if(t.data){const e=t.data.slice(0);for(let i=0;i<e.length;i++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[i]=Math.floor(On(e[i]/255)*255):e[i]=On(e[i]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let Uu=0;class zo{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Uu++}),this.uuid=Nn(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):e instanceof VideoFrame?t.set(e.displayHeight,e.displayWidth,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push(Ks(r[a].image)):s.push(Ks(r[a]))}else s=Ks(r);i.url=s}return e||(t.images[this.uuid]=i),i}}function Ks(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?Iu.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Fu=0;const Zs=new U;class ke extends Ti{constructor(t=ke.DEFAULT_IMAGE,e=ke.DEFAULT_MAPPING,i=_i,r=_i,s=fn,a=jn,o=pn,c=Bn,l=ke.DEFAULT_ANISOTROPY,h=qn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Fu++}),this.uuid=Nn(),this.name="",this.source=new zo(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new Ot(0,0),this.repeat=new Ot(1,1),this.center=new Ot(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new qt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Zs).x}get height(){return this.source.getSize(Zs).y}get depth(){return this.source.getSize(Zs).z}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const e in t){const i=t[e];if(i===void 0){console.warn(`THREE.Texture.setValues(): parameter '${e}' has value of undefined.`);continue}const r=this[e];if(r===void 0){console.warn(`THREE.Texture.setValues(): property '${e}' does not exist.`);continue}r&&i&&r.isVector2&&i.isVector2||r&&i&&r.isVector3&&i.isVector3||r&&i&&r.isMatrix3&&i.isMatrix3?r.copy(i):this[e]=i}}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),e||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Ac)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case ka:t.x=t.x-Math.floor(t.x);break;case _i:t.x=t.x<0?0:1;break;case Ha:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case ka:t.y=t.y-Math.floor(t.y);break;case _i:t.y=t.y<0?0:1;break;case Ha:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}ke.DEFAULT_IMAGE=null;ke.DEFAULT_MAPPING=Ac;ke.DEFAULT_ANISOTROPY=1;class Me{constructor(t=0,e=0,i=0,r=1){Me.prototype.isVector4=!0,this.x=t,this.y=e,this.z=i,this.w=r}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,i,r){return this.x=t,this.y=e,this.z=i,this.w=r,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,i=this.y,r=this.z,s=this.w,a=t.elements;return this.x=a[0]*e+a[4]*i+a[8]*r+a[12]*s,this.y=a[1]*e+a[5]*i+a[9]*r+a[13]*s,this.z=a[2]*e+a[6]*i+a[10]*r+a[14]*s,this.w=a[3]*e+a[7]*i+a[11]*r+a[15]*s,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,i,r,s;const c=t.elements,l=c[0],h=c[4],f=c[8],d=c[1],m=c[5],g=c[9],v=c[2],p=c[6],u=c[10];if(Math.abs(h-d)<.01&&Math.abs(f-v)<.01&&Math.abs(g-p)<.01){if(Math.abs(h+d)<.1&&Math.abs(f+v)<.1&&Math.abs(g+p)<.1&&Math.abs(l+m+u-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const y=(l+1)/2,x=(m+1)/2,T=(u+1)/2,E=(h+d)/4,w=(f+v)/4,R=(g+p)/4;return y>x&&y>T?y<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(y),r=E/i,s=w/i):x>T?x<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(x),i=E/r,s=R/r):T<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(T),i=w/s,r=R/s),this.set(i,r,s,e),this}let b=Math.sqrt((p-g)*(p-g)+(f-v)*(f-v)+(d-h)*(d-h));return Math.abs(b)<.001&&(b=1),this.x=(p-g)/b,this.y=(f-v)/b,this.z=(d-h)/b,this.w=Math.acos((l+m+u-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Kt(this.x,t.x,e.x),this.y=Kt(this.y,t.y,e.y),this.z=Kt(this.z,t.z,e.z),this.w=Kt(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=Kt(this.x,t,e),this.y=Kt(this.y,t,e),this.z=Kt(this.z,t,e),this.w=Kt(this.w,t,e),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Kt(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this.w=t.w+(e.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Nu extends Ti{constructor(t=1,e=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:fn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},i),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=i.depth,this.scissor=new Me(0,0,t,e),this.scissorTest=!1,this.viewport=new Me(0,0,t,e);const r={width:t,height:e,depth:i.depth},s=new ke(r);this.textures=[];const a=i.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}_setTextureOptions(t={}){const e={minFilter:fn,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,i=1){if(this.width!==t||this.height!==e||this.depth!==i){this.width=t,this.height=e,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=t,this.textures[r].image.height=e,this.textures[r].image.depth=i,this.textures[r].isArrayTexture=this.textures[r].image.depth>1;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,i=t.textures.length;e<i;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;const r=Object.assign({},t.textures[e].image);this.textures[e].source=new zo(r)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Si extends Nu{constructor(t=1,e=1,i={}){super(t,e,i),this.isWebGLRenderTarget=!0}}class Oc extends ke{constructor(t=null,e=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:i,depth:r},this.magFilter=_n,this.minFilter=_n,this.wrapR=_i,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class Ou extends ke{constructor(t=null,e=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:i,depth:r},this.magFilter=_n,this.minFilter=_n,this.wrapR=_i,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Fr{constructor(t=new U(1/0,1/0,1/0),e=new U(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e+=3)this.expandByPoint(ln.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,i=t.count;e<i;e++)this.expandByPoint(ln.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const i=ln.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const i=t.geometry;if(i!==void 0){const s=i.getAttribute("position");if(e===!0&&s!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,ln):ln.fromBufferAttribute(s,a),ln.applyMatrix4(t.matrixWorld),this.expandByPoint(ln);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Wr.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Wr.copy(i.boundingBox)),Wr.applyMatrix4(t.matrixWorld),this.union(Wr)}const r=t.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,ln),ln.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,i;return t.normal.x>0?(e=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),e<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(cr),Xr.subVectors(this.max,cr),Pi.subVectors(t.a,cr),Di.subVectors(t.b,cr),Li.subVectors(t.c,cr),kn.subVectors(Di,Pi),Hn.subVectors(Li,Di),ai.subVectors(Pi,Li);let e=[0,-kn.z,kn.y,0,-Hn.z,Hn.y,0,-ai.z,ai.y,kn.z,0,-kn.x,Hn.z,0,-Hn.x,ai.z,0,-ai.x,-kn.y,kn.x,0,-Hn.y,Hn.x,0,-ai.y,ai.x,0];return!Js(e,Pi,Di,Li,Xr)||(e=[1,0,0,0,1,0,0,0,1],!Js(e,Pi,Di,Li,Xr))?!1:(Yr.crossVectors(kn,Hn),e=[Yr.x,Yr.y,Yr.z],Js(e,Pi,Di,Li,Xr))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,ln).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(ln).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(wn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),wn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),wn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),wn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),wn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),wn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),wn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),wn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(wn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const wn=[new U,new U,new U,new U,new U,new U,new U,new U],ln=new U,Wr=new Fr,Pi=new U,Di=new U,Li=new U,kn=new U,Hn=new U,ai=new U,cr=new U,Xr=new U,Yr=new U,oi=new U;function Js(n,t,e,i,r){for(let s=0,a=n.length-3;s<=a;s+=3){oi.fromArray(n,s);const o=r.x*Math.abs(oi.x)+r.y*Math.abs(oi.y)+r.z*Math.abs(oi.z),c=t.dot(oi),l=e.dot(oi),h=i.dot(oi);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>o)return!1}return!0}const Bu=new Fr,hr=new U,Qs=new U;class Nr{constructor(t=new U,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const i=this.center;e!==void 0?i.copy(e):Bu.setFromPoints(t).getCenter(i);let r=0;for(let s=0,a=t.length;s<a;s++)r=Math.max(r,i.distanceToSquared(t[s]));return this.radius=Math.sqrt(r),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const i=this.center.distanceToSquared(t);return e.copy(t),i>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;hr.subVectors(t,this.center);const e=hr.lengthSq();if(e>this.radius*this.radius){const i=Math.sqrt(e),r=(i-this.radius)*.5;this.center.addScaledVector(hr,r/i),this.radius+=r}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Qs.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(hr.copy(t.center).add(Qs)),this.expandByPoint(hr.copy(t.center).sub(Qs))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}const Rn=new U,ta=new U,qr=new U,Gn=new U,ea=new U,$r=new U,na=new U;class Or{constructor(t=new U,e=new U(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Rn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const i=e.dot(this.direction);return i<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=Rn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Rn.copy(this.origin).addScaledVector(this.direction,e),Rn.distanceToSquared(t))}distanceSqToSegment(t,e,i,r){ta.copy(t).add(e).multiplyScalar(.5),qr.copy(e).sub(t).normalize(),Gn.copy(this.origin).sub(ta);const s=t.distanceTo(e)*.5,a=-this.direction.dot(qr),o=Gn.dot(this.direction),c=-Gn.dot(qr),l=Gn.lengthSq(),h=Math.abs(1-a*a);let f,d,m,g;if(h>0)if(f=a*c-o,d=a*o-c,g=s*h,f>=0)if(d>=-g)if(d<=g){const v=1/h;f*=v,d*=v,m=f*(f+a*d+2*o)+d*(a*f+d+2*c)+l}else d=s,f=Math.max(0,-(a*d+o)),m=-f*f+d*(d+2*c)+l;else d=-s,f=Math.max(0,-(a*d+o)),m=-f*f+d*(d+2*c)+l;else d<=-g?(f=Math.max(0,-(-a*s+o)),d=f>0?-s:Math.min(Math.max(-s,-c),s),m=-f*f+d*(d+2*c)+l):d<=g?(f=0,d=Math.min(Math.max(-s,-c),s),m=d*(d+2*c)+l):(f=Math.max(0,-(a*s+o)),d=f>0?s:Math.min(Math.max(-s,-c),s),m=-f*f+d*(d+2*c)+l);else d=a>0?-s:s,f=Math.max(0,-(a*d+o)),m=-f*f+d*(d+2*c)+l;return i&&i.copy(this.origin).addScaledVector(this.direction,f),r&&r.copy(ta).addScaledVector(qr,d),m}intersectSphere(t,e){Rn.subVectors(t.center,this.origin);const i=Rn.dot(this.direction),r=Rn.dot(Rn)-i*i,s=t.radius*t.radius;if(r>s)return null;const a=Math.sqrt(s-r),o=i-a,c=i+a;return c<0?null:o<0?this.at(c,e):this.at(o,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(t.normal)+t.constant)/e;return i>=0?i:null}intersectPlane(t,e){const i=this.distanceToPlane(t);return i===null?null:this.at(i,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let i,r,s,a,o,c;const l=1/this.direction.x,h=1/this.direction.y,f=1/this.direction.z,d=this.origin;return l>=0?(i=(t.min.x-d.x)*l,r=(t.max.x-d.x)*l):(i=(t.max.x-d.x)*l,r=(t.min.x-d.x)*l),h>=0?(s=(t.min.y-d.y)*h,a=(t.max.y-d.y)*h):(s=(t.max.y-d.y)*h,a=(t.min.y-d.y)*h),i>a||s>r||((s>i||isNaN(i))&&(i=s),(a<r||isNaN(r))&&(r=a),f>=0?(o=(t.min.z-d.z)*f,c=(t.max.z-d.z)*f):(o=(t.max.z-d.z)*f,c=(t.min.z-d.z)*f),i>c||o>r)||((o>i||i!==i)&&(i=o),(c<r||r!==r)&&(r=c),r<0)?null:this.at(i>=0?i:r,e)}intersectsBox(t){return this.intersectBox(t,Rn)!==null}intersectTriangle(t,e,i,r,s){ea.subVectors(e,t),$r.subVectors(i,t),na.crossVectors(ea,$r);let a=this.direction.dot(na),o;if(a>0){if(r)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Gn.subVectors(this.origin,t);const c=o*this.direction.dot($r.crossVectors(Gn,$r));if(c<0)return null;const l=o*this.direction.dot(ea.cross(Gn));if(l<0||c+l>a)return null;const h=-o*Gn.dot(na);return h<0?null:this.at(h/a,s)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class _e{constructor(t,e,i,r,s,a,o,c,l,h,f,d,m,g,v,p){_e.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,i,r,s,a,o,c,l,h,f,d,m,g,v,p)}set(t,e,i,r,s,a,o,c,l,h,f,d,m,g,v,p){const u=this.elements;return u[0]=t,u[4]=e,u[8]=i,u[12]=r,u[1]=s,u[5]=a,u[9]=o,u[13]=c,u[2]=l,u[6]=h,u[10]=f,u[14]=d,u[3]=m,u[7]=g,u[11]=v,u[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new _e().fromArray(this.elements)}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],e[9]=i[9],e[10]=i[10],e[11]=i[11],e[12]=i[12],e[13]=i[13],e[14]=i[14],e[15]=i[15],this}copyPosition(t){const e=this.elements,i=t.elements;return e[12]=i[12],e[13]=i[13],e[14]=i[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,i){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(t,e,i){return this.set(t.x,e.x,i.x,0,t.y,e.y,i.y,0,t.z,e.z,i.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,i=t.elements,r=1/Ii.setFromMatrixColumn(t,0).length(),s=1/Ii.setFromMatrixColumn(t,1).length(),a=1/Ii.setFromMatrixColumn(t,2).length();return e[0]=i[0]*r,e[1]=i[1]*r,e[2]=i[2]*r,e[3]=0,e[4]=i[4]*s,e[5]=i[5]*s,e[6]=i[6]*s,e[7]=0,e[8]=i[8]*a,e[9]=i[9]*a,e[10]=i[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,i=t.x,r=t.y,s=t.z,a=Math.cos(i),o=Math.sin(i),c=Math.cos(r),l=Math.sin(r),h=Math.cos(s),f=Math.sin(s);if(t.order==="XYZ"){const d=a*h,m=a*f,g=o*h,v=o*f;e[0]=c*h,e[4]=-c*f,e[8]=l,e[1]=m+g*l,e[5]=d-v*l,e[9]=-o*c,e[2]=v-d*l,e[6]=g+m*l,e[10]=a*c}else if(t.order==="YXZ"){const d=c*h,m=c*f,g=l*h,v=l*f;e[0]=d+v*o,e[4]=g*o-m,e[8]=a*l,e[1]=a*f,e[5]=a*h,e[9]=-o,e[2]=m*o-g,e[6]=v+d*o,e[10]=a*c}else if(t.order==="ZXY"){const d=c*h,m=c*f,g=l*h,v=l*f;e[0]=d-v*o,e[4]=-a*f,e[8]=g+m*o,e[1]=m+g*o,e[5]=a*h,e[9]=v-d*o,e[2]=-a*l,e[6]=o,e[10]=a*c}else if(t.order==="ZYX"){const d=a*h,m=a*f,g=o*h,v=o*f;e[0]=c*h,e[4]=g*l-m,e[8]=d*l+v,e[1]=c*f,e[5]=v*l+d,e[9]=m*l-g,e[2]=-l,e[6]=o*c,e[10]=a*c}else if(t.order==="YZX"){const d=a*c,m=a*l,g=o*c,v=o*l;e[0]=c*h,e[4]=v-d*f,e[8]=g*f+m,e[1]=f,e[5]=a*h,e[9]=-o*h,e[2]=-l*h,e[6]=m*f+g,e[10]=d-v*f}else if(t.order==="XZY"){const d=a*c,m=a*l,g=o*c,v=o*l;e[0]=c*h,e[4]=-f,e[8]=l*h,e[1]=d*f+v,e[5]=a*h,e[9]=m*f-g,e[2]=g*f-m,e[6]=o*h,e[10]=v*f+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(zu,t,ku)}lookAt(t,e,i){const r=this.elements;return qe.subVectors(t,e),qe.lengthSq()===0&&(qe.z=1),qe.normalize(),Vn.crossVectors(i,qe),Vn.lengthSq()===0&&(Math.abs(i.z)===1?qe.x+=1e-4:qe.z+=1e-4,qe.normalize(),Vn.crossVectors(i,qe)),Vn.normalize(),jr.crossVectors(qe,Vn),r[0]=Vn.x,r[4]=jr.x,r[8]=qe.x,r[1]=Vn.y,r[5]=jr.y,r[9]=qe.y,r[2]=Vn.z,r[6]=jr.z,r[10]=qe.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,r=e.elements,s=this.elements,a=i[0],o=i[4],c=i[8],l=i[12],h=i[1],f=i[5],d=i[9],m=i[13],g=i[2],v=i[6],p=i[10],u=i[14],b=i[3],y=i[7],x=i[11],T=i[15],E=r[0],w=r[4],R=r[8],_=r[12],M=r[1],P=r[5],D=r[9],I=r[13],V=r[2],G=r[6],W=r[10],$=r[14],k=r[3],N=r[7],O=r[11],Q=r[15];return s[0]=a*E+o*M+c*V+l*k,s[4]=a*w+o*P+c*G+l*N,s[8]=a*R+o*D+c*W+l*O,s[12]=a*_+o*I+c*$+l*Q,s[1]=h*E+f*M+d*V+m*k,s[5]=h*w+f*P+d*G+m*N,s[9]=h*R+f*D+d*W+m*O,s[13]=h*_+f*I+d*$+m*Q,s[2]=g*E+v*M+p*V+u*k,s[6]=g*w+v*P+p*G+u*N,s[10]=g*R+v*D+p*W+u*O,s[14]=g*_+v*I+p*$+u*Q,s[3]=b*E+y*M+x*V+T*k,s[7]=b*w+y*P+x*G+T*N,s[11]=b*R+y*D+x*W+T*O,s[15]=b*_+y*I+x*$+T*Q,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[4],r=t[8],s=t[12],a=t[1],o=t[5],c=t[9],l=t[13],h=t[2],f=t[6],d=t[10],m=t[14],g=t[3],v=t[7],p=t[11],u=t[15];return g*(+s*c*f-r*l*f-s*o*d+i*l*d+r*o*m-i*c*m)+v*(+e*c*m-e*l*d+s*a*d-r*a*m+r*l*h-s*c*h)+p*(+e*l*f-e*o*m-s*a*f+i*a*m+s*o*h-i*l*h)+u*(-r*o*h-e*c*f+e*o*d+r*a*f-i*a*d+i*c*h)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,i){const r=this.elements;return t.isVector3?(r[12]=t.x,r[13]=t.y,r[14]=t.z):(r[12]=t,r[13]=e,r[14]=i),this}invert(){const t=this.elements,e=t[0],i=t[1],r=t[2],s=t[3],a=t[4],o=t[5],c=t[6],l=t[7],h=t[8],f=t[9],d=t[10],m=t[11],g=t[12],v=t[13],p=t[14],u=t[15],b=f*p*l-v*d*l+v*c*m-o*p*m-f*c*u+o*d*u,y=g*d*l-h*p*l-g*c*m+a*p*m+h*c*u-a*d*u,x=h*v*l-g*f*l+g*o*m-a*v*m-h*o*u+a*f*u,T=g*f*c-h*v*c-g*o*d+a*v*d+h*o*p-a*f*p,E=e*b+i*y+r*x+s*T;if(E===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const w=1/E;return t[0]=b*w,t[1]=(v*d*s-f*p*s-v*r*m+i*p*m+f*r*u-i*d*u)*w,t[2]=(o*p*s-v*c*s+v*r*l-i*p*l-o*r*u+i*c*u)*w,t[3]=(f*c*s-o*d*s-f*r*l+i*d*l+o*r*m-i*c*m)*w,t[4]=y*w,t[5]=(h*p*s-g*d*s+g*r*m-e*p*m-h*r*u+e*d*u)*w,t[6]=(g*c*s-a*p*s-g*r*l+e*p*l+a*r*u-e*c*u)*w,t[7]=(a*d*s-h*c*s+h*r*l-e*d*l-a*r*m+e*c*m)*w,t[8]=x*w,t[9]=(g*f*s-h*v*s-g*i*m+e*v*m+h*i*u-e*f*u)*w,t[10]=(a*v*s-g*o*s+g*i*l-e*v*l-a*i*u+e*o*u)*w,t[11]=(h*o*s-a*f*s-h*i*l+e*f*l+a*i*m-e*o*m)*w,t[12]=T*w,t[13]=(h*v*r-g*f*r+g*i*d-e*v*d-h*i*p+e*f*p)*w,t[14]=(g*o*r-a*v*r-g*i*c+e*v*c+a*i*p-e*o*p)*w,t[15]=(a*f*r-h*o*r+h*i*c-e*f*c-a*i*d+e*o*d)*w,this}scale(t){const e=this.elements,i=t.x,r=t.y,s=t.z;return e[0]*=i,e[4]*=r,e[8]*=s,e[1]*=i,e[5]*=r,e[9]*=s,e[2]*=i,e[6]*=r,e[10]*=s,e[3]*=i,e[7]*=r,e[11]*=s,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],r=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,i,r))}makeTranslation(t,e,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,i,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,e,-i,0,0,i,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,0,i,0,0,1,0,0,-i,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,0,i,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const i=Math.cos(e),r=Math.sin(e),s=1-i,a=t.x,o=t.y,c=t.z,l=s*a,h=s*o;return this.set(l*a+i,l*o-r*c,l*c+r*o,0,l*o+r*c,h*o+i,h*c-r*a,0,l*c-r*o,h*c+r*a,s*c*c+i,0,0,0,0,1),this}makeScale(t,e,i){return this.set(t,0,0,0,0,e,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,e,i,r,s,a){return this.set(1,i,s,0,t,1,a,0,e,r,1,0,0,0,0,1),this}compose(t,e,i){const r=this.elements,s=e._x,a=e._y,o=e._z,c=e._w,l=s+s,h=a+a,f=o+o,d=s*l,m=s*h,g=s*f,v=a*h,p=a*f,u=o*f,b=c*l,y=c*h,x=c*f,T=i.x,E=i.y,w=i.z;return r[0]=(1-(v+u))*T,r[1]=(m+x)*T,r[2]=(g-y)*T,r[3]=0,r[4]=(m-x)*E,r[5]=(1-(d+u))*E,r[6]=(p+b)*E,r[7]=0,r[8]=(g+y)*w,r[9]=(p-b)*w,r[10]=(1-(d+v))*w,r[11]=0,r[12]=t.x,r[13]=t.y,r[14]=t.z,r[15]=1,this}decompose(t,e,i){const r=this.elements;let s=Ii.set(r[0],r[1],r[2]).length();const a=Ii.set(r[4],r[5],r[6]).length(),o=Ii.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),t.x=r[12],t.y=r[13],t.z=r[14],cn.copy(this);const l=1/s,h=1/a,f=1/o;return cn.elements[0]*=l,cn.elements[1]*=l,cn.elements[2]*=l,cn.elements[4]*=h,cn.elements[5]*=h,cn.elements[6]*=h,cn.elements[8]*=f,cn.elements[9]*=f,cn.elements[10]*=f,e.setFromRotationMatrix(cn),i.x=s,i.y=a,i.z=o,this}makePerspective(t,e,i,r,s,a,o=yn,c=!1){const l=this.elements,h=2*s/(e-t),f=2*s/(i-r),d=(e+t)/(e-t),m=(i+r)/(i-r);let g,v;if(c)g=s/(a-s),v=a*s/(a-s);else if(o===yn)g=-(a+s)/(a-s),v=-2*a*s/(a-s);else if(o===Ps)g=-a/(a-s),v=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=h,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=f,l[9]=m,l[13]=0,l[2]=0,l[6]=0,l[10]=g,l[14]=v,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,i,r,s,a,o=yn,c=!1){const l=this.elements,h=2/(e-t),f=2/(i-r),d=-(e+t)/(e-t),m=-(i+r)/(i-r);let g,v;if(c)g=1/(a-s),v=a/(a-s);else if(o===yn)g=-2/(a-s),v=-(a+s)/(a-s);else if(o===Ps)g=-1/(a-s),v=-s/(a-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=h,l[4]=0,l[8]=0,l[12]=d,l[1]=0,l[5]=f,l[9]=0,l[13]=m,l[2]=0,l[6]=0,l[10]=g,l[14]=v,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){const e=this.elements,i=t.elements;for(let r=0;r<16;r++)if(e[r]!==i[r])return!1;return!0}fromArray(t,e=0){for(let i=0;i<16;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t[e+9]=i[9],t[e+10]=i[10],t[e+11]=i[11],t[e+12]=i[12],t[e+13]=i[13],t[e+14]=i[14],t[e+15]=i[15],t}}const Ii=new U,cn=new _e,zu=new U(0,0,0),ku=new U(1,1,1),Vn=new U,jr=new U,qe=new U,ul=new _e,dl=new ni;class zn{constructor(t=0,e=0,i=0,r=zn.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=i,this._order=r}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,i,r=this._order){return this._x=t,this._y=e,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,i=!0){const r=t.elements,s=r[0],a=r[4],o=r[8],c=r[1],l=r[5],h=r[9],f=r[2],d=r[6],m=r[10];switch(e){case"XYZ":this._y=Math.asin(Kt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,m),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(d,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Kt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,m),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin(Kt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-f,m),this._z=Math.atan2(-a,l)):(this._y=0,this._z=Math.atan2(c,s));break;case"ZYX":this._y=Math.asin(-Kt(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(d,m),this._z=Math.atan2(c,s)):(this._x=0,this._z=Math.atan2(-a,l));break;case"YZX":this._z=Math.asin(Kt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(o,m));break;case"XZY":this._z=Math.asin(-Kt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,l),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-h,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,i){return ul.makeRotationFromQuaternion(t),this.setFromRotationMatrix(ul,e,i)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return dl.setFromEuler(this),this.setFromQuaternion(dl,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}zn.DEFAULT_ORDER="XYZ";class ko{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let Hu=0;const fl=new U,Ui=new ni,Cn=new _e,Kr=new U,ur=new U,Gu=new U,Vu=new ni,pl=new U(1,0,0),ml=new U(0,1,0),gl=new U(0,0,1),_l={type:"added"},Wu={type:"removed"},Fi={type:"childadded",child:null},ia={type:"childremoved",child:null};class Ue extends Ti{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Hu++}),this.uuid=Nn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ue.DEFAULT_UP.clone();const t=new U,e=new zn,i=new ni,r=new U(1,1,1);function s(){i.setFromEuler(e,!1)}function a(){e.setFromQuaternion(i,void 0,!1)}e._onChange(s),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new _e},normalMatrix:{value:new qt}}),this.matrix=new _e,this.matrixWorld=new _e,this.matrixAutoUpdate=Ue.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Ue.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new ko,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Ui.setFromAxisAngle(t,e),this.quaternion.multiply(Ui),this}rotateOnWorldAxis(t,e){return Ui.setFromAxisAngle(t,e),this.quaternion.premultiply(Ui),this}rotateX(t){return this.rotateOnAxis(pl,t)}rotateY(t){return this.rotateOnAxis(ml,t)}rotateZ(t){return this.rotateOnAxis(gl,t)}translateOnAxis(t,e){return fl.copy(t).applyQuaternion(this.quaternion),this.position.add(fl.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(pl,t)}translateY(t){return this.translateOnAxis(ml,t)}translateZ(t){return this.translateOnAxis(gl,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Cn.copy(this.matrixWorld).invert())}lookAt(t,e,i){t.isVector3?Kr.copy(t):Kr.set(t,e,i);const r=this.parent;this.updateWorldMatrix(!0,!1),ur.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Cn.lookAt(ur,Kr,this.up):Cn.lookAt(Kr,ur,this.up),this.quaternion.setFromRotationMatrix(Cn),r&&(Cn.extractRotation(r.matrixWorld),Ui.setFromRotationMatrix(Cn),this.quaternion.premultiply(Ui.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(_l),Fi.child=t,this.dispatchEvent(Fi),Fi.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Wu),ia.child=t,this.dispatchEvent(ia),ia.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Cn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Cn.multiply(t.parent.matrixWorld)),t.applyMatrix4(Cn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(_l),Fi.child=t,this.dispatchEvent(Fi),Fi.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let i=0,r=this.children.length;i<r;i++){const a=this.children[i].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,i=[]){this[t]===e&&i.push(this);const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].getObjectsByProperty(t,e,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ur,t,Gu),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ur,Vu,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let i=0,r=e.length;i<r;i++)e[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let i=0,r=e.length;i<r;i++)e[i].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let i=0,r=e.length;i<r;i++)e[i].updateMatrixWorld(t)}updateWorldMatrix(t,e){const i=this.parent;if(t===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",i={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(o=>({...o})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(t),r.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(t.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const c=o.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){const f=c[l];s(t.shapes,f)}else s(t.shapes,c)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(t.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(s(t.materials,this.material[c]));r.material=o}else r.material=s(t.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const c=this.animations[o];r.animations.push(s(t.animations,c))}}if(e){const o=a(t.geometries),c=a(t.materials),l=a(t.textures),h=a(t.images),f=a(t.shapes),d=a(t.skeletons),m=a(t.animations),g=a(t.nodes);o.length>0&&(i.geometries=o),c.length>0&&(i.materials=c),l.length>0&&(i.textures=l),h.length>0&&(i.images=h),f.length>0&&(i.shapes=f),d.length>0&&(i.skeletons=d),m.length>0&&(i.animations=m),g.length>0&&(i.nodes=g)}return i.object=r,i;function a(o){const c=[];for(const l in o){const h=o[l];delete h.metadata,c.push(h)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let i=0;i<t.children.length;i++){const r=t.children[i];this.add(r.clone())}return this}}Ue.DEFAULT_UP=new U(0,1,0);Ue.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ue.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const hn=new U,Pn=new U,ra=new U,Dn=new U,Ni=new U,Oi=new U,xl=new U,sa=new U,aa=new U,oa=new U,la=new Me,ca=new Me,ha=new Me;class rn{constructor(t=new U,e=new U,i=new U){this.a=t,this.b=e,this.c=i}static getNormal(t,e,i,r){r.subVectors(i,e),hn.subVectors(t,e),r.cross(hn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(t,e,i,r,s){hn.subVectors(r,e),Pn.subVectors(i,e),ra.subVectors(t,e);const a=hn.dot(hn),o=hn.dot(Pn),c=hn.dot(ra),l=Pn.dot(Pn),h=Pn.dot(ra),f=a*l-o*o;if(f===0)return s.set(0,0,0),null;const d=1/f,m=(l*c-o*h)*d,g=(a*h-o*c)*d;return s.set(1-m-g,g,m)}static containsPoint(t,e,i,r){return this.getBarycoord(t,e,i,r,Dn)===null?!1:Dn.x>=0&&Dn.y>=0&&Dn.x+Dn.y<=1}static getInterpolation(t,e,i,r,s,a,o,c){return this.getBarycoord(t,e,i,r,Dn)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(s,Dn.x),c.addScaledVector(a,Dn.y),c.addScaledVector(o,Dn.z),c)}static getInterpolatedAttribute(t,e,i,r,s,a){return la.setScalar(0),ca.setScalar(0),ha.setScalar(0),la.fromBufferAttribute(t,e),ca.fromBufferAttribute(t,i),ha.fromBufferAttribute(t,r),a.setScalar(0),a.addScaledVector(la,s.x),a.addScaledVector(ca,s.y),a.addScaledVector(ha,s.z),a}static isFrontFacing(t,e,i,r){return hn.subVectors(i,e),Pn.subVectors(t,e),hn.cross(Pn).dot(r)<0}set(t,e,i){return this.a.copy(t),this.b.copy(e),this.c.copy(i),this}setFromPointsAndIndices(t,e,i,r){return this.a.copy(t[e]),this.b.copy(t[i]),this.c.copy(t[r]),this}setFromAttributeAndIndices(t,e,i,r){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,r),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return hn.subVectors(this.c,this.b),Pn.subVectors(this.a,this.b),hn.cross(Pn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return rn.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return rn.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,i,r,s){return rn.getInterpolation(t,this.a,this.b,this.c,e,i,r,s)}containsPoint(t){return rn.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return rn.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const i=this.a,r=this.b,s=this.c;let a,o;Ni.subVectors(r,i),Oi.subVectors(s,i),sa.subVectors(t,i);const c=Ni.dot(sa),l=Oi.dot(sa);if(c<=0&&l<=0)return e.copy(i);aa.subVectors(t,r);const h=Ni.dot(aa),f=Oi.dot(aa);if(h>=0&&f<=h)return e.copy(r);const d=c*f-h*l;if(d<=0&&c>=0&&h<=0)return a=c/(c-h),e.copy(i).addScaledVector(Ni,a);oa.subVectors(t,s);const m=Ni.dot(oa),g=Oi.dot(oa);if(g>=0&&m<=g)return e.copy(s);const v=m*l-c*g;if(v<=0&&l>=0&&g<=0)return o=l/(l-g),e.copy(i).addScaledVector(Oi,o);const p=h*g-m*f;if(p<=0&&f-h>=0&&m-g>=0)return xl.subVectors(s,r),o=(f-h)/(f-h+(m-g)),e.copy(r).addScaledVector(xl,o);const u=1/(p+v+d);return a=v*u,o=d*u,e.copy(i).addScaledVector(Ni,a).addScaledVector(Oi,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const Bc={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Wn={h:0,s:0,l:0},Zr={h:0,s:0,l:0};function ua(n,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?n+(t-n)*6*e:e<1/2?t:e<2/3?n+(t-n)*6*(2/3-e):n}class Bt{constructor(t,e,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,i)}set(t,e,i){if(e===void 0&&i===void 0){const r=t;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(t,e,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=De){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,ie.colorSpaceToWorking(this,e),this}setRGB(t,e,i,r=ie.workingColorSpace){return this.r=t,this.g=e,this.b=i,ie.colorSpaceToWorking(this,r),this}setHSL(t,e,i,r=ie.workingColorSpace){if(t=Bo(t,1),e=Kt(e,0,1),i=Kt(i,0,1),e===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+e):i+e-i*e,a=2*i-s;this.r=ua(a,s,t+1/3),this.g=ua(a,s,t),this.b=ua(a,s,t-1/3)}return ie.colorSpaceToWorking(this,r),this}setStyle(t,e=De){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(t)){let s;const a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,e);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,e);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(t)){const s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(s,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=De){const i=Bc[t.toLowerCase()];return i!==void 0?this.setHex(i,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=On(t.r),this.g=On(t.g),this.b=On(t.b),this}copyLinearToSRGB(t){return this.r=Zi(t.r),this.g=Zi(t.g),this.b=Zi(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=De){return ie.workingToColorSpace(Ie.copy(this),t),Math.round(Kt(Ie.r*255,0,255))*65536+Math.round(Kt(Ie.g*255,0,255))*256+Math.round(Kt(Ie.b*255,0,255))}getHexString(t=De){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=ie.workingColorSpace){ie.workingToColorSpace(Ie.copy(this),e);const i=Ie.r,r=Ie.g,s=Ie.b,a=Math.max(i,r,s),o=Math.min(i,r,s);let c,l;const h=(o+a)/2;if(o===a)c=0,l=0;else{const f=a-o;switch(l=h<=.5?f/(a+o):f/(2-a-o),a){case i:c=(r-s)/f+(r<s?6:0);break;case r:c=(s-i)/f+2;break;case s:c=(i-r)/f+4;break}c/=6}return t.h=c,t.s=l,t.l=h,t}getRGB(t,e=ie.workingColorSpace){return ie.workingToColorSpace(Ie.copy(this),e),t.r=Ie.r,t.g=Ie.g,t.b=Ie.b,t}getStyle(t=De){ie.workingToColorSpace(Ie.copy(this),t);const e=Ie.r,i=Ie.g,r=Ie.b;return t!==De?`color(${t} ${e.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(t,e,i){return this.getHSL(Wn),this.setHSL(Wn.h+t,Wn.s+e,Wn.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,i){return this.r=t.r+(e.r-t.r)*i,this.g=t.g+(e.g-t.g)*i,this.b=t.b+(e.b-t.b)*i,this}lerpHSL(t,e){this.getHSL(Wn),t.getHSL(Zr);const i=Sr(Wn.h,Zr.h,e),r=Sr(Wn.s,Zr.s,e),s=Sr(Wn.l,Zr.l,e);return this.setHSL(i,r,s),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,i=this.g,r=this.b,s=t.elements;return this.r=s[0]*e+s[3]*i+s[6]*r,this.g=s[1]*e+s[4]*i+s[7]*r,this.b=s[2]*e+s[5]*i+s[8]*r,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ie=new Bt;Bt.NAMES=Bc;let Xu=0;class Ai extends Ti{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Xu++}),this.uuid=Nn(),this.name="",this.type="Material",this.blending=vi,this.side=ei,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ca,this.blendDst=Pa,this.blendEquation=mi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Bt(0,0,0),this.blendAlpha=0,this.depthFunc=er,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=rl,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ri,this.stencilZFail=Ri,this.stencilZPass=Ri,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const i=t[e];if(i===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const r=this[e];if(r===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[e]=i}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==vi&&(i.blending=this.blending),this.side!==ei&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Ca&&(i.blendSrc=this.blendSrc),this.blendDst!==Pa&&(i.blendDst=this.blendDst),this.blendEquation!==mi&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==er&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==rl&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ri&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Ri&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Ri&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const a=[];for(const o in s){const c=s[o];delete c.metadata,a.push(c)}return a}if(e){const s=r(t.textures),a=r(t.images);s.length>0&&(i.textures=s),a.length>0&&(i.images=a)}return i}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let i=null;if(e!==null){const r=e.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=e[s].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class Br extends Ai{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Bt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new zn,this.combine=bc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const Se=new U,Jr=new Ot;let Yu=0;class ee{constructor(t,e,i=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Yu++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=i,this.usage=_o,this.updateRanges=[],this.gpuType=Fn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,i){t*=this.itemSize,i*=e.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[t+r]=e.array[i+r];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,i=this.count;e<i;e++)Jr.fromBufferAttribute(this,e),Jr.applyMatrix3(t),this.setXY(e,Jr.x,Jr.y);else if(this.itemSize===3)for(let e=0,i=this.count;e<i;e++)Se.fromBufferAttribute(this,e),Se.applyMatrix3(t),this.setXYZ(e,Se.x,Se.y,Se.z);return this}applyMatrix4(t){for(let e=0,i=this.count;e<i;e++)Se.fromBufferAttribute(this,e),Se.applyMatrix4(t),this.setXYZ(e,Se.x,Se.y,Se.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)Se.fromBufferAttribute(this,e),Se.applyNormalMatrix(t),this.setXYZ(e,Se.x,Se.y,Se.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)Se.fromBufferAttribute(this,e),Se.transformDirection(t),this.setXYZ(e,Se.x,Se.y,Se.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let i=this.array[t*this.itemSize+e];return this.normalized&&(i=dn(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=ae(i,this.array)),this.array[t*this.itemSize+e]=i,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=dn(e,this.array)),e}setX(t,e){return this.normalized&&(e=ae(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=dn(e,this.array)),e}setY(t,e){return this.normalized&&(e=ae(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=dn(e,this.array)),e}setZ(t,e){return this.normalized&&(e=ae(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=dn(e,this.array)),e}setW(t,e){return this.normalized&&(e=ae(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,i){return t*=this.itemSize,this.normalized&&(e=ae(e,this.array),i=ae(i,this.array)),this.array[t+0]=e,this.array[t+1]=i,this}setXYZ(t,e,i,r){return t*=this.itemSize,this.normalized&&(e=ae(e,this.array),i=ae(i,this.array),r=ae(r,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=r,this}setXYZW(t,e,i,r,s){return t*=this.itemSize,this.normalized&&(e=ae(e,this.array),i=ae(i,this.array),r=ae(r,this.array),s=ae(s,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=r,this.array[t+3]=s,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==_o&&(t.usage=this.usage),t}}class zc extends ee{constructor(t,e,i){super(new Uint16Array(t),e,i)}}class kc extends ee{constructor(t,e,i){super(new Uint32Array(t),e,i)}}class we extends ee{constructor(t,e,i){super(new Float32Array(t),e,i)}}let qu=0;const Qe=new _e,da=new Ue,Bi=new U,$e=new Fr,dr=new Fr,Pe=new U;class se extends Ti{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:qu++}),this.uuid=Nn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Nc(t)?kc:zc)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,i=0){this.groups.push({start:t,count:e,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new qt().getNormalMatrix(t);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(t),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Qe.makeRotationFromQuaternion(t),this.applyMatrix4(Qe),this}rotateX(t){return Qe.makeRotationX(t),this.applyMatrix4(Qe),this}rotateY(t){return Qe.makeRotationY(t),this.applyMatrix4(Qe),this}rotateZ(t){return Qe.makeRotationZ(t),this.applyMatrix4(Qe),this}translate(t,e,i){return Qe.makeTranslation(t,e,i),this.applyMatrix4(Qe),this}scale(t,e,i){return Qe.makeScale(t,e,i),this.applyMatrix4(Qe),this}lookAt(t){return da.lookAt(t),da.updateMatrix(),this.applyMatrix4(da.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Bi).negate(),this.translate(Bi.x,Bi.y,Bi.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const i=[];for(let r=0,s=t.length;r<s;r++){const a=t[r];i.push(a.x,a.y,a.z||0)}this.setAttribute("position",new we(i,3))}else{const i=Math.min(t.length,e.count);for(let r=0;r<i;r++){const s=t[r];e.setXYZ(r,s.x,s.y,s.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Fr);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new U(-1/0,-1/0,-1/0),new U(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let i=0,r=e.length;i<r;i++){const s=e[i];$e.setFromBufferAttribute(s),this.morphTargetsRelative?(Pe.addVectors(this.boundingBox.min,$e.min),this.boundingBox.expandByPoint(Pe),Pe.addVectors(this.boundingBox.max,$e.max),this.boundingBox.expandByPoint(Pe)):(this.boundingBox.expandByPoint($e.min),this.boundingBox.expandByPoint($e.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Nr);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new U,1/0);return}if(t){const i=this.boundingSphere.center;if($e.setFromBufferAttribute(t),e)for(let s=0,a=e.length;s<a;s++){const o=e[s];dr.setFromBufferAttribute(o),this.morphTargetsRelative?(Pe.addVectors($e.min,dr.min),$e.expandByPoint(Pe),Pe.addVectors($e.max,dr.max),$e.expandByPoint(Pe)):($e.expandByPoint(dr.min),$e.expandByPoint(dr.max))}$e.getCenter(i);let r=0;for(let s=0,a=t.count;s<a;s++)Pe.fromBufferAttribute(t,s),r=Math.max(r,i.distanceToSquared(Pe));if(e)for(let s=0,a=e.length;s<a;s++){const o=e[s],c=this.morphTargetsRelative;for(let l=0,h=o.count;l<h;l++)Pe.fromBufferAttribute(o,l),c&&(Bi.fromBufferAttribute(t,l),Pe.add(Bi)),r=Math.max(r,i.distanceToSquared(Pe))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.position,r=e.normal,s=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new ee(new Float32Array(4*i.count),4));const a=this.getAttribute("tangent"),o=[],c=[];for(let R=0;R<i.count;R++)o[R]=new U,c[R]=new U;const l=new U,h=new U,f=new U,d=new Ot,m=new Ot,g=new Ot,v=new U,p=new U;function u(R,_,M){l.fromBufferAttribute(i,R),h.fromBufferAttribute(i,_),f.fromBufferAttribute(i,M),d.fromBufferAttribute(s,R),m.fromBufferAttribute(s,_),g.fromBufferAttribute(s,M),h.sub(l),f.sub(l),m.sub(d),g.sub(d);const P=1/(m.x*g.y-g.x*m.y);isFinite(P)&&(v.copy(h).multiplyScalar(g.y).addScaledVector(f,-m.y).multiplyScalar(P),p.copy(f).multiplyScalar(m.x).addScaledVector(h,-g.x).multiplyScalar(P),o[R].add(v),o[_].add(v),o[M].add(v),c[R].add(p),c[_].add(p),c[M].add(p))}let b=this.groups;b.length===0&&(b=[{start:0,count:t.count}]);for(let R=0,_=b.length;R<_;++R){const M=b[R],P=M.start,D=M.count;for(let I=P,V=P+D;I<V;I+=3)u(t.getX(I+0),t.getX(I+1),t.getX(I+2))}const y=new U,x=new U,T=new U,E=new U;function w(R){T.fromBufferAttribute(r,R),E.copy(T);const _=o[R];y.copy(_),y.sub(T.multiplyScalar(T.dot(_))).normalize(),x.crossVectors(E,_);const P=x.dot(c[R])<0?-1:1;a.setXYZW(R,y.x,y.y,y.z,P)}for(let R=0,_=b.length;R<_;++R){const M=b[R],P=M.start,D=M.count;for(let I=P,V=P+D;I<V;I+=3)w(t.getX(I+0)),w(t.getX(I+1)),w(t.getX(I+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new ee(new Float32Array(e.count*3),3),this.setAttribute("normal",i);else for(let d=0,m=i.count;d<m;d++)i.setXYZ(d,0,0,0);const r=new U,s=new U,a=new U,o=new U,c=new U,l=new U,h=new U,f=new U;if(t)for(let d=0,m=t.count;d<m;d+=3){const g=t.getX(d+0),v=t.getX(d+1),p=t.getX(d+2);r.fromBufferAttribute(e,g),s.fromBufferAttribute(e,v),a.fromBufferAttribute(e,p),h.subVectors(a,s),f.subVectors(r,s),h.cross(f),o.fromBufferAttribute(i,g),c.fromBufferAttribute(i,v),l.fromBufferAttribute(i,p),o.add(h),c.add(h),l.add(h),i.setXYZ(g,o.x,o.y,o.z),i.setXYZ(v,c.x,c.y,c.z),i.setXYZ(p,l.x,l.y,l.z)}else for(let d=0,m=e.count;d<m;d+=3)r.fromBufferAttribute(e,d+0),s.fromBufferAttribute(e,d+1),a.fromBufferAttribute(e,d+2),h.subVectors(a,s),f.subVectors(r,s),h.cross(f),i.setXYZ(d+0,h.x,h.y,h.z),i.setXYZ(d+1,h.x,h.y,h.z),i.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,i=t.count;e<i;e++)Pe.fromBufferAttribute(t,e),Pe.normalize(),t.setXYZ(e,Pe.x,Pe.y,Pe.z)}toNonIndexed(){function t(o,c){const l=o.array,h=o.itemSize,f=o.normalized,d=new l.constructor(c.length*h);let m=0,g=0;for(let v=0,p=c.length;v<p;v++){o.isInterleavedBufferAttribute?m=c[v]*o.data.stride+o.offset:m=c[v]*h;for(let u=0;u<h;u++)d[g++]=l[m++]}return new ee(d,h,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new se,i=this.index.array,r=this.attributes;for(const o in r){const c=r[o],l=t(c,i);e.setAttribute(o,l)}const s=this.morphAttributes;for(const o in s){const c=[],l=s[o];for(let h=0,f=l.length;h<f;h++){const d=l[h],m=t(d,i);c.push(m)}e.morphAttributes[o]=c}e.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,c=a.length;o<c;o++){const l=a[o];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(t[l]=c[l]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const i=this.attributes;for(const c in i){const l=i[c];t.data.attributes[c]=l.toJSON(t.data)}const r={};let s=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],h=[];for(let f=0,d=l.length;f<d;f++){const m=l[f];h.push(m.toJSON(t.data))}h.length>0&&(r[c]=h,s=!0)}s&&(t.data.morphAttributes=r,t.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(t.data.boundingSphere=o.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const i=t.index;i!==null&&this.setIndex(i.clone());const r=t.attributes;for(const l in r){const h=r[l];this.setAttribute(l,h.clone(e))}const s=t.morphAttributes;for(const l in s){const h=[],f=s[l];for(let d=0,m=f.length;d<m;d++)h.push(f[d].clone(e));this.morphAttributes[l]=h}this.morphTargetsRelative=t.morphTargetsRelative;const a=t.groups;for(let l=0,h=a.length;l<h;l++){const f=a[l];this.addGroup(f.start,f.count,f.materialIndex)}const o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());const c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const vl=new _e,li=new Or,Qr=new Nr,Ml=new U,ts=new U,es=new U,ns=new U,fa=new U,is=new U,yl=new U,rs=new U;class sn extends Ue{constructor(t=new se,e=new Br){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const r=e[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(t,e){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,a=i.morphTargetsRelative;e.fromBufferAttribute(r,t);const o=this.morphTargetInfluences;if(s&&o){is.set(0,0,0);for(let c=0,l=s.length;c<l;c++){const h=o[c],f=s[c];h!==0&&(fa.fromBufferAttribute(f,t),a?is.addScaledVector(fa,h):is.addScaledVector(fa.sub(e),h))}e.add(is)}return e}raycast(t,e){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Qr.copy(i.boundingSphere),Qr.applyMatrix4(s),li.copy(t.ray).recast(t.near),!(Qr.containsPoint(li.origin)===!1&&(li.intersectSphere(Qr,Ml)===null||li.origin.distanceToSquared(Ml)>(t.far-t.near)**2))&&(vl.copy(s).invert(),li.copy(t.ray).applyMatrix4(vl),!(i.boundingBox!==null&&li.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,e,li)))}_computeIntersections(t,e,i){let r;const s=this.geometry,a=this.material,o=s.index,c=s.attributes.position,l=s.attributes.uv,h=s.attributes.uv1,f=s.attributes.normal,d=s.groups,m=s.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,v=d.length;g<v;g++){const p=d[g],u=a[p.materialIndex],b=Math.max(p.start,m.start),y=Math.min(o.count,Math.min(p.start+p.count,m.start+m.count));for(let x=b,T=y;x<T;x+=3){const E=o.getX(x),w=o.getX(x+1),R=o.getX(x+2);r=ss(this,u,t,i,l,h,f,E,w,R),r&&(r.faceIndex=Math.floor(x/3),r.face.materialIndex=p.materialIndex,e.push(r))}}else{const g=Math.max(0,m.start),v=Math.min(o.count,m.start+m.count);for(let p=g,u=v;p<u;p+=3){const b=o.getX(p),y=o.getX(p+1),x=o.getX(p+2);r=ss(this,a,t,i,l,h,f,b,y,x),r&&(r.faceIndex=Math.floor(p/3),e.push(r))}}else if(c!==void 0)if(Array.isArray(a))for(let g=0,v=d.length;g<v;g++){const p=d[g],u=a[p.materialIndex],b=Math.max(p.start,m.start),y=Math.min(c.count,Math.min(p.start+p.count,m.start+m.count));for(let x=b,T=y;x<T;x+=3){const E=x,w=x+1,R=x+2;r=ss(this,u,t,i,l,h,f,E,w,R),r&&(r.faceIndex=Math.floor(x/3),r.face.materialIndex=p.materialIndex,e.push(r))}}else{const g=Math.max(0,m.start),v=Math.min(c.count,m.start+m.count);for(let p=g,u=v;p<u;p+=3){const b=p,y=p+1,x=p+2;r=ss(this,a,t,i,l,h,f,b,y,x),r&&(r.faceIndex=Math.floor(p/3),e.push(r))}}}}function $u(n,t,e,i,r,s,a,o){let c;if(t.side===We?c=i.intersectTriangle(a,s,r,!0,o):c=i.intersectTriangle(r,s,a,t.side===ei,o),c===null)return null;rs.copy(o),rs.applyMatrix4(n.matrixWorld);const l=e.ray.origin.distanceTo(rs);return l<e.near||l>e.far?null:{distance:l,point:rs.clone(),object:n}}function ss(n,t,e,i,r,s,a,o,c,l){n.getVertexPosition(o,ts),n.getVertexPosition(c,es),n.getVertexPosition(l,ns);const h=$u(n,t,e,i,ts,es,ns,yl);if(h){const f=new U;rn.getBarycoord(yl,ts,es,ns,f),r&&(h.uv=rn.getInterpolatedAttribute(r,o,c,l,f,new Ot)),s&&(h.uv1=rn.getInterpolatedAttribute(s,o,c,l,f,new Ot)),a&&(h.normal=rn.getInterpolatedAttribute(a,o,c,l,f,new U),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));const d={a:o,b:c,c:l,normal:new U,materialIndex:0};rn.getNormal(ts,es,ns,d.normal),h.face=d,h.barycoord=f}return h}class zr extends se{constructor(t=1,e=1,i=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:i,widthSegments:r,heightSegments:s,depthSegments:a};const o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);const c=[],l=[],h=[],f=[];let d=0,m=0;g("z","y","x",-1,-1,i,e,t,a,s,0),g("z","y","x",1,-1,i,e,-t,a,s,1),g("x","z","y",1,1,t,i,e,r,a,2),g("x","z","y",1,-1,t,i,-e,r,a,3),g("x","y","z",1,-1,t,e,i,r,s,4),g("x","y","z",-1,-1,t,e,-i,r,s,5),this.setIndex(c),this.setAttribute("position",new we(l,3)),this.setAttribute("normal",new we(h,3)),this.setAttribute("uv",new we(f,2));function g(v,p,u,b,y,x,T,E,w,R,_){const M=x/w,P=T/R,D=x/2,I=T/2,V=E/2,G=w+1,W=R+1;let $=0,k=0;const N=new U;for(let O=0;O<W;O++){const Q=O*P-I;for(let ut=0;ut<G;ut++){const mt=ut*M-D;N[v]=mt*b,N[p]=Q*y,N[u]=V,l.push(N.x,N.y,N.z),N[v]=0,N[p]=0,N[u]=E>0?1:-1,h.push(N.x,N.y,N.z),f.push(ut/w),f.push(1-O/R),$+=1}}for(let O=0;O<R;O++)for(let Q=0;Q<w;Q++){const ut=d+Q+G*O,mt=d+Q+G*(O+1),Pt=d+(Q+1)+G*(O+1),Dt=d+(Q+1)+G*O;c.push(ut,mt,Dt),c.push(mt,Pt,Dt),k+=6}o.addGroup(m,k,_),m+=k,d+=$}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new zr(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function sr(n){const t={};for(const e in n){t[e]={};for(const i in n[e]){const r=n[e][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][i]=null):t[e][i]=r.clone():Array.isArray(r)?t[e][i]=r.slice():t[e][i]=r}}return t}function Oe(n){const t={};for(let e=0;e<n.length;e++){const i=sr(n[e]);for(const r in i)t[r]=i[r]}return t}function ju(n){const t=[];for(let e=0;e<n.length;e++)t.push(n[e].clone());return t}function Hc(n){const t=n.getRenderTarget();return t===null?n.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:ie.workingColorSpace}const Ku={clone:sr,merge:Oe};var Zu=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Ju=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ii extends Ai{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Zu,this.fragmentShader=Ju,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=sr(t.uniforms),this.uniformsGroups=ju(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const r in this.uniforms){const a=this.uniforms[r].value;a&&a.isTexture?e.uniforms[r]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[r]={type:"m4",value:a.toArray()}:e.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(e.extensions=i),e}}class Gc extends Ue{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new _e,this.projectionMatrix=new _e,this.projectionMatrixInverse=new _e,this.coordinateSystem=yn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Xn=new U,Sl=new Ot,El=new Ot;class en extends Gc{constructor(t=50,e=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=Cr*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(yr*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Cr*2*Math.atan(Math.tan(yr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,i){Xn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Xn.x,Xn.y).multiplyScalar(-t/Xn.z),Xn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Xn.x,Xn.y).multiplyScalar(-t/Xn.z)}getViewSize(t,e){return this.getViewBounds(t,Sl,El),e.subVectors(El,Sl)}setViewOffset(t,e,i,r,s,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(yr*.5*this.fov)/this.zoom,i=2*e,r=this.aspect*i,s=-.5*r;const a=this.view;if(this.view!==null&&this.view.enabled){const c=a.fullWidth,l=a.fullHeight;s+=a.offsetX*r/c,e-=a.offsetY*i/l,r*=a.width/c,i*=a.height/l}const o=this.filmOffset;o!==0&&(s+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,e,e-i,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const zi=-90,ki=1;class Qu extends Ue{constructor(t,e,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new en(zi,ki,t,e);r.layers=this.layers,this.add(r);const s=new en(zi,ki,t,e);s.layers=this.layers,this.add(s);const a=new en(zi,ki,t,e);a.layers=this.layers,this.add(a);const o=new en(zi,ki,t,e);o.layers=this.layers,this.add(o);const c=new en(zi,ki,t,e);c.layers=this.layers,this.add(c);const l=new en(zi,ki,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[i,r,s,a,o,c]=e;for(const l of e)this.remove(l);if(t===yn)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===Ps)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const l of e)this.add(l),l.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,c,l,h]=this.children,f=t.getRenderTarget(),d=t.getActiveCubeFace(),m=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;const v=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,t.setRenderTarget(i,0,r),t.render(e,s),t.setRenderTarget(i,1,r),t.render(e,a),t.setRenderTarget(i,2,r),t.render(e,o),t.setRenderTarget(i,3,r),t.render(e,c),t.setRenderTarget(i,4,r),t.render(e,l),i.texture.generateMipmaps=v,t.setRenderTarget(i,5,r),t.render(e,h),t.setRenderTarget(f,d,m),t.xr.enabled=g,i.texture.needsPMREMUpdate=!0}}class Vc extends ke{constructor(t=[],e=nr,i,r,s,a,o,c,l,h){super(t,e,i,r,s,a,o,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class td extends Si{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const i={width:t,height:t,depth:1},r=[i,i,i,i,i,i];this.texture=new Vc(r),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new zr(5,5,5),s=new ii({name:"CubemapFromEquirect",uniforms:sr(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:We,blending:Jn});s.uniforms.tEquirect.value=e;const a=new sn(r,s),o=e.minFilter;return e.minFilter===jn&&(e.minFilter=fn),new Qu(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e=!0,i=!0,r=!0){const s=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,i,r);t.setRenderTarget(s)}}class ze extends Ue{constructor(){super(),this.isGroup=!0,this.type="Group"}}const ed={type:"move"};class pa{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ze,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ze,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new U,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new U),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ze,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new U,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new U),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const i of t.hand.values())this._getHandJoint(e,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,i){let r=null,s=null,a=null;const o=this._targetRay,c=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){a=!0;for(const v of t.hand.values()){const p=e.getJointPose(v,i),u=this._getHandJoint(l,v);p!==null&&(u.matrix.fromArray(p.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.matrixWorldNeedsUpdate=!0,u.jointRadius=p.radius),u.visible=p!==null}const h=l.joints["index-finger-tip"],f=l.joints["thumb-tip"],d=h.position.distanceTo(f.position),m=.02,g=.005;l.inputState.pinching&&d>m+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&d<=m-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(s=e.getPose(t.gripSpace,i),s!==null&&(c.matrix.fromArray(s.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,s.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(s.linearVelocity)):c.hasLinearVelocity=!1,s.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(s.angularVelocity)):c.hasAngularVelocity=!1));o!==null&&(r=e.getPose(t.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(ed)))}return o!==null&&(o.visible=r!==null),c!==null&&(c.visible=s!==null),l!==null&&(l.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const i=new ze;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[e.jointName]=i,t.add(i)}return t.joints[e.jointName]}}class Ho{constructor(t,e=25e-5){this.isFogExp2=!0,this.name="",this.color=new Bt(t),this.density=e}clone(){return new Ho(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class nd extends Ue{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new zn,this.environmentIntensity=1,this.environmentRotation=new zn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class id{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=_o,this.updateRanges=[],this.version=0,this.uuid=Nn()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,i){t*=this.stride,i*=e.stride;for(let r=0,s=this.stride;r<s;r++)this.array[t+r]=e.array[i+r];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Nn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(e,this.stride);return i.setUsage(this.usage),i}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Nn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Ne=new U;class Ls{constructor(t,e,i,r=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=i,this.normalized=r}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,i=this.data.count;e<i;e++)Ne.fromBufferAttribute(this,e),Ne.applyMatrix4(t),this.setXYZ(e,Ne.x,Ne.y,Ne.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)Ne.fromBufferAttribute(this,e),Ne.applyNormalMatrix(t),this.setXYZ(e,Ne.x,Ne.y,Ne.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)Ne.fromBufferAttribute(this,e),Ne.transformDirection(t),this.setXYZ(e,Ne.x,Ne.y,Ne.z);return this}getComponent(t,e){let i=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(i=dn(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=ae(i,this.array)),this.data.array[t*this.data.stride+this.offset+e]=i,this}setX(t,e){return this.normalized&&(e=ae(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=ae(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=ae(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=ae(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=dn(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=dn(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=dn(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=dn(e,this.array)),e}setXY(t,e,i){return t=t*this.data.stride+this.offset,this.normalized&&(e=ae(e,this.array),i=ae(i,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this}setXYZ(t,e,i,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=ae(e,this.array),i=ae(i,this.array),r=ae(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this.data.array[t+2]=r,this}setXYZW(t,e,i,r,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=ae(e,this.array),i=ae(i,this.array),r=ae(r,this.array),s=ae(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this.data.array[t+2]=r,this.data.array[t+3]=s,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let i=0;i<this.count;i++){const r=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)e.push(this.data.array[r+s])}return new ee(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new Ls(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let i=0;i<this.count;i++){const r=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)e.push(this.data.array[r+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class ge extends Ai{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Bt(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}let Hi;const fr=new U,Gi=new U,Vi=new U,Wi=new Ot,pr=new Ot,Wc=new _e,as=new U,mr=new U,os=new U,bl=new Ot,ma=new Ot,Tl=new Ot;class ve extends Ue{constructor(t=new ge){if(super(),this.isSprite=!0,this.type="Sprite",Hi===void 0){Hi=new se;const e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new id(e,5);Hi.setIndex([0,1,2,0,2,3]),Hi.setAttribute("position",new Ls(i,3,0,!1)),Hi.setAttribute("uv",new Ls(i,2,3,!1))}this.geometry=Hi,this.material=t,this.center=new Ot(.5,.5),this.count=1}raycast(t,e){t.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Gi.setFromMatrixScale(this.matrixWorld),Wc.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),Vi.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Gi.multiplyScalar(-Vi.z);const i=this.material.rotation;let r,s;i!==0&&(s=Math.cos(i),r=Math.sin(i));const a=this.center;ls(as.set(-.5,-.5,0),Vi,a,Gi,r,s),ls(mr.set(.5,-.5,0),Vi,a,Gi,r,s),ls(os.set(.5,.5,0),Vi,a,Gi,r,s),bl.set(0,0),ma.set(1,0),Tl.set(1,1);let o=t.ray.intersectTriangle(as,mr,os,!1,fr);if(o===null&&(ls(mr.set(-.5,.5,0),Vi,a,Gi,r,s),ma.set(0,1),o=t.ray.intersectTriangle(as,os,mr,!1,fr),o===null))return;const c=t.ray.origin.distanceTo(fr);c<t.near||c>t.far||e.push({distance:c,point:fr.clone(),uv:rn.getInterpolation(fr,as,mr,os,bl,ma,Tl,new Ot),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}}function ls(n,t,e,i,r,s){Wi.subVectors(n,e).addScalar(.5).multiply(i),r!==void 0?(pr.x=s*Wi.x-r*Wi.y,pr.y=r*Wi.x+s*Wi.y):pr.copy(Wi),n.copy(t),n.x+=pr.x,n.y+=pr.y,n.applyMatrix4(Wc)}const ga=new U,rd=new U,sd=new qt;class Yn{constructor(t=new U(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,i,r){return this.normal.set(t,e,i),this.constant=r,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,i){const r=ga.subVectors(i,e).cross(rd.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(r,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const i=t.delta(ga),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const s=-(t.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:e.copy(t.start).addScaledVector(i,s)}intersectsLine(t){const e=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return e<0&&i>0||i<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const i=e||sd.getNormalMatrix(t),r=this.coplanarPoint(ga).applyMatrix4(t),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ci=new Nr,ad=new Ot(.5,.5),cs=new U;class Xc{constructor(t=new Yn,e=new Yn,i=new Yn,r=new Yn,s=new Yn,a=new Yn){this.planes=[t,e,i,r,s,a]}set(t,e,i,r,s,a){const o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(i),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(t){const e=this.planes;for(let i=0;i<6;i++)e[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,e=yn,i=!1){const r=this.planes,s=t.elements,a=s[0],o=s[1],c=s[2],l=s[3],h=s[4],f=s[5],d=s[6],m=s[7],g=s[8],v=s[9],p=s[10],u=s[11],b=s[12],y=s[13],x=s[14],T=s[15];if(r[0].setComponents(l-a,m-h,u-g,T-b).normalize(),r[1].setComponents(l+a,m+h,u+g,T+b).normalize(),r[2].setComponents(l+o,m+f,u+v,T+y).normalize(),r[3].setComponents(l-o,m-f,u-v,T-y).normalize(),i)r[4].setComponents(c,d,p,x).normalize(),r[5].setComponents(l-c,m-d,u-p,T-x).normalize();else if(r[4].setComponents(l-c,m-d,u-p,T-x).normalize(),e===yn)r[5].setComponents(l+c,m+d,u+p,T+x).normalize();else if(e===Ps)r[5].setComponents(c,d,p,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),ci.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),ci.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(ci)}intersectsSprite(t){ci.center.set(0,0,0);const e=ad.distanceTo(t.center);return ci.radius=.7071067811865476+e,ci.applyMatrix4(t.matrixWorld),this.intersectsSphere(ci)}intersectsSphere(t){const e=this.planes,i=t.center,r=-t.radius;for(let s=0;s<6;s++)if(e[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(t){const e=this.planes;for(let i=0;i<6;i++){const r=e[i];if(cs.x=r.normal.x>0?t.max.x:t.min.x,cs.y=r.normal.y>0?t.max.y:t.min.y,cs.z=r.normal.z>0?t.max.z:t.min.z,r.distanceToPoint(cs)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let i=0;i<6;i++)if(e[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Kn extends Ai{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Bt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const Is=new U,Us=new U,Al=new _e,gr=new Or,hs=new Nr,_a=new U,wl=new U;class Ji extends Ue{constructor(t=new se,e=new Kn){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,i=[0];for(let r=1,s=e.count;r<s;r++)Is.fromBufferAttribute(e,r-1),Us.fromBufferAttribute(e,r),i[r]=i[r-1],i[r]+=Is.distanceTo(Us);t.setAttribute("lineDistance",new we(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const i=this.geometry,r=this.matrixWorld,s=t.params.Line.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),hs.copy(i.boundingSphere),hs.applyMatrix4(r),hs.radius+=s,t.ray.intersectsSphere(hs)===!1)return;Al.copy(r).invert(),gr.copy(t.ray).applyMatrix4(Al);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=this.isLineSegments?2:1,h=i.index,d=i.attributes.position;if(h!==null){const m=Math.max(0,a.start),g=Math.min(h.count,a.start+a.count);for(let v=m,p=g-1;v<p;v+=l){const u=h.getX(v),b=h.getX(v+1),y=us(this,t,gr,c,u,b,v);y&&e.push(y)}if(this.isLineLoop){const v=h.getX(g-1),p=h.getX(m),u=us(this,t,gr,c,v,p,g-1);u&&e.push(u)}}else{const m=Math.max(0,a.start),g=Math.min(d.count,a.start+a.count);for(let v=m,p=g-1;v<p;v+=l){const u=us(this,t,gr,c,v,v+1,v);u&&e.push(u)}if(this.isLineLoop){const v=us(this,t,gr,c,g-1,m,g-1);v&&e.push(v)}}}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const r=e[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function us(n,t,e,i,r,s,a){const o=n.geometry.attributes.position;if(Is.fromBufferAttribute(o,r),Us.fromBufferAttribute(o,s),e.distanceSqToSegment(Is,Us,_a,wl)>i)return;_a.applyMatrix4(n.matrixWorld);const l=t.ray.origin.distanceTo(_a);if(!(l<t.near||l>t.far))return{distance:l,point:wl.clone().applyMatrix4(n.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:n}}const Rl=new U,Cl=new U;class Yc extends Ji{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,i=[];for(let r=0,s=e.count;r<s;r+=2)Rl.fromBufferAttribute(e,r),Cl.fromBufferAttribute(e,r+1),i[r]=r===0?0:i[r-1],i[r+1]=i[r]+Rl.distanceTo(Cl);t.setAttribute("lineDistance",new we(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class od extends Ji{constructor(t,e){super(t,e),this.isLineLoop=!0,this.type="LineLoop"}}class mn extends Ai{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Bt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const Pl=new _e,xo=new Or,ds=new Nr,fs=new U;class Sn extends Ue{constructor(t=new se,e=new mn){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){const i=this.geometry,r=this.matrixWorld,s=t.params.Points.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),ds.copy(i.boundingSphere),ds.applyMatrix4(r),ds.radius+=s,t.ray.intersectsSphere(ds)===!1)return;Pl.copy(r).invert(),xo.copy(t.ray).applyMatrix4(Pl);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=i.index,f=i.attributes.position;if(l!==null){const d=Math.max(0,a.start),m=Math.min(l.count,a.start+a.count);for(let g=d,v=m;g<v;g++){const p=l.getX(g);fs.fromBufferAttribute(f,p),Dl(fs,p,c,r,t,e,this)}}else{const d=Math.max(0,a.start),m=Math.min(f.count,a.start+a.count);for(let g=d,v=m;g<v;g++)fs.fromBufferAttribute(f,g),Dl(fs,g,c,r,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const r=e[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function Dl(n,t,e,i,r,s,a){const o=xo.distanceSqToPoint(n);if(o<e){const c=new U;xo.closestPointToPoint(n,c),c.applyMatrix4(i);const l=r.ray.origin.distanceTo(c);if(l<r.near||l>r.far)return;s.push({distance:l,distanceToRay:Math.sqrt(o),point:c,index:t,face:null,faceIndex:null,barycoord:null,object:a})}}class Bs extends ke{constructor(t,e,i,r,s,a,o,c,l){super(t,e,i,r,s,a,o,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}}class qc extends ke{constructor(t,e,i=yi,r,s,a,o=_n,c=_n,l,h=wr,f=1){if(h!==wr&&h!==Rr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const d={width:t,height:e,depth:f};super(d,r,s,a,o,c,h,i,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new zo(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}class $c extends ke{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}}class Go extends se{constructor(t=[],e=[],i=1,r=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:i,detail:r};const s=[],a=[];o(r),l(i),h(),this.setAttribute("position",new we(s,3)),this.setAttribute("normal",new we(s.slice(),3)),this.setAttribute("uv",new we(a,2)),r===0?this.computeVertexNormals():this.normalizeNormals();function o(b){const y=new U,x=new U,T=new U;for(let E=0;E<e.length;E+=3)m(e[E+0],y),m(e[E+1],x),m(e[E+2],T),c(y,x,T,b)}function c(b,y,x,T){const E=T+1,w=[];for(let R=0;R<=E;R++){w[R]=[];const _=b.clone().lerp(x,R/E),M=y.clone().lerp(x,R/E),P=E-R;for(let D=0;D<=P;D++)D===0&&R===E?w[R][D]=_:w[R][D]=_.clone().lerp(M,D/P)}for(let R=0;R<E;R++)for(let _=0;_<2*(E-R)-1;_++){const M=Math.floor(_/2);_%2===0?(d(w[R][M+1]),d(w[R+1][M]),d(w[R][M])):(d(w[R][M+1]),d(w[R+1][M+1]),d(w[R+1][M]))}}function l(b){const y=new U;for(let x=0;x<s.length;x+=3)y.x=s[x+0],y.y=s[x+1],y.z=s[x+2],y.normalize().multiplyScalar(b),s[x+0]=y.x,s[x+1]=y.y,s[x+2]=y.z}function h(){const b=new U;for(let y=0;y<s.length;y+=3){b.x=s[y+0],b.y=s[y+1],b.z=s[y+2];const x=p(b)/2/Math.PI+.5,T=u(b)/Math.PI+.5;a.push(x,1-T)}g(),f()}function f(){for(let b=0;b<a.length;b+=6){const y=a[b+0],x=a[b+2],T=a[b+4],E=Math.max(y,x,T),w=Math.min(y,x,T);E>.9&&w<.1&&(y<.2&&(a[b+0]+=1),x<.2&&(a[b+2]+=1),T<.2&&(a[b+4]+=1))}}function d(b){s.push(b.x,b.y,b.z)}function m(b,y){const x=b*3;y.x=t[x+0],y.y=t[x+1],y.z=t[x+2]}function g(){const b=new U,y=new U,x=new U,T=new U,E=new Ot,w=new Ot,R=new Ot;for(let _=0,M=0;_<s.length;_+=9,M+=6){b.set(s[_+0],s[_+1],s[_+2]),y.set(s[_+3],s[_+4],s[_+5]),x.set(s[_+6],s[_+7],s[_+8]),E.set(a[M+0],a[M+1]),w.set(a[M+2],a[M+3]),R.set(a[M+4],a[M+5]),T.copy(b).add(y).add(x).divideScalar(3);const P=p(T);v(E,M+0,b,P),v(w,M+2,y,P),v(R,M+4,x,P)}}function v(b,y,x,T){T<0&&b.x===1&&(a[y]=b.x-1),x.x===0&&x.z===0&&(a[y]=T/2/Math.PI+.5)}function p(b){return Math.atan2(b.z,-b.x)}function u(b){return Math.atan2(-b.y,Math.sqrt(b.x*b.x+b.z*b.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Go(t.vertices,t.indices,t.radius,t.details)}}class Vo extends Go{constructor(t=1,e=0){const i=(1+Math.sqrt(5))/2,r=[-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],s=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(r,s,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new Vo(t.radius,t.detail)}}class zs extends se{constructor(t=1,e=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:i,heightSegments:r};const s=t/2,a=e/2,o=Math.floor(i),c=Math.floor(r),l=o+1,h=c+1,f=t/o,d=e/c,m=[],g=[],v=[],p=[];for(let u=0;u<h;u++){const b=u*d-a;for(let y=0;y<l;y++){const x=y*f-s;g.push(x,-b,0),v.push(0,0,1),p.push(y/o),p.push(1-u/c)}}for(let u=0;u<c;u++)for(let b=0;b<o;b++){const y=b+l*u,x=b+l*(u+1),T=b+1+l*(u+1),E=b+1+l*u;m.push(y,x,E),m.push(x,T,E)}this.setIndex(m),this.setAttribute("position",new we(g,3)),this.setAttribute("normal",new we(v,3)),this.setAttribute("uv",new we(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new zs(t.width,t.height,t.widthSegments,t.heightSegments)}}class ks extends se{constructor(t=1,e=32,i=16,r=0,s=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:i,phiStart:r,phiLength:s,thetaStart:a,thetaLength:o},e=Math.max(3,Math.floor(e)),i=Math.max(2,Math.floor(i));const c=Math.min(a+o,Math.PI);let l=0;const h=[],f=new U,d=new U,m=[],g=[],v=[],p=[];for(let u=0;u<=i;u++){const b=[],y=u/i;let x=0;u===0&&a===0?x=.5/e:u===i&&c===Math.PI&&(x=-.5/e);for(let T=0;T<=e;T++){const E=T/e;f.x=-t*Math.cos(r+E*s)*Math.sin(a+y*o),f.y=t*Math.cos(a+y*o),f.z=t*Math.sin(r+E*s)*Math.sin(a+y*o),g.push(f.x,f.y,f.z),d.copy(f).normalize(),v.push(d.x,d.y,d.z),p.push(E+x,1-y),b.push(l++)}h.push(b)}for(let u=0;u<i;u++)for(let b=0;b<e;b++){const y=h[u][b+1],x=h[u][b],T=h[u+1][b],E=h[u+1][b+1];(u!==0||a>0)&&m.push(y,x,E),(u!==i-1||c<Math.PI)&&m.push(x,T,E)}this.setIndex(m),this.setAttribute("position",new we(g,3)),this.setAttribute("normal",new we(v,3)),this.setAttribute("uv",new we(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ks(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class Wo extends se{constructor(t=1,e=.4,i=12,r=48,s=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:i,tubularSegments:r,arc:s},i=Math.floor(i),r=Math.floor(r);const a=[],o=[],c=[],l=[],h=new U,f=new U,d=new U;for(let m=0;m<=i;m++)for(let g=0;g<=r;g++){const v=g/r*s,p=m/i*Math.PI*2;f.x=(t+e*Math.cos(p))*Math.cos(v),f.y=(t+e*Math.cos(p))*Math.sin(v),f.z=e*Math.sin(p),o.push(f.x,f.y,f.z),h.x=t*Math.cos(v),h.y=t*Math.sin(v),d.subVectors(f,h).normalize(),c.push(d.x,d.y,d.z),l.push(g/r),l.push(m/i)}for(let m=1;m<=i;m++)for(let g=1;g<=r;g++){const v=(r+1)*m+g-1,p=(r+1)*(m-1)+g-1,u=(r+1)*(m-1)+g,b=(r+1)*m+g;a.push(v,p,b),a.push(p,u,b)}this.setIndex(a),this.setAttribute("position",new we(o,3)),this.setAttribute("normal",new we(c,3)),this.setAttribute("uv",new we(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Wo(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class ld extends se{constructor(t=null){if(super(),this.type="WireframeGeometry",this.parameters={geometry:t},t!==null){const e=[],i=new Set,r=new U,s=new U;if(t.index!==null){const a=t.attributes.position,o=t.index;let c=t.groups;c.length===0&&(c=[{start:0,count:o.count,materialIndex:0}]);for(let l=0,h=c.length;l<h;++l){const f=c[l],d=f.start,m=f.count;for(let g=d,v=d+m;g<v;g+=3)for(let p=0;p<3;p++){const u=o.getX(g+p),b=o.getX(g+(p+1)%3);r.fromBufferAttribute(a,u),s.fromBufferAttribute(a,b),Ll(r,s,i)===!0&&(e.push(r.x,r.y,r.z),e.push(s.x,s.y,s.z))}}}else{const a=t.attributes.position;for(let o=0,c=a.count/3;o<c;o++)for(let l=0;l<3;l++){const h=3*o+l,f=3*o+(l+1)%3;r.fromBufferAttribute(a,h),s.fromBufferAttribute(a,f),Ll(r,s,i)===!0&&(e.push(r.x,r.y,r.z),e.push(s.x,s.y,s.z))}}this.setAttribute("position",new we(e,3))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}}function Ll(n,t,e){const i=`${n.x},${n.y},${n.z}-${t.x},${t.y},${t.z}`,r=`${t.x},${t.y},${t.z}-${n.x},${n.y},${n.z}`;return e.has(i)===!0||e.has(r)===!0?!1:(e.add(i),e.add(r),!0)}class cd extends Ai{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=iu,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class hd extends Ai{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}class ud extends Gc{constructor(t=-1,e=1,i=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=i,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,i,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-t,a=i+t,o=r+e,c=r-e;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=l*this.view.offsetX,a=s+l*this.view.width,o-=h*this.view.offsetY,c=o-h*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}class dd extends en{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}const Il=new _e;class fd{constructor(t,e,i=0,r=1/0){this.ray=new Or(t,e),this.near=i,this.far=r,this.camera=null,this.layers=new ko,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return Il.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Il),this}intersectObject(t,e=!0,i=[]){return vo(t,this,i,e),i.sort(Ul),i}intersectObjects(t,e=!0,i=[]){for(let r=0,s=t.length;r<s;r++)vo(t[r],this,i,e);return i.sort(Ul),i}}function Ul(n,t){return n.distance-t.distance}function vo(n,t,e,i){let r=!0;if(n.layers.test(t.layers)&&n.raycast(t,e)===!1&&(r=!1),r===!0&&i===!0){const s=n.children;for(let a=0,o=s.length;a<o;a++)vo(s[a],t,e,!0)}}class Fl{constructor(t=1,e=0,i=0){this.radius=t,this.phi=e,this.theta=i}set(t,e,i){return this.radius=t,this.phi=e,this.theta=i,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=Kt(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,i){return this.radius=Math.sqrt(t*t+e*e+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,i),this.phi=Math.acos(Kt(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class pd extends Ti{constructor(t,e=null){super(),this.object=t,this.domElement=e,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(t){if(t===void 0){console.warn("THREE.Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=t}disconnect(){}dispose(){}update(){}}function Nl(n,t,e,i){const r=md(i);switch(e){case Dc:return n*t;case Ic:return n*t/r.components*r.byteLength;case Fo:return n*t/r.components*r.byteLength;case Uc:return n*t*2/r.components*r.byteLength;case No:return n*t*2/r.components*r.byteLength;case Lc:return n*t*3/r.components*r.byteLength;case pn:return n*t*4/r.components*r.byteLength;case Oo:return n*t*4/r.components*r.byteLength;case Ss:case Es:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case bs:case Ts:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case Va:case Xa:return Math.max(n,16)*Math.max(t,8)/4;case Ga:case Wa:return Math.max(n,8)*Math.max(t,8)/2;case Ya:case qa:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case $a:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case ja:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case Ka:return Math.floor((n+4)/5)*Math.floor((t+3)/4)*16;case Za:return Math.floor((n+4)/5)*Math.floor((t+4)/5)*16;case Ja:return Math.floor((n+5)/6)*Math.floor((t+4)/5)*16;case Qa:return Math.floor((n+5)/6)*Math.floor((t+5)/6)*16;case to:return Math.floor((n+7)/8)*Math.floor((t+4)/5)*16;case eo:return Math.floor((n+7)/8)*Math.floor((t+5)/6)*16;case no:return Math.floor((n+7)/8)*Math.floor((t+7)/8)*16;case io:return Math.floor((n+9)/10)*Math.floor((t+4)/5)*16;case ro:return Math.floor((n+9)/10)*Math.floor((t+5)/6)*16;case so:return Math.floor((n+9)/10)*Math.floor((t+7)/8)*16;case ao:return Math.floor((n+9)/10)*Math.floor((t+9)/10)*16;case oo:return Math.floor((n+11)/12)*Math.floor((t+9)/10)*16;case lo:return Math.floor((n+11)/12)*Math.floor((t+11)/12)*16;case co:case ho:case uo:return Math.ceil(n/4)*Math.ceil(t/4)*16;case fo:case po:return Math.ceil(n/4)*Math.ceil(t/4)*8;case mo:case go:return Math.ceil(n/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function md(n){switch(n){case Bn:case wc:return{byteLength:1,components:1};case Tr:case Rc:case Ur:return{byteLength:2,components:1};case Io:case Uo:return{byteLength:2,components:4};case yi:case Lo:case Fn:return{byteLength:4,components:1};case Cc:case Pc:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Do}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Do);function jc(){let n=null,t=!1,e=null,i=null;function r(s,a){e(s,a),i=n.requestAnimationFrame(r)}return{start:function(){t!==!0&&e!==null&&(i=n.requestAnimationFrame(r),t=!0)},stop:function(){n.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(s){e=s},setContext:function(s){n=s}}}function gd(n){const t=new WeakMap;function e(o,c){const l=o.array,h=o.usage,f=l.byteLength,d=n.createBuffer();n.bindBuffer(c,d),n.bufferData(c,l,h),o.onUploadCallback();let m;if(l instanceof Float32Array)m=n.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)m=n.HALF_FLOAT;else if(l instanceof Uint16Array)o.isFloat16BufferAttribute?m=n.HALF_FLOAT:m=n.UNSIGNED_SHORT;else if(l instanceof Int16Array)m=n.SHORT;else if(l instanceof Uint32Array)m=n.UNSIGNED_INT;else if(l instanceof Int32Array)m=n.INT;else if(l instanceof Int8Array)m=n.BYTE;else if(l instanceof Uint8Array)m=n.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)m=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:d,type:m,bytesPerElement:l.BYTES_PER_ELEMENT,version:o.version,size:f}}function i(o,c,l){const h=c.array,f=c.updateRanges;if(n.bindBuffer(l,o),f.length===0)n.bufferSubData(l,0,h);else{f.sort((m,g)=>m.start-g.start);let d=0;for(let m=1;m<f.length;m++){const g=f[d],v=f[m];v.start<=g.start+g.count+1?g.count=Math.max(g.count,v.start+v.count-g.start):(++d,f[d]=v)}f.length=d+1;for(let m=0,g=f.length;m<g;m++){const v=f[m];n.bufferSubData(l,v.start*h.BYTES_PER_ELEMENT,h,v.start,v.count)}c.clearUpdateRanges()}c.onUploadCallback()}function r(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);const c=t.get(o);c&&(n.deleteBuffer(c.buffer),t.delete(o))}function a(o,c){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const h=t.get(o);(!h||h.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const l=t.get(o);if(l===void 0)t.set(o,e(o,c));else if(l.version<o.version){if(l.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(l.buffer,o,c),l.version=o.version}}return{get:r,remove:s,update:a}}var _d=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,xd=`#ifdef USE_ALPHAHASH
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
#endif`,vd=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Md=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,yd=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Sd=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Ed=`#ifdef USE_AOMAP
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
#endif`,bd=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Td=`#ifdef USE_BATCHING
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
#endif`,Ad=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,wd=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Rd=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Cd=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Pd=`#ifdef USE_IRIDESCENCE
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
#endif`,Dd=`#ifdef USE_BUMPMAP
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
#endif`,Ld=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Id=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Ud=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Fd=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Nd=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Od=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Bd=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,zd=`#if defined( USE_COLOR_ALPHA )
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
#endif`,kd=`#define PI 3.141592653589793
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
} // validated`,Hd=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Gd=`vec3 transformedNormal = objectNormal;
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
#endif`,Vd=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Wd=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Xd=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Yd=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,qd="gl_FragColor = linearToOutputTexel( gl_FragColor );",$d=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,jd=`#ifdef USE_ENVMAP
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
#endif`,Kd=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Zd=`#ifdef USE_ENVMAP
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
#endif`,Jd=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Qd=`#ifdef USE_ENVMAP
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
#endif`,tf=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,ef=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,nf=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,rf=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,sf=`#ifdef USE_GRADIENTMAP
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
}`,af=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,of=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,lf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,cf=`uniform bool receiveShadow;
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
#endif`,hf=`#ifdef USE_ENVMAP
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
#endif`,uf=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,df=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,ff=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,pf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,mf=`PhysicalMaterial material;
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
#endif`,gf=`struct PhysicalMaterial {
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
}`,_f=`
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
#endif`,xf=`#if defined( RE_IndirectDiffuse )
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
#endif`,vf=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Mf=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,yf=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Sf=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Ef=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,bf=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Tf=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Af=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,wf=`#if defined( USE_POINTS_UV )
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
#endif`,Rf=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Cf=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Pf=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Df=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Lf=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,If=`#ifdef USE_MORPHTARGETS
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
#endif`,Uf=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Ff=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Nf=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Of=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Bf=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,zf=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,kf=`#ifdef USE_NORMALMAP
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
#endif`,Hf=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Gf=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Vf=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Wf=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Xf=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Yf=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,qf=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,$f=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,jf=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Kf=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Zf=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Jf=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Qf=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,tp=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,ep=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,np=`float getShadowMask() {
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
}`,ip=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,rp=`#ifdef USE_SKINNING
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
#endif`,sp=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,ap=`#ifdef USE_SKINNING
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
#endif`,op=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,lp=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,cp=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,hp=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,up=`#ifdef USE_TRANSMISSION
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
#endif`,dp=`#ifdef USE_TRANSMISSION
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
#endif`,fp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,pp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,mp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,gp=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const _p=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,xp=`uniform sampler2D t2D;
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
}`,vp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Mp=`#ifdef ENVMAP_TYPE_CUBE
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
}`,yp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Sp=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ep=`#include <common>
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
}`,bp=`#if DEPTH_PACKING == 3200
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
}`,Tp=`#define DISTANCE
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
}`,Ap=`#define DISTANCE
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
}`,wp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Rp=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Cp=`uniform float scale;
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
}`,Pp=`uniform vec3 diffuse;
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
}`,Dp=`#include <common>
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
}`,Lp=`uniform vec3 diffuse;
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
}`,Ip=`#define LAMBERT
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
}`,Up=`#define LAMBERT
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
}`,Fp=`#define MATCAP
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
}`,Np=`#define MATCAP
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
}`,Op=`#define NORMAL
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
}`,Bp=`#define NORMAL
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
}`,zp=`#define PHONG
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
}`,kp=`#define PHONG
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
}`,Hp=`#define STANDARD
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
}`,Gp=`#define STANDARD
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
}`,Vp=`#define TOON
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
}`,Wp=`#define TOON
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
}`,Xp=`uniform float size;
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
}`,Yp=`uniform vec3 diffuse;
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
}`,qp=`#include <common>
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
}`,$p=`uniform vec3 color;
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
}`,jp=`uniform float rotation;
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
}`,Kp=`uniform vec3 diffuse;
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
}`,$t={alphahash_fragment:_d,alphahash_pars_fragment:xd,alphamap_fragment:vd,alphamap_pars_fragment:Md,alphatest_fragment:yd,alphatest_pars_fragment:Sd,aomap_fragment:Ed,aomap_pars_fragment:bd,batching_pars_vertex:Td,batching_vertex:Ad,begin_vertex:wd,beginnormal_vertex:Rd,bsdfs:Cd,iridescence_fragment:Pd,bumpmap_pars_fragment:Dd,clipping_planes_fragment:Ld,clipping_planes_pars_fragment:Id,clipping_planes_pars_vertex:Ud,clipping_planes_vertex:Fd,color_fragment:Nd,color_pars_fragment:Od,color_pars_vertex:Bd,color_vertex:zd,common:kd,cube_uv_reflection_fragment:Hd,defaultnormal_vertex:Gd,displacementmap_pars_vertex:Vd,displacementmap_vertex:Wd,emissivemap_fragment:Xd,emissivemap_pars_fragment:Yd,colorspace_fragment:qd,colorspace_pars_fragment:$d,envmap_fragment:jd,envmap_common_pars_fragment:Kd,envmap_pars_fragment:Zd,envmap_pars_vertex:Jd,envmap_physical_pars_fragment:hf,envmap_vertex:Qd,fog_vertex:tf,fog_pars_vertex:ef,fog_fragment:nf,fog_pars_fragment:rf,gradientmap_pars_fragment:sf,lightmap_pars_fragment:af,lights_lambert_fragment:of,lights_lambert_pars_fragment:lf,lights_pars_begin:cf,lights_toon_fragment:uf,lights_toon_pars_fragment:df,lights_phong_fragment:ff,lights_phong_pars_fragment:pf,lights_physical_fragment:mf,lights_physical_pars_fragment:gf,lights_fragment_begin:_f,lights_fragment_maps:xf,lights_fragment_end:vf,logdepthbuf_fragment:Mf,logdepthbuf_pars_fragment:yf,logdepthbuf_pars_vertex:Sf,logdepthbuf_vertex:Ef,map_fragment:bf,map_pars_fragment:Tf,map_particle_fragment:Af,map_particle_pars_fragment:wf,metalnessmap_fragment:Rf,metalnessmap_pars_fragment:Cf,morphinstance_vertex:Pf,morphcolor_vertex:Df,morphnormal_vertex:Lf,morphtarget_pars_vertex:If,morphtarget_vertex:Uf,normal_fragment_begin:Ff,normal_fragment_maps:Nf,normal_pars_fragment:Of,normal_pars_vertex:Bf,normal_vertex:zf,normalmap_pars_fragment:kf,clearcoat_normal_fragment_begin:Hf,clearcoat_normal_fragment_maps:Gf,clearcoat_pars_fragment:Vf,iridescence_pars_fragment:Wf,opaque_fragment:Xf,packing:Yf,premultiplied_alpha_fragment:qf,project_vertex:$f,dithering_fragment:jf,dithering_pars_fragment:Kf,roughnessmap_fragment:Zf,roughnessmap_pars_fragment:Jf,shadowmap_pars_fragment:Qf,shadowmap_pars_vertex:tp,shadowmap_vertex:ep,shadowmask_pars_fragment:np,skinbase_vertex:ip,skinning_pars_vertex:rp,skinning_vertex:sp,skinnormal_vertex:ap,specularmap_fragment:op,specularmap_pars_fragment:lp,tonemapping_fragment:cp,tonemapping_pars_fragment:hp,transmission_fragment:up,transmission_pars_fragment:dp,uv_pars_fragment:fp,uv_pars_vertex:pp,uv_vertex:mp,worldpos_vertex:gp,background_vert:_p,background_frag:xp,backgroundCube_vert:vp,backgroundCube_frag:Mp,cube_vert:yp,cube_frag:Sp,depth_vert:Ep,depth_frag:bp,distanceRGBA_vert:Tp,distanceRGBA_frag:Ap,equirect_vert:wp,equirect_frag:Rp,linedashed_vert:Cp,linedashed_frag:Pp,meshbasic_vert:Dp,meshbasic_frag:Lp,meshlambert_vert:Ip,meshlambert_frag:Up,meshmatcap_vert:Fp,meshmatcap_frag:Np,meshnormal_vert:Op,meshnormal_frag:Bp,meshphong_vert:zp,meshphong_frag:kp,meshphysical_vert:Hp,meshphysical_frag:Gp,meshtoon_vert:Vp,meshtoon_frag:Wp,points_vert:Xp,points_frag:Yp,shadow_vert:qp,shadow_frag:$p,sprite_vert:jp,sprite_frag:Kp},_t={common:{diffuse:{value:new Bt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new qt},alphaMap:{value:null},alphaMapTransform:{value:new qt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new qt}},envmap:{envMap:{value:null},envMapRotation:{value:new qt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new qt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new qt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new qt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new qt},normalScale:{value:new Ot(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new qt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new qt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new qt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new qt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Bt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Bt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new qt},alphaTest:{value:0},uvTransform:{value:new qt}},sprite:{diffuse:{value:new Bt(16777215)},opacity:{value:1},center:{value:new Ot(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new qt},alphaMap:{value:null},alphaMapTransform:{value:new qt},alphaTest:{value:0}}},vn={basic:{uniforms:Oe([_t.common,_t.specularmap,_t.envmap,_t.aomap,_t.lightmap,_t.fog]),vertexShader:$t.meshbasic_vert,fragmentShader:$t.meshbasic_frag},lambert:{uniforms:Oe([_t.common,_t.specularmap,_t.envmap,_t.aomap,_t.lightmap,_t.emissivemap,_t.bumpmap,_t.normalmap,_t.displacementmap,_t.fog,_t.lights,{emissive:{value:new Bt(0)}}]),vertexShader:$t.meshlambert_vert,fragmentShader:$t.meshlambert_frag},phong:{uniforms:Oe([_t.common,_t.specularmap,_t.envmap,_t.aomap,_t.lightmap,_t.emissivemap,_t.bumpmap,_t.normalmap,_t.displacementmap,_t.fog,_t.lights,{emissive:{value:new Bt(0)},specular:{value:new Bt(1118481)},shininess:{value:30}}]),vertexShader:$t.meshphong_vert,fragmentShader:$t.meshphong_frag},standard:{uniforms:Oe([_t.common,_t.envmap,_t.aomap,_t.lightmap,_t.emissivemap,_t.bumpmap,_t.normalmap,_t.displacementmap,_t.roughnessmap,_t.metalnessmap,_t.fog,_t.lights,{emissive:{value:new Bt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:$t.meshphysical_vert,fragmentShader:$t.meshphysical_frag},toon:{uniforms:Oe([_t.common,_t.aomap,_t.lightmap,_t.emissivemap,_t.bumpmap,_t.normalmap,_t.displacementmap,_t.gradientmap,_t.fog,_t.lights,{emissive:{value:new Bt(0)}}]),vertexShader:$t.meshtoon_vert,fragmentShader:$t.meshtoon_frag},matcap:{uniforms:Oe([_t.common,_t.bumpmap,_t.normalmap,_t.displacementmap,_t.fog,{matcap:{value:null}}]),vertexShader:$t.meshmatcap_vert,fragmentShader:$t.meshmatcap_frag},points:{uniforms:Oe([_t.points,_t.fog]),vertexShader:$t.points_vert,fragmentShader:$t.points_frag},dashed:{uniforms:Oe([_t.common,_t.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:$t.linedashed_vert,fragmentShader:$t.linedashed_frag},depth:{uniforms:Oe([_t.common,_t.displacementmap]),vertexShader:$t.depth_vert,fragmentShader:$t.depth_frag},normal:{uniforms:Oe([_t.common,_t.bumpmap,_t.normalmap,_t.displacementmap,{opacity:{value:1}}]),vertexShader:$t.meshnormal_vert,fragmentShader:$t.meshnormal_frag},sprite:{uniforms:Oe([_t.sprite,_t.fog]),vertexShader:$t.sprite_vert,fragmentShader:$t.sprite_frag},background:{uniforms:{uvTransform:{value:new qt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:$t.background_vert,fragmentShader:$t.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new qt}},vertexShader:$t.backgroundCube_vert,fragmentShader:$t.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:$t.cube_vert,fragmentShader:$t.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:$t.equirect_vert,fragmentShader:$t.equirect_frag},distanceRGBA:{uniforms:Oe([_t.common,_t.displacementmap,{referencePosition:{value:new U},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:$t.distanceRGBA_vert,fragmentShader:$t.distanceRGBA_frag},shadow:{uniforms:Oe([_t.lights,_t.fog,{color:{value:new Bt(0)},opacity:{value:1}}]),vertexShader:$t.shadow_vert,fragmentShader:$t.shadow_frag}};vn.physical={uniforms:Oe([vn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new qt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new qt},clearcoatNormalScale:{value:new Ot(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new qt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new qt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new qt},sheen:{value:0},sheenColor:{value:new Bt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new qt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new qt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new qt},transmissionSamplerSize:{value:new Ot},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new qt},attenuationDistance:{value:0},attenuationColor:{value:new Bt(0)},specularColor:{value:new Bt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new qt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new qt},anisotropyVector:{value:new Ot},anisotropyMap:{value:null},anisotropyMapTransform:{value:new qt}}]),vertexShader:$t.meshphysical_vert,fragmentShader:$t.meshphysical_frag};const ps={r:0,b:0,g:0},hi=new zn,Zp=new _e;function Jp(n,t,e,i,r,s,a){const o=new Bt(0);let c=s===!0?0:1,l,h,f=null,d=0,m=null;function g(y){let x=y.isScene===!0?y.background:null;return x&&x.isTexture&&(x=(y.backgroundBlurriness>0?e:t).get(x)),x}function v(y){let x=!1;const T=g(y);T===null?u(o,c):T&&T.isColor&&(u(T,1),x=!0);const E=n.xr.getEnvironmentBlendMode();E==="additive"?i.buffers.color.setClear(0,0,0,1,a):E==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,a),(n.autoClear||x)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function p(y,x){const T=g(x);T&&(T.isCubeTexture||T.mapping===Os)?(h===void 0&&(h=new sn(new zr(1,1,1),new ii({name:"BackgroundCubeMaterial",uniforms:sr(vn.backgroundCube.uniforms),vertexShader:vn.backgroundCube.vertexShader,fragmentShader:vn.backgroundCube.fragmentShader,side:We,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(E,w,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(h)),hi.copy(x.backgroundRotation),hi.x*=-1,hi.y*=-1,hi.z*=-1,T.isCubeTexture&&T.isRenderTargetTexture===!1&&(hi.y*=-1,hi.z*=-1),h.material.uniforms.envMap.value=T,h.material.uniforms.flipEnvMap.value=T.isCubeTexture&&T.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=x.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(Zp.makeRotationFromEuler(hi)),h.material.toneMapped=ie.getTransfer(T.colorSpace)!==le,(f!==T||d!==T.version||m!==n.toneMapping)&&(h.material.needsUpdate=!0,f=T,d=T.version,m=n.toneMapping),h.layers.enableAll(),y.unshift(h,h.geometry,h.material,0,0,null)):T&&T.isTexture&&(l===void 0&&(l=new sn(new zs(2,2),new ii({name:"BackgroundMaterial",uniforms:sr(vn.background.uniforms),vertexShader:vn.background.vertexShader,fragmentShader:vn.background.fragmentShader,side:ei,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(l)),l.material.uniforms.t2D.value=T,l.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,l.material.toneMapped=ie.getTransfer(T.colorSpace)!==le,T.matrixAutoUpdate===!0&&T.updateMatrix(),l.material.uniforms.uvTransform.value.copy(T.matrix),(f!==T||d!==T.version||m!==n.toneMapping)&&(l.material.needsUpdate=!0,f=T,d=T.version,m=n.toneMapping),l.layers.enableAll(),y.unshift(l,l.geometry,l.material,0,0,null))}function u(y,x){y.getRGB(ps,Hc(n)),i.buffers.color.setClear(ps.r,ps.g,ps.b,x,a)}function b(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return o},setClearColor:function(y,x=1){o.set(y),c=x,u(o,c)},getClearAlpha:function(){return c},setClearAlpha:function(y){c=y,u(o,c)},render:v,addToRenderList:p,dispose:b}}function Qp(n,t){const e=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},r=d(null);let s=r,a=!1;function o(M,P,D,I,V){let G=!1;const W=f(I,D,P);s!==W&&(s=W,l(s.object)),G=m(M,I,D,V),G&&g(M,I,D,V),V!==null&&t.update(V,n.ELEMENT_ARRAY_BUFFER),(G||a)&&(a=!1,x(M,P,D,I),V!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get(V).buffer))}function c(){return n.createVertexArray()}function l(M){return n.bindVertexArray(M)}function h(M){return n.deleteVertexArray(M)}function f(M,P,D){const I=D.wireframe===!0;let V=i[M.id];V===void 0&&(V={},i[M.id]=V);let G=V[P.id];G===void 0&&(G={},V[P.id]=G);let W=G[I];return W===void 0&&(W=d(c()),G[I]=W),W}function d(M){const P=[],D=[],I=[];for(let V=0;V<e;V++)P[V]=0,D[V]=0,I[V]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:P,enabledAttributes:D,attributeDivisors:I,object:M,attributes:{},index:null}}function m(M,P,D,I){const V=s.attributes,G=P.attributes;let W=0;const $=D.getAttributes();for(const k in $)if($[k].location>=0){const O=V[k];let Q=G[k];if(Q===void 0&&(k==="instanceMatrix"&&M.instanceMatrix&&(Q=M.instanceMatrix),k==="instanceColor"&&M.instanceColor&&(Q=M.instanceColor)),O===void 0||O.attribute!==Q||Q&&O.data!==Q.data)return!0;W++}return s.attributesNum!==W||s.index!==I}function g(M,P,D,I){const V={},G=P.attributes;let W=0;const $=D.getAttributes();for(const k in $)if($[k].location>=0){let O=G[k];O===void 0&&(k==="instanceMatrix"&&M.instanceMatrix&&(O=M.instanceMatrix),k==="instanceColor"&&M.instanceColor&&(O=M.instanceColor));const Q={};Q.attribute=O,O&&O.data&&(Q.data=O.data),V[k]=Q,W++}s.attributes=V,s.attributesNum=W,s.index=I}function v(){const M=s.newAttributes;for(let P=0,D=M.length;P<D;P++)M[P]=0}function p(M){u(M,0)}function u(M,P){const D=s.newAttributes,I=s.enabledAttributes,V=s.attributeDivisors;D[M]=1,I[M]===0&&(n.enableVertexAttribArray(M),I[M]=1),V[M]!==P&&(n.vertexAttribDivisor(M,P),V[M]=P)}function b(){const M=s.newAttributes,P=s.enabledAttributes;for(let D=0,I=P.length;D<I;D++)P[D]!==M[D]&&(n.disableVertexAttribArray(D),P[D]=0)}function y(M,P,D,I,V,G,W){W===!0?n.vertexAttribIPointer(M,P,D,V,G):n.vertexAttribPointer(M,P,D,I,V,G)}function x(M,P,D,I){v();const V=I.attributes,G=D.getAttributes(),W=P.defaultAttributeValues;for(const $ in G){const k=G[$];if(k.location>=0){let N=V[$];if(N===void 0&&($==="instanceMatrix"&&M.instanceMatrix&&(N=M.instanceMatrix),$==="instanceColor"&&M.instanceColor&&(N=M.instanceColor)),N!==void 0){const O=N.normalized,Q=N.itemSize,ut=t.get(N);if(ut===void 0)continue;const mt=ut.buffer,Pt=ut.type,Dt=ut.bytesPerElement,K=Pt===n.INT||Pt===n.UNSIGNED_INT||N.gpuType===Lo;if(N.isInterleavedBufferAttribute){const Y=N.data,dt=Y.stride,Ct=N.offset;if(Y.isInstancedInterleavedBuffer){for(let St=0;St<k.locationSize;St++)u(k.location+St,Y.meshPerAttribute);M.isInstancedMesh!==!0&&I._maxInstanceCount===void 0&&(I._maxInstanceCount=Y.meshPerAttribute*Y.count)}else for(let St=0;St<k.locationSize;St++)p(k.location+St);n.bindBuffer(n.ARRAY_BUFFER,mt);for(let St=0;St<k.locationSize;St++)y(k.location+St,Q/k.locationSize,Pt,O,dt*Dt,(Ct+Q/k.locationSize*St)*Dt,K)}else{if(N.isInstancedBufferAttribute){for(let Y=0;Y<k.locationSize;Y++)u(k.location+Y,N.meshPerAttribute);M.isInstancedMesh!==!0&&I._maxInstanceCount===void 0&&(I._maxInstanceCount=N.meshPerAttribute*N.count)}else for(let Y=0;Y<k.locationSize;Y++)p(k.location+Y);n.bindBuffer(n.ARRAY_BUFFER,mt);for(let Y=0;Y<k.locationSize;Y++)y(k.location+Y,Q/k.locationSize,Pt,O,Q*Dt,Q/k.locationSize*Y*Dt,K)}}else if(W!==void 0){const O=W[$];if(O!==void 0)switch(O.length){case 2:n.vertexAttrib2fv(k.location,O);break;case 3:n.vertexAttrib3fv(k.location,O);break;case 4:n.vertexAttrib4fv(k.location,O);break;default:n.vertexAttrib1fv(k.location,O)}}}}b()}function T(){R();for(const M in i){const P=i[M];for(const D in P){const I=P[D];for(const V in I)h(I[V].object),delete I[V];delete P[D]}delete i[M]}}function E(M){if(i[M.id]===void 0)return;const P=i[M.id];for(const D in P){const I=P[D];for(const V in I)h(I[V].object),delete I[V];delete P[D]}delete i[M.id]}function w(M){for(const P in i){const D=i[P];if(D[M.id]===void 0)continue;const I=D[M.id];for(const V in I)h(I[V].object),delete I[V];delete D[M.id]}}function R(){_(),a=!0,s!==r&&(s=r,l(s.object))}function _(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:o,reset:R,resetDefaultState:_,dispose:T,releaseStatesOfGeometry:E,releaseStatesOfProgram:w,initAttributes:v,enableAttribute:p,disableUnusedAttributes:b}}function tm(n,t,e){let i;function r(l){i=l}function s(l,h){n.drawArrays(i,l,h),e.update(h,i,1)}function a(l,h,f){f!==0&&(n.drawArraysInstanced(i,l,h,f),e.update(h,i,f))}function o(l,h,f){if(f===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,h,0,f);let m=0;for(let g=0;g<f;g++)m+=h[g];e.update(m,i,1)}function c(l,h,f,d){if(f===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let g=0;g<l.length;g++)a(l[g],h[g],d[g]);else{m.multiDrawArraysInstancedWEBGL(i,l,0,h,0,d,0,f);let g=0;for(let v=0;v<f;v++)g+=h[v]*d[v];e.update(g,i,1)}}this.setMode=r,this.render=s,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=c}function em(n,t,e,i){let r;function s(){if(r!==void 0)return r;if(t.has("EXT_texture_filter_anisotropic")===!0){const w=t.get("EXT_texture_filter_anisotropic");r=n.getParameter(w.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function a(w){return!(w!==pn&&i.convert(w)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(w){const R=w===Ur&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(w!==Bn&&i.convert(w)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&w!==Fn&&!R)}function c(w){if(w==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";w="mediump"}return w==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=e.precision!==void 0?e.precision:"highp";const h=c(l);h!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);const f=e.logarithmicDepthBuffer===!0,d=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),m=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=n.getParameter(n.MAX_TEXTURE_SIZE),p=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),u=n.getParameter(n.MAX_VERTEX_ATTRIBS),b=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),y=n.getParameter(n.MAX_VARYING_VECTORS),x=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),T=g>0,E=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:c,textureFormatReadable:a,textureTypeReadable:o,precision:l,logarithmicDepthBuffer:f,reversedDepthBuffer:d,maxTextures:m,maxVertexTextures:g,maxTextureSize:v,maxCubemapSize:p,maxAttributes:u,maxVertexUniforms:b,maxVaryings:y,maxFragmentUniforms:x,vertexTextures:T,maxSamples:E}}function nm(n){const t=this;let e=null,i=0,r=!1,s=!1;const a=new Yn,o=new qt,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(f,d){const m=f.length!==0||d||i!==0||r;return r=d,i=f.length,m},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(f,d){e=h(f,d,0)},this.setState=function(f,d,m){const g=f.clippingPlanes,v=f.clipIntersection,p=f.clipShadows,u=n.get(f);if(!r||g===null||g.length===0||s&&!p)s?h(null):l();else{const b=s?0:i,y=b*4;let x=u.clippingState||null;c.value=x,x=h(g,d,y,m);for(let T=0;T!==y;++T)x[T]=e[T];u.clippingState=x,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=b}};function l(){c.value!==e&&(c.value=e,c.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function h(f,d,m,g){const v=f!==null?f.length:0;let p=null;if(v!==0){if(p=c.value,g!==!0||p===null){const u=m+v*4,b=d.matrixWorldInverse;o.getNormalMatrix(b),(p===null||p.length<u)&&(p=new Float32Array(u));for(let y=0,x=m;y!==v;++y,x+=4)a.copy(f[y]).applyMatrix4(b,o),a.normal.toArray(p,x),p[x+3]=a.constant}c.value=p,c.needsUpdate=!0}return t.numPlanes=v,t.numIntersection=0,p}}function im(n){let t=new WeakMap;function e(a,o){return o===Ba?a.mapping=nr:o===za&&(a.mapping=ir),a}function i(a){if(a&&a.isTexture){const o=a.mapping;if(o===Ba||o===za)if(t.has(a)){const c=t.get(a).texture;return e(c,a.mapping)}else{const c=a.image;if(c&&c.height>0){const l=new td(c.height);return l.fromEquirectangularTexture(n,a),t.set(a,l),a.addEventListener("dispose",r),e(l.texture,a.mapping)}else return null}}return a}function r(a){const o=a.target;o.removeEventListener("dispose",r);const c=t.get(o);c!==void 0&&(t.delete(o),c.dispose())}function s(){t=new WeakMap}return{get:i,dispose:s}}const $i=4,Ol=[.125,.215,.35,.446,.526,.582],gi=20,xa=new ud,Bl=new Bt;let va=null,Ma=0,ya=0,Sa=!1;const di=(1+Math.sqrt(5))/2,Xi=1/di,zl=[new U(-di,Xi,0),new U(di,Xi,0),new U(-Xi,0,di),new U(Xi,0,di),new U(0,di,-Xi),new U(0,di,Xi),new U(-1,1,-1),new U(1,1,-1),new U(-1,1,1),new U(1,1,1)],rm=new U;class kl{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,i=.1,r=100,s={}){const{size:a=256,position:o=rm}=s;va=this._renderer.getRenderTarget(),Ma=this._renderer.getActiveCubeFace(),ya=this._renderer.getActiveMipmapLevel(),Sa=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);const c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(t,i,r,c,o),e>0&&this._blur(c,0,0,e),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Vl(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Gl(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(va,Ma,ya),this._renderer.xr.enabled=Sa,t.scissorTest=!1,ms(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===nr||t.mapping===ir?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),va=this._renderer.getRenderTarget(),Ma=this._renderer.getActiveCubeFace(),ya=this._renderer.getActiveMipmapLevel(),Sa=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=e||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,i={magFilter:fn,minFilter:fn,generateMipmaps:!1,type:Ur,format:pn,colorSpace:rr,depthBuffer:!1},r=Hl(t,e,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Hl(t,e,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=sm(s)),this._blurMaterial=am(s,t,e)}return r}_compileMaterial(t){const e=new sn(this._lodPlanes[0],t);this._renderer.compile(e,xa)}_sceneToCubeUV(t,e,i,r,s){const c=new en(90,1,e,i),l=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],f=this._renderer,d=f.autoClear,m=f.toneMapping;f.getClearColor(Bl),f.toneMapping=Qn,f.autoClear=!1,f.state.buffers.depth.getReversed()&&(f.setRenderTarget(r),f.clearDepth(),f.setRenderTarget(null));const v=new Br({name:"PMREM.Background",side:We,depthWrite:!1,depthTest:!1}),p=new sn(new zr,v);let u=!1;const b=t.background;b?b.isColor&&(v.color.copy(b),t.background=null,u=!0):(v.color.copy(Bl),u=!0);for(let y=0;y<6;y++){const x=y%3;x===0?(c.up.set(0,l[y],0),c.position.set(s.x,s.y,s.z),c.lookAt(s.x+h[y],s.y,s.z)):x===1?(c.up.set(0,0,l[y]),c.position.set(s.x,s.y,s.z),c.lookAt(s.x,s.y+h[y],s.z)):(c.up.set(0,l[y],0),c.position.set(s.x,s.y,s.z),c.lookAt(s.x,s.y,s.z+h[y]));const T=this._cubeSize;ms(r,x*T,y>2?T:0,T,T),f.setRenderTarget(r),u&&f.render(p,c),f.render(t,c)}p.geometry.dispose(),p.material.dispose(),f.toneMapping=m,f.autoClear=d,t.background=b}_textureToCubeUV(t,e){const i=this._renderer,r=t.mapping===nr||t.mapping===ir;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Vl()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Gl());const s=r?this._cubemapMaterial:this._equirectMaterial,a=new sn(this._lodPlanes[0],s),o=s.uniforms;o.envMap.value=t;const c=this._cubeSize;ms(e,0,0,3*c,2*c),i.setRenderTarget(e),i.render(a,xa)}_applyPMREM(t){const e=this._renderer,i=e.autoClear;e.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const a=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),o=zl[(r-s-1)%zl.length];this._blur(t,s-1,s,a,o)}e.autoClear=i}_blur(t,e,i,r,s){const a=this._pingPongRenderTarget;this._halfBlur(t,a,e,i,r,"latitudinal",s),this._halfBlur(a,t,i,i,r,"longitudinal",s)}_halfBlur(t,e,i,r,s,a,o){const c=this._renderer,l=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,f=new sn(this._lodPlanes[r],l),d=l.uniforms,m=this._sizeLods[i]-1,g=isFinite(s)?Math.PI/(2*m):2*Math.PI/(2*gi-1),v=s/g,p=isFinite(s)?1+Math.floor(h*v):gi;p>gi&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${gi}`);const u=[];let b=0;for(let w=0;w<gi;++w){const R=w/v,_=Math.exp(-R*R/2);u.push(_),w===0?b+=_:w<p&&(b+=2*_)}for(let w=0;w<u.length;w++)u[w]=u[w]/b;d.envMap.value=t.texture,d.samples.value=p,d.weights.value=u,d.latitudinal.value=a==="latitudinal",o&&(d.poleAxis.value=o);const{_lodMax:y}=this;d.dTheta.value=g,d.mipInt.value=y-i;const x=this._sizeLods[r],T=3*x*(r>y-$i?r-y+$i:0),E=4*(this._cubeSize-x);ms(e,T,E,3*x,2*x),c.setRenderTarget(e),c.render(f,xa)}}function sm(n){const t=[],e=[],i=[];let r=n;const s=n-$i+1+Ol.length;for(let a=0;a<s;a++){const o=Math.pow(2,r);e.push(o);let c=1/o;a>n-$i?c=Ol[a-n+$i-1]:a===0&&(c=0),i.push(c);const l=1/(o-2),h=-l,f=1+l,d=[h,h,f,h,f,f,h,h,f,f,h,f],m=6,g=6,v=3,p=2,u=1,b=new Float32Array(v*g*m),y=new Float32Array(p*g*m),x=new Float32Array(u*g*m);for(let E=0;E<m;E++){const w=E%3*2/3-1,R=E>2?0:-1,_=[w,R,0,w+2/3,R,0,w+2/3,R+1,0,w,R,0,w+2/3,R+1,0,w,R+1,0];b.set(_,v*g*E),y.set(d,p*g*E);const M=[E,E,E,E,E,E];x.set(M,u*g*E)}const T=new se;T.setAttribute("position",new ee(b,v)),T.setAttribute("uv",new ee(y,p)),T.setAttribute("faceIndex",new ee(x,u)),t.push(T),r>$i&&r--}return{lodPlanes:t,sizeLods:e,sigmas:i}}function Hl(n,t,e){const i=new Si(n,t,e);return i.texture.mapping=Os,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function ms(n,t,e,i,r){n.viewport.set(t,e,i,r),n.scissor.set(t,e,i,r)}function am(n,t,e){const i=new Float32Array(gi),r=new U(0,1,0);return new ii({name:"SphericalGaussianBlur",defines:{n:gi,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Xo(),fragmentShader:`

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
		`,blending:Jn,depthTest:!1,depthWrite:!1})}function Gl(){return new ii({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Xo(),fragmentShader:`

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
		`,blending:Jn,depthTest:!1,depthWrite:!1})}function Vl(){return new ii({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Xo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Jn,depthTest:!1,depthWrite:!1})}function Xo(){return`

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
	`}function om(n){let t=new WeakMap,e=null;function i(o){if(o&&o.isTexture){const c=o.mapping,l=c===Ba||c===za,h=c===nr||c===ir;if(l||h){let f=t.get(o);const d=f!==void 0?f.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==d)return e===null&&(e=new kl(n)),f=l?e.fromEquirectangular(o,f):e.fromCubemap(o,f),f.texture.pmremVersion=o.pmremVersion,t.set(o,f),f.texture;if(f!==void 0)return f.texture;{const m=o.image;return l&&m&&m.height>0||h&&m&&r(m)?(e===null&&(e=new kl(n)),f=l?e.fromEquirectangular(o):e.fromCubemap(o),f.texture.pmremVersion=o.pmremVersion,t.set(o,f),o.addEventListener("dispose",s),f.texture):null}}}return o}function r(o){let c=0;const l=6;for(let h=0;h<l;h++)o[h]!==void 0&&c++;return c===l}function s(o){const c=o.target;c.removeEventListener("dispose",s);const l=t.get(c);l!==void 0&&(t.delete(c),l.dispose())}function a(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:i,dispose:a}}function lm(n){const t={};function e(i){if(t[i]!==void 0)return t[i];let r;switch(i){case"WEBGL_depth_texture":r=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=n.getExtension(i)}return t[i]=r,r}return{has:function(i){return e(i)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(i){const r=e(i);return r===null&&Pr("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function cm(n,t,e,i){const r={},s=new WeakMap;function a(f){const d=f.target;d.index!==null&&t.remove(d.index);for(const g in d.attributes)t.remove(d.attributes[g]);d.removeEventListener("dispose",a),delete r[d.id];const m=s.get(d);m&&(t.remove(m),s.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function o(f,d){return r[d.id]===!0||(d.addEventListener("dispose",a),r[d.id]=!0,e.memory.geometries++),d}function c(f){const d=f.attributes;for(const m in d)t.update(d[m],n.ARRAY_BUFFER)}function l(f){const d=[],m=f.index,g=f.attributes.position;let v=0;if(m!==null){const b=m.array;v=m.version;for(let y=0,x=b.length;y<x;y+=3){const T=b[y+0],E=b[y+1],w=b[y+2];d.push(T,E,E,w,w,T)}}else if(g!==void 0){const b=g.array;v=g.version;for(let y=0,x=b.length/3-1;y<x;y+=3){const T=y+0,E=y+1,w=y+2;d.push(T,E,E,w,w,T)}}else return;const p=new(Nc(d)?kc:zc)(d,1);p.version=v;const u=s.get(f);u&&t.remove(u),s.set(f,p)}function h(f){const d=s.get(f);if(d){const m=f.index;m!==null&&d.version<m.version&&l(f)}else l(f);return s.get(f)}return{get:o,update:c,getWireframeAttribute:h}}function hm(n,t,e){let i;function r(d){i=d}let s,a;function o(d){s=d.type,a=d.bytesPerElement}function c(d,m){n.drawElements(i,m,s,d*a),e.update(m,i,1)}function l(d,m,g){g!==0&&(n.drawElementsInstanced(i,m,s,d*a,g),e.update(m,i,g))}function h(d,m,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,m,0,s,d,0,g);let p=0;for(let u=0;u<g;u++)p+=m[u];e.update(p,i,1)}function f(d,m,g,v){if(g===0)return;const p=t.get("WEBGL_multi_draw");if(p===null)for(let u=0;u<d.length;u++)l(d[u]/a,m[u],v[u]);else{p.multiDrawElementsInstancedWEBGL(i,m,0,s,d,0,v,0,g);let u=0;for(let b=0;b<g;b++)u+=m[b]*v[b];e.update(u,i,1)}}this.setMode=r,this.setIndex=o,this.render=c,this.renderInstances=l,this.renderMultiDraw=h,this.renderMultiDrawInstances=f}function um(n){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,a,o){switch(e.calls++,a){case n.TRIANGLES:e.triangles+=o*(s/3);break;case n.LINES:e.lines+=o*(s/2);break;case n.LINE_STRIP:e.lines+=o*(s-1);break;case n.LINE_LOOP:e.lines+=o*s;break;case n.POINTS:e.points+=o*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function r(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:r,update:i}}function dm(n,t,e){const i=new WeakMap,r=new Me;function s(a,o,c){const l=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,f=h!==void 0?h.length:0;let d=i.get(o);if(d===void 0||d.count!==f){let M=function(){R.dispose(),i.delete(o),o.removeEventListener("dispose",M)};var m=M;d!==void 0&&d.texture.dispose();const g=o.morphAttributes.position!==void 0,v=o.morphAttributes.normal!==void 0,p=o.morphAttributes.color!==void 0,u=o.morphAttributes.position||[],b=o.morphAttributes.normal||[],y=o.morphAttributes.color||[];let x=0;g===!0&&(x=1),v===!0&&(x=2),p===!0&&(x=3);let T=o.attributes.position.count*x,E=1;T>t.maxTextureSize&&(E=Math.ceil(T/t.maxTextureSize),T=t.maxTextureSize);const w=new Float32Array(T*E*4*f),R=new Oc(w,T,E,f);R.type=Fn,R.needsUpdate=!0;const _=x*4;for(let P=0;P<f;P++){const D=u[P],I=b[P],V=y[P],G=T*E*4*P;for(let W=0;W<D.count;W++){const $=W*_;g===!0&&(r.fromBufferAttribute(D,W),w[G+$+0]=r.x,w[G+$+1]=r.y,w[G+$+2]=r.z,w[G+$+3]=0),v===!0&&(r.fromBufferAttribute(I,W),w[G+$+4]=r.x,w[G+$+5]=r.y,w[G+$+6]=r.z,w[G+$+7]=0),p===!0&&(r.fromBufferAttribute(V,W),w[G+$+8]=r.x,w[G+$+9]=r.y,w[G+$+10]=r.z,w[G+$+11]=V.itemSize===4?r.w:1)}}d={count:f,texture:R,size:new Ot(T,E)},i.set(o,d),o.addEventListener("dispose",M)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)c.getUniforms().setValue(n,"morphTexture",a.morphTexture,e);else{let g=0;for(let p=0;p<l.length;p++)g+=l[p];const v=o.morphTargetsRelative?1:1-g;c.getUniforms().setValue(n,"morphTargetBaseInfluence",v),c.getUniforms().setValue(n,"morphTargetInfluences",l)}c.getUniforms().setValue(n,"morphTargetsTexture",d.texture,e),c.getUniforms().setValue(n,"morphTargetsTextureSize",d.size)}return{update:s}}function fm(n,t,e,i){let r=new WeakMap;function s(c){const l=i.render.frame,h=c.geometry,f=t.get(c,h);if(r.get(f)!==l&&(t.update(f),r.set(f,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",o)===!1&&c.addEventListener("dispose",o),r.get(c)!==l&&(e.update(c.instanceMatrix,n.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,n.ARRAY_BUFFER),r.set(c,l))),c.isSkinnedMesh){const d=c.skeleton;r.get(d)!==l&&(d.update(),r.set(d,l))}return f}function a(){r=new WeakMap}function o(c){const l=c.target;l.removeEventListener("dispose",o),e.remove(l.instanceMatrix),l.instanceColor!==null&&e.remove(l.instanceColor)}return{update:s,dispose:a}}const Kc=new ke,Wl=new qc(1,1),Zc=new Oc,Jc=new Ou,Qc=new Vc,Xl=[],Yl=[],ql=new Float32Array(16),$l=new Float32Array(9),jl=new Float32Array(4);function or(n,t,e){const i=n[0];if(i<=0||i>0)return n;const r=t*e;let s=Xl[r];if(s===void 0&&(s=new Float32Array(r),Xl[r]=s),t!==0){i.toArray(s,0);for(let a=1,o=0;a!==t;++a)o+=e,n[a].toArray(s,o)}return s}function Re(n,t){if(n.length!==t.length)return!1;for(let e=0,i=n.length;e<i;e++)if(n[e]!==t[e])return!1;return!0}function Ce(n,t){for(let e=0,i=t.length;e<i;e++)n[e]=t[e]}function Hs(n,t){let e=Yl[t];e===void 0&&(e=new Int32Array(t),Yl[t]=e);for(let i=0;i!==t;++i)e[i]=n.allocateTextureUnit();return e}function pm(n,t){const e=this.cache;e[0]!==t&&(n.uniform1f(this.addr,t),e[0]=t)}function mm(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Re(e,t))return;n.uniform2fv(this.addr,t),Ce(e,t)}}function gm(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(n.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Re(e,t))return;n.uniform3fv(this.addr,t),Ce(e,t)}}function _m(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Re(e,t))return;n.uniform4fv(this.addr,t),Ce(e,t)}}function xm(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(Re(e,t))return;n.uniformMatrix2fv(this.addr,!1,t),Ce(e,t)}else{if(Re(e,i))return;jl.set(i),n.uniformMatrix2fv(this.addr,!1,jl),Ce(e,i)}}function vm(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(Re(e,t))return;n.uniformMatrix3fv(this.addr,!1,t),Ce(e,t)}else{if(Re(e,i))return;$l.set(i),n.uniformMatrix3fv(this.addr,!1,$l),Ce(e,i)}}function Mm(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(Re(e,t))return;n.uniformMatrix4fv(this.addr,!1,t),Ce(e,t)}else{if(Re(e,i))return;ql.set(i),n.uniformMatrix4fv(this.addr,!1,ql),Ce(e,i)}}function ym(n,t){const e=this.cache;e[0]!==t&&(n.uniform1i(this.addr,t),e[0]=t)}function Sm(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Re(e,t))return;n.uniform2iv(this.addr,t),Ce(e,t)}}function Em(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Re(e,t))return;n.uniform3iv(this.addr,t),Ce(e,t)}}function bm(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Re(e,t))return;n.uniform4iv(this.addr,t),Ce(e,t)}}function Tm(n,t){const e=this.cache;e[0]!==t&&(n.uniform1ui(this.addr,t),e[0]=t)}function Am(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Re(e,t))return;n.uniform2uiv(this.addr,t),Ce(e,t)}}function wm(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Re(e,t))return;n.uniform3uiv(this.addr,t),Ce(e,t)}}function Rm(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Re(e,t))return;n.uniform4uiv(this.addr,t),Ce(e,t)}}function Cm(n,t,e){const i=this.cache,r=e.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r);let s;this.type===n.SAMPLER_2D_SHADOW?(Wl.compareFunction=Fc,s=Wl):s=Kc,e.setTexture2D(t||s,r)}function Pm(n,t,e){const i=this.cache,r=e.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),e.setTexture3D(t||Jc,r)}function Dm(n,t,e){const i=this.cache,r=e.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),e.setTextureCube(t||Qc,r)}function Lm(n,t,e){const i=this.cache,r=e.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),e.setTexture2DArray(t||Zc,r)}function Im(n){switch(n){case 5126:return pm;case 35664:return mm;case 35665:return gm;case 35666:return _m;case 35674:return xm;case 35675:return vm;case 35676:return Mm;case 5124:case 35670:return ym;case 35667:case 35671:return Sm;case 35668:case 35672:return Em;case 35669:case 35673:return bm;case 5125:return Tm;case 36294:return Am;case 36295:return wm;case 36296:return Rm;case 35678:case 36198:case 36298:case 36306:case 35682:return Cm;case 35679:case 36299:case 36307:return Pm;case 35680:case 36300:case 36308:case 36293:return Dm;case 36289:case 36303:case 36311:case 36292:return Lm}}function Um(n,t){n.uniform1fv(this.addr,t)}function Fm(n,t){const e=or(t,this.size,2);n.uniform2fv(this.addr,e)}function Nm(n,t){const e=or(t,this.size,3);n.uniform3fv(this.addr,e)}function Om(n,t){const e=or(t,this.size,4);n.uniform4fv(this.addr,e)}function Bm(n,t){const e=or(t,this.size,4);n.uniformMatrix2fv(this.addr,!1,e)}function zm(n,t){const e=or(t,this.size,9);n.uniformMatrix3fv(this.addr,!1,e)}function km(n,t){const e=or(t,this.size,16);n.uniformMatrix4fv(this.addr,!1,e)}function Hm(n,t){n.uniform1iv(this.addr,t)}function Gm(n,t){n.uniform2iv(this.addr,t)}function Vm(n,t){n.uniform3iv(this.addr,t)}function Wm(n,t){n.uniform4iv(this.addr,t)}function Xm(n,t){n.uniform1uiv(this.addr,t)}function Ym(n,t){n.uniform2uiv(this.addr,t)}function qm(n,t){n.uniform3uiv(this.addr,t)}function $m(n,t){n.uniform4uiv(this.addr,t)}function jm(n,t,e){const i=this.cache,r=t.length,s=Hs(e,r);Re(i,s)||(n.uniform1iv(this.addr,s),Ce(i,s));for(let a=0;a!==r;++a)e.setTexture2D(t[a]||Kc,s[a])}function Km(n,t,e){const i=this.cache,r=t.length,s=Hs(e,r);Re(i,s)||(n.uniform1iv(this.addr,s),Ce(i,s));for(let a=0;a!==r;++a)e.setTexture3D(t[a]||Jc,s[a])}function Zm(n,t,e){const i=this.cache,r=t.length,s=Hs(e,r);Re(i,s)||(n.uniform1iv(this.addr,s),Ce(i,s));for(let a=0;a!==r;++a)e.setTextureCube(t[a]||Qc,s[a])}function Jm(n,t,e){const i=this.cache,r=t.length,s=Hs(e,r);Re(i,s)||(n.uniform1iv(this.addr,s),Ce(i,s));for(let a=0;a!==r;++a)e.setTexture2DArray(t[a]||Zc,s[a])}function Qm(n){switch(n){case 5126:return Um;case 35664:return Fm;case 35665:return Nm;case 35666:return Om;case 35674:return Bm;case 35675:return zm;case 35676:return km;case 5124:case 35670:return Hm;case 35667:case 35671:return Gm;case 35668:case 35672:return Vm;case 35669:case 35673:return Wm;case 5125:return Xm;case 36294:return Ym;case 36295:return qm;case 36296:return $m;case 35678:case 36198:case 36298:case 36306:case 35682:return jm;case 35679:case 36299:case 36307:return Km;case 35680:case 36300:case 36308:case 36293:return Zm;case 36289:case 36303:case 36311:case 36292:return Jm}}class tg{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.setValue=Im(e.type)}}class eg{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Qm(e.type)}}class ng{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,i){const r=this.seq;for(let s=0,a=r.length;s!==a;++s){const o=r[s];o.setValue(t,e[o.id],i)}}}const Ea=/(\w+)(\])?(\[|\.)?/g;function Kl(n,t){n.seq.push(t),n.map[t.id]=t}function ig(n,t,e){const i=n.name,r=i.length;for(Ea.lastIndex=0;;){const s=Ea.exec(i),a=Ea.lastIndex;let o=s[1];const c=s[2]==="]",l=s[3];if(c&&(o=o|0),l===void 0||l==="["&&a+2===r){Kl(e,l===void 0?new tg(o,n,t):new eg(o,n,t));break}else{let f=e.map[o];f===void 0&&(f=new ng(o),Kl(e,f)),e=f}}}class As{constructor(t,e){this.seq=[],this.map={};const i=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=t.getActiveUniform(e,r),a=t.getUniformLocation(e,s.name);ig(s,a,this)}}setValue(t,e,i,r){const s=this.map[e];s!==void 0&&s.setValue(t,i,r)}setOptional(t,e,i){const r=e[i];r!==void 0&&this.setValue(t,i,r)}static upload(t,e,i,r){for(let s=0,a=e.length;s!==a;++s){const o=e[s],c=i[o.id];c.needsUpdate!==!1&&o.setValue(t,c.value,r)}}static seqWithValue(t,e){const i=[];for(let r=0,s=t.length;r!==s;++r){const a=t[r];a.id in e&&i.push(a)}return i}}function Zl(n,t,e){const i=n.createShader(t);return n.shaderSource(i,e),n.compileShader(i),i}const rg=37297;let sg=0;function ag(n,t){const e=n.split(`
`),i=[],r=Math.max(t-6,0),s=Math.min(t+6,e.length);for(let a=r;a<s;a++){const o=a+1;i.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return i.join(`
`)}const Jl=new qt;function og(n){ie._getMatrix(Jl,ie.workingColorSpace,n);const t=`mat3( ${Jl.elements.map(e=>e.toFixed(4))} )`;switch(ie.getTransfer(n)){case Cs:return[t,"LinearTransferOETF"];case le:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",n),[t,"LinearTransferOETF"]}}function Ql(n,t,e){const i=n.getShaderParameter(t,n.COMPILE_STATUS),s=(n.getShaderInfoLog(t)||"").trim();if(i&&s==="")return"";const a=/ERROR: 0:(\d+)/.exec(s);if(a){const o=parseInt(a[1]);return e.toUpperCase()+`

`+s+`

`+ag(n.getShaderSource(t),o)}else return s}function lg(n,t){const e=og(t);return[`vec4 ${n}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function cg(n,t){let e;switch(t){case Kh:e="Linear";break;case Zh:e="Reinhard";break;case Jh:e="Cineon";break;case Tc:e="ACESFilmic";break;case tu:e="AgX";break;case eu:e="Neutral";break;case Qh:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+n+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const gs=new U;function hg(){ie.getLuminanceCoefficients(gs);const n=gs.x.toFixed(4),t=gs.y.toFixed(4),e=gs.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function ug(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(xr).join(`
`)}function dg(n){const t=[];for(const e in n){const i=n[e];i!==!1&&t.push("#define "+e+" "+i)}return t.join(`
`)}function fg(n,t){const e={},i=n.getProgramParameter(t,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=n.getActiveAttrib(t,r),a=s.name;let o=1;s.type===n.FLOAT_MAT2&&(o=2),s.type===n.FLOAT_MAT3&&(o=3),s.type===n.FLOAT_MAT4&&(o=4),e[a]={type:s.type,location:n.getAttribLocation(t,a),locationSize:o}}return e}function xr(n){return n!==""}function tc(n,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function ec(n,t){return n.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const pg=/^[ \t]*#include +<([\w\d./]+)>/gm;function Mo(n){return n.replace(pg,gg)}const mg=new Map;function gg(n,t){let e=$t[t];if(e===void 0){const i=mg.get(t);if(i!==void 0)e=$t[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,i);else throw new Error("Can not resolve #include <"+t+">")}return Mo(e)}const _g=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function nc(n){return n.replace(_g,xg)}function xg(n,t,e,i){let r="";for(let s=parseInt(t);s<parseInt(e);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function ic(n){let t=`precision ${n.precision} float;
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
#define LOW_PRECISION`),t}function vg(n){let t="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===Ec?t="SHADOWMAP_TYPE_PCF":n.shadowMapType===Ch?t="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===Ln&&(t="SHADOWMAP_TYPE_VSM"),t}function Mg(n){let t="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case nr:case ir:t="ENVMAP_TYPE_CUBE";break;case Os:t="ENVMAP_TYPE_CUBE_UV";break}return t}function yg(n){let t="ENVMAP_MODE_REFLECTION";return n.envMap&&n.envMapMode===ir&&(t="ENVMAP_MODE_REFRACTION"),t}function Sg(n){let t="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case bc:t="ENVMAP_BLENDING_MULTIPLY";break;case $h:t="ENVMAP_BLENDING_MIX";break;case jh:t="ENVMAP_BLENDING_ADD";break}return t}function Eg(n){const t=n.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:i,maxMip:e}}function bg(n,t,e,i){const r=n.getContext(),s=e.defines;let a=e.vertexShader,o=e.fragmentShader;const c=vg(e),l=Mg(e),h=yg(e),f=Sg(e),d=Eg(e),m=ug(e),g=dg(s),v=r.createProgram();let p,u,b=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(xr).join(`
`),p.length>0&&(p+=`
`),u=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(xr).join(`
`),u.length>0&&(u+=`
`)):(p=[ic(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(xr).join(`
`),u=[ic(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+h:"",e.envMap?"#define "+f:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Qn?"#define TONE_MAPPING":"",e.toneMapping!==Qn?$t.tonemapping_pars_fragment:"",e.toneMapping!==Qn?cg("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",$t.colorspace_pars_fragment,lg("linearToOutputTexel",e.outputColorSpace),hg(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(xr).join(`
`)),a=Mo(a),a=tc(a,e),a=ec(a,e),o=Mo(o),o=tc(o,e),o=ec(o,e),a=nc(a),o=nc(o),e.isRawShaderMaterial!==!0&&(b=`#version 300 es
`,p=[m,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,u=["#define varying in",e.glslVersion===sl?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===sl?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+u);const y=b+p+a,x=b+u+o,T=Zl(r,r.VERTEX_SHADER,y),E=Zl(r,r.FRAGMENT_SHADER,x);r.attachShader(v,T),r.attachShader(v,E),e.index0AttributeName!==void 0?r.bindAttribLocation(v,0,e.index0AttributeName):e.morphTargets===!0&&r.bindAttribLocation(v,0,"position"),r.linkProgram(v);function w(P){if(n.debug.checkShaderErrors){const D=r.getProgramInfoLog(v)||"",I=r.getShaderInfoLog(T)||"",V=r.getShaderInfoLog(E)||"",G=D.trim(),W=I.trim(),$=V.trim();let k=!0,N=!0;if(r.getProgramParameter(v,r.LINK_STATUS)===!1)if(k=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,v,T,E);else{const O=Ql(r,T,"vertex"),Q=Ql(r,E,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(v,r.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+G+`
`+O+`
`+Q)}else G!==""?console.warn("THREE.WebGLProgram: Program Info Log:",G):(W===""||$==="")&&(N=!1);N&&(P.diagnostics={runnable:k,programLog:G,vertexShader:{log:W,prefix:p},fragmentShader:{log:$,prefix:u}})}r.deleteShader(T),r.deleteShader(E),R=new As(r,v),_=fg(r,v)}let R;this.getUniforms=function(){return R===void 0&&w(this),R};let _;this.getAttributes=function(){return _===void 0&&w(this),_};let M=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return M===!1&&(M=r.getProgramParameter(v,rg)),M},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(v),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=sg++,this.cacheKey=t,this.usedTimes=1,this.program=v,this.vertexShader=T,this.fragmentShader=E,this}let Tg=0;class Ag{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,i=t.fragmentShader,r=this._getShaderStage(e),s=this._getShaderStage(i),a=this._getShaderCacheForMaterial(t);return a.has(r)===!1&&(a.add(r),r.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const i of e)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let i=e.get(t);return i===void 0&&(i=new Set,e.set(t,i)),i}_getShaderStage(t){const e=this.shaderCache;let i=e.get(t);return i===void 0&&(i=new wg(t),e.set(t,i)),i}}class wg{constructor(t){this.id=Tg++,this.code=t,this.usedTimes=0}}function Rg(n,t,e,i,r,s,a){const o=new ko,c=new Ag,l=new Set,h=[],f=r.logarithmicDepthBuffer,d=r.vertexTextures;let m=r.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(_){return l.add(_),_===0?"uv":`uv${_}`}function p(_,M,P,D,I){const V=D.fog,G=I.geometry,W=_.isMeshStandardMaterial?D.environment:null,$=(_.isMeshStandardMaterial?e:t).get(_.envMap||W),k=$&&$.mapping===Os?$.image.height:null,N=g[_.type];_.precision!==null&&(m=r.getMaxPrecision(_.precision),m!==_.precision&&console.warn("THREE.WebGLProgram.getParameters:",_.precision,"not supported, using",m,"instead."));const O=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,Q=O!==void 0?O.length:0;let ut=0;G.morphAttributes.position!==void 0&&(ut=1),G.morphAttributes.normal!==void 0&&(ut=2),G.morphAttributes.color!==void 0&&(ut=3);let mt,Pt,Dt,K;if(N){const re=vn[N];mt=re.vertexShader,Pt=re.fragmentShader}else mt=_.vertexShader,Pt=_.fragmentShader,c.update(_),Dt=c.getVertexShaderID(_),K=c.getFragmentShaderID(_);const Y=n.getRenderTarget(),dt=n.state.buffers.depth.getReversed(),Ct=I.isInstancedMesh===!0,St=I.isBatchedMesh===!0,Zt=!!_.map,ye=!!_.matcap,L=!!$,ue=!!_.aoMap,tt=!!_.lightMap,at=!!_.bumpMap,rt=!!_.normalMap,kt=!!_.displacementMap,et=!!_.emissiveMap,ht=!!_.metalnessMap,Ht=!!_.roughnessMap,Gt=_.anisotropy>0,C=_.clearcoat>0,S=_.dispersion>0,B=_.iridescence>0,Z=_.sheen>0,J=_.transmission>0,X=Gt&&!!_.anisotropyMap,Mt=C&&!!_.clearcoatMap,st=C&&!!_.clearcoatNormalMap,xt=C&&!!_.clearcoatRoughnessMap,Et=B&&!!_.iridescenceMap,it=B&&!!_.iridescenceThicknessMap,gt=Z&&!!_.sheenColorMap,Ft=Z&&!!_.sheenRoughnessMap,At=!!_.specularMap,pt=!!_.specularColorMap,Xt=!!_.specularIntensityMap,F=J&&!!_.transmissionMap,ot=J&&!!_.thicknessMap,ft=!!_.gradientMap,yt=!!_.alphaMap,lt=_.alphaTest>0,nt=!!_.alphaHash,Rt=!!_.extensions;let Yt=Qn;_.toneMapped&&(Y===null||Y.isXRRenderTarget===!0)&&(Yt=n.toneMapping);const de={shaderID:N,shaderType:_.type,shaderName:_.name,vertexShader:mt,fragmentShader:Pt,defines:_.defines,customVertexShaderID:Dt,customFragmentShaderID:K,isRawShaderMaterial:_.isRawShaderMaterial===!0,glslVersion:_.glslVersion,precision:m,batching:St,batchingColor:St&&I._colorsTexture!==null,instancing:Ct,instancingColor:Ct&&I.instanceColor!==null,instancingMorph:Ct&&I.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:Y===null?n.outputColorSpace:Y.isXRRenderTarget===!0?Y.texture.colorSpace:rr,alphaToCoverage:!!_.alphaToCoverage,map:Zt,matcap:ye,envMap:L,envMapMode:L&&$.mapping,envMapCubeUVHeight:k,aoMap:ue,lightMap:tt,bumpMap:at,normalMap:rt,displacementMap:d&&kt,emissiveMap:et,normalMapObjectSpace:rt&&_.normalMapType===au,normalMapTangentSpace:rt&&_.normalMapType===su,metalnessMap:ht,roughnessMap:Ht,anisotropy:Gt,anisotropyMap:X,clearcoat:C,clearcoatMap:Mt,clearcoatNormalMap:st,clearcoatRoughnessMap:xt,dispersion:S,iridescence:B,iridescenceMap:Et,iridescenceThicknessMap:it,sheen:Z,sheenColorMap:gt,sheenRoughnessMap:Ft,specularMap:At,specularColorMap:pt,specularIntensityMap:Xt,transmission:J,transmissionMap:F,thicknessMap:ot,gradientMap:ft,opaque:_.transparent===!1&&_.blending===vi&&_.alphaToCoverage===!1,alphaMap:yt,alphaTest:lt,alphaHash:nt,combine:_.combine,mapUv:Zt&&v(_.map.channel),aoMapUv:ue&&v(_.aoMap.channel),lightMapUv:tt&&v(_.lightMap.channel),bumpMapUv:at&&v(_.bumpMap.channel),normalMapUv:rt&&v(_.normalMap.channel),displacementMapUv:kt&&v(_.displacementMap.channel),emissiveMapUv:et&&v(_.emissiveMap.channel),metalnessMapUv:ht&&v(_.metalnessMap.channel),roughnessMapUv:Ht&&v(_.roughnessMap.channel),anisotropyMapUv:X&&v(_.anisotropyMap.channel),clearcoatMapUv:Mt&&v(_.clearcoatMap.channel),clearcoatNormalMapUv:st&&v(_.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:xt&&v(_.clearcoatRoughnessMap.channel),iridescenceMapUv:Et&&v(_.iridescenceMap.channel),iridescenceThicknessMapUv:it&&v(_.iridescenceThicknessMap.channel),sheenColorMapUv:gt&&v(_.sheenColorMap.channel),sheenRoughnessMapUv:Ft&&v(_.sheenRoughnessMap.channel),specularMapUv:At&&v(_.specularMap.channel),specularColorMapUv:pt&&v(_.specularColorMap.channel),specularIntensityMapUv:Xt&&v(_.specularIntensityMap.channel),transmissionMapUv:F&&v(_.transmissionMap.channel),thicknessMapUv:ot&&v(_.thicknessMap.channel),alphaMapUv:yt&&v(_.alphaMap.channel),vertexTangents:!!G.attributes.tangent&&(rt||Gt),vertexColors:_.vertexColors,vertexAlphas:_.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,pointsUvs:I.isPoints===!0&&!!G.attributes.uv&&(Zt||yt),fog:!!V,useFog:_.fog===!0,fogExp2:!!V&&V.isFogExp2,flatShading:_.flatShading===!0&&_.wireframe===!1,sizeAttenuation:_.sizeAttenuation===!0,logarithmicDepthBuffer:f,reversedDepthBuffer:dt,skinning:I.isSkinnedMesh===!0,morphTargets:G.morphAttributes.position!==void 0,morphNormals:G.morphAttributes.normal!==void 0,morphColors:G.morphAttributes.color!==void 0,morphTargetsCount:Q,morphTextureStride:ut,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:_.dithering,shadowMapEnabled:n.shadowMap.enabled&&P.length>0,shadowMapType:n.shadowMap.type,toneMapping:Yt,decodeVideoTexture:Zt&&_.map.isVideoTexture===!0&&ie.getTransfer(_.map.colorSpace)===le,decodeVideoTextureEmissive:et&&_.emissiveMap.isVideoTexture===!0&&ie.getTransfer(_.emissiveMap.colorSpace)===le,premultipliedAlpha:_.premultipliedAlpha,doubleSided:_.side===Un,flipSided:_.side===We,useDepthPacking:_.depthPacking>=0,depthPacking:_.depthPacking||0,index0AttributeName:_.index0AttributeName,extensionClipCullDistance:Rt&&_.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Rt&&_.extensions.multiDraw===!0||St)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:_.customProgramCacheKey()};return de.vertexUv1s=l.has(1),de.vertexUv2s=l.has(2),de.vertexUv3s=l.has(3),l.clear(),de}function u(_){const M=[];if(_.shaderID?M.push(_.shaderID):(M.push(_.customVertexShaderID),M.push(_.customFragmentShaderID)),_.defines!==void 0)for(const P in _.defines)M.push(P),M.push(_.defines[P]);return _.isRawShaderMaterial===!1&&(b(M,_),y(M,_),M.push(n.outputColorSpace)),M.push(_.customProgramCacheKey),M.join()}function b(_,M){_.push(M.precision),_.push(M.outputColorSpace),_.push(M.envMapMode),_.push(M.envMapCubeUVHeight),_.push(M.mapUv),_.push(M.alphaMapUv),_.push(M.lightMapUv),_.push(M.aoMapUv),_.push(M.bumpMapUv),_.push(M.normalMapUv),_.push(M.displacementMapUv),_.push(M.emissiveMapUv),_.push(M.metalnessMapUv),_.push(M.roughnessMapUv),_.push(M.anisotropyMapUv),_.push(M.clearcoatMapUv),_.push(M.clearcoatNormalMapUv),_.push(M.clearcoatRoughnessMapUv),_.push(M.iridescenceMapUv),_.push(M.iridescenceThicknessMapUv),_.push(M.sheenColorMapUv),_.push(M.sheenRoughnessMapUv),_.push(M.specularMapUv),_.push(M.specularColorMapUv),_.push(M.specularIntensityMapUv),_.push(M.transmissionMapUv),_.push(M.thicknessMapUv),_.push(M.combine),_.push(M.fogExp2),_.push(M.sizeAttenuation),_.push(M.morphTargetsCount),_.push(M.morphAttributeCount),_.push(M.numDirLights),_.push(M.numPointLights),_.push(M.numSpotLights),_.push(M.numSpotLightMaps),_.push(M.numHemiLights),_.push(M.numRectAreaLights),_.push(M.numDirLightShadows),_.push(M.numPointLightShadows),_.push(M.numSpotLightShadows),_.push(M.numSpotLightShadowsWithMaps),_.push(M.numLightProbes),_.push(M.shadowMapType),_.push(M.toneMapping),_.push(M.numClippingPlanes),_.push(M.numClipIntersection),_.push(M.depthPacking)}function y(_,M){o.disableAll(),M.supportsVertexTextures&&o.enable(0),M.instancing&&o.enable(1),M.instancingColor&&o.enable(2),M.instancingMorph&&o.enable(3),M.matcap&&o.enable(4),M.envMap&&o.enable(5),M.normalMapObjectSpace&&o.enable(6),M.normalMapTangentSpace&&o.enable(7),M.clearcoat&&o.enable(8),M.iridescence&&o.enable(9),M.alphaTest&&o.enable(10),M.vertexColors&&o.enable(11),M.vertexAlphas&&o.enable(12),M.vertexUv1s&&o.enable(13),M.vertexUv2s&&o.enable(14),M.vertexUv3s&&o.enable(15),M.vertexTangents&&o.enable(16),M.anisotropy&&o.enable(17),M.alphaHash&&o.enable(18),M.batching&&o.enable(19),M.dispersion&&o.enable(20),M.batchingColor&&o.enable(21),M.gradientMap&&o.enable(22),_.push(o.mask),o.disableAll(),M.fog&&o.enable(0),M.useFog&&o.enable(1),M.flatShading&&o.enable(2),M.logarithmicDepthBuffer&&o.enable(3),M.reversedDepthBuffer&&o.enable(4),M.skinning&&o.enable(5),M.morphTargets&&o.enable(6),M.morphNormals&&o.enable(7),M.morphColors&&o.enable(8),M.premultipliedAlpha&&o.enable(9),M.shadowMapEnabled&&o.enable(10),M.doubleSided&&o.enable(11),M.flipSided&&o.enable(12),M.useDepthPacking&&o.enable(13),M.dithering&&o.enable(14),M.transmission&&o.enable(15),M.sheen&&o.enable(16),M.opaque&&o.enable(17),M.pointsUvs&&o.enable(18),M.decodeVideoTexture&&o.enable(19),M.decodeVideoTextureEmissive&&o.enable(20),M.alphaToCoverage&&o.enable(21),_.push(o.mask)}function x(_){const M=g[_.type];let P;if(M){const D=vn[M];P=Ku.clone(D.uniforms)}else P=_.uniforms;return P}function T(_,M){let P;for(let D=0,I=h.length;D<I;D++){const V=h[D];if(V.cacheKey===M){P=V,++P.usedTimes;break}}return P===void 0&&(P=new bg(n,M,_,s),h.push(P)),P}function E(_){if(--_.usedTimes===0){const M=h.indexOf(_);h[M]=h[h.length-1],h.pop(),_.destroy()}}function w(_){c.remove(_)}function R(){c.dispose()}return{getParameters:p,getProgramCacheKey:u,getUniforms:x,acquireProgram:T,releaseProgram:E,releaseShaderCache:w,programs:h,dispose:R}}function Cg(){let n=new WeakMap;function t(a){return n.has(a)}function e(a){let o=n.get(a);return o===void 0&&(o={},n.set(a,o)),o}function i(a){n.delete(a)}function r(a,o,c){n.get(a)[o]=c}function s(){n=new WeakMap}return{has:t,get:e,remove:i,update:r,dispose:s}}function Pg(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.material.id!==t.material.id?n.material.id-t.material.id:n.z!==t.z?n.z-t.z:n.id-t.id}function rc(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.z!==t.z?t.z-n.z:n.id-t.id}function sc(){const n=[];let t=0;const e=[],i=[],r=[];function s(){t=0,e.length=0,i.length=0,r.length=0}function a(f,d,m,g,v,p){let u=n[t];return u===void 0?(u={id:f.id,object:f,geometry:d,material:m,groupOrder:g,renderOrder:f.renderOrder,z:v,group:p},n[t]=u):(u.id=f.id,u.object=f,u.geometry=d,u.material=m,u.groupOrder=g,u.renderOrder=f.renderOrder,u.z=v,u.group=p),t++,u}function o(f,d,m,g,v,p){const u=a(f,d,m,g,v,p);m.transmission>0?i.push(u):m.transparent===!0?r.push(u):e.push(u)}function c(f,d,m,g,v,p){const u=a(f,d,m,g,v,p);m.transmission>0?i.unshift(u):m.transparent===!0?r.unshift(u):e.unshift(u)}function l(f,d){e.length>1&&e.sort(f||Pg),i.length>1&&i.sort(d||rc),r.length>1&&r.sort(d||rc)}function h(){for(let f=t,d=n.length;f<d;f++){const m=n[f];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:e,transmissive:i,transparent:r,init:s,push:o,unshift:c,finish:h,sort:l}}function Dg(){let n=new WeakMap;function t(i,r){const s=n.get(i);let a;return s===void 0?(a=new sc,n.set(i,[a])):r>=s.length?(a=new sc,s.push(a)):a=s[r],a}function e(){n=new WeakMap}return{get:t,dispose:e}}function Lg(){const n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new U,color:new Bt};break;case"SpotLight":e={position:new U,direction:new U,color:new Bt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new U,color:new Bt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new U,skyColor:new Bt,groundColor:new Bt};break;case"RectAreaLight":e={color:new Bt,position:new U,halfWidth:new U,halfHeight:new U};break}return n[t.id]=e,e}}}function Ig(){const n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ot};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ot};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ot,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[t.id]=e,e}}}let Ug=0;function Fg(n,t){return(t.castShadow?2:0)-(n.castShadow?2:0)+(t.map?1:0)-(n.map?1:0)}function Ng(n){const t=new Lg,e=Ig(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)i.probe.push(new U);const r=new U,s=new _e,a=new _e;function o(l){let h=0,f=0,d=0;for(let _=0;_<9;_++)i.probe[_].set(0,0,0);let m=0,g=0,v=0,p=0,u=0,b=0,y=0,x=0,T=0,E=0,w=0;l.sort(Fg);for(let _=0,M=l.length;_<M;_++){const P=l[_],D=P.color,I=P.intensity,V=P.distance,G=P.shadow&&P.shadow.map?P.shadow.map.texture:null;if(P.isAmbientLight)h+=D.r*I,f+=D.g*I,d+=D.b*I;else if(P.isLightProbe){for(let W=0;W<9;W++)i.probe[W].addScaledVector(P.sh.coefficients[W],I);w++}else if(P.isDirectionalLight){const W=t.get(P);if(W.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){const $=P.shadow,k=e.get(P);k.shadowIntensity=$.intensity,k.shadowBias=$.bias,k.shadowNormalBias=$.normalBias,k.shadowRadius=$.radius,k.shadowMapSize=$.mapSize,i.directionalShadow[m]=k,i.directionalShadowMap[m]=G,i.directionalShadowMatrix[m]=P.shadow.matrix,b++}i.directional[m]=W,m++}else if(P.isSpotLight){const W=t.get(P);W.position.setFromMatrixPosition(P.matrixWorld),W.color.copy(D).multiplyScalar(I),W.distance=V,W.coneCos=Math.cos(P.angle),W.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),W.decay=P.decay,i.spot[v]=W;const $=P.shadow;if(P.map&&(i.spotLightMap[T]=P.map,T++,$.updateMatrices(P),P.castShadow&&E++),i.spotLightMatrix[v]=$.matrix,P.castShadow){const k=e.get(P);k.shadowIntensity=$.intensity,k.shadowBias=$.bias,k.shadowNormalBias=$.normalBias,k.shadowRadius=$.radius,k.shadowMapSize=$.mapSize,i.spotShadow[v]=k,i.spotShadowMap[v]=G,x++}v++}else if(P.isRectAreaLight){const W=t.get(P);W.color.copy(D).multiplyScalar(I),W.halfWidth.set(P.width*.5,0,0),W.halfHeight.set(0,P.height*.5,0),i.rectArea[p]=W,p++}else if(P.isPointLight){const W=t.get(P);if(W.color.copy(P.color).multiplyScalar(P.intensity),W.distance=P.distance,W.decay=P.decay,P.castShadow){const $=P.shadow,k=e.get(P);k.shadowIntensity=$.intensity,k.shadowBias=$.bias,k.shadowNormalBias=$.normalBias,k.shadowRadius=$.radius,k.shadowMapSize=$.mapSize,k.shadowCameraNear=$.camera.near,k.shadowCameraFar=$.camera.far,i.pointShadow[g]=k,i.pointShadowMap[g]=G,i.pointShadowMatrix[g]=P.shadow.matrix,y++}i.point[g]=W,g++}else if(P.isHemisphereLight){const W=t.get(P);W.skyColor.copy(P.color).multiplyScalar(I),W.groundColor.copy(P.groundColor).multiplyScalar(I),i.hemi[u]=W,u++}}p>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=_t.LTC_FLOAT_1,i.rectAreaLTC2=_t.LTC_FLOAT_2):(i.rectAreaLTC1=_t.LTC_HALF_1,i.rectAreaLTC2=_t.LTC_HALF_2)),i.ambient[0]=h,i.ambient[1]=f,i.ambient[2]=d;const R=i.hash;(R.directionalLength!==m||R.pointLength!==g||R.spotLength!==v||R.rectAreaLength!==p||R.hemiLength!==u||R.numDirectionalShadows!==b||R.numPointShadows!==y||R.numSpotShadows!==x||R.numSpotMaps!==T||R.numLightProbes!==w)&&(i.directional.length=m,i.spot.length=v,i.rectArea.length=p,i.point.length=g,i.hemi.length=u,i.directionalShadow.length=b,i.directionalShadowMap.length=b,i.pointShadow.length=y,i.pointShadowMap.length=y,i.spotShadow.length=x,i.spotShadowMap.length=x,i.directionalShadowMatrix.length=b,i.pointShadowMatrix.length=y,i.spotLightMatrix.length=x+T-E,i.spotLightMap.length=T,i.numSpotLightShadowsWithMaps=E,i.numLightProbes=w,R.directionalLength=m,R.pointLength=g,R.spotLength=v,R.rectAreaLength=p,R.hemiLength=u,R.numDirectionalShadows=b,R.numPointShadows=y,R.numSpotShadows=x,R.numSpotMaps=T,R.numLightProbes=w,i.version=Ug++)}function c(l,h){let f=0,d=0,m=0,g=0,v=0;const p=h.matrixWorldInverse;for(let u=0,b=l.length;u<b;u++){const y=l[u];if(y.isDirectionalLight){const x=i.directional[f];x.direction.setFromMatrixPosition(y.matrixWorld),r.setFromMatrixPosition(y.target.matrixWorld),x.direction.sub(r),x.direction.transformDirection(p),f++}else if(y.isSpotLight){const x=i.spot[m];x.position.setFromMatrixPosition(y.matrixWorld),x.position.applyMatrix4(p),x.direction.setFromMatrixPosition(y.matrixWorld),r.setFromMatrixPosition(y.target.matrixWorld),x.direction.sub(r),x.direction.transformDirection(p),m++}else if(y.isRectAreaLight){const x=i.rectArea[g];x.position.setFromMatrixPosition(y.matrixWorld),x.position.applyMatrix4(p),a.identity(),s.copy(y.matrixWorld),s.premultiply(p),a.extractRotation(s),x.halfWidth.set(y.width*.5,0,0),x.halfHeight.set(0,y.height*.5,0),x.halfWidth.applyMatrix4(a),x.halfHeight.applyMatrix4(a),g++}else if(y.isPointLight){const x=i.point[d];x.position.setFromMatrixPosition(y.matrixWorld),x.position.applyMatrix4(p),d++}else if(y.isHemisphereLight){const x=i.hemi[v];x.direction.setFromMatrixPosition(y.matrixWorld),x.direction.transformDirection(p),v++}}}return{setup:o,setupView:c,state:i}}function ac(n){const t=new Ng(n),e=[],i=[];function r(h){l.camera=h,e.length=0,i.length=0}function s(h){e.push(h)}function a(h){i.push(h)}function o(){t.setup(e)}function c(h){t.setupView(e,h)}const l={lightsArray:e,shadowsArray:i,camera:null,lights:t,transmissionRenderTarget:{}};return{init:r,state:l,setupLights:o,setupLightsView:c,pushLight:s,pushShadow:a}}function Og(n){let t=new WeakMap;function e(r,s=0){const a=t.get(r);let o;return a===void 0?(o=new ac(n),t.set(r,[o])):s>=a.length?(o=new ac(n),a.push(o)):o=a[s],o}function i(){t=new WeakMap}return{get:e,dispose:i}}const Bg=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,zg=`uniform sampler2D shadow_pass;
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
}`;function kg(n,t,e){let i=new Xc;const r=new Ot,s=new Ot,a=new Me,o=new cd({depthPacking:ru}),c=new hd,l={},h=e.maxTextureSize,f={[ei]:We,[We]:ei,[Un]:Un},d=new ii({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ot},radius:{value:4}},vertexShader:Bg,fragmentShader:zg}),m=d.clone();m.defines.HORIZONTAL_PASS=1;const g=new se;g.setAttribute("position",new ee(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new sn(g,d),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ec;let u=this.type;this.render=function(E,w,R){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||E.length===0)return;const _=n.getRenderTarget(),M=n.getActiveCubeFace(),P=n.getActiveMipmapLevel(),D=n.state;D.setBlending(Jn),D.buffers.depth.getReversed()===!0?D.buffers.color.setClear(0,0,0,0):D.buffers.color.setClear(1,1,1,1),D.buffers.depth.setTest(!0),D.setScissorTest(!1);const I=u!==Ln&&this.type===Ln,V=u===Ln&&this.type!==Ln;for(let G=0,W=E.length;G<W;G++){const $=E[G],k=$.shadow;if(k===void 0){console.warn("THREE.WebGLShadowMap:",$,"has no shadow.");continue}if(k.autoUpdate===!1&&k.needsUpdate===!1)continue;r.copy(k.mapSize);const N=k.getFrameExtents();if(r.multiply(N),s.copy(k.mapSize),(r.x>h||r.y>h)&&(r.x>h&&(s.x=Math.floor(h/N.x),r.x=s.x*N.x,k.mapSize.x=s.x),r.y>h&&(s.y=Math.floor(h/N.y),r.y=s.y*N.y,k.mapSize.y=s.y)),k.map===null||I===!0||V===!0){const Q=this.type!==Ln?{minFilter:_n,magFilter:_n}:{};k.map!==null&&k.map.dispose(),k.map=new Si(r.x,r.y,Q),k.map.texture.name=$.name+".shadowMap",k.camera.updateProjectionMatrix()}n.setRenderTarget(k.map),n.clear();const O=k.getViewportCount();for(let Q=0;Q<O;Q++){const ut=k.getViewport(Q);a.set(s.x*ut.x,s.y*ut.y,s.x*ut.z,s.y*ut.w),D.viewport(a),k.updateMatrices($,Q),i=k.getFrustum(),x(w,R,k.camera,$,this.type)}k.isPointLightShadow!==!0&&this.type===Ln&&b(k,R),k.needsUpdate=!1}u=this.type,p.needsUpdate=!1,n.setRenderTarget(_,M,P)};function b(E,w){const R=t.update(v);d.defines.VSM_SAMPLES!==E.blurSamples&&(d.defines.VSM_SAMPLES=E.blurSamples,m.defines.VSM_SAMPLES=E.blurSamples,d.needsUpdate=!0,m.needsUpdate=!0),E.mapPass===null&&(E.mapPass=new Si(r.x,r.y)),d.uniforms.shadow_pass.value=E.map.texture,d.uniforms.resolution.value=E.mapSize,d.uniforms.radius.value=E.radius,n.setRenderTarget(E.mapPass),n.clear(),n.renderBufferDirect(w,null,R,d,v,null),m.uniforms.shadow_pass.value=E.mapPass.texture,m.uniforms.resolution.value=E.mapSize,m.uniforms.radius.value=E.radius,n.setRenderTarget(E.map),n.clear(),n.renderBufferDirect(w,null,R,m,v,null)}function y(E,w,R,_){let M=null;const P=R.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(P!==void 0)M=P;else if(M=R.isPointLight===!0?c:o,n.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0||w.map&&w.alphaTest>0||w.alphaToCoverage===!0){const D=M.uuid,I=w.uuid;let V=l[D];V===void 0&&(V={},l[D]=V);let G=V[I];G===void 0&&(G=M.clone(),V[I]=G,w.addEventListener("dispose",T)),M=G}if(M.visible=w.visible,M.wireframe=w.wireframe,_===Ln?M.side=w.shadowSide!==null?w.shadowSide:w.side:M.side=w.shadowSide!==null?w.shadowSide:f[w.side],M.alphaMap=w.alphaMap,M.alphaTest=w.alphaToCoverage===!0?.5:w.alphaTest,M.map=w.map,M.clipShadows=w.clipShadows,M.clippingPlanes=w.clippingPlanes,M.clipIntersection=w.clipIntersection,M.displacementMap=w.displacementMap,M.displacementScale=w.displacementScale,M.displacementBias=w.displacementBias,M.wireframeLinewidth=w.wireframeLinewidth,M.linewidth=w.linewidth,R.isPointLight===!0&&M.isMeshDistanceMaterial===!0){const D=n.properties.get(M);D.light=R}return M}function x(E,w,R,_,M){if(E.visible===!1)return;if(E.layers.test(w.layers)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&M===Ln)&&(!E.frustumCulled||i.intersectsObject(E))){E.modelViewMatrix.multiplyMatrices(R.matrixWorldInverse,E.matrixWorld);const I=t.update(E),V=E.material;if(Array.isArray(V)){const G=I.groups;for(let W=0,$=G.length;W<$;W++){const k=G[W],N=V[k.materialIndex];if(N&&N.visible){const O=y(E,N,_,M);E.onBeforeShadow(n,E,w,R,I,O,k),n.renderBufferDirect(R,null,I,O,E,k),E.onAfterShadow(n,E,w,R,I,O,k)}}}else if(V.visible){const G=y(E,V,_,M);E.onBeforeShadow(n,E,w,R,I,G,null),n.renderBufferDirect(R,null,I,G,E,null),E.onAfterShadow(n,E,w,R,I,G,null)}}const D=E.children;for(let I=0,V=D.length;I<V;I++)x(D[I],w,R,_,M)}function T(E){E.target.removeEventListener("dispose",T);for(const R in l){const _=l[R],M=E.target.uuid;M in _&&(_[M].dispose(),delete _[M])}}}const Hg={[Da]:La,[Ia]:Na,[Ua]:Oa,[er]:Fa,[La]:Da,[Na]:Ia,[Oa]:Ua,[Fa]:er};function Gg(n,t){function e(){let F=!1;const ot=new Me;let ft=null;const yt=new Me(0,0,0,0);return{setMask:function(lt){ft!==lt&&!F&&(n.colorMask(lt,lt,lt,lt),ft=lt)},setLocked:function(lt){F=lt},setClear:function(lt,nt,Rt,Yt,de){de===!0&&(lt*=Yt,nt*=Yt,Rt*=Yt),ot.set(lt,nt,Rt,Yt),yt.equals(ot)===!1&&(n.clearColor(lt,nt,Rt,Yt),yt.copy(ot))},reset:function(){F=!1,ft=null,yt.set(-1,0,0,0)}}}function i(){let F=!1,ot=!1,ft=null,yt=null,lt=null;return{setReversed:function(nt){if(ot!==nt){const Rt=t.get("EXT_clip_control");nt?Rt.clipControlEXT(Rt.LOWER_LEFT_EXT,Rt.ZERO_TO_ONE_EXT):Rt.clipControlEXT(Rt.LOWER_LEFT_EXT,Rt.NEGATIVE_ONE_TO_ONE_EXT),ot=nt;const Yt=lt;lt=null,this.setClear(Yt)}},getReversed:function(){return ot},setTest:function(nt){nt?Y(n.DEPTH_TEST):dt(n.DEPTH_TEST)},setMask:function(nt){ft!==nt&&!F&&(n.depthMask(nt),ft=nt)},setFunc:function(nt){if(ot&&(nt=Hg[nt]),yt!==nt){switch(nt){case Da:n.depthFunc(n.NEVER);break;case La:n.depthFunc(n.ALWAYS);break;case Ia:n.depthFunc(n.LESS);break;case er:n.depthFunc(n.LEQUAL);break;case Ua:n.depthFunc(n.EQUAL);break;case Fa:n.depthFunc(n.GEQUAL);break;case Na:n.depthFunc(n.GREATER);break;case Oa:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}yt=nt}},setLocked:function(nt){F=nt},setClear:function(nt){lt!==nt&&(ot&&(nt=1-nt),n.clearDepth(nt),lt=nt)},reset:function(){F=!1,ft=null,yt=null,lt=null,ot=!1}}}function r(){let F=!1,ot=null,ft=null,yt=null,lt=null,nt=null,Rt=null,Yt=null,de=null;return{setTest:function(re){F||(re?Y(n.STENCIL_TEST):dt(n.STENCIL_TEST))},setMask:function(re){ot!==re&&!F&&(n.stencilMask(re),ot=re)},setFunc:function(re,An,xn){(ft!==re||yt!==An||lt!==xn)&&(n.stencilFunc(re,An,xn),ft=re,yt=An,lt=xn)},setOp:function(re,An,xn){(nt!==re||Rt!==An||Yt!==xn)&&(n.stencilOp(re,An,xn),nt=re,Rt=An,Yt=xn)},setLocked:function(re){F=re},setClear:function(re){de!==re&&(n.clearStencil(re),de=re)},reset:function(){F=!1,ot=null,ft=null,yt=null,lt=null,nt=null,Rt=null,Yt=null,de=null}}}const s=new e,a=new i,o=new r,c=new WeakMap,l=new WeakMap;let h={},f={},d=new WeakMap,m=[],g=null,v=!1,p=null,u=null,b=null,y=null,x=null,T=null,E=null,w=new Bt(0,0,0),R=0,_=!1,M=null,P=null,D=null,I=null,V=null;const G=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let W=!1,$=0;const k=n.getParameter(n.VERSION);k.indexOf("WebGL")!==-1?($=parseFloat(/^WebGL (\d)/.exec(k)[1]),W=$>=1):k.indexOf("OpenGL ES")!==-1&&($=parseFloat(/^OpenGL ES (\d)/.exec(k)[1]),W=$>=2);let N=null,O={};const Q=n.getParameter(n.SCISSOR_BOX),ut=n.getParameter(n.VIEWPORT),mt=new Me().fromArray(Q),Pt=new Me().fromArray(ut);function Dt(F,ot,ft,yt){const lt=new Uint8Array(4),nt=n.createTexture();n.bindTexture(F,nt),n.texParameteri(F,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(F,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Rt=0;Rt<ft;Rt++)F===n.TEXTURE_3D||F===n.TEXTURE_2D_ARRAY?n.texImage3D(ot,0,n.RGBA,1,1,yt,0,n.RGBA,n.UNSIGNED_BYTE,lt):n.texImage2D(ot+Rt,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,lt);return nt}const K={};K[n.TEXTURE_2D]=Dt(n.TEXTURE_2D,n.TEXTURE_2D,1),K[n.TEXTURE_CUBE_MAP]=Dt(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),K[n.TEXTURE_2D_ARRAY]=Dt(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),K[n.TEXTURE_3D]=Dt(n.TEXTURE_3D,n.TEXTURE_3D,1,1),s.setClear(0,0,0,1),a.setClear(1),o.setClear(0),Y(n.DEPTH_TEST),a.setFunc(er),at(!1),rt(el),Y(n.CULL_FACE),ue(Jn);function Y(F){h[F]!==!0&&(n.enable(F),h[F]=!0)}function dt(F){h[F]!==!1&&(n.disable(F),h[F]=!1)}function Ct(F,ot){return f[F]!==ot?(n.bindFramebuffer(F,ot),f[F]=ot,F===n.DRAW_FRAMEBUFFER&&(f[n.FRAMEBUFFER]=ot),F===n.FRAMEBUFFER&&(f[n.DRAW_FRAMEBUFFER]=ot),!0):!1}function St(F,ot){let ft=m,yt=!1;if(F){ft=d.get(ot),ft===void 0&&(ft=[],d.set(ot,ft));const lt=F.textures;if(ft.length!==lt.length||ft[0]!==n.COLOR_ATTACHMENT0){for(let nt=0,Rt=lt.length;nt<Rt;nt++)ft[nt]=n.COLOR_ATTACHMENT0+nt;ft.length=lt.length,yt=!0}}else ft[0]!==n.BACK&&(ft[0]=n.BACK,yt=!0);yt&&n.drawBuffers(ft)}function Zt(F){return g!==F?(n.useProgram(F),g=F,!0):!1}const ye={[mi]:n.FUNC_ADD,[Dh]:n.FUNC_SUBTRACT,[Lh]:n.FUNC_REVERSE_SUBTRACT};ye[Ih]=n.MIN,ye[Uh]=n.MAX;const L={[Fh]:n.ZERO,[Nh]:n.ONE,[Oh]:n.SRC_COLOR,[Ca]:n.SRC_ALPHA,[Vh]:n.SRC_ALPHA_SATURATE,[Hh]:n.DST_COLOR,[zh]:n.DST_ALPHA,[Bh]:n.ONE_MINUS_SRC_COLOR,[Pa]:n.ONE_MINUS_SRC_ALPHA,[Gh]:n.ONE_MINUS_DST_COLOR,[kh]:n.ONE_MINUS_DST_ALPHA,[Wh]:n.CONSTANT_COLOR,[Xh]:n.ONE_MINUS_CONSTANT_COLOR,[Yh]:n.CONSTANT_ALPHA,[qh]:n.ONE_MINUS_CONSTANT_ALPHA};function ue(F,ot,ft,yt,lt,nt,Rt,Yt,de,re){if(F===Jn){v===!0&&(dt(n.BLEND),v=!1);return}if(v===!1&&(Y(n.BLEND),v=!0),F!==Ph){if(F!==p||re!==_){if((u!==mi||x!==mi)&&(n.blendEquation(n.FUNC_ADD),u=mi,x=mi),re)switch(F){case vi:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case jt:n.blendFunc(n.ONE,n.ONE);break;case nl:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case il:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",F);break}else switch(F){case vi:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case jt:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case nl:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case il:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",F);break}b=null,y=null,T=null,E=null,w.set(0,0,0),R=0,p=F,_=re}return}lt=lt||ot,nt=nt||ft,Rt=Rt||yt,(ot!==u||lt!==x)&&(n.blendEquationSeparate(ye[ot],ye[lt]),u=ot,x=lt),(ft!==b||yt!==y||nt!==T||Rt!==E)&&(n.blendFuncSeparate(L[ft],L[yt],L[nt],L[Rt]),b=ft,y=yt,T=nt,E=Rt),(Yt.equals(w)===!1||de!==R)&&(n.blendColor(Yt.r,Yt.g,Yt.b,de),w.copy(Yt),R=de),p=F,_=!1}function tt(F,ot){F.side===Un?dt(n.CULL_FACE):Y(n.CULL_FACE);let ft=F.side===We;ot&&(ft=!ft),at(ft),F.blending===vi&&F.transparent===!1?ue(Jn):ue(F.blending,F.blendEquation,F.blendSrc,F.blendDst,F.blendEquationAlpha,F.blendSrcAlpha,F.blendDstAlpha,F.blendColor,F.blendAlpha,F.premultipliedAlpha),a.setFunc(F.depthFunc),a.setTest(F.depthTest),a.setMask(F.depthWrite),s.setMask(F.colorWrite);const yt=F.stencilWrite;o.setTest(yt),yt&&(o.setMask(F.stencilWriteMask),o.setFunc(F.stencilFunc,F.stencilRef,F.stencilFuncMask),o.setOp(F.stencilFail,F.stencilZFail,F.stencilZPass)),et(F.polygonOffset,F.polygonOffsetFactor,F.polygonOffsetUnits),F.alphaToCoverage===!0?Y(n.SAMPLE_ALPHA_TO_COVERAGE):dt(n.SAMPLE_ALPHA_TO_COVERAGE)}function at(F){M!==F&&(F?n.frontFace(n.CW):n.frontFace(n.CCW),M=F)}function rt(F){F!==wh?(Y(n.CULL_FACE),F!==P&&(F===el?n.cullFace(n.BACK):F===Rh?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):dt(n.CULL_FACE),P=F}function kt(F){F!==D&&(W&&n.lineWidth(F),D=F)}function et(F,ot,ft){F?(Y(n.POLYGON_OFFSET_FILL),(I!==ot||V!==ft)&&(n.polygonOffset(ot,ft),I=ot,V=ft)):dt(n.POLYGON_OFFSET_FILL)}function ht(F){F?Y(n.SCISSOR_TEST):dt(n.SCISSOR_TEST)}function Ht(F){F===void 0&&(F=n.TEXTURE0+G-1),N!==F&&(n.activeTexture(F),N=F)}function Gt(F,ot,ft){ft===void 0&&(N===null?ft=n.TEXTURE0+G-1:ft=N);let yt=O[ft];yt===void 0&&(yt={type:void 0,texture:void 0},O[ft]=yt),(yt.type!==F||yt.texture!==ot)&&(N!==ft&&(n.activeTexture(ft),N=ft),n.bindTexture(F,ot||K[F]),yt.type=F,yt.texture=ot)}function C(){const F=O[N];F!==void 0&&F.type!==void 0&&(n.bindTexture(F.type,null),F.type=void 0,F.texture=void 0)}function S(){try{n.compressedTexImage2D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function B(){try{n.compressedTexImage3D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Z(){try{n.texSubImage2D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function J(){try{n.texSubImage3D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function X(){try{n.compressedTexSubImage2D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Mt(){try{n.compressedTexSubImage3D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function st(){try{n.texStorage2D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function xt(){try{n.texStorage3D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Et(){try{n.texImage2D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function it(){try{n.texImage3D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function gt(F){mt.equals(F)===!1&&(n.scissor(F.x,F.y,F.z,F.w),mt.copy(F))}function Ft(F){Pt.equals(F)===!1&&(n.viewport(F.x,F.y,F.z,F.w),Pt.copy(F))}function At(F,ot){let ft=l.get(ot);ft===void 0&&(ft=new WeakMap,l.set(ot,ft));let yt=ft.get(F);yt===void 0&&(yt=n.getUniformBlockIndex(ot,F.name),ft.set(F,yt))}function pt(F,ot){const yt=l.get(ot).get(F);c.get(ot)!==yt&&(n.uniformBlockBinding(ot,yt,F.__bindingPointIndex),c.set(ot,yt))}function Xt(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),a.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),h={},N=null,O={},f={},d=new WeakMap,m=[],g=null,v=!1,p=null,u=null,b=null,y=null,x=null,T=null,E=null,w=new Bt(0,0,0),R=0,_=!1,M=null,P=null,D=null,I=null,V=null,mt.set(0,0,n.canvas.width,n.canvas.height),Pt.set(0,0,n.canvas.width,n.canvas.height),s.reset(),a.reset(),o.reset()}return{buffers:{color:s,depth:a,stencil:o},enable:Y,disable:dt,bindFramebuffer:Ct,drawBuffers:St,useProgram:Zt,setBlending:ue,setMaterial:tt,setFlipSided:at,setCullFace:rt,setLineWidth:kt,setPolygonOffset:et,setScissorTest:ht,activeTexture:Ht,bindTexture:Gt,unbindTexture:C,compressedTexImage2D:S,compressedTexImage3D:B,texImage2D:Et,texImage3D:it,updateUBOMapping:At,uniformBlockBinding:pt,texStorage2D:st,texStorage3D:xt,texSubImage2D:Z,texSubImage3D:J,compressedTexSubImage2D:X,compressedTexSubImage3D:Mt,scissor:gt,viewport:Ft,reset:Xt}}function Vg(n,t,e,i,r,s,a){const o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new Ot,h=new WeakMap;let f;const d=new WeakMap;let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(C,S){return m?new OffscreenCanvas(C,S):Ds("canvas")}function v(C,S,B){let Z=1;const J=Gt(C);if((J.width>B||J.height>B)&&(Z=B/Math.max(J.width,J.height)),Z<1)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap||typeof VideoFrame<"u"&&C instanceof VideoFrame){const X=Math.floor(Z*J.width),Mt=Math.floor(Z*J.height);f===void 0&&(f=g(X,Mt));const st=S?g(X,Mt):f;return st.width=X,st.height=Mt,st.getContext("2d").drawImage(C,0,0,X,Mt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+J.width+"x"+J.height+") to ("+X+"x"+Mt+")."),st}else return"data"in C&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+J.width+"x"+J.height+")."),C;return C}function p(C){return C.generateMipmaps}function u(C){n.generateMipmap(C)}function b(C){return C.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:C.isWebGL3DRenderTarget?n.TEXTURE_3D:C.isWebGLArrayRenderTarget||C.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function y(C,S,B,Z,J=!1){if(C!==null){if(n[C]!==void 0)return n[C];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let X=S;if(S===n.RED&&(B===n.FLOAT&&(X=n.R32F),B===n.HALF_FLOAT&&(X=n.R16F),B===n.UNSIGNED_BYTE&&(X=n.R8)),S===n.RED_INTEGER&&(B===n.UNSIGNED_BYTE&&(X=n.R8UI),B===n.UNSIGNED_SHORT&&(X=n.R16UI),B===n.UNSIGNED_INT&&(X=n.R32UI),B===n.BYTE&&(X=n.R8I),B===n.SHORT&&(X=n.R16I),B===n.INT&&(X=n.R32I)),S===n.RG&&(B===n.FLOAT&&(X=n.RG32F),B===n.HALF_FLOAT&&(X=n.RG16F),B===n.UNSIGNED_BYTE&&(X=n.RG8)),S===n.RG_INTEGER&&(B===n.UNSIGNED_BYTE&&(X=n.RG8UI),B===n.UNSIGNED_SHORT&&(X=n.RG16UI),B===n.UNSIGNED_INT&&(X=n.RG32UI),B===n.BYTE&&(X=n.RG8I),B===n.SHORT&&(X=n.RG16I),B===n.INT&&(X=n.RG32I)),S===n.RGB_INTEGER&&(B===n.UNSIGNED_BYTE&&(X=n.RGB8UI),B===n.UNSIGNED_SHORT&&(X=n.RGB16UI),B===n.UNSIGNED_INT&&(X=n.RGB32UI),B===n.BYTE&&(X=n.RGB8I),B===n.SHORT&&(X=n.RGB16I),B===n.INT&&(X=n.RGB32I)),S===n.RGBA_INTEGER&&(B===n.UNSIGNED_BYTE&&(X=n.RGBA8UI),B===n.UNSIGNED_SHORT&&(X=n.RGBA16UI),B===n.UNSIGNED_INT&&(X=n.RGBA32UI),B===n.BYTE&&(X=n.RGBA8I),B===n.SHORT&&(X=n.RGBA16I),B===n.INT&&(X=n.RGBA32I)),S===n.RGB&&(B===n.UNSIGNED_INT_5_9_9_9_REV&&(X=n.RGB9_E5),B===n.UNSIGNED_INT_10F_11F_11F_REV&&(X=n.R11F_G11F_B10F)),S===n.RGBA){const Mt=J?Cs:ie.getTransfer(Z);B===n.FLOAT&&(X=n.RGBA32F),B===n.HALF_FLOAT&&(X=n.RGBA16F),B===n.UNSIGNED_BYTE&&(X=Mt===le?n.SRGB8_ALPHA8:n.RGBA8),B===n.UNSIGNED_SHORT_4_4_4_4&&(X=n.RGBA4),B===n.UNSIGNED_SHORT_5_5_5_1&&(X=n.RGB5_A1)}return(X===n.R16F||X===n.R32F||X===n.RG16F||X===n.RG32F||X===n.RGBA16F||X===n.RGBA32F)&&t.get("EXT_color_buffer_float"),X}function x(C,S){let B;return C?S===null||S===yi||S===Ar?B=n.DEPTH24_STENCIL8:S===Fn?B=n.DEPTH32F_STENCIL8:S===Tr&&(B=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):S===null||S===yi||S===Ar?B=n.DEPTH_COMPONENT24:S===Fn?B=n.DEPTH_COMPONENT32F:S===Tr&&(B=n.DEPTH_COMPONENT16),B}function T(C,S){return p(C)===!0||C.isFramebufferTexture&&C.minFilter!==_n&&C.minFilter!==fn?Math.log2(Math.max(S.width,S.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?S.mipmaps.length:1}function E(C){const S=C.target;S.removeEventListener("dispose",E),R(S),S.isVideoTexture&&h.delete(S)}function w(C){const S=C.target;S.removeEventListener("dispose",w),M(S)}function R(C){const S=i.get(C);if(S.__webglInit===void 0)return;const B=C.source,Z=d.get(B);if(Z){const J=Z[S.__cacheKey];J.usedTimes--,J.usedTimes===0&&_(C),Object.keys(Z).length===0&&d.delete(B)}i.remove(C)}function _(C){const S=i.get(C);n.deleteTexture(S.__webglTexture);const B=C.source,Z=d.get(B);delete Z[S.__cacheKey],a.memory.textures--}function M(C){const S=i.get(C);if(C.depthTexture&&(C.depthTexture.dispose(),i.remove(C.depthTexture)),C.isWebGLCubeRenderTarget)for(let Z=0;Z<6;Z++){if(Array.isArray(S.__webglFramebuffer[Z]))for(let J=0;J<S.__webglFramebuffer[Z].length;J++)n.deleteFramebuffer(S.__webglFramebuffer[Z][J]);else n.deleteFramebuffer(S.__webglFramebuffer[Z]);S.__webglDepthbuffer&&n.deleteRenderbuffer(S.__webglDepthbuffer[Z])}else{if(Array.isArray(S.__webglFramebuffer))for(let Z=0;Z<S.__webglFramebuffer.length;Z++)n.deleteFramebuffer(S.__webglFramebuffer[Z]);else n.deleteFramebuffer(S.__webglFramebuffer);if(S.__webglDepthbuffer&&n.deleteRenderbuffer(S.__webglDepthbuffer),S.__webglMultisampledFramebuffer&&n.deleteFramebuffer(S.__webglMultisampledFramebuffer),S.__webglColorRenderbuffer)for(let Z=0;Z<S.__webglColorRenderbuffer.length;Z++)S.__webglColorRenderbuffer[Z]&&n.deleteRenderbuffer(S.__webglColorRenderbuffer[Z]);S.__webglDepthRenderbuffer&&n.deleteRenderbuffer(S.__webglDepthRenderbuffer)}const B=C.textures;for(let Z=0,J=B.length;Z<J;Z++){const X=i.get(B[Z]);X.__webglTexture&&(n.deleteTexture(X.__webglTexture),a.memory.textures--),i.remove(B[Z])}i.remove(C)}let P=0;function D(){P=0}function I(){const C=P;return C>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+C+" texture units while this GPU supports only "+r.maxTextures),P+=1,C}function V(C){const S=[];return S.push(C.wrapS),S.push(C.wrapT),S.push(C.wrapR||0),S.push(C.magFilter),S.push(C.minFilter),S.push(C.anisotropy),S.push(C.internalFormat),S.push(C.format),S.push(C.type),S.push(C.generateMipmaps),S.push(C.premultiplyAlpha),S.push(C.flipY),S.push(C.unpackAlignment),S.push(C.colorSpace),S.join()}function G(C,S){const B=i.get(C);if(C.isVideoTexture&&ht(C),C.isRenderTargetTexture===!1&&C.isExternalTexture!==!0&&C.version>0&&B.__version!==C.version){const Z=C.image;if(Z===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Z.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{K(B,C,S);return}}else C.isExternalTexture&&(B.__webglTexture=C.sourceTexture?C.sourceTexture:null);e.bindTexture(n.TEXTURE_2D,B.__webglTexture,n.TEXTURE0+S)}function W(C,S){const B=i.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&B.__version!==C.version){K(B,C,S);return}e.bindTexture(n.TEXTURE_2D_ARRAY,B.__webglTexture,n.TEXTURE0+S)}function $(C,S){const B=i.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&B.__version!==C.version){K(B,C,S);return}e.bindTexture(n.TEXTURE_3D,B.__webglTexture,n.TEXTURE0+S)}function k(C,S){const B=i.get(C);if(C.version>0&&B.__version!==C.version){Y(B,C,S);return}e.bindTexture(n.TEXTURE_CUBE_MAP,B.__webglTexture,n.TEXTURE0+S)}const N={[ka]:n.REPEAT,[_i]:n.CLAMP_TO_EDGE,[Ha]:n.MIRRORED_REPEAT},O={[_n]:n.NEAREST,[nu]:n.NEAREST_MIPMAP_NEAREST,[Vr]:n.NEAREST_MIPMAP_LINEAR,[fn]:n.LINEAR,[qs]:n.LINEAR_MIPMAP_NEAREST,[jn]:n.LINEAR_MIPMAP_LINEAR},Q={[ou]:n.NEVER,[fu]:n.ALWAYS,[lu]:n.LESS,[Fc]:n.LEQUAL,[cu]:n.EQUAL,[du]:n.GEQUAL,[hu]:n.GREATER,[uu]:n.NOTEQUAL};function ut(C,S){if(S.type===Fn&&t.has("OES_texture_float_linear")===!1&&(S.magFilter===fn||S.magFilter===qs||S.magFilter===Vr||S.magFilter===jn||S.minFilter===fn||S.minFilter===qs||S.minFilter===Vr||S.minFilter===jn)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(C,n.TEXTURE_WRAP_S,N[S.wrapS]),n.texParameteri(C,n.TEXTURE_WRAP_T,N[S.wrapT]),(C===n.TEXTURE_3D||C===n.TEXTURE_2D_ARRAY)&&n.texParameteri(C,n.TEXTURE_WRAP_R,N[S.wrapR]),n.texParameteri(C,n.TEXTURE_MAG_FILTER,O[S.magFilter]),n.texParameteri(C,n.TEXTURE_MIN_FILTER,O[S.minFilter]),S.compareFunction&&(n.texParameteri(C,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(C,n.TEXTURE_COMPARE_FUNC,Q[S.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(S.magFilter===_n||S.minFilter!==Vr&&S.minFilter!==jn||S.type===Fn&&t.has("OES_texture_float_linear")===!1)return;if(S.anisotropy>1||i.get(S).__currentAnisotropy){const B=t.get("EXT_texture_filter_anisotropic");n.texParameterf(C,B.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,r.getMaxAnisotropy())),i.get(S).__currentAnisotropy=S.anisotropy}}}function mt(C,S){let B=!1;C.__webglInit===void 0&&(C.__webglInit=!0,S.addEventListener("dispose",E));const Z=S.source;let J=d.get(Z);J===void 0&&(J={},d.set(Z,J));const X=V(S);if(X!==C.__cacheKey){J[X]===void 0&&(J[X]={texture:n.createTexture(),usedTimes:0},a.memory.textures++,B=!0),J[X].usedTimes++;const Mt=J[C.__cacheKey];Mt!==void 0&&(J[C.__cacheKey].usedTimes--,Mt.usedTimes===0&&_(S)),C.__cacheKey=X,C.__webglTexture=J[X].texture}return B}function Pt(C,S,B){return Math.floor(Math.floor(C/B)/S)}function Dt(C,S,B,Z){const X=C.updateRanges;if(X.length===0)e.texSubImage2D(n.TEXTURE_2D,0,0,0,S.width,S.height,B,Z,S.data);else{X.sort((it,gt)=>it.start-gt.start);let Mt=0;for(let it=1;it<X.length;it++){const gt=X[Mt],Ft=X[it],At=gt.start+gt.count,pt=Pt(Ft.start,S.width,4),Xt=Pt(gt.start,S.width,4);Ft.start<=At+1&&pt===Xt&&Pt(Ft.start+Ft.count-1,S.width,4)===pt?gt.count=Math.max(gt.count,Ft.start+Ft.count-gt.start):(++Mt,X[Mt]=Ft)}X.length=Mt+1;const st=n.getParameter(n.UNPACK_ROW_LENGTH),xt=n.getParameter(n.UNPACK_SKIP_PIXELS),Et=n.getParameter(n.UNPACK_SKIP_ROWS);n.pixelStorei(n.UNPACK_ROW_LENGTH,S.width);for(let it=0,gt=X.length;it<gt;it++){const Ft=X[it],At=Math.floor(Ft.start/4),pt=Math.ceil(Ft.count/4),Xt=At%S.width,F=Math.floor(At/S.width),ot=pt,ft=1;n.pixelStorei(n.UNPACK_SKIP_PIXELS,Xt),n.pixelStorei(n.UNPACK_SKIP_ROWS,F),e.texSubImage2D(n.TEXTURE_2D,0,Xt,F,ot,ft,B,Z,S.data)}C.clearUpdateRanges(),n.pixelStorei(n.UNPACK_ROW_LENGTH,st),n.pixelStorei(n.UNPACK_SKIP_PIXELS,xt),n.pixelStorei(n.UNPACK_SKIP_ROWS,Et)}}function K(C,S,B){let Z=n.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(Z=n.TEXTURE_2D_ARRAY),S.isData3DTexture&&(Z=n.TEXTURE_3D);const J=mt(C,S),X=S.source;e.bindTexture(Z,C.__webglTexture,n.TEXTURE0+B);const Mt=i.get(X);if(X.version!==Mt.__version||J===!0){e.activeTexture(n.TEXTURE0+B);const st=ie.getPrimaries(ie.workingColorSpace),xt=S.colorSpace===qn?null:ie.getPrimaries(S.colorSpace),Et=S.colorSpace===qn||st===xt?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,S.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,S.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Et);let it=v(S.image,!1,r.maxTextureSize);it=Ht(S,it);const gt=s.convert(S.format,S.colorSpace),Ft=s.convert(S.type);let At=y(S.internalFormat,gt,Ft,S.colorSpace,S.isVideoTexture);ut(Z,S);let pt;const Xt=S.mipmaps,F=S.isVideoTexture!==!0,ot=Mt.__version===void 0||J===!0,ft=X.dataReady,yt=T(S,it);if(S.isDepthTexture)At=x(S.format===Rr,S.type),ot&&(F?e.texStorage2D(n.TEXTURE_2D,1,At,it.width,it.height):e.texImage2D(n.TEXTURE_2D,0,At,it.width,it.height,0,gt,Ft,null));else if(S.isDataTexture)if(Xt.length>0){F&&ot&&e.texStorage2D(n.TEXTURE_2D,yt,At,Xt[0].width,Xt[0].height);for(let lt=0,nt=Xt.length;lt<nt;lt++)pt=Xt[lt],F?ft&&e.texSubImage2D(n.TEXTURE_2D,lt,0,0,pt.width,pt.height,gt,Ft,pt.data):e.texImage2D(n.TEXTURE_2D,lt,At,pt.width,pt.height,0,gt,Ft,pt.data);S.generateMipmaps=!1}else F?(ot&&e.texStorage2D(n.TEXTURE_2D,yt,At,it.width,it.height),ft&&Dt(S,it,gt,Ft)):e.texImage2D(n.TEXTURE_2D,0,At,it.width,it.height,0,gt,Ft,it.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){F&&ot&&e.texStorage3D(n.TEXTURE_2D_ARRAY,yt,At,Xt[0].width,Xt[0].height,it.depth);for(let lt=0,nt=Xt.length;lt<nt;lt++)if(pt=Xt[lt],S.format!==pn)if(gt!==null)if(F){if(ft)if(S.layerUpdates.size>0){const Rt=Nl(pt.width,pt.height,S.format,S.type);for(const Yt of S.layerUpdates){const de=pt.data.subarray(Yt*Rt/pt.data.BYTES_PER_ELEMENT,(Yt+1)*Rt/pt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,lt,0,0,Yt,pt.width,pt.height,1,gt,de)}S.clearLayerUpdates()}else e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,lt,0,0,0,pt.width,pt.height,it.depth,gt,pt.data)}else e.compressedTexImage3D(n.TEXTURE_2D_ARRAY,lt,At,pt.width,pt.height,it.depth,0,pt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else F?ft&&e.texSubImage3D(n.TEXTURE_2D_ARRAY,lt,0,0,0,pt.width,pt.height,it.depth,gt,Ft,pt.data):e.texImage3D(n.TEXTURE_2D_ARRAY,lt,At,pt.width,pt.height,it.depth,0,gt,Ft,pt.data)}else{F&&ot&&e.texStorage2D(n.TEXTURE_2D,yt,At,Xt[0].width,Xt[0].height);for(let lt=0,nt=Xt.length;lt<nt;lt++)pt=Xt[lt],S.format!==pn?gt!==null?F?ft&&e.compressedTexSubImage2D(n.TEXTURE_2D,lt,0,0,pt.width,pt.height,gt,pt.data):e.compressedTexImage2D(n.TEXTURE_2D,lt,At,pt.width,pt.height,0,pt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):F?ft&&e.texSubImage2D(n.TEXTURE_2D,lt,0,0,pt.width,pt.height,gt,Ft,pt.data):e.texImage2D(n.TEXTURE_2D,lt,At,pt.width,pt.height,0,gt,Ft,pt.data)}else if(S.isDataArrayTexture)if(F){if(ot&&e.texStorage3D(n.TEXTURE_2D_ARRAY,yt,At,it.width,it.height,it.depth),ft)if(S.layerUpdates.size>0){const lt=Nl(it.width,it.height,S.format,S.type);for(const nt of S.layerUpdates){const Rt=it.data.subarray(nt*lt/it.data.BYTES_PER_ELEMENT,(nt+1)*lt/it.data.BYTES_PER_ELEMENT);e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,nt,it.width,it.height,1,gt,Ft,Rt)}S.clearLayerUpdates()}else e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,it.width,it.height,it.depth,gt,Ft,it.data)}else e.texImage3D(n.TEXTURE_2D_ARRAY,0,At,it.width,it.height,it.depth,0,gt,Ft,it.data);else if(S.isData3DTexture)F?(ot&&e.texStorage3D(n.TEXTURE_3D,yt,At,it.width,it.height,it.depth),ft&&e.texSubImage3D(n.TEXTURE_3D,0,0,0,0,it.width,it.height,it.depth,gt,Ft,it.data)):e.texImage3D(n.TEXTURE_3D,0,At,it.width,it.height,it.depth,0,gt,Ft,it.data);else if(S.isFramebufferTexture){if(ot)if(F)e.texStorage2D(n.TEXTURE_2D,yt,At,it.width,it.height);else{let lt=it.width,nt=it.height;for(let Rt=0;Rt<yt;Rt++)e.texImage2D(n.TEXTURE_2D,Rt,At,lt,nt,0,gt,Ft,null),lt>>=1,nt>>=1}}else if(Xt.length>0){if(F&&ot){const lt=Gt(Xt[0]);e.texStorage2D(n.TEXTURE_2D,yt,At,lt.width,lt.height)}for(let lt=0,nt=Xt.length;lt<nt;lt++)pt=Xt[lt],F?ft&&e.texSubImage2D(n.TEXTURE_2D,lt,0,0,gt,Ft,pt):e.texImage2D(n.TEXTURE_2D,lt,At,gt,Ft,pt);S.generateMipmaps=!1}else if(F){if(ot){const lt=Gt(it);e.texStorage2D(n.TEXTURE_2D,yt,At,lt.width,lt.height)}ft&&e.texSubImage2D(n.TEXTURE_2D,0,0,0,gt,Ft,it)}else e.texImage2D(n.TEXTURE_2D,0,At,gt,Ft,it);p(S)&&u(Z),Mt.__version=X.version,S.onUpdate&&S.onUpdate(S)}C.__version=S.version}function Y(C,S,B){if(S.image.length!==6)return;const Z=mt(C,S),J=S.source;e.bindTexture(n.TEXTURE_CUBE_MAP,C.__webglTexture,n.TEXTURE0+B);const X=i.get(J);if(J.version!==X.__version||Z===!0){e.activeTexture(n.TEXTURE0+B);const Mt=ie.getPrimaries(ie.workingColorSpace),st=S.colorSpace===qn?null:ie.getPrimaries(S.colorSpace),xt=S.colorSpace===qn||Mt===st?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,S.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,S.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,xt);const Et=S.isCompressedTexture||S.image[0].isCompressedTexture,it=S.image[0]&&S.image[0].isDataTexture,gt=[];for(let nt=0;nt<6;nt++)!Et&&!it?gt[nt]=v(S.image[nt],!0,r.maxCubemapSize):gt[nt]=it?S.image[nt].image:S.image[nt],gt[nt]=Ht(S,gt[nt]);const Ft=gt[0],At=s.convert(S.format,S.colorSpace),pt=s.convert(S.type),Xt=y(S.internalFormat,At,pt,S.colorSpace),F=S.isVideoTexture!==!0,ot=X.__version===void 0||Z===!0,ft=J.dataReady;let yt=T(S,Ft);ut(n.TEXTURE_CUBE_MAP,S);let lt;if(Et){F&&ot&&e.texStorage2D(n.TEXTURE_CUBE_MAP,yt,Xt,Ft.width,Ft.height);for(let nt=0;nt<6;nt++){lt=gt[nt].mipmaps;for(let Rt=0;Rt<lt.length;Rt++){const Yt=lt[Rt];S.format!==pn?At!==null?F?ft&&e.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+nt,Rt,0,0,Yt.width,Yt.height,At,Yt.data):e.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+nt,Rt,Xt,Yt.width,Yt.height,0,Yt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):F?ft&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+nt,Rt,0,0,Yt.width,Yt.height,At,pt,Yt.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+nt,Rt,Xt,Yt.width,Yt.height,0,At,pt,Yt.data)}}}else{if(lt=S.mipmaps,F&&ot){lt.length>0&&yt++;const nt=Gt(gt[0]);e.texStorage2D(n.TEXTURE_CUBE_MAP,yt,Xt,nt.width,nt.height)}for(let nt=0;nt<6;nt++)if(it){F?ft&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+nt,0,0,0,gt[nt].width,gt[nt].height,At,pt,gt[nt].data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+nt,0,Xt,gt[nt].width,gt[nt].height,0,At,pt,gt[nt].data);for(let Rt=0;Rt<lt.length;Rt++){const de=lt[Rt].image[nt].image;F?ft&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+nt,Rt+1,0,0,de.width,de.height,At,pt,de.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+nt,Rt+1,Xt,de.width,de.height,0,At,pt,de.data)}}else{F?ft&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+nt,0,0,0,At,pt,gt[nt]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+nt,0,Xt,At,pt,gt[nt]);for(let Rt=0;Rt<lt.length;Rt++){const Yt=lt[Rt];F?ft&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+nt,Rt+1,0,0,At,pt,Yt.image[nt]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+nt,Rt+1,Xt,At,pt,Yt.image[nt])}}}p(S)&&u(n.TEXTURE_CUBE_MAP),X.__version=J.version,S.onUpdate&&S.onUpdate(S)}C.__version=S.version}function dt(C,S,B,Z,J,X){const Mt=s.convert(B.format,B.colorSpace),st=s.convert(B.type),xt=y(B.internalFormat,Mt,st,B.colorSpace),Et=i.get(S),it=i.get(B);if(it.__renderTarget=S,!Et.__hasExternalTextures){const gt=Math.max(1,S.width>>X),Ft=Math.max(1,S.height>>X);J===n.TEXTURE_3D||J===n.TEXTURE_2D_ARRAY?e.texImage3D(J,X,xt,gt,Ft,S.depth,0,Mt,st,null):e.texImage2D(J,X,xt,gt,Ft,0,Mt,st,null)}e.bindFramebuffer(n.FRAMEBUFFER,C),et(S)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,Z,J,it.__webglTexture,0,kt(S)):(J===n.TEXTURE_2D||J>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&J<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,Z,J,it.__webglTexture,X),e.bindFramebuffer(n.FRAMEBUFFER,null)}function Ct(C,S,B){if(n.bindRenderbuffer(n.RENDERBUFFER,C),S.depthBuffer){const Z=S.depthTexture,J=Z&&Z.isDepthTexture?Z.type:null,X=x(S.stencilBuffer,J),Mt=S.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,st=kt(S);et(S)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,st,X,S.width,S.height):B?n.renderbufferStorageMultisample(n.RENDERBUFFER,st,X,S.width,S.height):n.renderbufferStorage(n.RENDERBUFFER,X,S.width,S.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,Mt,n.RENDERBUFFER,C)}else{const Z=S.textures;for(let J=0;J<Z.length;J++){const X=Z[J],Mt=s.convert(X.format,X.colorSpace),st=s.convert(X.type),xt=y(X.internalFormat,Mt,st,X.colorSpace),Et=kt(S);B&&et(S)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,Et,xt,S.width,S.height):et(S)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Et,xt,S.width,S.height):n.renderbufferStorage(n.RENDERBUFFER,xt,S.width,S.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function St(C,S){if(S&&S.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(n.FRAMEBUFFER,C),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const Z=i.get(S.depthTexture);Z.__renderTarget=S,(!Z.__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),G(S.depthTexture,0);const J=Z.__webglTexture,X=kt(S);if(S.depthTexture.format===wr)et(S)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,J,0,X):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,J,0);else if(S.depthTexture.format===Rr)et(S)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,J,0,X):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,J,0);else throw new Error("Unknown depthTexture format")}function Zt(C){const S=i.get(C),B=C.isWebGLCubeRenderTarget===!0;if(S.__boundDepthTexture!==C.depthTexture){const Z=C.depthTexture;if(S.__depthDisposeCallback&&S.__depthDisposeCallback(),Z){const J=()=>{delete S.__boundDepthTexture,delete S.__depthDisposeCallback,Z.removeEventListener("dispose",J)};Z.addEventListener("dispose",J),S.__depthDisposeCallback=J}S.__boundDepthTexture=Z}if(C.depthTexture&&!S.__autoAllocateDepthBuffer){if(B)throw new Error("target.depthTexture not supported in Cube render targets");const Z=C.texture.mipmaps;Z&&Z.length>0?St(S.__webglFramebuffer[0],C):St(S.__webglFramebuffer,C)}else if(B){S.__webglDepthbuffer=[];for(let Z=0;Z<6;Z++)if(e.bindFramebuffer(n.FRAMEBUFFER,S.__webglFramebuffer[Z]),S.__webglDepthbuffer[Z]===void 0)S.__webglDepthbuffer[Z]=n.createRenderbuffer(),Ct(S.__webglDepthbuffer[Z],C,!1);else{const J=C.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,X=S.__webglDepthbuffer[Z];n.bindRenderbuffer(n.RENDERBUFFER,X),n.framebufferRenderbuffer(n.FRAMEBUFFER,J,n.RENDERBUFFER,X)}}else{const Z=C.texture.mipmaps;if(Z&&Z.length>0?e.bindFramebuffer(n.FRAMEBUFFER,S.__webglFramebuffer[0]):e.bindFramebuffer(n.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer===void 0)S.__webglDepthbuffer=n.createRenderbuffer(),Ct(S.__webglDepthbuffer,C,!1);else{const J=C.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,X=S.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,X),n.framebufferRenderbuffer(n.FRAMEBUFFER,J,n.RENDERBUFFER,X)}}e.bindFramebuffer(n.FRAMEBUFFER,null)}function ye(C,S,B){const Z=i.get(C);S!==void 0&&dt(Z.__webglFramebuffer,C,C.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),B!==void 0&&Zt(C)}function L(C){const S=C.texture,B=i.get(C),Z=i.get(S);C.addEventListener("dispose",w);const J=C.textures,X=C.isWebGLCubeRenderTarget===!0,Mt=J.length>1;if(Mt||(Z.__webglTexture===void 0&&(Z.__webglTexture=n.createTexture()),Z.__version=S.version,a.memory.textures++),X){B.__webglFramebuffer=[];for(let st=0;st<6;st++)if(S.mipmaps&&S.mipmaps.length>0){B.__webglFramebuffer[st]=[];for(let xt=0;xt<S.mipmaps.length;xt++)B.__webglFramebuffer[st][xt]=n.createFramebuffer()}else B.__webglFramebuffer[st]=n.createFramebuffer()}else{if(S.mipmaps&&S.mipmaps.length>0){B.__webglFramebuffer=[];for(let st=0;st<S.mipmaps.length;st++)B.__webglFramebuffer[st]=n.createFramebuffer()}else B.__webglFramebuffer=n.createFramebuffer();if(Mt)for(let st=0,xt=J.length;st<xt;st++){const Et=i.get(J[st]);Et.__webglTexture===void 0&&(Et.__webglTexture=n.createTexture(),a.memory.textures++)}if(C.samples>0&&et(C)===!1){B.__webglMultisampledFramebuffer=n.createFramebuffer(),B.__webglColorRenderbuffer=[],e.bindFramebuffer(n.FRAMEBUFFER,B.__webglMultisampledFramebuffer);for(let st=0;st<J.length;st++){const xt=J[st];B.__webglColorRenderbuffer[st]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,B.__webglColorRenderbuffer[st]);const Et=s.convert(xt.format,xt.colorSpace),it=s.convert(xt.type),gt=y(xt.internalFormat,Et,it,xt.colorSpace,C.isXRRenderTarget===!0),Ft=kt(C);n.renderbufferStorageMultisample(n.RENDERBUFFER,Ft,gt,C.width,C.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+st,n.RENDERBUFFER,B.__webglColorRenderbuffer[st])}n.bindRenderbuffer(n.RENDERBUFFER,null),C.depthBuffer&&(B.__webglDepthRenderbuffer=n.createRenderbuffer(),Ct(B.__webglDepthRenderbuffer,C,!0)),e.bindFramebuffer(n.FRAMEBUFFER,null)}}if(X){e.bindTexture(n.TEXTURE_CUBE_MAP,Z.__webglTexture),ut(n.TEXTURE_CUBE_MAP,S);for(let st=0;st<6;st++)if(S.mipmaps&&S.mipmaps.length>0)for(let xt=0;xt<S.mipmaps.length;xt++)dt(B.__webglFramebuffer[st][xt],C,S,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+st,xt);else dt(B.__webglFramebuffer[st],C,S,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+st,0);p(S)&&u(n.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Mt){for(let st=0,xt=J.length;st<xt;st++){const Et=J[st],it=i.get(Et);let gt=n.TEXTURE_2D;(C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(gt=C.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),e.bindTexture(gt,it.__webglTexture),ut(gt,Et),dt(B.__webglFramebuffer,C,Et,n.COLOR_ATTACHMENT0+st,gt,0),p(Et)&&u(gt)}e.unbindTexture()}else{let st=n.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(st=C.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),e.bindTexture(st,Z.__webglTexture),ut(st,S),S.mipmaps&&S.mipmaps.length>0)for(let xt=0;xt<S.mipmaps.length;xt++)dt(B.__webglFramebuffer[xt],C,S,n.COLOR_ATTACHMENT0,st,xt);else dt(B.__webglFramebuffer,C,S,n.COLOR_ATTACHMENT0,st,0);p(S)&&u(st),e.unbindTexture()}C.depthBuffer&&Zt(C)}function ue(C){const S=C.textures;for(let B=0,Z=S.length;B<Z;B++){const J=S[B];if(p(J)){const X=b(C),Mt=i.get(J).__webglTexture;e.bindTexture(X,Mt),u(X),e.unbindTexture()}}}const tt=[],at=[];function rt(C){if(C.samples>0){if(et(C)===!1){const S=C.textures,B=C.width,Z=C.height;let J=n.COLOR_BUFFER_BIT;const X=C.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Mt=i.get(C),st=S.length>1;if(st)for(let Et=0;Et<S.length;Et++)e.bindFramebuffer(n.FRAMEBUFFER,Mt.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Et,n.RENDERBUFFER,null),e.bindFramebuffer(n.FRAMEBUFFER,Mt.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Et,n.TEXTURE_2D,null,0);e.bindFramebuffer(n.READ_FRAMEBUFFER,Mt.__webglMultisampledFramebuffer);const xt=C.texture.mipmaps;xt&&xt.length>0?e.bindFramebuffer(n.DRAW_FRAMEBUFFER,Mt.__webglFramebuffer[0]):e.bindFramebuffer(n.DRAW_FRAMEBUFFER,Mt.__webglFramebuffer);for(let Et=0;Et<S.length;Et++){if(C.resolveDepthBuffer&&(C.depthBuffer&&(J|=n.DEPTH_BUFFER_BIT),C.stencilBuffer&&C.resolveStencilBuffer&&(J|=n.STENCIL_BUFFER_BIT)),st){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,Mt.__webglColorRenderbuffer[Et]);const it=i.get(S[Et]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,it,0)}n.blitFramebuffer(0,0,B,Z,0,0,B,Z,J,n.NEAREST),c===!0&&(tt.length=0,at.length=0,tt.push(n.COLOR_ATTACHMENT0+Et),C.depthBuffer&&C.resolveDepthBuffer===!1&&(tt.push(X),at.push(X),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,at)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,tt))}if(e.bindFramebuffer(n.READ_FRAMEBUFFER,null),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),st)for(let Et=0;Et<S.length;Et++){e.bindFramebuffer(n.FRAMEBUFFER,Mt.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Et,n.RENDERBUFFER,Mt.__webglColorRenderbuffer[Et]);const it=i.get(S[Et]).__webglTexture;e.bindFramebuffer(n.FRAMEBUFFER,Mt.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Et,n.TEXTURE_2D,it,0)}e.bindFramebuffer(n.DRAW_FRAMEBUFFER,Mt.__webglMultisampledFramebuffer)}else if(C.depthBuffer&&C.resolveDepthBuffer===!1&&c){const S=C.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[S])}}}function kt(C){return Math.min(r.maxSamples,C.samples)}function et(C){const S=i.get(C);return C.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function ht(C){const S=a.render.frame;h.get(C)!==S&&(h.set(C,S),C.update())}function Ht(C,S){const B=C.colorSpace,Z=C.format,J=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||B!==rr&&B!==qn&&(ie.getTransfer(B)===le?(Z!==pn||J!==Bn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",B)),S}function Gt(C){return typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement?(l.width=C.naturalWidth||C.width,l.height=C.naturalHeight||C.height):typeof VideoFrame<"u"&&C instanceof VideoFrame?(l.width=C.displayWidth,l.height=C.displayHeight):(l.width=C.width,l.height=C.height),l}this.allocateTextureUnit=I,this.resetTextureUnits=D,this.setTexture2D=G,this.setTexture2DArray=W,this.setTexture3D=$,this.setTextureCube=k,this.rebindTextures=ye,this.setupRenderTarget=L,this.updateRenderTargetMipmap=ue,this.updateMultisampleRenderTarget=rt,this.setupDepthRenderbuffer=Zt,this.setupFrameBufferTexture=dt,this.useMultisampledRTT=et}function Wg(n,t){function e(i,r=qn){let s;const a=ie.getTransfer(r);if(i===Bn)return n.UNSIGNED_BYTE;if(i===Io)return n.UNSIGNED_SHORT_4_4_4_4;if(i===Uo)return n.UNSIGNED_SHORT_5_5_5_1;if(i===Cc)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===Pc)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===wc)return n.BYTE;if(i===Rc)return n.SHORT;if(i===Tr)return n.UNSIGNED_SHORT;if(i===Lo)return n.INT;if(i===yi)return n.UNSIGNED_INT;if(i===Fn)return n.FLOAT;if(i===Ur)return n.HALF_FLOAT;if(i===Dc)return n.ALPHA;if(i===Lc)return n.RGB;if(i===pn)return n.RGBA;if(i===wr)return n.DEPTH_COMPONENT;if(i===Rr)return n.DEPTH_STENCIL;if(i===Ic)return n.RED;if(i===Fo)return n.RED_INTEGER;if(i===Uc)return n.RG;if(i===No)return n.RG_INTEGER;if(i===Oo)return n.RGBA_INTEGER;if(i===Ss||i===Es||i===bs||i===Ts)if(a===le)if(s=t.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===Ss)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Es)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===bs)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Ts)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=t.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===Ss)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Es)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===bs)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Ts)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Ga||i===Va||i===Wa||i===Xa)if(s=t.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===Ga)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Va)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Wa)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Xa)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Ya||i===qa||i===$a)if(s=t.get("WEBGL_compressed_texture_etc"),s!==null){if(i===Ya||i===qa)return a===le?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===$a)return a===le?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===ja||i===Ka||i===Za||i===Ja||i===Qa||i===to||i===eo||i===no||i===io||i===ro||i===so||i===ao||i===oo||i===lo)if(s=t.get("WEBGL_compressed_texture_astc"),s!==null){if(i===ja)return a===le?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Ka)return a===le?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Za)return a===le?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Ja)return a===le?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Qa)return a===le?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===to)return a===le?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===eo)return a===le?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===no)return a===le?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===io)return a===le?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===ro)return a===le?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===so)return a===le?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===ao)return a===le?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===oo)return a===le?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===lo)return a===le?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===co||i===ho||i===uo)if(s=t.get("EXT_texture_compression_bptc"),s!==null){if(i===co)return a===le?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===ho)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===uo)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===fo||i===po||i===mo||i===go)if(s=t.get("EXT_texture_compression_rgtc"),s!==null){if(i===fo)return s.COMPRESSED_RED_RGTC1_EXT;if(i===po)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===mo)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===go)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Ar?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:e}}const Xg=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Yg=`
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

}`;class qg{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){const i=new $c(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=i}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,i=new ii({vertexShader:Xg,fragmentShader:Yg,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new sn(new zs(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class $g extends Ti{constructor(t,e){super();const i=this;let r=null,s=1,a=null,o="local-floor",c=1,l=null,h=null,f=null,d=null,m=null,g=null;const v=typeof XRWebGLBinding<"u",p=new qg,u={},b=e.getContextAttributes();let y=null,x=null;const T=[],E=[],w=new Ot;let R=null;const _=new en;_.viewport=new Me;const M=new en;M.viewport=new Me;const P=[_,M],D=new dd;let I=null,V=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(K){let Y=T[K];return Y===void 0&&(Y=new pa,T[K]=Y),Y.getTargetRaySpace()},this.getControllerGrip=function(K){let Y=T[K];return Y===void 0&&(Y=new pa,T[K]=Y),Y.getGripSpace()},this.getHand=function(K){let Y=T[K];return Y===void 0&&(Y=new pa,T[K]=Y),Y.getHandSpace()};function G(K){const Y=E.indexOf(K.inputSource);if(Y===-1)return;const dt=T[Y];dt!==void 0&&(dt.update(K.inputSource,K.frame,l||a),dt.dispatchEvent({type:K.type,data:K.inputSource}))}function W(){r.removeEventListener("select",G),r.removeEventListener("selectstart",G),r.removeEventListener("selectend",G),r.removeEventListener("squeeze",G),r.removeEventListener("squeezestart",G),r.removeEventListener("squeezeend",G),r.removeEventListener("end",W),r.removeEventListener("inputsourceschange",$);for(let K=0;K<T.length;K++){const Y=E[K];Y!==null&&(E[K]=null,T[K].disconnect(Y))}I=null,V=null,p.reset();for(const K in u)delete u[K];t.setRenderTarget(y),m=null,d=null,f=null,r=null,x=null,Dt.stop(),i.isPresenting=!1,t.setPixelRatio(R),t.setSize(w.width,w.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(K){s=K,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(K){o=K,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function(K){l=K},this.getBaseLayer=function(){return d!==null?d:m},this.getBinding=function(){return f===null&&v&&(f=new XRWebGLBinding(r,e)),f},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=async function(K){if(r=K,r!==null){if(y=t.getRenderTarget(),r.addEventListener("select",G),r.addEventListener("selectstart",G),r.addEventListener("selectend",G),r.addEventListener("squeeze",G),r.addEventListener("squeezestart",G),r.addEventListener("squeezeend",G),r.addEventListener("end",W),r.addEventListener("inputsourceschange",$),b.xrCompatible!==!0&&await e.makeXRCompatible(),R=t.getPixelRatio(),t.getSize(w),v&&"createProjectionLayer"in XRWebGLBinding.prototype){let dt=null,Ct=null,St=null;b.depth&&(St=b.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,dt=b.stencil?Rr:wr,Ct=b.stencil?Ar:yi);const Zt={colorFormat:e.RGBA8,depthFormat:St,scaleFactor:s};f=this.getBinding(),d=f.createProjectionLayer(Zt),r.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),x=new Si(d.textureWidth,d.textureHeight,{format:pn,type:Bn,depthTexture:new qc(d.textureWidth,d.textureHeight,Ct,void 0,void 0,void 0,void 0,void 0,void 0,dt),stencilBuffer:b.stencil,colorSpace:t.outputColorSpace,samples:b.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}else{const dt={antialias:b.antialias,alpha:!0,depth:b.depth,stencil:b.stencil,framebufferScaleFactor:s};m=new XRWebGLLayer(r,e,dt),r.updateRenderState({baseLayer:m}),t.setPixelRatio(1),t.setSize(m.framebufferWidth,m.framebufferHeight,!1),x=new Si(m.framebufferWidth,m.framebufferHeight,{format:pn,type:Bn,colorSpace:t.outputColorSpace,stencilBuffer:b.stencil,resolveDepthBuffer:m.ignoreDepthValues===!1,resolveStencilBuffer:m.ignoreDepthValues===!1})}x.isXRRenderTarget=!0,this.setFoveation(c),l=null,a=await r.requestReferenceSpace(o),Dt.setContext(r),Dt.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return p.getDepthTexture()};function $(K){for(let Y=0;Y<K.removed.length;Y++){const dt=K.removed[Y],Ct=E.indexOf(dt);Ct>=0&&(E[Ct]=null,T[Ct].disconnect(dt))}for(let Y=0;Y<K.added.length;Y++){const dt=K.added[Y];let Ct=E.indexOf(dt);if(Ct===-1){for(let Zt=0;Zt<T.length;Zt++)if(Zt>=E.length){E.push(dt),Ct=Zt;break}else if(E[Zt]===null){E[Zt]=dt,Ct=Zt;break}if(Ct===-1)break}const St=T[Ct];St&&St.connect(dt)}}const k=new U,N=new U;function O(K,Y,dt){k.setFromMatrixPosition(Y.matrixWorld),N.setFromMatrixPosition(dt.matrixWorld);const Ct=k.distanceTo(N),St=Y.projectionMatrix.elements,Zt=dt.projectionMatrix.elements,ye=St[14]/(St[10]-1),L=St[14]/(St[10]+1),ue=(St[9]+1)/St[5],tt=(St[9]-1)/St[5],at=(St[8]-1)/St[0],rt=(Zt[8]+1)/Zt[0],kt=ye*at,et=ye*rt,ht=Ct/(-at+rt),Ht=ht*-at;if(Y.matrixWorld.decompose(K.position,K.quaternion,K.scale),K.translateX(Ht),K.translateZ(ht),K.matrixWorld.compose(K.position,K.quaternion,K.scale),K.matrixWorldInverse.copy(K.matrixWorld).invert(),St[10]===-1)K.projectionMatrix.copy(Y.projectionMatrix),K.projectionMatrixInverse.copy(Y.projectionMatrixInverse);else{const Gt=ye+ht,C=L+ht,S=kt-Ht,B=et+(Ct-Ht),Z=ue*L/C*Gt,J=tt*L/C*Gt;K.projectionMatrix.makePerspective(S,B,Z,J,Gt,C),K.projectionMatrixInverse.copy(K.projectionMatrix).invert()}}function Q(K,Y){Y===null?K.matrixWorld.copy(K.matrix):K.matrixWorld.multiplyMatrices(Y.matrixWorld,K.matrix),K.matrixWorldInverse.copy(K.matrixWorld).invert()}this.updateCamera=function(K){if(r===null)return;let Y=K.near,dt=K.far;p.texture!==null&&(p.depthNear>0&&(Y=p.depthNear),p.depthFar>0&&(dt=p.depthFar)),D.near=M.near=_.near=Y,D.far=M.far=_.far=dt,(I!==D.near||V!==D.far)&&(r.updateRenderState({depthNear:D.near,depthFar:D.far}),I=D.near,V=D.far),D.layers.mask=K.layers.mask|6,_.layers.mask=D.layers.mask&3,M.layers.mask=D.layers.mask&5;const Ct=K.parent,St=D.cameras;Q(D,Ct);for(let Zt=0;Zt<St.length;Zt++)Q(St[Zt],Ct);St.length===2?O(D,_,M):D.projectionMatrix.copy(_.projectionMatrix),ut(K,D,Ct)};function ut(K,Y,dt){dt===null?K.matrix.copy(Y.matrixWorld):(K.matrix.copy(dt.matrixWorld),K.matrix.invert(),K.matrix.multiply(Y.matrixWorld)),K.matrix.decompose(K.position,K.quaternion,K.scale),K.updateMatrixWorld(!0),K.projectionMatrix.copy(Y.projectionMatrix),K.projectionMatrixInverse.copy(Y.projectionMatrixInverse),K.isPerspectiveCamera&&(K.fov=Cr*2*Math.atan(1/K.projectionMatrix.elements[5]),K.zoom=1)}this.getCamera=function(){return D},this.getFoveation=function(){if(!(d===null&&m===null))return c},this.setFoveation=function(K){c=K,d!==null&&(d.fixedFoveation=K),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=K)},this.hasDepthSensing=function(){return p.texture!==null},this.getDepthSensingMesh=function(){return p.getMesh(D)},this.getCameraTexture=function(K){return u[K]};let mt=null;function Pt(K,Y){if(h=Y.getViewerPose(l||a),g=Y,h!==null){const dt=h.views;m!==null&&(t.setRenderTargetFramebuffer(x,m.framebuffer),t.setRenderTarget(x));let Ct=!1;dt.length!==D.cameras.length&&(D.cameras.length=0,Ct=!0);for(let L=0;L<dt.length;L++){const ue=dt[L];let tt=null;if(m!==null)tt=m.getViewport(ue);else{const rt=f.getViewSubImage(d,ue);tt=rt.viewport,L===0&&(t.setRenderTargetTextures(x,rt.colorTexture,rt.depthStencilTexture),t.setRenderTarget(x))}let at=P[L];at===void 0&&(at=new en,at.layers.enable(L),at.viewport=new Me,P[L]=at),at.matrix.fromArray(ue.transform.matrix),at.matrix.decompose(at.position,at.quaternion,at.scale),at.projectionMatrix.fromArray(ue.projectionMatrix),at.projectionMatrixInverse.copy(at.projectionMatrix).invert(),at.viewport.set(tt.x,tt.y,tt.width,tt.height),L===0&&(D.matrix.copy(at.matrix),D.matrix.decompose(D.position,D.quaternion,D.scale)),Ct===!0&&D.cameras.push(at)}const St=r.enabledFeatures;if(St&&St.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&v){f=i.getBinding();const L=f.getDepthInformation(dt[0]);L&&L.isValid&&L.texture&&p.init(L,r.renderState)}if(St&&St.includes("camera-access")&&v){t.state.unbindTexture(),f=i.getBinding();for(let L=0;L<dt.length;L++){const ue=dt[L].camera;if(ue){let tt=u[ue];tt||(tt=new $c,u[ue]=tt);const at=f.getCameraImage(ue);tt.sourceTexture=at}}}}for(let dt=0;dt<T.length;dt++){const Ct=E[dt],St=T[dt];Ct!==null&&St!==void 0&&St.update(Ct,Y,l||a)}mt&&mt(K,Y),Y.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:Y}),g=null}const Dt=new jc;Dt.setAnimationLoop(Pt),this.setAnimationLoop=function(K){mt=K},this.dispose=function(){}}}const ui=new zn,jg=new _e;function Kg(n,t){function e(p,u){p.matrixAutoUpdate===!0&&p.updateMatrix(),u.value.copy(p.matrix)}function i(p,u){u.color.getRGB(p.fogColor.value,Hc(n)),u.isFog?(p.fogNear.value=u.near,p.fogFar.value=u.far):u.isFogExp2&&(p.fogDensity.value=u.density)}function r(p,u,b,y,x){u.isMeshBasicMaterial||u.isMeshLambertMaterial?s(p,u):u.isMeshToonMaterial?(s(p,u),f(p,u)):u.isMeshPhongMaterial?(s(p,u),h(p,u)):u.isMeshStandardMaterial?(s(p,u),d(p,u),u.isMeshPhysicalMaterial&&m(p,u,x)):u.isMeshMatcapMaterial?(s(p,u),g(p,u)):u.isMeshDepthMaterial?s(p,u):u.isMeshDistanceMaterial?(s(p,u),v(p,u)):u.isMeshNormalMaterial?s(p,u):u.isLineBasicMaterial?(a(p,u),u.isLineDashedMaterial&&o(p,u)):u.isPointsMaterial?c(p,u,b,y):u.isSpriteMaterial?l(p,u):u.isShadowMaterial?(p.color.value.copy(u.color),p.opacity.value=u.opacity):u.isShaderMaterial&&(u.uniformsNeedUpdate=!1)}function s(p,u){p.opacity.value=u.opacity,u.color&&p.diffuse.value.copy(u.color),u.emissive&&p.emissive.value.copy(u.emissive).multiplyScalar(u.emissiveIntensity),u.map&&(p.map.value=u.map,e(u.map,p.mapTransform)),u.alphaMap&&(p.alphaMap.value=u.alphaMap,e(u.alphaMap,p.alphaMapTransform)),u.bumpMap&&(p.bumpMap.value=u.bumpMap,e(u.bumpMap,p.bumpMapTransform),p.bumpScale.value=u.bumpScale,u.side===We&&(p.bumpScale.value*=-1)),u.normalMap&&(p.normalMap.value=u.normalMap,e(u.normalMap,p.normalMapTransform),p.normalScale.value.copy(u.normalScale),u.side===We&&p.normalScale.value.negate()),u.displacementMap&&(p.displacementMap.value=u.displacementMap,e(u.displacementMap,p.displacementMapTransform),p.displacementScale.value=u.displacementScale,p.displacementBias.value=u.displacementBias),u.emissiveMap&&(p.emissiveMap.value=u.emissiveMap,e(u.emissiveMap,p.emissiveMapTransform)),u.specularMap&&(p.specularMap.value=u.specularMap,e(u.specularMap,p.specularMapTransform)),u.alphaTest>0&&(p.alphaTest.value=u.alphaTest);const b=t.get(u),y=b.envMap,x=b.envMapRotation;y&&(p.envMap.value=y,ui.copy(x),ui.x*=-1,ui.y*=-1,ui.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(ui.y*=-1,ui.z*=-1),p.envMapRotation.value.setFromMatrix4(jg.makeRotationFromEuler(ui)),p.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=u.reflectivity,p.ior.value=u.ior,p.refractionRatio.value=u.refractionRatio),u.lightMap&&(p.lightMap.value=u.lightMap,p.lightMapIntensity.value=u.lightMapIntensity,e(u.lightMap,p.lightMapTransform)),u.aoMap&&(p.aoMap.value=u.aoMap,p.aoMapIntensity.value=u.aoMapIntensity,e(u.aoMap,p.aoMapTransform))}function a(p,u){p.diffuse.value.copy(u.color),p.opacity.value=u.opacity,u.map&&(p.map.value=u.map,e(u.map,p.mapTransform))}function o(p,u){p.dashSize.value=u.dashSize,p.totalSize.value=u.dashSize+u.gapSize,p.scale.value=u.scale}function c(p,u,b,y){p.diffuse.value.copy(u.color),p.opacity.value=u.opacity,p.size.value=u.size*b,p.scale.value=y*.5,u.map&&(p.map.value=u.map,e(u.map,p.uvTransform)),u.alphaMap&&(p.alphaMap.value=u.alphaMap,e(u.alphaMap,p.alphaMapTransform)),u.alphaTest>0&&(p.alphaTest.value=u.alphaTest)}function l(p,u){p.diffuse.value.copy(u.color),p.opacity.value=u.opacity,p.rotation.value=u.rotation,u.map&&(p.map.value=u.map,e(u.map,p.mapTransform)),u.alphaMap&&(p.alphaMap.value=u.alphaMap,e(u.alphaMap,p.alphaMapTransform)),u.alphaTest>0&&(p.alphaTest.value=u.alphaTest)}function h(p,u){p.specular.value.copy(u.specular),p.shininess.value=Math.max(u.shininess,1e-4)}function f(p,u){u.gradientMap&&(p.gradientMap.value=u.gradientMap)}function d(p,u){p.metalness.value=u.metalness,u.metalnessMap&&(p.metalnessMap.value=u.metalnessMap,e(u.metalnessMap,p.metalnessMapTransform)),p.roughness.value=u.roughness,u.roughnessMap&&(p.roughnessMap.value=u.roughnessMap,e(u.roughnessMap,p.roughnessMapTransform)),u.envMap&&(p.envMapIntensity.value=u.envMapIntensity)}function m(p,u,b){p.ior.value=u.ior,u.sheen>0&&(p.sheenColor.value.copy(u.sheenColor).multiplyScalar(u.sheen),p.sheenRoughness.value=u.sheenRoughness,u.sheenColorMap&&(p.sheenColorMap.value=u.sheenColorMap,e(u.sheenColorMap,p.sheenColorMapTransform)),u.sheenRoughnessMap&&(p.sheenRoughnessMap.value=u.sheenRoughnessMap,e(u.sheenRoughnessMap,p.sheenRoughnessMapTransform))),u.clearcoat>0&&(p.clearcoat.value=u.clearcoat,p.clearcoatRoughness.value=u.clearcoatRoughness,u.clearcoatMap&&(p.clearcoatMap.value=u.clearcoatMap,e(u.clearcoatMap,p.clearcoatMapTransform)),u.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=u.clearcoatRoughnessMap,e(u.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),u.clearcoatNormalMap&&(p.clearcoatNormalMap.value=u.clearcoatNormalMap,e(u.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(u.clearcoatNormalScale),u.side===We&&p.clearcoatNormalScale.value.negate())),u.dispersion>0&&(p.dispersion.value=u.dispersion),u.iridescence>0&&(p.iridescence.value=u.iridescence,p.iridescenceIOR.value=u.iridescenceIOR,p.iridescenceThicknessMinimum.value=u.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=u.iridescenceThicknessRange[1],u.iridescenceMap&&(p.iridescenceMap.value=u.iridescenceMap,e(u.iridescenceMap,p.iridescenceMapTransform)),u.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=u.iridescenceThicknessMap,e(u.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),u.transmission>0&&(p.transmission.value=u.transmission,p.transmissionSamplerMap.value=b.texture,p.transmissionSamplerSize.value.set(b.width,b.height),u.transmissionMap&&(p.transmissionMap.value=u.transmissionMap,e(u.transmissionMap,p.transmissionMapTransform)),p.thickness.value=u.thickness,u.thicknessMap&&(p.thicknessMap.value=u.thicknessMap,e(u.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=u.attenuationDistance,p.attenuationColor.value.copy(u.attenuationColor)),u.anisotropy>0&&(p.anisotropyVector.value.set(u.anisotropy*Math.cos(u.anisotropyRotation),u.anisotropy*Math.sin(u.anisotropyRotation)),u.anisotropyMap&&(p.anisotropyMap.value=u.anisotropyMap,e(u.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=u.specularIntensity,p.specularColor.value.copy(u.specularColor),u.specularColorMap&&(p.specularColorMap.value=u.specularColorMap,e(u.specularColorMap,p.specularColorMapTransform)),u.specularIntensityMap&&(p.specularIntensityMap.value=u.specularIntensityMap,e(u.specularIntensityMap,p.specularIntensityMapTransform))}function g(p,u){u.matcap&&(p.matcap.value=u.matcap)}function v(p,u){const b=t.get(u).light;p.referencePosition.value.setFromMatrixPosition(b.matrixWorld),p.nearDistance.value=b.shadow.camera.near,p.farDistance.value=b.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function Zg(n,t,e,i){let r={},s={},a=[];const o=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function c(b,y){const x=y.program;i.uniformBlockBinding(b,x)}function l(b,y){let x=r[b.id];x===void 0&&(g(b),x=h(b),r[b.id]=x,b.addEventListener("dispose",p));const T=y.program;i.updateUBOMapping(b,T);const E=t.render.frame;s[b.id]!==E&&(d(b),s[b.id]=E)}function h(b){const y=f();b.__bindingPointIndex=y;const x=n.createBuffer(),T=b.__size,E=b.usage;return n.bindBuffer(n.UNIFORM_BUFFER,x),n.bufferData(n.UNIFORM_BUFFER,T,E),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,y,x),x}function f(){for(let b=0;b<o;b++)if(a.indexOf(b)===-1)return a.push(b),b;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(b){const y=r[b.id],x=b.uniforms,T=b.__cache;n.bindBuffer(n.UNIFORM_BUFFER,y);for(let E=0,w=x.length;E<w;E++){const R=Array.isArray(x[E])?x[E]:[x[E]];for(let _=0,M=R.length;_<M;_++){const P=R[_];if(m(P,E,_,T)===!0){const D=P.__offset,I=Array.isArray(P.value)?P.value:[P.value];let V=0;for(let G=0;G<I.length;G++){const W=I[G],$=v(W);typeof W=="number"||typeof W=="boolean"?(P.__data[0]=W,n.bufferSubData(n.UNIFORM_BUFFER,D+V,P.__data)):W.isMatrix3?(P.__data[0]=W.elements[0],P.__data[1]=W.elements[1],P.__data[2]=W.elements[2],P.__data[3]=0,P.__data[4]=W.elements[3],P.__data[5]=W.elements[4],P.__data[6]=W.elements[5],P.__data[7]=0,P.__data[8]=W.elements[6],P.__data[9]=W.elements[7],P.__data[10]=W.elements[8],P.__data[11]=0):(W.toArray(P.__data,V),V+=$.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,D,P.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function m(b,y,x,T){const E=b.value,w=y+"_"+x;if(T[w]===void 0)return typeof E=="number"||typeof E=="boolean"?T[w]=E:T[w]=E.clone(),!0;{const R=T[w];if(typeof E=="number"||typeof E=="boolean"){if(R!==E)return T[w]=E,!0}else if(R.equals(E)===!1)return R.copy(E),!0}return!1}function g(b){const y=b.uniforms;let x=0;const T=16;for(let w=0,R=y.length;w<R;w++){const _=Array.isArray(y[w])?y[w]:[y[w]];for(let M=0,P=_.length;M<P;M++){const D=_[M],I=Array.isArray(D.value)?D.value:[D.value];for(let V=0,G=I.length;V<G;V++){const W=I[V],$=v(W),k=x%T,N=k%$.boundary,O=k+N;x+=N,O!==0&&T-O<$.storage&&(x+=T-O),D.__data=new Float32Array($.storage/Float32Array.BYTES_PER_ELEMENT),D.__offset=x,x+=$.storage}}}const E=x%T;return E>0&&(x+=T-E),b.__size=x,b.__cache={},this}function v(b){const y={boundary:0,storage:0};return typeof b=="number"||typeof b=="boolean"?(y.boundary=4,y.storage=4):b.isVector2?(y.boundary=8,y.storage=8):b.isVector3||b.isColor?(y.boundary=16,y.storage=12):b.isVector4?(y.boundary=16,y.storage=16):b.isMatrix3?(y.boundary=48,y.storage=48):b.isMatrix4?(y.boundary=64,y.storage=64):b.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",b),y}function p(b){const y=b.target;y.removeEventListener("dispose",p);const x=a.indexOf(y.__bindingPointIndex);a.splice(x,1),n.deleteBuffer(r[y.id]),delete r[y.id],delete s[y.id]}function u(){for(const b in r)n.deleteBuffer(r[b]);a=[],r={},s={}}return{bind:c,update:l,dispose:u}}class Jg{constructor(t={}){const{canvas:e=Pu(),context:i=null,depth:r=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:f=!1,reversedDepthBuffer:d=!1}=t;this.isWebGLRenderer=!0;let m;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");m=i.getContextAttributes().alpha}else m=a;const g=new Uint32Array(4),v=new Int32Array(4);let p=null,u=null;const b=[],y=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Qn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const x=this;let T=!1;this._outputColorSpace=De;let E=0,w=0,R=null,_=-1,M=null;const P=new Me,D=new Me;let I=null;const V=new Bt(0);let G=0,W=e.width,$=e.height,k=1,N=null,O=null;const Q=new Me(0,0,W,$),ut=new Me(0,0,W,$);let mt=!1;const Pt=new Xc;let Dt=!1,K=!1;const Y=new _e,dt=new U,Ct=new Me,St={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Zt=!1;function ye(){return R===null?k:1}let L=i;function ue(A,z){return e.getContext(A,z)}try{const A={alpha:!0,depth:r,stencil:s,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:f};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Do}`),e.addEventListener("webglcontextlost",ft,!1),e.addEventListener("webglcontextrestored",yt,!1),e.addEventListener("webglcontextcreationerror",lt,!1),L===null){const z="webgl2";if(L=ue(z,A),L===null)throw ue(z)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(A){throw console.error("THREE.WebGLRenderer: "+A.message),A}let tt,at,rt,kt,et,ht,Ht,Gt,C,S,B,Z,J,X,Mt,st,xt,Et,it,gt,Ft,At,pt,Xt;function F(){tt=new lm(L),tt.init(),At=new Wg(L,tt),at=new em(L,tt,t,At),rt=new Gg(L,tt),at.reversedDepthBuffer&&d&&rt.buffers.depth.setReversed(!0),kt=new um(L),et=new Cg,ht=new Vg(L,tt,rt,et,at,At,kt),Ht=new im(x),Gt=new om(x),C=new gd(L),pt=new Qp(L,C),S=new cm(L,C,kt,pt),B=new fm(L,S,C,kt),it=new dm(L,at,ht),st=new nm(et),Z=new Rg(x,Ht,Gt,tt,at,pt,st),J=new Kg(x,et),X=new Dg,Mt=new Og(tt),Et=new Jp(x,Ht,Gt,rt,B,m,c),xt=new kg(x,B,at),Xt=new Zg(L,kt,at,rt),gt=new tm(L,tt,kt),Ft=new hm(L,tt,kt),kt.programs=Z.programs,x.capabilities=at,x.extensions=tt,x.properties=et,x.renderLists=X,x.shadowMap=xt,x.state=rt,x.info=kt}F();const ot=new $g(x,L);this.xr=ot,this.getContext=function(){return L},this.getContextAttributes=function(){return L.getContextAttributes()},this.forceContextLoss=function(){const A=tt.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=tt.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return k},this.setPixelRatio=function(A){A!==void 0&&(k=A,this.setSize(W,$,!1))},this.getSize=function(A){return A.set(W,$)},this.setSize=function(A,z,q=!0){if(ot.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}W=A,$=z,e.width=Math.floor(A*k),e.height=Math.floor(z*k),q===!0&&(e.style.width=A+"px",e.style.height=z+"px"),this.setViewport(0,0,A,z)},this.getDrawingBufferSize=function(A){return A.set(W*k,$*k).floor()},this.setDrawingBufferSize=function(A,z,q){W=A,$=z,k=q,e.width=Math.floor(A*q),e.height=Math.floor(z*q),this.setViewport(0,0,A,z)},this.getCurrentViewport=function(A){return A.copy(P)},this.getViewport=function(A){return A.copy(Q)},this.setViewport=function(A,z,q,j){A.isVector4?Q.set(A.x,A.y,A.z,A.w):Q.set(A,z,q,j),rt.viewport(P.copy(Q).multiplyScalar(k).round())},this.getScissor=function(A){return A.copy(ut)},this.setScissor=function(A,z,q,j){A.isVector4?ut.set(A.x,A.y,A.z,A.w):ut.set(A,z,q,j),rt.scissor(D.copy(ut).multiplyScalar(k).round())},this.getScissorTest=function(){return mt},this.setScissorTest=function(A){rt.setScissorTest(mt=A)},this.setOpaqueSort=function(A){N=A},this.setTransparentSort=function(A){O=A},this.getClearColor=function(A){return A.copy(Et.getClearColor())},this.setClearColor=function(){Et.setClearColor(...arguments)},this.getClearAlpha=function(){return Et.getClearAlpha()},this.setClearAlpha=function(){Et.setClearAlpha(...arguments)},this.clear=function(A=!0,z=!0,q=!0){let j=0;if(A){let H=!1;if(R!==null){const ct=R.texture.format;H=ct===Oo||ct===No||ct===Fo}if(H){const ct=R.texture.type,vt=ct===Bn||ct===yi||ct===Tr||ct===Ar||ct===Io||ct===Uo,wt=Et.getClearColor(),bt=Et.getClearAlpha(),zt=wt.r,Vt=wt.g,It=wt.b;vt?(g[0]=zt,g[1]=Vt,g[2]=It,g[3]=bt,L.clearBufferuiv(L.COLOR,0,g)):(v[0]=zt,v[1]=Vt,v[2]=It,v[3]=bt,L.clearBufferiv(L.COLOR,0,v))}else j|=L.COLOR_BUFFER_BIT}z&&(j|=L.DEPTH_BUFFER_BIT),q&&(j|=L.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),L.clear(j)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",ft,!1),e.removeEventListener("webglcontextrestored",yt,!1),e.removeEventListener("webglcontextcreationerror",lt,!1),Et.dispose(),X.dispose(),Mt.dispose(),et.dispose(),Ht.dispose(),Gt.dispose(),B.dispose(),pt.dispose(),Xt.dispose(),Z.dispose(),ot.dispose(),ot.removeEventListener("sessionstart",xn),ot.removeEventListener("sessionend",jo),ri.stop()};function ft(A){A.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),T=!0}function yt(){console.log("THREE.WebGLRenderer: Context Restored."),T=!1;const A=kt.autoReset,z=xt.enabled,q=xt.autoUpdate,j=xt.needsUpdate,H=xt.type;F(),kt.autoReset=A,xt.enabled=z,xt.autoUpdate=q,xt.needsUpdate=j,xt.type=H}function lt(A){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function nt(A){const z=A.target;z.removeEventListener("dispose",nt),Rt(z)}function Rt(A){Yt(A),et.remove(A)}function Yt(A){const z=et.get(A).programs;z!==void 0&&(z.forEach(function(q){Z.releaseProgram(q)}),A.isShaderMaterial&&Z.releaseShaderCache(A))}this.renderBufferDirect=function(A,z,q,j,H,ct){z===null&&(z=St);const vt=H.isMesh&&H.matrixWorld.determinant()<0,wt=yh(A,z,q,j,H);rt.setMaterial(j,vt);let bt=q.index,zt=1;if(j.wireframe===!0){if(bt=S.getWireframeAttribute(q),bt===void 0)return;zt=2}const Vt=q.drawRange,It=q.attributes.position;let Jt=Vt.start*zt,oe=(Vt.start+Vt.count)*zt;ct!==null&&(Jt=Math.max(Jt,ct.start*zt),oe=Math.min(oe,(ct.start+ct.count)*zt)),bt!==null?(Jt=Math.max(Jt,0),oe=Math.min(oe,bt.count)):It!=null&&(Jt=Math.max(Jt,0),oe=Math.min(oe,It.count));const xe=oe-Jt;if(xe<0||xe===1/0)return;pt.setup(H,j,wt,q,bt);let fe,he=gt;if(bt!==null&&(fe=C.get(bt),he=Ft,he.setIndex(fe)),H.isMesh)j.wireframe===!0?(rt.setLineWidth(j.wireframeLinewidth*ye()),he.setMode(L.LINES)):he.setMode(L.TRIANGLES);else if(H.isLine){let Nt=j.linewidth;Nt===void 0&&(Nt=1),rt.setLineWidth(Nt*ye()),H.isLineSegments?he.setMode(L.LINES):H.isLineLoop?he.setMode(L.LINE_LOOP):he.setMode(L.LINE_STRIP)}else H.isPoints?he.setMode(L.POINTS):H.isSprite&&he.setMode(L.TRIANGLES);if(H.isBatchedMesh)if(H._multiDrawInstances!==null)Pr("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),he.renderMultiDrawInstances(H._multiDrawStarts,H._multiDrawCounts,H._multiDrawCount,H._multiDrawInstances);else if(tt.get("WEBGL_multi_draw"))he.renderMultiDraw(H._multiDrawStarts,H._multiDrawCounts,H._multiDrawCount);else{const Nt=H._multiDrawStarts,pe=H._multiDrawCounts,ne=H._multiDrawCount,Xe=bt?C.get(bt).bytesPerElement:1,wi=et.get(j).currentProgram.getUniforms();for(let Ye=0;Ye<ne;Ye++)wi.setValue(L,"_gl_DrawID",Ye),he.render(Nt[Ye]/Xe,pe[Ye])}else if(H.isInstancedMesh)he.renderInstances(Jt,xe,H.count);else if(q.isInstancedBufferGeometry){const Nt=q._maxInstanceCount!==void 0?q._maxInstanceCount:1/0,pe=Math.min(q.instanceCount,Nt);he.renderInstances(Jt,xe,pe)}else he.render(Jt,xe)};function de(A,z,q){A.transparent===!0&&A.side===Un&&A.forceSinglePass===!1?(A.side=We,A.needsUpdate=!0,Gr(A,z,q),A.side=ei,A.needsUpdate=!0,Gr(A,z,q),A.side=Un):Gr(A,z,q)}this.compile=function(A,z,q=null){q===null&&(q=A),u=Mt.get(q),u.init(z),y.push(u),q.traverseVisible(function(H){H.isLight&&H.layers.test(z.layers)&&(u.pushLight(H),H.castShadow&&u.pushShadow(H))}),A!==q&&A.traverseVisible(function(H){H.isLight&&H.layers.test(z.layers)&&(u.pushLight(H),H.castShadow&&u.pushShadow(H))}),u.setupLights();const j=new Set;return A.traverse(function(H){if(!(H.isMesh||H.isPoints||H.isLine||H.isSprite))return;const ct=H.material;if(ct)if(Array.isArray(ct))for(let vt=0;vt<ct.length;vt++){const wt=ct[vt];de(wt,q,H),j.add(wt)}else de(ct,q,H),j.add(ct)}),u=y.pop(),j},this.compileAsync=function(A,z,q=null){const j=this.compile(A,z,q);return new Promise(H=>{function ct(){if(j.forEach(function(vt){et.get(vt).currentProgram.isReady()&&j.delete(vt)}),j.size===0){H(A);return}setTimeout(ct,10)}tt.get("KHR_parallel_shader_compile")!==null?ct():setTimeout(ct,10)})};let re=null;function An(A){re&&re(A)}function xn(){ri.stop()}function jo(){ri.start()}const ri=new jc;ri.setAnimationLoop(An),typeof self<"u"&&ri.setContext(self),this.setAnimationLoop=function(A){re=A,ot.setAnimationLoop(A),A===null?ri.stop():ri.start()},ot.addEventListener("sessionstart",xn),ot.addEventListener("sessionend",jo),this.render=function(A,z){if(z!==void 0&&z.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(T===!0)return;if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),z.parent===null&&z.matrixWorldAutoUpdate===!0&&z.updateMatrixWorld(),ot.enabled===!0&&ot.isPresenting===!0&&(ot.cameraAutoUpdate===!0&&ot.updateCamera(z),z=ot.getCamera()),A.isScene===!0&&A.onBeforeRender(x,A,z,R),u=Mt.get(A,y.length),u.init(z),y.push(u),Y.multiplyMatrices(z.projectionMatrix,z.matrixWorldInverse),Pt.setFromProjectionMatrix(Y,yn,z.reversedDepth),K=this.localClippingEnabled,Dt=st.init(this.clippingPlanes,K),p=X.get(A,b.length),p.init(),b.push(p),ot.enabled===!0&&ot.isPresenting===!0){const ct=x.xr.getDepthSensingMesh();ct!==null&&Xs(ct,z,-1/0,x.sortObjects)}Xs(A,z,0,x.sortObjects),p.finish(),x.sortObjects===!0&&p.sort(N,O),Zt=ot.enabled===!1||ot.isPresenting===!1||ot.hasDepthSensing()===!1,Zt&&Et.addToRenderList(p,A),this.info.render.frame++,Dt===!0&&st.beginShadows();const q=u.state.shadowsArray;xt.render(q,A,z),Dt===!0&&st.endShadows(),this.info.autoReset===!0&&this.info.reset();const j=p.opaque,H=p.transmissive;if(u.setupLights(),z.isArrayCamera){const ct=z.cameras;if(H.length>0)for(let vt=0,wt=ct.length;vt<wt;vt++){const bt=ct[vt];Zo(j,H,A,bt)}Zt&&Et.render(A);for(let vt=0,wt=ct.length;vt<wt;vt++){const bt=ct[vt];Ko(p,A,bt,bt.viewport)}}else H.length>0&&Zo(j,H,A,z),Zt&&Et.render(A),Ko(p,A,z);R!==null&&w===0&&(ht.updateMultisampleRenderTarget(R),ht.updateRenderTargetMipmap(R)),A.isScene===!0&&A.onAfterRender(x,A,z),pt.resetDefaultState(),_=-1,M=null,y.pop(),y.length>0?(u=y[y.length-1],Dt===!0&&st.setGlobalState(x.clippingPlanes,u.state.camera)):u=null,b.pop(),b.length>0?p=b[b.length-1]:p=null};function Xs(A,z,q,j){if(A.visible===!1)return;if(A.layers.test(z.layers)){if(A.isGroup)q=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(z);else if(A.isLight)u.pushLight(A),A.castShadow&&u.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||Pt.intersectsSprite(A)){j&&Ct.setFromMatrixPosition(A.matrixWorld).applyMatrix4(Y);const vt=B.update(A),wt=A.material;wt.visible&&p.push(A,vt,wt,q,Ct.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||Pt.intersectsObject(A))){const vt=B.update(A),wt=A.material;if(j&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),Ct.copy(A.boundingSphere.center)):(vt.boundingSphere===null&&vt.computeBoundingSphere(),Ct.copy(vt.boundingSphere.center)),Ct.applyMatrix4(A.matrixWorld).applyMatrix4(Y)),Array.isArray(wt)){const bt=vt.groups;for(let zt=0,Vt=bt.length;zt<Vt;zt++){const It=bt[zt],Jt=wt[It.materialIndex];Jt&&Jt.visible&&p.push(A,vt,Jt,q,Ct.z,It)}}else wt.visible&&p.push(A,vt,wt,q,Ct.z,null)}}const ct=A.children;for(let vt=0,wt=ct.length;vt<wt;vt++)Xs(ct[vt],z,q,j)}function Ko(A,z,q,j){const H=A.opaque,ct=A.transmissive,vt=A.transparent;u.setupLightsView(q),Dt===!0&&st.setGlobalState(x.clippingPlanes,q),j&&rt.viewport(P.copy(j)),H.length>0&&Hr(H,z,q),ct.length>0&&Hr(ct,z,q),vt.length>0&&Hr(vt,z,q),rt.buffers.depth.setTest(!0),rt.buffers.depth.setMask(!0),rt.buffers.color.setMask(!0),rt.setPolygonOffset(!1)}function Zo(A,z,q,j){if((q.isScene===!0?q.overrideMaterial:null)!==null)return;u.state.transmissionRenderTarget[j.id]===void 0&&(u.state.transmissionRenderTarget[j.id]=new Si(1,1,{generateMipmaps:!0,type:tt.has("EXT_color_buffer_half_float")||tt.has("EXT_color_buffer_float")?Ur:Bn,minFilter:jn,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:ie.workingColorSpace}));const ct=u.state.transmissionRenderTarget[j.id],vt=j.viewport||P;ct.setSize(vt.z*x.transmissionResolutionScale,vt.w*x.transmissionResolutionScale);const wt=x.getRenderTarget(),bt=x.getActiveCubeFace(),zt=x.getActiveMipmapLevel();x.setRenderTarget(ct),x.getClearColor(V),G=x.getClearAlpha(),G<1&&x.setClearColor(16777215,.5),x.clear(),Zt&&Et.render(q);const Vt=x.toneMapping;x.toneMapping=Qn;const It=j.viewport;if(j.viewport!==void 0&&(j.viewport=void 0),u.setupLightsView(j),Dt===!0&&st.setGlobalState(x.clippingPlanes,j),Hr(A,q,j),ht.updateMultisampleRenderTarget(ct),ht.updateRenderTargetMipmap(ct),tt.has("WEBGL_multisampled_render_to_texture")===!1){let Jt=!1;for(let oe=0,xe=z.length;oe<xe;oe++){const fe=z[oe],he=fe.object,Nt=fe.geometry,pe=fe.material,ne=fe.group;if(pe.side===Un&&he.layers.test(j.layers)){const Xe=pe.side;pe.side=We,pe.needsUpdate=!0,Jo(he,q,j,Nt,pe,ne),pe.side=Xe,pe.needsUpdate=!0,Jt=!0}}Jt===!0&&(ht.updateMultisampleRenderTarget(ct),ht.updateRenderTargetMipmap(ct))}x.setRenderTarget(wt,bt,zt),x.setClearColor(V,G),It!==void 0&&(j.viewport=It),x.toneMapping=Vt}function Hr(A,z,q){const j=z.isScene===!0?z.overrideMaterial:null;for(let H=0,ct=A.length;H<ct;H++){const vt=A[H],wt=vt.object,bt=vt.geometry,zt=vt.group;let Vt=vt.material;Vt.allowOverride===!0&&j!==null&&(Vt=j),wt.layers.test(q.layers)&&Jo(wt,z,q,bt,Vt,zt)}}function Jo(A,z,q,j,H,ct){A.onBeforeRender(x,z,q,j,H,ct),A.modelViewMatrix.multiplyMatrices(q.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),H.onBeforeRender(x,z,q,j,A,ct),H.transparent===!0&&H.side===Un&&H.forceSinglePass===!1?(H.side=We,H.needsUpdate=!0,x.renderBufferDirect(q,z,j,H,A,ct),H.side=ei,H.needsUpdate=!0,x.renderBufferDirect(q,z,j,H,A,ct),H.side=Un):x.renderBufferDirect(q,z,j,H,A,ct),A.onAfterRender(x,z,q,j,H,ct)}function Gr(A,z,q){z.isScene!==!0&&(z=St);const j=et.get(A),H=u.state.lights,ct=u.state.shadowsArray,vt=H.state.version,wt=Z.getParameters(A,H.state,ct,z,q),bt=Z.getProgramCacheKey(wt);let zt=j.programs;j.environment=A.isMeshStandardMaterial?z.environment:null,j.fog=z.fog,j.envMap=(A.isMeshStandardMaterial?Gt:Ht).get(A.envMap||j.environment),j.envMapRotation=j.environment!==null&&A.envMap===null?z.environmentRotation:A.envMapRotation,zt===void 0&&(A.addEventListener("dispose",nt),zt=new Map,j.programs=zt);let Vt=zt.get(bt);if(Vt!==void 0){if(j.currentProgram===Vt&&j.lightsStateVersion===vt)return tl(A,wt),Vt}else wt.uniforms=Z.getUniforms(A),A.onBeforeCompile(wt,x),Vt=Z.acquireProgram(wt,bt),zt.set(bt,Vt),j.uniforms=wt.uniforms;const It=j.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(It.clippingPlanes=st.uniform),tl(A,wt),j.needsLights=Eh(A),j.lightsStateVersion=vt,j.needsLights&&(It.ambientLightColor.value=H.state.ambient,It.lightProbe.value=H.state.probe,It.directionalLights.value=H.state.directional,It.directionalLightShadows.value=H.state.directionalShadow,It.spotLights.value=H.state.spot,It.spotLightShadows.value=H.state.spotShadow,It.rectAreaLights.value=H.state.rectArea,It.ltc_1.value=H.state.rectAreaLTC1,It.ltc_2.value=H.state.rectAreaLTC2,It.pointLights.value=H.state.point,It.pointLightShadows.value=H.state.pointShadow,It.hemisphereLights.value=H.state.hemi,It.directionalShadowMap.value=H.state.directionalShadowMap,It.directionalShadowMatrix.value=H.state.directionalShadowMatrix,It.spotShadowMap.value=H.state.spotShadowMap,It.spotLightMatrix.value=H.state.spotLightMatrix,It.spotLightMap.value=H.state.spotLightMap,It.pointShadowMap.value=H.state.pointShadowMap,It.pointShadowMatrix.value=H.state.pointShadowMatrix),j.currentProgram=Vt,j.uniformsList=null,Vt}function Qo(A){if(A.uniformsList===null){const z=A.currentProgram.getUniforms();A.uniformsList=As.seqWithValue(z.seq,A.uniforms)}return A.uniformsList}function tl(A,z){const q=et.get(A);q.outputColorSpace=z.outputColorSpace,q.batching=z.batching,q.batchingColor=z.batchingColor,q.instancing=z.instancing,q.instancingColor=z.instancingColor,q.instancingMorph=z.instancingMorph,q.skinning=z.skinning,q.morphTargets=z.morphTargets,q.morphNormals=z.morphNormals,q.morphColors=z.morphColors,q.morphTargetsCount=z.morphTargetsCount,q.numClippingPlanes=z.numClippingPlanes,q.numIntersection=z.numClipIntersection,q.vertexAlphas=z.vertexAlphas,q.vertexTangents=z.vertexTangents,q.toneMapping=z.toneMapping}function yh(A,z,q,j,H){z.isScene!==!0&&(z=St),ht.resetTextureUnits();const ct=z.fog,vt=j.isMeshStandardMaterial?z.environment:null,wt=R===null?x.outputColorSpace:R.isXRRenderTarget===!0?R.texture.colorSpace:rr,bt=(j.isMeshStandardMaterial?Gt:Ht).get(j.envMap||vt),zt=j.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,Vt=!!q.attributes.tangent&&(!!j.normalMap||j.anisotropy>0),It=!!q.morphAttributes.position,Jt=!!q.morphAttributes.normal,oe=!!q.morphAttributes.color;let xe=Qn;j.toneMapped&&(R===null||R.isXRRenderTarget===!0)&&(xe=x.toneMapping);const fe=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,he=fe!==void 0?fe.length:0,Nt=et.get(j),pe=u.state.lights;if(Dt===!0&&(K===!0||A!==M)){const Fe=A===M&&j.id===_;st.setState(j,A,Fe)}let ne=!1;j.version===Nt.__version?(Nt.needsLights&&Nt.lightsStateVersion!==pe.state.version||Nt.outputColorSpace!==wt||H.isBatchedMesh&&Nt.batching===!1||!H.isBatchedMesh&&Nt.batching===!0||H.isBatchedMesh&&Nt.batchingColor===!0&&H.colorTexture===null||H.isBatchedMesh&&Nt.batchingColor===!1&&H.colorTexture!==null||H.isInstancedMesh&&Nt.instancing===!1||!H.isInstancedMesh&&Nt.instancing===!0||H.isSkinnedMesh&&Nt.skinning===!1||!H.isSkinnedMesh&&Nt.skinning===!0||H.isInstancedMesh&&Nt.instancingColor===!0&&H.instanceColor===null||H.isInstancedMesh&&Nt.instancingColor===!1&&H.instanceColor!==null||H.isInstancedMesh&&Nt.instancingMorph===!0&&H.morphTexture===null||H.isInstancedMesh&&Nt.instancingMorph===!1&&H.morphTexture!==null||Nt.envMap!==bt||j.fog===!0&&Nt.fog!==ct||Nt.numClippingPlanes!==void 0&&(Nt.numClippingPlanes!==st.numPlanes||Nt.numIntersection!==st.numIntersection)||Nt.vertexAlphas!==zt||Nt.vertexTangents!==Vt||Nt.morphTargets!==It||Nt.morphNormals!==Jt||Nt.morphColors!==oe||Nt.toneMapping!==xe||Nt.morphTargetsCount!==he)&&(ne=!0):(ne=!0,Nt.__version=j.version);let Xe=Nt.currentProgram;ne===!0&&(Xe=Gr(j,z,H));let wi=!1,Ye=!1,lr=!1;const me=Xe.getUniforms(),Ze=Nt.uniforms;if(rt.useProgram(Xe.program)&&(wi=!0,Ye=!0,lr=!0),j.id!==_&&(_=j.id,Ye=!0),wi||M!==A){rt.buffers.depth.getReversed()&&A.reversedDepth!==!0&&(A._reversedDepth=!0,A.updateProjectionMatrix()),me.setValue(L,"projectionMatrix",A.projectionMatrix),me.setValue(L,"viewMatrix",A.matrixWorldInverse);const He=me.map.cameraPosition;He!==void 0&&He.setValue(L,dt.setFromMatrixPosition(A.matrixWorld)),at.logarithmicDepthBuffer&&me.setValue(L,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(j.isMeshPhongMaterial||j.isMeshToonMaterial||j.isMeshLambertMaterial||j.isMeshBasicMaterial||j.isMeshStandardMaterial||j.isShaderMaterial)&&me.setValue(L,"isOrthographic",A.isOrthographicCamera===!0),M!==A&&(M=A,Ye=!0,lr=!0)}if(H.isSkinnedMesh){me.setOptional(L,H,"bindMatrix"),me.setOptional(L,H,"bindMatrixInverse");const Fe=H.skeleton;Fe&&(Fe.boneTexture===null&&Fe.computeBoneTexture(),me.setValue(L,"boneTexture",Fe.boneTexture,ht))}H.isBatchedMesh&&(me.setOptional(L,H,"batchingTexture"),me.setValue(L,"batchingTexture",H._matricesTexture,ht),me.setOptional(L,H,"batchingIdTexture"),me.setValue(L,"batchingIdTexture",H._indirectTexture,ht),me.setOptional(L,H,"batchingColorTexture"),H._colorsTexture!==null&&me.setValue(L,"batchingColorTexture",H._colorsTexture,ht));const Je=q.morphAttributes;if((Je.position!==void 0||Je.normal!==void 0||Je.color!==void 0)&&it.update(H,q,Xe),(Ye||Nt.receiveShadow!==H.receiveShadow)&&(Nt.receiveShadow=H.receiveShadow,me.setValue(L,"receiveShadow",H.receiveShadow)),j.isMeshGouraudMaterial&&j.envMap!==null&&(Ze.envMap.value=bt,Ze.flipEnvMap.value=bt.isCubeTexture&&bt.isRenderTargetTexture===!1?-1:1),j.isMeshStandardMaterial&&j.envMap===null&&z.environment!==null&&(Ze.envMapIntensity.value=z.environmentIntensity),Ye&&(me.setValue(L,"toneMappingExposure",x.toneMappingExposure),Nt.needsLights&&Sh(Ze,lr),ct&&j.fog===!0&&J.refreshFogUniforms(Ze,ct),J.refreshMaterialUniforms(Ze,j,k,$,u.state.transmissionRenderTarget[A.id]),As.upload(L,Qo(Nt),Ze,ht)),j.isShaderMaterial&&j.uniformsNeedUpdate===!0&&(As.upload(L,Qo(Nt),Ze,ht),j.uniformsNeedUpdate=!1),j.isSpriteMaterial&&me.setValue(L,"center",H.center),me.setValue(L,"modelViewMatrix",H.modelViewMatrix),me.setValue(L,"normalMatrix",H.normalMatrix),me.setValue(L,"modelMatrix",H.matrixWorld),j.isShaderMaterial||j.isRawShaderMaterial){const Fe=j.uniformsGroups;for(let He=0,Ys=Fe.length;He<Ys;He++){const si=Fe[He];Xt.update(si,Xe),Xt.bind(si,Xe)}}return Xe}function Sh(A,z){A.ambientLightColor.needsUpdate=z,A.lightProbe.needsUpdate=z,A.directionalLights.needsUpdate=z,A.directionalLightShadows.needsUpdate=z,A.pointLights.needsUpdate=z,A.pointLightShadows.needsUpdate=z,A.spotLights.needsUpdate=z,A.spotLightShadows.needsUpdate=z,A.rectAreaLights.needsUpdate=z,A.hemisphereLights.needsUpdate=z}function Eh(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return E},this.getActiveMipmapLevel=function(){return w},this.getRenderTarget=function(){return R},this.setRenderTargetTextures=function(A,z,q){const j=et.get(A);j.__autoAllocateDepthBuffer=A.resolveDepthBuffer===!1,j.__autoAllocateDepthBuffer===!1&&(j.__useRenderToTexture=!1),et.get(A.texture).__webglTexture=z,et.get(A.depthTexture).__webglTexture=j.__autoAllocateDepthBuffer?void 0:q,j.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(A,z){const q=et.get(A);q.__webglFramebuffer=z,q.__useDefaultFramebuffer=z===void 0};const bh=L.createFramebuffer();this.setRenderTarget=function(A,z=0,q=0){R=A,E=z,w=q;let j=!0,H=null,ct=!1,vt=!1;if(A){const bt=et.get(A);if(bt.__useDefaultFramebuffer!==void 0)rt.bindFramebuffer(L.FRAMEBUFFER,null),j=!1;else if(bt.__webglFramebuffer===void 0)ht.setupRenderTarget(A);else if(bt.__hasExternalTextures)ht.rebindTextures(A,et.get(A.texture).__webglTexture,et.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){const It=A.depthTexture;if(bt.__boundDepthTexture!==It){if(It!==null&&et.has(It)&&(A.width!==It.image.width||A.height!==It.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");ht.setupDepthRenderbuffer(A)}}const zt=A.texture;(zt.isData3DTexture||zt.isDataArrayTexture||zt.isCompressedArrayTexture)&&(vt=!0);const Vt=et.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(Vt[z])?H=Vt[z][q]:H=Vt[z],ct=!0):A.samples>0&&ht.useMultisampledRTT(A)===!1?H=et.get(A).__webglMultisampledFramebuffer:Array.isArray(Vt)?H=Vt[q]:H=Vt,P.copy(A.viewport),D.copy(A.scissor),I=A.scissorTest}else P.copy(Q).multiplyScalar(k).floor(),D.copy(ut).multiplyScalar(k).floor(),I=mt;if(q!==0&&(H=bh),rt.bindFramebuffer(L.FRAMEBUFFER,H)&&j&&rt.drawBuffers(A,H),rt.viewport(P),rt.scissor(D),rt.setScissorTest(I),ct){const bt=et.get(A.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_CUBE_MAP_POSITIVE_X+z,bt.__webglTexture,q)}else if(vt){const bt=z;for(let zt=0;zt<A.textures.length;zt++){const Vt=et.get(A.textures[zt]);L.framebufferTextureLayer(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0+zt,Vt.__webglTexture,q,bt)}}else if(A!==null&&q!==0){const bt=et.get(A.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,bt.__webglTexture,q)}_=-1},this.readRenderTargetPixels=function(A,z,q,j,H,ct,vt,wt=0){if(!(A&&A.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let bt=et.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&vt!==void 0&&(bt=bt[vt]),bt){rt.bindFramebuffer(L.FRAMEBUFFER,bt);try{const zt=A.textures[wt],Vt=zt.format,It=zt.type;if(!at.textureFormatReadable(Vt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!at.textureTypeReadable(It)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}z>=0&&z<=A.width-j&&q>=0&&q<=A.height-H&&(A.textures.length>1&&L.readBuffer(L.COLOR_ATTACHMENT0+wt),L.readPixels(z,q,j,H,At.convert(Vt),At.convert(It),ct))}finally{const zt=R!==null?et.get(R).__webglFramebuffer:null;rt.bindFramebuffer(L.FRAMEBUFFER,zt)}}},this.readRenderTargetPixelsAsync=async function(A,z,q,j,H,ct,vt,wt=0){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let bt=et.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&vt!==void 0&&(bt=bt[vt]),bt)if(z>=0&&z<=A.width-j&&q>=0&&q<=A.height-H){rt.bindFramebuffer(L.FRAMEBUFFER,bt);const zt=A.textures[wt],Vt=zt.format,It=zt.type;if(!at.textureFormatReadable(Vt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!at.textureTypeReadable(It))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Jt=L.createBuffer();L.bindBuffer(L.PIXEL_PACK_BUFFER,Jt),L.bufferData(L.PIXEL_PACK_BUFFER,ct.byteLength,L.STREAM_READ),A.textures.length>1&&L.readBuffer(L.COLOR_ATTACHMENT0+wt),L.readPixels(z,q,j,H,At.convert(Vt),At.convert(It),0);const oe=R!==null?et.get(R).__webglFramebuffer:null;rt.bindFramebuffer(L.FRAMEBUFFER,oe);const xe=L.fenceSync(L.SYNC_GPU_COMMANDS_COMPLETE,0);return L.flush(),await Du(L,xe,4),L.bindBuffer(L.PIXEL_PACK_BUFFER,Jt),L.getBufferSubData(L.PIXEL_PACK_BUFFER,0,ct),L.deleteBuffer(Jt),L.deleteSync(xe),ct}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(A,z=null,q=0){const j=Math.pow(2,-q),H=Math.floor(A.image.width*j),ct=Math.floor(A.image.height*j),vt=z!==null?z.x:0,wt=z!==null?z.y:0;ht.setTexture2D(A,0),L.copyTexSubImage2D(L.TEXTURE_2D,q,0,0,vt,wt,H,ct),rt.unbindTexture()};const Th=L.createFramebuffer(),Ah=L.createFramebuffer();this.copyTextureToTexture=function(A,z,q=null,j=null,H=0,ct=null){ct===null&&(H!==0?(Pr("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),ct=H,H=0):ct=0);let vt,wt,bt,zt,Vt,It,Jt,oe,xe;const fe=A.isCompressedTexture?A.mipmaps[ct]:A.image;if(q!==null)vt=q.max.x-q.min.x,wt=q.max.y-q.min.y,bt=q.isBox3?q.max.z-q.min.z:1,zt=q.min.x,Vt=q.min.y,It=q.isBox3?q.min.z:0;else{const Je=Math.pow(2,-H);vt=Math.floor(fe.width*Je),wt=Math.floor(fe.height*Je),A.isDataArrayTexture?bt=fe.depth:A.isData3DTexture?bt=Math.floor(fe.depth*Je):bt=1,zt=0,Vt=0,It=0}j!==null?(Jt=j.x,oe=j.y,xe=j.z):(Jt=0,oe=0,xe=0);const he=At.convert(z.format),Nt=At.convert(z.type);let pe;z.isData3DTexture?(ht.setTexture3D(z,0),pe=L.TEXTURE_3D):z.isDataArrayTexture||z.isCompressedArrayTexture?(ht.setTexture2DArray(z,0),pe=L.TEXTURE_2D_ARRAY):(ht.setTexture2D(z,0),pe=L.TEXTURE_2D),L.pixelStorei(L.UNPACK_FLIP_Y_WEBGL,z.flipY),L.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL,z.premultiplyAlpha),L.pixelStorei(L.UNPACK_ALIGNMENT,z.unpackAlignment);const ne=L.getParameter(L.UNPACK_ROW_LENGTH),Xe=L.getParameter(L.UNPACK_IMAGE_HEIGHT),wi=L.getParameter(L.UNPACK_SKIP_PIXELS),Ye=L.getParameter(L.UNPACK_SKIP_ROWS),lr=L.getParameter(L.UNPACK_SKIP_IMAGES);L.pixelStorei(L.UNPACK_ROW_LENGTH,fe.width),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,fe.height),L.pixelStorei(L.UNPACK_SKIP_PIXELS,zt),L.pixelStorei(L.UNPACK_SKIP_ROWS,Vt),L.pixelStorei(L.UNPACK_SKIP_IMAGES,It);const me=A.isDataArrayTexture||A.isData3DTexture,Ze=z.isDataArrayTexture||z.isData3DTexture;if(A.isDepthTexture){const Je=et.get(A),Fe=et.get(z),He=et.get(Je.__renderTarget),Ys=et.get(Fe.__renderTarget);rt.bindFramebuffer(L.READ_FRAMEBUFFER,He.__webglFramebuffer),rt.bindFramebuffer(L.DRAW_FRAMEBUFFER,Ys.__webglFramebuffer);for(let si=0;si<bt;si++)me&&(L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,et.get(A).__webglTexture,H,It+si),L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,et.get(z).__webglTexture,ct,xe+si)),L.blitFramebuffer(zt,Vt,vt,wt,Jt,oe,vt,wt,L.DEPTH_BUFFER_BIT,L.NEAREST);rt.bindFramebuffer(L.READ_FRAMEBUFFER,null),rt.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else if(H!==0||A.isRenderTargetTexture||et.has(A)){const Je=et.get(A),Fe=et.get(z);rt.bindFramebuffer(L.READ_FRAMEBUFFER,Th),rt.bindFramebuffer(L.DRAW_FRAMEBUFFER,Ah);for(let He=0;He<bt;He++)me?L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,Je.__webglTexture,H,It+He):L.framebufferTexture2D(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,Je.__webglTexture,H),Ze?L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,Fe.__webglTexture,ct,xe+He):L.framebufferTexture2D(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,Fe.__webglTexture,ct),H!==0?L.blitFramebuffer(zt,Vt,vt,wt,Jt,oe,vt,wt,L.COLOR_BUFFER_BIT,L.NEAREST):Ze?L.copyTexSubImage3D(pe,ct,Jt,oe,xe+He,zt,Vt,vt,wt):L.copyTexSubImage2D(pe,ct,Jt,oe,zt,Vt,vt,wt);rt.bindFramebuffer(L.READ_FRAMEBUFFER,null),rt.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else Ze?A.isDataTexture||A.isData3DTexture?L.texSubImage3D(pe,ct,Jt,oe,xe,vt,wt,bt,he,Nt,fe.data):z.isCompressedArrayTexture?L.compressedTexSubImage3D(pe,ct,Jt,oe,xe,vt,wt,bt,he,fe.data):L.texSubImage3D(pe,ct,Jt,oe,xe,vt,wt,bt,he,Nt,fe):A.isDataTexture?L.texSubImage2D(L.TEXTURE_2D,ct,Jt,oe,vt,wt,he,Nt,fe.data):A.isCompressedTexture?L.compressedTexSubImage2D(L.TEXTURE_2D,ct,Jt,oe,fe.width,fe.height,he,fe.data):L.texSubImage2D(L.TEXTURE_2D,ct,Jt,oe,vt,wt,he,Nt,fe);L.pixelStorei(L.UNPACK_ROW_LENGTH,ne),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,Xe),L.pixelStorei(L.UNPACK_SKIP_PIXELS,wi),L.pixelStorei(L.UNPACK_SKIP_ROWS,Ye),L.pixelStorei(L.UNPACK_SKIP_IMAGES,lr),ct===0&&z.generateMipmaps&&L.generateMipmap(pe),rt.unbindTexture()},this.initRenderTarget=function(A){et.get(A).__webglFramebuffer===void 0&&ht.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?ht.setTextureCube(A,0):A.isData3DTexture?ht.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?ht.setTexture2DArray(A,0):ht.setTexture2D(A,0),rt.unbindTexture()},this.resetState=function(){E=0,w=0,R=null,rt.reset(),pt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return yn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=ie._getDrawingBufferColorSpace(t),e.unpackColorSpace=ie._getUnpackColorSpace()}}const oc={type:"change"},Yo={type:"start"},th={type:"end"},_s=new Or,lc=new Yn,Qg=Math.cos(70*Tt.DEG2RAD),Te=new U,Ge=2*Math.PI,ce={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},ba=1e-6;class t_ extends pd{constructor(t,e=null){super(t,e),this.state=ce.NONE,this.target=new U,this.cursor=new U,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Ki.ROTATE,MIDDLE:Ki.DOLLY,RIGHT:Ki.PAN},this.touches={ONE:qi.ROTATE,TWO:qi.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new U,this._lastQuaternion=new ni,this._lastTargetPosition=new U,this._quat=new ni().setFromUnitVectors(t.up,new U(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new Fl,this._sphericalDelta=new Fl,this._scale=1,this._panOffset=new U,this._rotateStart=new Ot,this._rotateEnd=new Ot,this._rotateDelta=new Ot,this._panStart=new Ot,this._panEnd=new Ot,this._panDelta=new Ot,this._dollyStart=new Ot,this._dollyEnd=new Ot,this._dollyDelta=new Ot,this._dollyDirection=new U,this._mouse=new Ot,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=n_.bind(this),this._onPointerDown=e_.bind(this),this._onPointerUp=i_.bind(this),this._onContextMenu=h_.bind(this),this._onMouseWheel=a_.bind(this),this._onKeyDown=o_.bind(this),this._onTouchStart=l_.bind(this),this._onTouchMove=c_.bind(this),this._onMouseDown=r_.bind(this),this._onMouseMove=s_.bind(this),this._interceptControlDown=u_.bind(this),this._interceptControlUp=d_.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}connect(t){super.connect(t),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(t){t.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=t}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(oc),this.update(),this.state=ce.NONE}update(t=null){const e=this.object.position;Te.copy(e).sub(this.target),Te.applyQuaternion(this._quat),this._spherical.setFromVector3(Te),this.autoRotate&&this.state===ce.NONE&&this._rotateLeft(this._getAutoRotationAngle(t)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let i=this.minAzimuthAngle,r=this.maxAzimuthAngle;isFinite(i)&&isFinite(r)&&(i<-Math.PI?i+=Ge:i>Math.PI&&(i-=Ge),r<-Math.PI?r+=Ge:r>Math.PI&&(r-=Ge),i<=r?this._spherical.theta=Math.max(i,Math.min(r,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(i+r)/2?Math.max(i,this._spherical.theta):Math.min(r,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let s=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const a=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),s=a!=this._spherical.radius}if(Te.setFromSpherical(this._spherical),Te.applyQuaternion(this._quatInverse),e.copy(this.target).add(Te),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let a=null;if(this.object.isPerspectiveCamera){const o=Te.length();a=this._clampDistance(o*this._scale);const c=o-a;this.object.position.addScaledVector(this._dollyDirection,c),this.object.updateMatrixWorld(),s=!!c}else if(this.object.isOrthographicCamera){const o=new U(this._mouse.x,this._mouse.y,0);o.unproject(this.object);const c=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),s=c!==this.object.zoom;const l=new U(this._mouse.x,this._mouse.y,0);l.unproject(this.object),this.object.position.sub(l).add(o),this.object.updateMatrixWorld(),a=Te.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;a!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(a).add(this.object.position):(_s.origin.copy(this.object.position),_s.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(_s.direction))<Qg?this.object.lookAt(this.target):(lc.setFromNormalAndCoplanarPoint(this.object.up,this.target),_s.intersectPlane(lc,this.target))))}else if(this.object.isOrthographicCamera){const a=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),a!==this.object.zoom&&(this.object.updateProjectionMatrix(),s=!0)}return this._scale=1,this._performCursorZoom=!1,s||this._lastPosition.distanceToSquared(this.object.position)>ba||8*(1-this._lastQuaternion.dot(this.object.quaternion))>ba||this._lastTargetPosition.distanceToSquared(this.target)>ba?(this.dispatchEvent(oc),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(t){return t!==null?Ge/60*this.autoRotateSpeed*t:Ge/60/60*this.autoRotateSpeed}_getZoomScale(t){const e=Math.abs(t*.01);return Math.pow(.95,this.zoomSpeed*e)}_rotateLeft(t){this._sphericalDelta.theta-=t}_rotateUp(t){this._sphericalDelta.phi-=t}_panLeft(t,e){Te.setFromMatrixColumn(e,0),Te.multiplyScalar(-t),this._panOffset.add(Te)}_panUp(t,e){this.screenSpacePanning===!0?Te.setFromMatrixColumn(e,1):(Te.setFromMatrixColumn(e,0),Te.crossVectors(this.object.up,Te)),Te.multiplyScalar(t),this._panOffset.add(Te)}_pan(t,e){const i=this.domElement;if(this.object.isPerspectiveCamera){const r=this.object.position;Te.copy(r).sub(this.target);let s=Te.length();s*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*t*s/i.clientHeight,this.object.matrix),this._panUp(2*e*s/i.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(t*(this.object.right-this.object.left)/this.object.zoom/i.clientWidth,this.object.matrix),this._panUp(e*(this.object.top-this.object.bottom)/this.object.zoom/i.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(t,e){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const i=this.domElement.getBoundingClientRect(),r=t-i.left,s=e-i.top,a=i.width,o=i.height;this._mouse.x=r/a*2-1,this._mouse.y=-(s/o)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(t){return Math.max(this.minDistance,Math.min(this.maxDistance,t))}_handleMouseDownRotate(t){this._rotateStart.set(t.clientX,t.clientY)}_handleMouseDownDolly(t){this._updateZoomParameters(t.clientX,t.clientX),this._dollyStart.set(t.clientX,t.clientY)}_handleMouseDownPan(t){this._panStart.set(t.clientX,t.clientY)}_handleMouseMoveRotate(t){this._rotateEnd.set(t.clientX,t.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const e=this.domElement;this._rotateLeft(Ge*this._rotateDelta.x/e.clientHeight),this._rotateUp(Ge*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(t){this._dollyEnd.set(t.clientX,t.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(t){this._panEnd.set(t.clientX,t.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(t){this._updateZoomParameters(t.clientX,t.clientY),t.deltaY<0?this._dollyIn(this._getZoomScale(t.deltaY)):t.deltaY>0&&this._dollyOut(this._getZoomScale(t.deltaY)),this.update()}_handleKeyDown(t){let e=!1;switch(t.code){case this.keys.UP:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(Ge*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),e=!0;break;case this.keys.BOTTOM:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(-Ge*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),e=!0;break;case this.keys.LEFT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(Ge*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),e=!0;break;case this.keys.RIGHT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(-Ge*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),e=!0;break}e&&(t.preventDefault(),this.update())}_handleTouchStartRotate(t){if(this._pointers.length===1)this._rotateStart.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),i=.5*(t.pageX+e.x),r=.5*(t.pageY+e.y);this._rotateStart.set(i,r)}}_handleTouchStartPan(t){if(this._pointers.length===1)this._panStart.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),i=.5*(t.pageX+e.x),r=.5*(t.pageY+e.y);this._panStart.set(i,r)}}_handleTouchStartDolly(t){const e=this._getSecondPointerPosition(t),i=t.pageX-e.x,r=t.pageY-e.y,s=Math.sqrt(i*i+r*r);this._dollyStart.set(0,s)}_handleTouchStartDollyPan(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enablePan&&this._handleTouchStartPan(t)}_handleTouchStartDollyRotate(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enableRotate&&this._handleTouchStartRotate(t)}_handleTouchMoveRotate(t){if(this._pointers.length==1)this._rotateEnd.set(t.pageX,t.pageY);else{const i=this._getSecondPointerPosition(t),r=.5*(t.pageX+i.x),s=.5*(t.pageY+i.y);this._rotateEnd.set(r,s)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const e=this.domElement;this._rotateLeft(Ge*this._rotateDelta.x/e.clientHeight),this._rotateUp(Ge*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(t){if(this._pointers.length===1)this._panEnd.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),i=.5*(t.pageX+e.x),r=.5*(t.pageY+e.y);this._panEnd.set(i,r)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(t){const e=this._getSecondPointerPosition(t),i=t.pageX-e.x,r=t.pageY-e.y,s=Math.sqrt(i*i+r*r);this._dollyEnd.set(0,s),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const a=(t.pageX+e.x)*.5,o=(t.pageY+e.y)*.5;this._updateZoomParameters(a,o)}_handleTouchMoveDollyPan(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enablePan&&this._handleTouchMovePan(t)}_handleTouchMoveDollyRotate(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enableRotate&&this._handleTouchMoveRotate(t)}_addPointer(t){this._pointers.push(t.pointerId)}_removePointer(t){delete this._pointerPositions[t.pointerId];for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId){this._pointers.splice(e,1);return}}_isTrackingPointer(t){for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId)return!0;return!1}_trackPointer(t){let e=this._pointerPositions[t.pointerId];e===void 0&&(e=new Ot,this._pointerPositions[t.pointerId]=e),e.set(t.pageX,t.pageY)}_getSecondPointerPosition(t){const e=t.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[e]}_customWheelEvent(t){const e=t.deltaMode,i={clientX:t.clientX,clientY:t.clientY,deltaY:t.deltaY};switch(e){case 1:i.deltaY*=16;break;case 2:i.deltaY*=100;break}return t.ctrlKey&&!this._controlActive&&(i.deltaY*=10),i}}function e_(n){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(n.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(n)&&(this._addPointer(n),n.pointerType==="touch"?this._onTouchStart(n):this._onMouseDown(n)))}function n_(n){this.enabled!==!1&&(n.pointerType==="touch"?this._onTouchMove(n):this._onMouseMove(n))}function i_(n){switch(this._removePointer(n),this._pointers.length){case 0:this.domElement.releasePointerCapture(n.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(th),this.state=ce.NONE;break;case 1:const t=this._pointers[0],e=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:e.x,pageY:e.y});break}}function r_(n){let t;switch(n.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case Ki.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(n),this.state=ce.DOLLY;break;case Ki.ROTATE:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=ce.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=ce.ROTATE}break;case Ki.PAN:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=ce.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=ce.PAN}break;default:this.state=ce.NONE}this.state!==ce.NONE&&this.dispatchEvent(Yo)}function s_(n){switch(this.state){case ce.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(n);break;case ce.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(n);break;case ce.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(n);break}}function a_(n){this.enabled===!1||this.enableZoom===!1||this.state!==ce.NONE||(n.preventDefault(),this.dispatchEvent(Yo),this._handleMouseWheel(this._customWheelEvent(n)),this.dispatchEvent(th))}function o_(n){this.enabled!==!1&&this._handleKeyDown(n)}function l_(n){switch(this._trackPointer(n),this._pointers.length){case 1:switch(this.touches.ONE){case qi.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(n),this.state=ce.TOUCH_ROTATE;break;case qi.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(n),this.state=ce.TOUCH_PAN;break;default:this.state=ce.NONE}break;case 2:switch(this.touches.TWO){case qi.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(n),this.state=ce.TOUCH_DOLLY_PAN;break;case qi.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(n),this.state=ce.TOUCH_DOLLY_ROTATE;break;default:this.state=ce.NONE}break;default:this.state=ce.NONE}this.state!==ce.NONE&&this.dispatchEvent(Yo)}function c_(n){switch(this._trackPointer(n),this.state){case ce.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(n),this.update();break;case ce.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(n),this.update();break;case ce.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(n),this.update();break;case ce.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(n),this.update();break;default:this.state=ce.NONE}}function h_(n){this.enabled!==!1&&n.preventDefault()}function u_(n){n.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function d_(n){n.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}const cc=["一次偶然涨落，一组全新的自然法则。","这里的星光，以陌生的速度穿过真空。","引力写下结构，时间负责把它读完。","一个从未存在过，也不会再次出现的宇宙。","尘埃正在聚集，第一颗恒星即将点亮。"],hc=["赫利俄斯","弥涅耳瓦","伊奥","俄耳甫斯","忒弥斯","厄里倪厄斯","欧律狄刻","阿斯忒里亚"],yo=["棒旋星系","絮状螺旋星系","环状星系","椭圆星系","不规则星系"],uc=["赛里安共同体","洛珂蜂群","弧光联盟","静默者","澄海文明","铸星者","织光议会","塔乌林协约","奈落合众体","远潮群落","镜海联邦","巡星庭","赤纬公社","无昼同盟","尘环智群"],dc=[14221151,16743275,6928639,15174911,16762460,6481615,16747975,10920191,15899989,7595116,6215935,16770683,12815615,16737894,9484543],fc=[{until:55,name:"炽热大爆炸",description:"整个可观测区域同时处于高温、高密度状态；这不是物质从某个中心炸开。"},{until:145,name:"等离子体时代",description:"宇宙膨胀并冷却，原初核合成后，光子仍被自由电子频繁散射。"},{until:245,name:"宇宙黑暗时代",description:"38 万年后宇宙变得透明，但第一代恒星尚未点亮。"},{until:340,name:"宇宙黎明",description:"约 1～2 亿年后，第一代恒星与星系开始形成并推动再电离。"},{until:650,name:"恒星时代",description:"恒星、星系与重元素持续演化；生命与文明属于未证实的模型层。"},{until:845,name:"简并时代 · 假说",description:"若质子衰变等标准长期假说成立，恒星残骸绕核运行，并在近遇中逐个逃离或落入黑洞。"},{until:950,name:"黑洞时代 · 假说",description:"若霍金辐射的标准推断适用，孤立黑洞在极漫长时间中逐个蒸发。"},{until:1001,name:"暗时代 · 渐近",description:"宇宙继续膨胀，辐射红移与稀释，可用能量梯度趋近于零，而非发生一次全局终结。"}];function f_(n){const t=n?.cosmicFate;if(!t||t.type==="heat-death")return fc;const e=fc.slice(0,5);return t.type==="big-rip"?[...e,{until:850,name:"幽灵能量时代 · 假说",description:"暗能量密度随膨胀增长，宇宙在有限时间内加速趋向失稳。"},{until:1001,name:"大撕裂 · 条件结局",description:"在 w < -1 持续成立的假设下，局部引力与微观束缚将被逐层克服。"}]:t.type==="big-crunch"?[...e,{until:850,name:"膨胀反转 · 假说",description:"动态暗能量的有效势能跨过零点，哈勃参数逐步降低至零。"},{until:1001,name:"大坍缩 · 条件结局",description:"尺度因子反向演化，物质与辐射密度在有限时间内快速上升。"}]:[...e,{until:875,name:"亚稳真空 · 假说",description:"真空仍位于寿命未知的局部能量最低点，未发生可见跃迁。"},{until:1001,name:"真空衰变 · 条件结局",description:"随机量子隧穿产生低能真空泡，泡壁以近光速改写局部基态。"}]}function te(n){const t=Math.max(n(),1e-7),e=n();return Math.sqrt(-2*Math.log(t))*Math.cos(2*Math.PI*e)}function Wt(n,t,e){return t+n()*(e-t)}const pc="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ",p_=4,Ta=16;function eh(n){let t=1779033703,e=3144134277,i=1013904242,r=2773480762;for(let s=0;s<n.length;s++){const a=n.charCodeAt(s);t=e^Math.imul(t^a,597399067),e=i^Math.imul(e^a,2869860233),i=r^Math.imul(i^a,951274213),r=t^Math.imul(r^a,2716044179)}return t=Math.imul(i^t>>>18,597399067),e=Math.imul(r^e>>>22,2869860233),i=Math.imul(t^i>>>17,951274213),r=Math.imul(e^r>>>19,2716044179),t^=e^i^r,e^=t,i^=t,r^=t,[t>>>0,e>>>0,i>>>0,r>>>0]}function Gs(n){const t=String(n).trim().toUpperCase();if(!/^(?:[A-Z0-9]{16}|[A-Z0-9]{4}(?:-[A-Z0-9]{4}){3})$/.test(t))throw new TypeError("Universe seed must contain exactly 16 letters or digits.");return t.replaceAll("-","").match(new RegExp(`.{${p_}}`,"g")).join("-")}function m_(){const n=globalThis.crypto;if(!n?.getRandomValues)throw new Error("Secure random number generation is unavailable.");let t="";do for(t="";t.length<Ta;){const e=n.getRandomValues(new Uint8Array(Ta));for(const i of e)if(!(i>=252)&&(t+=pc[i%pc.length],t.length===Ta))break}while(!/[A-Z]/.test(t)||!/[0-9]/.test(t));return Gs(t)}function g_(n){return eh(Gs(n))[0]}function bn(n,t=0){let[e,i,r,s]=eh(`${Gs(n)}:${t}`);return function(){const o=((e+i|0)+s|0)>>>0;return s=s+1|0,e=i^i>>>9,i=r+(r<<3)|0,r=r<<21|r>>>11,r=r+o|0,o/4294967296}}const So=138e8,__=145e8,Aa=.012,x_={lambda:{label:"宇宙学常数",description:"暗能量密度保持不变，加速膨胀持续"},quintessence:{label:"演化标量场",description:"暗能量状态方程随尺度因子缓慢演化"},phantom:{label:"幽灵暗能量",description:"有效状态方程低于 -1，暗能量密度随膨胀增长"},recollapsing:{label:"反转势能",description:"标量场势能在远未来跨过零点，膨胀最终停止"}},v_={"heat-death":{label:"渐近热寂",shortLabel:"热寂",description:"膨胀持续，可用能量梯度逐渐消失"},"big-rip":{label:"大撕裂",shortLabel:"大撕裂",description:"加速膨胀最终克服星系、恒星系与局部束缚"},"big-crunch":{label:"大坍缩",shortLabel:"大坍缩",description:"膨胀反转后，尺度因子在有限时间内回落"},"vacuum-decay":{label:"真空衰变",shortLabel:"真空衰变",description:"低能真空泡成核，泡壁以近光速扩张"}};function M_(n,t,e){return t+e*(1-n)/(1+n)}function y_({model:n,w0:t,wa:e,expansionRate:i,darkEnergyDensity:r,turnScale:s}){const a=Math.max(.06,1-r);let o=1,c=1,l=So,h=1;const f=[{ageYears:l,scaleFactor:o,expansionRatio:1,w:t}];for(let d=1;d<=2400;d++){const m=M_(o,t,e);c*=Math.exp(-3*(1+m)*Aa),o*=Math.exp(Aa);const g=n==="recollapsing"?.22*r*Math.pow(o/s,2.35):0,v=a/Math.pow(o,3)+r*c-g;if(v<=0)return{history:f,turnaroundYears:l,finalRateSquared:v};const p=Math.sqrt((h+v)*.5);l+=__/i*Aa/Math.max(p,1e-12),h=v,d%80===0&&f.push({ageYears:l,scaleFactor:o,expansionRatio:Math.sqrt(v),w:m})}return{history:f,asymptoticYears:l,finalRateSquared:h}}function S_(n){const t=n();return t<.34?{model:"lambda",w0:-1,wa:0,turnScale:1/0}:t<.62?{model:"quintessence",w0:Wt(n,-.96,-.76),wa:Wt(n,-.1,.1),turnScale:1/0}:t<.82?{model:"phantom",w0:Wt(n,-1.22,-1.035),wa:Wt(n,.015,.14),turnScale:1/0}:{model:"recollapsing",w0:Wt(n,-.98,-.78),wa:Wt(n,-.08,.08),turnScale:Wt(n,3.2,11)}}function E_(n,t){const e=bn(n,6029),i=S_(e),r=y_({...i,expansionRate:t.expansionRate,darkEnergyDensity:t.darkEnergyDensity});let s="heat-death",a=1/0;if(i.model==="phantom")s="big-rip",a=Math.max(So*1.05,r.asymptoticYears);else if(i.model==="recollapsing"){s="big-crunch";const v=Math.max(1e9,r.turnaroundYears-So);a=r.turnaroundYears+v*Wt(e,.78,1.08)}const o=e()<.16,c=o?Wt(e,10.55,92):1/0,l=10**Math.min(c,300),h=o&&l<a,f=h?"vacuum-decay":s,d=h?l:a,m=x_[i.model],g=v_[f];return{...i,modelLabel:m.label,modelDescription:m.description,expansionHistory:r.history,turnaroundYears:r.turnaroundYears||null,metastableVacuum:o,vacuumDecayExponent:c,type:f,label:g.label,shortLabel:g.shortLabel,description:g.description,outcomeYears:d,outcomeExponent:Number.isFinite(d)?Math.log10(d):1/0,onsetAt:f==="big-crunch"?790:f==="big-rip"?820:f==="vacuum-decay"?875:930}}function b_(n){return Number.isFinite(n.outcomeYears)?n.outcomeYears<1e12?`T+${(n.outcomeYears/1e8).toFixed(0)} 亿年`:`T+10^${n.outcomeExponent.toFixed(1)} 年`:"渐近 · 无有限终点"}function T_(n){return n.metastableVacuum?`亚稳态 · 假设寿命 10^${n.vacuumDecayExponent.toFixed(1)} 年`:"未设定可见衰变"}const A_=2100,Vs=(n,t,e)=>Math.max(t,Math.min(e,n)),mc=(n,t,e)=>{const i=Vs((n-t)/(e-t),0,1);return i*i*(3-2*i)};function nh(n,t){const e=Math.log10(Math.max(138e8,n)),i=Math.log10(138e8),r=t?.cosmicFate;if(r&&Number.isFinite(r.outcomeYears)){if(n>=r.outcomeYears)return 1e3;const a=(e-i)/(r.outcomeExponent-i);return Vs(470+a*(r.onsetAt-470),470,r.onsetAt)}if(e<12)return 470+(e-i)/(12-i)*100;if(e<14)return 570+(e-12)/2*80;if(e<15)return 650+(e-14)*30;if(e<38)return 680+(e-15)/23*165;const s=t?.blackHoleEvaporationExponent||100;return e<s?845+(e-38)/(s-38)*105:950}function w_(n,t,e){const i=Vs(Number(n),0,1e3),r=ih(i,t),s=e.findIndex(o=>i<o.until),a=s<0?e.length-1:s;return{position:i,label:r,eraIndex:a,era:e[a],galaxyIdentityOpacity:mc(i,245,325)*(1-mc(i,820,900))}}function R_(n){const e=1139.904761904762/A_;return n<145||n>=930?e*.42:e*1.25}function C_({position:n,label:t,universe:e,activeEvent:i,activeRelationship:r,ascendedSpecies:s,activeSpecies:a,civilizationData:o}){if(i){const l=n>=i.impactAt,h=l?`；${i.outcome}`:"";return{key:`${i.id}-${l?"aftermath":"forming"}`,time:t,text:`${i.label}：${i.message}${h}`}}const c=e?.cosmicFate;if(c&&c.type!=="heat-death"&&n>=c.onsetAt){if(c.type==="vacuum-decay"){const h=n>=985;return{key:`fate-vacuum-${h?"terminal":"bubble"}`,time:t,text:h?"低能真空泡已经穿过可观测区域，原有粒子与相互作用不再适用":"量子隧穿产生了低能真空泡，泡壁以接近光速向外扩张"}}if(c.type==="big-rip"){const h=n>=985;return{key:`fate-rip-${h?"terminal":"unbinding"}`,time:t,text:h?"膨胀率在有限时间内发散，局部束缚结构相继失效":"幽灵暗能量密度持续上升，星系团与星系开始逐层解束缚"}}const l=n>=985;return{key:`fate-crunch-${l?"terminal":"turnaround"}`,time:t,text:l?"坍缩使物质与辐射密度急剧升高，经典演化在高曲率阶段失效":"宇宙膨胀已经停止，大尺度距离开始反向缩小"}}if(r){const l=o[r.speciesA],h=o[r.speciesB],f=r.relationship==="conflict"?`${l.name} 与 ${h.name} 的边界冲突正在削减双方疆域`:`${l.name} 与 ${h.name} 建立友好共存区，共享资源与航路`;return{key:`relation-${r.relationship}-${r.speciesA}-${r.speciesB}`,time:t,text:f}}return s>0?{key:`ascended-${s}`,time:t,text:`${s} 个种群已转化为高维生命，脱离恒星与黑洞的普通物质演化`}:n<55?{key:"bang",time:"T+0",text:"整个可观测区域处于超高温、高密度状态，空间本身在膨胀"}:n<145?{key:"plasma",time:t,text:"光子在等离子体中不断散射，宇宙随膨胀持续冷却"}:n<245?{key:"dark",time:t,text:"复合后宇宙变得透明，但尚没有恒星光"}:n<340?{key:"stars",time:t,text:"第一代恒星与星系点亮，再电离逐渐开始"}:a>0?{key:`life-${a}`,time:t,text:`${a} 个主要文明种群正在跨越恒星系扩张`}:n<430?{key:"chemistry",time:t,text:"重元素丰度上升，宜居行星开始形成"}:n<Math.min(...o.map(l=>l.birth),620)?{key:"waiting-life",time:t,text:"宜居世界正在积累复杂化学反应，智慧生命尚未出现"}:n<620?{key:"silence",time:t,text:"文明信号已经沉寂，只剩无人维护的轨道遗迹"}:n<650?{key:"last-stars",time:t,text:"恒星形成早已停止，最后的低质量红矮星仍在极缓慢地消耗燃料"}:n<710?{key:"degenerate",time:t,text:"最后一批红矮星熄灭，恒星残骸仍被星系引力束缚并长期绕核运行"}:n<845?{key:"evaporation",time:t,text:"长期引力近遇持续重分配能量，少数残骸逐个逃离，极少数落向星系中心"}:n<950?{key:"holes",time:t,text:"黑洞通过霍金辐射缓慢蒸发"}:{key:"heatdeath",time:t,text:"最后的黑洞已经蒸发，残余光子持续红移并稀释，可用能量梯度趋近于零"}}function ih(n,t){const e=(s,a,o)=>10**(Math.log10(s)+(Math.log10(a)-Math.log10(s))*o),i=s=>{if(s<1){const a=s*31557600;return a<3600?`${Math.round(a/60)} 分钟`:a<86400?`${(a/3600).toFixed(1)} 小时`:`${(a/86400).toFixed(1)} 天`}return s<1e4?`${Math.max(1,Math.round(s))} 年`:s<1e8?`${(s/1e4).toFixed(s<1e6?1:0)} 万年`:s<1e12?`${(s/1e8).toFixed(s<1e9?2:1)} 亿年`:`10^${Math.log10(s).toFixed(1)} 年`};if(n<18)return`T+${Math.max(.001,e(.001,1,n/18)).toFixed(3)} 秒`;if(n<55)return`T+${Math.max(1,Math.round(e(1,180,(n-18)/37)))} 秒`;if(n<145)return`T+${i(e(180/31557600,38e4,(n-55)/90))}`;if(n<245)return`T+${i(e(38e4,18e7,(n-145)/100))}`;if(n<340)return`T+${i(e(18e7,1e9,(n-245)/95))}`;if(n<470)return`T+${i(e(1e9,138e8,(n-340)/130))}`;const r=t?.cosmicFate;if(r&&Number.isFinite(r.outcomeYears)){if(n>=999)return r.label;const s=Vs((n-470)/(r.onsetAt-470),0,1),a=e(138e8,r.outcomeYears,s);return`T+${i(a)}`}return n<570?`T+${i(e(138e8,1e12,(n-470)/100))}`:n<650?`T+10^${(12+(n-570)/80*2).toFixed(1)} 年`:n<680?`T+10^${(14+(n-650)/30).toFixed(1)} 年`:n<845?`T+10^${Math.round(15+(n-680)/165*23)} 年`:n<950?`T+10^${Math.round(38+(n-845)/105*(t.blackHoleEvaporationExponent-38))} 年`:n<999?`T+10^${t.blackHoleEvaporationExponent} 年以后`:"趋近热寂"}function P_(n){const t=Math.round(n*360);return`${t<190?"青白":t<225?"蓝白":t<250?"靛蓝":"紫白"} · ${t}°`}function D_(n,t){return n===2?"主环 + 碎环":n===3?"无旋臂":n===4?"不规则":`${t} 条`}function L_(n){const t=n*100;return t<1e-4?"< 0.0001%":t<.01?`${t.toFixed(4)}%`:t<1?`${t.toFixed(2)}%`:`${t.toFixed(1)}%`}function I_(n){return n===0?"尚未出现":`${new Intl.NumberFormat("zh-CN").format(n)} 个`}function rh(n){const t=n.lastStarDeathExponent??n.stellarFormationEndExponent;return Tt.clamp(nh(10**t,n),478,1e3)}function U_(n){return n>=1?`${n.toFixed(1)} 万亿颗`:`${Math.round(n*1e4)} 亿颗`}function sh(n=m_()){const t=Gs(n),e=g_(t),i=bn(t),r=Wt(i,.38,1.84),s=Wt(i,.52,1.76),a=Wt(i,.72,1.28),o=Wt(i,.82,1.18),c=Wt(i,.65,1.45),l=Wt(i,.48,.82),h=Wt(i,.55,1.75),f=Wt(i,1.9,4.4),d=Math.exp(-Math.pow((a-1)/.17,2)-Math.pow((o-1)/.14,2)),m=Tt.clamp(s*h/Math.pow(c,.72),.12,2.8),g=Math.max(2,Math.round(118*d*Wt(i,.82,1.08))),v=Tt.clamp(Wt(i,.35,3.2)*m,.08,7.2),p=Tt.clamp(12.5-(l-.68)*1.35-(c-1)*.42,11.8,13.25),u=Tt.clamp(p+Wt(i,.68,1.08),12.8,14.25),b=d*Tt.clamp(1-Math.abs(f-2.725)/3.5,.12,1),y=Math.pow(i(),4)*.08*b,x=Math.floor(Wt(i,5,16)),T=Math.max(x,Math.floor(v*1e5*y*Wt(i,.02,.7))),E=Math.round(Math.pow(10,u-8)/10)*10,w=Math.floor(Wt(i,3,7)),R=e%yo.length,_=[.96,.92,.72,.99,.34][R],M=i()<_,P=M&&i()<[.1,.07,.05,.045,.025][R],D=Math.floor(Wt(i,97,103)),I=Wt(i,.48,.76),V=E_(t,{expansionRate:c,darkEnergyDensity:l});return{seed:t,seedValue:e,speed:r,gravity:s,fineStructure:a,massRatio:o,expansionRate:c,darkEnergyDensity:l,primordialFluctuation:h,cmbTemperature:f,chemistryStability:d,structureEfficiency:m,stellarFormationEndExponent:p,lastStarDeathExponent:u,elements:g,stars:v,lifeProbability:y,civilizations:T,speciesCount:x,lifetime:E,blackHoleEvaporationExponent:D,armCount:w,galaxyType:R,hasCentralBlackHole:M,activeNucleus:P,hue:I,cosmicFate:V}}let _r=null;function Eo(){const n=document.createElement("canvas");n.width=n.height=256;const t=n.getContext("2d"),e=t.createRadialGradient(128,128,82,128,128,128);e.addColorStop(0,"rgba(255,255,255,0)"),e.addColorStop(.72,"rgba(255,255,255,0)"),e.addColorStop(.86,"rgba(255,255,255,.8)"),e.addColorStop(.91,"rgba(255,255,255,.18)"),e.addColorStop(1,"rgba(255,255,255,0)"),t.fillStyle=e,t.fillRect(0,0,256,256);const i=new Bs(n);return i.colorSpace=De,i}function nn(){const n=document.createElement("canvas");n.width=n.height=128;const t=n.getContext("2d"),e=t.createRadialGradient(64,64,0,64,64,64);e.addColorStop(0,"rgba(255,255,255,1)"),e.addColorStop(.08,"rgba(255,230,170,.85)"),e.addColorStop(.35,"rgba(255,190,100,.22)"),e.addColorStop(1,"rgba(0,0,0,0)"),t.fillStyle=e,t.fillRect(0,0,128,128);const i=new Bs(n);return i.colorSpace=De,i}function Ke(){if(_r)return _r;const n=document.createElement("canvas");n.width=n.height=64;const t=n.getContext("2d"),e=t.createRadialGradient(32,32,0,32,32,32);return e.addColorStop(0,"rgba(255,255,255,1)"),e.addColorStop(.22,"rgba(255,255,255,.95)"),e.addColorStop(.5,"rgba(255,255,255,.35)"),e.addColorStop(1,"rgba(255,255,255,0)"),t.fillStyle=e,t.fillRect(0,0,64,64),_r=new Bs(n),_r.colorSpace=De,_r}let xs=null,vs=null,Ms=null;function qo(n){const t=document.createElement("canvas");t.width=1024,t.height=1024;const e=t.getContext("2d");n(e,t.width);const i=new Bs(t);return i.colorSpace=De,i.minFilter=jn,i.magFilter=fn,i}function un(n,t,e,i,r,s,a=0,o=Math.PI*2){n.beginPath(),n.ellipse(t,e,i,r,s,a,o)}function gc(){return xs||(xs=qo((n,t)=>{const e=t/2,i=n.createLinearGradient(96,e,t-96,e);i.addColorStop(0,"rgba(255,255,255,0)"),i.addColorStop(.12,"rgba(255,221,174,.18)"),i.addColorStop(.35,"rgba(255,245,222,.76)"),i.addColorStop(.5,"rgba(255,255,255,1)"),i.addColorStop(.66,"rgba(255,232,199,.82)"),i.addColorStop(.88,"rgba(255,179,126,.2)"),i.addColorStop(1,"rgba(255,255,255,0)"),n.save(),n.globalCompositeOperation="lighter",n.filter="blur(34px)",n.strokeStyle=i,n.lineCap="round",n.lineWidth=62,un(n,e,e+7,360,74,-.1),n.stroke(),n.filter="blur(15px)",n.lineWidth=22,un(n,e,e+4,325,62,-.1),n.stroke(),n.restore(),n.save(),n.globalCompositeOperation="lighter",n.lineCap="round",n.strokeStyle=i,n.filter="blur(13px)",n.lineWidth=34,un(n,e-2,e+3,118,164,-.08,Math.PI*1.03,Math.PI*1.98),n.stroke(),n.lineWidth=25,un(n,e+2,e+4,121,161,-.08,.03,Math.PI*.97),n.stroke(),n.filter="none",n.lineWidth=7,n.strokeStyle="rgba(255,250,232,.92)",un(n,e-2,e+3,116,160,-.08,Math.PI*1.05,Math.PI*1.95),n.stroke(),n.strokeStyle="rgba(255,221,180,.72)",un(n,e+2,e+4,119,158,-.08,.07,Math.PI*.93),n.stroke(),n.restore(),n.save(),n.globalCompositeOperation="lighter",n.lineCap="round";for(let a=0;a<12;a++){const o=164+a*16,c=28+a*3.25,l=.2-a*.011;n.strokeStyle=`rgba(255,238,210,${l})`,n.lineWidth=a<4?3.5:2,un(n,e,e+6,o,c,-.1),n.stroke()}n.restore();const r=n.createRadialGradient(e-18,e-20,6,e,e,105);r.addColorStop(0,"rgba(0,0,0,1)"),r.addColorStop(.78,"rgba(0,0,0,1)"),r.addColorStop(.94,"rgba(1,1,2,.995)"),r.addColorStop(1,"rgba(0,0,0,0)"),n.fillStyle=r,n.fillRect(e-112,e-112,224,224),n.save(),n.globalCompositeOperation="lighter",n.filter="blur(12px)",n.strokeStyle="rgba(255,244,220,.86)",n.lineWidth=24,un(n,e,e,103,106,-.08),n.stroke(),n.filter="none",n.strokeStyle="rgba(255,255,247,.98)",n.lineWidth=6,un(n,e,e,102,105,-.08),n.stroke();const s=n.createLinearGradient(130,e+58,t-120,e-32);s.addColorStop(0,"rgba(255,184,126,0)"),s.addColorStop(.2,"rgba(255,207,158,.55)"),s.addColorStop(.43,"rgba(255,251,231,.98)"),s.addColorStop(.66,"rgba(255,244,219,.94)"),s.addColorStop(.9,"rgba(255,166,112,.34)"),s.addColorStop(1,"rgba(255,166,112,0)"),n.strokeStyle=s,n.lineCap="round",n.filter="blur(11px)",n.lineWidth=28,n.beginPath(),n.moveTo(132,e+103),n.bezierCurveTo(318,e+83,638,e-54,908,e-90),n.stroke(),n.filter="none",n.lineWidth=9,n.stroke(),n.restore()}),xs)}function F_(){return vs||(vs=qo((n,t)=>{const e=t/2;n.globalCompositeOperation="lighter",n.lineCap="round";for(let i=0;i<18;i++){const r=i/18*Math.PI*2,s=108+i%3*17,a=.11+i%4*.035;n.strokeStyle=`rgba(255,255,245,${.24+i%5*.07})`,n.lineWidth=2+i%3,un(n,e,e,s,s*.9,-.08,r,r+a),n.stroke()}n.filter="blur(9px)",n.strokeStyle="rgba(255,238,209,.42)",n.lineWidth=10,un(n,e,e,118,111,-.08,.14,Math.PI*.72),n.stroke()}),vs)}function N_(){return Ms||(Ms=qo((n,t)=>{const e=t/2,i=n.createRadialGradient(e,e,44,e,e,430);i.addColorStop(0,"rgba(255,250,232,.7)"),i.addColorStop(.18,"rgba(255,226,190,.38)"),i.addColorStop(.42,"rgba(255,180,119,.1)"),i.addColorStop(.72,"rgba(255,139,84,.025)"),i.addColorStop(1,"rgba(255,255,255,0)"),n.fillStyle=i,n.fillRect(0,0,t,t)}),Ms)}function ah({color:n=16762255,tilt:t=0,phase:e=0,visualScale:i=1,intensity:r=1}={}){const s=new ze,a=new ve(new ge({map:N_(),color:n,transparent:!0,opacity:0,depthWrite:!1,blending:jt}));a.scale.setScalar(2.65*i);const o=new ve(new ge({map:gc(),color:n,transparent:!0,opacity:0,alphaTest:.006,depthWrite:!1,blending:vi,rotation:t}));o.scale.setScalar(2.2*i);const c=new ve(new ge({map:F_(),color:n,transparent:!0,opacity:0,depthWrite:!1,blending:jt,rotation:t}));c.scale.setScalar(2.2*i);const l=new ve(new ge({map:gc(),color:n,transparent:!0,opacity:0,alphaTest:.006,depthWrite:!1,blending:jt,rotation:t}));l.scale.setScalar(2.2*i);const h=new sn(new ks(.235*i,32,20),new Br({color:0,transparent:!0,opacity:0}));return h.renderOrder=2,a.renderOrder=1,o.renderOrder=3,l.renderOrder=4,c.renderOrder=5,s.add(a,h,o,l,c),s.userData.blackHoleVisual={halo:a,horizon:h,accretion:o,bloom:l,flow:c,intensity:0,visibility:1,baseTilt:t,phase:e,visualScale:i},Er(s,r),s}function Er(n,t,e=1){const i=n.userData.blackHoleVisual;if(!i)return;const r=Tt.clamp(t,0,1.4),s=Tt.clamp(e,0,1);i.intensity=r,i.visibility=s,i.horizon.material.opacity=Tt.smoothstep(r,0,.24)*s,i.horizon.visible=r*s>.001,i.accretion.material.opacity=Math.min(1,r*.92)*s,i.bloom.material.opacity=Math.min(.34,r*.27)*s,i.flow.material.opacity=Math.min(.82,r*.5)*s,i.halo.material.opacity=Math.min(.7,r*.42)*s}function ws(n,t,e=1){const i=n.userData.blackHoleVisual;if(!i||i.intensity<=0)return;const r=t*.001,s=1+Math.sin(r*.72+i.phase)*.035,a=.82+Math.sin(r*1.7+i.phase*1.9)*.18;i.halo.scale.setScalar(2.65*i.visualScale*s),i.halo.material.opacity=Math.min(.7,i.intensity*(.36+a*.09))*i.visibility,i.bloom.material.opacity=Math.min(.36,i.intensity*(.22+a*.07))*i.visibility,i.flow.material.rotation=i.baseTilt+e*Math.sin(r*.44+i.phase)*.055,i.flow.material.opacity=Math.min(.82,i.intensity*(.38+a*.15))*i.visibility}const wa=220,Ra=340;function oh(n){if(n<=wa)return 0;const t=Ra-wa;if(n<Ra){const e=(n-wa)/t;return t*(e**3-.5*e**4)}return t*.5+n-Ra}function lh(n,t){return oh(n)*t}function O_(n,{civilizationSimulation:t,civilizationData:e,civilizationGroups:i}){if(!n||!t)return;const r=new Uint16Array(e.length);n.owners.forEach((s,a)=>{if(s<0)return;const o=r[s]++;e[s].hostRemnantIndices[o]=t.habitatRemnantIndices[a]}),e.forEach((s,a)=>{s.displayCount=r[a],i[a].geometry.setDrawRange(0,r[a])})}function B_({clickableStars:n,stellarRemnants:t,remnantDynamics:e,cosmicPosition:i,civilizationData:r,civilizationGroups:s}){if(!t)return;const a=t.geometry.attributes.position.array,o=n?.geometry.attributes.position.array,c=o||a,l=d=>o?e.sourceIndices[d]*3:d*3,h=new U,f=(d,m,g,v,p)=>{const u=d*3,b=Math.min(i,e.escapeAt[d]),y=lh(b,e.orbitRates[d]),x=Math.cos(y),T=Math.sin(y),E=e.axes[u],w=e.axes[u+1],R=e.axes[u+2],_=E*m+w*g+R*v;p.set(m*x+(w*v-R*g)*T+E*_*(1-x),g*x+(R*m-E*v)*T+w*_*(1-x),v*x+(E*g-w*m)*T+R*_*(1-x))};r.forEach((d,m)=>{const g=s[m];if(!g)return;const v=g.geometry.attributes.position.array;for(let u=0;u<d.displayCount;u++){const b=d.hostRemnantIndices[u],y=l(b),x=u*3;if(f(b,d.hostOffsets[x],d.hostOffsets[x+1],d.hostOffsets[x+2],h),v[x]=c[y]+h.x,v[x+1]=c[y+1]+h.y,v[x+2]=c[y+2]+h.z,d.highDimensional&&i>=d.ascensionAt){const T=Tt.smoothstep(i,d.ascensionAt,d.ascensionAt+34),E=u*1.618+i*.035;v[x]+=Math.sin(E)*T*.7,v[x+1]+=Math.cos(E*.73)*T*.42,v[x+2]+=Math.sin(E*.51+2.1)*T*.7}}g.geometry.attributes.position.needsUpdate=!0;const p=l(d.homeRemnantIndex);if(f(d.homeRemnantIndex,d.homeOffset.x,d.homeOffset.y,d.homeOffset.z,h),d.home.set(c[p]+h.x,c[p+1]+h.y,c[p+2]+h.z),d.highDimensional&&i>=d.ascensionAt){const u=Tt.smoothstep(i,d.ascensionAt,d.ascensionAt+34),b=m*2.17+i*.035;d.home.x+=Math.sin(b)*u*.7,d.home.y+=Math.cos(b*.73)*u*.42,d.home.z+=Math.sin(b*.51+2.1)*u*.7}})}const ch=Math.PI*2,z_=24;function k_(n,t,e){return Math.min(e,Math.max(t,n))}function vr(n,t,e){if(e<=t)return n>=e?1:0;const i=k_((n-t)/(e-t),0,1);return i*i*(3-2*i)}function hh(n,t){const e=t.persistUntil??t.start+t.duration,i=t.persistenceFadeDuration??z_;return 1-vr(n,e,e+i)}function xi(n,t){let e=n+1^t;return e=Math.imul(e^e>>>16,569420461),e=Math.imul(e^e>>>15,1935289751),((e^e>>>15)>>>0)/4294967296}function H_(n,t,e,i,r,s,a,o,c){const l=Math.cos(c),h=Math.sin(c),f=s*e+a*i+o*r;n[t]=e*l+(a*r-o*i)*h+s*f*(1-l),n[t+1]=i*l+(o*e-s*r)*h+a*f*(1-l),n[t+2]=r*l+(s*i-a*e)*h+o*f*(1-l)}function G_(n,t){const e=n.length/3,i=new Float32Array(n.length),r=new Float32Array(e),s=t.galaxyType<=2,a=t.hasCentralBlackHole?1.35:.16,o=t.seedValue^1831565813,c=1;for(let l=0;l<e;l++){const h=l*3,f=n[h],d=n[h+1],m=n[h+2],g=Math.max(.24,Math.hypot(f,d,m));if(s){let b=(xi(l,o+29)-.5)*.035;const y=1;let x=(xi(l,o+47)-.5)*.035;const T=Math.hypot(b,y,x);b/=T,x/=T,i.set([b,y/T,x],h)}else{const b=xi(l,o+71)*ch,y=.08+xi(l,o+97)*.54,x=Math.sin(y);i.set([Math.cos(b)*x,Math.cos(y),Math.sin(b)*x],h)}const v=a/Math.pow(g+.12,3),p=.72/(g+1.8),u=.0055+.0155*Math.sqrt(t.gravity*(v+p));r[l]=c*Math.min(.095,u)}return{axes:i,orbitRates:r,centralMass:a}}function V_(n,t,e,i){const r=oh(n);for(let s=0;s<i.orbitRates.length;s++){const a=s*3;H_(e,a,t[a],t[a+1],t[a+2],i.axes[a],i.axes[a+1],i.axes[a+2],r*i.orbitRates[s])}}function W_(n,t,{seedValue:e,eventIndex:i,influenceRadius:r=4.8,maxStars:s=2600}){const a=[];for(let p=0;p<n.length/3;p++){const u=p*3,b=Math.hypot(n[u]-t.x,n[u+1]-t.y,n[u+2]-t.z);b<=r&&a.push({index:p,distance:b})}a.sort((p,u)=>p.distance-u.distance);const o=Math.min(s,a.length),c=new Uint16Array(o),l=new Float32Array(o),h=a.length/Math.max(1,o),f=e^Math.imul(i+1,73244475);for(let p=0;p<o;p++){const u=xi(p,f)*Math.min(1,h),b=p===0?0:Math.min(a.length-1,Math.floor(p*h+u));c[p]=a[b].index,l[p]=a[b].distance}const d=xi(i,f+131)*ch,m=(xi(i,f+173)-.5)*.5,g=Math.cos(m),v=new Float32Array([Math.cos(d)*Math.sin(m),g,Math.sin(d)*Math.sin(m)]);return{indices:c,restDistances:l,axis:v,influenceRadius:r,softening:.24,captureRadius:.42}}function X_(n,t,e,i,r){const s=i.gravityField;if(!s||n<i.start)return;const o=Math.min(n,i.persistUntil)-i.start,c=vr(n,i.start,i.start+4.5),l=vr(n,i.impactAt-1.2,i.impactAt+2.4),h=hh(n,i),f=1-i.radiatedMassFraction*l,d=s.axis[0],m=s.axis[1],g=s.axis[2];for(let v=0;v<s.indices.length;v++){const u=s.indices[v]*3,b=t[u]-r.x,y=t[u+1]-r.y,x=t[u+2]-r.z,T=Math.max(.025,Math.hypot(b,y,x)),E=s.restDistances[v],w=1-vr(E,s.influenceRadius*.34,s.influenceRadius);if(w<=0)continue;const R=Math.sqrt(T*T+s.softening*s.softening),_=.105*Math.sqrt(f/Math.pow(R,3)),M=1+(1-l)*.22*Math.sin(o*.72+E*2.3),P=o*_*M*c*w,D=Math.cos(P),I=Math.sin(P),V=d*b+m*y+g*x;let G=b*D+(m*x-g*y)*I+d*V*(1-D),W=y*D+(g*b-d*x)*I+m*V*(1-D),$=x*D+(d*y-m*b)*I+g*V*(1-D);const k=Math.min(.14,.055/(E+.24)),N=1+Math.sin(P*.63+E*3.1)*k*c*w;if(G*=N,W*=N,$*=N,E<s.captureRadius){const O=E/s.captureRadius*11,Q=vr(n,i.impactAt+O,i.impactAt+O+13),ut=1-Q*.965;G*=ut,W*=ut,$*=ut;const mt=1-Q;e[u]*=mt,e[u+1]*=mt,e[u+2]*=mt}t[u]=r.x+b+(G-b)*h,t[u+1]=r.y+y+(W-y)*h,t[u+2]=r.z+x+($-x)*h}}function Y_(n,t){const{mode:e,epochEffectsGroup:i,primordialParticles:r,primordialFactors:s,primordialDirections:a,expansionStreaks:o,expansionDirections:c,bangCore:l,shockwaves:h,renderer:f,scene:d,clickableStars:m,originalGalaxyPositions:g,stellarGravityState:v,universe:p,transition:u,galaxyGroup:b,starDeathThresholds:y,originalGalaxyColors:x,cosmicEvents:T,remnantGroup:E,stellarRemnants:w,originalRemnantPositions:R,remnantDynamics:_,blackHoleRemnants:M,heatDeathGroup:P,coldPhotons:D,originalPhotonPositions:I,originalPhotonColors:V,cosmicFateGroup:G,fateBubble:W,fateGlow:$}=t,k=p.cosmicFate,N=k&&k.type!=="heat-death",O=N?Tt.smoothstep(n,k.onsetAt,1e3):0,Q=n<150&&e==="explorer";if(i.visible=Q,Q&&r){const tt=Tt.smoothstep(n,0,145),at=Tt.smoothstep(n,0,55),rt=Tt.smoothstep(n,55,145),kt=.06+Math.pow(at,.62)*32+rt*7,et=r.geometry.attributes.position.array;for(let C=0;C<s.length;C++){const S=kt*s[C];et[C*3]=a[C*3]*S,et[C*3+1]=a[C*3+1]*S,et[C*3+2]=a[C*3+2]*S}r.geometry.attributes.position.needsUpdate=!0,r.material.opacity=.98*(1-Tt.smoothstep(n,112,150)),r.material.size=.3-tt*.17;const ht=o.geometry.attributes.position.array;for(let C=0;C<c.length/4;C++){const S=c[C*4+3],B=(.04+Math.pow(at,.5)*31+rt*5)*S,Z=Math.max(0,B-(1.2+tt*5.5)*S);for(let J=0;J<3;J++){const X=c[C*4+J];ht[C*6+J]=X*Z,ht[C*6+3+J]=X*B}}o.geometry.attributes.position.needsUpdate=!0,o.material.opacity=.68*Tt.smoothstep(n,1.5,8)*(1-Tt.smoothstep(n,48,82));const Ht=1-Tt.smoothstep(n,7,34),Gt=.7+Math.pow(at,.46)*18;l.material.opacity=Ht,l.scale.set(Gt,Gt,1),h.forEach((C,S)=>{const B=3+S*6,Z=52+S*7,J=Tt.clamp((n-B)/Z,0,1),X=.9+Math.pow(J,.72)*(39+S*5);C.scale.set(X,X,1),C.material.opacity=Math.sin(J*Math.PI)*(.24-S*.045)})}const ut=new Bt(328968),mt=ut.clone();if(n<70){const tt=Tt.smoothstep(n,0,70);mt.lerpColors(new Bt(2756872),ut,tt),f.toneMappingExposure=1.15+(1-tt)*2.2}else if(N&&O>0){const tt={"big-rip":new Bt(463652),"big-crunch":new Bt(2492422),"vacuum-decay":new Bt(1444389)};mt.lerpColors(ut,tt[k.type],O*.72),f.toneMappingExposure=k.type==="big-crunch"?1.15+O*1.45:1.15-O*.38}else if(n>950){const tt=Tt.smoothstep(n,950,1e3);mt.lerpColors(ut,new Bt(197898),tt*.32),f.toneMappingExposure=1.15}else f.toneMappingExposure=1.15;if(f.setClearColor(mt,1),d.fog.color.copy(mt),!m||!g)return;const Pt=rh(p),Dt=Tt.smoothstep(n,220,340),K=1-Tt.smoothstep(n,Pt-75,Pt+10);m.material.opacity=Dt*.9,m.material.size=.09,u||b.scale.setScalar(1);const Y=m.geometry.attributes.position.array,dt=m.geometry.attributes.color.array;v&&V_(n,g,Y,v);for(let tt=0;tt<g.length;tt+=3){const at=tt/3,rt=1-Tt.smoothstep(n,y[at],y[at]+22);v||(Y[tt]=g[tt],Y[tt+1]=g[tt+1],Y[tt+2]=g[tt+2]),dt[tt]=x[tt]*rt,dt[tt+1]=x[tt+1]*rt,dt[tt+2]=x[tt+2]*rt}if(T.forEach(tt=>{const at=tt.sourceIndex*3,rt={x:Y[at],y:Y[at+1],z:Y[at+2]};tt.group.position.set(rt.x,rt.y,rt.z),tt.visual==="black-hole-merger"&&X_(n,Y,dt,tt,rt)}),T.forEach(tt=>{if(n<tt.impactAt)return;const at=Tt.smoothstep(n,tt.impactAt,tt.impactAt+24);if(tt.starImpacts.forEach(J=>{const X=J.index*3;Y[X]+=J.kick[0]*at,Y[X+1]+=J.kick[1]*at,Y[X+2]+=J.kick[2]*at,dt[X]*=J.dimFactor,dt[X+1]*=J.dimFactor,dt[X+2]*=J.dimFactor}),tt.visual!=="black-hole-merger"||!tt.waveSamples)return;const rt=tt.duration*(1-tt.impactPhase),kt=Tt.clamp((n-tt.impactAt)/rt,0,1);if(kt<=0||kt>=1)return;const{waveRadius:et,indices:ht,distances:Ht,transverse:Gt,polarities:C}=tt.waveSamples,S=.18+Math.pow(kt,.72)*et,B=.18+kt*.34,Z=.13*(1-kt*.58);for(let J=0;J<ht.length;J++){const X=Ht[J]-S;if(Math.abs(X)>B*2.8)continue;const Mt=Math.cos(X/B*Math.PI)*Math.exp(-Math.pow(X/B,2)*1.7),st=Mt*Z*C[J],xt=ht[J]*3,Et=J*3;Y[xt]+=Gt[Et]*st,Y[xt+1]+=Gt[Et+1]*st,Y[xt+2]+=Gt[Et+2]*st;const it=1+Math.abs(Mt)*.18;dt[xt]*=it,dt[xt+1]*=it,dt[xt+2]*=it}}),N&&O>0){const tt=W?.position.x||0,at=W?.position.y||0,rt=W?.position.z||0,kt=.18+Math.pow(O,.58)*36;for(let et=0;et<g.length;et+=3)if(k.type==="big-rip"){const ht=Math.hypot(g[et],g[et+1],g[et+2]),Ht=1+Math.pow(O,1.7)*(2.8+ht*.16);Y[et]*=Ht,Y[et+1]*=Ht,Y[et+2]*=Ht;const Gt=Math.pow(1-O,.72);dt[et]*=Gt,dt[et+1]*=Gt,dt[et+2]*=Gt}else if(k.type==="big-crunch"){const ht=Math.max(.012,1-Math.pow(O,1.35)*.988);Y[et]*=ht,Y[et+1]*=ht,Y[et+2]*=ht,dt[et]*=1+O*1.4,dt[et+1]*=1-O*.5,dt[et+2]*=1-O*.72}else{const ht=Math.hypot(Y[et]-tt,Y[et+1]-at,Y[et+2]-rt),Ht=Tt.smoothstep(kt-1.2,kt+.4,ht);dt[et]*=Ht,dt[et+1]*=Ht,dt[et+2]*=Ht}}T.forEach(tt=>{const at=tt.sourceIndex*3;tt.group.position.set(Y[at],Y[at+1],Y[at+2])}),m.geometry.attributes.position.needsUpdate=!0,m.geometry.attributes.color.needsUpdate=!0;const Ct=b.children.find(tt=>tt.userData.isCoreGlow);if(Ct){const{scale:tt,opacity:at}=Ct.userData.profile;Ct.material.opacity=Dt*K*at*(1-O),Ct.scale.set(tt,tt,1)}const St=b.children.find(tt=>tt.userData.isAgnGlow),Zt=b.children.find(tt=>tt.userData.isAgnJet);if(St){const tt=Dt*(1-Tt.smoothstep(n,500,650));St.material.opacity=tt*.82,St.scale.set(.72,.72,1),Zt.material.opacity=tt*.18}const ye=!N||k.outcomeExponent>38,L=ye&&n>Pt-80&&n<930,ue=ye&&n>825&&n<960;if(E.visible=(L||ue)&&e==="explorer",L&&w){const tt=Tt.smoothstep(n,Pt-80,Pt+15),at=1-Tt.smoothstep(n,845,930);w.material.opacity=tt*at*.64*(1-O);const rt=w.geometry.attributes.position.array,kt=(et,ht)=>{const Ht=et*3,Gt=R[Ht],C=R[Ht+1],S=R[Ht+2],B=_.axes[Ht],Z=_.axes[Ht+1],J=_.axes[Ht+2],X=lh(ht,_.orbitRates[et]),Mt=Math.cos(X),st=Math.sin(X),xt=B*Gt+Z*C+J*S;rt[Ht]=Gt*Mt+(Z*S-J*C)*st+B*xt*(1-Mt),rt[Ht+1]=C*Mt+(J*Gt-B*S)*st+Z*xt*(1-Mt),rt[Ht+2]=S*Mt+(B*C-Z*Gt)*st+J*xt*(1-Mt)};for(let et=0;et<R.length/3;et++){const ht=et*3,Ht=_.fates[et],Gt=_.escapeAt[et];if(n<Gt||Ht===1){kt(et,n);continue}if(Ht===2){const ft=Tt.smoothstep(n,Gt,Math.min(900,Gt+42));kt(et,n+ft*150);const yt=1-ft*.985;rt[ht]*=yt,rt[ht+1]*=yt,rt[ht+2]*=yt;continue}kt(et,Gt);const C=rt[ht],S=rt[ht+1],B=rt[ht+2],Z=Math.max(.001,Math.hypot(C,S,B)),J=_.axes[ht],X=_.axes[ht+1],Mt=_.axes[ht+2],st=Math.sign(_.orbitRates[et])||1;let xt=(X*B-Mt*S)*st,Et=(Mt*C-J*B)*st,it=(J*S-X*C)*st;const gt=Math.max(.001,Math.hypot(xt,Et,it));xt/=gt,Et/=gt,it/=gt;let Ft=xt*.9+C/Z*.34,At=Et*.9+S/Z*.34+X*Math.sin(et*12.9898)*.08,pt=it*.9+B/Z*.34;const Xt=Math.max(.001,Math.hypot(Ft,At,pt));Ft/=Xt,At/=Xt,pt/=Xt;const F=Tt.clamp((n-Gt)/Math.max(1,900-Gt),0,1),ot=Ht===3?Math.pow(F,.72)*(18+_.speeds[et]*7):Math.pow(F,1.35)*(6+_.speeds[et]*11);rt[ht]=C+Ft*ot,rt[ht+1]=S+At*ot,rt[ht+2]=B+pt*ot}w.geometry.attributes.position.needsUpdate=!0}if(M.forEach(tt=>{const at=tt.userData,rt=Tt.smoothstep(n,at.birthAt,at.birthAt+7),kt=1-Tt.smoothstep(n,at.evaporationAt-24,at.evaporationAt),et=Tt.smoothstep(n,at.evaporationAt-15,at.evaporationAt),ht=7.5,Ht=Math.abs(n-at.evaporationAt),Gt=Ht<ht?Math.sin((1-Ht/ht)*Math.PI/2):0;tt.visible=ye&&e==="explorer"&&n>=at.birthAt&&n<=at.evaporationAt+ht;const C=at.baseScale*(.18+.82*Math.cbrt(Math.max(0,kt)));tt.scale.setScalar(Math.max(.035,C));const S=rt*(.78+et*.22)*Math.sqrt(Math.max(0,kt));Er(tt,S),at.hawkingGlow.material.opacity=rt*(.07+et*.62)*Math.sqrt(Math.max(0,kt)),at.finalPulse.material.opacity=Gt*.84;const B=(.22+Gt*2.1)/Math.max(.035,C);at.finalPulse.scale.set(B,B,1)}),P.visible=!N&&n>910&&e==="explorer",D&&I&&V){const tt=Tt.smoothstep(n,910,940),at=Tt.smoothstep(n,938,1e3);D.material.opacity=tt*Math.pow(1-at,1.7)*.34;const rt=D.geometry.attributes.position.array,kt=D.geometry.attributes.color.array,et=1+at*1.8;for(let ht=0;ht<I.length;ht+=3)rt[ht]=I[ht]*et,rt[ht+1]=I[ht+1]*et,rt[ht+2]=I[ht+2]*et,kt[ht]=V[ht]*(1-at*.55)+at*.06,kt[ht+1]=V[ht+1]*(1-at*.88),kt[ht+2]=V[ht+2]*(1-at*.96);D.geometry.attributes.position.needsUpdate=!0,D.geometry.attributes.color.needsUpdate=!0}if(G.visible=N&&O>0&&e==="explorer",G.visible&&W&&$)if(k.type==="vacuum-decay"){const tt=.18+Math.pow(O,.58)*36;W.visible=!0,W.scale.setScalar(tt),W.material.opacity=Math.sin(Math.min(.98,O)*Math.PI)*.18+.035,$.position.copy(W.position),$.material.opacity=(1-O)*.42,$.scale.setScalar(1.2+O*5.5)}else{W.visible=!1,$.position.set(0,0,0),$.material.opacity=k.type==="big-crunch"?Math.pow(O,2.4)*.92:Math.sin(O*Math.PI)*.28;const tt=k.type==="big-crunch"?.4+(1-O)*8:3+O*28;$.scale.setScalar(tt)}}function q_(n,t){const{mode:e,cosmicEvents:i,cosmicEventGroup:r}=t;let s=null,a=!1;return i.forEach(o=>{const c=(n-o.start)/o.duration,l=c>=0&&c<=1,h=o.visual==="black-hole-merger"?hh(n,o):0,f=o.visual==="black-hole-merger"&&n>=o.impactAt&&h>0,d=(l||f)&&e==="explorer";if(o.group.visible=d,!d)return;a=!0,l&&(s=o);const m=Math.min(1,c);o.group.userData.phase=m;const g=o.group.userData.effect;if(o.visual==="supernova"){const v=m,p=Tt.smoothstep(v,0,.028),u=p*(1-Tt.smoothstep(v,.045,.19)),b=(1-Tt.smoothstep(v,.12,1))*p;g.innerFlash.material.opacity=u*.98;const y=.08+Math.pow(Math.min(1,v/.16),.28)*.72;g.innerFlash.scale.set(y,y,1),g.photosphere.material.opacity=u*.58+b*.2;const x=.16+Math.pow(v,.56)*1.15;g.photosphere.scale.set(x,x*.9,1),g.remnant.material.opacity=Tt.smoothstep(v,.2,.52)*(1-Tt.smoothstep(v,.82,1))*.72;const T=g.ejecta.geometry.attributes.position.array;for(let R=0;R<g.ejectaVelocity.length;R++){const _=Tt.clamp((v-g.ejectaDelay[R])/(1-g.ejectaDelay[R]),0,1),M=.05+Math.pow(_,.58)*g.ejectaVelocity[R],P=Math.sin(_*10+R*1.73)*_*.045,D=R*3;T[D]=g.ejectaDirections[D]*M+P*g.ejectaDirections[D+1],T[D+1]=g.ejectaDirections[D+1]*M+P*g.ejectaDirections[D+2],T[D+2]=g.ejectaDirections[D+2]*M+P*g.ejectaDirections[D]}g.ejecta.geometry.attributes.position.needsUpdate=!0,g.ejecta.material.opacity=p*(1-Tt.smoothstep(v,.58,1))*.86;const E=g.shell.geometry.attributes.position.array,w=.12+(1-Math.pow(1-v,2.4))*2.25;for(let R=0;R<g.shellNoise.length;R++){const _=R*3,M=1+Math.sin(g.shellNoise[R]+v*4.5)*.055+Math.sin(R*2.1)*.025;E[_]=g.shellDirections[_]*w*M,E[_+1]=g.shellDirections[_+1]*w*M,E[_+2]=g.shellDirections[_+2]*w*M}g.shell.geometry.attributes.position.needsUpdate=!0,g.shell.material.opacity=Tt.smoothstep(v,.04,.14)*(1-Tt.smoothstep(v,.5,1))*.34}else if(o.visual==="pulsar"){const p=Math.pow(Math.sin(m*Math.PI),.45),u=o.type==="pulsar-glitch"?.22:1;g.core.material.opacity=p*.92,g.halo.material.opacity=p*.16*u,g.nebula.material.opacity=p*.095*u,g.halo.scale.set(1.05,1.05,1),g.jets.material.opacity=p*.18*u,g.fieldLines.forEach((b,y)=>{b.material.opacity=p*(.055-y*.007)*u}),o.group.userData.intensity=p}else{const v=m,p=.68,u=v>=p;g.holeA.visible=!u,g.holeB.visible=!u,g.remnantHole.visible=u&&h>0;const b=Math.min(1,v/p),y=k=>Math.PI*2*(1.15*k+4.1*Math.pow(k,3)),x=k=>.12+2.45*Math.pow(1-k,.72),T=y(b),E=x(b);g.holeA.position.set(Math.cos(T)*E,Math.sin(T)*E,Math.sin(T*.5)*.09),g.holeB.position.set(-Math.cos(T)*E,-Math.sin(T)*E,-Math.sin(T*.5)*.09);const w=(k,N)=>{const O=k.geometry.attributes.position.array;for(let Q=0;Q<84;Q++){const ut=Math.max(0,b-(83-Q)*(.0028+b*9e-4)),mt=y(ut),Pt=x(ut);O[Q*3]=N*Math.cos(mt)*Pt,O[Q*3+1]=N*Math.sin(mt)*Pt,O[Q*3+2]=N*Math.sin(mt*.5)*.09}k.geometry.attributes.position.needsUpdate=!0,k.material.opacity=u?0:Tt.smoothstep(v,.02,.22)*.34};w(g.trailA,1),w(g.trailB,-1);const R=Tt.clamp((v-p)/(1-p),0,1),_=Math.exp(-R*7)*Math.sin(R*38);g.remnantHole.scale.set(1.24+_*.07,1.24-_*.045,1.24),Er(g.holeA,.62+b*.38),Er(g.holeB,.62+b*.38),Er(g.remnantHole,.74+Math.exp(-R*4)*.34,h);const M=u?Math.exp(-R*18):0;g.mergerGlow.material.opacity=M*(g.gasRich?.48:.13);const P=.3+R*(g.gasRich?3.6:2.4);g.mergerGlow.scale.set(P,P,1),g.gasEcho.material.opacity=g.gasRich?Tt.smoothstep(R,.02,.12)*(1-Tt.smoothstep(R,.3,.92))*.34:0;const D=.35+Math.pow(R,.62)*4.2;g.gasEcho.scale.set(D,D,1),g.waveHalos.forEach((k,N)=>{const O=N*.12,Q=Tt.clamp((R-O)/(1-O),0,1);k.visible=u&&Q>0;const ut=.38+Math.pow(Q,.7)*(8.8+N*.6);k.scale.set(ut,ut,1),k.material.opacity=Math.pow(Math.sin(Q*Math.PI),.78)*(.29-N*.045)}),g.wavefronts.forEach((k,N)=>{const O=N*.075,Q=Tt.clamp((R-O)/(1-O),0,1);k.visible=u&&Q>0,k.scale.setScalar(.28+Math.pow(Q,.72)*(7.4+N*.34)),k.material.opacity=Math.pow(Math.sin(Q*Math.PI),.72)*.19*(1-N*.08)});const I=g.waveDust.geometry.attributes.position.array,V=.22+Math.pow(R,.72)*8.6;for(let k=0;k<g.waveDirections.length/3;k++){const N=k*3,O=g.waveDirections[N],Q=g.waveDirections[N+1],ut=g.waveDirections[N+2],mt=1+(O*O-ut*ut)*.085*Math.sin(R*Math.PI*5);I[N]=O*V*mt,I[N+1]=Q*V*mt,I[N+2]=ut*V*mt}g.waveDust.geometry.attributes.position.needsUpdate=!0,g.waveDust.material.opacity=u?Math.pow(Math.sin(R*Math.PI),.62)*.5:0;const W=Tt.smoothstep(R,.08,1)*.68;g.remnantHole.position.copy(g.recoilVector).multiplyScalar(W);const $=g.recoilTrail.geometry.attributes.position.array;$[0]=0,$[1]=0,$[2]=0,$[3]=g.remnantHole.position.x,$[4]=g.remnantHole.position.y,$[5]=g.remnantHole.position.z,g.recoilTrail.geometry.attributes.position.needsUpdate=!0,g.recoilTrail.material.opacity=u?(1-R*.72)*.28*h:0}}),r.visible=a,s}function $_(n,t){const{cosmicEventGroup:e,prefersReducedMotion:i,cosmicEvents:r,camera:s}=t;!e.visible||i||r.forEach(a=>{if(!a.group.visible)return;a.group.userData.phase;const o=a.group.userData.effect;if(a.visual==="supernova")o.innerFlash.material.rotation=n*7e-5,o.photosphere.material.rotation=-n*35e-6,o.ejecta.rotation.y=Math.sin(n*21e-5)*.035;else if(a.visual==="pulsar"){o.rotor.rotation.y=n*.0024;const c=new ni,l=new U,h=new U(0,1,0);o.rotor.getWorldQuaternion(c),a.group.getWorldPosition(l),h.applyQuaternion(c).normalize();const f=s.position.clone().sub(l).normalize(),d=Math.pow(Math.abs(h.dot(f)),14),m=.52+Math.pow(Math.max(0,Math.sin(n*.012)),10)*.48,g=a.type==="pulsar-glitch"?.16:1;o.jets.material.opacity=a.group.userData.intensity*(.34+d*.58)*m*g,o.sweepGlow.material.opacity=a.group.userData.intensity*d*m*.78*g;const v=.5+d*1.8;o.sweepGlow.scale.set(v,v,1),o.knots.forEach(p=>{const u=(n*55e-5+p.userData.offset)%1;p.position.set(0,p.userData.side*(.18+u*2.45),0),p.material.opacity=a.group.userData.intensity*Math.sin(u*Math.PI)*(.12+d*.55)*g}),o.fieldLines.forEach((p,u)=>{p.rotation.y+=.006+u*.001})}else ws(o.holeA,n,o.holeA.userData.spinDirection),ws(o.holeB,n,o.holeB.userData.spinDirection),ws(o.remnantHole,n,o.remnantHole.userData.spinDirection)})}function j_({universe:n,civilizationData:t,civilizationSimulation:e,cosmicEvents:i}){if(!e||t.length===0)return;const r=e,s=bn(n.seed,9241),a=r.habitatRemnantIndices.length,o=t.length,c=6;for(let _=0;_<a;_++){const M=[],P=_*3;for(let D=0;D<a;D++){if(D===_)continue;const I=D*3,V=Math.hypot(r.habitatPositions[P]-r.habitatPositions[I],r.habitatPositions[P+1]-r.habitatPositions[I+1],r.habitatPositions[P+2]-r.habitatPositions[I+2]);(M.length<c||V<M[M.length-1].distance)&&(M.push({node:D,distance:V}),M.sort((G,W)=>G.distance-W.distance),M.length>c&&M.pop())}r.adjacency[_]=Uint16Array.from(M.map(D=>D.node))}const l=new Int16Array(a);l.fill(-1);const h=new Float32Array(a),f=new Uint8Array(o),d=new Float32Array(o*o),m=new Int8Array(o*o),g=new Int16Array(a);g.fill(-1),t.forEach((_,M)=>{g[_.homeNodeIndex]=M});const v=new Uint16Array(o),p=Array(o).fill("自主扩张"),u=n.cosmicFate?.type!=="heat-death",b=u?n.cosmicFate.onsetAt:620,y=u?1e3:710,x=u?n.cosmicFate.label:"恒星能源枯竭",T=(_,M)=>_*o+M;for(let _=0;_<o;_++)for(let M=_+1;M<o;M++){const P=t[_],D=t[M],I=(P.cooperation+D.cooperation)*.28-(P.aggression+D.aggression)*.24+Wt(s,-.16,.16);d[T(_,M)]=I,d[T(M,_)]=I}const E=(_,M,P,D)=>{d[T(_,M)]=P,d[T(M,_)]=P,m[T(_,M)]=D,m[T(M,_)]=D},w=(_,M,P,D)=>{const I=[];for(let G=0;G<a;G++)l[G]===_&&I.push(G);if(I.length===0)return;P&&(M=1);for(let G=I.length-1;G>0;G--){const W=Math.floor(s()*(G+1));[I[G],I[W]]=[I[W],I[G]]}const V=Math.min(I.length,Math.max(P?I.length:0,Math.round(I.length*M*.62)));I.forEach((G,W)=>{W<V?(l[G]=-1,h[G]=0):h[G]*=Math.max(.18,1-M*.46)}),p[_]=D},R=i.slice().sort((_,M)=>_.impactAt-M.impactAt);for(let _=r.start;_<=r.end;_+=r.step){t.forEach((N,O)=>{f[O]||_<N.birth||(f[O]=1,l[N.homeNodeIndex]=O,h[N.homeNodeIndex]=.34,p[O]="母星文明进入星际阶段")}),R.forEach(N=>{N.impactAt<=_-r.step||N.impactAt>_||N.civilizationImpacts.forEach(O=>{const Q=t[O.speciesIndex];!Q||Q.highDimensional&&_>=Q.ascensionAt||w(O.speciesIndex,O.lossFraction,O.collapse,N.label)})});const M=new Uint8Array(o),P=new Uint8Array(o);for(let N=0;N<o;N++)for(let O=N+1;O<o;O++){const Q=m[T(N,O)];Q>0&&(M[N]++,M[O]++),Q<0&&(P[N]++,P[O]++)}for(let N=0;N<a;N++){const O=l[N];if(O<0)continue;const Q=t[O],ut=1+M[O]*.045-P[O]*.028;h[N]+=(.032+Q.resilience*.018)*ut*(1-h[N]),h[N]=Tt.clamp(h[N],0,1.35)}const D=new Uint8Array(o*o);for(let N=0;N<a;N++){const O=l[N];O<0||r.adjacency[N].forEach(Q=>{const ut=l[Q];ut<0||ut===O||(D[T(O,ut)]=1,D[T(ut,O)]=1)})}for(let N=0;N<o;N++)for(let O=N+1;O<o;O++){let Q=d[T(N,O)],ut=m[T(N,O)];if(D[T(N,O)]){const mt=t[N],Pt=t[O];Q+=(mt.cooperation+Pt.cooperation-1)*.026,Q-=(mt.aggression+Pt.aggression-.82)*.023,Q+=Wt(s,-.012,.012),ut===0&&Q>.3&&(ut=1),ut===0&&Q<-.26&&(ut=-1),ut===1&&Q<.08&&(ut=0),ut===-1&&Q>-.04&&(ut=0)}else Q*=.992,ut===1&&Q<.1&&(ut=0),ut===-1&&Q>-.08&&(ut=0);E(N,O,Tt.clamp(Q,-.95,.95),ut)}const I=Array.from({length:o},()=>[]);for(let N=0;N<a;N++)l[N]>=0&&I[l[N]].push(N);if(t.forEach((N,O)=>{const Q=I[O];if(!f[O]||Q.length===0||_>=650)return;const ut=1+Math.floor(N.expansionRate+M[O]*.34);for(let mt=0;mt<ut;mt++){const Pt=[];if(Q.forEach(Ct=>{r.adjacency[Ct].forEach(St=>{l[St]!==O&&Pt.push([Ct,St])})}),Pt.length===0)break;const[Dt,K]=Pt[Math.floor(s()*Pt.length)],Y=l[K];if(Y<0){if(g[K]>=0&&g[K]!==O&&!f[g[K]])continue;s()<.18+N.expansionRate*.19+M[O]*.025&&(l[K]=O,h[K]=Math.max(.14,h[Dt]*.34),Q.push(K),p[O]=M[O]>0?"协作网络推动殖民":"殖民前沿扩张");continue}const dt=m[T(O,Y)];if(dt>0){h[Dt]=Math.min(1.35,h[Dt]+.018),h[K]=Math.min(1.35,h[K]+.012),p[O]=`与${t[Y].name}交流`,p[Y]=`与${N.name}交流`;continue}if(dt<0){const Ct=h[Dt]*(.72+N.aggression*.76+s()*.35),St=h[K]*(.84+t[Y].resilience*.52+s()*.28);Ct>St?(l[K]=O,h[K]=Math.max(.08,Math.min(.48,(Ct-St)*.5)),p[O]=`与${t[Y].name}争夺边界`,p[Y]=`边界被${N.name}突破`):(h[Dt]*=.84,h[K]*=.92,p[O]=`对${t[Y].name}的进攻受挫`)}else if(s()<N.aggression*.035){const Ct=d[T(O,Y)]-.055;E(O,Y,Ct,Ct<-.26?-1:0)}}}),_>=b){const N=Tt.smoothstep(_,b,y);for(let O=0;O<a;O++){const Q=l[O];Q<0||t[Q].highDimensional&&_>=t[Q].ascensionAt||(h[O]-=.004+N*.052,(h[O]<=.035||_>=y)&&(l[O]=-1,h[O]=0,p[Q]=x))}}const V=new Uint16Array(o),G=new Float32Array(o);for(let N=0;N<a;N++){const O=l[N];O<0||(V[O]++,G[O]+=h[N])}const W=new Int8Array(o),$=new Uint8Array(o),k=new Uint8Array(o);for(let N=0;N<o;N++)W[N]=Math.sign(V[N]-v[N]),$[N]=f[N]&&V[N]>0?1:0,k[N]=t[N].highDimensional&&_>=t[N].ascensionAt?1:0,v[N]=V[N];r.snapshots.push({time:_,owners:l.slice(),counts:V,populations:G,trends:W,active:$,ascended:k,relations:m.slice(),relationScores:d.slice(),causes:p.slice()})}}function K_(n,t){if(!n?.snapshots.length)return null;const e=n,i=Tt.clamp(Math.floor((t-e.start)/e.step),0,e.snapshots.length-1);return e.snapshots[i]}function Z_(n,t,e,i){let r=1,s=1/0;const a=[],o=e[t];return i.forEach(c=>{if(n<c.impactAt||o?.highDimensional&&c.impactAt>=o.ascensionAt)return;const l=c.civilizationImpacts.find(h=>h.speciesIndex===t);l&&(r*=1-l.lossFraction,l.collapse&&(s=Math.min(s,c.impactAt)),a.push(c.label))}),{capacityFactor:r,collapsedAt:s,lossFraction:1-r,causes:a}}function J_(n,t,e,i){return e.map((r,s)=>{const a=Z_(n,s,e,i),o=!!t?.active[s],c=!!t?.ascended[s]&&o,l=[],h=[];return e.forEach((f,d)=>{if(d===s||!t?.active[d])return;const m=t.relations[s*e.length+d];m>0&&l.push(f.name),m<0&&h.push(f.name)}),{alive:o,ascended:c,count:t?.counts[s]||0,trend:t?.trends[s]||0,eventState:a,friendlyNames:l,conflictNames:h}})}function Q_(n,t,e){if(!n)return null;let i=null,r=-1;for(let s=0;s<e;s++)for(let a=s+1;a<e;a++){const o=t[s],c=t[a];if(!o?.alive||!c?.alive||o.ascended||c.ascended)continue;const l=n.relations[s*e+a];if(l===0)continue;const f=Math.abs(n.relationScores[s*e+a])+(l<0?2:0);f<=r||(r=f,i={speciesA:s,speciesB:a,relationship:l<0?"conflict":"coexistence"})}return i}const Qt=n=>document.querySelector(n);function uh(n){const t=n.cosmicFate;Qt("#universe-id").textContent=`#${n.seed}`,Qt("#explore-id").textContent=`#${n.seed}`,Qt("#speed-value").textContent=`${n.speed.toFixed(2)} × 现实宇宙`,Qt("#gravity-value").textContent=`${n.gravity.toFixed(2)} × 现实宇宙`,Qt("#fine-structure-value").textContent=`${n.fineStructure.toFixed(3)} × 现实宇宙`,Qt("#mass-ratio-value").textContent=`${n.massRatio.toFixed(3)} × 现实宇宙`,Qt("#expansion-value").textContent=`${n.expansionRate.toFixed(2)} × 现实宇宙`,Qt("#dark-energy-value").textContent=`${(n.darkEnergyDensity*100).toFixed(1)}%`,Qt("#fluctuation-value").textContent=`${n.primordialFluctuation.toFixed(2)} × 现实宇宙`,Qt("#cmb-value").textContent=`${n.cmbTemperature.toFixed(2)} K`,Qt("#elements-value").textContent=`${n.elements} 种`,Qt("#stars-value").textContent=U_(n.stars),Qt("#life-probability-value").textContent=L_(n.lifeProbability),Qt("#civilizations-value").textContent=I_(n.civilizations),Qt("#galaxy-type-value").textContent=yo[n.galaxyType],Qt("#arm-count-value").textContent=D_(n.galaxyType,n.armCount),Qt("#black-hole-value").textContent=n.hasCentralBlackHole?"存在":"未形成",Qt("#nucleus-value").textContent=n.hasCentralBlackHole?n.activeNucleus?"活动 · 吸积中":"宁静":"不适用",Qt("#stellar-window-value").textContent=t.outcomeExponent<=n.lastStarDeathExponent?"结局前未抵达":`约 10^${n.lastStarDeathExponent.toFixed(1)} 年`,Qt("#galaxy-hue-value").textContent=P_(n.hue),Qt("#evaporation-value").textContent=t.outcomeExponent<n.blackHoleEvaporationExponent?"结局前未抵达":`约 10^${n.blackHoleEvaporationExponent} 年`,Qt("#dark-energy-model-value").textContent=t.modelLabel,Qt("#dark-energy-model-value").title=t.modelDescription,Qt("#dark-energy-eos-value").textContent=`w₀ ${t.w0.toFixed(2)} · wₐ ${t.wa.toFixed(2)}`,Qt("#vacuum-value").textContent=T_(t),Qt("#lifetime-value").textContent=`${t.label} · ${b_(t)}`,Qt("#timeline-stellar-label").textContent=t.outcomeExponent<=n.lastStarDeathExponent?"暗能量分流":"恒星熄灭",Qt("#timeline-late-label").textContent=t.type==="heat-death"?"黑洞时代":"临界阶段",Qt("#timeline-final-label").textContent=t.shortLabel,Qt("#cosmic-timeline").setAttribute("aria-label",`从大爆炸到${t.label}的宇宙时间`),Qt("#universe-note").textContent=cc[n.seedValue%cc.length],Qt("#galaxy-name").textContent=`${hc[n.seedValue%hc.length]}星系`;const e=(8+n.stars*4.7).toFixed(1);Qt("#galaxy-meta").textContent=`${yo[n.galaxyType]} · 直径 ${e} 万光年`}const je=n=>document.querySelector(n);let _c="",xc=null;function t0(n){je("#cosmic-timeline").value=n.position,je("#time-progress").style.width=`${n.position/10}%`,je("#timeline-value").textContent=n.label,je("#era-number").textContent=String(n.eraIndex+1).padStart(2,"0"),je("#era-name").textContent=n.era.name,je("#cosmic-time").textContent=n.label.replace("T+",""),je("#era-description").textContent=n.era.description,je(".explorer-title").style.setProperty("--cosmic-opacity",n.galaxyIdentityOpacity.toFixed(3))}function e0({position:n,simulationState:t,runtimeState:e,civilizationData:i}){e.forEach((a,o)=>{const c=i[o],l=document.querySelector(`[data-species="${o}"]`);if(!l)return;l.style.opacity=a.alive?"1":".18",l.classList.toggle("is-impacted",a.alive&&a.eventState.causes.length>0),l.classList.toggle("is-ascended",a.ascended);const h=[];t?.causes[o]&&h.push(t.causes[o]),a.friendlyNames.length&&h.push(`与 ${a.friendlyNames.join("、")} 友好交流`),a.conflictNames.length&&h.push(`与 ${a.conflictNames.join("、")} 冲突`),a.eventState.causes.length&&h.push(`受 ${a.eventState.causes.join("、")} 影响`),l.title=a.ascended?"1% 概率的高维转化：已脱离普通物质宿主":h.join("；"),l.querySelector("b").textContent=a.alive?a.ascended?"超维存续":`${a.count} 域${a.trend>0?" ↑":a.trend<0?" ↓":""}`:n<c.birth?"未诞生":"衰亡"});const r=e.filter(a=>a.alive).length,s=e.reduce((a,o)=>a+(o.alive&&!o.ascended?o.count:0),0);je("#civilization-panel").style.setProperty("--cosmic-opacity",r>0?"1":"0"),je("#civilization-summary").textContent=r>0?`${r} 种 · ${s} 域`:"尚未出现"}function n0(n,t=!1){if(n.key===_c&&!t)return;_c=n.key,je("#event-year").textContent=n.time,je("#event-text").textContent=n.text;const e=je("#event-feed");e.classList.remove("is-visible"),requestAnimationFrame(()=>e.classList.add("is-visible")),clearTimeout(xc),xc=setTimeout(()=>e.classList.remove("is-visible"),3200)}let bo=null;const i0=n=>document.querySelector(n);function r0(){bo=null}function s0(n,t){if(!n||n===bo)return;bo=n;const e=i0("#civilization-legend"),i=t.length,r=new Map([...e.querySelectorAll(".civilization-item")].map(y=>[Number(y.dataset.species),y]));e.replaceChildren();const s=Int16Array.from({length:i},(y,x)=>x),a=y=>{let x=y;for(;s[x]!==x;)x=s[x];for(;s[y]!==y;){const T=s[y];s[y]=x,y=T}return x},o=(y,x)=>{const T=a(y),E=a(x);T!==E&&(s[Math.max(T,E)]=Math.min(T,E))};for(let y=0;y<i;y++)if(!(!n.active[y]||n.ascended[y]))for(let x=y+1;x<i;x++){if(!n.active[x]||n.ascended[x])continue;const T=y*i+x;n.relations[T]>0&&n.relationScores[T]>=.52&&o(y,x)}const c=new Map,l=[],h=[];for(let y=0;y<i;y++){if(!n.active[y]){l.push(y);continue}if(n.ascended[y]){h.push(y);continue}const x=a(y);c.has(x)||c.set(x,[]),c.get(x).push(y)}const f=[...c.values()],d=y=>y.reduce((x,T)=>x+n.counts[T],0),m=(y,x)=>{let T={kind:"neutral",state:0,strength:0};return y.forEach(E=>x.forEach(w=>{const R=E*i+w,_=n.relations[R],M=Math.abs(n.relationScores[R]);_!==0&&M>T.strength&&(T={kind:_<0?"conflict":"friendly",state:_,strength:M})})),T};f.sort((y,x)=>d(x)-d(y));const g=f.length?[f.shift()]:[];for(;f.length;){const y=g[g.length-1];let x=0,T=-1;f.forEach((E,w)=>{const R=m(y,E).strength;R>T&&(T=R,x=w)}),g.push(f.splice(x,1)[0])}const v={conflict:'<svg viewBox="0 0 16 16" aria-hidden="true"><path d="M3 3l10 10M13 3L3 13"/><path d="M2 5l3-3M11 14l3-3"/></svg>',friendly:'<svg viewBox="0 0 16 16" aria-hidden="true"><circle cx="6" cy="8" r="3.5"/><circle cx="10" cy="8" r="3.5"/></svg>',neutral:'<svg viewBox="0 0 16 16" aria-hidden="true"><path d="M2.5 8h3M10.5 8h3"/><circle cx="8" cy="8" r="1.25"/></svg>'},p=y=>y==="conflict"?"冲突":y==="friendly"?"友好":"中立",u=y=>{const x=y.slice().sort((T,E)=>n.counts[E]-n.counts[T])[0];return`#${t[x].color.toString(16).padStart(6,"0")}`},b=g.map((y,x)=>({members:y,number:String(x+1).padStart(2,"0"),accent:u(y)}));if(b.forEach((y,x)=>{const T=document.createElement("section");T.className="faction-block",T.style.setProperty("--faction",y.accent),T.setAttribute("aria-label",`阵营 ${y.number}`);const E=document.createElement("div");E.className="faction-header";const w=document.createElement("span");w.className="faction-identity",w.textContent=y.number,w.setAttribute("aria-hidden","true"),E.appendChild(w);const R=document.createElement("div");R.className="faction-relations";const _={conflict:[],friendly:[],neutral:[]};b.forEach((P,D)=>{if(D===x)return;const I=m(y.members,P.members);_[I.kind].push(P)}),["conflict","friendly","neutral"].forEach(P=>{const D=_[P];if(!D.length)return;const I=document.createElement("span");I.className=`faction-relation is-${P}`;const V=`阵营 ${y.number}${p(P)}：阵营 ${D.map(G=>G.number).join("、")}`;I.setAttribute("role","img"),I.setAttribute("aria-label",V),I.title=V,I.innerHTML=`${v[P]}<span>${D.map(G=>`<b style="--target-faction:${G.accent}">${G.number}</b>`).join("")}</span>`,R.appendChild(I)}),E.appendChild(R),T.appendChild(E);const M=document.createElement("div");M.className="faction-members",y.members.slice().sort((P,D)=>n.counts[D]-n.counts[P]||P-D).forEach(P=>{const D=r.get(P);D&&M.appendChild(D)}),T.appendChild(M),e.appendChild(T)}),h.length){const y=document.createElement("section");y.className="faction-block is-transcendent",y.setAttribute("aria-label","升维种群"),y.innerHTML='<div class="faction-header"><span class="faction-identity" aria-hidden="true">◇</span></div>';const x=document.createElement("div");x.className="faction-members",h.forEach(T=>{const E=r.get(T);E&&x.appendChild(E)}),y.appendChild(x),e.appendChild(y)}if(l.length){const y=document.createElement("div");y.className="faction-inactive",l.forEach(x=>{const T=r.get(x);T&&y.appendChild(T)}),e.appendChild(y)}}const Ut=n=>document.querySelector(n),$o=Ut("#universe"),$n=window.matchMedia("(prefers-reduced-motion: reduce)").matches,Tn=new Jg({canvas:$o,antialias:!0,alpha:!1,powerPreference:"high-performance"});Tn.setPixelRatio(Math.min(devicePixelRatio,2));Tn.setSize(innerWidth,innerHeight);Tn.setClearColor(328968,1);Tn.outputColorSpace=De;Tn.toneMapping=Tc;Tn.toneMappingExposure=1.15;const Ws=new nd;Ws.fog=new Ho(328968,.018);const gn=new en(42,innerWidth/innerHeight,.1,200);gn.position.set(0,.5,32);const an=new t_(gn,$o);an.enableDamping=!0;an.dampingFactor=.045;an.enablePan=!1;an.minDistance=8;an.maxDistance=46;an.autoRotate=!1;an.enabled=!1;let Ee=new ze,Ae=new ze,Mn=new ze,Zn=new ze,Ei=new ze,Mi=new ze,ti=new ze;Ws.add(Ee,Ae,Mn,Zn,Ei,Mi,ti);let Lt=null,on="generator",Be=null,Qi=new Ot(0,0),ys=new Ot(0,0),To=new fd;To.params.Points.threshold=.12;let ar=null,Dr=[],Ve=[],fi=[],Lr=null,Fs=[],Ao=null,Mr=null,wo=null,Ro=null,Yi=null,Rs=null,dh=[],Ir=null,tr=null,br=null,fh=null,ph=null,Ns=null,Co=null,mh=null,ji=null,Po=null,tn=null,In=null,be=0,En=!1,gh=1,vc=performance.now(),bi=[];function pi(n){n.traverse(t=>{t.geometry&&t.geometry.dispose(),t.material&&(Array.isArray(t.material)?t.material:[t.material]).forEach(i=>i.dispose())}),n.clear()}function _h(){pi(Ee);const n=bn(Lt.seed),t=Math.min(10500,Math.floor(5200+Lt.stars*900)),e=new Float32Array(t*3),i=new Float32Array(t*3),r=new Float32Array(t),s=new Bt().setHSL(Lt.hue,.55,.66),a=new Bt(16767402);for(let m=0;m<t;m++){const g=Math.pow(n(),.56)*9.2,v=n()*Math.PI*2,p=Math.acos(2*n()-1),u=Math.sin(v*Lt.armCount+g)*.48;e[m*3]=g*Math.sin(p)*Math.cos(v)+u,e[m*3+1]=g*Math.cos(p)*.82,e[m*3+2]=g*Math.sin(p)*Math.sin(v);const b=s.clone().lerp(a,Math.pow(n(),2.3)),y=.45+n()*.7;i[m*3]=b.r*y,i[m*3+1]=b.g*y,i[m*3+2]=b.b*y,r[m]=n()}const o=new se;o.setAttribute("position",new ee(e,3)),o.setAttribute("color",new ee(i,3)),o.setAttribute("aSize",new ee(r,1));const c=new mn({size:.065,map:Ke(),alphaTest:.015,vertexColors:!0,transparent:!0,opacity:.86,depthWrite:!1,blending:jt}),l=new Sn(o,c);Ee.add(l);const h=new Vo(9.9,3),f=new Yc(new ld(h),new Kn({color:12175324,transparent:!0,opacity:.032}));Ee.add(f);const d=new sn(new Wo(10.7,.007,3,220),new Br({color:14221151,transparent:!0,opacity:.25}));d.rotation.set(1.24,.18,.4),Ee.add(d),Ee.rotation.set(.15,-.3,-.08),Ee.scale.setScalar(.01),Be={type:"birth",start:performance.now(),duration:$n?1:1300}}function xh(){pi(Ae),pi(Mn),pi(Zn),pi(Ei),pi(Mi),pi(ti),Dr=[],Ve=[],fi=[],Lr=null;const n=bn(Lt.seed,91),t=17e3,e=new Float32Array(t*3),i=new Float32Array(t*3);Po=new Float32Array(t);const r=new Bt(16770996),s=new Bt().setHSL(Lt.hue,.65,.56),a=rh(Lt),o=Math.min(a,nh(4e10,Lt)),c=Array.from({length:4+Lt.seedValue%3},(v,p)=>({x:Wt(n,-8,8)+p*.35,y:Wt(n,-.6,.6),z:Wt(n,-6,6),spread:Wt(n,1.1,3.1)}));for(let v=0;v<t;v++){let p=0,u=0,b=0;if(Lt.galaxyType===0){const E=n();if(E<.2)p=te(n)*3.7,b=te(n)*.42,u=te(n)*.18;else if(E<.29)p=te(n)*1.7,b=te(n)*1.7,u=te(n)*.65;else{const w=3+Math.pow(n(),.72)*11,_=v%2*Math.PI+(w-3)*.46+te(n)*(.12+w*.012),M=te(n)*(.18+w*.025);p=Math.cos(_)*w+M,b=Math.sin(_)*w+M,u=te(n)*(.12+w*.018)}}else if(Lt.galaxyType===1){const E=7+Lt.seedValue%5,w=Math.pow(n(),.68)*14,R=v%E,_=R/E*Math.PI*2+w*.31+te(n)*(.26+w*.018),M=1+Math.sin(w*2.7+R*1.9)*.11;p=Math.cos(_)*w*M+te(n)*.25,b=Math.sin(_)*w*M+te(n)*.25,u=te(n)*(.18+w*.028)}else if(Lt.galaxyType===2){const E=n(),w=n()*Math.PI*2;let R;E<.72?R=8.4+te(n)*.78:E<.9?R=Math.abs(te(n))*2.1:R=4+n()*8,p=Math.cos(w)*R*1.15+te(n)*.13,b=Math.sin(w)*R+te(n)*.13,u=te(n)*(.18+R*.012)}else if(Lt.galaxyType===3){const E=Math.pow(n(),.38);p=te(n)*5.5*E,u=te(n)*2.35*E,b=te(n)*3.75*E;const w=Math.hypot(p,u,b);if(w>13.5){const R=13.5/w;p*=R,u*=R,b*=R}}else if(n()<.13){const E=Wt(n,-12,12);p=E,b=Math.sin(E*.24)*2.7+te(n)*.7,u=te(n)*.55}else{const E=c[Math.floor(n()*c.length)];p=E.x+te(n)*E.spread,u=E.y+te(n)*E.spread*.38,b=E.z+te(n)*E.spread*.72}e[v*3]=p,e[v*3+1]=u,e[v*3+2]=b;const y=Math.hypot(p,u,b),x=r.clone().lerp(s,Math.min(1,y/12)),T=.55+n()*.85;i[v*3]=x.r*T,i[v*3+1]=x.g*T,i[v*3+2]=x.b*T,Po[v]=o+Math.pow(n(),1.9)*(a-o)}Co=e.slice(),mh=i.slice(),ji=G_(Co,Lt);const l=new se;l.setAttribute("position",new ee(e,3)),l.setAttribute("color",new ee(i,3));const h=new Sn(l,new mn({size:.09,map:Ke(),alphaTest:.015,vertexColors:!0,transparent:!0,opacity:.9,depthWrite:!1,blending:jt}));Ae.add(h),ar=h;const d=[{scale:4.3,opacity:.32},{scale:3.25,opacity:.22},{scale:1.55,opacity:.055},{scale:6.4,opacity:.46},{scale:1.2,opacity:.035}][Lt.galaxyType],m=new ve(new ge({map:nn(),color:16768164,transparent:!0,opacity:0,depthWrite:!1,blending:jt}));if(m.scale.set(d.scale,d.scale,1),m.userData.isCoreGlow=!0,m.userData.profile=d,Ae.add(m),Lt.activeNucleus){const v=new ve(new ge({map:nn(),color:14281983,transparent:!0,opacity:0,depthWrite:!1,blending:jt}));v.scale.set(.72,.72,1),v.userData.isAgnGlow=!0,Ae.add(v);const p=new se().setFromPoints([new U(0,-2.6,0),new U(0,2.6,0)]),u=new Ji(p,new Kn({color:11065599,transparent:!0,opacity:0,depthWrite:!1,blending:jt}));u.rotation.z=.3,u.userData.isAgnJet=!0,Ae.add(u)}const g=[.72,.92,.62,.35,.78];Ae.rotation.set(g[Lt.galaxyType],-.25+Lt.galaxyType*.06,.06),Ae.visible=!1,a0(e),c0(),o0(e),j_({universe:Lt,civilizationData:Ve,civilizationSimulation:Lr,cosmicEvents:bi})}function a0(n){const t=bn(Lt.seed,771);Fs=[];const e=4800,i=new Float32Array(e*3),r=new Float32Array(e*3);Mr=new Float32Array(e*3),wo=new Float32Array(e);const s=new Bt(16777215),a=new Bt(16739624);for(let E=0;E<e;E++){const w=t()*Math.PI*2,R=Wt(t,-1,1),_=Math.sqrt(1-R*R),M=Math.cbrt(t());Mr[E*3]=Math.cos(w)*_*M,Mr[E*3+1]=R*M,Mr[E*3+2]=Math.sin(w)*_*M,wo[E]=Tt.clamp(1+te(t)*.035*Lt.primordialFluctuation,.82,1.18);const P=s.clone().lerp(a,Math.pow(t(),.7));r[E*3]=P.r,r[E*3+1]=P.g,r[E*3+2]=P.b}const o=new se;o.setAttribute("position",new ee(i,3)),o.setAttribute("color",new ee(r,3)),Ao=new Sn(o,new mn({size:.24,map:Ke(),alphaTest:.012,vertexColors:!0,transparent:!0,opacity:1,depthWrite:!1,blending:jt})),Mn.add(Ao);const c=340,l=new Float32Array(c*6);Yi=new Float32Array(c*4);for(let E=0;E<c;E++){const w=t()*Math.PI*2,R=Math.acos(2*t()-1);Yi[E*4]=Math.sin(R)*Math.cos(w),Yi[E*4+1]=Math.cos(R),Yi[E*4+2]=Math.sin(R)*Math.sin(w),Yi[E*4+3]=.45+t()*.75}const h=new se;h.setAttribute("position",new ee(l,3)),Ro=new Yc(h,new Kn({color:16762253,transparent:!0,opacity:.8,blending:jt,depthWrite:!1})),Mn.add(Ro),Rs=new ve(new ge({map:nn(),color:16777215,transparent:!0,opacity:1,depthTest:!1,depthWrite:!1,blending:jt})),Rs.scale.setScalar(.2),Mn.add(Rs),dh=[16774367,16751444,8962047].map((E,w)=>{const R=new ve(new ge({map:Eo(),color:E,transparent:!0,opacity:0,depthTest:!1,depthWrite:!1,blending:jt}));return R.userData.offset=w*.13,Mn.add(R),R});const f=1350,d=new Float32Array(f*3),m=new Float32Array(f*3);tn=new Float32Array(f*3),In={sourceIndices:new Uint16Array(f),axes:new Float32Array(f*3),orbitRates:new Float32Array(f),escapeAt:new Float32Array(f),speeds:new Float32Array(f),fates:new Uint8Array(f)};const g=Tt.clamp((Lt.gravity-.5)*6+(Lt.galaxyType===3?4:0),0,12);for(let E=0;E<f;E++){const w=Math.floor(t()*n.length/3),R=w*3;In.sourceIndices[E]=w;const _=n[R],M=n[R+1],P=n[R+2];d[E*3]=tn[E*3]=_,d[E*3+1]=tn[E*3+1]=M,d[E*3+2]=tn[E*3+2]=P,t(),t(),t(),In.axes.set([ji.axes[R],ji.axes[R+1],ji.axes[R+2]],E*3),In.orbitRates[E]=ji.orbitRates[w];const D=t(),I=D<.82?0:D<.92?1:D<.99?2:3;In.fates[E]=I,In.escapeAt[E]=I===1?1001:(I===3?704:I===2?724:710)+g+Math.pow(t(),.68)*(I===3?28:92),In.speeds[E]=I===3?Wt(t,1.7,2.6):Wt(t,.55,1.05);const V=new Bt(t()>.28?10204889:9125426);m[E*3]=V.r,m[E*3+1]=V.g,m[E*3+2]=V.b}const v=new se;v.setAttribute("position",new ee(d,3)),v.setAttribute("color",new ee(m,3)),Ns=new Sn(v,new mn({size:.12,map:Ke(),alphaTest:.012,vertexColors:!0,transparent:!0,opacity:0,depthWrite:!1,blending:jt})),Zn.add(Ns),Zn.rotation.copy(Ae.rotation);const p=Lt.hasCentralBlackHole?9:6;for(let E=0;E<p;E++){const w=E===0&&Lt.hasCentralBlackHole,R=w?.9:Wt(t,.3,.5),_=ah({color:w?16763286:t()>.35?16758652:12179455,tilt:Wt(t,-.38,.38),phase:t()*Math.PI*2,visualScale:w?1.14:1,intensity:0}),M=new ve(new ge({map:nn(),color:7315404,transparent:!0,opacity:0,depthWrite:!1,blending:jt}));M.scale.set(1.2,1.2,1);const P=new ve(new ge({map:nn(),color:15267071,transparent:!0,opacity:0,depthWrite:!1,blending:jt}));if(P.scale.set(.2,.2,1),_.add(M,P),w)_.position.set(0,0,0);else{const D=Math.floor(t()*n.length/3)*3;_.position.set(n[D],n[D+1],n[D+2])}_.scale.setScalar(R),_.visible=!1,Object.assign(_.userData,{baseScale:R,birthAt:825+t()*34,evaporationAt:w?949:880+Math.pow(t(),.46)*64,hawkingGlow:M,finalPulse:P,spinDirection:t()<.5?-1:1}),Fs.push(_),Zn.add(_)}const u=260,b=new Float32Array(u*3),y=new Float32Array(u*3);for(let E=0;E<u;E++){const w=t()*Math.PI*2,R=Math.acos(2*t()-1),_=4+Math.pow(t(),1/3)*24;b[E*3]=Math.sin(R)*Math.cos(w)*_,b[E*3+1]=Math.cos(R)*_,b[E*3+2]=Math.sin(R)*Math.sin(w)*_;const M=new Bt().setHSL(.56+t()*.1,.28,.46+t()*.22);y[E*3]=M.r,y[E*3+1]=M.g,y[E*3+2]=M.b}const x=new se;x.setAttribute("position",new ee(b,3)),x.setAttribute("color",new ee(y,3)),fh=b.slice(),ph=y.slice(),Ir=new Sn(x,new mn({size:.11,map:Ke(),alphaTest:.01,vertexColors:!0,transparent:!0,opacity:0,depthWrite:!1,blending:jt})),Ei.add(Ir);const T=Lt.cosmicFate.type==="vacuum-decay"?13019135:Lt.cosmicFate.type==="big-rip"?8440063:16744543;tr=new sn(new ks(1,40,24),new Br({color:T,transparent:!0,opacity:0,wireframe:!0,depthWrite:!1,blending:jt})),tr.position.set(4.2,-1.4,2.6),br=new ve(new ge({map:nn(),color:T,transparent:!0,opacity:0,depthTest:!1,depthWrite:!1,blending:jt})),br.scale.set(.2,.2,1),Mi.add(tr,br),Mi.rotation.copy(Ae.rotation),Mn.visible=!1,Zn.visible=!1,Ei.visible=!1,Mi.visible=!1}function o0(n){const t=bn(Lt.seed,1447);bi=[];const e=Lt.hasCentralBlackHole?{type:"quasar-awakening",visual:"pulsar",label:"类星体短暂苏醒",message:"中心黑洞吸积率骤升，相对论喷流穿过星系核",preferCenter:!0,start:480+t()*16,duration:30,color:"#8dd9ff"}:{type:"magnetar-flare",visual:"pulsar",label:"磁星巨型耀斑",message:"磁壳重排释放高能辐射，脉冲扫过邻近恒星系",start:480+t()*16,duration:26,color:"#7dcaff"},i=[{type:"pair-instability-supernova",visual:"supernova",label:"成对不稳定超新星",message:"第一代巨星被完全撕碎，重元素云向外扩散",start:258+t()*18,duration:28,color:"#ffb36b"},{type:"young-pulsar-birth",visual:"pulsar",label:"年轻脉冲星诞生",message:"新生中子星高速自转，双极束流开始扫掠星际介质",start:302+t()*18,duration:27,color:"#68c8ff"},{type:"type-ia-supernova",visual:"supernova",label:"Ia 型超新星爆发",message:"白矮星发生热核失控，将铁族元素抛入星际空间",start:368+t()*22,duration:25,color:"#ffd08a"},{type:"gamma-ray-burst",visual:"pulsar",label:"长伽马射线暴",message:"垂死巨星坍缩，狭窄高能喷流贯穿恒星外层",start:420+t()*20,duration:24,color:"#89b9ff"},e,{type:"core-collapse-supernova",visual:"supernova",label:"核坍缩超新星",message:"恒星核心坍缩，冲击波把新合成元素送入星际云",start:518+t()*20,duration:27,color:"#ff875c"},{type:"pulsar-glitch",visual:"pulsar",label:"脉冲星自转突变",message:"中子星内部角动量重分配，脉冲节律突然跃迁",start:548+t()*18,duration:22,color:"#8ba8ff"},{type:"superluminous-supernova",visual:"supernova",label:"超亮超新星",message:"磁星引擎持续注入能量，爆发亮度超过普通超新星",start:552+t()*16,duration:26,color:"#ff6b52"},{type:"stellar-black-hole-merger",visual:"black-hole-merger",label:"双黑洞合并",message:"时空啁啾达到峰值，引力波波前穿过局部星域（形变已视觉放大）",preferCenter:!0,start:616+t()*18,duration:38,persistUntil:Math.min(845,Lt.cosmicFate.onsetAt||845),persistenceFadeDuration:24,color:"#c897ff",gasRich:t()<.38,radiatedMassFraction:Wt(t,.035,.058),recoilKms:Math.round(Wt(t,180,1180))},{type:"late-black-hole-merger",visual:"black-hole-merger",label:"孤立黑洞捕获合并",message:"漫长引力散射后完成并合，残余黑洞在阻尼振铃中反冲",preferCenter:!0,start:872+t()*18,duration:42,persistUntil:950,persistenceFadeDuration:18,color:"#9bb8ff",gasRich:!1,radiatedMassFraction:Wt(t,.028,.052),recoilKms:Math.round(Wt(t,420,1640))}].filter(c=>c.type!=="late-black-hole-merger"||Lt.cosmicFate.type==="heat-death"||Lt.cosmicFate.outcomeExponent>45),r={"pair-instability-supernova":{radius:.55,maxStars:5,sourceDim:.02,neighborDim:.96,kick:.018,civilization:.08,range:2.4},"young-pulsar-birth":{radius:.42,maxStars:2,sourceDim:.12,neighborDim:.99,kick:.01,civilization:.035,range:1.8,directional:!0,beamAngle:.12},"type-ia-supernova":{radius:.48,maxStars:4,sourceDim:.02,neighborDim:.97,kick:.012,civilization:.06,range:2.1},"gamma-ray-burst":{radius:7.5,maxStars:46,sourceDim:.025,neighborDim:.82,kick:0,civilization:.42,range:12,maxSpecies:1,directional:!0,beamAngle:.1},"quasar-awakening":{radius:8.5,maxStars:60,sourceDim:.95,neighborDim:.96,kick:0,civilization:.16,range:14,maxSpecies:2,directional:!0,beamAngle:.16},"magnetar-flare":{radius:1.1,maxStars:8,sourceDim:.82,neighborDim:.94,kick:0,civilization:.12,range:3.2,maxSpecies:1},"core-collapse-supernova":{radius:.5,maxStars:4,sourceDim:.025,neighborDim:.97,kick:.014,civilization:.06,range:2.2},"pulsar-glitch":{radius:.01,maxStars:1,sourceDim:.985,neighborDim:1,kick:0,civilization:0,range:0,maxSpecies:0},"superluminous-supernova":{radius:.62,maxStars:6,sourceDim:.02,neighborDim:.95,kick:.02,civilization:.09,range:2.8,maxSpecies:1},"stellar-black-hole-merger":{radius:.08,maxStars:1,sourceDim:.06,neighborDim:1,kick:0,civilization:0,range:0,maxSpecies:0},"late-black-hole-merger":{radius:.08,maxStars:1,sourceDim:.04,neighborDim:1,kick:0,civilization:0,range:0,maxSpecies:0}},s=(c=!1)=>{let l=Math.floor(t()*n.length/3);const h=c?2.8:6.2;for(let f=0;f<140;f++){const d=Math.floor(t()*n.length/3),m=d*3;if(Math.hypot(n[m],n[m+1],n[m+2])<h){l=d;break}}return{index:l,position:new U(n[l*3],n[l*3+1],n[l*3+2])}},a=(c,l)=>{const h=r[c.type],f=c.visual==="supernova"?.08:c.visual==="pulsar"?.46:.68,d=c.start+c.duration*f,m=[];for(let T=0;T<n.length/3;T++){const E=T*3,w=Math.hypot(n[E]-l.position.x,n[E+1]-l.position.y,n[E+2]-l.position.z);if(!(w>h.radius)){if(h.directional&&c.beamDirection){const R=new U(n[E]-l.position.x,n[E+1]-l.position.y,n[E+2]-l.position.z).normalize();if(Math.abs(R.dot(c.beamDirection))<Math.cos(h.beamAngle))continue}m.push({index:T,distance:w})}}m.sort((T,E)=>T.distance-E.distance);const g=m.slice(0,h.maxStars).map(({index:T,distance:E},w)=>{const R=T*3,_=1-Math.min(1,E/h.radius);let M=n[R]-l.position.x,P=n[R+1]-l.position.y,D=n[R+2]-l.position.z;const I=Math.hypot(M,P,D);if(I<.001){const G=t()*Math.PI*2,W=t()*2-1,$=Math.sqrt(1-W*W);M=Math.cos(G)*$,P=W,D=Math.sin(G)*$}else M/=I,P/=I,D/=I;const V=h.kick*(.2+_*.8)*(.72+t()*.5);return{index:T,dimFactor:w===0?h.sourceDim:1-(1-h.neighborDim)*_,kick:[M*V,P*V,D*V]}}),v=Ve.map((T,E)=>({species:T,speciesIndex:E,distance:T.home.distanceTo(l.position)})).filter(({species:T,distance:E})=>{if(!(d>=T.birth&&d<T.extinction&&E<=h.range)||T.highDimensional&&d>=T.ascensionAt)return!1;if(!h.directional||!c.beamDirection)return!0;const w=T.home.clone().sub(l.position).normalize();return Math.abs(w.dot(c.beamDirection))>=Math.cos(h.beamAngle)}).sort((T,E)=>T.distance-E.distance),p=Math.min(h.maxSpecies||1,v.length),u=v.slice(0,p).map(({species:T,speciesIndex:E,distance:w})=>{const R=Math.max(.08,1-w/h.range),_=Tt.clamp(h.civilization*(.62+R*.48)*(.84+t()*.3),.03,.58),M=Math.floor(T.maxColonies*Tt.smoothstep(d,T.birth,T.birth+95)),P=M>0&&M<=8&&_>.3&&t()<.42;return{speciesIndex:E,lossFraction:P?1:_,collapse:P}}),b={"pair-instability-supernova":"爆发源完全解体且没有致密残骸","type-ia-supernova":"白矮星被热核爆炸完全摧毁","core-collapse-supernova":"坍缩核心留下中子星或恒星级黑洞","superluminous-supernova":"恒星外层被大规模抛射，中心结局仍不确定"},y=c.visual==="black-hole-merger"?`约 ${(c.radiatedMassFraction*100).toFixed(1)}% 总质量以引力波带走，残余黑洞以约 ${c.recoilKms} km/s 反冲${c.gasRich?"，周围气体受热形成短暂余辉":"；真空环境中没有超新星式爆炸"}`:c.type==="pulsar-glitch"?"自转频率发生微小跃变，没有可见的大规模破坏":c.visual==="pulsar"?`${g.length} 个位于辐射束或近场内的恒星系受到影响`:`${b[c.type]||"爆发源发生结构性改变"}，${Math.max(0,g.length-1)} 个邻近恒星系受冲击`,x=u.length?u.map(T=>{const E=Ve[T.speciesIndex].name;return T.collapse?`${E} 灭绝`:`${E} 仿真疆域损失约 ${Math.round(T.lossFraction*100)}%`}).join("，"):"未波及已知文明";return{impactAt:d,impactPhase:f,starImpacts:g,civilizationImpacts:u,outcome:`${y}；${x}`}},o=(c,l,h)=>{if(c.visual!=="black-hole-merger")return null;const f=c.type==="late-black-hole-merger"?7.2:8.8,d=[];for(let x=0;x<n.length/3;x++){const T=x*3,E=n[T]-l.position.x,w=n[T+1]-l.position.y,R=n[T+2]-l.position.z,_=Math.hypot(E,w,R);_>.12&&_<=f&&d.push({index:x,dx:E,dy:w,dz:R,distance:_})}const m=bn(Lt.seed,9107+h*97),g=Math.min(1800,d.length),v=d.length/Math.max(1,g),p=new Uint16Array(g),u=new Float32Array(g),b=new Float32Array(g*3),y=new Float32Array(g);for(let x=0;x<g;x++){const T=x*v,E=d[Math.min(d.length-1,Math.floor(T+m()*v))],w=1/E.distance,R=E.dx*w;E.dy*w;const _=E.dz*w;let M=-_,P=0,D=R;const I=Math.hypot(M,P,D);I<.04?(M=1,P=0,D=0):(M/=I,P/=I,D/=I),p[x]=E.index,u[x]=E.distance,b.set([M,P,D],x*3),y[x]=Math.cos(Math.atan2(_,R)*2)*(.72+m()*.28)}return{waveRadius:f,indices:p,distances:u,transverse:b,polarities:y}};i.forEach((c,l)=>{const h=new ze,f=s(c.preferCenter);if(h.position.copy(f.position),h.visible=!1,ti.add(h),r[c.type].directional&&(c.beamDirection=new U(te(t),te(t),te(t)).normalize(),h.quaternion.setFromUnitVectors(new U(0,1,0),c.beamDirection)),c.visual==="supernova"){const p=new ve(new ge({map:nn(),color:16777215,transparent:!0,opacity:0,depthWrite:!1,blending:jt})),u=new ve(new ge({map:nn(),color:16756067,transparent:!0,opacity:0,depthWrite:!1,blending:jt})),b=new ve(new ge({map:Ke(),color:11458815,transparent:!0,opacity:0,depthWrite:!1,blending:jt}));b.scale.set(.16,.16,1);const y=620,x=new Float32Array(y*3),T=new Float32Array(y*3),E=new Float32Array(y*3),w=new Float32Array(y),R=new Float32Array(y),_=new Bt(16773319),M=new Bt(16730930);for(let N=0;N<y;N++){const O=t()*Math.PI*2,Q=Math.acos(2*t()-1),ut=1+Math.sin(O*5+Q*3)*.18+(t()-.5)*.24,mt=new U(Math.sin(Q)*Math.cos(O)*ut,Math.cos(Q)*(1.08+t()*.34),Math.sin(Q)*Math.sin(O)*ut).normalize();E.set([mt.x,mt.y,mt.z],N*3),w[N]=.38+Math.pow(t(),.48)*1.45+Math.abs(mt.y)*.22,R[N]=Math.pow(t(),2.4)*.22;const Pt=_.clone().lerp(M,Math.pow(t(),.52));T.set([Pt.r,Pt.g,Pt.b],N*3)}const P=new se;P.setAttribute("position",new ee(x,3)),P.setAttribute("color",new ee(T,3));const D=new Sn(P,new mn({size:.1,map:Ke(),alphaTest:.008,vertexColors:!0,transparent:!0,opacity:0,depthWrite:!1,blending:jt})),I=280,V=new Float32Array(I*3),G=new Float32Array(I*3),W=new Float32Array(I);for(let N=0;N<I;N++){const O=t()*Math.PI*2,Q=2*t()-1,ut=Math.sqrt(1-Q*Q);G.set([Math.cos(O)*ut,Q,Math.sin(O)*ut],N*3),W[N]=t()*Math.PI*2}const $=new se;$.setAttribute("position",new ee(V,3));const k=new Sn($,new mn({color:16766112,size:.072,map:Ke(),alphaTest:.01,transparent:!0,opacity:0,depthWrite:!1,blending:jt}));h.add(u,p,D,k,b),h.userData.effect={innerFlash:p,photosphere:u,remnant:b,ejecta:D,ejectaDirections:E,ejectaVelocity:w,ejectaDelay:R,shell:k,shellDirections:G,shellNoise:W}}else if(c.visual==="pulsar"){const p=new ve(new ge({map:Ke(),color:16055295,transparent:!0,opacity:0,depthWrite:!1,blending:jt})),u=new ve(new ge({map:nn(),color:4962815,transparent:!0,opacity:0,depthWrite:!1,blending:jt})),b=new ve(new ge({map:nn(),color:1472184,transparent:!0,opacity:0,depthWrite:!1,blending:jt,rotation:t()*Math.PI})),y=new ve(new ge({map:nn(),color:13233663,transparent:!0,opacity:0,depthWrite:!1,blending:jt}));p.scale.set(.18,.18,1),b.scale.set(1.45,.58,1);const x=new ze;x.rotation.z=.58+t()*.32;const T=420,E=new Float32Array(T*3),w=new Float32Array(T*3);for(let D=0;D<T;D++){const I=D%2?1:-1,V=.1+Math.pow(t(),.66)*2.6,G=.012+V*.014,W=t()*Math.PI*2;E[D*3]=Math.cos(W)*G*t(),E[D*3+1]=I*V,E[D*3+2]=Math.sin(W)*G*t();const $=.35+Math.pow(1-V/2.8,.45)*.65;w.set([.38*$,.76*$,$],D*3)}const R=new se;R.setAttribute("position",new ee(E,3)),R.setAttribute("color",new ee(w,3));const _=new Sn(R,new mn({size:.09,map:Ke(),alphaTest:.008,vertexColors:!0,transparent:!0,opacity:0,depthWrite:!1,blending:jt}));x.add(_);const M=[];for(let D=0;D<4;D++){const I=[],V=.5+D*.18;for(let W=0;W<=80;W++){const $=W/80*Math.PI*2;I.push(new U(Math.cos($)*V,Math.sin($)*V*.34,Math.sin($*2)*.08))}const G=new Ji(new se().setFromPoints(I),new Kn({color:7524351,transparent:!0,opacity:0,depthWrite:!1,blending:jt}));G.rotation.set(t()*Math.PI,t()*Math.PI,t()*Math.PI),M.push(G),x.add(G)}const P=[];for(let D=0;D<8;D++){const I=new ve(new ge({map:Ke(),color:10214911,transparent:!0,opacity:0,depthWrite:!1,blending:jt}));I.scale.set(.11,.11,1),I.userData.offset=D/8,I.userData.side=D%2?1:-1,P.push(I),x.add(I)}h.add(b,u,y,p,x),h.userData.effect={core:p,halo:u,nebula:b,sweepGlow:y,rotor:x,jets:_,fieldLines:M,knots:P}}else{const p=(mt,Pt)=>{const Dt=ah({color:mt,tilt:Wt(t,-.28,.28),phase:t()*Math.PI*2,visualScale:1.08});return Dt.userData.spinDirection=Pt,Dt},u=new ze;u.rotation.set(.76,.18,.24);const b=p(16759408,1),y=p(10999807,-1),x=p(16767405,1);x.scale.setScalar(1.24),x.visible=!1;const T=mt=>{const Pt=new Float32Array(252),Dt=new se;return Dt.setAttribute("position",new ee(Pt,3)),new Ji(Dt,new Kn({color:mt,transparent:!0,opacity:0,depthWrite:!1,blending:jt}))},E=T(16751445),w=T(7979007);u.add(E,w,b,y,x);const R=new ve(new ge({map:nn(),color:c.gasRich?16769717:14478079,transparent:!0,opacity:0,depthTest:!1,depthWrite:!1,blending:jt})),_=new ve(new ge({map:Eo(),color:16757871,transparent:!0,opacity:0,depthTest:!1,depthWrite:!1,blending:jt}));_.visible=c.gasRich;const M=[10209535,13810175,7976959].map(mt=>new ve(new ge({map:Eo(),color:mt,transparent:!0,opacity:0,depthTest:!1,depthWrite:!1,blending:jt}))),P=[];for(let mt=0;mt<6;mt++){const Pt=[];for(let K=0;K<160;K++){const Y=K/160*Math.PI*2,dt=1+Math.cos(Y*2+mt*.7)*.065;Pt.push(new U(Math.cos(Y)*dt,Math.sin(Y)*dt,Math.sin(Y*2+mt)*.055))}const Dt=new od(new se().setFromPoints(Pt),new Kn({color:mt%3===1?14205951:9422591,transparent:!0,opacity:0,depthTest:!1,depthWrite:!1,blending:jt}));Dt.rotation.set(.34+mt*.47,.2+mt*.39,mt*.76),P.push(Dt),h.add(Dt)}const D=520,I=new Float32Array(D*3),V=new Float32Array(D*3),G=new Float32Array(D*3),W=new Bt(7979007),$=new Bt(14732287);for(let mt=0;mt<D;mt++){const Pt=t()*Math.PI*2,Dt=Wt(t,-1,1),K=Math.sqrt(1-Dt*Dt);V.set([Math.cos(Pt)*K,Dt,Math.sin(Pt)*K],mt*3);const Y=W.clone().lerp($,t());G.set([Y.r,Y.g,Y.b],mt*3)}const k=new se;k.setAttribute("position",new ee(I,3)),k.setAttribute("color",new ee(G,3));const N=new Sn(k,new mn({size:.075,map:Ke(),alphaTest:.008,vertexColors:!0,transparent:!0,opacity:0,depthTest:!1,depthWrite:!1,blending:jt})),O=new se;O.setAttribute("position",new ee(new Float32Array(6),3));const Q=new Ji(O,new Kn({color:16766122,transparent:!0,opacity:0,depthWrite:!1,blending:jt})),ut=new U(te(t),te(t)*.45,te(t)).normalize();h.add(N,...M,_,u,R,Q),h.userData.effect={orbitalPlane:u,holeA:b,holeB:y,remnantHole:x,trailA:E,trailB:w,mergerGlow:R,gasEcho:_,waveHalos:M,wavefronts:P,waveDust:N,waveDirections:V,recoilTrail:Q,recoilVector:ut,gasRich:c.gasRich}}const m=a(c,f),g=o(c,f,l),v=c.visual==="black-hole-merger"?W_(n,f.position,{seedValue:Lt.seedValue,eventIndex:l}):null;bi.push({...c,...m,waveSamples:g,gravityField:v,group:h,sourceIndex:f.index,id:`${c.type}-${l}-${Lt.seed}`,label:c.label})}),ti.rotation.copy(Ae.rotation),ti.visible=!1,l0()}function l0(){const n=Ut("#cosmic-event-markers");n.innerHTML="",bi.forEach(t=>{const e=document.createElement("button");e.type="button",e.className="event-marker",e.style.left=`${t.start/10}%`,e.style.setProperty("--event-color",t.color),e.setAttribute("aria-label",`${t.label}，${ih(t.start,Lt)}；${t.outcome}`),e.title=t.outcome,e.addEventListener("click",()=>{En=!1,Ut("#toggle-time").textContent="▶";const i=t.visual==="supernova"?.14:t.visual==="black-hole-merger"?.76:.54;kr(t.start+t.duration*i,!0)}),n.appendChild(e)})}function c0(){r0();const n=bn(Lt.seed,410),t=Lt.speciesCount,e=tn.length/3,i=Math.min(720,e),r=new Uint16Array(i),s=new Float32Array(i*3),a=e/i;for(let l=0;l<i;l++){const h=Math.min(e-1,Math.floor((l+n()*.86)*a)),f=h*3,d=l*3;r[l]=h,s[d]=tn[f],s[d+1]=tn[f+1],s[d+2]=tn[f+2]}Lr={start:390,end:Lt.cosmicFate.type==="heat-death"?710:1e3,step:1,habitatRemnantIndices:r,habitatPositions:s,adjacency:[],snapshots:[]};const o=[],c=Ut("#civilization-legend");c.innerHTML="";for(let l=0;l<t;l++){let h=Math.floor(n()*i),f=-1;for(let D=0;D<96;D++){const I=Math.floor(n()*i),V=I*3;let G=1/0;o.forEach(W=>{const $=W*3;G=Math.min(G,Math.hypot(s[V]-s[$],s[V+1]-s[$+1],s[V+2]-s[$+2]))}),G>f&&(f=G,h=I)}o.push(h);const d=r[h],m=d*3,g=new U(tn[m],tn[m+1],tn[m+2]),v=dc[l%dc.length],p=new se;p.setAttribute("position",new ee(new Float32Array(i*3),3)),p.setDrawRange(0,0);const u=new mn({color:v,size:.24,map:Ke(),alphaTest:.012,transparent:!0,opacity:.98,depthWrite:!1,blending:jt}),b=new Sn(p,u);Ae.add(b),Dr.push(b);const y=n(),x=n(),T=Wt(n,.72,1.36),E=Wt(n,.68,1.32),w=t===1?0:l/(t-1),R=404+Math.round(w*72+n()*11),_=n()<.01,M=_?R+Math.round(Wt(n,130,205)):1/0;Ve.push({name:uc[(Lt.seedValue+l)%uc.length],color:v,home:g,homeNodeIndex:h,homeRemnantIndex:d,homeOffset:new U,hostRemnantIndices:new Uint16Array(i),hostOffsets:new Float32Array(i*3),displayCount:0,maxColonies:i,birth:R,highDimensional:_,ascensionAt:M,extinction:_?1001:Lt.cosmicFate.type==="heat-death"?710:1e3,aggression:y,cooperation:x,expansionRate:T,resilience:E});const P=`#${v.toString(16).padStart(6,"0")}`;c.insertAdjacentHTML("beforeend",`<div class="civilization-item" style="--species:${P}" data-species="${l}"><i></i><span>${Ve[l].name}</span><b>未诞生</b></div>`)}}function vh(){if(on!=="generator")return;Lt=sh(),uh(Lt),_h(),xh(),Ut(".universe-data").scrollTop=0;const n=Ut("#creation-flash");n.classList.remove("is-flashing"),n.offsetWidth,n.classList.add("is-flashing"),document.querySelectorAll(".metric").forEach(t=>{t.style.animation="none",t.offsetWidth,t.style.animation=""})}function h0(){on==="generator"&&(on="explorer",document.body.classList.add("is-exploring"),Ut("#generator-view").classList.remove("is-active"),Ut("#explorer-view").classList.add("is-active"),Ut("#mode-label").textContent="深空航行中",Ut("#regenerate-top").style.opacity="0",Ut("#regenerate-top").style.pointerEvents="none",Ut("#civilization-panel").classList.remove("is-expanded"),Ut("#toggle-civilizations").setAttribute("aria-expanded","false"),Ae.visible=!0,Ae.scale.setScalar(.02),an.enabled=!0,an.target.set(0,0,0),be=0,Ut("#cosmic-timeline").value=be,kr(be,!0),En=!0,Ut("#toggle-time").textContent="Ⅱ",Ut("#toggle-time").setAttribute("aria-label","暂停时间"),Be={type:"enter",start:performance.now(),duration:$n?1:2100})}function u0(){on==="explorer"&&(on="generator",document.body.classList.remove("is-exploring"),Ut("#explorer-view").classList.remove("is-active"),Ut("#generator-view").classList.add("is-active"),Ut("#star-inspector").classList.remove("is-open"),Ut("#civilization-panel").classList.remove("is-expanded"),Ut("#toggle-civilizations").setAttribute("aria-expanded","false"),Ut("#mode-label").textContent="创世引擎在线",Ut("#regenerate-top").style.opacity="",Ut("#regenerate-top").style.pointerEvents="",En=!1,Ut("#toggle-time").textContent="▶",Ut("#toggle-time").setAttribute("aria-label","播放时间"),an.enabled=!1,Mn.visible=!1,Zn.visible=!1,Ei.visible=!1,ti.visible=!1,Be={type:"leave",start:performance.now(),duration:$n?1:1300})}function Mc(n){return n===1?1:1-Math.pow(2,-10*n)}function yc(n){return n<.5?4*n*n*n:1-Math.pow(-2*n+2,3)/2}function d0(n){if(!Be)return;const t=Math.min(1,(n-Be.start)/Be.duration);if(Be.type==="birth"){const e=Mc(t);Ee.scale.setScalar(e),Ee.rotation.y=-.3+(1-e)*1.5}if(Be.type==="enter"){const e=yc(t);Ee.scale.setScalar(Math.max(.001,1-e*1.5)),Ee.rotation.z+=.018*(1-t),Ae.scale.setScalar(.02+Mc(t)*.98),gn.position.z=32-e*12,gn.position.y=.5+e*4.2}if(Be.type==="leave"){const e=yc(t);Ae.scale.setScalar(1-e*.96),Ee.scale.setScalar(e),gn.position.z=20+e*12,gn.position.y=4.7-e*4.2}t===1&&(Be.type==="enter"&&(Ee.visible=!1),Be.type==="leave"&&(Ae.visible=!1,Ee.visible=!0,Ee.scale.setScalar(1)),Be=null)}function f0(n){if(on!=="explorer"||Be||!ar||be<250||be>750)return;Qi.x=n.clientX/innerWidth*2-1,Qi.y=-(n.clientY/innerHeight)*2+1,To.setFromCamera(Qi,gn);const t=To.intersectObject(ar);if(!t.length)return;const e=t[0].index,i=bn(Lt.seed,e*31),r=["M4 V","K1 III","G2 V","F8 V","A3 V","B1 Ia"],s=r[Math.floor(i()*r.length)],o={M:[2400,3700],K:[3700,5200],G:[5200,6e3],F:[6e3,7500],A:[7500,1e4],B:[1e4,3e4]}[s[0]],c=Math.round(Wt(i,o[0],o[1])),l=Math.floor(i()*13),h=i()<Lt.lifeProbability?"候选信号":"未检出";Ut("#star-name").textContent=`RU-${String(e).padStart(5,"0")}`,Ut("#star-type").textContent=s,Ut("#star-temp").textContent=`${new Intl.NumberFormat("zh-CN").format(c)} K`,Ut("#star-planets").textContent=l,Ut("#star-life").textContent=h,Ut("#star-life").style.color=h==="候选信号"?"var(--accent)":"",Ut("#star-inspector").classList.add("is-open")}function p0(n){be+=n*R_(be)*gh}function m0(){if(on!=="explorer")return;const n=Ut("#civilization-panel"),t=!n.classList.contains("is-expanded");n.classList.toggle("is-expanded",t),Ut("#toggle-civilizations").setAttribute("aria-expanded",String(t))}function Sc(){return{mode:on,epochEffectsGroup:Mn,primordialParticles:Ao,primordialFactors:wo,primordialDirections:Mr,expansionStreaks:Ro,expansionDirections:Yi,bangCore:Rs,shockwaves:dh,renderer:Tn,scene:Ws,clickableStars:ar,originalGalaxyPositions:Co,stellarGravityState:ji,universe:Lt,transition:Be,galaxyGroup:Ae,starDeathThresholds:Po,originalGalaxyColors:mh,cosmicEvents:bi,remnantGroup:Zn,stellarRemnants:Ns,originalRemnantPositions:tn,remnantDynamics:In,blackHoleRemnants:Fs,heatDeathGroup:Ei,coldPhotons:Ir,originalPhotonPositions:fh,originalPhotonColors:ph,cosmicFateGroup:Mi,fateBubble:tr,fateGlow:br,cosmicEventGroup:ti}}function g0(n){const t=Lt.cosmicFate.type==="heat-death"?0:Tt.smoothstep(be,Lt.cosmicFate.onsetAt,995);n.forEach((e,i)=>{const r=Dr[i],s=Ve[i];r.visible=e.alive&&e.count>0,r.material.opacity=(e.ascended?.88:.98)*(1-t),r.material.size=e.ascended?.31:.24,r.material.color.setHex(e.ascended?15325183:s.color)})}function kr(n,t=!1){const e=w_(n,Lt,f_(Lt));if(be=e.position,t0(e),!ar)return;Y_(be,Sc());const i=K_(Lr,be);O_(i,{civilizationSimulation:Lr,civilizationData:Ve,civilizationGroups:Dr}),B_({clickableStars:ar,stellarRemnants:Ns,remnantDynamics:In,cosmicPosition:be,civilizationData:Ve,civilizationGroups:Dr}),fi=J_(be,i,Ve,bi),g0(fi),e0({position:be,simulationState:i,runtimeState:fi,civilizationData:Ve}),s0(i,Ve);const r=fi.filter(l=>l.alive).length,s=fi.filter(l=>l.ascended).length,a=Q_(i,fi,Ve.length),o=q_(be,Sc()),c=C_({position:be,label:e.label,universe:Lt,activeEvent:o,activeRelationship:a,ascendedSpecies:s,activeSpecies:r,civilizationData:Ve});n0(c,t)}function Mh(n){requestAnimationFrame(Mh);const t=Math.min(.05,(n-vc)/1e3);if(vc=n,d0(n),ys.lerp(Qi,.04),on==="generator"&&Ee.visible&&!$n&&(Ee.rotation.y+=45e-5,Ee.rotation.x=.15+ys.y*.045,Ee.position.x=ys.x*.42,Ee.position.y=ys.y*.25),on==="explorer"){En&&!Be&&(p0(t),be>=1e3&&(be=1e3,En=!1,Ut("#toggle-time").textContent="▶",Ut("#toggle-time").setAttribute("aria-label","播放时间")),kr(be)),an.update(),Mn.position.set(0,0,0),Ei.visible&&!$n&&(Ir.rotation.y+=35e-6,Ir.rotation.x+=9e-6),Mi.visible&&!$n&&(tr.rotation.y+=.0014,tr.rotation.x-=7e-4,br.material.rotation=n*8e-5),$n||Fs.forEach((i,r)=>{i.visible&&(ws(i,n,i.userData.spinDirection||(r%2?-1:1)),i.userData.hawkingGlow.material.rotation=n*(25e-6+r*1e-6))}),$_(n,{cosmicEventGroup:ti,prefersReducedMotion:$n,cosmicEvents:bi,camera:gn}),an.enabled||(Ae.rotation.y+=3e-4);const e=n*12e-5;Ut("#coord-x").textContent=`${Math.sin(e)<0?"−":"+"}${Math.abs(Math.sin(e)*9).toFixed(2)}`,Ut("#coord-y").textContent=`${Math.cos(e*.7)<0?"−":"+"}${Math.abs(Math.cos(e*.7)*9).toFixed(2)}`,Ut("#coord-z").textContent=`${Math.sin(e*.3)<0?"−":"+"}${Math.abs(Math.sin(e*.3)*3).toFixed(2)}`}Tn.render(Ws,gn)}window.addEventListener("pointermove",n=>{Qi.x=n.clientX/innerWidth*2-1,Qi.y=-(n.clientY/innerHeight)*2+1;const t=Ut("#cursor");t.style.left=`${n.clientX}px`,t.style.top=`${n.clientY}px`,t.style.opacity="1"});window.addEventListener("resize",()=>{gn.aspect=innerWidth/innerHeight,gn.updateProjectionMatrix(),Tn.setSize(innerWidth,innerHeight),Tn.setPixelRatio(Math.min(devicePixelRatio,2))});$o.addEventListener("click",f0);Ut("#regenerate-top").addEventListener("click",vh);Ut("#enter-universe").addEventListener("click",h0);Ut("#close-inspector").addEventListener("click",()=>Ut("#star-inspector").classList.remove("is-open"));Ut("#toggle-civilizations").addEventListener("click",m0);Ut("#toggle-time").addEventListener("click",()=>{be>=1e3&&kr(0,!0),En=!En,Ut("#toggle-time").textContent=En?"Ⅱ":"▶",Ut("#toggle-time").setAttribute("aria-label",En?"暂停时间":"播放时间")});Ut("#cosmic-timeline").addEventListener("input",n=>{En=!1,Ut("#toggle-time").textContent="▶",kr(n.target.value,!0)});document.querySelectorAll(".speed-controls button").forEach(n=>{n.addEventListener("click",()=>{gh=Number(n.dataset.speed),document.querySelectorAll(".speed-controls button").forEach(t=>{const e=t===n;t.classList.toggle("is-active",e),t.setAttribute("aria-pressed",String(e))})})});document.addEventListener("keydown",n=>{if(n.key.toLowerCase()==="r"&&on==="generator"&&vh(),n.key==="Escape"&&on==="explorer"){const t=Ut("#civilization-panel");t.classList.contains("is-expanded")?(t.classList.remove("is-expanded"),Ut("#toggle-civilizations").setAttribute("aria-expanded","false")):u0()}});Lt=sh();uh(Lt);_h();xh();Mh(performance.now());
