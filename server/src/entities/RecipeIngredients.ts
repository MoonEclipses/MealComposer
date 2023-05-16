import { Column, Entity, Index, JoinColumn, ManyToOne } from "typeorm";
import { Ingredients } from "./Ingredients";
import { Recipes } from "./Recipes";

@Index("recipe_ingredients_pkey", ["ingredientId", "recipeId"], {
  unique: true,
})
@Entity("recipe_ingredients", { schema: "public" })
export class RecipeIngredients {
  @Column("integer", { primary: true, name: "recipe_id" })
  recipeId: number;

  @Column("integer", { primary: true, name: "ingredient_id" })
  ingredientId: number;

  @Column("double precision", {
    name: "quantity",
    nullable: true,
    precision: 53,
  })
  quantity: number | null;

  @ManyToOne(() => Ingredients, (ingredients) => ingredients.recipeIngredients)
  @JoinColumn([{ name: "ingredient_id", referencedColumnName: "id" }])
  ingredient: Ingredients;

  @ManyToOne(() => Recipes, (recipes) => recipes.recipeIngredients)
  @JoinColumn([{ name: "recipe_id", referencedColumnName: "id" }])
  recipe: Recipes;
}
