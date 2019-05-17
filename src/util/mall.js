//通用工具

var _mall = {

    // 网络请求
    request : function(param) {
        var _this = this;
        $.ajax({
            type: param.method || 'get',
            url: param.url || '',
            dataType: param.type || 'json',
            data: param.data || '',
            success: function (res) {
                //登陆成功
                if (0 === res.status) {
                    //回掉
                    typeof param.success === 'function' && param.success(res.data, res.msg);
                }
                //无登陆状态需请求登陆
                else if (10 === res.status) {
                    _this.doLogin();
                }
                // 请求数据错误
                else if (1 === res.status) {
                    typeof param.error === 'function' && param.error(res.msg);
                }
            },
            error: function (err) {
                typeof param.error === 'function' && param.error(err.statusText);
            }
        });
    },

    // 统一请求处理
    doLogin :function() {
        window.location.href = './user-login.html?redirect=' + encodeURIComponent(window.location.href);
    },
}

module.exports = _mall;