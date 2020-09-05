import React from 'react';
import { RecoilRoot } from 'recoil';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import styled from '@emotion/styled';

import AppEffect from './components/AppEffect';
import LiveTextList from './components/LiveTextList';
import LiveFancyList from './components/LiveFancyList';
import NavBar from './components/NavBar';

const Main = styled.main`
  padding-left: clamp(.5rem, 2vw, 1rem);
  padding-right: clamp(.5rem, 2vw, 1rem);
`;

function App() {
  return (
    <Router>
      <RecoilRoot>
        <AppEffect />
        <div className="App">
          <NavBar />
          <Main>
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
          </Main>
        </div>
      </RecoilRoot>
    </Router>
  );
}

export default App;
