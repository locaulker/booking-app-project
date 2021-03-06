import firebase from "firebase/app"
import "firebase/auth"

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyC3_mPQdP0M7kD5V033bkSGuZkdz_AImNc",
  authDomain: "booking-app-project-42e4d.firebaseapp.com",
  projectId: "booking-app-project-42e4d",
  storageBucket: "booking-app-project-42e4d.appspot.com",
  messagingSenderId: "537691472069",
  appId: "1:537691472069:web:c021aaaded1a74793c30ac",
}
// Initialize Firebase
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig)
}

export default firebase
