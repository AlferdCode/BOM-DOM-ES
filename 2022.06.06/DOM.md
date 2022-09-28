# 认识DOM
- DOM：document Objuect Model “文档对象模型”。
- DOM适用于html的应用程序接口 API ，用于操作标签的。

# DOM的作用 
- 能够改变页面中所有HTML元素’标签及内容‘。
- 能够改变页面中所有HTML属性’标签的属性‘。
- 能够改变页面中所有css属性’样式‘。
- 能对页面所有的事件作出反应。

# 节点的name，type ， value
- 1. HTML文档中所有的事物都是DOM节点
```
 1.1 HTML中所有的元素 称为 元素节点
 1.2 HTML中所有的属性 称为 属性节点
 1.3 HTML中所有的文本 称为 文本节点
 1.4 HTML中所有的注释 称为 注释节点
 1.5 HTML中的文档本身 称为 文档节点（根节点）
 1.6 HTML文档中的空格或者换行也是节点 属于文本节点
```
2. nodeName属性是获取某一个节点的节点名称
```
2.1 元素节点的nadeName 和元素名一样（大写）
2.2 属性节点的nodeName 和元素属性名一样
2.3 文本节点的nodeName #text
2.4 注释节点的nodeName #comment
2.5 文档节点的nadeName #document
```
3. nodeType. 获取某个节点新型
```
3.1元素节点的nodeType node.element.node(大写)
3.2属性节点的nodeType node.attribute.node(大写)
3.3文本节点的nodeType node.text.node(大写)
3.4注释节点的nodeType node.comment.node(大写)
3.5文档节点的nodeType node.document.node(大写)
```
4. nodeValue. 获取某个节点的节点值,一般对于文本节点和属性系节点。
```
4.1 对于文本节点nodeValue 属性包含文本
4.2 对于属性节点nodeValue 属性包含属性值
4.3 nodeValue对于文档及节点和元素节点是不可用的，使用textContent代替nodeValue来获取元素节点内容。
```
