import Button from "../../ui/Button";
import Modal from "../../ui/Modal";
import CreateCabinForm from "./CreateCabinForm";

function AddCabin() {
  return (
    <Modal>
      <div>
        <Modal.Open opens="cabin-form">
          <Button variation="primary" size="large">
            Add a cabin
          </Button>
        </Modal.Open>
        <Modal.Window name="cabin-form">
          <CreateCabinForm />
        </Modal.Window>
      </div>
    </Modal>
  );
}

export default AddCabin;

// function AddCabin() {
//   const [isOpenmodal, setisOpenModal] = useState(false);

//   return (
//     <>
//       <Button
//         variation="primary"
//         size="medium"
//         onClick={() => setisOpenModal((show) => !show)}
//       >
//         Add a cabin
//       </Button>
//       {isOpenmodal && (
//         <Modal onClose={() => setisOpenModal(false)}>
//           <CreateCabinForm onClose={() => setisOpenModal(false)} />
//         </Modal>
//       )}
//     </>
//   );
// }
