const reducer = (state = {
    heroes: { 
      heroes: [], 
      inputs: {name: '', description: ''},
    },
    beer: {
      range: [0, 6]
    },
    starWars: {
      lastPage: 'https://swapi.dev/api/people/', 
      characters: []
    },
  }, action) => {
  switch (action.type) {
      case "UPDATE_HEROES":
          state.heroes = {
              heroes: action.payload.heroes, 
              inputs: state.heroes.inputs
          };
          return state;
      
      case "CHANGE_INPUT":
          state.heroes = {
              heroes: state.heroes.heroes,
              inputs: action.payload.inputs
          }
          return state;

      case "UPDATE_RANGE":
        state.beer.range = action.payload.range;
        return state;

      case "UPDATE_PAGE":
        state.starWars.lastPage = action.payload.lastPage;
        return state;

      case "ADD_CHARACTERS":
        state.starWars.characters = [...state.starWars.characters, ...action.payload.characters];
        return state;
  
      default:
          return state;
  }
};

export default reducer;  