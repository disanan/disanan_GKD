import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'cmb.pb',
  name: '招商银行',
  groups: [
    {
      key: 1,
      name: '关闭弹出广告',
      actionDelay: 100,
      actionCd: 1000,
      rules: [
        {
          activityIds:
            '.app.h5container.webviewcontainer.PBWebContainerActivity',
          anyMatches: [
            '@TextView <2 View < View < View <7 View < View < View < View <4 View < View < View < View <2 WebView < WebView < FrameLayout < [vid="webrootlinearlayout"]',
          ],
        },
      ],
    },
  ],
});
