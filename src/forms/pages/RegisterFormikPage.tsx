import { Form, Formik } from 'formik';
import "../styles/styles.css"
import * as Yup from 'yup';
import { MyInput } from '../components';

const initialValue = {
   name: "",
   email: "",
   password: "",
   password2: "",
}

export const RegisterFormikPage = () => {
  
   return (
      <div>
         <h1>Register Formik Page</h1>
         
         <Formik 
         initialValues={ { ...initialValue } } 
         
         onSubmit={ ( values )  => console.log( values ) }

         validationSchema={ Yup.object( {
            name:      Yup.string().required("El nombre es requerido").max(15, "El nombre debe de ser menor de 15 caracteres"),
            email:     Yup.string().required("El e-mail es requerido").email("Debe de ser un email Valido"),
            password:  Yup.string().required("El password es requerido").min( 6, "El minimo es de 6 caracteres" ),
            password2: Yup.string().required("La confirmacion es requerido").oneOf( [ Yup.ref("password") ], "Las contrasenas no son iguales" )
         } ) }
         >
            {
               ( formik ) => (
                  <Form>
                     <MyInput label="Nombre" name="name" />

                     <MyInput label="E-mail" name="email" />

                     <MyInput label="Password" name="password" type='password' />

                     <MyInput label="Confirm Password" name="password2" type='password' />

                     <button type='submit' > Create </button>
                  </Form>
               )
            }
         </Formik>
      </div>
   )
}
