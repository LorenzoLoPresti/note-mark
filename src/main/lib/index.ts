import { homedir } from 'os';
import { appDirectoryName, fileEncoding } from '../../shared/constants';
import { ensureDir, readdir, stat, readFile } from 'fs-extra';
import { NoteInfo } from '../../shared/models';
import { GetNotes, ReadNote } from '../../shared/types';

export const getRootDir = () => `${homedir()}/${appDirectoryName}`;

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
  const filePath = `${getRootDir()}/${filename}`.replace(/\//g, '\\');
  const fileStats = await stat(filePath);

  return {
    title: filename.replace(/\.md$/, ''),
    lastEditTime: fileStats.mtimeMs
  };
};

export const readNote: ReadNote = async (filename: string) => {
  const rootDir = getRootDir();
  const filePath = `${rootDir}/${filename}.md`.replace(/\//g, '\\');

  return readFile(filePath, { encoding: fileEncoding });
};
