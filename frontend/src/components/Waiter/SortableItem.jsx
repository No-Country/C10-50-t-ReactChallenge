/* eslint-disable react/prop-types */
import { useSortable } from '@dnd-kit/sortable'
import { CSS } from '@dnd-kit/utilities'
import PropTypes from 'prop-types'
import { OrderCard } from './OrderCard'

export function SortableItem({ id, table, ordersWithQuantity, client, total }) {
  const { attributes, listeners, setNodeRef, transform, transition, isDragging } = useSortable({
    id,
  })
  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    opacity: isDragging,
  }

  return (
    <div ref={setNodeRef} style={style} {...attributes} {...listeners}>
      <OrderCard
        table={table}
        ordersWithQuantity={ordersWithQuantity}
        client={client}
        total={total}
      />
    </div>
  )
}

SortableItem.propTypes = {
  id: PropTypes.string.isRequired,
  table: PropTypes.string.isRequired,
  ordersWithQuantity: PropTypes.array.isRequired,
  client: PropTypes.string.isRequired,
  total: PropTypes.number.isRequired,
}
