import { Injectable } from '@nestjs/common';
import { Pokemon } from 'src/interfaces/pokemon.interface';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class PokemonService {
  constructor(private prisma: PrismaService) {}

  findAll() {
    return this.prisma.pokemon.findMany();
  }

  findOne(id: number) {
    return this.prisma.pokemon.findUnique({ where: { id: id } });
  }
}
