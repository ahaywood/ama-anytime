import { Link, routes } from '@redwoodjs/router'

import Footer from 'src/components/Footer/Footer'
import Logo from 'src/components/Logo/Logo'

type HalfAndHalfLayoutProps = {
  children?: React.ReactNode
  title?: string
}

const HalfAndHalfLayout = ({
  children,
  title = '',
}: HalfAndHalfLayoutProps) => {
  return (
    <div className="grid h-screen w-screen grid-cols-[654px_auto]">
      <aside className="half-and-half">
        <div className="center inline-block h-[163px] w-[164px] bg-hotMagenta">
          <Link to={routes.home()}>
            <Logo style="onPink" />
          </Link>
        </div>
        {title && (
          <div className="center h-[327px] bg-hotMagenta">
            <h1 className="inline-block text-center text-[148px] font-black tracking-tight text-white">
              {title}
            </h1>
          </div>
        )}
      </aside>
      <div className="flex flex-col justify-between pb-6 pl-18 pr-32 pt-24">
        {children}
        <Footer />
      </div>
    </div>
  )
}

export default HalfAndHalfLayout
