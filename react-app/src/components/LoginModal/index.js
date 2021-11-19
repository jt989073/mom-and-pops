import React, {  useState } from "react";
import { Modal } from "../../context/Modal";
import styles from "./LoginModal.module.css"
import LoginForm from "./LoginForm";
// import { useDispatch, useSelector } from "react-redux";


const LoginModal = () => {
  const [showModal, setShowModal] = useState(false)

  return(
    <div className={styles.modal_container}>
      <button className={styles.business_button} onClick={() => setShowModal(true)}>Login</button>
      {showModal && (
        <Modal onClose={() => setShowModal(false)} >
          <LoginForm SetBusinessModal={setShowModal} />
        </Modal>
      )}
    </div>
  )
}

export default LoginModal
