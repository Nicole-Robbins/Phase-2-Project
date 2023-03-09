import React, {useState, useEffect} from 'react';
import {Switch, Route} from 'react-router-dom';
import '../App.css';
import NavBar from "./NavBar";
import Home from "./Home";
import Villagers from "./Villagers";
import Nooks from "./Nooks";
import Inventory from './Inventory';


function App() {
  const [items, setItems] = useState([]);
  const [yourInventory, setYourInventory] = useState([]);
  const [formData, setFormData] = useState({name: ""});

  useEffect(() => {
    fetch("http://localhost:3000/inventory")
        .then((res) => res.json())
        .then((data) => setItems(data))
        fetch("http://localhost:3000/yourinventory")
        .then((res) => res.json())
        .then((data) => setYourInventory(data))
    }, []);

    function updateInventory(data){
        setYourInventory([...yourInventory, data])
    }
    
    function handleSubmit(event){
        event.preventDefault();
        fetch("http://localhost:3000/yourinventory", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(
                formData
            ),
        })
        .then (r => r.json())
        .then (data => updateInventory(data))
    }
  
  return (
    <div className="App">
            <NavBar />
            <Switch>
                <Route exact path="/villagers">
                    <Villagers />
                </Route>
                <Route exact path="/nooks">
                    <Nooks inventoryList={items} handleSubmit={handleSubmit} formData={formData} setFormData={setFormData}/>
                </Route>
                <Route exact path="/inventory">
                    <Inventory yourInventory={yourInventory}/>
                </Route>
                <Route path="/">
                    <Home />
                </Route>
            </Switch>
    </div>
  );
}

export default App;
