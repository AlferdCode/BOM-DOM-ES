# event对象
在触发的事件的函数里面我们会接收到一个event对象,通过该对象我们需要的一些参数,比如说我们需要知道此事件作用到谁身上了,就可以通过event的属性target来获取到(IE暂且不谈),或者想阻止浏览器的默认行为可以通过方法 preventDefault( )来进行阻止.以下是 event对象的一些属性和方法

## 属性	

|      属性       |                             描述                             |
| :-------------: | :----------------------------------------------------------: |
|     button      |           返回当事件被触发时，哪个鼠标按钮被点击。           |
|     clientX     |           返回当事件被触发时，鼠标指针的水平坐标。           |
|     clientY     |           返回当事件被触发时，鼠标指针的垂直坐标。           |
|     ctrlKey     |          返回当事件被触发时，”CTRL” 键是否被按下。           |
|     metaKey     |          返回当事件被触发时，”meta” 键是否被按下。           |
|  relatedTarget  |               返回与事件的目标节点相关的节点。               |
|     screenX     |         返回当某个事件被触发时，鼠标指针的水平坐标。         |
|     screenY     |         返回当某个事件被触发时，鼠标指针的垂直坐标。         |
|    shiftKey     |          返回当事件被触发时，”SHIFT” 键是否被按下。          |



## IE 属性(除了上面的鼠标/事件属性，IE 浏览器还支持下面的属性)
|      属性       |                             描述                             |
| :-------------: | :----------------------------------------------------------: |
|  cancelBubble   | 如果事件句柄想阻止事件传播到包容对象，必须把该属性设为 true。 |
|   fromElement   | 对于 mouseover 和 mouseout 事件，fromElement 引用移出鼠标的元素 |
|     keyCode     | 对于 keypress 事件，该属性声明了被敲击的键生成的 Unicode 字符码。对于 keydown 和 keyup |
| offsetX,offsetY |  发生事件的地点在事件源元素的坐标系统中的 x 坐标和 y 坐标。  |
|   returnValue   | 如果设置了该属性，它的值比事件句柄的返回值优先级高。把这个属性设置为 |
|   srcElement    | 对于生成事件的 Window 对象、Document 对象或 Element 对象的引用 |
|    toElement    | 对于 mouseover 和 mouseout 事件，该属性引用移入鼠标的元素。  |
|       x,y       | 事件发生的位置的 x 坐标和 y 坐标，它们相对于用CSS动态定位的最内层包容元素。 |
|                 |                                                              |

## 标准 Event 属性 下面列出了 2 级 DOM 事件标准定义的属性。

|      属性       |                             描述                             |
| :-------------: | :----------------------------------------------------------: |
|bubbles	|返回布尔值，指示事件是否是起泡事件类型。|
|cancelable	|返回布尔值，指示事件是否可拥可取消的默认动作。|
|currentTarget	|返回其事件监听器触发该事件的元素。|
|eventPhase	|返回事件传播的当前阶段。|
|target	|返回触发此事件的元素（事件的目标节点）。|
|timeStamp	|返回事件生成的日期和时间。|
|type	|返回当前 Event 对象表示的事件的名称。|
|initEvent()	|初始化新创建的 Event 对象的属性。|
|preventDefault()	|通知浏览器不要执行与事件关联的默认动作。|
|stopPropagation()	|不再派发事件。|

## Event对象的一些兼容性写法
|      描述       |                             方法                            |
| :-------------: | :----------------------------------------------------------: |
|获得event对象兼容性写法 |event || (event = window.event);|
|获得target兼容型写法|event.target||event.srcElement|
|阻止浏览器默认行为兼容性写法|event.preventDefault ? event.preventDefault() : (event.returnValue = false);|
|阻止冒泡写法|event.stopPropagation ? event.stopPropagation() : (event.cancelBubble = true);|


# 事件源对象 target

# target 和 currentTarget的区别




