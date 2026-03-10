const DetailSkeleton = () => (
  <div className="relative z-10 px-8 py-12 max-w-6xl mx-auto">
    <div className="flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-12">
      {/* 포스터 */}
      <div className="w-full md:w-auto flex justify-center">
        <div className="w-65 sm:w-85 md:w-80 lg:w-90 aspect-2/3 shrink-0 bg-gray-800 rounded-2xl animate-pulse shadow-lg" />
      </div>

      {/* 텍스트 */}
      <div className="flex flex-col flex-1 items-center md:items-end gap-10 md:gap-20 w-full">
        {/* 제목 & 장르 */}
        <div className="flex flex-col items-center md:items-end gap-4 w-full">
          <div className="h-16 sm:h-24 md:h-32 bg-gray-800 rounded-lg w-3/4 animate-pulse" />
          <div className="w-full flex justify-center md:justify-end items-center gap-3">
            <div className="h-5 bg-gray-800 rounded w-16 animate-pulse" />
            <div className="h-5 bg-gray-800 rounded w-32 animate-pulse" />
          </div>
        </div>

        {/* 소개 */}
        <div className="w-full flex flex-col items-center md:items-end gap-3">
          <div className="h-6 bg-gray-800 rounded w-16 animate-pulse" />
          <div className="flex flex-col items-center md:items-end gap-2 w-full max-w-2xl">
            <div className="h-4 bg-gray-800 rounded w-full animate-pulse" />
            <div className="h-4 bg-gray-800 rounded w-full animate-pulse" />
            <div className="h-4 bg-gray-800 rounded w-4/5 animate-pulse" />
          </div>
        </div>
      </div>
    </div>
  </div>
)

export default DetailSkeleton
