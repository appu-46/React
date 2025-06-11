import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteBookings } from "../../services/apiBookings";
import toast from "react-hot-toast";

export function useDeleteBooking() {
  const queryClient = useQueryClient();

  const { mutate: deleteBooking, isPending: isDeletingBooking } = useMutation({
    mutationFn: (id) => deleteBookings(id),
    onSuccess: () => {
      toast.success(`Booking deleted successfully`),
        queryClient.invalidateQueries({
          queryKey: ["bookings"],
        });
    },
    onError: (err) => {
      toast.error(`Error occurred while deleting the booking`);
      console.log(err);
      throw Error(err);
    },
  });

  return { deleteBooking, isDeletingBooking };
}
