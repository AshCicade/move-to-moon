SOAP(简单对象访问协议) 是基于 XML 的简易协议，可使应用程序在 HTTP 之上进行信息交换。
SOAP协议是一种请求和应答协议规范，而http是web传输协议，soap的传输是可以基于http的，但也可以基于其他的传输协议，如ftp、smtp等。


## SOAP语法

### SOAP 构建模块
一条 SOAP 消息就是一个普通的 XML 文档，包含下列元素：

- 必需的 Envelope 元素，可把此 XML 文档标识为一条 SOAP 消息
- 可选的 Header 元素，包含头部信息
- 必需的 Body 元素，包含所有的调用和响应信息
- 可选的 Fault 元素，提供有关在处理此消息所发生错误的信息

### SOAP 消息的基本结构
```xml
<?xml version="1.0"?>
<soap:Envelope
xmlns:soap="http://www.w3.org/2001/12/soap-envelope"
soap:encodingStyle="http://www.w3.org/2001/12/soap-encoding">

<soap:Header>
  ...
  ...
</soap:Header>

<soap:Body>
  ...
  ...
  <soap:Fault>
    ...
    ...
  </soap:Fault>
</soap:Body>

</soap:Envelope>
```

## SOAP HTTP Binding

### SOAP HTTP Binding

SOAP 方法指的是遵守 SOAP 编码规则的 HTTP 请求/响应。

**HTTP + XML = SOAP**

SOAP 请求可能是 HTTP POST 或 HTTP GET 请求。

HTTP POST 请求规定至少两个 HTTP 头：Content-Type 和 Content-Length。
#### Content-Type
SOAP 的请求和响应的 Content-Type 头可定义消息的 MIME 类型，以及用于请求或响应的 XML 主体的字符编码（可选）。
##### 语法
```
Content-Type: MIMEType; charset=character-encoding
```
##### 例子
```
POST /item HTTP/1.1
Content-Type: application/soap+xml; charset=utf-8
```

#### Content-Length
SOAP 的请求和响应的 Content-Length 头规定请求或响应主体的字节数。
##### 语法
```
Content-Length: bytes
```
##### 例子
```
POST /item HTTP/1.1
Content-Type: application/soap+xml; charset=utf-8
Content-Length: 250
```


## SOAP 实例

### 一个 SOAP 实例
在下面的例子中，一个 GetStockPrice 请求被发送到了服务器。此请求有一个 StockName 参数，而在响应中则会返回一个 Price 参数。此功能的命名空间被定义在此地址中： "http://www.example.org/stock"

#### SOAP 请求：
```
POST /InStock HTTP/1.1
Host: www.example.org
Content-Type: application/soap+xml; charset=utf-8
Content-Length: nnn

<?xml version="1.0"?>
<soap:Envelope
xmlns:soap="http://www.w3.org/2001/12/soap-envelope"
soap:encodingStyle="http://www.w3.org/2001/12/soap-encoding">

  <soap:Body xmlns:m="http://www.example.org/stock">
    <m:GetStockPrice>
      <m:StockName>IBM</m:StockName>
    </m:GetStockPrice>
  </soap:Body>
  
</soap:Envelope>
```

#### SOAP 响应：
```
HTTP/1.1 200 OK
Content-Type: application/soap+xml; charset=utf-8
Content-Length: nnn

<?xml version="1.0"?>
<soap:Envelope
xmlns:soap="http://www.w3.org/2001/12/soap-envelope"
soap:encodingStyle="http://www.w3.org/2001/12/soap-encoding">

  <soap:Body xmlns:m="http://www.example.org/stock">
    <m:GetStockPriceResponse>
      <m:Price>34.5</m:Price>
    </m:GetStockPriceResponse>
  </soap:Body>
  
</soap:Envelope>
```