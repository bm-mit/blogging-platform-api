import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateBlogDto, ResponseBlogDto } from './blogs.dto';
import { BlogsService } from './blogs.service';

@Controller('blogs')
export class BlogsController {
  constructor(private blogsService: BlogsService) {}

  @Get()
  findAll() {
    return this.blogsService.findAll();
  }

  @Post()
  async create(@Body() createBlogDto: CreateBlogDto): Promise<ResponseBlogDto> {
    return await this.blogsService.create(createBlogDto);
  }
}
