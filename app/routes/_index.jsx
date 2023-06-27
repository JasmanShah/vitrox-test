import React, { useEffect, useState } from 'react';

const MyComponent = () => {
  const [data, setData] = useState({});

  // Load data from Local Storage on component mount
  useEffect(() => {
    const storedData = localStorage.getItem('myData');
    if (storedData) {
      setData(JSON.parse(storedData));
    }
  }, []);

  // Save data to Local Storage
  const saveData = () => {
    localStorage.setItem('myData', JSON.stringify(data));
    console.log('Data saved.');
  };

  // Update data
  const updateData = () => {
    const newData = {
      name: 'John Doe',
      age: 25,
      email: 'johndoe@example.com'
    };
    setData(newData);
  };

  return (
    <div>
      <h1>{data.name}</h1>
      <h1>{data.name}</h1>
      <p>Age: {data.age}</p>
      <p>Email: {data.email}</p>
      <button onClick={updateData}>Update Data</button>
      <button onClick={saveData}>Save Data</button>
    </div>
  );
};

export default MyComponent;
