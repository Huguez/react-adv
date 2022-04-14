import { useField } from "formik"

interface Props {
   label:        string;
   name:         string;
   [ x:string ]: any; 
}


export const MyCheckbox = ( { label, ...props }:Props ) => {
   
   const [ field, meta ] =  useField( {...props } )

   return (    
      <>
         <label>
            <input className={`${ props.className || "" }  `}  { ...field } { ...{ props, type:"checkbox"} }  />
            { label }
         </label>
         { meta.touched && meta.error && <span > { meta.error } </span> }
         <br />
      </>
  )
}
