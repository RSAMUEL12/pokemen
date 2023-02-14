// prisma/seed.ts

import { PrismaClient } from '@prisma/client';

// initialize Prisma Client
const prisma = new PrismaClient();

const pokemon = [
  {
    id: 1,
    name: 'bulbasaur',
    url: 'https://pokeapi.co/api/v2/pokemon/1/',
  },
  {
    id: 2,
    name: 'ivysaur',
    url: 'https://pokeapi.co/api/v2/pokemon/2/',
  },
  {
    id: 3,
    name: 'venusaur',
    url: 'https://pokeapi.co/api/v2/pokemon/3/',
  },
  {
    id: 4,
    name: 'charmander',
    url: 'https://pokeapi.co/api/v2/pokemon/4/',
  },
  {
    id: 5,
    name: 'charmeleon',
    url: 'https://pokeapi.co/api/v2/pokemon/5/',
  },
  {
    id: 6,
    name: 'charizard',
    url: 'https://pokeapi.co/api/v2/pokemon/6/',
  },
  {
    id: 7,
    name: 'squirtle',
    url: 'https://pokeapi.co/api/v2/pokemon/7/',
  },
  {
    id: 8,
    name: 'wartortle',
    url: 'https://pokeapi.co/api/v2/pokemon/8/',
  },
  {
    id: 9,
    name: 'blastoise',
    url: 'https://pokeapi.co/api/v2/pokemon/9/',
  },
];

async function main() {
  // add pokemon to the DB

  pokemon.forEach(async (pokemon) => {
    const newPokemon = await prisma.pokemon.upsert({
      where: {
        id: pokemon.id,
      },
      update: {},
      create: {
        name: pokemon.name,
        url: pokemon.url,
      },
    });

    console.log({
      [newPokemon.id]: { name: newPokemon.name, url: newPokemon.url },
    });
  });
}

// execute the main function
main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    // close Prisma Client at the end
    await prisma.$disconnect();
  });
