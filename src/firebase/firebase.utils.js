import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyCC4kuhYB3A2vaxB52y5dx3b3AOxJQ5-yE",
  authDomain: "skart-001.firebaseapp.com",
  databaseURL: "https://skart-001.firebaseio.com",
  projectId: "skart-001",
  storageBucket: "skart-001.appspot.com",
  messagingSenderId: "1023840829627",
  appId: "1:1023840829627:web:bf0e9b96b86b7719a1299e",
  measurementId: "G-WXK48PTMWG"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const providerGoogle = new firebase.auth.GoogleAuthProvider();
providerGoogle.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(providerGoogle);

const providerGithub = new firebase.auth.GithubAuthProvider();
providerGithub.setCustomParameters({ allow_signup: "false" });
export const signInWithGithub = () => auth.signInWithPopup(providerGithub);

export default firebase;

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) {
    return;
  }

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  try {
    var userSnapShot = await userRef.get();
  } catch (error) {
    console.log("error querying user ref from firestore ", error.message);
  }

  //will be getting userRef & userSnapShot objects even if it does not exist in firestore but with snapshot property of exists as false

  if (!userSnapShot.exists) {
    let { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({ displayName, email, createdAt, ...additionalData });
    } catch (error) {
      console.log("error adding user to firestore ", error.message);
    }
  }

  console.log("from futils... createprofdoc... ", userSnapShot);
  return userRef;
};

/*
createUserProfileDocument(userAuth, additionalData);
creates user profile snapshot (document == record entry) in firestore database storage,
with userRef as pointer to the db entry of that user using -
firestore.doc() - creating doc_ref inside colln_name/uid  (collection==table, doc==record in nosql)
firestore.get() - getting snapshot of that record entry (document)
firestore.set() - saving into that record entry (document)
*/
