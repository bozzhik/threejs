import {Swiper, SwiperSlide} from 'swiper/react'
import 'swiper/css'
import SwiperCore, {Mousewheel, Keyboard, Parallax} from 'swiper/core'
import {useEffect} from 'react'

SwiperCore.use([Mousewheel, Keyboard, Parallax])

export const Slider = ({slides}) => {
  useEffect(() => {
    window.addEventListener('load', windowLoaded)
    function windowLoaded() {
      document.documentElement.classList.add('loaded')
    }
  }, [])

  const slideChange = (swiper) => {
    const bgColors = {
      0: 'linear-gradient(to right, #312093, #8ea8ff)',
      1: 'linear-gradient(to right, #702093, #ca8eff)',
      2: 'linear-gradient(to right, #d7a210, #fff48e)',
      3: 'linear-gradient(to right, #1a1a1a, #494949)',
      4: 'linear-gradient(to right, #a300cc, #e6b3ff)',
      5: 'linear-gradient(to right, #ff8200, #ffcc00)',
      6: 'linear-gradient(to right, #95ff00, #00ff5e)',
      7: 'linear-gradient(to right, #1f3481, #3383b6)',
      8: 'linear-gradient(to right, #ff00c8, #d159c3)',
    }

    let app = document.getElementById('App')
    const slideIndex = swiper.realIndex
    const gradient = bgColors[slideIndex]

    setTimeout(() => {
      app.style.backgroundImage = gradient
    }, 500)
  }

  return (
    <div>
      <Swiper slidesPerView={1} className="min-h-full overflow-hidden" loop={true} speed={1000} parallax={true} mousewheel={true} keyboard={true} onSlideChange={(swiper) => slideChange(swiper)}>
        {slides.map((slide) => (
          <SwiperSlide key={slide.image} className="relative flex flex-col min-h-full px-5 pt-0 pb-5 shrink-0 swiper-slide">
            <div className="relative flex flex-col min-h-full px-5 pt-24 pb-5 shrink-0 sm:min-h-screen sm:px-0 sm:pt-16 SLIDE">
              <div className="relative flex items-center justify-center flex-auto BODY">
                <div className="w-[75vh] max-w-[90%] mx-auto my-0 flex sm:w-[100vh] sm:max-w-[100%] CONTENT">
                  <div className="flex-auto relative pb-[90%]" data-swiper-parallax-opacity="0.5" data-swiper-parallax="25%" data-swiper-parallax-scale="0.1">
                    <img className="absolute top-0 left-0 object-contain w-full h-full drop-shadow-custom PICTURE" src={slide.image} alt="image" />
                  </div>
                </div>
                <div className="absolute top-0 left-0 flex flex-col items-center justify-center w-full h-full text-center mix-blend-difference z-[-2]">
                  <h2 className="text-[20vmin] leading-[1.3] uppercase font-bold sm:text-[18vmin] sm:mt-16 sm:leading-[5]" data-swiper-parallax-opacity="0.5" data-swiper-parallax="0%" data-swiper-parallax-scale="0.4">
                    {slide.caption}
                  </h2>
                </div>
              </div>
              <div className="mx-auto mt-16 w-full max-w-[990px] flex justify-between gap-5" data-swiper-parallax-opacity="0" data-swiper-parallax-scale="0.3">
                <div className="text-4xl font-medium leading-[1.3] sm:text-2xl PRICE">{slide.price} ETH</div>
                <button className="flex-initial text-4xl uppercase underline leading-[1.3] font-medium hover:no-underline sm:text-2xl BUY" type="button">
                  {slide.buttonText}
                </button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}
