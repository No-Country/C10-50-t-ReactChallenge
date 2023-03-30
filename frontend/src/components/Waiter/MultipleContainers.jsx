import { closestCenter, DndContext } from '@dnd-kit/core'
import { SortableContext, verticalListSortingStrategy } from '@dnd-kit/sortable'
import { Card } from 'antd'
import { useState } from 'react'
import { SortableItem } from './sortableItem'

export const MultipleContainers = () => {
  const [orders, setOrders] = useState([1, 2, 3])
  const [kitchens, setKitchens] = useState([4, 5])
  const [readys, setReadys] = useState([7, 8, 9])
  const [payables, setPayables] = useState([10, 11])

  return (
    <div style={{ marginTop: '15px' }}>
      <DndContext collisionDetection={closestCenter}>
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <Card style={{ width: '22%' }}>
            <h3>Pedidos</h3>
            <SortableContext strategy={verticalListSortingStrategy} items={orders}>
              {orders.map(order => (
                <SortableItem key={`order-${order}`} id={order} />
              ))}
            </SortableContext>
          </Card>
          <Card style={{ width: '22%' }}>
            <h3>Cocina</h3>
            <SortableContext strategy={verticalListSortingStrategy} items={kitchens}>
              {kitchens.map(kitchen => (
                <SortableItem key={`kitchen-${kitchen}`} id={kitchen} />
              ))}
            </SortableContext>
          </Card>
          <Card style={{ width: '22%' }}>
            <h3>Listos</h3>
            <SortableContext strategy={verticalListSortingStrategy} items={readys}>
              {readys.map(ready => (
                <SortableItem key={`ready-${ready}`} id={ready} />
              ))}
            </SortableContext>
          </Card>
          <Card style={{ width: '22%' }}>
            <h3>Por pagar</h3>
            <SortableContext strategy={verticalListSortingStrategy} items={payables}>
              {payables.map(payable => (
                <SortableItem key={`payable-${payable}`} id={payable} />
              ))}
            </SortableContext>
          </Card>
        </div>
      </DndContext>
    </div>
  )
}
