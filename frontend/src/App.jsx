import { RouterProvider } from 'react-router'
import { router } from './routes'
import { GlobalStyles } from './styles/global'
import axios from 'axios'

axios.defaults.baseURL = 'http://localhost:3001/api'

function App() {
  return (
    <div>
      <GlobalStyles />
      <RouterProvider router={router} />
    </div>
  )
}

export default App
