import React, { Component } from 'react';
import allCharacters from '../data';
import { Link } from 'react-router-dom';

class Home extends Component {
  render() {
    return (
      <main>
        {
          allCharacters.map((chacarter, index) => (
            <Link to={ `/character/${chacarter.id}` } key={ `${index}${chacarter.fullName}` }>
              {chacarter.fullName}
            </Link>
          ))
        }
      </main>
    );
  }
}

export default Home;
