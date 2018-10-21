import React from 'react';


export default class AuthCallback extends React.Component {

  constructor(props) {
    super(props);
    this.handleCallback = this.handleCallback.bind(this);  
  }

  handleCallback = (props) => {
    console.log('392', props);
    this.props.loadAuth();
  }

  componentDidMount() {
    this.handleCallback(this.props);
  }

  componentDidUpdate() {
    this.handleCallback(this.props);
  }

  render() {
    return(
      <div>
        Auth Callback
      </div>
    );
  }
}