import { useField } from "formik"

interface Props {
   label:        string;
   name:         string;
   type?:        'text' | 'email' | 'password' | 'number';
   placeholder?: string;
   [ x:string ]: any; 
}


export const MyInput = ( { label, ...props }:Props ) => {
   const [ field, meta ] =  useField( props )

   return (
      <>
         <label htmlFor={ props.id || props.name  }>{ label }</label>
         <input className={ `${ props.className }  ` }  { ...field } {...props} />
         { meta.touched && meta.error && <span className="error"> { meta.error } </span> }
         <br />
      </>
   )
}
