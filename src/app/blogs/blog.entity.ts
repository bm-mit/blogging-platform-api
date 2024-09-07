import { Entity, PrimaryGeneratedColumn } from 'typeorm';
import { Column } from 'typeorm';

@Entity()
export class Blog {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  content: string;

  @Column()
  category: string;

  @Column()
  created_at: Date;

  @Column({
    nullable: true,
  })
  updated_at?: Date;
}
