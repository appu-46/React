import CountryItem from "./CountryItem";
import Spinner from "./Spinner";
import styles from "./Countrylist.module.css";
import Message from "./Message";
import PropTypes from "prop-types";

Countrylist.propTypes = {
  cities: PropTypes.array,
  isLoading: PropTypes.bool,
};

function Countrylist({ cities, isLoading }) {
  if (isLoading) return <Spinner />;

  if (!cities.length)
    return (
      <Message message="Add your first city by clicking on a city on the map" />
    );
  const countries = cities.reduce((arr, city) => {
    if (!arr.map((el) => el.country).includes(city.country))
      return [...arr, { country: city.country, emoji: city.emoji }];
    else return arr;
  }, []);
  return (
    <ul className={styles.countryList}>
      {countries.map((country) => (
        <CountryItem country={country} key={country.emoji} />
      ))}
    </ul>
    // <div className={styles.Countrylist}>City</div>
  );
}

export default Countrylist;
