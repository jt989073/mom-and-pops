import React from "react";
import { useDispatch, useSelector } from "react-redux";
// import { useHistory } from "react-router";
import { useState } from "react";
import { createBusiness, loadBusinesses } from "../../store/businesses";
import  "./CreateBusiness.css";
import * as yup from "yup";
import {useFormik} from "formik"

function CreateBusinessForm({SetBusinessModal}) {
    const dispatch = useDispatch();
    const userId = useSelector(state => state.session.user.id)

    const formik = useFormik({
        initialValues: {
          name: "",
          street: "",
          city: "",
          state: "",
          image: "",
          user_id: userId,
        },
        validationSchema: yup.object({
            name: yup.string().min(5).max(50).required("Name must be between 5-50 characters!"),
            street: yup.string().min(5).max(50).required("Street must be between 5-50 characters!"),
            city: yup.string().min(5).max(50).required("City must be between 5-50 characters"),
            state: yup.string().min(2).max(50).required("State must be between 2-50 characters!"),
            image: yup.string().url().required('Image Url Field is required, please add an Image!'),
        }),
        onSubmit: async (values) => {
            dispatch(createBusiness(values)).then(()=>dispatch(loadBusinesses()))
            SetBusinessModal(false)
        }
    })

    return (
        <div className="create_business_container">
            <div>
                <div className="create_title">Create Business</div>
            </div>
            <form className="business_form" onSubmit={formik.handleSubmit}>
                <div className="input_container">
                    <input
                        id= "name"
                        className="business_input"
                        type="text"
                        name="name"
                        value={formik.values.name}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        placeholder="Business Name"
                    />
                    {formik.touched.name && formik.errors.name ? (
                    <div className="errorText">{formik.errors.name}</div>
                    ) : null}

                </div>
                <div className="input_container">
                    <input
                        className="business_input"
                        type="text"
                        name="street"
                        id="name"
                        value={formik.values.street}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        placeholder="Street"
                    />
                    {formik.touched.street && formik.errors.street ? (
                    <div className="errorText">{formik.errors.street}</div>
                    ) : null}

                </div>
                <div className="input_container">
                    <input
                        type="text"
                        id="city"
                        className="business_input"
                        value={formik.values.city}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        placeholder="City"
                        />
                        {formik.touched.city && formik.errors.city ? (
                        <div className="errorText">{formik.errors.city}</div>
                        ) : null}
                </div>
                <div className="input_container">
                    <input
                        type="text"
                        id="state"
                        className="business_input"
                        value={formik.values.state}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        placeholder="State"
                        />
                        {formik.touched.state && formik.errors.state ? (
                        <div className="errorText">{formik.errors.state}</div>
                        ) : null}
                </div>
                <div className="input_container">
                    <label>
                        <input
                            type="text"
                            id="image"
                            className="business_input"
                            value={formik.values.image}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            placeholder="Business Image"
                        />
                        {formik.touched.image && formik.errors.image ? (
                        <div className="errorText">{formik.errors.image}</div>
                        ) : null}
                    </label>
                </div>
                <button className="create_button" type="submit">Create</button>
            </form>
        </div>
    );
}

export default CreateBusinessForm;
