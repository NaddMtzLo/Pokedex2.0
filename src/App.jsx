import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Pokedex from './pages/Pokedex'
import PotectedRautes from './components/auth/ProtectedRautes'
import PokemonName from './pages/PokemonName'

function App() {
  

  return (
    <main className='font-["Inter"] min-h-screen '>
      <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='' element={<PotectedRautes/>}>
              <Route path='/pokedex' element={<Pokedex/>} />
              { <Route path='/pokedex/:pokemonName' element={<PokemonName/>} />}
          </Route>
      </Routes>
    </main>
  )
}

export default App