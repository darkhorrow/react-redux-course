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
    calculator: {
      calculatorState: 0,
      firstFigure: 0,
      secondFigure: 0,
      result: 0,
      operator: '',
      display: ''
    }
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

      case "UPDATE_CALC_STATE":
        console.log(state.calculator, action.payload);
        state.calculator = {
          calculatorState: action.payload.data.calculatorState ? action.payload.data.calculatorState : state.calculator.calculatorState,
          firstFigure: action.payload.data.firstFigure ? action.payload.data.firstFigure : state.calculator.firstFigure,
          secondFigure: action.payload.data.secondFigure ? action.payload.data.secondFigure : state.calculator.secondFigure,
          result: action.payload.data.result ? action.payload.data.result : state.calculator.result,
          operator: action.payload.data.operator ? action.payload.data.operator : state.calculator.operator,
          display: action.payload.data.display ? action.payload.data.display : state.calculator.display,
        }
        return state;
  
      default:
          return state;
  }
};

export default reducer;  