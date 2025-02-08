# 路由模式
发布/订阅中，构建的简单的日志系统，可以实现将消息广播给所有接收者。
路由模式，则是在此基础上添加一个特性--只订阅消息的子集。例如，我们可以将关键错误消息传递给日志文件，同时能够在控制台打印所有日志消息。
## 绑定

```java
channel.queueBind(queueName, EXCHANGE_NAME, "");
```

## 直接交换


![alt text](./images/image.png)
