import { Link, routes } from '@redwoodjs/router'

import YouMightLikeProfile from '../YouMightLikeProfile/YouMightLikeProfile'

const YouMightLike = () => {
  return (
    <div className="mb-4 rounded-3xl bg-whiteSmoke px-4 py-3">
      <h3 className="mb-7 text-lg font-bold">You Might Like</h3>
      <ul className="flex flex-col gap-y-7">
        <li>
          <YouMightLikeProfile />
        </li>
        <li>
          <YouMightLikeProfile />
        </li>
        <li>
          <YouMightLikeProfile />
        </li>
        <li>
          <Link
            to={routes.recommendations()}
            className="text-sm font-bold underline hover:text-hotMagenta hover:no-underline"
          >
            Show More
          </Link>
        </li>
      </ul>
    </div>
  )
}

export default YouMightLike
