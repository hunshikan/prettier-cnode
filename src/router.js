import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Topic from './views/Topic.vue'
import User from './views/User.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/:tab?',
      name: 'home',
      component: Home
    },
    {
      path: '/topic/:id&author=:name',
      name: 'topic',
      component: Topic
    },
    {
      path: '/user/:loginname',
      name: 'user',
      component: User
    }
  ]
})
