import Greeting from '@/components/Greeting'
import Users from '@/components/Users'
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
