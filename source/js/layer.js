var Layer = {
    eggFun: function() {
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
    imgZoom: function(e) {
        let imgSrc = $(e.target).attr('data-src');
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
    rewardLayer: function() {
        layer.open({
            type: 1,
            title: false,
            skin: 'layui-layer-demo', // 样式类名
            closeBtn: false, // 不显示关闭按钮
            shift: 2,
            shadeClose: true, // 开启遮罩关闭
            area: [windowWidth, windowHeight],
            content: '<img src="https://yangzj1992-1251901721.cos.ap-beijing.myqcloud.com/images/wxpay.jpg" width="200px" height="200px"/><img src="https://yangzj1992-1251901721.cos.ap-beijing.myqcloud.com/images/alipay.jpg" width="200px" height="200px"/>'
        });
    },
    wechatLayer: function() {
        layer.open({
            type: 1,
            title: false,
            skin: 'layui-layer-demo', // 样式类名
            closeBtn: false, // 不显示关闭按钮
            shift: 2,
            shadeClose: true, // 开启遮罩关闭
            area: [windowWidth, windowHeight],
            content: '<img src="https://yangzj1992-1251901721.cos.ap-beijing.myqcloud.com/images/yangzj1992QRcode.jpg" width="200px" height="200px"/>'
        });
    }
}

export {
    Layer
}