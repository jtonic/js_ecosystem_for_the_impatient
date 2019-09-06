import Greeting from '@/components/Greeting'
import Users from '@/components/Users'
import Products from '@/components/Products'
import NotFound from '@/components/NotFound'
import Home from '@/components/Home'
import Checkout from '@/components/Checkout'

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
    path: '/checkout',
    redirect: '/checkout/1',
  },
  {
    path: '/checkout/:id',
    name: 'checkout',
    component: Checkout,
  },
  {
    path: '*',
    name: 'notFound',
    component: NotFound,
  },
]
