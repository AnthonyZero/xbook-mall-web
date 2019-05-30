
require('./index.css');
var _mall = require('util/mall.js');
require('page/common/nav/index.js');
require('page/common/header/index.js');
require('util/slider/index.js');
var htmltemplate = require('./banner.string');
$(function() {
    // 渲染banner的html
    var bannerHtml = _mall.renderHtml(htmltemplate);
    $(".banner-con").html(bannerHtml);
    // 初始化banner
    var $slider = $('.banner').unslider({
        speed: 500, //  The speed to animate each slide (in milliseconds)
        delay: 3000, //  The delay between slide animations (in milliseconds)
        complete: function() {}, //  A function that gets called after every slide animation
        keys: true, //  Enable keyboard (left, right) arrow shortcuts
        dots: true, //  Display dot navigation
        fluid: false //  Support responsive design. May break non-responsive designs
    });
    // 前一张和后一张操作的事件绑定
    $('.banner-con .banner-arrow').click(function() {
        // var fn = this.className.split(' ')[1];
        var forward = $(this).hasClass('prev') ? 'prev' : 'next';
        $slider.data('unslider')[forward]();
    });
});
