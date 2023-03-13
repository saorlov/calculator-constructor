import classes from './Numbers.module.css'
import NumberButton from './NumberButton'
import { type ElementType } from '../../../utils/itemTypes'
import { useCalculatorSelector } from '../../../hooks/hooks'

function Numbers ({ element, clickHandler }: any) {
  const isActive = useCalculatorSelector(state => state.active.active)

  return (
        <div className={classes.numbers_wrapper}>
            {element.map((el: ElementType) => {
              return (
                    <NumberButton clickHandler={clickHandler && isActive ? clickHandler : () => {}} value={el.value} key={el.name} isActive={isActive} />
              )
            })}
        </div>
  )
}

export default Numbers
