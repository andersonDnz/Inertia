import React from 'react';
import Image from 'next/image';
import jokerImage from '@/../../public/joker_coringa_2.jpg';

const MovieInfo = () => {
  return (
    <div className='min-h-screen flex items-center justify-center p-32'>
      <div className=" max-w-5xl w-full mx-auto p-8 bg-white  rounded-lg shadow-md text-center">
        <div className="mx-auto mb-6 w-full max-w-[700px]">
          <Image
            src={jokerImage}
            alt="Joker: Folie a Deux"
            width={700}
            height={500}
            className="mb-6 rounded "
          />
        </div>
        <div>
          <h1 className="text-3xl font-bold mb-4">Joker: Folie a Deux</h1>
          <p className="text-gray-600 mb-4">
            Sequência de Coringa, com direção e roteiro de Todd Phillips e Joaquin Phoenix.
          </p>
          <div className="mb-4">
            <h2 className="text-lg font-semibold mb-2">Estreia</h2>
            <p className="text-gray-700">4 de outubro de 2024</p>
          </div>
          <div className="mb-4">
            <h2 className="text-lg font-semibold mb-2">Produção</h2>
            <p className="text-gray-700">Início em dezembro de 2022</p>
          </div>
          <hr className="my-4 border-t-2 border-gray-300" />
          <div className="text-left">
            <h2 className="text-xl font-bold mb-2">Sobre o Filme</h2>
            <p className='text-gray-600 mb-1'>
              Sequência de Coringa, já tem uma data oficial para chegar aos cinemas.
              O longa, que conta com os retornos do diretor e roteirista Todd Phillips e do vencedor do Oscar de Melhor
              Ator Joaquin Phoenix teve sua estreia marcada para 4 de outubro de 2024.
            </p>
            <p className='text-gray-600 mb-3'>

            </p>
            <p className="text-gray-600">
              "Joker: Folie a Deux" é a aguardada sequência do aclamado filme "Coringa". O diretor
              Todd Phillips e o premiado ator Joaquin Phoenix retornam para mais uma jornada
              cinematográfica envolvente.
            </p>
          </div>
        </div>
      </div>
    </div>

  );
};

export default MovieInfo;

