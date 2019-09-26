import React, { Component } from 'react';
import {connect} from "react-redux";
import {addNavigationHelpers} from "react-navigation";
import AppNavigator from "./TabNavigation";

const mapStateToProps = ({navigator}) => ({navigator});

const AppNavigatorWithNavigationState = ({dispatch, navigator}) => (
  <AppNavigator
    navigator={addNavigationHelpers({
      dispatch,
      state: navigator
    })}
  />
);

const NavigatorRoot = connect(mapStateToProps)(AppNavigatorWithNavigationState);

export default NavigatorRoot;