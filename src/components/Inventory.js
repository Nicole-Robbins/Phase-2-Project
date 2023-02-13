import React from "react";

function Inventory({yourInventory}){
   
    
    return(
        <div className="Inventory">
            <h1>Your Inventory</h1>
            {yourInventory}
        </div>
    )
}

export default Inventory;