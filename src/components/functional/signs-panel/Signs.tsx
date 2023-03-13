import classes from './Signs.module.css'
import { type ElementType } from '../../../utils/itemTypes'
import { useCalculatorSelector } from '../../../hooks/hooks'

function Signs ({ element, clickHandler }: any) {
  const isActive = useCalculatorSelector(state => state.active.active)

  const displayStyles = {
    active: {
      cursor: 'pointer'
    },
    inactive: {
      cursor: 'move'
    }
  }

  return (
        <>
            <div className={classes.signs_wrapper}>
                {element.map((el: ElementType) => {
                  return (
                        <button
                            onClick={() => { clickHandler && isActive ? clickHandler(el.value) : () => {} }}
                            className={isActive ? classes.sign_button : classes.inactive_sign_button}
                            key={el.name}
                            style={isActive ? displayStyles.active : displayStyles.inactive}
                        >
                            <span className={classes.sign_text}>{el.value}</span>
                        </button>
                  )
                })}
            </div>
        </>
  )
}

export default Signs
