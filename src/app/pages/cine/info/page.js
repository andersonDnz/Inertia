import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import deadpool from '@/../../public/deadpool.jpeg';

const Information = () => {
  return (
    <div className='min-h-screen flex items-center justify-center p-32'>
      <section className=" max-w-5xl w-full mx-auto p-8 bg-white rounded-lg shadow-md text-center">
        <div className="mx-auto mb-6 w-full max-w-[700px]">
          <Image
            src={deadpool}
            alt="Joker: Folie a Deux"
            width={800}
            className="mb-6 rounded m-auto"
            style={{ height: 'auto', width: 'auto' }}
          />
        </div>
        <div>
          <h1 className="text-3xl font-bold mb-4">Ryan Reynolds aceita Emmy vestido como Deadpool e fala de novo filme</h1>
          <p className="text-gray-600 mb-4">
            Ator aproveitou para fazer campanha para Deadpool 3 no Oscar
          </p>
          <div className="mb-4">
            <h2 className="text-lg font-semibold mb-2">Estreia</h2>
            <p className="text-gray-700">26 de julho de 2024</p>
          </div>
          <hr className="my-4 border-t-2 border-gray-300" />
          <div className="text-left">

            <p className='text-gray-600 mb-1'>
              Ryan Reynolds apareceu vestido de Deadpool para aceitar o seu Emmy pelo reality show Welcome to Wrexham,
              em cerimônia na noite de ontem (7). O ator aproveitou para dar um gostinho de Deadpool 3 e até fazer campanha do filme para o Oscar 2025.
            </p>
            <p className='text-gray-600 mb-3'>

            </p>
            <p className="text-gray-600 mb-3">
              Depois de agradecer a vitória no Emmy com algumas piadas, Reynolds (sempre dentro do personagem)
              comentou: "Gostaria de agradecer à FX e à Disney por seu apoio, e em troca disso o Sr. Lively [referência à esposa do ator, Blake Lively]
              promete não fazer besteira com o meu próximo filme".
            </p>
            <p className='text-gray-600 mb-5'>
              "Por fim, quero falar com a Academia do Oscar! Vocês estão avisados, filhos da p*ta. Talvez ano que vem a gente possa ser indicado a melhores efeitos visuais ou algo assim.
              Só o trabalho que eles fazem para consertar a cara do Ryan e do Hugh [Jackman, que será Wolverine no filme] faz por merecer a indicação", brincou ainda.
            </p>
            <p className='text-gray-600 mb-7'>Confira o vídeo:</p>
          </div>
          <div className='flex mx-auto justify-center mb-10'>
            <iframe
              width="800px"
              height="735"
              src="https://www.youtube.com/embed/7tPmtXJ-kQk"
              title="Ryan Reynolds thanks the Emmys for his award as DEADPOOL 😅"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen>
            </iframe>
          </div>
          <div className='mr-[100%] p-2 px-2 border w-20 border-blue-600 bg-blue-400 rounded-full text-lg'>
            <Link href="/">
              Voltar
            </Link>
          </div>
        </div>
      </section>
    </div>

  );
};

export default Information;