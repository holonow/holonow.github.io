import React from 'react';
import { RecoilRoot } from 'recoil';
import {
  HashRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';

import AppEffect from './components/AppEffect';
import GlobalStyle from './components/GlobalStyle';
import LiveTextList from './components/LiveTextList';
import LiveFancyList from './components/LiveFancyList';
import NavBar from './components/NavBar';
import About from './components/About';
import Settings from './components/Settings';

function App() {
  return (
    <Router>
      <GlobalStyle />
      <RecoilRoot>
        <AppEffect />
        <div className="App">
          <NavBar />
          <main>
            <Switch>
              <Route path="/text">
                <LiveTextList />
              </Route>
              <Route path="/about">
                <About />
              </Route>
              <Route exact path="/">
                <LiveFancyList />
              </Route>
            </Switch>
            <Settings />
          </main>
        </div>
      </RecoilRoot>
    </Router>
  );
}

export default App;
