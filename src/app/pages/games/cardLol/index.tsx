import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

export const CardLol = () => {
  return (

    <div>
      <h1 className='flex '>Conheça o elenco de uma das maiores series já feita</h1>
      <Link href='../pages/games/lolInfo'>
        <Image
          src="https://imgs.search.brave.com/VIZuA-K_OyG0J0Fe1bmOpIN7_R3cuYCLJ0HyboxQrRc/rs:fit:860:0:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJjYXZlLmNv/bS93cC93cDQyODU4/OTYuanBn"
          alt="capa serie"
          width={250}
          height={100}
          className="mb-6 rounded m-auto"
        />
      </Link>
    </div>
  )
}
