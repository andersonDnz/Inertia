'use client'

import React, { useState, useEffect } from 'react';

import Image from 'next/image';

interface Character {
  id: number;
  firstName: string;
  lastName: string;
  imageUrl: any;
  title: string;
}

const GotCharacters: React.FC = () => {
  const [data, setData] = useState<Character[] | null>(null);
  const [error, setError] = useState<string | null>(null);

  const imgCharacters = 'https://images5.alphacoders.com/129/1294176.jpg';

  const divStyle = {
    backgroundImage: `url(${imgCharacters})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  }

  const fetchData = async () => {
    const url = 'https://game-of-thrones1.p.rapidapi.com/Characters';
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': 'd64c24e974msh1b540dd739731cfp17cf45jsn5d6be5acb5e1',
        'X-RapidAPI-Host': 'game-of-thrones1.p.rapidapi.com',
      },
    };

    try {
      const response = await fetch(url, options);

      if (response.ok) {
        const result: Character[] = await response.json();

        setData(result);
        console.log(result)
      } else {
        console.error('Erro na solicitação:', response.status, response.statusText);
        setError(`Erro na solicitação: ${response.status} ${response.statusText}`);
      }
    } catch (error) {
      console.error('Erro na solicitação:', error);

    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div style={divStyle} className='min-h-screen flex items-center justify-center p-32'>
      {data ? (


        <ul >
          <div className="flex flex-wrap justify-center p-8 max-w-screen-xl mx-auto">

            {data.map((character) => (
              <li key={character.id}>
                <section className=" max-w-5xl w-full max-h-screen  mx-auto p-8 bg-white rounded-lg shadow-md text-center  mb-4">
                  <div>

                    <h1 className='text-blue-900 mb-2'>
                      {character.firstName}
                      {character.lastName}

                    </h1>
                    <div>
                      <Image
                        src={character.imageUrl}
                        alt={`Poster de ${character.firstName}`}
                        width={150}
                        height={300}
                        style={{ height: 'auto', width: 'auto' }}
                      />
                    </div>
                    <h2>{character.title}</h2>
                  </div>

                </section>
              </li>
            ))}
          </div>
        </ul>
      ) : (

        error ? (

          <p>{error}</p>
        ) : (

          <p>Carregando...</p>
        )
      )}
    </div>
  );
};

export default GotCharacters;
