import React from 'react';
import { RecoilRoot } from 'recoil';
import './App.css';
import AppEffect from './components/AppEffect';
import LiveTextList from './components/LiveTextList';
import LiveFancyList from './components/LiveFancyList';

function App() {
  return (
    <RecoilRoot>
      <AppEffect />
      <div className="App">
        <header className="App-header">
          <p>
            A Tool to Watch Hololive
          </p>
          <p>
            (Coming soon)
          </p>
        </header>
        <LiveFancyList />
        <LiveTextList />
      </div>
    </RecoilRoot>
  );
}

export default App;
