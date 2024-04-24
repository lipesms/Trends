import { TouchEvent, useState } from 'react'

type Props = {
  slides: string[]
  className: string
}

const Carousel = ({ slides, className }: Props) => {
  const [current, setCurrent] = useState(0)
  const [firstX, setFirstX] = useState(0)

  const previousSlide = () => {
    if (current === 0) {
      setCurrent(slides.length - 1)
    } else {
      setCurrent(current - 1)
    }
  }

  const nextSlide = () => {
    if (current === slides.length - 1) {
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

  return (
    <div
      className={`max-w-315  overflow-hidden relative mx-4 ${className} rounded-2xl`}
    >
      <div
        className={`flex items-center gap-x-6 transition easy-out duration-40 `}
        style={{
          transform: `translateX(-${current * 100 + current * 7}%)`
        }}
      >
        {slides.map((s, i) => {
          return (
            <div key={`image: ${i}`} className="h-90 min-w-90 ">
              <img className="w-full h-full rounded-2xl" src={s} alt="" />
            </div>
          )
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
        {slides.map((s, i) => (
          <div
            key={`circle: ${i}`}
            className={`rounded-full w-2 h-2 ${i == current ? 'bg-red-700' : 'bg-gray-300'}`}
          ></div>
        ))}
      </div>
    </div>
  )
}

export default Carousel
