import { Link } from "react-router"

const Header = () => {
  return (
    <nav className="flex items-center justify-between px-8 py-5 text-white">
      <Link to="/">
        <h1 className="text-2xl font-bold">🎥 OZ 무비</h1>
      </Link>
      <input
        className="rounded-3xl w-1/2 px-3 py-2 bg-white outline-none text-black"
        type="text"
        placeholder="영화 제목을 입력하세요"
      />
      <div className="flex items-center gap-5">
        <button>로그인</button>
        <button>회원가입</button>
      </div>
    </nav>
  )
}

export default Header
