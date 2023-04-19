import { RouterProvider } from 'react-router'
import { router } from './routes'
import { GlobalStyles } from './styles/global'
import axios from 'axios'

axios.defaults.baseURL = 'https://c10-50-t-reactchallenge-production.up.railway.app/'

function App() {
  return (
    <div>
      <GlobalStyles />
      <RouterProvider router={router} />
    </div>
  )
}

export default App
