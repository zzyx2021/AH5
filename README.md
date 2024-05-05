# Vue 3 + TypeScript + Vite

This template should help get you started developing with Vue 3 and TypeScript in Vite. The template uses Vue 3 `<script setup>` SFCs, check out the [script setup docs](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup) to learn more.

## Recommended Setup

- [VS Code](https://code.visualstudio.com/) + [Vue - Official](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (previously Volar) and disable Vetur

- Use [vue-tsc](https://github.com/vuejs/language-tools/tree/master/packages/tsc) for performing the same type checking from the command line, or for generating d.ts files for SFCs.

#静态资源
assets
  img                  //图片资源
    icon               //图标
  css                  //样式资源
    style.css          //公共样式

#项目公共组件
components
  list                  //列表文件
   TaskList.vue         //任务列表组件
   ContractList.vue     //合约列表组件
   MessageList.vue      //消息列表组件
   TalentList.vue       //人才列表组件
  FooterTabbar.vue      //底部导航组件
#api接口
api 
  user.ts               //登录模块api
  task.ts               //任务模块api
  contract.ts           //合约模块api
  message.ts            //消息模块api
  my.ts                 //我的模块api
  talent.ts             //人才模块api
#路由
  index.ts              //路由管理主页
#项目页面结构
views
  login
    index.vue           //登录页
    servicePolicy.vue   //服务协议
    privacyPolicy.vue   //隐私政策
  task
    index.vue           //任务主页
    search.vue          //任务搜索
    details.vue         //任务详情
    companySourse.vue   //公司任务主页
  contract
    index.vue           //合约主页
    details.vue         //合约详情
    progress.vue        //合约进度
  message
    index.vue           //消息主页
    systemList.vue      //系统消息列表
    systemDetails.vue   //系统消息详情
    talk.vue            //对话消息
  my
    index.vue           //我的主页
    user                //用户中心
      index.vue         //个人信息主页
      authReal.vue      //实名认证
      certified.vue     //已完成实名认证
      identitySwitch.vue//切换身份
    set                 //我的设置
      index.vue         //设置主页
    feedback            //意见反馈
      index.vue         //反馈主页
    account             //我的账户
      index.vue         //账户主页
      advance.vue       //账户提现
      coinExplain.vue   //代币说明
      depositExplain.vue//押金说明
    resume              //我的简历
      index.vue         //简历主页
      preview.vue       //简历预览
    collect             //我的收藏
      index.vue         //收藏主页
  talent
    index.vue           //人才主页
    details.vue         //人才详情