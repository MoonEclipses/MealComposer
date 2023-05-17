import {
  Column,
  Entity,
  Index,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Clients } from "./Clients";

@Index("users_pkey", ["id"], { unique: true })
@Entity("users", { schema: "public" })
export class Users {
  @PrimaryGeneratedColumn({ type: "bigint", name: "id" })
  id: string;

  @Column("character varying", { name: "login", nullable: true })
  login: string | null;

  @Column("character varying", { name: "password", nullable: true })
  password: string | null;

  @Column("timestamp without time zone", {
    name: "registration_date",
    nullable: true,
  })
  registrationDate: Date | null;

  @OneToMany(() => Clients, (clients) => clients.user)
  clients: Clients[];
}
