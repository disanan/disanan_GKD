import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.sdu.didi.psnger',
  name: '滴滴出行',
  groups: [
    {
      key: 1,
      name: '关闭弹出广告',
      actionDelay: 100,
      actionCd: 1000,

      rules: [
        {
          activityIds: 'com.didi.ride.dimina.DMActivity',
          anyMatches: [
            '@Image <2 View < View <4 View < WebView < WebView < [vid="touch_intercept_fl"]',
            '@Image <2 View < View < View <5 View < View < WebView < WebView < [vid="touch_intercept_fl"]',
          ],
        },
      ],
    },
    {
      key: 2,
      name: '关闭弹出广告2',
      actionDelay: 100,
      actionCd: 1000,
      rules: [
        {
          fastQuery: true,
          activityIds: 'com.didi.sdk.app.MainActivity',
          anyMatches: [
            '[id="com.sdu.didi.psnger:id/popClose"][desc="关闭弹窗"]',
            '[id="com.sdu.didi.psnger:id/iv_close"]',
            '@TextView <2 View < View <2 View <6 WebView < WebView < FrameLayout < [vid="web_parent"]',
            '@TextView <2 View <2 View <2 View < View < WebView < WebView < FrameLayout < [vid="web_parent"]',
            '@ImageView < ViewGroup <4 ViewGroup <5 ViewGroup <3 ViewGroup < ViewGroup <3 ViewGroup < [vid="hummer_layout_root_view"]',
          ],
        },
      ],
    },
    {
      key: 3,
      name: '关闭弹窗-开心收下',
      actionDelay: 100,
      actionCd: 1000,
      rules: [
        {
          fastQuery: true,
          activityIds: 'com.didi.bike.ammox.biz.webview.BikeWebActivity',
          matches: '@TextView <3 View < WebView < WebView < [vid="web_parent"]',
        },
      ],
    },
  ],
});
