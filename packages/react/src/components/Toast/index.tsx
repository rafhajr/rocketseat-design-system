// import { ComponentProps } from 'react'
import * as ToastRadix from '@radix-ui/react-toast'
import { useEffect, useState } from 'react'
import { X } from 'phosphor-react'
import {
  ToastAction,
  ToastRoot,
  ToastTitle,
  ToastDescription,
  ToastViewport,
  ToastHeader,
} from './styles'

export interface ToastProps {
  toShow: boolean
  title: string
  description: string
}

export function Toast({ toShow = false, title, description }: ToastProps) {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    setOpen(toShow)
  }, [toShow])

  return (
    <ToastRadix.Provider swipeDirection="right">
      <ToastRoot open={open} onOpenChange={setOpen}>
        <ToastHeader>
          <ToastTitle>{title || 'Sem título'}</ToastTitle>

          <ToastAction asChild altText="Close the Toast">
            <X weight="bold" />
          </ToastAction>
        </ToastHeader>

        <ToastDescription>{description || 'Sem descrição'}</ToastDescription>
      </ToastRoot>

      <ToastViewport />
    </ToastRadix.Provider>
  )
}
