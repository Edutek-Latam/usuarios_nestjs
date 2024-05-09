import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from './auth/auth.module';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';
import { EncuestaModule } from './encuesta/encuesta.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    UserModule,
  TypeOrmModule.forRoot({
    type:'postgres',
    host:'localhost',
    database:'edutek',
    username:'sgonzalez',
    password:'Sher4632.',
    synchronize:true,
    autoLoadEntities: true
  }),
  MongooseModule.forRoot(process.env.URI_MONGODB),
  AuthModule,
  EncuestaModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
