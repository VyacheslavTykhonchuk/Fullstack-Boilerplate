import React, { Component } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import { HashRouter as Router } from 'react-router-dom';

axios.defaults.baseURL = 'http://localhost:5000';

export default class Root extends Component {
  get content() {
    return <Router>{this.props.routes}</Router>;
  }

  render() {
    return <Provider store={this.props.store}>{this.content}</Provider>;
  }
}

Root.propTypes = {
  routes: PropTypes.element.isRequired,
  store: PropTypes.object.isRequired,
};
