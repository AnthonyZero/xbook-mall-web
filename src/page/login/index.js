
console.log("i love you")
require('./index.css');
require('page/common/header/index');
require('page/common/nav/index');
var navSide = require('page/common/nav-side/index');
navSide.init({
    name : 'user-center' //选择哪个子项
});

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