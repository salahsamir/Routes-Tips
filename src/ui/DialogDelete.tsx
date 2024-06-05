import { Button, Dialog, DialogPanel, DialogTitle, Transition, TransitionChild } from '@headlessui/react';
import { useState } from 'react';
import IProduct from '../Interfaces/ProductinterFace';
import Buttons from './Buttons';

interface IAdd {
  title: string,
  isOpen: boolean,
  close: () => void,
  product: IProduct[],
  setProduct: React.Dispatch<React.SetStateAction<IProduct[]>>,
  id: string
}

export default function Delete({ title, isOpen, close, product, setProduct, id }: IAdd) {
  console.log(id);
  
  let DeleteProduct = async () => {
    console.log(id);
    let response = await fetch(`https://crud-backend-rho.vercel.app/api/product/${id}`, {
      method: "DELETE"
    });
    let data = await response.json();

    setProduct(product.filter((item) => item._id !== data.product._id));
    close();
  };

  return (
    <>
      <Transition appear show={isOpen}>
        <Dialog as="div" className="relative z-10 focus:outline-none" onClose={close} __demoMode>
          <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4">
              <TransitionChild
                enter="ease-out duration-300"
                enterFrom="opacity-0 transform-[scale(95%)]"
                enterTo="opacity-100 transform-[scale(100%)]"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 transform-[scale(100%)]"
                leaveTo="opacity-0 transform-[scale(95%)]"
              >
                <DialogPanel className="w-full max-w-md rounded-xl bg-gray-600 p-6 backdrop-blur-2xl">
                  <DialogTitle as="h3" className="text-base/7 font-medium text-white">
                    {title}
                  </DialogTitle>
                  <p className="mt-2 text-sm/6 text-white">
                    Are you sure you want to delete this product?
                  </p>
                  <div className="mt-2 flex space-x-2">
                    <Buttons bgColor="bg-red-700 hover:bg-red-800" onClick={close}>Cancel</Buttons>
                    <Buttons bgColor="bg-yellow-700 hover:bg-yellow-800" onClick={DeleteProduct}>Delete</Buttons>
                  </div>
                </DialogPanel>
              </TransitionChild>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}
