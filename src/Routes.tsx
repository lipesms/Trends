import { Routes, Route } from 'react-router-dom'

import Home from './pages/Home'
import Infos from './pages/Infos'

const AppRoute = () => (
  <Routes>
    <Route path="/" element={<Home />}></Route>
    <Route path="/infos/:id" element={<Infos />}></Route>
  </Routes>
)

export default AppRoute
