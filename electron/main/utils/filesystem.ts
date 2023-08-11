import { ipcMain, ipcRenderer } from "electron";
import fs from 'fs/promises';

class Filesystem {
    constructor(private directoryPath: string) {
        if (ipcMain) {
            this.setupMainProcessIPC();
        }
    }

    private setupMainProcessIPC() {
        ipcMain.handle('save-file', async (_, data: string, filename: string) => {
            const filepath = `${this.directoryPath}/${filename}`;
            await fs.writeFile(filepath, data);
            return filepath;
        });

        ipcMain.handle('load-file', async (_, filename: string) => {
            const filepath = `${this.directoryPath}/${filename}`;
            const filecontent = await fs.readFile(filepath, 'utf-8');
            return filecontent;
        });

        ipcMain.handle('get-filenames', async () => {
            try {
                const files = await fs.readdir( this.directoryPath );
                return files;
            } catch (error) {
                console.error('Error reading directory', error);
                return [];
            }
        })
    }

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
