import type { Meta, StoryObj } from '@storybook/react'
import { Tooltip, TooltipProps, Button } from '@rafha-ignite-ui/react'

export default {
  title: 'Form/Tooltip',
  component: Tooltip,
  args: {
    children: <Button> Passe o mouse aqui </Button>,
    variant: 'primary',
    text: 'Você passou o mouse',
  },
} as Meta<TooltipProps>

export const Primary: StoryObj<TooltipProps> = {}
