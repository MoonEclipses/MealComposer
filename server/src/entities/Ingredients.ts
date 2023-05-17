import {Column, Entity, Index, OneToMany, PrimaryColumn,} from "typeorm";
import {RecipeIngredients} from "./RecipeIngredients";

@Index("ingredients_pkey", ["id"], { unique: true })
@Entity("ingredients", { schema: "public" })
export class Ingredients {
  @PrimaryColumn({ type: "bigint", name: "id" })
  id: string;

  @Column("character varying", { name: "name", nullable: true })
  name: string | null;

  @Column("character varying", { name: "description", nullable: true })
  description: string | null;

  @Column("character varying", { name: "unit", nullable: true })
  unit: string | null;

  @Column("double precision", { name: "price", nullable: true, precision: 53 })
  price: number | null;

  @OneToMany(
    () => RecipeIngredients,
    (recipeIngredients) => recipeIngredients.ingredient
  )
  recipeIngredients: RecipeIngredients[];
}
