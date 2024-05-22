import Footer from '../components/Footer'
import InfosPage from '../components/InfosPage'
import NavBar from '../components/NavBar'

const Infos = () => (
  <div className="flex flex-col relative">
    <NavBar />
    <div className="pt-24 lg:ps-36 lg:pt-0">
      <InfosPage></InfosPage>
      <div className="-z-10 w-full h-full fixed top-0 left-0 bg-body-pattern"></div>
      <Footer />
    </div>
  </div>
)

export default Infos
