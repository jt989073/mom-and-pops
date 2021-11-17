// import React from "react";
// import { useDispatch, useSelector } from "react-redux";
// // import { useHistory } from "react-router";
// import { useState } from "react";
// import { createBusiness } from "../../store/businesses";
// // import styles from "./CreateBusiness.module.css";

// function CreateBusiness({SetBusinessModal}) {
//     const dispatch = useDispatch();
//     // const userId = useSelector(state => state.session.user.id)

//     const [errors, setErrors] = useState([]);
//     const [businessName, setBusinessName] = useState("");
//     const [street, setStreet] = useState("");
//     const [City, setCity] = useState("");
//     const [state, setState] = useState("");
//     const [image, setImage] = useState("");


//     const onSubmit = (e) => {
//         e.preventDefault();

//         const newBusiness = {
//             name: businessName,
//             street: street,
//             city: City,
//             state: state,
//             image: image,
//         };
//         let createdBusiness = dispatch(createBusiness(newBusiness))

//         if (createdBusiness) {
//             setErrors(createdBusiness);
//         }
//         SetBusinessModal(false)
//     };

//     return (
//         <>
//             <div>
//                 <h1>Create Business</h1>
//             </div>
//             <form onSubmit={onSubmit}>
//                 <ul>
//                     {errors.map((error) => (
//                         <li key={error}>{error}</li>
//                     ))}
//                 </ul>
//                 <div>
//                     {/* <label>Name</label> */}
//                     <input
//                         className={styles.name_input}
//                         type="text"
//                         name="name"
//                         value={businessName}
//                         required
//                         onChange={(e) => setBusinessName(e.target.value)}
//                         placeholder="Business Name"
//                     />
//                 </div>
//                 <div>
//                     <input
//                         type="text"
//                         name="description"
//                         required
//                         value={street}
//                         onChange={(e) => setStreet(e.target.value)}
//                         placeholder="Street"
//                     />
//                 </div>
//                 <div>
//                     <input
//                         value={City}
//                         type="text"
//                         id="text"
//                         required
//                         multiple
//                         onChange={(e) => setCity(e.target.value)}
//                         placeholder="City"
//                         />
//                 </div>
//                 <div>
//                     <input
//                         value={state}
//                         type="text"
//                         id="text"
//                         required
//                         multiple
//                         onChange={(e) => setState(e.target.value)}
//                         placeholder="State"
//                         />
//                 </div>
//                 <div>
//                     <label htmlFor="abv">
//                         <input
//                             type="text"
//                             id="logo"
//                             required
//                             value={image}
//                             onChange={(e) => setImage(e.target.value)}
//                             placeholder="Logo Image"
//                         />
//                     </label>
//                 </div>
//                 <button>Create</button>
//             </form>
//         </>
//     );
// }

// export default CreateBusiness;
