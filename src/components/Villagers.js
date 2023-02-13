import React from "react";

function Villagers({villagerInfo}){
    
    const villagerCard =
        villagerInfo.map((villager) => (
            <div key={villager.name} className="card">
                <img src={villager.image} alt={villager.name}/>
                <h2>{villager.name}</h2>
                <ul>{villager.about.map((info) => (
                <div>
                    <li key={info.type}>{info.type}</li>
                    <li key={info.birthday}>{info.birthday}</li>
                    <br></br>
                    </div>
                ))}</ul>
            </div>
            )
        );

    return(
        <div className="Villagers">
            <h1>Villagers on My Island</h1>
                {villagerCard}
        </div>
    )
}

export default Villagers;