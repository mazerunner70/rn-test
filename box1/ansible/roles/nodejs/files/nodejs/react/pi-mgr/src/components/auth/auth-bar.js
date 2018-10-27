import React from 'react';
import { FloatRightDiv } from './styled';

class AppBar extends React.Component {

    constructor(props) {
        super(props);
        console.log('155', props, props.name);
    }

    
    render() {
      console.log('155', this.props, this.props.name);
      return (
             <FloatRightDiv>         
             {
               this.props.isAuthenticated ? 
               <div>Logged in as: {this.props.name}
               <button onClick={this.props.handleLogin}>Logout</button></div> :
               <button onClick={this.props.handleLogin}>Login</button>
             }</FloatRightDiv>
        );
    }
};

export default AppBar;