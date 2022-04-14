import { useField } from "formik"

interface Props {
   label:        string;
   name:         string;
   type?:        'select';

   [ x:string ]: any; 
}


export const MySelect = ( { label, ...props }:Props ) => {
   
   const [ field, meta ] =  useField( props )

   return (    
      <>
         <label htmlFor={ props.id || props.name  }>{ label }</label>
         <select className={`${ props.className || "" }  `}  { ...field } { ...props }  />
         { meta.touched && meta.error && <span > { meta.error } </span> }
         <br />
      </>
  )
}
