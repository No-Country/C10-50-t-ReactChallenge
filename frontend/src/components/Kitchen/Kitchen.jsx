import { useEffect } from 'react'
import '../../styles/kitchen.css'
import { useDispatch, useSelector } from 'react-redux'
import { getTicketsThunk, setTickets } from '../../store/slices/tickets.slice'
import orderIcon from '../../assets/icons/order.svg'
import cookingIcon from '../../assets/icons/cooking-pot.svg'
import readyIcon from '../../assets/icons/fi_check-circle.svg'
import ContainerKitchen from './ContainerKitchen'
import { DragDropContext } from 'react-beautiful-dnd'
import Navbar from '../Navbar/Navbar'

const Kitchen = () => {
  const dispatch = useDispatch()
  const tickets = useSelector(state => state.tickets)

  useEffect(() => {
    if (tickets.orders.length === 0 && tickets.cooking.length === 0 && tickets.ready.length === 0) {
      dispatch(getTicketsThunk())
    }
  }, [])

  const reorder = (list, startIndex, endIndex) => {
    const result = [...list]
    const [removed] = result.splice(startIndex, 1)
    result.splice(endIndex, 0, removed)

    return result
  }

  const handleDragEnd = event => {
    const { source, destination } = event
    if (!destination) return
    if (source.index === destination.index && source.droppableId === destination.droppableId) return

    // Almecenarlos a otro contenedor
    const sourceList = tickets[source.droppableId]
    const destinationList = tickets[destination.droppableId]

    if (sourceList === destinationList) {
      const reorderedList = reorder(sourceList, source.index, destination.index)
      const newTickets = { ...tickets, [source.droppableId]: reorderedList }
      dispatch(setTickets(newTickets))
    } else {
      const sourceClone = Array.from(sourceList)
      const [draggedItem] = sourceClone.splice(source.index, 1)
      const destinationClone = Array.from(destinationList)
      destinationClone.splice(destination.index, 0, draggedItem)
      const newTickets = {
        ...tickets,
        [source.droppableId]: sourceClone,
        [destination.droppableId]: destinationClone,
      }
      dispatch(setTickets(newTickets))
    }
  }

  return (
    <DragDropContext onDragEnd={handleDragEnd}>
      <Navbar isShowed={true} />
      <main className="kitchen">
        {/* Orders */}
        <ContainerKitchen
          title={'Orders'}
          icon={orderIcon}
          items={tickets.orders}
          dropId={'orders'}
          changeClass={null}
        />

        {/* COOKING */}

        <ContainerKitchen
          title={'Cooking'}
          icon={cookingIcon}
          items={tickets.cooking}
          dropId={'cooking'}
          changeClass={'cooking'}
        />

        {/* READY */}
        <ContainerKitchen
          title={'Ready'}
          icon={readyIcon}
          items={tickets.ready}
          dropId={'ready'}
          changeClass={null}
        />
      </main>
    </DragDropContext>
  )
}

export default Kitchen
