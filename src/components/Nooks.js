import React from "react";

function Nooks({inventoryList}){
    
    const itemList = 
     inventoryList.map((item) => (
        <div key={item.name}>
            <h2>{item.name}</h2>
            <ul>
                <li>{item.cost} bells</li>
                <li>{item.type}</li>
            </ul>
        </div>
    ))
    return(
        <div className="Nooks">
            <h1>Welcome to Nooks Cranny!</h1>
            <h2>Browse our offerings to add to your Inventory.</h2>
            {itemList}
        </div>
    )
}

export default Nooks;