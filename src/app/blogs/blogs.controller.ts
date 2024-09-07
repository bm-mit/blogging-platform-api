import {
  Body,
  Controller,
  Get,
  HttpCode,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { CreateBlogDto, ResponseBlogDto, UpdateBlogDto } from './blogs.dto';
import { BlogsService } from './blogs.service';
import { Blog } from './blog.entity';

@Controller('blogs')
export class BlogsController {
  constructor(private blogsService: BlogsService) {}

  @Get()
  findAll() {
    return this.blogsService.findAll();
  }

  @Post()
  @HttpCode(201)
  async create(@Body() createBlogDto: CreateBlogDto): Promise<ResponseBlogDto> {
    return await this.blogsService.create(createBlogDto);
  }

  @Put(':id')
  async update(
    @Param('id') id: typeof Blog.prototype.id,
    @Body() updateBlogDto: UpdateBlogDto,
  ): Promise<ResponseBlogDto> {
    return await this.blogsService.update(id, updateBlogDto);
  }
}
