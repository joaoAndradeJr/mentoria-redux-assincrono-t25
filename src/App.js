import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './Pages/Home';
import CharacterCard from './Components/CharacterCard';
import NotFound from './Pages/NotFound';

class App extends React.Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={ Home } />
        <Route path="/character/:id" component={ CharacterCard } />
        <Route path="*" component={ NotFound } />
      </Switch>
    );
  }
}

export default App;
