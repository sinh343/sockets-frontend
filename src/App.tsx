import React from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import './App.css';
import { Button } from 'components/Button';
import { PageURI } from 'models/enums';
import { Home } from 'pages/home';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header className="App-header">
          <Button />
        </header>
        <Switch>
          <Route path={PageURI.HOME} exact>
            <Home />
          </Route>
          <Route path={PageURI.CONNECT4}>
            <h1>under construction...</h1>
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
