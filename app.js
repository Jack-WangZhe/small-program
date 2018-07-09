/*
    小程序根目录下需要三个文件
        app.js
            - 必须有
            - 它是小程序的全局脚本文件

        app.json
            - 必须有
            - 全局配置文件
        
        app.wxss
            - 可选的
            - 全局样式表
*/

//调用App()函数注册小程序
App({
  onLaunch: function () {
    //回调函数 小程序加载时调用
  },
  onShow: function () {
    //回调函数 小程序显示时调用
  },
  onHide: function () {
    //回调函数 小程序隐藏时调用
  },
  onError: function (msg) {
    //回调函数 小程序报错时调用
  },

  //还可以添加一些属性
  //这些属性可以在项目的任意位置访问
  hello:"你好"
  
})