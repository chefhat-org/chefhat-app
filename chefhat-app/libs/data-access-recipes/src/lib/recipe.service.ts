import { Injectable } from '@nestjs/common';
import {
    PrismaService,
  } from '@chefhat-app/chefhat-prisma-client';
import { Prisma, Recipe } from '@prisma/client';

@Injectable()
export class RecipeService {
  constructor(private prisma: PrismaService) {}

  async recipe(
    recipeWhereUniqueInput: Prisma.RecipeWhereUniqueInput
  ): Promise<Recipe | null> {
    return this.prisma.recipe.findUnique({
      where: recipeWhereUniqueInput,
    });
  }

  async recipes(params: {
    skip?: number;
    take?: number;
    cursor?: Prisma.RecipeWhereUniqueInput;
    where?: Prisma.RecipeWhereInput;
    orderBy?: Prisma.RecipeOrderByWithRelationInput;
  }): Promise<Recipe[]> {
    const { skip, take, cursor, where, orderBy } = params;
    return this.prisma.recipe.findMany({
      skip,
      take,
      cursor,
      where,
      orderBy,
    });
  }

  async createRecipe(data: Prisma.RecipeCreateInput): Promise<Recipe> {
    return this.prisma.recipe.create({
      data,
    });
  }

  async updateRecipe(params: {
    where: Prisma.RecipeWhereUniqueInput;
    data: Prisma.RecipeUpdateInput;
  }): Promise<Recipe> {
    const { data, where } = params;
    return this.prisma.recipe.update({
      data,
      where,
    });
  }

  async deleteRecipe(where: Prisma.RecipeWhereUniqueInput): Promise<Recipe> {
    return this.prisma.recipe.delete({
      where,
    });
  }
}