import MockAdapter from 'axios-mock-adapter'
import request from '@/util/request'
import { formatDate } from '@/util/lib'

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
