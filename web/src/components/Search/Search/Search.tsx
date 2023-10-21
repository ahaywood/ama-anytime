import { useState } from 'react'

import { AnimatePresence, motion } from 'framer-motion'

import Icon from 'src/components/Icon/Icon'
import SearchCell from 'src/components/Search/SearchCell'

const Search = () => {
  const [isSearchDetailsShowing, setIsSearchDetailsShowing] = useState(false)
  return (
    <div className="relative mb-4 flex gap-x-2 rounded-3xl bg-whiteSmoke px-4 py-3">
      <Icon id="search" />
      <input
        type="text"
        placeholder="Search"
        className="w-full bg-transparent px-0 py-0 focus:outline-none"
        onFocus={() => setIsSearchDetailsShowing(true)}
        onBlur={() => setIsSearchDetailsShowing(false)}
      />
      <AnimatePresence>
        {isSearchDetailsShowing && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute left-0 top-14 w-full rounded-5 border-1 border-gray-200 shadow-lg"
          >
            <SearchCell />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default Search
