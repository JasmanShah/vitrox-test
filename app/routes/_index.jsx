import React, { useEffect, useState } from 'react';
import * as fs from 'fs';
import data from '../constants/data.json';
import { ButtonDelete, ButtonEdit } from '../components/CustomButton';
export const meta = () => {
  return [
    { title: 'ViTrox' },
    { name: 'ViTrox Test', content: 'Welcome to ViTrox Test' }
  ];
};

const newObject = {
  component_name: '1:c0404NEW',
  coordinate_x: 13000,
  coordinate_y: -16000,
  orientation: 0
};

export default function Index () {
  const [items, setItems] = useState([]);

  useEffect(() => {
    localStorage.setItem('items', JSON.stringify(items));
  }, [items]);

  const deleteData = (index) => {
    const updatedObjects = [...data];
    updatedObjects.splice(index, 1);
    console.table(updatedObjects);
  };

  const addData = (newObject) => {
    const updatedObjects = [...data, newObject];
    console.table(updatedObjects);
  };

  const editdata = (index, updatedObject) => {
    const updatedObjects = [...data];
    updatedObjects[index] = updatedObject;
    console.table(updatedObject);
  };

  return (
    <div>
      <table className="min-w-full divide-y-2 divide-gray-200 text-sm">
        <thead className="ltr:text-left rtl:text-right">
          <tr>
            {Object.keys(data[0]).map((title, index) => (
              <th key={index} className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">{title}</th>
            ))}
            <th>Actions</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200 text-center">
          {data.map((item, index) => (
            <tr key={index}>
              {Object.values(item).map((value, index) => (
                <td key={index} className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                  {value}
                </td>
              ))}
              <td>
                <span className="inline-flex overflow-hidden rounded-md border bg-white shadow-sm">
                  <ButtonEdit
                    onPress={() => console.log(editdata(index, newObject))}
                  />
                  <ButtonDelete
                    onPress={() => console.log(deleteData(index))}
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
