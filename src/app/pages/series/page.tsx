'use client'

import { useState, useEffect } from "react";
import Image from "next/image";




interface Character {
  id: number;
  name: string;
  first_air_date: number;
  overview: string;
  poster_path: any;
}

interface ApiResponse {
  results: Character[];
}



export default function TvShow() {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<ApiResponse | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const options = {
          method: 'GET',
          headers: {
            accept: 'application/json',
            Authorization: 'bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhNmM0N2E1MjQ1ZWE2Yzc1NGM0YWNiMDliMzczYzQwMyIsInN1YiI6IjYzMDQwNWE2MjExMThmMDA3ZDMyZmMzNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.sM7XgWHFFDJH7zRo0vqYTDRqbVZ9CuqnpB33eNvA_gs'
          }
        };

        const response = await fetch('https://api.themoviedb.org/3/discover/tv?include_adult=false&language=en-US&page=1&sort_by=popularity.desc', options);
        const responseData = await response.json();
        console.log(responseData)
        setData(responseData);
        console.log(response)
        setLoading(false);
      } catch (err) {
        console.error(err);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div className='min-h-screen flex items-center justify-center p-32'>
      {loading ? (
        <p className="max-w-5xl flex w-full mx-auto p-8 bg-white rounded-lg shadow-md text-center">Carregando informações</p>
      ) : (
        data && data.results && data.results.length > 0 ? (
          <div className="flex flex-wrap justify-center p-8 max-w-screen-xl mx-auto">
            {data.results.map((item) => (
              <div key={item.id}>
                <section className="max-w-5xl w-full max-h-screen  mx-auto p-8 bg-white rounded-lg shadow-md text-center mb-4">
                  <h1 className="">
                    {item.name}
                    <p>{item.first_air_date}</p>
                    <p>
                      {item.overview}
                    </p>
                  </h1>
                  {item.poster_path && (
                    <div>
                      <Image
                        src={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
                        alt={`Poster de ${item.name}`}
                        width={150}
                        height={300}
                        style={{ height: 'auto', width: 'auto' }}
                      />
                    </div>
                  )}
                </section>
              </div>
            ))}
          </div>
        ) : (
          <p className="max-w-5xl flex w-full mx-auto p-8 bg-white rounded-lg shadow-md text-center">Nenhum resultado encontrado</p>
        )
      )}
    </div>

  );
}

