// import getCharacterDetails from "../../Services/getCharacterInfo";
import { GET_CHARACTER_DETAILS } from "./actionTypes";

const getCharDetails = (data) => ({
  type: GET_CHARACTER_DETAILS,
  payload: data,
});

export function getCharInfo(id) {
  return async (dispatch) => {
    fetch(`https://thronesapi.com/api/v2/Characters/${id}`)
      .then((response) => response.json())
      .then((data) => dispatch(getCharDetails(data))
      .catch((error) => console.error(error.message)))
  };
}

// export const getCharInfo = (id) => async (dispatch) => {
//   const APIURL = `https://thronesapi.com/api/v2/Characters/${id}`;
//   return fetch(APIURL)
//   .then((response) => response.json())
//   .then((data) => dispatch(getCharDetails(data)))
//   // .catch((error) => console.error(error.message)))
// }

// export const getCharInfo = (id) => async (dispatch) => {
//   const APIURL = `https://thronesapi.com/api/v2/Characters/${id}`;
//   try {
//     const response = await fetch(APIURL);
//     const data = await response.json();
//     dispatch(getCharDetails(data));
//   } catch (error) {
//     console.error(error.message);
//   }
//   // .catch((error) => console.error(error.message)))
// }

// export function getCharInfo(id) {
//   return async (dispatch) => {
//     const result = await getCharacterDetails(id);
//     dispatch(getCharDetails(result));
//   }
// }
