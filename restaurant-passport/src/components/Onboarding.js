// New user onboarding
import React, { useState, useEffect } from "react";
import { Form, Field, withFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";

import { OnboardForm, CTA, Button } from './Styles.js';

const Onboarding = ({ errors, touched, values, status }) => {
    
  const [user, setUser] = useState([]);

  useEffect(() => {
    if (status) {
      setUser([...user, status]);
    }
  }, [status]);
  
    return (
      <OnboardForm>
        <Form>
            <CTA>Restaurant Passport Sign Up</CTA>

            {/* name entry */}
          <Field component="input" type="text" name="name" placeholder="Name"></Field>
          {touched.name && errors.name && (
            <p className="errMsg">{errors.name}</p>
          )}

            {/* city entry */}
          <Field component="input" type="text" name="city" placeholder="City"></Field>
          {touched.city && errors.city && (
            <p className="errMsg">{errors.city}</p>
          )}

            {/* email entry */}
          <Field component="input" type="email" name="email" placeholder="Email"></Field>
            {touched.email && errors.email && 
              <p className="errMsg">{errors.email}</p>
            }

            {/* password entry */}
          <Field component="input" type="password" name="password" placeholder="Password"></Field>
              {touched.password && errors.password && (
                <p className="errMsg">{errors.password}</p>
              )}

          <Button type="submit">Sign Up</Button>
        </Form>
       
      </OnboardForm>
    );
  };

  export default withFormik({
      mapPropsToValues({name, city, email, password}){
          return {
              name: name || "",
              city: city || "",
              email: email || "",
              password: password || "",
          };
      },
      validationSchema: Yup.object().shape({
          name: Yup.string().required("Please provide your name"),
          city: Yup.string().required("Please provide your city"),
          email: Yup.string().email().required("Please provide your email"),
          password: Yup.string()
          .required("A password is required")
          .min(8, "Please use 8 or more characters")
         
      }),
      handleSubmit(values, {setStatus, resetForm}){
          axios
            .post("https://build-restaurant-passport.herokuapp.com/users/register", values)
            .then(res => {
              console.log("handleSubmit: then: res: ", res)
              setStatus(res.data);
              resetForm();
            })
            .catch(err => console.error("handleSubmit: catch: err: ", err));
      }
  })(Onboarding);

  
