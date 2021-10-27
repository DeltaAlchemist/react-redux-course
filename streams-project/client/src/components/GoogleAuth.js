import React from 'react';

class GoogleAuth extends React.Component {

    state = { isSignedIn: null };

    componentDidMount() {
        window.gapi.load('client:auth2', () => { // loading library
            window.gapi.client.init({ // init returns a promisse and initialize library
                clientId: '282579810750-jglv5eft0q4tdh94ivol5033eh705peg.apps.googleusercontent.com',
                scope: 'email',
            })
            .then(() => { // invoked after a library has successfully initialized itself
               this.auth = window.gapi.auth2.getAuthInstance();
               this.setState({ isSignedIn: this.auth.isSignedIn.get() }); 
               this.auth.isSignedIn.listen(this.onAuthChange);
            });
        });
    }

    onAuthChange = () => {
        this.setState({ isSignedIn: this.auth.isSignedIn.get() })
    }

    renderAuthButton() {
        if (this.state.isSignedIn === null) {
            return <div>I don't know if we are signed in</div>
        } else if (this.state.isSignedIn) {
            return <div>I am signed in!</div>
        } else {
            return <div>I am not signed in</div>
        }
    }

    render() {
        return <div>{this.renderAuthButton()}</div>
    }
}

export default GoogleAuth;