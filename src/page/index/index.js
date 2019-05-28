
require('./index.css');
require('page/common/header/index');
require('page/common/nav/index');
var navSide = require('page/common/nav-side/index');
navSide.init({
    name : 'user-center' //选择哪个子项
});

var _mall = require('util/mall');
