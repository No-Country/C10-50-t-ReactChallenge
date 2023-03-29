import { createBrowserRouter } from 'react-router-dom'
import Admin from '../components/Admin/Admin'
import { Home } from '../components/Home/Home'
import Kitchen from '../components/Kitchen/Kitchen'
import { Waiter } from '../components/Waiter/Waiter'

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
    element: <div>Client</div>,
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
