import React, { useEffect } from 'react';
import { Logo } from './components/Logo';
import { Searcher } from './components/Search';
import { PokemonList } from './components/ListOfPokemon';
import { useSelector, useDispatch, shallowEqual } from 'react-redux';
import { fetchPokemonsWhitDetails } from './slices/dataSlice';
// import './App.css';

export const App = () => {

  const pokemons = useSelector((state) => state.data.pokemons, shallowEqual);
  const loading = useSelector((state) => state.ui.loading);
  const dispatch = useDispatch();


  useEffect(() => {
    dispatch(fetchPokemonsWhitDetails());
  }, [dispatch]);

  return (
    <div className="App">
      <Logo />
      <Searcher />
      <PokemonList pokemons={pokemons} />
    </div>
  );
}

