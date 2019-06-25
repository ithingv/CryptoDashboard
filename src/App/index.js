import React,  { Component } from 'react';
import './App.css';
import AppLayout from "./AppLayout";
import AppBar from "./AppBar";
import {AppProvider} from "./AppProvider";
import Settings from "../Settings";
import Content from "../Shared/Content"
<<<<<<< HEAD
import Dashboard from '../Dashboard';
=======
>>>>>>> 96071395de2d6f3fa574a63af516cf2d40b385df

class App extends Component {
  render(){
  return (
    <AppLayout>
      <AppProvider>
        <AppBar/>
        <Content>
        <Settings/>
<<<<<<< HEAD
        <Dashboard/>
=======
>>>>>>> 96071395de2d6f3fa574a63af516cf2d40b385df
        </Content>
      </AppProvider>
    </AppLayout>
    );
}
}

export default App;
