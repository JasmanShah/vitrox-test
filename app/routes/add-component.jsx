import { useEffect, useState } from 'react';
import { postData } from '../constants/api';
import ComponentForm from '../components/ComponentForm';

export default function AddComponent () {
  const [disabled, setDisabled] = useState(true);
  const [inputValue, setInputValue] = useState(
    {
      component_name: '',
      coordinate_x: '',
      coordinate_y: '',
      orientation: ''
    }
  );

  const handleChange = (e) => {
    console.log('handle');
    const { name, value } = e.target;
    setInputValue((prevState) => ({ ...prevState, [name]: value }));
    if (inputValue.component_name && inputValue.coordinate_x && inputValue.coordinate_y && inputValue.orientation) {
      setDisabled(false);
    }
  };
  useEffect(() => {
    console.log('New Data');
  }, [inputValue]);

  return (
    <>
      <div className="grid grid-cols-6 mt-6">
        <div className="col-start-2 col-span-4 border border-gray-200 shadow-sm rounded-lg">
          <ComponentForm
            title= 'Add Component'
            inputValue = {inputValue}
            handleChange = {handleChange}
            postData = {() => postData(inputValue)}
            disabled = {disabled}
          />
        </div>

      </div>

    </>
  );
}
