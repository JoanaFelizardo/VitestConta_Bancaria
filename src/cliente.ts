import {ContaBancaria} from "./ContaBancaria.js";

export class  Cliente {
    private _nome: string;
    private _contaBancaria! : ContaBancaria;


    constructor(nome: string){
        if (!nome || nome.trim() === ""){
            throw new Error("O nome é obrigatório")
        }

        this._nome = nome;
    }
    
    public get nome(): string {
        return this._nome;
    }

    public tornarTitularDe(contaBancaria : ContaBancaria): void {
        this._contaBancaria = contaBancaria;
    }
}