
import { Field, Input, Label } from '@headlessui/react'
import clsx from 'clsx'


interface IProduct extends React.InputHTMLAttributes<HTMLInputElement> {
  label:string
  name:string
  id:string
  placeholder:string
  type:string
  
}

export default function Inputs({label,name,placeholder,type,...rest}:IProduct) {
  return (
    <div className="w-full max-w-md px-1 py-1">
      <Field>
        <Label className="text-sm text-slate-100">{label}</Label>
        <Input
          name={name}
         
          type={type}
          placeholder={placeholder}
          {...rest}
          className={clsx(
            'mt-2 block w-full rounded-lg border-none bg-white/5 py-1.5 px-3 text-sm/6 text-white',
            'focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-white/25'
          )}
        />
      </Field>
    </div>
  )
}
