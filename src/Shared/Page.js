import React from 'react';
import {AppContext} from "../App/AppProvider";

export default function ({name, children}){
   // extract that page from the props and then it will check if the page is not equal
   // to the name which is going to be the prop that you pass in at the component level
   return <AppContext.Consumer>
    {({page}) => {
        if (page !== name) {
            return null;
        }
        return <div> {children} </div>;
    }}
    </AppContext.Consumer>;
}