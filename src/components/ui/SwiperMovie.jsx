import "./SwiperMovie.css"
import { Swiper, SwiperSlide } from "swiper/react"

// Swiper 스타일 (필수)
import "swiper/css"
import "swiper/css/navigation"

// 필요한 모듈 불러오기
import { Navigation, Autoplay } from "swiper/modules"

// Todo className을 props로 받아서 적용하기
const SwiperMovie = ({ children }) => {
  return (
    <>
      <Swiper
        className="movie-swiper"
        modules={[Navigation, Autoplay]}
        spaceBetween={20}
        slidesPerView={5}
        navigation={{
          nextEl: ".btn-next",
          prevEl: ".btn-prev",
        }}
        autoplay={{ delay: 3000 }}
        centeredSlides={true}
        loop={true}
        breakpoints={{
          320: { slidesPerView: 1 },
          768: { slidesPerView: 3 },
          1024: { slidesPerView: 5 },
        }}
      >
        {children}
      </Swiper>
      <button className="btn-prev absolute left-2 top-1/2 -translate-y-1/2 z-10 bg-black/50 text-white w-8 h-8 rounded-full">
        ‹
      </button>
      <button className="btn-next absolute right-2 top-1/2 -translate-y-1/2 z-10 bg-black/50 text-white w-8 h-8 rounded-full">
        ›
      </button>
    </>
  )
}

export default SwiperMovie
