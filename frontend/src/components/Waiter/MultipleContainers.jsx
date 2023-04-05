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

export const MultipleContainers = () => {
  const [items, setItems] = useState({
    orders: [
      {
        id: '1a',
        table: '04',
        client: 'Pedro',
        products: [{ id: '1', name: 'Gaseosa', quantity: 3 }],
        total: 45,
      },
      {
        id: '2a',
        table: '05',
        client: 'Ana',
        products: [{ id: '2', name: 'pizza', quantity: 3 }],
        total: 45,
      },

      {
        id: '3a',
        table: '05',
        client: 'Juan',
        products: [{ id: '3', name: 'pizza', quantity: 3 }],
        total: 45,
      },
      {
        id: '4',
        table: '05',
        client: 'Pablo',
        products: [{ id: '4', name: 'pizza', quantity: 3 }],
        total: 45,
      },
    ],
    kitchens: [],
    readys: [],
    inTable: [],
    payables: [],
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
    setItems(prev => {
      const activeItems = prev[activeContainer]
      const overItems = prev[overContainer]
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
      if (overId in prev) {
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
      return {
        ...prev,
        [activeContainer]: [...prev[activeContainer].filter(item => item.id !== active.id)],
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
        <div style={{ display: 'flex', flexFlow: 'wrap', justifyContent: 'space-between' }}>
          <Container id="orders" title="Orders" items={items.orders} />
          <Container id="kitchens" title="Cooking" items={items.kitchens} />
          <Container id="readys" title="Ready" items={items.readys} />
          <Container id="inTable" title="In Table" items={items.inTable} />
          <Container id="payables" title="Payables" items={items.payables} />
        </div>
      </DndContext>
    </div>
  )
}
