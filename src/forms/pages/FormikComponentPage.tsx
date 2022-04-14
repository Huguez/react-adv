import { Formik, Field, Form, ErrorMessage } from "formik"
import * as Yup from "yup"

import "../styles/styles.css"

// interface FormValues {
//    name:     string;
//    lastname: string;
//    email:    string;
// }

const initialValues = {
   name: "",
   lastname: "",
   email: "",
   terms: false,
   jobType: "",
}

export const FormikComponentPage = () => {
      
   return (
      <div>    
         <h1>Formik Component Page</h1>
         
         <Formik 
         {...{ initialValues } } 
         onSubmit={ ( values ) => console.log( values ) }
         validationSchema={ Yup.object( {
            name:     Yup.string().required("El nombre es requerido"),
            lastname: Yup.string().required("El Apellido es requerido"),
            email:    Yup.string().required("El e-mail es requerido").email("Debe de ser un email Valido"),
            jobType:  Yup.string().required("El tipo de trabajo es requerido").notOneOf( [ "project manager" ], "no puede ser Project Manager Bato!!" ),
            terms: Yup.boolean().oneOf( [ true ], "Debe de aceptar los terminos y condiciones" )
         } ) }>
            {
               ( formik ) => (
                  <Form>
                     <label htmlFor="name">Nombre</label>
                     <Field name="name"  type="text" />
                     <ErrorMessage name="name" component="span" />
                     <br />

                     <label htmlFor="lastname">Apellido</label>
                     <Field name="lastname"  type="text" />
                     <ErrorMessage name="lastname"  component="span" />
                     <br />
                     
                     <label htmlFor="email">E-mail</label>
                     <Field name="email"  type="text" />
                     <ErrorMessage name="email" component="span" />
                     <br />

                     <label htmlFor="jobType">Tipo de trabajo</label>
                     <Field name="jobType"  as="select" >
                        <option value=""></option>
                        <option value="developer">Developer</option>
                        <option value="designer">Disenador</option>
                        <option value="project manager">Project Manager</option>
                     </Field>
                     <ErrorMessage name="jobType" component="span" />
                     <br />

                     <label> 
                        Terminos y condiciones de uso
                        <Field name="terms"  type="checkbox" />
                     </label>
                     <ErrorMessage name="terms" component="span" />
                     <br />

                     <button type="submit" >Submit</button>
                  </Form>
               )
            }
         </Formik>
      </div>
   )
}
