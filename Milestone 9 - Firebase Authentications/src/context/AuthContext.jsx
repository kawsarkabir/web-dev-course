import { createContext, useContext, useEffect, useState } from 'react';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
  sendPasswordResetEmail,
  sendEmailVerification,
  updateProfile,
  onAuthStateChanged,
  signOut,
} from 'firebase/auth';
import { auth } from '@/config/firebase.init';
import { toast } from 'sonner';

const AuthContext = createContext();

// eslint-disable-next-line react-refresh/only-export-components
export const useAuth = () => useContext(AuthContext);

// eslint-disable-next-line react/prop-types
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // 🔁 Keeps user updated
  const refreshUser = async () => {
    if (auth.currentUser) {
      await auth.currentUser.reload();
      setUser(auth.currentUser);
    }
  };

  // 🧠 Register new user
  const signUpUser = async (email, password, name, photoURL) => {
    try {
      const result = await createUserWithEmailAndPassword(
        auth,
        email,
        password,
      );
      await updateProfile(result.user, {
        displayName: name,
        photoURL: photoURL || null,
      });
      await sendEmailVerification(result.user);
      await refreshUser();
      toast.success('Account created! Please verify your email.');
      return result.user;
    } catch (err) {
      toast.error(err.message);
      throw err;
    }
  };

  // 🔐 Login
  const signInUser = async (email, password) => {
    try {
      const result = await signInWithEmailAndPassword(auth, email, password);

      if (!result.user.emailVerified) {
        toast.error('Please verify your email before signing in.');
      }

      await refreshUser();
      toast.success('Signed in successfully!');
      return result.user;
    } catch (err) {
      toast.error(err.message);
      throw err;
    }
  };

  // 🔁 Social Login (Google, GitHub)
  const socialLogin = async (provider) => {
    try {
      const result = await signInWithPopup(auth, provider);
      toast.success(`Welcome ${result.user.displayName}`);
      await refreshUser();
      return result.user;
    } catch (err) {
      toast.error(err.message);
      throw err;
    }
  };

  // 🔁 Reset password
  const resetPassword = async (email) => {
    try {
      await sendPasswordResetEmail(auth, email);
      toast.success('Password reset email sent!');
    } catch (err) {
      toast.error(err.message);
      throw err;
    }
  };

  // 🚪 Logout
  const logout = async () => {
    await signOut(auth);
    toast.success('Logged out successfully!');
    setUser(null);
  };

  // 🧩 Auth state listener
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return () => unsubscribe();
  }, []);

  return (
    <AuthContext.Provider
      value={{
        user,
        loading,
        signInUser,
        signUpUser,
        logout,
        socialLogin,
        resetPassword,
        refreshUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
