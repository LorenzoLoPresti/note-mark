import { ComponentProps, PropsWithChildren } from 'react';
import { twMerge } from 'tailwind-merge';
import { LuFileSignature } from 'react-icons/lu';
import { FaRegTrashCan } from 'react-icons/fa6';

type ButtonTypes = 'action' | 'newNote' | 'deleteNote';

type ButtonProps = PropsWithChildren<{
  variant?: ButtonTypes;
}> &
  ComponentProps<'button'>;

const generalStyle =
  'px-1 py-1 rounded-md border border-zinc-400/50  transition-colors duration-200';

const iconStyle = 'w-4 h-4 text-zync-300';

const styles: Record<ButtonTypes, string> = {
  action: 'hover:bg-green-600/50',
  newNote: 'hover:bg-blue-600/50',
  deleteNote: 'hover:bg-red-600/50'
};

const Button = ({ variant = 'action', children, className, ...attr }: ButtonProps) => {
  const classNames = twMerge(generalStyle, styles[variant], className);

  return (
    <button {...attr} className={classNames}>
      {variant === 'newNote' && <LuFileSignature className={iconStyle} />}
      {variant === 'deleteNote' && <FaRegTrashCan className={iconStyle} />}
      {children}
    </button>
  );
};

export default Button;
