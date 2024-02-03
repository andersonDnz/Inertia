import React from 'react'
import Image from 'next/image';
import Link from 'next/link';

const TopSeriesCards = () => {
  return (
    <div>
      <div>Top series de tv mundial!</div>

      <Link href='/pages/series/tvShow'>
        <Image
          src="https://imgs.search.brave.com/2LAAjtXGVNdrFH949x-e2R4CmKo6nQtyabgVg1YlujU/rs:fit:860:0:0/g:ce/aHR0cHM6Ly90dnNl/cmllc2ZpbmFsZS5j/b20vd3AtY29udGVu/dC91cGxvYWRzLzIw/MTYvMDMvMjAxNS0x/MC0xNi0xMy4yOS4y/My5qcGc"
          alt="capa animes"
          width={250}
          height={100}
          className="mb-6 rounded m-auto"
        />
      </Link>
    </div>
  )
}

export default TopSeriesCards;