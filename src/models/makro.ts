class Makro {
    private tag: string;
    private config: string;

    constructor(tag: string, config: string) {
        this.tag = tag;
        this.config = config;
    }

    public getTag(): string {
        return this.tag;
    }

    public getConfig(): string {
        return this.config;
    }

    public getOffset(): number {
        return this.tag.length + 2 + this.config.length;
    }

    public toString(): string {
        if(this.config !== '') {
            return `<${this.tag} ${this.config}></${this.tag}>`;
        }
        else {
            return `<${this.tag}></${this.tag}>`;
        }
    }
}

export default Makro;
