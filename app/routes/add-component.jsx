import { useState } from 'react';
import { collection, addDoc } from 'firebase/firestore';
import { db } from '../firebase';
import { postData } from '../constants/api';
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

  // const postData = async () => {
  //   await addDoc(collection(db, 'data'), inputValue);
  // };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputValue((prevState) => ({ ...prevState, [name]: value }));
    if (inputValue.component_name && inputValue.coordinate_x && inputValue.coordinate_y && inputValue.orientation) {
      setDisabled(false);
    }
  };

  return (
    <>
      <ComponentForm
        title= 'Add Component'
        inputValue = {inputValue}
        handleChange = {handleChange}
        postData = {() => postData(inputValue)}
        disabled = {disabled}
      />
    </>
  );
}
