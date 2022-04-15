import { Formik, Form } from 'formik';
import { MyInput, MySelect } from "../components";
import formJson from "../data/custom-form.json"
import * as Yup from 'yup';

const initialValues:{ [key:string] : any } = {}
const requiredFields: { [key:string] : any } = {}

let schema;

for ( const input of formJson ) {
   initialValues[input.name] = input.value
   if( !input.validation ) continue;
   
   schema = Yup.string()

   for( const rules of input.validation ){
      if( rules.type === "required" ){
         schema = schema.required("Este campo es requerido")
      }

      if( rules.type === "minLength" ){
         schema = schema.min( ( rules as any).value || 2, `Minimo de ${ ( rules as any).value || 2 } caracteres` )
      }
      
      if( rules.type === "email" ){
         schema = schema.email("Debe de ser un correo valido")
      }

      requiredFields[input.name] = schema
   }
}

const vs = Yup.object( { ...requiredFields } )

export const DynamicFormPage = () => {      

   return (
      <div>
         <h1> Dynamic Form </h1>
         <Formik 
         { ...{ initialValues } }
         onSubmit={ ( values ) => console.log( values ) }
         validationSchema={ vs }
         >
            {
               ( formik ) => (
                  <Form>
                     {
                        formJson.map( ( field, index ) => {
                           if( field.type === "text" || field.type === "password" || field.type === "email" ){
                              return ( <MyInput key={ index } label={ field.label } name={ field.name }  /> )
                           }else{
                              if( field.type === "select" ){
                                 return (
                                    <MySelect key={ index } label={field.label} name={field.name}>
                                       <option value="">Selecione una opcion</option>
                                       {
                                          field.option?.map( ( op, i ) => (
                                             <option key={ i } value={op.id}> {op.juego} </option>
                                          ) )
                                       }
                                    </MySelect>

                                 )
                              }
                           }

                           throw new Error("Este type no es soportado!!")
                        } )
                     }
                     <button type="submit" > Submit </button>

                     <button type="reset"  onClick={ formik.handleReset }> Reset </button>
                  </Form>
               )
            }
         </Formik>
      </div>
   )
}
