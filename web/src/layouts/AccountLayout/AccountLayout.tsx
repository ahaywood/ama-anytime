import { Toaster } from '@redwoodjs/web/dist/toast'

import Footer from 'src/components/Footer/Footer'
import Header from 'src/components/Header/Header'

type InteriorLayoutProps = {
  children?: React.ReactNode
}

const AccountLayout = ({ children }: InteriorLayoutProps) => {
  return (
    <div className="grid grid-cols-12">
      <Toaster />
      <aside className="col-span-3 h-screen border-r-2 border-r-black">
        <Header />
      </aside>
      <main className="col-span-6 h-screen overflow-auto">
        {children}
        <div className="px-14 pb-10">
          <Footer />
        </div>
      </main>
      <aside className="col-span-3 h-screen overflow-auto border-l-2 border-l-black px-4 pb-10 pt-4" />
    </div>
  )
}

export default AccountLayout
