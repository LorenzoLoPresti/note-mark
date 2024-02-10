import { homedir } from 'os';
import { appDirectoryName, fileEncoding } from '../../shared/constants';
import { ensureDir, readdir, stat, readFile, writeFile, remove } from 'fs-extra';
import { NoteInfo } from '../../shared/models';
import { CreateNote, DeleteNote, GetNotes, ReadNote, WriteNote } from '../../shared/types';
import { dialog } from 'electron';
import path from 'path';

const formatPath = (path: string): string => path.replace(/\//g, '\\');

export const getRootDir = () => formatPath(`${homedir()}/${appDirectoryName}`);

export const getNotes: GetNotes = async () => {
  const rootDir = getRootDir();

  await ensureDir(rootDir);

  const notesFileNames = await readdir(rootDir, {
    encoding: fileEncoding,
    withFileTypes: false
  });

  const notes = notesFileNames.filter((fileName) => fileName.endsWith('.md'));

  return Promise.all(notes.map(getNoteInfoFromFilename));
};

export const getNoteInfoFromFilename = async (filename: string): Promise<NoteInfo> => {
  const filePath = formatPath(`${getRootDir()}/${filename}`);
  const fileStats = await stat(filePath);

  return {
    title: filename.replace(/\.md$/, ''),
    lastEditTime: fileStats.mtimeMs
  };
};

export const readNote: ReadNote = async (filename: string) => {
  const rootDir = getRootDir();
  const filePath = formatPath(`${rootDir}/${filename}.md`);

  return readFile(filePath, { encoding: fileEncoding });
};

export const writeNote: WriteNote = async (filename, content) => {
  const rootDir = getRootDir();
  const noteContent = formatPath(`${rootDir}/${filename}.md`);

  return writeFile(noteContent, content, { encoding: fileEncoding });
};

export const createNote: CreateNote = async () => {
  const rootDir = getRootDir();

  await ensureDir(rootDir);

  const { filePath, canceled } = await dialog.showSaveDialog({
    title: 'New note',
    defaultPath: formatPath(`${rootDir}/Untitled.md`),
    buttonLabel: 'Create',
    properties: ['showOverwriteConfirmation'],
    showsTagField: false,
    filters: [{ name: 'Markdown', extensions: ['md'] }]
  });

  if (canceled || !filePath) {
    console.info('Note creation canceled');
    return false;
  }

  const { name: filename, dir: parentDir } = path.parse(filePath);

  if (parentDir !== rootDir) {
    await dialog.showMessageBox({
      type: 'error',
      title: 'Creation failed',
      message: `All notes must be saved under ${rootDir}.
      Avoid using other directories!`
    });

    return false;
  }

  console.info(`Creating note: ${filePath}`);
  await writeFile(filePath, '');

  return filename;
};

export const deleteNote: DeleteNote = async (filename) => {
  const rootDir = getRootDir();

  const { response } = await dialog.showMessageBox({
    type: 'warning',
    title: 'Delete note',
    message: `Are you sure you want to delete ${filename}?`,
    buttons: ['Delete', 'Cancel'], // 0 is Delete, 1 is Cancel
    defaultId: 1,
    cancelId: 1
  });

  if (response === 1) {
    console.info('Note deletion canceled');
    return false;
  }

  console.info(`Deleting note: ${filename}`);
  await remove(formatPath(`${rootDir}/${filename}.md`));
  return true;
};
