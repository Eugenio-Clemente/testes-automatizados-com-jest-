const acrecimoValorEntrega = 0.2;

const calcularValorPedido = pedido => {
  const valorProdutos = pedido.itens
    .filter(item => !item.entrega)
    .reduce((totalPedidos, pedidoAtual) => totalPedidos + pedidoAtual.valor, 0);

  const entrega = pedido.itens.filter(item => item.entrega);

  if (pedido.estado === 'RS' || pedido.estado === 'SC') {
    const acrecimoEntrega = entrega[0].valor * acrecimoValorEntrega;
    entrega[0].valor += acrecimoEntrega
  }

  return (valorProdutos > 500) ? valorProdutos : valorProdutos + entrega[0].valor

}

module.exports = calcularValorPedido;