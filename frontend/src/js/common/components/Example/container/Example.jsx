import React, { Component } from 'react';
import { connect } from 'react-redux';

import { actions as exampleActions } from '../../../../redux/modules/example';
import { exampleSelector } from '../../../../redux/selectors/exampleSelector';
import ExampleView from '../component/ExampleView';

require('../../../../../style/index.css');

const mapStateToProps = (state) => ({
  example: exampleSelector(state),
});
const mapDispatchToProps = {
  ...exampleActions,
};
@connect(
  mapStateToProps,
  mapDispatchToProps
)
class Example extends Component {
  componentDidMount() {
    this.props.getAwesomeCode();
  }
  render() {
    return <ExampleView {...this.props} />;
  }
}

export default Example;
