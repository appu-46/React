import CityItem from "./CityItem";
import Spinner from "./Spinner";
import styles from "./CityList.module.css";

function CityList({ cities, isLoading }) {
  if (isLoading) return <Spinner />;
  return (
    <ul className={styles.CityList}>
      {cities.map((city) => (
        <CityItem key={city.id} city={city} />
      ))}
    </ul>
    // <div className={styles.CityList}>City</div>
  );
}

export default CityList;
