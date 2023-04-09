import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { getStaffThunk } from '../../store/slices/staff.slice'
import '../../styles/login.css'
import Navbar from '../Navbar/Navbar.jsx'
import adminIcon from '../../assets/icons/user-business.svg'
import waitressIcon from '../../assets/icons/every-user.svg'
import kitchenIcon from '../../assets/icons/staff-kitchen.svg'
import arrowIcon from '../../assets/icons/fi_chevron-right.svg'
import StaffNav from './StaffNav'

const Login = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getStaffThunk())
  }, [])

  const staff = useSelector(state => state.staff)

  const navigate = useNavigate()
  const [staffActually, setStaffActually] = useState('Admin')

  return (
    <div>
      <Navbar />

      <main className="login">
        <div className="nav-staff">
          <StaffNav
            staffIcon={adminIcon}
            title={'Admin'}
            role={'Admin'}
            staffActually={staffActually}
            setStaffActually={setStaffActually}
          />
          <StaffNav
            staffIcon={waitressIcon}
            title={'Waitress'}
            role={'Waiter'}
            staffActually={staffActually}
            setStaffActually={setStaffActually}
          />
          <StaffNav
            staffIcon={kitchenIcon}
            title={'Kitchen'}
            role={'Kitchen'}
            staffActually={staffActually}
            setStaffActually={setStaffActually}
          />
        </div>

        <div className="profile">
          <div className="staff-actually">
            <h2>Staff</h2>
            <img src={arrowIcon} alt="" />
            <h2>{staffActually}</h2>
          </div>
          {staff.length > 0 &&
            staff.map(
              staff =>
                staff.role === staffActually && (
                  <div
                    className="card-login"
                    key={staff.id}
                    onClick={() => navigate(`/${staff.role}`)}
                  >
                    <div className="card-img-container">
                      <img src={staff.image} alt="" className="card-img-login" />
                    </div>
                    <h2>{staff.name}</h2>
                  </div>
                )
            )}
        </div>
      </main>
    </div>
  )
}

export default Login
