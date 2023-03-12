import classes from './DropZone.module.css'
import {useDrop} from "react-dnd";
import { ItemTypes } from "../../utils/itemTypes";
import { Key } from "react";
import DropZoneTextBlock from "./DropZoneTextBlock";
import { useCalculatorDispatch, useCalculatorSelector } from "../../hooks/hooks";
import { draggedActions } from "../../store/draggedComponentsSlice";
import { componentsActions } from "../../store/componentsSlice";
import ComponentWrapper from "./ComponentWrapper";

type ItemType = {
    id: Key
}

function DropZone() {

    const stateArr = useCalculatorSelector(state => {
        return {
            components: state.components,
            dragged: state.dragged,
            isActive: !state.active.active
        }
    })

    const dispatcher = useCalculatorDispatch()

    const [{ isOver }, drop] = useDrop({
        accept: ItemTypes.COMPONENT,
        drop: (item: ItemType, monitor) => {
            dispatcher(draggedActions.addElement(stateArr.components.filter(el => el._id === item.id)[0]))
            dispatcher(componentsActions.markAsDragged(item.id))
        },
        collect: monitor => ({
            isOver: monitor.isOver(),
        }),
    });

    const zoneStyles = {
        dropped: {
            background: 'lightblue'
        },
        notDropped: {
            background: 'white'
        }
    }


    return (
        <div className={classes.dropzone}>
            <div ref={stateArr.isActive ? drop: null} className={!(stateArr.dragged.length > 0) ? classes.dropzone_wrapper : classes.dropzone_wrapper_filled} style={isOver && !(stateArr.dragged.length > 0) ? zoneStyles.dropped : zoneStyles.notDropped}>
                {
                    !(stateArr.dragged.length > 0) &&
                    <DropZoneTextBlock />
                }
            </div>
            <div className={classes.dropzone_wrapper_elements}>
                {stateArr.dragged.map(el => {
                    return (
                        <ComponentWrapper key={el._id} _id={el._id} name={el.name} element={el.element}  active dragged/>
                    )
                })}
                {
                    stateArr.dragged.length > 0 &&
                    isOver &&
                    <svg xmlns="http://www.w3.org/2000/svg" width="250" height="6" viewBox="0 0 250 6" fill="none">
                        <path d="M0.113249 3L3 5.88675L5.88675 3L3 0.113249L0.113249 3ZM249.887 3L247 0.113249L244.113 3L247 5.88675L249.887 3ZM3 3.5H247V2.5H3V3.5Z" fill="#5D5FEF"/>
                    </svg>

                }
            </div>
        </div>
    )
}

export default DropZone