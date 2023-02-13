import React from "react";

function Villagers({villagerInfo}){
    
    const villagerCard =
        villagerInfo.map((villager) => (
            <div key={villager.id} className="card">
                <img src={villager.image} alt={villager.name} style={{
            resizeMode: 'contain',
          }}/>
                <h2>{villager.name}</h2>
                <ul>{villager.about.map((info) => (
                <div>
                    <li key={info.type}>Type: {info.type}</li>
                    <li key={info.birthday}>Birthday: {info.birthday}</li>
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