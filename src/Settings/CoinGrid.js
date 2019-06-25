import React from 'react';
<<<<<<< HEAD
import styled from 'styled-components';
import { AppContext } from '../App/AppProvider';
import CoinTile from './CoinTile';

export const CoinGridStyled = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(130px, 1fr));
  grid-gap: 15px;
  margin-top: 30px;
`;
const getLowerSectionCoins = (coinList, filteredCoins) => {
  return (filteredCoins && Object.keys(filteredCoins)) || Object.keys(coinList).slice(0, 100);
};

const getCoinsToDisplay = (coinList, topSection, favorites, filteredCoins) => {
  return topSection ? favorites : getLowerSectionCoins(coinList, filteredCoins);
};
// we can check to make sure that we actually have filtered coins and if we do have filtered
// coins and others the user has set filtered coins we want


export default function({topSection}) {
  return (
    <AppContext.Consumer>
      {({coinList, favorites, filteredCoins}) => (
        <CoinGridStyled>
          {getCoinsToDisplay(coinList, topSection, favorites, filteredCoins).map(coinKey => {
             return (
              <CoinTile key={coinKey}
                topSection={topSection}
                coinKey={coinKey}
                key={coinKey}
              />
            );
          })}
        </CoinGridStyled>
      )}
    </AppContext.Consumer>
  );
}
=======
import styled, {css} from 'styled-components';
import {AppContext} from "../App/AppProvider"

export const CoinGridStyled = styled.div`
    display: grid;
    grid-template-columns: repeat(5, 1fr);
`

export default function(){
    return <AppContext.Consumer>
        {({coinList}) => <CoinGridStyled>
            {Object.keys(coinList).map(coinKey =><div>{coinKey} </div>)}
            </CoinGridStyled>}
        </AppContext.Consumer>    
}
>>>>>>> 96071395de2d6f3fa574a63af516cf2d40b385df
