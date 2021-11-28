import { connect } from "react-redux";
import { handleInitialData } from "../actions/shared";
import React, { Component } from "react";
import Login from "./Login";
class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData());
  }

  render() {
    return <Login />;
  }
}

const mapStateToProps = ({ authedUser }) => {
  return {
    loading: authedUser === null,
  };
};

export default connect(mapStateToProps)(App);
