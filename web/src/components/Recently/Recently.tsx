import { Link, routes } from '@redwoodjs/router'

import RecentlyQuestion from '../RecentlyQuestion/RecentlyQuestion'

const Recently = () => {
  return (
    <div className="rounded-3xl bg-whiteSmoke px-4 py-3">
      <h3 className="mb-7 text-lg font-bold">Recently</h3>
      <ul className="flex flex-col gap-y-7">
        <li>
          <RecentlyQuestion />
        </li>
        <li>
          <RecentlyQuestion />
        </li>
        <li>
          <RecentlyQuestion />
        </li>
        <li>
          <Link
            to={routes.home()}
            className="text-sm font-bold underline hover:text-hotMagenta hover:no-underline"
          >
            Show More
          </Link>
        </li>
      </ul>
    </div>
  )
}

export default Recently
