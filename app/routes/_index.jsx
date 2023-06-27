import { useEffect, useState } from 'react';
import { collection, query, onSnapshot, orderBy, doc, deleteDoc, updateDoc } from 'firebase/firestore';
import { db } from '../firebase';

import { NoData } from '../components/CustomPage';
import ComponentTable from '../components/ComponentTable';
import DialogEdit from '../components/DialogEdit';
import { deleteData, updateData } from '../constants/api';

export const meta = () => {
  return [
    { title: 'ViTrox' },
    { name: 'ViTrox Test', content: 'Welcome to ViTrox Test' }
  ];
};

const dbName = 'data';

export default function Index () {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isOpen, setIsOpen] = useState(false);
  function closeModal () { setIsOpen(false); }
  function openModal () { setIsOpen(true); }

  const getDataAll = async () => {
    const q = query(collection(db, dbName), orderBy('component_name', 'asc'));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const updatedData = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
      setData(updatedData);
      setIsLoading(false);
    });
    return unsubscribe;
  };

  useEffect(() => {
    getDataAll();
  }, []);

  if (isLoading) { return null; }
  return (
    !data || data.length < 1
      ? <NoData/>
      : <>
        <ComponentTable
          data = {data}
          openModal = {openModal}
          dbName = {dbName}
        />
        <DialogEdit
          isOpen = {isOpen}
          closeModal = {closeModal}
        />
      </>
  );
}
