import { useNavigate } from 'react-router-dom'
import '../../styles/login.css'

const Login = () => {
  const users = [
    {
      id: 1,
      rol: 'Mozo',
      img: 'https://th.bing.com/th/id/R.4b616000cc8bfe483fe2115b4bc21a9d?rik=SUVqhSCu9ZPfgg&riu=http%3a%2f%2ficons.iconarchive.com%2ficons%2fcustom-icon-design%2fsilky-line-user%2f512%2fuser-icon.png&ehk=Ue1qjuR1Kuiom0%2bO%2boKMCMGmaqdMrAkam7%2fGoqx13Cs%3d&risl=&pid=ImgRaw&r=0',
      nav: 'waiter'
    },
    {
      id: 2,
      rol: 'Admin',
      img: 'https://th.bing.com/th/id/R.4b616000cc8bfe483fe2115b4bc21a9d?rik=SUVqhSCu9ZPfgg&riu=http%3a%2f%2ficons.iconarchive.com%2ficons%2fcustom-icon-design%2fsilky-line-user%2f512%2fuser-icon.png&ehk=Ue1qjuR1Kuiom0%2bO%2boKMCMGmaqdMrAkam7%2fGoqx13Cs%3d&risl=&pid=ImgRaw&r=0',
      nav: 'admin'
    },
    {
      id: 3,
      rol: 'Cocina',
      img: 'https://th.bing.com/th/id/R.4b616000cc8bfe483fe2115b4bc21a9d?rik=SUVqhSCu9ZPfgg&riu=http%3a%2f%2ficons.iconarchive.com%2ficons%2fcustom-icon-design%2fsilky-line-user%2f512%2fuser-icon.png&ehk=Ue1qjuR1Kuiom0%2bO%2boKMCMGmaqdMrAkam7%2fGoqx13Cs%3d&risl=&pid=ImgRaw&r=0',
      nav: 'kitchen'
    }

  ]

  const navigate = useNavigate()

  return (
    <main className='login'>
      <div className="profile">
        {users.map(user => (
          <div className="card-login" key={user.id} onClick={() => navigate(`/${user.nav}`)}>
            <img src={user.img} alt="" className="card-img-login" />
            <h2 className='card-title'>{user.rol}</h2>
          </div>
        ))}
      </div>
    </main>
  )
}

export default Login
