import React from 'react';
import { Button } from '@material-ui/core';
import { GOOGLECLIENTID } from '../config/keys';

function GoogleAuth() {
  const [isSignedIn, setIsSignedIn] = React.useState(null);
  let auth;

  React.useEffect(() => {
    window.gapi.load('client:auth2', () => {
      window.gapi.client
        .init({
          clientId: GOOGLECLIENTID,
          scope: 'email'
        })
        .then(() => {
          auth = window.gapi.auth2.getAuthInstance();
          setIsSignedIn(auth.isSignedIn.get());
          auth.isSignedIn.listen(onAuthChange);
        });
    });
  }, []);

  function onAuthChange() {
    setIsSignedIn(auth.isSignedIn.get());
  }

  function handleSignIn() {
    window.gapi.auth2.getAuthInstance().signIn();
  }

  function handleSignOut() {
    window.gapi.auth2.getAuthInstance().signOut();
  }

  function renderAuthButton() {
    if (!isSignedIn) {
      return (
        <Button onClick={handleSignIn} color="inherit">
          Login
        </Button>
      );
    } else {
      return (
        <Button onClick={handleSignOut} color="inherit">
          Sign Out
        </Button>
      );
    }
  }

  return <div>{renderAuthButton()}</div>;
}

export default GoogleAuth;
