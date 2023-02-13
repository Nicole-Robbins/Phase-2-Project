import React from "react";

function Villagers({villagerInfo}){
    
    const villagerCard = (() => {
        villagerInfo.map((villager) => 
            <div key={villager.name}>
                {villager.image}
                <h2>{villager.name}</h2>
                <ul>{villager.about.map((info) => (
                <li key={info.type}>{info.birthday}{info.type}</li>
                ))}</ul>
            </div>
        )
    });

    return(
        <div className="Villagers">
            <h1>Villagers on My Island</h1>
                {villagerCard}
        </div>
    )
}

export default Villagers;