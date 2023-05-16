import {
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Recipes } from "./Recipes";
import { Restrictions } from "./Restrictions";

@Index("recipe_restrictions_pkey", ["id"], { unique: true })
@Entity("recipe_restrictions", { schema: "public" })
export class RecipeRestrictions {
  @PrimaryGeneratedColumn({ type: "bigint", name: "id" })
  id: string;

  @ManyToOne(() => Recipes, (recipes) => recipes.recipeRestrictions, {
    onDelete: "CASCADE",
  })
  @JoinColumn([{ name: "recipe_id", referencedColumnName: "id" }])
  recipe: Recipes;

  @ManyToOne(
    () => Restrictions,
    (restrictions) => restrictions.recipeRestrictions,
    { onDelete: "CASCADE" }
  )
  @JoinColumn([{ name: "restriction_id", referencedColumnName: "id" }])
  restriction: Restrictions;
}
