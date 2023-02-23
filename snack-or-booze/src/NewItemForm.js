import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { Card, CardBody } from "reactstrap";

// this form makes its own state object that stores information about the
// new item, then sends it to the server using the addItem function defined in 
// app.js and the state attached
//  addItem is passed from app to make the api call and add newItem to database
// title is passed to make it generic (can be either "drinks" or "snacks")
function NewItemForm({title, addItem}) {
    const history = useHistory()
    const defaultItem = {id:'', name:'',description:'', recipe:'',serve:''}
    const [newItem,setNewItem] = useState(defaultItem)
  
    const {id, name, description, recipe, serve} = newItem
    
    // handles submit, clears the new item state, and redirects to items list
    const handleSubmit = (evt) =>{
        evt.preventDefault()
        // if any fields are empty, the user is not allowed to continue
        if (!id||!name||!description||!recipe||!serve){
            return alert("you must fill all text areas before submit")
        }

        addItem(newItem, title.toLowerCase())
        setNewItem(defaultItem)
        history.push(`/${title.toLowerCase()}`)

    }

    // handles all form changes generically
    const handleChange = evt => {
        const {name, value} = evt.target
        setNewItem(fdata =>(
            {...fdata,
            [name]:value}
        ))
    }

    return (
    <section className="col-md-8">
      <Card>
        <CardBody className="text-center">
            <h3>New {title}</h3>
          <form onSubmit={handleSubmit}>
            <label htmlFor="id">id:</label>
            <input type="text" id="id" name="id" placeholder="ex. 'creation-name'" value = {id} onChange={handleChange}></input>
            <br></br>
            <label htmlFor="name">name:</label>
            <input type="text" id="name" name="name" placeholder="ex. 'apple'" value = {name} onChange={handleChange}></input>
            <br></br>
            <label htmlFor="description">description:</label>
            <input type="text" id="description" name="description" placeholder="ex. 'very tasty'" value = {description} onChange={handleChange}></input>
            <br></br>
            <label htmlFor="recipe">id:</label>
            <input type="text" id="recipe" name="recipe" placeholder="ex. 'one olive'" value = {recipe} onChange={handleChange}></input>
            <br></br>
            <label htmlFor="serve">serve:</label>
            <input type="text" id="serve" name="serve" placeholder="ex. 'creation-name'" value = {serve} onChange={handleChange}></input>
            
            <input type="submit" value="submit"></input>
          </form>
        </CardBody>
      </Card>
    </section>
  );
}

export default NewItemForm;
