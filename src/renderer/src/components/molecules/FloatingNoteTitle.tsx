import { selectedNoteAtom } from '@renderer/store';
import { useAtomValue } from 'jotai';
import React, { ComponentProps } from 'react';
import { twMerge } from 'tailwind-merge';

export const FloatingNoteTitle = ({ className, ...attr }: ComponentProps<'div'>) => {
  const selectedNote = useAtomValue(selectedNoteAtom);

  if (!selectedNote) return null;

  const classNames = twMerge('flex justify-center', className);

  return (
    <div className={classNames} {...attr}>
      <span className="text-gray-400">{selectedNote.title}</span>
    </div>
  );
};
