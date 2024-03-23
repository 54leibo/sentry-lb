class Logger {
  constructor(serverUrl) {
    this.logServerUrl = serverUrl;
  }

  log(msg) {
    // 发送正常日志到日志服务器
    fetch(this.logServerUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        level: "info",
        msg,
        time: new Date().toISOString(),
      }),
    });
  }

  error(msg) {
    // 发送错误日志到错误日志服务器
    fetch(this.logServerUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        level: "error",
        message: msg,
        time: new Date().toISOString(),
      }),
    });
  }

  init() {
    // 全局错误处理函数
    window.onerror = function (msg, source, lineno, colno, error) {
      const errorMsg = `${msg} at ${source}:${lineno}:${colno}`;
      this.error(errorMsg);
      return true; // 阻止浏览器默认错误处理行为
    };
  }
}

//   const logger = new Logger(serverUrl);

//   // 捕获错误并记录
//   try {
//     // 模拟的代码出错点
//     undefinedFunction(); // 这里会报错
//   } catch (error) {
//     logger.error(error.message);
//   }

//   // 记录正常日志
//   logger.log('This is a normal log message.');

export default Logger;
