const calcularValorPedido = require('./calcular-valor-pedido')

it('Não cobrar valor do frete quando o valor for superior a R$ 500', () => {
    //AAA - 3 passos de criação de um teste 

    //ARRANGE- ARRANJO - O OBJETO TESTE  
    const meuPedido = {
        itens: [
            { nome: "Arco", valor: 2000 },
            { nome: "Entrega", valor: 100, entrega: true }
        ]
    }

    //ACT - AJA - O QUE VAI SER TESTADO 
    const resultado = calcularValorPedido(meuPedido);

    //ASSERT - AFIRMAR - QUAL O RESULTADO ESPERADO 
    expect(resultado).toBe(2000)
})

it('Deve cobrar o valor do frete quando o valor dos produtos for menor que 500', () => {
    //ARRANGE
    const meuPedido = {
        itens: [
            { nome: "Sanduíche", valor: 50 },
            { nome: "Entrega", valor: 100, entrega: true }
        ]
    }

    //ACT 
    const resultado = calcularValorPedido(meuPedido);

    //ASSERT 
    expect(resultado).toBe(150)
})

it('Deve cobrar valor do frete ser o valor do produto for EXATAMENTE R$ 500', () => {
    const meuPedido = {
        itens: [
            { nome: "Sanduíche bem caro", valor: 500 },
            { nome: "Entrega", valor: 100, entrega: true }
        ]
    }

    const resultado = calcularValorPedido(meuPedido);

    expect(resultado).toBe(600)
})

/* CASO OS ESTADOS DE ENTREGA SEJAM RS OU SC, DEVE SER ACRESCIDO UM VALOR DE 30% NA ENTREGA */

it('Deve adicionar um acrecimo de 20% no valor da entrega do pedido caso o estado seja RS', () =>{
    const pedidoComEstadoRS = {
        estado: 'RS',
        itens: [
            { nome: "Sanduíche bem caro", valor: 500 },
            { nome: "Entrega", valor: 100, entrega: true }
        ]
    }
    
    const resultado = calcularValorPedido(pedidoComEstadoRS)

    expect(resultado).toBe(620)
})

it('Deve adicionar um acrecimo de 20% no valor da entrega do pedido caso o estado seja SC', () =>{
    const pedidoComEstadoRS = {
        estado: 'SC',
        itens: [
            { nome: "Sanduíche bem caro", valor: 500 },
            { nome: "Entrega", valor: 100, entrega: true }
        ]
    }
    
    const resultado = calcularValorPedido(pedidoComEstadoRS)

    expect(resultado).toBe(620)
})


it(' Não deve adicionar um acrecimo de 20% no valor da entrega do pedido caso o estado seja SP', () =>{
    const pedidoComEstadoSP = {
        estado: 'SP',
        itens: [
            { nome: "Sanduíche bem caro", valor: 500 },
            { nome: "Entrega", valor: 100, entrega: true }
        ]
    }
    
    const resultado = calcularValorPedido(pedidoComEstadoSP)

    expect(resultado).toBe(600)
})