
var _mall = require('util/mall.js');

var payment = {
    // 获取支付二维码
    getPrCode : function(orderNo,resolve, reject){
        _mall.request({
            url     : _mall.getServerUrl('/paymeny/pay'),
            data 	: orderNo,
            success : resolve,
            error   : reject
        });
    },
    // 监听支付状态
    queryPayStatus : function(orderNo,resolve, reject){
        _mall.request({
            url     : _mall.getServerUrl('/payment/queryOrderPayStatus'),
            data 	: orderNo,
            success : resolve,
            error   : reject
        });
    },
};
module.exports = payment;