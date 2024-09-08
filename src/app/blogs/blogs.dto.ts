import { Expose } from 'class-transformer';
import { IsOptional, IsString } from 'class-validator';

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
  tags: string[];

  @Expose()
  created_at: Date;

  @Expose()
  updated_at: Date;
}

export class CreateBlogDto {
  @IsString()
  title: string;

  @IsString()
  content: string;

  @IsString()
  category: string;

  @IsString({ each: true })
  tags: string[];
}

export class UpdateBlogDto {
  @IsString()
  @IsOptional()
  title?: string;

  @IsString()
  @IsOptional()
  content?: string;

  @IsString()
  @IsOptional()
  category?: string;

  @IsString({ each: true })
  @IsOptional()
  tags?: string[];
}
