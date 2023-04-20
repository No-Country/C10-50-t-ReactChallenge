import axios from 'axios'
import { DragDropContext } from 'react-beautiful-dnd'
import { useDispatch, useSelector } from 'react-redux'
import intable from '../../assets/icons/bowl.svg'
import cooking from '../../assets/icons/cooking-pot.svg'
import ready from '../../assets/icons/fi_check-circle.svg'
import order from '../../assets/icons/order.svg'
import wallet from '../../assets/icons/wallet.svg'
import { setItems } from '../../store/slices/tickets.slice'
import { Container } from './Container'

export const MultipleContainers = () => {
  const dispatch = useDispatch()
  const items = useSelector(
    state =>
      state.tickets ?? {
        tickets: [],
        cooking: [],
        readys: [],
        inTable: [],
        payables: [],
      }
  )

  const reorder = (list, startIndex, endIndex) => {
    const result = [...list]
    const [removed] = result.splice(startIndex, 1)
    result.splice(endIndex, 0, removed)

    return result
  }

  const handleDeleteTicket = (containerId, item) => {
    const updateContainer = items[containerId].reduce((acc, itemContainer) => {
      if (itemContainer.id !== item.id) {
        return [...acc, itemContainer]
      }
      return acc
    }, [])
    const newItems = { ...items, [containerId]: updateContainer }
    dispatch(setItems(newItems))
    axios
      .put('/api/ticket', { _id: item.id, status: 'rejected' })
      .catch(error => console.log(error))
  }

  const getStatus = containerId => {
    switch (containerId) {
      case 'tickets':
        return 'ordered'
      case 'cooking':
        return 'cooking'
      case 'readys':
        return 'ready progress'
      case 'inTable':
        return 'in table'
      case 'payables':
        return 'payable'
      default:
        return 'rejected'
    }
  }
  const handleDragEnd = event => {
    const { source, destination, draggableId } = event
    if (!destination) return
    if (source.index === destination.index && source.droppableId === destination.droppableId) {
      return
    }

    // Almecenarlos a otro contenedor
    const sourceList = items[source.droppableId]
    const destinationList = items[destination.droppableId]

    if (sourceList === destinationList) {
      const reorderedList = reorder(sourceList, source.index, destination.index)
      const newItems = { ...items, [source.droppableId]: reorderedList }
      dispatch(setItems(newItems))
    } else {
      const sourceClone = Array.from(sourceList)
      const [draggedItem] = sourceClone.splice(source.index, 1)
      const destinationClone = Array.from(destinationList)
      destinationClone.splice(destination.index, 0, draggedItem)
      const newItems = {
        ...items,
        [source.droppableId]: sourceClone,
        [destination.droppableId]: destinationClone,
      }
      dispatch(setItems(newItems))
      const status = getStatus(destination.droppableId)

      axios.put('/api/ticket', { _id: draggableId, status }).catch(error => console.log(error))
    }
  }
  return (
    <div style={{ marginTop: '15px' }}>
      <DragDropContext onDragEnd={handleDragEnd}>
        <div style={{ display: 'flex', flexFlow: 'wrap', justifyContent: 'space-between' }}>
          <Container
            dropId="tickets"
            title="Orders"
            icon={order}
            items={items.tickets}
            handleDeleteTicket={handleDeleteTicket}
          />
          <Container
            dropId="cooking"
            title="Cooking"
            icon={cooking}
            items={items.cooking}
            handleDeleteTicket={handleDeleteTicket}
          />
          <Container
            dropId="readys"
            title="Ready"
            icon={ready}
            items={items.readys}
            handleDeleteTicket={handleDeleteTicket}
          />
          <Container
            dropId="inTable"
            title="In Table"
            icon={intable}
            items={items.inTable}
            handleDeleteTicket={handleDeleteTicket}
          />
          <Container
            dropId="payables"
            title="Payables"
            icon={wallet}
            items={items.payables}
            handleDeleteTicket={handleDeleteTicket}
          />
        </div>
      </DragDropContext>
    </div>
  )
}
