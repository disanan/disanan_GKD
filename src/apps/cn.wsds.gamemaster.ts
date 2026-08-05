import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'cn.wsds.gamemaster',
  name: '迅游加速器',
  groups: [
    {
      key: 1,
      name: '关闭弹出广告',
      fastQuery: true,
      actionDelay: 200,
      actionCd: 1000,
      //activityIds: ['.activity.MainActivity'],
      rules: [
        {
          key: 0,
          matches: ['[id="cn.wsds.gamemaster:id/view_close_button"]'],
        },
      ],
    },
  ],
});
