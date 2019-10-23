import {Entity, PrimaryGeneratedColumn, Column, BeforeInsert, OneToOne} from "typeorm";

@Entity()
export class User {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    userName: string;

    @Column()
    name: string;

    @Column()
    createdAt: Date;

    @BeforeInsert()
    setCreatedAt() {
      this.createdAt = new Date();
    }
}
