
require('./index.css');
require('page/common/nav-simple/index');

var _mall     = require ('util/mall.js');
var _user   = require('service/user-service.js');

// 表单里的错误提示
var formError = {
    show : function(errMsg){
        $('.err-item').show().find('.err-msg').text(errMsg);
    },
    hide : function(){
        $('.err-item').hide().find('.err-msg').text('');
    }
};
// page 逻辑部分
var page = {
    // 初始化页面
    init : function(){
        this.bindEvent();
    },
    // 绑定事件
    bindEvent : function(){
        var _this = this;
        //异步验证用户名是否存在
        $('#username').blur(function(){
            var username = $.trim($(this).val());
            //用户名为空时无需验证
            if(!username){
                return;
            }
            _user.checkUsername(username,
                function(){
                    formError.hide();
                },
                function(errMsg){
                    formError.show(errMsg);
                });
        });
        $('#submit').click(function(){
            _this.submit();
        });
        // 回车键触发提交
        $('.user-content').keyup(function(e){
            if(e.keyCode === 13){
                _this.submit();
            }
        });
    },
    // 提交按钮事件
    submit : function(){
        //表单数据
        var formData = {
            username         : $.trim($('#username').val()),
            password         : $.trim($('#password').val()),
            passwordConfirm  : $.trim($('#passwordConfirm').val()),
            phone            : $.trim($('#phone').val()),
            email 			 : $.trim($('#email').val()),
            question 		 : $.trim($('#question').val()),
            answer   		 : $.trim($('#answer').val())
        };
        if(!_mall.validate(formData.username , 'require')){
            formError.show("用户名不能为空");
            return ;
        }
        else if(!_mall.validate(formData.password, 'require')){
            formError.show("密码不能为空");
            return;
        }
        else if(formData.password.length < 6){
            formError.show("密码不能小于六位");
            return;
        }
        else if(formData.passwordConfirm !== formData.password){
            formError.show("输入密码不一致");
            return;
        }
        else if(!_mall.validate(formData.phone, 'phone')){
            formError.show("号码格式不正确");
            return;
        }
        else if(!_mall.validate(formData.email, 'email')){
            formError.show("邮箱格式不正确");
            return;
        }
        else if(!_mall.validate(formData.question, 'require')){
            formError.show("密码提示问题不能为空");
            return;
        }
        else if(!_mall.validate(formData.answer, 'require')){
            formError.show("密码提示答案不能为空");
            return;
        }
        else{
            _user.register(formData, function(res){
                console.log(res);
                window.location.href = 'result.html?type=register';
            }, function(errMsg){
                formError.show(errMsg);
            });
        }
    }
};
$(function(){
    page.init();
});