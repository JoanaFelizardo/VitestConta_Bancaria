export abstract class FormaGeometrica {

    public abstract calcularArea(): number;
}

export class Retangulo extends FormaGeometrica {

    private _base: number;
    private _altura: number;

    constructor (base: number, altura: number){
        super();
        this._base = base;
        this._altura = altura;

    }

    public calcularArea(): number {
       return this._base * this._altura;
    }
}

export class Circulo extends FormaGeometrica{
    private _raio: number;

    constructor (raio: number){
        super();
        this._raio = raio
    }

    public calcularArea(): number {
        return Math.PI * this._raio ** 2;
    }
}

export class CalculadoraArea {
    private _formas: FormaGeometrica[] = [];

    public adicionarFormas(forma: FormaGeometrica): void{
        this._formas.push(forma);
    }

    public calcularTotal(): number {
        var soma: number = 0;

        this._formas.forEach((forma) => {
            soma += forma.calcularArea();
        })

        return soma;

    }


}