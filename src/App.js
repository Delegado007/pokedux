import React, { useEffect } from 'react';
import { Logo } from './components/Logo';
import { Searcher } from './components/Search';
import { PokemonList } from './components/ListOfPokemon';
import { useSelector, useDispatch, shallowEqual } from 'react-redux';
import { fetchPokemonsWhitDetails, setPokeminInPage } from './slices/dataSlice';
import { GlobalStyles } from './styles/GlobalStyles';
import { Pagination } from './components/Pagination';

export const App = () => {
  const pokemons = useSelector((state) => state.data.pokemons, shallowEqual);
  const searchedPokemons = useSelector((state) => state.data.pokemonsSearched, shallowEqual);
  const pokemonInPage = useSelector((state) => state.data.pokemonInPage, shallowEqual);
  const valueImputSearch = useSelector((state) => state.ui.valueImputSearch);
  const paginationValues = useSelector((state) => state.data.pagination);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPokemonsWhitDetails(paginationValues));
  }, [dispatch]);

  useEffect(() => {
    dispatch(setPokeminInPage({ paginationValues, pokemons }));
  }, [paginationValues, pokemons])

  return (
    <div className="App">
      <GlobalStyles />
      <Logo />
      <Searcher />
      <PokemonList pokemons={pokemonInPage} searchedPokemons={searchedPokemons} valueImputSearch={valueImputSearch} />
      <Pagination />
    </div>

  );
}

