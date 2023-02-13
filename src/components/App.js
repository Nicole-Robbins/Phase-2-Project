import React from 'react';
import {Switch, Route} from 'react-router-dom';
import '../App.css';
import NavBar from "./NavBar";
import Home from "./Home";
import Villagers from "./Villagers";
import Nooks from "./Nooks";

function App() {
  return (
    <div className="App">
            <NavBar />
            <Switch>
                <Route path="/villagers">
                    <Villagers />
                </Route>
                <Route path="/nooks">
                    <Nooks />
                </Route>
                <Route exact path="/home">
                    <Home />
                </Route>
            </Switch>
    </div>
  );
}

export default App;
