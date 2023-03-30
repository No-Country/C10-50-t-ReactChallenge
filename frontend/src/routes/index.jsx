import { createBrowserRouter } from 'react-router-dom'
import Admin from '../components/Admin/Admin'
import { Home } from '../components/Home/Home'
import Kitchen from '../components/Kitchen/Kitchen'
import Login from '../components/Login/Login'
import { Waiter } from '../components/Waiter/Waiter'
import Client from '../components/Client/Client'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/login',
    element: <Login />
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
  {
    path: '/admin',
    element: <Admin />
  }
])
