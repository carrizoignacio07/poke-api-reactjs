import { useState, useEffect } from "react";
import {Pokemon} from './Pokemon.jsx'
import './App.css'

export const PokeAPI = () => {
  const [pokemons, setPokemons] = useState([]);
  useEffect(() => {
    const getPokemons = async (url) => {
      let res = await fetch(url),
        json = await res.json();
      json.results.forEach(async (el) => {
        let res = await fetch(el.url),
          json = await res.json();
        let pokemon = {
          id: json.id,
          name: json.name,
          avatar: json.sprites.front_default,
        };
        setPokemons((pokemons) => [...pokemons, pokemon]);
      });
    };

    getPokemons("https://pokeapi.co/api/v2/pokemon/");
  }, []);

  return (
    <section className="p-5 m-7 flex flex-row justify-stretch flex-wrap gap-x-8">
      {pokemons.length === 0 ? (
        <h3>Cargando...</h3>
      ) : (
        pokemons.map((el) => (
          <Pokemon className="" key={el.id} name={el.name} avatar={el.avatar} />
        ))
      )}
    </section>
  );
}