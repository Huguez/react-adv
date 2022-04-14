import { Formik, Form} from "formik"
import * as Yup from "yup"

import { MyCheckbox, MyInput, MySelect } from "../components";

import "../styles/styles.css"

const initialValues = {
   name: "",
   lastname: "",
   email: "",
   terms: false,
   jobType: "",
}

export const FormikAbsractPage = () => {
      
   return (
      <div>    
         <h1>Formik Absract Page</h1>
         
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
                     <MyInput label={"Nombre"} name={"name"} />
                     
                     <MyInput label={"Apellido"} name={"lastname"} />
                     
                     <MyInput label={"E-mail"} name={"email"} />
                     
                     <MySelect label={"Tipo de trabajo"} name={"jobType"} >
                        <option value=""></option>
                        <option value="developer">Developer</option>
                        <option value="designer">Disenador</option>
                        <option value="project manager">Project Manager</option>
                     </MySelect>
                     
                     <MyCheckbox label="Terminos y condiciones de uso" name="terms" />
                     
                     <button type="submit" >Submit</button>
                  </Form>
               )
            }
         </Formik>
      </div>
   )
}
