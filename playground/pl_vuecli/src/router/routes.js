import Greeting from '@/components/Greeting'
import Users from '@/components/Users'
import Products from '@/components/Products'
import NotFound from '@/components/NotFound'
import Home from '@/components/Home'

export default [
  {
    path: '/',
    name: 'home',
    component: Home,
  },
  {
    path: '/greeting',
    name: 'greeting',
    component: Greeting,
  },
  {
    path: '/products',
    name: 'products',
    component: Products,
  },
  {
    path: '/users/:id',
    name: 'user',
    component: Users,
  },
  {
    path: '/users',
    redirect: '/users/1',
  },
  {
    path: '*',
    name: 'notFound',
    component: NotFound,
  },
]
