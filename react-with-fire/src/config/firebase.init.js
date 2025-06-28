import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyDc6TrdZ-fKMDa7qO8llf0lfvHJ3Hgb_Uw',
  authDomain: 'react-with-fire-8084d.firebaseapp.com',
  projectId: 'react-with-fire-8084d',
  storageBucket: 'react-with-fire-8084d.firebasestorage.app',
  messagingSenderId: '1080530385704',
  appId: '1:1080530385704:web:9c0bcc41c8964c731bae1d',
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
