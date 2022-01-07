import { Inject, Injectable } from '@nestjs/common';
import { templates, templatesAttributes } from 'src/models';
import { CreateServiceProvider } from 'src/parents/abstract-service';
import { UpdateTemplateDto } from './dto/update-template.dto';

@Injectable()
export class TemplatesService extends CreateServiceProvider<
  templates,
  templatesAttributes
> {
  constructor(
    @Inject('TEMPLATES_REPOSITORY')
    private templatesRepository: typeof templates,
  ) {
    super('templateId', templatesRepository);
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
}
