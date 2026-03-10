import { useState, useRef } from "react"
import { Link } from "react-router"
import useSearchQuery from "../../hooks/useSearchQuery"
import useOnClickOutside from "../../hooks/useOnclickOutside"

const Header = () => {
  const { query, setQuery } = useSearchQuery()
  const [isSearchExpanded, setIsSearchExpanded] = useState(false)
  const navRef = useRef(null)

  useOnClickOutside(navRef, () => setIsSearchExpanded(false))

  return (
    <nav className="flex items-center justify-between h-20 px-8 py-5 text-white gap-4 relative">
      {/* 모바일에서 검색창 확장 시 숨김 */}
      <Link to="/" className={`${isSearchExpanded ? "hidden" : "block"} sm:block shrink-0`}>
        <h1 className="text-[20px] font-bold sm:text-2xl whitespace-nowrap">OZ 무비</h1>
      </Link>

      {/* sm 이상에서 중앙 배치 및 50% 너비 유지 */}
      <div
        className={`${isSearchExpanded ? "grow flex justify-center items-center" : "hidden sm:flex sm:absolute sm:left-1/2 sm:-translate-x-1/2 sm:w-1/2"}`}
      >
        <input
          ref={navRef}
          className="w-full rounded-3xl px-4 py-2 bg-white outline-none text-black"
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="영화 제목을 입력하세요"
        />
      </div>

      {/* 버튼 그룹 */}
      <div className={`${isSearchExpanded ? "hidden" : "flex"} items-center gap-4 sm:gap-7 shrink-0`}>
        {/* 모바일에서만 보이는 검색 아이콘 */}
        {!isSearchExpanded && (
          <button className="sm:hidden p-1" onClick={() => setIsSearchExpanded(true)}>
            <img src="/src/assets/icons/search.svg" alt="검색" className="w-5 h-5 invert" />
          </button>
        )}

        <button className="flex items-center gap-1 p-1">
          <img src="/src/assets/icons/log-in.svg" alt="로그인" className="w-5 h-5 sm:w-6 sm:h-6 invert" />
        </button>
        <button className="flex items-center gap-1 p-1">
          <img src="/src/assets/icons/user-plus.svg" alt="회원가입" className="w-5 h-5 sm:w-6 sm:h-6 invert" />
        </button>
      </div>
    </nav>
  )
}

export default Header
