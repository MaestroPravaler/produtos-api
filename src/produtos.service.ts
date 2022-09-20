/* eslint-disable prettier/prettier */

import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/sequelize";
import { Produto } from './produtos.model';

@Injectable()
export class ProdutosService {
    constructor(
        @InjectModel(Produto)
        private produtosModel: typeof Produto
    ) {}

    async obterTodos(): Promise<Produto[]> {
        return this.produtosModel.findAll();
    }

    async obterUm(id: number): Promise<Produto> {
        return this.produtosModel.findByPk(id);
    }

    async criar(produto: Produto) {
        this.produtosModel.create(produto);
    }

    async alterar(produto: Produto): Promise<[number, Produto[]]> {
        return this.produtosModel.update(produto, {
            returning: true,
            where: {
                id: produto.id
            }
        });
    }

    async apagar(id: number) {
        const produto: Produto = await this.obterUm(id);
        produto.destroy();
    }
}