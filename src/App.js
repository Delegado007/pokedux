import React, { useEffect } from 'react';
import { Logo } from './components/Logo';
import { Searcher } from './components/Search';
import { PokemonList } from './components/ListOfPokemon';
import { Spinner } from './components/Spinner';
import { Pagination } from './components/Pagination';
import { Footer } from './components/Footer';
import { useSelector, useDispatch, shallowEqual } from 'react-redux';
import { fetchPokemonsWhitDetails, setPokeminInPage } from './slices/dataSlice';
import { setLoading } from './slices/uiSlice';
import { GlobalStyles } from './styles/GlobalStyles';
import { usePagination } from './Hooks/usePagination';

export const App = () => {
  const pokemons = useSelector((state) => state.data.pokemons, shallowEqual);
  const searchedPokemons = useSelector((state) => state.data.pokemonsSearched, shallowEqual);
  const pokemonInPage = useSelector((state) => state.data.pokemonInPage, shallowEqual);
  const valueImputSearch = useSelector((state) => state.ui.valueImputSearch);
  const isLoading = useSelector((state) => state.ui.loading);
  const paginationValues = useSelector((state) => state.pagination.pagination);
  const dispatch = useDispatch();
  const props = usePagination();

  useEffect(() => {
    dispatch(setLoading(true))
    dispatch(fetchPokemonsWhitDetails(paginationValues));
    setTimeout(() => {
      dispatch(setLoading(false))
    }, 2000)
  }, [dispatch]);

  useEffect(() => {
    dispatch(setPokeminInPage({ paginationValues, pokemons }));
  }, [paginationValues, pokemons])

  return (
    <div className="App">
      <GlobalStyles />
      {isLoading
        ? <Spinner />
        : <>
          <Logo />
          <Searcher />
          {valueImputSearch.length < 2 && <Pagination {...props} />}
          <PokemonList pokemons={pokemonInPage} searchedPokemons={searchedPokemons} valueImputSearch={valueImputSearch} />
          {valueImputSearch.length < 2 && <Pagination {...props} />}
          {/* <Footer /> */}
        </>
      }
    </div>

  );
}

