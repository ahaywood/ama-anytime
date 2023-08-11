import type { Prisma, Bookmark } from '@prisma/client'
import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.BookmarkCreateArgs>({
  bookmark: {
    one: {
      data: {
        question: {
          create: {
            question: 'String',
            updatedAt: '2023-08-08T03:15:56.224Z',
            author: {
              create: { username: 'String4984612', email: 'String373715' },
            },
            directedAt: {
              create: { username: 'String566296', email: 'String2154455' },
            },
          },
        },
        user: { create: { username: 'String5187817', email: 'String9185670' } },
      },
    },
    two: {
      data: {
        question: {
          create: {
            question: 'String',
            updatedAt: '2023-08-08T03:15:56.225Z',
            author: {
              create: { username: 'String7684136', email: 'String619270' },
            },
            directedAt: {
              create: { username: 'String4811590', email: 'String3641000' },
            },
          },
        },
        user: { create: { username: 'String524547', email: 'String7917482' } },
      },
    },
  },
})

export type StandardScenario = ScenarioData<Bookmark, 'bookmark'>
