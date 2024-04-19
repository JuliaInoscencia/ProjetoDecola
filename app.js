const Vendedor = require('./vendedor');
const Comissao = require('./comissao');

const vendedores = Vendedor.listarVendedores();
vendedores.forEach(vendedor => {
    const comissao = Comissao.calcularComissao(vendedor.vendas, vendedor.meta);
    console.log(`O vendedor ${vendedor.nome} tem uma comissão de R$ ${comissao.toFixed(2)}`);
});

const extrato = Comissao.gerarExtrato();
console.log("Extrato:");
console.log(extrato);
