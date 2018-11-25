import ('./../scss/index.scss') // The page is now styled
import { Config } from 'root/source/js/config';
import { Layer } from 'root/source/js/layer';
import { Snowy } from 'root/source/js/snow';

window.dispatch = function() {
    let url;
    let searchbox = $('#searchbox');
    let searchval = searchbox.val();
    if (searchval !== '') {
        url = `http://www.google.com/search?q=site:qcyoung.com/%20${searchval}`;
        if (navigator.userAgent.indexOf('iPad') > -1 || navigator.userAgent.indexOf('iPhone') > -1) {
            location.href = url;
        } else {
            window.open(url, '_blank');
        }
    }
    return false;
}

$(function() {
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
    const footerHeight = $('footer').outerHeight();
    let documentHeight = $(document).height();
    let gPushed = false; // keydown 状态
    let keyValue = Config.keyValue;

    let consoleInfo = Config.consoleInfo;
    window.console && console.info && console.info(consoleInfo.logo);
    console.info(consoleInfo.info, 'color:#03a9f4');

    // tooltip初始化
    $('[data-toggle="tooltip"]').tooltip();

    document.onkeydown = function(e) {
        if (!($(':focus').prop('tagName') === 'INPUT') && !($(':focus').prop('tagName') === 'TEXTAREA')) {
            e = e || window.event;
            if (e.keyCode === keyValue['/?'] && e.shiftKey) {
                if ($('.layui-layer-shade').length > 0) {
                    return false;
                } else {
                    Layer.eggFun();
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

    $('.welcome').on('click', function(event) {
        eggFun();
    });
    $(document).delegate('.egg-close', 'click', function() {
        layer.closeAll()
    });

    navRender();
    lazyLoadImg();

    if (windowWidth > mobileWidth && $('.index-context').length) {
        let bgImg = new Image();
        bgImg.onload = function() {
            let wallPaper = `url(${bgImg.src})`;
            $('.element-img').css('background-image', wallPaper);
            $('body').animate({ 'opacity': 1 }, 500);
        };
        bgImg.onerror = function() {
            $('body').animate({ 'opacity': 1 }, 500);
        };
        bgImg.src = `https://yangzj1992-1251901721.cos.ap-beijing.myqcloud.com/images/TKL/wall-${Math.ceil(Math.random() * 1075)}.jpg`;
        // bgImg.src = '//wallpapers.wallhaven.cc/wallpapers/full/wallhaven-614115.jpg';
        $('body').animate({ 'opacity': 1 }, 500);
    } else if (!$('.index-context').length) {
        $('body').animate({ 'opacity': 1 }, 500);
    }

    $('.navbar-toggle').on('click', function() {
        let sideImgs = $('.sb-slidebar').find('img');
        if (sideImgs[0].src) {
            return false;
        }
        sideImgs.each(function(index, el) {
            $(el).attr('src', $(el).attr('data-src'));
        });


    });

    $('.post-article').delegate('.img_replaced', 'click', function(event) {
        Layer.imgZoom(event);
    });

    $(document).delegate('.img-zoom', 'click', function() {
        layer.closeAll();
    });

    // 微信Window
    $('#navigation .weixin,.social .weixin').on('click', function() {
        Layer.wechatLayer();
    });

    // 赞赏Window
    $('.reward').on('click', function() {
        Layer.rewardLayer();
    });

    let scrollclick;

    $('.fa-arrow-up').on('click', function() {
        scrollclick = true;
        $('html, body').stop().animate({ scrollTop: 0 }, 800, function() {
            scrollclick = false;
        });
        return false;
    });

    $('.fa-arrow-down').on('click', function() {
        scrollclick = true;
        $('html, body').stop().animate({ scrollTop: documentHeight }, 800, function() {
            scrollclick = false;
        });
        return false;
    });

    $('.fa-music').on('click', function() {
        window.open('http://music.163.com/#/user/home?id=13876009');
    });

    $('.slider-action .action-go').click(function() {
        $(this).removeClass('shake');
        $(this).offset($(this).offset())
        $(this).addClass('shake');
        sliderFlash(Math.ceil(Math.random() * 1))
    })

    function sliderFlash(n) {
        switch (n) {
            case 1:
                snow();
        }

    }

    function snow() {
        let snowy = Snowy(Config.snow);

        snowy.init();
        if (!!document.createElement('canvas').getContext) {
            var canvasObj = document.getElementById('slide-canvas');

            var canvasParent = canvasObj.parentNode;
            canvasParent.removeChild(canvasObj);
            canvasParent.appendChild(canvasObj);
        }
    }

    // Slidebars off-canvas menu
    let mySlidebars = new $.slidebars();

    // 渲染导航栏样式
    function navRender() {
        if ($(document).scrollTop() > 10) {
            $('.lightnav .navbar-inner').addClass('lightnav-alt');
        } else {
            $('.lightnav .navbar-inner').removeClass('lightnav-alt');
        }
    }

    function lazyLoadImg() {
        let postImgs = $('.post-content').find('img');
        let nowimg;
        if (postImgs.length) {
            for (let j = 0; j < postImgs.length; j++) {
                if (postImgs[j].getBoundingClientRect().bottom <= windowHeight) {
                    nowimg = j;
                } else {
                    break;
                }
                if (!$(postImgs[nowimg]).hasClass('img_replaced')) {
                    $(postImgs[nowimg]).attr('src', $(postImgs[nowimg]).attr('data-src')).addClass('img_replaced');
                }
            }
        }
    }

    function scrollSpy() {
        let scrollTop = $(window).scrollTop();
        if ($('#toc').length) {
            documentHeight = $(document).height();
            let tocHeight = $('.toc').outerHeight(); // 目录高度
            let duoshuoMark = $('.duoshuo').offset().top; // 评论栏位置
            let heads = $('.post-article').find('h1,h2,h3,h4,h5');
            let nowtoc = 0;
            for (let i = 0; i < heads.length; i++) {
                if (heads[i].getBoundingClientRect().top <= 50) {
                    nowtoc = i;
                } else {
                    break;
                }
            }
            let tocs = $('.toc').find('a');
            $(tocs).removeClass('toc-active');
            $(tocs[nowtoc]).addClass('toc-active');
            let tocScroll = tocs[nowtoc].offsetTop;
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
        let scrollTopNum;
        let returnTop;
        // 获取当前垂直位移值
        if (!scrollclick) {
            scrollTopNum = $(document).scrollTop();
            // 获取浏览器当前高度
            returnTop = $('div.control-panel');
            // 滚动条垂直距离大于0时显示，反之隐藏
            (scrollTopNum > 240) ? returnTop.fadeIn('fast'): returnTop.fadeOut('fast');
        }
    }

    function throttle(delay, atleast) {
        // 节流
        let timer = null;
        let previous = null;
        return function() {
            let now = +new Date();
            if (!previous) previous = now;
            if (atleast && now - previous > atleast) {
                scrollSpy();
                showPanel();
                previous = now;
                clearTimeout(timer);
            } else {
                clearTimeout(timer);
                timer = setTimeout(function() {
                    scrollSpy();
                    showPanel();
                    previous = null;
                }, delay);
            }
        };
    };

    window.onscroll = throttle(200, 500);

    $('#toc').niceScroll(Config.niceScroll);

    // Functionailty constraints for mobile(wall opacity covering layer)
    if (!Modernizr.touch) {
        jQuery(function($) {
            // Hero & page-header fade-in effect
            let divs = $('.herofade');
            $(window).on('scroll', function() {
                let st = $(this).scrollTop();
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
        let msViewportStyle = document.createElement('style');
        msViewportStyle.appendChild(
            document.createTextNode(
                '@-ms-viewport{width:auto!important}'
            )
        );
        document.querySelector('head').appendChild(msViewportStyle);
    }

    $('.logo').hover(function() {
        $(this).find('#white-logo').css('display', 'none');
        $(this).find('#brown-logo').css('display', 'block');
    }, function() {
        $(this).find('#brown-logo').css('display', 'none');
        $(this).find('#white-logo').css('display', 'block');
    });
}(jQuery)); // End "use strict"