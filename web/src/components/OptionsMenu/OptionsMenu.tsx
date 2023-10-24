import type { IconName } from '@web/public/icons/name.d.ts'

import { useEscapeKey } from 'src/hooks/useEscapeKey'

import Icon from '../Icon/Icon'

export type MenuOption = {
  label: string
  icon: IconName
  onClick: () => void
}

interface OptionsMenuProps {
  close: () => void
  direction: 'topLeft' | 'topRight' | 'bottomLeft' | 'bottomRight'
  options: MenuOption[]
}

const OptionsMenu = ({ close, direction, options }: OptionsMenuProps) => {
  useEscapeKey(close)
  return (
    <div
      className={`options-menu relative rounded-5 bg-whiteSmoke px-5 py-4  ${
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
