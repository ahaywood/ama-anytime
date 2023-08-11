import type { Prisma, User } from '@prisma/client'
import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.UserCreateArgs>({
  user: {
    one: { data: { username: 'String6133995', email: 'String6123479' } },
    two: { data: { username: 'String9273021', email: 'String5960222' } },
  },
})

export type StandardScenario = ScenarioData<User, 'user'>
