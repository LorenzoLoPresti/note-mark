import { ComponentProps } from 'react';
import Button from '../atoms/Button';

const ButtonsRow = ({ ...attr }: ComponentProps<'div'>) => {
  return (
    <div {...attr}>
      <Button variant="newNote" />
      <Button variant="deleteNote" />
    </div>
  );
};

export default ButtonsRow;
