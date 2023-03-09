import React from "react";

function Nooks({inventoryList, handleSubmit, formData, setFormData}){
    
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


    return(
        <div className="Nooks">
            <h1>Welcome to Nooks Cranny!</h1>
            <h2>Browse our offerings to add to your Inventory.</h2>
            <form method="post" onSubmit={handleSubmit}>
                <label>
                Buy Something!
                    <select onChange={handleChange} name="name" className="dropdown" defaultValue="Choose an Item" >
                        {inventoryDropdown}
                    </select>
                    <button type="submit">Purchase</button>
                </label>
            </form>
            <br></br>
            {itemList}
        </div>
    )
}

export default Nooks;