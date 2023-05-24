import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RolModule } from './rol/rol.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forRoot({
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: 'password',
    database: 'p-venta',
    entities: [__dirname + '/**/*.entity{.ts,.js}'],
    synchronize: true
  }),
    RolModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
