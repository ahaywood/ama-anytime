import type { Prisma, HashtagSearch } from '@prisma/client'
import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.HashtagSearchCreateArgs>({
  hashtagSearch: {
    one: {
      data: {
        hashtag: 'String9931112',
        searchedBy: {
          create: { username: 'String3845338', email: 'String2755151' },
        },
      },
    },
    two: {
      data: {
        hashtag: 'String2593009',
        searchedBy: {
          create: { username: 'String6232182', email: 'String1744929' },
        },
      },
    },
  },
})

export type StandardScenario = ScenarioData<HashtagSearch, 'hashtagSearch'>
