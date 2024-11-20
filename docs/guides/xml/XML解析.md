## DOM解析方法
DOM，文档对象模型(Document Object Model)，是官方推荐的标准。DOM是html和xml文档的编程接口规范，和平台、语言是无关的。利用DOM规范，能够实现DOM 文档和xml之间的相互转换，遍历、操作相应DOM文档的内容。DOM规范的核心就是树模型，全部读取之后再解析。

原理是：首先在内存中创建一个Document对象，然后把XML文档读取进来赋值给这个dom对象。由于dom对象是基于树结构的，所以对dom对象进行遍历即可。对内存中的dom对象可以进行查询、修改、删除操作，还可以写回原XML文档保存修改。

优点：由于整棵树在内存中，因此可以对xml文档随机访问；可以对xml文档进行修改操作
缺点：整个文档必须一次性解析完；由于整个文档都需要载入内存，当XML文件较大的时候，对内存耗费比较大，容易影响解析性能并且可能会造成内存溢出。

### 代码实现
```java
import javax.xml.parsers.DocumentBuilder;
import javax.xml.parsers.DocumentBuilderFactory;
import org.w3c.dom.Document;
import org.w3c.dom.NodeList;
import org.xml.sax.InputSource;
import java.io.StringReader;

public class DomExample {
    public static void main(String[] args) throws Exception {
        String xml = "<root><item id='1'>Text1</item><item id='2'>Text2</item></root>";
        DocumentBuilderFactory factory = DocumentBuilderFactory.newInstance();
        DocumentBuilder builder = factory.newDocumentBuilder();
        Document doc = builder.parse(new InputSource(new StringReader(xml)));

        NodeList itemList = doc.getElementsByTagName("item");
        for (int i = 0; i < itemList.getLength(); i++) {
            System.out.println(itemList.item(i).getTextContent());
        }
    }
}
```


## SAX解析方法
SAX，简单应用程序接口(Simple Api For Xml)。非W3C官方所提供的标准，是一个程序员社区研究出来。SAX在概念上与DOM完全不同。非文档驱动，是事件驱动的。事件驱动：一种基于回调机制的程序运行方法。由外至内一层一层解析。

优点：解析速度快，占用内存少，它需要哪些数据再加载和解析哪些内容。

缺点：它不会记录标签的关系，而是需要应用程序自己处理，这样就会增加程序的负担。

### 代码实现


## JDOM解析方法

JDOM是Java和DOM的结合体。JDOM 致力于建立一个完整的基于 Java 平台的、通过 Java 代码来访问、操作并输出 XML 数据。JDOM是用Java语言读、写、操作XML的新API函数。简单、高效、优化。 

优点：查找方便，可以修改

缺点：装载整个文档,对内存容量要求高

## DOM4J解析方法

dom4j是一个Java的XML API，类似于jdom，用来读写XML文件的。性能优异功能强大简单易用开放源代码。它是目前最流行、最好用的XML解析工具，解析XML的速度最快。

操作步骤：

1. 创建SAXReader：SAXReader reader = new SAXReader();
2. 创建文件输入流打开xml文件：InputStream in = new FileInputStream("XXX.xml");
3. 通过reader和输入流读取xml文件到内存创建Document对象：Document dom = reader.read(in); 
4. 获取根节点：Element root=dom.getRootElement();
5. 获取子节点列表：List childNodes = root.elements();
6. 遍历子节点：Element node = childNodes.get(i);
7. 读取结点信息：
   - 结点属性值：node.attributeValue("属性名")；
   - 结点名：node.getName()；
   - 结点值：node.getValue();
   - 子结点文本值：node.elementText("子结点名")
  
  
  