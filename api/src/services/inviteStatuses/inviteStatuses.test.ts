import type { InviteStatus } from '@prisma/client'

import {
  inviteStatuses,
  inviteStatus,
  createInviteStatus,
  updateInviteStatus,
  deleteInviteStatus,
} from './inviteStatuses'
import type { StandardScenario } from './inviteStatuses.scenarios'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('inviteStatuses', () => {
  scenario('returns all inviteStatuses', async (scenario: StandardScenario) => {
    const result = await inviteStatuses()

    expect(result.length).toEqual(Object.keys(scenario.inviteStatus).length)
  })

  scenario(
    'returns a single inviteStatus',
    async (scenario: StandardScenario) => {
      const result = await inviteStatus({ id: scenario.inviteStatus.one.id })

      expect(result).toEqual(scenario.inviteStatus.one)
    }
  )

  scenario('creates a inviteStatus', async () => {
    const result = await createInviteStatus({
      input: { name: 'String3393059' },
    })

    expect(result.name).toEqual('String3393059')
  })

  scenario('updates a inviteStatus', async (scenario: StandardScenario) => {
    const original = (await inviteStatus({
      id: scenario.inviteStatus.one.id,
    })) as InviteStatus
    const result = await updateInviteStatus({
      id: original.id,
      input: { name: 'String37951302' },
    })

    expect(result.name).toEqual('String37951302')
  })

  scenario('deletes a inviteStatus', async (scenario: StandardScenario) => {
    const original = (await deleteInviteStatus({
      id: scenario.inviteStatus.one.id,
    })) as InviteStatus
    const result = await inviteStatus({ id: original.id })

    expect(result).toEqual(null)
  })
})
