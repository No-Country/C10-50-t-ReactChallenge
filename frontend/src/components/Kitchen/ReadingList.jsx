import '../../styles/ready.css'
import checkIcon from '../../assets/icons/fi_check-circle.svg'

const ReadingList = () => {
  return (
    <section className="ready">
      <div className="kitchen-title">
        <img src={checkIcon} alt="" />
        <h2>Ready</h2>
      </div>
    </section>
  )
}

export default ReadingList
