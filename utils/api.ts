import axios from 'axios';
import Character from '../interfaces/Character';

export async function fetchCharacters(page?: number): Promise<Character[]> {
  const url = page ? `https://rickandmortyapi.com/api/character/?page=${page}` : 'https://rickandmortyapi.com/api/character';
  
  try {
    const response = await axios.get(url);
    return response.data.results;
  } catch (error) {
    console.error('Erro ao buscar personagens:', error);
    return [];
  }
}


export async function filterCharacter(name?: string): Promise<Character[]> {
  const url = name ? `https://rickandmortyapi.com/api/character/?name=${name}` : 'https://rickandmortyapi.com/api/character';
  
  try {
    const response = await axios.get(url);
    return response.data.results;
  } catch (error) {
    console.error('Erro ao buscar personagens:', error);
    return [];
  }
}

export async function filterCharacterByID(id?: string): Promise<Character> {
  const url = id ? `https://rickandmortyapi.com/api/character/${id}` : 'https://.com/api/character';
  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    console.error('Erro ao buscar personagens:', error);
    return null;
  }
}