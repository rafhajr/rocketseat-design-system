import type { Meta, StoryObj } from '@storybook/react'
import { Toast, ToastProps } from '@rafha-ignite-ui/react'

export default {
  title: 'Form/Toast',
  component: Toast,
  args: {
    title: 'Toast',
    description: 'Isso é um toast',
    toShow: true,
  },
} as Meta<ToastProps>

export const Primary: StoryObj<ToastProps> = {}
