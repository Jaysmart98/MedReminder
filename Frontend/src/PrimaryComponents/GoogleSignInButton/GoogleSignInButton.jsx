import React, { useEffect, useRef } from 'react';


const CLIENT_ID = "743434141564-4etqgg86dvg7047r9tc4hd0u61au0p2o.apps.googleusercontent.com"; 

function GoogleSignInButton({ onSignInSuccess }) {
  const buttonRef = useRef(null);

  const handleCredentialResponse = (response) => {
    const token = response.credential;
    onSignInSuccess(token);
    
    console.log("Encoded JWT ID token:", token);
  };

  useEffect(() => {
    if (window.google) {
      window.google.accounts.id.initialize({
        client_id: CLIENT_ID,
        callback: handleCredentialResponse,
      });
      window.google.accounts.id.renderButton(
        buttonRef.current,
        { 
          theme: "outline", 
          size: "large", 
          text: "continue_with",
          width: 400,
        } 
      );
    }
  }, []);

  return (
    <div ref={buttonRef} />
  );
}

export default GoogleSignInButton;