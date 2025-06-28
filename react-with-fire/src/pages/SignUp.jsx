import { useState } from 'react';
import { useNavigate, Link } from 'react-router';
import {
  createUserWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
  GithubAuthProvider,
  sendEmailVerification,
  updateProfile,
} from 'firebase/auth';
import { auth } from '@/config/firebase.init';
import { toast } from 'sonner';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { FaEye, FaEyeSlash, FaGoogle, FaGithub } from 'react-icons/fa';
import { validatePassword } from '@/utils/validatePassword';

export default function SignUp() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [showPass, setShowPass] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const form = e.target;
    const name = form.name.value;
    const photoURL = form.photoURL.value;
    const email = form.email.value.trim();
    const password = form.password.value.trim();
    const termsAccepted = form.terms.checked;

    // ✅ Step 1: Check for empty fields
    if (!name || !photoURL || !email || !password) {
      toast.error('Please fill in all fields.');
      setLoading(false);
      return;
    }
    // ✅ Step 2: Validate password format
    const validation = validatePassword(password);
    if (validation !== 'valid') {
      toast.error(validation);
      setLoading(false);
      return;
    }
    // ✅ Step 3: Check if terms are accepted
    if (!termsAccepted) {
      toast.error('You must accept the terms and conditions.');
      setLoading(false);
      return;
    }

    // ✅ Step 4: Create user
    try {
      const result = await createUserWithEmailAndPassword(
        auth,
        email,
        password,
      );

      // ✅ Send verification email
      await sendEmailVerification(result.user);

      // ✅ Update user profile
      const profile = {
        displayName: name,
        photoURL: photoURL,
      };

      await updateProfile(auth.currentUser, profile);

      toast.success(
        'Account created! Please check your email to verify your account.',
      );
      navigate('/signin');
    } catch (err) {
      toast.error(err.message);
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

  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md bg-white shadow-md rounded p-6 space-y-4"
      >
        <h2 className="text-2xl font-semibold text-center">Sign Up</h2>

        <div className="space-y-2">
          <Label htmlFor="name">Name</Label>
          <Input
            name="name"
            type="text"
            placeholder="name"
            disabled={loading}
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="photoURL">PhotoURL</Label>
          <Input
            name="photoURL"
            type="text"
            placeholder="photo url"
            disabled={loading}
          />
        </div>
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
        </div>

        <div className="flex items-center gap-2 text-sm">
          <input type="checkbox" name="terms" id="terms" disabled={loading} />
          <label>
            I agree to the{' '}
            <span className="underline text-blue-600 cursor-pointer">
              Terms & Conditions
            </span>
          </label>
        </div>

        <Button type="submit" className="w-full" disabled={loading}>
          {loading ? 'Loading...' : 'Sign Up'}
        </Button>

        <p className="text-center text-sm">
          Already have an account?{' '}
          <Link to="/signin" className="text-blue-600 hover:underline">
            Sign in
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
            <FaGithub className="mr-2" /> GitHub
          </Button>
        </div>
      </form>
    </div>
  );
}
