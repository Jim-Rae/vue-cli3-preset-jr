# 基于vue-cli3的前端项目模板

基于vue-cli3的preset，用于快速构建前端工程模板。

此项目为[Jim-Rae/webpack](https://github.com/Jim-Rae/webpack)项目的升级版本，由于原Jim-Rae/webpack项目是基于vue-cli2的前端项目模板，现在已不再维护。

## 使用说明

```bash
# 安装 vue-cli 3.0
npm install -g @vue/cli

# 远程 preset 创建项目
vue create --preset Jim-Rae/vue-cli3-preset-jr my-project
# 或者克隆到本地创建
vue create --preset direct:https://github.com/Jim-Rae/vue-cli3-preset-jr.git my-project --clone

# 预览
cd my-project
npm run serve
