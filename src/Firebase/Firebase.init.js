import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCCUtrRKmsSlerClMZMKFdp5qGkZhDi700",
  authDomain: "the-treasure-chest.firebaseapp.com",
  projectId: "the-treasure-chest",
  storageBucket: "the-treasure-chest.appspot.com",
  messagingSenderId: "424863437465",
  appId: "1:424863437465:web:6c9fbc5369a1276f479e08"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;