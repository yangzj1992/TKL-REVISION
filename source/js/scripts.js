function dispatch() {
    var searchbox = $("#searchbox");
    var searchval = searchbox.val()
    if (searchval != "") {
        var url = 'http://www.google.com/search?q=site:qcyoung.com/%20' + searchval;
        if (navigator.userAgent.indexOf('iPad') > -1 || navigator.userAgent.indexOf('iPhone') > -1 || navigator.userAgent.indexOf('iPhone') > -1) {
            location.href = url;
        } else {
            window.open(url, "_blank");
        }
        return false;
    } else {
        return false;
    }
}
$(document).ready(function($) {
    /**
     * plugins list
     * @type {
     *   jquery:[nicescroll,slidebars,animsition,Bootstrap Auto-Hiding Navbar]
     *   
     * }
     */
    var a = {
              info: "既然你都点进控制台想深入看点什么了..那么就送你一个冰淇淋吧，YY感受一下~",
              logo: "         _.-.  \n" + "       ,'/ //\\ \n" + "      /// // /)\n" + "     /// // //|\n" + "    /// // /// \n" + "   /// // ///  \n" + "  (`: // ///   \n" + "   `;`: ///    \n" + "   / /  `'      \n" + "  / /\n" + " (_/  \n"
            };
    window.console && console.info && console.info(a.logo + a.info);
    
    // 开始进入时加载位置
    var scrollstatus = $(document).scrollTop();
    if(scrollstatus >10){
      $(".lightnav .navbar-inner").addClass("lightnav-alt");
    }else{
      $(".lightnav .navbar-inner").removeClass("lightnav-alt");
    }

    var window_height = $(window).height();
    var window_width = $(window).width();
    $(window).scroll(function () {
      if ($(document).scrollTop() > 10) {
        $(".lightnav .navbar-inner").addClass("lightnav-alt");
      } else {
        $(".lightnav .navbar-inner").removeClass("lightnav-alt");
      }
    });

    var wall_number = "url(http://7bv937.com1.z0.glb.clouddn.com/qcyoung/TKL/wall-"+Math.ceil(Math.random()*50)+".jpg)";
    // var wall_number = "url(//az619822.vo.msecnd.net/files/SnowySquirrel_EN-US13973676590_1366x768.jpg";
    $(".element-img").css('background-image',wall_number);

    // 微信Window
    $("#navigation .weixin,.social .weixin").bind('click',function(event) {
      var window_height = $(window).height();
      var window_width = $(window).width();
      layer.open({
        type: 1,
        title: false,
        skin: 'layui-layer-demo', //样式类名
        closeBtn: false, //不显示关闭按钮
        shift: 2,
        shadeClose: true, //开启遮罩关闭
        area: [ window_width , window_height],
        content: '<img src="http://7bv937.com1.z0.glb.clouddn.com/qcyoung/yangzj1992QRcode.jpg" width="200px" height="200px"/>'
      });
    });

    var scrollclick;

    //返回顶部功能
    $(window).bind("scroll",function() {
      //获取当前垂直位移值
      if(!scrollclick){
        var scrollTopNum=$(document).scrollTop(),
        //获取浏览器当前高度
        winHeight=$(window).height(),
        returnTop=$("div.return-top");
        //滚动条垂直距离大于0时显示，反之隐藏
        (scrollTopNum>240)?returnTop.fadeIn("fast"):returnTop.fadeOut('fast');
      }
    });

    // 点击按钮后，滚动条的垂直方向的值逐渐变为0，也就是滑动向上的效果
    $("div.return-top").click(function() {
      scrollclick = true;
      $(this).fadeOut('800');
      $("html, body").animate({ scrollTop: 0 }, 800,function(){
        scrollclick = false;
      });
      return false;
    });

    // Slidebars off-canvas menu
    $.slidebars();

    $("html").niceScroll({
      smoothscroll: true, // scroll with ease movement
      autohidemode: false,
      zindex: "100", // change z-index for scrollbar div
      scrollspeed: 60, // scrolling speed
      mousescrollstep: 40,// mouse scrolling speed
      gesturezoom: false,//上缩放框激活时，间距输出/输入
      horizrailenabled: false,//管理水平滚动
      cursorcolor: "#151515",
      boxzoom: false,// enable zoom for box content
      cursorborder: "0px solid #202020",
      cursorborderradius: "5px",
      cursorwidth: 9,
      enablemousewheel: true,
      background: "rgba(255,255,255,0.7)",
    });

    // Page transitions
    $(".animsition").animsition({
      inClass               :   'fade-in',
      outClass              :   'fade-out-down-sm',
      inDuration            :    500,
      outDuration           :    500,
      linkElement           :   '.animsition-link', 
      //e.g. linkElement   :   'a:not([target="_blank"]):not([href^=#])'
      loading               :    true,
      loadingParentElement  :   'body', //animsition wrapper element
      loadingClass          :   'animsition-loading',
      unSupportCss          : [ 'animation-duration',
                                '-webkit-animation-duration',
                                '-o-animation-duration'
                              ],
      //"unSupportCss" option allows you to disable the "animsition" in case the css property in the array is not supported by your browser. 
      //The default setting is to disable the "animsition" in a browser that does not support "animation-duration".
      overlay               :   false,
      overlayClass          :   'animsition-overlay-slide',
      overlayParentElement  :   'body'
    });

    // Functionailty constraints for mobile(wall opacity covering layer)
    if (!Modernizr.touch) {
      jQuery(function ($) {
        // Hero & page-header fade-in effect 
        var divs = $('.herofade');
        $(window).on('scroll', function () {
          var st = $(this).scrollTop();
          divs.css({
            'margin-top': -(st / 0) + "px",
            'opacity': 0.7 - st / 1600
          });
        });
      });
    }

    // autohide navbar on scroll
    $("div.navbar-fixed-top").autoHidingNavbar({
      animationDuration: 400,
      hideOffset: 0,//Hides the navbar after scrolling that much pixel. auto means the navbar's height.
    });

    // Scrollspy for scrollto links in floating faq sidebar
    var $body   = $(document.body);
    var navHeight = $('.navbar').outerHeight(true) + 80;


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
      msViewportStyle.appendChild(
        document.createTextNode(
          '@-ms-viewport{width:auto!important}'
        )
      );
      document.querySelector('head').appendChild(msViewportStyle);
    }

    $(".logo").hover(function() {
      $(this).find("#white-logo").css('display','none');
      $(this).find("#brown-logo").css('display','block');
    }, function() {
      $(this).find("#brown-logo").css('display','none');
      $(this).find("#white-logo").css('display','block');
    });

    
}(jQuery)); // End "use strict"
