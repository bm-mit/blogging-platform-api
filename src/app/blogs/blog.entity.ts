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

  @Column('simple-array', { nullable: true })
  tags: string[];

  @Column()
  created_at: Date;

  @Column()
  updated_at: Date;
}
