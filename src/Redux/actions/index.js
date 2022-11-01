const setCharacterInfo = (char) => ({
  type: 'SET_CHARACTER_DETAILS',
  payload: char,
});

export function getCharacterDetails(id) {
  const url = 'https://thronesapi.com/api/v2/Characters/';
  return async (dispatch) => {
    try {
      const result = await fetch(`${url}${id}`);
      const data = await result.json();
      dispatch(setCharacterInfo(data));
    } catch (error) {
      console.error(error.message);
    }
  }
}
