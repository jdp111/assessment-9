import React, { useState, useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Home from "./Home";
import SnackOrBoozeApi from "./Api";
import NavBar from "./NavBar";
import { Route, Switch } from "react-router-dom";
import Menu from "./FoodMenu";
import Snack from "./FoodItem";
import NewItemForm from "./NewItemForm";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [menuItems, setMenuItems] = useState({});


// getAll function gets all information from the server. drinks, snacks and other options can
 //then be taken from the object and passed into the menu
  useEffect(() => {
    async function getAll() {
      let items = await SnackOrBoozeApi.getAll();
      setMenuItems(items);
      setIsLoading(false);
    }
    getAll();

  }, []);

  

  

  if (isLoading) {
    return <p>Loading &hellip;</p>;
  }

  // updates the database with the help of the type keyword (snack or drink)
  // and calls post from the api
  const addMenuItem = (newItem, type) => {
    setMenuItems((items)=>{
      items[type].push(newItem)
      return items
    })
    SnackOrBoozeApi.postNew(menuItems)
  }

  //destructures menuItems into the two options
  const {snacks, drinks} = menuItems
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <main>
          <Switch>
            <Route exact path="/">
              <Home snacks={snacks} drinks={drinks} />
            </Route>
            <Route exact path="/snacks">
              <Menu items={snacks} title="Snacks" />
            </Route>
            <Route exact path="/snacks/new">
              <NewItemForm title = "Snacks" addItem = {addMenuItem}/>
            </Route>
            <Route path="/snacks/:id">
              <Snack items={snacks} cantFind="/snacks" />
            </Route>
            <Route exact path="/drinks">
              <Menu items = {drinks} title="Drinks" />
            </Route>
            <Route exact path="/drinks/new">
              <NewItemForm title = "Drinks" addItem = {addMenuItem}/>
            </Route>
            <Route path="/drinks/:id">
              <Snack items = {drinks} cantFind="/drinks" />
            </Route>

            <Route>
              <h3 className="error-code">404</h3>
              <p className="message">Hmmm. I can't seem to find what you want.</p>
            </Route>
          </Switch>
        </main>
      </BrowserRouter>
    </div>
  );
}

export default App;
