import { useEffect, useState } from 'react';
import { collection, query, onSnapshot, orderBy, doc, deleteDoc, updateDoc } from 'firebase/firestore';
import { db } from '../firebase';

import { NoData } from '../components/CustomPage';
import ComponentTable from '../components/ComponentTable';
import DialogDelete from '../components/DialogDelete';
import DialogEdit from '../components/DialogEdit';

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
  const [isOpenDelete, setIsOpenDelete] = useState(false);
  const [isOpenEdit, setIsOpenEdit] = useState(false);
  const [id, setId] = useState('');

  function closeModal () {
    setIsOpenDelete(false);
    setIsOpenEdit(false);
  }
  function openModal (type, id) {
    setId(id);
    if (type === 'delete') {
      setIsOpenDelete(true);
    }
    if (type === 'edit') {
      setIsOpenEdit(true);
    }
  }

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
        />
        <DialogDelete
          isOpen = {isOpenDelete}
          closeModal = {closeModal}
          dbName = {dbName}
          id={id}
        />
        <DialogEdit
          isOpen = {isOpenEdit}
          closeModal = {closeModal}
          dbName = {dbName}
          id={id}
        />
      </>
  );
}
