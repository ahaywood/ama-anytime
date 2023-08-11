import type { Vote } from '@prisma/client'

import { votes, vote, createVote, updateVote, deleteVote } from './votes'
import type { StandardScenario } from './votes.scenarios'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('votes', () => {
  scenario('returns all votes', async (scenario: StandardScenario) => {
    const result = await votes()

    expect(result.length).toEqual(Object.keys(scenario.vote).length)
  })

  scenario('returns a single vote', async (scenario: StandardScenario) => {
    const result = await vote({ id: scenario.vote.one.id })

    expect(result).toEqual(scenario.vote.one)
  })

  scenario('creates a vote', async (scenario: StandardScenario) => {
    const result = await createVote({
      input: {
        questionId: scenario.vote.two.questionId,
        userId: scenario.vote.two.userId,
      },
    })

    expect(result.questionId).toEqual(scenario.vote.two.questionId)
    expect(result.userId).toEqual(scenario.vote.two.userId)
  })

  scenario('updates a vote', async (scenario: StandardScenario) => {
    const original = (await vote({ id: scenario.vote.one.id })) as Vote
    const result = await updateVote({
      id: original.id,
      input: { questionId: scenario.vote.two.questionId },
    })

    expect(result.questionId).toEqual(scenario.vote.two.questionId)
  })

  scenario('deletes a vote', async (scenario: StandardScenario) => {
    const original = (await deleteVote({ id: scenario.vote.one.id })) as Vote
    const result = await vote({ id: original.id })

    expect(result).toEqual(null)
  })
})
