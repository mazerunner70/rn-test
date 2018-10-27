import React from 'react';
import Popup from 'reactjs-popup';


export default class ModalPopup extends React.Component {
   render() {
    console.log('034', this.props);
    return (
      <div>
        <Popup 
          open={this.props.open}
          closeOnDocumentClick
          onClose={this.props.handleClose}>
          <div>Raspberry Pi manager</div>
        </Popup>
      </div>     
    )
  }
}