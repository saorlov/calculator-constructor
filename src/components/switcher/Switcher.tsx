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
                    <span className={isActive ? classes.switcher_tab_icon_active : ''}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                            <path d="M11.7678 11.7678C12.2366 11.2989 12.5 10.663 12.5 10C12.5 9.33696 12.2366 8.70107 11.7678 8.23223C11.2989 7.76339 10.663 7.5 10 7.5C9.33696 7.5 8.70107 7.76339 8.23223 8.23223C7.76339 8.70107 7.5 9.33696 7.5 10C7.5 10.663 7.76339 11.2989 8.23223 11.7678C8.70107 12.2366 9.33696 12.5 10 12.5C10.663 12.5 11.2989 12.2366 11.7678 11.7678Z" stroke="#4D5562" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M2.04834 9.99999C3.11001 6.61916 6.26917 4.16666 10 4.16666C13.7317 4.16666 16.89 6.61916 17.9517 9.99999C16.89 13.3808 13.7317 15.8333 10 15.8333C6.26917 15.8333 3.11001 13.3808 2.04834 9.99999Z" stroke="#4D5562" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                    </span>
                    <span>
                        Runtime
                    </span>
                </div>
                <div onClick={clickHandler} className={isActive ? classes.switcher_passive : classes.switcher_active}>
                    <span className={!isActive ? classes.switcher_tab_icon_active : ''}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                            <path d="M7.49984 13.3333L4.1665 10L7.49984 6.66668M12.4998 6.66668L15.8332 10L12.4998 13.3333" stroke="#4D5562" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                    </span>
                    <span>
                        Constructor
                    </span>
                </div>
            </div>
        </div>
    )
}

export default Switcher