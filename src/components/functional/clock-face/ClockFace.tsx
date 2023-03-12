import React from "react";
import classes from './ClockFace.module.css';
import {useCalculatorSelector} from "../../../hooks/hooks";

function ClockFace({ element }: any) {

    const displayState = useCalculatorSelector(state => {
        return {
            isActive: state.active.active,
            number: state.calc.inputValue
        }
    })

    const displayStyles = {
        active: {
            cursor: 'default'
        },
        inactive: {
            cursor: 'move'
        }
    }

    return (
        <div  className={classes.clockface_wrapper} style={displayState.isActive ? displayStyles.active : displayStyles.inactive}>
            <div className={classes.clockface_clockface}>
                <span className={classes.clockface_input}>
                    {
                        displayState.isActive ?
                            displayState.number.length > 0 ?
                                displayState.number : '0'
                            :
                            '0'
                    }
                </span>
            </div>
        </div>
    )
}

export default ClockFace