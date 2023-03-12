import classes from './Switcher.module.css'
import {useCalculatorDispatch, useCalculatorSelector} from "../../hooks/hooks";
import { activityActions } from "../../store/activeSlice";
import { calcActions } from "../../store/calcSlice";

function Switcher() {
    const isActive = useCalculatorSelector(state => state.active.active)
    const activeDispatcher = useCalculatorDispatch()
    const clickHandler = () => {
        activeDispatcher(activityActions.toggleActive())
        activeDispatcher(calcActions.clearAll())
    }
    return(
        <div className={classes.switcher_block}>
            <div className={classes.switcher_wrapper}>
                <div onClick={clickHandler} className={isActive ? classes.switcher_active : classes.switcher_passive}>
                <span>
                    Runtime
                </span>
                </div>
                <div onClick={clickHandler} className={isActive ? classes.switcher_passive : classes.switcher_active}>
                <span>
                    Constructor
                </span>
                </div>
            </div>
        </div>
    )
}

export default Switcher