/**
 * 用户模块
 */
var _mall = require('util/mall.js');

var _user = {
    // 用户登录
    login : function(userInfo, resolve, reject){
        _mall.request({
            url     : _mall.getServerUrl('/user/login'),
            data    : userInfo,
            method  : 'POST',
            success : resolve,
            error   : reject
        });
    },
    // 检查用户名
    checkUsername : function(username, resolve, reject){
        _mall.request({
            url     : _mall.getServerUrl('/user/checkValid'),
            data    : {
                type    : 'username',
                str     : username
            },
            method  : 'POST',
            success : resolve,
            error   : reject
        });
    },
    // 用户注册
    register : function(userInfo, resolve, reject){
        _mall.request({
            url     : _mall.getServerUrl('/user/register'),
            data    : userInfo,
            method  : 'POST',
            success : resolve,
            error   : reject
        });
    },
    // 检查登录状态
    checkLogin : function(resolve, reject){
        _mall.request({
            url     : _mall.getServerUrl('/user/getUserInfo'),
            method  : 'POST',
            success : resolve,
            error   : reject
        });
    },
    // 获取用户密码提示问题
    getQuestion : function(username, resolve, reject){
        _mall.request({
            url     : _mall.getServerUrl('/user/forgetGetQuestion'),
            data    : {
                username : username
            },
            method  : 'POST',
            success : resolve,
            error   : reject
        });
    },
    // 检查密码提示问题答案
    checkAnswer : function(userInfo, resolve, reject){
        _mall.request({
            url     : _mall.getServerUrl('/user/forgetCheckAnswer'),
            data    : userInfo,
            method  : 'POST',
            success : resolve,
            error   : reject
        });
    },
    // 重置密码
    resetPassword : function(userInfo, resolve, reject){
        _mall.request({
            url     : _mall.getServerUrl('/user/forgetResetPassword'),
            data    : userInfo,
            method  : 'POST',
            success : resolve,
            error   : reject
        });
    },
    // 获取用户信息
    getUserInfo : function(resolve, reject){
        _mall.request({
            url     : _mall.getServerUrl('/user/getInformation'),
            method  : 'POST',
            success : resolve,
            error   : reject
        });
    },
    // 更新个人信息
    updateUserInfo : function(userInfo, resolve, reject){
        _mall.request({
            url     : _mall.getServerUrl('/user/updateInformation'),
            data    : userInfo,
            method  : 'POST',
            success : resolve,
            error   : reject
        });
    },
    // 登录状态下更新密码
    updatePassword : function(userInfo, resolve, reject){
        _mall.request({
            url     : _mall.getServerUrl('/user/resetPassword'),
            data    : userInfo,
            method  : 'POST',
            success : resolve,
            error   : reject
        });
    },
    // 登出
    logout : function(resolve, reject){
        _mall.request({
            url     : _mall.getServerUrl('/user/logout'),
            method  : 'POST',
            success : resolve,
            error   : reject
        });
    }
};
module.exports = _user;