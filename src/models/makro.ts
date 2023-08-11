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

    public getFirstTag(): string {
        if(this.config !== '') {
            return `<${this.tag} ${this.config}>`;
        }
        else {
            return `<${this.tag}>`;
        }
    }

    public getEndTag(): string {
        return `</${this.tag}>`;
    }

    public toString(): string {
        return `${this.getFirstTag()}${this.getEndTag()}`;
    }
}

export default Makro;
