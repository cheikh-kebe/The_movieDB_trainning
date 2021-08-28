import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Header } from "./components/Header";
import { Home } from "./components/Home";
import { Movie } from "./components/Movie";
import { Notfound } from "./components/Notfound";

//styles
import { GlobalStyle } from "./GlobalStyle";

const App = () => {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/:movieId">
            <Movie />
          </Route>
          <Route path="/*">
            <Notfound />
          </Route>
        </Switch>
        <GlobalStyle />
      </Router>
    </div>
  );
};

export default App;
