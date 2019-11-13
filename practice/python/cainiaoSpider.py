import requests
from bs4 import BeautifulSoup

link = 'https://www.runoob.com/python/python-100-examples.html'
base_link = 'https://www.runoob.com'
headers = {'User-Agent': 'Mozilla/5.0 (Windows; U; Windows NT 6.1; en-US; rv;1.9.1.6) Gecko/20091201 Firefox/3.5.6'}
r = requests.get(link, headers=headers)
soup = BeautifulSoup(r.text, 'html.parser')
div_soup = soup.select('#content')
examList = div_soup[0].find_all('li')
length = len(examList)
arr = []
# 获取需要遍历的题目链接
for i in range(0, length):
    a_soup = examList[i].select('a')[0]
    href = base_link + a_soup['href']
    arr.append(href)
save_content = ''
file = 'python-exercise.md'
# 开始遍历题目详情页
for link in arr:
    print(link)
    r = requests.get(link, headers=headers)
    soup = BeautifulSoup(r.text, 'html.parser')
    div_soup = soup.select('#content')
    # 获取标题
    title = div_soup[0].select('h1')
    save_content = save_content + '## ' + title[0].string + ' \n\n'
    p_soup = div_soup[0].find_all('p')
    # 删除无意义的p标签
    del p_soup[0]
    # 保存题目内容
    for i in range(0, len(p_soup)):
        p_tag_list = p_soup[i].contents
        p_content = ''
        for j in range(0, len(p_tag_list)):
            p_content += str(p_tag_list[j])
        # 遇到代码块和结果输出演示跳出当前页面的内容查找
        if p_content == '程序源代码：' or p_content == '以上实例输出结果为：'\
                or p_content == '输出结果为：' or p_content == '执行以上代码，输出结果如下：':
            save_content += '\n'
            break
        save_content = save_content + p_content + '\n'
# 替换掉无意义的字符，加重显示和替换题目
save_content = save_content.replace("<strong>", "**")
save_content = save_content.replace("</strong>", "**")
save_content = save_content.replace("<br/>", "")
save_content = save_content.replace("<br>", "")
save_content = save_content.replace("Python 练习实例", "题-")
# 保存所有内容
with open(file, 'a+', encoding='utf-8') as f:
    f.write(save_content)