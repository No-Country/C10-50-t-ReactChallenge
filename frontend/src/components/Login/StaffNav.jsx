import arrowIcon from '../../assets/icons/fi_chevron-right.svg'

// eslint-disable-next-line react/prop-types
const StaffNav = ({ staffIcon, title, setStaffActually, staffActually, role }) => {
  return (
    <div
      className="nav-staff-card"
      style={
        staffActually === role
          ? { backgroundColor: '#03314B', color: '#fff' }
          : { backgroundColor: '' }
      }
      onClick={() => setStaffActually(role)}
    >
      <div className="nav-staff-info">
        <img src={staffIcon} className={staffActually === role && 'white-icon'} />
        <p>{title}</p>
      </div>
      <img src={arrowIcon} className={staffActually === role && 'white-icon'} />
    </div>
  )
}

export default StaffNav
