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
        'https://img.yzcdn.cn/vant/cat.jpeg"'
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
        'https://img.yzcdn.cn/vant/cat.jpeg"',
        'https://img.yzcdn.cn/vant/cat.jpeg"',
        'https://img.yzcdn.cn/vant/cat.jpeg"'
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

export default {
  channelsData,
  refreshList,
  articleList1,
  articleList2,
  articleList3,
  articleList4
}
