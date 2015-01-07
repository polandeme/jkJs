var storage = {

	LS: window.localStorage,
	//检测是否支持localStorage
	_isLocalStorage: function() {
		return window.localStorage ? true : false;
	},

	add: function(key, value) {
		if(this._isLocalStorage()) {
			this.LS.setItem(key,value);
		}
	}
	
};