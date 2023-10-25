import type { Prisma, InviteStatus } from '@prisma/client'
import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.InviteStatusCreateArgs>({
  inviteStatus: {
    one: { data: { name: 'String5392066' } },
    two: { data: { name: 'String9643162' } },
  },
})

export type StandardScenario = ScenarioData<InviteStatus, 'inviteStatus'>
