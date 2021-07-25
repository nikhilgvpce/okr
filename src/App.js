import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import "./App.css";
import Loader from "./Components/Loader/Loader";
import List from "./Container/List";
import { fetchOKrData } from "./Container/redux/actions";

function App(props) {
  const { isLoading, fetchOKrData } = props;

  useEffect(() => {
    fetchOKrData();
  }, []);

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
    fetchOKrData: () => dispatch(fetchOKrData()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
