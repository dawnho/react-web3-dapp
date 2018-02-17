// Demo component
// this is only example component
// you can find tests in __test__ folder

import React from 'react';
const PropTypes = require('prop-types');

const propTypes = {
  onChangeAccount: PropTypes.func
};

class Web3Provider extends React.Component {
  componentDidMount() {
    // some logic here - we only test if the method is called
  }
  render() {
    return (
      <div className="Web3Provider">

      </div>
      // <div className="my-component">
      //   <i className="icon-test"></i>
      //   <i className="icon-test"></i>
      //   <i className="icon-test"></i>
      //   <button onClick={this.props.handleClick} type="button"></button>
      // </div>
    )
  }
};

Web3Provider.propTypes = propTypes;

export default Web3Provider;
