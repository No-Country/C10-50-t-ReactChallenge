import {
  closestCorners,
  DndContext,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
} from '@dnd-kit/core'
import { arrayMove, sortableKeyboardCoordinates } from '@dnd-kit/sortable'
import { useState } from 'react'
import { Container } from './Container'
import add from '../../assets/icons/add.svg'
import order from '../../assets/icons/order.svg'
import cooking from '../../assets/icons/cooking-pot.svg'
import ready from '../../assets/icons/fi_check-circle.svg'
import intable from '../../assets/icons/bowl.svg'
import wallet from '../../assets/icons/wallet.svg'
import { useDispatch, useSelector } from 'react-redux'
import { setItems } from '../../store/slices/tickets.slice'

export const MultipleContainers = () => {
  const dispatch = useDispatch()
  const items = useSelector(
    state =>
      state.tickets ?? {
        orders: [],
        kitchens: [],
        readys: [],
        inTable: [],
        payables: [],
      }
  )
  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  )

  function findContainer(id) {
    if (id in items) {
      return id
    }
    let containerId
    Object.keys(items).forEach(key =>
      // eslint-disable-next-line array-callback-return
      items[key].map(item => {
        if (item.id === id) {
          containerId = key
        }
      })
    )

    return containerId
  }
  function handleDragOver(event) {
    const { active, over, draggingRect } = event
    const { id } = active
    const { id: overId } = over ?? undefined
    // Find the containers
    const activeContainer = findContainer(id)
    const overContainer = findContainer(overId)
    if (!activeContainer || !overContainer || activeContainer === overContainer) {
      return
    }

    const activeItems = items[activeContainer]
    const overItems = items[overContainer]
    // Find the indexes for the items
    let activeIndex = -1
    activeItems.forEach((activeItem, index) => {
      if (activeItem?.id === id) {
        activeIndex = index
      }
    })
    let overIndex = -1
    overItems.forEach((overItem, index) => {
      if (overItem?.id === id) {
        overIndex = index
      }
    })

    let newIndex
    if (overId in items) {
      // We're at the root droppable of a container
      newIndex = overItems.length + 1
    } else {
      const isBelowLastItem =
        over &&
        overIndex === overItems.length - 1 &&
        draggingRect?.offsetTop > over.rect.offsetTop + over.rect.height
      const modifier = isBelowLastItem ? 1 : 0
      newIndex = overIndex >= 0 ? overIndex + modifier : overItems.length + 1
    }
    dispatch(
      setItems({
        ...items,
        [activeContainer]: [...items[activeContainer].filter(item => item.id !== active.id)],
        [overContainer]: [
          ...items[overContainer].slice(0, newIndex),
          items[activeContainer][activeIndex],
          ...items[overContainer].slice(newIndex, items[overContainer].length),
        ],
      })
    )
  }
  function handleDragEnd(event) {
    const { active, over } = event
    const { id } = active
    const { id: overId } = over

    const activeContainer = findContainer(id)
    const overContainer = findContainer(overId)

    if (!activeContainer || !overContainer || activeContainer !== overContainer) {
      return
    }
    // Find the indexes for the items
    let activeIndex = -1
    items[activeContainer].forEach((activeItem, index) => {
      if (activeItem.id === id) {
        activeIndex = index
      }
    })
    let overIndex = -1
    items[overContainer].forEach((overItem, index) => {
      if (overItem.id === overId) {
        overIndex = index
      }
    })
    if (activeIndex !== overIndex) {
      dispatch(
        setItems({
          ...items,
          [overContainer]: arrayMove(items[overContainer], activeIndex, overIndex),
        })
      )
    }
  }
  return (
    <div style={{ marginTop: '15px' }}>
      <DndContext
        sensors={sensors}
        collisionDetection={closestCorners}
        onDragEnd={handleDragEnd}
        onDragOver={handleDragOver}
      >
        <div style={{ display: 'flex', flexFlow: 'wrap', justifyContent: 'space-between' }}>
          <Container id="orders" title="Orders" icon={order} items={items.orders} />
          <Container id="kitchens" title="Cooking" icon={cooking} items={items.kitchens} />
          <Container id="readys" title="Ready" icon={ready} items={items.readys} />
          <Container id="inTable" title="In Table" icon={intable} items={items.inTable} />
          <Container id="payables" title="Payables" icon={wallet} items={items.payables} />
        </div>
      </DndContext>
    </div>
  )
}
