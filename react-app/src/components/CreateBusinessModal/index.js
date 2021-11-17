import React, {  useState } from "react";
import { Modal } from "../../context/Modal";
import CreateBusinessForm from "./CreateBusinessForm";
import styles from "./CreateBusinessModal.module.css"
// import { useDispatch, useSelector } from "react-redux";


const CreateBusinessModal = () => {
  const [showBusinessModal, SetBusinessModal] = useState(false)

  return(
    <div className={styles.modal_container}>
      <button className={styles.business_button} onClick={() => SetBusinessModal(true)}>Add a business</button>
      {showBusinessModal && (
        <Modal onClose={() => SetBusinessModal(false)} >
          <CreateBusinessForm SetBusinessModal={SetBusinessModal} />
        </Modal>
      )}
    </div>
  )
}

export default CreateBusinessModal
