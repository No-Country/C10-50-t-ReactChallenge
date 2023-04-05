import { SortableContext, verticalListSortingStrategy } from '@dnd-kit/sortable'
import { Card } from 'antd'
import { SortableItem } from './sortableItem'
import PropTypes from 'prop-types'
import { useDroppable } from '@dnd-kit/core'
export const Container = ({ items, title, icon, id }) => {
  const { setNodeRef } = useDroppable({ id })

  return (
    <Card style={{ width: '19%' }} bodyStyle={{ padding: '8px' }}>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          backgroundColor: '#ffcd33',
          padding: '5px',
          borderRadius: '5px',
        }}
      >
        <img src={icon}></img>
        <h3>{title}</h3>
      </div>
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
  icon: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
}
