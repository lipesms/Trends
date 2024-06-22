const RandomMovie = () => {
  return (
    <a
      href="https://www.google.com"
      className="w-full pt-4 pb-8 flex flex-col items-center sm:pt-10  lg:h-fit xl:pe-8 xl:ps-14"
    >
      <div className="relative flex items-center w-full h-32rem overflow-hidden sm:w-11/12 sm:h-72 hover:drop-shadow-2xl hover:scale-105 transition-transform duration-150">
        <p className="hidden z-1 text-2xl w-1/6 text-white items-center ps-8 sm:flex md:text-3xl">
          Sem saber o que assistir no fim de semana?
        </p>

        <div className="-z-9 hidden absolute top-0 left-0 w-full h-96 bg-purple rounded-2xl sm:w-full sm:h-full sm:block"></div>
        <div className="hidden absolute top-1/2 left-0 w-full h-96 bg-orange sm:rounded-r-2xl sm:w-1/2 sm:h-full sm:top-0 sm:right-0 sm:left-auto sm:block"></div>
        <div className="absolute top-0 right-0 flex justify-center w-full h-full ">
          <span className="z-10 block w-64 h-64 bg-purple rounded-full sm:w-72 sm:h-full sm:bg-amarelo">
            <p className="text-3xl text-center font-bold text-white w-full h-full flex justify-center items-center p-8 sm:text-black">
              Descubra algo novo!
            </p>
          </span>
          <span className="absolute top-20 block w-64 h-64 sm:w-72 sm:h-full bg-purple rounded-full opacity-75 sm:block sm:top-0 sm:left-48 sm:bg-amarelo"></span>
          <span className="absolute top-35 block w-64 h-64 sm:w-72 sm:h-full bg-purple rounded-full opacity-45 sm:block sm:top-0 sm:left-57 sm:bg-amarelo"></span>
          <span className="absolute top-1/2 block w-64 h-64 sm:w-72 sm:h-full bg-purple rounded-full opacity-20 sm:block sm:top-0 sm:left-65 sm:bg-amarelo"></span>
        </div>
      </div>
    </a>
  )
}

export default RandomMovie
