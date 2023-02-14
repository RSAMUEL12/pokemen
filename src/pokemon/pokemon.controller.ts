import { Controller, Get, Param } from '@nestjs/common';
import { Pokemon } from 'src/interfaces/pokemon.interface';
import { PokemonService } from './pokemon.service';

@Controller('pokemon')
export class PokemonController {
  constructor(private pokemonService: PokemonService) {}

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.pokemonService.findOne(+id);
  }

  @Get()
  findAll() {
    return this.pokemonService.findAll();
  }
}
