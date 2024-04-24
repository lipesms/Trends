import logo from '../assets/icons/trends_full_logo.png'
import logoMobile from '../assets/icons/trends_small_logo.png'
import claquete from '../assets/icons/claquete.png'
import famosos from '../assets/icons/famoso.png'
import tv from '../assets/icons/tv.png'

const NavBar = () => {
  return (
    <div className="z-10 fixed h-36 w-screen bg-primary-blue h-36 lg:h-screen lg:pt-20 px-8 lg:px-10 lg:max-w-52">
      <div className="flex justify-between items-center h-full lg:flex-col lg:items-center lg:justify-normal">
        <a href="">
          <img
            src={logo}
            alt="Logo MovieTrends"
            className="hidden md:h-16 md:inline-block"
          />
          <img
            src={logoMobile}
            alt="Logo MovieTrends"
            className="h-16 md:hidden"
          />
        </a>
        <div className="flex lg:flex-col lg:mt-8 cursor-pointer lg:mt-4">
          <a className="flex items-center justify-start lg:mb-6">
            <h3 className="hidden text-white order-1 ms-2 md:inline-block text-2xl">
              Filmes
            </h3>
            <img src={claquete} alt="" className="h-10 w-10 lg:h-10 lg:w-10" />
          </a>
          <a className="flex items-center ms-6 lg:ms-0 lg:mb-6">
            <h3 className="hidden text-white order-1 ms-2 md:inline-block text-2xl">
              Séries
            </h3>
            <img src={tv} alt="" className="h-10 w-10 lg:h-11 lg:w-11" />
          </a>
          <a className="flex items-center ms-6 lg:ms-0 lg:mb-6">
            <h3 className="hidden text-white order-1 ms-2 md:inline-block text-2xl">
              Famosos
            </h3>
            <img src={famosos} alt="" className="h-10 w-10 lg:h-11 lg:w-11" />
          </a>
        </div>
      </div>
    </div>
  )
}

export default NavBar
