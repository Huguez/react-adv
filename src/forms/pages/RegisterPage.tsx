import { useForm } from '../hooks/useForm'

import "../styles/styles.css"

const initialValue = {
   name: "",
   email: "",
   password: "",
   password2: "",
}

export const RegisterPage = () => {
   const { formvalue, handleChange, isValidEmail, reset, handleSubmit } = useForm( initialValue )   
   const { name, email, password, password2 } = formvalue;

   return (
      <div>
         <h1>Register Page</h1>
         
         <form noValidate onSubmit={ handleSubmit } >
            
            <input name="name" className={`${ name.trim().length === 0 && "has-error" }`} autoComplete='off' onChange={ handleChange } value={ name } type="text" placeholder='Name' />
            { name.trim().length === 0 && <span>Este campo es necesario</span> }
            
            <input name="email" className={`${ ( !isValidEmail( email ) || email.trim().length === 0 ) && "has-error" }`} autoComplete='off' onChange={ handleChange }  value={ email } type="email" placeholder='E-mail' />
            { !isValidEmail( email ) && <span>Debe de ser un e-mail valido</span> }
            { email.trim().length === 0 && <span>Este campo es necesario</span> }
            
            
            <input name="password" className={`${ password.trim().length === 0 && "has-error" }`} autoComplete='off' onChange={ handleChange } value={ password } type="password" placeholder='Password' />
            { password.trim().length === 0 && <span>Este campo es necesario</span> }
            
            <input name="password2" className={`${ password2.trim().length === 0 && "has-error" }`} autoComplete='off' onChange={ handleChange } value={ password2 } type="password" placeholder='Confirm Password' />
            { password2.trim().length === 0 && <span>Este campo es necesario</span> }
            { password !== password2 && <span>Los passwords son diferentes</span> }
            
            <button type='submit' > Create </button>

            <button type='button' onClick={ reset } > Reset </button>
         </form>

      </div>
   )
}
