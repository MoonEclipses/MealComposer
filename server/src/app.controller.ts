import {Controller, Get} from '@nestjs/common';
import {AppService} from './app.service';
import {SpoonapiService} from "./services/spoonapi.service";
import {RecipesService} from "./services/recipes.service";
import {map} from "rxjs";
import {Recipes} from "./entities/Recipes";
import {TranslateService} from "./services/translate.service";
import {Ingredients} from "./entities/Ingredients";
import {RecipeIngredients} from "./entities/RecipeIngredients";

@Controller()
export class AppController {
    constructor(private readonly appService: AppService, private readonly spoonapiService: SpoonapiService, private recipesService: RecipesService, private translateService: TranslateService) {
    }

    sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    @Get()
    getHello(): string {
        return this.appService.getHello();
    }

    @Get("/api")
    async getRecipes() {
        const value = await this.spoonapiService.getRecipes()
        value.pipe(
            map(resultSet => resultSet.results)
        ).subscribe(async recipes => {
            for (let i = 0; i < recipes.length; i++) {
                const r = new Recipes()
                r.name = recipes[i].title
                r.image = recipes[i].image
                r.id = recipes[i].id;
                console.log(r)
                await this.spoonapiService.getRecipeNutrition(Number(r.id)).subscribe(
                    async (nutritions) => {
                        r.calory = parseInt(nutritions.calories)
                        r.carbohydrates = parseInt(nutritions.carbs)
                        r.fats = parseInt(nutritions.fat)
                        await this.spoonapiService.getRecipeInfo(recipes[i].id).subscribe(
                            async (recipe) => {
                                r.isBreakfast = recipe.dishTypes.includes('breakfast')
                                r.price = recipe.pricePerServing * recipe.servings
                                r.servings = recipe.servings
                                const recipeIngredients = recipe.extendedIngredients.map((i) => {
                                        const ing = new Ingredients()
                                        ing.id = i.id
                                        ing.name = i.name
                                        ing.unit = i.unit
                                        ing.description = i.alias
                                        this.recipesService.createI(ing)
                                        const recIng = new RecipeIngredients()
                                        recIng.recipeId = Number(r.id)
                                        recIng.ingredientId = Number(ing.id)
                                        recIng.quantity = i.amount
                                        recIng.ingredient = ing
                                        recIng.recipe = r
                                        return recIng
                                    }
                                )
                                await this.sleep(8000)
                                await this.recipesService.createR(r)
                                await this.sleep(8000)
                                recipeIngredients.forEach((ri) => {
                                    this.recipesService.createRIng(ri)
                                })
                                console.log(r)
                                console.log(recipeIngredients)
                            })
                    })
                await this.sleep(9000)
            }
        })
        return value
    }
}
