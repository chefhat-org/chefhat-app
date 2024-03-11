import { Module } from '@nestjs/common';
import { RecipeService } from './recipe.service';
import { ChefhatPrismaClientModule } from '@chefhat-app/chefhat-prisma-client';

@Module({
  imports: [ChefhatPrismaClientModule],
  providers: [RecipeService],
  exports: [RecipeService],
})
export class DataAccessRecipesModule {}
