import React from 'react';
import {Tile} from "../Shared/Tile";
import CoinImage from "../Shared/CoinImage";
import {AppContext} from "../App/AppProvider";
import styled from "styled-components";

const SpotlightName = styled.h2`
    text-align:center;
`

export default function(){
    return (
        <AppContext.Consumer>
            {({currentFavorite, coinList}) =>
            <Tile> 
                <SpotlightName>
                {coinList[currentFavorite].CoinName} </SpotlightName>
                <CoinImage spotlight coin={coinList[currentFavorite]}/>
                </Tile>
        
        }
        </AppContext.Consumer>
    )
}