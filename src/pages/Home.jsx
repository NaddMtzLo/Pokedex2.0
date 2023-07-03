import React from 'react'
import FooterHome from '../components/home/FooterHome'
import { setNameTrainerGlobal } from '../store/slices/nameTrainer.slice'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'

const Home = () => {
const dispatch = useDispatch()
const Navigate = useNavigate()


    const handleSubmit = (e) =>{
        e.preventDefault()
        const nameTrainer= e.target.nameTrainer.value
        dispatch(setNameTrainerGlobal(nameTrainer))
        Navigate("/pokedex")
    }

  return (
   <main className='min-h-screen grid grid-rows-[1fr_auto]'>
    {/* parte de arriba */}
        <section className='p-10 grid justify-center content-center'>
            <div className='py-1'>
                <img src='/images/logo.png' alt=''/>
            </div>
                <h3 className='py-1'><span className='font-extrabold text-red-500'>Hi Trainer!</span></h3>
                <p className='py-1'>for start, give me your name:</p>

                <form onSubmit={handleSubmit}>
                    <input id='nameTrainer' className='p-2 border' type='text'/>
                    <button className='bg-red-500 p-2 rounded-md'>Star!</button>
                </form>
            
        </section>
    {/* parte de abajo */}
        <section>
            <FooterHome/>
        </section>
   </main>
  )
}

export default Home