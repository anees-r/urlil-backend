import { IsOptional, IsString } from "class-validator"

export class CreateUrlilDto {
    @IsString()
    url: string

    @IsOptional()
    shorturl: string
}
