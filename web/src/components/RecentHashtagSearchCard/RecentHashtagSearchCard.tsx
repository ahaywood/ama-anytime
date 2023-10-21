import { Link, routes } from '@redwoodjs/router'

import Icon from '../Icon/Icon'

interface RecentHashtagSearchCardProps {
  hashtag: string
}

const RecentHashtagSearchCard = ({ hashtag }: RecentHashtagSearchCardProps) => {
  return (
    <div className="flex items-center gap-x-3">
      <div className="center h-[42px] w-[42px]">
        <Icon id="search" />
      </div>
      <div className="flex-1 text-sm font-extrabold">
        <Link to={routes.tag({ hashtag })} className="hover:text-hotMagenta">
          #{hashtag}
        </Link>
      </div>
      <button className="text-destructive hover:text-black">
        <Icon id="trash" />
      </button>
    </div>
  )
}

export default RecentHashtagSearchCard
