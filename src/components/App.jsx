import React from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class App extends React.Component {


  render(){
    return (
      <div>
        app works
        <Switch>

        </Switch>
      </div>
    );
  }
}

App.propTypes = {

};

const mapStateToProps = state => {
  return {

  };
};

export default App