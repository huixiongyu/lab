









## 习题：

实现的效果：点击对应的tab，如果当前列表折叠，将它显示，如果已被显示，将其折叠起来。

![tabfold](http://otyq9b60e.bkt.clouddn.com/18-9-4/7446559.jpg)

代码部分：

```JavaScript
<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
	<title>Document</title>
	<style type="text/css">
    *{margin:0;
     padding:0;
     font-size:13px;
     list-style:none;}

.menu{width:210px;
      margin:50px auto;
      border:1px solid #ccc;}

.menu p{height:25px;
        line-height:25px;
        font-weight:bold;
        background:#eee;
        border-bottom:1px solid #ccc;
        cursor:pointer;
        padding-left:5px;}

.menu div ul{display:none;}

.menu li{height:24px;
         line-height:24px;
         padding-left:5px;}
</style>
	<script type="text/javascript">
	window.onload=function(){
		//要填充代码部分
	}
	</script>
</head>
<body>
	<div class="menu" id="menu">
		<div>
			<p>Web前端</p>
			<ul style="display:block">
				<li>JavaScript</li>
				<li>DIV+CSS</li>
				<li>jQuery</li>
			</ul>
		</div>
		<div>
			<p>后台脚本</p>
			<ul>
				<li>PHP</li>
				<li>ASP.net</li>
				<li>JSP</li>
			</ul>
		</div>
		<div>
			<p>前端框架</p>
			<ul>
				<li>Extjs</li>
				<li>Esspress</li>
				<li>YUI</li>
			</ul>
		</div>
	</div>
</body>
</html>
```

需要在script之间填写代码，思路提示：

1. 将所有点击的标题和要显示隐藏的列表取出来
2. 遍历所有要点击的标题且给它们添加索引及绑定事件
3. 获取点击的标题上的索引属性，根据该索引找到对应的列表
4. 判断该列表，如果是显示的则将其隐藏，如果是隐藏的则将其显示出来

遮住下面的答案想一下哦！

我

是

分

割

线

---

```javascript
      var menu = document.getElementById('menu');
      var pt= menu.getElementsByTagName('p');
      var uls = menu.getElementsByTagName('ul');
      for(var i in pt){
    	pt[i].id = i;
    	pt[i].onclick = function(){
        	var uclick = uls[this.id];
        	if(uclick.style.display == 'block'){
            	uclick.style.display = 'none'
        	}else{
            	uclick.style.display = 'block';
       		}
    	}
```















