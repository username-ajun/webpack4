import '../css/index.css';
import '../css/noticeDetails.less';
// import { notice } from './noticeData.js';

// var app = new Vue({
//     el: '#app',
//     data() {
//         return {
//             notice: notice(),    //  芒果公告数据
//             id: this.getRequestr().id,  //  公告ID
//             title: '',  //  标题
//             time: '',   //  时间
//             contens: '',    //  内容
//         }
//     },
//     mounted() {
//         this.notice.forEach(element => {
//             if(element.id == this.id){
//                 this.title = element.title;
//                 this.time = element.time;
//                 this.contens = element.contens;
//             }
//         });
//         document.title = this.title + '-芒果看点';
//     },
//     methods: {
//         // 过去链接头部键值对
//         getRequestr(){
//             var str = location.search;        //  ?userName=zhanghao$userId=123
//             if (str) {
//                 var url = str.substr(1), arr = url.split('&'), len = arr.length, i = 0, request = {};        //        ["userName=zhanghao", "userId=123"]
//                 for (; i < len; i++) {
//                     request[arr[i].split('=')[0]] = arr[i].split('=')[1];             //     ["userName", "zhanghao"]  ["userId", "123"]
//                 }
//                 return request; //{userName: "zhanghao", userId: "123"}
//             } else {
//                 alert('错误链接');
//             }
//         },
//     },
// });