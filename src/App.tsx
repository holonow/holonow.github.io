import React from 'react';
import { RecoilRoot } from 'recoil';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';

import './App.css';
import AppEffect from './components/AppEffect';
import LiveTextList from './components/LiveTextList';
import LiveFancyList from './components/LiveFancyList';
import NavBar from './components/NavBar';

function App() {
  return (
    <Router>
      <RecoilRoot>
        <AppEffect />
        <div className="App">
          <NavBar />
          <header className="App-header">
            <h1>Holo Now</h1>
            <p>
              A Tool to Watch Hololive
            </p>
            <p>
              (Coming soon)
            </p>
          </header>
          <Switch>
            <Route path="/text">
              <LiveTextList />
            </Route>
            <Route path="/">
              <LiveFancyList />
            </Route>
          </Switch>
        </div>
      </RecoilRoot>
    </Router>
  );
}

export default App;
