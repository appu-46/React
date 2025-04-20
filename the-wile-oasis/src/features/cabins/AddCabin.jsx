import Button from "../../ui/Button";
import Modal from "../../ui/Modal";
import { useState } from "react";
import CreateCabinForm from "./CreateCabinForm";

function AddCabin() {
  const [isOpenmodal, setisOpenModal] = useState(false);

  return (
    <>
      <Button
        variation="primary"
        size="medium"
        onClick={() => setisOpenModal((show) => !show)}
      >
        Add a cabin
      </Button>
      {isOpenmodal && (
        <Modal onClose={() => setisOpenModal(false)}>
          <CreateCabinForm onClose={() => setisOpenModal(false)} />
        </Modal>
      )}
    </>
  );
}

export default AddCabin;
