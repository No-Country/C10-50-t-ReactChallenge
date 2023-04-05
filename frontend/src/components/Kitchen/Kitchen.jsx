import { useEffect, useState } from 'react'
import '../../styles/kitchen.css'
import CookingList from './CookingList'
import { useDispatch, useSelector } from 'react-redux'
import { getTicketsThunk } from '../../store/slices/tickets.slice'
import { DndContext, closestCenter } from '@dnd-kit/core'
import {
  arrayMove,
  horizontalListSortingStrategy,
  SortableContext,
  verticalListSortingStrategy,
} from '@dnd-kit/sortable'
import OrderList from './OrderList'
import ReadingList from './ReadingList'

const Kitchen = () => {
  const [cooking, setCooking] = useState([])
  const dispatch = useDispatch()
  const tickets = useSelector(state => state.tickets)
  const [showMore, setShowMore] = useState(false)

  useEffect(() => {
    dispatch(getTicketsThunk())
  }, [])

  const handleDragEnd = event => {
    setShowMore(!showMore)
    console.log('Drag end called')
  }

  return (
    <DndContext collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
      <main className="kitchen">
        <section className="orders">
          <div className="kitchen-title">
            <h2>Orders</h2>
          </div>

          <div className="card-container-kitchen">
            <SortableContext
              items={tickets.map(ticket => ticket._id)}
              strategy={horizontalListSortingStrategy}
            >
              {tickets.map(ticket => (
                <OrderList key={ticket._id} ticket={ticket} showMore={showMore} />
              ))}
            </SortableContext>
          </div>
        </section>

        <CookingList cooking={cooking} setCooking={setCooking} />
        <ReadingList />
      </main>
    </DndContext>
  )
}

export default Kitchen
