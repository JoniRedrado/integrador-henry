import * as actions from './actions'

const initialState = {
  myFavorites: []
}

const rootReducer = ( state = initialState, action) => {
  switch (action.type) {
    case actions.ADD_FAV:
      return {...state, myFavorites: [...state.myFavorites, action.payload] }
    case actions.REMOVE_FAV:
      let numId = action.payload + 0
      return {...state, myFavorites: state.myFavorites.filter(char => char.id !== numId)}
    default:
      return state
  }
}

export default rootReducer;