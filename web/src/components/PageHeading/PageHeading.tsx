import { Link } from '@redwoodjs/router'

import Icon from '../Icon/Icon'

interface PageHeadingProps {
  backButtonLink?: string
  heading: string
  subheading?: string
}

const PageHeading = ({
  heading,
  subheading = '',
  backButtonLink = '',
}: PageHeadingProps) => {
  return (
    <div className="relative border-b-2 border-b-black bg-black pb-4 pl-16 pt-14 text-white">
      {backButtonLink && (
        <Link
          to={backButtonLink}
          className="absolute left-5 top-[58px] transition-all hover:left-4"
        >
          <Icon id="arrow" />
        </Link>
      )}
      <h1 className="inline text-xl font-bold">{heading}</h1>
      {subheading && <h2 className="inline pl-3 text-sm">{subheading}</h2>}
    </div>
  )
}

export default PageHeading
