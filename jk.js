(function() {
    var jk = function(el) {
        return  new jk.prototype.init(el);
    };
    jk.prototype = {
        element: [],
        init: function(el) {
            //el_flag: 判断是id,class,tag 
            var el_flag;
            el_flag = el[0];
            this.element = [];
            if(el_flag === '#') {
                el = el.slice(1);
                el = document.getElementById(el);
                this.element.push(el);
            } else if(el_flag === '.') {
                el = el.slice(1);
                el = document.getElementsByClassName(el);
                for(var i = 0; i < el.length; i++) {
                    this.element.push(el[i]);
                }
            }
            return this;
        },

        each: function(el, callback) {
            // for(var i = 0; i < el.length; i ++) {
            //     callback(el[i]);
            // }
        },
        click: function(callback) {
            var el = this.element;
            for(var i = 0; i< this.element.length; i ++) {
                console.log(this.element[i]);
                this.element[i].addEventListener('click', callback, false);
            }
        },
        add: function() {
            console.log('add test');
        }
    };
    jk.prototype.init.prototype = jk.prototype;

    window.$ = window.jk = jk;
})();

