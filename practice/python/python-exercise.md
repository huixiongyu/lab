## 题-1 

**题目：**有四个数字：1、2、3、4，能组成多少个互不相同且无重复数字的三位数？各是多少？
**程序分析：**可填在百位、十位、个位的数字都是1、2、3、4。组成所有的排列后再去
掉不满足条件的排列。

## 题-2 

**题目：**企业发放的奖金根据利润提成。利润(I)低于或等于10万元时，奖金可提10%；利润高于10万元，低于20万元时，低于10万元的部分按10%提成，高于10万元的部分，可提成7.5%；20万到40万之间时，高于20万元的部分，可提成5%；40万到60万之间时高于40万元的部分，可提成3%；60万到100万之间时，高于60万元的部分，可提成1.5%，高于100万元时，超过100万元的部分按1%提成，从键盘输入当月利润I，求应发放奖金总数？
**程序分析：**请利用数轴来分界，定位。注意定义时需把奖金定义成长整型。

## 题-3 

**题目：**一个整数，它加上100后是一个完全平方数，再加上168又是一个完全平方数，请问该数是多少？
**程序分析：**
假设该数为 x。
1、则：x + 100 = n<sup>2</sup>, x + 100 + 168 = m<sup>2</sup>
2、计算等式：m<sup>2</sup> - n<sup>2</sup> = (m + n)(m - n) = 168
3、设置： m + n = i，m - n = j，i * j =168，i 和 j 至少一个是偶数
4、可得： m = (i + j) / 2， n = (i - j) / 2，i 和 j 要么都是偶数，要么都是奇数。
5、从 3 和 4 推导可知道，i 与 j 均是大于等于 2 的偶数。
6、由于 i * j = 168， j>=2，则 **1 &lt; i &lt; 168 / 2 + 1**。
7、接下来将 i 的所有数字循环计算即可。

## 题-4 

**题目：**输入某年某月某日，判断这一天是这一年的第几天？
**程序分析：**以3月5日为例，应该先把前两个月的加起来，然后再加上5天即本年的第几天，特殊情况，闰年且输入月份大于2时需考虑多加一天：

## 题-5 

**题目：**输入三个整数x,y,z，请把这三个数由小到大输出。
**程序分析：**我们想办法把最小的数放到x上，先将x与y进行比较，如果x>y则将x与y的值进行交换，然后再用x与z进行比较，如果x>z则将x与z的值进行交换，这样能使x最小。

## 题-6 

**题目：**斐波那契数列。 
**程序分析：**斐波那契数列（Fibonacci sequence），又称黄金分割数列，指的是这样一个数列：0、1、1、2、3、5、8、13、21、34、……。

在数学上，费波那契数列是以递归的方法来定义：

## 题-7 

**题目：**将一个列表的数据复制到另一个列表中。
**程序分析：**使用列表[:]。

## 题-8 

**题目：**输出 9*9 乘法口诀表。
**程序分析：**分行与列考虑，共9行9列，i控制行，j控制列。

## 题-9 

**题目：**暂停一秒输出。 
**程序分析：**使用 time 模块的 sleep() 函数。

## 题-10 

**题目：**暂停一秒输出，并格式化当前时间。 
**程序分析：**无。

## 题-11 

**题目：**古典问题：有一对兔子，从出生后第3个月起每个月都生一对兔子，小兔子长到第三个月后每个月又生一对兔子，假如兔子都不死，问每个月的兔子总数为多少？ 
**程序分析：**兔子的规律为数列1,1,2,3,5,8,13,21....

## 题-12 

**题目：**判断101-200之间有多少个素数，并输出所有素数。
**程序分析：**判断素数的方法：用一个数分别去除2到sqrt(这个数)，如果能被整除，则表明此数不是素数，反之是素数。 　　　　　

## 题-13 

**题目：**打印出所有的"水仙花数"，所谓"水仙花数"是指一个三位数，其各位数字立方和等于该数本身。例如：153是一个"水仙花数"，因为153=1的三次方＋5的三次方＋3的三次方。
**程序分析：**利用for循环控制100-999个数，每个数分解出个位，十位，百位。

## 题-14 

**题目：**将一个正整数分解质因数。例如：输入90,打印出90=2*3*3*5。
**程序分析：**对n进行分解质因数，应先找到一个最小的质数k，然后按下述步骤完成：
(1)如果这个质数恰等于n，则说明分解质因数的过程已经结束，打印出即可。
(2)如果n<>k，但n能被k整除，则应打印出k的值，并用n除以k的商,作为新的正整数你n,重复执行第一步。
(3)如果n不能被k整除，则用k+1作为k的值,重复执行第一步。

## 题-15 

**题目：**利用条件运算符的嵌套来完成此题：学习成绩>=90分的同学用A表示，60-89分之间的用B表示，60分以下的用C表示。
**程序分析：**程序分析：(a>b)?a:b这是条件运算符的基本例子。

## 题-16 

**题目：**输出指定格式的日期。
**程序分析：**使用 datetime 模块。

## 题-17 

**题目：**输入一行字符，分别统计出其中英文字母、空格、数字和其它字符的个数。
**程序分析：**利用 while 或 for 语句,条件为输入的字符不为 '\n'。

## 题-18 

**题目：**求s=a+aa+aaa+aaaa+aa...a的值，其中a是一个数字。例如2+22+222+2222+22222(此时共有5个数相加)，几个数相加由键盘控制。
**程序分析：**关键是计算出每一项的值。

## 题-19 

**题目：**一个数如果恰好等于它的因子之和，这个数就称为"完数"。例如6=1＋2＋3.编程找出1000以内的所有完数。
**程序分析：**请参照程序<a href="python-exercise-example14.html">题-14</a>。

## 题-20 

**题目：**一球从100米高度自由落下，每次落地后反跳回原高度的一半；再落下，求它在第10次落地时，共经过多少米？第10次反弹多高？
**程序分析：**无

## 题-21 

**题目：**猴子吃桃问题：猴子第一天摘下若干个桃子，当即吃了一半，还不瘾，又多吃了一个第二天早上又将剩下的桃子吃掉一半，又多吃了一个。以后每天早上都吃了前一天剩下的一半零一个。到第10天早上想再吃时，见只剩下一个桃子了。求第一天共摘了多少。
**程序分析：**采取逆向思维的方法，从后往前推断。

## 题-22 

**题目：**两个乒乓球队进行比赛，各出三人。甲队为a,b,c三人，乙队为x,y,z三人。已抽签决定比赛名单。有人向队员打听比赛的名单。a说他不和x比，c说他不和x,z比，请编程序找出三队赛手的名单。 

## 题-23 

**题目：**打印出如下图案（菱形）:
**程序分析：**先把图形分成两部分来看待，前四行一个规律，后三行一个规律，利用双重for循环，第一层控制行，第二层控制列。

## 题-24 

**题目：**有一分数序列：2/1，3/2，5/3，8/5，13/8，21/13...求出这个数列的前20项之和。
**程序分析：**请抓住分子与分母的变化规律。 

## 题-25 

**题目：**求1+2!+3!+...+20!的和。
**程序分析：**此程序只是把累加变成了累乘。  

## 题-26 

**题目：**利用递归方法求5!。
**程序分析：**递归公式：fn=fn_1*4! 

## 题-27 

**题目：**利用递归函数调用方式，将所输入的5个字符，以相反顺序打印出来。
**程序分析：**无。

## 题-28 

**题目：**有5个人坐在一起，问第五个人多少岁？他说比第4个人大2岁。问第4个人岁数，他说比第3个人大2岁。问第三个人，又说比第2人大两岁。问第2个人，说比第一个人大两岁。最后问第一个人，他说是10岁。请问第五个人多大？
**程序分析：**利用递归的方法，递归分为回推和递推两个阶段。要想知道第五个人岁数，需知道第四人的岁数，依次类推，推到第一人（10岁），再往回推。

## 题-29 

**题目：**给一个不多于5位的正整数，要求：一、求它是几位数，二、逆序打印出各位数字。
**程序分析：**学会分解出每一位数。

## 题-30 

**题目：**一个5位数，判断它是不是回文数。即12321是回文数，个位与万位相同，十位与千位相同。
**程序分析：**无。

## 题-31 

**题目：**请输入星期几的第一个字母来判断一下是星期几，如果第一个字母一样，则继续判断第二个字母。
**程序分析：**用情况语句比较好，如果第一个字母一样，则判断用情况语句或if语句判断第二个字母。。

## 题-32 

**题目：**按相反的顺序输出列表的值。
**程序分析：**无。

## 题-33 

**题目：**按逗号分隔列表。
**程序分析：**无。

## 题-34 

**题目：**练习函数调用。
**程序分析：**无。

## 题-35 

**题目：**文本颜色设置。
**程序分析：**无。

## 题-36 

**题目：**求100之内的素数。
**程序分析：**无。

## 题-37 

**题目：**对10个数进行排序。
**程序分析：**可以利用选择法，即从后9个比较过程中，选择一个最小的与第一个元素交换，下次类推，即用第二个元素与后8个进行比较，并进行交换。

## 题-38 

**题目：**求一个3*3矩阵主对角线元素之和。
**程序分析：**利用双重for循环控制输入二维数组，再将a[i][i]累加后输出。

## 题-39 

**题目：**有一个已经排好序的数组。现输入一个数，要求按原来的规律将它插入数组中。
**程序分析：**首先判断此数是否大于最后一个数，然后再考虑插入中间的数的情况，插入后此元素之后的数，依次后移一个位置。 

## 题-40 

**题目：**将一个数组逆序输出。
**程序分析：**用第一个与最后一个交换。

## 题-41 

**题目：**模仿静态变量的用法。
**程序分析：**无。

## 题-42 

**题目：**学习使用auto定义变量的用法。
**程序分析：**没有auto关键字，使用变量作用域来举例吧。

## 题-43 

**题目：**模仿静态变量(static)另一案例。
**程序分析：**演示一个python作用域使用方法

## 题-44 - Python 两个矩阵相加 

两个 3 行 3 列的矩阵，实现其对应位置的数据相加，并返回一个新矩阵：

程序分析：创建一个新的 3 行 3 列的矩阵，使用 for 迭代并取出 X 和 Y 矩阵中对应位置的值，相加后放到新矩阵的对应位置中。

程序源代码:

## 题-45 

**题目：**统计 1 到 100 之和。
**程序分析：**无

## 题-46 

**题目：**求输入数字的平方，如果平方运算后小于 50 则退出。
**程序分析：**无

## 题-47 

**题目：**两个变量值互换。
**程序分析：**无

## 题-48 

**题目：**数字比较。
**程序分析：**无

## 题-49 

**题目：**使用lambda来创建匿名函数。
**程序分析：**无

## 题-50 

**题目：**输出一个随机数。
**程序分析：**使用 random 模块。

## 题-51 

**题目：**学习使用按位与 & 。
**程序分析：**0&0=0; 0&1=0; 1&0=0; 1&1=1。

## 题-52 

**题目：**学习使用按位或 | 。
**程序分析：**0|0=0; 0|1=1; 1|0=1; 1|1=1

## 题-53 

**题目：**学习使用按位异或 ^ 。
**程序分析：**0^0=0; 0^1=1; 1^0=1; 1^1=0

## 题-54 

**题目：**取一个整数a从右端开始的4〜7位。
**程序分析：**可以这样考虑： 
(1)先使a右移4位。 
(2)设置一个低4位全为1,其余全为0的数。可用~(~0<<4) 
(3)将上面二者进行&运算。

## 题-55 

**题目：**学习使用按位取反~。
**程序分析：**~0=1; ~1=0; 
(1)先使a右移4位。 
(2)设置一个低4位全为1,其余全为0的数。可用~(~0<<4) 
(3)将上面二者进行&运算。

## 题-56 

**题目：**画图，学用circle画圆形。　　　
**程序分析：**无。

## 题-57 

**题目：**画图，学用line画直线。
**程序分析：**无。

## 题-58 

**题目：**画图，学用rectangle画方形。　　　
**程序分析：**

参数说明：(left ，top )为矩形的左上坐标，(right,bottom)为矩形的右下坐标，两者可确定一个矩形的大小


## 题-59 

**题目：**画图，综合例子。　　
**程序分析：**利用for循环控制100-999个数，每个数分解出个位，十位，百位。。

## 题-60 

**题目：**计算字符串长度。　　
**程序分析：**无。

## 题-61 

**题目：**打印出杨辉三角形（要求打印出10行如下图）。　　
**程序分析：**无。

## 题-62 

**题目：**查找字符串。　　
**程序分析：**无。

## 题-63 

**题目：**画椭圆。　
**程序分析：**使用 Tkinter。

## 题-64 

**题目：**利用ellipse 和 rectangle 画图。。　
**程序分析：**无。

## 题-65 

**题目：**一个最优美的图案。　　
**程序分析：**无。

## 题-66 

**题目：**输入3个数a,b,c，按大小顺序输出。　　　
**程序分析：**无。

## 题-67 

**题目：**输入数组，最大的与第一个元素交换，最小的与最后一个元素交换，输出数组。
**程序分析：**无。

## 题-68 

**题目：**有 n 个整数，使其前面各数顺序向后移 m 个位置，最后 m 个数变成最前面的 m 个数
**程序分析：**无。

## 题-69 

**题目：**有n个人围成一圈，顺序排号。从第一个人开始报数（从1到3报数），凡报到3的人退出圈子，问最后留下的是原来第几号的那位。
**程序分析：**无。

## 题-70 

**题目：**写一个函数，求一个字符串的长度，在main函数中输入字符串，并输出其长度。
**程序分析：**无。

## 题-71 

**题目：**编写input()和output()函数输入，输出5个学生的数据记录。
**程序分析：**无。

## 题-72 

**题目：**创建一个链表。
**程序分析：**无。

## 题-73 

**题目：**反向输出一个链表。
**程序分析：**无。

## 题-74 

**题目：**列表排序及连接。
**程序分析：**排序可使用 <span class="marked">sort()</span> 方法，连接可以使用 <span class="marked">+</span> 号或 <span class="marked">extend()</span> 方法。

## 题-75 

**题目：**放松一下，算一道简单的题目。
**程序分析：**无。

## 题-76 

**题目：**编写一个函数，输入n为偶数时，调用函数求1/2+1/4+...+1/n,当输入n为奇数时，调用函数1/1+1/3+...+1/n
**程序分析：**无。

## 题-77 

**题目：**循环输出列表
**程序分析：**无。

## 题-78 

**题目：**找到年龄最大的人，并输出。请找出程序中有什么问题。
**程序分析：**无。

## 题-79 

**题目：**字符串排序。
**程序分析：**无。

## 题-80 

**题目：**海滩上有一堆桃子，五只猴子来分。第一只猴子把这堆桃子平均分为五份，多了一个，这只猴子把多的一个扔入海中，拿走了一份。第二只猴子把剩下的桃子又平均分成五份，又多了一个，它同样把多的一个扔入海中，拿走了一份，第三、第四、第五只猴子都是这样做的，问海滩上原来最少有多少个桃子？
**程序分析：**无。

## 题-81 

**题目：**809*??=800*??+9*?? 其中??代表的两位数, 809*??为四位数，8*??的结果为两位数，9*??的结果为3位数。求??代表的两位数，及809*??后的结果。
**程序分析：**无。

## 题-82 

**题目：**八进制转换为十进制
**程序分析：**无。

## 题-83 

**题目：**求0—7所能组成的奇数个数。
**程序分析：**
组成1位数是4个。
组成2位数是7*4个。
组成3位数是7*8*4个。
组成4位数是7*8*8*4个。
......

## 题-84 

**题目：**连接字符串。
**程序分析：**无。

## 题-85 

**题目：**输入一个奇数，然后判断最少几个 9 除于该数的结果为整数。
**程序分析：**999999 / 13 = 76923。

## 题-86 

**题目：**两个字符串连接程序。
**程序分析：**无。

## 题-87 

**题目：**回答结果（结构体变量传递）。
**程序分析：**无。

## 题-88 

**题目：**读取7个数（1—50）的整数值，每读取一个值，程序打印出该值个数的＊。
**程序分析：**无。

## 题-89 

**题目：**某个公司采用公用电话传递数据，数据是四位的整数，在传递过程中是加密的，加密规则如下：每位数字都加上5,然后用和除以10的余数代替该数字，再将第一位和第四位交换，第二位和第三位交换。
**程序分析：**无。

## 题-90 

**题目：**列表使用实例。
**程序分析：**无。

## 题-91 

**题目：**时间函数举例1。
**程序分析：**无。

## 题-92 

**题目：**时间函数举例2。
**程序分析：**无。

## 题-93 

**题目：**时间函数举例3。
**程序分析：**无。

## 题-94 

**题目：**时间函数举例4,一个猜数游戏，判断一个人反应快慢。
**程序分析：**无。

## 题-95 

**题目：**字符串日期转换为易读的日期格式。
**程序分析：**无。

## 题-96 

**题目：**计算字符串中子串出现的次数。
**程序分析：**无。

## 题-97 

**题目：**从键盘输入一些字符，逐个把它们写到磁盘文件上，直到输入一个 <span class="marked">#</span> 为止。
**程序分析：**无。

## 题-98 

**题目：**从键盘输入一个字符串，将小写字母全部转换成大写字母，然后输出到一个磁盘文件"test"中保存。 
**程序分析：**无。

## 题-99 

**题目：**有两个磁盘文件A和B,各存放一行字母,要求把这两个文件中的信息合并(按字母顺序排列), 输出到一个新文件C中。 
**程序分析：**无。

## 题-100 

**题目：**列表转换为字典。 
**程序分析：**无。

## Python - 获取 100 以内的质数 

题目： 获取 100 以内的质数。
**程序分析：**质数（prime number）又称素数，有无限个。质数定义为在大于1的自然数中，除了1和它本身以外不再有其他因数的数称为质数，如：2、3、5、7、11、13、17、19。
