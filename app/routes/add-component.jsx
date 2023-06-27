import { useState, useEffect } from 'react';
import { collection, addDoc } from 'firebase/firestore';
import { db } from '../firebase';
import { ButtonSubmit } from '../components/CustomButton';
import ComponentForm from '../components/ComponentForm';

export default function AddComponent () {
  const [disabled, setDisabled] = useState(true);
  const [inputValue, setInputValue] = useState(
    {
      component_name: '',
      coordinate_x: null,
      coordinate_y: null,
      orientation: null
    }
  );

  const postData = async () => {
    await addDoc(collection(db, 'data'), inputValue);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputValue((prevState) => ({ ...prevState, [name]: value }));
    if (inputValue.component_name && inputValue.coordinate_x && inputValue.coordinate_y && inputValue.orientation) {
      setDisabled(false);
    }
  };

  return (
    <>
      <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-lg text-center">
          <h1 className="text-2xl font-bold sm:text-3xl">Add Component</h1>
        </div>
        <ComponentForm
          inputValue = {inputValue}
          handleChange = {handleChange}
          postData = {postData}
          disabled = {disabled}
        />
      </div>
    </>
  );
}
