import { Injectable, NotFoundException } from '@nestjs/common';
import { Blog } from './blog.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Like, Repository } from 'typeorm';
import { CreateBlogDto, UpdateBlogDto } from './blogs.dto';

@Injectable()
export class BlogsService {
  constructor(
    @InjectRepository(Blog)
    private blogsRepository: Repository<Blog>,
  ) {}

  findAll(term: string): Promise<Blog[]> {
    return this.blogsRepository.find({
      where: [
        { title: Like(`%${term}%`) },
        { content: Like(`%${term}%`) },
        { category: Like(`%${term}%`) },
        { tags: Like(`%${term}%`) },
      ],
    });
  }

  search(term: string): Promise<Blog[]> {
    return this.blogsRepository.find({});
  }

  async create(blog: CreateBlogDto): Promise<Blog> {
    const newBlog = this.blogsRepository.create(blog);
    newBlog.created_at = newBlog.updated_at = new Date();

    return this.blogsRepository.save(newBlog);
  }

  async update(
    id: typeof Blog.prototype.id,
    blog: UpdateBlogDto,
  ): Promise<Blog> {
    const existingBlog = await this.blogsRepository.findOneBy({ id });
    if (!existingBlog)
      throw new NotFoundException(`Blog with id ${id} not found`);

    const updatedBlog = this.blogsRepository.merge(existingBlog, blog);

    return this.blogsRepository.save(updatedBlog);
  }

  async delete(id: typeof Blog.prototype.id): Promise<void> {
    const existingBlog = await this.blogsRepository.findOneBy({ id });
    if (!existingBlog)
      throw new NotFoundException(`Blog with id ${id} not found`);

    await this.blogsRepository.remove(existingBlog);
  }
}
