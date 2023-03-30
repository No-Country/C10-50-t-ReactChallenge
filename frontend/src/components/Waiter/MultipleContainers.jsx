import {
  closestCenter,
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

export const MultipleContainers = () => {
  const [items, setItems] = useState({
    orders: ['1', '2'],
    kitchens: ['3', '4', '5'],
    readys: ['6', '7'],
    payables: ['8', '9', '10'],
  })

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

    return Object.keys(items).find(key => items[key].includes(id))
  }
  function handleDragOver(event) {
    const { active, over, draggingRect } = event

    const { id } = active
    const { id: overId } = over
    // Find the containers
    const activeContainer = findContainer(id)
    const overContainer = findContainer(overId)
    if (!activeContainer || !overContainer || activeContainer === overContainer) {
      return
    }
    setItems(prev => {
      const activeItems = prev[activeContainer]
      const overItems = prev[overContainer]
      // Find the indexes for the items
      const activeIndex = activeItems.indexOf(id)
      const overIndex = overItems.indexOf(overId)
      let newIndex
      if (overId in prev) {
        // We're at the root droppable of a container
        newIndex = overItems.length + 1
      } else {
        const isBelowLastItem =
          over &&
          overIndex === overItems.length - 1 &&
          draggingRect.offsetTop > over.rect.offsetTop + over.rect.height
        const modifier = isBelowLastItem ? 1 : 0
        newIndex = overIndex >= 0 ? overIndex + modifier : overItems.length + 1
      }
      return {
        ...prev,
        [activeContainer]: [...prev[activeContainer].filter(item => item !== active.id)],
        [overContainer]: [
          ...prev[overContainer].slice(0, newIndex),
          items[activeContainer][activeIndex],
          ...prev[overContainer].slice(newIndex, prev[overContainer].length),
        ],
      }
    })
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

    const activeIndex = items[activeContainer].indexOf(active.id)
    const overIndex = items[overContainer].indexOf(overId)

    if (activeIndex !== overIndex) {
      setItems(items => ({
        ...items,
        [overContainer]: arrayMove(items[overContainer], activeIndex, overIndex),
      }))
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
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <Container id="orders" title={'Pedidos'} items={items.orders} />
          <Container id="kitchens" title={'Cocina'} items={items.kitchens} />
          <Container id="readys" title={'Listos'} items={items.readys} />
          <Container id="payables" title={'Por pagar'} items={items.payables} />
        </div>
      </DndContext>
    </div>
  )
}
