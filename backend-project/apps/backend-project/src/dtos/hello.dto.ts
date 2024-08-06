import { ApiProperty } from '@nestjs/swagger';

export class HelloParamDto {
  @ApiProperty()
  name: string;
}
