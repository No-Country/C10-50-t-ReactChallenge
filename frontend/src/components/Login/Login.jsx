import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { getStaffThunk } from '../../store/slices/staff.slice'
import '../../styles/login.css'

const Login = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getStaffThunk())
  }, [])

  const staff = useSelector(state => state.staff)

  const navigate = useNavigate()

  return (
    <main className="login">
      <div className="profile">
        {staff.map(user => (
          <div className="card-login" key={staff.id} onClick={() => navigate(`/${staff.role}`)}>
            <img src={staff.image} alt="" className="card-img-login" />
            <h2 className="card-title">{staff.role}</h2>
          </div>
        ))}
      </div>
    </main>
  )
}

export default Login
