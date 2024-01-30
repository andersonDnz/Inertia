'use client'

import { useState, useEffect } from "react";

interface Character {
  id: number;
  name: string;
  status: string;
  species: string;
  url: string;
}

interface ApiResponse {
  results: Character[];
}



export default function TvShow() {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<ApiResponse | null>(null);

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhNmM0N2E1MjQ1ZWE2Yzc1NGM0YWNiMDliMzczYzQwMyIsInN1YiI6IjYzMDQwNWE2MjExMThmMDA3ZDMyZmMzNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.sM7XgWHFFDJH7zRo0vqYTDRqbVZ9CuqnpB33eNvA_gs'
    }
  };

  fetch('https://api.themoviedb.org/3/tv/popular?language=en-US&page=1', options)
    .then(response => response.json())
    .then(response => {
      setData(response);
      setLoading(false);
    })
    .catch(err => {
      console.error(err);
      setLoading(false);
    });

  return (
    <div className='min-h-screen flex items-center justify-center p-32'>
      {loading ? (
        <p className="max-w-5xl w-full mx-auto p-8 bg-white rounded-lg shadow-md text-center">Carregando informações</p>
      ) : (
        data && data.results && data.results.length > 0 ? ( // Verifica se há dados antes de mapear
          <div>
            {data.results.map((item) => (
              <div key={item.id}>
                <p><strong>Name:</strong> {item.name}</p>

              </div>
            ))}
          </div>
        ) : (
          <p className="max-w-5xl w-full mx-auto p-8 bg-white rounded-lg shadow-md text-center">Nenhum dado encontrado</p>
        )
      )}
    </div>
  );
}
