import { Cliente } from "./cliente.js";

export class ContaBancaria {
    private _numero: string ;
    private _titular: Cliente;
    private _saldo: number;

    constructor (numero: string, titular: Cliente, saldo: number){
        this._numero = numero;
        this._titular = titular;
        this._titular.tornarTitularDe(this); 
        this._saldo = saldo;
        this.verificarSaldoNegativo(saldo, 'Saldo Inválido. Saldo não pode ser negativo')
        this._saldo = saldo;
    }  

    public numeroDaConta(): string {
        return this._numero;
    }

    public numeroDoTitular(): string {
        return this._titular.nome;
    }

    public get saldo(): number {
        return this._saldo;
    }

    public depositar(valor: number): void {

        this.verificarValorTransacao(valor)

        this._saldo += valor
    }

    public sacar (valor: number): void {
        this.verificarValorTransacao(valor)
        this.verificarSaldoNegativo(this._saldo - valor, 'Valor inválido para saque')


        this._saldo -= valor
    }

    public tranferir(contaDestino: ContaBancaria, valor: number): void{
        contaDestino.depositar(valor)

        this.sacar(valor)
    }

    private verificarValorTransacao (valor: number): void{
          if (valor <= 0){
            throw new Error('Valor inválido para a transação')
        }
    }

    private verificarSaldoNegativo (valor: number, mensagem: string): void{
        if(valor < 0){
            throw new Error (mensagem)
        }
    }
}