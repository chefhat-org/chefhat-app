import { Controller, Get, Param } from '@nestjs/common';

import { RecipeService } from '@chefhat-app/data-access-recipes';

@Controller()
export class AppController {
  constructor(private readonly recipeService: RecipeService) {}

  @Get('recipes/:id')
  async getRecipeById(@Param('id') id: string) {
    return this.recipeService.recipe({ id: Number(id) });
  }

  //TODO: add other endpoints here
}
