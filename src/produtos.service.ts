/* eslint-disable prettier/prettier */

import { Injectable } from "@nestjs/common";
import { Produto } from "./produtos.model";

@Injectable()
export class ProdutosService {
    produtos: Produto[] = [
        // new Produto("LIV001", 'TDD1', 29.90),
        // new Produto("LIV002", 'TDD2', 39.90),
        // new Produto("LIV003", 'TDD3', 49.90),
        // new Produto("LIV004", 'TDD4', 19.90),
        // new Produto("LIV005", 'TDD5', 79.90),
        // new Produto("LIV006", 'TDD6', 99.90),
    ];

    obterTodos(): Produto[] {
        return this.produtos;
    }

    obterUm(id: number): Produto {
        return this.produtos[0];
    }

    criar(produto: Produto) {
        this.produtos.push(produto);
    }

    alterar(produto: Produto): Produto {
        return produto;
    }

    apagar(id: number) {
        this.produtos.pop();
    }
}