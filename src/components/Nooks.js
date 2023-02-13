import React, {useState} from "react";

function Nooks({inventoryList, setYourInventory}){
    const [purchasedItem, setPurchaseItem] = useState('');
    
    const itemList = 
     inventoryList.map((item) => (
        <div key={item.name} className="card">
            <h2>{item.name}</h2>
            <ul>
                <li>{item.cost} bells</li>
                <li>{item.type}</li>
            </ul>
        </div>
    ))

    const inventoryDropdown =
        inventoryList.map((item) => (
            <option key={item.cost} value={item.name}>{item.name}</option>
        ));

    function handleChange(event){
        setPurchaseItem(event.target.value);  
    }    

    function handleForm(event){
        event.preventDefault();
        const newItem = {name: purchasedItem};
        fetch("http://localhost:3000/yourinventory", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(newItem),
        })
        .then(r => r.json())
        .then(newItem => setYourInventory(newItem))
    }


    return(
        <div className="Nooks">
            <h1>Welcome to Nooks Cranny!</h1>
            <h2>Browse our offerings to add to your Inventory.</h2>
            <form onSubmit={handleForm}>
                <label>
                Buy Something!
                    <select onChange={handleChange} name="buy" className="dropdown">
                        {inventoryDropdown}
                    </select>
                </label>
            </form>
            <br></br>
            {itemList}
        </div>
    )
}

export default Nooks;