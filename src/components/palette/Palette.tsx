import { useCalculatorSelector } from '../../hooks/hooks'
import LayOut from './LayOut'
import classes from './Palette.module.css'

function Palette () {
  const paletteComponents = useCalculatorSelector(state => {
    return {
      components: state.components,
      isActive: !state.active.active
    }
  })

  return (
        <div className={classes.palette_wrapper}>
            {
                paletteComponents.isActive &&
                <div className={classes.palette_elements}>
                    {paletteComponents.components.map(el => {
                      return (
                            <LayOut key={el._id} _id={el._id} name={el.name} element={el.element} active dragged={el.dragged}/>
                      )
                    })}
                </div>
            }
        </div>
  )
}

export default Palette
