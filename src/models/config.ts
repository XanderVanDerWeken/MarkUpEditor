import Makro from "./makro";

class Config {
    private makros: Makro[]

    constructor(makros: Makro[]) {
        this.makros = makros;
    }

    public getMakros(): Makro[] {
        return this.makros;
    }

    public addMakro(makro: Makro) {
        this.makros.push(makro);
    }

    public removeMakro(makroName: string) {
        this.makros = this.makros.filter(makro => makro.getName() != makroName);
    }
}

export default Config;
