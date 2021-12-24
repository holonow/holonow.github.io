import type { DetailedHTMLProps, HTMLAttributes } from 'react';

export default function TextPagesContainer({className, ...props}: DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>) {
  return (
    <div
      className={(className || '') + "py-0 px-[clamp(.25rem,2vw,1rem)]"}
      {...props}
    />
  )
}

