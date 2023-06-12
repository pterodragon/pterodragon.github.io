(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const a of i)if(a.type==="childList")for(const o of a.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const a={};return i.integrity&&(a.integrity=i.integrity),i.referrerPolicy&&(a.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?a.credentials="include":i.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function r(i){if(i.ep)return;i.ep=!0;const a=n(i);fetch(i.href,a)}})();var g=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function ie(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var Om={exports:{}},S8={},km={exports:{}},I1={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var c7=Symbol.for("react.element"),qH=Symbol.for("react.portal"),ZH=Symbol.for("react.fragment"),GH=Symbol.for("react.strict_mode"),XH=Symbol.for("react.profiler"),WH=Symbol.for("react.provider"),UH=Symbol.for("react.context"),KH=Symbol.for("react.forward_ref"),YH=Symbol.for("react.suspense"),JH=Symbol.for("react.memo"),tb=Symbol.for("react.lazy"),jT=Symbol.iterator;function eb(t){return t===null||typeof t!="object"?null:(t=jT&&t[jT]||t["@@iterator"],typeof t=="function"?t:null)}var $m={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Bm=Object.assign,Pm={};function ae(t,e,n){this.props=t,this.context=e,this.refs=Pm,this.updater=n||$m}ae.prototype.isReactComponent={};ae.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};ae.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function Nm(){}Nm.prototype=ae.prototype;function us(t,e,n){this.props=t,this.context=e,this.refs=Pm,this.updater=n||$m}var Ts=us.prototype=new Nm;Ts.constructor=us;Bm(Ts,ae.prototype);Ts.isPureReactComponent=!0;var FT=Array.isArray,Im=Object.prototype.hasOwnProperty,cs={current:null},jm={key:!0,ref:!0,__self:!0,__source:!0};function Fm(t,e,n){var r,i={},a=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(a=""+e.key),e)Im.call(e,r)&&!jm.hasOwnProperty(r)&&(i[r]=e[r]);var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){for(var Q=Array(l),s=0;s<l;s++)Q[s]=arguments[s+2];i.children=Q}if(t&&t.defaultProps)for(r in l=t.defaultProps,l)i[r]===void 0&&(i[r]=l[r]);return{$$typeof:c7,type:t,key:a,ref:o,props:i,_owner:cs.current}}function nb(t,e){return{$$typeof:c7,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function fs(t){return typeof t=="object"&&t!==null&&t.$$typeof===c7}function rb(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var RT=/\/+/g;function xa(t,e){return typeof t=="object"&&t!==null&&t.key!=null?rb(""+t.key):e.toString(36)}function lr(t,e,n,r,i){var a=typeof t;(a==="undefined"||a==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(a){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case c7:case qH:o=!0}}if(o)return o=t,i=i(o),t=r===""?"."+xa(o,0):r,FT(i)?(n="",t!=null&&(n=t.replace(RT,"$&/")+"/"),lr(i,e,n,"",function(s){return s})):i!=null&&(fs(i)&&(i=nb(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(RT,"$&/")+"/")+t)),e.push(i)),1;if(o=0,r=r===""?".":r+":",FT(t))for(var l=0;l<t.length;l++){a=t[l];var Q=r+xa(a,l);o+=lr(a,e,n,Q,i)}else if(Q=eb(t),typeof Q=="function")for(t=Q.call(t),l=0;!(a=t.next()).done;)a=a.value,Q=r+xa(a,l++),o+=lr(a,e,n,Q,i);else if(a==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function an(t,e,n){if(t==null)return t;var r=[],i=0;return lr(t,r,"","",function(a){return e.call(n,a,i++)}),r}function ib(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var l3={current:null},Qr={transition:null},ab={ReactCurrentDispatcher:l3,ReactCurrentBatchConfig:Qr,ReactCurrentOwner:cs};I1.Children={map:an,forEach:function(t,e,n){an(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return an(t,function(){e++}),e},toArray:function(t){return an(t,function(e){return e})||[]},only:function(t){if(!fs(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};I1.Component=ae;I1.Fragment=ZH;I1.Profiler=XH;I1.PureComponent=us;I1.StrictMode=GH;I1.Suspense=YH;I1.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ab;I1.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=Bm({},t.props),i=t.key,a=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(a=e.ref,o=cs.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var l=t.type.defaultProps;for(Q in e)Im.call(e,Q)&&!jm.hasOwnProperty(Q)&&(r[Q]=e[Q]===void 0&&l!==void 0?l[Q]:e[Q])}var Q=arguments.length-2;if(Q===1)r.children=n;else if(1<Q){l=Array(Q);for(var s=0;s<Q;s++)l[s]=arguments[s+2];r.children=l}return{$$typeof:c7,type:t.type,key:i,ref:a,props:r,_owner:o}};I1.createContext=function(t){return t={$$typeof:UH,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:WH,_context:t},t.Consumer=t};I1.createElement=Fm;I1.createFactory=function(t){var e=Fm.bind(null,t);return e.type=t,e};I1.createRef=function(){return{current:null}};I1.forwardRef=function(t){return{$$typeof:KH,render:t}};I1.isValidElement=fs;I1.lazy=function(t){return{$$typeof:tb,_payload:{_status:-1,_result:t},_init:ib}};I1.memo=function(t,e){return{$$typeof:JH,type:t,compare:e===void 0?null:e}};I1.startTransition=function(t){var e=Qr.transition;Qr.transition={};try{t()}finally{Qr.transition=e}};I1.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};I1.useCallback=function(t,e){return l3.current.useCallback(t,e)};I1.useContext=function(t){return l3.current.useContext(t)};I1.useDebugValue=function(){};I1.useDeferredValue=function(t){return l3.current.useDeferredValue(t)};I1.useEffect=function(t,e){return l3.current.useEffect(t,e)};I1.useId=function(){return l3.current.useId()};I1.useImperativeHandle=function(t,e,n){return l3.current.useImperativeHandle(t,e,n)};I1.useInsertionEffect=function(t,e){return l3.current.useInsertionEffect(t,e)};I1.useLayoutEffect=function(t,e){return l3.current.useLayoutEffect(t,e)};I1.useMemo=function(t,e){return l3.current.useMemo(t,e)};I1.useReducer=function(t,e,n){return l3.current.useReducer(t,e,n)};I1.useRef=function(t){return l3.current.useRef(t)};I1.useState=function(t){return l3.current.useState(t)};I1.useSyncExternalStore=function(t,e,n){return l3.current.useSyncExternalStore(t,e,n)};I1.useTransition=function(){return l3.current.useTransition()};I1.version="18.2.0";km.exports=I1;var L1=km.exports;const A5=ie(L1);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ob=L1,lb=Symbol.for("react.element"),Qb=Symbol.for("react.fragment"),sb=Object.prototype.hasOwnProperty,ub=ob.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Tb={key:!0,ref:!0,__self:!0,__source:!0};function Rm(t,e,n){var r,i={},a=null,o=null;n!==void 0&&(a=""+n),e.key!==void 0&&(a=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)sb.call(e,r)&&!Tb.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:lb,type:t,key:a,ref:o,props:i,_owner:ub.current}}S8.Fragment=Qb;S8.jsx=Rm;S8.jsxs=Rm;Om.exports=S8;var y1=Om.exports,pl={},zm={exports:{}},C3={},qm={exports:{}},Zm={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(q,o1){var I=q.length;q.push(o1);t:for(;0<I;){var C=I-1>>>1,O=q[C];if(0<i(O,o1))q[C]=o1,q[I]=O,I=C;else break t}}function n(q){return q.length===0?null:q[0]}function r(q){if(q.length===0)return null;var o1=q[0],I=q.pop();if(I!==o1){q[0]=I;t:for(var C=0,O=q.length,i1=O>>>1;C<i1;){var d1=2*(C+1)-1,g1=q[d1],l1=d1+1,F=q[l1];if(0>i(g1,I))l1<O&&0>i(F,g1)?(q[C]=F,q[l1]=I,C=l1):(q[C]=g1,q[d1]=I,C=d1);else if(l1<O&&0>i(F,I))q[C]=F,q[l1]=I,C=l1;else break t}}return o1}function i(q,o1){var I=q.sortIndex-o1.sortIndex;return I!==0?I:q.id-o1.id}if(typeof performance=="object"&&typeof performance.now=="function"){var a=performance;t.unstable_now=function(){return a.now()}}else{var o=Date,l=o.now();t.unstable_now=function(){return o.now()-l}}var Q=[],s=[],u=1,T=null,c=3,f=!1,h=!1,p=!1,v=typeof setTimeout=="function"?setTimeout:null,d=typeof clearTimeout=="function"?clearTimeout:null,m=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function y(q){for(var o1=n(s);o1!==null;){if(o1.callback===null)r(s);else if(o1.startTime<=q)r(s),o1.sortIndex=o1.expirationTime,e(Q,o1);else break;o1=n(s)}}function x(q){if(p=!1,y(q),!h)if(n(Q)!==null)h=!0,P(L);else{var o1=n(s);o1!==null&&v1(x,o1.startTime-q)}}function L(q,o1){h=!1,p&&(p=!1,d(w),w=-1),f=!0;var I=c;try{for(y(o1),T=n(Q);T!==null&&(!(T.expirationTime>o1)||q&&!E());){var C=T.callback;if(typeof C=="function"){T.callback=null,c=T.priorityLevel;var O=C(T.expirationTime<=o1);o1=t.unstable_now(),typeof O=="function"?T.callback=O:T===n(Q)&&r(Q),y(o1)}else r(Q);T=n(Q)}if(T!==null)var i1=!0;else{var d1=n(s);d1!==null&&v1(x,d1.startTime-o1),i1=!1}return i1}finally{T=null,c=I,f=!1}}var H=!1,M=null,w=-1,S=5,D=-1;function E(){return!(t.unstable_now()-D<S)}function $(){if(M!==null){var q=t.unstable_now();D=q;var o1=!0;try{o1=M(!0,q)}finally{o1?j():(H=!1,M=null)}}else H=!1}var j;if(typeof m=="function")j=function(){m($)};else if(typeof MessageChannel<"u"){var G=new MessageChannel,X=G.port2;G.port1.onmessage=$,j=function(){X.postMessage(null)}}else j=function(){v($,0)};function P(q){M=q,H||(H=!0,j())}function v1(q,o1){w=v(function(){q(t.unstable_now())},o1)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(q){q.callback=null},t.unstable_continueExecution=function(){h||f||(h=!0,P(L))},t.unstable_forceFrameRate=function(q){0>q||125<q?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):S=0<q?Math.floor(1e3/q):5},t.unstable_getCurrentPriorityLevel=function(){return c},t.unstable_getFirstCallbackNode=function(){return n(Q)},t.unstable_next=function(q){switch(c){case 1:case 2:case 3:var o1=3;break;default:o1=c}var I=c;c=o1;try{return q()}finally{c=I}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(q,o1){switch(q){case 1:case 2:case 3:case 4:case 5:break;default:q=3}var I=c;c=q;try{return o1()}finally{c=I}},t.unstable_scheduleCallback=function(q,o1,I){var C=t.unstable_now();switch(typeof I=="object"&&I!==null?(I=I.delay,I=typeof I=="number"&&0<I?C+I:C):I=C,q){case 1:var O=-1;break;case 2:O=250;break;case 5:O=1073741823;break;case 4:O=1e4;break;default:O=5e3}return O=I+O,q={id:u++,callback:o1,priorityLevel:q,startTime:I,expirationTime:O,sortIndex:-1},I>C?(q.sortIndex=I,e(s,q),n(Q)===null&&q===n(s)&&(p?(d(w),w=-1):p=!0,v1(x,I-C))):(q.sortIndex=O,e(Q,q),h||f||(h=!0,P(L))),q},t.unstable_shouldYield=E,t.unstable_wrapCallback=function(q){var o1=c;return function(){var I=c;c=o1;try{return q.apply(this,arguments)}finally{c=I}}}})(Zm);qm.exports=Zm;var cb=qm.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Gm=L1,V3=cb;function Y(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Xm=new Set,k0={};function q5(t,e){Nt(t,e),Nt(t+"Capture",e)}function Nt(t,e){for(k0[t]=e,t=0;t<e.length;t++)Xm.add(e[t])}var a6=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),ml=Object.prototype.hasOwnProperty,fb=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,zT={},qT={};function hb(t){return ml.call(qT,t)?!0:ml.call(zT,t)?!1:fb.test(t)?qT[t]=!0:(zT[t]=!0,!1)}function db(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function pb(t,e,n,r){if(e===null||typeof e>"u"||db(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function Q3(t,e,n,r,i,a,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=a,this.removeEmptyString=o}var G2={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){G2[t]=new Q3(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];G2[e]=new Q3(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){G2[t]=new Q3(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){G2[t]=new Q3(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){G2[t]=new Q3(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){G2[t]=new Q3(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){G2[t]=new Q3(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){G2[t]=new Q3(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){G2[t]=new Q3(t,5,!1,t.toLowerCase(),null,!1,!1)});var hs=/[\-:]([a-z])/g;function ds(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(hs,ds);G2[e]=new Q3(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(hs,ds);G2[e]=new Q3(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(hs,ds);G2[e]=new Q3(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){G2[t]=new Q3(t,1,!1,t.toLowerCase(),null,!1,!1)});G2.xlinkHref=new Q3("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){G2[t]=new Q3(t,1,!1,t.toLowerCase(),null,!0,!0)});function ps(t,e,n,r){var i=G2.hasOwnProperty(e)?G2[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(pb(e,n,i,r)&&(n=null),r||i===null?hb(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var c6=Gm.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,on=Symbol.for("react.element"),mt=Symbol.for("react.portal"),vt=Symbol.for("react.fragment"),ms=Symbol.for("react.strict_mode"),vl=Symbol.for("react.profiler"),Wm=Symbol.for("react.provider"),Um=Symbol.for("react.context"),vs=Symbol.for("react.forward_ref"),yl=Symbol.for("react.suspense"),gl=Symbol.for("react.suspense_list"),ys=Symbol.for("react.memo"),S6=Symbol.for("react.lazy"),Km=Symbol.for("react.offscreen"),ZT=Symbol.iterator;function _e(t){return t===null||typeof t!="object"?null:(t=ZT&&t[ZT]||t["@@iterator"],typeof t=="function"?t:null)}var x2=Object.assign,La;function d0(t){if(La===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);La=e&&e[1]||""}return`
`+La+t}var Ha=!1;function ba(t,e){if(!t||Ha)return"";Ha=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(s){var r=s}Reflect.construct(t,[],e)}else{try{e.call()}catch(s){r=s}t.call(e.prototype)}else{try{throw Error()}catch(s){r=s}t()}}catch(s){if(s&&r&&typeof s.stack=="string"){for(var i=s.stack.split(`
`),a=r.stack.split(`
`),o=i.length-1,l=a.length-1;1<=o&&0<=l&&i[o]!==a[l];)l--;for(;1<=o&&0<=l;o--,l--)if(i[o]!==a[l]){if(o!==1||l!==1)do if(o--,l--,0>l||i[o]!==a[l]){var Q=`
`+i[o].replace(" at new "," at ");return t.displayName&&Q.includes("<anonymous>")&&(Q=Q.replace("<anonymous>",t.displayName)),Q}while(1<=o&&0<=l);break}}}finally{Ha=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?d0(t):""}function mb(t){switch(t.tag){case 5:return d0(t.type);case 16:return d0("Lazy");case 13:return d0("Suspense");case 19:return d0("SuspenseList");case 0:case 2:case 15:return t=ba(t.type,!1),t;case 11:return t=ba(t.type.render,!1),t;case 1:return t=ba(t.type,!0),t;default:return""}}function xl(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case vt:return"Fragment";case mt:return"Portal";case vl:return"Profiler";case ms:return"StrictMode";case yl:return"Suspense";case gl:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case Um:return(t.displayName||"Context")+".Consumer";case Wm:return(t._context.displayName||"Context")+".Provider";case vs:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case ys:return e=t.displayName||null,e!==null?e:xl(t.type)||"Memo";case S6:e=t._payload,t=t._init;try{return xl(t(e))}catch{}}return null}function vb(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return xl(e);case 8:return e===ms?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function G6(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Ym(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function yb(t){var e=Ym(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,a=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,a.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function ln(t){t._valueTracker||(t._valueTracker=yb(t))}function Jm(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=Ym(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function Hr(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Ll(t,e){var n=e.checked;return x2({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function GT(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=G6(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function tv(t,e){e=e.checked,e!=null&&ps(t,"checked",e,!1)}function Hl(t,e){tv(t,e);var n=G6(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?bl(t,e.type,n):e.hasOwnProperty("defaultValue")&&bl(t,e.type,G6(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function XT(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function bl(t,e,n){(e!=="number"||Hr(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var p0=Array.isArray;function Vt(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+G6(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function Ml(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(Y(91));return x2({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function WT(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(Y(92));if(p0(n)){if(1<n.length)throw Error(Y(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:G6(n)}}function ev(t,e){var n=G6(e.value),r=G6(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function UT(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function nv(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function _l(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?nv(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Qn,rv=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(Qn=Qn||document.createElement("div"),Qn.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Qn.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function $0(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var x0={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},gb=["Webkit","ms","Moz","O"];Object.keys(x0).forEach(function(t){gb.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),x0[e]=x0[t]})});function iv(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||x0.hasOwnProperty(t)&&x0[t]?(""+e).trim():e+"px"}function av(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=iv(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var xb=x2({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function wl(t,e){if(e){if(xb[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(Y(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(Y(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(Y(61))}if(e.style!=null&&typeof e.style!="object")throw Error(Y(62))}}function Sl(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Al=null;function gs(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Vl=null,Ct=null,Et=null;function KT(t){if(t=d7(t)){if(typeof Vl!="function")throw Error(Y(280));var e=t.stateNode;e&&(e=D8(e),Vl(t.stateNode,t.type,e))}}function ov(t){Ct?Et?Et.push(t):Et=[t]:Ct=t}function lv(){if(Ct){var t=Ct,e=Et;if(Et=Ct=null,KT(t),e)for(t=0;t<e.length;t++)KT(e[t])}}function Qv(t,e){return t(e)}function sv(){}var Ma=!1;function uv(t,e,n){if(Ma)return t(e,n);Ma=!0;try{return Qv(t,e,n)}finally{Ma=!1,(Ct!==null||Et!==null)&&(sv(),lv())}}function B0(t,e){var n=t.stateNode;if(n===null)return null;var r=D8(n);if(r===null)return null;n=r[e];t:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break t;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(Y(231,e,typeof n));return n}var Cl=!1;if(a6)try{var we={};Object.defineProperty(we,"passive",{get:function(){Cl=!0}}),window.addEventListener("test",we,we),window.removeEventListener("test",we,we)}catch{Cl=!1}function Lb(t,e,n,r,i,a,o,l,Q){var s=Array.prototype.slice.call(arguments,3);try{e.apply(n,s)}catch(u){this.onError(u)}}var L0=!1,br=null,Mr=!1,El=null,Hb={onError:function(t){L0=!0,br=t}};function bb(t,e,n,r,i,a,o,l,Q){L0=!1,br=null,Lb.apply(Hb,arguments)}function Mb(t,e,n,r,i,a,o,l,Q){if(bb.apply(this,arguments),L0){if(L0){var s=br;L0=!1,br=null}else throw Error(Y(198));Mr||(Mr=!0,El=s)}}function Z5(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function Tv(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function YT(t){if(Z5(t)!==t)throw Error(Y(188))}function _b(t){var e=t.alternate;if(!e){if(e=Z5(t),e===null)throw Error(Y(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var a=i.alternate;if(a===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===a.child){for(a=i.child;a;){if(a===n)return YT(i),t;if(a===r)return YT(i),e;a=a.sibling}throw Error(Y(188))}if(n.return!==r.return)n=i,r=a;else{for(var o=!1,l=i.child;l;){if(l===n){o=!0,n=i,r=a;break}if(l===r){o=!0,r=i,n=a;break}l=l.sibling}if(!o){for(l=a.child;l;){if(l===n){o=!0,n=a,r=i;break}if(l===r){o=!0,r=a,n=i;break}l=l.sibling}if(!o)throw Error(Y(189))}}if(n.alternate!==r)throw Error(Y(190))}if(n.tag!==3)throw Error(Y(188));return n.stateNode.current===n?t:e}function cv(t){return t=_b(t),t!==null?fv(t):null}function fv(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=fv(t);if(e!==null)return e;t=t.sibling}return null}var hv=V3.unstable_scheduleCallback,JT=V3.unstable_cancelCallback,wb=V3.unstable_shouldYield,Sb=V3.unstable_requestPaint,w2=V3.unstable_now,Ab=V3.unstable_getCurrentPriorityLevel,xs=V3.unstable_ImmediatePriority,dv=V3.unstable_UserBlockingPriority,_r=V3.unstable_NormalPriority,Vb=V3.unstable_LowPriority,pv=V3.unstable_IdlePriority,A8=null,M4=null;function Cb(t){if(M4&&typeof M4.onCommitFiberRoot=="function")try{M4.onCommitFiberRoot(A8,t,void 0,(t.current.flags&128)===128)}catch{}}var i4=Math.clz32?Math.clz32:Ob,Eb=Math.log,Db=Math.LN2;function Ob(t){return t>>>=0,t===0?32:31-(Eb(t)/Db|0)|0}var sn=64,un=4194304;function m0(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function wr(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,a=t.pingedLanes,o=n&268435455;if(o!==0){var l=o&~i;l!==0?r=m0(l):(a&=o,a!==0&&(r=m0(a)))}else o=n&~i,o!==0?r=m0(o):a!==0&&(r=m0(a));if(r===0)return 0;if(e!==0&&e!==r&&!(e&i)&&(i=r&-r,a=e&-e,i>=a||i===16&&(a&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-i4(e),i=1<<n,r|=t[n],e&=~i;return r}function kb(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function $b(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,a=t.pendingLanes;0<a;){var o=31-i4(a),l=1<<o,Q=i[o];Q===-1?(!(l&n)||l&r)&&(i[o]=kb(l,e)):Q<=e&&(t.expiredLanes|=l),a&=~l}}function Dl(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function mv(){var t=sn;return sn<<=1,!(sn&4194240)&&(sn=64),t}function _a(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function f7(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-i4(e),t[e]=n}function Bb(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-i4(n),a=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~a}}function Ls(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-i4(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var W1=0;function vv(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var yv,Hs,gv,xv,Lv,Ol=!1,Tn=[],B6=null,P6=null,N6=null,P0=new Map,N0=new Map,V6=[],Pb="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function tc(t,e){switch(t){case"focusin":case"focusout":B6=null;break;case"dragenter":case"dragleave":P6=null;break;case"mouseover":case"mouseout":N6=null;break;case"pointerover":case"pointerout":P0.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":N0.delete(e.pointerId)}}function Se(t,e,n,r,i,a){return t===null||t.nativeEvent!==a?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:a,targetContainers:[i]},e!==null&&(e=d7(e),e!==null&&Hs(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function Nb(t,e,n,r,i){switch(e){case"focusin":return B6=Se(B6,t,e,n,r,i),!0;case"dragenter":return P6=Se(P6,t,e,n,r,i),!0;case"mouseover":return N6=Se(N6,t,e,n,r,i),!0;case"pointerover":var a=i.pointerId;return P0.set(a,Se(P0.get(a)||null,t,e,n,r,i)),!0;case"gotpointercapture":return a=i.pointerId,N0.set(a,Se(N0.get(a)||null,t,e,n,r,i)),!0}return!1}function Hv(t){var e=_5(t.target);if(e!==null){var n=Z5(e);if(n!==null){if(e=n.tag,e===13){if(e=Tv(n),e!==null){t.blockedOn=e,Lv(t.priority,function(){gv(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function sr(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=kl(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);Al=r,n.target.dispatchEvent(r),Al=null}else return e=d7(n),e!==null&&Hs(e),t.blockedOn=n,!1;e.shift()}return!0}function ec(t,e,n){sr(t)&&n.delete(e)}function Ib(){Ol=!1,B6!==null&&sr(B6)&&(B6=null),P6!==null&&sr(P6)&&(P6=null),N6!==null&&sr(N6)&&(N6=null),P0.forEach(ec),N0.forEach(ec)}function Ae(t,e){t.blockedOn===e&&(t.blockedOn=null,Ol||(Ol=!0,V3.unstable_scheduleCallback(V3.unstable_NormalPriority,Ib)))}function I0(t){function e(i){return Ae(i,t)}if(0<Tn.length){Ae(Tn[0],t);for(var n=1;n<Tn.length;n++){var r=Tn[n];r.blockedOn===t&&(r.blockedOn=null)}}for(B6!==null&&Ae(B6,t),P6!==null&&Ae(P6,t),N6!==null&&Ae(N6,t),P0.forEach(e),N0.forEach(e),n=0;n<V6.length;n++)r=V6[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<V6.length&&(n=V6[0],n.blockedOn===null);)Hv(n),n.blockedOn===null&&V6.shift()}var Dt=c6.ReactCurrentBatchConfig,Sr=!0;function jb(t,e,n,r){var i=W1,a=Dt.transition;Dt.transition=null;try{W1=1,bs(t,e,n,r)}finally{W1=i,Dt.transition=a}}function Fb(t,e,n,r){var i=W1,a=Dt.transition;Dt.transition=null;try{W1=4,bs(t,e,n,r)}finally{W1=i,Dt.transition=a}}function bs(t,e,n,r){if(Sr){var i=kl(t,e,n,r);if(i===null)$a(t,e,r,Ar,n),tc(t,r);else if(Nb(i,t,e,n,r))r.stopPropagation();else if(tc(t,r),e&4&&-1<Pb.indexOf(t)){for(;i!==null;){var a=d7(i);if(a!==null&&yv(a),a=kl(t,e,n,r),a===null&&$a(t,e,r,Ar,n),a===i)break;i=a}i!==null&&r.stopPropagation()}else $a(t,e,r,null,n)}}var Ar=null;function kl(t,e,n,r){if(Ar=null,t=gs(r),t=_5(t),t!==null)if(e=Z5(t),e===null)t=null;else if(n=e.tag,n===13){if(t=Tv(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return Ar=t,null}function bv(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Ab()){case xs:return 1;case dv:return 4;case _r:case Vb:return 16;case pv:return 536870912;default:return 16}default:return 16}}var D6=null,Ms=null,ur=null;function Mv(){if(ur)return ur;var t,e=Ms,n=e.length,r,i="value"in D6?D6.value:D6.textContent,a=i.length;for(t=0;t<n&&e[t]===i[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===i[a-r];r++);return ur=i.slice(t,1<r?1-r:void 0)}function Tr(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function cn(){return!0}function nc(){return!1}function E3(t){function e(n,r,i,a,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=a,this.target=o,this.currentTarget=null;for(var l in t)t.hasOwnProperty(l)&&(n=t[l],this[l]=n?n(a):a[l]);return this.isDefaultPrevented=(a.defaultPrevented!=null?a.defaultPrevented:a.returnValue===!1)?cn:nc,this.isPropagationStopped=nc,this}return x2(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=cn)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=cn)},persist:function(){},isPersistent:cn}),e}var oe={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},_s=E3(oe),h7=x2({},oe,{view:0,detail:0}),Rb=E3(h7),wa,Sa,Ve,V8=x2({},h7,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:ws,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Ve&&(Ve&&t.type==="mousemove"?(wa=t.screenX-Ve.screenX,Sa=t.screenY-Ve.screenY):Sa=wa=0,Ve=t),wa)},movementY:function(t){return"movementY"in t?t.movementY:Sa}}),rc=E3(V8),zb=x2({},V8,{dataTransfer:0}),qb=E3(zb),Zb=x2({},h7,{relatedTarget:0}),Aa=E3(Zb),Gb=x2({},oe,{animationName:0,elapsedTime:0,pseudoElement:0}),Xb=E3(Gb),Wb=x2({},oe,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),Ub=E3(Wb),Kb=x2({},oe,{data:0}),ic=E3(Kb),Yb={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Jb={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},tM={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function eM(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=tM[t])?!!e[t]:!1}function ws(){return eM}var nM=x2({},h7,{key:function(t){if(t.key){var e=Yb[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Tr(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?Jb[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:ws,charCode:function(t){return t.type==="keypress"?Tr(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Tr(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),rM=E3(nM),iM=x2({},V8,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),ac=E3(iM),aM=x2({},h7,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:ws}),oM=E3(aM),lM=x2({},oe,{propertyName:0,elapsedTime:0,pseudoElement:0}),QM=E3(lM),sM=x2({},V8,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),uM=E3(sM),TM=[9,13,27,32],Ss=a6&&"CompositionEvent"in window,H0=null;a6&&"documentMode"in document&&(H0=document.documentMode);var cM=a6&&"TextEvent"in window&&!H0,_v=a6&&(!Ss||H0&&8<H0&&11>=H0),oc=String.fromCharCode(32),lc=!1;function wv(t,e){switch(t){case"keyup":return TM.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Sv(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var yt=!1;function fM(t,e){switch(t){case"compositionend":return Sv(e);case"keypress":return e.which!==32?null:(lc=!0,oc);case"textInput":return t=e.data,t===oc&&lc?null:t;default:return null}}function hM(t,e){if(yt)return t==="compositionend"||!Ss&&wv(t,e)?(t=Mv(),ur=Ms=D6=null,yt=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return _v&&e.locale!=="ko"?null:e.data;default:return null}}var dM={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Qc(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!dM[t.type]:e==="textarea"}function Av(t,e,n,r){ov(r),e=Vr(e,"onChange"),0<e.length&&(n=new _s("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var b0=null,j0=null;function pM(t){Iv(t,0)}function C8(t){var e=Lt(t);if(Jm(e))return t}function mM(t,e){if(t==="change")return e}var Vv=!1;if(a6){var Va;if(a6){var Ca="oninput"in document;if(!Ca){var sc=document.createElement("div");sc.setAttribute("oninput","return;"),Ca=typeof sc.oninput=="function"}Va=Ca}else Va=!1;Vv=Va&&(!document.documentMode||9<document.documentMode)}function uc(){b0&&(b0.detachEvent("onpropertychange",Cv),j0=b0=null)}function Cv(t){if(t.propertyName==="value"&&C8(j0)){var e=[];Av(e,j0,t,gs(t)),uv(pM,e)}}function vM(t,e,n){t==="focusin"?(uc(),b0=e,j0=n,b0.attachEvent("onpropertychange",Cv)):t==="focusout"&&uc()}function yM(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return C8(j0)}function gM(t,e){if(t==="click")return C8(e)}function xM(t,e){if(t==="input"||t==="change")return C8(e)}function LM(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var l4=typeof Object.is=="function"?Object.is:LM;function F0(t,e){if(l4(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!ml.call(e,i)||!l4(t[i],e[i]))return!1}return!0}function Tc(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function cc(t,e){var n=Tc(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}t:{for(;n;){if(n.nextSibling){n=n.nextSibling;break t}n=n.parentNode}n=void 0}n=Tc(n)}}function Ev(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?Ev(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function Dv(){for(var t=window,e=Hr();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=Hr(t.document)}return e}function As(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function HM(t){var e=Dv(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&Ev(n.ownerDocument.documentElement,n)){if(r!==null&&As(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,a=Math.min(r.start,i);r=r.end===void 0?a:Math.min(r.end,i),!t.extend&&a>r&&(i=r,r=a,a=i),i=cc(n,a);var o=cc(n,r);i&&o&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),a>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var bM=a6&&"documentMode"in document&&11>=document.documentMode,gt=null,$l=null,M0=null,Bl=!1;function fc(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Bl||gt==null||gt!==Hr(r)||(r=gt,"selectionStart"in r&&As(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),M0&&F0(M0,r)||(M0=r,r=Vr($l,"onSelect"),0<r.length&&(e=new _s("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=gt)))}function fn(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var xt={animationend:fn("Animation","AnimationEnd"),animationiteration:fn("Animation","AnimationIteration"),animationstart:fn("Animation","AnimationStart"),transitionend:fn("Transition","TransitionEnd")},Ea={},Ov={};a6&&(Ov=document.createElement("div").style,"AnimationEvent"in window||(delete xt.animationend.animation,delete xt.animationiteration.animation,delete xt.animationstart.animation),"TransitionEvent"in window||delete xt.transitionend.transition);function E8(t){if(Ea[t])return Ea[t];if(!xt[t])return t;var e=xt[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in Ov)return Ea[t]=e[n];return t}var kv=E8("animationend"),$v=E8("animationiteration"),Bv=E8("animationstart"),Pv=E8("transitionend"),Nv=new Map,hc="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function t5(t,e){Nv.set(t,e),q5(e,[t])}for(var Da=0;Da<hc.length;Da++){var Oa=hc[Da],MM=Oa.toLowerCase(),_M=Oa[0].toUpperCase()+Oa.slice(1);t5(MM,"on"+_M)}t5(kv,"onAnimationEnd");t5($v,"onAnimationIteration");t5(Bv,"onAnimationStart");t5("dblclick","onDoubleClick");t5("focusin","onFocus");t5("focusout","onBlur");t5(Pv,"onTransitionEnd");Nt("onMouseEnter",["mouseout","mouseover"]);Nt("onMouseLeave",["mouseout","mouseover"]);Nt("onPointerEnter",["pointerout","pointerover"]);Nt("onPointerLeave",["pointerout","pointerover"]);q5("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));q5("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));q5("onBeforeInput",["compositionend","keypress","textInput","paste"]);q5("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));q5("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));q5("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var v0="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),wM=new Set("cancel close invalid load scroll toggle".split(" ").concat(v0));function dc(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,Mb(r,e,void 0,t),t.currentTarget=null}function Iv(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;t:{var a=void 0;if(e)for(var o=r.length-1;0<=o;o--){var l=r[o],Q=l.instance,s=l.currentTarget;if(l=l.listener,Q!==a&&i.isPropagationStopped())break t;dc(i,l,s),a=Q}else for(o=0;o<r.length;o++){if(l=r[o],Q=l.instance,s=l.currentTarget,l=l.listener,Q!==a&&i.isPropagationStopped())break t;dc(i,l,s),a=Q}}}if(Mr)throw t=El,Mr=!1,El=null,t}function u2(t,e){var n=e[Fl];n===void 0&&(n=e[Fl]=new Set);var r=t+"__bubble";n.has(r)||(jv(e,t,2,!1),n.add(r))}function ka(t,e,n){var r=0;e&&(r|=4),jv(n,t,r,e)}var hn="_reactListening"+Math.random().toString(36).slice(2);function R0(t){if(!t[hn]){t[hn]=!0,Xm.forEach(function(n){n!=="selectionchange"&&(wM.has(n)||ka(n,!1,t),ka(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[hn]||(e[hn]=!0,ka("selectionchange",!1,e))}}function jv(t,e,n,r){switch(bv(e)){case 1:var i=jb;break;case 4:i=Fb;break;default:i=bs}n=i.bind(null,e,n,t),i=void 0,!Cl||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function $a(t,e,n,r,i){var a=r;if(!(e&1)&&!(e&2)&&r!==null)t:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var l=r.stateNode.containerInfo;if(l===i||l.nodeType===8&&l.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var Q=o.tag;if((Q===3||Q===4)&&(Q=o.stateNode.containerInfo,Q===i||Q.nodeType===8&&Q.parentNode===i))return;o=o.return}for(;l!==null;){if(o=_5(l),o===null)return;if(Q=o.tag,Q===5||Q===6){r=a=o;continue t}l=l.parentNode}}r=r.return}uv(function(){var s=a,u=gs(n),T=[];t:{var c=Nv.get(t);if(c!==void 0){var f=_s,h=t;switch(t){case"keypress":if(Tr(n)===0)break t;case"keydown":case"keyup":f=rM;break;case"focusin":h="focus",f=Aa;break;case"focusout":h="blur",f=Aa;break;case"beforeblur":case"afterblur":f=Aa;break;case"click":if(n.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":f=rc;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":f=qb;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":f=oM;break;case kv:case $v:case Bv:f=Xb;break;case Pv:f=QM;break;case"scroll":f=Rb;break;case"wheel":f=uM;break;case"copy":case"cut":case"paste":f=Ub;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":f=ac}var p=(e&4)!==0,v=!p&&t==="scroll",d=p?c!==null?c+"Capture":null:c;p=[];for(var m=s,y;m!==null;){y=m;var x=y.stateNode;if(y.tag===5&&x!==null&&(y=x,d!==null&&(x=B0(m,d),x!=null&&p.push(z0(m,x,y)))),v)break;m=m.return}0<p.length&&(c=new f(c,h,null,n,u),T.push({event:c,listeners:p}))}}if(!(e&7)){t:{if(c=t==="mouseover"||t==="pointerover",f=t==="mouseout"||t==="pointerout",c&&n!==Al&&(h=n.relatedTarget||n.fromElement)&&(_5(h)||h[o6]))break t;if((f||c)&&(c=u.window===u?u:(c=u.ownerDocument)?c.defaultView||c.parentWindow:window,f?(h=n.relatedTarget||n.toElement,f=s,h=h?_5(h):null,h!==null&&(v=Z5(h),h!==v||h.tag!==5&&h.tag!==6)&&(h=null)):(f=null,h=s),f!==h)){if(p=rc,x="onMouseLeave",d="onMouseEnter",m="mouse",(t==="pointerout"||t==="pointerover")&&(p=ac,x="onPointerLeave",d="onPointerEnter",m="pointer"),v=f==null?c:Lt(f),y=h==null?c:Lt(h),c=new p(x,m+"leave",f,n,u),c.target=v,c.relatedTarget=y,x=null,_5(u)===s&&(p=new p(d,m+"enter",h,n,u),p.target=y,p.relatedTarget=v,x=p),v=x,f&&h)e:{for(p=f,d=h,m=0,y=p;y;y=nt(y))m++;for(y=0,x=d;x;x=nt(x))y++;for(;0<m-y;)p=nt(p),m--;for(;0<y-m;)d=nt(d),y--;for(;m--;){if(p===d||d!==null&&p===d.alternate)break e;p=nt(p),d=nt(d)}p=null}else p=null;f!==null&&pc(T,c,f,p,!1),h!==null&&v!==null&&pc(T,v,h,p,!0)}}t:{if(c=s?Lt(s):window,f=c.nodeName&&c.nodeName.toLowerCase(),f==="select"||f==="input"&&c.type==="file")var L=mM;else if(Qc(c))if(Vv)L=xM;else{L=yM;var H=vM}else(f=c.nodeName)&&f.toLowerCase()==="input"&&(c.type==="checkbox"||c.type==="radio")&&(L=gM);if(L&&(L=L(t,s))){Av(T,L,n,u);break t}H&&H(t,c,s),t==="focusout"&&(H=c._wrapperState)&&H.controlled&&c.type==="number"&&bl(c,"number",c.value)}switch(H=s?Lt(s):window,t){case"focusin":(Qc(H)||H.contentEditable==="true")&&(gt=H,$l=s,M0=null);break;case"focusout":M0=$l=gt=null;break;case"mousedown":Bl=!0;break;case"contextmenu":case"mouseup":case"dragend":Bl=!1,fc(T,n,u);break;case"selectionchange":if(bM)break;case"keydown":case"keyup":fc(T,n,u)}var M;if(Ss)t:{switch(t){case"compositionstart":var w="onCompositionStart";break t;case"compositionend":w="onCompositionEnd";break t;case"compositionupdate":w="onCompositionUpdate";break t}w=void 0}else yt?wv(t,n)&&(w="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(w="onCompositionStart");w&&(_v&&n.locale!=="ko"&&(yt||w!=="onCompositionStart"?w==="onCompositionEnd"&&yt&&(M=Mv()):(D6=u,Ms="value"in D6?D6.value:D6.textContent,yt=!0)),H=Vr(s,w),0<H.length&&(w=new ic(w,t,null,n,u),T.push({event:w,listeners:H}),M?w.data=M:(M=Sv(n),M!==null&&(w.data=M)))),(M=cM?fM(t,n):hM(t,n))&&(s=Vr(s,"onBeforeInput"),0<s.length&&(u=new ic("onBeforeInput","beforeinput",null,n,u),T.push({event:u,listeners:s}),u.data=M))}Iv(T,e)})}function z0(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Vr(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,a=i.stateNode;i.tag===5&&a!==null&&(i=a,a=B0(t,n),a!=null&&r.unshift(z0(t,a,i)),a=B0(t,e),a!=null&&r.push(z0(t,a,i))),t=t.return}return r}function nt(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function pc(t,e,n,r,i){for(var a=e._reactName,o=[];n!==null&&n!==r;){var l=n,Q=l.alternate,s=l.stateNode;if(Q!==null&&Q===r)break;l.tag===5&&s!==null&&(l=s,i?(Q=B0(n,a),Q!=null&&o.unshift(z0(n,Q,l))):i||(Q=B0(n,a),Q!=null&&o.push(z0(n,Q,l)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var SM=/\r\n?/g,AM=/\u0000|\uFFFD/g;function mc(t){return(typeof t=="string"?t:""+t).replace(SM,`
`).replace(AM,"")}function dn(t,e,n){if(e=mc(e),mc(t)!==e&&n)throw Error(Y(425))}function Cr(){}var Pl=null,Nl=null;function Il(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var jl=typeof setTimeout=="function"?setTimeout:void 0,VM=typeof clearTimeout=="function"?clearTimeout:void 0,vc=typeof Promise=="function"?Promise:void 0,CM=typeof queueMicrotask=="function"?queueMicrotask:typeof vc<"u"?function(t){return vc.resolve(null).then(t).catch(EM)}:jl;function EM(t){setTimeout(function(){throw t})}function Ba(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),I0(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);I0(e)}function I6(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function yc(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var le=Math.random().toString(36).slice(2),L4="__reactFiber$"+le,q0="__reactProps$"+le,o6="__reactContainer$"+le,Fl="__reactEvents$"+le,DM="__reactListeners$"+le,OM="__reactHandles$"+le;function _5(t){var e=t[L4];if(e)return e;for(var n=t.parentNode;n;){if(e=n[o6]||n[L4]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=yc(t);t!==null;){if(n=t[L4])return n;t=yc(t)}return e}t=n,n=t.parentNode}return null}function d7(t){return t=t[L4]||t[o6],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Lt(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(Y(33))}function D8(t){return t[q0]||null}var Rl=[],Ht=-1;function e5(t){return{current:t}}function c2(t){0>Ht||(t.current=Rl[Ht],Rl[Ht]=null,Ht--)}function o2(t,e){Ht++,Rl[Ht]=t.current,t.current=e}var X6={},e3=e5(X6),v3=e5(!1),D5=X6;function It(t,e){var n=t.type.contextTypes;if(!n)return X6;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},a;for(a in n)i[a]=e[a];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function y3(t){return t=t.childContextTypes,t!=null}function Er(){c2(v3),c2(e3)}function gc(t,e,n){if(e3.current!==X6)throw Error(Y(168));o2(e3,e),o2(v3,n)}function Fv(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(Y(108,vb(t)||"Unknown",i));return x2({},n,r)}function Dr(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||X6,D5=e3.current,o2(e3,t),o2(v3,v3.current),!0}function xc(t,e,n){var r=t.stateNode;if(!r)throw Error(Y(169));n?(t=Fv(t,e,D5),r.__reactInternalMemoizedMergedChildContext=t,c2(v3),c2(e3),o2(e3,t)):c2(v3),o2(v3,n)}var Z4=null,O8=!1,Pa=!1;function Rv(t){Z4===null?Z4=[t]:Z4.push(t)}function kM(t){O8=!0,Rv(t)}function n5(){if(!Pa&&Z4!==null){Pa=!0;var t=0,e=W1;try{var n=Z4;for(W1=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}Z4=null,O8=!1}catch(i){throw Z4!==null&&(Z4=Z4.slice(t+1)),hv(xs,n5),i}finally{W1=e,Pa=!1}}return null}var bt=[],Mt=0,Or=null,kr=0,$3=[],B3=0,O5=null,G4=1,X4="";function L5(t,e){bt[Mt++]=kr,bt[Mt++]=Or,Or=t,kr=e}function zv(t,e,n){$3[B3++]=G4,$3[B3++]=X4,$3[B3++]=O5,O5=t;var r=G4;t=X4;var i=32-i4(r)-1;r&=~(1<<i),n+=1;var a=32-i4(e)+i;if(30<a){var o=i-i%5;a=(r&(1<<o)-1).toString(32),r>>=o,i-=o,G4=1<<32-i4(e)+i|n<<i|r,X4=a+t}else G4=1<<a|n<<i|r,X4=t}function Vs(t){t.return!==null&&(L5(t,1),zv(t,1,0))}function Cs(t){for(;t===Or;)Or=bt[--Mt],bt[Mt]=null,kr=bt[--Mt],bt[Mt]=null;for(;t===O5;)O5=$3[--B3],$3[B3]=null,X4=$3[--B3],$3[B3]=null,G4=$3[--B3],$3[B3]=null}var w3=null,_3=null,h2=!1,r4=null;function qv(t,e){var n=I3(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function Lc(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,w3=t,_3=I6(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,w3=t,_3=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=O5!==null?{id:G4,overflow:X4}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=I3(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,w3=t,_3=null,!0):!1;default:return!1}}function zl(t){return(t.mode&1)!==0&&(t.flags&128)===0}function ql(t){if(h2){var e=_3;if(e){var n=e;if(!Lc(t,e)){if(zl(t))throw Error(Y(418));e=I6(n.nextSibling);var r=w3;e&&Lc(t,e)?qv(r,n):(t.flags=t.flags&-4097|2,h2=!1,w3=t)}}else{if(zl(t))throw Error(Y(418));t.flags=t.flags&-4097|2,h2=!1,w3=t}}}function Hc(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;w3=t}function pn(t){if(t!==w3)return!1;if(!h2)return Hc(t),h2=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!Il(t.type,t.memoizedProps)),e&&(e=_3)){if(zl(t))throw Zv(),Error(Y(418));for(;e;)qv(t,e),e=I6(e.nextSibling)}if(Hc(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(Y(317));t:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){_3=I6(t.nextSibling);break t}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}_3=null}}else _3=w3?I6(t.stateNode.nextSibling):null;return!0}function Zv(){for(var t=_3;t;)t=I6(t.nextSibling)}function jt(){_3=w3=null,h2=!1}function Es(t){r4===null?r4=[t]:r4.push(t)}var $M=c6.ReactCurrentBatchConfig;function t4(t,e){if(t&&t.defaultProps){e=x2({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}var $r=e5(null),Br=null,_t=null,Ds=null;function Os(){Ds=_t=Br=null}function ks(t){var e=$r.current;c2($r),t._currentValue=e}function Zl(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function Ot(t,e){Br=t,Ds=_t=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(p3=!0),t.firstContext=null)}function R3(t){var e=t._currentValue;if(Ds!==t)if(t={context:t,memoizedValue:e,next:null},_t===null){if(Br===null)throw Error(Y(308));_t=t,Br.dependencies={lanes:0,firstContext:t}}else _t=_t.next=t;return e}var w5=null;function $s(t){w5===null?w5=[t]:w5.push(t)}function Gv(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,$s(e)):(n.next=i.next,i.next=n),e.interleaved=n,l6(t,r)}function l6(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var A6=!1;function Bs(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Xv(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function K4(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function j6(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,z1&2){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,l6(t,n)}return i=r.interleaved,i===null?(e.next=e,$s(r)):(e.next=i.next,i.next=e),r.interleaved=e,l6(t,n)}function cr(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Ls(t,n)}}function bc(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,a=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};a===null?i=a=o:a=a.next=o,n=n.next}while(n!==null);a===null?i=a=e:a=a.next=e}else i=a=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:a,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function Pr(t,e,n,r){var i=t.updateQueue;A6=!1;var a=i.firstBaseUpdate,o=i.lastBaseUpdate,l=i.shared.pending;if(l!==null){i.shared.pending=null;var Q=l,s=Q.next;Q.next=null,o===null?a=s:o.next=s,o=Q;var u=t.alternate;u!==null&&(u=u.updateQueue,l=u.lastBaseUpdate,l!==o&&(l===null?u.firstBaseUpdate=s:l.next=s,u.lastBaseUpdate=Q))}if(a!==null){var T=i.baseState;o=0,u=s=Q=null,l=a;do{var c=l.lane,f=l.eventTime;if((r&c)===c){u!==null&&(u=u.next={eventTime:f,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});t:{var h=t,p=l;switch(c=e,f=n,p.tag){case 1:if(h=p.payload,typeof h=="function"){T=h.call(f,T,c);break t}T=h;break t;case 3:h.flags=h.flags&-65537|128;case 0:if(h=p.payload,c=typeof h=="function"?h.call(f,T,c):h,c==null)break t;T=x2({},T,c);break t;case 2:A6=!0}}l.callback!==null&&l.lane!==0&&(t.flags|=64,c=i.effects,c===null?i.effects=[l]:c.push(l))}else f={eventTime:f,lane:c,tag:l.tag,payload:l.payload,callback:l.callback,next:null},u===null?(s=u=f,Q=T):u=u.next=f,o|=c;if(l=l.next,l===null){if(l=i.shared.pending,l===null)break;c=l,l=c.next,c.next=null,i.lastBaseUpdate=c,i.shared.pending=null}}while(1);if(u===null&&(Q=T),i.baseState=Q,i.firstBaseUpdate=s,i.lastBaseUpdate=u,e=i.shared.interleaved,e!==null){i=e;do o|=i.lane,i=i.next;while(i!==e)}else a===null&&(i.shared.lanes=0);$5|=o,t.lanes=o,t.memoizedState=T}}function Mc(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(Y(191,i));i.call(r)}}}var Wv=new Gm.Component().refs;function Gl(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:x2({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var k8={isMounted:function(t){return(t=t._reactInternals)?Z5(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=o3(),i=R6(t),a=K4(r,i);a.payload=e,n!=null&&(a.callback=n),e=j6(t,a,i),e!==null&&(a4(e,t,i,r),cr(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=o3(),i=R6(t),a=K4(r,i);a.tag=1,a.payload=e,n!=null&&(a.callback=n),e=j6(t,a,i),e!==null&&(a4(e,t,i,r),cr(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=o3(),r=R6(t),i=K4(n,r);i.tag=2,e!=null&&(i.callback=e),e=j6(t,i,r),e!==null&&(a4(e,t,r,n),cr(e,t,r))}};function _c(t,e,n,r,i,a,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,a,o):e.prototype&&e.prototype.isPureReactComponent?!F0(n,r)||!F0(i,a):!0}function Uv(t,e,n){var r=!1,i=X6,a=e.contextType;return typeof a=="object"&&a!==null?a=R3(a):(i=y3(e)?D5:e3.current,r=e.contextTypes,a=(r=r!=null)?It(t,i):X6),e=new e(n,a),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=k8,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=a),e}function wc(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&k8.enqueueReplaceState(e,e.state,null)}function Xl(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs=Wv,Bs(t);var a=e.contextType;typeof a=="object"&&a!==null?i.context=R3(a):(a=y3(e)?D5:e3.current,i.context=It(t,a)),i.state=t.memoizedState,a=e.getDerivedStateFromProps,typeof a=="function"&&(Gl(t,e,a,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&k8.enqueueReplaceState(i,i.state,null),Pr(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function Ce(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(Y(309));var r=n.stateNode}if(!r)throw Error(Y(147,t));var i=r,a=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===a?e.ref:(e=function(o){var l=i.refs;l===Wv&&(l=i.refs={}),o===null?delete l[a]:l[a]=o},e._stringRef=a,e)}if(typeof t!="string")throw Error(Y(284));if(!n._owner)throw Error(Y(290,t))}return t}function mn(t,e){throw t=Object.prototype.toString.call(e),Error(Y(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function Sc(t){var e=t._init;return e(t._payload)}function Kv(t){function e(d,m){if(t){var y=d.deletions;y===null?(d.deletions=[m],d.flags|=16):y.push(m)}}function n(d,m){if(!t)return null;for(;m!==null;)e(d,m),m=m.sibling;return null}function r(d,m){for(d=new Map;m!==null;)m.key!==null?d.set(m.key,m):d.set(m.index,m),m=m.sibling;return d}function i(d,m){return d=z6(d,m),d.index=0,d.sibling=null,d}function a(d,m,y){return d.index=y,t?(y=d.alternate,y!==null?(y=y.index,y<m?(d.flags|=2,m):y):(d.flags|=2,m)):(d.flags|=1048576,m)}function o(d){return t&&d.alternate===null&&(d.flags|=2),d}function l(d,m,y,x){return m===null||m.tag!==6?(m=qa(y,d.mode,x),m.return=d,m):(m=i(m,y),m.return=d,m)}function Q(d,m,y,x){var L=y.type;return L===vt?u(d,m,y.props.children,x,y.key):m!==null&&(m.elementType===L||typeof L=="object"&&L!==null&&L.$$typeof===S6&&Sc(L)===m.type)?(x=i(m,y.props),x.ref=Ce(d,m,y),x.return=d,x):(x=vr(y.type,y.key,y.props,null,d.mode,x),x.ref=Ce(d,m,y),x.return=d,x)}function s(d,m,y,x){return m===null||m.tag!==4||m.stateNode.containerInfo!==y.containerInfo||m.stateNode.implementation!==y.implementation?(m=Za(y,d.mode,x),m.return=d,m):(m=i(m,y.children||[]),m.return=d,m)}function u(d,m,y,x,L){return m===null||m.tag!==7?(m=C5(y,d.mode,x,L),m.return=d,m):(m=i(m,y),m.return=d,m)}function T(d,m,y){if(typeof m=="string"&&m!==""||typeof m=="number")return m=qa(""+m,d.mode,y),m.return=d,m;if(typeof m=="object"&&m!==null){switch(m.$$typeof){case on:return y=vr(m.type,m.key,m.props,null,d.mode,y),y.ref=Ce(d,null,m),y.return=d,y;case mt:return m=Za(m,d.mode,y),m.return=d,m;case S6:var x=m._init;return T(d,x(m._payload),y)}if(p0(m)||_e(m))return m=C5(m,d.mode,y,null),m.return=d,m;mn(d,m)}return null}function c(d,m,y,x){var L=m!==null?m.key:null;if(typeof y=="string"&&y!==""||typeof y=="number")return L!==null?null:l(d,m,""+y,x);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case on:return y.key===L?Q(d,m,y,x):null;case mt:return y.key===L?s(d,m,y,x):null;case S6:return L=y._init,c(d,m,L(y._payload),x)}if(p0(y)||_e(y))return L!==null?null:u(d,m,y,x,null);mn(d,y)}return null}function f(d,m,y,x,L){if(typeof x=="string"&&x!==""||typeof x=="number")return d=d.get(y)||null,l(m,d,""+x,L);if(typeof x=="object"&&x!==null){switch(x.$$typeof){case on:return d=d.get(x.key===null?y:x.key)||null,Q(m,d,x,L);case mt:return d=d.get(x.key===null?y:x.key)||null,s(m,d,x,L);case S6:var H=x._init;return f(d,m,y,H(x._payload),L)}if(p0(x)||_e(x))return d=d.get(y)||null,u(m,d,x,L,null);mn(m,x)}return null}function h(d,m,y,x){for(var L=null,H=null,M=m,w=m=0,S=null;M!==null&&w<y.length;w++){M.index>w?(S=M,M=null):S=M.sibling;var D=c(d,M,y[w],x);if(D===null){M===null&&(M=S);break}t&&M&&D.alternate===null&&e(d,M),m=a(D,m,w),H===null?L=D:H.sibling=D,H=D,M=S}if(w===y.length)return n(d,M),h2&&L5(d,w),L;if(M===null){for(;w<y.length;w++)M=T(d,y[w],x),M!==null&&(m=a(M,m,w),H===null?L=M:H.sibling=M,H=M);return h2&&L5(d,w),L}for(M=r(d,M);w<y.length;w++)S=f(M,d,w,y[w],x),S!==null&&(t&&S.alternate!==null&&M.delete(S.key===null?w:S.key),m=a(S,m,w),H===null?L=S:H.sibling=S,H=S);return t&&M.forEach(function(E){return e(d,E)}),h2&&L5(d,w),L}function p(d,m,y,x){var L=_e(y);if(typeof L!="function")throw Error(Y(150));if(y=L.call(y),y==null)throw Error(Y(151));for(var H=L=null,M=m,w=m=0,S=null,D=y.next();M!==null&&!D.done;w++,D=y.next()){M.index>w?(S=M,M=null):S=M.sibling;var E=c(d,M,D.value,x);if(E===null){M===null&&(M=S);break}t&&M&&E.alternate===null&&e(d,M),m=a(E,m,w),H===null?L=E:H.sibling=E,H=E,M=S}if(D.done)return n(d,M),h2&&L5(d,w),L;if(M===null){for(;!D.done;w++,D=y.next())D=T(d,D.value,x),D!==null&&(m=a(D,m,w),H===null?L=D:H.sibling=D,H=D);return h2&&L5(d,w),L}for(M=r(d,M);!D.done;w++,D=y.next())D=f(M,d,w,D.value,x),D!==null&&(t&&D.alternate!==null&&M.delete(D.key===null?w:D.key),m=a(D,m,w),H===null?L=D:H.sibling=D,H=D);return t&&M.forEach(function($){return e(d,$)}),h2&&L5(d,w),L}function v(d,m,y,x){if(typeof y=="object"&&y!==null&&y.type===vt&&y.key===null&&(y=y.props.children),typeof y=="object"&&y!==null){switch(y.$$typeof){case on:t:{for(var L=y.key,H=m;H!==null;){if(H.key===L){if(L=y.type,L===vt){if(H.tag===7){n(d,H.sibling),m=i(H,y.props.children),m.return=d,d=m;break t}}else if(H.elementType===L||typeof L=="object"&&L!==null&&L.$$typeof===S6&&Sc(L)===H.type){n(d,H.sibling),m=i(H,y.props),m.ref=Ce(d,H,y),m.return=d,d=m;break t}n(d,H);break}else e(d,H);H=H.sibling}y.type===vt?(m=C5(y.props.children,d.mode,x,y.key),m.return=d,d=m):(x=vr(y.type,y.key,y.props,null,d.mode,x),x.ref=Ce(d,m,y),x.return=d,d=x)}return o(d);case mt:t:{for(H=y.key;m!==null;){if(m.key===H)if(m.tag===4&&m.stateNode.containerInfo===y.containerInfo&&m.stateNode.implementation===y.implementation){n(d,m.sibling),m=i(m,y.children||[]),m.return=d,d=m;break t}else{n(d,m);break}else e(d,m);m=m.sibling}m=Za(y,d.mode,x),m.return=d,d=m}return o(d);case S6:return H=y._init,v(d,m,H(y._payload),x)}if(p0(y))return h(d,m,y,x);if(_e(y))return p(d,m,y,x);mn(d,y)}return typeof y=="string"&&y!==""||typeof y=="number"?(y=""+y,m!==null&&m.tag===6?(n(d,m.sibling),m=i(m,y),m.return=d,d=m):(n(d,m),m=qa(y,d.mode,x),m.return=d,d=m),o(d)):n(d,m)}return v}var Ft=Kv(!0),Yv=Kv(!1),p7={},_4=e5(p7),Z0=e5(p7),G0=e5(p7);function S5(t){if(t===p7)throw Error(Y(174));return t}function Ps(t,e){switch(o2(G0,e),o2(Z0,t),o2(_4,p7),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:_l(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=_l(e,t)}c2(_4),o2(_4,e)}function Rt(){c2(_4),c2(Z0),c2(G0)}function Jv(t){S5(G0.current);var e=S5(_4.current),n=_l(e,t.type);e!==n&&(o2(Z0,t),o2(_4,n))}function Ns(t){Z0.current===t&&(c2(_4),c2(Z0))}var v2=e5(0);function Nr(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Na=[];function Is(){for(var t=0;t<Na.length;t++)Na[t]._workInProgressVersionPrimary=null;Na.length=0}var fr=c6.ReactCurrentDispatcher,Ia=c6.ReactCurrentBatchConfig,k5=0,g2=null,$2=null,I2=null,Ir=!1,_0=!1,X0=0,BM=0;function U2(){throw Error(Y(321))}function js(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!l4(t[n],e[n]))return!1;return!0}function Fs(t,e,n,r,i,a){if(k5=a,g2=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,fr.current=t===null||t.memoizedState===null?jM:FM,t=n(r,i),_0){a=0;do{if(_0=!1,X0=0,25<=a)throw Error(Y(301));a+=1,I2=$2=null,e.updateQueue=null,fr.current=RM,t=n(r,i)}while(_0)}if(fr.current=jr,e=$2!==null&&$2.next!==null,k5=0,I2=$2=g2=null,Ir=!1,e)throw Error(Y(300));return t}function Rs(){var t=X0!==0;return X0=0,t}function y4(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return I2===null?g2.memoizedState=I2=t:I2=I2.next=t,I2}function z3(){if($2===null){var t=g2.alternate;t=t!==null?t.memoizedState:null}else t=$2.next;var e=I2===null?g2.memoizedState:I2.next;if(e!==null)I2=e,$2=t;else{if(t===null)throw Error(Y(310));$2=t,t={memoizedState:$2.memoizedState,baseState:$2.baseState,baseQueue:$2.baseQueue,queue:$2.queue,next:null},I2===null?g2.memoizedState=I2=t:I2=I2.next=t}return I2}function W0(t,e){return typeof e=="function"?e(t):e}function ja(t){var e=z3(),n=e.queue;if(n===null)throw Error(Y(311));n.lastRenderedReducer=t;var r=$2,i=r.baseQueue,a=n.pending;if(a!==null){if(i!==null){var o=i.next;i.next=a.next,a.next=o}r.baseQueue=i=a,n.pending=null}if(i!==null){a=i.next,r=r.baseState;var l=o=null,Q=null,s=a;do{var u=s.lane;if((k5&u)===u)Q!==null&&(Q=Q.next={lane:0,action:s.action,hasEagerState:s.hasEagerState,eagerState:s.eagerState,next:null}),r=s.hasEagerState?s.eagerState:t(r,s.action);else{var T={lane:u,action:s.action,hasEagerState:s.hasEagerState,eagerState:s.eagerState,next:null};Q===null?(l=Q=T,o=r):Q=Q.next=T,g2.lanes|=u,$5|=u}s=s.next}while(s!==null&&s!==a);Q===null?o=r:Q.next=l,l4(r,e.memoizedState)||(p3=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=Q,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do a=i.lane,g2.lanes|=a,$5|=a,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function Fa(t){var e=z3(),n=e.queue;if(n===null)throw Error(Y(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,a=e.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do a=t(a,o.action),o=o.next;while(o!==i);l4(a,e.memoizedState)||(p3=!0),e.memoizedState=a,e.baseQueue===null&&(e.baseState=a),n.lastRenderedState=a}return[a,r]}function ty(){}function ey(t,e){var n=g2,r=z3(),i=e(),a=!l4(r.memoizedState,i);if(a&&(r.memoizedState=i,p3=!0),r=r.queue,zs(iy.bind(null,n,r,t),[t]),r.getSnapshot!==e||a||I2!==null&&I2.memoizedState.tag&1){if(n.flags|=2048,U0(9,ry.bind(null,n,r,i,e),void 0,null),j2===null)throw Error(Y(349));k5&30||ny(n,e,i)}return i}function ny(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=g2.updateQueue,e===null?(e={lastEffect:null,stores:null},g2.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function ry(t,e,n,r){e.value=n,e.getSnapshot=r,ay(e)&&oy(t)}function iy(t,e,n){return n(function(){ay(e)&&oy(t)})}function ay(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!l4(t,n)}catch{return!0}}function oy(t){var e=l6(t,1);e!==null&&a4(e,t,1,-1)}function Ac(t){var e=y4();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:W0,lastRenderedState:t},e.queue=t,t=t.dispatch=IM.bind(null,g2,t),[e.memoizedState,t]}function U0(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=g2.updateQueue,e===null?(e={lastEffect:null,stores:null},g2.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function ly(){return z3().memoizedState}function hr(t,e,n,r){var i=y4();g2.flags|=t,i.memoizedState=U0(1|e,n,void 0,r===void 0?null:r)}function $8(t,e,n,r){var i=z3();r=r===void 0?null:r;var a=void 0;if($2!==null){var o=$2.memoizedState;if(a=o.destroy,r!==null&&js(r,o.deps)){i.memoizedState=U0(e,n,a,r);return}}g2.flags|=t,i.memoizedState=U0(1|e,n,a,r)}function Vc(t,e){return hr(8390656,8,t,e)}function zs(t,e){return $8(2048,8,t,e)}function Qy(t,e){return $8(4,2,t,e)}function sy(t,e){return $8(4,4,t,e)}function uy(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function Ty(t,e,n){return n=n!=null?n.concat([t]):null,$8(4,4,uy.bind(null,e,t),n)}function qs(){}function cy(t,e){var n=z3();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&js(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function fy(t,e){var n=z3();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&js(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function hy(t,e,n){return k5&21?(l4(n,e)||(n=mv(),g2.lanes|=n,$5|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,p3=!0),t.memoizedState=n)}function PM(t,e){var n=W1;W1=n!==0&&4>n?n:4,t(!0);var r=Ia.transition;Ia.transition={};try{t(!1),e()}finally{W1=n,Ia.transition=r}}function dy(){return z3().memoizedState}function NM(t,e,n){var r=R6(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},py(t))my(e,n);else if(n=Gv(t,e,n,r),n!==null){var i=o3();a4(n,t,r,i),vy(n,e,r)}}function IM(t,e,n){var r=R6(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(py(t))my(e,i);else{var a=t.alternate;if(t.lanes===0&&(a===null||a.lanes===0)&&(a=e.lastRenderedReducer,a!==null))try{var o=e.lastRenderedState,l=a(o,n);if(i.hasEagerState=!0,i.eagerState=l,l4(l,o)){var Q=e.interleaved;Q===null?(i.next=i,$s(e)):(i.next=Q.next,Q.next=i),e.interleaved=i;return}}catch{}finally{}n=Gv(t,e,i,r),n!==null&&(i=o3(),a4(n,t,r,i),vy(n,e,r))}}function py(t){var e=t.alternate;return t===g2||e!==null&&e===g2}function my(t,e){_0=Ir=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function vy(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Ls(t,n)}}var jr={readContext:R3,useCallback:U2,useContext:U2,useEffect:U2,useImperativeHandle:U2,useInsertionEffect:U2,useLayoutEffect:U2,useMemo:U2,useReducer:U2,useRef:U2,useState:U2,useDebugValue:U2,useDeferredValue:U2,useTransition:U2,useMutableSource:U2,useSyncExternalStore:U2,useId:U2,unstable_isNewReconciler:!1},jM={readContext:R3,useCallback:function(t,e){return y4().memoizedState=[t,e===void 0?null:e],t},useContext:R3,useEffect:Vc,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,hr(4194308,4,uy.bind(null,e,t),n)},useLayoutEffect:function(t,e){return hr(4194308,4,t,e)},useInsertionEffect:function(t,e){return hr(4,2,t,e)},useMemo:function(t,e){var n=y4();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=y4();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=NM.bind(null,g2,t),[r.memoizedState,t]},useRef:function(t){var e=y4();return t={current:t},e.memoizedState=t},useState:Ac,useDebugValue:qs,useDeferredValue:function(t){return y4().memoizedState=t},useTransition:function(){var t=Ac(!1),e=t[0];return t=PM.bind(null,t[1]),y4().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=g2,i=y4();if(h2){if(n===void 0)throw Error(Y(407));n=n()}else{if(n=e(),j2===null)throw Error(Y(349));k5&30||ny(r,e,n)}i.memoizedState=n;var a={value:n,getSnapshot:e};return i.queue=a,Vc(iy.bind(null,r,a,t),[t]),r.flags|=2048,U0(9,ry.bind(null,r,a,n,e),void 0,null),n},useId:function(){var t=y4(),e=j2.identifierPrefix;if(h2){var n=X4,r=G4;n=(r&~(1<<32-i4(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=X0++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=BM++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},FM={readContext:R3,useCallback:cy,useContext:R3,useEffect:zs,useImperativeHandle:Ty,useInsertionEffect:Qy,useLayoutEffect:sy,useMemo:fy,useReducer:ja,useRef:ly,useState:function(){return ja(W0)},useDebugValue:qs,useDeferredValue:function(t){var e=z3();return hy(e,$2.memoizedState,t)},useTransition:function(){var t=ja(W0)[0],e=z3().memoizedState;return[t,e]},useMutableSource:ty,useSyncExternalStore:ey,useId:dy,unstable_isNewReconciler:!1},RM={readContext:R3,useCallback:cy,useContext:R3,useEffect:zs,useImperativeHandle:Ty,useInsertionEffect:Qy,useLayoutEffect:sy,useMemo:fy,useReducer:Fa,useRef:ly,useState:function(){return Fa(W0)},useDebugValue:qs,useDeferredValue:function(t){var e=z3();return $2===null?e.memoizedState=t:hy(e,$2.memoizedState,t)},useTransition:function(){var t=Fa(W0)[0],e=z3().memoizedState;return[t,e]},useMutableSource:ty,useSyncExternalStore:ey,useId:dy,unstable_isNewReconciler:!1};function zt(t,e){try{var n="",r=e;do n+=mb(r),r=r.return;while(r);var i=n}catch(a){i=`
Error generating stack: `+a.message+`
`+a.stack}return{value:t,source:e,stack:i,digest:null}}function Ra(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function Wl(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var zM=typeof WeakMap=="function"?WeakMap:Map;function yy(t,e,n){n=K4(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){Rr||(Rr=!0,aQ=r),Wl(t,e)},n}function gy(t,e,n){n=K4(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){Wl(t,e)}}var a=t.stateNode;return a!==null&&typeof a.componentDidCatch=="function"&&(n.callback=function(){Wl(t,e),typeof r!="function"&&(F6===null?F6=new Set([this]):F6.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function Cc(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new zM;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=i_.bind(null,t,e,n),e.then(t,t))}function Ec(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function Dc(t,e,n,r,i){return t.mode&1?(t.flags|=65536,t.lanes=i,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=K4(-1,1),e.tag=2,j6(n,e,1))),n.lanes|=1),t)}var qM=c6.ReactCurrentOwner,p3=!1;function r3(t,e,n,r){e.child=t===null?Yv(e,null,n,r):Ft(e,t.child,n,r)}function Oc(t,e,n,r,i){n=n.render;var a=e.ref;return Ot(e,i),r=Fs(t,e,n,r,a,i),n=Rs(),t!==null&&!p3?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Q6(t,e,i)):(h2&&n&&Vs(e),e.flags|=1,r3(t,e,r,i),e.child)}function kc(t,e,n,r,i){if(t===null){var a=n.type;return typeof a=="function"&&!Js(a)&&a.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=a,xy(t,e,a,r,i)):(t=vr(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(a=t.child,!(t.lanes&i)){var o=a.memoizedProps;if(n=n.compare,n=n!==null?n:F0,n(o,r)&&t.ref===e.ref)return Q6(t,e,i)}return e.flags|=1,t=z6(a,r),t.ref=e.ref,t.return=e,e.child=t}function xy(t,e,n,r,i){if(t!==null){var a=t.memoizedProps;if(F0(a,r)&&t.ref===e.ref)if(p3=!1,e.pendingProps=r=a,(t.lanes&i)!==0)t.flags&131072&&(p3=!0);else return e.lanes=t.lanes,Q6(t,e,i)}return Ul(t,e,n,r,i)}function Ly(t,e,n){var r=e.pendingProps,i=r.children,a=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},o2(St,b3),b3|=n;else{if(!(n&1073741824))return t=a!==null?a.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,o2(St,b3),b3|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=a!==null?a.baseLanes:n,o2(St,b3),b3|=r}else a!==null?(r=a.baseLanes|n,e.memoizedState=null):r=n,o2(St,b3),b3|=r;return r3(t,e,i,n),e.child}function Hy(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function Ul(t,e,n,r,i){var a=y3(n)?D5:e3.current;return a=It(e,a),Ot(e,i),n=Fs(t,e,n,r,a,i),r=Rs(),t!==null&&!p3?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Q6(t,e,i)):(h2&&r&&Vs(e),e.flags|=1,r3(t,e,n,i),e.child)}function $c(t,e,n,r,i){if(y3(n)){var a=!0;Dr(e)}else a=!1;if(Ot(e,i),e.stateNode===null)dr(t,e),Uv(e,n,r),Xl(e,n,r,i),r=!0;else if(t===null){var o=e.stateNode,l=e.memoizedProps;o.props=l;var Q=o.context,s=n.contextType;typeof s=="object"&&s!==null?s=R3(s):(s=y3(n)?D5:e3.current,s=It(e,s));var u=n.getDerivedStateFromProps,T=typeof u=="function"||typeof o.getSnapshotBeforeUpdate=="function";T||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==r||Q!==s)&&wc(e,o,r,s),A6=!1;var c=e.memoizedState;o.state=c,Pr(e,r,o,i),Q=e.memoizedState,l!==r||c!==Q||v3.current||A6?(typeof u=="function"&&(Gl(e,n,u,r),Q=e.memoizedState),(l=A6||_c(e,n,l,r,c,Q,s))?(T||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=Q),o.props=r,o.state=Q,o.context=s,r=l):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,Xv(t,e),l=e.memoizedProps,s=e.type===e.elementType?l:t4(e.type,l),o.props=s,T=e.pendingProps,c=o.context,Q=n.contextType,typeof Q=="object"&&Q!==null?Q=R3(Q):(Q=y3(n)?D5:e3.current,Q=It(e,Q));var f=n.getDerivedStateFromProps;(u=typeof f=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==T||c!==Q)&&wc(e,o,r,Q),A6=!1,c=e.memoizedState,o.state=c,Pr(e,r,o,i);var h=e.memoizedState;l!==T||c!==h||v3.current||A6?(typeof f=="function"&&(Gl(e,n,f,r),h=e.memoizedState),(s=A6||_c(e,n,s,r,c,h,Q)||!1)?(u||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,h,Q),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,h,Q)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||l===t.memoizedProps&&c===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&c===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=h),o.props=r,o.state=h,o.context=Q,r=s):(typeof o.componentDidUpdate!="function"||l===t.memoizedProps&&c===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&c===t.memoizedState||(e.flags|=1024),r=!1)}return Kl(t,e,n,r,a,i)}function Kl(t,e,n,r,i,a){Hy(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return i&&xc(e,n,!1),Q6(t,e,a);r=e.stateNode,qM.current=e;var l=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=Ft(e,t.child,null,a),e.child=Ft(e,null,l,a)):r3(t,e,l,a),e.memoizedState=r.state,i&&xc(e,n,!0),e.child}function by(t){var e=t.stateNode;e.pendingContext?gc(t,e.pendingContext,e.pendingContext!==e.context):e.context&&gc(t,e.context,!1),Ps(t,e.containerInfo)}function Bc(t,e,n,r,i){return jt(),Es(i),e.flags|=256,r3(t,e,n,r),e.child}var Yl={dehydrated:null,treeContext:null,retryLane:0};function Jl(t){return{baseLanes:t,cachePool:null,transitions:null}}function My(t,e,n){var r=e.pendingProps,i=v2.current,a=!1,o=(e.flags&128)!==0,l;if((l=o)||(l=t!==null&&t.memoizedState===null?!1:(i&2)!==0),l?(a=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),o2(v2,i&1),t===null)return ql(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=r.children,t=r.fallback,a?(r=e.mode,a=e.child,o={mode:"hidden",children:o},!(r&1)&&a!==null?(a.childLanes=0,a.pendingProps=o):a=N8(o,r,0,null),t=C5(t,r,n,null),a.return=e,t.return=e,a.sibling=t,e.child=a,e.child.memoizedState=Jl(n),e.memoizedState=Yl,t):Zs(e,o));if(i=t.memoizedState,i!==null&&(l=i.dehydrated,l!==null))return ZM(t,e,o,r,l,i,n);if(a){a=r.fallback,o=e.mode,i=t.child,l=i.sibling;var Q={mode:"hidden",children:r.children};return!(o&1)&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=Q,e.deletions=null):(r=z6(i,Q),r.subtreeFlags=i.subtreeFlags&14680064),l!==null?a=z6(l,a):(a=C5(a,o,n,null),a.flags|=2),a.return=e,r.return=e,r.sibling=a,e.child=r,r=a,a=e.child,o=t.child.memoizedState,o=o===null?Jl(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},a.memoizedState=o,a.childLanes=t.childLanes&~n,e.memoizedState=Yl,r}return a=t.child,t=a.sibling,r=z6(a,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function Zs(t,e){return e=N8({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function vn(t,e,n,r){return r!==null&&Es(r),Ft(e,t.child,null,n),t=Zs(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function ZM(t,e,n,r,i,a,o){if(n)return e.flags&256?(e.flags&=-257,r=Ra(Error(Y(422))),vn(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(a=r.fallback,i=e.mode,r=N8({mode:"visible",children:r.children},i,0,null),a=C5(a,i,o,null),a.flags|=2,r.return=e,a.return=e,r.sibling=a,e.child=r,e.mode&1&&Ft(e,t.child,null,o),e.child.memoizedState=Jl(o),e.memoizedState=Yl,a);if(!(e.mode&1))return vn(t,e,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var l=r.dgst;return r=l,a=Error(Y(419)),r=Ra(a,r,void 0),vn(t,e,o,r)}if(l=(o&t.childLanes)!==0,p3||l){if(r=j2,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==a.retryLane&&(a.retryLane=i,l6(t,i),a4(r,t,i,-1))}return Ys(),r=Ra(Error(Y(421))),vn(t,e,o,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=a_.bind(null,t),i._reactRetry=e,null):(t=a.treeContext,_3=I6(i.nextSibling),w3=e,h2=!0,r4=null,t!==null&&($3[B3++]=G4,$3[B3++]=X4,$3[B3++]=O5,G4=t.id,X4=t.overflow,O5=e),e=Zs(e,r.children),e.flags|=4096,e)}function Pc(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),Zl(t.return,e,n)}function za(t,e,n,r,i){var a=t.memoizedState;a===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(a.isBackwards=e,a.rendering=null,a.renderingStartTime=0,a.last=r,a.tail=n,a.tailMode=i)}function _y(t,e,n){var r=e.pendingProps,i=r.revealOrder,a=r.tail;if(r3(t,e,r.children,n),r=v2.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)t:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Pc(t,n,e);else if(t.tag===19)Pc(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break t;for(;t.sibling===null;){if(t.return===null||t.return===e)break t;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(o2(v2,r),!(e.mode&1))e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&Nr(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),za(e,!1,i,n,a);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&Nr(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}za(e,!0,n,null,a);break;case"together":za(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function dr(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Q6(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),$5|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(Y(153));if(e.child!==null){for(t=e.child,n=z6(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=z6(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function GM(t,e,n){switch(e.tag){case 3:by(e),jt();break;case 5:Jv(e);break;case 1:y3(e.type)&&Dr(e);break;case 4:Ps(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;o2($r,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(o2(v2,v2.current&1),e.flags|=128,null):n&e.child.childLanes?My(t,e,n):(o2(v2,v2.current&1),t=Q6(t,e,n),t!==null?t.sibling:null);o2(v2,v2.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return _y(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),o2(v2,v2.current),r)break;return null;case 22:case 23:return e.lanes=0,Ly(t,e,n)}return Q6(t,e,n)}var wy,tQ,Sy,Ay;wy=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};tQ=function(){};Sy=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,S5(_4.current);var a=null;switch(n){case"input":i=Ll(t,i),r=Ll(t,r),a=[];break;case"select":i=x2({},i,{value:void 0}),r=x2({},r,{value:void 0}),a=[];break;case"textarea":i=Ml(t,i),r=Ml(t,r),a=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=Cr)}wl(n,r);var o;n=null;for(s in i)if(!r.hasOwnProperty(s)&&i.hasOwnProperty(s)&&i[s]!=null)if(s==="style"){var l=i[s];for(o in l)l.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else s!=="dangerouslySetInnerHTML"&&s!=="children"&&s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(k0.hasOwnProperty(s)?a||(a=[]):(a=a||[]).push(s,null));for(s in r){var Q=r[s];if(l=i!=null?i[s]:void 0,r.hasOwnProperty(s)&&Q!==l&&(Q!=null||l!=null))if(s==="style")if(l){for(o in l)!l.hasOwnProperty(o)||Q&&Q.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in Q)Q.hasOwnProperty(o)&&l[o]!==Q[o]&&(n||(n={}),n[o]=Q[o])}else n||(a||(a=[]),a.push(s,n)),n=Q;else s==="dangerouslySetInnerHTML"?(Q=Q?Q.__html:void 0,l=l?l.__html:void 0,Q!=null&&l!==Q&&(a=a||[]).push(s,Q)):s==="children"?typeof Q!="string"&&typeof Q!="number"||(a=a||[]).push(s,""+Q):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&(k0.hasOwnProperty(s)?(Q!=null&&s==="onScroll"&&u2("scroll",t),a||l===Q||(a=[])):(a=a||[]).push(s,Q))}n&&(a=a||[]).push("style",n);var s=a;(e.updateQueue=s)&&(e.flags|=4)}};Ay=function(t,e,n,r){n!==r&&(e.flags|=4)};function Ee(t,e){if(!h2)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function K2(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function XM(t,e,n){var r=e.pendingProps;switch(Cs(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return K2(e),null;case 1:return y3(e.type)&&Er(),K2(e),null;case 3:return r=e.stateNode,Rt(),c2(v3),c2(e3),Is(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(pn(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,r4!==null&&(QQ(r4),r4=null))),tQ(t,e),K2(e),null;case 5:Ns(e);var i=S5(G0.current);if(n=e.type,t!==null&&e.stateNode!=null)Sy(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(Y(166));return K2(e),null}if(t=S5(_4.current),pn(e)){r=e.stateNode,n=e.type;var a=e.memoizedProps;switch(r[L4]=e,r[q0]=a,t=(e.mode&1)!==0,n){case"dialog":u2("cancel",r),u2("close",r);break;case"iframe":case"object":case"embed":u2("load",r);break;case"video":case"audio":for(i=0;i<v0.length;i++)u2(v0[i],r);break;case"source":u2("error",r);break;case"img":case"image":case"link":u2("error",r),u2("load",r);break;case"details":u2("toggle",r);break;case"input":GT(r,a),u2("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!a.multiple},u2("invalid",r);break;case"textarea":WT(r,a),u2("invalid",r)}wl(n,a),i=null;for(var o in a)if(a.hasOwnProperty(o)){var l=a[o];o==="children"?typeof l=="string"?r.textContent!==l&&(a.suppressHydrationWarning!==!0&&dn(r.textContent,l,t),i=["children",l]):typeof l=="number"&&r.textContent!==""+l&&(a.suppressHydrationWarning!==!0&&dn(r.textContent,l,t),i=["children",""+l]):k0.hasOwnProperty(o)&&l!=null&&o==="onScroll"&&u2("scroll",r)}switch(n){case"input":ln(r),XT(r,a,!0);break;case"textarea":ln(r),UT(r);break;case"select":case"option":break;default:typeof a.onClick=="function"&&(r.onclick=Cr)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=nv(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[L4]=e,t[q0]=r,wy(t,e,!1,!1),e.stateNode=t;t:{switch(o=Sl(n,r),n){case"dialog":u2("cancel",t),u2("close",t),i=r;break;case"iframe":case"object":case"embed":u2("load",t),i=r;break;case"video":case"audio":for(i=0;i<v0.length;i++)u2(v0[i],t);i=r;break;case"source":u2("error",t),i=r;break;case"img":case"image":case"link":u2("error",t),u2("load",t),i=r;break;case"details":u2("toggle",t),i=r;break;case"input":GT(t,r),i=Ll(t,r),u2("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=x2({},r,{value:void 0}),u2("invalid",t);break;case"textarea":WT(t,r),i=Ml(t,r),u2("invalid",t);break;default:i=r}wl(n,i),l=i;for(a in l)if(l.hasOwnProperty(a)){var Q=l[a];a==="style"?av(t,Q):a==="dangerouslySetInnerHTML"?(Q=Q?Q.__html:void 0,Q!=null&&rv(t,Q)):a==="children"?typeof Q=="string"?(n!=="textarea"||Q!=="")&&$0(t,Q):typeof Q=="number"&&$0(t,""+Q):a!=="suppressContentEditableWarning"&&a!=="suppressHydrationWarning"&&a!=="autoFocus"&&(k0.hasOwnProperty(a)?Q!=null&&a==="onScroll"&&u2("scroll",t):Q!=null&&ps(t,a,Q,o))}switch(n){case"input":ln(t),XT(t,r,!1);break;case"textarea":ln(t),UT(t);break;case"option":r.value!=null&&t.setAttribute("value",""+G6(r.value));break;case"select":t.multiple=!!r.multiple,a=r.value,a!=null?Vt(t,!!r.multiple,a,!1):r.defaultValue!=null&&Vt(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=Cr)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break t;case"img":r=!0;break t;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return K2(e),null;case 6:if(t&&e.stateNode!=null)Ay(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(Y(166));if(n=S5(G0.current),S5(_4.current),pn(e)){if(r=e.stateNode,n=e.memoizedProps,r[L4]=e,(a=r.nodeValue!==n)&&(t=w3,t!==null))switch(t.tag){case 3:dn(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&dn(r.nodeValue,n,(t.mode&1)!==0)}a&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[L4]=e,e.stateNode=r}return K2(e),null;case 13:if(c2(v2),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(h2&&_3!==null&&e.mode&1&&!(e.flags&128))Zv(),jt(),e.flags|=98560,a=!1;else if(a=pn(e),r!==null&&r.dehydrated!==null){if(t===null){if(!a)throw Error(Y(318));if(a=e.memoizedState,a=a!==null?a.dehydrated:null,!a)throw Error(Y(317));a[L4]=e}else jt(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;K2(e),a=!1}else r4!==null&&(QQ(r4),r4=null),a=!0;if(!a)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||v2.current&1?B2===0&&(B2=3):Ys())),e.updateQueue!==null&&(e.flags|=4),K2(e),null);case 4:return Rt(),tQ(t,e),t===null&&R0(e.stateNode.containerInfo),K2(e),null;case 10:return ks(e.type._context),K2(e),null;case 17:return y3(e.type)&&Er(),K2(e),null;case 19:if(c2(v2),a=e.memoizedState,a===null)return K2(e),null;if(r=(e.flags&128)!==0,o=a.rendering,o===null)if(r)Ee(a,!1);else{if(B2!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=Nr(t),o!==null){for(e.flags|=128,Ee(a,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)a=n,t=r,a.flags&=14680066,o=a.alternate,o===null?(a.childLanes=0,a.lanes=t,a.child=null,a.subtreeFlags=0,a.memoizedProps=null,a.memoizedState=null,a.updateQueue=null,a.dependencies=null,a.stateNode=null):(a.childLanes=o.childLanes,a.lanes=o.lanes,a.child=o.child,a.subtreeFlags=0,a.deletions=null,a.memoizedProps=o.memoizedProps,a.memoizedState=o.memoizedState,a.updateQueue=o.updateQueue,a.type=o.type,t=o.dependencies,a.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return o2(v2,v2.current&1|2),e.child}t=t.sibling}a.tail!==null&&w2()>qt&&(e.flags|=128,r=!0,Ee(a,!1),e.lanes=4194304)}else{if(!r)if(t=Nr(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),Ee(a,!0),a.tail===null&&a.tailMode==="hidden"&&!o.alternate&&!h2)return K2(e),null}else 2*w2()-a.renderingStartTime>qt&&n!==1073741824&&(e.flags|=128,r=!0,Ee(a,!1),e.lanes=4194304);a.isBackwards?(o.sibling=e.child,e.child=o):(n=a.last,n!==null?n.sibling=o:e.child=o,a.last=o)}return a.tail!==null?(e=a.tail,a.rendering=e,a.tail=e.sibling,a.renderingStartTime=w2(),e.sibling=null,n=v2.current,o2(v2,r?n&1|2:n&1),e):(K2(e),null);case 22:case 23:return Ks(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?b3&1073741824&&(K2(e),e.subtreeFlags&6&&(e.flags|=8192)):K2(e),null;case 24:return null;case 25:return null}throw Error(Y(156,e.tag))}function WM(t,e){switch(Cs(e),e.tag){case 1:return y3(e.type)&&Er(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Rt(),c2(v3),c2(e3),Is(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return Ns(e),null;case 13:if(c2(v2),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(Y(340));jt()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return c2(v2),null;case 4:return Rt(),null;case 10:return ks(e.type._context),null;case 22:case 23:return Ks(),null;case 24:return null;default:return null}}var yn=!1,J2=!1,UM=typeof WeakSet=="function"?WeakSet:Set,c1=null;function wt(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){b2(t,e,r)}else n.current=null}function eQ(t,e,n){try{n()}catch(r){b2(t,e,r)}}var Nc=!1;function KM(t,e){if(Pl=Sr,t=Dv(),As(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else t:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,a=r.focusNode;r=r.focusOffset;try{n.nodeType,a.nodeType}catch{n=null;break t}var o=0,l=-1,Q=-1,s=0,u=0,T=t,c=null;e:for(;;){for(var f;T!==n||i!==0&&T.nodeType!==3||(l=o+i),T!==a||r!==0&&T.nodeType!==3||(Q=o+r),T.nodeType===3&&(o+=T.nodeValue.length),(f=T.firstChild)!==null;)c=T,T=f;for(;;){if(T===t)break e;if(c===n&&++s===i&&(l=o),c===a&&++u===r&&(Q=o),(f=T.nextSibling)!==null)break;T=c,c=T.parentNode}T=f}n=l===-1||Q===-1?null:{start:l,end:Q}}else n=null}n=n||{start:0,end:0}}else n=null;for(Nl={focusedElem:t,selectionRange:n},Sr=!1,c1=e;c1!==null;)if(e=c1,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,c1=t;else for(;c1!==null;){e=c1;try{var h=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(h!==null){var p=h.memoizedProps,v=h.memoizedState,d=e.stateNode,m=d.getSnapshotBeforeUpdate(e.elementType===e.type?p:t4(e.type,p),v);d.__reactInternalSnapshotBeforeUpdate=m}break;case 3:var y=e.stateNode.containerInfo;y.nodeType===1?y.textContent="":y.nodeType===9&&y.documentElement&&y.removeChild(y.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(Y(163))}}catch(x){b2(e,e.return,x)}if(t=e.sibling,t!==null){t.return=e.return,c1=t;break}c1=e.return}return h=Nc,Nc=!1,h}function w0(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var a=i.destroy;i.destroy=void 0,a!==void 0&&eQ(e,n,a)}i=i.next}while(i!==r)}}function B8(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function nQ(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function Vy(t){var e=t.alternate;e!==null&&(t.alternate=null,Vy(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[L4],delete e[q0],delete e[Fl],delete e[DM],delete e[OM])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function Cy(t){return t.tag===5||t.tag===3||t.tag===4}function Ic(t){t:for(;;){for(;t.sibling===null;){if(t.return===null||Cy(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue t;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function rQ(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=Cr));else if(r!==4&&(t=t.child,t!==null))for(rQ(t,e,n),t=t.sibling;t!==null;)rQ(t,e,n),t=t.sibling}function iQ(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(iQ(t,e,n),t=t.sibling;t!==null;)iQ(t,e,n),t=t.sibling}var q2=null,e4=!1;function y6(t,e,n){for(n=n.child;n!==null;)Ey(t,e,n),n=n.sibling}function Ey(t,e,n){if(M4&&typeof M4.onCommitFiberUnmount=="function")try{M4.onCommitFiberUnmount(A8,n)}catch{}switch(n.tag){case 5:J2||wt(n,e);case 6:var r=q2,i=e4;q2=null,y6(t,e,n),q2=r,e4=i,q2!==null&&(e4?(t=q2,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):q2.removeChild(n.stateNode));break;case 18:q2!==null&&(e4?(t=q2,n=n.stateNode,t.nodeType===8?Ba(t.parentNode,n):t.nodeType===1&&Ba(t,n),I0(t)):Ba(q2,n.stateNode));break;case 4:r=q2,i=e4,q2=n.stateNode.containerInfo,e4=!0,y6(t,e,n),q2=r,e4=i;break;case 0:case 11:case 14:case 15:if(!J2&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var a=i,o=a.destroy;a=a.tag,o!==void 0&&(a&2||a&4)&&eQ(n,e,o),i=i.next}while(i!==r)}y6(t,e,n);break;case 1:if(!J2&&(wt(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(l){b2(n,e,l)}y6(t,e,n);break;case 21:y6(t,e,n);break;case 22:n.mode&1?(J2=(r=J2)||n.memoizedState!==null,y6(t,e,n),J2=r):y6(t,e,n);break;default:y6(t,e,n)}}function jc(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new UM),e.forEach(function(r){var i=o_.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function Y3(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var a=t,o=e,l=o;t:for(;l!==null;){switch(l.tag){case 5:q2=l.stateNode,e4=!1;break t;case 3:q2=l.stateNode.containerInfo,e4=!0;break t;case 4:q2=l.stateNode.containerInfo,e4=!0;break t}l=l.return}if(q2===null)throw Error(Y(160));Ey(a,o,i),q2=null,e4=!1;var Q=i.alternate;Q!==null&&(Q.return=null),i.return=null}catch(s){b2(i,e,s)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)Dy(e,t),e=e.sibling}function Dy(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Y3(e,t),d4(t),r&4){try{w0(3,t,t.return),B8(3,t)}catch(p){b2(t,t.return,p)}try{w0(5,t,t.return)}catch(p){b2(t,t.return,p)}}break;case 1:Y3(e,t),d4(t),r&512&&n!==null&&wt(n,n.return);break;case 5:if(Y3(e,t),d4(t),r&512&&n!==null&&wt(n,n.return),t.flags&32){var i=t.stateNode;try{$0(i,"")}catch(p){b2(t,t.return,p)}}if(r&4&&(i=t.stateNode,i!=null)){var a=t.memoizedProps,o=n!==null?n.memoizedProps:a,l=t.type,Q=t.updateQueue;if(t.updateQueue=null,Q!==null)try{l==="input"&&a.type==="radio"&&a.name!=null&&tv(i,a),Sl(l,o);var s=Sl(l,a);for(o=0;o<Q.length;o+=2){var u=Q[o],T=Q[o+1];u==="style"?av(i,T):u==="dangerouslySetInnerHTML"?rv(i,T):u==="children"?$0(i,T):ps(i,u,T,s)}switch(l){case"input":Hl(i,a);break;case"textarea":ev(i,a);break;case"select":var c=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!a.multiple;var f=a.value;f!=null?Vt(i,!!a.multiple,f,!1):c!==!!a.multiple&&(a.defaultValue!=null?Vt(i,!!a.multiple,a.defaultValue,!0):Vt(i,!!a.multiple,a.multiple?[]:"",!1))}i[q0]=a}catch(p){b2(t,t.return,p)}}break;case 6:if(Y3(e,t),d4(t),r&4){if(t.stateNode===null)throw Error(Y(162));i=t.stateNode,a=t.memoizedProps;try{i.nodeValue=a}catch(p){b2(t,t.return,p)}}break;case 3:if(Y3(e,t),d4(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{I0(e.containerInfo)}catch(p){b2(t,t.return,p)}break;case 4:Y3(e,t),d4(t);break;case 13:Y3(e,t),d4(t),i=t.child,i.flags&8192&&(a=i.memoizedState!==null,i.stateNode.isHidden=a,!a||i.alternate!==null&&i.alternate.memoizedState!==null||(Ws=w2())),r&4&&jc(t);break;case 22:if(u=n!==null&&n.memoizedState!==null,t.mode&1?(J2=(s=J2)||u,Y3(e,t),J2=s):Y3(e,t),d4(t),r&8192){if(s=t.memoizedState!==null,(t.stateNode.isHidden=s)&&!u&&t.mode&1)for(c1=t,u=t.child;u!==null;){for(T=c1=u;c1!==null;){switch(c=c1,f=c.child,c.tag){case 0:case 11:case 14:case 15:w0(4,c,c.return);break;case 1:wt(c,c.return);var h=c.stateNode;if(typeof h.componentWillUnmount=="function"){r=c,n=c.return;try{e=r,h.props=e.memoizedProps,h.state=e.memoizedState,h.componentWillUnmount()}catch(p){b2(r,n,p)}}break;case 5:wt(c,c.return);break;case 22:if(c.memoizedState!==null){Rc(T);continue}}f!==null?(f.return=c,c1=f):Rc(T)}u=u.sibling}t:for(u=null,T=t;;){if(T.tag===5){if(u===null){u=T;try{i=T.stateNode,s?(a=i.style,typeof a.setProperty=="function"?a.setProperty("display","none","important"):a.display="none"):(l=T.stateNode,Q=T.memoizedProps.style,o=Q!=null&&Q.hasOwnProperty("display")?Q.display:null,l.style.display=iv("display",o))}catch(p){b2(t,t.return,p)}}}else if(T.tag===6){if(u===null)try{T.stateNode.nodeValue=s?"":T.memoizedProps}catch(p){b2(t,t.return,p)}}else if((T.tag!==22&&T.tag!==23||T.memoizedState===null||T===t)&&T.child!==null){T.child.return=T,T=T.child;continue}if(T===t)break t;for(;T.sibling===null;){if(T.return===null||T.return===t)break t;u===T&&(u=null),T=T.return}u===T&&(u=null),T.sibling.return=T.return,T=T.sibling}}break;case 19:Y3(e,t),d4(t),r&4&&jc(t);break;case 21:break;default:Y3(e,t),d4(t)}}function d4(t){var e=t.flags;if(e&2){try{t:{for(var n=t.return;n!==null;){if(Cy(n)){var r=n;break t}n=n.return}throw Error(Y(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&($0(i,""),r.flags&=-33);var a=Ic(t);iQ(t,a,i);break;case 3:case 4:var o=r.stateNode.containerInfo,l=Ic(t);rQ(t,l,o);break;default:throw Error(Y(161))}}catch(Q){b2(t,t.return,Q)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function YM(t,e,n){c1=t,Oy(t)}function Oy(t,e,n){for(var r=(t.mode&1)!==0;c1!==null;){var i=c1,a=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||yn;if(!o){var l=i.alternate,Q=l!==null&&l.memoizedState!==null||J2;l=yn;var s=J2;if(yn=o,(J2=Q)&&!s)for(c1=i;c1!==null;)o=c1,Q=o.child,o.tag===22&&o.memoizedState!==null?zc(i):Q!==null?(Q.return=o,c1=Q):zc(i);for(;a!==null;)c1=a,Oy(a),a=a.sibling;c1=i,yn=l,J2=s}Fc(t)}else i.subtreeFlags&8772&&a!==null?(a.return=i,c1=a):Fc(t)}}function Fc(t){for(;c1!==null;){var e=c1;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:J2||B8(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!J2)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:t4(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var a=e.updateQueue;a!==null&&Mc(e,a,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}Mc(e,o,n)}break;case 5:var l=e.stateNode;if(n===null&&e.flags&4){n=l;var Q=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":Q.autoFocus&&n.focus();break;case"img":Q.src&&(n.src=Q.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var s=e.alternate;if(s!==null){var u=s.memoizedState;if(u!==null){var T=u.dehydrated;T!==null&&I0(T)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(Y(163))}J2||e.flags&512&&nQ(e)}catch(c){b2(e,e.return,c)}}if(e===t){c1=null;break}if(n=e.sibling,n!==null){n.return=e.return,c1=n;break}c1=e.return}}function Rc(t){for(;c1!==null;){var e=c1;if(e===t){c1=null;break}var n=e.sibling;if(n!==null){n.return=e.return,c1=n;break}c1=e.return}}function zc(t){for(;c1!==null;){var e=c1;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{B8(4,e)}catch(Q){b2(e,n,Q)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(Q){b2(e,i,Q)}}var a=e.return;try{nQ(e)}catch(Q){b2(e,a,Q)}break;case 5:var o=e.return;try{nQ(e)}catch(Q){b2(e,o,Q)}}}catch(Q){b2(e,e.return,Q)}if(e===t){c1=null;break}var l=e.sibling;if(l!==null){l.return=e.return,c1=l;break}c1=e.return}}var JM=Math.ceil,Fr=c6.ReactCurrentDispatcher,Gs=c6.ReactCurrentOwner,F3=c6.ReactCurrentBatchConfig,z1=0,j2=null,D2=null,Z2=0,b3=0,St=e5(0),B2=0,K0=null,$5=0,P8=0,Xs=0,S0=null,d3=null,Ws=0,qt=1/0,q4=null,Rr=!1,aQ=null,F6=null,gn=!1,O6=null,zr=0,A0=0,oQ=null,pr=-1,mr=0;function o3(){return z1&6?w2():pr!==-1?pr:pr=w2()}function R6(t){return t.mode&1?z1&2&&Z2!==0?Z2&-Z2:$M.transition!==null?(mr===0&&(mr=mv()),mr):(t=W1,t!==0||(t=window.event,t=t===void 0?16:bv(t.type)),t):1}function a4(t,e,n,r){if(50<A0)throw A0=0,oQ=null,Error(Y(185));f7(t,n,r),(!(z1&2)||t!==j2)&&(t===j2&&(!(z1&2)&&(P8|=n),B2===4&&C6(t,Z2)),g3(t,r),n===1&&z1===0&&!(e.mode&1)&&(qt=w2()+500,O8&&n5()))}function g3(t,e){var n=t.callbackNode;$b(t,e);var r=wr(t,t===j2?Z2:0);if(r===0)n!==null&&JT(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&JT(n),e===1)t.tag===0?kM(qc.bind(null,t)):Rv(qc.bind(null,t)),CM(function(){!(z1&6)&&n5()}),n=null;else{switch(vv(r)){case 1:n=xs;break;case 4:n=dv;break;case 16:n=_r;break;case 536870912:n=pv;break;default:n=_r}n=Fy(n,ky.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function ky(t,e){if(pr=-1,mr=0,z1&6)throw Error(Y(327));var n=t.callbackNode;if(kt()&&t.callbackNode!==n)return null;var r=wr(t,t===j2?Z2:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=qr(t,r);else{e=r;var i=z1;z1|=2;var a=By();(j2!==t||Z2!==e)&&(q4=null,qt=w2()+500,V5(t,e));do try{n_();break}catch(l){$y(t,l)}while(1);Os(),Fr.current=a,z1=i,D2!==null?e=0:(j2=null,Z2=0,e=B2)}if(e!==0){if(e===2&&(i=Dl(t),i!==0&&(r=i,e=lQ(t,i))),e===1)throw n=K0,V5(t,0),C6(t,r),g3(t,w2()),n;if(e===6)C6(t,r);else{if(i=t.current.alternate,!(r&30)&&!t_(i)&&(e=qr(t,r),e===2&&(a=Dl(t),a!==0&&(r=a,e=lQ(t,a))),e===1))throw n=K0,V5(t,0),C6(t,r),g3(t,w2()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(Y(345));case 2:H5(t,d3,q4);break;case 3:if(C6(t,r),(r&130023424)===r&&(e=Ws+500-w2(),10<e)){if(wr(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){o3(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=jl(H5.bind(null,t,d3,q4),e);break}H5(t,d3,q4);break;case 4:if(C6(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var o=31-i4(r);a=1<<o,o=e[o],o>i&&(i=o),r&=~a}if(r=i,r=w2()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*JM(r/1960))-r,10<r){t.timeoutHandle=jl(H5.bind(null,t,d3,q4),r);break}H5(t,d3,q4);break;case 5:H5(t,d3,q4);break;default:throw Error(Y(329))}}}return g3(t,w2()),t.callbackNode===n?ky.bind(null,t):null}function lQ(t,e){var n=S0;return t.current.memoizedState.isDehydrated&&(V5(t,e).flags|=256),t=qr(t,e),t!==2&&(e=d3,d3=n,e!==null&&QQ(e)),t}function QQ(t){d3===null?d3=t:d3.push.apply(d3,t)}function t_(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],a=i.getSnapshot;i=i.value;try{if(!l4(a(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function C6(t,e){for(e&=~Xs,e&=~P8,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-i4(e),r=1<<n;t[n]=-1,e&=~r}}function qc(t){if(z1&6)throw Error(Y(327));kt();var e=wr(t,0);if(!(e&1))return g3(t,w2()),null;var n=qr(t,e);if(t.tag!==0&&n===2){var r=Dl(t);r!==0&&(e=r,n=lQ(t,r))}if(n===1)throw n=K0,V5(t,0),C6(t,e),g3(t,w2()),n;if(n===6)throw Error(Y(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,H5(t,d3,q4),g3(t,w2()),null}function Us(t,e){var n=z1;z1|=1;try{return t(e)}finally{z1=n,z1===0&&(qt=w2()+500,O8&&n5())}}function B5(t){O6!==null&&O6.tag===0&&!(z1&6)&&kt();var e=z1;z1|=1;var n=F3.transition,r=W1;try{if(F3.transition=null,W1=1,t)return t()}finally{W1=r,F3.transition=n,z1=e,!(z1&6)&&n5()}}function Ks(){b3=St.current,c2(St)}function V5(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,VM(n)),D2!==null)for(n=D2.return;n!==null;){var r=n;switch(Cs(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Er();break;case 3:Rt(),c2(v3),c2(e3),Is();break;case 5:Ns(r);break;case 4:Rt();break;case 13:c2(v2);break;case 19:c2(v2);break;case 10:ks(r.type._context);break;case 22:case 23:Ks()}n=n.return}if(j2=t,D2=t=z6(t.current,null),Z2=b3=e,B2=0,K0=null,Xs=P8=$5=0,d3=S0=null,w5!==null){for(e=0;e<w5.length;e++)if(n=w5[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,a=n.pending;if(a!==null){var o=a.next;a.next=i,r.next=o}n.pending=r}w5=null}return t}function $y(t,e){do{var n=D2;try{if(Os(),fr.current=jr,Ir){for(var r=g2.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}Ir=!1}if(k5=0,I2=$2=g2=null,_0=!1,X0=0,Gs.current=null,n===null||n.return===null){B2=1,K0=e,D2=null;break}t:{var a=t,o=n.return,l=n,Q=e;if(e=Z2,l.flags|=32768,Q!==null&&typeof Q=="object"&&typeof Q.then=="function"){var s=Q,u=l,T=u.tag;if(!(u.mode&1)&&(T===0||T===11||T===15)){var c=u.alternate;c?(u.updateQueue=c.updateQueue,u.memoizedState=c.memoizedState,u.lanes=c.lanes):(u.updateQueue=null,u.memoizedState=null)}var f=Ec(o);if(f!==null){f.flags&=-257,Dc(f,o,l,a,e),f.mode&1&&Cc(a,s,e),e=f,Q=s;var h=e.updateQueue;if(h===null){var p=new Set;p.add(Q),e.updateQueue=p}else h.add(Q);break t}else{if(!(e&1)){Cc(a,s,e),Ys();break t}Q=Error(Y(426))}}else if(h2&&l.mode&1){var v=Ec(o);if(v!==null){!(v.flags&65536)&&(v.flags|=256),Dc(v,o,l,a,e),Es(zt(Q,l));break t}}a=Q=zt(Q,l),B2!==4&&(B2=2),S0===null?S0=[a]:S0.push(a),a=o;do{switch(a.tag){case 3:a.flags|=65536,e&=-e,a.lanes|=e;var d=yy(a,Q,e);bc(a,d);break t;case 1:l=Q;var m=a.type,y=a.stateNode;if(!(a.flags&128)&&(typeof m.getDerivedStateFromError=="function"||y!==null&&typeof y.componentDidCatch=="function"&&(F6===null||!F6.has(y)))){a.flags|=65536,e&=-e,a.lanes|=e;var x=gy(a,l,e);bc(a,x);break t}}a=a.return}while(a!==null)}Ny(n)}catch(L){e=L,D2===n&&n!==null&&(D2=n=n.return);continue}break}while(1)}function By(){var t=Fr.current;return Fr.current=jr,t===null?jr:t}function Ys(){(B2===0||B2===3||B2===2)&&(B2=4),j2===null||!($5&268435455)&&!(P8&268435455)||C6(j2,Z2)}function qr(t,e){var n=z1;z1|=2;var r=By();(j2!==t||Z2!==e)&&(q4=null,V5(t,e));do try{e_();break}catch(i){$y(t,i)}while(1);if(Os(),z1=n,Fr.current=r,D2!==null)throw Error(Y(261));return j2=null,Z2=0,B2}function e_(){for(;D2!==null;)Py(D2)}function n_(){for(;D2!==null&&!wb();)Py(D2)}function Py(t){var e=jy(t.alternate,t,b3);t.memoizedProps=t.pendingProps,e===null?Ny(t):D2=e,Gs.current=null}function Ny(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=WM(n,e),n!==null){n.flags&=32767,D2=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{B2=6,D2=null;return}}else if(n=XM(n,e,b3),n!==null){D2=n;return}if(e=e.sibling,e!==null){D2=e;return}D2=e=t}while(e!==null);B2===0&&(B2=5)}function H5(t,e,n){var r=W1,i=F3.transition;try{F3.transition=null,W1=1,r_(t,e,n,r)}finally{F3.transition=i,W1=r}return null}function r_(t,e,n,r){do kt();while(O6!==null);if(z1&6)throw Error(Y(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(Y(177));t.callbackNode=null,t.callbackPriority=0;var a=n.lanes|n.childLanes;if(Bb(t,a),t===j2&&(D2=j2=null,Z2=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||gn||(gn=!0,Fy(_r,function(){return kt(),null})),a=(n.flags&15990)!==0,n.subtreeFlags&15990||a){a=F3.transition,F3.transition=null;var o=W1;W1=1;var l=z1;z1|=4,Gs.current=null,KM(t,n),Dy(n,t),HM(Nl),Sr=!!Pl,Nl=Pl=null,t.current=n,YM(n),Sb(),z1=l,W1=o,F3.transition=a}else t.current=n;if(gn&&(gn=!1,O6=t,zr=i),a=t.pendingLanes,a===0&&(F6=null),Cb(n.stateNode),g3(t,w2()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(Rr)throw Rr=!1,t=aQ,aQ=null,t;return zr&1&&t.tag!==0&&kt(),a=t.pendingLanes,a&1?t===oQ?A0++:(A0=0,oQ=t):A0=0,n5(),null}function kt(){if(O6!==null){var t=vv(zr),e=F3.transition,n=W1;try{if(F3.transition=null,W1=16>t?16:t,O6===null)var r=!1;else{if(t=O6,O6=null,zr=0,z1&6)throw Error(Y(331));var i=z1;for(z1|=4,c1=t.current;c1!==null;){var a=c1,o=a.child;if(c1.flags&16){var l=a.deletions;if(l!==null){for(var Q=0;Q<l.length;Q++){var s=l[Q];for(c1=s;c1!==null;){var u=c1;switch(u.tag){case 0:case 11:case 15:w0(8,u,a)}var T=u.child;if(T!==null)T.return=u,c1=T;else for(;c1!==null;){u=c1;var c=u.sibling,f=u.return;if(Vy(u),u===s){c1=null;break}if(c!==null){c.return=f,c1=c;break}c1=f}}}var h=a.alternate;if(h!==null){var p=h.child;if(p!==null){h.child=null;do{var v=p.sibling;p.sibling=null,p=v}while(p!==null)}}c1=a}}if(a.subtreeFlags&2064&&o!==null)o.return=a,c1=o;else t:for(;c1!==null;){if(a=c1,a.flags&2048)switch(a.tag){case 0:case 11:case 15:w0(9,a,a.return)}var d=a.sibling;if(d!==null){d.return=a.return,c1=d;break t}c1=a.return}}var m=t.current;for(c1=m;c1!==null;){o=c1;var y=o.child;if(o.subtreeFlags&2064&&y!==null)y.return=o,c1=y;else t:for(o=m;c1!==null;){if(l=c1,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:B8(9,l)}}catch(L){b2(l,l.return,L)}if(l===o){c1=null;break t}var x=l.sibling;if(x!==null){x.return=l.return,c1=x;break t}c1=l.return}}if(z1=i,n5(),M4&&typeof M4.onPostCommitFiberRoot=="function")try{M4.onPostCommitFiberRoot(A8,t)}catch{}r=!0}return r}finally{W1=n,F3.transition=e}}return!1}function Zc(t,e,n){e=zt(n,e),e=yy(t,e,1),t=j6(t,e,1),e=o3(),t!==null&&(f7(t,1,e),g3(t,e))}function b2(t,e,n){if(t.tag===3)Zc(t,t,n);else for(;e!==null;){if(e.tag===3){Zc(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(F6===null||!F6.has(r))){t=zt(n,t),t=gy(e,t,1),e=j6(e,t,1),t=o3(),e!==null&&(f7(e,1,t),g3(e,t));break}}e=e.return}}function i_(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=o3(),t.pingedLanes|=t.suspendedLanes&n,j2===t&&(Z2&n)===n&&(B2===4||B2===3&&(Z2&130023424)===Z2&&500>w2()-Ws?V5(t,0):Xs|=n),g3(t,e)}function Iy(t,e){e===0&&(t.mode&1?(e=un,un<<=1,!(un&130023424)&&(un=4194304)):e=1);var n=o3();t=l6(t,e),t!==null&&(f7(t,e,n),g3(t,n))}function a_(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),Iy(t,n)}function o_(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(Y(314))}r!==null&&r.delete(e),Iy(t,n)}var jy;jy=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||v3.current)p3=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return p3=!1,GM(t,e,n);p3=!!(t.flags&131072)}else p3=!1,h2&&e.flags&1048576&&zv(e,kr,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;dr(t,e),t=e.pendingProps;var i=It(e,e3.current);Ot(e,n),i=Fs(null,e,r,t,i,n);var a=Rs();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,y3(r)?(a=!0,Dr(e)):a=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Bs(e),i.updater=k8,e.stateNode=i,i._reactInternals=e,Xl(e,r,t,n),e=Kl(null,e,r,!0,a,n)):(e.tag=0,h2&&a&&Vs(e),r3(null,e,i,n),e=e.child),e;case 16:r=e.elementType;t:{switch(dr(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=Q_(r),t=t4(r,t),i){case 0:e=Ul(null,e,r,t,n);break t;case 1:e=$c(null,e,r,t,n);break t;case 11:e=Oc(null,e,r,t,n);break t;case 14:e=kc(null,e,r,t4(r.type,t),n);break t}throw Error(Y(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:t4(r,i),Ul(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:t4(r,i),$c(t,e,r,i,n);case 3:t:{if(by(e),t===null)throw Error(Y(387));r=e.pendingProps,a=e.memoizedState,i=a.element,Xv(t,e),Pr(e,r,null,n);var o=e.memoizedState;if(r=o.element,a.isDehydrated)if(a={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=a,e.memoizedState=a,e.flags&256){i=zt(Error(Y(423)),e),e=Bc(t,e,r,n,i);break t}else if(r!==i){i=zt(Error(Y(424)),e),e=Bc(t,e,r,n,i);break t}else for(_3=I6(e.stateNode.containerInfo.firstChild),w3=e,h2=!0,r4=null,n=Yv(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(jt(),r===i){e=Q6(t,e,n);break t}r3(t,e,r,n)}e=e.child}return e;case 5:return Jv(e),t===null&&ql(e),r=e.type,i=e.pendingProps,a=t!==null?t.memoizedProps:null,o=i.children,Il(r,i)?o=null:a!==null&&Il(r,a)&&(e.flags|=32),Hy(t,e),r3(t,e,o,n),e.child;case 6:return t===null&&ql(e),null;case 13:return My(t,e,n);case 4:return Ps(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=Ft(e,null,r,n):r3(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:t4(r,i),Oc(t,e,r,i,n);case 7:return r3(t,e,e.pendingProps,n),e.child;case 8:return r3(t,e,e.pendingProps.children,n),e.child;case 12:return r3(t,e,e.pendingProps.children,n),e.child;case 10:t:{if(r=e.type._context,i=e.pendingProps,a=e.memoizedProps,o=i.value,o2($r,r._currentValue),r._currentValue=o,a!==null)if(l4(a.value,o)){if(a.children===i.children&&!v3.current){e=Q6(t,e,n);break t}}else for(a=e.child,a!==null&&(a.return=e);a!==null;){var l=a.dependencies;if(l!==null){o=a.child;for(var Q=l.firstContext;Q!==null;){if(Q.context===r){if(a.tag===1){Q=K4(-1,n&-n),Q.tag=2;var s=a.updateQueue;if(s!==null){s=s.shared;var u=s.pending;u===null?Q.next=Q:(Q.next=u.next,u.next=Q),s.pending=Q}}a.lanes|=n,Q=a.alternate,Q!==null&&(Q.lanes|=n),Zl(a.return,n,e),l.lanes|=n;break}Q=Q.next}}else if(a.tag===10)o=a.type===e.type?null:a.child;else if(a.tag===18){if(o=a.return,o===null)throw Error(Y(341));o.lanes|=n,l=o.alternate,l!==null&&(l.lanes|=n),Zl(o,n,e),o=a.sibling}else o=a.child;if(o!==null)o.return=a;else for(o=a;o!==null;){if(o===e){o=null;break}if(a=o.sibling,a!==null){a.return=o.return,o=a;break}o=o.return}a=o}r3(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,Ot(e,n),i=R3(i),r=r(i),e.flags|=1,r3(t,e,r,n),e.child;case 14:return r=e.type,i=t4(r,e.pendingProps),i=t4(r.type,i),kc(t,e,r,i,n);case 15:return xy(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:t4(r,i),dr(t,e),e.tag=1,y3(r)?(t=!0,Dr(e)):t=!1,Ot(e,n),Uv(e,r,i),Xl(e,r,i,n),Kl(null,e,r,!0,t,n);case 19:return _y(t,e,n);case 22:return Ly(t,e,n)}throw Error(Y(156,e.tag))};function Fy(t,e){return hv(t,e)}function l_(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function I3(t,e,n,r){return new l_(t,e,n,r)}function Js(t){return t=t.prototype,!(!t||!t.isReactComponent)}function Q_(t){if(typeof t=="function")return Js(t)?1:0;if(t!=null){if(t=t.$$typeof,t===vs)return 11;if(t===ys)return 14}return 2}function z6(t,e){var n=t.alternate;return n===null?(n=I3(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function vr(t,e,n,r,i,a){var o=2;if(r=t,typeof t=="function")Js(t)&&(o=1);else if(typeof t=="string")o=5;else t:switch(t){case vt:return C5(n.children,i,a,e);case ms:o=8,i|=8;break;case vl:return t=I3(12,n,e,i|2),t.elementType=vl,t.lanes=a,t;case yl:return t=I3(13,n,e,i),t.elementType=yl,t.lanes=a,t;case gl:return t=I3(19,n,e,i),t.elementType=gl,t.lanes=a,t;case Km:return N8(n,i,a,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case Wm:o=10;break t;case Um:o=9;break t;case vs:o=11;break t;case ys:o=14;break t;case S6:o=16,r=null;break t}throw Error(Y(130,t==null?t:typeof t,""))}return e=I3(o,n,e,i),e.elementType=t,e.type=r,e.lanes=a,e}function C5(t,e,n,r){return t=I3(7,t,r,e),t.lanes=n,t}function N8(t,e,n,r){return t=I3(22,t,r,e),t.elementType=Km,t.lanes=n,t.stateNode={isHidden:!1},t}function qa(t,e,n){return t=I3(6,t,null,e),t.lanes=n,t}function Za(t,e,n){return e=I3(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function s_(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=_a(0),this.expirationTimes=_a(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=_a(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function tu(t,e,n,r,i,a,o,l,Q){return t=new s_(t,e,n,l,Q),e===1?(e=1,a===!0&&(e|=8)):e=0,a=I3(3,null,null,e),t.current=a,a.stateNode=t,a.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Bs(a),t}function u_(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:mt,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function Ry(t){if(!t)return X6;t=t._reactInternals;t:{if(Z5(t)!==t||t.tag!==1)throw Error(Y(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break t;case 1:if(y3(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break t}}e=e.return}while(e!==null);throw Error(Y(171))}if(t.tag===1){var n=t.type;if(y3(n))return Fv(t,n,e)}return e}function zy(t,e,n,r,i,a,o,l,Q){return t=tu(n,r,!0,t,i,a,o,l,Q),t.context=Ry(null),n=t.current,r=o3(),i=R6(n),a=K4(r,i),a.callback=e??null,j6(n,a,i),t.current.lanes=i,f7(t,i,r),g3(t,r),t}function I8(t,e,n,r){var i=e.current,a=o3(),o=R6(i);return n=Ry(n),e.context===null?e.context=n:e.pendingContext=n,e=K4(a,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=j6(i,e,o),t!==null&&(a4(t,i,o,a),cr(t,i,o)),o}function Zr(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Gc(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function eu(t,e){Gc(t,e),(t=t.alternate)&&Gc(t,e)}function T_(){return null}var qy=typeof reportError=="function"?reportError:function(t){console.error(t)};function nu(t){this._internalRoot=t}j8.prototype.render=nu.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(Y(409));I8(t,e,null,null)};j8.prototype.unmount=nu.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;B5(function(){I8(null,t,null,null)}),e[o6]=null}};function j8(t){this._internalRoot=t}j8.prototype.unstable_scheduleHydration=function(t){if(t){var e=xv();t={blockedOn:null,target:t,priority:e};for(var n=0;n<V6.length&&e!==0&&e<V6[n].priority;n++);V6.splice(n,0,t),n===0&&Hv(t)}};function ru(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function F8(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Xc(){}function c_(t,e,n,r,i){if(i){if(typeof r=="function"){var a=r;r=function(){var s=Zr(o);a.call(s)}}var o=zy(e,r,t,0,null,!1,!1,"",Xc);return t._reactRootContainer=o,t[o6]=o.current,R0(t.nodeType===8?t.parentNode:t),B5(),o}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var l=r;r=function(){var s=Zr(Q);l.call(s)}}var Q=tu(t,0,!1,null,null,!1,!1,"",Xc);return t._reactRootContainer=Q,t[o6]=Q.current,R0(t.nodeType===8?t.parentNode:t),B5(function(){I8(e,Q,n,r)}),Q}function R8(t,e,n,r,i){var a=n._reactRootContainer;if(a){var o=a;if(typeof i=="function"){var l=i;i=function(){var Q=Zr(o);l.call(Q)}}I8(e,o,t,i)}else o=c_(n,e,t,i,r);return Zr(o)}yv=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=m0(e.pendingLanes);n!==0&&(Ls(e,n|1),g3(e,w2()),!(z1&6)&&(qt=w2()+500,n5()))}break;case 13:B5(function(){var r=l6(t,1);if(r!==null){var i=o3();a4(r,t,1,i)}}),eu(t,1)}};Hs=function(t){if(t.tag===13){var e=l6(t,134217728);if(e!==null){var n=o3();a4(e,t,134217728,n)}eu(t,134217728)}};gv=function(t){if(t.tag===13){var e=R6(t),n=l6(t,e);if(n!==null){var r=o3();a4(n,t,e,r)}eu(t,e)}};xv=function(){return W1};Lv=function(t,e){var n=W1;try{return W1=t,e()}finally{W1=n}};Vl=function(t,e,n){switch(e){case"input":if(Hl(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=D8(r);if(!i)throw Error(Y(90));Jm(r),Hl(r,i)}}}break;case"textarea":ev(t,n);break;case"select":e=n.value,e!=null&&Vt(t,!!n.multiple,e,!1)}};Qv=Us;sv=B5;var f_={usingClientEntryPoint:!1,Events:[d7,Lt,D8,ov,lv,Us]},De={findFiberByHostInstance:_5,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},h_={bundleType:De.bundleType,version:De.version,rendererPackageName:De.rendererPackageName,rendererConfig:De.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:c6.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=cv(t),t===null?null:t.stateNode},findFiberByHostInstance:De.findFiberByHostInstance||T_,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var xn=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!xn.isDisabled&&xn.supportsFiber)try{A8=xn.inject(h_),M4=xn}catch{}}C3.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=f_;C3.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!ru(e))throw Error(Y(200));return u_(t,e,null,n)};C3.createRoot=function(t,e){if(!ru(t))throw Error(Y(299));var n=!1,r="",i=qy;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=tu(t,1,!1,null,null,n,!1,r,i),t[o6]=e.current,R0(t.nodeType===8?t.parentNode:t),new nu(e)};C3.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(Y(188)):(t=Object.keys(t).join(","),Error(Y(268,t)));return t=cv(e),t=t===null?null:t.stateNode,t};C3.flushSync=function(t){return B5(t)};C3.hydrate=function(t,e,n){if(!F8(e))throw Error(Y(200));return R8(null,t,e,!0,n)};C3.hydrateRoot=function(t,e,n){if(!ru(t))throw Error(Y(405));var r=n!=null&&n.hydratedSources||null,i=!1,a="",o=qy;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(a=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=zy(e,null,t,1,n??null,i,!1,a,o),t[o6]=e.current,R0(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new j8(e)};C3.render=function(t,e,n){if(!F8(e))throw Error(Y(200));return R8(null,t,e,!1,n)};C3.unmountComponentAtNode=function(t){if(!F8(t))throw Error(Y(40));return t._reactRootContainer?(B5(function(){R8(null,null,t,!1,function(){t._reactRootContainer=null,t[o6]=null})}),!0):!1};C3.unstable_batchedUpdates=Us;C3.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!F8(n))throw Error(Y(200));if(t==null||t._reactInternals===void 0)throw Error(Y(38));return R8(t,e,n,!1,r)};C3.version="18.2.0-next-9e3b772b8-20220608";function Zy(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Zy)}catch(t){console.error(t)}}Zy(),zm.exports=C3;var d_=zm.exports,Wc=d_;pl.createRoot=Wc.createRoot,pl.hydrateRoot=Wc.hydrateRoot;const p_=`# Signal & Systems

# Chapter 1

## 1.6.5 Time invariance

$$
x(t) \\rightarrow y(t) \\Rightarrow x(t-t_0) \\rightarrow y(t-t_0)
$$


## 1.6.6 Linearity

$$

\\begin{cases}
x_1(t) \\rightarrow y_1(t) \\\\
x_2(t) \\rightarrow y_2(t)
\\end{cases}
\\Rightarrow
a x_1(t) + b x_2(t) \\rightarrow a y_1(t) + b y_2(t), 

$$


## 1.7 Continuous unit step and unit impulse
$$
u(t) = \\int_{-\\infty}^{t}\\delta(\\tau)\\mathrm{d}\\tau \\qquad (1.71) 
$$


# Chapter 2

## 2.1.2 Discrete unit impulse response & convolution
$h(t)$ is the response of $\\delta(t)$

$$
y[n] = \\sum_{k=-\\infty}^{\\infty}x[k]h[n-k] \\qquad (2.6)
$$



$$
y[n] = x[n]*h[n] \\qquad (2.7)
$$


## 2.2.1

### "*sifting property*" of continuous-time impulse:

$$
x(t) = \\int_{-\\infty}^{\\infty}x(\\tau)\\delta(t-\\tau)\\mathrm{d}\\tau \\qquad (2.27) 
$$


## 2.2.2 Convolution integral

$$
y(t)=\\int_{-\\infty}^{\\infty}x(\\tau)h(t-\\tau)\\mathrm{d}\\tau \\qquad (2.33)
$$



$$
y(t)=x(t)*h(t) \\qquad (2.34)
$$


# Chapter 3

## 3.3.2 Fourier Series (continuous)
$\\omega_0=\\frac{2\\pi}{T}$

$$
x(t)=\\sum_{k=-\\infty}^{\\infty}a_ke^{jk\\omega_0t} \\qquad (3.38)
$$



$$
a_k = \\frac{1}{T}\\int_Tx(t)e^{-jk\\omega_0t}\\mathrm{d}t \\qquad (3.39)
$$


## 3.6.1
$\\omega_0=\\frac{2\\pi}{N}$

$$
\\phi_k[n]=e^{jk\\omega_0n} \\qquad (3.85)
$$

There're only $N$ distinct signals as $\\phi_k[n]=\\phi_{k+N}[n]$

## 3.6.2

$$
x[n]=\\sum_{k=\\lang N\\rang}a_ke^{jk\\omega_0n} \\qquad (3.94) 
$$



$$
a_k = \\frac{1}{N}\\sum_{n=\\lang N\\rang}x[n]e^{-jk\\omega_0n} \\qquad (3.95) 
$$


## 3.8
Frequency response = Fourier transform of impulse response:
$$
H(j\\omega) = \\int_{-\\infty}^{\\infty}h(t)e^{-j\\omega t}\\mathrm{d}t \\qquad (3.121)
$$


# Chapter 4

## 4.1.1 Fourier transform (aperiodic signal)
$$
x(t) = \\frac{1}{2\\pi}\\int_{-\\infty}^{\\infty}X(j\\omega)e^{j\\omega t}\\mathrm{d}\\omega \\qquad (4.8) 
$$


$$
X(j\\omega) = \\int_{-\\infty}^{\\infty}x(t)e^{-j\\omega t}\\mathrm{d} t \\qquad (4.9) 
$$


Both $(4.8)$ and $(3.38)$ represents linear combination of complex exponentials.

The periodic case has discrete set of them and are harmonically related: $\\{k\\omega_0| k=\\N\\}$

For the aperiodic case, the complex exponentials occur at a continuum of frequencies with amplitute $X(j\\omega)(\\mathrm{d}\\omega/2\\pi)$

## 4.4 Convolution property

$$
y(t)=h(t)*x(t)\\overset{\\mathcal{F}}{\\longleftrightarrow} Y(j\\omega) = H(j\\omega)X(j\\omega) \\qquad (4.56)
$$


## 4.5 Multiplication property
$$
r(t) = s(t)p(t) \\longleftrightarrow R(j\\omega) = \\frac{1}{2\\pi}\\int_{-\\infty}^{\\infty}S(j\\theta)P(j(\\omega - \\theta))\\mathrm{d}\\theta \\qquad (4.70) 
$$


## 4.7 Systems characterized by linear constant-coefficient ODE
$$
\\sum_{k=0}^{N}a_k\\frac{\\mathrm{d}^ky(t)}{\\mathrm{d}t^k} = \\sum_{k=0}^{M}b_k\\frac{\\mathrm{d}^kx(t)}{\\mathrm{d}t^k} \\qquad (4.72) 
$$


$$
H(j\\omega) = \\frac{Y(j\\omega)}{X(j\\omega)} = \\frac{\\sum_{k=0}^{M}b_k(j\\omega)^k}{\\sum_{k=0}^{N}a_k(j\\omega)^k} \\qquad (4.76) 
$$


# Chapter 5
## 5.1 Discrete time Fourier transform
$$
a_k = \\frac{1}{N}X(e^{jk\\omega_0}) \\qquad (5.5) 
$$


$$
\\boxed{x[n] = \\frac{1}{2\\pi}\\int_{2\\pi}X(e^{j\\omega})e^{j\\omega n}\\mathrm{d}\\omega \\qquad (5.8)} 
$$


$$
\\boxed{X(e^{j\\omega}) = \\sum_{n=-\\infty}^{\\infty} x[n]e^{-j\\omega n} \\qquad (5.9)} 
$$


Defining $(5.9)$ and using $(3.95)$, $(5.5)$ can be derived. $(5.8)$ is by $(3.94)$ and $(5.5)$ and taking $x[n] = \\tilde{x}[n]$ over the interval $\\lang N \\rang$,
replacing the summation limits to infinity (as $x[n] = 0$ outside that interval), taking Riemann sum as $N \\rightarrow \\infty$,
$\\omega_0 = 2\\pi / N \\rightarrow 0$

Summation is carried over $N$ consecutive intervals of $\\omega_0 = 2\\pi/N$, so the resulting interval of integration is $2\\pi$

## 5.2 Fourier transform (periodic signal)
$$
x[n] = e^{j\\omega_0 n} \\Rightarrow 
$$


$$
X(e^{j\\omega}) = \\sum_{l=-\\infty}^{\\infty} 2\\pi \\delta(\\omega - \\omega_0 - 2\\pi l) \\qquad (5.18) 
$$



$$
x[n]=\\sum_{k=\\lang N\\rang}a_ke^{jk(2\\pi/N)n} \\Rightarrow 
$$


$$
X(e^{j\\omega}) = \\sum_{k=-\\infty}^{\\infty} 2\\pi a_k \\delta(\\omega - \\frac{2\\pi k}{N}) \\qquad (5.20) 
$$


## 5.7.1 Duality in *discrete-time Fourier Series*
Two periodic sequences related by,
$$
f[m] = \\frac{1}{N}\\sum_{r=\\lang N\\rang} g[r]e^{-jr(2\\pi /N)m} 
$$

By $(3.95)$,
$$
g[n] \\overset{\\mathcal{FS}}{\\longleftrightarrow} f[k] \\qquad (5.66) 
$$

Let $m = n$ and $r = -k$,
$$
f[n] \\overset{\\mathcal{FS}}{\\longleftrightarrow} \\frac{1}{N}g[-k] \\qquad (5.67) 
$$


## 5.7.2 Duality between the *discrete-time Fourier Transform* and the *continuous-time Fouries Series*
$(5.9)$ and $(3.38)$ are similar, and

$(5.8)$ and $(3.39)$ are similar

## 5.8 Systems characterized by linear constant-coefficient difference equations
$$
\\sum_{k=0}^{N} a_k y[n-k] = \\sum_{k=0}^{M} b_k x[n-k] \\qquad (5.78) 
$$


$$
H(e^{j\\omega}) = \\frac{Y(e^{j\\omega})}{X(e^{j\\omega})} = \\frac{\\sum_{k=0}^{M}b_ke^{-jk\\omega}}{\\sum_{k=0}^{N}a_ke^{-jk\\omega}} \\qquad (5.80) 
$$


# Chapter 6

## 6.2.2 Group delay
$$
\\tau(\\omega) = -\\frac{\\mathrm{d}}{\\mathrm{d}\\omega}\\{\\angle H(j\\omega)\\} \\qquad (6.14) 
$$

$\\{[\\angle H(j\\omega)]\\}$ is the unwrapped phase, by extending $\\omega$ to $\\real$

# Chapter 7

## 7.1.1 Impulse train sampling

$$
x_p(t) = x(t)p(t) \\qquad (7.1) 
$$


$$
p(t) = \\sum_{n=-\\infty}^{\\infty}\\delta(t-nT) \\qquad (7.2) 
$$


$$
x_p(t) = \\sum_{n=-\\infty}^{\\infty} x(nT)\\delta(t-nT) \\qquad (7.3) 
$$


$$
X_p(j\\omega) = \\frac{1}{T}\\sum_{k=-\\infty}^{\\infty}X(j(\\omega-k\\omega_s)) \\qquad (7.6) 
$$


Sampling Theorem:

Let $x(t)$ be band-limited signal with $X(j\\omega) = 0$ for $|\\omega| > \\omega_{M}$.

Then, $x(t)$ is uniquely determined by its sample $\\{x(nT) | n \\in \\N\\}$

if $\\frac{2\\pi}{T} = \\omega_{s} > 2\\omega_{M}$

To reconstruct $x(t)$, pass the samples through an ideal low-pass filter with cutoff frequency $\\omega_{c} \\in (\\omega_{M}, \\omega_{s} - \\omega_{M})$ and gain $T$

Nyquist rate $:= 2\\omega_{M}$

## 7.4 Discrete time processing of continuous time signals

![](/md/signal_processing/tex/fig_7_24.png)
$$
x_d[n] = x_c(nT) \\qquad (7.16) 
$$

Applying Fourier transform to $(7.3)$,
$$
X_p(j\\omega) = \\sum_{n=-\\infty}^{\\infty}x_c(nT)e^{-j\\omega nT} \\qquad (7.18) 
$$


$$
X_d(e^{j\\Omega}) = \\sum_{n=-\\infty}^{\\infty} x_d[n]e^{-j\\Omega n} \\qquad (7.19) 
$$


$$
X_d(e^{j\\Omega}) = \\sum_{n=-\\infty}^{\\infty} x_c(nT)e^{-j\\Omega n} \\qquad (7.20) 
$$

From $(7.18)$ and $(7.20)$,
$$
X_d(e^{j\\Omega}) = X_p(j\\Omega / T) \\qquad (7.21) 
$$

Using $(7.6)$,
$$
X_p(j\\omega) = \\frac{1}{T}\\sum_{k=-\\infty}^{\\infty}X_c(j(\\omega-k\\omega_s)) \\qquad (7.22) 
$$


$$
X_d(e^{j\\Omega}) = \\frac{1}{T} \\sum_{k=-\\infty}^{\\infty} X_c(j(\\Omega-2\\pi k)/T) \\qquad (7.23)
$$


$$
Y_c(j\\omega) = X_c(j\\omega) H_d(e^{j\\omega T}) \\qquad (7.24) 
$$

For inputs that are sufficiently band-limited,
$$
H_c(j\\omega) = 
\\begin{cases}
H_d(e^{j\\omega T}), & |\\omega|<\\omega_s/2 \\\\
0, & |\\omega|>\\omega_s/2 \\\\
\\end{cases}
\\qquad (7.25)
$$ 

## 7.5 Sampling of discrete time signals

### 7.5.1 Impulse train sampling

$$

x_p[n] = 
\\begin{cases}
x[n], & N | n \\\\
0, & \\text{o.w.}
\\end{cases}
\\qquad (7.38)

$$


$$
x_p[n] = x[n]p[n] = \\sum_{k=-\\infty}^{\\infty}x[kN]\\delta[n-kN] \\qquad (7.39) 
$$


$$
X_p(e^{j\\omega}) = \\frac{1}{N}\\sum_{k=0}^{N-1}X(e^{j(\\omega-k\\omega_s)}) \\qquad (7.42)
$$

$(7.42)$ is the counterpart of $(7.6)$

# Chapter 8

## 8.1.1 Amplitude modulation with a complex exponential carrier

$\\omega_c$ is the *carrier frequency*

*carrier signal*:
$$
c(t) = e^{j(\\omega_c t + \\theta_c)} \\qquad (8.1) 
$$

Let $\\theta_c = 0$,
$$
y(t) = x(t)e^{j\\omega_c t} \\qquad (8.3) 
$$

From multiplication property,
$$
Y(j\\omega) = X(j\\omega -j\\omega_c) \\qquad (8.6) 
$$


## 8.1.1 Amplitude modulation with a sinusoidal carrier
$$
c(t) = \\cos{(\\omega_c t + \\theta_c)} \\qquad (8.2) 
$$

From multiplication property,
$$
Y(j\\omega) = \\frac{1}{2}[X(j\\omega - j\\omega_c) + X(j\\omega + j\\omega_c)] \\qquad (8.10) 
$$

Due to the replication of the spectrum, the original signal is recoverable only if $\\omega_c > \\omega_M$
where $\\omega_M$ is the highest frequency of $X(j\\omega)$

## 8.2.1 Synchronous demodulation
Assuming $\\omega_c > \\omega_M$,
$$
y(t) = x(t) \\cos{\\omega_c t} \\qquad (8.11) 
$$

$x(t)$ can be recovered using the same sinusoidal carrier and applying a lowpass filter with $\\omega \\in (\\omega_M, 2\\omega_c-\\omega_M)$ to the result:
$$
w(t) = y(t) \\cos{\\omega_c t} \\qquad (8.12) 
$$


$$
w(t) = \\frac{1}{2}x(t) + \\frac{1}{2}x(t)\\cos{2\\omega_c t} \\qquad (8.13) 
$$

The lowpass filter gets rid of the second term in $(8.13)$

As the modulator and demodulator are synchronized in phrase, the process is referred as *synchronous demodulation*

## 8.2.2 Asynchronous demodulation
Assuming $\\omega_c > \\omega_M$ and $|x(t)| > 0$, the *envelope* of $y(t)$ can be a reasonable approximation to $x(t)$.

To ensure $x(t) > 0$, a simple change in the modulator can approximate $x(t) + A$, $|x(t)| \\leq K$, $A > K$

$K/A$ is the *modulation index*, or *modulation percent* if written in percentage

### Tradeoff point 1:

Carrier signal carries no information
- The output $A \\cos{\\omega_c t}$ can be minimized by decreasing $A$ to increase system efficiency (decrease power to transmit signal).

On the other hand,
- increasing $K/A$ will make the envelope detector more difficult to detect peaks.

### Tradeoff point 2:
Synchronous demodulation:
- requires more sophisticated demodulator as the oscillator in the demodulator must be synchronized to that of the modulator

On the other hand, asynchronous demodulation
- requires more transmission power, and the cost is offset by saving of receiver cost (as in public broadcasting as receivers can be mass produced)


## 8.7 Sinusoidal frequency modulation
*angle modulation*:

Carrier:
$$
c(t) = A \\cos{(\\omega_c t + \\theta_c)} = A \\cos{\\theta(t)} \\qquad (8.30) 
$$

where $\\omega_c$ is the frequency, and $\\theta_c$ is the phase of the carrier


### *phase modulation*:
Use the modulating signal $x(t)$ to vary the phase $\\theta_c$ so that the modulated signal takes the form:

$$
y(t) = A \\cos{[\\omega_c t + \\theta_c(t)]} \\qquad (8.31) 
$$


$$
\\theta_c(t) = \\theta_0 + k_p x(t) \\qquad (8.32) 
$$

if $x(t)$ is constant, then phase of $y(t)$ is constant and proportional to the amplitude of $x(t)$

### *frequency modulation*:
Use the modulating signal $x(t)$ to vary the derivative of the angle proportionally with the modulating singal:

$$
y(t) = A \\cos{\\theta(t)} \\qquad (8.33) 
$$


$$
\\frac{\\mathrm{d}\\theta(t)}{\\mathrm{d}t} = \\omega_c + k_f x(t) \\qquad (8.34) 
$$

if $x(t)$ is constant, then $y(t)$ is sinusoidal with a frequency that is offset from the carrier frequency $\\omega_c$ by an amount proportional to the amplitude of $x(t)$

--

The two modulation are related. Phase modulating with $x(t)$ is identical to frequency modulating with $\\frac{\\mathrm{d}x(t)}{\\mathrm{d}t}$

--

Frequency modulation with a step $u(t)$ = frequency of carrier signal changes instantaneously from one value to another when $x(t)$ changes value at $0$

Frequency modulation with a ramp $tu(t)$ = frequency of carrier signal changes linearly

For $y(t) = A \\cos{\\theta(t)}$, the *instantaneous frequency* is
$$
\\omega_i(t) = \\frac{\\mathrm{d}\\theta(t)}{\\mathrm{d}t} \\qquad (8.37) 
$$


## 8.7.1 Narrowband frequency Modulation

Let $x(t) = A \\cos{{\\omega_m} t}$

From $(8.34)$ and $(8.37)$,
$$
\\omega_i(t) = \\omega_c + k_f A \\cos{\\omega_m t} \\qquad (8.39) 
$$

Let $\\Delta \\omega = k_f A$. By $(8.31)$ and $(8.34)$, taking $A = 1$ in the modulated signal and constant of integration $=0$,

$$

\\begin{aligned}
    y(t) =& \\cos{[\\omega_c t + \\int x(t) \\mathrm{d}t]} \\qquad (8.40) \\\\
         =& \\cos{\\Big(\\omega_c t + \\frac{\\Delta \\omega}{\\omega_m} \\sin{\\omega_m t}\\Big)} \\qquad (8.41)\\\\
\\end{aligned}

$$


Let $m = \\frac{\\Delta \\omega}{\\omega_m}$ be the modulation index, $(8.41)$ becomes
$$
y(t) = \\cos{\\omega_c t} \\cos {(m \\sin{\\omega_m t})}-\\sin{\\omega_c t}\\sin {(m \\sin{\\omega_m t})} \\qquad (8.43) 
$$

When $m \\ll \\pi / 2$,
$$
\\cos {(m \\sin{\\omega_m t})} \\approx 1 \\qquad (8.44) 
$$


$$
\\sin {(m \\sin{\\omega_m t})} \\approx m\\sin{\\omega_m t} \\qquad (8.45) 
$$


$(8.43)$ becomes
$$
y(t) \\approx \\cos{\\omega_c t} - m(\\sin{\\omega_m t})(\\sin{\\omega_c t}) \\qquad (8.46) 
$$

Comparing to AM-DSB/WC $(8.13)$ taking $x(t) = A\\cos{{\\omega_m} t}$ which results in the form:
$$
y_2(t) = \\cos{\\omega_c t} + m (\\cos{\\omega_m t})(\\cos{\\omega_c t}) \\qquad (8.47) 
$$

The carrier signal of this has a phrase difference of $\\pi /2$ in relation to the AM carrier.

# Chapter 9

## 9.1 Laplace transform
From Chapter 3, response of a LTI system with impulse response $h(t)$ to a complex exponential input of the form $e^{st}$ is:
$$
y(t) = H(s)e^{st} \\qquad (9.1) 
$$


$$
H(s) = \\int_{-\\infty}^{\\infty} h(t)e^{-st} \\mathrm{d}t \\qquad (9.2) 
$$

For $s = j\\omega$, $(9.2)$ is the Fourier transform of $h(t)$, for general $s$, it's the *Laplace transform* of $h(t)$
### Laplace transform of $x(t)$:
$$
\\boxed{X(s) := \\int_{-\\infty}^{\\infty} x(t)e^{-st} \\mathrm{d}t \\qquad (9.3) }
$$


$$
X(\\sigma + j\\omega) := \\int_{-\\infty}^{\\infty} [x(t)e^{-\\sigma t}]e^{-j\\omega t} \\mathrm{d}t \\qquad (9.8) 
$$

$(9.8)$ can be interpreted as the Fourier transform of $x(t)e^{-\\sigma t}$

Note the region of converge (ROC), can be different for the same expression $X(s)$

## 9.2 Region of convergence for Laplace transform
Properties:

1. The ROC of $X(s)$ consists of strips parallel to the $j\\omega$-axis in the $s$-plane
2. For rational Laplace transforms ($X(s)$ is rational), the ROC does not contain any poles
3. For $x(t)$ of finite duration and is absolutely integrable, the ROC is the entire $s$-plane
4. If $x(t)$ is right-sided ($x(t) = 0$ for $t < T_1$), if the line $\\mathfrak{Re}\\{s\\} = \\sigma_0$ is in the ROC, then all values of s which $\\mathfrak{Re}\\{s\\} > \\sigma_0$ will also be in the ROC
5. If $x(t)$ is left-sided ($x(t) = 0$ for $t > T_1$), if the line $\\mathfrak{Re}\\{s\\} = \\sigma_0$ is in the ROC, then all values of s which $\\mathfrak{Re}\\{s\\} < \\sigma_0$ will also be in the ROC
6. If $x(t)$ is two-sided, if the line $\\mathfrak{Re}\\{s\\} = \\sigma_0$ is in the ROC, then the ROC will consist of a strip in the $s$-plane that includes the line $\\mathfrak{Re}\\{s\\} = \\sigma_0$
7. If the Laplace transform $X(s)$ of $x(t)$ is rational, then its ROC is bounded by poles or extends to infinity. No poles of $X(s)$ are contained in the ROC
8. If the Laplace transform $X(s)$ of $x(t)$ is rational. If $x(t)$ is right-sided, the ROC is the region in the $s$-plane to the right of the right most pole. Similar for left-sided case.

## 9.3 Inverse Laplace transform

$$
\\boxed{x(t) = \\frac{1}{2\\pi j}\\int^{\\sigma+j\\infty}_{\\sigma-j\\infty}X(s)e^{st}\\mathrm{d}s \\qquad (9.56)} 
$$


## 9.5.10 Initial and final value theorems
Initial value theorem:

If $x(t) = 0$ for $t < 0$ and $x(t)$ has no impulse or higher order singularities at the origin
$$
x(0^{+}) = \\lim_{s\\rightarrow \\infty} sX(s) \\qquad (9.110) 
$$


Final value theorem:

If in addition, $\\lim_{t\\rightarrow \\infty} x(t) < 0$, then

$$
\\lim_{t\\rightarrow \\infty} x(t) = \\lim_{s\\rightarrow 0} sX(s) \\qquad (9.111) 
$$


## 9.7 Characterization of LTI system using Laplace transform
Counterpart in the context of Laplace transforms for the Fourier transform, $H(s)$ is the *transfer function*:
$$
Y(s) = H(s)X(s) \\qquad (9.112) 
$$


### 9.7.1 Causality
causal system $\\Rightarrow$ The ROC associated with the system function is a right-half plane.

For a system with a rational system function, causality of the system $\\Leftrightarrow$ ROC being the right-half plane

### 9.7.2 Stability
By convergence condition of the Fourier transform of the impulse response,

An LTI system is stable $\\Leftrightarrow$ ROC of its system function $H(s)$ includes the entire $j\\omega$-axis i.e. $\\mathfrak{Re}\\{s\\}=0$

A causal system with rational system function $H(s)$ is stable $\\Leftrightarrow$ all the poles are to the left of the $j\\omega$-axis

## 9.7.3 LTI systems characterized by linear coefficient ODE
Consistent with $(4.72)$ and $(4.76)$.
System function for a system characterized by an ODE is always rational, with zeros and poles specified by $(4.76)$

# Chapter 10

## 10.1 z-transform
$$
\\boxed{X(z) := \\sum_{n=-\\infty}^{\\infty}x[n]z^{-n} \\qquad (10.3)} 
$$


$$
X(re^{j\\omega}) = \\mathcal{F}\\{x[n]r^{-n}\\} \\qquad (10.7) 
$$


## 10.2 ROC for z-transform
Properties

1. The ROC of $X(z)$ consists of a ring in the $z$-plane centered about the origin
2. The ROC does not contain any poles
3. $x[n]$ is of finite duration $\\Rightarrow$ the ROC is the entire $z$-plane except possibily $z = 0$ and/or $z = \\infty$
4. $x[n]$ is a right-sided sequence and the circle $|z| = r_0$ is in the ROC $\\Rightarrow$ all finite values $z$ for $|z| > r_0$ will also be in the ROC
5. $x[n]$ is a left-sided sequence and the circle $|z| = r_0$ is in the ROC $\\Rightarrow$ all finite values $z$ for $0 < |z| < r_0$ will also be in the ROC
6. $x[n]$ is a two-sided sequence and the circle $|z| = r_0$ is in the ROC $\\Rightarrow$ ROC will consists of a ring in the $z$-plane the includes $|z| = r_0$
7. $z$-transform $X(z)$ of $x[n]$ is rational $\\Rightarrow$ ROC is bounded by poles or extends to infinity
8. $z$-transform $X(z)$ of $x[n]$ is rational and $x[n]$ is right-sided $\\Rightarrow$ ROC is the region in the $z$-plane outside the outermost pole. Also if $x[n]$ is causal, ROC includes $z = \\infty$
9. $z$-transform $X(z)$ of $x[n]$ is rational and $x[n]$ is left-sided $\\Rightarrow$ ROC is the region in the $z$-plane inside the innermost pole. Also if $x[n]$ is anti-causal, ROC includes $z = 0$

## 10.3 Inverse z-transform

By $(10.7)$, and taking inverse Fourier transform, using the inverse Fourier transform expression in $(5.8)$, and performing a change of variable $z = re^{j\\omega}$ for the integration:

$$
\\boxed{x[n] = \\frac{1}{2\\pi j}\\Large{∳}\\normalsize X(z) z^{n-1} \\mathrm{d}z \\qquad (10.41)} 
$$

The integration is around $|z| = r$ for any value of $r$ for which $X(z)$ converges

## 10.7.1 Causality
A discrete time LTI system is causal $\\Leftrightarrow$ ROC of its system function is the exterior of a circle including infinity

System function $H(z)$ is rational $\\Leftrightarrow$ ROC is the exterior of a circle outside the outermost pole and order of numerator cannot be greater than order of denominator ($H(z)$ converges as $z \\rightarrow \\infty$)

## 10.7.2 Stability 
An LTI system is stable $\\Leftrightarrow$ ROC of its system function includes the unit circle $|z| = 1$

A causal LTI system with rational system function $H(z)$ is stable $\\Leftrightarrow$ all the poles of $H(z)$ lie inside the unit circle
`,m_=`# Math review

see \`math_review.md\`

## 1.4 Initial and boundary conditions
(D) $u$ is specified "Dirichlet condition"

(N) the normal derivative $\\frac{\\partial u}{\\partial n}$ is specified "Neumann condition"

\\(R\\) $\\frac{\\partial u}{\\partial n} + au$ is specified "Robin condition"

## 1.6 Types of second order PDE
$$
a_{11}u_{xx}+2a_{12}u_{xy}+a_{22}u_{yy}+a_1u_x+a_2u_y+a_0 = 0 
$$
Theorem 1: By linear transformation of the independent variables, the equation can be reduced to:

1. Elliptic case: $a_{12}^2<a_{11}a_{22}$, it is reducible to
$$
u_{xx} + u_{yy} + \\cdots = 0 
$$

2. Hyperbolic case: $a_{12}^2 > a_{11}a_{22}$, it is reducible to
$$
u_{xx} - u_{yy} + \\cdots = 0 
$$

3. Parabolic case: $a_{12}^2=a_{11}a_{22}$, it is reducible to
$$
u_{xx} + \\cdots = 0 
$$
where $\\cdots$ denotes terms of order 1 or 0.

## 2.1 Wave equation

$$
u_{tt} = c^2 u_{xx}, \\quad x \\in \\mathfrak{R}
$$
general solution:
$$
u(x, t) = f(x + ct) + g(x - ct) 
$$
where $f, g \\in C^2$ functions

### Initial value problem

with the initial conditions
$$
u(x, 0) = \\phi(x), \\quad u_t(x, 0) = \\psi(x) 
$$
There's a unique solution
$$
u(x, t) = \\frac{1}{2}[\\phi(x + ct) + \\phi(x - ct)] + \\frac{1}{2c}\\int^{x + ct}_{x - ct}\\psi(s)\\mathrm{d}s 
$$
where $\\phi \\in C^2$

## 2.2 Causality and energy

### Causality
$\\phi(x)$ is a pair of waves travelling in either direction at speed $c$ at half the original amplitude. $\\psi(x)$ the initial velocity may cause part of the wave speed to be $\\le c$ spreading out in both direction but can't be $\\gt c$

The *domain of influence* of $(x_0, t)$ can only affect the solution for $t > 0$ in a triangular region in the $x\\text{-}t$ plane

$\\phi$ and $\\psi$ vanish for $|x| > R$ $\\Rightarrow$ $u(x, t) = 0$ for $|x| = R + ct$,

i.e. the domain of influence of an interval $|x| \\le R$ is the sector $|x| \\le R+ ct$

Inversely, fix $(x, t)$, another triangular region (upside down) is the *domain of dependence* of point $(x, t)$

### Energy
Conservation of energy:
$$\\text{KE} = \\frac{1}{2}\\rho \\int_{-\\infty}^{\\infty} u_t^2 \\mathrm{d} x 
$$
$$\\text{PE} = \\frac{1}{2}T \\int_{-\\infty}^{\\infty} u_x^2 \\mathrm{d} x 
$$

$$
E = \\frac{1}{2}\\int_{-\\infty}^{\\infty} (\\rho u_t^2 + T u_x^2) \\mathrm{d} x 
$$
PE can be obtained by $\\frac{\\mathrm{d}KE}{\\mathrm{d}t} = -\\frac{\\mathrm{d}\\mathrm{PE}}{\\mathrm{d}t} = 0$, differentiating KE

## 2.3 Diffusion equation
$$
u_{t} = k u_{xx} 
$$
Weak maximum principle: max value of $u$ occurs at $t = 0$ or $x = 0$ or $x = l$
### Uniqueness
The Dirichlet problem for the diffusion equation, i.e.
$$
u_t - ku_{xx} = f(x, t), \\quad x \\in (0, l), t>0
$$

$$
u(x, 0) = \\phi(x)
$$

$$
u(0, t) = g(t), \\quad u(l, t) = h(t)
$$
has unique solution, i.e. the solution is completely determined by initial and boundary condition
### Stability
Let $u_1$ and $u_2$ be solutions of the Dirichlet problem for $\\phi=\\phi_1$ and $\\phi=\\phi_2$ resp., $u_1(x, 0) = \\phi_1(x), u_2(x, 0) = \\phi_2(x)$
and for $h = g = f = 0$,

stability in the square integral sense:
$$\\int_0^l[u_1 - u_2]^2 \\mathrm{d}x \\le \\int_0^l [\\phi_1 - \\phi_2]^2 \\mathrm{d}x
$$
proven by energy method

stability in the uniform sense:
$$\\max_x{|u_1-u_2|} \\le \\max_x{|\\phi_1-\\phi_2|}
$$
proven by maximum principle

### Diffusion on the whole line
$$
\\tag{2.4.1}
u_t = ku_{xx}, \\quad x\\in \\mathfrak{R}, t>0 
$$

$$
u(x,0) = \\phi(x)
$$

Invariance properties:

If $u(x, t)$ is a solution, the following are also solutions (verify by plugging into $(2.4.1)$)

1. $u(x - y, t)$ (translation by fixed $y$)
2. Any derivative $u_x, u_t, u_{xx}$ etc. 
3. Linear combinations of solutions
4. Integral of solutions: $S(x,t)$ is a solution $\\Rightarrow \\int_{-\\infty}^{\\infty}S(x-y, t)g(y)\\mathrm{d}y$ is also a solution if the integral converges. This is limiting form of 3.
5. *dilated function* $u(\\sqrt{a}x,at)$ for $a > 0$

The solution is
$$
\\tag{2.4.8} u(x, t) = \\frac{1}{\\sqrt{4\\pi kt}}\\int_{-\\infty}^{\\infty} e^{-(x - y)^2/4kt} \\phi(y) \\mathrm{d}y 
$$

Source function:
$$
S(x, t) = \\frac{\\partial Q}{\\partial x}=\\frac{1}{\\sqrt{4\\pi kt}}e^{-x^2/4kt}, \\quad t>0 
$$

$$
Q(x, t) = \\frac{1}{2}+\\frac{1}{\\sqrt{\\pi}}\\int_0^{x/\\sqrt{4kt}}e^{-p^2}\\mathrm{d}p 
$$
Comparing to the pdf of normal distribution:
$$
f(x|\\mu,\\sigma) = \\frac{1}{\\sigma\\sqrt{2\\pi}} e^{-\\frac{1}{2}\\big(\\frac{(x-\\mu)}{\\sigma}\\big)^2}
$$

$$
S(x,t) = f(x|\\mu=0,\\sigma=\\sqrt{2kt})
$$

$$
\\delta(x) = \\lim_{\\sigma\\rightarrow 0}f(x|\\mu,\\sigma) = \\lim_{t\\rightarrow 0}S(x, t) 
$$
Note:
$$
u(x, t) = \\int_{-\\infty}^{\\infty}S(x-y,t)\\phi(y)\\mathrm{d}y, \\quad t>0 
$$

$$
\\mathrm{Erf}(x) = \\frac{2}{\\sqrt{\\pi}}\\int_0^x e^{-p^2}\\mathrm{d}p, \\quad \\lim_{x\\rightarrow+\\infty}\\mathrm{Erf}(x) = 1
$$

$$
Q(x, t) = \\frac{1}{2} + \\frac{1}{2}\\mathrm{Erf}\\bigg(\\frac{x}{\\sqrt{4kt}}\\bigg) 
$$

$$
\\int_{-\\infty}^{\\infty}S(x,t)\\mathrm{d}x = 1
$$
For any $h(x)$,
$$
\\lim_{\\epsilon\\rightarrow 0}\\int_{-\\infty}^{\\infty}S(x-y,\\epsilon)h(y)\\mathrm{d}y=(\\delta*h)(x) = h(x)
$$
Cutting out the spike of $S$ and consider the max value:
$$
\\lim_{t\\rightarrow 0}\\max_{|x|>\\delta} S(x,t) = 0 
$$

### Comparison of waves and diffusions

| Property                  | Waves                         | Diffusion     |
| :---                      | :---                          | :---          |
| Speed of propagation      | Finite $(\\le c)$              | Infinite      |
| Singularities for $t>0$   | Transported along characteristics (speed = $c$)              | Lost immediately |
| Well-pose for $t>0$?      | Yes                           | Yes (at least for boundary solutions) |
| Well-pose for $t<0$?      | Yes                           | No    |
| Maximum principle         | Yes                           | No    |
| Behavior as $t\\rightarrow \\infty$ | Energy is constant so does not decay  | Decays to $0$ if $\\phi$ integrable    |
| Information               | Transported                   | Lost gradually    |

## 3.1 Diffusion on the half-line
Dirichlet problem:
$$
v_t - kv_{xx} = 0, \\quad x>0, t> 0
$$

$$
v(x, 0) = \\phi(x)
$$

$$
v(0, t) = 0
$$

The solution is:
$$
u(x, t) = \\frac{1}{\\sqrt{4\\pi kt}}\\int_{0}^{\\infty} [e^{-(x - y)^2/4kt}- e^{-(x + y)^2/4kt} \\phi(y)] \\mathrm{d}y 
$$
by *reflection method* or *method of odd extension* of $\\phi(x)$

Neumann problem:
$$
w_t - kw_{xx} = 0, \\quad x>0, t> 0
$$

$$
w(x, 0) = \\phi(x)
$$

$$
w_x(0, t) = 0
$$

Solution is by even extension of $\\phi(x)$:

$$
u(x, t) = \\frac{1}{\\sqrt{4\\pi kt}}\\int_{0}^{\\infty} [e^{-(x - y)^2/4kt} + e^{-(x + y)^2/4kt} \\phi(y)] \\mathrm{d}y 
$$

## 3.2 Reflection of waves
Dirichlet problem:
$$
\\begin{aligned}
\\mathrm{DE:} \\quad & v_{tt} - c^2v_{xx} = 0, \\quad & x>0,t\\in \\mathfrak{R} \\\\
\\mathrm{IC:} \\quad & v(x,0)=\\phi(x), v_t(x, 0) = \\psi(x), & \\quad x>0 \\\\
\\mathrm{BC:} \\quad & v(0,t) = 0, &\\quad t\\in \\mathfrak{R}
\\end{aligned}
$$
Solution by odd extension of $\\phi$ and $\\psi$:
$$
v(x, t) = \\frac{1}{2}[\\phi(x + ct) + \\phi(x - ct)] + \\frac{1}{2c}\\int^{x + ct}_{x - ct}\\psi(s)\\mathrm{d}s, \\quad x>c|t| 
$$

$$
v(x, t) = \\frac{1}{2}[\\phi(ct + x) + \\phi(ct - x)] + \\frac{1}{2c}\\int^{ct + x}_{ct - x}\\psi(s)\\mathrm{d}s, \\quad x<c|t| 
$$

### Finite Interval

$$
v_{tt} - c^2v_{xx} = 0, \\quad x\\in(0,l),t\\in \\mathfrak{R}
$$

$$
v(x,0)=\\phi(x), v_t(x, 0) = \\psi(x), \\quad x\\in(0,l)

$$

$$
v(0,t) = v(l, t) = 0, \\quad t\\in \\mathfrak{R}
$$
Solution is by odd extension of $\\phi$ and $\\psi$, and counting the number of reflection occurred at $(x,t)$.
Different regions (diamonds/triangles) in the $x$-$t$ plane has a different expression of solution

## 3.3 Diffusion with a source
### Source on whole-line
$$
u_t - ku_{xx} = f(x,t), \\quad x\\in \\mathfrak{R}, t>0
$$

$$
u(x,0) = \\phi(x)
$$
Solution is:
$$
u(x,t) = \\int_{-\\infty}^{\\infty}S(x-y,t)\\phi(y)\\mathrm{d}y+\\int_0^t\\int_{-\\infty}^{\\infty}S(x-y,t-s)f(y,s)\\mathrm{d}y\\mathrm{d}s
$$
Guessing by analogy to solution of 1st order linear ODE using integrating factor (operator method)

### Source on a half-line
$$
v_t - kv_{xx} = f(x,t), \\quad x>0, t>0
$$

$$
v(0,t) = h(t)
$$

$$
v(x,0) = \\phi(x)
$$
To solve, let $V(x,t) = v(x,t)-h(t)$ and reduce the problem to a homogenous one and use method of reflection

For the Neumann problem:
$$
w_t - kw_{xx} = f(x,t), \\quad x>0, t>0
$$

$$
w_x(0,t) = h(t)
$$

$$
w(x,0) = \\phi(x)
$$
To solve, let $W(x,t) = w(x,t)-xh(t)$

## 3.4 Waves with a source
$$
\\tag{3.4.1}u_{tt} - c^2u_{xx} = f(x, t) 
$$

$$
\\tag{3.4.2}
\\begin{aligned}
u(x, 0) & = \\phi(x) \\\\
u_t(x, 0) & = \\psi(x)
\\end{aligned}
$$

The unique solution is:
$$
u(x, t) = 
\\tag{3.4.3} \\frac{1}{2}[\\phi(x + ct) + \\phi(x - ct)] + \\frac{1}{2c}\\int^{x + ct}_{x - ct}\\psi+\\frac{1}{2c}\\iint_\\Delta f
$$

where $\\Delta$ is the characteristic triangle bounded by $y = x - ct, y = x + ct, t = 0$

## Well-posedness
Let $u_1$ be the solution to the data $\\phi_1, \\psi_1, f_1$, 
$u_2$ be the solution to the data $\\phi_2, \\psi_2, f_2$, 
Consider $u=u_1-u_2$, and the area of $\\Delta$ is $ct^2$:
$$
|u| \\le \\max|\\phi|+\\frac{1}{2c}\\max |\\psi|\\cdot 2ct + \\frac{1}{2c}\\max|f|\\cdot ct^2
$$

$$
\\|u_1-u_2\\|_T \\le \\|\\phi_1-\\phi_2\\|+ T\\|\\psi_1-\\psi_2\\| + \\frac{T^2}{2}\\|f_1-f_2\\|_T
$$
where $\\|w\\|_T =\\max_{x\\in \\mathfrak{R}, t\\in[0, T]}|w(x,t)|$.

$$
\\|\\phi_1-\\phi_2\\|<\\delta,
\\|\\psi_1-\\psi_2\\|<\\delta,
\\|f_1-f_2\\|_T<\\delta \\\\ \\Rightarrow
\\|u_1-u_2\\|_T \\le \\delta(1+T+T^2)<\\epsilon
$$

## Proof of $(3.4.3)$
By method of characteristics, Green's theorem, or operator method

## 3.5 Diffusion analysis
In 2.3,
$$
\\tag{3.5.1} u(x, t) = \\int_{-\\infty}^{\\infty}S(x-y,t)\\phi(y)\\mathrm{d}y, \\quad t>0 
$$
can be written as
$$
\\tag{3.5.2} u(x, t) = \\frac{1}{\\sqrt{4\\pi}}\\int_{-\\infty}^{\\infty}e^{-p^2/4}\\phi(x-p\\sqrt{kt})\\mathrm{d}p
$$

### Theorem 1:

$\\phi$ bounded for $x \\in\\mathfrak{R} \\Rightarrow$

- $(3.5.2)$ is infinitely differentiable for $x\\in \\mathfrak{R}, t>0$
- $u$ is a solution to $u_t=ku_{xx}$
- $\\lim_{t\\rightarrow 0} u(x,t)=\\phi(x)$

Corollary:

$u(x,t)$ has all derivatives of all orders, even if $\\phi$ is not differentiable

This means all solutions become smooth as soon as diffusion takes place

### Theorem 2:
Let $\\phi(x)$ be bounded and piecewise continuous, then $(3.5.1)$ is infinitely differentiable solution for $t > 0$ and 
$$
\\lim_{t\\rightarrow 0} u(x,t) = \\frac{1}{2}[\\phi(x^+)+\\phi(x^-)]
$$


# Chapter 4 Boundary Problems
## 4.1 Separation of variables, Dirichlet condition

### Homogenous wave equation
$$
\\tag{4.1.1}
u_{tt} = c^2u_{xx}, \\quad x \\in (0, l)
$$

$$
\\tag{4.1.2}
u(0, t) = 0 = u(l, t)
$$

$$
\\tag{4.1.3}
u(x, 0) = \\phi(x), u_t(x,0) = \\psi(x)
$$

A *separated solution* is of the form
$$

u(x, t) = X(x)T(t)
$$

$$
-\\frac{T''}{c^2T}=-\\frac{X''}{X}=\\lambda
$$
Solving the pairs of ODE gives
$$
u_n(x,t) = \\bigg(A_n \\cos{\\frac{n\\pi ct}{l}} + B_n \\sin{\\frac{n\\pi ct}{l}} \\bigg)\\sin{\\frac{n\\pi x}{l}}
$$
And solution to $(4.1.1)$ and $(4.1.2)$ only is any *finite* sum:
$$
\\tag{4.1.9}
u(x,t) = \\sum_n{\\bigg(A_n \\cos{\\frac{n\\pi ct}{l}} + B_n \\sin{\\frac{n\\pi ct}{l}} \\bigg)\\sin{\\frac{n\\pi x}{l}}}
$$
for $n>0$ and $A_n, B_n$ are arbitrary constants

$(4.1.9)$ solves $(4.1.3)$ as well if:
$$
\\phi(x) = \\sum_n{A_n \\sin{\\frac{n\\pi x}{l}}}
$$

$$
\\psi(x) = \\sum_n{\\frac{n\\pi c}{l}B_n \\sin{\\frac{n\\pi x}{l}}}
$$

### Homogenous diffusion equation (Dirichlet)
$$
u_t = ku_{xx}, \\quad x \\in (0, l), t>0
$$

$$
u(0, t) = u(l, t) = 0
$$

$$
u(x, 0) = \\phi(x)
$$

By $u=T(t)X(x)$ again, solution:
$$
\\tag{4.1.17}
u(x, t) = \\sum_{n=1}^{\\infty}A_ne^{-(n\\pi/l)^2kt}\\sin\\frac{n\\pi x}{l}
$$
if
$$
\\phi(x) = \\sum_{n=1}^{\\infty}A_n\\sin\\frac{n\\pi x}{l}
$$

$\\lambda_n = (n\\pi / l)^2$ are called *eigenvalues* and $X_n(x) = \\sin(n\\pi x/l)$ are called *eigenfunctions* because
$$
-\\frac{\\mathrm{d}^2}{\\mathrm{d}x^2}X = \\lambda X, \\quad X(0) = X(l) = 0
$$
and $-\\frac{\\mathrm{d}^2}{\\mathrm{d}x^2}$ is the operator. There're infinitely many eigenvalues

$\\lambda_n > 0$ for this Dirichlet problem

## 4.2 Neumann condition
### Homogenous diffusion equation
$$
u_t = ku_{xx}, \\quad x \\in (0, l), t>0
$$

$$
u_x(0, t) = u_x(l, t) = 0
$$

$$
u(x, 0) = \\phi(x)
$$

$$
\\lambda_n = \\Big(\\frac{n\\pi}{l}\\Big)^2, n \\ge 0 \\\\
$$
$\\lambda_0$ has eigenfunction $X=C$ where $C$ is constant

$\\lambda_n, n>0$ has eigenfunctions $X_n(x) = \\cos{\\frac{n\\pi x}{l}}$

Solution:
$$
\\tag{4.2.5}
u(x, t) = \\frac{1}{2}A_0 + \\sum_{n=1}^{\\infty}A_ne^{-(n\\pi/l)^2kt}\\cos\\frac{n\\pi x}{l}
$$
where $\\phi(x)$ is required to have Fourier expansion:

$$
\\phi(x) = \\frac{1}{2}A_0 + \\sum_{n=1}^{\\infty}A_n\\cos\\frac{n\\pi x}{l}
$$

### Homogenous wave equation
$$
u_{tt} = c^2u_{xx}, \\quad x \\in (0, l)
$$

$$
u_x(0, t) = 0 = u_x(l, t)
$$

$$
u(x, 0) = \\phi(x), u_t(x,0) = \\psi(x)
$$

Solution:
$$
u(x,t)=\\frac{1}{2}A_0 + \\frac{1}{2}B_0t + \\sum_{n = 1}^\\infty \\Big(
A_n\\cos \\frac{n\\pi ct}{l}+
B_n\\sin \\frac{n\\pi ct}{l}
\\Big)
\\cos \\frac{n\\pi x}{l}
$$
$\\phi(x)$ and $\\psi(x)$ must satisfy:

$$
\\phi(x)=\\frac{1}{2}A_0 + \\sum_{n = 1}^\\infty A_n\\cos \\frac{n\\pi x}{l}
$$

$$
\\psi(x)= \\frac{1}{2}B_0 + \\sum_{n = 1}^\\infty
\\frac{n\\pi c}{l} B_n\\cos \\frac{n\\pi x}{l}
$$

## 4.3 Robin condition
Solving $-X'' = \\lambda X$ with BC
$$
X' - a_0X = 0, \\quad x = 0 \\\\
X' + a_lX = 0, \\quad x = l
$$

### Positive eigenvalues: $\\lambda = \\beta^2 >0$
$$
\\tag{4.3.10}
\\tan \\beta l = \\frac{(a_0 + a_l)\\beta}{\\beta^2-a_0a_l}
$$
Eigenfunction:
$$
\\tag{4.3.9}
X(x) =C\\Big(\\cos \\beta x+ \\frac{a_0}{\\beta} \\sin \\beta x\\Big)
$$

By considering graphs of both sides of $(4.3.10)$,

Case 1: 
$a_0 > 0, a_l > 0$: radiation at both ends
$$
n^2\\frac{\\pi^2}{l^2} < \\lambda_n < (n + 1)^2\\frac{\\pi^2}{l^2}, \\quad n \\ge 0
$$

$$
\\lim_{n\\rightarrow \\infty}\\beta_n - n\\frac{\\pi}{l} = 0
$$
Case 2: $a_0 < 0, a_l > 0, a_0 + a_l > 0$: more radiation than absorption

There's an eigenvalue
$$
0 < \\lambda_0 < \\Big(\\frac{\\pi}{2l}\\Big)^2
$$
iff
$$
\\tag{4.3.14}
a_0 + a_l > -a_0a_ll
$$

### Zero eigenvalue
iff
$$
\\tag{4.3.15}
a_0 + a_l = -a_0a_ll
$$

### Negative eigenvalue: $\\lambda = -\\gamma^2 < 0$

$$
\\tag{4.3.16}
\\tanh \\gamma l = - \\frac{(a_0 + a_l)\\gamma}{\\gamma^2 + a_0a_l}
$$

$$
\\tag{4.3.17}
X(x) = \\cosh{\\gamma x} + \\frac{a_0}{\\gamma} \\sinh \\gamma x
$$

Case 1: $a_0 > 0, a_l > 0$: radiation at both ends

No negative eigenvalues

Case 2: $a_0 < 0, a_l > 0, a_0 + a_l > 0$: more radiation than absorption

There's an eigenvalue
iff
$$
\\tag{4.3.18}
a_0 + a_l < -a_0a_ll
$$

### Summary:
Case 1 $\\Rightarrow\\lambda_n > 0$

Case 2:
- $a_0 + a_l > -a_0a_ll \\Rightarrow \\lambda_n > 0, n \\ge 0$
- $a_0 + a_l = -a_0a_ll \\Rightarrow$ $\\lambda_0 = 0, \\lambda_n > 0, n > 0$ 
- $a_0 + a_l < -a_0a_ll \\Rightarrow$ $\\lambda_0 < 0, \\lambda_n > 0, n > 0$ 

## Conclusion
Solution:
$$
u(x,t) = \\sum_n T_n(t)X_n(x)
$$
where $X_n(x)$ are the eigenfunctions,
$$
T_n(t) = \\begin{cases}
A_n e^{-\\lambda_n k t} \\quad & \\text{for diffusion} \\\\
A_n \\cos(\\sqrt{\\lambda_n}ct) + B_n \\sin(\\sqrt{\\lambda_n}ct) \\quad  & \\text{for waves} \\\\
\\end{cases}
$$

## 5.1 Fourier series coefficients
Key observation:
$$
\\int_0^l\\sin\\frac{n\\pi x}{l}\\sin\\frac{m\\pi x}{l}\\mathrm{d}x = 0, \\quad \\text{if } m \\ne n
$$

$$
\\int_0^l\\cos\\frac{n\\pi x}{l}\\cos\\frac{m\\pi x}{l}\\mathrm{d}x = 0, \\quad \\text{if } m \\ne n
$$
Fourier sine series:
$$
\\phi(x) = \\sum_{n = 1}^{\\infty}A_n \\sin\\frac{n\\pi x}{l}, \\quad x\\in (0, l)
$$

$$
A_m = \\frac{2}{l}\\int_0^l \\phi(x) \\sin\\frac{m \\pi x}{l} \\mathrm{d} x
$$

Fourier cosine series:

$$
\\phi(x) = \\frac{1}{2}A_0 + \\sum_{n = 1}^{\\infty}A_n \\cos\\frac{n\\pi x}{l}, \\quad x\\in (0, l)
$$

$$
A_m = \\frac{2}{l}\\int_0^l \\phi(x) \\cos\\frac{m \\pi x}{l} \\mathrm{d} x
$$

Full Fourier series:

$$
\\phi(x) = \\frac{1}{2}A_0 + \\sum_{n = 1}^{\\infty}\\Big(A_n \\cos\\frac{n\\pi x}{l} + B_n \\cos\\frac{n\\pi x}{l}\\Big), \\quad x\\in (-l, l)
$$
All the eigenfunctions are $\\{1, \\cos(n\\pi x/l), \\sin(n\\pi x/l)| n>0\\}$. Multiply any of them and integrate over the interval gives $0$

$$
A_n = \\frac{1}{l}\\int_0^l \\phi(x) \\cos\\frac{n \\pi x}{l} \\mathrm{d} x, \\quad n\\ge 0
$$

$$
B_n = \\frac{1}{l}\\int_0^l \\phi(x) \\sin\\frac{n \\pi x}{l} \\mathrm{d} x, \\quad n > 0
$$

### Fourier Series and boundary conditions
Fourier {cosine, sine} series can be regarded as expansion of arbitrary function which is {even, odd} and has period $2l$ defined for $x\\in \\mathfrak{R}$

From 5.1,
- $u(x, 0) = u(l, 0) = 0$ Dirichlet BCs correspond to the odd extension 
- $u_x(x, 0) = u_x(l, 0) = 0$ Neumann BCs correspond to the even extension 
- $u(l, t) = u(-l, t), u_x(l, t) = u_x(-l, t)$ Periodic BCs correspond to the periodic extension 

## Complex form of full Fourier series
$$
\\phi(x) = \\sum_{n=-\\infty}^{\\infty}c_n e^{in\\pi x/l}
$$

$$
c_n = \\frac{1}{2l}\\int_{-l}^{l}\\phi(x) e^{-in\\pi x/l} \\mathrm{d}x
$$

## Orthogonality and general Fourier series
For $f(x), g(x): [a, b] \\rightarrow \\mathfrak{R}$

Inner product:
$$
(f, g) := \\int_a^bf(x)g(x)\\mathrm{d}x
$$

Let 
$$
-X_1'' = \\frac{\\mathrm{d}^2X_1}{\\mathrm{d}x^2}=\\lambda_1X
$$

$$
-X_2'' = \\frac{\\mathrm{d}^2X_2}{\\mathrm{d}x^2}=\\lambda_2X
$$

Every eigenfunction is orthogonal to each other

Green's second identity:
$$
\\tag{5.1.3}
\\int_a^b(-X_1''X_2+X_1X_2'')\\mathrm{d}x = (-X_1'X_2+X_1X_2')\\Big|^a_b
$$

Using different boundary conditions:

- Dirichlet: $X_1(a)=X_1(b) =X_2(a)=X_2(b) = 0$
- Neumann: $X_1'(a)=X_1'(b) =X_2'(a)=X_2'(b) = 0$
- Periodic: $X_j(a)=X_j(b), X_j'(a)=X_j'(b), j \\in \\{1,2\\}$
- Robin

For all cases, right side of $(5.1.3) = 0$. $(5.1.3)$ reduces to:
$$
(\\lambda_1 - \\lambda_2)\\int_a^bX_1X_2\\mathrm{d}x = 0
$$
$\\therefore X_1 \\bot X_2$

### Symmetric boundary conditions
Given any pair of boundary conditions
$$
\\tag{5.1.4}
\\alpha_1X(a) + \\beta_1X(b)+\\gamma_1X'(a) + \\delta_1X'(b) = 0
$$

$$
\\alpha_2X(a) + \\beta_2X(b)+\\gamma_2X'(a) + \\delta_2X'(b) = 0
$$
Such boundary condition is called *symmetric* if:
$$
f'(x)g(x) - f(x)g'(x) \\Big|_{x=a}^{x=b} = 0
$$
for any $f, g$ that satisfy the pair of boundary conditions

All standard boundary conditions are symmetric

### Theorem 1:
For symmetric boundary conditions, any 2 eigenfunctions that correspond to different eigenvalues are orthogonal. $\\therefore$ For any function expanded in a series of these eigenfunctions, the coefficients are determined

Proof:

Let $X_n(x)$ be the eigenfunction with eigenvalue $\\lambda_n$
If
$$
\\phi(x) = \\sum_nA_nX_n(x)
$$
is a convergent series,
$$
(\\phi,X_m) = A_m(X_m,X_m)
$$

$$
A_m = \\frac{(\\phi,X_m)}{(X_m,X_m)} = \\frac{(\\phi,X_m)}{c_m}
$$

Caution:

1. Mind the convergence of the series
2. $\\lambda_1 = \\lambda_2$ $\\Rightarrow$ the $X_1, X_2$ may not be orthogonal but they can be made so by Gram-Schmdit orthogonalization procedure

## Complex eigenvalues
Inner product:

For $f(x), g(x): [a, b] \\rightarrow \\mathfrak{C}$

$$
(f, g) := \\int_a^bf(x)\\overline{g(x)}\\mathrm{d}x
$$

Boundary condition $(5.1.4)$ is called symmetric or hermitian if:
$$
f'(x)\\overline{g(x)} - f(x) \\overline{g'(x)} \\Big|_{x=a}^{x=b} = 0
$$

### Theorem 2:

Under the same condition as Theorem 1, all eigenvalues are real, and all eigenfunctions can be chosen to be real valued

## Negative eigenvalues

### Theorem 3:
Under the same condition as Theorem 1, if
$$
f(x)f'(x)\\Big|_{x=a}^{x=b} \\le 0
$$
for all $f(x)$ satisfying the BCs, then there is no negative eigenvalue

This is true for Dirichlet, Neumann, and Periodic conditions but not for some Robin conditions

## 5.4 Completeness

Consider the eigenvalue problem 
$$
\\tag{5.4.1}
X''+\\lambda X = 0, x\\in(a, b)
$$
with symmetric BC

Theorem 1: There are infinite number of eigenvalues. $\\lambda_n \\rightarrow \\infty$

For any $f: (a, b) \\rightarrow \\mathfrak{C}$, its Fourier coefficients are defined as:
$$
A_n = \\frac{(f, X_n)}{(X_n, X_n)} = \\frac{\\int_a^bf(x) \\overline{X_n(x)}\\mathrm{d}x}{\\int_a^b|X_n(x)|^2\\mathrm{d}x}
$$
The Fourier series is $\\sum_nA_nX_n(x)$

### Convergence theorems:

Let $f: [a, b] \\rightarrow \\mathfrak{R}$, and consider the Fourier series of $(5.4.1)$

Theorem 2: Uniform convergence

The Fourier series $\\sum A_nX_n(x)$ converges uniformly on $[a, b]$ to $f(x)$ if

1. $f(x), f'(x), f''(x)$ exist and are continuous for $x\\in [a,b]$
2. $f(x)$ satisfy the BCs

Note: For sine, cosine, full Fourier expansion, $f''(x)$ does not have to exist

Theorem 3: $L^2$ convergence

The Fourier series converges to $f(x)$ in the mean-square sense in $(a, b)$ if
$$
\\int_a^b|f(x)|^2\\mathrm{d}x < \\infty
$$

Theorem 4: Pointwise convergence of classical Fourier series

(i): $f(x)$ is continuous on $[a, b]$ and $f'(x)$ is piecewise continuous on $[a, b]$ $\\Rightarrow$ The classical Fourier series converges to $f(x)$ pointwise on $(a, b)$ 

(ii): more generally, $f(x)$ is only piecewise continuous on $[a, b]$ and $f'(x)$ is piecewise continuous on $[a, b]$ $\\Rightarrow$ The classical Fourier series converges at every point $x\\in \\mathfrak{R}$ and 
$$
f(x) = \\sum_nA_nX_n(x) = \\frac{1}{2}[f(x^+) + f(x^-)], x \\in (a, b)
$$

Theorem 5: Least square approxmiation

Let \${X_n}$ be any orthogonal set of functions, $\\|f\\| < \\infty$, $N \\in \\mathfrak{Z}^+$ be fixed, then $c_i = A_i, i > 0$ minimizes
$$
\\Bigg\\|f-\\sum_{n = 1}^Nc_nX_n\\Bigg\\|
$$
where $A_i$ are the Fourier coefficients in $f = \\sum A_nX_n$

Bessel's inequality:
$$
\\tag{5.4.18}
\\sum_{n = 1}^\\infty A_n^2 \\int_a^b|X_n(x)|^2\\mathrm{d}x \\le \\int_a^b|f(x)|^2 \\mathrm{d}x
$$
Norm notation: $\\sum_{n = 1}^{\\infty}A_n^2\\|X_n\\|^2 \\le \\|f\\|^2 \\Leftrightarrow \\sum_{n = 1}^{\\infty}\\frac{|(f, X_n)|^2}{\\|X_n\\|^2} \\le \\|f\\|^2$

Theorem 6: The Fourier series of $f$ converges to $f$ in the mean square sense $\\Leftrightarrow$
$$
\\tag{5.4.19}
\\sum_{n = 1}^\\infty |A_n|^2 \\int_a^b|X_n(x)|^2\\mathrm{d}x = \\int_a^b|f(x)|^2 \\mathrm{d}x
$$
which is the Parseval's equality

Definition: The infinite orthogonal set of functions $\\{X_n\\}$ is called *complete* if $(5.4.19)$ is true $\\forall f$ s.t $\\int_a^b|f|^2\\mathrm{d}x < \\infty$

Corollary 7: $\\int_a^b|f|^2\\mathrm{d}x < \\infty$ $\\Rightarrow$ $(5.4.19)$ is true

## 5.6 Inhomogenous boundary condition

Diffusion equation with sources at both end:
$$
u_t = ku_{xx}, \\quad x \\in (0, l), t>0
$$

$$
u(0, t) = h(t), u(l, t) = j(t)
$$

$$
u(x, 0) = 0
$$
Separated solution $u = X(x)T(t)$ will not fit the boundary condition (considering $\\phi(x) = 0$)
### Expansion method
From 4.1, the correct expansion for $u$ is the Fourier sine series
$$
u(x,t) = \\sum_{n=1}^{\\infty}u_n(t)\\sin\\frac{n\\pi x}{l}
$$
for some coefficient $u_n(t)$, by the completeness theorems any function in $(0, l)$ can be expanded this way, and by 5.1
$$
u_n(t) = \\frac{2}{l}\\int_0^l u(x, t)\\sin\\frac{n\\pi x}{l} \\mathrm{d}x
$$
Caution: $u$ can't be differentiated term by term.

By considering $\\frac{2}{l}\\int_0^l(u_t-ku_{xx})\\sin\\frac{n\\pi x}{l}\\mathrm{d}x = 0$ (integral valid as thing inside is continuous), an ODE involving $u_n$ can be reached, and with $u_n(0) = 0$,

$$
u_n(t) = Ce^{-\\lambda_nkt}-2n\\pi l^{-2}k\\int_0^te^{-\\lambda_nk(t-s)}[(-1)^nj(s)-h(s)]\\mathrm{d}s
$$

### Method of shifting the data
Consider the inhomogenous wave problem:
$$
u_{tt} - c^2u_{xx} = f(x, t)
$$

$$
u(0, t) = h(t), u(l, t) = k(t)
$$

$$
u(x, 0) = \\phi(x), u_t(x, 0) = \\psi(x)
$$
Let
$$
U(x,t) = \\Big(1-\\frac{x}{l}\\Big)h(t) + \\frac{x}{l}k(t)
$$
which satisfy the BCs,
and let
$$
v(x, t) = u(x, t) - U(x,t)
$$
Then $v$ satisfy the same problem but with 0 boundary data, with initial data $\\phi(x) - U(x, 0), \\psi(x) - U_t(x, 0)$, RHS replaced by $f - U_{tt}$

*The BC and the DE can be simultaneously made homogeneous by subtracting any function that satisfies them*

e.g. when $h, k, f(x)$  are all independent of time, then $-c^2U_{xx}=f(x), U(0) = h, U(l) = k$, and $v(x, t) = u(x, t) - U(x)$ solves the problem with 0 boundary data, zero on RHS of DE, and initial data $\\phi(x) - U(x), \\psi(x)$

## 6.1 Laplace's equation
If diffusion or wave process is stationary, i.e. independent of time, then $u_{t} \\equiv 0, u_{tt} \\equiv 0$, and both equations reduce to Laplace's equation:
$$
u_{xx} = 0, \\quad \\text{(1D)}
$$

$$
\\nabla\\cdot\\nabla u = \\Delta u = u_{xx} + u_{yy} = 0, \\quad \\text{(2D)}
$$
A solution to Laplace's equation is called a *harmonic function*

Inhomogenous version (Poisson's equation):
$$
\\Delta u = f
$$

*Analytic functions* are functions which can be expressed as a power series of $z$:
$$
f(z) = \\sum_{n = 0}^{\\infty}a_nz^n
$$
By equality of mixed deriatives, real and imaginary parts of analytic functions are harmonic

Basic problem:
$$
\\Delta u = f, \\quad \\mathbf{x} \\in D, \\\\
u = h \\quad \\text{or} \\quad \\frac{\\partial u}{\\partial n} =h \\quad \\text{or} \\quad \\frac{\\partial u}{\\partial n}+au=h, \\quad \\mathbf{x} \\in\\partial D
$$

### Maximum principle

Let $D$ be a connected bounded open set (in 2D or 3D space). $u$ is a harmonic function in $D$ that is continuous on $\\overline{D} = D \\cup\\partial D$ $\\Rightarrow$ maximum and minimum of $u$ are attained on $\\partial D$ and no where inside unless when $u$ is constant

Max/Min existence on boundary is proven by 2nd derivative test and considering $v(\\mathbf{x})=u(\\mathbf{x}) + \\epsilon|\\mathbf{x}|^2, \\epsilon > 0$. Absence of min/max inside -> see 6.3

### Uniqueness of Dirichlet problem
Proven by letting two solutions $u, v$ and let $w = u - v$, and use the maximum principle

### Invariance in 2 dimensions
$$
\\Delta u(\\mathbf{x})=\\Delta u(\\mathbf{x}')
$$
for $\\mathbf{x}'$ being a translation or rotation of $\\mathbf{x}$

By the rotational invariance of the 2D laplacian operator, by letting $x = r\\cos\\theta, y = r\\sin\\theta$, the transformation has the Jacobian matrix:
$$
J = \\begin{bmatrix}
\\frac{\\partial x}{\\partial r} & \\frac{\\partial y}{\\partial r} \\\\[1mm]
\\frac{\\partial x}{\\partial \\theta} & \\frac{\\partial y}{\\partial \\theta} \\\\
\\end{bmatrix}
=
\\begin{bmatrix}
\\cos\\theta& \\sin\\theta \\\\
-r\\sin\\theta& r\\cos\\theta
\\end{bmatrix}
$$

$$
\\tag{6.1.5}
\\Delta_2=\\frac{\\partial^2}{\\partial x^2} + \\frac{\\partial^2}{\\partial y^2} = \\frac{\\partial^2}{\\partial r^2} + \\frac{1}{r}\\frac{\\partial}{\\partial r} + \\frac{1}{r^2}\\frac{\\partial^2}{\\partial \\theta^2}
$$

It's natural to look for harmonic function that are rotationally invariant, by $(6.1.5)$
$$
0 = u_{xx} + u_{yy} = u_{rr} + \\frac{1}{r}u_r
$$
if $u$ does not depend on $\\theta$. The solution to the ODE is:
$$
u = c_1 \\log r + c_2
$$

## Invariance in 3 dimension
$$
\\Delta u(B\\mathbf{x}) = \\Delta u(\\mathbf{x})
$$
where $B$ is an orthogonal matrix, $BB^T=I$

It is natural to use spherical coordinate:
$$
r = \\sqrt{x^2+y^2+z^2}=\\sqrt{s^2+z^2}
$$

$$
s = \\sqrt{x^2+y^2}
$$

$$
x = s\\cos\\phi, \\quad z=r\\cos\\theta
$$

$$
y = s\\sin\\phi, \\quad s=r\\sin\\theta
$$

$$
\\Delta_3 = \\frac{\\partial^2}{\\partial r^2} + \\frac{2}{r}\\frac{\\partial}{\\partial r} + \\frac{1}{r^2\\sin\\theta}\\frac{\\partial}{\\partial \\theta}\\sin\\theta \\frac{\\partial}{\\partial \\theta} + \\frac{1}{r^2\\sin^2\\theta}\\frac{\\partial^2}{\\partial \\phi^2}
$$

Harmonic functions that don't change under rotation in 3D:
$$
0 = \\Delta_3u = u_{rr} + \\frac{2}{r}u_r
$$
Solving:
$$
u = -c_1\\frac{1}{r}+c_2 \\\\
\\frac{1}{r} = (x^2 + y^2 + z^2)^{-\\frac{1}{2}}
$$


## 6.2 Rectangles and cubes
If the domain is of a special geometry, the PDE can be solve in the same way as ch 4.

1. Look for separated the solution of the PDE
2. Put in the homogeneous BCs to get the eigenvalues (require special geometry)
3. Sum the series
4. Put in inhomogeneous initial or BCs 

## 6.3 Poisson's formula
Dirichlet problem for a circle:
$$
u_{xx} + u_{yy} = 0, \\quad x^2 + y^2 < a^2
$$

$$
u = h(\\theta),  \\quad x^2 + y^2 = a^2
$$
By separation solution in polar coordinate form $u=R(r)\\Theta(\\theta)$, a simultaneous pair of ODE occurs. Imposing the BC $\\Theta(\\theta + 2\\pi) = \\Theta(\\theta)$ (periodic BC), requiring $u < \\infty$ at $r = 0$ and explicitly calculating the summation:

Poisson's formula:
$$
u(r, \\theta) = (a^2 - r^2)\\int_0^{2\\pi}\\frac{h(\\phi)}{a^2-2ar\\cos(\\theta-\\phi)+r^2}\\frac{\\mathrm{d}\\phi}{2\\pi}
$$

Alternate notation by letting $\\mathbf{x} = (r, \\theta), \\mathbf{x}' = (a,\\theta)$, and changing the integral to a line integral around the arc of a full circle:
$$
u(\\mathbf{x}) = \\frac{a^2-|\\mathbf{x}|^2}{2\\pi a}\\int_{|\\mathbf{x}'|=a }\\frac{u(\\mathbf{x}')}{|\\mathbf{x} - \\mathbf{x}'|^2}\\mathrm{d}s'
$$
for $\\mathbf{x} \\in D$, where $u(\\mathbf{x}') = h(\\phi)$

### Theorem 1
Let $h(\\phi) = u(\\mathbf{x}')$ be continous function on the circle $\\partial D$. Then the Poisson's formula provides the only harmonic function in $D$ s.t.
$$
\\lim_{\\mathbf{x} \\rightarrow \\mathbf{x}_0} u(\\mathbf{x})=h(\\mathbf{x}_0), \\forall \\mathbf{x}_0 \\in \\partial D
$$
This means $u(\\mathbf{x})$ is continuous on $\\overline{D} = D \\cup \\partial D$

### Mean value property
Let $u$ be a harmonic function in a disk $D$ (continuous on $\\overline{D}$). Then $u( \\mathbf{0})$ is the average of $u$ on $\\partial D$ 

### Differentiability
Let $u$ be a harmonic function in any open set $D$ of the plane. Then $u(\\mathbf{x}) = u(x, y)$ has all partial derivatives of all order in $D$.

## 7.1 Green's first identity
From product rule
$$
(vu_x)_x = v_xu_x + vu_{xx}
$$
ND case and summing:
$$
\\nabla \\cdot (v\\nabla u) = \\nabla v\\cdot \\nabla u + v\\Delta u
$$
Using the divergence theorem, Green's first identity:

$$
\\tag{7.1.G1}
\\iint_{\\partial D}v\\frac{\\partial u}{\\partial \\mathbf{n}}\\ \\mathrm{d}S = \\iiint_D \\nabla v \\cdot \\nabla u \\ \\mathrm{d}\\mathbf{x} + \\iiint_D v \\Delta u \\ \\mathrm{d}\\mathbf{x}
$$
Taking $v\\equiv 1$,
$$
\\tag{7.1.2}
\\iint_{\\partial D}\\frac{\\partial u}{\\partial \\mathbf{n}}\\ \\mathrm{d}S = \\iiint_D \\Delta u \\ \\mathrm{d}\\mathbf{x}
$$
For the Neumann problem
$$
\\begin{cases}
\\Delta u = f(x), \\quad x \\in D \\\\
\\frac{\\partial u}{\\partial \\mathbf{n}} = h(x), \\quad x \\in \\partial D
\\end{cases}
$$
Data are required to satisfy:
$$
\\iint_{\\partial D}h\\ \\mathrm{d}S = \\iiint_D f \\ \\mathrm{d}\\mathbf{x}
$$
This problem has no unique solution

## Mean value property
The average value of any harmonic function over any sphere equals the value at the center.

Proven by $\\Delta u(\\mathbf{x}) = 0, |\\mathbf{x}|\\le a$, $\\frac{\\partial u}{\\partial \\mathbf{n}} = \\frac{\\partial u}{\\partial r}$ where $r = (x^2 + y^2 + z^2)^{1/2} = |\\mathbf{x}|$, and by changing to spherical coordinates

$$
\\frac{1}{\\text{area of }S} \\iint_Su\\ \\mathrm{d}S = u(\\mathbf{0})
$$

## Maximum principle
For 3D, if $D$ is any solid region, a nonconstant harmonic function in $D$ cannot take its maximum value inside $D$ but only on $\\partial D$

## Uniqueness
applies for Dirichlet and Neumann problems. Proven by difference of two solutions $u - v$, using Green's first identity in between the proof

## Dirichlet's principle
Energy:
$$
E[w] = \\frac{1}{2}\\iiint_D|\\nabla w|^2\\ \\mathrm{d} \\mathbf{x}
$$
The state of lowest energy of any physical system is called a *ground state*, then harmonic functions are the preferred state:

Let $u(\\mathbf{x})$ be the unique harmonic function in $D$ that satisfies $w = h(\\mathbf{x})$ on $\\partial D$. Let $w(\\mathbf{x})$ be any function in $D$ that satisfies the same condition. Then $E[w] \\ge E[u]$

## Green's Second identity
$$
\\tag{7.2.G2}
\\iiint_D(u\\Delta v-v \\Delta u)\\ \\mathrm{d} \\mathbf{x} = \\iint_{\\partial D}\\Big(u\\frac{\\partial v}{\\partial \\mathbf{n}}-v\\frac{\\partial u}{\\partial \\mathbf{n}}\\Big)\\ \\mathrm{d}S
$$
Proven by switching $u, v$ from $(G1)$ and subtracting.

A boundary condition is called symmetric if RHS of $(G2)$ vanishes
## Representation Formula
For $\\Delta u = 0, \\mathbf{x} \\in D$, any harmonic function can represented as:
$$
\\tag{7.2.1}
u(\\mathbf{x}_0)=\\iint_{\\partial D}\\Big[-u(\\mathbf{x})\\frac{\\partial}{\\partial \\mathbf{n}}\\Big(\\frac{1}{|\\mathbf{x}-\\mathbf{x}_0|}\\Big)+\\frac{1}{|\\mathbf{x}-\\mathbf{x}_0|}\\frac{\\partial u}{\\partial \\mathbf{n}}\\Big]\\frac{\\mathrm{d}S}{4\\pi}
$$

$$
=\\iint_{\\partial D}\\Big(u\\frac{\\partial v}{\\partial \\mathbf{n}} - v\\frac{\\partial u}{\\partial \\mathbf{n}}\\Big)\\mathrm{d}S, \\quad v = -\\frac{1}{4\\pi |\\mathbf{x}-\\mathbf{x}_0|}
$$

## Green's function
$v = -\\frac{1}{4\\pi |\\mathbf{x}-\\mathbf{x}_0|}$ is harmonic except at $\\mathbf{x}_0$

Defined in domain $D$ for the operator $-\\Delta$, and for a point $\\mathbf{x}_0 \\in D$

1. $G(\\mathbf{x}) \\in C^2$ and $\\Delta G = 0$ for $\\mathbf{x} \\in D - \\{\\mathbf{x}_0\\}$
2. $G(\\mathbf{x}) = 0$ for $\\mathbf{x} \\in \\partial D$
3. The function $G(\\mathbf{x}) + \\frac{1}{4\\pi |\\mathbf{x}-\\mathbf{x}_0|} \\in C^2$ is finite at $\\mathbf{x}_0$ and harmonic at $\\mathbf{x}_0$
      - i.e. $\\Delta(G+v)=0, \\quad \\mathbf{x}\\in D$

$G(\\mathbf{x}, \\mathbf{x}_0)$ is the usual notation

Theorem 1: The solution to the Dirichlet problem
$$
\\Delta u = 0, \\quad \\mathbf{x} \\in D
$$

$$
u = h, \\quad \\mathbf{x}\\in \\partial D
$$
is
$$
\\tag{7.3.1}
u( \\mathbf{x}_0)=\\iint_{\\partial D}h( \\mathbf{x})\\frac{\\partial G( \\mathbf{x}, \\mathbf{x}_0) }{\\partial \\mathbf{n}}\\mathrm{d}S
$$

## Symmetry of Green's function
$$
G(\\mathbf{x}, \\mathbf{x}_0) = G(\\mathbf{x}_0, \\mathbf{x}), \\quad \\mathbf{x} \\ne \\mathbf{x}_0
$$
AKA *principle of reciprocity*

Theorem 2: The solution to the problem
$$
\\Delta u = f, \\quad \\mathbf{x} \\in D
$$

$$
u = h, \\quad \\mathbf{x}\\in \\partial D
$$
is
$$
u( \\mathbf{x}_0)=\\iint_{\\partial D}h( \\mathbf{x})\\frac{\\partial G( \\mathbf{x}, \\mathbf{x}_0) }{\\partial \\mathbf{n}}\\mathrm{d}S + \\iiint_Df(\\mathbf{x})G(\\mathbf{x}, \\mathbf{x}_0) \\mathrm{d}\\mathbf{x}
$$
Proven by Green's second identity and same procedure as deriving $(7.2.1)$

## Half space
$$
\\Delta u = 0, \\quad D = z > 0
$$

$$
u(x, y, 0) = h(x, y)
$$
Solved by using Green's function and method of reflection. Green's function for $D$ is
$$
G(\\mathbf{x}, \\mathbf{x}_0) = -\\frac{1}{4\\pi|\\mathbf{x}-\\mathbf{x}_0|} + \\frac{1}{4\\pi|\\mathbf{x}-\\mathbf{x}^*_0|}
$$
where $\\mathbf{x}^* =(x,y,-z)$

Solution:
$$
u(\\mathbf{x}_0) = \\frac{z_0}{2\\pi}\\iint_{\\partial D}\\frac{h(\\mathbf{x})}{|\\mathbf{x}-\\mathbf{x}_0|^3}\\mathrm{d}S
$$

## Sphere
$$
\\Delta u = 0, \\quad |\\mathbf{x}| < a
$$

$$
u = h, \\quad |\\mathbf{x}| = a
$$
Green's function of the ball is:
$$
\\tag{7.4.6}
G(\\mathbf{x}, \\mathbf{x}_0) = -\\frac{1}{4\\pi \\rho}+\\frac{a}{|\\mathbf{x}_0|}\\frac{1}{4\\pi \\rho^*}
$$
where $\\rho = |\\mathbf{x}-\\mathbf{x}_0|, \\rho^* = |\\mathbf{x}-\\mathbf{x}_0^*|, |\\mathbf{x}_0|\\mathbf{x}_0^*|:=a^2, \\mathbf{x}_0^*=\\frac{a^2\\mathbf{x}_0}{|\\mathbf{x}_0|^2}$ by considering congruent triangles
$$
\\tag{7.4.10}
G(\\mathbf{x}, \\mathbf{x}_0) = -\\frac{1}{4\\pi |\\mathbf{x}-\\mathbf{x}_0|}+\\frac{1}{4\\pi|\\frac{r_0}{a}\\mathbf{x}-\\frac{a}{r_0}\\mathbf{x}_0|}
$$
where $r_0 = |\\mathbf{x}_0|$
$$
\\tag{7.4.11}
G(\\mathbf{x}, \\mathbf{0}) = -\\frac{1}{4\\pi |\\mathbf{x}|}+\\frac{1}{4\\pi a}
$$
Solution by calculating $\\frac{\\partial G}{\\partial \\mathbf{n}}$:
$$
\\tag{7.4.16}
u(\\mathbf{x}_0) = \\frac{a^2-|\\mathbf{x}_0|^2}{4\\pi a}\\iint_{|\\mathbf{x}|=a}\\frac{h(\\mathbf{x})}{|\\mathbf{x}-\\mathbf{x}_0|^3}\\mathrm{d}S
$$

## 8.1

### Finite differences
Let $u_j \\sim u(j\\Delta x)$, where $\\Delta x$ is the *mesh size*

Approximation for 1st derivative $\\frac{\\partial u}{\\partial x}(j\\Delta x)$:
$$
\\frac{u_j - u_{j-1}}{\\Delta x} \\quad \\text{Backward difference}
$$

$$
\\frac{u_{j + 1} - u_{j}}{\\Delta x} \\quad \\text{Forward difference}
$$

$$
\\frac{u_{j + 1} - u_{j - 1}}{2\\Delta x} \\quad \\text{Centered difference}
$$
Theses are correct approximation by the taylor series of $u(x + \\Delta x)$ and $u(x - \\Delta x)$ 

There centered difference is correct approximation to the order $O(\\Delta x)^2$, where the others are to the order $O(\\Delta x)$

For second derivative:
$$
u''(j\\Delta x) \\sim \\frac{u_{j+1}-2u_j+u_{j-1}}{(\\Delta x)^2}
$$

For two variables, choose two mesh sizes:
$$
u(j\\Delta x, n\\Delta t) \\sim u_j^n
$$
Then forward difference for $\\frac{\\partial u}{\\partial t}$:
$$
\\frac{\\partial u}{\\partial t}(j\\Delta x, n\\Delta t) \\sim \\frac{u_j^{n+1}-u_j^n}{\\Delta t}
$$

## Approximation of diffusion
For the problem:
$$
u_t = u_{xx}, \\quad x \\in (0, \\pi), t > 0
$$

$$
u = 0, \\quad x = 0,\\pi
$$

$$
u(x, 0) = \\phi(x) = \\begin{cases}
x, & x \\in (0, \\frac{\\pi}{2}) \\\\
\\pi - x, & x \\in (\\frac{\\pi}{2}, \\pi) \\\\
\\end{cases}
$$
Let
$$
s = \\frac{\\Delta t}{(\\Delta x)^2}
$$

$$
\\tag{8.2.2}
u_j^{n+1} = s(u_{j+1}^n+u_{j-1}^n)+(1-2s)u_j^n
$$
Looking for solution of the form (separate the variables in the difference equation)
$$
\\tag{8.2.4}
u_j^n = X_jT_n
$$
Then
$$
\\tag{8.2.5}
\\frac{T_{n+1}}{T_n}=1-2s+s\\frac{X_{j+1}+X_{j-1}}{X_j}
$$
Both sides of $(8.2.5)$ must be a constant $\\xi$ independent of $j$ and $n$, therefore
$$
\\tag{8.2.6}
T_n = \\xi^nT_0
$$

$$
\\tag{8.2.7}
s\\frac{X_{j+1}+X_{j-1}}{X_j} + 1 - 2s = \\xi
$$
This is a discrete version of 2nd order ODE, so guess the solution of the form $X_j = a\\cos j\\theta+b\\sin j\\theta$, and by using the BCs:
$$
X_j = \\sin(jk\\Delta x)
$$
$(8.2.7)$ takes the form
$$
\\tag{8.2.9}
\\xi = \\xi(k) = 1 - 2s[1-\\cos(k\\Delta x)]
$$

By $(8.2.6)$, the growth in time $t = n\\Delta t$ at the wave number $k$ is governed by $\\xi(k)$. The scheme is unstable unless $|\\xi(k)| \\le 1 \\ \\forall k$

Therefore stability requires:
$$
\\frac{\\Delta t}{(\\Delta x)^2} = s \\le \\frac{1}{2}
$$

By assuming the following, $(8.2.9)$ can be derived from $(8.2.7)$ quickly:
$$
X_j = (e^{ik\\Delta x})^j
$$

There exists unconditionally stable scheme like the Crank-Nicolson scheme
`,v_=`### Math review

Useful:
https://en.wikipedia.org/wiki/Vector_calculus_identities


#### Cross product
$$ \\bf{a} \\times \\bf{b} = \\|\\bf{a}\\| \\|\\bf{b}\\| \\sin(\\theta) \\bf{\\hat{n}}
$$

where $\\bf{\\hat{n}}$ is a unit vector $\\bot$ to the plane containing $\\bf{a}$ and $\\bf{b}$ according to right-hand rule

$$
\\bf{a} \\times \\bf{b} = \\begin{vmatrix}
\\bf{i} & \\bf{j} & \\bf{k} \\\\
a_1 & a_2 & a_3 \\\\
b_1 & b_2 & b_3 \\\\
\\end{vmatrix}
$$


##### properties
$$
\\boxed{\\bf{a} \\times \\bf{b} = - ( \\bf{b} \\times \\bf{a} )}, \\boxed{\\bf{a} \\times \\bf{a} = \\bf{0}}
$$

$$
\\boxed{\\bf{i} \\times \\bf{j} = \\bf{k}}, \\boxed{\\bf{j} \\times \\bf{k} = \\bf{i}}, \\boxed{\\bf{k} \\times \\bf{i} = \\bf{j}}
$$

#### Gradient
$$
\\nabla f = \\sum_{i = 1}^{n} \\frac{\\partial f}{\\partial x_i} \\hat{x_i} = \\frac{\\partial f}{\\partial \\bf{x}}
$$

$\\nabla f(\\bf{x})$ gives the direction of largest increase and its magnitude gives the rate of increase

$S: f(x, y) = 0 \\Rightarrow \\nabla f$ gives the normal to the surface S. 

#### Directional derivatives
$$
\\nabla_{\\bf{v}} f(\\bf{x}) = \\bf{v}\\cdot \\frac{\\partial f(\\bf{x})}{\\partial\\bf{x}} = \\bf{v}\\cdot \\nabla f
$$

Taking $\\bf{v} = \\langle1, 0, 0\\rangle$ gives $\\frac{\\partial f}{\\partial x_1}$. Directional derivative is a weighted sum of partial derivatives w.r.t. $x_i$

Normal derivative (normal to a surface $S$ etc.):
$$
\\frac{\\partial f}{\\partial \\bf{n}} = \\bf{n}\\cdot\\frac{\\partial f}{\\partial \\bf{x}} = \\bf{n}\\cdot\\nabla f
$$

#### Change of coordinate system

##### Spherical coordinate
$$
(x, y, z) = (r\\sin\\theta\\cos\\phi, r\\sin\\theta\\sin\\phi,r\\cos\\theta) \\newline
(r, \\theta, \\phi) = (\\sqrt{x^2+y^2+z^2}, \\arccos\\frac{z}{\\sqrt{x^2+y^2+z^2}},\\arctan{\\frac{y}{x}})
$$

$$
\\nabla f=\\frac{\\partial f}{\\partial r}\\hat\\bf{r}+\\frac{1}{r}\\frac{\\partial f}{\\partial \\theta}\\hat{\\boldsymbol{\\theta}}+\\frac{1}{r^2\\sin\\theta}\\frac{\\partial f}{\\partial \\phi}\\hat{\\boldsymbol{\\phi}}
$$

Derivation ref: https://physics.stackexchange.com/questions/78510/derive-vector-gradient-in-spherical-coordinates-from-first-principles

#### Divergence
$$
\\mathrm{div} \\ \\bf{F} = \\nabla \\cdot \\bf{F}
$$

$\\nabla \\cdot \\bf{F}|_{\\bf{x}_0} > 0$ means there's positive flow outwards at $\\bf{x}_0$

#### Curl
$$
\\mathrm{curl} \\ \\bf{F} = \\nabla \\times \\bf{F}
$$

$$
\\nabla \\times \\bf{F} =
\\begin{vmatrix}
\\bf{i} & \\bf{j} & \\bf{k} \\\\
\\frac{\\partial}{\\partial x} & \\frac{\\partial}{\\partial y} & \\frac{\\partial}{\\partial z} \\\\
F_x & F_y & F_z
\\end{vmatrix}
$$

#### Line integral
$$
\\int_{\\mathcal{C}} F(\\bf{r})\\mathrm{d}s=\\int_a^b F(\\bf{r}(t))|\\bf{r}'(t)|\\mathrm{d}t
$$

where $\\bf{r}: [a, b] \\rightarrow \\mathcal{C}$ is a bijective parametrization of $\\mathcal{C}$
##### Gradient theorem (fundamental theorem of line integral)
$$
\\int_a^b\\nabla F(\\bf{r}(t))\\cdot \\mathrm{d}\\bf{r}=F(\\bf{r}(b))-F(\\bf{r}(a))
$$

Note: $\\mathrm{d}\\bf{r} = \\bf{r}'(t)\\mathrm{d}t$

#### Green's theorem
$$
\\iint_{D} \\bigg(\\frac{\\partial{M}}{\\partial{x}}-\\frac{\\partial{L}}{\\partial{y}}\\bigg) \\mathrm{d}x\\mathrm{d}y= \\oint_{\\partial D} L \\mathrm{d}x+M\\mathrm{d}y
$$
Intepretation: macroscopic circulation around $\\partial D$ is the same as sum of microscopic circulation inside $D$ 


#### Divergence theorem
$$
\\iiint_{D} \\nabla \\cdot \\bf{F} \\ \\mathrm{d}V = \\oiint_{\\partial{D}}\\big( \\bf{F} \\cdot \\bf{\\hat{n}} \\big) \\mathrm{d}S
$$

$\\bf{\\hat{n}}$ is the outward-pointing unit normal vector to the surface $\\partial{D}$

Picking the normal to be $\\langle \\mathrm{d}y, -\\mathrm{d}x, 0\\rangle$, we get the Green's theorem for the 2D case

#### Stoke's theorem

$$
\\iint_{\\Sigma} \\big(\\nabla \\times \\bf{F}\\big)\\cdot \\mathrm{d} \\bf{S} =\\iint_{\\Sigma} \\big(\\nabla \\times \\bf{F}\\big)\\cdot \\bf{\\hat{n}} \\ \\mathrm{d} S = \\oint_{\\partial \\Sigma} \\bf{F} \\cdot \\mathrm{d} \\bf{r}
$$

where $\\bf{r}$ is tangential to the curve $\\partial \\Sigma$, $\\bf{\\hat{n}}$ is the outward-pointing unit normal vector to the surface $\\Sigma$ 

Setting $\\bf{k}=0$, we get Green's theorem. Stoke's theorem is just Green's theorem with a 2D surface floating in a 3D surface not necessarily on the x-y plane

##### Ref:
Green's theorem, Divergence theorem, and Stoke's theorem
https://www.youtube.com/watch?v=PIoqMNL7tV0&list=PLHXZ9OQGMqxfW0GMqeUE1bLKaYor6kbHa&index=39


#### Types of convergence
##### Pointwise convergece
Let $f_n(x): I \\rightarrow \\real, n\\ge0$ be a sequence of functions, then

$f_n(x)$ converges pointwise on $I$ $\\Leftrightarrow$ $f_n(x_0)$ converges $\\forall x_0 \\in I$

The limit is defined by
$$
f(x_0) = \\lim_{n\\rightarrow \\infty}f_n(x_0), \\quad x_0 \\in I \\newline
f(x) = \\lim_{n\\rightarrow \\infty}f_n(x), \\quad x \\in I; \\newline
f_n(x) \\rightarrow f(x) \\quad \\text{on}\\  I
$$

##### Uniform convergece
Let $f_n(x): I \\rightarrow \\real, n\\ge0$ be a pointwise convergent sequence of functions, and $f(x) = \\lim_{n\\rightarrow\\infty}f_n(x)$ on $I$

$f_n(x)$ converges uniformly on $I$ to $f(x)$, i.e. $f_n(x) \\rightrightarrows f(x)$ on $I$ $\\Leftrightarrow$ on $I$,
$$
\\epsilon > 0, n \\gg 1 \\Rightarrow |f_n(x)-f(x)| < \\epsilon
$$

$n \\gg 1$ means for some $n > N_\\epsilon$ depending only on $\\epsilon$ *but not $x$*
`,y_=`# 5 Link layer

## 5.1 Introduction
- Node: Any device that runs link-layer (layer 2) protocol
  - Nodes include hosts, routers, switches, and WiFi access points
- Link: Communication channels that connect adjacent nodes along the communication path

## 5.1.1 Services provided by the link layer
- Framing
- Link access
  - Medium access control (MAC) protocol: rules by which a frame is transmitted onto the link
    - point-to-point protocol (PPP): trivial
    - multiple access: nodes share a single broadcast link
- Reliable delivery
  - optional
  - high overhead
  - error detection and correction

## 5.1.2 Where is the link layer implemented
- network adapter; aka network interface (NIC)
- mostly implemented in hardware
  - send side: software components implement higher-level link-layer functionality include assembling link layer addressing info and activating the controller hardware
  - recv side: software to respond to controller interrupts, handle error conditions and pass datagram up to the network layer

## 5.3 Multiple access links and protocols
- Link types
  - point-to-point link
  - broadcast link
    - e.g. ethernet and wireless LANs
    - has multiple access problem: how to coordinate?
- Multiple access protocols
  - can deal with collision of frames
  - types:
    - channel partitioning protocols
    - random access protocols
    - taking-turns protocols
  - Ideal: when channel is R bps
    - Only 1 node: that node has throughput R bps
    - M nodes: each has R/M bps on average
    - decentralized: no master node for single point of failure (SPOF)
    - simple & cheap to implement

## 5.3.1 Channel partitioning protocols
- time-division multiplexing (TDM)
  - divide time into time frames
  - divide time frame into N time slots for N nodes
  - Good: fair & avoid collision
  - Bad: no higher than R/N bps even when only 1 node; must wait for turn
- frequency-division multiplexing (FDM)
  - divide R bps channel into different frequencies each with bw R/N for each node
  - same good & bad as TDM
- code division multiple access (CDMA)
  - assigns unique code to each node for encoding & decoding
  - Good: each node can transmit simultaneously

## 5.3.2 Random access protocols
- node always transmits at full rate of channel -- R bps
- when collision: retransmit until without collision; wait random delay
- slotted ALOHA
  - assume:
    - all frame L bits
    - time slot L/R seconds
    - node transmit only at beginning of slots
    - nodes synchronized to know when the slots begin
    - all nodes detect collision before slot ends
  - operation:
    - fresh frame -> node sends at the beginning of next slot
    - collision: retransmit with probability p in [0,1]
  - Good:
    - single only node can transmit at full rate R
    - highly decentralized: each node can detect collision
  - Bad: 
    - synchronization needed
    - unslotted version: no sychronization
  - effective tx rate: 1/e = 0.37
- pure ALOHA (no sync)
  - effective tx rate: 1/2e (no other node can transmit within 1 time slot before t and 1 time slot after t)
- Carrier sense multiple access (CSMA)
  - carrier sensing: node listens to the channel before transmitting
  - collision detection: node listens to the channel while transmitting
  - channel propagation delay: time to detect signal from one node to another (wave propagation)
    - crucial for performance
  - CSMA/CD (with collision detection)
    - if detects signal from other adapters while transmitting then abort and and wait random amount of time
    - wait: binary exponential backoff

## 5.3.3 Taking-turns protocols
- polling protocol
  - master node polls each node in round robin
    - master node tells node 1 to send max X frames, and after it finished, tells node 2 to send max Y frames...
  - Bad:
    - polling delay
    - SPOF
- token-passing protocol
  - token exchanged between nodes
  - Good:
    - decentralized
  - Bad:
    - SPOF

## 5.4 Switched local area networks
- switch link-layer frames
  - switches do not have link-layer address (i.e. MAC) (transparent carrying job)
- Address resolution protocol (ARP)
 - translate between IP address and MAC address
   - can't resolve address -> broadcast special ARP packet containing IP address and MAC address (broadcast address FF-FF-FF-FF-FF-FF)
   - ARP modules in adapters receiving the frame -> match -> sends mapping within a standard frame
 - is a protocol between network-layer and link-layer!
 - send across subnet:
   - host sends to MAC address of adapter for router interface between 2 subnets
   - router looks up correct interface by forwarding table
- hub:
  - recreates bit by bit, boosts energy strength
- Ethernet:
 - connectionless & unreliable
 - protocols have different flavors
- switch:
  - operates up through layer 2
  - forwarding & filtering with switch table that associates MAC address with interface that leads toward that MAC address
    - avoids broadcasting
  - self-learning
  - plug and play
  - full duplex
  - eliminates collision
  - heterogeneous links
- switch vs router:
  - switch good:
    - switch is plug and play
    - switch only processes up to layer 2; router up to layer 3
  - switch bad:
    - switched network is restricted to spanning tree (to prevent cycling of broadcast frames)
    - large switched network requires large ARP tables in hosts and routers -> increased ARP traffic and processing
  - router good:
    - packets not restricted to spanning tree due to hierarchical network addressing
    - provides firewall protection against layer 2 broadcast storms
  - router bad:
    - not plug and play
- switched LAN:
  - bad:
    - lack of traffic isolation: unlearned destination in ARP/DHCP frames/msgs traverse entire network
    - inefficient: more switches are needed for isolation of groups
    - cable managing for multiple groups is hard
- VLAN:
  - hosts within a VLAN communicate with each other as if they (and no other hosts) were connected to switch
- multiprotocol label switching (MPLS)
  - MPLS enabled routers do not touch IP header
  - routes by the wrapping MPLS header
  - enables routings that don't follow IP routing protocols
  - can be used to implement VPN

## 6 Wireless and mobile networks

## 6.1 Introduction
- base stations
  - access points
  - cell towers
- handoff: hosts between base station
- classification:
  - single hop, infrastructure based (has base station connecting to larger wired network i.e. internet)
  - single hop, infrastructure-less (e.g. bluetooth)
  - multi-hop, infrastructure-based (e.g. wireless mesh networks)
  - multi-hop, infrastructure-less (e.g. mobile ad hoc networks)

## 6.2 wireless links and network characteristics
- difference from wire to wireless
  - decreasing signal strength (attenuation)
  - interference
  - multipath propagation (physical distance changing due to reflection & sender moving etc.)
- problems:
  - A sends to B, C sends to B
    - hidden terminal problem: A & C can't communicate with each other due to physical obstructions
    - fading: A & C can't communicate with each other due to weak signal

## 6.2.1 CDMA (Code division multiple access)
- encode data $d_i$ with $M$ bit slots and code $c_m: Z_{i,m} = d_i \\cdot c_m$
- decode with $d_i = \\sum_m(Z_{i,m} * c_m) / M$
- Assumptions: interference is additive & signal strengths are the same
  - If senders' codes are chosen carefully, receivers can still recover the signal using the same code

## 6.3.1 The 802.11 Architecture
- basic service set (BSS)
  - 1 or more wireless stations & a central base station (access point (AP))
- channels and association
  - assign service set identifier (SSID) to an AP
  - assign channel to AP
- WiFi jungle: a wireless station receives a sufficiently strong signal from 2 or more APs
  - need to choose one to "associate" with
- AP periodically send beacon frames
  - includes AP's SSID and MAC
  - a wireless station scans all channels to seek beacon frames
- passive scanning: listen for beacon frames
- active scanning: broadcast probe frame that will be received by all APs within range and APs respond
- after selecting which AP to associate with
  - sends association request frame to AP & AP responds
  - host usually sends a DHCP discovery message

## 6.3.2 The 802.11 MAC protocol
- CSMA/CA (with collision avoidance)
  - no collision detection because
    - hardware to send and recv at the same time is costly
    - all collision can't be detected due to hidden terminal problem
- link-layer acknowledgement
  1. destination receives a frame (passes CRC)
  2. waits a short Inter-frame spacing (SIFS)
  3. sends ack frame
  4. if transmitting station doesn't receive ack in some time, it retransmits the frame
  5. after a few retransmissions, it gives up and discards the frame
- CSMA/CA protocol:
  - init: station senses the channel idle -> transmits its frame after a short period of time "Distributed Inter-frame Space" (DIFS)
  - if channel not idle, chooses a random backoff count down by exp. backoff 
  - else transmits entire frame and waits for ack
  - if ack is not received, station goes back to backoff phase, else go back to init
- RTS & CTS (request to send, clear to send) to deal with hidden terminals
  - optional
  - overhead: has delay & consumes channel resources
  - H1 -- AP -- H2 so that H1 can't hear H2 due to signal fading
    - H1 sends RTS to reserve access to channel, indicating total time required to transmit the data and ack frame
    - AP receives the frame and send CTS, giving permission to H1 to send and ask other stations not to send

## 6.3.3 The IEEE 802.11 Frame
- has 4 address fields
  - address 1: MAC of destination station 
  - address 2: MAC address of station that transmits the frame
  - address 3: MAC of router that connects this BSS
- in a BSS, router treats a wireless is just one of the host, 
  - AP converts between 802.3 Ethernet frame and 802.11 frame

## 6.3.4 Mobility in the same IP subnet
- H1 moving from BSS1 to BSS2 under the same switch
- To maintain the same TCP connection
  - One solution is for AP2 to send a broadcast Ethernet frame with H1's source address to the switch after association
    - switch updates its forwarding table for H1 to be reached via AP2

## 6.3.5 Advanced features in 802.11
- rate adaptation
  - dynamic selection of physical layer modulation technique based on channel characteristics (similar to TCP probing)
- power management
  - node indicates to AP it'll be going to sleep w/ timer
  - node wakes up before AP sends beacon frame at regular interval
  - node can be asleep 99% of the time

## 6.3.6 Personal Area Networks: Bluetooh and Zigbee
- bluetooth
  - short range, low power, low cost
  - piconet up to 8 active devices
    - 1 master determines the clock
  - MBits/sec
- zigbee
  - low poered, lower data rate, lower duty cycle app than bluetooth
  - defines channel rates of 20-250kbps
  - two modes
    - reduced-function devices operate as slave devices under control of a single full function device
    - multiple full function devices can form a mesh network

# 6.4 Cellular Internet Access

## 6.4.1 An overview of cellular network architecture
- 2G: voice connections to the telephone network
  - cell: a geographic coverage area
  - each cell contains a base transceiver station (BTS)
  - combined TDM + FDM ($T\\cdot F$ simultaneous calls)
  - base station controller (BSC) allocates BTW radio channels
  - BSC + BTS = base station system (BSS)
  - mobile switching center (MSC) for user auth and accounting

## 6.4.2 3G: extending the internet to cellular subscribers
- 2 types of nodes:
  - Serving GPRS Support Nodes (SGSNs) [General packet radio service = GPRS]
    - deliver datagrams to/from mobile nodes in radio access network where it is attached
    - interact with MSC, provide user authorization, perform datagram forwarding between mobile nodes and a GGSN
  - Gateway GPRS Support Nodes (GGSNs)
    - last piece of 3G infrastructure that a datagram from a mobile node encounters
    - looks like any other gateway router
- radio access network
  - wireless first hop network
  - radio network controller (RNC)
    - controls several cell base transceiver stations similar to base station in 2G
- each cell's wireless link operates between the mobile nodes and a base transceiver station as in 2G
- RNC connects to both the circuit switched cellular voice network via an MSC and to the packet switched internet via an SGSN
- 3G cellular & cellular data services use different core networks but share a common first/last-hop radio access network
- see book figure

## 6.4.3 4G LTE (Long term evolution)
- evolved packet core (EPC)
  - "all-IP" network, both voice & data carried in IP datagrams
    - IP's "best effort" service model not best suited to VoIP; need to manage network resources for high QoS
- LTE Radio access network
  - combination of FDM and TDM on downstream channel
  - slots allocated by algorithm (more slots allocated=higher transmission rate)

## 6.5 Mobility management principles
- from the network layer's standpoint, how mobile is a user?
  - laptop with a wireless network interface card around in a building: not mobile from a network layer perspective
  - zooming along the autobahn passing through multiple wireless access networks wanting to maintaining TCP connection: mobile
  - In between: moving between locations but no need to maintain the same connection
- how important for the mobile node's address to always remain the same?
  - if same, application need not be concerned with a potential change in IP address
- what supporting wired infrastructure is available?
  - ad hoc network?
- terminologies:
  - home network: permanent home of a mobile node (mobile node has the permanent address)
  - home agent: entity within the home network that performs the mobility management functions
  - foreign network: network in which the mobile node is currently residing
  - foreign agent: same as home agent but in the foreign network
  - correspondent: entity wishing to communicate with the mobile node

## 6.5.1 Addressing
- to keep user address as it moves
  - approach 1: foreign network to advertise to all other networks that the mobile node is resident there
    - advertise to neighbors that it has a highly specific route to the mobile node's permanent address
    - exchange of intradomain the interdomain routing information 
    - good:
      - no significant changes to the network layer infrastructure
      - easy to route datagrams to the mobile node as forwarding tables will direct datagrams to the foreign network
    - bad:
      - not scalable
  - approach 2: push mobility functionality from the network core to the network edge
    - home agent tracks foreign network
    - needs a protocol between the mobile node and the home agent
    - foreign agent role:
      - create care-of-address (COA) for the mobile node with network portion of the COA matching that of the foreign network
    - 2 addresses for mobile node: permanent address & foreign address
    - mobile node can also assume the functionality of the foreign agent

## 6.5.2 Routing to a mobile node
- indirect routing approach
  - corespondent addresses the datagram to the mobile node's permanent address
    - unaware of it's in home network or visiting foreign network
  - home agent has a 2nd job to lookout for arriving datagrams addressed to nodes (attached to the home network) which are currently resident in a foreign network
    - forward datagram to foreign agent using the mobile node's COA
    - foreign agent forwards to mobile node
    - home agent encapsulates the correspondent's original complete datagram within a new datagram (tunneling)
      - to make application receiving the datagram unaware it's forwarded
    - foreign agent who "owns" the COA will receive and decapsulate the datagram
  - mobile node can address its datagram directly to the correspondent
  - protocols needed:
    - mobile node to foreign agent protocol
    - foreign agent to home agent registration protocol
    - home agent datagram encapsulation protocol
    - foreign agent decapsulation protocol
  - bad:
    - inefficiency: triangle routing problem
- direct routing approach
  - adds complexity to solve inefficient of triangle routing
  - correspondent agent in correspondent's network first learns the COA of the mobile node (by querying home agent)
    - correspondent itself can perform the function as well
  - correspondent agent tunnels datagrams directly to the mobile node's COA (analogous to tunneling by home agent)
  - challenges:
    - mobile user location protocol needed
    - how to route data to mobile node's new foreign network? COA is only queried once and has to be updated
      - solution 1: new protocol to notify the correspondent of the changing COA
      - solution 2: new foreign agent provides anchor foreign agent with mobile node's new COA

# 6.6 mobile IP
- Internet architecture and protocols for supporting mobility, collectively known as mobile IP
- main pieces
  - agent discovery
    - protocols for home/foreign agent advertises its services to mobile nodes
    - protocols for mobile nodes to solicit the services of a foreign/home agent
  - registration with the home agent
    - protocols used by the mobile node and/or foreign agent to register and deregister COA with a mobile node's home agent
  - indirect routing of datagrams
    - manner in which datagrams are forwarded to mobile nodes by a home agent, including
      - rules forwarding datagrams
      - rules for handling error conditions
      - forms of encapsulation
- agent discovery
  - agent advertisement
    - foreign or home agent advertises its services using an extension to the existing router discovery protocol
      - agent periodically broad casts an ICMP message on all links to which it is connected
      - router discovery message contains the IP address of the router (the agent)
        - thus a mobile node learns the agent's IP address
      - router discovery message contains additional information needed by the mobile node
        - Home agent bit, foreign agent bit, registration requried bit, encapsulation bits, COA
  - agent solicitation
    - mobile node waits to learn about agents without waiting to receive an agent advertisement
      - broadcast an agent solicitation message, an ICMP message with value type 10
      - agent receiving that will unitcast an agent advertisement directly to the mobile node
- registration with the home agent
  - via foreign agent/mobile IP node itself
    1. mobile node sends a mobile IP registration message to the foreign agent, carried within a UDP datagram to port 434
      - carries:
        - a COA advertised by the foreign agent
        - the address of the home agent (HA)
        - the permanent address of the mobile node (MA)
        - requested lifetime of registration

    2.
      - foreign agent receives the registration message and records the mobile node's permanent IP address. 
      - foreign agents now should be looking for datagrams containing an encapsulated datagram whose destination address matches the permanent address of the mobile node
      - foreign agent sends a mobile IP registration message within a UDP datagram to port 434 of home agent, carrying the same things above
    3. 
      - home agent receives the registration request
      - check for authenticity & correctness
      - binds the mobile node's permanent IP address with the COA
      - now datagrams arriving at the home agent and addressed to the mobile node will be encapsulated and tunneled to the COA
      - home agent sedns a mobile IP registration reply with things above
    4. foreign agent receives the registration reply and forwards it to the mobile node
  - foreign agent need not explicitly deregister a COA when a mobile node leaves its network
    - this happens automatically when mobile node moves to a new network and register a new COA
  - see figure in book

# 6.7 Managing mobility in cellular network
- GSM cellular network architecture
  - indirect routing approach
    - home network maintains a database "home location register" (HLR)
      - contains the permanent cell phone number and subscriber profile information
      - contains current locations of these subscribers
        - if user is roaming in another provier's cellular network, HLR contains enough info to obtain an address in the visited network
      - special switch in home network, Gateway Mobile services Switching Center (GMSC) is contacted by a correspondent when a call is placed to a mobile user
    - visited network maintains a database "visitor location register" (VLR)
      - contains entry for each mobile user that is currently in the portion of the network served by the VLR
        - entries come and go as mobile users enter and leave

# 6.7.1 Routing calls to a mobile user
- how a call is placed to a mobile GSM user in a visited network
  1. First leg:
    - correspondent dials the mobile user's phone number. Leading digits globally identify the mobile's home network. Call is routed from the correspondent through the public switched telephone network (PSTN) to the home MSC in the mobile's home network
  2. home MSC receives the call and interrogates the HLR for the location of the mobile user. Simplest case, it returns the mobile station roaming number (MSRN) which is temporarily assigned to a mobile when it enters a visited network (analogous to COA in mobile IP, invisible to corespondent and mobile). If HLR does not have roaming number, it returns the address of the VLR in the visited network. In this case, the home MSC needs to query the VLR to obtain the roaming number of the mobile node.
    - when mobile is switched on or enters a visited network covered by a new VLR, it must register with the visited network, done through signalling messages between the mobile to the mobile's HLR
  3. Given the roaming number, home MSC sets up second leg of the call through the network to the MSC in the visited network. Call completed, being routed as (the correspondent to the home MSC -> visited MSC -> base station serving the mobile user)
  - see figure in book

# 6.7.2 Handoffs in GSM
- handoff occurs when a mobile station changes its association from one base station to another during a call
  - below assumes old and new base stations share the same MSC, and rerouting occurs at this MSC
- mobile periodically measures strength of beacon signal from its current base station + nearby base stations it can hear
  - reported once or twice per second
  - handoff initiated by the old base station based on these measurements
- steps when a based station decide to hand off a mobile user:
  1. old base station (BS) informs the visited MSC that a handoff is to be performed and the BS (or sets of BSs) to which the mobile is to be handed off.
  2. visited MSC initiates path setup to the new BS, allocate resources needed to carry the rerouted call, signal the new BS that a handoff is about to occur
  3. new BS allocates and activates a radio channel for use by the mobile
  4. new BS signals back to the visited MSC and the old BS that the visited-MSC-to-new-BS path has been established and that the mobile should be informed of the impending handoff (with all needed information). 
  5. mobile is informed the handoff, unaware of the work from the new BS & the MSC
  6. mobile and the new BS exchange 1 or more messages to fully activate the new channel in the new BS
  7. mobile sends a handoff complete message to the new BS, which is forwarded up to the visited MSC. Visited MSC then reroutes the ongoing call to mobile via the new BS
  8. resources allocated along the path to the old BS are released
  - see figure in book
- what happens when mobile moves to a BS that is associated with a different MSC than the old BS
  - GSM defines the notion of an anchor MSC
    - MSC visited by the mobile when a call first begins, remain unchanged during the call
  - call is routed as (home MSC -> anchor MSC -> visited MSC)
    - when mobile moves from the coverage area of one MSC to another, ongoing call is rerouted from the anchor MSC to the new visited MSC
    - at most 3 MSCs at all times

# 6.8 Wireless and mobility: Impact on Higher layer protocols
- in the case of mobile users, TCP segment loss can result from
  - network congestion
  - handoff
- in all cases, TCP's receiver-to-sender ACK indicates only that a segment was not received intact
  - sender is unaware of whether the segment was lost due to congestion, handoff, or detected bit errors 
    - sender's response is the same in cases: retransmit the segment
- TCP's congestion-control response is also the same in all cases: TCP decreases its congestion window
  - unconditionally decreasing its congestion window, implicitly assumes that segment loss results from congestion rather than corruption or handoff
- Approach to deal with problematic congestion control response
  - local recovery (e.g. at the wireless link)
  - TCP sender awareness of wireless links
  - split connection approaches
    - E2E connection broken to 2 transport layer connections: from the mobile host to the wireless AP, and from the wireless AP to the other communication end point (assumed to be a wired host)
`,g_=`# Control Theory

## Math review
see \`math_review.md\`

## 2 System modeling
#### State space models
$$
\\frac{\\mathrm{d}\\mathbf{x}}{\\mathrm{d}t} = f(\\mathbf{x}, \\mathbf{u}), \\qquad \\mathbf{y}=h(\\mathbf{x}, \\mathbf{u})
$$
$\\mathbf{x}$ is a vector of state variables. $\\mathbf{u}$ is a vector of control signals. $\\mathbf{y}$ is a vector of measurements.

#### Linear state space system
$$
\\frac{\\mathrm{d}\\mathbf{x}}{\\mathrm{d}t} = \\mathbf{Ax}+\\mathbf{Bu}, \\qquad \\mathbf{y}=\\mathbf{Cx} + \\mathbf{Du}
$$
homogeneous case when $\\mathbf{u} = 0$

$\\mathbf{A}$ is the dynamic matrix. $\\mathbf{B}$ is the control matrix. $\\mathbf{C}$ is the sensor matrix. $\\mathbf{D}$ is the direct term.

## 4 Dynamic behaviour
### Equilibrium points and limit cycles
A state $x_e$ is an equilibrium point for a dynamic system
$$
\\frac{\\mathrm{d}x}{\\mathrm{d}t} = F(x)
$$
if $F(x_e) = 0$

A linear system always has an equilibrium point at the origin.

### Stability
Let $x(t; a)$ be a solution to a differential equation with initial conditon a. A solution is *stable* if other solutions that start near $a$ stay close to $x(t; a)$. Formally, the solution $x(t; a)$ is stable if
$$
\\forall \\epsilon > 0, \\exists \\delta > 0, \\forall t > 0, \\qquad \\|b - a \\| < \\delta \\Rightarrow \\|x(t; b) - x(t; a)\\| < \\epsilon
$$
$\\delta$ may depend on $\\epsilon$

This is also called *stability in the sense of Lyapunov*. If furthermore the trajectories don't converge, the solution is *neutrally stable*

A solution is *asymptotically stable* if it's stable in the sense of Lyapunov and $x(t; b) \\rightarrow x(t; a)$ as $t \\rightarrow \\infty$ for $b$ sufficiently close to $a$

### Stability of linear systems
The system
$$
\\frac{\\mathrm{d}\\mathbf{x}}{\\mathrm{d}t} = \\mathbf{Ax}
$$
is asymptotically stable iff all $\\mathfrak{Re}(\\lambda_i) < 0$. And unstable if some $\\mathfrak{Re}(\\lambda_i) > 0$

Proof: using Jordan form of $A$

## 5 Linear Systems
### Linearity
The complete solution of a linear state space system is the sum of the homogeneous solution when $u(t)=0$ and the particular solution with zero initial condition $x(0)=0$
### Matrix exponential
$$
e^\\mathbf{X} = \\mathbf{I} + \\mathbf{X} + \\frac{1}{2}\\mathbf{X}^2 + \\frac{1}{3!}\\mathbf{X}^3 + \\dots = \\sum_{k=0}^{\\infty}\\frac{1}{k!}\\mathbf{X}^k
$$

#### Initial condition response
The solution of 
$$
\\frac{\\mathrm{d}\\mathbf{x}}{\\mathrm{d}t} = \\mathbf{Ax}
$$
is
$$
\\mathbf{x}(t) = e^{\\mathbf{A}t}\\mathbf{x}(0)
$$

## Input/Output Response
### The convolution equation
The solution to
$$
\\frac{\\mathrm{d}\\mathbf{x}}{\\mathrm{d}t} = \\mathbf{Ax}+\\mathbf{Bu}, \\qquad \\mathbf{y}=\\mathbf{Cx} + \\mathbf{Du}
$$
is
$$
\\mathbf{x}(t) = e^{\\mathbf{A}t}\\mathbf{x}(0) + \\int_0^t e^{\\mathbf{A}(t-\\tau)}\\mathbf{Bu}(\\tau)\\mathrm{d}\\tau
$$
Input/Output relation (convolution equation) is
$$
\\mathbf{y}(t) = \\mathbf{Ce}^{\\mathbf{A}t}\\mathbf{x}(0) + \\int_0^t \\mathbf{C}e^{\\mathbf{A}(t-\\tau)}\\mathbf{Bu}(\\tau)\\mathrm{d}\\tau + \\mathbf{D}\\mathbf{u}(t)
$$

Another derivation is by defining the *impulse response* of a system $h(t)$ to be
$$
  h(t) = \\int_0^t \\mathbf{C}e^{\\mathbf{A}(t-\\tau)}\\mathbf{B}\\delta(\\tau)\\mathrm{d}\\tau = \\mathbf{C}e^{\\mathbf{A}t}\\mathbf{B}
$$
The convolution equation is then
$$
\\mathbf{y}(t) = \\mathbf{Ce}^{\\mathbf{A}t}\\mathbf{x}(0) + \\int_0^t h(t-\\tau)\\mathbf{u}(\\tau)\\mathrm{d}\\tau + \\mathbf{D}\\mathbf{u}(t)
$$
$$
\\mathbf{y}(t) = \\mathbf{Ce}^{\\mathbf{A}t}\\mathbf{x}(0) + h(t) * \\mathbf{u}(t)+ \\mathbf{D}\\mathbf{u}(t)
$$
### Steady state response
The convolution equation consists of two components: the *transient response* and the *steady state response*. 

By setting $\\mathbf{u}(t)$ as the unit step
$$
\\mathbf{y}(t) = \\mathbf{CA}^{-1}e^{\\mathbf{A}t}\\mathbf{B}+\\mathbf{D}-\\mathbf{CA}^{-1}\\mathbf{B}, \\qquad t>0
$$
First term above is the transient response, and 2nd and 3rd term combined is the steady state response.

Transient response decays to zero as $t \\rightarrow \\infty$

By setting $\\mathbf{u}(t)$ as $\\cos \\omega t = \\frac{1}{2}(e^{i\\omega t}+e^{-i\\omega t})$, by using linearity, it sufficies to just compute the response to $\\mathbf{u}(t)=e^{st}$ and average the responses $s=i\\omega t$ and $s=-i \\omega t$

Assuming none of the eigenvalues of $\\mathbf{A}$ are equal to $s=\\plusmn i\\omega$, then $s\\mathbf{I}-\\mathbf{A}$ is invertible and
$$
\\mathbf{y}(t) = \\mathbf{C}e^{\\mathbf{A}t}\\Big(\\mathbf{x}(0)-(s\\mathbf{I}-\\mathbf{A})^{-1}\\mathbf{B}\\Big)+\\Big(\\mathbf{C}(s\\mathbf{I}-\\mathbf{A})^{-1}\\mathbf{B}+\\mathbf{D}\\Big)e^{st}
$$
Again first term is the transient response and second term is steady state response

### Sampling
Consider the general linear system, and assume the control signal is constant over a sampling period of constant length $h$
$$
\\mathbf{x}(t) = e^{\\mathbf{A}h}\\mathbf{x}(t) + \\int_t^{t+h} e^{\\mathbf{A}(t+h-\\tau)}\\mathbf{Bu}(\\tau)\\mathrm{d}\\tau = \\Phi \\mathbf{x}(t) + \\Gamma \\mathbf{u}(t)
$$
The behavior of the system at the sampling times $t=kh$ is described by the difference equation
$$
\\mathbf{x}[k+1]=\\Phi \\mathbf{x}[k]+\\Gamma \\mathbf{u}[k], \\qquad \\mathbf{y}[k] = \\mathbf{C} \\mathbf{x}[k] + \\mathbf{D} \\mathbf{u}[k]
$$
This transformation is called *sampling*.

Relationship:
$$
\\Phi = e^{\\mathbf{A}h}, \\qquad \\Gamma = \\Big(\\int_0^h e^{\\mathbf{A}s}\\mathrm{d}s\\Big)\\mathbf{B}, \\qquad \\mathbf{A} = \\frac{1}{h} \\log \\Phi, \\qquad \\mathbf{B} = \\Big(\\int_0^h e^{\\mathbf{A}t}\\mathrm{d}t\\Big)^{-1}\\Gamma
$$

## 6 State feedback
### Reachability
Focusing on the state evolution
$$
\\frac{\\mathrm{d}\\mathbf{x}}{\\mathrm{d}t} = \\mathbf{Ax}+\\mathbf{B}u, \\qquad u\\in\\mathbb{R}
$$

Reachable set is $\\mathcal{R}(\\mathbf{x}_0, \\leq T)$ the set of all points $\\mathbf{x}_f$ s.t. there exists an input $u(t), 0\\leq t \\leq T$ that steers $\\mathbf{x}(0) = \\mathbf{x}_0$ to $\\mathbf{x}(t) = \\mathbf{x}_f$

A linear system is *reachable* if $\\forall \\mathbf{x}_0, \\mathbf{x}_f \\in \\mathbb{R^n}$, $\\exists T>0, u:[0,T] \\rightarrow \\mathbb{R}$ s.t. the solution satisfies $\\mathbf{x}(0)=\\mathbf{x}_0$ and $\\mathbf{x}(T)=\\mathbf{x}_f$

## 7 Output feedback
### Observability
A system is *observable* if $\\forall T>0$ it's possible to determine the state of the system $x(t)$ through measurements of $y(t)$ and $u(t)$ on the interval $[0, T]$.

Interpretation: There's no hidden dynamics and we can understand everything through observation over time of the inputs and outputs

### Kalman filter

Reference:

1. <https://nrotella.github.io/journal/kalman-filter-derivation-interpretation.html>
2. <https://arxiv.org/pdf/1910.03558.pdf>
3. <https://inst.eecs.berkeley.edu/~ee126/sp18/projection.pdf>

## 8 Transfer functions
### Transfer functions for linear systems
Consider a linear input/output system described by
$$
\\frac{\\mathrm{d}^n y}{\\mathrm{d}t^n} + a_1\\frac{\\mathrm{d}^{n-1} y}{\\mathrm{d}t^{n-1}} + \\dots + a_n y = b_0\\frac{\\mathrm{d}^m u}{\\mathrm{d}t^m} + b_1\\frac{\\mathrm{d}^{m-1} u}{\\mathrm{d}t^{m-1}} + \\dots + b_m u
$$
Let the input be $u(t) =e^{st}$, the transfer function is
$$
G(s) = \\frac{b(s)}{a(s)} = \\frac{b_0 s^m + b_1 s^{m-1} + \\dots + b_m}{s^n + a_1 s^{n-1} + \\dots + a_n}
$$
$a(s)$ is the characteristic polynomial of the ODE

### Transfer function of common ODEs
The transfer function of a PID controller described by the ODE
$$
y=k_pu+k_d\\dot{u}+k_i\\int u
$$
is
$$
H(s) = \\frac{Y(s)}{U(s)} = k_p + k_d s + \\frac{k_i}{s}
$$
### Gains, Poles and Zeros
The *zero frequency gain* of a system is given by $|H(0)|$. It represents the ratio of steady state value of output with respect to a step input ($u = e^{st}$ for $s = 0$; by final value theorem, $|\\lim_{s\\rightarrow 0}(s\\cdot H(s)U(s))| = |H(0)|$, $U(s) = 1/s $ is the transfer function of a unit step

For a linear input/output system with a rational transfer function
$$
G(s) = \\frac{b(s)}{a(s)}
$$
if $p$ is a pole i.e. $a(p) = 0$, then $y(t) = e^{pt}$ is a solution of the linear ODE with $u = 0$ (homogeneous solution). A pole corresponds to a mode of the system with corresponding modal solution $e^{pt}$. The unforced motion of the system after an arbitrary excitation is a weighted sum of modes. A transfer function is unstable if some pole $p$ has $\\mathfrak{Re}(p) \\ge 0$.

if $z$ is a zero i.e. $b(z) = 0$, since the pure exponential output corresponding to the input $u(t) = e^{st}$ with $a(z) \\ne 0$ is $G(s)e^{st}$, which is zero if $b(s) = 0$. Zeros block transmission of the corresponding exponential signal.

To find zeros of a state space system, substitue $u(t) = u_0 e^{st}$ and $x(t) = x_0 e^{st}$ in to the system and zeros are values of $s$ s.t.
$$
\\begin{bmatrix}
\\mathbf{A} - \\mathbf{sI} & \\mathbf{B} \\\\
\\mathbf{C} & \\mathbf{D}
\\end{bmatrix}
$$
does not have full rank

#### Extra: final value theorem
If a system described by the time domain signal is $x(t)$ (transfer function is $X(s)$, then provided both limit exists (or $X(s)$ doesn't have poles in the right half plane except possibly a single pole at the origin)), then the steady state value of the signal is
$$
\\lim_{t\\rightarrow \\infty} x(t) = \\lim_{s\\rightarrow 0} sX(s)
$$
Proven by differentiating the Laplace transform of $x(t)$

### Block diagrams and transfer functions
![block_diagram_series](/md/control_theory/tex/block_diagram_series.png)
![block_diagram_parallel](/md/control_theory/tex/block_diagram_parallel.png)
![block_diagram_feedback](/md/control_theory/tex/block_diagram_feedback.png)

### The Bode Plot
For a transfer function $G(s)$,

the gain is $|G(s)|$ and

the phase is $\\arg G(s) = \\arctan \\frac{\\mathfrak{Im} G(s)}{\\mathfrak{Re} G(s)}$


### Laplace transform
For LTI system with zero initial state
$$
\\mathbf{y}(t) = h(t) * \\mathbf{u}(t)
$$
Taking the Laplace transform on both side
$$
Y(s) = H(s)U(s)
$$
$H(s)$ here is the transfer function

For the linear state space system
$$
\\frac{\\mathrm{d}\\mathbf{x}}{\\mathrm{d}t} = \\mathbf{Ax}+\\mathbf{Bu}, \\qquad \\mathbf{y}=\\mathbf{Cx} + \\mathbf{Du}
$$
Taking Laplace transform on both sides assuming all initial values are zero:

$$
Y(s) = \\Big(\\mathbf{C}(s\\mathbf{I}-\\mathbf{A})^{-1}\\mathbf{B}+\\mathbf{D}\\Big)U(s)
$$
Transfer function (assuming the inverse exists) is
$$
G(s) = \\Big(\\mathbf{C}(s\\mathbf{I}-\\mathbf{A})^{-1}\\mathbf{B}+\\mathbf{D}\\Big)
$$

## 9 Frequency domain analysis
### Loop transfer function
![block_diagram_loop_transfer_function](/md/control_theory/tex/block_diagram_loop_transfer_function.png)

Injecting a sinusoid $e^{i\\omega_0}$ at point $A$, the system is oscillating if $B$ is the same sinusoid with the same amplitutde and phase. Tracing signals around the loop, $x = -xL(i\\omega_0) \\Rightarrow L(i\\omega_0) = -1$

### Nyquist Criterion
#### Nyquist plot
The Nyquist "D contour" is

![nyquist_d_contour](/md/control_theory/tex/nyquist_d_contour.png)

$R \\rightarrow \\infty$ and the middle semi-circle to the right (applies to every pole) is to avoid any poles on the imaginary axis

The Nyquist plot is the locus of the loop transfer function $L(s)$ when $s$ traverses $\\Gamma$ in the clockwise direction

$L(i\\omega_0)=-1$ if the Nyquist plot passes through $L=-1$, the *critical point*.

Simplified Nyquist criterion: Let $L(s)$ be the loop transfer function for a negative feedback system and assume that $L$ has no poles for $\\mathfrak{Re} s \\ge 0$ except for a single pole on the imaginary axis. Then the closed loop system is stable iff closed contour given by $\\Omega = \\{L(i\\omega) : -\\infty < \\omega < \\infty\\} \\subset \\mathbb{C}$ has no net encirclement of the critical points $s = -1$

Intuition: System is stable when $|L(i\\omega)| < 1$. If $-1$ is on the left side of the Nyquist plot then system is stable.

### General Nyquist Criterion
Nyquist's stability theorem: Consider a closed loop system with the loop transfer function $L(s)$ that has $P$ poles in the region enclosed by the Nyquist contour. Let $N$ be the net number of clockwise encirclement of $-1$ by $L(s)$ when $s$ encircles the Nyquist contour $\\Gamma$ in the clockwise direction. The closed loop system then has $Z = N + P$ poles in the right half-plane (Nyquist contour when $R\\rightarrow \\infty$ and $r\\rightarrow 0$).

The system is stable when $Z = 0$. It turns out $Z$ is the number of zeros enclosed by the contour.

(see complex analysis math review; image of $1+L(s)$ is a shifted version of $L(s)$)

Ref: <https://en.wikipedia.org/wiki/Nyquist_stability_criterion#Mathematical_derivation>

## 10 PID control
### PID
![block_diagram_pid](/md/control_theory/tex/block_diagram_pid.png)

The input/output relation for an ideal PID controller with error feedabck is
$$
u = k_p e + k_i \\int_0^t e(\\tau)\\mathrm{d}\\tau + k_d\\frac{\\mathrm{d}e}{\\mathrm{d}t}=k_p\\Big(e+\\frac{1}{T_i}\\int_0^te(\\tau)\\mathrm{d}\\tau+T_d\\frac{\\mathrm{d}e}{\\mathrm{d}t}\\Big)
$$

Let the process and a controller with **pure proportional control** have transfer functions $P(s)$ and $C(s) = k$ (gain), the transfer function from reference to input is 
$$
G_{yr} = \\frac{PC}{1 + PC}
$$
The steady state error for a unit step is (by the final value theorem; $U(s) = 1/s$ is the transfer function of a unit step)
$$
1 - \\lim_{s\\rightarrow 0} (s\\cdot G_{yr}(s)U(s)) = 1 - G_{yr}(0) = \\frac{1}{1 + k P(0)}
$$
Therefore, the system inherently has a steady state error

But for a PID controller, let $C(s)$ be the transfer function of the PID controller
$$
C(s) = k_p + k_d s + \\frac{k_i}{s}
$$
Then $C(0) = \\infty$ and from above (substituting $C(s)$), $1 - G_{yr}(0) = 0$. No steady state error for a step input.

## 11 Frequency domain design
### Sensitivity functions
The sensitivity function is
$$
S=\\frac{1}{1+PC}
$$
### Feedback design via loop shaping
Bending the Nyquist curve away from the critical point by choosing a compensator that gives the loop transfer function the desired shape.
### Fundamental limitations
#### All pass and minimum phase functions
##### All pass functions
Let $\\mathcal{S}$ be the set of all stable, proper (defined here as degree of numerator being less than or equal to degree of denominator), real rational functions.

A function in $\\mathcal{S}$ is *all-pass* if its magnitude is $1$ at all points on the imaginary axis.
$$
\\forall \\omega\\in \\mathbb{R}, |S(j\\omega)| = 1 \\Rightarrow S(j \\omega)\\overline{S(j \\omega)} = S(j \\omega)S(-j\\omega) = 1 
$$
The conjugation from outside goes into the function argument because $S$ is holomorphic whose restrictions to real numbers are real valued

If $S(s)$ doesn't have the same number of poles and zeros with coefficient of highest degree of $s$ on numerator and denominator be the same then $\\lim_{\\omega \\rightarrow \\infty} |S(j\\omega)| \\neq 1 $ which is a contradiction. So let (in general for complex valued transfer function)
$$
S(s) = e^{j\\phi} \\prod_i\\frac{s - z_i}{s- p_i}, \\qquad \\forall (a, b), z_a\\neq p_b
$$
$$
\\lvert S(j\\omega) \\rvert = \\Bigg\\lvert\\prod_i\\frac{j\\omega - z_i}{j\\omega- p_i}\\Bigg\\rvert = 1
$$
$$
\\lvert j\\omega - p_i\\rvert = \\lvert\\overline{-(j\\omega - p_i)}\\rvert = \\lvert j\\omega + \\overline{p_i} \\rvert
$$
Therefore, by unique factorization of polynomials, $ \\{z_a\\} = \\{-\\overline{p_b}\\} $. 
$$
S_{ap}(s) = e^{j\\phi} \\prod_i\\frac{s - z_i}{s+ \\overline{z_i}}, \\qquad \\mathfrak{Re}(z_i)>0
$$
Note $\\mathfrak{Re}(z_i) > 0$ because $S$ is stable (all poles must be on the left half plane)

If $S$ is real valued for real input, then poles appear in conjugate pairs and
$$
S_{ap}(s) = \\plusmn \\prod_i \\frac{s - z_i}{s + z_i} = \\plusmn \\prod_i \\frac{s + p_i}{s - p_i}, \\qquad \\mathfrak{Re}(z_i)>0
$$
##### Minimum phase function
A function $S_{mp} \\in \\mathcal{S}$ is a *minimum-phase* function if there are no zeros in $\\mathfrak{Re}(s) > 0$. (Or equivalently, $S_{mp}^{-1} \\in \\mathcal{S}$ because no poles or zeros are on $\\mathfrak{Re}(q) > 0$)

Examples: $1, \\frac{1}{s+1}, \\frac{s}{s+1}, \\frac{s + 2}{s^2+s+1} $

It's called minimum phase because for the same gain, the phase lag across (or group delay) is the minimum (better than when the zeros are on $\\mathfrak{Re}(s) > 0$). For example, $a > 0, S(s) = \\frac{a - s}{a + s}$ has phase $\\arg S(j\\omega) = -2 \\arctan \\frac{\\omega}{a}$ for the gain $1$ but the transfer function $S(s) = 1$ would have no phase lags across.

##### Factorization
For any function $S \\in \\mathcal{S}$, $S$ can be factored into
$$
S = S_{ap}S_{mp}
$$
Proof sketch: a proper function in $\\mathcal{S}$ would have all the poles $\\mathfrak{Re}(p) < 0$, and each zero in the numerator would correspond to a pole in the denominator, therefore $S_{mp}$ is simply the remaining factors of the poles for $S / S_{ap}$.

#### Bode's integral formula
Let $S(s) = (1 + L(s))^{-1}$ have no poles in the right half plane and have $q\\ge 0$ zeros in the closed right half plane at $p_1, \\dots, p_q$, and $L(s)$ be a proper, scalar rational transfer function of relative degree $\\ge$ 2. Then,
$$
\\int_0^{\\infty} \\ln \\lvert S(j\\omega)\\rvert \\mathrm{d}\\omega = \\pi \\sum_{k=1}^q p_k
$$
Note that $\\sum p_k = \\sum \\mathfrak{Re}p_k$ because poles are in complex conjugate pairs

This has the implication of the waterbed effect: disturbance attenuation can only be improved at one location and be worse at another location at the same time.


Ref: <https://faculty.washington.edu/chx/teaching/loopshaping/Proof_bodeIntegralThm.pdf>
`,x_=`# Math review

## Least squares

The least squares solution of $Ax=b$ is the solution of the normal equations
$$
A^TA\\hat{x}=A^T b \\Leftrightarrow A^T(A\\hat{x} - b)=0
$$

note: in general $A$ is rectangular and is not invertible. There's no solution when $A^TA$ is not invertible.

The 1D normal equation is $ a^T (a\\hat{x} - b) = 0 $ which says the error $a\\hat{x} - b$ is orthogonal to $a$.

For the matrix equation above, the error $A\\hat{x} - b$ is orthogonal to each column $a_i$ of $A$. i.e. $ a_i^T(A\\hat{x} - b) = 0 $

## Complex analysis
### Cauchy's integral theorem
If $f(z)$ is holomorphic in a simply connected domain $\\Omega$, then for any simply closed contour $C$ in $\\Omega$ 
$$
\\oint_C f(z)\\mathrm{d}z=0
$$

### Cauchy's integral formula
If $f$ is holomorphic in an open set that contains the closure of a disc $D$, and $\\partial D$ is of positive orientation,
$$
f(z) = \\frac{1}{2\\pi i}\\oint_{\\partial D} \\frac{f(\\zeta)}{\\zeta-z} \\mathrm{d}\\zeta, \\qquad \\forall z\\in D
$$

### Residue
If $f$ is holomorphic in a connected open set $\\Omega$ except it has a pole of order $n$ at $z_0 \\in \\Omega$, then
$$
f(z) = \\frac{a_{-n}}{(z-z_0)^{n}} + \\frac{a_{-n + 1}}{(z-z_0)^{n - 1}} + \\dots + \\frac{a_{-1}}{(z-z_0)} + G(z) 
$$
where $G(z)$ is a holomorphic function in a neighborhood of $z_0$

$\\mathrm{Res}_{z_0}f = a_{-1}$ is the residue of $f$ at $z_0$

### The Residue formula
Suppose $f$ is holomorphic in an open set containing a circle $C$ and its interior, except for a pole at $z_0$ inside $C$. Then
$$
\\frac{1}{2\\pi i} \\oint_C f(z)\\mathrm{d}z = \\mathrm{Res}_{z_0}f
$$

Suppose $f$ is holomorphic in an open set containing a simply closed contour $\\gamma$ and its interior, except for some poles at $z_0, \\dots, z_N$ inside $\\gamma$. Then
$$
\\frac{1}{2\\pi i} \\oint_{\\gamma} f(z)\\mathrm{d}z = \\sum_{k=1}^{N}\\mathrm{Res}_{z_k}f
$$

### Local description of a holomorphic function near a zero
Suppose $f$ is a holomorphic in a connected open set $\\Omega$ and it has a zero at a point $z_0 \\in \\Omega$, and is not identically zero in $\\Omega$. Then there exists a neighborhood $U \\subset \\Omega$ of $z_0$, a non-vanishing holomorphic function $g$ on $U$, and a unique positive integer $n$ s.t.
$$
f(z) = (z-z_0)^ng(z),\\qquad \\forall z\\in U
$$

### Meromorphic functions
A function $f$ on an open set $\\Omega$ is meromorphic if there exists a sequence of points $\\{z_0,z_1,z_2,\\dots\\}$ that has no limit points in $\\Omega$ and s.t.

(i) the function $f$ is holomorphic in $\\Omega - \\{z_0,z_1,z_2,\\dots\\}$ and

(ii) $f$ has poles at the points $\\{z_0,z_1,z_2,\\dots\\}$

### Winding number
The winding number of a closed curve $\\gamma$ around a point $z \\notin \\gamma$ is
$$
W_\\gamma(z) = \\frac{1}{2\\pi i} \\int_\\gamma \\frac{\\mathrm{d}\\zeta}{\\zeta-z}
$$

### Argument principle
Suppose $f$ is meromorphic in an open set containing a circle $C$ and its interior. If $f$ has no poles or zeros on $C$, then
$$
- \\frac{1}{2\\pi i} \\oint_C \\frac{f'(z)}{f(z)}\\mathrm{d}z = \\frac{1}{2\\pi i} \\oint_C \\frac{\\mathrm{d}}{\\mathrm{d}z}(\\log (f(z))\\mathrm{d}z = \\frac{1}{2\\pi} \\Delta_C \\arg (f(z)) = Z - P
$$
where $Z$ and $P$ is the number of zeros and poles respectively inside $C$. $\\Delta_C$ is the variation of the angle when $z$ traverses $C$ in the **clockwise** direction. $Z - P$ is the winding number of $C$ around the origin.
`,L_=`# Statistics

### 2.3 Moments and momemt generating functions
For $n \\in \\mathbb{Z}$, the $n$th *moment* of $X$ (or $F_X(x))$, $\\mu_n'$ is
$$
\\mu_n'=\\mathrm{E} X^n
$$
The $n$th *central moment* of $X$, $\\mu_n$ is
$$
\\mu_n=\\mathrm{E} (X - \\mu)^n
$$
Note $\\mu = \\mu_1' = \\mathrm{E}X$

The variance of $X$ is the 2nd central moment of $X$

#### 2.3.6
Let $X$ be a random variable with cdf $F_X$. The *moment generation function* (mgf) of $X$ (or $F_X$), denoted by $M_X(t)$, is
$$
M_X(t) = \\mathrm{E} e^{tX}
$$
provided the expectation exists for $t$ in some neighborhood of $0$.

Explicitly, if $X$ is continuous
$$
M_X(t) = \\int_{-\\infty}^{\\infty}e^{tx}f_X(x)\\mathrm{d}x
$$
or if $X$ is discrete
$$
M_X(t) = \\sum_{x}e^{tx}P(X=x)
$$

#### 2.3.7
If $X$ has mgf $M_X(t)$, then
$$
\\mathrm{E}X^n = M_X^{(n)}(0)
$$
where
$$
M_X^{(n)}(0) = \\frac{\\mathrm{d}^n}{\\mathrm{d}t^n}M_X(t)\\bigg\\rvert_{t=0}
$$
`,Uc=["http","https","mailto","tel"];function H_(t){const e=(t||"").trim(),n=e.charAt(0);if(n==="#"||n==="/")return e;const r=e.indexOf(":");if(r===-1)return e;let i=-1;for(;++i<Uc.length;){const a=Uc[i];if(r===a.length&&e.slice(0,a.length).toLowerCase()===a)return e}return i=e.indexOf("?"),i!==-1&&r>i||(i=e.indexOf("#"),i!==-1&&r>i)?e:"javascript:void(0)"}/*!
 * Determine if an object is a Buffer
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */var b_=function(e){return e!=null&&e.constructor!=null&&typeof e.constructor.isBuffer=="function"&&e.constructor.isBuffer(e)};const Gy=ie(b_);function V0(t){return!t||typeof t!="object"?"":"position"in t||"type"in t?Kc(t.position):"start"in t||"end"in t?Kc(t):"line"in t||"column"in t?sQ(t):""}function sQ(t){return Yc(t&&t.line)+":"+Yc(t&&t.column)}function Kc(t){return sQ(t&&t.start)+"-"+sQ(t&&t.end)}function Yc(t){return t&&typeof t=="number"?t:1}class X3 extends Error{constructor(e,n,r){const i=[null,null];let a={start:{line:null,column:null},end:{line:null,column:null}};if(super(),typeof n=="string"&&(r=n,n=void 0),typeof r=="string"){const o=r.indexOf(":");o===-1?i[1]=r:(i[0]=r.slice(0,o),i[1]=r.slice(o+1))}n&&("type"in n||"position"in n?n.position&&(a=n.position):"start"in n||"end"in n?a=n:("line"in n||"column"in n)&&(a.start=n)),this.name=V0(n)||"1:1",this.message=typeof e=="object"?e.message:e,this.stack="",typeof e=="object"&&e.stack&&(this.stack=e.stack),this.reason=this.message,this.fatal,this.line=a.start.line,this.column=a.start.column,this.position=a,this.source=i[0],this.ruleId=i[1],this.file,this.actual,this.expected,this.url,this.note}}X3.prototype.file="";X3.prototype.name="";X3.prototype.reason="";X3.prototype.message="";X3.prototype.stack="";X3.prototype.fatal=null;X3.prototype.column=null;X3.prototype.line=null;X3.prototype.source=null;X3.prototype.ruleId=null;X3.prototype.position=null;const g4={basename:M_,dirname:__,extname:w_,join:S_,sep:"/"};function M_(t,e){if(e!==void 0&&typeof e!="string")throw new TypeError('"ext" argument must be a string');m7(t);let n=0,r=-1,i=t.length,a;if(e===void 0||e.length===0||e.length>t.length){for(;i--;)if(t.charCodeAt(i)===47){if(a){n=i+1;break}}else r<0&&(a=!0,r=i+1);return r<0?"":t.slice(n,r)}if(e===t)return"";let o=-1,l=e.length-1;for(;i--;)if(t.charCodeAt(i)===47){if(a){n=i+1;break}}else o<0&&(a=!0,o=i+1),l>-1&&(t.charCodeAt(i)===e.charCodeAt(l--)?l<0&&(r=i):(l=-1,r=o));return n===r?r=o:r<0&&(r=t.length),t.slice(n,r)}function __(t){if(m7(t),t.length===0)return".";let e=-1,n=t.length,r;for(;--n;)if(t.charCodeAt(n)===47){if(r){e=n;break}}else r||(r=!0);return e<0?t.charCodeAt(0)===47?"/":".":e===1&&t.charCodeAt(0)===47?"//":t.slice(0,e)}function w_(t){m7(t);let e=t.length,n=-1,r=0,i=-1,a=0,o;for(;e--;){const l=t.charCodeAt(e);if(l===47){if(o){r=e+1;break}continue}n<0&&(o=!0,n=e+1),l===46?i<0?i=e:a!==1&&(a=1):i>-1&&(a=-1)}return i<0||n<0||a===0||a===1&&i===n-1&&i===r+1?"":t.slice(i,n)}function S_(...t){let e=-1,n;for(;++e<t.length;)m7(t[e]),t[e]&&(n=n===void 0?t[e]:n+"/"+t[e]);return n===void 0?".":A_(n)}function A_(t){m7(t);const e=t.charCodeAt(0)===47;let n=V_(t,!e);return n.length===0&&!e&&(n="."),n.length>0&&t.charCodeAt(t.length-1)===47&&(n+="/"),e?"/"+n:n}function V_(t,e){let n="",r=0,i=-1,a=0,o=-1,l,Q;for(;++o<=t.length;){if(o<t.length)l=t.charCodeAt(o);else{if(l===47)break;l=47}if(l===47){if(!(i===o-1||a===1))if(i!==o-1&&a===2){if(n.length<2||r!==2||n.charCodeAt(n.length-1)!==46||n.charCodeAt(n.length-2)!==46){if(n.length>2){if(Q=n.lastIndexOf("/"),Q!==n.length-1){Q<0?(n="",r=0):(n=n.slice(0,Q),r=n.length-1-n.lastIndexOf("/")),i=o,a=0;continue}}else if(n.length>0){n="",r=0,i=o,a=0;continue}}e&&(n=n.length>0?n+"/..":"..",r=2)}else n.length>0?n+="/"+t.slice(i+1,o):n=t.slice(i+1,o),r=o-i-1;i=o,a=0}else l===46&&a>-1?a++:a=-1}return n}function m7(t){if(typeof t!="string")throw new TypeError("Path must be a string. Received "+JSON.stringify(t))}const C_={cwd:E_};function E_(){return"/"}function uQ(t){return t!==null&&typeof t=="object"&&t.href&&t.origin}function D_(t){if(typeof t=="string")t=new URL(t);else if(!uQ(t)){const e=new TypeError('The "path" argument must be of type string or an instance of URL. Received `'+t+"`");throw e.code="ERR_INVALID_ARG_TYPE",e}if(t.protocol!=="file:"){const e=new TypeError("The URL must be of scheme file");throw e.code="ERR_INVALID_URL_SCHEME",e}return O_(t)}function O_(t){if(t.hostname!==""){const r=new TypeError('File URL host must be "localhost" or empty on darwin');throw r.code="ERR_INVALID_FILE_URL_HOST",r}const e=t.pathname;let n=-1;for(;++n<e.length;)if(e.charCodeAt(n)===37&&e.charCodeAt(n+1)===50){const r=e.charCodeAt(n+2);if(r===70||r===102){const i=new TypeError("File URL path must not include encoded / characters");throw i.code="ERR_INVALID_FILE_URL_PATH",i}}return decodeURIComponent(e)}const Ga=["history","path","basename","stem","extname","dirname"];class Xy{constructor(e){let n;e?typeof e=="string"||k_(e)?n={value:e}:uQ(e)?n={path:e}:n=e:n={},this.data={},this.messages=[],this.history=[],this.cwd=C_.cwd(),this.value,this.stored,this.result,this.map;let r=-1;for(;++r<Ga.length;){const a=Ga[r];a in n&&n[a]!==void 0&&n[a]!==null&&(this[a]=a==="history"?[...n[a]]:n[a])}let i;for(i in n)Ga.includes(i)||(this[i]=n[i])}get path(){return this.history[this.history.length-1]}set path(e){uQ(e)&&(e=D_(e)),Wa(e,"path"),this.path!==e&&this.history.push(e)}get dirname(){return typeof this.path=="string"?g4.dirname(this.path):void 0}set dirname(e){Jc(this.basename,"dirname"),this.path=g4.join(e||"",this.basename)}get basename(){return typeof this.path=="string"?g4.basename(this.path):void 0}set basename(e){Wa(e,"basename"),Xa(e,"basename"),this.path=g4.join(this.dirname||"",e)}get extname(){return typeof this.path=="string"?g4.extname(this.path):void 0}set extname(e){if(Xa(e,"extname"),Jc(this.dirname,"extname"),e){if(e.charCodeAt(0)!==46)throw new Error("`extname` must start with `.`");if(e.includes(".",1))throw new Error("`extname` cannot contain multiple dots")}this.path=g4.join(this.dirname,this.stem+(e||""))}get stem(){return typeof this.path=="string"?g4.basename(this.path,this.extname):void 0}set stem(e){Wa(e,"stem"),Xa(e,"stem"),this.path=g4.join(this.dirname||"",e+(this.extname||""))}toString(e){return(this.value||"").toString(e||void 0)}message(e,n,r){const i=new X3(e,n,r);return this.path&&(i.name=this.path+":"+i.name,i.file=this.path),i.fatal=!1,this.messages.push(i),i}info(e,n,r){const i=this.message(e,n,r);return i.fatal=null,i}fail(e,n,r){const i=this.message(e,n,r);throw i.fatal=!0,i}}function Xa(t,e){if(t&&t.includes(g4.sep))throw new Error("`"+e+"` cannot be a path: did not expect `"+g4.sep+"`")}function Wa(t,e){if(!t)throw new Error("`"+e+"` cannot be empty")}function Jc(t,e){if(!t)throw new Error("Setting `"+e+"` requires `path` to be set too")}function k_(t){return Gy(t)}function tf(t){if(t)throw t}var yr=Object.prototype.hasOwnProperty,Wy=Object.prototype.toString,ef=Object.defineProperty,nf=Object.getOwnPropertyDescriptor,rf=function(e){return typeof Array.isArray=="function"?Array.isArray(e):Wy.call(e)==="[object Array]"},af=function(e){if(!e||Wy.call(e)!=="[object Object]")return!1;var n=yr.call(e,"constructor"),r=e.constructor&&e.constructor.prototype&&yr.call(e.constructor.prototype,"isPrototypeOf");if(e.constructor&&!n&&!r)return!1;var i;for(i in e);return typeof i>"u"||yr.call(e,i)},of=function(e,n){ef&&n.name==="__proto__"?ef(e,n.name,{enumerable:!0,configurable:!0,value:n.newValue,writable:!0}):e[n.name]=n.newValue},lf=function(e,n){if(n==="__proto__")if(yr.call(e,n)){if(nf)return nf(e,n).value}else return;return e[n]},$_=function t(){var e,n,r,i,a,o,l=arguments[0],Q=1,s=arguments.length,u=!1;for(typeof l=="boolean"&&(u=l,l=arguments[1]||{},Q=2),(l==null||typeof l!="object"&&typeof l!="function")&&(l={});Q<s;++Q)if(e=arguments[Q],e!=null)for(n in e)r=lf(l,n),i=lf(e,n),l!==i&&(u&&i&&(af(i)||(a=rf(i)))?(a?(a=!1,o=r&&rf(r)?r:[]):o=r&&af(r)?r:{},of(l,{name:n,newValue:t(u,o,i)})):typeof i<"u"&&of(l,{name:n,newValue:i}));return l};const Qf=ie($_);function TQ(t){if(typeof t!="object"||t===null)return!1;const e=Object.getPrototypeOf(t);return(e===null||e===Object.prototype||Object.getPrototypeOf(e)===null)&&!(Symbol.toStringTag in t)&&!(Symbol.iterator in t)}function B_(){const t=[],e={run:n,use:r};return e;function n(...i){let a=-1;const o=i.pop();if(typeof o!="function")throw new TypeError("Expected function as last argument, not "+o);l(null,...i);function l(Q,...s){const u=t[++a];let T=-1;if(Q){o(Q);return}for(;++T<i.length;)(s[T]===null||s[T]===void 0)&&(s[T]=i[T]);i=s,u?P_(u,l)(...s):o(null,...s)}}function r(i){if(typeof i!="function")throw new TypeError("Expected `middelware` to be a function, not "+i);return t.push(i),e}}function P_(t,e){let n;return r;function r(...o){const l=t.length>o.length;let Q;l&&o.push(i);try{Q=t.apply(this,o)}catch(s){const u=s;if(l&&n)throw u;return i(u)}l||(Q instanceof Promise?Q.then(a,i):Q instanceof Error?i(Q):a(Q))}function i(o,...l){n||(n=!0,e(o,...l))}function a(o){i(null,o)}}const N_=Ky().freeze(),Uy={}.hasOwnProperty;function Ky(){const t=B_(),e=[];let n={},r,i=-1;return a.data=o,a.Parser=void 0,a.Compiler=void 0,a.freeze=l,a.attachers=e,a.use=Q,a.parse=s,a.stringify=u,a.run=T,a.runSync=c,a.process=f,a.processSync=h,a;function a(){const p=Ky();let v=-1;for(;++v<e.length;)p.use(...e[v]);return p.data(Qf(!0,{},n)),p}function o(p,v){return typeof p=="string"?arguments.length===2?(Ya("data",r),n[p]=v,a):Uy.call(n,p)&&n[p]||null:p?(Ya("data",r),n=p,a):n}function l(){if(r)return a;for(;++i<e.length;){const[p,...v]=e[i];if(v[0]===!1)continue;v[0]===!0&&(v[0]=void 0);const d=p.call(a,...v);typeof d=="function"&&t.use(d)}return r=!0,i=Number.POSITIVE_INFINITY,a}function Q(p,...v){let d;if(Ya("use",r),p!=null)if(typeof p=="function")L(p,...v);else if(typeof p=="object")Array.isArray(p)?x(p):y(p);else throw new TypeError("Expected usable value, not `"+p+"`");return d&&(n.settings=Object.assign(n.settings||{},d)),a;function m(H){if(typeof H=="function")L(H);else if(typeof H=="object")if(Array.isArray(H)){const[M,...w]=H;L(M,...w)}else y(H);else throw new TypeError("Expected usable value, not `"+H+"`")}function y(H){x(H.plugins),H.settings&&(d=Object.assign(d||{},H.settings))}function x(H){let M=-1;if(H!=null)if(Array.isArray(H))for(;++M<H.length;){const w=H[M];m(w)}else throw new TypeError("Expected a list of plugins, not `"+H+"`")}function L(H,M){let w=-1,S;for(;++w<e.length;)if(e[w][0]===H){S=e[w];break}S?(TQ(S[1])&&TQ(M)&&(M=Qf(!0,S[1],M)),S[1]=M):e.push([...arguments])}}function s(p){a.freeze();const v=Oe(p),d=a.Parser;return Ua("parse",d),sf(d,"parse")?new d(String(v),v).parse():d(String(v),v)}function u(p,v){a.freeze();const d=Oe(v),m=a.Compiler;return Ka("stringify",m),uf(p),sf(m,"compile")?new m(p,d).compile():m(p,d)}function T(p,v,d){if(uf(p),a.freeze(),!d&&typeof v=="function"&&(d=v,v=void 0),!d)return new Promise(m);m(null,d);function m(y,x){t.run(p,Oe(v),L);function L(H,M,w){M=M||p,H?x(H):y?y(M):d(null,M,w)}}}function c(p,v){let d,m;return a.run(p,v,y),Tf("runSync","run",m),d;function y(x,L){tf(x),d=L,m=!0}}function f(p,v){if(a.freeze(),Ua("process",a.Parser),Ka("process",a.Compiler),!v)return new Promise(d);d(null,v);function d(m,y){const x=Oe(p);a.run(a.parse(x),x,(H,M,w)=>{if(H||!M||!w)L(H);else{const S=a.stringify(M,w);S==null||(F_(S)?w.value=S:w.result=S),L(H,w)}});function L(H,M){H||!M?y(H):m?m(M):v(null,M)}}}function h(p){let v;a.freeze(),Ua("processSync",a.Parser),Ka("processSync",a.Compiler);const d=Oe(p);return a.process(d,m),Tf("processSync","process",v),d;function m(y){v=!0,tf(y)}}}function sf(t,e){return typeof t=="function"&&t.prototype&&(I_(t.prototype)||e in t.prototype)}function I_(t){let e;for(e in t)if(Uy.call(t,e))return!0;return!1}function Ua(t,e){if(typeof e!="function")throw new TypeError("Cannot `"+t+"` without `Parser`")}function Ka(t,e){if(typeof e!="function")throw new TypeError("Cannot `"+t+"` without `Compiler`")}function Ya(t,e){if(e)throw new Error("Cannot call `"+t+"` on a frozen processor.\nCreate a new processor first, by calling it: use `processor()` instead of `processor`.")}function uf(t){if(!TQ(t)||typeof t.type!="string")throw new TypeError("Expected node, got `"+t+"`")}function Tf(t,e,n){if(!n)throw new Error("`"+t+"` finished async. Use `"+e+"` instead")}function Oe(t){return j_(t)?t:new Xy(t)}function j_(t){return!!(t&&typeof t=="object"&&"message"in t&&"messages"in t)}function F_(t){return typeof t=="string"||Gy(t)}const R_={};function z_(t,e){const n=e||R_,r=typeof n.includeImageAlt=="boolean"?n.includeImageAlt:!0,i=typeof n.includeHtml=="boolean"?n.includeHtml:!0;return Yy(t,r,i)}function Yy(t,e,n){if(q_(t)){if("value"in t)return t.type==="html"&&!n?"":t.value;if(e&&"alt"in t&&t.alt)return t.alt;if("children"in t)return cf(t.children,e,n)}return Array.isArray(t)?cf(t,e,n):""}function cf(t,e,n){const r=[];let i=-1;for(;++i<t.length;)r[i]=Yy(t[i],e,n);return r.join("")}function q_(t){return!!(t&&typeof t=="object")}function S3(t,e,n,r){const i=t.length;let a=0,o;if(e<0?e=-e>i?0:i+e:e=e>i?i:e,n=n>0?n:0,r.length<1e4)o=Array.from(r),o.unshift(e,n),[].splice.apply(t,o);else for(n&&[].splice.apply(t,[e,n]);a<r.length;)o=r.slice(a,a+1e4),o.unshift(e,0),[].splice.apply(t,o),a+=1e4,e+=1e4}function P3(t,e){return t.length>0?(S3(t,t.length,0,e),t):e}const ff={}.hasOwnProperty;function Jy(t){const e={};let n=-1;for(;++n<t.length;)Z_(e,t[n]);return e}function Z_(t,e){let n;for(n in e){const i=(ff.call(t,n)?t[n]:void 0)||(t[n]={}),a=e[n];let o;for(o in a){ff.call(i,o)||(i[o]=[]);const l=a[o];G_(i[o],Array.isArray(l)?l:l?[l]:[])}}}function G_(t,e){let n=-1;const r=[];for(;++n<e.length;)(e[n].add==="after"?t:r).push(e[n]);S3(t,0,0,r)}const X_=/[!-/:-@[-`{-~\u00A1\u00A7\u00AB\u00B6\u00B7\u00BB\u00BF\u037E\u0387\u055A-\u055F\u0589\u058A\u05BE\u05C0\u05C3\u05C6\u05F3\u05F4\u0609\u060A\u060C\u060D\u061B\u061E\u061F\u066A-\u066D\u06D4\u0700-\u070D\u07F7-\u07F9\u0830-\u083E\u085E\u0964\u0965\u0970\u09FD\u0A76\u0AF0\u0C77\u0C84\u0DF4\u0E4F\u0E5A\u0E5B\u0F04-\u0F12\u0F14\u0F3A-\u0F3D\u0F85\u0FD0-\u0FD4\u0FD9\u0FDA\u104A-\u104F\u10FB\u1360-\u1368\u1400\u166E\u169B\u169C\u16EB-\u16ED\u1735\u1736\u17D4-\u17D6\u17D8-\u17DA\u1800-\u180A\u1944\u1945\u1A1E\u1A1F\u1AA0-\u1AA6\u1AA8-\u1AAD\u1B5A-\u1B60\u1BFC-\u1BFF\u1C3B-\u1C3F\u1C7E\u1C7F\u1CC0-\u1CC7\u1CD3\u2010-\u2027\u2030-\u2043\u2045-\u2051\u2053-\u205E\u207D\u207E\u208D\u208E\u2308-\u230B\u2329\u232A\u2768-\u2775\u27C5\u27C6\u27E6-\u27EF\u2983-\u2998\u29D8-\u29DB\u29FC\u29FD\u2CF9-\u2CFC\u2CFE\u2CFF\u2D70\u2E00-\u2E2E\u2E30-\u2E4F\u2E52\u3001-\u3003\u3008-\u3011\u3014-\u301F\u3030\u303D\u30A0\u30FB\uA4FE\uA4FF\uA60D-\uA60F\uA673\uA67E\uA6F2-\uA6F7\uA874-\uA877\uA8CE\uA8CF\uA8F8-\uA8FA\uA8FC\uA92E\uA92F\uA95F\uA9C1-\uA9CD\uA9DE\uA9DF\uAA5C-\uAA5F\uAADE\uAADF\uAAF0\uAAF1\uABEB\uFD3E\uFD3F\uFE10-\uFE19\uFE30-\uFE52\uFE54-\uFE61\uFE63\uFE68\uFE6A\uFE6B\uFF01-\uFF03\uFF05-\uFF0A\uFF0C-\uFF0F\uFF1A\uFF1B\uFF1F\uFF20\uFF3B-\uFF3D\uFF3F\uFF5B\uFF5D\uFF5F-\uFF65]/,i3=r5(/[A-Za-z]/),cQ=r5(/\d/),W_=r5(/[\dA-Fa-f]/),t3=r5(/[\dA-Za-z]/),U_=r5(/[!-/:-@[-`{-~]/),hf=r5(/[#-'*+\--9=?A-Z^-~]/);function Gr(t){return t!==null&&(t<32||t===127)}function l2(t){return t!==null&&(t<0||t===32)}function x1(t){return t!==null&&t<-2}function t2(t){return t===-2||t===-1||t===32}const P5=r5(/\s/),z8=r5(X_);function r5(t){return e;function e(n){return n!==null&&t.test(String.fromCharCode(n))}}function N1(t,e,n,r){const i=r?r-1:Number.POSITIVE_INFINITY;let a=0;return o;function o(Q){return t2(Q)?(t.enter(n),l(Q)):e(Q)}function l(Q){return t2(Q)&&a++<i?(t.consume(Q),l):(t.exit(n),e(Q))}}const K_={tokenize:Y_};function Y_(t){const e=t.attempt(this.parser.constructs.contentInitial,r,i);let n;return e;function r(l){if(l===null){t.consume(l);return}return t.enter("lineEnding"),t.consume(l),t.exit("lineEnding"),N1(t,e,"linePrefix")}function i(l){return t.enter("paragraph"),a(l)}function a(l){const Q=t.enter("chunkText",{contentType:"text",previous:n});return n&&(n.next=Q),n=Q,o(l)}function o(l){if(l===null){t.exit("chunkText"),t.exit("paragraph"),t.consume(l);return}return x1(l)?(t.consume(l),t.exit("chunkText"),a):(t.consume(l),o)}}const J_={tokenize:tw},df={tokenize:ew};function tw(t){const e=this,n=[];let r=0,i,a,o;return l;function l(y){if(r<n.length){const x=n[r];return e.containerState=x[1],t.attempt(x[0].continuation,Q,s)(y)}return s(y)}function Q(y){if(r++,e.containerState._closeFlow){e.containerState._closeFlow=void 0,i&&m();const x=e.events.length;let L=x,H;for(;L--;)if(e.events[L][0]==="exit"&&e.events[L][1].type==="chunkFlow"){H=e.events[L][1].end;break}d(r);let M=x;for(;M<e.events.length;)e.events[M][1].end=Object.assign({},H),M++;return S3(e.events,L+1,0,e.events.slice(x)),e.events.length=M,s(y)}return l(y)}function s(y){if(r===n.length){if(!i)return c(y);if(i.currentConstruct&&i.currentConstruct.concrete)return h(y);e.interrupt=!!(i.currentConstruct&&!i._gfmTableDynamicInterruptHack)}return e.containerState={},t.check(df,u,T)(y)}function u(y){return i&&m(),d(r),c(y)}function T(y){return e.parser.lazy[e.now().line]=r!==n.length,o=e.now().offset,h(y)}function c(y){return e.containerState={},t.attempt(df,f,h)(y)}function f(y){return r++,n.push([e.currentConstruct,e.containerState]),c(y)}function h(y){if(y===null){i&&m(),d(0),t.consume(y);return}return i=i||e.parser.flow(e.now()),t.enter("chunkFlow",{contentType:"flow",previous:a,_tokenizer:i}),p(y)}function p(y){if(y===null){v(t.exit("chunkFlow"),!0),d(0),t.consume(y);return}return x1(y)?(t.consume(y),v(t.exit("chunkFlow")),r=0,e.interrupt=void 0,l):(t.consume(y),p)}function v(y,x){const L=e.sliceStream(y);if(x&&L.push(null),y.previous=a,a&&(a.next=y),a=y,i.defineSkip(y.start),i.write(L),e.parser.lazy[y.start.line]){let H=i.events.length;for(;H--;)if(i.events[H][1].start.offset<o&&(!i.events[H][1].end||i.events[H][1].end.offset>o))return;const M=e.events.length;let w=M,S,D;for(;w--;)if(e.events[w][0]==="exit"&&e.events[w][1].type==="chunkFlow"){if(S){D=e.events[w][1].end;break}S=!0}for(d(r),H=M;H<e.events.length;)e.events[H][1].end=Object.assign({},D),H++;S3(e.events,w+1,0,e.events.slice(M)),e.events.length=H}}function d(y){let x=n.length;for(;x-- >y;){const L=n[x];e.containerState=L[1],L[0].exit.call(e,t)}n.length=y}function m(){i.write([null]),a=void 0,i=void 0,e.containerState._closeFlow=void 0}}function ew(t,e,n){return N1(t,t.attempt(this.parser.constructs.document,e,n),"linePrefix",this.parser.constructs.disable.null.includes("codeIndented")?void 0:4)}function Xr(t){if(t===null||l2(t)||P5(t))return 1;if(z8(t))return 2}function q8(t,e,n){const r=[];let i=-1;for(;++i<t.length;){const a=t[i].resolveAll;a&&!r.includes(a)&&(e=a(e,n),r.push(a))}return e}const fQ={name:"attention",tokenize:rw,resolveAll:nw};function nw(t,e){let n=-1,r,i,a,o,l,Q,s,u;for(;++n<t.length;)if(t[n][0]==="enter"&&t[n][1].type==="attentionSequence"&&t[n][1]._close){for(r=n;r--;)if(t[r][0]==="exit"&&t[r][1].type==="attentionSequence"&&t[r][1]._open&&e.sliceSerialize(t[r][1]).charCodeAt(0)===e.sliceSerialize(t[n][1]).charCodeAt(0)){if((t[r][1]._close||t[n][1]._open)&&(t[n][1].end.offset-t[n][1].start.offset)%3&&!((t[r][1].end.offset-t[r][1].start.offset+t[n][1].end.offset-t[n][1].start.offset)%3))continue;Q=t[r][1].end.offset-t[r][1].start.offset>1&&t[n][1].end.offset-t[n][1].start.offset>1?2:1;const T=Object.assign({},t[r][1].end),c=Object.assign({},t[n][1].start);pf(T,-Q),pf(c,Q),o={type:Q>1?"strongSequence":"emphasisSequence",start:T,end:Object.assign({},t[r][1].end)},l={type:Q>1?"strongSequence":"emphasisSequence",start:Object.assign({},t[n][1].start),end:c},a={type:Q>1?"strongText":"emphasisText",start:Object.assign({},t[r][1].end),end:Object.assign({},t[n][1].start)},i={type:Q>1?"strong":"emphasis",start:Object.assign({},o.start),end:Object.assign({},l.end)},t[r][1].end=Object.assign({},o.start),t[n][1].start=Object.assign({},l.end),s=[],t[r][1].end.offset-t[r][1].start.offset&&(s=P3(s,[["enter",t[r][1],e],["exit",t[r][1],e]])),s=P3(s,[["enter",i,e],["enter",o,e],["exit",o,e],["enter",a,e]]),s=P3(s,q8(e.parser.constructs.insideSpan.null,t.slice(r+1,n),e)),s=P3(s,[["exit",a,e],["enter",l,e],["exit",l,e],["exit",i,e]]),t[n][1].end.offset-t[n][1].start.offset?(u=2,s=P3(s,[["enter",t[n][1],e],["exit",t[n][1],e]])):u=0,S3(t,r-1,n-r+3,s),n=r+s.length-u-2;break}}for(n=-1;++n<t.length;)t[n][1].type==="attentionSequence"&&(t[n][1].type="data");return t}function rw(t,e){const n=this.parser.constructs.attentionMarkers.null,r=this.previous,i=Xr(r);let a;return o;function o(Q){return t.enter("attentionSequence"),a=Q,l(Q)}function l(Q){if(Q===a)return t.consume(Q),l;const s=t.exit("attentionSequence"),u=Xr(Q),T=!u||u===2&&i||n.includes(Q),c=!i||i===2&&u||n.includes(r);return s._open=!!(a===42?T:T&&(i||!c)),s._close=!!(a===42?c:c&&(u||!T)),e(Q)}}function pf(t,e){t.column+=e,t.offset+=e,t._bufferIndex+=e}const iw={name:"autolink",tokenize:aw};function aw(t,e,n){let r=1;return i;function i(h){return t.enter("autolink"),t.enter("autolinkMarker"),t.consume(h),t.exit("autolinkMarker"),t.enter("autolinkProtocol"),a}function a(h){return i3(h)?(t.consume(h),o):hf(h)?s(h):n(h)}function o(h){return h===43||h===45||h===46||t3(h)?l(h):s(h)}function l(h){return h===58?(t.consume(h),Q):(h===43||h===45||h===46||t3(h))&&r++<32?(t.consume(h),l):s(h)}function Q(h){return h===62?(t.exit("autolinkProtocol"),f(h)):h===null||h===32||h===60||Gr(h)?n(h):(t.consume(h),Q)}function s(h){return h===64?(t.consume(h),r=0,u):hf(h)?(t.consume(h),s):n(h)}function u(h){return t3(h)?T(h):n(h)}function T(h){return h===46?(t.consume(h),r=0,u):h===62?(t.exit("autolinkProtocol").type="autolinkEmail",f(h)):c(h)}function c(h){return(h===45||t3(h))&&r++<63?(t.consume(h),h===45?c:T):n(h)}function f(h){return t.enter("autolinkMarker"),t.consume(h),t.exit("autolinkMarker"),t.exit("autolink"),e}}const v7={tokenize:ow,partial:!0};function ow(t,e,n){return N1(t,r,"linePrefix");function r(i){return i===null||x1(i)?e(i):n(i)}}const tg={name:"blockQuote",tokenize:lw,continuation:{tokenize:Qw},exit:sw};function lw(t,e,n){const r=this;return i;function i(o){if(o===62){const l=r.containerState;return l.open||(t.enter("blockQuote",{_container:!0}),l.open=!0),t.enter("blockQuotePrefix"),t.enter("blockQuoteMarker"),t.consume(o),t.exit("blockQuoteMarker"),a}return n(o)}function a(o){return t2(o)?(t.enter("blockQuotePrefixWhitespace"),t.consume(o),t.exit("blockQuotePrefixWhitespace"),t.exit("blockQuotePrefix"),e):(t.exit("blockQuotePrefix"),e(o))}}function Qw(t,e,n){return N1(t,t.attempt(tg,e,n),"linePrefix",this.parser.constructs.disable.null.includes("codeIndented")?void 0:4)}function sw(t){t.exit("blockQuote")}const eg={name:"characterEscape",tokenize:uw};function uw(t,e,n){return r;function r(a){return t.enter("characterEscape"),t.enter("escapeMarker"),t.consume(a),t.exit("escapeMarker"),i}function i(a){return U_(a)?(t.enter("characterEscapeValue"),t.consume(a),t.exit("characterEscapeValue"),t.exit("characterEscape"),e):n(a)}}const mf=document.createElement("i");function iu(t){const e="&"+t+";";mf.innerHTML=e;const n=mf.textContent;return n.charCodeAt(n.length-1)===59&&t!=="semi"||n===e?!1:n}const ng={name:"characterReference",tokenize:Tw};function Tw(t,e,n){const r=this;let i=0,a,o;return l;function l(T){return t.enter("characterReference"),t.enter("characterReferenceMarker"),t.consume(T),t.exit("characterReferenceMarker"),Q}function Q(T){return T===35?(t.enter("characterReferenceMarkerNumeric"),t.consume(T),t.exit("characterReferenceMarkerNumeric"),s):(t.enter("characterReferenceValue"),a=31,o=t3,u(T))}function s(T){return T===88||T===120?(t.enter("characterReferenceMarkerHexadecimal"),t.consume(T),t.exit("characterReferenceMarkerHexadecimal"),t.enter("characterReferenceValue"),a=6,o=W_,u):(t.enter("characterReferenceValue"),a=7,o=cQ,u(T))}function u(T){let c;return T===59&&i?(c=t.exit("characterReferenceValue"),o===t3&&!iu(r.sliceSerialize(c))?n(T):(t.enter("characterReferenceMarker"),t.consume(T),t.exit("characterReferenceMarker"),t.exit("characterReference"),e)):o(T)&&i++<a?(t.consume(T),u):n(T)}}const vf={name:"codeFenced",tokenize:cw,concrete:!0};function cw(t,e,n){const r=this,i={tokenize:L,partial:!0},a={tokenize:x,partial:!0},o=this.events[this.events.length-1],l=o&&o[1].type==="linePrefix"?o[2].sliceSerialize(o[1],!0).length:0;let Q=0,s;return u;function u(H){return t.enter("codeFenced"),t.enter("codeFencedFence"),t.enter("codeFencedFenceSequence"),s=H,T(H)}function T(H){return H===s?(t.consume(H),Q++,T):(t.exit("codeFencedFenceSequence"),Q<3?n(H):N1(t,c,"whitespace")(H))}function c(H){return H===null||x1(H)?v(H):(t.enter("codeFencedFenceInfo"),t.enter("chunkString",{contentType:"string"}),f(H))}function f(H){return H===null||l2(H)?(t.exit("chunkString"),t.exit("codeFencedFenceInfo"),N1(t,h,"whitespace")(H)):H===96&&H===s?n(H):(t.consume(H),f)}function h(H){return H===null||x1(H)?v(H):(t.enter("codeFencedFenceMeta"),t.enter("chunkString",{contentType:"string"}),p(H))}function p(H){return H===null||x1(H)?(t.exit("chunkString"),t.exit("codeFencedFenceMeta"),v(H)):H===96&&H===s?n(H):(t.consume(H),p)}function v(H){return t.exit("codeFencedFence"),r.interrupt?e(H):d(H)}function d(H){return H===null?y(H):x1(H)?t.attempt(a,t.attempt(i,y,l?N1(t,d,"linePrefix",l+1):d),y)(H):(t.enter("codeFlowValue"),m(H))}function m(H){return H===null||x1(H)?(t.exit("codeFlowValue"),d(H)):(t.consume(H),m)}function y(H){return t.exit("codeFenced"),e(H)}function x(H,M,w){const S=this;return D;function D($){return H.enter("lineEnding"),H.consume($),H.exit("lineEnding"),E}function E($){return S.parser.lazy[S.now().line]?w($):M($)}}function L(H,M,w){let S=0;return N1(H,D,"linePrefix",this.parser.constructs.disable.null.includes("codeIndented")?void 0:4);function D(j){return H.enter("codeFencedFence"),H.enter("codeFencedFenceSequence"),E(j)}function E(j){return j===s?(H.consume(j),S++,E):S<Q?w(j):(H.exit("codeFencedFenceSequence"),N1(H,$,"whitespace")(j))}function $(j){return j===null||x1(j)?(H.exit("codeFencedFence"),M(j)):w(j)}}}const Ja={name:"codeIndented",tokenize:hw},fw={tokenize:dw,partial:!0};function hw(t,e,n){const r=this;return i;function i(s){return t.enter("codeIndented"),N1(t,a,"linePrefix",4+1)(s)}function a(s){const u=r.events[r.events.length-1];return u&&u[1].type==="linePrefix"&&u[2].sliceSerialize(u[1],!0).length>=4?o(s):n(s)}function o(s){return s===null?Q(s):x1(s)?t.attempt(fw,o,Q)(s):(t.enter("codeFlowValue"),l(s))}function l(s){return s===null||x1(s)?(t.exit("codeFlowValue"),o(s)):(t.consume(s),l)}function Q(s){return t.exit("codeIndented"),e(s)}}function dw(t,e,n){const r=this;return i;function i(o){return r.parser.lazy[r.now().line]?n(o):x1(o)?(t.enter("lineEnding"),t.consume(o),t.exit("lineEnding"),i):N1(t,a,"linePrefix",4+1)(o)}function a(o){const l=r.events[r.events.length-1];return l&&l[1].type==="linePrefix"&&l[2].sliceSerialize(l[1],!0).length>=4?e(o):x1(o)?i(o):n(o)}}const pw={name:"codeText",tokenize:yw,resolve:mw,previous:vw};function mw(t){let e=t.length-4,n=3,r,i;if((t[n][1].type==="lineEnding"||t[n][1].type==="space")&&(t[e][1].type==="lineEnding"||t[e][1].type==="space")){for(r=n;++r<e;)if(t[r][1].type==="codeTextData"){t[n][1].type="codeTextPadding",t[e][1].type="codeTextPadding",n+=2,e-=2;break}}for(r=n-1,e++;++r<=e;)i===void 0?r!==e&&t[r][1].type!=="lineEnding"&&(i=r):(r===e||t[r][1].type==="lineEnding")&&(t[i][1].type="codeTextData",r!==i+2&&(t[i][1].end=t[r-1][1].end,t.splice(i+2,r-i-2),e-=r-i-2,r=i+2),i=void 0);return t}function vw(t){return t!==96||this.events[this.events.length-1][1].type==="characterEscape"}function yw(t,e,n){let r=0,i,a;return o;function o(T){return t.enter("codeText"),t.enter("codeTextSequence"),l(T)}function l(T){return T===96?(t.consume(T),r++,l):(t.exit("codeTextSequence"),Q(T))}function Q(T){return T===null?n(T):T===96?(a=t.enter("codeTextSequence"),i=0,u(T)):T===32?(t.enter("space"),t.consume(T),t.exit("space"),Q):x1(T)?(t.enter("lineEnding"),t.consume(T),t.exit("lineEnding"),Q):(t.enter("codeTextData"),s(T))}function s(T){return T===null||T===32||T===96||x1(T)?(t.exit("codeTextData"),Q(T)):(t.consume(T),s)}function u(T){return T===96?(t.consume(T),i++,u):i===r?(t.exit("codeTextSequence"),t.exit("codeText"),e(T)):(a.type="codeTextData",s(T))}}function rg(t){const e={};let n=-1,r,i,a,o,l,Q,s;for(;++n<t.length;){for(;n in e;)n=e[n];if(r=t[n],n&&r[1].type==="chunkFlow"&&t[n-1][1].type==="listItemPrefix"&&(Q=r[1]._tokenizer.events,a=0,a<Q.length&&Q[a][1].type==="lineEndingBlank"&&(a+=2),a<Q.length&&Q[a][1].type==="content"))for(;++a<Q.length&&Q[a][1].type!=="content";)Q[a][1].type==="chunkText"&&(Q[a][1]._isInFirstContentOfListItem=!0,a++);if(r[0]==="enter")r[1].contentType&&(Object.assign(e,gw(t,n)),n=e[n],s=!0);else if(r[1]._container){for(a=n,i=void 0;a--&&(o=t[a],o[1].type==="lineEnding"||o[1].type==="lineEndingBlank");)o[0]==="enter"&&(i&&(t[i][1].type="lineEndingBlank"),o[1].type="lineEnding",i=a);i&&(r[1].end=Object.assign({},t[i][1].start),l=t.slice(i,n),l.unshift(r),S3(t,i,n-i+1,l))}}return!s}function gw(t,e){const n=t[e][1],r=t[e][2];let i=e-1;const a=[],o=n._tokenizer||r.parser[n.contentType](n.start),l=o.events,Q=[],s={};let u,T,c=-1,f=n,h=0,p=0;const v=[p];for(;f;){for(;t[++i][1]!==f;);a.push(i),f._tokenizer||(u=r.sliceStream(f),f.next||u.push(null),T&&o.defineSkip(f.start),f._isInFirstContentOfListItem&&(o._gfmTasklistFirstContentOfListItem=!0),o.write(u),f._isInFirstContentOfListItem&&(o._gfmTasklistFirstContentOfListItem=void 0)),T=f,f=f.next}for(f=n;++c<l.length;)l[c][0]==="exit"&&l[c-1][0]==="enter"&&l[c][1].type===l[c-1][1].type&&l[c][1].start.line!==l[c][1].end.line&&(p=c+1,v.push(p),f._tokenizer=void 0,f.previous=void 0,f=f.next);for(o.events=[],f?(f._tokenizer=void 0,f.previous=void 0):v.pop(),c=v.length;c--;){const d=l.slice(v[c],v[c+1]),m=a.pop();Q.unshift([m,m+d.length-1]),S3(t,m,2,d)}for(c=-1;++c<Q.length;)s[h+Q[c][0]]=h+Q[c][1],h+=Q[c][1]-Q[c][0]-1;return s}const xw={tokenize:bw,resolve:Hw},Lw={tokenize:Mw,partial:!0};function Hw(t){return rg(t),t}function bw(t,e){let n;return r;function r(l){return t.enter("content"),n=t.enter("chunkContent",{contentType:"content"}),i(l)}function i(l){return l===null?a(l):x1(l)?t.check(Lw,o,a)(l):(t.consume(l),i)}function a(l){return t.exit("chunkContent"),t.exit("content"),e(l)}function o(l){return t.consume(l),t.exit("chunkContent"),n.next=t.enter("chunkContent",{contentType:"content",previous:n}),n=n.next,i}}function Mw(t,e,n){const r=this;return i;function i(o){return t.exit("chunkContent"),t.enter("lineEnding"),t.consume(o),t.exit("lineEnding"),N1(t,a,"linePrefix")}function a(o){if(o===null||x1(o))return n(o);const l=r.events[r.events.length-1];return!r.parser.constructs.disable.null.includes("codeIndented")&&l&&l[1].type==="linePrefix"&&l[2].sliceSerialize(l[1],!0).length>=4?e(o):t.interrupt(r.parser.constructs.flow,n,e)(o)}}function ig(t,e,n,r,i,a,o,l,Q){const s=Q||Number.POSITIVE_INFINITY;let u=0;return T;function T(d){return d===60?(t.enter(r),t.enter(i),t.enter(a),t.consume(d),t.exit(a),c):d===null||d===41||Gr(d)?n(d):(t.enter(r),t.enter(o),t.enter(l),t.enter("chunkString",{contentType:"string"}),p(d))}function c(d){return d===62?(t.enter(a),t.consume(d),t.exit(a),t.exit(i),t.exit(r),e):(t.enter(l),t.enter("chunkString",{contentType:"string"}),f(d))}function f(d){return d===62?(t.exit("chunkString"),t.exit(l),c(d)):d===null||d===60||x1(d)?n(d):(t.consume(d),d===92?h:f)}function h(d){return d===60||d===62||d===92?(t.consume(d),f):f(d)}function p(d){return d===40?++u>s?n(d):(t.consume(d),p):d===41?u--?(t.consume(d),p):(t.exit("chunkString"),t.exit(l),t.exit(o),t.exit(r),e(d)):d===null||l2(d)?u?n(d):(t.exit("chunkString"),t.exit(l),t.exit(o),t.exit(r),e(d)):Gr(d)?n(d):(t.consume(d),d===92?v:p)}function v(d){return d===40||d===41||d===92?(t.consume(d),p):p(d)}}function ag(t,e,n,r,i,a){const o=this;let l=0,Q;return s;function s(f){return t.enter(r),t.enter(i),t.consume(f),t.exit(i),t.enter(a),u}function u(f){return f===null||f===91||f===93&&!Q||f===94&&!l&&"_hiddenFootnoteSupport"in o.parser.constructs||l>999?n(f):f===93?(t.exit(a),t.enter(i),t.consume(f),t.exit(i),t.exit(r),e):x1(f)?(t.enter("lineEnding"),t.consume(f),t.exit("lineEnding"),u):(t.enter("chunkString",{contentType:"string"}),T(f))}function T(f){return f===null||f===91||f===93||x1(f)||l++>999?(t.exit("chunkString"),u(f)):(t.consume(f),Q=Q||!t2(f),f===92?c:T)}function c(f){return f===91||f===92||f===93?(t.consume(f),l++,T):T(f)}}function og(t,e,n,r,i,a){let o;return l;function l(c){return t.enter(r),t.enter(i),t.consume(c),t.exit(i),o=c===40?41:c,Q}function Q(c){return c===o?(t.enter(i),t.consume(c),t.exit(i),t.exit(r),e):(t.enter(a),s(c))}function s(c){return c===o?(t.exit(a),Q(o)):c===null?n(c):x1(c)?(t.enter("lineEnding"),t.consume(c),t.exit("lineEnding"),N1(t,s,"linePrefix")):(t.enter("chunkString",{contentType:"string"}),u(c))}function u(c){return c===o||c===null||x1(c)?(t.exit("chunkString"),s(c)):(t.consume(c),c===92?T:u)}function T(c){return c===o||c===92?(t.consume(c),u):u(c)}}function C0(t,e){let n;return r;function r(i){return x1(i)?(t.enter("lineEnding"),t.consume(i),t.exit("lineEnding"),n=!0,r):t2(i)?N1(t,r,n?"linePrefix":"lineSuffix")(i):e(i)}}function o4(t){return t.replace(/[\t\n\r ]+/g," ").replace(/^ | $/g,"").toLowerCase().toUpperCase()}const _w={name:"definition",tokenize:Sw},ww={tokenize:Aw,partial:!0};function Sw(t,e,n){const r=this;let i;return a;function a(Q){return t.enter("definition"),ag.call(r,t,o,n,"definitionLabel","definitionLabelMarker","definitionLabelString")(Q)}function o(Q){return i=o4(r.sliceSerialize(r.events[r.events.length-1][1]).slice(1,-1)),Q===58?(t.enter("definitionMarker"),t.consume(Q),t.exit("definitionMarker"),C0(t,ig(t,t.attempt(ww,N1(t,l,"whitespace"),N1(t,l,"whitespace")),n,"definitionDestination","definitionDestinationLiteral","definitionDestinationLiteralMarker","definitionDestinationRaw","definitionDestinationString"))):n(Q)}function l(Q){return Q===null||x1(Q)?(t.exit("definition"),r.parser.defined.includes(i)||r.parser.defined.push(i),e(Q)):n(Q)}}function Aw(t,e,n){return r;function r(o){return l2(o)?C0(t,i)(o):n(o)}function i(o){return o===34||o===39||o===40?og(t,N1(t,a,"whitespace"),n,"definitionTitle","definitionTitleMarker","definitionTitleString")(o):n(o)}function a(o){return o===null||x1(o)?e(o):n(o)}}const Vw={name:"hardBreakEscape",tokenize:Cw};function Cw(t,e,n){return r;function r(a){return t.enter("hardBreakEscape"),t.enter("escapeMarker"),t.consume(a),i}function i(a){return x1(a)?(t.exit("escapeMarker"),t.exit("hardBreakEscape"),e(a)):n(a)}}const Ew={name:"headingAtx",tokenize:Ow,resolve:Dw};function Dw(t,e){let n=t.length-2,r=3,i,a;return t[r][1].type==="whitespace"&&(r+=2),n-2>r&&t[n][1].type==="whitespace"&&(n-=2),t[n][1].type==="atxHeadingSequence"&&(r===n-1||n-4>r&&t[n-2][1].type==="whitespace")&&(n-=r+1===n?2:4),n>r&&(i={type:"atxHeadingText",start:t[r][1].start,end:t[n][1].end},a={type:"chunkText",start:t[r][1].start,end:t[n][1].end,contentType:"text"},S3(t,r,n-r+1,[["enter",i,e],["enter",a,e],["exit",a,e],["exit",i,e]])),t}function Ow(t,e,n){const r=this;let i=0;return a;function a(u){return t.enter("atxHeading"),t.enter("atxHeadingSequence"),o(u)}function o(u){return u===35&&i++<6?(t.consume(u),o):u===null||l2(u)?(t.exit("atxHeadingSequence"),r.interrupt?e(u):l(u)):n(u)}function l(u){return u===35?(t.enter("atxHeadingSequence"),Q(u)):u===null||x1(u)?(t.exit("atxHeading"),e(u)):t2(u)?N1(t,l,"whitespace")(u):(t.enter("atxHeadingText"),s(u))}function Q(u){return u===35?(t.consume(u),Q):(t.exit("atxHeadingSequence"),l(u))}function s(u){return u===null||u===35||l2(u)?(t.exit("atxHeadingText"),l(u)):(t.consume(u),s)}}const kw=["address","article","aside","base","basefont","blockquote","body","caption","center","col","colgroup","dd","details","dialog","dir","div","dl","dt","fieldset","figcaption","figure","footer","form","frame","frameset","h1","h2","h3","h4","h5","h6","head","header","hr","html","iframe","legend","li","link","main","menu","menuitem","nav","noframes","ol","optgroup","option","p","param","section","summary","table","tbody","td","tfoot","th","thead","title","tr","track","ul"],yf=["pre","script","style","textarea"],$w={name:"htmlFlow",tokenize:Nw,resolveTo:Pw,concrete:!0},Bw={tokenize:Iw,partial:!0};function Pw(t){let e=t.length;for(;e--&&!(t[e][0]==="enter"&&t[e][1].type==="htmlFlow"););return e>1&&t[e-2][1].type==="linePrefix"&&(t[e][1].start=t[e-2][1].start,t[e+1][1].start=t[e-2][1].start,t.splice(e-2,2)),t}function Nw(t,e,n){const r=this;let i,a,o,l,Q;return s;function s(O){return t.enter("htmlFlow"),t.enter("htmlFlowData"),t.consume(O),u}function u(O){return O===33?(t.consume(O),T):O===47?(t.consume(O),h):O===63?(t.consume(O),i=3,r.interrupt?e:o1):i3(O)?(t.consume(O),o=String.fromCharCode(O),a=!0,p):n(O)}function T(O){return O===45?(t.consume(O),i=2,c):O===91?(t.consume(O),i=5,o="CDATA[",l=0,f):i3(O)?(t.consume(O),i=4,r.interrupt?e:o1):n(O)}function c(O){return O===45?(t.consume(O),r.interrupt?e:o1):n(O)}function f(O){return O===o.charCodeAt(l++)?(t.consume(O),l===o.length?r.interrupt?e:E:f):n(O)}function h(O){return i3(O)?(t.consume(O),o=String.fromCharCode(O),p):n(O)}function p(O){return O===null||O===47||O===62||l2(O)?O!==47&&a&&yf.includes(o.toLowerCase())?(i=1,r.interrupt?e(O):E(O)):kw.includes(o.toLowerCase())?(i=6,O===47?(t.consume(O),v):r.interrupt?e(O):E(O)):(i=7,r.interrupt&&!r.parser.lazy[r.now().line]?n(O):a?m(O):d(O)):O===45||t3(O)?(t.consume(O),o+=String.fromCharCode(O),p):n(O)}function v(O){return O===62?(t.consume(O),r.interrupt?e:E):n(O)}function d(O){return t2(O)?(t.consume(O),d):S(O)}function m(O){return O===47?(t.consume(O),S):O===58||O===95||i3(O)?(t.consume(O),y):t2(O)?(t.consume(O),m):S(O)}function y(O){return O===45||O===46||O===58||O===95||t3(O)?(t.consume(O),y):x(O)}function x(O){return O===61?(t.consume(O),L):t2(O)?(t.consume(O),x):m(O)}function L(O){return O===null||O===60||O===61||O===62||O===96?n(O):O===34||O===39?(t.consume(O),Q=O,H):t2(O)?(t.consume(O),L):(Q=null,M(O))}function H(O){return O===null||x1(O)?n(O):O===Q?(t.consume(O),w):(t.consume(O),H)}function M(O){return O===null||O===34||O===39||O===60||O===61||O===62||O===96||l2(O)?x(O):(t.consume(O),M)}function w(O){return O===47||O===62||t2(O)?m(O):n(O)}function S(O){return O===62?(t.consume(O),D):n(O)}function D(O){return t2(O)?(t.consume(O),D):O===null||x1(O)?E(O):n(O)}function E(O){return O===45&&i===2?(t.consume(O),X):O===60&&i===1?(t.consume(O),P):O===62&&i===4?(t.consume(O),I):O===63&&i===3?(t.consume(O),o1):O===93&&i===5?(t.consume(O),q):x1(O)&&(i===6||i===7)?t.check(Bw,I,$)(O):O===null||x1(O)?$(O):(t.consume(O),E)}function $(O){return t.exit("htmlFlowData"),j(O)}function j(O){return O===null?C(O):x1(O)?t.attempt({tokenize:G,partial:!0},j,C)(O):(t.enter("htmlFlowData"),E(O))}function G(O,i1,d1){return g1;function g1(F){return O.enter("lineEnding"),O.consume(F),O.exit("lineEnding"),l1}function l1(F){return r.parser.lazy[r.now().line]?d1(F):i1(F)}}function X(O){return O===45?(t.consume(O),o1):E(O)}function P(O){return O===47?(t.consume(O),o="",v1):E(O)}function v1(O){return O===62&&yf.includes(o.toLowerCase())?(t.consume(O),I):i3(O)&&o.length<8?(t.consume(O),o+=String.fromCharCode(O),v1):E(O)}function q(O){return O===93?(t.consume(O),o1):E(O)}function o1(O){return O===62?(t.consume(O),I):O===45&&i===2?(t.consume(O),o1):E(O)}function I(O){return O===null||x1(O)?(t.exit("htmlFlowData"),C(O)):(t.consume(O),I)}function C(O){return t.exit("htmlFlow"),e(O)}}function Iw(t,e,n){return r;function r(i){return t.exit("htmlFlowData"),t.enter("lineEndingBlank"),t.consume(i),t.exit("lineEndingBlank"),t.attempt(v7,e,n)}}const jw={name:"htmlText",tokenize:Fw};function Fw(t,e,n){const r=this;let i,a,o,l;return Q;function Q(C){return t.enter("htmlText"),t.enter("htmlTextData"),t.consume(C),s}function s(C){return C===33?(t.consume(C),u):C===47?(t.consume(C),M):C===63?(t.consume(C),L):i3(C)?(t.consume(C),D):n(C)}function u(C){return C===45?(t.consume(C),T):C===91?(t.consume(C),a="CDATA[",o=0,v):i3(C)?(t.consume(C),x):n(C)}function T(C){return C===45?(t.consume(C),c):n(C)}function c(C){return C===null||C===62?n(C):C===45?(t.consume(C),f):h(C)}function f(C){return C===null||C===62?n(C):h(C)}function h(C){return C===null?n(C):C===45?(t.consume(C),p):x1(C)?(l=h,q(C)):(t.consume(C),h)}function p(C){return C===45?(t.consume(C),I):h(C)}function v(C){return C===a.charCodeAt(o++)?(t.consume(C),o===a.length?d:v):n(C)}function d(C){return C===null?n(C):C===93?(t.consume(C),m):x1(C)?(l=d,q(C)):(t.consume(C),d)}function m(C){return C===93?(t.consume(C),y):d(C)}function y(C){return C===62?I(C):C===93?(t.consume(C),y):d(C)}function x(C){return C===null||C===62?I(C):x1(C)?(l=x,q(C)):(t.consume(C),x)}function L(C){return C===null?n(C):C===63?(t.consume(C),H):x1(C)?(l=L,q(C)):(t.consume(C),L)}function H(C){return C===62?I(C):L(C)}function M(C){return i3(C)?(t.consume(C),w):n(C)}function w(C){return C===45||t3(C)?(t.consume(C),w):S(C)}function S(C){return x1(C)?(l=S,q(C)):t2(C)?(t.consume(C),S):I(C)}function D(C){return C===45||t3(C)?(t.consume(C),D):C===47||C===62||l2(C)?E(C):n(C)}function E(C){return C===47?(t.consume(C),I):C===58||C===95||i3(C)?(t.consume(C),$):x1(C)?(l=E,q(C)):t2(C)?(t.consume(C),E):I(C)}function $(C){return C===45||C===46||C===58||C===95||t3(C)?(t.consume(C),$):j(C)}function j(C){return C===61?(t.consume(C),G):x1(C)?(l=j,q(C)):t2(C)?(t.consume(C),j):E(C)}function G(C){return C===null||C===60||C===61||C===62||C===96?n(C):C===34||C===39?(t.consume(C),i=C,X):x1(C)?(l=G,q(C)):t2(C)?(t.consume(C),G):(t.consume(C),i=void 0,v1)}function X(C){return C===i?(t.consume(C),P):C===null?n(C):x1(C)?(l=X,q(C)):(t.consume(C),X)}function P(C){return C===62||C===47||l2(C)?E(C):n(C)}function v1(C){return C===null||C===34||C===39||C===60||C===61||C===96?n(C):C===62||l2(C)?E(C):(t.consume(C),v1)}function q(C){return t.exit("htmlTextData"),t.enter("lineEnding"),t.consume(C),t.exit("lineEnding"),N1(t,o1,"linePrefix",r.parser.constructs.disable.null.includes("codeIndented")?void 0:4)}function o1(C){return t.enter("htmlTextData"),l(C)}function I(C){return C===62?(t.consume(C),t.exit("htmlTextData"),t.exit("htmlText"),e):n(C)}}const au={name:"labelEnd",tokenize:Xw,resolveTo:Gw,resolveAll:Zw},Rw={tokenize:Ww},zw={tokenize:Uw},qw={tokenize:Kw};function Zw(t){let e=-1,n;for(;++e<t.length;)n=t[e][1],(n.type==="labelImage"||n.type==="labelLink"||n.type==="labelEnd")&&(t.splice(e+1,n.type==="labelImage"?4:2),n.type="data",e++);return t}function Gw(t,e){let n=t.length,r=0,i,a,o,l;for(;n--;)if(i=t[n][1],a){if(i.type==="link"||i.type==="labelLink"&&i._inactive)break;t[n][0]==="enter"&&i.type==="labelLink"&&(i._inactive=!0)}else if(o){if(t[n][0]==="enter"&&(i.type==="labelImage"||i.type==="labelLink")&&!i._balanced&&(a=n,i.type!=="labelLink")){r=2;break}}else i.type==="labelEnd"&&(o=n);const Q={type:t[a][1].type==="labelLink"?"link":"image",start:Object.assign({},t[a][1].start),end:Object.assign({},t[t.length-1][1].end)},s={type:"label",start:Object.assign({},t[a][1].start),end:Object.assign({},t[o][1].end)},u={type:"labelText",start:Object.assign({},t[a+r+2][1].end),end:Object.assign({},t[o-2][1].start)};return l=[["enter",Q,e],["enter",s,e]],l=P3(l,t.slice(a+1,a+r+3)),l=P3(l,[["enter",u,e]]),l=P3(l,q8(e.parser.constructs.insideSpan.null,t.slice(a+r+4,o-3),e)),l=P3(l,[["exit",u,e],t[o-2],t[o-1],["exit",s,e]]),l=P3(l,t.slice(o+1)),l=P3(l,[["exit",Q,e]]),S3(t,a,t.length,l),t}function Xw(t,e,n){const r=this;let i=r.events.length,a,o;for(;i--;)if((r.events[i][1].type==="labelImage"||r.events[i][1].type==="labelLink")&&!r.events[i][1]._balanced){a=r.events[i][1];break}return l;function l(u){return a?a._inactive?s(u):(o=r.parser.defined.includes(o4(r.sliceSerialize({start:a.end,end:r.now()}))),t.enter("labelEnd"),t.enter("labelMarker"),t.consume(u),t.exit("labelMarker"),t.exit("labelEnd"),Q):n(u)}function Q(u){return u===40?t.attempt(Rw,e,o?e:s)(u):u===91?t.attempt(zw,e,o?t.attempt(qw,e,s):s)(u):o?e(u):s(u)}function s(u){return a._balanced=!0,n(u)}}function Ww(t,e,n){return r;function r(Q){return t.enter("resource"),t.enter("resourceMarker"),t.consume(Q),t.exit("resourceMarker"),C0(t,i)}function i(Q){return Q===41?l(Q):ig(t,a,n,"resourceDestination","resourceDestinationLiteral","resourceDestinationLiteralMarker","resourceDestinationRaw","resourceDestinationString",32)(Q)}function a(Q){return l2(Q)?C0(t,o)(Q):l(Q)}function o(Q){return Q===34||Q===39||Q===40?og(t,C0(t,l),n,"resourceTitle","resourceTitleMarker","resourceTitleString")(Q):l(Q)}function l(Q){return Q===41?(t.enter("resourceMarker"),t.consume(Q),t.exit("resourceMarker"),t.exit("resource"),e):n(Q)}}function Uw(t,e,n){const r=this;return i;function i(o){return ag.call(r,t,a,n,"reference","referenceMarker","referenceString")(o)}function a(o){return r.parser.defined.includes(o4(r.sliceSerialize(r.events[r.events.length-1][1]).slice(1,-1)))?e(o):n(o)}}function Kw(t,e,n){return r;function r(a){return t.enter("reference"),t.enter("referenceMarker"),t.consume(a),t.exit("referenceMarker"),i}function i(a){return a===93?(t.enter("referenceMarker"),t.consume(a),t.exit("referenceMarker"),t.exit("reference"),e):n(a)}}const Yw={name:"labelStartImage",tokenize:Jw,resolveAll:au.resolveAll};function Jw(t,e,n){const r=this;return i;function i(l){return t.enter("labelImage"),t.enter("labelImageMarker"),t.consume(l),t.exit("labelImageMarker"),a}function a(l){return l===91?(t.enter("labelMarker"),t.consume(l),t.exit("labelMarker"),t.exit("labelImage"),o):n(l)}function o(l){return l===94&&"_hiddenFootnoteSupport"in r.parser.constructs?n(l):e(l)}}const tS={name:"labelStartLink",tokenize:eS,resolveAll:au.resolveAll};function eS(t,e,n){const r=this;return i;function i(o){return t.enter("labelLink"),t.enter("labelMarker"),t.consume(o),t.exit("labelMarker"),t.exit("labelLink"),a}function a(o){return o===94&&"_hiddenFootnoteSupport"in r.parser.constructs?n(o):e(o)}}const to={name:"lineEnding",tokenize:nS};function nS(t,e){return n;function n(r){return t.enter("lineEnding"),t.consume(r),t.exit("lineEnding"),N1(t,e,"linePrefix")}}const gr={name:"thematicBreak",tokenize:rS};function rS(t,e,n){let r=0,i;return a;function a(Q){return t.enter("thematicBreak"),i=Q,o(Q)}function o(Q){return Q===i?(t.enter("thematicBreakSequence"),l(Q)):t2(Q)?N1(t,o,"whitespace")(Q):r<3||Q!==null&&!x1(Q)?n(Q):(t.exit("thematicBreak"),e(Q))}function l(Q){return Q===i?(t.consume(Q),r++,l):(t.exit("thematicBreakSequence"),o(Q))}}const c3={name:"list",tokenize:oS,continuation:{tokenize:lS},exit:sS},iS={tokenize:uS,partial:!0},aS={tokenize:QS,partial:!0};function oS(t,e,n){const r=this,i=r.events[r.events.length-1];let a=i&&i[1].type==="linePrefix"?i[2].sliceSerialize(i[1],!0).length:0,o=0;return l;function l(f){const h=r.containerState.type||(f===42||f===43||f===45?"listUnordered":"listOrdered");if(h==="listUnordered"?!r.containerState.marker||f===r.containerState.marker:cQ(f)){if(r.containerState.type||(r.containerState.type=h,t.enter(h,{_container:!0})),h==="listUnordered")return t.enter("listItemPrefix"),f===42||f===45?t.check(gr,n,s)(f):s(f);if(!r.interrupt||f===49)return t.enter("listItemPrefix"),t.enter("listItemValue"),Q(f)}return n(f)}function Q(f){return cQ(f)&&++o<10?(t.consume(f),Q):(!r.interrupt||o<2)&&(r.containerState.marker?f===r.containerState.marker:f===41||f===46)?(t.exit("listItemValue"),s(f)):n(f)}function s(f){return t.enter("listItemMarker"),t.consume(f),t.exit("listItemMarker"),r.containerState.marker=r.containerState.marker||f,t.check(v7,r.interrupt?n:u,t.attempt(iS,c,T))}function u(f){return r.containerState.initialBlankLine=!0,a++,c(f)}function T(f){return t2(f)?(t.enter("listItemPrefixWhitespace"),t.consume(f),t.exit("listItemPrefixWhitespace"),c):n(f)}function c(f){return r.containerState.size=a+r.sliceSerialize(t.exit("listItemPrefix"),!0).length,e(f)}}function lS(t,e,n){const r=this;return r.containerState._closeFlow=void 0,t.check(v7,i,a);function i(l){return r.containerState.furtherBlankLines=r.containerState.furtherBlankLines||r.containerState.initialBlankLine,N1(t,e,"listItemIndent",r.containerState.size+1)(l)}function a(l){return r.containerState.furtherBlankLines||!t2(l)?(r.containerState.furtherBlankLines=void 0,r.containerState.initialBlankLine=void 0,o(l)):(r.containerState.furtherBlankLines=void 0,r.containerState.initialBlankLine=void 0,t.attempt(aS,e,o)(l))}function o(l){return r.containerState._closeFlow=!0,r.interrupt=void 0,N1(t,t.attempt(c3,e,n),"linePrefix",r.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(l)}}function QS(t,e,n){const r=this;return N1(t,i,"listItemIndent",r.containerState.size+1);function i(a){const o=r.events[r.events.length-1];return o&&o[1].type==="listItemIndent"&&o[2].sliceSerialize(o[1],!0).length===r.containerState.size?e(a):n(a)}}function sS(t){t.exit(this.containerState.type)}function uS(t,e,n){const r=this;return N1(t,i,"listItemPrefixWhitespace",r.parser.constructs.disable.null.includes("codeIndented")?void 0:4+1);function i(a){const o=r.events[r.events.length-1];return!t2(a)&&o&&o[1].type==="listItemPrefixWhitespace"?e(a):n(a)}}const gf={name:"setextUnderline",tokenize:cS,resolveTo:TS};function TS(t,e){let n=t.length,r,i,a;for(;n--;)if(t[n][0]==="enter"){if(t[n][1].type==="content"){r=n;break}t[n][1].type==="paragraph"&&(i=n)}else t[n][1].type==="content"&&t.splice(n,1),!a&&t[n][1].type==="definition"&&(a=n);const o={type:"setextHeading",start:Object.assign({},t[i][1].start),end:Object.assign({},t[t.length-1][1].end)};return t[i][1].type="setextHeadingText",a?(t.splice(i,0,["enter",o,e]),t.splice(a+1,0,["exit",t[r][1],e]),t[r][1].end=Object.assign({},t[a][1].end)):t[r][1]=o,t.push(["exit",o,e]),t}function cS(t,e,n){const r=this;let i=r.events.length,a,o;for(;i--;)if(r.events[i][1].type!=="lineEnding"&&r.events[i][1].type!=="linePrefix"&&r.events[i][1].type!=="content"){o=r.events[i][1].type==="paragraph";break}return l;function l(u){return!r.parser.lazy[r.now().line]&&(r.interrupt||o)?(t.enter("setextHeadingLine"),t.enter("setextHeadingLineSequence"),a=u,Q(u)):n(u)}function Q(u){return u===a?(t.consume(u),Q):(t.exit("setextHeadingLineSequence"),N1(t,s,"lineSuffix")(u))}function s(u){return u===null||x1(u)?(t.exit("setextHeadingLine"),e(u)):n(u)}}const fS={tokenize:hS};function hS(t){const e=this,n=t.attempt(v7,r,t.attempt(this.parser.constructs.flowInitial,i,N1(t,t.attempt(this.parser.constructs.flow,i,t.attempt(xw,i)),"linePrefix")));return n;function r(a){if(a===null){t.consume(a);return}return t.enter("lineEndingBlank"),t.consume(a),t.exit("lineEndingBlank"),e.currentConstruct=void 0,n}function i(a){if(a===null){t.consume(a);return}return t.enter("lineEnding"),t.consume(a),t.exit("lineEnding"),e.currentConstruct=void 0,n}}const dS={resolveAll:Qg()},pS=lg("string"),mS=lg("text");function lg(t){return{tokenize:e,resolveAll:Qg(t==="text"?vS:void 0)};function e(n){const r=this,i=this.parser.constructs[t],a=n.attempt(i,o,l);return o;function o(u){return s(u)?a(u):l(u)}function l(u){if(u===null){n.consume(u);return}return n.enter("data"),n.consume(u),Q}function Q(u){return s(u)?(n.exit("data"),a(u)):(n.consume(u),Q)}function s(u){if(u===null)return!0;const T=i[u];let c=-1;if(T)for(;++c<T.length;){const f=T[c];if(!f.previous||f.previous.call(r,r.previous))return!0}return!1}}}function Qg(t){return e;function e(n,r){let i=-1,a;for(;++i<=n.length;)a===void 0?n[i]&&n[i][1].type==="data"&&(a=i,i++):(!n[i]||n[i][1].type!=="data")&&(i!==a+2&&(n[a][1].end=n[i-1][1].end,n.splice(a+2,i-a-2),i=a+2),a=void 0);return t?t(n,r):n}}function vS(t,e){let n=0;for(;++n<=t.length;)if((n===t.length||t[n][1].type==="lineEnding")&&t[n-1][1].type==="data"){const r=t[n-1][1],i=e.sliceStream(r);let a=i.length,o=-1,l=0,Q;for(;a--;){const s=i[a];if(typeof s=="string"){for(o=s.length;s.charCodeAt(o-1)===32;)l++,o--;if(o)break;o=-1}else if(s===-2)Q=!0,l++;else if(s!==-1){a++;break}}if(l){const s={type:n===t.length||Q||l<2?"lineSuffix":"hardBreakTrailing",start:{line:r.end.line,column:r.end.column-l,offset:r.end.offset-l,_index:r.start._index+a,_bufferIndex:a?o:r.start._bufferIndex+o},end:Object.assign({},r.end)};r.end=Object.assign({},s.start),r.start.offset===r.end.offset?Object.assign(r,s):(t.splice(n,0,["enter",s,e],["exit",s,e]),n+=2)}n++}return t}function yS(t,e,n){let r=Object.assign(n?Object.assign({},n):{line:1,column:1,offset:0},{_index:0,_bufferIndex:-1});const i={},a=[];let o=[],l=[];const Q={consume:m,enter:y,exit:x,attempt:M(L),check:M(H),interrupt:M(H,{interrupt:!0})},s={previous:null,code:null,containerState:{},events:[],parser:t,sliceStream:f,sliceSerialize:c,now:h,defineSkip:p,write:T};let u=e.tokenize.call(s,Q);return e.resolveAll&&a.push(e),s;function T(E){return o=P3(o,E),v(),o[o.length-1]!==null?[]:(w(e,0),s.events=q8(a,s.events,s),s.events)}function c(E,$){return xS(f(E),$)}function f(E){return gS(o,E)}function h(){return Object.assign({},r)}function p(E){i[E.line]=E.column,D()}function v(){let E;for(;r._index<o.length;){const $=o[r._index];if(typeof $=="string")for(E=r._index,r._bufferIndex<0&&(r._bufferIndex=0);r._index===E&&r._bufferIndex<$.length;)d($.charCodeAt(r._bufferIndex));else d($)}}function d(E){u=u(E)}function m(E){x1(E)?(r.line++,r.column=1,r.offset+=E===-3?2:1,D()):E!==-1&&(r.column++,r.offset++),r._bufferIndex<0?r._index++:(r._bufferIndex++,r._bufferIndex===o[r._index].length&&(r._bufferIndex=-1,r._index++)),s.previous=E}function y(E,$){const j=$||{};return j.type=E,j.start=h(),s.events.push(["enter",j,s]),l.push(j),j}function x(E){const $=l.pop();return $.end=h(),s.events.push(["exit",$,s]),$}function L(E,$){w(E,$.from)}function H(E,$){$.restore()}function M(E,$){return j;function j(G,X,P){let v1,q,o1,I;return Array.isArray(G)?O(G):"tokenize"in G?O([G]):C(G);function C(l1){return F;function F(z){const Q1=z!==null&&l1[z],f1=z!==null&&l1.null,T1=[...Array.isArray(Q1)?Q1:Q1?[Q1]:[],...Array.isArray(f1)?f1:f1?[f1]:[]];return O(T1)(z)}}function O(l1){return v1=l1,q=0,l1.length===0?P:i1(l1[q])}function i1(l1){return F;function F(z){return I=S(),o1=l1,l1.partial||(s.currentConstruct=l1),l1.name&&s.parser.constructs.disable.null.includes(l1.name)?g1():l1.tokenize.call($?Object.assign(Object.create(s),$):s,Q,d1,g1)(z)}}function d1(l1){return E(o1,I),X}function g1(l1){return I.restore(),++q<v1.length?i1(v1[q]):P}}}function w(E,$){E.resolveAll&&!a.includes(E)&&a.push(E),E.resolve&&S3(s.events,$,s.events.length-$,E.resolve(s.events.slice($),s)),E.resolveTo&&(s.events=E.resolveTo(s.events,s))}function S(){const E=h(),$=s.previous,j=s.currentConstruct,G=s.events.length,X=Array.from(l);return{restore:P,from:G};function P(){r=E,s.previous=$,s.currentConstruct=j,s.events.length=G,l=X,D()}}function D(){r.line in i&&r.column<2&&(r.column=i[r.line],r.offset+=i[r.line]-1)}}function gS(t,e){const n=e.start._index,r=e.start._bufferIndex,i=e.end._index,a=e.end._bufferIndex;let o;return n===i?o=[t[n].slice(r,a)]:(o=t.slice(n,i),r>-1&&(o[0]=o[0].slice(r)),a>0&&o.push(t[i].slice(0,a))),o}function xS(t,e){let n=-1;const r=[];let i;for(;++n<t.length;){const a=t[n];let o;if(typeof a=="string")o=a;else switch(a){case-5:{o="\r";break}case-4:{o=`
`;break}case-3:{o=`\r
`;break}case-2:{o=e?" ":"	";break}case-1:{if(!e&&i)continue;o=" ";break}default:o=String.fromCharCode(a)}i=a===-2,r.push(o)}return r.join("")}const LS={[42]:c3,[43]:c3,[45]:c3,[48]:c3,[49]:c3,[50]:c3,[51]:c3,[52]:c3,[53]:c3,[54]:c3,[55]:c3,[56]:c3,[57]:c3,[62]:tg},HS={[91]:_w},bS={[-2]:Ja,[-1]:Ja,[32]:Ja},MS={[35]:Ew,[42]:gr,[45]:[gf,gr],[60]:$w,[61]:gf,[95]:gr,[96]:vf,[126]:vf},_S={[38]:ng,[92]:eg},wS={[-5]:to,[-4]:to,[-3]:to,[33]:Yw,[38]:ng,[42]:fQ,[60]:[iw,jw],[91]:tS,[92]:[Vw,eg],[93]:au,[95]:fQ,[96]:pw},SS={null:[fQ,dS]},AS={null:[42,95]},VS={null:[]},CS=Object.freeze(Object.defineProperty({__proto__:null,attentionMarkers:AS,contentInitial:HS,disable:VS,document:LS,flow:MS,flowInitial:bS,insideSpan:SS,string:_S,text:wS},Symbol.toStringTag,{value:"Module"}));function ES(t={}){const e=Jy([CS].concat(t.extensions||[])),n={defined:[],lazy:{},constructs:e,content:r(K_),document:r(J_),flow:r(fS),string:r(pS),text:r(mS)};return n;function r(i){return a;function a(o){return yS(n,i,o)}}}const xf=/[\0\t\n\r]/g;function DS(){let t=1,e="",n=!0,r;return i;function i(a,o,l){const Q=[];let s,u,T,c,f;for(a=e+a.toString(o),T=0,e="",n&&(a.charCodeAt(0)===65279&&T++,n=void 0);T<a.length;){if(xf.lastIndex=T,s=xf.exec(a),c=s&&s.index!==void 0?s.index:a.length,f=a.charCodeAt(c),!s){e=a.slice(T);break}if(f===10&&T===c&&r)Q.push(-3),r=void 0;else switch(r&&(Q.push(-5),r=void 0),T<c&&(Q.push(a.slice(T,c)),t+=c-T),f){case 0:{Q.push(65533),t++;break}case 9:{for(u=Math.ceil(t/4)*4,Q.push(-2);t++<u;)Q.push(-1);break}case 10:{Q.push(-4),t=1;break}default:r=!0,t=1}T=c+1}return l&&(r&&Q.push(-5),e&&Q.push(e),Q.push(null)),Q}}function OS(t){for(;!rg(t););return t}function sg(t,e){const n=Number.parseInt(t,e);return n<9||n===11||n>13&&n<32||n>126&&n<160||n>55295&&n<57344||n>64975&&n<65008||(n&65535)===65535||(n&65535)===65534||n>1114111?"�":String.fromCharCode(n)}const kS=/\\([!-/:-@[-`{-~])|&(#(?:\d{1,7}|x[\da-f]{1,6})|[\da-z]{1,31});/gi;function ug(t){return t.replace(kS,$S)}function $S(t,e,n){if(e)return e;if(n.charCodeAt(0)===35){const i=n.charCodeAt(1),a=i===120||i===88;return sg(n.slice(a?2:1),a?16:10)}return iu(n)||t}const Tg={}.hasOwnProperty,BS=function(t,e,n){return typeof e!="string"&&(n=e,e=void 0),PS(n)(OS(ES(n).document().write(DS()(t,e,!0))))};function PS(t){const e={transforms:[],canContainEols:["emphasis","fragment","heading","paragraph","strong"],enter:{autolink:l(et),autolinkProtocol:E,autolinkEmail:E,atxHeading:l(R1),blockQuote:l(T1),characterEscape:E,characterReference:E,codeFenced:l(A1),codeFencedFenceInfo:Q,codeFencedFenceMeta:Q,codeIndented:l(A1,Q),codeText:l(p1,Q),codeTextData:E,data:E,codeFlowValue:E,definition:l(m1),definitionDestinationString:Q,definitionLabelString:Q,definitionTitleString:Q,emphasis:l(H1),hardBreakEscape:l(M2),hardBreakTrailing:l(M2),htmlFlow:l(X1,Q),htmlFlowData:E,htmlText:l(X1,Q),htmlTextData:E,image:l(W2),label:Q,link:l(et),listItem:l(ya),listItemValue:h,listOrdered:l(B4,f),listUnordered:l(B4),paragraph:l(jH),reference:g1,referenceString:Q,resourceDestinationString:Q,resourceTitleString:Q,setextHeading:l(R1),strong:l(FH),thematicBreak:l(zH)},exit:{atxHeading:u(),atxHeadingSequence:M,autolink:u(),autolinkEmail:f1,autolinkProtocol:Q1,blockQuote:u(),characterEscapeValue:$,characterReferenceMarkerHexadecimal:F,characterReferenceMarkerNumeric:F,characterReferenceValue:z,codeFenced:u(m),codeFencedFence:d,codeFencedFenceInfo:p,codeFencedFenceMeta:v,codeFlowValue:$,codeIndented:u(y),codeText:u(v1),codeTextData:$,data:$,definition:u(),definitionDestinationString:H,definitionLabelString:x,definitionTitleString:L,emphasis:u(),hardBreakEscape:u(G),hardBreakTrailing:u(G),htmlFlow:u(X),htmlFlowData:$,htmlText:u(P),htmlTextData:$,image:u(o1),label:C,labelText:I,lineEnding:j,link:u(q),listItem:u(),listOrdered:u(),listUnordered:u(),paragraph:u(),referenceString:l1,resourceDestinationString:O,resourceTitleString:i1,resource:d1,setextHeading:u(D),setextHeadingLineSequence:S,setextHeadingText:w,strong:u(),thematicBreak:u()}};cg(e,(t||{}).mdastExtensions||[]);const n={};return r;function r(Z){let r1={type:"root",children:[]};const E1={stack:[r1],tokenStack:[],config:e,enter:s,exit:T,buffer:Q,resume:c,setData:a,getData:o},Y1=[];let e2=-1;for(;++e2<Z.length;)if(Z[e2][1].type==="listOrdered"||Z[e2][1].type==="listUnordered")if(Z[e2][0]==="enter")Y1.push(e2);else{const K3=Y1.pop();e2=i(Z,K3,e2)}for(e2=-1;++e2<Z.length;){const K3=e[Z[e2][0]];Tg.call(K3,Z[e2][1].type)&&K3[Z[e2][1].type].call(Object.assign({sliceSerialize:Z[e2][2].sliceSerialize},E1),Z[e2][1])}if(E1.tokenStack.length>0){const K3=E1.tokenStack[E1.tokenStack.length-1];(K3[1]||Lf).call(E1,void 0,K3[0])}for(r1.position={start:g6(Z.length>0?Z[0][1].start:{line:1,column:1,offset:0}),end:g6(Z.length>0?Z[Z.length-2][1].end:{line:1,column:1,offset:0})},e2=-1;++e2<e.transforms.length;)r1=e.transforms[e2](r1)||r1;return r1}function i(Z,r1,E1){let Y1=r1-1,e2=-1,K3=!1,v6,P4,be,Me;for(;++Y1<=E1;){const _2=Z[Y1];if(_2[1].type==="listUnordered"||_2[1].type==="listOrdered"||_2[1].type==="blockQuote"?(_2[0]==="enter"?e2++:e2--,Me=void 0):_2[1].type==="lineEndingBlank"?_2[0]==="enter"&&(v6&&!Me&&!e2&&!be&&(be=Y1),Me=void 0):_2[1].type==="linePrefix"||_2[1].type==="listItemValue"||_2[1].type==="listItemMarker"||_2[1].type==="listItemPrefix"||_2[1].type==="listItemPrefixWhitespace"||(Me=void 0),!e2&&_2[0]==="enter"&&_2[1].type==="listItemPrefix"||e2===-1&&_2[0]==="exit"&&(_2[1].type==="listUnordered"||_2[1].type==="listOrdered")){if(v6){let ga=Y1;for(P4=void 0;ga--;){const N4=Z[ga];if(N4[1].type==="lineEnding"||N4[1].type==="lineEndingBlank"){if(N4[0]==="exit")continue;P4&&(Z[P4][1].type="lineEndingBlank",K3=!0),N4[1].type="lineEnding",P4=ga}else if(!(N4[1].type==="linePrefix"||N4[1].type==="blockQuotePrefix"||N4[1].type==="blockQuotePrefixWhitespace"||N4[1].type==="blockQuoteMarker"||N4[1].type==="listItemIndent"))break}be&&(!P4||be<P4)&&(v6._spread=!0),v6.end=Object.assign({},P4?Z[P4][1].start:_2[1].end),Z.splice(P4||Y1,0,["exit",v6,_2[2]]),Y1++,E1++}_2[1].type==="listItemPrefix"&&(v6={type:"listItem",_spread:!1,start:Object.assign({},_2[1].start)},Z.splice(Y1,0,["enter",v6,_2[2]]),Y1++,E1++,be=void 0,Me=!0)}}return Z[r1][1]._spread=K3,E1}function a(Z,r1){n[Z]=r1}function o(Z){return n[Z]}function l(Z,r1){return E1;function E1(Y1){s.call(this,Z(Y1),Y1),r1&&r1.call(this,Y1)}}function Q(){this.stack.push({type:"fragment",children:[]})}function s(Z,r1,E1){return this.stack[this.stack.length-1].children.push(Z),this.stack.push(Z),this.tokenStack.push([r1,E1]),Z.position={start:g6(r1.start)},Z}function u(Z){return r1;function r1(E1){Z&&Z.call(this,E1),T.call(this,E1)}}function T(Z,r1){const E1=this.stack.pop(),Y1=this.tokenStack.pop();if(Y1)Y1[0].type!==Z.type&&(r1?r1.call(this,Z,Y1[0]):(Y1[1]||Lf).call(this,Z,Y1[0]));else throw new Error("Cannot close `"+Z.type+"` ("+V0({start:Z.start,end:Z.end})+"): it’s not open");return E1.position.end=g6(Z.end),E1}function c(){return z_(this.stack.pop())}function f(){a("expectingFirstListItemValue",!0)}function h(Z){if(o("expectingFirstListItemValue")){const r1=this.stack[this.stack.length-2];r1.start=Number.parseInt(this.sliceSerialize(Z),10),a("expectingFirstListItemValue")}}function p(){const Z=this.resume(),r1=this.stack[this.stack.length-1];r1.lang=Z}function v(){const Z=this.resume(),r1=this.stack[this.stack.length-1];r1.meta=Z}function d(){o("flowCodeInside")||(this.buffer(),a("flowCodeInside",!0))}function m(){const Z=this.resume(),r1=this.stack[this.stack.length-1];r1.value=Z.replace(/^(\r?\n|\r)|(\r?\n|\r)$/g,""),a("flowCodeInside")}function y(){const Z=this.resume(),r1=this.stack[this.stack.length-1];r1.value=Z.replace(/(\r?\n|\r)$/g,"")}function x(Z){const r1=this.resume(),E1=this.stack[this.stack.length-1];E1.label=r1,E1.identifier=o4(this.sliceSerialize(Z)).toLowerCase()}function L(){const Z=this.resume(),r1=this.stack[this.stack.length-1];r1.title=Z}function H(){const Z=this.resume(),r1=this.stack[this.stack.length-1];r1.url=Z}function M(Z){const r1=this.stack[this.stack.length-1];if(!r1.depth){const E1=this.sliceSerialize(Z).length;r1.depth=E1}}function w(){a("setextHeadingSlurpLineEnding",!0)}function S(Z){const r1=this.stack[this.stack.length-1];r1.depth=this.sliceSerialize(Z).charCodeAt(0)===61?1:2}function D(){a("setextHeadingSlurpLineEnding")}function E(Z){const r1=this.stack[this.stack.length-1];let E1=r1.children[r1.children.length-1];(!E1||E1.type!=="text")&&(E1=RH(),E1.position={start:g6(Z.start)},r1.children.push(E1)),this.stack.push(E1)}function $(Z){const r1=this.stack.pop();r1.value+=this.sliceSerialize(Z),r1.position.end=g6(Z.end)}function j(Z){const r1=this.stack[this.stack.length-1];if(o("atHardBreak")){const E1=r1.children[r1.children.length-1];E1.position.end=g6(Z.end),a("atHardBreak");return}!o("setextHeadingSlurpLineEnding")&&e.canContainEols.includes(r1.type)&&(E.call(this,Z),$.call(this,Z))}function G(){a("atHardBreak",!0)}function X(){const Z=this.resume(),r1=this.stack[this.stack.length-1];r1.value=Z}function P(){const Z=this.resume(),r1=this.stack[this.stack.length-1];r1.value=Z}function v1(){const Z=this.resume(),r1=this.stack[this.stack.length-1];r1.value=Z}function q(){const Z=this.stack[this.stack.length-1];if(o("inReference")){const r1=o("referenceType")||"shortcut";Z.type+="Reference",Z.referenceType=r1,delete Z.url,delete Z.title}else delete Z.identifier,delete Z.label;a("referenceType")}function o1(){const Z=this.stack[this.stack.length-1];if(o("inReference")){const r1=o("referenceType")||"shortcut";Z.type+="Reference",Z.referenceType=r1,delete Z.url,delete Z.title}else delete Z.identifier,delete Z.label;a("referenceType")}function I(Z){const r1=this.sliceSerialize(Z),E1=this.stack[this.stack.length-2];E1.label=ug(r1),E1.identifier=o4(r1).toLowerCase()}function C(){const Z=this.stack[this.stack.length-1],r1=this.resume(),E1=this.stack[this.stack.length-1];if(a("inReference",!0),E1.type==="link"){const Y1=Z.children;E1.children=Y1}else E1.alt=r1}function O(){const Z=this.resume(),r1=this.stack[this.stack.length-1];r1.url=Z}function i1(){const Z=this.resume(),r1=this.stack[this.stack.length-1];r1.title=Z}function d1(){a("inReference")}function g1(){a("referenceType","collapsed")}function l1(Z){const r1=this.resume(),E1=this.stack[this.stack.length-1];E1.label=r1,E1.identifier=o4(this.sliceSerialize(Z)).toLowerCase(),a("referenceType","full")}function F(Z){a("characterReferenceType",Z.type)}function z(Z){const r1=this.sliceSerialize(Z),E1=o("characterReferenceType");let Y1;E1?(Y1=sg(r1,E1==="characterReferenceMarkerNumeric"?10:16),a("characterReferenceType")):Y1=iu(r1);const e2=this.stack.pop();e2.value+=Y1,e2.position.end=g6(Z.end)}function Q1(Z){$.call(this,Z);const r1=this.stack[this.stack.length-1];r1.url=this.sliceSerialize(Z)}function f1(Z){$.call(this,Z);const r1=this.stack[this.stack.length-1];r1.url="mailto:"+this.sliceSerialize(Z)}function T1(){return{type:"blockquote",children:[]}}function A1(){return{type:"code",lang:null,meta:null,value:""}}function p1(){return{type:"inlineCode",value:""}}function m1(){return{type:"definition",identifier:"",label:null,title:null,url:""}}function H1(){return{type:"emphasis",children:[]}}function R1(){return{type:"heading",depth:void 0,children:[]}}function M2(){return{type:"break"}}function X1(){return{type:"html",value:""}}function W2(){return{type:"image",title:null,url:"",alt:null}}function et(){return{type:"link",title:null,url:"",children:[]}}function B4(Z){return{type:"list",ordered:Z.type==="listOrdered",start:null,spread:Z._spread,children:[]}}function ya(Z){return{type:"listItem",spread:Z._spread,checked:null,children:[]}}function jH(){return{type:"paragraph",children:[]}}function FH(){return{type:"strong",children:[]}}function RH(){return{type:"text",value:""}}function zH(){return{type:"thematicBreak"}}}function g6(t){return{line:t.line,column:t.column,offset:t.offset}}function cg(t,e){let n=-1;for(;++n<e.length;){const r=e[n];Array.isArray(r)?cg(t,r):NS(t,r)}}function NS(t,e){let n;for(n in e)if(Tg.call(e,n)){if(n==="canContainEols"){const r=e[n];r&&t[n].push(...r)}else if(n==="transforms"){const r=e[n];r&&t[n].push(...r)}else if(n==="enter"||n==="exit"){const r=e[n];r&&Object.assign(t[n],r)}}}function Lf(t,e){throw t?new Error("Cannot close `"+t.type+"` ("+V0({start:t.start,end:t.end})+"): a different token (`"+e.type+"`, "+V0({start:e.start,end:e.end})+") is open"):new Error("Cannot close document, a token (`"+e.type+"`, "+V0({start:e.start,end:e.end})+") is still open")}function IS(t){Object.assign(this,{Parser:n=>{const r=this.data("settings");return BS(n,Object.assign({},r,t,{extensions:this.data("micromarkExtensions")||[],mdastExtensions:this.data("fromMarkdownExtensions")||[]}))}})}function jS(t,e){const n={type:"element",tagName:"blockquote",properties:{},children:t.wrap(t.all(e),!0)};return t.patch(e,n),t.applyData(e,n)}function FS(t,e){const n={type:"element",tagName:"br",properties:{},children:[]};return t.patch(e,n),[t.applyData(e,n),{type:"text",value:`
`}]}function RS(t,e){const n=e.value?e.value+`
`:"",r=e.lang?e.lang.match(/^[^ \t]+(?=[ \t]|$)/):null,i={};r&&(i.className=["language-"+r]);let a={type:"element",tagName:"code",properties:i,children:[{type:"text",value:n}]};return e.meta&&(a.data={meta:e.meta}),t.patch(e,a),a=t.applyData(e,a),a={type:"element",tagName:"pre",properties:{},children:[a]},t.patch(e,a),a}function zS(t,e){const n={type:"element",tagName:"del",properties:{},children:t.all(e)};return t.patch(e,n),t.applyData(e,n)}function qS(t,e){const n={type:"element",tagName:"em",properties:{},children:t.all(e)};return t.patch(e,n),t.applyData(e,n)}function Qe(t){const e=[];let n=-1,r=0,i=0;for(;++n<t.length;){const a=t.charCodeAt(n);let o="";if(a===37&&t3(t.charCodeAt(n+1))&&t3(t.charCodeAt(n+2)))i=2;else if(a<128)/[!#$&-;=?-Z_a-z~]/.test(String.fromCharCode(a))||(o=String.fromCharCode(a));else if(a>55295&&a<57344){const l=t.charCodeAt(n+1);a<56320&&l>56319&&l<57344?(o=String.fromCharCode(a,l),i=1):o="�"}else o=String.fromCharCode(a);o&&(e.push(t.slice(r,n),encodeURIComponent(o)),r=n+i+1,o=""),i&&(n+=i,i=0)}return e.join("")+t.slice(r)}function fg(t,e){const n=String(e.identifier).toUpperCase(),r=Qe(n.toLowerCase()),i=t.footnoteOrder.indexOf(n);let a;i===-1?(t.footnoteOrder.push(n),t.footnoteCounts[n]=1,a=t.footnoteOrder.length):(t.footnoteCounts[n]++,a=i+1);const o=t.footnoteCounts[n],l={type:"element",tagName:"a",properties:{href:"#"+t.clobberPrefix+"fn-"+r,id:t.clobberPrefix+"fnref-"+r+(o>1?"-"+o:""),dataFootnoteRef:!0,ariaDescribedBy:["footnote-label"]},children:[{type:"text",value:String(a)}]};t.patch(e,l);const Q={type:"element",tagName:"sup",properties:{},children:[l]};return t.patch(e,Q),t.applyData(e,Q)}function ZS(t,e){const n=t.footnoteById;let r=1;for(;r in n;)r++;const i=String(r);return n[i]={type:"footnoteDefinition",identifier:i,children:[{type:"paragraph",children:e.children}],position:e.position},fg(t,{type:"footnoteReference",identifier:i,position:e.position})}function GS(t,e){const n={type:"element",tagName:"h"+e.depth,properties:{},children:t.all(e)};return t.patch(e,n),t.applyData(e,n)}function XS(t,e){if(t.dangerous){const n={type:"raw",value:e.value};return t.patch(e,n),t.applyData(e,n)}return null}function hg(t,e){const n=e.referenceType;let r="]";if(n==="collapsed"?r+="[]":n==="full"&&(r+="["+(e.label||e.identifier)+"]"),e.type==="imageReference")return{type:"text",value:"!["+e.alt+r};const i=t.all(e),a=i[0];a&&a.type==="text"?a.value="["+a.value:i.unshift({type:"text",value:"["});const o=i[i.length-1];return o&&o.type==="text"?o.value+=r:i.push({type:"text",value:r}),i}function WS(t,e){const n=t.definition(e.identifier);if(!n)return hg(t,e);const r={src:Qe(n.url||""),alt:e.alt};n.title!==null&&n.title!==void 0&&(r.title=n.title);const i={type:"element",tagName:"img",properties:r,children:[]};return t.patch(e,i),t.applyData(e,i)}function US(t,e){const n={src:Qe(e.url)};e.alt!==null&&e.alt!==void 0&&(n.alt=e.alt),e.title!==null&&e.title!==void 0&&(n.title=e.title);const r={type:"element",tagName:"img",properties:n,children:[]};return t.patch(e,r),t.applyData(e,r)}function KS(t,e){const n={type:"text",value:e.value.replace(/\r?\n|\r/g," ")};t.patch(e,n);const r={type:"element",tagName:"code",properties:{},children:[n]};return t.patch(e,r),t.applyData(e,r)}function YS(t,e){const n=t.definition(e.identifier);if(!n)return hg(t,e);const r={href:Qe(n.url||"")};n.title!==null&&n.title!==void 0&&(r.title=n.title);const i={type:"element",tagName:"a",properties:r,children:t.all(e)};return t.patch(e,i),t.applyData(e,i)}function JS(t,e){const n={href:Qe(e.url)};e.title!==null&&e.title!==void 0&&(n.title=e.title);const r={type:"element",tagName:"a",properties:n,children:t.all(e)};return t.patch(e,r),t.applyData(e,r)}function tA(t,e,n){const r=t.all(e),i=n?eA(n):dg(e),a={},o=[];if(typeof e.checked=="boolean"){const u=r[0];let T;u&&u.type==="element"&&u.tagName==="p"?T=u:(T={type:"element",tagName:"p",properties:{},children:[]},r.unshift(T)),T.children.length>0&&T.children.unshift({type:"text",value:" "}),T.children.unshift({type:"element",tagName:"input",properties:{type:"checkbox",checked:e.checked,disabled:!0},children:[]}),a.className=["task-list-item"]}let l=-1;for(;++l<r.length;){const u=r[l];(i||l!==0||u.type!=="element"||u.tagName!=="p")&&o.push({type:"text",value:`
`}),u.type==="element"&&u.tagName==="p"&&!i?o.push(...u.children):o.push(u)}const Q=r[r.length-1];Q&&(i||Q.type!=="element"||Q.tagName!=="p")&&o.push({type:"text",value:`
`});const s={type:"element",tagName:"li",properties:a,children:o};return t.patch(e,s),t.applyData(e,s)}function eA(t){let e=!1;if(t.type==="list"){e=t.spread||!1;const n=t.children;let r=-1;for(;!e&&++r<n.length;)e=dg(n[r])}return e}function dg(t){const e=t.spread;return e??t.children.length>1}function nA(t,e){const n={},r=t.all(e);let i=-1;for(typeof e.start=="number"&&e.start!==1&&(n.start=e.start);++i<r.length;){const o=r[i];if(o.type==="element"&&o.tagName==="li"&&o.properties&&Array.isArray(o.properties.className)&&o.properties.className.includes("task-list-item")){n.className=["contains-task-list"];break}}const a={type:"element",tagName:e.ordered?"ol":"ul",properties:n,children:t.wrap(r,!0)};return t.patch(e,a),t.applyData(e,a)}function rA(t,e){const n={type:"element",tagName:"p",properties:{},children:t.all(e)};return t.patch(e,n),t.applyData(e,n)}function iA(t,e){const n={type:"root",children:t.wrap(t.all(e))};return t.patch(e,n),t.applyData(e,n)}function aA(t,e){const n={type:"element",tagName:"strong",properties:{},children:t.all(e)};return t.patch(e,n),t.applyData(e,n)}const ou=pg("start"),lu=pg("end");function oA(t){return{start:ou(t),end:lu(t)}}function pg(t){return e;function e(n){const r=n&&n.position&&n.position[t]||{};return{line:r.line||null,column:r.column||null,offset:r.offset>-1?r.offset:null}}}function lA(t,e){const n=t.all(e),r=n.shift(),i=[];if(r){const o={type:"element",tagName:"thead",properties:{},children:t.wrap([r],!0)};t.patch(e.children[0],o),i.push(o)}if(n.length>0){const o={type:"element",tagName:"tbody",properties:{},children:t.wrap(n,!0)},l=ou(e.children[1]),Q=lu(e.children[e.children.length-1]);l.line&&Q.line&&(o.position={start:l,end:Q}),i.push(o)}const a={type:"element",tagName:"table",properties:{},children:t.wrap(i,!0)};return t.patch(e,a),t.applyData(e,a)}function QA(t,e,n){const r=n?n.children:void 0,a=(r?r.indexOf(e):1)===0?"th":"td",o=n&&n.type==="table"?n.align:void 0,l=o?o.length:e.children.length;let Q=-1;const s=[];for(;++Q<l;){const T=e.children[Q],c={},f=o?o[Q]:void 0;f&&(c.align=f);let h={type:"element",tagName:a,properties:c,children:[]};T&&(h.children=t.all(T),t.patch(T,h),h=t.applyData(e,h)),s.push(h)}const u={type:"element",tagName:"tr",properties:{},children:t.wrap(s,!0)};return t.patch(e,u),t.applyData(e,u)}function sA(t,e){const n={type:"element",tagName:"td",properties:{},children:t.all(e)};return t.patch(e,n),t.applyData(e,n)}const Hf=9,bf=32;function uA(t){const e=String(t),n=/\r?\n|\r/g;let r=n.exec(e),i=0;const a=[];for(;r;)a.push(Mf(e.slice(i,r.index),i>0,!0),r[0]),i=r.index+r[0].length,r=n.exec(e);return a.push(Mf(e.slice(i),i>0,!1)),a.join("")}function Mf(t,e,n){let r=0,i=t.length;if(e){let a=t.codePointAt(r);for(;a===Hf||a===bf;)r++,a=t.codePointAt(r)}if(n){let a=t.codePointAt(i-1);for(;a===Hf||a===bf;)i--,a=t.codePointAt(i-1)}return i>r?t.slice(r,i):""}function TA(t,e){const n={type:"text",value:uA(String(e.value))};return t.patch(e,n),t.applyData(e,n)}function cA(t,e){const n={type:"element",tagName:"hr",properties:{},children:[]};return t.patch(e,n),t.applyData(e,n)}const fA={blockquote:jS,break:FS,code:RS,delete:zS,emphasis:qS,footnoteReference:fg,footnote:ZS,heading:GS,html:XS,imageReference:WS,image:US,inlineCode:KS,linkReference:YS,link:JS,listItem:tA,list:nA,paragraph:rA,root:iA,strong:aA,table:lA,tableCell:sA,tableRow:QA,text:TA,thematicBreak:cA,toml:Ln,yaml:Ln,definition:Ln,footnoteDefinition:Ln};function Ln(){return null}const Z8=function(t){if(t==null)return mA;if(typeof t=="string")return pA(t);if(typeof t=="object")return Array.isArray(t)?hA(t):dA(t);if(typeof t=="function")return G8(t);throw new Error("Expected function, string, or object as test")};function hA(t){const e=[];let n=-1;for(;++n<t.length;)e[n]=Z8(t[n]);return G8(r);function r(...i){let a=-1;for(;++a<e.length;)if(e[a].call(this,...i))return!0;return!1}}function dA(t){return G8(e);function e(n){let r;for(r in t)if(n[r]!==t[r])return!1;return!0}}function pA(t){return G8(e);function e(n){return n&&n.type===t}}function G8(t){return e;function e(n,...r){return!!(n&&typeof n=="object"&&"type"in n&&t.call(this,n,...r))}}function mA(){return!0}const vA=!0,_f=!1,mg="skip",vg=function(t,e,n,r){typeof e=="function"&&typeof n!="function"&&(r=n,n=e,e=null);const i=Z8(e),a=r?-1:1;o(t,void 0,[])();function o(l,Q,s){const u=l&&typeof l=="object"?l:{};if(typeof u.type=="string"){const c=typeof u.tagName=="string"?u.tagName:typeof u.name=="string"?u.name:void 0;Object.defineProperty(T,"name",{value:"node ("+(l.type+(c?"<"+c+">":""))+")"})}return T;function T(){let c=[],f,h,p;if((!e||i(l,Q,s[s.length-1]||null))&&(c=yA(n(l,s)),c[0]===_f))return c;if(l.children&&c[0]!==mg)for(h=(r?l.children.length:-1)+a,p=s.concat(l);h>-1&&h<l.children.length;){if(f=o(l.children[h],h,p)(),f[0]===_f)return f;h=typeof f[1]=="number"?f[1]:h+a}return c}}};function yA(t){return Array.isArray(t)?t:typeof t=="number"?[vA,t]:[t]}const y7=function(t,e,n,r){typeof e=="function"&&typeof n!="function"&&(r=n,n=e,e=null),vg(t,e,i,r);function i(a,o){const l=o[o.length-1];return n(a,l?l.children.indexOf(a):null,l)}};function gA(t){return!t||!t.position||!t.position.start||!t.position.start.line||!t.position.start.column||!t.position.end||!t.position.end.line||!t.position.end.column}const wf={}.hasOwnProperty;function xA(t){const e=Object.create(null);if(!t||!t.type)throw new Error("mdast-util-definitions expected node");return y7(t,"definition",r=>{const i=Sf(r.identifier);i&&!wf.call(e,i)&&(e[i]=r)}),n;function n(r){const i=Sf(r);return i&&wf.call(e,i)?e[i]:null}}function Sf(t){return String(t||"").toUpperCase()}const Wr={}.hasOwnProperty;function LA(t,e){const n=e||{},r=n.allowDangerousHtml||!1,i={};return o.dangerous=r,o.clobberPrefix=n.clobberPrefix===void 0||n.clobberPrefix===null?"user-content-":n.clobberPrefix,o.footnoteLabel=n.footnoteLabel||"Footnotes",o.footnoteLabelTagName=n.footnoteLabelTagName||"h2",o.footnoteLabelProperties=n.footnoteLabelProperties||{className:["sr-only"]},o.footnoteBackLabel=n.footnoteBackLabel||"Back to content",o.unknownHandler=n.unknownHandler,o.passThrough=n.passThrough,o.handlers={...fA,...n.handlers},o.definition=xA(t),o.footnoteById=i,o.footnoteOrder=[],o.footnoteCounts={},o.patch=HA,o.applyData=bA,o.one=l,o.all=Q,o.wrap=_A,o.augment=a,y7(t,"footnoteDefinition",s=>{const u=String(s.identifier).toUpperCase();Wr.call(i,u)||(i[u]=s)}),o;function a(s,u){if(s&&"data"in s&&s.data){const T=s.data;T.hName&&(u.type!=="element"&&(u={type:"element",tagName:"",properties:{},children:[]}),u.tagName=T.hName),u.type==="element"&&T.hProperties&&(u.properties={...u.properties,...T.hProperties}),"children"in u&&u.children&&T.hChildren&&(u.children=T.hChildren)}if(s){const T="type"in s?s:{position:s};gA(T)||(u.position={start:ou(T),end:lu(T)})}return u}function o(s,u,T,c){return Array.isArray(T)&&(c=T,T={}),a(s,{type:"element",tagName:u,properties:T||{},children:c||[]})}function l(s,u){return yg(o,s,u)}function Q(s){return Qu(o,s)}}function HA(t,e){t.position&&(e.position=oA(t))}function bA(t,e){let n=e;if(t&&t.data){const r=t.data.hName,i=t.data.hChildren,a=t.data.hProperties;typeof r=="string"&&(n.type==="element"?n.tagName=r:n={type:"element",tagName:r,properties:{},children:[]}),n.type==="element"&&a&&(n.properties={...n.properties,...a}),"children"in n&&n.children&&i!==null&&i!==void 0&&(n.children=i)}return n}function yg(t,e,n){const r=e&&e.type;if(!r)throw new Error("Expected node, got `"+e+"`");return Wr.call(t.handlers,r)?t.handlers[r](t,e,n):t.passThrough&&t.passThrough.includes(r)?"children"in e?{...e,children:Qu(t,e)}:e:t.unknownHandler?t.unknownHandler(t,e,n):MA(t,e)}function Qu(t,e){const n=[];if("children"in e){const r=e.children;let i=-1;for(;++i<r.length;){const a=yg(t,r[i],e);if(a){if(i&&r[i-1].type==="break"&&(!Array.isArray(a)&&a.type==="text"&&(a.value=a.value.replace(/^\s+/,"")),!Array.isArray(a)&&a.type==="element")){const o=a.children[0];o&&o.type==="text"&&(o.value=o.value.replace(/^\s+/,""))}Array.isArray(a)?n.push(...a):n.push(a)}}}return n}function MA(t,e){const n=e.data||{},r="value"in e&&!(Wr.call(n,"hProperties")||Wr.call(n,"hChildren"))?{type:"text",value:e.value}:{type:"element",tagName:"div",properties:{},children:Qu(t,e)};return t.patch(e,r),t.applyData(e,r)}function _A(t,e){const n=[];let r=-1;for(e&&n.push({type:"text",value:`
`});++r<t.length;)r&&n.push({type:"text",value:`
`}),n.push(t[r]);return e&&t.length>0&&n.push({type:"text",value:`
`}),n}function wA(t){const e=[];let n=-1;for(;++n<t.footnoteOrder.length;){const r=t.footnoteById[t.footnoteOrder[n]];if(!r)continue;const i=t.all(r),a=String(r.identifier).toUpperCase(),o=Qe(a.toLowerCase());let l=0;const Q=[];for(;++l<=t.footnoteCounts[a];){const T={type:"element",tagName:"a",properties:{href:"#"+t.clobberPrefix+"fnref-"+o+(l>1?"-"+l:""),dataFootnoteBackref:!0,className:["data-footnote-backref"],ariaLabel:t.footnoteBackLabel},children:[{type:"text",value:"↩"}]};l>1&&T.children.push({type:"element",tagName:"sup",children:[{type:"text",value:String(l)}]}),Q.length>0&&Q.push({type:"text",value:" "}),Q.push(T)}const s=i[i.length-1];if(s&&s.type==="element"&&s.tagName==="p"){const T=s.children[s.children.length-1];T&&T.type==="text"?T.value+=" ":s.children.push({type:"text",value:" "}),s.children.push(...Q)}else i.push(...Q);const u={type:"element",tagName:"li",properties:{id:t.clobberPrefix+"fn-"+o},children:t.wrap(i,!0)};t.patch(r,u),e.push(u)}if(e.length!==0)return{type:"element",tagName:"section",properties:{dataFootnotes:!0,className:["footnotes"]},children:[{type:"element",tagName:t.footnoteLabelTagName,properties:{...JSON.parse(JSON.stringify(t.footnoteLabelProperties)),id:"footnote-label"},children:[{type:"text",value:t.footnoteLabel}]},{type:"text",value:`
`},{type:"element",tagName:"ol",properties:{},children:t.wrap(e,!0)},{type:"text",value:`
`}]}}function gg(t,e){const n=LA(t,e),r=n.one(t,null),i=wA(n);return i&&r.children.push({type:"text",value:`
`},i),Array.isArray(r)?{type:"root",children:r}:r}const SA=function(t,e){return t&&"run"in t?VA(t,e):CA(t||e)},AA=SA;function VA(t,e){return(n,r,i)=>{t.run(gg(n,e),r,a=>{i(a)})}}function CA(t){return e=>gg(e,t)}var xg={exports:{}},EA="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",DA=EA,OA=DA;function Lg(){}function Hg(){}Hg.resetWarningCache=Lg;var kA=function(){function t(r,i,a,o,l,Q){if(Q!==OA){var s=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw s.name="Invariant Violation",s}}t.isRequired=t;function e(){return t}var n={array:t,bigint:t,bool:t,func:t,number:t,object:t,string:t,symbol:t,any:t,arrayOf:e,element:t,elementType:t,instanceOf:e,node:t,objectOf:e,oneOf:e,oneOfType:e,shape:e,exact:e,checkPropTypes:Hg,resetWarningCache:Lg};return n.PropTypes=n,n};xg.exports=kA();var $A=xg.exports;const k1=ie($A);class g7{constructor(e,n,r){this.property=e,this.normal=n,r&&(this.space=r)}}g7.prototype.property={};g7.prototype.normal={};g7.prototype.space=null;function bg(t,e){const n={},r={};let i=-1;for(;++i<t.length;)Object.assign(n,t[i].property),Object.assign(r,t[i].normal);return new g7(n,r,e)}function Y0(t){return t.toLowerCase()}class W3{constructor(e,n){this.property=e,this.attribute=n}}W3.prototype.space=null;W3.prototype.boolean=!1;W3.prototype.booleanish=!1;W3.prototype.overloadedBoolean=!1;W3.prototype.number=!1;W3.prototype.commaSeparated=!1;W3.prototype.spaceSeparated=!1;W3.prototype.commaOrSpaceSeparated=!1;W3.prototype.mustUseProperty=!1;W3.prototype.defined=!1;let BA=0;const P1=G5(),C2=G5(),Mg=G5(),t1=G5(),T2=G5(),$t=G5(),H3=G5();function G5(){return 2**++BA}const hQ=Object.freeze(Object.defineProperty({__proto__:null,boolean:P1,booleanish:C2,commaOrSpaceSeparated:H3,commaSeparated:$t,number:t1,overloadedBoolean:Mg,spaceSeparated:T2},Symbol.toStringTag,{value:"Module"})),eo=Object.keys(hQ);class su extends W3{constructor(e,n,r,i){let a=-1;if(super(e,n),Af(this,"space",i),typeof r=="number")for(;++a<eo.length;){const o=eo[a];Af(this,eo[a],(r&hQ[o])===hQ[o])}}}su.prototype.defined=!0;function Af(t,e,n){n&&(t[e]=n)}const PA={}.hasOwnProperty;function se(t){const e={},n={};let r;for(r in t.properties)if(PA.call(t.properties,r)){const i=t.properties[r],a=new su(r,t.transform(t.attributes||{},r),i,t.space);t.mustUseProperty&&t.mustUseProperty.includes(r)&&(a.mustUseProperty=!0),e[r]=a,n[Y0(r)]=r,n[Y0(a.attribute)]=r}return new g7(e,n,t.space)}const _g=se({space:"xlink",transform(t,e){return"xlink:"+e.slice(5).toLowerCase()},properties:{xLinkActuate:null,xLinkArcRole:null,xLinkHref:null,xLinkRole:null,xLinkShow:null,xLinkTitle:null,xLinkType:null}}),wg=se({space:"xml",transform(t,e){return"xml:"+e.slice(3).toLowerCase()},properties:{xmlLang:null,xmlBase:null,xmlSpace:null}});function Sg(t,e){return e in t?t[e]:e}function Ag(t,e){return Sg(t,e.toLowerCase())}const Vg=se({space:"xmlns",attributes:{xmlnsxlink:"xmlns:xlink"},transform:Ag,properties:{xmlns:null,xmlnsXLink:null}}),Cg=se({transform(t,e){return e==="role"?e:"aria-"+e.slice(4).toLowerCase()},properties:{ariaActiveDescendant:null,ariaAtomic:C2,ariaAutoComplete:null,ariaBusy:C2,ariaChecked:C2,ariaColCount:t1,ariaColIndex:t1,ariaColSpan:t1,ariaControls:T2,ariaCurrent:null,ariaDescribedBy:T2,ariaDetails:null,ariaDisabled:C2,ariaDropEffect:T2,ariaErrorMessage:null,ariaExpanded:C2,ariaFlowTo:T2,ariaGrabbed:C2,ariaHasPopup:null,ariaHidden:C2,ariaInvalid:null,ariaKeyShortcuts:null,ariaLabel:null,ariaLabelledBy:T2,ariaLevel:t1,ariaLive:null,ariaModal:C2,ariaMultiLine:C2,ariaMultiSelectable:C2,ariaOrientation:null,ariaOwns:T2,ariaPlaceholder:null,ariaPosInSet:t1,ariaPressed:C2,ariaReadOnly:C2,ariaRelevant:null,ariaRequired:C2,ariaRoleDescription:T2,ariaRowCount:t1,ariaRowIndex:t1,ariaRowSpan:t1,ariaSelected:C2,ariaSetSize:t1,ariaSort:null,ariaValueMax:t1,ariaValueMin:t1,ariaValueNow:t1,ariaValueText:null,role:null}}),NA=se({space:"html",attributes:{acceptcharset:"accept-charset",classname:"class",htmlfor:"for",httpequiv:"http-equiv"},transform:Ag,mustUseProperty:["checked","multiple","muted","selected"],properties:{abbr:null,accept:$t,acceptCharset:T2,accessKey:T2,action:null,allow:null,allowFullScreen:P1,allowPaymentRequest:P1,allowUserMedia:P1,alt:null,as:null,async:P1,autoCapitalize:null,autoComplete:T2,autoFocus:P1,autoPlay:P1,capture:P1,charSet:null,checked:P1,cite:null,className:T2,cols:t1,colSpan:null,content:null,contentEditable:C2,controls:P1,controlsList:T2,coords:t1|$t,crossOrigin:null,data:null,dateTime:null,decoding:null,default:P1,defer:P1,dir:null,dirName:null,disabled:P1,download:Mg,draggable:C2,encType:null,enterKeyHint:null,form:null,formAction:null,formEncType:null,formMethod:null,formNoValidate:P1,formTarget:null,headers:T2,height:t1,hidden:P1,high:t1,href:null,hrefLang:null,htmlFor:T2,httpEquiv:T2,id:null,imageSizes:null,imageSrcSet:null,inputMode:null,integrity:null,is:null,isMap:P1,itemId:null,itemProp:T2,itemRef:T2,itemScope:P1,itemType:T2,kind:null,label:null,lang:null,language:null,list:null,loading:null,loop:P1,low:t1,manifest:null,max:null,maxLength:t1,media:null,method:null,min:null,minLength:t1,multiple:P1,muted:P1,name:null,nonce:null,noModule:P1,noValidate:P1,onAbort:null,onAfterPrint:null,onAuxClick:null,onBeforeMatch:null,onBeforePrint:null,onBeforeUnload:null,onBlur:null,onCancel:null,onCanPlay:null,onCanPlayThrough:null,onChange:null,onClick:null,onClose:null,onContextLost:null,onContextMenu:null,onContextRestored:null,onCopy:null,onCueChange:null,onCut:null,onDblClick:null,onDrag:null,onDragEnd:null,onDragEnter:null,onDragExit:null,onDragLeave:null,onDragOver:null,onDragStart:null,onDrop:null,onDurationChange:null,onEmptied:null,onEnded:null,onError:null,onFocus:null,onFormData:null,onHashChange:null,onInput:null,onInvalid:null,onKeyDown:null,onKeyPress:null,onKeyUp:null,onLanguageChange:null,onLoad:null,onLoadedData:null,onLoadedMetadata:null,onLoadEnd:null,onLoadStart:null,onMessage:null,onMessageError:null,onMouseDown:null,onMouseEnter:null,onMouseLeave:null,onMouseMove:null,onMouseOut:null,onMouseOver:null,onMouseUp:null,onOffline:null,onOnline:null,onPageHide:null,onPageShow:null,onPaste:null,onPause:null,onPlay:null,onPlaying:null,onPopState:null,onProgress:null,onRateChange:null,onRejectionHandled:null,onReset:null,onResize:null,onScroll:null,onScrollEnd:null,onSecurityPolicyViolation:null,onSeeked:null,onSeeking:null,onSelect:null,onSlotChange:null,onStalled:null,onStorage:null,onSubmit:null,onSuspend:null,onTimeUpdate:null,onToggle:null,onUnhandledRejection:null,onUnload:null,onVolumeChange:null,onWaiting:null,onWheel:null,open:P1,optimum:t1,pattern:null,ping:T2,placeholder:null,playsInline:P1,poster:null,preload:null,readOnly:P1,referrerPolicy:null,rel:T2,required:P1,reversed:P1,rows:t1,rowSpan:t1,sandbox:T2,scope:null,scoped:P1,seamless:P1,selected:P1,shape:null,size:t1,sizes:null,slot:null,span:t1,spellCheck:C2,src:null,srcDoc:null,srcLang:null,srcSet:null,start:t1,step:null,style:null,tabIndex:t1,target:null,title:null,translate:null,type:null,typeMustMatch:P1,useMap:null,value:C2,width:t1,wrap:null,align:null,aLink:null,archive:T2,axis:null,background:null,bgColor:null,border:t1,borderColor:null,bottomMargin:t1,cellPadding:null,cellSpacing:null,char:null,charOff:null,classId:null,clear:null,code:null,codeBase:null,codeType:null,color:null,compact:P1,declare:P1,event:null,face:null,frame:null,frameBorder:null,hSpace:t1,leftMargin:t1,link:null,longDesc:null,lowSrc:null,marginHeight:t1,marginWidth:t1,noResize:P1,noHref:P1,noShade:P1,noWrap:P1,object:null,profile:null,prompt:null,rev:null,rightMargin:t1,rules:null,scheme:null,scrolling:C2,standby:null,summary:null,text:null,topMargin:t1,valueType:null,version:null,vAlign:null,vLink:null,vSpace:t1,allowTransparency:null,autoCorrect:null,autoSave:null,disablePictureInPicture:P1,disableRemotePlayback:P1,prefix:null,property:null,results:t1,security:null,unselectable:null}}),IA=se({space:"svg",attributes:{accentHeight:"accent-height",alignmentBaseline:"alignment-baseline",arabicForm:"arabic-form",baselineShift:"baseline-shift",capHeight:"cap-height",className:"class",clipPath:"clip-path",clipRule:"clip-rule",colorInterpolation:"color-interpolation",colorInterpolationFilters:"color-interpolation-filters",colorProfile:"color-profile",colorRendering:"color-rendering",crossOrigin:"crossorigin",dataType:"datatype",dominantBaseline:"dominant-baseline",enableBackground:"enable-background",fillOpacity:"fill-opacity",fillRule:"fill-rule",floodColor:"flood-color",floodOpacity:"flood-opacity",fontFamily:"font-family",fontSize:"font-size",fontSizeAdjust:"font-size-adjust",fontStretch:"font-stretch",fontStyle:"font-style",fontVariant:"font-variant",fontWeight:"font-weight",glyphName:"glyph-name",glyphOrientationHorizontal:"glyph-orientation-horizontal",glyphOrientationVertical:"glyph-orientation-vertical",hrefLang:"hreflang",horizAdvX:"horiz-adv-x",horizOriginX:"horiz-origin-x",horizOriginY:"horiz-origin-y",imageRendering:"image-rendering",letterSpacing:"letter-spacing",lightingColor:"lighting-color",markerEnd:"marker-end",markerMid:"marker-mid",markerStart:"marker-start",navDown:"nav-down",navDownLeft:"nav-down-left",navDownRight:"nav-down-right",navLeft:"nav-left",navNext:"nav-next",navPrev:"nav-prev",navRight:"nav-right",navUp:"nav-up",navUpLeft:"nav-up-left",navUpRight:"nav-up-right",onAbort:"onabort",onActivate:"onactivate",onAfterPrint:"onafterprint",onBeforePrint:"onbeforeprint",onBegin:"onbegin",onCancel:"oncancel",onCanPlay:"oncanplay",onCanPlayThrough:"oncanplaythrough",onChange:"onchange",onClick:"onclick",onClose:"onclose",onCopy:"oncopy",onCueChange:"oncuechange",onCut:"oncut",onDblClick:"ondblclick",onDrag:"ondrag",onDragEnd:"ondragend",onDragEnter:"ondragenter",onDragExit:"ondragexit",onDragLeave:"ondragleave",onDragOver:"ondragover",onDragStart:"ondragstart",onDrop:"ondrop",onDurationChange:"ondurationchange",onEmptied:"onemptied",onEnd:"onend",onEnded:"onended",onError:"onerror",onFocus:"onfocus",onFocusIn:"onfocusin",onFocusOut:"onfocusout",onHashChange:"onhashchange",onInput:"oninput",onInvalid:"oninvalid",onKeyDown:"onkeydown",onKeyPress:"onkeypress",onKeyUp:"onkeyup",onLoad:"onload",onLoadedData:"onloadeddata",onLoadedMetadata:"onloadedmetadata",onLoadStart:"onloadstart",onMessage:"onmessage",onMouseDown:"onmousedown",onMouseEnter:"onmouseenter",onMouseLeave:"onmouseleave",onMouseMove:"onmousemove",onMouseOut:"onmouseout",onMouseOver:"onmouseover",onMouseUp:"onmouseup",onMouseWheel:"onmousewheel",onOffline:"onoffline",onOnline:"ononline",onPageHide:"onpagehide",onPageShow:"onpageshow",onPaste:"onpaste",onPause:"onpause",onPlay:"onplay",onPlaying:"onplaying",onPopState:"onpopstate",onProgress:"onprogress",onRateChange:"onratechange",onRepeat:"onrepeat",onReset:"onreset",onResize:"onresize",onScroll:"onscroll",onSeeked:"onseeked",onSeeking:"onseeking",onSelect:"onselect",onShow:"onshow",onStalled:"onstalled",onStorage:"onstorage",onSubmit:"onsubmit",onSuspend:"onsuspend",onTimeUpdate:"ontimeupdate",onToggle:"ontoggle",onUnload:"onunload",onVolumeChange:"onvolumechange",onWaiting:"onwaiting",onZoom:"onzoom",overlinePosition:"overline-position",overlineThickness:"overline-thickness",paintOrder:"paint-order",panose1:"panose-1",pointerEvents:"pointer-events",referrerPolicy:"referrerpolicy",renderingIntent:"rendering-intent",shapeRendering:"shape-rendering",stopColor:"stop-color",stopOpacity:"stop-opacity",strikethroughPosition:"strikethrough-position",strikethroughThickness:"strikethrough-thickness",strokeDashArray:"stroke-dasharray",strokeDashOffset:"stroke-dashoffset",strokeLineCap:"stroke-linecap",strokeLineJoin:"stroke-linejoin",strokeMiterLimit:"stroke-miterlimit",strokeOpacity:"stroke-opacity",strokeWidth:"stroke-width",tabIndex:"tabindex",textAnchor:"text-anchor",textDecoration:"text-decoration",textRendering:"text-rendering",typeOf:"typeof",underlinePosition:"underline-position",underlineThickness:"underline-thickness",unicodeBidi:"unicode-bidi",unicodeRange:"unicode-range",unitsPerEm:"units-per-em",vAlphabetic:"v-alphabetic",vHanging:"v-hanging",vIdeographic:"v-ideographic",vMathematical:"v-mathematical",vectorEffect:"vector-effect",vertAdvY:"vert-adv-y",vertOriginX:"vert-origin-x",vertOriginY:"vert-origin-y",wordSpacing:"word-spacing",writingMode:"writing-mode",xHeight:"x-height",playbackOrder:"playbackorder",timelineBegin:"timelinebegin"},transform:Sg,properties:{about:H3,accentHeight:t1,accumulate:null,additive:null,alignmentBaseline:null,alphabetic:t1,amplitude:t1,arabicForm:null,ascent:t1,attributeName:null,attributeType:null,azimuth:t1,bandwidth:null,baselineShift:null,baseFrequency:null,baseProfile:null,bbox:null,begin:null,bias:t1,by:null,calcMode:null,capHeight:t1,className:T2,clip:null,clipPath:null,clipPathUnits:null,clipRule:null,color:null,colorInterpolation:null,colorInterpolationFilters:null,colorProfile:null,colorRendering:null,content:null,contentScriptType:null,contentStyleType:null,crossOrigin:null,cursor:null,cx:null,cy:null,d:null,dataType:null,defaultAction:null,descent:t1,diffuseConstant:t1,direction:null,display:null,dur:null,divisor:t1,dominantBaseline:null,download:P1,dx:null,dy:null,edgeMode:null,editable:null,elevation:t1,enableBackground:null,end:null,event:null,exponent:t1,externalResourcesRequired:null,fill:null,fillOpacity:t1,fillRule:null,filter:null,filterRes:null,filterUnits:null,floodColor:null,floodOpacity:null,focusable:null,focusHighlight:null,fontFamily:null,fontSize:null,fontSizeAdjust:null,fontStretch:null,fontStyle:null,fontVariant:null,fontWeight:null,format:null,fr:null,from:null,fx:null,fy:null,g1:$t,g2:$t,glyphName:$t,glyphOrientationHorizontal:null,glyphOrientationVertical:null,glyphRef:null,gradientTransform:null,gradientUnits:null,handler:null,hanging:t1,hatchContentUnits:null,hatchUnits:null,height:null,href:null,hrefLang:null,horizAdvX:t1,horizOriginX:t1,horizOriginY:t1,id:null,ideographic:t1,imageRendering:null,initialVisibility:null,in:null,in2:null,intercept:t1,k:t1,k1:t1,k2:t1,k3:t1,k4:t1,kernelMatrix:H3,kernelUnitLength:null,keyPoints:null,keySplines:null,keyTimes:null,kerning:null,lang:null,lengthAdjust:null,letterSpacing:null,lightingColor:null,limitingConeAngle:t1,local:null,markerEnd:null,markerMid:null,markerStart:null,markerHeight:null,markerUnits:null,markerWidth:null,mask:null,maskContentUnits:null,maskUnits:null,mathematical:null,max:null,media:null,mediaCharacterEncoding:null,mediaContentEncodings:null,mediaSize:t1,mediaTime:null,method:null,min:null,mode:null,name:null,navDown:null,navDownLeft:null,navDownRight:null,navLeft:null,navNext:null,navPrev:null,navRight:null,navUp:null,navUpLeft:null,navUpRight:null,numOctaves:null,observer:null,offset:null,onAbort:null,onActivate:null,onAfterPrint:null,onBeforePrint:null,onBegin:null,onCancel:null,onCanPlay:null,onCanPlayThrough:null,onChange:null,onClick:null,onClose:null,onCopy:null,onCueChange:null,onCut:null,onDblClick:null,onDrag:null,onDragEnd:null,onDragEnter:null,onDragExit:null,onDragLeave:null,onDragOver:null,onDragStart:null,onDrop:null,onDurationChange:null,onEmptied:null,onEnd:null,onEnded:null,onError:null,onFocus:null,onFocusIn:null,onFocusOut:null,onHashChange:null,onInput:null,onInvalid:null,onKeyDown:null,onKeyPress:null,onKeyUp:null,onLoad:null,onLoadedData:null,onLoadedMetadata:null,onLoadStart:null,onMessage:null,onMouseDown:null,onMouseEnter:null,onMouseLeave:null,onMouseMove:null,onMouseOut:null,onMouseOver:null,onMouseUp:null,onMouseWheel:null,onOffline:null,onOnline:null,onPageHide:null,onPageShow:null,onPaste:null,onPause:null,onPlay:null,onPlaying:null,onPopState:null,onProgress:null,onRateChange:null,onRepeat:null,onReset:null,onResize:null,onScroll:null,onSeeked:null,onSeeking:null,onSelect:null,onShow:null,onStalled:null,onStorage:null,onSubmit:null,onSuspend:null,onTimeUpdate:null,onToggle:null,onUnload:null,onVolumeChange:null,onWaiting:null,onZoom:null,opacity:null,operator:null,order:null,orient:null,orientation:null,origin:null,overflow:null,overlay:null,overlinePosition:t1,overlineThickness:t1,paintOrder:null,panose1:null,path:null,pathLength:t1,patternContentUnits:null,patternTransform:null,patternUnits:null,phase:null,ping:T2,pitch:null,playbackOrder:null,pointerEvents:null,points:null,pointsAtX:t1,pointsAtY:t1,pointsAtZ:t1,preserveAlpha:null,preserveAspectRatio:null,primitiveUnits:null,propagate:null,property:H3,r:null,radius:null,referrerPolicy:null,refX:null,refY:null,rel:H3,rev:H3,renderingIntent:null,repeatCount:null,repeatDur:null,requiredExtensions:H3,requiredFeatures:H3,requiredFonts:H3,requiredFormats:H3,resource:null,restart:null,result:null,rotate:null,rx:null,ry:null,scale:null,seed:null,shapeRendering:null,side:null,slope:null,snapshotTime:null,specularConstant:t1,specularExponent:t1,spreadMethod:null,spacing:null,startOffset:null,stdDeviation:null,stemh:null,stemv:null,stitchTiles:null,stopColor:null,stopOpacity:null,strikethroughPosition:t1,strikethroughThickness:t1,string:null,stroke:null,strokeDashArray:H3,strokeDashOffset:null,strokeLineCap:null,strokeLineJoin:null,strokeMiterLimit:t1,strokeOpacity:t1,strokeWidth:null,style:null,surfaceScale:t1,syncBehavior:null,syncBehaviorDefault:null,syncMaster:null,syncTolerance:null,syncToleranceDefault:null,systemLanguage:H3,tabIndex:t1,tableValues:null,target:null,targetX:t1,targetY:t1,textAnchor:null,textDecoration:null,textRendering:null,textLength:null,timelineBegin:null,title:null,transformBehavior:null,type:null,typeOf:H3,to:null,transform:null,u1:null,u2:null,underlinePosition:t1,underlineThickness:t1,unicode:null,unicodeBidi:null,unicodeRange:null,unitsPerEm:t1,values:null,vAlphabetic:t1,vMathematical:t1,vectorEffect:null,vHanging:t1,vIdeographic:t1,version:null,vertAdvY:t1,vertOriginX:t1,vertOriginY:t1,viewBox:null,viewTarget:null,visibility:null,width:null,widths:null,wordSpacing:null,writingMode:null,x:null,x1:null,x2:null,xChannelSelector:null,xHeight:t1,y:null,y1:null,y2:null,yChannelSelector:null,z:null,zoomAndPan:null}}),jA=/^data[-\w.:]+$/i,Vf=/-[a-z]/g,FA=/[A-Z]/g;function Eg(t,e){const n=Y0(e);let r=e,i=W3;if(n in t.normal)return t.property[t.normal[n]];if(n.length>4&&n.slice(0,4)==="data"&&jA.test(e)){if(e.charAt(4)==="-"){const a=e.slice(5).replace(Vf,zA);r="data"+a.charAt(0).toUpperCase()+a.slice(1)}else{const a=e.slice(4);if(!Vf.test(a)){let o=a.replace(FA,RA);o.charAt(0)!=="-"&&(o="-"+o),e="data"+o}}i=su}return new i(r,e)}function RA(t){return"-"+t.toLowerCase()}function zA(t){return t.charAt(1).toUpperCase()}const Cf={classId:"classID",dataType:"datatype",itemId:"itemID",strokeDashArray:"strokeDasharray",strokeDashOffset:"strokeDashoffset",strokeLineCap:"strokeLinecap",strokeLineJoin:"strokeLinejoin",strokeMiterLimit:"strokeMiterlimit",typeOf:"typeof",xLinkActuate:"xlinkActuate",xLinkArcRole:"xlinkArcrole",xLinkHref:"xlinkHref",xLinkRole:"xlinkRole",xLinkShow:"xlinkShow",xLinkTitle:"xlinkTitle",xLinkType:"xlinkType",xmlnsXLink:"xmlnsXlink"},Dg=bg([wg,_g,Vg,Cg,NA],"html"),Og=bg([wg,_g,Vg,Cg,IA],"svg");function qA(t){if(t.allowedElements&&t.disallowedElements)throw new TypeError("Only one of `allowedElements` and `disallowedElements` should be defined");if(t.allowedElements||t.disallowedElements||t.allowElement)return e=>{y7(e,"element",(n,r,i)=>{const a=i;let o;if(t.allowedElements?o=!t.allowedElements.includes(n.tagName):t.disallowedElements&&(o=t.disallowedElements.includes(n.tagName)),!o&&t.allowElement&&typeof r=="number"&&(o=!t.allowElement(n,r,a)),o&&typeof r=="number")return t.unwrapDisallowed&&n.children?a.children.splice(r,1,...n.children):a.children.splice(r,1),r})}}var kg={exports:{}},U1={};/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var uu=Symbol.for("react.element"),Tu=Symbol.for("react.portal"),X8=Symbol.for("react.fragment"),W8=Symbol.for("react.strict_mode"),U8=Symbol.for("react.profiler"),K8=Symbol.for("react.provider"),Y8=Symbol.for("react.context"),ZA=Symbol.for("react.server_context"),J8=Symbol.for("react.forward_ref"),t9=Symbol.for("react.suspense"),e9=Symbol.for("react.suspense_list"),n9=Symbol.for("react.memo"),r9=Symbol.for("react.lazy"),GA=Symbol.for("react.offscreen"),$g;$g=Symbol.for("react.module.reference");function U3(t){if(typeof t=="object"&&t!==null){var e=t.$$typeof;switch(e){case uu:switch(t=t.type,t){case X8:case U8:case W8:case t9:case e9:return t;default:switch(t=t&&t.$$typeof,t){case ZA:case Y8:case J8:case r9:case n9:case K8:return t;default:return e}}case Tu:return e}}}U1.ContextConsumer=Y8;U1.ContextProvider=K8;U1.Element=uu;U1.ForwardRef=J8;U1.Fragment=X8;U1.Lazy=r9;U1.Memo=n9;U1.Portal=Tu;U1.Profiler=U8;U1.StrictMode=W8;U1.Suspense=t9;U1.SuspenseList=e9;U1.isAsyncMode=function(){return!1};U1.isConcurrentMode=function(){return!1};U1.isContextConsumer=function(t){return U3(t)===Y8};U1.isContextProvider=function(t){return U3(t)===K8};U1.isElement=function(t){return typeof t=="object"&&t!==null&&t.$$typeof===uu};U1.isForwardRef=function(t){return U3(t)===J8};U1.isFragment=function(t){return U3(t)===X8};U1.isLazy=function(t){return U3(t)===r9};U1.isMemo=function(t){return U3(t)===n9};U1.isPortal=function(t){return U3(t)===Tu};U1.isProfiler=function(t){return U3(t)===U8};U1.isStrictMode=function(t){return U3(t)===W8};U1.isSuspense=function(t){return U3(t)===t9};U1.isSuspenseList=function(t){return U3(t)===e9};U1.isValidElementType=function(t){return typeof t=="string"||typeof t=="function"||t===X8||t===U8||t===W8||t===t9||t===e9||t===GA||typeof t=="object"&&t!==null&&(t.$$typeof===r9||t.$$typeof===n9||t.$$typeof===K8||t.$$typeof===Y8||t.$$typeof===J8||t.$$typeof===$g||t.getModuleId!==void 0)};U1.typeOf=U3;kg.exports=U1;var XA=kg.exports;const WA=ie(XA);function UA(t){const e=t&&typeof t=="object"&&t.type==="text"?t.value||"":t;return typeof e=="string"&&e.replace(/[ \t\n\f\r]/g,"")===""}function Ef(t){const e=String(t||"").trim();return e?e.split(/[ \t\n\r\f]+/g):[]}function KA(t){return t.join(" ").trim()}function Df(t){const e=[],n=String(t||"");let r=n.indexOf(","),i=0,a=!1;for(;!a;){r===-1&&(r=n.length,a=!0);const o=n.slice(i,r).trim();(o||!a)&&e.push(o),i=r+1,r=n.indexOf(",",i)}return e}function YA(t,e){const n=e||{};return(t[t.length-1]===""?[...t,""]:t).join((n.padRight?" ":"")+","+(n.padLeft===!1?"":" ")).trim()}var cu={exports:{}},Of=/\/\*[^*]*\*+([^/*][^*]*\*+)*\//g,JA=/\n/g,tV=/^\s*/,eV=/^(\*?[-#/*\\\w]+(\[[0-9a-z_-]+\])?)\s*/,nV=/^:\s*/,rV=/^((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^)]*?\)|[^};])+)/,iV=/^[;\s]*/,aV=/^\s+|\s+$/g,oV=`
`,kf="/",$f="*",M5="",lV="comment",QV="declaration",sV=function(t,e){if(typeof t!="string")throw new TypeError("First argument must be a string");if(!t)return[];e=e||{};var n=1,r=1;function i(h){var p=h.match(JA);p&&(n+=p.length);var v=h.lastIndexOf(oV);r=~v?h.length-v:r+h.length}function a(){var h={line:n,column:r};return function(p){return p.position=new o(h),s(),p}}function o(h){this.start=h,this.end={line:n,column:r},this.source=e.source}o.prototype.content=t;function l(h){var p=new Error(e.source+":"+n+":"+r+": "+h);if(p.reason=h,p.filename=e.source,p.line=n,p.column=r,p.source=t,!e.silent)throw p}function Q(h){var p=h.exec(t);if(p){var v=p[0];return i(v),t=t.slice(v.length),p}}function s(){Q(tV)}function u(h){var p;for(h=h||[];p=T();)p!==!1&&h.push(p);return h}function T(){var h=a();if(!(kf!=t.charAt(0)||$f!=t.charAt(1))){for(var p=2;M5!=t.charAt(p)&&($f!=t.charAt(p)||kf!=t.charAt(p+1));)++p;if(p+=2,M5===t.charAt(p-1))return l("End of comment missing");var v=t.slice(2,p-2);return r+=2,i(v),t=t.slice(p),r+=2,h({type:lV,comment:v})}}function c(){var h=a(),p=Q(eV);if(p){if(T(),!Q(nV))return l("property missing ':'");var v=Q(rV),d=h({type:QV,property:Bf(p[0].replace(Of,M5)),value:v?Bf(v[0].replace(Of,M5)):M5});return Q(iV),d}}function f(){var h=[];u(h);for(var p;p=c();)p!==!1&&(h.push(p),u(h));return h}return s(),f()};function Bf(t){return t?t.replace(aV,M5):M5}var uV=sV;function Bg(t,e){var n=null;if(!t||typeof t!="string")return n;for(var r,i=uV(t),a=typeof e=="function",o,l,Q=0,s=i.length;Q<s;Q++)r=i[Q],o=r.property,l=r.value,a?e(o,l,r):l&&(n||(n={}),n[o]=l);return n}cu.exports=Bg;cu.exports.default=Bg;var TV=cu.exports;const cV=ie(TV),dQ={}.hasOwnProperty,fV=new Set(["table","thead","tbody","tfoot","tr"]);function Pg(t,e){const n=[];let r=-1,i;for(;++r<e.children.length;)i=e.children[r],i.type==="element"?n.push(hV(t,i,r,e)):i.type==="text"?(e.type!=="element"||!fV.has(e.tagName)||!UA(i))&&n.push(i.value):i.type==="raw"&&!t.options.skipHtml&&n.push(i.value);return n}function hV(t,e,n,r){const i=t.options,a=i.transformLinkUri===void 0?H_:i.transformLinkUri,o=t.schema,l=e.tagName,Q={};let s=o,u;if(o.space==="html"&&l==="svg"&&(s=Og,t.schema=s),e.properties)for(u in e.properties)dQ.call(e.properties,u)&&pV(Q,u,e.properties[u],t);(l==="ol"||l==="ul")&&t.listDepth++;const T=Pg(t,e);(l==="ol"||l==="ul")&&t.listDepth--,t.schema=o;const c=e.position||{start:{line:null,column:null,offset:null},end:{line:null,column:null,offset:null}},f=i.components&&dQ.call(i.components,l)?i.components[l]:l,h=typeof f=="string"||f===A5.Fragment;if(!WA.isValidElementType(f))throw new TypeError(`Component for name \`${l}\` not defined or is not renderable`);if(Q.key=n,l==="a"&&i.linkTarget&&(Q.target=typeof i.linkTarget=="function"?i.linkTarget(String(Q.href||""),e.children,typeof Q.title=="string"?Q.title:null):i.linkTarget),l==="a"&&a&&(Q.href=a(String(Q.href||""),e.children,typeof Q.title=="string"?Q.title:null)),!h&&l==="code"&&r.type==="element"&&r.tagName!=="pre"&&(Q.inline=!0),!h&&(l==="h1"||l==="h2"||l==="h3"||l==="h4"||l==="h5"||l==="h6")&&(Q.level=Number.parseInt(l.charAt(1),10)),l==="img"&&i.transformImageUri&&(Q.src=i.transformImageUri(String(Q.src||""),String(Q.alt||""),typeof Q.title=="string"?Q.title:null)),!h&&l==="li"&&r.type==="element"){const p=dV(e);Q.checked=p&&p.properties?!!p.properties.checked:null,Q.index=no(r,e),Q.ordered=r.tagName==="ol"}return!h&&(l==="ol"||l==="ul")&&(Q.ordered=l==="ol",Q.depth=t.listDepth),(l==="td"||l==="th")&&(Q.align&&(Q.style||(Q.style={}),Q.style.textAlign=Q.align,delete Q.align),h||(Q.isHeader=l==="th")),!h&&l==="tr"&&r.type==="element"&&(Q.isHeader=r.tagName==="thead"),i.sourcePos&&(Q["data-sourcepos"]=yV(c)),!h&&i.rawSourcePos&&(Q.sourcePosition=e.position),!h&&i.includeElementIndex&&(Q.index=no(r,e),Q.siblingCount=no(r)),h||(Q.node=e),T.length>0?A5.createElement(f,Q,T):A5.createElement(f,Q)}function dV(t){let e=-1;for(;++e<t.children.length;){const n=t.children[e];if(n.type==="element"&&n.tagName==="input")return n}return null}function no(t,e){let n=-1,r=0;for(;++n<t.children.length&&t.children[n]!==e;)t.children[n].type==="element"&&r++;return r}function pV(t,e,n,r){const i=Eg(r.schema,e);let a=n;a==null||a!==a||(Array.isArray(a)&&(a=i.commaSeparated?YA(a):KA(a)),i.property==="style"&&typeof a=="string"&&(a=mV(a)),i.space&&i.property?t[dQ.call(Cf,i.property)?Cf[i.property]:i.property]=a:i.attribute&&(t[i.attribute]=a))}function mV(t){const e={};try{cV(t,n)}catch{}return e;function n(r,i){const a=r.slice(0,4)==="-ms-"?`ms-${r.slice(4)}`:r;e[a.replace(/-([a-z])/g,vV)]=i}}function vV(t,e){return e.toUpperCase()}function yV(t){return[t.start.line,":",t.start.column,"-",t.end.line,":",t.end.column].map(String).join("")}const Pf={}.hasOwnProperty,gV="https://github.com/remarkjs/react-markdown/blob/main/changelog.md",Hn={plugins:{to:"remarkPlugins",id:"change-plugins-to-remarkplugins"},renderers:{to:"components",id:"change-renderers-to-components"},astPlugins:{id:"remove-buggy-html-in-markdown-parser"},allowDangerousHtml:{id:"remove-buggy-html-in-markdown-parser"},escapeHtml:{id:"remove-buggy-html-in-markdown-parser"},source:{to:"children",id:"change-source-to-children"},allowNode:{to:"allowElement",id:"replace-allownode-allowedtypes-and-disallowedtypes"},allowedTypes:{to:"allowedElements",id:"replace-allownode-allowedtypes-and-disallowedtypes"},disallowedTypes:{to:"disallowedElements",id:"replace-allownode-allowedtypes-and-disallowedtypes"},includeNodeIndex:{to:"includeElementIndex",id:"change-includenodeindex-to-includeelementindex"}};function i5(t){for(const a in Hn)if(Pf.call(Hn,a)&&Pf.call(t,a)){const o=Hn[a];console.warn(`[react-markdown] Warning: please ${o.to?`use \`${o.to}\` instead of`:"remove"} \`${a}\` (see <${gV}#${o.id}> for more info)`),delete Hn[a]}const e=N_().use(IS).use(t.remarkPlugins||[]).use(AA,{...t.remarkRehypeOptions,allowDangerousHtml:!0}).use(t.rehypePlugins||[]).use(qA,t),n=new Xy;typeof t.children=="string"?n.value=t.children:t.children!==void 0&&t.children!==null&&console.warn(`[react-markdown] Warning: please pass a string as \`children\` (not: \`${t.children}\`)`);const r=e.runSync(e.parse(n),n);if(r.type!=="root")throw new TypeError("Expected a `root` node");let i=A5.createElement(A5.Fragment,{},Pg({options:t,schema:Dg,listDepth:0},r));return t.className&&(i=A5.createElement("div",{className:t.className},i)),i}i5.propTypes={children:k1.string,className:k1.string,allowElement:k1.func,allowedElements:k1.arrayOf(k1.string),disallowedElements:k1.arrayOf(k1.string),unwrapDisallowed:k1.bool,remarkPlugins:k1.arrayOf(k1.oneOfType([k1.object,k1.func,k1.arrayOf(k1.oneOfType([k1.bool,k1.string,k1.object,k1.func,k1.arrayOf(k1.any)]))])),rehypePlugins:k1.arrayOf(k1.oneOfType([k1.object,k1.func,k1.arrayOf(k1.oneOfType([k1.bool,k1.string,k1.object,k1.func,k1.arrayOf(k1.any)]))])),sourcePos:k1.bool,rawSourcePos:k1.bool,skipHtml:k1.bool,includeElementIndex:k1.bool,transformLinkUri:k1.oneOfType([k1.func,k1.bool]),linkTarget:k1.oneOfType([k1.func,k1.string]),transformImageUri:k1.func,components:k1.object};const xV={tokenize:LV,concrete:!0},Nf={tokenize:HV,partial:!0};function LV(t,e,n){const r=this,i=r.events[r.events.length-1],a=i&&i[1].type==="linePrefix"?i[2].sliceSerialize(i[1],!0).length:0;let o=0;return l;function l(m){return t.enter("mathFlow"),t.enter("mathFlowFence"),t.enter("mathFlowFenceSequence"),Q(m)}function Q(m){return m===36?(t.consume(m),o++,Q):o<2?n(m):(t.exit("mathFlowFenceSequence"),N1(t,s,"whitespace")(m))}function s(m){return m===null||x1(m)?T(m):(t.enter("mathFlowFenceMeta"),t.enter("chunkString",{contentType:"string"}),u(m))}function u(m){return m===null||x1(m)?(t.exit("chunkString"),t.exit("mathFlowFenceMeta"),T(m)):m===36?n(m):(t.consume(m),u)}function T(m){return t.exit("mathFlowFence"),r.interrupt?e(m):t.attempt(Nf,c,v)(m)}function c(m){return t.attempt({tokenize:d,partial:!0},v,f)(m)}function f(m){return(a?N1(t,h,"linePrefix",a+1):h)(m)}function h(m){return m===null?v(m):x1(m)?t.attempt(Nf,c,v)(m):(t.enter("mathFlowValue"),p(m))}function p(m){return m===null||x1(m)?(t.exit("mathFlowValue"),h(m)):(t.consume(m),p)}function v(m){return t.exit("mathFlow"),e(m)}function d(m,y,x){let L=0;return N1(m,H,"linePrefix",4);function H(S){return m.enter("mathFlowFence"),m.enter("mathFlowFenceSequence"),M(S)}function M(S){return S===36?(L++,m.consume(S),M):L<o?x(S):(m.exit("mathFlowFenceSequence"),N1(m,w,"whitespace")(S))}function w(S){return S===null||x1(S)?(m.exit("mathFlowFence"),y(S)):x(S)}}}function HV(t,e,n){const r=this;return i;function i(o){return o===null?e(o):(t.enter("lineEnding"),t.consume(o),t.exit("lineEnding"),a)}function a(o){return r.parser.lazy[r.now().line]?n(o):e(o)}}function bV(t){let n=(t||{}).singleDollarTextMath;return n==null&&(n=!0),{tokenize:r,resolve:MV,previous:_V};function r(i,a,o){let l=0,Q,s;return u;function u(p){return i.enter("mathText"),i.enter("mathTextSequence"),T(p)}function T(p){return p===36?(i.consume(p),l++,T):l<2&&!n?o(p):(i.exit("mathTextSequence"),c(p))}function c(p){return p===null?o(p):p===36?(s=i.enter("mathTextSequence"),Q=0,h(p)):p===32?(i.enter("space"),i.consume(p),i.exit("space"),c):x1(p)?(i.enter("lineEnding"),i.consume(p),i.exit("lineEnding"),c):(i.enter("mathTextData"),f(p))}function f(p){return p===null||p===32||p===36||x1(p)?(i.exit("mathTextData"),c(p)):(i.consume(p),f)}function h(p){return p===36?(i.consume(p),Q++,h):Q===l?(i.exit("mathTextSequence"),i.exit("mathText"),a(p)):(s.type="mathTextData",f(p))}}}function MV(t){let e=t.length-4,n=3,r,i;if((t[n][1].type==="lineEnding"||t[n][1].type==="space")&&(t[e][1].type==="lineEnding"||t[e][1].type==="space")){for(r=n;++r<e;)if(t[r][1].type==="mathTextData"){t[e][1].type="mathTextPadding",t[n][1].type="mathTextPadding",n+=2,e-=2;break}}for(r=n-1,e++;++r<=e;)i===void 0?r!==e&&t[r][1].type!=="lineEnding"&&(i=r):(r===e||t[r][1].type==="lineEnding")&&(t[i][1].type="mathTextData",r!==i+2&&(t[i][1].end=t[r-1][1].end,t.splice(i+2,r-i-2),e-=r-i-2,r=i+2),i=void 0);return t}function _V(t){return t!==36||this.events[this.events.length-1][1].type==="characterEscape"}function wV(t){return{flow:{[36]:xV},text:{[36]:bV(t)}}}class M3{constructor(e,n,r){this.lexer=void 0,this.start=void 0,this.end=void 0,this.lexer=e,this.start=n,this.end=r}static range(e,n){return n?!e||!e.loc||!n.loc||e.loc.lexer!==n.loc.lexer?null:new M3(e.loc.lexer,e.loc.start,n.loc.end):e&&e.loc}}class w4{constructor(e,n){this.text=void 0,this.loc=void 0,this.noexpand=void 0,this.treatAsRelax=void 0,this.text=e,this.loc=n}range(e,n){return new w4(n,M3.range(this,e))}}class J{constructor(e,n){this.position=void 0;var r="KaTeX parse error: "+e,i,a=n&&n.loc;if(a&&a.start<=a.end){var o=a.lexer.input;i=a.start;var l=a.end;i===o.length?r+=" at end of input: ":r+=" at position "+(i+1)+": ";var Q=o.slice(i,l).replace(/[^]/g,"$&̲"),s;i>15?s="…"+o.slice(i-15,i):s=o.slice(0,i);var u;l+15<o.length?u=o.slice(l,l+15)+"…":u=o.slice(l),r+=s+Q+u}var T=new Error(r);return T.name="ParseError",T.__proto__=J.prototype,T.position=i,T}}J.prototype.__proto__=Error.prototype;var SV=function(e,n){return e.indexOf(n)!==-1},AV=function(e,n){return e===void 0?n:e},VV=/([A-Z])/g,CV=function(e){return e.replace(VV,"-$1").toLowerCase()},EV={"&":"&amp;",">":"&gt;","<":"&lt;",'"':"&quot;","'":"&#x27;"},DV=/[&><"']/g;function OV(t){return String(t).replace(DV,e=>EV[e])}var Ng=function t(e){return e.type==="ordgroup"||e.type==="color"?e.body.length===1?t(e.body[0]):e:e.type==="font"?t(e.body):e},kV=function(e){var n=Ng(e);return n.type==="mathord"||n.type==="textord"||n.type==="atom"},$V=function(e){if(!e)throw new Error("Expected non-null, but got "+String(e));return e},BV=function(e){var n=/^\s*([^\\/#]*?)(?::|&#0*58|&#x0*3a)/i.exec(e);return n!=null?n[1]:"_relative"},C1={contains:SV,deflt:AV,escape:OV,hyphenate:CV,getBaseElem:Ng,isCharacterBox:kV,protocolFromUrl:BV},xr={displayMode:{type:"boolean",description:"Render math in display mode, which puts the math in display style (so \\int and \\sum are large, for example), and centers the math on the page on its own line.",cli:"-d, --display-mode"},output:{type:{enum:["htmlAndMathml","html","mathml"]},description:"Determines the markup language of the output.",cli:"-F, --format <type>"},leqno:{type:"boolean",description:"Render display math in leqno style (left-justified tags)."},fleqn:{type:"boolean",description:"Render display math flush left."},throwOnError:{type:"boolean",default:!0,cli:"-t, --no-throw-on-error",cliDescription:"Render errors (in the color given by --error-color) instead of throwing a ParseError exception when encountering an error."},errorColor:{type:"string",default:"#cc0000",cli:"-c, --error-color <color>",cliDescription:"A color string given in the format 'rgb' or 'rrggbb' (no #). This option determines the color of errors rendered by the -t option.",cliProcessor:t=>"#"+t},macros:{type:"object",cli:"-m, --macro <def>",cliDescription:"Define custom macro of the form '\\foo:expansion' (use multiple -m arguments for multiple macros).",cliDefault:[],cliProcessor:(t,e)=>(e.push(t),e)},minRuleThickness:{type:"number",description:"Specifies a minimum thickness, in ems, for fraction lines, `\\sqrt` top lines, `{array}` vertical lines, `\\hline`, `\\hdashline`, `\\underline`, `\\overline`, and the borders of `\\fbox`, `\\boxed`, and `\\fcolorbox`.",processor:t=>Math.max(0,t),cli:"--min-rule-thickness <size>",cliProcessor:parseFloat},colorIsTextColor:{type:"boolean",description:"Makes \\color behave like LaTeX's 2-argument \\textcolor, instead of LaTeX's one-argument \\color mode change.",cli:"-b, --color-is-text-color"},strict:{type:[{enum:["warn","ignore","error"]},"boolean","function"],description:"Turn on strict / LaTeX faithfulness mode, which throws an error if the input uses features that are not supported by LaTeX.",cli:"-S, --strict",cliDefault:!1},trust:{type:["boolean","function"],description:"Trust the input, enabling all HTML features such as \\url.",cli:"-T, --trust"},maxSize:{type:"number",default:1/0,description:"If non-zero, all user-specified sizes, e.g. in \\rule{500em}{500em}, will be capped to maxSize ems. Otherwise, elements and spaces can be arbitrarily large",processor:t=>Math.max(0,t),cli:"-s, --max-size <n>",cliProcessor:parseInt},maxExpand:{type:"number",default:1e3,description:"Limit the number of macro expansions to the specified number, to prevent e.g. infinite macro loops. If set to Infinity, the macro expander will try to fully expand as in LaTeX.",processor:t=>Math.max(0,t),cli:"-e, --max-expand <n>",cliProcessor:t=>t==="Infinity"?1/0:parseInt(t)},globalGroup:{type:"boolean",cli:!1}};function PV(t){if(t.default)return t.default;var e=t.type,n=Array.isArray(e)?e[0]:e;if(typeof n!="string")return n.enum[0];switch(n){case"boolean":return!1;case"string":return"";case"number":return 0;case"object":return{}}}class fu{constructor(e){this.displayMode=void 0,this.output=void 0,this.leqno=void 0,this.fleqn=void 0,this.throwOnError=void 0,this.errorColor=void 0,this.macros=void 0,this.minRuleThickness=void 0,this.colorIsTextColor=void 0,this.strict=void 0,this.trust=void 0,this.maxSize=void 0,this.maxExpand=void 0,this.globalGroup=void 0,e=e||{};for(var n in xr)if(xr.hasOwnProperty(n)){var r=xr[n];this[n]=e[n]!==void 0?r.processor?r.processor(e[n]):e[n]:PV(r)}}reportNonstrict(e,n,r){var i=this.strict;if(typeof i=="function"&&(i=i(e,n,r)),!(!i||i==="ignore")){if(i===!0||i==="error")throw new J("LaTeX-incompatible input and strict mode is set to 'error': "+(n+" ["+e+"]"),r);i==="warn"?typeof console<"u"&&console.warn("LaTeX-incompatible input and strict mode is set to 'warn': "+(n+" ["+e+"]")):typeof console<"u"&&console.warn("LaTeX-incompatible input and strict mode is set to "+("unrecognized '"+i+"': "+n+" ["+e+"]"))}}useStrictBehavior(e,n,r){var i=this.strict;if(typeof i=="function")try{i=i(e,n,r)}catch{i="error"}return!i||i==="ignore"?!1:i===!0||i==="error"?!0:i==="warn"?(typeof console<"u"&&console.warn("LaTeX-incompatible input and strict mode is set to 'warn': "+(n+" ["+e+"]")),!1):(typeof console<"u"&&console.warn("LaTeX-incompatible input and strict mode is set to "+("unrecognized '"+i+"': "+n+" ["+e+"]")),!1)}isTrusted(e){e.url&&!e.protocol&&(e.protocol=C1.protocolFromUrl(e.url));var n=typeof this.trust=="function"?this.trust(e):this.trust;return!!n}}class x6{constructor(e,n,r){this.id=void 0,this.size=void 0,this.cramped=void 0,this.id=e,this.size=n,this.cramped=r}sup(){return x4[NV[this.id]]}sub(){return x4[IV[this.id]]}fracNum(){return x4[jV[this.id]]}fracDen(){return x4[FV[this.id]]}cramp(){return x4[RV[this.id]]}text(){return x4[zV[this.id]]}isTight(){return this.size>=2}}var hu=0,Ur=1,Bt=2,Y4=3,J0=4,j3=5,Zt=6,a3=7,x4=[new x6(hu,0,!1),new x6(Ur,0,!0),new x6(Bt,1,!1),new x6(Y4,1,!0),new x6(J0,2,!1),new x6(j3,2,!0),new x6(Zt,3,!1),new x6(a3,3,!0)],NV=[J0,j3,J0,j3,Zt,a3,Zt,a3],IV=[j3,j3,j3,j3,a3,a3,a3,a3],jV=[Bt,Y4,J0,j3,Zt,a3,Zt,a3],FV=[Y4,Y4,j3,j3,a3,a3,a3,a3],RV=[Ur,Ur,Y4,Y4,j3,j3,a3,a3],zV=[hu,Ur,Bt,Y4,Bt,Y4,Bt,Y4],w1={DISPLAY:x4[hu],TEXT:x4[Bt],SCRIPT:x4[J0],SCRIPTSCRIPT:x4[Zt]},pQ=[{name:"latin",blocks:[[256,591],[768,879]]},{name:"cyrillic",blocks:[[1024,1279]]},{name:"armenian",blocks:[[1328,1423]]},{name:"brahmic",blocks:[[2304,4255]]},{name:"georgian",blocks:[[4256,4351]]},{name:"cjk",blocks:[[12288,12543],[19968,40879],[65280,65376]]},{name:"hangul",blocks:[[44032,55215]]}];function qV(t){for(var e=0;e<pQ.length;e++)for(var n=pQ[e],r=0;r<n.blocks.length;r++){var i=n.blocks[r];if(t>=i[0]&&t<=i[1])return n.name}return null}var Lr=[];pQ.forEach(t=>t.blocks.forEach(e=>Lr.push(...e)));function Ig(t){for(var e=0;e<Lr.length;e+=2)if(t>=Lr[e]&&t<=Lr[e+1])return!0;return!1}var rt=80,ZV=function(e,n){return"M95,"+(622+e+n)+`
c-2.7,0,-7.17,-2.7,-13.5,-8c-5.8,-5.3,-9.5,-10,-9.5,-14
c0,-2,0.3,-3.3,1,-4c1.3,-2.7,23.83,-20.7,67.5,-54
c44.2,-33.3,65.8,-50.3,66.5,-51c1.3,-1.3,3,-2,5,-2c4.7,0,8.7,3.3,12,10
s173,378,173,378c0.7,0,35.3,-71,104,-213c68.7,-142,137.5,-285,206.5,-429
c69,-144,104.5,-217.7,106.5,-221
l`+e/2.075+" -"+e+`
c5.3,-9.3,12,-14,20,-14
H400000v`+(40+e)+`H845.2724
s-225.272,467,-225.272,467s-235,486,-235,486c-2.7,4.7,-9,7,-19,7
c-6,0,-10,-1,-12,-3s-194,-422,-194,-422s-65,47,-65,47z
M`+(834+e)+" "+n+"h400000v"+(40+e)+"h-400000z"},GV=function(e,n){return"M263,"+(601+e+n)+`c0.7,0,18,39.7,52,119
c34,79.3,68.167,158.7,102.5,238c34.3,79.3,51.8,119.3,52.5,120
c340,-704.7,510.7,-1060.3,512,-1067
l`+e/2.084+" -"+e+`
c4.7,-7.3,11,-11,19,-11
H40000v`+(40+e)+`H1012.3
s-271.3,567,-271.3,567c-38.7,80.7,-84,175,-136,283c-52,108,-89.167,185.3,-111.5,232
c-22.3,46.7,-33.8,70.3,-34.5,71c-4.7,4.7,-12.3,7,-23,7s-12,-1,-12,-1
s-109,-253,-109,-253c-72.7,-168,-109.3,-252,-110,-252c-10.7,8,-22,16.7,-34,26
c-22,17.3,-33.3,26,-34,26s-26,-26,-26,-26s76,-59,76,-59s76,-60,76,-60z
M`+(1001+e)+" "+n+"h400000v"+(40+e)+"h-400000z"},XV=function(e,n){return"M983 "+(10+e+n)+`
l`+e/3.13+" -"+e+`
c4,-6.7,10,-10,18,-10 H400000v`+(40+e)+`
H1013.1s-83.4,268,-264.1,840c-180.7,572,-277,876.3,-289,913c-4.7,4.7,-12.7,7,-24,7
s-12,0,-12,0c-1.3,-3.3,-3.7,-11.7,-7,-25c-35.3,-125.3,-106.7,-373.3,-214,-744
c-10,12,-21,25,-33,39s-32,39,-32,39c-6,-5.3,-15,-14,-27,-26s25,-30,25,-30
c26.7,-32.7,52,-63,76,-91s52,-60,52,-60s208,722,208,722
c56,-175.3,126.3,-397.3,211,-666c84.7,-268.7,153.8,-488.2,207.5,-658.5
c53.7,-170.3,84.5,-266.8,92.5,-289.5z
M`+(1001+e)+" "+n+"h400000v"+(40+e)+"h-400000z"},WV=function(e,n){return"M424,"+(2398+e+n)+`
c-1.3,-0.7,-38.5,-172,-111.5,-514c-73,-342,-109.8,-513.3,-110.5,-514
c0,-2,-10.7,14.3,-32,49c-4.7,7.3,-9.8,15.7,-15.5,25c-5.7,9.3,-9.8,16,-12.5,20
s-5,7,-5,7c-4,-3.3,-8.3,-7.7,-13,-13s-13,-13,-13,-13s76,-122,76,-122s77,-121,77,-121
s209,968,209,968c0,-2,84.7,-361.7,254,-1079c169.3,-717.3,254.7,-1077.7,256,-1081
l`+e/4.223+" -"+e+`c4,-6.7,10,-10,18,-10 H400000
v`+(40+e)+`H1014.6
s-87.3,378.7,-272.6,1166c-185.3,787.3,-279.3,1182.3,-282,1185
c-2,6,-10,9,-24,9
c-8,0,-12,-0.7,-12,-2z M`+(1001+e)+" "+n+`
h400000v`+(40+e)+"h-400000z"},UV=function(e,n){return"M473,"+(2713+e+n)+`
c339.3,-1799.3,509.3,-2700,510,-2702 l`+e/5.298+" -"+e+`
c3.3,-7.3,9.3,-11,18,-11 H400000v`+(40+e)+`H1017.7
s-90.5,478,-276.2,1466c-185.7,988,-279.5,1483,-281.5,1485c-2,6,-10,9,-24,9
c-8,0,-12,-0.7,-12,-2c0,-1.3,-5.3,-32,-16,-92c-50.7,-293.3,-119.7,-693.3,-207,-1200
c0,-1.3,-5.3,8.7,-16,30c-10.7,21.3,-21.3,42.7,-32,64s-16,33,-16,33s-26,-26,-26,-26
s76,-153,76,-153s77,-151,77,-151c0.7,0.7,35.7,202,105,604c67.3,400.7,102,602.7,104,
606zM`+(1001+e)+" "+n+"h400000v"+(40+e)+"H1017.7z"},KV=function(e){var n=e/2;return"M400000 "+e+" H0 L"+n+" 0 l65 45 L145 "+(e-80)+" H400000z"},YV=function(e,n,r){var i=r-54-n-e;return"M702 "+(e+n)+"H400000"+(40+e)+`
H742v`+i+`l-4 4-4 4c-.667.7 -2 1.5-4 2.5s-4.167 1.833-6.5 2.5-5.5 1-9.5 1
h-12l-28-84c-16.667-52-96.667 -294.333-240-727l-212 -643 -85 170
c-4-3.333-8.333-7.667-13 -13l-13-13l77-155 77-156c66 199.333 139 419.667
219 661 l218 661zM702 `+n+"H400000v"+(40+e)+"H742z"},JV=function(e,n,r){n=1e3*n;var i="";switch(e){case"sqrtMain":i=ZV(n,rt);break;case"sqrtSize1":i=GV(n,rt);break;case"sqrtSize2":i=XV(n,rt);break;case"sqrtSize3":i=WV(n,rt);break;case"sqrtSize4":i=UV(n,rt);break;case"sqrtTall":i=YV(n,rt,r)}return i},tC=function(e,n){switch(e){case"⎜":return"M291 0 H417 V"+n+" H291z M291 0 H417 V"+n+" H291z";case"∣":return"M145 0 H188 V"+n+" H145z M145 0 H188 V"+n+" H145z";case"∥":return"M145 0 H188 V"+n+" H145z M145 0 H188 V"+n+" H145z"+("M367 0 H410 V"+n+" H367z M367 0 H410 V"+n+" H367z");case"⎟":return"M457 0 H583 V"+n+" H457z M457 0 H583 V"+n+" H457z";case"⎢":return"M319 0 H403 V"+n+" H319z M319 0 H403 V"+n+" H319z";case"⎥":return"M263 0 H347 V"+n+" H263z M263 0 H347 V"+n+" H263z";case"⎪":return"M384 0 H504 V"+n+" H384z M384 0 H504 V"+n+" H384z";case"⏐":return"M312 0 H355 V"+n+" H312z M312 0 H355 V"+n+" H312z";case"‖":return"M257 0 H300 V"+n+" H257z M257 0 H300 V"+n+" H257z"+("M478 0 H521 V"+n+" H478z M478 0 H521 V"+n+" H478z");default:return""}},If={doubleleftarrow:`M262 157
l10-10c34-36 62.7-77 86-123 3.3-8 5-13.3 5-16 0-5.3-6.7-8-20-8-7.3
 0-12.2.5-14.5 1.5-2.3 1-4.8 4.5-7.5 10.5-49.3 97.3-121.7 169.3-217 216-28
 14-57.3 25-88 33-6.7 2-11 3.8-13 5.5-2 1.7-3 4.2-3 7.5s1 5.8 3 7.5
c2 1.7 6.3 3.5 13 5.5 68 17.3 128.2 47.8 180.5 91.5 52.3 43.7 93.8 96.2 124.5
 157.5 9.3 8 15.3 12.3 18 13h6c12-.7 18-4 18-10 0-2-1.7-7-5-15-23.3-46-52-87
-86-123l-10-10h399738v-40H218c328 0 0 0 0 0l-10-8c-26.7-20-65.7-43-117-69 2.7
-2 6-3.7 10-5 36.7-16 72.3-37.3 107-64l10-8h399782v-40z
m8 0v40h399730v-40zm0 194v40h399730v-40z`,doublerightarrow:`M399738 392l
-10 10c-34 36-62.7 77-86 123-3.3 8-5 13.3-5 16 0 5.3 6.7 8 20 8 7.3 0 12.2-.5
 14.5-1.5 2.3-1 4.8-4.5 7.5-10.5 49.3-97.3 121.7-169.3 217-216 28-14 57.3-25 88
-33 6.7-2 11-3.8 13-5.5 2-1.7 3-4.2 3-7.5s-1-5.8-3-7.5c-2-1.7-6.3-3.5-13-5.5-68
-17.3-128.2-47.8-180.5-91.5-52.3-43.7-93.8-96.2-124.5-157.5-9.3-8-15.3-12.3-18
-13h-6c-12 .7-18 4-18 10 0 2 1.7 7 5 15 23.3 46 52 87 86 123l10 10H0v40h399782
c-328 0 0 0 0 0l10 8c26.7 20 65.7 43 117 69-2.7 2-6 3.7-10 5-36.7 16-72.3 37.3
-107 64l-10 8H0v40zM0 157v40h399730v-40zm0 194v40h399730v-40z`,leftarrow:`M400000 241H110l3-3c68.7-52.7 113.7-120
 135-202 4-14.7 6-23 6-25 0-7.3-7-11-21-11-8 0-13.2.8-15.5 2.5-2.3 1.7-4.2 5.8
-5.5 12.5-1.3 4.7-2.7 10.3-4 17-12 48.7-34.8 92-68.5 130S65.3 228.3 18 247
c-10 4-16 7.7-18 11 0 8.7 6 14.3 18 17 47.3 18.7 87.8 47 121.5 85S196 441.3 208
 490c.7 2 1.3 5 2 9s1.2 6.7 1.5 8c.3 1.3 1 3.3 2 6s2.2 4.5 3.5 5.5c1.3 1 3.3
 1.8 6 2.5s6 1 10 1c14 0 21-3.7 21-11 0-2-2-10.3-6-25-20-79.3-65-146.7-135-202
 l-3-3h399890zM100 241v40h399900v-40z`,leftbrace:`M6 548l-6-6v-35l6-11c56-104 135.3-181.3 238-232 57.3-28.7 117
-45 179-50h399577v120H403c-43.3 7-81 15-113 26-100.7 33-179.7 91-237 174-2.7
 5-6 9-10 13-.7 1-7.3 1-20 1H6z`,leftbraceunder:`M0 6l6-6h17c12.688 0 19.313.3 20 1 4 4 7.313 8.3 10 13
 35.313 51.3 80.813 93.8 136.5 127.5 55.688 33.7 117.188 55.8 184.5 66.5.688
 0 2 .3 4 1 18.688 2.7 76 4.3 172 5h399450v120H429l-6-1c-124.688-8-235-61.7
-331-161C60.687 138.7 32.312 99.3 7 54L0 41V6z`,leftgroup:`M400000 80
H435C64 80 168.3 229.4 21 260c-5.9 1.2-18 0-18 0-2 0-3-1-3-3v-38C76 61 257 0
 435 0h399565z`,leftgroupunder:`M400000 262
H435C64 262 168.3 112.6 21 82c-5.9-1.2-18 0-18 0-2 0-3 1-3 3v38c76 158 257 219
 435 219h399565z`,leftharpoon:`M0 267c.7 5.3 3 10 7 14h399993v-40H93c3.3
-3.3 10.2-9.5 20.5-18.5s17.8-15.8 22.5-20.5c50.7-52 88-110.3 112-175 4-11.3 5
-18.3 3-21-1.3-4-7.3-6-18-6-8 0-13 .7-15 2s-4.7 6.7-8 16c-42 98.7-107.3 174.7
-196 228-6.7 4.7-10.7 8-12 10-1.3 2-2 5.7-2 11zm100-26v40h399900v-40z`,leftharpoonplus:`M0 267c.7 5.3 3 10 7 14h399993v-40H93c3.3-3.3 10.2-9.5
 20.5-18.5s17.8-15.8 22.5-20.5c50.7-52 88-110.3 112-175 4-11.3 5-18.3 3-21-1.3
-4-7.3-6-18-6-8 0-13 .7-15 2s-4.7 6.7-8 16c-42 98.7-107.3 174.7-196 228-6.7 4.7
-10.7 8-12 10-1.3 2-2 5.7-2 11zm100-26v40h399900v-40zM0 435v40h400000v-40z
m0 0v40h400000v-40z`,leftharpoondown:`M7 241c-4 4-6.333 8.667-7 14 0 5.333.667 9 2 11s5.333
 5.333 12 10c90.667 54 156 130 196 228 3.333 10.667 6.333 16.333 9 17 2 .667 5
 1 9 1h5c10.667 0 16.667-2 18-6 2-2.667 1-9.667-3-21-32-87.333-82.667-157.667
-152-211l-3-3h399907v-40zM93 281 H400000 v-40L7 241z`,leftharpoondownplus:`M7 435c-4 4-6.3 8.7-7 14 0 5.3.7 9 2 11s5.3 5.3 12
 10c90.7 54 156 130 196 228 3.3 10.7 6.3 16.3 9 17 2 .7 5 1 9 1h5c10.7 0 16.7
-2 18-6 2-2.7 1-9.7-3-21-32-87.3-82.7-157.7-152-211l-3-3h399907v-40H7zm93 0
v40h399900v-40zM0 241v40h399900v-40zm0 0v40h399900v-40z`,lefthook:`M400000 281 H103s-33-11.2-61-33.5S0 197.3 0 164s14.2-61.2 42.5
-83.5C70.8 58.2 104 47 142 47 c16.7 0 25 6.7 25 20 0 12-8.7 18.7-26 20-40 3.3
-68.7 15.7-86 37-10 12-15 25.3-15 40 0 22.7 9.8 40.7 29.5 54 19.7 13.3 43.5 21
 71.5 23h399859zM103 281v-40h399897v40z`,leftlinesegment:`M40 281 V428 H0 V94 H40 V241 H400000 v40z
M40 281 V428 H0 V94 H40 V241 H400000 v40z`,leftmapsto:`M40 281 V448H0V74H40V241H400000v40z
M40 281 V448H0V74H40V241H400000v40z`,leftToFrom:`M0 147h400000v40H0zm0 214c68 40 115.7 95.7 143 167h22c15.3 0 23
-.3 23-1 0-1.3-5.3-13.7-16-37-18-35.3-41.3-69-70-101l-7-8h399905v-40H95l7-8
c28.7-32 52-65.7 70-101 10.7-23.3 16-35.7 16-37 0-.7-7.7-1-23-1h-22C115.7 265.3
 68 321 0 361zm0-174v-40h399900v40zm100 154v40h399900v-40z`,longequal:`M0 50 h400000 v40H0z m0 194h40000v40H0z
M0 50 h400000 v40H0z m0 194h40000v40H0z`,midbrace:`M200428 334
c-100.7-8.3-195.3-44-280-108-55.3-42-101.7-93-139-153l-9-14c-2.7 4-5.7 8.7-9 14
-53.3 86.7-123.7 153-211 199-66.7 36-137.3 56.3-212 62H0V214h199568c178.3-11.7
 311.7-78.3 403-201 6-8 9.7-12 11-12 .7-.7 6.7-1 18-1s17.3.3 18 1c1.3 0 5 4 11
 12 44.7 59.3 101.3 106.3 170 141s145.3 54.3 229 60h199572v120z`,midbraceunder:`M199572 214
c100.7 8.3 195.3 44 280 108 55.3 42 101.7 93 139 153l9 14c2.7-4 5.7-8.7 9-14
 53.3-86.7 123.7-153 211-199 66.7-36 137.3-56.3 212-62h199568v120H200432c-178.3
 11.7-311.7 78.3-403 201-6 8-9.7 12-11 12-.7.7-6.7 1-18 1s-17.3-.3-18-1c-1.3 0
-5-4-11-12-44.7-59.3-101.3-106.3-170-141s-145.3-54.3-229-60H0V214z`,oiintSize1:`M512.6 71.6c272.6 0 320.3 106.8 320.3 178.2 0 70.8-47.7 177.6
-320.3 177.6S193.1 320.6 193.1 249.8c0-71.4 46.9-178.2 319.5-178.2z
m368.1 178.2c0-86.4-60.9-215.4-368.1-215.4-306.4 0-367.3 129-367.3 215.4 0 85.8
60.9 214.8 367.3 214.8 307.2 0 368.1-129 368.1-214.8z`,oiintSize2:`M757.8 100.1c384.7 0 451.1 137.6 451.1 230 0 91.3-66.4 228.8
-451.1 228.8-386.3 0-452.7-137.5-452.7-228.8 0-92.4 66.4-230 452.7-230z
m502.4 230c0-111.2-82.4-277.2-502.4-277.2s-504 166-504 277.2
c0 110 84 276 504 276s502.4-166 502.4-276z`,oiiintSize1:`M681.4 71.6c408.9 0 480.5 106.8 480.5 178.2 0 70.8-71.6 177.6
-480.5 177.6S202.1 320.6 202.1 249.8c0-71.4 70.5-178.2 479.3-178.2z
m525.8 178.2c0-86.4-86.8-215.4-525.7-215.4-437.9 0-524.7 129-524.7 215.4 0
85.8 86.8 214.8 524.7 214.8 438.9 0 525.7-129 525.7-214.8z`,oiiintSize2:`M1021.2 53c603.6 0 707.8 165.8 707.8 277.2 0 110-104.2 275.8
-707.8 275.8-606 0-710.2-165.8-710.2-275.8C311 218.8 415.2 53 1021.2 53z
m770.4 277.1c0-131.2-126.4-327.6-770.5-327.6S248.4 198.9 248.4 330.1
c0 130 128.8 326.4 772.7 326.4s770.5-196.4 770.5-326.4z`,rightarrow:`M0 241v40h399891c-47.3 35.3-84 78-110 128
-16.7 32-27.7 63.7-33 95 0 1.3-.2 2.7-.5 4-.3 1.3-.5 2.3-.5 3 0 7.3 6.7 11 20
 11 8 0 13.2-.8 15.5-2.5 2.3-1.7 4.2-5.5 5.5-11.5 2-13.3 5.7-27 11-41 14.7-44.7
 39-84.5 73-119.5s73.7-60.2 119-75.5c6-2 9-5.7 9-11s-3-9-9-11c-45.3-15.3-85
-40.5-119-75.5s-58.3-74.8-73-119.5c-4.7-14-8.3-27.3-11-40-1.3-6.7-3.2-10.8-5.5
-12.5-2.3-1.7-7.5-2.5-15.5-2.5-14 0-21 3.7-21 11 0 2 2 10.3 6 25 20.7 83.3 67
 151.7 139 205zm0 0v40h399900v-40z`,rightbrace:`M400000 542l
-6 6h-17c-12.7 0-19.3-.3-20-1-4-4-7.3-8.3-10-13-35.3-51.3-80.8-93.8-136.5-127.5
s-117.2-55.8-184.5-66.5c-.7 0-2-.3-4-1-18.7-2.7-76-4.3-172-5H0V214h399571l6 1
c124.7 8 235 61.7 331 161 31.3 33.3 59.7 72.7 85 118l7 13v35z`,rightbraceunder:`M399994 0l6 6v35l-6 11c-56 104-135.3 181.3-238 232-57.3
 28.7-117 45-179 50H-300V214h399897c43.3-7 81-15 113-26 100.7-33 179.7-91 237
-174 2.7-5 6-9 10-13 .7-1 7.3-1 20-1h17z`,rightgroup:`M0 80h399565c371 0 266.7 149.4 414 180 5.9 1.2 18 0 18 0 2 0
 3-1 3-3v-38c-76-158-257-219-435-219H0z`,rightgroupunder:`M0 262h399565c371 0 266.7-149.4 414-180 5.9-1.2 18 0 18
 0 2 0 3 1 3 3v38c-76 158-257 219-435 219H0z`,rightharpoon:`M0 241v40h399993c4.7-4.7 7-9.3 7-14 0-9.3
-3.7-15.3-11-18-92.7-56.7-159-133.7-199-231-3.3-9.3-6-14.7-8-16-2-1.3-7-2-15-2
-10.7 0-16.7 2-18 6-2 2.7-1 9.7 3 21 15.3 42 36.7 81.8 64 119.5 27.3 37.7 58
 69.2 92 94.5zm0 0v40h399900v-40z`,rightharpoonplus:`M0 241v40h399993c4.7-4.7 7-9.3 7-14 0-9.3-3.7-15.3-11
-18-92.7-56.7-159-133.7-199-231-3.3-9.3-6-14.7-8-16-2-1.3-7-2-15-2-10.7 0-16.7
 2-18 6-2 2.7-1 9.7 3 21 15.3 42 36.7 81.8 64 119.5 27.3 37.7 58 69.2 92 94.5z
m0 0v40h399900v-40z m100 194v40h399900v-40zm0 0v40h399900v-40z`,rightharpoondown:`M399747 511c0 7.3 6.7 11 20 11 8 0 13-.8 15-2.5s4.7-6.8
 8-15.5c40-94 99.3-166.3 178-217 13.3-8 20.3-12.3 21-13 5.3-3.3 8.5-5.8 9.5
-7.5 1-1.7 1.5-5.2 1.5-10.5s-2.3-10.3-7-15H0v40h399908c-34 25.3-64.7 57-92 95
-27.3 38-48.7 77.7-64 119-3.3 8.7-5 14-5 16zM0 241v40h399900v-40z`,rightharpoondownplus:`M399747 705c0 7.3 6.7 11 20 11 8 0 13-.8
 15-2.5s4.7-6.8 8-15.5c40-94 99.3-166.3 178-217 13.3-8 20.3-12.3 21-13 5.3-3.3
 8.5-5.8 9.5-7.5 1-1.7 1.5-5.2 1.5-10.5s-2.3-10.3-7-15H0v40h399908c-34 25.3
-64.7 57-92 95-27.3 38-48.7 77.7-64 119-3.3 8.7-5 14-5 16zM0 435v40h399900v-40z
m0-194v40h400000v-40zm0 0v40h400000v-40z`,righthook:`M399859 241c-764 0 0 0 0 0 40-3.3 68.7-15.7 86-37 10-12 15-25.3
 15-40 0-22.7-9.8-40.7-29.5-54-19.7-13.3-43.5-21-71.5-23-17.3-1.3-26-8-26-20 0
-13.3 8.7-20 26-20 38 0 71 11.2 99 33.5 0 0 7 5.6 21 16.7 14 11.2 21 33.5 21
 66.8s-14 61.2-42 83.5c-28 22.3-61 33.5-99 33.5L0 241z M0 281v-40h399859v40z`,rightlinesegment:`M399960 241 V94 h40 V428 h-40 V281 H0 v-40z
M399960 241 V94 h40 V428 h-40 V281 H0 v-40z`,rightToFrom:`M400000 167c-70.7-42-118-97.7-142-167h-23c-15.3 0-23 .3-23
 1 0 1.3 5.3 13.7 16 37 18 35.3 41.3 69 70 101l7 8H0v40h399905l-7 8c-28.7 32
-52 65.7-70 101-10.7 23.3-16 35.7-16 37 0 .7 7.7 1 23 1h23c24-69.3 71.3-125 142
-167z M100 147v40h399900v-40zM0 341v40h399900v-40z`,twoheadleftarrow:`M0 167c68 40
 115.7 95.7 143 167h22c15.3 0 23-.3 23-1 0-1.3-5.3-13.7-16-37-18-35.3-41.3-69
-70-101l-7-8h125l9 7c50.7 39.3 85 86 103 140h46c0-4.7-6.3-18.7-19-42-18-35.3
-40-67.3-66-96l-9-9h399716v-40H284l9-9c26-28.7 48-60.7 66-96 12.7-23.333 19
-37.333 19-42h-46c-18 54-52.3 100.7-103 140l-9 7H95l7-8c28.7-32 52-65.7 70-101
 10.7-23.333 16-35.7 16-37 0-.7-7.7-1-23-1h-22C115.7 71.3 68 127 0 167z`,twoheadrightarrow:`M400000 167
c-68-40-115.7-95.7-143-167h-22c-15.3 0-23 .3-23 1 0 1.3 5.3 13.7 16 37 18 35.3
 41.3 69 70 101l7 8h-125l-9-7c-50.7-39.3-85-86-103-140h-46c0 4.7 6.3 18.7 19 42
 18 35.3 40 67.3 66 96l9 9H0v40h399716l-9 9c-26 28.7-48 60.7-66 96-12.7 23.333
-19 37.333-19 42h46c18-54 52.3-100.7 103-140l9-7h125l-7 8c-28.7 32-52 65.7-70
 101-10.7 23.333-16 35.7-16 37 0 .7 7.7 1 23 1h22c27.3-71.3 75-127 143-167z`,tilde1:`M200 55.538c-77 0-168 73.953-177 73.953-3 0-7
-2.175-9-5.437L2 97c-1-2-2-4-2-6 0-4 2-7 5-9l20-12C116 12 171 0 207 0c86 0
 114 68 191 68 78 0 168-68 177-68 4 0 7 2 9 5l12 19c1 2.175 2 4.35 2 6.525 0
 4.35-2 7.613-5 9.788l-19 13.05c-92 63.077-116.937 75.308-183 76.128
-68.267.847-113-73.952-191-73.952z`,tilde2:`M344 55.266c-142 0-300.638 81.316-311.5 86.418
-8.01 3.762-22.5 10.91-23.5 5.562L1 120c-1-2-1-3-1-4 0-5 3-9 8-10l18.4-9C160.9
 31.9 283 0 358 0c148 0 188 122 331 122s314-97 326-97c4 0 8 2 10 7l7 21.114
c1 2.14 1 3.21 1 4.28 0 5.347-3 9.626-7 10.696l-22.3 12.622C852.6 158.372 751
 181.476 676 181.476c-149 0-189-126.21-332-126.21z`,tilde3:`M786 59C457 59 32 175.242 13 175.242c-6 0-10-3.457
-11-10.37L.15 138c-1-7 3-12 10-13l19.2-6.4C378.4 40.7 634.3 0 804.3 0c337 0
 411.8 157 746.8 157 328 0 754-112 773-112 5 0 10 3 11 9l1 14.075c1 8.066-.697
 16.595-6.697 17.492l-21.052 7.31c-367.9 98.146-609.15 122.696-778.15 122.696
 -338 0-409-156.573-744-156.573z`,tilde4:`M786 58C457 58 32 177.487 13 177.487c-6 0-10-3.345
-11-10.035L.15 143c-1-7 3-12 10-13l22-6.7C381.2 35 637.15 0 807.15 0c337 0 409
 177 744 177 328 0 754-127 773-127 5 0 10 3 11 9l1 14.794c1 7.805-3 13.38-9
 14.495l-20.7 5.574c-366.85 99.79-607.3 139.372-776.3 139.372-338 0-409
 -175.236-744-175.236z`,vec:`M377 20c0-5.333 1.833-10 5.5-14S391 0 397 0c4.667 0 8.667 1.667 12 5
3.333 2.667 6.667 9 10 19 6.667 24.667 20.333 43.667 41 57 7.333 4.667 11
10.667 11 18 0 6-1 10-3 12s-6.667 5-14 9c-28.667 14.667-53.667 35.667-75 63
-1.333 1.333-3.167 3.5-5.5 6.5s-4 4.833-5 5.5c-1 .667-2.5 1.333-4.5 2s-4.333 1
-7 1c-4.667 0-9.167-1.833-13.5-5.5S337 184 337 178c0-12.667 15.667-32.333 47-59
H213l-171-1c-8.667-6-13-12.333-13-19 0-4.667 4.333-11.333 13-20h359
c-16-25.333-24-45-24-59z`,widehat1:`M529 0h5l519 115c5 1 9 5 9 10 0 1-1 2-1 3l-4 22
c-1 5-5 9-11 9h-2L532 67 19 159h-2c-5 0-9-4-11-9l-5-22c-1-6 2-12 8-13z`,widehat2:`M1181 0h2l1171 176c6 0 10 5 10 11l-2 23c-1 6-5 10
-11 10h-1L1182 67 15 220h-1c-6 0-10-4-11-10l-2-23c-1-6 4-11 10-11z`,widehat3:`M1181 0h2l1171 236c6 0 10 5 10 11l-2 23c-1 6-5 10
-11 10h-1L1182 67 15 280h-1c-6 0-10-4-11-10l-2-23c-1-6 4-11 10-11z`,widehat4:`M1181 0h2l1171 296c6 0 10 5 10 11l-2 23c-1 6-5 10
-11 10h-1L1182 67 15 340h-1c-6 0-10-4-11-10l-2-23c-1-6 4-11 10-11z`,widecheck1:`M529,159h5l519,-115c5,-1,9,-5,9,-10c0,-1,-1,-2,-1,-3l-4,-22c-1,
-5,-5,-9,-11,-9h-2l-512,92l-513,-92h-2c-5,0,-9,4,-11,9l-5,22c-1,6,2,12,8,13z`,widecheck2:`M1181,220h2l1171,-176c6,0,10,-5,10,-11l-2,-23c-1,-6,-5,-10,
-11,-10h-1l-1168,153l-1167,-153h-1c-6,0,-10,4,-11,10l-2,23c-1,6,4,11,10,11z`,widecheck3:`M1181,280h2l1171,-236c6,0,10,-5,10,-11l-2,-23c-1,-6,-5,-10,
-11,-10h-1l-1168,213l-1167,-213h-1c-6,0,-10,4,-11,10l-2,23c-1,6,4,11,10,11z`,widecheck4:`M1181,340h2l1171,-296c6,0,10,-5,10,-11l-2,-23c-1,-6,-5,-10,
-11,-10h-1l-1168,273l-1167,-273h-1c-6,0,-10,4,-11,10l-2,23c-1,6,4,11,10,11z`,baraboveleftarrow:`M400000 620h-399890l3 -3c68.7 -52.7 113.7 -120 135 -202
c4 -14.7 6 -23 6 -25c0 -7.3 -7 -11 -21 -11c-8 0 -13.2 0.8 -15.5 2.5
c-2.3 1.7 -4.2 5.8 -5.5 12.5c-1.3 4.7 -2.7 10.3 -4 17c-12 48.7 -34.8 92 -68.5 130
s-74.2 66.3 -121.5 85c-10 4 -16 7.7 -18 11c0 8.7 6 14.3 18 17c47.3 18.7 87.8 47
121.5 85s56.5 81.3 68.5 130c0.7 2 1.3 5 2 9s1.2 6.7 1.5 8c0.3 1.3 1 3.3 2 6
s2.2 4.5 3.5 5.5c1.3 1 3.3 1.8 6 2.5s6 1 10 1c14 0 21 -3.7 21 -11
c0 -2 -2 -10.3 -6 -25c-20 -79.3 -65 -146.7 -135 -202l-3 -3h399890z
M100 620v40h399900v-40z M0 241v40h399900v-40zM0 241v40h399900v-40z`,rightarrowabovebar:`M0 241v40h399891c-47.3 35.3-84 78-110 128-16.7 32
-27.7 63.7-33 95 0 1.3-.2 2.7-.5 4-.3 1.3-.5 2.3-.5 3 0 7.3 6.7 11 20 11 8 0
13.2-.8 15.5-2.5 2.3-1.7 4.2-5.5 5.5-11.5 2-13.3 5.7-27 11-41 14.7-44.7 39
-84.5 73-119.5s73.7-60.2 119-75.5c6-2 9-5.7 9-11s-3-9-9-11c-45.3-15.3-85-40.5
-119-75.5s-58.3-74.8-73-119.5c-4.7-14-8.3-27.3-11-40-1.3-6.7-3.2-10.8-5.5
-12.5-2.3-1.7-7.5-2.5-15.5-2.5-14 0-21 3.7-21 11 0 2 2 10.3 6 25 20.7 83.3 67
151.7 139 205zm96 379h399894v40H0zm0 0h399904v40H0z`,baraboveshortleftharpoon:`M507,435c-4,4,-6.3,8.7,-7,14c0,5.3,0.7,9,2,11
c1.3,2,5.3,5.3,12,10c90.7,54,156,130,196,228c3.3,10.7,6.3,16.3,9,17
c2,0.7,5,1,9,1c0,0,5,0,5,0c10.7,0,16.7,-2,18,-6c2,-2.7,1,-9.7,-3,-21
c-32,-87.3,-82.7,-157.7,-152,-211c0,0,-3,-3,-3,-3l399351,0l0,-40
c-398570,0,-399437,0,-399437,0z M593 435 v40 H399500 v-40z
M0 281 v-40 H399908 v40z M0 281 v-40 H399908 v40z`,rightharpoonaboveshortbar:`M0,241 l0,40c399126,0,399993,0,399993,0
c4.7,-4.7,7,-9.3,7,-14c0,-9.3,-3.7,-15.3,-11,-18c-92.7,-56.7,-159,-133.7,-199,
-231c-3.3,-9.3,-6,-14.7,-8,-16c-2,-1.3,-7,-2,-15,-2c-10.7,0,-16.7,2,-18,6
c-2,2.7,-1,9.7,3,21c15.3,42,36.7,81.8,64,119.5c27.3,37.7,58,69.2,92,94.5z
M0 241 v40 H399908 v-40z M0 475 v-40 H399500 v40z M0 475 v-40 H399500 v40z`,shortbaraboveleftharpoon:`M7,435c-4,4,-6.3,8.7,-7,14c0,5.3,0.7,9,2,11
c1.3,2,5.3,5.3,12,10c90.7,54,156,130,196,228c3.3,10.7,6.3,16.3,9,17c2,0.7,5,1,9,
1c0,0,5,0,5,0c10.7,0,16.7,-2,18,-6c2,-2.7,1,-9.7,-3,-21c-32,-87.3,-82.7,-157.7,
-152,-211c0,0,-3,-3,-3,-3l399907,0l0,-40c-399126,0,-399993,0,-399993,0z
M93 435 v40 H400000 v-40z M500 241 v40 H400000 v-40z M500 241 v40 H400000 v-40z`,shortrightharpoonabovebar:`M53,241l0,40c398570,0,399437,0,399437,0
c4.7,-4.7,7,-9.3,7,-14c0,-9.3,-3.7,-15.3,-11,-18c-92.7,-56.7,-159,-133.7,-199,
-231c-3.3,-9.3,-6,-14.7,-8,-16c-2,-1.3,-7,-2,-15,-2c-10.7,0,-16.7,2,-18,6
c-2,2.7,-1,9.7,3,21c15.3,42,36.7,81.8,64,119.5c27.3,37.7,58,69.2,92,94.5z
M500 241 v40 H399408 v-40z M500 435 v40 H400000 v-40z`},eC=function(e,n){switch(e){case"lbrack":return"M403 1759 V84 H666 V0 H319 V1759 v"+n+` v1759 h347 v-84
H403z M403 1759 V0 H319 V1759 v`+n+" v1759 h84z";case"rbrack":return"M347 1759 V0 H0 V84 H263 V1759 v"+n+` v1759 H0 v84 H347z
M347 1759 V0 H263 V1759 v`+n+" v1759 h84z";case"vert":return"M145 15 v585 v"+n+` v585 c2.667,10,9.667,15,21,15
c10,0,16.667,-5,20,-15 v-585 v`+-n+` v-585 c-2.667,-10,-9.667,-15,-21,-15
c-10,0,-16.667,5,-20,15z M188 15 H145 v585 v`+n+" v585 h43z";case"doublevert":return"M145 15 v585 v"+n+` v585 c2.667,10,9.667,15,21,15
c10,0,16.667,-5,20,-15 v-585 v`+-n+` v-585 c-2.667,-10,-9.667,-15,-21,-15
c-10,0,-16.667,5,-20,15z M188 15 H145 v585 v`+n+` v585 h43z
M367 15 v585 v`+n+` v585 c2.667,10,9.667,15,21,15
c10,0,16.667,-5,20,-15 v-585 v`+-n+` v-585 c-2.667,-10,-9.667,-15,-21,-15
c-10,0,-16.667,5,-20,15z M410 15 H367 v585 v`+n+" v585 h43z";case"lfloor":return"M319 602 V0 H403 V602 v"+n+` v1715 h263 v84 H319z
MM319 602 V0 H403 V602 v`+n+" v1715 H319z";case"rfloor":return"M319 602 V0 H403 V602 v"+n+` v1799 H0 v-84 H319z
MM319 602 V0 H403 V602 v`+n+" v1715 H319z";case"lceil":return"M403 1759 V84 H666 V0 H319 V1759 v"+n+` v602 h84z
M403 1759 V0 H319 V1759 v`+n+" v602 h84z";case"rceil":return"M347 1759 V0 H0 V84 H263 V1759 v"+n+` v602 h84z
M347 1759 V0 h-84 V1759 v`+n+" v602 h84z";case"lparen":return`M863,9c0,-2,-2,-5,-6,-9c0,0,-17,0,-17,0c-12.7,0,-19.3,0.3,-20,1
c-5.3,5.3,-10.3,11,-15,17c-242.7,294.7,-395.3,682,-458,1162c-21.3,163.3,-33.3,349,
-36,557 l0,`+(n+84)+`c0.2,6,0,26,0,60c2,159.3,10,310.7,24,454c53.3,528,210,
949.7,470,1265c4.7,6,9.7,11.7,15,17c0.7,0.7,7,1,19,1c0,0,18,0,18,0c4,-4,6,-7,6,-9
c0,-2.7,-3.3,-8.7,-10,-18c-135.3,-192.7,-235.5,-414.3,-300.5,-665c-65,-250.7,-102.5,
-544.7,-112.5,-882c-2,-104,-3,-167,-3,-189
l0,-`+(n+92)+`c0,-162.7,5.7,-314,17,-454c20.7,-272,63.7,-513,129,-723c65.3,
-210,155.3,-396.3,270,-559c6.7,-9.3,10,-15.3,10,-18z`;case"rparen":return`M76,0c-16.7,0,-25,3,-25,9c0,2,2,6.3,6,13c21.3,28.7,42.3,60.3,
63,95c96.7,156.7,172.8,332.5,228.5,527.5c55.7,195,92.8,416.5,111.5,664.5
c11.3,139.3,17,290.7,17,454c0,28,1.7,43,3.3,45l0,`+(n+9)+`
c-3,4,-3.3,16.7,-3.3,38c0,162,-5.7,313.7,-17,455c-18.7,248,-55.8,469.3,-111.5,664
c-55.7,194.7,-131.8,370.3,-228.5,527c-20.7,34.7,-41.7,66.3,-63,95c-2,3.3,-4,7,-6,11
c0,7.3,5.7,11,17,11c0,0,11,0,11,0c9.3,0,14.3,-0.3,15,-1c5.3,-5.3,10.3,-11,15,-17
c242.7,-294.7,395.3,-681.7,458,-1161c21.3,-164.7,33.3,-350.7,36,-558
l0,-`+(n+144)+`c-2,-159.3,-10,-310.7,-24,-454c-53.3,-528,-210,-949.7,
-470,-1265c-4.7,-6,-9.7,-11.7,-15,-17c-0.7,-0.7,-6.7,-1,-18,-1z`;default:throw new Error("Unknown stretchy delimiter.")}};class x7{constructor(e){this.children=void 0,this.classes=void 0,this.height=void 0,this.depth=void 0,this.maxFontSize=void 0,this.style=void 0,this.children=e,this.classes=[],this.height=0,this.depth=0,this.maxFontSize=0,this.style={}}hasClass(e){return C1.contains(this.classes,e)}toNode(){for(var e=document.createDocumentFragment(),n=0;n<this.children.length;n++)e.appendChild(this.children[n].toNode());return e}toMarkup(){for(var e="",n=0;n<this.children.length;n++)e+=this.children[n].toMarkup();return e}toText(){var e=n=>n.toText();return this.children.map(e).join("")}}var H4={"AMS-Regular":{32:[0,0,0,0,.25],65:[0,.68889,0,0,.72222],66:[0,.68889,0,0,.66667],67:[0,.68889,0,0,.72222],68:[0,.68889,0,0,.72222],69:[0,.68889,0,0,.66667],70:[0,.68889,0,0,.61111],71:[0,.68889,0,0,.77778],72:[0,.68889,0,0,.77778],73:[0,.68889,0,0,.38889],74:[.16667,.68889,0,0,.5],75:[0,.68889,0,0,.77778],76:[0,.68889,0,0,.66667],77:[0,.68889,0,0,.94445],78:[0,.68889,0,0,.72222],79:[.16667,.68889,0,0,.77778],80:[0,.68889,0,0,.61111],81:[.16667,.68889,0,0,.77778],82:[0,.68889,0,0,.72222],83:[0,.68889,0,0,.55556],84:[0,.68889,0,0,.66667],85:[0,.68889,0,0,.72222],86:[0,.68889,0,0,.72222],87:[0,.68889,0,0,1],88:[0,.68889,0,0,.72222],89:[0,.68889,0,0,.72222],90:[0,.68889,0,0,.66667],107:[0,.68889,0,0,.55556],160:[0,0,0,0,.25],165:[0,.675,.025,0,.75],174:[.15559,.69224,0,0,.94666],240:[0,.68889,0,0,.55556],295:[0,.68889,0,0,.54028],710:[0,.825,0,0,2.33334],732:[0,.9,0,0,2.33334],770:[0,.825,0,0,2.33334],771:[0,.9,0,0,2.33334],989:[.08167,.58167,0,0,.77778],1008:[0,.43056,.04028,0,.66667],8245:[0,.54986,0,0,.275],8463:[0,.68889,0,0,.54028],8487:[0,.68889,0,0,.72222],8498:[0,.68889,0,0,.55556],8502:[0,.68889,0,0,.66667],8503:[0,.68889,0,0,.44445],8504:[0,.68889,0,0,.66667],8513:[0,.68889,0,0,.63889],8592:[-.03598,.46402,0,0,.5],8594:[-.03598,.46402,0,0,.5],8602:[-.13313,.36687,0,0,1],8603:[-.13313,.36687,0,0,1],8606:[.01354,.52239,0,0,1],8608:[.01354,.52239,0,0,1],8610:[.01354,.52239,0,0,1.11111],8611:[.01354,.52239,0,0,1.11111],8619:[0,.54986,0,0,1],8620:[0,.54986,0,0,1],8621:[-.13313,.37788,0,0,1.38889],8622:[-.13313,.36687,0,0,1],8624:[0,.69224,0,0,.5],8625:[0,.69224,0,0,.5],8630:[0,.43056,0,0,1],8631:[0,.43056,0,0,1],8634:[.08198,.58198,0,0,.77778],8635:[.08198,.58198,0,0,.77778],8638:[.19444,.69224,0,0,.41667],8639:[.19444,.69224,0,0,.41667],8642:[.19444,.69224,0,0,.41667],8643:[.19444,.69224,0,0,.41667],8644:[.1808,.675,0,0,1],8646:[.1808,.675,0,0,1],8647:[.1808,.675,0,0,1],8648:[.19444,.69224,0,0,.83334],8649:[.1808,.675,0,0,1],8650:[.19444,.69224,0,0,.83334],8651:[.01354,.52239,0,0,1],8652:[.01354,.52239,0,0,1],8653:[-.13313,.36687,0,0,1],8654:[-.13313,.36687,0,0,1],8655:[-.13313,.36687,0,0,1],8666:[.13667,.63667,0,0,1],8667:[.13667,.63667,0,0,1],8669:[-.13313,.37788,0,0,1],8672:[-.064,.437,0,0,1.334],8674:[-.064,.437,0,0,1.334],8705:[0,.825,0,0,.5],8708:[0,.68889,0,0,.55556],8709:[.08167,.58167,0,0,.77778],8717:[0,.43056,0,0,.42917],8722:[-.03598,.46402,0,0,.5],8724:[.08198,.69224,0,0,.77778],8726:[.08167,.58167,0,0,.77778],8733:[0,.69224,0,0,.77778],8736:[0,.69224,0,0,.72222],8737:[0,.69224,0,0,.72222],8738:[.03517,.52239,0,0,.72222],8739:[.08167,.58167,0,0,.22222],8740:[.25142,.74111,0,0,.27778],8741:[.08167,.58167,0,0,.38889],8742:[.25142,.74111,0,0,.5],8756:[0,.69224,0,0,.66667],8757:[0,.69224,0,0,.66667],8764:[-.13313,.36687,0,0,.77778],8765:[-.13313,.37788,0,0,.77778],8769:[-.13313,.36687,0,0,.77778],8770:[-.03625,.46375,0,0,.77778],8774:[.30274,.79383,0,0,.77778],8776:[-.01688,.48312,0,0,.77778],8778:[.08167,.58167,0,0,.77778],8782:[.06062,.54986,0,0,.77778],8783:[.06062,.54986,0,0,.77778],8785:[.08198,.58198,0,0,.77778],8786:[.08198,.58198,0,0,.77778],8787:[.08198,.58198,0,0,.77778],8790:[0,.69224,0,0,.77778],8791:[.22958,.72958,0,0,.77778],8796:[.08198,.91667,0,0,.77778],8806:[.25583,.75583,0,0,.77778],8807:[.25583,.75583,0,0,.77778],8808:[.25142,.75726,0,0,.77778],8809:[.25142,.75726,0,0,.77778],8812:[.25583,.75583,0,0,.5],8814:[.20576,.70576,0,0,.77778],8815:[.20576,.70576,0,0,.77778],8816:[.30274,.79383,0,0,.77778],8817:[.30274,.79383,0,0,.77778],8818:[.22958,.72958,0,0,.77778],8819:[.22958,.72958,0,0,.77778],8822:[.1808,.675,0,0,.77778],8823:[.1808,.675,0,0,.77778],8828:[.13667,.63667,0,0,.77778],8829:[.13667,.63667,0,0,.77778],8830:[.22958,.72958,0,0,.77778],8831:[.22958,.72958,0,0,.77778],8832:[.20576,.70576,0,0,.77778],8833:[.20576,.70576,0,0,.77778],8840:[.30274,.79383,0,0,.77778],8841:[.30274,.79383,0,0,.77778],8842:[.13597,.63597,0,0,.77778],8843:[.13597,.63597,0,0,.77778],8847:[.03517,.54986,0,0,.77778],8848:[.03517,.54986,0,0,.77778],8858:[.08198,.58198,0,0,.77778],8859:[.08198,.58198,0,0,.77778],8861:[.08198,.58198,0,0,.77778],8862:[0,.675,0,0,.77778],8863:[0,.675,0,0,.77778],8864:[0,.675,0,0,.77778],8865:[0,.675,0,0,.77778],8872:[0,.69224,0,0,.61111],8873:[0,.69224,0,0,.72222],8874:[0,.69224,0,0,.88889],8876:[0,.68889,0,0,.61111],8877:[0,.68889,0,0,.61111],8878:[0,.68889,0,0,.72222],8879:[0,.68889,0,0,.72222],8882:[.03517,.54986,0,0,.77778],8883:[.03517,.54986,0,0,.77778],8884:[.13667,.63667,0,0,.77778],8885:[.13667,.63667,0,0,.77778],8888:[0,.54986,0,0,1.11111],8890:[.19444,.43056,0,0,.55556],8891:[.19444,.69224,0,0,.61111],8892:[.19444,.69224,0,0,.61111],8901:[0,.54986,0,0,.27778],8903:[.08167,.58167,0,0,.77778],8905:[.08167,.58167,0,0,.77778],8906:[.08167,.58167,0,0,.77778],8907:[0,.69224,0,0,.77778],8908:[0,.69224,0,0,.77778],8909:[-.03598,.46402,0,0,.77778],8910:[0,.54986,0,0,.76042],8911:[0,.54986,0,0,.76042],8912:[.03517,.54986,0,0,.77778],8913:[.03517,.54986,0,0,.77778],8914:[0,.54986,0,0,.66667],8915:[0,.54986,0,0,.66667],8916:[0,.69224,0,0,.66667],8918:[.0391,.5391,0,0,.77778],8919:[.0391,.5391,0,0,.77778],8920:[.03517,.54986,0,0,1.33334],8921:[.03517,.54986,0,0,1.33334],8922:[.38569,.88569,0,0,.77778],8923:[.38569,.88569,0,0,.77778],8926:[.13667,.63667,0,0,.77778],8927:[.13667,.63667,0,0,.77778],8928:[.30274,.79383,0,0,.77778],8929:[.30274,.79383,0,0,.77778],8934:[.23222,.74111,0,0,.77778],8935:[.23222,.74111,0,0,.77778],8936:[.23222,.74111,0,0,.77778],8937:[.23222,.74111,0,0,.77778],8938:[.20576,.70576,0,0,.77778],8939:[.20576,.70576,0,0,.77778],8940:[.30274,.79383,0,0,.77778],8941:[.30274,.79383,0,0,.77778],8994:[.19444,.69224,0,0,.77778],8995:[.19444,.69224,0,0,.77778],9416:[.15559,.69224,0,0,.90222],9484:[0,.69224,0,0,.5],9488:[0,.69224,0,0,.5],9492:[0,.37788,0,0,.5],9496:[0,.37788,0,0,.5],9585:[.19444,.68889,0,0,.88889],9586:[.19444,.74111,0,0,.88889],9632:[0,.675,0,0,.77778],9633:[0,.675,0,0,.77778],9650:[0,.54986,0,0,.72222],9651:[0,.54986,0,0,.72222],9654:[.03517,.54986,0,0,.77778],9660:[0,.54986,0,0,.72222],9661:[0,.54986,0,0,.72222],9664:[.03517,.54986,0,0,.77778],9674:[.11111,.69224,0,0,.66667],9733:[.19444,.69224,0,0,.94445],10003:[0,.69224,0,0,.83334],10016:[0,.69224,0,0,.83334],10731:[.11111,.69224,0,0,.66667],10846:[.19444,.75583,0,0,.61111],10877:[.13667,.63667,0,0,.77778],10878:[.13667,.63667,0,0,.77778],10885:[.25583,.75583,0,0,.77778],10886:[.25583,.75583,0,0,.77778],10887:[.13597,.63597,0,0,.77778],10888:[.13597,.63597,0,0,.77778],10889:[.26167,.75726,0,0,.77778],10890:[.26167,.75726,0,0,.77778],10891:[.48256,.98256,0,0,.77778],10892:[.48256,.98256,0,0,.77778],10901:[.13667,.63667,0,0,.77778],10902:[.13667,.63667,0,0,.77778],10933:[.25142,.75726,0,0,.77778],10934:[.25142,.75726,0,0,.77778],10935:[.26167,.75726,0,0,.77778],10936:[.26167,.75726,0,0,.77778],10937:[.26167,.75726,0,0,.77778],10938:[.26167,.75726,0,0,.77778],10949:[.25583,.75583,0,0,.77778],10950:[.25583,.75583,0,0,.77778],10955:[.28481,.79383,0,0,.77778],10956:[.28481,.79383,0,0,.77778],57350:[.08167,.58167,0,0,.22222],57351:[.08167,.58167,0,0,.38889],57352:[.08167,.58167,0,0,.77778],57353:[0,.43056,.04028,0,.66667],57356:[.25142,.75726,0,0,.77778],57357:[.25142,.75726,0,0,.77778],57358:[.41951,.91951,0,0,.77778],57359:[.30274,.79383,0,0,.77778],57360:[.30274,.79383,0,0,.77778],57361:[.41951,.91951,0,0,.77778],57366:[.25142,.75726,0,0,.77778],57367:[.25142,.75726,0,0,.77778],57368:[.25142,.75726,0,0,.77778],57369:[.25142,.75726,0,0,.77778],57370:[.13597,.63597,0,0,.77778],57371:[.13597,.63597,0,0,.77778]},"Caligraphic-Regular":{32:[0,0,0,0,.25],65:[0,.68333,0,.19445,.79847],66:[0,.68333,.03041,.13889,.65681],67:[0,.68333,.05834,.13889,.52653],68:[0,.68333,.02778,.08334,.77139],69:[0,.68333,.08944,.11111,.52778],70:[0,.68333,.09931,.11111,.71875],71:[.09722,.68333,.0593,.11111,.59487],72:[0,.68333,.00965,.11111,.84452],73:[0,.68333,.07382,0,.54452],74:[.09722,.68333,.18472,.16667,.67778],75:[0,.68333,.01445,.05556,.76195],76:[0,.68333,0,.13889,.68972],77:[0,.68333,0,.13889,1.2009],78:[0,.68333,.14736,.08334,.82049],79:[0,.68333,.02778,.11111,.79611],80:[0,.68333,.08222,.08334,.69556],81:[.09722,.68333,0,.11111,.81667],82:[0,.68333,0,.08334,.8475],83:[0,.68333,.075,.13889,.60556],84:[0,.68333,.25417,0,.54464],85:[0,.68333,.09931,.08334,.62583],86:[0,.68333,.08222,0,.61278],87:[0,.68333,.08222,.08334,.98778],88:[0,.68333,.14643,.13889,.7133],89:[.09722,.68333,.08222,.08334,.66834],90:[0,.68333,.07944,.13889,.72473],160:[0,0,0,0,.25]},"Fraktur-Regular":{32:[0,0,0,0,.25],33:[0,.69141,0,0,.29574],34:[0,.69141,0,0,.21471],38:[0,.69141,0,0,.73786],39:[0,.69141,0,0,.21201],40:[.24982,.74947,0,0,.38865],41:[.24982,.74947,0,0,.38865],42:[0,.62119,0,0,.27764],43:[.08319,.58283,0,0,.75623],44:[0,.10803,0,0,.27764],45:[.08319,.58283,0,0,.75623],46:[0,.10803,0,0,.27764],47:[.24982,.74947,0,0,.50181],48:[0,.47534,0,0,.50181],49:[0,.47534,0,0,.50181],50:[0,.47534,0,0,.50181],51:[.18906,.47534,0,0,.50181],52:[.18906,.47534,0,0,.50181],53:[.18906,.47534,0,0,.50181],54:[0,.69141,0,0,.50181],55:[.18906,.47534,0,0,.50181],56:[0,.69141,0,0,.50181],57:[.18906,.47534,0,0,.50181],58:[0,.47534,0,0,.21606],59:[.12604,.47534,0,0,.21606],61:[-.13099,.36866,0,0,.75623],63:[0,.69141,0,0,.36245],65:[0,.69141,0,0,.7176],66:[0,.69141,0,0,.88397],67:[0,.69141,0,0,.61254],68:[0,.69141,0,0,.83158],69:[0,.69141,0,0,.66278],70:[.12604,.69141,0,0,.61119],71:[0,.69141,0,0,.78539],72:[.06302,.69141,0,0,.7203],73:[0,.69141,0,0,.55448],74:[.12604,.69141,0,0,.55231],75:[0,.69141,0,0,.66845],76:[0,.69141,0,0,.66602],77:[0,.69141,0,0,1.04953],78:[0,.69141,0,0,.83212],79:[0,.69141,0,0,.82699],80:[.18906,.69141,0,0,.82753],81:[.03781,.69141,0,0,.82699],82:[0,.69141,0,0,.82807],83:[0,.69141,0,0,.82861],84:[0,.69141,0,0,.66899],85:[0,.69141,0,0,.64576],86:[0,.69141,0,0,.83131],87:[0,.69141,0,0,1.04602],88:[0,.69141,0,0,.71922],89:[.18906,.69141,0,0,.83293],90:[.12604,.69141,0,0,.60201],91:[.24982,.74947,0,0,.27764],93:[.24982,.74947,0,0,.27764],94:[0,.69141,0,0,.49965],97:[0,.47534,0,0,.50046],98:[0,.69141,0,0,.51315],99:[0,.47534,0,0,.38946],100:[0,.62119,0,0,.49857],101:[0,.47534,0,0,.40053],102:[.18906,.69141,0,0,.32626],103:[.18906,.47534,0,0,.5037],104:[.18906,.69141,0,0,.52126],105:[0,.69141,0,0,.27899],106:[0,.69141,0,0,.28088],107:[0,.69141,0,0,.38946],108:[0,.69141,0,0,.27953],109:[0,.47534,0,0,.76676],110:[0,.47534,0,0,.52666],111:[0,.47534,0,0,.48885],112:[.18906,.52396,0,0,.50046],113:[.18906,.47534,0,0,.48912],114:[0,.47534,0,0,.38919],115:[0,.47534,0,0,.44266],116:[0,.62119,0,0,.33301],117:[0,.47534,0,0,.5172],118:[0,.52396,0,0,.5118],119:[0,.52396,0,0,.77351],120:[.18906,.47534,0,0,.38865],121:[.18906,.47534,0,0,.49884],122:[.18906,.47534,0,0,.39054],160:[0,0,0,0,.25],8216:[0,.69141,0,0,.21471],8217:[0,.69141,0,0,.21471],58112:[0,.62119,0,0,.49749],58113:[0,.62119,0,0,.4983],58114:[.18906,.69141,0,0,.33328],58115:[.18906,.69141,0,0,.32923],58116:[.18906,.47534,0,0,.50343],58117:[0,.69141,0,0,.33301],58118:[0,.62119,0,0,.33409],58119:[0,.47534,0,0,.50073]},"Main-Bold":{32:[0,0,0,0,.25],33:[0,.69444,0,0,.35],34:[0,.69444,0,0,.60278],35:[.19444,.69444,0,0,.95833],36:[.05556,.75,0,0,.575],37:[.05556,.75,0,0,.95833],38:[0,.69444,0,0,.89444],39:[0,.69444,0,0,.31944],40:[.25,.75,0,0,.44722],41:[.25,.75,0,0,.44722],42:[0,.75,0,0,.575],43:[.13333,.63333,0,0,.89444],44:[.19444,.15556,0,0,.31944],45:[0,.44444,0,0,.38333],46:[0,.15556,0,0,.31944],47:[.25,.75,0,0,.575],48:[0,.64444,0,0,.575],49:[0,.64444,0,0,.575],50:[0,.64444,0,0,.575],51:[0,.64444,0,0,.575],52:[0,.64444,0,0,.575],53:[0,.64444,0,0,.575],54:[0,.64444,0,0,.575],55:[0,.64444,0,0,.575],56:[0,.64444,0,0,.575],57:[0,.64444,0,0,.575],58:[0,.44444,0,0,.31944],59:[.19444,.44444,0,0,.31944],60:[.08556,.58556,0,0,.89444],61:[-.10889,.39111,0,0,.89444],62:[.08556,.58556,0,0,.89444],63:[0,.69444,0,0,.54305],64:[0,.69444,0,0,.89444],65:[0,.68611,0,0,.86944],66:[0,.68611,0,0,.81805],67:[0,.68611,0,0,.83055],68:[0,.68611,0,0,.88194],69:[0,.68611,0,0,.75555],70:[0,.68611,0,0,.72361],71:[0,.68611,0,0,.90416],72:[0,.68611,0,0,.9],73:[0,.68611,0,0,.43611],74:[0,.68611,0,0,.59444],75:[0,.68611,0,0,.90138],76:[0,.68611,0,0,.69166],77:[0,.68611,0,0,1.09166],78:[0,.68611,0,0,.9],79:[0,.68611,0,0,.86388],80:[0,.68611,0,0,.78611],81:[.19444,.68611,0,0,.86388],82:[0,.68611,0,0,.8625],83:[0,.68611,0,0,.63889],84:[0,.68611,0,0,.8],85:[0,.68611,0,0,.88472],86:[0,.68611,.01597,0,.86944],87:[0,.68611,.01597,0,1.18888],88:[0,.68611,0,0,.86944],89:[0,.68611,.02875,0,.86944],90:[0,.68611,0,0,.70277],91:[.25,.75,0,0,.31944],92:[.25,.75,0,0,.575],93:[.25,.75,0,0,.31944],94:[0,.69444,0,0,.575],95:[.31,.13444,.03194,0,.575],97:[0,.44444,0,0,.55902],98:[0,.69444,0,0,.63889],99:[0,.44444,0,0,.51111],100:[0,.69444,0,0,.63889],101:[0,.44444,0,0,.52708],102:[0,.69444,.10903,0,.35139],103:[.19444,.44444,.01597,0,.575],104:[0,.69444,0,0,.63889],105:[0,.69444,0,0,.31944],106:[.19444,.69444,0,0,.35139],107:[0,.69444,0,0,.60694],108:[0,.69444,0,0,.31944],109:[0,.44444,0,0,.95833],110:[0,.44444,0,0,.63889],111:[0,.44444,0,0,.575],112:[.19444,.44444,0,0,.63889],113:[.19444,.44444,0,0,.60694],114:[0,.44444,0,0,.47361],115:[0,.44444,0,0,.45361],116:[0,.63492,0,0,.44722],117:[0,.44444,0,0,.63889],118:[0,.44444,.01597,0,.60694],119:[0,.44444,.01597,0,.83055],120:[0,.44444,0,0,.60694],121:[.19444,.44444,.01597,0,.60694],122:[0,.44444,0,0,.51111],123:[.25,.75,0,0,.575],124:[.25,.75,0,0,.31944],125:[.25,.75,0,0,.575],126:[.35,.34444,0,0,.575],160:[0,0,0,0,.25],163:[0,.69444,0,0,.86853],168:[0,.69444,0,0,.575],172:[0,.44444,0,0,.76666],176:[0,.69444,0,0,.86944],177:[.13333,.63333,0,0,.89444],184:[.17014,0,0,0,.51111],198:[0,.68611,0,0,1.04166],215:[.13333,.63333,0,0,.89444],216:[.04861,.73472,0,0,.89444],223:[0,.69444,0,0,.59722],230:[0,.44444,0,0,.83055],247:[.13333,.63333,0,0,.89444],248:[.09722,.54167,0,0,.575],305:[0,.44444,0,0,.31944],338:[0,.68611,0,0,1.16944],339:[0,.44444,0,0,.89444],567:[.19444,.44444,0,0,.35139],710:[0,.69444,0,0,.575],711:[0,.63194,0,0,.575],713:[0,.59611,0,0,.575],714:[0,.69444,0,0,.575],715:[0,.69444,0,0,.575],728:[0,.69444,0,0,.575],729:[0,.69444,0,0,.31944],730:[0,.69444,0,0,.86944],732:[0,.69444,0,0,.575],733:[0,.69444,0,0,.575],915:[0,.68611,0,0,.69166],916:[0,.68611,0,0,.95833],920:[0,.68611,0,0,.89444],923:[0,.68611,0,0,.80555],926:[0,.68611,0,0,.76666],928:[0,.68611,0,0,.9],931:[0,.68611,0,0,.83055],933:[0,.68611,0,0,.89444],934:[0,.68611,0,0,.83055],936:[0,.68611,0,0,.89444],937:[0,.68611,0,0,.83055],8211:[0,.44444,.03194,0,.575],8212:[0,.44444,.03194,0,1.14999],8216:[0,.69444,0,0,.31944],8217:[0,.69444,0,0,.31944],8220:[0,.69444,0,0,.60278],8221:[0,.69444,0,0,.60278],8224:[.19444,.69444,0,0,.51111],8225:[.19444,.69444,0,0,.51111],8242:[0,.55556,0,0,.34444],8407:[0,.72444,.15486,0,.575],8463:[0,.69444,0,0,.66759],8465:[0,.69444,0,0,.83055],8467:[0,.69444,0,0,.47361],8472:[.19444,.44444,0,0,.74027],8476:[0,.69444,0,0,.83055],8501:[0,.69444,0,0,.70277],8592:[-.10889,.39111,0,0,1.14999],8593:[.19444,.69444,0,0,.575],8594:[-.10889,.39111,0,0,1.14999],8595:[.19444,.69444,0,0,.575],8596:[-.10889,.39111,0,0,1.14999],8597:[.25,.75,0,0,.575],8598:[.19444,.69444,0,0,1.14999],8599:[.19444,.69444,0,0,1.14999],8600:[.19444,.69444,0,0,1.14999],8601:[.19444,.69444,0,0,1.14999],8636:[-.10889,.39111,0,0,1.14999],8637:[-.10889,.39111,0,0,1.14999],8640:[-.10889,.39111,0,0,1.14999],8641:[-.10889,.39111,0,0,1.14999],8656:[-.10889,.39111,0,0,1.14999],8657:[.19444,.69444,0,0,.70277],8658:[-.10889,.39111,0,0,1.14999],8659:[.19444,.69444,0,0,.70277],8660:[-.10889,.39111,0,0,1.14999],8661:[.25,.75,0,0,.70277],8704:[0,.69444,0,0,.63889],8706:[0,.69444,.06389,0,.62847],8707:[0,.69444,0,0,.63889],8709:[.05556,.75,0,0,.575],8711:[0,.68611,0,0,.95833],8712:[.08556,.58556,0,0,.76666],8715:[.08556,.58556,0,0,.76666],8722:[.13333,.63333,0,0,.89444],8723:[.13333,.63333,0,0,.89444],8725:[.25,.75,0,0,.575],8726:[.25,.75,0,0,.575],8727:[-.02778,.47222,0,0,.575],8728:[-.02639,.47361,0,0,.575],8729:[-.02639,.47361,0,0,.575],8730:[.18,.82,0,0,.95833],8733:[0,.44444,0,0,.89444],8734:[0,.44444,0,0,1.14999],8736:[0,.69224,0,0,.72222],8739:[.25,.75,0,0,.31944],8741:[.25,.75,0,0,.575],8743:[0,.55556,0,0,.76666],8744:[0,.55556,0,0,.76666],8745:[0,.55556,0,0,.76666],8746:[0,.55556,0,0,.76666],8747:[.19444,.69444,.12778,0,.56875],8764:[-.10889,.39111,0,0,.89444],8768:[.19444,.69444,0,0,.31944],8771:[.00222,.50222,0,0,.89444],8773:[.027,.638,0,0,.894],8776:[.02444,.52444,0,0,.89444],8781:[.00222,.50222,0,0,.89444],8801:[.00222,.50222,0,0,.89444],8804:[.19667,.69667,0,0,.89444],8805:[.19667,.69667,0,0,.89444],8810:[.08556,.58556,0,0,1.14999],8811:[.08556,.58556,0,0,1.14999],8826:[.08556,.58556,0,0,.89444],8827:[.08556,.58556,0,0,.89444],8834:[.08556,.58556,0,0,.89444],8835:[.08556,.58556,0,0,.89444],8838:[.19667,.69667,0,0,.89444],8839:[.19667,.69667,0,0,.89444],8846:[0,.55556,0,0,.76666],8849:[.19667,.69667,0,0,.89444],8850:[.19667,.69667,0,0,.89444],8851:[0,.55556,0,0,.76666],8852:[0,.55556,0,0,.76666],8853:[.13333,.63333,0,0,.89444],8854:[.13333,.63333,0,0,.89444],8855:[.13333,.63333,0,0,.89444],8856:[.13333,.63333,0,0,.89444],8857:[.13333,.63333,0,0,.89444],8866:[0,.69444,0,0,.70277],8867:[0,.69444,0,0,.70277],8868:[0,.69444,0,0,.89444],8869:[0,.69444,0,0,.89444],8900:[-.02639,.47361,0,0,.575],8901:[-.02639,.47361,0,0,.31944],8902:[-.02778,.47222,0,0,.575],8968:[.25,.75,0,0,.51111],8969:[.25,.75,0,0,.51111],8970:[.25,.75,0,0,.51111],8971:[.25,.75,0,0,.51111],8994:[-.13889,.36111,0,0,1.14999],8995:[-.13889,.36111,0,0,1.14999],9651:[.19444,.69444,0,0,1.02222],9657:[-.02778,.47222,0,0,.575],9661:[.19444,.69444,0,0,1.02222],9667:[-.02778,.47222,0,0,.575],9711:[.19444,.69444,0,0,1.14999],9824:[.12963,.69444,0,0,.89444],9825:[.12963,.69444,0,0,.89444],9826:[.12963,.69444,0,0,.89444],9827:[.12963,.69444,0,0,.89444],9837:[0,.75,0,0,.44722],9838:[.19444,.69444,0,0,.44722],9839:[.19444,.69444,0,0,.44722],10216:[.25,.75,0,0,.44722],10217:[.25,.75,0,0,.44722],10815:[0,.68611,0,0,.9],10927:[.19667,.69667,0,0,.89444],10928:[.19667,.69667,0,0,.89444],57376:[.19444,.69444,0,0,0]},"Main-BoldItalic":{32:[0,0,0,0,.25],33:[0,.69444,.11417,0,.38611],34:[0,.69444,.07939,0,.62055],35:[.19444,.69444,.06833,0,.94444],37:[.05556,.75,.12861,0,.94444],38:[0,.69444,.08528,0,.88555],39:[0,.69444,.12945,0,.35555],40:[.25,.75,.15806,0,.47333],41:[.25,.75,.03306,0,.47333],42:[0,.75,.14333,0,.59111],43:[.10333,.60333,.03306,0,.88555],44:[.19444,.14722,0,0,.35555],45:[0,.44444,.02611,0,.41444],46:[0,.14722,0,0,.35555],47:[.25,.75,.15806,0,.59111],48:[0,.64444,.13167,0,.59111],49:[0,.64444,.13167,0,.59111],50:[0,.64444,.13167,0,.59111],51:[0,.64444,.13167,0,.59111],52:[.19444,.64444,.13167,0,.59111],53:[0,.64444,.13167,0,.59111],54:[0,.64444,.13167,0,.59111],55:[.19444,.64444,.13167,0,.59111],56:[0,.64444,.13167,0,.59111],57:[0,.64444,.13167,0,.59111],58:[0,.44444,.06695,0,.35555],59:[.19444,.44444,.06695,0,.35555],61:[-.10889,.39111,.06833,0,.88555],63:[0,.69444,.11472,0,.59111],64:[0,.69444,.09208,0,.88555],65:[0,.68611,0,0,.86555],66:[0,.68611,.0992,0,.81666],67:[0,.68611,.14208,0,.82666],68:[0,.68611,.09062,0,.87555],69:[0,.68611,.11431,0,.75666],70:[0,.68611,.12903,0,.72722],71:[0,.68611,.07347,0,.89527],72:[0,.68611,.17208,0,.8961],73:[0,.68611,.15681,0,.47166],74:[0,.68611,.145,0,.61055],75:[0,.68611,.14208,0,.89499],76:[0,.68611,0,0,.69777],77:[0,.68611,.17208,0,1.07277],78:[0,.68611,.17208,0,.8961],79:[0,.68611,.09062,0,.85499],80:[0,.68611,.0992,0,.78721],81:[.19444,.68611,.09062,0,.85499],82:[0,.68611,.02559,0,.85944],83:[0,.68611,.11264,0,.64999],84:[0,.68611,.12903,0,.7961],85:[0,.68611,.17208,0,.88083],86:[0,.68611,.18625,0,.86555],87:[0,.68611,.18625,0,1.15999],88:[0,.68611,.15681,0,.86555],89:[0,.68611,.19803,0,.86555],90:[0,.68611,.14208,0,.70888],91:[.25,.75,.1875,0,.35611],93:[.25,.75,.09972,0,.35611],94:[0,.69444,.06709,0,.59111],95:[.31,.13444,.09811,0,.59111],97:[0,.44444,.09426,0,.59111],98:[0,.69444,.07861,0,.53222],99:[0,.44444,.05222,0,.53222],100:[0,.69444,.10861,0,.59111],101:[0,.44444,.085,0,.53222],102:[.19444,.69444,.21778,0,.4],103:[.19444,.44444,.105,0,.53222],104:[0,.69444,.09426,0,.59111],105:[0,.69326,.11387,0,.35555],106:[.19444,.69326,.1672,0,.35555],107:[0,.69444,.11111,0,.53222],108:[0,.69444,.10861,0,.29666],109:[0,.44444,.09426,0,.94444],110:[0,.44444,.09426,0,.64999],111:[0,.44444,.07861,0,.59111],112:[.19444,.44444,.07861,0,.59111],113:[.19444,.44444,.105,0,.53222],114:[0,.44444,.11111,0,.50167],115:[0,.44444,.08167,0,.48694],116:[0,.63492,.09639,0,.385],117:[0,.44444,.09426,0,.62055],118:[0,.44444,.11111,0,.53222],119:[0,.44444,.11111,0,.76777],120:[0,.44444,.12583,0,.56055],121:[.19444,.44444,.105,0,.56166],122:[0,.44444,.13889,0,.49055],126:[.35,.34444,.11472,0,.59111],160:[0,0,0,0,.25],168:[0,.69444,.11473,0,.59111],176:[0,.69444,0,0,.94888],184:[.17014,0,0,0,.53222],198:[0,.68611,.11431,0,1.02277],216:[.04861,.73472,.09062,0,.88555],223:[.19444,.69444,.09736,0,.665],230:[0,.44444,.085,0,.82666],248:[.09722,.54167,.09458,0,.59111],305:[0,.44444,.09426,0,.35555],338:[0,.68611,.11431,0,1.14054],339:[0,.44444,.085,0,.82666],567:[.19444,.44444,.04611,0,.385],710:[0,.69444,.06709,0,.59111],711:[0,.63194,.08271,0,.59111],713:[0,.59444,.10444,0,.59111],714:[0,.69444,.08528,0,.59111],715:[0,.69444,0,0,.59111],728:[0,.69444,.10333,0,.59111],729:[0,.69444,.12945,0,.35555],730:[0,.69444,0,0,.94888],732:[0,.69444,.11472,0,.59111],733:[0,.69444,.11472,0,.59111],915:[0,.68611,.12903,0,.69777],916:[0,.68611,0,0,.94444],920:[0,.68611,.09062,0,.88555],923:[0,.68611,0,0,.80666],926:[0,.68611,.15092,0,.76777],928:[0,.68611,.17208,0,.8961],931:[0,.68611,.11431,0,.82666],933:[0,.68611,.10778,0,.88555],934:[0,.68611,.05632,0,.82666],936:[0,.68611,.10778,0,.88555],937:[0,.68611,.0992,0,.82666],8211:[0,.44444,.09811,0,.59111],8212:[0,.44444,.09811,0,1.18221],8216:[0,.69444,.12945,0,.35555],8217:[0,.69444,.12945,0,.35555],8220:[0,.69444,.16772,0,.62055],8221:[0,.69444,.07939,0,.62055]},"Main-Italic":{32:[0,0,0,0,.25],33:[0,.69444,.12417,0,.30667],34:[0,.69444,.06961,0,.51444],35:[.19444,.69444,.06616,0,.81777],37:[.05556,.75,.13639,0,.81777],38:[0,.69444,.09694,0,.76666],39:[0,.69444,.12417,0,.30667],40:[.25,.75,.16194,0,.40889],41:[.25,.75,.03694,0,.40889],42:[0,.75,.14917,0,.51111],43:[.05667,.56167,.03694,0,.76666],44:[.19444,.10556,0,0,.30667],45:[0,.43056,.02826,0,.35778],46:[0,.10556,0,0,.30667],47:[.25,.75,.16194,0,.51111],48:[0,.64444,.13556,0,.51111],49:[0,.64444,.13556,0,.51111],50:[0,.64444,.13556,0,.51111],51:[0,.64444,.13556,0,.51111],52:[.19444,.64444,.13556,0,.51111],53:[0,.64444,.13556,0,.51111],54:[0,.64444,.13556,0,.51111],55:[.19444,.64444,.13556,0,.51111],56:[0,.64444,.13556,0,.51111],57:[0,.64444,.13556,0,.51111],58:[0,.43056,.0582,0,.30667],59:[.19444,.43056,.0582,0,.30667],61:[-.13313,.36687,.06616,0,.76666],63:[0,.69444,.1225,0,.51111],64:[0,.69444,.09597,0,.76666],65:[0,.68333,0,0,.74333],66:[0,.68333,.10257,0,.70389],67:[0,.68333,.14528,0,.71555],68:[0,.68333,.09403,0,.755],69:[0,.68333,.12028,0,.67833],70:[0,.68333,.13305,0,.65277],71:[0,.68333,.08722,0,.77361],72:[0,.68333,.16389,0,.74333],73:[0,.68333,.15806,0,.38555],74:[0,.68333,.14028,0,.525],75:[0,.68333,.14528,0,.76888],76:[0,.68333,0,0,.62722],77:[0,.68333,.16389,0,.89666],78:[0,.68333,.16389,0,.74333],79:[0,.68333,.09403,0,.76666],80:[0,.68333,.10257,0,.67833],81:[.19444,.68333,.09403,0,.76666],82:[0,.68333,.03868,0,.72944],83:[0,.68333,.11972,0,.56222],84:[0,.68333,.13305,0,.71555],85:[0,.68333,.16389,0,.74333],86:[0,.68333,.18361,0,.74333],87:[0,.68333,.18361,0,.99888],88:[0,.68333,.15806,0,.74333],89:[0,.68333,.19383,0,.74333],90:[0,.68333,.14528,0,.61333],91:[.25,.75,.1875,0,.30667],93:[.25,.75,.10528,0,.30667],94:[0,.69444,.06646,0,.51111],95:[.31,.12056,.09208,0,.51111],97:[0,.43056,.07671,0,.51111],98:[0,.69444,.06312,0,.46],99:[0,.43056,.05653,0,.46],100:[0,.69444,.10333,0,.51111],101:[0,.43056,.07514,0,.46],102:[.19444,.69444,.21194,0,.30667],103:[.19444,.43056,.08847,0,.46],104:[0,.69444,.07671,0,.51111],105:[0,.65536,.1019,0,.30667],106:[.19444,.65536,.14467,0,.30667],107:[0,.69444,.10764,0,.46],108:[0,.69444,.10333,0,.25555],109:[0,.43056,.07671,0,.81777],110:[0,.43056,.07671,0,.56222],111:[0,.43056,.06312,0,.51111],112:[.19444,.43056,.06312,0,.51111],113:[.19444,.43056,.08847,0,.46],114:[0,.43056,.10764,0,.42166],115:[0,.43056,.08208,0,.40889],116:[0,.61508,.09486,0,.33222],117:[0,.43056,.07671,0,.53666],118:[0,.43056,.10764,0,.46],119:[0,.43056,.10764,0,.66444],120:[0,.43056,.12042,0,.46389],121:[.19444,.43056,.08847,0,.48555],122:[0,.43056,.12292,0,.40889],126:[.35,.31786,.11585,0,.51111],160:[0,0,0,0,.25],168:[0,.66786,.10474,0,.51111],176:[0,.69444,0,0,.83129],184:[.17014,0,0,0,.46],198:[0,.68333,.12028,0,.88277],216:[.04861,.73194,.09403,0,.76666],223:[.19444,.69444,.10514,0,.53666],230:[0,.43056,.07514,0,.71555],248:[.09722,.52778,.09194,0,.51111],338:[0,.68333,.12028,0,.98499],339:[0,.43056,.07514,0,.71555],710:[0,.69444,.06646,0,.51111],711:[0,.62847,.08295,0,.51111],713:[0,.56167,.10333,0,.51111],714:[0,.69444,.09694,0,.51111],715:[0,.69444,0,0,.51111],728:[0,.69444,.10806,0,.51111],729:[0,.66786,.11752,0,.30667],730:[0,.69444,0,0,.83129],732:[0,.66786,.11585,0,.51111],733:[0,.69444,.1225,0,.51111],915:[0,.68333,.13305,0,.62722],916:[0,.68333,0,0,.81777],920:[0,.68333,.09403,0,.76666],923:[0,.68333,0,0,.69222],926:[0,.68333,.15294,0,.66444],928:[0,.68333,.16389,0,.74333],931:[0,.68333,.12028,0,.71555],933:[0,.68333,.11111,0,.76666],934:[0,.68333,.05986,0,.71555],936:[0,.68333,.11111,0,.76666],937:[0,.68333,.10257,0,.71555],8211:[0,.43056,.09208,0,.51111],8212:[0,.43056,.09208,0,1.02222],8216:[0,.69444,.12417,0,.30667],8217:[0,.69444,.12417,0,.30667],8220:[0,.69444,.1685,0,.51444],8221:[0,.69444,.06961,0,.51444],8463:[0,.68889,0,0,.54028]},"Main-Regular":{32:[0,0,0,0,.25],33:[0,.69444,0,0,.27778],34:[0,.69444,0,0,.5],35:[.19444,.69444,0,0,.83334],36:[.05556,.75,0,0,.5],37:[.05556,.75,0,0,.83334],38:[0,.69444,0,0,.77778],39:[0,.69444,0,0,.27778],40:[.25,.75,0,0,.38889],41:[.25,.75,0,0,.38889],42:[0,.75,0,0,.5],43:[.08333,.58333,0,0,.77778],44:[.19444,.10556,0,0,.27778],45:[0,.43056,0,0,.33333],46:[0,.10556,0,0,.27778],47:[.25,.75,0,0,.5],48:[0,.64444,0,0,.5],49:[0,.64444,0,0,.5],50:[0,.64444,0,0,.5],51:[0,.64444,0,0,.5],52:[0,.64444,0,0,.5],53:[0,.64444,0,0,.5],54:[0,.64444,0,0,.5],55:[0,.64444,0,0,.5],56:[0,.64444,0,0,.5],57:[0,.64444,0,0,.5],58:[0,.43056,0,0,.27778],59:[.19444,.43056,0,0,.27778],60:[.0391,.5391,0,0,.77778],61:[-.13313,.36687,0,0,.77778],62:[.0391,.5391,0,0,.77778],63:[0,.69444,0,0,.47222],64:[0,.69444,0,0,.77778],65:[0,.68333,0,0,.75],66:[0,.68333,0,0,.70834],67:[0,.68333,0,0,.72222],68:[0,.68333,0,0,.76389],69:[0,.68333,0,0,.68056],70:[0,.68333,0,0,.65278],71:[0,.68333,0,0,.78472],72:[0,.68333,0,0,.75],73:[0,.68333,0,0,.36111],74:[0,.68333,0,0,.51389],75:[0,.68333,0,0,.77778],76:[0,.68333,0,0,.625],77:[0,.68333,0,0,.91667],78:[0,.68333,0,0,.75],79:[0,.68333,0,0,.77778],80:[0,.68333,0,0,.68056],81:[.19444,.68333,0,0,.77778],82:[0,.68333,0,0,.73611],83:[0,.68333,0,0,.55556],84:[0,.68333,0,0,.72222],85:[0,.68333,0,0,.75],86:[0,.68333,.01389,0,.75],87:[0,.68333,.01389,0,1.02778],88:[0,.68333,0,0,.75],89:[0,.68333,.025,0,.75],90:[0,.68333,0,0,.61111],91:[.25,.75,0,0,.27778],92:[.25,.75,0,0,.5],93:[.25,.75,0,0,.27778],94:[0,.69444,0,0,.5],95:[.31,.12056,.02778,0,.5],97:[0,.43056,0,0,.5],98:[0,.69444,0,0,.55556],99:[0,.43056,0,0,.44445],100:[0,.69444,0,0,.55556],101:[0,.43056,0,0,.44445],102:[0,.69444,.07778,0,.30556],103:[.19444,.43056,.01389,0,.5],104:[0,.69444,0,0,.55556],105:[0,.66786,0,0,.27778],106:[.19444,.66786,0,0,.30556],107:[0,.69444,0,0,.52778],108:[0,.69444,0,0,.27778],109:[0,.43056,0,0,.83334],110:[0,.43056,0,0,.55556],111:[0,.43056,0,0,.5],112:[.19444,.43056,0,0,.55556],113:[.19444,.43056,0,0,.52778],114:[0,.43056,0,0,.39167],115:[0,.43056,0,0,.39445],116:[0,.61508,0,0,.38889],117:[0,.43056,0,0,.55556],118:[0,.43056,.01389,0,.52778],119:[0,.43056,.01389,0,.72222],120:[0,.43056,0,0,.52778],121:[.19444,.43056,.01389,0,.52778],122:[0,.43056,0,0,.44445],123:[.25,.75,0,0,.5],124:[.25,.75,0,0,.27778],125:[.25,.75,0,0,.5],126:[.35,.31786,0,0,.5],160:[0,0,0,0,.25],163:[0,.69444,0,0,.76909],167:[.19444,.69444,0,0,.44445],168:[0,.66786,0,0,.5],172:[0,.43056,0,0,.66667],176:[0,.69444,0,0,.75],177:[.08333,.58333,0,0,.77778],182:[.19444,.69444,0,0,.61111],184:[.17014,0,0,0,.44445],198:[0,.68333,0,0,.90278],215:[.08333,.58333,0,0,.77778],216:[.04861,.73194,0,0,.77778],223:[0,.69444,0,0,.5],230:[0,.43056,0,0,.72222],247:[.08333,.58333,0,0,.77778],248:[.09722,.52778,0,0,.5],305:[0,.43056,0,0,.27778],338:[0,.68333,0,0,1.01389],339:[0,.43056,0,0,.77778],567:[.19444,.43056,0,0,.30556],710:[0,.69444,0,0,.5],711:[0,.62847,0,0,.5],713:[0,.56778,0,0,.5],714:[0,.69444,0,0,.5],715:[0,.69444,0,0,.5],728:[0,.69444,0,0,.5],729:[0,.66786,0,0,.27778],730:[0,.69444,0,0,.75],732:[0,.66786,0,0,.5],733:[0,.69444,0,0,.5],915:[0,.68333,0,0,.625],916:[0,.68333,0,0,.83334],920:[0,.68333,0,0,.77778],923:[0,.68333,0,0,.69445],926:[0,.68333,0,0,.66667],928:[0,.68333,0,0,.75],931:[0,.68333,0,0,.72222],933:[0,.68333,0,0,.77778],934:[0,.68333,0,0,.72222],936:[0,.68333,0,0,.77778],937:[0,.68333,0,0,.72222],8211:[0,.43056,.02778,0,.5],8212:[0,.43056,.02778,0,1],8216:[0,.69444,0,0,.27778],8217:[0,.69444,0,0,.27778],8220:[0,.69444,0,0,.5],8221:[0,.69444,0,0,.5],8224:[.19444,.69444,0,0,.44445],8225:[.19444,.69444,0,0,.44445],8230:[0,.123,0,0,1.172],8242:[0,.55556,0,0,.275],8407:[0,.71444,.15382,0,.5],8463:[0,.68889,0,0,.54028],8465:[0,.69444,0,0,.72222],8467:[0,.69444,0,.11111,.41667],8472:[.19444,.43056,0,.11111,.63646],8476:[0,.69444,0,0,.72222],8501:[0,.69444,0,0,.61111],8592:[-.13313,.36687,0,0,1],8593:[.19444,.69444,0,0,.5],8594:[-.13313,.36687,0,0,1],8595:[.19444,.69444,0,0,.5],8596:[-.13313,.36687,0,0,1],8597:[.25,.75,0,0,.5],8598:[.19444,.69444,0,0,1],8599:[.19444,.69444,0,0,1],8600:[.19444,.69444,0,0,1],8601:[.19444,.69444,0,0,1],8614:[.011,.511,0,0,1],8617:[.011,.511,0,0,1.126],8618:[.011,.511,0,0,1.126],8636:[-.13313,.36687,0,0,1],8637:[-.13313,.36687,0,0,1],8640:[-.13313,.36687,0,0,1],8641:[-.13313,.36687,0,0,1],8652:[.011,.671,0,0,1],8656:[-.13313,.36687,0,0,1],8657:[.19444,.69444,0,0,.61111],8658:[-.13313,.36687,0,0,1],8659:[.19444,.69444,0,0,.61111],8660:[-.13313,.36687,0,0,1],8661:[.25,.75,0,0,.61111],8704:[0,.69444,0,0,.55556],8706:[0,.69444,.05556,.08334,.5309],8707:[0,.69444,0,0,.55556],8709:[.05556,.75,0,0,.5],8711:[0,.68333,0,0,.83334],8712:[.0391,.5391,0,0,.66667],8715:[.0391,.5391,0,0,.66667],8722:[.08333,.58333,0,0,.77778],8723:[.08333,.58333,0,0,.77778],8725:[.25,.75,0,0,.5],8726:[.25,.75,0,0,.5],8727:[-.03472,.46528,0,0,.5],8728:[-.05555,.44445,0,0,.5],8729:[-.05555,.44445,0,0,.5],8730:[.2,.8,0,0,.83334],8733:[0,.43056,0,0,.77778],8734:[0,.43056,0,0,1],8736:[0,.69224,0,0,.72222],8739:[.25,.75,0,0,.27778],8741:[.25,.75,0,0,.5],8743:[0,.55556,0,0,.66667],8744:[0,.55556,0,0,.66667],8745:[0,.55556,0,0,.66667],8746:[0,.55556,0,0,.66667],8747:[.19444,.69444,.11111,0,.41667],8764:[-.13313,.36687,0,0,.77778],8768:[.19444,.69444,0,0,.27778],8771:[-.03625,.46375,0,0,.77778],8773:[-.022,.589,0,0,.778],8776:[-.01688,.48312,0,0,.77778],8781:[-.03625,.46375,0,0,.77778],8784:[-.133,.673,0,0,.778],8801:[-.03625,.46375,0,0,.77778],8804:[.13597,.63597,0,0,.77778],8805:[.13597,.63597,0,0,.77778],8810:[.0391,.5391,0,0,1],8811:[.0391,.5391,0,0,1],8826:[.0391,.5391,0,0,.77778],8827:[.0391,.5391,0,0,.77778],8834:[.0391,.5391,0,0,.77778],8835:[.0391,.5391,0,0,.77778],8838:[.13597,.63597,0,0,.77778],8839:[.13597,.63597,0,0,.77778],8846:[0,.55556,0,0,.66667],8849:[.13597,.63597,0,0,.77778],8850:[.13597,.63597,0,0,.77778],8851:[0,.55556,0,0,.66667],8852:[0,.55556,0,0,.66667],8853:[.08333,.58333,0,0,.77778],8854:[.08333,.58333,0,0,.77778],8855:[.08333,.58333,0,0,.77778],8856:[.08333,.58333,0,0,.77778],8857:[.08333,.58333,0,0,.77778],8866:[0,.69444,0,0,.61111],8867:[0,.69444,0,0,.61111],8868:[0,.69444,0,0,.77778],8869:[0,.69444,0,0,.77778],8872:[.249,.75,0,0,.867],8900:[-.05555,.44445,0,0,.5],8901:[-.05555,.44445,0,0,.27778],8902:[-.03472,.46528,0,0,.5],8904:[.005,.505,0,0,.9],8942:[.03,.903,0,0,.278],8943:[-.19,.313,0,0,1.172],8945:[-.1,.823,0,0,1.282],8968:[.25,.75,0,0,.44445],8969:[.25,.75,0,0,.44445],8970:[.25,.75,0,0,.44445],8971:[.25,.75,0,0,.44445],8994:[-.14236,.35764,0,0,1],8995:[-.14236,.35764,0,0,1],9136:[.244,.744,0,0,.412],9137:[.244,.745,0,0,.412],9651:[.19444,.69444,0,0,.88889],9657:[-.03472,.46528,0,0,.5],9661:[.19444,.69444,0,0,.88889],9667:[-.03472,.46528,0,0,.5],9711:[.19444,.69444,0,0,1],9824:[.12963,.69444,0,0,.77778],9825:[.12963,.69444,0,0,.77778],9826:[.12963,.69444,0,0,.77778],9827:[.12963,.69444,0,0,.77778],9837:[0,.75,0,0,.38889],9838:[.19444,.69444,0,0,.38889],9839:[.19444,.69444,0,0,.38889],10216:[.25,.75,0,0,.38889],10217:[.25,.75,0,0,.38889],10222:[.244,.744,0,0,.412],10223:[.244,.745,0,0,.412],10229:[.011,.511,0,0,1.609],10230:[.011,.511,0,0,1.638],10231:[.011,.511,0,0,1.859],10232:[.024,.525,0,0,1.609],10233:[.024,.525,0,0,1.638],10234:[.024,.525,0,0,1.858],10236:[.011,.511,0,0,1.638],10815:[0,.68333,0,0,.75],10927:[.13597,.63597,0,0,.77778],10928:[.13597,.63597,0,0,.77778],57376:[.19444,.69444,0,0,0]},"Math-BoldItalic":{32:[0,0,0,0,.25],48:[0,.44444,0,0,.575],49:[0,.44444,0,0,.575],50:[0,.44444,0,0,.575],51:[.19444,.44444,0,0,.575],52:[.19444,.44444,0,0,.575],53:[.19444,.44444,0,0,.575],54:[0,.64444,0,0,.575],55:[.19444,.44444,0,0,.575],56:[0,.64444,0,0,.575],57:[.19444,.44444,0,0,.575],65:[0,.68611,0,0,.86944],66:[0,.68611,.04835,0,.8664],67:[0,.68611,.06979,0,.81694],68:[0,.68611,.03194,0,.93812],69:[0,.68611,.05451,0,.81007],70:[0,.68611,.15972,0,.68889],71:[0,.68611,0,0,.88673],72:[0,.68611,.08229,0,.98229],73:[0,.68611,.07778,0,.51111],74:[0,.68611,.10069,0,.63125],75:[0,.68611,.06979,0,.97118],76:[0,.68611,0,0,.75555],77:[0,.68611,.11424,0,1.14201],78:[0,.68611,.11424,0,.95034],79:[0,.68611,.03194,0,.83666],80:[0,.68611,.15972,0,.72309],81:[.19444,.68611,0,0,.86861],82:[0,.68611,.00421,0,.87235],83:[0,.68611,.05382,0,.69271],84:[0,.68611,.15972,0,.63663],85:[0,.68611,.11424,0,.80027],86:[0,.68611,.25555,0,.67778],87:[0,.68611,.15972,0,1.09305],88:[0,.68611,.07778,0,.94722],89:[0,.68611,.25555,0,.67458],90:[0,.68611,.06979,0,.77257],97:[0,.44444,0,0,.63287],98:[0,.69444,0,0,.52083],99:[0,.44444,0,0,.51342],100:[0,.69444,0,0,.60972],101:[0,.44444,0,0,.55361],102:[.19444,.69444,.11042,0,.56806],103:[.19444,.44444,.03704,0,.5449],104:[0,.69444,0,0,.66759],105:[0,.69326,0,0,.4048],106:[.19444,.69326,.0622,0,.47083],107:[0,.69444,.01852,0,.6037],108:[0,.69444,.0088,0,.34815],109:[0,.44444,0,0,1.0324],110:[0,.44444,0,0,.71296],111:[0,.44444,0,0,.58472],112:[.19444,.44444,0,0,.60092],113:[.19444,.44444,.03704,0,.54213],114:[0,.44444,.03194,0,.5287],115:[0,.44444,0,0,.53125],116:[0,.63492,0,0,.41528],117:[0,.44444,0,0,.68102],118:[0,.44444,.03704,0,.56666],119:[0,.44444,.02778,0,.83148],120:[0,.44444,0,0,.65903],121:[.19444,.44444,.03704,0,.59028],122:[0,.44444,.04213,0,.55509],160:[0,0,0,0,.25],915:[0,.68611,.15972,0,.65694],916:[0,.68611,0,0,.95833],920:[0,.68611,.03194,0,.86722],923:[0,.68611,0,0,.80555],926:[0,.68611,.07458,0,.84125],928:[0,.68611,.08229,0,.98229],931:[0,.68611,.05451,0,.88507],933:[0,.68611,.15972,0,.67083],934:[0,.68611,0,0,.76666],936:[0,.68611,.11653,0,.71402],937:[0,.68611,.04835,0,.8789],945:[0,.44444,0,0,.76064],946:[.19444,.69444,.03403,0,.65972],947:[.19444,.44444,.06389,0,.59003],948:[0,.69444,.03819,0,.52222],949:[0,.44444,0,0,.52882],950:[.19444,.69444,.06215,0,.50833],951:[.19444,.44444,.03704,0,.6],952:[0,.69444,.03194,0,.5618],953:[0,.44444,0,0,.41204],954:[0,.44444,0,0,.66759],955:[0,.69444,0,0,.67083],956:[.19444,.44444,0,0,.70787],957:[0,.44444,.06898,0,.57685],958:[.19444,.69444,.03021,0,.50833],959:[0,.44444,0,0,.58472],960:[0,.44444,.03704,0,.68241],961:[.19444,.44444,0,0,.6118],962:[.09722,.44444,.07917,0,.42361],963:[0,.44444,.03704,0,.68588],964:[0,.44444,.13472,0,.52083],965:[0,.44444,.03704,0,.63055],966:[.19444,.44444,0,0,.74722],967:[.19444,.44444,0,0,.71805],968:[.19444,.69444,.03704,0,.75833],969:[0,.44444,.03704,0,.71782],977:[0,.69444,0,0,.69155],981:[.19444,.69444,0,0,.7125],982:[0,.44444,.03194,0,.975],1009:[.19444,.44444,0,0,.6118],1013:[0,.44444,0,0,.48333],57649:[0,.44444,0,0,.39352],57911:[.19444,.44444,0,0,.43889]},"Math-Italic":{32:[0,0,0,0,.25],48:[0,.43056,0,0,.5],49:[0,.43056,0,0,.5],50:[0,.43056,0,0,.5],51:[.19444,.43056,0,0,.5],52:[.19444,.43056,0,0,.5],53:[.19444,.43056,0,0,.5],54:[0,.64444,0,0,.5],55:[.19444,.43056,0,0,.5],56:[0,.64444,0,0,.5],57:[.19444,.43056,0,0,.5],65:[0,.68333,0,.13889,.75],66:[0,.68333,.05017,.08334,.75851],67:[0,.68333,.07153,.08334,.71472],68:[0,.68333,.02778,.05556,.82792],69:[0,.68333,.05764,.08334,.7382],70:[0,.68333,.13889,.08334,.64306],71:[0,.68333,0,.08334,.78625],72:[0,.68333,.08125,.05556,.83125],73:[0,.68333,.07847,.11111,.43958],74:[0,.68333,.09618,.16667,.55451],75:[0,.68333,.07153,.05556,.84931],76:[0,.68333,0,.02778,.68056],77:[0,.68333,.10903,.08334,.97014],78:[0,.68333,.10903,.08334,.80347],79:[0,.68333,.02778,.08334,.76278],80:[0,.68333,.13889,.08334,.64201],81:[.19444,.68333,0,.08334,.79056],82:[0,.68333,.00773,.08334,.75929],83:[0,.68333,.05764,.08334,.6132],84:[0,.68333,.13889,.08334,.58438],85:[0,.68333,.10903,.02778,.68278],86:[0,.68333,.22222,0,.58333],87:[0,.68333,.13889,0,.94445],88:[0,.68333,.07847,.08334,.82847],89:[0,.68333,.22222,0,.58056],90:[0,.68333,.07153,.08334,.68264],97:[0,.43056,0,0,.52859],98:[0,.69444,0,0,.42917],99:[0,.43056,0,.05556,.43276],100:[0,.69444,0,.16667,.52049],101:[0,.43056,0,.05556,.46563],102:[.19444,.69444,.10764,.16667,.48959],103:[.19444,.43056,.03588,.02778,.47697],104:[0,.69444,0,0,.57616],105:[0,.65952,0,0,.34451],106:[.19444,.65952,.05724,0,.41181],107:[0,.69444,.03148,0,.5206],108:[0,.69444,.01968,.08334,.29838],109:[0,.43056,0,0,.87801],110:[0,.43056,0,0,.60023],111:[0,.43056,0,.05556,.48472],112:[.19444,.43056,0,.08334,.50313],113:[.19444,.43056,.03588,.08334,.44641],114:[0,.43056,.02778,.05556,.45116],115:[0,.43056,0,.05556,.46875],116:[0,.61508,0,.08334,.36111],117:[0,.43056,0,.02778,.57246],118:[0,.43056,.03588,.02778,.48472],119:[0,.43056,.02691,.08334,.71592],120:[0,.43056,0,.02778,.57153],121:[.19444,.43056,.03588,.05556,.49028],122:[0,.43056,.04398,.05556,.46505],160:[0,0,0,0,.25],915:[0,.68333,.13889,.08334,.61528],916:[0,.68333,0,.16667,.83334],920:[0,.68333,.02778,.08334,.76278],923:[0,.68333,0,.16667,.69445],926:[0,.68333,.07569,.08334,.74236],928:[0,.68333,.08125,.05556,.83125],931:[0,.68333,.05764,.08334,.77986],933:[0,.68333,.13889,.05556,.58333],934:[0,.68333,0,.08334,.66667],936:[0,.68333,.11,.05556,.61222],937:[0,.68333,.05017,.08334,.7724],945:[0,.43056,.0037,.02778,.6397],946:[.19444,.69444,.05278,.08334,.56563],947:[.19444,.43056,.05556,0,.51773],948:[0,.69444,.03785,.05556,.44444],949:[0,.43056,0,.08334,.46632],950:[.19444,.69444,.07378,.08334,.4375],951:[.19444,.43056,.03588,.05556,.49653],952:[0,.69444,.02778,.08334,.46944],953:[0,.43056,0,.05556,.35394],954:[0,.43056,0,0,.57616],955:[0,.69444,0,0,.58334],956:[.19444,.43056,0,.02778,.60255],957:[0,.43056,.06366,.02778,.49398],958:[.19444,.69444,.04601,.11111,.4375],959:[0,.43056,0,.05556,.48472],960:[0,.43056,.03588,0,.57003],961:[.19444,.43056,0,.08334,.51702],962:[.09722,.43056,.07986,.08334,.36285],963:[0,.43056,.03588,0,.57141],964:[0,.43056,.1132,.02778,.43715],965:[0,.43056,.03588,.02778,.54028],966:[.19444,.43056,0,.08334,.65417],967:[.19444,.43056,0,.05556,.62569],968:[.19444,.69444,.03588,.11111,.65139],969:[0,.43056,.03588,0,.62245],977:[0,.69444,0,.08334,.59144],981:[.19444,.69444,0,.08334,.59583],982:[0,.43056,.02778,0,.82813],1009:[.19444,.43056,0,.08334,.51702],1013:[0,.43056,0,.05556,.4059],57649:[0,.43056,0,.02778,.32246],57911:[.19444,.43056,0,.08334,.38403]},"SansSerif-Bold":{32:[0,0,0,0,.25],33:[0,.69444,0,0,.36667],34:[0,.69444,0,0,.55834],35:[.19444,.69444,0,0,.91667],36:[.05556,.75,0,0,.55],37:[.05556,.75,0,0,1.02912],38:[0,.69444,0,0,.83056],39:[0,.69444,0,0,.30556],40:[.25,.75,0,0,.42778],41:[.25,.75,0,0,.42778],42:[0,.75,0,0,.55],43:[.11667,.61667,0,0,.85556],44:[.10556,.13056,0,0,.30556],45:[0,.45833,0,0,.36667],46:[0,.13056,0,0,.30556],47:[.25,.75,0,0,.55],48:[0,.69444,0,0,.55],49:[0,.69444,0,0,.55],50:[0,.69444,0,0,.55],51:[0,.69444,0,0,.55],52:[0,.69444,0,0,.55],53:[0,.69444,0,0,.55],54:[0,.69444,0,0,.55],55:[0,.69444,0,0,.55],56:[0,.69444,0,0,.55],57:[0,.69444,0,0,.55],58:[0,.45833,0,0,.30556],59:[.10556,.45833,0,0,.30556],61:[-.09375,.40625,0,0,.85556],63:[0,.69444,0,0,.51945],64:[0,.69444,0,0,.73334],65:[0,.69444,0,0,.73334],66:[0,.69444,0,0,.73334],67:[0,.69444,0,0,.70278],68:[0,.69444,0,0,.79445],69:[0,.69444,0,0,.64167],70:[0,.69444,0,0,.61111],71:[0,.69444,0,0,.73334],72:[0,.69444,0,0,.79445],73:[0,.69444,0,0,.33056],74:[0,.69444,0,0,.51945],75:[0,.69444,0,0,.76389],76:[0,.69444,0,0,.58056],77:[0,.69444,0,0,.97778],78:[0,.69444,0,0,.79445],79:[0,.69444,0,0,.79445],80:[0,.69444,0,0,.70278],81:[.10556,.69444,0,0,.79445],82:[0,.69444,0,0,.70278],83:[0,.69444,0,0,.61111],84:[0,.69444,0,0,.73334],85:[0,.69444,0,0,.76389],86:[0,.69444,.01528,0,.73334],87:[0,.69444,.01528,0,1.03889],88:[0,.69444,0,0,.73334],89:[0,.69444,.0275,0,.73334],90:[0,.69444,0,0,.67223],91:[.25,.75,0,0,.34306],93:[.25,.75,0,0,.34306],94:[0,.69444,0,0,.55],95:[.35,.10833,.03056,0,.55],97:[0,.45833,0,0,.525],98:[0,.69444,0,0,.56111],99:[0,.45833,0,0,.48889],100:[0,.69444,0,0,.56111],101:[0,.45833,0,0,.51111],102:[0,.69444,.07639,0,.33611],103:[.19444,.45833,.01528,0,.55],104:[0,.69444,0,0,.56111],105:[0,.69444,0,0,.25556],106:[.19444,.69444,0,0,.28611],107:[0,.69444,0,0,.53056],108:[0,.69444,0,0,.25556],109:[0,.45833,0,0,.86667],110:[0,.45833,0,0,.56111],111:[0,.45833,0,0,.55],112:[.19444,.45833,0,0,.56111],113:[.19444,.45833,0,0,.56111],114:[0,.45833,.01528,0,.37222],115:[0,.45833,0,0,.42167],116:[0,.58929,0,0,.40417],117:[0,.45833,0,0,.56111],118:[0,.45833,.01528,0,.5],119:[0,.45833,.01528,0,.74445],120:[0,.45833,0,0,.5],121:[.19444,.45833,.01528,0,.5],122:[0,.45833,0,0,.47639],126:[.35,.34444,0,0,.55],160:[0,0,0,0,.25],168:[0,.69444,0,0,.55],176:[0,.69444,0,0,.73334],180:[0,.69444,0,0,.55],184:[.17014,0,0,0,.48889],305:[0,.45833,0,0,.25556],567:[.19444,.45833,0,0,.28611],710:[0,.69444,0,0,.55],711:[0,.63542,0,0,.55],713:[0,.63778,0,0,.55],728:[0,.69444,0,0,.55],729:[0,.69444,0,0,.30556],730:[0,.69444,0,0,.73334],732:[0,.69444,0,0,.55],733:[0,.69444,0,0,.55],915:[0,.69444,0,0,.58056],916:[0,.69444,0,0,.91667],920:[0,.69444,0,0,.85556],923:[0,.69444,0,0,.67223],926:[0,.69444,0,0,.73334],928:[0,.69444,0,0,.79445],931:[0,.69444,0,0,.79445],933:[0,.69444,0,0,.85556],934:[0,.69444,0,0,.79445],936:[0,.69444,0,0,.85556],937:[0,.69444,0,0,.79445],8211:[0,.45833,.03056,0,.55],8212:[0,.45833,.03056,0,1.10001],8216:[0,.69444,0,0,.30556],8217:[0,.69444,0,0,.30556],8220:[0,.69444,0,0,.55834],8221:[0,.69444,0,0,.55834]},"SansSerif-Italic":{32:[0,0,0,0,.25],33:[0,.69444,.05733,0,.31945],34:[0,.69444,.00316,0,.5],35:[.19444,.69444,.05087,0,.83334],36:[.05556,.75,.11156,0,.5],37:[.05556,.75,.03126,0,.83334],38:[0,.69444,.03058,0,.75834],39:[0,.69444,.07816,0,.27778],40:[.25,.75,.13164,0,.38889],41:[.25,.75,.02536,0,.38889],42:[0,.75,.11775,0,.5],43:[.08333,.58333,.02536,0,.77778],44:[.125,.08333,0,0,.27778],45:[0,.44444,.01946,0,.33333],46:[0,.08333,0,0,.27778],47:[.25,.75,.13164,0,.5],48:[0,.65556,.11156,0,.5],49:[0,.65556,.11156,0,.5],50:[0,.65556,.11156,0,.5],51:[0,.65556,.11156,0,.5],52:[0,.65556,.11156,0,.5],53:[0,.65556,.11156,0,.5],54:[0,.65556,.11156,0,.5],55:[0,.65556,.11156,0,.5],56:[0,.65556,.11156,0,.5],57:[0,.65556,.11156,0,.5],58:[0,.44444,.02502,0,.27778],59:[.125,.44444,.02502,0,.27778],61:[-.13,.37,.05087,0,.77778],63:[0,.69444,.11809,0,.47222],64:[0,.69444,.07555,0,.66667],65:[0,.69444,0,0,.66667],66:[0,.69444,.08293,0,.66667],67:[0,.69444,.11983,0,.63889],68:[0,.69444,.07555,0,.72223],69:[0,.69444,.11983,0,.59722],70:[0,.69444,.13372,0,.56945],71:[0,.69444,.11983,0,.66667],72:[0,.69444,.08094,0,.70834],73:[0,.69444,.13372,0,.27778],74:[0,.69444,.08094,0,.47222],75:[0,.69444,.11983,0,.69445],76:[0,.69444,0,0,.54167],77:[0,.69444,.08094,0,.875],78:[0,.69444,.08094,0,.70834],79:[0,.69444,.07555,0,.73611],80:[0,.69444,.08293,0,.63889],81:[.125,.69444,.07555,0,.73611],82:[0,.69444,.08293,0,.64584],83:[0,.69444,.09205,0,.55556],84:[0,.69444,.13372,0,.68056],85:[0,.69444,.08094,0,.6875],86:[0,.69444,.1615,0,.66667],87:[0,.69444,.1615,0,.94445],88:[0,.69444,.13372,0,.66667],89:[0,.69444,.17261,0,.66667],90:[0,.69444,.11983,0,.61111],91:[.25,.75,.15942,0,.28889],93:[.25,.75,.08719,0,.28889],94:[0,.69444,.0799,0,.5],95:[.35,.09444,.08616,0,.5],97:[0,.44444,.00981,0,.48056],98:[0,.69444,.03057,0,.51667],99:[0,.44444,.08336,0,.44445],100:[0,.69444,.09483,0,.51667],101:[0,.44444,.06778,0,.44445],102:[0,.69444,.21705,0,.30556],103:[.19444,.44444,.10836,0,.5],104:[0,.69444,.01778,0,.51667],105:[0,.67937,.09718,0,.23889],106:[.19444,.67937,.09162,0,.26667],107:[0,.69444,.08336,0,.48889],108:[0,.69444,.09483,0,.23889],109:[0,.44444,.01778,0,.79445],110:[0,.44444,.01778,0,.51667],111:[0,.44444,.06613,0,.5],112:[.19444,.44444,.0389,0,.51667],113:[.19444,.44444,.04169,0,.51667],114:[0,.44444,.10836,0,.34167],115:[0,.44444,.0778,0,.38333],116:[0,.57143,.07225,0,.36111],117:[0,.44444,.04169,0,.51667],118:[0,.44444,.10836,0,.46111],119:[0,.44444,.10836,0,.68334],120:[0,.44444,.09169,0,.46111],121:[.19444,.44444,.10836,0,.46111],122:[0,.44444,.08752,0,.43472],126:[.35,.32659,.08826,0,.5],160:[0,0,0,0,.25],168:[0,.67937,.06385,0,.5],176:[0,.69444,0,0,.73752],184:[.17014,0,0,0,.44445],305:[0,.44444,.04169,0,.23889],567:[.19444,.44444,.04169,0,.26667],710:[0,.69444,.0799,0,.5],711:[0,.63194,.08432,0,.5],713:[0,.60889,.08776,0,.5],714:[0,.69444,.09205,0,.5],715:[0,.69444,0,0,.5],728:[0,.69444,.09483,0,.5],729:[0,.67937,.07774,0,.27778],730:[0,.69444,0,0,.73752],732:[0,.67659,.08826,0,.5],733:[0,.69444,.09205,0,.5],915:[0,.69444,.13372,0,.54167],916:[0,.69444,0,0,.83334],920:[0,.69444,.07555,0,.77778],923:[0,.69444,0,0,.61111],926:[0,.69444,.12816,0,.66667],928:[0,.69444,.08094,0,.70834],931:[0,.69444,.11983,0,.72222],933:[0,.69444,.09031,0,.77778],934:[0,.69444,.04603,0,.72222],936:[0,.69444,.09031,0,.77778],937:[0,.69444,.08293,0,.72222],8211:[0,.44444,.08616,0,.5],8212:[0,.44444,.08616,0,1],8216:[0,.69444,.07816,0,.27778],8217:[0,.69444,.07816,0,.27778],8220:[0,.69444,.14205,0,.5],8221:[0,.69444,.00316,0,.5]},"SansSerif-Regular":{32:[0,0,0,0,.25],33:[0,.69444,0,0,.31945],34:[0,.69444,0,0,.5],35:[.19444,.69444,0,0,.83334],36:[.05556,.75,0,0,.5],37:[.05556,.75,0,0,.83334],38:[0,.69444,0,0,.75834],39:[0,.69444,0,0,.27778],40:[.25,.75,0,0,.38889],41:[.25,.75,0,0,.38889],42:[0,.75,0,0,.5],43:[.08333,.58333,0,0,.77778],44:[.125,.08333,0,0,.27778],45:[0,.44444,0,0,.33333],46:[0,.08333,0,0,.27778],47:[.25,.75,0,0,.5],48:[0,.65556,0,0,.5],49:[0,.65556,0,0,.5],50:[0,.65556,0,0,.5],51:[0,.65556,0,0,.5],52:[0,.65556,0,0,.5],53:[0,.65556,0,0,.5],54:[0,.65556,0,0,.5],55:[0,.65556,0,0,.5],56:[0,.65556,0,0,.5],57:[0,.65556,0,0,.5],58:[0,.44444,0,0,.27778],59:[.125,.44444,0,0,.27778],61:[-.13,.37,0,0,.77778],63:[0,.69444,0,0,.47222],64:[0,.69444,0,0,.66667],65:[0,.69444,0,0,.66667],66:[0,.69444,0,0,.66667],67:[0,.69444,0,0,.63889],68:[0,.69444,0,0,.72223],69:[0,.69444,0,0,.59722],70:[0,.69444,0,0,.56945],71:[0,.69444,0,0,.66667],72:[0,.69444,0,0,.70834],73:[0,.69444,0,0,.27778],74:[0,.69444,0,0,.47222],75:[0,.69444,0,0,.69445],76:[0,.69444,0,0,.54167],77:[0,.69444,0,0,.875],78:[0,.69444,0,0,.70834],79:[0,.69444,0,0,.73611],80:[0,.69444,0,0,.63889],81:[.125,.69444,0,0,.73611],82:[0,.69444,0,0,.64584],83:[0,.69444,0,0,.55556],84:[0,.69444,0,0,.68056],85:[0,.69444,0,0,.6875],86:[0,.69444,.01389,0,.66667],87:[0,.69444,.01389,0,.94445],88:[0,.69444,0,0,.66667],89:[0,.69444,.025,0,.66667],90:[0,.69444,0,0,.61111],91:[.25,.75,0,0,.28889],93:[.25,.75,0,0,.28889],94:[0,.69444,0,0,.5],95:[.35,.09444,.02778,0,.5],97:[0,.44444,0,0,.48056],98:[0,.69444,0,0,.51667],99:[0,.44444,0,0,.44445],100:[0,.69444,0,0,.51667],101:[0,.44444,0,0,.44445],102:[0,.69444,.06944,0,.30556],103:[.19444,.44444,.01389,0,.5],104:[0,.69444,0,0,.51667],105:[0,.67937,0,0,.23889],106:[.19444,.67937,0,0,.26667],107:[0,.69444,0,0,.48889],108:[0,.69444,0,0,.23889],109:[0,.44444,0,0,.79445],110:[0,.44444,0,0,.51667],111:[0,.44444,0,0,.5],112:[.19444,.44444,0,0,.51667],113:[.19444,.44444,0,0,.51667],114:[0,.44444,.01389,0,.34167],115:[0,.44444,0,0,.38333],116:[0,.57143,0,0,.36111],117:[0,.44444,0,0,.51667],118:[0,.44444,.01389,0,.46111],119:[0,.44444,.01389,0,.68334],120:[0,.44444,0,0,.46111],121:[.19444,.44444,.01389,0,.46111],122:[0,.44444,0,0,.43472],126:[.35,.32659,0,0,.5],160:[0,0,0,0,.25],168:[0,.67937,0,0,.5],176:[0,.69444,0,0,.66667],184:[.17014,0,0,0,.44445],305:[0,.44444,0,0,.23889],567:[.19444,.44444,0,0,.26667],710:[0,.69444,0,0,.5],711:[0,.63194,0,0,.5],713:[0,.60889,0,0,.5],714:[0,.69444,0,0,.5],715:[0,.69444,0,0,.5],728:[0,.69444,0,0,.5],729:[0,.67937,0,0,.27778],730:[0,.69444,0,0,.66667],732:[0,.67659,0,0,.5],733:[0,.69444,0,0,.5],915:[0,.69444,0,0,.54167],916:[0,.69444,0,0,.83334],920:[0,.69444,0,0,.77778],923:[0,.69444,0,0,.61111],926:[0,.69444,0,0,.66667],928:[0,.69444,0,0,.70834],931:[0,.69444,0,0,.72222],933:[0,.69444,0,0,.77778],934:[0,.69444,0,0,.72222],936:[0,.69444,0,0,.77778],937:[0,.69444,0,0,.72222],8211:[0,.44444,.02778,0,.5],8212:[0,.44444,.02778,0,1],8216:[0,.69444,0,0,.27778],8217:[0,.69444,0,0,.27778],8220:[0,.69444,0,0,.5],8221:[0,.69444,0,0,.5]},"Script-Regular":{32:[0,0,0,0,.25],65:[0,.7,.22925,0,.80253],66:[0,.7,.04087,0,.90757],67:[0,.7,.1689,0,.66619],68:[0,.7,.09371,0,.77443],69:[0,.7,.18583,0,.56162],70:[0,.7,.13634,0,.89544],71:[0,.7,.17322,0,.60961],72:[0,.7,.29694,0,.96919],73:[0,.7,.19189,0,.80907],74:[.27778,.7,.19189,0,1.05159],75:[0,.7,.31259,0,.91364],76:[0,.7,.19189,0,.87373],77:[0,.7,.15981,0,1.08031],78:[0,.7,.3525,0,.9015],79:[0,.7,.08078,0,.73787],80:[0,.7,.08078,0,1.01262],81:[0,.7,.03305,0,.88282],82:[0,.7,.06259,0,.85],83:[0,.7,.19189,0,.86767],84:[0,.7,.29087,0,.74697],85:[0,.7,.25815,0,.79996],86:[0,.7,.27523,0,.62204],87:[0,.7,.27523,0,.80532],88:[0,.7,.26006,0,.94445],89:[0,.7,.2939,0,.70961],90:[0,.7,.24037,0,.8212],160:[0,0,0,0,.25]},"Size1-Regular":{32:[0,0,0,0,.25],40:[.35001,.85,0,0,.45834],41:[.35001,.85,0,0,.45834],47:[.35001,.85,0,0,.57778],91:[.35001,.85,0,0,.41667],92:[.35001,.85,0,0,.57778],93:[.35001,.85,0,0,.41667],123:[.35001,.85,0,0,.58334],125:[.35001,.85,0,0,.58334],160:[0,0,0,0,.25],710:[0,.72222,0,0,.55556],732:[0,.72222,0,0,.55556],770:[0,.72222,0,0,.55556],771:[0,.72222,0,0,.55556],8214:[-99e-5,.601,0,0,.77778],8593:[1e-5,.6,0,0,.66667],8595:[1e-5,.6,0,0,.66667],8657:[1e-5,.6,0,0,.77778],8659:[1e-5,.6,0,0,.77778],8719:[.25001,.75,0,0,.94445],8720:[.25001,.75,0,0,.94445],8721:[.25001,.75,0,0,1.05556],8730:[.35001,.85,0,0,1],8739:[-.00599,.606,0,0,.33333],8741:[-.00599,.606,0,0,.55556],8747:[.30612,.805,.19445,0,.47222],8748:[.306,.805,.19445,0,.47222],8749:[.306,.805,.19445,0,.47222],8750:[.30612,.805,.19445,0,.47222],8896:[.25001,.75,0,0,.83334],8897:[.25001,.75,0,0,.83334],8898:[.25001,.75,0,0,.83334],8899:[.25001,.75,0,0,.83334],8968:[.35001,.85,0,0,.47222],8969:[.35001,.85,0,0,.47222],8970:[.35001,.85,0,0,.47222],8971:[.35001,.85,0,0,.47222],9168:[-99e-5,.601,0,0,.66667],10216:[.35001,.85,0,0,.47222],10217:[.35001,.85,0,0,.47222],10752:[.25001,.75,0,0,1.11111],10753:[.25001,.75,0,0,1.11111],10754:[.25001,.75,0,0,1.11111],10756:[.25001,.75,0,0,.83334],10758:[.25001,.75,0,0,.83334]},"Size2-Regular":{32:[0,0,0,0,.25],40:[.65002,1.15,0,0,.59722],41:[.65002,1.15,0,0,.59722],47:[.65002,1.15,0,0,.81111],91:[.65002,1.15,0,0,.47222],92:[.65002,1.15,0,0,.81111],93:[.65002,1.15,0,0,.47222],123:[.65002,1.15,0,0,.66667],125:[.65002,1.15,0,0,.66667],160:[0,0,0,0,.25],710:[0,.75,0,0,1],732:[0,.75,0,0,1],770:[0,.75,0,0,1],771:[0,.75,0,0,1],8719:[.55001,1.05,0,0,1.27778],8720:[.55001,1.05,0,0,1.27778],8721:[.55001,1.05,0,0,1.44445],8730:[.65002,1.15,0,0,1],8747:[.86225,1.36,.44445,0,.55556],8748:[.862,1.36,.44445,0,.55556],8749:[.862,1.36,.44445,0,.55556],8750:[.86225,1.36,.44445,0,.55556],8896:[.55001,1.05,0,0,1.11111],8897:[.55001,1.05,0,0,1.11111],8898:[.55001,1.05,0,0,1.11111],8899:[.55001,1.05,0,0,1.11111],8968:[.65002,1.15,0,0,.52778],8969:[.65002,1.15,0,0,.52778],8970:[.65002,1.15,0,0,.52778],8971:[.65002,1.15,0,0,.52778],10216:[.65002,1.15,0,0,.61111],10217:[.65002,1.15,0,0,.61111],10752:[.55001,1.05,0,0,1.51112],10753:[.55001,1.05,0,0,1.51112],10754:[.55001,1.05,0,0,1.51112],10756:[.55001,1.05,0,0,1.11111],10758:[.55001,1.05,0,0,1.11111]},"Size3-Regular":{32:[0,0,0,0,.25],40:[.95003,1.45,0,0,.73611],41:[.95003,1.45,0,0,.73611],47:[.95003,1.45,0,0,1.04445],91:[.95003,1.45,0,0,.52778],92:[.95003,1.45,0,0,1.04445],93:[.95003,1.45,0,0,.52778],123:[.95003,1.45,0,0,.75],125:[.95003,1.45,0,0,.75],160:[0,0,0,0,.25],710:[0,.75,0,0,1.44445],732:[0,.75,0,0,1.44445],770:[0,.75,0,0,1.44445],771:[0,.75,0,0,1.44445],8730:[.95003,1.45,0,0,1],8968:[.95003,1.45,0,0,.58334],8969:[.95003,1.45,0,0,.58334],8970:[.95003,1.45,0,0,.58334],8971:[.95003,1.45,0,0,.58334],10216:[.95003,1.45,0,0,.75],10217:[.95003,1.45,0,0,.75]},"Size4-Regular":{32:[0,0,0,0,.25],40:[1.25003,1.75,0,0,.79167],41:[1.25003,1.75,0,0,.79167],47:[1.25003,1.75,0,0,1.27778],91:[1.25003,1.75,0,0,.58334],92:[1.25003,1.75,0,0,1.27778],93:[1.25003,1.75,0,0,.58334],123:[1.25003,1.75,0,0,.80556],125:[1.25003,1.75,0,0,.80556],160:[0,0,0,0,.25],710:[0,.825,0,0,1.8889],732:[0,.825,0,0,1.8889],770:[0,.825,0,0,1.8889],771:[0,.825,0,0,1.8889],8730:[1.25003,1.75,0,0,1],8968:[1.25003,1.75,0,0,.63889],8969:[1.25003,1.75,0,0,.63889],8970:[1.25003,1.75,0,0,.63889],8971:[1.25003,1.75,0,0,.63889],9115:[.64502,1.155,0,0,.875],9116:[1e-5,.6,0,0,.875],9117:[.64502,1.155,0,0,.875],9118:[.64502,1.155,0,0,.875],9119:[1e-5,.6,0,0,.875],9120:[.64502,1.155,0,0,.875],9121:[.64502,1.155,0,0,.66667],9122:[-99e-5,.601,0,0,.66667],9123:[.64502,1.155,0,0,.66667],9124:[.64502,1.155,0,0,.66667],9125:[-99e-5,.601,0,0,.66667],9126:[.64502,1.155,0,0,.66667],9127:[1e-5,.9,0,0,.88889],9128:[.65002,1.15,0,0,.88889],9129:[.90001,0,0,0,.88889],9130:[0,.3,0,0,.88889],9131:[1e-5,.9,0,0,.88889],9132:[.65002,1.15,0,0,.88889],9133:[.90001,0,0,0,.88889],9143:[.88502,.915,0,0,1.05556],10216:[1.25003,1.75,0,0,.80556],10217:[1.25003,1.75,0,0,.80556],57344:[-.00499,.605,0,0,1.05556],57345:[-.00499,.605,0,0,1.05556],57680:[0,.12,0,0,.45],57681:[0,.12,0,0,.45],57682:[0,.12,0,0,.45],57683:[0,.12,0,0,.45]},"Typewriter-Regular":{32:[0,0,0,0,.525],33:[0,.61111,0,0,.525],34:[0,.61111,0,0,.525],35:[0,.61111,0,0,.525],36:[.08333,.69444,0,0,.525],37:[.08333,.69444,0,0,.525],38:[0,.61111,0,0,.525],39:[0,.61111,0,0,.525],40:[.08333,.69444,0,0,.525],41:[.08333,.69444,0,0,.525],42:[0,.52083,0,0,.525],43:[-.08056,.53055,0,0,.525],44:[.13889,.125,0,0,.525],45:[-.08056,.53055,0,0,.525],46:[0,.125,0,0,.525],47:[.08333,.69444,0,0,.525],48:[0,.61111,0,0,.525],49:[0,.61111,0,0,.525],50:[0,.61111,0,0,.525],51:[0,.61111,0,0,.525],52:[0,.61111,0,0,.525],53:[0,.61111,0,0,.525],54:[0,.61111,0,0,.525],55:[0,.61111,0,0,.525],56:[0,.61111,0,0,.525],57:[0,.61111,0,0,.525],58:[0,.43056,0,0,.525],59:[.13889,.43056,0,0,.525],60:[-.05556,.55556,0,0,.525],61:[-.19549,.41562,0,0,.525],62:[-.05556,.55556,0,0,.525],63:[0,.61111,0,0,.525],64:[0,.61111,0,0,.525],65:[0,.61111,0,0,.525],66:[0,.61111,0,0,.525],67:[0,.61111,0,0,.525],68:[0,.61111,0,0,.525],69:[0,.61111,0,0,.525],70:[0,.61111,0,0,.525],71:[0,.61111,0,0,.525],72:[0,.61111,0,0,.525],73:[0,.61111,0,0,.525],74:[0,.61111,0,0,.525],75:[0,.61111,0,0,.525],76:[0,.61111,0,0,.525],77:[0,.61111,0,0,.525],78:[0,.61111,0,0,.525],79:[0,.61111,0,0,.525],80:[0,.61111,0,0,.525],81:[.13889,.61111,0,0,.525],82:[0,.61111,0,0,.525],83:[0,.61111,0,0,.525],84:[0,.61111,0,0,.525],85:[0,.61111,0,0,.525],86:[0,.61111,0,0,.525],87:[0,.61111,0,0,.525],88:[0,.61111,0,0,.525],89:[0,.61111,0,0,.525],90:[0,.61111,0,0,.525],91:[.08333,.69444,0,0,.525],92:[.08333,.69444,0,0,.525],93:[.08333,.69444,0,0,.525],94:[0,.61111,0,0,.525],95:[.09514,0,0,0,.525],96:[0,.61111,0,0,.525],97:[0,.43056,0,0,.525],98:[0,.61111,0,0,.525],99:[0,.43056,0,0,.525],100:[0,.61111,0,0,.525],101:[0,.43056,0,0,.525],102:[0,.61111,0,0,.525],103:[.22222,.43056,0,0,.525],104:[0,.61111,0,0,.525],105:[0,.61111,0,0,.525],106:[.22222,.61111,0,0,.525],107:[0,.61111,0,0,.525],108:[0,.61111,0,0,.525],109:[0,.43056,0,0,.525],110:[0,.43056,0,0,.525],111:[0,.43056,0,0,.525],112:[.22222,.43056,0,0,.525],113:[.22222,.43056,0,0,.525],114:[0,.43056,0,0,.525],115:[0,.43056,0,0,.525],116:[0,.55358,0,0,.525],117:[0,.43056,0,0,.525],118:[0,.43056,0,0,.525],119:[0,.43056,0,0,.525],120:[0,.43056,0,0,.525],121:[.22222,.43056,0,0,.525],122:[0,.43056,0,0,.525],123:[.08333,.69444,0,0,.525],124:[.08333,.69444,0,0,.525],125:[.08333,.69444,0,0,.525],126:[0,.61111,0,0,.525],127:[0,.61111,0,0,.525],160:[0,0,0,0,.525],176:[0,.61111,0,0,.525],184:[.19445,0,0,0,.525],305:[0,.43056,0,0,.525],567:[.22222,.43056,0,0,.525],711:[0,.56597,0,0,.525],713:[0,.56555,0,0,.525],714:[0,.61111,0,0,.525],715:[0,.61111,0,0,.525],728:[0,.61111,0,0,.525],730:[0,.61111,0,0,.525],770:[0,.61111,0,0,.525],771:[0,.61111,0,0,.525],776:[0,.61111,0,0,.525],915:[0,.61111,0,0,.525],916:[0,.61111,0,0,.525],920:[0,.61111,0,0,.525],923:[0,.61111,0,0,.525],926:[0,.61111,0,0,.525],928:[0,.61111,0,0,.525],931:[0,.61111,0,0,.525],933:[0,.61111,0,0,.525],934:[0,.61111,0,0,.525],936:[0,.61111,0,0,.525],937:[0,.61111,0,0,.525],8216:[0,.61111,0,0,.525],8217:[0,.61111,0,0,.525],8242:[0,.61111,0,0,.525],9251:[.11111,.21944,0,0,.525]}},bn={slant:[.25,.25,.25],space:[0,0,0],stretch:[0,0,0],shrink:[0,0,0],xHeight:[.431,.431,.431],quad:[1,1.171,1.472],extraSpace:[0,0,0],num1:[.677,.732,.925],num2:[.394,.384,.387],num3:[.444,.471,.504],denom1:[.686,.752,1.025],denom2:[.345,.344,.532],sup1:[.413,.503,.504],sup2:[.363,.431,.404],sup3:[.289,.286,.294],sub1:[.15,.143,.2],sub2:[.247,.286,.4],supDrop:[.386,.353,.494],subDrop:[.05,.071,.1],delim1:[2.39,1.7,1.98],delim2:[1.01,1.157,1.42],axisHeight:[.25,.25,.25],defaultRuleThickness:[.04,.049,.049],bigOpSpacing1:[.111,.111,.111],bigOpSpacing2:[.166,.166,.166],bigOpSpacing3:[.2,.2,.2],bigOpSpacing4:[.6,.611,.611],bigOpSpacing5:[.1,.143,.143],sqrtRuleThickness:[.04,.04,.04],ptPerEm:[10,10,10],doubleRuleSep:[.2,.2,.2],arrayRuleWidth:[.04,.04,.04],fboxsep:[.3,.3,.3],fboxrule:[.04,.04,.04]},jf={Å:"A",Ð:"D",Þ:"o",å:"a",ð:"d",þ:"o",А:"A",Б:"B",В:"B",Г:"F",Д:"A",Е:"E",Ж:"K",З:"3",И:"N",Й:"N",К:"K",Л:"N",М:"M",Н:"H",О:"O",П:"N",Р:"P",С:"C",Т:"T",У:"y",Ф:"O",Х:"X",Ц:"U",Ч:"h",Ш:"W",Щ:"W",Ъ:"B",Ы:"X",Ь:"B",Э:"3",Ю:"X",Я:"R",а:"a",б:"b",в:"a",г:"r",д:"y",е:"e",ж:"m",з:"e",и:"n",й:"n",к:"n",л:"n",м:"m",н:"n",о:"o",п:"n",р:"p",с:"c",т:"o",у:"y",ф:"b",х:"x",ц:"n",ч:"n",ш:"w",щ:"w",ъ:"a",ы:"m",ь:"a",э:"e",ю:"m",я:"r"};function nC(t,e){H4[t]=e}function du(t,e,n){if(!H4[e])throw new Error("Font metrics not found for font: "+e+".");var r=t.charCodeAt(0),i=H4[e][r];if(!i&&t[0]in jf&&(r=jf[t[0]].charCodeAt(0),i=H4[e][r]),!i&&n==="text"&&Ig(r)&&(i=H4[e][77]),i)return{depth:i[0],height:i[1],italic:i[2],skew:i[3],width:i[4]}}var ro={};function rC(t){var e;if(t>=5?e=0:t>=3?e=1:e=2,!ro[e]){var n=ro[e]={cssEmPerMu:bn.quad[e]/18};for(var r in bn)bn.hasOwnProperty(r)&&(n[r]=bn[r][e])}return ro[e]}var iC=[[1,1,1],[2,1,1],[3,1,1],[4,2,1],[5,2,1],[6,3,1],[7,4,2],[8,6,3],[9,7,6],[10,8,7],[11,10,9]],Ff=[.5,.6,.7,.8,.9,1,1.2,1.44,1.728,2.074,2.488],Rf=function(e,n){return n.size<2?e:iC[e-1][n.size-1]};let jg=class b5{constructor(e){this.style=void 0,this.color=void 0,this.size=void 0,this.textSize=void 0,this.phantom=void 0,this.font=void 0,this.fontFamily=void 0,this.fontWeight=void 0,this.fontShape=void 0,this.sizeMultiplier=void 0,this.maxSize=void 0,this.minRuleThickness=void 0,this._fontMetrics=void 0,this.style=e.style,this.color=e.color,this.size=e.size||b5.BASESIZE,this.textSize=e.textSize||this.size,this.phantom=!!e.phantom,this.font=e.font||"",this.fontFamily=e.fontFamily||"",this.fontWeight=e.fontWeight||"",this.fontShape=e.fontShape||"",this.sizeMultiplier=Ff[this.size-1],this.maxSize=e.maxSize,this.minRuleThickness=e.minRuleThickness,this._fontMetrics=void 0}extend(e){var n={style:this.style,size:this.size,textSize:this.textSize,color:this.color,phantom:this.phantom,font:this.font,fontFamily:this.fontFamily,fontWeight:this.fontWeight,fontShape:this.fontShape,maxSize:this.maxSize,minRuleThickness:this.minRuleThickness};for(var r in e)e.hasOwnProperty(r)&&(n[r]=e[r]);return new b5(n)}havingStyle(e){return this.style===e?this:this.extend({style:e,size:Rf(this.textSize,e)})}havingCrampedStyle(){return this.havingStyle(this.style.cramp())}havingSize(e){return this.size===e&&this.textSize===e?this:this.extend({style:this.style.text(),size:e,textSize:e,sizeMultiplier:Ff[e-1]})}havingBaseStyle(e){e=e||this.style.text();var n=Rf(b5.BASESIZE,e);return this.size===n&&this.textSize===b5.BASESIZE&&this.style===e?this:this.extend({style:e,size:n})}havingBaseSizing(){var e;switch(this.style.id){case 4:case 5:e=3;break;case 6:case 7:e=1;break;default:e=6}return this.extend({style:this.style.text(),size:e})}withColor(e){return this.extend({color:e})}withPhantom(){return this.extend({phantom:!0})}withFont(e){return this.extend({font:e})}withTextFontFamily(e){return this.extend({fontFamily:e,font:""})}withTextFontWeight(e){return this.extend({fontWeight:e,font:""})}withTextFontShape(e){return this.extend({fontShape:e,font:""})}sizingClasses(e){return e.size!==this.size?["sizing","reset-size"+e.size,"size"+this.size]:[]}baseSizingClasses(){return this.size!==b5.BASESIZE?["sizing","reset-size"+this.size,"size"+b5.BASESIZE]:[]}fontMetrics(){return this._fontMetrics||(this._fontMetrics=rC(this.size)),this._fontMetrics}getColor(){return this.phantom?"transparent":this.color}};jg.BASESIZE=6;var mQ={pt:1,mm:7227/2540,cm:7227/254,in:72.27,bp:803/800,pc:12,dd:1238/1157,cc:14856/1157,nd:685/642,nc:1370/107,sp:1/65536,px:803/800},aC={ex:!0,em:!0,mu:!0},Fg=function(e){return typeof e!="string"&&(e=e.unit),e in mQ||e in aC||e==="ex"},y2=function(e,n){var r;if(e.unit in mQ)r=mQ[e.unit]/n.fontMetrics().ptPerEm/n.sizeMultiplier;else if(e.unit==="mu")r=n.fontMetrics().cssEmPerMu;else{var i;if(n.style.isTight()?i=n.havingStyle(n.style.text()):i=n,e.unit==="ex")r=i.fontMetrics().xHeight;else if(e.unit==="em")r=i.fontMetrics().quad;else throw new J("Invalid unit: '"+e.unit+"'");i!==n&&(r*=i.sizeMultiplier/n.sizeMultiplier)}return Math.min(e.number*r,n.maxSize)},n1=function(e){return+e.toFixed(4)+"em"},W6=function(e){return e.filter(n=>n).join(" ")},Rg=function(e,n,r){if(this.classes=e||[],this.attributes={},this.height=0,this.depth=0,this.maxFontSize=0,this.style=r||{},n){n.style.isTight()&&this.classes.push("mtight");var i=n.getColor();i&&(this.style.color=i)}},zg=function(e){var n=document.createElement(e);n.className=W6(this.classes);for(var r in this.style)this.style.hasOwnProperty(r)&&(n.style[r]=this.style[r]);for(var i in this.attributes)this.attributes.hasOwnProperty(i)&&n.setAttribute(i,this.attributes[i]);for(var a=0;a<this.children.length;a++)n.appendChild(this.children[a].toNode());return n},qg=function(e){var n="<"+e;this.classes.length&&(n+=' class="'+C1.escape(W6(this.classes))+'"');var r="";for(var i in this.style)this.style.hasOwnProperty(i)&&(r+=C1.hyphenate(i)+":"+this.style[i]+";");r&&(n+=' style="'+C1.escape(r)+'"');for(var a in this.attributes)this.attributes.hasOwnProperty(a)&&(n+=" "+a+'="'+C1.escape(this.attributes[a])+'"');n+=">";for(var o=0;o<this.children.length;o++)n+=this.children[o].toMarkup();return n+="</"+e+">",n};class L7{constructor(e,n,r,i){this.children=void 0,this.attributes=void 0,this.classes=void 0,this.height=void 0,this.depth=void 0,this.width=void 0,this.maxFontSize=void 0,this.style=void 0,Rg.call(this,e,r,i),this.children=n||[]}setAttribute(e,n){this.attributes[e]=n}hasClass(e){return C1.contains(this.classes,e)}toNode(){return zg.call(this,"span")}toMarkup(){return qg.call(this,"span")}}class pu{constructor(e,n,r,i){this.children=void 0,this.attributes=void 0,this.classes=void 0,this.height=void 0,this.depth=void 0,this.maxFontSize=void 0,this.style=void 0,Rg.call(this,n,i),this.children=r||[],this.setAttribute("href",e)}setAttribute(e,n){this.attributes[e]=n}hasClass(e){return C1.contains(this.classes,e)}toNode(){return zg.call(this,"a")}toMarkup(){return qg.call(this,"a")}}class oC{constructor(e,n,r){this.src=void 0,this.alt=void 0,this.classes=void 0,this.height=void 0,this.depth=void 0,this.maxFontSize=void 0,this.style=void 0,this.alt=n,this.src=e,this.classes=["mord"],this.style=r}hasClass(e){return C1.contains(this.classes,e)}toNode(){var e=document.createElement("img");e.src=this.src,e.alt=this.alt,e.className="mord";for(var n in this.style)this.style.hasOwnProperty(n)&&(e.style[n]=this.style[n]);return e}toMarkup(){var e="<img  src='"+this.src+" 'alt='"+this.alt+"' ",n="";for(var r in this.style)this.style.hasOwnProperty(r)&&(n+=C1.hyphenate(r)+":"+this.style[r]+";");return n&&(e+=' style="'+C1.escape(n)+'"'),e+="'/>",e}}var lC={î:"ı̂",ï:"ı̈",í:"ı́",ì:"ı̀"};class q3{constructor(e,n,r,i,a,o,l,Q){this.text=void 0,this.height=void 0,this.depth=void 0,this.italic=void 0,this.skew=void 0,this.width=void 0,this.maxFontSize=void 0,this.classes=void 0,this.style=void 0,this.text=e,this.height=n||0,this.depth=r||0,this.italic=i||0,this.skew=a||0,this.width=o||0,this.classes=l||[],this.style=Q||{},this.maxFontSize=0;var s=qV(this.text.charCodeAt(0));s&&this.classes.push(s+"_fallback"),/[îïíì]/.test(this.text)&&(this.text=lC[this.text])}hasClass(e){return C1.contains(this.classes,e)}toNode(){var e=document.createTextNode(this.text),n=null;this.italic>0&&(n=document.createElement("span"),n.style.marginRight=n1(this.italic)),this.classes.length>0&&(n=n||document.createElement("span"),n.className=W6(this.classes));for(var r in this.style)this.style.hasOwnProperty(r)&&(n=n||document.createElement("span"),n.style[r]=this.style[r]);return n?(n.appendChild(e),n):e}toMarkup(){var e=!1,n="<span";this.classes.length&&(e=!0,n+=' class="',n+=C1.escape(W6(this.classes)),n+='"');var r="";this.italic>0&&(r+="margin-right:"+this.italic+"em;");for(var i in this.style)this.style.hasOwnProperty(i)&&(r+=C1.hyphenate(i)+":"+this.style[i]+";");r&&(e=!0,n+=' style="'+C1.escape(r)+'"');var a=C1.escape(this.text);return e?(n+=">",n+=a,n+="</span>",n):a}}class s6{constructor(e,n){this.children=void 0,this.attributes=void 0,this.children=e||[],this.attributes=n||{}}toNode(){var e="http://www.w3.org/2000/svg",n=document.createElementNS(e,"svg");for(var r in this.attributes)Object.prototype.hasOwnProperty.call(this.attributes,r)&&n.setAttribute(r,this.attributes[r]);for(var i=0;i<this.children.length;i++)n.appendChild(this.children[i].toNode());return n}toMarkup(){var e='<svg xmlns="http://www.w3.org/2000/svg"';for(var n in this.attributes)Object.prototype.hasOwnProperty.call(this.attributes,n)&&(e+=" "+n+"='"+this.attributes[n]+"'");e+=">";for(var r=0;r<this.children.length;r++)e+=this.children[r].toMarkup();return e+="</svg>",e}}class U6{constructor(e,n){this.pathName=void 0,this.alternate=void 0,this.pathName=e,this.alternate=n}toNode(){var e="http://www.w3.org/2000/svg",n=document.createElementNS(e,"path");return this.alternate?n.setAttribute("d",this.alternate):n.setAttribute("d",If[this.pathName]),n}toMarkup(){return this.alternate?"<path d='"+this.alternate+"'/>":"<path d='"+If[this.pathName]+"'/>"}}class vQ{constructor(e){this.attributes=void 0,this.attributes=e||{}}toNode(){var e="http://www.w3.org/2000/svg",n=document.createElementNS(e,"line");for(var r in this.attributes)Object.prototype.hasOwnProperty.call(this.attributes,r)&&n.setAttribute(r,this.attributes[r]);return n}toMarkup(){var e="<line";for(var n in this.attributes)Object.prototype.hasOwnProperty.call(this.attributes,n)&&(e+=" "+n+"='"+this.attributes[n]+"'");return e+="/>",e}}function zf(t){if(t instanceof q3)return t;throw new Error("Expected symbolNode but got "+String(t)+".")}function QC(t){if(t instanceof L7)return t;throw new Error("Expected span<HtmlDomNode> but got "+String(t)+".")}var sC={bin:1,close:1,inner:1,open:1,punct:1,rel:1},uC={"accent-token":1,mathord:1,"op-token":1,spacing:1,textord:1},Q2={math:{},text:{}};function b(t,e,n,r,i,a){Q2[t][i]={font:e,group:n,replace:r},a&&r&&(Q2[t][r]=Q2[t][i])}var _="math",W="text",A="main",k="ams",p2="accent-token",u1="bin",s3="close",ue="inner",S1="mathord",k2="op-token",D3="open",i9="punct",B="rel",f6="spacing",N="textord";b(_,A,B,"≡","\\equiv",!0);b(_,A,B,"≺","\\prec",!0);b(_,A,B,"≻","\\succ",!0);b(_,A,B,"∼","\\sim",!0);b(_,A,B,"⊥","\\perp");b(_,A,B,"⪯","\\preceq",!0);b(_,A,B,"⪰","\\succeq",!0);b(_,A,B,"≃","\\simeq",!0);b(_,A,B,"∣","\\mid",!0);b(_,A,B,"≪","\\ll",!0);b(_,A,B,"≫","\\gg",!0);b(_,A,B,"≍","\\asymp",!0);b(_,A,B,"∥","\\parallel");b(_,A,B,"⋈","\\bowtie",!0);b(_,A,B,"⌣","\\smile",!0);b(_,A,B,"⊑","\\sqsubseteq",!0);b(_,A,B,"⊒","\\sqsupseteq",!0);b(_,A,B,"≐","\\doteq",!0);b(_,A,B,"⌢","\\frown",!0);b(_,A,B,"∋","\\ni",!0);b(_,A,B,"∝","\\propto",!0);b(_,A,B,"⊢","\\vdash",!0);b(_,A,B,"⊣","\\dashv",!0);b(_,A,B,"∋","\\owns");b(_,A,i9,".","\\ldotp");b(_,A,i9,"⋅","\\cdotp");b(_,A,N,"#","\\#");b(W,A,N,"#","\\#");b(_,A,N,"&","\\&");b(W,A,N,"&","\\&");b(_,A,N,"ℵ","\\aleph",!0);b(_,A,N,"∀","\\forall",!0);b(_,A,N,"ℏ","\\hbar",!0);b(_,A,N,"∃","\\exists",!0);b(_,A,N,"∇","\\nabla",!0);b(_,A,N,"♭","\\flat",!0);b(_,A,N,"ℓ","\\ell",!0);b(_,A,N,"♮","\\natural",!0);b(_,A,N,"♣","\\clubsuit",!0);b(_,A,N,"℘","\\wp",!0);b(_,A,N,"♯","\\sharp",!0);b(_,A,N,"♢","\\diamondsuit",!0);b(_,A,N,"ℜ","\\Re",!0);b(_,A,N,"♡","\\heartsuit",!0);b(_,A,N,"ℑ","\\Im",!0);b(_,A,N,"♠","\\spadesuit",!0);b(_,A,N,"§","\\S",!0);b(W,A,N,"§","\\S");b(_,A,N,"¶","\\P",!0);b(W,A,N,"¶","\\P");b(_,A,N,"†","\\dag");b(W,A,N,"†","\\dag");b(W,A,N,"†","\\textdagger");b(_,A,N,"‡","\\ddag");b(W,A,N,"‡","\\ddag");b(W,A,N,"‡","\\textdaggerdbl");b(_,A,s3,"⎱","\\rmoustache",!0);b(_,A,D3,"⎰","\\lmoustache",!0);b(_,A,s3,"⟯","\\rgroup",!0);b(_,A,D3,"⟮","\\lgroup",!0);b(_,A,u1,"∓","\\mp",!0);b(_,A,u1,"⊖","\\ominus",!0);b(_,A,u1,"⊎","\\uplus",!0);b(_,A,u1,"⊓","\\sqcap",!0);b(_,A,u1,"∗","\\ast");b(_,A,u1,"⊔","\\sqcup",!0);b(_,A,u1,"◯","\\bigcirc",!0);b(_,A,u1,"∙","\\bullet",!0);b(_,A,u1,"‡","\\ddagger");b(_,A,u1,"≀","\\wr",!0);b(_,A,u1,"⨿","\\amalg");b(_,A,u1,"&","\\And");b(_,A,B,"⟵","\\longleftarrow",!0);b(_,A,B,"⇐","\\Leftarrow",!0);b(_,A,B,"⟸","\\Longleftarrow",!0);b(_,A,B,"⟶","\\longrightarrow",!0);b(_,A,B,"⇒","\\Rightarrow",!0);b(_,A,B,"⟹","\\Longrightarrow",!0);b(_,A,B,"↔","\\leftrightarrow",!0);b(_,A,B,"⟷","\\longleftrightarrow",!0);b(_,A,B,"⇔","\\Leftrightarrow",!0);b(_,A,B,"⟺","\\Longleftrightarrow",!0);b(_,A,B,"↦","\\mapsto",!0);b(_,A,B,"⟼","\\longmapsto",!0);b(_,A,B,"↗","\\nearrow",!0);b(_,A,B,"↩","\\hookleftarrow",!0);b(_,A,B,"↪","\\hookrightarrow",!0);b(_,A,B,"↘","\\searrow",!0);b(_,A,B,"↼","\\leftharpoonup",!0);b(_,A,B,"⇀","\\rightharpoonup",!0);b(_,A,B,"↙","\\swarrow",!0);b(_,A,B,"↽","\\leftharpoondown",!0);b(_,A,B,"⇁","\\rightharpoondown",!0);b(_,A,B,"↖","\\nwarrow",!0);b(_,A,B,"⇌","\\rightleftharpoons",!0);b(_,k,B,"≮","\\nless",!0);b(_,k,B,"","\\@nleqslant");b(_,k,B,"","\\@nleqq");b(_,k,B,"⪇","\\lneq",!0);b(_,k,B,"≨","\\lneqq",!0);b(_,k,B,"","\\@lvertneqq");b(_,k,B,"⋦","\\lnsim",!0);b(_,k,B,"⪉","\\lnapprox",!0);b(_,k,B,"⊀","\\nprec",!0);b(_,k,B,"⋠","\\npreceq",!0);b(_,k,B,"⋨","\\precnsim",!0);b(_,k,B,"⪹","\\precnapprox",!0);b(_,k,B,"≁","\\nsim",!0);b(_,k,B,"","\\@nshortmid");b(_,k,B,"∤","\\nmid",!0);b(_,k,B,"⊬","\\nvdash",!0);b(_,k,B,"⊭","\\nvDash",!0);b(_,k,B,"⋪","\\ntriangleleft");b(_,k,B,"⋬","\\ntrianglelefteq",!0);b(_,k,B,"⊊","\\subsetneq",!0);b(_,k,B,"","\\@varsubsetneq");b(_,k,B,"⫋","\\subsetneqq",!0);b(_,k,B,"","\\@varsubsetneqq");b(_,k,B,"≯","\\ngtr",!0);b(_,k,B,"","\\@ngeqslant");b(_,k,B,"","\\@ngeqq");b(_,k,B,"⪈","\\gneq",!0);b(_,k,B,"≩","\\gneqq",!0);b(_,k,B,"","\\@gvertneqq");b(_,k,B,"⋧","\\gnsim",!0);b(_,k,B,"⪊","\\gnapprox",!0);b(_,k,B,"⊁","\\nsucc",!0);b(_,k,B,"⋡","\\nsucceq",!0);b(_,k,B,"⋩","\\succnsim",!0);b(_,k,B,"⪺","\\succnapprox",!0);b(_,k,B,"≆","\\ncong",!0);b(_,k,B,"","\\@nshortparallel");b(_,k,B,"∦","\\nparallel",!0);b(_,k,B,"⊯","\\nVDash",!0);b(_,k,B,"⋫","\\ntriangleright");b(_,k,B,"⋭","\\ntrianglerighteq",!0);b(_,k,B,"","\\@nsupseteqq");b(_,k,B,"⊋","\\supsetneq",!0);b(_,k,B,"","\\@varsupsetneq");b(_,k,B,"⫌","\\supsetneqq",!0);b(_,k,B,"","\\@varsupsetneqq");b(_,k,B,"⊮","\\nVdash",!0);b(_,k,B,"⪵","\\precneqq",!0);b(_,k,B,"⪶","\\succneqq",!0);b(_,k,B,"","\\@nsubseteqq");b(_,k,u1,"⊴","\\unlhd");b(_,k,u1,"⊵","\\unrhd");b(_,k,B,"↚","\\nleftarrow",!0);b(_,k,B,"↛","\\nrightarrow",!0);b(_,k,B,"⇍","\\nLeftarrow",!0);b(_,k,B,"⇏","\\nRightarrow",!0);b(_,k,B,"↮","\\nleftrightarrow",!0);b(_,k,B,"⇎","\\nLeftrightarrow",!0);b(_,k,B,"△","\\vartriangle");b(_,k,N,"ℏ","\\hslash");b(_,k,N,"▽","\\triangledown");b(_,k,N,"◊","\\lozenge");b(_,k,N,"Ⓢ","\\circledS");b(_,k,N,"®","\\circledR");b(W,k,N,"®","\\circledR");b(_,k,N,"∡","\\measuredangle",!0);b(_,k,N,"∄","\\nexists");b(_,k,N,"℧","\\mho");b(_,k,N,"Ⅎ","\\Finv",!0);b(_,k,N,"⅁","\\Game",!0);b(_,k,N,"‵","\\backprime");b(_,k,N,"▲","\\blacktriangle");b(_,k,N,"▼","\\blacktriangledown");b(_,k,N,"■","\\blacksquare");b(_,k,N,"⧫","\\blacklozenge");b(_,k,N,"★","\\bigstar");b(_,k,N,"∢","\\sphericalangle",!0);b(_,k,N,"∁","\\complement",!0);b(_,k,N,"ð","\\eth",!0);b(W,A,N,"ð","ð");b(_,k,N,"╱","\\diagup");b(_,k,N,"╲","\\diagdown");b(_,k,N,"□","\\square");b(_,k,N,"□","\\Box");b(_,k,N,"◊","\\Diamond");b(_,k,N,"¥","\\yen",!0);b(W,k,N,"¥","\\yen",!0);b(_,k,N,"✓","\\checkmark",!0);b(W,k,N,"✓","\\checkmark");b(_,k,N,"ℶ","\\beth",!0);b(_,k,N,"ℸ","\\daleth",!0);b(_,k,N,"ℷ","\\gimel",!0);b(_,k,N,"ϝ","\\digamma",!0);b(_,k,N,"ϰ","\\varkappa");b(_,k,D3,"┌","\\@ulcorner",!0);b(_,k,s3,"┐","\\@urcorner",!0);b(_,k,D3,"└","\\@llcorner",!0);b(_,k,s3,"┘","\\@lrcorner",!0);b(_,k,B,"≦","\\leqq",!0);b(_,k,B,"⩽","\\leqslant",!0);b(_,k,B,"⪕","\\eqslantless",!0);b(_,k,B,"≲","\\lesssim",!0);b(_,k,B,"⪅","\\lessapprox",!0);b(_,k,B,"≊","\\approxeq",!0);b(_,k,u1,"⋖","\\lessdot");b(_,k,B,"⋘","\\lll",!0);b(_,k,B,"≶","\\lessgtr",!0);b(_,k,B,"⋚","\\lesseqgtr",!0);b(_,k,B,"⪋","\\lesseqqgtr",!0);b(_,k,B,"≑","\\doteqdot");b(_,k,B,"≓","\\risingdotseq",!0);b(_,k,B,"≒","\\fallingdotseq",!0);b(_,k,B,"∽","\\backsim",!0);b(_,k,B,"⋍","\\backsimeq",!0);b(_,k,B,"⫅","\\subseteqq",!0);b(_,k,B,"⋐","\\Subset",!0);b(_,k,B,"⊏","\\sqsubset",!0);b(_,k,B,"≼","\\preccurlyeq",!0);b(_,k,B,"⋞","\\curlyeqprec",!0);b(_,k,B,"≾","\\precsim",!0);b(_,k,B,"⪷","\\precapprox",!0);b(_,k,B,"⊲","\\vartriangleleft");b(_,k,B,"⊴","\\trianglelefteq");b(_,k,B,"⊨","\\vDash",!0);b(_,k,B,"⊪","\\Vvdash",!0);b(_,k,B,"⌣","\\smallsmile");b(_,k,B,"⌢","\\smallfrown");b(_,k,B,"≏","\\bumpeq",!0);b(_,k,B,"≎","\\Bumpeq",!0);b(_,k,B,"≧","\\geqq",!0);b(_,k,B,"⩾","\\geqslant",!0);b(_,k,B,"⪖","\\eqslantgtr",!0);b(_,k,B,"≳","\\gtrsim",!0);b(_,k,B,"⪆","\\gtrapprox",!0);b(_,k,u1,"⋗","\\gtrdot");b(_,k,B,"⋙","\\ggg",!0);b(_,k,B,"≷","\\gtrless",!0);b(_,k,B,"⋛","\\gtreqless",!0);b(_,k,B,"⪌","\\gtreqqless",!0);b(_,k,B,"≖","\\eqcirc",!0);b(_,k,B,"≗","\\circeq",!0);b(_,k,B,"≜","\\triangleq",!0);b(_,k,B,"∼","\\thicksim");b(_,k,B,"≈","\\thickapprox");b(_,k,B,"⫆","\\supseteqq",!0);b(_,k,B,"⋑","\\Supset",!0);b(_,k,B,"⊐","\\sqsupset",!0);b(_,k,B,"≽","\\succcurlyeq",!0);b(_,k,B,"⋟","\\curlyeqsucc",!0);b(_,k,B,"≿","\\succsim",!0);b(_,k,B,"⪸","\\succapprox",!0);b(_,k,B,"⊳","\\vartriangleright");b(_,k,B,"⊵","\\trianglerighteq");b(_,k,B,"⊩","\\Vdash",!0);b(_,k,B,"∣","\\shortmid");b(_,k,B,"∥","\\shortparallel");b(_,k,B,"≬","\\between",!0);b(_,k,B,"⋔","\\pitchfork",!0);b(_,k,B,"∝","\\varpropto");b(_,k,B,"◀","\\blacktriangleleft");b(_,k,B,"∴","\\therefore",!0);b(_,k,B,"∍","\\backepsilon");b(_,k,B,"▶","\\blacktriangleright");b(_,k,B,"∵","\\because",!0);b(_,k,B,"⋘","\\llless");b(_,k,B,"⋙","\\gggtr");b(_,k,u1,"⊲","\\lhd");b(_,k,u1,"⊳","\\rhd");b(_,k,B,"≂","\\eqsim",!0);b(_,A,B,"⋈","\\Join");b(_,k,B,"≑","\\Doteq",!0);b(_,k,u1,"∔","\\dotplus",!0);b(_,k,u1,"∖","\\smallsetminus");b(_,k,u1,"⋒","\\Cap",!0);b(_,k,u1,"⋓","\\Cup",!0);b(_,k,u1,"⩞","\\doublebarwedge",!0);b(_,k,u1,"⊟","\\boxminus",!0);b(_,k,u1,"⊞","\\boxplus",!0);b(_,k,u1,"⋇","\\divideontimes",!0);b(_,k,u1,"⋉","\\ltimes",!0);b(_,k,u1,"⋊","\\rtimes",!0);b(_,k,u1,"⋋","\\leftthreetimes",!0);b(_,k,u1,"⋌","\\rightthreetimes",!0);b(_,k,u1,"⋏","\\curlywedge",!0);b(_,k,u1,"⋎","\\curlyvee",!0);b(_,k,u1,"⊝","\\circleddash",!0);b(_,k,u1,"⊛","\\circledast",!0);b(_,k,u1,"⋅","\\centerdot");b(_,k,u1,"⊺","\\intercal",!0);b(_,k,u1,"⋒","\\doublecap");b(_,k,u1,"⋓","\\doublecup");b(_,k,u1,"⊠","\\boxtimes",!0);b(_,k,B,"⇢","\\dashrightarrow",!0);b(_,k,B,"⇠","\\dashleftarrow",!0);b(_,k,B,"⇇","\\leftleftarrows",!0);b(_,k,B,"⇆","\\leftrightarrows",!0);b(_,k,B,"⇚","\\Lleftarrow",!0);b(_,k,B,"↞","\\twoheadleftarrow",!0);b(_,k,B,"↢","\\leftarrowtail",!0);b(_,k,B,"↫","\\looparrowleft",!0);b(_,k,B,"⇋","\\leftrightharpoons",!0);b(_,k,B,"↶","\\curvearrowleft",!0);b(_,k,B,"↺","\\circlearrowleft",!0);b(_,k,B,"↰","\\Lsh",!0);b(_,k,B,"⇈","\\upuparrows",!0);b(_,k,B,"↿","\\upharpoonleft",!0);b(_,k,B,"⇃","\\downharpoonleft",!0);b(_,A,B,"⊶","\\origof",!0);b(_,A,B,"⊷","\\imageof",!0);b(_,k,B,"⊸","\\multimap",!0);b(_,k,B,"↭","\\leftrightsquigarrow",!0);b(_,k,B,"⇉","\\rightrightarrows",!0);b(_,k,B,"⇄","\\rightleftarrows",!0);b(_,k,B,"↠","\\twoheadrightarrow",!0);b(_,k,B,"↣","\\rightarrowtail",!0);b(_,k,B,"↬","\\looparrowright",!0);b(_,k,B,"↷","\\curvearrowright",!0);b(_,k,B,"↻","\\circlearrowright",!0);b(_,k,B,"↱","\\Rsh",!0);b(_,k,B,"⇊","\\downdownarrows",!0);b(_,k,B,"↾","\\upharpoonright",!0);b(_,k,B,"⇂","\\downharpoonright",!0);b(_,k,B,"⇝","\\rightsquigarrow",!0);b(_,k,B,"⇝","\\leadsto");b(_,k,B,"⇛","\\Rrightarrow",!0);b(_,k,B,"↾","\\restriction");b(_,A,N,"‘","`");b(_,A,N,"$","\\$");b(W,A,N,"$","\\$");b(W,A,N,"$","\\textdollar");b(_,A,N,"%","\\%");b(W,A,N,"%","\\%");b(_,A,N,"_","\\_");b(W,A,N,"_","\\_");b(W,A,N,"_","\\textunderscore");b(_,A,N,"∠","\\angle",!0);b(_,A,N,"∞","\\infty",!0);b(_,A,N,"′","\\prime");b(_,A,N,"△","\\triangle");b(_,A,N,"Γ","\\Gamma",!0);b(_,A,N,"Δ","\\Delta",!0);b(_,A,N,"Θ","\\Theta",!0);b(_,A,N,"Λ","\\Lambda",!0);b(_,A,N,"Ξ","\\Xi",!0);b(_,A,N,"Π","\\Pi",!0);b(_,A,N,"Σ","\\Sigma",!0);b(_,A,N,"Υ","\\Upsilon",!0);b(_,A,N,"Φ","\\Phi",!0);b(_,A,N,"Ψ","\\Psi",!0);b(_,A,N,"Ω","\\Omega",!0);b(_,A,N,"A","Α");b(_,A,N,"B","Β");b(_,A,N,"E","Ε");b(_,A,N,"Z","Ζ");b(_,A,N,"H","Η");b(_,A,N,"I","Ι");b(_,A,N,"K","Κ");b(_,A,N,"M","Μ");b(_,A,N,"N","Ν");b(_,A,N,"O","Ο");b(_,A,N,"P","Ρ");b(_,A,N,"T","Τ");b(_,A,N,"X","Χ");b(_,A,N,"¬","\\neg",!0);b(_,A,N,"¬","\\lnot");b(_,A,N,"⊤","\\top");b(_,A,N,"⊥","\\bot");b(_,A,N,"∅","\\emptyset");b(_,k,N,"∅","\\varnothing");b(_,A,S1,"α","\\alpha",!0);b(_,A,S1,"β","\\beta",!0);b(_,A,S1,"γ","\\gamma",!0);b(_,A,S1,"δ","\\delta",!0);b(_,A,S1,"ϵ","\\epsilon",!0);b(_,A,S1,"ζ","\\zeta",!0);b(_,A,S1,"η","\\eta",!0);b(_,A,S1,"θ","\\theta",!0);b(_,A,S1,"ι","\\iota",!0);b(_,A,S1,"κ","\\kappa",!0);b(_,A,S1,"λ","\\lambda",!0);b(_,A,S1,"μ","\\mu",!0);b(_,A,S1,"ν","\\nu",!0);b(_,A,S1,"ξ","\\xi",!0);b(_,A,S1,"ο","\\omicron",!0);b(_,A,S1,"π","\\pi",!0);b(_,A,S1,"ρ","\\rho",!0);b(_,A,S1,"σ","\\sigma",!0);b(_,A,S1,"τ","\\tau",!0);b(_,A,S1,"υ","\\upsilon",!0);b(_,A,S1,"ϕ","\\phi",!0);b(_,A,S1,"χ","\\chi",!0);b(_,A,S1,"ψ","\\psi",!0);b(_,A,S1,"ω","\\omega",!0);b(_,A,S1,"ε","\\varepsilon",!0);b(_,A,S1,"ϑ","\\vartheta",!0);b(_,A,S1,"ϖ","\\varpi",!0);b(_,A,S1,"ϱ","\\varrho",!0);b(_,A,S1,"ς","\\varsigma",!0);b(_,A,S1,"φ","\\varphi",!0);b(_,A,u1,"∗","*",!0);b(_,A,u1,"+","+");b(_,A,u1,"−","-",!0);b(_,A,u1,"⋅","\\cdot",!0);b(_,A,u1,"∘","\\circ",!0);b(_,A,u1,"÷","\\div",!0);b(_,A,u1,"±","\\pm",!0);b(_,A,u1,"×","\\times",!0);b(_,A,u1,"∩","\\cap",!0);b(_,A,u1,"∪","\\cup",!0);b(_,A,u1,"∖","\\setminus",!0);b(_,A,u1,"∧","\\land");b(_,A,u1,"∨","\\lor");b(_,A,u1,"∧","\\wedge",!0);b(_,A,u1,"∨","\\vee",!0);b(_,A,N,"√","\\surd");b(_,A,D3,"⟨","\\langle",!0);b(_,A,D3,"∣","\\lvert");b(_,A,D3,"∥","\\lVert");b(_,A,s3,"?","?");b(_,A,s3,"!","!");b(_,A,s3,"⟩","\\rangle",!0);b(_,A,s3,"∣","\\rvert");b(_,A,s3,"∥","\\rVert");b(_,A,B,"=","=");b(_,A,B,":",":");b(_,A,B,"≈","\\approx",!0);b(_,A,B,"≅","\\cong",!0);b(_,A,B,"≥","\\ge");b(_,A,B,"≥","\\geq",!0);b(_,A,B,"←","\\gets");b(_,A,B,">","\\gt",!0);b(_,A,B,"∈","\\in",!0);b(_,A,B,"","\\@not");b(_,A,B,"⊂","\\subset",!0);b(_,A,B,"⊃","\\supset",!0);b(_,A,B,"⊆","\\subseteq",!0);b(_,A,B,"⊇","\\supseteq",!0);b(_,k,B,"⊈","\\nsubseteq",!0);b(_,k,B,"⊉","\\nsupseteq",!0);b(_,A,B,"⊨","\\models");b(_,A,B,"←","\\leftarrow",!0);b(_,A,B,"≤","\\le");b(_,A,B,"≤","\\leq",!0);b(_,A,B,"<","\\lt",!0);b(_,A,B,"→","\\rightarrow",!0);b(_,A,B,"→","\\to");b(_,k,B,"≱","\\ngeq",!0);b(_,k,B,"≰","\\nleq",!0);b(_,A,f6," ","\\ ");b(_,A,f6," ","\\space");b(_,A,f6," ","\\nobreakspace");b(W,A,f6," ","\\ ");b(W,A,f6," "," ");b(W,A,f6," ","\\space");b(W,A,f6," ","\\nobreakspace");b(_,A,f6,null,"\\nobreak");b(_,A,f6,null,"\\allowbreak");b(_,A,i9,",",",");b(_,A,i9,";",";");b(_,k,u1,"⊼","\\barwedge",!0);b(_,k,u1,"⊻","\\veebar",!0);b(_,A,u1,"⊙","\\odot",!0);b(_,A,u1,"⊕","\\oplus",!0);b(_,A,u1,"⊗","\\otimes",!0);b(_,A,N,"∂","\\partial",!0);b(_,A,u1,"⊘","\\oslash",!0);b(_,k,u1,"⊚","\\circledcirc",!0);b(_,k,u1,"⊡","\\boxdot",!0);b(_,A,u1,"△","\\bigtriangleup");b(_,A,u1,"▽","\\bigtriangledown");b(_,A,u1,"†","\\dagger");b(_,A,u1,"⋄","\\diamond");b(_,A,u1,"⋆","\\star");b(_,A,u1,"◃","\\triangleleft");b(_,A,u1,"▹","\\triangleright");b(_,A,D3,"{","\\{");b(W,A,N,"{","\\{");b(W,A,N,"{","\\textbraceleft");b(_,A,s3,"}","\\}");b(W,A,N,"}","\\}");b(W,A,N,"}","\\textbraceright");b(_,A,D3,"{","\\lbrace");b(_,A,s3,"}","\\rbrace");b(_,A,D3,"[","\\lbrack",!0);b(W,A,N,"[","\\lbrack",!0);b(_,A,s3,"]","\\rbrack",!0);b(W,A,N,"]","\\rbrack",!0);b(_,A,D3,"(","\\lparen",!0);b(_,A,s3,")","\\rparen",!0);b(W,A,N,"<","\\textless",!0);b(W,A,N,">","\\textgreater",!0);b(_,A,D3,"⌊","\\lfloor",!0);b(_,A,s3,"⌋","\\rfloor",!0);b(_,A,D3,"⌈","\\lceil",!0);b(_,A,s3,"⌉","\\rceil",!0);b(_,A,N,"\\","\\backslash");b(_,A,N,"∣","|");b(_,A,N,"∣","\\vert");b(W,A,N,"|","\\textbar",!0);b(_,A,N,"∥","\\|");b(_,A,N,"∥","\\Vert");b(W,A,N,"∥","\\textbardbl");b(W,A,N,"~","\\textasciitilde");b(W,A,N,"\\","\\textbackslash");b(W,A,N,"^","\\textasciicircum");b(_,A,B,"↑","\\uparrow",!0);b(_,A,B,"⇑","\\Uparrow",!0);b(_,A,B,"↓","\\downarrow",!0);b(_,A,B,"⇓","\\Downarrow",!0);b(_,A,B,"↕","\\updownarrow",!0);b(_,A,B,"⇕","\\Updownarrow",!0);b(_,A,k2,"∐","\\coprod");b(_,A,k2,"⋁","\\bigvee");b(_,A,k2,"⋀","\\bigwedge");b(_,A,k2,"⨄","\\biguplus");b(_,A,k2,"⋂","\\bigcap");b(_,A,k2,"⋃","\\bigcup");b(_,A,k2,"∫","\\int");b(_,A,k2,"∫","\\intop");b(_,A,k2,"∬","\\iint");b(_,A,k2,"∭","\\iiint");b(_,A,k2,"∏","\\prod");b(_,A,k2,"∑","\\sum");b(_,A,k2,"⨂","\\bigotimes");b(_,A,k2,"⨁","\\bigoplus");b(_,A,k2,"⨀","\\bigodot");b(_,A,k2,"∮","\\oint");b(_,A,k2,"∯","\\oiint");b(_,A,k2,"∰","\\oiiint");b(_,A,k2,"⨆","\\bigsqcup");b(_,A,k2,"∫","\\smallint");b(W,A,ue,"…","\\textellipsis");b(_,A,ue,"…","\\mathellipsis");b(W,A,ue,"…","\\ldots",!0);b(_,A,ue,"…","\\ldots",!0);b(_,A,ue,"⋯","\\@cdots",!0);b(_,A,ue,"⋱","\\ddots",!0);b(_,A,N,"⋮","\\varvdots");b(_,A,p2,"ˊ","\\acute");b(_,A,p2,"ˋ","\\grave");b(_,A,p2,"¨","\\ddot");b(_,A,p2,"~","\\tilde");b(_,A,p2,"ˉ","\\bar");b(_,A,p2,"˘","\\breve");b(_,A,p2,"ˇ","\\check");b(_,A,p2,"^","\\hat");b(_,A,p2,"⃗","\\vec");b(_,A,p2,"˙","\\dot");b(_,A,p2,"˚","\\mathring");b(_,A,S1,"","\\@imath");b(_,A,S1,"","\\@jmath");b(_,A,N,"ı","ı");b(_,A,N,"ȷ","ȷ");b(W,A,N,"ı","\\i",!0);b(W,A,N,"ȷ","\\j",!0);b(W,A,N,"ß","\\ss",!0);b(W,A,N,"æ","\\ae",!0);b(W,A,N,"œ","\\oe",!0);b(W,A,N,"ø","\\o",!0);b(W,A,N,"Æ","\\AE",!0);b(W,A,N,"Œ","\\OE",!0);b(W,A,N,"Ø","\\O",!0);b(W,A,p2,"ˊ","\\'");b(W,A,p2,"ˋ","\\`");b(W,A,p2,"ˆ","\\^");b(W,A,p2,"˜","\\~");b(W,A,p2,"ˉ","\\=");b(W,A,p2,"˘","\\u");b(W,A,p2,"˙","\\.");b(W,A,p2,"¸","\\c");b(W,A,p2,"˚","\\r");b(W,A,p2,"ˇ","\\v");b(W,A,p2,"¨",'\\"');b(W,A,p2,"˝","\\H");b(W,A,p2,"◯","\\textcircled");var Zg={"--":!0,"---":!0,"``":!0,"''":!0};b(W,A,N,"–","--",!0);b(W,A,N,"–","\\textendash");b(W,A,N,"—","---",!0);b(W,A,N,"—","\\textemdash");b(W,A,N,"‘","`",!0);b(W,A,N,"‘","\\textquoteleft");b(W,A,N,"’","'",!0);b(W,A,N,"’","\\textquoteright");b(W,A,N,"“","``",!0);b(W,A,N,"“","\\textquotedblleft");b(W,A,N,"”","''",!0);b(W,A,N,"”","\\textquotedblright");b(_,A,N,"°","\\degree",!0);b(W,A,N,"°","\\degree");b(W,A,N,"°","\\textdegree",!0);b(_,A,N,"£","\\pounds");b(_,A,N,"£","\\mathsterling",!0);b(W,A,N,"£","\\pounds");b(W,A,N,"£","\\textsterling",!0);b(_,k,N,"✠","\\maltese");b(W,k,N,"✠","\\maltese");var qf='0123456789/@."';for(var io=0;io<qf.length;io++){var Zf=qf.charAt(io);b(_,A,N,Zf,Zf)}var Gf='0123456789!@*()-=+";:?/.,';for(var ao=0;ao<Gf.length;ao++){var Xf=Gf.charAt(ao);b(W,A,N,Xf,Xf)}var Kr="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";for(var oo=0;oo<Kr.length;oo++){var Mn=Kr.charAt(oo);b(_,A,S1,Mn,Mn),b(W,A,N,Mn,Mn)}b(_,k,N,"C","ℂ");b(W,k,N,"C","ℂ");b(_,k,N,"H","ℍ");b(W,k,N,"H","ℍ");b(_,k,N,"N","ℕ");b(W,k,N,"N","ℕ");b(_,k,N,"P","ℙ");b(W,k,N,"P","ℙ");b(_,k,N,"Q","ℚ");b(W,k,N,"Q","ℚ");b(_,k,N,"R","ℝ");b(W,k,N,"R","ℝ");b(_,k,N,"Z","ℤ");b(W,k,N,"Z","ℤ");b(_,A,S1,"h","ℎ");b(W,A,S1,"h","ℎ");var O1="";for(var u3=0;u3<Kr.length;u3++){var V2=Kr.charAt(u3);O1=String.fromCharCode(55349,56320+u3),b(_,A,S1,V2,O1),b(W,A,N,V2,O1),O1=String.fromCharCode(55349,56372+u3),b(_,A,S1,V2,O1),b(W,A,N,V2,O1),O1=String.fromCharCode(55349,56424+u3),b(_,A,S1,V2,O1),b(W,A,N,V2,O1),O1=String.fromCharCode(55349,56580+u3),b(_,A,S1,V2,O1),b(W,A,N,V2,O1),O1=String.fromCharCode(55349,56736+u3),b(_,A,S1,V2,O1),b(W,A,N,V2,O1),O1=String.fromCharCode(55349,56788+u3),b(_,A,S1,V2,O1),b(W,A,N,V2,O1),O1=String.fromCharCode(55349,56840+u3),b(_,A,S1,V2,O1),b(W,A,N,V2,O1),O1=String.fromCharCode(55349,56944+u3),b(_,A,S1,V2,O1),b(W,A,N,V2,O1),u3<26&&(O1=String.fromCharCode(55349,56632+u3),b(_,A,S1,V2,O1),b(W,A,N,V2,O1),O1=String.fromCharCode(55349,56476+u3),b(_,A,S1,V2,O1),b(W,A,N,V2,O1))}O1=String.fromCharCode(55349,56668);b(_,A,S1,"k",O1);b(W,A,N,"k",O1);for(var s5=0;s5<10;s5++){var L6=s5.toString();O1=String.fromCharCode(55349,57294+s5),b(_,A,S1,L6,O1),b(W,A,N,L6,O1),O1=String.fromCharCode(55349,57314+s5),b(_,A,S1,L6,O1),b(W,A,N,L6,O1),O1=String.fromCharCode(55349,57324+s5),b(_,A,S1,L6,O1),b(W,A,N,L6,O1),O1=String.fromCharCode(55349,57334+s5),b(_,A,S1,L6,O1),b(W,A,N,L6,O1)}var yQ="ÐÞþ";for(var lo=0;lo<yQ.length;lo++){var _n=yQ.charAt(lo);b(_,A,S1,_n,_n),b(W,A,N,_n,_n)}var wn=[["mathbf","textbf","Main-Bold"],["mathbf","textbf","Main-Bold"],["mathnormal","textit","Math-Italic"],["mathnormal","textit","Math-Italic"],["boldsymbol","boldsymbol","Main-BoldItalic"],["boldsymbol","boldsymbol","Main-BoldItalic"],["mathscr","textscr","Script-Regular"],["","",""],["","",""],["","",""],["mathfrak","textfrak","Fraktur-Regular"],["mathfrak","textfrak","Fraktur-Regular"],["mathbb","textbb","AMS-Regular"],["mathbb","textbb","AMS-Regular"],["","",""],["","",""],["mathsf","textsf","SansSerif-Regular"],["mathsf","textsf","SansSerif-Regular"],["mathboldsf","textboldsf","SansSerif-Bold"],["mathboldsf","textboldsf","SansSerif-Bold"],["mathitsf","textitsf","SansSerif-Italic"],["mathitsf","textitsf","SansSerif-Italic"],["","",""],["","",""],["mathtt","texttt","Typewriter-Regular"],["mathtt","texttt","Typewriter-Regular"]],Wf=[["mathbf","textbf","Main-Bold"],["","",""],["mathsf","textsf","SansSerif-Regular"],["mathboldsf","textboldsf","SansSerif-Bold"],["mathtt","texttt","Typewriter-Regular"]],TC=function(e,n){var r=e.charCodeAt(0),i=e.charCodeAt(1),a=(r-55296)*1024+(i-56320)+65536,o=n==="math"?0:1;if(119808<=a&&a<120484){var l=Math.floor((a-119808)/26);return[wn[l][2],wn[l][o]]}else if(120782<=a&&a<=120831){var Q=Math.floor((a-120782)/10);return[Wf[Q][2],Wf[Q][o]]}else{if(a===120485||a===120486)return[wn[0][2],wn[0][o]];if(120486<a&&a<120782)return["",""];throw new J("Unsupported character: "+e)}},a9=function(e,n,r){return Q2[r][e]&&Q2[r][e].replace&&(e=Q2[r][e].replace),{value:e,metrics:du(e,n,r)}},n4=function(e,n,r,i,a){var o=a9(e,n,r),l=o.metrics;e=o.value;var Q;if(l){var s=l.italic;(r==="text"||i&&i.font==="mathit")&&(s=0),Q=new q3(e,l.height,l.depth,s,l.skew,l.width,a)}else typeof console<"u"&&console.warn("No character metrics "+("for '"+e+"' in style '"+n+"' and mode '"+r+"'")),Q=new q3(e,0,0,0,0,0,a);if(i){Q.maxFontSize=i.sizeMultiplier,i.style.isTight()&&Q.classes.push("mtight");var u=i.getColor();u&&(Q.style.color=u)}return Q},cC=function(e,n,r,i){return i===void 0&&(i=[]),r.font==="boldsymbol"&&a9(e,"Main-Bold",n).metrics?n4(e,"Main-Bold",n,r,i.concat(["mathbf"])):e==="\\"||Q2[n][e].font==="main"?n4(e,"Main-Regular",n,r,i):n4(e,"AMS-Regular",n,r,i.concat(["amsrm"]))},fC=function(e,n,r,i,a){return a!=="textord"&&a9(e,"Math-BoldItalic",n).metrics?{fontName:"Math-BoldItalic",fontClass:"boldsymbol"}:{fontName:"Main-Bold",fontClass:"mathbf"}},hC=function(e,n,r){var i=e.mode,a=e.text,o=["mord"],l=i==="math"||i==="text"&&n.font,Q=l?n.font:n.fontFamily;if(a.charCodeAt(0)===55349){var[s,u]=TC(a,i);return n4(a,s,i,n,o.concat(u))}else if(Q){var T,c;if(Q==="boldsymbol"){var f=fC(a,i,n,o,r);T=f.fontName,c=[f.fontClass]}else l?(T=Wg[Q].fontName,c=[Q]):(T=Sn(Q,n.fontWeight,n.fontShape),c=[Q,n.fontWeight,n.fontShape]);if(a9(a,T,i).metrics)return n4(a,T,i,n,o.concat(c));if(Zg.hasOwnProperty(a)&&T.slice(0,10)==="Typewriter"){for(var h=[],p=0;p<a.length;p++)h.push(n4(a[p],T,i,n,o.concat(c)));return Xg(h)}}if(r==="mathord")return n4(a,"Math-Italic",i,n,o.concat(["mathnormal"]));if(r==="textord"){var v=Q2[i][a]&&Q2[i][a].font;if(v==="ams"){var d=Sn("amsrm",n.fontWeight,n.fontShape);return n4(a,d,i,n,o.concat("amsrm",n.fontWeight,n.fontShape))}else if(v==="main"||!v){var m=Sn("textrm",n.fontWeight,n.fontShape);return n4(a,m,i,n,o.concat(n.fontWeight,n.fontShape))}else{var y=Sn(v,n.fontWeight,n.fontShape);return n4(a,y,i,n,o.concat(y,n.fontWeight,n.fontShape))}}else throw new Error("unexpected type: "+r+" in makeOrd")},dC=(t,e)=>{if(W6(t.classes)!==W6(e.classes)||t.skew!==e.skew||t.maxFontSize!==e.maxFontSize)return!1;if(t.classes.length===1){var n=t.classes[0];if(n==="mbin"||n==="mord")return!1}for(var r in t.style)if(t.style.hasOwnProperty(r)&&t.style[r]!==e.style[r])return!1;for(var i in e.style)if(e.style.hasOwnProperty(i)&&t.style[i]!==e.style[i])return!1;return!0},pC=t=>{for(var e=0;e<t.length-1;e++){var n=t[e],r=t[e+1];n instanceof q3&&r instanceof q3&&dC(n,r)&&(n.text+=r.text,n.height=Math.max(n.height,r.height),n.depth=Math.max(n.depth,r.depth),n.italic=r.italic,t.splice(e+1,1),e--)}return t},mu=function(e){for(var n=0,r=0,i=0,a=0;a<e.children.length;a++){var o=e.children[a];o.height>n&&(n=o.height),o.depth>r&&(r=o.depth),o.maxFontSize>i&&(i=o.maxFontSize)}e.height=n,e.depth=r,e.maxFontSize=i},h3=function(e,n,r,i){var a=new L7(e,n,r,i);return mu(a),a},Gg=(t,e,n,r)=>new L7(t,e,n,r),mC=function(e,n,r){var i=h3([e],[],n);return i.height=Math.max(r||n.fontMetrics().defaultRuleThickness,n.minRuleThickness),i.style.borderBottomWidth=n1(i.height),i.maxFontSize=1,i},vC=function(e,n,r,i){var a=new pu(e,n,r,i);return mu(a),a},Xg=function(e){var n=new x7(e);return mu(n),n},yC=function(e,n){return e instanceof x7?h3([],[e],n):e},gC=function(e){if(e.positionType==="individualShift"){for(var n=e.children,r=[n[0]],i=-n[0].shift-n[0].elem.depth,a=i,o=1;o<n.length;o++){var l=-n[o].shift-a-n[o].elem.depth,Q=l-(n[o-1].elem.height+n[o-1].elem.depth);a=a+l,r.push({type:"kern",size:Q}),r.push(n[o])}return{children:r,depth:i}}var s;if(e.positionType==="top"){for(var u=e.positionData,T=0;T<e.children.length;T++){var c=e.children[T];u-=c.type==="kern"?c.size:c.elem.height+c.elem.depth}s=u}else if(e.positionType==="bottom")s=-e.positionData;else{var f=e.children[0];if(f.type!=="elem")throw new Error('First child must have type "elem".');if(e.positionType==="shift")s=-f.elem.depth-e.positionData;else if(e.positionType==="firstBaseline")s=-f.elem.depth;else throw new Error("Invalid positionType "+e.positionType+".")}return{children:e.children,depth:s}},xC=function(e,n){for(var{children:r,depth:i}=gC(e),a=0,o=0;o<r.length;o++){var l=r[o];if(l.type==="elem"){var Q=l.elem;a=Math.max(a,Q.maxFontSize,Q.height)}}a+=2;var s=h3(["pstrut"],[]);s.style.height=n1(a);for(var u=[],T=i,c=i,f=i,h=0;h<r.length;h++){var p=r[h];if(p.type==="kern")f+=p.size;else{var v=p.elem,d=p.wrapperClasses||[],m=p.wrapperStyle||{},y=h3(d,[s,v],void 0,m);y.style.top=n1(-a-f-v.depth),p.marginLeft&&(y.style.marginLeft=p.marginLeft),p.marginRight&&(y.style.marginRight=p.marginRight),u.push(y),f+=v.height+v.depth}T=Math.min(T,f),c=Math.max(c,f)}var x=h3(["vlist"],u);x.style.height=n1(c);var L;if(T<0){var H=h3([],[]),M=h3(["vlist"],[H]);M.style.height=n1(-T);var w=h3(["vlist-s"],[new q3("​")]);L=[h3(["vlist-r"],[x,w]),h3(["vlist-r"],[M])]}else L=[h3(["vlist-r"],[x])];var S=h3(["vlist-t"],L);return L.length===2&&S.classes.push("vlist-t2"),S.height=c,S.depth=-T,S},LC=(t,e)=>{var n=h3(["mspace"],[],e),r=y2(t,e);return n.style.marginRight=n1(r),n},Sn=function(e,n,r){var i="";switch(e){case"amsrm":i="AMS";break;case"textrm":i="Main";break;case"textsf":i="SansSerif";break;case"texttt":i="Typewriter";break;default:i=e}var a;return n==="textbf"&&r==="textit"?a="BoldItalic":n==="textbf"?a="Bold":n==="textit"?a="Italic":a="Regular",i+"-"+a},Wg={mathbf:{variant:"bold",fontName:"Main-Bold"},mathrm:{variant:"normal",fontName:"Main-Regular"},textit:{variant:"italic",fontName:"Main-Italic"},mathit:{variant:"italic",fontName:"Main-Italic"},mathnormal:{variant:"italic",fontName:"Math-Italic"},mathbb:{variant:"double-struck",fontName:"AMS-Regular"},mathcal:{variant:"script",fontName:"Caligraphic-Regular"},mathfrak:{variant:"fraktur",fontName:"Fraktur-Regular"},mathscr:{variant:"script",fontName:"Script-Regular"},mathsf:{variant:"sans-serif",fontName:"SansSerif-Regular"},mathtt:{variant:"monospace",fontName:"Typewriter-Regular"}},Ug={vec:["vec",.471,.714],oiintSize1:["oiintSize1",.957,.499],oiintSize2:["oiintSize2",1.472,.659],oiiintSize1:["oiiintSize1",1.304,.499],oiiintSize2:["oiiintSize2",1.98,.659]},HC=function(e,n){var[r,i,a]=Ug[e],o=new U6(r),l=new s6([o],{width:n1(i),height:n1(a),style:"width:"+n1(i),viewBox:"0 0 "+1e3*i+" "+1e3*a,preserveAspectRatio:"xMinYMin"}),Q=Gg(["overlay"],[l],n);return Q.height=a,Q.style.height=n1(a),Q.style.width=n1(i),Q},R={fontMap:Wg,makeSymbol:n4,mathsym:cC,makeSpan:h3,makeSvgSpan:Gg,makeLineSpan:mC,makeAnchor:vC,makeFragment:Xg,wrapFragment:yC,makeVList:xC,makeOrd:hC,makeGlue:LC,staticSvg:HC,svgData:Ug,tryCombineChars:pC},m2={number:3,unit:"mu"},u5={number:4,unit:"mu"},I4={number:5,unit:"mu"},bC={mord:{mop:m2,mbin:u5,mrel:I4,minner:m2},mop:{mord:m2,mop:m2,mrel:I4,minner:m2},mbin:{mord:u5,mop:u5,mopen:u5,minner:u5},mrel:{mord:I4,mop:I4,mopen:I4,minner:I4},mopen:{},mclose:{mop:m2,mbin:u5,mrel:I4,minner:m2},mpunct:{mord:m2,mop:m2,mrel:I4,mopen:m2,mclose:m2,mpunct:m2,minner:m2},minner:{mord:m2,mop:m2,mbin:u5,mrel:I4,mopen:m2,mpunct:m2,minner:m2}},MC={mord:{mop:m2},mop:{mord:m2,mop:m2},mbin:{},mrel:{},mopen:{},mclose:{mop:m2},mpunct:{},minner:{mop:m2}},Kg={},Yr={},Jr={};function s1(t){for(var{type:e,names:n,props:r,handler:i,htmlBuilder:a,mathmlBuilder:o}=t,l={type:e,numArgs:r.numArgs,argTypes:r.argTypes,allowedInArgument:!!r.allowedInArgument,allowedInText:!!r.allowedInText,allowedInMath:r.allowedInMath===void 0?!0:r.allowedInMath,numOptionalArgs:r.numOptionalArgs||0,infix:!!r.infix,primitive:!!r.primitive,handler:i},Q=0;Q<n.length;++Q)Kg[n[Q]]=l;e&&(a&&(Yr[e]=a),o&&(Jr[e]=o))}function X5(t){var{type:e,htmlBuilder:n,mathmlBuilder:r}=t;s1({type:e,names:[],props:{numArgs:0},handler(){throw new Error("Should never be called.")},htmlBuilder:n,mathmlBuilder:r})}var t8=function(e){return e.type==="ordgroup"&&e.body.length===1?e.body[0]:e},S2=function(e){return e.type==="ordgroup"?e.body:[e]},u6=R.makeSpan,_C=["leftmost","mbin","mopen","mrel","mop","mpunct"],wC=["rightmost","mrel","mclose","mpunct"],SC={display:w1.DISPLAY,text:w1.TEXT,script:w1.SCRIPT,scriptscript:w1.SCRIPTSCRIPT},AC={mord:"mord",mop:"mop",mbin:"mbin",mrel:"mrel",mopen:"mopen",mclose:"mclose",mpunct:"mpunct",minner:"minner"},N2=function(e,n,r,i){i===void 0&&(i=[null,null]);for(var a=[],o=0;o<e.length;o++){var l=q1(e[o],n);if(l instanceof x7){var Q=l.children;a.push(...Q)}else a.push(l)}if(R.tryCombineChars(a),!r)return a;var s=n;if(e.length===1){var u=e[0];u.type==="sizing"?s=n.havingSize(u.size):u.type==="styling"&&(s=n.havingStyle(SC[u.style]))}var T=u6([i[0]||"leftmost"],[],n),c=u6([i[1]||"rightmost"],[],n),f=r==="root";return Uf(a,(h,p)=>{var v=p.classes[0],d=h.classes[0];v==="mbin"&&C1.contains(wC,d)?p.classes[0]="mord":d==="mbin"&&C1.contains(_C,v)&&(h.classes[0]="mord")},{node:T},c,f),Uf(a,(h,p)=>{var v=gQ(p),d=gQ(h),m=v&&d?h.hasClass("mtight")?MC[v][d]:bC[v][d]:null;if(m)return R.makeGlue(m,s)},{node:T},c,f),a},Uf=function t(e,n,r,i,a){i&&e.push(i);for(var o=0;o<e.length;o++){var l=e[o],Q=Yg(l);if(Q){t(Q.children,n,r,null,a);continue}var s=!l.hasClass("mspace");if(s){var u=n(l,r.node);u&&(r.insertAfter?r.insertAfter(u):(e.unshift(u),o++))}s?r.node=l:a&&l.hasClass("newline")&&(r.node=u6(["leftmost"])),r.insertAfter=(T=>c=>{e.splice(T+1,0,c),o++})(o)}i&&e.pop()},Yg=function(e){return e instanceof x7||e instanceof pu||e instanceof L7&&e.hasClass("enclosing")?e:null},VC=function t(e,n){var r=Yg(e);if(r){var i=r.children;if(i.length){if(n==="right")return t(i[i.length-1],"right");if(n==="left")return t(i[0],"left")}}return e},gQ=function(e,n){return e?(n&&(e=VC(e,n)),AC[e.classes[0]]||null):null},t7=function(e,n){var r=["nulldelimiter"].concat(e.baseSizingClasses());return u6(n.concat(r))},q1=function(e,n,r){if(!e)return u6();if(Yr[e.type]){var i=Yr[e.type](e,n);if(r&&n.size!==r.size){i=u6(n.sizingClasses(r),[i],n);var a=n.sizeMultiplier/r.sizeMultiplier;i.height*=a,i.depth*=a}return i}else throw new J("Got group of unknown type: '"+e.type+"'")};function An(t,e){var n=u6(["base"],t,e),r=u6(["strut"]);return r.style.height=n1(n.height+n.depth),n.depth&&(r.style.verticalAlign=n1(-n.depth)),n.children.unshift(r),n}function xQ(t,e){var n=null;t.length===1&&t[0].type==="tag"&&(n=t[0].tag,t=t[0].body);var r=N2(t,e,"root"),i;r.length===2&&r[1].hasClass("tag")&&(i=r.pop());for(var a=[],o=[],l=0;l<r.length;l++)if(o.push(r[l]),r[l].hasClass("mbin")||r[l].hasClass("mrel")||r[l].hasClass("allowbreak")){for(var Q=!1;l<r.length-1&&r[l+1].hasClass("mspace")&&!r[l+1].hasClass("newline");)l++,o.push(r[l]),r[l].hasClass("nobreak")&&(Q=!0);Q||(a.push(An(o,e)),o=[])}else r[l].hasClass("newline")&&(o.pop(),o.length>0&&(a.push(An(o,e)),o=[]),a.push(r[l]));o.length>0&&a.push(An(o,e));var s;n?(s=An(N2(n,e,!0)),s.classes=["tag"],a.push(s)):i&&a.push(i);var u=u6(["katex-html"],a);if(u.setAttribute("aria-hidden","true"),s){var T=s.children[0];T.style.height=n1(u.height+u.depth),u.depth&&(T.style.verticalAlign=n1(-u.depth))}return u}function Jg(t){return new x7(t)}class N3{constructor(e,n,r){this.type=void 0,this.attributes=void 0,this.children=void 0,this.classes=void 0,this.type=e,this.attributes={},this.children=n||[],this.classes=r||[]}setAttribute(e,n){this.attributes[e]=n}getAttribute(e){return this.attributes[e]}toNode(){var e=document.createElementNS("http://www.w3.org/1998/Math/MathML",this.type);for(var n in this.attributes)Object.prototype.hasOwnProperty.call(this.attributes,n)&&e.setAttribute(n,this.attributes[n]);this.classes.length>0&&(e.className=W6(this.classes));for(var r=0;r<this.children.length;r++)e.appendChild(this.children[r].toNode());return e}toMarkup(){var e="<"+this.type;for(var n in this.attributes)Object.prototype.hasOwnProperty.call(this.attributes,n)&&(e+=" "+n+'="',e+=C1.escape(this.attributes[n]),e+='"');this.classes.length>0&&(e+=' class ="'+C1.escape(W6(this.classes))+'"'),e+=">";for(var r=0;r<this.children.length;r++)e+=this.children[r].toMarkup();return e+="</"+this.type+">",e}toText(){return this.children.map(e=>e.toText()).join("")}}let E0=class{constructor(e){this.text=void 0,this.text=e}toNode(){return document.createTextNode(this.text)}toMarkup(){return C1.escape(this.toText())}toText(){return this.text}};class CC{constructor(e){this.width=void 0,this.character=void 0,this.width=e,e>=.05555&&e<=.05556?this.character=" ":e>=.1666&&e<=.1667?this.character=" ":e>=.2222&&e<=.2223?this.character=" ":e>=.2777&&e<=.2778?this.character="  ":e>=-.05556&&e<=-.05555?this.character=" ⁣":e>=-.1667&&e<=-.1666?this.character=" ⁣":e>=-.2223&&e<=-.2222?this.character=" ⁣":e>=-.2778&&e<=-.2777?this.character=" ⁣":this.character=null}toNode(){if(this.character)return document.createTextNode(this.character);var e=document.createElementNS("http://www.w3.org/1998/Math/MathML","mspace");return e.setAttribute("width",n1(this.width)),e}toMarkup(){return this.character?"<mtext>"+this.character+"</mtext>":'<mspace width="'+n1(this.width)+'"/>'}toText(){return this.character?this.character:" "}}var K={MathNode:N3,TextNode:E0,SpaceNode:CC,newDocumentFragment:Jg},Z3=function(e,n,r){return Q2[n][e]&&Q2[n][e].replace&&e.charCodeAt(0)!==55349&&!(Zg.hasOwnProperty(e)&&r&&(r.fontFamily&&r.fontFamily.slice(4,6)==="tt"||r.font&&r.font.slice(4,6)==="tt"))&&(e=Q2[n][e].replace),new K.TextNode(e)},vu=function(e){return e.length===1?e[0]:new K.MathNode("mrow",e)},yu=function(e,n){if(n.fontFamily==="texttt")return"monospace";if(n.fontFamily==="textsf")return n.fontShape==="textit"&&n.fontWeight==="textbf"?"sans-serif-bold-italic":n.fontShape==="textit"?"sans-serif-italic":n.fontWeight==="textbf"?"bold-sans-serif":"sans-serif";if(n.fontShape==="textit"&&n.fontWeight==="textbf")return"bold-italic";if(n.fontShape==="textit")return"italic";if(n.fontWeight==="textbf")return"bold";var r=n.font;if(!r||r==="mathnormal")return null;var i=e.mode;if(r==="mathit")return"italic";if(r==="boldsymbol")return e.type==="textord"?"bold":"bold-italic";if(r==="mathbf")return"bold";if(r==="mathbb")return"double-struck";if(r==="mathfrak")return"fraktur";if(r==="mathscr"||r==="mathcal")return"script";if(r==="mathsf")return"sans-serif";if(r==="mathtt")return"monospace";var a=e.text;if(C1.contains(["\\imath","\\jmath"],a))return null;Q2[i][a]&&Q2[i][a].replace&&(a=Q2[i][a].replace);var o=R.fontMap[r].fontName;return du(a,o,i)?R.fontMap[r].variant:null},x3=function(e,n,r){if(e.length===1){var i=r2(e[0],n);return r&&i instanceof N3&&i.type==="mo"&&(i.setAttribute("lspace","0em"),i.setAttribute("rspace","0em")),[i]}for(var a=[],o,l=0;l<e.length;l++){var Q=r2(e[l],n);if(Q instanceof N3&&o instanceof N3){if(Q.type==="mtext"&&o.type==="mtext"&&Q.getAttribute("mathvariant")===o.getAttribute("mathvariant")){o.children.push(...Q.children);continue}else if(Q.type==="mn"&&o.type==="mn"){o.children.push(...Q.children);continue}else if(Q.type==="mi"&&Q.children.length===1&&o.type==="mn"){var s=Q.children[0];if(s instanceof E0&&s.text==="."){o.children.push(...Q.children);continue}}else if(o.type==="mi"&&o.children.length===1){var u=o.children[0];if(u instanceof E0&&u.text==="̸"&&(Q.type==="mo"||Q.type==="mi"||Q.type==="mn")){var T=Q.children[0];T instanceof E0&&T.text.length>0&&(T.text=T.text.slice(0,1)+"̸"+T.text.slice(1),a.pop())}}}a.push(Q),o=Q}return a},K6=function(e,n,r){return vu(x3(e,n,r))},r2=function(e,n){if(!e)return new K.MathNode("mrow");if(Jr[e.type]){var r=Jr[e.type](e,n);return r}else throw new J("Got group of unknown type: '"+e.type+"'")};function Kf(t,e,n,r,i){var a=x3(t,n),o;a.length===1&&a[0]instanceof N3&&C1.contains(["mrow","mtable"],a[0].type)?o=a[0]:o=new K.MathNode("mrow",a);var l=new K.MathNode("annotation",[new K.TextNode(e)]);l.setAttribute("encoding","application/x-tex");var Q=new K.MathNode("semantics",[o,l]),s=new K.MathNode("math",[Q]);s.setAttribute("xmlns","http://www.w3.org/1998/Math/MathML"),r&&s.setAttribute("display","block");var u=i?"katex":"katex-mathml";return R.makeSpan([u],[s])}var tx=function(e){return new jg({style:e.displayMode?w1.DISPLAY:w1.TEXT,maxSize:e.maxSize,minRuleThickness:e.minRuleThickness})},ex=function(e,n){if(n.displayMode){var r=["katex-display"];n.leqno&&r.push("leqno"),n.fleqn&&r.push("fleqn"),e=R.makeSpan(r,[e])}return e},EC=function(e,n,r){var i=tx(r),a;if(r.output==="mathml")return Kf(e,n,i,r.displayMode,!0);if(r.output==="html"){var o=xQ(e,i);a=R.makeSpan(["katex"],[o])}else{var l=Kf(e,n,i,r.displayMode,!1),Q=xQ(e,i);a=R.makeSpan(["katex"],[l,Q])}return ex(a,r)},DC=function(e,n,r){var i=tx(r),a=xQ(e,i),o=R.makeSpan(["katex"],[a]);return ex(o,r)},OC={widehat:"^",widecheck:"ˇ",widetilde:"~",utilde:"~",overleftarrow:"←",underleftarrow:"←",xleftarrow:"←",overrightarrow:"→",underrightarrow:"→",xrightarrow:"→",underbrace:"⏟",overbrace:"⏞",overgroup:"⏠",undergroup:"⏡",overleftrightarrow:"↔",underleftrightarrow:"↔",xleftrightarrow:"↔",Overrightarrow:"⇒",xRightarrow:"⇒",overleftharpoon:"↼",xleftharpoonup:"↼",overrightharpoon:"⇀",xrightharpoonup:"⇀",xLeftarrow:"⇐",xLeftrightarrow:"⇔",xhookleftarrow:"↩",xhookrightarrow:"↪",xmapsto:"↦",xrightharpoondown:"⇁",xleftharpoondown:"↽",xrightleftharpoons:"⇌",xleftrightharpoons:"⇋",xtwoheadleftarrow:"↞",xtwoheadrightarrow:"↠",xlongequal:"=",xtofrom:"⇄",xrightleftarrows:"⇄",xrightequilibrium:"⇌",xleftequilibrium:"⇋","\\cdrightarrow":"→","\\cdleftarrow":"←","\\cdlongequal":"="},kC=function(e){var n=new K.MathNode("mo",[new K.TextNode(OC[e.replace(/^\\/,"")])]);return n.setAttribute("stretchy","true"),n},$C={overrightarrow:[["rightarrow"],.888,522,"xMaxYMin"],overleftarrow:[["leftarrow"],.888,522,"xMinYMin"],underrightarrow:[["rightarrow"],.888,522,"xMaxYMin"],underleftarrow:[["leftarrow"],.888,522,"xMinYMin"],xrightarrow:[["rightarrow"],1.469,522,"xMaxYMin"],"\\cdrightarrow":[["rightarrow"],3,522,"xMaxYMin"],xleftarrow:[["leftarrow"],1.469,522,"xMinYMin"],"\\cdleftarrow":[["leftarrow"],3,522,"xMinYMin"],Overrightarrow:[["doublerightarrow"],.888,560,"xMaxYMin"],xRightarrow:[["doublerightarrow"],1.526,560,"xMaxYMin"],xLeftarrow:[["doubleleftarrow"],1.526,560,"xMinYMin"],overleftharpoon:[["leftharpoon"],.888,522,"xMinYMin"],xleftharpoonup:[["leftharpoon"],.888,522,"xMinYMin"],xleftharpoondown:[["leftharpoondown"],.888,522,"xMinYMin"],overrightharpoon:[["rightharpoon"],.888,522,"xMaxYMin"],xrightharpoonup:[["rightharpoon"],.888,522,"xMaxYMin"],xrightharpoondown:[["rightharpoondown"],.888,522,"xMaxYMin"],xlongequal:[["longequal"],.888,334,"xMinYMin"],"\\cdlongequal":[["longequal"],3,334,"xMinYMin"],xtwoheadleftarrow:[["twoheadleftarrow"],.888,334,"xMinYMin"],xtwoheadrightarrow:[["twoheadrightarrow"],.888,334,"xMaxYMin"],overleftrightarrow:[["leftarrow","rightarrow"],.888,522],overbrace:[["leftbrace","midbrace","rightbrace"],1.6,548],underbrace:[["leftbraceunder","midbraceunder","rightbraceunder"],1.6,548],underleftrightarrow:[["leftarrow","rightarrow"],.888,522],xleftrightarrow:[["leftarrow","rightarrow"],1.75,522],xLeftrightarrow:[["doubleleftarrow","doublerightarrow"],1.75,560],xrightleftharpoons:[["leftharpoondownplus","rightharpoonplus"],1.75,716],xleftrightharpoons:[["leftharpoonplus","rightharpoondownplus"],1.75,716],xhookleftarrow:[["leftarrow","righthook"],1.08,522],xhookrightarrow:[["lefthook","rightarrow"],1.08,522],overlinesegment:[["leftlinesegment","rightlinesegment"],.888,522],underlinesegment:[["leftlinesegment","rightlinesegment"],.888,522],overgroup:[["leftgroup","rightgroup"],.888,342],undergroup:[["leftgroupunder","rightgroupunder"],.888,342],xmapsto:[["leftmapsto","rightarrow"],1.5,522],xtofrom:[["leftToFrom","rightToFrom"],1.75,528],xrightleftarrows:[["baraboveleftarrow","rightarrowabovebar"],1.75,901],xrightequilibrium:[["baraboveshortleftharpoon","rightharpoonaboveshortbar"],1.75,716],xleftequilibrium:[["shortbaraboveleftharpoon","shortrightharpoonabovebar"],1.75,716]},BC=function(e){return e.type==="ordgroup"?e.body.length:1},PC=function(e,n){function r(){var l=4e5,Q=e.label.slice(1);if(C1.contains(["widehat","widecheck","widetilde","utilde"],Q)){var s=e,u=BC(s.base),T,c,f;if(u>5)Q==="widehat"||Q==="widecheck"?(T=420,l=2364,f=.42,c=Q+"4"):(T=312,l=2340,f=.34,c="tilde4");else{var h=[1,1,2,2,3,3][u];Q==="widehat"||Q==="widecheck"?(l=[0,1062,2364,2364,2364][h],T=[0,239,300,360,420][h],f=[0,.24,.3,.3,.36,.42][h],c=Q+h):(l=[0,600,1033,2339,2340][h],T=[0,260,286,306,312][h],f=[0,.26,.286,.3,.306,.34][h],c="tilde"+h)}var p=new U6(c),v=new s6([p],{width:"100%",height:n1(f),viewBox:"0 0 "+l+" "+T,preserveAspectRatio:"none"});return{span:R.makeSvgSpan([],[v],n),minWidth:0,height:f}}else{var d=[],m=$C[Q],[y,x,L]=m,H=L/1e3,M=y.length,w,S;if(M===1){var D=m[3];w=["hide-tail"],S=[D]}else if(M===2)w=["halfarrow-left","halfarrow-right"],S=["xMinYMin","xMaxYMin"];else if(M===3)w=["brace-left","brace-center","brace-right"],S=["xMinYMin","xMidYMin","xMaxYMin"];else throw new Error(`Correct katexImagesData or update code here to support
                    `+M+" children.");for(var E=0;E<M;E++){var $=new U6(y[E]),j=new s6([$],{width:"400em",height:n1(H),viewBox:"0 0 "+l+" "+L,preserveAspectRatio:S[E]+" slice"}),G=R.makeSvgSpan([w[E]],[j],n);if(M===1)return{span:G,minWidth:x,height:H};G.style.height=n1(H),d.push(G)}return{span:R.makeSpan(["stretchy"],d,n),minWidth:x,height:H}}}var{span:i,minWidth:a,height:o}=r();return i.height=o,i.style.height=n1(o),a>0&&(i.style.minWidth=n1(a)),i},NC=function(e,n,r,i,a){var o,l=e.height+e.depth+r+i;if(/fbox|color|angl/.test(n)){if(o=R.makeSpan(["stretchy",n],[],a),n==="fbox"){var Q=a.color&&a.getColor();Q&&(o.style.borderColor=Q)}}else{var s=[];/^[bx]cancel$/.test(n)&&s.push(new vQ({x1:"0",y1:"0",x2:"100%",y2:"100%","stroke-width":"0.046em"})),/^x?cancel$/.test(n)&&s.push(new vQ({x1:"0",y1:"100%",x2:"100%",y2:"0","stroke-width":"0.046em"}));var u=new s6(s,{width:"100%",height:n1(l)});o=R.makeSvgSpan([],[u],a)}return o.height=l,o.style.height=n1(l),o},T6={encloseSpan:NC,mathMLnode:kC,svgSpan:PC};function B1(t,e){if(!t||t.type!==e)throw new Error("Expected node of type "+e+", but got "+(t?"node of type "+t.type:String(t)));return t}function gu(t){var e=o9(t);if(!e)throw new Error("Expected node of symbol group type, but got "+(t?"node of type "+t.type:String(t)));return e}function o9(t){return t&&(t.type==="atom"||uC.hasOwnProperty(t.type))?t:null}var xu=(t,e)=>{var n,r,i;t&&t.type==="supsub"?(r=B1(t.base,"accent"),n=r.base,t.base=n,i=QC(q1(t,e)),t.base=r):(r=B1(t,"accent"),n=r.base);var a=q1(n,e.havingCrampedStyle()),o=r.isShifty&&C1.isCharacterBox(n),l=0;if(o){var Q=C1.getBaseElem(n),s=q1(Q,e.havingCrampedStyle());l=zf(s).skew}var u=r.label==="\\c",T=u?a.height+a.depth:Math.min(a.height,e.fontMetrics().xHeight),c;if(r.isStretchy)c=T6.svgSpan(r,e),c=R.makeVList({positionType:"firstBaseline",children:[{type:"elem",elem:a},{type:"elem",elem:c,wrapperClasses:["svg-align"],wrapperStyle:l>0?{width:"calc(100% - "+n1(2*l)+")",marginLeft:n1(2*l)}:void 0}]},e);else{var f,h;r.label==="\\vec"?(f=R.staticSvg("vec",e),h=R.svgData.vec[1]):(f=R.makeOrd({mode:r.mode,text:r.label},e,"textord"),f=zf(f),f.italic=0,h=f.width,u&&(T+=f.depth)),c=R.makeSpan(["accent-body"],[f]);var p=r.label==="\\textcircled";p&&(c.classes.push("accent-full"),T=a.height);var v=l;p||(v-=h/2),c.style.left=n1(v),r.label==="\\textcircled"&&(c.style.top=".2em"),c=R.makeVList({positionType:"firstBaseline",children:[{type:"elem",elem:a},{type:"kern",size:-T},{type:"elem",elem:c}]},e)}var d=R.makeSpan(["mord","accent"],[c],e);return i?(i.children[0]=d,i.height=Math.max(d.height,i.height),i.classes[0]="mord",i):d},nx=(t,e)=>{var n=t.isStretchy?T6.mathMLnode(t.label):new K.MathNode("mo",[Z3(t.label,t.mode)]),r=new K.MathNode("mover",[r2(t.base,e),n]);return r.setAttribute("accent","true"),r},IC=new RegExp(["\\acute","\\grave","\\ddot","\\tilde","\\bar","\\breve","\\check","\\hat","\\vec","\\dot","\\mathring"].map(t=>"\\"+t).join("|"));s1({type:"accent",names:["\\acute","\\grave","\\ddot","\\tilde","\\bar","\\breve","\\check","\\hat","\\vec","\\dot","\\mathring","\\widecheck","\\widehat","\\widetilde","\\overrightarrow","\\overleftarrow","\\Overrightarrow","\\overleftrightarrow","\\overgroup","\\overlinesegment","\\overleftharpoon","\\overrightharpoon"],props:{numArgs:1},handler:(t,e)=>{var n=t8(e[0]),r=!IC.test(t.funcName),i=!r||t.funcName==="\\widehat"||t.funcName==="\\widetilde"||t.funcName==="\\widecheck";return{type:"accent",mode:t.parser.mode,label:t.funcName,isStretchy:r,isShifty:i,base:n}},htmlBuilder:xu,mathmlBuilder:nx});s1({type:"accent",names:["\\'","\\`","\\^","\\~","\\=","\\u","\\.",'\\"',"\\c","\\r","\\H","\\v","\\textcircled"],props:{numArgs:1,allowedInText:!0,allowedInMath:!0,argTypes:["primitive"]},handler:(t,e)=>{var n=e[0],r=t.parser.mode;return r==="math"&&(t.parser.settings.reportNonstrict("mathVsTextAccents","LaTeX's accent "+t.funcName+" works only in text mode"),r="text"),{type:"accent",mode:r,label:t.funcName,isStretchy:!1,isShifty:!0,base:n}},htmlBuilder:xu,mathmlBuilder:nx});s1({type:"accentUnder",names:["\\underleftarrow","\\underrightarrow","\\underleftrightarrow","\\undergroup","\\underlinesegment","\\utilde"],props:{numArgs:1},handler:(t,e)=>{var{parser:n,funcName:r}=t,i=e[0];return{type:"accentUnder",mode:n.mode,label:r,base:i}},htmlBuilder:(t,e)=>{var n=q1(t.base,e),r=T6.svgSpan(t,e),i=t.label==="\\utilde"?.12:0,a=R.makeVList({positionType:"top",positionData:n.height,children:[{type:"elem",elem:r,wrapperClasses:["svg-align"]},{type:"kern",size:i},{type:"elem",elem:n}]},e);return R.makeSpan(["mord","accentunder"],[a],e)},mathmlBuilder:(t,e)=>{var n=T6.mathMLnode(t.label),r=new K.MathNode("munder",[r2(t.base,e),n]);return r.setAttribute("accentunder","true"),r}});var Vn=t=>{var e=new K.MathNode("mpadded",t?[t]:[]);return e.setAttribute("width","+0.6em"),e.setAttribute("lspace","0.3em"),e};s1({type:"xArrow",names:["\\xleftarrow","\\xrightarrow","\\xLeftarrow","\\xRightarrow","\\xleftrightarrow","\\xLeftrightarrow","\\xhookleftarrow","\\xhookrightarrow","\\xmapsto","\\xrightharpoondown","\\xrightharpoonup","\\xleftharpoondown","\\xleftharpoonup","\\xrightleftharpoons","\\xleftrightharpoons","\\xlongequal","\\xtwoheadrightarrow","\\xtwoheadleftarrow","\\xtofrom","\\xrightleftarrows","\\xrightequilibrium","\\xleftequilibrium","\\\\cdrightarrow","\\\\cdleftarrow","\\\\cdlongequal"],props:{numArgs:1,numOptionalArgs:1},handler(t,e,n){var{parser:r,funcName:i}=t;return{type:"xArrow",mode:r.mode,label:i,body:e[0],below:n[0]}},htmlBuilder(t,e){var n=e.style,r=e.havingStyle(n.sup()),i=R.wrapFragment(q1(t.body,r,e),e),a=t.label.slice(0,2)==="\\x"?"x":"cd";i.classes.push(a+"-arrow-pad");var o;t.below&&(r=e.havingStyle(n.sub()),o=R.wrapFragment(q1(t.below,r,e),e),o.classes.push(a+"-arrow-pad"));var l=T6.svgSpan(t,e),Q=-e.fontMetrics().axisHeight+.5*l.height,s=-e.fontMetrics().axisHeight-.5*l.height-.111;(i.depth>.25||t.label==="\\xleftequilibrium")&&(s-=i.depth);var u;if(o){var T=-e.fontMetrics().axisHeight+o.height+.5*l.height+.111;u=R.makeVList({positionType:"individualShift",children:[{type:"elem",elem:i,shift:s},{type:"elem",elem:l,shift:Q},{type:"elem",elem:o,shift:T}]},e)}else u=R.makeVList({positionType:"individualShift",children:[{type:"elem",elem:i,shift:s},{type:"elem",elem:l,shift:Q}]},e);return u.children[0].children[0].children[1].classes.push("svg-align"),R.makeSpan(["mrel","x-arrow"],[u],e)},mathmlBuilder(t,e){var n=T6.mathMLnode(t.label);n.setAttribute("minsize",t.label.charAt(0)==="x"?"1.75em":"3.0em");var r;if(t.body){var i=Vn(r2(t.body,e));if(t.below){var a=Vn(r2(t.below,e));r=new K.MathNode("munderover",[n,a,i])}else r=new K.MathNode("mover",[n,i])}else if(t.below){var o=Vn(r2(t.below,e));r=new K.MathNode("munder",[n,o])}else r=Vn(),r=new K.MathNode("mover",[n,r]);return r}});var jC=R.makeSpan;function rx(t,e){var n=N2(t.body,e,!0);return jC([t.mclass],n,e)}function ix(t,e){var n,r=x3(t.body,e);return t.mclass==="minner"?n=new K.MathNode("mpadded",r):t.mclass==="mord"?t.isCharacterBox?(n=r[0],n.type="mi"):n=new K.MathNode("mi",r):(t.isCharacterBox?(n=r[0],n.type="mo"):n=new K.MathNode("mo",r),t.mclass==="mbin"?(n.attributes.lspace="0.22em",n.attributes.rspace="0.22em"):t.mclass==="mpunct"?(n.attributes.lspace="0em",n.attributes.rspace="0.17em"):t.mclass==="mopen"||t.mclass==="mclose"?(n.attributes.lspace="0em",n.attributes.rspace="0em"):t.mclass==="minner"&&(n.attributes.lspace="0.0556em",n.attributes.width="+0.1111em")),n}s1({type:"mclass",names:["\\mathord","\\mathbin","\\mathrel","\\mathopen","\\mathclose","\\mathpunct","\\mathinner"],props:{numArgs:1,primitive:!0},handler(t,e){var{parser:n,funcName:r}=t,i=e[0];return{type:"mclass",mode:n.mode,mclass:"m"+r.slice(5),body:S2(i),isCharacterBox:C1.isCharacterBox(i)}},htmlBuilder:rx,mathmlBuilder:ix});var l9=t=>{var e=t.type==="ordgroup"&&t.body.length?t.body[0]:t;return e.type==="atom"&&(e.family==="bin"||e.family==="rel")?"m"+e.family:"mord"};s1({type:"mclass",names:["\\@binrel"],props:{numArgs:2},handler(t,e){var{parser:n}=t;return{type:"mclass",mode:n.mode,mclass:l9(e[0]),body:S2(e[1]),isCharacterBox:C1.isCharacterBox(e[1])}}});s1({type:"mclass",names:["\\stackrel","\\overset","\\underset"],props:{numArgs:2},handler(t,e){var{parser:n,funcName:r}=t,i=e[1],a=e[0],o;r!=="\\stackrel"?o=l9(i):o="mrel";var l={type:"op",mode:i.mode,limits:!0,alwaysHandleSupSub:!0,parentIsSupSub:!1,symbol:!1,suppressBaseShift:r!=="\\stackrel",body:S2(i)},Q={type:"supsub",mode:a.mode,base:l,sup:r==="\\underset"?null:a,sub:r==="\\underset"?a:null};return{type:"mclass",mode:n.mode,mclass:o,body:[Q],isCharacterBox:C1.isCharacterBox(Q)}},htmlBuilder:rx,mathmlBuilder:ix});s1({type:"pmb",names:["\\pmb"],props:{numArgs:1,allowedInText:!0},handler(t,e){var{parser:n}=t;return{type:"pmb",mode:n.mode,mclass:l9(e[0]),body:S2(e[0])}},htmlBuilder(t,e){var n=N2(t.body,e,!0),r=R.makeSpan([t.mclass],n,e);return r.style.textShadow="0.02em 0.01em 0.04px",r},mathmlBuilder(t,e){var n=x3(t.body,e),r=new K.MathNode("mstyle",n);return r.setAttribute("style","text-shadow: 0.02em 0.01em 0.04px"),r}});var FC={">":"\\\\cdrightarrow","<":"\\\\cdleftarrow","=":"\\\\cdlongequal",A:"\\uparrow",V:"\\downarrow","|":"\\Vert",".":"no arrow"},Yf=()=>({type:"styling",body:[],mode:"math",style:"display"}),Jf=t=>t.type==="textord"&&t.text==="@",RC=(t,e)=>(t.type==="mathord"||t.type==="atom")&&t.text===e;function zC(t,e,n){var r=FC[t];switch(r){case"\\\\cdrightarrow":case"\\\\cdleftarrow":return n.callFunction(r,[e[0]],[e[1]]);case"\\uparrow":case"\\downarrow":{var i=n.callFunction("\\\\cdleft",[e[0]],[]),a={type:"atom",text:r,mode:"math",family:"rel"},o=n.callFunction("\\Big",[a],[]),l=n.callFunction("\\\\cdright",[e[1]],[]),Q={type:"ordgroup",mode:"math",body:[i,o,l]};return n.callFunction("\\\\cdparent",[Q],[])}case"\\\\cdlongequal":return n.callFunction("\\\\cdlongequal",[],[]);case"\\Vert":{var s={type:"textord",text:"\\Vert",mode:"math"};return n.callFunction("\\Big",[s],[])}default:return{type:"textord",text:" ",mode:"math"}}}function qC(t){var e=[];for(t.gullet.beginGroup(),t.gullet.macros.set("\\cr","\\\\\\relax"),t.gullet.beginGroup();;){e.push(t.parseExpression(!1,"\\\\")),t.gullet.endGroup(),t.gullet.beginGroup();var n=t.fetch().text;if(n==="&"||n==="\\\\")t.consume();else if(n==="\\end"){e[e.length-1].length===0&&e.pop();break}else throw new J("Expected \\\\ or \\cr or \\end",t.nextToken)}for(var r=[],i=[r],a=0;a<e.length;a++){for(var o=e[a],l=Yf(),Q=0;Q<o.length;Q++)if(!Jf(o[Q]))l.body.push(o[Q]);else{r.push(l),Q+=1;var s=gu(o[Q]).text,u=new Array(2);if(u[0]={type:"ordgroup",mode:"math",body:[]},u[1]={type:"ordgroup",mode:"math",body:[]},!("=|.".indexOf(s)>-1))if("<>AV".indexOf(s)>-1)for(var T=0;T<2;T++){for(var c=!0,f=Q+1;f<o.length;f++){if(RC(o[f],s)){c=!1,Q=f;break}if(Jf(o[f]))throw new J("Missing a "+s+" character to complete a CD arrow.",o[f]);u[T].body.push(o[f])}if(c)throw new J("Missing a "+s+" character to complete a CD arrow.",o[Q])}else throw new J('Expected one of "<>AV=|." after @',o[Q]);var h=zC(s,u,t),p={type:"styling",body:[h],mode:"math",style:"display"};r.push(p),l=Yf()}a%2===0?r.push(l):r.shift(),r=[],i.push(r)}t.gullet.endGroup(),t.gullet.endGroup();var v=new Array(i[0].length).fill({type:"align",align:"c",pregap:.25,postgap:.25});return{type:"array",mode:"math",body:i,arraystretch:1,addJot:!0,rowGaps:[null],cols:v,colSeparationType:"CD",hLinesBeforeRow:new Array(i.length+1).fill([])}}s1({type:"cdlabel",names:["\\\\cdleft","\\\\cdright"],props:{numArgs:1},handler(t,e){var{parser:n,funcName:r}=t;return{type:"cdlabel",mode:n.mode,side:r.slice(4),label:e[0]}},htmlBuilder(t,e){var n=e.havingStyle(e.style.sup()),r=R.wrapFragment(q1(t.label,n,e),e);return r.classes.push("cd-label-"+t.side),r.style.bottom=n1(.8-r.depth),r.height=0,r.depth=0,r},mathmlBuilder(t,e){var n=new K.MathNode("mrow",[r2(t.label,e)]);return n=new K.MathNode("mpadded",[n]),n.setAttribute("width","0"),t.side==="left"&&n.setAttribute("lspace","-1width"),n.setAttribute("voffset","0.7em"),n=new K.MathNode("mstyle",[n]),n.setAttribute("displaystyle","false"),n.setAttribute("scriptlevel","1"),n}});s1({type:"cdlabelparent",names:["\\\\cdparent"],props:{numArgs:1},handler(t,e){var{parser:n}=t;return{type:"cdlabelparent",mode:n.mode,fragment:e[0]}},htmlBuilder(t,e){var n=R.wrapFragment(q1(t.fragment,e),e);return n.classes.push("cd-vert-arrow"),n},mathmlBuilder(t,e){return new K.MathNode("mrow",[r2(t.fragment,e)])}});s1({type:"textord",names:["\\@char"],props:{numArgs:1,allowedInText:!0},handler(t,e){for(var{parser:n}=t,r=B1(e[0],"ordgroup"),i=r.body,a="",o=0;o<i.length;o++){var l=B1(i[o],"textord");a+=l.text}var Q=parseInt(a),s;if(isNaN(Q))throw new J("\\@char has non-numeric argument "+a);if(Q<0||Q>=1114111)throw new J("\\@char with invalid code point "+a);return Q<=65535?s=String.fromCharCode(Q):(Q-=65536,s=String.fromCharCode((Q>>10)+55296,(Q&1023)+56320)),{type:"textord",mode:n.mode,text:s}}});var ax=(t,e)=>{var n=N2(t.body,e.withColor(t.color),!1);return R.makeFragment(n)},ox=(t,e)=>{var n=x3(t.body,e.withColor(t.color)),r=new K.MathNode("mstyle",n);return r.setAttribute("mathcolor",t.color),r};s1({type:"color",names:["\\textcolor"],props:{numArgs:2,allowedInText:!0,argTypes:["color","original"]},handler(t,e){var{parser:n}=t,r=B1(e[0],"color-token").color,i=e[1];return{type:"color",mode:n.mode,color:r,body:S2(i)}},htmlBuilder:ax,mathmlBuilder:ox});s1({type:"color",names:["\\color"],props:{numArgs:1,allowedInText:!0,argTypes:["color"]},handler(t,e){var{parser:n,breakOnTokenText:r}=t,i=B1(e[0],"color-token").color;n.gullet.macros.set("\\current@color",i);var a=n.parseExpression(!0,r);return{type:"color",mode:n.mode,color:i,body:a}},htmlBuilder:ax,mathmlBuilder:ox});s1({type:"cr",names:["\\\\"],props:{numArgs:0,numOptionalArgs:0,allowedInText:!0},handler(t,e,n){var{parser:r}=t,i=r.gullet.future().text==="["?r.parseSizeGroup(!0):null,a=!r.settings.displayMode||!r.settings.useStrictBehavior("newLineInDisplayMode","In LaTeX, \\\\ or \\newline does nothing in display mode");return{type:"cr",mode:r.mode,newLine:a,size:i&&B1(i,"size").value}},htmlBuilder(t,e){var n=R.makeSpan(["mspace"],[],e);return t.newLine&&(n.classes.push("newline"),t.size&&(n.style.marginTop=n1(y2(t.size,e)))),n},mathmlBuilder(t,e){var n=new K.MathNode("mspace");return t.newLine&&(n.setAttribute("linebreak","newline"),t.size&&n.setAttribute("height",n1(y2(t.size,e)))),n}});var LQ={"\\global":"\\global","\\long":"\\\\globallong","\\\\globallong":"\\\\globallong","\\def":"\\gdef","\\gdef":"\\gdef","\\edef":"\\xdef","\\xdef":"\\xdef","\\let":"\\\\globallet","\\futurelet":"\\\\globalfuture"},lx=t=>{var e=t.text;if(/^(?:[\\{}$&#^_]|EOF)$/.test(e))throw new J("Expected a control sequence",t);return e},ZC=t=>{var e=t.gullet.popToken();return e.text==="="&&(e=t.gullet.popToken(),e.text===" "&&(e=t.gullet.popToken())),e},Qx=(t,e,n,r)=>{var i=t.gullet.macros.get(n.text);i==null&&(n.noexpand=!0,i={tokens:[n],numArgs:0,unexpandable:!t.gullet.isExpandable(n.text)}),t.gullet.macros.set(e,i,r)};s1({type:"internal",names:["\\global","\\long","\\\\globallong"],props:{numArgs:0,allowedInText:!0},handler(t){var{parser:e,funcName:n}=t;e.consumeSpaces();var r=e.fetch();if(LQ[r.text])return(n==="\\global"||n==="\\\\globallong")&&(r.text=LQ[r.text]),B1(e.parseFunction(),"internal");throw new J("Invalid token after macro prefix",r)}});s1({type:"internal",names:["\\def","\\gdef","\\edef","\\xdef"],props:{numArgs:0,allowedInText:!0,primitive:!0},handler(t){var{parser:e,funcName:n}=t,r=e.gullet.popToken(),i=r.text;if(/^(?:[\\{}$&#^_]|EOF)$/.test(i))throw new J("Expected a control sequence",r);for(var a=0,o,l=[[]];e.gullet.future().text!=="{";)if(r=e.gullet.popToken(),r.text==="#"){if(e.gullet.future().text==="{"){o=e.gullet.future(),l[a].push("{");break}if(r=e.gullet.popToken(),!/^[1-9]$/.test(r.text))throw new J('Invalid argument number "'+r.text+'"');if(parseInt(r.text)!==a+1)throw new J('Argument number "'+r.text+'" out of order');a++,l.push([])}else{if(r.text==="EOF")throw new J("Expected a macro definition");l[a].push(r.text)}var{tokens:Q}=e.gullet.consumeArg();return o&&Q.unshift(o),(n==="\\edef"||n==="\\xdef")&&(Q=e.gullet.expandTokens(Q),Q.reverse()),e.gullet.macros.set(i,{tokens:Q,numArgs:a,delimiters:l},n===LQ[n]),{type:"internal",mode:e.mode}}});s1({type:"internal",names:["\\let","\\\\globallet"],props:{numArgs:0,allowedInText:!0,primitive:!0},handler(t){var{parser:e,funcName:n}=t,r=lx(e.gullet.popToken());e.gullet.consumeSpaces();var i=ZC(e);return Qx(e,r,i,n==="\\\\globallet"),{type:"internal",mode:e.mode}}});s1({type:"internal",names:["\\futurelet","\\\\globalfuture"],props:{numArgs:0,allowedInText:!0,primitive:!0},handler(t){var{parser:e,funcName:n}=t,r=lx(e.gullet.popToken()),i=e.gullet.popToken(),a=e.gullet.popToken();return Qx(e,r,a,n==="\\\\globalfuture"),e.gullet.pushToken(a),e.gullet.pushToken(i),{type:"internal",mode:e.mode}}});var y0=function(e,n,r){var i=Q2.math[e]&&Q2.math[e].replace,a=du(i||e,n,r);if(!a)throw new Error("Unsupported symbol "+e+" and font size "+n+".");return a},Lu=function(e,n,r,i){var a=r.havingBaseStyle(n),o=R.makeSpan(i.concat(a.sizingClasses(r)),[e],r),l=a.sizeMultiplier/r.sizeMultiplier;return o.height*=l,o.depth*=l,o.maxFontSize=a.sizeMultiplier,o},sx=function(e,n,r){var i=n.havingBaseStyle(r),a=(1-n.sizeMultiplier/i.sizeMultiplier)*n.fontMetrics().axisHeight;e.classes.push("delimcenter"),e.style.top=n1(a),e.height-=a,e.depth+=a},GC=function(e,n,r,i,a,o){var l=R.makeSymbol(e,"Main-Regular",a,i),Q=Lu(l,n,i,o);return r&&sx(Q,i,n),Q},XC=function(e,n,r,i){return R.makeSymbol(e,"Size"+n+"-Regular",r,i)},ux=function(e,n,r,i,a,o){var l=XC(e,n,a,i),Q=Lu(R.makeSpan(["delimsizing","size"+n],[l],i),w1.TEXT,i,o);return r&&sx(Q,i,w1.TEXT),Q},Qo=function(e,n,r){var i;n==="Size1-Regular"?i="delim-size1":i="delim-size4";var a=R.makeSpan(["delimsizinginner",i],[R.makeSpan([],[R.makeSymbol(e,n,r)])]);return{type:"elem",elem:a}},so=function(e,n,r){var i=H4["Size4-Regular"][e.charCodeAt(0)]?H4["Size4-Regular"][e.charCodeAt(0)][4]:H4["Size1-Regular"][e.charCodeAt(0)][4],a=new U6("inner",tC(e,Math.round(1e3*n))),o=new s6([a],{width:n1(i),height:n1(n),style:"width:"+n1(i),viewBox:"0 0 "+1e3*i+" "+Math.round(1e3*n),preserveAspectRatio:"xMinYMin"}),l=R.makeSvgSpan([],[o],r);return l.height=n,l.style.height=n1(n),l.style.width=n1(i),{type:"elem",elem:l}},HQ=.008,Cn={type:"kern",size:-1*HQ},WC=["|","\\lvert","\\rvert","\\vert"],UC=["\\|","\\lVert","\\rVert","\\Vert"],Tx=function(e,n,r,i,a,o){var l,Q,s,u,T="",c=0;l=s=u=e,Q=null;var f="Size1-Regular";e==="\\uparrow"?s=u="⏐":e==="\\Uparrow"?s=u="‖":e==="\\downarrow"?l=s="⏐":e==="\\Downarrow"?l=s="‖":e==="\\updownarrow"?(l="\\uparrow",s="⏐",u="\\downarrow"):e==="\\Updownarrow"?(l="\\Uparrow",s="‖",u="\\Downarrow"):C1.contains(WC,e)?(s="∣",T="vert",c=333):C1.contains(UC,e)?(s="∥",T="doublevert",c=556):e==="["||e==="\\lbrack"?(l="⎡",s="⎢",u="⎣",f="Size4-Regular",T="lbrack",c=667):e==="]"||e==="\\rbrack"?(l="⎤",s="⎥",u="⎦",f="Size4-Regular",T="rbrack",c=667):e==="\\lfloor"||e==="⌊"?(s=l="⎢",u="⎣",f="Size4-Regular",T="lfloor",c=667):e==="\\lceil"||e==="⌈"?(l="⎡",s=u="⎢",f="Size4-Regular",T="lceil",c=667):e==="\\rfloor"||e==="⌋"?(s=l="⎥",u="⎦",f="Size4-Regular",T="rfloor",c=667):e==="\\rceil"||e==="⌉"?(l="⎤",s=u="⎥",f="Size4-Regular",T="rceil",c=667):e==="("||e==="\\lparen"?(l="⎛",s="⎜",u="⎝",f="Size4-Regular",T="lparen",c=875):e===")"||e==="\\rparen"?(l="⎞",s="⎟",u="⎠",f="Size4-Regular",T="rparen",c=875):e==="\\{"||e==="\\lbrace"?(l="⎧",Q="⎨",u="⎩",s="⎪",f="Size4-Regular"):e==="\\}"||e==="\\rbrace"?(l="⎫",Q="⎬",u="⎭",s="⎪",f="Size4-Regular"):e==="\\lgroup"||e==="⟮"?(l="⎧",u="⎩",s="⎪",f="Size4-Regular"):e==="\\rgroup"||e==="⟯"?(l="⎫",u="⎭",s="⎪",f="Size4-Regular"):e==="\\lmoustache"||e==="⎰"?(l="⎧",u="⎭",s="⎪",f="Size4-Regular"):(e==="\\rmoustache"||e==="⎱")&&(l="⎫",u="⎩",s="⎪",f="Size4-Regular");var h=y0(l,f,a),p=h.height+h.depth,v=y0(s,f,a),d=v.height+v.depth,m=y0(u,f,a),y=m.height+m.depth,x=0,L=1;if(Q!==null){var H=y0(Q,f,a);x=H.height+H.depth,L=2}var M=p+y+x,w=Math.max(0,Math.ceil((n-M)/(L*d))),S=M+w*L*d,D=i.fontMetrics().axisHeight;r&&(D*=i.sizeMultiplier);var E=S/2-D,$=[];if(T.length>0){var j=S-p-y,G=Math.round(S*1e3),X=eC(T,Math.round(j*1e3)),P=new U6(T,X),v1=(c/1e3).toFixed(3)+"em",q=(G/1e3).toFixed(3)+"em",o1=new s6([P],{width:v1,height:q,viewBox:"0 0 "+c+" "+G}),I=R.makeSvgSpan([],[o1],i);I.height=G/1e3,I.style.width=v1,I.style.height=q,$.push({type:"elem",elem:I})}else{if($.push(Qo(u,f,a)),$.push(Cn),Q===null){var C=S-p-y+2*HQ;$.push(so(s,C,i))}else{var O=(S-p-y-x)/2+2*HQ;$.push(so(s,O,i)),$.push(Cn),$.push(Qo(Q,f,a)),$.push(Cn),$.push(so(s,O,i))}$.push(Cn),$.push(Qo(l,f,a))}var i1=i.havingBaseStyle(w1.TEXT),d1=R.makeVList({positionType:"bottom",positionData:E,children:$},i1);return Lu(R.makeSpan(["delimsizing","mult"],[d1],i1),w1.TEXT,i,o)},uo=80,To=.08,co=function(e,n,r,i,a){var o=JV(e,i,r),l=new U6(e,o),Q=new s6([l],{width:"400em",height:n1(n),viewBox:"0 0 400000 "+r,preserveAspectRatio:"xMinYMin slice"});return R.makeSvgSpan(["hide-tail"],[Q],a)},KC=function(e,n){var r=n.havingBaseSizing(),i=dx("\\surd",e*r.sizeMultiplier,hx,r),a=r.sizeMultiplier,o=Math.max(0,n.minRuleThickness-n.fontMetrics().sqrtRuleThickness),l,Q=0,s=0,u=0,T;return i.type==="small"?(u=1e3+1e3*o+uo,e<1?a=1:e<1.4&&(a=.7),Q=(1+o+To)/a,s=(1+o)/a,l=co("sqrtMain",Q,u,o,n),l.style.minWidth="0.853em",T=.833/a):i.type==="large"?(u=(1e3+uo)*D0[i.size],s=(D0[i.size]+o)/a,Q=(D0[i.size]+o+To)/a,l=co("sqrtSize"+i.size,Q,u,o,n),l.style.minWidth="1.02em",T=1/a):(Q=e+o+To,s=e+o,u=Math.floor(1e3*e+o)+uo,l=co("sqrtTall",Q,u,o,n),l.style.minWidth="0.742em",T=1.056),l.height=s,l.style.height=n1(Q),{span:l,advanceWidth:T,ruleWidth:(n.fontMetrics().sqrtRuleThickness+o)*a}},cx=["(","\\lparen",")","\\rparen","[","\\lbrack","]","\\rbrack","\\{","\\lbrace","\\}","\\rbrace","\\lfloor","\\rfloor","⌊","⌋","\\lceil","\\rceil","⌈","⌉","\\surd"],YC=["\\uparrow","\\downarrow","\\updownarrow","\\Uparrow","\\Downarrow","\\Updownarrow","|","\\|","\\vert","\\Vert","\\lvert","\\rvert","\\lVert","\\rVert","\\lgroup","\\rgroup","⟮","⟯","\\lmoustache","\\rmoustache","⎰","⎱"],fx=["<",">","\\langle","\\rangle","/","\\backslash","\\lt","\\gt"],D0=[0,1.2,1.8,2.4,3],JC=function(e,n,r,i,a){if(e==="<"||e==="\\lt"||e==="⟨"?e="\\langle":(e===">"||e==="\\gt"||e==="⟩")&&(e="\\rangle"),C1.contains(cx,e)||C1.contains(fx,e))return ux(e,n,!1,r,i,a);if(C1.contains(YC,e))return Tx(e,D0[n],!1,r,i,a);throw new J("Illegal delimiter: '"+e+"'")},tE=[{type:"small",style:w1.SCRIPTSCRIPT},{type:"small",style:w1.SCRIPT},{type:"small",style:w1.TEXT},{type:"large",size:1},{type:"large",size:2},{type:"large",size:3},{type:"large",size:4}],eE=[{type:"small",style:w1.SCRIPTSCRIPT},{type:"small",style:w1.SCRIPT},{type:"small",style:w1.TEXT},{type:"stack"}],hx=[{type:"small",style:w1.SCRIPTSCRIPT},{type:"small",style:w1.SCRIPT},{type:"small",style:w1.TEXT},{type:"large",size:1},{type:"large",size:2},{type:"large",size:3},{type:"large",size:4},{type:"stack"}],nE=function(e){if(e.type==="small")return"Main-Regular";if(e.type==="large")return"Size"+e.size+"-Regular";if(e.type==="stack")return"Size4-Regular";throw new Error("Add support for delim type '"+e.type+"' here.")},dx=function(e,n,r,i){for(var a=Math.min(2,3-i.style.size),o=a;o<r.length&&r[o].type!=="stack";o++){var l=y0(e,nE(r[o]),"math"),Q=l.height+l.depth;if(r[o].type==="small"){var s=i.havingBaseStyle(r[o].style);Q*=s.sizeMultiplier}if(Q>n)return r[o]}return r[r.length-1]},px=function(e,n,r,i,a,o){e==="<"||e==="\\lt"||e==="⟨"?e="\\langle":(e===">"||e==="\\gt"||e==="⟩")&&(e="\\rangle");var l;C1.contains(fx,e)?l=tE:C1.contains(cx,e)?l=hx:l=eE;var Q=dx(e,n,l,i);return Q.type==="small"?GC(e,Q.style,r,i,a,o):Q.type==="large"?ux(e,Q.size,r,i,a,o):Tx(e,n,r,i,a,o)},rE=function(e,n,r,i,a,o){var l=i.fontMetrics().axisHeight*i.sizeMultiplier,Q=901,s=5/i.fontMetrics().ptPerEm,u=Math.max(n-l,r+l),T=Math.max(u/500*Q,2*u-s);return px(e,T,!0,i,a,o)},J4={sqrtImage:KC,sizedDelim:JC,sizeToMaxHeight:D0,customSizedDelim:px,leftRightDelim:rE},th={"\\bigl":{mclass:"mopen",size:1},"\\Bigl":{mclass:"mopen",size:2},"\\biggl":{mclass:"mopen",size:3},"\\Biggl":{mclass:"mopen",size:4},"\\bigr":{mclass:"mclose",size:1},"\\Bigr":{mclass:"mclose",size:2},"\\biggr":{mclass:"mclose",size:3},"\\Biggr":{mclass:"mclose",size:4},"\\bigm":{mclass:"mrel",size:1},"\\Bigm":{mclass:"mrel",size:2},"\\biggm":{mclass:"mrel",size:3},"\\Biggm":{mclass:"mrel",size:4},"\\big":{mclass:"mord",size:1},"\\Big":{mclass:"mord",size:2},"\\bigg":{mclass:"mord",size:3},"\\Bigg":{mclass:"mord",size:4}},iE=["(","\\lparen",")","\\rparen","[","\\lbrack","]","\\rbrack","\\{","\\lbrace","\\}","\\rbrace","\\lfloor","\\rfloor","⌊","⌋","\\lceil","\\rceil","⌈","⌉","<",">","\\langle","⟨","\\rangle","⟩","\\lt","\\gt","\\lvert","\\rvert","\\lVert","\\rVert","\\lgroup","\\rgroup","⟮","⟯","\\lmoustache","\\rmoustache","⎰","⎱","/","\\backslash","|","\\vert","\\|","\\Vert","\\uparrow","\\Uparrow","\\downarrow","\\Downarrow","\\updownarrow","\\Updownarrow","."];function Q9(t,e){var n=o9(t);if(n&&C1.contains(iE,n.text))return n;throw n?new J("Invalid delimiter '"+n.text+"' after '"+e.funcName+"'",t):new J("Invalid delimiter type '"+t.type+"'",t)}s1({type:"delimsizing",names:["\\bigl","\\Bigl","\\biggl","\\Biggl","\\bigr","\\Bigr","\\biggr","\\Biggr","\\bigm","\\Bigm","\\biggm","\\Biggm","\\big","\\Big","\\bigg","\\Bigg"],props:{numArgs:1,argTypes:["primitive"]},handler:(t,e)=>{var n=Q9(e[0],t);return{type:"delimsizing",mode:t.parser.mode,size:th[t.funcName].size,mclass:th[t.funcName].mclass,delim:n.text}},htmlBuilder:(t,e)=>t.delim==="."?R.makeSpan([t.mclass]):J4.sizedDelim(t.delim,t.size,e,t.mode,[t.mclass]),mathmlBuilder:t=>{var e=[];t.delim!=="."&&e.push(Z3(t.delim,t.mode));var n=new K.MathNode("mo",e);t.mclass==="mopen"||t.mclass==="mclose"?n.setAttribute("fence","true"):n.setAttribute("fence","false"),n.setAttribute("stretchy","true");var r=n1(J4.sizeToMaxHeight[t.size]);return n.setAttribute("minsize",r),n.setAttribute("maxsize",r),n}});function eh(t){if(!t.body)throw new Error("Bug: The leftright ParseNode wasn't fully parsed.")}s1({type:"leftright-right",names:["\\right"],props:{numArgs:1,primitive:!0},handler:(t,e)=>{var n=t.parser.gullet.macros.get("\\current@color");if(n&&typeof n!="string")throw new J("\\current@color set to non-string in \\right");return{type:"leftright-right",mode:t.parser.mode,delim:Q9(e[0],t).text,color:n}}});s1({type:"leftright",names:["\\left"],props:{numArgs:1,primitive:!0},handler:(t,e)=>{var n=Q9(e[0],t),r=t.parser;++r.leftrightDepth;var i=r.parseExpression(!1);--r.leftrightDepth,r.expect("\\right",!1);var a=B1(r.parseFunction(),"leftright-right");return{type:"leftright",mode:r.mode,body:i,left:n.text,right:a.delim,rightColor:a.color}},htmlBuilder:(t,e)=>{eh(t);for(var n=N2(t.body,e,!0,["mopen","mclose"]),r=0,i=0,a=!1,o=0;o<n.length;o++)n[o].isMiddle?a=!0:(r=Math.max(n[o].height,r),i=Math.max(n[o].depth,i));r*=e.sizeMultiplier,i*=e.sizeMultiplier;var l;if(t.left==="."?l=t7(e,["mopen"]):l=J4.leftRightDelim(t.left,r,i,e,t.mode,["mopen"]),n.unshift(l),a)for(var Q=1;Q<n.length;Q++){var s=n[Q],u=s.isMiddle;u&&(n[Q]=J4.leftRightDelim(u.delim,r,i,u.options,t.mode,[]))}var T;if(t.right===".")T=t7(e,["mclose"]);else{var c=t.rightColor?e.withColor(t.rightColor):e;T=J4.leftRightDelim(t.right,r,i,c,t.mode,["mclose"])}return n.push(T),R.makeSpan(["minner"],n,e)},mathmlBuilder:(t,e)=>{eh(t);var n=x3(t.body,e);if(t.left!=="."){var r=new K.MathNode("mo",[Z3(t.left,t.mode)]);r.setAttribute("fence","true"),n.unshift(r)}if(t.right!=="."){var i=new K.MathNode("mo",[Z3(t.right,t.mode)]);i.setAttribute("fence","true"),t.rightColor&&i.setAttribute("mathcolor",t.rightColor),n.push(i)}return vu(n)}});s1({type:"middle",names:["\\middle"],props:{numArgs:1,primitive:!0},handler:(t,e)=>{var n=Q9(e[0],t);if(!t.parser.leftrightDepth)throw new J("\\middle without preceding \\left",n);return{type:"middle",mode:t.parser.mode,delim:n.text}},htmlBuilder:(t,e)=>{var n;if(t.delim===".")n=t7(e,[]);else{n=J4.sizedDelim(t.delim,1,e,t.mode,[]);var r={delim:t.delim,options:e};n.isMiddle=r}return n},mathmlBuilder:(t,e)=>{var n=t.delim==="\\vert"||t.delim==="|"?Z3("|","text"):Z3(t.delim,t.mode),r=new K.MathNode("mo",[n]);return r.setAttribute("fence","true"),r.setAttribute("lspace","0.05em"),r.setAttribute("rspace","0.05em"),r}});var Hu=(t,e)=>{var n=R.wrapFragment(q1(t.body,e),e),r=t.label.slice(1),i=e.sizeMultiplier,a,o=0,l=C1.isCharacterBox(t.body);if(r==="sout")a=R.makeSpan(["stretchy","sout"]),a.height=e.fontMetrics().defaultRuleThickness/i,o=-.5*e.fontMetrics().xHeight;else if(r==="phase"){var Q=y2({number:.6,unit:"pt"},e),s=y2({number:.35,unit:"ex"},e),u=e.havingBaseSizing();i=i/u.sizeMultiplier;var T=n.height+n.depth+Q+s;n.style.paddingLeft=n1(T/2+Q);var c=Math.floor(1e3*T*i),f=KV(c),h=new s6([new U6("phase",f)],{width:"400em",height:n1(c/1e3),viewBox:"0 0 400000 "+c,preserveAspectRatio:"xMinYMin slice"});a=R.makeSvgSpan(["hide-tail"],[h],e),a.style.height=n1(T),o=n.depth+Q+s}else{/cancel/.test(r)?l||n.classes.push("cancel-pad"):r==="angl"?n.classes.push("anglpad"):n.classes.push("boxpad");var p=0,v=0,d=0;/box/.test(r)?(d=Math.max(e.fontMetrics().fboxrule,e.minRuleThickness),p=e.fontMetrics().fboxsep+(r==="colorbox"?0:d),v=p):r==="angl"?(d=Math.max(e.fontMetrics().defaultRuleThickness,e.minRuleThickness),p=4*d,v=Math.max(0,.25-n.depth)):(p=l?.2:0,v=p),a=T6.encloseSpan(n,r,p,v,e),/fbox|boxed|fcolorbox/.test(r)?(a.style.borderStyle="solid",a.style.borderWidth=n1(d)):r==="angl"&&d!==.049&&(a.style.borderTopWidth=n1(d),a.style.borderRightWidth=n1(d)),o=n.depth+v,t.backgroundColor&&(a.style.backgroundColor=t.backgroundColor,t.borderColor&&(a.style.borderColor=t.borderColor))}var m;if(t.backgroundColor)m=R.makeVList({positionType:"individualShift",children:[{type:"elem",elem:a,shift:o},{type:"elem",elem:n,shift:0}]},e);else{var y=/cancel|phase/.test(r)?["svg-align"]:[];m=R.makeVList({positionType:"individualShift",children:[{type:"elem",elem:n,shift:0},{type:"elem",elem:a,shift:o,wrapperClasses:y}]},e)}return/cancel/.test(r)&&(m.height=n.height,m.depth=n.depth),/cancel/.test(r)&&!l?R.makeSpan(["mord","cancel-lap"],[m],e):R.makeSpan(["mord"],[m],e)},bu=(t,e)=>{var n=0,r=new K.MathNode(t.label.indexOf("colorbox")>-1?"mpadded":"menclose",[r2(t.body,e)]);switch(t.label){case"\\cancel":r.setAttribute("notation","updiagonalstrike");break;case"\\bcancel":r.setAttribute("notation","downdiagonalstrike");break;case"\\phase":r.setAttribute("notation","phasorangle");break;case"\\sout":r.setAttribute("notation","horizontalstrike");break;case"\\fbox":r.setAttribute("notation","box");break;case"\\angl":r.setAttribute("notation","actuarial");break;case"\\fcolorbox":case"\\colorbox":if(n=e.fontMetrics().fboxsep*e.fontMetrics().ptPerEm,r.setAttribute("width","+"+2*n+"pt"),r.setAttribute("height","+"+2*n+"pt"),r.setAttribute("lspace",n+"pt"),r.setAttribute("voffset",n+"pt"),t.label==="\\fcolorbox"){var i=Math.max(e.fontMetrics().fboxrule,e.minRuleThickness);r.setAttribute("style","border: "+i+"em solid "+String(t.borderColor))}break;case"\\xcancel":r.setAttribute("notation","updiagonalstrike downdiagonalstrike");break}return t.backgroundColor&&r.setAttribute("mathbackground",t.backgroundColor),r};s1({type:"enclose",names:["\\colorbox"],props:{numArgs:2,allowedInText:!0,argTypes:["color","text"]},handler(t,e,n){var{parser:r,funcName:i}=t,a=B1(e[0],"color-token").color,o=e[1];return{type:"enclose",mode:r.mode,label:i,backgroundColor:a,body:o}},htmlBuilder:Hu,mathmlBuilder:bu});s1({type:"enclose",names:["\\fcolorbox"],props:{numArgs:3,allowedInText:!0,argTypes:["color","color","text"]},handler(t,e,n){var{parser:r,funcName:i}=t,a=B1(e[0],"color-token").color,o=B1(e[1],"color-token").color,l=e[2];return{type:"enclose",mode:r.mode,label:i,backgroundColor:o,borderColor:a,body:l}},htmlBuilder:Hu,mathmlBuilder:bu});s1({type:"enclose",names:["\\fbox"],props:{numArgs:1,argTypes:["hbox"],allowedInText:!0},handler(t,e){var{parser:n}=t;return{type:"enclose",mode:n.mode,label:"\\fbox",body:e[0]}}});s1({type:"enclose",names:["\\cancel","\\bcancel","\\xcancel","\\sout","\\phase"],props:{numArgs:1},handler(t,e){var{parser:n,funcName:r}=t,i=e[0];return{type:"enclose",mode:n.mode,label:r,body:i}},htmlBuilder:Hu,mathmlBuilder:bu});s1({type:"enclose",names:["\\angl"],props:{numArgs:1,argTypes:["hbox"],allowedInText:!1},handler(t,e){var{parser:n}=t;return{type:"enclose",mode:n.mode,label:"\\angl",body:e[0]}}});var mx={};function C4(t){for(var{type:e,names:n,props:r,handler:i,htmlBuilder:a,mathmlBuilder:o}=t,l={type:e,numArgs:r.numArgs||0,allowedInText:!1,numOptionalArgs:0,handler:i},Q=0;Q<n.length;++Q)mx[n[Q]]=l;a&&(Yr[e]=a),o&&(Jr[e]=o)}var vx={};function V(t,e){vx[t]=e}function nh(t){var e=[];t.consumeSpaces();var n=t.fetch().text;for(n==="\\relax"&&(t.consume(),t.consumeSpaces(),n=t.fetch().text);n==="\\hline"||n==="\\hdashline";)t.consume(),e.push(n==="\\hdashline"),t.consumeSpaces(),n=t.fetch().text;return e}var s9=t=>{var e=t.parser.settings;if(!e.displayMode)throw new J("{"+t.envName+"} can be used only in display mode.")};function Mu(t){if(t.indexOf("ed")===-1)return t.indexOf("*")===-1}function a5(t,e,n){var{hskipBeforeAndAfter:r,addJot:i,cols:a,arraystretch:o,colSeparationType:l,autoTag:Q,singleRow:s,emptySingleRow:u,maxNumCols:T,leqno:c}=e;if(t.gullet.beginGroup(),s||t.gullet.macros.set("\\cr","\\\\\\relax"),!o){var f=t.gullet.expandMacroAsText("\\arraystretch");if(f==null)o=1;else if(o=parseFloat(f),!o||o<0)throw new J("Invalid \\arraystretch: "+f)}t.gullet.beginGroup();var h=[],p=[h],v=[],d=[],m=Q!=null?[]:void 0;function y(){Q&&t.gullet.macros.set("\\@eqnsw","1",!0)}function x(){m&&(t.gullet.macros.get("\\df@tag")?(m.push(t.subparse([new w4("\\df@tag")])),t.gullet.macros.set("\\df@tag",void 0,!0)):m.push(!!Q&&t.gullet.macros.get("\\@eqnsw")==="1"))}for(y(),d.push(nh(t));;){var L=t.parseExpression(!1,s?"\\end":"\\\\");t.gullet.endGroup(),t.gullet.beginGroup(),L={type:"ordgroup",mode:t.mode,body:L},n&&(L={type:"styling",mode:t.mode,style:n,body:[L]}),h.push(L);var H=t.fetch().text;if(H==="&"){if(T&&h.length===T){if(s||l)throw new J("Too many tab characters: &",t.nextToken);t.settings.reportNonstrict("textEnv","Too few columns specified in the {array} column argument.")}t.consume()}else if(H==="\\end"){x(),h.length===1&&L.type==="styling"&&L.body[0].body.length===0&&(p.length>1||!u)&&p.pop(),d.length<p.length+1&&d.push([]);break}else if(H==="\\\\"){t.consume();var M=void 0;t.gullet.future().text!==" "&&(M=t.parseSizeGroup(!0)),v.push(M?M.value:null),x(),d.push(nh(t)),h=[],p.push(h),y()}else throw new J("Expected & or \\\\ or \\cr or \\end",t.nextToken)}return t.gullet.endGroup(),t.gullet.endGroup(),{type:"array",mode:t.mode,addJot:i,arraystretch:o,body:p,cols:a,rowGaps:v,hskipBeforeAndAfter:r,hLinesBeforeRow:d,colSeparationType:l,tags:m,leqno:c}}function _u(t){return t.slice(0,1)==="d"?"display":"text"}var E4=function(e,n){var r,i,a=e.body.length,o=e.hLinesBeforeRow,l=0,Q=new Array(a),s=[],u=Math.max(n.fontMetrics().arrayRuleWidth,n.minRuleThickness),T=1/n.fontMetrics().ptPerEm,c=5*T;if(e.colSeparationType&&e.colSeparationType==="small"){var f=n.havingStyle(w1.SCRIPT).sizeMultiplier;c=.2778*(f/n.sizeMultiplier)}var h=e.colSeparationType==="CD"?y2({number:3,unit:"ex"},n):12*T,p=3*T,v=e.arraystretch*h,d=.7*v,m=.3*v,y=0;function x(X1){for(var W2=0;W2<X1.length;++W2)W2>0&&(y+=.25),s.push({pos:y,isDashed:X1[W2]})}for(x(o[0]),r=0;r<e.body.length;++r){var L=e.body[r],H=d,M=m;l<L.length&&(l=L.length);var w=new Array(L.length);for(i=0;i<L.length;++i){var S=q1(L[i],n);M<S.depth&&(M=S.depth),H<S.height&&(H=S.height),w[i]=S}var D=e.rowGaps[r],E=0;D&&(E=y2(D,n),E>0&&(E+=m,M<E&&(M=E),E=0)),e.addJot&&(M+=p),w.height=H,w.depth=M,y+=H,w.pos=y,y+=M+E,Q[r]=w,x(o[r+1])}var $=y/2+n.fontMetrics().axisHeight,j=e.cols||[],G=[],X,P,v1=[];if(e.tags&&e.tags.some(X1=>X1))for(r=0;r<a;++r){var q=Q[r],o1=q.pos-$,I=e.tags[r],C=void 0;I===!0?C=R.makeSpan(["eqn-num"],[],n):I===!1?C=R.makeSpan([],[],n):C=R.makeSpan([],N2(I,n,!0),n),C.depth=q.depth,C.height=q.height,v1.push({type:"elem",elem:C,shift:o1})}for(i=0,P=0;i<l||P<j.length;++i,++P){for(var O=j[P]||{},i1=!0;O.type==="separator";){if(i1||(X=R.makeSpan(["arraycolsep"],[]),X.style.width=n1(n.fontMetrics().doubleRuleSep),G.push(X)),O.separator==="|"||O.separator===":"){var d1=O.separator==="|"?"solid":"dashed",g1=R.makeSpan(["vertical-separator"],[],n);g1.style.height=n1(y),g1.style.borderRightWidth=n1(u),g1.style.borderRightStyle=d1,g1.style.margin="0 "+n1(-u/2);var l1=y-$;l1&&(g1.style.verticalAlign=n1(-l1)),G.push(g1)}else throw new J("Invalid separator type: "+O.separator);P++,O=j[P]||{},i1=!1}if(!(i>=l)){var F=void 0;(i>0||e.hskipBeforeAndAfter)&&(F=C1.deflt(O.pregap,c),F!==0&&(X=R.makeSpan(["arraycolsep"],[]),X.style.width=n1(F),G.push(X)));var z=[];for(r=0;r<a;++r){var Q1=Q[r],f1=Q1[i];if(f1){var T1=Q1.pos-$;f1.depth=Q1.depth,f1.height=Q1.height,z.push({type:"elem",elem:f1,shift:T1})}}z=R.makeVList({positionType:"individualShift",children:z},n),z=R.makeSpan(["col-align-"+(O.align||"c")],[z]),G.push(z),(i<l-1||e.hskipBeforeAndAfter)&&(F=C1.deflt(O.postgap,c),F!==0&&(X=R.makeSpan(["arraycolsep"],[]),X.style.width=n1(F),G.push(X)))}}if(Q=R.makeSpan(["mtable"],G),s.length>0){for(var A1=R.makeLineSpan("hline",n,u),p1=R.makeLineSpan("hdashline",n,u),m1=[{type:"elem",elem:Q,shift:0}];s.length>0;){var H1=s.pop(),R1=H1.pos-$;H1.isDashed?m1.push({type:"elem",elem:p1,shift:R1}):m1.push({type:"elem",elem:A1,shift:R1})}Q=R.makeVList({positionType:"individualShift",children:m1},n)}if(v1.length===0)return R.makeSpan(["mord"],[Q],n);var M2=R.makeVList({positionType:"individualShift",children:v1},n);return M2=R.makeSpan(["tag"],[M2],n),R.makeFragment([Q,M2])},aE={c:"center ",l:"left ",r:"right "},D4=function(e,n){for(var r=[],i=new K.MathNode("mtd",[],["mtr-glue"]),a=new K.MathNode("mtd",[],["mml-eqn-num"]),o=0;o<e.body.length;o++){for(var l=e.body[o],Q=[],s=0;s<l.length;s++)Q.push(new K.MathNode("mtd",[r2(l[s],n)]));e.tags&&e.tags[o]&&(Q.unshift(i),Q.push(i),e.leqno?Q.unshift(a):Q.push(a)),r.push(new K.MathNode("mtr",Q))}var u=new K.MathNode("mtable",r),T=e.arraystretch===.5?.1:.16+e.arraystretch-1+(e.addJot?.09:0);u.setAttribute("rowspacing",n1(T));var c="",f="";if(e.cols&&e.cols.length>0){var h=e.cols,p="",v=!1,d=0,m=h.length;h[0].type==="separator"&&(c+="top ",d=1),h[h.length-1].type==="separator"&&(c+="bottom ",m-=1);for(var y=d;y<m;y++)h[y].type==="align"?(f+=aE[h[y].align],v&&(p+="none "),v=!0):h[y].type==="separator"&&v&&(p+=h[y].separator==="|"?"solid ":"dashed ",v=!1);u.setAttribute("columnalign",f.trim()),/[sd]/.test(p)&&u.setAttribute("columnlines",p.trim())}if(e.colSeparationType==="align"){for(var x=e.cols||[],L="",H=1;H<x.length;H++)L+=H%2?"0em ":"1em ";u.setAttribute("columnspacing",L.trim())}else e.colSeparationType==="alignat"||e.colSeparationType==="gather"?u.setAttribute("columnspacing","0em"):e.colSeparationType==="small"?u.setAttribute("columnspacing","0.2778em"):e.colSeparationType==="CD"?u.setAttribute("columnspacing","0.5em"):u.setAttribute("columnspacing","1em");var M="",w=e.hLinesBeforeRow;c+=w[0].length>0?"left ":"",c+=w[w.length-1].length>0?"right ":"";for(var S=1;S<w.length-1;S++)M+=w[S].length===0?"none ":w[S][0]?"dashed ":"solid ";return/[sd]/.test(M)&&u.setAttribute("rowlines",M.trim()),c!==""&&(u=new K.MathNode("menclose",[u]),u.setAttribute("notation",c.trim())),e.arraystretch&&e.arraystretch<1&&(u=new K.MathNode("mstyle",[u]),u.setAttribute("scriptlevel","1")),u},yx=function(e,n){e.envName.indexOf("ed")===-1&&s9(e);var r=[],i=e.envName.indexOf("at")>-1?"alignat":"align",a=e.envName==="split",o=a5(e.parser,{cols:r,addJot:!0,autoTag:a?void 0:Mu(e.envName),emptySingleRow:!0,colSeparationType:i,maxNumCols:a?2:void 0,leqno:e.parser.settings.leqno},"display"),l,Q=0,s={type:"ordgroup",mode:e.mode,body:[]};if(n[0]&&n[0].type==="ordgroup"){for(var u="",T=0;T<n[0].body.length;T++){var c=B1(n[0].body[T],"textord");u+=c.text}l=Number(u),Q=l*2}var f=!Q;o.body.forEach(function(d){for(var m=1;m<d.length;m+=2){var y=B1(d[m],"styling"),x=B1(y.body[0],"ordgroup");x.body.unshift(s)}if(f)Q<d.length&&(Q=d.length);else{var L=d.length/2;if(l<L)throw new J("Too many math in a row: "+("expected "+l+", but got "+L),d[0])}});for(var h=0;h<Q;++h){var p="r",v=0;h%2===1?p="l":h>0&&f&&(v=1),r[h]={type:"align",align:p,pregap:v,postgap:0}}return o.colSeparationType=f?"align":"alignat",o};C4({type:"array",names:["array","darray"],props:{numArgs:1},handler(t,e){var n=o9(e[0]),r=n?[e[0]]:B1(e[0],"ordgroup").body,i=r.map(function(o){var l=gu(o),Q=l.text;if("lcr".indexOf(Q)!==-1)return{type:"align",align:Q};if(Q==="|")return{type:"separator",separator:"|"};if(Q===":")return{type:"separator",separator:":"};throw new J("Unknown column alignment: "+Q,o)}),a={cols:i,hskipBeforeAndAfter:!0,maxNumCols:i.length};return a5(t.parser,a,_u(t.envName))},htmlBuilder:E4,mathmlBuilder:D4});C4({type:"array",names:["matrix","pmatrix","bmatrix","Bmatrix","vmatrix","Vmatrix","matrix*","pmatrix*","bmatrix*","Bmatrix*","vmatrix*","Vmatrix*"],props:{numArgs:0},handler(t){var e={matrix:null,pmatrix:["(",")"],bmatrix:["[","]"],Bmatrix:["\\{","\\}"],vmatrix:["|","|"],Vmatrix:["\\Vert","\\Vert"]}[t.envName.replace("*","")],n="c",r={hskipBeforeAndAfter:!1,cols:[{type:"align",align:n}]};if(t.envName.charAt(t.envName.length-1)==="*"){var i=t.parser;if(i.consumeSpaces(),i.fetch().text==="["){if(i.consume(),i.consumeSpaces(),n=i.fetch().text,"lcr".indexOf(n)===-1)throw new J("Expected l or c or r",i.nextToken);i.consume(),i.consumeSpaces(),i.expect("]"),i.consume(),r.cols=[{type:"align",align:n}]}}var a=a5(t.parser,r,_u(t.envName)),o=Math.max(0,...a.body.map(l=>l.length));return a.cols=new Array(o).fill({type:"align",align:n}),e?{type:"leftright",mode:t.mode,body:[a],left:e[0],right:e[1],rightColor:void 0}:a},htmlBuilder:E4,mathmlBuilder:D4});C4({type:"array",names:["smallmatrix"],props:{numArgs:0},handler(t){var e={arraystretch:.5},n=a5(t.parser,e,"script");return n.colSeparationType="small",n},htmlBuilder:E4,mathmlBuilder:D4});C4({type:"array",names:["subarray"],props:{numArgs:1},handler(t,e){var n=o9(e[0]),r=n?[e[0]]:B1(e[0],"ordgroup").body,i=r.map(function(o){var l=gu(o),Q=l.text;if("lc".indexOf(Q)!==-1)return{type:"align",align:Q};throw new J("Unknown column alignment: "+Q,o)});if(i.length>1)throw new J("{subarray} can contain only one column");var a={cols:i,hskipBeforeAndAfter:!1,arraystretch:.5};if(a=a5(t.parser,a,"script"),a.body.length>0&&a.body[0].length>1)throw new J("{subarray} can contain only one column");return a},htmlBuilder:E4,mathmlBuilder:D4});C4({type:"array",names:["cases","dcases","rcases","drcases"],props:{numArgs:0},handler(t){var e={arraystretch:1.2,cols:[{type:"align",align:"l",pregap:0,postgap:1},{type:"align",align:"l",pregap:0,postgap:0}]},n=a5(t.parser,e,_u(t.envName));return{type:"leftright",mode:t.mode,body:[n],left:t.envName.indexOf("r")>-1?".":"\\{",right:t.envName.indexOf("r")>-1?"\\}":".",rightColor:void 0}},htmlBuilder:E4,mathmlBuilder:D4});C4({type:"array",names:["align","align*","aligned","split"],props:{numArgs:0},handler:yx,htmlBuilder:E4,mathmlBuilder:D4});C4({type:"array",names:["gathered","gather","gather*"],props:{numArgs:0},handler(t){C1.contains(["gather","gather*"],t.envName)&&s9(t);var e={cols:[{type:"align",align:"c"}],addJot:!0,colSeparationType:"gather",autoTag:Mu(t.envName),emptySingleRow:!0,leqno:t.parser.settings.leqno};return a5(t.parser,e,"display")},htmlBuilder:E4,mathmlBuilder:D4});C4({type:"array",names:["alignat","alignat*","alignedat"],props:{numArgs:1},handler:yx,htmlBuilder:E4,mathmlBuilder:D4});C4({type:"array",names:["equation","equation*"],props:{numArgs:0},handler(t){s9(t);var e={autoTag:Mu(t.envName),emptySingleRow:!0,singleRow:!0,maxNumCols:1,leqno:t.parser.settings.leqno};return a5(t.parser,e,"display")},htmlBuilder:E4,mathmlBuilder:D4});C4({type:"array",names:["CD"],props:{numArgs:0},handler(t){return s9(t),qC(t.parser)},htmlBuilder:E4,mathmlBuilder:D4});V("\\nonumber","\\gdef\\@eqnsw{0}");V("\\notag","\\nonumber");s1({type:"text",names:["\\hline","\\hdashline"],props:{numArgs:0,allowedInText:!0,allowedInMath:!0},handler(t,e){throw new J(t.funcName+" valid only within array environment")}});var rh=mx;s1({type:"environment",names:["\\begin","\\end"],props:{numArgs:1,argTypes:["text"]},handler(t,e){var{parser:n,funcName:r}=t,i=e[0];if(i.type!=="ordgroup")throw new J("Invalid environment name",i);for(var a="",o=0;o<i.body.length;++o)a+=B1(i.body[o],"textord").text;if(r==="\\begin"){if(!rh.hasOwnProperty(a))throw new J("No such environment: "+a,i);var l=rh[a],{args:Q,optArgs:s}=n.parseArguments("\\begin{"+a+"}",l),u={mode:n.mode,envName:a,parser:n},T=l.handler(u,Q,s);n.expect("\\end",!1);var c=n.nextToken,f=B1(n.parseFunction(),"environment");if(f.name!==a)throw new J("Mismatch: \\begin{"+a+"} matched by \\end{"+f.name+"}",c);return T}return{type:"environment",mode:n.mode,name:a,nameGroup:i}}});var gx=(t,e)=>{var n=t.font,r=e.withFont(n);return q1(t.body,r)},xx=(t,e)=>{var n=t.font,r=e.withFont(n);return r2(t.body,r)},ih={"\\Bbb":"\\mathbb","\\bold":"\\mathbf","\\frak":"\\mathfrak","\\bm":"\\boldsymbol"};s1({type:"font",names:["\\mathrm","\\mathit","\\mathbf","\\mathnormal","\\mathbb","\\mathcal","\\mathfrak","\\mathscr","\\mathsf","\\mathtt","\\Bbb","\\bold","\\frak"],props:{numArgs:1,allowedInArgument:!0},handler:(t,e)=>{var{parser:n,funcName:r}=t,i=t8(e[0]),a=r;return a in ih&&(a=ih[a]),{type:"font",mode:n.mode,font:a.slice(1),body:i}},htmlBuilder:gx,mathmlBuilder:xx});s1({type:"mclass",names:["\\boldsymbol","\\bm"],props:{numArgs:1},handler:(t,e)=>{var{parser:n}=t,r=e[0],i=C1.isCharacterBox(r);return{type:"mclass",mode:n.mode,mclass:l9(r),body:[{type:"font",mode:n.mode,font:"boldsymbol",body:r}],isCharacterBox:i}}});s1({type:"font",names:["\\rm","\\sf","\\tt","\\bf","\\it","\\cal"],props:{numArgs:0,allowedInText:!0},handler:(t,e)=>{var{parser:n,funcName:r,breakOnTokenText:i}=t,{mode:a}=n,o=n.parseExpression(!0,i),l="math"+r.slice(1);return{type:"font",mode:a,font:l,body:{type:"ordgroup",mode:n.mode,body:o}}},htmlBuilder:gx,mathmlBuilder:xx});var Lx=(t,e)=>{var n=e;return t==="display"?n=n.id>=w1.SCRIPT.id?n.text():w1.DISPLAY:t==="text"&&n.size===w1.DISPLAY.size?n=w1.TEXT:t==="script"?n=w1.SCRIPT:t==="scriptscript"&&(n=w1.SCRIPTSCRIPT),n},wu=(t,e)=>{var n=Lx(t.size,e.style),r=n.fracNum(),i=n.fracDen(),a;a=e.havingStyle(r);var o=q1(t.numer,a,e);if(t.continued){var l=8.5/e.fontMetrics().ptPerEm,Q=3.5/e.fontMetrics().ptPerEm;o.height=o.height<l?l:o.height,o.depth=o.depth<Q?Q:o.depth}a=e.havingStyle(i);var s=q1(t.denom,a,e),u,T,c;t.hasBarLine?(t.barSize?(T=y2(t.barSize,e),u=R.makeLineSpan("frac-line",e,T)):u=R.makeLineSpan("frac-line",e),T=u.height,c=u.height):(u=null,T=0,c=e.fontMetrics().defaultRuleThickness);var f,h,p;n.size===w1.DISPLAY.size||t.size==="display"?(f=e.fontMetrics().num1,T>0?h=3*c:h=7*c,p=e.fontMetrics().denom1):(T>0?(f=e.fontMetrics().num2,h=c):(f=e.fontMetrics().num3,h=3*c),p=e.fontMetrics().denom2);var v;if(u){var m=e.fontMetrics().axisHeight;f-o.depth-(m+.5*T)<h&&(f+=h-(f-o.depth-(m+.5*T))),m-.5*T-(s.height-p)<h&&(p+=h-(m-.5*T-(s.height-p)));var y=-(m-.5*T);v=R.makeVList({positionType:"individualShift",children:[{type:"elem",elem:s,shift:p},{type:"elem",elem:u,shift:y},{type:"elem",elem:o,shift:-f}]},e)}else{var d=f-o.depth-(s.height-p);d<h&&(f+=.5*(h-d),p+=.5*(h-d)),v=R.makeVList({positionType:"individualShift",children:[{type:"elem",elem:s,shift:p},{type:"elem",elem:o,shift:-f}]},e)}a=e.havingStyle(n),v.height*=a.sizeMultiplier/e.sizeMultiplier,v.depth*=a.sizeMultiplier/e.sizeMultiplier;var x;n.size===w1.DISPLAY.size?x=e.fontMetrics().delim1:n.size===w1.SCRIPTSCRIPT.size?x=e.havingStyle(w1.SCRIPT).fontMetrics().delim2:x=e.fontMetrics().delim2;var L,H;return t.leftDelim==null?L=t7(e,["mopen"]):L=J4.customSizedDelim(t.leftDelim,x,!0,e.havingStyle(n),t.mode,["mopen"]),t.continued?H=R.makeSpan([]):t.rightDelim==null?H=t7(e,["mclose"]):H=J4.customSizedDelim(t.rightDelim,x,!0,e.havingStyle(n),t.mode,["mclose"]),R.makeSpan(["mord"].concat(a.sizingClasses(e)),[L,R.makeSpan(["mfrac"],[v]),H],e)},Su=(t,e)=>{var n=new K.MathNode("mfrac",[r2(t.numer,e),r2(t.denom,e)]);if(!t.hasBarLine)n.setAttribute("linethickness","0px");else if(t.barSize){var r=y2(t.barSize,e);n.setAttribute("linethickness",n1(r))}var i=Lx(t.size,e.style);if(i.size!==e.style.size){n=new K.MathNode("mstyle",[n]);var a=i.size===w1.DISPLAY.size?"true":"false";n.setAttribute("displaystyle",a),n.setAttribute("scriptlevel","0")}if(t.leftDelim!=null||t.rightDelim!=null){var o=[];if(t.leftDelim!=null){var l=new K.MathNode("mo",[new K.TextNode(t.leftDelim.replace("\\",""))]);l.setAttribute("fence","true"),o.push(l)}if(o.push(n),t.rightDelim!=null){var Q=new K.MathNode("mo",[new K.TextNode(t.rightDelim.replace("\\",""))]);Q.setAttribute("fence","true"),o.push(Q)}return vu(o)}return n};s1({type:"genfrac",names:["\\dfrac","\\frac","\\tfrac","\\dbinom","\\binom","\\tbinom","\\\\atopfrac","\\\\bracefrac","\\\\brackfrac"],props:{numArgs:2,allowedInArgument:!0},handler:(t,e)=>{var{parser:n,funcName:r}=t,i=e[0],a=e[1],o,l=null,Q=null,s="auto";switch(r){case"\\dfrac":case"\\frac":case"\\tfrac":o=!0;break;case"\\\\atopfrac":o=!1;break;case"\\dbinom":case"\\binom":case"\\tbinom":o=!1,l="(",Q=")";break;case"\\\\bracefrac":o=!1,l="\\{",Q="\\}";break;case"\\\\brackfrac":o=!1,l="[",Q="]";break;default:throw new Error("Unrecognized genfrac command")}switch(r){case"\\dfrac":case"\\dbinom":s="display";break;case"\\tfrac":case"\\tbinom":s="text";break}return{type:"genfrac",mode:n.mode,continued:!1,numer:i,denom:a,hasBarLine:o,leftDelim:l,rightDelim:Q,size:s,barSize:null}},htmlBuilder:wu,mathmlBuilder:Su});s1({type:"genfrac",names:["\\cfrac"],props:{numArgs:2},handler:(t,e)=>{var{parser:n,funcName:r}=t,i=e[0],a=e[1];return{type:"genfrac",mode:n.mode,continued:!0,numer:i,denom:a,hasBarLine:!0,leftDelim:null,rightDelim:null,size:"display",barSize:null}}});s1({type:"infix",names:["\\over","\\choose","\\atop","\\brace","\\brack"],props:{numArgs:0,infix:!0},handler(t){var{parser:e,funcName:n,token:r}=t,i;switch(n){case"\\over":i="\\frac";break;case"\\choose":i="\\binom";break;case"\\atop":i="\\\\atopfrac";break;case"\\brace":i="\\\\bracefrac";break;case"\\brack":i="\\\\brackfrac";break;default:throw new Error("Unrecognized infix genfrac command")}return{type:"infix",mode:e.mode,replaceWith:i,token:r}}});var ah=["display","text","script","scriptscript"],oh=function(e){var n=null;return e.length>0&&(n=e,n=n==="."?null:n),n};s1({type:"genfrac",names:["\\genfrac"],props:{numArgs:6,allowedInArgument:!0,argTypes:["math","math","size","text","math","math"]},handler(t,e){var{parser:n}=t,r=e[4],i=e[5],a=t8(e[0]),o=a.type==="atom"&&a.family==="open"?oh(a.text):null,l=t8(e[1]),Q=l.type==="atom"&&l.family==="close"?oh(l.text):null,s=B1(e[2],"size"),u,T=null;s.isBlank?u=!0:(T=s.value,u=T.number>0);var c="auto",f=e[3];if(f.type==="ordgroup"){if(f.body.length>0){var h=B1(f.body[0],"textord");c=ah[Number(h.text)]}}else f=B1(f,"textord"),c=ah[Number(f.text)];return{type:"genfrac",mode:n.mode,numer:r,denom:i,continued:!1,hasBarLine:u,barSize:T,leftDelim:o,rightDelim:Q,size:c}},htmlBuilder:wu,mathmlBuilder:Su});s1({type:"infix",names:["\\above"],props:{numArgs:1,argTypes:["size"],infix:!0},handler(t,e){var{parser:n,funcName:r,token:i}=t;return{type:"infix",mode:n.mode,replaceWith:"\\\\abovefrac",size:B1(e[0],"size").value,token:i}}});s1({type:"genfrac",names:["\\\\abovefrac"],props:{numArgs:3,argTypes:["math","size","math"]},handler:(t,e)=>{var{parser:n,funcName:r}=t,i=e[0],a=$V(B1(e[1],"infix").size),o=e[2],l=a.number>0;return{type:"genfrac",mode:n.mode,numer:i,denom:o,continued:!1,hasBarLine:l,barSize:a,leftDelim:null,rightDelim:null,size:"auto"}},htmlBuilder:wu,mathmlBuilder:Su});var Hx=(t,e)=>{var n=e.style,r,i;t.type==="supsub"?(r=t.sup?q1(t.sup,e.havingStyle(n.sup()),e):q1(t.sub,e.havingStyle(n.sub()),e),i=B1(t.base,"horizBrace")):i=B1(t,"horizBrace");var a=q1(i.base,e.havingBaseStyle(w1.DISPLAY)),o=T6.svgSpan(i,e),l;if(i.isOver?(l=R.makeVList({positionType:"firstBaseline",children:[{type:"elem",elem:a},{type:"kern",size:.1},{type:"elem",elem:o}]},e),l.children[0].children[0].children[1].classes.push("svg-align")):(l=R.makeVList({positionType:"bottom",positionData:a.depth+.1+o.height,children:[{type:"elem",elem:o},{type:"kern",size:.1},{type:"elem",elem:a}]},e),l.children[0].children[0].children[0].classes.push("svg-align")),r){var Q=R.makeSpan(["mord",i.isOver?"mover":"munder"],[l],e);i.isOver?l=R.makeVList({positionType:"firstBaseline",children:[{type:"elem",elem:Q},{type:"kern",size:.2},{type:"elem",elem:r}]},e):l=R.makeVList({positionType:"bottom",positionData:Q.depth+.2+r.height+r.depth,children:[{type:"elem",elem:r},{type:"kern",size:.2},{type:"elem",elem:Q}]},e)}return R.makeSpan(["mord",i.isOver?"mover":"munder"],[l],e)},oE=(t,e)=>{var n=T6.mathMLnode(t.label);return new K.MathNode(t.isOver?"mover":"munder",[r2(t.base,e),n])};s1({type:"horizBrace",names:["\\overbrace","\\underbrace"],props:{numArgs:1},handler(t,e){var{parser:n,funcName:r}=t;return{type:"horizBrace",mode:n.mode,label:r,isOver:/^\\over/.test(r),base:e[0]}},htmlBuilder:Hx,mathmlBuilder:oE});s1({type:"href",names:["\\href"],props:{numArgs:2,argTypes:["url","original"],allowedInText:!0},handler:(t,e)=>{var{parser:n}=t,r=e[1],i=B1(e[0],"url").url;return n.settings.isTrusted({command:"\\href",url:i})?{type:"href",mode:n.mode,href:i,body:S2(r)}:n.formatUnsupportedCmd("\\href")},htmlBuilder:(t,e)=>{var n=N2(t.body,e,!1);return R.makeAnchor(t.href,[],n,e)},mathmlBuilder:(t,e)=>{var n=K6(t.body,e);return n instanceof N3||(n=new N3("mrow",[n])),n.setAttribute("href",t.href),n}});s1({type:"href",names:["\\url"],props:{numArgs:1,argTypes:["url"],allowedInText:!0},handler:(t,e)=>{var{parser:n}=t,r=B1(e[0],"url").url;if(!n.settings.isTrusted({command:"\\url",url:r}))return n.formatUnsupportedCmd("\\url");for(var i=[],a=0;a<r.length;a++){var o=r[a];o==="~"&&(o="\\textasciitilde"),i.push({type:"textord",mode:"text",text:o})}var l={type:"text",mode:n.mode,font:"\\texttt",body:i};return{type:"href",mode:n.mode,href:r,body:S2(l)}}});s1({type:"hbox",names:["\\hbox"],props:{numArgs:1,argTypes:["text"],allowedInText:!0,primitive:!0},handler(t,e){var{parser:n}=t;return{type:"hbox",mode:n.mode,body:S2(e[0])}},htmlBuilder(t,e){var n=N2(t.body,e,!1);return R.makeFragment(n)},mathmlBuilder(t,e){return new K.MathNode("mrow",x3(t.body,e))}});s1({type:"html",names:["\\htmlClass","\\htmlId","\\htmlStyle","\\htmlData"],props:{numArgs:2,argTypes:["raw","original"],allowedInText:!0},handler:(t,e)=>{var{parser:n,funcName:r,token:i}=t,a=B1(e[0],"raw").string,o=e[1];n.settings.strict&&n.settings.reportNonstrict("htmlExtension","HTML extension is disabled on strict mode");var l,Q={};switch(r){case"\\htmlClass":Q.class=a,l={command:"\\htmlClass",class:a};break;case"\\htmlId":Q.id=a,l={command:"\\htmlId",id:a};break;case"\\htmlStyle":Q.style=a,l={command:"\\htmlStyle",style:a};break;case"\\htmlData":{for(var s=a.split(","),u=0;u<s.length;u++){var T=s[u].split("=");if(T.length!==2)throw new J("Error parsing key-value for \\htmlData");Q["data-"+T[0].trim()]=T[1].trim()}l={command:"\\htmlData",attributes:Q};break}default:throw new Error("Unrecognized html command")}return n.settings.isTrusted(l)?{type:"html",mode:n.mode,attributes:Q,body:S2(o)}:n.formatUnsupportedCmd(r)},htmlBuilder:(t,e)=>{var n=N2(t.body,e,!1),r=["enclosing"];t.attributes.class&&r.push(...t.attributes.class.trim().split(/\s+/));var i=R.makeSpan(r,n,e);for(var a in t.attributes)a!=="class"&&t.attributes.hasOwnProperty(a)&&i.setAttribute(a,t.attributes[a]);return i},mathmlBuilder:(t,e)=>K6(t.body,e)});s1({type:"htmlmathml",names:["\\html@mathml"],props:{numArgs:2,allowedInText:!0},handler:(t,e)=>{var{parser:n}=t;return{type:"htmlmathml",mode:n.mode,html:S2(e[0]),mathml:S2(e[1])}},htmlBuilder:(t,e)=>{var n=N2(t.html,e,!1);return R.makeFragment(n)},mathmlBuilder:(t,e)=>K6(t.mathml,e)});var fo=function(e){if(/^[-+]? *(\d+(\.\d*)?|\.\d+)$/.test(e))return{number:+e,unit:"bp"};var n=/([-+]?) *(\d+(?:\.\d*)?|\.\d+) *([a-z]{2})/.exec(e);if(!n)throw new J("Invalid size: '"+e+"' in \\includegraphics");var r={number:+(n[1]+n[2]),unit:n[3]};if(!Fg(r))throw new J("Invalid unit: '"+r.unit+"' in \\includegraphics.");return r};s1({type:"includegraphics",names:["\\includegraphics"],props:{numArgs:1,numOptionalArgs:1,argTypes:["raw","url"],allowedInText:!1},handler:(t,e,n)=>{var{parser:r}=t,i={number:0,unit:"em"},a={number:.9,unit:"em"},o={number:0,unit:"em"},l="";if(n[0])for(var Q=B1(n[0],"raw").string,s=Q.split(","),u=0;u<s.length;u++){var T=s[u].split("=");if(T.length===2){var c=T[1].trim();switch(T[0].trim()){case"alt":l=c;break;case"width":i=fo(c);break;case"height":a=fo(c);break;case"totalheight":o=fo(c);break;default:throw new J("Invalid key: '"+T[0]+"' in \\includegraphics.")}}}var f=B1(e[0],"url").url;return l===""&&(l=f,l=l.replace(/^.*[\\/]/,""),l=l.substring(0,l.lastIndexOf("."))),r.settings.isTrusted({command:"\\includegraphics",url:f})?{type:"includegraphics",mode:r.mode,alt:l,width:i,height:a,totalheight:o,src:f}:r.formatUnsupportedCmd("\\includegraphics")},htmlBuilder:(t,e)=>{var n=y2(t.height,e),r=0;t.totalheight.number>0&&(r=y2(t.totalheight,e)-n);var i=0;t.width.number>0&&(i=y2(t.width,e));var a={height:n1(n+r)};i>0&&(a.width=n1(i)),r>0&&(a.verticalAlign=n1(-r));var o=new oC(t.src,t.alt,a);return o.height=n,o.depth=r,o},mathmlBuilder:(t,e)=>{var n=new K.MathNode("mglyph",[]);n.setAttribute("alt",t.alt);var r=y2(t.height,e),i=0;if(t.totalheight.number>0&&(i=y2(t.totalheight,e)-r,n.setAttribute("valign",n1(-i))),n.setAttribute("height",n1(r+i)),t.width.number>0){var a=y2(t.width,e);n.setAttribute("width",n1(a))}return n.setAttribute("src",t.src),n}});s1({type:"kern",names:["\\kern","\\mkern","\\hskip","\\mskip"],props:{numArgs:1,argTypes:["size"],primitive:!0,allowedInText:!0},handler(t,e){var{parser:n,funcName:r}=t,i=B1(e[0],"size");if(n.settings.strict){var a=r[1]==="m",o=i.value.unit==="mu";a?(o||n.settings.reportNonstrict("mathVsTextUnits","LaTeX's "+r+" supports only mu units, "+("not "+i.value.unit+" units")),n.mode!=="math"&&n.settings.reportNonstrict("mathVsTextUnits","LaTeX's "+r+" works only in math mode")):o&&n.settings.reportNonstrict("mathVsTextUnits","LaTeX's "+r+" doesn't support mu units")}return{type:"kern",mode:n.mode,dimension:i.value}},htmlBuilder(t,e){return R.makeGlue(t.dimension,e)},mathmlBuilder(t,e){var n=y2(t.dimension,e);return new K.SpaceNode(n)}});s1({type:"lap",names:["\\mathllap","\\mathrlap","\\mathclap"],props:{numArgs:1,allowedInText:!0},handler:(t,e)=>{var{parser:n,funcName:r}=t,i=e[0];return{type:"lap",mode:n.mode,alignment:r.slice(5),body:i}},htmlBuilder:(t,e)=>{var n;t.alignment==="clap"?(n=R.makeSpan([],[q1(t.body,e)]),n=R.makeSpan(["inner"],[n],e)):n=R.makeSpan(["inner"],[q1(t.body,e)]);var r=R.makeSpan(["fix"],[]),i=R.makeSpan([t.alignment],[n,r],e),a=R.makeSpan(["strut"]);return a.style.height=n1(i.height+i.depth),i.depth&&(a.style.verticalAlign=n1(-i.depth)),i.children.unshift(a),i=R.makeSpan(["thinbox"],[i],e),R.makeSpan(["mord","vbox"],[i],e)},mathmlBuilder:(t,e)=>{var n=new K.MathNode("mpadded",[r2(t.body,e)]);if(t.alignment!=="rlap"){var r=t.alignment==="llap"?"-1":"-0.5";n.setAttribute("lspace",r+"width")}return n.setAttribute("width","0px"),n}});s1({type:"styling",names:["\\(","$"],props:{numArgs:0,allowedInText:!0,allowedInMath:!1},handler(t,e){var{funcName:n,parser:r}=t,i=r.mode;r.switchMode("math");var a=n==="\\("?"\\)":"$",o=r.parseExpression(!1,a);return r.expect(a),r.switchMode(i),{type:"styling",mode:r.mode,style:"text",body:o}}});s1({type:"text",names:["\\)","\\]"],props:{numArgs:0,allowedInText:!0,allowedInMath:!1},handler(t,e){throw new J("Mismatched "+t.funcName)}});var lh=(t,e)=>{switch(e.style.size){case w1.DISPLAY.size:return t.display;case w1.TEXT.size:return t.text;case w1.SCRIPT.size:return t.script;case w1.SCRIPTSCRIPT.size:return t.scriptscript;default:return t.text}};s1({type:"mathchoice",names:["\\mathchoice"],props:{numArgs:4,primitive:!0},handler:(t,e)=>{var{parser:n}=t;return{type:"mathchoice",mode:n.mode,display:S2(e[0]),text:S2(e[1]),script:S2(e[2]),scriptscript:S2(e[3])}},htmlBuilder:(t,e)=>{var n=lh(t,e),r=N2(n,e,!1);return R.makeFragment(r)},mathmlBuilder:(t,e)=>{var n=lh(t,e);return K6(n,e)}});var bx=(t,e,n,r,i,a,o)=>{t=R.makeSpan([],[t]);var l=n&&C1.isCharacterBox(n),Q,s;if(e){var u=q1(e,r.havingStyle(i.sup()),r);s={elem:u,kern:Math.max(r.fontMetrics().bigOpSpacing1,r.fontMetrics().bigOpSpacing3-u.depth)}}if(n){var T=q1(n,r.havingStyle(i.sub()),r);Q={elem:T,kern:Math.max(r.fontMetrics().bigOpSpacing2,r.fontMetrics().bigOpSpacing4-T.height)}}var c;if(s&&Q){var f=r.fontMetrics().bigOpSpacing5+Q.elem.height+Q.elem.depth+Q.kern+t.depth+o;c=R.makeVList({positionType:"bottom",positionData:f,children:[{type:"kern",size:r.fontMetrics().bigOpSpacing5},{type:"elem",elem:Q.elem,marginLeft:n1(-a)},{type:"kern",size:Q.kern},{type:"elem",elem:t},{type:"kern",size:s.kern},{type:"elem",elem:s.elem,marginLeft:n1(a)},{type:"kern",size:r.fontMetrics().bigOpSpacing5}]},r)}else if(Q){var h=t.height-o;c=R.makeVList({positionType:"top",positionData:h,children:[{type:"kern",size:r.fontMetrics().bigOpSpacing5},{type:"elem",elem:Q.elem,marginLeft:n1(-a)},{type:"kern",size:Q.kern},{type:"elem",elem:t}]},r)}else if(s){var p=t.depth+o;c=R.makeVList({positionType:"bottom",positionData:p,children:[{type:"elem",elem:t},{type:"kern",size:s.kern},{type:"elem",elem:s.elem,marginLeft:n1(a)},{type:"kern",size:r.fontMetrics().bigOpSpacing5}]},r)}else return t;var v=[c];if(Q&&a!==0&&!l){var d=R.makeSpan(["mspace"],[],r);d.style.marginRight=n1(a),v.unshift(d)}return R.makeSpan(["mop","op-limits"],v,r)},Mx=["\\smallint"],Te=(t,e)=>{var n,r,i=!1,a;t.type==="supsub"?(n=t.sup,r=t.sub,a=B1(t.base,"op"),i=!0):a=B1(t,"op");var o=e.style,l=!1;o.size===w1.DISPLAY.size&&a.symbol&&!C1.contains(Mx,a.name)&&(l=!0);var Q;if(a.symbol){var s=l?"Size2-Regular":"Size1-Regular",u="";if((a.name==="\\oiint"||a.name==="\\oiiint")&&(u=a.name.slice(1),a.name=u==="oiint"?"\\iint":"\\iiint"),Q=R.makeSymbol(a.name,s,"math",e,["mop","op-symbol",l?"large-op":"small-op"]),u.length>0){var T=Q.italic,c=R.staticSvg(u+"Size"+(l?"2":"1"),e);Q=R.makeVList({positionType:"individualShift",children:[{type:"elem",elem:Q,shift:0},{type:"elem",elem:c,shift:l?.08:0}]},e),a.name="\\"+u,Q.classes.unshift("mop"),Q.italic=T}}else if(a.body){var f=N2(a.body,e,!0);f.length===1&&f[0]instanceof q3?(Q=f[0],Q.classes[0]="mop"):Q=R.makeSpan(["mop"],f,e)}else{for(var h=[],p=1;p<a.name.length;p++)h.push(R.mathsym(a.name[p],a.mode,e));Q=R.makeSpan(["mop"],h,e)}var v=0,d=0;return(Q instanceof q3||a.name==="\\oiint"||a.name==="\\oiiint")&&!a.suppressBaseShift&&(v=(Q.height-Q.depth)/2-e.fontMetrics().axisHeight,d=Q.italic),i?bx(Q,n,r,e,o,d,v):(v&&(Q.style.position="relative",Q.style.top=n1(v)),Q)},H7=(t,e)=>{var n;if(t.symbol)n=new N3("mo",[Z3(t.name,t.mode)]),C1.contains(Mx,t.name)&&n.setAttribute("largeop","false");else if(t.body)n=new N3("mo",x3(t.body,e));else{n=new N3("mi",[new E0(t.name.slice(1))]);var r=new N3("mo",[Z3("⁡","text")]);t.parentIsSupSub?n=new N3("mrow",[n,r]):n=Jg([n,r])}return n},lE={"∏":"\\prod","∐":"\\coprod","∑":"\\sum","⋀":"\\bigwedge","⋁":"\\bigvee","⋂":"\\bigcap","⋃":"\\bigcup","⨀":"\\bigodot","⨁":"\\bigoplus","⨂":"\\bigotimes","⨄":"\\biguplus","⨆":"\\bigsqcup"};s1({type:"op",names:["\\coprod","\\bigvee","\\bigwedge","\\biguplus","\\bigcap","\\bigcup","\\intop","\\prod","\\sum","\\bigotimes","\\bigoplus","\\bigodot","\\bigsqcup","\\smallint","∏","∐","∑","⋀","⋁","⋂","⋃","⨀","⨁","⨂","⨄","⨆"],props:{numArgs:0},handler:(t,e)=>{var{parser:n,funcName:r}=t,i=r;return i.length===1&&(i=lE[i]),{type:"op",mode:n.mode,limits:!0,parentIsSupSub:!1,symbol:!0,name:i}},htmlBuilder:Te,mathmlBuilder:H7});s1({type:"op",names:["\\mathop"],props:{numArgs:1,primitive:!0},handler:(t,e)=>{var{parser:n}=t,r=e[0];return{type:"op",mode:n.mode,limits:!1,parentIsSupSub:!1,symbol:!1,body:S2(r)}},htmlBuilder:Te,mathmlBuilder:H7});var QE={"∫":"\\int","∬":"\\iint","∭":"\\iiint","∮":"\\oint","∯":"\\oiint","∰":"\\oiiint"};s1({type:"op",names:["\\arcsin","\\arccos","\\arctan","\\arctg","\\arcctg","\\arg","\\ch","\\cos","\\cosec","\\cosh","\\cot","\\cotg","\\coth","\\csc","\\ctg","\\cth","\\deg","\\dim","\\exp","\\hom","\\ker","\\lg","\\ln","\\log","\\sec","\\sin","\\sinh","\\sh","\\tan","\\tanh","\\tg","\\th"],props:{numArgs:0},handler(t){var{parser:e,funcName:n}=t;return{type:"op",mode:e.mode,limits:!1,parentIsSupSub:!1,symbol:!1,name:n}},htmlBuilder:Te,mathmlBuilder:H7});s1({type:"op",names:["\\det","\\gcd","\\inf","\\lim","\\max","\\min","\\Pr","\\sup"],props:{numArgs:0},handler(t){var{parser:e,funcName:n}=t;return{type:"op",mode:e.mode,limits:!0,parentIsSupSub:!1,symbol:!1,name:n}},htmlBuilder:Te,mathmlBuilder:H7});s1({type:"op",names:["\\int","\\iint","\\iiint","\\oint","\\oiint","\\oiiint","∫","∬","∭","∮","∯","∰"],props:{numArgs:0},handler(t){var{parser:e,funcName:n}=t,r=n;return r.length===1&&(r=QE[r]),{type:"op",mode:e.mode,limits:!1,parentIsSupSub:!1,symbol:!0,name:r}},htmlBuilder:Te,mathmlBuilder:H7});var _x=(t,e)=>{var n,r,i=!1,a;t.type==="supsub"?(n=t.sup,r=t.sub,a=B1(t.base,"operatorname"),i=!0):a=B1(t,"operatorname");var o;if(a.body.length>0){for(var l=a.body.map(T=>{var c=T.text;return typeof c=="string"?{type:"textord",mode:T.mode,text:c}:T}),Q=N2(l,e.withFont("mathrm"),!0),s=0;s<Q.length;s++){var u=Q[s];u instanceof q3&&(u.text=u.text.replace(/\u2212/,"-").replace(/\u2217/,"*"))}o=R.makeSpan(["mop"],Q,e)}else o=R.makeSpan(["mop"],[],e);return i?bx(o,n,r,e,e.style,0,0):o},sE=(t,e)=>{for(var n=x3(t.body,e.withFont("mathrm")),r=!0,i=0;i<n.length;i++){var a=n[i];if(!(a instanceof K.SpaceNode))if(a instanceof K.MathNode)switch(a.type){case"mi":case"mn":case"ms":case"mspace":case"mtext":break;case"mo":{var o=a.children[0];a.children.length===1&&o instanceof K.TextNode?o.text=o.text.replace(/\u2212/,"-").replace(/\u2217/,"*"):r=!1;break}default:r=!1}else r=!1}if(r){var l=n.map(u=>u.toText()).join("");n=[new K.TextNode(l)]}var Q=new K.MathNode("mi",n);Q.setAttribute("mathvariant","normal");var s=new K.MathNode("mo",[Z3("⁡","text")]);return t.parentIsSupSub?new K.MathNode("mrow",[Q,s]):K.newDocumentFragment([Q,s])};s1({type:"operatorname",names:["\\operatorname@","\\operatornamewithlimits"],props:{numArgs:1},handler:(t,e)=>{var{parser:n,funcName:r}=t,i=e[0];return{type:"operatorname",mode:n.mode,body:S2(i),alwaysHandleSupSub:r==="\\operatornamewithlimits",limits:!1,parentIsSupSub:!1}},htmlBuilder:_x,mathmlBuilder:sE});V("\\operatorname","\\@ifstar\\operatornamewithlimits\\operatorname@");X5({type:"ordgroup",htmlBuilder(t,e){return t.semisimple?R.makeFragment(N2(t.body,e,!1)):R.makeSpan(["mord"],N2(t.body,e,!0),e)},mathmlBuilder(t,e){return K6(t.body,e,!0)}});s1({type:"overline",names:["\\overline"],props:{numArgs:1},handler(t,e){var{parser:n}=t,r=e[0];return{type:"overline",mode:n.mode,body:r}},htmlBuilder(t,e){var n=q1(t.body,e.havingCrampedStyle()),r=R.makeLineSpan("overline-line",e),i=e.fontMetrics().defaultRuleThickness,a=R.makeVList({positionType:"firstBaseline",children:[{type:"elem",elem:n},{type:"kern",size:3*i},{type:"elem",elem:r},{type:"kern",size:i}]},e);return R.makeSpan(["mord","overline"],[a],e)},mathmlBuilder(t,e){var n=new K.MathNode("mo",[new K.TextNode("‾")]);n.setAttribute("stretchy","true");var r=new K.MathNode("mover",[r2(t.body,e),n]);return r.setAttribute("accent","true"),r}});s1({type:"phantom",names:["\\phantom"],props:{numArgs:1,allowedInText:!0},handler:(t,e)=>{var{parser:n}=t,r=e[0];return{type:"phantom",mode:n.mode,body:S2(r)}},htmlBuilder:(t,e)=>{var n=N2(t.body,e.withPhantom(),!1);return R.makeFragment(n)},mathmlBuilder:(t,e)=>{var n=x3(t.body,e);return new K.MathNode("mphantom",n)}});s1({type:"hphantom",names:["\\hphantom"],props:{numArgs:1,allowedInText:!0},handler:(t,e)=>{var{parser:n}=t,r=e[0];return{type:"hphantom",mode:n.mode,body:r}},htmlBuilder:(t,e)=>{var n=R.makeSpan([],[q1(t.body,e.withPhantom())]);if(n.height=0,n.depth=0,n.children)for(var r=0;r<n.children.length;r++)n.children[r].height=0,n.children[r].depth=0;return n=R.makeVList({positionType:"firstBaseline",children:[{type:"elem",elem:n}]},e),R.makeSpan(["mord"],[n],e)},mathmlBuilder:(t,e)=>{var n=x3(S2(t.body),e),r=new K.MathNode("mphantom",n),i=new K.MathNode("mpadded",[r]);return i.setAttribute("height","0px"),i.setAttribute("depth","0px"),i}});s1({type:"vphantom",names:["\\vphantom"],props:{numArgs:1,allowedInText:!0},handler:(t,e)=>{var{parser:n}=t,r=e[0];return{type:"vphantom",mode:n.mode,body:r}},htmlBuilder:(t,e)=>{var n=R.makeSpan(["inner"],[q1(t.body,e.withPhantom())]),r=R.makeSpan(["fix"],[]);return R.makeSpan(["mord","rlap"],[n,r],e)},mathmlBuilder:(t,e)=>{var n=x3(S2(t.body),e),r=new K.MathNode("mphantom",n),i=new K.MathNode("mpadded",[r]);return i.setAttribute("width","0px"),i}});s1({type:"raisebox",names:["\\raisebox"],props:{numArgs:2,argTypes:["size","hbox"],allowedInText:!0},handler(t,e){var{parser:n}=t,r=B1(e[0],"size").value,i=e[1];return{type:"raisebox",mode:n.mode,dy:r,body:i}},htmlBuilder(t,e){var n=q1(t.body,e),r=y2(t.dy,e);return R.makeVList({positionType:"shift",positionData:-r,children:[{type:"elem",elem:n}]},e)},mathmlBuilder(t,e){var n=new K.MathNode("mpadded",[r2(t.body,e)]),r=t.dy.number+t.dy.unit;return n.setAttribute("voffset",r),n}});s1({type:"internal",names:["\\relax"],props:{numArgs:0,allowedInText:!0},handler(t){var{parser:e}=t;return{type:"internal",mode:e.mode}}});s1({type:"rule",names:["\\rule"],props:{numArgs:2,numOptionalArgs:1,argTypes:["size","size","size"]},handler(t,e,n){var{parser:r}=t,i=n[0],a=B1(e[0],"size"),o=B1(e[1],"size");return{type:"rule",mode:r.mode,shift:i&&B1(i,"size").value,width:a.value,height:o.value}},htmlBuilder(t,e){var n=R.makeSpan(["mord","rule"],[],e),r=y2(t.width,e),i=y2(t.height,e),a=t.shift?y2(t.shift,e):0;return n.style.borderRightWidth=n1(r),n.style.borderTopWidth=n1(i),n.style.bottom=n1(a),n.width=r,n.height=i+a,n.depth=-a,n.maxFontSize=i*1.125*e.sizeMultiplier,n},mathmlBuilder(t,e){var n=y2(t.width,e),r=y2(t.height,e),i=t.shift?y2(t.shift,e):0,a=e.color&&e.getColor()||"black",o=new K.MathNode("mspace");o.setAttribute("mathbackground",a),o.setAttribute("width",n1(n)),o.setAttribute("height",n1(r));var l=new K.MathNode("mpadded",[o]);return i>=0?l.setAttribute("height",n1(i)):(l.setAttribute("height",n1(i)),l.setAttribute("depth",n1(-i))),l.setAttribute("voffset",n1(i)),l}});function wx(t,e,n){for(var r=N2(t,e,!1),i=e.sizeMultiplier/n.sizeMultiplier,a=0;a<r.length;a++){var o=r[a].classes.indexOf("sizing");o<0?Array.prototype.push.apply(r[a].classes,e.sizingClasses(n)):r[a].classes[o+1]==="reset-size"+e.size&&(r[a].classes[o+1]="reset-size"+n.size),r[a].height*=i,r[a].depth*=i}return R.makeFragment(r)}var Qh=["\\tiny","\\sixptsize","\\scriptsize","\\footnotesize","\\small","\\normalsize","\\large","\\Large","\\LARGE","\\huge","\\Huge"],uE=(t,e)=>{var n=e.havingSize(t.size);return wx(t.body,n,e)};s1({type:"sizing",names:Qh,props:{numArgs:0,allowedInText:!0},handler:(t,e)=>{var{breakOnTokenText:n,funcName:r,parser:i}=t,a=i.parseExpression(!1,n);return{type:"sizing",mode:i.mode,size:Qh.indexOf(r)+1,body:a}},htmlBuilder:uE,mathmlBuilder:(t,e)=>{var n=e.havingSize(t.size),r=x3(t.body,n),i=new K.MathNode("mstyle",r);return i.setAttribute("mathsize",n1(n.sizeMultiplier)),i}});s1({type:"smash",names:["\\smash"],props:{numArgs:1,numOptionalArgs:1,allowedInText:!0},handler:(t,e,n)=>{var{parser:r}=t,i=!1,a=!1,o=n[0]&&B1(n[0],"ordgroup");if(o)for(var l="",Q=0;Q<o.body.length;++Q){var s=o.body[Q];if(l=s.text,l==="t")i=!0;else if(l==="b")a=!0;else{i=!1,a=!1;break}}else i=!0,a=!0;var u=e[0];return{type:"smash",mode:r.mode,body:u,smashHeight:i,smashDepth:a}},htmlBuilder:(t,e)=>{var n=R.makeSpan([],[q1(t.body,e)]);if(!t.smashHeight&&!t.smashDepth)return n;if(t.smashHeight&&(n.height=0,n.children))for(var r=0;r<n.children.length;r++)n.children[r].height=0;if(t.smashDepth&&(n.depth=0,n.children))for(var i=0;i<n.children.length;i++)n.children[i].depth=0;var a=R.makeVList({positionType:"firstBaseline",children:[{type:"elem",elem:n}]},e);return R.makeSpan(["mord"],[a],e)},mathmlBuilder:(t,e)=>{var n=new K.MathNode("mpadded",[r2(t.body,e)]);return t.smashHeight&&n.setAttribute("height","0px"),t.smashDepth&&n.setAttribute("depth","0px"),n}});s1({type:"sqrt",names:["\\sqrt"],props:{numArgs:1,numOptionalArgs:1},handler(t,e,n){var{parser:r}=t,i=n[0],a=e[0];return{type:"sqrt",mode:r.mode,body:a,index:i}},htmlBuilder(t,e){var n=q1(t.body,e.havingCrampedStyle());n.height===0&&(n.height=e.fontMetrics().xHeight),n=R.wrapFragment(n,e);var r=e.fontMetrics(),i=r.defaultRuleThickness,a=i;e.style.id<w1.TEXT.id&&(a=e.fontMetrics().xHeight);var o=i+a/4,l=n.height+n.depth+o+i,{span:Q,ruleWidth:s,advanceWidth:u}=J4.sqrtImage(l,e),T=Q.height-s;T>n.height+n.depth+o&&(o=(o+T-n.height-n.depth)/2);var c=Q.height-n.height-o-s;n.style.paddingLeft=n1(u);var f=R.makeVList({positionType:"firstBaseline",children:[{type:"elem",elem:n,wrapperClasses:["svg-align"]},{type:"kern",size:-(n.height+c)},{type:"elem",elem:Q},{type:"kern",size:s}]},e);if(t.index){var h=e.havingStyle(w1.SCRIPTSCRIPT),p=q1(t.index,h,e),v=.6*(f.height-f.depth),d=R.makeVList({positionType:"shift",positionData:-v,children:[{type:"elem",elem:p}]},e),m=R.makeSpan(["root"],[d]);return R.makeSpan(["mord","sqrt"],[m,f],e)}else return R.makeSpan(["mord","sqrt"],[f],e)},mathmlBuilder(t,e){var{body:n,index:r}=t;return r?new K.MathNode("mroot",[r2(n,e),r2(r,e)]):new K.MathNode("msqrt",[r2(n,e)])}});var sh={display:w1.DISPLAY,text:w1.TEXT,script:w1.SCRIPT,scriptscript:w1.SCRIPTSCRIPT};s1({type:"styling",names:["\\displaystyle","\\textstyle","\\scriptstyle","\\scriptscriptstyle"],props:{numArgs:0,allowedInText:!0,primitive:!0},handler(t,e){var{breakOnTokenText:n,funcName:r,parser:i}=t,a=i.parseExpression(!0,n),o=r.slice(1,r.length-5);return{type:"styling",mode:i.mode,style:o,body:a}},htmlBuilder(t,e){var n=sh[t.style],r=e.havingStyle(n).withFont("");return wx(t.body,r,e)},mathmlBuilder(t,e){var n=sh[t.style],r=e.havingStyle(n),i=x3(t.body,r),a=new K.MathNode("mstyle",i),o={display:["0","true"],text:["0","false"],script:["1","false"],scriptscript:["2","false"]},l=o[t.style];return a.setAttribute("scriptlevel",l[0]),a.setAttribute("displaystyle",l[1]),a}});var TE=function(e,n){var r=e.base;if(r)if(r.type==="op"){var i=r.limits&&(n.style.size===w1.DISPLAY.size||r.alwaysHandleSupSub);return i?Te:null}else if(r.type==="operatorname"){var a=r.alwaysHandleSupSub&&(n.style.size===w1.DISPLAY.size||r.limits);return a?_x:null}else{if(r.type==="accent")return C1.isCharacterBox(r.base)?xu:null;if(r.type==="horizBrace"){var o=!e.sub;return o===r.isOver?Hx:null}else return null}else return null};X5({type:"supsub",htmlBuilder(t,e){var n=TE(t,e);if(n)return n(t,e);var{base:r,sup:i,sub:a}=t,o=q1(r,e),l,Q,s=e.fontMetrics(),u=0,T=0,c=r&&C1.isCharacterBox(r);if(i){var f=e.havingStyle(e.style.sup());l=q1(i,f,e),c||(u=o.height-f.fontMetrics().supDrop*f.sizeMultiplier/e.sizeMultiplier)}if(a){var h=e.havingStyle(e.style.sub());Q=q1(a,h,e),c||(T=o.depth+h.fontMetrics().subDrop*h.sizeMultiplier/e.sizeMultiplier)}var p;e.style===w1.DISPLAY?p=s.sup1:e.style.cramped?p=s.sup3:p=s.sup2;var v=e.sizeMultiplier,d=n1(.5/s.ptPerEm/v),m=null;if(Q){var y=t.base&&t.base.type==="op"&&t.base.name&&(t.base.name==="\\oiint"||t.base.name==="\\oiiint");(o instanceof q3||y)&&(m=n1(-o.italic))}var x;if(l&&Q){u=Math.max(u,p,l.depth+.25*s.xHeight),T=Math.max(T,s.sub2);var L=s.defaultRuleThickness,H=4*L;if(u-l.depth-(Q.height-T)<H){T=H-(u-l.depth)+Q.height;var M=.8*s.xHeight-(u-l.depth);M>0&&(u+=M,T-=M)}var w=[{type:"elem",elem:Q,shift:T,marginRight:d,marginLeft:m},{type:"elem",elem:l,shift:-u,marginRight:d}];x=R.makeVList({positionType:"individualShift",children:w},e)}else if(Q){T=Math.max(T,s.sub1,Q.height-.8*s.xHeight);var S=[{type:"elem",elem:Q,marginLeft:m,marginRight:d}];x=R.makeVList({positionType:"shift",positionData:T,children:S},e)}else if(l)u=Math.max(u,p,l.depth+.25*s.xHeight),x=R.makeVList({positionType:"shift",positionData:-u,children:[{type:"elem",elem:l,marginRight:d}]},e);else throw new Error("supsub must have either sup or sub.");var D=gQ(o,"right")||"mord";return R.makeSpan([D],[o,R.makeSpan(["msupsub"],[x])],e)},mathmlBuilder(t,e){var n=!1,r,i;t.base&&t.base.type==="horizBrace"&&(i=!!t.sup,i===t.base.isOver&&(n=!0,r=t.base.isOver)),t.base&&(t.base.type==="op"||t.base.type==="operatorname")&&(t.base.parentIsSupSub=!0);var a=[r2(t.base,e)];t.sub&&a.push(r2(t.sub,e)),t.sup&&a.push(r2(t.sup,e));var o;if(n)o=r?"mover":"munder";else if(t.sub)if(t.sup){var s=t.base;s&&s.type==="op"&&s.limits&&e.style===w1.DISPLAY||s&&s.type==="operatorname"&&s.alwaysHandleSupSub&&(e.style===w1.DISPLAY||s.limits)?o="munderover":o="msubsup"}else{var Q=t.base;Q&&Q.type==="op"&&Q.limits&&(e.style===w1.DISPLAY||Q.alwaysHandleSupSub)||Q&&Q.type==="operatorname"&&Q.alwaysHandleSupSub&&(Q.limits||e.style===w1.DISPLAY)?o="munder":o="msub"}else{var l=t.base;l&&l.type==="op"&&l.limits&&(e.style===w1.DISPLAY||l.alwaysHandleSupSub)||l&&l.type==="operatorname"&&l.alwaysHandleSupSub&&(l.limits||e.style===w1.DISPLAY)?o="mover":o="msup"}return new K.MathNode(o,a)}});X5({type:"atom",htmlBuilder(t,e){return R.mathsym(t.text,t.mode,e,["m"+t.family])},mathmlBuilder(t,e){var n=new K.MathNode("mo",[Z3(t.text,t.mode)]);if(t.family==="bin"){var r=yu(t,e);r==="bold-italic"&&n.setAttribute("mathvariant",r)}else t.family==="punct"?n.setAttribute("separator","true"):(t.family==="open"||t.family==="close")&&n.setAttribute("stretchy","false");return n}});var Sx={mi:"italic",mn:"normal",mtext:"normal"};X5({type:"mathord",htmlBuilder(t,e){return R.makeOrd(t,e,"mathord")},mathmlBuilder(t,e){var n=new K.MathNode("mi",[Z3(t.text,t.mode,e)]),r=yu(t,e)||"italic";return r!==Sx[n.type]&&n.setAttribute("mathvariant",r),n}});X5({type:"textord",htmlBuilder(t,e){return R.makeOrd(t,e,"textord")},mathmlBuilder(t,e){var n=Z3(t.text,t.mode,e),r=yu(t,e)||"normal",i;return t.mode==="text"?i=new K.MathNode("mtext",[n]):/[0-9]/.test(t.text)?i=new K.MathNode("mn",[n]):t.text==="\\prime"?i=new K.MathNode("mo",[n]):i=new K.MathNode("mi",[n]),r!==Sx[i.type]&&i.setAttribute("mathvariant",r),i}});var ho={"\\nobreak":"nobreak","\\allowbreak":"allowbreak"},po={" ":{},"\\ ":{},"~":{className:"nobreak"},"\\space":{},"\\nobreakspace":{className:"nobreak"}};X5({type:"spacing",htmlBuilder(t,e){if(po.hasOwnProperty(t.text)){var n=po[t.text].className||"";if(t.mode==="text"){var r=R.makeOrd(t,e,"textord");return r.classes.push(n),r}else return R.makeSpan(["mspace",n],[R.mathsym(t.text,t.mode,e)],e)}else{if(ho.hasOwnProperty(t.text))return R.makeSpan(["mspace",ho[t.text]],[],e);throw new J('Unknown type of space "'+t.text+'"')}},mathmlBuilder(t,e){var n;if(po.hasOwnProperty(t.text))n=new K.MathNode("mtext",[new K.TextNode(" ")]);else{if(ho.hasOwnProperty(t.text))return new K.MathNode("mspace");throw new J('Unknown type of space "'+t.text+'"')}return n}});var uh=()=>{var t=new K.MathNode("mtd",[]);return t.setAttribute("width","50%"),t};X5({type:"tag",mathmlBuilder(t,e){var n=new K.MathNode("mtable",[new K.MathNode("mtr",[uh(),new K.MathNode("mtd",[K6(t.body,e)]),uh(),new K.MathNode("mtd",[K6(t.tag,e)])])]);return n.setAttribute("width","100%"),n}});var Th={"\\text":void 0,"\\textrm":"textrm","\\textsf":"textsf","\\texttt":"texttt","\\textnormal":"textrm"},ch={"\\textbf":"textbf","\\textmd":"textmd"},cE={"\\textit":"textit","\\textup":"textup"},fh=(t,e)=>{var n=t.font;return n?Th[n]?e.withTextFontFamily(Th[n]):ch[n]?e.withTextFontWeight(ch[n]):e.withTextFontShape(cE[n]):e};s1({type:"text",names:["\\text","\\textrm","\\textsf","\\texttt","\\textnormal","\\textbf","\\textmd","\\textit","\\textup"],props:{numArgs:1,argTypes:["text"],allowedInArgument:!0,allowedInText:!0},handler(t,e){var{parser:n,funcName:r}=t,i=e[0];return{type:"text",mode:n.mode,body:S2(i),font:r}},htmlBuilder(t,e){var n=fh(t,e),r=N2(t.body,n,!0);return R.makeSpan(["mord","text"],r,n)},mathmlBuilder(t,e){var n=fh(t,e);return K6(t.body,n)}});s1({type:"underline",names:["\\underline"],props:{numArgs:1,allowedInText:!0},handler(t,e){var{parser:n}=t;return{type:"underline",mode:n.mode,body:e[0]}},htmlBuilder(t,e){var n=q1(t.body,e),r=R.makeLineSpan("underline-line",e),i=e.fontMetrics().defaultRuleThickness,a=R.makeVList({positionType:"top",positionData:n.height,children:[{type:"kern",size:i},{type:"elem",elem:r},{type:"kern",size:3*i},{type:"elem",elem:n}]},e);return R.makeSpan(["mord","underline"],[a],e)},mathmlBuilder(t,e){var n=new K.MathNode("mo",[new K.TextNode("‾")]);n.setAttribute("stretchy","true");var r=new K.MathNode("munder",[r2(t.body,e),n]);return r.setAttribute("accentunder","true"),r}});s1({type:"vcenter",names:["\\vcenter"],props:{numArgs:1,argTypes:["original"],allowedInText:!1},handler(t,e){var{parser:n}=t;return{type:"vcenter",mode:n.mode,body:e[0]}},htmlBuilder(t,e){var n=q1(t.body,e),r=e.fontMetrics().axisHeight,i=.5*(n.height-r-(n.depth+r));return R.makeVList({positionType:"shift",positionData:i,children:[{type:"elem",elem:n}]},e)},mathmlBuilder(t,e){return new K.MathNode("mpadded",[r2(t.body,e)],["vcenter"])}});s1({type:"verb",names:["\\verb"],props:{numArgs:0,allowedInText:!0},handler(t,e,n){throw new J("\\verb ended by end of line instead of matching delimiter")},htmlBuilder(t,e){for(var n=hh(t),r=[],i=e.havingStyle(e.style.text()),a=0;a<n.length;a++){var o=n[a];o==="~"&&(o="\\textasciitilde"),r.push(R.makeSymbol(o,"Typewriter-Regular",t.mode,i,["mord","texttt"]))}return R.makeSpan(["mord","text"].concat(i.sizingClasses(e)),R.tryCombineChars(r),i)},mathmlBuilder(t,e){var n=new K.TextNode(hh(t)),r=new K.MathNode("mtext",[n]);return r.setAttribute("mathvariant","monospace"),r}});var hh=t=>t.body.replace(/ /g,t.star?"␣":" "),k6=Kg,Ax=`[ \r
	]`,fE="\\\\[a-zA-Z@]+",hE="\\\\[^\uD800-\uDFFF]",dE="("+fE+")"+Ax+"*",pE=`\\\\(
|[ \r	]+
?)[ \r	]*`,bQ="[̀-ͯ]",mE=new RegExp(bQ+"+$"),vE="("+Ax+"+)|"+(pE+"|")+"([!-\\[\\]-‧‪-퟿豈-￿]"+(bQ+"*")+"|[\uD800-\uDBFF][\uDC00-\uDFFF]"+(bQ+"*")+"|\\\\verb\\*([^]).*?\\4|\\\\verb([^*a-zA-Z]).*?\\5"+("|"+dE)+("|"+hE+")");class dh{constructor(e,n){this.input=void 0,this.settings=void 0,this.tokenRegex=void 0,this.catcodes=void 0,this.input=e,this.settings=n,this.tokenRegex=new RegExp(vE,"g"),this.catcodes={"%":14,"~":13}}setCatcode(e,n){this.catcodes[e]=n}lex(){var e=this.input,n=this.tokenRegex.lastIndex;if(n===e.length)return new w4("EOF",new M3(this,n,n));var r=this.tokenRegex.exec(e);if(r===null||r.index!==n)throw new J("Unexpected character: '"+e[n]+"'",new w4(e[n],new M3(this,n,n+1)));var i=r[6]||r[3]||(r[2]?"\\ ":" ");if(this.catcodes[i]===14){var a=e.indexOf(`
`,this.tokenRegex.lastIndex);return a===-1?(this.tokenRegex.lastIndex=e.length,this.settings.reportNonstrict("commentAtEnd","% comment has no terminating newline; LaTeX would fail because of commenting the end of math mode (e.g. $)")):this.tokenRegex.lastIndex=a+1,this.lex()}return new w4(i,new M3(this,n,this.tokenRegex.lastIndex))}}class yE{constructor(e,n){e===void 0&&(e={}),n===void 0&&(n={}),this.current=void 0,this.builtins=void 0,this.undefStack=void 0,this.current=n,this.builtins=e,this.undefStack=[]}beginGroup(){this.undefStack.push({})}endGroup(){if(this.undefStack.length===0)throw new J("Unbalanced namespace destruction: attempt to pop global namespace; please report this as a bug");var e=this.undefStack.pop();for(var n in e)e.hasOwnProperty(n)&&(e[n]==null?delete this.current[n]:this.current[n]=e[n])}endGroups(){for(;this.undefStack.length>0;)this.endGroup()}has(e){return this.current.hasOwnProperty(e)||this.builtins.hasOwnProperty(e)}get(e){return this.current.hasOwnProperty(e)?this.current[e]:this.builtins[e]}set(e,n,r){if(r===void 0&&(r=!1),r){for(var i=0;i<this.undefStack.length;i++)delete this.undefStack[i][e];this.undefStack.length>0&&(this.undefStack[this.undefStack.length-1][e]=n)}else{var a=this.undefStack[this.undefStack.length-1];a&&!a.hasOwnProperty(e)&&(a[e]=this.current[e])}n==null?delete this.current[e]:this.current[e]=n}}var gE=vx;V("\\noexpand",function(t){var e=t.popToken();return t.isExpandable(e.text)&&(e.noexpand=!0,e.treatAsRelax=!0),{tokens:[e],numArgs:0}});V("\\expandafter",function(t){var e=t.popToken();return t.expandOnce(!0),{tokens:[e],numArgs:0}});V("\\@firstoftwo",function(t){var e=t.consumeArgs(2);return{tokens:e[0],numArgs:0}});V("\\@secondoftwo",function(t){var e=t.consumeArgs(2);return{tokens:e[1],numArgs:0}});V("\\@ifnextchar",function(t){var e=t.consumeArgs(3);t.consumeSpaces();var n=t.future();return e[0].length===1&&e[0][0].text===n.text?{tokens:e[1],numArgs:0}:{tokens:e[2],numArgs:0}});V("\\@ifstar","\\@ifnextchar *{\\@firstoftwo{#1}}");V("\\TextOrMath",function(t){var e=t.consumeArgs(2);return t.mode==="text"?{tokens:e[0],numArgs:0}:{tokens:e[1],numArgs:0}});var ph={0:0,1:1,2:2,3:3,4:4,5:5,6:6,7:7,8:8,9:9,a:10,A:10,b:11,B:11,c:12,C:12,d:13,D:13,e:14,E:14,f:15,F:15};V("\\char",function(t){var e=t.popToken(),n,r="";if(e.text==="'")n=8,e=t.popToken();else if(e.text==='"')n=16,e=t.popToken();else if(e.text==="`")if(e=t.popToken(),e.text[0]==="\\")r=e.text.charCodeAt(1);else{if(e.text==="EOF")throw new J("\\char` missing argument");r=e.text.charCodeAt(0)}else n=10;if(n){if(r=ph[e.text],r==null||r>=n)throw new J("Invalid base-"+n+" digit "+e.text);for(var i;(i=ph[t.future().text])!=null&&i<n;)r*=n,r+=i,t.popToken()}return"\\@char{"+r+"}"});var Au=(t,e,n)=>{var r=t.consumeArg().tokens;if(r.length!==1)throw new J("\\newcommand's first argument must be a macro name");var i=r[0].text,a=t.isDefined(i);if(a&&!e)throw new J("\\newcommand{"+i+"} attempting to redefine "+(i+"; use \\renewcommand"));if(!a&&!n)throw new J("\\renewcommand{"+i+"} when command "+i+" does not yet exist; use \\newcommand");var o=0;if(r=t.consumeArg().tokens,r.length===1&&r[0].text==="["){for(var l="",Q=t.expandNextToken();Q.text!=="]"&&Q.text!=="EOF";)l+=Q.text,Q=t.expandNextToken();if(!l.match(/^\s*[0-9]+\s*$/))throw new J("Invalid number of arguments: "+l);o=parseInt(l),r=t.consumeArg().tokens}return t.macros.set(i,{tokens:r,numArgs:o}),""};V("\\newcommand",t=>Au(t,!1,!0));V("\\renewcommand",t=>Au(t,!0,!1));V("\\providecommand",t=>Au(t,!0,!0));V("\\message",t=>{var e=t.consumeArgs(1)[0];return console.log(e.reverse().map(n=>n.text).join("")),""});V("\\errmessage",t=>{var e=t.consumeArgs(1)[0];return console.error(e.reverse().map(n=>n.text).join("")),""});V("\\show",t=>{var e=t.popToken(),n=e.text;return console.log(e,t.macros.get(n),k6[n],Q2.math[n],Q2.text[n]),""});V("\\bgroup","{");V("\\egroup","}");V("~","\\nobreakspace");V("\\lq","`");V("\\rq","'");V("\\aa","\\r a");V("\\AA","\\r A");V("\\textcopyright","\\html@mathml{\\textcircled{c}}{\\char`©}");V("\\copyright","\\TextOrMath{\\textcopyright}{\\text{\\textcopyright}}");V("\\textregistered","\\html@mathml{\\textcircled{\\scriptsize R}}{\\char`®}");V("ℬ","\\mathscr{B}");V("ℰ","\\mathscr{E}");V("ℱ","\\mathscr{F}");V("ℋ","\\mathscr{H}");V("ℐ","\\mathscr{I}");V("ℒ","\\mathscr{L}");V("ℳ","\\mathscr{M}");V("ℛ","\\mathscr{R}");V("ℭ","\\mathfrak{C}");V("ℌ","\\mathfrak{H}");V("ℨ","\\mathfrak{Z}");V("\\Bbbk","\\Bbb{k}");V("·","\\cdotp");V("\\llap","\\mathllap{\\textrm{#1}}");V("\\rlap","\\mathrlap{\\textrm{#1}}");V("\\clap","\\mathclap{\\textrm{#1}}");V("\\mathstrut","\\vphantom{(}");V("\\underbar","\\underline{\\text{#1}}");V("\\not",'\\html@mathml{\\mathrel{\\mathrlap\\@not}}{\\char"338}');V("\\neq","\\html@mathml{\\mathrel{\\not=}}{\\mathrel{\\char`≠}}");V("\\ne","\\neq");V("≠","\\neq");V("\\notin","\\html@mathml{\\mathrel{{\\in}\\mathllap{/\\mskip1mu}}}{\\mathrel{\\char`∉}}");V("∉","\\notin");V("≘","\\html@mathml{\\mathrel{=\\kern{-1em}\\raisebox{0.4em}{$\\scriptsize\\frown$}}}{\\mathrel{\\char`≘}}");V("≙","\\html@mathml{\\stackrel{\\tiny\\wedge}{=}}{\\mathrel{\\char`≘}}");V("≚","\\html@mathml{\\stackrel{\\tiny\\vee}{=}}{\\mathrel{\\char`≚}}");V("≛","\\html@mathml{\\stackrel{\\scriptsize\\star}{=}}{\\mathrel{\\char`≛}}");V("≝","\\html@mathml{\\stackrel{\\tiny\\mathrm{def}}{=}}{\\mathrel{\\char`≝}}");V("≞","\\html@mathml{\\stackrel{\\tiny\\mathrm{m}}{=}}{\\mathrel{\\char`≞}}");V("≟","\\html@mathml{\\stackrel{\\tiny?}{=}}{\\mathrel{\\char`≟}}");V("⟂","\\perp");V("‼","\\mathclose{!\\mkern-0.8mu!}");V("∌","\\notni");V("⌜","\\ulcorner");V("⌝","\\urcorner");V("⌞","\\llcorner");V("⌟","\\lrcorner");V("©","\\copyright");V("®","\\textregistered");V("️","\\textregistered");V("\\ulcorner",'\\html@mathml{\\@ulcorner}{\\mathop{\\char"231c}}');V("\\urcorner",'\\html@mathml{\\@urcorner}{\\mathop{\\char"231d}}');V("\\llcorner",'\\html@mathml{\\@llcorner}{\\mathop{\\char"231e}}');V("\\lrcorner",'\\html@mathml{\\@lrcorner}{\\mathop{\\char"231f}}');V("\\vdots","\\mathord{\\varvdots\\rule{0pt}{15pt}}");V("⋮","\\vdots");V("\\varGamma","\\mathit{\\Gamma}");V("\\varDelta","\\mathit{\\Delta}");V("\\varTheta","\\mathit{\\Theta}");V("\\varLambda","\\mathit{\\Lambda}");V("\\varXi","\\mathit{\\Xi}");V("\\varPi","\\mathit{\\Pi}");V("\\varSigma","\\mathit{\\Sigma}");V("\\varUpsilon","\\mathit{\\Upsilon}");V("\\varPhi","\\mathit{\\Phi}");V("\\varPsi","\\mathit{\\Psi}");V("\\varOmega","\\mathit{\\Omega}");V("\\substack","\\begin{subarray}{c}#1\\end{subarray}");V("\\colon","\\nobreak\\mskip2mu\\mathpunct{}\\mathchoice{\\mkern-3mu}{\\mkern-3mu}{}{}{:}\\mskip6mu\\relax");V("\\boxed","\\fbox{$\\displaystyle{#1}$}");V("\\iff","\\DOTSB\\;\\Longleftrightarrow\\;");V("\\implies","\\DOTSB\\;\\Longrightarrow\\;");V("\\impliedby","\\DOTSB\\;\\Longleftarrow\\;");var mh={",":"\\dotsc","\\not":"\\dotsb","+":"\\dotsb","=":"\\dotsb","<":"\\dotsb",">":"\\dotsb","-":"\\dotsb","*":"\\dotsb",":":"\\dotsb","\\DOTSB":"\\dotsb","\\coprod":"\\dotsb","\\bigvee":"\\dotsb","\\bigwedge":"\\dotsb","\\biguplus":"\\dotsb","\\bigcap":"\\dotsb","\\bigcup":"\\dotsb","\\prod":"\\dotsb","\\sum":"\\dotsb","\\bigotimes":"\\dotsb","\\bigoplus":"\\dotsb","\\bigodot":"\\dotsb","\\bigsqcup":"\\dotsb","\\And":"\\dotsb","\\longrightarrow":"\\dotsb","\\Longrightarrow":"\\dotsb","\\longleftarrow":"\\dotsb","\\Longleftarrow":"\\dotsb","\\longleftrightarrow":"\\dotsb","\\Longleftrightarrow":"\\dotsb","\\mapsto":"\\dotsb","\\longmapsto":"\\dotsb","\\hookrightarrow":"\\dotsb","\\doteq":"\\dotsb","\\mathbin":"\\dotsb","\\mathrel":"\\dotsb","\\relbar":"\\dotsb","\\Relbar":"\\dotsb","\\xrightarrow":"\\dotsb","\\xleftarrow":"\\dotsb","\\DOTSI":"\\dotsi","\\int":"\\dotsi","\\oint":"\\dotsi","\\iint":"\\dotsi","\\iiint":"\\dotsi","\\iiiint":"\\dotsi","\\idotsint":"\\dotsi","\\DOTSX":"\\dotsx"};V("\\dots",function(t){var e="\\dotso",n=t.expandAfterFuture().text;return n in mh?e=mh[n]:(n.slice(0,4)==="\\not"||n in Q2.math&&C1.contains(["bin","rel"],Q2.math[n].group))&&(e="\\dotsb"),e});var Vu={")":!0,"]":!0,"\\rbrack":!0,"\\}":!0,"\\rbrace":!0,"\\rangle":!0,"\\rceil":!0,"\\rfloor":!0,"\\rgroup":!0,"\\rmoustache":!0,"\\right":!0,"\\bigr":!0,"\\biggr":!0,"\\Bigr":!0,"\\Biggr":!0,$:!0,";":!0,".":!0,",":!0};V("\\dotso",function(t){var e=t.future().text;return e in Vu?"\\ldots\\,":"\\ldots"});V("\\dotsc",function(t){var e=t.future().text;return e in Vu&&e!==","?"\\ldots\\,":"\\ldots"});V("\\cdots",function(t){var e=t.future().text;return e in Vu?"\\@cdots\\,":"\\@cdots"});V("\\dotsb","\\cdots");V("\\dotsm","\\cdots");V("\\dotsi","\\!\\cdots");V("\\dotsx","\\ldots\\,");V("\\DOTSI","\\relax");V("\\DOTSB","\\relax");V("\\DOTSX","\\relax");V("\\tmspace","\\TextOrMath{\\kern#1#3}{\\mskip#1#2}\\relax");V("\\,","\\tmspace+{3mu}{.1667em}");V("\\thinspace","\\,");V("\\>","\\mskip{4mu}");V("\\:","\\tmspace+{4mu}{.2222em}");V("\\medspace","\\:");V("\\;","\\tmspace+{5mu}{.2777em}");V("\\thickspace","\\;");V("\\!","\\tmspace-{3mu}{.1667em}");V("\\negthinspace","\\!");V("\\negmedspace","\\tmspace-{4mu}{.2222em}");V("\\negthickspace","\\tmspace-{5mu}{.277em}");V("\\enspace","\\kern.5em ");V("\\enskip","\\hskip.5em\\relax");V("\\quad","\\hskip1em\\relax");V("\\qquad","\\hskip2em\\relax");V("\\tag","\\@ifstar\\tag@literal\\tag@paren");V("\\tag@paren","\\tag@literal{({#1})}");V("\\tag@literal",t=>{if(t.macros.get("\\df@tag"))throw new J("Multiple \\tag");return"\\gdef\\df@tag{\\text{#1}}"});V("\\bmod","\\mathchoice{\\mskip1mu}{\\mskip1mu}{\\mskip5mu}{\\mskip5mu}\\mathbin{\\rm mod}\\mathchoice{\\mskip1mu}{\\mskip1mu}{\\mskip5mu}{\\mskip5mu}");V("\\pod","\\allowbreak\\mathchoice{\\mkern18mu}{\\mkern8mu}{\\mkern8mu}{\\mkern8mu}(#1)");V("\\pmod","\\pod{{\\rm mod}\\mkern6mu#1}");V("\\mod","\\allowbreak\\mathchoice{\\mkern18mu}{\\mkern12mu}{\\mkern12mu}{\\mkern12mu}{\\rm mod}\\,\\,#1");V("\\newline","\\\\\\relax");V("\\TeX","\\textrm{\\html@mathml{T\\kern-.1667em\\raisebox{-.5ex}{E}\\kern-.125emX}{TeX}}");var Vx=n1(H4["Main-Regular"]["T".charCodeAt(0)][1]-.7*H4["Main-Regular"]["A".charCodeAt(0)][1]);V("\\LaTeX","\\textrm{\\html@mathml{"+("L\\kern-.36em\\raisebox{"+Vx+"}{\\scriptstyle A}")+"\\kern-.15em\\TeX}{LaTeX}}");V("\\KaTeX","\\textrm{\\html@mathml{"+("K\\kern-.17em\\raisebox{"+Vx+"}{\\scriptstyle A}")+"\\kern-.15em\\TeX}{KaTeX}}");V("\\hspace","\\@ifstar\\@hspacer\\@hspace");V("\\@hspace","\\hskip #1\\relax");V("\\@hspacer","\\rule{0pt}{0pt}\\hskip #1\\relax");V("\\ordinarycolon",":");V("\\vcentcolon","\\mathrel{\\mathop\\ordinarycolon}");V("\\dblcolon",'\\html@mathml{\\mathrel{\\vcentcolon\\mathrel{\\mkern-.9mu}\\vcentcolon}}{\\mathop{\\char"2237}}');V("\\coloneqq",'\\html@mathml{\\mathrel{\\vcentcolon\\mathrel{\\mkern-1.2mu}=}}{\\mathop{\\char"2254}}');V("\\Coloneqq",'\\html@mathml{\\mathrel{\\dblcolon\\mathrel{\\mkern-1.2mu}=}}{\\mathop{\\char"2237\\char"3d}}');V("\\coloneq",'\\html@mathml{\\mathrel{\\vcentcolon\\mathrel{\\mkern-1.2mu}\\mathrel{-}}}{\\mathop{\\char"3a\\char"2212}}');V("\\Coloneq",'\\html@mathml{\\mathrel{\\dblcolon\\mathrel{\\mkern-1.2mu}\\mathrel{-}}}{\\mathop{\\char"2237\\char"2212}}');V("\\eqqcolon",'\\html@mathml{\\mathrel{=\\mathrel{\\mkern-1.2mu}\\vcentcolon}}{\\mathop{\\char"2255}}');V("\\Eqqcolon",'\\html@mathml{\\mathrel{=\\mathrel{\\mkern-1.2mu}\\dblcolon}}{\\mathop{\\char"3d\\char"2237}}');V("\\eqcolon",'\\html@mathml{\\mathrel{\\mathrel{-}\\mathrel{\\mkern-1.2mu}\\vcentcolon}}{\\mathop{\\char"2239}}');V("\\Eqcolon",'\\html@mathml{\\mathrel{\\mathrel{-}\\mathrel{\\mkern-1.2mu}\\dblcolon}}{\\mathop{\\char"2212\\char"2237}}');V("\\colonapprox",'\\html@mathml{\\mathrel{\\vcentcolon\\mathrel{\\mkern-1.2mu}\\approx}}{\\mathop{\\char"3a\\char"2248}}');V("\\Colonapprox",'\\html@mathml{\\mathrel{\\dblcolon\\mathrel{\\mkern-1.2mu}\\approx}}{\\mathop{\\char"2237\\char"2248}}');V("\\colonsim",'\\html@mathml{\\mathrel{\\vcentcolon\\mathrel{\\mkern-1.2mu}\\sim}}{\\mathop{\\char"3a\\char"223c}}');V("\\Colonsim",'\\html@mathml{\\mathrel{\\dblcolon\\mathrel{\\mkern-1.2mu}\\sim}}{\\mathop{\\char"2237\\char"223c}}');V("∷","\\dblcolon");V("∹","\\eqcolon");V("≔","\\coloneqq");V("≕","\\eqqcolon");V("⩴","\\Coloneqq");V("\\ratio","\\vcentcolon");V("\\coloncolon","\\dblcolon");V("\\colonequals","\\coloneqq");V("\\coloncolonequals","\\Coloneqq");V("\\equalscolon","\\eqqcolon");V("\\equalscoloncolon","\\Eqqcolon");V("\\colonminus","\\coloneq");V("\\coloncolonminus","\\Coloneq");V("\\minuscolon","\\eqcolon");V("\\minuscoloncolon","\\Eqcolon");V("\\coloncolonapprox","\\Colonapprox");V("\\coloncolonsim","\\Colonsim");V("\\simcolon","\\mathrel{\\sim\\mathrel{\\mkern-1.2mu}\\vcentcolon}");V("\\simcoloncolon","\\mathrel{\\sim\\mathrel{\\mkern-1.2mu}\\dblcolon}");V("\\approxcolon","\\mathrel{\\approx\\mathrel{\\mkern-1.2mu}\\vcentcolon}");V("\\approxcoloncolon","\\mathrel{\\approx\\mathrel{\\mkern-1.2mu}\\dblcolon}");V("\\notni","\\html@mathml{\\not\\ni}{\\mathrel{\\char`∌}}");V("\\limsup","\\DOTSB\\operatorname*{lim\\,sup}");V("\\liminf","\\DOTSB\\operatorname*{lim\\,inf}");V("\\injlim","\\DOTSB\\operatorname*{inj\\,lim}");V("\\projlim","\\DOTSB\\operatorname*{proj\\,lim}");V("\\varlimsup","\\DOTSB\\operatorname*{\\overline{lim}}");V("\\varliminf","\\DOTSB\\operatorname*{\\underline{lim}}");V("\\varinjlim","\\DOTSB\\operatorname*{\\underrightarrow{lim}}");V("\\varprojlim","\\DOTSB\\operatorname*{\\underleftarrow{lim}}");V("\\gvertneqq","\\html@mathml{\\@gvertneqq}{≩}");V("\\lvertneqq","\\html@mathml{\\@lvertneqq}{≨}");V("\\ngeqq","\\html@mathml{\\@ngeqq}{≱}");V("\\ngeqslant","\\html@mathml{\\@ngeqslant}{≱}");V("\\nleqq","\\html@mathml{\\@nleqq}{≰}");V("\\nleqslant","\\html@mathml{\\@nleqslant}{≰}");V("\\nshortmid","\\html@mathml{\\@nshortmid}{∤}");V("\\nshortparallel","\\html@mathml{\\@nshortparallel}{∦}");V("\\nsubseteqq","\\html@mathml{\\@nsubseteqq}{⊈}");V("\\nsupseteqq","\\html@mathml{\\@nsupseteqq}{⊉}");V("\\varsubsetneq","\\html@mathml{\\@varsubsetneq}{⊊}");V("\\varsubsetneqq","\\html@mathml{\\@varsubsetneqq}{⫋}");V("\\varsupsetneq","\\html@mathml{\\@varsupsetneq}{⊋}");V("\\varsupsetneqq","\\html@mathml{\\@varsupsetneqq}{⫌}");V("\\imath","\\html@mathml{\\@imath}{ı}");V("\\jmath","\\html@mathml{\\@jmath}{ȷ}");V("\\llbracket","\\html@mathml{\\mathopen{[\\mkern-3.2mu[}}{\\mathopen{\\char`⟦}}");V("\\rrbracket","\\html@mathml{\\mathclose{]\\mkern-3.2mu]}}{\\mathclose{\\char`⟧}}");V("⟦","\\llbracket");V("⟧","\\rrbracket");V("\\lBrace","\\html@mathml{\\mathopen{\\{\\mkern-3.2mu[}}{\\mathopen{\\char`⦃}}");V("\\rBrace","\\html@mathml{\\mathclose{]\\mkern-3.2mu\\}}}{\\mathclose{\\char`⦄}}");V("⦃","\\lBrace");V("⦄","\\rBrace");V("\\minuso","\\mathbin{\\html@mathml{{\\mathrlap{\\mathchoice{\\kern{0.145em}}{\\kern{0.145em}}{\\kern{0.1015em}}{\\kern{0.0725em}}\\circ}{-}}}{\\char`⦵}}");V("⦵","\\minuso");V("\\darr","\\downarrow");V("\\dArr","\\Downarrow");V("\\Darr","\\Downarrow");V("\\lang","\\langle");V("\\rang","\\rangle");V("\\uarr","\\uparrow");V("\\uArr","\\Uparrow");V("\\Uarr","\\Uparrow");V("\\N","\\mathbb{N}");V("\\R","\\mathbb{R}");V("\\Z","\\mathbb{Z}");V("\\alef","\\aleph");V("\\alefsym","\\aleph");V("\\Alpha","\\mathrm{A}");V("\\Beta","\\mathrm{B}");V("\\bull","\\bullet");V("\\Chi","\\mathrm{X}");V("\\clubs","\\clubsuit");V("\\cnums","\\mathbb{C}");V("\\Complex","\\mathbb{C}");V("\\Dagger","\\ddagger");V("\\diamonds","\\diamondsuit");V("\\empty","\\emptyset");V("\\Epsilon","\\mathrm{E}");V("\\Eta","\\mathrm{H}");V("\\exist","\\exists");V("\\harr","\\leftrightarrow");V("\\hArr","\\Leftrightarrow");V("\\Harr","\\Leftrightarrow");V("\\hearts","\\heartsuit");V("\\image","\\Im");V("\\infin","\\infty");V("\\Iota","\\mathrm{I}");V("\\isin","\\in");V("\\Kappa","\\mathrm{K}");V("\\larr","\\leftarrow");V("\\lArr","\\Leftarrow");V("\\Larr","\\Leftarrow");V("\\lrarr","\\leftrightarrow");V("\\lrArr","\\Leftrightarrow");V("\\Lrarr","\\Leftrightarrow");V("\\Mu","\\mathrm{M}");V("\\natnums","\\mathbb{N}");V("\\Nu","\\mathrm{N}");V("\\Omicron","\\mathrm{O}");V("\\plusmn","\\pm");V("\\rarr","\\rightarrow");V("\\rArr","\\Rightarrow");V("\\Rarr","\\Rightarrow");V("\\real","\\Re");V("\\reals","\\mathbb{R}");V("\\Reals","\\mathbb{R}");V("\\Rho","\\mathrm{P}");V("\\sdot","\\cdot");V("\\sect","\\S");V("\\spades","\\spadesuit");V("\\sub","\\subset");V("\\sube","\\subseteq");V("\\supe","\\supseteq");V("\\Tau","\\mathrm{T}");V("\\thetasym","\\vartheta");V("\\weierp","\\wp");V("\\Zeta","\\mathrm{Z}");V("\\argmin","\\DOTSB\\operatorname*{arg\\,min}");V("\\argmax","\\DOTSB\\operatorname*{arg\\,max}");V("\\plim","\\DOTSB\\mathop{\\operatorname{plim}}\\limits");V("\\bra","\\mathinner{\\langle{#1}|}");V("\\ket","\\mathinner{|{#1}\\rangle}");V("\\braket","\\mathinner{\\langle{#1}\\rangle}");V("\\Bra","\\left\\langle#1\\right|");V("\\Ket","\\left|#1\\right\\rangle");var Cx=t=>e=>{var n=e.consumeArg().tokens,r=e.consumeArg().tokens,i=e.consumeArg().tokens,a=e.consumeArg().tokens,o=e.macros.get("|"),l=e.macros.get("\\|");e.macros.beginGroup();var Q=T=>c=>{t&&(c.macros.set("|",o),i.length&&c.macros.set("\\|",l));var f=T;if(!T&&i.length){var h=c.future();h.text==="|"&&(c.popToken(),f=!0)}return{tokens:f?i:r,numArgs:0}};e.macros.set("|",Q(!1)),i.length&&e.macros.set("\\|",Q(!0));var s=e.consumeArg().tokens,u=e.expandTokens([...a,...s,...n]);return e.macros.endGroup(),{tokens:u.reverse(),numArgs:0}};V("\\bra@ket",Cx(!1));V("\\bra@set",Cx(!0));V("\\Braket","\\bra@ket{\\left\\langle}{\\,\\middle\\vert\\,}{\\,\\middle\\vert\\,}{\\right\\rangle}");V("\\Set","\\bra@set{\\left\\{\\:}{\\;\\middle\\vert\\;}{\\;\\middle\\Vert\\;}{\\:\\right\\}}");V("\\set","\\bra@set{\\{\\,}{\\mid}{}{\\,\\}}");V("\\angln","{\\angl n}");V("\\blue","\\textcolor{##6495ed}{#1}");V("\\orange","\\textcolor{##ffa500}{#1}");V("\\pink","\\textcolor{##ff00af}{#1}");V("\\red","\\textcolor{##df0030}{#1}");V("\\green","\\textcolor{##28ae7b}{#1}");V("\\gray","\\textcolor{gray}{#1}");V("\\purple","\\textcolor{##9d38bd}{#1}");V("\\blueA","\\textcolor{##ccfaff}{#1}");V("\\blueB","\\textcolor{##80f6ff}{#1}");V("\\blueC","\\textcolor{##63d9ea}{#1}");V("\\blueD","\\textcolor{##11accd}{#1}");V("\\blueE","\\textcolor{##0c7f99}{#1}");V("\\tealA","\\textcolor{##94fff5}{#1}");V("\\tealB","\\textcolor{##26edd5}{#1}");V("\\tealC","\\textcolor{##01d1c1}{#1}");V("\\tealD","\\textcolor{##01a995}{#1}");V("\\tealE","\\textcolor{##208170}{#1}");V("\\greenA","\\textcolor{##b6ffb0}{#1}");V("\\greenB","\\textcolor{##8af281}{#1}");V("\\greenC","\\textcolor{##74cf70}{#1}");V("\\greenD","\\textcolor{##1fab54}{#1}");V("\\greenE","\\textcolor{##0d923f}{#1}");V("\\goldA","\\textcolor{##ffd0a9}{#1}");V("\\goldB","\\textcolor{##ffbb71}{#1}");V("\\goldC","\\textcolor{##ff9c39}{#1}");V("\\goldD","\\textcolor{##e07d10}{#1}");V("\\goldE","\\textcolor{##a75a05}{#1}");V("\\redA","\\textcolor{##fca9a9}{#1}");V("\\redB","\\textcolor{##ff8482}{#1}");V("\\redC","\\textcolor{##f9685d}{#1}");V("\\redD","\\textcolor{##e84d39}{#1}");V("\\redE","\\textcolor{##bc2612}{#1}");V("\\maroonA","\\textcolor{##ffbde0}{#1}");V("\\maroonB","\\textcolor{##ff92c6}{#1}");V("\\maroonC","\\textcolor{##ed5fa6}{#1}");V("\\maroonD","\\textcolor{##ca337c}{#1}");V("\\maroonE","\\textcolor{##9e034e}{#1}");V("\\purpleA","\\textcolor{##ddd7ff}{#1}");V("\\purpleB","\\textcolor{##c6b9fc}{#1}");V("\\purpleC","\\textcolor{##aa87ff}{#1}");V("\\purpleD","\\textcolor{##7854ab}{#1}");V("\\purpleE","\\textcolor{##543b78}{#1}");V("\\mintA","\\textcolor{##f5f9e8}{#1}");V("\\mintB","\\textcolor{##edf2df}{#1}");V("\\mintC","\\textcolor{##e0e5cc}{#1}");V("\\grayA","\\textcolor{##f6f7f7}{#1}");V("\\grayB","\\textcolor{##f0f1f2}{#1}");V("\\grayC","\\textcolor{##e3e5e6}{#1}");V("\\grayD","\\textcolor{##d6d8da}{#1}");V("\\grayE","\\textcolor{##babec2}{#1}");V("\\grayF","\\textcolor{##888d93}{#1}");V("\\grayG","\\textcolor{##626569}{#1}");V("\\grayH","\\textcolor{##3b3e40}{#1}");V("\\grayI","\\textcolor{##21242c}{#1}");V("\\kaBlue","\\textcolor{##314453}{#1}");V("\\kaGreen","\\textcolor{##71B307}{#1}");var Ex={"^":!0,_:!0,"\\limits":!0,"\\nolimits":!0};class xE{constructor(e,n,r){this.settings=void 0,this.expansionCount=void 0,this.lexer=void 0,this.macros=void 0,this.stack=void 0,this.mode=void 0,this.settings=n,this.expansionCount=0,this.feed(e),this.macros=new yE(gE,n.macros),this.mode=r,this.stack=[]}feed(e){this.lexer=new dh(e,this.settings)}switchMode(e){this.mode=e}beginGroup(){this.macros.beginGroup()}endGroup(){this.macros.endGroup()}endGroups(){this.macros.endGroups()}future(){return this.stack.length===0&&this.pushToken(this.lexer.lex()),this.stack[this.stack.length-1]}popToken(){return this.future(),this.stack.pop()}pushToken(e){this.stack.push(e)}pushTokens(e){this.stack.push(...e)}scanArgument(e){var n,r,i;if(e){if(this.consumeSpaces(),this.future().text!=="[")return null;n=this.popToken(),{tokens:i,end:r}=this.consumeArg(["]"])}else({tokens:i,start:n,end:r}=this.consumeArg());return this.pushToken(new w4("EOF",r.loc)),this.pushTokens(i),n.range(r,"")}consumeSpaces(){for(;;){var e=this.future();if(e.text===" ")this.stack.pop();else break}}consumeArg(e){var n=[],r=e&&e.length>0;r||this.consumeSpaces();var i=this.future(),a,o=0,l=0;do{if(a=this.popToken(),n.push(a),a.text==="{")++o;else if(a.text==="}"){if(--o,o===-1)throw new J("Extra }",a)}else if(a.text==="EOF")throw new J("Unexpected end of input in a macro argument, expected '"+(e&&r?e[l]:"}")+"'",a);if(e&&r)if((o===0||o===1&&e[l]==="{")&&a.text===e[l]){if(++l,l===e.length){n.splice(-l,l);break}}else l=0}while(o!==0||r);return i.text==="{"&&n[n.length-1].text==="}"&&(n.pop(),n.shift()),n.reverse(),{tokens:n,start:i,end:a}}consumeArgs(e,n){if(n){if(n.length!==e+1)throw new J("The length of delimiters doesn't match the number of args!");for(var r=n[0],i=0;i<r.length;i++){var a=this.popToken();if(r[i]!==a.text)throw new J("Use of the macro doesn't match its definition",a)}}for(var o=[],l=0;l<e;l++)o.push(this.consumeArg(n&&n[l+1]).tokens);return o}expandOnce(e){var n=this.popToken(),r=n.text,i=n.noexpand?null:this._getExpansion(r);if(i==null||e&&i.unexpandable){if(e&&i==null&&r[0]==="\\"&&!this.isDefined(r))throw new J("Undefined control sequence: "+r);return this.pushToken(n),!1}if(this.expansionCount++,this.expansionCount>this.settings.maxExpand)throw new J("Too many expansions: infinite loop or need to increase maxExpand setting");var a=i.tokens,o=this.consumeArgs(i.numArgs,i.delimiters);if(i.numArgs){a=a.slice();for(var l=a.length-1;l>=0;--l){var Q=a[l];if(Q.text==="#"){if(l===0)throw new J("Incomplete placeholder at end of macro body",Q);if(Q=a[--l],Q.text==="#")a.splice(l+1,1);else if(/^[1-9]$/.test(Q.text))a.splice(l,2,...o[+Q.text-1]);else throw new J("Not a valid argument number",Q)}}}return this.pushTokens(a),a.length}expandAfterFuture(){return this.expandOnce(),this.future()}expandNextToken(){for(;;)if(this.expandOnce()===!1){var e=this.stack.pop();return e.treatAsRelax&&(e.text="\\relax"),e}throw new Error}expandMacro(e){return this.macros.has(e)?this.expandTokens([new w4(e)]):void 0}expandTokens(e){var n=[],r=this.stack.length;for(this.pushTokens(e);this.stack.length>r;)if(this.expandOnce(!0)===!1){var i=this.stack.pop();i.treatAsRelax&&(i.noexpand=!1,i.treatAsRelax=!1),n.push(i)}return n}expandMacroAsText(e){var n=this.expandMacro(e);return n&&n.map(r=>r.text).join("")}_getExpansion(e){var n=this.macros.get(e);if(n==null)return n;if(e.length===1){var r=this.lexer.catcodes[e];if(r!=null&&r!==13)return}var i=typeof n=="function"?n(this):n;if(typeof i=="string"){var a=0;if(i.indexOf("#")!==-1)for(var o=i.replace(/##/g,"");o.indexOf("#"+(a+1))!==-1;)++a;for(var l=new dh(i,this.settings),Q=[],s=l.lex();s.text!=="EOF";)Q.push(s),s=l.lex();Q.reverse();var u={tokens:Q,numArgs:a};return u}return i}isDefined(e){return this.macros.has(e)||k6.hasOwnProperty(e)||Q2.math.hasOwnProperty(e)||Q2.text.hasOwnProperty(e)||Ex.hasOwnProperty(e)}isExpandable(e){var n=this.macros.get(e);return n!=null?typeof n=="string"||typeof n=="function"||!n.unexpandable:k6.hasOwnProperty(e)&&!k6[e].primitive}}var vh=/^[₊₋₌₍₎₀₁₂₃₄₅₆₇₈₉ₐₑₕᵢⱼₖₗₘₙₒₚᵣₛₜᵤᵥₓᵦᵧᵨᵩᵪ]/,En=Object.freeze({"₊":"+","₋":"-","₌":"=","₍":"(","₎":")","₀":"0","₁":"1","₂":"2","₃":"3","₄":"4","₅":"5","₆":"6","₇":"7","₈":"8","₉":"9","ₐ":"a","ₑ":"e","ₕ":"h","ᵢ":"i","ⱼ":"j","ₖ":"k","ₗ":"l","ₘ":"m","ₙ":"n","ₒ":"o","ₚ":"p","ᵣ":"r","ₛ":"s","ₜ":"t","ᵤ":"u","ᵥ":"v","ₓ":"x","ᵦ":"β","ᵧ":"γ","ᵨ":"ρ","ᵩ":"ϕ","ᵪ":"χ","⁺":"+","⁻":"-","⁼":"=","⁽":"(","⁾":")","⁰":"0","¹":"1","²":"2","³":"3","⁴":"4","⁵":"5","⁶":"6","⁷":"7","⁸":"8","⁹":"9","ᴬ":"A","ᴮ":"B","ᴰ":"D","ᴱ":"E","ᴳ":"G","ᴴ":"H","ᴵ":"I","ᴶ":"J","ᴷ":"K","ᴸ":"L","ᴹ":"M","ᴺ":"N","ᴼ":"O","ᴾ":"P","ᴿ":"R","ᵀ":"T","ᵁ":"U","ⱽ":"V","ᵂ":"W","ᵃ":"a","ᵇ":"b","ᶜ":"c","ᵈ":"d","ᵉ":"e","ᶠ":"f","ᵍ":"g",ʰ:"h","ⁱ":"i",ʲ:"j","ᵏ":"k",ˡ:"l","ᵐ":"m",ⁿ:"n","ᵒ":"o","ᵖ":"p",ʳ:"r",ˢ:"s","ᵗ":"t","ᵘ":"u","ᵛ":"v",ʷ:"w",ˣ:"x",ʸ:"y","ᶻ":"z","ᵝ":"β","ᵞ":"γ","ᵟ":"δ","ᵠ":"ϕ","ᵡ":"χ","ᶿ":"θ"}),mo={"́":{text:"\\'",math:"\\acute"},"̀":{text:"\\`",math:"\\grave"},"̈":{text:'\\"',math:"\\ddot"},"̃":{text:"\\~",math:"\\tilde"},"̄":{text:"\\=",math:"\\bar"},"̆":{text:"\\u",math:"\\breve"},"̌":{text:"\\v",math:"\\check"},"̂":{text:"\\^",math:"\\hat"},"̇":{text:"\\.",math:"\\dot"},"̊":{text:"\\r",math:"\\mathring"},"̋":{text:"\\H"},"̧":{text:"\\c"}},yh={á:"á",à:"à",ä:"ä",ǟ:"ǟ",ã:"ã",ā:"ā",ă:"ă",ắ:"ắ",ằ:"ằ",ẵ:"ẵ",ǎ:"ǎ",â:"â",ấ:"ấ",ầ:"ầ",ẫ:"ẫ",ȧ:"ȧ",ǡ:"ǡ",å:"å",ǻ:"ǻ",ḃ:"ḃ",ć:"ć",ḉ:"ḉ",č:"č",ĉ:"ĉ",ċ:"ċ",ç:"ç",ď:"ď",ḋ:"ḋ",ḑ:"ḑ",é:"é",è:"è",ë:"ë",ẽ:"ẽ",ē:"ē",ḗ:"ḗ",ḕ:"ḕ",ĕ:"ĕ",ḝ:"ḝ",ě:"ě",ê:"ê",ế:"ế",ề:"ề",ễ:"ễ",ė:"ė",ȩ:"ȩ",ḟ:"ḟ",ǵ:"ǵ",ḡ:"ḡ",ğ:"ğ",ǧ:"ǧ",ĝ:"ĝ",ġ:"ġ",ģ:"ģ",ḧ:"ḧ",ȟ:"ȟ",ĥ:"ĥ",ḣ:"ḣ",ḩ:"ḩ",í:"í",ì:"ì",ï:"ï",ḯ:"ḯ",ĩ:"ĩ",ī:"ī",ĭ:"ĭ",ǐ:"ǐ",î:"î",ǰ:"ǰ",ĵ:"ĵ",ḱ:"ḱ",ǩ:"ǩ",ķ:"ķ",ĺ:"ĺ",ľ:"ľ",ļ:"ļ",ḿ:"ḿ",ṁ:"ṁ",ń:"ń",ǹ:"ǹ",ñ:"ñ",ň:"ň",ṅ:"ṅ",ņ:"ņ",ó:"ó",ò:"ò",ö:"ö",ȫ:"ȫ",õ:"õ",ṍ:"ṍ",ṏ:"ṏ",ȭ:"ȭ",ō:"ō",ṓ:"ṓ",ṑ:"ṑ",ŏ:"ŏ",ǒ:"ǒ",ô:"ô",ố:"ố",ồ:"ồ",ỗ:"ỗ",ȯ:"ȯ",ȱ:"ȱ",ő:"ő",ṕ:"ṕ",ṗ:"ṗ",ŕ:"ŕ",ř:"ř",ṙ:"ṙ",ŗ:"ŗ",ś:"ś",ṥ:"ṥ",š:"š",ṧ:"ṧ",ŝ:"ŝ",ṡ:"ṡ",ş:"ş",ẗ:"ẗ",ť:"ť",ṫ:"ṫ",ţ:"ţ",ú:"ú",ù:"ù",ü:"ü",ǘ:"ǘ",ǜ:"ǜ",ǖ:"ǖ",ǚ:"ǚ",ũ:"ũ",ṹ:"ṹ",ū:"ū",ṻ:"ṻ",ŭ:"ŭ",ǔ:"ǔ",û:"û",ů:"ů",ű:"ű",ṽ:"ṽ",ẃ:"ẃ",ẁ:"ẁ",ẅ:"ẅ",ŵ:"ŵ",ẇ:"ẇ",ẘ:"ẘ",ẍ:"ẍ",ẋ:"ẋ",ý:"ý",ỳ:"ỳ",ÿ:"ÿ",ỹ:"ỹ",ȳ:"ȳ",ŷ:"ŷ",ẏ:"ẏ",ẙ:"ẙ",ź:"ź",ž:"ž",ẑ:"ẑ",ż:"ż",Á:"Á",À:"À",Ä:"Ä",Ǟ:"Ǟ",Ã:"Ã",Ā:"Ā",Ă:"Ă",Ắ:"Ắ",Ằ:"Ằ",Ẵ:"Ẵ",Ǎ:"Ǎ",Â:"Â",Ấ:"Ấ",Ầ:"Ầ",Ẫ:"Ẫ",Ȧ:"Ȧ",Ǡ:"Ǡ",Å:"Å",Ǻ:"Ǻ",Ḃ:"Ḃ",Ć:"Ć",Ḉ:"Ḉ",Č:"Č",Ĉ:"Ĉ",Ċ:"Ċ",Ç:"Ç",Ď:"Ď",Ḋ:"Ḋ",Ḑ:"Ḑ",É:"É",È:"È",Ë:"Ë",Ẽ:"Ẽ",Ē:"Ē",Ḗ:"Ḗ",Ḕ:"Ḕ",Ĕ:"Ĕ",Ḝ:"Ḝ",Ě:"Ě",Ê:"Ê",Ế:"Ế",Ề:"Ề",Ễ:"Ễ",Ė:"Ė",Ȩ:"Ȩ",Ḟ:"Ḟ",Ǵ:"Ǵ",Ḡ:"Ḡ",Ğ:"Ğ",Ǧ:"Ǧ",Ĝ:"Ĝ",Ġ:"Ġ",Ģ:"Ģ",Ḧ:"Ḧ",Ȟ:"Ȟ",Ĥ:"Ĥ",Ḣ:"Ḣ",Ḩ:"Ḩ",Í:"Í",Ì:"Ì",Ï:"Ï",Ḯ:"Ḯ",Ĩ:"Ĩ",Ī:"Ī",Ĭ:"Ĭ",Ǐ:"Ǐ",Î:"Î",İ:"İ",Ĵ:"Ĵ",Ḱ:"Ḱ",Ǩ:"Ǩ",Ķ:"Ķ",Ĺ:"Ĺ",Ľ:"Ľ",Ļ:"Ļ",Ḿ:"Ḿ",Ṁ:"Ṁ",Ń:"Ń",Ǹ:"Ǹ",Ñ:"Ñ",Ň:"Ň",Ṅ:"Ṅ",Ņ:"Ņ",Ó:"Ó",Ò:"Ò",Ö:"Ö",Ȫ:"Ȫ",Õ:"Õ",Ṍ:"Ṍ",Ṏ:"Ṏ",Ȭ:"Ȭ",Ō:"Ō",Ṓ:"Ṓ",Ṑ:"Ṑ",Ŏ:"Ŏ",Ǒ:"Ǒ",Ô:"Ô",Ố:"Ố",Ồ:"Ồ",Ỗ:"Ỗ",Ȯ:"Ȯ",Ȱ:"Ȱ",Ő:"Ő",Ṕ:"Ṕ",Ṗ:"Ṗ",Ŕ:"Ŕ",Ř:"Ř",Ṙ:"Ṙ",Ŗ:"Ŗ",Ś:"Ś",Ṥ:"Ṥ",Š:"Š",Ṧ:"Ṧ",Ŝ:"Ŝ",Ṡ:"Ṡ",Ş:"Ş",Ť:"Ť",Ṫ:"Ṫ",Ţ:"Ţ",Ú:"Ú",Ù:"Ù",Ü:"Ü",Ǘ:"Ǘ",Ǜ:"Ǜ",Ǖ:"Ǖ",Ǚ:"Ǚ",Ũ:"Ũ",Ṹ:"Ṹ",Ū:"Ū",Ṻ:"Ṻ",Ŭ:"Ŭ",Ǔ:"Ǔ",Û:"Û",Ů:"Ů",Ű:"Ű",Ṽ:"Ṽ",Ẃ:"Ẃ",Ẁ:"Ẁ",Ẅ:"Ẅ",Ŵ:"Ŵ",Ẇ:"Ẇ",Ẍ:"Ẍ",Ẋ:"Ẋ",Ý:"Ý",Ỳ:"Ỳ",Ÿ:"Ÿ",Ỹ:"Ỹ",Ȳ:"Ȳ",Ŷ:"Ŷ",Ẏ:"Ẏ",Ź:"Ź",Ž:"Ž",Ẑ:"Ẑ",Ż:"Ż",ά:"ά",ὰ:"ὰ",ᾱ:"ᾱ",ᾰ:"ᾰ",έ:"έ",ὲ:"ὲ",ή:"ή",ὴ:"ὴ",ί:"ί",ὶ:"ὶ",ϊ:"ϊ",ΐ:"ΐ",ῒ:"ῒ",ῑ:"ῑ",ῐ:"ῐ",ό:"ό",ὸ:"ὸ",ύ:"ύ",ὺ:"ὺ",ϋ:"ϋ",ΰ:"ΰ",ῢ:"ῢ",ῡ:"ῡ",ῠ:"ῠ",ώ:"ώ",ὼ:"ὼ",Ύ:"Ύ",Ὺ:"Ὺ",Ϋ:"Ϋ",Ῡ:"Ῡ",Ῠ:"Ῠ",Ώ:"Ώ",Ὼ:"Ὼ"};class e7{constructor(e,n){this.mode=void 0,this.gullet=void 0,this.settings=void 0,this.leftrightDepth=void 0,this.nextToken=void 0,this.mode="math",this.gullet=new xE(e,n,this.mode),this.settings=n,this.leftrightDepth=0}expect(e,n){if(n===void 0&&(n=!0),this.fetch().text!==e)throw new J("Expected '"+e+"', got '"+this.fetch().text+"'",this.fetch());n&&this.consume()}consume(){this.nextToken=null}fetch(){return this.nextToken==null&&(this.nextToken=this.gullet.expandNextToken()),this.nextToken}switchMode(e){this.mode=e,this.gullet.switchMode(e)}parse(){this.settings.globalGroup||this.gullet.beginGroup(),this.settings.colorIsTextColor&&this.gullet.macros.set("\\color","\\textcolor");try{var e=this.parseExpression(!1);return this.expect("EOF"),this.settings.globalGroup||this.gullet.endGroup(),e}finally{this.gullet.endGroups()}}subparse(e){var n=this.nextToken;this.consume(),this.gullet.pushToken(new w4("}")),this.gullet.pushTokens(e);var r=this.parseExpression(!1);return this.expect("}"),this.nextToken=n,r}parseExpression(e,n){for(var r=[];;){this.mode==="math"&&this.consumeSpaces();var i=this.fetch();if(e7.endOfExpression.indexOf(i.text)!==-1||n&&i.text===n||e&&k6[i.text]&&k6[i.text].infix)break;var a=this.parseAtom(n);if(a){if(a.type==="internal")continue}else break;r.push(a)}return this.mode==="text"&&this.formLigatures(r),this.handleInfixNodes(r)}handleInfixNodes(e){for(var n=-1,r,i=0;i<e.length;i++)if(e[i].type==="infix"){if(n!==-1)throw new J("only one infix operator per group",e[i].token);n=i,r=e[i].replaceWith}if(n!==-1&&r){var a,o,l=e.slice(0,n),Q=e.slice(n+1);l.length===1&&l[0].type==="ordgroup"?a=l[0]:a={type:"ordgroup",mode:this.mode,body:l},Q.length===1&&Q[0].type==="ordgroup"?o=Q[0]:o={type:"ordgroup",mode:this.mode,body:Q};var s;return r==="\\\\abovefrac"?s=this.callFunction(r,[a,e[n],o],[]):s=this.callFunction(r,[a,o],[]),[s]}else return e}handleSupSubscript(e){var n=this.fetch(),r=n.text;this.consume(),this.consumeSpaces();var i=this.parseGroup(e);if(!i)throw new J("Expected group after '"+r+"'",n);return i}formatUnsupportedCmd(e){for(var n=[],r=0;r<e.length;r++)n.push({type:"textord",mode:"text",text:e[r]});var i={type:"text",mode:this.mode,body:n},a={type:"color",mode:this.mode,color:this.settings.errorColor,body:[i]};return a}parseAtom(e){var n=this.parseGroup("atom",e);if(this.mode==="text")return n;for(var r,i;;){this.consumeSpaces();var a=this.fetch();if(a.text==="\\limits"||a.text==="\\nolimits"){if(n&&n.type==="op"){var o=a.text==="\\limits";n.limits=o,n.alwaysHandleSupSub=!0}else if(n&&n.type==="operatorname")n.alwaysHandleSupSub&&(n.limits=a.text==="\\limits");else throw new J("Limit controls must follow a math operator",a);this.consume()}else if(a.text==="^"){if(r)throw new J("Double superscript",a);r=this.handleSupSubscript("superscript")}else if(a.text==="_"){if(i)throw new J("Double subscript",a);i=this.handleSupSubscript("subscript")}else if(a.text==="'"){if(r)throw new J("Double superscript",a);var l={type:"textord",mode:this.mode,text:"\\prime"},Q=[l];for(this.consume();this.fetch().text==="'";)Q.push(l),this.consume();this.fetch().text==="^"&&Q.push(this.handleSupSubscript("superscript")),r={type:"ordgroup",mode:this.mode,body:Q}}else if(En[a.text]){var s=En[a.text],u=vh.test(a.text);for(this.consume();;){var T=this.fetch().text;if(!En[T]||vh.test(T)!==u)break;this.consume(),s+=En[T]}var c=new e7(s,this.settings).parse();u?i={type:"ordgroup",mode:"math",body:c}:r={type:"ordgroup",mode:"math",body:c}}else break}return r||i?{type:"supsub",mode:this.mode,base:n,sup:r,sub:i}:n}parseFunction(e,n){var r=this.fetch(),i=r.text,a=k6[i];if(!a)return null;if(this.consume(),n&&n!=="atom"&&!a.allowedInArgument)throw new J("Got function '"+i+"' with no arguments"+(n?" as "+n:""),r);if(this.mode==="text"&&!a.allowedInText)throw new J("Can't use function '"+i+"' in text mode",r);if(this.mode==="math"&&a.allowedInMath===!1)throw new J("Can't use function '"+i+"' in math mode",r);var{args:o,optArgs:l}=this.parseArguments(i,a);return this.callFunction(i,o,l,r,e)}callFunction(e,n,r,i,a){var o={funcName:e,parser:this,token:i,breakOnTokenText:a},l=k6[e];if(l&&l.handler)return l.handler(o,n,r);throw new J("No function handler for "+e)}parseArguments(e,n){var r=n.numArgs+n.numOptionalArgs;if(r===0)return{args:[],optArgs:[]};for(var i=[],a=[],o=0;o<r;o++){var l=n.argTypes&&n.argTypes[o],Q=o<n.numOptionalArgs;(n.primitive&&l==null||n.type==="sqrt"&&o===1&&a[0]==null)&&(l="primitive");var s=this.parseGroupOfType("argument to '"+e+"'",l,Q);if(Q)a.push(s);else if(s!=null)i.push(s);else throw new J("Null argument, please report this as a bug")}return{args:i,optArgs:a}}parseGroupOfType(e,n,r){switch(n){case"color":return this.parseColorGroup(r);case"size":return this.parseSizeGroup(r);case"url":return this.parseUrlGroup(r);case"math":case"text":return this.parseArgumentGroup(r,n);case"hbox":{var i=this.parseArgumentGroup(r,"text");return i!=null?{type:"styling",mode:i.mode,body:[i],style:"text"}:null}case"raw":{var a=this.parseStringGroup("raw",r);return a!=null?{type:"raw",mode:"text",string:a.text}:null}case"primitive":{if(r)throw new J("A primitive argument cannot be optional");var o=this.parseGroup(e);if(o==null)throw new J("Expected group as "+e,this.fetch());return o}case"original":case null:case void 0:return this.parseArgumentGroup(r);default:throw new J("Unknown group type as "+e,this.fetch())}}consumeSpaces(){for(;this.fetch().text===" ";)this.consume()}parseStringGroup(e,n){var r=this.gullet.scanArgument(n);if(r==null)return null;for(var i="",a;(a=this.fetch()).text!=="EOF";)i+=a.text,this.consume();return this.consume(),r.text=i,r}parseRegexGroup(e,n){for(var r=this.fetch(),i=r,a="",o;(o=this.fetch()).text!=="EOF"&&e.test(a+o.text);)i=o,a+=i.text,this.consume();if(a==="")throw new J("Invalid "+n+": '"+r.text+"'",r);return r.range(i,a)}parseColorGroup(e){var n=this.parseStringGroup("color",e);if(n==null)return null;var r=/^(#[a-f0-9]{3}|#?[a-f0-9]{6}|[a-z]+)$/i.exec(n.text);if(!r)throw new J("Invalid color: '"+n.text+"'",n);var i=r[0];return/^[0-9a-f]{6}$/i.test(i)&&(i="#"+i),{type:"color-token",mode:this.mode,color:i}}parseSizeGroup(e){var n,r=!1;if(this.gullet.consumeSpaces(),!e&&this.gullet.future().text!=="{"?n=this.parseRegexGroup(/^[-+]? *(?:$|\d+|\d+\.\d*|\.\d*) *[a-z]{0,2} *$/,"size"):n=this.parseStringGroup("size",e),!n)return null;!e&&n.text.length===0&&(n.text="0pt",r=!0);var i=/([-+]?) *(\d+(?:\.\d*)?|\.\d+) *([a-z]{2})/.exec(n.text);if(!i)throw new J("Invalid size: '"+n.text+"'",n);var a={number:+(i[1]+i[2]),unit:i[3]};if(!Fg(a))throw new J("Invalid unit: '"+a.unit+"'",n);return{type:"size",mode:this.mode,value:a,isBlank:r}}parseUrlGroup(e){this.gullet.lexer.setCatcode("%",13),this.gullet.lexer.setCatcode("~",12);var n=this.parseStringGroup("url",e);if(this.gullet.lexer.setCatcode("%",14),this.gullet.lexer.setCatcode("~",13),n==null)return null;var r=n.text.replace(/\\([#$%&~_^{}])/g,"$1");return{type:"url",mode:this.mode,url:r}}parseArgumentGroup(e,n){var r=this.gullet.scanArgument(e);if(r==null)return null;var i=this.mode;n&&this.switchMode(n),this.gullet.beginGroup();var a=this.parseExpression(!1,"EOF");this.expect("EOF"),this.gullet.endGroup();var o={type:"ordgroup",mode:this.mode,loc:r.loc,body:a};return n&&this.switchMode(i),o}parseGroup(e,n){var r=this.fetch(),i=r.text,a;if(i==="{"||i==="\\begingroup"){this.consume();var o=i==="{"?"}":"\\endgroup";this.gullet.beginGroup();var l=this.parseExpression(!1,o),Q=this.fetch();this.expect(o),this.gullet.endGroup(),a={type:"ordgroup",mode:this.mode,loc:M3.range(r,Q),body:l,semisimple:i==="\\begingroup"||void 0}}else if(a=this.parseFunction(n,e)||this.parseSymbol(),a==null&&i[0]==="\\"&&!Ex.hasOwnProperty(i)){if(this.settings.throwOnError)throw new J("Undefined control sequence: "+i,r);a=this.formatUnsupportedCmd(i),this.consume()}return a}formLigatures(e){for(var n=e.length-1,r=0;r<n;++r){var i=e[r],a=i.text;a==="-"&&e[r+1].text==="-"&&(r+1<n&&e[r+2].text==="-"?(e.splice(r,3,{type:"textord",mode:"text",loc:M3.range(i,e[r+2]),text:"---"}),n-=2):(e.splice(r,2,{type:"textord",mode:"text",loc:M3.range(i,e[r+1]),text:"--"}),n-=1)),(a==="'"||a==="`")&&e[r+1].text===a&&(e.splice(r,2,{type:"textord",mode:"text",loc:M3.range(i,e[r+1]),text:a+a}),n-=1)}}parseSymbol(){var e=this.fetch(),n=e.text;if(/^\\verb[^a-zA-Z]/.test(n)){this.consume();var r=n.slice(5),i=r.charAt(0)==="*";if(i&&(r=r.slice(1)),r.length<2||r.charAt(0)!==r.slice(-1))throw new J(`\\verb assertion failed --
                    please report what input caused this bug`);return r=r.slice(1,-1),{type:"verb",mode:"text",body:r,star:i}}yh.hasOwnProperty(n[0])&&!Q2[this.mode][n[0]]&&(this.settings.strict&&this.mode==="math"&&this.settings.reportNonstrict("unicodeTextInMathMode",'Accented Unicode text character "'+n[0]+'" used in math mode',e),n=yh[n[0]]+n.slice(1));var a=mE.exec(n);a&&(n=n.substring(0,a.index),n==="i"?n="ı":n==="j"&&(n="ȷ"));var o;if(Q2[this.mode][n]){this.settings.strict&&this.mode==="math"&&yQ.indexOf(n)>=0&&this.settings.reportNonstrict("unicodeTextInMathMode",'Latin-1/Unicode text character "'+n[0]+'" used in math mode',e);var l=Q2[this.mode][n].group,Q=M3.range(e),s;if(sC.hasOwnProperty(l)){var u=l;s={type:"atom",mode:this.mode,family:u,loc:Q,text:n}}else s={type:l,mode:this.mode,loc:Q,text:n};o=s}else if(n.charCodeAt(0)>=128)this.settings.strict&&(Ig(n.charCodeAt(0))?this.mode==="math"&&this.settings.reportNonstrict("unicodeTextInMathMode",'Unicode text character "'+n[0]+'" used in math mode',e):this.settings.reportNonstrict("unknownSymbol",'Unrecognized Unicode character "'+n[0]+'"'+(" ("+n.charCodeAt(0)+")"),e)),o={type:"textord",mode:"text",loc:M3.range(e),text:n};else return null;if(this.consume(),a)for(var T=0;T<a[0].length;T++){var c=a[0][T];if(!mo[c])throw new J("Unknown accent ' "+c+"'",e);var f=mo[c][this.mode]||mo[c].text;if(!f)throw new J("Accent "+c+" unsupported in "+this.mode+" mode",e);o={type:"accent",mode:this.mode,loc:M3.range(e),label:f,isStretchy:!1,isShifty:!0,base:o}}return o}}e7.endOfExpression=["}","\\endgroup","\\end","\\right","&"];var Cu=function(e,n){if(!(typeof e=="string"||e instanceof String))throw new TypeError("KaTeX can only parse string typed expression");var r=new e7(e,n);delete r.gullet.macros.current["\\df@tag"];var i=r.parse();if(delete r.gullet.macros.current["\\current@color"],delete r.gullet.macros.current["\\color"],r.gullet.macros.get("\\df@tag")){if(!n.displayMode)throw new J("\\tag works only in display equations");i=[{type:"tag",mode:"text",body:i,tag:r.subparse([new w4("\\df@tag")])}]}return i},Dx=function(e,n,r){n.textContent="";var i=Eu(e,r).toNode();n.appendChild(i)};typeof document<"u"&&document.compatMode!=="CSS1Compat"&&(typeof console<"u"&&console.warn("Warning: KaTeX doesn't work in quirks mode. Make sure your website has a suitable doctype."),Dx=function(){throw new J("KaTeX doesn't work in quirks mode.")});var LE=function(e,n){var r=Eu(e,n).toMarkup();return r},HE=function(e,n){var r=new fu(n);return Cu(e,r)},Ox=function(e,n,r){if(r.throwOnError||!(e instanceof J))throw e;var i=R.makeSpan(["katex-error"],[new q3(n)]);return i.setAttribute("title",e.toString()),i.setAttribute("style","color:"+r.errorColor),i},Eu=function(e,n){var r=new fu(n);try{var i=Cu(e,r);return EC(i,e,r)}catch(a){return Ox(a,e,r)}},bE=function(e,n){var r=new fu(n);try{var i=Cu(e,r);return DC(i,e,r)}catch(a){return Ox(a,e,r)}},gh={version:"0.16.7",render:Dx,renderToString:LE,ParseError:J,SETTINGS_SCHEMA:xr,__parse:HE,__renderToDomTree:Eu,__renderToHTMLTree:bE,__setFontMetrics:nC,__defineSymbol:b,__defineFunction:s1,__defineMacro:V,__domTree:{Span:L7,Anchor:pu,SymbolNode:q3,SvgNode:s6,PathNode:U6,LineNode:vQ}};function ME(t,e){const n=String(t);let r=n.indexOf(e),i=r,a=0,o=0;if(typeof e!="string")throw new TypeError("Expected substring");for(;r!==-1;)r===i?++a>o&&(o=a):a=1,i=r+e.length,r=n.indexOf(e,i);return o}function Du(t){if(!t._compiled){const e=(t.atBreak?"[\\r\\n][\\t ]*":"")+(t.before?"(?:"+t.before+")":"");t._compiled=new RegExp((e?"("+e+")":"")+(/[|\\{}()[\]^$+*?.-]/.test(t.character)?"\\":"")+t.character+(t.after?"(?:"+t.after+")":""),"g")}return t._compiled}function _E(t,e){return xh(t,e.inConstruct,!0)&&!xh(t,e.notInConstruct,!1)}function xh(t,e,n){if(typeof e=="string"&&(e=[e]),!e||e.length===0)return n;let r=-1;for(;++r<e.length;)if(t.includes(e[r]))return!0;return!1}function Ou(t,e,n){const r=(n.before||"")+(e||"")+(n.after||""),i=[],a=[],o={};let l=-1;for(;++l<t.unsafe.length;){const u=t.unsafe[l];if(!_E(t.stack,u))continue;const T=Du(u);let c;for(;c=T.exec(r);){const f="before"in u||!!u.atBreak,h="after"in u,p=c.index+(f?c[1].length:0);i.includes(p)?(o[p].before&&!f&&(o[p].before=!1),o[p].after&&!h&&(o[p].after=!1)):(i.push(p),o[p]={before:f,after:h})}}i.sort(wE);let Q=n.before?n.before.length:0;const s=r.length-(n.after?n.after.length:0);for(l=-1;++l<i.length;){const u=i[l];u<Q||u>=s||u+1<s&&i[l+1]===u+1&&o[u].after&&!o[u+1].before&&!o[u+1].after||i[l-1]===u-1&&o[u].before&&!o[u-1].before&&!o[u-1].after||(Q!==u&&a.push(Lh(r.slice(Q,u),"\\")),Q=u,/[!-/:-@[-`{-~]/.test(r.charAt(u))&&(!n.encode||!n.encode.includes(r.charAt(u)))?a.push("\\"):(a.push("&#x"+r.charCodeAt(u).toString(16).toUpperCase()+";"),Q++))}return a.push(Lh(r.slice(Q,s),n.after)),a.join("")}function wE(t,e){return t-e}function Lh(t,e){const n=/\\(?=[!-/:-@[-`{-~])/g,r=[],i=[],a=t+e;let o=-1,l=0,Q;for(;Q=n.exec(a);)r.push(Q.index);for(;++o<r.length;)l!==r[o]&&i.push(t.slice(l,r[o])),i.push("\\"),l=r[o];return i.push(t.slice(l)),i.join("")}function b7(t){const e=t||{},n=e.now||{};let r=e.lineShift||0,i=n.line||1,a=n.column||1;return{move:Q,current:o,shift:l};function o(){return{now:{line:i,column:a},lineShift:r}}function l(s){r+=s}function Q(s){const u=s||"",T=u.split(/\r?\n|\r/g),c=T[T.length-1];return i+=T.length-1,a=T.length===1?a+c.length:1+c.length+r,u}}function SE(){return{enter:{mathFlow:t,mathFlowFenceMeta:e,mathText:a},exit:{mathFlow:i,mathFlowFence:r,mathFlowFenceMeta:n,mathFlowValue:l,mathText:o,mathTextData:l}};function t(Q){this.enter({type:"math",meta:null,value:"",data:{hName:"div",hProperties:{className:["math","math-display"]},hChildren:[{type:"text",value:""}]}},Q)}function e(){this.buffer()}function n(){const Q=this.resume(),s=this.stack[this.stack.length-1];s.meta=Q}function r(){this.getData("mathFlowInside")||(this.buffer(),this.setData("mathFlowInside",!0))}function i(Q){const s=this.resume().replace(/^(\r?\n|\r)|(\r?\n|\r)$/g,""),u=this.exit(Q);u.value=s,u.data.hChildren[0].value=s,this.setData("mathFlowInside")}function a(Q){this.enter({type:"inlineMath",value:"",data:{hName:"span",hProperties:{className:["math","math-inline"]},hChildren:[{type:"text",value:""}]}},Q),this.buffer()}function o(Q){const s=this.resume(),u=this.exit(Q);u.value=s,u.data.hChildren[0].value=s}function l(Q){this.config.enter.data.call(this,Q),this.config.exit.data.call(this,Q)}}function AE(t){let e=(t||{}).singleDollarTextMath;return e==null&&(e=!0),r.peek=i,{unsafe:[{character:"\r",inConstruct:"mathFlowMeta"},{character:`
`,inConstruct:"mathFlowMeta"},{character:"$",after:e?void 0:"\\$",inConstruct:"phrasing"},{character:"$",inConstruct:"mathFlowMeta"},{atBreak:!0,character:"$",after:"\\$"}],handlers:{math:n,inlineMath:r}};function n(a,o,l,Q){const s=a.value||"",u=b7(Q),T="$".repeat(Math.max(ME(s,"$")+1,2)),c=l.enter("mathFlow");let f=u.move(T);if(a.meta){const h=l.enter("mathFlowMeta");f+=u.move(Ou(l,a.meta,{before:f,after:`
`,encode:["$"],...u.current()})),h()}return f+=u.move(`
`),s&&(f+=u.move(s+`
`)),f+=u.move(T),c(),f}function r(a,o,l){let Q=a.value||"",s=1;for(e||s++;new RegExp("(^|[^$])"+"\\$".repeat(s)+"([^$]|$)").test(Q);)s++;const u="$".repeat(s);/[^ \r\n]/.test(Q)&&(/^[ \r\n]/.test(Q)&&/[ \r\n]$/.test(Q)||/^\$|\$$/.test(Q))&&(Q=" "+Q+" ");let T=-1;for(;++T<l.unsafe.length;){const c=l.unsafe[T],f=Du(c);let h;if(c.atBreak)for(;h=f.exec(Q);){let p=h.index;Q.codePointAt(p)===10&&Q.codePointAt(p-1)===13&&p--,Q=Q.slice(0,p)+" "+Q.slice(h.index+1)}}return u+Q+u}function i(){return"$"}}function W5(t={}){const e=this.data();n("micromarkExtensions",wV(t)),n("fromMarkdownExtensions",SE()),n("toMarkdownExtensions",AE(t));function n(r,i){(e[r]?e[r]:e[r]=[]).push(i)}}const U5=function(t){if(t==null)return ku;if(typeof t=="string")return CE(t);if(typeof t=="object")return VE(t);if(typeof t=="function")return kx(t);throw new Error("Expected function, string, or array as test")};function VE(t){const e=[];let n=-1;for(;++n<t.length;)e[n]=U5(t[n]);return kx(r);function r(...i){let a=-1;for(;++a<e.length;)if(e[a].call(this,...i))return!0;return!1}}function CE(t){return e;function e(n){return ku(n)&&n.tagName===t}}function kx(t){return e;function e(n,...r){return ku(n)&&!!t.call(this,n,...r)}}function ku(t){return!!(t&&typeof t=="object"&&t.type==="element"&&typeof t.tagName=="string")}const Hh=function(t,e,n){const r=Z8(n);if(!t||!t.type||!t.children)throw new Error("Expected parent node");if(typeof e=="number"){if(e<0||e===Number.POSITIVE_INFINITY)throw new Error("Expected positive finite number as index")}else if(e=t.children.indexOf(e),e<0)throw new Error("Expected child node or index");for(;++e<t.children.length;)if(r(t.children[e],e,t))return t.children[e];return null},bh=/\n/g,Mh=/[\t ]+/g,MQ=U5("br"),EE=U5("p"),_h=U5(["th","td"]),wh=U5("tr"),DE=U5(["datalist","head","noembed","noframes","noscript","rp","script","style","template","title",BE,PE]),$x=U5(["address","article","aside","blockquote","body","caption","center","dd","dialog","dir","dl","dt","div","figure","figcaption","footer","form,","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","legend","listing","main","menu","nav","ol","p","plaintext","pre","section","ul","xmp"]);function Bx(t,e={}){const n="children"in t?t.children:[],r=$x(t),i=Ix(t,{whitespace:e.whitespace||"normal",breakBefore:!1,breakAfter:!1}),a=[];(t.type==="text"||t.type==="comment")&&a.push(...Nx(t,{whitespace:i,breakBefore:!0,breakAfter:!0}));let o=-1;for(;++o<n.length;)a.push(...Px(n[o],t,{whitespace:i,breakBefore:o?void 0:r,breakAfter:o<n.length-1?MQ(n[o+1]):r}));const l=[];let Q;for(o=-1;++o<a.length;){const s=a[o];typeof s=="number"?Q!==void 0&&s>Q&&(Q=s):s&&(Q!==void 0&&Q>-1&&l.push(`
`.repeat(Q)||" "),Q=-1,l.push(s))}return l.join("")}function Px(t,e,n){return t.type==="element"?OE(t,e,n):t.type==="text"?n.whitespace==="normal"?Nx(t,n):kE(t):[]}function OE(t,e,n){const r=Ix(t,n),i=t.children||[];let a=-1,o=[];if(DE(t))return o;let l,Q;for(MQ(t)||wh(t)&&Hh(e,t,wh)?Q=`
`:EE(t)?(l=2,Q=2):$x(t)&&(l=1,Q=1);++a<i.length;)o=o.concat(Px(i[a],t,{whitespace:r,breakBefore:a?void 0:l,breakAfter:a<i.length-1?MQ(i[a+1]):Q}));return _h(t)&&Hh(e,t,_h)&&o.push("	"),l&&o.unshift(l),Q&&o.push(Q),o}function Nx(t,e){const n=String(t.value),r=[],i=[];let a=0;for(;a<=n.length;){bh.lastIndex=a;const Q=bh.exec(n),s=Q&&"index"in Q?Q.index:n.length;r.push($E(n.slice(a,s).replace(/[\u061C\u200E\u200F\u202A-\u202E\u2066-\u2069]/g,""),a===0?e.breakBefore:!0,s===n.length?e.breakAfter:!0)),a=s+1}let o=-1,l;for(;++o<r.length;)r[o].charCodeAt(r[o].length-1)===8203||o<r.length-1&&r[o+1].charCodeAt(0)===8203?(i.push(r[o]),l=void 0):r[o]?(typeof l=="number"&&i.push(l),i.push(r[o]),l=0):(o===0||o===r.length-1)&&i.push(0);return i}function kE(t){return[String(t.value)]}function $E(t,e,n){const r=[];let i=0,a;for(;i<t.length;){Mh.lastIndex=i;const o=Mh.exec(t);a=o?o.index:t.length,!i&&!a&&o&&!e&&r.push(""),i!==a&&r.push(t.slice(i,a)),i=o?a+o[0].length:a}return i!==a&&!n&&r.push(""),r.join(" ")}function Ix(t,e){if(t.type==="element"){const n=t.properties||{};switch(t.tagName){case"listing":case"plaintext":case"xmp":return"pre";case"nobr":return"nowrap";case"pre":return n.wrap?"pre-wrap":"pre";case"td":case"th":return n.noWrap?"nowrap":e.whitespace;case"textarea":return"pre-wrap"}}return e.whitespace}function BE(t){return!!(t.properties||{}).hidden}function PE(t){return t.tagName==="dialog"&&!(t.properties||{}).open}const vo={html:"http://www.w3.org/1999/xhtml",mathml:"http://www.w3.org/1998/Math/MathML",svg:"http://www.w3.org/2000/svg",xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace",xmlns:"http://www.w3.org/2000/xmlns/"},Sh=/[#.]/g;function NE(t,e){const n=t||"",r={};let i=0,a,o;for(;i<n.length;){Sh.lastIndex=i;const l=Sh.exec(n),Q=n.slice(i,l?l.index:n.length);Q&&(a?a==="#"?r.id=Q:Array.isArray(r.className)?r.className.push(Q):r.className=[Q]:o=Q,i+=Q.length),l&&(a=l[0],i++)}return{type:"element",tagName:o||e||"div",properties:r,children:[]}}const IE=new Set(["menu","submit","reset","button"]),_Q={}.hasOwnProperty;function jx(t,e,n){const r=n&&zE(n);return function(a,o,...l){let Q=-1,s;if(a==null)s={type:"root",children:[]},l.unshift(o);else if(s=NE(a,e),s.tagName=s.tagName.toLowerCase(),r&&_Q.call(r,s.tagName)&&(s.tagName=r[s.tagName]),jE(o,s.tagName)){let u;for(u in o)_Q.call(o,u)&&FE(t,s.properties,u,o[u])}else l.unshift(o);for(;++Q<l.length;)wQ(s.children,l[Q]);return s.type==="element"&&s.tagName==="template"&&(s.content={type:"root",children:s.children},s.children=[]),s}}function jE(t,e){return t==null||typeof t!="object"||Array.isArray(t)?!1:e==="input"||!t.type||typeof t.type!="string"?!0:"children"in t&&Array.isArray(t.children)?!1:e==="button"?IE.has(t.type.toLowerCase()):!("value"in t)}function FE(t,e,n,r){const i=Eg(t,n);let a=-1,o;if(r!=null){if(typeof r=="number"){if(Number.isNaN(r))return;o=r}else typeof r=="boolean"?o=r:typeof r=="string"?i.spaceSeparated?o=Ef(r):i.commaSeparated?o=Df(r):i.commaOrSpaceSeparated?o=Ef(Df(r).join(" ")):o=Ah(i,i.property,r):Array.isArray(r)?o=r.concat():o=i.property==="style"?RE(r):String(r);if(Array.isArray(o)){const l=[];for(;++a<o.length;)l[a]=Ah(i,i.property,o[a]);o=l}i.property==="className"&&Array.isArray(e.className)&&(o=e.className.concat(o)),e[i.property]=o}}function wQ(t,e){let n=-1;if(e!=null)if(typeof e=="string"||typeof e=="number")t.push({type:"text",value:String(e)});else if(Array.isArray(e))for(;++n<e.length;)wQ(t,e[n]);else if(typeof e=="object"&&"type"in e)e.type==="root"?wQ(t,e.children):t.push(e);else throw new Error("Expected node, nodes, or string, got `"+e+"`")}function Ah(t,e,n){if(typeof n=="string"){if(t.number&&n&&!Number.isNaN(Number(n)))return Number(n);if((t.boolean||t.overloadedBoolean)&&(n===""||Y0(n)===Y0(e)))return!0}return n}function RE(t){const e=[];let n;for(n in t)_Q.call(t,n)&&e.push([n,t[n]].join(": "));return e.join("; ")}function zE(t){const e={};let n=-1;for(;++n<t.length;)e[t[n].toLowerCase()]=t[n];return e}const qE=jx(Dg,"div"),ZE=["altGlyph","altGlyphDef","altGlyphItem","animateColor","animateMotion","animateTransform","clipPath","feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feDropShadow","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence","foreignObject","glyphRef","linearGradient","radialGradient","solidColor","textArea","textPath"],GE=jx(Og,"g",ZE);function Fx(t,e){return(t?Rx(t,e||{}):void 0)||{type:"root",children:[]}}function Rx(t,e){const n=XE(t,e);return n&&e.afterTransform&&e.afterTransform(t,n),n}function XE(t,e){switch(t.nodeType){case 1:return YE(t,e);case 3:return UE(t);case 8:return KE(t);case 9:return Vh(t,e);case 10:return WE();case 11:return Vh(t,e);default:return}}function Vh(t,e){return{type:"root",children:zx(t,e)}}function WE(){return{type:"doctype"}}function UE(t){return{type:"text",value:t.nodeValue||""}}function KE(t){return{type:"comment",value:t.nodeValue||""}}function YE(t,e){const n=t.namespaceURI,r=n===vo.svg?GE:qE,i=n===vo.html?t.tagName.toLowerCase():t.tagName,a=n===vo.html&&i==="template"?t.content:t,o=t.getAttributeNames(),l={};let Q=-1;for(;++Q<o.length;)l[o[Q]]=t.getAttribute(o[Q])||"";return r(i,l,zx(a,e))}function zx(t,e){const n=t.childNodes,r=[];let i=-1;for(;++i<n.length;){const a=Rx(n[i],e);a!==void 0&&r.push(a)}return r}const JE=new DOMParser;function tD(t,e){const n=e!=null&&e.fragment?eD(t):JE.parseFromString(t,"text/html");return Fx(n)}function eD(t){const e=document.createElement("template");return e.innerHTML=t,e.content}const Ch=Object.assign,nD="rehype-katex";function ce(t){const e=t||{},n=e.throwOnError||!1;return(r,i)=>{y7(r,"element",a=>{const o=a.properties&&Array.isArray(a.properties.className)?a.properties.className:[],l=o.includes("math-inline"),Q=o.includes("math-display");if(!l&&!Q)return;const s=Bx(a,{whitespace:"pre"});let u;try{u=gh.renderToString(s,Ch({},e,{displayMode:Q,throwOnError:!0}))}catch(c){const f=c,h=n?"fail":"message",p=[nD,f.name.toLowerCase()].join(":");if(i[h](f.message,a.position,p),f.name!=="ParseError"){a.children=[{type:"element",tagName:"span",properties:{className:["katex-error"],title:String(f),style:"color:"+(e.errorColor||"#cc0000")},children:[{type:"text",value:s}]}];return}u=gh.renderToString(s,Ch({},e,{displayMode:Q,throwOnError:!1,strict:"ignore"}))}const T=tD(u,{fragment:!0});a.children=T.children})}}var yo={},u9={},M7={},R2={};(function(t){var e=g&&g.__values||function(m){var y=typeof Symbol=="function"&&Symbol.iterator,x=y&&m[y],L=0;if(x)return x.call(m);if(m&&typeof m.length=="number")return{next:function(){return m&&L>=m.length&&(m=void 0),{value:m&&m[L++],done:!m}}};throw new TypeError(y?"Object is not iterable.":"Symbol.iterator is not defined.")},n=g&&g.__read||function(m,y){var x=typeof Symbol=="function"&&m[Symbol.iterator];if(!x)return m;var L=x.call(m),H,M=[],w;try{for(;(y===void 0||y-- >0)&&!(H=L.next()).done;)M.push(H.value)}catch(S){w={error:S}}finally{try{H&&!H.done&&(x=L.return)&&x.call(L)}finally{if(w)throw w.error}}return M},r=g&&g.__spreadArray||function(m,y,x){if(x||arguments.length===2)for(var L=0,H=y.length,M;L<H;L++)(M||!(L in y))&&(M||(M=Array.prototype.slice.call(y,0,L)),M[L]=y[L]);return m.concat(M||Array.prototype.slice.call(y))};Object.defineProperty(t,"__esModule",{value:!0}),t.lookup=t.separateOptions=t.selectOptionsFromKeys=t.selectOptions=t.userOptions=t.defaultOptions=t.insert=t.copy=t.keys=t.makeArray=t.expandable=t.Expandable=t.OPTIONS=t.REMOVE=t.APPEND=t.isObject=void 0;var i={}.constructor;function a(m){return typeof m=="object"&&m!==null&&(m.constructor===i||m.constructor===o)}t.isObject=a,t.APPEND="[+]",t.REMOVE="[-]",t.OPTIONS={invalidOption:"warn",optionError:function(m,y){if(t.OPTIONS.invalidOption==="fatal")throw new Error(m);console.warn("MathJax: "+m)}};var o=function(){function m(){}return m}();t.Expandable=o;function l(m){return Object.assign(Object.create(o.prototype),m)}t.expandable=l;function Q(m){return Array.isArray(m)?m:[m]}t.makeArray=Q;function s(m){return m?Object.keys(m).concat(Object.getOwnPropertySymbols(m)):[]}t.keys=s;function u(m){var y,x,L={};try{for(var H=e(s(m)),M=H.next();!M.done;M=H.next()){var w=M.value,S=Object.getOwnPropertyDescriptor(m,w),D=S.value;Array.isArray(D)?S.value=T([],D,!1):a(D)&&(S.value=u(D)),S.enumerable&&(L[w]=S)}}catch(E){y={error:E}}finally{try{M&&!M.done&&(x=H.return)&&x.call(H)}finally{if(y)throw y.error}}return Object.defineProperties(m.constructor===o?l({}):{},L)}t.copy=u;function T(m,y,x){var L,H;x===void 0&&(x=!0);var M=function(E){if(x&&m[E]===void 0&&m.constructor!==o)return typeof E=="symbol"&&(E=E.toString()),t.OPTIONS.optionError('Invalid option "'.concat(E,'" (no default value).'),E),"continue";var $=y[E],j=m[E];if(a($)&&j!==null&&(typeof j=="object"||typeof j=="function")){var G=s($);Array.isArray(j)&&(G.length===1&&(G[0]===t.APPEND||G[0]===t.REMOVE)&&Array.isArray($[G[0]])||G.length===2&&G.sort().join(",")===t.APPEND+","+t.REMOVE&&Array.isArray($[t.APPEND])&&Array.isArray($[t.REMOVE]))?($[t.REMOVE]&&(j=m[E]=j.filter(function(X){return $[t.REMOVE].indexOf(X)<0})),$[t.APPEND]&&(m[E]=r(r([],n(j),!1),n($[t.APPEND]),!1))):T(j,$,x)}else Array.isArray($)?(m[E]=[],T(m[E],$,!1)):a($)?m[E]=u($):m[E]=$};try{for(var w=e(s(y)),S=w.next();!S.done;S=w.next()){var D=S.value;M(D)}}catch(E){L={error:E}}finally{try{S&&!S.done&&(H=w.return)&&H.call(w)}finally{if(L)throw L.error}}return m}t.insert=T;function c(m){for(var y=[],x=1;x<arguments.length;x++)y[x-1]=arguments[x];return y.forEach(function(L){return T(m,L,!1)}),m}t.defaultOptions=c;function f(m){for(var y=[],x=1;x<arguments.length;x++)y[x-1]=arguments[x];return y.forEach(function(L){return T(m,L,!0)}),m}t.userOptions=f;function h(m){for(var y,x,L=[],H=1;H<arguments.length;H++)L[H-1]=arguments[H];var M={};try{for(var w=e(L),S=w.next();!S.done;S=w.next()){var D=S.value;m.hasOwnProperty(D)&&(M[D]=m[D])}}catch(E){y={error:E}}finally{try{S&&!S.done&&(x=w.return)&&x.call(w)}finally{if(y)throw y.error}}return M}t.selectOptions=h;function p(m,y){return h.apply(void 0,r([m],n(Object.keys(y)),!1))}t.selectOptionsFromKeys=p;function v(m){for(var y,x,L,H,M=[],w=1;w<arguments.length;w++)M[w-1]=arguments[w];var S=[];try{for(var D=e(M),E=D.next();!E.done;E=D.next()){var $=E.value,j={},G={};try{for(var X=(L=void 0,e(Object.keys(m||{}))),P=X.next();!P.done;P=X.next()){var v1=P.value;($[v1]===void 0?G:j)[v1]=m[v1]}}catch(q){L={error:q}}finally{try{P&&!P.done&&(H=X.return)&&H.call(X)}finally{if(L)throw L.error}}S.push(j),m=G}}catch(q){y={error:q}}finally{try{E&&!E.done&&(x=D.return)&&x.call(D)}finally{if(y)throw y.error}}return S.unshift(m),S}t.separateOptions=v;function d(m,y,x){return x===void 0&&(x=null),y.hasOwnProperty(m)?y[m]:x}t.lookup=d})(R2);var K5={},o5={};Object.defineProperty(o5,"__esModule",{value:!0});o5.PrioritizedList=void 0;var rD=function(){function t(){this.items=[],this.items=[]}return t.prototype[Symbol.iterator]=function(){var e=0,n=this.items;return{next:function(){return{value:n[e++],done:e>n.length}}}},t.prototype.add=function(e,n){n===void 0&&(n=t.DEFAULTPRIORITY);var r=this.items.length;do r--;while(r>=0&&n<this.items[r].priority);return this.items.splice(r+1,0,{item:e,priority:n}),e},t.prototype.remove=function(e){var n=this.items.length;do n--;while(n>=0&&this.items[n].item!==e);n>=0&&this.items.splice(n,1)},t.DEFAULTPRIORITY=5,t}();o5.PrioritizedList=rD;var iD=g&&g.__extends||function(){var t=function(e,n){return t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(r,i){r.__proto__=i}||function(r,i){for(var a in i)Object.prototype.hasOwnProperty.call(i,a)&&(r[a]=i[a])},t(e,n)};return function(e,n){if(typeof n!="function"&&n!==null)throw new TypeError("Class extends value "+String(n)+" is not a constructor or null");t(e,n);function r(){this.constructor=e}e.prototype=n===null?Object.create(n):(r.prototype=n.prototype,new r)}}(),aD=g&&g.__values||function(t){var e=typeof Symbol=="function"&&Symbol.iterator,n=e&&t[e],r=0;if(n)return n.call(t);if(t&&typeof t.length=="number")return{next:function(){return t&&r>=t.length&&(t=void 0),{value:t&&t[r++],done:!t}}};throw new TypeError(e?"Object is not iterable.":"Symbol.iterator is not defined.")},Eh=g&&g.__read||function(t,e){var n=typeof Symbol=="function"&&t[Symbol.iterator];if(!n)return t;var r=n.call(t),i,a=[],o;try{for(;(e===void 0||e-- >0)&&!(i=r.next()).done;)a.push(i.value)}catch(l){o={error:l}}finally{try{i&&!i.done&&(n=r.return)&&n.call(r)}finally{if(o)throw o.error}}return a},Dh=g&&g.__spreadArray||function(t,e,n){if(n||arguments.length===2)for(var r=0,i=e.length,a;r<i;r++)(a||!(r in e))&&(a||(a=Array.prototype.slice.call(e,0,r)),a[r]=e[r]);return t.concat(a||Array.prototype.slice.call(e))};Object.defineProperty(K5,"__esModule",{value:!0});K5.FunctionList=void 0;var oD=o5,lD=function(t){iD(e,t);function e(){return t!==null&&t.apply(this,arguments)||this}return e.prototype.execute=function(){for(var n,r,i=[],a=0;a<arguments.length;a++)i[a]=arguments[a];try{for(var o=aD(this),l=o.next();!l.done;l=o.next()){var Q=l.value,s=Q.item.apply(Q,Dh([],Eh(i),!1));if(s===!1)return!1}}catch(u){n={error:u}}finally{try{l&&!l.done&&(r=o.return)&&r.call(o)}finally{if(n)throw n.error}}return!0},e.prototype.asyncExecute=function(){for(var n=[],r=0;r<arguments.length;r++)n[r]=arguments[r];var i=-1,a=this.items;return new Promise(function(o,l){(function Q(){for(var s;++i<a.length;){var u=(s=a[i]).item.apply(s,Dh([],Eh(n),!1));if(u instanceof Promise){u.then(Q).catch(function(T){return l(T)});return}if(u===!1){o(!1);return}}o(!0)})()})},e}(oD.PrioritizedList);K5.FunctionList=lD;Object.defineProperty(M7,"__esModule",{value:!0});M7.AbstractOutputJax=void 0;var Oh=R2,QD=K5,sD=function(){function t(e){e===void 0&&(e={}),this.adaptor=null;var n=this.constructor;this.options=(0,Oh.userOptions)((0,Oh.defaultOptions)({},n.OPTIONS),e),this.postFilters=new QD.FunctionList}return Object.defineProperty(t.prototype,"name",{get:function(){return this.constructor.NAME},enumerable:!1,configurable:!0}),t.prototype.setAdaptor=function(e){this.adaptor=e},t.prototype.initialize=function(){},t.prototype.reset=function(){},t.prototype.getMetrics=function(e){},t.prototype.styleSheet=function(e){return null},t.prototype.pageElements=function(e){return null},t.prototype.executeFilters=function(e,n,r,i){var a={math:n,document:r,data:i};return e.execute(a),a.data},t.NAME="generic",t.OPTIONS={},t}();M7.AbstractOutputJax=sD;var fe={};(function(t){Object.defineProperty(t,"__esModule",{value:!0}),t.newState=t.STATE=t.AbstractMathItem=t.protoItem=void 0;function e(i,a,o,l,Q,s,u){u===void 0&&(u=null);var T={open:i,math:a,close:o,n:l,start:{n:Q},end:{n:s},display:u};return T}t.protoItem=e;var n=function(){function i(a,o,l,Q,s){l===void 0&&(l=!0),Q===void 0&&(Q={i:0,n:0,delim:""}),s===void 0&&(s={i:0,n:0,delim:""}),this.root=null,this.typesetRoot=null,this.metrics={},this.inputData={},this.outputData={},this._state=t.STATE.UNPROCESSED,this.math=a,this.inputJax=o,this.display=l,this.start=Q,this.end=s,this.root=null,this.typesetRoot=null,this.metrics={},this.inputData={},this.outputData={}}return Object.defineProperty(i.prototype,"isEscaped",{get:function(){return this.display===null},enumerable:!1,configurable:!0}),i.prototype.render=function(a){a.renderActions.renderMath(this,a)},i.prototype.rerender=function(a,o){o===void 0&&(o=t.STATE.RERENDER),this.state()>=o&&this.state(o-1),a.renderActions.renderMath(this,a,o)},i.prototype.convert=function(a,o){o===void 0&&(o=t.STATE.LAST),a.renderActions.renderConvert(this,a,o)},i.prototype.compile=function(a){this.state()<t.STATE.COMPILED&&(this.root=this.inputJax.compile(this,a),this.state(t.STATE.COMPILED))},i.prototype.typeset=function(a){this.state()<t.STATE.TYPESET&&(this.typesetRoot=a.outputJax[this.isEscaped?"escaped":"typeset"](this,a),this.state(t.STATE.TYPESET))},i.prototype.updateDocument=function(a){},i.prototype.removeFromDocument=function(a){},i.prototype.setMetrics=function(a,o,l,Q,s){this.metrics={em:a,ex:o,containerWidth:l,lineWidth:Q,scale:s}},i.prototype.state=function(a,o){return a===void 0&&(a=null),o===void 0&&(o=!1),a!=null&&(a<t.STATE.INSERTED&&this._state>=t.STATE.INSERTED&&this.removeFromDocument(o),a<t.STATE.TYPESET&&this._state>=t.STATE.TYPESET&&(this.outputData={}),a<t.STATE.COMPILED&&this._state>=t.STATE.COMPILED&&(this.inputData={}),this._state=a),this._state},i.prototype.reset=function(a){a===void 0&&(a=!1),this.state(t.STATE.UNPROCESSED,a)},i}();t.AbstractMathItem=n,t.STATE={UNPROCESSED:0,FINDMATH:10,COMPILED:20,CONVERT:100,METRICS:110,RERENDER:125,TYPESET:150,INSERTED:200,LAST:1e4};function r(i,a){if(i in t.STATE)throw Error("State "+i+" already exists");t.STATE[i]=a}t.newState=r})(fe);var O4={};(function(t){Object.defineProperty(t,"__esModule",{value:!0}),t.px=t.emRounded=t.em=t.percent=t.length2em=t.MATHSPACE=t.RELUNITS=t.UNITS=t.BIGDIMEN=void 0,t.BIGDIMEN=1e6,t.UNITS={px:1,in:96,cm:96/2.54,mm:96/25.4},t.RELUNITS={em:1,ex:.431,pt:1/10,pc:12/10,mu:1/18},t.MATHSPACE={veryverythinmathspace:1/18,verythinmathspace:2/18,thinmathspace:3/18,mediummathspace:4/18,thickmathspace:5/18,verythickmathspace:6/18,veryverythickmathspace:7/18,negativeveryverythinmathspace:-1/18,negativeverythinmathspace:-2/18,negativethinmathspace:-3/18,negativemediummathspace:-4/18,negativethickmathspace:-5/18,negativeverythickmathspace:-6/18,negativeveryverythickmathspace:-7/18,thin:.04,medium:.06,thick:.1,normal:1,big:2,small:1/Math.sqrt(2),infinity:t.BIGDIMEN};function e(o,l,Q,s){if(l===void 0&&(l=0),Q===void 0&&(Q=1),s===void 0&&(s=16),typeof o!="string"&&(o=String(o)),o===""||o==null)return l;if(t.MATHSPACE[o])return t.MATHSPACE[o];var u=o.match(/^\s*([-+]?(?:\.\d+|\d+(?:\.\d*)?))?(pt|em|ex|mu|px|pc|in|mm|cm|%)?/);if(!u)return l;var T=parseFloat(u[1]||"1"),c=u[2];return t.UNITS.hasOwnProperty(c)?T*t.UNITS[c]/s/Q:t.RELUNITS.hasOwnProperty(c)?T*t.RELUNITS[c]:c==="%"?T/100*l:T*l}t.length2em=e;function n(o){return(100*o).toFixed(1).replace(/\.?0+$/,"")+"%"}t.percent=n;function r(o){return Math.abs(o)<.001?"0":o.toFixed(3).replace(/\.?0+$/,"")+"em"}t.em=r;function i(o,l){return l===void 0&&(l=16),o=(Math.round(o*l)+.05)/l,Math.abs(o)<.001?"0em":o.toFixed(3).replace(/\.?0+$/,"")+"em"}t.emRounded=i;function a(o,l,Q){return l===void 0&&(l=-t.BIGDIMEN),Q===void 0&&(Q=16),o*=Q,l&&o<l&&(o=l),Math.abs(o)<.1?"0":o.toFixed(1).replace(/\.0$/,"")+"px"}t.px=a})(O4);var _7={},G3=g&&g.__values||function(t){var e=typeof Symbol=="function"&&Symbol.iterator,n=e&&t[e],r=0;if(n)return n.call(t);if(t&&typeof t.length=="number")return{next:function(){return t&&r>=t.length&&(t=void 0),{value:t&&t[r++],done:!t}}};throw new TypeError(e?"Object is not iterable.":"Symbol.iterator is not defined.")},$u=g&&g.__read||function(t,e){var n=typeof Symbol=="function"&&t[Symbol.iterator];if(!n)return t;var r=n.call(t),i,a=[],o;try{for(;(e===void 0||e-- >0)&&!(i=r.next()).done;)a.push(i.value)}catch(l){o={error:l}}finally{try{i&&!i.done&&(n=r.return)&&n.call(r)}finally{if(o)throw o.error}}return a},uD=g&&g.__spreadArray||function(t,e,n){if(n||arguments.length===2)for(var r=0,i=e.length,a;r<i;r++)(a||!(r in e))&&(a||(a=Array.prototype.slice.call(e,0,r)),a[r]=e[r]);return t.concat(a||Array.prototype.slice.call(e))};Object.defineProperty(_7,"__esModule",{value:!0});_7.Styles=void 0;var ke=["top","right","bottom","left"],Dn=["width","style","color"];function Bu(t){for(var e=t.split(/((?:'[^']*'|"[^"]*"|,[\s\n]|[^\s\n])*)/g),n=[];e.length>1;)e.shift(),n.push(e.shift());return n}function On(t){var e,n,r=Bu(this.styles[t]);r.length===0&&r.push(""),r.length===1&&r.push(r[0]),r.length===2&&r.push(r[0]),r.length===3&&r.push(r[1]);try{for(var i=G3(l5.connect[t].children),a=i.next();!a.done;a=i.next()){var o=a.value;this.setStyle(this.childName(t,o),r.shift())}}catch(l){e={error:l}}finally{try{a&&!a.done&&(n=i.return)&&n.call(i)}finally{if(e)throw e.error}}}function TD(t){var e,n,r=l5.connect[t].children,i=[];try{for(var a=G3(r),o=a.next();!o.done;o=a.next()){var l=o.value,Q=this.styles[t+"-"+l];if(!Q){delete this.styles[t];return}i.push(Q)}}catch(s){e={error:s}}finally{try{o&&!o.done&&(n=a.return)&&n.call(a)}finally{if(e)throw e.error}}i[3]===i[1]&&(i.pop(),i[2]===i[0]&&(i.pop(),i[1]===i[0]&&i.pop())),this.styles[t]=i.join(" ")}function cD(t){var e,n;try{for(var r=G3(l5.connect[t].children),i=r.next();!i.done;i=r.next()){var a=i.value;this.setStyle(this.childName(t,a),this.styles[t])}}catch(o){e={error:o}}finally{try{i&&!i.done&&(n=r.return)&&n.call(r)}finally{if(e)throw e.error}}}function fD(t){var e,n,r=uD([],$u(l5.connect[t].children),!1),i=this.styles[this.childName(t,r.shift())];try{for(var a=G3(r),o=a.next();!o.done;o=a.next()){var l=o.value;if(this.styles[this.childName(t,l)]!==i){delete this.styles[t];return}}}catch(Q){e={error:Q}}finally{try{o&&!o.done&&(n=a.return)&&n.call(a)}finally{if(e)throw e.error}}this.styles[t]=i}var kh={width:/^(?:[\d.]+(?:[a-z]+)|thin|medium|thick|inherit|initial|unset)$/,style:/^(?:none|hidden|dotted|dashed|solid|double|groove|ridge|inset|outset|inherit|initial|unset)$/};function kn(t){var e,n,r,i,a={width:"",style:"",color:""};try{for(var o=G3(Bu(this.styles[t])),l=o.next();!l.done;l=o.next()){var Q=l.value;Q.match(kh.width)&&a.width===""?a.width=Q:Q.match(kh.style)&&a.style===""?a.style=Q:a.color=Q}}catch(c){e={error:c}}finally{try{l&&!l.done&&(n=o.return)&&n.call(o)}finally{if(e)throw e.error}}try{for(var s=G3(l5.connect[t].children),u=s.next();!u.done;u=s.next()){var T=u.value;this.setStyle(this.childName(t,T),a[T])}}catch(c){r={error:c}}finally{try{u&&!u.done&&(i=s.return)&&i.call(s)}finally{if(r)throw r.error}}}function $n(t){var e,n,r=[];try{for(var i=G3(l5.connect[t].children),a=i.next();!a.done;a=i.next()){var o=a.value,l=this.styles[this.childName(t,o)];l&&r.push(l)}}catch(Q){e={error:Q}}finally{try{a&&!a.done&&(n=i.return)&&n.call(i)}finally{if(e)throw e.error}}r.length?this.styles[t]=r.join(" "):delete this.styles[t]}var $h={style:/^(?:normal|italic|oblique|inherit|initial|unset)$/,variant:new RegExp("^(?:"+["normal|none","inherit|initial|unset","common-ligatures|no-common-ligatures","discretionary-ligatures|no-discretionary-ligatures","historical-ligatures|no-historical-ligatures","contextual|no-contextual","(?:stylistic|character-variant|swash|ornaments|annotation)\\([^)]*\\)","small-caps|all-small-caps|petite-caps|all-petite-caps|unicase|titling-caps","lining-nums|oldstyle-nums|proportional-nums|tabular-nums","diagonal-fractions|stacked-fractions","ordinal|slashed-zero","jis78|jis83|jis90|jis04|simplified|traditional","full-width|proportional-width","ruby"].join("|")+")$"),weight:/^(?:normal|bold|bolder|lighter|[1-9]00|inherit|initial|unset)$/,stretch:new RegExp("^(?:"+["normal","(?:(?:ultra|extra|semi)-)?condensed","(?:(?:semi|extra|ulta)-)?expanded","inherit|initial|unset"].join("|")+")$"),size:new RegExp("^(?:"+["xx-small|x-small|small|medium|large|x-large|xx-large|larger|smaller","[d.]+%|[d.]+[a-z]+","inherit|initial|unset"].join("|")+")(?:/(?:normal|[d.+](?:%|[a-z]+)?))?$")};function hD(t){var e,n,r,i,a=Bu(this.styles[t]),o={style:"",variant:[],weight:"",stretch:"",size:"",family:"","line-height":""};try{for(var l=G3(a),Q=l.next();!Q.done;Q=l.next()){var s=Q.value;o.family=s;try{for(var u=(r=void 0,G3(Object.keys($h))),T=u.next();!T.done;T=u.next()){var c=T.value;if((Array.isArray(o[c])||o[c]==="")&&s.match($h[c]))if(c==="size"){var f=$u(s.split(/\//),2),h=f[0],p=f[1];o[c]=h,p&&(o["line-height"]=p)}else o.size===""&&(Array.isArray(o[c])?o[c].push(s):o[c]=s)}}catch(v){r={error:v}}finally{try{T&&!T.done&&(i=u.return)&&i.call(u)}finally{if(r)throw r.error}}}}catch(v){e={error:v}}finally{try{Q&&!Q.done&&(n=l.return)&&n.call(l)}finally{if(e)throw e.error}}dD(t,o),delete this.styles[t]}function dD(t,e){var n,r;try{for(var i=G3(l5.connect[t].children),a=i.next();!a.done;a=i.next()){var o=a.value,l=this.childName(t,o);if(Array.isArray(e[o])){var Q=e[o];Q.length&&(this.styles[l]=Q.join(" "))}else e[o]!==""&&(this.styles[l]=e[o])}}catch(s){n={error:s}}finally{try{a&&!a.done&&(r=i.return)&&r.call(i)}finally{if(n)throw n.error}}}function pD(t){}var l5=function(){function t(e){e===void 0&&(e=""),this.parse(e)}return Object.defineProperty(t.prototype,"cssText",{get:function(){var e,n,r=[];try{for(var i=G3(Object.keys(this.styles)),a=i.next();!a.done;a=i.next()){var o=a.value,l=this.parentName(o);this.styles[l]||r.push(o+": "+this.styles[o]+";")}}catch(Q){e={error:Q}}finally{try{a&&!a.done&&(n=i.return)&&n.call(i)}finally{if(e)throw e.error}}return r.join(" ")},enumerable:!1,configurable:!0}),t.prototype.set=function(e,n){for(e=this.normalizeName(e),this.setStyle(e,n),t.connect[e]&&!t.connect[e].combine&&(this.combineChildren(e),delete this.styles[e]);e.match(/-/)&&(e=this.parentName(e),!!t.connect[e]);)t.connect[e].combine.call(this,e)},t.prototype.get=function(e){return e=this.normalizeName(e),this.styles.hasOwnProperty(e)?this.styles[e]:""},t.prototype.setStyle=function(e,n){this.styles[e]=n,t.connect[e]&&t.connect[e].children&&t.connect[e].split.call(this,e),n===""&&delete this.styles[e]},t.prototype.combineChildren=function(e){var n,r,i=this.parentName(e);try{for(var a=G3(t.connect[e].children),o=a.next();!o.done;o=a.next()){var l=o.value,Q=this.childName(i,l);t.connect[Q].combine.call(this,Q)}}catch(s){n={error:s}}finally{try{o&&!o.done&&(r=a.return)&&r.call(a)}finally{if(n)throw n.error}}},t.prototype.parentName=function(e){var n=e.replace(/-[^-]*$/,"");return e===n?"":n},t.prototype.childName=function(e,n){return n.match(/-/)?n:(t.connect[e]&&!t.connect[e].combine&&(n+=e.replace(/.*-/,"-"),e=this.parentName(e)),e+"-"+n)},t.prototype.normalizeName=function(e){return e.replace(/[A-Z]/g,function(n){return"-"+n.toLowerCase()})},t.prototype.parse=function(e){e===void 0&&(e="");var n=this.constructor.pattern;this.styles={};for(var r=e.replace(n.comment,"").split(n.style);r.length>1;){var i=$u(r.splice(0,3),3),a=i[0],o=i[1],l=i[2];if(a.match(/[^\s\n]/))return;this.set(o,l)}},t.pattern={style:/([-a-z]+)[\s\n]*:[\s\n]*((?:'[^']*'|"[^"]*"|\n|.)*?)[\s\n]*(?:;|$)/g,comment:/\/\*[^]*?\*\//g},t.connect={padding:{children:ke,split:On,combine:TD},border:{children:ke,split:cD,combine:fD},"border-top":{children:Dn,split:kn,combine:$n},"border-right":{children:Dn,split:kn,combine:$n},"border-bottom":{children:Dn,split:kn,combine:$n},"border-left":{children:Dn,split:kn,combine:$n},"border-width":{children:ke,split:On,combine:null},"border-style":{children:ke,split:On,combine:null},"border-color":{children:ke,split:On,combine:null},font:{children:["style","variant","weight","stretch","line-height","size","family"],split:hD,combine:pD}},t}();_7.Styles=l5;var T9={},Bn=g&&g.__values||function(t){var e=typeof Symbol=="function"&&Symbol.iterator,n=e&&t[e],r=0;if(n)return n.call(t);if(t&&typeof t.length=="number")return{next:function(){return t&&r>=t.length&&(t=void 0),{value:t&&t[r++],done:!t}}};throw new TypeError(e?"Object is not iterable.":"Symbol.iterator is not defined.")};Object.defineProperty(T9,"__esModule",{value:!0});T9.CssStyles=void 0;var mD=function(){function t(e){e===void 0&&(e=null),this.styles={},this.addStyles(e)}return Object.defineProperty(t.prototype,"cssText",{get:function(){return this.getStyleString()},enumerable:!1,configurable:!0}),t.prototype.addStyles=function(e){var n,r;if(e)try{for(var i=Bn(Object.keys(e)),a=i.next();!a.done;a=i.next()){var o=a.value;this.styles[o]||(this.styles[o]={}),Object.assign(this.styles[o],e[o])}}catch(l){n={error:l}}finally{try{a&&!a.done&&(r=i.return)&&r.call(i)}finally{if(n)throw n.error}}},t.prototype.removeStyles=function(){for(var e,n,r=[],i=0;i<arguments.length;i++)r[i]=arguments[i];try{for(var a=Bn(r),o=a.next();!o.done;o=a.next()){var l=o.value;delete this.styles[l]}}catch(Q){e={error:Q}}finally{try{o&&!o.done&&(n=a.return)&&n.call(a)}finally{if(e)throw e.error}}},t.prototype.clear=function(){this.styles={}},t.prototype.getStyleString=function(){return this.getStyleRules().join(`

`)},t.prototype.getStyleRules=function(){var e,n,r=Object.keys(this.styles),i=new Array(r.length),a=0;try{for(var o=Bn(r),l=o.next();!l.done;l=o.next()){var Q=l.value;i[a++]=Q+` {
`+this.getStyleDefString(this.styles[Q])+`
}`}}catch(s){e={error:s}}finally{try{l&&!l.done&&(n=o.return)&&n.call(o)}finally{if(e)throw e.error}}return i},t.prototype.getStyleDefString=function(e){var n,r,i=Object.keys(e),a=new Array(i.length),o=0;try{for(var l=Bn(i),Q=l.next();!Q.done;Q=l.next()){var s=Q.value;a[o++]="  "+s+": "+e[s]+";"}}catch(u){n={error:u}}finally{try{Q&&!Q.done&&(r=l.return)&&r.call(l)}finally{if(n)throw n.error}}return a.join(`
`)},t}();T9.CssStyles=mD;var vD=g&&g.__extends||function(){var t=function(e,n){return t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(r,i){r.__proto__=i}||function(r,i){for(var a in i)Object.prototype.hasOwnProperty.call(i,a)&&(r[a]=i[a])},t(e,n)};return function(e,n){if(typeof n!="function"&&n!==null)throw new TypeError("Class extends value "+String(n)+" is not a constructor or null");t(e,n);function r(){this.constructor=e}e.prototype=n===null?Object.create(n):(r.prototype=n.prototype,new r)}}(),e8=g&&g.__assign||function(){return e8=Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++){e=arguments[n];for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&(t[i]=e[i])}return t},e8.apply(this,arguments)},go=g&&g.__read||function(t,e){var n=typeof Symbol=="function"&&t[Symbol.iterator];if(!n)return t;var r=n.call(t),i,a=[],o;try{for(;(e===void 0||e-- >0)&&!(i=r.next()).done;)a.push(i.value)}catch(l){o={error:l}}finally{try{i&&!i.done&&(n=r.return)&&n.call(r)}finally{if(o)throw o.error}}return a},H6=g&&g.__values||function(t){var e=typeof Symbol=="function"&&Symbol.iterator,n=e&&t[e],r=0;if(n)return n.call(t);if(t&&typeof t.length=="number")return{next:function(){return t&&r>=t.length&&(t=void 0),{value:t&&t[r++],done:!t}}};throw new TypeError(e?"Object is not iterable.":"Symbol.iterator is not defined.")};Object.defineProperty(u9,"__esModule",{value:!0});u9.CommonOutputJax=void 0;var Bh=M7,xo=fe,yD=R2,gD=O4,xD=_7,LD=T9,HD=function(t){vD(e,t);function e(n,r,i){n===void 0&&(n=null),r===void 0&&(r=null),i===void 0&&(i=null);var a=this,o=go((0,yD.separateOptions)(n,i.OPTIONS),2),l=o[0],Q=o[1];return a=t.call(this,l)||this,a.factory=a.options.wrapperFactory||new r,a.factory.jax=a,a.cssStyles=a.options.cssStyles||new LD.CssStyles,a.font=a.options.font||new i(Q),a.unknownCache=new Map,a}return e.prototype.typeset=function(n,r){this.setDocument(r);var i=this.createNode();return this.toDOM(n,i,r),i},e.prototype.createNode=function(){var n=this.constructor.NAME;return this.html("mjx-container",{class:"MathJax",jax:n})},e.prototype.setScale=function(n){var r=this.math.metrics.scale*this.options.scale;r!==1&&this.adaptor.setStyle(n,"fontSize",(0,gD.percent)(r))},e.prototype.toDOM=function(n,r,i){i===void 0&&(i=null),this.setDocument(i),this.math=n,this.pxPerEm=n.metrics.ex/this.font.params.x_height,n.root.setTeXclass(null),this.setScale(r),this.nodeMap=new Map,this.container=r,this.processMath(n.root,r),this.nodeMap=null,this.executeFilters(this.postFilters,n,i,r)},e.prototype.getBBox=function(n,r){this.setDocument(r),this.math=n,n.root.setTeXclass(null),this.nodeMap=new Map;var i=this.factory.wrap(n.root).getOuterBBox();return this.nodeMap=null,i},e.prototype.getMetrics=function(n){var r,i;this.setDocument(n);var a=this.adaptor,o=this.getMetricMaps(n);try{for(var l=H6(n.math),Q=l.next();!Q.done;Q=l.next()){var s=Q.value,u=a.parent(s.start.node);if(s.state()<xo.STATE.METRICS&&u){var T=o[s.display?1:0],c=T.get(u),f=c.em,h=c.ex,p=c.containerWidth,v=c.lineWidth,d=c.scale,m=c.family;s.setMetrics(f,h,p,v,d),this.options.mtextInheritFont&&(s.outputData.mtextFamily=m),this.options.merrorInheritFont&&(s.outputData.merrorFamily=m),s.state(xo.STATE.METRICS)}}}catch(y){r={error:y}}finally{try{Q&&!Q.done&&(i=l.return)&&i.call(l)}finally{if(r)throw r.error}}},e.prototype.getMetricsFor=function(n,r){var i=this.options.mtextInheritFont||this.options.merrorInheritFont,a=this.getTestElement(n,r),o=this.measureMetrics(a,i);return this.adaptor.remove(a),o},e.prototype.getMetricMaps=function(n){var r,i,a,o,l,Q,s,u,T,c,f=this.adaptor,h=[new Map,new Map];try{for(var p=H6(n.math),v=p.next();!v.done;v=p.next()){var d=v.value,m=f.parent(d.start.node);if(m&&d.state()<xo.STATE.METRICS){var y=h[d.display?1:0];y.has(m)||y.set(m,this.getTestElement(m,d.display))}}}catch(X){r={error:X}}finally{try{v&&!v.done&&(i=p.return)&&i.call(p)}finally{if(r)throw r.error}}var x=this.options.mtextInheritFont||this.options.merrorInheritFont,L=[new Map,new Map];try{for(var H=H6(L.keys()),M=H.next();!M.done;M=H.next()){var w=M.value;try{for(var S=(l=void 0,H6(h[w].keys())),D=S.next();!D.done;D=S.next()){var m=D.value;L[w].set(m,this.measureMetrics(h[w].get(m),x))}}catch(X){l={error:X}}finally{try{D&&!D.done&&(Q=S.return)&&Q.call(S)}finally{if(l)throw l.error}}}}catch(X){a={error:X}}finally{try{M&&!M.done&&(o=H.return)&&o.call(H)}finally{if(a)throw a.error}}try{for(var E=H6(L.keys()),$=E.next();!$.done;$=E.next()){var w=$.value;try{for(var j=(T=void 0,H6(h[w].values())),G=j.next();!G.done;G=j.next()){var m=G.value;f.remove(m)}}catch(P){T={error:P}}finally{try{G&&!G.done&&(c=j.return)&&c.call(j)}finally{if(T)throw T.error}}}}catch(X){s={error:X}}finally{try{$&&!$.done&&(u=E.return)&&u.call(E)}finally{if(s)throw s.error}}return L},e.prototype.getTestElement=function(n,r){var i=this.adaptor;if(!this.testInline){this.testInline=this.html("mjx-test",{style:{display:"inline-block",width:"100%","font-style":"normal","font-weight":"normal","font-size":"100%","font-size-adjust":"none","text-indent":0,"text-transform":"none","letter-spacing":"normal","word-spacing":"normal",overflow:"hidden",height:"1px","margin-right":"-1px"}},[this.html("mjx-left-box",{style:{display:"inline-block",width:0,float:"left"}}),this.html("mjx-ex-box",{style:{position:"absolute",overflow:"hidden",width:"1px",height:"60ex"}}),this.html("mjx-right-box",{style:{display:"inline-block",width:0,float:"right"}})]),this.testDisplay=i.clone(this.testInline),i.setStyle(this.testDisplay,"display","table"),i.setStyle(this.testDisplay,"margin-right",""),i.setStyle(i.firstChild(this.testDisplay),"display","none");var a=i.lastChild(this.testDisplay);i.setStyle(a,"display","table-cell"),i.setStyle(a,"width","10000em"),i.setStyle(a,"float","")}return i.append(n,i.clone(r?this.testDisplay:this.testInline))},e.prototype.measureMetrics=function(n,r){var i=this.adaptor,a=r?i.fontFamily(n):"",o=i.fontSize(n),l=go(i.nodeSize(i.childNode(n,1)),2),Q=l[0],s=l[1],u=Q?s/60:o*this.options.exFactor,T=Q?i.getStyle(n,"display")==="table"?i.nodeSize(i.lastChild(n))[0]-1:i.nodeBBox(i.lastChild(n)).left-i.nodeBBox(i.firstChild(n)).left-2:1e6,c=Math.max(this.options.minScale,this.options.matchFontHeight?u/this.font.params.x_height/o:1),f=1e6;return{em:o,ex:u,containerWidth:T,lineWidth:f,scale:c,family:a}},e.prototype.styleSheet=function(n){var r,i;if(this.setDocument(n),this.cssStyles.clear(),this.cssStyles.addStyles(this.constructor.commonStyles),"getStyles"in n)try{for(var a=H6(n.getStyles()),o=a.next();!o.done;o=a.next()){var l=o.value;this.cssStyles.addStyles(l)}}catch(s){r={error:s}}finally{try{o&&!o.done&&(i=a.return)&&i.call(a)}finally{if(r)throw r.error}}this.addWrapperStyles(this.cssStyles),this.addFontStyles(this.cssStyles);var Q=this.html("style",{id:"MJX-styles"},[this.text(`
`+this.cssStyles.cssText+`
  `+this.stack.join(`
  `)+`
]`},t}();Xi.default=BN;var Ap;function n3(){if(Ap)return Yn;Ap=1;var t=g&&g.__values||function(s){var u=typeof Symbol=="function"&&Symbol.iterator,T=u&&s[u],c=0;if(T)return T.call(s);if(s&&typeof s.length=="number")return{next:function(){return s&&c>=s.length&&(s=void 0),{value:s&&s[c++],done:!s}}};throw new TypeError(u?"Object is not iterable.":"Symbol.iterator is not defined.")},e=g&&g.__read||function(s,u){var T=typeof Symbol=="function"&&s[Symbol.iterator];if(!T)return s;var c=T.call(s),f,h=[],p;try{for(;(u===void 0||u-- >0)&&!(f=c.next()).done;)h.push(f.value)}catch(v){p={error:v}}finally{try{f&&!f.done&&(T=c.return)&&T.call(c)}finally{if(p)throw p.error}}return h},n=g&&g.__spreadArray||function(s,u,T){if(T||arguments.length===2)for(var c=0,f=u.length,h;c<f;c++)(h||!(c in u))&&(h||(h=Array.prototype.slice.call(u,0,c)),h[c]=u[c]);return s.concat(h||Array.prototype.slice.call(u))},r=g&&g.__importDefault||function(s){return s&&s.__esModule?s:{default:s}};Object.defineProperty(Yn,"__esModule",{value:!0});var i=r(a2()),a=r(Xi),o=r(G1),l=M1,Q=function(){function s(u,T,c){var f,h;this._string=u,this.configuration=c,this.macroCount=0,this.i=0,this.currentCS="";var p=T.hasOwnProperty("isInner"),v=T.isInner;delete T.isInner;var d;if(T){d={};try{for(var m=t(Object.keys(T)),y=m.next();!y.done;y=m.next()){var x=y.value;d[x]=T[x]}}catch(L){f={error:L}}finally{try{y&&!y.done&&(h=m.return)&&h.call(m)}finally{if(f)throw f.error}}}this.configuration.pushParser(this),this.stack=new a.default(this.itemFactory,d,p?v:!0),this.Parse(),this.Push(this.itemFactory.create("stop"))}return Object.defineProperty(s.prototype,"options",{get:function(){return this.configuration.options},enumerable:!1,configurable:!0}),Object.defineProperty(s.prototype,"itemFactory",{get:function(){return this.configuration.itemFactory},enumerable:!1,configurable:!0}),Object.defineProperty(s.prototype,"tags",{get:function(){return this.configuration.tags},enumerable:!1,configurable:!0}),Object.defineProperty(s.prototype,"string",{get:function(){return this._string},set:function(u){this._string=u},enumerable:!1,configurable:!0}),s.prototype.parse=function(u,T){return this.configuration.handlers.get(u).parse(T)},s.prototype.lookup=function(u,T){return this.configuration.handlers.get(u).lookup(T)},s.prototype.contains=function(u,T){return this.configuration.handlers.get(u).contains(T)},s.prototype.toString=function(){var u,T,c="";try{for(var f=t(Array.from(this.configuration.handlers.keys())),h=f.next();!h.done;h=f.next()){var p=h.value;c+=p+": "+this.configuration.handlers.get(p)+`
 *************************************************************************
 *
 *  mhchemParser.ts
 *  4.1.1
 *
 *  Parser for the \ce command and \pu command for MathJax and Co.
 *
 *  mhchem's \ce is a tool for writing beautiful chemical equations easily.
 *  mhchem's \pu is a tool for writing physical units easily.
 *
 *  ----------------------------------------------------------------------
 *
 *  Copyright (c) 2015-2021 Martin Hensel
 *
 *  Licensed under the Apache License, Version 2.0 (the "License");
 *  you may not use this file except in compliance with the License.
 *  You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 *  Unless required by applicable law or agreed to in writing, software
 *  distributed under the License is distributed on an "AS IS" BASIS,
 *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  See the License for the specific language governing permissions and
 *  limitations under the License.
 *
 *  ----------------------------------------------------------------------
 *
 *  https://github.com/mhchem/mhchemParser
 *
`,after:`
`,...a.current()}))),Q.type!=="list"&&(e.bulletLastUsed=void 0),l<i.length-1&&o.push(a.move(fq(Q,i[l+1],t,e)))}return r.pop(),o.join("")}function fq(t,e,n,r){let i=r.join.length;for(;i--;){const a=r.join[i](t,e,n,r);if(a===!0||a===1)break;if(typeof a=="number")return`
`.repeat(1+a);if(a===!1)return`

<!---->

`}return`

`}const hq=/\r?\n|\r/g;function dq(t,e){const n=[];let r=0,i=0,a;for(;a=hq.exec(t);)o(t.slice(r,a.index)),n.push(a[0]),r=a.index+a[0].length,i++;return o(t.slice(r)),n.join("");function o(l){n.push(e(l,i,!l))}}SH.peek=_q;function pq(){return{enter:{gfmFootnoteDefinition:vq,gfmFootnoteDefinitionLabelString:yq,gfmFootnoteCall:Lq,gfmFootnoteCallString:Hq},exit:{gfmFootnoteDefinition:xq,gfmFootnoteDefinitionLabelString:gq,gfmFootnoteCall:Mq,gfmFootnoteCallString:bq}}}function mq(){return{unsafe:[{character:"[",inConstruct:["phrasing","label","reference"]}],handlers:{footnoteDefinition:wq,footnoteReference:SH}}}function vq(t){this.enter({type:"footnoteDefinition",identifier:"",label:"",children:[]},t)}function yq(){this.buffer()}function gq(t){const e=this.resume(),n=this.stack[this.stack.length-1];n.label=e,n.identifier=o4(this.sliceSerialize(t)).toLowerCase()}function xq(t){this.exit(t)}function Lq(t){this.enter({type:"footnoteReference",identifier:"",label:""},t)}function Hq(){this.buffer()}function bq(t){const e=this.resume(),n=this.stack[this.stack.length-1];n.label=e,n.identifier=o4(this.sliceSerialize(t)).toLowerCase()}function Mq(t){this.exit(t)}function SH(t,e,n,r){const i=b7(r);let a=i.move("[^");const o=n.enter("footnoteReference"),l=n.enter("reference");return a+=i.move(Ou(n,wH(t),{...i.current(),before:a,after:"]"})),l(),o(),a+=i.move("]"),a}function _q(){return"["}function wq(t,e,n,r){const i=b7(r);let a=i.move("[^");const o=n.enter("footnoteDefinition"),l=n.enter("label");return a+=i.move(Ou(n,wH(t),{...i.current(),before:a,after:"]"})),l(),a+=i.move("]:"+(t.children&&t.children.length>0?" ":"")),i.shift(4),a+=i.move(dq(cq(t,n,i.current()),Sq)),o(),a}function Sq(t,e,n){return e===0?t:(n?"":"    ")+t}function AH(t,e,n){const r=e.indexStack,i=t.children||[],a=[];let o=-1,l=n.before;r.push(-1);let Q=e.createTracker(n);for(;++o<i.length;){const s=i[o];let u;if(r[r.length-1]=o,o+1<i.length){let T=e.handle.handlers[i[o+1].type];T&&T.peek&&(T=T.peek),u=T?T(i[o+1],t,e,{before:"",after:"",...Q.current()}).charAt(0):""}else u=n.after;a.length>0&&(l==="\r"||l===`
`)&&s.type==="html"&&(a[a.length-1]=a[a.length-1].replace(/(\r?\n|\r)$/," "),l=" ",Q=e.createTracker(n),Q.move(a.join(""))),a.push(Q.move(e.handle(s,t,e,{...Q.current(),before:l,after:u}))),l=a[a.length-1].slice(-1)}return r.pop(),a.join("")}const Aq=["autolink","destinationLiteral","destinationRaw","reference","titleQuote","titleApostrophe"];VH.peek=Oq;const Vq={canContainEols:["delete"],enter:{strikethrough:Eq},exit:{strikethrough:Dq}},Cq={unsafe:[{character:"~",inConstruct:"phrasing",notInConstruct:Aq}],handlers:{delete:VH}};function Eq(t){this.enter({type:"delete",children:[]},t)}function Dq(t){this.exit(t)}function VH(t,e,n,r){const i=b7(r),a=n.enter("strikethrough");let o=i.move("~~");return o+=AH(t,n,{...i.current(),before:o,after:"~"}),o+=i.move("~~"),a(),o}function Oq(){return"~"}CH.peek=kq;function CH(t,e,n){let r=t.value||"",i="`",a=-1;for(;new RegExp("(^|[^`])"+i+"([^`]|$)").test(r);)i+="`";for(/[^ \r\n]/.test(r)&&(/^[ \r\n]/.test(r)&&/[ \r\n]$/.test(r)||/^`|`$/.test(r))&&(r=" "+r+" ");++a<n.unsafe.length;){const o=n.unsafe[a],l=Du(o);let Q;if(o.atBreak)for(;Q=l.exec(r);){let s=Q.index;r.charCodeAt(s)===10&&r.charCodeAt(s-1)===13&&s--,r=r.slice(0,s)+" "+r.slice(Q.index+1)}}return i+r+i}function kq(){return"`"}function $q(t,e={}){const n=(e.align||[]).concat(),r=e.stringLength||Pq,i=[],a=[],o=[],l=[];let Q=0,s=-1;for(;++s<t.length;){const h=[],p=[];let v=-1;for(t[s].length>Q&&(Q=t[s].length);++v<t[s].length;){const d=Bq(t[s][v]);if(e.alignDelimiters!==!1){const m=r(d);p[v]=m,(l[v]===void 0||m>l[v])&&(l[v]=m)}h.push(d)}a[s]=h,o[s]=p}let u=-1;if(typeof n=="object"&&"length"in n)for(;++u<Q;)i[u]=Lm(n[u]);else{const h=Lm(n);for(;++u<Q;)i[u]=h}u=-1;const T=[],c=[];for(;++u<Q;){const h=i[u];let p="",v="";h===99?(p=":",v=":"):h===108?p=":":h===114&&(v=":");let d=e.alignDelimiters===!1?1:Math.max(1,l[u]-p.length-v.length);const m=p+"-".repeat(d)+v;e.alignDelimiters!==!1&&(d=p.length+d+v.length,d>l[u]&&(l[u]=d),c[u]=d),T[u]=m}a.splice(1,0,T),o.splice(1,0,c),s=-1;const f=[];for(;++s<a.length;){const h=a[s],p=o[s];u=-1;const v=[];for(;++u<Q;){const d=h[u]||"";let m="",y="";if(e.alignDelimiters!==!1){const x=l[u]-(p[u]||0),L=i[u];L===114?m=" ".repeat(x):L===99?x%2?(m=" ".repeat(x/2+.5),y=" ".repeat(x/2-.5)):(m=" ".repeat(x/2),y=m):y=" ".repeat(x)}e.delimiterStart!==!1&&!u&&v.push("|"),e.padding!==!1&&!(e.alignDelimiters===!1&&d==="")&&(e.delimiterStart!==!1||u)&&v.push(" "),e.alignDelimiters!==!1&&v.push(m),v.push(d),e.alignDelimiters!==!1&&v.push(y),e.padding!==!1&&v.push(" "),(e.delimiterEnd!==!1||u!==Q-1)&&v.push("|")}f.push(e.delimiterEnd===!1?v.join("").replace(/ +$/,""):v.join(""))}return f.join(`
`)}function Bq(t){return t==null?"":String(t)}function Pq(t){return t.length}function Lm(t){const e=typeof t=="string"?t.codePointAt(0):0;return e===67||e===99?99:e===76||e===108?108:e===82||e===114?114:0}const Nq={enter:{table:Iq,tableData:Hm,tableHeader:Hm,tableRow:Fq},exit:{codeText:Rq,table:jq,tableData:hl,tableHeader:hl,tableRow:hl}};function Iq(t){const e=t._align;this.enter({type:"table",align:e.map(n=>n==="none"?null:n),children:[]},t),this.setData("inTable",!0)}function jq(t){this.exit(t),this.setData("inTable")}function Fq(t){this.enter({type:"tableRow",children:[]},t)}function hl(t){this.exit(t)}function Hm(t){this.enter({type:"tableCell",children:[]},t)}function Rq(t){let e=this.resume();this.getData("inTable")&&(e=e.replace(/\\([\\|])/g,zq));const n=this.stack[this.stack.length-1];n.value=e,this.exit(t)}function zq(t,e){return e==="|"?e:t}function qq(t){const e=t||{},n=e.tableCellPadding,r=e.tablePipeAlign,i=e.stringLength,a=n?" ":"|";return{unsafe:[{character:"\r",inConstruct:"tableCell"},{character:`
`,inConstruct:"tableCell"},{atBreak:!0,character:"|",after:"[	 :-]"},{character:"|",inConstruct:"tableCell"},{atBreak:!0,character:":",after:"-"},{atBreak:!0,character:"-",after:"[:|-]"}],handlers:{table:o,tableRow:l,tableCell:Q,inlineCode:c}};function o(f,h,p,v){return s(u(f,p,v),f.align)}function l(f,h,p,v){const d=T(f,p,v),m=s([d]);return m.slice(0,m.indexOf(`
`))}function Q(f,h,p,v){const d=p.enter("tableCell"),m=p.enter("phrasing"),y=AH(f,p,{...v,before:a,after:a});return m(),d(),y}function s(f,h){return $q(f,{align:h,alignDelimiters:r,padding:n,stringLength:i})}function u(f,h,p){const v=f.children;let d=-1;const m=[],y=h.enter("table");for(;++d<v.length;)m[d]=T(v[d],h,p);return y(),m}function T(f,h,p){const v=f.children;let d=-1;const m=[],y=h.enter("tableRow");for(;++d<v.length;)m[d]=Q(v[d],f,h,p);return y(),m}function c(f,h,p){let v=CH(f,h,p);return p.stack.includes("tableCell")&&(v=v.replace(/\|/g,"\\$&")),v}}function Zq(t){const e=t.options.bullet||"*";if(e!=="*"&&e!=="+"&&e!=="-")throw new Error("Cannot serialize items with `"+e+"` for `options.bullet`, expected `*`, `+`, or `-`");return e}function Gq(t){const e=t.options.listItemIndent||"tab";if(e===1||e==="1")return"one";if(e!=="tab"&&e!=="one"&&e!=="mixed")throw new Error("Cannot serialize items with `"+e+"` for `options.listItemIndent`, expected `tab`, `one`, or `mixed`");return e}function Xq(t,e,n,r){const i=Gq(n);let a=n.bulletCurrent||Zq(n);e&&e.type==="list"&&e.ordered&&(a=(typeof e.start=="number"&&e.start>-1?e.start:1)+(n.options.incrementListMarker===!1?0:e.children.indexOf(t))+a);let o=a.length+1;(i==="tab"||i==="mixed"&&(e&&e.type==="list"&&e.spread||t.spread))&&(o=Math.ceil(o/4)*4);const l=n.createTracker(r);l.move(a+" ".repeat(o-a.length)),l.shift(o);const Q=n.enter("listItem"),s=n.indentLines(n.containerFlow(t,l.current()),u);return Q(),s;function u(T,c,f){return c?(f?"":" ".repeat(o))+T:(f?a:a+" ".repeat(o-a.length))+T}}const Wq={exit:{taskListCheckValueChecked:bm,taskListCheckValueUnchecked:bm,paragraph:Kq}},Uq={unsafe:[{atBreak:!0,character:"-",after:"[:|-]"}],handlers:{listItem:Yq}};function bm(t){const e=this.stack[this.stack.length-2];e.checked=t.type==="taskListCheckValueChecked"}function Kq(t){const e=this.stack[this.stack.length-2];if(e&&e.type==="listItem"&&typeof e.checked=="boolean"){const n=this.stack[this.stack.length-1],r=n.children[0];if(r&&r.type==="text"){const i=e.children;let a=-1,o;for(;++a<i.length;){const l=i[a];if(l.type==="paragraph"){o=l;break}}o===n&&(r.value=r.value.slice(1),r.value.length===0?n.children.shift():n.position&&r.position&&typeof r.position.start.offset=="number"&&(r.position.start.column++,r.position.start.offset++,n.position.start=Object.assign({},r.position.start)))}}this.exit(t)}function Yq(t,e,n,r){const i=t.children[0],a=typeof t.checked=="boolean"&&i&&i.type==="paragraph",o="["+(t.checked?"x":" ")+"] ",l=b7(r);a&&l.move(o);let Q=Xq(t,e,n,{...r,...l.current()});return a&&(Q=Q.replace(/^(?:[*+-]|\d+\.)([\r\n]| {1,3})/,s)),Q;function s(u){return u+o}}function Jq(){return[tq,pq(),Vq,Nq,Wq]}function tZ(t){return{extensions:[eq,mq(),Cq,qq(t),Uq]}}function eZ(t={}){const e=this.data();n("micromarkExtensions",Wz(t)),n("fromMarkdownExtensions",Jq()),n("toMarkdownExtensions",tZ(t));function n(r,i){(e[r]?e[r]:e[r]=[]).push(i)}}/**
 * @remix-run/router v1.6.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 * React Router v6.11.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 * React Router DOM v6.11.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT