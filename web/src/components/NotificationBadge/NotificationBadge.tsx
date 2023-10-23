const NotificationBadge = ({ numberOfNotifications }) => {
  if (numberOfNotifications > 0)
    return (
      <div className="center h-8 w-8 rounded-full bg-hotMagenta text-xl font-bold text-white">
        {numberOfNotifications}
      </div>
    )
  return null
}

export default NotificationBadge
