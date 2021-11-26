import React from 'react';
import { connect } from 'react-redux';
import { signIn, signOut } from '../redux/actions';

class GoogleAuth extends React.Component {

    componentDidMount() {
        window.gapi.load('client:auth2', () => { // loading library
            window.gapi.client.init({ // init returns a promisse and initialize library
                clientId: '282579810750-jglv5eft0q4tdh94ivol5033eh705peg.apps.googleusercontent.com',
                scope: 'email',
            })
            .then(() => { // invoked after a library has successfully initialized itself
               this.auth = window.gapi.auth2.getAuthInstance();
               this.onAuthChange(this.auth.isSignedIn.get());
               this.auth.isSignedIn.listen(this.onAuthChange);
            });
        });
    }

    onAuthChange = (isSignedIn) => {
        if (isSignedIn) {
            this.props.signIn(this.auth.currentUser.get().getId());
        } else {
            this.props.signOut();
        }
    };

    onSignInClick = () => {
        this.auth.signIn();
    };

    onSignOutClick = () => {
        this.auth.signOut();
    };

    renderAuthButton() {
        if (this.props.isSignedIn === null) {
            return null;
        } else if (this.props.isSignedIn) {
            return (
                <button onClick={this.onSignOutClick} className="ui red google small button">
                    <i className="google icon" />
                    Sign Out
                </button>
            )
        } else {
            return (
                <button onClick={this.onSignInClick} className="ui red google small button">
                    <i className="google icon" />
                    Sign In with Google
                </button>
            )
        }
    }

    render() {
        return <div>{this.renderAuthButton()}</div>
    }
}

const mapStateToProps = (state) => {
    return { isSignedIn: state.auth.isSignedIn };
}

export default connect(
    mapStateToProps, 
    { signIn, signOut }
)(GoogleAuth);