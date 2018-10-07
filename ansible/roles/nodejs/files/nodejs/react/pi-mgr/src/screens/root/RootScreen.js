import React from 'react';
import HomeScreen from '../home';
import DependencyScreen from '../dependency';
import { OffsetDiv } from './styled';
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom';
import { withRouter } from 'react-router-dom';

class RootScreen extends React.Component {
  constructor(props) {
    super(props);
  }
  componentWillMount() {
    // this.props.history.listen(()=> {
    //   console.log('New URL:', this.props.history.location.pathname);
    // })
    console.log('344');
  }
  shouldComponentUpdate(nextProps, nextState) {
    console.log('12this props', this.props);
    console.log('12ext props', nextProps);
    return true;
  }

  render() {
    console.log('345');
    return (
      <OffsetDiv isVisible={this.props.isVisible}>
        <Switch>
          <Route path='/' exact component={HomeScreen}/>
          <Route path='/dependency' component={DependencyScreen}/>
          <Route component={HomeScreen}/>
        </Switch>
      </OffsetDiv>
    );
  }

}

export default RootScreen;
