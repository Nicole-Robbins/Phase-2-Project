import React, {useEffect, useState} from "react";

function Villagers(){
    useEffect(() => {
    fetch("http://localhost:3000/villagers")
        .then((res) => res.json())
        .then((data) => createVillagerCard(data))
  })
    function createVillagerCard(){
        return data.map((villager) => 
            <div key={villager.name}>
                {image}
                <h2>{villager.name}</h2>
                <ul>{villager.about.map((info) => (
                <li key={info.type}>{info.birthday}{info.type}</li>
                ))}</ul>
            </div>
        )
    }

    return(
        <div className="Villagers">
            <h1>Villagers on My Island</h1>
                {createVillagerCard}
        </div>
    )
}

export default Villagers;