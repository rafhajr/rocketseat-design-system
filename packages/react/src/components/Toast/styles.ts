import { keyframes, styled } from '@stitches/react'
import * as ToastRadix from '@radix-ui/react-toast'

const slideIn = keyframes({
  from: {
    transform: 'translateX(100%)',
  },
  to: {
    transform: 'translateX(0)',
  },
})

const slideOut = keyframes({
  from: {
    transform: 'translateX(0)',
  },
  to: {
    transform: 'translateX(100%)',
  },
})

export const ToastRoot = styled(ToastRadix.Root, {
  background: '$gray800',
  borderRadius: '$sm',
  borderColor: '$gray600',
  border: '1px',
  padding: '15px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  gap: '4px',

  '&[data-state="open"]': {
    animation: `${slideIn} 200ms ease-out`,
  },

  '&[data-state="closed"]': {
    animation: `${slideOut} 200ms ease-out`,
  },
})

export const ToastHeader = styled('div', {
  width: '100%',
  display: 'flex',
  justifyContent: 'space-between',
})

export const ToastAction = styled(ToastRadix.Action, {
  color: '$gray200',
  cursor: 'pointer',
})

export const ToastTitle = styled(ToastRadix.Title, {
  fontFamily: '$default',
  fontWeight: '$bold',
  color: '$white',
  fontSize: '$xl',
})

export const ToastDescription = styled(ToastRadix.Description, {
  fontFamily: '$default',
  fontWeight: '$regular',
  color: '$gray200',
  fontSize: '$sm',
})

export const ToastViewport = styled(ToastRadix.ToastViewport, {
  position: 'fixed',
  bottom: 0,
  right: 0,
  display: 'flex',
  flexDirection: 'column',
  padding: '20px',
  gap: '10px',
  width: '360px',
  listStyle: 'none',
  zIndex: 2147483647,
  outline: 'none',
})
