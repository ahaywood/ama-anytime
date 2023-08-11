import type { Prisma, Like } from '@prisma/client'
import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.LikeCreateArgs>({
  like: {
    one: {
      data: {
        question: {
          create: {
            question: 'String',
            updatedAt: '2023-08-11T13:45:38.934Z',
            author: {
              create: { username: 'String7397305', email: 'String696341' },
            },
            directedAt: {
              create: { username: 'String7116406', email: 'String4865781' },
            },
          },
        },
        user: { create: { username: 'String4932563', email: 'String9680426' } },
      },
    },
    two: {
      data: {
        question: {
          create: {
            question: 'String',
            updatedAt: '2023-08-11T13:45:38.934Z',
            author: {
              create: { username: 'String4027310', email: 'String7127589' },
            },
            directedAt: {
              create: { username: 'String2092629', email: 'String66720' },
            },
          },
        },
        user: { create: { username: 'String7025867', email: 'String4788389' } },
      },
    },
  },
})

export type StandardScenario = ScenarioData<Like, 'like'>
