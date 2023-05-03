import { styled } from '@stitches/react'
import * as TooltipRadix from '@radix-ui/react-tooltip'

export const TooltipContent = styled(TooltipRadix.Content, {
  background: '$gray900',
  borderRadius: '5px',
  padding: '$2 $3',
  color: '$gray100',
  fontSize: '$sm',
  fontWeight: '$medium',
  fontFamily: '$default',
})
