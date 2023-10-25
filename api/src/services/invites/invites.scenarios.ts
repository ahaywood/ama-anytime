import type { Prisma, Invite } from '@prisma/client'
import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.InviteCreateArgs>({
  invite: {
    one: {
      data: {
        email: 'String9642408',
        inviteStatus: { create: { name: 'String3821518' } },
        invitedBy: {
          create: { username: 'String1484516', email: 'String2785596' },
        },
      },
    },
    two: {
      data: {
        email: 'String2801107',
        inviteStatus: { create: { name: 'String4542248' } },
        invitedBy: {
          create: { username: 'String5706177', email: 'String7716838' },
        },
      },
    },
  },
})

export type StandardScenario = ScenarioData<Invite, 'invite'>
