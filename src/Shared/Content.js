import React from "react";
import {AppContext} from "../App/AppProvider";

export default function(props){
    return <AppContext.Consumer>
<<<<<<< HEAD
        {({coinList, prices, firstVisit}) => {
            if(!coinList){
                return <div> Loading Coins </div>
            }
            if(!firstVisit && !prices){
                return <div> Loading Prices </div>
            } 
=======
        {({coinList}) => {
            if(!coinList){
                return <div> Loading Coins </div>
            }
>>>>>>> 96071395de2d6f3fa574a63af516cf2d40b385df
            return <div> {props.children} </div>
        }}
        </AppContext.Consumer>
}