// import { ComponentProps } from 'react'
import * as TooltipRadix from '@radix-ui/react-tooltip'
import { ReactElement } from 'react'
import { TooltipContent } from './styles'

// export interface TooltipProps extends ComponentProps<typeof TooltipContainer> { }

export interface TooltipProps {
  children: ReactElement
  text: string
}

export function Tooltip({ children, text }: TooltipProps) {
  return (
    <TooltipRadix.Provider>
      <TooltipRadix.Root>
        <TooltipRadix.Trigger asChild>
          {children}
          {/* <button className="IconButton">Passe o mouse</button> */}
        </TooltipRadix.Trigger>

        <TooltipRadix.Portal>
          <TooltipContent sideOffset={5}>
            <TooltipRadix.Arrow />
            {text}
          </TooltipContent>
        </TooltipRadix.Portal>
      </TooltipRadix.Root>
    </TooltipRadix.Provider>
  )
}
