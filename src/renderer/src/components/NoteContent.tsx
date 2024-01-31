import { ComponentProps, FC, forwardRef } from 'react';
import { twMerge } from 'tailwind-merge';

const NoteContent = forwardRef<HTMLDivElement, ComponentProps<'div'>>(
  ({ children, className, ...attr }, ref) => {
    const classNames = twMerge('flex-1 overflow-auto', className);

    return (
      <div ref={ref} className={classNames} {...attr}>
        NoteContent
      </div>
    );
  }
);
NoteContent.displayName = 'Content';

export default NoteContent;
