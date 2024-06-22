import { Link } from 'react-router-dom'
import logo from '../assets/icons/trends_full_logo.png'
import logoMobile from '../assets/icons/trends_small_logo.png'
import { useDispatch, useSelector } from 'react-redux'
import { changeSection } from '../store/reducers/navbar'
import { RootReducer } from '../store'

const NavBar = () => {
  const { sections } = useSelector((state: RootReducer) => state.navBar)
  const dispatch = useDispatch()
  return (
    <div className="z-20 fixed h-24 w-screen h-24 bg-white xl:h-screen xl:pt-10 px-8 xl:px-0 xl:max-w-40 font-display select-none">
      <div className="flex justify-between items-center h-full xl:flex-col xl:items-center xl:justify-normal">
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
        <div className="flex xl:flex-col xl:items-center xl:mt-8 cursor-pointer xl:mt-4">
          <Link
            to="/"
            className={`box-border flex items-center justify-start text-black font-bold ms-2 sm:ms-6 md:inline-block sm:text-xl xl:ms-0 xl:mb-6 pb-1 border-solid border-b-2 hover:border-black transition easy-out duration-200 ${sections == 'inicio' ? 'border-black' : 'border-transparent'}`}
            onClick={() => dispatch(changeSection('inicio'))}
          >
            Inicio
          </Link>
          <Link
            to="/films"
            className={`box-border flex items-center justify-start text-black font-bold ms-2 sm:ms-6 md:inline-block sm:text-xl xl:ms-0 xl:mb-6 pb-1 border-solid border-b-2 hover:border-black transition easy-out duration-200 ${sections == 'filmes' ? 'border-black' : 'border-transparent'}`}
            onClick={() => dispatch(changeSection('filmes'))}
          >
            Filmes
          </Link>
          <Link
            to="/series"
            className={`flex items-center justify-start text-black font-bold  ms-2 sm:ms-6 md:inline-block sm:text-xl xl:ms-0 xl:mb-6 pb-1 border-solid border-b-2 border-transparent hover:border-black transition easy-out duration-200 ${sections == 'séries' ? 'border-black' : 'border-transparent'}`}
            onClick={() => dispatch(changeSection('séries'))}
          >
            Séries
          </Link>
          <Link
            to="/famous"
            className={`flex items-center justify-start text-black font-bold  ms-2 sm:ms-6 md:inline-block sm:text-xl xl:ms-0 xl:mb-6 pb-1 border-solid border-b-2 border-transparent hover:border-black transition easy-out duration-200 ${sections == 'famosos' ? 'border-black' : 'border-transparent'}`}
            onClick={() => dispatch(changeSection('famosos'))}
          >
            Famosos
          </Link>
        </div>
      </div>
    </div>
  )
}

export default NavBar
