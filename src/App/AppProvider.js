import React from 'react';

const cc = require('cryptocompare');
export const AppContext = React.createContext();

export class AppProvider extends React.Component{
    constructor(props){
        super(props);
            this.state = {
                page: 'dashboard',
                ...this.saveSettings(),
                setPage: this.setPage,
                confirmFavorites : this.confirmFavorites
            }
    } 
    componentDidMount = () =>{
        this.fetchCoins();
    }
    fetchCoins = async() => {
        let coinList = (await cc.coinList()).Data;
        this.setState({coinList});
    }
    confirmFavorites = () => {
        this.setState({
            firstVisit: false,
            page: 'dashboard'
        });
        localStorage.setItem('cryptoDash', JSON.stringify({
            test: 'hello'
        }));
    }


    // Set up this app provider to default to the dashboard page unless they have no
    // local storage data which means they've never been here before
    // we'll for them onto the settings page going here to our app provider 
    // we're going to create a new function 


    // when we create our initial state we're going to end up overwrtiing some
    // properties here based on whether they have data in their local storage or not
    // when we call this function, it's going to spread the result of that over 
    // the rest of these previous properties here
    saveSettings(){

        // local storage data need to be string values 
        let cryptoDashData = JSON.parse(localStorage.getItem('cryptoDash'));
        if(!cryptoDashData){
            // no data in the local storage
            return { page : 'settings', firstVisit: true}
        // first visit varibale, setting page is being set as default 
        }
        return {};
    }
    setPage = page => this.setState({page})

    render(){
        return <AppContext.Provider value ={this.state}>
            {this.props.children}
        </AppContext.Provider>
    }
}