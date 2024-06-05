import {  Dialog, DialogPanel, DialogTitle, Transition, TransitionChild } from '@headlessui/react'

import Buttons from './Buttons'
import Inputs from './Inputs'

import { ChangeEvent, useState } from 'react'
import dataInput from '../Data/AddProduct'
import ValidateError from '../Utitls/Error'
import Error from './Error'
import Ball from './Ball'
import Colors from '../Data/Color'
import Select from './Select'
import toast from 'react-hot-toast'

interface IAdd{
    title: string,
    isOpen: boolean,
    close:()=>void
     product: IProduct[], 
     setProduct: React.Dispatch<React.SetStateAction<IProduct[]>> 
}
let defaultData={
  name:"",
  desc:"",
  price:"",
  image:"",
  rating:""
}
export default function DialogAdd({title,isOpen,close,product,setProduct}:IAdd) {
  let[data,setData]=useState(defaultData)
  let [err,setErr]=useState(defaultData)
  let [checkColor,setCheckColor]=useState<string[]>([])
  let [selected,setSelected]=useState({image:"",name:"",_id:0});
  ////chackColor setter 
  let AddCheckColor=(ele:string)=>{
    if(!checkColor.includes(ele)){
      setCheckColor([...checkColor,ele])
    }
    else{
      setCheckColor(checkColor.filter(item=>item!==ele))
    }
    
  }

 
    let HandleChange = (e:ChangeEvent<HTMLInputElement>)=>{
        setData({...data,[e.target.name]:e.target.value})
        setErr({...err,[e.target.name]:""})
    }
    const fatchData = async (data) => {
      try {
          const response = await fetch("https://crud-backend-rho.vercel.app/api/product", {
              method: "POST",
              headers: {
                  'Content-Type': 'application/json'
              },
              body: JSON.stringify({ ...data, category: selected._id, color: checkColor })
          });
          if (!response.ok) {
              console.log("error");
          }
          
          const res = await response.json();
          if(res==="product already exist"){
            toast('Product already exist',{
              style: {
                backgroundColor: '#000',
                color: '#fff',
              }
            })
            return
          }

          toast('Good Job!', {
              icon: '👏',
          })
         res.product.category=selected
          
          setProduct([...product,res.product]);
          return res;
      } catch (error) {
          console.error('Error fetching data:', error);
      }
  };
    let HandleSubmit=(e:ChangeEvent<HTMLInputElement>)=>{
        e.preventDefault()
        let error=ValidateError(data)
         let HasError=Object.values(error).some(item=>item==="")||Object.values(error).every(item=>item==='')
         
         if(!HasError){
          setErr({...error,[e.target.name]:error[e.target.value]})
          return
        }

        fatchData(data)
      setData(defaultData)
      setCheckColor([])
      setSelected({image:"",name:"",_id:0})
      close()
      
    }
  
  return (
    <>
     

      <Transition appear show={isOpen}>
        <Dialog as="div" className="relative z-10 focus:outline-none" onClose={close} __demoMode>
          <div className="fixed inset-0 z-10 w-screen overflow-y-auto backdrop-blur">
            <div className="flex min-h-full items-center justify-center p-4 ">
              <TransitionChild
                enter="ease-out duration-300"
                enterFrom="opacity-0 transform-[scale(95%)]"
                enterTo="opacity-100 transform-[scale(100%)]"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 transform-[scale(100%)]"
                leaveTo="opacity-0 transform-[scale(95%)]"
              >
                <DialogPanel className="w-full max-w-md rounded-xl bg-gray-800 p-6 backdrop-blur-2xl">
                  <DialogTitle as="h3" className="text-3xl text-center font-medium text-white">
                   {title}
                  </DialogTitle>
                 <div>
                  {dataInput.map((item)=>(
                  <>
                    <Inputs key={item.id} {...item} onChange={HandleChange} />
                    {err[item.name] && <p className="text-red-500"><Error message={err[item.name]}/></p>}
                  </>
                  ))}
                 </div>
                 <div className="">
                  <h2 className="text-sm text-white">Category:</h2>
                  
                  <Select selected={selected} setSelected={setSelected} />
                 </div>

                 <div className="flex gap-1 my-2">
                  {checkColor.length?
                  checkColor.map((ele)=>(
                    <>
                     <div className="w-fit p-1 rounded-s" style={{backgroundColor:ele}}>
                      {ele}
                     </div>
                    </>
                  ))
                  :""}
                 </div>

                 <div className="flex space-x-1">
                  {Colors?
                  Colors.map((ele)=>(
                    <>
                    <Ball bgColor={ele} onClick={()=>AddCheckColor(ele)} />
                    </>
                  ))
                  :""}
                 </div>
                  <div className="mt-4 flex space-x-2">
                   <Buttons bgColor="bg-blue-700 hover:bg-blue-800" onClick={HandleSubmit}>Submit</Buttons>
                   <Buttons bgColor="bg-red-700 hover:bg-red-800" onClick={close} >Cancle</Buttons>

                  </div>
                </DialogPanel>
              </TransitionChild>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  )
}
