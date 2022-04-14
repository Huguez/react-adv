import { ChangeEvent, FormEvent, useState } from 'react'

export const useForm = <T>( initialValue: T  ) => {
   
   const [ formvalue, setFormvalue ] = useState( initialValue )

   const handleChange = ( { target }:ChangeEvent<HTMLInputElement> ) => {
      setFormvalue( s => ( { ...s, [target.name]: target.value  } ) )
   }
   
   const isValidEmail = ( email: string ) => {
      const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(email);
  }

   const reset = (  ) => {
      setFormvalue( initialValue );
   }
   
   const handleSubmit = ( e:FormEvent<HTMLFormElement> ) => { 
      e.preventDefault();
      console.log( formvalue );
   } 

   return { formvalue,  handleChange, isValidEmail, reset, handleSubmit } 
}