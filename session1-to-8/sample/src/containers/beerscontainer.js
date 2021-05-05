import Beers from "../components/beer/beer";
import { connect } from "react-redux";

const mapStateToProps = state => {
  return {
    myRange: state.beer.range
  };
};

const mapDispatchToProps = dispatch => {
  return {
    changeRange: range => {
      dispatch({ type: "UPDATE_RANGE", payload: { range: range } });
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Beers);