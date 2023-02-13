import React, {useState, useEffect} from 'react';
import {Switch, Route} from 'react-router-dom';
import '../App.css';
import NavBar from "./NavBar";
import Home from "./Home";
import Villagers from "./Villagers";
import Nooks from "./Nooks";


function App() {
  const [villagers,setVillagers] = useState([])

  useEffect(() => {
    fetch("http://localhost:3000/villagers")
        .then((res) => res.json())
        .then((data) => setVillagers(data))
    }, []);

    console.log(villagers)
  
  
  return (
    <div className="App">
            <NavBar />
            <Switch>
                <Route path="/villagers">
                    <Villagers villagerInfo={villagers}/>
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
