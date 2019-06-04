
require('./index.css');
var _mall     = require('util/mall.js');
var _user   = require('service/user-service.js');
var _cart   = require('service/cart-service.js');
// 导航
var nav = {
    //初始化
    init : function(){
        this.loadUserInfo();
        this.loadCartCount();
        this.bindEvent();
        return this;
    },
    //绑定事件
    bindEvent : function(){
        // 登录点击事件
        $('.js-login').click(function(){
            _mall.doLogin();
        });
        // 注册点击事件
        $('.js-register').click(function(){
            window.location.href = './user-register.html';
        });
        // 退出点击事件
        $('.js-logout').click(function(){
            _user.logout(function(res){
                window.location.reload();
            }, function(errMsg){
                _mall.errorTips(errMsg);
            });
        });
    },
    // 加载用户信息
    loadUserInfo : function(){
        _user.checkLogin(function(res){
            $('.user.not-login').hide().siblings('.user.login').show().find('.username').text(res.username);
        }, function(errMsg){
            console.log('checkLogin:'+errMsg);
        });
    },
    // 加载购物车数量
    loadCartCount : function(){
        _cart.getCartCount(function(res){
            $('.nav .cart-count').text(res || 0);
        }, function(errMsg){
            $('.nav .cart-count').text(0);
            console.log('getCartCount:'+errMsg);
        });
    }
};

module.exports = nav.init();