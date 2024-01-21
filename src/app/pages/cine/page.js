import React from 'react';
import Link from 'next/link';

import Image from 'next/image';
import movieImg from '@/../../public/Card.jpeg';

const Information = () => {
  return (
    <div className='p-16'>
      <div className=''>
        <Image
          src={movieImg}
          alt='itachi'
          width={1470}
          height={980}
          style={{ maxWidth: '100%', height: 'auto', width: 'auto' }}
        />
      </div>
      <div>
        <h1>
          Filme
        </h1>
        <p>
          Ryan Reynolds apareceu vestido de Deadpool para aceitar o seu Emmy pelo reality show Welcome to Wrexham, em cerimônia na noite de ontem (7). O ator aproveitou para dar um gostinho de Deadpool 3 e até fazer campanha do filme para o Oscar 2025.

          Depois de agradecer a vitória no Emmy com algumas piadas, Reynolds (sempre dentro do personagem) comentou: "Gostaria de agradecer à FX e à Disney por seu apoio, e em troca disso o Sr. Lively [referência à esposa do ator, Blake Lively] promete não fazer besteira com o meu próximo filme".

          "Por fim, quero falar com a Academia do Oscar! Vocês estão avisados, filhos da p*ta. Talvez ano que vem a gente possa ser indicado a melhores efeitos visuais ou algo assim. Só o trabalho que eles fazem para consertar a cara do Ryan e do Hugh [Jackman, que será Wolverine no filme] faz por merecer a indicação", brincou ainda.

          Confira o vídeo:
        </p>
      </div>
      <div>
        <Link href="/">
          voltar
        </Link>
      </div>
    </div>
  )
}

export default Information;