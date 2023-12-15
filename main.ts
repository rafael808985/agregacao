import { Produto } from "./src/model/Produto";
import { CarrinhoDeCompra } from "./src/model/CarrinhoDeCompra";

const produto1 = new Produto(`peixe`, 10.99)
const produto2 = new Produto(`maionese`, 3.99)
const produto3 = new Produto(`Coca`, 11.99)
const produto4 = new Produto(`nescau`, 7.49)
const produto5 = new Produto(`trident`, 4.15)

const carinhoDeCompras = new CarrinhoDeCompra();
carinhoDeCompras.inserirProdutos(produto1, produto2, produto3, produto4, produto5);
console.log(`Quantidade de itens no carrinho: ${carinhoDeCompras.quantidadeProdutos()}`);
console.log(`Valor Total: ${carinhoDeCompras.valorTotal()}`);