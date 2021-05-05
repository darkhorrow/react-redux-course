import StarWarsGallery from "../components/starwars/starwarsgallery";
import { connect } from "react-redux";

const mapStateToProps = state => {
  return {
    lastPage: state.starWars.lastPage,
    characters: state.starWars.characters
  };
};

const mapDispatchToProps = dispatch => {
  return {
    changePage: page => {
      dispatch({ type: "UPDATE_PAGE", payload: { lastPage: page } });
    },
    addCharacters: characters => {
        dispatch({ type: "ADD_CHARACTERS", payload: { characters: characters } })
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(StarWarsGallery);