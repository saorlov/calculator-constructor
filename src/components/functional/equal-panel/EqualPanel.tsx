import classes from './EqualPannel.module.css'
import {ElementType} from "../../../utils/itemTypes";
import {useCalculatorSelector} from "../../../hooks/hooks";
import {useState} from "react";

function EqualPanel({ element, clickHandler }: any) {

    const isActive = useCalculatorSelector(state => state.active.active)

    const displayStyles = {
        active: {
            cursor: 'pointer',
        },
        inactive: {
            cursor: 'move'
        }
    }

    const handleClick = (value: string) => {
        clickHandler(value)
    }

    return (
        <div className={classes.equal_wrapper} >
            {element.map((el: ElementType) => {
                return (
                    <button
                        onClick={
                            clickHandler && isActive ? () => { handleClick(el.value) } : () => {}
                        }
                        className={isActive ? classes.equal_button : classes.inactive_equal_button}
                        key={el.name}
                        style={isActive ? displayStyles.active : displayStyles.inactive}
                    >
                        <span className={classes.equal_button_text}>
                            {el.value}
                        </span>
                    </button>
                )
            })}
        </div>
    )
}

export default EqualPanel