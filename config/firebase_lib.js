import Firebase from 'firebase/compat/app';
import 'firebase/compat/auth';

const config = {
  apiKey: "AIzaSyCWo7qUdVm7kagcXy3kraQNYNHoqNSxM1E",
  authDomain: "artai-5704f.firebaseapp.com",
  projectId: "artai-5704f",
  storageBucket: "artai-5704f.appspot.com",
  messagingSenderId: "1033124130445",
  appId: "1:1033124130445:web:44e1f3a98fcb018e173cc4",
  measurementId: "G-N5CHTNHGEP"
};
const firebase = Firebase.initializeApp(config);

export { firebase };
export const provider = new Firebase.auth.GoogleAuthProvider();
