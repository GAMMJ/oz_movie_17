const HomeSkeleton = () => (
  <>
    <div className="h-8 w-40 bg-gray-700 rounded mb-5 mt-9 animate-pulse" />

    {/* Swiper 스켈레톤 */}
    <section className="mb-15 p-8 bg-linear-to-b from-black to-[#0f0f0f] rounded-4xl">
      <div className="flex gap-5">
        {Array.from({ length: 5 }).map((_, i) => (
          <div
            key={i}
            className={`flex-1 aspect-2/3 bg-gray-700 rounded-lg animate-pulse ${i >= 1 && i < 3 ? "hidden md:block" : ""} ${i >= 3 ? "hidden lg:block" : ""}`}
          />
        ))}
      </div>
    </section>

    {/* 그리드 스켈레톤 */}
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8">
      {Array.from({ length: 10 }).map((_, i) => (
        <div key={i} className="animate-pulse">
          <div className="aspect-2/3 bg-gray-700 rounded-lg mb-2" />
          <div className="h-4 bg-gray-700 rounded w-3/4 mb-1" />
          <div className="h-3 bg-gray-600 rounded w-1/2" />
        </div>
      ))}
    </div>
  </>
)

export default HomeSkeleton
