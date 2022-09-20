import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProdutosController } from './produtos.controler';
import { ProdutosService } from './produtos.service';
import { Produto } from './produtos.model';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot(),
    SequelizeModule.forRoot({
      dialect: 'mysql',
      host: 'localhost',
      port: 3306,
      username: process.env.USUARIO_DO_BANCO_DE_DADOS,
      password: '',
      database: 'produtos',
      autoLoadModels: true,
      synchronize: true,
    }),
    SequelizeModule.forFeature([Produto]),
  ],
  controllers: [AppController, ProdutosController],
  providers: [AppService, ProdutosService],
})
export class AppModule {}
