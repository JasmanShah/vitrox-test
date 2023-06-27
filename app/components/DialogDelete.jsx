import { Fragment } from 'react';
import { Transition, Dialog } from '@headlessui/react';
import { deleteData } from '../constants/api';
export default function DialogDelete (props) {
  const { isOpen, closeModal, dbName, id, data } = props;
  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-50" onClose={closeModal}>
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
                    Delete this Component?
                </Dialog.Title>
                <div className="mt-2 text-left pl-8">
                  <div><label className='font-bold'>Name:</label> {data[0].component_name}</div>
                  <div><label className='font-bold'>Coordinate[x,y]:</label> {data[0].coordinate_x}, {data[0].coordinate_y}</div>
                  <div><label className='font-bold'>Orientation:</label> {data[0].orientation}</div>
                </div>

                <div className="mt-4">
                  <button
                    type="button"
                    className="inline-flex justify-center rounded-md bg-red-100 px-4 py-2 text-sm font-medium hover:bg-red-500 "
                    onClick={() => { deleteData(dbName, id); closeModal(); }}
                  >
                      Delete
                  </button>
                  <span className='m-1'></span>
                  <button
                    type="button"
                    className="inline-flex justify-center rounded-md bg-green-100 px-4 py-2 text-sm font-medium hover:bg-green-500 "
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
