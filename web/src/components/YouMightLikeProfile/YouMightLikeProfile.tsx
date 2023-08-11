import { Link, routes } from '@redwoodjs/router'

import Avatar from '../Avatar/Avatar'

const YouMightLikeProfile = () => {
  return (
    <div className="flex gap-x-3">
      <Link to={routes.profile()}>
        <Avatar name="Sara Walker" />
      </Link>
      <div className="text-sm">
        <Link
          to={routes.profile()}
          className="mb-1 block hover:text-hotMagenta"
        >
          <strong>Savannah Nguyen</strong>
          <br />
          @bluebear234
        </Link>
        <button className="rounded-[20px] bg-white px-4 py-1 text-sm font-bold hover:bg-hotMagenta hover:text-white">
          Follow
        </button>
      </div>
    </div>
  )
}

export default YouMightLikeProfile
