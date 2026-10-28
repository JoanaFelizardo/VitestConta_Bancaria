import {describe, it, expect} from 'vitest';
import {ContaBancaria} from '../src/ContaBancaria';
import {Cliente} from "../src/cliente"

describe ('ContaBancaria', () => {
    
    it('Deve criar uma conta bancaria com o saldo zero', () => {
        const cliente = new Cliente ("João");
        const conta = new ContaBancaria("123456", cliente, 0);

        expect(conta.numeroDaConta()).toBe ("123456");
        expect(conta.numeroDoTitular()).toBe("João");
        expect(conta.saldo).toBe(0);


    })

    it('Deve criar uma conta bancaria com saldo inicial positivo', () => {
        const cliente = new Cliente ("João");
        const conta = new ContaBancaria("123456", cliente, 100);

        expect(conta.numeroDaConta()).toBe("123456");
        expect(conta.numeroDoTitular()).toBe("João");
        expect(conta.saldo).toBe(100);
    });

    it('Não deve criar conta com saldo negativo', () => {
        const cliente = new Cliente ("João");
        
        expect ( () => new ContaBancaria ("123456", cliente, -100)).toThrow ('Saldo Inválido. Saldo não pode ser negativo')
    })

    it ('Depois de depositar uma quantia diferente de zero, o saldo deve ter seu valor aumentado', () => {
        const cliente = new Cliente ("João");
        const conta = new ContaBancaria("123456", cliente, 0);

        conta.depositar(50)

        expect(conta.saldo).toBe(50)
    })

    it ('Não deve permitir depositar valor igual a zero', () => {
        const cliente = new Cliente ("João");
        const conta = new ContaBancaria("123456", cliente, 0);

        expect (() => conta.depositar(0)).toThrow('Valor inválido para a transação')


    })

    it ('Não deve permitir depositar valor negativo', () =>{
        const cliente = new Cliente ("João");
        const conta = new ContaBancaria("123456", cliente, 0);

        expect (() => conta.depositar(-1)).toThrow('Valor inválido para a transação')

    })

    it ('Depois de sacar um valor, o saldo deve diminuir', () => {
        const cliente = new Cliente ("João");
        const conta = new ContaBancaria("123456", cliente, 200);

        conta.sacar(50)

        expect(conta.saldo).toBe(150)
    })

     it ('Não deve permitir sacar valor igual a zero', () =>{
        const cliente = new Cliente ("João");
        const conta = new ContaBancaria("123456", cliente, 0);

        expect (() => conta.sacar(0)).toThrow('Valor inválido para a transação')

    })

    it ('Não deve permitir sacar valor negativo', () =>{
        const cliente = new Cliente ("João");
        const conta = new ContaBancaria("123456", cliente, 0);

        expect (() => conta.sacar(-1)).toThrow('Valor inválido para a transação')

    })

    it ('Não deve permitir sacar valor maior que o sado', () =>{
        const cliente = new Cliente ("João");
        const conta = new ContaBancaria("123456", cliente, 0);

        expect (() => conta.sacar(120)).toThrow('Valor inválido para saque')

    })

    it ('Deve transferir um valor de uma conta para outra conta', () => {
        const cliente1 = new Cliente ("João");
        const cliente2 = new Cliente ("Poala")
        const conta1 = new ContaBancaria("123456", cliente1, 1000)
        const conta2 = new ContaBancaria("654321", cliente2, 5000)

        conta2.tranferir(conta1, 1000)

        expect(conta1.saldo).toBe(2000)
        expect(conta2.saldo).toBe(4000)
        
    })
    
})
