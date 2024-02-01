import { notesMock } from '@renderer/store/moks';
import { ComponentProps } from 'react';
import { NotePreview } from '@/components';

export const NotePreviewList = ({ ...attr }: ComponentProps<'ul'>) => {
  return (
    <ul {...attr}>
      {notesMock.map((note) => (
        <NotePreview {...note} key={note.title + note.lastEditTime} />
      ))}
    </ul>
  );
};
