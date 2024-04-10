import { Injectable, NotFoundException } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { DatabaseService } from 'src/database/database.service';

@Injectable()
export class CatsService {
  constructor(private readonly databaseService: DatabaseService) { }

  async create(createCatDto: Prisma.CatCreateInput) {
    return await this.databaseService.cat.create({ data: createCatDto });
  }

  async findAll() {
    return this.databaseService.cat.findMany();
  }

  async findOne(id: number) {
    const user = await this.databaseService.cat.findUnique({
      where: {
        id,
      }
    });

    if (!user) throw new NotFoundException('Cat Not Found')

    return user
  }

  async update(id: number, updateCatDto: Prisma.CatUpdateInput) {
    return this.databaseService.cat.update({
      where: {
        id,
      },
      data: updateCatDto,
    });
  }

  async remove(id: number) {
    return this.databaseService.cat.delete({
      where: {
        id,
      }
    });
  }
}
