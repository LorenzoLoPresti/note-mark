import React, { ComponentProps } from 'react';
import { twMerge } from 'tailwind-merge';

export const FloatingNoteTitle = ({ className, ...attr }: ComponentProps<'div'>) => {
  const title = 'Note Title';
  const classNames = twMerge('flex justify-center', className);

  return (
    <div className={classNames} {...attr}>
      <span className="text-gray-400">{title}</span>
    </div>
  );
};
