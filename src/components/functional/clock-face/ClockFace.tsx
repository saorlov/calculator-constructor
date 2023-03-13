import React from "react";
import classes from './ClockFace.module.css';
import { useCalculatorSelector } from "../../../hooks/hooks";

function ClockFace() {

    const displayState = useCalculatorSelector(state => {
        return {
            isActive: state.active.active,
            number: state.calc.inputValue
        }
    })

    let displayValue = displayState.number

    if (displayState.number.length > 11) {
        if (displayValue.includes('.')) {
            let roundPoint = 11 - displayValue.substring(0, displayValue.indexOf('.')).length
            displayValue = String(parseFloat(displayValue).toFixed(roundPoint))
        } else {
            displayValue = String(parseFloat(displayValue).toExponential())
        }
    }

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
                <span className={!(displayState.number.length > 7) ? classes.clockface_input : classes.clockface_input_small}>
                    {
                        displayState.isActive ?
                            displayState.number.length > 0 ?
                                displayValue : '0'
                            :
                            '0'
                    }
                </span>
            </div>
        </div>
    )
}

export default ClockFace