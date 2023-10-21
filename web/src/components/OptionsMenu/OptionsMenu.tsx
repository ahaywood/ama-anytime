import type { IconName } from '@web/public/icons/name.d.ts'

import Icon from '../Icon/Icon'

interface OptionsMenuProps {
  direction: 'topLeft' | 'topRight' | 'bottomLeft' | 'bottomRight'
  options: {
    label: string
    icon: IconName
    onClick: () => void
  }[]
}

const OptionsMenu = ({ direction, options }: OptionsMenuProps) => {
  return (
    <div
      className={`options-menu relative rounded-5 bg-whiteSmoke px-5 py-4 ${
        direction ? direction : ''
      }`}
    >
      <ul className="flex flex-col gap-3">
        {options.map((option, index) => (
          <li key={index}>
            <button
              className="flex items-center justify-start gap-x-2 whitespace-nowrap text-sm font-bold text-black hover:text-hotMagenta"
              onClick={option.onClick}
            >
              <Icon id={option.icon} />
              {option.label}
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default OptionsMenu
