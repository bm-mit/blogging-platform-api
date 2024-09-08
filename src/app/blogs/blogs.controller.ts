import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  Param,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import { CreateBlogDto, ResponseBlogDto, UpdateBlogDto } from './blogs.dto';
import { BlogsService } from './blogs.service';
import { Blog } from './blog.entity';

@Controller('blogs')
export class BlogsController {
  constructor(private blogsService: BlogsService) {}

  @Get()
  findAll(@Query('term') term: string) {
    return this.blogsService.findAll(term || '');
  }

  @Post()
  @HttpCode(201)
  create(@Body() createBlogDto: CreateBlogDto): Promise<ResponseBlogDto> {
    return this.blogsService.create(createBlogDto);
  }

  @Put(':id')
  update(
    @Param('id') id: typeof Blog.prototype.id,
    @Body() updateBlogDto: UpdateBlogDto,
  ): Promise<ResponseBlogDto> {
    return this.blogsService.update(id, updateBlogDto);
  }

  @Delete(':id')
  @HttpCode(204)
  delete(@Param('id') id: typeof Blog.prototype.id): Promise<void> {
    return this.blogsService.delete(id);
  }
}
