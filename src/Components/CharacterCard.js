import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getCharacterDetails } from '../Redux/actions';
import './CharacterCard.css';

class CharacterCard extends Component {
  componentDidMount() {
    const { dispatch, match: { params: { id } } } = this.props;
    dispatch(getCharacterDetails(id));
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

CharacterCard.propTypes = {
  name: PropTypes.string.isRequired,
  imagem: PropTypes.string.isRequired,
  personagens: PropTypes.arrayOf(PropTypes.string).isRequired,
  categoria: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
};

const mapStateToProps = (state) => ({
  charDetails: state.charReducer.charDetails,
});

export default connect(mapStateToProps)(CharacterCard);