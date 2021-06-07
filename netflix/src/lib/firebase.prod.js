import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
// import { seedDatabase } from '../seed';

const firebaseConfig = {
  apiKey: 'AIzaSyCMvSONXvOWtpx66r8UHQFiyBDJTmtl0pM',
  authDomain: 'netflix-clone-75dad.firebaseapp.com',
  databaseURL: 'https://netflix-clone.firebaseio.com',
  projectId: 'netflix-clone-75dad',
  storageBucket: 'netflix-clone-75dad.appspot.com',
  messagingSenderId: '1015962713151',
  appId: '1:1015962713151:web:db14c0ed27289188b04c8a',
};

const firebase = Firebase.initializeApp(firebaseConfig);

// seedDatabase(firebase);

export { firebase };