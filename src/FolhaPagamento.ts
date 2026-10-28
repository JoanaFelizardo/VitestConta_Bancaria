export abstract class Funcionario{
    private _nome: string;

    constructor(nome: string){
        this._nome = nome;
    }

    public consultarNome(): string {
        return this._nome;
    }

    public abstract calcularPagamento(): number;
}

export class Mensalista extends Funcionario {
    private _salarioMensal: number;

    constructor(nome: string, salarioMensal: number){
        super(nome);

        this._salarioMensal = salarioMensal;
    }

    public calcularPagamento(): number {
        return this._salarioMensal;
    }

    public metodoA(): void {}
}

export class Horista extends Funcionario{
    private _valorHora: number;
    private _horas: number;

    constructor (nome: string, valorHora: number, horas: number){
        super(nome);

        this._valorHora = valorHora;
        this._horas = horas;

    }

    public calcularPagamento(): number {
        return this._valorHora * this._horas;
    }

    public metodoA(): void {}
}

export class FolhaPagamento {
    private _funcionarios: Funcionario[] = [];

    public adicionarFuncionarios(funcionarios: Funcionario): void{
            this._funcionarios.push(funcionarios);
        }

    public calcularTotal(): number {
        var total: number = 0;

        this._funcionarios.forEach((funcionarios) => {
            total += funcionarios.calcularPagamento();
        })
        
        return total;
}
}