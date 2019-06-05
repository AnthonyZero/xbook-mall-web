require('./index.css');
require('page/common/nav/index.js');
require('page/common/header/index.js');
var _mall 			 = require ('util/mall.js');
var navSide 		 = require('page/common/nav-side/index.js');
var _order           = require('service/order-service.js');
var templateIndex    = require('./index.string');
// page 逻辑部分
var page = {
    //页面初始化
    init : function(){
        this.onload();
        this.bindEvent();
    },
    //加载页面
    onload : function(){
        var _this = this,
            orderNo = _mall.getUrlParam('orderNo');
        navSide.init({
            name : 'order-list'
        });
        _order.getOrderDetail({
            orderNo : orderNo
        },function(res){
            _this.dataFilter(res);
            var orderDetailHtml = _mall.renderHtml(templateIndex, res);
            $('.content').html(orderDetailHtml);
        },function(errMsg){
            _mall.errorTips(errMsg);
        });
    },
    // 数据过滤
    dataFilter : function(data){
        data.needPay = data.status == 10; //10 未支付
        data.isCancelable = data.status == 10;
    },
    // 绑定数据
    bindEvent : function(){
        var _this = this;
        $(document).on('click','.order-cancel',function(){
            var orderNo = $(this).parents('.order-info').find('.orderNo').text();
            if(window.confirm('你确定要取消订单？')){
                _order.cacelOrder({
                    orderNo : orderNo
                },function(){
                    _mall.successTips('取消订单成功！');
                    _this.onload();
                },function(){
                    _mall.errorTips('errMsg');
                });
            }
        });
    }
};
$(function(){
    page.init();
});