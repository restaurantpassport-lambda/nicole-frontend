// This form allows the user to create a restaurant
import React, { useState, useEffect } from "react";
import { Form, Field, withFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";

const RestaurantInput = ({ errors, touched, values, status }) => {
    const [rest, setRest] = useState([]);

    useEffect(() => {
      if (status) {
        setRest([...rest, status]);
      }
    }, [status]);

    return(
        <div>
            <Form>

            {/* name entry */}
          <Field component="input" type="text" name="name" placeholder="Restaurant Name"></Field>
          {touched.name && errors.name && (
            <p className="errMsg">{errors.name}</p>
          )}

            {/* city entry */}
          <Field component="input" type="text" name="city" placeholder="City"></Field>
          {touched.city && errors.city && (
            <p className="errMsg">{errors.city}</p>
          )}

            {/* address entry */}
            <Field component="input" type="text" name="address" placeholder="Address"></Field>
            {touched.address && errors.address && (
                <p className="errMsg">{errors.address}</p>
            )}

            {/* description entry */}
            <Field component="description" type="text" name="description" placeholder="Description"></Field>
            {touched.description && errors.description && (
                <p className="errMsg">{errors.description}</p>
            )}

                {/* city id entry? */}


          <Button type="submit">Add</Button>
            </Form>
        </div>
    );
};

    export default withFormik({
        mapPropsToValues({name, city, address, description}){
            return {
                name: name || "",
                city: city || "",
                address: address || "",
                description: description || "",
            };
        },
        validationSchema: Yup.object()
        .shape({
            name: Yup.string().required("Restaurant name required"),
            city: Yup.string().required("City where restraunt is located"),
            address: Yup.string().required("Street address"),
            description: Yup.string().required("Describe the restaurant")
        }),
        handleSubmit(values, {setStatus, resetForm}){
            axios
            .post("https://build-restaurant-passport.herokuapp.com/cities/restaurants", values)
            .then(res => {
                console.log("handleSubmit: then: res: ", res)
                setStatus(res.data);
                resetForm();
            })
            .catch(err => console.error("handleSubmit: catch: err: ", err));
        }
    })(RestaurantInput);