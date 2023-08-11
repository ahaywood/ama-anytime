import { Link, routes } from '@redwoodjs/router'

import Avatar from '../Avatar/Avatar'

const RecentlyQuestion = () => {
  return (
    <div className="text-sm">
      <strong className="mb-1">How do you find podcast sponsors?</strong>
      <Link
        to={routes.profile({ id: '1' })}
        className="flex items-center gap-x-2"
      >
        <Avatar name="Amy Dutton" size="small" />
        Answered by Wade Warren
      </Link>
    </div>
  )
}

export default RecentlyQuestion
