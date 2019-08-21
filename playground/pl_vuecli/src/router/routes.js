import Greeting from '@/components/Greeting'
import Users from '@/components/Users'
import Products from '@/components/Products'
import NotFound from '@/components/NotFound'

export default [
  {
    path: '/',
    redirect: '/greeting',
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
