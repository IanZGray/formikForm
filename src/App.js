import './App.css';
import React from 'react';
import { ErrorMessage, useFormik } from 'formik';

function App() {
  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      password: '',
    },
    onSubmit: values => {
      console.log('form', values);
      alert("Login Successful");
    }, 
    validate: values => {
      let errors = {};
      // if(!values.name) errors.name = "Required";
      if(!values.email) { 
        errors.email = "Required";
      } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)){
        errors.email = "Username should be an email"
      }
      if(!values.password) errors.password = "Required";
      return errors;
    }
  });
  return (
    <div>
      <form onSubmit={formik.handleSubmit} >
        {/* <div>Name</div>
        <input name="name" type="text" onChange={formik.handleChange} value={formik.values.name} />
        {formik.errors.name ? <div style={{color:'red'}}>{formik.errors.name}</div> : null} */}
        <div>Email</div>
        <input id="emailField" name="email" type="text" onChange={formik.handleChange} value={formik.values.email} />
        {formik.errors.email ? <div id="emailError" style={{color:'red'}}>{formik.errors.email}</div> : null}
        <div>Password</div>
        <input id="pswField" name="password" type="text" onChange={formik.handleChange} value={formik.values.password} />
        {formik.errors.password ? <div id="pswError" style={{color:'red'}}>{formik.errors.password}</div> : null}
        <button id="submitBtn" type="submit" >Submit</button>
      </form>
    </div>
  );
}

export default App;
