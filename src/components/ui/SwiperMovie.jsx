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
        // 사용할 모듈 등록
        modules={[Navigation, Autoplay]}
        spaceBetween={20} // 슬라이드 간 간격
        slidesPerView={5} // 한 번에 보여줄 슬라이드 개수
        navigation={{
          nextEl: ".btn-next",
          prevEl: ".btn-prev",
        }} // 화살표 네비게이션 사용
        autoplay={{ delay: 3000 }} // 자동 재생 (선택사항)
        breakpoints={{
          // 반응형 설정
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
