import React, { useEffect } from 'react';
import { Logo } from './components/Logo';
import { Searcher } from './components/Search';
import { PokemonList } from './components/ListOfPokemon';
import { Spinner } from './components/Spinner';
import { useSelector, useDispatch, shallowEqual } from 'react-redux';
import { fetchPokemonsWhitDetails, setPokeminInPage } from './slices/dataSlice';
import { setLoading } from './slices/uiSlice';
import { GlobalStyles } from './styles/GlobalStyles';
import { Pagination } from './components/Pagination';

export const App = () => {
  const pokemons = useSelector((state) => state.data.pokemons, shallowEqual);
  const searchedPokemons = useSelector((state) => state.data.pokemonsSearched, shallowEqual);
  const pokemonInPage = useSelector((state) => state.data.pokemonInPage, shallowEqual);
  const valueImputSearch = useSelector((state) => state.ui.valueImputSearch);
  const isLoading = useSelector((state) => state.ui.loading);
  const paginationValues = useSelector((state) => state.data.pagination);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setLoading(true))
    setTimeout(() => {
      dispatch(fetchPokemonsWhitDetails(paginationValues));
      dispatch(setLoading(false))
    }, 0)
  }, [dispatch]);

  useEffect(() => {
    dispatch(setPokeminInPage({ paginationValues, pokemons }));
  }, [paginationValues, pokemons])
  console.log(isLoading)
  return (
    <div className="App">
      <GlobalStyles />
      {isLoading
        ? <Spinner />
        : <>
          <Logo />
          <Searcher />
          <PokemonList pokemons={pokemonInPage} searchedPokemons={searchedPokemons} valueImputSearch={valueImputSearch} />
          <Pagination />
        </>
      }
    </div>

  );
}

