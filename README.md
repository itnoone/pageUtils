# pageUtils
基于jquery的分页插件
采用jquery手写分页组件，实现页面显示的页码数量固定，并且当前页在中间显示。

## 实现思路
从后台传来的数据包括：当前页数、总页数、等等
下面代码实现的效果就是：根据总页数进行判断，如果总页数小于五个 则加载所有页，大于5页的话就加载当前页码的前2页和后2页，当前页码在中间显示。以下代码的思路很重要，可以忽略onclick事件和a标签 这些都是根据业务 需求进行改变的。

## 引用
直接将此js文件引入到项目中去，将后台返回的json数据传入这个js的方法中去，就会在指定的div组件上构造一个分页组件

## 效果图
![image](https://github.com/itnoone/pageUtils/images/2019011817080633.png)
![image](https://github.com/itnoone/pageUtils/images/20190118170908250.png)
