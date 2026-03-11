import { Link } from "react-router"

const Login = () => {
  return (
    <div className="flex items-center justify-center min-h-[calc(100vh-120px)] px-4">
      <div className="w-full max-w-md p-8 rounded-3xl bg-white dark:bg-[#1f1f1f] shadow-2xl border border-gray-100 dark:border-white/5 transition-all duration-300">
        <div className="text-center mb-10">
          <h1 className="text-3xl font-bold mb-2">환영합니다</h1>
          <p className="text-gray-500 dark:text-gray-400">계정에 로그인하여 더 많은 기능을 즐겨보세요</p>
        </div>

        <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
          <div className="space-y-2">
            <label className="text-sm font-medium ml-1">이메일</label>
            <input
              type="email"
              placeholder="example@email.com"
              className="w-full px-5 py-3 rounded-2xl bg-gray-50 dark:bg-black/20 border border-gray-200 dark:border-white/10 outline-none focus:ring-2 focus:ring-blue-500 transition-all"
            />
          </div>

          <div className="space-y-2">
            <div className="flex justify-between items-center ml-1">
              <label className="text-sm font-medium">비밀번호</label>
              <button className="text-xs text-blue-500 hover:underline">비밀번호를 잊으셨나요?</button>
            </div>
            <input
              type="password"
              className="w-full px-5 py-3 rounded-2xl bg-gray-50 dark:bg-black/20 border border-gray-200 dark:border-white/10 outline-none focus:ring-2 focus:ring-blue-500 transition-all"
            />
          </div>

          <button className="w-full py-4 rounded-2xl bg-black dark:bg-white text-white dark:text-black font-bold text-lg shadow-lg hover:scale-105 active:scale-95 transition-all">
            로그인
          </button>
        </form>

        <div className="mt-8 pt-8 border-t border-gray-100 dark:border-white/5 text-center">
          <p className="text-sm text-gray-500 dark:text-gray-400">
            계정이 없으신가요?{" "}
            <Link to="/signup" className="text-blue-500 font-bold hover:underline">
              회원가입
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}

export default Login
