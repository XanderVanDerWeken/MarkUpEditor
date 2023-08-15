import { ipcRenderer } from "electron";

class Filesystem {
    async saveFile(data: string, filename: string): Promise<string | null> {
        try {
            return await ipcRenderer.invoke('save-file', data, filename);
        } catch (error) {
            console.error( error );
            return null;
        }
    }

    async loadFile(filename: string): Promise<string | null> {
        try {
            return await ipcRenderer.invoke('load-file', filename);
        } catch (error) {
            console.error( error );
            return null;
        }
    }

    async getFilenames(): Promise<string[]> {
        try {
            return await ipcRenderer.invoke('get-filenames');
        } catch (error) {
            console.error( error );
            return [];
        }
    }
}

export default Filesystem;
