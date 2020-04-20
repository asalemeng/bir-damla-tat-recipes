import "./App.css";
import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Recipes from "./pages/Recipes";
import SingleRecipe from "./pages/SingleRecipe";
import Default from "./pages/Default";
import Navbar from "./components/Navbar";

class App extends Component {
  render() {
    return (
      <Router>
        <main>
          {/* { navbar } */}
          <Navbar />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/Recipes" component={Recipes} />
            <Route path="/Recipes/:id" component={SingleRecipe} />
            <Route path="/SingleRecipe" component={SingleRecipe} />
            <Route component={Default} />
          </Switch>
        </main>
      </Router>
    );
  }
}

export default App;
