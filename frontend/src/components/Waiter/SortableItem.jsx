/* eslint-disable react/prop-types */
import { useSortable } from '@dnd-kit/sortable'
import { Card } from 'antd'
import { CSS } from '@dnd-kit/utilities'

export function SortableItem(props) {
  const { attributes, listeners, setNodeRef, transform, transition } = useSortable({ id: props.id })
  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  }

  return (
    <div ref={setNodeRef} style={style} {...attributes} {...listeners}>
      <Card body>{props.id}</Card>
    </div>
  )
}
