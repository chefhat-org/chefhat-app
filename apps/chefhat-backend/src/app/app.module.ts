import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { DataAccessRecipesModule } from '@chefhat-app/data-access-recipes';

@Module({
  imports: [DataAccessRecipesModule],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
