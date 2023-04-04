/* eslint-disable react/prop-types */
import { useSortable } from '@dnd-kit/sortable'
import { Card } from 'antd'
import { CSS } from '@dnd-kit/utilities'
import PropTypes from 'prop-types'

export function SortableItem({ id }) {
  const { attributes, listeners, setNodeRef, transform, transition } = useSortable({ id })
  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  }

  return (
    <div ref={setNodeRef} style={style} {...attributes} {...listeners}>
      <Card>{id}</Card>
    </div>
  )
}

SortableItem.propTypes = {
  id: PropTypes.string.isRequired,
}
