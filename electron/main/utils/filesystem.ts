import { ipcMain } from 'electron';
import fs from 'fs/promises';

class Filesystem {
    private configPath: string;

    constructor(private directoryPath: string) {
        this.configPath = `${this.directoryPath}/config.json`;
        if (ipcMain) {
            this.setupMainProcessIPC();
            this.ensureDefaultConfiguration();
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

        ipcMain.handle('save-config', async (_, config: string) => {
            try {
                await fs.writeFile( this.configPath, config );
                return;
            } catch (error) {
                console.error('Error writing config');
                return;
            }
        })

        ipcMain.handle('load-config', async () => {
            try {
                const filecontent = await fs.readFile( this.configPath, 'utf-8' );
                return filecontent;
            } catch (error) {
                console.error('Error reading config');
                return;
            }
        })
    }

    private async ensureDefaultConfiguration() {
        try {
            await fs.access( this.configPath );
        } catch (error) {
            const defaultConfig = {
                makros: [
                    {
                        name: 'Title',
                        tag: 'h1',
                        config: '',
                    },
                    {
                        name: 'Paragraph',
                        tag: 'p',
                        config: '',
                    },
                ],
            }
            const jsonConfig = JSON.stringify( defaultConfig );
            await fs.writeFile( this.configPath, jsonConfig );
        }
    }
}

export default Filesystem;
