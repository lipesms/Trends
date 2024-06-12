import Footer from '../components/Footer'
import InfosPage from '../components/InfosPage'
import NavBar from '../components/NavBar'

const Infos = () => (
  <div className="flex flex-col relative">
    <NavBar />
    <div className="pt-24 lg:ps-36 lg:pt-0">
      <InfosPage></InfosPage>
      <Footer />
    </div>
  </div>
)

export default Infos
