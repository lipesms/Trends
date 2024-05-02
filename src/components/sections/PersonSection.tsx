import Card from '../Card'
import { ResultPerson } from '../../services/api'
import { TouchEvent, useState } from 'react'

type Props = {
  title: string
  dados: ResultPerson[]
}

const PersonSection = ({ title, dados }: Props) => {
  const [current, setCurrent] = useState(0)
  const [firstX, setFirstX] = useState(0)

  const previousSlide = () => {
    if (current === 0) {
      setCurrent(6)
    } else {
      setCurrent(current - 1)
    }
  }

  const nextSlide = () => {
    if (current === 6) {
      setCurrent(0)
    } else {
      setCurrent(current + 1)
    }
  }

  const caroseulTouchEvent = (e: TouchEvent) => {
    const lastX = e.changedTouches[0].clientX
    const direction = firstX - lastX

    if (direction > 0) {
      nextSlide()
    } else if (direction === 0) {
      console.log('sem direcao')
    } else {
      previousSlide()
    }
  }

  if (!dados) {
    return <h3>Carregando...</h3>
  } else {
    return (
      <section className="relative w-90 pt-4 pb-8 flex flex-col items-center lg:w-full lg:items-start lg:pt-10 lg:ps-14 lg:h-fit lg:pe-7">
        <h2 className="select-none text-2xl font-bold text-white pb-4 ps-8 font-display drop-shadow-3xl lg:text-3xl lg:pb-9">
          {title}
        </h2>
        <div
          className={`sm:hidden max-w-315 overflow-hidden relative mx-4  rounded-2xl`}
        >
          <div
            className={`flex items-center transition easy-out duration-40 `}
            style={{
              transform: `translateX(-${current * 100}%)`
            }}
          >
            {dados.map((s, i) => {
              if (i > 0 && i <= 7) {
                return <Card image={s.profile_path} key={s.id} />
              }
            })}
          </div>
          <div
            className="absolute top-0 h-full w-full justify-between items-center flex text-white px-4 text-xl"
            onTouchStart={(e) => setFirstX(e.changedTouches[0].clientX)}
            onTouchEnd={(e) => {
              caroseulTouchEvent(e)
            }}
          ></div>
          <div className="absolute -bottom-1 py-4 flex justify-center gap-2 w-full">
            {dados.map((_s, i) => {
              if (i <= 6)
                return (
                  <div
                    key={`circle: ${i}`}
                    className={`rounded-full w-2 h-2 ${i == current ? 'bg-red-700' : 'bg-gray-300'}`}
                  ></div>
                )
            })}
          </div>
        </div>
        <div className="hidden w-full sm:grid sm:grid-cols-2 md:grid-cols-3 px-8 xl:grid-cols-5 gap-10 ">
          {dados.map((s, i) => {
            if (i <= 9) {
              return <Card key={i} titulo={s.name} image={s.profile_path} />
            }
          })}
        </div>
        <a
          href="#"
          className="text-gray-500 hover:text-white transition easy-out text-xl font-display mt-6 sm:self-start px-8 lg:self-auto "
        >
          Ver mais →
        </a>
      </section>
    )
  }
}

export default PersonSection
