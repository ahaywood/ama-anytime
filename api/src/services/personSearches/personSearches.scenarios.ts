import type { Prisma, PersonSearch } from '@prisma/client'
import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.PersonSearchCreateArgs>({
  personSearch: {
    one: {
      data: {
        lookingFor: {
          create: { username: 'String3522575', email: 'String8330337' },
        },
        searchedBy: {
          create: { username: 'String571963', email: 'String921819' },
        },
      },
    },
    two: {
      data: {
        lookingFor: {
          create: { username: 'String3999992', email: 'String6692686' },
        },
        searchedBy: {
          create: { username: 'String8259803', email: 'String6334224' },
        },
      },
    },
  },
})

export type StandardScenario = ScenarioData<PersonSearch, 'personSearch'>
