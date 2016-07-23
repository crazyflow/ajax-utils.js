//get http object
function createRequest() {
	try {
		request = new XMLHttpRequest();
	} catch (tryMS) {
		try {
			request = new ActiveXObject("Msxml2.XMLHTTP");
		} catch (otherMS){
			try {
				request = new ActiveXObject("Micrisoft.XMLHTTP");
			} catch (failed) {
				request = null;
			}
		}
	}
	return request;
}

//add multi event
//event:事件名称，如mouseover,mouseout...
//handler:回调函数名称
function addEventHandler(obj, eventName, handler) {
	if(document.attachEvent) {
		obj.attachEvent("on" + eventName, handler);
	} else if (document.addEventListener) {
		obj.addEventListener(eventName, handler, false);
	}
}

//获取浏览器参数事件
function getActivatedObject(e) {
	var obj;
	if(!e) {
		//early version of IE
		obj = window.event.srcElement;
	} else if (e.srcElement) {
		//IE 7 or later
		obj = e.srcElement;
	} else {
		//DOM level 2 brower
		obj = e.target;
	}
}