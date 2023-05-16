import {
  Column,
  Entity,
  Index,
  ManyToMany,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Clients } from "./Clients";
import { RecipesDiets } from "./RecipesDiets";

@Index("diet_pkey", ["id"], { unique: true })
@Entity("diet", { schema: "public" })
export class Diet {
  @PrimaryGeneratedColumn({ type: "bigint", name: "id" })
  id: string;

  @Column("character varying", { name: "name", nullable: true })
  name: string | null;

  @Column("character varying", { name: "description", nullable: true })
  description: string | null;

  @ManyToMany(() => Clients, (clients) => clients.diets)
  clients: Clients[];

  @OneToMany(() => RecipesDiets, (recipesDiets) => recipesDiets.diet)
  recipesDiets: RecipesDiets[];
}
