import {describe, it, expect} from 'vitest';
import {CalculadoraArea, Circulo, Retangulo} from '../src/FormaGeometrica';

describe ('Forma Geometrica', () => {

    it ('Deve retornar a área de um Retangulo', () => {

        const retangulo = new Retangulo(6, 5);

        expect(retangulo.calcularArea()).toBe(30);
    })

    it ('Deve retorna a área de um Circulo', () => {
        const circulo = new Circulo(1);

        expect(circulo.calcularArea()).toBe(Math.PI)
    })

    it('Deve retornar a soma das áreas', () => {
        const calculadora = new CalculadoraArea();
        const retangulo = new Retangulo(6, 5);
        const circulo = new Circulo(1);

        calculadora.adicionarFormas(retangulo);
        calculadora.adicionarFormas(circulo);

        expect(calculadora.calcularTotal()).toBe(30 + Math.PI);


    })

})