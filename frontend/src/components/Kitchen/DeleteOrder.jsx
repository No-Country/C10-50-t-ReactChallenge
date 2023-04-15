import axios from 'axios'
import trash from '../../assets/icons/fi_trash-2.svg'
import './delete.css'
import { useDispatch } from 'react-redux'
import { getTicketsThunk } from '../../store/slices/kitchen.slice'
import { toast } from 'react-hot-toast'

// eslint-disable-next-line react/prop-types
const DeleteOrder = ({ setShowAlert, showAlert }) => {
  const dispatch = useDispatch()
  const deleteOrder = () => {
    const id = showAlert
    axios.put('http://localhost:3001/api/ticket/', { _id: id, status: 'rejected' }).then(() => {
      dispatch(getTicketsThunk())
      setShowAlert(null)
      toast.success('Deleted successfully')
    })
  }

  return (
    <main className="alert-delete">
      <div className="alert-order">
        <div className="alert-header">
          <img src={trash} alt="" />
          <h3>Delete Order</h3>
        </div>
        <p>Are you sure to delete the order?</p>
        <div className="alert-btns">
          <button onClick={deleteOrder}>Delete Order</button>
          <button onClick={() => setShowAlert(null)}>Cancel</button>
        </div>
      </div>
    </main>
  )
}

export default DeleteOrder
