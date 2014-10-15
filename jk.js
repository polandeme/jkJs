(function() {
    var jk = function(el) {
        return  new jk.prototype.init(el);
    };
    /* 
     * To Do
     * 一些jk内部使用的方法待完善，参考jq extend
     * 2014/10/13 22:10:21
     */
       
      
    jk.prototype = {
        element: [],
        init: function(el) {
            //el_flag: 判断是id,class,tag 
            if(!el) {
                console.log('ths');
                return this;
            }
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

        click: function(callback) {
            var el = this.element;
            for(var i = 0; i< this.element.length; i ++) {
                // console.log(this.element[i]);
                this.element[i].addEventListener('click', callback, false);
            }
        },
        mover: function(callback) {
            var el = this.element;
            this.each(el, callback, 'mouseover');
            return this;
        },
        mout: function(callback) {
            var el = this.element; 
            this.each(el, callback, 'mouseout');
            return this;
        },
        hover: function(c, d) {
            var el = this.element;
            return this.mover(c).mout(d);//.each(el, d, 'mouseover');
        },
        // el: elements Array, e: event
        each: function(el, callback, e) {
            for(var i = 0; i<this.element.length; i ++) {
                this.element[i].addEventListener(e, callback, false);
            }
        },
        // addEvent: function() {

        // },
        html: function(html) {
            var self = this;
            function get_html() {
                var html = '';
                var html_tmp = '';
                for(var i = 0; i < self.element.length; i++) {
                    html_tmp += self.element[i].innerHTML;//.nodeValue;
                    if(html_tmp === 'undefined'){
                        html_tmp = '';
                    }
                    html += html_tmp;
                    html_tmp = '';
                }
                return html;
            }
            function change_html(html) {
                for(var i = 0; i < self.element.length; i++) {
                    self.element[i].innerHTML = html;//.nodeValue;
                }
            }
            html ? change_html(html) : get_html();
        },
        text: function(text) {
            var self = this;
            // 得到text
            var change_text = function (text) {
                for(var i = 0; i < self.element.length; i++) {
                    self.element[i].firstChild.nodeValue = text;
                    }
                    return;
                }
            // 改变text 
            // todo: 多层？
            var get_text = function () {
                console.log('ddddd');
                var text = '';
                var text_tmp = '';
                for(var i = 0; i < self.element.length; i++) {
                    text_tmp += self.element[i].firstChild.nodeValue;
                    if(text_tmp === 'undefined') {
                        text_tmp = ''
                    }
                    text += text_tmp;
                    text_tmp = '';
                }
                return text;
            }
            text ? change_text(text) : get_text();
        },
        // dom_each: function() {
        //     // for(var i = 0; i < this.element.length; i++) {
        //     //     this.element[i].dom
        //     // }
        // },
        css: function(obj) {
            var el = this.element;
            var obj_length = Object.getOwnPropertyNames(obj).length;
            var attr = this.o2a(obj);
            // To Do 循环嵌套，效率，封装循环
            for(key in obj) {
                for(var i = 0; i < el.length; i++) {
                    el[i].style[key]  = obj[key];
                }
            }
            return this;
        },
        add: function() {
            console.log('add test');
        },
        o2a: function(o) {
             var a = [];
             for(var key in o) {
                a.push({key: o[key]});
             }
             return a;
        },
        // 显示效果
        toggle: function() {

        },
        // 得到特定css值
        get_style: function() {

        }

    };
    jk.prototype.init.prototype = jk.prototype;

    window.$ = window.jk = jk;
})();

