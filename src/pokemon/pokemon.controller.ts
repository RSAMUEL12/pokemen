import { Controller, Get } from '@nestjs/common';
import { Pokemon } from 'src/interfaces/pokemon.interface';
import { PokemonService } from './pokemon.service';

@Controller('pokemon')
export class PokemonController {
  constructor(private pokemonService: PokemonService) {}

  @Get()
  findAll(): Pokemon[] {
    return this.pokemonService.findAll();
  }
}
