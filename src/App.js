import React, { useEffect } from "react";
import { connect } from "react-redux";
import "./App.css";
import Loader from "./Components/Loader/Loader";
import List from "./Container/List";
import { fetchOKRData } from "./Container/redux/actions";

/**
 * 
 * @param {*} props 
 * @returns Loader component when fetching the data and List component 
 * fetching is done
 */

function App(props) {
  const { isLoading, fetchOKRData } = props;

  /**
   * dispatch fetchOKRData action 
   */
  useEffect(() => {
    fetchOKRData();
  }, [fetchOKRData]);

  return (
    <div className="App">
      <header className="App-header"> Objectives &amp; Key Results </header>
      {isLoading ? <Loader /> : <List />}
    </div>
  );
}

const mapStateToProps = (state) => ({
  isLoading: state.listReducer.isLoading,
});

const mapDispatchToProps = (dispatch) => {
  return {
    fetchOKRData: () => dispatch(fetchOKRData()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
