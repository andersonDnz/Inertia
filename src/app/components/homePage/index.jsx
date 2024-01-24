import React from 'react';
import Image from 'next/image';

import oppenheimer from '@/../../public/oppenheimer.jpg';
import serieBlade from '@/../../public/serie_blade.jpg';
import theBatman from '@/../../public/the_batman.jpg';
import games from '@/../../public/game.jpg';

import Link from 'next/link';

const HomeCardes = () => {
  return (
    <div className='flex justify-center mb-4 p-4'>
      <Link href='https://br.ign.com/cinema-tv/118944/news/oscar-2024-confira-os-indicados-a-premiacao'>
        <Image
          src={oppenheimer}
          alt="conteudo 1"
          width={355}

          style={{ maxWidth: '100%', height: '530px', marginRight: '8px' }}
        />
      </Link>
      <Link href='https://br.ign.com/blade-arkane/117133/video/confira-o-trailer-revelecao-do-tao-aguardado-marvels-blade'>
        <Image
          src={serieBlade}
          alt="conteudo 1"
          width={355}
          style={{ maxWidth: '100%', height: '530px', marginRight: '8px' }}
        />
      </Link>
      <Link href='https://br.ign.com/the-batman-1/117523/news/james-gunn-explica-por-que-o-batman-de-robert-pattinson-nao-faz-parte-de-seu-dcu'>
        <Image
          src={theBatman}
          alt="conteudo 1"
          width={355}
          style={{ maxWidth: '100%', height: '530px', marginRight: '8px' }}
        />
      </Link>
      <Link href='https://br.ign.com/league-of-legends/115445/feature/14-anos-de-league-of-legends-voce-se-lembra-da-primeira-tela-de-login-do-jogo'>
        <Image
          src={games}
          alt="conteudo 1"
          width={355}
          style={{ maxWidth: '100%', height: '530px', marginRight: '8px' }}
        />
      </Link>

    </div >
  )
}

export default HomeCardes;