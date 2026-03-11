const HomeSkeleton = () => (
  <>
    <div className="h-8 w-40 bg-gray-300 dark:bg-gray-700 rounded mb-5 mt-9 animate-pulse" />

    {/* Swiper 스켈레톤 */}
    <section className="mb-15 p-8 bg-gray-100 dark:bg-linear-to-b dark:from-black dark:to-[#0f0f0f] rounded-4xl transition-colors duration-300">
      <div className="flex gap-5">
        {Array.from({ length: 5 }).map((_, i) => (
          <div
            key={i}
            className={`flex-1 aspect-2/3 bg-gray-300 dark:bg-gray-700 rounded-lg animate-pulse ${i >= 1 && i < 3 ? "hidden md:block" : ""} ${i >= 3 ? "hidden lg:block" : ""}`}
          />
        ))}
      </div>
    </section>

    {/* 그리드 스켈레톤 */}
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8">
      {Array.from({ length: 10 }).map((_, i) => (
        <div
          key={i}
          className="flex flex-col bg-gray-100 dark:bg-[#202020] rounded-xl overflow-hidden border border-gray-100 dark:border-transparent"
        >
          <div className="aspect-2/3 bg-gray-300 dark:bg-gray-700 animate-pulse" />

          <div className="p-4 flex flex-col grow">
            <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded w-3/4 mb-2 min-h-12 animate-pulse" />
            <div className="h-3 bg-gray-200 dark:bg-gray-600 rounded w-1/2 animate-pulse" />
          </div>
        </div>
      ))}
    </div>
  </>
)

export default HomeSkeleton
