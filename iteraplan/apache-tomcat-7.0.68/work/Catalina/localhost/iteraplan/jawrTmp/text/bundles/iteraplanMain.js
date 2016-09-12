(function(window,undefined){var document=window.document,navigator=window.navigator,location=window.location;var jQuery=(function(){var jQuery=function(selector,context){return new jQuery.fn.init(selector,context,rootjQuery);},_jQuery=window.jQuery,_$=window.$,rootjQuery,quickExpr=/^(?:[^#<]*(<[\w\W]+>)[^>]*$|#([\w\-]*)$)/,rnotwhite=/\S/,trimLeft=/^\s+/,trimRight=/\s+$/,rsingleTag=/^<(\w+)\s*\/?>(?:<\/\1>)?$/,rvalidchars=/^[\],:{}\s]*$/,rvalidescape=/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,rvalidtokens=/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,rvalidbraces=/(?:^|:|,)(?:\s*\[)+/g,rwebkit=/(webkit)[ \/]([\w.]+)/,ropera=/(opera)(?:.*version)?[ \/]([\w.]+)/,rmsie=/(msie) ([\w.]+)/,rmozilla=/(mozilla)(?:.*? rv:([\w.]+))?/,rdashAlpha=/-([a-z]|[0-9])/ig,rmsPrefix=/^-ms-/,fcamelCase=function(all,letter){return(letter+"").toUpperCase();},userAgent=navigator.userAgent,browserMatch,readyList,DOMContentLoaded,toString=Object.prototype.toString,hasOwn=Object.prototype.hasOwnProperty,push=Array.prototype.push,slice=Array.prototype.slice,trim=String.prototype.trim,indexOf=Array.prototype.indexOf,class2type={};jQuery.fn=jQuery.prototype={constructor:jQuery,init:function(selector,context,rootjQuery){var match,elem,ret,doc;if(!selector){return this;}
if(selector.nodeType){this.context=this[0]=selector;this.length=1;return this;}
if(selector==="body"&&!context&&document.body){this.context=document;this[0]=document.body;this.selector=selector;this.length=1;return this;}
if(typeof selector==="string"){if(selector.charAt(0)==="<"&&selector.charAt(selector.length-1)===">"&&selector.length>=3){match=[null,selector,null];}else{match=quickExpr.exec(selector);}
if(match&&(match[1]||!context)){if(match[1]){context=context instanceof jQuery?context[0]:context;doc=(context?context.ownerDocument||context:document);ret=rsingleTag.exec(selector);if(ret){if(jQuery.isPlainObject(context)){selector=[document.createElement(ret[1])];jQuery.fn.attr.call(selector,context,true);}else{selector=[doc.createElement(ret[1])];}}else{ret=jQuery.buildFragment([match[1]],[doc]);selector=(ret.cacheable?jQuery.clone(ret.fragment):ret.fragment).childNodes;}
return jQuery.merge(this,selector);}else{elem=document.getElementById(match[2]);if(elem&&elem.parentNode){if(elem.id!==match[2]){return rootjQuery.find(selector);}
this.length=1;this[0]=elem;}
this.context=document;this.selector=selector;return this;}}else if(!context||context.jquery){return(context||rootjQuery).find(selector);}else{return this.constructor(context).find(selector);}}else if(jQuery.isFunction(selector)){return rootjQuery.ready(selector);}
if(selector.selector!==undefined){this.selector=selector.selector;this.context=selector.context;}
return jQuery.makeArray(selector,this);},selector:"",jquery:"1.7.1",length:0,size:function(){return this.length;},toArray:function(){return slice.call(this,0);},get:function(num){return num==null?this.toArray():(num<0?this[this.length+num]:this[num]);},pushStack:function(elems,name,selector){var ret=this.constructor();if(jQuery.isArray(elems)){push.apply(ret,elems);}else{jQuery.merge(ret,elems);}
ret.prevObject=this;ret.context=this.context;if(name==="find"){ret.selector=this.selector+(this.selector?" ":"")+selector;}else if(name){ret.selector=this.selector+"."+name+"("+selector+")";}
return ret;},each:function(callback,args){return jQuery.each(this,callback,args);},ready:function(fn){jQuery.bindReady();readyList.add(fn);return this;},eq:function(i){i=+i;return i===-1?this.slice(i):this.slice(i,i+1);},first:function(){return this.eq(0);},last:function(){return this.eq(-1);},slice:function(){return this.pushStack(slice.apply(this,arguments),"slice",slice.call(arguments).join(","));},map:function(callback){return this.pushStack(jQuery.map(this,function(elem,i){return callback.call(elem,i,elem);}));},end:function(){return this.prevObject||this.constructor(null);},push:push,sort:[].sort,splice:[].splice};jQuery.fn.init.prototype=jQuery.fn;jQuery.extend=jQuery.fn.extend=function(){var options,name,src,copy,copyIsArray,clone,target=arguments[0]||{},i=1,length=arguments.length,deep=false;if(typeof target==="boolean"){deep=target;target=arguments[1]||{};i=2;}
if(typeof target!=="object"&&!jQuery.isFunction(target)){target={};}
if(length===i){target=this;--i;}
for(;i<length;i++){if((options=arguments[i])!=null){for(name in options){src=target[name];copy=options[name];if(target===copy){continue;}
if(deep&&copy&&(jQuery.isPlainObject(copy)||(copyIsArray=jQuery.isArray(copy)))){if(copyIsArray){copyIsArray=false;clone=src&&jQuery.isArray(src)?src:[];}else{clone=src&&jQuery.isPlainObject(src)?src:{};}
target[name]=jQuery.extend(deep,clone,copy);}else if(copy!==undefined){target[name]=copy;}}}}
return target;};jQuery.extend({noConflict:function(deep){if(window.$===jQuery){window.$=_$;}
if(deep&&window.jQuery===jQuery){window.jQuery=_jQuery;}
return jQuery;},isReady:false,readyWait:1,holdReady:function(hold){if(hold){jQuery.readyWait++;}else{jQuery.ready(true);}},ready:function(wait){if((wait===true&&!--jQuery.readyWait)||(wait!==true&&!jQuery.isReady)){if(!document.body){return setTimeout(jQuery.ready,1);}
jQuery.isReady=true;if(wait!==true&&--jQuery.readyWait>0){return;}
readyList.fireWith(document,[jQuery]);if(jQuery.fn.trigger){jQuery(document).trigger("ready").off("ready");}}},bindReady:function(){if(readyList){return;}
readyList=jQuery.Callbacks("once memory");if(document.readyState==="complete"){return setTimeout(jQuery.ready,1);}
if(document.addEventListener){document.addEventListener("DOMContentLoaded",DOMContentLoaded,false);window.addEventListener("load",jQuery.ready,false);}else if(document.attachEvent){document.attachEvent("onreadystatechange",DOMContentLoaded);window.attachEvent("onload",jQuery.ready);var toplevel=false;try{toplevel=window.frameElement==null;}catch(e){}
if(document.documentElement.doScroll&&toplevel){doScrollCheck();}}},isFunction:function(obj){return jQuery.type(obj)==="function";},isArray:Array.isArray||function(obj){return jQuery.type(obj)==="array";},isWindow:function(obj){return obj&&typeof obj==="object"&&"setInterval"in obj;},isNumeric:function(obj){return!isNaN(parseFloat(obj))&&isFinite(obj);},type:function(obj){return obj==null?String(obj):class2type[toString.call(obj)]||"object";},isPlainObject:function(obj){if(!obj||jQuery.type(obj)!=="object"||obj.nodeType||jQuery.isWindow(obj)){return false;}
try{if(obj.constructor&&!hasOwn.call(obj,"constructor")&&!hasOwn.call(obj.constructor.prototype,"isPrototypeOf")){return false;}}catch(e){return false;}
var key;for(key in obj){}
return key===undefined||hasOwn.call(obj,key);},isEmptyObject:function(obj){for(var name in obj){return false;}
return true;},error:function(msg){throw new Error(msg);},parseJSON:function(data){if(typeof data!=="string"||!data){return null;}
data=jQuery.trim(data);if(window.JSON&&window.JSON.parse){return window.JSON.parse(data);}
if(rvalidchars.test(data.replace(rvalidescape,"@").replace(rvalidtokens,"]").replace(rvalidbraces,""))){return(new Function("return "+data))();}
jQuery.error("Invalid JSON: "+data);},parseXML:function(data){var xml,tmp;try{if(window.DOMParser){tmp=new DOMParser();xml=tmp.parseFromString(data,"text/xml");}else{xml=new ActiveXObject("Microsoft.XMLDOM");xml.async="false";xml.loadXML(data);}}catch(e){xml=undefined;}
if(!xml||!xml.documentElement||xml.getElementsByTagName("parsererror").length){jQuery.error("Invalid XML: "+data);}
return xml;},noop:function(){},globalEval:function(data){if(data&&rnotwhite.test(data)){(window.execScript||function(data){window["eval"].call(window,data);})(data);}},camelCase:function(string){return string.replace(rmsPrefix,"ms-").replace(rdashAlpha,fcamelCase);},nodeName:function(elem,name){return elem.nodeName&&elem.nodeName.toUpperCase()===name.toUpperCase();},each:function(object,callback,args){var name,i=0,length=object.length,isObj=length===undefined||jQuery.isFunction(object);if(args){if(isObj){for(name in object){if(callback.apply(object[name],args)===false){break;}}}else{for(;i<length;){if(callback.apply(object[i++],args)===false){break;}}}}else{if(isObj){for(name in object){if(callback.call(object[name],name,object[name])===false){break;}}}else{for(;i<length;){if(callback.call(object[i],i,object[i++])===false){break;}}}}
return object;},trim:trim?function(text){return text==null?"":trim.call(text);}:function(text){return text==null?"":text.toString().replace(trimLeft,"").replace(trimRight,"");},makeArray:function(array,results){var ret=results||[];if(array!=null){var type=jQuery.type(array);if(array.length==null||type==="string"||type==="function"||type==="regexp"||jQuery.isWindow(array)){push.call(ret,array);}else{jQuery.merge(ret,array);}}
return ret;},inArray:function(elem,array,i){var len;if(array){if(indexOf){return indexOf.call(array,elem,i);}
len=array.length;i=i?i<0?Math.max(0,len+i):i:0;for(;i<len;i++){if(i in array&&array[i]===elem){return i;}}}
return-1;},merge:function(first,second){var i=first.length,j=0;if(typeof second.length==="number"){for(var l=second.length;j<l;j++){first[i++]=second[j];}}else{while(second[j]!==undefined){first[i++]=second[j++];}}
first.length=i;return first;},grep:function(elems,callback,inv){var ret=[],retVal;inv=!!inv;for(var i=0,length=elems.length;i<length;i++){retVal=!!callback(elems[i],i);if(inv!==retVal){ret.push(elems[i]);}}
return ret;},map:function(elems,callback,arg){var value,key,ret=[],i=0,length=elems.length,isArray=elems instanceof jQuery||length!==undefined&&typeof length==="number"&&((length>0&&elems[0]&&elems[length-1])||length===0||jQuery.isArray(elems));if(isArray){for(;i<length;i++){value=callback(elems[i],i,arg);if(value!=null){ret[ret.length]=value;}}}else{for(key in elems){value=callback(elems[key],key,arg);if(value!=null){ret[ret.length]=value;}}}
return ret.concat.apply([],ret);},guid:1,proxy:function(fn,context){if(typeof context==="string"){var tmp=fn[context];context=fn;fn=tmp;}
if(!jQuery.isFunction(fn)){return undefined;}
var args=slice.call(arguments,2),proxy=function(){return fn.apply(context,args.concat(slice.call(arguments)));};proxy.guid=fn.guid=fn.guid||proxy.guid||jQuery.guid++;return proxy;},access:function(elems,key,value,exec,fn,pass){var length=elems.length;if(typeof key==="object"){for(var k in key){jQuery.access(elems,k,key[k],exec,fn,value);}
return elems;}
if(value!==undefined){exec=!pass&&exec&&jQuery.isFunction(value);for(var i=0;i<length;i++){fn(elems[i],key,exec?value.call(elems[i],i,fn(elems[i],key)):value,pass);}
return elems;}
return length?fn(elems[0],key):undefined;},now:function(){return(new Date()).getTime();},uaMatch:function(ua){ua=ua.toLowerCase();var match=rwebkit.exec(ua)||ropera.exec(ua)||rmsie.exec(ua)||ua.indexOf("compatible")<0&&rmozilla.exec(ua)||[];return{browser:match[1]||"",version:match[2]||"0"};},sub:function(){function jQuerySub(selector,context){return new jQuerySub.fn.init(selector,context);}
jQuery.extend(true,jQuerySub,this);jQuerySub.superclass=this;jQuerySub.fn=jQuerySub.prototype=this();jQuerySub.fn.constructor=jQuerySub;jQuerySub.sub=this.sub;jQuerySub.fn.init=function init(selector,context){if(context&&context instanceof jQuery&&!(context instanceof jQuerySub)){context=jQuerySub(context);}
return jQuery.fn.init.call(this,selector,context,rootjQuerySub);};jQuerySub.fn.init.prototype=jQuerySub.fn;var rootjQuerySub=jQuerySub(document);return jQuerySub;},browser:{}});jQuery.each("Boolean Number String Function Array Date RegExp Object".split(" "),function(i,name){class2type["[object "+name+"]"]=name.toLowerCase();});browserMatch=jQuery.uaMatch(userAgent);if(browserMatch.browser){jQuery.browser[browserMatch.browser]=true;jQuery.browser.version=browserMatch.version;}
if(jQuery.browser.webkit){jQuery.browser.safari=true;}
if(rnotwhite.test("\xA0")){trimLeft=/^[\s\xA0]+/;trimRight=/[\s\xA0]+$/;}
rootjQuery=jQuery(document);if(document.addEventListener){DOMContentLoaded=function(){document.removeEventListener("DOMContentLoaded",DOMContentLoaded,false);jQuery.ready();};}else if(document.attachEvent){DOMContentLoaded=function(){if(document.readyState==="complete"){document.detachEvent("onreadystatechange",DOMContentLoaded);jQuery.ready();}};}
function doScrollCheck(){if(jQuery.isReady){return;}
try{document.documentElement.doScroll("left");}catch(e){setTimeout(doScrollCheck,1);return;}
jQuery.ready();}
return jQuery;})();var flagsCache={};function createFlags(flags){var object=flagsCache[flags]={},i,length;flags=flags.split(/\s+/);for(i=0,length=flags.length;i<length;i++){object[flags[i]]=true;}
return object;}
jQuery.Callbacks=function(flags){flags=flags?(flagsCache[flags]||createFlags(flags)):{};var
list=[],stack=[],memory,firing,firingStart,firingLength,firingIndex,add=function(args){var i,length,elem,type,actual;for(i=0,length=args.length;i<length;i++){elem=args[i];type=jQuery.type(elem);if(type==="array"){add(elem);}else if(type==="function"){if(!flags.unique||!self.has(elem)){list.push(elem);}}}},fire=function(context,args){args=args||[];memory=!flags.memory||[context,args];firing=true;firingIndex=firingStart||0;firingStart=0;firingLength=list.length;for(;list&&firingIndex<firingLength;firingIndex++){if(list[firingIndex].apply(context,args)===false&&flags.stopOnFalse){memory=true;break;}}
firing=false;if(list){if(!flags.once){if(stack&&stack.length){memory=stack.shift();self.fireWith(memory[0],memory[1]);}}else if(memory===true){self.disable();}else{list=[];}}},self={add:function(){if(list){var length=list.length;add(arguments);if(firing){firingLength=list.length;}else if(memory&&memory!==true){firingStart=length;fire(memory[0],memory[1]);}}
return this;},remove:function(){if(list){var args=arguments,argIndex=0,argLength=args.length;for(;argIndex<argLength;argIndex++){for(var i=0;i<list.length;i++){if(args[argIndex]===list[i]){if(firing){if(i<=firingLength){firingLength--;if(i<=firingIndex){firingIndex--;}}}
list.splice(i--,1);if(flags.unique){break;}}}}}
return this;},has:function(fn){if(list){var i=0,length=list.length;for(;i<length;i++){if(fn===list[i]){return true;}}}
return false;},empty:function(){list=[];return this;},disable:function(){list=stack=memory=undefined;return this;},disabled:function(){return!list;},lock:function(){stack=undefined;if(!memory||memory===true){self.disable();}
return this;},locked:function(){return!stack;},fireWith:function(context,args){if(stack){if(firing){if(!flags.once){stack.push([context,args]);}}else if(!(flags.once&&memory)){fire(context,args);}}
return this;},fire:function(){self.fireWith(this,arguments);return this;},fired:function(){return!!memory;}};return self;};var
sliceDeferred=[].slice;jQuery.extend({Deferred:function(func){var doneList=jQuery.Callbacks("once memory"),failList=jQuery.Callbacks("once memory"),progressList=jQuery.Callbacks("memory"),state="pending",lists={resolve:doneList,reject:failList,notify:progressList},promise={done:doneList.add,fail:failList.add,progress:progressList.add,state:function(){return state;},isResolved:doneList.fired,isRejected:failList.fired,then:function(doneCallbacks,failCallbacks,progressCallbacks){deferred.done(doneCallbacks).fail(failCallbacks).progress(progressCallbacks);return this;},always:function(){deferred.done.apply(deferred,arguments).fail.apply(deferred,arguments);return this;},pipe:function(fnDone,fnFail,fnProgress){return jQuery.Deferred(function(newDefer){jQuery.each({done:[fnDone,"resolve"],fail:[fnFail,"reject"],progress:[fnProgress,"notify"]},function(handler,data){var fn=data[0],action=data[1],returned;if(jQuery.isFunction(fn)){deferred[handler](function(){returned=fn.apply(this,arguments);if(returned&&jQuery.isFunction(returned.promise)){returned.promise().then(newDefer.resolve,newDefer.reject,newDefer.notify);}else{newDefer[action+"With"](this===deferred?newDefer:this,[returned]);}});}else{deferred[handler](newDefer[action]);}});}).promise();},promise:function(obj){if(obj==null){obj=promise;}else{for(var key in promise){obj[key]=promise[key];}}
return obj;}},deferred=promise.promise({}),key;for(key in lists){deferred[key]=lists[key].fire;deferred[key+"With"]=lists[key].fireWith;}
deferred.done(function(){state="resolved";},failList.disable,progressList.lock).fail(function(){state="rejected";},doneList.disable,progressList.lock);if(func){func.call(deferred,deferred);}
return deferred;},when:function(firstParam){var args=sliceDeferred.call(arguments,0),i=0,length=args.length,pValues=new Array(length),count=length,pCount=length,deferred=length<=1&&firstParam&&jQuery.isFunction(firstParam.promise)?firstParam:jQuery.Deferred(),promise=deferred.promise();function resolveFunc(i){return function(value){args[i]=arguments.length>1?sliceDeferred.call(arguments,0):value;if(!(--count)){deferred.resolveWith(deferred,args);}};}
function progressFunc(i){return function(value){pValues[i]=arguments.length>1?sliceDeferred.call(arguments,0):value;deferred.notifyWith(promise,pValues);};}
if(length>1){for(;i<length;i++){if(args[i]&&args[i].promise&&jQuery.isFunction(args[i].promise)){args[i].promise().then(resolveFunc(i),deferred.reject,progressFunc(i));}else{--count;}}
if(!count){deferred.resolveWith(deferred,args);}}else if(deferred!==firstParam){deferred.resolveWith(deferred,length?[firstParam]:[]);}
return promise;}});jQuery.support=(function(){var support,all,a,select,opt,input,marginDiv,fragment,tds,events,eventName,i,isSupported,div=document.createElement("div"),documentElement=document.documentElement;div.setAttribute("className","t");div.innerHTML="   <link/><table></table><a href='/a' style='top:1px;float:left;opacity:.55;'>a</a><input type='checkbox'/>";all=div.getElementsByTagName("*");a=div.getElementsByTagName("a")[0];if(!all||!all.length||!a){return{};}
select=document.createElement("select");opt=select.appendChild(document.createElement("option"));input=div.getElementsByTagName("input")[0];support={leadingWhitespace:(div.firstChild.nodeType===3),tbody:!div.getElementsByTagName("tbody").length,htmlSerialize:!!div.getElementsByTagName("link").length,style:/top/.test(a.getAttribute("style")),hrefNormalized:(a.getAttribute("href")==="/a"),opacity:/^0.55/.test(a.style.opacity),cssFloat:!!a.style.cssFloat,checkOn:(input.value==="on"),optSelected:opt.selected,getSetAttribute:div.className!=="t",enctype:!!document.createElement("form").enctype,html5Clone:document.createElement("nav").cloneNode(true).outerHTML!=="<:nav></:nav>",submitBubbles:true,changeBubbles:true,focusinBubbles:false,deleteExpando:true,noCloneEvent:true,inlineBlockNeedsLayout:false,shrinkWrapBlocks:false,reliableMarginRight:true};input.checked=true;support.noCloneChecked=input.cloneNode(true).checked;select.disabled=true;support.optDisabled=!opt.disabled;try{delete div.test;}catch(e){support.deleteExpando=false;}
if(!div.addEventListener&&div.attachEvent&&div.fireEvent){div.attachEvent("onclick",function(){support.noCloneEvent=false;});div.cloneNode(true).fireEvent("onclick");}
input=document.createElement("input");input.value="t";input.setAttribute("type","radio");support.radioValue=input.value==="t";input.setAttribute("checked","checked");div.appendChild(input);fragment=document.createDocumentFragment();fragment.appendChild(div.lastChild);support.checkClone=fragment.cloneNode(true).cloneNode(true).lastChild.checked;support.appendChecked=input.checked;fragment.removeChild(input);fragment.appendChild(div);div.innerHTML="";if(window.getComputedStyle){marginDiv=document.createElement("div");marginDiv.style.width="0";marginDiv.style.marginRight="0";div.style.width="2px";div.appendChild(marginDiv);support.reliableMarginRight=(parseInt((window.getComputedStyle(marginDiv,null)||{marginRight:0}).marginRight,10)||0)===0;}
if(div.attachEvent){for(i in{submit:1,change:1,focusin:1}){eventName="on"+i;isSupported=(eventName in div);if(!isSupported){div.setAttribute(eventName,"return;");isSupported=(typeof div[eventName]==="function");}
support[i+"Bubbles"]=isSupported;}}
fragment.removeChild(div);fragment=select=opt=marginDiv=div=input=null;jQuery(function(){var container,outer,inner,table,td,offsetSupport,conMarginTop,ptlm,vb,style,html,body=document.getElementsByTagName("body")[0];if(!body){return;}
conMarginTop=1;ptlm="position:absolute;top:0;left:0;width:1px;height:1px;margin:0;";vb="visibility:hidden;border:0;";style="style='"+ptlm+"border:5px solid #000;padding:0;'";html="<div "+style+"><div></div></div>"+"<table "+style+" cellpadding='0' cellspacing='0'>"+"<tr><td></td></tr></table>";container=document.createElement("div");container.style.cssText=vb+"width:0;height:0;position:static;top:0;margin-top:"+conMarginTop+"px";body.insertBefore(container,body.firstChild);div=document.createElement("div");container.appendChild(div);div.innerHTML="<table><tr><td style='padding:0;border:0;display:none'></td><td>t</td></tr></table>";tds=div.getElementsByTagName("td");isSupported=(tds[0].offsetHeight===0);tds[0].style.display="";tds[1].style.display="none";support.reliableHiddenOffsets=isSupported&&(tds[0].offsetHeight===0);div.innerHTML="";div.style.width=div.style.paddingLeft="1px";jQuery.boxModel=support.boxModel=div.offsetWidth===2;if(typeof div.style.zoom!=="undefined"){div.style.display="inline";div.style.zoom=1;support.inlineBlockNeedsLayout=(div.offsetWidth===2);div.style.display="";div.innerHTML="<div style='width:4px;'></div>";support.shrinkWrapBlocks=(div.offsetWidth!==2);}
div.style.cssText=ptlm+vb;div.innerHTML=html;outer=div.firstChild;inner=outer.firstChild;td=outer.nextSibling.firstChild.firstChild;offsetSupport={doesNotAddBorder:(inner.offsetTop!==5),doesAddBorderForTableAndCells:(td.offsetTop===5)};inner.style.position="fixed";inner.style.top="20px";offsetSupport.fixedPosition=(inner.offsetTop===20||inner.offsetTop===15);inner.style.position=inner.style.top="";outer.style.overflow="hidden";outer.style.position="relative";offsetSupport.subtractsBorderForOverflowNotVisible=(inner.offsetTop===-5);offsetSupport.doesNotIncludeMarginInBodyOffset=(body.offsetTop!==conMarginTop);body.removeChild(container);div=container=null;jQuery.extend(support,offsetSupport);});return support;})();var rbrace=/^(?:\{.*\}|\[.*\])$/,rmultiDash=/([A-Z])/g;jQuery.extend({cache:{},uuid:0,expando:"jQuery"+(jQuery.fn.jquery+Math.random()).replace(/\D/g,""),noData:{"embed":true,"object":"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000","applet":true},hasData:function(elem){elem=elem.nodeType?jQuery.cache[elem[jQuery.expando]]:elem[jQuery.expando];return!!elem&&!isEmptyDataObject(elem);},data:function(elem,name,data,pvt){if(!jQuery.acceptData(elem)){return;}
var privateCache,thisCache,ret,internalKey=jQuery.expando,getByName=typeof name==="string",isNode=elem.nodeType,cache=isNode?jQuery.cache:elem,id=isNode?elem[internalKey]:elem[internalKey]&&internalKey,isEvents=name==="events";if((!id||!cache[id]||(!isEvents&&!pvt&&!cache[id].data))&&getByName&&data===undefined){return;}
if(!id){if(isNode){elem[internalKey]=id=++jQuery.uuid;}else{id=internalKey;}}
if(!cache[id]){cache[id]={};if(!isNode){cache[id].toJSON=jQuery.noop;}}
if(typeof name==="object"||typeof name==="function"){if(pvt){cache[id]=jQuery.extend(cache[id],name);}else{cache[id].data=jQuery.extend(cache[id].data,name);}}
privateCache=thisCache=cache[id];if(!pvt){if(!thisCache.data){thisCache.data={};}
thisCache=thisCache.data;}
if(data!==undefined){thisCache[jQuery.camelCase(name)]=data;}
if(isEvents&&!thisCache[name]){return privateCache.events;}
if(getByName){ret=thisCache[name];if(ret==null){ret=thisCache[jQuery.camelCase(name)];}}else{ret=thisCache;}
return ret;},removeData:function(elem,name,pvt){if(!jQuery.acceptData(elem)){return;}
var thisCache,i,l,internalKey=jQuery.expando,isNode=elem.nodeType,cache=isNode?jQuery.cache:elem,id=isNode?elem[internalKey]:internalKey;if(!cache[id]){return;}
if(name){thisCache=pvt?cache[id]:cache[id].data;if(thisCache){if(!jQuery.isArray(name)){if(name in thisCache){name=[name];}else{name=jQuery.camelCase(name);if(name in thisCache){name=[name];}else{name=name.split(" ");}}}
for(i=0,l=name.length;i<l;i++){delete thisCache[name[i]];}
if(!(pvt?isEmptyDataObject:jQuery.isEmptyObject)(thisCache)){return;}}}
if(!pvt){delete cache[id].data;if(!isEmptyDataObject(cache[id])){return;}}
if(jQuery.support.deleteExpando||!cache.setInterval){delete cache[id];}else{cache[id]=null;}
if(isNode){if(jQuery.support.deleteExpando){delete elem[internalKey];}else if(elem.removeAttribute){elem.removeAttribute(internalKey);}else{elem[internalKey]=null;}}},_data:function(elem,name,data){return jQuery.data(elem,name,data,true);},acceptData:function(elem){if(elem.nodeName){var match=jQuery.noData[elem.nodeName.toLowerCase()];if(match){return!(match===true||elem.getAttribute("classid")!==match);}}
return true;}});jQuery.fn.extend({data:function(key,value){var parts,attr,name,data=null;if(typeof key==="undefined"){if(this.length){data=jQuery.data(this[0]);if(this[0].nodeType===1&&!jQuery._data(this[0],"parsedAttrs")){attr=this[0].attributes;for(var i=0,l=attr.length;i<l;i++){name=attr[i].name;if(name.indexOf("data-")===0){name=jQuery.camelCase(name.substring(5));dataAttr(this[0],name,data[name]);}}
jQuery._data(this[0],"parsedAttrs",true);}}
return data;}else if(typeof key==="object"){return this.each(function(){jQuery.data(this,key);});}
parts=key.split(".");parts[1]=parts[1]?"."+parts[1]:"";if(value===undefined){data=this.triggerHandler("getData"+parts[1]+"!",[parts[0]]);if(data===undefined&&this.length){data=jQuery.data(this[0],key);data=dataAttr(this[0],key,data);}
return data===undefined&&parts[1]?this.data(parts[0]):data;}else{return this.each(function(){var self=jQuery(this),args=[parts[0],value];self.triggerHandler("setData"+parts[1]+"!",args);jQuery.data(this,key,value);self.triggerHandler("changeData"+parts[1]+"!",args);});}},removeData:function(key){return this.each(function(){jQuery.removeData(this,key);});}});function dataAttr(elem,key,data){if(data===undefined&&elem.nodeType===1){var name="data-"+key.replace(rmultiDash,"-$1").toLowerCase();data=elem.getAttribute(name);if(typeof data==="string"){try{data=data==="true"?true:data==="false"?false:data==="null"?null:jQuery.isNumeric(data)?parseFloat(data):rbrace.test(data)?jQuery.parseJSON(data):data;}catch(e){}
jQuery.data(elem,key,data);}else{data=undefined;}}
return data;}
function isEmptyDataObject(obj){for(var name in obj){if(name==="data"&&jQuery.isEmptyObject(obj[name])){continue;}
if(name!=="toJSON"){return false;}}
return true;}
function handleQueueMarkDefer(elem,type,src){var deferDataKey=type+"defer",queueDataKey=type+"queue",markDataKey=type+"mark",defer=jQuery._data(elem,deferDataKey);if(defer&&(src==="queue"||!jQuery._data(elem,queueDataKey))&&(src==="mark"||!jQuery._data(elem,markDataKey))){setTimeout(function(){if(!jQuery._data(elem,queueDataKey)&&!jQuery._data(elem,markDataKey)){jQuery.removeData(elem,deferDataKey,true);defer.fire();}},0);}}
jQuery.extend({_mark:function(elem,type){if(elem){type=(type||"fx")+"mark";jQuery._data(elem,type,(jQuery._data(elem,type)||0)+1);}},_unmark:function(force,elem,type){if(force!==true){type=elem;elem=force;force=false;}
if(elem){type=type||"fx";var key=type+"mark",count=force?0:((jQuery._data(elem,key)||1)-1);if(count){jQuery._data(elem,key,count);}else{jQuery.removeData(elem,key,true);handleQueueMarkDefer(elem,type,"mark");}}},queue:function(elem,type,data){var q;if(elem){type=(type||"fx")+"queue";q=jQuery._data(elem,type);if(data){if(!q||jQuery.isArray(data)){q=jQuery._data(elem,type,jQuery.makeArray(data));}else{q.push(data);}}
return q||[];}},dequeue:function(elem,type){type=type||"fx";var queue=jQuery.queue(elem,type),fn=queue.shift(),hooks={};if(fn==="inprogress"){fn=queue.shift();}
if(fn){if(type==="fx"){queue.unshift("inprogress");}
jQuery._data(elem,type+".run",hooks);fn.call(elem,function(){jQuery.dequeue(elem,type);},hooks);}
if(!queue.length){jQuery.removeData(elem,type+"queue "+type+".run",true);handleQueueMarkDefer(elem,type,"queue");}}});jQuery.fn.extend({queue:function(type,data){if(typeof type!=="string"){data=type;type="fx";}
if(data===undefined){return jQuery.queue(this[0],type);}
return this.each(function(){var queue=jQuery.queue(this,type,data);if(type==="fx"&&queue[0]!=="inprogress"){jQuery.dequeue(this,type);}});},dequeue:function(type){return this.each(function(){jQuery.dequeue(this,type);});},delay:function(time,type){time=jQuery.fx?jQuery.fx.speeds[time]||time:time;type=type||"fx";return this.queue(type,function(next,hooks){var timeout=setTimeout(next,time);hooks.stop=function(){clearTimeout(timeout);};});},clearQueue:function(type){return this.queue(type||"fx",[]);},promise:function(type,object){if(typeof type!=="string"){object=type;type=undefined;}
type=type||"fx";var defer=jQuery.Deferred(),elements=this,i=elements.length,count=1,deferDataKey=type+"defer",queueDataKey=type+"queue",markDataKey=type+"mark",tmp;function resolve(){if(!(--count)){defer.resolveWith(elements,[elements]);}}
while(i--){if((tmp=jQuery.data(elements[i],deferDataKey,undefined,true)||(jQuery.data(elements[i],queueDataKey,undefined,true)||jQuery.data(elements[i],markDataKey,undefined,true))&&jQuery.data(elements[i],deferDataKey,jQuery.Callbacks("once memory"),true))){count++;tmp.add(resolve);}}
resolve();return defer.promise();}});var rclass=/[\n\t\r]/g,rspace=/\s+/,rreturn=/\r/g,rtype=/^(?:button|input)$/i,rfocusable=/^(?:button|input|object|select|textarea)$/i,rclickable=/^a(?:rea)?$/i,rboolean=/^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i,getSetAttribute=jQuery.support.getSetAttribute,nodeHook,boolHook,fixSpecified;jQuery.fn.extend({attr:function(name,value){return jQuery.access(this,name,value,true,jQuery.attr);},removeAttr:function(name){return this.each(function(){jQuery.removeAttr(this,name);});},prop:function(name,value){return jQuery.access(this,name,value,true,jQuery.prop);},removeProp:function(name){name=jQuery.propFix[name]||name;return this.each(function(){try{this[name]=undefined;delete this[name];}catch(e){}});},addClass:function(value){var classNames,i,l,elem,setClass,c,cl;if(jQuery.isFunction(value)){return this.each(function(j){jQuery(this).addClass(value.call(this,j,this.className));});}
if(value&&typeof value==="string"){classNames=value.split(rspace);for(i=0,l=this.length;i<l;i++){elem=this[i];if(elem.nodeType===1){if(!elem.className&&classNames.length===1){elem.className=value;}else{setClass=" "+elem.className+" ";for(c=0,cl=classNames.length;c<cl;c++){if(!~setClass.indexOf(" "+classNames[c]+" ")){setClass+=classNames[c]+" ";}}
elem.className=jQuery.trim(setClass);}}}}
return this;},removeClass:function(value){var classNames,i,l,elem,className,c,cl;if(jQuery.isFunction(value)){return this.each(function(j){jQuery(this).removeClass(value.call(this,j,this.className));});}
if((value&&typeof value==="string")||value===undefined){classNames=(value||"").split(rspace);for(i=0,l=this.length;i<l;i++){elem=this[i];if(elem.nodeType===1&&elem.className){if(value){className=(" "+elem.className+" ").replace(rclass," ");for(c=0,cl=classNames.length;c<cl;c++){className=className.replace(" "+classNames[c]+" "," ");}
elem.className=jQuery.trim(className);}else{elem.className="";}}}}
return this;},toggleClass:function(value,stateVal){var type=typeof value,isBool=typeof stateVal==="boolean";if(jQuery.isFunction(value)){return this.each(function(i){jQuery(this).toggleClass(value.call(this,i,this.className,stateVal),stateVal);});}
return this.each(function(){if(type==="string"){var className,i=0,self=jQuery(this),state=stateVal,classNames=value.split(rspace);while((className=classNames[i++])){state=isBool?state:!self.hasClass(className);self[state?"addClass":"removeClass"](className);}}else if(type==="undefined"||type==="boolean"){if(this.className){jQuery._data(this,"__className__",this.className);}
this.className=this.className||value===false?"":jQuery._data(this,"__className__")||"";}});},hasClass:function(selector){var className=" "+selector+" ",i=0,l=this.length;for(;i<l;i++){if(this[i].nodeType===1&&(" "+this[i].className+" ").replace(rclass," ").indexOf(className)>-1){return true;}}
return false;},val:function(value){var hooks,ret,isFunction,elem=this[0];if(!arguments.length){if(elem){hooks=jQuery.valHooks[elem.nodeName.toLowerCase()]||jQuery.valHooks[elem.type];if(hooks&&"get"in hooks&&(ret=hooks.get(elem,"value"))!==undefined){return ret;}
ret=elem.value;return typeof ret==="string"?ret.replace(rreturn,""):ret==null?"":ret;}
return;}
isFunction=jQuery.isFunction(value);return this.each(function(i){var self=jQuery(this),val;if(this.nodeType!==1){return;}
if(isFunction){val=value.call(this,i,self.val());}else{val=value;}
if(val==null){val="";}else if(typeof val==="number"){val+="";}else if(jQuery.isArray(val)){val=jQuery.map(val,function(value){return value==null?"":value+"";});}
hooks=jQuery.valHooks[this.nodeName.toLowerCase()]||jQuery.valHooks[this.type];if(!hooks||!("set"in hooks)||hooks.set(this,val,"value")===undefined){this.value=val;}});}});jQuery.extend({valHooks:{option:{get:function(elem){var val=elem.attributes.value;return!val||val.specified?elem.value:elem.text;}},select:{get:function(elem){var value,i,max,option,index=elem.selectedIndex,values=[],options=elem.options,one=elem.type==="select-one";if(index<0){return null;}
i=one?index:0;max=one?index+1:options.length;for(;i<max;i++){option=options[i];if(option.selected&&(jQuery.support.optDisabled?!option.disabled:option.getAttribute("disabled")===null)&&(!option.parentNode.disabled||!jQuery.nodeName(option.parentNode,"optgroup"))){value=jQuery(option).val();if(one){return value;}
values.push(value);}}
if(one&&!values.length&&options.length){return jQuery(options[index]).val();}
return values;},set:function(elem,value){var values=jQuery.makeArray(value);jQuery(elem).find("option").each(function(){this.selected=jQuery.inArray(jQuery(this).val(),values)>=0;});if(!values.length){elem.selectedIndex=-1;}
return values;}}},attrFn:{val:true,css:true,html:true,text:true,data:true,width:true,height:true,offset:true},attr:function(elem,name,value,pass){var ret,hooks,notxml,nType=elem.nodeType;if(!elem||nType===3||nType===8||nType===2){return;}
if(pass&&name in jQuery.attrFn){return jQuery(elem)[name](value);}
if(typeof elem.getAttribute==="undefined"){return jQuery.prop(elem,name,value);}
notxml=nType!==1||!jQuery.isXMLDoc(elem);if(notxml){name=name.toLowerCase();hooks=jQuery.attrHooks[name]||(rboolean.test(name)?boolHook:nodeHook);}
if(value!==undefined){if(value===null){jQuery.removeAttr(elem,name);return;}else if(hooks&&"set"in hooks&&notxml&&(ret=hooks.set(elem,value,name))!==undefined){return ret;}else{elem.setAttribute(name,""+value);return value;}}else if(hooks&&"get"in hooks&&notxml&&(ret=hooks.get(elem,name))!==null){return ret;}else{ret=elem.getAttribute(name);return ret===null?undefined:ret;}},removeAttr:function(elem,value){var propName,attrNames,name,l,i=0;if(value&&elem.nodeType===1){attrNames=value.toLowerCase().split(rspace);l=attrNames.length;for(;i<l;i++){name=attrNames[i];if(name){propName=jQuery.propFix[name]||name;jQuery.attr(elem,name,"");elem.removeAttribute(getSetAttribute?name:propName);if(rboolean.test(name)&&propName in elem){elem[propName]=false;}}}}},attrHooks:{type:{set:function(elem,value){if(rtype.test(elem.nodeName)&&elem.parentNode){jQuery.error("type property can't be changed");}else if(!jQuery.support.radioValue&&value==="radio"&&jQuery.nodeName(elem,"input")){var val=elem.value;elem.setAttribute("type",value);if(val){elem.value=val;}
return value;}}},value:{get:function(elem,name){if(nodeHook&&jQuery.nodeName(elem,"button")){return nodeHook.get(elem,name);}
return name in elem?elem.value:null;},set:function(elem,value,name){if(nodeHook&&jQuery.nodeName(elem,"button")){return nodeHook.set(elem,value,name);}
elem.value=value;}}},propFix:{tabindex:"tabIndex",readonly:"readOnly","for":"htmlFor","class":"className",maxlength:"maxLength",cellspacing:"cellSpacing",cellpadding:"cellPadding",rowspan:"rowSpan",colspan:"colSpan",usemap:"useMap",frameborder:"frameBorder",contenteditable:"contentEditable"},prop:function(elem,name,value){var ret,hooks,notxml,nType=elem.nodeType;if(!elem||nType===3||nType===8||nType===2){return;}
notxml=nType!==1||!jQuery.isXMLDoc(elem);if(notxml){name=jQuery.propFix[name]||name;hooks=jQuery.propHooks[name];}
if(value!==undefined){if(hooks&&"set"in hooks&&(ret=hooks.set(elem,value,name))!==undefined){return ret;}else{return(elem[name]=value);}}else{if(hooks&&"get"in hooks&&(ret=hooks.get(elem,name))!==null){return ret;}else{return elem[name];}}},propHooks:{tabIndex:{get:function(elem){var attributeNode=elem.getAttributeNode("tabindex");return attributeNode&&attributeNode.specified?parseInt(attributeNode.value,10):rfocusable.test(elem.nodeName)||rclickable.test(elem.nodeName)&&elem.href?0:undefined;}}}});jQuery.attrHooks.tabindex=jQuery.propHooks.tabIndex;boolHook={get:function(elem,name){var attrNode,property=jQuery.prop(elem,name);return property===true||typeof property!=="boolean"&&(attrNode=elem.getAttributeNode(name))&&attrNode.nodeValue!==false?name.toLowerCase():undefined;},set:function(elem,value,name){var propName;if(value===false){jQuery.removeAttr(elem,name);}else{propName=jQuery.propFix[name]||name;if(propName in elem){elem[propName]=true;}
elem.setAttribute(name,name.toLowerCase());}
return name;}};if(!getSetAttribute){fixSpecified={name:true,id:true};nodeHook=jQuery.valHooks.button={get:function(elem,name){var ret;ret=elem.getAttributeNode(name);return ret&&(fixSpecified[name]?ret.nodeValue!=="":ret.specified)?ret.nodeValue:undefined;},set:function(elem,value,name){var ret=elem.getAttributeNode(name);if(!ret){ret=document.createAttribute(name);elem.setAttributeNode(ret);}
return(ret.nodeValue=value+"");}};jQuery.attrHooks.tabindex.set=nodeHook.set;jQuery.each(["width","height"],function(i,name){jQuery.attrHooks[name]=jQuery.extend(jQuery.attrHooks[name],{set:function(elem,value){if(value===""){elem.setAttribute(name,"auto");return value;}}});});jQuery.attrHooks.contenteditable={get:nodeHook.get,set:function(elem,value,name){if(value===""){value="false";}
nodeHook.set(elem,value,name);}};}
if(!jQuery.support.hrefNormalized){jQuery.each(["href","src","width","height"],function(i,name){jQuery.attrHooks[name]=jQuery.extend(jQuery.attrHooks[name],{get:function(elem){var ret=elem.getAttribute(name,2);return ret===null?undefined:ret;}});});}
if(!jQuery.support.style){jQuery.attrHooks.style={get:function(elem){return elem.style.cssText.toLowerCase()||undefined;},set:function(elem,value){return(elem.style.cssText=""+value);}};}
if(!jQuery.support.optSelected){jQuery.propHooks.selected=jQuery.extend(jQuery.propHooks.selected,{get:function(elem){var parent=elem.parentNode;if(parent){parent.selectedIndex;if(parent.parentNode){parent.parentNode.selectedIndex;}}
return null;}});}
if(!jQuery.support.enctype){jQuery.propFix.enctype="encoding";}
if(!jQuery.support.checkOn){jQuery.each(["radio","checkbox"],function(){jQuery.valHooks[this]={get:function(elem){return elem.getAttribute("value")===null?"on":elem.value;}};});}
jQuery.each(["radio","checkbox"],function(){jQuery.valHooks[this]=jQuery.extend(jQuery.valHooks[this],{set:function(elem,value){if(jQuery.isArray(value)){return(elem.checked=jQuery.inArray(jQuery(elem).val(),value)>=0);}}});});var rformElems=/^(?:textarea|input|select)$/i,rtypenamespace=/^([^\.]*)?(?:\.(.+))?$/,rhoverHack=/\bhover(\.\S+)?\b/,rkeyEvent=/^key/,rmouseEvent=/^(?:mouse|contextmenu)|click/,rfocusMorph=/^(?:focusinfocus|focusoutblur)$/,rquickIs=/^(\w*)(?:#([\w\-]+))?(?:\.([\w\-]+))?$/,quickParse=function(selector){var quick=rquickIs.exec(selector);if(quick){quick[1]=(quick[1]||"").toLowerCase();quick[3]=quick[3]&&new RegExp("(?:^|\\s)"+quick[3]+"(?:\\s|$)");}
return quick;},quickIs=function(elem,m){var attrs=elem.attributes||{};return((!m[1]||elem.nodeName.toLowerCase()===m[1])&&(!m[2]||(attrs.id||{}).value===m[2])&&(!m[3]||m[3].test((attrs["class"]||{}).value)));},hoverHack=function(events){return jQuery.event.special.hover?events:events.replace(rhoverHack,"mouseenter$1 mouseleave$1");};jQuery.event={add:function(elem,types,handler,data,selector){var elemData,eventHandle,events,t,tns,type,namespaces,handleObj,handleObjIn,quick,handlers,special;if(elem.nodeType===3||elem.nodeType===8||!types||!handler||!(elemData=jQuery._data(elem))){return;}
if(handler.handler){handleObjIn=handler;handler=handleObjIn.handler;}
if(!handler.guid){handler.guid=jQuery.guid++;}
events=elemData.events;if(!events){elemData.events=events={};}
eventHandle=elemData.handle;if(!eventHandle){elemData.handle=eventHandle=function(e){return typeof jQuery!=="undefined"&&(!e||jQuery.event.triggered!==e.type)?jQuery.event.dispatch.apply(eventHandle.elem,arguments):undefined;};eventHandle.elem=elem;}
types=jQuery.trim(hoverHack(types)).split(" ");for(t=0;t<types.length;t++){tns=rtypenamespace.exec(types[t])||[];type=tns[1];namespaces=(tns[2]||"").split(".").sort();special=jQuery.event.special[type]||{};type=(selector?special.delegateType:special.bindType)||type;special=jQuery.event.special[type]||{};handleObj=jQuery.extend({type:type,origType:tns[1],data:data,handler:handler,guid:handler.guid,selector:selector,quick:quickParse(selector),namespace:namespaces.join(".")},handleObjIn);handlers=events[type];if(!handlers){handlers=events[type]=[];handlers.delegateCount=0;if(!special.setup||special.setup.call(elem,data,namespaces,eventHandle)===false){if(elem.addEventListener){elem.addEventListener(type,eventHandle,false);}else if(elem.attachEvent){elem.attachEvent("on"+type,eventHandle);}}}
if(special.add){special.add.call(elem,handleObj);if(!handleObj.handler.guid){handleObj.handler.guid=handler.guid;}}
if(selector){handlers.splice(handlers.delegateCount++,0,handleObj);}else{handlers.push(handleObj);}
jQuery.event.global[type]=true;}
elem=null;},global:{},remove:function(elem,types,handler,selector,mappedTypes){var elemData=jQuery.hasData(elem)&&jQuery._data(elem),t,tns,type,origType,namespaces,origCount,j,events,special,handle,eventType,handleObj;if(!elemData||!(events=elemData.events)){return;}
types=jQuery.trim(hoverHack(types||"")).split(" ");for(t=0;t<types.length;t++){tns=rtypenamespace.exec(types[t])||[];type=origType=tns[1];namespaces=tns[2];if(!type){for(type in events){jQuery.event.remove(elem,type+types[t],handler,selector,true);}
continue;}
special=jQuery.event.special[type]||{};type=(selector?special.delegateType:special.bindType)||type;eventType=events[type]||[];origCount=eventType.length;namespaces=namespaces?new RegExp("(^|\\.)"+namespaces.split(".").sort().join("\\.(?:.*\\.)?")+"(\\.|$)"):null;for(j=0;j<eventType.length;j++){handleObj=eventType[j];if((mappedTypes||origType===handleObj.origType)&&(!handler||handler.guid===handleObj.guid)&&(!namespaces||namespaces.test(handleObj.namespace))&&(!selector||selector===handleObj.selector||selector==="**"&&handleObj.selector)){eventType.splice(j--,1);if(handleObj.selector){eventType.delegateCount--;}
if(special.remove){special.remove.call(elem,handleObj);}}}
if(eventType.length===0&&origCount!==eventType.length){if(!special.teardown||special.teardown.call(elem,namespaces)===false){jQuery.removeEvent(elem,type,elemData.handle);}
delete events[type];}}
if(jQuery.isEmptyObject(events)){handle=elemData.handle;if(handle){handle.elem=null;}
jQuery.removeData(elem,["events","handle"],true);}},customEvent:{"getData":true,"setData":true,"changeData":true},trigger:function(event,data,elem,onlyHandlers){if(elem&&(elem.nodeType===3||elem.nodeType===8)){return;}
var type=event.type||event,namespaces=[],cache,exclusive,i,cur,old,ontype,special,handle,eventPath,bubbleType;if(rfocusMorph.test(type+jQuery.event.triggered)){return;}
if(type.indexOf("!")>=0){type=type.slice(0,-1);exclusive=true;}
if(type.indexOf(".")>=0){namespaces=type.split(".");type=namespaces.shift();namespaces.sort();}
if((!elem||jQuery.event.customEvent[type])&&!jQuery.event.global[type]){return;}
event=typeof event==="object"?event[jQuery.expando]?event:new jQuery.Event(type,event):new jQuery.Event(type);event.type=type;event.isTrigger=true;event.exclusive=exclusive;event.namespace=namespaces.join(".");event.namespace_re=event.namespace?new RegExp("(^|\\.)"+namespaces.join("\\.(?:.*\\.)?")+"(\\.|$)"):null;ontype=type.indexOf(":")<0?"on"+type:"";if(!elem){cache=jQuery.cache;for(i in cache){if(cache[i].events&&cache[i].events[type]){jQuery.event.trigger(event,data,cache[i].handle.elem,true);}}
return;}
event.result=undefined;if(!event.target){event.target=elem;}
data=data!=null?jQuery.makeArray(data):[];data.unshift(event);special=jQuery.event.special[type]||{};if(special.trigger&&special.trigger.apply(elem,data)===false){return;}
eventPath=[[elem,special.bindType||type]];if(!onlyHandlers&&!special.noBubble&&!jQuery.isWindow(elem)){bubbleType=special.delegateType||type;cur=rfocusMorph.test(bubbleType+type)?elem:elem.parentNode;old=null;for(;cur;cur=cur.parentNode){eventPath.push([cur,bubbleType]);old=cur;}
if(old&&old===elem.ownerDocument){eventPath.push([old.defaultView||old.parentWindow||window,bubbleType]);}}
for(i=0;i<eventPath.length&&!event.isPropagationStopped();i++){cur=eventPath[i][0];event.type=eventPath[i][1];handle=(jQuery._data(cur,"events")||{})[event.type]&&jQuery._data(cur,"handle");if(handle){handle.apply(cur,data);}
handle=ontype&&cur[ontype];if(handle&&jQuery.acceptData(cur)&&handle.apply(cur,data)===false){event.preventDefault();}}
event.type=type;if(!onlyHandlers&&!event.isDefaultPrevented()){if((!special._default||special._default.apply(elem.ownerDocument,data)===false)&&!(type==="click"&&jQuery.nodeName(elem,"a"))&&jQuery.acceptData(elem)){if(ontype&&elem[type]&&((type!=="focus"&&type!=="blur")||event.target.offsetWidth!==0)&&!jQuery.isWindow(elem)){old=elem[ontype];if(old){elem[ontype]=null;}
jQuery.event.triggered=type;elem[type]();jQuery.event.triggered=undefined;if(old){elem[ontype]=old;}}}}
return event.result;},dispatch:function(event){event=jQuery.event.fix(event||window.event);var handlers=((jQuery._data(this,"events")||{})[event.type]||[]),delegateCount=handlers.delegateCount,args=[].slice.call(arguments,0),run_all=!event.exclusive&&!event.namespace,handlerQueue=[],i,j,cur,jqcur,ret,selMatch,matched,matches,handleObj,sel,related;args[0]=event;event.delegateTarget=this;if(delegateCount&&!event.target.disabled&&!(event.button&&event.type==="click")){jqcur=jQuery(this);jqcur.context=this.ownerDocument||this;for(cur=event.target;cur!=this;cur=cur.parentNode||this){selMatch={};matches=[];jqcur[0]=cur;for(i=0;i<delegateCount;i++){handleObj=handlers[i];sel=handleObj.selector;if(selMatch[sel]===undefined){selMatch[sel]=(handleObj.quick?quickIs(cur,handleObj.quick):jqcur.is(sel));}
if(selMatch[sel]){matches.push(handleObj);}}
if(matches.length){handlerQueue.push({elem:cur,matches:matches});}}}
if(handlers.length>delegateCount){handlerQueue.push({elem:this,matches:handlers.slice(delegateCount)});}
for(i=0;i<handlerQueue.length&&!event.isPropagationStopped();i++){matched=handlerQueue[i];event.currentTarget=matched.elem;for(j=0;j<matched.matches.length&&!event.isImmediatePropagationStopped();j++){handleObj=matched.matches[j];if(run_all||(!event.namespace&&!handleObj.namespace)||event.namespace_re&&event.namespace_re.test(handleObj.namespace)){event.data=handleObj.data;event.handleObj=handleObj;ret=((jQuery.event.special[handleObj.origType]||{}).handle||handleObj.handler).apply(matched.elem,args);if(ret!==undefined){event.result=ret;if(ret===false){event.preventDefault();event.stopPropagation();}}}}}
return event.result;},props:"attrChange attrName relatedNode srcElement altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(event,original){if(event.which==null){event.which=original.charCode!=null?original.charCode:original.keyCode;}
return event;}},mouseHooks:{props:"button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(event,original){var eventDoc,doc,body,button=original.button,fromElement=original.fromElement;if(event.pageX==null&&original.clientX!=null){eventDoc=event.target.ownerDocument||document;doc=eventDoc.documentElement;body=eventDoc.body;event.pageX=original.clientX+(doc&&doc.scrollLeft||body&&body.scrollLeft||0)-(doc&&doc.clientLeft||body&&body.clientLeft||0);event.pageY=original.clientY+(doc&&doc.scrollTop||body&&body.scrollTop||0)-(doc&&doc.clientTop||body&&body.clientTop||0);}
if(!event.relatedTarget&&fromElement){event.relatedTarget=fromElement===event.target?original.toElement:fromElement;}
if(!event.which&&button!==undefined){event.which=(button&1?1:(button&2?3:(button&4?2:0)));}
return event;}},fix:function(event){if(event[jQuery.expando]){return event;}
var i,prop,originalEvent=event,fixHook=jQuery.event.fixHooks[event.type]||{},copy=fixHook.props?this.props.concat(fixHook.props):this.props;event=jQuery.Event(originalEvent);for(i=copy.length;i;){prop=copy[--i];event[prop]=originalEvent[prop];}
if(!event.target){event.target=originalEvent.srcElement||document;}
if(event.target.nodeType===3){event.target=event.target.parentNode;}
if(event.metaKey===undefined){event.metaKey=event.ctrlKey;}
return fixHook.filter?fixHook.filter(event,originalEvent):event;},special:{ready:{setup:jQuery.bindReady},load:{noBubble:true},focus:{delegateType:"focusin"},blur:{delegateType:"focusout"},beforeunload:{setup:function(data,namespaces,eventHandle){if(jQuery.isWindow(this)){this.onbeforeunload=eventHandle;}},teardown:function(namespaces,eventHandle){if(this.onbeforeunload===eventHandle){this.onbeforeunload=null;}}}},simulate:function(type,elem,event,bubble){var e=jQuery.extend(new jQuery.Event(),event,{type:type,isSimulated:true,originalEvent:{}});if(bubble){jQuery.event.trigger(e,null,elem);}else{jQuery.event.dispatch.call(elem,e);}
if(e.isDefaultPrevented()){event.preventDefault();}}};jQuery.event.handle=jQuery.event.dispatch;jQuery.removeEvent=document.removeEventListener?function(elem,type,handle){if(elem.removeEventListener){elem.removeEventListener(type,handle,false);}}:function(elem,type,handle){if(elem.detachEvent){elem.detachEvent("on"+type,handle);}};jQuery.Event=function(src,props){if(!(this instanceof jQuery.Event)){return new jQuery.Event(src,props);}
if(src&&src.type){this.originalEvent=src;this.type=src.type;this.isDefaultPrevented=(src.defaultPrevented||src.returnValue===false||src.getPreventDefault&&src.getPreventDefault())?returnTrue:returnFalse;}else{this.type=src;}
if(props){jQuery.extend(this,props);}
this.timeStamp=src&&src.timeStamp||jQuery.now();this[jQuery.expando]=true;};function returnFalse(){return false;}
function returnTrue(){return true;}
jQuery.Event.prototype={preventDefault:function(){this.isDefaultPrevented=returnTrue;var e=this.originalEvent;if(!e){return;}
if(e.preventDefault){e.preventDefault();}else{e.returnValue=false;}},stopPropagation:function(){this.isPropagationStopped=returnTrue;var e=this.originalEvent;if(!e){return;}
if(e.stopPropagation){e.stopPropagation();}
e.cancelBubble=true;},stopImmediatePropagation:function(){this.isImmediatePropagationStopped=returnTrue;this.stopPropagation();},isDefaultPrevented:returnFalse,isPropagationStopped:returnFalse,isImmediatePropagationStopped:returnFalse};jQuery.each({mouseenter:"mouseover",mouseleave:"mouseout"},function(orig,fix){jQuery.event.special[orig]={delegateType:fix,bindType:fix,handle:function(event){var target=this,related=event.relatedTarget,handleObj=event.handleObj,selector=handleObj.selector,ret;if(!related||(related!==target&&!jQuery.contains(target,related))){event.type=handleObj.origType;ret=handleObj.handler.apply(this,arguments);event.type=fix;}
return ret;}};});if(!jQuery.support.submitBubbles){jQuery.event.special.submit={setup:function(){if(jQuery.nodeName(this,"form")){return false;}
jQuery.event.add(this,"click._submit keypress._submit",function(e){var elem=e.target,form=jQuery.nodeName(elem,"input")||jQuery.nodeName(elem,"button")?elem.form:undefined;if(form&&!form._submit_attached){jQuery.event.add(form,"submit._submit",function(event){if(this.parentNode&&!event.isTrigger){jQuery.event.simulate("submit",this.parentNode,event,true);}});form._submit_attached=true;}});},teardown:function(){if(jQuery.nodeName(this,"form")){return false;}
jQuery.event.remove(this,"._submit");}};}
if(!jQuery.support.changeBubbles){jQuery.event.special.change={setup:function(){if(rformElems.test(this.nodeName)){if(this.type==="checkbox"||this.type==="radio"){jQuery.event.add(this,"propertychange._change",function(event){if(event.originalEvent.propertyName==="checked"){this._just_changed=true;}});jQuery.event.add(this,"click._change",function(event){if(this._just_changed&&!event.isTrigger){this._just_changed=false;jQuery.event.simulate("change",this,event,true);}});}
return false;}
jQuery.event.add(this,"beforeactivate._change",function(e){var elem=e.target;if(rformElems.test(elem.nodeName)&&!elem._change_attached){jQuery.event.add(elem,"change._change",function(event){if(this.parentNode&&!event.isSimulated&&!event.isTrigger){jQuery.event.simulate("change",this.parentNode,event,true);}});elem._change_attached=true;}});},handle:function(event){var elem=event.target;if(this!==elem||event.isSimulated||event.isTrigger||(elem.type!=="radio"&&elem.type!=="checkbox")){return event.handleObj.handler.apply(this,arguments);}},teardown:function(){jQuery.event.remove(this,"._change");return rformElems.test(this.nodeName);}};}
if(!jQuery.support.focusinBubbles){jQuery.each({focus:"focusin",blur:"focusout"},function(orig,fix){var attaches=0,handler=function(event){jQuery.event.simulate(fix,event.target,jQuery.event.fix(event),true);};jQuery.event.special[fix]={setup:function(){if(attaches++===0){document.addEventListener(orig,handler,true);}},teardown:function(){if(--attaches===0){document.removeEventListener(orig,handler,true);}}};});}
jQuery.fn.extend({on:function(types,selector,data,fn,one){var origFn,type;if(typeof types==="object"){if(typeof selector!=="string"){data=selector;selector=undefined;}
for(type in types){this.on(type,selector,data,types[type],one);}
return this;}
if(data==null&&fn==null){fn=selector;data=selector=undefined;}else if(fn==null){if(typeof selector==="string"){fn=data;data=undefined;}else{fn=data;data=selector;selector=undefined;}}
if(fn===false){fn=returnFalse;}else if(!fn){return this;}
if(one===1){origFn=fn;fn=function(event){jQuery().off(event);return origFn.apply(this,arguments);};fn.guid=origFn.guid||(origFn.guid=jQuery.guid++);}
return this.each(function(){jQuery.event.add(this,types,fn,data,selector);});},one:function(types,selector,data,fn){return this.on.call(this,types,selector,data,fn,1);},off:function(types,selector,fn){if(types&&types.preventDefault&&types.handleObj){var handleObj=types.handleObj;jQuery(types.delegateTarget).off(handleObj.namespace?handleObj.type+"."+handleObj.namespace:handleObj.type,handleObj.selector,handleObj.handler);return this;}
if(typeof types==="object"){for(var type in types){this.off(type,selector,types[type]);}
return this;}
if(selector===false||typeof selector==="function"){fn=selector;selector=undefined;}
if(fn===false){fn=returnFalse;}
return this.each(function(){jQuery.event.remove(this,types,fn,selector);});},bind:function(types,data,fn){return this.on(types,null,data,fn);},unbind:function(types,fn){return this.off(types,null,fn);},live:function(types,data,fn){jQuery(this.context).on(types,this.selector,data,fn);return this;},die:function(types,fn){jQuery(this.context).off(types,this.selector||"**",fn);return this;},delegate:function(selector,types,data,fn){return this.on(types,selector,data,fn);},undelegate:function(selector,types,fn){return arguments.length==1?this.off(selector,"**"):this.off(types,selector,fn);},trigger:function(type,data){return this.each(function(){jQuery.event.trigger(type,data,this);});},triggerHandler:function(type,data){if(this[0]){return jQuery.event.trigger(type,data,this[0],true);}},toggle:function(fn){var args=arguments,guid=fn.guid||jQuery.guid++,i=0,toggler=function(event){var lastToggle=(jQuery._data(this,"lastToggle"+fn.guid)||0)%i;jQuery._data(this,"lastToggle"+fn.guid,lastToggle+1);event.preventDefault();return args[lastToggle].apply(this,arguments)||false;};toggler.guid=guid;while(i<args.length){args[i++].guid=guid;}
return this.click(toggler);},hover:function(fnOver,fnOut){return this.mouseenter(fnOver).mouseleave(fnOut||fnOver);}});jQuery.each(("blur focus focusin focusout load resize scroll unload click dblclick "+"mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave "+"change select submit keydown keypress keyup error contextmenu").split(" "),function(i,name){jQuery.fn[name]=function(data,fn){if(fn==null){fn=data;data=null;}
return arguments.length>0?this.on(name,null,data,fn):this.trigger(name);};if(jQuery.attrFn){jQuery.attrFn[name]=true;}
if(rkeyEvent.test(name)){jQuery.event.fixHooks[name]=jQuery.event.keyHooks;}
if(rmouseEvent.test(name)){jQuery.event.fixHooks[name]=jQuery.event.mouseHooks;}});(function(){var chunker=/((?:\((?:\([^()]+\)|[^()]+)+\)|\[(?:\[[^\[\]]*\]|['"][^'"]*['"]|[^\[\]'"]+)+\]|\\.|[^ >+~,(\[\\]+)+|[>+~])(\s*,\s*)?((?:.|\r|\n)*)/g,expando="sizcache"+(Math.random()+'').replace('.',''),done=0,toString=Object.prototype.toString,hasDuplicate=false,baseHasDuplicate=true,rBackslash=/\\/g,rReturn=/\r\n/g,rNonWord=/\W/;[0,0].sort(function(){baseHasDuplicate=false;return 0;});var Sizzle=function(selector,context,results,seed){results=results||[];context=context||document;var origContext=context;if(context.nodeType!==1&&context.nodeType!==9){return[];}
if(!selector||typeof selector!=="string"){return results;}
var m,set,checkSet,extra,ret,cur,pop,i,prune=true,contextXML=Sizzle.isXML(context),parts=[],soFar=selector;do{chunker.exec("");m=chunker.exec(soFar);if(m){soFar=m[3];parts.push(m[1]);if(m[2]){extra=m[3];break;}}}while(m);if(parts.length>1&&origPOS.exec(selector)){if(parts.length===2&&Expr.relative[parts[0]]){set=posProcess(parts[0]+parts[1],context,seed);}else{set=Expr.relative[parts[0]]?[context]:Sizzle(parts.shift(),context);while(parts.length){selector=parts.shift();if(Expr.relative[selector]){selector+=parts.shift();}
set=posProcess(selector,set,seed);}}}else{if(!seed&&parts.length>1&&context.nodeType===9&&!contextXML&&Expr.match.ID.test(parts[0])&&!Expr.match.ID.test(parts[parts.length-1])){ret=Sizzle.find(parts.shift(),context,contextXML);context=ret.expr?Sizzle.filter(ret.expr,ret.set)[0]:ret.set[0];}
if(context){ret=seed?{expr:parts.pop(),set:makeArray(seed)}:Sizzle.find(parts.pop(),parts.length===1&&(parts[0]==="~"||parts[0]==="+")&&context.parentNode?context.parentNode:context,contextXML);set=ret.expr?Sizzle.filter(ret.expr,ret.set):ret.set;if(parts.length>0){checkSet=makeArray(set);}else{prune=false;}
while(parts.length){cur=parts.pop();pop=cur;if(!Expr.relative[cur]){cur="";}else{pop=parts.pop();}
if(pop==null){pop=context;}
Expr.relative[cur](checkSet,pop,contextXML);}}else{checkSet=parts=[];}}
if(!checkSet){checkSet=set;}
if(!checkSet){Sizzle.error(cur||selector);}
if(toString.call(checkSet)==="[object Array]"){if(!prune){results.push.apply(results,checkSet);}else if(context&&context.nodeType===1){for(i=0;checkSet[i]!=null;i++){if(checkSet[i]&&(checkSet[i]===true||checkSet[i].nodeType===1&&Sizzle.contains(context,checkSet[i]))){results.push(set[i]);}}}else{for(i=0;checkSet[i]!=null;i++){if(checkSet[i]&&checkSet[i].nodeType===1){results.push(set[i]);}}}}else{makeArray(checkSet,results);}
if(extra){Sizzle(extra,origContext,results,seed);Sizzle.uniqueSort(results);}
return results;};Sizzle.uniqueSort=function(results){if(sortOrder){hasDuplicate=baseHasDuplicate;results.sort(sortOrder);if(hasDuplicate){for(var i=1;i<results.length;i++){if(results[i]===results[i-1]){results.splice(i--,1);}}}}
return results;};Sizzle.matches=function(expr,set){return Sizzle(expr,null,null,set);};Sizzle.matchesSelector=function(node,expr){return Sizzle(expr,null,null,[node]).length>0;};Sizzle.find=function(expr,context,isXML){var set,i,len,match,type,left;if(!expr){return[];}
for(i=0,len=Expr.order.length;i<len;i++){type=Expr.order[i];if((match=Expr.leftMatch[type].exec(expr))){left=match[1];match.splice(1,1);if(left.substr(left.length-1)!=="\\"){match[1]=(match[1]||"").replace(rBackslash,"");set=Expr.find[type](match,context,isXML);if(set!=null){expr=expr.replace(Expr.match[type],"");break;}}}}
if(!set){set=typeof context.getElementsByTagName!=="undefined"?context.getElementsByTagName("*"):[];}
return{set:set,expr:expr};};Sizzle.filter=function(expr,set,inplace,not){var match,anyFound,type,found,item,filter,left,i,pass,old=expr,result=[],curLoop=set,isXMLFilter=set&&set[0]&&Sizzle.isXML(set[0]);while(expr&&set.length){for(type in Expr.filter){if((match=Expr.leftMatch[type].exec(expr))!=null&&match[2]){filter=Expr.filter[type];left=match[1];anyFound=false;match.splice(1,1);if(left.substr(left.length-1)==="\\"){continue;}
if(curLoop===result){result=[];}
if(Expr.preFilter[type]){match=Expr.preFilter[type](match,curLoop,inplace,result,not,isXMLFilter);if(!match){anyFound=found=true;}else if(match===true){continue;}}
if(match){for(i=0;(item=curLoop[i])!=null;i++){if(item){found=filter(item,match,i,curLoop);pass=not^found;if(inplace&&found!=null){if(pass){anyFound=true;}else{curLoop[i]=false;}}else if(pass){result.push(item);anyFound=true;}}}}
if(found!==undefined){if(!inplace){curLoop=result;}
expr=expr.replace(Expr.match[type],"");if(!anyFound){return[];}
break;}}}
if(expr===old){if(anyFound==null){Sizzle.error(expr);}else{break;}}
old=expr;}
return curLoop;};Sizzle.error=function(msg){throw new Error("Syntax error, unrecognized expression: "+msg);};var getText=Sizzle.getText=function(elem){var i,node,nodeType=elem.nodeType,ret="";if(nodeType){if(nodeType===1||nodeType===9){if(typeof elem.textContent==='string'){return elem.textContent;}else if(typeof elem.innerText==='string'){return elem.innerText.replace(rReturn,'');}else{for(elem=elem.firstChild;elem;elem=elem.nextSibling){ret+=getText(elem);}}}else if(nodeType===3||nodeType===4){return elem.nodeValue;}}else{for(i=0;(node=elem[i]);i++){if(node.nodeType!==8){ret+=getText(node);}}}
return ret;};var Expr=Sizzle.selectors={order:["ID","NAME","TAG"],match:{ID:/#((?:[\w\u00c0-\uFFFF\-]|\\.)+)/,CLASS:/\.((?:[\w\u00c0-\uFFFF\-]|\\.)+)/,NAME:/\[name=['"]*((?:[\w\u00c0-\uFFFF\-]|\\.)+)['"]*\]/,ATTR:/\[\s*((?:[\w\u00c0-\uFFFF\-]|\\.)+)\s*(?:(\S?=)\s*(?:(['"])(.*?)\3|(#?(?:[\w\u00c0-\uFFFF\-]|\\.)*)|)|)\s*\]/,TAG:/^((?:[\w\u00c0-\uFFFF\*\-]|\\.)+)/,CHILD:/:(only|nth|last|first)-child(?:\(\s*(even|odd|(?:[+\-]?\d+|(?:[+\-]?\d*)?n\s*(?:[+\-]\s*\d+)?))\s*\))?/,POS:/:(nth|eq|gt|lt|first|last|even|odd)(?:\((\d*)\))?(?=[^\-]|$)/,PSEUDO:/:((?:[\w\u00c0-\uFFFF\-]|\\.)+)(?:\((['"]?)((?:\([^\)]+\)|[^\(\)]*)+)\2\))?/},leftMatch:{},attrMap:{"class":"className","for":"htmlFor"},attrHandle:{href:function(elem){return elem.getAttribute("href");},type:function(elem){return elem.getAttribute("type");}},relative:{"+":function(checkSet,part){var isPartStr=typeof part==="string",isTag=isPartStr&&!rNonWord.test(part),isPartStrNotTag=isPartStr&&!isTag;if(isTag){part=part.toLowerCase();}
for(var i=0,l=checkSet.length,elem;i<l;i++){if((elem=checkSet[i])){while((elem=elem.previousSibling)&&elem.nodeType!==1){}
checkSet[i]=isPartStrNotTag||elem&&elem.nodeName.toLowerCase()===part?elem||false:elem===part;}}
if(isPartStrNotTag){Sizzle.filter(part,checkSet,true);}},">":function(checkSet,part){var elem,isPartStr=typeof part==="string",i=0,l=checkSet.length;if(isPartStr&&!rNonWord.test(part)){part=part.toLowerCase();for(;i<l;i++){elem=checkSet[i];if(elem){var parent=elem.parentNode;checkSet[i]=parent.nodeName.toLowerCase()===part?parent:false;}}}else{for(;i<l;i++){elem=checkSet[i];if(elem){checkSet[i]=isPartStr?elem.parentNode:elem.parentNode===part;}}
if(isPartStr){Sizzle.filter(part,checkSet,true);}}},"":function(checkSet,part,isXML){var nodeCheck,doneName=done++,checkFn=dirCheck;if(typeof part==="string"&&!rNonWord.test(part)){part=part.toLowerCase();nodeCheck=part;checkFn=dirNodeCheck;}
checkFn("parentNode",part,doneName,checkSet,nodeCheck,isXML);},"~":function(checkSet,part,isXML){var nodeCheck,doneName=done++,checkFn=dirCheck;if(typeof part==="string"&&!rNonWord.test(part)){part=part.toLowerCase();nodeCheck=part;checkFn=dirNodeCheck;}
checkFn("previousSibling",part,doneName,checkSet,nodeCheck,isXML);}},find:{ID:function(match,context,isXML){if(typeof context.getElementById!=="undefined"&&!isXML){var m=context.getElementById(match[1]);return m&&m.parentNode?[m]:[];}},NAME:function(match,context){if(typeof context.getElementsByName!=="undefined"){var ret=[],results=context.getElementsByName(match[1]);for(var i=0,l=results.length;i<l;i++){if(results[i].getAttribute("name")===match[1]){ret.push(results[i]);}}
return ret.length===0?null:ret;}},TAG:function(match,context){if(typeof context.getElementsByTagName!=="undefined"){return context.getElementsByTagName(match[1]);}}},preFilter:{CLASS:function(match,curLoop,inplace,result,not,isXML){match=" "+match[1].replace(rBackslash,"")+" ";if(isXML){return match;}
for(var i=0,elem;(elem=curLoop[i])!=null;i++){if(elem){if(not^(elem.className&&(" "+elem.className+" ").replace(/[\t\n\r]/g," ").indexOf(match)>=0)){if(!inplace){result.push(elem);}}else if(inplace){curLoop[i]=false;}}}
return false;},ID:function(match){return match[1].replace(rBackslash,"");},TAG:function(match,curLoop){return match[1].replace(rBackslash,"").toLowerCase();},CHILD:function(match){if(match[1]==="nth"){if(!match[2]){Sizzle.error(match[0]);}
match[2]=match[2].replace(/^\+|\s*/g,'');var test=/(-?)(\d*)(?:n([+\-]?\d*))?/.exec(match[2]==="even"&&"2n"||match[2]==="odd"&&"2n+1"||!/\D/.test(match[2])&&"0n+"+match[2]||match[2]);match[2]=(test[1]+(test[2]||1))-0;match[3]=test[3]-0;}
else if(match[2]){Sizzle.error(match[0]);}
match[0]=done++;return match;},ATTR:function(match,curLoop,inplace,result,not,isXML){var name=match[1]=match[1].replace(rBackslash,"");if(!isXML&&Expr.attrMap[name]){match[1]=Expr.attrMap[name];}
match[4]=(match[4]||match[5]||"").replace(rBackslash,"");if(match[2]==="~="){match[4]=" "+match[4]+" ";}
return match;},PSEUDO:function(match,curLoop,inplace,result,not){if(match[1]==="not"){if((chunker.exec(match[3])||"").length>1||/^\w/.test(match[3])){match[3]=Sizzle(match[3],null,null,curLoop);}else{var ret=Sizzle.filter(match[3],curLoop,inplace,true^not);if(!inplace){result.push.apply(result,ret);}
return false;}}else if(Expr.match.POS.test(match[0])||Expr.match.CHILD.test(match[0])){return true;}
return match;},POS:function(match){match.unshift(true);return match;}},filters:{enabled:function(elem){return elem.disabled===false&&elem.type!=="hidden";},disabled:function(elem){return elem.disabled===true;},checked:function(elem){return elem.checked===true;},selected:function(elem){if(elem.parentNode){elem.parentNode.selectedIndex;}
return elem.selected===true;},parent:function(elem){return!!elem.firstChild;},empty:function(elem){return!elem.firstChild;},has:function(elem,i,match){return!!Sizzle(match[3],elem).length;},header:function(elem){return(/h\d/i).test(elem.nodeName);},text:function(elem){var attr=elem.getAttribute("type"),type=elem.type;return elem.nodeName.toLowerCase()==="input"&&"text"===type&&(attr===type||attr===null);},radio:function(elem){return elem.nodeName.toLowerCase()==="input"&&"radio"===elem.type;},checkbox:function(elem){return elem.nodeName.toLowerCase()==="input"&&"checkbox"===elem.type;},file:function(elem){return elem.nodeName.toLowerCase()==="input"&&"file"===elem.type;},password:function(elem){return elem.nodeName.toLowerCase()==="input"&&"password"===elem.type;},submit:function(elem){var name=elem.nodeName.toLowerCase();return(name==="input"||name==="button")&&"submit"===elem.type;},image:function(elem){return elem.nodeName.toLowerCase()==="input"&&"image"===elem.type;},reset:function(elem){var name=elem.nodeName.toLowerCase();return(name==="input"||name==="button")&&"reset"===elem.type;},button:function(elem){var name=elem.nodeName.toLowerCase();return name==="input"&&"button"===elem.type||name==="button";},input:function(elem){return(/input|select|textarea|button/i).test(elem.nodeName);},focus:function(elem){return elem===elem.ownerDocument.activeElement;}},setFilters:{first:function(elem,i){return i===0;},last:function(elem,i,match,array){return i===array.length-1;},even:function(elem,i){return i%2===0;},odd:function(elem,i){return i%2===1;},lt:function(elem,i,match){return i<match[3]-0;},gt:function(elem,i,match){return i>match[3]-0;},nth:function(elem,i,match){return match[3]-0===i;},eq:function(elem,i,match){return match[3]-0===i;}},filter:{PSEUDO:function(elem,match,i,array){var name=match[1],filter=Expr.filters[name];if(filter){return filter(elem,i,match,array);}else if(name==="contains"){return(elem.textContent||elem.innerText||getText([elem])||"").indexOf(match[3])>=0;}else if(name==="not"){var not=match[3];for(var j=0,l=not.length;j<l;j++){if(not[j]===elem){return false;}}
return true;}else{Sizzle.error(name);}},CHILD:function(elem,match){var first,last,doneName,parent,cache,count,diff,type=match[1],node=elem;switch(type){case"only":case"first":while((node=node.previousSibling)){if(node.nodeType===1){return false;}}
if(type==="first"){return true;}
node=elem;case"last":while((node=node.nextSibling)){if(node.nodeType===1){return false;}}
return true;case"nth":first=match[2];last=match[3];if(first===1&&last===0){return true;}
doneName=match[0];parent=elem.parentNode;if(parent&&(parent[expando]!==doneName||!elem.nodeIndex)){count=0;for(node=parent.firstChild;node;node=node.nextSibling){if(node.nodeType===1){node.nodeIndex=++count;}}
parent[expando]=doneName;}
diff=elem.nodeIndex-last;if(first===0){return diff===0;}else{return(diff%first===0&&diff/first>=0);}}},ID:function(elem,match){return elem.nodeType===1&&elem.getAttribute("id")===match;},TAG:function(elem,match){return(match==="*"&&elem.nodeType===1)||!!elem.nodeName&&elem.nodeName.toLowerCase()===match;},CLASS:function(elem,match){return(" "+(elem.className||elem.getAttribute("class"))+" ").indexOf(match)>-1;},ATTR:function(elem,match){var name=match[1],result=Sizzle.attr?Sizzle.attr(elem,name):Expr.attrHandle[name]?Expr.attrHandle[name](elem):elem[name]!=null?elem[name]:elem.getAttribute(name),value=result+"",type=match[2],check=match[4];return result==null?type==="!=":!type&&Sizzle.attr?result!=null:type==="="?value===check:type==="*="?value.indexOf(check)>=0:type==="~="?(" "+value+" ").indexOf(check)>=0:!check?value&&result!==false:type==="!="?value!==check:type==="^="?value.indexOf(check)===0:type==="$="?value.substr(value.length-check.length)===check:type==="|="?value===check||value.substr(0,check.length+1)===check+"-":false;},POS:function(elem,match,i,array){var name=match[2],filter=Expr.setFilters[name];if(filter){return filter(elem,i,match,array);}}}};var origPOS=Expr.match.POS,fescape=function(all,num){return"\\"+(num-0+1);};for(var type in Expr.match){Expr.match[type]=new RegExp(Expr.match[type].source+(/(?![^\[]*\])(?![^\(]*\))/.source));Expr.leftMatch[type]=new RegExp(/(^(?:.|\r|\n)*?)/.source+Expr.match[type].source.replace(/\\(\d+)/g,fescape));}
var makeArray=function(array,results){array=Array.prototype.slice.call(array,0);if(results){results.push.apply(results,array);return results;}
return array;};try{Array.prototype.slice.call(document.documentElement.childNodes,0)[0].nodeType;}catch(e){makeArray=function(array,results){var i=0,ret=results||[];if(toString.call(array)==="[object Array]"){Array.prototype.push.apply(ret,array);}else{if(typeof array.length==="number"){for(var l=array.length;i<l;i++){ret.push(array[i]);}}else{for(;array[i];i++){ret.push(array[i]);}}}
return ret;};}
var sortOrder,siblingCheck;if(document.documentElement.compareDocumentPosition){sortOrder=function(a,b){if(a===b){hasDuplicate=true;return 0;}
if(!a.compareDocumentPosition||!b.compareDocumentPosition){return a.compareDocumentPosition?-1:1;}
return a.compareDocumentPosition(b)&4?-1:1;};}else{sortOrder=function(a,b){if(a===b){hasDuplicate=true;return 0;}else if(a.sourceIndex&&b.sourceIndex){return a.sourceIndex-b.sourceIndex;}
var al,bl,ap=[],bp=[],aup=a.parentNode,bup=b.parentNode,cur=aup;if(aup===bup){return siblingCheck(a,b);}else if(!aup){return-1;}else if(!bup){return 1;}
while(cur){ap.unshift(cur);cur=cur.parentNode;}
cur=bup;while(cur){bp.unshift(cur);cur=cur.parentNode;}
al=ap.length;bl=bp.length;for(var i=0;i<al&&i<bl;i++){if(ap[i]!==bp[i]){return siblingCheck(ap[i],bp[i]);}}
return i===al?siblingCheck(a,bp[i],-1):siblingCheck(ap[i],b,1);};siblingCheck=function(a,b,ret){if(a===b){return ret;var cur=a.nextSibling;}
while(cur){if(cur===b){return-1;}
cur=cur.nextSibling;}
return 1;};}
(function(){var form=document.createElement("div"),id="script"+(new Date()).getTime(),root=document.documentElement;form.innerHTML="<a name='"+id+"'/>";root.insertBefore(form,root.firstChild);if(document.getElementById(id)){Expr.find.ID=function(match,context,isXML){if(typeof context.getElementById!=="undefined"&&!isXML){var m=context.getElementById(match[1]);return m?m.id===match[1]||typeof m.getAttributeNode!=="undefined"&&m.getAttributeNode("id").nodeValue===match[1]?[m]:undefined:[];}};Expr.filter.ID=function(elem,match){var node=typeof elem.getAttributeNode!=="undefined"&&elem.getAttributeNode("id");return elem.nodeType===1&&node&&node.nodeValue===match;};}
root.removeChild(form);root=form=null;})();(function(){var div=document.createElement("div");div.appendChild(document.createComment(""));if(div.getElementsByTagName("*").length>0){Expr.find.TAG=function(match,context){var results=context.getElementsByTagName(match[1]);if(match[1]==="*"){var tmp=[];for(var i=0;results[i];i++){if(results[i].nodeType===1){tmp.push(results[i]);}}
results=tmp;}
return results;};}
div.innerHTML="<a href='#'></a>";if(div.firstChild&&typeof div.firstChild.getAttribute!=="undefined"&&div.firstChild.getAttribute("href")!=="#"){Expr.attrHandle.href=function(elem){return elem.getAttribute("href",2);};}
div=null;})();if(document.querySelectorAll){(function(){var oldSizzle=Sizzle,div=document.createElement("div"),id="__sizzle__";div.innerHTML="<p class='TEST'></p>";if(div.querySelectorAll&&div.querySelectorAll(".TEST").length===0){return;}
Sizzle=function(query,context,extra,seed){context=context||document;if(!seed&&!Sizzle.isXML(context)){var match=/^(\w+$)|^\.([\w\-]+$)|^#([\w\-]+$)/.exec(query);if(match&&(context.nodeType===1||context.nodeType===9)){if(match[1]){return makeArray(context.getElementsByTagName(query),extra);}else if(match[2]&&Expr.find.CLASS&&context.getElementsByClassName){return makeArray(context.getElementsByClassName(match[2]),extra);}}
if(context.nodeType===9){if(query==="body"&&context.body){return makeArray([context.body],extra);}else if(match&&match[3]){var elem=context.getElementById(match[3]);if(elem&&elem.parentNode){if(elem.id===match[3]){return makeArray([elem],extra);}}else{return makeArray([],extra);}}
try{return makeArray(context.querySelectorAll(query),extra);}catch(qsaError){}}else if(context.nodeType===1&&context.nodeName.toLowerCase()!=="object"){var oldContext=context,old=context.getAttribute("id"),nid=old||id,hasParent=context.parentNode,relativeHierarchySelector=/^\s*[+~]/.test(query);if(!old){context.setAttribute("id",nid);}else{nid=nid.replace(/'/g,"\\$&");}
if(relativeHierarchySelector&&hasParent){context=context.parentNode;}
try{if(!relativeHierarchySelector||hasParent){return makeArray(context.querySelectorAll("[id='"+nid+"'] "+query),extra);}}catch(pseudoError){}finally{if(!old){oldContext.removeAttribute("id");}}}}
return oldSizzle(query,context,extra,seed);};for(var prop in oldSizzle){Sizzle[prop]=oldSizzle[prop];}
div=null;})();}
(function(){var html=document.documentElement,matches=html.matchesSelector||html.mozMatchesSelector||html.webkitMatchesSelector||html.msMatchesSelector;if(matches){var disconnectedMatch=!matches.call(document.createElement("div"),"div"),pseudoWorks=false;try{matches.call(document.documentElement,"[test!='']:sizzle");}catch(pseudoError){pseudoWorks=true;}
Sizzle.matchesSelector=function(node,expr){expr=expr.replace(/\=\s*([^'"\]]*)\s*\]/g,"='$1']");if(!Sizzle.isXML(node)){try{if(pseudoWorks||!Expr.match.PSEUDO.test(expr)&&!/!=/.test(expr)){var ret=matches.call(node,expr);if(ret||!disconnectedMatch||node.document&&node.document.nodeType!==11){return ret;}}}catch(e){}}
return Sizzle(expr,null,null,[node]).length>0;};}})();(function(){var div=document.createElement("div");div.innerHTML="<div class='test e'></div><div class='test'></div>";if(!div.getElementsByClassName||div.getElementsByClassName("e").length===0){return;}
div.lastChild.className="e";if(div.getElementsByClassName("e").length===1){return;}
Expr.order.splice(1,0,"CLASS");Expr.find.CLASS=function(match,context,isXML){if(typeof context.getElementsByClassName!=="undefined"&&!isXML){return context.getElementsByClassName(match[1]);}};div=null;})();function dirNodeCheck(dir,cur,doneName,checkSet,nodeCheck,isXML){for(var i=0,l=checkSet.length;i<l;i++){var elem=checkSet[i];if(elem){var match=false;elem=elem[dir];while(elem){if(elem[expando]===doneName){match=checkSet[elem.sizset];break;}
if(elem.nodeType===1&&!isXML){elem[expando]=doneName;elem.sizset=i;}
if(elem.nodeName.toLowerCase()===cur){match=elem;break;}
elem=elem[dir];}
checkSet[i]=match;}}}
function dirCheck(dir,cur,doneName,checkSet,nodeCheck,isXML){for(var i=0,l=checkSet.length;i<l;i++){var elem=checkSet[i];if(elem){var match=false;elem=elem[dir];while(elem){if(elem[expando]===doneName){match=checkSet[elem.sizset];break;}
if(elem.nodeType===1){if(!isXML){elem[expando]=doneName;elem.sizset=i;}
if(typeof cur!=="string"){if(elem===cur){match=true;break;}}else if(Sizzle.filter(cur,[elem]).length>0){match=elem;break;}}
elem=elem[dir];}
checkSet[i]=match;}}}
if(document.documentElement.contains){Sizzle.contains=function(a,b){return a!==b&&(a.contains?a.contains(b):true);};}else if(document.documentElement.compareDocumentPosition){Sizzle.contains=function(a,b){return!!(a.compareDocumentPosition(b)&16);};}else{Sizzle.contains=function(){return false;};}
Sizzle.isXML=function(elem){var documentElement=(elem?elem.ownerDocument||elem:0).documentElement;return documentElement?documentElement.nodeName!=="HTML":false;};var posProcess=function(selector,context,seed){var match,tmpSet=[],later="",root=context.nodeType?[context]:context;while((match=Expr.match.PSEUDO.exec(selector))){later+=match[0];selector=selector.replace(Expr.match.PSEUDO,"");}
selector=Expr.relative[selector]?selector+"*":selector;for(var i=0,l=root.length;i<l;i++){Sizzle(selector,root[i],tmpSet,seed);}
return Sizzle.filter(later,tmpSet);};Sizzle.attr=jQuery.attr;Sizzle.selectors.attrMap={};jQuery.find=Sizzle;jQuery.expr=Sizzle.selectors;jQuery.expr[":"]=jQuery.expr.filters;jQuery.unique=Sizzle.uniqueSort;jQuery.text=Sizzle.getText;jQuery.isXMLDoc=Sizzle.isXML;jQuery.contains=Sizzle.contains;})();var runtil=/Until$/,rparentsprev=/^(?:parents|prevUntil|prevAll)/,rmultiselector=/,/,isSimple=/^.[^:#\[\.,]*$/,slice=Array.prototype.slice,POS=jQuery.expr.match.POS,guaranteedUnique={children:true,contents:true,next:true,prev:true};jQuery.fn.extend({find:function(selector){var self=this,i,l;if(typeof selector!=="string"){return jQuery(selector).filter(function(){for(i=0,l=self.length;i<l;i++){if(jQuery.contains(self[i],this)){return true;}}});}
var ret=this.pushStack("","find",selector),length,n,r;for(i=0,l=this.length;i<l;i++){length=ret.length;jQuery.find(selector,this[i],ret);if(i>0){for(n=length;n<ret.length;n++){for(r=0;r<length;r++){if(ret[r]===ret[n]){ret.splice(n--,1);break;}}}}}
return ret;},has:function(target){var targets=jQuery(target);return this.filter(function(){for(var i=0,l=targets.length;i<l;i++){if(jQuery.contains(this,targets[i])){return true;}}});},not:function(selector){return this.pushStack(winnow(this,selector,false),"not",selector);},filter:function(selector){return this.pushStack(winnow(this,selector,true),"filter",selector);},is:function(selector){return!!selector&&(typeof selector==="string"?POS.test(selector)?jQuery(selector,this.context).index(this[0])>=0:jQuery.filter(selector,this).length>0:this.filter(selector).length>0);},closest:function(selectors,context){var ret=[],i,l,cur=this[0];if(jQuery.isArray(selectors)){var level=1;while(cur&&cur.ownerDocument&&cur!==context){for(i=0;i<selectors.length;i++){if(jQuery(cur).is(selectors[i])){ret.push({selector:selectors[i],elem:cur,level:level});}}
cur=cur.parentNode;level++;}
return ret;}
var pos=POS.test(selectors)||typeof selectors!=="string"?jQuery(selectors,context||this.context):0;for(i=0,l=this.length;i<l;i++){cur=this[i];while(cur){if(pos?pos.index(cur)>-1:jQuery.find.matchesSelector(cur,selectors)){ret.push(cur);break;}else{cur=cur.parentNode;if(!cur||!cur.ownerDocument||cur===context||cur.nodeType===11){break;}}}}
ret=ret.length>1?jQuery.unique(ret):ret;return this.pushStack(ret,"closest",selectors);},index:function(elem){if(!elem){return(this[0]&&this[0].parentNode)?this.prevAll().length:-1;}
if(typeof elem==="string"){return jQuery.inArray(this[0],jQuery(elem));}
return jQuery.inArray(elem.jquery?elem[0]:elem,this);},add:function(selector,context){var set=typeof selector==="string"?jQuery(selector,context):jQuery.makeArray(selector&&selector.nodeType?[selector]:selector),all=jQuery.merge(this.get(),set);return this.pushStack(isDisconnected(set[0])||isDisconnected(all[0])?all:jQuery.unique(all));},andSelf:function(){return this.add(this.prevObject);}});function isDisconnected(node){return!node||!node.parentNode||node.parentNode.nodeType===11;}
jQuery.each({parent:function(elem){var parent=elem.parentNode;return parent&&parent.nodeType!==11?parent:null;},parents:function(elem){return jQuery.dir(elem,"parentNode");},parentsUntil:function(elem,i,until){return jQuery.dir(elem,"parentNode",until);},next:function(elem){return jQuery.nth(elem,2,"nextSibling");},prev:function(elem){return jQuery.nth(elem,2,"previousSibling");},nextAll:function(elem){return jQuery.dir(elem,"nextSibling");},prevAll:function(elem){return jQuery.dir(elem,"previousSibling");},nextUntil:function(elem,i,until){return jQuery.dir(elem,"nextSibling",until);},prevUntil:function(elem,i,until){return jQuery.dir(elem,"previousSibling",until);},siblings:function(elem){return jQuery.sibling(elem.parentNode.firstChild,elem);},children:function(elem){return jQuery.sibling(elem.firstChild);},contents:function(elem){return jQuery.nodeName(elem,"iframe")?elem.contentDocument||elem.contentWindow.document:jQuery.makeArray(elem.childNodes);}},function(name,fn){jQuery.fn[name]=function(until,selector){var ret=jQuery.map(this,fn,until);if(!runtil.test(name)){selector=until;}
if(selector&&typeof selector==="string"){ret=jQuery.filter(selector,ret);}
ret=this.length>1&&!guaranteedUnique[name]?jQuery.unique(ret):ret;if((this.length>1||rmultiselector.test(selector))&&rparentsprev.test(name)){ret=ret.reverse();}
return this.pushStack(ret,name,slice.call(arguments).join(","));};});jQuery.extend({filter:function(expr,elems,not){if(not){expr=":not("+expr+")";}
return elems.length===1?jQuery.find.matchesSelector(elems[0],expr)?[elems[0]]:[]:jQuery.find.matches(expr,elems);},dir:function(elem,dir,until){var matched=[],cur=elem[dir];while(cur&&cur.nodeType!==9&&(until===undefined||cur.nodeType!==1||!jQuery(cur).is(until))){if(cur.nodeType===1){matched.push(cur);}
cur=cur[dir];}
return matched;},nth:function(cur,result,dir,elem){result=result||1;var num=0;for(;cur;cur=cur[dir]){if(cur.nodeType===1&&++num===result){break;}}
return cur;},sibling:function(n,elem){var r=[];for(;n;n=n.nextSibling){if(n.nodeType===1&&n!==elem){r.push(n);}}
return r;}});function winnow(elements,qualifier,keep){qualifier=qualifier||0;if(jQuery.isFunction(qualifier)){return jQuery.grep(elements,function(elem,i){var retVal=!!qualifier.call(elem,i,elem);return retVal===keep;});}else if(qualifier.nodeType){return jQuery.grep(elements,function(elem,i){return(elem===qualifier)===keep;});}else if(typeof qualifier==="string"){var filtered=jQuery.grep(elements,function(elem){return elem.nodeType===1;});if(isSimple.test(qualifier)){return jQuery.filter(qualifier,filtered,!keep);}else{qualifier=jQuery.filter(qualifier,filtered);}}
return jQuery.grep(elements,function(elem,i){return(jQuery.inArray(elem,qualifier)>=0)===keep;});}
function createSafeFragment(document){var list=nodeNames.split("|"),safeFrag=document.createDocumentFragment();if(safeFrag.createElement){while(list.length){safeFrag.createElement(list.pop());}}
return safeFrag;}
var nodeNames="abbr|article|aside|audio|canvas|datalist|details|figcaption|figure|footer|"+"header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",rinlinejQuery=/ jQuery\d+="(?:\d+|null)"/g,rleadingWhitespace=/^\s+/,rxhtmlTag=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/ig,rtagName=/<([\w:]+)/,rtbody=/<tbody/i,rhtml=/<|&#?\w+;/,rnoInnerhtml=/<(?:script|style)/i,rnocache=/<(?:script|object|embed|option|style)/i,rnoshimcache=new RegExp("<(?:"+nodeNames+")","i"),rchecked=/checked\s*(?:[^=]|=\s*.checked.)/i,rscriptType=/\/(java|ecma)script/i,rcleanScript=/^\s*<!(?:\[CDATA\[|\-\-)/,wrapMap={option:[1,"<select multiple='multiple'>","</select>"],legend:[1,"<fieldset>","</fieldset>"],thead:[1,"<table>","</table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],col:[2,"<table><tbody></tbody><colgroup>","</colgroup></table>"],area:[1,"<map>","</map>"],_default:[0,"",""]},safeFragment=createSafeFragment(document);wrapMap.optgroup=wrapMap.option;wrapMap.tbody=wrapMap.tfoot=wrapMap.colgroup=wrapMap.caption=wrapMap.thead;wrapMap.th=wrapMap.td;if(!jQuery.support.htmlSerialize){wrapMap._default=[1,"div<div>","</div>"];}
jQuery.fn.extend({text:function(text){if(jQuery.isFunction(text)){return this.each(function(i){var self=jQuery(this);self.text(text.call(this,i,self.text()));});}
if(typeof text!=="object"&&text!==undefined){return this.empty().append((this[0]&&this[0].ownerDocument||document).createTextNode(text));}
return jQuery.text(this);},wrapAll:function(html){if(jQuery.isFunction(html)){return this.each(function(i){jQuery(this).wrapAll(html.call(this,i));});}
if(this[0]){var wrap=jQuery(html,this[0].ownerDocument).eq(0).clone(true);if(this[0].parentNode){wrap.insertBefore(this[0]);}
wrap.map(function(){var elem=this;while(elem.firstChild&&elem.firstChild.nodeType===1){elem=elem.firstChild;}
return elem;}).append(this);}
return this;},wrapInner:function(html){if(jQuery.isFunction(html)){return this.each(function(i){jQuery(this).wrapInner(html.call(this,i));});}
return this.each(function(){var self=jQuery(this),contents=self.contents();if(contents.length){contents.wrapAll(html);}else{self.append(html);}});},wrap:function(html){var isFunction=jQuery.isFunction(html);return this.each(function(i){jQuery(this).wrapAll(isFunction?html.call(this,i):html);});},unwrap:function(){return this.parent().each(function(){if(!jQuery.nodeName(this,"body")){jQuery(this).replaceWith(this.childNodes);}}).end();},append:function(){return this.domManip(arguments,true,function(elem){if(this.nodeType===1){this.appendChild(elem);}});},prepend:function(){return this.domManip(arguments,true,function(elem){if(this.nodeType===1){this.insertBefore(elem,this.firstChild);}});},before:function(){if(this[0]&&this[0].parentNode){return this.domManip(arguments,false,function(elem){this.parentNode.insertBefore(elem,this);});}else if(arguments.length){var set=jQuery.clean(arguments);set.push.apply(set,this.toArray());return this.pushStack(set,"before",arguments);}},after:function(){if(this[0]&&this[0].parentNode){return this.domManip(arguments,false,function(elem){this.parentNode.insertBefore(elem,this.nextSibling);});}else if(arguments.length){var set=this.pushStack(this,"after",arguments);set.push.apply(set,jQuery.clean(arguments));return set;}},remove:function(selector,keepData){for(var i=0,elem;(elem=this[i])!=null;i++){if(!selector||jQuery.filter(selector,[elem]).length){if(!keepData&&elem.nodeType===1){jQuery.cleanData(elem.getElementsByTagName("*"));jQuery.cleanData([elem]);}
if(elem.parentNode){elem.parentNode.removeChild(elem);}}}
return this;},empty:function(){for(var i=0,elem;(elem=this[i])!=null;i++){if(elem.nodeType===1){jQuery.cleanData(elem.getElementsByTagName("*"));}
while(elem.firstChild){elem.removeChild(elem.firstChild);}}
return this;},clone:function(dataAndEvents,deepDataAndEvents){dataAndEvents=dataAndEvents==null?false:dataAndEvents;deepDataAndEvents=deepDataAndEvents==null?dataAndEvents:deepDataAndEvents;return this.map(function(){return jQuery.clone(this,dataAndEvents,deepDataAndEvents);});},html:function(value){if(value===undefined){return this[0]&&this[0].nodeType===1?this[0].innerHTML.replace(rinlinejQuery,""):null;}else if(typeof value==="string"&&!rnoInnerhtml.test(value)&&(jQuery.support.leadingWhitespace||!rleadingWhitespace.test(value))&&!wrapMap[(rtagName.exec(value)||["",""])[1].toLowerCase()]){value=value.replace(rxhtmlTag,"<$1></$2>");try{for(var i=0,l=this.length;i<l;i++){if(this[i].nodeType===1){jQuery.cleanData(this[i].getElementsByTagName("*"));this[i].innerHTML=value;}}}catch(e){this.empty().append(value);}}else if(jQuery.isFunction(value)){this.each(function(i){var self=jQuery(this);self.html(value.call(this,i,self.html()));});}else{this.empty().append(value);}
return this;},replaceWith:function(value){if(this[0]&&this[0].parentNode){if(jQuery.isFunction(value)){return this.each(function(i){var self=jQuery(this),old=self.html();self.replaceWith(value.call(this,i,old));});}
if(typeof value!=="string"){value=jQuery(value).detach();}
return this.each(function(){var next=this.nextSibling,parent=this.parentNode;jQuery(this).remove();if(next){jQuery(next).before(value);}else{jQuery(parent).append(value);}});}else{return this.length?this.pushStack(jQuery(jQuery.isFunction(value)?value():value),"replaceWith",value):this;}},detach:function(selector){return this.remove(selector,true);},domManip:function(args,table,callback){var results,first,fragment,parent,value=args[0],scripts=[];if(!jQuery.support.checkClone&&arguments.length===3&&typeof value==="string"&&rchecked.test(value)){return this.each(function(){jQuery(this).domManip(args,table,callback,true);});}
if(jQuery.isFunction(value)){return this.each(function(i){var self=jQuery(this);args[0]=value.call(this,i,table?self.html():undefined);self.domManip(args,table,callback);});}
if(this[0]){parent=value&&value.parentNode;if(jQuery.support.parentNode&&parent&&parent.nodeType===11&&parent.childNodes.length===this.length){results={fragment:parent};}else{results=jQuery.buildFragment(args,this,scripts);}
fragment=results.fragment;if(fragment.childNodes.length===1){first=fragment=fragment.firstChild;}else{first=fragment.firstChild;}
if(first){table=table&&jQuery.nodeName(first,"tr");for(var i=0,l=this.length,lastIndex=l-1;i<l;i++){callback.call(table?root(this[i],first):this[i],results.cacheable||(l>1&&i<lastIndex)?jQuery.clone(fragment,true,true):fragment);}}
if(scripts.length){jQuery.each(scripts,evalScript);}}
return this;}});function root(elem,cur){return jQuery.nodeName(elem,"table")?(elem.getElementsByTagName("tbody")[0]||elem.appendChild(elem.ownerDocument.createElement("tbody"))):elem;}
function cloneCopyEvent(src,dest){if(dest.nodeType!==1||!jQuery.hasData(src)){return;}
var type,i,l,oldData=jQuery._data(src),curData=jQuery._data(dest,oldData),events=oldData.events;if(events){delete curData.handle;curData.events={};for(type in events){for(i=0,l=events[type].length;i<l;i++){jQuery.event.add(dest,type+(events[type][i].namespace?".":"")+events[type][i].namespace,events[type][i],events[type][i].data);}}}
if(curData.data){curData.data=jQuery.extend({},curData.data);}}
function cloneFixAttributes(src,dest){var nodeName;if(dest.nodeType!==1){return;}
if(dest.clearAttributes){dest.clearAttributes();}
if(dest.mergeAttributes){dest.mergeAttributes(src);}
nodeName=dest.nodeName.toLowerCase();if(nodeName==="object"){dest.outerHTML=src.outerHTML;}else if(nodeName==="input"&&(src.type==="checkbox"||src.type==="radio")){if(src.checked){dest.defaultChecked=dest.checked=src.checked;}
if(dest.value!==src.value){dest.value=src.value;}}else if(nodeName==="option"){dest.selected=src.defaultSelected;}else if(nodeName==="input"||nodeName==="textarea"){dest.defaultValue=src.defaultValue;}
dest.removeAttribute(jQuery.expando);}
jQuery.buildFragment=function(args,nodes,scripts){var fragment,cacheable,cacheresults,doc,first=args[0];if(nodes&&nodes[0]){doc=nodes[0].ownerDocument||nodes[0];}
if(!doc.createDocumentFragment){doc=document;}
if(args.length===1&&typeof first==="string"&&first.length<512&&doc===document&&first.charAt(0)==="<"&&!rnocache.test(first)&&(jQuery.support.checkClone||!rchecked.test(first))&&(jQuery.support.html5Clone||!rnoshimcache.test(first))){cacheable=true;cacheresults=jQuery.fragments[first];if(cacheresults&&cacheresults!==1){fragment=cacheresults;}}
if(!fragment){fragment=doc.createDocumentFragment();jQuery.clean(args,doc,fragment,scripts);}
if(cacheable){jQuery.fragments[first]=cacheresults?fragment:1;}
return{fragment:fragment,cacheable:cacheable};};jQuery.fragments={};jQuery.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(name,original){jQuery.fn[name]=function(selector){var ret=[],insert=jQuery(selector),parent=this.length===1&&this[0].parentNode;if(parent&&parent.nodeType===11&&parent.childNodes.length===1&&insert.length===1){insert[original](this[0]);return this;}else{for(var i=0,l=insert.length;i<l;i++){var elems=(i>0?this.clone(true):this).get();jQuery(insert[i])[original](elems);ret=ret.concat(elems);}
return this.pushStack(ret,name,insert.selector);}};});function getAll(elem){if(typeof elem.getElementsByTagName!=="undefined"){return elem.getElementsByTagName("*");}else if(typeof elem.querySelectorAll!=="undefined"){return elem.querySelectorAll("*");}else{return[];}}
function fixDefaultChecked(elem){if(elem.type==="checkbox"||elem.type==="radio"){elem.defaultChecked=elem.checked;}}
function findInputs(elem){var nodeName=(elem.nodeName||"").toLowerCase();if(nodeName==="input"){fixDefaultChecked(elem);}else if(nodeName!=="script"&&typeof elem.getElementsByTagName!=="undefined"){jQuery.grep(elem.getElementsByTagName("input"),fixDefaultChecked);}}
function shimCloneNode(elem){var div=document.createElement("div");safeFragment.appendChild(div);div.innerHTML=elem.outerHTML;return div.firstChild;}
jQuery.extend({clone:function(elem,dataAndEvents,deepDataAndEvents){var srcElements,destElements,i,clone=jQuery.support.html5Clone||!rnoshimcache.test("<"+elem.nodeName)?elem.cloneNode(true):shimCloneNode(elem);if((!jQuery.support.noCloneEvent||!jQuery.support.noCloneChecked)&&(elem.nodeType===1||elem.nodeType===11)&&!jQuery.isXMLDoc(elem)){cloneFixAttributes(elem,clone);srcElements=getAll(elem);destElements=getAll(clone);for(i=0;srcElements[i];++i){if(destElements[i]){cloneFixAttributes(srcElements[i],destElements[i]);}}}
if(dataAndEvents){cloneCopyEvent(elem,clone);if(deepDataAndEvents){srcElements=getAll(elem);destElements=getAll(clone);for(i=0;srcElements[i];++i){cloneCopyEvent(srcElements[i],destElements[i]);}}}
srcElements=destElements=null;return clone;},clean:function(elems,context,fragment,scripts){var checkScriptType;context=context||document;if(typeof context.createElement==="undefined"){context=context.ownerDocument||context[0]&&context[0].ownerDocument||document;}
var ret=[],j;for(var i=0,elem;(elem=elems[i])!=null;i++){if(typeof elem==="number"){elem+="";}
if(!elem){continue;}
if(typeof elem==="string"){if(!rhtml.test(elem)){elem=context.createTextNode(elem);}else{elem=elem.replace(rxhtmlTag,"<$1></$2>");var tag=(rtagName.exec(elem)||["",""])[1].toLowerCase(),wrap=wrapMap[tag]||wrapMap._default,depth=wrap[0],div=context.createElement("div");if(context===document){safeFragment.appendChild(div);}else{createSafeFragment(context).appendChild(div);}
div.innerHTML=wrap[1]+elem+wrap[2];while(depth--){div=div.lastChild;}
if(!jQuery.support.tbody){var hasBody=rtbody.test(elem),tbody=tag==="table"&&!hasBody?div.firstChild&&div.firstChild.childNodes:wrap[1]==="<table>"&&!hasBody?div.childNodes:[];for(j=tbody.length-1;j>=0;--j){if(jQuery.nodeName(tbody[j],"tbody")&&!tbody[j].childNodes.length){tbody[j].parentNode.removeChild(tbody[j]);}}}
if(!jQuery.support.leadingWhitespace&&rleadingWhitespace.test(elem)){div.insertBefore(context.createTextNode(rleadingWhitespace.exec(elem)[0]),div.firstChild);}
elem=div.childNodes;}}
var len;if(!jQuery.support.appendChecked){if(elem[0]&&typeof(len=elem.length)==="number"){for(j=0;j<len;j++){findInputs(elem[j]);}}else{findInputs(elem);}}
if(elem.nodeType){ret.push(elem);}else{ret=jQuery.merge(ret,elem);}}
if(fragment){checkScriptType=function(elem){return!elem.type||rscriptType.test(elem.type);};for(i=0;ret[i];i++){if(scripts&&jQuery.nodeName(ret[i],"script")&&(!ret[i].type||ret[i].type.toLowerCase()==="text/javascript")){scripts.push(ret[i].parentNode?ret[i].parentNode.removeChild(ret[i]):ret[i]);}else{if(ret[i].nodeType===1){var jsTags=jQuery.grep(ret[i].getElementsByTagName("script"),checkScriptType);ret.splice.apply(ret,[i+1,0].concat(jsTags));}
fragment.appendChild(ret[i]);}}}
return ret;},cleanData:function(elems){var data,id,cache=jQuery.cache,special=jQuery.event.special,deleteExpando=jQuery.support.deleteExpando;for(var i=0,elem;(elem=elems[i])!=null;i++){if(elem.nodeName&&jQuery.noData[elem.nodeName.toLowerCase()]){continue;}
id=elem[jQuery.expando];if(id){data=cache[id];if(data&&data.events){for(var type in data.events){if(special[type]){jQuery.event.remove(elem,type);}else{jQuery.removeEvent(elem,type,data.handle);}}
if(data.handle){data.handle.elem=null;}}
if(deleteExpando){delete elem[jQuery.expando];}else if(elem.removeAttribute){elem.removeAttribute(jQuery.expando);}
delete cache[id];}}}});function evalScript(i,elem){if(elem.src){jQuery.ajax({url:elem.src,async:false,dataType:"script"});}else{jQuery.globalEval((elem.text||elem.textContent||elem.innerHTML||"").replace(rcleanScript,"/*$0*/"));}
if(elem.parentNode){elem.parentNode.removeChild(elem);}}
var ralpha=/alpha\([^)]*\)/i,ropacity=/opacity=([^)]*)/,rupper=/([A-Z]|^ms)/g,rnumpx=/^-?\d+(?:px)?$/i,rnum=/^-?\d/,rrelNum=/^([\-+])=([\-+.\de]+)/,cssShow={position:"absolute",visibility:"hidden",display:"block"},cssWidth=["Left","Right"],cssHeight=["Top","Bottom"],curCSS,getComputedStyle,currentStyle;jQuery.fn.css=function(name,value){if(arguments.length===2&&value===undefined){return this;}
return jQuery.access(this,name,value,true,function(elem,name,value){return value!==undefined?jQuery.style(elem,name,value):jQuery.css(elem,name);});};jQuery.extend({cssHooks:{opacity:{get:function(elem,computed){if(computed){var ret=curCSS(elem,"opacity","opacity");return ret===""?"1":ret;}else{return elem.style.opacity;}}}},cssNumber:{"fillOpacity":true,"fontWeight":true,"lineHeight":true,"opacity":true,"orphans":true,"widows":true,"zIndex":true,"zoom":true},cssProps:{"float":jQuery.support.cssFloat?"cssFloat":"styleFloat"},style:function(elem,name,value,extra){if(!elem||elem.nodeType===3||elem.nodeType===8||!elem.style){return;}
var ret,type,origName=jQuery.camelCase(name),style=elem.style,hooks=jQuery.cssHooks[origName];name=jQuery.cssProps[origName]||origName;if(value!==undefined){type=typeof value;if(type==="string"&&(ret=rrelNum.exec(value))){value=(+(ret[1]+1)* +ret[2])+parseFloat(jQuery.css(elem,name));type="number";}
if(value==null||type==="number"&&isNaN(value)){return;}
if(type==="number"&&!jQuery.cssNumber[origName]){value+="px";}
if(!hooks||!("set"in hooks)||(value=hooks.set(elem,value))!==undefined){try{style[name]=value;}catch(e){}}}else{if(hooks&&"get"in hooks&&(ret=hooks.get(elem,false,extra))!==undefined){return ret;}
return style[name];}},css:function(elem,name,extra){var ret,hooks;name=jQuery.camelCase(name);hooks=jQuery.cssHooks[name];name=jQuery.cssProps[name]||name;if(name==="cssFloat"){name="float";}
if(hooks&&"get"in hooks&&(ret=hooks.get(elem,true,extra))!==undefined){return ret;}else if(curCSS){return curCSS(elem,name);}},swap:function(elem,options,callback){var old={};for(var name in options){old[name]=elem.style[name];elem.style[name]=options[name];}
callback.call(elem);for(name in options){elem.style[name]=old[name];}}});jQuery.curCSS=jQuery.css;jQuery.each(["height","width"],function(i,name){jQuery.cssHooks[name]={get:function(elem,computed,extra){var val;if(computed){if(elem.offsetWidth!==0){return getWH(elem,name,extra);}else{jQuery.swap(elem,cssShow,function(){val=getWH(elem,name,extra);});}
return val;}},set:function(elem,value){if(rnumpx.test(value)){value=parseFloat(value);if(value>=0){return value+"px";}}else{return value;}}};});if(!jQuery.support.opacity){jQuery.cssHooks.opacity={get:function(elem,computed){return ropacity.test((computed&&elem.currentStyle?elem.currentStyle.filter:elem.style.filter)||"")?(parseFloat(RegExp.$1)/100)+"":computed?"1":"";},set:function(elem,value){var style=elem.style,currentStyle=elem.currentStyle,opacity=jQuery.isNumeric(value)?"alpha(opacity="+value*100+")":"",filter=currentStyle&&currentStyle.filter||style.filter||"";style.zoom=1;if(value>=1&&jQuery.trim(filter.replace(ralpha,""))===""){style.removeAttribute("filter");if(currentStyle&&!currentStyle.filter){return;}}
style.filter=ralpha.test(filter)?filter.replace(ralpha,opacity):filter+" "+opacity;}};}
jQuery(function(){if(!jQuery.support.reliableMarginRight){jQuery.cssHooks.marginRight={get:function(elem,computed){var ret;jQuery.swap(elem,{"display":"inline-block"},function(){if(computed){ret=curCSS(elem,"margin-right","marginRight");}else{ret=elem.style.marginRight;}});return ret;}};}});if(document.defaultView&&document.defaultView.getComputedStyle){getComputedStyle=function(elem,name){var ret,defaultView,computedStyle;name=name.replace(rupper,"-$1").toLowerCase();if((defaultView=elem.ownerDocument.defaultView)&&(computedStyle=defaultView.getComputedStyle(elem,null))){ret=computedStyle.getPropertyValue(name);if(ret===""&&!jQuery.contains(elem.ownerDocument.documentElement,elem)){ret=jQuery.style(elem,name);}}
return ret;};}
if(document.documentElement.currentStyle){currentStyle=function(elem,name){var left,rsLeft,uncomputed,ret=elem.currentStyle&&elem.currentStyle[name],style=elem.style;if(ret===null&&style&&(uncomputed=style[name])){ret=uncomputed;}
if(!rnumpx.test(ret)&&rnum.test(ret)){left=style.left;rsLeft=elem.runtimeStyle&&elem.runtimeStyle.left;if(rsLeft){elem.runtimeStyle.left=elem.currentStyle.left;}
style.left=name==="fontSize"?"1em":(ret||0);ret=style.pixelLeft+"px";style.left=left;if(rsLeft){elem.runtimeStyle.left=rsLeft;}}
return ret===""?"auto":ret;};}
curCSS=getComputedStyle||currentStyle;function getWH(elem,name,extra){var val=name==="width"?elem.offsetWidth:elem.offsetHeight,which=name==="width"?cssWidth:cssHeight,i=0,len=which.length;if(val>0){if(extra!=="border"){for(;i<len;i++){if(!extra){val-=parseFloat(jQuery.css(elem,"padding"+which[i]))||0;}
if(extra==="margin"){val+=parseFloat(jQuery.css(elem,extra+which[i]))||0;}else{val-=parseFloat(jQuery.css(elem,"border"+which[i]+"Width"))||0;}}}
return val+"px";}
val=curCSS(elem,name,name);if(val<0||val==null){val=elem.style[name]||0;}
val=parseFloat(val)||0;if(extra){for(;i<len;i++){val+=parseFloat(jQuery.css(elem,"padding"+which[i]))||0;if(extra!=="padding"){val+=parseFloat(jQuery.css(elem,"border"+which[i]+"Width"))||0;}
if(extra==="margin"){val+=parseFloat(jQuery.css(elem,extra+which[i]))||0;}}}
return val+"px";}
if(jQuery.expr&&jQuery.expr.filters){jQuery.expr.filters.hidden=function(elem){var width=elem.offsetWidth,height=elem.offsetHeight;return(width===0&&height===0)||(!jQuery.support.reliableHiddenOffsets&&((elem.style&&elem.style.display)||jQuery.css(elem,"display"))==="none");};jQuery.expr.filters.visible=function(elem){return!jQuery.expr.filters.hidden(elem);};}
var r20=/%20/g,rbracket=/\[\]$/,rCRLF=/\r?\n/g,rhash=/#.*$/,rheaders=/^(.*?):[ \t]*([^\r\n]*)\r?$/mg,rinput=/^(?:color|date|datetime|datetime-local|email|hidden|month|number|password|range|search|tel|text|time|url|week)$/i,rlocalProtocol=/^(?:about|app|app\-storage|.+\-extension|file|res|widget):$/,rnoContent=/^(?:GET|HEAD)$/,rprotocol=/^\/\//,rquery=/\?/,rscript=/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,rselectTextarea=/^(?:select|textarea)/i,rspacesAjax=/\s+/,rts=/([?&])_=[^&]*/,rurl=/^([\w\+\.\-]+:)(?:\/\/([^\/?#:]*)(?::(\d+))?)?/,_load=jQuery.fn.load,prefilters={},transports={},ajaxLocation,ajaxLocParts,allTypes=["*/"]+["*"];try{ajaxLocation=location.href;}catch(e){ajaxLocation=document.createElement("a");ajaxLocation.href="";ajaxLocation=ajaxLocation.href;}
ajaxLocParts=rurl.exec(ajaxLocation.toLowerCase())||[];function addToPrefiltersOrTransports(structure){return function(dataTypeExpression,func){if(typeof dataTypeExpression!=="string"){func=dataTypeExpression;dataTypeExpression="*";}
if(jQuery.isFunction(func)){var dataTypes=dataTypeExpression.toLowerCase().split(rspacesAjax),i=0,length=dataTypes.length,dataType,list,placeBefore;for(;i<length;i++){dataType=dataTypes[i];placeBefore=/^\+/.test(dataType);if(placeBefore){dataType=dataType.substr(1)||"*";}
list=structure[dataType]=structure[dataType]||[];list[placeBefore?"unshift":"push"](func);}}};}
function inspectPrefiltersOrTransports(structure,options,originalOptions,jqXHR,dataType,inspected){dataType=dataType||options.dataTypes[0];inspected=inspected||{};inspected[dataType]=true;var list=structure[dataType],i=0,length=list?list.length:0,executeOnly=(structure===prefilters),selection;for(;i<length&&(executeOnly||!selection);i++){selection=list[i](options,originalOptions,jqXHR);if(typeof selection==="string"){if(!executeOnly||inspected[selection]){selection=undefined;}else{options.dataTypes.unshift(selection);selection=inspectPrefiltersOrTransports(structure,options,originalOptions,jqXHR,selection,inspected);}}}
if((executeOnly||!selection)&&!inspected["*"]){selection=inspectPrefiltersOrTransports(structure,options,originalOptions,jqXHR,"*",inspected);}
return selection;}
function ajaxExtend(target,src){var key,deep,flatOptions=jQuery.ajaxSettings.flatOptions||{};for(key in src){if(src[key]!==undefined){(flatOptions[key]?target:(deep||(deep={})))[key]=src[key];}}
if(deep){jQuery.extend(true,target,deep);}}
jQuery.fn.extend({load:function(url,params,callback){if(typeof url!=="string"&&_load){return _load.apply(this,arguments);}else if(!this.length){return this;}
var off=url.indexOf(" ");if(off>=0){var selector=url.slice(off,url.length);url=url.slice(0,off);}
var type="GET";if(params){if(jQuery.isFunction(params)){callback=params;params=undefined;}else if(typeof params==="object"){params=jQuery.param(params,jQuery.ajaxSettings.traditional);type="POST";}}
var self=this;jQuery.ajax({url:url,type:type,dataType:"html",data:params,complete:function(jqXHR,status,responseText){responseText=jqXHR.responseText;if(jqXHR.isResolved()){jqXHR.done(function(r){responseText=r;});self.html(selector?jQuery("<div>").append(responseText.replace(rscript,"")).find(selector):responseText);}
if(callback){self.each(callback,[responseText,status,jqXHR]);}}});return this;},serialize:function(){return jQuery.param(this.serializeArray());},serializeArray:function(){return this.map(function(){return this.elements?jQuery.makeArray(this.elements):this;}).filter(function(){return this.name&&!this.disabled&&(this.checked||rselectTextarea.test(this.nodeName)||rinput.test(this.type));}).map(function(i,elem){var val=jQuery(this).val();return val==null?null:jQuery.isArray(val)?jQuery.map(val,function(val,i){return{name:elem.name,value:val.replace(rCRLF,"\r\n")};}):{name:elem.name,value:val.replace(rCRLF,"\r\n")};}).get();}});jQuery.each("ajaxStart ajaxStop ajaxComplete ajaxError ajaxSuccess ajaxSend".split(" "),function(i,o){jQuery.fn[o]=function(f){return this.on(o,f);};});jQuery.each(["get","post"],function(i,method){jQuery[method]=function(url,data,callback,type){if(jQuery.isFunction(data)){type=type||callback;callback=data;data=undefined;}
return jQuery.ajax({type:method,url:url,data:data,success:callback,dataType:type});};});jQuery.extend({getScript:function(url,callback){return jQuery.get(url,undefined,callback,"script");},getJSON:function(url,data,callback){return jQuery.get(url,data,callback,"json");},ajaxSetup:function(target,settings){if(settings){ajaxExtend(target,jQuery.ajaxSettings);}else{settings=target;target=jQuery.ajaxSettings;}
ajaxExtend(target,settings);return target;},ajaxSettings:{url:ajaxLocation,isLocal:rlocalProtocol.test(ajaxLocParts[1]),global:true,type:"GET",contentType:"application/x-www-form-urlencoded",processData:true,async:true,accepts:{xml:"application/xml, text/xml",html:"text/html",text:"text/plain",json:"application/json, text/javascript","*":allTypes},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText"},converters:{"* text":window.String,"text html":true,"text json":jQuery.parseJSON,"text xml":jQuery.parseXML},flatOptions:{context:true,url:true}},ajaxPrefilter:addToPrefiltersOrTransports(prefilters),ajaxTransport:addToPrefiltersOrTransports(transports),ajax:function(url,options){if(typeof url==="object"){options=url;url=undefined;}
options=options||{};var
s=jQuery.ajaxSetup({},options),callbackContext=s.context||s,globalEventContext=callbackContext!==s&&(callbackContext.nodeType||callbackContext instanceof jQuery)?jQuery(callbackContext):jQuery.event,deferred=jQuery.Deferred(),completeDeferred=jQuery.Callbacks("once memory"),statusCode=s.statusCode||{},ifModifiedKey,requestHeaders={},requestHeadersNames={},responseHeadersString,responseHeaders,transport,timeoutTimer,parts,state=0,fireGlobals,i,jqXHR={readyState:0,setRequestHeader:function(name,value){if(!state){var lname=name.toLowerCase();name=requestHeadersNames[lname]=requestHeadersNames[lname]||name;requestHeaders[name]=value;}
return this;},getAllResponseHeaders:function(){return state===2?responseHeadersString:null;},getResponseHeader:function(key){var match;if(state===2){if(!responseHeaders){responseHeaders={};while((match=rheaders.exec(responseHeadersString))){responseHeaders[match[1].toLowerCase()]=match[2];}}
match=responseHeaders[key.toLowerCase()];}
return match===undefined?null:match;},overrideMimeType:function(type){if(!state){s.mimeType=type;}
return this;},abort:function(statusText){statusText=statusText||"abort";if(transport){transport.abort(statusText);}
done(0,statusText);return this;}};function done(status,nativeStatusText,responses,headers){if(state===2){return;}
state=2;if(timeoutTimer){clearTimeout(timeoutTimer);}
transport=undefined;responseHeadersString=headers||"";jqXHR.readyState=status>0?4:0;var isSuccess,success,error,statusText=nativeStatusText,response=responses?ajaxHandleResponses(s,jqXHR,responses):undefined,lastModified,etag;if(status>=200&&status<300||status===304){if(s.ifModified){if((lastModified=jqXHR.getResponseHeader("Last-Modified"))){jQuery.lastModified[ifModifiedKey]=lastModified;}
if((etag=jqXHR.getResponseHeader("Etag"))){jQuery.etag[ifModifiedKey]=etag;}}
if(status===304){statusText="notmodified";isSuccess=true;}else{try{success=ajaxConvert(s,response);statusText="success";isSuccess=true;}catch(e){statusText="parsererror";error=e;}}}else{error=statusText;if(!statusText||status){statusText="error";if(status<0){status=0;}}}
jqXHR.status=status;jqXHR.statusText=""+(nativeStatusText||statusText);if(isSuccess){deferred.resolveWith(callbackContext,[success,statusText,jqXHR]);}else{deferred.rejectWith(callbackContext,[jqXHR,statusText,error]);}
jqXHR.statusCode(statusCode);statusCode=undefined;if(fireGlobals){globalEventContext.trigger("ajax"+(isSuccess?"Success":"Error"),[jqXHR,s,isSuccess?success:error]);}
completeDeferred.fireWith(callbackContext,[jqXHR,statusText]);if(fireGlobals){globalEventContext.trigger("ajaxComplete",[jqXHR,s]);if(!(--jQuery.active)){jQuery.event.trigger("ajaxStop");}}}
deferred.promise(jqXHR);jqXHR.success=jqXHR.done;jqXHR.error=jqXHR.fail;jqXHR.complete=completeDeferred.add;jqXHR.statusCode=function(map){if(map){var tmp;if(state<2){for(tmp in map){statusCode[tmp]=[statusCode[tmp],map[tmp]];}}else{tmp=map[jqXHR.status];jqXHR.then(tmp,tmp);}}
return this;};s.url=((url||s.url)+"").replace(rhash,"").replace(rprotocol,ajaxLocParts[1]+"//");s.dataTypes=jQuery.trim(s.dataType||"*").toLowerCase().split(rspacesAjax);if(s.crossDomain==null){parts=rurl.exec(s.url.toLowerCase());s.crossDomain=!!(parts&&(parts[1]!=ajaxLocParts[1]||parts[2]!=ajaxLocParts[2]||(parts[3]||(parts[1]==="http:"?80:443))!=(ajaxLocParts[3]||(ajaxLocParts[1]==="http:"?80:443))));}
if(s.data&&s.processData&&typeof s.data!=="string"){s.data=jQuery.param(s.data,s.traditional);}
inspectPrefiltersOrTransports(prefilters,s,options,jqXHR);if(state===2){return false;}
fireGlobals=s.global;s.type=s.type.toUpperCase();s.hasContent=!rnoContent.test(s.type);if(fireGlobals&&jQuery.active++===0){jQuery.event.trigger("ajaxStart");}
if(!s.hasContent){if(s.data){s.url+=(rquery.test(s.url)?"&":"?")+s.data;delete s.data;}
ifModifiedKey=s.url;if(s.cache===false){var ts=jQuery.now(),ret=s.url.replace(rts,"$1_="+ts);s.url=ret+((ret===s.url)?(rquery.test(s.url)?"&":"?")+"_="+ts:"");}}
if(s.data&&s.hasContent&&s.contentType!==false||options.contentType){jqXHR.setRequestHeader("Content-Type",s.contentType);}
if(s.ifModified){ifModifiedKey=ifModifiedKey||s.url;if(jQuery.lastModified[ifModifiedKey]){jqXHR.setRequestHeader("If-Modified-Since",jQuery.lastModified[ifModifiedKey]);}
if(jQuery.etag[ifModifiedKey]){jqXHR.setRequestHeader("If-None-Match",jQuery.etag[ifModifiedKey]);}}
jqXHR.setRequestHeader("Accept",s.dataTypes[0]&&s.accepts[s.dataTypes[0]]?s.accepts[s.dataTypes[0]]+(s.dataTypes[0]!=="*"?", "+allTypes+"; q=0.01":""):s.accepts["*"]);for(i in s.headers){jqXHR.setRequestHeader(i,s.headers[i]);}
if(s.beforeSend&&(s.beforeSend.call(callbackContext,jqXHR,s)===false||state===2)){jqXHR.abort();return false;}
for(i in{success:1,error:1,complete:1}){jqXHR[i](s[i]);}
transport=inspectPrefiltersOrTransports(transports,s,options,jqXHR);if(!transport){done(-1,"No Transport");}else{jqXHR.readyState=1;if(fireGlobals){globalEventContext.trigger("ajaxSend",[jqXHR,s]);}
if(s.async&&s.timeout>0){timeoutTimer=setTimeout(function(){jqXHR.abort("timeout");},s.timeout);}
try{state=1;transport.send(requestHeaders,done);}catch(e){if(state<2){done(-1,e);}else{throw e;}}}
return jqXHR;},param:function(a,traditional){var s=[],add=function(key,value){value=jQuery.isFunction(value)?value():value;s[s.length]=encodeURIComponent(key)+"="+encodeURIComponent(value);};if(traditional===undefined){traditional=jQuery.ajaxSettings.traditional;}
if(jQuery.isArray(a)||(a.jquery&&!jQuery.isPlainObject(a))){jQuery.each(a,function(){add(this.name,this.value);});}else{for(var prefix in a){buildParams(prefix,a[prefix],traditional,add);}}
return s.join("&").replace(r20,"+");}});function buildParams(prefix,obj,traditional,add){if(jQuery.isArray(obj)){jQuery.each(obj,function(i,v){if(traditional||rbracket.test(prefix)){add(prefix,v);}else{buildParams(prefix+"["+(typeof v==="object"||jQuery.isArray(v)?i:"")+"]",v,traditional,add);}});}else if(!traditional&&obj!=null&&typeof obj==="object"){for(var name in obj){buildParams(prefix+"["+name+"]",obj[name],traditional,add);}}else{add(prefix,obj);}}
jQuery.extend({active:0,lastModified:{},etag:{}});function ajaxHandleResponses(s,jqXHR,responses){var contents=s.contents,dataTypes=s.dataTypes,responseFields=s.responseFields,ct,type,finalDataType,firstDataType;for(type in responseFields){if(type in responses){jqXHR[responseFields[type]]=responses[type];}}
while(dataTypes[0]==="*"){dataTypes.shift();if(ct===undefined){ct=s.mimeType||jqXHR.getResponseHeader("content-type");}}
if(ct){for(type in contents){if(contents[type]&&contents[type].test(ct)){dataTypes.unshift(type);break;}}}
if(dataTypes[0]in responses){finalDataType=dataTypes[0];}else{for(type in responses){if(!dataTypes[0]||s.converters[type+" "+dataTypes[0]]){finalDataType=type;break;}
if(!firstDataType){firstDataType=type;}}
finalDataType=finalDataType||firstDataType;}
if(finalDataType){if(finalDataType!==dataTypes[0]){dataTypes.unshift(finalDataType);}
return responses[finalDataType];}}
function ajaxConvert(s,response){if(s.dataFilter){response=s.dataFilter(response,s.dataType);}
var dataTypes=s.dataTypes,converters={},i,key,length=dataTypes.length,tmp,current=dataTypes[0],prev,conversion,conv,conv1,conv2;for(i=1;i<length;i++){if(i===1){for(key in s.converters){if(typeof key==="string"){converters[key.toLowerCase()]=s.converters[key];}}}
prev=current;current=dataTypes[i];if(current==="*"){current=prev;}else if(prev!=="*"&&prev!==current){conversion=prev+" "+current;conv=converters[conversion]||converters["* "+current];if(!conv){conv2=undefined;for(conv1 in converters){tmp=conv1.split(" ");if(tmp[0]===prev||tmp[0]==="*"){conv2=converters[tmp[1]+" "+current];if(conv2){conv1=converters[conv1];if(conv1===true){conv=conv2;}else if(conv2===true){conv=conv1;}
break;}}}}
if(!(conv||conv2)){jQuery.error("No conversion from "+conversion.replace(" "," to "));}
if(conv!==true){response=conv?conv(response):conv2(conv1(response));}}}
return response;}
var jsc=jQuery.now(),jsre=/(\=)\?(&|$)|\?\?/i;jQuery.ajaxSetup({jsonp:"callback",jsonpCallback:function(){return jQuery.expando+"_"+(jsc++);}});jQuery.ajaxPrefilter("json jsonp",function(s,originalSettings,jqXHR){var inspectData=s.contentType==="application/x-www-form-urlencoded"&&(typeof s.data==="string");if(s.dataTypes[0]==="jsonp"||s.jsonp!==false&&(jsre.test(s.url)||inspectData&&jsre.test(s.data))){var responseContainer,jsonpCallback=s.jsonpCallback=jQuery.isFunction(s.jsonpCallback)?s.jsonpCallback():s.jsonpCallback,previous=window[jsonpCallback],url=s.url,data=s.data,replace="$1"+jsonpCallback+"$2";if(s.jsonp!==false){url=url.replace(jsre,replace);if(s.url===url){if(inspectData){data=data.replace(jsre,replace);}
if(s.data===data){url+=(/\?/.test(url)?"&":"?")+s.jsonp+"="+jsonpCallback;}}}
s.url=url;s.data=data;window[jsonpCallback]=function(response){responseContainer=[response];};jqXHR.always(function(){window[jsonpCallback]=previous;if(responseContainer&&jQuery.isFunction(previous)){window[jsonpCallback](responseContainer[0]);}});s.converters["script json"]=function(){if(!responseContainer){jQuery.error(jsonpCallback+" was not called");}
return responseContainer[0];};s.dataTypes[0]="json";return"script";}});jQuery.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/javascript|ecmascript/},converters:{"text script":function(text){jQuery.globalEval(text);return text;}}});jQuery.ajaxPrefilter("script",function(s){if(s.cache===undefined){s.cache=false;}
if(s.crossDomain){s.type="GET";s.global=false;}});jQuery.ajaxTransport("script",function(s){if(s.crossDomain){var script,head=document.head||document.getElementsByTagName("head")[0]||document.documentElement;return{send:function(_,callback){script=document.createElement("script");script.async="async";if(s.scriptCharset){script.charset=s.scriptCharset;}
script.src=s.url;script.onload=script.onreadystatechange=function(_,isAbort){if(isAbort||!script.readyState||/loaded|complete/.test(script.readyState)){script.onload=script.onreadystatechange=null;if(head&&script.parentNode){head.removeChild(script);}
script=undefined;if(!isAbort){callback(200,"success");}}};head.insertBefore(script,head.firstChild);},abort:function(){if(script){script.onload(0,1);}}};}});var
xhrOnUnloadAbort=window.ActiveXObject?function(){for(var key in xhrCallbacks){xhrCallbacks[key](0,1);}}:false,xhrId=0,xhrCallbacks;function createStandardXHR(){try{return new window.XMLHttpRequest();}catch(e){}}
function createActiveXHR(){try{return new window.ActiveXObject("Microsoft.XMLHTTP");}catch(e){}}
jQuery.ajaxSettings.xhr=window.ActiveXObject?function(){return!this.isLocal&&createStandardXHR()||createActiveXHR();}:createStandardXHR;(function(xhr){jQuery.extend(jQuery.support,{ajax:!!xhr,cors:!!xhr&&("withCredentials"in xhr)});})(jQuery.ajaxSettings.xhr());if(jQuery.support.ajax){jQuery.ajaxTransport(function(s){if(!s.crossDomain||jQuery.support.cors){var callback;return{send:function(headers,complete){var xhr=s.xhr(),handle,i;if(s.username){xhr.open(s.type,s.url,s.async,s.username,s.password);}else{xhr.open(s.type,s.url,s.async);}
if(s.xhrFields){for(i in s.xhrFields){xhr[i]=s.xhrFields[i];}}
if(s.mimeType&&xhr.overrideMimeType){xhr.overrideMimeType(s.mimeType);}
if(!s.crossDomain&&!headers["X-Requested-With"]){headers["X-Requested-With"]="XMLHttpRequest";}
try{for(i in headers){xhr.setRequestHeader(i,headers[i]);}}catch(_){}
xhr.send((s.hasContent&&s.data)||null);callback=function(_,isAbort){var status,statusText,responseHeaders,responses,xml;try{if(callback&&(isAbort||xhr.readyState===4)){callback=undefined;if(handle){xhr.onreadystatechange=jQuery.noop;if(xhrOnUnloadAbort){delete xhrCallbacks[handle];}}
if(isAbort){if(xhr.readyState!==4){xhr.abort();}}else{status=xhr.status;responseHeaders=xhr.getAllResponseHeaders();responses={};xml=xhr.responseXML;if(xml&&xml.documentElement){responses.xml=xml;}
responses.text=xhr.responseText;try{statusText=xhr.statusText;}catch(e){statusText="";}
if(!status&&s.isLocal&&!s.crossDomain){status=responses.text?200:404;}else if(status===1223){status=204;}}}}catch(firefoxAccessException){if(!isAbort){complete(-1,firefoxAccessException);}}
if(responses){complete(status,statusText,responses,responseHeaders);}};if(!s.async||xhr.readyState===4){callback();}else{handle=++xhrId;if(xhrOnUnloadAbort){if(!xhrCallbacks){xhrCallbacks={};jQuery(window).unload(xhrOnUnloadAbort);}
xhrCallbacks[handle]=callback;}
xhr.onreadystatechange=callback;}},abort:function(){if(callback){callback(0,1);}}};}});}
var elemdisplay={},iframe,iframeDoc,rfxtypes=/^(?:toggle|show|hide)$/,rfxnum=/^([+\-]=)?([\d+.\-]+)([a-z%]*)$/i,timerId,fxAttrs=[["height","marginTop","marginBottom","paddingTop","paddingBottom"],["width","marginLeft","marginRight","paddingLeft","paddingRight"],["opacity"]],fxNow;jQuery.fn.extend({show:function(speed,easing,callback){var elem,display;if(speed||speed===0){return this.animate(genFx("show",3),speed,easing,callback);}else{for(var i=0,j=this.length;i<j;i++){elem=this[i];if(elem.style){display=elem.style.display;if(!jQuery._data(elem,"olddisplay")&&display==="none"){display=elem.style.display="";}
if(display===""&&jQuery.css(elem,"display")==="none"){jQuery._data(elem,"olddisplay",defaultDisplay(elem.nodeName));}}}
for(i=0;i<j;i++){elem=this[i];if(elem.style){display=elem.style.display;if(display===""||display==="none"){elem.style.display=jQuery._data(elem,"olddisplay")||"";}}}
return this;}},hide:function(speed,easing,callback){if(speed||speed===0){return this.animate(genFx("hide",3),speed,easing,callback);}else{var elem,display,i=0,j=this.length;for(;i<j;i++){elem=this[i];if(elem.style){display=jQuery.css(elem,"display");if(display!=="none"&&!jQuery._data(elem,"olddisplay")){jQuery._data(elem,"olddisplay",display);}}}
for(i=0;i<j;i++){if(this[i].style){this[i].style.display="none";}}
return this;}},_toggle:jQuery.fn.toggle,toggle:function(fn,fn2,callback){var bool=typeof fn==="boolean";if(jQuery.isFunction(fn)&&jQuery.isFunction(fn2)){this._toggle.apply(this,arguments);}else if(fn==null||bool){this.each(function(){var state=bool?fn:jQuery(this).is(":hidden");jQuery(this)[state?"show":"hide"]();});}else{this.animate(genFx("toggle",3),fn,fn2,callback);}
return this;},fadeTo:function(speed,to,easing,callback){return this.filter(":hidden").css("opacity",0).show().end().animate({opacity:to},speed,easing,callback);},animate:function(prop,speed,easing,callback){var optall=jQuery.speed(speed,easing,callback);if(jQuery.isEmptyObject(prop)){return this.each(optall.complete,[false]);}
prop=jQuery.extend({},prop);function doAnimation(){if(optall.queue===false){jQuery._mark(this);}
var opt=jQuery.extend({},optall),isElement=this.nodeType===1,hidden=isElement&&jQuery(this).is(":hidden"),name,val,p,e,parts,start,end,unit,method;opt.animatedProperties={};for(p in prop){name=jQuery.camelCase(p);if(p!==name){prop[name]=prop[p];delete prop[p];}
val=prop[name];if(jQuery.isArray(val)){opt.animatedProperties[name]=val[1];val=prop[name]=val[0];}else{opt.animatedProperties[name]=opt.specialEasing&&opt.specialEasing[name]||opt.easing||'swing';}
if(val==="hide"&&hidden||val==="show"&&!hidden){return opt.complete.call(this);}
if(isElement&&(name==="height"||name==="width")){opt.overflow=[this.style.overflow,this.style.overflowX,this.style.overflowY];if(jQuery.css(this,"display")==="inline"&&jQuery.css(this,"float")==="none"){if(!jQuery.support.inlineBlockNeedsLayout||defaultDisplay(this.nodeName)==="inline"){this.style.display="inline-block";}else{this.style.zoom=1;}}}}
if(opt.overflow!=null){this.style.overflow="hidden";}
for(p in prop){e=new jQuery.fx(this,opt,p);val=prop[p];if(rfxtypes.test(val)){method=jQuery._data(this,"toggle"+p)||(val==="toggle"?hidden?"show":"hide":0);if(method){jQuery._data(this,"toggle"+p,method==="show"?"hide":"show");e[method]();}else{e[val]();}}else{parts=rfxnum.exec(val);start=e.cur();if(parts){end=parseFloat(parts[2]);unit=parts[3]||(jQuery.cssNumber[p]?"":"px");if(unit!=="px"){jQuery.style(this,p,(end||1)+unit);start=((end||1)/e.cur())*start;jQuery.style(this,p,start+unit);}
if(parts[1]){end=((parts[1]==="-="?-1:1)*end)+start;}
e.custom(start,end,unit);}else{e.custom(start,val,"");}}}
return true;}
return optall.queue===false?this.each(doAnimation):this.queue(optall.queue,doAnimation);},stop:function(type,clearQueue,gotoEnd){if(typeof type!=="string"){gotoEnd=clearQueue;clearQueue=type;type=undefined;}
if(clearQueue&&type!==false){this.queue(type||"fx",[]);}
return this.each(function(){var index,hadTimers=false,timers=jQuery.timers,data=jQuery._data(this);if(!gotoEnd){jQuery._unmark(true,this);}
function stopQueue(elem,data,index){var hooks=data[index];jQuery.removeData(elem,index,true);hooks.stop(gotoEnd);}
if(type==null){for(index in data){if(data[index]&&data[index].stop&&index.indexOf(".run")===index.length-4){stopQueue(this,data,index);}}}else if(data[index=type+".run"]&&data[index].stop){stopQueue(this,data,index);}
for(index=timers.length;index--;){if(timers[index].elem===this&&(type==null||timers[index].queue===type)){if(gotoEnd){timers[index](true);}else{timers[index].saveState();}
hadTimers=true;timers.splice(index,1);}}
if(!(gotoEnd&&hadTimers)){jQuery.dequeue(this,type);}});}});function createFxNow(){setTimeout(clearFxNow,0);return(fxNow=jQuery.now());}
function clearFxNow(){fxNow=undefined;}
function genFx(type,num){var obj={};jQuery.each(fxAttrs.concat.apply([],fxAttrs.slice(0,num)),function(){obj[this]=type;});return obj;}
jQuery.each({slideDown:genFx("show",1),slideUp:genFx("hide",1),slideToggle:genFx("toggle",1),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(name,props){jQuery.fn[name]=function(speed,easing,callback){return this.animate(props,speed,easing,callback);};});jQuery.extend({speed:function(speed,easing,fn){var opt=speed&&typeof speed==="object"?jQuery.extend({},speed):{complete:fn||!fn&&easing||jQuery.isFunction(speed)&&speed,duration:speed,easing:fn&&easing||easing&&!jQuery.isFunction(easing)&&easing};opt.duration=jQuery.fx.off?0:typeof opt.duration==="number"?opt.duration:opt.duration in jQuery.fx.speeds?jQuery.fx.speeds[opt.duration]:jQuery.fx.speeds._default;if(opt.queue==null||opt.queue===true){opt.queue="fx";}
opt.old=opt.complete;opt.complete=function(noUnmark){if(jQuery.isFunction(opt.old)){opt.old.call(this);}
if(opt.queue){jQuery.dequeue(this,opt.queue);}else if(noUnmark!==false){jQuery._unmark(this);}};return opt;},easing:{linear:function(p,n,firstNum,diff){return firstNum+diff*p;},swing:function(p,n,firstNum,diff){return((-Math.cos(p*Math.PI)/2)+0.5)*diff+firstNum;}},timers:[],fx:function(elem,options,prop){this.options=options;this.elem=elem;this.prop=prop;options.orig=options.orig||{};}});jQuery.fx.prototype={update:function(){if(this.options.step){this.options.step.call(this.elem,this.now,this);}
(jQuery.fx.step[this.prop]||jQuery.fx.step._default)(this);},cur:function(){if(this.elem[this.prop]!=null&&(!this.elem.style||this.elem.style[this.prop]==null)){return this.elem[this.prop];}
var parsed,r=jQuery.css(this.elem,this.prop);return isNaN(parsed=parseFloat(r))?!r||r==="auto"?0:r:parsed;},custom:function(from,to,unit){var self=this,fx=jQuery.fx;this.startTime=fxNow||createFxNow();this.end=to;this.now=this.start=from;this.pos=this.state=0;this.unit=unit||this.unit||(jQuery.cssNumber[this.prop]?"":"px");function t(gotoEnd){return self.step(gotoEnd);}
t.queue=this.options.queue;t.elem=this.elem;t.saveState=function(){if(self.options.hide&&jQuery._data(self.elem,"fxshow"+self.prop)===undefined){jQuery._data(self.elem,"fxshow"+self.prop,self.start);}};if(t()&&jQuery.timers.push(t)&&!timerId){timerId=setInterval(fx.tick,fx.interval);}},show:function(){var dataShow=jQuery._data(this.elem,"fxshow"+this.prop);this.options.orig[this.prop]=dataShow||jQuery.style(this.elem,this.prop);this.options.show=true;if(dataShow!==undefined){this.custom(this.cur(),dataShow);}else{this.custom(this.prop==="width"||this.prop==="height"?1:0,this.cur());}
jQuery(this.elem).show();},hide:function(){this.options.orig[this.prop]=jQuery._data(this.elem,"fxshow"+this.prop)||jQuery.style(this.elem,this.prop);this.options.hide=true;this.custom(this.cur(),0);},step:function(gotoEnd){var p,n,complete,t=fxNow||createFxNow(),done=true,elem=this.elem,options=this.options;if(gotoEnd||t>=options.duration+this.startTime){this.now=this.end;this.pos=this.state=1;this.update();options.animatedProperties[this.prop]=true;for(p in options.animatedProperties){if(options.animatedProperties[p]!==true){done=false;}}
if(done){if(options.overflow!=null&&!jQuery.support.shrinkWrapBlocks){jQuery.each(["","X","Y"],function(index,value){elem.style["overflow"+value]=options.overflow[index];});}
if(options.hide){jQuery(elem).hide();}
if(options.hide||options.show){for(p in options.animatedProperties){jQuery.style(elem,p,options.orig[p]);jQuery.removeData(elem,"fxshow"+p,true);jQuery.removeData(elem,"toggle"+p,true);}}
complete=options.complete;if(complete){options.complete=false;complete.call(elem);}}
return false;}else{if(options.duration==Infinity){this.now=t;}else{n=t-this.startTime;this.state=n/options.duration;this.pos=jQuery.easing[options.animatedProperties[this.prop]](this.state,n,0,1,options.duration);this.now=this.start+((this.end-this.start)*this.pos);}
this.update();}
return true;}};jQuery.extend(jQuery.fx,{tick:function(){var timer,timers=jQuery.timers,i=0;for(;i<timers.length;i++){timer=timers[i];if(!timer()&&timers[i]===timer){timers.splice(i--,1);}}
if(!timers.length){jQuery.fx.stop();}},interval:13,stop:function(){clearInterval(timerId);timerId=null;},speeds:{slow:600,fast:200,_default:400},step:{opacity:function(fx){jQuery.style(fx.elem,"opacity",fx.now);},_default:function(fx){if(fx.elem.style&&fx.elem.style[fx.prop]!=null){fx.elem.style[fx.prop]=fx.now+fx.unit;}else{fx.elem[fx.prop]=fx.now;}}}});jQuery.each(["width","height"],function(i,prop){jQuery.fx.step[prop]=function(fx){jQuery.style(fx.elem,prop,Math.max(0,fx.now)+fx.unit);};});if(jQuery.expr&&jQuery.expr.filters){jQuery.expr.filters.animated=function(elem){return jQuery.grep(jQuery.timers,function(fn){return elem===fn.elem;}).length;};}
function defaultDisplay(nodeName){if(!elemdisplay[nodeName]){var body=document.body,elem=jQuery("<"+nodeName+">").appendTo(body),display=elem.css("display");elem.remove();if(display==="none"||display===""){if(!iframe){iframe=document.createElement("iframe");iframe.frameBorder=iframe.width=iframe.height=0;}
body.appendChild(iframe);if(!iframeDoc||!iframe.createElement){iframeDoc=(iframe.contentWindow||iframe.contentDocument).document;iframeDoc.write((document.compatMode==="CSS1Compat"?"<!doctype html>":"")+"<html><body>");iframeDoc.close();}
elem=iframeDoc.createElement(nodeName);iframeDoc.body.appendChild(elem);display=jQuery.css(elem,"display");body.removeChild(iframe);}
elemdisplay[nodeName]=display;}
return elemdisplay[nodeName];}
var rtable=/^t(?:able|d|h)$/i,rroot=/^(?:body|html)$/i;if("getBoundingClientRect"in document.documentElement){jQuery.fn.offset=function(options){var elem=this[0],box;if(options){return this.each(function(i){jQuery.offset.setOffset(this,options,i);});}
if(!elem||!elem.ownerDocument){return null;}
if(elem===elem.ownerDocument.body){return jQuery.offset.bodyOffset(elem);}
try{box=elem.getBoundingClientRect();}catch(e){}
var doc=elem.ownerDocument,docElem=doc.documentElement;if(!box||!jQuery.contains(docElem,elem)){return box?{top:box.top,left:box.left}:{top:0,left:0};}
var body=doc.body,win=getWindow(doc),clientTop=docElem.clientTop||body.clientTop||0,clientLeft=docElem.clientLeft||body.clientLeft||0,scrollTop=win.pageYOffset||jQuery.support.boxModel&&docElem.scrollTop||body.scrollTop,scrollLeft=win.pageXOffset||jQuery.support.boxModel&&docElem.scrollLeft||body.scrollLeft,top=box.top+scrollTop-clientTop,left=box.left+scrollLeft-clientLeft;return{top:top,left:left};};}else{jQuery.fn.offset=function(options){var elem=this[0];if(options){return this.each(function(i){jQuery.offset.setOffset(this,options,i);});}
if(!elem||!elem.ownerDocument){return null;}
if(elem===elem.ownerDocument.body){return jQuery.offset.bodyOffset(elem);}
var computedStyle,offsetParent=elem.offsetParent,prevOffsetParent=elem,doc=elem.ownerDocument,docElem=doc.documentElement,body=doc.body,defaultView=doc.defaultView,prevComputedStyle=defaultView?defaultView.getComputedStyle(elem,null):elem.currentStyle,top=elem.offsetTop,left=elem.offsetLeft;while((elem=elem.parentNode)&&elem!==body&&elem!==docElem){if(jQuery.support.fixedPosition&&prevComputedStyle.position==="fixed"){break;}
computedStyle=defaultView?defaultView.getComputedStyle(elem,null):elem.currentStyle;top-=elem.scrollTop;left-=elem.scrollLeft;if(elem===offsetParent){top+=elem.offsetTop;left+=elem.offsetLeft;if(jQuery.support.doesNotAddBorder&&!(jQuery.support.doesAddBorderForTableAndCells&&rtable.test(elem.nodeName))){top+=parseFloat(computedStyle.borderTopWidth)||0;left+=parseFloat(computedStyle.borderLeftWidth)||0;}
prevOffsetParent=offsetParent;offsetParent=elem.offsetParent;}
if(jQuery.support.subtractsBorderForOverflowNotVisible&&computedStyle.overflow!=="visible"){top+=parseFloat(computedStyle.borderTopWidth)||0;left+=parseFloat(computedStyle.borderLeftWidth)||0;}
prevComputedStyle=computedStyle;}
if(prevComputedStyle.position==="relative"||prevComputedStyle.position==="static"){top+=body.offsetTop;left+=body.offsetLeft;}
if(jQuery.support.fixedPosition&&prevComputedStyle.position==="fixed"){top+=Math.max(docElem.scrollTop,body.scrollTop);left+=Math.max(docElem.scrollLeft,body.scrollLeft);}
return{top:top,left:left};};}
jQuery.offset={bodyOffset:function(body){var top=body.offsetTop,left=body.offsetLeft;if(jQuery.support.doesNotIncludeMarginInBodyOffset){top+=parseFloat(jQuery.css(body,"marginTop"))||0;left+=parseFloat(jQuery.css(body,"marginLeft"))||0;}
return{top:top,left:left};},setOffset:function(elem,options,i){var position=jQuery.css(elem,"position");if(position==="static"){elem.style.position="relative";}
var curElem=jQuery(elem),curOffset=curElem.offset(),curCSSTop=jQuery.css(elem,"top"),curCSSLeft=jQuery.css(elem,"left"),calculatePosition=(position==="absolute"||position==="fixed")&&jQuery.inArray("auto",[curCSSTop,curCSSLeft])>-1,props={},curPosition={},curTop,curLeft;if(calculatePosition){curPosition=curElem.position();curTop=curPosition.top;curLeft=curPosition.left;}else{curTop=parseFloat(curCSSTop)||0;curLeft=parseFloat(curCSSLeft)||0;}
if(jQuery.isFunction(options)){options=options.call(elem,i,curOffset);}
if(options.top!=null){props.top=(options.top-curOffset.top)+curTop;}
if(options.left!=null){props.left=(options.left-curOffset.left)+curLeft;}
if("using"in options){options.using.call(elem,props);}else{curElem.css(props);}}};jQuery.fn.extend({position:function(){if(!this[0]){return null;}
var elem=this[0],offsetParent=this.offsetParent(),offset=this.offset(),parentOffset=rroot.test(offsetParent[0].nodeName)?{top:0,left:0}:offsetParent.offset();offset.top-=parseFloat(jQuery.css(elem,"marginTop"))||0;offset.left-=parseFloat(jQuery.css(elem,"marginLeft"))||0;parentOffset.top+=parseFloat(jQuery.css(offsetParent[0],"borderTopWidth"))||0;parentOffset.left+=parseFloat(jQuery.css(offsetParent[0],"borderLeftWidth"))||0;return{top:offset.top-parentOffset.top,left:offset.left-parentOffset.left};},offsetParent:function(){return this.map(function(){var offsetParent=this.offsetParent||document.body;while(offsetParent&&(!rroot.test(offsetParent.nodeName)&&jQuery.css(offsetParent,"position")==="static")){offsetParent=offsetParent.offsetParent;}
return offsetParent;});}});jQuery.each(["Left","Top"],function(i,name){var method="scroll"+name;jQuery.fn[method]=function(val){var elem,win;if(val===undefined){elem=this[0];if(!elem){return null;}
win=getWindow(elem);return win?("pageXOffset"in win)?win[i?"pageYOffset":"pageXOffset"]:jQuery.support.boxModel&&win.document.documentElement[method]||win.document.body[method]:elem[method];}
return this.each(function(){win=getWindow(this);if(win){win.scrollTo(!i?val:jQuery(win).scrollLeft(),i?val:jQuery(win).scrollTop());}else{this[method]=val;}});};});function getWindow(elem){return jQuery.isWindow(elem)?elem:elem.nodeType===9?elem.defaultView||elem.parentWindow:false;}
jQuery.each(["Height","Width"],function(i,name){var type=name.toLowerCase();jQuery.fn["inner"+name]=function(){var elem=this[0];return elem?elem.style?parseFloat(jQuery.css(elem,type,"padding")):this[type]():null;};jQuery.fn["outer"+name]=function(margin){var elem=this[0];return elem?elem.style?parseFloat(jQuery.css(elem,type,margin?"margin":"border")):this[type]():null;};jQuery.fn[type]=function(size){var elem=this[0];if(!elem){return size==null?null:this;}
if(jQuery.isFunction(size)){return this.each(function(i){var self=jQuery(this);self[type](size.call(this,i,self[type]()));});}
if(jQuery.isWindow(elem)){var docElemProp=elem.document.documentElement["client"+name],body=elem.document.body;return elem.document.compatMode==="CSS1Compat"&&docElemProp||body&&body["client"+name]||docElemProp;}else if(elem.nodeType===9){return Math.max(elem.documentElement["client"+name],elem.body["scroll"+name],elem.documentElement["scroll"+name],elem.body["offset"+name],elem.documentElement["offset"+name]);}else if(size===undefined){var orig=jQuery.css(elem,type),ret=parseFloat(orig);return jQuery.isNumeric(ret)?ret:orig;}else{return this.css(type,typeof size==="string"?size:size+"px");}};});window.jQuery=window.$=jQuery;if(typeof define==="function"&&define.amd&&define.amd.jQuery){define("jquery",[],function(){return jQuery;});}})(window);/* ===================================================
 * bootstrap-transition.js v2.3.2
 * http://getbootstrap.com/2.3.2/javascript.html#transitions
 * ===================================================
 * Copyright 2013 Twitter, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * ========================================================== */


!function ($) {

  "use strict"; // jshint ;_;


  /* CSS TRANSITION SUPPORT (http://www.modernizr.com/)
   * ======================================================= */

  $(function () {

    $.support.transition = (function () {

      var transitionEnd = (function () {

        var el = document.createElement('bootstrap')
          , transEndEventNames = {
               'WebkitTransition' : 'webkitTransitionEnd'
            ,  'MozTransition'    : 'transitionend'
            ,  'OTransition'      : 'oTransitionEnd otransitionend'
            ,  'transition'       : 'transitionend'
            }
          , name

        for (name in transEndEventNames){
          if (el.style[name] !== undefined) {
            return transEndEventNames[name]
          }
        }

      }())

      return transitionEnd && {
        end: transitionEnd
      }

    })()

  })

}(window.jQuery);/* ==========================================================
 * bootstrap-alert.js v2.3.2
 * http://getbootstrap.com/2.3.2/javascript.html#alerts
 * ==========================================================
 * Copyright 2013 Twitter, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * ========================================================== */


!function ($) {

  "use strict"; // jshint ;_;


 /* ALERT CLASS DEFINITION
  * ====================== */

  var dismiss = '[data-dismiss="alert"]'
    , Alert = function (el) {
        $(el).on('click', dismiss, this.close)
      }

  Alert.prototype.close = function (e) {
    var $this = $(this)
      , selector = $this.attr('data-target')
      , $parent

    if (!selector) {
      selector = $this.attr('href')
      selector = selector && selector.replace(/.*(?=#[^\s]*$)/, '') //strip for ie7
    }

    $parent = $(selector)

    e && e.preventDefault()

    $parent.length || ($parent = $this.hasClass('alert') ? $this : $this.parent())

    $parent.trigger(e = $.Event('close'))

    if (e.isDefaultPrevented()) return

    $parent.removeClass('in')

    function removeElement() {
      $parent
        .trigger('closed')
        .remove()
    }

    $.support.transition && $parent.hasClass('fade') ?
      $parent.on($.support.transition.end, removeElement) :
      removeElement()
  }


 /* ALERT PLUGIN DEFINITION
  * ======================= */

  var old = $.fn.alert

  $.fn.alert = function (option) {
    return this.each(function () {
      var $this = $(this)
        , data = $this.data('alert')
      if (!data) $this.data('alert', (data = new Alert(this)))
      if (typeof option == 'string') data[option].call($this)
    })
  }

  $.fn.alert.Constructor = Alert


 /* ALERT NO CONFLICT
  * ================= */

  $.fn.alert.noConflict = function () {
    $.fn.alert = old
    return this
  }


 /* ALERT DATA-API
  * ============== */

  $(document).on('click.alert.data-api', dismiss, Alert.prototype.close)

}(window.jQuery);/* ============================================================
 * bootstrap-button.js v2.3.2
 * http://getbootstrap.com/2.3.2/javascript.html#buttons
 * ============================================================
 * Copyright 2013 Twitter, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * ============================================================ */


!function ($) {

  "use strict"; // jshint ;_;


 /* BUTTON PUBLIC CLASS DEFINITION
  * ============================== */

  var Button = function (element, options) {
    this.$element = $(element)
    this.options = $.extend({}, $.fn.button.defaults, options)
  }

  Button.prototype.setState = function (state) {
    var d = 'disabled'
      , $el = this.$element
      , data = $el.data()
      , val = $el.is('input') ? 'val' : 'html'

    state = state + 'Text'
    data.resetText || $el.data('resetText', $el[val]())

    $el[val](data[state] || this.options[state])

    // push to event loop to allow forms to submit
    setTimeout(function () {
      state == 'loadingText' ?
        $el.addClass(d).attr(d, d) :
        $el.removeClass(d).removeAttr(d)
    }, 0)
  }

  Button.prototype.toggle = function () {
    var $parent = this.$element.closest('[data-toggle="buttons-radio"]')

    $parent && $parent
      .find('.active')
      .removeClass('active')

    this.$element.toggleClass('active')
  }


 /* BUTTON PLUGIN DEFINITION
  * ======================== */

  var old = $.fn.button

  $.fn.button = function (option) {
    return this.each(function () {
      var $this = $(this)
        , data = $this.data('button')
        , options = typeof option == 'object' && option
      if (!data) $this.data('button', (data = new Button(this, options)))
      if (option == 'toggle') data.toggle()
      else if (option) data.setState(option)
    })
  }

  $.fn.button.defaults = {
    loadingText: 'loading...'
  }

  $.fn.button.Constructor = Button


 /* BUTTON NO CONFLICT
  * ================== */

  $.fn.button.noConflict = function () {
    $.fn.button = old
    return this
  }


 /* BUTTON DATA-API
  * =============== */

  $(document).on('click.button.data-api', '[data-toggle^=button]', function (e) {
    var $btn = $(e.target)
    if (!$btn.hasClass('btn')) $btn = $btn.closest('.btn')
    $btn.button('toggle')
  })

}(window.jQuery);/* ==========================================================
 * bootstrap-carousel.js v2.3.2
 * http://getbootstrap.com/2.3.2/javascript.html#carousel
 * ==========================================================
 * Copyright 2013 Twitter, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * ========================================================== */


!function ($) {

  "use strict"; // jshint ;_;


 /* CAROUSEL CLASS DEFINITION
  * ========================= */

  var Carousel = function (element, options) {
    this.$element = $(element)
    this.$indicators = this.$element.find('.carousel-indicators')
    this.options = options
    this.options.pause == 'hover' && this.$element
      .on('mouseenter', $.proxy(this.pause, this))
      .on('mouseleave', $.proxy(this.cycle, this))
  }

  Carousel.prototype = {

    cycle: function (e) {
      if (!e) this.paused = false
      if (this.interval) clearInterval(this.interval);
      this.options.interval
        && !this.paused
        && (this.interval = setInterval($.proxy(this.next, this), this.options.interval))
      return this
    }

  , getActiveIndex: function () {
      this.$active = this.$element.find('.item.active')
      this.$items = this.$active.parent().children()
      return this.$items.index(this.$active)
    }

  , to: function (pos) {
      var activeIndex = this.getActiveIndex()
        , that = this

      if (pos > (this.$items.length - 1) || pos < 0) return

      if (this.sliding) {
        return this.$element.one('slid', function () {
          that.to(pos)
        })
      }

      if (activeIndex == pos) {
        return this.pause().cycle()
      }

      return this.slide(pos > activeIndex ? 'next' : 'prev', $(this.$items[pos]))
    }

  , pause: function (e) {
      if (!e) this.paused = true
      if (this.$element.find('.next, .prev').length && $.support.transition.end) {
        this.$element.trigger($.support.transition.end)
        this.cycle(true)
      }
      clearInterval(this.interval)
      this.interval = null
      return this
    }

  , next: function () {
      if (this.sliding) return
      return this.slide('next')
    }

  , prev: function () {
      if (this.sliding) return
      return this.slide('prev')
    }

  , slide: function (type, next) {
      var $active = this.$element.find('.item.active')
        , $next = next || $active[type]()
        , isCycling = this.interval
        , direction = type == 'next' ? 'left' : 'right'
        , fallback  = type == 'next' ? 'first' : 'last'
        , that = this
        , e

      this.sliding = true

      isCycling && this.pause()

      $next = $next.length ? $next : this.$element.find('.item')[fallback]()

      e = $.Event('slide', {
        relatedTarget: $next[0]
      , direction: direction
      })

      if ($next.hasClass('active')) return

      if (this.$indicators.length) {
        this.$indicators.find('.active').removeClass('active')
        this.$element.one('slid', function () {
          var $nextIndicator = $(that.$indicators.children()[that.getActiveIndex()])
          $nextIndicator && $nextIndicator.addClass('active')
        })
      }

      if ($.support.transition && this.$element.hasClass('slide')) {
        this.$element.trigger(e)
        if (e.isDefaultPrevented()) return
        $next.addClass(type)
        $next[0].offsetWidth // force reflow
        $active.addClass(direction)
        $next.addClass(direction)
        this.$element.one($.support.transition.end, function () {
          $next.removeClass([type, direction].join(' ')).addClass('active')
          $active.removeClass(['active', direction].join(' '))
          that.sliding = false
          setTimeout(function () { that.$element.trigger('slid') }, 0)
        })
      } else {
        this.$element.trigger(e)
        if (e.isDefaultPrevented()) return
        $active.removeClass('active')
        $next.addClass('active')
        this.sliding = false
        this.$element.trigger('slid')
      }

      isCycling && this.cycle()

      return this
    }

  }


 /* CAROUSEL PLUGIN DEFINITION
  * ========================== */

  var old = $.fn.carousel

  $.fn.carousel = function (option) {
    return this.each(function () {
      var $this = $(this)
        , data = $this.data('carousel')
        , options = $.extend({}, $.fn.carousel.defaults, typeof option == 'object' && option)
        , action = typeof option == 'string' ? option : options.slide
      if (!data) $this.data('carousel', (data = new Carousel(this, options)))
      if (typeof option == 'number') data.to(option)
      else if (action) data[action]()
      else if (options.interval) data.pause().cycle()
    })
  }

  $.fn.carousel.defaults = {
    interval: 5000
  , pause: 'hover'
  }

  $.fn.carousel.Constructor = Carousel


 /* CAROUSEL NO CONFLICT
  * ==================== */

  $.fn.carousel.noConflict = function () {
    $.fn.carousel = old
    return this
  }

 /* CAROUSEL DATA-API
  * ================= */

  $(document).on('click.carousel.data-api', '[data-slide], [data-slide-to]', function (e) {
    var $this = $(this), href
      , $target = $($this.attr('data-target') || (href = $this.attr('href')) && href.replace(/.*(?=#[^\s]+$)/, '')) //strip for ie7
      , options = $.extend({}, $target.data(), $this.data())
      , slideIndex

    $target.carousel(options)

    if (slideIndex = $this.attr('data-slide-to')) {
      $target.data('carousel').pause().to(slideIndex).cycle()
    }

    e.preventDefault()
  })

}(window.jQuery);/* =============================================================
 * bootstrap-collapse.js v2.3.2
 * http://getbootstrap.com/2.3.2/javascript.html#collapse
 * =============================================================
 * Copyright 2013 Twitter, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * ============================================================ */


!function ($) {

  "use strict"; // jshint ;_;


 /* COLLAPSE PUBLIC CLASS DEFINITION
  * ================================ */

  var Collapse = function (element, options) {
    this.$element = $(element)
    this.options = $.extend({}, $.fn.collapse.defaults, options)

    if (this.options.parent) {
      this.$parent = $(this.options.parent)
    }

    this.options.toggle && this.toggle()
  }

  Collapse.prototype = {

    constructor: Collapse

  , dimension: function () {
      var hasWidth = this.$element.hasClass('width')
      return hasWidth ? 'width' : 'height'
    }

  , show: function () {
      var dimension
        , scroll
        , actives
        , hasData

      if (this.transitioning || this.$element.hasClass('in')) return

      dimension = this.dimension()
      scroll = $.camelCase(['scroll', dimension].join('-'))
      actives = this.$parent && this.$parent.find('> .accordion-group > .in')

      if (actives && actives.length) {
        hasData = actives.data('collapse')
        if (hasData && hasData.transitioning) return
        actives.collapse('hide')
        hasData || actives.data('collapse', null)
      }

      this.$element[dimension](0)
      this.transition('addClass', $.Event('show'), 'shown')
      $.support.transition && this.$element[dimension](this.$element[0][scroll])
    }

  , hide: function () {
      var dimension
      if (this.transitioning || !this.$element.hasClass('in')) return
      dimension = this.dimension()
      this.reset(this.$element[dimension]())
      this.transition('removeClass', $.Event('hide'), 'hidden')
      this.$element[dimension](0)
    }

  , reset: function (size) {
      var dimension = this.dimension()

      this.$element
        .removeClass('collapse')
        [dimension](size || 'auto')
        [0].offsetWidth

      this.$element[size !== null ? 'addClass' : 'removeClass']('collapse')

      return this
    }

  , transition: function (method, startEvent, completeEvent) {
      var that = this
        , complete = function () {
            if (startEvent.type == 'show') that.reset()
            that.transitioning = 0
            that.$element.trigger(completeEvent)
          }

      this.$element.trigger(startEvent)

      if (startEvent.isDefaultPrevented()) return

      this.transitioning = 1

      this.$element[method]('in')

      $.support.transition && this.$element.hasClass('collapse') ?
        this.$element.one($.support.transition.end, complete) :
        complete()
    }

  , toggle: function () {
      this[this.$element.hasClass('in') ? 'hide' : 'show']()
    }

  }


 /* COLLAPSE PLUGIN DEFINITION
  * ========================== */

  var old = $.fn.collapse

  $.fn.collapse = function (option) {
    return this.each(function () {
      var $this = $(this)
        , data = $this.data('collapse')
        , options = $.extend({}, $.fn.collapse.defaults, $this.data(), typeof option == 'object' && option)
      if (!data) $this.data('collapse', (data = new Collapse(this, options)))
      if (typeof option == 'string') data[option]()
    })
  }

  $.fn.collapse.defaults = {
    toggle: true
  }

  $.fn.collapse.Constructor = Collapse


 /* COLLAPSE NO CONFLICT
  * ==================== */

  $.fn.collapse.noConflict = function () {
    $.fn.collapse = old
    return this
  }


 /* COLLAPSE DATA-API
  * ================= */

  $(document).on('click.collapse.data-api', '[data-toggle=collapse]', function (e) {
    var $this = $(this), href
      , target = $this.attr('data-target')
        || e.preventDefault()
        || (href = $this.attr('href')) && href.replace(/.*(?=#[^\s]+$)/, '') //strip for ie7
      , option = $(target).data('collapse') ? 'toggle' : $this.data()
    $this[$(target).hasClass('in') ? 'addClass' : 'removeClass']('collapsed')
    $(target).collapse(option)
  })

}(window.jQuery);/* ============================================================
 * bootstrap-dropdown.js v2.3.2
 * http://getbootstrap.com/2.3.2/javascript.html#dropdowns
 * ============================================================
 * Copyright 2013 Twitter, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * ============================================================ */


!function ($) {

  "use strict"; // jshint ;_;


 /* DROPDOWN CLASS DEFINITION
  * ========================= */

  var toggle = '[data-toggle=dropdown]'
    , Dropdown = function (element) {
        var $el = $(element).on('click.dropdown.data-api', this.toggle)
        $('html').on('click.dropdown.data-api', function () {
          $el.parent().removeClass('open')
        })
      }

  Dropdown.prototype = {

    constructor: Dropdown

  , toggle: function (e) {
      var $this = $(this)
        , $parent
        , isActive

      if ($this.is('.disabled, :disabled')) return

      $parent = getParent($this)

      isActive = $parent.hasClass('open')

      clearMenus()

      if (!isActive) {
        if ('ontouchstart' in document.documentElement) {
          // if mobile we we use a backdrop because click events don't delegate
          $('<div class="dropdown-backdrop"/>').insertBefore($(this)).on('click', clearMenus)
        }
        $parent.toggleClass('open')
      }

      $this.focus()

      return false
    }

  , keydown: function (e) {
      var $this
        , $items
        , $active
        , $parent
        , isActive
        , index

      if (!/(38|40|27)/.test(e.keyCode)) return

      $this = $(this)

      e.preventDefault()
      e.stopPropagation()

      if ($this.is('.disabled, :disabled')) return

      $parent = getParent($this)

      isActive = $parent.hasClass('open')

      if (!isActive || (isActive && e.keyCode == 27)) {
        if (e.which == 27) $parent.find(toggle).focus()
        return $this.click()
      }

      $items = $('[role=menu] li:not(.divider):visible a', $parent)

      if (!$items.length) return

      index = $items.index($items.filter(':focus'))

      if (e.keyCode == 38 && index > 0) index--                                        // up
      if (e.keyCode == 40 && index < $items.length - 1) index++                        // down
      if (!~index) index = 0

      $items
        .eq(index)
        .focus()
    }

  }

  function clearMenus() {
    $('.dropdown-backdrop').remove()
    $(toggle).each(function () {
      getParent($(this)).removeClass('open')
    })
  }

  function getParent($this) {
    var selector = $this.attr('data-target')
      , $parent

    if (!selector) {
      selector = $this.attr('href')
      selector = selector && /#/.test(selector) && selector.replace(/.*(?=#[^\s]*$)/, '') //strip for ie7
    }

    $parent = selector && $(selector)

    if (!$parent || !$parent.length) $parent = $this.parent()

    return $parent
  }


  /* DROPDOWN PLUGIN DEFINITION
   * ========================== */

  var old = $.fn.dropdown

  $.fn.dropdown = function (option) {
    return this.each(function () {
      var $this = $(this)
        , data = $this.data('dropdown')
      if (!data) $this.data('dropdown', (data = new Dropdown(this)))
      if (typeof option == 'string') data[option].call($this)
    })
  }

  $.fn.dropdown.Constructor = Dropdown


 /* DROPDOWN NO CONFLICT
  * ==================== */

  $.fn.dropdown.noConflict = function () {
    $.fn.dropdown = old
    return this
  }


  /* APPLY TO STANDARD DROPDOWN ELEMENTS
   * =================================== */

  $(document)
    .on('click.dropdown.data-api', clearMenus)
    .on('click.dropdown.data-api', '.dropdown form', function (e) { e.stopPropagation() })
    .on('click.dropdown.data-api'  , toggle, Dropdown.prototype.toggle)
    .on('keydown.dropdown.data-api', toggle + ', [role=menu]' , Dropdown.prototype.keydown)

}(window.jQuery);
/* =========================================================
 * bootstrap-modal.js v2.3.2
 * http://getbootstrap.com/2.3.2/javascript.html#modals
 * =========================================================
 * Copyright 2013 Twitter, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * ========================================================= */


!function ($) {

  "use strict"; // jshint ;_;


 /* MODAL CLASS DEFINITION
  * ====================== */

  var Modal = function (element, options) {
    this.options = options
    this.$element = $(element)
      .delegate('[data-dismiss="modal"]', 'click.dismiss.modal', $.proxy(this.hide, this))
    this.options.remote && this.$element.find('.modal-body').load(this.options.remote)
  }

  Modal.prototype = {

      constructor: Modal

    , toggle: function () {
        return this[!this.isShown ? 'show' : 'hide']()
      }

    , show: function () {
        var that = this
          , e = $.Event('show')

        this.$element.trigger(e)

        if (this.isShown || e.isDefaultPrevented()) return

        this.isShown = true

        this.escape()

        this.backdrop(function () {
          var transition = $.support.transition && that.$element.hasClass('fade')

          if (!that.$element.parent().length) {
            that.$element.appendTo(document.body) //don't move modals dom position
          }

          that.$element.show()

          if (transition) {
            that.$element[0].offsetWidth // force reflow
          }

          that.$element
            .addClass('in')
            .attr('aria-hidden', false)

          that.enforceFocus()

          transition ?
            that.$element.one($.support.transition.end, function () { that.$element.focus().trigger('shown') }) :
            that.$element.focus().trigger('shown')

        })
      }

    , hide: function (e) {
        e && e.preventDefault()

        var that = this

        e = $.Event('hide')

        this.$element.trigger(e)

        if (!this.isShown || e.isDefaultPrevented()) return

        this.isShown = false

        this.escape()

        $(document).off('focusin.modal')

        this.$element
          .removeClass('in')
          .attr('aria-hidden', true)

        $.support.transition && this.$element.hasClass('fade') ?
          this.hideWithTransition() :
          this.hideModal()
      }

    , enforceFocus: function () {
        var that = this
        $(document).on('focusin.modal', function (e) {
          if (that.$element[0] !== e.target && !that.$element.has(e.target).length) {
            that.$element.focus()
          }
        })
      }

    , escape: function () {
        var that = this
        if (this.isShown && this.options.keyboard) {
          this.$element.on('keyup.dismiss.modal', function ( e ) {
            e.which == 27 && that.hide()
          })
        } else if (!this.isShown) {
          this.$element.off('keyup.dismiss.modal')
        }
      }

    , hideWithTransition: function () {
        var that = this
          , timeout = setTimeout(function () {
              that.$element.off($.support.transition.end)
              that.hideModal()
            }, 500)

        this.$element.one($.support.transition.end, function () {
          clearTimeout(timeout)
          that.hideModal()
        })
      }

    , hideModal: function () {
        var that = this
        this.$element.hide()
        this.backdrop(function () {
          that.removeBackdrop()
          that.$element.trigger('hidden')
        })
      }

    , removeBackdrop: function () {
        this.$backdrop && this.$backdrop.remove()
        this.$backdrop = null
      }

    , backdrop: function (callback) {
        var that = this
          , animate = this.$element.hasClass('fade') ? 'fade' : ''

        if (this.isShown && this.options.backdrop) {
          var doAnimate = $.support.transition && animate

          this.$backdrop = $('<div class="modal-backdrop ' + animate + '" />')
            .appendTo(document.body)

          this.$backdrop.click(
            this.options.backdrop == 'static' ?
              $.proxy(this.$element[0].focus, this.$element[0])
            : $.proxy(this.hide, this)
          )

          if (doAnimate) this.$backdrop[0].offsetWidth // force reflow

          this.$backdrop.addClass('in')

          if (!callback) return

          doAnimate ?
            this.$backdrop.one($.support.transition.end, callback) :
            callback()

        } else if (!this.isShown && this.$backdrop) {
          this.$backdrop.removeClass('in')

          $.support.transition && this.$element.hasClass('fade')?
            this.$backdrop.one($.support.transition.end, callback) :
            callback()

        } else if (callback) {
          callback()
        }
      }
  }


 /* MODAL PLUGIN DEFINITION
  * ======================= */

  var old = $.fn.modal

  $.fn.modal = function (option) {
    return this.each(function () {
      var $this = $(this)
        , data = $this.data('modal')
        , options = $.extend({}, $.fn.modal.defaults, $this.data(), typeof option == 'object' && option)
      if (!data) $this.data('modal', (data = new Modal(this, options)))
      if (typeof option == 'string') data[option]()
      else if (options.show) data.show()
    })
  }

  $.fn.modal.defaults = {
      backdrop: true
    , keyboard: true
    , show: true
  }

  $.fn.modal.Constructor = Modal


 /* MODAL NO CONFLICT
  * ================= */

  $.fn.modal.noConflict = function () {
    $.fn.modal = old
    return this
  }


 /* MODAL DATA-API
  * ============== */

  $(document).on('click.modal.data-api', '[data-toggle="modal"]', function (e) {
    var $this = $(this)
      , href = $this.attr('href')
      , $target = $($this.attr('data-target') || (href && href.replace(/.*(?=#[^\s]+$)/, ''))) //strip for ie7
      , option = $target.data('modal') ? 'toggle' : $.extend({ remote:!/#/.test(href) && href }, $target.data(), $this.data())

    e.preventDefault()

    $target
      .modal(option)
      .one('hide', function () {
        $this.focus()
      })
  })

}(window.jQuery);
/* ===========================================================
 * bootstrap-tooltip.js v2.3.2
 * http://getbootstrap.com/2.3.2/javascript.html#tooltips
 * Inspired by the original jQuery.tipsy by Jason Frame
 * ===========================================================
 * Copyright 2013 Twitter, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * ========================================================== */


!function ($) {

  "use strict"; // jshint ;_;


 /* TOOLTIP PUBLIC CLASS DEFINITION
  * =============================== */

  var Tooltip = function (element, options) {
    this.init('tooltip', element, options)
  }

  Tooltip.prototype = {

    constructor: Tooltip

  , init: function (type, element, options) {
      var eventIn
        , eventOut
        , triggers
        , trigger
        , i

      this.type = type
      this.$element = $(element)
      this.options = this.getOptions(options)
      this.enabled = true

      triggers = this.options.trigger.split(' ')

      for (i = triggers.length; i--;) {
        trigger = triggers[i]
        if (trigger == 'click') {
          this.$element.on('click.' + this.type, this.options.selector, $.proxy(this.toggle, this))
        } else if (trigger != 'manual') {
          eventIn = trigger == 'hover' ? 'mouseenter' : 'focus'
          eventOut = trigger == 'hover' ? 'mouseleave' : 'blur'
          this.$element.on(eventIn + '.' + this.type, this.options.selector, $.proxy(this.enter, this))
          this.$element.on(eventOut + '.' + this.type, this.options.selector, $.proxy(this.leave, this))
        }
      }

      this.options.selector ?
        (this._options = $.extend({}, this.options, { trigger: 'manual', selector: '' })) :
        this.fixTitle()
    }

  , getOptions: function (options) {
      options = $.extend({}, $.fn[this.type].defaults, this.$element.data(), options)

      if (options.delay && typeof options.delay == 'number') {
        options.delay = {
          show: options.delay
        , hide: options.delay
        }
      }

      return options
    }

  , enter: function (e) {
      var defaults = $.fn[this.type].defaults
        , options = {}
        , self

      this._options && $.each(this._options, function (key, value) {
        if (defaults[key] != value) options[key] = value
      }, this)

      self = $(e.currentTarget)[this.type](options).data(this.type)

      if (!self.options.delay || !self.options.delay.show) return self.show()

      clearTimeout(this.timeout)
      self.hoverState = 'in'
      this.timeout = setTimeout(function() {
        if (self.hoverState == 'in') self.show()
      }, self.options.delay.show)
    }

  , leave: function (e) {
      var self = $(e.currentTarget)[this.type](this._options).data(this.type)

      if (this.timeout) clearTimeout(this.timeout)
      if (!self.options.delay || !self.options.delay.hide) return self.hide()

      self.hoverState = 'out'
      this.timeout = setTimeout(function() {
        if (self.hoverState == 'out') self.hide()
      }, self.options.delay.hide)
    }

  , show: function () {
      var $tip
        , pos
        , actualWidth
        , actualHeight
        , placement
        , tp
        , e = $.Event('show')

      if (this.hasContent() && this.enabled) {
        this.$element.trigger(e)
        if (e.isDefaultPrevented()) return
        $tip = this.tip()
        this.setContent()

        if (this.options.animation) {
          $tip.addClass('fade')
        }

        placement = typeof this.options.placement == 'function' ?
          this.options.placement.call(this, $tip[0], this.$element[0]) :
          this.options.placement

        $tip
          .detach()
          .css({ top: 0, left: 0, display: 'block' })

        this.options.container ? $tip.appendTo(this.options.container) : $tip.insertAfter(this.$element)

        pos = this.getPosition()

        actualWidth = $tip[0].offsetWidth
        actualHeight = $tip[0].offsetHeight

        switch (placement) {
          case 'bottom':
            tp = {top: pos.top + pos.height, left: pos.left + pos.width / 2 - actualWidth / 2}
            break
          case 'top':
            tp = {top: pos.top - actualHeight, left: pos.left + pos.width / 2 - actualWidth / 2}
            break
          case 'left':
            tp = {top: pos.top + pos.height / 2 - actualHeight / 2, left: pos.left - actualWidth}
            break
          case 'right':
            tp = {top: pos.top + pos.height / 2 - actualHeight / 2, left: pos.left + pos.width}
            break
        }

        this.applyPlacement(tp, placement)
        this.$element.trigger('shown')
      }
    }

  , applyPlacement: function(offset, placement){
      var $tip = this.tip()
        , width = $tip[0].offsetWidth
        , height = $tip[0].offsetHeight
        , actualWidth
        , actualHeight
        , delta
        , replace

      $tip
        .offset(offset)
        .addClass(placement)
        .addClass('in')

      actualWidth = $tip[0].offsetWidth
      actualHeight = $tip[0].offsetHeight

      if (placement == 'top' && actualHeight != height) {
        offset.top = offset.top + height - actualHeight
        replace = true
      }

      if (placement == 'bottom' || placement == 'top') {
        delta = 0

        if (offset.left < 0){
          delta = offset.left * -2
          offset.left = 0
          $tip.offset(offset)
          actualWidth = $tip[0].offsetWidth
          actualHeight = $tip[0].offsetHeight
        }

        this.replaceArrow(delta - width + actualWidth, actualWidth, 'left')
      } else {
        this.replaceArrow(actualHeight - height, actualHeight, 'top')
      }

      if (replace) $tip.offset(offset)
    }

  , replaceArrow: function(delta, dimension, position){
      this
        .arrow()
        .css(position, delta ? (50 * (1 - delta / dimension) + "%") : '')
    }

  , setContent: function () {
      var $tip = this.tip()
        , title = this.getTitle()

      $tip.find('.tooltip-inner')[this.options.html ? 'html' : 'text'](title)
      $tip.removeClass('fade in top bottom left right')
    }

  , hide: function () {
      var that = this
        , $tip = this.tip()
        , e = $.Event('hide')

      this.$element.trigger(e)
      if (e.isDefaultPrevented()) return

      $tip.removeClass('in')

      function removeWithAnimation() {
        var timeout = setTimeout(function () {
          $tip.off($.support.transition.end).detach()
        }, 500)

        $tip.one($.support.transition.end, function () {
          clearTimeout(timeout)
          $tip.detach()
        })
      }

      $.support.transition && this.$tip.hasClass('fade') ?
        removeWithAnimation() :
        $tip.detach()

      this.$element.trigger('hidden')

      return this
    }

  , fixTitle: function () {
      var $e = this.$element
      if ($e.attr('title') || typeof($e.attr('data-original-title')) != 'string') {
        $e.attr('data-original-title', $e.attr('title') || '').attr('title', '')
      }
    }

  , hasContent: function () {
      return this.getTitle()
    }

  , getPosition: function () {
      var el = this.$element[0]
      return $.extend({}, (typeof el.getBoundingClientRect == 'function') ? el.getBoundingClientRect() : {
        width: el.offsetWidth
      , height: el.offsetHeight
      }, this.$element.offset())
    }

  , getTitle: function () {
      var title
        , $e = this.$element
        , o = this.options

      title = $e.attr('data-original-title')
        || (typeof o.title == 'function' ? o.title.call($e[0]) :  o.title)

      return title
    }

  , tip: function () {
      return this.$tip = this.$tip || $(this.options.template)
    }

  , arrow: function(){
      return this.$arrow = this.$arrow || this.tip().find(".tooltip-arrow")
    }

  , validate: function () {
      if (!this.$element[0].parentNode) {
        this.hide()
        this.$element = null
        this.options = null
      }
    }

  , enable: function () {
      this.enabled = true
    }

  , disable: function () {
      this.enabled = false
    }

  , toggleEnabled: function () {
      this.enabled = !this.enabled
    }

  , toggle: function (e) {
      var self = e ? $(e.currentTarget)[this.type](this._options).data(this.type) : this
      self.tip().hasClass('in') ? self.hide() : self.show()
    }

  , destroy: function () {
      this.hide().$element.off('.' + this.type).removeData(this.type)
    }

  }


 /* TOOLTIP PLUGIN DEFINITION
  * ========================= */

  var old = $.fn.tooltip

  $.fn.tooltip = function ( option ) {
    return this.each(function () {
      var $this = $(this)
        , data = $this.data('tooltip')
        , options = typeof option == 'object' && option
      if (!data) $this.data('tooltip', (data = new Tooltip(this, options)))
      if (typeof option == 'string') data[option]()
    })
  }

  $.fn.tooltip.Constructor = Tooltip

  $.fn.tooltip.defaults = {
    animation: true
  , placement: 'top'
  , selector: false
  , template: '<div class="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>'
  , trigger: 'hover focus'
  , title: ''
  , delay: 0
  , html: false
  , container: false
  }


 /* TOOLTIP NO CONFLICT
  * =================== */

  $.fn.tooltip.noConflict = function () {
    $.fn.tooltip = old
    return this
  }

}(window.jQuery);
/* ===========================================================
 * bootstrap-popover.js v2.3.2
 * http://getbootstrap.com/2.3.2/javascript.html#popovers
 * ===========================================================
 * Copyright 2013 Twitter, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =========================================================== */


!function ($) {

  "use strict"; // jshint ;_;


 /* POPOVER PUBLIC CLASS DEFINITION
  * =============================== */

  var Popover = function (element, options) {
    this.init('popover', element, options)
  }


  /* NOTE: POPOVER EXTENDS BOOTSTRAP-TOOLTIP.js
     ========================================== */

  Popover.prototype = $.extend({}, $.fn.tooltip.Constructor.prototype, {

    constructor: Popover

  , setContent: function () {
      var $tip = this.tip()
        , title = this.getTitle()
        , content = this.getContent()

      $tip.find('.popover-title')[this.options.html ? 'html' : 'text'](title)
      $tip.find('.popover-content')[this.options.html ? 'html' : 'text'](content)

      $tip.removeClass('fade top bottom left right in')
    }

  , hasContent: function () {
      return this.getTitle() || this.getContent()
    }

  , getContent: function () {
      var content
        , $e = this.$element
        , o = this.options

      content = (typeof o.content == 'function' ? o.content.call($e[0]) :  o.content)
        || $e.attr('data-content')

      return content
    }

  , tip: function () {
      if (!this.$tip) {
        this.$tip = $(this.options.template)
      }
      return this.$tip
    }

  , destroy: function () {
      this.hide().$element.off('.' + this.type).removeData(this.type)
    }

  })


 /* POPOVER PLUGIN DEFINITION
  * ======================= */

  var old = $.fn.popover

  $.fn.popover = function (option) {
    return this.each(function () {
      var $this = $(this)
        , data = $this.data('popover')
        , options = typeof option == 'object' && option
      if (!data) $this.data('popover', (data = new Popover(this, options)))
      if (typeof option == 'string') data[option]()
    })
  }

  $.fn.popover.Constructor = Popover

  $.fn.popover.defaults = $.extend({} , $.fn.tooltip.defaults, {
    placement: 'right'
  , trigger: 'click'
  , content: ''
  , template: '<div class="popover"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'
  })


 /* POPOVER NO CONFLICT
  * =================== */

  $.fn.popover.noConflict = function () {
    $.fn.popover = old
    return this
  }

}(window.jQuery);
/* =============================================================
 * bootstrap-scrollspy.js v2.3.2
 * http://getbootstrap.com/2.3.2/javascript.html#scrollspy
 * =============================================================
 * Copyright 2013 Twitter, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * ============================================================== */


!function ($) {

  "use strict"; // jshint ;_;


 /* SCROLLSPY CLASS DEFINITION
  * ========================== */

  function ScrollSpy(element, options) {
    var process = $.proxy(this.process, this)
      , $element = $(element).is('body') ? $(window) : $(element)
      , href
    this.options = $.extend({}, $.fn.scrollspy.defaults, options)
    this.$scrollElement = $element.on('scroll.scroll-spy.data-api', process)
    this.selector = (this.options.target
      || ((href = $(element).attr('href')) && href.replace(/.*(?=#[^\s]+$)/, '')) //strip for ie7
      || '') + ' .nav li > a'
    this.$body = $('body')
    this.refresh()
    this.process()
  }

  ScrollSpy.prototype = {

      constructor: ScrollSpy

    , refresh: function () {
        var self = this
          , $targets

        this.offsets = $([])
        this.targets = $([])

        $targets = this.$body
          .find(this.selector)
          .map(function () {
            var $el = $(this)
              , href = $el.data('target') || $el.attr('href')
              , $href = /^#\w/.test(href) && $(href)
            return ( $href
              && $href.length
              && [[ $href.position().top + (!$.isWindow(self.$scrollElement.get(0)) && self.$scrollElement.scrollTop()), href ]] ) || null
          })
          .sort(function (a, b) { return a[0] - b[0] })
          .each(function () {
            self.offsets.push(this[0])
            self.targets.push(this[1])
          })
      }

    , process: function () {
        var scrollTop = this.$scrollElement.scrollTop() + this.options.offset
          , scrollHeight = this.$scrollElement[0].scrollHeight || this.$body[0].scrollHeight
          , maxScroll = scrollHeight - this.$scrollElement.height()
          , offsets = this.offsets
          , targets = this.targets
          , activeTarget = this.activeTarget
          , i

        if (scrollTop >= maxScroll) {
          return activeTarget != (i = targets.last()[0])
            && this.activate ( i )
        }

        for (i = offsets.length; i--;) {
          activeTarget != targets[i]
            && scrollTop >= offsets[i]
            && (!offsets[i + 1] || scrollTop <= offsets[i + 1])
            && this.activate( targets[i] )
        }
      }

    , activate: function (target) {
        var active
          , selector

        this.activeTarget = target

        $(this.selector)
          .parent('.active')
          .removeClass('active')

        selector = this.selector
          + '[data-target="' + target + '"],'
          + this.selector + '[href="' + target + '"]'

        active = $(selector)
          .parent('li')
          .addClass('active')

        if (active.parent('.dropdown-menu').length)  {
          active = active.closest('li.dropdown').addClass('active')
        }

        active.trigger('activate')
      }

  }


 /* SCROLLSPY PLUGIN DEFINITION
  * =========================== */

  var old = $.fn.scrollspy

  $.fn.scrollspy = function (option) {
    return this.each(function () {
      var $this = $(this)
        , data = $this.data('scrollspy')
        , options = typeof option == 'object' && option
      if (!data) $this.data('scrollspy', (data = new ScrollSpy(this, options)))
      if (typeof option == 'string') data[option]()
    })
  }

  $.fn.scrollspy.Constructor = ScrollSpy

  $.fn.scrollspy.defaults = {
    offset: 10
  }


 /* SCROLLSPY NO CONFLICT
  * ===================== */

  $.fn.scrollspy.noConflict = function () {
    $.fn.scrollspy = old
    return this
  }


 /* SCROLLSPY DATA-API
  * ================== */

  $(window).on('load', function () {
    $('[data-spy="scroll"]').each(function () {
      var $spy = $(this)
      $spy.scrollspy($spy.data())
    })
  })

}(window.jQuery);/* ========================================================
 * bootstrap-tab.js v2.3.2
 * http://getbootstrap.com/2.3.2/javascript.html#tabs
 * ========================================================
 * Copyright 2013 Twitter, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * ======================================================== */


!function ($) {

  "use strict"; // jshint ;_;


 /* TAB CLASS DEFINITION
  * ==================== */

  var Tab = function (element) {
    this.element = $(element)
  }

  Tab.prototype = {

    constructor: Tab

  , show: function () {
      var $this = this.element
        , $ul = $this.closest('ul:not(.dropdown-menu)')
        , selector = $this.attr('data-target')
        , previous
        , $target
        , e

      if (!selector) {
        selector = $this.attr('href')
        selector = selector && selector.replace(/.*(?=#[^\s]*$)/, '') //strip for ie7
      }

      if ( $this.parent('li').hasClass('active') ) return

      previous = $ul.find('.active:last a')[0]

      e = $.Event('show', {
        relatedTarget: previous
      })

      $this.trigger(e)

      if (e.isDefaultPrevented()) return

      $target = $(selector)

      this.activate($this.parent('li'), $ul)
      this.activate($target, $target.parent(), function () {
        $this.trigger({
          type: 'shown'
        , relatedTarget: previous
        })
      })
    }

  , activate: function ( element, container, callback) {
      var $active = container.find('> .active')
        , transition = callback
            && $.support.transition
            && $active.hasClass('fade')

      function next() {
        $active
          .removeClass('active')
          .find('> .dropdown-menu > .active')
          .removeClass('active')

        element.addClass('active')

        if (transition) {
          element[0].offsetWidth // reflow for transition
          element.addClass('in')
        } else {
          element.removeClass('fade')
        }

        if ( element.parent('.dropdown-menu') ) {
          element.closest('li.dropdown').addClass('active')
        }

        callback && callback()
      }

      transition ?
        $active.one($.support.transition.end, next) :
        next()

      $active.removeClass('in')
    }
  }


 /* TAB PLUGIN DEFINITION
  * ===================== */

  var old = $.fn.tab

  $.fn.tab = function ( option ) {
    return this.each(function () {
      var $this = $(this)
        , data = $this.data('tab')
      if (!data) $this.data('tab', (data = new Tab(this)))
      if (typeof option == 'string') data[option]()
    })
  }

  $.fn.tab.Constructor = Tab


 /* TAB NO CONFLICT
  * =============== */

  $.fn.tab.noConflict = function () {
    $.fn.tab = old
    return this
  }


 /* TAB DATA-API
  * ============ */

  $(document).on('click.tab.data-api', '[data-toggle="tab"], [data-toggle="pill"]', function (e) {
    e.preventDefault()
    $(this).tab('show')
  })

}(window.jQuery);/* =============================================================
 * bootstrap-typeahead.js v2.3.2
 * http://getbootstrap.com/2.3.2/javascript.html#typeahead
 * =============================================================
 * Copyright 2013 Twitter, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * ============================================================ */


!function($){

  "use strict"; // jshint ;_;


 /* TYPEAHEAD PUBLIC CLASS DEFINITION
  * ================================= */

  var Typeahead = function (element, options) {
    this.$element = $(element)
    this.options = $.extend({}, $.fn.typeahead.defaults, options)
    this.matcher = this.options.matcher || this.matcher
    this.sorter = this.options.sorter || this.sorter
    this.highlighter = this.options.highlighter || this.highlighter
    this.updater = this.options.updater || this.updater
    this.source = this.options.source
    this.$menu = $(this.options.menu)
    this.shown = false
    this.listen()
  }

  Typeahead.prototype = {

    constructor: Typeahead

  , select: function () {
      var val = this.$menu.find('.active').attr('data-value')
      this.$element
        .val(this.updater(val))
        .change()
      return this.hide()
    }

  , updater: function (item) {
      return item
    }

  , show: function () {
      var pos = $.extend({}, this.$element.position(), {
        height: this.$element[0].offsetHeight
      })

      this.$menu
        .insertAfter(this.$element)
        .css({
          top: pos.top + pos.height
        , left: pos.left
        })
        .show()

      this.shown = true
      return this
    }

  , hide: function () {
      this.$menu.hide()
      this.shown = false
      return this
    }

  , lookup: function (event) {
      var items

      this.query = this.$element.val()

      if (!this.query || this.query.length < this.options.minLength) {
        return this.shown ? this.hide() : this
      }

      items = $.isFunction(this.source) ? this.source(this.query, $.proxy(this.process, this)) : this.source

      return items ? this.process(items) : this
    }

  , process: function (items) {
      var that = this

      items = $.grep(items, function (item) {
        return that.matcher(item)
      })

      items = this.sorter(items)

      if (!items.length) {
        return this.shown ? this.hide() : this
      }

      return this.render(items.slice(0, this.options.items)).show()
    }

  , matcher: function (item) {
      return ~item.toLowerCase().indexOf(this.query.toLowerCase())
    }

  , sorter: function (items) {
      var beginswith = []
        , caseSensitive = []
        , caseInsensitive = []
        , item

      while (item = items.shift()) {
        if (!item.toLowerCase().indexOf(this.query.toLowerCase())) beginswith.push(item)
        else if (~item.indexOf(this.query)) caseSensitive.push(item)
        else caseInsensitive.push(item)
      }

      return beginswith.concat(caseSensitive, caseInsensitive)
    }

  , highlighter: function (item) {
      var query = this.query.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, '\\$&')
      return item.replace(new RegExp('(' + query + ')', 'ig'), function ($1, match) {
        return '<strong>' + match + '</strong>'
      })
    }

  , render: function (items) {
      var that = this

      items = $(items).map(function (i, item) {
        i = $(that.options.item).attr('data-value', item)
        i.find('a').html(that.highlighter(item))
        return i[0]
      })

      items.first().addClass('active')
      this.$menu.html(items)
      return this
    }

  , next: function (event) {
      var active = this.$menu.find('.active').removeClass('active')
        , next = active.next()

      if (!next.length) {
        next = $(this.$menu.find('li')[0])
      }

      next.addClass('active')
    }

  , prev: function (event) {
      var active = this.$menu.find('.active').removeClass('active')
        , prev = active.prev()

      if (!prev.length) {
        prev = this.$menu.find('li').last()
      }

      prev.addClass('active')
    }

  , listen: function () {
      this.$element
        .on('focus',    $.proxy(this.focus, this))
        .on('blur',     $.proxy(this.blur, this))
        .on('keypress', $.proxy(this.keypress, this))
        .on('keyup',    $.proxy(this.keyup, this))

      if (this.eventSupported('keydown')) {
        this.$element.on('keydown', $.proxy(this.keydown, this))
      }

      this.$menu
        .on('click', $.proxy(this.click, this))
        .on('mouseenter', 'li', $.proxy(this.mouseenter, this))
        .on('mouseleave', 'li', $.proxy(this.mouseleave, this))
    }

  , eventSupported: function(eventName) {
      var isSupported = eventName in this.$element
      if (!isSupported) {
        this.$element.setAttribute(eventName, 'return;')
        isSupported = typeof this.$element[eventName] === 'function'
      }
      return isSupported
    }

  , move: function (e) {
      if (!this.shown) return

      switch(e.keyCode) {
        case 9: // tab
        case 13: // enter
        case 27: // escape
          e.preventDefault()
          break

        case 38: // up arrow
          e.preventDefault()
          this.prev()
          break

        case 40: // down arrow
          e.preventDefault()
          this.next()
          break
      }

      e.stopPropagation()
    }

  , keydown: function (e) {
      this.suppressKeyPressRepeat = ~$.inArray(e.keyCode, [40,38,9,13,27])
      this.move(e)
    }

  , keypress: function (e) {
      if (this.suppressKeyPressRepeat) return
      this.move(e)
    }

  , keyup: function (e) {
      switch(e.keyCode) {
        case 40: // down arrow
        case 38: // up arrow
        case 16: // shift
        case 17: // ctrl
        case 18: // alt
          break

        case 9: // tab
        case 13: // enter
          if (!this.shown) return
          this.select()
          break

        case 27: // escape
          if (!this.shown) return
          this.hide()
          break

        default:
          this.lookup()
      }

      e.stopPropagation()
      e.preventDefault()
  }

  , focus: function (e) {
      this.focused = true
    }

  , blur: function (e) {
      this.focused = false
      if (!this.mousedover && this.shown) this.hide()
    }

  , click: function (e) {
      e.stopPropagation()
      e.preventDefault()
      this.select()
      this.$element.focus()
    }

  , mouseenter: function (e) {
      this.mousedover = true
      this.$menu.find('.active').removeClass('active')
      $(e.currentTarget).addClass('active')
    }

  , mouseleave: function (e) {
      this.mousedover = false
      if (!this.focused && this.shown) this.hide()
    }

  }


  /* TYPEAHEAD PLUGIN DEFINITION
   * =========================== */

  var old = $.fn.typeahead

  $.fn.typeahead = function (option) {
    return this.each(function () {
      var $this = $(this)
        , data = $this.data('typeahead')
        , options = typeof option == 'object' && option
      if (!data) $this.data('typeahead', (data = new Typeahead(this, options)))
      if (typeof option == 'string') data[option]()
    })
  }

  $.fn.typeahead.defaults = {
    source: []
  , items: 8
  , menu: '<ul class="typeahead dropdown-menu"></ul>'
  , item: '<li><a href="#"></a></li>'
  , minLength: 1
  }

  $.fn.typeahead.Constructor = Typeahead


 /* TYPEAHEAD NO CONFLICT
  * =================== */

  $.fn.typeahead.noConflict = function () {
    $.fn.typeahead = old
    return this
  }


 /* TYPEAHEAD DATA-API
  * ================== */

  $(document).on('focus.typeahead.data-api', '[data-provide="typeahead"]', function (e) {
    var $this = $(this)
    if ($this.data('typeahead')) return
    $this.typeahead($this.data())
  })

}(window.jQuery);
/* ==========================================================
 * bootstrap-affix.js v2.3.2
 * http://getbootstrap.com/2.3.2/javascript.html#affix
 * ==========================================================
 * Copyright 2013 Twitter, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * ========================================================== */


!function ($) {

  "use strict"; // jshint ;_;


 /* AFFIX CLASS DEFINITION
  * ====================== */

  var Affix = function (element, options) {
    this.options = $.extend({}, $.fn.affix.defaults, options)
    this.$window = $(window)
      .on('scroll.affix.data-api', $.proxy(this.checkPosition, this))
      .on('click.affix.data-api',  $.proxy(function () { setTimeout($.proxy(this.checkPosition, this), 1) }, this))
    this.$element = $(element)
    this.checkPosition()
  }

  Affix.prototype.checkPosition = function () {
    if (!this.$element.is(':visible')) return

    var scrollHeight = $(document).height()
      , scrollTop = this.$window.scrollTop()
      , position = this.$element.offset()
      , offset = this.options.offset
      , offsetBottom = offset.bottom
      , offsetTop = offset.top
      , reset = 'affix affix-top affix-bottom'
      , affix

    if (typeof offset != 'object') offsetBottom = offsetTop = offset
    if (typeof offsetTop == 'function') offsetTop = offset.top()
    if (typeof offsetBottom == 'function') offsetBottom = offset.bottom()

    affix = this.unpin != null && (scrollTop + this.unpin <= position.top) ?
      false    : offsetBottom != null && (position.top + this.$element.height() >= scrollHeight - offsetBottom) ?
      'bottom' : offsetTop != null && scrollTop <= offsetTop ?
      'top'    : false

    if (this.affixed === affix) return

    this.affixed = affix
    this.unpin = affix == 'bottom' ? position.top - scrollTop : null

    this.$element.removeClass(reset).addClass('affix' + (affix ? '-' + affix : ''))
  }


 /* AFFIX PLUGIN DEFINITION
  * ======================= */

  var old = $.fn.affix

  $.fn.affix = function (option) {
    return this.each(function () {
      var $this = $(this)
        , data = $this.data('affix')
        , options = typeof option == 'object' && option
      if (!data) $this.data('affix', (data = new Affix(this, options)))
      if (typeof option == 'string') data[option]()
    })
  }

  $.fn.affix.Constructor = Affix

  $.fn.affix.defaults = {
    offset: 0
  }


 /* AFFIX NO CONFLICT
  * ================= */

  $.fn.affix.noConflict = function () {
    $.fn.affix = old
    return this
  }


 /* AFFIX DATA-API
  * ============== */

  $(window).on('load', function () {
    $('[data-spy="affix"]').each(function () {
      var $spy = $(this)
        , data = $spy.data()

      data.offset = data.offset || {}

      data.offsetBottom && (data.offset.bottom = data.offsetBottom)
      data.offsetTop && (data.offset.top = data.offsetTop)

      $spy.affix(data)
    })
  })


}(window.jQuery);
/**
 * @author GeekTantra
 * @date 20 September 2009
 * http://www.geektantra.com/2009/09/jquery-live-form-validation/
 * Modified by dsmith: added support for twitter boostrap
 * Modified by Michael Westrich: added real live validation support
 */
(function($) {
    var ValidationErrors = new Array();
    $.fn.validate = function(options){
        options = $.extend({
            expression: "return true;",
            message: "",
            error_message_class: "help-inline",
            error_container_class: "control-group",
            live: true
        }, options);
        var SelfID = $(this).attr("id");
        var unix_time = new Date();
        unix_time = parseInt(unix_time.getTime() / 1000);
        if (!$(this).parents('form:first').attr("id")) {
            $(this).parents('form:first').attr("id", "Form_" + unix_time);
        }
        var FormID = $(this).parents('form:first').attr("id");
        if (!((typeof(ValidationErrors[FormID]) == 'object') && (ValidationErrors[FormID] instanceof Array))) {
            ValidationErrors[FormID] = new Array();
        }
        if (options['live']) {
            if ($(this).find('input').length > 0) {
            	if (validate_field("#" + SelfID, options)) {
                    if (options.callback_success) {
                        options.callback_success(this);
                    }
                } else {
                    if (options.callback_failure) { 
                        options.callback_failure(this);
                    }
                }
                $(this).find('input').bind('keyup blur', function() {
                    if (validate_field("#" + SelfID, options)) {
                        if (options.callback_success) {
                            options.callback_success(this);
                        }
                    } else {
                        if (options.callback_failure) { 
                            options.callback_failure(this);
                        }
                    }
                });
            } else {
            	validate_field(this);
                $(this).bind('keyup blur', function() {
                    validate_field(this);
                });
            }
        }
        $(this).parents("form").submit(function() {

            if (validate_field('#' + SelfID)) {
				
				$("#" + SelfID + options['error_message_class']).remove();
				if ($(id).next("." + options['error_message_class']).length == 0) {
					$('.' + options['error_container_class']).removeClass('error');
				}
			
                return true;
			} else {
                return false;
			}
        });
        function validate_field(id) {
            var self = $(id).attr("id");
            var expression = 'function Validate(){' + options['expression'].replace(/VAL/g, '$(\'#' + self + '\').val()') + '} Validate()';
            var validation_state = eval(expression);
            if (!validation_state) {
                if ($(id).next("#" + self + options['error_message_class']).length == 0) {
                    $(id).after('<span class="' + options['error_message_class'] + '" id="' + self + options['error_message_class'] + '">' + options['message'] + '</span>');
                    $($(id).parents("div .control-group")[0]).addClass("error");
					//$(id).parents("div .control-group").addClass("error");
                }
                if (ValidationErrors[FormID].join("|").search(id) == -1) {
                    ValidationErrors[FormID].push(id);
                }
                return false;
            } else {
                for (var i = 0; i < ValidationErrors[FormID].length; i++) {
                    if (ValidationErrors[FormID][i] == id) { 
                        ValidationErrors[FormID].splice(i, 1);
                    }
                }
	            $("#" + self + options['error_message_class']).remove();
                if ($(id).next("." + options['error_message_class']).length == 0) {
                	$($(id).parents("." + options['error_container_class'])[0]).removeClass('error');
                	//$(id).parents("." + options['error_container_class']).removeClass('error');
                }
                return true;
            }
        }
    };
    $.fn.validated = function(callback) {
        $(this).each(function(){
            if (this.tagName == "FORM") {
                $(this).submit(function() {
                    if (ValidationErrors[$(this).attr("id")].length == 0) {
                        callback();
                    }
					return false;
                });
            }
        });
    };
})($);
/**
 * @author GeekTantra
 * @date 24 September 2009
 */
/*
 * This functions checks where an entered date is valid or not.
 * It also works for leap year feb 29ths.
 * @year: The Year entered in a date
 * @month: The Month entered in a date
 * @day: The Day entered in a date
 */
function isValidDate(year, month, day){
    var date = new Date(year, (month - 1), day);
    var DateYear = date.getFullYear();
    var DateMonth = date.getMonth();
    var DateDay = date.getDate();
    if (DateYear == year && DateMonth == (month - 1) && DateDay == day) 
        return true;
    else 
        return false;
}
/*
 * This function checks if there is at-least one element checked in a group of check-boxes or radio buttons.
 * @id: The ID of the check-box or radio-button group
 */
function isChecked(id){
    var ReturnVal = false;
    $("#" + id).find('input[type="radio"]').each(function(){
        if ($(this).is(":checked")) 
            ReturnVal = true;
    });
    $("#" + id).find('input[type="checkbox"]').each(function(){
        if ($(this).is(":checked")) 
            ReturnVal = true;
    });
    return ReturnVal;
}
/**
 * This plugin is used to fix elements to the top of the page, if the element
 * would have been scrolled out of view, vertically; however, it does allow the
 * element to continue to move left or right with the horizontal scroll.
 * 
 * Given an option marginTop, the element will stop moving vertically upward
 * once the vertical scroll has reached the target position; but, the element
 * will still move horizontally as the page is scrolled left or right. Once the
 * page has been scrolled back down passed the target position, the element will
 * be restored to its original position on the page.
 * 
 * This plugin has been tested in Firefox 3+, Google Chrome 10+, Safari 5+,
 * and Internet Explorer 8/9.
 */
(function($) {
    $.ScrollToFixed = function(el, options) {
        // To avoid scope issues, use 'base' instead of 'this' to reference this
        // class from internal events and functions.
        var base = this;

        // Access to jQuery and DOM versions of element.
        base.$el = $(el);
        base.el = el;

        // Add a reverse reference to the DOM object.
        base.$el.data("ScrollToFixed", base);

        // A flag so we know if the scroll has been reset.
        var isReset = false;

        // The element that was given to us to fix if scrolled above the top of
        // the page.
        var target = base.$el;

        var position;

        // The offset top of the element when resetScroll was called. This is
        // used to determine if we have scrolled past the top of the element.
        var offsetTop = 0;

        // The offset left of the element when resetScroll was called. This is
        // used to move the element left or right relative to the horizontal
        // scroll.
        var offsetLeft = 0;
        var originalOffsetLeft = -1;

        // This last offset used to move the element horizontally. This is used
        // to determine if we need to move the element because we would not want
        // to do that for no reason.
        var lastOffsetLeft = -1;

        // This is the element used to fill the void left by the target element
        // when it goes fixed; otherwise, everything below it moves up the page.
        var spacer = null;

        var spacerClass;

        // Capture the original offsets for the target element. This needs to be
        // called whenever the page size changes or when the page is first
        // scrolled. For some reason, calling this before the page is first
        // scrolled causes the element to become fixed too late.
        function resetScroll() {
            // Set the element to it original positioning.
            setUnfixed();

            // Reset the last offset used to determine if the page has moved
            // horizontally.
            lastOffsetLeft = -1;

            // Capture the offset top of the target element.
            offsetTop = target.offset().top;

            // Capture the offset left of the target element.
            offsetLeft = target.offset().left + (target.offset().left - target.position().left);
            if (originalOffsetLeft == -1) {
                originalOffsetLeft = offsetLeft;
            }

            position = target.css('position');

            // Set that this has been called at least once.
            isReset = true;
            
            if (base.options.bottom != -1) {
                setFixed();
            }
        }

        // Returns whether the target element is fixed or not.
        function isFixed() {
            return position === 'fixed';
        }

        // Returns whether the target element is absolute or not.
        function isAbsolute() {
            return position === 'absolute';
        }

        function isUnfixed() {
            return !(isFixed() || isAbsolute());
        }

        // Sets the target element to fixed. Also, sets the spacer to fill the
        // void left by the target element.
        function setFixed() {
            // Only fix the target element and the spacer if we need to.
            if (!isFixed()) {
                // Set the spacer to fill the height and width of the target
                // element, then display it.
                spacer.css({
                    'display' : target.css('display'),
                    'width' : target.outerWidth(true),
                    'height' : target.outerHeight(true),
                    'float' : target.css('float')
                });

                // Set the target element to fixed and set its width so it does
                // not fill the rest of the page horizontally. Also, set its top
                // to the margin top specified in the options.
                target.css({
                    'width' : target.width(),
                    'position' : 'fixed',
                    'top' : base.options.bottom == -1?getMarginTop():'',
                    'bottom' : base.options.bottom == -1?'':base.options.bottom
                });

                position = 'fixed';
            }
        }

        function setAbsolute() {
            target.css({
                'width' : target.width(),
                'position' : 'absolute',
                'top' : base.options.limit,
                'left' : offsetLeft
            });

            position = 'absolute';
        }

        // Sets the target element back to unfixed. Also, hides the spacer.
        function setUnfixed() {
            // Only unfix the target element and the spacer if we need to.
                lastOffsetLeft = -1;

                // Hide the spacer now that the target element will fill the
                // space.
                spacer.css('display', 'none');

                // Remove the style attributes that were added to the target.
                // This will reverse the target back to the its original style.
                target.css({
                    'width' : '',
                    'position' : '',
                    'left' : '',
                    'top' : ''
                });

                position = null;
        }

        // Moves the target element left or right relative to the horizontal
        // scroll position.
        function setLeft(x) {
            // Only if the scroll is not what it was last time we did this.
            if (x != lastOffsetLeft) {
                // Move the target element horizontally relative to its original
                // horizontal position.
                target.css('left', offsetLeft - x);

                // Hold the last horizontal position set.
                lastOffsetLeft = x;
            }
        }

        function getMarginTop() {
            return base.options.marginTop;
        }

        // Checks to see if we need to do something based on new scroll position
        // of the page.
        function checkScroll() {
            var wasReset = isReset;

            // If resetScroll has not yet been called, call it. This only
            // happens once.
            if (!isReset) {
                resetScroll();
            }

            // Grab the current horizontal scroll position.
            var x = $(window).scrollLeft();

            // Grab the current vertical scroll position.
            var y = $(window).scrollTop();

            // If the vertical scroll position, plus the optional margin, would
            // put the target element at the specified limit, set the target
            // element to absolute.
            
            /* 
             * heightOffset is a CUSTOMIZATION of the plugin. Keep that in mind when updating it - lci
             */
            if (base.options.heightOffset && ($(window).height() < (base.options.heightOffset + target.height()))) {
                if (!isUnfixed() || !wasReset) {
                    postPosition();
                    target.trigger('preUnfixed');
                    setUnfixed();
                    target.trigger("unfixed");
                }
            } else if (base.options.bottom == -1) {
                // If the vertical scroll position, plus the optional margin, would
                // put the target element at the specified limit, set the target
                // element to absolute.
                if (base.options.limit > 0 && y >= base.options.limit - getMarginTop()) {
                    if (!isAbsolute() || !wasReset) {
                        postPosition();
                        target.trigger('preAbsolute');
                        setAbsolute();
                        target.trigger('unfixed');
                    }
                // If the vertical scroll position, plus the optional margin, would
                // put the target element above the top of the page, set the target
                // element to fixed.
                } else if (y >= offsetTop - getMarginTop()) {
                    if (!isFixed() || !wasReset) {
                        postPosition();
                        target.trigger('preFixed');

                        // Set the target element to fixed.
                        setFixed();

                        // Reset the last offset left because we just went fixed.
                        lastOffsetLeft = -1;

                        target.trigger('fixed');
                    }
                    // If the page has been scrolled horizontally as well, move the
                    // target element accordingly.
                    setLeft(x);
                } else {
                    // Set the target element to unfixed, placing it where it was
                    // before.
                    if (!isUnfixed() || !wasReset) {
                        postPosition();
                        target.trigger('preUnfixed');
                        setUnfixed();
                        target.trigger("unfixed");
                    }
                }
            } else {
                if (base.options.limit > 0) {
                    if (y + $(window).height() - target.outerHeight(true) >= base.options.limit - getMarginTop()) {
                        if (isFixed()) {
                            postPosition();
                            target.trigger('preUnfixed');
                            setUnfixed();
                            target.trigger("unfixed");
                        }
                    } else {
                        if (!isFixed()) {
                            postPosition();
                            target.trigger('preFixed');
                            setFixed();
                        }
                        setLeft(x);
                        target.trigger("fixed");
                    }
                } else {
                    setLeft(x);
                }
            }
        }

        function postPosition() {
            var position = target.css('position');
            
            if (position == 'absolute') {
                target.trigger('postAbsolute');
            } else if (position == 'fixed') {
                target.trigger('postFixed');
            } else {
                target.trigger('postUnfixed');
            }
        }

        var windowResize = function(event) {
            isReset = false;
            checkScroll();
        }

        var windowScroll = function(event) {
            checkScroll();
        }

        // Initializes this plugin. Captures the options passed in, turns this
        // off for iOS, adds the spacer, and binds to the window scroll and
        // resize events.
        base.init = function() {
            // Capture the options for this plugin.
            base.options = $
                    .extend({}, $.ScrollToFixed.defaultOptions, options);

            // Turn off this functionality for iOS devices until we figure out
            // what to do with them, or until iOS5 comes out which is supposed
            // to support position:fixed.
            if (navigator.platform === 'iPad' || navigator.platform === 'iPhone' || navigator.platform === "iPod") {
                if (!navigator.userAgent.match(/OS 5_.*\ like Mac OS X/i)) {
                    return;
                }
            }

            // Put the target element on top of everything that could be below
            // it. This reduces flicker when the target element is transitioning
            // to fixed.
            base.$el.css('z-index', base.options.zIndex);

            // Create a spacer element to fill the void left by the target
            // element when it goes fixed.
            spacer = $('<div />');

            position = target.css('position');

            // Place the spacer right after the target element.
            if (isUnfixed()) base.$el.after(spacer);

            // Reset the target element offsets when the window is resized, then
            // check to see if we need to fix or unfix the target element.
            $(window).bind('resize.ScrollToFixed', windowResize);

            // When the window scrolls, check to see if we need to fix or unfix
            // the target element.
            $(window).bind('scroll.ScrollToFixed', windowScroll);
            
            if (base.options.preFixed) {
                target.bind('preFixed.ScrollToFixed', base.options.preFixed);
            }
            if (base.options.postFixed) {
                target.bind('postFixed.ScrollToFixed', base.options.postFixed);
            }
            if (base.options.preUnfixed) {
                target.bind('preUnfixed.ScrollToFixed', base.options.preUnfixed);
            }
            if (base.options.postUnfixed) {
                target.bind('postUnfixed.ScrollToFixed', base.options.postUnfixed);
            }
            if (base.options.preAbsolute) {
                target.bind('preAbsolute.ScrollToFixed', base.options.preAbsolute);
            }
            if (base.options.postAbsolute) {
                target.bind('postAbsolute.ScrollToFixed', base.options.postAbsolute);
            }
            if (base.options.fixed) {
                target.bind('fixed.ScrollToFixed', base.options.fixed);
            }
            if (base.options.unfixed) {
                target.bind('unfixed.ScrollToFixed', base.options.unfixed);
            }

            if (base.options.spacerClass) {
                spacer.addClass(base.options.spacerClass);
            }

            target.bind('resize', function() {
                spacer.height(target.height());
            });

            target.bind('scroll.ScrollToFixed', function() {
                setUnfixed();
                checkScroll();
            });

            target.bind('remove.ScrollToFixed', function() {
                setUnfixed();
                $(window).unbind('resize', windowResize);
                $(window).unbind('scroll', windowScroll);
                target.unbind('.ScrollToFixed');
            });
            
            if (base.options.bottom != -1) {
                if (!isFixed()) {
                    postPosition();
                    target.trigger('preFixed.ScrollToFixed');
                    setFixed();
                }
            }
        };

        // Initialize the plugin.
        base.init();
    };

    // Sets the option defaults.
    $.ScrollToFixed.defaultOptions = {
        marginTop : 0,
        limit : 0,
        bottom : -1,
        zIndex : 1000
    };

    // Returns enhanced elements that will fix to the top of the page when the
    // page is scrolled.
    $.fn.scrollToFixed = function(options) {
        return this.each(function() {
            (new $.ScrollToFixed(this, options));
        });
    };
})(jQuery);
(function($,undefined){$.ui=$.ui||{};if($.ui.version){return;}
$.extend($.ui,{version:"1.8.16",keyCode:{ALT:18,BACKSPACE:8,CAPS_LOCK:20,COMMA:188,COMMAND:91,COMMAND_LEFT:91,COMMAND_RIGHT:93,CONTROL:17,DELETE:46,DOWN:40,END:35,ENTER:13,ESCAPE:27,HOME:36,INSERT:45,LEFT:37,MENU:93,NUMPAD_ADD:107,NUMPAD_DECIMAL:110,NUMPAD_DIVIDE:111,NUMPAD_ENTER:108,NUMPAD_MULTIPLY:106,NUMPAD_SUBTRACT:109,PAGE_DOWN:34,PAGE_UP:33,PERIOD:190,RIGHT:39,SHIFT:16,SPACE:32,TAB:9,UP:38,WINDOWS:91}});$.fn.extend({propAttr:$.fn.prop||$.fn.attr,_focus:$.fn.focus,focus:function(delay,fn){return typeof delay==="number"?this.each(function(){var elem=this;setTimeout(function(){$(elem).focus();if(fn){fn.call(elem);}},delay);}):this._focus.apply(this,arguments);},scrollParent:function(){var scrollParent;if(($.browser.msie&&(/(static|relative)/).test(this.css('position')))||(/absolute/).test(this.css('position'))){scrollParent=this.parents().filter(function(){return(/(relative|absolute|fixed)/).test($.curCSS(this,'position',1))&&(/(auto|scroll)/).test($.curCSS(this,'overflow',1)+$.curCSS(this,'overflow-y',1)+$.curCSS(this,'overflow-x',1));}).eq(0);}else{scrollParent=this.parents().filter(function(){return(/(auto|scroll)/).test($.curCSS(this,'overflow',1)+$.curCSS(this,'overflow-y',1)+$.curCSS(this,'overflow-x',1));}).eq(0);}
return(/fixed/).test(this.css('position'))||!scrollParent.length?$(document):scrollParent;},zIndex:function(zIndex){if(zIndex!==undefined){return this.css("zIndex",zIndex);}
if(this.length){var elem=$(this[0]),position,value;while(elem.length&&elem[0]!==document){position=elem.css("position");if(position==="absolute"||position==="relative"||position==="fixed"){value=parseInt(elem.css("zIndex"),10);if(!isNaN(value)&&value!==0){return value;}}
elem=elem.parent();}}
return 0;},disableSelection:function(){return this.bind(($.support.selectstart?"selectstart":"mousedown")+".ui-disableSelection",function(event){event.preventDefault();});},enableSelection:function(){return this.unbind(".ui-disableSelection");}});$.each(["Width","Height"],function(i,name){var side=name==="Width"?["Left","Right"]:["Top","Bottom"],type=name.toLowerCase(),orig={innerWidth:$.fn.innerWidth,innerHeight:$.fn.innerHeight,outerWidth:$.fn.outerWidth,outerHeight:$.fn.outerHeight};function reduce(elem,size,border,margin){$.each(side,function(){size-=parseFloat($.curCSS(elem,"padding"+this,true))||0;if(border){size-=parseFloat($.curCSS(elem,"border"+this+"Width",true))||0;}
if(margin){size-=parseFloat($.curCSS(elem,"margin"+this,true))||0;}});return size;}
$.fn["inner"+name]=function(size){if(size===undefined){return orig["inner"+name].call(this);}
return this.each(function(){$(this).css(type,reduce(this,size)+"px");});};$.fn["outer"+name]=function(size,margin){if(typeof size!=="number"){return orig["outer"+name].call(this,size);}
return this.each(function(){$(this).css(type,reduce(this,size,true,margin)+"px");});};});function focusable(element,isTabIndexNotNaN){var nodeName=element.nodeName.toLowerCase();if("area"===nodeName){var map=element.parentNode,mapName=map.name,img;if(!element.href||!mapName||map.nodeName.toLowerCase()!=="map"){return false;}
img=$("img[usemap=#"+mapName+"]")[0];return!!img&&visible(img);}
return(/input|select|textarea|button|object/.test(nodeName)?!element.disabled:"a"==nodeName?element.href||isTabIndexNotNaN:isTabIndexNotNaN)&&visible(element);}
function visible(element){return!$(element).parents().andSelf().filter(function(){return $.curCSS(this,"visibility")==="hidden"||$.expr.filters.hidden(this);}).length;}
$.extend($.expr[":"],{data:function(elem,i,match){return!!$.data(elem,match[3]);},focusable:function(element){return focusable(element,!isNaN($.attr(element,"tabindex")));},tabbable:function(element){var tabIndex=$.attr(element,"tabindex"),isTabIndexNaN=isNaN(tabIndex);return(isTabIndexNaN||tabIndex>=0)&&focusable(element,!isTabIndexNaN);}});$(function(){var body=document.body,div=body.appendChild(div=document.createElement("div"));$.extend(div.style,{minHeight:"100px",height:"auto",padding:0,borderWidth:0});$.support.minHeight=div.offsetHeight===100;$.support.selectstart="onselectstart"in div;body.removeChild(div).style.display="none";});$.extend($.ui,{plugin:{add:function(module,option,set){var proto=$.ui[module].prototype;for(var i in set){proto.plugins[i]=proto.plugins[i]||[];proto.plugins[i].push([option,set[i]]);}},call:function(instance,name,args){var set=instance.plugins[name];if(!set||!instance.element[0].parentNode){return;}
for(var i=0;i<set.length;i++){if(instance.options[set[i][0]]){set[i][1].apply(instance.element,args);}}}},contains:function(a,b){return document.compareDocumentPosition?a.compareDocumentPosition(b)&16:a!==b&&a.contains(b);},hasScroll:function(el,a){if($(el).css("overflow")==="hidden"){return false;}
var scroll=(a&&a==="left")?"scrollLeft":"scrollTop",has=false;if(el[scroll]>0){return true;}
el[scroll]=1;has=(el[scroll]>0);el[scroll]=0;return has;},isOverAxis:function(x,reference,size){return(x>reference)&&(x<(reference+size));},isOver:function(y,x,top,left,height,width){return $.ui.isOverAxis(y,top,height)&&$.ui.isOverAxis(x,left,width);}});})(jQuery);(function($,undefined){if($.cleanData){var _cleanData=$.cleanData;$.cleanData=function(elems){for(var i=0,elem;(elem=elems[i])!=null;i++){try{$(elem).triggerHandler("remove");}catch(e){}}
_cleanData(elems);};}else{var _remove=$.fn.remove;$.fn.remove=function(selector,keepData){return this.each(function(){if(!keepData){if(!selector||$.filter(selector,[this]).length){$("*",this).add([this]).each(function(){try{$(this).triggerHandler("remove");}catch(e){}});}}
return _remove.call($(this),selector,keepData);});};}
$.widget=function(name,base,prototype){var namespace=name.split(".")[0],fullName;name=name.split(".")[1];fullName=namespace+"-"+name;if(!prototype){prototype=base;base=$.Widget;}
$.expr[":"][fullName]=function(elem){return!!$.data(elem,name);};$[namespace]=$[namespace]||{};$[namespace][name]=function(options,element){if(arguments.length){this._createWidget(options,element);}};var basePrototype=new base();basePrototype.options=$.extend(true,{},basePrototype.options);$[namespace][name].prototype=$.extend(true,basePrototype,{namespace:namespace,widgetName:name,widgetEventPrefix:$[namespace][name].prototype.widgetEventPrefix||name,widgetBaseClass:fullName},prototype);$.widget.bridge(name,$[namespace][name]);};$.widget.bridge=function(name,object){$.fn[name]=function(options){var isMethodCall=typeof options==="string",args=Array.prototype.slice.call(arguments,1),returnValue=this;options=!isMethodCall&&args.length?$.extend.apply(null,[true,options].concat(args)):options;if(isMethodCall&&options.charAt(0)==="_"){return returnValue;}
if(isMethodCall){this.each(function(){var instance=$.data(this,name),methodValue=instance&&$.isFunction(instance[options])?instance[options].apply(instance,args):instance;if(methodValue!==instance&&methodValue!==undefined){returnValue=methodValue;return false;}});}else{this.each(function(){var instance=$.data(this,name);if(instance){instance.option(options||{})._init();}else{$.data(this,name,new object(options,this));}});}
return returnValue;};};$.Widget=function(options,element){if(arguments.length){this._createWidget(options,element);}};$.Widget.prototype={widgetName:"widget",widgetEventPrefix:"",options:{disabled:false},_createWidget:function(options,element){$.data(element,this.widgetName,this);this.element=$(element);this.options=$.extend(true,{},this.options,this._getCreateOptions(),options);var self=this;this.element.bind("remove."+this.widgetName,function(){self.destroy();});this._create();this._trigger("create");this._init();},_getCreateOptions:function(){return $.metadata&&$.metadata.get(this.element[0])[this.widgetName];},_create:function(){},_init:function(){},destroy:function(){this.element.unbind("."+this.widgetName).removeData(this.widgetName);this.widget().unbind("."+this.widgetName).removeAttr("aria-disabled").removeClass(this.widgetBaseClass+"-disabled "+"ui-state-disabled");},widget:function(){return this.element;},option:function(key,value){var options=key;if(arguments.length===0){return $.extend({},this.options);}
if(typeof key==="string"){if(value===undefined){return this.options[key];}
options={};options[key]=value;}
this._setOptions(options);return this;},_setOptions:function(options){var self=this;$.each(options,function(key,value){self._setOption(key,value);});return this;},_setOption:function(key,value){this.options[key]=value;if(key==="disabled"){this.widget()
[value?"addClass":"removeClass"](this.widgetBaseClass+"-disabled"+" "+"ui-state-disabled").attr("aria-disabled",value);}
return this;},enable:function(){return this._setOption("disabled",false);},disable:function(){return this._setOption("disabled",true);},_trigger:function(type,event,data){var callback=this.options[type];event=$.Event(event);event.type=(type===this.widgetEventPrefix?type:this.widgetEventPrefix+type).toLowerCase();data=data||{};if(event.originalEvent){for(var i=$.event.props.length,prop;i;){prop=$.event.props[--i];event[prop]=event.originalEvent[prop];}}
this.element.trigger(event,data);return!($.isFunction(callback)&&callback.call(this.element[0],event,data)===false||event.isDefaultPrevented());}};})(jQuery);(function($,undefined){var mouseHandled=false;$(document).mouseup(function(e){mouseHandled=false;});$.widget("ui.mouse",{options:{cancel:':input,option',distance:1,delay:0},_mouseInit:function(){var self=this;this.element.bind('mousedown.'+this.widgetName,function(event){return self._mouseDown(event);}).bind('click.'+this.widgetName,function(event){if(true===$.data(event.target,self.widgetName+'.preventClickEvent')){$.removeData(event.target,self.widgetName+'.preventClickEvent');event.stopImmediatePropagation();return false;}});this.started=false;},_mouseDestroy:function(){this.element.unbind('.'+this.widgetName);},_mouseDown:function(event){if(mouseHandled){return};(this._mouseStarted&&this._mouseUp(event));this._mouseDownEvent=event;var self=this,btnIsLeft=(event.which==1),elIsCancel=(typeof this.options.cancel=="string"&&event.target.nodeName?$(event.target).closest(this.options.cancel).length:false);if(!btnIsLeft||elIsCancel||!this._mouseCapture(event)){return true;}
this.mouseDelayMet=!this.options.delay;if(!this.mouseDelayMet){this._mouseDelayTimer=setTimeout(function(){self.mouseDelayMet=true;},this.options.delay);}
if(this._mouseDistanceMet(event)&&this._mouseDelayMet(event)){this._mouseStarted=(this._mouseStart(event)!==false);if(!this._mouseStarted){event.preventDefault();return true;}}
if(true===$.data(event.target,this.widgetName+'.preventClickEvent')){$.removeData(event.target,this.widgetName+'.preventClickEvent');}
this._mouseMoveDelegate=function(event){return self._mouseMove(event);};this._mouseUpDelegate=function(event){return self._mouseUp(event);};$(document).bind('mousemove.'+this.widgetName,this._mouseMoveDelegate).bind('mouseup.'+this.widgetName,this._mouseUpDelegate);event.preventDefault();mouseHandled=true;return true;},_mouseMove:function(event){if($.browser.msie&&!(document.documentMode>=9)&&!event.button){return this._mouseUp(event);}
if(this._mouseStarted){this._mouseDrag(event);return event.preventDefault();}
if(this._mouseDistanceMet(event)&&this._mouseDelayMet(event)){this._mouseStarted=(this._mouseStart(this._mouseDownEvent,event)!==false);(this._mouseStarted?this._mouseDrag(event):this._mouseUp(event));}
return!this._mouseStarted;},_mouseUp:function(event){$(document).unbind('mousemove.'+this.widgetName,this._mouseMoveDelegate).unbind('mouseup.'+this.widgetName,this._mouseUpDelegate);if(this._mouseStarted){this._mouseStarted=false;if(event.target==this._mouseDownEvent.target){$.data(event.target,this.widgetName+'.preventClickEvent',true);}
this._mouseStop(event);}
return false;},_mouseDistanceMet:function(event){return(Math.max(Math.abs(this._mouseDownEvent.pageX-event.pageX),Math.abs(this._mouseDownEvent.pageY-event.pageY))>=this.options.distance);},_mouseDelayMet:function(event){return this.mouseDelayMet;},_mouseStart:function(event){},_mouseDrag:function(event){},_mouseStop:function(event){},_mouseCapture:function(event){return true;}});})(jQuery);(function($,undefined){$.ui=$.ui||{};var horizontalPositions=/left|center|right/,verticalPositions=/top|center|bottom/,center="center",_position=$.fn.position,_offset=$.fn.offset;$.fn.position=function(options){if(!options||!options.of){return _position.apply(this,arguments);}
options=$.extend({},options);var target=$(options.of),targetElem=target[0],collision=(options.collision||"flip").split(" "),offset=options.offset?options.offset.split(" "):[0,0],targetWidth,targetHeight,basePosition;if(targetElem.nodeType===9){targetWidth=target.width();targetHeight=target.height();basePosition={top:0,left:0};}else if(targetElem.setTimeout){targetWidth=target.width();targetHeight=target.height();basePosition={top:target.scrollTop(),left:target.scrollLeft()};}else if(targetElem.preventDefault){options.at="left top";targetWidth=targetHeight=0;basePosition={top:options.of.pageY,left:options.of.pageX};}else{targetWidth=target.outerWidth();targetHeight=target.outerHeight();basePosition=target.offset();}
$.each(["my","at"],function(){var pos=(options[this]||"").split(" ");if(pos.length===1){pos=horizontalPositions.test(pos[0])?pos.concat([center]):verticalPositions.test(pos[0])?[center].concat(pos):[center,center];}
pos[0]=horizontalPositions.test(pos[0])?pos[0]:center;pos[1]=verticalPositions.test(pos[1])?pos[1]:center;options[this]=pos;});if(collision.length===1){collision[1]=collision[0];}
offset[0]=parseInt(offset[0],10)||0;if(offset.length===1){offset[1]=offset[0];}
offset[1]=parseInt(offset[1],10)||0;if(options.at[0]==="right"){basePosition.left+=targetWidth;}else if(options.at[0]===center){basePosition.left+=targetWidth/2;}
if(options.at[1]==="bottom"){basePosition.top+=targetHeight;}else if(options.at[1]===center){basePosition.top+=targetHeight/2;}
basePosition.left+=offset[0];basePosition.top+=offset[1];return this.each(function(){var elem=$(this),elemWidth=elem.outerWidth(),elemHeight=elem.outerHeight(),marginLeft=parseInt($.curCSS(this,"marginLeft",true))||0,marginTop=parseInt($.curCSS(this,"marginTop",true))||0,collisionWidth=elemWidth+marginLeft+
(parseInt($.curCSS(this,"marginRight",true))||0),collisionHeight=elemHeight+marginTop+
(parseInt($.curCSS(this,"marginBottom",true))||0),position=$.extend({},basePosition),collisionPosition;if(options.my[0]==="right"){position.left-=elemWidth;}else if(options.my[0]===center){position.left-=elemWidth/2;}
if(options.my[1]==="bottom"){position.top-=elemHeight;}else if(options.my[1]===center){position.top-=elemHeight/2;}
position.left=Math.round(position.left);position.top=Math.round(position.top);collisionPosition={left:position.left-marginLeft,top:position.top-marginTop};$.each(["left","top"],function(i,dir){if($.ui.position[collision[i]]){$.ui.position[collision[i]][dir](position,{targetWidth:targetWidth,targetHeight:targetHeight,elemWidth:elemWidth,elemHeight:elemHeight,collisionPosition:collisionPosition,collisionWidth:collisionWidth,collisionHeight:collisionHeight,offset:offset,my:options.my,at:options.at});}});if($.fn.bgiframe){elem.bgiframe();}
elem.offset($.extend(position,{using:options.using}));});};$.ui.position={fit:{left:function(position,data){var win=$(window),over=data.collisionPosition.left+data.collisionWidth-win.width()-win.scrollLeft();position.left=over>0?position.left-over:Math.max(position.left-data.collisionPosition.left,position.left);},top:function(position,data){var win=$(window),over=data.collisionPosition.top+data.collisionHeight-win.height()-win.scrollTop();position.top=over>0?position.top-over:Math.max(position.top-data.collisionPosition.top,position.top);}},flip:{left:function(position,data){if(data.at[0]===center){return;}
var win=$(window),over=data.collisionPosition.left+data.collisionWidth-win.width()-win.scrollLeft(),myOffset=data.my[0]==="left"?-data.elemWidth:data.my[0]==="right"?data.elemWidth:0,atOffset=data.at[0]==="left"?data.targetWidth:-data.targetWidth,offset=-2*data.offset[0];position.left+=data.collisionPosition.left<0?myOffset+atOffset+offset:over>0?myOffset+atOffset+offset:0;},top:function(position,data){if(data.at[1]===center){return;}
var win=$(window),over=data.collisionPosition.top+data.collisionHeight-win.height()-win.scrollTop(),myOffset=data.my[1]==="top"?-data.elemHeight:data.my[1]==="bottom"?data.elemHeight:0,atOffset=data.at[1]==="top"?data.targetHeight:-data.targetHeight,offset=-2*data.offset[1];position.top+=data.collisionPosition.top<0?myOffset+atOffset+offset:over>0?myOffset+atOffset+offset:0;}}};if(!$.offset.setOffset){$.offset.setOffset=function(elem,options){if(/static/.test($.curCSS(elem,"position"))){elem.style.position="relative";}
var curElem=$(elem),curOffset=curElem.offset(),curTop=parseInt($.curCSS(elem,"top",true),10)||0,curLeft=parseInt($.curCSS(elem,"left",true),10)||0,props={top:(options.top-curOffset.top)+curTop,left:(options.left-curOffset.left)+curLeft};if('using'in options){options.using.call(elem,props);}else{curElem.css(props);}};$.fn.offset=function(options){var elem=this[0];if(!elem||!elem.ownerDocument){return null;}
if(options){return this.each(function(){$.offset.setOffset(this,options);});}
return _offset.call(this);};}}(jQuery));(function($,undefined){$.widget("ui.draggable",$.ui.mouse,{widgetEventPrefix:"drag",options:{addClasses:true,appendTo:"parent",axis:false,connectToSortable:false,containment:false,cursor:"auto",cursorAt:false,grid:false,handle:false,helper:"original",iframeFix:false,opacity:false,refreshPositions:false,revert:false,revertDuration:500,scope:"default",scroll:true,scrollSensitivity:20,scrollSpeed:20,snap:false,snapMode:"both",snapTolerance:20,stack:false,zIndex:false},_create:function(){if(this.options.helper=='original'&&!(/^(?:r|a|f)/).test(this.element.css("position")))
this.element[0].style.position='relative';(this.options.addClasses&&this.element.addClass("ui-draggable"));(this.options.disabled&&this.element.addClass("ui-draggable-disabled"));this._mouseInit();},destroy:function(){if(!this.element.data('draggable'))return;this.element.removeData("draggable").unbind(".draggable").removeClass("ui-draggable"
+" ui-draggable-dragging"
+" ui-draggable-disabled");this._mouseDestroy();return this;},_mouseCapture:function(event){var o=this.options;if(this.helper||o.disabled||$(event.target).is('.ui-resizable-handle'))
return false;this.handle=this._getHandle(event);if(!this.handle)
return false;if(o.iframeFix){$(o.iframeFix===true?"iframe":o.iframeFix).each(function(){$('<div class="ui-draggable-iframeFix" style="background: #fff;"></div>').css({width:this.offsetWidth+"px",height:this.offsetHeight+"px",position:"absolute",opacity:"0.001",zIndex:1000}).css($(this).offset()).appendTo("body");});}
return true;},_mouseStart:function(event){var o=this.options;this.helper=this._createHelper(event);this._cacheHelperProportions();if($.ui.ddmanager)
$.ui.ddmanager.current=this;this._cacheMargins();this.cssPosition=this.helper.css("position");this.scrollParent=this.helper.scrollParent();this.offset=this.positionAbs=this.element.offset();this.offset={top:this.offset.top-this.margins.top,left:this.offset.left-this.margins.left};$.extend(this.offset,{click:{left:event.pageX-this.offset.left,top:event.pageY-this.offset.top},parent:this._getParentOffset(),relative:this._getRelativeOffset()});this.originalPosition=this.position=this._generatePosition(event);this.originalPageX=event.pageX;this.originalPageY=event.pageY;(o.cursorAt&&this._adjustOffsetFromHelper(o.cursorAt));if(o.containment)
this._setContainment();if(this._trigger("start",event)===false){this._clear();return false;}
this._cacheHelperProportions();if($.ui.ddmanager&&!o.dropBehaviour)
$.ui.ddmanager.prepareOffsets(this,event);this.helper.addClass("ui-draggable-dragging");this._mouseDrag(event,true);if($.ui.ddmanager)$.ui.ddmanager.dragStart(this,event);return true;},_mouseDrag:function(event,noPropagation){this.position=this._generatePosition(event);this.positionAbs=this._convertPositionTo("absolute");if(!noPropagation){var ui=this._uiHash();if(this._trigger('drag',event,ui)===false){this._mouseUp({});return false;}
this.position=ui.position;}
if(!this.options.axis||this.options.axis!="y")this.helper[0].style.left=this.position.left+'px';if(!this.options.axis||this.options.axis!="x")this.helper[0].style.top=this.position.top+'px';if($.ui.ddmanager)$.ui.ddmanager.drag(this,event);return false;},_mouseStop:function(event){var dropped=false;if($.ui.ddmanager&&!this.options.dropBehaviour)
dropped=$.ui.ddmanager.drop(this,event);if(this.dropped){dropped=this.dropped;this.dropped=false;}
if((!this.element[0]||!this.element[0].parentNode)&&this.options.helper=="original")
return false;if((this.options.revert=="invalid"&&!dropped)||(this.options.revert=="valid"&&dropped)||this.options.revert===true||($.isFunction(this.options.revert)&&this.options.revert.call(this.element,dropped))){var self=this;$(this.helper).animate(this.originalPosition,parseInt(this.options.revertDuration,10),function(){if(self._trigger("stop",event)!==false){self._clear();}});}else{if(this._trigger("stop",event)!==false){this._clear();}}
return false;},_mouseUp:function(event){if(this.options.iframeFix===true){$("div.ui-draggable-iframeFix").each(function(){this.parentNode.removeChild(this);});}
if($.ui.ddmanager)$.ui.ddmanager.dragStop(this,event);return $.ui.mouse.prototype._mouseUp.call(this,event);},cancel:function(){if(this.helper.is(".ui-draggable-dragging")){this._mouseUp({});}else{this._clear();}
return this;},_getHandle:function(event){var handle=!this.options.handle||!$(this.options.handle,this.element).length?true:false;$(this.options.handle,this.element).find("*").andSelf().each(function(){if(this==event.target)handle=true;});return handle;},_createHelper:function(event){var o=this.options;var helper=$.isFunction(o.helper)?$(o.helper.apply(this.element[0],[event])):(o.helper=='clone'?this.element.clone().removeAttr('id'):this.element);if(!helper.parents('body').length)
helper.appendTo((o.appendTo=='parent'?this.element[0].parentNode:o.appendTo));if(helper[0]!=this.element[0]&&!(/(fixed|absolute)/).test(helper.css("position")))
helper.css("position","absolute");return helper;},_adjustOffsetFromHelper:function(obj){if(typeof obj=='string'){obj=obj.split(' ');}
if($.isArray(obj)){obj={left:+obj[0],top:+obj[1]||0};}
if('left'in obj){this.offset.click.left=obj.left+this.margins.left;}
if('right'in obj){this.offset.click.left=this.helperProportions.width-obj.right+this.margins.left;}
if('top'in obj){this.offset.click.top=obj.top+this.margins.top;}
if('bottom'in obj){this.offset.click.top=this.helperProportions.height-obj.bottom+this.margins.top;}},_getParentOffset:function(){this.offsetParent=this.helper.offsetParent();var po=this.offsetParent.offset();if(this.cssPosition=='absolute'&&this.scrollParent[0]!=document&&$.ui.contains(this.scrollParent[0],this.offsetParent[0])){po.left+=this.scrollParent.scrollLeft();po.top+=this.scrollParent.scrollTop();}
if((this.offsetParent[0]==document.body)||(this.offsetParent[0].tagName&&this.offsetParent[0].tagName.toLowerCase()=='html'&&$.browser.msie))
po={top:0,left:0};return{top:po.top+(parseInt(this.offsetParent.css("borderTopWidth"),10)||0),left:po.left+(parseInt(this.offsetParent.css("borderLeftWidth"),10)||0)};},_getRelativeOffset:function(){if(this.cssPosition=="relative"){var p=this.element.position();return{top:p.top-(parseInt(this.helper.css("top"),10)||0)+this.scrollParent.scrollTop(),left:p.left-(parseInt(this.helper.css("left"),10)||0)+this.scrollParent.scrollLeft()};}else{return{top:0,left:0};}},_cacheMargins:function(){this.margins={left:(parseInt(this.element.css("marginLeft"),10)||0),top:(parseInt(this.element.css("marginTop"),10)||0),right:(parseInt(this.element.css("marginRight"),10)||0),bottom:(parseInt(this.element.css("marginBottom"),10)||0)};},_cacheHelperProportions:function(){this.helperProportions={width:this.helper.outerWidth(),height:this.helper.outerHeight()};},_setContainment:function(){var o=this.options;if(o.containment=='parent')o.containment=this.helper[0].parentNode;if(o.containment=='document'||o.containment=='window')this.containment=[o.containment=='document'?0:$(window).scrollLeft()-this.offset.relative.left-this.offset.parent.left,o.containment=='document'?0:$(window).scrollTop()-this.offset.relative.top-this.offset.parent.top,(o.containment=='document'?0:$(window).scrollLeft())+$(o.containment=='document'?document:window).width()-this.helperProportions.width-this.margins.left,(o.containment=='document'?0:$(window).scrollTop())+($(o.containment=='document'?document:window).height()||document.body.parentNode.scrollHeight)-this.helperProportions.height-this.margins.top];if(!(/^(document|window|parent)$/).test(o.containment)&&o.containment.constructor!=Array){var c=$(o.containment);var ce=c[0];if(!ce)return;var co=c.offset();var over=($(ce).css("overflow")!='hidden');this.containment=[(parseInt($(ce).css("borderLeftWidth"),10)||0)+(parseInt($(ce).css("paddingLeft"),10)||0),(parseInt($(ce).css("borderTopWidth"),10)||0)+(parseInt($(ce).css("paddingTop"),10)||0),(over?Math.max(ce.scrollWidth,ce.offsetWidth):ce.offsetWidth)-(parseInt($(ce).css("borderLeftWidth"),10)||0)-(parseInt($(ce).css("paddingRight"),10)||0)-this.helperProportions.width-this.margins.left-this.margins.right,(over?Math.max(ce.scrollHeight,ce.offsetHeight):ce.offsetHeight)-(parseInt($(ce).css("borderTopWidth"),10)||0)-(parseInt($(ce).css("paddingBottom"),10)||0)-this.helperProportions.height-this.margins.top-this.margins.bottom];this.relative_container=c;}else if(o.containment.constructor==Array){this.containment=o.containment;}},_convertPositionTo:function(d,pos){if(!pos)pos=this.position;var mod=d=="absolute"?1:-1;var o=this.options,scroll=this.cssPosition=='absolute'&&!(this.scrollParent[0]!=document&&$.ui.contains(this.scrollParent[0],this.offsetParent[0]))?this.offsetParent:this.scrollParent,scrollIsRootNode=(/(html|body)/i).test(scroll[0].tagName);return{top:(pos.top
+this.offset.relative.top*mod
+this.offset.parent.top*mod
-($.browser.safari&&$.browser.version<526&&this.cssPosition=='fixed'?0:(this.cssPosition=='fixed'?-this.scrollParent.scrollTop():(scrollIsRootNode?0:scroll.scrollTop()))*mod)),left:(pos.left
+this.offset.relative.left*mod
+this.offset.parent.left*mod
-($.browser.safari&&$.browser.version<526&&this.cssPosition=='fixed'?0:(this.cssPosition=='fixed'?-this.scrollParent.scrollLeft():scrollIsRootNode?0:scroll.scrollLeft())*mod))};},_generatePosition:function(event){var o=this.options,scroll=this.cssPosition=='absolute'&&!(this.scrollParent[0]!=document&&$.ui.contains(this.scrollParent[0],this.offsetParent[0]))?this.offsetParent:this.scrollParent,scrollIsRootNode=(/(html|body)/i).test(scroll[0].tagName);var pageX=event.pageX;var pageY=event.pageY;if(this.originalPosition){var containment;if(this.containment){if(this.relative_container){var co=this.relative_container.offset();containment=[this.containment[0]+co.left,this.containment[1]+co.top,this.containment[2]+co.left,this.containment[3]+co.top];}
else{containment=this.containment;}
if(event.pageX-this.offset.click.left<containment[0])pageX=containment[0]+this.offset.click.left;if(event.pageY-this.offset.click.top<containment[1])pageY=containment[1]+this.offset.click.top;if(event.pageX-this.offset.click.left>containment[2])pageX=containment[2]+this.offset.click.left;if(event.pageY-this.offset.click.top>containment[3])pageY=containment[3]+this.offset.click.top;}
if(o.grid){var top=o.grid[1]?this.originalPageY+Math.round((pageY-this.originalPageY)/o.grid[1])*o.grid[1]:this.originalPageY;pageY=containment?(!(top-this.offset.click.top<containment[1]||top-this.offset.click.top>containment[3])?top:(!(top-this.offset.click.top<containment[1])?top-o.grid[1]:top+o.grid[1])):top;var left=o.grid[0]?this.originalPageX+Math.round((pageX-this.originalPageX)/o.grid[0])*o.grid[0]:this.originalPageX;pageX=containment?(!(left-this.offset.click.left<containment[0]||left-this.offset.click.left>containment[2])?left:(!(left-this.offset.click.left<containment[0])?left-o.grid[0]:left+o.grid[0])):left;}}
return{top:(pageY
-this.offset.click.top
-this.offset.relative.top
-this.offset.parent.top
+($.browser.safari&&$.browser.version<526&&this.cssPosition=='fixed'?0:(this.cssPosition=='fixed'?-this.scrollParent.scrollTop():(scrollIsRootNode?0:scroll.scrollTop())))),left:(pageX
-this.offset.click.left
-this.offset.relative.left
-this.offset.parent.left
+($.browser.safari&&$.browser.version<526&&this.cssPosition=='fixed'?0:(this.cssPosition=='fixed'?-this.scrollParent.scrollLeft():scrollIsRootNode?0:scroll.scrollLeft())))};},_clear:function(){this.helper.removeClass("ui-draggable-dragging");if(this.helper[0]!=this.element[0]&&!this.cancelHelperRemoval)this.helper.remove();this.helper=null;this.cancelHelperRemoval=false;},_trigger:function(type,event,ui){ui=ui||this._uiHash();$.ui.plugin.call(this,type,[event,ui]);if(type=="drag")this.positionAbs=this._convertPositionTo("absolute");return $.Widget.prototype._trigger.call(this,type,event,ui);},plugins:{},_uiHash:function(event){return{helper:this.helper,position:this.position,originalPosition:this.originalPosition,offset:this.positionAbs};}});$.extend($.ui.draggable,{version:"1.8.16"});$.ui.plugin.add("draggable","connectToSortable",{start:function(event,ui){var inst=$(this).data("draggable"),o=inst.options,uiSortable=$.extend({},ui,{item:inst.element});inst.sortables=[];$(o.connectToSortable).each(function(){var sortable=$.data(this,'sortable');if(sortable&&!sortable.options.disabled){inst.sortables.push({instance:sortable,shouldRevert:sortable.options.revert});sortable.refreshPositions();sortable._trigger("activate",event,uiSortable);}});},stop:function(event,ui){var inst=$(this).data("draggable"),uiSortable=$.extend({},ui,{item:inst.element});$.each(inst.sortables,function(){if(this.instance.isOver){this.instance.isOver=0;inst.cancelHelperRemoval=true;this.instance.cancelHelperRemoval=false;if(this.shouldRevert)this.instance.options.revert=true;this.instance._mouseStop(event);this.instance.options.helper=this.instance.options._helper;if(inst.options.helper=='original')
this.instance.currentItem.css({top:'auto',left:'auto'});}else{this.instance.cancelHelperRemoval=false;this.instance._trigger("deactivate",event,uiSortable);}});},drag:function(event,ui){var inst=$(this).data("draggable"),self=this;var checkPos=function(o){var dyClick=this.offset.click.top,dxClick=this.offset.click.left;var helperTop=this.positionAbs.top,helperLeft=this.positionAbs.left;var itemHeight=o.height,itemWidth=o.width;var itemTop=o.top,itemLeft=o.left;return $.ui.isOver(helperTop+dyClick,helperLeft+dxClick,itemTop,itemLeft,itemHeight,itemWidth);};$.each(inst.sortables,function(i){this.instance.positionAbs=inst.positionAbs;this.instance.helperProportions=inst.helperProportions;this.instance.offset.click=inst.offset.click;if(this.instance._intersectsWith(this.instance.containerCache)){if(!this.instance.isOver){this.instance.isOver=1;this.instance.currentItem=$(self).clone().removeAttr('id').appendTo(this.instance.element).data("sortable-item",true);this.instance.options._helper=this.instance.options.helper;this.instance.options.helper=function(){return ui.helper[0];};event.target=this.instance.currentItem[0];this.instance._mouseCapture(event,true);this.instance._mouseStart(event,true,true);this.instance.offset.click.top=inst.offset.click.top;this.instance.offset.click.left=inst.offset.click.left;this.instance.offset.parent.left-=inst.offset.parent.left-this.instance.offset.parent.left;this.instance.offset.parent.top-=inst.offset.parent.top-this.instance.offset.parent.top;inst._trigger("toSortable",event);inst.dropped=this.instance.element;inst.currentItem=inst.element;this.instance.fromOutside=inst;}
if(this.instance.currentItem)this.instance._mouseDrag(event);}else{if(this.instance.isOver){this.instance.isOver=0;this.instance.cancelHelperRemoval=true;this.instance.options.revert=false;this.instance._trigger('out',event,this.instance._uiHash(this.instance));this.instance._mouseStop(event,true);this.instance.options.helper=this.instance.options._helper;this.instance.currentItem.remove();if(this.instance.placeholder)this.instance.placeholder.remove();inst._trigger("fromSortable",event);inst.dropped=false;}};});}});$.ui.plugin.add("draggable","cursor",{start:function(event,ui){var t=$('body'),o=$(this).data('draggable').options;if(t.css("cursor"))o._cursor=t.css("cursor");t.css("cursor",o.cursor);},stop:function(event,ui){var o=$(this).data('draggable').options;if(o._cursor)$('body').css("cursor",o._cursor);}});$.ui.plugin.add("draggable","opacity",{start:function(event,ui){var t=$(ui.helper),o=$(this).data('draggable').options;if(t.css("opacity"))o._opacity=t.css("opacity");t.css('opacity',o.opacity);},stop:function(event,ui){var o=$(this).data('draggable').options;if(o._opacity)$(ui.helper).css('opacity',o._opacity);}});$.ui.plugin.add("draggable","scroll",{start:function(event,ui){var i=$(this).data("draggable");if(i.scrollParent[0]!=document&&i.scrollParent[0].tagName!='HTML')i.overflowOffset=i.scrollParent.offset();},drag:function(event,ui){var i=$(this).data("draggable"),o=i.options,scrolled=false;if(i.scrollParent[0]!=document&&i.scrollParent[0].tagName!='HTML'){if(!o.axis||o.axis!='x'){if((i.overflowOffset.top+i.scrollParent[0].offsetHeight)-event.pageY<o.scrollSensitivity)
i.scrollParent[0].scrollTop=scrolled=i.scrollParent[0].scrollTop+o.scrollSpeed;else if(event.pageY-i.overflowOffset.top<o.scrollSensitivity)
i.scrollParent[0].scrollTop=scrolled=i.scrollParent[0].scrollTop-o.scrollSpeed;}
if(!o.axis||o.axis!='y'){if((i.overflowOffset.left+i.scrollParent[0].offsetWidth)-event.pageX<o.scrollSensitivity)
i.scrollParent[0].scrollLeft=scrolled=i.scrollParent[0].scrollLeft+o.scrollSpeed;else if(event.pageX-i.overflowOffset.left<o.scrollSensitivity)
i.scrollParent[0].scrollLeft=scrolled=i.scrollParent[0].scrollLeft-o.scrollSpeed;}}else{if(!o.axis||o.axis!='x'){if(event.pageY-$(document).scrollTop()<o.scrollSensitivity)
scrolled=$(document).scrollTop($(document).scrollTop()-o.scrollSpeed);else if($(window).height()-(event.pageY-$(document).scrollTop())<o.scrollSensitivity)
scrolled=$(document).scrollTop($(document).scrollTop()+o.scrollSpeed);}
if(!o.axis||o.axis!='y'){if(event.pageX-$(document).scrollLeft()<o.scrollSensitivity)
scrolled=$(document).scrollLeft($(document).scrollLeft()-o.scrollSpeed);else if($(window).width()-(event.pageX-$(document).scrollLeft())<o.scrollSensitivity)
scrolled=$(document).scrollLeft($(document).scrollLeft()+o.scrollSpeed);}}
if(scrolled!==false&&$.ui.ddmanager&&!o.dropBehaviour)
$.ui.ddmanager.prepareOffsets(i,event);}});$.ui.plugin.add("draggable","snap",{start:function(event,ui){var i=$(this).data("draggable"),o=i.options;i.snapElements=[];$(o.snap.constructor!=String?(o.snap.items||':data(draggable)'):o.snap).each(function(){var $t=$(this);var $o=$t.offset();if(this!=i.element[0])i.snapElements.push({item:this,width:$t.outerWidth(),height:$t.outerHeight(),top:$o.top,left:$o.left});});},drag:function(event,ui){var inst=$(this).data("draggable"),o=inst.options;var d=o.snapTolerance;var x1=ui.offset.left,x2=x1+inst.helperProportions.width,y1=ui.offset.top,y2=y1+inst.helperProportions.height;for(var i=inst.snapElements.length-1;i>=0;i--){var l=inst.snapElements[i].left,r=l+inst.snapElements[i].width,t=inst.snapElements[i].top,b=t+inst.snapElements[i].height;if(!((l-d<x1&&x1<r+d&&t-d<y1&&y1<b+d)||(l-d<x1&&x1<r+d&&t-d<y2&&y2<b+d)||(l-d<x2&&x2<r+d&&t-d<y1&&y1<b+d)||(l-d<x2&&x2<r+d&&t-d<y2&&y2<b+d))){if(inst.snapElements[i].snapping)(inst.options.snap.release&&inst.options.snap.release.call(inst.element,event,$.extend(inst._uiHash(),{snapItem:inst.snapElements[i].item})));inst.snapElements[i].snapping=false;continue;}
if(o.snapMode!='inner'){var ts=Math.abs(t-y2)<=d;var bs=Math.abs(b-y1)<=d;var ls=Math.abs(l-x2)<=d;var rs=Math.abs(r-x1)<=d;if(ts)ui.position.top=inst._convertPositionTo("relative",{top:t-inst.helperProportions.height,left:0}).top-inst.margins.top;if(bs)ui.position.top=inst._convertPositionTo("relative",{top:b,left:0}).top-inst.margins.top;if(ls)ui.position.left=inst._convertPositionTo("relative",{top:0,left:l-inst.helperProportions.width}).left-inst.margins.left;if(rs)ui.position.left=inst._convertPositionTo("relative",{top:0,left:r}).left-inst.margins.left;}
var first=(ts||bs||ls||rs);if(o.snapMode!='outer'){var ts=Math.abs(t-y1)<=d;var bs=Math.abs(b-y2)<=d;var ls=Math.abs(l-x1)<=d;var rs=Math.abs(r-x2)<=d;if(ts)ui.position.top=inst._convertPositionTo("relative",{top:t,left:0}).top-inst.margins.top;if(bs)ui.position.top=inst._convertPositionTo("relative",{top:b-inst.helperProportions.height,left:0}).top-inst.margins.top;if(ls)ui.position.left=inst._convertPositionTo("relative",{top:0,left:l}).left-inst.margins.left;if(rs)ui.position.left=inst._convertPositionTo("relative",{top:0,left:r-inst.helperProportions.width}).left-inst.margins.left;}
if(!inst.snapElements[i].snapping&&(ts||bs||ls||rs||first))
(inst.options.snap.snap&&inst.options.snap.snap.call(inst.element,event,$.extend(inst._uiHash(),{snapItem:inst.snapElements[i].item})));inst.snapElements[i].snapping=(ts||bs||ls||rs||first);};}});$.ui.plugin.add("draggable","stack",{start:function(event,ui){var o=$(this).data("draggable").options;var group=$.makeArray($(o.stack)).sort(function(a,b){return(parseInt($(a).css("zIndex"),10)||0)-(parseInt($(b).css("zIndex"),10)||0);});if(!group.length){return;}
var min=parseInt(group[0].style.zIndex)||0;$(group).each(function(i){this.style.zIndex=min+i;});this[0].style.zIndex=min+group.length;}});$.ui.plugin.add("draggable","zIndex",{start:function(event,ui){var t=$(ui.helper),o=$(this).data("draggable").options;if(t.css("zIndex"))o._zIndex=t.css("zIndex");t.css('zIndex',o.zIndex);},stop:function(event,ui){var o=$(this).data("draggable").options;if(o._zIndex)$(ui.helper).css('zIndex',o._zIndex);}});})(jQuery);(function($,undefined){$.widget("ui.droppable",{widgetEventPrefix:"drop",options:{accept:'*',activeClass:false,addClasses:true,greedy:false,hoverClass:false,scope:'default',tolerance:'intersect'},_create:function(){var o=this.options,accept=o.accept;this.isover=0;this.isout=1;this.accept=$.isFunction(accept)?accept:function(d){return d.is(accept);};this.proportions={width:this.element[0].offsetWidth,height:this.element[0].offsetHeight};$.ui.ddmanager.droppables[o.scope]=$.ui.ddmanager.droppables[o.scope]||[];$.ui.ddmanager.droppables[o.scope].push(this);(o.addClasses&&this.element.addClass("ui-droppable"));},destroy:function(){var drop=$.ui.ddmanager.droppables[this.options.scope];for(var i=0;i<drop.length;i++)
if(drop[i]==this)
drop.splice(i,1);this.element.removeClass("ui-droppable ui-droppable-disabled").removeData("droppable").unbind(".droppable");return this;},_setOption:function(key,value){if(key=='accept'){this.accept=$.isFunction(value)?value:function(d){return d.is(value);};}
$.Widget.prototype._setOption.apply(this,arguments);},_activate:function(event){var draggable=$.ui.ddmanager.current;if(this.options.activeClass)this.element.addClass(this.options.activeClass);(draggable&&this._trigger('activate',event,this.ui(draggable)));},_deactivate:function(event){var draggable=$.ui.ddmanager.current;if(this.options.activeClass)this.element.removeClass(this.options.activeClass);(draggable&&this._trigger('deactivate',event,this.ui(draggable)));},_over:function(event){var draggable=$.ui.ddmanager.current;if(!draggable||(draggable.currentItem||draggable.element)[0]==this.element[0])return;if(this.accept.call(this.element[0],(draggable.currentItem||draggable.element))){if(this.options.hoverClass)this.element.addClass(this.options.hoverClass);this._trigger('over',event,this.ui(draggable));}},_out:function(event){var draggable=$.ui.ddmanager.current;if(!draggable||(draggable.currentItem||draggable.element)[0]==this.element[0])return;if(this.accept.call(this.element[0],(draggable.currentItem||draggable.element))){if(this.options.hoverClass)this.element.removeClass(this.options.hoverClass);this._trigger('out',event,this.ui(draggable));}},_drop:function(event,custom){var draggable=custom||$.ui.ddmanager.current;if(!draggable||(draggable.currentItem||draggable.element)[0]==this.element[0])return false;var childrenIntersection=false;this.element.find(":data(droppable)").not(".ui-draggable-dragging").each(function(){var inst=$.data(this,'droppable');if(inst.options.greedy&&!inst.options.disabled&&inst.options.scope==draggable.options.scope&&inst.accept.call(inst.element[0],(draggable.currentItem||draggable.element))&&$.ui.intersect(draggable,$.extend(inst,{offset:inst.element.offset()}),inst.options.tolerance)){childrenIntersection=true;return false;}});if(childrenIntersection)return false;if(this.accept.call(this.element[0],(draggable.currentItem||draggable.element))){if(this.options.activeClass)this.element.removeClass(this.options.activeClass);if(this.options.hoverClass)this.element.removeClass(this.options.hoverClass);this._trigger('drop',event,this.ui(draggable));return this.element;}
return false;},ui:function(c){return{draggable:(c.currentItem||c.element),helper:c.helper,position:c.position,offset:c.positionAbs};}});$.extend($.ui.droppable,{version:"1.8.16"});$.ui.intersect=function(draggable,droppable,toleranceMode){if(!droppable.offset)return false;var x1=(draggable.positionAbs||draggable.position.absolute).left,x2=x1+draggable.helperProportions.width,y1=(draggable.positionAbs||draggable.position.absolute).top,y2=y1+draggable.helperProportions.height;var l=droppable.offset.left,r=l+droppable.proportions.width,t=droppable.offset.top,b=t+droppable.proportions.height;switch(toleranceMode){case'fit':return(l<=x1&&x2<=r&&t<=y1&&y2<=b);break;case'intersect':return(l<x1+(draggable.helperProportions.width/2)&&x2-(draggable.helperProportions.width/2)<r&&t<y1+(draggable.helperProportions.height/2)&&y2-(draggable.helperProportions.height/2)<b);break;case'pointer':var draggableLeft=((draggable.positionAbs||draggable.position.absolute).left+(draggable.clickOffset||draggable.offset.click).left),draggableTop=((draggable.positionAbs||draggable.position.absolute).top+(draggable.clickOffset||draggable.offset.click).top),isOver=$.ui.isOver(draggableTop,draggableLeft,t,l,droppable.proportions.height,droppable.proportions.width);return isOver;break;case'touch':return((y1>=t&&y1<=b)||(y2>=t&&y2<=b)||(y1<t&&y2>b))&&((x1>=l&&x1<=r)||(x2>=l&&x2<=r)||(x1<l&&x2>r));break;default:return false;break;}};$.ui.ddmanager={current:null,droppables:{'default':[]},prepareOffsets:function(t,event){var m=$.ui.ddmanager.droppables[t.options.scope]||[];var type=event?event.type:null;var list=(t.currentItem||t.element).find(":data(droppable)").andSelf();droppablesLoop:for(var i=0;i<m.length;i++){if(m[i].options.disabled||(t&&!m[i].accept.call(m[i].element[0],(t.currentItem||t.element))))continue;for(var j=0;j<list.length;j++){if(list[j]==m[i].element[0]){m[i].proportions.height=0;continue droppablesLoop;}};m[i].visible=m[i].element.css("display")!="none";if(!m[i].visible)continue;if(type=="mousedown")m[i]._activate.call(m[i],event);m[i].offset=m[i].element.offset();m[i].proportions={width:m[i].element[0].offsetWidth,height:m[i].element[0].offsetHeight};}},drop:function(draggable,event){var dropped=false;$.each($.ui.ddmanager.droppables[draggable.options.scope]||[],function(){if(!this.options)return;if(!this.options.disabled&&this.visible&&$.ui.intersect(draggable,this,this.options.tolerance))
dropped=dropped||this._drop.call(this,event);if(!this.options.disabled&&this.visible&&this.accept.call(this.element[0],(draggable.currentItem||draggable.element))){this.isout=1;this.isover=0;this._deactivate.call(this,event);}});return dropped;},dragStart:function(draggable,event){draggable.element.parents(":not(body,html)").bind("scroll.droppable",function(){if(!draggable.options.refreshPositions)$.ui.ddmanager.prepareOffsets(draggable,event);});},drag:function(draggable,event){if(draggable.options.refreshPositions)$.ui.ddmanager.prepareOffsets(draggable,event);$.each($.ui.ddmanager.droppables[draggable.options.scope]||[],function(){if(this.options.disabled||this.greedyChild||!this.visible)return;var intersects=$.ui.intersect(draggable,this,this.options.tolerance);var c=!intersects&&this.isover==1?'isout':(intersects&&this.isover==0?'isover':null);if(!c)return;var parentInstance;if(this.options.greedy){var parent=this.element.parents(':data(droppable):eq(0)');if(parent.length){parentInstance=$.data(parent[0],'droppable');parentInstance.greedyChild=(c=='isover'?1:0);}}
if(parentInstance&&c=='isover'){parentInstance['isover']=0;parentInstance['isout']=1;parentInstance._out.call(parentInstance,event);}
this[c]=1;this[c=='isout'?'isover':'isout']=0;this[c=="isover"?"_over":"_out"].call(this,event);if(parentInstance&&c=='isout'){parentInstance['isout']=0;parentInstance['isover']=1;parentInstance._over.call(parentInstance,event);}});},dragStop:function(draggable,event){draggable.element.parents(":not(body,html)").unbind("scroll.droppable");if(!draggable.options.refreshPositions)$.ui.ddmanager.prepareOffsets(draggable,event);}};})(jQuery);(function($,undefined){$.widget("ui.resizable",$.ui.mouse,{widgetEventPrefix:"resize",options:{alsoResize:false,animate:false,animateDuration:"slow",animateEasing:"swing",aspectRatio:false,autoHide:false,containment:false,ghost:false,grid:false,handles:"e,s,se",helper:false,maxHeight:null,maxWidth:null,minHeight:10,minWidth:10,zIndex:1000},_create:function(){var self=this,o=this.options;this.element.addClass("ui-resizable");$.extend(this,{_aspectRatio:!!(o.aspectRatio),aspectRatio:o.aspectRatio,originalElement:this.element,_proportionallyResizeElements:[],_helper:o.helper||o.ghost||o.animate?o.helper||'ui-resizable-helper':null});if(this.element[0].nodeName.match(/canvas|textarea|input|select|button|img/i)){if(/relative/.test(this.element.css('position'))&&$.browser.opera)
this.element.css({position:'relative',top:'auto',left:'auto'});this.element.wrap($('<div class="ui-wrapper" style="overflow: hidden;"></div>').css({position:this.element.css('position'),width:this.element.outerWidth(),height:this.element.outerHeight(),top:this.element.css('top'),left:this.element.css('left')}));this.element=this.element.parent().data("resizable",this.element.data('resizable'));this.elementIsWrapper=true;this.element.css({marginLeft:this.originalElement.css("marginLeft"),marginTop:this.originalElement.css("marginTop"),marginRight:this.originalElement.css("marginRight"),marginBottom:this.originalElement.css("marginBottom")});this.originalElement.css({marginLeft:0,marginTop:0,marginRight:0,marginBottom:0});this.originalResizeStyle=this.originalElement.css('resize');this.originalElement.css('resize','none');this._proportionallyResizeElements.push(this.originalElement.css({position:'static',zoom:1,display:'block'}));this.originalElement.css({margin:this.originalElement.css('margin')});this._proportionallyResize();}
this.handles=o.handles||(!$('.ui-resizable-handle',this.element).length?"e,s,se":{n:'.ui-resizable-n',e:'.ui-resizable-e',s:'.ui-resizable-s',w:'.ui-resizable-w',se:'.ui-resizable-se',sw:'.ui-resizable-sw',ne:'.ui-resizable-ne',nw:'.ui-resizable-nw'});if(this.handles.constructor==String){if(this.handles=='all')this.handles='n,e,s,w,se,sw,ne,nw';var n=this.handles.split(",");this.handles={};for(var i=0;i<n.length;i++){var handle=$.trim(n[i]),hname='ui-resizable-'+handle;var axis=$('<div class="ui-resizable-handle '+hname+'"></div>');if(/sw|se|ne|nw/.test(handle))axis.css({zIndex:++o.zIndex});if('se'==handle){axis.addClass('ui-icon ui-icon-gripsmall-diagonal-se');};this.handles[handle]='.ui-resizable-'+handle;this.element.append(axis);}}
this._renderAxis=function(target){target=target||this.element;for(var i in this.handles){if(this.handles[i].constructor==String)
this.handles[i]=$(this.handles[i],this.element).show();if(this.elementIsWrapper&&this.originalElement[0].nodeName.match(/textarea|input|select|button/i)){var axis=$(this.handles[i],this.element),padWrapper=0;padWrapper=/sw|ne|nw|se|n|s/.test(i)?axis.outerHeight():axis.outerWidth();var padPos=['padding',/ne|nw|n/.test(i)?'Top':/se|sw|s/.test(i)?'Bottom':/^e$/.test(i)?'Right':'Left'].join("");target.css(padPos,padWrapper);this._proportionallyResize();}
if(!$(this.handles[i]).length)
continue;}};this._renderAxis(this.element);this._handles=$('.ui-resizable-handle',this.element).disableSelection();this._handles.mouseover(function(){if(!self.resizing){if(this.className)
var axis=this.className.match(/ui-resizable-(se|sw|ne|nw|n|e|s|w)/i);self.axis=axis&&axis[1]?axis[1]:'se';}});if(o.autoHide){this._handles.hide();$(this.element).addClass("ui-resizable-autohide").hover(function(){if(o.disabled)return;$(this).removeClass("ui-resizable-autohide");self._handles.show();},function(){if(o.disabled)return;if(!self.resizing){$(this).addClass("ui-resizable-autohide");self._handles.hide();}});}
this._mouseInit();},destroy:function(){this._mouseDestroy();var _destroy=function(exp){$(exp).removeClass("ui-resizable ui-resizable-disabled ui-resizable-resizing").removeData("resizable").unbind(".resizable").find('.ui-resizable-handle').remove();};if(this.elementIsWrapper){_destroy(this.element);var wrapper=this.element;wrapper.after(this.originalElement.css({position:wrapper.css('position'),width:wrapper.outerWidth(),height:wrapper.outerHeight(),top:wrapper.css('top'),left:wrapper.css('left')})).remove();}
this.originalElement.css('resize',this.originalResizeStyle);_destroy(this.originalElement);return this;},_mouseCapture:function(event){var handle=false;for(var i in this.handles){if($(this.handles[i])[0]==event.target){handle=true;}}
return!this.options.disabled&&handle;},_mouseStart:function(event){var o=this.options,iniPos=this.element.position(),el=this.element;this.resizing=true;this.documentScroll={top:$(document).scrollTop(),left:$(document).scrollLeft()};if(el.is('.ui-draggable')||(/absolute/).test(el.css('position'))){el.css({position:'absolute',top:iniPos.top,left:iniPos.left});}
if($.browser.opera&&(/relative/).test(el.css('position')))
el.css({position:'relative',top:'auto',left:'auto'});this._renderProxy();var curleft=num(this.helper.css('left')),curtop=num(this.helper.css('top'));if(o.containment){curleft+=$(o.containment).scrollLeft()||0;curtop+=$(o.containment).scrollTop()||0;}
this.offset=this.helper.offset();this.position={left:curleft,top:curtop};this.size=this._helper?{width:el.outerWidth(),height:el.outerHeight()}:{width:el.width(),height:el.height()};this.originalSize=this._helper?{width:el.outerWidth(),height:el.outerHeight()}:{width:el.width(),height:el.height()};this.originalPosition={left:curleft,top:curtop};this.sizeDiff={width:el.outerWidth()-el.width(),height:el.outerHeight()-el.height()};this.originalMousePosition={left:event.pageX,top:event.pageY};this.aspectRatio=(typeof o.aspectRatio=='number')?o.aspectRatio:((this.originalSize.width/this.originalSize.height)||1);var cursor=$('.ui-resizable-'+this.axis).css('cursor');$('body').css('cursor',cursor=='auto'?this.axis+'-resize':cursor);el.addClass("ui-resizable-resizing");this._propagate("start",event);return true;},_mouseDrag:function(event){var el=this.helper,o=this.options,props={},self=this,smp=this.originalMousePosition,a=this.axis;var dx=(event.pageX-smp.left)||0,dy=(event.pageY-smp.top)||0;var trigger=this._change[a];if(!trigger)return false;var data=trigger.apply(this,[event,dx,dy]),ie6=$.browser.msie&&$.browser.version<7,csdif=this.sizeDiff;this._updateVirtualBoundaries(event.shiftKey);if(this._aspectRatio||event.shiftKey)
data=this._updateRatio(data,event);data=this._respectSize(data,event);this._propagate("resize",event);el.css({top:this.position.top+"px",left:this.position.left+"px",width:this.size.width+"px",height:this.size.height+"px"});if(!this._helper&&this._proportionallyResizeElements.length)
this._proportionallyResize();this._updateCache(data);this._trigger('resize',event,this.ui());return false;},_mouseStop:function(event){this.resizing=false;var o=this.options,self=this;if(this._helper){var pr=this._proportionallyResizeElements,ista=pr.length&&(/textarea/i).test(pr[0].nodeName),soffseth=ista&&$.ui.hasScroll(pr[0],'left')?0:self.sizeDiff.height,soffsetw=ista?0:self.sizeDiff.width;var s={width:(self.helper.width()-soffsetw),height:(self.helper.height()-soffseth)},left=(parseInt(self.element.css('left'),10)+(self.position.left-self.originalPosition.left))||null,top=(parseInt(self.element.css('top'),10)+(self.position.top-self.originalPosition.top))||null;if(!o.animate)
this.element.css($.extend(s,{top:top,left:left}));self.helper.height(self.size.height);self.helper.width(self.size.width);if(this._helper&&!o.animate)this._proportionallyResize();}
$('body').css('cursor','auto');this.element.removeClass("ui-resizable-resizing");this._propagate("stop",event);if(this._helper)this.helper.remove();return false;},_updateVirtualBoundaries:function(forceAspectRatio){var o=this.options,pMinWidth,pMaxWidth,pMinHeight,pMaxHeight,b;b={minWidth:isNumber(o.minWidth)?o.minWidth:0,maxWidth:isNumber(o.maxWidth)?o.maxWidth:Infinity,minHeight:isNumber(o.minHeight)?o.minHeight:0,maxHeight:isNumber(o.maxHeight)?o.maxHeight:Infinity};if(this._aspectRatio||forceAspectRatio){pMinWidth=b.minHeight*this.aspectRatio;pMinHeight=b.minWidth/this.aspectRatio;pMaxWidth=b.maxHeight*this.aspectRatio;pMaxHeight=b.maxWidth/this.aspectRatio;if(pMinWidth>b.minWidth)b.minWidth=pMinWidth;if(pMinHeight>b.minHeight)b.minHeight=pMinHeight;if(pMaxWidth<b.maxWidth)b.maxWidth=pMaxWidth;if(pMaxHeight<b.maxHeight)b.maxHeight=pMaxHeight;}
this._vBoundaries=b;},_updateCache:function(data){var o=this.options;this.offset=this.helper.offset();if(isNumber(data.left))this.position.left=data.left;if(isNumber(data.top))this.position.top=data.top;if(isNumber(data.height))this.size.height=data.height;if(isNumber(data.width))this.size.width=data.width;},_updateRatio:function(data,event){var o=this.options,cpos=this.position,csize=this.size,a=this.axis;if(isNumber(data.height))data.width=(data.height*this.aspectRatio);else if(isNumber(data.width))data.height=(data.width/this.aspectRatio);if(a=='sw'){data.left=cpos.left+(csize.width-data.width);data.top=null;}
if(a=='nw'){data.top=cpos.top+(csize.height-data.height);data.left=cpos.left+(csize.width-data.width);}
return data;},_respectSize:function(data,event){var el=this.helper,o=this._vBoundaries,pRatio=this._aspectRatio||event.shiftKey,a=this.axis,ismaxw=isNumber(data.width)&&o.maxWidth&&(o.maxWidth<data.width),ismaxh=isNumber(data.height)&&o.maxHeight&&(o.maxHeight<data.height),isminw=isNumber(data.width)&&o.minWidth&&(o.minWidth>data.width),isminh=isNumber(data.height)&&o.minHeight&&(o.minHeight>data.height);if(isminw)data.width=o.minWidth;if(isminh)data.height=o.minHeight;if(ismaxw)data.width=o.maxWidth;if(ismaxh)data.height=o.maxHeight;var dw=this.originalPosition.left+this.originalSize.width,dh=this.position.top+this.size.height;var cw=/sw|nw|w/.test(a),ch=/nw|ne|n/.test(a);if(isminw&&cw)data.left=dw-o.minWidth;if(ismaxw&&cw)data.left=dw-o.maxWidth;if(isminh&&ch)data.top=dh-o.minHeight;if(ismaxh&&ch)data.top=dh-o.maxHeight;var isNotwh=!data.width&&!data.height;if(isNotwh&&!data.left&&data.top)data.top=null;else if(isNotwh&&!data.top&&data.left)data.left=null;return data;},_proportionallyResize:function(){var o=this.options;if(!this._proportionallyResizeElements.length)return;var element=this.helper||this.element;for(var i=0;i<this._proportionallyResizeElements.length;i++){var prel=this._proportionallyResizeElements[i];if(!this.borderDif){var b=[prel.css('borderTopWidth'),prel.css('borderRightWidth'),prel.css('borderBottomWidth'),prel.css('borderLeftWidth')],p=[prel.css('paddingTop'),prel.css('paddingRight'),prel.css('paddingBottom'),prel.css('paddingLeft')];this.borderDif=$.map(b,function(v,i){var border=parseInt(v,10)||0,padding=parseInt(p[i],10)||0;return border+padding;});}
if($.browser.msie&&!(!($(element).is(':hidden')||$(element).parents(':hidden').length)))
continue;prel.css({height:(element.height()-this.borderDif[0]-this.borderDif[2])||0,width:(element.width()-this.borderDif[1]-this.borderDif[3])||0});};},_renderProxy:function(){var el=this.element,o=this.options;this.elementOffset=el.offset();if(this._helper){this.helper=this.helper||$('<div style="overflow:hidden;"></div>');var ie6=$.browser.msie&&$.browser.version<7,ie6offset=(ie6?1:0),pxyoffset=(ie6?2:-1);this.helper.addClass(this._helper).css({width:this.element.outerWidth()+pxyoffset,height:this.element.outerHeight()+pxyoffset,position:'absolute',left:this.elementOffset.left-ie6offset+'px',top:this.elementOffset.top-ie6offset+'px',zIndex:++o.zIndex});this.helper.appendTo("body").disableSelection();}else{this.helper=this.element;}},_change:{e:function(event,dx,dy){return{width:this.originalSize.width+dx};},w:function(event,dx,dy){var o=this.options,cs=this.originalSize,sp=this.originalPosition;return{left:sp.left+dx,width:cs.width-dx};},n:function(event,dx,dy){var o=this.options,cs=this.originalSize,sp=this.originalPosition;return{top:sp.top+dy,height:cs.height-dy};},s:function(event,dx,dy){return{height:this.originalSize.height+dy};},se:function(event,dx,dy){return $.extend(this._change.s.apply(this,arguments),this._change.e.apply(this,[event,dx,dy]));},sw:function(event,dx,dy){return $.extend(this._change.s.apply(this,arguments),this._change.w.apply(this,[event,dx,dy]));},ne:function(event,dx,dy){return $.extend(this._change.n.apply(this,arguments),this._change.e.apply(this,[event,dx,dy]));},nw:function(event,dx,dy){return $.extend(this._change.n.apply(this,arguments),this._change.w.apply(this,[event,dx,dy]));}},_propagate:function(n,event){$.ui.plugin.call(this,n,[event,this.ui()]);(n!="resize"&&this._trigger(n,event,this.ui()));},plugins:{},ui:function(){return{originalElement:this.originalElement,element:this.element,helper:this.helper,position:this.position,size:this.size,originalSize:this.originalSize,originalPosition:this.originalPosition};}});$.extend($.ui.resizable,{version:"1.8.16"});$.ui.plugin.add("resizable","alsoResize",{start:function(event,ui){var self=$(this).data("resizable"),o=self.options;var _store=function(exp){$(exp).each(function(){var el=$(this);el.data("resizable-alsoresize",{width:parseInt(el.width(),10),height:parseInt(el.height(),10),left:parseInt(el.css('left'),10),top:parseInt(el.css('top'),10),position:el.css('position')});});};if(typeof(o.alsoResize)=='object'&&!o.alsoResize.parentNode){if(o.alsoResize.length){o.alsoResize=o.alsoResize[0];_store(o.alsoResize);}
else{$.each(o.alsoResize,function(exp){_store(exp);});}}else{_store(o.alsoResize);}},resize:function(event,ui){var self=$(this).data("resizable"),o=self.options,os=self.originalSize,op=self.originalPosition;var delta={height:(self.size.height-os.height)||0,width:(self.size.width-os.width)||0,top:(self.position.top-op.top)||0,left:(self.position.left-op.left)||0},_alsoResize=function(exp,c){$(exp).each(function(){var el=$(this),start=$(this).data("resizable-alsoresize"),style={},css=c&&c.length?c:el.parents(ui.originalElement[0]).length?['width','height']:['width','height','top','left'];$.each(css,function(i,prop){var sum=(start[prop]||0)+(delta[prop]||0);if(sum&&sum>=0)
style[prop]=sum||null;});if($.browser.opera&&/relative/.test(el.css('position'))){self._revertToRelativePosition=true;el.css({position:'absolute',top:'auto',left:'auto'});}
el.css(style);});};if(typeof(o.alsoResize)=='object'&&!o.alsoResize.nodeType){$.each(o.alsoResize,function(exp,c){_alsoResize(exp,c);});}else{_alsoResize(o.alsoResize);}},stop:function(event,ui){var self=$(this).data("resizable"),o=self.options;var _reset=function(exp){$(exp).each(function(){var el=$(this);el.css({position:el.data("resizable-alsoresize").position});});};if(self._revertToRelativePosition){self._revertToRelativePosition=false;if(typeof(o.alsoResize)=='object'&&!o.alsoResize.nodeType){$.each(o.alsoResize,function(exp){_reset(exp);});}else{_reset(o.alsoResize);}}
$(this).removeData("resizable-alsoresize");}});$.ui.plugin.add("resizable","animate",{stop:function(event,ui){var self=$(this).data("resizable"),o=self.options;var pr=self._proportionallyResizeElements,ista=pr.length&&(/textarea/i).test(pr[0].nodeName),soffseth=ista&&$.ui.hasScroll(pr[0],'left')?0:self.sizeDiff.height,soffsetw=ista?0:self.sizeDiff.width;var style={width:(self.size.width-soffsetw),height:(self.size.height-soffseth)},left=(parseInt(self.element.css('left'),10)+(self.position.left-self.originalPosition.left))||null,top=(parseInt(self.element.css('top'),10)+(self.position.top-self.originalPosition.top))||null;self.element.animate($.extend(style,top&&left?{top:top,left:left}:{}),{duration:o.animateDuration,easing:o.animateEasing,step:function(){var data={width:parseInt(self.element.css('width'),10),height:parseInt(self.element.css('height'),10),top:parseInt(self.element.css('top'),10),left:parseInt(self.element.css('left'),10)};if(pr&&pr.length)$(pr[0]).css({width:data.width,height:data.height});self._updateCache(data);self._propagate("resize",event);}});}});$.ui.plugin.add("resizable","containment",{start:function(event,ui){var self=$(this).data("resizable"),o=self.options,el=self.element;var oc=o.containment,ce=(oc instanceof $)?oc.get(0):(/parent/.test(oc))?el.parent().get(0):oc;if(!ce)return;self.containerElement=$(ce);if(/document/.test(oc)||oc==document){self.containerOffset={left:0,top:0};self.containerPosition={left:0,top:0};self.parentData={element:$(document),left:0,top:0,width:$(document).width(),height:$(document).height()||document.body.parentNode.scrollHeight};}
else{var element=$(ce),p=[];$(["Top","Right","Left","Bottom"]).each(function(i,name){p[i]=num(element.css("padding"+name));});self.containerOffset=element.offset();self.containerPosition=element.position();self.containerSize={height:(element.innerHeight()-p[3]),width:(element.innerWidth()-p[1])};var co=self.containerOffset,ch=self.containerSize.height,cw=self.containerSize.width,width=($.ui.hasScroll(ce,"left")?ce.scrollWidth:cw),height=($.ui.hasScroll(ce)?ce.scrollHeight:ch);self.parentData={element:ce,left:co.left,top:co.top,width:width,height:height};}},resize:function(event,ui){var self=$(this).data("resizable"),o=self.options,ps=self.containerSize,co=self.containerOffset,cs=self.size,cp=self.position,pRatio=self._aspectRatio||event.shiftKey,cop={top:0,left:0},ce=self.containerElement;if(ce[0]!=document&&(/static/).test(ce.css('position')))cop=co;if(cp.left<(self._helper?co.left:0)){self.size.width=self.size.width+(self._helper?(self.position.left-co.left):(self.position.left-cop.left));if(pRatio)self.size.height=self.size.width/o.aspectRatio;self.position.left=o.helper?co.left:0;}
if(cp.top<(self._helper?co.top:0)){self.size.height=self.size.height+(self._helper?(self.position.top-co.top):self.position.top);if(pRatio)self.size.width=self.size.height*o.aspectRatio;self.position.top=self._helper?co.top:0;}
self.offset.left=self.parentData.left+self.position.left;self.offset.top=self.parentData.top+self.position.top;var woset=Math.abs((self._helper?self.offset.left-cop.left:(self.offset.left-cop.left))+self.sizeDiff.width),hoset=Math.abs((self._helper?self.offset.top-cop.top:(self.offset.top-co.top))+self.sizeDiff.height);var isParent=self.containerElement.get(0)==self.element.parent().get(0),isOffsetRelative=/relative|absolute/.test(self.containerElement.css('position'));if(isParent&&isOffsetRelative)woset-=self.parentData.left;if(woset+self.size.width>=self.parentData.width){self.size.width=self.parentData.width-woset;if(pRatio)self.size.height=self.size.width/self.aspectRatio;}
if(hoset+self.size.height>=self.parentData.height){self.size.height=self.parentData.height-hoset;if(pRatio)self.size.width=self.size.height*self.aspectRatio;}},stop:function(event,ui){var self=$(this).data("resizable"),o=self.options,cp=self.position,co=self.containerOffset,cop=self.containerPosition,ce=self.containerElement;var helper=$(self.helper),ho=helper.offset(),w=helper.outerWidth()-self.sizeDiff.width,h=helper.outerHeight()-self.sizeDiff.height;if(self._helper&&!o.animate&&(/relative/).test(ce.css('position')))
$(this).css({left:ho.left-cop.left-co.left,width:w,height:h});if(self._helper&&!o.animate&&(/static/).test(ce.css('position')))
$(this).css({left:ho.left-cop.left-co.left,width:w,height:h});}});$.ui.plugin.add("resizable","ghost",{start:function(event,ui){var self=$(this).data("resizable"),o=self.options,cs=self.size;self.ghost=self.originalElement.clone();self.ghost.css({opacity:.25,display:'block',position:'relative',height:cs.height,width:cs.width,margin:0,left:0,top:0}).addClass('ui-resizable-ghost').addClass(typeof o.ghost=='string'?o.ghost:'');self.ghost.appendTo(self.helper);},resize:function(event,ui){var self=$(this).data("resizable"),o=self.options;if(self.ghost)self.ghost.css({position:'relative',height:self.size.height,width:self.size.width});},stop:function(event,ui){var self=$(this).data("resizable"),o=self.options;if(self.ghost&&self.helper)self.helper.get(0).removeChild(self.ghost.get(0));}});$.ui.plugin.add("resizable","grid",{resize:function(event,ui){var self=$(this).data("resizable"),o=self.options,cs=self.size,os=self.originalSize,op=self.originalPosition,a=self.axis,ratio=o._aspectRatio||event.shiftKey;o.grid=typeof o.grid=="number"?[o.grid,o.grid]:o.grid;var ox=Math.round((cs.width-os.width)/(o.grid[0]||1))*(o.grid[0]||1),oy=Math.round((cs.height-os.height)/(o.grid[1]||1))*(o.grid[1]||1);if(/^(se|s|e)$/.test(a)){self.size.width=os.width+ox;self.size.height=os.height+oy;}
else if(/^(ne)$/.test(a)){self.size.width=os.width+ox;self.size.height=os.height+oy;self.position.top=op.top-oy;}
else if(/^(sw)$/.test(a)){self.size.width=os.width+ox;self.size.height=os.height+oy;self.position.left=op.left-ox;}
else{self.size.width=os.width+ox;self.size.height=os.height+oy;self.position.top=op.top-oy;self.position.left=op.left-ox;}}});var num=function(v){return parseInt(v,10)||0;};var isNumber=function(value){return!isNaN(parseInt(value,10));};})(jQuery);(function($,undefined){$.widget("ui.selectable",$.ui.mouse,{options:{appendTo:'body',autoRefresh:true,distance:0,filter:'*',tolerance:'touch'},_create:function(){var self=this;this.element.addClass("ui-selectable");this.dragged=false;var selectees;this.refresh=function(){selectees=$(self.options.filter,self.element[0]);selectees.each(function(){var $this=$(this);var pos=$this.offset();$.data(this,"selectable-item",{element:this,$element:$this,left:pos.left,top:pos.top,right:pos.left+$this.outerWidth(),bottom:pos.top+$this.outerHeight(),startselected:false,selected:$this.hasClass('ui-selected'),selecting:$this.hasClass('ui-selecting'),unselecting:$this.hasClass('ui-unselecting')});});};this.refresh();this.selectees=selectees.addClass("ui-selectee");this._mouseInit();this.helper=$("<div class='ui-selectable-helper'></div>");},destroy:function(){this.selectees.removeClass("ui-selectee").removeData("selectable-item");this.element.removeClass("ui-selectable ui-selectable-disabled").removeData("selectable").unbind(".selectable");this._mouseDestroy();return this;},_mouseStart:function(event){var self=this;this.opos=[event.pageX,event.pageY];if(this.options.disabled)
return;var options=this.options;this.selectees=$(options.filter,this.element[0]);this._trigger("start",event);$(options.appendTo).append(this.helper);this.helper.css({"left":event.clientX,"top":event.clientY,"width":0,"height":0});if(options.autoRefresh){this.refresh();}
this.selectees.filter('.ui-selected').each(function(){var selectee=$.data(this,"selectable-item");selectee.startselected=true;if(!event.metaKey){selectee.$element.removeClass('ui-selected');selectee.selected=false;selectee.$element.addClass('ui-unselecting');selectee.unselecting=true;self._trigger("unselecting",event,{unselecting:selectee.element});}});$(event.target).parents().andSelf().each(function(){var selectee=$.data(this,"selectable-item");if(selectee){var doSelect=!event.metaKey||!selectee.$element.hasClass('ui-selected');selectee.$element.removeClass(doSelect?"ui-unselecting":"ui-selected").addClass(doSelect?"ui-selecting":"ui-unselecting");selectee.unselecting=!doSelect;selectee.selecting=doSelect;selectee.selected=doSelect;if(doSelect){self._trigger("selecting",event,{selecting:selectee.element});}else{self._trigger("unselecting",event,{unselecting:selectee.element});}
return false;}});},_mouseDrag:function(event){var self=this;this.dragged=true;if(this.options.disabled)
return;var options=this.options;var x1=this.opos[0],y1=this.opos[1],x2=event.pageX,y2=event.pageY;if(x1>x2){var tmp=x2;x2=x1;x1=tmp;}
if(y1>y2){var tmp=y2;y2=y1;y1=tmp;}
this.helper.css({left:x1,top:y1,width:x2-x1,height:y2-y1});this.selectees.each(function(){var selectee=$.data(this,"selectable-item");if(!selectee||selectee.element==self.element[0])
return;var hit=false;if(options.tolerance=='touch'){hit=(!(selectee.left>x2||selectee.right<x1||selectee.top>y2||selectee.bottom<y1));}else if(options.tolerance=='fit'){hit=(selectee.left>x1&&selectee.right<x2&&selectee.top>y1&&selectee.bottom<y2);}
if(hit){if(selectee.selected){selectee.$element.removeClass('ui-selected');selectee.selected=false;}
if(selectee.unselecting){selectee.$element.removeClass('ui-unselecting');selectee.unselecting=false;}
if(!selectee.selecting){selectee.$element.addClass('ui-selecting');selectee.selecting=true;self._trigger("selecting",event,{selecting:selectee.element});}}else{if(selectee.selecting){if(event.metaKey&&selectee.startselected){selectee.$element.removeClass('ui-selecting');selectee.selecting=false;selectee.$element.addClass('ui-selected');selectee.selected=true;}else{selectee.$element.removeClass('ui-selecting');selectee.selecting=false;if(selectee.startselected){selectee.$element.addClass('ui-unselecting');selectee.unselecting=true;}
self._trigger("unselecting",event,{unselecting:selectee.element});}}
if(selectee.selected){if(!event.metaKey&&!selectee.startselected){selectee.$element.removeClass('ui-selected');selectee.selected=false;selectee.$element.addClass('ui-unselecting');selectee.unselecting=true;self._trigger("unselecting",event,{unselecting:selectee.element});}}}});return false;},_mouseStop:function(event){var self=this;this.dragged=false;var options=this.options;$('.ui-unselecting',this.element[0]).each(function(){var selectee=$.data(this,"selectable-item");selectee.$element.removeClass('ui-unselecting');selectee.unselecting=false;selectee.startselected=false;self._trigger("unselected",event,{unselected:selectee.element});});$('.ui-selecting',this.element[0]).each(function(){var selectee=$.data(this,"selectable-item");selectee.$element.removeClass('ui-selecting').addClass('ui-selected');selectee.selecting=false;selectee.selected=true;selectee.startselected=true;self._trigger("selected",event,{selected:selectee.element});});this._trigger("stop",event);this.helper.remove();return false;}});$.extend($.ui.selectable,{version:"1.8.16"});})(jQuery);(function($,undefined){$.widget("ui.sortable",$.ui.mouse,{widgetEventPrefix:"sort",options:{appendTo:"parent",axis:false,connectWith:false,containment:false,cursor:'auto',cursorAt:false,dropOnEmpty:true,forcePlaceholderSize:false,forceHelperSize:false,grid:false,handle:false,helper:"original",items:'> *',opacity:false,placeholder:false,revert:false,scroll:true,scrollSensitivity:20,scrollSpeed:20,scope:"default",tolerance:"intersect",zIndex:1000},_create:function(){var o=this.options;this.containerCache={};this.element.addClass("ui-sortable");this.refresh();this.floating=this.items.length?o.axis==='x'||(/left|right/).test(this.items[0].item.css('float'))||(/inline|table-cell/).test(this.items[0].item.css('display')):false;this.offset=this.element.offset();this._mouseInit();},destroy:function(){this.element.removeClass("ui-sortable ui-sortable-disabled").removeData("sortable").unbind(".sortable");this._mouseDestroy();for(var i=this.items.length-1;i>=0;i--)
this.items[i].item.removeData("sortable-item");return this;},_setOption:function(key,value){if(key==="disabled"){this.options[key]=value;this.widget()
[value?"addClass":"removeClass"]("ui-sortable-disabled");}else{$.Widget.prototype._setOption.apply(this,arguments);}},_mouseCapture:function(event,overrideHandle){if(this.reverting){return false;}
if(this.options.disabled||this.options.type=='static')return false;this._refreshItems(event);var currentItem=null,self=this,nodes=$(event.target).parents().each(function(){if($.data(this,'sortable-item')==self){currentItem=$(this);return false;}});if($.data(event.target,'sortable-item')==self)currentItem=$(event.target);if(!currentItem)return false;if(this.options.handle&&!overrideHandle){var validHandle=false;$(this.options.handle,currentItem).find("*").andSelf().each(function(){if(this==event.target)validHandle=true;});if(!validHandle)return false;}
this.currentItem=currentItem;this._removeCurrentsFromItems();return true;},_mouseStart:function(event,overrideHandle,noActivation){var o=this.options,self=this;this.currentContainer=this;this.refreshPositions();this.helper=this._createHelper(event);this._cacheHelperProportions();this._cacheMargins();this.scrollParent=this.helper.scrollParent();this.offset=this.currentItem.offset();this.offset={top:this.offset.top-this.margins.top,left:this.offset.left-this.margins.left};this.helper.css("position","absolute");this.cssPosition=this.helper.css("position");$.extend(this.offset,{click:{left:event.pageX-this.offset.left,top:event.pageY-this.offset.top},parent:this._getParentOffset(),relative:this._getRelativeOffset()});this.originalPosition=this._generatePosition(event);this.originalPageX=event.pageX;this.originalPageY=event.pageY;(o.cursorAt&&this._adjustOffsetFromHelper(o.cursorAt));this.domPosition={prev:this.currentItem.prev()[0],parent:this.currentItem.parent()[0]};if(this.helper[0]!=this.currentItem[0]){this.currentItem.hide();}
this._createPlaceholder();if(o.containment)
this._setContainment();if(o.cursor){if($('body').css("cursor"))this._storedCursor=$('body').css("cursor");$('body').css("cursor",o.cursor);}
if(o.opacity){if(this.helper.css("opacity"))this._storedOpacity=this.helper.css("opacity");this.helper.css("opacity",o.opacity);}
if(o.zIndex){if(this.helper.css("zIndex"))this._storedZIndex=this.helper.css("zIndex");this.helper.css("zIndex",o.zIndex);}
if(this.scrollParent[0]!=document&&this.scrollParent[0].tagName!='HTML')
this.overflowOffset=this.scrollParent.offset();this._trigger("start",event,this._uiHash());if(!this._preserveHelperProportions)
this._cacheHelperProportions();if(!noActivation){for(var i=this.containers.length-1;i>=0;i--){this.containers[i]._trigger("activate",event,self._uiHash(this));}}
if($.ui.ddmanager)
$.ui.ddmanager.current=this;if($.ui.ddmanager&&!o.dropBehaviour)
$.ui.ddmanager.prepareOffsets(this,event);this.dragging=true;this.helper.addClass("ui-sortable-helper");this._mouseDrag(event);return true;},_mouseDrag:function(event){this.position=this._generatePosition(event);this.positionAbs=this._convertPositionTo("absolute");if(!this.lastPositionAbs){this.lastPositionAbs=this.positionAbs;}
if(this.options.scroll){var o=this.options,scrolled=false;if(this.scrollParent[0]!=document&&this.scrollParent[0].tagName!='HTML'){if((this.overflowOffset.top+this.scrollParent[0].offsetHeight)-event.pageY<o.scrollSensitivity)
this.scrollParent[0].scrollTop=scrolled=this.scrollParent[0].scrollTop+o.scrollSpeed;else if(event.pageY-this.overflowOffset.top<o.scrollSensitivity)
this.scrollParent[0].scrollTop=scrolled=this.scrollParent[0].scrollTop-o.scrollSpeed;if((this.overflowOffset.left+this.scrollParent[0].offsetWidth)-event.pageX<o.scrollSensitivity)
this.scrollParent[0].scrollLeft=scrolled=this.scrollParent[0].scrollLeft+o.scrollSpeed;else if(event.pageX-this.overflowOffset.left<o.scrollSensitivity)
this.scrollParent[0].scrollLeft=scrolled=this.scrollParent[0].scrollLeft-o.scrollSpeed;}else{if(event.pageY-$(document).scrollTop()<o.scrollSensitivity)
scrolled=$(document).scrollTop($(document).scrollTop()-o.scrollSpeed);else if($(window).height()-(event.pageY-$(document).scrollTop())<o.scrollSensitivity)
scrolled=$(document).scrollTop($(document).scrollTop()+o.scrollSpeed);if(event.pageX-$(document).scrollLeft()<o.scrollSensitivity)
scrolled=$(document).scrollLeft($(document).scrollLeft()-o.scrollSpeed);else if($(window).width()-(event.pageX-$(document).scrollLeft())<o.scrollSensitivity)
scrolled=$(document).scrollLeft($(document).scrollLeft()+o.scrollSpeed);}
if(scrolled!==false&&$.ui.ddmanager&&!o.dropBehaviour)
$.ui.ddmanager.prepareOffsets(this,event);}
this.positionAbs=this._convertPositionTo("absolute");if(!this.options.axis||this.options.axis!="y")this.helper[0].style.left=this.position.left+'px';if(!this.options.axis||this.options.axis!="x")this.helper[0].style.top=this.position.top+'px';for(var i=this.items.length-1;i>=0;i--){var item=this.items[i],itemElement=item.item[0],intersection=this._intersectsWithPointer(item);if(!intersection)continue;if(itemElement!=this.currentItem[0]&&this.placeholder[intersection==1?"next":"prev"]()[0]!=itemElement&&!$.ui.contains(this.placeholder[0],itemElement)&&(this.options.type=='semi-dynamic'?!$.ui.contains(this.element[0],itemElement):true)){this.direction=intersection==1?"down":"up";if(this.options.tolerance=="pointer"||this._intersectsWithSides(item)){this._rearrange(event,item);}else{break;}
this._trigger("change",event,this._uiHash());break;}}
this._contactContainers(event);if($.ui.ddmanager)$.ui.ddmanager.drag(this,event);this._trigger('sort',event,this._uiHash());this.lastPositionAbs=this.positionAbs;return false;},_mouseStop:function(event,noPropagation){if(!event)return;if($.ui.ddmanager&&!this.options.dropBehaviour)
$.ui.ddmanager.drop(this,event);if(this.options.revert){var self=this;var cur=self.placeholder.offset();self.reverting=true;$(this.helper).animate({left:cur.left-this.offset.parent.left-self.margins.left+(this.offsetParent[0]==document.body?0:this.offsetParent[0].scrollLeft),top:cur.top-this.offset.parent.top-self.margins.top+(this.offsetParent[0]==document.body?0:this.offsetParent[0].scrollTop)},parseInt(this.options.revert,10)||500,function(){self._clear(event);});}else{this._clear(event,noPropagation);}
return false;},cancel:function(){var self=this;if(this.dragging){this._mouseUp({target:null});if(this.options.helper=="original")
this.currentItem.css(this._storedCSS).removeClass("ui-sortable-helper");else
this.currentItem.show();for(var i=this.containers.length-1;i>=0;i--){this.containers[i]._trigger("deactivate",null,self._uiHash(this));if(this.containers[i].containerCache.over){this.containers[i]._trigger("out",null,self._uiHash(this));this.containers[i].containerCache.over=0;}}}
if(this.placeholder){if(this.placeholder[0].parentNode)this.placeholder[0].parentNode.removeChild(this.placeholder[0]);if(this.options.helper!="original"&&this.helper&&this.helper[0].parentNode)this.helper.remove();$.extend(this,{helper:null,dragging:false,reverting:false,_noFinalSort:null});if(this.domPosition.prev){$(this.domPosition.prev).after(this.currentItem);}else{$(this.domPosition.parent).prepend(this.currentItem);}}
return this;},serialize:function(o){var items=this._getItemsAsjQuery(o&&o.connected);var str=[];o=o||{};$(items).each(function(){var res=($(o.item||this).attr(o.attribute||'id')||'').match(o.expression||(/(.+)[-=_](.+)/));if(res)str.push((o.key||res[1]+'[]')+'='+(o.key&&o.expression?res[1]:res[2]));});if(!str.length&&o.key){str.push(o.key+'=');}
return str.join('&');},toArray:function(o){var items=this._getItemsAsjQuery(o&&o.connected);var ret=[];o=o||{};items.each(function(){ret.push($(o.item||this).attr(o.attribute||'id')||'');});return ret;},_intersectsWith:function(item){var x1=this.positionAbs.left,x2=x1+this.helperProportions.width,y1=this.positionAbs.top,y2=y1+this.helperProportions.height;var l=item.left,r=l+item.width,t=item.top,b=t+item.height;var dyClick=this.offset.click.top,dxClick=this.offset.click.left;var isOverElement=(y1+dyClick)>t&&(y1+dyClick)<b&&(x1+dxClick)>l&&(x1+dxClick)<r;if(this.options.tolerance=="pointer"||this.options.forcePointerForContainers||(this.options.tolerance!="pointer"&&this.helperProportions[this.floating?'width':'height']>item[this.floating?'width':'height'])){return isOverElement;}else{return(l<x1+(this.helperProportions.width/2)&&x2-(this.helperProportions.width/2)<r&&t<y1+(this.helperProportions.height/2)&&y2-(this.helperProportions.height/2)<b);}},_intersectsWithPointer:function(item){var isOverElementHeight=$.ui.isOverAxis(this.positionAbs.top+this.offset.click.top,item.top,item.height),isOverElementWidth=$.ui.isOverAxis(this.positionAbs.left+this.offset.click.left,item.left,item.width),isOverElement=isOverElementHeight&&isOverElementWidth,verticalDirection=this._getDragVerticalDirection(),horizontalDirection=this._getDragHorizontalDirection();if(!isOverElement)
return false;return this.floating?(((horizontalDirection&&horizontalDirection=="right")||verticalDirection=="down")?2:1):(verticalDirection&&(verticalDirection=="down"?2:1));},_intersectsWithSides:function(item){var isOverBottomHalf=$.ui.isOverAxis(this.positionAbs.top+this.offset.click.top,item.top+(item.height/2),item.height),isOverRightHalf=$.ui.isOverAxis(this.positionAbs.left+this.offset.click.left,item.left+(item.width/2),item.width),verticalDirection=this._getDragVerticalDirection(),horizontalDirection=this._getDragHorizontalDirection();if(this.floating&&horizontalDirection){return((horizontalDirection=="right"&&isOverRightHalf)||(horizontalDirection=="left"&&!isOverRightHalf));}else{return verticalDirection&&((verticalDirection=="down"&&isOverBottomHalf)||(verticalDirection=="up"&&!isOverBottomHalf));}},_getDragVerticalDirection:function(){var delta=this.positionAbs.top-this.lastPositionAbs.top;return delta!=0&&(delta>0?"down":"up");},_getDragHorizontalDirection:function(){var delta=this.positionAbs.left-this.lastPositionAbs.left;return delta!=0&&(delta>0?"right":"left");},refresh:function(event){this._refreshItems(event);this.refreshPositions();return this;},_connectWith:function(){var options=this.options;return options.connectWith.constructor==String?[options.connectWith]:options.connectWith;},_getItemsAsjQuery:function(connected){var self=this;var items=[];var queries=[];var connectWith=this._connectWith();if(connectWith&&connected){for(var i=connectWith.length-1;i>=0;i--){var cur=$(connectWith[i]);for(var j=cur.length-1;j>=0;j--){var inst=$.data(cur[j],'sortable');if(inst&&inst!=this&&!inst.options.disabled){queries.push([$.isFunction(inst.options.items)?inst.options.items.call(inst.element):$(inst.options.items,inst.element).not(".ui-sortable-helper").not('.ui-sortable-placeholder'),inst]);}};};}
queries.push([$.isFunction(this.options.items)?this.options.items.call(this.element,null,{options:this.options,item:this.currentItem}):$(this.options.items,this.element).not(".ui-sortable-helper").not('.ui-sortable-placeholder'),this]);for(var i=queries.length-1;i>=0;i--){queries[i][0].each(function(){items.push(this);});};return $(items);},_removeCurrentsFromItems:function(){var list=this.currentItem.find(":data(sortable-item)");for(var i=0;i<this.items.length;i++){for(var j=0;j<list.length;j++){if(list[j]==this.items[i].item[0])
this.items.splice(i,1);};};},_refreshItems:function(event){this.items=[];this.containers=[this];var items=this.items;var self=this;var queries=[[$.isFunction(this.options.items)?this.options.items.call(this.element[0],event,{item:this.currentItem}):$(this.options.items,this.element),this]];var connectWith=this._connectWith();if(connectWith){for(var i=connectWith.length-1;i>=0;i--){var cur=$(connectWith[i]);for(var j=cur.length-1;j>=0;j--){var inst=$.data(cur[j],'sortable');if(inst&&inst!=this&&!inst.options.disabled){queries.push([$.isFunction(inst.options.items)?inst.options.items.call(inst.element[0],event,{item:this.currentItem}):$(inst.options.items,inst.element),inst]);this.containers.push(inst);}};};}
for(var i=queries.length-1;i>=0;i--){var targetData=queries[i][1];var _queries=queries[i][0];for(var j=0,queriesLength=_queries.length;j<queriesLength;j++){var item=$(_queries[j]);item.data('sortable-item',targetData);items.push({item:item,instance:targetData,width:0,height:0,left:0,top:0});};};},refreshPositions:function(fast){if(this.offsetParent&&this.helper){this.offset.parent=this._getParentOffset();}
for(var i=this.items.length-1;i>=0;i--){var item=this.items[i];if(item.instance!=this.currentContainer&&this.currentContainer&&item.item[0]!=this.currentItem[0])
continue;var t=this.options.toleranceElement?$(this.options.toleranceElement,item.item):item.item;if(!fast){item.width=t.outerWidth();item.height=t.outerHeight();}
var p=t.offset();item.left=p.left;item.top=p.top;};if(this.options.custom&&this.options.custom.refreshContainers){this.options.custom.refreshContainers.call(this);}else{for(var i=this.containers.length-1;i>=0;i--){var p=this.containers[i].element.offset();this.containers[i].containerCache.left=p.left;this.containers[i].containerCache.top=p.top;this.containers[i].containerCache.width=this.containers[i].element.outerWidth();this.containers[i].containerCache.height=this.containers[i].element.outerHeight();};}
return this;},_createPlaceholder:function(that){var self=that||this,o=self.options;if(!o.placeholder||o.placeholder.constructor==String){var className=o.placeholder;o.placeholder={element:function(){var el=$(document.createElement(self.currentItem[0].nodeName)).addClass(className||self.currentItem[0].className+" ui-sortable-placeholder").removeClass("ui-sortable-helper")[0];if(!className)
el.style.visibility="hidden";return el;},update:function(container,p){if(className&&!o.forcePlaceholderSize)return;if(!p.height()){p.height(self.currentItem.innerHeight()-parseInt(self.currentItem.css('paddingTop')||0,10)-parseInt(self.currentItem.css('paddingBottom')||0,10));};if(!p.width()){p.width(self.currentItem.innerWidth()-parseInt(self.currentItem.css('paddingLeft')||0,10)-parseInt(self.currentItem.css('paddingRight')||0,10));};}};}
self.placeholder=$(o.placeholder.element.call(self.element,self.currentItem));self.currentItem.after(self.placeholder);o.placeholder.update(self,self.placeholder);},_contactContainers:function(event){var innermostContainer=null,innermostIndex=null;for(var i=this.containers.length-1;i>=0;i--){if($.ui.contains(this.currentItem[0],this.containers[i].element[0]))
continue;if(this._intersectsWith(this.containers[i].containerCache)){if(innermostContainer&&$.ui.contains(this.containers[i].element[0],innermostContainer.element[0]))
continue;innermostContainer=this.containers[i];innermostIndex=i;}else{if(this.containers[i].containerCache.over){this.containers[i]._trigger("out",event,this._uiHash(this));this.containers[i].containerCache.over=0;}}}
if(!innermostContainer)return;if(this.containers.length===1){this.containers[innermostIndex]._trigger("over",event,this._uiHash(this));this.containers[innermostIndex].containerCache.over=1;}else if(this.currentContainer!=this.containers[innermostIndex]){var dist=10000;var itemWithLeastDistance=null;var base=this.positionAbs[this.containers[innermostIndex].floating?'left':'top'];for(var j=this.items.length-1;j>=0;j--){if(!$.ui.contains(this.containers[innermostIndex].element[0],this.items[j].item[0]))continue;var cur=this.items[j][this.containers[innermostIndex].floating?'left':'top'];if(Math.abs(cur-base)<dist){dist=Math.abs(cur-base);itemWithLeastDistance=this.items[j];}}
if(!itemWithLeastDistance&&!this.options.dropOnEmpty)
return;this.currentContainer=this.containers[innermostIndex];itemWithLeastDistance?this._rearrange(event,itemWithLeastDistance,null,true):this._rearrange(event,null,this.containers[innermostIndex].element,true);this._trigger("change",event,this._uiHash());this.containers[innermostIndex]._trigger("change",event,this._uiHash(this));this.options.placeholder.update(this.currentContainer,this.placeholder);this.containers[innermostIndex]._trigger("over",event,this._uiHash(this));this.containers[innermostIndex].containerCache.over=1;}},_createHelper:function(event){var o=this.options;var helper=$.isFunction(o.helper)?$(o.helper.apply(this.element[0],[event,this.currentItem])):(o.helper=='clone'?this.currentItem.clone():this.currentItem);if(!helper.parents('body').length)
$(o.appendTo!='parent'?o.appendTo:this.currentItem[0].parentNode)[0].appendChild(helper[0]);if(helper[0]==this.currentItem[0])
this._storedCSS={width:this.currentItem[0].style.width,height:this.currentItem[0].style.height,position:this.currentItem.css("position"),top:this.currentItem.css("top"),left:this.currentItem.css("left")};if(helper[0].style.width==''||o.forceHelperSize)helper.width(this.currentItem.width());if(helper[0].style.height==''||o.forceHelperSize)helper.height(this.currentItem.height());return helper;},_adjustOffsetFromHelper:function(obj){if(typeof obj=='string'){obj=obj.split(' ');}
if($.isArray(obj)){obj={left:+obj[0],top:+obj[1]||0};}
if('left'in obj){this.offset.click.left=obj.left+this.margins.left;}
if('right'in obj){this.offset.click.left=this.helperProportions.width-obj.right+this.margins.left;}
if('top'in obj){this.offset.click.top=obj.top+this.margins.top;}
if('bottom'in obj){this.offset.click.top=this.helperProportions.height-obj.bottom+this.margins.top;}},_getParentOffset:function(){this.offsetParent=this.helper.offsetParent();var po=this.offsetParent.offset();if(this.cssPosition=='absolute'&&this.scrollParent[0]!=document&&$.ui.contains(this.scrollParent[0],this.offsetParent[0])){po.left+=this.scrollParent.scrollLeft();po.top+=this.scrollParent.scrollTop();}
if((this.offsetParent[0]==document.body)||(this.offsetParent[0].tagName&&this.offsetParent[0].tagName.toLowerCase()=='html'&&$.browser.msie))
po={top:0,left:0};return{top:po.top+(parseInt(this.offsetParent.css("borderTopWidth"),10)||0),left:po.left+(parseInt(this.offsetParent.css("borderLeftWidth"),10)||0)};},_getRelativeOffset:function(){if(this.cssPosition=="relative"){var p=this.currentItem.position();return{top:p.top-(parseInt(this.helper.css("top"),10)||0)+this.scrollParent.scrollTop(),left:p.left-(parseInt(this.helper.css("left"),10)||0)+this.scrollParent.scrollLeft()};}else{return{top:0,left:0};}},_cacheMargins:function(){this.margins={left:(parseInt(this.currentItem.css("marginLeft"),10)||0),top:(parseInt(this.currentItem.css("marginTop"),10)||0)};},_cacheHelperProportions:function(){this.helperProportions={width:this.helper.outerWidth(),height:this.helper.outerHeight()};},_setContainment:function(){var o=this.options;if(o.containment=='parent')o.containment=this.helper[0].parentNode;if(o.containment=='document'||o.containment=='window')this.containment=[0-this.offset.relative.left-this.offset.parent.left,0-this.offset.relative.top-this.offset.parent.top,$(o.containment=='document'?document:window).width()-this.helperProportions.width-this.margins.left,($(o.containment=='document'?document:window).height()||document.body.parentNode.scrollHeight)-this.helperProportions.height-this.margins.top];if(!(/^(document|window|parent)$/).test(o.containment)){var ce=$(o.containment)[0];var co=$(o.containment).offset();var over=($(ce).css("overflow")!='hidden');this.containment=[co.left+(parseInt($(ce).css("borderLeftWidth"),10)||0)+(parseInt($(ce).css("paddingLeft"),10)||0)-this.margins.left,co.top+(parseInt($(ce).css("borderTopWidth"),10)||0)+(parseInt($(ce).css("paddingTop"),10)||0)-this.margins.top,co.left+(over?Math.max(ce.scrollWidth,ce.offsetWidth):ce.offsetWidth)-(parseInt($(ce).css("borderLeftWidth"),10)||0)-(parseInt($(ce).css("paddingRight"),10)||0)-this.helperProportions.width-this.margins.left,co.top+(over?Math.max(ce.scrollHeight,ce.offsetHeight):ce.offsetHeight)-(parseInt($(ce).css("borderTopWidth"),10)||0)-(parseInt($(ce).css("paddingBottom"),10)||0)-this.helperProportions.height-this.margins.top];}},_convertPositionTo:function(d,pos){if(!pos)pos=this.position;var mod=d=="absolute"?1:-1;var o=this.options,scroll=this.cssPosition=='absolute'&&!(this.scrollParent[0]!=document&&$.ui.contains(this.scrollParent[0],this.offsetParent[0]))?this.offsetParent:this.scrollParent,scrollIsRootNode=(/(html|body)/i).test(scroll[0].tagName);return{top:(pos.top
+this.offset.relative.top*mod
+this.offset.parent.top*mod
-($.browser.safari&&this.cssPosition=='fixed'?0:(this.cssPosition=='fixed'?-this.scrollParent.scrollTop():(scrollIsRootNode?0:scroll.scrollTop()))*mod)),left:(pos.left
+this.offset.relative.left*mod
+this.offset.parent.left*mod
-($.browser.safari&&this.cssPosition=='fixed'?0:(this.cssPosition=='fixed'?-this.scrollParent.scrollLeft():scrollIsRootNode?0:scroll.scrollLeft())*mod))};},_generatePosition:function(event){var o=this.options,scroll=this.cssPosition=='absolute'&&!(this.scrollParent[0]!=document&&$.ui.contains(this.scrollParent[0],this.offsetParent[0]))?this.offsetParent:this.scrollParent,scrollIsRootNode=(/(html|body)/i).test(scroll[0].tagName);if(this.cssPosition=='relative'&&!(this.scrollParent[0]!=document&&this.scrollParent[0]!=this.offsetParent[0])){this.offset.relative=this._getRelativeOffset();}
var pageX=event.pageX;var pageY=event.pageY;if(this.originalPosition){if(this.containment){if(event.pageX-this.offset.click.left<this.containment[0])pageX=this.containment[0]+this.offset.click.left;if(event.pageY-this.offset.click.top<this.containment[1])pageY=this.containment[1]+this.offset.click.top;if(event.pageX-this.offset.click.left>this.containment[2])pageX=this.containment[2]+this.offset.click.left;if(event.pageY-this.offset.click.top>this.containment[3])pageY=this.containment[3]+this.offset.click.top;}
if(o.grid){var top=this.originalPageY+Math.round((pageY-this.originalPageY)/o.grid[1])*o.grid[1];pageY=this.containment?(!(top-this.offset.click.top<this.containment[1]||top-this.offset.click.top>this.containment[3])?top:(!(top-this.offset.click.top<this.containment[1])?top-o.grid[1]:top+o.grid[1])):top;var left=this.originalPageX+Math.round((pageX-this.originalPageX)/o.grid[0])*o.grid[0];pageX=this.containment?(!(left-this.offset.click.left<this.containment[0]||left-this.offset.click.left>this.containment[2])?left:(!(left-this.offset.click.left<this.containment[0])?left-o.grid[0]:left+o.grid[0])):left;}}
return{top:(pageY
-this.offset.click.top
-this.offset.relative.top
-this.offset.parent.top
+($.browser.safari&&this.cssPosition=='fixed'?0:(this.cssPosition=='fixed'?-this.scrollParent.scrollTop():(scrollIsRootNode?0:scroll.scrollTop())))),left:(pageX
-this.offset.click.left
-this.offset.relative.left
-this.offset.parent.left
+($.browser.safari&&this.cssPosition=='fixed'?0:(this.cssPosition=='fixed'?-this.scrollParent.scrollLeft():scrollIsRootNode?0:scroll.scrollLeft())))};},_rearrange:function(event,i,a,hardRefresh){a?a[0].appendChild(this.placeholder[0]):i.item[0].parentNode.insertBefore(this.placeholder[0],(this.direction=='down'?i.item[0]:i.item[0].nextSibling));this.counter=this.counter?++this.counter:1;var self=this,counter=this.counter;window.setTimeout(function(){if(counter==self.counter)self.refreshPositions(!hardRefresh);},0);},_clear:function(event,noPropagation){this.reverting=false;var delayedTriggers=[],self=this;if(!this._noFinalSort&&this.currentItem.parent().length)this.placeholder.before(this.currentItem);this._noFinalSort=null;if(this.helper[0]==this.currentItem[0]){for(var i in this._storedCSS){if(this._storedCSS[i]=='auto'||this._storedCSS[i]=='static')this._storedCSS[i]='';}
this.currentItem.css(this._storedCSS).removeClass("ui-sortable-helper");}else{this.currentItem.show();}
if(this.fromOutside&&!noPropagation)delayedTriggers.push(function(event){this._trigger("receive",event,this._uiHash(this.fromOutside));});if((this.fromOutside||this.domPosition.prev!=this.currentItem.prev().not(".ui-sortable-helper")[0]||this.domPosition.parent!=this.currentItem.parent()[0])&&!noPropagation)delayedTriggers.push(function(event){this._trigger("update",event,this._uiHash());});if(!$.ui.contains(this.element[0],this.currentItem[0])){if(!noPropagation)delayedTriggers.push(function(event){this._trigger("remove",event,this._uiHash());});for(var i=this.containers.length-1;i>=0;i--){if($.ui.contains(this.containers[i].element[0],this.currentItem[0])&&!noPropagation){delayedTriggers.push((function(c){return function(event){c._trigger("receive",event,this._uiHash(this));};}).call(this,this.containers[i]));delayedTriggers.push((function(c){return function(event){c._trigger("update",event,this._uiHash(this));};}).call(this,this.containers[i]));}};};for(var i=this.containers.length-1;i>=0;i--){if(!noPropagation)delayedTriggers.push((function(c){return function(event){c._trigger("deactivate",event,this._uiHash(this));};}).call(this,this.containers[i]));if(this.containers[i].containerCache.over){delayedTriggers.push((function(c){return function(event){c._trigger("out",event,this._uiHash(this));};}).call(this,this.containers[i]));this.containers[i].containerCache.over=0;}}
if(this._storedCursor)$('body').css("cursor",this._storedCursor);if(this._storedOpacity)this.helper.css("opacity",this._storedOpacity);if(this._storedZIndex)this.helper.css("zIndex",this._storedZIndex=='auto'?'':this._storedZIndex);this.dragging=false;if(this.cancelHelperRemoval){if(!noPropagation){this._trigger("beforeStop",event,this._uiHash());for(var i=0;i<delayedTriggers.length;i++){delayedTriggers[i].call(this,event);};this._trigger("stop",event,this._uiHash());}
return false;}
if(!noPropagation)this._trigger("beforeStop",event,this._uiHash());this.placeholder[0].parentNode.removeChild(this.placeholder[0]);if(this.helper[0]!=this.currentItem[0])this.helper.remove();this.helper=null;if(!noPropagation){for(var i=0;i<delayedTriggers.length;i++){delayedTriggers[i].call(this,event);};this._trigger("stop",event,this._uiHash());}
this.fromOutside=false;return true;},_trigger:function(){if($.Widget.prototype._trigger.apply(this,arguments)===false){this.cancel();}},_uiHash:function(inst){var self=inst||this;return{helper:self.helper,placeholder:self.placeholder||$([]),position:self.position,originalPosition:self.originalPosition,offset:self.positionAbs,item:self.currentItem,sender:inst?inst.element:null};}});$.extend($.ui.sortable,{version:"1.8.16"});})(jQuery);(function($,undefined){$.widget("ui.accordion",{options:{active:0,animated:"slide",autoHeight:true,clearStyle:false,collapsible:false,event:"click",fillSpace:false,header:"> li > :first-child,> :not(li):even",icons:{header:"ui-icon-triangle-1-e",headerSelected:"ui-icon-triangle-1-s"},navigation:false,navigationFilter:function(){return this.href.toLowerCase()===location.href.toLowerCase();}},_create:function(){var self=this,options=self.options;self.running=0;self.element.addClass("ui-accordion ui-widget ui-helper-reset").children("li").addClass("ui-accordion-li-fix");self.headers=self.element.find(options.header).addClass("ui-accordion-header ui-helper-reset ui-state-default ui-corner-all").bind("mouseenter.accordion",function(){if(options.disabled){return;}
$(this).addClass("ui-state-hover");}).bind("mouseleave.accordion",function(){if(options.disabled){return;}
$(this).removeClass("ui-state-hover");}).bind("focus.accordion",function(){if(options.disabled){return;}
$(this).addClass("ui-state-focus");}).bind("blur.accordion",function(){if(options.disabled){return;}
$(this).removeClass("ui-state-focus");});self.headers.next().addClass("ui-accordion-content ui-helper-reset ui-widget-content ui-corner-bottom");if(options.navigation){var current=self.element.find("a").filter(options.navigationFilter).eq(0);if(current.length){var header=current.closest(".ui-accordion-header");if(header.length){self.active=header;}else{self.active=current.closest(".ui-accordion-content").prev();}}}
self.active=self._findActive(self.active||options.active).addClass("ui-state-default ui-state-active").toggleClass("ui-corner-all").toggleClass("ui-corner-top");self.active.next().addClass("ui-accordion-content-active");self._createIcons();self.resize();self.element.attr("role","tablist");self.headers.attr("role","tab").bind("keydown.accordion",function(event){return self._keydown(event);}).next().attr("role","tabpanel");self.headers.not(self.active||"").attr({"aria-expanded":"false","aria-selected":"false",tabIndex:-1}).next().hide();if(!self.active.length){self.headers.eq(0).attr("tabIndex",0);}else{self.active.attr({"aria-expanded":"true","aria-selected":"true",tabIndex:0});}
if(!$.browser.safari){self.headers.find("a").attr("tabIndex",-1);}
if(options.event){self.headers.bind(options.event.split(" ").join(".accordion ")+".accordion",function(event){self._clickHandler.call(self,event,this);event.preventDefault();});}},_createIcons:function(){var options=this.options;if(options.icons){$("<span></span>").addClass("ui-icon "+options.icons.header).prependTo(this.headers);this.active.children(".ui-icon").toggleClass(options.icons.header).toggleClass(options.icons.headerSelected);this.element.addClass("ui-accordion-icons");}},_destroyIcons:function(){this.headers.children(".ui-icon").remove();this.element.removeClass("ui-accordion-icons");},destroy:function(){var options=this.options;this.element.removeClass("ui-accordion ui-widget ui-helper-reset").removeAttr("role");this.headers.unbind(".accordion").removeClass("ui-accordion-header ui-accordion-disabled ui-helper-reset ui-state-default ui-corner-all ui-state-active ui-state-disabled ui-corner-top").removeAttr("role").removeAttr("aria-expanded").removeAttr("aria-selected").removeAttr("tabIndex");this.headers.find("a").removeAttr("tabIndex");this._destroyIcons();var contents=this.headers.next().css("display","").removeAttr("role").removeClass("ui-helper-reset ui-widget-content ui-corner-bottom ui-accordion-content ui-accordion-content-active ui-accordion-disabled ui-state-disabled");if(options.autoHeight||options.fillHeight){contents.css("height","");}
return $.Widget.prototype.destroy.call(this);},_setOption:function(key,value){$.Widget.prototype._setOption.apply(this,arguments);if(key=="active"){this.activate(value);}
if(key=="icons"){this._destroyIcons();if(value){this._createIcons();}}
if(key=="disabled"){this.headers.add(this.headers.next())
[value?"addClass":"removeClass"]("ui-accordion-disabled ui-state-disabled");}},_keydown:function(event){if(this.options.disabled||event.altKey||event.ctrlKey){return;}
var keyCode=$.ui.keyCode,length=this.headers.length,currentIndex=this.headers.index(event.target),toFocus=false;switch(event.keyCode){case keyCode.RIGHT:case keyCode.DOWN:toFocus=this.headers[(currentIndex+1)%length];break;case keyCode.LEFT:case keyCode.UP:toFocus=this.headers[(currentIndex-1+length)%length];break;case keyCode.SPACE:case keyCode.ENTER:this._clickHandler({target:event.target},event.target);event.preventDefault();}
if(toFocus){$(event.target).attr("tabIndex",-1);$(toFocus).attr("tabIndex",0);toFocus.focus();return false;}
return true;},resize:function(){var options=this.options,maxHeight;if(options.fillSpace){if($.browser.msie){var defOverflow=this.element.parent().css("overflow");this.element.parent().css("overflow","hidden");}
maxHeight=this.element.parent().height();if($.browser.msie){this.element.parent().css("overflow",defOverflow);}
this.headers.each(function(){maxHeight-=$(this).outerHeight(true);});this.headers.next().each(function(){$(this).height(Math.max(0,maxHeight-
$(this).innerHeight()+$(this).height()));}).css("overflow","auto");}else if(options.autoHeight){maxHeight=0;this.headers.next().each(function(){maxHeight=Math.max(maxHeight,$(this).height("").height());}).height(maxHeight);}
return this;},activate:function(index){this.options.active=index;var active=this._findActive(index)[0];this._clickHandler({target:active},active);return this;},_findActive:function(selector){return selector?typeof selector==="number"?this.headers.filter(":eq("+selector+")"):this.headers.not(this.headers.not(selector)):selector===false?$([]):this.headers.filter(":eq(0)");},_clickHandler:function(event,target){var options=this.options;if(options.disabled){return;}
if(!event.target){if(!options.collapsible){return;}
this.active.removeClass("ui-state-active ui-corner-top").addClass("ui-state-default ui-corner-all").children(".ui-icon").removeClass(options.icons.headerSelected).addClass(options.icons.header);this.active.next().addClass("ui-accordion-content-active");var toHide=this.active.next(),data={options:options,newHeader:$([]),oldHeader:options.active,newContent:$([]),oldContent:toHide},toShow=(this.active=$([]));this._toggle(toShow,toHide,data);return;}
var clicked=$(event.currentTarget||target),clickedIsActive=clicked[0]===this.active[0];options.active=options.collapsible&&clickedIsActive?false:this.headers.index(clicked);if(this.running||(!options.collapsible&&clickedIsActive)){return;}
var active=this.active,toShow=clicked.next(),toHide=this.active.next(),data={options:options,newHeader:clickedIsActive&&options.collapsible?$([]):clicked,oldHeader:this.active,newContent:clickedIsActive&&options.collapsible?$([]):toShow,oldContent:toHide},down=this.headers.index(this.active[0])>this.headers.index(clicked[0]);this.active=clickedIsActive?$([]):clicked;this._toggle(toShow,toHide,data,clickedIsActive,down);active.removeClass("ui-state-active ui-corner-top").addClass("ui-state-default ui-corner-all").children(".ui-icon").removeClass(options.icons.headerSelected).addClass(options.icons.header);if(!clickedIsActive){clicked.removeClass("ui-state-default ui-corner-all").addClass("ui-state-active ui-corner-top").children(".ui-icon").removeClass(options.icons.header).addClass(options.icons.headerSelected);clicked.next().addClass("ui-accordion-content-active");}
return;},_toggle:function(toShow,toHide,data,clickedIsActive,down){var self=this,options=self.options;self.toShow=toShow;self.toHide=toHide;self.data=data;var complete=function(){if(!self){return;}
return self._completed.apply(self,arguments);};self._trigger("changestart",null,self.data);self.running=toHide.size()===0?toShow.size():toHide.size();if(options.animated){var animOptions={};if(options.collapsible&&clickedIsActive){animOptions={toShow:$([]),toHide:toHide,complete:complete,down:down,autoHeight:options.autoHeight||options.fillSpace};}else{animOptions={toShow:toShow,toHide:toHide,complete:complete,down:down,autoHeight:options.autoHeight||options.fillSpace};}
if(!options.proxied){options.proxied=options.animated;}
if(!options.proxiedDuration){options.proxiedDuration=options.duration;}
options.animated=$.isFunction(options.proxied)?options.proxied(animOptions):options.proxied;options.duration=$.isFunction(options.proxiedDuration)?options.proxiedDuration(animOptions):options.proxiedDuration;var animations=$.ui.accordion.animations,duration=options.duration,easing=options.animated;if(easing&&!animations[easing]&&!$.easing[easing]){easing="slide";}
if(!animations[easing]){animations[easing]=function(options){this.slide(options,{easing:easing,duration:duration||700});};}
animations[easing](animOptions);}else{if(options.collapsible&&clickedIsActive){toShow.toggle();}else{toHide.hide();toShow.show();}
complete(true);}
toHide.prev().attr({"aria-expanded":"false","aria-selected":"false",tabIndex:-1}).blur();toShow.prev().attr({"aria-expanded":"true","aria-selected":"true",tabIndex:0}).focus();},_completed:function(cancel){this.running=cancel?0:--this.running;if(this.running){return;}
if(this.options.clearStyle){this.toShow.add(this.toHide).css({height:"",overflow:""});}
this.toHide.removeClass("ui-accordion-content-active");if(this.toHide.length){this.toHide.parent()[0].className=this.toHide.parent()[0].className;}
this._trigger("change",null,this.data);}});$.extend($.ui.accordion,{version:"1.8.16",animations:{slide:function(options,additions){options=$.extend({easing:"swing",duration:300},options,additions);if(!options.toHide.size()){options.toShow.animate({height:"show",paddingTop:"show",paddingBottom:"show"},options);return;}
if(!options.toShow.size()){options.toHide.animate({height:"hide",paddingTop:"hide",paddingBottom:"hide"},options);return;}
var overflow=options.toShow.css("overflow"),percentDone=0,showProps={},hideProps={},fxAttrs=["height","paddingTop","paddingBottom"],originalWidth;var s=options.toShow;originalWidth=s[0].style.width;s.width(parseInt(s.parent().width(),10)
-parseInt(s.css("paddingLeft"),10)
-parseInt(s.css("paddingRight"),10)
-(parseInt(s.css("borderLeftWidth"),10)||0)
-(parseInt(s.css("borderRightWidth"),10)||0));$.each(fxAttrs,function(i,prop){hideProps[prop]="hide";var parts=(""+$.css(options.toShow[0],prop)).match(/^([\d+-.]+)(.*)$/);showProps[prop]={value:parts[1],unit:parts[2]||"px"};});options.toShow.css({height:0,overflow:"hidden"}).show();options.toHide.filter(":hidden").each(options.complete).end().filter(":visible").animate(hideProps,{step:function(now,settings){if(settings.prop=="height"){percentDone=(settings.end-settings.start===0)?0:(settings.now-settings.start)/(settings.end-settings.start);}
options.toShow[0].style[settings.prop]=(percentDone*showProps[settings.prop].value)
+showProps[settings.prop].unit;},duration:options.duration,easing:options.easing,complete:function(){if(!options.autoHeight){options.toShow.css("height","");}
options.toShow.css({width:originalWidth,overflow:overflow});options.complete();}});},bounceslide:function(options){this.slide(options,{easing:options.down?"easeOutBounce":"swing",duration:options.down?1000:200});}}});})(jQuery);(function($,undefined){var requestIndex=0;$.widget("ui.autocomplete",{options:{appendTo:"body",autoFocus:false,delay:300,minLength:1,position:{my:"left top",at:"left bottom",collision:"none"},source:null},pending:0,_create:function(){var self=this,doc=this.element[0].ownerDocument,suppressKeyPress;this.element.addClass("ui-autocomplete-input").attr("autocomplete","off").attr({role:"textbox","aria-autocomplete":"list","aria-haspopup":"true"}).bind("keydown.autocomplete",function(event){if(self.options.disabled||self.element.propAttr("readOnly")){return;}
suppressKeyPress=false;var keyCode=$.ui.keyCode;switch(event.keyCode){case keyCode.PAGE_UP:self._move("previousPage",event);break;case keyCode.PAGE_DOWN:self._move("nextPage",event);break;case keyCode.UP:self._move("previous",event);event.preventDefault();break;case keyCode.DOWN:self._move("next",event);event.preventDefault();break;case keyCode.ENTER:case keyCode.NUMPAD_ENTER:if(self.menu.active){suppressKeyPress=true;event.preventDefault();}
case keyCode.TAB:if(!self.menu.active){return;}
self.menu.select(event);break;case keyCode.ESCAPE:self.element.val(self.term);self.close(event);break;default:clearTimeout(self.searching);self.searching=setTimeout(function(){if(self.term!=self.element.val()){self.selectedItem=null;self.search(null,event);}},self.options.delay);break;}}).bind("keypress.autocomplete",function(event){if(suppressKeyPress){suppressKeyPress=false;event.preventDefault();}}).bind("focus.autocomplete",function(){if(self.options.disabled){return;}
self.selectedItem=null;self.previous=self.element.val();}).bind("blur.autocomplete",function(event){if(self.options.disabled){return;}
clearTimeout(self.searching);self.closing=setTimeout(function(){self.close(event);self._change(event);},150);});this._initSource();this.response=function(){return self._response.apply(self,arguments);};this.menu=$("<ul></ul>").addClass("ui-autocomplete").appendTo($(this.options.appendTo||"body",doc)[0]).mousedown(function(event){var menuElement=self.menu.element[0];if(!$(event.target).closest(".ui-menu-item").length){setTimeout(function(){$(document).one('mousedown',function(event){if(event.target!==self.element[0]&&event.target!==menuElement&&!$.ui.contains(menuElement,event.target)){self.close();}});},1);}
setTimeout(function(){clearTimeout(self.closing);},13);}).menu({focus:function(event,ui){var item=ui.item.data("item.autocomplete");if(false!==self._trigger("focus",event,{item:item})){if(/^key/.test(event.originalEvent.type)){self.element.val(item.value);}}},selected:function(event,ui){var item=ui.item.data("item.autocomplete"),previous=self.previous;if(self.element[0]!==doc.activeElement){self.element.focus();self.previous=previous;setTimeout(function(){self.previous=previous;self.selectedItem=item;},1);}
if(false!==self._trigger("select",event,{item:item})){self.element.val(item.value);}
self.term=self.element.val();self.close(event);self.selectedItem=item;},blur:function(event,ui){if(self.menu.element.is(":visible")&&(self.element.val()!==self.term)){self.element.val(self.term);}}}).zIndex(this.element.zIndex()+1).css({top:0,left:0}).hide().data("menu");if($.fn.bgiframe){this.menu.element.bgiframe();}},destroy:function(){this.element.removeClass("ui-autocomplete-input").removeAttr("autocomplete").removeAttr("role").removeAttr("aria-autocomplete").removeAttr("aria-haspopup");this.menu.element.remove();$.Widget.prototype.destroy.call(this);},_setOption:function(key,value){$.Widget.prototype._setOption.apply(this,arguments);if(key==="source"){this._initSource();}
if(key==="appendTo"){this.menu.element.appendTo($(value||"body",this.element[0].ownerDocument)[0])}
if(key==="disabled"&&value&&this.xhr){this.xhr.abort();}},_initSource:function(){var self=this,array,url;if($.isArray(this.options.source)){array=this.options.source;this.source=function(request,response){response($.ui.autocomplete.filter(array,request.term));};}else if(typeof this.options.source==="string"){url=this.options.source;this.source=function(request,response){if(self.xhr){self.xhr.abort();}
self.xhr=$.ajax({url:url,data:request,dataType:"json",autocompleteRequest:++requestIndex,success:function(data,status){if(this.autocompleteRequest===requestIndex){response(data);}},error:function(){if(this.autocompleteRequest===requestIndex){response([]);}}});};}else{this.source=this.options.source;}},search:function(value,event){value=value!=null?value:this.element.val();this.term=this.element.val();if(value.length<this.options.minLength){return this.close(event);}
clearTimeout(this.closing);if(this._trigger("search",event)===false){return;}
return this._search(value);},_search:function(value){this.pending++;this.element.addClass("ui-autocomplete-loading");this.source({term:value},this.response);},_response:function(content){if(!this.options.disabled&&content&&content.length){content=this._normalize(content);this._suggest(content);this._trigger("open");}else{this.close();}
this.pending--;if(!this.pending){this.element.removeClass("ui-autocomplete-loading");}},close:function(event){clearTimeout(this.closing);if(this.menu.element.is(":visible")){this.menu.element.hide();this.menu.deactivate();this._trigger("close",event);}},_change:function(event){if(this.previous!==this.element.val()){this._trigger("change",event,{item:this.selectedItem});}},_normalize:function(items){if(items.length&&items[0].label&&items[0].value){return items;}
return $.map(items,function(item){if(typeof item==="string"){return{label:item,value:item};}
return $.extend({label:item.label||item.value,value:item.value||item.label},item);});},_suggest:function(items){var ul=this.menu.element.empty().zIndex(this.element.zIndex()+1);this._renderMenu(ul,items);this.menu.deactivate();this.menu.refresh();ul.show();this._resizeMenu();ul.position($.extend({of:this.element},this.options.position));if(this.options.autoFocus){this.menu.next(new $.Event("mouseover"));}},_resizeMenu:function(){var ul=this.menu.element;ul.outerWidth(Math.max(ul.width("").outerWidth(),this.element.outerWidth()));},_renderMenu:function(ul,items){var self=this;$.each(items,function(index,item){self._renderItem(ul,item);});},_renderItem:function(ul,item){return $("<li></li>").data("item.autocomplete",item).append($("<a></a>").text(item.label)).appendTo(ul);},_move:function(direction,event){if(!this.menu.element.is(":visible")){this.search(null,event);return;}
if(this.menu.first()&&/^previous/.test(direction)||this.menu.last()&&/^next/.test(direction)){this.element.val(this.term);this.menu.deactivate();return;}
this.menu[direction](event);},widget:function(){return this.menu.element;}});$.extend($.ui.autocomplete,{escapeRegex:function(value){return value.replace(/[-[\]{}()*+?.,\\^$|#\s]/g,"\\$&");},filter:function(array,term){var matcher=new RegExp($.ui.autocomplete.escapeRegex(term),"i");return $.grep(array,function(value){return matcher.test(value.label||value.value||value);});}});}(jQuery));(function($){$.widget("ui.menu",{_create:function(){var self=this;this.element.addClass("ui-menu ui-widget ui-widget-content ui-corner-all").attr({role:"listbox","aria-activedescendant":"ui-active-menuitem"}).click(function(event){if(!$(event.target).closest(".ui-menu-item a").length){return;}
event.preventDefault();self.select(event);});this.refresh();},refresh:function(){var self=this;var items=this.element.children("li:not(.ui-menu-item):has(a)").addClass("ui-menu-item").attr("role","menuitem");items.children("a").addClass("ui-corner-all").attr("tabindex",-1).mouseenter(function(event){self.activate(event,$(this).parent());}).mouseleave(function(){self.deactivate();});},activate:function(event,item){this.deactivate();if(this.hasScroll()){var offset=item.offset().top-this.element.offset().top,scroll=this.element.scrollTop(),elementHeight=this.element.height();if(offset<0){this.element.scrollTop(scroll+offset);}else if(offset>=elementHeight){this.element.scrollTop(scroll+offset-elementHeight+item.height());}}
this.active=item.eq(0).children("a").addClass("ui-state-hover").attr("id","ui-active-menuitem").end();this._trigger("focus",event,{item:item});},deactivate:function(){if(!this.active){return;}
this.active.children("a").removeClass("ui-state-hover").removeAttr("id");this._trigger("blur");this.active=null;},next:function(event){this.move("next",".ui-menu-item:first",event);},previous:function(event){this.move("prev",".ui-menu-item:last",event);},first:function(){return this.active&&!this.active.prevAll(".ui-menu-item").length;},last:function(){return this.active&&!this.active.nextAll(".ui-menu-item").length;},move:function(direction,edge,event){if(!this.active){this.activate(event,this.element.children(edge));return;}
var next=this.active[direction+"All"](".ui-menu-item").eq(0);if(next.length){this.activate(event,next);}else{this.activate(event,this.element.children(edge));}},nextPage:function(event){if(this.hasScroll()){if(!this.active||this.last()){this.activate(event,this.element.children(".ui-menu-item:first"));return;}
var base=this.active.offset().top,height=this.element.height(),result=this.element.children(".ui-menu-item").filter(function(){var close=$(this).offset().top-base-height+$(this).height();return close<10&&close>-10;});if(!result.length){result=this.element.children(".ui-menu-item:last");}
this.activate(event,result);}else{this.activate(event,this.element.children(".ui-menu-item").filter(!this.active||this.last()?":first":":last"));}},previousPage:function(event){if(this.hasScroll()){if(!this.active||this.first()){this.activate(event,this.element.children(".ui-menu-item:last"));return;}
var base=this.active.offset().top,height=this.element.height();result=this.element.children(".ui-menu-item").filter(function(){var close=$(this).offset().top-base+height-$(this).height();return close<10&&close>-10;});if(!result.length){result=this.element.children(".ui-menu-item:first");}
this.activate(event,result);}else{this.activate(event,this.element.children(".ui-menu-item").filter(!this.active||this.first()?":last":":first"));}},hasScroll:function(){return this.element.height()<this.element[$.fn.prop?"prop":"attr"]("scrollHeight");},select:function(event){this._trigger("selected",event,{item:this.active});}});}(jQuery));(function($,undefined){var lastActive,startXPos,startYPos,clickDragged,baseClasses="ui-button ui-widget ui-state-default ui-corner-all",stateClasses="ui-state-hover ui-state-active ",typeClasses="ui-button-icons-only ui-button-icon-only ui-button-text-icons ui-button-text-icon-primary ui-button-text-icon-secondary ui-button-text-only",formResetHandler=function(){var buttons=$(this).find(":ui-button");setTimeout(function(){buttons.button("refresh");},1);},radioGroup=function(radio){var name=radio.name,form=radio.form,radios=$([]);if(name){if(form){radios=$(form).find("[name='"+name+"']");}else{radios=$("[name='"+name+"']",radio.ownerDocument).filter(function(){return!this.form;});}}
return radios;};$.widget("ui.button",{options:{disabled:null,text:true,label:null,icons:{primary:null,secondary:null}},_create:function(){this.element.closest("form").unbind("reset.button").bind("reset.button",formResetHandler);if(typeof this.options.disabled!=="boolean"){this.options.disabled=this.element.propAttr("disabled");}
this._determineButtonType();this.hasTitle=!!this.buttonElement.attr("title");var self=this,options=this.options,toggleButton=this.type==="checkbox"||this.type==="radio",hoverClass="ui-state-hover"+(!toggleButton?" ui-state-active":""),focusClass="ui-state-focus";if(options.label===null){options.label=this.buttonElement.html();}
if(this.element.is(":disabled")){options.disabled=true;}
this.buttonElement.addClass(baseClasses).attr("role","button").bind("mouseenter.button",function(){if(options.disabled){return;}
$(this).addClass("ui-state-hover");if(this===lastActive){$(this).addClass("ui-state-active");}}).bind("mouseleave.button",function(){if(options.disabled){return;}
$(this).removeClass(hoverClass);}).bind("click.button",function(event){if(options.disabled){event.preventDefault();event.stopImmediatePropagation();}});this.element.bind("focus.button",function(){self.buttonElement.addClass(focusClass);}).bind("blur.button",function(){self.buttonElement.removeClass(focusClass);});if(toggleButton){this.element.bind("change.button",function(){if(clickDragged){return;}
self.refresh();});this.buttonElement.bind("mousedown.button",function(event){if(options.disabled){return;}
clickDragged=false;startXPos=event.pageX;startYPos=event.pageY;}).bind("mouseup.button",function(event){if(options.disabled){return;}
if(startXPos!==event.pageX||startYPos!==event.pageY){clickDragged=true;}});}
if(this.type==="checkbox"){this.buttonElement.bind("click.button",function(){if(options.disabled||clickDragged){return false;}
$(this).toggleClass("ui-state-active");self.buttonElement.attr("aria-pressed",self.element[0].checked);});}else if(this.type==="radio"){this.buttonElement.bind("click.button",function(){if(options.disabled||clickDragged){return false;}
$(this).addClass("ui-state-active");self.buttonElement.attr("aria-pressed","true");var radio=self.element[0];radioGroup(radio).not(radio).map(function(){return $(this).button("widget")[0];}).removeClass("ui-state-active").attr("aria-pressed","false");});}else{this.buttonElement.bind("mousedown.button",function(){if(options.disabled){return false;}
$(this).addClass("ui-state-active");lastActive=this;$(document).one("mouseup",function(){lastActive=null;});}).bind("mouseup.button",function(){if(options.disabled){return false;}
$(this).removeClass("ui-state-active");}).bind("keydown.button",function(event){if(options.disabled){return false;}
if(event.keyCode==$.ui.keyCode.SPACE||event.keyCode==$.ui.keyCode.ENTER){$(this).addClass("ui-state-active");}}).bind("keyup.button",function(){$(this).removeClass("ui-state-active");});if(this.buttonElement.is("a")){this.buttonElement.keyup(function(event){if(event.keyCode===$.ui.keyCode.SPACE){$(this).click();}});}}
this._setOption("disabled",options.disabled);this._resetButton();},_determineButtonType:function(){if(this.element.is(":checkbox")){this.type="checkbox";}else if(this.element.is(":radio")){this.type="radio";}else if(this.element.is("input")){this.type="input";}else{this.type="button";}
if(this.type==="checkbox"||this.type==="radio"){var ancestor=this.element.parents().filter(":last"),labelSelector="label[for='"+this.element.attr("id")+"']";this.buttonElement=ancestor.find(labelSelector);if(!this.buttonElement.length){ancestor=ancestor.length?ancestor.siblings():this.element.siblings();this.buttonElement=ancestor.filter(labelSelector);if(!this.buttonElement.length){this.buttonElement=ancestor.find(labelSelector);}}
this.element.addClass("ui-helper-hidden-accessible");var checked=this.element.is(":checked");if(checked){this.buttonElement.addClass("ui-state-active");}
this.buttonElement.attr("aria-pressed",checked);}else{this.buttonElement=this.element;}},widget:function(){return this.buttonElement;},destroy:function(){this.element.removeClass("ui-helper-hidden-accessible");this.buttonElement.removeClass(baseClasses+" "+stateClasses+" "+typeClasses).removeAttr("role").removeAttr("aria-pressed").html(this.buttonElement.find(".ui-button-text").html());if(!this.hasTitle){this.buttonElement.removeAttr("title");}
$.Widget.prototype.destroy.call(this);},_setOption:function(key,value){$.Widget.prototype._setOption.apply(this,arguments);if(key==="disabled"){if(value){this.element.propAttr("disabled",true);}else{this.element.propAttr("disabled",false);}
return;}
this._resetButton();},refresh:function(){var isDisabled=this.element.is(":disabled");if(isDisabled!==this.options.disabled){this._setOption("disabled",isDisabled);}
if(this.type==="radio"){radioGroup(this.element[0]).each(function(){if($(this).is(":checked")){$(this).button("widget").addClass("ui-state-active").attr("aria-pressed","true");}else{$(this).button("widget").removeClass("ui-state-active").attr("aria-pressed","false");}});}else if(this.type==="checkbox"){if(this.element.is(":checked")){this.buttonElement.addClass("ui-state-active").attr("aria-pressed","true");}else{this.buttonElement.removeClass("ui-state-active").attr("aria-pressed","false");}}},_resetButton:function(){if(this.type==="input"){if(this.options.label){this.element.val(this.options.label);}
return;}
var buttonElement=this.buttonElement.removeClass(typeClasses),buttonText=$("<span></span>").addClass("ui-button-text").html(this.options.label).appendTo(buttonElement.empty()).text(),icons=this.options.icons,multipleIcons=icons.primary&&icons.secondary,buttonClasses=[];if(icons.primary||icons.secondary){if(this.options.text){buttonClasses.push("ui-button-text-icon"+(multipleIcons?"s":(icons.primary?"-primary":"-secondary")));}
if(icons.primary){buttonElement.prepend("<span class='ui-button-icon-primary ui-icon "+icons.primary+"'></span>");}
if(icons.secondary){buttonElement.append("<span class='ui-button-icon-secondary ui-icon "+icons.secondary+"'></span>");}
if(!this.options.text){buttonClasses.push(multipleIcons?"ui-button-icons-only":"ui-button-icon-only");if(!this.hasTitle){buttonElement.attr("title",buttonText);}}}else{buttonClasses.push("ui-button-text-only");}
buttonElement.addClass(buttonClasses.join(" "));}});$.widget("ui.buttonset",{options:{items:":button, :submit, :reset, :checkbox, :radio, a, :data(button)"},_create:function(){this.element.addClass("ui-buttonset");},_init:function(){this.refresh();},_setOption:function(key,value){if(key==="disabled"){this.buttons.button("option",key,value);}
$.Widget.prototype._setOption.apply(this,arguments);},refresh:function(){var ltr=this.element.css("direction")==="ltr";this.buttons=this.element.find(this.options.items).filter(":ui-button").button("refresh").end().not(":ui-button").button().end().map(function(){return $(this).button("widget")[0];}).removeClass("ui-corner-all ui-corner-left ui-corner-right").filter(":first").addClass(ltr?"ui-corner-left":"ui-corner-right").end().filter(":last").addClass(ltr?"ui-corner-right":"ui-corner-left").end().end();},destroy:function(){this.element.removeClass("ui-buttonset");this.buttons.map(function(){return $(this).button("widget")[0];}).removeClass("ui-corner-left ui-corner-right").end().button("destroy");$.Widget.prototype.destroy.call(this);}});}(jQuery));(function($,undefined){var uiDialogClasses='ui-dialog '+'ui-widget '+'ui-widget-content '+'ui-corner-all ',sizeRelatedOptions={buttons:true,height:true,maxHeight:true,maxWidth:true,minHeight:true,minWidth:true,width:true},resizableRelatedOptions={maxHeight:true,maxWidth:true,minHeight:true,minWidth:true},attrFn=$.attrFn||{val:true,css:true,html:true,text:true,data:true,width:true,height:true,offset:true,click:true};$.widget("ui.dialog",{options:{autoOpen:true,buttons:{},closeOnEscape:true,closeText:'close',dialogClass:'',draggable:true,hide:null,height:'auto',maxHeight:false,maxWidth:false,minHeight:150,minWidth:150,modal:false,position:{my:'center',at:'center',collision:'fit',using:function(pos){var topOffset=$(this).css(pos).offset().top;if(topOffset<0){$(this).css('top',pos.top-topOffset);}}},resizable:true,show:null,stack:true,title:'',width:300,zIndex:1000},_create:function(){this.originalTitle=this.element.attr('title');if(typeof this.originalTitle!=="string"){this.originalTitle="";}
this.options.title=this.options.title||this.originalTitle;var self=this,options=self.options,title=options.title||'&#160;',titleId=$.ui.dialog.getTitleId(self.element),uiDialog=(self.uiDialog=$('<div></div>')).appendTo(document.body).hide().addClass(uiDialogClasses+options.dialogClass).css({zIndex:options.zIndex}).attr('tabIndex',-1).css('outline',0).keydown(function(event){if(options.closeOnEscape&&!event.isDefaultPrevented()&&event.keyCode&&event.keyCode===$.ui.keyCode.ESCAPE){self.close(event);event.preventDefault();}}).attr({role:'dialog','aria-labelledby':titleId}).mousedown(function(event){self.moveToTop(false,event);}),uiDialogContent=self.element.show().removeAttr('title').addClass('ui-dialog-content '+'ui-widget-content').appendTo(uiDialog),uiDialogTitlebar=(self.uiDialogTitlebar=$('<div></div>')).addClass('ui-dialog-titlebar '+'ui-widget-header '+'ui-corner-all '+'ui-helper-clearfix').prependTo(uiDialog),uiDialogTitlebarClose=$('<a href="#"></a>').addClass('ui-dialog-titlebar-close '+'ui-corner-all').attr('role','button').hover(function(){uiDialogTitlebarClose.addClass('ui-state-hover');},function(){uiDialogTitlebarClose.removeClass('ui-state-hover');}).focus(function(){uiDialogTitlebarClose.addClass('ui-state-focus');}).blur(function(){uiDialogTitlebarClose.removeClass('ui-state-focus');}).click(function(event){self.close(event);return false;}).appendTo(uiDialogTitlebar),uiDialogTitlebarCloseText=(self.uiDialogTitlebarCloseText=$('<span></span>')).addClass('ui-icon '+'ui-icon-closethick').text(options.closeText).appendTo(uiDialogTitlebarClose),uiDialogTitle=$('<span></span>').addClass('ui-dialog-title').attr('id',titleId).html(title).prependTo(uiDialogTitlebar);if($.isFunction(options.beforeclose)&&!$.isFunction(options.beforeClose)){options.beforeClose=options.beforeclose;}
uiDialogTitlebar.find("*").add(uiDialogTitlebar).disableSelection();if(options.draggable&&$.fn.draggable){self._makeDraggable();}
if(options.resizable&&$.fn.resizable){self._makeResizable();}
self._createButtons(options.buttons);self._isOpen=false;if($.fn.bgiframe){uiDialog.bgiframe();}},_init:function(){if(this.options.autoOpen){this.open();}},destroy:function(){var self=this;if(self.overlay){self.overlay.destroy();}
self.uiDialog.hide();self.element.unbind('.dialog').removeData('dialog').removeClass('ui-dialog-content ui-widget-content').hide().appendTo('body');self.uiDialog.remove();if(self.originalTitle){self.element.attr('title',self.originalTitle);}
return self;},widget:function(){return this.uiDialog;},close:function(event){var self=this,maxZ,thisZ;if(false===self._trigger('beforeClose',event)){return;}
if(self.overlay){self.overlay.destroy();}
self.uiDialog.unbind('keypress.ui-dialog');self._isOpen=false;if(self.options.hide){self.uiDialog.hide(self.options.hide,function(){self._trigger('close',event);});}else{self.uiDialog.hide();self._trigger('close',event);}
$.ui.dialog.overlay.resize();if(self.options.modal){maxZ=0;$('.ui-dialog').each(function(){if(this!==self.uiDialog[0]){thisZ=$(this).css('z-index');if(!isNaN(thisZ)){maxZ=Math.max(maxZ,thisZ);}}});$.ui.dialog.maxZ=maxZ;}
return self;},isOpen:function(){return this._isOpen;},moveToTop:function(force,event){var self=this,options=self.options,saveScroll;if((options.modal&&!force)||(!options.stack&&!options.modal)){return self._trigger('focus',event);}
if(options.zIndex>$.ui.dialog.maxZ){$.ui.dialog.maxZ=options.zIndex;}
if(self.overlay){$.ui.dialog.maxZ+=1;self.overlay.$el.css('z-index',$.ui.dialog.overlay.maxZ=$.ui.dialog.maxZ);}
saveScroll={scrollTop:self.element.scrollTop(),scrollLeft:self.element.scrollLeft()};$.ui.dialog.maxZ+=1;self.uiDialog.css('z-index',$.ui.dialog.maxZ);self.element.attr(saveScroll);self._trigger('focus',event);return self;},open:function(){if(this._isOpen){return;}
var self=this,options=self.options,uiDialog=self.uiDialog;self.overlay=options.modal?new $.ui.dialog.overlay(self):null;self._size();self._position(options.position);uiDialog.show(options.show);self.moveToTop(true);if(options.modal){uiDialog.bind('keypress.ui-dialog',function(event){if(event.keyCode!==$.ui.keyCode.TAB){return;}
var tabbables=$(':tabbable',this),first=tabbables.filter(':first'),last=tabbables.filter(':last');if(event.target===last[0]&&!event.shiftKey){first.focus(1);return false;}else if(event.target===first[0]&&event.shiftKey){last.focus(1);return false;}});}
$(self.element.find(':tabbable').get().concat(uiDialog.find('.ui-dialog-buttonpane :tabbable').get().concat(uiDialog.get()))).eq(0).focus();self._isOpen=true;self._trigger('open');return self;},_createButtons:function(buttons){var self=this,hasButtons=false,uiDialogButtonPane=$('<div></div>').addClass('ui-dialog-buttonpane '+'ui-widget-content '+'ui-helper-clearfix'),uiButtonSet=$("<div></div>").addClass("ui-dialog-buttonset").appendTo(uiDialogButtonPane);self.uiDialog.find('.ui-dialog-buttonpane').remove();if(typeof buttons==='object'&&buttons!==null){$.each(buttons,function(){return!(hasButtons=true);});}
if(hasButtons){$.each(buttons,function(name,props){props=$.isFunction(props)?{click:props,text:name}:props;var button=$('<button type="button"></button>').click(function(){props.click.apply(self.element[0],arguments);}).appendTo(uiButtonSet);$.each(props,function(key,value){if(key==="click"){return;}
if(key in attrFn){button[key](value);}else{button.attr(key,value);}});if($.fn.button){button.button();}});uiDialogButtonPane.appendTo(self.uiDialog);}},_makeDraggable:function(){var self=this,options=self.options,doc=$(document),heightBeforeDrag;function filteredUi(ui){return{position:ui.position,offset:ui.offset};}
self.uiDialog.draggable({cancel:'.ui-dialog-content, .ui-dialog-titlebar-close',handle:'.ui-dialog-titlebar',containment:'document',start:function(event,ui){heightBeforeDrag=options.height==="auto"?"auto":$(this).height();$(this).height($(this).height()).addClass("ui-dialog-dragging");self._trigger('dragStart',event,filteredUi(ui));},drag:function(event,ui){self._trigger('drag',event,filteredUi(ui));},stop:function(event,ui){options.position=[ui.position.left-doc.scrollLeft(),ui.position.top-doc.scrollTop()];$(this).removeClass("ui-dialog-dragging").height(heightBeforeDrag);self._trigger('dragStop',event,filteredUi(ui));$.ui.dialog.overlay.resize();}});},_makeResizable:function(handles){handles=(handles===undefined?this.options.resizable:handles);var self=this,options=self.options,position=self.uiDialog.css('position'),resizeHandles=(typeof handles==='string'?handles:'n,e,s,w,se,sw,ne,nw');function filteredUi(ui){return{originalPosition:ui.originalPosition,originalSize:ui.originalSize,position:ui.position,size:ui.size};}
self.uiDialog.resizable({cancel:'.ui-dialog-content',containment:'document',alsoResize:self.element,maxWidth:options.maxWidth,maxHeight:options.maxHeight,minWidth:options.minWidth,minHeight:self._minHeight(),handles:resizeHandles,start:function(event,ui){$(this).addClass("ui-dialog-resizing");self._trigger('resizeStart',event,filteredUi(ui));},resize:function(event,ui){self._trigger('resize',event,filteredUi(ui));},stop:function(event,ui){$(this).removeClass("ui-dialog-resizing");options.height=$(this).height();options.width=$(this).width();self._trigger('resizeStop',event,filteredUi(ui));$.ui.dialog.overlay.resize();}}).css('position',position).find('.ui-resizable-se').addClass('ui-icon ui-icon-grip-diagonal-se');},_minHeight:function(){var options=this.options;if(options.height==='auto'){return options.minHeight;}else{return Math.min(options.minHeight,options.height);}},_position:function(position){var myAt=[],offset=[0,0],isVisible;if(position){if(typeof position==='string'||(typeof position==='object'&&'0'in position)){myAt=position.split?position.split(' '):[position[0],position[1]];if(myAt.length===1){myAt[1]=myAt[0];}
$.each(['left','top'],function(i,offsetPosition){if(+myAt[i]===myAt[i]){offset[i]=myAt[i];myAt[i]=offsetPosition;}});position={my:myAt.join(" "),at:myAt.join(" "),offset:offset.join(" ")};}
position=$.extend({},$.ui.dialog.prototype.options.position,position);}else{position=$.ui.dialog.prototype.options.position;}
isVisible=this.uiDialog.is(':visible');if(!isVisible){this.uiDialog.show();}
this.uiDialog.css({top:0,left:0}).position($.extend({of:window},position));if(!isVisible){this.uiDialog.hide();}},_setOptions:function(options){var self=this,resizableOptions={},resize=false;$.each(options,function(key,value){self._setOption(key,value);if(key in sizeRelatedOptions){resize=true;}
if(key in resizableRelatedOptions){resizableOptions[key]=value;}});if(resize){this._size();}
if(this.uiDialog.is(":data(resizable)")){this.uiDialog.resizable("option",resizableOptions);}},_setOption:function(key,value){var self=this,uiDialog=self.uiDialog;switch(key){case"beforeclose":key="beforeClose";break;case"buttons":self._createButtons(value);break;case"closeText":self.uiDialogTitlebarCloseText.text(""+value);break;case"dialogClass":uiDialog.removeClass(self.options.dialogClass).addClass(uiDialogClasses+value);break;case"disabled":if(value){uiDialog.addClass('ui-dialog-disabled');}else{uiDialog.removeClass('ui-dialog-disabled');}
break;case"draggable":var isDraggable=uiDialog.is(":data(draggable)");if(isDraggable&&!value){uiDialog.draggable("destroy");}
if(!isDraggable&&value){self._makeDraggable();}
break;case"position":self._position(value);break;case"resizable":var isResizable=uiDialog.is(":data(resizable)");if(isResizable&&!value){uiDialog.resizable('destroy');}
if(isResizable&&typeof value==='string'){uiDialog.resizable('option','handles',value);}
if(!isResizable&&value!==false){self._makeResizable(value);}
break;case"title":$(".ui-dialog-title",self.uiDialogTitlebar).html(""+(value||'&#160;'));break;}
$.Widget.prototype._setOption.apply(self,arguments);},_size:function(){var options=this.options,nonContentHeight,minContentHeight,isVisible=this.uiDialog.is(":visible");this.element.show().css({width:'auto',minHeight:0,height:0});if(options.minWidth>options.width){options.width=options.minWidth;}
nonContentHeight=this.uiDialog.css({height:'auto',width:options.width}).height();minContentHeight=Math.max(0,options.minHeight-nonContentHeight);if(options.height==="auto"){if($.support.minHeight){this.element.css({minHeight:minContentHeight,height:"auto"});}else{this.uiDialog.show();var autoHeight=this.element.css("height","auto").height();if(!isVisible){this.uiDialog.hide();}
this.element.height(Math.max(autoHeight,minContentHeight));}}else{this.element.height(Math.max(options.height-nonContentHeight,0));}
if(this.uiDialog.is(':data(resizable)')){this.uiDialog.resizable('option','minHeight',this._minHeight());}}});$.extend($.ui.dialog,{version:"1.8.16",uuid:0,maxZ:0,getTitleId:function($el){var id=$el.attr('id');if(!id){this.uuid+=1;id=this.uuid;}
return'ui-dialog-title-'+id;},overlay:function(dialog){this.$el=$.ui.dialog.overlay.create(dialog);}});$.extend($.ui.dialog.overlay,{instances:[],oldInstances:[],maxZ:0,events:$.map('focus,mousedown,mouseup,keydown,keypress,click'.split(','),function(event){return event+'.dialog-overlay';}).join(' '),create:function(dialog){if(this.instances.length===0){setTimeout(function(){if($.ui.dialog.overlay.instances.length){$(document).bind($.ui.dialog.overlay.events,function(event){if($(event.target).zIndex()<$.ui.dialog.overlay.maxZ){return false;}});}},1);$(document).bind('keydown.dialog-overlay',function(event){if(dialog.options.closeOnEscape&&!event.isDefaultPrevented()&&event.keyCode&&event.keyCode===$.ui.keyCode.ESCAPE){dialog.close(event);event.preventDefault();}});$(window).bind('resize.dialog-overlay',$.ui.dialog.overlay.resize);}
var $el=(this.oldInstances.pop()||$('<div></div>').addClass('ui-widget-overlay')).appendTo(document.body).css({width:this.width(),height:this.height()});if($.fn.bgiframe){$el.bgiframe();}
this.instances.push($el);return $el;},destroy:function($el){var indexOf=$.inArray($el,this.instances);if(indexOf!=-1){this.oldInstances.push(this.instances.splice(indexOf,1)[0]);}
if(this.instances.length===0){$([document,window]).unbind('.dialog-overlay');}
$el.remove();var maxZ=0;$.each(this.instances,function(){maxZ=Math.max(maxZ,this.css('z-index'));});this.maxZ=maxZ;},height:function(){var scrollHeight,offsetHeight;if($.browser.msie&&$.browser.version<7){scrollHeight=Math.max(document.documentElement.scrollHeight,document.body.scrollHeight);offsetHeight=Math.max(document.documentElement.offsetHeight,document.body.offsetHeight);if(scrollHeight<offsetHeight){return $(window).height()+'px';}else{return scrollHeight+'px';}}else{return $(document).height()+'px';}},width:function(){var scrollWidth,offsetWidth;if($.browser.msie){scrollWidth=Math.max(document.documentElement.scrollWidth,document.body.scrollWidth);offsetWidth=Math.max(document.documentElement.offsetWidth,document.body.offsetWidth);if(scrollWidth<offsetWidth){return $(window).width()+'px';}else{return scrollWidth+'px';}}else{return $(document).width()+'px';}},resize:function(){var $overlays=$([]);$.each($.ui.dialog.overlay.instances,function(){$overlays=$overlays.add(this);});$overlays.css({width:0,height:0}).css({width:$.ui.dialog.overlay.width(),height:$.ui.dialog.overlay.height()});}});$.extend($.ui.dialog.overlay.prototype,{destroy:function(){$.ui.dialog.overlay.destroy(this.$el);}});}(jQuery));(function($,undefined){var numPages=5;$.widget("ui.slider",$.ui.mouse,{widgetEventPrefix:"slide",options:{animate:false,distance:0,max:100,min:0,orientation:"horizontal",range:false,step:1,value:0,values:null},_create:function(){var self=this,o=this.options,existingHandles=this.element.find(".ui-slider-handle").addClass("ui-state-default ui-corner-all"),handle="<a class='ui-slider-handle ui-state-default ui-corner-all' href='#'></a>",handleCount=(o.values&&o.values.length)||1,handles=[];this._keySliding=false;this._mouseSliding=false;this._animateOff=true;this._handleIndex=null;this._detectOrientation();this._mouseInit();this.element.addClass("ui-slider"+" ui-slider-"+this.orientation+" ui-widget"+" ui-widget-content"+" ui-corner-all"+
(o.disabled?" ui-slider-disabled ui-disabled":""));this.range=$([]);if(o.range){if(o.range===true){if(!o.values){o.values=[this._valueMin(),this._valueMin()];}
if(o.values.length&&o.values.length!==2){o.values=[o.values[0],o.values[0]];}}
this.range=$("<div></div>").appendTo(this.element).addClass("ui-slider-range"+" ui-widget-header"+
((o.range==="min"||o.range==="max")?" ui-slider-range-"+o.range:""));}
for(var i=existingHandles.length;i<handleCount;i+=1){handles.push(handle);}
this.handles=existingHandles.add($(handles.join("")).appendTo(self.element));this.handle=this.handles.eq(0);this.handles.add(this.range).filter("a").click(function(event){event.preventDefault();}).hover(function(){if(!o.disabled){$(this).addClass("ui-state-hover");}},function(){$(this).removeClass("ui-state-hover");}).focus(function(){if(!o.disabled){$(".ui-slider .ui-state-focus").removeClass("ui-state-focus");$(this).addClass("ui-state-focus");}else{$(this).blur();}}).blur(function(){$(this).removeClass("ui-state-focus");});this.handles.each(function(i){$(this).data("index.ui-slider-handle",i);});this.handles.keydown(function(event){var ret=true,index=$(this).data("index.ui-slider-handle"),allowed,curVal,newVal,step;if(self.options.disabled){return;}
switch(event.keyCode){case $.ui.keyCode.HOME:case $.ui.keyCode.END:case $.ui.keyCode.PAGE_UP:case $.ui.keyCode.PAGE_DOWN:case $.ui.keyCode.UP:case $.ui.keyCode.RIGHT:case $.ui.keyCode.DOWN:case $.ui.keyCode.LEFT:ret=false;if(!self._keySliding){self._keySliding=true;$(this).addClass("ui-state-active");allowed=self._start(event,index);if(allowed===false){return;}}
break;}
step=self.options.step;if(self.options.values&&self.options.values.length){curVal=newVal=self.values(index);}else{curVal=newVal=self.value();}
switch(event.keyCode){case $.ui.keyCode.HOME:newVal=self._valueMin();break;case $.ui.keyCode.END:newVal=self._valueMax();break;case $.ui.keyCode.PAGE_UP:newVal=self._trimAlignValue(curVal+((self._valueMax()-self._valueMin())/numPages));break;case $.ui.keyCode.PAGE_DOWN:newVal=self._trimAlignValue(curVal-((self._valueMax()-self._valueMin())/numPages));break;case $.ui.keyCode.UP:case $.ui.keyCode.RIGHT:if(curVal===self._valueMax()){return;}
newVal=self._trimAlignValue(curVal+step);break;case $.ui.keyCode.DOWN:case $.ui.keyCode.LEFT:if(curVal===self._valueMin()){return;}
newVal=self._trimAlignValue(curVal-step);break;}
self._slide(event,index,newVal);return ret;}).keyup(function(event){var index=$(this).data("index.ui-slider-handle");if(self._keySliding){self._keySliding=false;self._stop(event,index);self._change(event,index);$(this).removeClass("ui-state-active");}});this._refreshValue();this._animateOff=false;},destroy:function(){this.handles.remove();this.range.remove();this.element.removeClass("ui-slider"+" ui-slider-horizontal"+" ui-slider-vertical"+" ui-slider-disabled"+" ui-widget"+" ui-widget-content"+" ui-corner-all").removeData("slider").unbind(".slider");this._mouseDestroy();return this;},_mouseCapture:function(event){var o=this.options,position,normValue,distance,closestHandle,self,index,allowed,offset,mouseOverHandle;if(o.disabled){return false;}
this.elementSize={width:this.element.outerWidth(),height:this.element.outerHeight()};this.elementOffset=this.element.offset();position={x:event.pageX,y:event.pageY};normValue=this._normValueFromMouse(position);distance=this._valueMax()-this._valueMin()+1;self=this;this.handles.each(function(i){var thisDistance=Math.abs(normValue-self.values(i));if(distance>thisDistance){distance=thisDistance;closestHandle=$(this);index=i;}});if(o.range===true&&this.values(1)===o.min){index+=1;closestHandle=$(this.handles[index]);}
allowed=this._start(event,index);if(allowed===false){return false;}
this._mouseSliding=true;self._handleIndex=index;closestHandle.addClass("ui-state-active").focus();offset=closestHandle.offset();mouseOverHandle=!$(event.target).parents().andSelf().is(".ui-slider-handle");this._clickOffset=mouseOverHandle?{left:0,top:0}:{left:event.pageX-offset.left-(closestHandle.width()/2),top:event.pageY-offset.top-
(closestHandle.height()/2)-
(parseInt(closestHandle.css("borderTopWidth"),10)||0)-
(parseInt(closestHandle.css("borderBottomWidth"),10)||0)+
(parseInt(closestHandle.css("marginTop"),10)||0)};if(!this.handles.hasClass("ui-state-hover")){this._slide(event,index,normValue);}
this._animateOff=true;return true;},_mouseStart:function(event){return true;},_mouseDrag:function(event){var position={x:event.pageX,y:event.pageY},normValue=this._normValueFromMouse(position);this._slide(event,this._handleIndex,normValue);return false;},_mouseStop:function(event){this.handles.removeClass("ui-state-active");this._mouseSliding=false;this._stop(event,this._handleIndex);this._change(event,this._handleIndex);this._handleIndex=null;this._clickOffset=null;this._animateOff=false;return false;},_detectOrientation:function(){this.orientation=(this.options.orientation==="vertical")?"vertical":"horizontal";},_normValueFromMouse:function(position){var pixelTotal,pixelMouse,percentMouse,valueTotal,valueMouse;if(this.orientation==="horizontal"){pixelTotal=this.elementSize.width;pixelMouse=position.x-this.elementOffset.left-(this._clickOffset?this._clickOffset.left:0);}else{pixelTotal=this.elementSize.height;pixelMouse=position.y-this.elementOffset.top-(this._clickOffset?this._clickOffset.top:0);}
percentMouse=(pixelMouse/pixelTotal);if(percentMouse>1){percentMouse=1;}
if(percentMouse<0){percentMouse=0;}
if(this.orientation==="vertical"){percentMouse=1-percentMouse;}
valueTotal=this._valueMax()-this._valueMin();valueMouse=this._valueMin()+percentMouse*valueTotal;return this._trimAlignValue(valueMouse);},_start:function(event,index){var uiHash={handle:this.handles[index],value:this.value()};if(this.options.values&&this.options.values.length){uiHash.value=this.values(index);uiHash.values=this.values();}
return this._trigger("start",event,uiHash);},_slide:function(event,index,newVal){var otherVal,newValues,allowed;if(this.options.values&&this.options.values.length){otherVal=this.values(index?0:1);if((this.options.values.length===2&&this.options.range===true)&&((index===0&&newVal>otherVal)||(index===1&&newVal<otherVal))){newVal=otherVal;}
if(newVal!==this.values(index)){newValues=this.values();newValues[index]=newVal;allowed=this._trigger("slide",event,{handle:this.handles[index],value:newVal,values:newValues});otherVal=this.values(index?0:1);if(allowed!==false){this.values(index,newVal,true);}}}else{if(newVal!==this.value()){allowed=this._trigger("slide",event,{handle:this.handles[index],value:newVal});if(allowed!==false){this.value(newVal);}}}},_stop:function(event,index){var uiHash={handle:this.handles[index],value:this.value()};if(this.options.values&&this.options.values.length){uiHash.value=this.values(index);uiHash.values=this.values();}
this._trigger("stop",event,uiHash);},_change:function(event,index){if(!this._keySliding&&!this._mouseSliding){var uiHash={handle:this.handles[index],value:this.value()};if(this.options.values&&this.options.values.length){uiHash.value=this.values(index);uiHash.values=this.values();}
this._trigger("change",event,uiHash);}},value:function(newValue){if(arguments.length){this.options.value=this._trimAlignValue(newValue);this._refreshValue();this._change(null,0);return;}
return this._value();},values:function(index,newValue){var vals,newValues,i;if(arguments.length>1){this.options.values[index]=this._trimAlignValue(newValue);this._refreshValue();this._change(null,index);return;}
if(arguments.length){if($.isArray(arguments[0])){vals=this.options.values;newValues=arguments[0];for(i=0;i<vals.length;i+=1){vals[i]=this._trimAlignValue(newValues[i]);this._change(null,i);}
this._refreshValue();}else{if(this.options.values&&this.options.values.length){return this._values(index);}else{return this.value();}}}else{return this._values();}},_setOption:function(key,value){var i,valsLength=0;if($.isArray(this.options.values)){valsLength=this.options.values.length;}
$.Widget.prototype._setOption.apply(this,arguments);switch(key){case"disabled":if(value){this.handles.filter(".ui-state-focus").blur();this.handles.removeClass("ui-state-hover");this.handles.propAttr("disabled",true);this.element.addClass("ui-disabled");}else{this.handles.propAttr("disabled",false);this.element.removeClass("ui-disabled");}
break;case"orientation":this._detectOrientation();this.element.removeClass("ui-slider-horizontal ui-slider-vertical").addClass("ui-slider-"+this.orientation);this._refreshValue();break;case"value":this._animateOff=true;this._refreshValue();this._change(null,0);this._animateOff=false;break;case"values":this._animateOff=true;this._refreshValue();for(i=0;i<valsLength;i+=1){this._change(null,i);}
this._animateOff=false;break;}},_value:function(){var val=this.options.value;val=this._trimAlignValue(val);return val;},_values:function(index){var val,vals,i;if(arguments.length){val=this.options.values[index];val=this._trimAlignValue(val);return val;}else{vals=this.options.values.slice();for(i=0;i<vals.length;i+=1){vals[i]=this._trimAlignValue(vals[i]);}
return vals;}},_trimAlignValue:function(val){if(val<=this._valueMin()){return this._valueMin();}
if(val>=this._valueMax()){return this._valueMax();}
var step=(this.options.step>0)?this.options.step:1,valModStep=(val-this._valueMin())%step,alignValue=val-valModStep;if(Math.abs(valModStep)*2>=step){alignValue+=(valModStep>0)?step:(-step);}
return parseFloat(alignValue.toFixed(5));},_valueMin:function(){return this.options.min;},_valueMax:function(){return this.options.max;},_refreshValue:function(){var oRange=this.options.range,o=this.options,self=this,animate=(!this._animateOff)?o.animate:false,valPercent,_set={},lastValPercent,value,valueMin,valueMax;if(this.options.values&&this.options.values.length){this.handles.each(function(i,j){valPercent=(self.values(i)-self._valueMin())/(self._valueMax()-self._valueMin())*100;_set[self.orientation==="horizontal"?"left":"bottom"]=valPercent+"%";$(this).stop(1,1)[animate?"animate":"css"](_set,o.animate);if(self.options.range===true){if(self.orientation==="horizontal"){if(i===0){self.range.stop(1,1)[animate?"animate":"css"]({left:valPercent+"%"},o.animate);}
if(i===1){self.range[animate?"animate":"css"]({width:(valPercent-lastValPercent)+"%"},{queue:false,duration:o.animate});}}else{if(i===0){self.range.stop(1,1)[animate?"animate":"css"]({bottom:(valPercent)+"%"},o.animate);}
if(i===1){self.range[animate?"animate":"css"]({height:(valPercent-lastValPercent)+"%"},{queue:false,duration:o.animate});}}}
lastValPercent=valPercent;});}else{value=this.value();valueMin=this._valueMin();valueMax=this._valueMax();valPercent=(valueMax!==valueMin)?(value-valueMin)/(valueMax-valueMin)*100:0;_set[self.orientation==="horizontal"?"left":"bottom"]=valPercent+"%";this.handle.stop(1,1)[animate?"animate":"css"](_set,o.animate);if(oRange==="min"&&this.orientation==="horizontal"){this.range.stop(1,1)[animate?"animate":"css"]({width:valPercent+"%"},o.animate);}
if(oRange==="max"&&this.orientation==="horizontal"){this.range[animate?"animate":"css"]({width:(100-valPercent)+"%"},{queue:false,duration:o.animate});}
if(oRange==="min"&&this.orientation==="vertical"){this.range.stop(1,1)[animate?"animate":"css"]({height:valPercent+"%"},o.animate);}
if(oRange==="max"&&this.orientation==="vertical"){this.range[animate?"animate":"css"]({height:(100-valPercent)+"%"},{queue:false,duration:o.animate});}}}});$.extend($.ui.slider,{version:"1.8.16"});}(jQuery));(function($,undefined){var tabId=0,listId=0;function getNextTabId(){return++tabId;}
function getNextListId(){return++listId;}
$.widget("ui.tabs",{options:{add:null,ajaxOptions:null,cache:false,cookie:null,collapsible:false,disable:null,disabled:[],enable:null,event:"click",fx:null,idPrefix:"ui-tabs-",load:null,panelTemplate:"<div></div>",remove:null,select:null,show:null,spinner:"<em>Loading&#8230;</em>",tabTemplate:"<li><a href='#{href}'><span>#{label}</span></a></li>"},_create:function(){this._tabify(true);},_setOption:function(key,value){if(key=="selected"){if(this.options.collapsible&&value==this.options.selected){return;}
this.select(value);}else{this.options[key]=value;this._tabify();}},_tabId:function(a){return a.title&&a.title.replace(/\s/g,"_").replace(/[^\w\u00c0-\uFFFF-]/g,"")||this.options.idPrefix+getNextTabId();},_sanitizeSelector:function(hash){return hash.replace(/:/g,"\\:");},_cookie:function(){var cookie=this.cookie||(this.cookie=this.options.cookie.name||"ui-tabs-"+getNextListId());return $.cookie.apply(null,[cookie].concat($.makeArray(arguments)));},_ui:function(tab,panel){return{tab:tab,panel:panel,index:this.anchors.index(tab)};},_cleanup:function(){this.lis.filter(".ui-state-processing").removeClass("ui-state-processing").find("span:data(label.tabs)").each(function(){var el=$(this);el.html(el.data("label.tabs")).removeData("label.tabs");});},_tabify:function(init){var self=this,o=this.options,fragmentId=/^#.+/;this.list=this.element.find("ol,ul").eq(0);this.lis=$(" > li:has(a[href])",this.list);this.anchors=this.lis.map(function(){return $("a",this)[0];});this.panels=$([]);this.anchors.each(function(i,a){var href=$(a).attr("href");var hrefBase=href.split("#")[0],baseEl;if(hrefBase&&(hrefBase===location.toString().split("#")[0]||(baseEl=$("base")[0])&&hrefBase===baseEl.href)){href=a.hash;a.href=href;}
if(fragmentId.test(href)){self.panels=self.panels.add(self.element.find(self._sanitizeSelector(href)));}else if(href&&href!=="#"){$.data(a,"href.tabs",href);$.data(a,"load.tabs",href.replace(/#.*$/,""));var id=self._tabId(a);a.href="#"+id;var $panel=self.element.find("#"+id);if(!$panel.length){$panel=$(o.panelTemplate).attr("id",id).addClass("ui-tabs-panel ui-widget-content ui-corner-bottom").insertAfter(self.panels[i-1]||self.list);$panel.data("destroy.tabs",true);}
self.panels=self.panels.add($panel);}else{o.disabled.push(i);}});if(init){this.element.addClass("ui-tabs ui-widget ui-widget-content ui-corner-all");this.list.addClass("ui-tabs-nav ui-helper-reset ui-helper-clearfix ui-widget-header ui-corner-all");this.lis.addClass("ui-state-default ui-corner-top");this.panels.addClass("ui-tabs-panel ui-widget-content ui-corner-bottom");if(o.selected===undefined){if(location.hash){this.anchors.each(function(i,a){if(a.hash==location.hash){o.selected=i;return false;}});}
if(typeof o.selected!=="number"&&o.cookie){o.selected=parseInt(self._cookie(),10);}
if(typeof o.selected!=="number"&&this.lis.filter(".ui-tabs-selected").length){o.selected=this.lis.index(this.lis.filter(".ui-tabs-selected"));}
o.selected=o.selected||(this.lis.length?0:-1);}else if(o.selected===null){o.selected=-1;}
o.selected=((o.selected>=0&&this.anchors[o.selected])||o.selected<0)?o.selected:0;o.disabled=$.unique(o.disabled.concat($.map(this.lis.filter(".ui-state-disabled"),function(n,i){return self.lis.index(n);}))).sort();if($.inArray(o.selected,o.disabled)!=-1){o.disabled.splice($.inArray(o.selected,o.disabled),1);}
this.panels.addClass("ui-tabs-hide");this.lis.removeClass("ui-tabs-selected ui-state-active");if(o.selected>=0&&this.anchors.length){self.element.find(self._sanitizeSelector(self.anchors[o.selected].hash)).removeClass("ui-tabs-hide");this.lis.eq(o.selected).addClass("ui-tabs-selected ui-state-active");self.element.queue("tabs",function(){self._trigger("show",null,self._ui(self.anchors[o.selected],self.element.find(self._sanitizeSelector(self.anchors[o.selected].hash))[0]));});this.load(o.selected);}
$(window).bind("unload",function(){self.lis.add(self.anchors).unbind(".tabs");self.lis=self.anchors=self.panels=null;});}else{o.selected=this.lis.index(this.lis.filter(".ui-tabs-selected"));}
this.element[o.collapsible?"addClass":"removeClass"]("ui-tabs-collapsible");if(o.cookie){this._cookie(o.selected,o.cookie);}
for(var i=0,li;(li=this.lis[i]);i++){$(li)[$.inArray(i,o.disabled)!=-1&&!$(li).hasClass("ui-tabs-selected")?"addClass":"removeClass"]("ui-state-disabled");}
if(o.cache===false){this.anchors.removeData("cache.tabs");}
this.lis.add(this.anchors).unbind(".tabs");if(o.event!=="mouseover"){var addState=function(state,el){if(el.is(":not(.ui-state-disabled)")){el.addClass("ui-state-"+state);}};var removeState=function(state,el){el.removeClass("ui-state-"+state);};this.lis.bind("mouseover.tabs",function(){addState("hover",$(this));});this.lis.bind("mouseout.tabs",function(){removeState("hover",$(this));});this.anchors.bind("focus.tabs",function(){addState("focus",$(this).closest("li"));});this.anchors.bind("blur.tabs",function(){removeState("focus",$(this).closest("li"));});}
var hideFx,showFx;if(o.fx){if($.isArray(o.fx)){hideFx=o.fx[0];showFx=o.fx[1];}else{hideFx=showFx=o.fx;}}
function resetStyle($el,fx){$el.css("display","");if(!$.support.opacity&&fx.opacity){$el[0].style.removeAttribute("filter");}}
var showTab=showFx?function(clicked,$show){$(clicked).closest("li").addClass("ui-tabs-selected ui-state-active");$show.hide().removeClass("ui-tabs-hide").animate(showFx,showFx.duration||"normal",function(){resetStyle($show,showFx);self._trigger("show",null,self._ui(clicked,$show[0]));});}:function(clicked,$show){$(clicked).closest("li").addClass("ui-tabs-selected ui-state-active");$show.removeClass("ui-tabs-hide");self._trigger("show",null,self._ui(clicked,$show[0]));};var hideTab=hideFx?function(clicked,$hide){$hide.animate(hideFx,hideFx.duration||"normal",function(){self.lis.removeClass("ui-tabs-selected ui-state-active");$hide.addClass("ui-tabs-hide");resetStyle($hide,hideFx);self.element.dequeue("tabs");});}:function(clicked,$hide,$show){self.lis.removeClass("ui-tabs-selected ui-state-active");$hide.addClass("ui-tabs-hide");self.element.dequeue("tabs");};this.anchors.bind(o.event+".tabs",function(){var el=this,$li=$(el).closest("li"),$hide=self.panels.filter(":not(.ui-tabs-hide)"),$show=self.element.find(self._sanitizeSelector(el.hash));if(($li.hasClass("ui-tabs-selected")&&!o.collapsible)||$li.hasClass("ui-state-disabled")||$li.hasClass("ui-state-processing")||self.panels.filter(":animated").length||self._trigger("select",null,self._ui(this,$show[0]))===false){this.blur();return false;}
o.selected=self.anchors.index(this);self.abort();if(o.collapsible){if($li.hasClass("ui-tabs-selected")){o.selected=-1;if(o.cookie){self._cookie(o.selected,o.cookie);}
self.element.queue("tabs",function(){hideTab(el,$hide);}).dequeue("tabs");this.blur();return false;}else if(!$hide.length){if(o.cookie){self._cookie(o.selected,o.cookie);}
self.element.queue("tabs",function(){showTab(el,$show);});self.load(self.anchors.index(this));this.blur();return false;}}
if(o.cookie){self._cookie(o.selected,o.cookie);}
if($show.length){if($hide.length){self.element.queue("tabs",function(){hideTab(el,$hide);});}
self.element.queue("tabs",function(){showTab(el,$show);});self.load(self.anchors.index(this));}else{throw"jQuery UI Tabs: Mismatching fragment identifier.";}
if($.browser.msie){this.blur();}});this.anchors.bind("click.tabs",function(){return false;});},_getIndex:function(index){if(typeof index=="string"){index=this.anchors.index(this.anchors.filter("[href$="+index+"]"));}
return index;},destroy:function(){var o=this.options;this.abort();this.element.unbind(".tabs").removeClass("ui-tabs ui-widget ui-widget-content ui-corner-all ui-tabs-collapsible").removeData("tabs");this.list.removeClass("ui-tabs-nav ui-helper-reset ui-helper-clearfix ui-widget-header ui-corner-all");this.anchors.each(function(){var href=$.data(this,"href.tabs");if(href){this.href=href;}
var $this=$(this).unbind(".tabs");$.each(["href","load","cache"],function(i,prefix){$this.removeData(prefix+".tabs");});});this.lis.unbind(".tabs").add(this.panels).each(function(){if($.data(this,"destroy.tabs")){$(this).remove();}else{$(this).removeClass(["ui-state-default","ui-corner-top","ui-tabs-selected","ui-state-active","ui-state-hover","ui-state-focus","ui-state-disabled","ui-tabs-panel","ui-widget-content","ui-corner-bottom","ui-tabs-hide"].join(" "));}});if(o.cookie){this._cookie(null,o.cookie);}
return this;},add:function(url,label,index){if(index===undefined){index=this.anchors.length;}
var self=this,o=this.options,$li=$(o.tabTemplate.replace(/#\{href\}/g,url).replace(/#\{label\}/g,label)),id=!url.indexOf("#")?url.replace("#",""):this._tabId($("a",$li)[0]);$li.addClass("ui-state-default ui-corner-top").data("destroy.tabs",true);var $panel=self.element.find("#"+id);if(!$panel.length){$panel=$(o.panelTemplate).attr("id",id).data("destroy.tabs",true);}
$panel.addClass("ui-tabs-panel ui-widget-content ui-corner-bottom ui-tabs-hide");if(index>=this.lis.length){$li.appendTo(this.list);$panel.appendTo(this.list[0].parentNode);}else{$li.insertBefore(this.lis[index]);$panel.insertBefore(this.panels[index]);}
o.disabled=$.map(o.disabled,function(n,i){return n>=index?++n:n;});this._tabify();if(this.anchors.length==1){o.selected=0;$li.addClass("ui-tabs-selected ui-state-active");$panel.removeClass("ui-tabs-hide");this.element.queue("tabs",function(){self._trigger("show",null,self._ui(self.anchors[0],self.panels[0]));});this.load(0);}
this._trigger("add",null,this._ui(this.anchors[index],this.panels[index]));return this;},remove:function(index){index=this._getIndex(index);var o=this.options,$li=this.lis.eq(index).remove(),$panel=this.panels.eq(index).remove();if($li.hasClass("ui-tabs-selected")&&this.anchors.length>1){this.select(index+(index+1<this.anchors.length?1:-1));}
o.disabled=$.map($.grep(o.disabled,function(n,i){return n!=index;}),function(n,i){return n>=index?--n:n;});this._tabify();this._trigger("remove",null,this._ui($li.find("a")[0],$panel[0]));return this;},enable:function(index){index=this._getIndex(index);var o=this.options;if($.inArray(index,o.disabled)==-1){return;}
this.lis.eq(index).removeClass("ui-state-disabled");o.disabled=$.grep(o.disabled,function(n,i){return n!=index;});this._trigger("enable",null,this._ui(this.anchors[index],this.panels[index]));return this;},disable:function(index){index=this._getIndex(index);var self=this,o=this.options;if(index!=o.selected){this.lis.eq(index).addClass("ui-state-disabled");o.disabled.push(index);o.disabled.sort();this._trigger("disable",null,this._ui(this.anchors[index],this.panels[index]));}
return this;},select:function(index){index=this._getIndex(index);if(index==-1){if(this.options.collapsible&&this.options.selected!=-1){index=this.options.selected;}else{return this;}}
this.anchors.eq(index).trigger(this.options.event+".tabs");return this;},load:function(index){index=this._getIndex(index);var self=this,o=this.options,a=this.anchors.eq(index)[0],url=$.data(a,"load.tabs");this.abort();if(!url||this.element.queue("tabs").length!==0&&$.data(a,"cache.tabs")){this.element.dequeue("tabs");return;}
this.lis.eq(index).addClass("ui-state-processing");if(o.spinner){var span=$("span",a);span.data("label.tabs",span.html()).html(o.spinner);}
this.xhr=$.ajax($.extend({},o.ajaxOptions,{url:url,success:function(r,s){self.element.find(self._sanitizeSelector(a.hash)).html(r);self._cleanup();if(o.cache){$.data(a,"cache.tabs",true);}
self._trigger("load",null,self._ui(self.anchors[index],self.panels[index]));try{o.ajaxOptions.success(r,s);}
catch(e){}},error:function(xhr,s,e){self._cleanup();self._trigger("load",null,self._ui(self.anchors[index],self.panels[index]));try{o.ajaxOptions.error(xhr,s,index,a);}
catch(e){}}}));self.element.dequeue("tabs");return this;},abort:function(){this.element.queue([]);this.panels.stop(false,true);this.element.queue("tabs",this.element.queue("tabs").splice(-2,2));if(this.xhr){this.xhr.abort();delete this.xhr;}
this._cleanup();return this;},url:function(index,url){this.anchors.eq(index).removeData("cache.tabs").data("load.tabs",url);return this;},length:function(){return this.anchors.length;}});$.extend($.ui.tabs,{version:"1.8.16"});$.extend($.ui.tabs.prototype,{rotation:null,rotate:function(ms,continuing){var self=this,o=this.options;var rotate=self._rotate||(self._rotate=function(e){clearTimeout(self.rotation);self.rotation=setTimeout(function(){var t=o.selected;self.select(++t<self.anchors.length?t:0);},ms);if(e){e.stopPropagation();}});var stop=self._unrotate||(self._unrotate=!continuing?function(e){if(e.clientX){self.rotate(null);}}:function(e){t=o.selected;rotate();});if(ms){this.element.bind("tabsshow",rotate);this.anchors.bind(o.event+".tabs",stop);rotate();}else{clearTimeout(self.rotation);this.element.unbind("tabsshow",rotate);this.anchors.unbind(o.event+".tabs",stop);delete this._rotate;delete this._unrotate;}
return this;}});})(jQuery);(function($,undefined){$.extend($.ui,{datepicker:{version:"1.8.16"}});var PROP_NAME='datepicker';var dpuuid=new Date().getTime();var instActive;function Datepicker(){this.debug=false;this._curInst=null;this._keyEvent=false;this._disabledInputs=[];this._datepickerShowing=false;this._inDialog=false;this._mainDivId='ui-datepicker-div';this._inlineClass='ui-datepicker-inline';this._appendClass='ui-datepicker-append';this._triggerClass='ui-datepicker-trigger';this._dialogClass='ui-datepicker-dialog';this._disableClass='ui-datepicker-disabled';this._unselectableClass='ui-datepicker-unselectable';this._currentClass='ui-datepicker-current-day';this._dayOverClass='ui-datepicker-days-cell-over';this.regional=[];this.regional['']={closeText:'Done',prevText:'Prev',nextText:'Next',currentText:'Today',monthNames:['January','February','March','April','May','June','July','August','September','October','November','December'],monthNamesShort:['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'],dayNames:['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'],dayNamesShort:['Sun','Mon','Tue','Wed','Thu','Fri','Sat'],dayNamesMin:['Su','Mo','Tu','We','Th','Fr','Sa'],weekHeader:'Wk',dateFormat:'mm/dd/yy',firstDay:0,isRTL:false,showMonthAfterYear:false,yearSuffix:''};this._defaults={showOn:'focus',showAnim:'fadeIn',showOptions:{},defaultDate:null,appendText:'',buttonText:'...',buttonImage:'',buttonImageOnly:false,hideIfNoPrevNext:false,navigationAsDateFormat:false,gotoCurrent:false,changeMonth:false,changeYear:false,yearRange:'c-10:c+10',showOtherMonths:false,selectOtherMonths:false,showWeek:false,calculateWeek:this.iso8601Week,shortYearCutoff:'+10',minDate:null,maxDate:null,duration:'fast',beforeShowDay:null,beforeShow:null,onSelect:null,onChangeMonthYear:null,onClose:null,numberOfMonths:1,showCurrentAtPos:0,stepMonths:1,stepBigMonths:12,altField:'',altFormat:'',constrainInput:true,showButtonPanel:false,autoSize:false,disabled:false};$.extend(this._defaults,this.regional['']);this.dpDiv=bindHover($('<div id="'+this._mainDivId+'" class="ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all"></div>'));}
$.extend(Datepicker.prototype,{markerClassName:'hasDatepicker',maxRows:4,log:function(){if(this.debug)
console.log.apply('',arguments);},_widgetDatepicker:function(){return this.dpDiv;},setDefaults:function(settings){extendRemove(this._defaults,settings||{});return this;},_attachDatepicker:function(target,settings){var inlineSettings=null;for(var attrName in this._defaults){var attrValue=target.getAttribute('date:'+attrName);if(attrValue){inlineSettings=inlineSettings||{};try{inlineSettings[attrName]=eval(attrValue);}catch(err){inlineSettings[attrName]=attrValue;}}}
var nodeName=target.nodeName.toLowerCase();var inline=(nodeName=='div'||nodeName=='span');if(!target.id){this.uuid+=1;target.id='dp'+this.uuid;}
var inst=this._newInst($(target),inline);inst.settings=$.extend({},settings||{},inlineSettings||{});if(nodeName=='input'){this._connectDatepicker(target,inst);}else if(inline){this._inlineDatepicker(target,inst);}},_newInst:function(target,inline){var id=target[0].id.replace(/([^A-Za-z0-9_-])/g,'\\\\$1');return{id:id,input:target,selectedDay:0,selectedMonth:0,selectedYear:0,drawMonth:0,drawYear:0,inline:inline,dpDiv:(!inline?this.dpDiv:bindHover($('<div class="'+this._inlineClass+' ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all"></div>')))};},_connectDatepicker:function(target,inst){var input=$(target);inst.append=$([]);inst.trigger=$([]);if(input.hasClass(this.markerClassName))
return;this._attachments(input,inst);input.addClass(this.markerClassName).keydown(this._doKeyDown).keypress(this._doKeyPress).keyup(this._doKeyUp).bind("setData.datepicker",function(event,key,value){inst.settings[key]=value;}).bind("getData.datepicker",function(event,key){return this._get(inst,key);});this._autoSize(inst);$.data(target,PROP_NAME,inst);if(inst.settings.disabled){this._disableDatepicker(target);}},_attachments:function(input,inst){var appendText=this._get(inst,'appendText');var isRTL=this._get(inst,'isRTL');if(inst.append)
inst.append.remove();if(appendText){inst.append=$('<span class="'+this._appendClass+'">'+appendText+'</span>');input[isRTL?'before':'after'](inst.append);}
input.unbind('focus',this._showDatepicker);if(inst.trigger)
inst.trigger.remove();var showOn=this._get(inst,'showOn');if(showOn=='focus'||showOn=='both')
input.focus(this._showDatepicker);if(showOn=='button'||showOn=='both'){var buttonText=this._get(inst,'buttonText');var buttonImage=this._get(inst,'buttonImage');inst.trigger=$(this._get(inst,'buttonImageOnly')?$('<img/>').addClass(this._triggerClass).attr({src:buttonImage,alt:buttonText,title:buttonText}):$('<button type="button"></button>').addClass(this._triggerClass).html(buttonImage==''?buttonText:$('<img/>').attr({src:buttonImage,alt:buttonText,title:buttonText})));input[isRTL?'before':'after'](inst.trigger);inst.trigger.click(function(){if($.datepicker._datepickerShowing&&$.datepicker._lastInput==input[0])
$.datepicker._hideDatepicker();else
$.datepicker._showDatepicker(input[0]);return false;});}},_autoSize:function(inst){if(this._get(inst,'autoSize')&&!inst.inline){var date=new Date(2009,12-1,20);var dateFormat=this._get(inst,'dateFormat');if(dateFormat.match(/[DM]/)){var findMax=function(names){var max=0;var maxI=0;for(var i=0;i<names.length;i++){if(names[i].length>max){max=names[i].length;maxI=i;}}
return maxI;};date.setMonth(findMax(this._get(inst,(dateFormat.match(/MM/)?'monthNames':'monthNamesShort'))));date.setDate(findMax(this._get(inst,(dateFormat.match(/DD/)?'dayNames':'dayNamesShort')))+20-date.getDay());}
inst.input.attr('size',this._formatDate(inst,date).length);}},_inlineDatepicker:function(target,inst){var divSpan=$(target);if(divSpan.hasClass(this.markerClassName))
return;divSpan.addClass(this.markerClassName).append(inst.dpDiv).bind("setData.datepicker",function(event,key,value){inst.settings[key]=value;}).bind("getData.datepicker",function(event,key){return this._get(inst,key);});$.data(target,PROP_NAME,inst);this._setDate(inst,this._getDefaultDate(inst),true);this._updateDatepicker(inst);this._updateAlternate(inst);if(inst.settings.disabled){this._disableDatepicker(target);}
inst.dpDiv.css("display","block");},_dialogDatepicker:function(input,date,onSelect,settings,pos){var inst=this._dialogInst;if(!inst){this.uuid+=1;var id='dp'+this.uuid;this._dialogInput=$('<input type="text" id="'+id+'" style="position: absolute; top: -100px; width: 0px; z-index: -10;"/>');this._dialogInput.keydown(this._doKeyDown);$('body').append(this._dialogInput);inst=this._dialogInst=this._newInst(this._dialogInput,false);inst.settings={};$.data(this._dialogInput[0],PROP_NAME,inst);}
extendRemove(inst.settings,settings||{});date=(date&&date.constructor==Date?this._formatDate(inst,date):date);this._dialogInput.val(date);this._pos=(pos?(pos.length?pos:[pos.pageX,pos.pageY]):null);if(!this._pos){var browserWidth=document.documentElement.clientWidth;var browserHeight=document.documentElement.clientHeight;var scrollX=document.documentElement.scrollLeft||document.body.scrollLeft;var scrollY=document.documentElement.scrollTop||document.body.scrollTop;this._pos=[(browserWidth/2)-100+scrollX,(browserHeight/2)-150+scrollY];}
this._dialogInput.css('left',(this._pos[0]+20)+'px').css('top',this._pos[1]+'px');inst.settings.onSelect=onSelect;this._inDialog=true;this.dpDiv.addClass(this._dialogClass);this._showDatepicker(this._dialogInput[0]);if($.blockUI)
$.blockUI(this.dpDiv);$.data(this._dialogInput[0],PROP_NAME,inst);return this;},_destroyDatepicker:function(target){var $target=$(target);var inst=$.data(target,PROP_NAME);if(!$target.hasClass(this.markerClassName)){return;}
var nodeName=target.nodeName.toLowerCase();$.removeData(target,PROP_NAME);if(nodeName=='input'){inst.append.remove();inst.trigger.remove();$target.removeClass(this.markerClassName).unbind('focus',this._showDatepicker).unbind('keydown',this._doKeyDown).unbind('keypress',this._doKeyPress).unbind('keyup',this._doKeyUp);}else if(nodeName=='div'||nodeName=='span')
$target.removeClass(this.markerClassName).empty();},_enableDatepicker:function(target){var $target=$(target);var inst=$.data(target,PROP_NAME);if(!$target.hasClass(this.markerClassName)){return;}
var nodeName=target.nodeName.toLowerCase();if(nodeName=='input'){target.disabled=false;inst.trigger.filter('button').each(function(){this.disabled=false;}).end().filter('img').css({opacity:'1.0',cursor:''});}
else if(nodeName=='div'||nodeName=='span'){var inline=$target.children('.'+this._inlineClass);inline.children().removeClass('ui-state-disabled');inline.find("select.ui-datepicker-month, select.ui-datepicker-year").removeAttr("disabled");}
this._disabledInputs=$.map(this._disabledInputs,function(value){return(value==target?null:value);});},_disableDatepicker:function(target){var $target=$(target);var inst=$.data(target,PROP_NAME);if(!$target.hasClass(this.markerClassName)){return;}
var nodeName=target.nodeName.toLowerCase();if(nodeName=='input'){target.disabled=true;inst.trigger.filter('button').each(function(){this.disabled=true;}).end().filter('img').css({opacity:'0.5',cursor:'default'});}
else if(nodeName=='div'||nodeName=='span'){var inline=$target.children('.'+this._inlineClass);inline.children().addClass('ui-state-disabled');inline.find("select.ui-datepicker-month, select.ui-datepicker-year").attr("disabled","disabled");}
this._disabledInputs=$.map(this._disabledInputs,function(value){return(value==target?null:value);});this._disabledInputs[this._disabledInputs.length]=target;},_isDisabledDatepicker:function(target){if(!target){return false;}
for(var i=0;i<this._disabledInputs.length;i++){if(this._disabledInputs[i]==target)
return true;}
return false;},_getInst:function(target){try{return $.data(target,PROP_NAME);}
catch(err){throw'Missing instance data for this datepicker';}},_optionDatepicker:function(target,name,value){var inst=this._getInst(target);if(arguments.length==2&&typeof name=='string'){return(name=='defaults'?$.extend({},$.datepicker._defaults):(inst?(name=='all'?$.extend({},inst.settings):this._get(inst,name)):null));}
var settings=name||{};if(typeof name=='string'){settings={};settings[name]=value;}
if(inst){if(this._curInst==inst){this._hideDatepicker();}
var date=this._getDateDatepicker(target,true);var minDate=this._getMinMaxDate(inst,'min');var maxDate=this._getMinMaxDate(inst,'max');extendRemove(inst.settings,settings);if(minDate!==null&&settings['dateFormat']!==undefined&&settings['minDate']===undefined)
inst.settings.minDate=this._formatDate(inst,minDate);if(maxDate!==null&&settings['dateFormat']!==undefined&&settings['maxDate']===undefined)
inst.settings.maxDate=this._formatDate(inst,maxDate);this._attachments($(target),inst);this._autoSize(inst);this._setDate(inst,date);this._updateAlternate(inst);this._updateDatepicker(inst);}},_changeDatepicker:function(target,name,value){this._optionDatepicker(target,name,value);},_refreshDatepicker:function(target){var inst=this._getInst(target);if(inst){this._updateDatepicker(inst);}},_setDateDatepicker:function(target,date){var inst=this._getInst(target);if(inst){this._setDate(inst,date);this._updateDatepicker(inst);this._updateAlternate(inst);}},_getDateDatepicker:function(target,noDefault){var inst=this._getInst(target);if(inst&&!inst.inline)
this._setDateFromField(inst,noDefault);return(inst?this._getDate(inst):null);},_doKeyDown:function(event){var inst=$.datepicker._getInst(event.target);var handled=true;var isRTL=inst.dpDiv.is('.ui-datepicker-rtl');inst._keyEvent=true;if($.datepicker._datepickerShowing)
switch(event.keyCode){case 9:$.datepicker._hideDatepicker();handled=false;break;case 13:var sel=$('td.'+$.datepicker._dayOverClass+':not(.'+
$.datepicker._currentClass+')',inst.dpDiv);if(sel[0])
$.datepicker._selectDay(event.target,inst.selectedMonth,inst.selectedYear,sel[0]);var onSelect=$.datepicker._get(inst,'onSelect');if(onSelect){var dateStr=$.datepicker._formatDate(inst);onSelect.apply((inst.input?inst.input[0]:null),[dateStr,inst]);}
else
$.datepicker._hideDatepicker();return false;break;case 27:$.datepicker._hideDatepicker();break;case 33:$.datepicker._adjustDate(event.target,(event.ctrlKey?-$.datepicker._get(inst,'stepBigMonths'):-$.datepicker._get(inst,'stepMonths')),'M');break;case 34:$.datepicker._adjustDate(event.target,(event.ctrlKey?+$.datepicker._get(inst,'stepBigMonths'):+$.datepicker._get(inst,'stepMonths')),'M');break;case 35:if(event.ctrlKey||event.metaKey)$.datepicker._clearDate(event.target);handled=event.ctrlKey||event.metaKey;break;case 36:if(event.ctrlKey||event.metaKey)$.datepicker._gotoToday(event.target);handled=event.ctrlKey||event.metaKey;break;case 37:if(event.ctrlKey||event.metaKey)$.datepicker._adjustDate(event.target,(isRTL?+1:-1),'D');handled=event.ctrlKey||event.metaKey;if(event.originalEvent.altKey)$.datepicker._adjustDate(event.target,(event.ctrlKey?-$.datepicker._get(inst,'stepBigMonths'):-$.datepicker._get(inst,'stepMonths')),'M');break;case 38:if(event.ctrlKey||event.metaKey)$.datepicker._adjustDate(event.target,-7,'D');handled=event.ctrlKey||event.metaKey;break;case 39:if(event.ctrlKey||event.metaKey)$.datepicker._adjustDate(event.target,(isRTL?-1:+1),'D');handled=event.ctrlKey||event.metaKey;if(event.originalEvent.altKey)$.datepicker._adjustDate(event.target,(event.ctrlKey?+$.datepicker._get(inst,'stepBigMonths'):+$.datepicker._get(inst,'stepMonths')),'M');break;case 40:if(event.ctrlKey||event.metaKey)$.datepicker._adjustDate(event.target,+7,'D');handled=event.ctrlKey||event.metaKey;break;default:handled=false;}
else if(event.keyCode==36&&event.ctrlKey)
$.datepicker._showDatepicker(this);else{handled=false;}
if(handled){event.preventDefault();event.stopPropagation();}},_doKeyPress:function(event){var inst=$.datepicker._getInst(event.target);if($.datepicker._get(inst,'constrainInput')){var chars=$.datepicker._possibleChars($.datepicker._get(inst,'dateFormat'));var chr=String.fromCharCode(event.charCode==undefined?event.keyCode:event.charCode);return event.ctrlKey||event.metaKey||(chr<' '||!chars||chars.indexOf(chr)>-1);}},_doKeyUp:function(event){var inst=$.datepicker._getInst(event.target);if(inst.input.val()!=inst.lastVal){try{var date=$.datepicker.parseDate($.datepicker._get(inst,'dateFormat'),(inst.input?inst.input.val():null),$.datepicker._getFormatConfig(inst));if(date){$.datepicker._setDateFromField(inst);$.datepicker._updateAlternate(inst);$.datepicker._updateDatepicker(inst);}}
catch(event){$.datepicker.log(event);}}
return true;},_showDatepicker:function(input){input=input.target||input;if(input.nodeName.toLowerCase()!='input')
input=$('input',input.parentNode)[0];if($.datepicker._isDisabledDatepicker(input)||$.datepicker._lastInput==input)
return;var inst=$.datepicker._getInst(input);if($.datepicker._curInst&&$.datepicker._curInst!=inst){if($.datepicker._datepickerShowing){$.datepicker._triggerOnClose($.datepicker._curInst);}
$.datepicker._curInst.dpDiv.stop(true,true);}
var beforeShow=$.datepicker._get(inst,'beforeShow');var beforeShowSettings=beforeShow?beforeShow.apply(input,[input,inst]):{};if(beforeShowSettings===false){return;}
extendRemove(inst.settings,beforeShowSettings);inst.lastVal=null;$.datepicker._lastInput=input;$.datepicker._setDateFromField(inst);if($.datepicker._inDialog)
input.value='';if(!$.datepicker._pos){$.datepicker._pos=$.datepicker._findPos(input);$.datepicker._pos[1]+=input.offsetHeight;}
var isFixed=false;$(input).parents().each(function(){isFixed|=$(this).css('position')=='fixed';return!isFixed;});if(isFixed&&$.browser.opera){$.datepicker._pos[0]-=document.documentElement.scrollLeft;$.datepicker._pos[1]-=document.documentElement.scrollTop;}
var offset={left:$.datepicker._pos[0],top:$.datepicker._pos[1]};$.datepicker._pos=null;inst.dpDiv.empty();inst.dpDiv.css({position:'absolute',display:'block',top:'-1000px'});$.datepicker._updateDatepicker(inst);offset=$.datepicker._checkOffset(inst,offset,isFixed);inst.dpDiv.css({position:($.datepicker._inDialog&&$.blockUI?'static':(isFixed?'fixed':'absolute')),display:'none',left:offset.left+'px',top:offset.top+'px'});if(!inst.inline){var showAnim=$.datepicker._get(inst,'showAnim');var duration=$.datepicker._get(inst,'duration');var postProcess=function(){var cover=inst.dpDiv.find('iframe.ui-datepicker-cover');if(!!cover.length){var borders=$.datepicker._getBorders(inst.dpDiv);cover.css({left:-borders[0],top:-borders[1],width:inst.dpDiv.outerWidth(),height:inst.dpDiv.outerHeight()});}};inst.dpDiv.zIndex($(input).zIndex()+1);$.datepicker._datepickerShowing=true;if($.effects&&$.effects[showAnim])
inst.dpDiv.show(showAnim,$.datepicker._get(inst,'showOptions'),duration,postProcess);else
inst.dpDiv[showAnim||'show']((showAnim?duration:null),postProcess);if(!showAnim||!duration)
postProcess();if(inst.input.is(':visible')&&!inst.input.is(':disabled'))
inst.input.focus();$.datepicker._curInst=inst;}},_updateDatepicker:function(inst){var self=this;self.maxRows=4;var borders=$.datepicker._getBorders(inst.dpDiv);instActive=inst;inst.dpDiv.empty().append(this._generateHTML(inst));var cover=inst.dpDiv.find('iframe.ui-datepicker-cover');if(!!cover.length){cover.css({left:-borders[0],top:-borders[1],width:inst.dpDiv.outerWidth(),height:inst.dpDiv.outerHeight()})}
inst.dpDiv.find('.'+this._dayOverClass+' a').mouseover();var numMonths=this._getNumberOfMonths(inst);var cols=numMonths[1];var width=17;inst.dpDiv.removeClass('ui-datepicker-multi-2 ui-datepicker-multi-3 ui-datepicker-multi-4').width('');if(cols>1)
inst.dpDiv.addClass('ui-datepicker-multi-'+cols).css('width',(width*cols)+'em');inst.dpDiv[(numMonths[0]!=1||numMonths[1]!=1?'add':'remove')+'Class']('ui-datepicker-multi');inst.dpDiv[(this._get(inst,'isRTL')?'add':'remove')+'Class']('ui-datepicker-rtl');if(inst==$.datepicker._curInst&&$.datepicker._datepickerShowing&&inst.input&&inst.input.is(':visible')&&!inst.input.is(':disabled')&&inst.input[0]!=document.activeElement)
inst.input.focus();if(inst.yearshtml){var origyearshtml=inst.yearshtml;setTimeout(function(){if(origyearshtml===inst.yearshtml&&inst.yearshtml){inst.dpDiv.find('select.ui-datepicker-year:first').replaceWith(inst.yearshtml);}
origyearshtml=inst.yearshtml=null;},0);}},_getBorders:function(elem){var convert=function(value){return{thin:1,medium:2,thick:3}[value]||value;};return[parseFloat(convert(elem.css('border-left-width'))),parseFloat(convert(elem.css('border-top-width')))];},_checkOffset:function(inst,offset,isFixed){var dpWidth=inst.dpDiv.outerWidth();var dpHeight=inst.dpDiv.outerHeight();var inputWidth=inst.input?inst.input.outerWidth():0;var inputHeight=inst.input?inst.input.outerHeight():0;var viewWidth=document.documentElement.clientWidth+$(document).scrollLeft();var viewHeight=document.documentElement.clientHeight+$(document).scrollTop();offset.left-=(this._get(inst,'isRTL')?(dpWidth-inputWidth):0);offset.left-=(isFixed&&offset.left==inst.input.offset().left)?$(document).scrollLeft():0;offset.top-=(isFixed&&offset.top==(inst.input.offset().top+inputHeight))?$(document).scrollTop():0;offset.left-=Math.min(offset.left,(offset.left+dpWidth>viewWidth&&viewWidth>dpWidth)?Math.abs(offset.left+dpWidth-viewWidth):0);offset.top-=Math.min(offset.top,(offset.top+dpHeight>viewHeight&&viewHeight>dpHeight)?Math.abs(dpHeight+inputHeight):0);return offset;},_findPos:function(obj){var inst=this._getInst(obj);var isRTL=this._get(inst,'isRTL');while(obj&&(obj.type=='hidden'||obj.nodeType!=1||$.expr.filters.hidden(obj))){obj=obj[isRTL?'previousSibling':'nextSibling'];}
var position=$(obj).offset();return[position.left,position.top];},_triggerOnClose:function(inst){var onClose=this._get(inst,'onClose');if(onClose)
onClose.apply((inst.input?inst.input[0]:null),[(inst.input?inst.input.val():''),inst]);},_hideDatepicker:function(input){var inst=this._curInst;if(!inst||(input&&inst!=$.data(input,PROP_NAME)))
return;if(this._datepickerShowing){var showAnim=this._get(inst,'showAnim');var duration=this._get(inst,'duration');var postProcess=function(){$.datepicker._tidyDialog(inst);this._curInst=null;};if($.effects&&$.effects[showAnim])
inst.dpDiv.hide(showAnim,$.datepicker._get(inst,'showOptions'),duration,postProcess);else
inst.dpDiv[(showAnim=='slideDown'?'slideUp':(showAnim=='fadeIn'?'fadeOut':'hide'))]((showAnim?duration:null),postProcess);if(!showAnim)
postProcess();$.datepicker._triggerOnClose(inst);this._datepickerShowing=false;this._lastInput=null;if(this._inDialog){this._dialogInput.css({position:'absolute',left:'0',top:'-100px'});if($.blockUI){$.unblockUI();$('body').append(this.dpDiv);}}
this._inDialog=false;}},_tidyDialog:function(inst){inst.dpDiv.removeClass(this._dialogClass).unbind('.ui-datepicker-calendar');},_checkExternalClick:function(event){if(!$.datepicker._curInst)
return;var $target=$(event.target);if($target[0].id!=$.datepicker._mainDivId&&$target.parents('#'+$.datepicker._mainDivId).length==0&&!$target.hasClass($.datepicker.markerClassName)&&!$target.hasClass($.datepicker._triggerClass)&&$.datepicker._datepickerShowing&&!($.datepicker._inDialog&&$.blockUI))
$.datepicker._hideDatepicker();},_adjustDate:function(id,offset,period){var target=$(id);var inst=this._getInst(target[0]);if(this._isDisabledDatepicker(target[0])){return;}
this._adjustInstDate(inst,offset+
(period=='M'?this._get(inst,'showCurrentAtPos'):0),period);this._updateDatepicker(inst);},_gotoToday:function(id){var target=$(id);var inst=this._getInst(target[0]);if(this._get(inst,'gotoCurrent')&&inst.currentDay){inst.selectedDay=inst.currentDay;inst.drawMonth=inst.selectedMonth=inst.currentMonth;inst.drawYear=inst.selectedYear=inst.currentYear;}
else{var date=new Date();inst.selectedDay=date.getDate();inst.drawMonth=inst.selectedMonth=date.getMonth();inst.drawYear=inst.selectedYear=date.getFullYear();}
this._notifyChange(inst);this._adjustDate(target);},_selectMonthYear:function(id,select,period){var target=$(id);var inst=this._getInst(target[0]);inst['selected'+(period=='M'?'Month':'Year')]=inst['draw'+(period=='M'?'Month':'Year')]=parseInt(select.options[select.selectedIndex].value,10);this._notifyChange(inst);this._adjustDate(target);},_selectDay:function(id,month,year,td){var target=$(id);if($(td).hasClass(this._unselectableClass)||this._isDisabledDatepicker(target[0])){return;}
var inst=this._getInst(target[0]);inst.selectedDay=inst.currentDay=$('a',td).html();inst.selectedMonth=inst.currentMonth=month;inst.selectedYear=inst.currentYear=year;this._selectDate(id,this._formatDate(inst,inst.currentDay,inst.currentMonth,inst.currentYear));},_clearDate:function(id){var target=$(id);var inst=this._getInst(target[0]);this._selectDate(target,'');},_selectDate:function(id,dateStr){var target=$(id);var inst=this._getInst(target[0]);dateStr=(dateStr!=null?dateStr:this._formatDate(inst));if(inst.input)
inst.input.val(dateStr);this._updateAlternate(inst);var onSelect=this._get(inst,'onSelect');if(onSelect)
onSelect.apply((inst.input?inst.input[0]:null),[dateStr,inst]);else if(inst.input)
inst.input.trigger('change');if(inst.inline)
this._updateDatepicker(inst);else{this._hideDatepicker();this._lastInput=inst.input[0];if(typeof(inst.input[0])!='object')
inst.input.focus();this._lastInput=null;}},_updateAlternate:function(inst){var altField=this._get(inst,'altField');if(altField){var altFormat=this._get(inst,'altFormat')||this._get(inst,'dateFormat');var date=this._getDate(inst);var dateStr=this.formatDate(altFormat,date,this._getFormatConfig(inst));$(altField).each(function(){$(this).val(dateStr);});}},noWeekends:function(date){var day=date.getDay();return[(day>0&&day<6),''];},iso8601Week:function(date){var checkDate=new Date(date.getTime());checkDate.setDate(checkDate.getDate()+4-(checkDate.getDay()||7));var time=checkDate.getTime();checkDate.setMonth(0);checkDate.setDate(1);return Math.floor(Math.round((time-checkDate)/86400000)/7)+1;},parseDate:function(format,value,settings){if(format==null||value==null)
throw'Invalid arguments';value=(typeof value=='object'?value.toString():value+'');if(value=='')
return null;var shortYearCutoff=(settings?settings.shortYearCutoff:null)||this._defaults.shortYearCutoff;shortYearCutoff=(typeof shortYearCutoff!='string'?shortYearCutoff:new Date().getFullYear()%100+parseInt(shortYearCutoff,10));var dayNamesShort=(settings?settings.dayNamesShort:null)||this._defaults.dayNamesShort;var dayNames=(settings?settings.dayNames:null)||this._defaults.dayNames;var monthNamesShort=(settings?settings.monthNamesShort:null)||this._defaults.monthNamesShort;var monthNames=(settings?settings.monthNames:null)||this._defaults.monthNames;var year=-1;var month=-1;var day=-1;var doy=-1;var literal=false;var lookAhead=function(match){var matches=(iFormat+1<format.length&&format.charAt(iFormat+1)==match);if(matches)
iFormat++;return matches;};var getNumber=function(match){var isDoubled=lookAhead(match);var size=(match=='@'?14:(match=='!'?20:(match=='y'&&isDoubled?4:(match=='o'?3:2))));var digits=new RegExp('^\\d{1,'+size+'}');var num=value.substring(iValue).match(digits);if(!num)
throw'Missing number at position '+iValue;iValue+=num[0].length;return parseInt(num[0],10);};var getName=function(match,shortNames,longNames){var names=$.map(lookAhead(match)?longNames:shortNames,function(v,k){return[[k,v]];}).sort(function(a,b){return-(a[1].length-b[1].length);});var index=-1;$.each(names,function(i,pair){var name=pair[1];if(value.substr(iValue,name.length).toLowerCase()==name.toLowerCase()){index=pair[0];iValue+=name.length;return false;}});if(index!=-1)
return index+1;else
throw'Unknown name at position '+iValue;};var checkLiteral=function(){if(value.charAt(iValue)!=format.charAt(iFormat))
throw'Unexpected literal at position '+iValue;iValue++;};var iValue=0;for(var iFormat=0;iFormat<format.length;iFormat++){if(literal)
if(format.charAt(iFormat)=="'"&&!lookAhead("'"))
literal=false;else
checkLiteral();else
switch(format.charAt(iFormat)){case'd':day=getNumber('d');break;case'D':getName('D',dayNamesShort,dayNames);break;case'o':doy=getNumber('o');break;case'm':month=getNumber('m');break;case'M':month=getName('M',monthNamesShort,monthNames);break;case'y':year=getNumber('y');break;case'@':var date=new Date(getNumber('@'));year=date.getFullYear();month=date.getMonth()+1;day=date.getDate();break;case'!':var date=new Date((getNumber('!')-this._ticksTo1970)/10000);year=date.getFullYear();month=date.getMonth()+1;day=date.getDate();break;case"'":if(lookAhead("'"))
checkLiteral();else
literal=true;break;default:checkLiteral();}}
if(iValue<value.length){throw"Extra/unparsed characters found in date: "+value.substring(iValue);}
if(year==-1)
year=new Date().getFullYear();else if(year<100)
year+=new Date().getFullYear()-new Date().getFullYear()%100+
(year<=shortYearCutoff?0:-100);if(doy>-1){month=1;day=doy;do{var dim=this._getDaysInMonth(year,month-1);if(day<=dim)
break;month++;day-=dim;}while(true);}
var date=this._daylightSavingAdjust(new Date(year,month-1,day));if(date.getFullYear()!=year||date.getMonth()+1!=month||date.getDate()!=day)
throw'Invalid date';return date;},ATOM:'yy-mm-dd',COOKIE:'D, dd M yy',ISO_8601:'yy-mm-dd',RFC_822:'D, d M y',RFC_850:'DD, dd-M-y',RFC_1036:'D, d M y',RFC_1123:'D, d M yy',RFC_2822:'D, d M yy',RSS:'D, d M y',TICKS:'!',TIMESTAMP:'@',W3C:'yy-mm-dd',_ticksTo1970:(((1970-1)*365+Math.floor(1970/4)-Math.floor(1970/100)+
Math.floor(1970/400))*24*60*60*10000000),formatDate:function(format,date,settings){if(!date)
return'';var dayNamesShort=(settings?settings.dayNamesShort:null)||this._defaults.dayNamesShort;var dayNames=(settings?settings.dayNames:null)||this._defaults.dayNames;var monthNamesShort=(settings?settings.monthNamesShort:null)||this._defaults.monthNamesShort;var monthNames=(settings?settings.monthNames:null)||this._defaults.monthNames;var lookAhead=function(match){var matches=(iFormat+1<format.length&&format.charAt(iFormat+1)==match);if(matches)
iFormat++;return matches;};var formatNumber=function(match,value,len){var num=''+value;if(lookAhead(match))
while(num.length<len)
num='0'+num;return num;};var formatName=function(match,value,shortNames,longNames){return(lookAhead(match)?longNames[value]:shortNames[value]);};var output='';var literal=false;if(date)
for(var iFormat=0;iFormat<format.length;iFormat++){if(literal)
if(format.charAt(iFormat)=="'"&&!lookAhead("'"))
literal=false;else
output+=format.charAt(iFormat);else
switch(format.charAt(iFormat)){case'd':output+=formatNumber('d',date.getDate(),2);break;case'D':output+=formatName('D',date.getDay(),dayNamesShort,dayNames);break;case'o':output+=formatNumber('o',Math.round((new Date(date.getFullYear(),date.getMonth(),date.getDate()).getTime()-new Date(date.getFullYear(),0,0).getTime())/86400000),3);break;case'm':output+=formatNumber('m',date.getMonth()+1,2);break;case'M':output+=formatName('M',date.getMonth(),monthNamesShort,monthNames);break;case'y':output+=(lookAhead('y')?date.getFullYear():(date.getYear()%100<10?'0':'')+date.getYear()%100);break;case'@':output+=date.getTime();break;case'!':output+=date.getTime()*10000+this._ticksTo1970;break;case"'":if(lookAhead("'"))
output+="'";else
literal=true;break;default:output+=format.charAt(iFormat);}}
return output;},_possibleChars:function(format){var chars='';var literal=false;var lookAhead=function(match){var matches=(iFormat+1<format.length&&format.charAt(iFormat+1)==match);if(matches)
iFormat++;return matches;};for(var iFormat=0;iFormat<format.length;iFormat++)
if(literal)
if(format.charAt(iFormat)=="'"&&!lookAhead("'"))
literal=false;else
chars+=format.charAt(iFormat);else
switch(format.charAt(iFormat)){case'd':case'm':case'y':case'@':chars+='0123456789';break;case'D':case'M':return null;case"'":if(lookAhead("'"))
chars+="'";else
literal=true;break;default:chars+=format.charAt(iFormat);}
return chars;},_get:function(inst,name){return inst.settings[name]!==undefined?inst.settings[name]:this._defaults[name];},_setDateFromField:function(inst,noDefault){if(inst.input.val()==inst.lastVal){return;}
var dateFormat=this._get(inst,'dateFormat');var dates=inst.lastVal=inst.input?inst.input.val():null;var date,defaultDate;date=defaultDate=this._getDefaultDate(inst);var settings=this._getFormatConfig(inst);try{date=this.parseDate(dateFormat,dates,settings)||defaultDate;}catch(event){this.log(event);dates=(noDefault?'':dates);}
inst.selectedDay=date.getDate();inst.drawMonth=inst.selectedMonth=date.getMonth();inst.drawYear=inst.selectedYear=date.getFullYear();inst.currentDay=(dates?date.getDate():0);inst.currentMonth=(dates?date.getMonth():0);inst.currentYear=(dates?date.getFullYear():0);this._adjustInstDate(inst);},_getDefaultDate:function(inst){return this._restrictMinMax(inst,this._determineDate(inst,this._get(inst,'defaultDate'),new Date()));},_determineDate:function(inst,date,defaultDate){var offsetNumeric=function(offset){var date=new Date();date.setDate(date.getDate()+offset);return date;};var offsetString=function(offset){try{return $.datepicker.parseDate($.datepicker._get(inst,'dateFormat'),offset,$.datepicker._getFormatConfig(inst));}
catch(e){}
var date=(offset.toLowerCase().match(/^c/)?$.datepicker._getDate(inst):null)||new Date();var year=date.getFullYear();var month=date.getMonth();var day=date.getDate();var pattern=/([+-]?[0-9]+)\s*(d|D|w|W|m|M|y|Y)?/g;var matches=pattern.exec(offset);while(matches){switch(matches[2]||'d'){case'd':case'D':day+=parseInt(matches[1],10);break;case'w':case'W':day+=parseInt(matches[1],10)*7;break;case'm':case'M':month+=parseInt(matches[1],10);day=Math.min(day,$.datepicker._getDaysInMonth(year,month));break;case'y':case'Y':year+=parseInt(matches[1],10);day=Math.min(day,$.datepicker._getDaysInMonth(year,month));break;}
matches=pattern.exec(offset);}
return new Date(year,month,day);};var newDate=(date==null||date===''?defaultDate:(typeof date=='string'?offsetString(date):(typeof date=='number'?(isNaN(date)?defaultDate:offsetNumeric(date)):new Date(date.getTime()))));newDate=(newDate&&newDate.toString()=='Invalid Date'?defaultDate:newDate);if(newDate){newDate.setHours(0);newDate.setMinutes(0);newDate.setSeconds(0);newDate.setMilliseconds(0);}
return this._daylightSavingAdjust(newDate);},_daylightSavingAdjust:function(date){if(!date)return null;date.setHours(date.getHours()>12?date.getHours()+2:0);return date;},_setDate:function(inst,date,noChange){var clear=!date;var origMonth=inst.selectedMonth;var origYear=inst.selectedYear;var newDate=this._restrictMinMax(inst,this._determineDate(inst,date,new Date()));inst.selectedDay=inst.currentDay=newDate.getDate();inst.drawMonth=inst.selectedMonth=inst.currentMonth=newDate.getMonth();inst.drawYear=inst.selectedYear=inst.currentYear=newDate.getFullYear();if((origMonth!=inst.selectedMonth||origYear!=inst.selectedYear)&&!noChange)
this._notifyChange(inst);this._adjustInstDate(inst);if(inst.input){inst.input.val(clear?'':this._formatDate(inst));}},_getDate:function(inst){var startDate=(!inst.currentYear||(inst.input&&inst.input.val()=='')?null:this._daylightSavingAdjust(new Date(inst.currentYear,inst.currentMonth,inst.currentDay)));return startDate;},_generateHTML:function(inst){var today=new Date();today=this._daylightSavingAdjust(new Date(today.getFullYear(),today.getMonth(),today.getDate()));var isRTL=this._get(inst,'isRTL');var showButtonPanel=this._get(inst,'showButtonPanel');var hideIfNoPrevNext=this._get(inst,'hideIfNoPrevNext');var navigationAsDateFormat=this._get(inst,'navigationAsDateFormat');var numMonths=this._getNumberOfMonths(inst);var showCurrentAtPos=this._get(inst,'showCurrentAtPos');var stepMonths=this._get(inst,'stepMonths');var isMultiMonth=(numMonths[0]!=1||numMonths[1]!=1);var currentDate=this._daylightSavingAdjust((!inst.currentDay?new Date(9999,9,9):new Date(inst.currentYear,inst.currentMonth,inst.currentDay)));var minDate=this._getMinMaxDate(inst,'min');var maxDate=this._getMinMaxDate(inst,'max');var drawMonth=inst.drawMonth-showCurrentAtPos;var drawYear=inst.drawYear;if(drawMonth<0){drawMonth+=12;drawYear--;}
if(maxDate){var maxDraw=this._daylightSavingAdjust(new Date(maxDate.getFullYear(),maxDate.getMonth()-(numMonths[0]*numMonths[1])+1,maxDate.getDate()));maxDraw=(minDate&&maxDraw<minDate?minDate:maxDraw);while(this._daylightSavingAdjust(new Date(drawYear,drawMonth,1))>maxDraw){drawMonth--;if(drawMonth<0){drawMonth=11;drawYear--;}}}
inst.drawMonth=drawMonth;inst.drawYear=drawYear;var prevText=this._get(inst,'prevText');prevText=(!navigationAsDateFormat?prevText:this.formatDate(prevText,this._daylightSavingAdjust(new Date(drawYear,drawMonth-stepMonths,1)),this._getFormatConfig(inst)));var prev=(this._canAdjustMonth(inst,-1,drawYear,drawMonth)?'<a class="ui-datepicker-prev ui-corner-all" onclick="DP_jQuery_'+dpuuid+'.datepicker._adjustDate(\'#'+inst.id+'\', -'+stepMonths+', \'M\');"'+' title="'+prevText+'"><span class="ui-icon ui-icon-circle-triangle-'+(isRTL?'e':'w')+'">'+prevText+'</span></a>':(hideIfNoPrevNext?'':'<a class="ui-datepicker-prev ui-corner-all ui-state-disabled" title="'+prevText+'"><span class="ui-icon ui-icon-circle-triangle-'+(isRTL?'e':'w')+'">'+prevText+'</span></a>'));var nextText=this._get(inst,'nextText');nextText=(!navigationAsDateFormat?nextText:this.formatDate(nextText,this._daylightSavingAdjust(new Date(drawYear,drawMonth+stepMonths,1)),this._getFormatConfig(inst)));var next=(this._canAdjustMonth(inst,+1,drawYear,drawMonth)?'<a class="ui-datepicker-next ui-corner-all" onclick="DP_jQuery_'+dpuuid+'.datepicker._adjustDate(\'#'+inst.id+'\', +'+stepMonths+', \'M\');"'+' title="'+nextText+'"><span class="ui-icon ui-icon-circle-triangle-'+(isRTL?'w':'e')+'">'+nextText+'</span></a>':(hideIfNoPrevNext?'':'<a class="ui-datepicker-next ui-corner-all ui-state-disabled" title="'+nextText+'"><span class="ui-icon ui-icon-circle-triangle-'+(isRTL?'w':'e')+'">'+nextText+'</span></a>'));var currentText=this._get(inst,'currentText');var gotoDate=(this._get(inst,'gotoCurrent')&&inst.currentDay?currentDate:today);currentText=(!navigationAsDateFormat?currentText:this.formatDate(currentText,gotoDate,this._getFormatConfig(inst)));var controls=(!inst.inline?'<button type="button" class="ui-datepicker-close ui-state-default ui-priority-primary ui-corner-all" onclick="DP_jQuery_'+dpuuid+'.datepicker._hideDatepicker();">'+this._get(inst,'closeText')+'</button>':'');var buttonPanel=(showButtonPanel)?'<div class="ui-datepicker-buttonpane ui-widget-content">'+(isRTL?controls:'')+
(this._isInRange(inst,gotoDate)?'<button type="button" class="ui-datepicker-current ui-state-default ui-priority-secondary ui-corner-all" onclick="DP_jQuery_'+dpuuid+'.datepicker._gotoToday(\'#'+inst.id+'\');"'+'>'+currentText+'</button>':'')+(isRTL?'':controls)+'</div>':'';var firstDay=parseInt(this._get(inst,'firstDay'),10);firstDay=(isNaN(firstDay)?0:firstDay);var showWeek=this._get(inst,'showWeek');var dayNames=this._get(inst,'dayNames');var dayNamesShort=this._get(inst,'dayNamesShort');var dayNamesMin=this._get(inst,'dayNamesMin');var monthNames=this._get(inst,'monthNames');var monthNamesShort=this._get(inst,'monthNamesShort');var beforeShowDay=this._get(inst,'beforeShowDay');var showOtherMonths=this._get(inst,'showOtherMonths');var selectOtherMonths=this._get(inst,'selectOtherMonths');var calculateWeek=this._get(inst,'calculateWeek')||this.iso8601Week;var defaultDate=this._getDefaultDate(inst);var html='';for(var row=0;row<numMonths[0];row++){var group='';this.maxRows=4;for(var col=0;col<numMonths[1];col++){var selectedDate=this._daylightSavingAdjust(new Date(drawYear,drawMonth,inst.selectedDay));var cornerClass=' ui-corner-all';var calender='';if(isMultiMonth){calender+='<div class="ui-datepicker-group';if(numMonths[1]>1)
switch(col){case 0:calender+=' ui-datepicker-group-first';cornerClass=' ui-corner-'+(isRTL?'right':'left');break;case numMonths[1]-1:calender+=' ui-datepicker-group-last';cornerClass=' ui-corner-'+(isRTL?'left':'right');break;default:calender+=' ui-datepicker-group-middle';cornerClass='';break;}
calender+='">';}
calender+='<div class="ui-datepicker-header ui-widget-header ui-helper-clearfix'+cornerClass+'">'+
(/all|left/.test(cornerClass)&&row==0?(isRTL?next:prev):'')+
(/all|right/.test(cornerClass)&&row==0?(isRTL?prev:next):'')+
this._generateMonthYearHeader(inst,drawMonth,drawYear,minDate,maxDate,row>0||col>0,monthNames,monthNamesShort)+'</div><table class="ui-datepicker-calendar"><thead>'+'<tr>';var thead=(showWeek?'<th class="ui-datepicker-week-col">'+this._get(inst,'weekHeader')+'</th>':'');for(var dow=0;dow<7;dow++){var day=(dow+firstDay)%7;thead+='<th'+((dow+firstDay+6)%7>=5?' class="ui-datepicker-week-end"':'')+'>'+'<span title="'+dayNames[day]+'">'+dayNamesMin[day]+'</span></th>';}
calender+=thead+'</tr></thead><tbody>';var daysInMonth=this._getDaysInMonth(drawYear,drawMonth);if(drawYear==inst.selectedYear&&drawMonth==inst.selectedMonth)
inst.selectedDay=Math.min(inst.selectedDay,daysInMonth);var leadDays=(this._getFirstDayOfMonth(drawYear,drawMonth)-firstDay+7)%7;var curRows=Math.ceil((leadDays+daysInMonth)/7);var numRows=(isMultiMonth?this.maxRows>curRows?this.maxRows:curRows:curRows);this.maxRows=numRows;var printDate=this._daylightSavingAdjust(new Date(drawYear,drawMonth,1-leadDays));for(var dRow=0;dRow<numRows;dRow++){calender+='<tr>';var tbody=(!showWeek?'':'<td class="ui-datepicker-week-col">'+
this._get(inst,'calculateWeek')(printDate)+'</td>');for(var dow=0;dow<7;dow++){var daySettings=(beforeShowDay?beforeShowDay.apply((inst.input?inst.input[0]:null),[printDate]):[true,'']);var otherMonth=(printDate.getMonth()!=drawMonth);var unselectable=(otherMonth&&!selectOtherMonths)||!daySettings[0]||(minDate&&printDate<minDate)||(maxDate&&printDate>maxDate);tbody+='<td class="'+
((dow+firstDay+6)%7>=5?' ui-datepicker-week-end':'')+
(otherMonth?' ui-datepicker-other-month':'')+
((printDate.getTime()==selectedDate.getTime()&&drawMonth==inst.selectedMonth&&inst._keyEvent)||(defaultDate.getTime()==printDate.getTime()&&defaultDate.getTime()==selectedDate.getTime())?' '+this._dayOverClass:'')+
(unselectable?' '+this._unselectableClass+' ui-state-disabled':'')+
(otherMonth&&!showOtherMonths?'':' '+daySettings[1]+
(printDate.getTime()==currentDate.getTime()?' '+this._currentClass:'')+
(printDate.getTime()==today.getTime()?' ui-datepicker-today':''))+'"'+
((!otherMonth||showOtherMonths)&&daySettings[2]?' title="'+daySettings[2]+'"':'')+
(unselectable?'':' onclick="DP_jQuery_'+dpuuid+'.datepicker._selectDay(\'#'+
inst.id+'\','+printDate.getMonth()+','+printDate.getFullYear()+', this);return false;"')+'>'+
(otherMonth&&!showOtherMonths?'&#xa0;':(unselectable?'<span class="ui-state-default">'+printDate.getDate()+'</span>':'<a class="ui-state-default'+
(printDate.getTime()==today.getTime()?' ui-state-highlight':'')+
(printDate.getTime()==currentDate.getTime()?' ui-state-active':'')+
(otherMonth?' ui-priority-secondary':'')+'" href="#">'+printDate.getDate()+'</a>'))+'</td>';printDate.setDate(printDate.getDate()+1);printDate=this._daylightSavingAdjust(printDate);}
calender+=tbody+'</tr>';}
drawMonth++;if(drawMonth>11){drawMonth=0;drawYear++;}
calender+='</tbody></table>'+(isMultiMonth?'</div>'+
((numMonths[0]>0&&col==numMonths[1]-1)?'<div class="ui-datepicker-row-break"></div>':''):'');group+=calender;}
html+=group;}
html+=buttonPanel+($.browser.msie&&parseInt($.browser.version,10)<7&&!inst.inline?'<iframe src="javascript:false;" class="ui-datepicker-cover" frameborder="0"></iframe>':'');inst._keyEvent=false;return html;},_generateMonthYearHeader:function(inst,drawMonth,drawYear,minDate,maxDate,secondary,monthNames,monthNamesShort){var changeMonth=this._get(inst,'changeMonth');var changeYear=this._get(inst,'changeYear');var showMonthAfterYear=this._get(inst,'showMonthAfterYear');var html='<div class="ui-datepicker-title">';var monthHtml='';if(secondary||!changeMonth)
monthHtml+='<span class="ui-datepicker-month">'+monthNames[drawMonth]+'</span>';else{var inMinYear=(minDate&&minDate.getFullYear()==drawYear);var inMaxYear=(maxDate&&maxDate.getFullYear()==drawYear);monthHtml+='<select class="ui-datepicker-month" '+'onchange="DP_jQuery_'+dpuuid+'.datepicker._selectMonthYear(\'#'+inst.id+'\', this, \'M\');" '+'>';for(var month=0;month<12;month++){if((!inMinYear||month>=minDate.getMonth())&&(!inMaxYear||month<=maxDate.getMonth()))
monthHtml+='<option value="'+month+'"'+
(month==drawMonth?' selected="selected"':'')+'>'+monthNamesShort[month]+'</option>';}
monthHtml+='</select>';}
if(!showMonthAfterYear)
html+=monthHtml+(secondary||!(changeMonth&&changeYear)?'&#xa0;':'');if(!inst.yearshtml){inst.yearshtml='';if(secondary||!changeYear)
html+='<span class="ui-datepicker-year">'+drawYear+'</span>';else{var years=this._get(inst,'yearRange').split(':');var thisYear=new Date().getFullYear();var determineYear=function(value){var year=(value.match(/c[+-].*/)?drawYear+parseInt(value.substring(1),10):(value.match(/[+-].*/)?thisYear+parseInt(value,10):parseInt(value,10)));return(isNaN(year)?thisYear:year);};var year=determineYear(years[0]);var endYear=Math.max(year,determineYear(years[1]||''));year=(minDate?Math.max(year,minDate.getFullYear()):year);endYear=(maxDate?Math.min(endYear,maxDate.getFullYear()):endYear);inst.yearshtml+='<select class="ui-datepicker-year" '+'onchange="DP_jQuery_'+dpuuid+'.datepicker._selectMonthYear(\'#'+inst.id+'\', this, \'Y\');" '+'>';for(;year<=endYear;year++){inst.yearshtml+='<option value="'+year+'"'+
(year==drawYear?' selected="selected"':'')+'>'+year+'</option>';}
inst.yearshtml+='</select>';html+=inst.yearshtml;inst.yearshtml=null;}}
html+=this._get(inst,'yearSuffix');if(showMonthAfterYear)
html+=(secondary||!(changeMonth&&changeYear)?'&#xa0;':'')+monthHtml;html+='</div>';return html;},_adjustInstDate:function(inst,offset,period){var year=inst.drawYear+(period=='Y'?offset:0);var month=inst.drawMonth+(period=='M'?offset:0);var day=Math.min(inst.selectedDay,this._getDaysInMonth(year,month))+
(period=='D'?offset:0);var date=this._restrictMinMax(inst,this._daylightSavingAdjust(new Date(year,month,day)));inst.selectedDay=date.getDate();inst.drawMonth=inst.selectedMonth=date.getMonth();inst.drawYear=inst.selectedYear=date.getFullYear();if(period=='M'||period=='Y')
this._notifyChange(inst);},_restrictMinMax:function(inst,date){var minDate=this._getMinMaxDate(inst,'min');var maxDate=this._getMinMaxDate(inst,'max');var newDate=(minDate&&date<minDate?minDate:date);newDate=(maxDate&&newDate>maxDate?maxDate:newDate);return newDate;},_notifyChange:function(inst){var onChange=this._get(inst,'onChangeMonthYear');if(onChange)
onChange.apply((inst.input?inst.input[0]:null),[inst.selectedYear,inst.selectedMonth+1,inst]);},_getNumberOfMonths:function(inst){var numMonths=this._get(inst,'numberOfMonths');return(numMonths==null?[1,1]:(typeof numMonths=='number'?[1,numMonths]:numMonths));},_getMinMaxDate:function(inst,minMax){return this._determineDate(inst,this._get(inst,minMax+'Date'),null);},_getDaysInMonth:function(year,month){return 32-this._daylightSavingAdjust(new Date(year,month,32)).getDate();},_getFirstDayOfMonth:function(year,month){return new Date(year,month,1).getDay();},_canAdjustMonth:function(inst,offset,curYear,curMonth){var numMonths=this._getNumberOfMonths(inst);var date=this._daylightSavingAdjust(new Date(curYear,curMonth+(offset<0?offset:numMonths[0]*numMonths[1]),1));if(offset<0)
date.setDate(this._getDaysInMonth(date.getFullYear(),date.getMonth()));return this._isInRange(inst,date);},_isInRange:function(inst,date){var minDate=this._getMinMaxDate(inst,'min');var maxDate=this._getMinMaxDate(inst,'max');return((!minDate||date.getTime()>=minDate.getTime())&&(!maxDate||date.getTime()<=maxDate.getTime()));},_getFormatConfig:function(inst){var shortYearCutoff=this._get(inst,'shortYearCutoff');shortYearCutoff=(typeof shortYearCutoff!='string'?shortYearCutoff:new Date().getFullYear()%100+parseInt(shortYearCutoff,10));return{shortYearCutoff:shortYearCutoff,dayNamesShort:this._get(inst,'dayNamesShort'),dayNames:this._get(inst,'dayNames'),monthNamesShort:this._get(inst,'monthNamesShort'),monthNames:this._get(inst,'monthNames')};},_formatDate:function(inst,day,month,year){if(!day){inst.currentDay=inst.selectedDay;inst.currentMonth=inst.selectedMonth;inst.currentYear=inst.selectedYear;}
var date=(day?(typeof day=='object'?day:this._daylightSavingAdjust(new Date(year,month,day))):this._daylightSavingAdjust(new Date(inst.currentYear,inst.currentMonth,inst.currentDay)));return this.formatDate(this._get(inst,'dateFormat'),date,this._getFormatConfig(inst));}});function bindHover(dpDiv){var selector='button, .ui-datepicker-prev, .ui-datepicker-next, .ui-datepicker-calendar td a';return dpDiv.bind('mouseout',function(event){var elem=$(event.target).closest(selector);if(!elem.length){return;}
elem.removeClass("ui-state-hover ui-datepicker-prev-hover ui-datepicker-next-hover");}).bind('mouseover',function(event){var elem=$(event.target).closest(selector);if($.datepicker._isDisabledDatepicker(instActive.inline?dpDiv.parent()[0]:instActive.input[0])||!elem.length){return;}
elem.parents('.ui-datepicker-calendar').find('a').removeClass('ui-state-hover');elem.addClass('ui-state-hover');if(elem.hasClass('ui-datepicker-prev'))elem.addClass('ui-datepicker-prev-hover');if(elem.hasClass('ui-datepicker-next'))elem.addClass('ui-datepicker-next-hover');});}
function extendRemove(target,props){$.extend(target,props);for(var name in props)
if(props[name]==null||props[name]==undefined)
target[name]=props[name];return target;};function isArray(a){return(a&&(($.browser.safari&&typeof a=='object'&&a.length)||(a.constructor&&a.constructor.toString().match(/\Array\(\)/))));};$.fn.datepicker=function(options){if(!this.length){return this;}
if(!$.datepicker.initialized){$(document).mousedown($.datepicker._checkExternalClick).find('body').append($.datepicker.dpDiv);$.datepicker.initialized=true;}
var otherArgs=Array.prototype.slice.call(arguments,1);if(typeof options=='string'&&(options=='isDisabled'||options=='getDate'||options=='widget'))
return $.datepicker['_'+options+'Datepicker'].apply($.datepicker,[this[0]].concat(otherArgs));if(options=='option'&&arguments.length==2&&typeof arguments[1]=='string')
return $.datepicker['_'+options+'Datepicker'].apply($.datepicker,[this[0]].concat(otherArgs));return this.each(function(){typeof options=='string'?$.datepicker['_'+options+'Datepicker'].apply($.datepicker,[this].concat(otherArgs)):$.datepicker._attachDatepicker(this,options);});};$.datepicker=new Datepicker();$.datepicker.initialized=false;$.datepicker.uuid=new Date().getTime();$.datepicker.version="1.8.16";window['DP_jQuery_'+dpuuid]=$;})(jQuery);(function($,undefined){$.widget("ui.progressbar",{options:{value:0,max:100},min:0,_create:function(){this.element.addClass("ui-progressbar ui-widget ui-widget-content ui-corner-all").attr({role:"progressbar","aria-valuemin":this.min,"aria-valuemax":this.options.max,"aria-valuenow":this._value()});this.valueDiv=$("<div class='ui-progressbar-value ui-widget-header ui-corner-left'></div>").appendTo(this.element);this.oldValue=this._value();this._refreshValue();},destroy:function(){this.element.removeClass("ui-progressbar ui-widget ui-widget-content ui-corner-all").removeAttr("role").removeAttr("aria-valuemin").removeAttr("aria-valuemax").removeAttr("aria-valuenow");this.valueDiv.remove();$.Widget.prototype.destroy.apply(this,arguments);},value:function(newValue){if(newValue===undefined){return this._value();}
this._setOption("value",newValue);return this;},_setOption:function(key,value){if(key==="value"){this.options.value=value;this._refreshValue();if(this._value()===this.options.max){this._trigger("complete");}}
$.Widget.prototype._setOption.apply(this,arguments);},_value:function(){var val=this.options.value;if(typeof val!=="number"){val=0;}
return Math.min(this.options.max,Math.max(this.min,val));},_percentage:function(){return 100*this._value()/this.options.max;},_refreshValue:function(){var value=this.value();var percentage=this._percentage();if(this.oldValue!==value){this.oldValue=value;this._trigger("change");}
this.valueDiv.toggle(value>this.min).toggleClass("ui-corner-right",value===this.options.max).width(percentage.toFixed(0)+"%");this.element.attr("aria-valuenow",value);}});$.extend($.ui.progressbar,{version:"1.8.16"});})(jQuery);;jQuery.effects||(function($,undefined){$.effects={};$.each(['backgroundColor','borderBottomColor','borderLeftColor','borderRightColor','borderTopColor','borderColor','color','outlineColor'],function(i,attr){$.fx.step[attr]=function(fx){if(!fx.colorInit){fx.start=getColor(fx.elem,attr);fx.end=getRGB(fx.end);fx.colorInit=true;}
fx.elem.style[attr]='rgb('+
Math.max(Math.min(parseInt((fx.pos*(fx.end[0]-fx.start[0]))+fx.start[0],10),255),0)+','+
Math.max(Math.min(parseInt((fx.pos*(fx.end[1]-fx.start[1]))+fx.start[1],10),255),0)+','+
Math.max(Math.min(parseInt((fx.pos*(fx.end[2]-fx.start[2]))+fx.start[2],10),255),0)+')';};});function getRGB(color){var result;if(color&&color.constructor==Array&&color.length==3)
return color;if(result=/rgb\(\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*\)/.exec(color))
return[parseInt(result[1],10),parseInt(result[2],10),parseInt(result[3],10)];if(result=/rgb\(\s*([0-9]+(?:\.[0-9]+)?)\%\s*,\s*([0-9]+(?:\.[0-9]+)?)\%\s*,\s*([0-9]+(?:\.[0-9]+)?)\%\s*\)/.exec(color))
return[parseFloat(result[1])*2.55,parseFloat(result[2])*2.55,parseFloat(result[3])*2.55];if(result=/#([a-fA-F0-9]{2})([a-fA-F0-9]{2})([a-fA-F0-9]{2})/.exec(color))
return[parseInt(result[1],16),parseInt(result[2],16),parseInt(result[3],16)];if(result=/#([a-fA-F0-9])([a-fA-F0-9])([a-fA-F0-9])/.exec(color))
return[parseInt(result[1]+result[1],16),parseInt(result[2]+result[2],16),parseInt(result[3]+result[3],16)];if(result=/rgba\(0, 0, 0, 0\)/.exec(color))
return colors['transparent'];return colors[$.trim(color).toLowerCase()];}
function getColor(elem,attr){var color;do{color=$.curCSS(elem,attr);if(color!=''&&color!='transparent'||$.nodeName(elem,"body"))
break;attr="backgroundColor";}while(elem=elem.parentNode);return getRGB(color);};var colors={aqua:[0,255,255],azure:[240,255,255],beige:[245,245,220],black:[0,0,0],blue:[0,0,255],brown:[165,42,42],cyan:[0,255,255],darkblue:[0,0,139],darkcyan:[0,139,139],darkgrey:[169,169,169],darkgreen:[0,100,0],darkkhaki:[189,183,107],darkmagenta:[139,0,139],darkolivegreen:[85,107,47],darkorange:[255,140,0],darkorchid:[153,50,204],darkred:[139,0,0],darksalmon:[233,150,122],darkviolet:[148,0,211],fuchsia:[255,0,255],gold:[255,215,0],green:[0,128,0],indigo:[75,0,130],khaki:[240,230,140],lightblue:[173,216,230],lightcyan:[224,255,255],lightgreen:[144,238,144],lightgrey:[211,211,211],lightpink:[255,182,193],lightyellow:[255,255,224],lime:[0,255,0],magenta:[255,0,255],maroon:[128,0,0],navy:[0,0,128],olive:[128,128,0],orange:[255,165,0],pink:[255,192,203],purple:[128,0,128],violet:[128,0,128],red:[255,0,0],silver:[192,192,192],white:[255,255,255],yellow:[255,255,0],transparent:[255,255,255]};var classAnimationActions=['add','remove','toggle'],shorthandStyles={border:1,borderBottom:1,borderColor:1,borderLeft:1,borderRight:1,borderTop:1,borderWidth:1,margin:1,padding:1};function getElementStyles(){var style=document.defaultView?document.defaultView.getComputedStyle(this,null):this.currentStyle,newStyle={},key,camelCase;if(style&&style.length&&style[0]&&style[style[0]]){var len=style.length;while(len--){key=style[len];if(typeof style[key]=='string'){camelCase=key.replace(/\-(\w)/g,function(all,letter){return letter.toUpperCase();});newStyle[camelCase]=style[key];}}}else{for(key in style){if(typeof style[key]==='string'){newStyle[key]=style[key];}}}
return newStyle;}
function filterStyles(styles){var name,value;for(name in styles){value=styles[name];if(value==null||$.isFunction(value)||name in shorthandStyles||(/scrollbar/).test(name)||(!(/color/i).test(name)&&isNaN(parseFloat(value)))){delete styles[name];}}
return styles;}
function styleDifference(oldStyle,newStyle){var diff={_:0},name;for(name in newStyle){if(oldStyle[name]!=newStyle[name]){diff[name]=newStyle[name];}}
return diff;}
$.effects.animateClass=function(value,duration,easing,callback){if($.isFunction(easing)){callback=easing;easing=null;}
return this.queue(function(){var that=$(this),originalStyleAttr=that.attr('style')||' ',originalStyle=filterStyles(getElementStyles.call(this)),newStyle,className=that.attr('class');$.each(classAnimationActions,function(i,action){if(value[action]){that[action+'Class'](value[action]);}});newStyle=filterStyles(getElementStyles.call(this));that.attr('class',className);that.animate(styleDifference(originalStyle,newStyle),{queue:false,duration:duration,easing:easing,complete:function(){$.each(classAnimationActions,function(i,action){if(value[action]){that[action+'Class'](value[action]);}});if(typeof that.attr('style')=='object'){that.attr('style').cssText='';that.attr('style').cssText=originalStyleAttr;}else{that.attr('style',originalStyleAttr);}
if(callback){callback.apply(this,arguments);}
$.dequeue(this);}});});};$.fn.extend({_addClass:$.fn.addClass,addClass:function(classNames,speed,easing,callback){return speed?$.effects.animateClass.apply(this,[{add:classNames},speed,easing,callback]):this._addClass(classNames);},_removeClass:$.fn.removeClass,removeClass:function(classNames,speed,easing,callback){return speed?$.effects.animateClass.apply(this,[{remove:classNames},speed,easing,callback]):this._removeClass(classNames);},_toggleClass:$.fn.toggleClass,toggleClass:function(classNames,force,speed,easing,callback){if(typeof force=="boolean"||force===undefined){if(!speed){return this._toggleClass(classNames,force);}else{return $.effects.animateClass.apply(this,[(force?{add:classNames}:{remove:classNames}),speed,easing,callback]);}}else{return $.effects.animateClass.apply(this,[{toggle:classNames},force,speed,easing]);}},switchClass:function(remove,add,speed,easing,callback){return $.effects.animateClass.apply(this,[{add:add,remove:remove},speed,easing,callback]);}});$.extend($.effects,{version:"1.8.16",save:function(element,set){for(var i=0;i<set.length;i++){if(set[i]!==null)element.data("ec.storage."+set[i],element[0].style[set[i]]);}},restore:function(element,set){for(var i=0;i<set.length;i++){if(set[i]!==null)element.css(set[i],element.data("ec.storage."+set[i]));}},setMode:function(el,mode){if(mode=='toggle')mode=el.is(':hidden')?'show':'hide';return mode;},getBaseline:function(origin,original){var y,x;switch(origin[0]){case'top':y=0;break;case'middle':y=0.5;break;case'bottom':y=1;break;default:y=origin[0]/original.height;};switch(origin[1]){case'left':x=0;break;case'center':x=0.5;break;case'right':x=1;break;default:x=origin[1]/original.width;};return{x:x,y:y};},createWrapper:function(element){if(element.parent().is('.ui-effects-wrapper')){return element.parent();}
var props={width:element.outerWidth(true),height:element.outerHeight(true),'float':element.css('float')},wrapper=$('<div></div>').addClass('ui-effects-wrapper').css({fontSize:'100%',background:'transparent',border:'none',margin:0,padding:0}),active=document.activeElement;element.wrap(wrapper);if(element[0]===active||$.contains(element[0],active)){$(active).focus();}
wrapper=element.parent();if(element.css('position')=='static'){wrapper.css({position:'relative'});element.css({position:'relative'});}else{$.extend(props,{position:element.css('position'),zIndex:element.css('z-index')});$.each(['top','left','bottom','right'],function(i,pos){props[pos]=element.css(pos);if(isNaN(parseInt(props[pos],10))){props[pos]='auto';}});element.css({position:'relative',top:0,left:0,right:'auto',bottom:'auto'});}
return wrapper.css(props).show();},removeWrapper:function(element){var parent,active=document.activeElement;if(element.parent().is('.ui-effects-wrapper')){parent=element.parent().replaceWith(element);if(element[0]===active||$.contains(element[0],active)){$(active).focus();}
return parent;}
return element;},setTransition:function(element,list,factor,value){value=value||{};$.each(list,function(i,x){unit=element.cssUnit(x);if(unit[0]>0)value[x]=unit[0]*factor+unit[1];});return value;}});function _normalizeArguments(effect,options,speed,callback){if(typeof effect=='object'){callback=options;speed=null;options=effect;effect=options.effect;}
if($.isFunction(options)){callback=options;speed=null;options={};}
if(typeof options=='number'||$.fx.speeds[options]){callback=speed;speed=options;options={};}
if($.isFunction(speed)){callback=speed;speed=null;}
options=options||{};speed=speed||options.duration;speed=$.fx.off?0:typeof speed=='number'?speed:speed in $.fx.speeds?$.fx.speeds[speed]:$.fx.speeds._default;callback=callback||options.complete;return[effect,options,speed,callback];}
function standardSpeed(speed){if(!speed||typeof speed==="number"||$.fx.speeds[speed]){return true;}
if(typeof speed==="string"&&!$.effects[speed]){return true;}
return false;}
$.fn.extend({effect:function(effect,options,speed,callback){var args=_normalizeArguments.apply(this,arguments),args2={options:args[1],duration:args[2],callback:args[3]},mode=args2.options.mode,effectMethod=$.effects[effect];if($.fx.off||!effectMethod){if(mode){return this[mode](args2.duration,args2.callback);}else{return this.each(function(){if(args2.callback){args2.callback.call(this);}});}}
return effectMethod.call(this,args2);},_show:$.fn.show,show:function(speed){if(standardSpeed(speed)){return this._show.apply(this,arguments);}else{var args=_normalizeArguments.apply(this,arguments);args[1].mode='show';return this.effect.apply(this,args);}},_hide:$.fn.hide,hide:function(speed){if(standardSpeed(speed)){return this._hide.apply(this,arguments);}else{var args=_normalizeArguments.apply(this,arguments);args[1].mode='hide';return this.effect.apply(this,args);}},__toggle:$.fn.toggle,toggle:function(speed){if(standardSpeed(speed)||typeof speed==="boolean"||$.isFunction(speed)){return this.__toggle.apply(this,arguments);}else{var args=_normalizeArguments.apply(this,arguments);args[1].mode='toggle';return this.effect.apply(this,args);}},cssUnit:function(key){var style=this.css(key),val=[];$.each(['em','px','%','pt'],function(i,unit){if(style.indexOf(unit)>0)
val=[parseFloat(style),unit];});return val;}});$.easing.jswing=$.easing.swing;$.extend($.easing,{def:'easeOutQuad',swing:function(x,t,b,c,d){return $.easing[$.easing.def](x,t,b,c,d);},easeInQuad:function(x,t,b,c,d){return c*(t/=d)*t+b;},easeOutQuad:function(x,t,b,c,d){return-c*(t/=d)*(t-2)+b;},easeInOutQuad:function(x,t,b,c,d){if((t/=d/2)<1)return c/2*t*t+b;return-c/2*((--t)*(t-2)-1)+b;},easeInCubic:function(x,t,b,c,d){return c*(t/=d)*t*t+b;},easeOutCubic:function(x,t,b,c,d){return c*((t=t/d-1)*t*t+1)+b;},easeInOutCubic:function(x,t,b,c,d){if((t/=d/2)<1)return c/2*t*t*t+b;return c/2*((t-=2)*t*t+2)+b;},easeInQuart:function(x,t,b,c,d){return c*(t/=d)*t*t*t+b;},easeOutQuart:function(x,t,b,c,d){return-c*((t=t/d-1)*t*t*t-1)+b;},easeInOutQuart:function(x,t,b,c,d){if((t/=d/2)<1)return c/2*t*t*t*t+b;return-c/2*((t-=2)*t*t*t-2)+b;},easeInQuint:function(x,t,b,c,d){return c*(t/=d)*t*t*t*t+b;},easeOutQuint:function(x,t,b,c,d){return c*((t=t/d-1)*t*t*t*t+1)+b;},easeInOutQuint:function(x,t,b,c,d){if((t/=d/2)<1)return c/2*t*t*t*t*t+b;return c/2*((t-=2)*t*t*t*t+2)+b;},easeInSine:function(x,t,b,c,d){return-c*Math.cos(t/d*(Math.PI/2))+c+b;},easeOutSine:function(x,t,b,c,d){return c*Math.sin(t/d*(Math.PI/2))+b;},easeInOutSine:function(x,t,b,c,d){return-c/2*(Math.cos(Math.PI*t/d)-1)+b;},easeInExpo:function(x,t,b,c,d){return(t==0)?b:c*Math.pow(2,10*(t/d-1))+b;},easeOutExpo:function(x,t,b,c,d){return(t==d)?b+c:c*(-Math.pow(2,-10*t/d)+1)+b;},easeInOutExpo:function(x,t,b,c,d){if(t==0)return b;if(t==d)return b+c;if((t/=d/2)<1)return c/2*Math.pow(2,10*(t-1))+b;return c/2*(-Math.pow(2,-10* --t)+2)+b;},easeInCirc:function(x,t,b,c,d){return-c*(Math.sqrt(1-(t/=d)*t)-1)+b;},easeOutCirc:function(x,t,b,c,d){return c*Math.sqrt(1-(t=t/d-1)*t)+b;},easeInOutCirc:function(x,t,b,c,d){if((t/=d/2)<1)return-c/2*(Math.sqrt(1-t*t)-1)+b;return c/2*(Math.sqrt(1-(t-=2)*t)+1)+b;},easeInElastic:function(x,t,b,c,d){var s=1.70158;var p=0;var a=c;if(t==0)return b;if((t/=d)==1)return b+c;if(!p)p=d*.3;if(a<Math.abs(c)){a=c;var s=p/4;}
else var s=p/(2*Math.PI)*Math.asin(c/a);return-(a*Math.pow(2,10*(t-=1))*Math.sin((t*d-s)*(2*Math.PI)/p))+b;},easeOutElastic:function(x,t,b,c,d){var s=1.70158;var p=0;var a=c;if(t==0)return b;if((t/=d)==1)return b+c;if(!p)p=d*.3;if(a<Math.abs(c)){a=c;var s=p/4;}
else var s=p/(2*Math.PI)*Math.asin(c/a);return a*Math.pow(2,-10*t)*Math.sin((t*d-s)*(2*Math.PI)/p)+c+b;},easeInOutElastic:function(x,t,b,c,d){var s=1.70158;var p=0;var a=c;if(t==0)return b;if((t/=d/2)==2)return b+c;if(!p)p=d*(.3*1.5);if(a<Math.abs(c)){a=c;var s=p/4;}
else var s=p/(2*Math.PI)*Math.asin(c/a);if(t<1)return-.5*(a*Math.pow(2,10*(t-=1))*Math.sin((t*d-s)*(2*Math.PI)/p))+b;return a*Math.pow(2,-10*(t-=1))*Math.sin((t*d-s)*(2*Math.PI)/p)*.5+c+b;},easeInBack:function(x,t,b,c,d,s){if(s==undefined)s=1.70158;return c*(t/=d)*t*((s+1)*t-s)+b;},easeOutBack:function(x,t,b,c,d,s){if(s==undefined)s=1.70158;return c*((t=t/d-1)*t*((s+1)*t+s)+1)+b;},easeInOutBack:function(x,t,b,c,d,s){if(s==undefined)s=1.70158;if((t/=d/2)<1)return c/2*(t*t*(((s*=(1.525))+1)*t-s))+b;return c/2*((t-=2)*t*(((s*=(1.525))+1)*t+s)+2)+b;},easeInBounce:function(x,t,b,c,d){return c-$.easing.easeOutBounce(x,d-t,0,c,d)+b;},easeOutBounce:function(x,t,b,c,d){if((t/=d)<(1/2.75)){return c*(7.5625*t*t)+b;}else if(t<(2/2.75)){return c*(7.5625*(t-=(1.5/2.75))*t+.75)+b;}else if(t<(2.5/2.75)){return c*(7.5625*(t-=(2.25/2.75))*t+.9375)+b;}else{return c*(7.5625*(t-=(2.625/2.75))*t+.984375)+b;}},easeInOutBounce:function(x,t,b,c,d){if(t<d/2)return $.easing.easeInBounce(x,t*2,0,c,d)*.5+b;return $.easing.easeOutBounce(x,t*2-d,0,c,d)*.5+c*.5+b;}});})(jQuery);(function($,undefined){$.effects.blind=function(o){return this.queue(function(){var el=$(this),props=['position','top','bottom','left','right'];var mode=$.effects.setMode(el,o.options.mode||'hide');var direction=o.options.direction||'vertical';$.effects.save(el,props);el.show();var wrapper=$.effects.createWrapper(el).css({overflow:'hidden'});var ref=(direction=='vertical')?'height':'width';var distance=(direction=='vertical')?wrapper.height():wrapper.width();if(mode=='show')wrapper.css(ref,0);var animation={};animation[ref]=mode=='show'?distance:0;wrapper.animate(animation,o.duration,o.options.easing,function(){if(mode=='hide')el.hide();$.effects.restore(el,props);$.effects.removeWrapper(el);if(o.callback)o.callback.apply(el[0],arguments);el.dequeue();});});};})(jQuery);(function($,undefined){$.effects.bounce=function(o){return this.queue(function(){var el=$(this),props=['position','top','bottom','left','right'];var mode=$.effects.setMode(el,o.options.mode||'effect');var direction=o.options.direction||'up';var distance=o.options.distance||20;var times=o.options.times||5;var speed=o.duration||250;if(/show|hide/.test(mode))props.push('opacity');$.effects.save(el,props);el.show();$.effects.createWrapper(el);var ref=(direction=='up'||direction=='down')?'top':'left';var motion=(direction=='up'||direction=='left')?'pos':'neg';var distance=o.options.distance||(ref=='top'?el.outerHeight({margin:true})/3:el.outerWidth({margin:true})/3);if(mode=='show')el.css('opacity',0).css(ref,motion=='pos'?-distance:distance);if(mode=='hide')distance=distance/(times*2);if(mode!='hide')times--;if(mode=='show'){var animation={opacity:1};animation[ref]=(motion=='pos'?'+=':'-=')+distance;el.animate(animation,speed/2,o.options.easing);distance=distance/2;times--;};for(var i=0;i<times;i++){var animation1={},animation2={};animation1[ref]=(motion=='pos'?'-=':'+=')+distance;animation2[ref]=(motion=='pos'?'+=':'-=')+distance;el.animate(animation1,speed/2,o.options.easing).animate(animation2,speed/2,o.options.easing);distance=(mode=='hide')?distance*2:distance/2;};if(mode=='hide'){var animation={opacity:0};animation[ref]=(motion=='pos'?'-=':'+=')+distance;el.animate(animation,speed/2,o.options.easing,function(){el.hide();$.effects.restore(el,props);$.effects.removeWrapper(el);if(o.callback)o.callback.apply(this,arguments);});}else{var animation1={},animation2={};animation1[ref]=(motion=='pos'?'-=':'+=')+distance;animation2[ref]=(motion=='pos'?'+=':'-=')+distance;el.animate(animation1,speed/2,o.options.easing).animate(animation2,speed/2,o.options.easing,function(){$.effects.restore(el,props);$.effects.removeWrapper(el);if(o.callback)o.callback.apply(this,arguments);});};el.queue('fx',function(){el.dequeue();});el.dequeue();});};})(jQuery);(function($,undefined){$.effects.clip=function(o){return this.queue(function(){var el=$(this),props=['position','top','bottom','left','right','height','width'];var mode=$.effects.setMode(el,o.options.mode||'hide');var direction=o.options.direction||'vertical';$.effects.save(el,props);el.show();var wrapper=$.effects.createWrapper(el).css({overflow:'hidden'});var animate=el[0].tagName=='IMG'?wrapper:el;var ref={size:(direction=='vertical')?'height':'width',position:(direction=='vertical')?'top':'left'};var distance=(direction=='vertical')?animate.height():animate.width();if(mode=='show'){animate.css(ref.size,0);animate.css(ref.position,distance/2);}
var animation={};animation[ref.size]=mode=='show'?distance:0;animation[ref.position]=mode=='show'?0:distance/2;animate.animate(animation,{queue:false,duration:o.duration,easing:o.options.easing,complete:function(){if(mode=='hide')el.hide();$.effects.restore(el,props);$.effects.removeWrapper(el);if(o.callback)o.callback.apply(el[0],arguments);el.dequeue();}});});};})(jQuery);(function($,undefined){$.effects.drop=function(o){return this.queue(function(){var el=$(this),props=['position','top','bottom','left','right','opacity'];var mode=$.effects.setMode(el,o.options.mode||'hide');var direction=o.options.direction||'left';$.effects.save(el,props);el.show();$.effects.createWrapper(el);var ref=(direction=='up'||direction=='down')?'top':'left';var motion=(direction=='up'||direction=='left')?'pos':'neg';var distance=o.options.distance||(ref=='top'?el.outerHeight({margin:true})/2:el.outerWidth({margin:true})/2);if(mode=='show')el.css('opacity',0).css(ref,motion=='pos'?-distance:distance);var animation={opacity:mode=='show'?1:0};animation[ref]=(mode=='show'?(motion=='pos'?'+=':'-='):(motion=='pos'?'-=':'+='))+distance;el.animate(animation,{queue:false,duration:o.duration,easing:o.options.easing,complete:function(){if(mode=='hide')el.hide();$.effects.restore(el,props);$.effects.removeWrapper(el);if(o.callback)o.callback.apply(this,arguments);el.dequeue();}});});};})(jQuery);(function($,undefined){$.effects.explode=function(o){return this.queue(function(){var rows=o.options.pieces?Math.round(Math.sqrt(o.options.pieces)):3;var cells=o.options.pieces?Math.round(Math.sqrt(o.options.pieces)):3;o.options.mode=o.options.mode=='toggle'?($(this).is(':visible')?'hide':'show'):o.options.mode;var el=$(this).show().css('visibility','hidden');var offset=el.offset();offset.top-=parseInt(el.css("marginTop"),10)||0;offset.left-=parseInt(el.css("marginLeft"),10)||0;var width=el.outerWidth(true);var height=el.outerHeight(true);for(var i=0;i<rows;i++){for(var j=0;j<cells;j++){el.clone().appendTo('body').wrap('<div></div>').css({position:'absolute',visibility:'visible',left:-j*(width/cells),top:-i*(height/rows)}).parent().addClass('ui-effects-explode').css({position:'absolute',overflow:'hidden',width:width/cells,height:height/rows,left:offset.left+j*(width/cells)+(o.options.mode=='show'?(j-Math.floor(cells/2))*(width/cells):0),top:offset.top+i*(height/rows)+(o.options.mode=='show'?(i-Math.floor(rows/2))*(height/rows):0),opacity:o.options.mode=='show'?0:1}).animate({left:offset.left+j*(width/cells)+(o.options.mode=='show'?0:(j-Math.floor(cells/2))*(width/cells)),top:offset.top+i*(height/rows)+(o.options.mode=='show'?0:(i-Math.floor(rows/2))*(height/rows)),opacity:o.options.mode=='show'?1:0},o.duration||500);}}
setTimeout(function(){o.options.mode=='show'?el.css({visibility:'visible'}):el.css({visibility:'visible'}).hide();if(o.callback)o.callback.apply(el[0]);el.dequeue();$('div.ui-effects-explode').remove();},o.duration||500);});};})(jQuery);(function($,undefined){$.effects.fade=function(o){return this.queue(function(){var elem=$(this),mode=$.effects.setMode(elem,o.options.mode||'hide');elem.animate({opacity:mode},{queue:false,duration:o.duration,easing:o.options.easing,complete:function(){(o.callback&&o.callback.apply(this,arguments));elem.dequeue();}});});};})(jQuery);(function($,undefined){$.effects.fold=function(o){return this.queue(function(){var el=$(this),props=['position','top','bottom','left','right'];var mode=$.effects.setMode(el,o.options.mode||'hide');var size=o.options.size||15;var horizFirst=!(!o.options.horizFirst);var duration=o.duration?o.duration/2:$.fx.speeds._default/2;$.effects.save(el,props);el.show();var wrapper=$.effects.createWrapper(el).css({overflow:'hidden'});var widthFirst=((mode=='show')!=horizFirst);var ref=widthFirst?['width','height']:['height','width'];var distance=widthFirst?[wrapper.width(),wrapper.height()]:[wrapper.height(),wrapper.width()];var percent=/([0-9]+)%/.exec(size);if(percent)size=parseInt(percent[1],10)/100*distance[mode=='hide'?0:1];if(mode=='show')wrapper.css(horizFirst?{height:0,width:size}:{height:size,width:0});var animation1={},animation2={};animation1[ref[0]]=mode=='show'?distance[0]:size;animation2[ref[1]]=mode=='show'?distance[1]:0;wrapper.animate(animation1,duration,o.options.easing).animate(animation2,duration,o.options.easing,function(){if(mode=='hide')el.hide();$.effects.restore(el,props);$.effects.removeWrapper(el);if(o.callback)o.callback.apply(el[0],arguments);el.dequeue();});});};})(jQuery);(function($,undefined){$.effects.highlight=function(o){return this.queue(function(){var elem=$(this),props=['backgroundImage','backgroundColor','opacity'],mode=$.effects.setMode(elem,o.options.mode||'show'),animation={backgroundColor:elem.css('backgroundColor')};if(mode=='hide'){animation.opacity=0;}
$.effects.save(elem,props);elem.show().css({backgroundImage:'none',backgroundColor:o.options.color||'#ffff99'}).animate(animation,{queue:false,duration:o.duration,easing:o.options.easing,complete:function(){(mode=='hide'&&elem.hide());$.effects.restore(elem,props);(mode=='show'&&!$.support.opacity&&this.style.removeAttribute('filter'));(o.callback&&o.callback.apply(this,arguments));elem.dequeue();}});});};})(jQuery);(function($,undefined){$.effects.pulsate=function(o){return this.queue(function(){var elem=$(this),mode=$.effects.setMode(elem,o.options.mode||'show');times=((o.options.times||5)*2)-1;duration=o.duration?o.duration/2:$.fx.speeds._default/2,isVisible=elem.is(':visible'),animateTo=0;if(!isVisible){elem.css('opacity',0).show();animateTo=1;}
if((mode=='hide'&&isVisible)||(mode=='show'&&!isVisible)){times--;}
for(var i=0;i<times;i++){elem.animate({opacity:animateTo},duration,o.options.easing);animateTo=(animateTo+1)%2;}
elem.animate({opacity:animateTo},duration,o.options.easing,function(){if(animateTo==0){elem.hide();}
(o.callback&&o.callback.apply(this,arguments));});elem.queue('fx',function(){elem.dequeue();}).dequeue();});};})(jQuery);(function($,undefined){$.effects.puff=function(o){return this.queue(function(){var elem=$(this),mode=$.effects.setMode(elem,o.options.mode||'hide'),percent=parseInt(o.options.percent,10)||150,factor=percent/100,original={height:elem.height(),width:elem.width()};$.extend(o.options,{fade:true,mode:mode,percent:mode=='hide'?percent:100,from:mode=='hide'?original:{height:original.height*factor,width:original.width*factor}});elem.effect('scale',o.options,o.duration,o.callback);elem.dequeue();});};$.effects.scale=function(o){return this.queue(function(){var el=$(this);var options=$.extend(true,{},o.options);var mode=$.effects.setMode(el,o.options.mode||'effect');var percent=parseInt(o.options.percent,10)||(parseInt(o.options.percent,10)==0?0:(mode=='hide'?0:100));var direction=o.options.direction||'both';var origin=o.options.origin;if(mode!='effect'){options.origin=origin||['middle','center'];options.restore=true;}
var original={height:el.height(),width:el.width()};el.from=o.options.from||(mode=='show'?{height:0,width:0}:original);var factor={y:direction!='horizontal'?(percent/100):1,x:direction!='vertical'?(percent/100):1};el.to={height:original.height*factor.y,width:original.width*factor.x};if(o.options.fade){if(mode=='show'){el.from.opacity=0;el.to.opacity=1;};if(mode=='hide'){el.from.opacity=1;el.to.opacity=0;};};options.from=el.from;options.to=el.to;options.mode=mode;el.effect('size',options,o.duration,o.callback);el.dequeue();});};$.effects.size=function(o){return this.queue(function(){var el=$(this),props=['position','top','bottom','left','right','width','height','overflow','opacity'];var props1=['position','top','bottom','left','right','overflow','opacity'];var props2=['width','height','overflow'];var cProps=['fontSize'];var vProps=['borderTopWidth','borderBottomWidth','paddingTop','paddingBottom'];var hProps=['borderLeftWidth','borderRightWidth','paddingLeft','paddingRight'];var mode=$.effects.setMode(el,o.options.mode||'effect');var restore=o.options.restore||false;var scale=o.options.scale||'both';var origin=o.options.origin;var original={height:el.height(),width:el.width()};el.from=o.options.from||original;el.to=o.options.to||original;if(origin){var baseline=$.effects.getBaseline(origin,original);el.from.top=(original.height-el.from.height)*baseline.y;el.from.left=(original.width-el.from.width)*baseline.x;el.to.top=(original.height-el.to.height)*baseline.y;el.to.left=(original.width-el.to.width)*baseline.x;};var factor={from:{y:el.from.height/original.height,x:el.from.width/original.width},to:{y:el.to.height/original.height,x:el.to.width/original.width}};if(scale=='box'||scale=='both'){if(factor.from.y!=factor.to.y){props=props.concat(vProps);el.from=$.effects.setTransition(el,vProps,factor.from.y,el.from);el.to=$.effects.setTransition(el,vProps,factor.to.y,el.to);};if(factor.from.x!=factor.to.x){props=props.concat(hProps);el.from=$.effects.setTransition(el,hProps,factor.from.x,el.from);el.to=$.effects.setTransition(el,hProps,factor.to.x,el.to);};};if(scale=='content'||scale=='both'){if(factor.from.y!=factor.to.y){props=props.concat(cProps);el.from=$.effects.setTransition(el,cProps,factor.from.y,el.from);el.to=$.effects.setTransition(el,cProps,factor.to.y,el.to);};};$.effects.save(el,restore?props:props1);el.show();$.effects.createWrapper(el);el.css('overflow','hidden').css(el.from);if(scale=='content'||scale=='both'){vProps=vProps.concat(['marginTop','marginBottom']).concat(cProps);hProps=hProps.concat(['marginLeft','marginRight']);props2=props.concat(vProps).concat(hProps);el.find("*[width]").each(function(){child=$(this);if(restore)$.effects.save(child,props2);var c_original={height:child.height(),width:child.width()};child.from={height:c_original.height*factor.from.y,width:c_original.width*factor.from.x};child.to={height:c_original.height*factor.to.y,width:c_original.width*factor.to.x};if(factor.from.y!=factor.to.y){child.from=$.effects.setTransition(child,vProps,factor.from.y,child.from);child.to=$.effects.setTransition(child,vProps,factor.to.y,child.to);};if(factor.from.x!=factor.to.x){child.from=$.effects.setTransition(child,hProps,factor.from.x,child.from);child.to=$.effects.setTransition(child,hProps,factor.to.x,child.to);};child.css(child.from);child.animate(child.to,o.duration,o.options.easing,function(){if(restore)$.effects.restore(child,props2);});});};el.animate(el.to,{queue:false,duration:o.duration,easing:o.options.easing,complete:function(){if(el.to.opacity===0){el.css('opacity',el.from.opacity);}
if(mode=='hide')el.hide();$.effects.restore(el,restore?props:props1);$.effects.removeWrapper(el);if(o.callback)o.callback.apply(this,arguments);el.dequeue();}});});};})(jQuery);(function($,undefined){$.effects.shake=function(o){return this.queue(function(){var el=$(this),props=['position','top','bottom','left','right'];var mode=$.effects.setMode(el,o.options.mode||'effect');var direction=o.options.direction||'left';var distance=o.options.distance||20;var times=o.options.times||3;var speed=o.duration||o.options.duration||140;$.effects.save(el,props);el.show();$.effects.createWrapper(el);var ref=(direction=='up'||direction=='down')?'top':'left';var motion=(direction=='up'||direction=='left')?'pos':'neg';var animation={},animation1={},animation2={};animation[ref]=(motion=='pos'?'-=':'+=')+distance;animation1[ref]=(motion=='pos'?'+=':'-=')+distance*2;animation2[ref]=(motion=='pos'?'-=':'+=')+distance*2;el.animate(animation,speed,o.options.easing);for(var i=1;i<times;i++){el.animate(animation1,speed,o.options.easing).animate(animation2,speed,o.options.easing);};el.animate(animation1,speed,o.options.easing).animate(animation,speed/2,o.options.easing,function(){$.effects.restore(el,props);$.effects.removeWrapper(el);if(o.callback)o.callback.apply(this,arguments);});el.queue('fx',function(){el.dequeue();});el.dequeue();});};})(jQuery);(function($,undefined){$.effects.slide=function(o){return this.queue(function(){var el=$(this),props=['position','top','bottom','left','right'];var mode=$.effects.setMode(el,o.options.mode||'show');var direction=o.options.direction||'left';$.effects.save(el,props);el.show();$.effects.createWrapper(el).css({overflow:'hidden'});var ref=(direction=='up'||direction=='down')?'top':'left';var motion=(direction=='up'||direction=='left')?'pos':'neg';var distance=o.options.distance||(ref=='top'?el.outerHeight({margin:true}):el.outerWidth({margin:true}));if(mode=='show')el.css(ref,motion=='pos'?(isNaN(distance)?"-"+distance:-distance):distance);var animation={};animation[ref]=(mode=='show'?(motion=='pos'?'+=':'-='):(motion=='pos'?'-=':'+='))+distance;el.animate(animation,{queue:false,duration:o.duration,easing:o.options.easing,complete:function(){if(mode=='hide')el.hide();$.effects.restore(el,props);$.effects.removeWrapper(el);if(o.callback)o.callback.apply(this,arguments);el.dequeue();}});});};})(jQuery);(function($,undefined){$.effects.transfer=function(o){return this.queue(function(){var elem=$(this),target=$(o.options.to),endPosition=target.offset(),animation={top:endPosition.top,left:endPosition.left,height:target.innerHeight(),width:target.innerWidth()},startPosition=elem.offset(),transfer=$('<div class="ui-effects-transfer"></div>').appendTo(document.body).addClass(o.options.className).css({top:startPosition.top,left:startPosition.left,height:elem.innerHeight(),width:elem.innerWidth(),position:'absolute'}).animate(animation,o.duration,o.options.easing,function(){transfer.remove();(o.callback&&o.callback.apply(elem[0],arguments));elem.dequeue();});});};})(jQuery);;(function(window,document,$){var isInputSupported='placeholder'in document.createElement('input'),isTextareaSupported='placeholder'in document.createElement('textarea'),prototype=$.fn,valHooks=$.valHooks,hooks,placeholder;if(isInputSupported&&isTextareaSupported){placeholder=prototype.placeholder=function(){return this;};placeholder.input=placeholder.textarea=true;}else{placeholder=prototype.placeholder=function(){var $this=this;$this.filter((isInputSupported?'textarea':':input')+'[placeholder]').not('.placeholder').bind({'focus.placeholder':clearPlaceholder,'blur.placeholder':setPlaceholder}).data('placeholder-enabled',true).trigger('blur.placeholder');return $this;};placeholder.input=isInputSupported;placeholder.textarea=isTextareaSupported;hooks={'get':function(element){var $element=$(element);return $element.data('placeholder-enabled')&&$element.hasClass('placeholder')?'':element.value;},'set':function(element,value){var $element=$(element);if(!$element.data('placeholder-enabled')){return element.value=value;}
if(value==''){element.value=value;if(element!=document.activeElement){setPlaceholder.call(element);}}else if($element.hasClass('placeholder')){clearPlaceholder.call(element,true,value)||(element.value=value);}else{element.value=value;}
return $element;}};isInputSupported||(valHooks.input=hooks);isTextareaSupported||(valHooks.textarea=hooks);$(function(){$(document).delegate('form','submit.placeholder',function(){var $inputs=$('.placeholder',this).each(clearPlaceholder);setTimeout(function(){$inputs.each(setPlaceholder);},10);});});$(window).bind('beforeunload.placeholder',function(){$('.placeholder').each(function(){this.value='';});});}
function args(elem){var newAttrs={},rinlinejQuery=/^jQuery\d+$/;$.each(elem.attributes,function(i,attr){if(attr.specified&&!rinlinejQuery.test(attr.name)){newAttrs[attr.name]=attr.value;}});return newAttrs;}
function clearPlaceholder(event,value){var input=this,$input=$(input);if(input.value==$input.attr('placeholder')&&$input.hasClass('placeholder')){if($input.data('placeholder-password')){$input=$input.hide().next().show().attr('id',$input.removeAttr('id').data('placeholder-id'));if(event===true){return $input[0].value=value;}
$input.focus();}else{input.value='';$input.removeClass('placeholder');input==document.activeElement&&input.select();}}}
function setPlaceholder(){var $replacement,input=this,$input=$(input),$origInput=$input,id=this.id;if(input.value==''){if(input.type=='password'){if(!$input.data('placeholder-textinput')){try{$replacement=$input.clone().attr({'type':'text'});}catch(e){$replacement=$('<input>').attr($.extend(args(this),{'type':'text'}));}
$replacement.removeAttr('name').data({'placeholder-password':true,'placeholder-id':id}).bind('focus.placeholder',clearPlaceholder);$input.data({'placeholder-textinput':$replacement,'placeholder-id':id}).before($replacement);}
$input=$input.removeAttr('id').hide().prev().attr('id',id).show();}
$input.addClass('placeholder');$input[0].value=$input.attr('placeholder');}else{$input.removeClass('placeholder');}}}(this,document,jQuery));/* =========================================================
 * bootstrap-datepicker.js
 * Repo: https://github.com/eternicode/bootstrap-datepicker/
 * Demo: http://eternicode.github.io/bootstrap-datepicker/
 * Docs: http://bootstrap-datepicker.readthedocs.org/
 * Forked from http://www.eyecon.ro/bootstrap-datepicker
 * =========================================================
 * Started by Stefan Petre; improvements by Andrew Rowls + contributors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * ========================================================= */

(function($, undefined){

	var $window = $(window);

	function UTCDate(){
		return new Date(Date.UTC.apply(Date, arguments));
	}
	function UTCToday(){
		var today = new Date();
		return UTCDate(today.getFullYear(), today.getMonth(), today.getDate());
	}
	function alias(method){
		return function(){
			return this[method].apply(this, arguments);
		};
	}

	var DateArray = (function(){
		var extras = {
			get: function(i){
				return this.slice(i)[0];
			},
			contains: function(d){
				// Array.indexOf is not cross-browser;
				// $.inArray doesn't work with Dates
				var val = d && d.valueOf();
				for (var i=0, l=this.length; i < l; i++)
					if (this[i].valueOf() === val)
						return i;
				return -1;
			},
			remove: function(i){
				this.splice(i,1);
			},
			replace: function(new_array){
				if (!new_array)
					return;
				if (!$.isArray(new_array))
					new_array = [new_array];
				this.clear();
				this.push.apply(this, new_array);
			},
			clear: function(){
				this.length = 0;
			},
			copy: function(){
				var a = new DateArray();
				a.replace(this);
				return a;
			}
		};

		return function(){
			var a = [];
			a.push.apply(a, arguments);
			$.extend(a, extras);
			return a;
		};
	})();


	// Picker object

	var Datepicker = function(element, options){
		this.dates = new DateArray();
		this.viewDate = UTCToday();
		this.focusDate = null;

		this._process_options(options);

		this.element = $(element);
		this.isInline = false;
		this.isInput = this.element.is('input');
		this.component = this.element.is('.date') ? this.element.find('.add-on, .input-group-addon, .btn') : false;
		this.hasInput = this.component && this.element.find('input').length;
		if (this.component && this.component.length === 0)
			this.component = false;

		this.picker = $(DPGlobal.template);
		this._buildEvents();
		this._attachEvents();

		if (this.isInline){
			this.picker.addClass('datepicker-inline').appendTo(this.element);
		}
		else {
			this.picker.addClass('datepicker-dropdown dropdown-menu');
		}

		if (this.o.rtl){
			this.picker.addClass('datepicker-rtl');
		}

		this.viewMode = this.o.startView;

		if (this.o.calendarWeeks)
			this.picker.find('tfoot th.today, tfoot th.clear')
						.attr('colspan', function(i, val){
							return parseInt(val) + 1;
						});

		this._allow_update = false;

		this.setStartDate(this._o.startDate);
		this.setEndDate(this._o.endDate);
		this.setDaysOfWeekDisabled(this.o.daysOfWeekDisabled);

		this.fillDow();
		this.fillMonths();

		this._allow_update = true;

		this.update();
		this.showMode();

		if (this.isInline){
			this.show();
		}
	};

	Datepicker.prototype = {
		constructor: Datepicker,

		_process_options: function(opts){
			// Store raw options for reference
			this._o = $.extend({}, this._o, opts);
			// Processed options
			var o = this.o = $.extend({}, this._o);

			// Check if "de-DE" style date is available, if not language should
			// fallback to 2 letter code eg "de"
			var lang = o.language;
			if (!dates[lang]){
				lang = lang.split('-')[0];
				if (!dates[lang])
					lang = defaults.language;
			}
			o.language = lang;

			switch (o.startView){
				case 2:
				case 'decade':
					o.startView = 2;
					break;
				case 1:
				case 'year':
					o.startView = 1;
					break;
				default:
					o.startView = 0;
			}

			switch (o.minViewMode){
				case 1:
				case 'months':
					o.minViewMode = 1;
					break;
				case 2:
				case 'years':
					o.minViewMode = 2;
					break;
				default:
					o.minViewMode = 0;
			}

			o.startView = Math.max(o.startView, o.minViewMode);

			// true, false, or Number > 0
			if (o.multidate !== true){
				o.multidate = Number(o.multidate) || false;
				if (o.multidate !== false)
					o.multidate = Math.max(0, o.multidate);
				else
					o.multidate = 1;
			}
			o.multidateSeparator = String(o.multidateSeparator);

			o.weekStart %= 7;
			o.weekEnd = ((o.weekStart + 6) % 7);

			var format = DPGlobal.parseFormat(o.format);
			if (o.startDate !== -Infinity){
				if (!!o.startDate){
					if (o.startDate instanceof Date)
						o.startDate = this._local_to_utc(this._zero_time(o.startDate));
					else
						o.startDate = DPGlobal.parseDate(o.startDate, format, o.language);
				}
				else {
					o.startDate = -Infinity;
				}
			}
			if (o.endDate !== Infinity){
				if (!!o.endDate){
					if (o.endDate instanceof Date)
						o.endDate = this._local_to_utc(this._zero_time(o.endDate));
					else
						o.endDate = DPGlobal.parseDate(o.endDate, format, o.language);
				}
				else {
					o.endDate = Infinity;
				}
			}

			o.daysOfWeekDisabled = o.daysOfWeekDisabled||[];
			if (!$.isArray(o.daysOfWeekDisabled))
				o.daysOfWeekDisabled = o.daysOfWeekDisabled.split(/[,\s]*/);
			o.daysOfWeekDisabled = $.map(o.daysOfWeekDisabled, function(d){
				return parseInt(d, 10);
			});

			var plc = String(o.orientation).toLowerCase().split(/\s+/g),
				_plc = o.orientation.toLowerCase();
			plc = $.grep(plc, function(word){
				return (/^auto|left|right|top|bottom$/).test(word);
			});
			o.orientation = {x: 'auto', y: 'auto'};
			if (!_plc || _plc === 'auto')
				; // no action
			else if (plc.length === 1){
				switch (plc[0]){
					case 'top':
					case 'bottom':
						o.orientation.y = plc[0];
						break;
					case 'left':
					case 'right':
						o.orientation.x = plc[0];
						break;
				}
			}
			else {
				_plc = $.grep(plc, function(word){
					return (/^left|right$/).test(word);
				});
				o.orientation.x = _plc[0] || 'auto';

				_plc = $.grep(plc, function(word){
					return (/^top|bottom$/).test(word);
				});
				o.orientation.y = _plc[0] || 'auto';
			}
		},
		_events: [],
		_secondaryEvents: [],
		_applyEvents: function(evs){
			for (var i=0, el, ch, ev; i < evs.length; i++){
				el = evs[i][0];
				if (evs[i].length === 2){
					ch = undefined;
					ev = evs[i][1];
				}
				else if (evs[i].length === 3){
					ch = evs[i][1];
					ev = evs[i][2];
				}
				el.on(ev, ch);
			}
		},
		_unapplyEvents: function(evs){
			for (var i=0, el, ev, ch; i < evs.length; i++){
				el = evs[i][0];
				if (evs[i].length === 2){
					ch = undefined;
					ev = evs[i][1];
				}
				else if (evs[i].length === 3){
					ch = evs[i][1];
					ev = evs[i][2];
				}
				el.off(ev, ch);
			}
		},
		_buildEvents: function(){
			if (this.isInput){ // single input
				this._events = [
					[this.element, {
						focus: $.proxy(this.show, this),
						keyup: $.proxy(function(e){
							if ($.inArray(e.keyCode, [27,37,39,38,40,32,13,9]) === -1)
								this.update();
						}, this),
						keydown: $.proxy(this.keydown, this)
					}]
				];
			}
			else if (this.component && this.hasInput){ // component: input + button
				this._events = [
					// For components that are not readonly, allow keyboard nav
					[this.element.find('input'), {
						focus: $.proxy(this.show, this),
						keyup: $.proxy(function(e){
							if ($.inArray(e.keyCode, [27,37,39,38,40,32,13,9]) === -1)
								this.update();
						}, this),
						keydown: $.proxy(this.keydown, this)
					}],
					[this.component, {
						click: $.proxy(this.show, this)
					}]
				];
			}
			else if (this.element.is('div')){  // inline datepicker
				this.isInline = true;
			}
			else {
				this._events = [
					[this.element, {
						click: $.proxy(this.show, this)
					}]
				];
			}
			this._events.push(
				// Component: listen for blur on element descendants
				[this.element, '*', {
					blur: $.proxy(function(e){
						this._focused_from = e.target;
					}, this)
				}],
				// Input: listen for blur on element
				[this.element, {
					blur: $.proxy(function(e){
						this._focused_from = e.target;
					}, this)
				}]
			);

			this._secondaryEvents = [
				[this.picker, {
					click: $.proxy(this.click, this)
				}],
				[$(window), {
					resize: $.proxy(this.place, this)
				}],
				[$(document), {
					'mousedown touchstart': $.proxy(function(e){
						// Clicked outside the datepicker, hide it
						if (!(
							this.element.is(e.target) ||
							this.element.find(e.target).length ||
							this.picker.is(e.target) ||
							this.picker.find(e.target).length
						)){
							this.hide();
						}
					}, this)
				}]
			];
		},
		_attachEvents: function(){
			this._detachEvents();
			this._applyEvents(this._events);
		},
		_detachEvents: function(){
			this._unapplyEvents(this._events);
		},
		_attachSecondaryEvents: function(){
			this._detachSecondaryEvents();
			this._applyEvents(this._secondaryEvents);
		},
		_detachSecondaryEvents: function(){
			this._unapplyEvents(this._secondaryEvents);
		},
		_trigger: function(event, altdate){
			var date = altdate || this.dates.get(-1),
				local_date = this._utc_to_local(date);

			this.element.trigger({
				type: event,
				date: local_date,
				dates: $.map(this.dates, this._utc_to_local),
				format: $.proxy(function(ix, format){
					if (arguments.length === 0){
						ix = this.dates.length - 1;
						format = this.o.format;
					}
					else if (typeof ix === 'string'){
						format = ix;
						ix = this.dates.length - 1;
					}
					format = format || this.o.format;
					var date = this.dates.get(ix);
					return DPGlobal.formatDate(date, format, this.o.language);
				}, this)
			});
		},

		show: function(){
			if (!this.isInline)
				this.picker.appendTo('body');
			this.picker.show();
			this.place();
			this._attachSecondaryEvents();
			this._trigger('show');
		},

		hide: function(){
			if (this.isInline)
				return;
			if (!this.picker.is(':visible'))
				return;
			this.focusDate = null;
			this.picker.hide().detach();
			this._detachSecondaryEvents();
			this.viewMode = this.o.startView;
			this.showMode();

			if (
				this.o.forceParse &&
				(
					this.isInput && this.element.val() ||
					this.hasInput && this.element.find('input').val()
				)
			)
				this.setValue();
			this._trigger('hide');
		},

		remove: function(){
			this.hide();
			this._detachEvents();
			this._detachSecondaryEvents();
			this.picker.remove();
			delete this.element.data().datepicker;
			if (!this.isInput){
				delete this.element.data().date;
			}
		},

		_utc_to_local: function(utc){
			return utc && new Date(utc.getTime() + (utc.getTimezoneOffset()*60000));
		},
		_local_to_utc: function(local){
			return local && new Date(local.getTime() - (local.getTimezoneOffset()*60000));
		},
		_zero_time: function(local){
			return local && new Date(local.getFullYear(), local.getMonth(), local.getDate());
		},
		_zero_utc_time: function(utc){
			return utc && new Date(Date.UTC(utc.getUTCFullYear(), utc.getUTCMonth(), utc.getUTCDate()));
		},

		getDates: function(){
			return $.map(this.dates, this._utc_to_local);
		},

		getUTCDates: function(){
			return $.map(this.dates, function(d){
				return new Date(d);
			});
		},

		getDate: function(){
			return this._utc_to_local(this.getUTCDate());
		},

		getUTCDate: function(){
			return new Date(this.dates.get(-1));
		},

		setDates: function(){
			var args = $.isArray(arguments[0]) ? arguments[0] : arguments;
			this.update.apply(this, args);
			this._trigger('changeDate');
			this.setValue();
		},

		setUTCDates: function(){
			var args = $.isArray(arguments[0]) ? arguments[0] : arguments;
			this.update.apply(this, $.map(args, this._utc_to_local));
			this._trigger('changeDate');
			this.setValue();
		},

		setDate: alias('setDates'),
		setUTCDate: alias('setUTCDates'),

		setValue: function(){
			var formatted = this.getFormattedDate();
			if (!this.isInput){
				if (this.component){
					this.element.find('input').val(formatted).change();
				}
			}
			else {
				this.element.val(formatted).change();
			}
		},

		getFormattedDate: function(format){
			if (format === undefined)
				format = this.o.format;

			var lang = this.o.language;
			return $.map(this.dates, function(d){
				return DPGlobal.formatDate(d, format, lang);
			}).join(this.o.multidateSeparator);
		},

		setStartDate: function(startDate){
			this._process_options({startDate: startDate});
			this.update();
			this.updateNavArrows();
		},

		setEndDate: function(endDate){
			this._process_options({endDate: endDate});
			this.update();
			this.updateNavArrows();
		},

		setDaysOfWeekDisabled: function(daysOfWeekDisabled){
			this._process_options({daysOfWeekDisabled: daysOfWeekDisabled});
			this.update();
			this.updateNavArrows();
		},

		place: function(){
			if (this.isInline)
				return;
			var calendarWidth = this.picker.outerWidth(),
				calendarHeight = this.picker.outerHeight(),
				visualPadding = 10,
				windowWidth = $window.width(),
				windowHeight = $window.height(),
				scrollTop = $window.scrollTop();

			var parentsZindex = [];
			this.element.parents().each(function() {
				var itemZIndex = $(this).css('z-index');
				if ( itemZIndex !== 'auto' && itemZIndex !== 0 ) parentsZindex.push( parseInt( itemZIndex ) );
			});
			var zIndex = Math.max.apply( Math, parentsZindex ) + 10;
			var offset = this.component ? this.component.parent().offset() : this.element.offset();
			var height = this.component ? this.component.outerHeight(true) : this.element.outerHeight(false);
			var width = this.component ? this.component.outerWidth(true) : this.element.outerWidth(false);
			var left = offset.left,
				top = offset.top;

			this.picker.removeClass(
				'datepicker-orient-top datepicker-orient-bottom '+
				'datepicker-orient-right datepicker-orient-left'
			);

			if (this.o.orientation.x !== 'auto'){
				this.picker.addClass('datepicker-orient-' + this.o.orientation.x);
				if (this.o.orientation.x === 'right')
					left -= calendarWidth - width;
			}
			// auto x orientation is best-placement: if it crosses a window
			// edge, fudge it sideways
			else {
				// Default to left
				this.picker.addClass('datepicker-orient-left');
				if (offset.left < 0)
					left -= offset.left - visualPadding;
				else if (offset.left + calendarWidth > windowWidth)
					left = windowWidth - calendarWidth - visualPadding;
			}

			// auto y orientation is best-situation: top or bottom, no fudging,
			// decision based on which shows more of the calendar
			var yorient = this.o.orientation.y,
				top_overflow, bottom_overflow;
			if (yorient === 'auto'){
				top_overflow = -scrollTop + offset.top - calendarHeight;
				bottom_overflow = scrollTop + windowHeight - (offset.top + height + calendarHeight);
				if (Math.max(top_overflow, bottom_overflow) === bottom_overflow)
					yorient = 'top';
				else
					yorient = 'bottom';
			}
			this.picker.addClass('datepicker-orient-' + yorient);
			if (yorient === 'top')
				top += height;
			else
				top -= calendarHeight + parseInt(this.picker.css('padding-top'));

			this.picker.css({
				top: top,
				left: left,
				zIndex: zIndex
			});
		},

		_allow_update: true,
		update: function(){
			if (!this._allow_update)
				return;

			var oldDates = this.dates.copy(),
				dates = [],
				fromArgs = false;
			if (arguments.length){
				$.each(arguments, $.proxy(function(i, date){
					if (date instanceof Date)
						date = this._local_to_utc(date);
					dates.push(date);
				}, this));
				fromArgs = true;
			}
			else {
				dates = this.isInput
						? this.element.val()
						: this.element.data('date') || this.element.find('input').val();
				if (dates && this.o.multidate)
					dates = dates.split(this.o.multidateSeparator);
				else
					dates = [dates];
				delete this.element.data().date;
			}

			dates = $.map(dates, $.proxy(function(date){
				return DPGlobal.parseDate(date, this.o.format, this.o.language);
			}, this));
			dates = $.grep(dates, $.proxy(function(date){
				return (
					date < this.o.startDate ||
					date > this.o.endDate ||
					!date
				);
			}, this), true);
			this.dates.replace(dates);

			if (this.dates.length)
				this.viewDate = new Date(this.dates.get(-1));
			else if (this.viewDate < this.o.startDate)
				this.viewDate = new Date(this.o.startDate);
			else if (this.viewDate > this.o.endDate)
				this.viewDate = new Date(this.o.endDate);

			if (fromArgs){
				// setting date by clicking
				this.setValue();
			}
			else if (dates.length){
				// setting date by typing
				if (String(oldDates) !== String(this.dates))
					this._trigger('changeDate');
			}
			if (!this.dates.length && oldDates.length)
				this._trigger('clearDate');

			this.fill();
		},

		fillDow: function(){
			var dowCnt = this.o.weekStart,
				html = '<tr>';
			if (this.o.calendarWeeks){
				var cell = '<th class="cw">&nbsp;</th>';
				html += cell;
				this.picker.find('.datepicker-days thead tr:first-child').prepend(cell);
			}
			while (dowCnt < this.o.weekStart + 7){
				html += '<th class="dow">'+dates[this.o.language].daysMin[(dowCnt++)%7]+'</th>';
			}
			html += '</tr>';
			this.picker.find('.datepicker-days thead').append(html);
		},

		fillMonths: function(){
			var html = '',
			i = 0;
			while (i < 12){
				html += '<span class="month">'+dates[this.o.language].monthsShort[i++]+'</span>';
			}
			this.picker.find('.datepicker-months td').html(html);
		},

		setRange: function(range){
			if (!range || !range.length)
				delete this.range;
			else
				this.range = $.map(range, function(d){
					return d.valueOf();
				});
			this.fill();
		},

		getClassNames: function(date){
			var cls = [],
				year = this.viewDate.getUTCFullYear(),
				month = this.viewDate.getUTCMonth(),
				today = new Date();
			if (date.getUTCFullYear() < year || (date.getUTCFullYear() === year && date.getUTCMonth() < month)){
				cls.push('old');
			}
			else if (date.getUTCFullYear() > year || (date.getUTCFullYear() === year && date.getUTCMonth() > month)){
				cls.push('new');
			}
			if (this.focusDate && date.valueOf() === this.focusDate.valueOf())
				cls.push('focused');
			// Compare internal UTC date with local today, not UTC today
			if (this.o.todayHighlight &&
				date.getUTCFullYear() === today.getFullYear() &&
				date.getUTCMonth() === today.getMonth() &&
				date.getUTCDate() === today.getDate()){
				cls.push('today');
			}
			if (this.dates.contains(date) !== -1)
				cls.push('active');
			if (date.valueOf() < this.o.startDate || date.valueOf() > this.o.endDate ||
				$.inArray(date.getUTCDay(), this.o.daysOfWeekDisabled) !== -1){
				cls.push('disabled');
			}
			if (this.range){
				if (date > this.range[0] && date < this.range[this.range.length-1]){
					cls.push('range');
				}
				if ($.inArray(date.valueOf(), this.range) !== -1){
					cls.push('selected');
				}
			}
			return cls;
		},

		fill: function(){
			var d = new Date(this.viewDate),
				year = d.getUTCFullYear(),
				month = d.getUTCMonth(),
				startYear = this.o.startDate !== -Infinity ? this.o.startDate.getUTCFullYear() : -Infinity,
				startMonth = this.o.startDate !== -Infinity ? this.o.startDate.getUTCMonth() : -Infinity,
				endYear = this.o.endDate !== Infinity ? this.o.endDate.getUTCFullYear() : Infinity,
				endMonth = this.o.endDate !== Infinity ? this.o.endDate.getUTCMonth() : Infinity,
				todaytxt = dates[this.o.language].today || dates['en'].today || '',
				cleartxt = dates[this.o.language].clear || dates['en'].clear || '',
				tooltip;
			if (isNaN(year) || isNaN(month)) return;
			this.picker.find('.datepicker-days thead th.datepicker-switch')
						.text(dates[this.o.language].months[month]+' '+year);
			this.picker.find('tfoot th.today')
						.text(todaytxt)
						.toggle(this.o.todayBtn !== false);
			this.picker.find('tfoot th.clear')
						.text(cleartxt)
						.toggle(this.o.clearBtn !== false);
			this.updateNavArrows();
			this.fillMonths();
			var prevMonth = UTCDate(year, month-1, 28),
				day = DPGlobal.getDaysInMonth(prevMonth.getUTCFullYear(), prevMonth.getUTCMonth());
			prevMonth.setUTCDate(day);
			prevMonth.setUTCDate(day - (prevMonth.getUTCDay() - this.o.weekStart + 7)%7);
			var nextMonth = new Date(prevMonth);
			nextMonth.setUTCDate(nextMonth.getUTCDate() + 42);
			nextMonth = nextMonth.valueOf();
			var html = [];
			var clsName;
			while (prevMonth.valueOf() < nextMonth){
				if (prevMonth.getUTCDay() === this.o.weekStart){
					html.push('<tr>');
					if (this.o.calendarWeeks){
						// ISO 8601: First week contains first thursday.
						// ISO also states week starts on Monday, but we can be more abstract here.
						var
							// Start of current week: based on weekstart/current date
							ws = new Date(+prevMonth + (this.o.weekStart - prevMonth.getUTCDay() - 7) % 7 * 864e5),
							// Thursday of this week
							th = new Date(Number(ws) + (7 + 4 - ws.getUTCDay()) % 7 * 864e5),
							// First Thursday of year, year from thursday
							yth = new Date(Number(yth = UTCDate(th.getUTCFullYear(), 0, 1)) + (7 + 4 - yth.getUTCDay())%7*864e5),
							// Calendar week: ms between thursdays, div ms per day, div 7 days
							calWeek =  (th - yth) / 864e5 / 7 + 1;
						html.push('<td class="cw">'+ calWeek +'</td>');

					}
				}
				clsName = this.getClassNames(prevMonth);
				clsName.push('day');

				if (this.o.beforeShowDay !== $.noop){
					var before = this.o.beforeShowDay(this._utc_to_local(prevMonth));
					if (before === undefined)
						before = {};
					else if (typeof(before) === 'boolean')
						before = {enabled: before};
					else if (typeof(before) === 'string')
						before = {classes: before};
					if (before.enabled === false)
						clsName.push('disabled');
					if (before.classes)
						clsName = clsName.concat(before.classes.split(/\s+/));
					if (before.tooltip)
						tooltip = before.tooltip;
				}

				clsName = $.unique(clsName);
				html.push('<td class="'+clsName.join(' ')+'"' + (tooltip ? ' title="'+tooltip+'"' : '') + '>'+prevMonth.getUTCDate() + '</td>');
				tooltip = null;
				if (prevMonth.getUTCDay() === this.o.weekEnd){
					html.push('</tr>');
				}
				prevMonth.setUTCDate(prevMonth.getUTCDate()+1);
			}
			this.picker.find('.datepicker-days tbody').empty().append(html.join(''));

			var months = this.picker.find('.datepicker-months')
						.find('th:eq(1)')
							.text(year)
							.end()
						.find('span').removeClass('active');

			$.each(this.dates, function(i, d){
				if (d.getUTCFullYear() === year)
					months.eq(d.getUTCMonth()).addClass('active');
			});

			if (year < startYear || year > endYear){
				months.addClass('disabled');
			}
			if (year === startYear){
				months.slice(0, startMonth).addClass('disabled');
			}
			if (year === endYear){
				months.slice(endMonth+1).addClass('disabled');
			}

			html = '';
			year = parseInt(year/10, 10) * 10;
			var yearCont = this.picker.find('.datepicker-years')
								.find('th:eq(1)')
									.text(year + '-' + (year + 9))
									.end()
								.find('td');
			year -= 1;
			var years = $.map(this.dates, function(d){
					return d.getUTCFullYear();
				}),
				classes;
			for (var i = -1; i < 11; i++){
				classes = ['year'];
				if (i === -1)
					classes.push('old');
				else if (i === 10)
					classes.push('new');
				if ($.inArray(year, years) !== -1)
					classes.push('active');
				if (year < startYear || year > endYear)
					classes.push('disabled');
				html += '<span class="' + classes.join(' ') + '">'+year+'</span>';
				year += 1;
			}
			yearCont.html(html);
		},

		updateNavArrows: function(){
			if (!this._allow_update)
				return;

			var d = new Date(this.viewDate),
				year = d.getUTCFullYear(),
				month = d.getUTCMonth();
			switch (this.viewMode){
				case 0:
					if (this.o.startDate !== -Infinity && year <= this.o.startDate.getUTCFullYear() && month <= this.o.startDate.getUTCMonth()){
						this.picker.find('.prev').css({visibility: 'hidden'});
					}
					else {
						this.picker.find('.prev').css({visibility: 'visible'});
					}
					if (this.o.endDate !== Infinity && year >= this.o.endDate.getUTCFullYear() && month >= this.o.endDate.getUTCMonth()){
						this.picker.find('.next').css({visibility: 'hidden'});
					}
					else {
						this.picker.find('.next').css({visibility: 'visible'});
					}
					break;
				case 1:
				case 2:
					if (this.o.startDate !== -Infinity && year <= this.o.startDate.getUTCFullYear()){
						this.picker.find('.prev').css({visibility: 'hidden'});
					}
					else {
						this.picker.find('.prev').css({visibility: 'visible'});
					}
					if (this.o.endDate !== Infinity && year >= this.o.endDate.getUTCFullYear()){
						this.picker.find('.next').css({visibility: 'hidden'});
					}
					else {
						this.picker.find('.next').css({visibility: 'visible'});
					}
					break;
			}
		},

		click: function(e){
			e.preventDefault();
			var target = $(e.target).closest('span, td, th'),
				year, month, day;
			if (target.length === 1){
				switch (target[0].nodeName.toLowerCase()){
					case 'th':
						switch (target[0].className){
							case 'datepicker-switch':
								this.showMode(1);
								break;
							case 'prev':
							case 'next':
								var dir = DPGlobal.modes[this.viewMode].navStep * (target[0].className === 'prev' ? -1 : 1);
								switch (this.viewMode){
									case 0:
										this.viewDate = this.moveMonth(this.viewDate, dir);
										this._trigger('changeMonth', this.viewDate);
										break;
									case 1:
									case 2:
										this.viewDate = this.moveYear(this.viewDate, dir);
										if (this.viewMode === 1)
											this._trigger('changeYear', this.viewDate);
										break;
								}
								this.fill();
								break;
							case 'today':
								var date = new Date();
								date = UTCDate(date.getFullYear(), date.getMonth(), date.getDate(), 0, 0, 0);

								this.showMode(-2);
								var which = this.o.todayBtn === 'linked' ? null : 'view';
								this._setDate(date, which);
								break;
							case 'clear':
								var element;
								if (this.isInput)
									element = this.element;
								else if (this.component)
									element = this.element.find('input');
								if (element)
									element.val("").change();
								this.update();
								this._trigger('changeDate');
								if (this.o.autoclose)
									this.hide();
								break;
						}
						break;
					case 'span':
						if (!target.is('.disabled')){
							this.viewDate.setUTCDate(1);
							if (target.is('.month')){
								day = 1;
								month = target.parent().find('span').index(target);
								year = this.viewDate.getUTCFullYear();
								this.viewDate.setUTCMonth(month);
								this._trigger('changeMonth', this.viewDate);
								if (this.o.minViewMode === 1){
									this._setDate(UTCDate(year, month, day));
								}
							}
							else {
								day = 1;
								month = 0;
								year = parseInt(target.text(), 10)||0;
								this.viewDate.setUTCFullYear(year);
								this._trigger('changeYear', this.viewDate);
								if (this.o.minViewMode === 2){
									this._setDate(UTCDate(year, month, day));
								}
							}
							this.showMode(-1);
							this.fill();
						}
						break;
					case 'td':
						if (target.is('.day') && !target.is('.disabled')){
							day = parseInt(target.text(), 10)||1;
							year = this.viewDate.getUTCFullYear();
							month = this.viewDate.getUTCMonth();
							if (target.is('.old')){
								if (month === 0){
									month = 11;
									year -= 1;
								}
								else {
									month -= 1;
								}
							}
							else if (target.is('.new')){
								if (month === 11){
									month = 0;
									year += 1;
								}
								else {
									month += 1;
								}
							}
							this._setDate(UTCDate(year, month, day));
						}
						break;
				}
			}
			if (this.picker.is(':visible') && this._focused_from){
				$(this._focused_from).focus();
			}
			delete this._focused_from;
		},

		_toggle_multidate: function(date){
			var ix = this.dates.contains(date);
			if (!date){
				this.dates.clear();
			}
			if (this.o.multidate === 1 && ix === 0){
                // single datepicker, don't remove selected date
            }
			else if (ix !== -1){
				this.dates.remove(ix);
			}
			else {
				this.dates.push(date);
			}
			if (typeof this.o.multidate === 'number')
				while (this.dates.length > this.o.multidate)
					this.dates.remove(0);
		},

		_setDate: function(date, which){
			if (!which || which === 'date')
				this._toggle_multidate(date && new Date(date));
			if (!which || which  === 'view')
				this.viewDate = date && new Date(date);

			this.fill();
			this.setValue();
			this._trigger('changeDate');
			var element;
			if (this.isInput){
				element = this.element;
			}
			else if (this.component){
				element = this.element.find('input');
			}
			if (element){
				element.change();
			}
			if (this.o.autoclose && (!which || which === 'date')){
				this.hide();
			}
		},

		moveMonth: function(date, dir){
			if (!date)
				return undefined;
			if (!dir)
				return date;
			var new_date = new Date(date.valueOf()),
				day = new_date.getUTCDate(),
				month = new_date.getUTCMonth(),
				mag = Math.abs(dir),
				new_month, test;
			dir = dir > 0 ? 1 : -1;
			if (mag === 1){
				test = dir === -1
					// If going back one month, make sure month is not current month
					// (eg, Mar 31 -> Feb 31 == Feb 28, not Mar 02)
					? function(){
						return new_date.getUTCMonth() === month;
					}
					// If going forward one month, make sure month is as expected
					// (eg, Jan 31 -> Feb 31 == Feb 28, not Mar 02)
					: function(){
						return new_date.getUTCMonth() !== new_month;
					};
				new_month = month + dir;
				new_date.setUTCMonth(new_month);
				// Dec -> Jan (12) or Jan -> Dec (-1) -- limit expected date to 0-11
				if (new_month < 0 || new_month > 11)
					new_month = (new_month + 12) % 12;
			}
			else {
				// For magnitudes >1, move one month at a time...
				for (var i=0; i < mag; i++)
					// ...which might decrease the day (eg, Jan 31 to Feb 28, etc)...
					new_date = this.moveMonth(new_date, dir);
				// ...then reset the day, keeping it in the new month
				new_month = new_date.getUTCMonth();
				new_date.setUTCDate(day);
				test = function(){
					return new_month !== new_date.getUTCMonth();
				};
			}
			// Common date-resetting loop -- if date is beyond end of month, make it
			// end of month
			while (test()){
				new_date.setUTCDate(--day);
				new_date.setUTCMonth(new_month);
			}
			return new_date;
		},

		moveYear: function(date, dir){
			return this.moveMonth(date, dir*12);
		},

		dateWithinRange: function(date){
			return date >= this.o.startDate && date <= this.o.endDate;
		},

		keydown: function(e){
			if (this.picker.is(':not(:visible)')){
				if (e.keyCode === 27) // allow escape to hide and re-show picker
					this.show();
				return;
			}
			var dateChanged = false,
				dir, newDate, newViewDate,
				focusDate = this.focusDate || this.viewDate;
			switch (e.keyCode){
				case 27: // escape
					if (this.focusDate){
						this.focusDate = null;
						this.viewDate = this.dates.get(-1) || this.viewDate;
						this.fill();
					}
					else
						this.hide();
					e.preventDefault();
					break;
				case 37: // left
				case 39: // right
					if (!this.o.keyboardNavigation)
						break;
					dir = e.keyCode === 37 ? -1 : 1;
					if (e.ctrlKey){
						newDate = this.moveYear(this.dates.get(-1) || UTCToday(), dir);
						newViewDate = this.moveYear(focusDate, dir);
						this._trigger('changeYear', this.viewDate);
					}
					else if (e.shiftKey){
						newDate = this.moveMonth(this.dates.get(-1) || UTCToday(), dir);
						newViewDate = this.moveMonth(focusDate, dir);
						this._trigger('changeMonth', this.viewDate);
					}
					else {
						newDate = new Date(this.dates.get(-1) || UTCToday());
						newDate.setUTCDate(newDate.getUTCDate() + dir);
						newViewDate = new Date(focusDate);
						newViewDate.setUTCDate(focusDate.getUTCDate() + dir);
					}
					if (this.dateWithinRange(newDate)){
						this.focusDate = this.viewDate = newViewDate;
						this.setValue();
						this.fill();
						e.preventDefault();
					}
					break;
				case 38: // up
				case 40: // down
					if (!this.o.keyboardNavigation)
						break;
					dir = e.keyCode === 38 ? -1 : 1;
					if (e.ctrlKey){
						newDate = this.moveYear(this.dates.get(-1) || UTCToday(), dir);
						newViewDate = this.moveYear(focusDate, dir);
						this._trigger('changeYear', this.viewDate);
					}
					else if (e.shiftKey){
						newDate = this.moveMonth(this.dates.get(-1) || UTCToday(), dir);
						newViewDate = this.moveMonth(focusDate, dir);
						this._trigger('changeMonth', this.viewDate);
					}
					else {
						newDate = new Date(this.dates.get(-1) || UTCToday());
						newDate.setUTCDate(newDate.getUTCDate() + dir * 7);
						newViewDate = new Date(focusDate);
						newViewDate.setUTCDate(focusDate.getUTCDate() + dir * 7);
					}
					if (this.dateWithinRange(newDate)){
						this.focusDate = this.viewDate = newViewDate;
						this.setValue();
						this.fill();
						e.preventDefault();
					}
					break;
				case 32: // spacebar
					// Spacebar is used in manually typing dates in some formats.
					// As such, its behavior should not be hijacked.
					break;
				case 13: // enter
					focusDate = this.focusDate || this.dates.get(-1) || this.viewDate;
					if (this.o.keyboardNavigation) {
						this._toggle_multidate(focusDate);
						dateChanged = true;
					}
					this.focusDate = null;
					this.viewDate = this.dates.get(-1) || this.viewDate;
					this.setValue();
					this.fill();
					if (this.picker.is(':visible')){
						e.preventDefault();
						if (this.o.autoclose)
							this.hide();
					}
					break;
				case 9: // tab
					this.focusDate = null;
					this.viewDate = this.dates.get(-1) || this.viewDate;
					this.fill();
					this.hide();
					break;
			}
			if (dateChanged){
				if (this.dates.length)
					this._trigger('changeDate');
				else
					this._trigger('clearDate');
				var element;
				if (this.isInput){
					element = this.element;
				}
				else if (this.component){
					element = this.element.find('input');
				}
				if (element){
					element.change();
				}
			}
		},

		showMode: function(dir){
			if (dir){
				this.viewMode = Math.max(this.o.minViewMode, Math.min(2, this.viewMode + dir));
			}
			this.picker
				.find('>div')
				.hide()
				.filter('.datepicker-'+DPGlobal.modes[this.viewMode].clsName)
					.css('display', 'block');
			this.updateNavArrows();
		}
	};

	var DateRangePicker = function(element, options){
		this.element = $(element);
		this.inputs = $.map(options.inputs, function(i){
			return i.jquery ? i[0] : i;
		});
		delete options.inputs;

		$(this.inputs)
			.datepicker(options)
			.bind('changeDate', $.proxy(this.dateUpdated, this));

		this.pickers = $.map(this.inputs, function(i){
			return $(i).data('datepicker');
		});
		this.updateDates();
	};
	DateRangePicker.prototype = {
		updateDates: function(){
			this.dates = $.map(this.pickers, function(i){
				return i.getUTCDate();
			});
			this.updateRanges();
		},
		updateRanges: function(){
			var range = $.map(this.dates, function(d){
				return d.valueOf();
			});
			$.each(this.pickers, function(i, p){
				p.setRange(range);
			});
		},
		dateUpdated: function(e){
			// `this.updating` is a workaround for preventing infinite recursion
			// between `changeDate` triggering and `setUTCDate` calling.  Until
			// there is a better mechanism.
			if (this.updating)
				return;
			this.updating = true;

			var dp = $(e.target).data('datepicker'),
				new_date = dp.getUTCDate(),
				i = $.inArray(e.target, this.inputs),
				l = this.inputs.length;
			if (i === -1)
				return;

			$.each(this.pickers, function(i, p){
				if (!p.getUTCDate())
					p.setUTCDate(new_date);
			});

			if (new_date < this.dates[i]){
				// Date being moved earlier/left
				while (i >= 0 && new_date < this.dates[i]){
					this.pickers[i--].setUTCDate(new_date);
				}
			}
			else if (new_date > this.dates[i]){
				// Date being moved later/right
				while (i < l && new_date > this.dates[i]){
					this.pickers[i++].setUTCDate(new_date);
				}
			}
			this.updateDates();

			delete this.updating;
		},
		remove: function(){
			$.map(this.pickers, function(p){ p.remove(); });
			delete this.element.data().datepicker;
		}
	};

	function opts_from_el(el, prefix){
		// Derive options from element data-attrs
		var data = $(el).data(),
			out = {}, inkey,
			replace = new RegExp('^' + prefix.toLowerCase() + '([A-Z])');
		prefix = new RegExp('^' + prefix.toLowerCase());
		function re_lower(_,a){
			return a.toLowerCase();
		}
		for (var key in data)
			if (prefix.test(key)){
				inkey = key.replace(replace, re_lower);
				out[inkey] = data[key];
			}
		return out;
	}

	function opts_from_locale(lang){
		// Derive options from locale plugins
		var out = {};
		// Check if "de-DE" style date is available, if not language should
		// fallback to 2 letter code eg "de"
		if (!dates[lang]){
			lang = lang.split('-')[0];
			if (!dates[lang])
				return;
		}
		var d = dates[lang];
		$.each(locale_opts, function(i,k){
			if (k in d)
				out[k] = d[k];
		});
		return out;
	}

	var old = $.fn.datepicker;
	$.fn.datepicker = function(option){
		var args = Array.apply(null, arguments);
		args.shift();
		var internal_return;
		this.each(function(){
			var $this = $(this),
				data = $this.data('datepicker'),
				options = typeof option === 'object' && option;
			if (!data){
				var elopts = opts_from_el(this, 'date'),
					// Preliminary otions
					xopts = $.extend({}, defaults, elopts, options),
					locopts = opts_from_locale(xopts.language),
					// Options priority: js args, data-attrs, locales, defaults
					opts = $.extend({}, defaults, locopts, elopts, options);
				if ($this.is('.input-daterange') || opts.inputs){
					var ropts = {
						inputs: opts.inputs || $this.find('input').toArray()
					};
					$this.data('datepicker', (data = new DateRangePicker(this, $.extend(opts, ropts))));
				}
				else {
					$this.data('datepicker', (data = new Datepicker(this, opts)));
				}
			}
			if (typeof option === 'string' && typeof data[option] === 'function'){
				internal_return = data[option].apply(data, args);
				if (internal_return !== undefined)
					return false;
			}
		});
		if (internal_return !== undefined)
			return internal_return;
		else
			return this;
	};

	var defaults = $.fn.datepicker.defaults = {
		autoclose: false,
		beforeShowDay: $.noop,
		calendarWeeks: false,
		clearBtn: false,
		daysOfWeekDisabled: [],
		endDate: Infinity,
		forceParse: true,
		format: 'mm/dd/yyyy',
		keyboardNavigation: true,
		language: 'en',
		minViewMode: 0,
		multidate: false,
		multidateSeparator: ',',
		orientation: "auto",
		rtl: false,
		startDate: -Infinity,
		startView: 0,
		todayBtn: false,
		todayHighlight: false,
		weekStart: 0
	};
	var locale_opts = $.fn.datepicker.locale_opts = [
		'format',
		'rtl',
		'weekStart'
	];
	$.fn.datepicker.Constructor = Datepicker;
	var dates = $.fn.datepicker.dates = {
		en: {
			days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
			daysShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
			daysMin: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"],
			months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
			monthsShort: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
			today: "Today",
			clear: "Clear"
		}
	};

	var DPGlobal = {
		modes: [
			{
				clsName: 'days',
				navFnc: 'Month',
				navStep: 1
			},
			{
				clsName: 'months',
				navFnc: 'FullYear',
				navStep: 1
			},
			{
				clsName: 'years',
				navFnc: 'FullYear',
				navStep: 10
		}],
		isLeapYear: function(year){
			return (((year % 4 === 0) && (year % 100 !== 0)) || (year % 400 === 0));
		},
		getDaysInMonth: function(year, month){
			return [31, (DPGlobal.isLeapYear(year) ? 29 : 28), 31, 30, 31, 30, 31, 31, 30, 31, 30, 31][month];
		},
		validParts: /dd?|DD?|mm?|MM?|yy(?:yy)?/g,
		nonpunctuation: /[^ -\/:-@\[\u3400-\u9fff-`{-~\t\n\r]+/g,
		parseFormat: function(format){
			// IE treats \0 as a string end in inputs (truncating the value),
			// so it's a bad format delimiter, anyway
			var separators = format.replace(this.validParts, '\0').split('\0'),
				parts = format.match(this.validParts);
			if (!separators || !separators.length || !parts || parts.length === 0){
				throw new Error("Invalid date format.");
			}
			return {separators: separators, parts: parts};
		},
		parseDate: function(date, format, language){
			if (!date)
				return undefined;
			if (date instanceof Date)
				return date;
			if (typeof format === 'string')
				format = DPGlobal.parseFormat(format);
			var part_re = /([\-+]\d+)([dmwy])/,
				parts = date.match(/([\-+]\d+)([dmwy])/g),
				part, dir, i;
			if (/^[\-+]\d+[dmwy]([\s,]+[\-+]\d+[dmwy])*$/.test(date)){
				date = new Date();
				for (i=0; i < parts.length; i++){
					part = part_re.exec(parts[i]);
					dir = parseInt(part[1]);
					switch (part[2]){
						case 'd':
							date.setUTCDate(date.getUTCDate() + dir);
							break;
						case 'm':
							date = Datepicker.prototype.moveMonth.call(Datepicker.prototype, date, dir);
							break;
						case 'w':
							date.setUTCDate(date.getUTCDate() + dir * 7);
							break;
						case 'y':
							date = Datepicker.prototype.moveYear.call(Datepicker.prototype, date, dir);
							break;
					}
				}
				return UTCDate(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate(), 0, 0, 0);
			}
			parts = date && date.match(this.nonpunctuation) || [];
			date = new Date();
			var parsed = {},
				setters_order = ['yyyy', 'yy', 'M', 'MM', 'm', 'mm', 'd', 'dd'],
				setters_map = {
					yyyy: function(d,v){
						return d.setUTCFullYear(v);
					},
					yy: function(d,v){
						return d.setUTCFullYear(2000+v);
					},
					m: function(d,v){
						if (isNaN(d))
							return d;
						v -= 1;
						while (v < 0) v += 12;
						v %= 12;
						d.setUTCMonth(v);
						while (d.getUTCMonth() !== v)
							d.setUTCDate(d.getUTCDate()-1);
						return d;
					},
					d: function(d,v){
						return d.setUTCDate(v);
					}
				},
				val, filtered;
			setters_map['M'] = setters_map['MM'] = setters_map['mm'] = setters_map['m'];
			setters_map['dd'] = setters_map['d'];
			date = UTCDate(date.getFullYear(), date.getMonth(), date.getDate(), 0, 0, 0);
			var fparts = format.parts.slice();
			// Remove noop parts
			if (parts.length !== fparts.length){
				fparts = $(fparts).filter(function(i,p){
					return $.inArray(p, setters_order) !== -1;
				}).toArray();
			}
			// Process remainder
			function match_part(){
				var m = this.slice(0, parts[i].length),
					p = parts[i].slice(0, m.length);
				return m === p;
			}
			if (parts.length === fparts.length){
				var cnt;
				for (i=0, cnt = fparts.length; i < cnt; i++){
					val = parseInt(parts[i], 10);
					part = fparts[i];
					if (isNaN(val)){
						switch (part){
							case 'MM':
								filtered = $(dates[language].months).filter(match_part);
								val = $.inArray(filtered[0], dates[language].months) + 1;
								break;
							case 'M':
								filtered = $(dates[language].monthsShort).filter(match_part);
								val = $.inArray(filtered[0], dates[language].monthsShort) + 1;
								break;
						}
					}
					parsed[part] = val;
				}
				var _date, s;
				for (i=0; i < setters_order.length; i++){
					s = setters_order[i];
					if (s in parsed && !isNaN(parsed[s])){
						_date = new Date(date);
						setters_map[s](_date, parsed[s]);
						if (!isNaN(_date))
							date = _date;
					}
				}
			}
			return date;
		},
		formatDate: function(date, format, language){
			if (!date)
				return '';
			if (typeof format === 'string')
				format = DPGlobal.parseFormat(format);
			var val = {
				d: date.getUTCDate(),
				D: dates[language].daysShort[date.getUTCDay()],
				DD: dates[language].days[date.getUTCDay()],
				m: date.getUTCMonth() + 1,
				M: dates[language].monthsShort[date.getUTCMonth()],
				MM: dates[language].months[date.getUTCMonth()],
				yy: date.getUTCFullYear().toString().substring(2),
				yyyy: date.getUTCFullYear()
			};
			val.dd = (val.d < 10 ? '0' : '') + val.d;
			val.mm = (val.m < 10 ? '0' : '') + val.m;
			date = [];
			var seps = $.extend([], format.separators);
			for (var i=0, cnt = format.parts.length; i <= cnt; i++){
				if (seps.length)
					date.push(seps.shift());
				date.push(val[format.parts[i]]);
			}
			return date.join('');
		},
		headTemplate: '<thead>'+
							'<tr>'+
								'<th class="prev">&laquo;</th>'+
								'<th colspan="5" class="datepicker-switch"></th>'+
								'<th class="next">&raquo;</th>'+
							'</tr>'+
						'</thead>',
		contTemplate: '<tbody><tr><td colspan="7"></td></tr></tbody>',
		footTemplate: '<tfoot>'+
							'<tr>'+
								'<th colspan="7" class="today"></th>'+
							'</tr>'+
							'<tr>'+
								'<th colspan="7" class="clear"></th>'+
							'</tr>'+
						'</tfoot>'
	};
	DPGlobal.template = '<div class="datepicker">'+
							'<div class="datepicker-days">'+
								'<table class=" table-condensed">'+
									DPGlobal.headTemplate+
									'<tbody></tbody>'+
									DPGlobal.footTemplate+
								'</table>'+
							'</div>'+
							'<div class="datepicker-months">'+
								'<table class="table-condensed">'+
									DPGlobal.headTemplate+
									DPGlobal.contTemplate+
									DPGlobal.footTemplate+
								'</table>'+
							'</div>'+
							'<div class="datepicker-years">'+
								'<table class="table-condensed">'+
									DPGlobal.headTemplate+
									DPGlobal.contTemplate+
									DPGlobal.footTemplate+
								'</table>'+
							'</div>'+
						'</div>';

	$.fn.datepicker.DPGlobal = DPGlobal;


	/* DATEPICKER NO CONFLICT
	* =================== */

	$.fn.datepicker.noConflict = function(){
		$.fn.datepicker = old;
		return this;
	};


	/* DATEPICKER DATA-API
	* ================== */

	$(document).on(
		'focus.datepicker.data-api click.datepicker.data-api',
		'[data-provide="datepicker"]',
		function(e){
			var $this = $(this);
			if ($this.data('datepicker'))
				return;
			e.preventDefault();
			// component click requires us to explicitly show it
			$this.datepicker('show');
		}
	);
	$(function(){
		$('[data-provide="datepicker-inline"]').datepicker();
	});

}(window.jQuery));
if(typeof dwr=='undefined')dwr={};(function(){if(!dwr.engine)dwr.engine={};dwr.engine.setErrorHandler=function(handler){dwr.engine._errorHandler=handler;};dwr.engine.setWarningHandler=function(handler){dwr.engine._warningHandler=handler;};dwr.engine.setTextHtmlHandler=function(handler){dwr.engine._textHtmlHandler=handler;};dwr.engine.setPollStatusHandler=function(handler){dwr.engine._pollStatusHandler=handler;};dwr.engine.setTimeout=function(timeout){dwr.engine._timeout=timeout;};dwr.engine.setPollTimeout=function(timeout){dwr.engine._pollTimeout=timeout;};dwr.engine.setPreHook=function(handler){dwr.engine._preHook=handler;};dwr.engine.setPostHook=function(handler){dwr.engine._postHook=handler;};dwr.engine.setOverridePath=function(path){dwr.engine._overridePath=path;};dwr.engine.setOverrideContextPath=function(path){dwr.engine._overrideContextPath=path;};dwr.engine.setCookieAttributes=function(attributeString){dwr.engine._cookieAttributes=attributeString;};dwr.engine.setHeaders=function(headers){dwr.engine._headers=headers;};dwr.engine.setAttributes=function(attributes){dwr.engine._attributes=attributes;};dwr.engine.setOrdered=function(ordered){dwr.engine._ordered=ordered;};dwr.engine.setAsync=function(async){dwr.engine._async=async;};dwr.engine.setActiveReverseAjax=function(activeReverseAjax){if(activeReverseAjax){if(dwr.engine._activeReverseAjax)return;if(!dwr.engine._retryIntervals||dwr.engine._retryIntervals.length===0){dwr.engine._retryIntervals=dwr.engine._defaultRetryIntervals;}
dwr.engine._activeReverseAjax=true;if(dwr.engine._initializing)return;dwr.engine._poll();}
else{if(dwr.engine._activeReverseAjax&&dwr.engine._pollBatch){dwr.engine.transport.abort(dwr.engine._pollBatch);}
dwr.engine._activeReverseAjax=false;}};dwr.engine.setNotifyServerOnPageUnload=function(notify,asyncUnload){dwr.engine._asyncUnload=(asyncUnload!==undefined)?asyncUnload:false;dwr.engine._isNotifyServerOnPageUnload=notify;};dwr.engine.setNotifyServerOnPageLoad=function(notify){dwr.engine._isNotifyServerOnPageLoad=notify;if(notify&&!dwr.engine._initializing&&!dwr.engine._isNotifyServerOnPageLoadSent){eval("dwr.engine._execute(dwr.engine._pathToDwrServlet, '__System', 'pageLoaded', [ function() { dwr.engine._ordered = false; }]);");dwr.engine._isNotifyServerOnPageLoadSent=true;}};dwr.engine.setMaxRetries=function(maxRetries){dwr.engine._maxRetries=maxRetries;};dwr.engine.setRetryIntervals=function(intervalsArray){dwr.engine._retryIntervals=intervalsArray;};dwr.engine.defaultErrorHandler=function(message,ex){dwr.engine._debug("Error: "+ex.name+", "+ex.message,true);if(!message)message="A server error has occurred.";if(message.indexOf("0x80040111")!=-1)return;if("false"=="true")alert(message);};dwr.engine.defaultWarningHandler=function(message,ex){dwr.engine._debug(message);};dwr.engine.defaultPollStatusHandler=function(newStatus,ex){dwr.engine.util.logHandlerEx(function(){if(newStatus===false&&dwr.engine._errorHandler)dwr.engine._errorHandler(ex.message,ex);});};dwr.engine.beginBatch=function(){if(dwr.engine._batch){dwr.engine._handleError(null,{name:"dwr.engine.batchBegun",message:"Batch already begun"});return;}
dwr.engine._batch=dwr.engine.batch.create();};dwr.engine.endBatch=function(options){var batch=dwr.engine._batch;if(batch==null){dwr.engine._handleError(null,{name:"dwr.engine.batchNotBegun",message:"No batch in progress"});return;}
dwr.engine._batch=null;if(batch.map.callCount===0){return;}
if(options){dwr.engine.batch.merge(batch,options);}
if(batch.async&&(dwr.engine._ordered||dwr.engine._internalOrdered)&&dwr.engine._batchesLength!==0){dwr.engine._batchQueue[dwr.engine._batchQueue.length]=batch;}
else{return dwr.engine.transport.send(batch);}};dwr.engine.openInDownload=function(data){var div=document.createElement("div");document.body.appendChild(div);div.innerHTML="<iframe width='0' height='0' scrolling='no' frameborder='0' src='"+data+"'></iframe>";};dwr.version={major:parseInt("3",10),minor:parseInt("0",10),revision:parseInt("0",10),build:parseInt("-1",10),title:"FINAL",label:"3.0.0-FINAL"};dwr.engine._initializing=true;dwr.engine._allowGetButMakeForgeryEasier="false";dwr.engine._scriptTagProtection="throw 'allowScriptTagRemoting is false.';";dwr.engine._pathToDwrServlet="/iteraplan/dwr/";dwr.engine._overridePath="";if(typeof pathToDwrServlet!="undefined"){dwr.engine._overridePath=pathToDwrServlet;}
dwr.engine._effectivePath=function(){return dwr.engine._overridePath||dwr.engine._pathToDwrServlet;};dwr.engine._contextPath="/iteraplan";dwr.engine._overrideContextPath="";dwr.engine._effectiveContextPath=function(){return dwr.engine._overrideContextPath||dwr.engine._contextPath;};dwr.engine._cookieAttributes="";dwr.engine._useStreamingPoll="true";dwr.engine._pollOnline=true;dwr.engine._ModePlainCall="/call/plaincall/";dwr.engine._ModePlainPoll="/call/plainpoll/";dwr.engine._ModeHtmlCall="/call/htmlcall/";dwr.engine._ModeHtmlPoll="/call/htmlpoll/";dwr.engine._async=Boolean("true");dwr.engine._pageId=null;dwr.engine._dwrSessionId=null;dwr.engine._scriptSessionId="";dwr.engine._preHook=null;dwr.engine._postHook=null;dwr.engine._batches={};dwr.engine._batchesLength=0;dwr.engine._batchQueue=[];dwr.engine._ordered=false;dwr.engine._internalOrdered=false;dwr.engine._batch=null;dwr.engine._timeout=0;dwr.engine._activeReverseAjax=false;dwr.engine._nextReverseAjaxIndex=0;dwr.engine._reverseAjaxQueue={};dwr.engine._pollBatch=null;dwr.engine._pollTimeout=0;dwr.engine._pollCometInterval=200;dwr.engine._retries=1;dwr.engine._maxRetries=-1;dwr.engine._retryIntervals=[];dwr.engine._defaultRetryIntervals=[1,3,3];dwr.engine._textHtmlHandler=null;dwr.engine._headers=null;if(typeof attributes!="undefined"){dwr.engine._attributes=attributes;}
else{dwr.engine._attributes=null;}
dwr.engine._nextBatchId=0;dwr.engine._instanceId=-1;dwr.engine._propnames=["async","timeout","errorHandler","warningHandler","textHtmlHandler"];dwr.engine._partialResponseNo=0;dwr.engine._partialResponseYes=1;dwr.engine._isNotifyServerOnPageUnload=false;dwr.engine._isNotifyServerOnPageLoad=false;dwr.engine._isNotifyServerOnPageLoadSent=false;dwr.engine._asyncUnload=false;dwr.engine._mappedClasses={};dwr.engine._errorHandler=dwr.engine.defaultErrorHandler;dwr.engine._warningHandler=dwr.engine.defaultWarningHandler;dwr.engine._pollStatusHandler=dwr.engine.defaultPollStatusHandler;dwr.engine._postSeperator="\n";dwr.engine._defaultInterceptor=function(data){return data;};dwr.engine._urlRewriteHandler=dwr.engine._defaultInterceptor;dwr.engine._contentRewriteHandler=dwr.engine._defaultInterceptor;dwr.engine._replyRewriteHandler=dwr.engine._defaultInterceptor;dwr.engine._excludeObjectAttributes={"$dwrClassName":true,"$dwrByRef":true,"$_dwrConversionRef":true};dwr.engine._ieConditions={};dwr.engine._beforeUnloading=false;dwr.engine._queuedBatchException=null;dwr.engine._beforeUnloader=function(){dwr.engine._beforeUnloading=true;setTimeout(function(){setTimeout(function(){dwr.engine._beforeUnloading=false;},1000);},1);};dwr.engine._unloading=false;dwr.engine._unloader=function(){dwr.engine._unloading=true;dwr.engine._batchQueue.length=0;var batch;for(var batchId in dwr.engine._batches){batch=dwr.engine._batches[batchId];if(batch.transport&&batch.transport.abort){batch.transport.abort(batch);}}
if(dwr.engine._isNotifyServerOnPageUnload){dwr.engine._debug("calling unloader for: "+dwr.engine._scriptSessionId);batch={map:{callCount:1,'c0-scriptName':'__System','c0-methodName':'pageUnloaded','c0-id':0},paramCount:0,isPoll:false,async:dwr.engine._asyncUnload,headers:{},preHooks:[],postHooks:[],timeout:dwr.engine._timeout,errorHandler:null,globalErrorHandler:dwr.engine._errorHandler,warningHandler:null,textHtmlHandler:null,globalTextHtmlHandler:null,handlers:[{exceptionHandler:null,callback:null}]};dwr.engine.transport.send(batch);dwr.engine._isNotifyServerOnPageUnload=false;}};function ignoreIfUnloading(batch,f){if(dwr.engine._unloading)return;if(dwr.engine._beforeUnloading&&(batch==null||batch.async)){setTimeout(function(){ignoreIfUnloading(batch,f);},100);}
else{return f();}}
dwr.engine._initializer={preInit:function(){dwr.engine._pageId=dwr.engine.util.tokenify(new Date().getTime())+"-"+dwr.engine.util.tokenify(Math.random()*1E16);dwr.engine.transport.updateDwrSessionFromCookie();dwr.engine.util.addEventListener(window,'beforeunload',dwr.engine._beforeUnloader);dwr.engine.util.addEventListener(window,'unload',dwr.engine._unloader);var g=dwr.engine._global;if(!g.dwr)g.dwr={};if(!g.dwr._)g.dwr._=[];dwr.engine._instanceId=g.dwr._.length;g.dwr._[dwr.engine._instanceId]=dwr;},loadDwrConfig:function(){if(typeof dwrConfig!="undefined"){for(p in dwrConfig){var methodName="set"+p.charAt(0).toUpperCase()+p.substring(1);var setter=dwr.engine[methodName];if(setter)setter(dwrConfig[p]);}}},init:function(){dwr.engine._initializer.preInit();dwr.engine._initializer.loadDwrConfig();dwr.engine._initializing=false;if(dwr.engine._isNotifyServerOnPageLoad){eval("dwr.engine._execute(dwr.engine._pathToDwrServlet, '__System', 'pageLoaded', [ function() { dwr.engine._ordered = false; }]);");dwr.engine._isNotifyServerOnPageLoadSent=true;}
if(dwr.engine._activeReverseAjax){dwr.engine._poll();}}};dwr.engine._execute=function(overridePath,scriptName,methodName,args){var path=overridePath||dwr.engine._effectivePath();dwr.engine._singleShot=false;if(dwr.engine._batch==null){dwr.engine.beginBatch();dwr.engine._singleShot=true;}
var batch=dwr.engine._batch;if(batch.path==null){batch.path=path;}
else{if(batch.path!=path){dwr.engine._handleError(batch,{name:"dwr.engine.multipleServlets",message:"Can't batch requests to multiple DWR Servlets."});return;}}
dwr.engine.batch.addCall(batch,scriptName,methodName,args);batch.map.callCount++;if(dwr.engine._singleShot){return dwr.engine.endBatch();}};dwr.engine._poll=function(){if(!dwr.engine._activeReverseAjax){return;}
dwr.engine._pollBatch=dwr.engine.batch.createPoll();dwr.engine.transport.send(dwr.engine._pollBatch);};dwr.engine._executeScript=function(script){if(script==null){return null;}
if(script===""){dwr.engine._debug("Warning: blank script",true);return null;}
(new Function("dwr",script))(dwr);};dwr.engine._callPostHooks=function(batch){if(batch.postHooks){for(var i=0;i<batch.postHooks.length;i++){batch.postHooks[i]();}
batch.postHooks=null;}};dwr.engine._isHeartbeatBatch=function(batch){return(batch.map&&batch.map['c0-methodName']==='checkHeartbeat'&&batch.map['c0-scriptName']==='__System');};dwr.engine._handleError=function(batch,ex){if(batch&&dwr.engine._isHeartbeatBatch(batch)){return;}
var errorHandlers=[];var anyCallWithoutErrorHandler=false;if(batch&&batch.isPoll){dwr.engine._handlePollRetry(batch,ex);}else{if(batch){for(var i=0;i<batch.map.callCount;i++){var handlers=batch.handlers[i];if(!handlers.completed){if(typeof handlers.errorHandler=="function")
errorHandlers.push(handlers.errorHandler);else
anyCallWithoutErrorHandler=true;handlers.completed=true;}}}
ignoreIfUnloading(batch,function(){if(batch){var textHtmlHandler=batch.textHtmlHandler||batch.globalTextHtmlHandler;if(ex.name==="dwr.engine.textHtmlReply"&&textHtmlHandler){dwr.engine.util.logHandlerEx(function(){textHtmlHandler(ex);});return;}}
dwr.engine._prepareException(ex);var errorHandler;while(errorHandlers.length>0){errorHandler=errorHandlers.shift();dwr.engine.util.logHandlerEx(function(){errorHandler(ex.message,ex);});}
if(batch){dwr.engine.util.logHandlerEx(function(){if(typeof batch.errorHandler=="function")batch.errorHandler(ex.message,ex);else if(anyCallWithoutErrorHandler){if(typeof batch.globalErrorHandler=="function")batch.globalErrorHandler(ex.message,ex);}});dwr.engine.batch.remove(batch);}});}};dwr.engine._handlePollRetry=function(batch,ex){var retryInterval=dwr.engine._getRetryInterval();if(dwr.engine._retries===dwr.engine._retryIntervals.length-1){dwr.engine._debug("poll retry - going offline: "+retryInterval/1000+" seconds");dwr.engine._handlePollStatusChange(false,ex,batch);var heartbeatInterval=setInterval(function(){if(dwr.engine._maxRetries===-1||dwr.engine._retries<dwr.engine._maxRetries){dwr.engine._execute(null,'__System','checkHeartbeat',[function(){clearInterval(heartbeatInterval);dwr.engine._poll();}]);dwr.engine._retries++;dwr.engine._debug("DWR Offline - poll retry - interval: "+retryInterval/1000+" seconds");}else{clearInterval(heartbeatInterval);dwr.engine._debug("max retries reached, stop polling for server status.");dwr.engine._handlePollStatusChange(false,ex,batch);}},retryInterval);}else{dwr.engine._retries++;dwr.engine.batch.remove(batch);dwr.engine._debug("DWR Online - poll retry - interval: "+retryInterval/1000+" seconds");setTimeout(dwr.engine._poll,retryInterval);}};dwr.engine._getRetryInterval=function(){var retryInterval;if(dwr.engine._retries<dwr.engine._retryIntervals.length){retryInterval=dwr.engine._retryIntervals[dwr.engine._retries]*1000;}else{retryInterval=dwr.engine._retryIntervals[dwr.engine._retryIntervals.length-1]*1000;}
return retryInterval;};dwr.engine._handlePollStatusChange=function(newStatus,ex,batch){if(batch.isPoll||dwr.engine._isHeartbeatBatch(batch)){var changed=dwr.engine._pollOnline!==newStatus;var maxRetriesReached=dwr.engine._maxRetries===dwr.engine._retries;dwr.engine._pollOnline=newStatus;if((changed||maxRetriesReached)&&typeof dwr.engine._pollStatusHandler==="function")
dwr.engine.util.logHandlerEx(function(){dwr.engine._pollStatusHandler(newStatus,ex,maxRetriesReached);});if(newStatus){dwr.engine._retries=1;}}};dwr.engine._handleWarning=function(batch,ex){if(batch&&dwr.engine._isHeartbeatBatch(batch)){return;}
ignoreIfUnloading(batch,function(){dwr.engine._prepareException(ex);dwr.engine.util.logHandlerEx(function(){if(batch&&typeof batch.warningHandler=="function")batch.warningHandler(ex.message,ex);else if(dwr.engine._warningHandler)dwr.engine._warningHandler(ex.message,ex);});if(batch)dwr.engine.batch.remove(batch);});};dwr.engine._prepareException=function(ex){if(typeof ex=="string")ex={name:"unknown",message:ex};if(ex.message==null)ex.message="";if(ex.name==null)ex.name="unknown";};dwr.engine._delegate=(function(){function F(){}
return(function(obj){F.prototype=obj;return new F();});})();dwr.engine._createFromMap=function(map){var obj=new this();for(prop in map)if(map.hasOwnProperty(prop))obj[prop]=map[prop];return obj;};dwr.engine._global=(function(){return this;}).call(null);dwr.engine._getObject=function(prop){var parts=prop.split(".");var value=undefined;var scope=dwr.engine._global;while(parts.length>0){var currprop=parts.shift();if(!scope)return undefined;value=scope[currprop];if(value&&value.tagName&&document.getElementById(currprop)==value)return undefined;scope=value;}
return value;};dwr.engine._setObject=function(prop,obj){var parts=prop.split(".");var level;var scope=dwr.engine._global;while(parts.length>0){var currprop=parts.shift();if(parts.length===0){scope[currprop]=obj;}
else{level=scope[currprop];if(level==null||level.tagName&&document.getElementById(currprop)==level){scope[currprop]=level={};}
scope=level;}}};dwr.engine._debug=function(message,stacktrace){var written=false;try{if(window.console){if(stacktrace&&window.console.trace)window.console.trace();if(window.console.log)window.console.log(message);written=true;}
else if(window.opera&&window.opera.postError){window.opera.postError(message);written=true;}}
catch(ex){}
if(!written){var debug=document.getElementById("dwr-debug");if(debug){var contents=message+"<br/>"+debug.innerHTML;if(contents.length>2048)contents=contents.substring(0,2048);debug.innerHTML=contents;}}};dwr.engine.remote={handleCallback:function(batchId,callId,reply){var batch=dwr.engine._batches[batchId];if(!batch)return;batch.reply=reply;try{var handlers=batch.handlers[callId];if(!handlers){dwr.engine._debug("Warning: Missing handlers. callId="+callId,true);}
else{batch.handlers[callId].completed=true;if(typeof handlers.callback=="function"){dwr.engine.util.logHandlerEx(function(){if(handlers.callbackArg!==undefined)
handlers.callback.call(handlers.callbackScope,reply,handlers.callbackArg);else
handlers.callback.call(handlers.callbackScope,reply);});}}}
catch(ex){dwr.engine._handleError(batch,ex);}},handleFunctionCall:function(id,args){var func=dwr.engine.serialize.remoteFunctions[id];func.apply(window,args);},handleObjectCall:function(id,methodName,args){var obj=dwr.engine.serialize.remoteFunctions[id];obj[methodName].apply(obj,args);},handleSetCall:function(id,propertyName,data){var obj=dwr.engine.serialize.remoteFunctions[id];obj[propertyName]=data;},handleFunctionClose:function(id){delete dwr.engine.serialize.remoteFunctions[id];},handleException:function(batchId,callId,ex){var batch=dwr.engine._batches[batchId];if(!batch)return;var handlers=batch.handlers[callId];batch.handlers[callId].completed=true;if(handlers==null){dwr.engine._debug("Warning: null handlers in remoteHandleException",true);return;}
if(ex.message===undefined){ex.message="";}
dwr.engine.util.logHandlerEx(function(){if(typeof handlers.exceptionHandler=="function"){if(handlers.exceptionArg!==undefined)
handlers.exceptionHandler.call(handlers.exceptionScope,ex.message,ex,handlers.exceptionArg);else
handlers.exceptionHandler.call(handlers.exceptionScope,ex.message,ex);}
else if(typeof handlers.errorHandler=="function"){handlers.errorHandler(ex.message,ex);}
else if(typeof batch.errorHandler=="function"){batch.errorHandler(ex.message,ex);}
else if(typeof batch.globalErrorHandler=="function"){batch.globalErrorHandler(ex.message,ex);}});},handleReverseAjax:function(reverseAjaxIndex,reverseAjaxFunc){if(reverseAjaxIndex<dwr.engine._nextReverseAjaxIndex)return;dwr.engine._reverseAjaxQueue[reverseAjaxIndex]=reverseAjaxFunc;while(true){var nextFunc=dwr.engine._reverseAjaxQueue[dwr.engine._nextReverseAjaxIndex];if(!nextFunc)return;dwr.engine.util.logHandlerEx(function(){nextFunc();});delete dwr.engine._reverseAjaxQueue[dwr.engine._nextReverseAjaxIndex];dwr.engine._nextReverseAjaxIndex++;}},handleBatchException:function(ex,batchId){var batch=dwr.engine._batches[batchId];if(ex.message===undefined)ex.message="";if(batch){dwr.engine._handleError(batch,ex);}else{dwr.engine._queuedBatchException=ex;}},pollCometDisabled:function(ex,batchId){dwr.engine.setActiveReverseAjax(false);var batch=dwr.engine._batches[batchId];if(ex.message===undefined){ex.message="";}
dwr.engine._handleError(batch,ex);},newObject:function(dwrClassName,memberMap){var classfunc=dwr.engine._mappedClasses[dwrClassName];if(classfunc&&classfunc.createFromMap){return classfunc.createFromMap(memberMap);}
else{memberMap.$dwrClassName=dwrClassName;return memberMap;}}};dwr.engine.serialize={domDocument:["Msxml2.DOMDocument.6.0","Msxml2.DOMDocument.5.0","Msxml2.DOMDocument.4.0","Msxml2.DOMDocument.3.0","MSXML2.DOMDocument","MSXML.DOMDocument","Microsoft.XMLDOM"],remoteFunctions:{},funcId:0,toDomElement:function(xml){return dwr.engine.serialize.toDomDocument(xml).documentElement;},toDomDocument:function(xml){var dom;if(window.DOMParser){var parser=new DOMParser();dom=parser.parseFromString(xml,"text/xml");if(!dom.documentElement||dom.documentElement.tagName=="parsererror"){var message=dom.documentElement.firstChild.data;message+="\n"+dom.documentElement.firstChild.nextSibling.firstChild.data;throw message;}
return dom;}
else if(window.ActiveXObject){dom=dwr.engine.util.newActiveXObject(dwr.engine.serialize.domDocument);dom.loadXML(xml);return dom;}
else{var div=document.createElement("div");div.innerHTML=xml;return div;}},convert:function(batch,directrefmap,otherrefmap,data,name,depth){if(data==null){batch.map[name]="null:null";return;}
switch(typeof data){case"boolean":batch.map[name]="boolean:"+data;break;case"number":batch.map[name]="number:"+data;break;case"string":batch.map[name]="string:"+encodeURIComponent(data);break;case"object":var ref=dwr.engine.serialize.lookup(directrefmap,otherrefmap,data,name);var objstr=Object.prototype.toString.call(data);if(data.$dwrByRef)batch.map[name]=dwr.engine.serialize.convertByReference(batch,directrefmap,otherrefmap,data,name,depth+1);else if(ref!=null)batch.map[name]=ref;else if(objstr=="[object String]")batch.map[name]="string:"+encodeURIComponent(data);else if(objstr=="[object Boolean]")batch.map[name]="boolean:"+data;else if(objstr=="[object Number]")batch.map[name]="number:"+data;else if(objstr=="[object Date]")batch.map[name]="date:"+data.getTime();else if(objstr=="[object Array]")batch.map[name]=dwr.engine.serialize.convertArray(batch,directrefmap,otherrefmap,data,name,depth+1);else if(data&&data.tagName&&data.tagName.toLowerCase()=="input"&&data.type&&data.type.toLowerCase()=="file"){batch.fileUpload=true;batch.map[name]=data;}
else{if(data.nodeName&&data.nodeType){batch.map[name]=dwr.engine.serialize.convertDom(data);}
else{batch.map[name]=dwr.engine.serialize.convertObject(batch,directrefmap,otherrefmap,data,name,depth+1);}}
break;case"function":if(depth===0){batch.map[name]=dwr.engine.serialize.convertByReference(batch,directrefmap,otherrefmap,data,name,depth+1);}
break;default:dwr.engine._handleWarning(null,{name:"dwr.engine.unexpectedType",message:"Unexpected type: "+typeof data+", attempting default converter."});batch.map[name]="default:"+data;break;}},convertByReference:function(batch,directrefmap,otherrefmap,data,name,depth){var funcId="f"+dwr.engine.serialize.funcId;dwr.engine.serialize.remoteFunctions[funcId]=data;dwr.engine.serialize.funcId++;return"byref:"+funcId;},convertArray:function(batch,directrefmap,otherrefmap,data,name,depth){var childName,i;if(dwr.engine.util.ieCondition("if lte IE 7")){var buf=["array:["];for(i=0;i<data.length;i++){if(i!==0)buf.push(",");batch.paramCount++;childName="c"+dwr.engine._batch.map.callCount+"-e"+batch.paramCount;dwr.engine.serialize.convert(batch,directrefmap,otherrefmap,data[i],childName,depth+1);buf.push("reference:");buf.push(childName);}
buf.push("]");reply=buf.join("");}
else{var reply="array:[";for(i=0;i<data.length;i++){if(i!==0)reply+=",";batch.paramCount++;childName="c"+dwr.engine._batch.map.callCount+"-e"+batch.paramCount;dwr.engine.serialize.convert(batch,directrefmap,otherrefmap,data[i],childName,depth+1);reply+="reference:";reply+=childName;}
reply+="]";}
return reply;},convertObject:function(batch,directrefmap,otherrefmap,data,name,depth){var reply="Object_"+dwr.engine.serialize.getObjectClassName(data).replace(/:/g,"?")+":{";var elementset=(data.constructor&&data.constructor.$dwrClassMembers?data.constructor.$dwrClassMembers:data);var element;for(element in elementset){if(typeof data[element]!="function"&&!dwr.engine._excludeObjectAttributes[element]){batch.paramCount++;var childName="c"+dwr.engine._batch.map.callCount+"-e"+batch.paramCount;dwr.engine.serialize.convert(batch,directrefmap,otherrefmap,data[element],childName,depth+1);reply+=encodeURIComponent(element)+":reference:"+childName+", ";}}
if(reply.substring(reply.length-2)==", "){reply=reply.substring(0,reply.length-2);}
reply+="}";return reply;},convertDom:function(data){return"xml:"+encodeURIComponent(dwr.engine.serialize.serializeDom(data));},serializeDom:function(data){var output;if(window.XMLSerializer)output=new XMLSerializer().serializeToString(data);else if(data.xml)output=data.xml;else throw new Error("The browser doesn't support XML serialization of: "+data);return output;},lookup:function(directrefmap,otherrefmap,data,name){var ref;if("$_dwrConversionRef"in data){ref=data.$_dwrConversionRef;if(ref&&directrefmap[ref]!=data)ref=null;}
if(ref==null){for(r in otherrefmap){if(otherrefmap[r]==data){ref=r;break;}}}
if(ref!=null)return"reference:"+ref;try{data.$_dwrConversionRef=name;directrefmap[name]=data;}
catch(err){otherrefmap[name]=data;}
return null;},cleanup:function(directrefmap){for(var refName in directrefmap){var data=directrefmap[refName];try{delete data.$_dwrConversionRef;}
catch(err){data.$_dwrConversionRef=undefined;}}},getObjectClassName:function(obj){if(obj.$dwrClassName)
return obj.$dwrClassName;else if(obj.constructor&&obj.constructor.$dwrClassName)
return obj.constructor.$dwrClassName;else
return"Object";}};dwr.engine.transport={send:function(batch){if(batch.path==null){batch.path=dwr.engine._effectivePath();}
dwr.engine.transport.updateDwrSessionFromCookie();if(!dwr.engine._dwrSessionId){dwr.engine._internalOrdered=true;var retval;var idbatch={map:{callCount:1,'c0-scriptName':'__System','c0-methodName':'generateId','c0-id':0},paramCount:0,isPoll:false,async:batch.async,headers:{},preHooks:[],postHooks:[function(){dwr.engine._internalOrdered=false;}],timeout:dwr.engine._timeout,errorHandler:batch.errorHandler,globalErrorHandler:batch.globalErrorHandler,warningHandler:batch.warningHandler,textHtmlHandler:batch.textHtmlHandler,globalTextHtmlHandler:batch.globalTextHtmlHandler,path:batch.path,handlers:[{exceptionHandler:null,callback:function(id){dwr.engine.transport.updateDwrSessionFromCookie();if(!dwr.engine._dwrSessionId){dwr.engine.transport.setDwrSession(id);}
retval=dwr.engine.transport.send2(batch);}}]};dwr.engine.transport.send2(idbatch);return retval;}
else{return dwr.engine.transport.send2(batch);}},send2:function(batch){dwr.engine.batch.prepareToSend(batch);var isCrossDomain=false;if(batch.path.indexOf("http://")===0||batch.path.indexOf("https://")===0){var dwrShortPath=batch.path.split("/",3).join("/");var hrefShortPath=window.location.href.split("/",3).join("/");isCrossDomain=(dwrShortPath!=hrefShortPath);}
if(batch.fileUpload){if(isCrossDomain){throw new Error("Cross domain file uploads are not possible with this release of DWR");}
batch.transport=dwr.engine.transport.iframe;}
else if(isCrossDomain){batch.transport=dwr.engine.transport.scriptTag;}
else if(batch.isPoll&&dwr.engine._useStreamingPoll=="true"&&dwr.engine.util.ieCondition("if (IE 8)|(IE 9)")){batch.transport=dwr.engine.transport.iframe;}
else{batch.transport=dwr.engine.transport.xhr;}
return batch.transport.send(batch);},complete:function(batch){dwr.engine.batch.validate(batch);dwr.engine.transport.remove(batch);},abort:function(batch){var transport=batch.transport;if(transport.abort){transport.abort(batch);}
dwr.engine.transport.remove(batch);},remove:function(batch){if(batch.transport){dwr.engine._callPostHooks(batch);batch.transport.remove(batch);batch.transport=null;}
dwr.engine.batch.remove(batch);},setDwrSession:function(dwrsess){dwr.engine._dwrSessionId=dwrsess;var attrs="";if(!dwr.engine._cookieAttributes.match(/^path=/i)){attrs="; path="+(dwr.engine._effectiveContextPath()||"/");}
if(dwr.engine._cookieAttributes){attrs+="; "+dwr.engine._cookieAttributes;}
document.cookie="DWRSESSIONID="+dwrsess+attrs;dwr.engine._scriptSessionId=dwrsess+"/"+dwr.engine._pageId;},updateDwrSessionFromCookie:function(){if(!dwr.engine._dwrSessionId){var match=document.cookie.match(/(?:^|; )DWRSESSIONID=([^;]+)/);if(match){dwr.engine.transport.setDwrSession(match[1]);}}},xhr:{httpMethod:"POST",XMLHTTP:["Msxml2.XMLHTTP.6.0","Msxml2.XMLHTTP.5.0","Msxml2.XMLHTTP.4.0","MSXML2.XMLHTTP.3.0","MSXML2.XMLHTTP","Microsoft.XMLHTTP"],send:function(batch){if(batch.isPoll){batch.map.partialResponse=dwr.engine._partialResponseYes;}
if(batch.isPoll&&dwr.engine._useStreamingPoll=="false"){batch.map.partialResponse=dwr.engine._partialResponseNo;}
if(batch.isPoll&&dwr.engine.util.ieCondition("if lte IE 9")){batch.map.partialResponse=dwr.engine._partialResponseNo;}
if(window.XMLHttpRequest){batch.req=new XMLHttpRequest();}
else if(window.ActiveXObject){batch.req=dwr.engine.util.newActiveXObject(dwr.engine.transport.xhr.XMLHTTP);}
if(batch.async===true){batch.req.onreadystatechange=function(){if(typeof dwr!='undefined'){dwr.engine.transport.xhr.stateChange(batch);}};}
httpMethod=dwr.engine.transport.xhr.httpMethod;batch.mode=batch.isPoll?dwr.engine._ModePlainPoll:dwr.engine._ModePlainCall;var request=dwr.engine.batch.constructRequest(batch,httpMethod);try{batch.req.open(httpMethod,request.url,batch.async);try{for(var prop in batch.headers){var value=batch.headers[prop];if(typeof value=="string"){batch.req.setRequestHeader(prop,value);}}
if(!batch.headers["Content-Type"]){batch.req.setRequestHeader("Content-Type","text/plain");}}
catch(ex){dwr.engine._handleWarning(batch,ex);}
batch.req.send(request.body);if(batch.async===false){dwr.engine.transport.xhr.stateChange(batch);}}
catch(ex2){dwr.engine._handleError(batch,ex2);}
if(batch.isPoll&&batch.map.partialResponse==dwr.engine._partialResponseYes){dwr.engine.transport.xhr.checkCometPoll();}
return batch.reply;},stateChange:function(batch){var toEval;if(batch.aborted)return;if(batch.completed){if(batch.transport)dwr.engine._debug("Error: _stateChange() with batch.completed");return;}
var req=batch.req;var status=0;try{if(req.readyState>=2){status=req.status;}}
catch(ignore){}
if(status===0&&req.readyState<4){return;}
if(status===200){dwr.engine._handlePollStatusChange(true,null,batch);}
if(req.readyState!=4){return;}
if(dwr.engine._unloading){dwr.engine._debug("Ignoring reply from server as page is unloading.");return;}
try{var reply=req.responseText;reply=dwr.engine._replyRewriteHandler(reply);var contentType=req.getResponseHeader("Content-Type");if(status>=200&&status<300){if(contentType.indexOf("text/plain")<0&&contentType.indexOf("text/javascript")<0){if(contentType.indexOf("text/html")==0){dwr.engine._handleError(batch,{name:"dwr.engine.textHtmlReply",message:"HTML reply from the server.",responseText:reply||""});}else{dwr.engine._handleError(batch,{name:"dwr.engine.invalidMimeType",message:"Invalid content type: '"+contentType+"'"});}}else if(reply==null||reply===""){dwr.engine._handleError(batch,{name:"dwr.engine.missingData",message:"No data received from server"});}else{if(batch.isPoll&&batch.map.partialResponse==dwr.engine._partialResponseYes){dwr.engine.transport.xhr.processCometResponse(reply,batch);}else{if(reply.search("//#DWR")===-1){dwr.engine._handleError(batch,{name:"dwr.engine.invalidReply",message:"Invalid reply from server"});}else{toEval=reply;}}}}else if(status>=400){var statusText="statusText could not be read.";try{statusText=req.statusText;}catch(ex){}
dwr.engine._handleError(batch,{name:"dwr.engine.http."+status,message:statusText});}}catch(ex2){dwr.engine._handleError(batch,ex2);}
if(toEval!=null)toEval=toEval.replace(dwr.engine._scriptTagProtection,"");dwr.engine._executeScript(toEval);dwr.engine.transport.complete(batch);},checkCometPoll:function(){var req=dwr.engine._pollBatch&&dwr.engine._pollBatch.req;if(req){var text=req.responseText;if(text!=null){dwr.engine.transport.xhr.processCometResponse(text,dwr.engine._pollBatch);}}
if(dwr.engine._pollBatch){setTimeout(dwr.engine.transport.xhr.checkCometPoll,dwr.engine._pollCometInterval);}},processCometResponse:function(response,batch){if(batch.charsProcessed==response.length)return;if(response.length===0){batch.charsProcessed=0;return;}
var firstStartTag=response.indexOf("//#DWR-START#",batch.charsProcessed);if(firstStartTag==-1){return;}
var lastEndTag=response.lastIndexOf("//#DWR-END#");if(lastEndTag==-1){return;}
if(response.charCodeAt(lastEndTag+11)==13&&response.charCodeAt(lastEndTag+12)==10){batch.charsProcessed=lastEndTag+13;}
else{batch.charsProcessed=lastEndTag+11;}
var exec=response.substring(firstStartTag+13,lastEndTag);try{dwr.engine._executeScript(exec);}
catch(ex){if(dwr!=null){dwr.engine._handleError(batch,ex);}}},abort:function(batch){if(batch.req){batch.aborted=true;batch.req.abort();}},remove:function(batch){if(batch.req){delete batch.req;}}},iframe:{httpMethod:"POST",send:function(batch){if(document.body==null){setTimeout(function(){dwr.engine.transport.iframe.send(batch);},100);return;}
batch.httpMethod=dwr.engine.transport.iframe.httpMethod;if(batch.fileUpload){batch.httpMethod="POST";batch.encType="multipart/form-data";}
batch.loadingStarted=false;if(window.location.hostname!=document.domain)batch.map.documentDomain=document.domain;var idname=dwr.engine.transport.iframe.getId(batch);batch.div1=document.createElement("div");batch.div1.innerHTML="<iframe frameborder='0' style='width:0px;height:0px;border:0;display:none;' id='"+idname+"' name='"+idname+"'></iframe>";batch.iframe=batch.div1.firstChild;batch.document=document;batch.iframe.batch=batch;batch.fileInputs=[];dwr.engine.util.addEventListener(batch.iframe,"load",function(ev){if(!batch.loadingStarted)return;while(batch.fileInputs.length>0){var entry=batch.fileInputs.pop();entry.original.setAttribute("id",entry.clone.getAttribute("id"));entry.original.setAttribute("name",entry.clone.getAttribute("name"));entry.original.style.display=entry.clone.style.display;entry.clone.parentNode.replaceChild(entry.original,entry.clone);}
if(batch.completed)return;if(dwr.engine._queuedBatchException){dwr.engine._handleError(batch,dwr.engine._queuedBatchException);dwr.engine._queuedBatchException=null;return;}
try{var contentDoc=batch.iframe.contentDocument||batch.iframe.contentWindow.document;}catch(ex){var contentEx=ex;}
if(typeof dwr!="undefined"){var htmlResponse=contentDoc&&contentDoc.documentElement?contentDoc.documentElement.outerHTML:"(Could not extract HTML response: "+contentEx.message+")";dwr.engine._handleError(batch,{name:"dwr.engine.textHtmlReply",message:"HTML reply from the server.",responseText:htmlResponse});}});document.body.appendChild(batch.div1);dwr.engine.transport.iframe.beginLoader(batch,idname);},getId:function(batch){return batch.isPoll?"dwr-if-poll-"+dwr.engine._instanceId+"-"+batch.map.batchId:"dwr-if-"+dwr.engine._instanceId+"-"+batch.map.batchId;},beginLoader:function(batch,idname){if(batch.isPoll){batch.map.partialResponse=dwr.engine._partialResponseYes;}
batch.mode=batch.isPoll?dwr.engine._ModeHtmlPoll:dwr.engine._ModeHtmlCall;var request=dwr.engine.batch.constructRequest(batch,batch.httpMethod);if(batch.httpMethod==="GET"){batch.iframe.setAttribute("src",request.url);}
else{batch.div2=document.createElement("div");document.body.appendChild(batch.div2);batch.div2.innerHTML="<form"+(batch.encType?" encType='"+batch.encType+"' encoding='"+batch.encType+"'":"")+"></form>";batch.form=batch.div2.firstChild;batch.form.setAttribute("action",request.url);batch.form.setAttribute("target",idname);batch.form.setAttribute("style","display:none");batch.form.setAttribute("method",batch.httpMethod);for(var prop in batch.map){var value=batch.map[prop];if(typeof value!="function"){if(value&&value.tagName&&value.tagName.toLowerCase()=="input"&&value.type&&value.type.toLowerCase()=="file"){if(value.parentNode){var clone=value.cloneNode(true);value.parentNode.replaceChild(clone,value);batch.fileInputs.push({original:value,clone:clone});}
value.removeAttribute("id");value.setAttribute("name",prop);value.style.display="none";batch.form.appendChild(value);}else{var formInput=batch.document.createElement("input");formInput.setAttribute("type","hidden");formInput.setAttribute("name",prop);formInput.setAttribute("value",value);batch.form.appendChild(formInput);}}}
batch.loadingStarted=true;batch.form.submit();}},remote:{beginIFrameResponse:function(iframe,batchId){},endChunk:function(iframeWindow){setTimeout(function(){var scriptTags=iframeWindow.document.body.getElementsByTagName("script");if(scriptTags.length>0){var s=scriptTags[0];s.parentNode.removeChild(s);}},0);},endIFrameResponse:function(batchId){var batch=dwr.engine._batches[batchId];if(batch)dwr.engine.transport.complete(batch);}},remove:function(batch){setTimeout(function(){if(batch.iframe&&batch.iframe.parentNode){batch.iframe.parentNode.removeChild(batch.iframe);batch.iframe=null;}
if(batch.div1&&batch.div1.parentNode){batch.div1.parentNode.removeChild(batch.div1);batch.div1=null;}
if(batch.form&&batch.form.parentNode){batch.form.parentNode.removeChild(batch.form);batch.form=null;}
if(batch.div2&&batch.div2.parentNode){batch.div2.parentNode.removeChild(batch.div2);batch.div2=null;}},100);}},scriptTag:{send:function(batch){if(batch.isPoll){batch.map.partialResponse=dwr.engine._partialResponseNo;}
batch.mode=batch.isPoll?dwr.engine._ModePlainPoll:dwr.engine._ModePlainCall;var request=dwr.engine.batch.constructRequest(batch,"GET");batch.script=document.createElement("script");batch.script.id="dwr-st-"+batch.map.batchId;batch.script.src=request.url;batch.script.type="text/javascript";batch.script.async=true;dwr.engine.util.addEventListener(batch.script,"load",function(ev){if(typeof dwr!="undefined")dwr.engine.transport.scriptTag.complete(batch);});dwr.engine.util.addEventListener(batch.script,"error",function(ev){if(typeof dwr!="undefined")dwr.engine.transport.scriptTag.complete(batch);});dwr.engine.util.addEventListener(batch.script,"readystatechange",function(ev){if(typeof dwr!="undefined"){if(batch.completed)return;if(batch.script.readyState=="complete"||batch.script.readyState=="loaded"){dwr.engine.transport.scriptTag.complete(batch);}}});document.getElementsByTagName("head")[0].appendChild(batch.script);},complete:function(batch){dwr.engine.transport.complete(batch);},remove:function(batch){if(!batch.script)return;batch.script.parentNode.removeChild(batch.script);batch.script=null;}}};dwr.engine.batch={create:function(){var batch={async:dwr.engine._async,charsProcessed:0,handlers:[],isPoll:false,map:{callCount:0},paramCount:0,preHooks:[],postHooks:[],timeout:dwr.engine._timeout,errorHandler:null,globalErrorHandler:dwr.engine._errorHandler,warningHandler:dwr.engine._warningHandler,textHtmlHandler:null,globalTextHtmlHandler:dwr.engine._textHtmlHandler};if(!dwr.engine._activeReverseAjax)batch.map.nextReverseAjaxIndex=dwr.engine._nextReverseAjaxIndex;if(dwr.engine._preHook){batch.preHooks.push(dwr.engine._preHook);}
if(dwr.engine._postHook){batch.postHooks.push(dwr.engine._postHook);}
dwr.engine.batch.populateHeadersAndAttributes(batch);return batch;},createPoll:function(){var batch={async:true,charsProcessed:0,handlers:[{callback:function(pause){dwr.engine._pollBatch=null;setTimeout(dwr.engine._poll,pause);}}],isPoll:true,map:{callCount:1,nextReverseAjaxIndex:dwr.engine._nextReverseAjaxIndex},paramCount:0,preHooks:[],postHooks:[],timeout:dwr.engine._pollTimeout};dwr.engine.batch.populateHeadersAndAttributes(batch);return batch;},populateHeadersAndAttributes:function(batch){var propname,data;batch.headers={};if(dwr.engine._headers){for(propname in dwr.engine._headers){data=dwr.engine._headers[propname];if(typeof data!="function")batch.headers[propname]=data;}}
batch.attributes={};if(dwr.engine._attributes){for(propname in dwr.engine._attributes){data=dwr.engine._attributes[propname];if(typeof data!="function")batch.attributes[propname]=data;}}},addCall:function(batch,scriptName,methodName,args){var callData,stopAt;var lastArg=args[args.length-1];if(lastArg==null||typeof lastArg=="function"){callData={callback:lastArg};stopAt=args.length-1;}
else if(dwr.engine.util.isCallOptionArgument(lastArg)){callData=lastArg;stopAt=args.length-1;}
else{callData={};stopAt=args.length;}
if(dwr.engine._singleShot)dwr.engine.batch.merge(batch,callData);batch.handlers[batch.map.callCount]={callback:callData.callbackHandler||callData.callback,callbackArg:callData.callbackArg||callData.arg,callbackScope:callData.callbackScope||callData.scope||window,exceptionHandler:callData.exceptionHandler,exceptionArg:callData.exceptionArg||callData.arg,exceptionScope:callData.exceptionScope||callData.scope||window,errorHandler:callData.errorHandler};var prefix="c"+batch.map.callCount+"-";batch.map[prefix+"scriptName"]=scriptName;batch.map[prefix+"methodName"]=methodName;batch.map[prefix+"id"]=batch.map.callCount;var directrefmap={},otherrefmap={};for(var i=0;i<stopAt;i++){dwr.engine.serialize.convert(batch,directrefmap,otherrefmap,args[i],prefix+"param"+i,0);}
dwr.engine.serialize.cleanup(directrefmap);},merge:function(batch,overrides){var propname,data;for(var i=0;i<dwr.engine._propnames.length;i++){propname=dwr.engine._propnames[i];if(dwr.engine._singleShot&&propname=="errorHandler")continue;if(overrides[propname]!=null)batch[propname]=overrides[propname];}
if(overrides.preHook!=null)batch.preHooks.unshift(overrides.preHook);if(overrides.postHook!=null)batch.postHooks.push(overrides.postHook);if(overrides.headers){for(propname in overrides.headers){data=overrides.headers[propname];if(typeof data!="function")batch.headers[propname]=data;}}
var attrs=null;if(overrides.attributes)attrs=overrides.attributes;if(attrs){for(propname in attrs){data=attrs[propname];if(typeof data!="function")batch.attributes[propname]=data;}}},prepareToSend:function(batch){batch.map.batchId=dwr.engine._nextBatchId;dwr.engine._nextBatchId++;dwr.engine._batches[batch.map.batchId]=batch;dwr.engine._batchesLength++;batch.completed=false;batch.map.instanceId=dwr.engine._instanceId;batch.map.page=encodeURIComponent(window.location.pathname+window.location.search);batch.map.scriptSessionId=dwr.engine._scriptSessionId;for(var i=0;i<batch.preHooks.length;i++){batch.preHooks[i]();}
batch.preHooks=null;if(batch.timeout&&batch.timeout!==0){batch.timeoutId=setTimeout(function(){dwr.engine.transport.abort(batch);dwr.engine._handleError(batch,{name:"dwr.engine.timeout",message:"Timeout"});},batch.timeout);}},constructRequest:function(batch,httpMethod){var urlBuffer=[];urlBuffer.push(batch.path);urlBuffer.push(batch.mode);if(batch.isPoll){urlBuffer.push("ReverseAjax.dwr");}
else if(batch.map.callCount==1){urlBuffer.push(batch.map["c0-scriptName"]);urlBuffer.push(".");urlBuffer.push(batch.map["c0-methodName"]);urlBuffer.push(".dwr");}
else{urlBuffer.push("Multiple.");urlBuffer.push(batch.map.callCount);urlBuffer.push(".dwr");}
var sessionMatchExpr=new RegExp("^"+"[^;\\?#]+"+"(;[^\\?#]+)");var sessionMatch=location.href.match(sessionMatchExpr);if(sessionMatch!=null){urlBuffer.push(sessionMatch[1]);}
if(batch.attributes){for(var attrname in batch.attributes){var data=batch.attributes[attrname];if(typeof data!="function")batch.map["a-"+attrname]=""+data;}}
var request={};var prop;if(httpMethod=="GET"){batch.map.callCount=""+batch.map.callCount;urlBuffer.push("?");for(prop in batch.map){if(typeof batch.map[prop]!="function"){urlBuffer.push(encodeURIComponent(prop));urlBuffer.push("=");urlBuffer.push(encodeURIComponent(batch.map[prop]));urlBuffer.push("&");}}
urlBuffer.pop();request.body=null;}
else{request.body="";if(dwr.engine.util.ieCondition("if lte IE 7")){var buf=[];for(prop in batch.map){if(typeof batch.map[prop]!="function"){buf.push(prop+"="+batch.map[prop]+dwr.engine._postSeperator);}}
request.body=buf.join("");}
else{for(prop in batch.map){if(typeof batch.map[prop]!="function"){request.body+=prop+"="+batch.map[prop]+dwr.engine._postSeperator;}}}
request.body=dwr.engine._contentRewriteHandler(request.body);}
request.url=dwr.engine._urlRewriteHandler(urlBuffer.join(""));return request;},validate:function(batch){if(!batch.completed){var repliesReceived=0;for(var i=0;i<batch.map.callCount;i++){if(batch.handlers[i].completed===true){repliesReceived++;}}
if(repliesReceived==0&&dwr.engine._queuedBatchException){dwr.engine._handleError(batch,dwr.engine._queuedBatchException);dwr.engine._queuedBatchException=null;}else if(repliesReceived<batch.map.callCount){dwr.engine._handleError(batch,{name:"dwr.engine.incompleteReply",message:"Incomplete reply from server"});}}},remove:function(batch){if(!batch){dwr.engine._debug("Warning: null batch in dwr.engine.batch.remove()",true);return;}
if(batch.completed){return;}
batch.completed=true;dwr.engine.transport.remove(batch);if(batch.timeoutId!=null){clearTimeout(batch.timeoutId);delete batch.timeoutId;}
if(batch.map&&(batch.map.batchId!=null)){delete dwr.engine._batches[batch.map.batchId];dwr.engine._batchesLength--;}
if(batch==dwr.engine._batch)dwr.engine._batch=null;if(batch==dwr.engine._pollBatch)dwr.engine._pollBatch=null;if(dwr.engine._batchQueue.length!==0){var sendbatch=dwr.engine._batchQueue.shift();dwr.engine.transport.send(sendbatch);}}};dwr.engine.util={newActiveXObject:function(axarray){var returnValue;for(var i=0;i<axarray.length;i++){try{returnValue=new ActiveXObject(axarray[i]);break;}
catch(ex){}}
return returnValue;},ieCondition:function(cond){if(!(cond in dwr.engine._ieConditions)){var div=document.createElement("div");div.innerHTML="<!--["+cond+"]><p><![endif]-->";dwr.engine._ieConditions[cond]=!!(div.getElementsByTagName("p").length);}
return dwr.engine._ieConditions[cond];},tokenify:function(number){var tokenbuf=[];var charmap="1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ*$";var remainder=number;while(remainder>0)
{tokenbuf.push(charmap.charAt(remainder&0x3F));remainder=Math.floor(remainder/64);}
return tokenbuf.join("");},addEventListener:function(elem,name,func){if(elem.addEventListener)
elem.addEventListener(name,func,false);else
elem.attachEvent("on"+name,func);},isCallOptionArgument:function(lastArg){return(typeof lastArg==="object"&&(typeof lastArg.callback==="function"||typeof lastArg.exceptionHandler==="function"||typeof lastArg.callbackHandler==="function"||typeof lastArg.errorHandler==="function"||typeof lastArg.warningHandler==="function"||lastArg.hasOwnProperty("async")));},logHandlerEx:function(func){try{func();}catch(ex){dwr.engine._debug("Exception occured in user-specified handler:");dwr.engine._debug(ex);}}};dwr.engine._initializer.init();dwr.hub={publish:function(topicName,data){dwr.engine._execute(null,'__System','publish',topicName,data,{});},subscribe:function(topicName,callback,scope,subscriberData){var subscription=""+dwr.hub._subscriptionId;dwr.hub._subscriptionId++;dwr.hub._subscriptions[subscription]={callback:callback,scope:scope,subscriberData:subscriberData};dwr.engine._execute(null,'__System','subscribe',topicName,subscription,{});return subscription;},_remotePublish:function(subscriptionId,publishData){var subscriptionData=dwr.hub._subscriptions[subscriptionId];if(!subscriptionData)return;subscriptionData.callback.call(subscriptionData.scope,publishData,subscriptionData.subscriberData);},_subscriptionId:0,_subscriptions:{}};dwr.data={StoreChangeListener:{itemRemoved:function(source,itemId){},itemAdded:function(source,item){},itemChanged:function(source,item,changedAttributes){}},Cache:function(storeId,listener){this.storeId=storeId;this.listener=listener;}};dwr.data.Cache.prototype.viewRegion=function(region,callbackObj){if(!region)region={};if(!region.start)region.start=0;if(!region.count)region.count=-1;if(!region.sort)region.sort=[];else{for(var index=0;index<region.sort.length;index++){if(typeof region.sort[index].descending=="undefined"){region.sort[index].descending=false;}}}
if(!region.query)region.query={};return dwr.engine._execute(null,'__Data','viewRegion',[this.storeId,region,this.listener,callbackObj]);};dwr.data.Cache.prototype.viewItem=function(itemId,callbackObj){return dwr.engine._execute(null,'__Data','viewItem',[this.storeId,itemId,this.listener,callbackObj]);};dwr.data.Cache.prototype.unsubscribe=function(callbackObj){if(this.listener){return dwr.engine._execute(null,'__Data','unsubscribe',[this.storeId,this.listener,callbackObj]);}};dwr.data.Cache.prototype.update=function(items,callbackObj){return dwr.engine._execute(null,'__Data','update',[this.storeId,items,callbackObj]);};})();if(typeof dwr=='undefined'||dwr.engine==undefined)throw new Error('You must include DWR engine before including this file');(function(){if(dwr.engine._getObject("BuildingBlockTypeService")==undefined){var p;p={};p.subscribe=function(p0,callback){return dwr.engine._execute(p._path,'BuildingBlockTypeService','subscribe',arguments);};p.unsubscribe=function(p0,callback){return dwr.engine._execute(p._path,'BuildingBlockTypeService','unsubscribe',arguments);};dwr.engine._setObject("BuildingBlockTypeService",p);}})();if(typeof dwr=='undefined'||dwr.engine==undefined)throw new Error('You must include DWR engine before including this file');(function(){if(dwr.engine._getObject("ArchitecturalDomainService")==undefined){var p;p={};p.subscribe=function(p0,callback){return dwr.engine._execute(p._path,'ArchitecturalDomainService','subscribe',arguments);};p.unsubscribe=function(p0,callback){return dwr.engine._execute(p._path,'ArchitecturalDomainService','unsubscribe',arguments);};dwr.engine._setObject("ArchitecturalDomainService",p);}})();if(typeof dwr=='undefined'||dwr.engine==undefined)throw new Error('You must include DWR engine before including this file');(function(){if(dwr.engine._getObject("BusinessProcessService")==undefined){var p;p={};p.subscribe=function(p0,callback){return dwr.engine._execute(p._path,'BusinessProcessService','subscribe',arguments);};p.unsubscribe=function(p0,callback){return dwr.engine._execute(p._path,'BusinessProcessService','unsubscribe',arguments);};dwr.engine._setObject("BusinessProcessService",p);}})();if(typeof dwr=='undefined'||dwr.engine==undefined)throw new Error('You must include DWR engine before including this file');(function(){if(dwr.engine._getObject("InfrastructureElementService")==undefined){var p;p={};p.subscribe=function(p0,callback){return dwr.engine._execute(p._path,'InfrastructureElementService','subscribe',arguments);};p.unsubscribe=function(p0,callback){return dwr.engine._execute(p._path,'InfrastructureElementService','unsubscribe',arguments);};dwr.engine._setObject("InfrastructureElementService",p);}})();if(typeof dwr=='undefined'||dwr.engine==undefined)throw new Error('You must include DWR engine before including this file');(function(){if(dwr.engine._getObject("VbbConfigurationService")==undefined){var p;p={};p.recommendColorMapping=function(p0,p1,callback){return dwr.engine._execute(p._path,'VbbConfigurationService','recommendColorMapping',arguments);};p.recommend=function(p0,p1,callback){return dwr.engine._execute(p._path,'VbbConfigurationService','recommend',arguments);};dwr.engine._setObject("VbbConfigurationService",p);}})();if(typeof dwr=='undefined'||dwr.engine==undefined)throw new Error('You must include DWR engine before including this file');(function(){if(dwr.engine._getObject("MetamodelExplorerService")==undefined){var p;p={};p.getProperties=function(p0,callback){return dwr.engine._execute(p._path,'MetamodelExplorerService','getProperties',arguments);};dwr.engine._setObject("MetamodelExplorerService",p);}})();if(typeof dwr=='undefined'||dwr.engine==undefined)throw new Error('You must include DWR engine before including this file');(function(){if(dwr.engine._getObject("BusinessDomainService")==undefined){var p;p={};p.subscribe=function(p0,callback){return dwr.engine._execute(p._path,'BusinessDomainService','subscribe',arguments);};p.unsubscribe=function(p0,callback){return dwr.engine._execute(p._path,'BusinessDomainService','unsubscribe',arguments);};dwr.engine._setObject("BusinessDomainService",p);}})();if(typeof dwr=='undefined'||dwr.engine==undefined)throw new Error('You must include DWR engine before including this file');(function(){if(dwr.engine._getObject("TechnicalComponentReleaseService")==undefined){var p;p={};p.subscribe=function(p0,callback){return dwr.engine._execute(p._path,'TechnicalComponentReleaseService','subscribe',arguments);};p.unsubscribe=function(p0,callback){return dwr.engine._execute(p._path,'TechnicalComponentReleaseService','unsubscribe',arguments);};dwr.engine._setObject("TechnicalComponentReleaseService",p);}})();if(typeof dwr=='undefined'||dwr.engine==undefined)throw new Error('You must include DWR engine before including this file');(function(){if(dwr.engine._getObject("InformationSystemInterfaceService")==undefined){var p;p={};p.subscribe=function(p0,callback){return dwr.engine._execute(p._path,'InformationSystemInterfaceService','subscribe',arguments);};p.unsubscribe=function(p0,callback){return dwr.engine._execute(p._path,'InformationSystemInterfaceService','unsubscribe',arguments);};dwr.engine._setObject("InformationSystemInterfaceService",p);}})();if(typeof dwr=='undefined'||dwr.engine==undefined)throw new Error('You must include DWR engine before including this file');(function(){if(dwr.engine._getObject("InformationSystemReleaseService")==undefined){var p;p={};p.subscribe=function(p0,callback){return dwr.engine._execute(p._path,'InformationSystemReleaseService','subscribe',arguments);};p.unsubscribe=function(p0,callback){return dwr.engine._execute(p._path,'InformationSystemReleaseService','unsubscribe',arguments);};dwr.engine._setObject("InformationSystemReleaseService",p);}})();if(typeof dwr=='undefined'||dwr.engine==undefined)throw new Error('You must include DWR engine before including this file');(function(){if(dwr.engine._getObject("BusinessUnitService")==undefined){var p;p={};p.subscribe=function(p0,callback){return dwr.engine._execute(p._path,'BusinessUnitService','subscribe',arguments);};p.unsubscribe=function(p0,callback){return dwr.engine._execute(p._path,'BusinessUnitService','unsubscribe',arguments);};dwr.engine._setObject("BusinessUnitService",p);}})();if(typeof dwr=='undefined'||dwr.engine==undefined)throw new Error('You must include DWR engine before including this file');(function(){if(dwr.engine._getObject("GuiService")==undefined){var p;p={};p.setSelectedTab=function(p0,callback){return dwr.engine._execute(p._path,'GuiService','setSelectedTab',arguments);};p.setMenuStatus=function(p0,callback){return dwr.engine._execute(p._path,'GuiService','setMenuStatus',arguments);};p.setAttributeGroupStatus=function(p0,callback){return dwr.engine._execute(p._path,'GuiService','setAttributeGroupStatus',arguments);};dwr.engine._setObject("GuiService",p);}})();if(typeof dwr=='undefined'||dwr.engine==undefined)throw new Error('You must include DWR engine before including this file');(function(){if(dwr.engine._getObject("ITServiceService")==undefined){var p;p={};p.subscribe=function(p0,callback){return dwr.engine._execute(p._path,'ITServiceService','subscribe',arguments);};p.unsubscribe=function(p0,callback){return dwr.engine._execute(p._path,'ITServiceService','unsubscribe',arguments);};dwr.engine._setObject("ITServiceService",p);}})();if(typeof dwr=='undefined'||dwr.engine==undefined)throw new Error('You must include DWR engine before including this file');(function(){if(dwr.engine._getObject("BusinessObjectService")==undefined){var p;p={};p.subscribe=function(p0,callback){return dwr.engine._execute(p._path,'BusinessObjectService','subscribe',arguments);};p.unsubscribe=function(p0,callback){return dwr.engine._execute(p._path,'BusinessObjectService','unsubscribe',arguments);};dwr.engine._setObject("BusinessObjectService",p);}})();if(typeof dwr=='undefined'||dwr.engine==undefined)throw new Error('You must include DWR engine before including this file');(function(){if(dwr.engine._getObject("ProjectService")==undefined){var p;p={};p.subscribe=function(p0,callback){return dwr.engine._execute(p._path,'ProjectService','subscribe',arguments);};p.unsubscribe=function(p0,callback){return dwr.engine._execute(p._path,'ProjectService','unsubscribe',arguments);};dwr.engine._setObject("ProjectService",p);}})();if(typeof dwr=='undefined'||dwr.engine==undefined)throw new Error('You must include DWR engine before including this file');(function(){if(dwr.engine._getObject("InformationSystemDomainService")==undefined){var p;p={};p.subscribe=function(p0,callback){return dwr.engine._execute(p._path,'InformationSystemDomainService','subscribe',arguments);};p.unsubscribe=function(p0,callback){return dwr.engine._execute(p._path,'InformationSystemDomainService','unsubscribe',arguments);};dwr.engine._setObject("InformationSystemDomainService",p);}})();if(typeof dwr=='undefined'||dwr.engine==undefined)throw new Error('You must include DWR engine before including this file');(function(){if(dwr.engine._getObject("BusinessFunctionService")==undefined){var p;p={};p.subscribe=function(p0,callback){return dwr.engine._execute(p._path,'BusinessFunctionService','subscribe',arguments);};p.unsubscribe=function(p0,callback){return dwr.engine._execute(p._path,'BusinessFunctionService','unsubscribe',arguments);};dwr.engine._setObject("BusinessFunctionService",p);}})();if(typeof dwr=='undefined'||dwr.engine==undefined)throw new Error('You must include DWR engine before including this file');(function(){if(dwr.engine._getObject("ProductService")==undefined){var p;p={};p.subscribe=function(p0,callback){return dwr.engine._execute(p._path,'ProductService','subscribe',arguments);};p.unsubscribe=function(p0,callback){return dwr.engine._execute(p._path,'ProductService','unsubscribe',arguments);};dwr.engine._setObject("ProductService",p);}})();submitted=false;function flowAction(action,submitLockTime){if(!submitted){submitted=true;if(submitLockTime===undefined){submitLockTime=1000;}
createHiddenField('_eventId',action);saveScrollCoordinates();document.forms[0].submit();setTimeout(function(){submitted=false;},submitLockTime);}}
function changeAttributeWithResets(){document.forms[0].submit();}
function flowActionRedirect(url,action){document.forms[0].action=url;flowAction(action);}
function flowActionWithID(action,id){changeLocation(id.toString()+"?_eventId="+action);}
function getRestURIRelativeToMVC(){pathArray=window.location.pathname.split('/');return"../show/"+pathArray[pathArray.length-2]+"/";}
function getParentURI(){uri=window.location.toString();return uri.substring(0,uri.lastIndexOf("/")+1);}
function confirmChangeLocation(functionName,locationOrCallBack,args){functionName(locationOrCallBack,args);}
function CreateBookmarkLink(title,url){if(window.sidebar){window.sidebar.addPanel(title,url,"");}else if(window.external){window.external.AddFavorite(url,title);}
else if(window.opera&&window.print){return true;}}
function changeLocation(url){location.href=url;}
function submitForm(action,method){self.document.forms[0].action=action;if(method){self.document.forms[0].method=method;}
self.document.forms[0].submit();return true;}
function triggerAttributeValueAction(path_to_componentModel,valueIndex,action){setHiddenField(path_to_componentModel+'.selectedPosition',valueIndex);setHiddenField(path_to_componentModel+'.action',action);flowAction('update');}
function confirmDeleteAttributeValueAssignment(hiddenField,value,callback,askBeforeDelete,confirmationHeader,confirmationMessage){if(askBeforeDelete!=null&&askBeforeDelete=='true'){showConfirmDialog(confirmationHeader,confirmationMessage,function(){setHiddenField(hiddenField,value);callback();});}else{setHiddenField(hiddenField,value);callback();}}
var awaitingResponse=false;function createHiddenField(name,value){var oldHiddenField=getElementByIdSafe(name);if(oldHiddenField){if(oldHiddenField.tagName=='INPUT'){oldHiddenField.value=value;}else{alert("Tried to set hidden field that is not an input but already exists! Please Report this!");}}
else{var field=document.createElement("input");field.setAttribute("type","hidden");field.setAttribute("name",name);field.setAttribute("value",value);field.setAttribute("id",name);self.document.forms[0].appendChild(field);return field;}}
function setHiddenField(hiddenField,value){self.document.forms[0].elements[hiddenField].value=value;return false;}
function enableCheckboxBySuperOption(option,checkboxName){var checkbox=self.document.forms[0].elements[checkboxName];if(option.checked==true){checkbox.disabled="";}else{checkbox.disabled="disabled";checkbox.checked=false;}}
function changePortfolioType(){if(self.document.forms[0].elements["portfolioOptions.portfolioType"].value=='xy'){getElementByIdSafe("xy").className="visible";getElementByIdSafe("quad").className="hidden";}else{getElementByIdSafe("xy").className="hidden";getElementByIdSafe("quad").className="visible";}}
function changeColor(o)
{var o2=o.options[o.options.selectedIndex];if(o2){o.style.backgroundColor=o2.style.backgroundColor;}}
function copyValue(sourceField,targetField){if((self.document.forms[0].elements[sourceField]!=null)&&(self.document.forms[0].elements[targetField]!=null)&&(self.document.forms[0].elements[targetField].value=="")){self.document.forms[0].elements[targetField].value=self.document.forms[0].elements[sourceField].value;}}
function enableFieldBySecondFieldValue(firstFieldName,secondFieldName,fieldValue){if((self.document.forms[0].elements[firstFieldName]!=null)&&(self.document.forms[0].elements[secondFieldName]
!=null)){if(self.document.forms[0].elements[secondFieldName].value==fieldValue){self.document.forms[0].elements[firstFieldName].style.visibility="visible";}else{self.document.forms[0].elements[firstFieldName].style.visibility="hidden";}}}
function switchRadioButton(name,index){self.document.getElementsByName(name)[index].checked="checked";}
function keypress_handler(e){var keycode;if(!e){e=window.event;}
var srce=e.srcElement?e.srcElement:e.target;var eltype=(srce)?srce.type:'undefined';if(e.which){keycode=e.which;}else if(e.keyCode){keycode=e.keyCode;}
return(keycode!=13||eltype=='textarea');}
document.onkeypress=keypress_handler;function toggleLayer(layerId){var el=getElementByIdSafe(layerId);el.className=(el.className=='visibleRows')?'hiddenRows':'visibleRows';}
function toggleDivLayer(layerId){var el=getElementByIdSafe(layerId);el.className=(el.className=='visible')?'hidden':'visible';}
function toggleImage(pic1,pic2,elementId){var el=getElementByIdSafe(elementId);var sub=el.src.substring(el.src.length-pic1.length);el.src=(sub==pic1)?pic2:pic1;}
function toggleIcon(elementId,class1,class2){var icon=$('#'+elementId);if(icon.attr('class')==class2){icon.attr('class',class1);}else{icon.attr('class',class2);}}
function doUnloadProcessing(){awaitingResponse=false;}
function allChecked(fields){if(fields.length>0){for(var i=0;i<fields.length;i++){if(!fields[i].checked&&fields[i].type=='checkbox'){return false;}}}
else{if(!fields.checked&&fields.type=='checkbox'){return false;}}
return true;}
function getCheckBoxesByNamePattern(checkBoxNamePattern1,checkBoxNamePattern2){var notDoneYet=true;var count=0;var checkBoxesToCheck=[];while(notDoneYet){var checkBoxName=checkBoxNamePattern1+count+checkBoxNamePattern2;var checkBoxes=document.getElementsByName(checkBoxName);if(checkBoxes!=null&&checkBoxes.length>0){for(var i=0;i<checkBoxes.length;i++){if(checkBoxes[i].type=='checkbox'){checkBoxesToCheck[checkBoxesToCheck.length]=checkBoxes[i];}}}
else{notDoneYet=false;}
count++;}
return checkBoxesToCheck;}
function checkUnCheckAllByPattern(checkBoxNamePattern1,checkBoxNamePattern2,checkAllBox){var checkBoxesToCheck=getCheckBoxesByNamePattern(checkBoxNamePattern1,checkBoxNamePattern2);checkUnCheckAll(checkBoxesToCheck,checkAllBox);}
function checkUnCheckAll(checkboxes,checkAllBox){var checkOn=true;if(allChecked(checkboxes)&&checkAllBox&&checkAllBox.checked==false){checkOn=false;}
for(var i=0;i<checkboxes.length;i++){if(checkboxes[i].type=='checkbox'){checkboxes[i].checked=checkOn;}}}
function updateCheckAllBoxByNamePattern(childBoxesNamePattern1,childBoxesNamePattern2,checkAllBoxId){var checkAllBox=document.getElementById(checkAllBoxId);var childBoxes=getCheckBoxesByNamePattern(childBoxesNamePattern1,childBoxesNamePattern2);updateCheckAllBox(childBoxes,checkAllBox);}
function updateCheckAllBox(childBoxes,checkAllBox){if(allChecked(childBoxes)){checkAllBox.checked=true;}else{checkAllBox.checked=false;}}
function unCheckCheckBox(checkboxId){$('#'+checkboxId).prop('checked',false);}
function getElementByIdSafe(elementId){if(document.getElementById){return document.getElementById(elementId);}
else if(document.all){return document.all[elementId];}
else if(document.layers){return document.layers[elementId];}}
function getElementsByClass(node,searchClass,tag){var classElements=new Array();var els=node.getElementsByTagName(tag);var elsLen=els.length;var pattern=new RegExp(searchClass);for(var i=0,j=0;i<elsLen;i++){if(pattern.test(els[i].className)){classElements[j]=els[i];j++;}}
return classElements;}
function onEnterClickButton(id,event){var keycode;if(event){if(event.keyCode){keycode=event.keyCode;}
else{keycode=event.which;}}
else{return true;}
if(keycode==13){if(event.preventDefault){event.preventDefault();}
if(event.stopPropagation){event.stopPropagation();}
getElementByIdSafe(id).click();return false;}
else{return true;}}
function displayDescription(atId,atValueId,extended_html_id){var numberOfAV=$('#'+extended_html_id+'_descriptionOutput'+atId).children().length;var start=0;var step=1;if(navigator.appName.indexOf("Netscape")!=-1){start=1;step=2;}
if(navigator.appName.indexOf("Microsoft")!=-1){start=0;step=1;}
for(var i=start;i<numberOfAV;i+=step){$('#'+extended_html_id+'_descriptionOutput'+atId).children().eq(i).attr('class','hidden');}
if(atValueId==''){$('#'+extended_html_id+'_descriptionOutput'+atId).attr('class','nameintable');}
else if($('#'+extended_html_id+'_enumAVdescription'+atValueId)==null){$('#'+extended_html_id+'_descriptionOutput'+atId).attr('class','nameintable');}
else{$('#'+extended_html_id+'_descriptionOutput'+atId).attr('class','border nameintable');$('#'+extended_html_id+'_enumAVdescription'+atValueId).attr('class','visible nameintable');}}
function addEvent(obj,eventType,func,useCaption){if(obj.addEventListener){obj.addEventListener(eventType,func,useCaption);return true;}else if(obj.attachEvent){var retVal=obj.attachEvent("on"+eventType,func);return retVal;}else{return false;}}
function toggleButton(buttonId){var button=$('#'+buttonId);if(button.attr('disabled')){button.attr('disabled',false);}else{button.attr('disabled',true);}}
function setBorderHighlighted(){$(this).addClass("borderHighlighted");}
function decorateTextInputsOnKeyPress(){$("input[type='text']").each(function(){if($(this).attr('class')!='filter'){$(this).change(setBorderHighlighted);}});$('select').each(function(){$(this).change(setBorderHighlighted);});$('textarea').each(function(){$(this).change(setBorderHighlighted);});}
function getCheckedRadioValue()
{return $('input:radio:checked').first().val();}
function showTipDataDialogGen(par){var midStr='<br />';var tip="";for(var i=1;i<par.length;i++){if(par[i]){tip=tip+'<b>'+par[i]+':</b> '+par[i+1]+midStr;}
else{tip=tip+midStr;}
i++;}
showPopupDialog(par[0],tip);}
function showTipDataPopoverGen(id,par,options){var midStr='<br />';var tip="";for(var i=1;i<par.length;i++){if(par[i]){tip=tip+'<b>'+par[i]+':</b> '+par[i+1]+midStr;}
else{tip=tip+midStr;}
i++;}
createAndAppendPopover(id,par[0],tip,options);}
function showTipDataDialog(varArgs){showTipDataDialogGen(arguments);}
function showTipDataDialogArr(arr){showTipDataDialogGen(arr);}
function showTipLinkDialog(title,messageD,url){var midStr='<br />';var tip='<b><a href="'+url+'">'+messageD+':</a></b>'+midStr
+'<input type="text" name="url" id="bookmark" style="width:400px" onfocus="this.select()" value="'+url+'">'+midStr;showPopupDialog(title,tip);}
function showPopupDialog(title,content){if($('#modalFooterContainer').hasClass('hide')){$('#modalFooterContainer').removeClass('hide');$('#modalFooterCancel').addClass('hide');}
$('#modalDialogTitle').html(title);$('#modalDialogContent').html(content);$('#modalDialog').modal('toggle');}
function createAndAppendPopover(id,title,content,options){var opt=options;if(!opt){opt={};}
if(!opt.trigger){opt.trigger='focus';}
if(!opt.placement){opt.placement='right';}
opt.html='true';opt.container='body';opt.title=function(){return title;};opt.content=function(){return content;};opt.delay={show:'200',hide:'400'};$('#'+id).popover(opt).popover('toggle');}
function showConfirmDialog(title,content,callback){if($('#modalFooterContainer').hasClass('hide')){$('#modalFooterContainer').removeClass('hide');}
if($('#modalFooterCancel').hasClass('hide')){$('#modalFooterCancel').removeClass('hide');}
if(jQuery.isFunction(callback)){$('#modalFooterOK').unbind('click').click(function(){callback();});}else{$('#modalFooterOK').unbind('click').click(function(){changeLocation(callback);});}
$('#modalDialogTitle').html(title);$('#modalDialogContent').html(content);$('#modalDialog').modal('toggle');}
function loadAttributeTypeDescription(elem_id,id,pos,url,text,avs,ord,options){$.ajax({url:url,cache:false,data:{'id':id,'avs':avs},traditional:true,dataType:"json",success:function(data){text.splice(pos,0,data[0]);for(var k=1;k<data.length;k++){text.splice(ord[k-1]+k,0,data[k]);}
showTipDataPopoverGen(elem_id,text,options);},error:function(error){alert(error);}});}
function sortByColumn(col){createHiddenField('colSortIndex',col);setHiddenField('pageStart',0);setHiddenField('nextPageToShow',true);setHiddenField('previousPage','first');setHiddenField('nextPage','');self.document.forms[0].submit();}
function setStickyTableCaptions(tableId,stickToElemId,captionBarId){var fadeDelay=300;var theader=$('#'+tableId+' thead');var thcells=$('tr:first th',theader);var elemToStick=$('#'+stickToElemId);var stickyElem=$('#'+captionBarId);var theaderTop=theader.offset().top;var magicNumber=3;var stickyTop=(elemToStick.offset().top+elemToStick.height()*2)-$(window).scrollTop()-magicNumber;$(window).scroll(function(){if($(this).scrollTop()>(theaderTop-stickyTop-($.browser.msie?magicNumber:0))){if(stickyElem.hasClass('unvis')){stickyElem.removeClass('unvis');stickyElem.addClass('vis');stickyElem.css({top:stickyTop,width:theader.width()});thcells.each(function(index){var aDiv=$('#'+captionBarId+'_'+(index+1));aDiv.css({left:$(this).offset().left,width:$(this).width(),position:'fixed'});});}}
else{if(stickyElem.hasClass('vis')){stickyElem.removeClass('vis');stickyElem.addClass('unvis');}}});}
function escapeJavaScript(string){var result=string;if(result){result=result.replace(/\\/g,'\\\\');result=result.replace(/'/g,'\\\'');result=result.replace(/"/g,'&quot;');}
return result;}
function onGraphicLoadedOnDashboard(imageId){$('#'+imageId).css('visibility','hidden');$('#'+imageId).css('display','none');if(navigator.userAgent.indexOf("MSIE 6.0")===-1){$('#'+imageId).text('');}}
function onSvgGraphicLoaded(imageId,iframe,errorMessage){var doc='contentDocument'in iframe?iframe.contentDocument:iframe.contentWindow.document;if(doc.getElementsByTagName("svg").length>0){var svg=doc.getElementsByTagName("svg")[0];}
if(typeof(svg)!='undefined'&&svg!=null){iframe.style.height=svg.getAttribute("height")+'px';iframe.style.width=svg.getAttribute("width")+'px';$('#'+imageId).css('visibility','hidden');$('#'+imageId).css('display','none');if(navigator.userAgent.indexOf("MSIE 6.0")===-1){$('#'+imageId).text('');}}else{iframe.style.visibility='hidden';iframe.style.display='none';$('#'+imageId).text(errorMessage);$('#'+imageId).css('visibility','visible');$('#'+imageId).attr('class','feedbackPanelERROR');onGraphicLoadingError(null,null);}}
function onGraphicLoadingError(imageId,errorMessage){if(imageId!=null){$('#'+imageId).text(errorMessage);$('#'+imageId).css('visibility','visible');$('#'+imageId).css('display','block');$('#'+imageId).attr('class','feedbackPanelERROR');}
$('#dashboardErrorFeedbackPanel').css('visibility','visible');$('#dashboardErrorFeedbackPanel').css('display','block');}
function loadAction(id,urlWithParameters,errorMessage){var graphic=$('#object'+id);var graphicLoading=$('#'+id);var xhrArgs={url:urlWithParameters,dataType:"text",cache:false,complete:function(jqXHR){switch(jqXHR.status){case 200:graphic.html(jqXHR.responseText);onGraphicLoadedOnDashboard(id);break;default:graphic.css('visibility','hidden');graphic.css('display','none');graphicLoading.text(errorMessage+": Statuscode "+jqXHR.status);graphicLoading.css('visibility','visible');graphicLoading.attr('class','feedbackPanelERROR');onGraphicLoadingError(null,null);}}};var deferred=$.ajax(xhrArgs);}
function triggerNettoDownload(format){var hfield=createHiddenField('format',format);self.document.forms[0].submit();hfield.parentNode.removeChild(hfield);}
function triggerNettoDownloadFlow(format){var hfield=createHiddenField('format',format);flowAction('nettoExport');hfield.parentNode.removeChild(hfield);}function filterList(pattern,list){var myList=getElementByIdSafe(list);var numSeparators=0;var noMatches=false;var selectedIndex=0;var selectedString=false;if(!myList.bak){myList.bak=new Array();for(var n=0;n<myList.length;n++){var option=myList[n];myList.bak[myList.bak.length]=new Array(option.value,option.text);}}
var backupListLength=myList.bak.length;var match=new Array();for(var n=0;n<backupListLength;n++){var backupElement=myList.bak[n];if(backupElement[1].charAt(0)=='<'){numSeparators++;}
if(backupElement[1].toLowerCase().indexOf(pattern.toLowerCase())!=-1){match[match.length]=new Array(backupElement[0],backupElement[1]);}
else{if(backupElement[1].charAt(0)=='<'){match[match.length]=new Array(backupElement[0],backupElement[1]);}}}
var matchesLength=match.length;if(matchesLength==numSeparators){noMatches=true;}
if(matchesLength==0||noMatches){myList.length=1;myList[0].value=-1;myList[0].text="-";myList.disabled=true;}
else{myList.innerHTML="";myList.disabled=false;var fragment=document.createDocumentFragment();for(var n=0;n<matchesLength;n++){var matchData=match[n];var option=document.createElement('option');var text=document.createTextNode(matchData[1]);option.appendChild(text);option.setAttribute('value',matchData[0]);fragment.appendChild(option);option.style.color='#000000';option.style.fontWeight='normal';if(matchData[1].charAt(0)=='<'){option.style.fontWeight='bold';option.style.color='#555555';}
else{if(!selectedString){selectedIndex=n;selectedString=true;}}}
myList.appendChild(fragment);}
myList.selectedIndex=selectedIndex;}
submitted=false;function flowAction(action,submitLockTime){if(!submitted){submitted=true;if(submitLockTime===undefined){submitLockTime=1000;}
createHiddenField('_eventId',action);saveScrollCoordinates();document.forms[0].submit();setTimeout(function(){submitted=false;},submitLockTime);}}
function changeAttributeWithResets(){document.forms[0].submit();}
function flowActionRedirect(url,action){document.forms[0].action=url;flowAction(action);}
function flowActionWithID(action,id){changeLocation(id.toString()+"?_eventId="+action);}
function getRestURIRelativeToMVC(){pathArray=window.location.pathname.split('/');return"../show/"+pathArray[pathArray.length-2]+"/";}
function getParentURI(){uri=window.location.toString();return uri.substring(0,uri.lastIndexOf("/")+1);}
function confirmChangeLocation(functionName,locationOrCallBack,args){functionName(locationOrCallBack,args);}
function CreateBookmarkLink(title,url){if(window.sidebar){window.sidebar.addPanel(title,url,"");}else if(window.external){window.external.AddFavorite(url,title);}
else if(window.opera&&window.print){return true;}}
function changeLocation(url){location.href=url;}
function submitForm(action,method){self.document.forms[0].action=action;if(method){self.document.forms[0].method=method;}
self.document.forms[0].submit();return true;}
function triggerAttributeValueAction(path_to_componentModel,valueIndex,action){setHiddenField(path_to_componentModel+'.selectedPosition',valueIndex);setHiddenField(path_to_componentModel+'.action',action);flowAction('update');}
function confirmDeleteAttributeValueAssignment(hiddenField,value,callback,askBeforeDelete,confirmationHeader,confirmationMessage){if(askBeforeDelete!=null&&askBeforeDelete=='true'){showConfirmDialog(confirmationHeader,confirmationMessage,function(){setHiddenField(hiddenField,value);callback();});}else{setHiddenField(hiddenField,value);callback();}}
var awaitingResponse=false;function createHiddenField(name,value){var oldHiddenField=getElementByIdSafe(name);if(oldHiddenField){if(oldHiddenField.tagName=='INPUT'){oldHiddenField.value=value;}else{alert("Tried to set hidden field that is not an input but already exists! Please Report this!");}}
else{var field=document.createElement("input");field.setAttribute("type","hidden");field.setAttribute("name",name);field.setAttribute("value",value);field.setAttribute("id",name);self.document.forms[0].appendChild(field);return field;}}
function setHiddenField(hiddenField,value){self.document.forms[0].elements[hiddenField].value=value;return false;}
function enableCheckboxBySuperOption(option,checkboxName){var checkbox=self.document.forms[0].elements[checkboxName];if(option.checked==true){checkbox.disabled="";}else{checkbox.disabled="disabled";checkbox.checked=false;}}
function changePortfolioType(){if(self.document.forms[0].elements["portfolioOptions.portfolioType"].value=='xy'){getElementByIdSafe("xy").className="visible";getElementByIdSafe("quad").className="hidden";}else{getElementByIdSafe("xy").className="hidden";getElementByIdSafe("quad").className="visible";}}
function changeColor(o)
{var o2=o.options[o.options.selectedIndex];if(o2){o.style.backgroundColor=o2.style.backgroundColor;}}
function copyValue(sourceField,targetField){if((self.document.forms[0].elements[sourceField]!=null)&&(self.document.forms[0].elements[targetField]!=null)&&(self.document.forms[0].elements[targetField].value=="")){self.document.forms[0].elements[targetField].value=self.document.forms[0].elements[sourceField].value;}}
function enableFieldBySecondFieldValue(firstFieldName,secondFieldName,fieldValue){if((self.document.forms[0].elements[firstFieldName]!=null)&&(self.document.forms[0].elements[secondFieldName]
!=null)){if(self.document.forms[0].elements[secondFieldName].value==fieldValue){self.document.forms[0].elements[firstFieldName].style.visibility="visible";}else{self.document.forms[0].elements[firstFieldName].style.visibility="hidden";}}}
function switchRadioButton(name,index){self.document.getElementsByName(name)[index].checked="checked";}
function keypress_handler(e){var keycode;if(!e){e=window.event;}
var srce=e.srcElement?e.srcElement:e.target;var eltype=(srce)?srce.type:'undefined';if(e.which){keycode=e.which;}else if(e.keyCode){keycode=e.keyCode;}
return(keycode!=13||eltype=='textarea');}
document.onkeypress=keypress_handler;function toggleLayer(layerId){var el=getElementByIdSafe(layerId);el.className=(el.className=='visibleRows')?'hiddenRows':'visibleRows';}
function toggleDivLayer(layerId){var el=getElementByIdSafe(layerId);el.className=(el.className=='visible')?'hidden':'visible';}
function toggleImage(pic1,pic2,elementId){var el=getElementByIdSafe(elementId);var sub=el.src.substring(el.src.length-pic1.length);el.src=(sub==pic1)?pic2:pic1;}
function toggleIcon(elementId,class1,class2){var icon=$('#'+elementId);if(icon.attr('class')==class2){icon.attr('class',class1);}else{icon.attr('class',class2);}}
function doUnloadProcessing(){awaitingResponse=false;}
function allChecked(fields){if(fields.length>0){for(var i=0;i<fields.length;i++){if(!fields[i].checked&&fields[i].type=='checkbox'){return false;}}}
else{if(!fields.checked&&fields.type=='checkbox'){return false;}}
return true;}
function getCheckBoxesByNamePattern(checkBoxNamePattern1,checkBoxNamePattern2){var notDoneYet=true;var count=0;var checkBoxesToCheck=[];while(notDoneYet){var checkBoxName=checkBoxNamePattern1+count+checkBoxNamePattern2;var checkBoxes=document.getElementsByName(checkBoxName);if(checkBoxes!=null&&checkBoxes.length>0){for(var i=0;i<checkBoxes.length;i++){if(checkBoxes[i].type=='checkbox'){checkBoxesToCheck[checkBoxesToCheck.length]=checkBoxes[i];}}}
else{notDoneYet=false;}
count++;}
return checkBoxesToCheck;}
function checkUnCheckAllByPattern(checkBoxNamePattern1,checkBoxNamePattern2,checkAllBox){var checkBoxesToCheck=getCheckBoxesByNamePattern(checkBoxNamePattern1,checkBoxNamePattern2);checkUnCheckAll(checkBoxesToCheck,checkAllBox);}
function checkUnCheckAll(checkboxes,checkAllBox){var checkOn=true;if(allChecked(checkboxes)&&checkAllBox&&checkAllBox.checked==false){checkOn=false;}
for(var i=0;i<checkboxes.length;i++){if(checkboxes[i].type=='checkbox'){checkboxes[i].checked=checkOn;}}}
function updateCheckAllBoxByNamePattern(childBoxesNamePattern1,childBoxesNamePattern2,checkAllBoxId){var checkAllBox=document.getElementById(checkAllBoxId);var childBoxes=getCheckBoxesByNamePattern(childBoxesNamePattern1,childBoxesNamePattern2);updateCheckAllBox(childBoxes,checkAllBox);}
function updateCheckAllBox(childBoxes,checkAllBox){if(allChecked(childBoxes)){checkAllBox.checked=true;}else{checkAllBox.checked=false;}}
function unCheckCheckBox(checkboxId){$('#'+checkboxId).prop('checked',false);}
function getElementByIdSafe(elementId){if(document.getElementById){return document.getElementById(elementId);}
else if(document.all){return document.all[elementId];}
else if(document.layers){return document.layers[elementId];}}
function getElementsByClass(node,searchClass,tag){var classElements=new Array();var els=node.getElementsByTagName(tag);var elsLen=els.length;var pattern=new RegExp(searchClass);for(var i=0,j=0;i<elsLen;i++){if(pattern.test(els[i].className)){classElements[j]=els[i];j++;}}
return classElements;}
function onEnterClickButton(id,event){var keycode;if(event){if(event.keyCode){keycode=event.keyCode;}
else{keycode=event.which;}}
else{return true;}
if(keycode==13){if(event.preventDefault){event.preventDefault();}
if(event.stopPropagation){event.stopPropagation();}
getElementByIdSafe(id).click();return false;}
else{return true;}}
function displayDescription(atId,atValueId,extended_html_id){var numberOfAV=$('#'+extended_html_id+'_descriptionOutput'+atId).children().length;var start=0;var step=1;if(navigator.appName.indexOf("Netscape")!=-1){start=1;step=2;}
if(navigator.appName.indexOf("Microsoft")!=-1){start=0;step=1;}
for(var i=start;i<numberOfAV;i+=step){$('#'+extended_html_id+'_descriptionOutput'+atId).children().eq(i).attr('class','hidden');}
if(atValueId==''){$('#'+extended_html_id+'_descriptionOutput'+atId).attr('class','nameintable');}
else if($('#'+extended_html_id+'_enumAVdescription'+atValueId)==null){$('#'+extended_html_id+'_descriptionOutput'+atId).attr('class','nameintable');}
else{$('#'+extended_html_id+'_descriptionOutput'+atId).attr('class','border nameintable');$('#'+extended_html_id+'_enumAVdescription'+atValueId).attr('class','visible nameintable');}}
function addEvent(obj,eventType,func,useCaption){if(obj.addEventListener){obj.addEventListener(eventType,func,useCaption);return true;}else if(obj.attachEvent){var retVal=obj.attachEvent("on"+eventType,func);return retVal;}else{return false;}}
function toggleButton(buttonId){var button=$('#'+buttonId);if(button.attr('disabled')){button.attr('disabled',false);}else{button.attr('disabled',true);}}
function setBorderHighlighted(){$(this).addClass("borderHighlighted");}
function decorateTextInputsOnKeyPress(){$("input[type='text']").each(function(){if($(this).attr('class')!='filter'){$(this).change(setBorderHighlighted);}});$('select').each(function(){$(this).change(setBorderHighlighted);});$('textarea').each(function(){$(this).change(setBorderHighlighted);});}
function getCheckedRadioValue()
{return $('input:radio:checked').first().val();}
function showTipDataDialogGen(par){var midStr='<br />';var tip="";for(var i=1;i<par.length;i++){if(par[i]){tip=tip+'<b>'+par[i]+':</b> '+par[i+1]+midStr;}
else{tip=tip+midStr;}
i++;}
showPopupDialog(par[0],tip);}
function showTipDataPopoverGen(id,par,options){var midStr='<br />';var tip="";for(var i=1;i<par.length;i++){if(par[i]){tip=tip+'<b>'+par[i]+':</b> '+par[i+1]+midStr;}
else{tip=tip+midStr;}
i++;}
createAndAppendPopover(id,par[0],tip,options);}
function showTipDataDialog(varArgs){showTipDataDialogGen(arguments);}
function showTipDataDialogArr(arr){showTipDataDialogGen(arr);}
function showTipLinkDialog(title,messageD,url){var midStr='<br />';var tip='<b><a href="'+url+'">'+messageD+':</a></b>'+midStr
+'<input type="text" name="url" id="bookmark" style="width:400px" onfocus="this.select()" value="'+url+'">'+midStr;showPopupDialog(title,tip);}
function showPopupDialog(title,content){if($('#modalFooterContainer').hasClass('hide')){$('#modalFooterContainer').removeClass('hide');$('#modalFooterCancel').addClass('hide');}
$('#modalDialogTitle').html(title);$('#modalDialogContent').html(content);$('#modalDialog').modal('toggle');}
function createAndAppendPopover(id,title,content,options){var opt=options;if(!opt){opt={};}
if(!opt.trigger){opt.trigger='focus';}
if(!opt.placement){opt.placement='right';}
opt.html='true';opt.container='body';opt.title=function(){return title;};opt.content=function(){return content;};opt.delay={show:'200',hide:'400'};$('#'+id).popover(opt).popover('toggle');}
function showConfirmDialog(title,content,callback){if($('#modalFooterContainer').hasClass('hide')){$('#modalFooterContainer').removeClass('hide');}
if($('#modalFooterCancel').hasClass('hide')){$('#modalFooterCancel').removeClass('hide');}
if(jQuery.isFunction(callback)){$('#modalFooterOK').unbind('click').click(function(){callback();});}else{$('#modalFooterOK').unbind('click').click(function(){changeLocation(callback);});}
$('#modalDialogTitle').html(title);$('#modalDialogContent').html(content);$('#modalDialog').modal('toggle');}
function loadAttributeTypeDescription(elem_id,id,pos,url,text,avs,ord,options){$.ajax({url:url,cache:false,data:{'id':id,'avs':avs},traditional:true,dataType:"json",success:function(data){text.splice(pos,0,data[0]);for(var k=1;k<data.length;k++){text.splice(ord[k-1]+k,0,data[k]);}
showTipDataPopoverGen(elem_id,text,options);},error:function(error){alert(error);}});}
function sortByColumn(col){createHiddenField('colSortIndex',col);setHiddenField('pageStart',0);setHiddenField('nextPageToShow',true);setHiddenField('previousPage','first');setHiddenField('nextPage','');self.document.forms[0].submit();}
function setStickyTableCaptions(tableId,stickToElemId,captionBarId){var fadeDelay=300;var theader=$('#'+tableId+' thead');var thcells=$('tr:first th',theader);var elemToStick=$('#'+stickToElemId);var stickyElem=$('#'+captionBarId);var theaderTop=theader.offset().top;var magicNumber=3;var stickyTop=(elemToStick.offset().top+elemToStick.height()*2)-$(window).scrollTop()-magicNumber;$(window).scroll(function(){if($(this).scrollTop()>(theaderTop-stickyTop-($.browser.msie?magicNumber:0))){if(stickyElem.hasClass('unvis')){stickyElem.removeClass('unvis');stickyElem.addClass('vis');stickyElem.css({top:stickyTop,width:theader.width()});thcells.each(function(index){var aDiv=$('#'+captionBarId+'_'+(index+1));aDiv.css({left:$(this).offset().left,width:$(this).width(),position:'fixed'});});}}
else{if(stickyElem.hasClass('vis')){stickyElem.removeClass('vis');stickyElem.addClass('unvis');}}});}
function escapeJavaScript(string){var result=string;if(result){result=result.replace(/\\/g,'\\\\');result=result.replace(/'/g,'\\\'');result=result.replace(/"/g,'&quot;');}
return result;}
function onGraphicLoadedOnDashboard(imageId){$('#'+imageId).css('visibility','hidden');$('#'+imageId).css('display','none');if(navigator.userAgent.indexOf("MSIE 6.0")===-1){$('#'+imageId).text('');}}
function onSvgGraphicLoaded(imageId,iframe,errorMessage){var doc='contentDocument'in iframe?iframe.contentDocument:iframe.contentWindow.document;if(doc.getElementsByTagName("svg").length>0){var svg=doc.getElementsByTagName("svg")[0];}
if(typeof(svg)!='undefined'&&svg!=null){iframe.style.height=svg.getAttribute("height")+'px';iframe.style.width=svg.getAttribute("width")+'px';$('#'+imageId).css('visibility','hidden');$('#'+imageId).css('display','none');if(navigator.userAgent.indexOf("MSIE 6.0")===-1){$('#'+imageId).text('');}}else{iframe.style.visibility='hidden';iframe.style.display='none';$('#'+imageId).text(errorMessage);$('#'+imageId).css('visibility','visible');$('#'+imageId).attr('class','feedbackPanelERROR');onGraphicLoadingError(null,null);}}
function onGraphicLoadingError(imageId,errorMessage){if(imageId!=null){$('#'+imageId).text(errorMessage);$('#'+imageId).css('visibility','visible');$('#'+imageId).css('display','block');$('#'+imageId).attr('class','feedbackPanelERROR');}
$('#dashboardErrorFeedbackPanel').css('visibility','visible');$('#dashboardErrorFeedbackPanel').css('display','block');}
function loadAction(id,urlWithParameters,errorMessage){var graphic=$('#object'+id);var graphicLoading=$('#'+id);var xhrArgs={url:urlWithParameters,dataType:"text",cache:false,complete:function(jqXHR){switch(jqXHR.status){case 200:graphic.html(jqXHR.responseText);onGraphicLoadedOnDashboard(id);break;default:graphic.css('visibility','hidden');graphic.css('display','none');graphicLoading.text(errorMessage+": Statuscode "+jqXHR.status);graphicLoading.css('visibility','visible');graphicLoading.attr('class','feedbackPanelERROR');onGraphicLoadingError(null,null);}}};var deferred=$.ajax(xhrArgs);}
function triggerNettoDownload(format){var hfield=createHiddenField('format',format);self.document.forms[0].submit();hfield.parentNode.removeChild(hfield);}
function triggerNettoDownloadFlow(format){var hfield=createHiddenField('format',format);flowAction('nettoExport');hfield.parentNode.removeChild(hfield);}
function moveSelection(fromList,toList){var toMove=[];for(var i=0;i<fromList.options.length;i++){var tmpOption=fromList.options[i];if(tmpOption.selected){var option=new Option(tmpOption.text,tmpOption.value);option.id=tmpOption.id;toMove.push(option);fromList.options[i]=null;i--;}}
var pos=0;for(var i=0;i<toMove.length;i++){if(toList.options.length==0){toList.options.add(toMove[i]);continue;}
while(pos<toList.options.length&&compareTo(toMove[i],toList.options[pos])>=0){pos++;}
toList.options.add(toMove[i],pos);}}
function moveSelection2(fromListName,toListName){var fromList=getElementByIdSafe(fromListName);var toList=getElementByIdSafe(toListName);moveSelection(fromList,toList);}
function moveSelectionLeftTopExclusive(prefix,topOptionText){var availableList=getElementByIdSafe(prefix+"_available");var connectedList=getElementByIdSafe(prefix+"_connected");var bContainsTop=$.grep(availableList.options,function(value,idx){return value.text==topOptionText&&value.selected;});moveSelection(availableList,connectedList);if(bContainsTop.length>0){$.each(connectedList.options,function(){if(this.text!=topOptionText){this.selected=true;}});moveSelection(connectedList,availableList);}
else{selectOptionByName(prefix+"_connected",topOptionText);moveSelection(connectedList,availableList);}}
function moveTopLeftIfIsEmpty(prefix,topOptionText){var connectedList=getElementByIdSafe(prefix+"_connected");if(connectedList!=null&&connectedList.options.length<1){selectOptionByName(prefix+"_available",topOptionText);moveSelection2(prefix+"_available",prefix+"_connected");}}
function removeOption(fromListName,toListName,optionText){var fromList=getElementByIdSafe(fromListName);var toList=getElementByIdSafe(toListName);if(fromList.options.length>1){$.each(fromList.options,function(){if(this.text==optionText){this.selected=true;moveSelection(fromList,toList);return false;}});}}
function selectOptionByName(fromListName,optionText){var fromList=getElementByIdSafe(fromListName);$.each(fromList.options,function(){if(this.text==optionText){this.selected=true;return false;}});}
function compareTo(record1,record2){var value1=record1.text.toLowerCase();var value2=record2.text.toLowerCase();if(value1>value2){return(1);}
if(value1<value2){return(-1);}
return(0);}
function sortList(list){var optionsArray=[];for(var loop=0;loop<list.options.length;loop++){optionsArray[loop]={text:list.options[loop].text,value:list.options[loop].value,id:list.options[loop].id};}
optionsArray.sort(compareTo);list.options.length=0;for(var loopCnt=0;loopCnt<optionsArray.length;loopCnt++){var option=document.createElement('option');option.text=optionsArray[loopCnt].text;option.value=optionsArray[loopCnt].value;option.id=optionsArray[loopCnt].id;list.options.add(option);}}
function selectOptions(listName){var list=getElementByIdSafe(listName);if(list==null){return;}
list.multiple=true;for(var i=0;i<=list.length-1;i++){list.options[i].selected=true;}}
function selectOptionsAll(listName1,listName2){var list1=getElementByIdSafe(listName1);var list2=getElementByIdSafe(listName2);list1.multiple=true;list2.multiple=true;for(var i=0;i<=list1.length-1;i++){list1.options[i].selected=true;}
for(var j=0;j<=list2.length-1;j++){list2.options[j].selected=true;}}
function removeOptions(listName){var list=getElementByIdSafe(listName);if(list==null){return;}
list.options.length=0;}
function resetScrollCoordinates(){setHiddenField('pagePositionXId',0);setHiddenField('pagePositionYId',0);}
function saveScrollCoordinates(){var scrOfX=0,scrOfY=0;if(typeof(window.pageYOffset)=='number'){scrOfY=window.pageYOffset;scrOfX=window.pageXOffset;}
else if(document.body&&(document.body.scrollLeft||document.body.scrollTop)){scrOfY=document.body.scrollTop;scrOfX=document.body.scrollLeft;}
else if(document.documentElement&&(document.documentElement.scrollLeft||document.documentElement.scrollTop)){scrOfY=document.documentElement.scrollTop;scrOfX=document.documentElement.scrollLeft;}
setHiddenField('pagePositionXId',scrOfX);setHiddenField('pagePositionYId',scrOfY);return false;}
function scrollToCoordinates(){var scrOfX=getElementByIdSafe('pagePositionXId').value;var scrOfY=getElementByIdSafe('pagePositionYId').value;window.scrollTo(scrOfX,scrOfY);}
shortcut={'all_shortcuts':{},'add':function(shortcut_combination,callback,opt){var default_options={'type':'keydown','propagate':false,'disable_in_input':false,'target':document,'keycode':false};if(!opt)opt=default_options;else{for(var dfo in default_options){if(typeof opt[dfo]=='undefined')opt[dfo]=default_options[dfo];}}
var ele=opt.target;if(typeof opt.target=='string')ele=document.getElementById(opt.target);var ths=this;shortcut_combination=shortcut_combination.toLowerCase();var func=function(e){e=e||window.event;if(opt['disable_in_input']){var element;if(e.target)element=e.target;else if(e.srcElement)element=e.srcElement;if(element.nodeType==3)element=element.parentNode;if(element.tagName=='INPUT'||element.tagName=='TEXTAREA')return;}
if(e.keyCode)code=e.keyCode;else if(e.which)code=e.which;var character=String.fromCharCode(code).toLowerCase();if(code==188)character=",";if(code==190)character=".";var keys=shortcut_combination.split("+");var kp=0;var shift_nums={"`":"~","1":"!","2":"@","3":"#","4":"$","5":"%","6":"^","7":"&","8":"*","9":"(","0":")","-":"_","=":"+",";":":","'":"\"",",":"<",".":">","/":"?","\\":"|"};var special_keys={'esc':27,'escape':27,'tab':9,'space':32,'return':13,'enter':13,'backspace':8,'scrolllock':145,'scroll_lock':145,'scroll':145,'capslock':20,'caps_lock':20,'caps':20,'numlock':144,'num_lock':144,'num':144,'pause':19,'break':19,'insert':45,'home':36,'delete':46,'end':35,'pageup':33,'page_up':33,'pu':33,'pagedown':34,'page_down':34,'pd':34,'left':37,'up':38,'right':39,'down':40,'f1':112,'f2':113,'f3':114,'f4':115,'f5':116,'f6':117,'f7':118,'f8':119,'f9':120,'f10':121,'f11':122,'f12':123};var modifiers={shift:{wanted:false,pressed:false},ctrl:{wanted:false,pressed:false},alt:{wanted:false,pressed:false},meta:{wanted:false,pressed:false}};if(e.ctrlKey)modifiers.ctrl.pressed=true;if(e.shiftKey)modifiers.shift.pressed=true;if(e.altKey)modifiers.alt.pressed=true;if(e.metaKey)modifiers.meta.pressed=true;for(var i=0;k=keys[i],i<keys.length;i++){if(k=='ctrl'||k=='control'){kp++;modifiers.ctrl.wanted=true;}else if(k=='shift'){kp++;modifiers.shift.wanted=true;}else if(k=='alt'){kp++;modifiers.alt.wanted=true;}else if(k=='meta'){kp++;modifiers.meta.wanted=true;}else if(k.length>1){if(special_keys[k]==code)kp++;}else if(opt['keycode']){if(opt['keycode']==code)kp++;}else{if(character==k)kp++;else{if(shift_nums[character]&&e.shiftKey){character=shift_nums[character];if(character==k)kp++;}}}}
if(kp==keys.length&&modifiers.ctrl.pressed==modifiers.ctrl.wanted&&modifiers.shift.pressed==modifiers.shift.wanted&&modifiers.alt.pressed==modifiers.alt.wanted&&modifiers.meta.pressed==modifiers.meta.wanted){callback(e);if(!opt['propagate']){e.cancelBubble=true;e.returnValue=false;if(e.stopPropagation){e.stopPropagation();e.preventDefault();}
return false;}}};this.all_shortcuts[shortcut_combination]={'callback':func,'target':ele,'event':opt['type']};if(ele.addEventListener)ele.addEventListener(opt['type'],func,false);else if(ele.attachEvent)ele.attachEvent('on'+opt['type'],func);else ele['on'+opt['type']]=func;},'remove':function(shortcut_combination){shortcut_combination=shortcut_combination.toLowerCase();var binding=this.all_shortcuts[shortcut_combination];delete(this.all_shortcuts[shortcut_combination]);if(!binding)
return;var type=binding['event'];var ele=binding['target'];var callback=binding['callback'];if(ele.detachEvent)
ele.detachEvent('on'+type,callback);else if(ele.removeEventListener)
ele.removeEventListener(type,callback,false);else
ele['on'+type]=false;}};function initTimeseriesDialog(attrId){createHiddenField('currentTimeseriesAttributeId',attrId);$('#timeseriesDialog').empty();timeseriesDialogUpdate();}
function timeseriesDialogUpdate(){$.ajax({url:flowExecutionUrl+"&_eventId=timeseriesUpdate&ajaxSource=true",type:"post",data:$('form:first').serialize(),success:function(data){$('#timeseriesDialog').html(data);datepickerInit();}});}
function triggerTimeseriesEntryAction(position,action){createHiddenField('currentTimeseriesComponentModel.action',action);createHiddenField('currentTimeseriesComponentModel.position',position);timeseriesDialogUpdate();setHiddenField('currentTimeseriesComponentModel.action','');setHiddenField('currentTimeseriesComponentModel.position','');}
function closeTimeseriesDialogAndUpdate(componentMode){if(componentMode!='READ'){var newEntryComplete=$("#newTimeseriesEntryComponentModel_date").val()!=''&&$("#newTimeseriesEntryComponentModel_value").val()!='';if(newEntryComplete){createHiddenField('currentTimeseriesComponentModel.action','add');}
flowAction('update');}}
function getDateRegex(dateFormat){return dateFormat.replace('dd','[0-3]?[0-9]').replace('mm','[0-1]?[0-9]').replace(/y/g,'[0-9]');}
function importStepFinishedPoll(baseUrl,stepToPoll,currentStepStatus){setTimeout(function(){$.ajax({type:"POST",url:baseUrl+"import/poll/step/status.do",data:{pendingStep:stepToPoll,currentStatus:currentStepStatus},success:function(data){if(data.progressState!==0){$(".progress .bar").css("width",(data.progressState/5)+"%");$(".progress .bar").attr("aria-valuenow",data.progressState);}
if(data.finished===true){location.reload();}else{importStepFinishedPoll(baseUrl,stepToPoll,currentStepStatus);}},dataType:"json"});},2000);}var cache={};(function($){$.widget("ui.combobox",$.ui.autocomplete,{options:{minLength:2,baseUrl:"/iteraplan/",showInactiveStatus:true,onlyAvailableForInterfaces:false,buttonTitle:"Show All Items",logging:false},_create:function(){this.options.sort=this.options.sort||this.element.attr("sort");this.options.bbtype=this.options.bbtype||this.element.attr("bbtype");if(this.options.bbtype){this.options.bbtype=this.options.bbtype.replace(/release/i,'');}
if(this.element.is("SELECT")){this._selectInit();return;}
if(this.options.logging)console.log(this.options.selectElement.attr('id'),": init autocomplete");$.ui.autocomplete.prototype._create.call(this);this.element.addClass("ui-widget ui-widget-content ui-corner-left").tooltip({tooltipClass:"ui-state-highlight"});this._createButton();},_createButton:function(){if(this.options.logging)console.log(this.options.selectElement.attr('id'),": CreateButton");var self=this;this.button=$("<button type='button'>&nbsp;</button>").attr("tabIndex",-1).attr("title","Show All Items").insertAfter(this.element).button({icons:{primary:"ui-icon-triangle-1-s"},text:false}).removeClass("ui-corner-all").addClass("ui-corner-right ui-button-icon").click(function(event){self._showFullMenu();});},_showFullMenu:function(){if(this.options.logging)console.log(this.options.selectElement.attr('id'),": Show Full Menu");input=this.element;var data=input.data("combobox");if(input.combobox("widget").is(":visible")){input.combobox("close");this._selectOptionOrRemoveIfInvalid();return;}
var openList=function(){input.combobox("widget").css("display","block").position($.extend({of:input},data.options.position));input.focus();data._trigger("open");};clearTimeout(data.closing);if(!input.isFullMenu){var isFullMenuRendered=data.menuAll;data._swapMenu();input.isFullMenu=true;if(!isFullMenuRendered){if(this.options.sourceArray){this._renderFullMenu(this.options.sourceArray);openList();}else{this._loadOptions(function(){data._createSourceArray();data._renderFullMenu(data.options.sourceArray);openList();});}}else{openList();}}else{openList();}},_renderFullMenu:function(source){if(this.options.logging)console.log(this.options.selectElement.attr('id'),": RenderFullMenu");var self=this,input=this.element,ul=input.data("combobox").menu.element,lis=[];source=this._normalize(source);input.data("combobox").menuAll=input.data("combobox").menu.element.clone(true).appendTo("body");for(var i=0;i<source.length;i++){lis[i]="<li class=\"ui-menu-item\" role=\"menuitem\"><a class=\"ui-corner-all\" tabindex=\"-1\">"+source[i].label+"</a></li>";}
ul.append(lis.join(""));this._resizeMenu();setTimeout(function(){self._setupMenuItem.call(self,ul.children("li"),source);},0);input.isFullMenu=true;},_setupMenuItem:function(items,source){if(this.options.logging)console.log(this.options.selectElement.attr('id'),": SetupMenuItem");var self=this,itemsChunk=items.splice(0,500),sourceChunk=source.splice(0,500);for(var i=0;i<itemsChunk.length;i++){$(itemsChunk[i]).data("item.autocomplete",sourceChunk[i]).mouseenter(function(event){self.menu.activate(event,$(this));}).mouseleave(function(){temp=self.element.context.value;self.menu.deactivate();self.element.val(temp);});}
if(items.length>0){setTimeout(function(){self._setupMenuItem.call(self,items,source);},0);}},_renderItem:function(ul,item){var label=item.label.replace(new RegExp("(?![^&;]+;)(?!<[^<>]*)("+$.ui.autocomplete.escapeRegex(this.term)
+")(?![^<>]*>)(?![^&;]+;)","gi"),"<strong>$1</strong>");return $("<li></li>").data("item.autocomplete",item).append("<a>"+label+"</a>").appendTo(ul);},destroy:function(){if(this.options.logging)console.log(this.options.selectElement.attr('id'),": Destroy");if(this.element.is("SELECT")){this.input.remove();this.element.removeData().show();return;}
$.ui.autocomplete.prototype.destroy.call(this);this.element.removeClass("ui-widget ui-widget-content ui-corner-left");this.button.remove();},search:function(value,event){if(this.options.logging)console.log(this.options.selectElement.attr('id'),": Search");var input=this.element;if(input.isFullMenu){this._swapMenu();input.isFullMenu=false;}
$.ui.autocomplete.prototype.search.call(this,value,event);},_change:function(event){if(this.options.logging)console.log(this.options.selectElement.attr('id'),": _change");this._selectOptionOrRemoveIfInvalid();$.ui.autocomplete.prototype._change.call(this,event);},_selectOptionOrRemoveIfInvalid:function(){if(this.options.logging)console.log(this.options.selectElement.attr('id'),": _selectOptionOrRemoveIfInvalid");if(!this.selectedItem){var matcher=new RegExp("^"+$.ui.autocomplete.escapeRegex(this.element.val())+"$","i"),match=$.grep(this.options.sourceArray,function(value){return matcher.test(value.label);});if(match.length){var item=$(match[0].option);if(this.options.logging)console.log(this.options.selectElement.attr('id'),": Setting (",item.val(),"-",item.text(),") as selected.");this.options.selectElement.val(item.val());}else{if(this.options.logging)console.log(this.options.selectElement.attr('id'),": remove invalid value, as it didn't match anything");this.element.val("");this.options.selectElement.val("-1");this.options.selectElement.val("-1");}}else{if(this.options.logging)console.log("nothing to do.");}
if(this.options.logging)console.log(this.options.selectElement.attr('id'),": current selected element: ",this.options.selectElement.val());},_swapMenu:function(){if(this.options.logging)console.log(this.options.selectElement.attr('id'),": _swapMenu");var input=this.element,data=input.data("combobox"),tmp=data.menuAll;data.menuAll=data.menu.element.hide();if(tmp){data.menu.element=tmp;}else{data.menu.element.empty();}},_loadOptions:function(callback){if(this.options.logging)console.log(this.options.selectElement.attr('id'),": _loadOptions");if(!this.options.loaded){if(this.options.bbtype in cache){this._addOptionsEntries(cache[this.options.bbtype]);callback();}else{var self=this;this._fetch(function(values){cache[self.options.bbtype]=values;self._addOptionsEntries(values);callback();});}}else{if(this.options.selectElement.children("option").first().val()==''){this.options.selectElement.children("option").first().val('-1').html('&nbsp;');}
callback();}},_fetch:function(processValues){if(this.options.logging)console.log(this.options.selectElement.attr('id'),": _fetch");$.ajax({url:this.options.baseUrl+this.options.bbtype+"/list.do",data:{showInactive:this.options.showInactiveStatus,onlyAvailableForInterfaces:this.options.onlyAvailableForInterfaces,escapeHtml:true},dataType:"json",success:function(data){var values=$.map(data.items,function(item){return{label:item.name,value:item.id};});processValues(values);}});},_addOptionsEntries:function(values){if(this.options.logging)console.log(this.options.selectElement.attr('id'),": _addOptionsEntries");if(this.options.sort=='desc'){values=values.slice().reverse();if(values.length>1){if(values[values.length-1].label=='-'){values.unshift(values.pop());}}}
var htmlString="";if(this.options.selectElement.attr("req")!='true'){htmlString+='<option value="-1">&nbsp;</option>';}
$.each(values,function(_,el){htmlString+='<option value="'+el.value+'">'+el.label+'</option>';});this.options.selectElement.html(htmlString);this.options.loaded=true;},_selectInit:function(){var self=this;if(this.options.logging)console.log(this.element.attr('id'),": _selectInit");var select=this.element.hide(),selected=select.children(":selected"),value=selected.val()?selected.text():"";if(select.attr("dynLoad")=='true'){this.options.loaded=false;}else{this.options.loaded=true;}
if((select.attr("ownbbtype")=='informationsysteminterface')&&(this.options.bbtype=='technicalcomponent')){this.options.onlyAvailableForInterfaces=true;}
this.options.selectElement=select;this.options.source=this._source;var userSelectCallback=this.options.select;var userSelectedCallback=this.options.selected;this.options.select=function(event,ui){var item=$(ui.item.option);if(self.options.logging)console.log(self.options.selectElement.attr('id'),": Setting (",item.val(),"-",item.text(),") as selected.");self.options.selectElement.val(item.val());self.options.selectElement.val(item.val());self.input.val(item.text());event.preventDefault();if(userSelectCallback)
userSelectCallback(event,ui);if(userSelectedCallback)
userSelectedCallback(event,ui);if(self.options.logging)console.log(self.options.selectElement.attr('id'),": current selected element: ",self.options.selectElement.val());};this.input=$("<input>").insertAfter(select).val(value).combobox(this.options);},_createSourceArray:function(){if(this.options.logging)console.log(this.options.selectElement.attr('id'),": CreateSourceArray");var optElements=this.options.selectElement.children();this.options.sourceArray=[];for(var k=0;k<optElements.length;k++){this.options.sourceArray[k]={label:optElements[k].innerHTML,option:optElements[k]};}},_source:function(request,response){if(this.options.logging)console.log(this.options.selectElement.attr('id'),": Source");var self=this;if(this.options.sourceArray){response($.ui.autocomplete.filter(this.options.sourceArray,request.term));}else{this._loadOptions(function(){self._createSourceArray();response($.ui.autocomplete.filter(self.options.sourceArray,request.term));});}}});})(jQuery);(function(factory){"use strict";if(typeof define==='function'&&define.amd){define(['jquery'],factory);}else if(window.jQuery&&!window.jQuery.fn.colorpicker){factory(window.jQuery);}}
(function($){'use strict';var Color=function(val){this.value={h:0,s:0,b:0,a:1};this.origFormat=null;if(val){if(val.toLowerCase!==undefined){this.setColor(val);}else if(val.h!==undefined){this.value=val;}}};Color.prototype={constructor:Color,colors:{"aliceblue":"#f0f8ff","antiquewhite":"#faebd7","aqua":"#00ffff","aquamarine":"#7fffd4","azure":"#f0ffff","beige":"#f5f5dc","bisque":"#ffe4c4","black":"#000000","blanchedalmond":"#ffebcd","blue":"#0000ff","blueviolet":"#8a2be2","brown":"#a52a2a","burlywood":"#deb887","cadetblue":"#5f9ea0","chartreuse":"#7fff00","chocolate":"#d2691e","coral":"#ff7f50","cornflowerblue":"#6495ed","cornsilk":"#fff8dc","crimson":"#dc143c","cyan":"#00ffff","darkblue":"#00008b","darkcyan":"#008b8b","darkgoldenrod":"#b8860b","darkgray":"#a9a9a9","darkgreen":"#006400","darkkhaki":"#bdb76b","darkmagenta":"#8b008b","darkolivegreen":"#556b2f","darkorange":"#ff8c00","darkorchid":"#9932cc","darkred":"#8b0000","darksalmon":"#e9967a","darkseagreen":"#8fbc8f","darkslateblue":"#483d8b","darkslategray":"#2f4f4f","darkturquoise":"#00ced1","darkviolet":"#9400d3","deeppink":"#ff1493","deepskyblue":"#00bfff","dimgray":"#696969","dodgerblue":"#1e90ff","firebrick":"#b22222","floralwhite":"#fffaf0","forestgreen":"#228b22","fuchsia":"#ff00ff","gainsboro":"#dcdcdc","ghostwhite":"#f8f8ff","gold":"#ffd700","goldenrod":"#daa520","gray":"#808080","green":"#008000","greenyellow":"#adff2f","honeydew":"#f0fff0","hotpink":"#ff69b4","indianred ":"#cd5c5c","indigo ":"#4b0082","ivory":"#fffff0","khaki":"#f0e68c","lavender":"#e6e6fa","lavenderblush":"#fff0f5","lawngreen":"#7cfc00","lemonchiffon":"#fffacd","lightblue":"#add8e6","lightcoral":"#f08080","lightcyan":"#e0ffff","lightgoldenrodyellow":"#fafad2","lightgrey":"#d3d3d3","lightgreen":"#90ee90","lightpink":"#ffb6c1","lightsalmon":"#ffa07a","lightseagreen":"#20b2aa","lightskyblue":"#87cefa","lightslategray":"#778899","lightsteelblue":"#b0c4de","lightyellow":"#ffffe0","lime":"#00ff00","limegreen":"#32cd32","linen":"#faf0e6","magenta":"#ff00ff","maroon":"#800000","mediumaquamarine":"#66cdaa","mediumblue":"#0000cd","mediumorchid":"#ba55d3","mediumpurple":"#9370d8","mediumseagreen":"#3cb371","mediumslateblue":"#7b68ee","mediumspringgreen":"#00fa9a","mediumturquoise":"#48d1cc","mediumvioletred":"#c71585","midnightblue":"#191970","mintcream":"#f5fffa","mistyrose":"#ffe4e1","moccasin":"#ffe4b5","navajowhite":"#ffdead","navy":"#000080","oldlace":"#fdf5e6","olive":"#808000","olivedrab":"#6b8e23","orange":"#ffa500","orangered":"#ff4500","orchid":"#da70d6","palegoldenrod":"#eee8aa","palegreen":"#98fb98","paleturquoise":"#afeeee","palevioletred":"#d87093","papayawhip":"#ffefd5","peachpuff":"#ffdab9","peru":"#cd853f","pink":"#ffc0cb","plum":"#dda0dd","powderblue":"#b0e0e6","purple":"#800080","red":"#ff0000","rosybrown":"#bc8f8f","royalblue":"#4169e1","saddlebrown":"#8b4513","salmon":"#fa8072","sandybrown":"#f4a460","seagreen":"#2e8b57","seashell":"#fff5ee","sienna":"#a0522d","silver":"#c0c0c0","skyblue":"#87ceeb","slateblue":"#6a5acd","slategray":"#708090","snow":"#fffafa","springgreen":"#00ff7f","steelblue":"#4682b4","tan":"#d2b48c","teal":"#008080","thistle":"#d8bfd8","tomato":"#ff6347","turquoise":"#40e0d0","violet":"#ee82ee","wheat":"#f5deb3","white":"#ffffff","whitesmoke":"#f5f5f5","yellow":"#ffff00","yellowgreen":"#9acd32"},_sanitizeNumber:function(val){if(typeof val==='number'){return val;}
if(isNaN(val)||(val===null)||(val==='')||(val===undefined)){return 1;}
if(val.toLowerCase!==undefined){return parseFloat(val);}
return 1;},setColor:function(strVal){strVal=strVal.toLowerCase();this.value=this.stringToHSB(strVal)||{h:0,s:0,b:0,a:1};},stringToHSB:function(strVal){strVal=strVal.toLowerCase();var that=this,result=false;$.each(this.stringParsers,function(i,parser){var match=parser.re.exec(strVal),values=match&&parser.parse.apply(that,[match]),format=parser.format||'rgba';if(values){if(format.match(/hsla?/)){result=that.RGBtoHSB.apply(that,that.HSLtoRGB.apply(that,values));}else{result=that.RGBtoHSB.apply(that,values);}
that.origFormat=format;return false;}
return true;});return result;},setHue:function(h){this.value.h=1-h;},setSaturation:function(s){this.value.s=s;},setBrightness:function(b){this.value.b=1-b;},setAlpha:function(a){this.value.a=parseInt((1-a)*100,10)/100;},toRGB:function(h,s,b,a){if(!h){h=this.value.h;s=this.value.s;b=this.value.b;}
h*=360;var R,G,B,X,C;h=(h%360)/60;C=b*s;X=C*(1-Math.abs(h%2-1));R=G=B=b-C;h=~~h;R+=[C,X,0,0,X,C][h];G+=[X,C,C,X,0,0][h];B+=[0,0,X,C,C,X][h];return{r:Math.round(R*255),g:Math.round(G*255),b:Math.round(B*255),a:a||this.value.a};},toHex:function(h,s,b,a){var rgb=this.toRGB(h,s,b,a);return'#'+((1<<24)|(parseInt(rgb.r)<<16)|(parseInt(rgb.g)<<8)|parseInt(rgb.b)).toString(16).substr(1);},toPlainHex:function(h,s,b,a){var rgb=this.toRGB(h,s,b,a);return((1<<24)|(parseInt(rgb.r)<<16)|(parseInt(rgb.g)<<8)|parseInt(rgb.b)).toString(16).substr(1);},toHSL:function(h,s,b,a){h=h||this.value.h;s=s||this.value.s;b=b||this.value.b;a=a||this.value.a;var H=h,L=(2-s)*b,S=s*b;if(L>0&&L<=1){S/=L;}else{S/=2-L;}
L/=2;if(S>1){S=1;}
return{h:isNaN(H)?0:H,s:isNaN(S)?0:S,l:isNaN(L)?0:L,a:isNaN(a)?0:a,};},toAlias:function(r,g,b,a){var rgb=this.toHex(r,g,b,a);for(var alias in this.colors){if(this.colors[alias]==rgb){return alias;}}
return false;},RGBtoHSB:function(r,g,b,a){r/=255;g/=255;b/=255;var H,S,V,C;V=Math.max(r,g,b);C=V-Math.min(r,g,b);H=(C===0?null:V===r?(g-b)/C:V===g?(b-r)/C+2:(r-g)/C+4);H=((H+360)%6)*60/360;S=C===0?0:C/V;return{h:this._sanitizeNumber(H),s:S,b:V,a:this._sanitizeNumber(a)};},HueToRGB:function(p,q,h){if(h<0){h+=1;}else if(h>1){h-=1;}
if((h*6)<1){return p+(q-p)*h*6;}else if((h*2)<1){return q;}else if((h*3)<2){return p+(q-p)*((2/3)-h)*6;}else{return p;}},HSLtoRGB:function(h,s,l,a){if(s<0){s=0;}
var q;if(l<=0.5){q=l*(1+s);}else{q=l+s-(l*s);}
var p=2*l-q;var tr=h+(1/3);var tg=h;var tb=h-(1/3);var r=Math.round(this.HueToRGB(p,q,tr)*255);var g=Math.round(this.HueToRGB(p,q,tg)*255);var b=Math.round(this.HueToRGB(p,q,tb)*255);return[r,g,b,this._sanitizeNumber(a)];},toString:function(format){format=format||'rgba';switch(format){case'rgb':{var rgb=this.toRGB();return'rgb('+rgb.r+','+rgb.g+','+rgb.b+')';}
break;case'rgba':{var rgb=this.toRGB();return'rgba('+rgb.r+','+rgb.g+','+rgb.b+','+rgb.a+')';}
break;case'hsl':{var hsl=this.toHSL();return'hsl('+Math.round(hsl.h*360)+','+Math.round(hsl.s*100)+'%,'+Math.round(hsl.l*100)+'%)';}
break;case'hsla':{var hsl=this.toHSL();return'hsla('+Math.round(hsl.h*360)+','+Math.round(hsl.s*100)+'%,'+Math.round(hsl.l*100)+'%,'+hsl.a+')';}
break;case'hex':{return this.toHex();}
break;case'plainhex':{return this.toPlainHex();}
break;case'alias':return this.toAlias()||this.toHex();default:{return false;}
break;}},stringParsers:[{re:/#([a-fA-F0-9]{2})([a-fA-F0-9]{2})([a-fA-F0-9]{2})/,format:'hex',parse:function(execResult){return[parseInt(execResult[1],16),parseInt(execResult[2],16),parseInt(execResult[3],16),1];}},{re:/#([a-fA-F0-9])([a-fA-F0-9])([a-fA-F0-9])/,format:'hex',parse:function(execResult){return[parseInt(execResult[1]+execResult[1],16),parseInt(execResult[2]+execResult[2],16),parseInt(execResult[3]+execResult[3],16),1];}},{re:/([a-fA-F0-9]{2})([a-fA-F0-9]{2})([a-fA-F0-9]{2})/,format:'plainhex',parse:function(execResult){return[parseInt(execResult[1],16),parseInt(execResult[2],16),parseInt(execResult[3],16),1];}},{re:/rgb\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*?\)/,format:'rgb',parse:function(execResult){return[execResult[1],execResult[2],execResult[3],1];}},{re:/rgb\(\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*?\)/,format:'rgb',parse:function(execResult){return[2.55*execResult[1],2.55*execResult[2],2.55*execResult[3],1];}},{re:/rgba\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*(?:,\s*(\d+(?:\.\d+)?)\s*)?\)/,format:'rgba',parse:function(execResult){return[execResult[1],execResult[2],execResult[3],execResult[4]];}},{re:/rgba\(\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d+(?:\.\d+)?)\s*)?\)/,format:'rgba',parse:function(execResult){return[2.55*execResult[1],2.55*execResult[2],2.55*execResult[3],execResult[4]];}},{re:/hsl\(\s*(\d+(?:\.\d+)?)\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*?\)/,format:'hsl',parse:function(execResult){return[execResult[1]/360,execResult[2]/100,execResult[3]/100,execResult[4]];}},{re:/hsla\(\s*(\d+(?:\.\d+)?)\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d+(?:\.\d+)?)\s*)?\)/,format:'hsla',parse:function(execResult){return[execResult[1]/360,execResult[2]/100,execResult[3]/100,execResult[4]];}},{re:/^([a-z]{3,})$/,format:'alias',parse:function(execResult){var hexval=this.colorNameToHex(execResult[0])||'#000000';var match=this.stringParsers[0].re.exec(hexval),values=match&&this.stringParsers[0].parse.apply(this,[match]);return values;}}],colorNameToHex:function(name){if(typeof this.colors[name.toLowerCase()]!=='undefined'){return this.colors[name.toLowerCase()];}
return false;}};var defaults={horizontal:false,inline:false,color:false,format:false,input:'input',container:false,component:'.add-on, .input-group-addon',sliders:{saturation:{maxLeft:100,maxTop:100,callLeft:'setSaturation',callTop:'setBrightness'},hue:{maxLeft:0,maxTop:100,callLeft:false,callTop:'setHue'},alpha:{maxLeft:0,maxTop:100,callLeft:false,callTop:'setAlpha'}},slidersHorz:{saturation:{maxLeft:100,maxTop:100,callLeft:'setSaturation',callTop:'setBrightness'},hue:{maxLeft:100,maxTop:0,callLeft:'setHue',callTop:false},alpha:{maxLeft:100,maxTop:0,callLeft:'setAlpha',callTop:false}},template:'<div class="colorpicker dropdown-menu">'+'<div class="colorpicker-saturation"><i><b></b></i></div>'+'<div class="colorpicker-hue"><i></i></div>'+'<div class="colorpicker-alpha"><i></i></div>'+'<div class="colorpicker-color"><div /></div>'+'</div>'};var Colorpicker=function(element,options){this.element=$(element).addClass('colorpicker-element');this.options=$.extend({},defaults,this.element.data(),options);this.component=this.options.component;this.component=(this.component!==false)?this.element.find(this.component):false;if(this.component&&(this.component.length===0)){this.component=false;}
this.container=(this.options.container===true)?this.element:this.options.container;this.container=(this.container!==false)?$(this.container):false;this.input=this.element.is('input')?this.element:(this.options.input?this.element.find(this.options.input):false);if(this.input&&(this.input.length===0)){this.input=false;}
this.color=new Color(this.options.color!==false?this.options.color:this.getValue());this.format=this.options.format!==false?this.options.format:this.color.origFormat;this.picker=$(this.options.template);if(this.options.inline){this.picker.addClass('colorpicker-inline colorpicker-visible');}else{this.picker.addClass('colorpicker-hidden');}
if(this.options.horizontal){this.picker.addClass('colorpicker-horizontal');}
if(this.format==='rgba'||this.format==='hsla'){this.picker.addClass('colorpicker-with-alpha');}
this.picker.on('mousedown.colorpicker',$.proxy(this.mousedown,this));this.picker.appendTo(this.container?this.container:$('body'));if(this.input!==false){this.input.on({'keyup.colorpicker':$.proxy(this.keyup,this)});if(this.component===false){this.element.on({'focus.colorpicker':$.proxy(this.show,this)});}
if(this.options.inline===false){this.element.on({'focusout.colorpicker':$.proxy(this.hide,this)});}}
if(this.component!==false){this.component.on({'click.colorpicker':$.proxy(this.show,this)});}
if((this.input===false)&&(this.component===false)){this.element.on({'click.colorpicker':$.proxy(this.show,this)});}
this.update();$($.proxy(function(){this.element.trigger('create');},this));};Colorpicker.version='2.0.0-beta';Colorpicker.Color=Color;Colorpicker.prototype={constructor:Colorpicker,destroy:function(){this.picker.remove();this.element.removeData('colorpicker').off('.colorpicker');if(this.input!==false){this.input.off('.colorpicker');}
if(this.component!==false){this.component.off('.colorpicker');}
this.element.removeClass('colorpicker-element');this.element.trigger({type:'destroy'});},reposition:function(){if(this.options.inline!==false){return false;}
var type=this.container&&this.container[0]!==document.body?'position':'offset';var offset=this.component?this.component[type]():this.element[type]();this.picker.css({top:offset.top+(this.component?this.component.outerHeight():this.element.outerHeight()),left:offset.left});},show:function(e){if(this.isDisabled()){return false;}
this.picker.addClass('colorpicker-visible').removeClass('colorpicker-hidden');this.reposition();$(window).on('resize.colorpicker',$.proxy(this.reposition,this));if(!this.hasInput()&&e){if(e.stopPropagation&&e.preventDefault){e.stopPropagation();e.preventDefault();}}
if(this.options.inline===false){$(window.document).on({'mousedown.colorpicker':$.proxy(this.hide,this)});}
this.element.trigger({type:'showPicker',color:this.color});},hide:function(){this.picker.addClass('colorpicker-hidden').removeClass('colorpicker-visible');$(window).off('resize.colorpicker',this.reposition);$(document).off({'mousedown.colorpicker':this.hide});this.update();this.element.trigger({type:'hidePicker',color:this.color});},updateData:function(val){val=val||this.color.toString(this.format);this.element.data('color',val);return val;},updateInput:function(val){val=val||this.color.toString(this.format);if(this.input!==false){this.input.prop('value',val);}
return val;},updatePicker:function(val){if(val!==undefined){this.color=new Color(val);}
var sl=(this.options.horizontal===false)?this.options.sliders:this.options.slidersHorz;var icns=this.picker.find('i');if(icns.length===0){return;}
if(this.options.horizontal===false){sl=this.options.sliders;icns.eq(1).css('top',sl.hue.maxTop*(1-this.color.value.h)).end().eq(2).css('top',sl.alpha.maxTop*(1-this.color.value.a));}else{sl=this.options.slidersHorz;icns.eq(1).css('left',sl.hue.maxLeft*(1-this.color.value.h)).end().eq(2).css('left',sl.alpha.maxLeft*(1-this.color.value.a));}
icns.eq(0).css({'top':sl.saturation.maxTop-this.color.value.b*sl.saturation.maxTop,'left':this.color.value.s*sl.saturation.maxLeft});this.picker.find('.colorpicker-saturation').css('backgroundColor',this.color.toHex(this.color.value.h,1,1,1));this.picker.find('.colorpicker-alpha').css('backgroundColor',this.color.toHex());this.picker.find('.colorpicker-color, .colorpicker-color div').css('backgroundColor',this.color.toString(this.format));return val;},updateComponent:function(val){val=val||this.color.toString(this.format);if(this.component!==false){var icn=this.component.find('i').eq(0);if(icn.length>0){icn.css({'backgroundColor':val});}else{this.component.css({'backgroundColor':val});}}
return val;},update:function(force){var val=this.updateComponent();if((this.getValue(false)!==false)||(force===true)){this.updateInput(val);this.updateData(val);}
this.updatePicker();return val;},setValue:function(val){this.color=new Color(val);this.update();this.element.trigger({type:'changeColor',color:this.color,value:val});},getValue:function(defaultValue){defaultValue=(defaultValue===undefined)?'#000000':defaultValue;var val;if(this.hasInput()){val=this.input.val();}else{val=this.element.data('color');}
if((val===undefined)||(val==='')||(val===null)){val=defaultValue;}
return val;},hasInput:function(){return(this.input!==false);},isDisabled:function(){if(this.hasInput()){return(this.input.prop('disabled')===true);}
return false;},disable:function(){if(this.hasInput()){this.input.prop('disabled',true);return true;}
return false;},enable:function(){if(this.hasInput()){this.input.prop('disabled',false);return true;}
return false;},currentSlider:null,mousePointer:{left:0,top:0},mousedown:function(e){e.stopPropagation();e.preventDefault();var target=$(e.target);var zone=target.closest('div');var sl=this.options.horizontal?this.options.slidersHorz:this.options.sliders;if(!zone.is('.colorpicker')){if(zone.is('.colorpicker-saturation')){this.currentSlider=$.extend({},sl.saturation);}else if(zone.is('.colorpicker-hue')){this.currentSlider=$.extend({},sl.hue);}else if(zone.is('.colorpicker-alpha')){this.currentSlider=$.extend({},sl.alpha);}else{return false;}
var offset=zone.offset();this.currentSlider.guide=zone.find('i')[0].style;this.currentSlider.left=e.pageX-offset.left;this.currentSlider.top=e.pageY-offset.top;this.mousePointer={left:e.pageX,top:e.pageY};$(document).on({'mousemove.colorpicker':$.proxy(this.mousemove,this),'mouseup.colorpicker':$.proxy(this.mouseup,this)}).trigger('mousemove');}
return false;},mousemove:function(e){e.stopPropagation();e.preventDefault();var left=Math.max(0,Math.min(this.currentSlider.maxLeft,this.currentSlider.left+((e.pageX||this.mousePointer.left)-this.mousePointer.left)));var top=Math.max(0,Math.min(this.currentSlider.maxTop,this.currentSlider.top+((e.pageY||this.mousePointer.top)-this.mousePointer.top)));this.currentSlider.guide.left=left+'px';this.currentSlider.guide.top=top+'px';if(this.currentSlider.callLeft){this.color[this.currentSlider.callLeft].call(this.color,left/100);}
if(this.currentSlider.callTop){this.color[this.currentSlider.callTop].call(this.color,top/100);}
this.update(true);this.element.trigger({type:'changeColor',color:this.color});return false;},mouseup:function(e){e.stopPropagation();e.preventDefault();$(document).off({'mousemove.colorpicker':this.mousemove,'mouseup.colorpicker':this.mouseup});return false;},keyup:function(e){if((e.keyCode===38)){if(this.color.value.a<1){this.color.value.a=Math.round((this.color.value.a+0.01)*100)/100;}
this.update(true);}else if((e.keyCode===40)){if(this.color.value.a>0){this.color.value.a=Math.round((this.color.value.a-0.01)*100)/100;}
this.update(true);}else{var val=this.input.val();this.color=new Color(val);if(this.getValue(false)!==false){this.updateData();this.updateComponent();this.updatePicker();}}
this.element.trigger({type:'changeColor',color:this.color,value:val});}};$.colorpicker=Colorpicker;$.fn.colorpicker=function(option){var pickerArgs=arguments;return this.each(function(){var $this=$(this),inst=$this.data('colorpicker'),options=((typeof option==='object')?option:{});if((!inst)&&(typeof option!=='string')){$this.data('colorpicker',new Colorpicker(this,options));}else{if(typeof option==='string'){inst[option].apply(inst,Array.prototype.slice.call(pickerArgs,1));}}});};$.fn.colorpicker.constructor=Colorpicker;}));var globalDiagramType="";var globalDiagramVariant="";function variables(args){this.baseUrl=args.baseUrl;this.buildingBlockType=args.buildingBlockType;this.displayId=args.displayId;this.displayLoadingId=args.displayLoadingId;this.urlAttribute=args.urlAttribute;this.buildingBlockId=args.buildingBlockId;this.resultFormat=args.resultFormat;this.selectText=args.selectText;this.noContentMessage=args.noContentMessage;this.previewHeaderElement=args.previewHeaderElement;this.previewLabel=args.previewLabel;}
function makeGraphicPrintable(){$('#fastExportContentHolder').attr('class','fastExportContent');}
function onGraphicLoaded(){showDownloadButton();toggleVisioExportFormat();$('#'+variables.displayLoadingId).css('visibility','hidden');if(navigator.userAgent.indexOf("MSIE 6.0")===-1){$('#'+variables.displayLoadingId).text('');}
$('#'+variables.displayId).css('visibility','visible');makeGraphicPrintable();}
function refreshHeader(key){var previewHeader=$('#'+variables.previewHeaderElement);previewHeader.text(variables.previewLabel+key);}
function constructUrl(bbId,savedQueryType,variantParameter,format,outputMode){return variables.baseUrl+"fastexport/generate.do?id="+bbId+"&buildingBlockType="+variables.buildingBlockType+"&savedQueryType="+savedQueryType+variantParameter+"&resultFormat="+format+"&outputMode="+outputMode;}
function constructUrlForConfigure(){switch(globalDiagramType){case"InformationFlow":return variables.baseUrl+"show/graphicalreporting/informationflowdiagram?id="+variables.buildingBlockId+"&_eventId=ConfigureGR&bbType="+variables.buildingBlockType;case"Landscape":return variables.baseUrl+"show/graphicalreporting/landscapediagram?id="+variables.buildingBlockId+"&_eventId=ConfigureGR&bbType="+variables.buildingBlockType+"&diagramVariant="+globalDiagramVariant;case"Masterplan":return variables.baseUrl+"show/graphicalreporting/masterplandiagram?id="+variables.buildingBlockId+"&_eventId=ConfigureGR&bbType="+variables.buildingBlockType+"&diagramVariant="+globalDiagramVariant;default:return"#";}}
function getResultFormatOptionPreviewDownload(){if(globalDiagramType=='ContextOverviewDiagram'){return getResultFormatOption('resultFormatDropdown2');}else{return getResultFormatOption('resultFormatDropdown');}}
function getResultFormatOptionDirectDownload(){return getResultFormatOption('resultFormatDropdownDownload');}
function getResultFormatOption(dropdownId){return $('#'+dropdownId).val();}
function redirectToUrlFromDisplayedGraphic(){var graphic=$('#'+variables.displayId);var fetchedUrl=graphic.attr(variables.urlAttribute);var downloadUrl=fetchedUrl.replace("&outputMode=inline","&outputMode=attachment");downloadUrl=downloadUrl.replace(/\&resultFormat=\w+\&/,"&resultFormat="+getResultFormatOptionPreviewDownload()+"&");changeLocation(downloadUrl);}
function retrieveUrlFromDisplayedGraphic(){var graphic=$('#'+variables.displayId);if(graphic!=null){var fetchedUrl=graphic.attr(variables.urlAttribute);var downloadUrl=fetchedUrl.replace("&outputMode=inline","&outputMode=attachment");downloadUrl=downloadUrl.replace(/\&resultFormat=\w+\&/,"&resultFormat="+getResultFormatOptionPreviewDownload()+"&");prefix=window.location.protocol+"//"+window.location.host;if(downloadUrl.indexOf(prefix)===-1){downloadUrl=prefix+downloadUrl;}
return downloadUrl;}
else{return location.href;}}
function toggleResultFormatSpan(visibility){$('#resultFormatSpan').css('visibility',visibility);}
function toggleResultFormatSpanDownload(visibility){$('#resultFormatSpanDownload').css('visibility',visibility);}
function showDownloadButton(){$('#downloadFastExport').css('visibility','visible');$('#fastExportButtonBookmark').css('visibility','visible');if(globalDiagramType!='NeighborhoodDiagram'&&globalDiagramType!='ContextOverviewDiagram'){$('#jumpToGraphicalReportStep2').css('visibility','visible');}
toggleResultFormatSpanDownload('visible');}
function hideDownloadButton(){$('#downloadFastExport').css('visibility','hidden');$('#fastExportButtonBookmark').css('visibility','hidden');$('#jumpToGraphicalReportStep2').css('visibility','hidden');toggleResultFormatSpanDownload('hidden');}
function toggleVisioExportFormat(){if(globalDiagramType=='ContextOverviewDiagram'){$('#resultFormatDropdown').css('display','none');$('#resultFormatDropdown2').css('display','');}
else{$('#resultFormatDropdown').css('display','');$('#resultFormatDropdown2').css('display','none');}}
function hideResultFormats(){toggleResultFormatSpan("hidden");}
function showResultFormats(){toggleResultFormatSpan("visible");}
function clickAction(savedQueryType,diagramVariant){window.globalDiagramType=savedQueryType;window.globalDiagramVariant=diagramVariant;var variantParameter="";if(diagramVariant!=null&&diagramVariant!=""){variantParameter="&diagramVariant="+diagramVariant;}
var outputMode="inline";var graphic=$('#'+variables.displayId);var graphicLoading=$('#'+variables.displayLoadingId);var format=variables.resultFormat;if(outputMode=="attachment"){format=getResultFormatOptionDirectDownload();}
var urlWithParameters=constructUrl(variables.buildingBlockId,savedQueryType,variantParameter,format,outputMode);if(outputMode=="attachment"){changeLocation(urlWithParameters);}
else{if(graphic.prop('tagName')=="IMG"||graphic.prop('tagName')=="img"){urlWithParameters=urlWithParameters+"&keepfresh="+(new Date()).getTime()+"#";}
var xhrArgs={url:urlWithParameters,dataType:"text",cache:false,complete:function(jqXHR){$("#graphSelectionBtn").attr("disabled",false);switch(jqXHR.status){case 200:graphic.attr(variables.urlAttribute,urlWithParameters);if(navigator.userAgent.indexOf("WebKit")>-1){onGraphicLoaded();makeGraphicPrintable();}
break;case 204:case 1223:graphic.css('visibility','hidden');graphicLoading.html(variables.noContentMessage);graphicLoading.css('visibility','visible');makeGraphicPrintable();break;default:graphic.css('visibility','hidden');graphicLoading.text("Error "+jqXHR.status);graphicLoading.css('visibility','visible');makeGraphicPrintable();}}};$("#graphSelectionBtn").attr("disabled",true);hideDownloadButton();if(variables.urlAttribute=="data"){graphic.attr(variables.urlAttribute,'');}
graphic.css('visibility','hidden');graphicLoading.html('<img border="0" src="'+variables.baseUrl+'images/loading.gif" alt="Loading"/>');graphicLoading.css('visibility','visible');var deferred=$.ajax(xhrArgs);}}
function clickInformationFlow(key){clickAction("InformationFlow");refreshHeader(key);}
function clickBusinessLandscapeByBusinessFunctions(key){clickAction("Landscape","BusinessLandscapeByBusinessFunctions");refreshHeader(key);}
function clickBusinessLandscapeByProducts(key){clickAction("Landscape","BusinessLandscapeByProducts");refreshHeader(key);}
function clickBusinessLandscapeByBusinessUnits(key){clickAction("Landscape","BusinessLandscapeByBusinessUnits");refreshHeader(key);}
function clickBusinessLandscapeByBusinessProcesses(key){clickAction("Landscape","BusinessLandscapeByBusinessProcesses");refreshHeader(key);}
function clickBusinessLandscapeByProjects(key){clickAction("Landscape","BusinessLandscapeByProjects");refreshHeader(key);}
function clickTechnicalLandscape(key){clickAction("Landscape","TechnicalLandscape");refreshHeader(key);}
function clickMasterplanHierarchy(key){clickAction("Masterplan","Hierarchy");refreshHeader(key);}
function clickMasterplanProjects(key){clickAction("Masterplan","Projects");refreshHeader(key);}
function clickMasterplanTechnicalComponents(key){clickAction("Masterplan","TechnicalComponents");refreshHeader(key);}
function clickNeighborhood(key){clickAction("NeighborhoodDiagram");refreshHeader(key);}
function clickContextOverview(key){clickAction("ContextOverviewDiagram");refreshHeader(key);}