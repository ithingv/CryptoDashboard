import React from 'react';
import WelcomeMessage from './WelcomeMessage';
import ConfirmButton from "./ConfirmButton";
import Page from "../Shared/Page";
import CoinGrid from "./CoinGrid";
<<<<<<< HEAD
import Search from "./Search";
=======
>>>>>>> 96071395de2d6f3fa574a63af516cf2d40b385df

export default function(){
  return   <Page name="settings">
     <WelcomeMessage/> 
<<<<<<< HEAD
     <CoinGrid topSection/>
     <ConfirmButton/> 
     <Search/>
=======
     <ConfirmButton/> 
>>>>>>> 96071395de2d6f3fa574a63af516cf2d40b385df
     <CoinGrid/>
     </Page>
}