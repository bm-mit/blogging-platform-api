import { Module } from '@nestjs/common';
import { BlogsModule } from './blogs/blogs.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    BlogsModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'blogging-platform-api',
      password: 'password',
      database: 'blogging-platform-api',
      entities: [],
      synchronize: true,
      autoLoadEntities: true,
    }),
  ],
})
export class AppModule {}
