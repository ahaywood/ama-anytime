import type { Prisma, Vote } from '@prisma/client'
import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.VoteCreateArgs>({
  vote: {
    one: {
      data: {
        question: {
          create: {
            question: 'String',
            updatedAt: '2023-08-08T03:16:04.069Z',
            author: {
              create: { username: 'String9143892', email: 'String5481111' },
            },
            directedAt: {
              create: { username: 'String2620099', email: 'String637441' },
            },
          },
        },
        user: { create: { username: 'String8719915', email: 'String245832' } },
      },
    },
    two: {
      data: {
        question: {
          create: {
            question: 'String',
            updatedAt: '2023-08-08T03:16:04.069Z',
            author: {
              create: { username: 'String346781', email: 'String7222500' },
            },
            directedAt: {
              create: { username: 'String6769383', email: 'String5158221' },
            },
          },
        },
        user: { create: { username: 'String2768806', email: 'String865055' } },
      },
    },
  },
})

export type StandardScenario = ScenarioData<Vote, 'vote'>
