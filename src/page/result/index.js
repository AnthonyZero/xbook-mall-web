
require('./index.css');
require('page/common/nav-simple/index.js');
var _mall = require ('util/mall.js');
$(function(){
    //获取要显示的类型
    var type 	= _mall.getUrlParam('type') || 'defualt',
        orderNo = _mall.getUrlParam('orderNo');
    $element = $('.' + type + '-success');
    /*// 当为支付结果页面时将订单号添加到href后面
    if(type === 'payment'){
        var $order = $element.find('.order');
        $order.attr('href',$order.attr('href') + orderNo);
    }*/
    // 显示对应的div提示元素
    $element.show();
});