import { Controller, Get, Post, Body, Patch, Param, Delete, Put, UseGuards, ParseIntPipe, ValidationPipe } from '@nestjs/common';
import { CatsService } from './cats.service';
import { Prisma } from '@prisma/client';
import { Roles } from 'src/auth/roles/roles.decorator';
import { JwtAuthGuard } from 'src/auth/jwt.guard';
import { RoleGuard } from 'src/auth/role/role.guard';

@Controller('cats')
export class CatsController {
  constructor(private readonly catsService: CatsService) { }

  @Roles('admin')
  @UseGuards(JwtAuthGuard, RoleGuard)
  @Post()
  create(@Body(ValidationPipe) createCatDto: Prisma.CatCreateInput) {
    return this.catsService.create(createCatDto);
  }

  @Get()
  findAll() {
    return this.catsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.catsService.findOne(id);
  }

  @Roles('admin')
  @UseGuards(JwtAuthGuard, RoleGuard)
  @Put(':id')
  update(@Param('id', ParseIntPipe) id: number, @Body(ValidationPipe) updateCatDto: Prisma.CatUpdateInput) {
    return this.catsService.update(id, updateCatDto);
  }

  @Roles('admin')
  @UseGuards(JwtAuthGuard, RoleGuard)
  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.catsService.remove(id);
  }
}
