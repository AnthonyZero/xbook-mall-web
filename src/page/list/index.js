
require('./index.css');
require('page/common/nav/index.js');
require('page/common/header/index.js');
var _mall           = require('util/mall.js');
var _product        = require('service/product-service.js');
var templateIndex   = require('./index.string');
var Pagination      = require('util/pagination/index.js');
var page = {
    //初始化数据
    data : {
        listParam : {
            keyword         : _mall.getUrlParam('keyword')    || '',
            categoryId      : _mall.getUrlParam('categoryId') || '',
            orderBy         : _mall.getUrlParam('orderBy')    || 'default',
            pageNum         : _mall.getUrlParam('pageNum')    || 1,
            pageSize        : _mall.getUrlParam('pageSize')   || 20
        }
    },
    // 初始化页面
    init : function(){
        this.onLoad();
        this.bindEvent();
    },
    //加载页面
    onLoad : function(){
        this.loadList();
    },
    //绑定事件
    bindEvent : function(){

    },
    // 加载list数据
    loadList : function() {
        var _this       = this,
            listHtml    = '',
            listParam   = this.data.listParam,
            $pListCon   = $('.p-list-con');
        $pListCon.html('<div class="loading"></div>');
        // 删除参数中不必要的字段
        listParam.categoryId
            ? (delete listParam.keyword) : (delete listParam.categoryId);
        // 请求接口
        _product.getProductList(listParam, function(res){
            listHtml = _mall.renderHtml(templateIndex, {
                list :  res.list
            });
            $pListCon.html(listHtml);
            _this.loadPagination({
                hasPreviousPage : res.hasPreviousPage,
                prePage         : res.prePage,
                hasNextPage     : res.hasNextPage,
                nextPage        : res.nextPage,
                pageNum         : res.pageNum,
                pages           : res.pages
            });
        }, function(errMsg){
            _mall.errorTips(errMsg);
        });
    },
    // 加载分页信息
    loadPagination : function(pageInfo){
        var _this = this;
        this.pagination ? '' : (this.pagination = new Pagination());
        this.pagination.render($.extend({}, pageInfo, {
            container : $('.pagination'),
            onSelectPage : function(pageNum){
                _this.data.listParam.pageNum = pageNum;
                _this.loadList();
            }
        }));
    }
};

$(function(){
    page.init();
});