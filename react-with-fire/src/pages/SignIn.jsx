import { useState } from 'react';
import { useNavigate, Link } from 'react-router';
import {
  signInWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
  GithubAuthProvider,
  sendPasswordResetEmail,
} from 'firebase/auth';
import { auth } from '@/config/firebase.init';
import { toast } from 'sonner';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { FaEye, FaEyeSlash, FaGoogle, FaGithub } from 'react-icons/fa';

export default function SignIn() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [showPass, setShowPass] = useState(false);

  const handleSignIn = async (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    if (!email || !password) {
      toast.error('Please fill in all fields.');
      return;
    }

    setLoading(true);
    try {
      const result = await signInWithEmailAndPassword(auth, email, password);
      if (!result.user.emailVerified) {
        toast.error('Please verify your email before logging in.');
        return;
      }
      toast.success('Signed in successfully!');
      //  /console.log(auth.currentUser)
      navigate('/');
    } catch (err) {
      if (err.code === 'auth/user-not-found') toast.error('User not found!');
      else if (err.code === 'auth/wrong-password')
        toast.error('Wrong password!');
      else toast.error(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleSocialSignIn = async (provider) => {
    try {
      const result = await signInWithPopup(auth, provider);
      toast.success(`Welcome ${result.user.displayName}`);
      navigate('/');
    } catch (err) {
      toast.error(err.message);
    }
  };
  const handleForgotPassword = async () => {
    const emailInput = document.querySelector('input[name="email"]');
    const email = emailInput?.value;

    if (!email) {
      toast.error('Please enter your email first.');
      return;
    }

    try {
      await sendPasswordResetEmail(auth, email);
      toast.success('Password reset email sent!');
    } catch (error) {
      if (error.code === 'auth/invalid-email') {
        toast.error('Invalid email address.');
      } else if (error.code === 'auth/user-not-found') {
        toast.error('No user found with this email.');
      } else {
        toast.error(error.message);
      }
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <form
        onSubmit={handleSignIn}
        className="w-full max-w-md bg-white shadow-md rounded p-6 space-y-4"
      >
        <h2 className="text-2xl font-semibold text-center">Sign In</h2>

        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>
          <Input
            name="email"
            type="email"
            placeholder="you@example.com"
            disabled={loading}
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="password">Password</Label>
          <div className="relative">
            <Input
              name="password"
              type={showPass ? 'text' : 'password'}
              placeholder="••••••••"
              disabled={loading}
              className="pr-10"
            />
            <button
              type="button"
              onClick={() => setShowPass((prev) => !prev)}
              className="absolute top-1/2 right-3 -translate-y-1/2 text-gray-600"
            >
              {showPass ? <FaEyeSlash /> : <FaEye />}
            </button>
          </div>
          <div className="text-right">
            <button
              type="button"
              onClick={handleForgotPassword}
              className="text-sm text-blue-600 hover:underline"
              disabled={loading}
            >
              Forgot password?
            </button>
          </div>
        </div>

        <Button type="submit" className="w-full" disabled={loading}>
          {loading ? 'Signing in...' : 'Sign In'}
        </Button>

        <p className="text-center text-sm">
          Don’t have an account?{' '}
          <Link to="/signup" className="text-blue-600 hover:underline">
            Sign up
          </Link>
        </p>

        <div className="flex justify-between gap-2">
          <Button
            type="button"
            onClick={() => handleSocialSignIn(new GoogleAuthProvider())}
            variant="outline"
            className="w-1/2"
          >
            <FaGoogle className="mr-2" /> Google
          </Button>
          <Button
            type="button"
            onClick={() => handleSocialSignIn(new GithubAuthProvider())}
            variant="outline"
            className="w-1/2"
          >
            <FaGithub className="mr-2" />
            GitHub
          </Button>
        </div>
      </form>
    </div>
  );
}
