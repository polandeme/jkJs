/**
 * support.js
 * Browser: 判断浏览器, 特别增加了微信内置浏览器判断
 * Device:  判断使用的设备 (没有判断系统版本，必要性不大)
 * Os: 判断用户系统 (win,mac, linux. 并没有判断系统版本，必要性不大)
 * @autor polandme
 * @date  Jan 5, 2015    好吧,竟然都2015年了
 *
 */

var _$ = (function() {
	var s = {};

	s.Browser = function() {
		this.ua = navigator.userAgent.toLowerCase();

		this.chrome = !!this.isChrome();
		this.ie = !!this.isIE();
		this.firefox = !!this.isFirefox();
		this.opera = !!this.isOpera();
		this.safari = !!this.isSafari();

		this.version = this._version()
	}

	s.Browser.prototype.isChrome = function() {
		return this.ua.match(/chrome\/([\d.]+)/);
	};

	//判断IE, 包括IE11
	s.Browser.prototype.isIE = function() {
		return this.ua.match(/msie ([\d.]+)/) ? this.ua.match(/msie ([\d.]+)/) : 
			   this.ua.match(/rv:([\d.]+)\) like gecko/);
	};

	s.Browser.prototype.isFirefox = function() {
		return this.ua.match(/firefox\/([\d.]+)/);
	};

	s.Browser.prototype.isOpera = function() {
		return this.ua.match(/opera.([\d.]+)/);
	};

	s.Browser.prototype.isSafari = function() {
		return this.ua.match(/version\/([\d.]+).*safari/);
	};

	//移动端浏览器
	s.Browser.prototype.isWeixin = function() {
		return this.ua.match(/micromessenger/);
	}


	//得到浏览器版本
	s.Browser.prototype._version = function() {

		return this.isChrome() ? this.isChrome()[1] :
		  	   this.isIE()[1] ? this.isFirefox()[1] :
			   this.isOpera()[1] ? this.isSafari()[1] : 0 ;
	}


	// 判断用户平台

	//判断浏览器平台 TODO 正则 (没有判断系统版本，必要性不大)

	s.Device = function() {
		this.ua = navigator.userAgent.toLowerCase();
	}

	s.Device.prototype.ipad = function() {
		return !!this.ua.match(/ipad/i);
	};

	s.Device.prototype.iphone = function() {
		return !!this.ua.match(/iphone os/i);
	};

	s.Device.prototype.android = function() {
		return !!this.ua.match(/android/i);
	};

	// 判断win phone 
	s.Device.prototype.wphone = function() {
		return !!this.ua.match(/windows mobile/i);
	};

	// 判断操作系统 (没有判断系统版本，必要性不大)

	s.Os = function() {
		this.os = navigator.platform.toLowerCase();
	};

	s.Os.prototype.win = function() {
		return (this.os.indexOf("win") !== -1) ? true : false;
	};

	s.Os.prototype.mac = function() {
		return (this.os.indexOf('mac') !== -1) ? true : false;
	};

	s.Os.prototype.linux = function() {
		return (this.os.indexOf('linux') !== -1) ? true: false;
	};

	return s;
})();
