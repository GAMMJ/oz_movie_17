import { Outlet } from "react-router"
import Header from "./Header"

const Layout = () => {
  return (
    <>
      <header className="fixed top-0 left-0 right-0 backdrop-blur-md bg-[#181818]/80 z-20 border border-b-white/10">
        <Header />
      </header>
      <main className="min-h-screen px-8 py-4 mt-20">
        <Outlet />
      </main>
    </>
  )
}

export default Layout
