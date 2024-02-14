'use client'

import React, { useState, useEffect } from 'react';

interface Character {
  id: number;
  firstName: string;

}

const GotCharacters: React.FC = () => {
  const [data, setData] = useState<Character[] | null>(null);
  const [error, setError] = useState<string | null>(null);

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
    <div className='min-h-screen flex items-center justify-center p-32'>
      {data ? (

        <ul>
          {data.map((character) => (
            <li key={character.id}>{character.firstName}</li>
          ))}
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
