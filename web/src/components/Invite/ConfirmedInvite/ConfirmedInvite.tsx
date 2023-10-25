import Avatar from 'src/components/Avatar/Avatar'
import Icon from 'src/components/Icon/Icon'

const ConfirmedInvite = ({ invite }) => {
  return (
    <div className="flex items-center justify-start gap-3">
      <div className="!flex-grow-0">
        <Avatar
          image={invite?.confirmedUser?.avatar && invite.confirmedUser.avatar}
          name={invite?.confirmedUser?.name && invite.confirmedUser.name}
          size="72"
        />
      </div>
      <div className="w-full flex-1">
        {invite?.confirmedUser?.name && (
          <div>
            <strong>{invite.confirmedUser.name}</strong>
          </div>
        )}
        {invite?.confirmedUser?.username && (
          <div>@{invite.confirmedUser.username}</div>
        )}
        {/* TODO: Change button styles if the current user is already following this person */}
        <button className="mt-1 rounded-[20px] bg-whiteSmoke px-4 py-1 text-sm font-bold hover:bg-hotMagenta hover:text-white">
          Follow
        </button>
      </div>
      <div className="flex !flex-grow-0 items-center gap-1 text-sm font-bold text-success">
        <Icon id="check" />
        Confirmed
      </div>
    </div>
  )
}

export default ConfirmedInvite
