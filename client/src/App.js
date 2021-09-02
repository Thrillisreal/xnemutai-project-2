import { Route, Switch } from 'react-router-dom'
import React from 'react'
import './App.css';
import WatchList from './pages/WatchList'
// import User from './pages/User'
import Anime from './pages/Anime'


function App() {
  return (
    <div>
      <header>
        <Switch>
     {/* <Route exact path="" component={User}/> */}
     <Route exact path="/anime" component={Anime}/>
     <Route exact path="/watchlist" component={WatchList}/>
     </Switch>
      </header>
    </div>
  );
}

export default App;
