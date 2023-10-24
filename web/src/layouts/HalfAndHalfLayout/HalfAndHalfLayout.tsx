import { Link, routes } from '@redwoodjs/router'

import Footer from 'src/components/Footer/Footer'
import Logo from 'src/components/Logo/Logo'

type HalfAndHalfLayoutProps = {
  children?: React.ReactNode
}

const HalfAndHalfLayout = ({ children }: HalfAndHalfLayoutProps) => {
  return (
    <div className="grid h-screen w-screen grid-cols-[654px_auto]">
      <aside className="half-and-half">
        <div className="center inline-block h-[164px] w-[164px] bg-hotMagenta">
          <Link to={routes.home()}>
            <Logo style="onPink" />
          </Link>
        </div>
      </aside>
      <div className="py-24 pl-18 pr-32">
        {children}
        <Footer />
      </div>
    </div>
  )
}

export default HalfAndHalfLayout
