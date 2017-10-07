import React, { Component } from "react";
//import PropTypes from 'prop-types'
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as actions from "../actions";
import styled from 'styled-components';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import ListOfCities from "../components/ListOfCities";
import WeatherCard from "../components/WeatherCard";

const Content = styled.div`
  display: flex;
  flex-direction: row;
  border: 2px solid black;
  border-radius: 5px;
  margin-left:100px;
  margin-right:100px;

  >div:nth-child(1){
   margin-left:20px;
   margin-bottom:10px;
  }

  >div:nth-child(2){
    margin-left: 30px;
  }
`;

class App extends Component {

  componentWillMount() {
    this.props.actions.getWeather();
  }


  render() {
    return (
      <MuiThemeProvider>
       <div>
        {this.props.isFetching ? (
          <h2>Loading...</h2>
        ) : (
        <Content>
          <ListOfCities {...this.props}/>
          <WeatherCard {...this.props} />
        </Content>

        )}
       </div>
      </MuiThemeProvider>
    );
  }
}

const mapStateToProps = state => {
  return {
    ...state
  };
};
const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(actions, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
