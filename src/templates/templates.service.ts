import { Inject, Injectable } from '@nestjs/common';
import { User } from 'src/decorators/user.decorator';
import { templates } from 'src/models';
import { findByAttributes } from 'src/utils/queries/find-by-attributes';
import { CreateTemplateDto } from './dto/create-template.dto';
import { UpdateTemplateDto } from './dto/update-template.dto';

@Injectable()
export class TemplatesService {
  constructor(
    @Inject('TEMPLATES_REPOSITORY')
    private templatesRepository: typeof templates,
  ) {}

  create(createTemplateDto: CreateTemplateDto) {
    return 'This action adds a new template';
  }

  findAll() {
    return `This action returns all templates`;
  }

  findOne(id: number) {
    return `This action returns a #${id} template`;
  }

  update(id: number, updateTemplateDto: UpdateTemplateDto) {
    return `This action updates a #${id} template`;
  }

  remove(id: number) {
    return `This action removes a #${id} template`;
  }

  async findByAttributes(
    user,
    attributes?: string[],
  ): Promise<templates[]> {
    return await findByAttributes(this.templatesRepository, user, attributes);
  }
}
