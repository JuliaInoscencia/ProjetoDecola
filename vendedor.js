const fs = require('fs');

class Vendedor {
    constructor(id, nome, meta, vendas) {
        this.id = id;
        this.nome = nome;
        this.meta = meta;
        this.vendas = vendas || [];
    }

    static listarVendedores() {
        const dados = fs.readFileSync('dados.json', 'utf8');
        const vendedores = JSON.parse(dados).vendedores;
        return vendedores.map(vendedor => new Vendedor(vendedor.id, vendedor.nome, vendedor.meta, vendedor.vendas));
    }

    salvarVenda(venda) {
        this.vendas.push(venda);
        this.atualizarArquivo();
    }

    atualizarArquivo() {
        const dados = fs.readFileSync('dados.json', 'utf8');
        const json = JSON.parse(dados);
        const index = json.vendedores.findIndex(vendedor => vendedor.id === this.id);
        json.vendedores[index] = this;
        fs.writeFileSync('dados.json', JSON.stringify(json, null, 2));
    }
}

module.exports = Vendedor;
