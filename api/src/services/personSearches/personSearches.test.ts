import type { PersonSearch } from '@prisma/client'

import {
  personSearches,
  personSearch,
  createPersonSearch,
  updatePersonSearch,
  deletePersonSearch,
} from './personSearches'
import type { StandardScenario } from './personSearches.scenarios'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('personSearches', () => {
  scenario('returns all personSearches', async (scenario: StandardScenario) => {
    const result = await personSearches()

    expect(result.length).toEqual(Object.keys(scenario.personSearch).length)
  })

  scenario(
    'returns a single personSearch',
    async (scenario: StandardScenario) => {
      const result = await personSearch({ id: scenario.personSearch.one.id })

      expect(result).toEqual(scenario.personSearch.one)
    }
  )

  scenario('creates a personSearch', async (scenario: StandardScenario) => {
    const result = await createPersonSearch({
      input: {
        lookingForUserId: scenario.personSearch.two.lookingForUserId,
        userId: scenario.personSearch.two.userId,
      },
    })

    expect(result.lookingForUserId).toEqual(
      scenario.personSearch.two.lookingForUserId
    )
    expect(result.userId).toEqual(scenario.personSearch.two.userId)
  })

  scenario('updates a personSearch', async (scenario: StandardScenario) => {
    const original = (await personSearch({
      id: scenario.personSearch.one.id,
    })) as PersonSearch
    const result = await updatePersonSearch({
      id: original.id,
      input: { lookingForUserId: scenario.personSearch.two.lookingForUserId },
    })

    expect(result.lookingForUserId).toEqual(
      scenario.personSearch.two.lookingForUserId
    )
  })

  scenario('deletes a personSearch', async (scenario: StandardScenario) => {
    const original = (await deletePersonSearch({
      id: scenario.personSearch.one.id,
    })) as PersonSearch
    const result = await personSearch({ id: original.id })

    expect(result).toEqual(null)
  })
})
