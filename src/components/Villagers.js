import React, {useState, useEffect} from "react";

function Villagers(){
    const [villagers,setVillagers] = useState([]);
    useEffect(() => {
        fetch("http://localhost:3000/villagers")
            .then((res) => res.json())
            .then((data) => setVillagers(data))
        }, []);
   
    const villagerCard =
        villagers.map((villager) => (
            <div key={villager.id} className="card">
                <img src={villager.image} alt={villager.name} style={{
            resizeMode: 'contain',
          }}/>
                <h2>{villager.name}</h2>
                <ul>
                    <li>Type: {villager.about.type}</li>
                    <li>Birthday: {villager.about.birthday}</li>
                </ul>
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