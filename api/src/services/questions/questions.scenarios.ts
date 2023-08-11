import type { Prisma, Question } from '@prisma/client'
import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.QuestionCreateArgs>({
  question: {
    one: {
      data: {
        question: 'String',
        updatedAt: '2023-08-08T03:13:24.838Z',
        author: { create: { username: 'String815243', email: 'String220391' } },
        directedAt: {
          create: { username: 'String5868746', email: 'String8785067' },
        },
      },
    },
    two: {
      data: {
        question: 'String',
        updatedAt: '2023-08-08T03:13:24.838Z',
        author: {
          create: { username: 'String6526761', email: 'String4537873' },
        },
        directedAt: {
          create: { username: 'String7798782', email: 'String1809294' },
        },
      },
    },
  },
})

export type StandardScenario = ScenarioData<Question, 'question'>
