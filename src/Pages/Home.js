import React, { Component } from 'react';
import allCharacters from '../data';
// import { Link } from 'react-router-dom';
import './Home.css';

class Home extends Component {
  handleClick = (id) => {
    const { history } = this.props;
    history.push(`/character/${id}`)
  };

  render() {
    return (
      <main className="main-container">
        <section className="link-container">
          {
            allCharacters.map((chacarter, index) => (
              <button
                type="button"
                key={ `${index}${chacarter.fullName}` }
                className="button"
                onClick={ () => this.handleClick(chacarter.id) }
              >
                { chacarter.fullName }
              </button>
              // <Link
              //   to={ `/character/${chacarter.id}` }
              //   key={ `${index}${chacarter.fullName}` }
              //   className="link"
              // >
              //   {chacarter.fullName}
              // </Link>
            ))
          }
        </section>
      </main>
    );
  }
}

export default Home;
