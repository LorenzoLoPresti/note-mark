import { ComponentProps } from 'react';
import { Button } from '@/components';
import { useSetAtom } from 'jotai';
import { createEmptyNoteAtom, deleteNoteAtom } from '@renderer/store';

export const ButtonsRow = ({ ...attr }: ComponentProps<'div'>) => {
  const createEmptyNote = useSetAtom(createEmptyNoteAtom);
  const deleteNote = useSetAtom(deleteNoteAtom);

  const handleCreation = async () => {
    await createEmptyNote();
  };

  const handleDelete = () => {
    deleteNote();
  };

  return (
    <div {...attr}>
      <Button variant="newNote" onClick={handleCreation} />
      <Button variant="deleteNote" onClick={handleDelete} />
    </div>
  );
};
