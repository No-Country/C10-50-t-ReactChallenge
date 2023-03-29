import { RouterProvider } from 'react-router'
import { router } from './routes'
import { GlobalStyles } from './styles/global'

function App() {
  return (
    <div>
      <GlobalStyles />
      <RouterProvider router={router} />
    </div>
  )
}

export default App
