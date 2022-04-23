
import { SvgSelector } from '../icons/SvgSelector';
import styles from './hourlyWeather.module.scss'
const HourlyCard = ({dt, timezone, weather, temp}) => {
  return (
    <>
      <div className={styles.logo}>
      <SvgSelector id={weather[0].icon}/>
      </div>
      <h2>{Math.floor(temp)}&deg;C</h2>
      <span>{weather[0].description}</span>
      </>
  );
};

export default HourlyCard;