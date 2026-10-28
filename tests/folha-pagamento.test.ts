import {describe, it, expect} from 'vitest'
import { FolhaPagamento, Horista, Mensalista } from '../src/FolhaPagamento';

describe ('Folha de Pagamento - Ex 2', () => {

it ('Deve calcular o pagamento dos funcionarios', () =>{
    const mensalista = new Mensalista('Paola', 5000);
    const horista = new Horista('Jão', 100, 10);
    const folha = new FolhaPagamento()

    folha.adicionarFuncionarios(mensalista);
    folha.adicionarFuncionarios(horista);

    expect(folha.calcularTotal()).toBe(6000)
})

})