import React from 'react';
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
              <CoinTile
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