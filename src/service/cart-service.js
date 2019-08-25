
var _mall = require('util/mall.js');

var _cart = {
    // 获取购物车数量
    getCartCount : function(resolve, reject){
        _mall.request({
            url     : _mall.getServerUrl('/cart/getCartProductCount'),
            success : resolve,
            error   : reject
        });
    },
    // 添加到购物车
    addToCart : function(productInfo, resolve, reject){
        _mall.request({
            url     : _mall.getServerUrl('/cart/add'),
            data    : productInfo,
            success : resolve,
            error   : reject
        });
    },
    // 获取购物车列表
    getCartList : function(resolve, reject){
        _mall.request({
            url     : _mall.getServerUrl('/cart/list'),
            success : resolve,
            error   : reject
        });
    },
    // 选择购物车商品
    selectProduct : function(productId, resolve, reject){
        _mall.request({
            url     : _mall.getServerUrl('/cart/select'),
            data    : {
                productId : productId
            },
            success : resolve,
            error   : reject
        });
    },
    // 取消选择购物车商品
    unselectProduct : function(productId, resolve, reject){
        _mall.request({
            url     : _mall.getServerUrl('/cart/unSelect'),
            data    : {
                productId : productId
            },
            success : resolve,
            error   : reject
        });
    },
    // 选中全部商品
    selectAllProduct : function(resolve, reject){
        _mall.request({
            url     : _mall.getServerUrl('/cart/selectAll'),
            success : resolve,
            error   : reject
        });
    },
    // 取消选中全部商品
    unselectAllProduct : function(resolve, reject){
        _mall.request({
            url     : _mall.getServerUrl('/cart/unSelectAll'),
            success : resolve,
            error   : reject
        });
    },
    // 更新购物车商品数量
    updateProduct : function(productInfo, resolve, reject){
        _mall.request({
            url     : _mall.getServerUrl('/cart/update'),
            data    : productInfo,
            success : resolve,
            error   : reject
        });
    },
    // 删除指定商品
    deleteProduct : function(productIds, resolve, reject){
        _mall.request({
            url     : _mall.getServerUrl('/cart/deleteProduct'),
            data    : {
                productIds : productIds
            },
            success : resolve,
            error   : reject
        });
    },
}
module.exports = _cart;