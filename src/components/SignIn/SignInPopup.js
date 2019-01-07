import React, { Component } from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';

export default class SignInPopup extends Component {
  state = {
    open: true,
  };

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  render() {
    return (
        <div>
          <Dialog
              open={this.state.open}
              onClose={this.handleClose}
              disableBackdropClick={true}
          >
            <DialogTitle>Sign In Form</DialogTitle>
            <DialogContent>
              {this.props.children}
            </DialogContent>
          </Dialog>
        </div>
    );
  }
}
