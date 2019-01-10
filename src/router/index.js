import Vue from 'vue'
import Router from 'vue-router'

// import PagesView from '../views/PagesView'
// import HomeView from '../views/HomeView'
// import MovieView from '../views/MovieView'
// import BookView from '../views/BookView'
// import StatusView from '../views/StatusView'
// import GroupView from '../views/GroupView'
// import SubjectView from '../views/SubjectView'
// import DetailView from '../views/DetailView'
// import SearchView from '../views/SearchView'
// import LoginView from '../views/LoginView'
// import RegisterView from '../views/RegisterView'
// import NoteView from '../views/NoteView'

const PagesView = () => import(/* webpackChunkName: "group-foo" */ '../views/PagesView')
const HomeView = () => import('../views/HomeView')
const MovieView = () => import('../views/MovieView')
const BookView = () => import('../views/BookView')
const StatusView = () => import('../views/StatusView')
const GroupView = () => import('../views/GroupView')
const SubjectView = () => import('../views/SubjectView')
const DetailView = () => import('../views/DetailView')
const SearchView = () => import('../views/SearchView')
const LoginView = () => import('../views/LoginView')
const RegisterView = () => import('../views/RegisterView')
const NoteView = () => import('../views/NoteView')

import MusicView from '../views/MusicView'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/pages/'
    },
    {
      path: '/pages',
      component: PagesView,
      children: [
        {
          path: '',
          redirect: '/pages/home'
        },
        {
          path: 'home',
          name: 'HomeView',
          component: HomeView
        },

        {
          path: 'movie',
          name: 'MovieView',
          component: MovieView
        },
        {
          path: 'book',
          name: 'BookView',
          component: BookView
        },
        {
          path: 'status',
          name: 'StatusView',
          component: StatusView
        },
        {
          path: 'group',
          name: 'GroupView',
          component: GroupView
        },
        {
          path: 'detail',
          name: 'DetailView',
          component: DetailView
        }
      ]
    },
    {
      path: '/pages/:classify/subject/:id',
      name: 'SubjectView',
      components: {
        default: PagesView,
        subject: SubjectView
      }
    },
    {
      path: '/search',
      name: 'SearchView',
      components: {
        default: PagesView,
        search: SearchView
      }
    },
    {
      path: '/login',
      name: 'LoginView',
      component: LoginView
    },
    {
      path: '/register',
      name: 'RegisterView',
      component: RegisterView
    },
    {
      path: '/note',
      name: 'NoteView',
      component: NoteView
    },
    {
      path: 'music',
      name: 'MusicView',
      component: MusicView
    },
    {
      path: '*',
      redirect: '/pages/'
    }
  ]
})
