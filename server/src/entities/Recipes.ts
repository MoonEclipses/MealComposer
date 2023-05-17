import {Column, Entity, Index, OneToMany, PrimaryColumn,} from "typeorm";
import {RecipeIngredients} from "./RecipeIngredients";
import {RecipeRestrictions} from "./RecipeRestrictions";
import {RecipesDiets} from "./RecipesDiets";

@Index("recipes_pkey", ["id"], { unique: true })
@Entity("recipes", { schema: "public" })
export class Recipes {
  @PrimaryColumn({ type: "bigint", name: "id" })
  id: string;

  @Column("character varying", { name: "name", nullable: true })
  name: string | null;

  @Column("double precision", { name: "calory", nullable: true, precision: 53 })
  calory: number | null;

  @Column("double precision", { name: "price", nullable: true, precision: 53 })
  price: number | null;

  @Column("double precision", {
    name: "proteins",
    nullable: true,
    precision: 53,
  })
  proteins: number | null;

  @Column("double precision", { name: "fats", nullable: true, precision: 53 })
  fats: number | null;

  @Column("double precision", {
    name: "carbohydrates",
    nullable: true,
    precision: 53,
  })
  carbohydrates: number | null;

  @Column("double precision", {
    name: "servings",
    nullable: true,
    precision: 53,
  })
  servings: number | null;

  @Column("integer", { name: "cook_time", nullable: true })
  cookTime: number | null;

  @Column("boolean", { name: "is_breakfast", nullable: true })
  isBreakfast: boolean | null;

  @Column("character varying", { name: "image", nullable: true })
  image: string | null;

  @OneToMany(
    () => RecipeIngredients,
    (recipeIngredients) => recipeIngredients.recipe
  )
  recipeIngredients: RecipeIngredients[];

  @OneToMany(
    () => RecipeRestrictions,
    (recipeRestrictions) => recipeRestrictions.recipe
  )
  recipeRestrictions: RecipeRestrictions[];

  @OneToMany(() => RecipesDiets, (recipesDiets) => recipesDiets.recipe)
  recipesDiets: RecipesDiets[];
}
