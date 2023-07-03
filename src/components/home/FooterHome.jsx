import React from 'react'

const FooterHome = () => {
  return (
    //esto es el pie de la pagina 
    <section className='relative'>
        {/* seccion roja */}
        <div className='bg-red-600 h-20'></div>
         {/* seccion negra */}
         <div className='bg-black h-14'></div>
         <div className='absolute top-4 left-32'><img src='/images/pokebola.png' alt=''/></div>
    </section>
    
  )
}

export default FooterHome