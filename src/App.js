import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './Pages/Home';
import CharacterDetails from './Pages/CharacterDetails';
import NotFound from './Pages/NotFound';

class App extends React.Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={ Home } />
        <Route path="/character/:id" component={ CharacterDetails } />
        <Route path="*" component={ NotFound } />
      </Switch>
    );
  }
}

export default App;
