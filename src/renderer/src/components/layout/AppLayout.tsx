import {
  ButtonsRow,
  NoteContent,
  NotePreviewList,
  RootLayout,
  Sidebar,
  MarkdownEditor,
  FloatingNoteTitle
} from '@/components';
import { useRef } from 'react';

export const AppLayout = () => {
  const contentContainerRef = useRef<HTMLDivElement>(null);

  const resetScroll = () => {
    contentContainerRef.current?.scrollTo(0, 0);
  };

  return (
    <RootLayout>
      <Sidebar className="p-2">
        <ButtonsRow className="flex justify-between mt-1" />
        <NotePreviewList className="mt-3 space-y-1" onSelect={resetScroll} />
      </Sidebar>

      <NoteContent
        parentRef={contentContainerRef}
        className="border-l bg-zinc-900/50 border-l-white/20"
      >
        <FloatingNoteTitle className="pt-2" />
        <MarkdownEditor />
      </NoteContent>
    </RootLayout>
  );
};
