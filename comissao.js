const fs = require('fs');

class Comissao {
    static calcularComissao(vendas, meta) {
        const totalVendas = vendas.reduce((total, venda) => total + venda, 0);
        const percentualComissao = totalVendas >= meta ? 0.1 : 0;
        return totalVendas * percentualComissao;
    }

    static gerarExtrato() {
        const vendedores = JSON.parse(fs.readFileSync('dados.json', 'utf8')).vendedores;
        const extrato = vendedores.map(vendedor => {
            const comissao = this.calcularComissao(vendedor.vendas, vendedor.meta);
            return { id: vendedor.id, nome: vendedor.nome, comissao: comissao };
        });
        return extrato;
    }
}

module.exports = Comissao;
