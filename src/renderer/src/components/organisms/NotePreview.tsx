import { cn, formatDateFromMs } from '@renderer/utils';
import { NoteInfo } from '@shared/models';
import { ComponentProps } from 'react';
import { Text } from '@/components';

export type NotePreviewProps = NoteInfo & {
  isActive?: boolean;
} & ComponentProps<'li'>;

const generalStyle = 'cursor-pointer px-2.5 py-3 rounded-md transition-colors';

export const NotePreview = ({
  title,
  lastEditTime,
  isActive = false,
  className,
  ...attr
}: NotePreviewProps) => {
  const conditionalStyle = {
    'bg-zinc-400/75': isActive,
    'hover:bg-zinc-500/75': !isActive
  };

  const date = formatDateFromMs(lastEditTime);

  const classNames = cn(generalStyle, conditionalStyle, className);

  return (
    <li className={classNames} {...attr}>
      <Text as="h3" className="mb-1 font-bold truncate">
        {title}
      </Text>
      <span className="inline-block w-full mb-2 text-xs font-light text-left">{date}</span>
    </li>
  );
};
