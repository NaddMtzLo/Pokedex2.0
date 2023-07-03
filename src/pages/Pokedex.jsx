import React, { useEffect, useState } from 'react'
import Header from '../components/pokedex/Header'
import { useSelector } from 'react-redux'
import axios from 'axios'
import PokemonList from '../components/pokedex/PokemonList'


const Pokedex = () => {
const [pokemons, setPokemons] = useState([])
//  console.log({pokemons});
const [namePokemon, setNamePokemon] = useState("")
// console.log(namePokemon);

const [currentType, setCurrentType] = useState("")

const [curentPage, setCurentPage] = useState(1);

const [types, setTypes] = useState([])
console.log(types); 
  const nameTrainer = useSelector(store => store.nameTrainer)

  const pokemonsByName = pokemons.filter((pokemon) => pokemon.name.includes(namePokemon.toLowerCase().trim()) )
  console.log(pokemonsByName);
   const handleSubmit = (e) => {
     e.preventDefault()
   setNamePokemon(e.target.namePokemon.value)
  //  console.log(setNamePokemon);
  }

  const handleChangeType = (e) =>{
        setCurrentType(e.target.value);
  }
// pagicion logica
 const paginationLogic = () =>{
//  cantidad de pokemons a mostrar por cada pagina
const POKEMONS_PER_PAGE = 15;
// buscando punto inicial y final de cortes del arreglo pokemos para mostar en la pagina
const sliceStar = (curentPage - 1)* POKEMONS_PER_PAGE;
const sliceEnd = sliceStar + POKEMONS_PER_PAGE;
const pokemonsInPage = pokemonsByName.slice(sliceStar, sliceEnd);

const PAGES_PER_BLOCK = 5;
//ultima pagina
const lastPage = Math.ceil(pokemonsByName.length/POKEMONS_PER_PAGE) ||  1;
// bloque actual
const actualBlock = Math.ceil(curentPage/PAGES_PER_BLOCK);

//paginas a mostar en el bloque actual
const pagesInBlock=[];
const minPage = (actualBlock-1) * PAGES_PER_BLOCK +1;
const maxPage = actualBlock * PAGES_PER_BLOCK;
for (let i = minPage; i <= maxPage; i++) {
  if (i <= lastPage) {
    pagesInBlock.push(i)
  }
}

const handleClickPreviusPage = () => {

}

return {pokemonsInPage, lastPage, pagesInBlock}
 }

 const {lastPage,pagesInBlock,pokemonsInPage}= paginationLogic()

 const handleClickPreviusPage = () =>{
const newCurrentPage = curentPage -1;
if (newCurrentPage >= 1) {
  setCurentPage(newCurrentPage)  
}
 }

 const handleClickNextPage = () => {
  const newCurrentPage = curentPage +1;
  if (newCurrentPage<= lastPage) {
    setCurentPage(newCurrentPage)  
  }
 }

  useEffect(()=>{
    if(!currentType){
    const URL="https://pokeapi.co/api/v2/pokemon?limit=1281"
    
    axios.get(URL)
    .then(({data})=>setPokemons(data.results))
    .catch((err)=>console.log(err))
    }
  },[currentType])

useEffect(() => {
  const URL =' https://pokeapi.co/api/v2/type';

  axios.get(URL)
  .then(({data})=>setTypes(data.results))
    .catch((err)=>console.log(err))
}, [currentType])

useEffect(() => {
  if(currentType){
  const url=`https://pokeapi.co/api/v2/type/${currentType}`;
  
  axios
   .get(url)
  .then(({ data }) => {
    const pokemonsByType = data.pokemon.map(pokemon => pokemon.pokemon)
    setPokemons(pokemonsByType) 
    })
    .catch((err)=>console.log(err))
    }
}, [currentType]);

useEffect(() => {
   setCurentPage(1)
}, [namePokemon , currentType]);

  return (
    <main>
      <Header/>
      <h3 className='grid justify-center'><span className='font-bold text-red-600'>Welcome {nameTrainer}! </span>here you can find your favorite pokemon</h3>
    
      <form onSubmit={handleSubmit}>
       <section className='grid grid-cols-[0.6fr,_0.2fr] justify-center'>
            <div className=''>
              <input placeholder='Type a name pokemon' id='namePokemon' className='p-2 border' type='text'/>
              <button className='bg-red-500 p-2 rounded-md'>Search</button>
            </div>

            <select onChange={handleChangeType} name="" id="" className=' border'>
                <option value="">All</option>
                {
                  types.map((type) => <option value={type.name} key={type.url}>{type.name}</option>)
                }
            </select>
            </section>
      </form>
    <PokemonList  pokemons={pokemonsInPage}/>
    <ul className='flex gap-3 justify-center py-4 px-2 flex-wrap'>
      <li onClick={handleClickPreviusPage} className={`p-3 bg-red-600 text-white rounded-md cursor-pointer`}>{"<"}</li>
          {
            pagesInBlock.map(numberPage => <li onClick={()=>setCurentPage(numberPage )} className={`p-3 bg-red-600 text-white rounded-md cursor-pointer ${numberPage === curentPage && "font-extrabold underline"}`} key={numberPage}>{numberPage}</li>)
          }
       <li onClick={handleClickNextPage} className='p-3 bg-red-600 text-white rounded-md cursor-pointer'>{">"}</li>   
    </ul>
    </main>
 )
}

export default Pokedex