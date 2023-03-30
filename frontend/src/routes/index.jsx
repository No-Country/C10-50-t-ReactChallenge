import { createBrowserRouter } from 'react-router-dom'
import { Home } from '../components/Home/Home'
import Kitchen from '../components/Kitchen/Kitchen'
import { Waiter } from '../components/Waiter/Waiter'
import Client from '../components/Client/Client'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/login',
    element: <div>Login</div>,
  },
  {
    path: '/client',
    element: <Client />,
  },
  {
    path: '/kitchen',
    element: <Kitchen />,
  },
  {
    path: '/waiter',
    element: <Waiter />,
  },
])
