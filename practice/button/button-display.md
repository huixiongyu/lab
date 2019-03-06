项目地址: [点我啊](https://github.com/huixiongyu/projectCamp/tree/master/web/original/button)

参考课程：[慕课网-按钮特效](https://www.imooc.com/learn/5)

关键技术：

* transform
* transition
* box-sizing
* border-radius



![abutton](http://otyq9b60e.bkt.clouddn.com/18-9-2/72382521.jpg)

效果：

* 鼠标滑过icon时图标会放大并旋转360°
* 鼠标滑过按钮，四边有线条进入效果，箭头会轻微地向右移动
* 鼠标在按钮上，会显示提示的文本

## 基础结构

![fundation](http://otyq9b60e.bkt.clouddn.com/18-9-2/54980649.jpg)

把三个块放进盒子中类名box，每个盒子包含icon和button，其中button上会有四边的渐变特效用span来设置。

样式上设置盒子宽800px高280px，顶部底部有50px的外边距，左右自适应。

然后每个块设定宽205px高280px，元素向左浮动，会产生20px的外边距（间距）。

icon的显示是块元素，因此display为inlineblock；而引入的图标大小不是类span实际的宽高，原因是图标会放大，故设定图标 x 放大倍数为类span实际尺寸，便于查看，背景颜色设置为红。

index.html

```html
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>按钮特效</title>
	<link rel="stylesheet" type="text/css" href="./css/style.css">
</head>
<body>
	<div class="box">
		<div class="link link-miss">
			<span class="icon"></span>
			<a href="#" class="button" data="My misson is clear">
				<span class="line line-top"></span>
				<span class="line line-right"></span>
				<span class="line line-bottom"></span>
				<span class="line line-left"></span>								
				MISSON
			</a>
		</div>
		<div class="link link-play">
			<span class="icon"></span>
			<a href="#" class="button" data="This is my play">
				<span class="line line-top"></span>
				<span class="line line-right"></span>
				<span class="line line-bottom"></span>
				<span class="line line-left"></span>								
				PLAY
			</a>
		</div>
		<div class="link link-touch">
			<span class="icon"></span>
			<a href="#" class="button" data="This is my touch">
				<span class="line line-top"></span>
				<span class="line line-right"></span>
				<span class="line line-bottom"></span>
				<span class="line line-left"></span>								
				TOUCH
			</a>
		</div>				
	</div>
</body>
</html>
```

css/style.css

```css
*{
	margin: 0;
	padding: 0;
}

body{
	background: #333;
}

.box{
	width:800px;
	height: 280px;
	margin: 50px auto;
}

.box .link{
	width: 205px;
	height: 280px;
	float: left;
	margin: 0 20px;
}

.link .icon{
	display: inline-block;
	width: 100%;
	height: 190px;
}

.link-miss .icon{
	background:#f00 url(../images/mission.png) no-repeat center center;
}

.link-play .icon{
	background:#f00 url(../images/play.png) no-repeat center center;
}

.link-touch .icon{
	background:#f00 url(../images/touch.png) no-repeat center center;
}

```

## 图标的特效：应用transform、transition

![rotate](http://otyq9b60e.bkt.clouddn.com/18-9-2/70434058.jpg)

实现图标旋转使用[transform属性(MDN介绍)](https://developer.mozilla.org/en-US/docs/Web/CSS/transform)。

[transform 属性(W3s)](http://www.w3school.com.cn/cssref/pr_transform.asp)向元素应用 2D 或 3D 转换。该属性允许我们对元素进行旋转(rotate)、缩放(scale)、移动或倾斜(skew)。

./css/style.css

```css
.link .icon:hover{
	transform: rotate(360deg) scale(1.2);
	-ms-transform: rotate(360deg) scale(1.2);
	-moz-transform: rotate(360deg) scale(1.2);
	-webkit-transform: rotate(360deg) scale(1.2);
	-o-transform: rotate(360deg) scale(1.2);	
}
```

![shengying](http://otyq9b60e.bkt.clouddn.com/18-9-2/61665512.jpg)

但是，此时的效果显得有些生硬，从基础大小变大到1.2倍的时候没有一个过渡效果，旋转360°初始和终止状态一样，效果上并没有从0-360的中间状态。因此使用到[transition属性(MDN)](https://developer.mozilla.org/zh-CN/docs/Web/CSS/CSS_Transitions/Using_CSS_transitions)。

语法：

`transition: <property> <duration> <timing-function> <delay>;`

该属性简写了四个过渡属性：

* transition-property

* transition-duration

* transition-timing-function

* transition-delay

作用：

* [transition-property](http://www.w3school.com.cn/cssref/pr_transition-property.asp)规定设置过渡效果的 CSS 属性的名称。

* [transition-duration](http://www.w3school.com.cn/cssref/pr_transition-duration.asp)规定完成过渡效果需要多少秒或毫秒。

* [transition-timing-function](http://www.w3school.com.cn/cssref/pr_transition-timing-function.asp)规定速度效果的速度曲线。

* [transition-delay](http://www.w3school.com.cn/cssref/pr_transition-delay.asp)定义过渡效果何时开始。

值得一提的是transition-timing-function属性设置[速度效果曲线](https://easings.net/zh-cn)，也叫贝塞尔曲线，图示有多种缓动函数可以选择（函数名替换下面代码中的ease-out）,横轴是时间，纵轴的相对于终止状态的位置（或尺寸）。

![timing-function](http://otyq9b60e.bkt.clouddn.com/18-9-2/67616437.jpg)

在./css/style.css的.link .icon中添加过渡效果：

```css
.link .icon{
	display: inline-block;
	width: 100%;
	height: 190px;
	transition: 0.2s ease-out;
	-moz-transition: 0.2s ease-out;
	-webkit-transition: 0.2s ease-out;
	-o-transition: 0.2s ease-out;
}
```

过渡效果要在没有变化之前添加，而不是放到:hover或者:link之类的伪类上。

## 按钮及其过渡效果

![button-and-line](http://otyq9b60e.bkt.clouddn.com/18-9-2/288583.jpg)

对a标签设置按钮效果，宽180px高50px，取消下划线，文字颜色#2DCB70，边框2px，内边距20px，加起来跟.box的width差不多,鼠标滑过的时候边框透明度有变化，设置opacity为0.8。

./css/style.css

```css
.button{
/*	display: block;
*/	width: 180px;
	height: 50px;
	line-height: 50px;
	text-decoration: none;
	color: #2DCB70;
	font-family: Arial;
	font-weight: bolder;
	border: 2px solid rgba(255,255,255,0.8);
	padding-left: 20px;
	margin: 0 auto;
}
```

当没有设置[display](http://www.w3school.com.cn/cssref/pr_class_display.asp)属性值为block的时候，按钮显示得有点小，不要忘记添加这个重要的属性。

![small](http://otyq9b60e.bkt.clouddn.com/18-9-2/72592188.jpg)

![big](http://otyq9b60e.bkt.clouddn.com/18-9-2/44650263.jpg)

此时，可以算出按钮的大小是180px+20px+2px+2px=204px,但是如果我们希望改变盒子的大小，不想通过 **预期大小-内边距-边框大小**的方式来确定width，就需要使用[box-sizing属性](https://www.jianshu.com/p/e2eb0d8c9de6)，设置值border-box之后，width和height大小就是实际的显示大小，内边距和边框自动调整。

类.button添加：

```css
	box-sizing: border-box;
	-ms-box-sizing: border-box;
	-o-box-sizing: border-box;
	-moz-box-sizing: border-box;
	-webkit-box-sizing: border-box;
```

鼠标滑过button的时候边框透明度变化，并且箭头向右滑动。

类.button中添加箭头作为背景，位置水平130px,垂直居中。因滑动的过程有过渡效果，添加transition属性。

```
	background: url(../images/allow.png) no-repeat 130px center;
	transition: 0.4s ease;
	-moz-transition: 0.4s ease;
	-webkit-transition: 0.4s ease;
	-o-transition: 0.4s ease;	
```

.css/style.css

```css
.button:hover{
	border: 2px solid rgba(255,255,255,1);
	background-position: 140px center;
}
```

![allowhover](http://otyq9b60e.bkt.clouddn.com/18-9-2/35025163.jpg)

接着设计线条的特效，线条放在button下面的span，位置上是相对于父元素.button的绝对定位，因此需要在类.button中添加`position: relative;`

![allow](http://otyq9b60e.bkt.clouddn.com/18-9-2/4296005.jpg)

因为线条有渐变效果，实际上初始状态下线头在button外面，最后跟按钮所在的边重合，属性上，线条初始状态背景是none，鼠标滑动到按钮上是白色实线，记得需要有过渡效果才会显示出前后的变化。

./css/style.css

```css
.button .line{
	display: block;
	position: absolute;
	background: none;
	transition: 0.4s ease;
	-moz-transition: 0.4s ease;
	-webkit-transition: 0.4s ease;
	-o-transition: 0.4s ease;		
}

.button:hover .line{
	background: #fff;
}
```

具体设置每个线条的变化，以.line-top的span为例，初始状态下高2px,宽为0，位置在按钮以外，top值是-2px 。鼠标在按钮上时（最终状态）width是100%，left是-2px。

高是2px不难理解，其他属性值可能有有疑惑。首先span是相对于盒子对齐，不是和边框对齐，最终状态下left和top是-2px；其次线条从外到里的变化是从点到线的变化过程，width初始为0到终态100%。

![line-top](http://otyq9b60e.bkt.clouddn.com/18-9-2/13283937.jpg)

类.line-top的代码：

```css
.button .line-top{
	height: 2px;
	width: 0px;
	left: -110%;
	top: -2px;
}

.button:hover .line-top{
	width: 100%;
	left: -2px;
}
```

现在梳理一下各边初始状态下的位置和属性

```css
.button .line-top{
	height: 2px;
	width: 0px;
	left: -110%;
	top: -2px;
}
.button .line-right{
	width: 2px;
	height: 0px;
	top: -110%;
	right: -2px;
}

.button .line-bottom{
	height: 2px;
	width: 0px;
	right: -110%;
	bottom: -2px;
}

.button .line-left{
	width: 2px;
	height: 0px;
	bottom: -110%;
	left: -2px;
}
```

最终状态下的属性：

```
.button:hover .line-top{
	width: 100%;
	left: -2px;
}

.button:hover .line-right{
	height: 100%;
	top: -2px;
}

.button:hover .line-bottom{
	width: 100%;
	right: -2px;
}

.button:hover .line-left{
	height: 100%;
	bottom: -2px;
}
```

![line-perform](http://otyq9b60e.bkt.clouddn.com/18-9-2/111661.jpg)

 ## 提示框制作

![hover-succ](http://otyq9b60e.bkt.clouddn.com/18-9-3/80800265.jpg)

提示信息框相对于类.box，不能相对于小于自己的盒子，因此在类.box设置`position:relative;` 

padding的左右14px撑开宽度，高35px，背景绿色，字体颜色为白色，字体大小18px，无外边距，圆角为3px,定位到距离盒子顶部100px，提示框是从无到有，opacity值为0；元素em用来存放获取到的文字。

[border-radius](http://www.w3school.com.cn/cssref/pr_border-radius.asp)属性是一个简写属性，用于设置四个border-*-radius 属性。

./css/style.css设置：

```css
.tip{
	position: absolute;
	padding:0 14px;
	height: 35px;
	line-height: 35px;
	background: #2DCB70;
	color: #fff;
	font-size: 18px;
	margin: 0 auto;
	border-radius: 3px;
	-ms-border-radius: 3px;
	-moz-border-radius: 3px;
	-webkit-border-radius: 3px;
	-o-border-radius: 3px;
	top: 160px;
	opacity: 0;
}

.tip em{
	font-style: normal;
}
```

![border](http://otyq9b60e.bkt.clouddn.com/18-9-2/96918409.jpg)

写提示框下面的三角形用的是border属性，当设置border边框为透明的时候，设置其中一条边的颜色就可以形成一个三角形;用bottom定位三角形的位置。

![triangle](http://otyq9b60e.bkt.clouddn.com/18-9-2/16652083.jpg)

```css

.tip span{
	display: block;
    position: absolute;
	width: 0;
	height: 0;
	overflow: hidden;
	border: 7px solid transparent;
	border-top-color: #2DCB70;
	bottom: -14px;
	left: 50%;
	margin-left: -3px;
}
```

![with-triangle](http://otyq9b60e.bkt.clouddn.com/18-9-2/51433198.jpg)

获取a标签的data属性文字，需要使用jQuery，在index.html的head之间引入，并且在文件夹js下新建自己script.js文件。

```html
	<script src="./js/jquery-1.8.3.min.js"></script>
	<script src="./js/script.js"></script>
```

script.js中操作对象是类.link下的.button，鼠标悬浮在按钮上获取a标签data值放在em标签作为填充文字，然后调整tip提示框的位置。

jQuery中[offset()方法](http://www.w3school.com.cn/jquery/css_offset.asp)返回或设置匹配元素相对于文档的偏移（位置），该.button是相对于盒子.box（因为position:relative;）

他们的相对位置可以看下图：

![offset](http://otyq9b60e.bkt.clouddn.com/18-9-3/59756701.jpg)

要使提示框居中在按钮中，取得提示框到相对盒子的左边距，还需要减去提示框和按钮宽度的差的一半。确定了位置之后使用animate设置过渡效果为可显示,注意要设置鼠标离开按钮的效果（回到原来的位置），否则会导致仅第一次才有透明度变化的效果。

```javascript
$(function(){
	$('.link .button').hover(function(){
		var title = $(this).attr('data');
		$('.tip em').text(title);
		var pos = $(this).offset().left+10;
		var dis =($('.tip').outerWidth() - $(this).outerWidth())/2;
		var l = pos - dis;
		$('.tip').css({'left': l + 'px'}).animate({'top': 200,'opacity': 1},300)
	},function(){
		$('.tip').animate({'top':160,'opacity':0},300);
	})
})
```

![bug](http://otyq9b60e.bkt.clouddn.com/18-9-3/83674531.jpg)

但是**仍然存在一个bug** ，表现是反复的切换按钮然后离开以后，按钮上的提示框会出现好几回，原因是频繁触发的时候按钮的动画队列中有事件。修改方法很简单，只需要将hover的离开函数增加动画判断。

```javascript
function(){
	if(!$('.tip').is(':animated')){
						$('.tip').animate({'top':160,'opacity':0},300);
	}
}
```

## 所有代码：

index.html

```html
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>按钮特效</title>
	<link rel="stylesheet" type="text/css" href="./css/style.css">
	<script src="./js/jquery-1.8.3.min.js"></script>
	<script src="./js/script.js"></script>
</head>
<body>
	<div class="box">
		<div class="link link-miss">
			<span class="icon"></span>
			<a href="#" class="button" data="My misson is clear">
				<span class="line line-top"></span>
				<span class="line line-right"></span>
				<span class="line line-bottom"></span>
				<span class="line line-left"></span>								
				MISSON
			</a>
		</div>
		<div class="link link-play">
			<span class="icon"></span>
			<a href="#" class="button" data="This is my play">
				<span class="line line-top"></span>
				<span class="line line-right"></span>
				<span class="line line-bottom"></span>
				<span class="line line-left"></span>								
				PLAY
			</a>
		</div>
		<div class="link link-touch">
			<span class="icon"></span>
			<a href="#" class="button" data="This is my touch">
				<span class="line line-top"></span>
				<span class="line line-right"></span>
				<span class="line line-bottom"></span>
				<span class="line line-left"></span>								
				TOUCH
			</a>
		</div>			
		<div class="tip">
				<em></em>
				<span></span>
		</div>	
	</div>
</body>
</html>
```

./css/style.css

```css
*{
	margin: 0;
	padding: 0;
}

body{
	background: #333;
}

.box{
	width:800px;
	height: 280px;
	margin: 50px auto;
}

.box .link{
	width: 205px;
	height: 280px;
	float: left;
	position: relative;
	margin: 0 20px;
}

.link .icon{
	display: inline-block;
	width: 100%;
	height: 190px;
	transition: 0.2s ease-out;
	-moz-transition: 0.2s ease-out;
	-webkit-transition: 0.2s ease-out;
	-o-transition: 0.2s ease-out;
}

.link-miss .icon{
	background:url(../images/mission.png) no-repeat center center;
}

.link-play .icon{
	background: url(../images/play.png) no-repeat center center;
}

.link-touch .icon{
	background: url(../images/touch.png) no-repeat center center;
}

.link .icon:hover{
	transform: rotate(360deg) scale(1.2);
	-ms-transform: rotate(360deg) scale(1.2);
	-moz-transform: rotate(360deg) scale(1.2);
	-webkit-transform: rotate(360deg) scale(1.2);
	-o-transform: rotate(360deg) scale(1.2);	
}

.button{
	display: block;
	position: relative;
	width: 180px;
	height: 50px;
	line-height: 50px;
	text-decoration: none;
	color: #2DCB70;
	font-family: Arial;
	font-weight: bolder;
	border: 2px solid rgba(255,255,255,0.8);
	padding-left: 20px;
	margin: 0 auto;
	box-sizing: border-box;
	-ms-box-sizing: border-box;
	-o-box-sizing: border-box;
	-moz-box-sizing: border-box;
	-webkit-box-sizing: border-box;
	background: url(../images/allow.png) no-repeat 130px center;
	transition: 0.4s ease;
	-moz-transition: 0.4s ease;
	-webkit-transition: 0.4s ease;
	-o-transition: 0.4s ease;	
}

.button:hover{
	border: 2px solid rgba(255,255,255,1);
	background-position: 140px center;
}

.button .line{
	display: block;
	position: absolute;
	background: none;
	transition: 0.4s ease;
	-moz-transition: 0.4s ease;
	-webkit-transition: 0.4s ease;
	-o-transition: 0.4s ease;		
}

.button:hover .line{
	background: #fff;
}

.button .line-top{
	height: 2px;
	width: 0px;
	left: -110%;
	top: -2px;
}

.button:hover .line-top{
	width: 100%;
	left: -2px;
}

.button .line-right{
	width: 2px;
	height: 0px;
	top: -110%;
	right: -2px;
}

.button:hover .line-right{
	height: 100%;
	top: -2px;
}

.button .line-bottom{
	height: 2px;
	width: 0px;
	right: -110%;
	bottom: -2px;
}

.button:hover .line-bottom{
	width: 100%;
	right: -2px;
}

.button .line-left{
	width: 2px;
	height: 0px;
	bottom: -110%;
	left: -2px;
}

.button:hover .line-left{
	height: 100%;
	bottom: -2px;
}

.tip{
	position: absolute;
	padding:0 14px;
	height: 35px;
	line-height: 35px;
	background: #2DCB70;
	color: #fff;
	font-size: 18px;
	margin: 0 auto;
	border-radius: 3px;
	-ms-border-radius: 3px;
	-moz-border-radius: 3px;
	-webkit-border-radius: 3px;
	-o-border-radius: 3px;
	top: 160px;
	opacity: 0;
}

.tip em{
	font-style: normal;
}

.tip span{
	display: block;
	position: absolute;
	width: 0;
	height: 0;
	overflow: hidden;
	border: 7px solid transparent;
	border-top-color: #2DCB70;
	bottom: -14px;
	left: 50%;
	margin-left: -3px;
}
```

./js/script.js

```javascript
$(function(){
	$('.link .button').hover(function(){
		var title = $(this).attr('data');
		$('.tip em').text(title);
		var pos = $(this).offset().left;
		var dis =($('.tip').outerWidth() - $(this).outerWidth())/2;
		var l = pos - dis;
		$('.tip').css({'left': l + 'px'}).animate({'top': 200,'opacity': 1},300)
	},function(){
			if(!$('.tip').is(':animated')){
				$('.tip').animate({'top':160,'opacity':0},300)
			}
	})
})
```

## 补充：关于按钮

input标签典型的type有button、submit和reset，如果标签用图片作为背景，默认动作会被取消，并且没有交互效果，宽高不可自适应。

我们通常会使用a标签制作按钮，它的优点是：

1. 没有默认事件
2. 可以用css模拟成按钮外观，并做到宽度自适应
3. 可以增加上交互效果，且浏览器均兼容

如果使用a贴图作为按钮，比如贴成有左右圆角的按钮，需要在a标签之间添加span标签，a标签添加padding-left，span标签中添加padding-right可以使得按钮成形。

设置伪类效果的时候 ，首先对a:hover，另外对span设置伪类可以使用`a:hover span` 

CSS3做圆角效果则设置类，使用border-radius即可。









