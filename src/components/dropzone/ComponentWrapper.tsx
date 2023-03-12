import { useDrag, useDrop } from "react-dnd";
import { ItemTypes } from "../../utils/itemTypes";
import { CalculatorElement } from "../../utils/itemTypes";
import { draggedActions } from "../../store/draggedComponentsSlice";
import { componentsActions } from "../../store/componentsSlice";
import { useCalculatorDispatch, useCalculatorSelector } from "../../hooks/hooks";
import { Key } from "react";
import { calcActions } from "../../store/calcSlice";
import { components } from "../../utils/arrays";

type ItemType = {
    id: Key
}

function ComponentWrapper ({ _id, element, name }: CalculatorElement) {

    const Component = components.get(name)

    const stateArr = useCalculatorSelector(state => {
        return {
            components: state.components,
            dragged: state.dragged,
            isActive: !state.active.active
        }
    })

    const dispatcher = useCalculatorDispatch()
    const calculator = calcActions

    const [{ isDragging }, drag] = useDrag({
        type: ItemTypes.COMPONENT,
        item: {
            id: _id
        },
        collect: monitor => ({
            isDragging: monitor.isDragging(),
        }),
    })

    const [{ isOver }, drop] = useDrop({
        accept: ItemTypes.COMPONENT,
        drop: (item: ItemType, monitor) => {
            dispatcher(draggedActions.changeOrder({
                element: stateArr.components.filter(el => el._id === item.id)[0],
                elementAfter: _id
            }))
            dispatcher(componentsActions.markAsDragged(item.id))
        },
        collect: monitor => ({
            isOver: monitor.isOver(),
        }),
    });

    const itemStyle = {
        dragging: {opacity: '.5', cursor: 'move'},
        notDragging: {opacity: '1', cursor: 'move'}
    }

    const clickHandler = (value: string) => {
        dispatcher(calculator.handleInputAction(value))
    }

    const handleDoubleClick = () => {
        dispatcher(componentsActions.unmarkDragged(_id))
        dispatcher(draggedActions.deleteElement(_id))
    }


    return (
        <div ref={stateArr.isActive ? drop : null} onDoubleClick={handleDoubleClick}>
            {
                stateArr.dragged.length > 0 &&
                isOver &&
                <svg xmlns="http://www.w3.org/2000/svg" width="250" height="6" viewBox="0 0 250 6" fill="none">
                    <path d="M0.113249 3L3 5.88675L5.88675 3L3 0.113249L0.113249 3ZM249.887 3L247 0.113249L244.113 3L247 5.88675L249.887 3ZM3 3.5H247V2.5H3V3.5Z" fill="#5D5FEF"/>
                </svg>

            }
            <div ref={stateArr.isActive ? drag : null} style={isDragging ? itemStyle.dragging : itemStyle.notDragging}>
                <Component clickHandler={clickHandler} element={element} />
            </div>
        </div>
    )
}

export default ComponentWrapper