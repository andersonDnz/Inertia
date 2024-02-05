import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

export const CardLol = () => {
  return (

    <div>
      <h1>League Ranking</h1>
      <Link href='../pages/games/lolInfo'>
        <Image
          src="https://imgs.search.brave.com/pM7KSYGGr3XcT53InLL8O3XeSWS60WNkY6DFPW43UUE/rs:fit:860:0:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJzLmNvbS9p/bWFnZXMvZmVhdHVy/ZWQvbG9sLTl3dXhz/eWI2MDZ3bnAzY2ou/anBn"
          alt="capa animes"
          width={250}
          height={100}
          className="mb-6 rounded m-auto"
        />
      </Link>
    </div>
  )
}
