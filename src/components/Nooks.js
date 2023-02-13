import React, {useState} from "react";

function Nooks({inventoryList}){
    const [purchasedItem, setPurchaseItem] = useState([]);
    const [choose, setChoose] = useState("Choose an item!");

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
            <option key={item.cost} value={choose}>{item.name}</option>
        ));


    function handleForm(event){
        event.preventDefault();
        setPurchaseItem(event.target.value);
    }


    return(
        <div className="Nooks">
            <h1>Welcome to Nooks Cranny!</h1>
            <h2>Browse our offerings to add to your Inventory.</h2>
            <form onSubmit={handleForm}>
                <label>
                Buy Something!
                    <select onChange={(e) => setChoose(e.target.value)} name="buy" className="dropdown">
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