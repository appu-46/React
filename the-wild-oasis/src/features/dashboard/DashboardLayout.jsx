import styled from "styled-components";
import { useRecentBookings } from "./useRecentBookings";
import Spinner from "../../ui/Spinner";
import Stats from "./Stats";
import SalesChart from "./SalesChart";
import { useRecentStays } from "./useRecentStays";
import { useCabins } from "../cabins/useCabins";
import DurationChart from "./DurationChart";
import TodayActivity from "../check-in-out/TodayActivity";

const StyledDashboardLayout = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: auto 34rem auto;
  gap: 2.4rem;
`;

function DashboardLayout() {
  const { isPending: isLoadingBookings, bookings } = useRecentBookings();
  const {
    isPending: isLoadingStays,
    stays,
    confirmStays,
    numDays,
  } = useRecentStays();

  console.log(confirmStays);

  const { cabins, isPending: isLoadingCabin } = useCabins();

  if (isLoadingBookings || isLoadingStays || isLoadingCabin) return <Spinner />;

  return (
    <StyledDashboardLayout>
      <Stats
        bookings={bookings}
        stays={stays}
        confirmedStays={confirmStays}
        numDays={numDays}
        cabinCount={cabins.length}
      />
      <TodayActivity />
      <DurationChart confirmStays={confirmStays} />
      <SalesChart bookings={bookings} numDays={numDays} />
    </StyledDashboardLayout>
  );
}

export default DashboardLayout;
