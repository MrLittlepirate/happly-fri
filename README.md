# happly-fri

> practice

## <a id="BuildSetup">Build Setup</a>
``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit

# run e2e tests
npm run e2e

# run all tests
npm test
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).


# 说明
``` 本项目学习自 bailicangdu 的开源项目： ``` [vue2-happyfri](https://github.com/bailicangdu/vue2-happyfri.git)

>  vue2 + vue-router + vuex

>  开发环境 windows7   Chrome 56 nodejs 8.11.1

>  这个项目主要用于 vue2 + vuex 的入门练习


## 项目运行
参见 <a href="#BuildSetup">Build Setup</a>部分

#  效果演示


## 安装vue-router
>  若没有用vue-cli搭建vue-router，按照以下步骤引入（没实践，纯属参考安装vuex）：
``` bash
# 安装vue-router
npm install vue-router

# 创建router目录

# 在main.js中引入router目录并实例化
...
import router from './router'

new Vue({
  ...
  router,
  ...
})
...

``` 
``` 了解更多vue-router相关知识，点击进入 ```[vue-router](https://router.vuejs.org/zh-cn/)


## 安装vuex
``` bash
# 安装vuex
npm install vuex --save-dev

# 创建store目录

# 在main.js中引入store目录并实例化
...
import store from './store'

new Vue({
  ...
  store,
  ...
})
...

```
``` 了解更多vuex相关知识，点击进入 ```[官网](https://vuex.vuejs.org/zh-cn/)

## 路由配置
```js
import Vue from 'vue'
import Router from 'vue-router'
import App from '../App'
import Home from '@/page/home'
import Item from '@/page/item'
import Score from '@/page/score'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'App',
      component: App,
      children: [
        {
          path: '',
          name: 'Home',
          component: Home
        },
        {
          path: '/item',
          name: 'Item',
          component: Item
        },
        {
          path: '/item/:id',
          name: 'Item',
          component: Item
        },
        {
          path: '/score',
          name: 'Score',
          component: Score
        }
      ]
    }
  ]
})

```

## 配置state
```js
// 题目详情
var itemList = [
    // 第一题
    {
        "topic_id": 20,
		"active_topic_id": 4,
		"type": "ONE",
		"topic_name": "题目一",
		"active_id": 1,
		"active_title": "欢乐星期五标题",
		"active_topic_phase": "第一周",
		"active_start_time": "1479139200",
		"active_end_time": "1482163200",
		"topic_answer": [ // 题目答案选项
            // 选项1
            {
                "topic_answer_id": 1,
                "topic_id": 20,
                "answer_name": "答案aaaa",
                "is_standard_answer": 0
            },
            // 选项2
            {
                "topic_answer_id": 2,
                "topic_id": 20,
                "answer_name": "正确答案",
                "is_standard_answer": 0
            },
            // 选项3
            {
                "topic_answer_id": 3,
                "topic_id": 20,
                "answer_name": "答案cccc",
                "is_standard_answer": 0
            },
            // 选项4
            {
                "topic_answer_id": 4,
                "topic_id": 20,
                "answer_name": "答案dddd",
                "is_standard_answer": 1
            }
        ]
    },
    // 第二题
    {
        "topic_id": 21,
		"active_topic_id": 4,
		"type": "MORE",
		"topic_name": "题目二",
		"active_id": 1,
		"active_title": "欢乐星期五标题",
		"active_topic_phase": "第一周",
		"active_start_time": "1479139200",
		"active_end_time": "1482163200",
		"topic_answer": [   // 题目答案选项
            // 选项1
            {
                "topic_answer_id": 5,
                "topic_id": 21,
                "answer_name": "答案A",
                "is_standard_answer": 1
            },
            // 选项2
            {
                "topic_answer_id": 6,
                "topic_id": 21,
                "answer_name": "答案B",
                "is_standard_answer": 0
            },
            // 选项3
            {
                "topic_answer_id": 7,
                "topic_id": 21,
                "answer_name": "正确答案",
                "is_standard_answer": 0
            },
            // 选项4
            {
                "topic_answer_id": 8,
                "topic_id": 21,
                "answer_name": "答案D",
                "is_standard_answer": 0
            }
        ]
    },
    // 第三题
    {
        "topic_id": 21,
		"active_topic_id": 4,
		"type": "MORE",
		"topic_name": "题目三",
		"active_id": 1,
		"active_title": "欢乐星期五标题",
		"active_topic_phase": "第一周",
		"active_start_time": "1479139200",
		"active_end_time": "1482163200",
        "topic_answer": [   // 题目答案选项
              // 选项1
              {
                "topic_answer_id": 9,
                "topic_id": 21,
                "answer_name": "测试A",
                "is_standard_answer": 1
              },
              // 选项2
              {
                "topic_answer_id": 10,
                "topic_id": 21,
                "answer_name": "BBBBBB",
                "is_standard_answer": 0
              },
              // 选项3
              {
                "topic_answer_id": 11,
                "topic_id": 21,
                "answer_name": "CCCCCC",
                "is_standard_answer": 0
              },
              // 选项4
              {
                "topic_answer_id": 12,
                "topic_id": 21,
                "answer_name": "正确答案",
                "is_standard_answer": 0
              }
        ]
    },
    // 第四题
    {
        "topic_id": 21,
		"active_topic_id": 4,
		"type": "MORE",
		"topic_name": "题目四",
		"active_id": 1,
		"active_title": "欢乐星期五标题",
		"active_topic_phase": "第一周",
		"active_start_time": "1479139200",
		"active_end_time": "1482163200",
		"topic_answer": [   // 题目答案选项
            // 选项1
            {
                "topic_answer_id": 13,
                "topic_id": 21,
                "answer_name": "正确答案",
                "is_standard_answer": 1
            },
            // 选项2
            {
                "topic_answer_id": 14,
                "topic_id": 21,
                "answer_name": "A是错的",
                "is_standard_answer": 0
            },
            // 选项3
            {
                "topic_answer_id": 15,
                "topic_id": 21,
                "answer_name": "D是对的",
                "is_standard_answer": 0
            },
            // 选项4
            {
                "topic_answer_id": 16,
                "topic_id": 21,
                "answer_name": "C说的不对",
                "is_standard_answer": 0
            }
        ]
    },
    // 第五题
    {
        "topic_id": 21,
		"active_topic_id": 4,
		"type": "MORE",
		"topic_name": "题目五",
		"active_id": 1,
		"active_title": "欢乐星期五标题",
		"active_topic_phase": "第一周",
		"active_start_time": "1479139200",
		"active_end_time": "1482163200",
		"topic_answer": [   // 题目答案选项
            // 选项1
            {
                "topic_answer_id": 17,
                "topic_id": 21,
                "answer_name": "错误答案",
                "is_standard_answer": 1
            },
            // 选项2
            {
                "topic_answer_id": 18,
                "topic_id": 21,
                "answer_name": "正确答案",
                "is_standard_answer": 0
            },
            // 选项3
            {
                "topic_answer_id": 19,
                "topic_id": 21,
                "answer_name": "错误答案",
                "is_standard_answer": 0
            },
            // 选项4
            {
                "topic_answer_id": 20,
                "topic_id": 21,
                "answer_name": "错误答案",
                "is_standard_answer": 0
            }
        ]
    }
]

const state = {
    level: '第一周', //活动周数
    itemNum: 1, // 第几题
    allTime: 0, // 总共用时
    timer: '',  // 定时器
    itemDetail: itemList,   // 题目详情
    answerid: [] // 答案id    
}

export default state
```

## 配置actions
```js
const actions = {
    // 保存答案
    saveAnswer({commit, state}, answerId) {
        console.log('当前题目序号： ' + state.itemNum);
        console.log('保存答案: ' + answerId);
        // 记住答案id
        commit('REMBER_ANSWER', answerId);
        if (state.itemNum < state.itemDetail.length) {
            // 不是最后一题--> 题目序号递增，跳转到下一题
            state.itemNum ++;
        }
    }
}

export default actions
```


## 配置mutations
```js
const REMBER_ANSWER = 'REMBER_ANSWER'   // 记录答案

const mutations = {
    // 记录答案
    [REMBER_ANSWER](state, answerId) {
        state.answerid.push(answerId);
    }
}

export default mutations
```


## 创建store
>  [store](./src/store/index.js)

>  创建了```@/store/index.js```之后,还需要在创建vue实例中引入它，不然不会生效。

```js
import Vue from 'vue'
import Vuex from 'vuex'
import state from './state'
import mutations from './mutations'
import actions from './actions' 

Vue.use(Vuex)

const store =  new Vuex.Store({
    state,
    actions,
    mutations
    //,getters
})

export default store
```


## 创建vue实例
> [main.js](./src/main.js)

```js
import Vue from 'vue'
import App from './App'
import router from './router'   /* 引入路由vue-router */
import store from './store'     /* 引入存储vuex */ 

Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})

```
