import { Link, routes } from '@redwoodjs/router'

import Avatar from '../Avatar/Avatar'

const RecentlyQuestion = () => {
  return (
    <div className="text-sm">
      <Link
        to={routes.question({ id: '1' })}
        className="mb-1 block font-bold hover:text-hotMagenta"
      >
        How do you find podcast sponsors?
      </Link>
      <div className="flex items-center gap-x-2">
        <Link
          to={routes.profile({ username: 'selfteachme' })}
          className="hover:text-hotMagenta"
        >
          <Avatar name="Amy Dutton" size="small" />
        </Link>
        <div>
          Answered by{' '}
          <Link
            to={routes.profile({ username: 'selfteachme' })}
            className="hover:text-hotMagenta"
          >
            Wade Warren
          </Link>
        </div>
      </div>
    </div>
  )
}

export default RecentlyQuestion
