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

  console.log(staff)

  const navigate = useNavigate()

  return (
    <main className="login">
      <div className="profile">
        {staff.length &&
          staff.map(staff => (
            <div className="card-login" key={staff.id} onClick={() => navigate(`/${staff.role}`)}>
              <img src={staff.image} alt="" className="card-img-login" />
              <h2>{staff.name}</h2>
              <h2 className="card-title">{staff.role}</h2>
            </div>
          ))}
      </div>

      <div>
        <button onClick={() => navigate('/kitchen')}>cocina</button>
        <button onClick={() => navigate('/waiter')}>camarero</button>
        <button onClick={() => navigate('/admin')}>admin</button>
      </div>
    </main>
  )
}

export default Login
