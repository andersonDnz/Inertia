import { promises } from "dns";

interface ApiData {
  title: string;
}

export async function getData(): Promise<ApiData> {
  const url = 'https://movies-tv-shows-database.p.rapidapi.com/?title=Harry%20Potter';
  const options = {
    method: 'GET',
    headers: {
      Type: 'get-movies-by-title',
      'X-RapidAPI-Key': 'd64c24e974msh1b540dd739731cfp17cf45jsn5d6be5acb5e1',
      'X-RapidAPI-Host': 'movies-tv-shows-database.p.rapidapi.com'
    }
  };
  const response = await fetch(url, options);

  if (!response.ok) {
    throw new Error('Falha ao obter dados da API');
  }

  return response.json() as Promise<ApiData>;

}