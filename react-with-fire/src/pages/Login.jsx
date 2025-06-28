import { Button } from '@/components/ui/button';
import { auth } from '@/config/firebase.init';
import {
  GithubAuthProvider,
  GoogleAuthProvider,
  signInWithPopup,
} from 'firebase/auth';

export default function Login() {
  const googleProvider = new GoogleAuthProvider();
  const githubProvider = new GithubAuthProvider();

  const handleSignInWithGoogle = () => {
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        console.log(result);
      })
      .then((error) => {
        console.log(error);
      });
  };
  const handleSignInWithGithub = () => {
    signInWithPopup(auth, githubProvider)
      .then((result) => {
        console.log(result);
      })
      .then((error) => {
        console.log(error);
      });
  };
  return (
    <div className="flex items-center justify-center flex-col">
      <h1>Login</h1>
      <Button onClick={handleSignInWithGoogle}>Sign In With Google</Button>
      <Button onClick={handleSignInWithGithub}>Sign In With Github</Button>
    </div>
  );
}
