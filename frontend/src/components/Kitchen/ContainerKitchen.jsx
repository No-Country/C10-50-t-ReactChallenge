/* eslint-disable react/prop-types */
import { Droppable } from 'react-beautiful-dnd'
import KitchenCard from './KitchenCard'

const ContainerKitchen = ({ title, icon, items, changeClass, dropId }) => {
  return (
    <Droppable droppableId={dropId}>
      {droppableProvided => (
        <section
          className={changeClass || 'orders'}
          {...droppableProvided.droppableProps}
          ref={droppableProvided.innerRef}
        >
          <div className="kitchen-title">
            <img src={icon} alt="" />
            <h2>{title}</h2>
          </div>
          <div className="card-container-kitchen">
            {items.map(
              (item, index) => item && <KitchenCard key={item._id} ticket={item} index={index} />
            )}
          </div>
          {droppableProvided.placeholder}
        </section>
      )}
    </Droppable>
  )
}

export default ContainerKitchen
