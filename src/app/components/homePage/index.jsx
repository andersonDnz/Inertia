import React from 'react';
import Image from 'next/image';

import oppenheimer from '@/../../public/oppenheimer.jpg';
import serieBlade from '@/../../public/serie_blade.jpg';
import theBatman from '@/../../public/the_batman.jpg';
import games from '@/../../public/game.jpg';

const HomePage = () => {
  return (
    <div className='flex justify-center mb-4 p-4'>
      <Image
        src={oppenheimer}
        alt="Descrição da imagem"
        style={{ maxWidth: '100%', height: 'auto', width: '20%', marginRight: '8px' }}
      />
      <Image
        src={serieBlade}
        alt="Descrição da imagem"
        style={{ maxWidth: '100%', height: 'auto', width: '20%', marginRight: '8px' }}
      />
      <Image
        src={theBatman}
        alt="Descrição da imagem"
        style={{ maxWidth: '100%', height: 'auto', width: '20%', marginRight: '8px' }}
      />
      <Image
        src={games}
        alt="Descrição da imagem"
        style={{ maxWidth: '100%', height: 'auto', width: '20%', marginRight: '8px' }}
      />


    </div>
  )
}

export default HomePage;