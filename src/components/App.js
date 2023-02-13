import React, {useState, useEffect} from 'react';
import {Switch, Route} from 'react-router-dom';
import '../App.css';
import NavBar from "./NavBar";
import Home from "./Home";
import Villagers from "./Villagers";
import Nooks from "./Nooks";
import Inventory from './Inventory';


function App() {
  const [villagers,setVillagers] = useState([]);
  const [items, setItems] = useState([]);
  const [yourInventory, setYourInventory] = useState([]);

  useEffect(() => {
    fetch(" http://localhost:3000/villagers")
        .then((res) => res.json())
        .then((data) => setVillagers(data))
    }, []);

    useEffect(() => {
      fetch("http://localhost:3000/inventory")
          .then((res) => res.json())
          .then((data) => setItems(data))
      }, []);
    
      useEffect(() => {
        fetch("http://localhost:3000/your inventory")
            .then((res) => res.json())
            .then((data) => setYourInventory(data))
        }, []);  
  
  
  return (
    <div className="App">
            <NavBar />
            <Switch>
                <Route path="/villagers">
                    <Villagers villagerInfo={villagers}/>
                </Route>
                <Route path="/nooks">
                    <Nooks inventoryList={items}/>
                </Route>
                <Route path="/inventory">
                    <Inventory yourInventory={yourInventory}/>
                </Route>
                <Route exact path="/home">
                    <Home />
                </Route>
            </Switch>
    </div>
  );
}

export default App;
