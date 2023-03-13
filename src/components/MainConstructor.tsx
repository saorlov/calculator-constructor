import Palette from './palette/Palette'
import DropZone from './dropzone/DropZone'
import Switcher from './switcher/Switcher'

function MainConstructor () {
  return (
        <div>
            <div>
                <Switcher />
            </div>
            <div className={'work_field'}>
                <Palette />
                <DropZone />
            </div>
        </div>

  )
}

export default MainConstructor
