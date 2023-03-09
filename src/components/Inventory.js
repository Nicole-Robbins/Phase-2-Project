import React from "react";

function Inventory({yourInventory}){
   
    console.log(yourInventory)

    const yourItems = 
    yourInventory.map((item) => (
       <div key={item.id} className="card">
           <h2>{item.name}</h2>
       </div>
   ))
    
    return(
        <div className="Inventory">
            <h1>Your Inventory</h1>
            {yourItems}
        </div>
    )
}

export default Inventory;