import { ComponentProps } from 'react';
import { Button } from '@/components';

export const ButtonsRow = ({ ...attr }: ComponentProps<'div'>) => {
  return (
    <div {...attr}>
      <Button variant="newNote" />
      <Button variant="deleteNote" />
    </div>
  );
};
