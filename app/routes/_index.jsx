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

export default function Index () {
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
                    onPress={() => console.log('edit')}
                  />
                  <ButtonDelete
                    onPress={() => console.log('delete')}
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
