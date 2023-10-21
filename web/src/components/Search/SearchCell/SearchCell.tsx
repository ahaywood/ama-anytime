import type { FindSearchQuery, FindSearchQueryVariables } from 'types/graphql'

import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import RecentHashtagSearchCard from '../../RecentHashtagSearchCard/RecentHashtagSearchCard'
import RecentPersonSearchCard from '../../RecentPersonSearchCard/RecentPersonSearchCard'

export const QUERY = gql`
  query Redwood {
    redwood {
      version
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({
  error,
}: CellFailureProps<FindSearchQueryVariables>) => (
  <div style={{ color: 'red' }}>Error: {error?.message}</div>
)

export const Success = ({
  user,
}: CellSuccessProps<FindSearchQuery, FindSearchQueryVariables>) => {
  return (
    <div className="rounded-5 bg-whiteSmoke">
      <div className="border-b-1 border-b-veryLightGray p-4">
        <div className="mb-4 flex items-center justify-between">
          <h3 className="text-lg font-bold">Recent Searches</h3>
          <button className="text-sm font-bold underline hover:text-hotMagenta hover:no-underline">
            Clear All
          </button>
        </div>
        <ul className="flex flex-col gap-4">
          <li>
            <RecentPersonSearchCard
              avatar={{
                image: 'https://picsum.photos/seed/1697853917843/300/300',
                name: 'Amy Dutton',
              }}
              username={'selfteachme'}
            />
          </li>
          <li>
            <RecentPersonSearchCard
              avatar={{
                image: 'https://picsum.photos/seed/1697853917843/300/300',
                name: 'Amy Dutton',
              }}
              username={'selfteachme'}
            />
          </li>
          <li>
            <RecentPersonSearchCard
              avatar={{
                image: 'https://picsum.photos/seed/1697853917843/300/300',
                name: 'Amy Dutton',
              }}
              username={'selfteachme'}
            />
          </li>
        </ul>
      </div>
      <div className="p-4">
        <h3 className="mb-3 text-lg font-bold">Saved Searches</h3>
        <ul>
          <li>
            <RecentHashtagSearchCard hashtag="javascript" />
          </li>
          <li>
            <RecentHashtagSearchCard hashtag="css" />
          </li>
          <li>
            <RecentHashtagSearchCard hashtag="devrel" />
          </li>
        </ul>
      </div>
    </div>
  )
}
