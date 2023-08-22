import { useState } from 'react'

const ProfileTabs = () => {
  const [selectedTab, setSelectedTab] = useState('answered')

  const setCurrentTab = (tab: string) => {
    setSelectedTab(tab)
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
        {selectedTab === 'answered' && <p>Answered Questions</p>}
        {selectedTab === 'unanswered' && <p>Unanswered Questions</p>}
        {selectedTab === 'asked' && <p>Asked Questions</p>}
      </div>
    </div>
  )
}

export default ProfileTabs
