const initialState = {
  charDetails: {},
};

function charReducer(state = initialState, action) {
  switch (action.type) {
  case 'SET_CHARACTER_DETAILS':
    return {
      charDetails: action.payload,
    };
  default:
    return state;
  }
}

export default charReducer;
