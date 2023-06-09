import { createBrowserRouter } from 'react-router-dom'
import Admin from '../components/Admin/Admin'
import { Home } from '../components/Home/Home'
import Kitchen from '../components/Kitchen/Kitchen'
import Login from '../components/Login/Login'
import { Waiter } from '../components/Waiter/Waiter'
import Client from '../components/Client/Client'
import ProtectedRoute from './ProtectedRoute'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/staff',
    element: <Login />,
  },
  {
    path: '/client',
    element: <Client />,
  },
  {
    path: '/kitchen',
    element: (
      <ProtectedRoute pathRole={'Kitchen'}>
        <Kitchen />
      </ProtectedRoute>
    ),
  },
  {
    path: '/waiter',
    element: (
      <ProtectedRoute pathRole={'Waiter'}>
        <Waiter />
      </ProtectedRoute>
    ),
  },
  {
    path: '/admin',
    element: (
      <ProtectedRoute pathRole={'Admin'}>
        <Admin />
      </ProtectedRoute>
    ),
  },
])
