import '../css/index.css';
// import '../css/fullPage.css';
import '../css/index.less';
import { notice } from './noticeData.js';

var app = new Vue({
    el: '#app',
    data() {
        return {
            notice: notice(),    //  芒果公告数据
            noticeList: [],
            upScroll: false,    //  判定滚动
            // heightData: [],
        }
    },
    mounted() {
        //  生成下载APP二维码
        new QRCode(document.getElementById("qrcode"), 'http://a.app.qq.com/o/simple.jsp?pkgname=com.kuaixun.mgkd');
        var gotop = document.getElementById('gotop');
        var topNav = document.getElementById('topNav');
        var erweima = document.getElementById('erweima');
        var dikuang = document.getElementById('dikuang');
        var bg = document.getElementsByClassName('bg');
        var clientWidth = document.documentElement.clientWidth;
        var clientHeight = document.documentElement.clientHeight;
        for (var i = 0; i < bg.length; i++) {
            bg[i].style.width = clientWidth + 'px';
            bg[i].style.height = clientHeight + 'px';
            // this.heightData.push(bg[i].offsetTop);
        }
        //  监听窗口变化
        window.onresize = function () {
            var clientWidth = document.documentElement.clientWidth;
            var clientHeight = document.documentElement.clientHeight;
            if (clientWidth > 1300) {
                for (var i = 0; i < bg.length; i++) {
                    bg[i].style.width = clientWidth + 'px';
                    bg[i].style.height = clientHeight + 'px';
                }
            } else {
                for (var i = 0; i < bg.length; i++) {
                    bg[i].style.width = '1300px';
                    bg[i].style.height = clientHeight + 'px';
                }
            }
        };
        //  滚动事件
        window.onscroll = (e) => {
            var scrollTop = document.documentElement.scrollTop || document.body.scrollTop || 0;
            if (scrollTop >= clientHeight) {
                gotop.style.display = 'block';
                topNav.style.display = 'block';
            } else {
                gotop.style.display = 'none';
                topNav.style.display = 'none';
            }
        }
        //  二维码显示隐藏
        erweima.onmouseover = () => {
            dikuang.style.display = 'block';
        }
        erweima.onmouseout = () => {
            dikuang.style.display = 'none';
        }
        //  芒果看点公告取最新前五条
        this.notice.forEach((item, index) => {
            if (index < 5) {
                this.noticeList.push(item);
            }
        });

        //  浏览器兼容      
        // if ((navigator.userAgent.toLowerCase().indexOf("firefox") != -1)) {
        //     document.addEventListener("DOMMouseScroll", this.scrollFun, false);
        // }
        // else if (document.addEventListener) {
        //     document.addEventListener("mousewheel", this.scrollFun, false);
        // }
        // else if (document.attachEvent) {
        //     document.attachEvent("onmousewheel", this.scrollFun);
        // }
        // else {
        //     document.onmousewheel = this.scrollFun;
        // }

    },
    methods: {
        // scrollFun() {
        //     var delta = event.detail || (-event.wheelDelta);
        //     var clientHeight = document.documentElement.clientHeight;
        //     if (!this.upScroll) {
        //         this.upScroll = true;
        //         if (delta > 0) {
        //             if (document.documentElement.scrollTop === document.getElementsByClassName('bg')[4].offsetTop){
        //                 this.upScroll = false;
        //                 return;
        //             }
        //             this.scrollDh(5, document.documentElement.scrollTop + clientHeight, 1);
        //         }
        //         if (delta < 0) {
        //             if(document.documentElement.scrollTop <= clientHeight) {
        //                 this.upScroll = false;
        //                 return;
        //             }
        //             this.scrollDh(5, document.documentElement.scrollTop - clientHeight, -1);
        //         }
        //     }
        // },
        //  返回顶部
        gotop() {
            this.scrollDh(50, 0, -1);
        },
        //  滚动动画
        scrollDh(px, h, up) {
            var time = window.setInterval(() => {
                if (up === -1) {
                    document.documentElement.scrollTop -= px;
                    if (document.documentElement.scrollTop <= h) {
                        window.clearTimeout(time);
                        this.upScroll = false;
                    }
                } else {
                    document.documentElement.scrollTop += px;
                    if (document.documentElement.scrollTop >= h) {
                        window.clearTimeout(time);
                        this.upScroll = false;
                    }
                }
            }, 0)
        },
    }
});

