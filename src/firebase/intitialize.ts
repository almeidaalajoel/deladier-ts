import { initializeApp } from "firebase/app";
import { getAnalytics, isSupported } from "firebase/analytics";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB1a-mFZ4xXbIiUP7yfztj5VkBJGiESEd4",
  authDomain: "deladier-6eb5c.firebaseapp.com",
  projectId: "deladier-6eb5c",
  storageBucket: "deladier-6eb5c.appspot.com",
  messagingSenderId: "22809880868",
  appId: "1:22809880868:web:044871c56204586d6f2bb1",
  measurementId: "G-2SHQW5JTNW",
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);
isSupported().then((isSupported) => {
  if (isSupported) {
    const analytics = getAnalytics(app);
  }
});

export { db };
