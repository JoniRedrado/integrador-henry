import * as actions from './actions'

const initialState = {
  myFavorites: [],
  allCharacters: [],
}

const rootReducer = ( state = initialState, action) => {
  switch (action.type) {
    
    case actions.ADD_FAV:
      return {...state, allCharacters: [...state.allCharacters, action.payload], myFavorites: [...state.allCharacters, action.payload] }
      //return { ...state, myFavorites: [...state.myFavorites, action.payload], allCharacters: action.payload };

    case actions.REMOVE_FAV:
      //let numId = action.payload + 0
      //return {...state, myFavorites: state.myFavorites.filter(char => char.id !== numId)}
      return { ...state, myFavorites: action.payload };

    case actions.FILTER:
      if(action.payload === "All") return {...state, myFavorites: state.allCharacters}
      const filterCopy = [...state.allCharacters]
      return {...state, myFavorites: filterCopy.filter(char => char.gender === action.payload)}
    
    case actions.ORDER:
      const orderCopy = [...state.allCharacters]
      if (action.payload === "A") {orderCopy.sort((a, b) => a.id - b.id)};
      if (action.payload === "D") {orderCopy.sort((a, b) => b.id - a.id)};
      return {...state, myFavorites: orderCopy}
    
    default:
      return state
  }
}

export default rootReducer;