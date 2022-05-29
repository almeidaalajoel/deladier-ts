import {
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import {
  getStorage,
  ref as storageRef,
  getDownloadURL,
  uploadString,
} from "firebase/storage";
import { ref, set, get } from "firebase/database";
import { db } from "./intitialize";
import type { Painting } from "@/components/PaintingColumn";

const signIn = (email: string, password: string) => {
  const auth = getAuth();
  return signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      return userCredential.user;
    })
    .catch((error) => {
      console.log(error.code, error.message);
      throw error;
    });
};

const getCollection = async (collection: string) => {
  const paintings = await get(ref(db, collection));
  //console.log(paintings.val());
  return paintings.val();
};

const logOut = () => {
  const auth = getAuth();
  signOut(auth);
};

const logAuth = () => {
  const auth = getAuth();
  console.log(`auth: ${auth.currentUser?.email}`);
};

const authStateChanged = (setUser: Function) => {
  const auth = getAuth();
  return onAuthStateChanged(auth, (user) => setUser(user));
};

const uploadPainting = async (painting: Painting, collection: string) => {
  //upload painting to realtime database
  const { height, width, url, title, position } = painting;
  const storage = getStorage();
  const paintingRef = storageRef(storage, `${collection}/${title}`);
  await uploadString(paintingRef, url, "data_url");
  const downloadUrl = await getDownloadURL(paintingRef);
  set(ref(db, `${collection}/${painting.title}`), {
    height,
    width,
    title,
    position,
    url: downloadUrl,
  });
};

const orderPainting = () => {
  //change position of a painting (and update all other positions relatively)
};

const deletePainting = () => {
  //remove painting from database (and update all other positions relatively)
};

export {
  signIn,
  getCollection,
  logOut,
  logAuth,
  authStateChanged,
  uploadPainting,
};
