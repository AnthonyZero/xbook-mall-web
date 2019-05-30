

var _mall = require('util/mall.js');

var product = {
    // 加载商品列表
    getProductList : function(listInfo, resolve, reject){
        _mall.request({
            url     : _mall.getServerUrl('/product/list.do'),
            data    : listInfo,
            success : resolve,
            error   : reject
        });
    },
    // 加载商品详情的数据
    getProductDetail: function(detailInfo, resolve, reject){
        _mall.request({
            url     : _mall.getServerUrl('/product/detail.do'),
            data    : detailInfo,
            success : resolve,
            error   : reject
        });
    }


};
module.exports = product;