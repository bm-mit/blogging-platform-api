import { Expose } from 'class-transformer';

export class ResponseBlogDto {
  @Expose()
  id: number;

  @Expose()
  title: string;

  @Expose()
  content: string;

  @Expose()
  category: string;

  @Expose()
  created_at: Date;

  @Expose()
  updated_at?: Date;
}

export class CreateBlogDto {
  @Expose()
  title: string;

  @Expose()
  content: string;

  @Expose()
  category: string;
}
