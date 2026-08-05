import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.unionpay',
  name: '云闪付',
  groups: [
    {
      key: 1,
      name: '关闭首页抽奖广告',
      fastQuery: true,
      actionDelay: 200,
      actionCd: 1000,
      activityIds: ['.activity.UPActivityMain'],
      rules: [
        {
          matches: ['[id="com.unionpay:id/close_view"]', '[vid="close_view"]'],
        },
      ],
    },
  ],
});
