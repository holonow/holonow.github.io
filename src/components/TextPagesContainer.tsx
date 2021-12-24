import type { DetailedHTMLProps, HTMLAttributes } from 'react';
import { cx } from '../util/cx';

export default function TextPagesContainer({className, ...props}: DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>) {
  return (
    <div
      className={cx("py-0 px-[clamp(.25rem,2vw,1rem)]", className)}
      {...props}
    />
  )
}

