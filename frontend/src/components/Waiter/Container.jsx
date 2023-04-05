import { SortableContext, verticalListSortingStrategy } from '@dnd-kit/sortable'
import { Card } from 'antd'
import { SortableItem } from './sortableItem'
import PropTypes from 'prop-types'
import { useDroppable } from '@dnd-kit/core'

export const Container = ({ items, title, id }) => {
  const { setNodeRef } = useDroppable({ id })

  return (
    <Card style={{ width: '19%' }} bodyStyle={{ padding: '8px' }}>
      <h3>{title}</h3>
      <SortableContext strategy={verticalListSortingStrategy} items={items} id={id}>
        <div ref={setNodeRef}>
          {items.map((item, index) => {
            if (item?.id) {
              return (
                <SortableItem
                  key={item.id}
                  id={item.id}
                  table={item.table}
                  products={item.products}
                  client={item.client}
                  total={item.total}
                />
              )
            }
            return <div key={index}>error</div>
          })}
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
