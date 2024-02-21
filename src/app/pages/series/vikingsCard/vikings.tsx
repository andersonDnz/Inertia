import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

export const CardVikings = () => {
  return (

    <div>
      <h1 className='flex '>Vikings</h1>
      <Link href='/pages/series/vikingsInfo'>
        <Image
          src="https://imgs.search.brave.com/549gxyjaUIlTLgdh-OIA_vWzXN_xg5Vr2X2gzsl5wRE/rs:fit:860:0:0/g:ce/aHR0cHM6Ly93LmZv/cmZ1bi5jb20vZmV0/Y2gvZDgvZDhlOTVj/ZWI0MzliOTk2OGE5/MzJkZjEwOWJhMGVk/MzkuanBlZw"
          alt="capa serie"
          width={250}
          height={100}
          className="mb-6 rounded m-auto"
        />
      </Link>
    </div>
  )
}