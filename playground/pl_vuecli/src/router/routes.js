import Greeting from '@/components/Greeting'
import Users from '@/components/Users'

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
    path: '/users',
    name: 'users',
    component: Users,
  },
]
