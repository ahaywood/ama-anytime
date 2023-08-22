import type { Prisma, Following } from '@prisma/client'
import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.FollowingCreateArgs>({
  following: {
    one: {
      data: {
        follower: {
          create: { username: 'String9458208', email: 'String1780885' },
        },
        following: {
          create: { username: 'String5122836', email: 'String2281041' },
        },
      },
    },
    two: {
      data: {
        follower: {
          create: { username: 'String691421', email: 'String6523537' },
        },
        following: {
          create: { username: 'String4314443', email: 'String9126806' },
        },
      },
    },
  },
})

export type StandardScenario = ScenarioData<Following, 'following'>
