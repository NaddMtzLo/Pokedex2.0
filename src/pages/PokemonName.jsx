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
  

import React, { useEffect, useState } from 'react'
import Header from '../components/pokedex/Header'
import { useParams } from 'react-router-dom'
import axios from 'axios'

const PokemonName = () => {
const [pokemon, setPokemon] = useState()
console.log(pokemon);
const {pokemonName} = useParams()
// console.log(pokemonName);esto fue para verificar ni noe estabamos trayendo el nombre q vamos a usar en la url

const percentProgresStat = (baseStat) => {
 const STAT_MAX = 255;

return(`${(baseStat*100)/255}%`);
}
useEffect(() => {
  const url=`https://pokeapi.co/api/v2/pokemon/${pokemonName}/`
//   console.log(url);
  axios.get(url)
   .then(({data})=>setPokemon(data))
   .catch((err)=>console.log(err))
}, [])

  return (
    <main>
        <Header/>
        <section className='max-w-[705px] grid m-auto'>
                <article className=' border-4 border-gray-200 mt-28 max-w-[410px] grid m-auto p-2'>
                       <div className={`${pokeLinearGradients[pokemon?.types[0].type.name]} h-36`}>
                        <div className='relative -top-36 right-6 ml-16 px-16 py-20'>
                             <img className='m-auto' src={pokemon?.sprites.other['official-artwork'].front_default} alt="" />
                        </div>
                         </div>
                <section className='grid justify-center'>
                    <h3 className='border-2 p-0 text-center'>#{pokemon?.id}</h3>
                    <h1 className={`${pokeColorText[pokemon?.types[0].type.name]} grid justify-center`}>{pokemon?.name}</h1> 
                    <section className='grid grid-cols-2 gap-20 justify-center'>
                            <div className='grid grid-rows-2'>
                                <h2 className='grid justify-center text-base font-semibold'>Heigth</h2>
                                <h2 className=' grid justify-center'>{pokemon?.height}</h2>
                            </div>
                            <div>
                                <h2 className='grid justify-center text-base font-semibold'>Weight</h2>
                                <h2 className=' grid justify-center'>{pokemon?.weight}</h2>
                            </div>
                    </section>
                    <section className='grid grid-cols-2 gap-2 pt-3' >
                    <h2 className='grid justify-center text-base font-semibold'>Type</h2>
                    <h2 className='grid justify-center text-base font-semibold'>Abilities</h2>
                    </section>
                    <section className=' grid grid-cols-2 gap-3'>
                        <h2 className={`${pokeLinearGradients[pokemon?.types[0].type.name]} grid justify-center p-1  text-white border-1`}>{pokemon?.types[0].type.name}</h2>
                     {/* <h2 className={`${pokeLinearGradients[pokemon?.types[1].type.name]} grid justify-center p-1 text-white border-1`}>{pokemon?.types[1].type.name}</h2> */}
                        <h2 className='border-2'>{pokemon?.abilities[0].ability.name}</h2>
                        {/* <h2 className='border-2'>{pokemon?.abilities[1].ability.name}</h2>     */}
                    </section>
                </section>

                <section className='pt-4'>
                    <h4 className='grid justify-center text-base font-semibold'>Stats</h4>
                    <section>
                        {
                            pokemon?.stats.map((stat)=> (

                                <article key={stat.stat.url}>
                                    <section>
                                       <h5>{stat.stat.name}</h5> 
                                       <span>{stat.base_stat}</span>
                                    </section>  
                                    {/* barra de progeso                  */}
                                    <div className='bg-gray-300 h-8 rounded-md overflow-hidden'>
                                    <div style={{width :percentProgresStat(stat.base_stat) }} className='h-full bg-yellow-300'></div>
                                    </div>
                                </article>
                                


                            ))
                        }
                    </section>
                </section>

            </article>
        </section>
    </main>
  )
}

export default PokemonName