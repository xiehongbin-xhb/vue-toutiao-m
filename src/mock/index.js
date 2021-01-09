import MockAdapter from 'axios-mock-adapter'
import request from '@/util/request'
import { formatDate } from '@/util/lib'
import { setItem, getItem } from '@/util/storage'
const channelsData = [
  { id: 0, name: '推荐' },
  { id: 1, name: '前端' },
  { id: 2, name: '后端' },
  { id: 3, name: 'Android' },
  { id: 4, name: 'iOS' },
  { id: 5, name: '人工智能' },
  { id: 6, name: '开发工具' },
  { id: 7, name: '代码人生' },
  { id: 8, name: '阅读' }
]
const AllChannelsData = [
  { id: 1, name: '前端' },
  { id: 2, name: '后端' },
  { id: 3, name: 'Android' },
  { id: 4, name: 'iOS' },
  { id: 5, name: '人工智能' },
  { id: 6, name: '开发工具' },
  { id: 7, name: '代码人生' },
  { id: 8, name: '阅读' },
  { id: 9, name: '沸点' },
  { id: 10, name: '小册' },
  { id: 11, name: '活动' },
  { id: 12, name: '掘金' },
  { id: 13, name: '设计模式' },
  { id: 14, name: 'jQuery' },
  { id: 15, name: 'Vue' },
  { id: 16, name: 'React' },
  { id: 17, name: 'VS' },
  { id: 18, name: 'WebGL' },
  { id: 19, name: '架构' },
  { id: 20, name: '区块链' },
  { id: 21, name: '面试' },
  { id: 22, name: 'GIS' },
  { id: 23, name: 'Ubuntu' },
  { id: 24, name: 'Debug' },
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
    pubdate: '2020-06-12 09:25:25',
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
    pubdate: '2020-06-12 09:25:25',
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
    pubdate: '2020-06-12 09:25:25',
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
    pubdate: '2020-06-12 09:25:25',
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
    pubdate: '2020-06-12 09:25:25',
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
    pubdate: '2020-06-12 09:25:25',
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
    pubdate: '2020-06-12 09:25:25',
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
        'https://s3.ax1x.com/2021/01/03/s9J8uF.png',
        'https://s3.ax1x.com/2021/01/03/s9J8uF.png'
      ]
    },
    is_top: 0,
    like_count: 0,
    pubdate: '2020-06-12 09:25:25',
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
    pubdate: '2020-06-12 09:25:25',
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
    pubdate: '2020-06-12 09:25:25',
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
    pubdate: '2020-06-12 09:25:25',
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
    pubdate: '2020-06-12 09:25:25',
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
    pubdate: '2020-06-12 09:25:25',
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
    pubdate: '2020-06-12 09:25:25',
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
    pubdate: '2020-06-12 09:25:25',
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
    pubdate: '2020-06-12 09:25:25',
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
    pubdate: '2020-06-12 09:25:25',
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
    pubdate: '2020-06-12 09:25:25',
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
    pubdate: '2020-06-12 09:25:25',
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
    pubdate: '2020-06-12 09:25:25',
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
    pubdate: '2020-06-12 09:25:25',
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
    pubdate: '2020-06-12 09:25:25',
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
    pubdate: '2020-06-12 09:25:25',
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
    pubdate: '2020-06-12 09:25:25',
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
    pubdate: '2020-06-12 09:25:25',
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
    pubdate: '2020-06-12 09:25:25',
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
    pubdate: '2020-06-12 09:25:25',
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
    pubdate: '2020-06-12 09:25:25',
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
    pubdate: '2020-06-12 09:25:25',
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
    pubdate: '2020-06-12 09:25:25',
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
    pubdate: '2020-06-12 09:25:25',
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
    pubdate: '2020-06-12 09:25:25',
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
    pubdate: '2020-06-12 09:25:25',
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
    pubdate: '2020-06-12 09:25:25',
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
    pubdate: '2020-06-12 09:25:25',
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
    pubdate: '2020-06-12 09:25:25',
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
    pubdate: '2020-06-12 09:25:25',
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
    pubdate: '2020-06-12 09:25:25',
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
    pubdate: '2020-06-12 09:25:25',
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
    pubdate: '2020-06-12 09:25:25',
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
    pubdate: '2020-06-12 09:25:25',
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
    pubdate: '2020-06-12 09:25:25',
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
    pubdate: '2020-06-12 09:25:25',
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
    pubdate: '2020-06-12 09:25:25',
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
    pubdate: '2020-06-12 09:25:25',
    trace: {
      click: ''
    }
  }
]
const searchResultArticleList4 = [
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
    pubdate: '2020-06-12 09:25:25',
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
    pubdate: '2020-06-12 09:25:25',
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
    pubdate: '2020-06-12 09:25:25',
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
    pubdate: '2020-06-12 09:25:25',
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
    pubdate: '2020-06-12 09:25:25',
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
    pubdate: '2020-06-12 09:25:25',
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
    pubdate: '2020-06-12 09:25:25',
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
    pubdate: '2020-06-12 09:25:25',
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
    pubdate: '2020-06-12 09:25:25',
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
    pubdate: '2020-06-12 09:25:25',
    trace: {
      click: ''
    }
  }
]
const searchHistory = [
  '搜索历史记录1',
  '搜索历史记录2',
  '搜索历史记录3',
  '搜索历史记录4',
  '搜索历史记录5'
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
      if (JSON.parse(config.data)) {
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
      let channels = channelsData;
      if (getItem('mockData-userChannel') && getItem('mockData-userChannel') !== undefined) {
        channels = getItem('mockData-userChannel');
      } else {
        setItem('mockData-userChannel', channels);
      }
      return {
        data: {
          channels: channels
        },
        status: 200
      }
    })
    addAnyAdapter('/AllChannels', (config) => {
      return {
        data: {
          channels: AllChannelsData
        },
        status: 200
      }
    })
    addAnyAdapter('/addChannels', (config) => {
      const fixData = JSON.parse(config.data);
      const pushChannel = fixData.channels[0];
      AllChannelsData.forEach(d => {
        if (d.id === pushChannel.id) {
          const mockDataStorage = getItem('mockData-userChannel');
          mockDataStorage.push(d);
          setItem('mockData-userChannel', mockDataStorage);
        }
      })
      return {
        status: 200
      }
    })
    addAnyAdapter('/deleteChannels', (config) => {
      const id = config.params.id;
      AllChannelsData.forEach((d, index) => {
        if (d.id === id) {
          // 找到要删除的那一项
          if (getItem('mockData-userChannel')) {
            const mockDataStorage = getItem('mockData-userChannel');
            mockDataStorage.splice(index + 1, 1);
            setItem('mockData-userChannel', mockDataStorage);
          }
        }
      })
      return {
        status: 200
      }
    })
    addAnyAdapter('/articles', (config) => {
      let results = [];
      if (config.params.isRefresh) {
        return {
          data: {
            pre_timestamp: 1609646304064,
            page: 1,
            results: refreshList
          },
          status: 200
        }
      } else if (config.params.channel_id === 1) {
        // 返回前端的文章
        results = articleList2
      } else if (config.params.channel_id === 3) {
        // 返回安卓的文章
        results = articleList3
      } else if (config.params.channel_id === 0) {
        // 返回推荐的文章
        results = articleList1
      } else {
        results = articleList4
      }
      return {
        data: {
          pre_timestamp: 1609646304064,
          page: 1,
          results
        },
        status: 200
      }
    })
    addAnyAdapter('/searchSuggestions', (config) => {
      const query = config.params.q;
      return {
        data: {
          options: [
            query + '联想结果1' + query,
            query + '联想结果2' + query,
            query + '联想结果3' + query,
            query + '联想结果4' + query,
            query + '联想结果5' + query
          ]
        },
        status: 200
      }
    });
    addAnyAdapter('/searchResults', (config) => {
      return {
        data: {
          results: searchResultArticleList4,
          page: 1,
          per_page: 10,
          total_count: 10
        },
        status: 200
      }
    })
    addAnyAdapter('/searchedHistory', (config) => {
      return {
        data: {
          keywords: searchHistory
        },
        status: 200
      }
    });
    addAnyAdapter('/articlesContent', (config) => {
      return {
        data: {
          data: {
            title: '测试文章1',
            art_id: 1111,
            aut_id: 222,
            aut_name: 'ForSakenSoul',
            aut_photo: 'https://img.yzcdn.cn/vant/cat.jpeg',
            ch_id: 333,
            collect_count: 1,
            comm_count: 1,
            content: `<p><img alt="" src="https://img.yzcdn.cn/vant/cat.jpeg"></p>
            <p><img alt="" src="https://s3.ax1x.com/2021/01/03/spvGwt.md.jpg"></p>
            <p>这样一来，岂不是连父子组件通信都省了嘛？</p>`,
            cover: {
              type: 0,
              images: []
            },
            is_top: 0,
            like_count: 0,
            is_followed: true,
            is_collected: false,
            pubdate: '2020-06-12 09:25:25',
            trace: {
              click: ''
            }
          }
        },
        status: 200
      }
    })
    addAnyAdapter('/addFollower', (config) => {
      return {
        data: {
        },
        status: 200
      }
    })
    addAnyAdapter('/deleteFollower', (config) => {
      return {
        data: {
        },
        status: 200
      }
    })
    addAnyAdapter('/addCollected', (config) => {
      return {
        data: {
        },
        status: 200
      }
    })
    addAnyAdapter('/deleteCollected', (config) => {
      return {
        data: {
        },
        status: 200
      }
    })
    addAnyAdapter('/comments', (config) => {
      console.log('getComments', config);
      return {
        data: {
          end_id: 111111111,
          last_id: 11111111,
          results: [
            {
              aut_id: 111,
              aut_name: '黑马头条号',
              aut_photo: 'https://s3.ax1x.com/2021/01/03/spvGwt.md.jpg',
              com_id: 1124324,
              content: '评论1222',
              is_liking: false,
              is_top: 0,
              like_count: 0,
              pubdate: '2020-02-02 15:45:12',
              reply_count: 1
            },
            {
              aut_id: 111,
              aut_name: '黑马头条号',
              aut_photo: 'https://s3.ax1x.com/2021/01/03/spvGwt.md.jpg',
              com_id: 1124324,
              content: '评论1121344234',
              is_liking: false,
              is_top: 0,
              like_count: 0,
              pubdate: '2020-02-02 15:45:12',
              reply_count: 1
            },
            {
              aut_id: 111,
              aut_name: '黑马头条号',
              aut_photo: 'https://s3.ax1x.com/2021/01/03/spvGwt.md.jpg',
              com_id: 1124324,
              content: '黑马头条号黑马头条号黑马头条号黑马头条号黑马头条号黑马头条号黑马头条号黑马头条号黑马头条号黑马头条号黑马头条号黑马头条号黑马头条号',
              is_liking: false,
              is_top: 0,
              like_count: 0,
              pubdate: '2020-02-02 15:45:12',
              reply_count: 1
            }
          ],
          total_count: 100
        },
        status: 200
      }
    })
    // searchedHistory
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
