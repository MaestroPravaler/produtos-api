/* eslint-disable prettier/prettier */
import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { Produto } from "./produtos.model";
@Controller('produtos')
export class ProdutosController {

    produtos: Produto[] = [
        new Produto("LIV001", 'TDD1', 29.90),
        new Produto("LIV002", 'TDD2', 39.90),
        new Produto("LIV003", 'TDD3', 49.90),
        new Produto("LIV004", 'TDD4', 19.90),
        new Produto("LIV005", 'TDD5', 79.90),
        new Produto("LIV006", 'TDD6', 99.90),
    ];

    @Get()
    obterTodos(): Produto[] {
        return this.produtos;
    }

    @Get(':id')
    obterUm(@Param() params): Produto {
        console.log(params.id);
        return this.produtos[0];
    }

    @Post()
    criar(@Body() produto: Produto) {
        produto.id = 100
        this.produtos.push(produto);
    }

    @Put()
    alterar(@Body() produto: Produto): Produto {
        return produto;
    }

    @Delete(':id')
    apagar(@Param() params) {
        this.produtos.pop();
    }
}