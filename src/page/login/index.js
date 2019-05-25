
console.log("i love you")
require('./index.css');
require('page/common/nav-simple/index')
var _mall = require('util/mall');
_mall.request({
    url : 'http://test.happymmall.com/product/list.do?keyword=p',
    success: function (res, msg) {
        console.log("成功")
        console.log(res, msg);
    },
    error: function (msg) {
        console.log(msg);
    }
})