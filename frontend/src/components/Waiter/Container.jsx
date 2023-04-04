import { SortableContext, verticalListSortingStrategy } from '@dnd-kit/sortable'
import { Card } from 'antd'
import { SortableItem } from './sortableItem'
import PropTypes from 'prop-types'
import { useDroppable } from '@dnd-kit/core'

export const Container = ({ items, title, id }) => {
  const { setNodeRef } = useDroppable({ id })

  return (
    <Card style={{ width: '22%' }}>
      <h3>{title}</h3>
      <SortableContext strategy={verticalListSortingStrategy} items={items} id={id}>
        <div ref={setNodeRef}>
          {items.map(item => (
            <SortableItem key={item} id={item} />
          ))}
        </div>
      </SortableContext>
    </Card>
  )
}

Container.propTypes = {
  items: PropTypes.array.isRequired,
  title: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
}
