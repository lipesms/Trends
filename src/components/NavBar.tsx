import { Link } from 'react-router-dom'
import logo from '../assets/icons/trends_full_logo.png'
import logoMobile from '../assets/icons/trends_small_logo.png'

const NavBar = () => {
  return (
    <div className="z-20 fixed h-24 w-screen h-24 bg-primary-color lg:h-screen lg:pt-10 px-8 lg:px-0 lg:max-w-40 font-display select-none">
      <div className="flex justify-between items-center h-full lg:flex-col lg:items-center lg:justify-normal">
        <Link to="">
          <img
            src={logo}
            alt="Logo MovieTrends"
            className="hidden md:h-16 md:inline-block"
          />
          <img
            src={logoMobile}
            alt="Logo MovieTrends"
            className="h-12 md:hidden"
          />
        </Link>
        <div className="flex lg:flex-col lg:items-center lg:mt-8 cursor-pointer lg:mt-4">
          <Link
            to="/"
            className="box-border flex items-center justify-start text-black font-bold ms-2 sm:ms-6 md:inline-block sm:text-xl lg:ms-0 lg:mb-6 pb-1 border-solid border-b-2 border-transparent hover:border-black transition easy-out duration-200"
          >
            Inicio
          </Link>
          <Link
            to="/films"
            className="box-border flex items-center justify-start text-black font-bold ms-2 sm:ms-6 md:inline-block sm:text-xl lg:ms-0 lg:mb-6 pb-1 border-solid border-b-2 border-transparent hover:border-black transition easy-out duration-200"
          >
            Filmes
          </Link>
          <Link
            to="/series"
            className="flex items-center justify-start text-black font-bold  ms-2 sm:ms-6 md:inline-block sm:text-xl lg:ms-0 lg:mb-6 pb-1 border-solid border-b-2 border-transparent hover:border-black transition easy-out duration-200"
          >
            Séries
          </Link>
          <Link
            to="/famous"
            className="flex items-center justify-start text-black font-bold  ms-2 sm:ms-6 md:inline-block sm:text-xl lg:ms-0 lg:mb-6 pb-1 border-solid border-b-2 border-transparent hover:border-black transition easy-out duration-200"
          >
            Famosos
          </Link>
        </div>
      </div>
    </div>
  )
}

export default NavBar
