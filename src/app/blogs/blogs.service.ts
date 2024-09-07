import { Injectable, SerializeOptions } from '@nestjs/common';
import { Blog } from './blog.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateBlogDto } from './blogs.dto';

@Injectable()
export class BlogsService {
  constructor(
    @InjectRepository(Blog)
    private blogsRepository: Repository<Blog>,
  ) {}

  findAll(): Promise<Blog[]> {
    return this.blogsRepository.find();
  }

  async create(blog: CreateBlogDto): Promise<Blog> {
    const newBlog = this.blogsRepository.create(blog);
    newBlog.created_at = new Date();
    return this.blogsRepository.save(newBlog);
  }
}
