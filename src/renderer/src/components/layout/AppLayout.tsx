import RootLayout from '../RootLayout';
import NoteContent from '../NoteContent';
import Sidebar from '../Sidebar';

const AppLayout = () => {
  return (
    <RootLayout>
      <Sidebar className="p-2">Sidebar</Sidebar>
      <NoteContent className="border-l bg-zinc-900/50 border-l-white/20">Content</NoteContent>
    </RootLayout>
  );
};

export default AppLayout;
