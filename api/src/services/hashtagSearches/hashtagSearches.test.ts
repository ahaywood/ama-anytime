import type { HashtagSearch } from '@prisma/client'

import {
  hashtagSearches,
  hashtagSearch,
  createHashtagSearch,
  updateHashtagSearch,
  deleteHashtagSearch,
} from './hashtagSearches'
import type { StandardScenario } from './hashtagSearches.scenarios'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('hashtagSearches', () => {
  scenario(
    'returns all hashtagSearches',
    async (scenario: StandardScenario) => {
      const result = await hashtagSearches()

      expect(result.length).toEqual(Object.keys(scenario.hashtagSearch).length)
    }
  )

  scenario(
    'returns a single hashtagSearch',
    async (scenario: StandardScenario) => {
      const result = await hashtagSearch({ id: scenario.hashtagSearch.one.id })

      expect(result).toEqual(scenario.hashtagSearch.one)
    }
  )

  scenario('creates a hashtagSearch', async (scenario: StandardScenario) => {
    const result = await createHashtagSearch({
      input: {
        hashtag: 'String4581661',
        userId: scenario.hashtagSearch.two.userId,
      },
    })

    expect(result.hashtag).toEqual('String4581661')
    expect(result.userId).toEqual(scenario.hashtagSearch.two.userId)
  })

  scenario('updates a hashtagSearch', async (scenario: StandardScenario) => {
    const original = (await hashtagSearch({
      id: scenario.hashtagSearch.one.id,
    })) as HashtagSearch
    const result = await updateHashtagSearch({
      id: original.id,
      input: { hashtag: 'String48798572' },
    })

    expect(result.hashtag).toEqual('String48798572')
  })

  scenario('deletes a hashtagSearch', async (scenario: StandardScenario) => {
    const original = (await deleteHashtagSearch({
      id: scenario.hashtagSearch.one.id,
    })) as HashtagSearch
    const result = await hashtagSearch({ id: original.id })

    expect(result).toEqual(null)
  })
})
