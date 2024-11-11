require('colors');
const Config = require('./src/config');
const Bot = require('./src/bot');
const initLogger = require('./src/logger');
const { readLines, displayHeader, askAccountType } = require('./src/utils');

async function main() {
  displayHeader();
  console.log('⏳ 请稍候...\n'.yellow);  // 中文提示：请稍候...

  const config = new Config();
  const logger = initLogger();

  const tokens = await readLines('token.txt');
  const proxies = await readLines('proxy.txt').then((lines) =>
    lines
      .map((line) => {
        const [host, port, username, password] = line.split(':');
        if (!host || !port) {
          console.log(`⚠️  ${'proxy.txt 中的代理格式无效'.red}`.yellow);  // 中文提示：代理格式无效
          return null;
        }
        return { host, port, username, password };
      })
      .filter(Boolean)
  );

  if (tokens.length > proxies.length) {
    console.log(`⚠️  ${'令牌数量超过代理数量'.yellow}`);  // 中文提示：令牌数量超过代理数量
    return;
  }

  const accountType = await askAccountType();
  const bot = new Bot(config, logger);

  if (accountType === 'Single Account') {
    const singleToken = tokens[0];

    for (const proxy of proxies) {
      bot
        .connect(singleToken, proxy)
        .catch((err) => console.log(`❌ 连接失败：${err.message}`.red));  // 中文错误提示：连接失败
    }
  } else {
    for (let i = 0; i < tokens.length; i++) {
      const token = tokens[i];
      const proxy = proxies[i];
      bot
        .connect(token, proxy)
        .catch((err) => console.log(`❌ 连接失败：${err.message}`.red));  // 中文错误提示：连接失败
    }
  }

  process.on('SIGINT', () => {
    console.log(`\n👋 ${'正在关闭...'.green}`);  // 中文提示：正在关闭...
    process.exit(0);
  });
}

main().catch((error) => console.log(`❌ 程序错误：${error.message}`.red));  // 中文错误提示：程序错误
