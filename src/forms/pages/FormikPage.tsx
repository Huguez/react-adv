import { useFormik, FormikErrors } from "formik"
import "../styles/styles.css"

interface FormValues {
   name:     string;
   lastname: string;
   email:    string;
}

const initialValues = {
   name: "",
   lastname: "",
   email: "",
}

export const FormikPage = () => {
   
   const { values:{ name, email, lastname }, errors, touched,  handleSubmit, handleChange, handleBlur } = useFormik( { 
      initialValues,
      onSubmit: ( values : FormValues ) => {
         console.log( values )  
      },
      validate: ( values : FormValues ) => {
         
         let errors: FormikErrors<FormValues> = {}
         const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
         
         if( !re.test( values.email ) ) errors.email    = "El E-mail debe de ser un correo valido"
         if( values.email === "" )      errors.email    = "El E-mail es requerido"
         if( values.name === "" )       errors.name     = "El Nombre es requerido"
         if( values.lastname === "" )   errors.lastname = "El Apellido es requerido"
         
         return errors
      }
   } );
   
   return (
      <div>    
         <h1>Formik Page</h1>

         <form noValidate onSubmit={ handleSubmit }>
            <label htmlFor="name">Nombre</label>
            <input value={ name } onChange={handleChange} onBlur={ handleBlur } name="name" type="text" />
            { touched.name && errors.name && <span>{ errors.name }</span> }
            <br />

            <label htmlFor="lastname">Apellido</label>
            <input value={ lastname } onChange={ handleChange } onBlur={ handleBlur } name="lastname" type="text" />
            { touched.lastname && errors.lastname && <span> { errors.lastname } </span> }
            <br />
            
            <label htmlFor="email">E-mail</label>
            <input value={ email } onChange={handleChange} onBlur={ handleBlur } name="email" type="email" />
            { touched.email && errors.email && <span>{ errors.email }</span> }
            <br />

            <button type="submit" >Submit</button>         
         </form>

      </div>
   )
}
