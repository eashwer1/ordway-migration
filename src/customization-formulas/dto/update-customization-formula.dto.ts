import { PartialType } from '@nestjs/swagger';
import { CreateCustomizationFormulaDto } from './create-customization-formula.dto';

export class UpdateCustomizationFormulaDto extends PartialType(CreateCustomizationFormulaDto) {}
