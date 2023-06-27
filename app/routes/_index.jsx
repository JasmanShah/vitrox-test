import { useEffect, useState } from 'react';
import { collection, query, onSnapshot, orderBy, doc, deleteDoc, updateDoc } from 'firebase/firestore';

import { db } from '../firebase';
import { ButtonDelete, ButtonEdit } from '../components/CustomButton';
import { NoData } from '../components/CustomPage';
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

  const getDataAll = async () => {
    const q = query(collection(db, dbName), orderBy('component_name', 'asc'));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const updatedData = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
      setData(updatedData);
      setIsLoading(false);
    });
    return unsubscribe;
  };

  const deleteData = async (id) => {
    console.log(id);
    await deleteDoc(doc(db, dbName, id));
  };

  const updateData = async (id) => {
    const ref = doc(db, dbName, id);
    await updateDoc(ref, {});
  };

  useEffect(() => {
    getDataAll();
  }, []);

  if (isLoading) { return null; }
  return (
    !data || data.length < 1
      ? <NoData/>
      : <div>
        <div className="mx-auto max-w-lg text-center">
          <h1 className="text-2xl font-bold sm:text-3xl">Component Lists</h1>
        </div>
        <table className="min-w-full divide-y-2 divide-gray-200 text-sm">
          <thead className="ltr:text-left rtl:text-right">
            <tr>
              <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Component Name</th>
              <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Coordinate X</th>
              <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Coordinate Y</th>
              <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Orientation</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200 text-center">
            {data.map((value, index) => (
              <tr key={index}>
                <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                  {value.component_name}
                </td>
                <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                  {value.coordinate_x}
                </td>
                <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                  {value.coordinate_y}
                </td>
                <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                  {value.orientation}
                </td>

                <td>
                  <span className="inline-flex overflow-hidden rounded-md border bg-white shadow-sm">
                    <ButtonEdit
                      onPress={() => updateData(value.id)}
                    />
                    <ButtonDelete
                      onPress={() => deleteData(value.id)}
                    />
                  </span>

                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
  );
}
