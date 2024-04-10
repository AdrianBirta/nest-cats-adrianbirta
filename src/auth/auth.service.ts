import { Injectable, NotFoundException } from '@nestjs/common';
import { faker } from '@faker-js/faker'
import { IAuthenticate } from './interface/user.interface';
import { AuthenticateDto } from './dto/autehnticate.dto';
import { sign } from 'jsonwebtoken';
import { DatabaseService } from 'src/database/database.service';
import { Prisma } from '@prisma/client';

@Injectable()
export class AuthService {
  constructor(private readonly databaseService: DatabaseService) { }

  async authenticate({ email, password }: AuthenticateDto) {

    const user = await this.databaseService.user.findUnique({
      where: {
        email,
      }
    })

    if (!user || user.password !== password) {
      throw new NotFoundException('Invalid credentials');
    }

    const token = sign({ ...user }, 'secrete');

    return { token, user };
  }

  async register(createUserDto: Prisma.UserCreateInput) {
    return this.databaseService.user.create({
      data: createUserDto
    })
  }

  async findAll() {
    return this.databaseService.user.findMany()
  }
}
