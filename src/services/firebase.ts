import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyApTgeRFyNnniH9MdI4DAtFVmf0H3FquJM",
  authDomain: "auth-c9fa7.firebaseapp.com",
  projectId: "auth-c9fa7",
  storageBucket: "auth-c9fa7.appspot.com",
  messagingSenderId: "964087749085",
  appId: "1:964087749085:web:cc32fde6be713f4057be34"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app)