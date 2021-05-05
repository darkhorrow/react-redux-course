const starWarsReducer = (state = {lastPage: 'https://swapi.dev/api/people/', characters: []}, action) => {
    switch (action.type) {
      case "UPDATE_PAGE":
        return action.payload.lastPage;

      case "ADD_CHARACTERS":
        return [...state.characters, ...action.payload.characters]
  
      default:
        return state;
    }
};
  
export default starWarsReducer;  