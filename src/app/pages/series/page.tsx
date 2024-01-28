'use client'

import { getData } from '@/app/routes'
import React, { useEffect, useState } from 'react'


const MyComponent = () => {
  const [apiData, setApiData] = useState(null)
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getData();

        setApiData(data)
      } catch (error) {
        console.error('Erro ao buscar dados:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className='min-h-screen flex items-center justify-center p-32'>
      <div>
        <h1>Meus Dados da API</h1>
        {apiData && <p>{apiData}</p>}
      </div>

    </div>
  );
};

export default MyComponent;