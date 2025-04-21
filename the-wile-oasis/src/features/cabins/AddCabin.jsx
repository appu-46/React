import Button from "../../ui/Button";
import Modal from "../../ui/Modal";
import CabinTable from "./CabinTable";
import CreateCabinForm from "./CreateCabinForm";

function AddCabin() {
  return (
    <Modal>
      <Modal.Open opens="cabin-form">
        <Button variation="primary" size="medium">
          Add a cabin
        </Button>
      </Modal.Open>
      <Modal.Window name="cabin-form">
        <CreateCabinForm />
      </Modal.Window>

      <Modal.Open opens="table">
        <Button variation="primary" size="medium">
          Show Table
        </Button>
      </Modal.Open>
      <Modal.Window name="table">
        <CabinTable />
      </Modal.Window>
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
