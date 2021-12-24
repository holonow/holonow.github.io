import type { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react';

export interface ModalProps extends
  DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  open: boolean
}

export default function Modal({ open, ...restProps }: ModalProps) {
  return (
    <div
      className={`${open ? 'block' : 'hidden'} fixed z-10 left-0 top-0 w-full h-full overflow-auto bg-black/40`}
      {...restProps}
    />
  )
}
