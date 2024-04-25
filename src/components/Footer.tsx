import logoTMDB from '../assets/icons/logo_tmdb.svg'
import up from '../assets/icons/dedo-indicador.png'

const Footer = () => (
  <footer className="relative pt-28 px-8 pb-14 md:ps-14 bg-body-pattern">
    <div className="max-w-618">
      <p className="text-white  mb-1  ">
        A Treads é um site para ficar por dentro das tendências do cinema, sendo
        as séries do momento, filmes ou atores/atrizes.
      </p>
      <p className="text-white  mb-1  ">
        Projetado no Figma e codificado no Visual Studio Code. Programado com
        typescript junto da bilbioteca React e deploy pela vercel.
      </p>
      <p className="text-white mb-1 ">
        Este produto usa a API TMDB, mas não é endossado ou certificado pelo
        TMDB
      </p>
      <img className="max-w-52 md:max-w-80 mt-8" src={logoTMDB} alt="" />
      <img
        className="absolute bottom-14 right-10 max-w-8 md:max-w-10 hover:pb-2 transition-all easy-out duration-200 cursor-pointer"
        src={up}
        alt=""
      />
    </div>
  </footer>
)

export default Footer
