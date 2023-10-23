import { Link, routes } from '@redwoodjs/router'

import { useAuth } from 'src/auth'
import Footer from 'src/components/Footer/Footer'
import Header from 'src/components/Header/Header'
import Recently from 'src/components/Recently/Recently'
import Search from 'src/components/Search/Search'
import YouMightLike from 'src/components/YouMightLike/YouMightLike'

type InteriorLayoutProps = {
  children?: React.ReactNode
}

const InteriorLayout = ({ children }: InteriorLayoutProps) => {
  const { isAuthenticated } = useAuth()
  return (
    <div className="grid grid-cols-12">
      <aside className="col-span-3 h-screen border-r-2 border-r-black">
        <Header />
      </aside>
      <main className="col-span-6 h-screen overflow-auto">
        {children}
        <div className="px-14 pb-10">
          <Footer />
        </div>
      </main>
      <aside className="col-span-3 h-screen overflow-auto border-l-2 border-l-black px-4 pb-10 pt-4">
        {!isAuthenticated && (
          <div className="mb-4 flex gap-x-4">
            <Link
              to={routes.signup()}
              className="center flex-1 rounded-3xl bg-black px-4 py-3 font-bold text-white hover:bg-hotMagenta"
            >
              Signup
            </Link>
            <Link
              to={routes.login()}
              className="center flex-1 rounded-3xl bg-black px-4 py-3 font-bold text-white hover:bg-hotMagenta"
            >
              Login
            </Link>
          </div>
        )}
        <Search />
        {isAuthenticated && (
          <>
            <YouMightLike />
            <Recently />
          </>
        )}
      </aside>
    </div>
  )
}

export default InteriorLayout
