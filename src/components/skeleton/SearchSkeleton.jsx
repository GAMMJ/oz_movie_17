const SearchSkeleton = () => (
  <>
    {/* 그리드 스켈레톤 */}
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8">
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

export default SearchSkeleton
