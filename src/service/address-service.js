
var _mall = require('util/mall.js');

var _address = {
    // 加载地址列表
    getAddressList : function(addressInfo, resolve, reject){
        _mall.request({
            url     : _mall.getServerUrl('/shipping/list'),
            data    : addressInfo,
            success : resolve,
            error   : reject
        });
    },
    // 保存地址信息
    saveAddress : function(addressInfo, resolve, reject){
        _mall.request({
            url     : _mall.getServerUrl('/shipping/add'),
            data    : addressInfo,
            success : resolve,
            error   : reject
        });
    },
    // 更新地址
    updateAddress : function(addressInfo, resolve, reject){
        _mall.request({
            url     : _mall.getServerUrl('/shipping/update'),
            data    : addressInfo,
            success : resolve,
            error   : reject
        });
    },
    // 删除地址
    delectAddress : function(addressInfo, resolve, reject){
        _mall.request({
            url     : _mall.getServerUrl('/shipping/del'),
            data    : addressInfo,
            success : resolve,
            error   : reject
        });
    },
    // 加载地址模板后回填地址
    selectAddress : function(addressInfo, resolve, reject){
        _mall.request({
            url     : _mall.getServerUrl('/shipping/select'),
            data    : {
                shippingId :addressInfo
            },
            success : resolve,
            error   : reject
        });
    },


};
module.exports = _address;