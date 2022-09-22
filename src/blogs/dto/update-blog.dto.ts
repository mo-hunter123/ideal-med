import { PartialType } from '@nestjs/mapped-types';
import { CreateBlogDto } from './create-blog.dto';

export class UpdateBlogDto extends PartialType(CreateBlogDto) {
    readonly title: string; 
    readonly description: string; 
    readonly body: string; 
}
