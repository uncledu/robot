'use strict';

module.exports = appInfo => {
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1532356497572_9083';

  // add your config here
  config.middleware = [];

  return config;
};
