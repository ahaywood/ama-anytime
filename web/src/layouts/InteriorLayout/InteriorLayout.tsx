import Footer from 'src/components/Footer/Footer'
import Header from 'src/components/Header/Header'
import Recently from 'src/components/Recently/Recently'
import Search from 'src/components/Search/Search'
import YouMightLike from 'src/components/YouMightLike/YouMightLike'

type InteriorLayoutProps = {
  children?: React.ReactNode
}

const InteriorLayout = ({ children }: InteriorLayoutProps) => {
  return (
    <div className="grid grid-cols-12 gap-x-4">
      <aside className="col-span-3 h-screen border-r-2 border-r-black pt-14">
        <Header />
      </aside>
      <main className="col-span-6 h-screen overflow-auto">
        {children}
        <Footer />
      </main>
      <aside className="col-span-3 h-screen overflow-auto border-l-2 border-l-black px-4 pt-14">
        <Search />
        <YouMightLike />
        <Recently />
      </aside>
    </div>
  )
}

export default InteriorLayout
