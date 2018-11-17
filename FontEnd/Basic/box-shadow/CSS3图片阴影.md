课程来源慕课网-[CSS3实现"图片阴影"效果](https://www.imooc.com/view/240)

需要完成的效果：

![阴影](http://otyq9b60e.bkt.clouddn.com/18-7-29/41476660.jpg)

1.边框的内阴影和外阴影，外阴影有一个曲边的效果

2.三种图片被相框包裹，然后下方有翘边阴影，所谓翘边阴影是纸质折弯然后翘起来的感觉。

## 内阴影和外阴影

主要用到CSS3的box-shadow

功能：添加一个或多个阴影

语法：box-shadow:h-shadow v-shadow blur spread color inset

h-shadow（必需）：水平阴影的位置。允许负值

v-shadow（必需）：垂直阴影的位置，允许负值

blur（可选）：模糊距离

spread（可选）：阴影的尺寸

color（可选）：阴影的颜色，参考[CSS颜色值](http://xh.5156edu.com/page/z1015m9220j18754.html)

inset（可选）：将外部阴影（outset改为内部阴影） 



**代码：**

index.html

```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>阴影效果</title>
    <link rel="stylesheet" type="text/css" href="css/style.css">
</head>
<body>
    <div class="wrap effect">
        <h3>shadow content</h3>
    </div>
</body>
</html>
```

style.css

body定义字体和字号；

确定内容盒子的定位，采用相对定位；

box-shadow的设置：第一个参数是水平阴影位置，相当于div盒子的height的一侧；第二个参数是垂直阴影位置，是div盒子width一侧；第三个参数设置模糊程度。设置内边距要加逗号，然后末尾加inset。

内阴影如果前两个设置为0，那样颜色是沿着四个方向的，然后设置模糊程度即可如果前两个有数值，那么正值是从左边和上边开始 。

为了兼容浏览器加了webkit和moz

```
body{
    font-family: Arial;
    font-size: 23px;
}

.wrap h3{
    text-align: center;
    position: relative;
    top:80px;
}

.wrap{
    width: 70%;
    height: 200px;
    background: #FFF;
    margin:40px auto;
}

.effect{
    position: relative;
    box-shadow: 0 1px 4px rgba(0,0,0,0.3),0 0 40px rgba(0,0,0,0.1) inset;
    -webkit-box-shadow:0 1px 4px rgba(0, 0, 0, 0.3) , 0 0 40px rgba(0, 0, 0, 0.1) inset;
   	-moz-box-shadow:0 1px 4px rgba(0, 0, 0, 0.3), 0 0 40px rgba(0, 0, 0, 0.1) inset; 
}
.effect:before{
    content:'';
    position: absolute;
    top:50%;
    bottom:0;
    left: 10px;
    right: 10px;
    background: yellow;
}
```

:before 选择器在被选元素的内容前面插入内容。 目的就是设置曲边阴影，为了呈现效果我加了黄色背景。注意四个边的尺寸设置缺一不可

说明：需使用content属性来指定要插入的内容 ,我们设置为空。

![yellow](http://otyq9b60e.bkt.clouddn.com/18-7-29/90923298.jpg)

设置曲边使用border-radius

` border-radius: 100px/10px;` 不能使用` border-radius: 100px 10px;`

否则样式会变样

![niu](http://otyq9b60e.bkt.clouddn.com/18-7-29/52145697.jpg)

border-radius还有很多不同的设置，只有一个值的时候会设置四个角，两个值设置水平两端，更多内容查看[MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/border-radius) 

为了使曲边作为模糊边，需要对:before添加box-shadow扩大模糊边缘，而设置的区域遮挡了div，添加z-index叠放到底下，再添加:after可以加载曲边阴影的感觉。

仅：before

![ligth](http://otyq9b60e.bkt.clouddn.com/18-7-29/47145117.jpg)

多添加:after

![after](http://otyq9b60e.bkt.clouddn.com/18-7-29/10691812.jpg)

修改后的代码：

```
.effect:before,.effect:after{
    content:'';
    position: absolute;
    z-index: -1;
    top:50%;
    bottom:0;
    left: 10px;
    right: 10px;
    background: yellow;
    border-radius: 100px / 10px;
    box-shadow: 0 0 20px rgba(0,0,0,0.8);
    -webkit-box-shadow: 0 0 20px rgba(0,0,0,0.8);
    -moz-box-shadow: 0 0 20px rgba(0,0,0,0.8);
    -o-box-shadow: 0 0 20px rgba(0,0,0,0.8);
}
```

## 翘边阴影

使用到了CSS3的transform：向元素应用2D或3D转换

语法：transform：none|transform-functions

参数：

skew(x-angle,y-angle)定义沿着X和Y轴的2D倾斜转换

skewX(angle）定义沿着X轴的2D倾斜转换

skewY(angle)定义沿着Y轴的2D倾斜转换  

index.html添加：

```
    <ul class="box">
        <li><img src="images/photo1.jpg"></li>
        <li><img src="images/photo2.jpg"></li>
        <li><img src="images/photo3.jpg"></li>
    </ul>
```

style.css添加

```
ul.box{
    width: 980px;
    height: auto;
    margin: 20px auto;
    padding: 0;
    clear:both;
    overflow: hidden;
}
ul.box li{
    list-style-type: none;
    margin:20px 10px;
    padding: 0;
    width: 300px;
    height: 220px;
    border:2px solid #efefef;
    position: relative;
    float: left;
    background: #ffffff;
    line-height: 220px;
    font-size: 32px;
    text-align: center;

    box-shadow: 0 1px 4px rgba(0,0,0,0.27),0 0 60px rgba(0,0,0,0.1) inset;
    -webkit-box-shadow: 0 1px 4px rgba(0,0,0,0.27),0 0 60px rgba(0,0,0,0.1) inset;
    -moz-box-shadow: 0 1px 4px rgba(0,0,0,0.27),0 0 60px rgba(0,0,0,0.1) inset;
    -o-box-shadow: 0 1px 4px rgba(0,0,0,0.27),0 0 60px rgba(0,0,0,0.1) inset;
}
.box li img{
    width: 290px;
    height: 210px;
    padding: 5px;
}
```

ul.box设置距离上边盒子外边距20px;

` clear:both;`图像的左侧和右侧均不允许出现浮动元素： 

`overflow:hidden;`规定内容溢出不可见，见[W3C](http://www.w3school.com.cn/cssref/pr_pos_overflow.asp) 

li和img标签是相互关联的，注意li定义的width、height比img的大10px,然而img设置了padding为5px,它的两倍就是10px，因为padding是内边距，也就是图片内容以外到li盒子边界的距离。

li标签要取消list样式，然后设置浮动也图片之间的距离。

模糊效果延伸到图片里头，但是不透明度设置很低。

![qiaobian1](http://otyq9b60e.bkt.clouddn.com/18-7-29/30917342.jpg)

skew()正值向左倾斜，负值向右倾斜；

rotate（）正值顺时针旋转，负值逆时针旋转

![旋转](http://otyq9b60e.bkt.clouddn.com/18-7-29/69746164.jpg)

可以看出如果黄色区域设置透明，左下角就有翘边的效果，然而只有一边不对称，故添加:after，旋转和倾斜方向则相反。最后通过z-index把块放到图片下边即可。

代码补充：

```
ul.box li:before{
    position: absolute;
    z-index: -1;
    background: transparent;
    width: 90%;
    height: 80%;
    left: 20px;
    bottom:8px;
    content: '';
    transform: skew(-12deg) rotate(-4deg); 
    -web-kit-transform: skew(-12deg) rotate(-4deg); 
    -moz-transform: skew(-12deg) rotate(-4deg); 
    -o-transform: skew(-12deg) rotate(-4deg); 

    box-shadow: 0 8px 20px rgba(0,0,0,0.6);
    -webkit-box-shadow: 0 8px 20px rgba(0,0,0,0.6);
    -moz-box-shadow: 0 8px 20px rgba(0,0,0,0.6);
    -o-box-shadow: 0 8px 20px rgba(0,0,0,0.6);
}
ul.box li:after{
    position: absolute;
    z-index: -1;
    background: transparent;
    width: 90%;
    height: 80%;
    left: 20px;
    bottom:8px;
    content: '';
    transform: skew(12deg) rotate(4deg); 
    -web-kit-transform: skew(12deg) rotate(4deg); 
    -moz-transform: skew(12deg) rotate(4deg); 
    -o-transform: skew(12deg) rotate(4deg); 

    box-shadow: 0 8px 20px rgba(0,0,0,0.6);
    -webkit-box-shadow: 0 8px 20px rgba(0,0,0,0.6);
    -moz-box-shadow: 0 8px 20px rgba(0,0,0,0.6);
    -o-box-shadow: 0 8px 20px rgba(0,0,0,0.6);
}
```

![final](http://otyq9b60e.bkt.clouddn.com/18-7-29/97737533.jpg)

