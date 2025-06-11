import styled from "styled-components";

import BookingDataBox from "./BookingDataBox";
import Row from "../../ui/Row";
import Heading from "../../ui/Heading";
import Tag from "../../ui/Tag";
import ButtonGroup from "../../ui/ButtonGroup";
import Button from "../../ui/Button";
import ButtonText from "../../ui/ButtonText";
import Spinner from "../../ui/Spinner";
import Modal from "../../ui/Modal";
import ConfirmDelete from "../../ui/ConfirmDelete";

import { useBooking } from "./useBoooking";
import { HiArrowUpOnSquare, HiTrash } from "react-icons/hi2";
import { useCheckOut } from "../check-in-out/useCheckout";
import { useMoveBack } from "../../hooks/useMoveBack";
import { useDeleteBooking } from "./useDeleteBookings";
import { useNavigate } from "react-router-dom";

const HeadingGroup = styled.div`
  display: flex;
  gap: 2.4rem;
  align-items: center;
`;

function BookingDetail() {
  const { booking, isPending } = useBooking();
  const { checkOut, isCheckingOut } = useCheckOut();
  const { deleteBooking, isDeletingBooking } = useDeleteBooking();

  console.log(booking);

  const { status, id: bookingId } = booking;

  const moveBack = useMoveBack();
  const navigate = useNavigate();

  const statusToTagName = {
    unconfirmed: "blue",
    "checked-in": "green",
    "checked-out": "silver",
  };

  if (isPending) return <Spinner />;
  return (
    <Row>
      <Row type="horizontal">
        <HeadingGroup>
          <Heading as="h1">Booking #{bookingId}</Heading>
          <Tag type={statusToTagName[status]}>{status.replace("-", " ")}</Tag>
        </HeadingGroup>
        <ButtonText onClick={moveBack}>&larr; Back</ButtonText>
      </Row>

      <BookingDataBox booking={booking} />

      <ButtonGroup>
        {status === "checked-in" && (
          <Button
            icon={<HiArrowUpOnSquare />}
            onClick={() => checkOut(bookingId)}
            disabled={isCheckingOut}
          >
            Check Out
          </Button>
        )}
        <Modal>
          <Button variation="secondary" onClick={moveBack}>
            Back
          </Button>
          <Modal.Open opens="delete">
            <Button
              variation="danger"
              icon={<HiTrash />}
              disabled={isDeletingBooking}
            >
              Delete booking
            </Button>
          </Modal.Open>
          <Modal.Window name="delete">
            <ConfirmDelete
              resourceName="booking"
              onConfirm={() => {
                deleteBooking(bookingId, {
                  onSettled: () => navigate(-1),
                });
              }}
            />
          </Modal.Window>
        </Modal>
      </ButtonGroup>
    </Row>
  );
}

export default BookingDetail;
