import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Recipes } from './entities/Recipes';
import { RecipesService } from './services/recipes.service';
import { Ingredients } from './entities/Ingredients';
import { RecipeIngredients } from './entities/RecipeIngredients';

@Module({
  imports: [
    TypeOrmModule.forFeature([Recipes, RecipeIngredients, Ingredients]),
  ],
  controllers: [],
  providers: [RecipesService],
  exports: [RecipesService],
})
export class RecipesModule {}
