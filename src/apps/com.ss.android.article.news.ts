import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.ss.android.article.news',
  name: '今日头条',
  groups: [
    {
      key: 1,
      name: '今日头条-暂不关注',
      fastQuery: true,
      actionDelay: 200,
      actionCd: 5000,
      activityIds: ['com.ss.android.ugc.detail.activity.TikTokActivity'],
      rules: [
        {
          matches: [
            '[id="com.ss.android.article.news:id/l4k"]',
            '[text="暂不关注"]',
          ],
          snapshotUrls: 'https://i.gkd.li/i/22505380', //获取链接的方法在上一步有说明
        },
      ],
    },
    {
      key: 2,
      name: '功能类-刷到直播时[上滑]',
      desc: '头条里面的直播视频均跳过不看',
      rules: [
        {
          swipeArg: {
            start: {
              x: 'screenWidth/2',
              y: 'screenHeight * 0.6',
            },
            end: {
              x: 'screenWidth/2',
              y: 'screenHeight * 0.3',
            },
            duration: 200,
          },
          matches: [
            //'([visibleToUser=true] > [text$="广告" || text$="（推广）"][vid="desc" || desc="广告"]) || ([text="应用" || text="购物" || text$="游戏" || text="咨询" || text="服务" || text="预约" || text="子薇剧场"][text.length<6][index=1][visibleToUser=true]) || (ViewGroup[childCount=5] > ImageView +3 [text^="已售" || text^=" 已售"] - TextView - [text="讲解中 丨 "][index=1][visibleToUser=true])',
            '[id="com.ss.android.article.news:id/a12"]',
            '[text="直播中"]',
          ],
          actionCd: 300,
          actionDelay: 200,
          fastQuery: true,
          activityIds: ['com.ss.android.ugc.detail.activity.TikTokActivity'],
        },
      ],
    },
  ],
});
