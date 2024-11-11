const fs = require('fs');
const readline = require('readline');
const inquirer = require('inquirer');
const chalk = require('chalk');  // 引入chalk库

async function readLines(filename) {
  const fileStream = fs.createReadStream(filename);
  const rl = readline.createInterface({
    input: fileStream,
    crlfDelay: Infinity,
  });
  const lines = [];
  for await (const line of rl) lines.push(line.trim());
  return lines;
}

function displayHeader() {
  process.stdout.write('\x1Bc');
  console.log(chalk.yellow('╔════════════════════════════════════════╗'));
  console.log(chalk.yellow('║      🚀  Nodepay节点机器人  🚀        ║'));
  console.log(chalk.yellow('║  👤    脚本编写：@qklxsqf              ║'));
  console.log(chalk.yellow('║  📢  电报频道：https://t.me/ksqxszq    ║'));
  console.log(chalk.yellow('╚════════════════════════════════════════╝'));
  console.log();
}

async function askAccountType() {
  const answers = await inquirer.prompt([
    {
      type: 'list',
      name: 'accountType',
      message: '您想使用多少个账户？',
      choices: ['单账户', '多账户'],
    },
  ]);

  console.log('');

  return answers.accountType;
}

module.exports = { readLines, displayHeader, askAccountType };
