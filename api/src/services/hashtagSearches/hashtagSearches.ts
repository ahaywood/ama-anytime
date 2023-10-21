import type {
  QueryResolvers,
  MutationResolvers,
  HashtagSearchRelationResolvers,
} from 'types/graphql'

import { db } from 'src/lib/db'

export const hashtagSearches: QueryResolvers['hashtagSearches'] = () => {
  return db.hashtagSearch.findMany()
}

export const hashtagSearch: QueryResolvers['hashtagSearch'] = ({ id }) => {
  return db.hashtagSearch.findUnique({
    where: { id },
  })
}

export const createHashtagSearch: MutationResolvers['createHashtagSearch'] = ({
  input,
}) => {
  return db.hashtagSearch.create({
    data: input,
  })
}

export const updateHashtagSearch: MutationResolvers['updateHashtagSearch'] = ({
  id,
  input,
}) => {
  return db.hashtagSearch.update({
    data: input,
    where: { id },
  })
}

export const deleteHashtagSearch: MutationResolvers['deleteHashtagSearch'] = ({
  id,
}) => {
  return db.hashtagSearch.delete({
    where: { id },
  })
}

export const HashtagSearch: HashtagSearchRelationResolvers = {
  searchedBy: (_obj, { root }) => {
    return db.hashtagSearch.findUnique({ where: { id: root?.id } }).searchedBy()
  },
}
