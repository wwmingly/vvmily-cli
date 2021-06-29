
本脚手架搭建，目的就是减少一些复制粘贴，把公共部分作为一个模板进行维护
![](images/screenshot_1624879951357.png)

使用，全局安装：

```
npm install -g vvmily-cli
```
通过脚手架clone模板：`vvmily create xxx`
当在git bash中，上下键不能选择，可使用： `winpty vvmily-cli.cmd create admin-demo
`
![](images/screenshot_1624931599031.png)
1. 借助几个依赖，有兴趣的可以学习一下
```
"alphabetjs": "^0.1.4",  //  展示字母，装逼使用！！！
"chalk": "^4.1.0", // 颜色变化
"commander": "^6.2.1", 
"download-git-repo": "^3.0.2", // 下载使用
"inquirer": "^7.3.3",
"ora": "^5.2.0", // 动画
"shelljs": "^0.8.4" // 使用shell
```
Github地址：https://github.com/wwmingly/vvmily-cli.git

模板配置说明
1. config/index.js
```
constdefaultUrlList = [

    {

        key: "a", // 唯一值，不可重复
        
        name: "vvmily管理后台模板", // 选择时模板名称
        
        value: "direct:https://github.com/wwmingly/vue-demo", // direct:+git地址

    },
    {

        key: "b",
        
        name: "antd-admin后台管理框架",
        
        value: "direct:https://github.com/zuiidea/antd-admin",

    }

]

  
  
  

module.exports = defaultUrlList
```


目录结构：
![](images/screenshot_1624928841935.png)