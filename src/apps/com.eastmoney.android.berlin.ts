import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.eastmoney.android.berlin',
  name: '东方财富',
  groups: [
    {
      key: 1,
      name: '关闭首页弹出广告',
      fastQuery: true,
      actionDelay: 200,
      actionCd: 1000,
      activityIds: [
        'com.eastmoney.android.module.launcher.internal.home.HomeActivity',
      ],
      rules: [
        {
          matches: [
            '[id="com.eastmoney.android.berlin:id/iv_single_close"]',
            '[vid="iv_single_close"]',
          ],
        },
      ],
    },
  ],
});
