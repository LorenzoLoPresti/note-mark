import { ComponentProps } from 'react';
import { twMerge } from 'tailwind-merge';

type TextTags = 'h3';

export type TextProps = {
  as: TextTags;
  styledAs?: TextTags;
} & ComponentProps<TextTags>;

export const Text = ({ as, styledAs = as, className, children, ...attr }: TextProps) => {
  const style: Record<TextTags, string> = {
    h3: ''
  };

  const El = as;
  const classNames = twMerge(style[styledAs], className);
  return (
    <El {...attr} className={classNames}>
      {children}
    </El>
  );
};
