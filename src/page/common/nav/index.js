
require('./index.css');
var _mall     = require('util/mall.js');
// 导航
var nav = {
    //初始化
    init : function(){
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
};

module.exports = nav.init();