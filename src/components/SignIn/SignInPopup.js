import React, { Component } from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import SignInFormContainer from '../../containers/forms/SignInForm';

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
    console.log(this.props);
    return (
        <div>
          <Dialog
              open={this.state.open}
              onClose={this.handleClose}
              disableBackdropClick={true}
          >
            <DialogTitle>Sign In Form</DialogTitle>
            <DialogContent>
              <SignInFormContainer handleSubmit={this.props.handleSubmit}/>
            </DialogContent>
            <DialogActions>
              {/*<Button onClick={this.props.onClose} color="primary">*/}
                {/*Cancel*/}
              {/*</Button>*/}
            </DialogActions>
          </Dialog>
        </div>
    );
  }
}
