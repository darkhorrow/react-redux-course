import Heroes from "../components/heroes/heroes";
import { connect } from "react-redux";

const mapStateToProps = state => {
    console.log(state)
  return {
    heroes: state.heroes.heroes,
    inputs: state.heroes.inputs
  };
};

const mapDispatchToProps = dispatch => {
  return {
    addHero: hero => {
        dispatch({ type: "ADD_HERO", payload: { hero: hero } });
    },
    changeInput: inputValues => {
        dispatch({ type: "CHANGE_INPUT", payload: { inputs: inputValues } });
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Heroes);