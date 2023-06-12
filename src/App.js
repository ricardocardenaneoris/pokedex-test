import React, { useEffect, useState } from 'react';
import axios from 'axios';

const limit = 10
const offset = 0


const App = () => {
  const [pokemonList, setPokemonList] = useState()

  const apiCall = async () => {
    const response = await axios.get<PokemonAPI>(`https://pokeapi.co/api/v2/pokemon/?limit=${limit}&offset=${offset}`);
    const data = response.data;
    return data?.results
  }

  useEffect(() => {
    setPokemonList(apiCall())
  },[])

  return <div>
    <h1>Pokedex</h1>
    <ul>
      {pokemonList?.map((x, i) => {
        return <li key={i}>{x.name}</li>
      })}
    </ul>
  </div>
}

export default App