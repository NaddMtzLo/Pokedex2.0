import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
// tengo que agg mas elementos de los pokemons
const pokeLinearGradients = {
  grass:'bg-gradient-to-b from-green-700 to-green-200',
  poison:'bg-gradient-to-b from-black to-purple-950',
  fire:'bg-gradient-to-b from-orange-500 to-red-400',
  water:'bg-gradient-to-b from-cyan-500 to-blue-500',
  bug:'bg-gradient-to-b from-amber-950 to-green-800',
  normal:'bg-gradient-to-b from-amber-800 to-white', 
  electric:'bg-gradient-to-b from-yellow-400 to-yellow-200', 
  ground:'bg-gradient-to-b from-amber-950 to-black',
  fairy:'bg-gradient-to-b from-black to-white',
  fighting:'bg-gradient-to-b from-red-600 to-slate-600',
  flying:'bg-gradient-to-b from-cyan-600 to-gray-300',
  psychic:'bg-gradient-to-b from-red-400 to-black',
  dragon:'bg-gradient-to-b from-red-600 to-amber-900',
  ice:'bg-gradient-to-b from-blue-300 to-gray-300',
  dark:'bg-gradient-to-b from-black to-gray-600',
  steel:'bg-gradient-to-b from-gray-600 to-gray-400',
  unknown:'bg-gradient-to-b from-red-200 to-blue-200', 
  shadows:'bg-gradient-to-b from-black to-blue-600',
  ghost:'bg-gradient-to-b from-red-200 to-blue-200',
  rock:'bg-gradient-to-b from-zinc-500 to-amber-700'
}

const pokeLinearGradientsBorders = {
  grass:'border-green-700 border-4 rounded-md',
  poison:'border-purple-950 border-4 rounded-md',
  fire:'border-orange-500 border-4 rounded-md',
  water:'border-blue-500 border-4 rounded-md',
  bug:'border-amber-950 border-4 rounded-md',
  normal:'border-amber-800 border-4 rounded-md', 
  electric:'border-yellow-400 border-4 rounded-md', 
  ground:'border-amber-950 border-4 rounded-md',
  fairy:'border-black border-4 rounded-md',
  fighting:'border-red-600 border-4 rounded-md',
  flying:'border-cyan-600 border-4 rounded-md',
  psychic:'border-red-400 border-4 rounded-md',
  dragon:'border-red-600 border-4 rounded-md',
  ice:'border-blue-300 border-4 rounded-md',
  dark:'border-black border-4 rounded-md',
  steel:'border-gray-600 border-4 rounded-md',
  unknown:'border-red-200 border-4 rounded-md',
  shadows:'border-black border-4 rounded-md',
  ghost:'border-red-200 border-4 rounded-md',
  rock:'border-zinc-500 border-4 rounded-md'
}

const pokeColorText = {
  grass:'text-green-700 font-bold text-2xl',
  poison:'text-purple-950 font-bold text-2xl',
  fire:'text-orange-500 font-bold text-2xl',
  water:'text-blue-500 font-bold text-2xl',
  bug:'text-amber-950 font-bold text-2xl',
  normal:'text-amber-800 font-bold text-2xl', 
  electric:'text-yellow-400font-bold text-2xl', 
  ground:'text-amber-950 font-bold text-2xl',
  fairy:'text-black font-bold text-2xl',
  fighting:'text-red-600 font-bold text-2xl',
  flying:'text-cyan-600 font-bold text-2xl',
  psychic:'text-red-400 font-bold text-2xl',
  dragon:'text-red-600 font-bold text-2xl',
  ice:'text-blue-300 font-bold text-2xl',
  dark:'text-black font-bold text-2xl',
  steel:'text-gray-600 font-bold text-2xl',
  unknown:'text-red-200 font-bold text-2xl',
  shadows:'text-black font-bold text-2xl',
  ghost:'text-red-200 font-bold text-2xl',
  rock:'text-zinc-500 font-bold text-2xl'
}

const PokemonCard = ({pokemonUrl}) => {
  
const [pokemon, setPokemon] = useState(null)
// logica para consumir los tipos de elemtosd u pokemon 
const formatTypesPokemos = (types = []) => {
    const nameTypes = types.map((type) => type.type.name)
    const titleTypes = nameTypes.join(" / ") 
    // console.log(nameTypes);
    return titleTypes
    
}


    useEffect(() => {
      axios.get(pokemonUrl)
    .then(({data})=>setPokemon(data))
    .catch((err)=>console.log(err))
    }, [])
    // console.log(pokemon);
  return (
    <Link className='grid gap-8 grid-cols-[repeat(auto-fill,_375px) justify-center]' to={`/pokedex/${pokemon?.name}`}>
    <article className={`${pokeLinearGradientsBorders[pokemon?.types[0].type.name]} m-4` }>
        {/* seccion superior */}
        <section className={`relative h-52 ${pokeLinearGradients[pokemon?.types[0].type.name]}`}>
            <div className='absolute px-12 -bottom-16'>
              <img src={pokemon?.sprites.other['official-artwork'].front_default} alt={pokemon?.name} />
            </div>
        </section>
        {/* seccion inferior */}
        <section className='mt-10 text-xl p-3'>
            <h3 className='grid justify-center'><span className={`  ${pokeColorText[pokemon?.types[0].type.name]}`}>{pokemon?.name}</span></h3>
            <p className='grid justify-center text-base font-extralight'>{formatTypesPokemos(pokemon?.types)}</p>
            <span className='grid justify-center text-xs font-extralight'>type</span>
            <hr /> 

            <section className='grid grid-cols-2'>
                {/* lista de stats */}
                {
                  pokemon?.stats.slice(0,4).map(stat => (
                      <div key={stat.stat.url} className='grid grid-rows-2 justify-center py-4'>
                        <h6 className='text-xs font-light uppercase'>{stat.stat.name}</h6>
                        <span className={`${pokeColorText[pokemon?.types[0].type.name]} text-center`}>{stat.base_stat}</span>
                      </div>

                   ) )
                }
            </section>
        </section>
         
    </article>
    </Link>
  )
}

export default PokemonCard