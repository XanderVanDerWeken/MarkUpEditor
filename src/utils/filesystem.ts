import { ipcRenderer } from "electron";
import Config from "../models/config";

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

    async saveConfig(config: Config): Promise<string | null> {
        try {
            const configString = JSON.stringify( config );
            return await ipcRenderer.invoke('save-config', configString);
        } catch (error) {
            console.error( error );
            return null;
        }
    }

    async loadConfig(): Promise<Config | null> {
        try {
            const serializedConfig = await ipcRenderer.invoke('load-config');
            if( serializedConfig ) {
                const parsedConfig = JSON.parse( serializedConfig );
                return new Config();
            } else {
                return new Config();
            }
        } catch (error) {
            console.error( error );
            return null;
        }
    }
}

export default Filesystem;
