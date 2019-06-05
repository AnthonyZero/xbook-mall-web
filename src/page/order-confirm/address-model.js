
var _mall                    = require('util/mall.js');
var addressModelTemplate     = require('./address-model.string');
var _city			         = require('util/cities/city.js');
var _address                 = require('service/address-service.js');
var addressModel = {
    option : {

    },
    //显示地址弹窗
    show : function(option){
        var _this = this;
        // 缓存数据
        this.option = option;
        //保证添加新地址时data有值，正常渲染
        this.option.data = option.data || {};
        // 加载渲染地址模板
        this.loadAddressModel();
        // 绑定事件
        this.bindEvent();
    },
    //加载渲染地址模块
    loadAddressModel:function(){
        var _this = this;
        this.$modelWrap  = $('.model-wrap');
        addressModelHtml = _mall.renderHtml(addressModelTemplate,{
            isUpdate : this.option.isUpdate, //更新还是新增
            data 	 : this.option.data  // 编辑的时候有值
        });
        this.$modelWrap.html(addressModelHtml);
        this.loadProvince();
    },
    // 加载省份信息
    loadProvince:function(){
        var pronvice 	 = _city.getProvinces() || '',
            provinceHtml = this.getHtml(pronvice),
            $receiverProvince = this.$modelWrap.find('#receiverProvince');
        this.$modelWrap.find('#receiverProvince').html(provinceHtml);
        if(this.option.isUpdate && this.option.data.receiverProvince){ //更新切原先省份有值
            $receiverProvince.val(this.option.data.receiverProvince);  //赋值select的选中option
            this.loadCity(this.option.data.receiverProvince);
        }
    },
    // 加载城市信息
    loadCity:function(provinceName){
        var citises  		= _city.getCities(provinceName) || '',
            cityHtml		= this.getHtml(citises),
            $receivercity 	= this.$modelWrap.find('#receiverCity');
        this.$modelWrap.find('#receiverCity').html(cityHtml);
        if(this.option.isUpdate && this.option.data.receiverCity){
            this.$modelWrap.find('#receiverProvince').val() === this.option.data.receiverProvince ?
                $receivercity.val(this.option.data.receiverCity) : null;
        }
    },
    // 获取省份/城市 select option html代码
    getHtml:function(optionArray){
        var html = "<option value='请选择'>请选择</option>";
        for(var i=0,_length=optionArray.length;i<_length;i++){
            html += "<option value=" + optionArray[i] + ">" + optionArray[i] + " </option>";
        }
        return html;
    },
    // 关闭地址弹窗
    hide : function(){
        this.$modelWrap.empty();
    },
    // 绑定事件
    bindEvent : function(){
        var _this = this;
        // 选取省份地址 获取城市列表
        // $('.model-wrap').on('change','#receiverProvince',function(){
        this.$modelWrap.find('#receiverProvince').change(function(){ //省份变化 事件
            var $this       = $(this);
            this.selectProvince = $this.val();
            _this.loadCity(this.selectProvince);
        });
        // 保存收货地址
        this.$modelWrap.find('.model-btn').click(function(){
            var addressInfo		= _this.getModelInfo(), //data 和 status
                isUpdate        = _this.option.isUpdate;
            if(!isUpdate && addressInfo.status){
                _address.saveAddress(addressInfo.data,function(res){
                    _mall.successTips('添加地址成功!');
                    _this.hide();
                    typeof _this.option.onSuccess === 'function' && _this.option.onSuccess(); //回调index.js的onSuccess 方法
                },function(errMsg){
                    _mall.errorTips(errMsg);
                });
            }
            else if(isUpdate && addressInfo.status){
                addressInfo.data.id = _this.option.data.id;
                _address.updateAddress(addressInfo.data,function(res){
                    _mall.successTips('更新地址成功!');
                    _this.hide();
                    typeof _this.option.onSuccess === 'function' && _this.option.onSuccess();
                },function(errMsg){
                    _mall.errorTips(errMsg);
                });
            }
            else{
                _mall.errorTips(addressInfo.errMsg);
            }
        });
        //点击close或弹窗外部关闭地址模块弹窗
        this.$modelWrap.on('click', '.close', function(){
            _this.hide();
        });
        //避免点击也弹窗内部关闭地址模块弹窗
        this.$modelWrap.on('click', '.model-con', function(e){
            e.stopPropagation();
        });
    },
    // 获取地址模块填入数据
    getModelInfo : function(){
        var result = {
            status  : false,
            data 	: {}
        };
        result.data.receiverName 		= $.trim(this.$modelWrap.find('.receiverName').val());
        result.data.receiverProvince 	= this.$modelWrap.find('#receiverProvince').val();
        result.data.receiverCity 		= this.$modelWrap.find('#receiverCity').val();
        result.data.receiverAddress		= $.trim(this.$modelWrap.find('#receiverAddress').val());
        result.data.receiverPhone       = $.trim(this.$modelWrap.find('#receiverPhone').val());
        result.data.receiverMobile 		= $.trim(this.$modelWrap.find('#receiverPhone').val());
        result.data.receiverZip 		= $.trim(this.$modelWrap.find('#receiverZip').val());
        if(!result.data.receiverName){
            result.errMsg = '请先输入收件人姓名';
        }
        else if(!result.data.receiverProvince){
            result.errMsg = '请先输入收件人所在省份';
        }
        else if(!result.data.receiverCity){
            result.errMsg = '请先输入收件人所在城市';
        }
        else if(!result.data.receiverAddress){
            result.errMsg = '请先输入收件人详细地址';
        }
        else if(!result.data.receiverPhone){
            result.errMsg = '请先输入收件人手机';
        }
        else{
            result.status = true;
        }
        return result;
    }
};
module.exports = addressModel;