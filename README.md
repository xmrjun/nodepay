# nodepay

一个用于自动化 Nodepay 空投交互的机器人，包括会话管理和带代理支持的 Ping 功能。

## 环境要求

1. **Node.js** (版本 14 或更高)
2. **npm** (Node 包管理器)

## 安装

开始使用 Nodepay 空投机器人：

1. 克隆代码仓库：

    ```bash
    git clone https://github.com/dante4rt/nodepay-airdrop-bot.git
    cd nodepay-airdrop-bot
    ```

2. 安装依赖：

    ```bash
    npm install
    ```

## 配置

在运行机器人之前，需要创建两个文本文件：

### 1. `token.txt`

获取您的 Bearer 令牌：

1. **注册 Nodepay 账号**：
   - 前往 [Nodepay 注册页面](https://app.nodepay.ai/register?ref=hLVdUdlJd0R87RY) 注册账号。

2. **获取令牌**：
   - 在浏览器中打开 **开发者工具**（右键 > 检查 或 按 `Ctrl+Shift+I`）。
   - 进入开发者工具中的 **控制台** 标签。
   - 输入以下命令获取令牌：

     ```javascript
     localStorage.getItem('np_webapp_token')
     ```

   - 该命令将返回 Bearer 令牌。**复制令牌**（不包括 `Bearer` 前缀，仅复制字母和数字组合的字符串）。

3. **将令牌粘贴到 `token.txt` 文件中**：
   - 在项目根目录中创建一个 `token.txt` 文件，并将令牌粘贴到文件中（每行一个令牌）。

示例 `token.txt` 文件内容：

```text
ey...
ey...
ey...
```
 proxy.txt
将您的代理信息添加到 proxy.txt 文件中。每行的格式如下：
```text
host:port:username:password
```
## 运行机器人
要启动机器人，运行以下命令：
```bash
npm start
```
机器人将开始连接会话，发送 Ping 请求，并记录相关信息。

## 日志
机器人会记录状态和活动，包括：

每个会话（UID）的连接状态。

每个会话的 Ping 状态。

每个代理所使用的 IP 地址。

日志存储在 bot.log 文件中，也可以在控制台中查看。
