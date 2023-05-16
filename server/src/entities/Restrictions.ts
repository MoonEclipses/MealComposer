import {
  Column,
  Entity,
  Index,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { ClientsRestrictions } from "./ClientsRestrictions";
import { RecipeRestrictions } from "./RecipeRestrictions";

@Index("restrictions_pkey", ["id"], { unique: true })
@Entity("restrictions", { schema: "public" })
export class Restrictions {
  @PrimaryGeneratedColumn({ type: "bigint", name: "id" })
  id: string;

  @Column("character varying", { name: "name" })
  name: string;

  @Column("character varying", { name: "description", nullable: true })
  description: string | null;

  @OneToMany(
    () => ClientsRestrictions,
    (clientsRestrictions) => clientsRestrictions.restriction
  )
  clientsRestrictions: ClientsRestrictions[];

  @OneToMany(
    () => RecipeRestrictions,
    (recipeRestrictions) => recipeRestrictions.restriction
  )
  recipeRestrictions: RecipeRestrictions[];
}
