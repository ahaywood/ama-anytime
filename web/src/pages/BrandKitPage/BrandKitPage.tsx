import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

const BrandKitPage = () => {
  return (
    <>
      <MetaTags title="BrandKit" description="BrandKit page" />

      <h1>BrandKitPage</h1>
      <p>
        Find me in <code>./web/src/pages/BrandKitPage/BrandKitPage.tsx</code>
      </p>
      <p>
        My default route is named <code>brandKit</code>, link to me with `
        <Link to={routes.brandKit()}>BrandKit</Link>`
      </p>
    </>
  )
}

export default BrandKitPage
