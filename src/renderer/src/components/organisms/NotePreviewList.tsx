import { notesMock } from '@renderer/store/moks';
import { ComponentProps } from 'react';
import { NotePreview } from '@/components';
import { twMerge } from 'tailwind-merge';

export const NotePreviewList = ({ className, ...attr }: ComponentProps<'ul'>) => {
  if (!notesMock.length) {
    const classNames = twMerge('text-center pt-4', className);

    return (
      <ul className={classNames} {...attr}>
        <span>No Notes Yet!</span>
      </ul>
    );
  }

  return (
    <ul className={className} {...attr}>
      {notesMock.map((note) => (
        <NotePreview {...note} key={note.title + note.lastEditTime} />
      ))}
    </ul>
  );
};
