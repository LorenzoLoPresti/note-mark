import { notesMock } from '@renderer/store/moks';
import { ComponentProps } from 'react';
import { NotePreview } from '@/components';
import { twMerge } from 'tailwind-merge';
import { useNotesList } from '@renderer/hooks/useNotesList';
import { isEmpty } from 'lodash';

export type NotePreviewListProps = {
  onSelect?: () => void;
} & ComponentProps<'ul'>;

export const NotePreviewList = ({ onSelect, className, ...attr }: NotePreviewListProps) => {
  const { notes, selectedNoteIndex, handleNoteSelect } = useNotesList({ onSelect });

  if (!notes) return null;

  if (isEmpty(notes)) {
    const classNames = twMerge('text-center pt-4', className);

    return (
      <ul className={classNames} {...attr}>
        <span>No Notes Yet!</span>
      </ul>
    );
  }

  return (
    <ul className={className} {...attr}>
      {notes.map((note, i) => (
        <NotePreview
          key={note.title + note.lastEditTime}
          isActive={selectedNoteIndex === i}
          onClick={() => handleNoteSelect(i)}
          {...note}
        />
      ))}
    </ul>
  );
};
