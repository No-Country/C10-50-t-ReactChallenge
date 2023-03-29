import { createBrowserRouter } from 'react-router-dom'
import { Home } from '../components/home/Home'
import Kitchen from '../components/kitchen/Kitchen'
import Waiter from '../components/waiter/Waiter'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/login',
    element: <div>Login</div>
  },
  {
    path: '/kitchen',
    element: <Kitchen />
  },
  {
    path: '/waiter',
    element: <Waiter />
  }
])
