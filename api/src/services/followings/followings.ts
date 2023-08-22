import type {
  QueryResolvers,
  MutationResolvers,
  FollowingRelationResolvers,
} from 'types/graphql'

import { db } from 'src/lib/db'

export const followings: QueryResolvers['followings'] = () => {
  return db.following.findMany()
}

export const following: QueryResolvers['following'] = ({ id }) => {
  return db.following.findUnique({
    where: { id },
  })
}

export const createFollowing: MutationResolvers['createFollowing'] = ({
  input,
}) => {
  return db.following.create({
    data: input,
  })
}

export const updateFollowing: MutationResolvers['updateFollowing'] = ({
  id,
  input,
}) => {
  return db.following.update({
    data: input,
    where: { id },
  })
}

export const deleteFollowing: MutationResolvers['deleteFollowing'] = ({
  id,
}) => {
  return db.following.delete({
    where: { id },
  })
}

export const Following: FollowingRelationResolvers = {
  follower: (_obj, { root }) => {
    return db.following.findUnique({ where: { id: root?.id } }).follower()
  },
  following: (_obj, { root }) => {
    return db.following.findUnique({ where: { id: root?.id } }).following()
  },
}
