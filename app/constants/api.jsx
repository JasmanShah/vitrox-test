import { collection, addDoc, doc, deleteDoc, updateDoc } from 'firebase/firestore';
import { db } from '../firebase';

const postData = async (inputValue) => {
  await addDoc(collection(db, 'data'), inputValue);
};

const deleteData = async (dbName, id) => {
  console.log(id);
  await deleteDoc(doc(db, dbName, id));
};

const updateData = async (dbName, id, data) => {
  console.log(dbName);
  console.log(id);
  console.log(data);
  // const ref = doc(db, dbName, id);
  // await updateDoc(ref, data);
};

export { postData, deleteData, updateData };
