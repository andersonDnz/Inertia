import React from 'react';
import Image from 'next/image';

import oppenheimer from '@/../../public/oppenheimer.jpg';
import serieBlade from '@/../../public/serie_blade.jpg';
import theBatman from '@/../../public/the_batman.jpg';
import games from '@/../../public/game.jpg';

import Link from 'next/link';

const HomeCardes = () => {
  return (
    <div>


      <h1> Mais destaques</h1>
      <div className='flex items-center justify-center  mb-4 p-4 '>

        <Link href='https://br.ign.com/cinema-tv/118944/news/oscar-2024-confira-os-indicados-a-premiacao'>
          <div className='relative '>
            <Image
              src={oppenheimer}
              alt="conteudo 1"
              width={355}
              style={{ maxWidth: '100%', height: '530px' }}
            />
            <div className='absolute  bottom-0 w-auto p-6 min-h-66 box-bord text-white text-18 leading-1.25 font-bold tracking-wider bg-blue-800 bg-opacity-75'>
              <h1>Oscar 2024: Confira os indicados à premiação</h1>
            </div>
          </div>
        </Link>
        <Link href='https://br.ign.com/blade-arkane/117133/video/confira-o-trailer-revelecao-do-tao-aguardado-marvels-blade'>
          <div className='relative'>
            <Image
              src={serieBlade}
              alt="conteudo 1"
              width={355}
              style={{ maxWidth: '100%', height: '530px' }}
            />
            <div className='absolute bottom-0 w-auto p-6 min-h-66 box-bord text-white text-18 leading-1.25 font-bold tracking-wider bg-blue-800 bg-opacity-75'>
              <h1>Confira o trailer reveleção do táo aguardado Marvel's Blade</h1>
            </div>
          </div>
        </Link>
        <Link href='https://br.ign.com/the-batman-1/117523/news/james-gunn-explica-por-que-o-batman-de-robert-pattinson-nao-faz-parte-de-seu-dcu'>
          <div className='relative'>
            <Image
              src={theBatman}
              alt="conteudo 1"
              width={355}
              style={{ maxWidth: '100%', height: '530px' }}
            />
            <div className='absolute bottom-0 w-auto p-6 min-h-66 box-bord text-white text-18 leading-1.25 font-bold tracking-wider bg-blue-800 bg-opacity-75'>
              <h>James Gunn explica por que o Batman de Robert Pattinson não faz parte de seu DCU</h>
            </div>
          </div>
        </Link>
        <Link href='https://br.ign.com/league-of-legends/115445/feature/14-anos-de-league-of-legends-voce-se-lembra-da-primeira-tela-de-login-do-jogo'>
          <div className='relative'>
            <Image
              src={games}
              alt="conteudo 1"
              width={355}
              style={{ maxWidth: '100%', height: '530px' }}
            />
            <div className='absolute bottom-0 w-auto p-6 min-h-66 box-bord text-white text-18 leading-1.25 font-bold tracking-wider bg-blue-800 bg-opacity-75'>
              <h1>14 anos de League of Legends: você se lembra da primeira tela de login do jogo?</h1>
            </div>
          </div>
        </Link>


      </div>
    </div>
  )
}

export default HomeCardes;