import { ComponentProps, FC, RefObject, forwardRef } from 'react';
import { twMerge } from 'tailwind-merge';

type NoteContentProps = {
  parentRef?: RefObject<HTMLDivElement>;
} & ComponentProps<'div'>;

export const NoteContent = ({ parentRef, children, className, ...attr }: NoteContentProps) => {
  const classNames = twMerge('flex-1 overflow-auto', className);

  return (
    <div ref={parentRef} className={classNames} {...attr}>
      {children}
    </div>
  );
};
NoteContent.displayName = 'Content';
