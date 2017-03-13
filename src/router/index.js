import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import GettingStarted from '@/components/GettingStarted'
import ProjectList from '@/components/ProjectList'

import STLMain from '@/components/Projects/SimpleTodoList/Main'
import STLStepOne from '@/components/Projects/SimpleTodoList/StepOne'

Vue.use(Router)

export default new Router({
  routes: [{
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/project-list',
      name: 'ProjectList',
      component: ProjectList
    },
    {
      path: '/simple-todo-list',
      name: 'STLMain',
      component: STLMain,
      children: [{
        path: 'getting-started',
        name: 'GettingStarted',
        component: GettingStarted
      },{
        path: 'step-one',
        name: 'step-one',
        component: STLStepOne
      }]
    }
  ]
})
