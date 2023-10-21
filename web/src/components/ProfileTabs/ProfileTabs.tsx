import { useState } from 'react'

import { navigate, routes, useParams } from '@redwoodjs/router'

import { useAuth } from 'src/auth'

import AnsweredQuestionsCell from './AnsweredQuestionsCell'
import AskedQuestionsCell from './AskedQuestionsCell'
import UnansweredQuestionsCell from './UnansweredQuestionsCell'

type defaultTabType = 'answered' | 'unanswered' | 'asked'

interface ProfileTabsProps {
  defaultTab: defaultTabType
}

const ProfileTabs = ({ defaultTab }: ProfileTabsProps) => {
  const useUsername = () => {
    const { username } = useParams()
    const { currentUser } = useAuth()

    // if the username exists as a parameter within the URL, use that
    if (username) {
      return username
    }

    // otherwise, use the current user's username
    // this should be triggered on the /me route
    return currentUser?.username
  }

  const username = useUsername()

  const [selectedTab, setSelectedTab] = useState<defaultTabType>(
    defaultTab || 'answered'
  )

  const setCurrentTab = (tab: defaultTabType) => {
    setSelectedTab(tab)
    navigate(routes.profile({ username, tab }))
  }

  return (
    <div className="relative">
      <div className="sticky top-0 flex justify-between border-b-2 border-b-hotMagenta bg-white pt-4">
        <button
          className={`flex-1 border-b-4 pb-3 font-bold ${
            selectedTab === 'answered'
              ? 'border-b-hotMagenta text-hotMagenta'
              : 'border-b-transparent'
          }`}
          onClick={() => setCurrentTab('answered')}
        >
          Answered
        </button>
        <button
          className={`flex-1 border-b-4 pb-3 font-bold ${
            selectedTab === 'unanswered'
              ? 'border-b-hotMagenta text-hotMagenta'
              : 'border-b-transparent'
          }`}
          onClick={() => setCurrentTab('unanswered')}
        >
          Unanswered
        </button>
        <button
          className={`flex-1 border-b-4 pb-3 font-bold ${
            selectedTab === 'asked'
              ? 'border-b-hotMagenta text-hotMagenta'
              : 'border-b-transparent'
          }`}
          onClick={() => setCurrentTab('asked')}
        >
          Asked
        </button>
      </div>
      <div>
        {selectedTab === 'answered' && (
          <AnsweredQuestionsCell username={username} />
        )}
        {selectedTab === 'unanswered' && (
          <UnansweredQuestionsCell username={username} />
        )}
        {selectedTab === 'asked' && <AskedQuestionsCell username={username} />}
      </div>
    </div>
  )
}

export default ProfileTabs
