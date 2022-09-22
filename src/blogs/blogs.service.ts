import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateBlogDto } from './dto/create-blog.dto';
import { UpdateBlogDto } from './dto/update-blog.dto';
import { Blog } from './entities/blog.entity';

@Injectable()
export class BlogsService {

  @InjectRepository(Blog)
  private readonly repository: Repository<Blog>;

  async create(createBlogDto: CreateBlogDto) {
    return await this.repository
      .createQueryBuilder()
      .insert()
      .into(Blog)
      .values([
        {
          title: createBlogDto.title,
          author: createBlogDto.author,
          description: createBlogDto.description,
          body: createBlogDto.body
        }
      ])
      .execute();
  }

  findAll() {
    return `This action returns all blogs`;
  }

  findOne(id: string) {
    return this.repository.findOne({
      where: {
        id: id
      }
    });
  }



  async update(id: string, updateBlogDto: UpdateBlogDto) {
    return await this.repository
      .createQueryBuilder()
      .update(Blog)
      .set({
        title: updateBlogDto.title,
        description: updateBlogDto.description,
        body: updateBlogDto.body
      })
      .where("id = :id", {id: id})
      .execute(); 
  }

  remove(id: string) {
    return `This action removes a #${id} blog`;
  }
}
