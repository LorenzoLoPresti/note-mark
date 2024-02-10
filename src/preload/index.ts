// import { electronAPI } from '@electron-toolkit/preload'

import { GetNotes, ReadNote, WriteNote } from '@shared/types';
import { contextBridge, ipcRenderer } from 'electron';

// // Custom APIs for renderer
// const api = {}

// // Use `contextBridge` APIs to expose Electron APIs to
// // renderer only if context isolation is enabled, otherwise
// // just add to the DOM global.
// if (process.contextIsolated) {
//   try {
//     contextBridge.exposeInMainWorld('electron', electronAPI)
//     contextBridge.exposeInMainWorld('api', api)
//   } catch (error) {
//     console.error(error)
//   }
// } else {
//   // @ts-ignore (define in dts)
//   window.electron = electronAPI
//   // @ts-ignore (define in dts)
//   window.api = api
// }

if (!process.contextIsolated) {
  throw new Error('contextIsolation musta be enabled in the BrowserWindow');
}

try {
  contextBridge.exposeInMainWorld('context', {
    locale: navigator.language,
    // p2
    getNotes: (...args: Parameters<GetNotes>) => ipcRenderer.invoke('getNotes', ...args),
    readNote: (...args: Parameters<ReadNote>) => ipcRenderer.invoke('readNote', ...args),
    writeNote: (...args: Parameters<WriteNote>) => ipcRenderer.invoke('writeNote', ...args)
  });
} catch (error) {
  console.error(error);
}
