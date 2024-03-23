# sentry-lb

实现一个简单的 sentry, 用于上报日志、错误等信息

# 上报格式

```
type FORMAT = {
    level: info | error,
    msg: string,
    time: Date
}
```

# 使用

```
import Logger from 'sentry-lb'

const logger = new Logger(serverUrl)

// 监听 window.onerror 并上报
logger.init()

logger.log('这是一条日志')

try {
    // 模拟的代码出错点
    undefinedFunction(); // 这里会报错
} catch (error) {
    logger.error(error.message);
}

```
