import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [UserModule,
  TypeOrmModule.forRoot({
    type:'postgres',
    host:'localhost',
    database:'edutek',
    username:'sgonzalez',
    password:'Sher4632.',
    synchronize:true
  })
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
