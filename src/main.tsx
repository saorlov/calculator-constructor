import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import * as WebFont from 'webfontloader'
import { HTML5Backend } from 'react-dnd-html5-backend'
import { DndProvider } from 'react-dnd'
import { Provider } from 'react-redux'
import { calculatorStore } from './store/calculator-store'

WebFont.load({
  google: {
    families: ['Inter']
  }
})

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
      <Provider store={calculatorStore}>
          <DndProvider backend={HTML5Backend}>
            <App />
          </DndProvider>
      </Provider>
  </React.StrictMode>
)
