import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateBusiness } from "../../store/businesses";
import { loadOneBusiness } from "../../store/business";
import * as yup from "yup"
import {useFormik} from "formik"
import "./EditBusiness.css"

function EditBusinessForm({SetBusinessModal}) {
    const dispatch = useDispatch();
    const userId = useSelector(state => state.session.user.id)
    const businessId = useSelector(state => state.business.id)
    const businessName = useSelector(state => state.business.name)
    const businessStreet = useSelector(state => state.business.street)
    const businessCity = useSelector(state => state.business.city)
    const businessState = useSelector(state => state.business.state)
    const businessImage = useSelector(state => state.business.image)


    const formik = useFormik({
        initialValues: {
          name: businessName,
          street: businessStreet,
          city: businessCity,
          state: businessState,
          image: businessImage,
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
            dispatch(updateBusiness(businessId, values)).then(()=>dispatch(loadOneBusiness(businessId)))
            SetBusinessModal(false)
        }
    })


    return (
        <div className="create_business_container">
            <div>
                <div className="create_title">Edit Business</div>
            </div>
            <form className="business_form" onSubmit={formik.handleSubmit}>
                <div>
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
                <div>
                    <input
                        type="text"
                        name="street"
                        id="name"
                        className="business_input"
                        value={formik.values.street}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        placeholder="Street"
                    />
                    {formik.touched.street && formik.errors.street ? (
                    <div className="errorText">{formik.errors.street}</div>
                    ) : null}

                </div>
                <div>
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
                <div>
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
                <div>
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
                <button className="create_button" type="submit">Update</button>
            </form>
        </div>
    );
}

export default EditBusinessForm;
