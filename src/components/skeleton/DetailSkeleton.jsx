const DetailSkeleton = () => (
  <div className="mb-8">
    {/* 배경 자리 (검정색) */}
    <div className="absolute inset-0 -z-10 bg-[#0a0a0a]" />

    <div className="relative z-10 px-8 py-12 max-w-6xl mx-auto animate-pulse">
      <div className="flex flex-col md:flex-row items-start gap-8">
        {/* 포스터 자리 */}
        <div className="min-w-90 w-full max-w-90 aspect-2/3 shrink-0 bg-gray-800 rounded-2xl shadow-lg" />

        {/* 텍스트 정보 자리 */}
        <div className="flex flex-col flex-1 items-end gap-20 w-full">
          {/* 제목 & 장르 섹션 */}
          <div className="flex flex-col items-end gap-4 w-full">
            <div className="h-12 md:h-16 bg-gray-800 rounded-lg w-3/4" /> {/* 제목(로고) */}
            <div className="flex justify-end gap-2 w-full mt-2">
              <div className="h-5 bg-gray-800 rounded w-16" /> {/* 평점 */}
              <div className="h-5 bg-gray-800 rounded w-32" /> {/* 장르 */}
            </div>
          </div>

          {/* 소개 섹션 */}
          <div className="w-full flex flex-col items-end gap-3">
            <div className="h-6 bg-gray-800 rounded w-16" /> {/* 소개 타이틀 */}
            <div className="flex flex-col items-end gap-2 w-full">
              <div className="h-4 bg-gray-800 rounded w-full" />
              <div className="h-4 bg-gray-800 rounded w-full" />
              <div className="h-4 bg-gray-800 rounded w-4/5" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
)

export default DetailSkeleton
