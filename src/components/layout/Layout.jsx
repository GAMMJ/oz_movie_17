import { Outlet } from "react-router"
import Header from "./Header"

const Layout = () => {
  return (
    <>
      <header className="fixed top-0 left-0 right-0 backdrop-blur-md bg-white/80 dark:bg-[#181818]/80 z-20 border-b border-black/10 dark:border-white/10 text-black dark:text-white">
        <Header />
      </header>
      <main className="max-w-[1400px] mx-auto min-h-screen px-8 py-4 mt-20 text-black dark:text-white">
        <Outlet />
      </main>
    </>
  )
}

export default Layout
