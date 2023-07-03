import React from 'react'
import PokemonCard from './PokemonCard'

const PokemonList = ({pokemons}) => {
  return (
    <section className='px-10'>
    <section className='grid gap-3 grid-cols-[repeat(auto-fill,_375px)] justify-center'>
            {
            //    console.log(pokemons)
               pokemons.map(pokemon => <PokemonCard key={pokemon.url} pokemonUrl={pokemon.url}/> )
            }
    </section>
    </section>
      )
}

export default PokemonList