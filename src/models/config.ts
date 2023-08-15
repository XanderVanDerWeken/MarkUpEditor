import Makro from "./makro";

class Config {
    private makros: Makro[]

    constructor(makros: Makro[]) {
        this.makros = makros;
    }

    public getMakros(): Makro[] {
        return this.makros;
    }
}

export default Config;
