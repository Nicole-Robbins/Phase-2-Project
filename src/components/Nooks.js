import React, {useState} from "react";

function Nooks({inventoryList}){
    const [formData, setFormData] = useState({name: ""});
    
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
        setFormData({
            ...formData,
            [event.target.name]: event.target.value,
        });  
    }    

    function handleSubmit(event){
        event.preventDefault();
        fetch("http://localhost:3000/yourinventory", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                item: formData
            }),
        })
    }


    return(
        <div className="Nooks">
            <h1>Welcome to Nooks Cranny!</h1>
            <h2>Browse our offerings to add to your Inventory.</h2>
            <form onSubmit={handleSubmit}>
                <label>
                Buy Something!
                    <select onChange={handleChange} name="name" className="dropdown" value={formData}>
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