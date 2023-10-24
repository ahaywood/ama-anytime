import { MetaTags } from '@redwoodjs/web'

import Footer from 'src/components/Footer/Footer'
import { Constants } from 'src/helpers/Constants'

const BrandKitPage = () => {
  return (
    <>
      <MetaTags title="BrandKit" description="BrandKit page" />

      <h1 className="page-title">Brand Kit</h1>
      <button>Download All Assets</button>

      <h2>Naming</h2>
      <p>
        “AMA Anytime” is the brand name and is always spelled with a capitals
        “AMA Anytime.” It should not be spelled as “Ama Anytime”, “AMA anytime,”
        or any other variation.
      </p>

      <h2>Logo</h2>
      <p>
        Use the AMA Anytime wordmark for stronger brand recognition. Do not
        alter the files in any way.
      </p>

      <h2>Screenshots</h2>

      <h2>Questions</h2>
      <p>
        Please <a href={`mailto:${Constants.EMAIL}`}>contact us</a> if you need
        additional assets or have questions on how to use the AMA Anytime brand.
      </p>
    </>
  )
}

export default BrandKitPage
