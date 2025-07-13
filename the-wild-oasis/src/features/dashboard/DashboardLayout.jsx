import styled from "styled-components";
import { useRecentBookings } from "./useRecentBookings";
import Spinner from "../../ui/Spinner";
import { useRecentStays } from "./useRecentStays";

const StyledDashboardLayout = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: auto 34rem auto;
  gap: 2.4rem;
`;

function DashboardLayout() {
  const { isPending: isLoadingBookings, bookings } = useRecentBookings();
  const { isPending: isLoadingStays, stays, confirmStays } = useRecentStays();

  if (isLoadingBookings || isLoadingStays) return <Spinner />;

  console.log(bookings, stays, confirmStays);
  return (
    <StyledDashboardLayout>
      <div>Statistics</div>
      <div>{`Today's Activity`}</div>
      <div>Sales</div>
      <div>Stay Duration</div>
    </StyledDashboardLayout>
  );
}

export default DashboardLayout;
