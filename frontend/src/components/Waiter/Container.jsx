import { Card } from 'antd'
import PropTypes from 'prop-types'
import { Droppable } from 'react-beautiful-dnd'
import { OrderCard } from './OrderCard'
export const Container = ({ items, title, icon, dropId, handleDeleteTicket }) => {
  return (
    <Card
      style={{
        width: '19%',
        padding: '1rem 0.8rem',
        borderRadius: '4px',
        border: '2px solid #ccd1ff',
      }}
      bodyStyle={{ padding: '8px' }}
    >
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          backgroundColor: '#ffcd33',
          padding: '5px',
          marginBottom: '10px',
          borderRadius: '5px',
        }}
      >
        <img src={icon}></img>
        <h3>{title}</h3>
      </div>
      <Droppable droppableId={dropId}>
        {droppableProvided => (
          <div {...droppableProvided.droppableProps} ref={droppableProvided.innerRef}>
            {items.map((item, index) => {
              if (item?.id) {
                return (
                  <OrderCard
                    item={item}
                    key={item.id}
                    id={item.id}
                    index={index}
                    handleDeleteTicket={handleDeleteTicket}
                    containerId={dropId}
                  />
                )
              }
              return <div key={index}>error</div>
            })}
            {droppableProvided.placeholder}
          </div>
        )}
      </Droppable>
    </Card>
  )
}

Container.propTypes = {
  items: PropTypes.array.isRequired,
  title: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  dropId: PropTypes.string.isRequired,
  handleDeleteTicket: PropTypes.func.isRequired,
}
