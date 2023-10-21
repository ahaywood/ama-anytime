import type {
  QueryResolvers,
  MutationResolvers,
  PersonSearchRelationResolvers,
} from 'types/graphql'

import { db } from 'src/lib/db'

export const personSearches: QueryResolvers['personSearches'] = () => {
  return db.personSearch.findMany()
}

export const personSearch: QueryResolvers['personSearch'] = ({ id }) => {
  return db.personSearch.findUnique({
    where: { id },
  })
}

export const createPersonSearch: MutationResolvers['createPersonSearch'] = ({
  input,
}) => {
  return db.personSearch.create({
    data: input,
  })
}

export const updatePersonSearch: MutationResolvers['updatePersonSearch'] = ({
  id,
  input,
}) => {
  return db.personSearch.update({
    data: input,
    where: { id },
  })
}

export const deletePersonSearch: MutationResolvers['deletePersonSearch'] = ({
  id,
}) => {
  return db.personSearch.delete({
    where: { id },
  })
}

export const PersonSearch: PersonSearchRelationResolvers = {
  lookingFor: (_obj, { root }) => {
    return db.personSearch.findUnique({ where: { id: root?.id } }).lookingFor()
  },
  searchedBy: (_obj, { root }) => {
    return db.personSearch.findUnique({ where: { id: root?.id } }).searchedBy()
  },
}
