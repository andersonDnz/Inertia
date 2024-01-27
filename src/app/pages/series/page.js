'use client'

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import axios from 'axios';

const SeriesInfo = () => {
  const [movieDetails, setMovieDetails] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMovieDetails = async () => {
      const options = {
        method: 'GET',
        url: 'https://movies-tv-shows-database.p.rapidapi.com/',
        params: {
          movieid: 'tt1375666'
        },
        headers: {
          Type: 'get-movie-details',
          'X-RapidAPI-Key': 'd64c24e974msh1b540dd739731cfp17cf45jsn5d6be5acb5e1',
          'X-RapidAPI-Host': 'movies-tv-shows-database.p.rapidapi.com'
        }
      };

      try {
        const response = await axios.request(options);
        setMovieDetails(response.data);
      } catch (error) {
        console.error('Erro ao chamar a API:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchMovieDetails();
  }, []);

  if (loading) {
    return <p>Carregando...</p>;
  }








  return (
    <div className='min-h-screen flex items-center justify-center p-32 mb-6'>
      <div className='max-w-5xl w-full mx-auto p-8 bg-white rounded-lg shadow-md text-center'>

        {movieDetails && (
          <div>
            <h1 className='text-3xl font-bold mb-4'>{movieDetails.title}</h1>
            <p className='text-gray-600 mb-4'>{movieDetails.description}</p>

          </div>
        )}

        <div className='mr-[100%] p-2 px-2 border w-20 border-blue-600 bg-blue-400 rounded-full text-lg'>
          <Link href="/">
            Voltar
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SeriesInfo;
