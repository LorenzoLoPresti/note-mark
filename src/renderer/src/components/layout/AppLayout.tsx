import {
  ButtonsRow,
  NoteContent,
  NotePreviewList,
  RootLayout,
  Sidebar,
  MarkdownEditor
} from '@/components';

export const AppLayout = () => {
  return (
    <RootLayout>
      <Sidebar className="p-2">
        <ButtonsRow className="flex justify-between mt-1" />
        <NotePreviewList className="mt-3 space-y-1" />
      </Sidebar>

      <NoteContent className="border-l bg-zinc-900/50 border-l-white/20">
        <MarkdownEditor />
      </NoteContent>
    </RootLayout>
  );
};
