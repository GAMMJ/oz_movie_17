import { useState, useRef, useContext } from "react"
import { Link } from "react-router"
import useSearchQuery from "../../hooks/useSearchQuery"
import useOnClickOutside from "../../hooks/useOnclickOutside"
import { ThemeContext } from "../../context/ThemeContext"

const Header = () => {
  const { theme, toggleTheme } = useContext(ThemeContext)
  const { query, setQuery } = useSearchQuery()
  const [isSearchExpanded, setIsSearchExpanded] = useState(false)
  const navRef = useRef(null)

  useOnClickOutside(navRef, () => {
    if (isSearchExpanded) {
      setIsSearchExpanded(false)
    }
  })

  return (
    <nav className="flex items-center justify-between h-20 px-8 py-5 gap-4 relative">
      {/* 모바일에서 검색창 확장 시 숨김 */}
      <Link to="/" className={`${isSearchExpanded ? "hidden" : "block"} md:block shrink-0`}>
        <h1 className="text-[20px] font-bold sm:text-2xl whitespace-nowrap">OZ 무비</h1>
      </Link>

      {/* md 이상에서 중앙 배치 및 50% 너비 유지 */}
      <div
        className={`${isSearchExpanded ? "grow flex justify-center items-center" : "hidden md:flex md:absolute md:left-1/2 md:-translate-x-1/2 md:w-1/2"}`}
      >
        <input
          ref={navRef}
          className="w-full rounded-3xl px-4 py-2 bg-gray-100 dark:bg-[#202020] outline-none text-black dark:text-white border border-gray-300 dark:border-transparent dark:placeholder-gray-300"
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
          <button className="md:hidden p-1" onClick={() => setIsSearchExpanded(true)}>
            <img src="/src/assets/icons/search.svg" alt="검색" className="w-5 h-5 dark:invert" />
          </button>
        )}

        <button
          onClick={toggleTheme}
          className="p-1 hover:bg-black/5 dark:hover:bg-white/10 rounded-full transition-colors text-xl"
          title={theme === "light" ? "다크 모드" : "라이트 모드"}
        >
          {theme === "light" ? "🌙" : "☀️"}
        </button>

        <Link to="/login" className="flex items-center gap-1 p-1 hover:scale-110 transition-transform">
          <img src="/src/assets/icons/log-in.svg" alt="로그인" className="w-5 h-5 sm:w-6 sm:h-6 dark:invert" />
        </Link>
        <Link to="/signup" className="flex items-center gap-1 p-1 hover:scale-110 transition-transform">
          <img src="/src/assets/icons/user-plus.svg" alt="회원가입" className="w-5 h-5 sm:w-6 sm:h-6 dark:invert" />
        </Link>
      </div>
    </nav>
  )
}

export default Header
