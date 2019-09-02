/* eslint valid-jsdoc: "off" */

"use strict";

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = (exports = {
    cluster: {
      listen: {
        port: 888
      }
    }
  });

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + "_1567414636259_6791";

  // add your middleware config here
  config.middleware = [];
  // 关闭安全协议
  config.security = {
    csrf: {
      enable: false,
      ignoreJSON: true // 默认为 false，当设置为 true 时，将会放过所有 content-type 为 `application/json` 的请求
    }
    // domainWhiteList: ["http://127.0.0.1:8080"]
  };
  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };

  return {
    ...config,
    ...userConfig
  };
};
