import classes from './Numbers.module.css'

interface NumberButtonProps {
  value: string
  clickHandler: (a: string) => void;
  isActive: boolean
}

function NumberButton ({ value, clickHandler, isActive }: NumberButtonProps) {
  const styles = !isActive
    ? {
        zeroClass: {
          gridColumn: 'col / span 2',
          cursor: 'move'
        },
        commonClass: {
          gridColumn: '',
          cursor: 'move'
        }
      }
    : {
        zeroClass: {
          gridColumn: 'col / span 2',
          cursor: 'pointer'
        },
        commonClass: {
          gridColumn: '',
          cursor: 'pointer'
        }
      }

  return (
        <button
            onClick={() => { clickHandler(value) }}
            className={isActive ? classes.number_button : classes.inactive_number_button}
            style={value === '0' ? styles.zeroClass : styles.commonClass}
        >
            <span className={classes.number_button_text}>{ value }</span>
        </button>
  )
}

export default NumberButton
