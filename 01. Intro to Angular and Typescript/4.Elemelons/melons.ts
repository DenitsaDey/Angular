abstract class Melon{
    public weight:number;
    public melonSort: string;

    constructor(weight:number, melonSort:string){
        this.weight = weight;
        this.melonSort = melonSort;
    }
}

export class Watermelon extends Melon{
    protected _elementIndex: number;

    constructor(weight:number, melonSort: string){
        super(weight, melonSort);
        this._elementIndex = this.weight * this.melonSort.length;
    }

    public toString(): string{
        return `Element: Water
        Sort: ${this.melonSort}
        Element Index: ${this._elementIndex}`
    }
}

export class Firemelon extends Melon{
    private _elementIndex: number;

    constructor(weight:number, melonSort: string){
        super(weight, melonSort);
        this._elementIndex = this.weight * this.melonSort.length;
    }

    public toString(): string{
        return `Element: Fire
        Sort: ${this.melonSort}
        Element Index: ${this._elementIndex}`
    }
}

export class Earthmelon extends Melon{
    private _elementIndex: number;

    constructor(weight:number, melonSort: string){
        super(weight, melonSort);
        this._elementIndex = this.weight * this.melonSort.length;
    }

    public toString(): string{
        return `Element: Earth
        Sort: ${this.melonSort}
        Element Index: ${this._elementIndex}`
    }
}

export class Airmelon extends Melon{
    private _elementIndex: number;

    constructor(weight:number, melonSort: string){
        super(weight, melonSort);
        this._elementIndex = this.weight * this.melonSort.length;
    }

    public toString(): string{
        return `Element: Air
        Sort: ${this.melonSort}
        Element Index: ${this._elementIndex}`
    }
}

export class Melonlemonmelon extends Watermelon{
    protected _elementIndex: number;

    constructor(weight:number, melonSort: string){
        super(weight, melonSort);
        this._elementIndex = this.weight * this.melonSort.length;
    }

    public elements: Array<string> = ['Water', 'Fire', 'Earth', 'Air'];
    
    public morph(){
        let currElement = this.elements.shift();
        this.elements.push(currElement);
        return currElement;
    }
    

    public toString(): string{
        return `Element: ${this.morph()}
        Sort: ${this.melonSort}
        Element Index: ${this._elementIndex}`
    }
}

let lemonmelon: Melonlemonmelon = new Melonlemonmelon(10, 'red');
console.log(lemonmelon.toString());
console.log(lemonmelon.toString());