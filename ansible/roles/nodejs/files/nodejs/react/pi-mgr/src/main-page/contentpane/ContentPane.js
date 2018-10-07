import React, { Component } from 'react';
import './content-pane.css';
import { store } from '../../state/store';

class DefaultContentPane extends Component {
  render() {
    return ( 
      <div className='w3-row w3-padding-64'>
        <div className='w3-twothird w3-container'>
          <h1 className='w3-text-teal'>Heading</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum
        dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
        </div>
        <div className='w3-third w3-container'>
          <p className='w3-border w3-padding-large w3-padding-32 w3-center'>AD</p>
          <p className='w3-border w3-padding-large w3-padding-64 w3-center'>AD</p>
        </div>
      </div>
    )
  }
}

export default class ContentPane extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const contentRender = this.props.contentRender || <DefaultContentPane/>;
    console.log('---', contentRender);
    console.log(store.getState());
    return (
      <div className='w3-main' style={{marginLeft:'250px'}}>
        {contentRender}
      </div>
      );
  }

}
