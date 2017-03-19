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
/******/ 		script.src = __webpack_require__.p + "chunks/" + ({}[chunkId]||chunkId) + ".chunk" + {"0":"8bb7811a"}[chunkId] + ".js";
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
/******/ 	__webpack_require__.p = "/build/dev/";

/******/ 	// on error function for async loading
/******/ 	__webpack_require__.oe = function(err) { console.error(err); throw err; };

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = jQuery;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function($) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
var Config = {
  keyValue: {
    '/?': 191,
    'g': 71,
    'a': 65,
    'c': 67,
    't': 84,
    's': 83
  },
  consoleInfo: {
    info: '%c卧槽，你居然敢点开控制台看我的代码，这下我的屎代码无所遁形了 T _ T',
    logo: '         _.-.  \n' + '       ,\'/ //\\ \n' + '      /// // /)\n' + '     /// // //|\n' + '    /// // /// \n' + '   /// // ///  \n' + '  (`: // ///   \n' + '   `;`: ///    \n' + '   / /  `\'      \n' + '  / /\n' + ' (_/  \n'
  },
  niceScroll: {
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
  },
  snow: {
    el: 'slide-canvas',
    width: 360,
    height: $(window).height(),
    cell: 90,
    maxCell: 200,
    line: [
      // {baseX: '50%',from: {X: -950,Y: 56},to: {X: -878,Y: 62}},
      // {baseX: '50%',from: {X: -878,Y: 62},to: {X: -835,Y: 55}},
      // {baseX: '50%',from: {X: -835,Y: 55},to: {X: -820,Y: 53}},
      // {baseX: '50%',from: {X: -820,Y: 53},to: {X: -789,Y: 70},cubicBezier: [0,.27,.06,.97]},
      // {baseX: '50%',from: {X: -789,Y: 70},to: {X: -722,Y: 63}},
      // {baseX: '50%',from: {X: -722,Y: 63},to: {X: -668,Y: 66}},
      // {baseX: '50%',from: {X: -668,Y: 66},to: {X: -643,Y: 62}},
      // {baseX: '50%',from: {X: -643,Y: 62},to: {X: -615,Y: 56}},
      // {baseX: '50%',from: {X: -615,Y: 56},to: {X: -599,Y: 54}},
      // {baseX: '50%',from: {X: -599,Y: 54},to: {X: -579,Y: 57}},
      // {baseX: '50%',from: {X: -579,Y: 57},to: {X: -463,Y: 59}},
      // {baseX: '50%',from: {X: -463,Y: 59},to: {X: -445,Y: 55}},
      // {baseX: '50%',from: {X: -445,Y: 55},to: {X: -384,Y: 56}},
      // {baseX: '50%',from: {X: -384,Y: 56},to: {X: -380,Y: 53}},
      // {baseX: '50%',from: {X: -380,Y: 53},to: {X: -348,Y: 55}},
      // {baseX: '50%',from: {X: -348,Y: 55},to: {X: -246,Y: 64}},
      // {baseX: '50%',from: {X: -246,Y: 64},to: {X: -158,Y: 57}},
      // {baseX: '50%',from: {X: -158,Y: 57},to: {X: -109,Y: 58}},
      // {baseX: '50%',from: {X: -109,Y: 58},to: {X: -43,Y: 55},},
      // {baseX: '50%',from: {X: -43,Y: 55},to: {X: 0,Y: 59},cubicBezier: [.05,.35,.25,1]},
      // {baseX: '50%',from: {X: 0,Y: 59},to: {X: 49,Y: 57},cubicBezier: [.46, 0, .09, .85]},
      // {baseX: '50%',from: {X: 49,Y: 57},to: {X: 71,Y: 60}},
      // {baseX: '50%',from: {X: 71,Y: 60},to: {X: 100,Y: 56}},
      // {baseX: '50%',from: {X: 100,Y: 56},to: {X: 108,Y: 58}},
      // {baseX: '50%',from: {X: 108,Y: 58},to: {X: 125,Y: 55}},
      // {baseX: '50%',from: {X: 125,Y: 55},to: {X: 165,Y: 70},cubicBezier: [.08,.36,.33,.77]},
      // {baseX: '50%',from: {X: 165,Y: 70},to: {X: 357,Y: 58}},
      // {baseX: '50%',from: {X: 357,Y: 58},to: {X: 505,Y: 64}},
      // {baseX: '50%',from: {X: 505,Y: 64},to: {X: 687,Y: 53}},
      // {baseX: '50%',from: {X: 687,Y: 53},to: {X: 705,Y: 57}},
      // {baseX: '50%',from: {X: 705,Y: 57},to: {X: 754,Y: 53}},
      // {baseX: '50%',from: {X: 754,Y: 53},to: {X: 861,Y: 80},cubicBezier: [0,.2,.34,.86]},
      // {baseX: '50%',from: {X: 861,Y: 80},to: {X: 950,Y: 58},cubicBezier: [.4,.13,.88,.36]}
    ]
  }
};

exports.Config = Config;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function($) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
var Layer = {
  eggFun: function eggFun() {
    if (windowWidth < miniDeviceWidth) {
      return false;
    }
    layer.open({
      type: 1,
      title: false,
      skin: 'layui-layer-demo', // 样式类名
      closeBtn: false, // 不显示关闭按钮
      shift: 5,
      shadeClose: true, // 开启遮罩关闭
      area: [windowWidth, windowHeight],
      content: '<div class="egg-tips"><div class="egg-header"><span>彩蛋指南（仿 Github —— 通过这些快捷键可以让你更快访问页面哦），按下「?」键同样呼出</span><span class="egg-close"><i class="fa fa-close" style="padding-right:5px;"></i></span> </div><div class="egg-helps"><table class="keyboard-map"><tbody><tr><th></th><th>快捷方式说明</th></tr><tr><td class="keys"><kbd>?</kbd></td><td>打开彩蛋说明</td></tr><tr><td class="keys"><kbd>g</kbd><kbd>s</kbd></td><td>定焦到搜索框</td></tr><tr><td class="keys"><kbd>g</kbd><kbd>a</kbd></td><td>打开归档页</td></tr><tr><td class="keys"><kbd>g</kbd><kbd>c</kbd></td><td>打开目录页</td></tr><tr><td class="keys"><kbd>g</kbd><kbd>t</kbd></td><td>打开标签页</td></tr></tbody></table></div></div>'
    });
  },
  imgZoom: function imgZoom(e) {
    var imgSrc = $(e.target).attr('data-src');
    layer.open({
      type: 1,
      title: false,
      // skin: 'layui-layer-demo', // 样式类名
      closeBtn: false, // 不显示关闭按钮
      shadeClose: true, // 开启遮罩关闭
      area: [windowWidth, windowHeight],
      content: '<img class="img-zoom" src="' + imgSrc + '" width="' + imgWidth + '" height="' + imgHeight + '"/>'
    });
  },
  rewardLayer: function rewardLayer() {
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
  },
  wechatLayer: function wechatLayer() {
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
  }
};

exports.Layer = Layer;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
  * Snowy Fun
  * @param  {
  *   el => 'String' 
  *   width => 100% or 1280
  *   height => 100% or 800
  *   cell => Number
  *   maxCell => Number
  *   line => Array
  * }
  * @return {init} 
  */
function Snowy(options) {
  function Snow(x, y, radius, fn) {
    this.x = x;
    this.y = y;
    this.r = radius;
    this.fn = fn;
    this.move = true;
  }
  Snow.prototype.refresh = function (toUpper) {
    var H = docEl.height,
        prevReachX = ~~this.x,
        nextReachX = ~~this.x + 1,
        thisReach = snowList.widthReach[prevReachX] || 0,
        useReachX = void 0,
        useReach = void 0;

    if (!this.move) {
      return;
    }
    if (snowList.widthReach[prevReachX] <= snowList.widthReach[nextReachX]) {
      useReachX = prevReachX;
    } else {
      useReachX = nextReachX;
    }
    useReach = snowList.widthReach[useReachX] || 0;
    if (this.y > H - thisReach - 2 && this.y < H - thisReach + 3) {
      if (toUpper) {
        this.y = H - thisReach;
        if (useReach < thisReach) {
          this.x = useReachX;
          thisReach = useReach;
        } else {
          useReachX = ~~this.x;
        }
        if (H - this.y + ~~(this.r / 6) >= thisReach) {
          snowList.widthReach[useReachX] = H - this.y + ~~(this.r / 6);
        }
        this.move = false;
      } else {
        this.x = getRandom('x');
        this.y = 0;
      }
    } else if (this.y > docEl.height) {
      if (toUpper) {
        snowList.widthReach[useReachX] = H - this.y + ~~(this.r / 3);
        this.move = false;
      } else {
        this.x = getRandom('x');
        this.y = 0;
      }
    } else {
      this.x = this.fn.x(this.x, this.y);
      this.y = this.fn.y(this.y, this.y);
    }
  };

  function UnitBezier(p1x, p1y, p2x, p2y) {
    // pre-calculate the polynomial coefficients
    // First and last control points are implied to be (0,0) and (1.0, 1.0)
    this.cx = 3.0 * p1x;
    this.bx = 3.0 * (p2x - p1x) - this.cx;
    this.ax = 1.0 - this.cx - this.bx;

    this.cy = 3.0 * p1y;
    this.by = 3.0 * (p2y - p1y) - this.cy;
    this.ay = 1.0 - this.cy - this.by;
  }
  UnitBezier.prototype = {
    epsilon: 1e-3, // Precision  
    sampleCurveX: function sampleCurveX(t) {
      return ((this.ax * t + this.bx) * t + this.cx) * t;
    },
    sampleCurveY: function sampleCurveY(t) {
      return ((this.ay * t + this.by) * t + this.cy) * t;
    },
    sampleCurveDerivativeX: function sampleCurveDerivativeX(t) {
      return (3.0 * this.ax * t + 2.0 * this.bx) * t + this.cx;
    },
    solveCurveX: function solveCurveX(x, epsilon) {
      var t0 = void 0,
          t1 = void 0,
          t2 = void 0,
          x2 = void 0,
          d2 = void 0,
          i = void 0;
      // First try a few iterations of Newton's method -- normally very fast.
      for (t2 = x, i = 0; i < 8; i++) {
        x2 = this.sampleCurveX(t2) - x;
        if (Math.abs(x2) < epsilon) return t2;
        d2 = this.sampleCurveDerivativeX(t2);
        if (Math.abs(d2) < epsilon) break;
        t2 = t2 - x2 / d2;
      }

      // No solution found - use bi-section
      t0 = 0.0;
      t1 = 1.0;
      t2 = x;

      if (t2 < t0) return t0;
      if (t2 > t1) return t1;

      while (t0 < t1) {
        x2 = this.sampleCurveX(t2);
        if (Math.abs(x2 - x) < epsilon) return t2;
        if (x > x2) t0 = t2;else t1 = t2;

        t2 = (t1 - t0) * .5 + t0;
      }
      return t2;
    },

    // Find new function of Y along curve X
    solve: function solve(x, epsilon) {
      return this.sampleCurveY(this.solveCurveX(x, epsilon));
    }
  };

  function listInit(o, that) {
    var base = getDistance(o.baseX),
        bezier = void 0,
        cubic = void 0,
        len = void 0,
        per = void 0,
        i = void 0;
    if (o.cubicBezier) {
      bezier = o.cubicBezier;
      cubic = new UnitBezier(bezier[0], bezier[1], bezier[2], bezier[3]);
    }
    for (i = 0, len = o.to.X - o.from.X; i < len; i++) {
      per = (i + 1) / len;
      if (cubic) {
        per = cubic.solve(per, 1e-3);
      }
      that.widthReach[~~(base + o.from.X) + i] = (o.to.Y - o.from.Y) * per + o.from.Y;
    }
  }
  function SnowList() {
    var len = options.line.length,
        i = 0;
    this.list = [];
    this.widthReach = [];
    for (; i < len; i++) {
      listInit(options.line[i], this);
    }
  }
  SnowList.prototype.refresh = function () {
    var lenNoMove = 0,
        i = 0,
        len = this.list.length;
    for (; i < len; i++) {
      if (this.list[i].move === false) {
        lenNoMove++;
      }
      if (len >= options.maxCell) {
        this.list[i].refresh(false);
      } else this.list[i].refresh(true);
    }
    /*clearInterval(interval);*/
    // if (len >= options.maxCell) return;
    if (len < options.maxCell) {
      for (i = 0, len = options.cell - (len - lenNoMove); i < len; i++) {
        !function () {
          var snow = void 0,
              randomX = void 0,
              randomY = void 0,
              randomR = void 0,
              randomFnx = void 0,
              randomFny = void 0;
          randomX = getRandom('x');
          randomY = getRandom('y');
          randomR = getRandom('r');
          randomFnx = getRandom('fnx');
          randomFny = getRandom('fny');

          snow = new Snow(randomX, randomY, randomR, {
            x: randomFnx,
            y: randomFny
          });
          snow.draw(cxt);
          snowList.push(snow);
        }();
      }
    }
  };

  SnowList.prototype.push = function (snow) {
    this.list.push(snow);
  };

  SnowList.prototype.draw = function (cxt) {
    for (var i = 0, len = this.list.length; i < len; i++) {
      this.list[i].draw(cxt);
    }
    /*cxt.clearRect(300 - 6, docEl.height - 200, 200 + 12, 4);*/
  };
  SnowList.prototype.get = function (i) {
    return this.list[i];
  };
  SnowList.prototype.size = function () {
    return this.list.length;
  };
  Snow.prototype.draw = function (cxt) {
    var grd = cxt.createRadialGradient(this.x, this.y, 0, this.x, this.y, this.r);
    grd.addColorStop(0, 'rgba(255, 255, 255, ' + this.r / 6 * 1 + ')');
    grd.addColorStop(.5, 'rgba(255, 255, 255, ' + this.r / 6 * .5 + ')');
    grd.addColorStop(1, 'rgba(255, 255, 255, 0)');
    cxt.fillStyle = grd;
    cxt.fillRect(this.x - this.r, this.y - this.r, this.r * 2, this.r * 2);
  };

  /**
  * Generate random x-pos, y-pos or fn functions
  * @param  {string} option x|y|fnx|fny
  * @return {int|Function} 
  */
  function getRandom(option) {
    var ret = void 0,
        random = void 0;
    switch (option) {
      case 'x':
        ret = Math.random() * docEl.width;
        break;
      case 'y':
        ret = (Math.random() - 1) * docEl.height;
        break;
      case 'r':
        ret = 2 + Math.random() * 4;
        break;
      case 'fnx':
        // x axis offset
        random = 27 + Math.random() * 100;
        ret = function ret(x, y) {
          return x + 0.5 * Math.sin(y / random);
        };
        break;
      case 'fny':
        // y axis offset
        random = 0.4 + Math.random() * 1.4;
        ret = function ret(x, y) {
          return y + random;
        };
        break;
    }
    return ret;
  }
  function newSnow() {
    var snow = void 0,
        randomX = void 0,
        randomY = void 0,
        randomR = void 0,
        randomFnx = void 0,
        randomFny = void 0;
    for (var i = 0; i < options.cell; i++) {
      randomX = getRandom('x');
      randomY = getRandom('y');
      randomR = getRandom('r');
      randomFnx = getRandom('fnx');
      randomFny = getRandom('fny');
      snow = new Snow(randomX, randomY, randomR, {
        x: randomFnx,
        y: randomFny
      });
      snow.draw(cxt);
      snowList.push(snow);
    }
  }

  function getDistance(n) {
    if (n.toString().indexOf('%') !== -1) {
      n = n.split('%')[0] / 100 * el.offsetWidth;
    }
    return n;
  }

  // Start paint
  var el = document.getElementById(options.el) || document.getElementsByTagName('body')[0],
      docEl = {
    width: getDistance(options.width),
    height: getDistance(options.height)
  },
      canvas = document.createElement('canvas'),
      cxt = void 0,
      interval = void 0;
  el.innerHTML = '';
  el.appendChild(canvas);
  cxt = canvas.getContext('2d');
  // Create snow objects
  var snowList = new SnowList();
  function init() {
    canvas.height = docEl.height;
    canvas.width = docEl.width;
    snowList = new SnowList();
    newSnow();
  }
  init();

  // Refresh snow position data, and redraw them in each frame
  interval = setInterval(function () {
    cxt.clearRect(0, 0, canvas.width, canvas.height);
    snowList.refresh();
    snowList.draw(cxt);
  }, 13);

  return {
    init: init
  };
}

exports.Snowy = Snowy;

/***/ }),
/* 4 */,
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function($, jQuery) {

var _config = __webpack_require__(1);

var _layer = __webpack_require__(2);

var _snow = __webpack_require__(3);

__webpack_require__.e/* import() */(0).then(__webpack_require__.bind(null, 4)); // The page is now styled


window.dispatch = function () {
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
};

$(function () {
  /**
   * plugins list
   * @type {
   *   jquery:[nicescroll,slidebars,animsition,Bootstrap Auto-Hiding Navbar,pace]
   * }
   */
  window.windowHeight = $(window).height();
  window.windowWidth = $(window).width();
  window.mobileWidth = 768;
  window.miniDeviceWidth = 1024;
  window.imgWidth = windowWidth * 0.8;
  window.imgHeight = windowHeight * 0.8;
  var footerHeight = $('footer').outerHeight();
  var documentHeight = $(document).height();
  var gPushed = false; // keydown 状态
  var keyValue = _config.Config.keyValue;

  var consoleInfo = _config.Config.consoleInfo;
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
          _layer.Layer.eggFun();
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
    layer.closeAll();
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
    bgImg.src = 'http://qcyoung.qiniudn.com/qcyoung/TKL/wall-' + Math.ceil(Math.random() * 558) + '.jpg';
    // bgImg.src = 'https://wallpapers.wallhaven.cc/wallpapers/full/wallhaven-30346.jpg';
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
    _layer.Layer.imgZoom(event);
  });

  $(document).delegate('.img-zoom', 'click', function () {
    layer.closeAll();
  });

  // 微信Window
  $('#navigation .weixin,.social .weixin').on('click', function () {
    _layer.Layer.wechatLayer();
  });

  // 赞赏Window
  $('.reward').on('click', function () {
    _layer.Layer.rewardLayer();
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

  $('.slider-action .action-go').click(function () {
    $(this).removeClass('shake');
    $(this).offset($(this).offset());
    $(this).addClass('shake');
    sliderFlash(Math.ceil(Math.random() * 1));
  });

  function sliderFlash(n) {
    switch (n) {
      case 1:
        snow();
    }
  }

  function snow() {
    var snowy = (0, _snow.Snowy)(_config.Config.snow);

    snowy.init();
    if (!!document.createElement('canvas').getContext) {
      var canvasObj = document.getElementById('slide-canvas');

      var canvasParent = canvasObj.parentNode;
      canvasParent.removeChild(canvasObj);
      canvasParent.appendChild(canvasObj);
    }
  }

  // Slidebars off-canvas menu
  var mySlidebars = new $.slidebars();

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

  $('#toc').niceScroll(_config.Config.niceScroll);

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