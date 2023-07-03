import React from 'react'
import { setNameTrainerGlobal } from '../../store/slices/nameTrainer.slice'
import { useDispatch } from 'react-redux'

const Header = () => {

 const dispatch = useDispatch()

 const handleClickLogout = () => {
    dispatch(setNameTrainerGlobal(""))
 }

  return (
    <section className='relative'>
        {/* seccion roja */}
        <div className='bg-red-600 h-24'><img className='' src='/images/logo.png' alt=''/></div>
         {/* seccion negra */}
         <div className='bg-black h-24'></div>
         <div className='absolute top-20 left-3/4'><img onClick={handleClickLogout} src='/images/pokebolaSalida.png' alt=''/></div>
    </section>
  )
}

export default Header