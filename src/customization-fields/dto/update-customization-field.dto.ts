import { PartialType } from '@nestjs/swagger';
import { CreateCustomizationFieldDto } from './create-customization-field.dto';

export class UpdateCustomizationFieldDto extends PartialType(CreateCustomizationFieldDto) {}
