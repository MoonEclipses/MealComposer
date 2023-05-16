import {Injectable} from "@nestjs/common";
import {Recipes} from "../entities/Recipes";
import {InjectRepository} from "@nestjs/typeorm";
import {Repository} from "typeorm";
import {RecipeIngredients} from "../entities/RecipeIngredients";
import {Ingredients} from "../entities/Ingredients";

@Injectable()
export class RecipesService {
    constructor(
        @InjectRepository(Recipes)
        private recipesRepository: Repository<Recipes>,
        @InjectRepository(Ingredients)
        private ingredientsRepository: Repository<Ingredients>,
        @InjectRepository(RecipeIngredients)
        private recipeIngridientsRepository: Repository<RecipeIngredients>,
    ) {}

    createR(recipe: Recipes){
        this.recipesRepository.save(recipe)
    }
    createRIng(recipeIngridients){
        this.recipeIngridientsRepository.save(recipeIngridients)
    }

    createI(ingredient:Ingredients){
        this.ingredientsRepository.findOneById(ingredient.id).then(
            (i) => {
                if(i !== null){
                    this.ingredientsRepository.update(i.id,i)
                }
                else {
                    this.ingredientsRepository.save(ingredient)
                }
            }
        )
    }
}