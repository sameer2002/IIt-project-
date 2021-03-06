
import * as firebase from "firebase";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBhyNFO6EsuN6yzHsYke3mxhZXEjBw1uYc",
  authDomain: "iit-project-565f2.firebaseapp.com",
  projectId: "iit-project-565f2",
  storageBucket: "iit-project-565f2.appspot.com",
  messagingSenderId: "274481330017",
  appId: "1:274481330017:web:6ca0592475dd5f84e6f720"
};

let app;
if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app()
}

const auth = firebase.auth()
const firestore =firebase.firestore();
export {firestore};
export { auth };
export const createUserDocument =  (user, additionalData,Mobile) => {
  if (!user) return;

  const userRef = firestore.doc(`Users/${user.uid}`);

  const snapshot = userRef.get();

  if (!snapshot.exists) {
    const { email } = user;
    const { UserName } = additionalData;
    const {Phoneno} = Mobile;
    try {
      userRef.set({
        UserName,
        email,
        Phoneno,
        createdAt: new Date(),
      });
    } catch (error) {
      console.log('Error in creating user', error);
    }
  }
};
