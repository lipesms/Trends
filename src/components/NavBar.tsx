import logo from '../assets/icons/trends_full_logo.png'
import logoMobile from '../assets/icons/trends_small_logo.png'

const NavBar = () => {
  return (
    <div className="z-10 fixed h-24 w-screen h-24 bg-primary-blue  lg:h-screen lg:pt-10 px-8 lg:px-5 lg:px-0 lg:max-w-40">
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
            className="h-12 md:hidden"
          />
        </a>
        <div className="flex lg:flex-col lg:mt-8 cursor-pointer lg:mt-4">
          <a className="box-border flex items-center justify-start text-white font-bold ms-2 sm:ms-6 md:inline-block sm:text-xl lg:ms-0 lg:mb-6 pb-1 border-solid border-b-2 border-transparent hover:border-white transition easy-out duration-200">
            Filmes
          </a>
          <a className="flex items-center justify-start text-white font-bold  ms-2 sm:ms-6 md:inline-block sm:text-xl lg:ms-0 lg:mb-6 pb-1 border-solid border-b-2 border-transparent hover:border-white transition easy-out duration-200">
            Séries
          </a>
          <a className="flex items-center justify-start text-white font-bold  ms-2 sm:ms-6 md:inline-block sm:text-xl lg:ms-0 lg:mb-6 pb-1 border-solid border-b-2 border-transparent hover:border-white transition easy-out duration-200">
            Famosos
          </a>
        </div>
      </div>
    </div>
  )
}

export default NavBar
