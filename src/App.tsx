import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'

import { store } from './store'
import AppRoute from './Routes'

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <AppRoute />
      </BrowserRouter>
    </Provider>
  )
}

export default App
