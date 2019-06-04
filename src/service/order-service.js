

var _mall = require('util/mall.js');

var order = {
    // 加载商品列表
    getOrderProduct : function( resolve, reject){
        _mall.request({
            url             : _mall.getServerUrl('/order/get_order_cart_product.do'),
            success         : resolve,
            error           : reject
        });
    },
    // 加载商品列表
    creatOrder : function( shippingId,resolve, reject){
        _mall.request({
            url             : _mall.getServerUrl('/order/create.do'),
            data            : shippingId,
            success         : resolve,
            error           : reject
        });
    },
    // 加载订单列表
    getOrderList : function( OrderListInfo,resolve, reject){
        _mall.request({
            url             : _mall.getServerUrl('/order/list.do'),
            data            : OrderListInfo,
            success         : resolve,
            error           : reject
        });
    },
    // 加载订单详情
    getOrderDetail : function( OrderDetailInfo,resolve, reject){
        _mall.request({
            url             : _mall.getServerUrl('/order/detail.do'),
            data            : OrderDetailInfo,
            success         : resolve,
            error           : reject
        });
    },
    // 取消订单
    cacelOrder : function( orderNo,resolve, reject){
        _mall.request({
            url    		    : _mall.getServerUrl('/order/cancel.do'),
            data            : orderNo,
            success 	    : resolve,
            error   	    : reject
        });
    },


};
module.exports = order;