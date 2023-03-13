import { useDrag } from 'react-dnd'
import { ItemTypes, type CalculatorElement } from '../../utils/itemTypes'

import { components } from '../../utils/arrays'

function LayOut ({ _id, element, name, dragged }: CalculatorElement) {
  const Component = components.get(name)

  const [{ isDragging }, drag] = useDrag({
    type: ItemTypes.COMPONENT,
    item: {
      id: _id
    },
    collect: monitor => ({
      isDragging: monitor.isDragging()
    })
  })

  const itemStyle = {
    dragging: { opacity: '.5', cursor: 'move' },
    notDragging: { opacity: '1', cursor: 'move' }
  }

  return (
        <div ref={!dragged ? drag : null} style={isDragging || dragged ? itemStyle.dragging : itemStyle.notDragging}>
            <Component element={element} />
        </div>
  )
}

export default LayOut
