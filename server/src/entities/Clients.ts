import {
  Column,
  Entity,
  Index,
  JoinColumn,
  JoinTable,
  ManyToMany,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Diet } from "./Diet";
import { Users } from "./Users";
import { ClientsRestrictions } from "./ClientsRestrictions";

@Index("clients_pkey", ["id"], { unique: true })
@Index("fki_user_fk", ["userId"], {})
@Entity("clients", { schema: "public" })
export class Clients {
  @PrimaryGeneratedColumn({ type: "bigint", name: "id" })
  id: string;

  @Column("character varying", { name: "name", nullable: true })
  name: string | null;

  @Column("character varying", { name: "surname", nullable: true })
  surname: string | null;

  @Column("smallint", { name: "age", nullable: true })
  age: number | null;

  @Column("character varying", { name: "sex", nullable: true })
  sex: string | null;

  @Column("double precision", { name: "weight", nullable: true, precision: 53 })
  weight: number | null;

  @Column("double precision", { name: "height", nullable: true, precision: 53 })
  height: number | null;

  @Column("double precision", {
    name: "actvity_level",
    nullable: true,
    precision: 53,
  })
  actvityLevel: number | null;

  @Column("bigint", { name: "user_id", nullable: true })
  userId: string | null;

  @ManyToMany(() => Diet, (diet) => diet.clients)
  @JoinTable({
    name: "client_diets",
    joinColumns: [{ name: "client_id", referencedColumnName: "id" }],
    inverseJoinColumns: [{ name: "diet_id", referencedColumnName: "id" }],
    schema: "public",
  })
  diets: Diet[];

  @ManyToOne(() => Users, (users) => users.clients)
  @JoinColumn([{ name: "user_id", referencedColumnName: "id" }])
  user: Users;

  @OneToMany(
    () => ClientsRestrictions,
    (clientsRestrictions) => clientsRestrictions.client
  )
  clientsRestrictions: ClientsRestrictions[];
}
