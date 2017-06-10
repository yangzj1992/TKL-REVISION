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
        width: 320,
        height: $(window).height(),
        cell: 90,
        maxCell: 1000,
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
    },
}

export {
    Config
}