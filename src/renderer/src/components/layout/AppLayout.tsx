import RootLayout from '../RootLayout';
import NoteContent from '../NoteContent';
import Sidebar from '../Sidebar';
import ButtonsRow from '../molecules/ButtonsRow';

const AppLayout = () => {
  return (
    <RootLayout>
      <Sidebar className="p-2">
        <ButtonsRow className="flex justify-between mt-1" />
      </Sidebar>
      <NoteContent className="border-l bg-zinc-900/50 border-l-white/20">Content</NoteContent>
    </RootLayout>
  );
};

export default AppLayout;
