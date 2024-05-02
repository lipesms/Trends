import { TouchEvent, useState } from 'react'
import { Result } from '../services/api'
import Card from './Card'

type Props = {
  slides: Result[]
  className: string
}

const Carousel = ({ slides, className }: Props) => {
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

    if (direction > 30) {
      nextSlide()
    } else if (direction <= 30 || direction >= -30) {
      console.log('sem direcao')
    } else {
      previousSlide()
    }
  }

  return (
    <div
      className={`max-w-315  overflow-hidden relative mx-4 ${className} rounded-2xl`}
    >
      <div
        className={`flex items-center transition easy-out duration-40 `}
        style={{
          transform: `translateX(-${current * 100}%)`
        }}
      >
        {slides.map((s, i) => {
          if (i > 0 && i <= 7) {
            return <Card image={s.poster_path} key={s.id} />
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
        {slides.map((_s, i) => {
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
  )
}

export default Carousel
