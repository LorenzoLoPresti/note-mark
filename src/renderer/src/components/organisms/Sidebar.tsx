import { ComponentProps } from 'react';
import { twMerge } from 'tailwind-merge';
import { ButtonsRow } from '@/components';

export const Sidebar = ({ children, className, ...attr }: ComponentProps<'aside'>) => {
  const classNames = twMerge('w-[250px] mt-10 h-[100vh - 10px] overflow-auto', className);

  return (
    <aside className={classNames} {...attr}>
      {children}
    </aside>
  );
};
