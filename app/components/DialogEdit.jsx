import { Fragment, useEffect, useState } from 'react';
import { Transition, Dialog } from '@headlessui/react';
import { updateData } from '../constants/api';
import { ButtonSubmit } from './CustomButton';

export default function DialogEdit (props) {
  const { isOpen, closeModal, dbName, data } = props;
  const [disabled, setDisabled] = useState(true);
  const [inputValue, setInputValue] = useState(
    {
      component_name: data[0].component_name,
      coordinate_x: data[0].coordinate_x,
      coordinate_y: data[0].coordinate_y,
      orientation: data[0].orientation
    }
  );

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputValue((prevState) => ({ ...prevState, [name]: value }));
    if (inputValue.component_name && inputValue.coordinate_x && inputValue.coordinate_y && inputValue.orientation) {
      setDisabled(false);
    }
  };

  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={closeModal}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black bg-opacity-25" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="w-full max-w-lg transform overflow-hidden rounded-2xl bg-white p-6 text-center align-middle shadow-xl transition-all">
                <Dialog.Title
                  as="h3"
                  className="text-lg font-medium leading-6 text-gray-900"
                >
                    Edit this Component?
                </Dialog.Title>
                <div className="mt-2">
                  <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
                    <div className="mx-auto max-w-lg text-center">
                      <h1 className="text-2xl font-bold sm:text-3xl">Component Editor</h1>
                    </div>
                    <form className="mx-auto mb-0 mt-8 max-w-md space-y-4">
                      <div>
                        <div className="relative">
                          <label className="font-bold pl-4">Component Name:</label>
                          <input
                            name="component_name"
                            type="text"
                            className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                            placeholder="Enter Component Name"
                            onChange={handleChange}
                            value={inputValue.component_name}
                          />
                        </div>
                      </div>

                      <div>
                        <div className="relative">
                          <label className="font-bold pl-4">Coordinate:</label>
                          <div className="grid grid-cols-2 gap-4">
                            <div className="relative">
                              <input
                                name="coordinate_x"
                                type='number'
                                className="rounded-lg border-gray-200 p-4 pl-8 text-sm shadow-sm"
                                placeholder="Enter Coordinate X"
                                value={inputValue.coordinate_x}
                                onChange={handleChange}
                              />
                              <span className="absolute inset-y-0 start-0 grid place-content-center px-4">
                    X:
                              </span>
                            </div>

                            <div className="relative">
                              <input
                                name="coordinate_y"
                                type='number'
                                className="rounded-lg border-gray-200 p-4 pl-8 text-sm shadow-sm"
                                placeholder="Enter Coordinate Y"
                                value={inputValue.coordinate_y}
                                onChange={handleChange}
                              />
                              <span className="absolute inset-y-0 start-0 grid place-content-center px-4">
                    Y:
                              </span>
                            </div>
                          </div>

                        </div>
                      </div>

                      <div>
                        <div className="relative">
                          <label className="font-bold pl-4">Orientation:</label>
                          <input
                            name="orientation"
                            type="number"
                            className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                            placeholder="Enter Orientation"
                            value={inputValue.orientation}
                            onChange={handleChange}
                          />
                        </div>
                      </div>

                      <div className="flex justify-center">
                        <ButtonSubmit
                          onPress={updateData}
                          title='Add Data'
                          disabled={disabled}
                        />
                      </div>
                    </form>
                  </div>
                </div>

                <div className="mt-4">
                  {/* <button
                    type="button"
                    className="inline-flex justify-center rounded-md bg-green-100 px-4 py-2 text-sm font-medium hover:bg-green-500 "
                    onClick={() => { closeModal(); }}
                  >
                      Edit
                  </button> */}
                  <span className='m-1'></span>
                  <button
                    type="button"
                    className="inline-flex justify-center rounded-md bg-red-100 px-4 py-2 text-sm font-medium hover:bg-red-500 "
                    onClick={closeModal}
                  >
                      Cancel
                  </button>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
}
