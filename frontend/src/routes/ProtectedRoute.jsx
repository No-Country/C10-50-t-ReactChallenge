import { Navigate } from 'react-router-dom'

// eslint-disable-next-line react/prop-types
const ProtectedRoute = ({ children, pathRole }) => {
  const user = JSON.parse(localStorage.getItem('userInfo'))

  if (user && user.role === pathRole) {
    return children
  } else {
    return <Navigate to={'/staff'} />
  }
}

export default ProtectedRoute
