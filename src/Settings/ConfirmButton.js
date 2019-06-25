import React from 'react';
import styled from 'styled-components';
import {AppContext} from "../App/AppProvider";
<<<<<<< HEAD
import {fontSize1, greenBoxShadow, color3} from "../Shared/Styles";

const ConfirmButtonStyled = styled.div`
    margin: 20px;
    color: ${color3}
    ${fontSize1}
    cursor: pointer;
    &:hover{
        ${greenBoxShadow}
    }

=======

const ConfirmButtonStyled = styled.div`
    margin: 20px;
    color: green;
    cursor: pointer;
>>>>>>> 96071395de2d6f3fa574a63af516cf2d40b385df
`;

export const CenterDiv = styled.div`
    display: grid;
    justify-content: center;
`;

export default function(){
    return (
        <AppContext.Consumer>
            {({confirmFavorites}) => 
            <CenterDiv>
                <ConfirmButtonStyled onClick={confirmFavorites}>
                    Confirm Faviorites
                </ConfirmButtonStyled>
            </CenterDiv>
        }
        </AppContext.Consumer>
    )
}