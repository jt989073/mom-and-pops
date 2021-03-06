import React, {  useState } from "react";
import { Modal } from "../../context/Modal";
import ReviewBusinessForm from "./ReviewBusinessForm";
import styles from "./ReviewBusinessModal.module.css"
// import { useDispatch, useSelector } from "react-redux";


const ReviewBusinessModal = () => {
  const [showBusinessModal, SetBusinessModal] = useState(false)

  return(
    <div className={styles.modal_container}>
      <button className={styles.business_button} onClick={() => SetBusinessModal(true)}>Review Business</button>
      {showBusinessModal && (
        <Modal onClose={() => SetBusinessModal(false)} >
          <ReviewBusinessForm SetBusinessModal={SetBusinessModal} />
        </Modal>
      )}
    </div>
  )
}

export default ReviewBusinessModal
