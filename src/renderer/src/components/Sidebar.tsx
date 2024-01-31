import { ComponentProps, FC } from 'react';
import { twMerge } from 'tailwind-merge';

type SidebarProps = ComponentProps<'aside'>;

const Sidebar: FC<SidebarProps> = ({ children, ...attr }) => {
  const { className } = attr;
  const classNames = twMerge('w-[250px] mt-10 h-[100vh - 10px] overflow-auto', className);

  return (
    <aside className={classNames} {...attr}>
      {children}
    </aside>
  );
};

export default Sidebar;
