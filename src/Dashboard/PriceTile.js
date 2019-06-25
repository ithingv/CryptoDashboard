import React from 'react';
import styled, { css } from 'styled-components';
import { SelectableTile } from '../Shared/Tile';
import { fontSize3, fontSizeBig, greenBoxShadow } from '../Shared/Styles';
import { CoinHeaderGridStyled } from '../Settings/CoinHeaderGrid';
import {AppContext} from "../App/AppProvider";

// slice it and take the the first seven characters of that string and then convert that back to a number with this plus symbol 
const numberFormat = number => +(number + '').slice(0, 7);

const JustifiedRight = styled.div`
  justify-self: right;
`;

const JustifiedLeft = styled.div`
  justify-self: left;
`;

const TickerPrice = styled.div`
  ${fontSizeBig};
`;

const ChangePct = styled.div`
  color: greenyellow;
  ${props => props.negative && css`
    color: red;
  `}
`;

const PriceTileStyled = styled(SelectableTile)`
  ${props => props.compact && css`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 5px;
    justify-items: right;
    ${fontSize3}
  `}
    ${props => props.currentFavorite && css`
    ${greenBoxShadow}
    pointer-events: none;
    `}
`;
// if they already have selected a current favorite, They can't click on this tile again


const ChangePercent = ({data}) => {
  return (
    <JustifiedRight>
      <ChangePct negative={data.CHANGEPCT24HOUR < 0} >
        {numberFormat(data.CHANGEPCT24HOUR)}%
      </ChangePct>
    </JustifiedRight>
  );
};

const PriceTileCompact = ({sym, data,currentFavorite, setCurrentFavorite}) => {
  return (
    <PriceTileStyled onClick={setCurrentFavorite} compact currentFavorite={currentFavorite}>
      <JustifiedLeft>{sym}</JustifiedLeft>
      <ChangePercent data={data} />
      <div>
        {numberFormat(data.PRICE)}€
      </div>
    </PriceTileStyled>
  );
};

const PriceTile = ({sym, data, currentFavorite,setCurrentFavorite}) => {
  return (
    <PriceTileStyled onClick = {setCurrentFavorite} currentFavorite={currentFavorite}>
      <CoinHeaderGridStyled>
        <div>{sym}</div>
        <ChangePercent data={data} />
      </CoinHeaderGridStyled>
      <TickerPrice>
        ${numberFormat(data.PRICE)}
      </TickerPrice>
    </PriceTileStyled>
  );
};
// index, to determine whether we want to display a compact tile(second row) or a regular tile(up front row)
export default ({price, index}) => {
  const sym = Object.keys(price)[0];
  const data = price[sym]['USD'];
  // if we're less than five so we're on the first row display the top functional component else display the pricetile compact component 
  const TileClass = index < 5 ? PriceTile : PriceTileCompact;

  return (
      <AppContext.Consumer>
          {({currentFavorite, setCurrentFavorite}) =>   
            <TileClass 
                sym={sym}
                data={data}
                currentFavorite={currentFavorite === sym}
                setCurrentFavorite={() => setCurrentFavorite(sym)}
                >
                </TileClass>
          }
    </AppContext.Consumer>
  );
}