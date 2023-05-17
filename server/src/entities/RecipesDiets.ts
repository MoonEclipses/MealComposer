import {
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Diet } from "./Diet";
import { Recipes } from "./Recipes";

@Index("recipes_diets_pkey", ["id"], { unique: true })
@Entity("recipes_diets", { schema: "public" })
export class RecipesDiets {
  @PrimaryGeneratedColumn({ type: "bigint", name: "id" })
  id: string;

  @ManyToOne(() => Diet, (diet) => diet.recipesDiets)
  @JoinColumn([{ name: "diet_id", referencedColumnName: "id" }])
  diet: Diet;

  @ManyToOne(() => Recipes, (recipes) => recipes.recipesDiets)
  @JoinColumn([{ name: "recipe_id", referencedColumnName: "id" }])
  recipe: Recipes;
}
