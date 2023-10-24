import type {
  FindEditProfileQuery,
  FindEditProfileQueryVariables,
} from 'types/graphql'

import { Form, TextAreaField, TextField, UrlField } from '@redwoodjs/forms'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import Avatar from '../Avatar/Avatar'
import Icon from '../Icon/Icon'

export const QUERY = gql`
  query FindEditProfileQuery($id: Int!) {
    user(id: $id) {
      bio
      location
      website
      name
      avatar
      cover
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({
  error,
}: CellFailureProps<FindEditProfileQueryVariables>) => (
  <div style={{ color: 'red' }}>Error: {error?.message}</div>
)

export const Success = ({
  user,
}: CellSuccessProps<FindEditProfileQuery, FindEditProfileQueryVariables>) => {
  return (
    <Form className="big-form">
      <fieldset>
        <div className="relative mb-[120px]">
          {user.cover ? (
            <img src={user.cover} alt={user.name} />
          ) : (
            <div className="h-[282px] w-full bg-hotMagenta" />
          )}
          <div className="center absolute inset-0 h-full w-full gap-6 bg-black bg-opacity-50">
            <button className="center h-[54px] w-[54px] rounded-full bg-black text-white">
              <Icon id="camera" size={36} />
            </button>
            <button className="center h-[54px] w-[54px] rounded-full bg-white text-black">
              <Icon id="close" size={36} />
            </button>
          </div>
          <div className="absolute -bottom-20 left-12 rounded-full border-4 border-white">
            <Avatar size="large" />
            <div className="center absolute inset-0 h-full w-full gap-3">
              <button className="center h-[54px] w-[54px] rounded-full bg-hotMagenta text-white">
                <Icon id="camera" size={36} />
              </button>
              <button className="center h-[54px] w-[54px] rounded-full bg-white text-black">
                <Icon id="close" size={36} />
              </button>
            </div>
          </div>
        </div>
        <div className="px-14 pb-16">
          <div className="field">
            <label htmlFor="name">Name</label>
            <TextField name="name" defaultValue={user.name} />
          </div>
          <div className="field">
            <label htmlFor="bio">Bio</label>
            <TextAreaField name="bio" defaultValue={user.bio} />
          </div>
          <div className="field">
            <label htmlFor="location">Location</label>
            <TextField name="location" defaultValue={user.location} />
          </div>
          <div className="field">
            <label htmlFor="website">Website</label>
            <UrlField name="website" defaultValue={user.website} />
          </div>
          <div className="flex justify-end">
            <button className="button solid">Update Profile</button>
          </div>
        </div>
      </fieldset>
    </Form>
  )
}
