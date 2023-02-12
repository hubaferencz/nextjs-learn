import { signInWithPopup, signOut } from "firebase/auth";
import { auth, googleAuthProvider } from "../lib/firebase";
import { UserContext } from "../lib/context";
import { useContext } from "react";
import { async } from "@firebase/util";

export default function Enter(props) {
  const { user, username } = useContext(UserContext);
  return (
    <main>
      {user ? (
        !username ? (
          <UsernameForm />
        ) : (
          <SignOutButton />
        )
      ) : (
        <SignInButton />
      )}
    </main>
  );
}

function SignInButton() {
  const signInWithGoogle = async () => {
    await signInWithPopup(auth, googleAuthProvider);
  };
  return (
    <button className="btn-google" onClick={signInWithGoogle}>
      <img src={"/google.png"} /> Sign in with Google
    </button>
  );
}

// Sign out button that signs out on click the currently logged in user

function SignOutButton() {
  const signOutUser = async () => {
    await signOut(auth)
      .then(console.log("signed out"))
      .catch((error) => {
        console.log(error);
      });
  };

  return <button onClick={signOutUser}>Sign Out</button>;
}

function UsernameForm() {
  return null;
}
