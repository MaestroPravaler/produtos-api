/* eslint-disable prettier/prettier */
import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";

@Controller('produtos')
export class ProdutosController {
    @Get()
    obterTodos(): string {
        return 'Obter todos os produtos';
    }
    
    @Get(':id')
    obterUm(@Param() params): string {
        console.log(params.id);
        return `Retorna o produto com o ID ${params.id}`;
    }

    @Post()
    criar(@Body() produto): string {
        console.log(produto);
        return 'Produto Criado';
    }

    @Put()
    alterar(@Body() produto): string {
        console.log(produto);
        return 'Produto Atualizado';
    }

    @Delete(':id')
    apagar(@Param() params): string {
        return `Produto Apagado de ID ${params.id}`;
    }
}