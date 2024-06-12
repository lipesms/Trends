import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'

import { store } from './store'
import AppRoute from './Routes'
import NavBar from './components/NavBar'

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <NavBar />
        <AppRoute />
        <div className="-z-10 w-full h-full fixed top-0 left-0 bg-body"></div>
      </BrowserRouter>
    </Provider>
  )
}

export default App
