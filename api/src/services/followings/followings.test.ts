import type { Following } from '@prisma/client'

import {
  followings,
  following,
  createFollowing,
  updateFollowing,
  deleteFollowing,
} from './followings'
import type { StandardScenario } from './followings.scenarios'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('followings', () => {
  scenario('returns all followings', async (scenario: StandardScenario) => {
    const result = await followings()

    expect(result.length).toEqual(Object.keys(scenario.following).length)
  })

  scenario('returns a single following', async (scenario: StandardScenario) => {
    const result = await following({ id: scenario.following.one.id })

    expect(result).toEqual(scenario.following.one)
  })

  scenario('creates a following', async (scenario: StandardScenario) => {
    const result = await createFollowing({
      input: {
        followerId: scenario.following.two.followerId,
        followingId: scenario.following.two.followingId,
      },
    })

    expect(result.followerId).toEqual(scenario.following.two.followerId)
    expect(result.followingId).toEqual(scenario.following.two.followingId)
  })

  scenario('updates a following', async (scenario: StandardScenario) => {
    const original = (await following({
      id: scenario.following.one.id,
    })) as Following
    const result = await updateFollowing({
      id: original.id,
      input: { followerId: scenario.following.two.followerId },
    })

    expect(result.followerId).toEqual(scenario.following.two.followerId)
  })

  scenario('deletes a following', async (scenario: StandardScenario) => {
    const original = (await deleteFollowing({
      id: scenario.following.one.id,
    })) as Following
    const result = await following({ id: original.id })

    expect(result).toEqual(null)
  })
})
