const SearchSkeleton = () => (
  <>
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

export default SearchSkeleton
