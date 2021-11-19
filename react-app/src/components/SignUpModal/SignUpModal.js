import React, {  useState } from "react";
import { Modal } from "../../context/Modal";
import SignUpForm from "./SignUpForm";
import styles from "./SignUpModal.module.css"
// import { useDispatch, useSelector } from "react-redux";


const SignUpModal = () => {
  const [showModal, setShowModal] = useState(false)

  return(
    <div className={styles.modal_container}>
      <button className={styles.business_button} onClick={() => setShowModal(true)}>Sign Up</button>
      {showModal && (
        <Modal onClose={() => setShowModal(false)} >
          <SignUpForm setShowModal={setShowModal} />
        </Modal>
      )}
    </div>
  )
}

export default SignUpModal
