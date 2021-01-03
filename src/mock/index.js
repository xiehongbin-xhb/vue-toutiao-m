import MockAdapter from 'axios-mock-adapter'
import request from '@/util/request'
import { formatDate } from '@/util/lib'
const channelsData = [
  { id: 0, name: '推荐' },
  { id: 5, name: 'android' },
  { id: 10, name: '前端' },
  { id: 17, name: '后端' },
  { id: 8, name: 'WebGL' },
  { id: 15, name: '产品' },
  { id: 19, name: '架构' },
  { id: 20, name: '区块链' },
  { id: 25, name: 'JavaScript' }
]
const refreshList = [
  {
    title: '下拉刷新文章1',
    art_id: 1111,
    aut_id: 222,
    aut_name: 'ForSakenSoul',
    ch_id: 333,
    collect_count: 1,
    comm_count: 1,
    cover: {
      type: 0,
      images: []
    },
    is_top: 0,
    like_count: 0,
    pubdate: '2020-06-12T09:25:25',
    trace: {
      click: ''
    }
  },
  {
    title: '下拉刷新文章2',
    art_id: 1111,
    aut_id: 222,
    aut_name: 'ForSakenSoul',
    ch_id: 333,
    collect_count: 1,
    comm_count: 1,
    cover: {
      type: 0,
      images: []
    },
    is_top: 0,
    like_count: 0,
    pubdate: '2020-06-12T09:25:25',
    trace: {
      click: ''
    }
  },
  {
    title: '下拉刷新文章3',
    art_id: 1111,
    aut_id: 222,
    aut_name: 'ForSakenSoul',
    ch_id: 333,
    collect_count: 1,
    comm_count: 1,
    cover: {
      type: 0,
      images: []
    },
    is_top: 0,
    like_count: 0,
    pubdate: '2020-06-12T09:25:25',
    trace: {
      click: ''
    }
  },
  {
    title: '下拉刷新文章4',
    art_id: 1111,
    aut_id: 222,
    aut_name: 'ForSakenSoul',
    ch_id: 333,
    collect_count: 1,
    comm_count: 1,
    cover: {
      type: 0,
      images: []
    },
    is_top: 0,
    like_count: 0,
    pubdate: '2020-06-12T09:25:25',
    trace: {
      click: ''
    }
  },
  {
    title: '下拉刷新文章5',
    art_id: 1111,
    aut_id: 222,
    aut_name: 'ForSakenSoul',
    ch_id: 333,
    collect_count: 1,
    comm_count: 1,
    cover: {
      type: 0,
      images: []
    },
    is_top: 0,
    like_count: 0,
    pubdate: '2020-06-12T09:25:25',
    trace: {
      click: ''
    }
  }
]
const articleList1 = [
  {
    title: '推荐文章1',
    art_id: 1111,
    aut_id: 222,
    aut_name: 'ForSakenSoul',
    ch_id: 333,
    collect_count: 1,
    comm_count: 1,
    cover: {
      type: 0,
      images: []
    },
    is_top: 0,
    like_count: 0,
    pubdate: '2020-06-12T09:25:25',
    trace: {
      click: ''
    }
  },
  {
    title: '推荐文章2',
    art_id: 11112,
    aut_id: 222,
    aut_name: 'ForSakenSoul',
    ch_id: 333,
    collect_count: 1,
    comm_count: 1,
    cover: {
      type: 1,
      images: [
        'https://s3.ax1x.com/2021/01/03/spvGwt.md.jpg'
      ]
    },
    is_top: 0,
    like_count: 0,
    pubdate: '2020-06-12T09:25:25',
    trace: {
      click: ''
    }
  },
  {
    title: '推荐文章3',
    art_id: 11113,
    aut_id: 222,
    aut_name: 'ForSakenSoul',
    ch_id: 333,
    collect_count: 1,
    comm_count: 1,
    cover: {
      type: 3,
      images: [
        'https://s3.ax1x.com/2021/01/03/spvGwt.md.jpg',
        'https://s3.ax1x.com/2021/01/03/spvGwt.md.jpg',
        'https://s3.ax1x.com/2021/01/03/spvGwt.md.jpg'
      ]
    },
    is_top: 0,
    like_count: 0,
    pubdate: '2020-06-12T09:25:25',
    trace: {
      click: ''
    }
  },
  {
    title: '推荐文章4',
    art_id: 11114,
    aut_id: 222,
    aut_name: 'ForSakenSoul',
    ch_id: 333,
    collect_count: 1,
    comm_count: 1,
    cover: {
      type: 0,
      images: []
    },
    is_top: 0,
    like_count: 0,
    pubdate: '2020-06-12T09:25:25',
    trace: {
      click: ''
    }
  },
  {
    title: '推荐文章5',
    art_id: 11115,
    aut_id: 222,
    aut_name: 'ForSakenSoul',
    ch_id: 333,
    collect_count: 1,
    comm_count: 1,
    cover: {
      type: 0,
      images: []
    },
    is_top: 0,
    like_count: 0,
    pubdate: '2020-06-12T09:25:25',
    trace: {
      click: ''
    }
  },
  {
    title: '推荐文章6',
    art_id: 11116,
    aut_id: 222,
    aut_name: 'ForSakenSoul',
    ch_id: 333,
    collect_count: 1,
    comm_count: 1,
    cover: {
      type: 0,
      images: []
    },
    is_top: 0,
    like_count: 0,
    pubdate: '2020-06-12T09:25:25',
    trace: {
      click: ''
    }
  },
  {
    title: '推荐文章7',
    art_id: 11117,
    aut_id: 222,
    aut_name: 'ForSakenSoul',
    ch_id: 333,
    collect_count: 1,
    comm_count: 1,
    cover: {
      type: 0,
      images: []
    },
    is_top: 0,
    like_count: 0,
    pubdate: '2020-06-12T09:25:25',
    trace: {
      click: ''
    }
  },
  {
    title: '推荐文章8',
    art_id: 11118,
    aut_id: 222,
    aut_name: 'ForSakenSoul',
    ch_id: 333,
    collect_count: 1,
    comm_count: 1,
    cover: {
      type: 0,
      images: []
    },
    is_top: 0,
    like_count: 0,
    pubdate: '2020-06-12T09:25:25',
    trace: {
      click: ''
    }
  },
  {
    title: '推荐文章9',
    art_id: 11119,
    aut_id: 222,
    aut_name: 'ForSakenSoul',
    ch_id: 333,
    collect_count: 1,
    comm_count: 1,
    cover: {
      type: 0,
      images: []
    },
    is_top: 0,
    like_count: 0,
    pubdate: '2020-06-12T09:25:25',
    trace: {
      click: ''
    }
  },
  {
    title: '推荐文章10',
    art_id: 11110,
    aut_id: 222,
    aut_name: 'ForSakenSoul',
    ch_id: 333,
    collect_count: 1,
    comm_count: 1,
    cover: {
      type: 0,
      images: []
    },
    is_top: 0,
    like_count: 0,
    pubdate: '2020-06-12T09:25:25',
    trace: {
      click: ''
    }
  }
]
const articleList2 = [
  {
    title: '前端文章1',
    art_id: 1111,
    aut_id: 222,
    aut_name: 'ForSakenSoul',
    ch_id: 333,
    collect_count: 1,
    comm_count: 1,
    cover: {
      type: 0,
      images: []
    },
    is_top: 0,
    like_count: 0,
    pubdate: '2020-06-12T09:25:25',
    trace: {
      click: ''
    }
  },
  {
    title: '前端文章2',
    art_id: 11112,
    aut_id: 222,
    aut_name: 'ForSakenSoul',
    ch_id: 333,
    collect_count: 1,
    comm_count: 1,
    cover: {
      type: 0,
      images: []
    },
    is_top: 0,
    like_count: 0,
    pubdate: '2020-06-12T09:25:25',
    trace: {
      click: ''
    }
  },
  {
    title: '前端文章3',
    art_id: 11113,
    aut_id: 222,
    aut_name: 'ForSakenSoul',
    ch_id: 333,
    collect_count: 1,
    comm_count: 1,
    cover: {
      type: 0,
      images: []
    },
    is_top: 0,
    like_count: 0,
    pubdate: '2020-06-12T09:25:25',
    trace: {
      click: ''
    }
  },
  {
    title: '前端文章4',
    art_id: 11114,
    aut_id: 222,
    aut_name: 'ForSakenSoul',
    ch_id: 333,
    collect_count: 1,
    comm_count: 1,
    cover: {
      type: 0,
      images: []
    },
    is_top: 0,
    like_count: 0,
    pubdate: '2020-06-12T09:25:25',
    trace: {
      click: ''
    }
  },
  {
    title: '前端文章5',
    art_id: 11115,
    aut_id: 222,
    aut_name: 'ForSakenSoul',
    ch_id: 333,
    collect_count: 1,
    comm_count: 1,
    cover: {
      type: 0,
      images: []
    },
    is_top: 0,
    like_count: 0,
    pubdate: '2020-06-12T09:25:25',
    trace: {
      click: ''
    }
  },
  {
    title: '前端文章6',
    art_id: 11116,
    aut_id: 222,
    aut_name: 'ForSakenSoul',
    ch_id: 333,
    collect_count: 1,
    comm_count: 1,
    cover: {
      type: 0,
      images: []
    },
    is_top: 0,
    like_count: 0,
    pubdate: '2020-06-12T09:25:25',
    trace: {
      click: ''
    }
  },
  {
    title: '前端文章7',
    art_id: 11117,
    aut_id: 222,
    aut_name: 'ForSakenSoul',
    ch_id: 333,
    collect_count: 1,
    comm_count: 1,
    cover: {
      type: 0,
      images: []
    },
    is_top: 0,
    like_count: 0,
    pubdate: '2020-06-12T09:25:25',
    trace: {
      click: ''
    }
  },
  {
    title: '前端文章8',
    art_id: 11118,
    aut_id: 222,
    aut_name: 'ForSakenSoul',
    ch_id: 333,
    collect_count: 1,
    comm_count: 1,
    cover: {
      type: 0,
      images: []
    },
    is_top: 0,
    like_count: 0,
    pubdate: '2020-06-12T09:25:25',
    trace: {
      click: ''
    }
  },
  {
    title: '前端文章9',
    art_id: 11119,
    aut_id: 222,
    aut_name: 'ForSakenSoul',
    ch_id: 333,
    collect_count: 1,
    comm_count: 1,
    cover: {
      type: 0,
      images: []
    },
    is_top: 0,
    like_count: 0,
    pubdate: '2020-06-12T09:25:25',
    trace: {
      click: ''
    }
  },
  {
    title: '前端文章10',
    art_id: 11110,
    aut_id: 222,
    aut_name: 'ForSakenSoul',
    ch_id: 333,
    collect_count: 1,
    comm_count: 1,
    cover: {
      type: 0,
      images: []
    },
    is_top: 0,
    like_count: 0,
    pubdate: '2020-06-12T09:25:25',
    trace: {
      click: ''
    }
  }
]
const articleList3 = [
  {
    title: 'android文章1',
    art_id: 1111,
    aut_id: 222,
    aut_name: 'ForSakenSoul',
    ch_id: 333,
    collect_count: 1,
    comm_count: 1,
    cover: {
      type: 0,
      images: []
    },
    is_top: 0,
    like_count: 0,
    pubdate: '2020-06-12T09:25:25',
    trace: {
      click: ''
    }
  },
  {
    title: 'android文章2',
    art_id: 11112,
    aut_id: 222,
    aut_name: 'ForSakenSoul',
    ch_id: 333,
    collect_count: 1,
    comm_count: 1,
    cover: {
      type: 0,
      images: []
    },
    is_top: 0,
    like_count: 0,
    pubdate: '2020-06-12T09:25:25',
    trace: {
      click: ''
    }
  },
  {
    title: 'android文章3',
    art_id: 11113,
    aut_id: 222,
    aut_name: 'ForSakenSoul',
    ch_id: 333,
    collect_count: 1,
    comm_count: 1,
    cover: {
      type: 0,
      images: []
    },
    is_top: 0,
    like_count: 0,
    pubdate: '2020-06-12T09:25:25',
    trace: {
      click: ''
    }
  },
  {
    title: 'android文章4',
    art_id: 11114,
    aut_id: 222,
    aut_name: 'ForSakenSoul',
    ch_id: 333,
    collect_count: 1,
    comm_count: 1,
    cover: {
      type: 0,
      images: []
    },
    is_top: 0,
    like_count: 0,
    pubdate: '2020-06-12T09:25:25',
    trace: {
      click: ''
    }
  },
  {
    title: 'android文章5',
    art_id: 11115,
    aut_id: 222,
    aut_name: 'ForSakenSoul',
    ch_id: 333,
    collect_count: 1,
    comm_count: 1,
    cover: {
      type: 0,
      images: []
    },
    is_top: 0,
    like_count: 0,
    pubdate: '2020-06-12T09:25:25',
    trace: {
      click: ''
    }
  },
  {
    title: 'android文章6',
    art_id: 11116,
    aut_id: 222,
    aut_name: 'ForSakenSoul',
    ch_id: 333,
    collect_count: 1,
    comm_count: 1,
    cover: {
      type: 0,
      images: []
    },
    is_top: 0,
    like_count: 0,
    pubdate: '2020-06-12T09:25:25',
    trace: {
      click: ''
    }
  },
  {
    title: 'android文章7',
    art_id: 11117,
    aut_id: 222,
    aut_name: 'ForSakenSoul',
    ch_id: 333,
    collect_count: 1,
    comm_count: 1,
    cover: {
      type: 0,
      images: []
    },
    is_top: 0,
    like_count: 0,
    pubdate: '2020-06-12T09:25:25',
    trace: {
      click: ''
    }
  },
  {
    title: 'android文章8',
    art_id: 11118,
    aut_id: 222,
    aut_name: 'ForSakenSoul',
    ch_id: 333,
    collect_count: 1,
    comm_count: 1,
    cover: {
      type: 0,
      images: []
    },
    is_top: 0,
    like_count: 0,
    pubdate: '2020-06-12T09:25:25',
    trace: {
      click: ''
    }
  },
  {
    title: 'android文章9',
    art_id: 11119,
    aut_id: 222,
    aut_name: 'ForSakenSoul',
    ch_id: 333,
    collect_count: 1,
    comm_count: 1,
    cover: {
      type: 0,
      images: []
    },
    is_top: 0,
    like_count: 0,
    pubdate: '2020-06-12T09:25:25',
    trace: {
      click: ''
    }
  },
  {
    title: 'android文章10',
    art_id: 11110,
    aut_id: 222,
    aut_name: 'ForSakenSoul',
    ch_id: 333,
    collect_count: 1,
    comm_count: 1,
    cover: {
      type: 0,
      images: []
    },
    is_top: 0,
    like_count: 0,
    pubdate: '2020-06-12T09:25:25',
    trace: {
      click: ''
    }
  }
]
const articleList4 = [
  {
    title: '文章1',
    art_id: 1111,
    aut_id: 222,
    aut_name: 'ForSakenSoul',
    ch_id: 333,
    collect_count: 1,
    comm_count: 1,
    cover: {
      type: 0,
      images: []
    },
    is_top: 0,
    like_count: 0,
    pubdate: '2020-06-12T09:25:25',
    trace: {
      click: ''
    }
  },
  {
    title: '文章2',
    art_id: 11112,
    aut_id: 222,
    aut_name: 'ForSakenSoul',
    ch_id: 333,
    collect_count: 1,
    comm_count: 1,
    cover: {
      type: 0,
      images: []
    },
    is_top: 0,
    like_count: 0,
    pubdate: '2020-06-12T09:25:25',
    trace: {
      click: ''
    }
  },
  {
    title: '文章3',
    art_id: 11113,
    aut_id: 222,
    aut_name: 'ForSakenSoul',
    ch_id: 333,
    collect_count: 1,
    comm_count: 1,
    cover: {
      type: 0,
      images: []
    },
    is_top: 0,
    like_count: 0,
    pubdate: '2020-06-12T09:25:25',
    trace: {
      click: ''
    }
  },
  {
    title: '文章4',
    art_id: 11114,
    aut_id: 222,
    aut_name: 'ForSakenSoul',
    ch_id: 333,
    collect_count: 1,
    comm_count: 1,
    cover: {
      type: 0,
      images: []
    },
    is_top: 0,
    like_count: 0,
    pubdate: '2020-06-12T09:25:25',
    trace: {
      click: ''
    }
  },
  {
    title: '文章5',
    art_id: 11115,
    aut_id: 222,
    aut_name: 'ForSakenSoul',
    ch_id: 333,
    collect_count: 1,
    comm_count: 1,
    cover: {
      type: 0,
      images: []
    },
    is_top: 0,
    like_count: 0,
    pubdate: '2020-06-12T09:25:25',
    trace: {
      click: ''
    }
  },
  {
    title: '文章6',
    art_id: 11116,
    aut_id: 222,
    aut_name: 'ForSakenSoul',
    ch_id: 333,
    collect_count: 1,
    comm_count: 1,
    cover: {
      type: 0,
      images: []
    },
    is_top: 0,
    like_count: 0,
    pubdate: '2020-06-12T09:25:25',
    trace: {
      click: ''
    }
  },
  {
    title: '文章7',
    art_id: 11117,
    aut_id: 222,
    aut_name: 'ForSakenSoul',
    ch_id: 333,
    collect_count: 1,
    comm_count: 1,
    cover: {
      type: 0,
      images: []
    },
    is_top: 0,
    like_count: 0,
    pubdate: '2020-06-12T09:25:25',
    trace: {
      click: ''
    }
  },
  {
    title: '文章8',
    art_id: 11118,
    aut_id: 222,
    aut_name: 'ForSakenSoul',
    ch_id: 333,
    collect_count: 1,
    comm_count: 1,
    cover: {
      type: 0,
      images: []
    },
    is_top: 0,
    like_count: 0,
    pubdate: '2020-06-12T09:25:25',
    trace: {
      click: ''
    }
  },
  {
    title: '文章9',
    art_id: 11119,
    aut_id: 222,
    aut_name: 'ForSakenSoul',
    ch_id: 333,
    collect_count: 1,
    comm_count: 1,
    cover: {
      type: 0,
      images: []
    },
    is_top: 0,
    like_count: 0,
    pubdate: '2020-06-12T09:25:25',
    trace: {
      click: ''
    }
  },
  {
    title: '文章10',
    art_id: 11110,
    aut_id: 222,
    aut_name: 'ForSakenSoul',
    ch_id: 333,
    collect_count: 1,
    comm_count: 1,
    cover: {
      type: 0,
      images: []
    },
    is_top: 0,
    like_count: 0,
    pubdate: '2020-06-12T09:25:25',
    trace: {
      click: ''
    }
  }
]

const mock = new MockAdapter(request)
const addGetAdapter = function (url, func) {
  mock.onGet(url).reply(() => [200, func()]);
}
const addAnyAdapter = function (url, func) {
  mock.onAny(url).reply((config) => [200, func(config)]);
}
const random = function (min, max) {
  if (max === undefined) {
    max = min
    min = 0
  }
  const range = max - min
  return Math.floor(Math.random() * range + min)
}
// 以下是模拟两个接口的示例
// addGetAdapter('/tempData', () => {
//     let now = Date.now();
//     let data = [];
//     for (let i = 0; i < 30; i++) {
//         data.unshift({
//             time: formatDate(new Date(now), 'HH:mm'),
//             value: random(700, 1000) / 10//Math.floor(Math.random() * 300 + 700) / 10,
//         })
//         now -= 1000 * 60;
//     }
//     return {
//         data
//     };
// });

export default {
  init () {
    addAnyAdapter('/authorizations', (config) => {
      console.log('config', config);
      if (JSON.parse(config.data)) {
        console.log('params', JSON.parse(config.data));
        const params = JSON.parse(config.data);
        if (params.mobile === '15606950280' && params.code === '123456') {
          return {
            data: {
              token: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE1NDMyODQzNjYsInVzZXJfaWQiOjF9.mLYitrKsn4E4KdQd0CNPugKrH8uQmXEQTlG_JutC8jU',
              refreshToken: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE1NDMyODQzNjYsInVzZXJfaWQiOjF9.mLYitrKsn4E4KdQd0CNPugKrH8uQmXEQTlG_JutC8jU'
            },
            message: ' 登录成功 ',
            status: 200
          }
        }
      } else {
        return {
          data: {
            message: ' 账号或者验证码错误 '
          },
          status: 400
        }
      }
    });
    addAnyAdapter('/sms/codes/15606950280', (config) => {
      return {
        data: {
          message: 'OK'
        },
        status: 200
      }
    })
    addAnyAdapter('/user', (config) => {
      if (config.headers.Authorization) {
        return {
          data: {
            id: '', // 用户id
            name: '黑马头条号', // 用户名
            photo: '', // 用户头像
            is_media: 0, // 是否是自媒体  0 否 1 是
            intro: '', // 简介
            certi: '', // 自媒体认证声明
            art_count: 0, // 发布文章数
            follow_count: 0, // 关注的数目
            fans_count: 0, // 被关注的数目
            like_count: 0 // 被点赞的数目
          },
          status: 200
        }
      }
    })
    addAnyAdapter('/channels', (config) => {
      console.log('channels', channelsData);
      return {
        data: {
          channels: channelsData
        },
        status: 200
      }
    })
    addAnyAdapter('/articles', (config) => {
      console.log('config', config);
      let results = [];
      if (config.params.isRefresh) {
        console.log('config.params.isRefresh', config.params.isRefresh);
        return {
          data: {
            pre_timestamp: 1609646304064,
            page: 1,
            results: refreshList
          },
          status: 200
        }
      } else if (config.params.channel_id === 10) {
        // 返回前端的文章
        results = articleList2
      } else if (config.params.channel_id === 5) {
        // 返回安卓的文章
        results = articleList3
      } else if (config.params.channel_id === 0) {
        console.log('id === 0');
        // 返回推荐的文章
        results = articleList1
      } else {
        results = articleList4
      }
      console.log('results1111', results);
      return {
        data: {
          pre_timestamp: 1609646304064,
          page: 1,
          results
        },
        status: 200
      }
    })
    addGetAdapter('/tempData', () => {
      let now = Date.now();
      const data = [];
      for (let i = 0; i < 30; i++) {
        data.unshift({
          time: formatDate(new Date(now), 'HH:mm'),
          value: random(700, 1000) // 10//Math.floor(Math.random() * 300 + 700) / 10,
        })
        now -= 1000 * 60;
      }
      return {
        data
      };
    });
  }
}
