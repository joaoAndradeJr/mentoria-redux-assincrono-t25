import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getCharInfo } from '../Redux/actions';
import './CharacterCard.css';

class CharacterCard extends Component {
  componentDidMount() {
    const { dispatch, match } = this.props;
    const { params } = match;
    const { id } = params;
    dispatch(getCharInfo(id));
  }

  render() {
    const { charDetails:
      { title, family, imageUrl, firstName, lastName }
    } = this.props;
    return (
      <div className="container">
        <div className="Card">
          <div className="Card__thumbnail">
            <img src={ imageUrl } alt="" />
          </div>
          <div className="Card__body">
            <h1>{title}</h1>
            <p><span>Full Name:</span>{ `${firstName} ${lastName}` }</p>  
            <p><span>Family:</span>{family}</p>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  charDetails: state.character.details,
});

export default connect(mapStateToProps)(CharacterCard);