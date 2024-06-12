import { Routes, Route } from 'react-router-dom'

import Home from './pages/Home'
import Infos from './pages/Infos'
import Films from './pages/Films'

const AppRoute = () => (
  <Routes>
    <Route path="/" element={<Home />}></Route>
    <Route path="/films" element={<Films />}></Route>
    <Route path="/infos/:id" element={<Infos />}></Route>
  </Routes>
)

export default AppRoute
