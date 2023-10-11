import { useState } from "react";
import Button from "../../ui/Button";
import CreateCabinForm from "./CreateCabinForm";
import Modal from "../../ui/Modal";

function AddCabin() {
  return (
    <Modal>
      <Modal.Open opens="cabin-form">
        <Button>Add new cabin</Button>
      </Modal.Open>
      <Modal.Window name="cabin-form">
        <CreateCabinForm />
      </Modal.Window>

      {/* <Modal.Open opens="table">
        <Button>show table</Button>
      </Modal.Open>
      <Modal.Window name="table">
        <CreateCabinForm />
      </Modal.Window> */}
    </Modal>
  );
}
// function AddCabin() {
//   const [isOpenModal, setIsOpenModal] = useState(false);
//   const handleOnClose = () => setIsOpenModal(false);
//   return (
//     <div>
//       <Button onClick={() => setIsOpenModal((s) => !s)}>Add new cabin</Button>
//       {isOpenModal && (
//         <Modal onClose={handleOnClose}>
//           <CreateCabinForm onCloseModal={handleOnClose} />
//         </Modal>
//       )}
//     </div>
//   );
// }

export default AddCabin;
