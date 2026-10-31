import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.qdtevc.teld.app',
  name: '特来电',
  groups: [
    {
      key: 1,
      name: '特来电弹出广告',
      fastQuery: true,
      actionDelay: 500,
      actionCd: 5000,
      activityIds: ['.activity.MainActivity'],
      rules: [
        {
          matches: [
            '@View < [vid="main_popviewclose"]',
            //'[text="暂不关注"]',
          ],
          // snapshotUrls: 'https://i.gkd.li/i/22505380', //获取链接的方法在上一步有说明
        },
      ],
    },
  ],
});
