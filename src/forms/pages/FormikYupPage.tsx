import { useFormik } from "formik"
import * as Yup from "yup"

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

export const FormikYupPage = () => {
   
   const { errors, touched, getFieldProps, handleSubmit } = useFormik( { 
      initialValues,
      onSubmit: ( values : FormValues ) => {
         console.log( values )
      },
      validationSchema: Yup.object( {
         name: Yup.string().required("El nombre es requerido"),
         lastname: Yup.string().required("El Apellido es requerido"),
         email: Yup.string().required("El e-mail es requerido").email("Debe de ser un email Valido")
      } )
   } );
   
   return (
      <div>    
         <h1>Formik Yup Page</h1>

         <form noValidate onSubmit={ handleSubmit }>
            <label htmlFor="name">Nombre</label>
            <input { ...getFieldProps("name") } type="text" autoComplete="off"/>
            { touched.name && errors.name && <span>{ errors.name }</span> }
            <br />

            <label htmlFor="lastname">Apellido</label>
            <input { ...getFieldProps("lastname") } type="text" autoComplete="off"/>
            { touched.lastname && errors.lastname && <span> { errors.lastname } </span> }
            <br />
            
            <label htmlFor="email">E-mail</label>
            <input { ...getFieldProps("email") } type="email" autoComplete="off"/>
            { touched.email && errors.email && <span>{ errors.email }</span> }
            <br />

            <button type="submit" >Submit</button>         
         </form>

      </div>
   )
}
