import {
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Clients } from "./Clients";
import { Restrictions } from "./Restrictions";

@Index("client_restrictions_pkey", ["id"], { unique: true })
@Entity("clients_restrictions", { schema: "public" })
export class ClientsRestrictions {
  @PrimaryGeneratedColumn({ type: "bigint", name: "id" })
  id: string;

  @ManyToOne(() => Clients, (clients) => clients.clientsRestrictions, {
    onDelete: "CASCADE",
  })
  @JoinColumn([{ name: "client_id", referencedColumnName: "id" }])
  client: Clients;

  @ManyToOne(
    () => Restrictions,
    (restrictions) => restrictions.clientsRestrictions,
    { onDelete: "CASCADE" }
  )
  @JoinColumn([{ name: "restriction_id", referencedColumnName: "id" }])
  restriction: Restrictions;
}
