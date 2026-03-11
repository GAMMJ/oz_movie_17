import { Link } from "react-router"

const Signup = () => {
  return (
    <div className="flex items-center justify-center min-h-[calc(100vh-120px)] px-4">
      <div className="w-full max-w-md p-8 rounded-3xl bg-white dark:bg-[#1f1f1f] shadow-2xl border border-gray-100 dark:border-white/5 transition-all duration-300">
        <div className="text-center mb-10">
          <h1 className="text-3xl font-bold mb-2">시작하기</h1>
          <p className="text-gray-500 dark:text-gray-400">OZ 무비의 새로운 회원이 되어보세요</p>
        </div>

        <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
          <div className="space-y-2">
            <label className="text-sm font-medium ml-1">이름</label>
            <input
              type="text"
              placeholder="홍길동"
              className="w-full px-5 py-3 rounded-2xl bg-gray-50 dark:bg-black/20 border border-gray-200 dark:border-white/10 outline-none focus:ring-2 focus:ring-blue-500 transition-all"
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium ml-1">이메일</label>
            <input
              type="email"
              placeholder="example@email.com"
              className="w-full px-5 py-3 rounded-2xl bg-gray-50 dark:bg-black/20 border border-gray-200 dark:border-white/10 outline-none focus:ring-2 focus:ring-blue-500 transition-all"
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium ml-1">비밀번호</label>
            <input
              type="password"
              className="w-full px-5 py-3 rounded-2xl bg-gray-50 dark:bg-black/20 border border-gray-200 dark:border-white/10 outline-none focus:ring-2 focus:ring-blue-500 transition-all"
            />
          </div>

          <button className="w-full py-4 mt-4 rounded-2xl bg-black dark:bg-white text-white dark:text-black font-bold text-lg shadow-lg hover:scale-105 active:scale-95 transition-all">
            회원가입
          </button>
        </form>

        <div className="mt-8 pt-8 border-t border-gray-100 dark:border-white/5 text-center">
          <p className="text-sm text-gray-500 dark:text-gray-400">
            이미 계정이 있으신가요?{" "}
            <Link to="/login" className="text-blue-500 font-bold hover:underline">
              로그인
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}

export default Signup
