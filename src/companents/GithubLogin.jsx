// src/components/GitHubLogin.js
import React from "react";
import { auth, GithubAuthProvider, signInWithPopup } from "../companents/firebase";

const GitHubLogin = () => {
  const handleGitHubLogin = async () => {
    const provider = new GithubAuthProvider();
    try {
      const result = await signInWithPopup(auth, provider);
      const credential = GithubAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      const user = result.user;
      console.log("User: ", user);
      console.log("Token: ", token);
    } catch (error) {
      if (error.code === 'auth/popup-blocked') {
        alert('Popup blocked, please allow popups for this site.');
      } else if (error.code === 'auth/cancelled-popup-request') {
        console.log('Popup closed before completing sign in.');
      } else {
        console.error("GitHub login failed: ", error.message);
        alert(`Error during GitHub login: ${error.message}`);
      }
    }
  };

  return (
    <div>
      <button onClick={handleGitHubLogin}>Sign in with GitHub</button>
    </div>
  );
};

export default GitHubLogin;
