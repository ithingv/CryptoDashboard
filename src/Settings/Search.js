import React from 'react';
import styled from 'styled-components';
import { backgroundColor2, fontSize2 } from '../Shared/Styles';
import { AppContext } from "../App/AppProvider";
// creates a bounce function that delays the function invoking until after a millisecond count
// have elapsed since the last time that the bounced function was invoked
import { debounce, pickBy } from 'lodash';
import fuzzy from 'fuzzy';

const SearchGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, 170px);
`;

const SearchInput = styled.input`
  ${backgroundColor2};
  ${fontSize2};
  color: #fff;
  border: 1px solid;
  border-radius: 3px;
  height: 25px;
  /* place-self: center left; */
  align-self: center;
  justify-self: left;
  text-align:center;
`;

const handlerFilter =  debounce((inputValue, coinList, setFilteredCoins) => {
    // Get all the coin symbols
    let coinSymbols = Object.keys(coinList);
    // Get all the coin names, map symbol to name
    let coinNames = coinSymbols.map(symbol => coinList[symbol].CoinName)
    // Merge symbols and names
    let allStringToSearch = coinSymbols.concat(coinNames);
    // console.log(allStringToSearch);
    // yarn add fuzzy
    let fuzzyResults = fuzzy
        .filter(inputValue, allStringToSearch)
        .map(result => result.string);
    // console.log(fuzzyResults)
    let filteredCoins = pickBy(coinList, (result, symkey) => {
        let coinName = result.CoinName;
        // if our fuzzyResults contains a symbol or the fuzzy results contains that
        // coin name that we're iterating
        return (result.includes(symkey) || result.includes(coinName));
    });

    setFilteredCoins(filteredCoins);
},500);

function filterCoins(e, setFilteredCoins, coinList){
    let inputValue = e.target.value;
    if(!inputValue){ 
        setFilteredCoins(null);
        return;
        // goes back to the first 100 coins
    }
    handlerFilter(inputValue,coinList,setFilteredCoins);
}

export default () => {
  return (
      <AppContext.Consumer>
        {({setFilteredCoins, coinList}) =>
        <SearchGrid>
              <h2>Search coins</h2>
            <SearchInput onKeyUp={(e) => setFilteredCoins(e, setFilteredCoins, coinList)} />
        </SearchGrid>
        }
    </AppContext.Consumer>
  );
};