import { Routes, Route } from 'react-router-dom'

import Home from './pages/Home'
import Films from './pages/Films'
import TvSeries from './pages/TvSeries'
import Famous from './pages/Famous'
import MovieInfosPage from './pages/MovieInfosPage'
import TvSeriesInfoPage from './pages/TvSeriesInfoPage'
import FamousInfosPage from './pages/FamousInfoPage'

const AppRoute = () => (
  <Routes>
    <Route path="/" element={<Home />}></Route>
    <Route path="/films" element={<Films />}></Route>
    <Route path="/series" element={<TvSeries />}></Route>
    <Route path="/famous" element={<Famous />}></Route>
    <Route path="/films/:id" element={<MovieInfosPage />}></Route>
    <Route path="/series/:id" element={<TvSeriesInfoPage />}></Route>
    <Route path="/famous/:id" element={<FamousInfosPage />}></Route>
  </Routes>
)

export default AppRoute
