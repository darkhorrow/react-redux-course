import Calculator from "../components/calculator/calculator";
import { connect } from "react-redux";

const mapStateToProps = state => {
  return {
    reduxCalculatorState: state.calculator.calculatorState,
    reduxFirstFigure: state.calculator.firstFigure,
    reduxSecondFigure: state.calculator.secondFigure,
    reduxResult: state.calculator.result,
    reduxOperator: state.calculator.operator,
    reduxDisplay: state.calculator.display
  };
};

const mapDispatchToProps = dispatch => {
  return {
    updateCalculator: data => {
      dispatch({ type: "UPDATE_CALC_STATE", payload: { data: data } });
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Calculator);