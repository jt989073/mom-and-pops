import React, {  useState } from "react";
import { Modal } from "../../context/Modal";
import EditBusinessForm from "./EditBusinessForm";
import styles from "./EditBusinessModal.module.css"
// import { useDispatch, useSelector } from "react-redux";


const EditBusinessModal = () => {
  const [showBusinessModal, SetBusinessModal] = useState(false)

  return(
    <div className={styles.modal_container}>
      <button className={styles.business_button} onClick={() => SetBusinessModal(true)}>Edit Business</button>
      {showBusinessModal && (
        <Modal onClose={() => SetBusinessModal(false)} >
          <EditBusinessForm SetBusinessModal={SetBusinessModal} />
        </Modal>
      )}
    </div>
  )
}

export default EditBusinessModal
