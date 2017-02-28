/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	var parentJsonpFunction = window["webpackJsonp"];
/******/ 	window["webpackJsonp"] = function webpackJsonpCallback(chunkIds, moreModules, executeModules) {
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [], result;
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(installedChunks[chunkId])
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(chunkIds, moreModules, executeModules);
/******/ 		while(resolves.length)
/******/ 			resolves.shift()();

/******/ 	};

/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// objects to store loaded and loading chunks
/******/ 	var installedChunks = {
/******/ 		1: 0
/******/ 	};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.l = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}

/******/ 	// This file contains only the entry chunk.
/******/ 	// The chunk loading function for additional chunks
/******/ 	__webpack_require__.e = function requireEnsure(chunkId) {
/******/ 		if(installedChunks[chunkId] === 0)
/******/ 			return Promise.resolve();

/******/ 		// an Promise means "currently loading".
/******/ 		if(installedChunks[chunkId]) {
/******/ 			return installedChunks[chunkId][2];
/******/ 		}
/******/ 		// start chunk loading
/******/ 		var head = document.getElementsByTagName('head')[0];
/******/ 		var script = document.createElement('script');
/******/ 		script.type = 'text/javascript';
/******/ 		script.charset = 'utf-8';
/******/ 		script.async = true;
/******/ 		script.timeout = 120000;

/******/ 		if (__webpack_require__.nc) {
/******/ 			script.setAttribute("nonce", __webpack_require__.nc);
/******/ 		}
/******/ 		script.src = __webpack_require__.p + "chunks/" + ({}[chunkId]||chunkId) + ".chunk" + {"0":"6a0b9c82"}[chunkId] + ".js";
/******/ 		var timeout = setTimeout(onScriptComplete, 120000);
/******/ 		script.onerror = script.onload = onScriptComplete;
/******/ 		function onScriptComplete() {
/******/ 			// avoid mem leaks in IE.
/******/ 			script.onerror = script.onload = null;
/******/ 			clearTimeout(timeout);
/******/ 			var chunk = installedChunks[chunkId];
/******/ 			if(chunk !== 0) {
/******/ 				if(chunk) chunk[1](new Error('Loading chunk ' + chunkId + ' failed.'));
/******/ 				installedChunks[chunkId] = undefined;
/******/ 			}
/******/ 		};

/******/ 		var promise = new Promise(function(resolve, reject) {
/******/ 			installedChunks[chunkId] = [resolve, reject];
/******/ 		});
/******/ 		installedChunks[chunkId][2] = promise;

/******/ 		head.appendChild(script);
/******/ 		return promise;
/******/ 	};

/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };

/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};

/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};

/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "build/dev/";

/******/ 	// on error function for async loading
/******/ 	__webpack_require__.oe = function(err) { console.error(err); throw err; };

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = jQuery;

/***/ }),
/* 1 */,
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function($, jQuery) {

__webpack_require__.e/* import() */(0).then(__webpack_require__.bind(null, 1)); // The page is now styled

function dispatch() {
  var url = void 0;
  var searchbox = $('#searchbox');
  var searchval = searchbox.val();
  if (searchval !== '') {
    url = 'http://www.google.com/search?q=site:qcyoung.com/%20' + searchval;
    if (navigator.userAgent.indexOf('iPad') > -1 || navigator.userAgent.indexOf('iPhone') > -1) {
      location.href = url;
    } else {
      window.open(url, '_blank');
    }
  }
  return false;
}

$(function () {
  /**
   * plugins list
   * @type {
   *   jquery:[nicescroll,slidebars,animsition,Bootstrap Auto-Hiding Navbar,pace]
   * }
   */
  var windowHeight = $(window).height();
  var windowWidth = $(window).width();
  var imgWidth = windowWidth * 0.8;
  var imgHeight = windowHeight * 0.8;
  var footerHeight = $('footer').outerHeight();
  var documentHeight = $(document).height();
  var egglayer = void 0; // 彩蛋框
  var imgZoom = void 0; // 图片层
  var gPushed = false; // keydown 状态
  var mobileWidth = 768;
  var miniDeviceWidth = 1024;
  var keyValue = {
    '/?': 191,
    'g': 71,
    'a': 65,
    'c': 67,
    't': 84,
    's': 83
  };

  var consoleInfo = {
    info: '%c卧槽，你居然敢点开控制台看我的代码，这下我的屎代码无所遁形了 T _ T',
    logo: '         _.-.  \n' + '       ,\'/ //\\ \n' + '      /// // /)\n' + '     /// // //|\n' + '    /// // /// \n' + '   /// // ///  \n' + '  (`: // ///   \n' + '   `;`: ///    \n' + '   / /  `\'      \n' + '  / /\n' + ' (_/  \n'
  };
  window.console && console.info && console.info(consoleInfo.logo);console.info(consoleInfo.info, 'color:#03a9f4');

  // tooltip初始化
  $('[data-toggle="tooltip"]').tooltip();

  document.onkeydown = function (e) {
    if (!($(':focus').prop('tagName') === 'INPUT') && !($(':focus').prop('tagName') === 'TEXTAREA')) {
      e = e || window.event;
      if (e.keyCode === keyValue['/?'] && e.shiftKey) {
        if ($('.layui-layer-shade').length > 0) {
          return false;
        } else {
          eggFun();
        }
        gPushed = false;
      } else if (e.keyCode === keyValue['g']) {
        gPushed = true;
      } else if (e.keyCode === keyValue['a']) {
        if (gPushed) {
          location.href = '/archives';
        }
        gPushed = false;
      } else if (e.keyCode === keyValue['c']) {
        if (gPushed) {
          location.href = '/categories';
        }
        gPushed = false;
      } else if (e.keyCode === keyValue['t']) {
        if (gPushed) {
          location.href = '/tags';
        }
        gPushed = false;
      } else if (e.keyCode === keyValue['s']) {
        if (gPushed) {
          $('#searchbox').focus();
          $('#searchbox').val('');
        }
        gPushed = false;
        return false;
      } else {
        gPushed = false;
      }
    }
  };

  $('.welcome').on('click', function (event) {
    eggFun();
  });
  $(document).delegate('.egg-close', 'click', function () {
    layer.close(egglayer);
  });

  navRender();
  lazyLoadImg();

  if (windowWidth > mobileWidth && $('.index-context').length) {
    var bgImg = new Image();
    bgImg.onload = function () {
      var wallPaper = 'url(' + bgImg.src + ')';
      $('.element-img').css('background-image', wallPaper);
      $('body').animate({ 'opacity': 1 }, 500);
    };
    bgImg.onerror = function () {
      $('body').animate({ 'opacity': 1 }, 500);
    };
    bgImg.src = 'http://qcyoung.qiniudn.com/qcyoung/TKL/wall-' + Math.ceil(Math.random() * 557) + '.jpg';
    // bgImg.src = 'https://ww2.sinaimg.cn/large/006tNbRwly1fd6izqbqtmj31hc0zfqe0.jpg';
  } else {
    $('body').animate({ 'opacity': 1 }, 500);
  }

  $('.navbar-toggle').on('click', function () {
    var sideImgs = $('.sb-slidebar').find('img');
    if (sideImgs[0].src) {
      return false;
    }
    sideImgs.each(function (index, el) {
      $(el).attr('src', $(el).attr('data-src'));
    });
  });

  $('.post-article').delegate('.img_replaced', 'click', function (event) {
    var imgSrc = $(event.target).attr('data-src');
    imgZoom = layer.open({
      type: 1,
      title: false,
      // skin: 'layui-layer-demo', // 样式类名
      closeBtn: false, // 不显示关闭按钮
      shadeClose: true, // 开启遮罩关闭
      area: [windowWidth, windowHeight],
      content: '<img class="img-zoom" src="' + imgSrc + '" width="' + imgWidth + '" height="' + imgHeight + '"/>'
    });
  });

  $(document).delegate('.img-zoom', 'click', function () {
    layer.close(imgZoom);
  });

  // 微信Window
  $('#navigation .weixin,.social .weixin').on('click', function () {
    layer.open({
      type: 1,
      title: false,
      skin: 'layui-layer-demo', // 样式类名
      closeBtn: false, // 不显示关闭按钮
      shift: 2,
      shadeClose: true, // 开启遮罩关闭
      area: [windowWidth, windowHeight],
      content: '<img src="http://qcyoung.qiniudn.com/qcyoung/yangzj1992QRcode.jpg" width="200px" height="200px"/>'
    });
  });

  // 微信Window
  $('.reward').on('click', function () {
    layer.open({
      type: 1,
      title: false,
      skin: 'layui-layer-demo', // 样式类名
      closeBtn: false, // 不显示关闭按钮
      shift: 2,
      shadeClose: true, // 开启遮罩关闭
      area: [windowWidth, windowHeight],
      content: '<img src="http://qcyoung.qiniudn.com/qcyoung/wxpay.jpg" width="200px" height="200px"/><img src="http://qcyoung.qiniudn.com/qcyoung/alipay.jpg" width="200px" height="200px"/>'
    });
  });

  var scrollclick = void 0;

  $('.fa-arrow-up').on('click', function () {
    scrollclick = true;
    $('html, body').stop().animate({ scrollTop: 0 }, 800, function () {
      scrollclick = false;
    });
    return false;
  });

  $('.fa-arrow-down').on('click', function () {
    scrollclick = true;
    $('html, body').stop().animate({ scrollTop: documentHeight }, 800, function () {
      scrollclick = false;
    });
    return false;
  });

  $('.fa-music').on('click', function () {
    window.open('http://qcyoung.xyz/yPlayer/');
  });
  // Slidebars off-canvas menu
  $.slidebars();

  function eggFun() {
    if (windowWidth < miniDeviceWidth) {
      return false;
    }
    egglayer = layer.open({
      type: 1,
      title: false,
      skin: 'layui-layer-demo', // 样式类名
      closeBtn: false, // 不显示关闭按钮
      shift: 5,
      shadeClose: true, // 开启遮罩关闭
      area: [windowWidth, windowHeight],
      content: '<div class="egg-tips"><div class="egg-header"><span>彩蛋指南（仿 Github —— 通过这些快捷键可以让你更快访问页面哦），按下「?」键同样呼出</span><span class="egg-close"><i class="fa fa-close" style="padding-right:5px;"></i></span> </div><div class="egg-helps"><table class="keyboard-map"><tbody><tr><th></th><th>快捷方式说明</th></tr><tr><td class="keys"><kbd>?</kbd></td><td>打开彩蛋说明</td></tr><tr><td class="keys"><kbd>g</kbd><kbd>s</kbd></td><td>定焦到搜索框</td></tr><tr><td class="keys"><kbd>g</kbd><kbd>a</kbd></td><td>打开归档页</td></tr><tr><td class="keys"><kbd>g</kbd><kbd>c</kbd></td><td>打开目录页</td></tr><tr><td class="keys"><kbd>g</kbd><kbd>t</kbd></td><td>打开标签页</td></tr></tbody></table></div></div>'
    });
  }

  // 渲染导航栏样式
  function navRender() {
    if ($(document).scrollTop() > 10) {
      $('.lightnav .navbar-inner').addClass('lightnav-alt');
    } else {
      $('.lightnav .navbar-inner').removeClass('lightnav-alt');
    }
  }

  function lazyLoadImg() {
    var postImgs = $('.post-content').find('img');
    var nowimg = void 0;
    if (postImgs.length) {
      for (var j = 0; j < postImgs.length; j++) {
        if (postImgs[j].getBoundingClientRect().bottom <= windowHeight) {
          nowimg = j;
        } else {
          break;
        }
      }
      if (!$(postImgs[nowimg]).hasClass('img_replaced')) {
        $(postImgs[nowimg]).attr('src', $(postImgs[nowimg]).attr('data-src')).addClass('img_replaced');
      }
    }
  }

  function scrollSpy() {
    var scrollTop = $(window).scrollTop();
    if ($('#toc').length) {
      documentHeight = $(document).height();
      var tocHeight = $('.toc').outerHeight(); // 目录高度
      var duoshuoMark = $('.duoshuo').offset().top; // 评论栏位置
      var heads = $('.post-article').find('h1,h2,h3,h4,h5');
      var nowtoc = 0;
      for (var i = 0; i < heads.length; i++) {
        if (heads[i].getBoundingClientRect().top <= 50) {
          nowtoc = i;
        } else {
          break;
        }
      }
      var tocs = $('.toc').find('a');
      $(tocs).removeClass('toc-active');
      $(tocs[nowtoc]).addClass('toc-active');
      var tocScroll = tocs[nowtoc].offsetTop;
      if (tocScroll > windowHeight / 2) {
        $('#toc').scrollTop(tocScroll - windowHeight / 2);
      }
      if (tocHeight > windowHeight - footerHeight - 100) {
        if (scrollTop > duoshuoMark - windowHeight) {
          $('#toc').css({
            'position': 'absolute',
            'top': duoshuoMark - tocHeight
          });
        } else {
          $('#toc').css({
            'position': 'fixed',
            'top': '50px'
          });
        }
      }
      lazyLoadImg();
    }
    navRender();
  }

  function showPanel() {
    var scrollTopNum = void 0;
    var returnTop = void 0;
    // 获取当前垂直位移值
    if (!scrollclick) {
      scrollTopNum = $(document).scrollTop();
      // 获取浏览器当前高度
      returnTop = $('div.control-panel');
      // 滚动条垂直距离大于0时显示，反之隐藏
      scrollTopNum > 240 ? returnTop.fadeIn('fast') : returnTop.fadeOut('fast');
    }
  }

  function throttle(delay, atleast) {
    // 节流
    var timer = null;
    var previous = null;
    return function () {
      var now = +new Date();
      if (!previous) previous = now;
      if (atleast && now - previous > atleast) {
        scrollSpy();
        showPanel();
        previous = now;
        clearTimeout(timer);
      } else {
        clearTimeout(timer);
        timer = setTimeout(function () {
          scrollSpy();
          showPanel();
          previous = null;
        }, delay);
      }
    };
  };

  window.onscroll = throttle(200, 500);

  $('#toc').niceScroll({
    smoothscroll: true, // scroll with ease movement
    autohidemode: true,
    zindex: '100', // change z-index for scrollbar div
    scrollspeed: 60, // scrolling speed
    mousescrollstep: 40, // mouse scrolling speed
    gesturezoom: false, // 上缩放框激活时，间距输出/输入
    horizrailenabled: false, // 管理水平滚动
    cursorcolor: '#151515',
    boxzoom: false, // enable zoom for box content
    cursorborder: '0px solid #202020',
    cursorborderradius: '8px',
    cursorwidth: 4, // 9
    enablemousewheel: true,
    background: 'rgba(255,255,255,0.7)'
  });

  // Functionailty constraints for mobile(wall opacity covering layer)
  if (!Modernizr.touch) {
    jQuery(function ($) {
      // Hero & page-header fade-in effect
      var divs = $('.herofade');
      $(window).on('scroll', function () {
        var st = $(this).scrollTop();
        divs.css({
          'margin-top': -(st / 0) + 'px',
          opacity: 0.7 - st / 1600
        });
      });
    });
  }

  // autohide navbar on scroll
  $('div.navbar-fixed-top').autoHidingNavbar({
    animationDuration: 400,
    hideOffset: 0 // Hides the navbar after scrolling . auto means the navbar's height.
  });

  /*!
   * IE10 viewport hack for Surface/desktop Windows 8 bug
   * Copyright 2014 Twitter, Inc.
   * Licensed under the Creative Commons Attribution 3.0 Unported License. For
   * details, see http://creativecommons.org/licenses/by/3.0/.
   */
  // See the Getting Started docs for more information:
  // http://getbootstrap.com/getting-started/#support-ie10-width
  if (navigator.userAgent.match(/IEMobile\/10\.0/)) {
    var msViewportStyle = document.createElement('style');
    msViewportStyle.appendChild(document.createTextNode('@-ms-viewport{width:auto!important}'));
    document.querySelector('head').appendChild(msViewportStyle);
  }

  $('.logo').hover(function () {
    $(this).find('#white-logo').css('display', 'none');
    $(this).find('#brown-logo').css('display', 'block');
  }, function () {
    $(this).find('#brown-logo').css('display', 'none');
    $(this).find('#white-logo').css('display', 'block');
  });
}(jQuery)); // End "use strict"
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0), __webpack_require__(0)))

/***/ })
/******/ ]);