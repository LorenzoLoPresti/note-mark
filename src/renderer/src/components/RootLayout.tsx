import { ComponentProps } from 'react';
import { twMerge } from 'tailwind-merge';

const RootLayout = ({ children, className, ...attr }: ComponentProps<'main'>) => {
  const classNames = twMerge('flex flex-row h-screen', className);

  return (
    <main className={classNames} {...attr}>
      {children}
    </main>
  );
};

export default RootLayout;
