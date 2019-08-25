

var _mall = require('util/mall.js');

var order = {
    // 加载商品列表
    getOrderProduct : function( resolve, reject){
        _mall.request({
            url             : _mall.getServerUrl('/order/getOrderCartProduct'),
            success         : resolve,
            error           : reject
        });
    },
    // 加载商品列表
    creatOrder : function( shippingId,resolve, reject){
        _mall.request({
            url             : _mall.getServerUrl('/order/create'),
            data            : shippingId,
            success         : resolve,
            error           : reject
        });
    },
    // 加载订单列表
    getOrderList : function( OrderListInfo,resolve, reject){
        _mall.request({
            url             : _mall.getServerUrl('/order/list'),
            data            : OrderListInfo,
            success         : resolve,
            error           : reject
        });
    },
    // 加载订单详情
    getOrderDetail : function( OrderDetailInfo,resolve, reject){
        _mall.request({
            url             : _mall.getServerUrl('/order/detail'),
            data            : OrderDetailInfo,
            success         : resolve,
            error           : reject
        });
    },
    // 取消订单
    cacelOrder : function( orderNo,resolve, reject){
        _mall.request({
            url    		    : _mall.getServerUrl('/order/cancel'),
            data            : orderNo,
            success 	    : resolve,
            error   	    : reject
        });
    },


};
module.exports = order;